# Design — Identidade visual da Builders

> Documento de referência para qualquer IA, dev ou designer que trabalhe no repositório.
> Fonte: Figma — https://www.figma.com/design/KWFaI1E10dT6bGptJva1CM/Buildrs
> Última atualização: maio 2026

---

## Conceito da marca

**Builders** — agência digital movida por IA que constrói e gerencia a presença digital de pequenos e médios negócios.

**Personalidade visual:** sofisticada, contemporânea e confiante. Fundo escuro como base, paleta rica com teal como cor principal da marca, acentos quentes (terracota, apricot) para humanizar. Sem excessos decorativos — cada elemento existe por uma razão.

**Referências visuais:** marcas de produto moderno com profundidade visual — não o minimalismo frio de SaaS genérico, mas algo com identidade própria e calor humano.

---

## Logo

### Símbolo
Ícone modular em formato de grid/asterisco com 8 pontos — remete a estrutura, construção, modularidade e conexão. Simples o suficiente para funcionar em qualquer tamanho, distinto o suficiente para ser reconhecível.

### Wordmark
- Texto: **builders** (sempre minúsculo)
- Tipografia: sans-serif leve, peso fino/regular
- Combinação: símbolo à esquerda + wordmark à direita, alinhados verticalmente ao centro

### Variações de aplicação

| Variação | Fundo | Uso |
|---|---|---|
| Principal dark | `#091717` Off Black | Site, apresentações, materiais digitais |
| Sobre foto | Foto com overlay | Hero, banners, social |
| Teal primary | `#20808D` True Turquoise | Destaques, cards, materiais de marca |
| Teal dark | `#133B39` Inky Blue | Variação escura, rodapés |
| Terra Cotta | `#A84B2F` Terra Cotta | Acentos, variações de campanha |
| Dark card | `#1a1a1a` | Cards escuros, UI |

### Regras do logo
- Wordmark sempre em minúsculo — nunca "Builders" ou "BUILDERS"
- Espaço de respiro mínimo ao redor = altura do símbolo
- Não distorcer proporções entre símbolo e wordmark
- Não aplicar sobre fundos coloridos fora da paleta
- Não recolorizar o símbolo — sempre branco sobre fundos escuros/coloridos

---

## Paleta de cores

### Cores principais

```css
/* Escuros */
--color-off-black:        #091717;   /* fundo principal dark */
--color-inky-blue:        #133B39;   /* fundo secundário dark, cards escuros */
--color-peacock:          #2E5E5A;   /* superfícies intermediárias */

/* Teal — cor de marca */
--color-true-turquoise:   #20808D;   /* cor principal da marca, CTAs, destaques */
--color-plex-blue:        #2E5E5A;   /* variação teal escura */
--color-sky:              #20808D;   /* teal claro, hover states */

/* Claros / neutros */
--color-paper-white:      #FBFAF4;   /* fundo claro principal */
--color-ecru:             #E4E3D4;   /* fundo secundário claro, bordas */

/* Acentos quentes */
--color-apricot:          #FFD2A6;   /* acento suave, highlights */
--color-terra-cotta:      #A84B2F;   /* acento forte, variações de marca */
--color-boysenberry:      #944454;   /* acento profundo, uso pontual */
```

### Hierarquia de uso

**Fundo dark (modo escuro / hero):**
- Base: `#091717` Off Black
- Superfície: `#133B39` Inky Blue
- Elevado: `#2E5E5A` Peacock

**Fundo light (conteúdo / corpo do site):**
- Base: `#FBFAF4` Paper White
- Superfície: `#E4E3D4` Ecru

**Interativos e destaques:**
- CTA principal: `#20808D` True Turquoise
- Hover: variação mais escura do teal
- Acento quente: `#A84B2F` Terra Cotta (uso pontual)
- Acento suave: `#FFD2A6` Apricot (backgrounds de destaque)

**Texto:**
- Sobre dark: `#FFFFFF`
- Sobre light: `#091717`
- Secundário sobre light: `#2E5E5A` Peacock

