import { useCallback, useEffect, useState } from 'react';

export interface NavItem {
  id: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'inicio', label: 'Início' },
  { id: 'edinho', label: 'Edinho' },
  { id: 'resultados', label: 'Resultados' },
  { id: 'propostas', label: 'Propostas' },
  { id: 'sua-cidade', label: 'Na sua cidade' },
  { id: 'faca-parte', label: 'Faça parte' },
];

// Lógica do Navbar: estado scrolled, menu mobile e seção ativa (scrollspy).
export function useNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('inicio');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const goTo = useCallback((id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return { scrolled, menuOpen, setMenuOpen, active, goTo };
}
