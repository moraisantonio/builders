# Decisão de stack — Morá Arquitetura

> Decisão técnica registrada formalmente. Fonte de verdade para o projeto.
> Data: Junho 2026

---

## Decisão

**Stack escolhida: Webflow**

---

## Critérios de decisão

| Pergunta | Resposta | Impacto |
|---|---|---|
| O cliente vai editar conteúdo com frequência? | **Sim** — Mariana quer adicionar projetos ao portfólio sozinha | Favorece Webflow (CMS visual sem código) |
| Precisa de integrações com sistemas externos? | **Não** — formulário, WhatsApp, Analytics e Search Console são suficientes | Neutro — ambas as stacks atendem |
| Tem requisito de performance extrema? | **Não** — site institucional de portfólio, não e-commerce de alto tráfego | Neutro |
| O cliente tem equipe técnica para manter Next.js? | **Não** — dois sócios sem perfil técnico | Favorece Webflow |
| Precisa de customização avançada ou escala futura? | **Não** — 5 páginas + CMS de projetos | Favorece Webflow |

**Resultado: 3 critérios favoráveis ao Webflow · 0 critérios favoráveis ao Next.js**

---

## Justificativa em linguagem simples

*Como seria explicado para Mariana:*

> "Vamos usar uma plataforma que te dá autonomia visual completa. Quando um projeto novo for entregue, você acessa um painel simples, sobe as fotos, escreve o texto e publica — sem precisar chamar a Builders. O site fica no ar, rápido, bonito e você controla quando atualizar."

*O que Webflow entrega que é relevante aqui:*
- **CMS de projetos:** Mariana adiciona projetos novos sem código. Os campos (nome, fotos, metragem, tipo) são configurados uma vez e ela preenche como um formulário.
- **Autonomia editorial:** qualquer texto do site pode ser editado pelo próprio cliente no painel visual do Webflow.
- **Formulário nativo:** coleta os dados do lead e envia por e-mail — sem integração externa necessária.
- **Hospedagem incluída:** sem servidor para gerenciar, sem deploy manual.

---

## Por que Next.js foi descartado

| Razão | Detalhes |
|---|---|
| Edição de conteúdo | Em Next.js, adicionar um projeto ao portfólio exigiria criar um arquivo markdown ou conectar um headless CMS (Sanity, Contentful) — complexidade desnecessária para este caso |
| Manutenção | A Morá não tem equipe técnica. Atualização de dependências, deploy, configuração de CI — tudo ficaria dependente da Builders |
| Custo-benefício | Os benefícios do Next.js (SSR, integração de APIs, performance extrema) não se traduzem em vantagem real para um site de portfólio de 5 páginas |

---

## O que o Webflow entrega neste projeto

| Funcionalidade | Como resolve |
|---|---|
| Portfólio editável | CMS collection "Projetos" — Mariana adiciona e edita sem código |
| Formulário de contato | Webflow Forms nativo — envia para e-mail do escritório |
| WhatsApp | Link `wa.me/55[número]` no botão CTA |
| Analytics | Google Analytics via integração nativa do Webflow |
| SEO básico | Webflow permite editar title, meta description, OG tags e canonical por página |
| Schema LocalBusiness | Inserir via Custom Code (head tag da página inicial) |
| Sitemap.xml | Gerado automaticamente pelo Webflow |
| Robots.txt | Configurável no painel |
| Mobile | O Webflow tem editor responsivo — design ajustado para mobile separadamente |
| Domínio | Conectar domínio externo pelo painel — simples |

---

## Limitações conhecidas e como contornar

| Limitação | Solução |
|---|---|
| Webflow não gera sitemap dinâmico para CMS collections em tempo real | Usar o sitemap padrão do Webflow — suficiente para este caso |
| Performance do Webflow é boa mas não equivale ao Next.js estático | Otimizar imagens (WebP, tamanhos corretos) e usar lazy loading — meta Lighthouse >80 é alcançável |
| Formulário nativo do Webflow envia para e-mail mas não tem CRM integrado | Se no futuro quiser integrar Hubspot ou Pipedrive, pode usar Zapier — fora do escopo atual |

---

## Condição de revisão

Se no futuro a Morá quiser qualquer um destes recursos, revisar a decisão de stack:

- Integração com sistema de agendamento online (Calendly, Google Calendar)
- CRM integrado (Hubspot, RD Station)
- Área logada para clientes acompanharem o projeto
- E-commerce (improvávelmente, mas registrado)

---

## Aprovação

- [ ] Decisão apresentada para Mariana em linguagem simples
- [ ] Mariana aprovou a stack escolhida
- [ ] Conta Webflow criada ou transferida para o workspace da Builders

---

*Stack decision · Morá Arquitetura · Junho 2026*
