import { x as k, v as r, g as z, j as N, b as L, d as T } from "./styles-pdtxawzU.js";
import { a as C } from "./analyze-CmnHHflB.js";
import { d as P, __tla as __tla_0 } from "./deformCpp-CS-wCYO-.js";
import { g as G } from "./getParameters-Dl3mTgVW.js";
import { g as S } from "./getDialog-SKblNfmB.js";
import { g as E } from "./getReport-9byhZbfH.js";
import { g as R, __tla as __tla_1 } from "./getMesh-DmUdekin.js";
import { o as I } from "./unsafe-html-CJlcZ_0W.js";
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
  function M(l) {
    const t = (l == null ? void 0 : l.validation) || {}, d = t.w_fem ?? 0, c = t.w_navier ?? 0, v = t.error ?? 0, m = t.numNodes ?? 0, h = t.numElements ?? 0, s = t.params || {}, a = (w, D = 4) => Math.abs(w) < 1e-10 ? "0" : Math.abs(w) > 1e6 || Math.abs(w) < 1e-3 ? w.toExponential(D) : w.toFixed(D), e = s.E * Math.pow(s.t, 3) / (12 * (1 - s.nu * s.nu)), g = s.E / (2 * (1 + s.nu)), f = 5 / 6 * g * s.t, p = e, u = e * s.nu, x = e * (1 - s.nu) / 2, n = v < 10, o = `
<style>
  .validation-report {
    font-family: "Times New Roman", Georgia, serif;
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
    background: #fafafa;
    color: #1a1a1a;
    line-height: 1.6;
  }
  .validation-report h1 {
    color: #2c3e50;
    border-bottom: 3px solid #3498db;
    padding-bottom: 10px;
    font-size: 24px;
  }
  .validation-report h2 {
    color: #34495e;
    margin-top: 25px;
    font-size: 18px;
    border-left: 4px solid #3498db;
    padding-left: 10px;
  }
  .validation-report h3 {
    color: #7f8c8d;
    font-size: 15px;
    margin-top: 20px;
    background: #ecf0f1;
    padding: 8px;
  }
  .result-box {
    background: linear-gradient(135deg, ${n ? "#27ae60" : "#e74c3c"} 0%, ${n ? "#2ecc71" : "#c0392b"} 100%);
    color: white;
    padding: 20px;
    border-radius: 10px;
    margin: 20px 0;
    text-align: center;
  }
  .result-box h2 {
    color: white;
    border: none;
    margin: 0;
    font-size: 20px;
  }
  .result-box .big-number {
    font-size: 48px;
    font-weight: bold;
    margin: 10px 0;
  }
  .comparison-table {
    width: 100%;
    border-collapse: collapse;
    margin: 15px 0;
    font-size: 14px;
  }
  .comparison-table th, .comparison-table td {
    border: 1px solid #bdc3c7;
    padding: 12px 15px;
    text-align: center;
  }
  .comparison-table th {
    background: #34495e;
    color: white;
  }
  .comparison-table tr:nth-child(even) {
    background: #ecf0f1;
  }
  .pass { background: #27ae60 !important; color: white; font-weight: bold; }
  .fail { background: #e74c3c !important; color: white; font-weight: bold; }
  .formula {
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 5px;
    padding: 15px;
    margin: 10px 0;
    font-family: "Courier New", monospace;
    overflow-x: auto;
  }
  .params-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin: 15px 0;
  }
  .param-card {
    background: white;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
  }
  .param-card .label { font-size: 12px; color: #7f8c8d; }
  .param-card .value { font-size: 18px; font-weight: bold; color: #2c3e50; }
  .reference {
    background: #fff3cd;
    border-left: 4px solid #ffc107;
    padding: 10px 15px;
    margin: 15px 0;
    font-size: 13px;
  }
  .theory-box {
    background: #e8f4f8;
    border: 1px solid #3498db;
    border-radius: 5px;
    padding: 15px;
    margin: 15px 0;
  }
  .theory-box h4 {
    margin: 0 0 10px 0;
    color: #2980b9;
  }
  .matrix {
    font-family: "Courier New", monospace;
    background: white;
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px 0;
    display: inline-block;
    border-radius: 5px;
  }
  .matrix table {
    border-collapse: collapse;
  }
  .matrix td {
    padding: 5px 10px;
    text-align: right;
    font-size: 13px;
  }
  .eq { margin: 8px 0; }
  .eq var { font-style: italic; color: #2980b9; }
  .eq .result { color: #27ae60; font-weight: bold; }
  .eq .target { color: #e74c3c; font-weight: bold; }
  .mesh-info {
    display: flex;
    gap: 20px;
    margin: 15px 0;
  }
  .mesh-info div {
    flex: 1;
    background: #e8f4f8;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
  }
  .code-block {
    background: #2d2d2d;
    color: #f8f8f2;
    padding: 15px;
    border-radius: 5px;
    font-family: "Courier New", monospace;
    font-size: 12px;
    overflow-x: auto;
    margin: 10px 0;
  }
  .code-block .kw { color: #66d9ef; }
  .code-block .fn { color: #a6e22e; }
  .code-block .num { color: #ae81ff; }
  .code-block .cm { color: #75715e; }
</style>

<div class="validation-report">
  <h1>TEST: Placa Isotr\xF3pica Simplemente Apoyada</h1>
  <p><strong>Validaci\xF3n FEM contra Soluci\xF3n Anal\xEDtica de Navier</strong></p>

  <div class="reference">
    <strong>Referencias:</strong><br>
    \u2022 awatif-fem/src/deform.test.ts l\xEDnea 148-311<br>
    \u2022 Timoshenko & Woinowsky-Krieger, "Theory of Plates and Shells"<br>
    \u2022 Hughes, T.J.R., "The Finite Element Method", Ch. 5
  </div>

  <h2>1. Par\xE1metros de Entrada</h2>

  <div class="params-grid">
    <div class="param-card"><div class="label">Lado a</div><div class="value">${a(s.a, 1)} m</div></div>
    <div class="param-card"><div class="label">Lado b</div><div class="value">${a(s.b, 1)} m</div></div>
    <div class="param-card"><div class="label">Espesor t</div><div class="value">${a(s.t, 2)} m</div></div>
    <div class="param-card"><div class="label">M\xF3dulo E</div><div class="value">${a(s.E / 1e9, 1)} GPa</div></div>
    <div class="param-card"><div class="label">Poisson \u03BD</div><div class="value">${a(s.nu, 2)}</div></div>
    <div class="param-card"><div class="label">Carga q</div><div class="value">${a(s.q, 0)} N/m\xB2</div></div>
  </div>

  <h2>2. Teor\xEDa de Placas: Mindlin-Reissner</h2>

  <div class="theory-box">
    <h4>Comparaci\xF3n de Teor\xEDas de Placas</h4>
    <table class="comparison-table">
      <tr>
        <th>Caracter\xEDstica</th>
        <th>Kirchhoff (Delgada)</th>
        <th>Mindlin-Reissner (Gruesa)</th>
      </tr>
      <tr>
        <td>Deformaci\xF3n por corte</td>
        <td>Despreciada (\u03B3 = 0)</td>
        <td>Incluida (\u03B3 \u2260 0)</td>
      </tr>
      <tr>
        <td>Hip\xF3tesis de normalidad</td>
        <td>Secciones normales permanecen normales</td>
        <td>Secciones normales rotan independientemente</td>
      </tr>
      <tr>
        <td>Relaci\xF3n t/L t\xEDpica</td>
        <td>t/L < 1/20</td>
        <td>t/L > 1/20</td>
      </tr>
      <tr>
        <td>GDL por nodo</td>
        <td>w (1 GDL)</td>
        <td>w, \u03B8x, \u03B8y (3 GDL)</td>
      </tr>
    </table>
    <p><strong>Awatif usa Mindlin-Reissner</strong> porque es m\xE1s general y maneja placas delgadas y gruesas.</p>
  </div>

  <h3>2.1 Relaciones Cinem\xE1ticas</h3>

  <div class="formula">
    <div class="eq">Campo de desplazamientos:</div>
    <div class="eq"><var>u</var>(<var>x</var>, <var>y</var>, <var>z</var>) = -<var>z</var>\xB7<var>\u03B8</var><sub>y</sub>(<var>x</var>, <var>y</var>)</div>
    <div class="eq"><var>v</var>(<var>x</var>, <var>y</var>, <var>z</var>) = <var>z</var>\xB7<var>\u03B8</var><sub>x</sub>(<var>x</var>, <var>y</var>)</div>
    <div class="eq"><var>w</var>(<var>x</var>, <var>y</var>, <var>z</var>) = <var>w</var>(<var>x</var>, <var>y</var>)</div>
  </div>

  <h3>2.2 Curvaturas y Deformaciones por Corte</h3>

  <div class="formula">
    <div class="eq">Curvaturas (flexi\xF3n):</div>
    <div class="eq"><var>\u03BA</var><sub>xx</sub> = \u2202<var>\u03B8</var><sub>y</sub>/\u2202<var>x</var></div>
    <div class="eq"><var>\u03BA</var><sub>yy</sub> = -\u2202<var>\u03B8</var><sub>x</sub>/\u2202<var>y</var></div>
    <div class="eq"><var>\u03BA</var><sub>xy</sub> = \u2202<var>\u03B8</var><sub>y</sub>/\u2202<var>y</var> - \u2202<var>\u03B8</var><sub>x</sub>/\u2202<var>x</var></div>
    <br>
    <div class="eq">Deformaciones por corte:</div>
    <div class="eq"><var>\u03B3</var><sub>xz</sub> = <var>\u03B8</var><sub>y</sub> + \u2202<var>w</var>/\u2202<var>x</var></div>
    <div class="eq"><var>\u03B3</var><sub>yz</sub> = -<var>\u03B8</var><sub>x</sub> + \u2202<var>w</var>/\u2202<var>y</var></div>
  </div>

  <h2>3. Matrices Constitutivas</h2>

  <h3>3.1 Matriz de Rigidez a Flexi\xF3n D<sub>b</sub></h3>

  <div class="formula">
    <div class="eq"><var>D</var> = <var>E</var>\xB7<var>t</var>\xB3 / [12\xB7(1 - <var>\u03BD</var>\xB2)] =
      ${a(s.E / 1e9)}\xD710\u2079 \xB7 ${a(s.t)}\xB3 / [12\xB7(1 - ${a(s.nu)}\xB2)] = <span class="result">${a(e)} N\xB7m</span></div>
  </div>

  <div class="matrix">
    <strong>D<sub>b</sub></strong> =
    <table>
      <tr><td>${a(p)}</td><td>${a(u)}</td><td>0</td></tr>
      <tr><td>${a(u)}</td><td>${a(p)}</td><td>0</td></tr>
      <tr><td>0</td><td>0</td><td>${a(x)}</td></tr>
    </table>
    <span style="font-size: 12px; color: #666;"> N\xB7m</span>
  </div>

  <div class="formula">
    <div class="eq">Forma general: <strong>D<sub>b</sub></strong> = <var>D</var> \xB7
    [1, \u03BD, 0; \u03BD, 1, 0; 0, 0, (1-\u03BD)/2]</div>
  </div>

  <h3>3.2 Matriz de Rigidez al Corte D<sub>s</sub></h3>

  <div class="formula">
    <div class="eq"><var>G</var> = <var>E</var> / [2\xB7(1 + <var>\u03BD</var>)] =
      ${a(s.E / 1e9)}\xD710\u2079 / [2\xB7(1 + ${a(s.nu)})] = <span class="result">${a(g / 1e9)} GPa</span></div>
    <div class="eq"><var>D</var><sub>s</sub> = <var>\u03BA</var>\xB7<var>G</var>\xB7<var>t</var> =
      (5/6) \xB7 ${a(g / 1e9)} \xB7 ${a(s.t)} = <span class="result">${a(f)} N/m</span></div>
    <div class="eq">donde \u03BA = 5/6 es el factor de correcci\xF3n de corte para secci\xF3n rectangular</div>
  </div>

  <div class="matrix">
    <strong>D<sub>s</sub></strong> =
    <table>
      <tr><td>${a(f)}</td><td>0</td></tr>
      <tr><td>0</td><td>${a(f)}</td></tr>
    </table>
    <span style="font-size: 12px; color: #666;"> N/m</span>
  </div>

  <h2>4. Elemento Triangular DSG (Discrete Shear Gap)</h2>

  <div class="theory-box">
    <h4>\xBFPor qu\xE9 DSG?</h4>
    <p>Los elementos de placa gruesa con interpolaci\xF3n lineal sufren de <strong>shear locking</strong>
    (bloqueo por corte) cuando la placa es delgada (t/L \u2192 0). El m\xE9todo DSG corrige esto
    discretizando las deformaciones por corte en los lados del elemento.</p>
  </div>

  <h3>4.1 Funciones de Forma (Coordenadas de \xC1rea)</h3>

  <div class="formula">
    <div class="eq">Para un tri\xE1ngulo con v\xE9rtices (x\u2081,y\u2081), (x\u2082,y\u2082), (x\u2083,y\u2083):</div>
    <div class="eq"><var>N</var>\u2081 = <var>L</var>\u2081 = (\xE1rea P-2-3) / (\xE1rea 1-2-3)</div>
    <div class="eq"><var>N</var>\u2082 = <var>L</var>\u2082 = (\xE1rea 1-P-3) / (\xE1rea 1-2-3)</div>
    <div class="eq"><var>N</var>\u2083 = <var>L</var>\u2083 = (\xE1rea 1-2-P) / (\xE1rea 1-2-3)</div>
    <br>
    <div class="eq">donde L\u2081 + L\u2082 + L\u2083 = 1</div>
  </div>

  <h3>4.2 Interpolaci\xF3n de Campos</h3>

  <div class="formula">
    <div class="eq"><var>w</var> = N\u2081\xB7w\u2081 + N\u2082\xB7w\u2082 + N\u2083\xB7w\u2083</div>
    <div class="eq"><var>\u03B8</var><sub>x</sub> = N\u2081\xB7\u03B8<sub>x1</sub> + N\u2082\xB7\u03B8<sub>x2</sub> + N\u2083\xB7\u03B8<sub>x3</sub></div>
    <div class="eq"><var>\u03B8</var><sub>y</sub> = N\u2081\xB7\u03B8<sub>y1</sub> + N\u2082\xB7\u03B8<sub>y2</sub> + N\u2083\xB7\u03B8<sub>y3</sub></div>
  </div>

  <h3>4.3 Matriz de Rigidez del Elemento K<sub>e</sub></h3>

  <div class="formula">
    <div class="eq"><strong>K</strong><sub>e</sub> = <strong>K</strong><sub>b</sub> + <strong>K</strong><sub>s</sub></div>
    <div class="eq"><strong>K</strong><sub>b</sub> = \u222B<sub>\u03A9</sub> <strong>B</strong><sub>b</sub><sup>T</sup> \xB7 <strong>D</strong><sub>b</sub> \xB7 <strong>B</strong><sub>b</sub> d\u03A9 (flexi\xF3n)</div>
    <div class="eq"><strong>K</strong><sub>s</sub> = \u222B<sub>\u03A9</sub> <strong>B</strong><sub>s</sub><sup>T</sup> \xB7 <strong>D</strong><sub>s</sub> \xB7 <strong>B</strong><sub>s</sub> d\u03A9 (corte)</div>
    <br>
    <div class="eq">donde <strong>B</strong><sub>b</sub> y <strong>B</strong><sub>s</sub> son las matrices de deformaci\xF3n</div>
    <div class="eq">La integral se eval\xFAa con cuadratura de Gauss de 1 punto (centroide)</div>
  </div>

  <h3>4.4 GDL por Elemento</h3>

  <div class="formula">
    <div class="eq">Cada nodo tiene 3 GDL: {w, \u03B8<sub>x</sub>, \u03B8<sub>y</sub>}</div>
    <div class="eq">Elemento triangular: 3 nodos \xD7 3 GDL = <strong>9 GDL</strong></div>
    <div class="eq">Tama\xF1o de K<sub>e</sub>: <strong>9 \xD7 9</strong></div>
  </div>

  <h2>5. Soluci\xF3n Anal\xEDtica de Navier</h2>

  <p>Para placa rectangular simplemente apoyada con carga uniforme <var>q</var>:</p>

  <div class="formula">
    <div class="eq"><var>w</var>(<var>x</var>, <var>y</var>) = (16\xB7<var>q</var>) / (\u03C0\u2076\xB7<var>D</var>) \xD7
    \u03A3\u03A3 [sin(<var>m\u03C0x</var>/<var>a</var>)\xB7sin(<var>n\u03C0y</var>/<var>b</var>)] /
    [<var>mn</var>\xB7(<var>m</var>\xB2/<var>a</var>\xB2 + <var>n</var>\xB2/<var>b</var>\xB2)\xB2]</div>
    <br>
    <div class="eq">donde <var>m</var>, <var>n</var> = 1, 3, 5, ... (impares)</div>
  </div>

  <div class="formula">
    <div class="eq">En el centro (a/2, b/2):</div>
    <div class="eq"><var>w</var><sub>max,Navier</sub> = <span class="target">${a(c, 4)} mm</span> (VALOR OBJETIVO)</div>
  </div>

  <h2>6. Resultados de la Simulaci\xF3n</h2>

  <div class="mesh-info">
    <div><strong>Nodos</strong><br>${m}</div>
    <div><strong>Elementos</strong><br>${h}</div>
    <div><strong>Tipo</strong><br>Tri\xE1ngulo DSG</div>
    <div><strong>Teor\xEDa</strong><br>Mindlin-Reissner</div>
  </div>

  <div class="formula">
    <div class="eq"><var>w</var><sub>max,FEM</sub> = <span class="result">${a(d, 4)} mm</span></div>
  </div>

  <div class="result-box">
    <h2>RESULTADO DE VALIDACI\xD3N</h2>
    <div class="big-number">${n ? "\u2713 PASS" : "\u2717 FAIL"}</div>
    <p>Error: ${a(v, 2)}% (tolerancia: 10%)</p>
  </div>

  <h2>7. Tabla Comparativa</h2>

  <table class="comparison-table">
    <thead>
      <tr>
        <th>Magnitud</th>
        <th>Valor Anal\xEDtico (Navier)</th>
        <th>Valor FEM</th>
        <th>Error %</th>
        <th>Estado</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><var>w</var><sub>max</sub></td>
        <td class="target">${a(c, 4)} mm</td>
        <td>${a(d, 4)} mm</td>
        <td>${a(v, 2)}%</td>
        <td class="${n ? "pass" : "fail"}">${n ? "OK" : "FALLA"}</td>
      </tr>
    </tbody>
  </table>

  <h2>8. C\xF3digo de Referencia</h2>

  <div class="code-block">
    <span class="cm">// awatif-fem/src/deform.test.ts l\xEDnea 148</span><br>
    <span class="kw">test</span>(<span class="str">"Plate: Rectangular pin-supported plate"</span>, () => {<br>
    &nbsp;&nbsp;<span class="kw">const</span> a = <span class="num">10.0</span>; <span class="cm">// m</span><br>
    &nbsp;&nbsp;<span class="kw">const</span> h = <span class="num">0.15</span>; <span class="cm">// m</span><br>
    &nbsp;&nbsp;<span class="kw">const</span> p0 = <span class="num">-1000.0</span>; <span class="cm">// N/m\xB2</span><br>
    &nbsp;&nbsp;<span class="kw">const</span> E_x = <span class="num">1.0e10</span>; <span class="cm">// Pa</span><br>
    &nbsp;&nbsp;<span class="kw">const</span> nu_xy = <span class="num">0.25</span>;<br>
    &nbsp;&nbsp;<span class="cm">// ...</span><br>
    &nbsp;&nbsp;<span class="fn">expect</span>(maxZDisplacement * <span class="num">1000</span>).<span class="fn">toBeCloseTo</span>(<span class="num">12.69</span>, <span class="num">3</span>);<br>
    });
  </div>

  <h2>9. Observaciones</h2>

  <ul>
    <li><strong>Convergencia:</strong> El error disminuye con malla m\xE1s fina. Con 30 divisiones, error < 3%.</li>
    <li><strong>Teor\xEDa:</strong> FEM usa Mindlin-Reissner (incluye corte), Navier asume Kirchhoff (sin corte).</li>
    <li><strong>Shear Locking:</strong> El elemento DSG evita el bloqueo por corte.</li>
    <li><strong>Discretizaci\xF3n:</strong> Con ${h} elementos triangulares, error t\xEDpico ~${a(v, 1)}%.</li>
  </ul>

  <p style="text-align: center; color: #7f8c8d; margin-top: 30px; font-size: 12px;">
    Generado por Awatif FEM - Validaci\xF3n de Placas Isotr\xF3picas<br>
    Elemento: DSG Triangle | Teor\xEDa: Mindlin-Reissner
  </p>
</div>
`;
    return k`${I(o)}`;
  }
  const b = {
    a: {
      value: r.state(10),
      min: 5,
      max: 20,
      step: 1,
      label: "Lado a",
      unit: "length"
    },
    b: {
      value: r.state(10),
      min: 5,
      max: 20,
      step: 1,
      label: "Lado b",
      unit: "length"
    },
    t: {
      value: r.state(0.15),
      min: 0.05,
      max: 0.5,
      step: 0.01,
      label: "Espesor t",
      unit: "length"
    },
    E: {
      value: r.state(1e10),
      min: 1e9,
      max: 2e11,
      step: 1e9,
      label: "M\xF3dulo E",
      unit: "stress"
    },
    nu: {
      value: r.state(0.25),
      min: 0.1,
      max: 0.45,
      step: 0.05,
      label: "Poisson \u03BD"
    },
    q: {
      value: r.state(-1e3),
      min: -5e3,
      max: -100,
      step: 100,
      label: "Carga q",
      unit: "force"
    },
    meshDiv: {
      value: r.state(10),
      min: 4,
      max: 30,
      step: 2,
      label: "Divisiones malla"
    }
  };
  function _(l, t, d, c, v, m) {
    const h = c * Math.pow(d, 3) / (12 * (1 - v * v));
    let s = 0;
    for (let a = 1; a <= 21; a += 2) for (let e = 1; e <= 21; e += 2) {
      const g = a * Math.PI / l, f = e * Math.PI / t, p = a * e * Math.pow(Math.pow(g, 2) + Math.pow(f, 2), 2), u = 16 * m / (Math.pow(Math.PI, 6) * h * p), x = Math.pow(-1, (a + e) / 2 - 1);
      s += x * u;
    }
    return Math.abs(s);
  }
  const i = {
    nodes: r.state([]),
    elements: r.state([]),
    nodeInputs: r.state({}),
    elementInputs: r.state({}),
    deformOutputs: r.state({}),
    analyzeOutputs: r.state({})
  };
  let y = {
    w_fem: 0,
    w_navier: 0,
    error: 0,
    numNodes: 0,
    numElements: 0,
    params: {
      a: 10,
      b: 10,
      t: 0.15,
      E: 1e10,
      nu: 0.25,
      q: -1e3
    }
  };
  r.derive(() => {
    var _a;
    const l = b.a.value.val, t = b.b.value.val, d = b.t.value.val, c = b.E.value.val, v = b.nu.value.val, m = b.q.value.val, h = b.meshDiv.value.val, s = Math.max(l, t) / h, { nodes: a, elements: e, boundaryIndices: g } = R({
      points: [
        [
          0,
          0,
          0
        ],
        [
          l,
          0,
          0
        ],
        [
          l,
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
      maxMeshSize: s
    }), f = c / (2 * (1 + v));
    i.nodeInputs.val = {
      supports: new Map(g.map((n) => [
        n,
        [
          true,
          true,
          true,
          false,
          false,
          false
        ]
      ])),
      loads: new Map(a.map((n, o) => [
        o,
        [
          0,
          0,
          m,
          0,
          0,
          0
        ]
      ]))
    }, i.nodes.val = a, i.elements.val = e, i.elementInputs.val = {
      elasticities: new Map(e.map((n, o) => [
        o,
        c
      ])),
      elasticitiesOrthogonal: new Map(e.map((n, o) => [
        o,
        c
      ])),
      thicknesses: new Map(e.map((n, o) => [
        o,
        d
      ])),
      poissonsRatios: new Map(e.map((n, o) => [
        o,
        v
      ])),
      shearModuli: new Map(e.map((n, o) => [
        o,
        f
      ]))
    }, i.deformOutputs.val = P(a, e, i.nodeInputs.val, i.elementInputs.val), i.analyzeOutputs.val = C(a, e, i.elementInputs.val, i.deformOutputs.val);
    let p = 0;
    (_a = i.deformOutputs.val.deformations) == null ? void 0 : _a.forEach((n) => {
      const o = Math.abs(n[2]);
      o > p && (p = o);
    });
    const u = _(l, t, d, c, v, m), x = Math.abs((p - u) / u) * 100;
    y = {
      w_fem: p * 1e3,
      w_navier: u * 1e3,
      error: x,
      numNodes: a.length,
      numElements: e.length,
      params: {
        a: l,
        b: t,
        t: d,
        E: c,
        nu: v,
        q: m
      }
    };
  });
  const q = r.state(""), $ = r.state(void 0);
  r.derive(() => {
    if (q.val === "Validaci\xF3n") {
      const l = {
        ...i,
        validation: y
      };
      $.val = E({
        template: M,
        data: l
      });
    }
    if (q.val === "Print") {
      const l = {
        ...i,
        validation: y
      }, t = E({
        template: M,
        data: l
      }), d = window.open("", "_blank");
      d && (d.document.write(`
        <!DOCTYPE html>
        <html>
        <head><title>TEST: Placa Isotr\xF3pica - Validaci\xF3n</title></head>
        <body>${(t == null ? void 0 : t.innerHTML) || ""}</body>
        </html>
      `), d.document.close(), d.focus(), setTimeout(() => d.print(), 500));
    }
  });
  document.body.append(G(b), z({
    mesh: i,
    settingsObj: {
      nodes: false,
      deformedShape: true,
      loads: false,
      shellResults: "displacementZ"
    }
  }), N(i), L({
    position: "bottom-center"
  }), S({
    dialogBody: $
  }), T({
    clickedButton: q,
    buttons: [
      "Validaci\xF3n",
      "Print"
    ],
    sourceCode: "https://github.com/GiorgioBurbanelli89/awatif-ejemplos/tree/master/test-plate-isotropic",
    author: "https://github.com/GiorgioBurbanelli89"
  }));
});
