interface CheckPillProps {
  label: string;
  checked: boolean;
  onToggle: () => void;
}

// Opção selecionável em formato de pílula (checkbox estilizado).
export function CheckPill({ label, checked, onToggle }: CheckPillProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={checked}
      className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition-all duration-200 ${
        checked
          ? 'border-gold bg-gold/12 text-white'
          : 'border-white/12 bg-white/[0.03] text-white/70 hover:border-white/25'
      }`}
    >
      <span
        className={`flex h-5 w-5 flex-none items-center justify-center rounded-md border-2 transition-colors ${
          checked ? 'border-gold bg-gold text-ink' : 'border-white/30'
        }`}
      >
        {checked && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2 6.2 4.6 9 10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      {label}
    </button>
  );
}
