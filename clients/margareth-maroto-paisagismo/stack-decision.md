# Decisão de stack — Margareth Maroto Paisagismo

> Registrado a partir da decisão do Antonio. Referência: `docs/websites/website-stack-decision.md`

---

## Decisão

**Next.js**, hospedado na **Vercel**.

---

## Justificativa

O site precisa sustentar um portfólio de projetos técnicos (fotos reais, dado de escala, material voltado a construtora) com controle fino de apresentação — não é só um institucional simples. Next.js na Vercel dá liberdade pra estruturar isso do jeito certo e mantém o mesmo padrão de deploy que a Builders já usa nos próprios produtos.

---

## O que isso implica

- Portfólio e conteúdo do site são geridos via código/CMS a definir — não é edição livre tipo Webflow. Se a equipe da Margareth precisar adicionar projetos com frequência, avaliar um CMS headless (ou processo simples de PR) mais adiante.
- Deploy segue o fluxo padrão Builders: push → Vercel. Nenhum deploy pra produção sem confirmação do Antonio (ver `CLAUDE.md`).

---

## Aprovação

- [x] Decisão tomada pelo Antonio em agosto de 2026
- [ ] Comunicado à Margareth

---

*Próximo: iniciar sitemap assim que o briefing estiver validado com a cliente.*
