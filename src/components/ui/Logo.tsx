interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  withTagline?: boolean;
}

// Wordmark EDINHO ARAÚJO com chama — SVG, escala sem perder nitidez.
export function Logo({ variant = 'light', className, withTagline = true }: LogoProps) {
  const araujoColor = variant === 'light' ? '#FFFFFF' : '#0B0B0C';
  const taglineColor = variant === 'light' ? '#C9C9CF' : '#4A4A52';

  return (
    <span className={`inline-flex flex-col leading-none ${className ?? ''}`} aria-label="Edinho Araújo">
      <span className="flex items-center gap-0.5">
        <span className="font-display text-2xl tracking-tight text-gold sm:text-[1.7rem]">EDINHO</span>
        <span className="relative -top-[2px] mx-[1px] animate-flicker">
          <svg width="14" height="20" viewBox="0 0 14 20" fill="none" aria-hidden="true">
            <path
              d="M7 0c1 2.4.3 4-.9 5.4C4.9 6.9 3.4 8.2 3.4 10.6A3.6 3.6 0 0 0 10 12.6c.5-1.4-.2-2.5-.2-2.5.6.4 1 1.1 1.1 2.1A4.5 4.5 0 0 1 7 19a4.7 4.7 0 0 1-4.7-4.7c0-2.9 1.9-4.5 3.1-6.4C6.4 6.1 7 4.5 7 0Z"
              fill="#F5A800"
            />
          </svg>
        </span>
        <span className="font-display text-2xl tracking-tight sm:text-[1.7rem]" style={{ color: araujoColor }}>
          ARAÚJO
        </span>
      </span>
      {withTagline && (
        <span className="mt-1 text-[0.58rem] font-bold uppercase tracking-[0.34em]" style={{ color: taglineColor }}>
          54 anos de vida pública
        </span>
      )}
    </span>
  );
}
