# WEBSITE_QA — Sistema de QA para o agente de websites

> Checklist compacto para o agente executar antes de qualquer entrega.
> Para versão humana completa: `docs/websites/checklists/qa-final-checklist.md`

---

## Teste dos 5 segundos (executar primeiro)

Ler o site como se fosse um visitante que nunca ouviu falar do negócio.
Responder em 5 segundos:
- [ ] O que este negócio faz?
- [ ] Para quem?
- [ ] O que fazer agora?

Se não conseguir responder as três, o site não passa para o próximo passo.

---

## Copy

- [ ] Nenhum placeholder em nenhuma página
- [ ] Headline da home: máximo 8 palavras
- [ ] CTA principal: verbo + resultado, máximo 4 palavras
- [ ] Nenhuma frase com mais de 3 linhas no mobile
- [ ] Nenhum jargão que o público não usaria
- [ ] Nenhum clichê: "solução completa", "ecossistema", "potencializar"

## Design

- [ ] CTA acima da dobra na home
- [ ] Contraste mínimo 4,5:1 em todos os pares texto/fundo
- [ ] Nenhuma das proibições visuais violadas
- [ ] Site testado mentalmente em 375px (mobile)

## Técnico

- [ ] Todos os formulários funcionando
- [ ] WhatsApp abre o número correto
- [ ] Nenhum link quebrado
- [ ] Images otimizadas (WebP, comprimidas)
- [ ] Analytics instalado

## SEO

- [ ] Title tag única e descritiva em cada página
- [ ] H1 único com keyword principal em cada página
- [ ] Schema LocalBusiness implementado (PME local)

## Documentação

- [ ] Decisões principais registradas no arquivo do cliente
- [ ] Próximos passos definidos

---

## Declaração de entrega

O agente só deve declarar uma entrega como "concluída" após todos os itens acima marcados.

Se algum item não pode ser verificado diretamente (ex: formulário — requer teste real), declarar explicitamente: "Este item requer teste manual antes do go-live."

---

*Versão completa: `docs/websites/checklists/qa-final-checklist.md`*
