# SKILL 01: GSAP ScrollTrigger Mestre

## O que e
ScrollTrigger = ScrollTrigger do GSAP para animacoes baseadas em scroll (pin, scrub, snap, horizontal).

## Instalacao
npm install gsap
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

## Padroes
- Pin sections: scrollTrigger: { trigger: '.section', pin: true, start: 'top top', end: '+=1000', scrub: 1 }
- Reveal: scrollTrigger: { trigger: '.box', start: 'top 85%', toggleActions: 'play none none reverse' }
- Horizontal scroll: pin + xPercent: -100 * (sections.length - 1)
- Markers: scrollTrigger: { markers: true } (dev apenas)

## QA
- Evite pin em excesso (performance)
- Use scrub: true para animacoes suaves
- Teste em mobile (touch scroll)
