// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Config do site da Builders em Astro.
// `site` precisa ser a URL final pra gerar sitemap e URLs canônicas corretas.
// Como o domínio ainda não está registrado, usamos uma env var com fallback local.
// Em produção (Vercel), definir PUBLIC_SITE_URL com o domínio real.
const SITE_URL = process.env.PUBLIC_SITE_URL ?? "http://localhost:4321";

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
