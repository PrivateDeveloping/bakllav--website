import { Photo } from "./Photo";

const ingredientDetails = [
  ["Miell", "Tip 400, i bluar vendor"],
  ["Gjalpë", "I vërtetë, jo margarinë"],
  ["Arra", "Të thyera në ditën e pjekjes"],
  ["Vezë & kos", "Petë e butë, jo e thatë"],
  ["Sheqer & ujë", "Sherbet i lehtë, jo i rëndë"],
  ["Pak kripë", "Sa për të balancuar"],
] as const;

export function IngredientsSection() {
  return (
    <section className="w-full bg-[#FAF8F1] shadow-[0_18px_50px_rgba(36,26,18,0.05)]">
      <div className="grid items-stretch md:grid-cols-2">
        <div className="flex flex-col justify-center gap-[26px] px-5 py-12 md:px-14 md:py-[72px]">
          <p className="text-[12px] uppercase tracking-[0.18em] text-[#8A7969]">Përbërësit</p>
          <h2 className="font-serif text-[2.3rem] leading-[1.15] text-[#241A12] md:text-[42px]">
            Përbërës të thjeshtë. Cilësi që ndihet në çdo kafshatë.
          </h2>
          <p className="max-w-[460px] text-[16px] leading-[1.6] text-[#5C4E42]">
            Nuk ka listë të gjatë. Vetëm gjërat që i duhen bakllavasë së vërtetë.
          </p>

          <div className="grid gap-x-8 gap-y-[22px] sm:grid-cols-2">
            {ingredientDetails.map(([name, description]) => (
              <div key={name} className="border-b border-[rgba(36,26,18,0.10)] pb-[14px]">
                <p className="text-[17px] text-[#241A12]">{name}</p>
                <p className="mt-1 text-[13px] text-[#8A7969]">{description}</p>
              </div>
            ))}
          </div>

          <p className="text-[14px] text-[#7A6857]">
            Pa konservues, pa aroma artificiale, pa margarinë.
          </p>
        </div>

        <Photo
          name="ingredientsImage"
          className="h-full min-h-[420px] bg-[#EFE7D8] md:min-h-[640px]"
          imgClassName="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}
