# Common Mistakes — Erros mais comuns em sites de PME

> Lista de erros recorrentes. Verificar antes de cada entrega.

---

## Erros de estratégia

**1. Site sem objetivo definido**
O site não sabe o que quer — tem muita informação, muitos CTAs, muitas mensagens. Resultado: o visitante não sabe o que fazer e vai embora.
*Fix: definir o objetivo principal antes de qualquer outra coisa.*

**2. Copiar a estrutura do concorrente**
O concorrente também não sabe o que está fazendo. Copiar o layout dele não ajuda.
*Fix: partir do objetivo do negócio, não do site concorrente.*

**3. Site feito para o cliente (dono), não para o visitante**
O dono quer mostrar a história da empresa, as conquistas, os prêmios. O visitante quer saber se aquilo resolve o problema dele.
*Fix: sempre perguntar "isso é útil para o visitante ou para o ego do negócio?"*

**4. Não ter um CTA acima da dobra**
O visitante precisa rolar para encontrar como entrar em contato. Muitos não rolam.
*Fix: CTA no hero, sempre.*

---

## Erros de copy

**5. Headline genérica**
"Bem-vindo ao nosso site." / "Soluções para o seu negócio." — zero diferenciação.
*Fix: headline que diz o que o negócio faz e para quem, em até 8 palavras.*

**6. Benefício escondido atrás do processo**
"Utilizamos tecnologia avançada de última geração para otimizar sua presença online."
O que isso quer dizer para o dono de cafeteria? Nada.
*Fix: resultado primeiro. "Seu café aparece no Google quando alguém busca na vizinhança."*

**7. CTA genérico**
"Saiba mais", "Clique aqui", "Enviar" — sem contexto, sem benefício.
*Fix: verbo + resultado. "Pedir orçamento", "Ver nossos projetos".*

**8. Placeholders não substituídos**
"Lorem ipsum" ou "[Inserir texto aqui]" em produção. Já aconteceu com todos — acontece quando não tem checklist.
*Fix: `qa-final-checklist.md` verifica isso antes de qualquer entrega.*

---

## Erros de design

**9. Três colunas genéricas com ícone + título + texto**
O layout mais usado no mundo — e o menos diferenciado. Passa credibilidade zero.
*Fix: variar estrutura, usar dados reais, foto real, ou não ter a seção se não tiver o que colocar.*

**10. Contraste insuficiente**
Texto cinza claro sobre fundo branco, texto branco sobre foto sem overlay. O visitante não lê o que não consegue enxergar.
*Fix: testar contraste com ferramenta. Nunca confiar no olho.*

**11. Muitas animações**
Cada elemento da página entra com animação. Fica lento, distrai, e em mobile drena bateria.
*Fix: máximo 1–2 animações de entrada em todo o site, escolhidas com propósito.*

**12. Foto de stock foto genérica**
Pessoas de terno sorrindo em frente a computador, prédios de vidro, mãos apertando. O visitante reconhece e desconfia.
*Fix: foto real do negócio quando possível. Banco de imagem com foto contextual e humanizada.*

---

## Erros técnicos

**13. Imagens pesadas**
Foto de 5MB no hero. Site demora 8 segundos para abrir no 4G. Visitante vai embora.
*Fix: todas as imagens comprimidas antes de subir. WebP. Máximo 500KB para hero.*

**14. Formulário que não funciona**
Formulário que não envia, que envia para o e-mail errado, ou que não dá confirmação.
*Fix: testar formulário completo (incluindo confirmação no e-mail) antes de qualquer entrega.*

**15. Site sem HTTPS**
Browsers avisam "site inseguro". Nenhum cliente confiará.
*Fix: Vercel e Webflow proveem SSL automático. Confirmar que está ativo no domínio final.*

**16. Links quebrados**
Ícone do Instagram que leva para a home do Instagram (sem arroba), link de e-mail que não abre cliente de e-mail.
*Fix: testar todos os links, especialmente redes sociais e `mailto:`.*

---

## Erros de SEO

**17. Title tags padrão da plataforma**
"Untitled" ou "Home - Site" como title de todas as páginas.
*Fix: title tag único e descritivo por página antes do launch.*

**18. Sem Google Business Profile**
Para PME local, é mais importante que o próprio site para aparecer no Google.
*Fix: criar ou atualizar o perfil como parte do escopo de entrega.*

**19. Fotos com nomes de arquivo genéricos**
`IMG_2034.jpg` indexado pelo Google não ajuda em nada.
*Fix: renomear antes de subir: `fachada-cafe-pinheiros.webp`.*

---

*Executar `qa-final-checklist.md` antes de toda entrega para pegar a maioria destes erros.*
