# TEMPLATE HALO: Respiracao Scroll

## Conceito
Elementos "respiram" (escala + opacity) conforme scroll, criando ritmo visual.

## Stack
GSAP ScrollTrigger + Lenis

## Implementacao
useGSAP(()=>{
  gsap.utils.toArray('.halo').forEach(el=>{
    gsap.to(el, {
      scale: 1.2, opacity: 0.5, duration: 1, ease: 'power2.inOut', repeat: -1, yoyo: true,
      scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 20%', scrub: true }
    })
  })
})

## QA
- Use em hero, sections, cards
- Durecao 1-2s para respiracao suave
- Nao exagere (max 3-5 elementos)
