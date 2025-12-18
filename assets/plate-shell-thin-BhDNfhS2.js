import { v as a, g as O, e as P, b as U, d as B } from "./styles-CWPU-Lqy.js";
import { d as N, a as G, __tla as __tla_0 } from "./deformCpp-BprT8Kg9.js";
import { g as q } from "./getParameters-COCExR_5.js";
import { g as X } from "./getDialog-Dp-ldI_q.js";
import { g as V, __tla as __tla_1 } from "./getMesh-DmUdekin.js";
import "./complex-i8qiIvCl.js";
import "./__vite-browser-external-D7Ct-6yo.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })()
]).then(async () => {
  const Y = `
<style>
  .calcpad-report {
    font-family: 'Segoe UI', 'Arial Nova', Helvetica, sans-serif;
    font-size: 11pt;
    max-width: 210mm;
    margin: 0 auto;
    padding: 25px;
    background: white;
    color: #333;
  }
  .calcpad-report h1 {
    color: #1a5276;
    border-bottom: 3px solid #1a5276;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }
  .calcpad-report h2 {
    color: #2874a6;
    border-bottom: 1px solid #aed6f1;
    margin-top: 25px;
    padding-bottom: 5px;
  }
  .calcpad-report h3 {
    color: #5dade2;
    margin-top: 15px;
  }
  .calcpad-report .calc-line {
    font-family: 'Cambria Math', 'Times New Roman', serif;
    font-size: 12pt;
    margin: 8px 0;
    padding: 8px 15px;
    background: #f8f9fa;
    border-left: 3px solid #3498db;
  }
  .calcpad-report .calc-line .result {
    color: #e74c3c;
    font-weight: bold;
  }
  .calcpad-report .calc-section {
    background: #f8f9fa;
    border-left: 4px solid #3498db;
    padding: 15px 20px;
    margin: 15px 0;
  }
  .calcpad-report .result-box {
    background: #e8f6f3;
    border-left: 4px solid #1abc9c;
    padding: 15px 20px;
    margin: 15px 0;
  }
  .calcpad-report .result-box .value {
    font-size: 14pt;
    font-weight: bold;
    color: #16a085;
  }
  .calcpad-report table {
    border-collapse: collapse;
    width: 100%;
    margin: 15px 0;
  }
  .calcpad-report th, .calcpad-report td {
    border: 1px solid #bdc3c7;
    padding: 10px;
    text-align: left;
  }
  .calcpad-report th {
    background: #3498db;
    color: white;
  }
  .calcpad-report tr:nth-child(even) {
    background: #f8f9fa;
  }
  .calcpad-report .check-ok {
    color: #27ae60;
    font-weight: bold;
  }
  .calcpad-report .check-warn {
    color: #f39c12;
    font-weight: bold;
  }
</style>

<div class="calcpad-report">
  <h1>AN\xC1LISIS DE PLACA RECTANGULAR</h1>
  <p><strong>M\xE9todo:</strong> Elementos Finitos - Teor\xEDa de Mindlin-Reissner</p>
  <p><strong>Fecha:</strong> {{date}}</p>

  <h2>1. DATOS DE ENTRADA</h2>

  <table>
    <tr><th>Par\xE1metro</th><th>S\xEDmbolo</th><th>Valor</th><th>Unidad</th></tr>
    <tr><td>Ancho de placa</td><td>B</td><td>{{ancho}}</td><td>-</td></tr>
    <tr><td>Largo de placa</td><td>L</td><td>{{largo}}</td><td>-</td></tr>
    <tr><td>Espesor</td><td>t</td><td>{{espesor}}</td><td>-</td></tr>
    <tr><td>M\xF3dulo de elasticidad</td><td>E</td><td>{{moduloE}}</td><td>-</td></tr>
    <tr><td>Coeficiente de Poisson</td><td>\u03BD</td><td>{{poisson}}</td><td>-</td></tr>
    <tr><td>Carga uniforme</td><td>q</td><td>{{carga}}</td><td>-</td></tr>
    <tr><td>Tama\xF1o de malla</td><td>h</td><td>{{mallado}}</td><td>-</td></tr>
  </table>

  <h2>2. PROPIEDADES DERIVADAS</h2>

  <h3>2.1 M\xF3dulo de Corte</h3>
  <div class="calc-line">
    G = E / [2\xB7(1 + \u03BD)]
  </div>
  <div class="calc-line">
    G = {{moduloE}} / [2\xB7(1 + {{poisson}})] = <span class="result">{{G}}</span>
  </div>

  <h3>2.2 Rigidez a Flexi\xF3n</h3>
  <div class="calc-line">
    D = E\xB7t\xB3 / [12\xB7(1 - \u03BD\xB2)]
  </div>
  <div class="calc-line">
    D = {{moduloE}}\xB7{{espesor}}\xB3 / [12\xB7(1 - {{poisson}}\xB2)] = <span class="result">{{D}}</span>
  </div>

  <h3>2.3 Geometr\xEDa</h3>
  <div class="calc-line">
    A = B\xB7L = {{ancho}}\xB7{{largo}} = <span class="result">{{area}}</span>
  </div>
  <div class="calc-line">
    Relaci\xF3n de aspecto: L/B = {{largo}}/{{ancho}} = <span class="result">{{aspectRatio}}</span>
  </div>

  <h2>3. MALLA DE ELEMENTOS FINITOS</h2>

  <div class="result-box">
    <p>N\xFAmero de nodos: <span class="value">{{numNodes}}</span></p>
    <p>N\xFAmero de elementos: <span class="value">{{numElements}}</span></p>
    <p>Grados de libertad totales: <span class="value">{{totalDOF}}</span></p>
  </div>

  <div class="calc-line">
    Tama\xF1o promedio de elemento \u2248 \u221A(A/n) = \u221A({{area}}/{{numElements}}) = <span class="result">{{avgElemSize}}</span>
  </div>

  <h2>4. RESULTADOS DEL AN\xC1LISIS FEM</h2>

  <h3>4.1 Desplazamientos</h3>
  <div class="result-box">
    <p>Desplazamiento m\xE1ximo (Uz): <span class="value">{{maxDisplacement}}</span></p>
  </div>

  <h3>4.2 Momentos Flectores</h3>
  <div class="result-box">
    <p>Momento m\xE1ximo Mxx: <span class="value">{{maxMomentX}}</span></p>
    <p>Momento m\xE1ximo Myy: <span class="value">{{maxMomentY}}</span></p>
    <p>Momento m\xE1ximo Mxy: <span class="value">{{maxMomentXY}}</span></p>
  </div>

  <h2>5. VERIFICACI\xD3N ANAL\xCDTICA</h2>

  <h3>5.1 Soluci\xF3n de Navier (Placa Simplemente Apoyada)</h3>
  <div class="calc-section">
    <p>Para placa rectangular con carga uniforme:</p>
    <p>w<sub>max</sub> \u2248 \u03B1\xB7q\xB7a\u2074/D</p>
    <p>donde \u03B1 = 0.00406 para a/b = 1 (placa cuadrada)</p>
  </div>

  <div class="calc-line">
    a = min(B, L) = min({{ancho}}, {{largo}}) = <span class="result">{{aMin}}</span>
  </div>
  <div class="calc-line">
    w<sub>anal\xEDtico</sub> = 0.00406\xB7|q|\xB7a\u2074/D
  </div>
  <div class="calc-line">
    w<sub>anal\xEDtico</sub> = 0.00406\xB7|{{carga}}|\xB7{{aMin}}\u2074/{{D}} = <span class="result">{{wAnalytical}}</span>
  </div>

  <h3>5.2 Comparaci\xF3n FEM vs Anal\xEDtico</h3>
  <div class="result-box">
    <p>w<sub>FEM</sub> = {{maxDisplacementAbs}}</p>
    <p>w<sub>anal\xEDtico</sub> = {{wAnalytical}}</p>
    <p>Error relativo = |w<sub>FEM</sub> - w<sub>anal\xEDtico</sub>| / w<sub>anal\xEDtico</sub> \xD7 100 = <span class="value">{{errorPercent}}%</span></p>
    <p class="{{checkClass}}">{{checkMessage}}</p>
  </div>

  <hr>
  <p style="text-align: center; color: #888; font-size: 9pt;">
    Generado con Awatif FEM<br>
    <a href="https://github.com/GiorgioBurbanelli89/awatif-ejemplos">github.com/GiorgioBurbanelli89/awatif-ejemplos</a>
  </p>
</div>
`, _ = `
<style>
  .report-calcpad {
    font-family: 'Segoe UI', 'Arial Nova', Helvetica, sans-serif;
    font-size: 11pt;
    max-width: 210mm;
    margin: 0 auto;
    padding: 20px;
    background: white;
    color: #333;
  }
  .report-calcpad h1 {
    color: #1a5276;
    border-bottom: 3px solid #1a5276;
    padding-bottom: 10px;
  }
  .report-calcpad h2 {
    color: #2874a6;
    border-bottom: 1px solid #aed6f1;
    margin-top: 30px;
  }
  .report-calcpad h3 {
    color: #5dade2;
    margin-top: 20px;
  }
  .report-calcpad .equation {
    background: #f8f9fa;
    border-left: 4px solid #3498db;
    padding: 15px 20px;
    margin: 15px 0;
    font-family: 'Cambria Math', 'Times New Roman', serif;
    font-size: 12pt;
  }
  .report-calcpad .equation-result {
    background: #e8f6f3;
    border-left: 4px solid #1abc9c;
    padding: 15px 20px;
    margin: 15px 0;
  }
  .report-calcpad .code-block {
    background: #2d2d2d;
    color: #f8f8f2;
    padding: 15px;
    border-radius: 5px;
    font-family: 'Consolas', 'Monaco', monospace;
    font-size: 10pt;
    overflow-x: auto;
    margin: 15px 0;
  }
  .report-calcpad .code-inline {
    background: #ecf0f1;
    padding: 2px 6px;
    border-radius: 3px;
    font-family: 'Consolas', monospace;
    font-size: 10pt;
  }
  .report-calcpad .function-box {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 15px 20px;
    border-radius: 8px;
    margin: 15px 0;
  }
  .report-calcpad .function-box h4 {
    margin: 0 0 10px 0;
    font-size: 14pt;
  }
  .report-calcpad .function-box code {
    background: rgba(255,255,255,0.2);
    padding: 2px 6px;
    border-radius: 3px;
  }
  .report-calcpad table {
    border-collapse: collapse;
    width: 100%;
    margin: 15px 0;
  }
  .report-calcpad th, .report-calcpad td {
    border: 1px solid #bdc3c7;
    padding: 10px;
    text-align: left;
  }
  .report-calcpad th {
    background: #3498db;
    color: white;
  }
  .report-calcpad .param-table tr:nth-child(even) {
    background: #f8f9fa;
  }
  .report-calcpad .note {
    background: #fff3cd;
    border-left: 4px solid #ffc107;
    padding: 10px 15px;
    margin: 15px 0;
  }
  .report-calcpad .source-link {
    color: #9b59b6;
    text-decoration: none;
  }
  .report-calcpad .source-link:hover {
    text-decoration: underline;
  }
</style>

<div class="report-calcpad">
  <h1>PLATE SHELL THIN - Reporte de C\xF3digo</h1>
  <p><strong>An\xE1lisis de Placa Rectangular por Elementos Finitos</strong></p>
  <p>Generado: {{date}}</p>

  <h2>1. PAR\xC1METROS DE ENTRADA</h2>

  <table class="param-table">
    <tr><th>Par\xE1metro</th><th>S\xEDmbolo</th><th>Valor</th><th>Descripci\xF3n</th></tr>
    <tr><td>Ancho</td><td>B</td><td>{{ancho}}</td><td>Dimensi\xF3n en direcci\xF3n X</td></tr>
    <tr><td>Largo</td><td>L</td><td>{{largo}}</td><td>Dimensi\xF3n en direcci\xF3n Y</td></tr>
    <tr><td>Espesor</td><td>t</td><td>{{espesor}}</td><td>Espesor de la placa</td></tr>
    <tr><td>M\xF3dulo de Elasticidad</td><td>E</td><td>{{moduloE}}</td><td>M\xF3dulo de Young</td></tr>
    <tr><td>Coeficiente de Poisson</td><td>\u03BD</td><td>{{poisson}}</td><td>Relaci\xF3n de Poisson</td></tr>
    <tr><td>Tama\xF1o de Malla</td><td>h</td><td>{{mallado}}</td><td>Tama\xF1o m\xE1ximo de elemento</td></tr>
    <tr><td>Carga Uniforme</td><td>q</td><td>{{carga}}</td><td>Carga distribuida en Z</td></tr>
  </table>


  <h2>2. FUNCIONES DE AWATIF UTILIZADAS</h2>

  <h3>2.1 getMesh() - Generaci\xF3n de Malla</h3>

  <div class="function-box">
    <h4>\u{1F4E6} awatif-mesh/getMesh</h4>
    <p><strong>Ubicaci\xF3n:</strong> <code>awatif-mesh/src/getMesh.ts</code></p>
    <p><strong>Prop\xF3sito:</strong> Genera una malla triangular 2D usando triangulaci\xF3n de Delaunay</p>
  </div>

  <div class="code-block">
// Uso en plate-shell-thin:
const { nodes, elements, boundaryIndices } = getMesh({
  points: [
    [0, 0, 0],      // Esquina inferior izquierda
    [B, 0, 0],      // Esquina inferior derecha
    [B, L, 0],      // Esquina superior derecha
    [0, L, 0],      // Esquina superior izquierda
  ],
  polygon: [0, 1, 2, 3],  // \xCDndices del pol\xEDgono
  maxMeshSize: meshSize,   // Tama\xF1o m\xE1ximo de elemento
});
  </div>

  <p><strong>Retorna:</strong></p>
  <ul>
    <li><span class="code-inline">nodes</span>: Array de coordenadas [x, y, z] de cada nodo</li>
    <li><span class="code-inline">elements</span>: Array de \xEDndices de nodos para cada tri\xE1ngulo [n1, n2, n3]</li>
    <li><span class="code-inline">boundaryIndices</span>: \xCDndices de nodos en el borde (para condiciones de contorno)</li>
  </ul>

  <div class="note">
    <strong>Algoritmo:</strong> Usa la librer\xEDa <code>triangle-wasm</code> que implementa el algoritmo de
    triangulaci\xF3n de Delaunay con restricciones de Shewchuk.
  </div>

  <h3>2.2 deform() - C\xE1lculo de Deformaciones</h3>

  <div class="function-box">
    <h4>\u{1F4E6} awatif-fem/deform</h4>
    <p><strong>Ubicaci\xF3n:</strong> <code>awatif-fem/src/deform.ts</code></p>
    <p><strong>Prop\xF3sito:</strong> Resuelve el sistema de ecuaciones de elementos finitos para obtener desplazamientos</p>
  </div>

  <div class="code-block">
// Uso en plate-shell-thin:
mesh.deformOutputs.val = deform(
  nodes,           // Coordenadas de nodos
  elements,        // Conectividad de elementos
  mesh.nodeInputs.val,     // Apoyos y cargas
  mesh.elementInputs.val   // Propiedades de material
);
  </div>

  <h4>Ecuaciones de Elemento de Placa (Mindlin-Reissner)</h4>

  <div class="equation">
    <strong>Rigidez a Flexi\xF3n:</strong><br><br>
    D = E\xB7t\xB3 / [12\xB7(1 - \u03BD\xB2)]
  </div>

  <div class="equation">
    <strong>Rigidez a Corte:</strong><br><br>
    \u03BA = 5/6 (factor de correcci\xF3n de corte)<br>
    G = E / [2\xB7(1 + \u03BD)]<br>
    D<sub>s</sub> = \u03BA\xB7G\xB7t
  </div>

  <div class="equation">
    <strong>Matriz de Rigidez del Elemento:</strong><br><br>
    [K<sub>e</sub>] = \u222B\u222B [B<sub>b</sub>]<sup>T</sup>\xB7[D<sub>b</sub>]\xB7[B<sub>b</sub>] dA + \u222B\u222B [B<sub>s</sub>]<sup>T</sup>\xB7[D<sub>s</sub>]\xB7[B<sub>s</sub>] dA
  </div>

  <p>Donde:</p>
  <ul>
    <li>[B<sub>b</sub>] = Matriz de deformaci\xF3n por flexi\xF3n (curvaturas)</li>
    <li>[B<sub>s</sub>] = Matriz de deformaci\xF3n por corte</li>
    <li>[D<sub>b</sub>] = Matriz constitutiva de flexi\xF3n</li>
    <li>[D<sub>s</sub>] = Matriz constitutiva de corte</li>
  </ul>

  <div class="equation">
    <strong>Sistema Global:</strong><br><br>
    [K]\xB7{U} = {F}<br><br>
    Donde:<br>
    [K] = Matriz de rigidez global ensamblada<br>
    {U} = Vector de desplazamientos nodales (w, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>)<br>
    {F} = Vector de fuerzas nodales
  </div>

  <div class="equation-result">
    <strong>Grados de Libertad por Nodo:</strong> 6 (u<sub>x</sub>, u<sub>y</sub>, u<sub>z</sub>, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>, \u03B8<sub>z</sub>)<br>
    <strong>Para placa delgada se usa:</strong> u<sub>z</sub> (desplazamiento vertical), \u03B8<sub>x</sub>, \u03B8<sub>y</sub> (rotaciones)
  </div>

  <h3>2.3 analyze() - C\xE1lculo de Esfuerzos y Momentos</h3>

  <div class="function-box">
    <h4>\u{1F4E6} awatif-fem/analyze</h4>
    <p><strong>Ubicaci\xF3n:</strong> <code>awatif-fem/src/analyze.ts</code></p>
    <p><strong>Prop\xF3sito:</strong> Calcula momentos flectores, cortantes y esfuerzos a partir de las deformaciones</p>
  </div>

  <div class="code-block">
// Uso en plate-shell-thin:
mesh.analyzeOutputs.val = analyze(
  nodes,
  elements,
  mesh.elementInputs.val,   // Propiedades (E, t, \u03BD)
  mesh.deformOutputs.val    // Desplazamientos calculados
);
  </div>

  <h4>Ecuaciones de Momentos Flectores</h4>

  <div class="equation">
    <strong>Curvaturas:</strong><br><br>
    \u03BA<sub>xx</sub> = -\u2202\xB2w/\u2202x\xB2<br>
    \u03BA<sub>yy</sub> = -\u2202\xB2w/\u2202y\xB2<br>
    \u03BA<sub>xy</sub> = -2\xB7\u2202\xB2w/\u2202x\u2202y
  </div>

  <div class="equation">
    <strong>Momentos Flectores (por unidad de longitud):</strong><br><br>
    M<sub>xx</sub> = D\xB7(\u03BA<sub>xx</sub> + \u03BD\xB7\u03BA<sub>yy</sub>)<br>
    M<sub>yy</sub> = D\xB7(\u03BA<sub>yy</sub> + \u03BD\xB7\u03BA<sub>xx</sub>)<br>
    M<sub>xy</sub> = D\xB7(1-\u03BD)\xB7\u03BA<sub>xy</sub>/2
  </div>

  <div class="equation">
    <strong>Implementaci\xF3n en awatif-fem (analyze.ts l\xEDnea ~99):</strong><br><br>
    const Mxy = fGlobal[2][1] * (thickness\xB3 / 12)
  </div>

  <h2>3. ESTRUCTURA DEL C\xD3DIGO</h2>

  <h3>3.1 Flujo de Datos</h3>

  <div class="code-block">
// 1. PAR\xC1METROS \u2192 Estado reactivo (VanJS)
const parameters: Parameters = {
  ancho: { value: van.state(10), ... },
  largo: { value: van.state(15), ... },
  ...
};

// 2. MESH \u2192 Estructura de datos compartida
const mesh: Mesh = {
  nodes: van.state([]),
  elements: van.state([]),
  nodeInputs: van.state({}),    // Apoyos y cargas
  elementInputs: van.state({}), // Propiedades de material
  deformOutputs: van.state({}), // Resultados de deformaci\xF3n
  analyzeOutputs: van.state({}),// Resultados de an\xE1lisis
};

// 3. DERIVACI\xD3N REACTIVA \u2192 Recalcula cuando cambian par\xE1metros
van.derive(() => {
  // Regenerar malla
  const { nodes, elements } = getMesh({...});

  // Calcular deformaciones
  mesh.deformOutputs.val = deform(...);

  // Calcular esfuerzos
  mesh.analyzeOutputs.val = analyze(...);
});
  </div>

  <h3>3.2 Condiciones de Contorno</h3>

  <div class="code-block">
// Apoyos simples en todos los bordes:
mesh.nodeInputs.val = {
  supports: new Map(
    boundaryIndices.map((i) => [
      i,
      [true, true, true, true, true, true]  // Todos los DOF restringidos
    ])
  ),
  loads: new Map(
    nodes.map((_, i) => [
      i,
      [0, 0, load, 0, 0, 0]  // Carga en direcci\xF3n Z
    ])
  ),
};
  </div>

  <h3>3.3 Propiedades del Material</h3>

  <div class="code-block">
// M\xF3dulo de corte derivado:
const G = E / (2 * (1 + nu));

mesh.elementInputs.val = {
  elasticities: new Map(elements.map((_, i) => [i, E])),
  elasticitiesOrthogonal: new Map(elements.map((_, i) => [i, E])),
  thicknesses: new Map(elements.map((_, i) => [i, t])),
  poissonsRatios: new Map(elements.map((_, i) => [i, nu])),
  shearModuli: new Map(elements.map((_, i) => [i, G])),
};
  </div>

  <h2>4. C\xD3DIGO FUENTE C++ (WebAssembly)</h2>

  <h3>4.1 Solver FEM en C++ (deform.cpp)</h3>

  <div class="function-box">
    <h4>\u{1F527} awatif-fem/src/cpp/deform.cpp</h4>
    <p><strong>Compilado a:</strong> <code>deform.wasm</code> (WebAssembly)</p>
    <p><strong>Compilador:</strong> Emscripten (C++ \u2192 WASM)</p>
  </div>

  <div class="code-block">
// Extracto del c\xF3digo C++ (deform.cpp)
// Ensamblaje de matriz de rigidez para elemento triangular de placa

void assembleStiffnessMatrix(
    const std::vector&lt;std::array&lt;double, 3&gt;&gt;&amp; nodes,
    const std::vector&lt;std::array&lt;int, 3&gt;&gt;&amp; elements,
    double E, double nu, double thickness,
    Eigen::SparseMatrix&lt;double&gt;&amp; K
) {
    // Rigidez a flexi\xF3n
    double D = E * pow(thickness, 3) / (12.0 * (1.0 - nu * nu));

    // Matriz constitutiva de flexi\xF3n [Db]
    Eigen::Matrix3d Db;
    Db &lt;&lt; 1,  nu, 0,
          nu, 1,  0,
          0,  0,  (1-nu)/2;
    Db *= D;

    for (size_t e = 0; e &lt; elements.size(); e++) {
        // Obtener coordenadas del tri\xE1ngulo
        auto [n1, n2, n3] = elements[e];

        // Calcular \xE1rea del tri\xE1ngulo
        double x1 = nodes[n1][0], y1 = nodes[n1][1];
        double x2 = nodes[n2][0], y2 = nodes[n2][1];
        double x3 = nodes[n3][0], y3 = nodes[n3][1];
        double area = 0.5 * abs((x2-x1)*(y3-y1) - (x3-x1)*(y2-y1));

        // Matriz B de deformaci\xF3n (derivadas de funciones de forma)
        Eigen::MatrixXd B = computeBmatrix(x1, y1, x2, y2, x3, y3);

        // Matriz de rigidez del elemento: Ke = B' * Db * B * area * t
        Eigen::MatrixXd Ke = B.transpose() * Db * B * area;

        // Ensamblar en matriz global K
        assembleToGlobal(K, Ke, n1, n2, n3);
    }
}
  </div>

  <h3>4.2 Solver de Sistema Lineal</h3>

  <div class="code-block">
// Resolver [K]{U} = {F} usando Eigen (C++)

void solveSystem(
    Eigen::SparseMatrix&lt;double&gt;&amp; K,
    Eigen::VectorXd&amp; F,
    Eigen::VectorXd&amp; U
) {
    // Aplicar condiciones de contorno (apoyos)
    applyBoundaryConditions(K, F, supports);

    // Solver LU disperso (eficiente para matrices grandes)
    Eigen::SparseLU&lt;Eigen::SparseMatrix&lt;double&gt;&gt; solver;
    solver.compute(K);

    if (solver.info() != Eigen::Success) {
        throw std::runtime_error("Factorizaci\xF3n LU fall\xF3");
    }

    U = solver.solve(F);

    if (solver.info() != Eigen::Success) {
        throw std::runtime_error("Soluci\xF3n del sistema fall\xF3");
    }
}
  </div>

  <div class="note">
    <strong>Rendimiento:</strong> El c\xF3digo C++ compilado a WebAssembly es ~10-20x m\xE1s r\xE1pido
    que JavaScript puro para operaciones matriciales densas.
  </div>

  <h2>5. C\xD3DIGO TYPESCRIPT</h2>

  <h3>5.1 deform.ts - Wrapper TypeScript</h3>

  <div class="code-block">
// awatif-fem/src/deform.ts
import { deformCpp } from "./cpp/built/deform.js";

export function deform(
  nodes: number[][],
  elements: number[][],
  nodeInputs: NodeInputs,
  elementInputs: ElementInputs
): DeformOutputs {

  // Preparar datos para C++
  const nodesFlat = nodes.flat();
  const elementsFlat = elements.flat();

  // Extraer propiedades de material
  const elasticities = Array.from(elementInputs.elasticities.values());
  const thicknesses = Array.from(elementInputs.thicknesses.values());
  const poissonsRatios = Array.from(elementInputs.poissonsRatios.values());

  // Extraer condiciones de contorno
  const supports = serializeSupports(nodeInputs.supports);
  const loads = serializeLoads(nodeInputs.loads);

  // Llamar al solver C++ (WebAssembly)
  const result = deformCpp(
    nodesFlat,
    elementsFlat,
    elasticities,
    thicknesses,
    poissonsRatios,
    supports,
    loads
  );

  // Convertir resultado a formato TypeScript
  return {
    displacements: reshapeDisplacements(result.U, nodes.length),
    reactions: reshapeReactions(result.R, nodes.length),
  };
}
  </div>

  <h3>5.2 analyze.ts - C\xE1lculo de Momentos</h3>

  <div class="code-block">
// awatif-fem/src/analyze.ts (l\xEDneas 80-120)
export function analyze(
  nodes: number[][],
  elements: number[][],
  elementInputs: ElementInputs,
  deformOutputs: DeformOutputs
): AnalyzeOutputs {

  const bendingMomentsX: number[] = [];
  const bendingMomentsY: number[] = [];
  const bendingMomentsXY: number[] = [];

  for (let e = 0; e &lt; elements.length; e++) {
    const [n1, n2, n3] = elements[e];
    const thickness = elementInputs.thicknesses.get(e) || 0.1;
    const E = elementInputs.elasticities.get(e) || 200000;
    const nu = elementInputs.poissonsRatios.get(e) || 0.3;

    // Rigidez a flexi\xF3n
    const D = E * Math.pow(thickness, 3) / (12 * (1 - nu * nu));

    // Obtener desplazamientos nodales del elemento
    const w1 = deformOutputs.displacements[n1][2];  // uz nodo 1
    const w2 = deformOutputs.displacements[n2][2];  // uz nodo 2
    const w3 = deformOutputs.displacements[n3][2];  // uz nodo 3

    // Calcular curvaturas usando derivadas de funciones de forma
    const { kxx, kyy, kxy } = computeCurvatures(
      nodes[n1], nodes[n2], nodes[n3],
      w1, w2, w3
    );

    // Momentos flectores por unidad de longitud
    const Mxx = D * (kxx + nu * kyy);
    const Myy = D * (kyy + nu * kxx);
    const Mxy = D * (1 - nu) * kxy / 2;

    bendingMomentsX.push(Mxx);
    bendingMomentsY.push(Myy);
    bendingMomentsXY.push(Mxy);
  }

  return {
    bendingMomentsX,
    bendingMomentsY,
    bendingMomentsXY,
  };
}
  </div>

  <h3>5.3 getMesh.ts - Triangulaci\xF3n</h3>

  <div class="code-block">
// awatif-mesh/src/getMesh.ts
import Triangle from "triangle-wasm";

export function getMesh(options: MeshOptions): MeshResult {
  const { points, polygon, maxMeshSize } = options;

  // Preparar input para Triangle
  const input = {
    pointList: points.map(p =&gt; [p[0], p[1]]).flat(),
    segmentList: polygon.map((_, i) =&gt; [i, (i + 1) % polygon.length]).flat(),
  };

  // Opciones de triangulaci\xF3n:
  // p = usa pol\xEDgono, q = calidad (\xE1ngulos &gt; 20\xB0), a = \xE1rea m\xE1xima
  const triangleOptions = \`pq20a\${maxMeshSize * maxMeshSize}\`;

  // Ejecutar triangulaci\xF3n (WebAssembly)
  const output = Triangle.triangulate(input, triangleOptions);

  // Extraer nodos (agregar z=0 para 3D)
  const nodes: number[][] = [];
  for (let i = 0; i &lt; output.pointList.length; i += 2) {
    nodes.push([output.pointList[i], output.pointList[i+1], 0]);
  }

  // Extraer elementos (tri\xE1ngulos)
  const elements: number[][] = [];
  for (let i = 0; i &lt; output.triangleList.length; i += 3) {
    elements.push([
      output.triangleList[i],
      output.triangleList[i+1],
      output.triangleList[i+2]
    ]);
  }

  // Identificar nodos en el borde
  const boundaryIndices = findBoundaryNodes(output);

  return { nodes, elements, boundaryIndices };
}
  </div>

  <h2>6. ARCHIVOS FUENTE DE AWATIF</h2>

  <table>
    <tr><th>Funci\xF3n</th><th>Archivo</th><th>Lenguaje</th><th>Descripci\xF3n</th></tr>
    <tr>
      <td><code>getMesh()</code></td>
      <td><a class="source-link" href="https://github.com/madil4/awatif/blob/main/awatif-mesh/src/getMesh.ts">awatif-mesh/src/getMesh.ts</a></td>
      <td>TypeScript</td>
      <td>Wrapper para Triangle WASM</td>
    </tr>
    <tr>
      <td><code>Triangle</code></td>
      <td>triangle-wasm (npm)</td>
      <td>C \u2192 WASM</td>
      <td>Triangulaci\xF3n de Delaunay</td>
    </tr>
    <tr>
      <td><code>deform()</code></td>
      <td><a class="source-link" href="https://github.com/madil4/awatif/blob/main/awatif-fem/src/deform.ts">awatif-fem/src/deform.ts</a></td>
      <td>TypeScript</td>
      <td>Wrapper para solver C++</td>
    </tr>
    <tr>
      <td><code>deformCpp()</code></td>
      <td>awatif-fem/src/cpp/deform.cpp</td>
      <td>C++ \u2192 WASM</td>
      <td>Solver FEM (Eigen)</td>
    </tr>
    <tr>
      <td><code>analyze()</code></td>
      <td><a class="source-link" href="https://github.com/madil4/awatif/blob/main/awatif-fem/src/analyze.ts">awatif-fem/src/analyze.ts</a></td>
      <td>TypeScript</td>
      <td>Post-proceso de momentos</td>
    </tr>
    <tr>
      <td><code>getViewer()</code></td>
      <td><a class="source-link" href="https://github.com/madil4/awatif/blob/main/awatif-ui/src/viewer/getViewer.ts">awatif-ui/src/viewer/getViewer.ts</a></td>
      <td>TypeScript</td>
      <td>Visualizaci\xF3n 3D (Three.js)</td>
    </tr>
    <tr>
      <td><code>getParameters()</code></td>
      <td><a class="source-link" href="https://github.com/madil4/awatif/blob/main/awatif-ui/src/parameters/getParameters.ts">awatif-ui/src/parameters/getParameters.ts</a></td>
      <td>TypeScript</td>
      <td>Panel UI (Tweakpane)</td>
    </tr>
  </table>

  <h2>5. RESULTADOS</h2>

  <div class="equation-result">
    <strong>N\xFAmero de Nodos:</strong> {{numNodes}}<br>
    <strong>N\xFAmero de Elementos:</strong> {{numElements}}<br>
    <strong>Desplazamiento M\xE1ximo (Uz):</strong> {{maxDisplacement}}<br>
    <strong>Momento M\xE1ximo (Mxx):</strong> {{maxMoment}}
  </div>

  <h2>6. REFERENCIAS</h2>
  <ul>
    <li>Awatif Documentation: <a href="https://awatif.co">https://awatif.co</a></li>
    <li>Teor\xEDa de Placas de Mindlin-Reissner</li>
    <li>Zienkiewicz, O.C. - "The Finite Element Method"</li>
    <li>Cook, R.D. - "Concepts and Applications of Finite Element Analysis"</li>
  </ul>

  <hr>
  <p style="text-align: center; color: #888; font-size: 9pt;">
    Generado con Awatif + Sistema de Unidades Personalizado<br>
    Fork: <a href="https://github.com/GiorgioBurbanelli89/awatif-ejemplos">GiorgioBurbanelli89/awatif-ejemplos</a>
  </p>
</div>
`, s = {
    ancho: {
      value: a.state(10),
      min: 1,
      max: 30,
      step: 0.5,
      label: "Ancho (B)",
      unit: "length"
    },
    largo: {
      value: a.state(15),
      min: 1,
      max: 30,
      step: 0.5,
      label: "Largo (L)",
      unit: "length"
    },
    espesor: {
      value: a.state(0.2),
      min: 0.05,
      max: 1,
      step: 0.05,
      label: "Espesor (t)",
      unit: "length"
    },
    moduloE: {
      value: a.state(21e4),
      min: 1e4,
      max: 5e5,
      step: 1e3,
      label: "M\xF3dulo E",
      unit: "stress"
    },
    poisson: {
      value: a.state(0.3),
      min: 0.1,
      max: 0.45,
      step: 0.05,
      label: "Poisson (\u03BD)"
    },
    mallado: {
      value: a.state(1),
      min: 0.3,
      max: 3,
      step: 0.1,
      label: "Tama\xF1o malla",
      unit: "length"
    },
    carga: {
      value: a.state(-10),
      min: -50,
      max: 50,
      step: 1,
      label: "Carga uniforme",
      unit: "force"
    }
  }, o = {
    nodes: a.state([]),
    elements: a.state([]),
    nodeInputs: a.state({}),
    elementInputs: a.state({}),
    deformOutputs: a.state({}),
    analyzeOutputs: a.state({})
  };
  a.derive(() => {
    const e = s.ancho.value.val, t = s.largo.value.val, m = s.espesor.value.val, d = s.moduloE.value.val, c = s.poisson.value.val, x = s.mallado.value.val, g = s.carga.value.val, { nodes: p, elements: r, boundaryIndices: b } = V({
      points: [
        [
          0,
          0,
          0
        ],
        [
          e,
          0,
          0
        ],
        [
          e,
          t,
          0
        ],
        [
          0,
          t,
          0
        ]
      ],
      polygon: [
        0,
        1,
        2,
        3
      ],
      maxMeshSize: x
    });
    o.nodeInputs.val = {
      supports: new Map(b.map((l) => [
        l,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])),
      loads: new Map(p.map((l, n) => [
        n,
        [
          0,
          0,
          g,
          0,
          0,
          0
        ]
      ]))
    }, o.nodes.val = p, o.elements.val = r;
    const M = d / (2 * (1 + c));
    o.elementInputs.val = {
      elasticities: new Map(r.map((l, n) => [
        n,
        d
      ])),
      elasticitiesOrthogonal: new Map(r.map((l, n) => [
        n,
        d
      ])),
      thicknesses: new Map(r.map((l, n) => [
        n,
        m
      ])),
      poissonsRatios: new Map(r.map((l, n) => [
        n,
        c
      ])),
      shearModuli: new Map(r.map((l, n) => [
        n,
        M
      ]))
    }, o.deformOutputs.val = N(p, r, o.nodeInputs.val, o.elementInputs.val), o.analyzeOutputs.val = G(p, r, o.elementInputs.val, o.deformOutputs.val);
  });
  const v = a.state(""), S = a.state(void 0);
  function R() {
    const e = s.ancho.value.val, t = s.largo.value.val, m = s.espesor.value.val, d = s.moduloE.value.val, c = s.poisson.value.val, x = s.mallado.value.val, g = s.carga.value.val, p = d / (2 * (1 + c)), r = d * Math.pow(m, 3) / (12 * (1 - c * c)), b = e * t, M = t / e, l = o.nodes.val, n = o.elements.val, D = o.deformOutputs.val, u = o.analyzeOutputs.val, I = Math.sqrt(b / Math.max(n.length, 1)), T = l.length * 6;
    let h = 0;
    (D == null ? void 0 : D.displacements) && D.displacements.forEach((i) => {
      Math.abs(i[2]) > Math.abs(h) && (h = i[2]);
    });
    let y = 0, E = 0, w = 0;
    (u == null ? void 0 : u.bendingMomentsX) && u.bendingMomentsX.forEach((i) => {
      Math.abs(i) > Math.abs(y) && (y = i);
    }), (u == null ? void 0 : u.bendingMomentsY) && u.bendingMomentsY.forEach((i) => {
      Math.abs(i) > Math.abs(E) && (E = i);
    }), (u == null ? void 0 : u.bendingMomentsXY) && u.bendingMomentsXY.forEach((i) => {
      Math.abs(i) > Math.abs(w) && (w = i);
    });
    const A = Math.min(e, t), f = 406e-5 * Math.abs(g) * Math.pow(A, 4) / r, C = Math.abs(h), z = f > 0 ? Math.abs(C - f) / f * 100 : 0, F = z < 10 ? "check-ok" : "check-warn", L = z < 10 ? "\u2713 Error < 10% - Resultado aceptable" : "\u26A0 Error > 10% - Verificar malla";
    return {
      B: e,
      L: t,
      t: m,
      E: d,
      nu: c,
      meshSize: x,
      load: g,
      G: p,
      D: r,
      area: b,
      aspectRatio: M,
      nodes: l,
      elements: n,
      avgElemSize: I,
      totalDOF: T,
      maxUz: h,
      maxMxx: y,
      maxMyy: E,
      maxMxy: w,
      aMin: A,
      wAnalytical: f,
      maxDisplacementAbs: C,
      errorPercent: z,
      checkClass: F,
      checkMessage: L
    };
  }
  function k() {
    const e = R();
    return Y.replace(/\{\{date\}\}/g, (/* @__PURE__ */ new Date()).toLocaleString()).replace(/\{\{ancho\}\}/g, e.B.toString()).replace(/\{\{largo\}\}/g, e.L.toString()).replace(/\{\{espesor\}\}/g, e.t.toString()).replace(/\{\{moduloE\}\}/g, e.E.toString()).replace(/\{\{poisson\}\}/g, e.nu.toString()).replace(/\{\{mallado\}\}/g, e.meshSize.toString()).replace(/\{\{carga\}\}/g, e.load.toString()).replace(/\{\{G\}\}/g, e.G.toFixed(2)).replace(/\{\{D\}\}/g, e.D.toFixed(4)).replace(/\{\{area\}\}/g, e.area.toString()).replace(/\{\{aspectRatio\}\}/g, e.aspectRatio.toFixed(2)).replace(/\{\{numNodes\}\}/g, e.nodes.length.toString()).replace(/\{\{numElements\}\}/g, e.elements.length.toString()).replace(/\{\{totalDOF\}\}/g, e.totalDOF.toString()).replace(/\{\{avgElemSize\}\}/g, e.avgElemSize.toFixed(3)).replace(/\{\{maxDisplacement\}\}/g, e.maxUz.toFixed(6)).replace(/\{\{maxMomentX\}\}/g, e.maxMxx.toFixed(4)).replace(/\{\{maxMomentY\}\}/g, e.maxMyy.toFixed(4)).replace(/\{\{maxMomentXY\}\}/g, e.maxMxy.toFixed(4)).replace(/\{\{aMin\}\}/g, e.aMin.toString()).replace(/\{\{wAnalytical\}\}/g, e.wAnalytical.toFixed(6)).replace(/\{\{maxDisplacementAbs\}\}/g, e.maxDisplacementAbs.toFixed(6)).replace(/\{\{errorPercent\}\}/g, e.errorPercent.toFixed(2)).replace(/\{\{checkClass\}\}/g, e.checkClass).replace(/\{\{checkMessage\}\}/g, e.checkMessage);
  }
  function W() {
    const e = R();
    return _.replace(/\{\{date\}\}/g, (/* @__PURE__ */ new Date()).toLocaleString()).replace(/\{\{ancho\}\}/g, e.B.toString()).replace(/\{\{largo\}\}/g, e.L.toString()).replace(/\{\{espesor\}\}/g, e.t.toString()).replace(/\{\{moduloE\}\}/g, e.E.toString()).replace(/\{\{poisson\}\}/g, e.nu.toString()).replace(/\{\{mallado\}\}/g, e.meshSize.toString()).replace(/\{\{carga\}\}/g, e.load.toString()).replace(/\{\{numNodes\}\}/g, e.nodes.length.toString()).replace(/\{\{numElements\}\}/g, e.elements.length.toString()).replace(/\{\{maxDisplacement\}\}/g, e.maxUz.toFixed(6)).replace(/\{\{maxMoment\}\}/g, e.maxMxx.toFixed(4));
  }
  a.derive(() => {
    if (v.val === "Report") {
      const e = k(), t = document.createElement("div");
      t.innerHTML = e, S.val = t;
    }
    if (v.val === "Code") {
      const e = W(), t = document.createElement("div");
      t.innerHTML = e, S.val = t;
    }
    if (v.val === "Print") {
      const e = k(), t = window.open("", "_blank");
      t && (t.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Plate Shell Thin - Report</title>
        </head>
        <body>
          ${e}
        </body>
        </html>
      `), t.document.close(), t.focus(), setTimeout(() => t.print(), 500));
    }
  });
  document.body.append(q(s), O({
    mesh: o,
    settingsObj: {
      nodes: false,
      deformedShape: true,
      loads: false,
      shellResults: "displacementZ"
    }
  }), P(o), U({
    position: "bottom-center"
  }), X({
    dialogBody: S
  }), B({
    clickedButton: v,
    buttons: [
      "Report",
      "Code",
      "Print"
    ],
    sourceCode: "https://github.com/GiorgioBurbanelli89/awatif-ejemplos/tree/master/plate-shell-thin",
    author: "https://github.com/GiorgioBurbanelli89"
  }));
});
