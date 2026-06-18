# CTA Patterns — Padrões de chamada para ação

> Referência para criar CTAs que convertem — em botões, seções e formulários.

---

## Anatomia de um bom CTA

```
[Verbo de ação] + [Resultado esperado]
```

**Exemplos:**
- "Agendar uma conversa" ✓
- "Ver projetos do escritório" ✓
- "Pedir orçamento sem compromisso" ✓
- "Falar com a equipe agora" ✓

**Proibidos:**
- "Saiba mais" — vago, não diz o que acontece depois
- "Clique aqui" — não tem contexto
- "Enviar" — sem benefício para o usuário
- "Cadastre-se" — nenhum PME quer se "cadastrar"

---

## Padrão 1 — CTA primário (botão sólido)

**Uso:** ação principal da página. Um por seção, no máximo.

```css
background: [cor de maior contraste com o fundo]
color: branco ou preto (contraste mín. 4,5:1)
border-radius: 6px
padding: 10px 20px
font-weight: 500
```

**Texto:** até 4 palavras. Verbo + resultado.

---

## Padrão 2 — CTA secundário (botão fantasma)

**Uso:** opção alternativa quando há dois caminhos disponíveis — ex: "Ver projetos" ao lado de "Agendar conversa".

```css
background: transparent
border: 1px solid [cor principal]
color: [cor principal]
border-radius: 6px
```

**Hierarquia visual:** o primário deve ser visualmente mais forte. Se os dois parecem iguais, um está errado.

---

## Padrão 3 — CTA flutuante (WhatsApp ou chat)

**Uso:** disponível em toda a página, sem interromper o fluxo de leitura.

- Botão fixo no canto inferior direito
- Ícone do WhatsApp + texto "Falar agora" (desktop) / só ícone (mobile)
- Cor: verde WhatsApp `#25D366` ou cor da marca
- Abrir conversa com mensagem pré-preenchida: "Olá, vim pelo site e quero saber mais sobre [serviço]"

---

## Padrão 4 — CTA em seção de destaque (banner)

**Uso:** CTA final da página, fundo de cor diferente para marcar o encerramento do conteúdo.

```
[Fundo: cor de destaque ou escuro]
[Headline curta: reforça o benefício ou cria urgência real]
[Subheadline: remove última objeção]
[Botão: CTA principal]
[Linha opcional: "Sem compromisso. Resposta em 24h."]
```

---

## Padrão 5 — CTA inline (dentro do texto)

**Uso:** dentro de um parágrafo ou lista, para dar um caminho sem interromper a leitura.

- Link sublinhado ou em cor de destaque
- Texto descritivo: "ver todos os projetos", "agendar uma visita"
- Não usar em headlines — reservar para corpo de texto

---

## Textos de CTA por objetivo

| Objetivo | Texto do CTA |
|---|---|
| Agendar conversa | "Agendar uma conversa", "Marcar uma call" |
| Pedir orçamento | "Pedir orçamento", "Receber proposta" |
| Ver portfólio | "Ver projetos", "Explorar o portfólio" |
| Ir ao local | "Como chegar", "Ver no mapa" |
| Contato via WhatsApp | "Falar pelo WhatsApp", "Enviar mensagem" |
| Ver cardápio | "Ver o cardápio", "Conferir o menu" |
| Saber mais sobre serviços | "Conhecer os serviços", "Ver o que fazemos" |

---

*Nunca criar urgência falsa: "Últimas vagas!", "Oferta expira hoje!" sem ser verdade*
