import { Link } from 'react-router-dom';
import { Logo } from '@/components/ui';
import { LINKS } from '@/data/links';

const SOCIALS: { label: string; href: string; path: string }[] = [
  { label: 'Facebook', href: LINKS.redes.facebook, path: 'M13.5 9H15V6.5h-1.8C11 6.5 10 7.8 10 9.7V11H8.5v2.5H10V19h2.5v-5.5h1.7l.3-2.5h-2V9.9c0-.6.2-.9.8-.9Z' },
  { label: 'Instagram', href: LINKS.redes.instagram, path: 'M8.5 4h7A4.5 4.5 0 0 1 20 8.5v7a4.5 4.5 0 0 1-4.5 4.5h-7A4.5 4.5 0 0 1 4 15.5v-7A4.5 4.5 0 0 1 8.5 4Zm3.5 4.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8Zm0 1.8A1.4 1.4 0 1 1 12 13.4a1.4 1.4 0 0 1 0-2.8Zm3.4-2.4a.8.8 0 1 0 0 1.6.8.8 0 0 0 0-1.6Z' },
  { label: 'YouTube', href: LINKS.redes.youtube, path: 'M20 8.4a2.1 2.1 0 0 0-1.5-1.5C17.2 6.6 12 6.6 12 6.6s-5.2 0-6.5.3A2.1 2.1 0 0 0 4 8.4 22 22 0 0 0 3.8 12 22 22 0 0 0 4 15.6a2.1 2.1 0 0 0 1.5 1.5c1.3.3 6.5.3 6.5.3s5.2 0 6.5-.3a2.1 2.1 0 0 0 1.5-1.5A22 22 0 0 0 20.2 12 22 22 0 0 0 20 8.4ZM10.4 14.2V9.8l3.8 2.2Z' },
  { label: 'X', href: LINKS.redes.x, path: 'M17 5h2.3l-5 5.7L20 19h-4.6l-3.6-4.7L7.7 19H5.4l5.3-6.1L4.7 5h4.7l3.2 4.3Zm-.8 12.6h1.3L8.2 6.3H6.8Z' },
  { label: 'TikTok', href: LINKS.redes.tiktok, path: 'M16 4c.3 1.9 1.4 3.2 3.2 3.4v2.3c-1.1.1-2.2-.2-3.2-.8v4.9a4.9 4.9 0 1 1-4.9-4.9c.3 0 .5 0 .8.1v2.4a2.5 2.5 0 1 0 1.8 2.4V4Z' },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="container-x px-5 py-16 lg:px-12">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/55">
              Edinho é candidato a Deputado Federal por São Paulo. Foi prefeito de São José do Rio Preto e de Santa Fé do
              Sul, deputado estadual, deputado federal e ministro de Portos.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/12 text-white/70 transition-colors hover:border-gold hover:text-gold"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.24em] text-gold-400">Navegação</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li><a href="#inicio" className="hover:text-gold">Início</a></li>
              <li><a href="#resultados" className="hover:text-gold">Resultados</a></li>
              <li><a href="#propostas" className="hover:text-gold">Propostas</a></li>
              <li><a href="#faca-parte" className="hover:text-gold">Faça parte</a></li>
              <li><Link to="/abaixo-assinado" className="hover:text-gold">Abaixo-assinado da Saúde</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.24em] text-gold-400">Participe</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li><a href={LINKS.vakinha} target="_blank" rel="noopener noreferrer" className="hover:text-gold">Apoiar a campanha</a></li>
              <li><a href={LINKS.whatsappCampanha} target="_blank" rel="noopener noreferrer" className="hover:text-gold">WhatsApp da campanha</a></li>
              <li><a href={LINKS.linktree} target="_blank" rel="noopener noreferrer" className="hover:text-gold">Todos os links</a></li>
              <li><a href={LINKS.politicaPrivacidade} className="hover:text-gold">Política de Privacidade</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Edinho Araújo 2525. Todos os direitos reservados.</p>
          <p className="font-semibold text-white/55">A força do Interior em Brasília.</p>
        </div>
      </div>
    </footer>
  );
}
