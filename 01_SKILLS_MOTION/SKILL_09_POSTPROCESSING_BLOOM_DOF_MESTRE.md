# SKILL 09: Postprocessing (Bloom, DOF, Vignette) Mestre

## O que e
Postprocessing = efeitos pos-renderizacao (Bloom, Depth of Field, Vignette, ChromaticAberration, Film grain).

## Instalacao
npm install @react-three/postprocessing

## Padroes
- Bloom: brilho em areas claras (efeito cinematico)
- Vignette: escurecer bordas (foco no centro)
- ChromaticAberration: separacao RGB (efeito glitch)
- DOF: desfoque baseado em profundidade
- Noise/Film: granula de filme

Exemplo:
import { EffectComposer, Bloom, Vignette, ChromaticAberration } from '@react-three/postprocessing'
<EffectComposer>
  <Bloom intensity={1.2} luminanceThreshold={0.15} mipmapBlur />
  <Vignette offset={0.1} darkness={0.4} />
  <ChromaticAberration offset={[0.0005,0.0005]} />
</EffectComposer>

## QA
- Bloom: mipmapBlur para performance
- DOF: pesado em mobile, evite ou use baixo resolution
- Combine com Bloom + Vignette para look cinematico
