// robots.txt gerado dinamicamente pra usar a URL real do site no Sitemap.
// Libera explicitamente os principais bots de IA — queremos que ChatGPT,
// Perplexity, Claude e o Google AI Overviews leiam e citem o conteúdo (GEO/AEO).
import type { APIRoute } from "astro";

// Bots de IA que queremos explicitamente permitir.
const AI_BOTS = [
  "GPTBot", // OpenAI — treino/rastreamento
  "OAI-SearchBot", // OpenAI — busca/citação
  "ChatGPT-User", // OpenAI — acesso via ChatGPT
  "ClaudeBot", // Anthropic
  "anthropic-ai", // Anthropic
  "Claude-Web", // Anthropic
  "PerplexityBot", // Perplexity
  "Perplexity-User", // Perplexity
  "Google-Extended", // Google Gemini / AI Overviews
  "Applebot-Extended", // Apple Intelligence
  "CCBot", // Common Crawl (alimenta vários LLMs)
  "Bytespider", // ByteDance
  "Amazonbot", // Amazon
  "cohere-ai", // Cohere
];

export const GET: APIRoute = ({ site }) => {
  const sitemap = site ? new URL("sitemap-index.xml", site).toString() : "/sitemap-index.xml";

  const aiRules = AI_BOTS.map((bot) => `User-agent: ${bot}\nAllow: /`).join("\n\n");

  const body = `# robots.txt — Builders
# Liberado para buscadores e para motores de IA (queremos ser encontrados e citados).

User-agent: *
Allow: /

${aiRules}

Sitemap: ${sitemap}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
