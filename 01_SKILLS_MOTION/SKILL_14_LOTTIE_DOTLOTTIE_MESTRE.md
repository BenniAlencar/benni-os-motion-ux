# SKILL 14: Lottie / dotLottie Mestre

## O que e
Lottie = animacoes vetoriais JSON do After Effects. dotLottie = formato .lottie (zip otimizado, 50% menor).

## Instalacao
npm install @lottiefiles/dotlottie-react
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

## Padrao Scroll
function ScrollLottie(){
  const dotRef = useRef<any>(null)
  useEffect(()=>{
    ScrollTrigger.create({ trigger: '.section', scrub: true, onUpdate: self => dotRef.current?.setFrame(self.progress * dotRef.current.totalFrames) })
  },[])
  return <DotLottieReact src="/anim.lottie" dotLottieRefCallback={d=> dotRef.current=d} />
}

## QA
- Use .lottie ao inves de .json (50% menor)
- DotLottieReact = player oficial 2026
- Loading, success, empty state, onboarding
