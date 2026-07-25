interface FormSuccessProps {
  title?: string;
  message?: string;
  onReset: () => void;
  resetLabel?: string;
}

// Estado de sucesso reutilizável para os formulários.
export function FormSuccess({
  title = 'Recebido!',
  message = 'Abrimos o WhatsApp para você concluir o envio. Obrigado por fazer parte.',
  onReset,
  resetLabel = 'Enviar novamente',
}: FormSuccessProps) {
  return (
    <div className="flex flex-col items-center py-8 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-gradient text-2xl text-ink">✓</span>
      <h3 className="display mt-5 text-2xl text-white">{title}</h3>
      <p className="mt-3 max-w-xs text-sm text-white/60">{message}</p>
      <button onClick={onReset} className="mt-5 text-sm font-bold uppercase tracking-wide text-gold hover:underline">
        {resetLabel}
      </button>
    </div>
  );
}
