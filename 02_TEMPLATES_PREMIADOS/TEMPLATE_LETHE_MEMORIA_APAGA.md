# TEMPLATE LETHE: Memoria Apaga

## Conceito
Elementos se "apagam" (fade out + blur) ao sair do viewport, como memoria esquecendo.

## Stack
GSAP ScrollTrigger + Lenis

## Implementacao
useGSAP(()=>{
  gsap.utils.toArray('.lethe').forEach(el=>{
    gsap.to(el, {
      opacity: 0, filter: 'blur(10px)', y: -50, duration: 0.8, ease: 'power2.in',
      scrollTrigger: { trigger: el, start: 'bottom top', end: 'top bottom', toggleActions: 'play reverse play reverse' }
    })
  })
})

## QA
- Use em galerias, portfolios, listas longas
- Blur 5-10px para efeito suave
- Combine com opacity 0 para fade completo
