# 200 PADROES ARTE SUPREMA SEM MIC

## Scroll Storytelling (1-20)
1. Pin section com timeline GSAP
2. Horizontal scroll (xPercent -100 * sections)
3. Parallax data-speed (0.5 lento, 1.5 rapido)
4. Parallax data-lag (atraso 0.3-0.5)
5. Reveal y:100 opacity:0 -> y:0 opacity:1
6. Scale reveal (0.8 -> 1, opacity 0 -> 1)
7. Blur reveal (blur(10px) -> blur(0))
8. Stagger texto (splitText + stagger 30ms)
9. Stagger grid (stagger 50ms, from center)
10. Stagger lista (stagger 100ms, from first)
11. Scrub 0.5s (suave)
12. Scrub 1s (muito suave)
13. Markers dev apenas
14. ToggleActions play none none reverse
15. ToggleActions play reverse play reverse
16. ScrollTrigger callbacks onEnter, onLeave, onEnterBack, onLeaveBack
17. Scroll horizontal com wheel + touch
18. Scroll vertical com Lenis
19. Scroll mista (horizontal + vertical)
20. Scroll infinito (loop sections)

## 3D Hero (21-40)
21. ShaderTorus uTime + uScroll
22. ShaderSphere deformacao sin()
23. GlassSphere MeshTransmissionMaterial
24. Bloom intensity 1.2
25. ChromaticAberration offset 0.0005
26. Vignette offset 0.1 darkness 0.4
27. Environment preset city
28. Environment HDR custom
29. ContactShadows opacity 0.5 blur 2
30. Sparkles count 100 scale 10
31. Float speed 2 rotationIntensity 0.5
32. Text 3D fontSize 0.5
33. useGLTF modelo custom
34. useTexture textura custom
35. dpr [1,2] performance
36. shadows false (barato)
37. shadows true ContactShadows (medio)
38. shadows true shadow-mapSize 2048 (caro)
39. Postprocessing EffectComposer
40. WebGPU compute shaders (futuro)

## Micro-interacoes (41-60)
41. RiveButton isHover boolean
42. RiveButton click trigger
43. RiveMascote xAxis yAxis 0-100
44. RiveScroll progress 0-100
45. LottieLoading autoplay loop
46. LottieSuccess play on complete
47. LottieScroll scrub setFrame
48. LottieSegment setSegment 0-50
49. LottieTheme dark/light
50. Anime.js stagger grid 4x4
51. Anime.js stagger from center
52. Anime.js stagger from random
53. Anime.js timeline add -=400
54. Anime.js contador onUpdate
55. Anime.js parallax onScroll sync
56. Anime.js scope React createScope
57. Motion One layout animate
58. Motion One whileHover scale 1.1
59. Motion One whileTap scale 0.95
60. Motion One variants hidden visible

## Shaders (61-80)
61. Vertex uTime animacao
62. Vertex uScroll deformacao
63. Vertex sin(pos.x * 5.0 + uTime)
64. Fragment fresnel pow(1-dot, 3)
65. Fragment mix cores uScroll
66. Fragment noise random
67. Fragment gradient linear
68. Fragment radial gradient
69. Fragment stripe pattern
70. Fragment checker pattern
71. GLSL Three.js
72. WGSL WebGPU
73. Lygia blur
74. Lygia noise
75. Lygia distortion
76. Lygia chromatic
77. Lygia vignette
78. Lygia bloom
79. Lygia DOF
80. Lygia film grain

## Tipografia (81-100)
81. Text reveal y:100 opacity:0
82. Text reveal stagger 30ms
83. Text reveal from center
84. Text scale 0.8 -> 1
85. Text blur 10px -> 0
86. Text gradient animado
87. Text outline stroke
88. Text fill animado
89. Text letter-spacing animado
90. Text line-height animado
91. Text font-weight animado
92. Text color mix
93. Text background clip
94. Text shadow animado
95. Text stroke animado
96. Text 3D transform
97. Text perspective
98. Text rotateX/Y
99. Text skewX/Y
100. Text translateX/Y

## Imagens (101-120)
101. ParallaxImage speed 0.5
102. ParallaxImage lag 0.3
103. Image reveal opacity 0 -> 1
104. Image scale 1.1 -> 1
105. Image blur 10px -> 0
106. Image grayscale 100% -> 0%
107. Image sepia 100% -> 0%
108. Image brightness 50% -> 100%
109. Image contrast 50% -> 100%
110. Image hue-rotate 180deg -> 0deg
111. Image saturate 0% -> 100%
112. Image invert 100% -> 0%
113. Image opacity 0 -> 1
114. Image clip-path reveal
115. Image mask reveal
116. Image object-fit cover
117. Image object-position center
118. Image loading lazy
119. Image sizes responsive
120. Image srcset WebP AVIF

## Botoes (121-140)
121. Button hover scale 1.05
122. Button hover brightness 1.2
123. Button active scale 0.95
124. Button focus ring 2px
125. Button loading spinner
126. Button loading opacity 0.5
127. Button disabled opacity 0.5
128. Button gradient animado
129. Button shadow animado
130. Button border animado
131. Button background animado
132. Button text animado
133. Button icon animado
134. Button ripple effect
135. Button magnetic effect
136. Button tilt effect
137. Button glow effect
138. Button particle effect
139. Button liquid effect
140. Button morph effect

## Cards (141-160)
141. Card hover y -10
142. Card hover scale 1.05
143. Card hover shadow 20px
144. Card flip 180deg
145. Card expand FLIP
146. Card collapse FLIP
147. Card stagger grid
148. Card parallax speed 0.5
149. Card reveal opacity
150. Card reveal scale
151. Card reveal blur
152. Card gradient animado
153. Card border animado
154. Card background animado
155. Card image hover scale
156. Card text hover color
157. Card icon hover rotate
158. Card badge animado
159. Card progress bar
160. Card loading skeleton

## Layout (161-180)
161. Grid 4x4 stagger
162. Grid 3x3 stagger
163. Grid masonry
164. Grid flex wrap
165. Grid CSS grid
166. Flex center
167. Flex between
168. Flex column
169. Flex row
170. Flex gap
171. Container max-width
172. Container padding
173. Section h-screen
174. Section min-h-screen
175. Section padding
176. Section margin
177. Section background
178. Section gradient
179. Section image
180. Section video

## Transicoes (181-200)
181. Page fade in
182. Page fade out
183. Page slide in
184. Page slide out
185. Page scale in
186. Page scale out
187. Page rotate in
188. Page rotate out
189. Page FLIP layout
190. Page Motion One layout
191. Link hover underline
192. Link hover color
193. Link hover scale
194. Link active color
195. Link visited color
196. Form focus ring
197. Form input border
198. Form label float
199. Form error shake
200. Form success fade

Maracana, Para, BR - 2026
