import { Button, Reveal, SectionHeading } from '@/components/ui';
import { RESULTS } from '@/data/content';
import { LINKS } from '@/data/links';

export function Results() {
  const [featured, ...rest] = RESULTS;

  return (
    <section id="resultados" className="section-pad relative overflow-hidden bg-cream text-ink">
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-gold/10 blur-[120px]" />
      <div className="container-x relative">
        <SectionHeading
          tone="dark"
          eyebrow="Resultados"
          title={
            <>
              Não é promessa. <span className="text-gradient-gold">Tem a marca do Edinho.</span>
            </>
          }
        />

        {/* Card destaque — Ponte */}
        <Reveal className="mt-12">
          <article className="grid overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-card md:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col justify-center bg-ink p-8 text-white sm:p-10">
              <span className="eyebrow">{featured.tag}</span>
              <h3 className="display mt-4 text-4xl sm:text-5xl">{featured.title}</h3>
              <p className="mt-4 text-lg font-bold text-gold-400">{featured.highlight}</p>
            </div>
            <div className="flex items-center p-8 sm:p-10">
              <p className="text-lg leading-relaxed text-ink/75">{featured.body}</p>
            </div>
          </article>
        </Reveal>

        {/* Grid de resultados */}
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <article className="group flex h-full flex-col rounded-3xl border border-ink/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-card">
                <span className="inline-flex w-fit rounded-full bg-gold/12 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-widest text-gold-700">
                  {item.tag}
                </span>
                <h3 className="display mt-4 text-2xl text-ink">{item.title}</h3>
                <p className="mt-2 font-bold text-ember">{item.highlight}</p>
                <p className="mt-4 text-[0.95rem] leading-relaxed text-ink/70">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="display text-2xl text-ink sm:text-3xl">
            Isso é experiência <span className="text-gradient-gold">que faz.</span>
          </p>
          <Button href={LINKS.linktree} variant="dark" size="lg">
            Conheça mais resultados
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
