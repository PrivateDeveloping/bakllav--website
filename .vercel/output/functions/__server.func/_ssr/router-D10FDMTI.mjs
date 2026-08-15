import { i as __toESM } from "../_runtime.mjs";
import { a as productVariants, c as sizes, i as productName, l as variantLabel, n as eur, r as priceFor, s as sizeLabel, t as business } from "./business-7FlG9i--.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as createRootRouteWithContext, b as useRouter, d as HeadContent, g as createFileRoute, h as lazyRouteComponent, m as Outlet, p as createRouter, u as Scripts, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-D10FDMTI.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BsSHTJhN.css";
var CartContext = (0, import_react.createContext)(null);
var KEY = "bes-cart-v1";
function isSizeId(size) {
	return sizes.some((s) => s.id === size);
}
function isVariantId(variant) {
	return productVariants.some((v) => v.id === variant);
}
function normalizeCartItems(value) {
	if (!Array.isArray(value)) return [];
	return value.reduce((items, raw) => {
		const item = raw;
		if (!isSizeId(item.size)) return items;
		const legacyVariant = isVariantId(item.productId) ? item.productId : void 0;
		const variantId = isVariantId(item.variantId) ? item.variantId : legacyVariant ?? "me-arra";
		const qty = typeof item.qty === "number" && Number.isInteger(item.qty) && item.qty > 0 ? item.qty : 1;
		const nextItem = {
			productId: "bakllava",
			variantId,
			size: item.size,
			qty
		};
		const existing = items.findIndex((it) => it.productId === nextItem.productId && it.variantId === nextItem.variantId && it.size === nextItem.size);
		if (existing === -1) return [...items, nextItem];
		const next = [...items];
		const existingItem = next[existing];
		if (!existingItem) return next;
		next[existing] = {
			...existingItem,
			qty: existingItem.qty + nextItem.qty
		};
		return next;
	}, []);
}
function CartProvider({ children }) {
	const [items, setItems] = (0, import_react.useState)([]);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(KEY);
			if (raw) setItems(normalizeCartItems(JSON.parse(raw)));
		} catch {}
	}, []);
	(0, import_react.useEffect)(() => {
		try {
			localStorage.setItem(KEY, JSON.stringify(items));
		} catch {}
	}, [items]);
	const add = (0, import_react.useCallback)((productId, variantId, size, qty = 1) => {
		setItems((prev) => {
			const i = prev.findIndex((it) => it.productId === productId && it.variantId === variantId && it.size === size);
			if (i === -1) return [...prev, {
				productId,
				variantId,
				size,
				qty
			}];
			const next = [...prev];
			next[i] = {
				...next[i],
				qty: next[i].qty + qty
			};
			return next;
		});
	}, []);
	const setQty = (0, import_react.useCallback)((productId, variantId, size, qty) => {
		setItems((prev) => prev.map((it) => it.productId === productId && it.variantId === variantId && it.size === size ? {
			...it,
			qty
		} : it).filter((it) => it.qty > 0));
	}, []);
	const remove = (0, import_react.useCallback)((productId, variantId, size) => {
		setItems((prev) => prev.filter((it) => !(it.productId === productId && it.variantId === variantId && it.size === size)));
	}, []);
	const clear = (0, import_react.useCallback)(() => setItems([]), []);
	const value = (0, import_react.useMemo)(() => {
		const subtotal = items.reduce((s, it) => s + priceFor(it.size, it.variantId) * it.qty, 0);
		return {
			items,
			add,
			setQty,
			remove,
			clear,
			count: items.reduce((s, it) => s + it.qty, 0),
			subtotal,
			total: subtotal + business.deliveryFee,
			open,
			setOpen
		};
	}, [
		items,
		add,
		setQty,
		remove,
		clear,
		open
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartContext.Provider, {
		value,
		children
	});
}
function useCart() {
	const ctx = (0, import_react.useContext)(CartContext);
	if (!ctx) throw new Error("useCart must be used inside CartProvider");
	return ctx;
}
function CartDrawer() {
	const cart = useCart();
	if (!cart.open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			"aria-label": "Mbyll shportën",
			onClick: () => cart.setOpen(false),
			className: "absolute inset-0 bg-brown/40"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-background shadow-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b border-border px-5 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg",
						children: "Shporta"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => cart.setOpen(false),
						className: "p-2 text-muted-foreground",
						"aria-label": "Mbyll",
						children: "✕"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 overflow-y-auto px-5",
					children: cart.items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "py-10 text-sm text-muted-foreground",
						children: "Shporta është e zbrazët."
					}) : cart.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-b border-border/70 py-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[0.98rem]",
								children: productName(it.productId)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-0.5 text-xs text-muted-foreground",
								children: [
									"Varianti: ",
									variantLabel(it.variantId),
									" · Madhësia: ",
									sizeLabel(it.size),
									" ·",
									" ",
									eur(priceFor(it.size, it.variantId)),
									" / tepsi"
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-serif text-lg tabular-nums",
								children: eur(priceFor(it.size, it.variantId) * it.qty)
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center border border-border",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "h-9 w-9 text-muted-foreground",
										onClick: () => cart.setQty(it.productId, it.variantId, it.size, it.qty - 1),
										"aria-label": "Zvogëlo",
										children: "−"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-7 text-center text-sm tabular-nums",
										children: it.qty
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "h-9 w-9 text-muted-foreground",
										onClick: () => cart.setQty(it.productId, it.variantId, it.size, it.qty + 1),
										"aria-label": "Rrit",
										children: "+"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => cart.remove(it.productId, it.variantId, it.size),
								className: "text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground",
								children: "Hiq"
							})]
						})]
					}, `${it.productId}-${it.variantId}-${it.size}`))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-border px-5 py-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Nëntotali" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums text-foreground",
								children: eur(cart.subtotal)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1 flex justify-between text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Dërgesa falas" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums text-foreground",
								children: "0€"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex items-baseline justify-between border-t border-border/70 pt-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm",
								children: "Totali"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-serif text-2xl tabular-nums",
								children: eur(cart.total)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/porosit",
							onClick: () => cart.setOpen(false),
							className: "mt-4 block bg-primary px-5 py-3.5 text-center text-sm text-primary-foreground transition-opacity hover:opacity-90 aria-disabled:opacity-50",
							"aria-disabled": cart.items.length === 0,
							children: "Vazhdo te porosia"
						})
					]
				})
			]
		})]
	});
}
function Wordmark({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: `inline-flex items-baseline gap-2 ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": true,
			className: "inline-block size-2 rotate-45 border border-honey/70 bg-honey/30 translate-y-[-1px]"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-serif text-[1.05rem] tracking-[0.02em] text-foreground sm:text-[1.15rem]",
			children: "Bakllavë e Shtëpisë"
		})]
	});
}
var nav = [
	{
		label: "Ballina",
		href: "/"
	},
	{
		label: "Bakllavat",
		href: "/#bakllavat"
	},
	{
		label: "Rreth Nesh",
		href: "/#rreth"
	},
	{
		label: "Porosit",
		href: "/porosit"
	},
	{
		label: "Kontakt",
		href: "/#kontakt"
	}
];
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const cart = useCart();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-border/70 bg-background/92 backdrop-blur-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-5 sm:h-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "shrink-0",
					onClick: () => setOpen(false),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 text-sm text-muted-foreground md:flex",
					children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: n.href,
						className: "transition-colors hover:text-foreground",
						children: n.label
					}, n.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => cart.setOpen(true),
							className: "relative px-2 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground",
							"aria-label": "Hap shportën",
							children: ["Shporta", cart.count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "ml-1 text-honey",
								children: [
									"(",
									cart.count,
									")"
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/porosit",
							className: "hidden bg-primary px-4 py-2 text-sm text-primary-foreground transition-opacity hover:opacity-90 sm:inline-block",
							children: "Porosit Tani"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "-mr-2 p-2 md:hidden",
							"aria-label": "Menu",
							"aria-expanded": open,
							onClick: () => setOpen((v) => !v),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block h-px w-6 bg-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 block h-px w-6 bg-foreground" })]
						})
					]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border/70 bg-background md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "mx-auto flex max-w-6xl flex-col px-5 py-2",
				children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: n.href,
					onClick: () => setOpen(false),
					className: "border-b border-border/50 py-3.5 text-[0.95rem] text-foreground last:border-0",
					children: n.label
				}, n.label))
			})
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border/70 bg-cream",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-[1.4fr_1fr_1fr]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground",
					children: "Bakllavë e bërë në shtëpi me kujdes dhe përbërës cilësorë."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Kontakt"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 space-y-2 text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: business.phoneHref,
								className: "hover:text-foreground",
								children: business.phone
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: business.instagramUrl,
								target: "_blank",
								rel: "noreferrer",
								className: "hover:text-foreground",
								children: business.instagramHandle
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: business.location })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Faqja"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 space-y-2 text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/#bakllavat",
								className: "hover:text-foreground",
								children: "Bakllavat"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/#rreth",
								className: "hover:text-foreground",
								children: "Rreth Nesh"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/porosit",
								className: "hover:text-foreground",
								children: "Porosit"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/#kontakt",
								className: "hover:text-foreground",
								children: "Kontakt"
							}) })
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 pb-8 text-xs text-muted-foreground",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" ",
				business.name,
				", Podujevë"
			]
		})]
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var siteName = "Bakllavë e Shtëpisë";
var defaultTitle = "Bakllavë e Shtëpisë | Bakllavë e bërë në shtëpi në Podujevë";
var defaultDescription = "Bakllavë e bërë në shtëpi me arra dhe pa arra, e përgatitur me dorë në Podujevë. Dërgesa falas në Podujevë dhe Prishtinë.";
var socialImagePath = "/hero-image.png";
var socialImageAlt = "Tepsi e plotë me bakllavë të prerë në copa";
function absoluteUrl(path, origin) {
	if (/^https?:\/\//.test(path)) return path;
	const normalizedPath = path.startsWith("/") ? path : `/${path}`;
	const baseOrigin = origin ?? (typeof window !== "undefined" ? window.location.origin : void 0);
	return baseOrigin ? `${baseOrigin}${normalizedPath}` : normalizedPath;
}
function pageMeta({ title, description, path, origin }) {
	const url = absoluteUrl(path, origin);
	const image = absoluteUrl(socialImagePath, origin);
	return [
		{ title },
		{
			name: "description",
			content: description
		},
		{
			property: "og:site_name",
			content: siteName
		},
		{
			property: "og:title",
			content: title
		},
		{
			property: "og:description",
			content: description
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			property: "og:url",
			content: url
		},
		{
			property: "og:image",
			content: image
		},
		{
			property: "og:image:secure_url",
			content: image
		},
		{
			property: "og:image:type",
			content: "image/png"
		},
		{
			property: "og:image:width",
			content: "1254"
		},
		{
			property: "og:image:height",
			content: "1254"
		},
		{
			property: "og:image:alt",
			content: socialImageAlt
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "twitter:title",
			content: title
		},
		{
			name: "twitter:description",
			content: description
		},
		{
			name: "twitter:image",
			content: image
		},
		{
			name: "twitter:image:alt",
			content: socialImageAlt
		}
	];
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$3 = createRootRouteWithContext()({
	head: ({ match }) => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			...pageMeta({
				title: defaultTitle,
				description: defaultDescription,
				path: "/",
				origin: match.context.siteOrigin
			}),
			{
				name: "theme-color",
				content: "#faf6ee"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Karla:wght@400;500&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			},
			{
				rel: "alternate icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "apple-touch-icon",
				href: "/apple-touch-icon.png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "sq",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$3.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CartProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "paper flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { position: "top-center" })] })
	});
}
var $$splitComponentImporter$2 = () => import("./routes-BEVBq7qS.mjs");
var title$2 = "Bakllavë e Shtëpisë | Bakllavë e bërë në shtëpi | Podujevë & Prishtinë";
var description$2 = "Bakllavë e shtëpisë me arra dhe pa arra, e bërë me dorë në Podujevë. Porosit online, dërgesa falas në Podujevë dhe Prishtinë.";
var Route$2 = createFileRoute("/")({
	head: ({ match }) => ({
		meta: pageMeta({
			title: title$2,
			description: description$2,
			path: "/",
			origin: match.context.siteOrigin
		}),
		links: [{
			rel: "canonical",
			href: "/"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FoodEstablishment",
				name: "Bakllavë e Shtëpisë",
				servesCuisine: "Bakllavë",
				address: {
					"@type": "PostalAddress",
					addressLocality: "Podujevë",
					addressCountry: "XK"
				},
				telephone: "+383 43 963 564",
				areaServed: ["Podujevë", "Prishtinë"]
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./faleminderit-Cl6xEIy1.mjs");
var title$1 = "Faleminderit për porosinë | Bakllavë e Shtëpisë";
var description$1 = "Porosia juaj është pranuar. Do t'ju kontaktojmë për ta konfirmuar.";
var Route$1 = createFileRoute("/faleminderit")({
	head: ({ match }) => ({
		meta: [...pageMeta({
			title: title$1,
			description: description$1,
			path: "/faleminderit",
			origin: match.context.siteOrigin
		}), {
			name: "robots",
			content: "noindex"
		}],
		links: [{
			rel: "canonical",
			href: "/faleminderit"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./porosit-EBqL3GzB.mjs");
var title = "Porosit bakllavë | Bakllavë e Shtëpisë";
var description = "Plotëso porosinë për bakllavë dhe zgjedh variantin me arra ose pa arra. Dërgesa falas në Podujevë dhe Prishtinë, porosit 2–3 ditë më herët.";
var Route = createFileRoute("/porosit")({
	head: ({ match }) => ({
		meta: pageMeta({
			title,
			description,
			path: "/porosit",
			origin: match.context.siteOrigin
		}),
		links: [{
			rel: "canonical",
			href: "/porosit"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$2.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$3
	}),
	FaleminderitRoute: Route$1.update({
		id: "/faleminderit",
		path: "/faleminderit",
		getParentRoute: () => Route$3
	}),
	PorositRoute: Route.update({
		id: "/porosit",
		path: "/porosit",
		getParentRoute: () => Route$3
	})
};
var routeTree = Route$3._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: {
			queryClient,
			siteOrigin: typeof window !== "undefined" ? window.location.origin : void 0
		},
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { useCart as n, router_exports as t };
