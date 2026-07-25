import { Reveal, SectionHeading } from '@/components/ui';
import { TIMELINE } from '@/data/content';

export function Timeline() {
  return (
    <section className="section-pad relative overflow-hidden bg-sky">
      <div className="container-x relative">
        <SectionHeading
          tone="dark"
          eyebrow="Linha do tempo"
          title={
            <>
              Uma história construída <span className="text-em-green">pelo trabalho</span>
            </>
          }
        />

        <ol className="relative mt-14 space-y-8 md:space-y-0">
          {/* linha central desktop */}
          <span className="absolute left-4 top-2 hidden h-full w-0.5 bg-navy/15 md:left-1/2 md:block md:-translate-x-1/2" aria-hidden="true" />

          {TIMELINE.map((item, i) => {
            const isLast = i === TIMELINE.length - 1;
            const leftSide = i % 2 === 0;
            return (
              <li key={item.year} className="relative md:grid md:grid-cols-2 md:gap-10 md:py-4">
                {/* marcador */}
                <span
                  className={`absolute left-4 top-2 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full ring-4 ring-sky md:left-1/2 ${
                    isLast ? 'bg-yellow shadow-gold' : 'bg-green-500'
                  }`}
                  aria-hidden="true"
                />
                <Reveal
                  y={20}
                  className={`ml-10 md:ml-0 ${leftSide ? 'md:pr-12 md:text-right' : 'md:col-start-2 md:pl-12'}`}
                >
                  <div
                    className={`rounded-3xl border p-6 shadow-card transition-colors ${
                      isLast ? 'border-yellow bg-yellow/10' : 'border-navy/10 bg-white hover:border-navy/25'
                    }`}
                  >
                    <span className={`font-display text-3xl ${isLast ? 'text-navy' : 'text-green-600'}`}>{item.year}</span>
                    <h3 className="mt-2 text-lg font-extrabold uppercase tracking-wide text-navy">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy/65">{item.body}</p>
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
