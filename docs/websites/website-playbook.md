# Website Playbook — Processo de criação de sites na Builders

> Visão macro do processo. Para detalhes de cada fase, use os checklists e templates correspondentes.

---

## As 7 fases de um projeto de site

```
Discovery → Proposta → Conteúdo → Estrutura → Design → Dev → Launch
```

Cada fase tem: entradas, saídas e responsável principal. Nenhuma fase começa sem a anterior estar encerrada.

---

## Fase 1 — Discovery

**Objetivo:** entender o suficiente para propor com confiança.

**Entradas necessárias:**
- Conversa com o cliente (30–60 min)
- Qualquer material existente: site atual, redes, propostas, logo

**O que produzir:**
- `02-discovery.md` preenchido no projeto do cliente
- Proposta de valor em uma frase
- Perfil do público em uma frase

**Checklist:** `checklists/discovery-checklist.md`
**Template:** `templates/discovery-template.md`

**Regra:** não avançar sem saber o objetivo do site, o público e o diferencial do negócio.

---

## Fase 2 — Proposta e alinhamento

**Objetivo:** fechar escopo, stack, prazo e valor antes de qualquer trabalho.

**O que produzir:**
- Sitemap proposto (rascunho)
- Stack recomendada com justificativa
- Escopo em texto simples (o que inclui e o que não inclui)
- Proposta formal

**Checklist:** `checklists/kickoff-checklist.md`
**Template:** `templates/stack-decision-template.md`, `templates/sitemap-template.md`

**Regra:** cliente aprova por escrito antes de qualquer design ou desenvolvimento.

---

## Fase 3 — Coleta de conteúdo

**Objetivo:** ter tudo que o cliente precisa fornecer antes de começar o design.

**O que pedir:**
- Fotos do negócio (espaço, equipe, produto)
- Textos existentes (sobre a empresa, serviços, bio)
- Logo em vetor (SVG ou AI)
- Acessos: domínio, hospedagem, Analytics, Search Console, WhatsApp Business

**Guia:** `website-content-collection.md`

**Regra:** não iniciar design sem fotos reais ou definição clara de que serão criadas.

---

## Fase 4 — Arquitetura e copy

**Objetivo:** definir estrutura do site e escrever textos reais antes de qualquer design.

**O que produzir:**
- `03-sitemap.md` — páginas, hierarquia, propósito de cada uma
- `04-wireframe.md` — estrutura de seções por página (textual)
- `05-copy.md` — textos reais por seção, sem placeholders

**Checklists:** `checklists/design-checklist.md`
**Templates:** `templates/sitemap-template.md`, `templates/wireframe-textual-template.md`, `templates/copy-per-section-template.md`
**Referência:** `website-copy-guide.md`, `patterns/`

**Regra:** copy aprovado antes de layout. Não redesenhar por causa de mudança de texto depois.

---

## Fase 5 — Direção visual e design

**Objetivo:** definir look & feel, componentes-base e aprovar com o cliente antes de construir.

**O que produzir:**
- `06-design-direction.md` — paleta, tipografia, referências visuais, estilo de imagem
- Moodboard ou referências aprovadas
- Wireframe de alta fidelidade (Figma) ou protótipo no Webflow

**Checklist:** `checklists/design-checklist.md`
**Guia:** `website-design-guide.md`

**Regra:** uma rodada de revisão com o cliente antes de finalizar o design.

---

## Fase 6 — Desenvolvimento

**Objetivo:** construir o site com qualidade técnica, SEO e performance desde o início.

**O que produzir:**
- Site funcionando em staging/preview
- Todos os CTAs ativos
- SEO básico configurado (title, meta, h1, schema)
- Analytics instalado

**Checklist:** `checklists/dev-checklist.md`, `checklists/seo-checklist.md`, `checklists/performance-checklist.md`, `checklists/accessibility-checklist.md`
**Guia:** `website-seo-guide.md`

---

## Fase 7 — QA e launch

**Objetivo:** garantir que nada foi esquecido antes de ir ao ar.

**O que executar:**
- QA visual (desktop, mobile, tablet)
- Testes funcionais (formulários, CTAs, links)
- Checklist técnico (performance, SEO, analytics)
- Aprovação final do cliente

**Checklists:** `checklists/qa-final-checklist.md`, `checklists/pre-launch-checklist.md`

Após o launch:
- `checklists/post-launch-checklist.md`
- `11-post-launch-notes.md` preenchido no projeto do cliente

---

## Regras gerais do processo

1. **Nenhuma fase começa sem a anterior encerrada** — resistir à pressão de "já pula pro design"
2. **Copy antes de layout** — sempre. Mudança de texto depois do design gera retrabalho.
3. **Uma aprovação por fase** — cliente assina antes de avançar. Evita "mas eu pensei que..."
4. **Comunicação em linguagem simples** — nunca usar nomes de ferramentas com o cliente
5. **Registro no Linear** — decisões importantes vão para o issue do projeto, não ficam só no WhatsApp

---

## Tempo típico por tipo de projeto

| Tipo | Discovery | Design | Dev | Total estimado |
|---|---|---|---|---|
| Landing page | 1–2 dias | 2–3 dias | 2–3 dias | 1–2 semanas |
| Site institucional (4–6 páginas) | 2–3 dias | 4–6 dias | 5–7 dias | 2–4 semanas |
| Site + automação | Adicionar 1 semana | — | — | 3–5 semanas |

> Esses prazos assumem que o cliente entrega o conteúdo dentro de 2 dias úteis. Atrasos no conteúdo atrasam o projeto proporcionalmente.

---

*Atualizado em junho 2026 · Para detalhes do processo do agente de IA, ver `AGENT.md` na raiz.*