### O que nunca fazer com as cores
- Não usar Terra Cotta ou Boysenberry como cor de fundo principal
- Não misturar mais de 2 acentos quentes na mesma composição
- Não usar Apricot como cor de texto
- Não usar True Turquoise como fundo de página inteira

---

## Tipografia

> ⚠️ Confirmar no Figma qual a família tipográfica exata usada no wordmark e no corpo do site.

### Padrão observado no Figma
- Wordmark "builders": sans-serif, peso leve/thin, minúsculo
- Headlines do site: sans-serif, peso regular/medium, tamanho grande
- Corpo de texto: sans-serif, peso regular, tamanho legível

### Escala tipográfica (base — ajustar conforme Figma)

```css
/* Pesos */
font-weight: 300;   /* wordmark, textos light */
font-weight: 400;   /* corpo de texto */
font-weight: 500;   /* subtítulos, labels, botões */
font-weight: 600;   /* headlines principais */

/* Tamanhos */
--text-xs:    11px;   /* labels, tags, captions */
--text-sm:    13px;   /* texto secundário */
--text-base:  15px;   /* corpo principal */
--text-md:    18px;   /* subtítulos */
--text-lg:    24px;   /* títulos de seção */
--text-xl:    32px;   /* títulos de página */
--text-hero:  42px+;  /* hero, display */
```

---

## Navegação e estrutura do site

Baseado no design do Figma:

**Itens do menu:**
- Segmentos ▾ (dropdown)
- Serviços ▾ (dropdown)
- Manifesto
- Cases
- Sobre
- **Entrar** (CTA secundário — botão teal)

**Hero:**
- Headline: "Soluções em IA para consolidar sua presença digital"
- Subheadline: "Sites otimizados, automações inteligentes e um chat de IA sobre o seu negócio, tudo em uma única plataforma."
- CTA principal: "Agendar uma conversa" (botão teal)
- Visual: mockup do Builders App em destaque

**Builders App (mockup no hero):**
- Interface com sidebar esquerda: Artefatos de Antônio · Reuniões · Pagamentos · Configurações
- Área direita: chat com a IA do negócio ("Constructor")
- Fundo do app: Paper White com imagem de paisagem integrada

---

## Componentes base

### Botão primário (CTA)
```css
background: #20808D;
color: #FFFFFF;
border-radius: 6px;
padding: 10px 20px;
font-weight: 500;
border: none;
```

### Botão secundário
```css
background: transparent;
color: #20808D;
border: 1px solid #20808D;
border-radius: 6px;
padding: 8px 18px;
```

### Card dark
```css
background: #133B39;
border-radius: 12px;
color: #FFFFFF;
```

### Card light
```css
background: #FFFFFF;
border: 1px solid #E4E3D4;
border-radius: 12px;
```

---

## Aplicação de imagens e fotografia

Baseado no moodboard do Figma:

- **Tema:** pessoas trabalhando, colaborando, construindo — arquitetura, cafeterias, espaços urbanos
- **Referência geográfica:** Rio de Janeiro como identidade local (Cristo, Sugarloaf, Flamengo)
- **Ficção científica / futurismo:** imagens conceituais de arquitetura e tecnologia do futuro
- **Tratamento:** fotos com overlay escuro para aplicação do logo, contraste alto
- **Tom:** aspiracional mas humano — não stock photo genérico

**Regras:**
- Sempre usar logo branco sobre fotos
- Overlay mínimo de 30% de escurecimento quando necessário para legibilidade
- Preferir fotos com profundidade de campo e composição limpa

---

## Arquivos na pasta /design

| Arquivo | O que é |
|---|---|
| `logo-dark.svg` | Logo completo sobre fundo escuro |
| `logo-light.svg` | Logo completo sobre fundo claro |
| `symbol.svg` | Símbolo isolado sem wordmark |
| `favicon.ico` | Favicon 32x32 para browser |
| `favicon-512.png` | Ícone 512x512 para PWA e mobile |

---

*Fonte: Figma — Buildrs · https://www.figma.com/design/KWFaI1E10dT6bGptJva1CM/Buildrs · Atualizado em maio 2026*