// Configuração central do site — fonte única de verdade pra metadados, navegação e contato.
// Mude aqui e reflete em todas as páginas (header, footer, SEO, JSON-LD).

// URL final do site. Ainda sem domínio registrado: usa env var com fallback local.
// Em produção, definir PUBLIC_SITE_URL na Vercel.
export const SITE_URL: string =
  import.meta.env.PUBLIC_SITE_URL ?? "http://localhost:4321";

// Identidade da marca usada em SEO, Open Graph e dados estruturados.
export const SITE = {
  name: "builders",
  legalName: "Builders Digital Solutions",
  // Título e descrição padrão (sobrescritos por página). Fonte: COPY.md.
  defaultTitle: "Builders — Soluções em IA para consolidar sua presença digital",
  titleTemplate: "%s · Builders",
  description:
    "Sites otimizados, automações inteligentes e um chat de IA sobre o seu negócio, tudo em uma única plataforma. A Builders constrói o digital do seu negócio e cuida dele depois.",
  locale: "pt_BR",
  lang: "pt-BR",
  // Imagem padrão de compartilhamento (Open Graph / Twitter).
  ogImage: "/people-2.jpg",
  // Contato — ajustar quando os canais oficiais estiverem definidos.
  email: "contato@builders.com",
  whatsapp: "", // ex: "5521999999999" — preencher quando o número for definido
  social: {
    instagram: "",
    linkedin: "",
  },
} as const;

// Navegação principal — usada no Header e no Footer.
// `href: "#"` marca destinos ainda não construídos (páginas internas pendentes).
export const NAV_LINKS = [
  { label: "Segmentos", href: "#segmentos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Manifesto", href: "#manifesto" },
  { label: "Cases", href: "#cases" },
  { label: "Blog", href: "/blog" },
  { label: "Sobre", href: "#sobre" },
] as const;
