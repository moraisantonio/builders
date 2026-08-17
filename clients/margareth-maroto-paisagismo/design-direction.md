# Direção visual — Margareth Maroto Paisagismo

> Baseado em `docs/websites/templates/design-direction-template.md`.
> Preencher assim que a logo e as cores oficiais chegarem.

---

## Arquivos-fonte

Logo e cores da marca ficam em [`assets/identidade-visual/`](assets/identidade-visual/) — arraste os arquivos que a Margareth mandar direto pra lá (ver `assets/README.md` sobre por que imagens coladas no chat não salvam sozinhas).

Referências de inspiração (Pinterest, prints) ficam em [`assets/referencias/`](assets/referencias/).

**Board do Pinterest da cliente:** [pin.it/XswFvPA3h](https://pin.it/XswFvPA3h)

---

## O "algo tech" mora aqui, não no texto

Decisão registrada em [brand-voice.md](brand-voice.md): o tom de voz fica técnico + autêntico na voz da Margareth, mas a sensação "tech" que a construtora precisa sentir é trabalho do **design**, não da copy. Isso é o principal direcionador deste documento — a direção visual carrega o peso de comunicar precisão, capacidade técnica e modernidade pro público de construtora/arquiteto.

## Modo base

- [ ] Escuro
- [ ] Claro
- [x] Misto — decidido no primeiro teste: hero e seções de projeto/construtora em verde-floresta, seções de conteúdo em off-white e creme. Alterna escuro/claro pra dar ritmo, padrão que aparece nas referências (Greenhaven, leaflife).

**Justificativa:** a definir — depende da paleta oficial. Como o público prioritário agora é construtora (mais técnico, mais sóbrio) e o "tech" precisa aparecer no visual, vale considerar um modo mais neutro/preciso do que o residencial puro pediria — grid mais estruturado, menos elemento decorativo, tipografia com ar mais técnico.

---

## Navbar

- **Decisão (Antonio):** a navbar da home usa o **logotipo completo, com o nome dela** (`mrm01_logotipo-pb-18.svg`) — não o ícone/marca "MM" sozinho. O ícone "MM" fica reservado pra outros usos (favicon, redes sociais, espaços pequenos).
- `mrm01_logotipo-pb-18.svg` já é branca (`fill:#fff`) — pronta pra fundo escuro, resolve o navbar num fundo verde-floresta `#24382d` sem precisar de nada a mais.
- **Pendente, não bloqueia o teste:** versão escura/colorida do logotipo completo, pra quando existir algum bloco de fundo claro (rodapé, seção off-white). Antonio vai trazer depois.

---

## Paleta

Confirmadas a partir das cores de preenchimento reais da logo (`mrm01_logo-4.svg`), não do arquivo `mrm01_cores.ai` — esse é majoritariamente a biblioteca padrão de swatches do Illustrator, não deu pra separar com confiança o que é cor de marca do que é swatch padrão do programa. Se tiver uma paleta oficial em outro formato (PDF de manual de marca, print), manda que eu confirmo/completo.

| Papel | Cor | Hex |
|---|---|---|
| Fundo principal (verde escuro da logo) | Verde floresta | `#24382d` |
| Acento (verde vivo — Antonio quer usar bastante) | Verde-limão | `#c0cf29` |
| Fundo secundário | | *a definir* |
| Texto principal | | *a definir* |
| CTA / interativo | | *provavelmente o verde-limão `#c0cf29`, a confirmar no teste visual* |

*Nota:* o verde-limão `#c0cf29` da Margareth é bem próximo, em família, do acento lima `#c8f06e` da própria Builders — não é a mesma cor, mas ajuda a saber que combinam bem numa mesma tela se algum material cruzar as duas marcas.

---

## Estilo de imagem

- [x] Fotos reais dos projetos — prioridade confirmada pela equipe (não só render)
- [x] Foto real da Margareth na seção "Sobre" da home — decidido (Antonio, agosto 2026), não usar stock nem ilustração
- [ ] Banco de imagem contextualizado
- [ ] Design sem foto

**Tom das imagens:** a definir com o board do Pinterest como referência. Precisa equilibrar fotos que sirvam de prova técnica (escala, execução) com fotos que sirvam de inspiração (residencial).

---

## Referências visuais aprovadas

| Referência | URL | O que usar dela |
|---|---|---|
| Board Pinterest — Margareth | [pin.it/XswFvPA3h](https://pin.it/XswFvPA3h) | Tentei ler direto e o Pinterest bloqueia sem login — precisa de print manual |
| Greenhaven (print em `assets/referencias/landing-pages-exemplo/`) | — | Serif elegante no hero; faixa de credenciais logo abaixo; seção verde escura pro portfólio; processo em 4 passos |
| leaflife (print) | — | Cards de serviço verticais com número e seta; timeline numerada do processo; card flutuante com nome/local do projeto |
| GardenView (print) | — | Card flutuante sobre a foto do hero |
| Vicescapes (print) | — | Navbar em faixa verde escura contínua com o hero |
| Primland (print) | — | Clima cinematográfico e tipografia espaçada — referência de sofisticação, não de estrutura |

**Aplicado no primeiro teste (`site/index.html`):** faixa de credenciais, cards de serviço verticais numerados, card flutuante no projeto em destaque, timeline de processo, citação em destaque, seção separada pra construtoras.

---

## Status de aprovação

- [x] Logo recebida em `assets/identidade-visual/` (`mrm01_logotipo-pb-18.svg` — logotipo completo; `mrm01_logo-4.svg` e `mrm01_logo-pb-14.svg` — marca/ícone, Antonio prefere essa versão para uso como "MM")
- [x] Paleta parcialmente preenchida nesta tabela (verde escuro + verde-limão, direto da logo) — faltam fundo secundário e texto principal
- [ ] Direção visual apresentada e aprovada pela Margareth

*Próximo: olhar landing pages de referência + board do Pinterest da cliente pra fechar o primeiro teste visual da home.*
