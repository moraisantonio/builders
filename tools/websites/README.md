# Tools / Websites

> Esta pasta é reservada para scripts, utilitários e ferramentas de automação relacionadas à operação de websites.

---

## O que vai aqui (quando existir)

- Scripts de compressão e conversão de imagens (WebP, AVIF)
- Scripts de geração de sitemap.xml
- Templates de schema markup (JSON-LD) prontos para colar
- Scripts de auditoria automatizada (Lighthouse batch, broken links)
- Snippets de configuração reutilizável (next.config.js base, robots.txt padrão)

---

## Status atual

Pasta criada mas ainda sem conteúdo — adicionar ferramentas conforme surgir necessidade real de automação.

**Regra:** só adicionar ferramenta aqui se ela resolver um problema que já apareceu em pelo menos dois projetos. Não antecipar.

---

## Snippets úteis de referência

### Robots.txt padrão para Next.js + Vercel

```
User-agent: *
Allow: /
Disallow: /api/
Sitemap: https://www.seudominio.com.br/sitemap.xml
```

### Schema LocalBusiness base

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "",
    "addressLocality": "",
    "addressRegion": "",
    "postalCode": "",
    "addressCountry": "BR"
  },
  "telephone": "",
  "url": ""
}
```

### Comando para converter imagens para WebP (macOS com cwebp)

```bash
# Instalar: brew install webp
# Converter uma imagem:
cwebp -q 80 imagem.jpg -o imagem.webp
# Converter em lote:
for f in *.jpg; do cwebp -q 80 "$f" -o "${f%.jpg}.webp"; done
```

---

*Adicionar scripts reais aqui quando o volume de projetos justificar a automação*
