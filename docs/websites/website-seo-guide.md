# SEO Guide — Otimização para buscas em sites de clientes

> Foco em PMEs locais (escritórios de arquitetura, cafeterias).
> Aplicar antes do dev e verificar antes do launch.

---

## Prioridade para PMEs locais

O SEO de PME local tem um objetivo claro: **aparecer quando o cliente ideal pesquisar o serviço na cidade**.

Exemplos de busca que devem ser capturadas:
- "escritório de arquitetura [cidade]"
- "café specialty [bairro]"
- "reforma apartamento [cidade]"
- "cafeteria com wi-fi [bairro]"

---

## Fase 1 — Antes do dev (decisões estruturais)

### Definir keyword principal por página

Para cada página do site, definir antes de escrever copy:

| Página | Keyword principal | Keyword secundária |
|---|---|---|
| Home | escritório de arquitetura [cidade] | projetos residenciais [cidade] |
| Serviços | projetos de interiores [cidade] | reforma apartamento |
| Sobre | arquiteto [cidade] | — |

**Regra:** uma keyword principal por página. Não competir consigo mesmo.

### Estrutura de URL

Definir antes de criar as páginas:

```
/ — home
/servicos — página de serviços
/projetos — portfólio (arquitetura) ou cardápio (cafeteria)
/sobre — sobre o negócio
/contato — contato
/blog — blog (se houver)
```

Nunca usar IDs (`/page?id=123`) ou parâmetros desnecessários.

---

## Fase 2 — On-page (por página)

### Title tag

- **Formato:** `[Keyword principal] · [Nome do negócio]` ou `[Nome do negócio] — [Keyword] em [Cidade]`
- **Tamanho:** 50–60 caracteres
- **Exemplo:** `Escritório de Arquitetura em São Paulo · Studio Forma`

### Meta description

- **Objetivo:** convencer o usuário a clicar — não rankear
- **Tamanho:** 140–160 caracteres
- **Incluir:** proposta de valor + keyword + CTA suave
- **Exemplo:** `Projetos residenciais e comerciais em São Paulo. Acompanhamento do conceito à entrega. Agende uma conversa.`

### H1

- Um único H1 por página
- Deve conter a keyword principal
- Deve ser o texto mais importante visualmente na página

### H2 e H3

- H2 para seções principais da página
- H3 para subseções
- Nunca usar headings só para estilo visual — usar para hierarquia semântica real

### Imagens

- Todos os atributos `alt` preenchidos com descrição real
- Nome do arquivo descritivo antes de subir: `fachada-cafe-vila-madalena.webp`, não `IMG_2034.jpg`

---

## Fase 3 — SEO local (para PMEs com localização física)

### Google Business Profile

- [ ] Criar ou reivindicar o perfil do cliente
- [ ] Nome exato do negócio (sem keywords extras no nome)
- [ ] Endereço completo e correto
- [ ] Telefone e WhatsApp
- [ ] Horário de funcionamento
- [ ] Categoria principal e secundárias
- [ ] Fotos (mínimo 10 — fachada, interior, produto/projeto, equipe)
- [ ] Link para o site atualizado

### Schema markup (LocalBusiness)

Implementar no código do site. Exemplo para cafeteria:

```json
{
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  "name": "Nome da Cafeteria",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua das Flores, 123",
    "addressLocality": "São Paulo",
    "addressRegion": "SP",
    "postalCode": "01310-100",
    "addressCountry": "BR"
  },
  "telephone": "+5511999999999",
  "openingHours": ["Mo-Fr 08:00-18:00", "Sa 09:00-17:00"],
  "url": "https://nomedo site.com.br"
}
```

Para escritório de arquitetura: usar `@type: "ProfessionalService"` ou `"ArchitectureService"`.

### NAP consistency

Nome, endereço e telefone devem ser **exatamente iguais** em:
- Site
- Google Business Profile
- Instagram bio
- WhatsApp Business

Qualquer inconsistência prejudica o rankeamento local.

---

## Fase 4 — Técnico

### Sitemap.xml

- Criar com todas as URLs do site
- Submeter no Google Search Console após o launch
- Excluir páginas que não devem ser indexadas (admin, obrigado, etc.)

### Robots.txt

```
User-agent: *
Allow: /
Disallow: /admin/
Sitemap: https://www.seusite.com.br/sitemap.xml
```

### Core Web Vitals — metas mínimas

| Métrica | Meta |
|---|---|
| LCP (Largest Contentful Paint) | < 2,5 segundos |
| FID / INP (interatividade) | < 200ms |
| CLS (estabilidade visual) | < 0,1 |

Testar com: [PageSpeed Insights](https://pagespeed.web.dev/)

### HTTPS

- Todo site deve rodar em HTTPS — sem exceção
- Vercel e Webflow já fornecem certificado SSL automático

---

## Fase 5 — Após o launch

- [ ] Verificar propriedade no Google Search Console
- [ ] Submeter sitemap.xml
- [ ] Pedir indexação manual das páginas principais no Search Console
- [ ] Solicitar ao cliente avaliações no Google Business Profile (5 nos primeiros 30 dias)
- [ ] Verificar Core Web Vitals no Search Console após 28 dias

---

## Erros mais comuns de SEO em PME

1. **Title tags genéricos** — "Bem-vindo ao nosso site" não posiciona nada
2. **Sem Google Business Profile** — para negócio local, é mais importante que o site
3. **Imagens pesadas sem compressão** — destrói performance e prejudica rankeamento
4. **URL com caracteres especiais** — `/serviços` vs `/servicos` (sempre sem acento)
5. **Conteúdo duplicado** — mesmo texto em várias páginas confunde o Google
6. **Sem schema markup local** — oportunidade fácil ignorada

---

*Atualizado em junho 2026*
