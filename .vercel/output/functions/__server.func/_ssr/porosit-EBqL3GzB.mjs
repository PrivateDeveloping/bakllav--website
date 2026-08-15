import { i as __toESM } from "../_runtime.mjs";
import { i as productName, l as variantLabel, n as eur, r as priceFor, s as sizeLabel, t as business } from "./business-7FlG9i--.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as useCart } from "./router-D10FDMTI.mjs";
import { n as submitOrder } from "./orders.functions-CPpnPOxB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/porosit-EBqL3GzB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function OrderSummary({ date }) {
	const cart = useCart();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border border-border bg-cream p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "Përmbledhja e porosisë"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-3",
				children: cart.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex justify-between gap-4 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [productName(it.productId), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "block text-xs text-muted-foreground",
						children: [
							variantLabel(it.variantId),
							" · ",
							sizeLabel(it.size),
							" · ",
							it.qty,
							" ×",
							" ",
							eur(priceFor(it.size, it.variantId))
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tabular-nums",
						children: eur(priceFor(it.size, it.variantId) * it.qty)
					})]
				}, `${it.productId}-${it.variantId}-${it.size}`))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 space-y-1 border-t border-border/70 pt-4 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Nëntotali" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums text-foreground",
							children: eur(cart.subtotal)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Dërgesa falas" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums text-foreground",
							children: "0€"
						})]
					}),
					date && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Data e dëshiruar" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground",
							children: date
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline justify-between pt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Totali" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-serif text-2xl tabular-nums",
							children: eur(cart.total)
						})]
					})
				]
			})
		]
	});
}
function minDate() {
	const d = /* @__PURE__ */ new Date();
	d.setDate(d.getDate() + business.leadTimeDays);
	return d.toISOString().slice(0, 10);
}
function CheckoutForm() {
	const cart = useCart();
	const navigate = useNavigate();
	const [date, setDate] = (0, import_react.useState)(minDate());
	const [sending, setSending] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "grid gap-10 md:grid-cols-[1.15fr_1fr] md:gap-14",
		onSubmit: async (e) => {
			e.preventDefault();
			if (cart.items.length === 0) return;
			const fd = new FormData(e.currentTarget);
			setSending(true);
			try {
				const items = cart.items.map((it) => ({
					name: productName(it.productId),
					variant: variantLabel(it.variantId),
					size: sizeLabel(it.size),
					qty: it.qty,
					unitPrice: priceFor(it.size, it.variantId)
				}));
				const res = await submitOrder({ data: {
					name: String(fd.get("name") ?? ""),
					phone: String(fd.get("phone") ?? ""),
					email: String(fd.get("email") ?? ""),
					city: String(fd.get("city") ?? ""),
					address: String(fd.get("address") ?? ""),
					date: String(fd.get("date") ?? ""),
					time: String(fd.get("time") ?? ""),
					notes: String(fd.get("notes") ?? ""),
					items
				} });
				sessionStorage.setItem("bes-last-order", JSON.stringify({
					reference: res.reference,
					name: String(fd.get("name") ?? ""),
					date: String(fd.get("date") ?? ""),
					total: res.total,
					items
				}));
				cart.clear();
				navigate({ to: "/faleminderit" });
			} catch {
				toast.error("Porosia nuk u dërgua. Provo përsëri ose na merr në telefon.");
			} finally {
				setSending(false);
			}
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Emri dhe mbiemri",
						name: "name",
						required: true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Numri i telefonit",
						name: "phone",
						type: "tel",
						required: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Email (opsional)",
					name: "email",
					type: "email"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "Qyteti"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							name: "city",
							required: true,
							defaultValue: "Podujevë",
							className: "mt-2 h-12 w-full border border-border bg-background px-3 text-[0.95rem] outline-none focus:border-honey",
							children: [business.deliveryCities.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: c,
								children: c
							}, c)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "Tjetër",
								children: "Tjetër (na kontakto)"
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Adresa",
						name: "address",
						required: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: "Data e dëshiruar"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								name: "date",
								type: "date",
								required: true,
								min: minDate(),
								value: date,
								onChange: (e) => setDate(e.target.value),
								className: "mt-2 h-12 w-full border border-border bg-background px-3 text-[0.95rem] outline-none focus:border-honey"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-2 block text-xs text-muted-foreground",
								children: "Porositë bëhen 2–3 ditë më herët."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "Koha e dëshiruar"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							name: "time",
							defaultValue: "Pasdite (14:00–18:00)",
							className: "mt-2 h-12 w-full border border-border bg-background px-3 text-[0.95rem] outline-none focus:border-honey",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Paradite (09:00–13:00)" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Pasdite (14:00–18:00)" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Mbrëmje (18:00–21:00)" })
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "Shënime shtesë"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						name: "notes",
						rows: 4,
						className: "mt-2 w-full border border-border bg-background px-3 py-3 text-[0.95rem] outline-none focus:border-honey"
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-5 md:sticky md:top-24 md:self-start",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderSummary, { date }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					disabled: sending || cart.items.length === 0,
					className: "w-full bg-primary px-6 py-4 text-sm text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50",
					children: sending ? "Duke dërguar…" : "Konfirmo Porosinë"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs leading-relaxed text-muted-foreground",
					children: "Pagesa bëhet me dorëzim. Pas dërgimit ju kontaktojmë për të konfirmuar porosinë dhe kohën e dorëzimit."
				})
			]
		})]
	});
}
function Field({ label, name, type = "text", required }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "eyebrow",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			name,
			type,
			required,
			className: "mt-2 h-12 w-full border border-border bg-background px-3 text-[0.95rem] outline-none focus:border-honey"
		})]
	});
}
function Porosit() {
	const cart = useCart();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-5 py-12 md:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "Porosia"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 text-[1.9rem] leading-tight sm:text-[2.3rem]",
				children: "Plotëso porosinë"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-lg text-[0.95rem] leading-relaxed text-muted-foreground",
				children: "Nuk ka pagesë online. Na dërgo të dhënat dhe ne të kontaktojmë për ta konfirmuar porosinë."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10",
				children: cart.items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-border bg-cream p-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: "Shporta është e zbrazët. Zgjedh një bakllavë për të vazhduar."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						hash: "bakllavat",
						className: "mt-5 inline-block bg-primary px-5 py-3 text-sm text-primary-foreground",
						children: "Shiko bakllavat"
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckoutForm, {})
			})
		]
	});
}
//#endregion
export { Porosit as component };
