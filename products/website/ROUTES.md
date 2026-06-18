# Routes — Mapa de páginas do site Builders

> Referência para desenvolvimento e para a IA do VS Code.
> Baseado na navegação definida no Figma.

---

## Navegação principal

```
/                   → Página inicial (landing page)
/segmentos          → Página de segmentos (dropdown no menu)
  /segmentos/arquitetura
  /segmentos/cafeterias
/servicos           → Página de serviços (dropdown no menu)
  /servicos/sites
  /servicos/automacoes
  /servicos/agentes
  /servicos/builders-app
/manifesto          → Manifesto da empresa
/cases              → Cases e portfólio
  /cases/[slug]     → Case individual
/sobre              → Sobre a empresa e o time
/entrar             → Login no Builders App (CTA do menu)
```

---

## Página inicial `/`

Estrutura por dobras — ordem e conteúdo definidos em `COPY.md`:

| Dobra | Seção | Componente |
|---|---|---|
| 1 | Hero | `HeroSection` |
| 2 | O problema | `ProblemSection` |
| 3 | Como funciona | `HowItWorksSection` |
| 4 | Fechamento / CTA | `CtaSection` |

---

## Status das páginas

| Rota | Status | Prioridade |
|---|---|---|
| `/` | 🔵 Em design no Figma | Alta |
| `/segmentos/arquitetura` | ⚪ Não iniciado | Alta |
| `/segmentos/cafeterias` | ⚪ Não iniciado | Alta |
| `/servicos` | ⚪ Não iniciado | Média |
| `/manifesto` | ⚪ Não iniciado | Média |
| `/cases` | ⚪ Não iniciado | Média |
| `/sobre` | ⚪ Não iniciado | Baixa |
| `/entrar` | ⚪ Não iniciado | Alta |

---

## Legenda de status

- 🔵 Em design no Figma
- 🟡 Em desenvolvimento
- 🟢 No ar
- ⚪ Não iniciado

---

*Atualizar este arquivo sempre que uma nova página for criada ou o status mudar.*
