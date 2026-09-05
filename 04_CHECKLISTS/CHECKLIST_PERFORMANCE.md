# Checklist Performance

## Bundle
- [ ] Bundle total <200KB (gzipped)
- [ ] Code splitting por rota
- [ ] Lazy loading de componentes 3D
- [ ] Imagens WebP/AVIF, lazy loading

## Runtime
- [ ] 60fps em mobile (Chrome DevTools)
- [ ] LCP <2.5s
- [ ] FID <100ms
- [ ] CLS <0.1

## 3D
- [ ] dpr={[1,2]} no Canvas
- [ ] Geometrias low poly
- [ ] ContactShadows ao inves de shadows:true
- [ ] Bloom mipmapBlur

## Scroll
- [ ] Lenis ou ScrollSmoother (nao os dois)
- [ ] will-change: transform em elementos animados
- [ ] contain: layout style paint em componentes

## QA
- [ ] Lighthouse score >90
- [ ] WebPageTest em 3G
- [ ] Mobile real device test
