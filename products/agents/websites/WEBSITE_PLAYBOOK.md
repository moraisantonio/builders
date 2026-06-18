# WEBSITE_PLAYBOOK — Referência de processo para o agente de websites

> Este arquivo é uma versão condensada do processo para uso rápido pelo agente.
> Para o processo completo com contexto e nuances, ver `AGENT.md` na raiz do repositório.

---

## Fases em ordem obrigatória

```
1. Discovery      → entender negócio, público, objetivo
2. Proposta       → sitemap + stack + escopo aprovados
3. Conteúdo       → assets coletados, copy escrito e aprovado
4. Design         → direção visual + layout aprovados
5. Dev            → site construído com SEO e analytics
6. QA             → todos os checklists executados
7. Launch         → go-live com aprovação do cliente
8. Pós-launch     → Search Console, avaliações, documentação
```

**Regra crítica:** nenhuma fase começa sem a anterior encerrada.
**Regra crítica:** copy aprovado antes do design. Nunca o contrário.

---

## Perguntas obrigatórias antes de qualquer proposta

1. Qual é o negócio? O que ele vende ou oferece?
2. Quem é o cliente do cliente? Qual o perfil de quem decide comprar?
3. Qual o principal objetivo do site? (visibilidade / credibilidade / contato / vendas)
4. Existe site atual? O que está errado com ele?
5. O cliente tem fotos e textos ou precisa de tudo?
6. Qual o prazo e o contexto urgente?

---

## Entregáveis obrigatórios por fase

| Fase | Entregável | Template de referência |
|---|---|---|
| Discovery | `02-discovery.md` preenchido | `docs/websites/templates/discovery-template.md` |
| Proposta | Sitemap aprovado + stack definida | `03-sitemap.md`, `07-stack-decision.md` |
| Conteúdo | Copy aprovado por seção | `05-copy.md` |
| Design | Direção visual aprovada | `06-design-direction.md` |
| Dev | Site em staging com todos os checklists | `dev-checklist.md`, `seo-checklist.md` |
| QA | `qa-final-checklist.md` completo | |
| Launch | `10-launch-checklist.md` completo | |

---

## Critérios de entrega ("pronto" não é relativo)

Um site está pronto quando:
- Visitante entende o negócio em 5 segundos
- CTA principal está acima da dobra e é óbvio
- Nenhum placeholder de texto
- Formulários funcionam e e-mail chega
- Testado em iOS Safari e Chrome Android
- Lighthouse performance mobile > 70
- Analytics recebendo dados
- `10-launch-checklist.md` 100% marcado

---

## Fontes de verdade por prioridade

1. Linear (se integração ativa) — decisões de negócio, roadmap, status
2. `clients/[nome]/website-project/` — briefing, decisões e aprovações do projeto específico
3. `docs/websites/` — guias, padrões e referências
4. `AGENT.md` — processo detalhado e regras do agente
5. Contexto do prompt atual

---

*Para usar: carregar junto com `AGENT.md` e o arquivo do cliente específico*
