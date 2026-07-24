import { Reveal } from '@/components/ui';
import { VALUES } from '@/data/content';

const TRAITS = ['Filho e neto de agricultores.', 'Homem de família e de fé.', 'Marido, pai e avô.'];

export function WhoIs() {
  return (
    <section className="section-pad relative overflow-hidden bg-blue-gradient">
      <div className="pointer-events-none absolute -left-20 top-1/3 h-80 w-80 rounded-full bg-yellow/10 blur-[130px]" />
      <div className="container-x relative grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-green-500" />
              Quem é Edinho
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display mt-4 text-3xl text-white sm:text-4xl md:text-5xl">
              Experiência, sim. Mas, acima de tudo, <span className="text-gradient-gold">valores.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-8 space-y-3">
              {TRAITS.map((t) => (
                <li key={t} className="flex items-center gap-3 text-lg text-white/80">
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-yellow/15 text-yellow-400">✦</span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-8 max-w-lg leading-relaxed text-white/65">
              Edinho aprendeu cedo o valor do trabalho, da palavra e do respeito. Na política, construiu sua trajetória
              da mesma maneira — <span className="font-semibold text-white">sem transformar adversários em inimigos</span> e
              sem política de briga pela briga. Com firmeza para defender aquilo em que acredita e equilíbrio para
              construir soluções.
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col justify-center">
          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              {VALUES.map((v, i) => (
                <div
                  key={v}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-7 transition-colors hover:border-yellow/50"
                >
                  <span className="font-display text-5xl text-white/15 transition-colors group-hover:text-yellow/30">
                    0{i + 1}
                  </span>
                  <p className="mt-2 font-display text-2xl uppercase text-gradient-gold">{v}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <blockquote className="mt-8 rounded-3xl border border-white/10 bg-white/[0.05] p-7 text-xl font-bold leading-snug text-white">
              <span className="mb-1 block font-display text-5xl leading-[0.6] text-yellow-400" aria-hidden="true">
                &ldquo;
              </span>
              Porque o interesse das pessoas precisa estar acima das disputas políticas.
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
