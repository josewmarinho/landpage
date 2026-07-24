import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  className?: string;
}

// Cabeçalho de seção com eyebrow + título display.
export function SectionHeading({ eyebrow, title, align = 'left', tone = 'light', className }: SectionHeadingProps) {
  const titleColor = tone === 'light' ? 'text-white' : 'text-ink';
  return (
    <div className={`${align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className ?? ''}`}>
      {eyebrow && (
        <Reveal>
          <span className={`eyebrow ${align === 'center' ? 'justify-center' : ''}`}>
            <span className="h-px w-6 bg-green-500" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className={`display mt-4 text-3xl sm:text-4xl md:text-5xl ${titleColor}`}>{title}</h2>
      </Reveal>
    </div>
  );
}
