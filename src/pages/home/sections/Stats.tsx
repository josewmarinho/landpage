import { Reveal, SectionHeading } from '@/components/ui';
import { STATS } from '@/data/content';
import { useCountUp } from '@/hooks/useCountUp';

function StatCard({ value, suffix, label, index }: { value: number; suffix?: string; label: string; index: number }) {
  const { ref, value: current } = useCountUp(value);
  return (
    <Reveal delay={index * 0.06} className="relative">
      <div className="group h-full overflow-hidden rounded-3xl border border-navy/10 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-yellow/60">
        <span className="block h-1.5 w-10 rounded-full bg-gold-gradient" />
        <span ref={ref as React.RefObject<HTMLSpanElement>} className="mt-4 block font-display text-6xl text-navy sm:text-7xl">
          {current}
          {suffix ?? ''}
        </span>
        <p className="mt-3 text-sm font-semibold uppercase leading-snug tracking-wide text-navy/60">{label}</p>
      </div>
    </Reveal>
  );
}

export function Stats() {
  return (
    <section id="edinho" className="section-pad relative bg-sky">
      <div className="container-x">
        <SectionHeading
          tone="dark"
          eyebrow="Uma vida inteira pelo Interior"
          title={
            <>
              Uma vida inteira <span className="text-em-green">trabalhando</span> pelo Interior
            </>
          }
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-5">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i} />
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 text-base text-navy/70">E ainda foi prefeito de Santa Fé do Sul e ministro de Portos.</p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="display mt-10 max-w-4xl text-2xl text-navy sm:text-3xl md:text-4xl">
            Experiência não é apenas tempo. <span className="text-em-green">É saber transformar tempo em resultado.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
