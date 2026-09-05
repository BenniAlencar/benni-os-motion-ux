# SKILL 02: GSAP ScrollSmoother + Observer + FLIP

## ScrollSmoother
Smooth scroll oficial do GSAP, integrado com ScrollTrigger.

const smoother = ScrollSmoother.create({ wrapper: '#smooth-wrapper', content: '#smooth-content', smooth: 1.2, effects: true, normalizeScroll: true })

Parallax: data-speed="0.5" (lento), data-speed="1.5" (rapido), data-lag="0.5" (atraso)

## Observer
Detecta wheel, touch, pointer sem bugar scroll.

Observer.create({ target: window, type: 'wheel,touch,pointer', onDown: ()=>{}, onUp: ()=>{}, onChange: self=> console.log(self.deltaY) })

## FLIP
First Last Invert Play - anima layout automaticamente.

const state = Flip.getState('.box')
// muda layout
Flip.from(state, { duration: 0.8, ease: 'power2.inOut', absolute: true })

Card expandindo para modal: padrao Awwwards.
