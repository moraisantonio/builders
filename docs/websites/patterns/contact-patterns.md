# Contact Patterns — Padrões de seção e página de contato

> A seção de contato é onde a conversão acontece — não pode gerar fricção.

---

## Princípio central

O visitante que chegou até o contato já decidiu dar o próximo passo. Cada campo a mais, cada instrução confusa, cada formulário quebrado perde a conversão. Menos é mais.

---

## Padrão 1 — Formulário simples (padrão Builders)

**Campos obrigatórios:**
- Nome
- Telefone ou WhatsApp
- Mensagem (textarea — opcional mas recomendado)

**Campos a evitar sem motivo real:**
- CPF, CNPJ
- Endereço completo
- "Como nos encontrou" (em 3 opções — Analytics já faz isso)
- Data de nascimento

**Botão de submit:**
- Não usar "Enviar" — usar "Mandar mensagem", "Pedir orçamento", "Agendar conversa"
- Cor de alto contraste, mesmo padrão do CTA principal

**Após o envio:**
- Mensagem de confirmação: "Recebemos sua mensagem! Respondemos em até 24h."
- Não redirecionar para o Google sem aviso

---

## Padrão 2 — Contato por WhatsApp (para PMEs locais)

Para negócios onde o dono responde pelo WhatsApp, o formulário pode ser secundário.

```
[CTA: "Falar pelo WhatsApp"]
→ Link: wa.me/[número]?text=[mensagem pré-preenchida]
```

**Mensagem pré-preenchida sugerida:**
`"Olá, vim pelo site e quero saber mais sobre [serviço]."`

**Quando usar:** PMEs onde o WhatsApp é o canal principal e o tempo de resposta é curto.
**Quando não usar:** escritórios formais onde formulário com protocolo passa mais profissionalismo.

---

## Padrão 3 — Split (formulário + informações)

**Quando usar:** quando há informações complementares importantes (endereço, mapa, horário).

```
[Metade esquerda: formulário]
[Metade direita: endereço, mapa embed, horário, WhatsApp, Instagram]
```

**Cuidado:** em mobile, formulário vai para cima, informações abaixo — garantir ordem correta.

---

## Padrão 4 — CTA de contato no rodapé

**Sempre presente no rodapé:**
- Telefone / WhatsApp clicável (`tel:` e `wa.me/`)
- E-mail clicável (`mailto:`)
- Endereço com link para Google Maps
- Instagram com link correto

**Não usar:** e-mail como imagem para "evitar spam" — impede que o usuário clique.

---

## Informações que nunca devem faltar (PMEs locais)

- Endereço completo com CEP (ajuda SEO local)
- Link para Google Maps (abre no app no mobile — converte mais)
- Horário de funcionamento (confusão sobre horário é motivo de frustração)
- WhatsApp com link clicável
- Instagram — a maioria verifica o perfil antes de tomar decisão

---

## Erros mais comuns em páginas de contato

1. **Formulário com 8+ campos** — a conversão despenca a cada campo adicionado
2. **Sem confirmação após envio** — o usuário não sabe se funcionou
3. **Formulário que não funciona no mobile** — campos que não abrem teclado correto
4. **Mapa incorporado pesado** — usar link externo em vez de iframe se impactar performance
5. **Nenhuma alternativa ao formulário** — alguns usuários preferem ligar ou WhatsApp
6. **E-mail não clicável** — copiado de imagem ou texto estático

---

*Referência: `checklists/dev-checklist.md` — seção CTAs e formulários*
