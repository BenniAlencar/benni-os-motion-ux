# Componente SmoothSection

## Descricao
Secao com smooth scroll Lenis + reveal GSAP.

## Props
- children: React.ReactNode
- revealDelay: number (default: 0)
- className: string

## Uso
import SmoothSection from '@/components/SmoothSection'
<SmoothSection revealDelay={0.2} className="h-screen">
  <h1>Conteudo</h1>
</SmoothSection>

## Stack
Lenis, GSAP ScrollTrigger

## QA
- Lenis scroll suave
- Reveal y:100 opacity:0 -> y:0 opacity:1
- Delay para stagger entre secoes
