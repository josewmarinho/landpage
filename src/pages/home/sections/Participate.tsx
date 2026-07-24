import { Button, CheckPill, Field, FormSuccess, Reveal, SectionHeading } from '@/components/ui';
import { PARTICIPATE_OPTIONS } from '@/data/content';
import { useLeadForm } from '@/hooks/useLeadForm';

const OPTION_LABELS = PARTICIPATE_OPTIONS.map((o) => o.title);

export function Participate() {
  const form = useLeadForm({
    availableOptions: OPTION_LABELS,
    requireOption: true,
    waIntro: 'Olá! Quero fazer parte da campanha do Edinho 2525.',
  });

  return (
    <section id="faca-parte" className="section-pad relative overflow-hidden bg-sky">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-yellow/10 blur-[140px]" />
      <div className="container-x relative">
        <SectionHeading
          align="center"
          tone="dark"
          eyebrow="Faça parte"
          title={
            <>
              Essa história continua <span className="text-em-green">com você.</span>
            </>
          }
        />
        <Reveal delay={0.05}>
          <p className="mx-auto mt-5 max-w-xl text-center text-navy/65">Escolha como quer participar:</p>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-[1fr_1fr]">
          {/* Opções */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {PARTICIPATE_OPTIONS.map((opt, i) => (
              <Reveal key={opt.title} delay={i * 0.06}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-navy/10 bg-white p-5 shadow-card">
                  <span className="text-2xl">{opt.emoji}</span>
                  <div>
                    <h3 className="font-extrabold uppercase tracking-wide text-navy">{opt.title}</h3>
                    <p className="mt-1 text-sm text-navy/60">{opt.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Formulário */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-white/10 bg-ink p-7 shadow-blue sm:p-8">
              {form.submitted ? (
                <FormSuccess
                  title="Bem-vindo à campanha!"
                  message="Abrimos o WhatsApp para concluir seu cadastro. Juntos pela força do Interior."
                  onReset={form.reset}
                />
              ) : (
                <form onSubmit={form.submit} className="space-y-5">
                  <Field label="Nome" value={form.state.name} onChange={(v) => form.setField('name', v)} placeholder="Seu nome" />
                  <Field label="Cidade" value={form.state.city} onChange={(v) => form.setField('city', v)} placeholder="Sua cidade" />
                  <Field label="WhatsApp" value={form.state.whatsapp} onChange={(v) => form.setField('whatsapp', v)} placeholder="(00) 00000-0000" inputMode="tel" />

                  <div>
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-white/60">Como quer participar?</span>
                    <div className="grid gap-2.5">
                      {form.availableOptions.map((opt) => (
                        <CheckPill key={opt} label={opt} checked={form.state.options.includes(opt)} onToggle={() => form.toggleOption(opt)} />
                      ))}
                    </div>
                  </div>

                  {form.error && <p className="text-sm font-semibold text-yellow-400">{form.error}</p>}

                  <Button type="submit" size="lg" className="w-full">
                    Quero fazer parte
                  </Button>

                  <p className="text-[0.72rem] leading-relaxed text-white/40">
                    Ao se cadastrar, você autoriza o envio de informações relacionadas às atividades de Edinho Araújo
                    pelos canais informados. Você poderá cancelar o recebimento a qualquer momento.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
