import type { ReactNode } from 'react';

type Variant = 'gold' | 'outline' | 'dark' | 'ghost';
type Size = 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: Variant;
  size?: Size;
  external?: boolean;
  className?: string;
  disabled?: boolean;
}

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full font-bold uppercase tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink disabled:cursor-not-allowed disabled:opacity-50';

const variants: Record<Variant, string> = {
  gold: 'bg-gold-gradient text-ink shadow-gold hover:-translate-y-0.5 hover:shadow-[0_22px_55px_-12px_rgba(245,168,0,0.7)]',
  outline: 'border-2 border-gold/60 text-gold hover:border-gold hover:bg-gold/10',
  dark: 'bg-ink text-white hover:bg-ink-700',
  ghost: 'text-white/80 hover:text-gold',
};

const sizes: Record<Size, string> = {
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-sm sm:text-base',
};

export function Button({
  children,
  href,
  onClick,
  type = 'button',
  variant = 'gold',
  size = 'md',
  external = true,
  className,
  disabled,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className ?? ''}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
