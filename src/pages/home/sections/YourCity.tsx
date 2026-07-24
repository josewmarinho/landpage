import { Button, Field, FormSuccess, Reveal } from '@/components/ui';
import { useLeadForm } from '@/hooks/useLeadForm';
import { LINKS } from '@/data/links';

export function YourCity() {
  const form = useLeadForm({ waIntro: 'Olá! Quero contar sobre a minha cidade para o Edinho.' });

  return (
    <section id="sua-cidade" className="section-pad relative overflow-hidden bg-blue-gradient">
      <div className="pointer-events-none absolute -right-20 top-10 h-96 w-96 rounded-full bg-yellow/10 blur-[130px]" />
      <div className="container-x relative grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        {/* Texto */}
        <div>
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-green-500" />
              Na sua cidade
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="display mt-4 text-3xl text-white sm:text-4xl md:text-5xl">
              O que Brasília precisa fazer <span className="text-gradient-gold">pela sua cidade?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md leading-relaxed text-white/65">
              Quem vive no município sabe onde o problema aperta. E quem quer representar o Interior precisa ouvir.
              Conte para Edinho.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <h3 className="text-xl font-extrabold uppercase tracking-wide text-white">
                Quer receber Edinho na sua cidade?
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                São Paulo tem 645 municípios. Para representar o Interior, é preciso estar no Interior. Conversar. Ouvir.
                Olhar nos olhos. Entender cada realidade.
              </p>
              <Button href={LINKS.whatsappCampanha} variant="outline" className="mt-6">
                Quero Edinho na minha cidade
              </Button>
            </div>
          </Reveal>
        </div>

        {/* Formulário */}
        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-white/10 bg-ink p-7 shadow-card sm:p-9">
            {form.submitted ? (
              <FormSuccess
                title="Recebido!"
                message="Abrimos o WhatsApp para você concluir o envio. Obrigado por fortalecer o Interior."
                resetLabel="Enviar outra mensagem"
                onReset={form.reset}
              />
            ) : (
              <form onSubmit={form.submit} className="space-y-5">
                <Field label="De qual cidade você é?" value={form.state.city} onChange={(v) => form.setField('city', v)} placeholder="Sua cidade" />
                <Field
                  label="Principal necessidade do seu município"
                  value={form.state.message ?? ''}
                  onChange={(v) => form.setField('message', v)}
                  placeholder="Conte para nós..."
                  textarea
                />
                <Field label="Nome" value={form.state.name} onChange={(v) => form.setField('name', v)} placeholder="Seu nome" />
                <Field label="WhatsApp" value={form.state.whatsapp} onChange={(v) => form.setField('whatsapp', v)} placeholder="(00) 00000-0000" inputMode="tel" />
                {form.error && <p className="text-sm font-semibold text-yellow-400">{form.error}</p>}
                <Button type="submit" size="lg" className="w-full">
                  Enviar para Edinho
                </Button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
