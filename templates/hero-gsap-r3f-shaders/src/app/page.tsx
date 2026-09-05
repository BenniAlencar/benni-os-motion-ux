'use client'
import { Canvas } from '@react-three/fiber'
import { ScrollControls } from '@react-three/drei'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Scene from '../components/Scene'
import Overlay from '../components/Overlay'

gsap.registerPlugin(ScrollTrigger)

export default function Home(){
  useGSAP(()=>{
    gsap.utils.toArray('.reveal').forEach((el:any)=>{
      gsap.from(el, {
        y: 100, opacity: 0, duration: 1, ease: 'power4.out',
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' }
      })
    })

    let tl = gsap.timeline({
      scrollTrigger: { trigger: '.pin-section', pin: true, start: 'top top', end: '+=2000', scrub: 1 }
    })
    tl.to('.pin-title', { scale: 1.5, opacity: 0 }).from('.pin-text', { y: 100, opacity: 0 }, '<')
  })

  return (
    <main className="relative">
      <nav className="fixed top-0 w-full z-50 p-6 flex justify-between text-white mix-blend-difference">LOGO MENU</nav>
      <div className="fixed inset-0">
        <Canvas camera={{ position: [0,0,5], fov: 45 }} dpr={[1,2]} shadows gl={{ antialias: true }}>
          <ScrollControls pages={5} damping={0.2}>
            <Scene />
          </ScrollControls>
        </Canvas>
      </div>
      <Overlay />
    </main>
  )
}
