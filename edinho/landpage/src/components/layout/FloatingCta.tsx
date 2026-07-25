import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LINKS } from '@/data/links';

// Botão flutuante fixo — aparece após rolar um pouco.
export function FloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 640);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={LINKS.whatsappCampanha}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 320, damping: 26 }}
          className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5 rounded-full bg-gold-gradient px-5 py-3.5 text-sm font-extrabold uppercase tracking-wide text-ink shadow-gold sm:bottom-7 sm:right-7"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink/50" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-ink" />
          </span>
          Edinho Araújo 2525
        </motion.a>
      )}
    </AnimatePresence>
  );
}
