import { Photo } from "./Photo";

export function Hero() {
  return (
    <section className="flex w-full flex-col bg-[#FAF7F0] md:h-[calc(100svh-4rem)]">
      <div className="grid min-h-0 w-full flex-1 bg-[#FAF7F0] shadow-[0_18px_50px_rgba(36,26,18,0.05)] md:grid-cols-2">
        <div className="flex flex-col justify-center gap-[20px] px-5 py-8 md:p-[44px_56px_32px_48px]">
          <div className="flex flex-wrap items-center gap-3 text-[#8A7969]">
            <span className="text-[12px] uppercase tracking-[0.18em]">Podujevë · Prishtinë</span>
            <span className="h-px w-[26px] bg-[#8A7969]/45" aria-hidden />
            <span className="text-[13px]">Pjekur çdo ditë</span>
          </div>

          <h1 className="font-serif text-[2.9rem] leading-[1.06] text-[#241A12] sm:text-[3.55rem] md:text-[68px]">
            Bakllavë e bërë në shtëpi, me shije tradicionale.
          </h1>

          <p className="hidden max-w-[520px] text-[18px] leading-[1.65] text-[#5C4E42] md:block">
            Petë të hapura me dorë, arra e gjalpë i vërtetë, pa konservues. Tepsi e freskët nga
            furra për familje, dasma dhe festa.
          </p>

          <div className="flex items-center justify-between gap-3 sm:justify-start sm:gap-5 md:block">
            <div className="min-w-0 md:mb-5">
              <p className="font-serif text-[30px] leading-none text-[#241A12]">30 €</p>
              <p className="mt-1 text-[13px] text-[#8A7969]">tepsia e vogël · 20 copë</p>
            </div>
            <a
              href="#bakllavat"
              className="shrink-0 whitespace-nowrap bg-[#4A2C1A] px-4 py-3 text-center text-sm text-[#FAF7F0] transition-opacity hover:opacity-90 md:inline-block md:px-[34px] md:py-4"
            >
              Shiko Bakllavat
            </a>
          </div>
        </div>

        <div className="flex min-h-[340px] items-center justify-center bg-[#FAF7F0] p-3 md:min-h-0 md:p-2">
          <figure className="flex h-full min-h-0 w-full flex-col items-center justify-center">
            <Photo
              name="heroImage"
              priority
              width={720}
              height={720}
              className="flex min-h-0 w-full flex-[0_1_auto] items-center justify-center"
              imgClassName="max-h-[360px] w-full object-contain md:h-full md:max-h-full"
            />
            <figcaption className="-mt-6 text-[13px] text-[#8A7969] md:-mt-8">
              Tepsi e sapodalë nga furra, e prerë me dorë.
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="grid shrink-0 border-t border-[rgba(36,26,18,0.09)] md:grid-cols-3">
        <div className="border-b border-[rgba(36,26,18,0.09)] px-5 py-5 md:border-r md:border-b-0 md:px-12">
          <p className="text-[15px] font-medium text-[#241A12]">Dërgesa falas</p>
          <p className="mt-1 text-[13px] text-[#8A7969]">Podujevë dhe Prishtinë</p>
        </div>
        <div className="border-b border-[rgba(36,26,18,0.09)] px-5 py-5 md:border-r md:border-b-0 md:px-12">
          <p className="text-[15px] font-medium text-[#241A12]">Porosit 2-3 ditë më herët</p>
          <p className="mt-1 text-[13px] text-[#8A7969]">Për dasma edhe 1 javë</p>
        </div>
        <div className="px-5 py-5 md:px-12">
          <p className="text-[15px] font-medium text-[#241A12]">Pagesa në dorëzim</p>
          <p className="mt-1 text-[13px] text-[#8A7969]">Vetëm cash</p>
        </div>
      </div>
    </section>
  );
}
