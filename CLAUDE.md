# CLAUDE.md — Guia de comportamento da IA no repositório Builders

> Este arquivo instrui o Claude e qualquer IA integrada ao VS Code sobre como se comportar, escrever e entregar dentro do projeto Builders. Leia este arquivo antes de qualquer ação no repositório.

---

## Contexto do projeto

**Builders** é uma *AI-Powered Services as Software* — uma Builders Intelligence Company: uma empresa de serviços com inteligência artificial, oferecida como software. Construímos e gerenciamos a presença digital de pequenos e médios negócios. A oferta se organiza em **Setup** (projeto único: website, automação com CRM, martech/tracking) e **App Buildrs** (produtos por assinatura). Por trás disso seguem os pilares de entrega: sites profissionais, automações com IA, agentes de IA e o Builders App.

> **Duas marcas.** A Builders tem uma marca-vertente, a **drip** — agência tech voltada exclusivamente a cafeterias independentes ("tech no compasso do seu café"), com voz e produtos próprios (documentada no Linear, team Drip). Quando o trabalho for da drip, usar a voz da drip — o restante deste arquivo descreve a Builders.

**Cliente ideal (ICP):** pequenos e médios negócios no Brasil — foco inicial em escritórios de arquitetura — que querem crescer no digital mas não têm equipe técnica interna. (Cafeterias são atendidas pela marca-vertente drip.)

**Missão:** construir o lado digital de qualquer negócio com IA, para que o empreendedor foque no que faz de melhor enquanto a Builders cuida de todo o crescimento digital.

**Valores que devem estar presentes em tudo que a IA produz:**
- IA nativa — a IA não é enfeite, é o motor
- Clareza antes de tecnologia — linguagem simples, sem jargão desnecessário
- Resultado antes de processo — entregas concretas, não promessas vagas
- O cliente sempre dono — visibilidade e controle para quem contratou
- Velocidade — entrega rápida, iterações curtas

---

## Padrões de escrita

### Tom e voz
- **Tom:** direto, confiante e humano. Nunca corporativo, nunca frio.
- **Pessoa:** segunda pessoa do singular ("você", "seu negócio") para textos ao cliente. Primeira do plural ("a gente", "nós") quando escrevendo como Builders.
- **Frase curta é regra.** Se uma frase tem mais de duas linhas, quebre em duas.
- **Sem jargão técnico** em textos voltados ao cliente (landing page, emails, propostas). Jargão é permitido apenas em código, documentação interna e comentários de dev.
- **Sem clichês de marketing:** "solução completa", "ecossistema", "potencializar", "alavancar", "robusto". Prefira palavras concretas.

### Escrita para o cliente (B2B, PMEs)
- Fale do problema antes da solução
- Mostre o resultado antes do processo
- Use exemplos do dia a dia do nicho (cafeteria, escritório de arquitetura)
- Nunca mencione nomes de ferramentas para o cliente final (n8n, Webflow, API) — ele não precisa saber o que está por baixo

### Escrita técnica e interna
- Comentários de código em **português**
- Nomes de variáveis e funções em **inglês** (padrão do setor)
- Documentação técnica clara o suficiente para um dev júnior entender
- Sempre explique o "por quê" de uma decisão técnica, não só o "como"

### Commits e mensagens de PR
- Arquivos de **código** (.ts, .tsx, .js, .json, configs): commits em **inglês**
  - Formato: `tipo: descrição curta` — ex: `feat: add client dashboard layout`
  - Tipos: `feat` · `fix` · `refactor` · `docs` · `chore` · `style`
- Arquivos de **conteúdo e documentação** (.md, textos, copies): commits em **português**
  - Ex: `docs: atualiza copy da landing page hero`
- Mensagens de PR: seguir o idioma predominante dos arquivos alterados

---

## Instruções do projeto

