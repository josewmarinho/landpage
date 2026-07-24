import { Reveal, SectionHeading } from '@/components/ui';
import { STATS } from '@/data/content';
import { useCountUp } from '@/hooks/useCountUp';

function StatCard({ value, suffix, label, index }: { value: number; suffix?: string; label: string; index: number }) {
  const { ref, value: current } = useCountUp(value);
  return (
    <Reveal delay={index * 0.06} className="relative">
      <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-colors duration-300 hover:border-gold/40">
        <span ref={ref as React.RefObject<HTMLSpanElement>} className="font-display text-6xl text-gradient-gold sm:text-7xl">
          {current}
          {suffix ?? ''}
        </span>
        <p className="mt-3 text-sm font-semibold uppercase leading-snug tracking-wide text-white/65">{label}</p>
      </div>
    </Reveal>
  );
}

export function Stats() {
  return (
    <section id="edinho" className="section-pad relative bg-ink">
      <div className="container-x">
        <SectionHeading
          eyebrow="Uma vida inteira pelo Interior"
          title={
            <>
              Uma vida inteira <span className="text-gradient-gold">trabalhando</span> pelo Interior
            </>
          }
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-5">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i} />
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 text-base text-white/65">
            E ainda foi prefeito de Santa Fé do Sul e ministro de Portos.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="display mt-10 max-w-4xl text-2xl text-white sm:text-3xl md:text-4xl">
            Experiência não é apenas tempo. <span className="text-gradient-gold">É saber transformar tempo em resultado.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
