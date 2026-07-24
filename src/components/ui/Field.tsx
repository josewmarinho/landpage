interface FieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  textarea?: boolean;
  inputMode?: 'text' | 'tel' | 'email';
  tone?: 'dark' | 'light';
}

// Campo de formulário controlado (UI pura).
export function Field({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  textarea = false,
  inputMode = 'text',
  tone = 'dark',
}: FieldProps) {
  const shell =
    tone === 'dark'
      ? 'border-white/12 bg-white/[0.04] text-white placeholder:text-white/35 focus:border-gold/70 focus:bg-white/[0.06]'
      : 'border-ink/10 bg-white text-ink placeholder:text-ink/35 focus:border-gold';
  const labelColor = tone === 'dark' ? 'text-white/60' : 'text-ink/60';

  const shared =
    `w-full rounded-2xl border px-4 py-3.5 text-[0.95rem] outline-none transition-colors duration-200 ${shell}`;

  return (
    <label className="block">
      <span className={`mb-2 block text-xs font-bold uppercase tracking-[0.18em] ${labelColor}`}>{label}</span>
      {textarea ? (
        <textarea
          className={`${shared} min-h-[110px] resize-none`}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <input
          className={shared}
          type={type}
          inputMode={inputMode}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </label>
  );
}
