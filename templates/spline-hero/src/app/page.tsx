'use client'
import Spline from '@splinetool/react-spline'

export default function Home(){
  return (
    <main className="h-screen w-full">
      <Spline scene="https://prod.spline.design/xxx/scene.splinecode" />
      <div className="absolute top-10 left-10 z-10">
        <h1 className="text-6xl font-black text-white drop-shadow-lg">HERO 3D</h1>
        <p className="text-white mt-2 drop-shadow">Spline Runtime + Interatividade</p>
      </div>
    </main>
  )
}
