export default function Overlay(){
  return (
    <div className="relative z-10 pointer-events-none">
      <section className="h-screen flex items-center justify-center">
        <h1 className="text-8xl font-black text-white reveal">HELLO</h1>
      </section>
      <section className="h-screen flex items-center justify-center">
        <h1 className="text-6xl font-bold text-white reveal">SCROLL 3D + GSAP</h1>
      </section>
      <section className="pin-section h-screen flex flex-col items-center justify-center bg-black/50 backdrop-blur">
        <h2 className="pin-title text-8xl text-white">PIN</h2>
        <p className="pin-text text-white mt-10 max-w-md text-center">Essa secao e pinnada com GSAP ScrollTrigger enquanto o modelo 3D rotaciona com R3F ScrollControls.</p>
      </section>
      <section className="h-[200vh]"></section>
      <section className="h-screen flex items-center justify-center bg-white text-black">
        <h2 className="text-6xl reveal">FIM</h2>
      </section>
    </div>
  )
}
