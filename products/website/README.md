# Website — Builders

Site institucional da Builders. Apresenta a empresa, serviços, cases e converte visitante em lead.

---

## Stack

- **Framework:** Next.js (App Router)
- **Linguagem:** TypeScript
- **Estilo:** Tailwind CSS
- **Deploy:** Vercel
- **Design:** Figma — https://www.figma.com/design/KWFaI1E10dT6bGptJva1CM/Buildrs

## Referências do repositório

- Identidade visual: `../../brain/design/`
- Copy oficial: `./COPY.md`
- Rotas e páginas: `./ROUTES.md`
- Serviços detalhados: `../../brain/services.md`

---

## Como rodar localmente

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Acessar
http://localhost:3000
```

## Como fazer deploy

Deploy automático via Vercel a cada push na branch `main`.
Confirmar com Antonio e Jorge antes de subir para produção.

```bash
# Build local para testar antes do deploy
npm run build
npm run start
```

---

## Variáveis de ambiente

```env
# Criar arquivo .env.local na raiz de /website
NEXT_PUBLIC_SITE_URL=        # URL do site em produção (definir após registrar domínio)
```

---

## Estrutura de pastas

```
website/
├── README.md               # Este arquivo
├── ROUTES.md               # Mapa de páginas e rotas
├── COPY.md                 # Todos os textos do site por seção
├── public/                 # Arquivos estáticos
│   ├── favicon.ico         # Copiar de ../../brain/design/
│   ├── favicon-512.png     # Copiar de ../../brain/design/
│   └── images/             # Imagens do site
├── src/
│   ├── app/                # Rotas Next.js (App Router)
│   │   ├── page.tsx        # Página inicial (/)
│   │   ├── layout.tsx      # Layout global
│   │   └── ...             # Demais páginas
│   ├── components/         # Componentes reutilizáveis
│   │   ├── ui/             # Componentes base (botão, card, etc)
│   │   └── sections/       # Seções da landing page
│   └── styles/             # CSS global e tokens
└── tailwind.config.ts      # Configuração do Tailwind com tokens da marca
```

---

## Tokens de design no Tailwind

Configurar `tailwind.config.ts` com as cores da marca:

```ts
colors: {
  'off-black':       '#091717',
  'inky-blue':       '#133B39',
  'peacock':         '#2E5E5A',
  'turquoise':       '#20808D',
  'paper-white':     '#FBFAF4',
  'ecru':            '#E4E3D4',
  'apricot':         '#FFD2A6',
  'terra-cotta':     '#A84B2F',
  'boysenberry':     '#944454',
}
```

---

*Builders Digital Solutions · Atualizado em maio de 2026*
