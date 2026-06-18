# Architecture Office Patterns — Padrões para escritórios de arquitetura

> Referência específica para criação de sites de escritórios de arquitetura.
> Complementa os padrões gerais com decisões específicas para o nicho.

---

## Contexto do nicho

**Decisor:** sócio ou responsável comercial do escritório.
**Dor principal:** dificuldade de mostrar o portfólio de forma convincente e atrair o cliente certo sem depender de indicação.
**O que o cliente do escritório quer:** projeto que saia do papel, processo claro, comunicação direta.
**Tom esperado do site:** sofisticado, visual, técnico o suficiente para inspirar confiança — sem ser hermético.

---

## Estrutura de site mais comum para este nicho

### Site com portfólio central

```
Home
├── Hero: proposta de valor + CTA
├── Portfólio em destaque: 3–4 projetos selecionados com foto de qualidade
├── Sobre o escritório / equipe
├── Serviços
├── Processo (como trabalhamos)
├── Depoimentos ou cases
└── CTA final + contato

Portfólio (/projetos)
├── Grid de projetos filtráveis por categoria
└── Página individual de cada projeto

Sobre (/sobre)
├── Filosofia e diferenciais
├── Equipe com foto e bio curta
└── Prêmios / publicações (se houver)

Contato (/contato)
```

---

## Hero patterns para arquitetura

**Mais eficaz:** foto de projeto entregue (espaço real) em full-bleed com overlay, headline sobre a foto.
**Alternativa:** split com render ou foto e texto à esquerda.
**Evitar:** hero vazio só com texto, sem imagem de projeto.

**Exemplos de headline que funcionam:**
- "Espaços que fazem sentido para quem vive neles."
- "Do conceito à entrega. Projetos que ficam."
- "Arquitetura que resolve. Design que encanta."

**Evitar:**
- "Transformando espaços em experiências" — genérico
- "Sua arquitetura dos sonhos" — condescendente

---

## Portfólio — como apresentar projetos

**Card de projeto:**
- Foto principal: recorte landscape, proporção 16:9 ou 3:2
- Nome do projeto (não do cliente, a menos que autorizado)
- Categoria: residencial / comercial / interiores / reforma
- Localização: cidade (não endereço completo)
- Ano ou período de entrega

**Página de projeto individual:**
- Galeria de fotos com navegação por teclado e swipe
- Área do espaço (m²) — opcional mas bem-recebido
- Briefing resumido: "O desafio era..." (2–3 linhas)
- Solução em linguagem não técnica
- Materiais em destaque (quando relevante)
- CTA ao final: "Quer um projeto assim? Vamos conversar."

**O que nunca fazer no portfólio:**
- Renders de má qualidade como foto principal
- Fotos de obra sem organização visual
- Projetos sem curadoria — menos projetos melhores é mais forte que muitos mediocres

---

## Seção "Processo" — como trabalhar com o escritório

Muitos potenciais clientes têm medo de contratar porque não entendem como funciona.
Explicar o processo elimina essa objeção.

**Estrutura recomendada:**
```
1. [Nome da etapa] — [descrição em 1 linha]
   Ex: "Briefing" — "Entendemos o seu projeto, espaço e orçamento."

2. [Nome da etapa] — [descrição]
   Ex: "Conceito" — "Criamos a proposta visual e funcional do espaço."

3. [Nome da etapa]
4. [Nome da etapa]
5. "Entrega" — "Seu espaço pronto, exatamente como foi concebido."
```

**Número de etapas:** 4–6 é o ideal. Mais que isso parece burocrático.

---

## Serviços típicos para este nicho

| Serviço | Como nomear no site (sem jargão) |
|---|---|
| Projeto residencial | "Projeto para sua casa ou apartamento" |
| Projeto comercial | "Projeto para o seu negócio" |
| Interiores | "Design de interiores" ou "Decoração e interiores" |
| Reforma | "Reforma completa com projeto" |
| Consultoria | "Consultoria de projeto" |

---

## Palavras que funcionam para este nicho

**Usar:** projeto, processo, entrega, espaço, resultado, conceito, execução, detalhe, precisão, escuta.
**Evitar:** "inovador", "disruptivo", "sustentável" (sem evidência), "estado da arte", "experiência única".

---

## Paleta visual típica para escritórios de arquitetura

- **Predominante:** dark ou neutro — preto, cinza chumbo, off-white quente
- **Acento:** teal, verde menta, cobre, dourado ou terracota — pontual
- **Evitar:** paleta colorida e saturada — parece pouco sofisticado para o nicho
- **Tipografia:** sans-serif leve, peso fino/medium. Fontes serifadas em destaques para personalidade.

---

*Referência geral: `website-copy-guide.md`, `website-design-guide.md`*
