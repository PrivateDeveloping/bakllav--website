import { i as __toESM } from "../_runtime.mjs";
import { a as productVariants, c as sizes, n as eur, o as products, r as priceFor, t as business } from "./business-7FlG9i--.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as useCart } from "./router-D10FDMTI.mjs";
import { t as sendMessage } from "./orders.functions-CPpnPOxB.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BEVBq7qS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Fotografitë e faqes.
* Për t'i zëvendësuar: ngarko foton e re dhe ndrysho vetëm `url` këtu.
*/
var images = {
	heroImage: {
		url: "/assets/hero-image-Ctc1uNr9.png",
		alt: "Tepsi e plotë me bakllavë të prerë në copa"
	},
	bakllaveMeArra: {
		url: "/assets/bakllav%C3%AB-me-arra-C0z3o9Uv.png",
		alt: "Tepsi me bakllavë me arra"
	},
	bakllavePaArra: {
		url: "/assets/bakllav%C3%AB-pa-arra-Kspr2j0a.png",
		alt: "Tepsi me bakllavë pa arra"
	},
	aboutUs: {
		url: "/assets/about-us-BJmRZFor.png",
		alt: "Petë bakllave duke u holluar me dorë"
	},
	ingredientsImage: {
		url: "/assets/ingredients-BUry3dO7.png",
		alt: "Përbërës dhe petë bakllave duke u përgatitur"
	},
	instagramPost1: {
		url: "/assets/instagram-post-1-Ddu75FO3.jpeg",
		alt: "Postim në Instagram me bakllavë"
	},
	instagramPost2: {
		url: "/assets/instagram-post-2-CLOMexfC.jpg",
		alt: "Postim në Instagram nga përgatitja e bakllavës"
	},
	instagramPost3: {
		url: "/assets/instagram-post-3-CxZvZeLQ.png",
		alt: "Postim në Instagram me bakllavë të prerë"
	},
	instagramPost4: {
		url: "/assets/instagram-post-4-BVKmGiqL.png",
		alt: "Postim në Instagram me tepsi bakllave"
	}
};
/**
* Komponenti i vetëm për fotografitë. Zëvendësimi bëhet te src/lib/images.ts
*/
function Photo({ name, className, imgClassName, priority, width, height, alt }) {
	const img = images[name];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: img.url,
			alt: alt ?? img.alt,
			...width ? { width } : {},
			...height ? { height } : {},
			loading: priority ? "eager" : "lazy",
			decoding: priority ? "sync" : "async",
			className: imgClassName ?? "h-full w-full object-cover"
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex w-full flex-col bg-[#FAF7F0] md:h-[calc(100svh-4rem)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid min-h-0 w-full flex-1 bg-[#FAF7F0] shadow-[0_18px_50px_rgba(36,26,18,0.05)] md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center gap-[20px] px-5 py-8 md:p-[44px_56px_32px_48px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-3 text-[#8A7969]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[12px] uppercase tracking-[0.18em]",
								children: "Podujevë · Prishtinë"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "h-px w-[26px] bg-[#8A7969]/45",
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[13px]",
								children: "Pjekur çdo ditë"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-serif text-[2.9rem] leading-[1.06] text-[#241A12] sm:text-[3.55rem] md:text-[68px]",
						children: "Bakllavë e bërë në shtëpi, me shije tradicionale."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-[520px] text-[18px] leading-[1.65] text-[#5C4E42]",
						children: "Petë të hapura me dorë, arra e gjalpë i vërtetë, pa konservues. Tepsi e freskët nga furra për familje, dasma dhe festa."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-serif text-[30px] leading-none text-[#241A12]",
							children: "30 €"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-[13px] text-[#8A7969]",
							children: "tepsia e vogël · 20 copë"
						})] })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap items-center gap-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#bakllavat",
							className: "whitespace-nowrap bg-[#4A2C1A] px-[34px] py-4 text-sm text-[#FAF7F0] transition-opacity hover:opacity-90",
							children: "Shiko Bakllavat"
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex min-h-[340px] items-center justify-center bg-[#FAF7F0] p-3 md:min-h-0 md:p-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "flex h-full min-h-0 w-full flex-col items-center justify-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
						name: "heroImage",
						priority: true,
						width: 720,
						height: 720,
						className: "flex min-h-0 w-full flex-[0_1_auto] items-center justify-center",
						imgClassName: "max-h-[360px] w-full object-contain md:h-full md:max-h-full"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "-mt-6 text-[13px] text-[#8A7969] md:-mt-8",
						children: "Tepsi e sapodalë nga furra, e prerë me dorë."
					})]
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid shrink-0 border-t border-[rgba(36,26,18,0.09)] md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b border-[rgba(36,26,18,0.09)] px-5 py-5 md:border-r md:border-b-0 md:px-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[15px] font-medium text-[#241A12]",
						children: "Dërgesa falas"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-[13px] text-[#8A7969]",
						children: "Podujevë dhe Prishtinë"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b border-[rgba(36,26,18,0.09)] px-5 py-5 md:border-r md:border-b-0 md:px-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[15px] font-medium text-[#241A12]",
						children: "Porosit 2-3 ditë më herët"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-[13px] text-[#8A7969]",
						children: "Për dasma edhe 1 javë"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-5 py-5 md:px-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[15px] font-medium text-[#241A12]",
						children: "Pagesa në dorëzim"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-[13px] text-[#8A7969]",
						children: "Vetëm cash"
					})]
				})
			]
		})]
	});
}
function SizeSelector({ value, onChange, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `flex flex-wrap gap-2 ${className}`,
		children: sizes.map((s) => {
			const active = s.id === value;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onChange(s.id),
				"aria-pressed": active,
				className: `min-w-[7.5rem] border px-4 py-2.5 text-left text-sm transition-colors ${active ? "border-honey bg-honey/12 text-foreground" : "border-border text-muted-foreground hover:border-honey/60"}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block",
					children: s.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-xs text-muted-foreground",
					children: eur(s.price)
				})]
			}, s.id);
		})
	});
}
function ProductCard({ product, reversed }) {
	const [variant, setVariant] = (0, import_react.useState)("me-arra");
	const [size, setSize] = (0, import_react.useState)("medium");
	const [qty, setQty] = (0, import_react.useState)(1);
	const cart = useCart();
	const navigate = useNavigate();
	const selectedVariant = productVariants.find((v) => v.id === variant);
	const price = priceFor(size, variant) * qty;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "grid gap-8 border-t border-border/70 py-12 md:grid-cols-2 md:gap-14 md:py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
			name: selectedVariant.image,
			className: `flex aspect-[4/3] items-center justify-center md:aspect-[4/4.4] ${reversed ? "md:order-2" : ""}`,
			imgClassName: `h-full w-full object-contain transition-transform duration-150 ${selectedVariant.imageClassName ?? ""}`
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `flex flex-col justify-center ${reversed ? "md:order-1" : ""}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-2xl sm:text-[1.75rem]",
					children: product.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground",
					children: product.description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-7",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Varianti"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex flex-wrap gap-2",
							children: productVariants.map((v) => {
								const active = v.id === variant;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setVariant(v.id),
									"aria-pressed": active,
									className: `border px-4 py-2.5 text-sm transition-colors ${active ? "border-honey bg-honey/12 text-foreground" : "border-border text-muted-foreground hover:border-honey/60"}`,
									children: v.label
								}, v.id);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-muted-foreground",
							children: selectedVariant.description
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Madhësia"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SizeSelector, {
						value: size,
						onChange: setSize,
						className: "mt-3"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap items-center gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center border border-border",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setQty((q) => Math.max(1, q - 1)),
								className: "h-11 w-11 text-lg text-muted-foreground transition-colors hover:text-foreground",
								"aria-label": "Zvogëlo sasinë",
								children: "−"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-8 text-center text-sm tabular-nums",
								children: qty
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setQty((q) => q + 1),
								className: "h-11 w-11 text-lg text-muted-foreground transition-colors hover:text-foreground",
								"aria-label": "Rrit sasinë",
								children: "+"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-2xl text-foreground",
						children: eur(price)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-7 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							cart.add(product.id, variant, size, qty);
							cart.setOpen(true);
						},
						className: "border border-primary px-5 py-3 text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground",
						children: "Shto në shportë"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							cart.add(product.id, variant, size, qty);
							navigate({ to: "/porosit" });
						},
						className: "bg-primary px-5 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90",
						children: "Porosit Tani"
					})]
				})
			]
		})]
	});
}
function ProductSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "bakllavat",
		className: "mx-auto max-w-6xl scroll-mt-20 px-5 py-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Bakllavat"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-[1.8rem] leading-tight sm:text-[2.15rem]",
					children: "Një bakllavë. Zgjedh variantin që do."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-[0.95rem] leading-relaxed text-muted-foreground",
					children: "Nuk kemi menu të gjatë. Kemi bakllavë në tri madhësi tepsish, me mundësi me arra ose pa arra, aq sa mund të bëhet mirë me dorë."
				})
			]
		}), products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))]
	});
}
function StorySection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "rreth",
		className: "scroll-mt-20 bg-cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.05fr_1fr] md:items-center md:gap-16 md:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
				name: "aboutUs",
				className: "overflow-hidden",
				imgClassName: "w-full object-cover aspect-[4/3]"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Rreth nesh"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-[1.8rem] leading-tight sm:text-[2.15rem]",
					children: "E bërë si në shtëpi, sepse bëhet në shtëpi."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 space-y-4 text-[0.95rem] leading-relaxed text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Çdo tepsi bëhet në kuzhinën tonë, jo në fabrikë. Petët hollohen me dorë, shtresat vendosen një nga një dhe piqen derisa të marrin ngjyrë të artë." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Sherbeti hidhet në kohën e duhur që bakllavaja të mbetet e freskët dhe jo e rëndë. Arrat i thyejmë vetë kur porosia është me arra. Punojmë me porosi, prandaj çdo tepsi del e sapopërgatitur." })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 font-serif text-lg text-foreground",
					children: "Sa më shumë kujdes në petë, aq më e mirë bakllavaja."
				})
			] })]
		})
	});
}
var ingredientDetails = [
	["Miell", "Tip 400, i bluar vendor"],
	["Gjalpë", "I vërtetë, jo margarinë"],
	["Arra", "Të thyera në ditën e pjekjes"],
	["Vezë & kos", "Petë e butë, jo e thatë"],
	["Sheqer & ujë", "Sherbet i lehtë, jo i rëndë"],
	["Pak kripë", "Sa për të balancuar"]
];
function IngredientsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "w-full bg-[#FAF8F1] shadow-[0_18px_50px_rgba(36,26,18,0.05)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-stretch md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-center gap-[26px] px-5 py-12 md:px-14 md:py-[72px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[12px] uppercase tracking-[0.18em] text-[#8A7969]",
						children: "Përbërësit"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-serif text-[2.3rem] leading-[1.15] text-[#241A12] md:text-[42px]",
						children: "Përbërës të thjeshtë. Cilësi që ndihet në çdo kafshatë."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-[460px] text-[16px] leading-[1.6] text-[#5C4E42]",
						children: "Nuk ka listë të gjatë. Vetëm gjërat që i duhen bakllavasë së vërtetë."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-x-8 gap-y-[22px] sm:grid-cols-2",
						children: ingredientDetails.map(([name, description]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-b border-[rgba(36,26,18,0.10)] pb-[14px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[17px] text-[#241A12]",
								children: name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[13px] text-[#8A7969]",
								children: description
							})]
						}, name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[14px] text-[#7A6857]",
						children: "Pa konservues, pa aroma artificiale, pa margarinë."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
				name: "ingredientsImage",
				className: "h-full min-h-[420px] bg-[#EFE7D8] md:min-h-[640px]",
				imgClassName: "h-full w-full object-cover"
			})]
		})
	});
}
var steps = [
	{
		n: "1",
		time: "2 MINUTA",
		title: "Zgjidh bakllavën",
		text: "Me arra ose pa arra, dhe madhësia e tepsisë: 20, 40 ose 60 copë."
	},
	{
		n: "2",
		time: "KONFIRMIM BRENDA 1 ORE",
		title: "Plotëso porosinë",
		text: "Plotëso formën online ose na merr direkt në telefon. Na duhet emri, numri, adresa dhe dita kur e do bakllavën."
	},
	{
		n: "3",
		time: "NË DITËN TËNDE",
		title: "Ne e përgatisim",
		text: "Pjekur atë mëngjes dhe sjellë në derë, ende e ngrohtë."
	}
];
function DeliverySection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "w-full bg-[#FAF5EA] px-5 py-16 shadow-[0_18px_55px_rgba(36,26,18,0.045)] sm:px-8 lg:px-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex w-full flex-col gap-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between gap-8 max-lg:flex-col max-lg:items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[12px] uppercase leading-none tracking-[0.18em] text-[#8A7969]",
						children: "SI POROSITET"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-serif text-[38px] leading-[1.1] tracking-normal text-[#241A12] sm:text-[42px] lg:text-[46px]",
						children: "Tre hapa, pa komplikime."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex shrink-0 flex-wrap items-center gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#bakllavat",
							className: "shrink-0 whitespace-nowrap bg-[#4A2C1A] px-[30px] py-4 text-[15px] text-[#F7F2E8] transition-opacity hover:opacity-90",
							children: "Fillo porosinë"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "tel:+38343963564",
							className: "shrink-0 whitespace-nowrap border-b border-[#4A2C1A]/45 py-2 text-[15px] text-[#241A12] transition-colors hover:border-[#4A2C1A]",
							children: "+383 43 963 564"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "grid grid-cols-1 lg:grid-cols-3",
					children: steps.map((s, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: [
							"px-0 py-8 sm:px-4 lg:px-10",
							index > 0 ? "border-t border-[rgba(36,26,18,0.12)] lg:border-t-0" : "",
							index > 0 ? "lg:border-l lg:border-[rgba(36,26,18,0.12)]" : ""
						].join(" "),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-serif text-[34px] leading-none text-[#B8905C]",
									children: s.n
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[13px] uppercase tracking-[0.1em] text-[#8A7969]",
									children: s.time
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 font-serif text-[26px] leading-tight tracking-normal text-[#241A12]",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-[16px] leading-[1.65] text-[#5C4E42]",
								children: s.text
							})
						]
					}, s.n))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-[rgba(36,26,18,0.12)] pt-[30px] text-[16px] text-[#241A12]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "whitespace-nowrap",
							children: [
								"Dërgesa ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-[#B8905C]",
									children: "falas"
								}),
								" në Podujevë dhe Prishtinë"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "h-[18px] w-px shrink-0 bg-[rgba(36,26,18,0.12)]",
							"aria-hidden": true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "whitespace-nowrap",
							children: [
								"Porosit ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold text-[#B8905C]",
									children: "2 deri 3 ditë"
								}),
								" më herët"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "h-[18px] w-px shrink-0 bg-[rgba(36,26,18,0.12)]",
							"aria-hidden": true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "whitespace-nowrap",
							children: "Pagesa në dorëzim"
						})
					]
				})
			]
		})
	});
}
function InstagramSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-6xl px-5 py-16 md:py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-end justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "Instagram"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-3 text-[1.6rem] sm:text-[1.9rem]",
				children: "Na ndiq në Instagram"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: business.instagramUrl,
				target: "_blank",
				rel: "noreferrer",
				className: "border-b border-honey/60 pb-1 text-sm text-foreground transition-colors hover:border-honey",
				children: business.instagramHandle
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: business.instagramUrl,
					target: "_blank",
					rel: "noreferrer",
					"aria-label": "Hap Instagram",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
						name: "instagramPost1",
						className: "overflow-hidden",
						imgClassName: "w-full object-cover aspect-[4/5]"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: business.instagramUrl,
					target: "_blank",
					rel: "noreferrer",
					"aria-label": "Hap Instagram",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
						name: "instagramPost2",
						className: "overflow-hidden",
						imgClassName: "w-full object-cover aspect-[4/5]"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: business.instagramUrl,
					target: "_blank",
					rel: "noreferrer",
					"aria-label": "Hap Instagram",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
						name: "instagramPost3",
						className: "overflow-hidden",
						imgClassName: "w-full object-cover aspect-[4/5]"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: business.instagramUrl,
					target: "_blank",
					rel: "noreferrer",
					"aria-label": "Hap Instagram",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
						name: "instagramPost4",
						className: "overflow-hidden",
						imgClassName: "w-full object-cover aspect-[4/5]"
					})
				})
			]
		})]
	});
}
function ContactSection() {
	const [sending, setSending] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "kontakt",
		className: "scroll-mt-20 border-t border-border/70 bg-cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:gap-16 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Kontakt"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 text-[1.8rem] leading-tight sm:text-[2.15rem]",
					children: "Na shkruaj ose merr në telefon."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-8 space-y-4 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "eyebrow",
							children: "Telefoni"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: business.phoneHref,
								className: "text-foreground hover:text-honey",
								children: business.phone
							})
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "eyebrow",
							children: "Instagram"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: business.instagramUrl,
								target: "_blank",
								rel: "noreferrer",
								className: "text-foreground hover:text-honey",
								children: business.instagramHandle
							})
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "eyebrow",
							children: "Vendndodhja"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-foreground",
							children: business.location
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "eyebrow",
							children: "Dërgesa"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-foreground",
							children: "Podujevë dhe Prishtinë, falas"
						})] })
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "space-y-4",
				onSubmit: async (e) => {
					e.preventDefault();
					const fd = new FormData(e.currentTarget);
					const form = e.currentTarget;
					setSending(true);
					try {
						await sendMessage({ data: {
							name: String(fd.get("name") ?? ""),
							phone: String(fd.get("phone") ?? ""),
							message: String(fd.get("message") ?? "")
						} });
						toast.success("Mesazhi u dërgua. Ju kontaktojmë së shpejti.");
						form.reset();
					} catch {
						toast.error("Diçka shkoi keq. Provo përsëri ose na merr në telefon.");
					} finally {
						setSending(false);
					}
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Emri",
						name: "name",
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Telefoni",
						name: "phone",
						type: "tel",
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "Mesazhi"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							name: "message",
							required: true,
							rows: 5,
							className: "mt-2 w-full border border-border bg-background px-3 py-3 text-[0.95rem] outline-none focus:border-honey"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						disabled: sending,
						className: "bg-primary px-6 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60",
						children: sending ? "Duke dërguar…" : "Dërgo mesazhin"
					})
				]
			})]
		})
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
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StorySection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IngredientsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeliverySection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstagramSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, {})
	] });
}
//#endregion
export { Index as component };
