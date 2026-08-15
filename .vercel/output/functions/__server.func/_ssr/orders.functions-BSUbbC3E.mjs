import { n as createServerFn, t as TSS_SERVER_FUNCTION } from "./server-C5XqBT4B.mjs";
import { a as stringType, i as objectType, n as literalType, r as numberType, t as arrayType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/orders.functions-BSUbbC3E.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
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
var submitOrder_createServerFn_handler = createServerRpc({
	id: "428289e6a95e5fae42a5f252fb057eb6b26d6cb43d7737969ee97f14a7d64be0",
	name: "submitOrder",
	filename: "src/lib/orders.functions.ts"
}, (opts) => submitOrder.__executeServer(opts));
var submitOrder = createServerFn({ method: "POST" }).inputValidator((data) => orderSchema.parse(data)).handler(submitOrder_createServerFn_handler, async ({ data }) => {
	const { deliverOrder } = await import("./orders.server-BcrNhUZV.mjs");
	const subtotal = data.items.reduce((s, i) => s + i.qty * i.unitPrice, 0);
	const reference = `BS-${Date.now().toString(36).toUpperCase().slice(-6)}`;
	await deliverOrder({
		reference,
		customer: {
			name: data.name,
			phone: data.phone,
			...data.email ? { email: data.email } : {},
			city: data.city,
			address: data.address,
			date: data.date,
			time: data.time,
			...data.notes ? { notes: data.notes } : {}
		},
		items: data.items,
		subtotal,
		delivery: 0,
		total: subtotal
	});
	return {
		reference,
		subtotal,
		total: subtotal
	};
});
var sendMessage_createServerFn_handler = createServerRpc({
	id: "5ec228e5ca7745440ab5af3626464663e1394069e2c98a593b2a99bc88f63e91",
	name: "sendMessage",
	filename: "src/lib/orders.functions.ts"
}, (opts) => sendMessage.__executeServer(opts));
var sendMessage = createServerFn({ method: "POST" }).inputValidator((data) => objectType({
	name: stringType().min(2).max(80),
	phone: stringType().min(6).max(30),
	message: stringType().min(2).max(1e3)
}).parse(data)).handler(sendMessage_createServerFn_handler, async ({ data }) => {
	const { deliverMessage } = await import("./orders.server-BcrNhUZV.mjs");
	await deliverMessage(data);
	return { ok: true };
});
//#endregion
export { sendMessage_createServerFn_handler, submitOrder_createServerFn_handler };
