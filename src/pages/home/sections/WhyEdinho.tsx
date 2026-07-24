import { Reveal } from '@/components/ui';
import { WHY_EDINHO } from '@/data/content';

export function WhyEdinho() {
  return (
    <section className="section-pad relative overflow-hidden bg-cream text-ink">
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '22px 22px' }} />
      <div className="container-x relative">
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-6 bg-gold" />
            Por que Edinho?
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="display mt-4 max-w-4xl text-3xl text-ink sm:text-5xl md:text-[3.4rem]">
            {WHY_EDINHO.title} <span className="text-gradient-gold">{WHY_EDINHO.subtitle}</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_EDINHO.points.map((p, i) => (
            <Reveal key={p} delay={i * 0.05}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-ink/10 bg-white p-6">
                <span className="font-display text-2xl text-gradient-gold">0{i + 1}</span>
                <p className="text-[0.98rem] font-semibold leading-snug text-ink/80">{p}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="display mt-12 text-2xl text-ink sm:text-3xl md:text-4xl">
            Não precisa começar do zero. <span className="text-gradient-gold">Está preparado desde o primeiro dia.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
