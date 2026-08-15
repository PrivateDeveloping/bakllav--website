import { Resend } from "resend";

export type OrderPayload = {
  reference: string;
  customer: {
    name: string;
    phone: string;
    email?: string;
    city: string;
    address: string;
    date: string;
    time: string;
    notes?: string;
  };
  items: { name: string; variant: string; size: string; qty: number; unitPrice: number }[];
  subtotal: number;
  delivery: number;
  total: number;
};

function escapeHtml(value: string | number | undefined) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function eur(value: number) {
  return `${value}€`;
}

function requiredEnv(name: "RESEND_API_KEY" | "ORDER_NOTIFICATION_EMAIL" | "ORDER_FROM_EMAIL") {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function orderHtml(o: OrderPayload) {
  const rows = o.items
    .map(
      (i) =>
        `<tr>
          <td>${escapeHtml(i.name)}</td>
          <td>${escapeHtml(i.variant)}</td>
          <td>${escapeHtml(i.size)}</td>
          <td style="text-align:center;">${i.qty}</td>
          <td style="text-align:right;">${eur(i.unitPrice)}</td>
          <td style="text-align:right;">${eur(i.qty * i.unitPrice)}</td>
        </tr>`,
    )
    .join("");
  const c = o.customer;
  return `<!doctype html>
<html>
  <body style="margin:0; background:#f7f2e8; color:#2c1d14; font-family:Arial, sans-serif;">
    <div style="max-width:720px; margin:0 auto; padding:28px 18px;">
      <div style="background:#ffffff; border:1px solid #e5d8c5; padding:24px;">
        <p style="margin:0 0 6px; font-size:12px; letter-spacing:.08em; text-transform:uppercase; color:#8a5f2d;">
          Porosi e re
        </p>
        <h1 style="margin:0; font-size:24px; line-height:1.25;">${escapeHtml(o.reference)}</h1>

        <h2 style="margin:24px 0 10px; font-size:16px;">Klienti</h2>
        <p style="margin:0; line-height:1.6;">
          <strong>${escapeHtml(c.name)}</strong><br />
          Telefoni: ${escapeHtml(c.phone)}${c.email ? `<br />Email: ${escapeHtml(c.email)}` : ""}
        </p>

        <h2 style="margin:24px 0 10px; font-size:16px;">Dorëzimi</h2>
        <p style="margin:0; line-height:1.6;">
          ${escapeHtml(c.city)}, ${escapeHtml(c.address)}<br />
          Data: <strong>${escapeHtml(c.date)}</strong><br />
          Koha: ${escapeHtml(c.time)}
        </p>

        ${
          c.notes
            ? `<h2 style="margin:24px 0 10px; font-size:16px;">Shënime</h2>
        <p style="margin:0; line-height:1.6;">${escapeHtml(c.notes)}</p>`
            : ""
        }

        <h2 style="margin:24px 0 10px; font-size:16px;">Produktet</h2>
        <table cellpadding="8" cellspacing="0" style="width:100%; border-collapse:collapse; font-size:14px;">
          <thead>
            <tr style="background:#f7f2e8;">
              <th align="left" style="border:1px solid #e5d8c5;">Produkti</th>
              <th align="left" style="border:1px solid #e5d8c5;">Varianti</th>
              <th align="left" style="border:1px solid #e5d8c5;">Madhësia</th>
              <th align="center" style="border:1px solid #e5d8c5;">Sasia</th>
              <th align="right" style="border:1px solid #e5d8c5;">Çmimi</th>
              <th align="right" style="border:1px solid #e5d8c5;">Totali</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>

        <div style="margin-top:20px; border-top:1px solid #e5d8c5; padding-top:14px; font-size:15px;">
          <p style="margin:0 0 6px;">Nëntotali: <strong>${eur(o.subtotal)}</strong></p>
          <p style="margin:0 0 6px;">Dërgesa: <strong>${eur(o.delivery)}</strong></p>
          <p style="margin:0; font-size:18px;">Totali: <strong>${eur(o.total)}</strong></p>
        </div>
      </div>
    </div>
  </body>
</html>`;
}

function messageHtml(m: { name: string; phone: string; message: string }) {
  return `<!doctype html>
<html>
  <body style="margin:0; background:#f7f2e8; color:#2c1d14; font-family:Arial, sans-serif;">
    <div style="max-width:640px; margin:0 auto; padding:28px 18px;">
      <div style="background:#ffffff; border:1px solid #e5d8c5; padding:24px;">
        <p style="margin:0 0 6px; font-size:12px; letter-spacing:.08em; text-transform:uppercase; color:#8a5f2d;">
          Mesazh nga faqja
        </p>
        <h1 style="margin:0; font-size:22px; line-height:1.25;">${escapeHtml(m.name)}</h1>

        <h2 style="margin:24px 0 10px; font-size:16px;">Kontakti</h2>
        <p style="margin:0; line-height:1.6;">Telefoni: ${escapeHtml(m.phone)}</p>

        <h2 style="margin:24px 0 10px; font-size:16px;">Mesazhi</h2>
        <p style="margin:0; line-height:1.6; white-space:pre-wrap;">${escapeHtml(m.message)}</p>
      </div>
    </div>
  </body>
</html>`;
}

export async function deliverOrder(o: OrderPayload) {
  const resend = new Resend(requiredEnv("RESEND_API_KEY"));

  try {
    const { data, error } = await resend.emails.send({
      from: requiredEnv("ORDER_FROM_EMAIL"),
      to: [requiredEnv("ORDER_NOTIFICATION_EMAIL")],
      subject: `Porosi e re – ${o.reference} – ${o.customer.name}`,
      html: orderHtml(o),
    });

    if (error) {
      console.error("[porosi] Resend rejected order notification:", error);
      throw new Error("Order notification email was rejected by Resend.");
    }

    return { emailed: true, id: data?.id };
  } catch (error) {
    if (
      error instanceof Error &&
      error.message.startsWith("Missing required environment variable:")
    ) {
      throw error;
    }

    console.error("[porosi] Resend order notification failed:", error);
    throw new Error("Order notification email could not be sent.");
  }
}

export async function deliverMessage(m: { name: string; phone: string; message: string }) {
  const resend = new Resend(requiredEnv("RESEND_API_KEY"));

  try {
    const { data, error } = await resend.emails.send({
      from: requiredEnv("ORDER_FROM_EMAIL"),
      to: [requiredEnv("ORDER_NOTIFICATION_EMAIL")],
      subject: `Mesazh nga faqja: ${m.name}`,
      html: messageHtml(m),
    });

    if (error) {
      console.error("[mesazh] Resend rejected contact notification:", error);
      throw new Error("Contact notification email was rejected by Resend.");
    }

    return { emailed: true, id: data?.id };
  } catch (error) {
    if (
      error instanceof Error &&
      error.message.startsWith("Missing required environment variable:")
    ) {
      throw error;
    }

    console.error("[mesazh] Resend contact notification failed:", error);
    throw new Error("Contact notification email could not be sent.");
  }
}
