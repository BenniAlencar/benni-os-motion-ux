'use client'
import { animate, stagger } from 'animejs'
import { useEffect, useRef } from 'react'

export default function GridStagger(){
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    if(!containerRef.current) return

    animate('.grid-item', {
      scale: [0, 1],
      opacity: [0, 1],
      delay: stagger(50, { grid: [4, 4], from: 'center', axis: 'y' }),
      duration: 600,
      ease: 'outBack'
    })
  },[])

  return (
    <div ref={containerRef} className="grid grid-cols-4 gap-4 p-8">
      {Array.from({ length: 16 }).map((_, i) => (
        <div key={i} className="grid-item w-20 h-20 bg-pink-500 rounded-lg shadow-lg" />
      ))}
    </div>
  )
}
