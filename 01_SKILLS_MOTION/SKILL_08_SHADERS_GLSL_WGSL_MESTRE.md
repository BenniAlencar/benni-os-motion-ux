# SKILL 08: Shaders GLSL / WGSL Mestre

## O que e
Shaders = programas que rodam na GPU (vertex + fragment).
GLSL = WebGL (Three.js), WGSL = WebGPU.

## Vertex Shader
- Transforma vertices (posicao, rotacao, escala)
- Uniforms: uTime, uScroll, uResolution
- Varyings: passa dados para fragment

Exemplo:
uniform float uTime, uScroll;
varying vec2 vUv, vNormal;
void main(){
  vUv = uv; vNormal = normal;
  vec3 pos = position + normal * sin(position.x * 5.0 + uTime * 2.0 + uScroll * 10.0) * 0.1;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}

## Fragment Shader
- Calcula cor de cada pixel
- Fresnel, mix de cores, noise

Exemplo:
uniform float uTime, uScroll;
varying vec2 vUv, vNormal;
void main(){
  float fresnel = pow(1.0 - dot(vNormal, vec3(0,0,1)), 3.0);
  vec3 color = mix(vec3(1,0,1), vec3(0,1,1), uScroll + sin(uTime)*0.2);
  gl_FragColor = vec4(color + fresnel * 0.8, 1.0);
}

## QA
- Evite calculos pesados no fragment
- Use uniforms para animacao
- Teste em mobile (potencia limitada)
