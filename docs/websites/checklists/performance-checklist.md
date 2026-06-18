# Performance Checklist — Verificação antes do launch

---

## Imagens

- [ ] Todas as imagens em WebP ou AVIF
- [ ] Hero/banner: máximo 500KB
- [ ] Imagens de corpo: máximo 200KB cada
- [ ] Miniaturas e ícones: máximo 30KB
- [ ] Lazy loading em imagens fora da viewport inicial (`loading="lazy"`)
- [ ] Atributos `width` e `height` definidos (previne CLS)
- [ ] Imagens responsivas com `srcset` ou equivalente da plataforma

## Fontes

- [ ] Fonte carregada com `font-display: swap`
- [ ] Preload na fonte principal usada above the fold
- [ ] Máximo 2 famílias tipográficas por site
- [ ] Subset da fonte se possível (só os caracteres usados)

## JavaScript e CSS

- [ ] Sem scripts desnecessários no critical path
- [ ] Scripts de terceiros (Analytics, Pixel) com `async` ou `defer`
- [ ] CSS crítico inline ou carregado antes do conteúdo principal

## Teste e metas

- [ ] Testar com PageSpeed Insights (mobile e desktop)
- [ ] LCP < 2,5 segundos
- [ ] FID / INP < 200ms
- [ ] CLS < 0,1
- [ ] Score de performance do Lighthouse > 70 no mobile

## Plataforma específica

### Webflow
- [ ] Compressão de imagem ativada no Assets
- [ ] Lazy loading ativado nas coleções e listas
- [ ] Sem interações pesadas desnecessárias

### Next.js
- [ ] Imagens com `next/image` (compressão automática)
- [ ] Fontes com `next/font` (sem FOUT)
- [ ] Bundle analisado: `next build && next analyze` (se configurado)

---

*Ferramenta de teste: https://pagespeed.web.dev/*
