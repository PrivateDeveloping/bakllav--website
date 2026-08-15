import { i as __toESM } from "../_runtime.mjs";
import { n as eur, t as business } from "./business-7FlG9i--.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faleminderit-Cl6xEIy1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Faleminderit() {
	const [order, setOrder] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		try {
			const raw = sessionStorage.getItem("bes-last-order");
			if (raw) setOrder(JSON.parse(raw));
		} catch {}
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-2xl px-5 py-16 md:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-[2rem] leading-tight sm:text-[2.4rem]",
				children: "Faleminderit për porosinë!"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-[0.98rem] leading-relaxed text-muted-foreground",
				children: "Porosia juaj është pranuar. Do t'ju kontaktojmë për ta konfirmuar porosinë dhe kohën e dorëzimit."
			}),
			order && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 border border-border bg-cream p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-baseline justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Referenca"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-lg",
							children: order.reference
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-5 space-y-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Klienti",
								value: order.name
							}),
							order.items.map((i, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: i.name,
								value: `${i.variant} · ${i.size} · ${i.qty} × ${eur(i.unitPrice)}`
							}, idx)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Data e dëshiruar",
								value: order.date
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Dërgesa",
								value: "Falas"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex items-baseline justify-between border-t border-border/70 pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm",
							children: "Totali"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-serif text-2xl tabular-nums",
							children: eur(order.total)
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "bg-primary px-5 py-3 text-sm text-primary-foreground",
					children: "Kthehu në Ballinë"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: business.instagramUrl,
					target: "_blank",
					rel: "noreferrer",
					className: "border border-primary px-5 py-3 text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground",
					children: "Na kontakto në Instagram"
				})]
			})
		]
	});
}
function Row({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex justify-between gap-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "text-right text-foreground",
			children: value
		})]
	});
}
//#endregion
export { Faleminderit as component };