### O que a IA deve sempre fazer
- Ler o contexto do arquivo atual antes de sugerir qualquer mudança
- Respeitar a estrutura de pastas definida no `README.md`
- Perguntar antes de refatorar algo que não foi solicitado
- Ao criar um componente ou fluxo novo, documentar brevemente o que ele faz no próprio arquivo
- Priorizar soluções simples — o menor código que resolve o problema é o melhor código
- Lembrar que o time é só dois fundadores — sugerir soluções que não dependam de manutenção pesada

### O que a IA nunca deve fazer
- Reescrever arquivos inteiros quando a tarefa é pontual
- Adicionar dependências novas sem avisar e explicar o motivo
- Usar inglês em textos voltados ao cliente final (landing page, emails, WhatsApp)
- Ignorar a identidade visual da marca (ver seção abaixo)
- Criar estruturas de pasta novas sem alinhar com o time
- Tomar decisões de deploy ou publicação de forma autônoma — sempre confirmar com Antonio ou o sócio antes

### Decisões de produto já tomadas
- **Nome da empresa:** Builders
- **Posicionamento:** AI-Powered Services as Software — "uma empresa de serviços com inteligência artificial, oferecida como software"
- **Marca-vertente:** drip — agência tech para cafeterias independentes ("tech no compasso do seu café"); voz e produtos próprios, time Drip no Linear
- **Domínio:** ainda não registrado — não referenciar URL final em código por enquanto
- **Identidade visual:** preto `#0f0f0f` · verde lima `#c8f06e` · off-white `#f5f5f3`
- **Modelo de negócio:** projeto único (setup) + retainer mensal (plataforma Builders App)
- **Stack principal:** Claude API · Make / n8n · Next.js · Z-API ou Evolution API
- **Deploy:** Vercel — fluxo exato ainda a definir; não automatizar push para produção sem confirmação
- **Gestão:** Linear (workspace `antoniomorais`)
- **Acesso ao repositório:** somente uso interno do time (Antonio + Jorge)

---

## Stack técnico detalhado

### Builders App (painel do cliente)
- **Framework:** Next.js (App Router)
- **Linguagem:** TypeScript
- **Estilo:** Tailwind CSS — seguir tokens da identidade visual Builders
- **IA integrada:** Claude API (`claude-sonnet-4-20250514`)
- **Deploy:** Vercel — fluxo a definir entre os fundadores antes de automatizar

### Sites de clientes
- **Opção 1:** Webflow (clientes que precisam de CMS e autonomia)
- **Opção 2:** Next.js + Vercel (clientes que precisam de performance ou customização)
- Decisão feita caso a caso — documentar a escolha no arquivo do cliente em `/clients/`

### Automações
- **Make (Integromat):** fluxos visuais, integrações com WhatsApp, CRM, email
- **n8n:** fluxos mais técnicos ou auto-hospedados
- Documentar cada automação em `/automations/` com: objetivo, gatilho, etapas e ferramentas usadas

### Agentes de IA
- Todos construídos sobre a Claude API
- Prompt base documentado em `/products/agents/`
- Cada agente tem seu próprio arquivo com: objetivo, persona, instruções e exemplos de uso

---

## Regras de entrega

### Antes de entregar qualquer código ou texto
1. Confirmar que o output resolve exatamente o que foi pedido — nem mais, nem menos
2. Checar se o tom está alinhado com a voz da Builders
3. Verificar se alguma dependência nova foi adicionada — se sim, avisar explicitamente
4. Garantir que o código roda sem erro antes de apresentar
5. Se for texto para o cliente: tem frase longa demais? Tem palavra técnica desnecessária?
6. Nunca sugerir deploy ou publicação sem confirmação explícita de Antonio ou do Jorge

### Formato de entrega de código
- Sempre em blocos de código com linguagem especificada
- Comentário resumido no topo do arquivo explicando o que ele faz
- Para automações (Make/n8n): descrever o fluxo em texto antes do JSON ou configuração
- Para agentes de IA: descrever o comportamento esperado do agente antes do prompt
- Componentes Next.js: sempre com tipagem TypeScript explícita

