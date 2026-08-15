import { products } from "@/config/business";
import { ProductCard } from "./ProductCard";

export function ProductSection() {
  return (
    <section id="bakllavat" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-6">
      <div className="max-w-xl">
        <p className="eyebrow">Bakllavat</p>
        <h2 className="mt-3 text-[1.8rem] leading-tight sm:text-[2.15rem]">
          Një bakllavë. Zgjedh variantin që do.
        </h2>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
          Nuk kemi menu të gjatë. Kemi bakllavë në tri madhësi tepsish, me mundësi me arra ose pa
          arra, aq sa mund të bëhet mirë me dorë.
        </p>
      </div>

      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </section>
  );
}
