# Checklist 3D & Shaders

## Geometrias
- [ ] Low poly (otimizado)
- [ ] LOD (Level of Detail) para distancias
- [ ] Merge geometrias quando possivel

## Materiais
- [ ] MeshStandardMaterial (nao MeshPhong)
- [ ] Texturas comprimidas (KTX2, Basis)
- [ ] Reuse materiais (nao crie por frame)

## Luzes
- [ ] Ambient + Directional (basico)
- [ ] Evite Point lights em massa
- [ ] Shadows so quando necessario

## Shaders
- [ ] Uniforms atualizados no useFrame
- [ ] Evite calculos pesados no fragment
- [ ] Teste em mobile (potencia limitada)

## Postprocessing
- [ ] Bloom mipmapBlur
- [ ] DOF so em desktop (pesado)
- [ ] ChromaticAberration sutil (0.0005)

## QA
- [ ] 60fps em mobile
- [ ] WebGL2 fallback para WebGL1
- [ ] Fallback Canvas2D se necessario
