import { Reveal, SectionHeading } from '@/components/ui';
import { PROPOSALS } from '@/data/content';
import { ProposalIcon } from './ProposalIcon';

export function Proposals() {
  return (
    <section id="propostas" className="section-pad relative bg-ink">
      <div className="container-x">
        <SectionHeading
          eyebrow="Propostas"
          title={
            <>
              Edinho já fez muito. <span className="text-gradient-gold">E quer fazer muito mais.</span>
            </>
          }
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROPOSALS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <article className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-gradient text-ink shadow-gold transition-transform group-hover:scale-105">
                  <ProposalIcon name={item.icon} />
                </span>
                <h3 className="mt-5 text-xl font-extrabold uppercase tracking-wide text-white">{item.title}</h3>
                <ul className="mt-4 space-y-3">
                  {item.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-white/65">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}

          {/* card de destaque */}
          <Reveal delay={0.3}>
            <div className="flex h-full flex-col justify-center rounded-3xl bg-gold-gradient p-8 text-ink shadow-gold">
              <span className="text-3xl">🇧🇷</span>
              <p className="display mt-4 text-2xl leading-tight sm:text-3xl">
                O Brasil só será forte quando seus municípios forem fortes.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