### Formato de entrega de textos
- Títulos em sentence case (só a primeira letra maiúscula)
- Sem negrito excessivo — apenas para o que é realmente essencial
- Sempre entregar variações quando o texto for para teste A/B (CTAs, headlines)
- Textos de landing page: entregar dobra por dobra com headline + corpo + CTA de cada seção

---

## Arquivos prioritários

| Arquivo | O que é | Onde fica |
|---|---|---|
| `README.md` | Visão geral do projeto, stack e como começar | Raiz |
| `CLAUDE.md` | Este arquivo — guia de comportamento da IA | Raiz |
| `docs/structure-1.md` | Documento de visão (objetivo, valores, jornada do cliente) | `/docs` |
| `docs/brand.md` | Identidade visual, paleta, tipografia e tom de voz | `/docs` |
| `docs/services.md` | Detalhamento de cada serviço oferecido | `/docs` |
| `products/builders-app/` | Código do painel do cliente com agente de IA | `/products` |
| `products/agents/` | Prompts e configurações dos agentes de IA | `/products` |
| `automations/` | Templates e fluxos de automação reutilizáveis | `/automations` |
| `clients/_template/` | Template base para onboarding de novo cliente | `/clients` |

### Documentos no Linear (fonte de verdade do negócio)
- **Structure 1** — visão inicial da empresa, valores e jornada do cliente
- **Landing page — Builders** — copy oficial aprovada
- **Projeto Builders** — roadmap, issues e status atual
- Linear workspace: `linear.app/antoniomorais`

---

## Identidade visual (referência rápida)

```css
/* Paleta Builders */
--color-black:       #0f0f0f;   /* cor principal */
--color-black-soft:  #1a1a1a;   /* fundo de cards escuros */
--color-accent:      #c8f06e;   /* verde lima — acento */
--color-offwhite:    #f5f5f3;   /* fundo claro */
--color-gray-text:   #5F5E5A;   /* texto secundário */
--color-gray-light:  #e8e8e6;   /* bordas e divisores */

/* Tipografia */
font-weight: 400;               /* corpo */
font-weight: 500;               /* títulos e labels */
border-radius: 8px;             /* padrão */
border-radius: 12px;            /* cards */
border: 0.5px solid;            /* bordas sempre finas */
```

**Nunca usar:** gradientes decorativos, sombras, cores fora da paleta, tipografia serifada em UI, cantos muito arredondados.

---

## Contexto para agentes de IA (Builders App)

Quando o Claude estiver atuando como agente dentro do Builders App ou em automações voltadas ao cliente final:

- O cliente é dono de um pequeno ou médio negócio, sem equipe técnica
- Linguagem acessível — nunca técnica, nunca condescendente
- O agente representa a Builders, não a si mesmo — falar sempre em nome da empresa
- Prioridade: resolver o problema no menor número de etapas possível
- Se não souber responder, dizer claramente e oferecer próximo passo (falar com o time, agendar conversa)
- Nunca inventar informações sobre o negócio do cliente — apenas usar o que foi configurado

---

## Fluxo de trabalho do time

- **Time:** Antonio Morais (produto e soluções) + Jorge Brandão (marketing e automações)
- **Gestão de tarefas:** Linear — todas as decisões e entregas registradas lá
- **Código:** repositório privado, acesso só do time interno
- **Deploy:** Antonio e Jorge decidem juntos quando subir para produção — a IA não deve sugerir ou executar deploys de forma autônoma
- **Dúvidas sobre decisões de produto:** consultar o Linear antes de assumir qualquer coisa

---

*Builders Digital Solutions · Atualizado em junho de 2026 · Manter este arquivo vivo — atualizar sempre que uma decisão técnica ou de produto for tomada.*