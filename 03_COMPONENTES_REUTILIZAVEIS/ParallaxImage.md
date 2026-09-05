# Componente ParallaxImage

## Descricao
Imagem com parallax scroll (data-speed, data-lag).

## Props
- src: string (URL da imagem)
- speed: number (default: 0.5, 0-1)
- lag: number (default: 0)
- alt: string
- className: string

## Uso
import ParallaxImage from '@/components/ParallaxImage'
<ParallaxImage src="/hero.jpg" speed={0.5} lag={0.3} alt="Hero" className="w-full h-[500px]" />

## Stack
GSAP ScrollSmoother effects ou Lenis + ScrollTrigger

## QA
- speed <1 = mais lento que scroll (parallax)
- speed >1 = mais rapido que scroll
- lag = atraso do movimento
- Use em hero, sections, galerias
