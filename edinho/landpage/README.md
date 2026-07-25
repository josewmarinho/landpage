# Edinho Araújo 2525 — Site de Campanha

Site de campanha (Deputado Federal 2525) construído em **React + Vite + TypeScript**,
com **Tailwind CSS**, **Framer Motion** (animações) e **React Router**.

Duas páginas:

- **`/`** — Landing page da campanha (hero, números, resultados, linha do tempo,
  valores, propostas, "por que Edinho", formulários "na sua cidade" e "faça parte", fechamento).
- **`/abaixo-assinado`** — Abaixo-assinado pela saúde do Noroeste Paulista
  (com contador de assinaturas e formulário).

## Rodar

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # build de produção em dist/
npm run preview    # pré-visualiza o build
```

## Onde personalizar

| O quê | Arquivo |
|---|---|
| **Links** (site, WhatsApp da campanha, linktree, redes sociais) | `src/data/links.ts` |
| **Textos da landing page** | `src/data/content.ts` |
| **Textos do abaixo-assinado** e meta de assinaturas | `src/data/petition.ts` |
| **Cores / fontes / tokens da marca** | `tailwind.config.js` |
| **Foto do candidato** | `public/images/edinho-retrato.jpg` |

> ⚠️ Os links em `src/data/links.ts` estão com valores **placeholder**
> (`wa.me/5517000000000`, etc). Substitua pelos oficiais antes de publicar.

## Formulários

Não há backend. Os formulários **validam os dados e abrem o WhatsApp**
com a mensagem pré-preenchida (nome, cidade, WhatsApp e interesses).
Para integrar com um backend/CRM, edite os hooks:

- `src/hooks/useLeadForm.ts` (formulários "na sua cidade" e "faça parte")
- `src/hooks/usePetitionForm.ts` (assinatura do abaixo-assinado)

## Acessibilidade

- Respeita `prefers-reduced-motion` (modo "flat": conteúdo sem animações de entrada).
- Também é possível forçar o modo flat com `?flat` na URL (útil para depurar/print).

## Estrutura

```
src/
├── components/
│   ├── layout/     Navbar, Footer, FloatingCta, ScrollToTop
│   └── ui/         Button, Field, CheckPill, Logo, Reveal, SectionHeading, FormSuccess
├── data/           content.ts, petition.ts, links.ts
├── hooks/          useCountUp, useLeadForm, usePetitionForm
├── lib/            mask.ts
└── pages/
    ├── home/       HomePage + sections/
    └── petition/   PetitionPage + SignForm
```
