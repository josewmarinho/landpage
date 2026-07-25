interface LogoProps {
  className?: string;
  /** Props mantidas por compatibilidade com chamadas existentes. */
  variant?: 'light' | 'dark';
  withTagline?: boolean;
}

// Logo oficial da campanha (arte em public/images/).
export function Logo({ className }: LogoProps) {
  return (
    <img
      src="/images/LOGO-CAMPANHA EDINHO-03.png"
      alt="Edinho — Deputado Federal 2525"
      className={`w-auto ${className ?? 'h-12'}`}
      width={2268}
      height={1304}
    />
  );
}
