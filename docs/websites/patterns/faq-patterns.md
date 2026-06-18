# FAQ Patterns — Padrões de seção de perguntas frequentes

> Quando e como usar FAQ para eliminar objeções e aumentar conversão.

---

## Quando incluir FAQ

**Incluir quando:**
- O serviço tem objeções previsíveis que impedem a conversão ("quanto custa?", "quanto tempo demora?")
- O processo é complexo ou pouco conhecido pelo público
- O cliente frequentemente faz as mesmas perguntas antes de fechar

**Não incluir quando:**
- O produto é simples e autoexplicativo
- Há menos de 3 perguntas genuínas
- O FAQ seria usado para esconder informação importante (ex: preço) em vez de revelar

---

## Padrão 1 — FAQ em accordion

**Mais comum e mais eficiente.**

```
[Headline: "Perguntas frequentes" ou "Dúvidas comuns"]
[Lista de perguntas — cada uma clicável para expandir a resposta]
```

**Vantagem:** mantém a página compacta, o usuário acha o que procura rapidamente.
**Cuidado:** não usar accordion com só 2 itens — neste caso, exibir tudo diretamente.

---

## Padrão 2 — FAQ em grid aberto

```
[Grid 2 colunas no desktop, 1 no mobile]
[Pergunta em negrito / peso maior]
[Resposta abaixo, peso normal]
```

**Quando usar:** quando há poucas perguntas (3–5) e as respostas são curtas — mostrar tudo de uma vez é mais direto.

---

## Perguntas que funcionam bem por nicho

### Escritório de arquitetura

- "Quanto custa um projeto?" → Resposta honesta sobre variáveis (m², complexidade) sem dar preço fechado sem contexto
- "Quanto tempo demora um projeto?" → Fases com estimativa real
- "Você acompanha a obra?" → Diferenciar projeto de acompanhamento
- "Posso morar em outro estado e contratar?" → Se atende online, dizer claramente
- "Posso pagar parcelado?" → Modelo de pagamento

### Cafeteria

- "Vocês têm estacionamento?" → Sim/Não + alternativas
- "Aceitam reservas?" → Como fazer
- "Tem opções sem lactose / veganas?" → Resposta direta
- "Qual o Wi-Fi da casa?" → Muitos visitantes vão para trabalhar
- "Qual o horário de funcionamento nos feriados?" → Ou link para Instagram

---

## Como escrever respostas de FAQ

- **Direta:** começar com a resposta, não com contexto
- **Curta:** máximo 3–4 linhas por resposta
- **Sem jargão:** se a pergunta é do cliente, a resposta deve usar a linguagem dele
- **Com próximo passo:** quando aplicável, terminar com CTA ou link

**Exemplo (arquitetura):**

Pergunta: "Quanto custa um projeto?"

Ruim: "O custo de um projeto depende de diversas variáveis técnicas que precisam ser avaliadas em conjunto com o cliente, como metragem, localização, complexidade e outros fatores."

Bom: "Depende do tamanho e da complexidade do espaço. Em geral, projetos residenciais começam a partir de [faixa] — mas o melhor caminho é uma conversa rápida para entender o que você precisa."

---

## Schema markup de FAQ (SEO)

Implementar `FAQPage` schema para que as perguntas apareçam nas buscas do Google.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Quanto custa um projeto?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "[resposta completa em texto]"
    }
  }]
}
```

---

*FAQ bem feito é SEO gratuito — as perguntas capturam buscas de cauda longa no Google.*
