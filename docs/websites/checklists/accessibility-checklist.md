# Accessibility Checklist — Verificação antes do launch

---

## Contraste

- [ ] Contraste mínimo 4,5:1 entre texto e fundo (corpo de texto)
- [ ] Contraste mínimo 3:1 para textos grandes (> 18px ou > 14px bold)
- [ ] Contraste mínimo 3:1 para componentes de UI (bordas de botão, ícones com função)
- [ ] Verificado com ferramenta: WebAIM Contrast Checker ou Figma plugin

## Estrutura

- [ ] H1 único por página
- [ ] Hierarquia de headings correta: H1 → H2 → H3 (sem pular níveis)
- [ ] Nenhum heading usado apenas para estilo visual
- [ ] Listas marcadas como `<ul>` ou `<ol>` (não parágrafos com "•")

## Imagens

- [ ] Alt text em todas as imagens que carregam informação
- [ ] Imagens decorativas com `alt=""` (vazio)
- [ ] Nenhum texto importante embutido em imagem sem alternativa textual

## Interação

- [ ] Todos os links têm texto descritivo (não "clique aqui" ou "saiba mais" genérico)
- [ ] Todos os botões têm label descritivo
- [ ] Formulários têm labels explícitas acima de cada campo (não só placeholder)
- [ ] Campos obrigatórios indicados de forma clara
- [ ] Site navegável por teclado (Tab/Shift+Tab)
- [ ] Foco visível em elementos interativos (não remover o outline sem alternativa)

## Vídeo e mídia

- [ ] Vídeos com autoplay apenas se sem áudio
- [ ] Animações com opção de pausar (se relevante)

---

*Meta mínima: WCAG 2.1 nível AA nos itens críticos*
