# Website — Builders

Site institucional da Builders. Apresenta a empresa, serviços, cases e blog, e converte visitante em lead.

Feito em **Astro**: site estático, leve e rápido, com conteúdo em Markdown e tudo que se repete virando componente reutilizável.

---

## Stack

- **Framework:** Astro (saída 100% estática, sem JS no cliente por padrão)
- **Estilo:** CSS puro com tokens da marca (`src/styles/global.css`) + estilos escopados por componente
- **Conteúdo:** Markdown (blog em `src/content/blog/`)
- **Deploy:** Vercel (preset estático)
- **Design:** Figma — https://www.figma.com/design/KWFaI1E10dT6bGptJva1CM/Buildrs

## Referências do repositório

- Identidade visual e tokens: `../../brain/design/design.md`
- Copy oficial: `./COPY.md`
- Rotas e páginas: `./ROUTES.md`

---

## Como rodar localmente

```bash
npm install      # instala as dependências
npm run dev      # sobe em http://localhost:4321
npm run build    # gera o site estático em dist/ (gera sitemap)
npm run preview  # serve o build de produção localmente
```

> O `sitemap-index.xml` só é gerado no `build`, não no `dev`.

---

## Variáveis de ambiente

Copie `.env.example` para `.env`. Tudo é opcional — o site roda sem nada configurado.

| Variável | Para quê |
|---|---|
| `PUBLIC_SITE_URL` | URL final do site (sitemap, canônicas, Open Graph). Definir na Vercel quando o domínio existir. |
| `PUBLIC_GA_ID` | Google Analytics 4 (opcional). |
| `PUBLIC_META_PIXEL` | Meta/Facebook Pixel (opcional). |

---

## Estrutura de pastas

```
website/
├── astro.config.mjs        # Config do Astro (site, sitemap)
├── README.md · COPY.md · ROUTES.md
├── public/                 # Estáticos servidos na raiz (imagens, favicon)
├── src/
│   ├── consts.ts           # Config central: nome, navegação, contato, SEO
│   ├── content.config.ts   # Schema da coleção do blog
│   ├── content/blog/        # Posts em Markdown
│   ├── styles/global.css    # Tokens da marca + estilos base
│   ├── components/
│   │   ├── BaseHead.astro    # <head> de SEO (meta, OG, JSON-LD)
│   │   ├── Header.astro · Footer.astro
│   │   ├── Tracking.astro    # Pixels/analytics (por env var)
│   │   ├── Popup.astro       # Pop-up reutilizável
│   │   ├── BrandIcon.astro   # Símbolo da marca
│   │   └── sections/         # Dobras da home (Hero, Services, ...)
│   ├── layouts/
│   │   ├── BaseLayout.astro  # Casca de toda página (head + header + footer)
│   │   └── BlogPost.astro    # Template de post do blog
│   └── pages/
│       ├── index.astro       # Home (/)
│       ├── blog/             # Listagem + rota dinâmica do post
│       ├── robots.txt.ts     # robots liberando bots de IA
│       └── rss.xml.js        # Feed RSS do blog
```

---

## Componentes reutilizáveis

Tudo que se repete está em um lugar só — muda lá e reflete em todas as páginas:

- **Cabeçalho e rodapé** (`Header`, `Footer`) — navegação vem de `src/consts.ts`.
- **Pop-up** (`Popup`) — configurável por props, lembra a dispensa do visitante.
- **Tracking** (`Tracking`) — pixels/analytics centralizados, ativados por env var.
- **Template de post** (`BlogPost`) — todo post novo é só um `.md` em `src/content/blog/`.

## SEO, AEO e GEO

- Title e meta description por página (via `BaseHead`).
- Dados estruturados JSON-LD: `Organization`, `WebSite` e `FAQPage` na home; `BlogPosting` nos posts.
- `sitemap-index.xml` automático e feed `rss.xml`.
- `robots.txt` liberando explicitamente bots de IA (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.) para que ChatGPT e o Google AI Overviews possam ler e citar o conteúdo.

## Como fazer deploy

Na Vercel, usar preset **Astro** (build `astro build`, saída `dist/`).
Confirmar com Antonio e Jorge antes de subir para produção.

---

*Builders Digital Solutions · Migrado para Astro em junho de 2026*
