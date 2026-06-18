# Design Guide — Direção visual para sites de clientes

> Para o sistema visual da própria Builders, ver `brain/design/design.md`.
> Este guia cobre como tomar decisões visuais em sites de clientes.

---

## Princípio central

O design de um site de cliente não é a Builders se expressando. É o negócio do cliente comunicando quem ele é — com o rigor de qualidade da Builders.

A paleta da Builders é referência de qualidade. Não é template a copiar.

---

## Antes de qualquer decisão visual

Responder estas três perguntas:

1. **Qual o modo base?** Escuro, claro ou misto.
2. **Qual o estilo de imagem?** Fotos reais, ilustração, abstrato.
3. **Qual a densidade?** Clean e espaçado vs. rico em informação.

Essas decisões precedem paleta, tipografia e componentes.

---

## Modos de layout

### Modo escuro

**Quando usar:**
- Escritórios de arquitetura, design, interiores
- Negócios com posicionamento premium ou contemporâneo
- Quando o portfólio/produto é o protagonista visual

**Como aplicar:**
- Fundo base: preto ou near-black (`#0a0a0a`, `#111`, `#0f0f0f`)
- Texto principal: branco puro ou off-white (`#f5f5f3`)
- Acento: teal, verde, dourado — dependendo da marca do cliente
- Cuidado com: contraste insuficiente, texto cinza muito escuro em fundo escuro

### Modo claro

**Quando usar:**
- Cafeterias, alimentação, hospitalidade
- Negócios com tom acolhedor e próximo
- Quando a luz e o calor são parte da identidade

**Como aplicar:**
- Fundo base: off-white ou branco quente (`#fbfaf4`, `#f9f9f7`, `#fff`)
- Texto principal: preto suave (`#111`, `#1a1a1a`)
- Acento: cor da marca do cliente (não Builders por padrão)
- Cuidado com: branco puro sem textura pode parecer vazio

### Modo misto

**Quando usar:**
- Hero escuro para impacto + seções claras para leitura
- Quando o negócio precisa de credibilidade e acessibilidade ao mesmo tempo
- Boa opção default quando não há direção visual forte do cliente

**Como aplicar:**
- Hero e CTA final: escuro
- Seções de conteúdo e serviços: claro
- Transição com seção de cor plana entre os modos

---

## Paleta para sites de clientes

A Builders não impõe sua paleta. Mas o rigor de uso de cores sim.

### Definindo a paleta do cliente

1. Partir da identidade existente (logo, cores em uso)
2. Definir: cor principal, cor de fundo, cor de texto, cor de acento (CTA)
3. Testar contraste de todas as combinações texto/fundo antes de usar

### Regras universais de cor

- **Máximo 3 cores de marca** + 2 de suporte (branco/preto e seus derivados)
- **CTA sempre na cor de maior contraste** com o fundo local
- **Nunca usar acento como fundo principal** — fica saturado e cansa o olho
- **Bordas sempre finas** — 0.5px a 1px no máximo
- **Verificar contraste com ferramenta** — não confiar no olho. Mínimo 4,5:1

### Ferramentas de contraste

- [Contrast Checker — WebAIM](https://webaim.org/resources/contrastchecker/)
- Figma plugin: Contrast

---

## Tipografia

### Escolhendo a fonte do cliente

- **Para a maioria dos projetos:** uma fonte sans-serif moderna é suficiente (Inter, Geist, DM Sans, Outfit)
- **Para escritórios de arquitetura:** considerar fonte com personalidade — Neue Haas, Grotesk, Monument
- **Para cafeterias:** considerar fonte levemente humanista — DM Sans, Figtree, Plus Jakarta Sans
- **Evitar:** fontes serifadas em UI e botões, fontes decorativas em corpo de texto

### Escala mínima

```
corpo:        15–16px / weight 400
subtítulo:    18–20px / weight 500
título seção: 24–28px / weight 600
hero:         36–52px / weight 600–700
```

---

## Componentes base — padrões de qualidade

### Botão primário
- Cor sólida com contraste alto (mín. 4,5:1)
- Border-radius: 6px (não muito arredondado)
- Padding: 10–12px vertical, 20–24px horizontal
- Hover: 10–15% mais escuro ou com opacity reduzida
- Sem shadow exagerada

### Card
- Border: 1px solid, cor neutra (não grossa)
- Border-radius: 8–12px
- Sem shadow pesada — no máximo `0 1px 4px rgba(0,0,0,0.08)`
- Padding interno consistente: 24px ou 32px

### Formulário
- Labels explícitas acima do campo — não apenas placeholder
- Campo com borda clara em estado normal, cor de marca em foco
- Área de toque mínima: 44px de altura
- Botão de submit com CTA real, não "Enviar"

---

## Espaçamento

Sempre múltiplos de 8: `8, 16, 24, 32, 48, 64, 96px`

- Espaço entre elementos de um componente: 8–16px
- Espaço entre componentes na mesma seção: 24–32px
- Espaço entre seções da página: 64–96px
- Margem lateral em mobile: 20–24px

---

## Imagens e fotografia

**Prioridade:** fotos reais do negócio do cliente. Sempre.
**Alternativa:** banco de imagens com fotos contextualizadas — pessoas trabalhando, espaços reais, não poses genéricas.
**Nunca:** sorrisos forçados de stock photo, imagens claramente genéricas.

**Formato técnico:**
- Usar WebP ou AVIF para performance
- Definir proporção e recorte antes de receber as fotos do cliente
- Para hero: proporção 16:9 ou full-bleed com overlay quando necessário para legibilidade

---

## O que nunca fazer

- Gradientes decorativos (dois tons que não servem à legibilidade)
- Sombras pesadas em cards
- Mais de dois acentos quentes na mesma composição
- Border-radius > 16px em botões ou cards de UI
- Três colunas genéricas com ícone + título + texto idênticos
- Animações de entrada em todos os elementos — máximo 1–2 no site inteiro
- Carrossel com mais de 3 itens em mobile
- Texto em caixa alta como corpo de texto

---

## Checklist antes de apresentar ao cliente

- [ ] Modo base definido (escuro/claro/misto) e justificado
- [ ] Paleta testada com ferramenta de contraste
- [ ] Tipografia escolhida com escala definida
- [ ] CTA com cor de alto contraste
- [ ] Nenhuma proibição visual foi usada
- [ ] Componentes são consistentes entre si (botão = botão em todo o site)
- [ ] Espaçamento segue múltiplos de 8

---

*Atualizado em junho 2026*
