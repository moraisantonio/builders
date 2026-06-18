# WEBSITE_DISCOVERY_SYSTEM — Sistema de descoberta para o agente

> Como o agente deve conduzir o processo de entendimento antes de propor qualquer coisa.
> Regra central: nunca propor sem entender.

---

## Protocolo de início

Para qualquer pedido novo de criação ou revisão de site:

**1. Identificar o que já se sabe**
- O negócio está descrito em algum arquivo do repositório?
- Há um briefing já preenchido no `clients/[nome]/website-project/`?
- O Linear tem contexto sobre este projeto?

**2. Identificar o que falta**
Antes de propor qualquer coisa, confirmar que estas cinco informações estão disponíveis:
- [ ] O que o negócio faz (descrição simples)
- [ ] Para quem (perfil do público ideal)
- [ ] Qual o objetivo principal do site (ação que o visitante deve tomar)
- [ ] Qual o diferencial do negócio
- [ ] Existe conteúdo (fotos, textos, logo)?

**3. Perguntar antes de propor**
Se qualquer das cinco informações acima estiver faltando, fazer no máximo 3 perguntas por rodada antes de propor qualquer estrutura.

**Nunca:** inventar informações do cliente. Nunca preencher lacunas com suposições.

---

## Perguntas essenciais por categoria

### Sobre o negócio (obrigatórias)
- O que o negócio vende ou oferece?
- Qual o diferencial em relação à concorrência?
- Quem é o cliente ideal?

### Sobre o objetivo (obrigatórias)
- Qual a ação principal que o site deve provocar?
- Como vamos saber se o site está funcionando?

### Sobre o conteúdo (obrigatórias antes do design)
- Tem logo? Em qual formato?
- Tem fotos do espaço/produto?
- Tem textos existentes que podem ser aproveitados?

### Sobre contexto técnico (antes da proposta de stack)
- O cliente vai editar conteúdo sozinho com frequência?
- Tem algum sistema externo que precisa de integração?

---

## Síntese obrigatória antes de propor

Ao final do discovery, escrever esta frase antes de qualquer proposta:

> "[Nome] precisa de um site que [objetivo] para [público], porque hoje [problema]. O diferencial é [diferencial]. O visitante deve [ação] como próximo passo."

Se não conseguir completar a frase, faltam informações. Pedir antes de avançar.

---

## Quando há lacunas e o cliente quer que o agente proponha mesmo assim

**Aceitável:** propor com hipóteses explícitas
- "Como não tenho [informação], vou assumir [hipótese]. Se estiver errado, corrigir."
- Deixar a hipótese clara e destacada para aprovação

**Nunca aceitável:** propor sem declarar a lacuna, como se a informação fosse real

---

## Saída do discovery

Com o contexto em mãos, o agente deve entregar (nesta ordem):

1. **Síntese do discovery** — uma frase de proposta de valor
2. **Sitemap proposto** — páginas, URLs, objetivos
3. **Recomendação de stack** — Webflow ou Next.js com justificativa simples
4. **Lacunas identificadas** — o que ainda precisa ser confirmado
5. **Próximos passos** — o que acontece agora

---

*Referência: `docs/websites/website-briefing-guide.md`, `docs/websites/templates/discovery-template.md`*
