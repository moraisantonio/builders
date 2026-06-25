// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Config do site da Builders em Astro, hospedado na Vercel.
// Saída estática pura (dist/). O deploy na Vercel é controlado pelo
// vercel.json na raiz do repo (builda a subpasta products/website).
//
// `site` precisa ser a URL final pra gerar sitemap, canônicas e Open Graph certos.
// Ordem de resolução:
//   1. PUBLIC_SITE_URL          → domínio definitivo (definir na Vercel quando existir)
//   2. VERCEL_PROJECT_PRODUCTION_URL → URL de produção da Vercel (ex: builders.vercel.app),
//                                 injetada automaticamente pela Vercel no build
//   3. localhost                → desenvolvimento local
const SITE_URL =
  process.env.PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:4321");

export default defineConfig({
  site: SITE_URL,
  // Saída 100% estática: sem JS no cliente por padrão = site leve e rápido.
  output: "static",
  integrations: [
    // Gera /sitemap-index.xml automaticamente a partir das páginas.
    sitemap(),
  ],
  build: {
    // Mantém o HTML como /pagina/index.html — URLs limpas e amigáveis a SEO.
    format: "directory",
  },
});
