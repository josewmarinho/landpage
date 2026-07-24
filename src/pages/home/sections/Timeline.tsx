import { Reveal, SectionHeading } from '@/components/ui';
import { TIMELINE } from '@/data/content';

export function Timeline() {
  return (
    <section className="section-pad relative overflow-hidden bg-ink">
      <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Linha do tempo"
          title={
            <>
              Uma história construída <span className="text-gradient-gold">pelo trabalho</span>
            </>
          }
        />

        <ol className="relative mt-14 space-y-8 md:space-y-0">
          {/* linha central desktop */}
          <span className="absolute left-4 top-2 hidden h-full w-0.5 bg-white/10 md:left-1/2 md:block md:-translate-x-1/2" aria-hidden="true" />

          {TIMELINE.map((item, i) => {
            const isLast = i === TIMELINE.length - 1;
            const leftSide = i % 2 === 0;
            return (
              <li key={item.year} className="relative md:grid md:grid-cols-2 md:gap-10 md:py-4">
                {/* marcador */}
                <span
                  className={`absolute left-4 top-2 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full ring-4 ring-ink md:left-1/2 ${
                    isLast ? 'bg-gold shadow-gold' : 'bg-gold-600'
                  }`}
                  aria-hidden="true"
                />
                <Reveal
                  y={20}
                  className={`ml-10 md:ml-0 ${leftSide ? 'md:pr-12 md:text-right' : 'md:col-start-2 md:pl-12'}`}
                >
                  <div
                    className={`rounded-3xl border p-6 transition-colors ${
                      isLast
                        ? 'border-gold/50 bg-gold/[0.07]'
                        : 'border-white/10 bg-white/[0.03] hover:border-white/20'
                    }`}
                  >
                    <span className={`font-display text-3xl ${isLast ? 'text-gradient-gold' : 'text-gold-400'}`}>
                      {item.year}
                    </span>
                    <h3 className="mt-2 text-lg font-extrabold uppercase tracking-wide text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/65">{item.body}</p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
