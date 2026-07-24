import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Rola para o topo ao trocar de rota (ignora âncoras #).
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash]);

  return null;
}
