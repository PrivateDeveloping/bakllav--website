import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  business,
  priceFor,
  productVariants,
  sizes,
  type ProductId,
  type ProductVariantId,
  type SizeId,
} from "@/config/business";

export type CartItem = {
  productId: ProductId;
  variantId: ProductVariantId;
  size: SizeId;
  qty: number;
};

type CartContextValue = {
  items: CartItem[];
  add: (productId: ProductId, variantId: ProductVariantId, size: SizeId, qty?: number) => void;
  setQty: (productId: ProductId, variantId: ProductVariantId, size: SizeId, qty: number) => void;
  remove: (productId: ProductId, variantId: ProductVariantId, size: SizeId) => void;
  clear: () => void;
  count: number;
  subtotal: number;
  total: number;
  open: boolean;
  setOpen: (o: boolean) => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const KEY = "bes-cart-v1";

type StoredCartItem = {
  productId?: string;
  variantId?: string;
  size?: string;
  qty?: number;
};

function isSizeId(size: string | undefined): size is SizeId {
  return sizes.some((s) => s.id === size);
}

function isVariantId(variant: string | undefined): variant is ProductVariantId {
  return productVariants.some((v) => v.id === variant);
}

function normalizeCartItems(value: unknown): CartItem[] {
  if (!Array.isArray(value)) return [];

  return value.reduce<CartItem[]>((items, raw) => {
    const item = raw as StoredCartItem;
    if (!isSizeId(item.size)) return items;

    const legacyVariant = isVariantId(item.productId) ? item.productId : undefined;
    const variantId = isVariantId(item.variantId) ? item.variantId : (legacyVariant ?? "me-arra");
    const qty = typeof item.qty === "number" && Number.isInteger(item.qty) && item.qty > 0
      ? item.qty
      : 1;
    const nextItem: CartItem = {
      productId: "bakllava",
      variantId,
      size: item.size,
      qty,
    };
    const existing = items.findIndex(
      (it) =>
        it.productId === nextItem.productId &&
        it.variantId === nextItem.variantId &&
        it.size === nextItem.size,
    );

    if (existing === -1) return [...items, nextItem];

    const next = [...items];
    const existingItem = next[existing];
    if (!existingItem) return next;
    next[existing] = { ...existingItem, qty: existingItem.qty + nextItem.qty };
    return next;
  }, []);
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setItems(normalizeCartItems(JSON.parse(raw)));
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items]);

  const add = useCallback(
    (productId: ProductId, variantId: ProductVariantId, size: SizeId, qty = 1) => {
      setItems((prev) => {
        const i = prev.findIndex(
          (it) => it.productId === productId && it.variantId === variantId && it.size === size,
        );
        if (i === -1) return [...prev, { productId, variantId, size, qty }];
        const next = [...prev];
        next[i] = { ...next[i]!, qty: next[i]!.qty + qty };
        return next;
      });
    },
    [],
  );

  const setQty = useCallback(
    (productId: ProductId, variantId: ProductVariantId, size: SizeId, qty: number) => {
      setItems((prev) =>
        prev
          .map((it) =>
            it.productId === productId && it.variantId === variantId && it.size === size
              ? { ...it, qty }
              : it,
          )
          .filter((it) => it.qty > 0),
      );
    },
    [],
  );

  const remove = useCallback((productId: ProductId, variantId: ProductVariantId, size: SizeId) => {
    setItems((prev) =>
      prev.filter(
        (it) => !(it.productId === productId && it.variantId === variantId && it.size === size),
      ),
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const value = useMemo(() => {
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
      setOpen,
    };
  }, [items, add, setQty, remove, clear, open]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
