# Componente ScrollLottie

## Descricao
Animacao Lottie/dotLottie controlada pelo scroll (scrub).

## Props
- src: string (URL .lottie ou .json)
- sectionRef: React.Ref (secao para ScrollTrigger)
- speed: number (default: 1)

## Uso
import ScrollLottie from '@/components/ScrollLottie'
const sectionRef = useRef(null)
<ScrollLottie src="/anim.lottie" sectionRef={sectionRef} speed={1} />

## Stack
@lottiefiles/dotlottie-react, GSAP ScrollTrigger

## QA
- Use .lottie (50% menor que .json)
- Scrub sync com scroll
- setFrame(progress * totalFrames)
