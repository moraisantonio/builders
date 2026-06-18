# Dev Checklist — Antes de passar para QA

---

## Estrutura e navegação

- [ ] Todas as páginas do sitemap aprovado foram criadas
- [ ] Navegação funciona em todas as páginas
- [ ] Links internos corretos — nenhum link quebrado
- [ ] Favicon configurado
- [ ] 404 page configurada (não deixar o default da plataforma)

## Responsividade

- [ ] Testado em 375px (iPhone SE)
- [ ] Testado em 390px (iPhone 14)
- [ ] Testado em 768px (tablet)
- [ ] Testado em 1280px e 1440px (desktop)
- [ ] Menus colapsam corretamente no mobile
- [ ] Imagens não transbordam o container em nenhum breakpoint
- [ ] Botões têm área de toque mínima de 44px em mobile

## CTAs e formulários

- [ ] Todos os botões de CTA estão clicáveis e apontam para o lugar correto
- [ ] Formulário de contato envia e o cliente recebe a notificação
- [ ] Mensagem de confirmação após envio do formulário
- [ ] Link de WhatsApp abre o número correto com mensagem pré-preenchida (se configurado)
- [ ] Links de redes sociais abrem no lugar certo (não na home da rede)

## SEO técnico

- [ ] Title tag configurada em todas as páginas (único por página)
- [ ] Meta description configurada em todas as páginas
- [ ] H1 único por página com keyword principal
- [ ] Alt text em todas as imagens informativas
- [ ] URLs sem caracteres especiais, sem acentos, sem espaços
- [ ] Canonical tags configuradas (se houver conteúdo duplicado)
- [ ] Sitemap.xml gerado e acessível em `/sitemap.xml`
- [ ] Robots.txt correto e acessível em `/robots.txt`
- [ ] Schema LocalBusiness implementado (para PMEs locais)

## Performance

- [ ] Imagens em WebP ou AVIF
- [ ] Imagens comprimidas (nenhuma maior que 200KB para imagens de corpo, 500KB para hero)
- [ ] Lazy loading em imagens fora da viewport inicial
- [ ] Fontes com `font-display: swap`
- [ ] Nenhum JavaScript desnecessário no critical path
- [ ] Testar com Lighthouse: score de performance > 70

## Analytics

- [ ] Google Analytics 4 instalado e enviando dados
- [ ] Evento de clique no CTA principal configurado
- [ ] Evento de envio de formulário configurado
- [ ] Clique no WhatsApp rastreado
- [ ] Meta Pixel instalado (se cliente faz tráfego pago)

## Segurança e domínio

- [ ] HTTPS ativo (certificado SSL)
- [ ] Redirect de HTTP para HTTPS configurado
- [ ] Redirect de www para sem-www (ou o contrário) configurado

---

*Próximo: seo-checklist.md → performance-checklist.md → accessibility-checklist.md → qa-final-checklist.md*
