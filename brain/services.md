# Services — Detalhamento dos serviços da Builders

> Documento interno de referência. Use ao montar propostas, briefings e automações.
> Fonte: Linear > Builders > Landing page + Structure 1

---

## Visão geral

> **Posicionamento (jun/2026):** a Builders é uma *AI-Powered Services as Software*. A oferta se organiza em **Setup** (projeto único — website, automação com CRM, martech/tracking) e **App Buildrs** (produtos por assinatura). Cafeterias são atendidas pela marca-vertente **drip** (voz e produtos próprios — ver Linear, team Drip).

A Builders oferece quatro serviços principais, vendidos como **projeto único (setup)** com opção de **retainer mensal (plataforma)** após a entrega.

| Serviço | Entrega | Modelo |
|---|---|---|
| Site profissional | Site institucional, landing page ou e-commerce | Projeto + retainer opcional |
| Automações com IA | Fluxos de atendimento, CRM, WhatsApp, processos internos | Projeto + retainer opcional |
| Agente de IA | Agente personalizado integrado ao negócio do cliente | Projeto + retainer obrigatório |
| Builders App | Painel do cliente com IA do negócio integrada | Retainer mensal |

---

## 01 · Site profissional

**O que é:** construção de presença digital sólida para o negócio do cliente — site que aparece no Google, comunica bem e converte visitante em contato.

**Tipos de entrega:**
- Site institucional — apresentação da empresa, serviços, contato e localização
- Landing page — foco em uma oferta ou conversão específica
- E-commerce — loja online integrada com pagamento e gestão de pedidos

**Tecnologia usada:**
- Webflow — para clientes que precisam de CMS e autonomia para editar conteúdo
- Next.js + Vercel — para clientes que precisam de performance, customização ou integração com sistemas

**Inclui:**
- Design responsivo (desktop e mobile)
- SEO básico (títulos, meta description, Google Search Console)
- Integração com WhatsApp ou formulário de contato
- Treinamento de 10 minutos para o cliente editar o conteúdo

**Não inclui (escopo adicional):**
- Criação de conteúdo (textos e fotos do negócio)
- Gestão de tráfego pago
- Integração com sistemas externos (ERP, CRM) — cobrado à parte

---

## 02 · Automações com IA

**O que é:** fluxos automatizados que eliminam tarefas repetitivas do dia a dia do cliente — atendimento no WhatsApp, follow-up de leads, organização de pedidos, notificações internas.

**Exemplos de automações entregues:**
- Atendimento automático no WhatsApp com triagem de mensagens
- Resposta inteligente a perguntas frequentes
- Notificação automática de novo lead ou pedido
- Follow-up de orçamentos não respondidos
- Integração entre formulário do site e planilha ou CRM

**Tecnologia usada:**
- Make (Integromat) — fluxos visuais, integrações com WhatsApp, email, Google Sheets
- n8n — fluxos mais técnicos ou que precisam de auto-hospedagem
- Z-API ou Evolution API — integração com WhatsApp Business

**Inclui:**
- Mapeamento do fluxo antes da construção
- Documentação do que foi automatizado
- Teste e validação antes da ativação
- Treinamento básico para o cliente acompanhar

**Não inclui:**
- Criação de conta nas ferramentas (cliente precisa ter acesso próprio ao Make/n8n)
- Manutenção de fluxos sem retainer ativo

---

## 03 · Agente de IA

**O que é:** agente de IA personalizado com a identidade, tom de voz e conhecimento do negócio do cliente — para atender, responder, qualificar e apoiar a operação.

**Casos de uso:**
- Atendimento no WhatsApp ou site em linguagem humana
- Qualificação de leads antes de passar para o time
- Resposta a perguntas sobre produtos, serviços, preços e localização
- Apoio interno ao time (agente que responde dúvidas operacionais)

**Tecnologia usada:**
- Claude API (Anthropic) como motor principal
- Integração via WhatsApp (Z-API), site (widget) ou Builders App

**Inclui:**
- Definição de persona, tom de voz e escopo do agente
- Treinamento com informações do negócio do cliente
- Integração com o canal escolhido
- Testes e ajustes antes da ativação
- Retainer mensal obrigatório para manutenção e evolução do agente

**Importante:** agente de IA requer retainer ativo — sem mensalidade, o agente é desativado.

---

## 04 · Builders App

**O que é:** painel do cliente onde ele acompanha o crescimento digital do negócio, com um agente de IA integrado que responde perguntas, sugere ações e mantém o cliente no controle.

**Funcionalidades previstas:**
- Visão geral da presença digital (site, automações, agente)
- IA do negócio integrada — cliente conversa com o agente direto no painel
- Histórico de entregas e ajustes realizados
- Canal direto com o time da Builders para solicitar melhorias

**Tecnologia:**
- Next.js (App Router) + TypeScript + Tailwind CSS
- Claude API integrado como agente do painel
- Deploy na Vercel

**Status:** em desenvolvimento — produto próprio da Builders, entregue como parte do retainer mensal.

**Modelo:** disponível apenas para clientes com retainer ativo.

---

## Modelo de precificação (referência — a validar)

| Serviço | Setup (projeto único) | Retainer mensal |
|---|---|---|
| Site básico | A definir | Opcional |
| Site + automação | A definir | Opcional |
| Agente de IA | A definir | Obrigatório |
| Pacote completo (site + automação + agente) | A definir | Obrigatório |
| Builders App | Incluso no pacote completo | Obrigatório |

> Valores a definir após entrevistas com clientes dos nichos-alvo (issue ANT-6 no Linear).

---

## Regras de escopo

1. Todo projeto começa com um **diagnóstico de 30 minutos** — sem custo, sem compromisso
2. O cliente recebe proposta com escopo, prazo e valor fechados antes de qualquer trabalho
3. Mudanças de escopo durante o projeto são tratadas como itens adicionais
4. Retainer mensal pode ser cancelado com 30 dias de aviso — agente de IA é desativado ao cancelar
5. Clientes sem retainer ativo não têm acesso ao Builders App

---

*Atualizado em maio de 2026 · Fonte: Linear > Builders · Revisar após validação com clientes (issue ANT-5)*