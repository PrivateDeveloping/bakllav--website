import { n as createServerFn, r as getServerFnById, t as TSS_SERVER_FUNCTION } from "./server-C5XqBT4B.mjs";
import { a as stringType, i as objectType, n as literalType, r as numberType, t as arrayType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/orders.functions-CPpnPOxB.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var orderSchema = objectType({
	name: stringType().min(2).max(80),
	phone: stringType().min(6).max(30),
	email: stringType().email().max(120).optional().or(literalType("")),
	city: stringType().min(2).max(60),
	address: stringType().min(3).max(200),
	date: stringType().min(4).max(20),
	time: stringType().max(60),
	notes: stringType().max(500).optional().or(literalType("")),
	items: arrayType(objectType({
		name: stringType().max(80),
		variant: stringType().max(40),
		size: stringType().max(40),
		qty: numberType().int().min(1).max(50),
		unitPrice: numberType().min(0).max(1e3)
	})).min(1).max(20)
});
var submitOrder = createServerFn({ method: "POST" }).inputValidator((data) => orderSchema.parse(data)).handler(createSsrRpc("428289e6a95e5fae42a5f252fb057eb6b26d6cb43d7737969ee97f14a7d64be0"));
var sendMessage = createServerFn({ method: "POST" }).inputValidator((data) => objectType({
	name: stringType().min(2).max(80),
	phone: stringType().min(6).max(30),
	message: stringType().min(2).max(1e3)
}).parse(data)).handler(createSsrRpc("5ec228e5ca7745440ab5af3626464663e1394069e2c98a593b2a99bc88f63e91"));
//#endregion
export { submitOrder as n, sendMessage as t };
