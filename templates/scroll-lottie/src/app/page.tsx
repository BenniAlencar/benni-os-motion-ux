'use client'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Home(){
  const dotRef = useRef<any>(null)

  useEffect(()=>{
    if(dotRef.current){
      ScrollTrigger.create({
        trigger: '.hero-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        onUpdate: self => {
          dotRef.current?.setFrame(self.progress * dotRef.current.totalFrames)
        }
      })
    }
  },[])

  return (
    <main>
      <section className="hero-section h-screen flex items-center justify-center bg-black">
        <div className="w-[400px] h-[400px]">
          <DotLottieReact
            src="https://lottie.host/xxx/anim.lottie"
            dotLottieRefCallback={(d)=> dotRef.current = d}
            className="w-full h-full"
          />
        </div>
      </section>
      <section className="h-screen bg-white flex items-center justify-center">
        <h1 className="text-4xl">Continue scrollando</h1>
      </section>
    </main>
  )
}
