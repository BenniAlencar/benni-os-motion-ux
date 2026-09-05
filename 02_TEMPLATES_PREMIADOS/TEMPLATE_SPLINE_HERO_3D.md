# TEMPLATE SPLINE HERO 3D

## Conceito
Hero full-screen com cena 3D interativa criada no Spline (no-code) + overlay de texto.

## Stack
Next.js 14 + @splinetool/react-spline

## Implementacao
import Spline from '@splinetool/react-spline'

export default function Home(){
  return (
    <main className="h-screen w-full">
      <Spline scene="https://prod.spline.design/xxx/scene.splinecode" />
      <div className="absolute top-10 left-10 z-10">
        <h1 className="text-6xl font-black text-white drop-shadow-lg">HERO 3D</h1>
      </div>
    </main>
  )
}

## QA
- Otimize no Spline (low poly, LOD)
- Loading fallback
- Eventos: onMouseEnter, onClick
