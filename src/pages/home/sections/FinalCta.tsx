import { Button, Reveal } from '@/components/ui';
import { LINKS } from '@/data/links';

const CLAIMS = [
  '54 anos de vida pública.',
  '16 anos cuidando de Rio Preto.',
  '4 mandatos defendendo São Paulo na Câmara.',
  'Grandes obras que mudaram a nossa região.',
];

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink-radial px-5 py-24 text-center sm:py-32 lg:px-12">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="font-display text-[42vw] leading-none text-white/[0.03] sm:text-[30rem]">2525</span>
      </div>

      <div className="container-x relative">
        <Reveal>
          <ul className="mx-auto flex max-w-2xl flex-col gap-1.5 text-sm font-semibold text-white/60 sm:text-base">
            {CLAIMS.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="mx-auto mt-6 max-w-2xl text-white/70">
            Agora, Edinho quer colocar toda essa experiência novamente a serviço do Interior.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="display mx-auto mt-10 max-w-4xl text-4xl text-white sm:text-6xl md:text-7xl">
            Quem já fez, <span className="text-gradient-gold">sabe como fazer mais.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-8 text-lg font-bold uppercase tracking-wide text-white/80">
            Para Deputado Federal, vote Edinho Araújo
          </p>
          <p className="font-display text-7xl text-gradient-gold sm:text-8xl md:text-9xl">2525</p>
          <p className="mt-4 text-base font-semibold uppercase tracking-[0.2em] text-gold-400">
            A força do Interior em Brasília
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href={LINKS.whatsappCampanha} size="lg">
              Faça parte da campanha
            </Button>
            <Button href={LINKS.vakinha} variant="outline" size="lg">
              Apoiar com uma doação
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
