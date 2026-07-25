import { Link } from 'react-router-dom';
import { Button, Logo, Reveal, SectionHeading } from '@/components/ui';
import { DEFEND_ITEMS, EDINHO_HEALTH, PETITION_HERO } from '@/data/petition';
import { LINKS } from '@/data/links';
import { DefendIcon } from './DefendIcon';
import { SignForm } from './SignForm';

const portrait = '/images/edinho-retrato.jpg';

export function PetitionPage() {
  return (
    <div className="bg-ink">
      {/* Header simples */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur-lg">
        <div className="container-x flex items-center justify-between px-5 py-3 lg:px-12">
          <Link to="/" aria-label="Voltar para a página inicial" className="inline-flex rounded-xl bg-white px-3 py-2 shadow-card">
            <Logo className="h-10" />
          </Link>
          <div className="flex items-center gap-3">
            <Link to="/" className="hidden text-sm font-semibold text-white/70 hover:text-white sm:block">
              ← Campanha
            </Link>
            <a
              href="#assinar"
              className="rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-extrabold uppercase tracking-wide text-ink shadow-gold"
            >
              Quero assinar
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden bg-ink-radial pt-28 pb-20 sm:pt-36">
          <div className="pointer-events-none absolute -top-32 right-0 h-[520px] w-[520px] rounded-full bg-gold/15 blur-[130px]" />
          <div className="container-x relative grid items-center gap-12 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
            <div>
              <Reveal>
                <span className="eyebrow">
                  <span className="h-px w-6 bg-green-500" />
                  {PETITION_HERO.eyebrow} · Saúde
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="display mt-5 text-4xl text-white sm:text-5xl md:text-6xl">
                  Mais recursos para a saúde do <span className="text-gradient-gold">Noroeste Paulista</span>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-xl text-lg font-semibold text-white/85">{PETITION_HERO.lead}</p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-4 max-w-xl leading-relaxed text-white/65">{PETITION_HERO.body}</p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-8">
                  <Button href="#assinar" external={false} size="lg">
                    Quero assinar
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1">
                      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Button>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="relative mx-auto max-w-sm">
                <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-[2rem] bg-gold-gradient opacity-90" />
                <div className="overflow-hidden rounded-[2rem] border border-white/10 shadow-card">
                  <img src={portrait} alt="Edinho Araújo" className="h-full w-full object-cover" width={800} height={800} />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* O QUE DEFENDEMOS */}
        <section className="section-pad bg-white text-ink">
          <div className="container-x">
            <SectionHeading
              tone="dark"
              eyebrow="O que estamos defendendo"
              title={
                <>
                  Mais recursos federais <span className="text-em-green">para:</span>
                </>
              }
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {DEFEND_ITEMS.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.06}>
                  <article className="flex h-full flex-col rounded-3xl border border-navy/10 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-yellow/60">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-gradient text-navy shadow-gold">
                      <DefendIcon name={item.icon} />
                    </span>
                    <h3 className="mt-5 text-lg font-extrabold uppercase tracking-wide text-navy">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-navy/65">{item.body}</p>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.1} className="mt-12 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="display text-3xl text-navy sm:text-4xl">
                Saúde <span className="text-em-green">não pode esperar.</span>
              </p>
              <Button href="#assinar" external={false} variant="dark" size="lg">
                Assine agora
              </Button>
            </Reveal>
          </div>
        </section>

        {/* EDINHO E A SAÚDE */}
        <section className="section-pad relative overflow-hidden bg-sky">
          <div className="pointer-events-none absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-yellow/10 blur-[130px]" />
          <div className="container-x relative grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                tone="dark"
                eyebrow="Trajetória"
                title={
                  <>
                    Edinho já mostrou que saúde <span className="text-em-green">é prioridade.</span>
                  </>
                }
              />
              <div className="mt-8 space-y-4 text-navy/70">
                {EDINHO_HEALTH.paragraphs.map((p) => (
                  <Reveal key={p}>
                    <p className="leading-relaxed">{p}</p>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={0.1}>
                <p className="mt-6 rounded-2xl border border-navy/10 bg-white p-5 text-sm italic leading-relaxed text-navy/70 shadow-card">
                  {EDINHO_HEALTH.note}
                </p>
              </Reveal>
            </div>

            <div className="flex flex-col justify-center">
              <Reveal>
                <h3 className="text-sm font-bold uppercase tracking-[0.24em] text-green-600">Compromissos</h3>
                <ul className="mt-6 space-y-4">
                  {EDINHO_HEALTH.commitments.map((c) => (
                    <li key={c} className="flex items-start gap-4 rounded-2xl border border-navy/10 bg-white p-5 shadow-card">
                      <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-green/15 text-green-600">✓</span>
                      <span className="font-semibold text-navy/85">{c}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="display mt-8 text-2xl text-navy sm:text-3xl">
                  Quem já fez, <span className="text-em-green">sabe como fazer mais.</span>
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ASSINAR */}
        <section id="assinar" className="section-pad relative overflow-hidden bg-white scroll-mt-20">
          <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-yellow/10 blur-[140px]" />
          <div className="container-x relative grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
            <div>
              <SectionHeading
                tone="dark"
                eyebrow="Nossa saúde é regional"
                title={
                  <>
                    Nossa saúde é regional. <span className="text-em-green">Os recursos também precisam ser.</span>
                  </>
                }
              />
              <Reveal delay={0.1}>
                <p className="mt-6 max-w-md leading-relaxed text-navy/65">
                  Hospitais de Rio Preto atendem pacientes de todo o Noroeste Paulista. Por isso, esta não é uma
                  reivindicação de uma única cidade. É uma causa de toda a região.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-6 max-w-md font-semibold text-navy/85">
                  Queremos mostrar a Brasília que o Interior precisa ser tratado como prioridade. Assine por mais recursos
                  federais para a nossa saúde.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <SignForm />
            </Reveal>
          </div>
        </section>

        {/* BANNER FINAL */}
        <section className="relative overflow-hidden bg-ink-radial px-5 py-24 text-center sm:py-28 lg:px-12">
          <div className="container-x relative">
            <Reveal>
              <h2 className="display mx-auto max-w-3xl text-4xl text-white sm:text-5xl md:text-6xl">
                A saúde do Interior <span className="text-gradient-gold">não pode esperar.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-6 text-lg font-semibold uppercase tracking-wide text-white/70">
                Assine. Compartilhe. Faça essa voz chegar a Brasília.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-9 flex flex-wrap justify-center gap-4">
                <Button href="#assinar" external={false} size="lg">
                  Eu quero assinar
                </Button>
                <Button href={LINKS.whatsappCampanha} variant="outline" size="lg">
                  Compartilhar no WhatsApp
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <Link to="/" className="mt-10 inline-block text-sm font-semibold text-white/50 hover:text-gold">
                ← Voltar para a campanha do Edinho 2525
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  );
}
