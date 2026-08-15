import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Photo } from "./Photo";
import { SizeSelector } from "./SizeSelector";
import {
  eur,
  priceFor,
  productVariants,
  type ProductId,
  type ProductVariantId,
  type SizeId,
} from "@/config/business";
import { useCart } from "@/lib/cart";

type Props = {
  product: { id: ProductId; name: string; description: string };
  reversed?: boolean;
};

export function ProductCard({ product, reversed }: Props) {
  const [variant, setVariant] = useState<ProductVariantId>("me-arra");
  const [size, setSize] = useState<SizeId>("medium");
  const [qty, setQty] = useState(1);
  const cart = useCart();
  const navigate = useNavigate();
  const selectedVariant = productVariants.find((v) => v.id === variant)!;
  const price = priceFor(size, variant) * qty;

  return (
    <article className="grid gap-8 border-t border-border/70 py-12 md:grid-cols-2 md:gap-14 md:py-16">
      <Photo
        name={selectedVariant.image}
        className={`flex aspect-[4/3] items-center justify-center md:aspect-[4/4.4] ${
          reversed ? "md:order-2" : ""
        }`}
        imgClassName={`h-full w-full object-contain transition-transform duration-150 ${
          selectedVariant.imageClassName ?? ""
        }`}
      />

      <div className={`flex flex-col justify-center ${reversed ? "md:order-1" : ""}`}>
        <h3 className="text-2xl sm:text-[1.75rem]">{product.name}</h3>
        <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">
          {product.description}
        </p>

        <div className="mt-7">
          <p className="eyebrow">Varianti</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {productVariants.map((v) => {
              const active = v.id === variant;
              return (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setVariant(v.id)}
                  aria-pressed={active}
                  className={`border px-4 py-2.5 text-sm transition-colors ${
                    active
                      ? "border-honey bg-honey/12 text-foreground"
                      : "border-border text-muted-foreground hover:border-honey/60"
                  }`}
                >
                  {v.label}
                </button>
              );
            })}
          </div>
          <p className="mt-2 text-xs text-muted-foreground">{selectedVariant.description}</p>
        </div>

        <div className="mt-7">
          <p className="eyebrow">Madhësia</p>
          <SizeSelector value={size} onChange={setSize} className="mt-3" />
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-6">
          <div className="flex items-center border border-border">
            <button
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="h-11 w-11 text-lg text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Zvogëlo sasinë"
            >
              −
            </button>
            <span className="w-8 text-center text-sm tabular-nums">{qty}</span>
            <button
              onClick={() => setQty((q) => q + 1)}
              className="h-11 w-11 text-lg text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Rrit sasinë"
            >
              +
            </button>
          </div>
          <p className="font-serif text-2xl text-foreground">{eur(price)}</p>
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <button
            onClick={() => {
              cart.add(product.id, variant, size, qty);
              cart.setOpen(true);
            }}
            className="border border-primary px-5 py-3 text-sm text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Shto në shportë
          </button>
          <button
            onClick={() => {
              cart.add(product.id, variant, size, qty);
              navigate({ to: "/porosit" });
            }}
            className="bg-primary px-5 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90"
          >
            Porosit Tani
          </button>
        </div>
      </div>
    </article>
  );
}
