/**
 * Konfigurimi qendror i biznesit.
 * Ndrysho vetëm këtë skedar për çmime, kontakt dhe dërgesa.
 *
 * TODO (zëvendëso kur t'i kesh të dhënat reale):
 *  - orderEmail: email-i ku duhet të vijnë porositë
 */
export const business = {
  name: "Bakllavë e Shtëpisë",
  tagline: "E bërë si në shtëpi, sepse bëhet në shtëpi.",
  location: "Podujevë, Kosovë",
  phone: "043 963 564",
  phoneHref: "tel:+38343963564",
  instagramHandle: "@bakllava.nga.shtepia",
  instagramUrl: "https://www.instagram.com/bakllava.nga.shtepia/",
  /** PLACEHOLDER: zëvendëso me email-in real të biznesit */
  orderEmail: "porosite@example.com",
  deliveryCities: ["Podujevë", "Prishtinë"] as const,
  deliveryFee: 0,
  leadTimeDays: 2,
} as const;

export type SizeId = "small" | "medium" | "big";

export const sizes: { id: SizeId; label: string; note: string; price: number }[] = [
  { id: "small", label: "E vogël", note: "tepsi e vogël", price: 30 },
  { id: "medium", label: "Mesatare", note: "tepsi mesatare", price: 45 },
  { id: "big", label: "E madhe", note: "tepsi e madhe", price: 55 },
];

export type ProductId = "bakllava";
export type ProductVariantId = "me-arra" | "pa-arra";

export const products: {
  id: ProductId;
  name: string;
  description: string;
}[] = [
  {
    id: "bakllava",
    name: "Bakllavë",
    description:
      "Petë të holla të bëra me dorë, sherbet i lehtë sheqeri dhe kujdes shtëpie në çdo tepsi. Zgjedh variantin klasik me arra ose më të thjeshtë pa arra.",
  },
];

export const productVariants: {
  id: ProductVariantId;
  label: string;
  description: string;
  image: "bakllaveMeArra" | "bakllavePaArra";
  imageClassName?: string;
  priceBySize?: Partial<Record<SizeId, number>>;
}[] = [
  {
    id: "me-arra",
    label: "Me arra",
    description: "Arra të grira trashë mes shtresave.",
    image: "bakllaveMeArra",
    imageClassName: "scale-[1.08]",
  },
  {
    id: "pa-arra",
    label: "Pa arra",
    description: "E njëjta petë dhe sherbet, vetëm pa arra.",
    image: "bakllavePaArra",
  },
];

export const ingredients = [
  "Miell",
  "Ujë",
  "Vezë",
  "Kos",
  "Pak kripë",
  "Gjalpë",
  "Sheqer",
  "Arra (te varianti me arra)",
];

export function priceFor(size: SizeId, variant?: ProductVariantId) {
  if (variant) {
    const variantPrice = productVariants.find((v) => v.id === variant)?.priceBySize?.[size];
    if (variantPrice !== undefined) return variantPrice;
  }
  return sizes.find((s) => s.id === size)!.price;
}

export function sizeLabel(size: SizeId) {
  return sizes.find((s) => s.id === size)!.label;
}

export function productName(id: ProductId) {
  return products.find((p) => p.id === id)!.name;
}

export function variantLabel(id: ProductVariantId) {
  return productVariants.find((v) => v.id === id)!.label;
}

export const eur = (n: number) => `${n}€`;
