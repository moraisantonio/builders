# Direção visual — Morá Arquitetura

> Proposta de identidade visual para o site. Baseada nas preferências declaradas no briefing.
> Aprovação do cliente necessária antes do layout.
> Regra: copy aprovado antes deste documento avançar para execução.

---

## Modo base

**Claro — fundo off-white amanteigado.**

Solicitação explícita de Mariana: "não quero site preto." A paleta do Instagram da Morá já é clara (fundo branco + tons quentes das fotos). O site segue e eleva essa identidade.

---

## Paleta de cores

| Papel | Cor | Hex | Uso |
|---|---|---|---|
| Fundo principal | Off-white amanteigado | `#F7F4EF` | Fundo de todas as páginas |
| Texto principal | Preto quente | `#1A1815` | Headlines e corpo |
| Texto secundário | Cinza quente | `#6B6460` | Labels, captions, metadados |
| Acento | Bronze/pedra | `#8B7355` | Links hover, ícones, detalhes |
| Fundo alternativo | Areia clara | `#EDE9E2` | Seção CTA final, blocos de destaque |
| Borda | Cinza bege | `#D4CFC8` | Separadores, bordas de card, inputs |

**Paleta derivada dos próprios projetos:** as fotos da Morá têm madeira, off-white, pedra natural, luz quente. A paleta do site é uma extensão direta desse universo — não uma escolha arbitrária de marca.

**Sem:** azul, verde, vermelho, roxo, laranja ou qualquer cor de acento que não pertença ao universo de materiais naturais.

---

## Tipografia

### Títulos (headings)

**Família:** Cormorant Garamond
*(alternativa: Playfair Display — se Cormorant não estiver disponível no Webflow)*

- H1: 56–72px desktop / 36–44px mobile · weight 400 · letter-spacing: -0.01em
- H2: 40–48px desktop / 28–34px mobile · weight 400
- H3: 28–32px desktop / 22–26px mobile · weight 500

**Por que serifada:** o briefing pede "tipografia com caráter". Uma serifada editorial distingue imediatamente de escritórios genéricos que usam Montserrat ou Poppins. Também dialoga com o estilo visual de revistas de arquitetura.

### Corpo (body)

**Família:** DM Sans
*(alternativa: Inter — se DM Sans não estiver disponível)*

- Corpo: 16–18px · weight 400 · line-height: 1.6
- Labels/caps: 12px · weight 500 · letter-spacing: 0.08em · uppercase

**Por que DM Sans:** limpa, legível no mobile, sem personalidade excessiva que competiria com as fotos dos projetos.

---

## Estilo de imagem

**Regra absoluta:** apenas fotos profissionais. Nenhuma foto de celular no site.

**Composição:**
- Espaço respirable — não encher o frame
- Luz natural sempre que possível
- Pontos de foco claros — uma parede, um detalhe de material, um ambiente completo mas ordenado

**Tons:**
- Quentes dominantes — madeira, linho, off-white, pedra
- Sem filtros pesados — fiel à realidade do projeto
- Sem efeitos de "preset de Instagram"

**Tamanhos:**
- Hero: mínimo 2400×1600px
- Cards de portfólio: mínimo 1200×1600px (proporção vertical 3:4)
- Galeria de projeto: mínimo 1600×1200px para horizontais, 1200×1600px para verticais

---

## Componentes

### Botões

- **CTA principal:** fundo `#1A1815` · texto `#F7F4EF` · sem arredondamento (radius 0px ou 2px máximo) · padding: 14px 28px
- **CTA secundário:** fundo transparente · borda `0.5px solid #1A1815` · texto `#1A1815` · mesmo padding
- **Hover:** inversão suave — 200ms ease

### Cards de projeto

- Fundo: nenhum — apenas a imagem
- Borda: nenhuma
- Hover: leve escurecimento da imagem (overlay 15% preto) + nome aparece
- Radius: 0px — sem arredondamento (mais arquitetônico)

### Navbar

- Fundo: `#F7F4EF` com 95% opacidade ao scrollar
- Borda inferior: `0.5px solid #D4CFC8`
- Sticky

### Inputs de formulário

- Borda: `0.5px solid #D4CFC8`
- Fundo: `#FFFFFF` (branco puro dentro do campo para contraste)
- Radius: 4px
- Focus: borda `#8B7355`

### Separadores

- Linha horizontal: `0.5px solid #D4CFC8`
- Sem sombras em lugar nenhum

---

## Espaçamento e respiro

O design da Morá deve ter muito espaço em branco. As fotos precisam respirar.

- Padding entre seções: 80–120px desktop / 48–64px mobile
- Espaçamento interno de cards: 24–32px
- Tamanho de grid: máximo 12 colunas / 1440px max-width / 80px padding lateral desktop

---

## Proibições

O que nunca deve aparecer no site da Morá Arquitetura:

- **Fundo escuro em qualquer seção** — nem no footer, nem em blocos de destaque
- **Gradientes decorativos** — em lugar nenhum
- **Sombras (box-shadow)** — zero sombras no design
- **Ícones de banco de ícones genéricos** — se precisar de ícone, usar símbolo tipográfico ou linha minimalista desenhada
- **Fontes arredondadas** (Nunito, Poppins, Rounded) — nunca para headings
- **Animações de entrada pesadas** — sem fade dramático, parallax excessivo, partículas
- **Grid de miniaturas** — projetos em grid pequeno 3x3 ou 4x4 está proibido
- **Qualquer foto de celular** — sem exceção

---

## Percepção final desejada

> "Esse escritório é sério, tem gosto. Me sinto confortável em entrar em contato."

O site da Morá deve sentir como entrar no site de um hotel boutique bem curado — não como abrir um template de arquitetura do Wix. A diferença está na fotografia, no espaço em branco e na tipografia.

---

## Aprovação

- [ ] Mariana aprovou a direção visual (paleta, tipografia, estilo)
- [ ] Pedro revisou — sem objeções
- [ ] Copy aprovado antes de avançar para layout

---

*Direção visual · Morá Arquitetura · Junho 2026 · Aguarda aprovação do cliente*
