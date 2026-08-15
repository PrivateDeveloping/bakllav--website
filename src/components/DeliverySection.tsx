const steps = [
  {
    n: "1",
    time: "2 MINUTA",
    title: "Zgjidh bakllavën",
    text: "Me arra ose pa arra, dhe madhësia e tepsisë: 20, 40 ose 60 copë.",
  },
  {
    n: "2",
    time: "KONFIRMIM BRENDA 1 ORE",
    title: "Plotëso porosinë",
    text: "Plotëso formën online ose na merr direkt në telefon. Na duhet emri, numri, adresa dhe dita kur e do bakllavën.",
  },
  {
    n: "3",
    time: "NË DITËN TËNDE",
    title: "Ne e përgatisim",
    text: "Pjekur atë mëngjes dhe sjellë në derë, ende e ngrohtë.",
  },
];

export function DeliverySection() {
  return (
    <section className="w-full bg-[#FAF5EA] px-5 py-16 shadow-[0_18px_55px_rgba(36,26,18,0.045)] sm:px-8 lg:px-14">
      <div className="flex w-full flex-col gap-12">
        <div className="flex items-end justify-between gap-8 max-lg:flex-col max-lg:items-start">
          <div>
            <p className="text-[12px] uppercase leading-none tracking-[0.18em] text-[#8A7969]">
              SI POROSITET
            </p>
            <h2 className="mt-4 font-serif text-[38px] leading-[1.1] tracking-normal text-[#241A12] sm:text-[42px] lg:text-[46px]">
              Tre hapa, pa komplikime.
            </h2>
          </div>

          <div className="flex shrink-0 flex-wrap items-center gap-6">
            <a
              href="#bakllavat"
              className="shrink-0 whitespace-nowrap bg-[#4A2C1A] px-[30px] py-4 text-[15px] text-[#F7F2E8] transition-opacity hover:opacity-90"
            >
              Fillo porosinë
            </a>
            <a
              href="tel:+38343963564"
              className="shrink-0 whitespace-nowrap border-b border-[#4A2C1A]/45 py-2 text-[15px] text-[#241A12] transition-colors hover:border-[#4A2C1A]"
            >
              +383 43 963 564
            </a>
          </div>
        </div>

        <ol className="grid grid-cols-1 lg:grid-cols-3">
          {steps.map((s, index) => (
            <li
              key={s.n}
              className={[
                "px-0 py-8 sm:px-4 lg:px-10",
                index > 0 ? "border-t border-[rgba(36,26,18,0.12)] lg:border-t-0" : "",
                index > 0 ? "lg:border-l lg:border-[rgba(36,26,18,0.12)]" : "",
              ].join(" ")}
            >
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-[34px] leading-none text-[#B8905C]">{s.n}</span>
                <span className="text-[13px] uppercase tracking-[0.1em] text-[#8A7969]">
                  {s.time}
                </span>
              </div>
              <h3 className="mt-5 font-serif text-[26px] leading-tight tracking-normal text-[#241A12]">
                {s.title}
              </h3>
              <p className="mt-3 text-[16px] leading-[1.65] text-[#5C4E42]">{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-[rgba(36,26,18,0.12)] pt-[30px] text-[16px] text-[#241A12]">
          <p className="whitespace-nowrap">
            Dërgesa <span className="font-semibold text-[#B8905C]">falas</span> në Podujevë dhe
            Prishtinë
          </p>
          <span className="h-[18px] w-px shrink-0 bg-[rgba(36,26,18,0.12)]" aria-hidden />
          <p className="whitespace-nowrap">
            Porosit <span className="font-semibold text-[#B8905C]">2 deri 3 ditë</span> më herët
          </p>
          <span className="h-[18px] w-px shrink-0 bg-[rgba(36,26,18,0.12)]" aria-hidden />
          <p className="whitespace-nowrap">Pagesa në dorëzim</p>
        </div>
      </div>
    </section>
  );
}
