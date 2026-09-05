# TEMPLATE LUMEN: Luz + Pointer + Focus

## Conceito
Elementos iluminam (brightness + scale) quando mouse passa, com foco visual no pointer.

## Stack
GSAP + CSS custom

## Implementacao
const els = document.querySelectorAll('.lumen')
els.forEach(el=>{
  el.addEventListener('mouseenter', ()=> gsap.to(el, { scale: 1.1, filter: 'brightness(1.2)', duration: 0.3, ease: 'power2.out' }))
  el.addEventListener('mouseleave', ()=> gsap.to(el, { scale: 1, filter: 'brightness(1)', duration: 0.3, ease: 'power2.out' }))
})

## QA
- Use em cards, botoes, links
- Durecao 0.2-0.4s para feedback rapido
- Combine com cursor custom para efeito premium
