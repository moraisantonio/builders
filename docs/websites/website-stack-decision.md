# Stack Decision — Webflow vs Next.js

> Guia para escolher a stack certa por projeto. Preencha o template ao final com cada cliente.

---

## Regra geral

**Webflow** quando o cliente precisa de autonomia e o site não tem lógica customizada.
**Next.js** quando o cliente precisa de performance máxima, integrações ou vai crescer tecnicamente.

Em caso de dúvida, Webflow. A complexidade que não existe não precisa ser mantida.

---

## Perguntas de qualificação

Responda as cinco perguntas abaixo. O resultado determina a recomendação.

### 1. O cliente vai editar conteúdo sozinho após a entrega?

- **Sim, frequentemente** → ponto para Webflow
- **Sim, raramente ou nunca** → neutro
- **Não, a Builders gerencia** → neutro

### 2. O site vai ter blog ou conteúdo publicado regularmente?

- **Sim** → ponto para Webflow (CMS nativo)
- **Não** → neutro

### 3. O site precisa de integração com sistemas externos (ERP, CRM, API proprietária)?

- **Sim, integração complexa** → ponto para Next.js
- **Sim, integração simples (formulário → planilha)** → Webflow resolve
- **Não** → neutro

### 4. O cliente vai crescer o site com funcionalidades ao longo do tempo?

- **Sim, funcionalidades customizadas** → ponto para Next.js
- **Sim, mais conteúdo e páginas** → Webflow resolve
- **Não, site estável** → Webflow preferível

### 5. O projeto tem orçamento e prazo para manutenção técnica contínua?

- **Sim, retainer ativo** → neutro
- **Não, entrega única** → ponto para Webflow

---

## Tabela de decisão

| Resultado | Recomendação |
|---|---|
| 2+ pontos para Webflow, 0 para Next.js | Webflow sem dúvida |
| 0 pontos para Webflow, 2+ para Next.js | Next.js |
| Empate ou incerto | Webflow por padrão — adicionar nota justificando |

---

## Como comunicar ao cliente

**Nunca usar os nomes das ferramentas diretamente.** Traduzir sempre.

**Quando for Webflow:**
> "Vou usar uma plataforma onde você consegue editar textos e imagens sozinho, sem precisar de programador. É a escolha certa para o que você descreveu."

**Quando for Next.js:**
> "Para o que você precisa, vou usar uma tecnologia que dá mais controle técnico e escala conforme o negócio cresce. Você não vai editar diretamente, mas o resultado é mais rápido e flexível."

---

## Limitações conhecidas de cada opção

### Webflow
- Plano mensal repassado ao cliente (~$14–$39/mês dependendo do plano)
- Customizações JavaScript avançadas são difíceis
- Lógica de servidor não existe — tudo é front-end ou terceiro
- SEO técnico avançado tem limitações

### Next.js
- Requer dev para qualquer mudança de código
- Setup inicial é mais longo (deploy, CI, domínio, env vars)
- O cliente não consegue editar sem acesso técnico
- Manutenção contínua requer retainer ou custo adicional

---

## Template de decisão por projeto

```
Projeto: [nome do cliente]
Data: [data]

Perguntas respondidas:
1. Edita conteúdo sozinho? [sim/não] → [Webflow/neutro]
2. Tem blog/conteúdo regular? [sim/não] → [Webflow/neutro]
3. Precisa de integração complexa? [sim/não] → [Next.js/Webflow/neutro]
4. Vai crescer com funcionalidades? [sim/não] → [Next.js/Webflow/neutro]
5. Tem budget para manutenção técnica? [sim/não] → [neutro/Webflow]

Pontos Webflow: [n]
Pontos Next.js: [n]

Decisão: [Webflow / Next.js]
Justificativa: [1–2 frases em linguagem simples]
Como foi comunicado ao cliente: [transcrição ou resumo]
```

---

*Atualizado em junho 2026*
