import { AnimatePresence, motion } from 'framer-motion';
import { Logo } from '@/components/ui';
import { LINKS } from '@/data/links';
import { NAV_ITEMS, useNavbar } from './useNavbar';

export function Navbar() {
  const { scrolled, menuOpen, setMenuOpen, active, goTo } = useNavbar();

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'border-b border-white/10 bg-ink/85 backdrop-blur-lg' : 'bg-transparent'
        }`}
      >
        <nav className="container-x flex items-center justify-between px-5 py-3 lg:px-12">
          <button onClick={() => goTo('inicio')} className="flex-none" aria-label="Ir para o topo">
            <Logo />
          </button>

          <ul className="hidden items-center gap-7 lg:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => goTo(item.id)}
                  className={`relative text-sm font-semibold transition-colors ${
                    active === item.id ? 'text-gold' : 'text-white/75 hover:text-white'
                  }`}
                >
                  {item.label}
                  {active === item.id && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-gold"
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={LINKS.vakinha}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-extrabold uppercase tracking-wide text-ink shadow-gold transition-transform hover:-translate-y-0.5 sm:inline-flex"
            >
              Edinho 2525
            </a>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
              aria-label="Abrir menu"
            >
              <span className="relative block h-4 w-5">
                <span className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${menuOpen ? 'top-2 rotate-45' : 'top-0'}`} />
                <span className={`absolute left-0 top-2 h-0.5 w-5 bg-current transition-all ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`absolute left-0 h-0.5 w-5 bg-current transition-all ${menuOpen ? 'top-2 -rotate-45' : 'top-4'}`} />
              </span>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-ink/95 backdrop-blur-lg lg:hidden"
          >
            <ul className="flex h-full flex-col items-center justify-center gap-6">
              {NAV_ITEMS.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <button
                    onClick={() => goTo(item.id)}
                    className="font-display text-3xl uppercase tracking-wide text-white/85 hover:text-gold"
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
              <motion.li initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                <a
                  href={LINKS.vakinha}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex rounded-full bg-gold-gradient px-8 py-4 text-base font-extrabold uppercase tracking-wide text-ink"
                >
                  Apoiar Edinho 2525
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
