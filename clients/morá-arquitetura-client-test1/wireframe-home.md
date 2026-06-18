# Wireframe textual — Home `/`

> Estrutura de seções da página inicial. Sem design, sem cores. Apenas função, conteúdo e hierarquia.
> Aprovação do cliente necessária antes do design.

---

## Visão geral da página

```
┌─────────────────────────────────────────┐
│ NAVBAR                                  │
├─────────────────────────────────────────┤
│ HERO                                    │
├─────────────────────────────────────────┤
│ PORTFÓLIO DESTAQUE                      │
├─────────────────────────────────────────┤
│ DIFERENCIAL                             │
├─────────────────────────────────────────┤
│ PROCESSO RESUMIDO                       │
├─────────────────────────────────────────┤
│ DEPOIMENTOS                             │
├─────────────────────────────────────────┤
│ CTA FINAL                               │
├─────────────────────────────────────────┤
│ FOOTER                                  │
└─────────────────────────────────────────┘
```

---

## Seção 1 — Navbar

**Função:** navegação principal e acesso rápido ao CTA.

**Conteúdo:**
- Esquerda: logotipo Morá (SVG, versão escura)
- Centro: links — Projetos · Sobre · Processo · Contato
- Direita: botão "Falar com a Morá" (abre WhatsApp)

**Comportamento:**
- Sticky ao scrollar — fundo off-white com transparência leve
- Mobile: hamburger — ao abrir, menu ocupa tela inteira com links grandes
- WhatsApp sempre visível no mobile como botão flutuante fixo (canto inferior direito)

---

## Seção 2 — Hero

**Função:** primeira impressão. Definir do que se trata o escritório em 5 segundos. CTA imediato.

**Layout (desktop):** split — texto à esquerda, foto de projeto à direita em full-height.

**Layout (mobile):** foto acima, texto abaixo.

**Conteúdo:**
```
[Foto de projeto — imagem mais impactante do portfólio]

Headline:     Projetos que ficam do jeito que você imaginou.
Subheadline:  A Morá cuida de tudo — do conceito à obra entregue.
              Você foca em viver o espaço.
CTA:          [Falar com a Morá →]   (abre WhatsApp)
Suporte:      "Arquitetura residencial em São Paulo · 7 anos de projetos entregues"
```

**Critérios de aprovação:**
- Visitante entende o que é o escritório em 5 segundos
- CTA está acima da dobra no desktop e no mobile
- Foto é de alta qualidade (profissional, não celular)

---

## Seção 3 — Portfólio destaque

**Função:** mostrar qualidade do trabalho imediatamente. Segundo passo na jornada de credibilidade.

**Layout:** 3 projetos em cards grandes (não miniaturas). Cada card ocupa ~33% da largura no desktop, 100% no mobile (scroll horizontal ou vertical).

**Conteúdo por card:**
```
[Foto do projeto — proporção 3:4 ou 4:5]
Nome do projeto
Tipo · Metragem
```

**Ao clicar:** abre página individual do projeto `/projetos/[nome]`

**Abaixo dos cards:**
```
Link: "Ver todos os projetos →"
```

**Critérios:**
- Usar apenas projetos com fotos profissionais
- Projetos selecionados por Mariana como os mais representativos do estilo
- PENDENTE: definir os 3 projetos de destaque

---

## Seção 4 — Diferencial

**Função:** comunicar o que torna a Morá diferente. Responder à objeção "o arquiteto vai sumir".

**Layout:** texto central + 3 itens com dado concreto abaixo.

**Conteúdo:**
```
Headline:    Você não precisa virar gestor de obra.

Corpo:       A maioria dos escritórios entrega o projeto e some.
             A Morá não. Mariana e Pedro estão no canteiro toda semana —
             coordenando fornecedores, resolvendo imprevistos, garantindo
             que o que foi aprovado seja o que vai ser entregue.

[Item 1]           [Item 2]             [Item 3]
7 anos             Aprovação em 3D      WhatsApp direto
Nenhuma obra       antes de qualquer    com o arquiteto
atrasou mais       execução             responsável do
de 15 dias                              seu projeto
```

**Layout mobile:** itens em coluna (vertical).

---

## Seção 5 — Processo resumido

**Função:** dar clareza sobre o que acontece depois do primeiro contato. Reduzir a sensação de risco.

**Layout:** 4 etapas em linha horizontal (desktop) ou vertical (mobile). Numeradas.

**Conteúdo:**
```
01 Conversa inicial
   Entendemos o espaço, o estilo e o objetivo.
   Sem compromisso.

02 Projeto
   Planta, ambientação 3D e todos os detalhes
   aprovados antes de qualquer execução.

03 Fornecedores
   A Morá seleciona e coordena marceneiros,
   revestimentos e parceiros de confiança.

04 Acompanhamento de obra
   Visitas semanais, relatório e WhatsApp direto
   até a entrega das chaves.
```

**Abaixo:**
```
Link: "Entender como funciona em detalhe →"   (leva para /processo)
```

---

## Seção 6 — Depoimentos

**Função:** prova social. Confirmar o que as seções anteriores prometem.

**Layout:** 2-3 depoimentos em linha (desktop) ou carrossel (mobile).

**Conteúdo por depoimento:**
```
"[Texto do depoimento — resultado concreto + experiência com o processo]"

[Foto do cliente]
Nome Sobrenome
[Tipo de projeto] · [Bairro]
```

**Status:** PENDENTE — os 2 depoimentos existentes precisam ser reescritos com nome completo e foto. Confirmar com Mariana quem seriam os clientes a contatar.

**Se não houver depoimentos prontos no prazo:** seção pode ser substituída temporariamente por números do escritório (7 anos · X projetos entregues · área de atuação).

---

## Seção 7 — CTA final

**Função:** conversão direta. Última chance na página de gerar um contato.

**Layout:** bloco centralizado com fundo levemente diferente do resto (tom de areia, não escuro).

**Conteúdo:**
```
Headline:       Pronto para conversar sobre o seu apartamento?

Subtexto:       Uma conversa de 30 minutos já dá para entender
                se faz sentido trabalharmos juntos.

CTA primário:   [Falar pelo WhatsApp →]
CTA secundário: [Enviar briefing inicial]   (abre formulário ou link /contato)
```

**Nota:** o CTA secundário leva para formulário em `/contato`, não abre modal. Mantém a jornada simples.

---

## Seção 8 — Footer

**Função:** navegação secundária, informação de contato, SEO local, crédito Builders.

**Conteúdo:**
```
[Logo Morá]
Arquitetura residencial e interiores · São Paulo

Links: Projetos · Sobre · Processo · Contato

@mora.arq
Campo Belo, São Paulo — SP
Área de atuação: SP capital e ABCDMRR

© 2026 Morá Arquitetura · Site por Builders
```

---

## Checklist de aprovação do wireframe

- [ ] Mariana revisou a ordem das seções
- [ ] Mariana aprovou o conteúdo de cada bloco
- [ ] Os 3 projetos do destaque foram definidos
- [ ] O depoimento foi ou substituído ou confirmado como pendência tratável
- [ ] A copy final foi aprovada antes de passar para design

---

*Wireframe textual · Home · Morá Arquitetura · Junho 2026 · Aguarda aprovação do cliente*
