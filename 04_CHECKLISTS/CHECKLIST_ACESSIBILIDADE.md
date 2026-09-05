# Checklist Acessibilidade

## Visual
- [ ] Contraste WCAG AA (4.5:1 texto, 3:1 grande)
- [ ] Foco visivel (:focus-visible)
- [ ] Skip link no topo
- [ ] Navegacao por teclado (Tab, Enter, Escape)

## Motion
- [ ] prefers-reduced-motion respeitado
- [ ] Fallback estatico para animacoes
- [ ] No auto-play de video/audio

## ARIA
- [ ] Labels em botoes, links, forms
- [ ] Roles semanticos (main, nav, section)
- [ ] aria-live para atualizacoes dinamicas

## Imagens/3D
- [ ] Alt text em imagens
- [ ] Descricao de cenas 3D
- [ ] Fallback para WebGL nao suportado

## QA
- [ ] axe DevTools sem erros
- [ ] WAVE sem erros
- [ ] Teste com leitor de tela (NVDA, VoiceOver)
- [ ] Teste so com teclado
