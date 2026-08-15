//#region node_modules/.nitro/vite/services/ssr/assets/business-7FlG9i--.js
/**
* Konfigurimi qendror i biznesit.
* Ndrysho vetëm këtë skedar për çmime, kontakt dhe dërgesa.
*
* TODO (zëvendëso kur t'i kesh të dhënat reale):
*  - orderEmail: email-i ku duhet të vijnë porositë
*/
var business = {
	name: "Bakllavë e Shtëpisë",
	tagline: "E bërë si në shtëpi, sepse bëhet në shtëpi.",
	location: "Podujevë, Kosovë",
	phone: "043 963 564",
	phoneHref: "tel:+38343963564",
	instagramHandle: "@bakllava.nga.shtepia",
	instagramUrl: "https://www.instagram.com/bakllava.nga.shtepia/",
	/** PLACEHOLDER: zëvendëso me email-in real të biznesit */
	orderEmail: "porosite@example.com",
	deliveryCities: ["Podujevë", "Prishtinë"],
	deliveryFee: 0,
	leadTimeDays: 2
};
var sizes = [
	{
		id: "small",
		label: "E vogël",
		note: "tepsi e vogël",
		price: 30
	},
	{
		id: "medium",
		label: "Mesatare",
		note: "tepsi mesatare",
		price: 45
	},
	{
		id: "big",
		label: "E madhe",
		note: "tepsi e madhe",
		price: 55
	}
];
var products = [{
	id: "bakllava",
	name: "Bakllavë",
	description: "Petë të holla të bëra me dorë, sherbet i lehtë sheqeri dhe kujdes shtëpie në çdo tepsi. Zgjedh variantin klasik me arra ose më të thjeshtë pa arra."
}];
var productVariants = [{
	id: "me-arra",
	label: "Me arra",
	description: "Arra të grira trashë mes shtresave.",
	image: "bakllaveMeArra",
	imageClassName: "scale-[1.08]"
}, {
	id: "pa-arra",
	label: "Pa arra",
	description: "E njëjta petë dhe sherbet, vetëm pa arra.",
	image: "bakllavePaArra"
}];
function priceFor(size, variant) {
	if (variant) {
		const variantPrice = productVariants.find((v) => v.id === variant)?.priceBySize?.[size];
		if (variantPrice !== void 0) return variantPrice;
	}
	return sizes.find((s) => s.id === size).price;
}
function sizeLabel(size) {
	return sizes.find((s) => s.id === size).label;
}
function productName(id) {
	return products.find((p) => p.id === id).name;
}
function variantLabel(id) {
	return productVariants.find((v) => v.id === id).label;
}
var eur = (n) => `${n}€`;
//#endregion
export { productVariants as a, sizes as c, productName as i, variantLabel as l, eur as n, products as o, priceFor as r, sizeLabel as s, business as t };
