# Sitemap — Morá Arquitetura

> Proposta de estrutura do site. Aguarda aprovação de Mariana antes de avançar para wireframe e copy.

---

## Estrutura proposta

| Página | URL | Objetivo principal |
|---|---|---|
| Home | `/` | Primeira impressão + portfólio destaque + CTA WhatsApp |
| Projetos | `/projetos` | Portfólio completo — editável via CMS Webflow |
| Projeto individual | `/projetos/[nome-do-projeto]` | Apresentação detalhada de cada projeto |
| Sobre | `/sobre` | Mariana, Pedro, história, valores, depoimentos |
| Processo | `/processo` | Como funciona, etapas, o que esperar — elimina objeções |
| Contato | `/contato` | Formulário + WhatsApp + área de atuação |

**Total: 5 páginas principais + páginas individuais de projeto (CMS)**

---

## Justificativas

### Por que Serviços virou seção na home, não página separada

O briefing lista 5 serviços, mas a oferta principal é uma: projeto residencial completo com acompanhamento de obra. Uma página de serviços com 5 itens seria fina e sem poder de conversão.

Decisão: os serviços aparecem como bloco resumido na home e ficam detalhados dentro da página Processo. Isso mantém a estrutura enxuta e direciona o visitante para o que mais converte.

### Por que Processo é uma página própria, não seção do Sobre

O processo da Morá é o principal argumento contra a objeção "o arquiteto vai sumir depois do contrato". É material de conversão — não de apresentação institucional. Página própria garante que ele receba atenção adequada e que seja indexável pelo Google.

### Por que há páginas individuais de projeto (CMS)

Duas razões: SEO e profundidade. Cada projeto individual pode ranquear para termos como "projeto de interiores Campo Belo" ou "reforma apartamento 100m² São Paulo". Além disso, Mariana quer autonomia para adicionar projetos — o CMS do Webflow resolve isso.

---

## Detalhamento por página

### Home `/`

**Objetivo:** primeira impressão, validação de credibilidade, portfólio destaque, CTA.

**Seções (nesta ordem):**
1. Navbar
2. Hero — headline + subheadline + CTA WhatsApp + foto de projeto
3. Portfólio destaque — 3 projetos selecionados + link "Ver todos"
4. Diferencial — "Você não precisa virar gestor de obra" + 3 dados concretos
5. Processo resumido — 4 etapas em linha (visual simples)
6. Depoimentos — 2-3 depoimentos (PENDENTE: obter conteúdo utilizável)
7. CTA final — WhatsApp + formulário secundário
8. Footer

---

### Projetos `/projetos`

**Objetivo:** mostrar o portfólio completo de forma organizada e de fácil navegação.

**Conteúdo:**
- Grid de projetos — cards grandes, não miniaturas
- Filtro opcional por tipo (residencial / interiores / comercial) — a definir conforme volume
- Cada card: foto principal + nome do projeto + tipo + metragem
- Todos os projetos vindos do CMS Webflow (editável por Mariana)

**Pendências:**
- Definir quantos projetos vão ao portfólio (mínimo recomendado: 8)
- Fotógrafo para os 4 projetos que só têm foto de celular

---

### Projeto individual `/projetos/[nome-do-projeto]`

**Objetivo:** apresentação detalhada de cada projeto com galeria, contexto e dados.

**Conteúdo por projeto:**
- Galeria de fotos (mínimo 5 por projeto)
- Nome + localização + metragem + serviços aplicados
- Breve texto descritivo do projeto (2-3 parágrafos)
- CTA: "Gostou? Fale com a Morá"

**Campos do CMS:**
- Título do projeto
- Slug (URL)
- Tipo (residencial / interiores / comercial)
- Localização (bairro, cidade)
- Metragem
- Serviços aplicados (lista)
- Galeria (múltiplas fotos)
- Texto descritivo
- Destaque na home (sim/não)

---

### Sobre `/sobre`

**Objetivo:** humanizar o escritório, apresentar Mariana e Pedro, construir confiança.

**Seções:**
1. Apresentação — quem são, como trabalham, por que fazem o que fazem
2. Foto dos sócios (PENDENTE: confirmar disponibilidade)
3. Números — 7 anos · X projetos entregues · X% recomendaria
4. Depoimentos completos (ou link para seção dedicada)

---

### Processo `/processo`

**Objetivo:** eliminar a objeção "o arquiteto vai sumir" e dar clareza sobre o que acontece após o contrato.

**Seções:**
1. Introdução — "Sabemos que fazer uma reforma pode parecer complicado. Por isso, a Morá acompanha tudo."
2. Etapas detalhadas — 5-6 fases com descrição e o que o cliente recebe em cada uma
3. "O que você recebe" — lista de entregáveis do escritório
4. FAQ — principais dúvidas e objeções respondidas
5. CTA — WhatsApp

**Etapas do processo (rascunho):**
1. Conversa inicial — entendemos o espaço, o estilo e o objetivo
2. Projeto — planta, 3D e todos os detalhes antes de qualquer execução
3. Aprovação — o cliente vê e aprova tudo antes de gastar
4. Fornecedores — a Morá seleciona e coordena marceneiros, revestimentos e parceiros
5. Acompanhamento de obra — visitas semanais, relatório e WhatsApp direto
6. Entrega — a chave na mão com o espaço exatamente como foi aprovado

---

### Contato `/contato`

**Objetivo:** facilitar o primeiro contato e pré-qualificar o lead.

**Conteúdo:**
- Formulário de briefing inicial: nome, e-mail, tipo de imóvel, metragem aproximada, o que está buscando, como conheceu a Morá
- Botão WhatsApp direto
- Endereço (Campo Belo — SP) — para SEO local
- Área de atuação declarada: "Atendemos São Paulo capital e ABCDMRR"
- Instagram: @mora.arq

---

## Navegação

**Navbar:**
```
[Logo Morá]          Projetos · Sobre · Processo · Contato     [Falar com a Morá →]
```

- Logo: à esquerda, links à direita
- CTA "Falar com a Morá" abre WhatsApp (destaque visual, não link de texto)
- Navbar sticky no scroll — fundo off-white com leve opacidade
- Mobile: hamburger com menu full-screen

**Footer:**
```
[Logo Morá]
Arquitetura residencial e interiores em São Paulo.

Projetos · Sobre · Processo · Contato

@mora.arq  ·  Campo Belo, São Paulo — SP
Área de atuação: SP capital e ABCDMRR

© 2026 Morá Arquitetura · Site por Builders
```

---

## Aprovação

- [ ] Mariana aprovou a estrutura de páginas
- [ ] Mariana aprovou a decisão de não ter página de Serviços separada
- [ ] Mariana aprovou a proposta de página individual por projeto (CMS)
- [ ] Listagem dos projetos do portfólio definida

---

*Sitemap proposto · Morá Arquitetura · Junho 2026 · Aguarda aprovação do cliente*
