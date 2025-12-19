import { x as Y, v as r, g as B, e as X, b as j, d as K } from "./styles-E_L73LhH.js";
import { a as U } from "./analyze-CmnHHflB.js";
import { d as Z, __tla as __tla_0 } from "./deformCpp-CS-wCYO-.js";
import { g as H } from "./getParameters-BxljPuDv.js";
import { g as W } from "./getDialog-CNIqPx0t.js";
import { g as N } from "./getReport-C7vWZLrc.js";
import { g as J, __tla as __tla_1 } from "./getMesh-DmUdekin.js";
import { o as Q } from "./unsafe-html-CU446BhE.js";
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
  function o(t, e = 4) {
    return Math.abs(t) < 1e-10 ? "0" : Math.abs(t) >= 1e6 || Math.abs(t) < 1e-3 ? t.toExponential(e) : t.toFixed(e);
  }
  function b(t, e, a) {
    return `<span class="eq">${t} = ${e} = <strong>${a}</strong></span>`;
  }
  function S(t, e) {
    const a = t.map((i) => `<tr>${i.map((d) => `<td>${o(d, 4)}</td>`).join("")}</tr>`).join("");
    return `
    <div class="matrix-container">
      <span class="matrix-label">${e} =</span>
      <table class="matrix">
        ${a}
      </table>
    </div>
  `;
  }
  function _(t) {
    const e = t.validationData || {}, a = e.params || {}, i = e.orthoInfo || {}, d = a.a || 10, m = a.b || 10, u = a.t || 0.15, c = a.Ex || 1e10, v = a.Ey || 5e9, n = a.nu || 0.25, p = a.q || -1e3, y = a.meshDiv || 30, R = e.w_fem_mm || 0, f = e.w_reference || 16.903575, g = e.error || 0, E = e.numNodes || 0, x = e.numElements || 0, s = i.nuYX || n * v / c, C = 1 - n * s, O = i.Dx || c * Math.pow(u, 3) / (12 * C), w = i.Dy || v * Math.pow(u, 3) / (12 * C), D = i.Dxy || n * w, M = i.Gxy || 0.5 * c / (1 + n), k = c / v, P = g < 10, L = P ? "result-pass" : "result-fail", G = P ? "\u2713 PASS" : "\u2717 FAIL", q = [
      [
        O,
        D,
        0
      ],
      [
        D,
        w,
        0
      ],
      [
        0,
        0,
        (O + w - 2 * D) / 4
      ]
    ], I = 5 / 6, F = [
      [
        I * M * u,
        0
      ],
      [
        0,
        I * M * u
      ]
    ], V = `
    <style>
      .validation-report {
        font-family: 'Segoe UI', Tahoma, sans-serif;
        max-width: 900px;
        margin: 0 auto;
        padding: 20px;
        line-height: 1.6;
      }
      .validation-report h1 {
        color: #2c3e50;
        border-bottom: 3px solid #3498db;
        padding-bottom: 10px;
      }
      .validation-report h2 {
        color: #34495e;
        border-bottom: 2px solid #bdc3c7;
        padding-bottom: 5px;
        margin-top: 30px;
      }
      .validation-report h3 {
        color: #7f8c8d;
        margin-top: 20px;
      }
      .params-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 15px;
        margin: 20px 0;
      }
      .param-card {
        background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        padding: 15px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      }
      .param-card .label {
        font-size: 12px;
        color: #7f8c8d;
        text-transform: uppercase;
      }
      .param-card .value {
        font-size: 20px;
        font-weight: bold;
        color: #2c3e50;
      }
      .result-box {
        padding: 25px;
        border-radius: 12px;
        text-align: center;
        margin: 30px 0;
        color: white;
        font-size: 24px;
        font-weight: bold;
      }
      .result-pass {
        background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%);
        box-shadow: 0 4px 15px rgba(46, 204, 113, 0.4);
      }
      .result-fail {
        background: linear-gradient(135deg, #c0392b 0%, #e74c3c 100%);
        box-shadow: 0 4px 15px rgba(231, 76, 60, 0.4);
      }
      .comparison-table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
      }
      .comparison-table th, .comparison-table td {
        border: 1px solid #bdc3c7;
        padding: 12px;
        text-align: center;
      }
      .comparison-table th {
        background: #34495e;
        color: white;
      }
      .comparison-table tr:nth-child(even) {
        background: #f9f9f9;
      }
      .theory-box {
        background: #fef9e7;
        border-left: 4px solid #f39c12;
        padding: 15px;
        margin: 20px 0;
        border-radius: 0 8px 8px 0;
      }
      .formula-box {
        background: #eaf2f8;
        border: 1px solid #3498db;
        padding: 15px;
        margin: 15px 0;
        border-radius: 8px;
        font-family: 'Courier New', monospace;
        overflow-x: auto;
      }
      .eq {
        display: block;
        margin: 5px 0;
        font-family: 'Courier New', monospace;
      }
      .matrix-container {
        display: flex;
        align-items: center;
        gap: 10px;
        margin: 15px 0;
        overflow-x: auto;
      }
      .matrix-label {
        font-family: 'Courier New', monospace;
        font-weight: bold;
      }
      .matrix {
        border-collapse: collapse;
        font-family: 'Courier New', monospace;
        font-size: 12px;
      }
      .matrix td {
        border: 1px solid #999;
        padding: 5px 8px;
        text-align: right;
        min-width: 80px;
      }
      .ortho-diagram {
        text-align: center;
        margin: 20px 0;
      }
      .ortho-diagram svg {
        max-width: 400px;
      }
      .highlight {
        background: #fff3cd;
        padding: 2px 6px;
        border-radius: 4px;
      }
      .code-ref {
        background: #e8f4f8;
        padding: 10px;
        border-radius: 5px;
        font-family: 'Courier New', monospace;
        font-size: 12px;
        margin: 10px 0;
      }
    </style>

    <div class="validation-report">
      <h1>TEST: Placa Ortotr\xF3pica</h1>
      <p><strong>Validaci\xF3n FEM vs Valor de Referencia</strong></p>

      <!-- RESULTADO -->
      <div class="result-box ${L}">
        ${G}<br>
        <span style="font-size: 16px;">Error: ${o(g, 2)}% (tolerancia: 10%)</span>
      </div>

      <!-- COMPARACI\xD3N -->
      <h2>1. Comparaci\xF3n de Resultados</h2>
      <table class="comparison-table">
        <tr>
          <th>M\xE9todo</th>
          <th>Desplazamiento M\xE1ximo</th>
          <th>Error</th>
        </tr>
        <tr>
          <td><strong>FEM (Awatif)</strong></td>
          <td>${o(R, 6)} mm</td>
          <td>${o(g, 2)}%</td>
        </tr>
        <tr>
          <td><strong>Referencia</strong></td>
          <td>${o(f, 6)} mm</td>
          <td>\u2014</td>
        </tr>
      </table>

      <div class="code-ref">
        <strong>Referencia:</strong> deform.test.ts l\xEDnea 314-436<br>
        Test: "Plate: Rectangular pin-supported plate with orthotropic material"
      </div>

      <!-- PAR\xC1METROS -->
      <h2>2. Par\xE1metros del Modelo</h2>

      <h3>2.1 Geometr\xEDa</h3>
      <div class="params-grid">
        <div class="param-card">
          <div class="label">Ancho (a)</div>
          <div class="value">${d} m</div>
        </div>
        <div class="param-card">
          <div class="label">Largo (b)</div>
          <div class="value">${m} m</div>
        </div>
        <div class="param-card">
          <div class="label">Espesor (t)</div>
          <div class="value">${u} m</div>
        </div>
        <div class="param-card">
          <div class="label">\xC1rea</div>
          <div class="value">${d * m} m\xB2</div>
        </div>
      </div>

      <h3>2.2 Material Ortotr\xF3pico</h3>
      <div class="params-grid">
        <div class="param-card">
          <div class="label">M\xF3dulo Ex</div>
          <div class="value">${o(c, 2)} Pa</div>
        </div>
        <div class="param-card">
          <div class="label">M\xF3dulo Ey</div>
          <div class="value">${o(v, 2)} Pa</div>
        </div>
        <div class="param-card">
          <div class="label">\u03BDxy</div>
          <div class="value">${n}</div>
        </div>
        <div class="param-card">
          <div class="label">Gxy</div>
          <div class="value">${o(M, 2)} Pa</div>
        </div>
      </div>

      <div class="theory-box">
        <strong>Ratio de Anisotrop\xEDa:</strong> Ex/Ey = ${o(k, 2)}<br>
        La placa es <strong class="highlight">${k}x m\xE1s r\xEDgida en X</strong> que en Y.
      </div>

      <h3>2.3 Cargas</h3>
      <div class="params-grid">
        <div class="param-card">
          <div class="label">Carga uniforme (q)</div>
          <div class="value">${p} N/m\xB2</div>
        </div>
        <div class="param-card">
          <div class="label">Carga total</div>
          <div class="value">${o(Math.abs(p * d * m), 0)} N</div>
        </div>
      </div>

      <!-- TEOR\xCDA ORTOTR\xD3PICA -->
      <h2>3. Teor\xEDa de Placas Ortotr\xF3picas</h2>

      <div class="theory-box">
        <strong>Material Ortotr\xF3pico:</strong> Un material ortotr\xF3pico tiene propiedades
        mec\xE1nicas diferentes en direcciones ortogonales. Ejemplos comunes incluyen madera,
        composites laminados, y concreto reforzado unidireccionalmente.
      </div>

      <h3>3.1 Relaci\xF3n de Reciprocidad</h3>
      <p>Para materiales ortotr\xF3picos, los coeficientes de Poisson est\xE1n relacionados:</p>
      <div class="formula-box">
        ${b("\u03BDyx", `\u03BDxy \xB7 (Ey/Ex) = ${n} \xB7 (${o(v)}/${o(c)})`, o(s, 4))}
      </div>
      <p>Esta relaci\xF3n garantiza la simetr\xEDa de la matriz constitutiva.</p>

      <h3>3.2 Rigideces Flexionales</h3>
      <p>Las rigideces flexionales para material ortotr\xF3pico son:</p>

      <div class="formula-box">
        ${b("Dx", "Ex\xB7t\xB3/[12\xB7(1-\u03BDxy\xB7\u03BDyx)]", o(O, 2))} N\xB7m<br><br>
        ${b("Dy", "Ey\xB7t\xB3/[12\xB7(1-\u03BDxy\xB7\u03BDyx)]", o(w, 2))} N\xB7m<br><br>
        ${b("Dxy", "\u03BDxy\xB7Dy", o(D, 2))} N\xB7m
      </div>

      <h3>3.3 Matriz Constitutiva de Flexi\xF3n (Db)</h3>
      <p>Para material ortotr\xF3pico, la matriz Db relaciona curvaturas con momentos:</p>
      ${S(q, "Db")}

      <p><strong>Diferencia con isotr\xF3pico:</strong> En material isotr\xF3pico Dx = Dy = D.
      Aqu\xED Dx \u2260 Dy, lo que produce mayor deflexi\xF3n en la direcci\xF3n m\xE1s flexible (Y).</p>

      <h3>3.4 Matriz de Corte (Ds)</h3>
      <p>Para deformaci\xF3n por cortante (teor\xEDa de Mindlin-Reissner):</p>
      ${S(F, "Ds")}

      <div class="formula-box">
        \u03BA = 5/6 (factor de correcci\xF3n de corte)<br>
        ${b("Gxy", `0.5\xB7Ex/(1+\u03BDxy) = 0.5\xB7${o(c)}/(1+${n})`, o(M, 2))} Pa
      </div>

      <!-- ELEMENTO FINITO -->
      <h2>4. Elemento Finito DSG3</h2>

      <div class="theory-box">
        <strong>Discrete Shear Gap (DSG):</strong> El elemento DSG3 triangular evita
        el "shear locking" en placas delgadas mediante una formulaci\xF3n especial de las
        deformaciones de corte. Es especialmente importante para materiales ortotr\xF3picos
        donde las diferencias de rigidez pueden amplificar problemas num\xE9ricos.
      </div>

      <h3>4.1 Grados de Libertad por Nodo</h3>
      <table class="comparison-table">
        <tr>
          <th>DOF</th>
          <th>Descripci\xF3n</th>
          <th>Tipo</th>
        </tr>
        <tr><td>w</td><td>Desplazamiento transversal</td><td>Traslaci\xF3n</td></tr>
        <tr><td>\u03B8x</td><td>Rotaci\xF3n alrededor de X</td><td>Rotaci\xF3n</td></tr>
        <tr><td>\u03B8y</td><td>Rotaci\xF3n alrededor de Y</td><td>Rotaci\xF3n</td></tr>
      </table>
      <p><strong>Total:</strong> 3 nodos \xD7 3 DOF = 9 DOF por elemento</p>

      <h3>4.2 Matriz de Rigidez del Elemento</h3>
      <div class="formula-box">
        Ke = Kb + Ks<br><br>
        Kb = \u222B\u222B B\u1D47\u1D40 \xB7 Db \xB7 B\u1D47 \xB7 dA (flexi\xF3n)<br>
        Ks = \u222B\u222B B\u02E2\u1D40 \xB7 Ds \xB7 B\u02E2 \xB7 dA (corte)
      </div>

      <!-- MALLA -->
      <h2>5. Informaci\xF3n de la Malla</h2>
      <table class="comparison-table">
        <tr>
          <th>Propiedad</th>
          <th>Valor</th>
        </tr>
        <tr>
          <td>Divisiones</td>
          <td>${y} \xD7 ${y}</td>
        </tr>
        <tr>
          <td>N\xFAmero de nodos</td>
          <td>${E}</td>
        </tr>
        <tr>
          <td>N\xFAmero de elementos</td>
          <td>${x}</td>
        </tr>
        <tr>
          <td>Tipo de elemento</td>
          <td>Tri\xE1ngulo DSG3</td>
        </tr>
        <tr>
          <td>DOF totales</td>
          <td>${E * 3}</td>
        </tr>
      </table>

      <!-- CONDICIONES DE BORDE -->
      <h2>6. Condiciones de Borde</h2>
      <div class="theory-box">
        <strong>Simplemente Apoyada:</strong> w = 0 en todos los bordes (x=0, x=a, y=0, y=b)<br>
        Las rotaciones \u03B8x y \u03B8y est\xE1n libres, permitiendo que los bordes giren.
      </div>

      <!-- EFECTO ORTOTR\xD3PICO -->
      <h2>7. Efecto del Material Ortotr\xF3pico</h2>
      <div class="ortho-diagram">
        <svg viewBox="0 0 400 300">
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <path d="M0,0 L0,6 L9,3 z" fill="#333"/>
            </marker>
          </defs>

          <!-- Placa -->
          <rect x="50" y="50" width="300" height="200" fill="#e8f4f8" stroke="#333" stroke-width="2"/>

          <!-- Ejes -->
          <line x1="50" y1="250" x2="370" y2="250" stroke="#333" stroke-width="2" marker-end="url(#arrow)"/>
          <line x1="50" y1="250" x2="50" y2="30" stroke="#333" stroke-width="2" marker-end="url(#arrow)"/>
          <text x="380" y="255" font-size="16" font-weight="bold">X (Ex)</text>
          <text x="30" y="20" font-size="16" font-weight="bold">Y (Ey)</text>

          <!-- Rigidez alta en X -->
          <line x1="100" y1="150" x2="300" y2="150" stroke="#27ae60" stroke-width="4"/>
          <text x="180" y="140" font-size="12" fill="#27ae60" font-weight="bold">R\xCDGIDO</text>

          <!-- Rigidez baja en Y -->
          <line x1="200" y1="80" x2="200" y2="220" stroke="#e74c3c" stroke-width="2" stroke-dasharray="5,5"/>
          <text x="210" y="100" font-size="12" fill="#e74c3c" font-weight="bold">FLEXIBLE</text>

          <!-- Deflexi\xF3n m\xE1xima -->
          <ellipse cx="200" cy="150" rx="30" ry="50" fill="rgba(231,76,60,0.2)" stroke="#e74c3c"/>
          <text x="240" y="155" font-size="11" fill="#c0392b">wmax</text>

          <!-- Leyenda -->
          <rect x="260" y="260" width="130" height="35" fill="white" stroke="#ccc"/>
          <text x="270" y="278" font-size="11">Ex/Ey = ${o(k, 1)}</text>
          <text x="270" y="292" font-size="11">Mayor deflexi\xF3n en Y</text>
        </svg>
      </div>

      <p>
        Debido a que <strong>Ey = Ex/2</strong>, la placa es m\xE1s flexible en la direcci\xF3n Y.
        Esto produce una deflexi\xF3n m\xE1xima mayor que en el caso isotr\xF3pico (12.69 mm \u2192 16.90 mm).
      </p>

      <!-- REFERENCIAS -->
      <h2>8. Referencias</h2>
      <ul>
        <li><strong>C\xF3digo fuente:</strong> deform.test.ts l\xEDneas 314-436</li>
        <li><strong>Elemento:</strong> DSG3 (Discrete Shear Gap, 3 nodos)</li>
        <li><strong>Teor\xEDa:</strong> Mindlin-Reissner (placas gruesas con corte)</li>
        <li><strong>Paper:</strong> Rama, Marinkovic, Zehn (2018) - "A three-node shell element..."</li>
        <li><strong>Material:</strong> Teor\xEDa de elasticidad ortotr\xF3pica</li>
      </ul>

    </div>
  `;
    return Y`${Q(V)}`;
  }
  const $ = 16.903575, h = {
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
    Ex: {
      value: r.state(1e10),
      min: 1e9,
      max: 2e11,
      step: 1e9,
      label: "M\xF3dulo Ex",
      unit: "stress"
    },
    Ey: {
      value: r.state(5e9),
      min: 1e9,
      max: 1e11,
      step: 1e9,
      label: "M\xF3dulo Ey",
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
      value: r.state(30),
      min: 10,
      max: 50,
      step: 5,
      label: "Divisiones malla"
    }
  };
  function ee(t, e, a, i) {
    const d = a * e / t, m = 1 - a * d, u = t * Math.pow(i, 3) / (12 * m), c = e * Math.pow(i, 3) / (12 * m), v = a * c, n = 0.5 * t / (1 + a);
    return {
      Dx: u,
      Dy: c,
      Dxy: v,
      Gxy: n,
      nuYX: d
    };
  }
  const l = {
    nodes: r.state([]),
    elements: r.state([]),
    nodeInputs: r.state({}),
    elementInputs: r.state({}),
    deformOutputs: r.state({}),
    analyzeOutputs: r.state({})
  };
  let z = {
    w_fem_mm: 0,
    w_reference: $,
    error: 0,
    numNodes: 0,
    numElements: 0,
    params: {
      a: 10,
      b: 10,
      t: 0.15,
      Ex: 1e10,
      Ey: 5e9,
      nu: 0.25,
      q: -1e3
    },
    orthoInfo: {
      Dx: 0,
      Dy: 0,
      Dxy: 0,
      Gxy: 0,
      nuYX: 0
    }
  };
  r.derive(() => {
    var _a;
    const t = h.a.value.val, e = h.b.value.val, a = h.t.value.val, i = h.Ex.value.val, d = h.Ey.value.val, m = h.nu.value.val, u = h.q.value.val, c = h.meshDiv.value.val, v = Math.max(t, e) / c, { nodes: n, elements: p, boundaryIndices: y } = J({
      points: [
        [
          0,
          0,
          0
        ],
        [
          t,
          0,
          0
        ],
        [
          t,
          e,
          0
        ],
        [
          0,
          e,
          0
        ]
      ],
      polygon: [
        0,
        1,
        2,
        3
      ],
      maxMeshSize: v
    }), R = 0.5 * i / (1 + m);
    l.nodeInputs.val = {
      supports: new Map(y.map((x) => [
        x,
        [
          true,
          true,
          true,
          false,
          false,
          false
        ]
      ])),
      loads: new Map(n.map((x, s) => [
        s,
        [
          0,
          0,
          u,
          0,
          0,
          0
        ]
      ]))
    }, l.nodes.val = n, l.elements.val = p, l.elementInputs.val = {
      elasticities: new Map(p.map((x, s) => [
        s,
        i
      ])),
      elasticitiesOrthogonal: new Map(p.map((x, s) => [
        s,
        d
      ])),
      thicknesses: new Map(p.map((x, s) => [
        s,
        a
      ])),
      poissonsRatios: new Map(p.map((x, s) => [
        s,
        m
      ])),
      shearModuli: new Map(p.map((x, s) => [
        s,
        R
      ]))
    }, l.deformOutputs.val = Z(n, p, l.nodeInputs.val, l.elementInputs.val), l.analyzeOutputs.val = U(n, p, l.elementInputs.val, l.deformOutputs.val);
    let f = 0;
    (_a = l.deformOutputs.val.deformations) == null ? void 0 : _a.forEach((x) => {
      const s = Math.abs(x[2]);
      s > f && (f = s);
    });
    const g = f * 1e3, E = Math.abs((g - $) / $) * 100;
    z = {
      w_fem_mm: g,
      w_reference: $,
      error: E,
      numNodes: n.length,
      numElements: p.length,
      params: {
        a: t,
        b: e,
        t: a,
        Ex: i,
        Ey: d,
        nu: m,
        q: u
      },
      orthoInfo: ee(i, d, m, a)
    };
  });
  const T = r.state(""), A = r.state(void 0);
  r.derive(() => {
    if (T.val === "Validaci\xF3n" && (A.val = N({
      template: _,
      data: {
        ...l,
        validationData: z
      }
    })), T.val === "Print") {
      const t = N({
        template: _,
        data: {
          ...l,
          validationData: z
        }
      }), e = window.open("", "_blank");
      e && (e.document.write(`<!DOCTYPE html><html><head><title>TEST: Placa Ortotr\xF3pica</title></head><body>${(t == null ? void 0 : t.innerHTML) || ""}</body></html>`), e.document.close(), e.focus(), setTimeout(() => e.print(), 500));
    }
  });
  document.body.append(H(h), B({
    mesh: l,
    settingsObj: {
      nodes: false,
      deformedShape: true,
      loads: false,
      shellResults: "displacementZ"
    }
  }), X(l), j({
    position: "bottom-center"
  }), W({
    dialogBody: A
  }), K({
    clickedButton: T,
    buttons: [
      "Validaci\xF3n",
      "Print"
    ],
    sourceCode: "https://github.com/GiorgioBurbanelli89/awatif-ejemplos/tree/master/test-plate-orthotropic",
    author: "https://github.com/GiorgioBurbanelli89"
  }));
});
