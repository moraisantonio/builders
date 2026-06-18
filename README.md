# Repositório da empresa

Este repositório organiza o fluxo da Builders — AI-Powered Services as Software para pequenos e médios negócios.
# Builders — AI-Powered Services as Software

> Construímos o lado digital do seu negócio com IA, para você focar no que faz de melhor.

---

## O que é a Builders

**Builders** é uma *AI-Powered Services as Software* — uma Builders Intelligence Company: uma empresa de serviços com inteligência artificial, oferecida como software. Construímos e gerenciamos a presença digital de pequenos e médios negócios como parceiro digital de longo prazo. A oferta se organiza em **Setup** (projeto único) e **App Buildrs** (assinatura).

**Cliente ideal (ICP):** escritórios de arquitetura e negócios de serviço local no Brasil que querem crescer no digital mas não têm equipe técnica interna.

> **Marca-vertente — drip.** Cafeterias independentes são atendidas pela **drip** ("tech no compasso do seu café"), com voz e produtos próprios. Time Drip no Linear.

**Missão:** construir o lado digital de qualquer negócio com IA, para que o empreendedor foque no que faz de melhor enquanto a Builders cuida de todo o crescimento digital.

---

## Serviços

| Serviço | Descrição |
|---|---|
| **Sites profissionais** | Sites institucionais, landing pages e e-commerces otimizados para conversão e SEO |
| **Automações com IA** | Fluxos automatizados de atendimento, CRM, WhatsApp e processos internos com Make / n8n |
| **Agentes de IA** | Agentes personalizados integrados ao negócio do cliente para atendimento, vendas e suporte |
| **Builders App** | Painel do cliente para acompanhar o crescimento digital com um agente de IA integrado |

---

## Valores da marca

- **IA nativa** — IA não é recurso adicional, é o motor de tudo que entregamos
- **Foco em nichos** — profundidade em poucos segmentos em vez de superficialidade em muitos
- **Cliente sempre dono** — visibilidade total do que está sendo feito e dos resultados
- **Velocidade e resultados concretos** — entrega rápida, métricas claras, sem promessas vazias

---

## Estrutura do repositório
builders/
├── README.md               # Este arquivo — visão geral do projeto
├── CLAUDE.md               # Guia de comportamento da IA no repositório
├── docs/                   # Documentação interna (estrutura, decisões, roadmap)
│   ├── structure-1.md      # Documento de visão inicial da empresa
│   ├── brand.md            # Identidade visual, paleta e tipografia
│   └── services.md         # Detalhamento de cada serviço oferecido
├── products/               # Código e configurações dos produtos digitais
│   ├── website/            # Site institucional da Builders
│   ├── builders-app/       # Painel do cliente com agente de IA (Next.js)
│   └── agents/             # Prompts e configurações dos agentes de IA
├── automations/            # Templates e fluxos de automação reutilizáveis (Make / n8n)
├── clients/                # Projetos por cliente (cada um em sua subpasta)
│   └── _template/          # Template base para onboarding de novo cliente
└── tools/                  # Scripts internos, utilitários e integraçõe
> A estrutura acima é a organização base. Adapte conforme o projeto evolui — e registre mudanças estruturais no Linear.

---

## Como começar

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18+
- [Git](https://git-scm.com/)
- Acesso ao workspace do Linear — `linear.app/antoniomorais`

### Primeiros passos

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/builders.git
cd builders

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env
# Edite o .env com suas chaves de API
```

### Variáveis de ambiente necessárias

```env
ANTHROPIC_API_KEY=        # Chave da API do Claude (Anthropic)
MAKE_API_KEY=             # Chave do Make (automações)
N8N_WEBHOOK_URL=          # URL do webhook do n8n (opcional)
```

---

## Stack principal

| Camada | Tecnologia |
|---|---|
| IA / LLM | Claude API (Anthropic) |
| Builders App | Next.js · TypeScript · Tailwind CSS |
| Automações | Make (Integromat) · n8n |
| Sites de clientes | Webflow · Next.js |
| Atendimento | WhatsApp via Z-API ou Evolution API |
| Deploy | Vercel |
| Gestão | Linear |

---

## Gestão do projeto

Todo o planejamento, roadmap e tarefas da Builders são gerenciados no **Linear**.

- Workspace: [linear.app/antoniomorais](https://linear.app/antoniomorais)
- Projeto principal: **Builders**
- Documento de visão: **Structure 1** (Linear > Builders > Documents)
- Copy da landing page: **Landing page — Builders** (Linear > Builders > Documents)

---

## Time

| Nome | Papel |
|---|---|
| Antonio Morais | Co-fundador · Produto & Soluções Digitais |
| Jorge Brandão | Co-fundador · Marketing & Automações |

---

## Status do projeto

🟡 **Em estruturação** — validando ICP, definindo portfólio de serviços e construindo os primeiros cases.

---

*Builders · AI-Powered Services as Software · Atualizado em junho de 2026*mkdir -p \
  brain/website \
  brain/builders-app/agents \
  automations \
  clients/template \
  tools \
  marketing/campanhas \
  "marketing/landing pages" \
  "marketing/relatórios de perfomance" \
  marketing/conteúdos \
  projects \
  comercial/propostas \
  comercial/_pipelines \
  comercial/demonstrações \
  "comercial/contratos e anexos"

touch brain/structure-1.md brain/design.md brain/services.md

find brain/website brain/builders-app/agents automations clients/template tools \
  marketing/campanhas "marketing/landing pages" "marketing/relatórios de perfomance" \
  marketing/conteúdos projects comercial/propostas comercial/_pipelines \
  comercial/demonstrações "comercial/contratos e anexos" -type d -empty -print0 | \
  xargs -0 -I{} touch "{}/.gitkeep"