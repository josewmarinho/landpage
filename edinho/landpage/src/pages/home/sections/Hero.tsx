import { motion } from 'framer-motion';
import { Button } from '@/components/ui';
import { HERO } from '@/data/content';

const portrait = '/images/edinho-retrato.jpg';

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.15 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] } }),
};

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-ink-radial pt-28 pb-16 sm:pt-32 md:pt-36">
      {/* brilho de fundo */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[560px] w-[560px] rounded-full bg-gold/20 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-green/15 blur-[120px]" />

      <div className="container-x relative grid items-center gap-10 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:px-12">
        {/* Coluna texto */}
        <div className="order-2 lg:order-1">
          <motion.span custom={0} variants={fade} initial="hidden" animate="show" className="eyebrow">
            <span className="h-px w-6 bg-gold" />
            A força do Interior em Brasília
          </motion.span>

          <motion.h1 custom={1} variants={fade} initial="hidden" animate="show" className="display mt-5 text-white">
            <span className="block text-4xl sm:text-6xl lg:text-7xl">Edinho Araújo</span>
            <span className="mt-2 block text-2xl text-white/85 sm:text-3xl lg:text-[2.6rem]">
              Deputado Federal{' '}
              <span className="text-gradient-gold">{HERO.number}</span>
            </span>
          </motion.h1>

          <motion.p custom={2} variants={fade} initial="hidden" animate="show" className="mt-6 max-w-xl text-lg font-semibold text-white/85">
            {HERO.subSlogan}
          </motion.p>

          <motion.ul custom={3} variants={fade} initial="hidden" animate="show" className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/65">
            {HERO.bio.map((line) => (
              <li key={line} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {line}
              </li>
            ))}
          </motion.ul>

          <motion.p custom={4} variants={fade} initial="hidden" animate="show" className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
            {HERO.paragraph}
          </motion.p>

          <motion.div custom={5} variants={fade} initial="hidden" animate="show" className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="#faca-parte" external={false} size="lg">
              Quero fazer parte
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Button>
            <a href="#resultados" className="text-sm font-bold uppercase tracking-wide text-white/70 transition-colors hover:text-gold">
              Ver resultados ↓
            </a>
          </motion.div>
        </div>

        {/* Coluna retrato */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 mx-auto w-full max-w-md lg:order-2"
        >
          <div className="absolute inset-0 -z-10 translate-x-4 translate-y-4 rounded-[2rem] bg-gold-gradient opacity-90" />
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-ink-800 shadow-card">
            <img
              src={portrait}
              alt="Edinho Araújo"
              className="h-full w-full object-cover"
              width={1000}
              height={1000}
            />
          </div>
          {/* selo número */}
          <div className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-ink/90 px-5 py-3 shadow-card backdrop-blur">
            <span className="font-display text-4xl text-gradient-gold">2525</span>
            <span className="text-[0.7rem] font-bold uppercase leading-tight tracking-widest text-white/70">
              Deputado
              <br />
              Federal
            </span>
          </div>
        </motion.div>
      </div>

      {/* faixa marquee */}
      <div className="relative mt-16 overflow-hidden border-y border-white/10 py-4">
        <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, block) => (
            <div key={block} className="flex items-center gap-8">
              {['Quem já fez, sabe como fazer mais', '54 anos de vida pública', '16 anos prefeito de Rio Preto', 'A força do Interior', 'Deputado Federal 2525'].map(
                (t) => (
                  <span key={t} className="flex items-center gap-8 text-sm font-bold uppercase tracking-[0.2em] text-white/45">
                    {t}
                    <span className="text-gold">✦</span>
                  </span>
                ),
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
