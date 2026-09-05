# SKILL 03: Lenis Smooth Scroll Mestre

## O que e
Lenis = smooth scroll leve (5KB), alternativa moderna ao Locomotive Scroll.

## Instalacao
npm install lenis
import Lenis from 'lenis'
const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
function raf(time){ lenis.raf(time); requestAnimationFrame(raf) }
requestAnimationFrame(raf)

## Integracao GSAP
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time)=>{ lenis.raf(time * 1000) })
gsap.ticker.lagSmoothing(0)

## Padroes
- Scroll horizontal: wheel + touch + pointer
- Parallax: lenis.scroll + requestAnimationFrame
- Stop scroll: lenis.stop() / lenis.start()

## QA
- Nao use com ScrollSmoother (escolha um)
- Teste em mobile (touch)
- duration: 1.2 = suave, 0.8 = rapido
