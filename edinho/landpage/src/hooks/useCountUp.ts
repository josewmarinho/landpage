import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

// ─── Hook: anima um número de 0 até `target` quando entra na viewport ──
export function useCountUp(target: number, durationMs = 1400) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    // Sem movimento (reduced-motion / modo flat): mostra o valor final direto.
    const flat =
      document.documentElement.hasAttribute('data-flat') ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (flat) {
      setValue(target);
      return;
    }

    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, durationMs]);

  return { ref, value };
}
