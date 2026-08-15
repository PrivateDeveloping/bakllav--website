import { business } from "@/config/business";
import { Photo } from "./Photo";

export function InstagramSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Instagram</p>
          <h2 className="mt-3 text-[1.6rem] sm:text-[1.9rem]">Na ndiq në Instagram</h2>
        </div>
        <a
          href={business.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="border-b border-honey/60 pb-1 text-sm text-foreground transition-colors hover:border-honey"
        >
          {business.instagramHandle}
        </a>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <a href={business.instagramUrl} target="_blank" rel="noreferrer" aria-label="Hap Instagram">
          <Photo
            name="instagramPost1"
            className="overflow-hidden"
            imgClassName="w-full object-cover aspect-[4/5]"
          />
        </a>
        <a href={business.instagramUrl} target="_blank" rel="noreferrer" aria-label="Hap Instagram">
          <Photo
            name="instagramPost2"
            className="overflow-hidden"
            imgClassName="w-full object-cover aspect-[4/5]"
          />
        </a>
        <a href={business.instagramUrl} target="_blank" rel="noreferrer" aria-label="Hap Instagram">
          <Photo
            name="instagramPost3"
            className="overflow-hidden"
            imgClassName="w-full object-cover aspect-[4/5]"
          />
        </a>
        <a href={business.instagramUrl} target="_blank" rel="noreferrer" aria-label="Hap Instagram">
          <Photo
            name="instagramPost4"
            className="overflow-hidden"
            imgClassName="w-full object-cover aspect-[4/5]"
          />
        </a>
      </div>
    </section>
  );
}
