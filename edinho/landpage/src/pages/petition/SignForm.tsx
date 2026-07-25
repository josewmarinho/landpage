import { motion } from 'framer-motion';
import { Button, Field } from '@/components/ui';
import { usePetitionForm } from '@/hooks/usePetitionForm';
import { PETITION_GOAL } from '@/data/petition';

interface CheckLineProps {
  checked: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

function CheckLine({ checked, onToggle, children }: CheckLineProps) {
  return (
    <button type="button" onClick={onToggle} aria-pressed={checked} className="flex w-full items-start gap-3 text-left">
      <span
        className={`mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-md border-2 transition-colors ${
          checked ? 'border-gold bg-gold text-ink' : 'border-white/25'
        }`}
      >
        {checked && (
          <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2 6.2 4.6 9 10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      <span className="text-sm leading-snug text-white/75">{children}</span>
    </button>
  );
}

export function SignForm() {
  const form = usePetitionForm();

  return (
    <div className="rounded-3xl border border-white/10 bg-ink p-7 shadow-card sm:p-9">
      {/* Contador / progresso */}
      <div className="mb-7">
        <div className="flex items-end justify-between">
          <div>
            <span className="font-display text-4xl text-gradient-gold">{form.signatures.toLocaleString('pt-BR')}</span>
            <span className="ml-2 text-sm text-white/50">assinaturas</span>
          </div>
          <span className="text-sm font-semibold text-white/50">Meta: {PETITION_GOAL.target.toLocaleString('pt-BR')}</span>
        </div>
        <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-white/10">
          <motion.span
            className="block h-full rounded-full bg-gold-gradient"
            initial={{ width: 0 }}
            whileInView={{ width: `${form.progress}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>

      {form.submitted ? (
        <div className="flex flex-col items-center py-6 text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-gradient text-2xl text-ink">✓</span>
          <h3 className="display mt-5 text-2xl text-white">Assinatura registrada!</h3>
          <p className="mt-3 max-w-xs text-sm text-white/60">
            Abrimos o WhatsApp para você confirmar. Agora compartilhe e faça essa voz chegar a Brasília.
          </p>
          <button onClick={form.reset} className="mt-5 text-sm font-bold uppercase tracking-wide text-gold hover:underline">
            Assinar novamente
          </button>
        </div>
      ) : (
        <form onSubmit={form.submit} className="space-y-5">
          <Field label="Nome" value={form.name} onChange={form.setName} placeholder="Seu nome completo" />
          <Field label="Cidade" value={form.city} onChange={form.setCity} placeholder="Sua cidade" />
          <Field label="WhatsApp" value={form.whatsapp} onChange={form.changeWhatsapp} placeholder="(00) 00000-0000" inputMode="tel" />

          <div className="space-y-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
            <CheckLine checked={form.supports} onToggle={() => form.setSupports(!form.supports)}>
              <strong className="text-white">Eu apoio</strong> esta mobilização pela saúde do Noroeste Paulista.
            </CheckLine>
            <CheckLine checked={form.wantsUpdates} onToggle={() => form.setWantsUpdates(!form.wantsUpdates)}>
              Quero receber pelo WhatsApp notícias sobre esta mobilização e informações de Edinho Araújo.
            </CheckLine>
          </div>

          {form.error && <p className="text-sm font-semibold text-yellow-400">{form.error}</p>}

          <Button type="submit" size="lg" className="w-full">
            Assinar o abaixo-assinado
          </Button>

          <p className="text-[0.72rem] leading-relaxed text-white/40">
            A assinatura do abaixo-assinado é independente da autorização para receber comunicações.
          </p>
        </form>
      )}
    </div>
  );
}
