import { x as H, v as E, g as Z, d as J } from "./styles-DdZBjQss.js";
import { d as Q, __tla as __tla_0 } from "./deformCpp-BfqFyY9O.js";
import { g as tt } from "./getParameters-Cw5eBGZx.js";
import { g as B } from "./getReport-CR2O-zfl.js";
import { o as et } from "./unsafe-html-BlTtRwDP.js";
import "./directive-C_Rw-dL6.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function s(t, e = 4) {
    return Math.abs(t) < 1e-10 ? "0" : Math.abs(t) >= 1e6 || Math.abs(t) < 1e-3 ? t.toExponential(e) : t.toFixed(e);
  }
  function C(t, e, o) {
    return `<span class="eq">${t} = ${e} = <strong>${o}</strong></span>`;
  }
  function j(t, e) {
    const o = t.map((i) => `<tr>${i.map((p) => `<td>${s(p, 4)}</td>`).join("")}</tr>`).join("");
    return `
    <div class="matrix-container">
      <span class="matrix-label">${e} =</span>
      <table class="matrix">
        ${o}
      </table>
    </div>
  `;
  }
  function V(t) {
    const e = t.validationData || {}, o = e.params || {}, i = e.orthoInfo || {}, p = o.a || 10, g = o.b || 10, x = o.t || 0.15, m = o.Ex || 1e10, n = o.Ey || 5e9, h = o.nu || 0.25, b = o.q || -1e3, f = o.meshDiv || 30, w = e.w_fem_mm || 0, u = e.w_reference || 16.903575, M = e.error || 0, D = e.numNodes || 0, O = e.numElements || 0, z = i.nuYX || h * n / m, P = 1 - h * z, r = i.Dx || m * Math.pow(x, 3) / (12 * P), a = i.Dy || n * Math.pow(x, 3) / (12 * P), l = i.Dxy || h * a, c = i.Gxy || 0.5 * m / (1 + h), d = m / n, v = M < 10, k = v ? "result-pass" : "result-fail", T = v ? "\u2713 PASS" : "\u2717 FAIL", N = [
      [
        r,
        l,
        0
      ],
      [
        l,
        a,
        0
      ],
      [
        0,
        0,
        (r + a - 2 * l) / 4
      ]
    ], R = 5 / 6, I = [
      [
        R * c * x,
        0
      ],
      [
        0,
        R * c * x
      ]
    ], A = `
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
      <div class="result-box ${k}">
        ${T}<br>
        <span style="font-size: 16px;">Error: ${s(M, 2)}% (tolerancia: 10%)</span>
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
          <td>${s(w, 6)} mm</td>
          <td>${s(M, 2)}%</td>
        </tr>
        <tr>
          <td><strong>Referencia</strong></td>
          <td>${s(u, 6)} mm</td>
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
          <div class="value">${p} m</div>
        </div>
        <div class="param-card">
          <div class="label">Largo (b)</div>
          <div class="value">${g} m</div>
        </div>
        <div class="param-card">
          <div class="label">Espesor (t)</div>
          <div class="value">${x} m</div>
        </div>
        <div class="param-card">
          <div class="label">\xC1rea</div>
          <div class="value">${p * g} m\xB2</div>
        </div>
      </div>

      <h3>2.2 Material Ortotr\xF3pico</h3>
      <div class="params-grid">
        <div class="param-card">
          <div class="label">M\xF3dulo Ex</div>
          <div class="value">${s(m, 2)} Pa</div>
        </div>
        <div class="param-card">
          <div class="label">M\xF3dulo Ey</div>
          <div class="value">${s(n, 2)} Pa</div>
        </div>
        <div class="param-card">
          <div class="label">\u03BDxy</div>
          <div class="value">${h}</div>
        </div>
        <div class="param-card">
          <div class="label">Gxy</div>
          <div class="value">${s(c, 2)} Pa</div>
        </div>
      </div>

      <div class="theory-box">
        <strong>Ratio de Anisotrop\xEDa:</strong> Ex/Ey = ${s(d, 2)}<br>
        La placa es <strong class="highlight">${d}x m\xE1s r\xEDgida en X</strong> que en Y.
      </div>

      <h3>2.3 Cargas</h3>
      <div class="params-grid">
        <div class="param-card">
          <div class="label">Carga uniforme (q)</div>
          <div class="value">${b} N/m\xB2</div>
        </div>
        <div class="param-card">
          <div class="label">Carga total</div>
          <div class="value">${s(Math.abs(b * p * g), 0)} N</div>
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
        ${C("\u03BDyx", `\u03BDxy \xB7 (Ey/Ex) = ${h} \xB7 (${s(n)}/${s(m)})`, s(z, 4))}
      </div>
      <p>Esta relaci\xF3n garantiza la simetr\xEDa de la matriz constitutiva.</p>

      <h3>3.2 Rigideces Flexionales</h3>
      <p>Las rigideces flexionales para material ortotr\xF3pico son:</p>

      <div class="formula-box">
        ${C("Dx", "Ex\xB7t\xB3/[12\xB7(1-\u03BDxy\xB7\u03BDyx)]", s(r, 2))} N\xB7m<br><br>
        ${C("Dy", "Ey\xB7t\xB3/[12\xB7(1-\u03BDxy\xB7\u03BDyx)]", s(a, 2))} N\xB7m<br><br>
        ${C("Dxy", "\u03BDxy\xB7Dy", s(l, 2))} N\xB7m
      </div>

      <h3>3.3 Matriz Constitutiva de Flexi\xF3n (Db)</h3>
      <p>Para material ortotr\xF3pico, la matriz Db relaciona curvaturas con momentos:</p>
      ${j(N, "Db")}

      <p><strong>Diferencia con isotr\xF3pico:</strong> En material isotr\xF3pico Dx = Dy = D.
      Aqu\xED Dx \u2260 Dy, lo que produce mayor deflexi\xF3n en la direcci\xF3n m\xE1s flexible (Y).</p>

      <h3>3.4 Matriz de Corte (Ds)</h3>
      <p>Para deformaci\xF3n por cortante (teor\xEDa de Mindlin-Reissner):</p>
      ${j(I, "Ds")}

      <div class="formula-box">
        \u03BA = 5/6 (factor de correcci\xF3n de corte)<br>
        ${C("Gxy", `0.5\xB7Ex/(1+\u03BDxy) = 0.5\xB7${s(m)}/(1+${h})`, s(c, 2))} Pa
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
          <td>${f} \xD7 ${f}</td>
        </tr>
        <tr>
          <td>N\xFAmero de nodos</td>
          <td>${D}</td>
        </tr>
        <tr>
          <td>N\xFAmero de elementos</td>
          <td>${O}</td>
        </tr>
        <tr>
          <td>Tipo de elemento</td>
          <td>Tri\xE1ngulo DSG3</td>
        </tr>
        <tr>
          <td>DOF totales</td>
          <td>${D * 3}</td>
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
          <text x="270" y="278" font-size="11">Ex/Ey = ${s(d, 1)}</text>
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
    return H`${et(A)}`;
  }
  const y = {
    a: 10,
    b: 10,
    t: 0.15,
    Ex: 1e10,
    Ey: 5e9,
    nu: 0.25,
    q: -1e3,
    meshDiv: 30
  }, S = 16.903575;
  function at(t, e, o, i) {
    const p = o * e / t, g = 1 - o * p, x = t * Math.pow(i, 3) / (12 * g), m = e * Math.pow(i, 3) / (12 * g), n = o * m, h = 0.5 * t / (1 + o);
    return {
      Dx: x,
      Dy: m,
      Dxy: n,
      Gxy: h,
      nuYX: p
    };
  }
  function ot(t) {
    var _a;
    const { a: e, b: o, t: i, Ex: p, Ey: g, nu: x, q: m, meshDiv: n } = t, h = 0.5 * p / (1 + x), b = [];
    for (let r = 0; r < n; r++) for (let a = 0; a < n; a++) b.push([
      a * e / (n - 1),
      r * o / (n - 1),
      0
    ]);
    const f = [];
    for (let r = 0; r < n - 1; r++) for (let a = 0; a < n - 1; a++) {
      const l = r * n + a, c = l + 1, d = (r + 1) * n + a, v = d + 1;
      f.push([
        l,
        c,
        d
      ]), f.push([
        c,
        v,
        d
      ]);
    }
    const w = {
      supports: /* @__PURE__ */ new Map(),
      loads: /* @__PURE__ */ new Map()
    };
    b.forEach((r, a) => {
      const [l, c] = r;
      (Math.abs(l) < 1e-6 || Math.abs(l - e) < 1e-6 || Math.abs(c) < 1e-6 || Math.abs(c - o) < 1e-6) && w.supports.set(a, [
        true,
        true,
        true,
        false,
        false,
        false
      ]);
    }), f.forEach((r) => {
      const [a, l, c] = r, d = b[a], v = b[l], k = b[c], T = v[0] - d[0], N = v[1] - d[1], R = v[2] - d[2], I = k[0] - d[0], A = k[1] - d[1], G = k[2] - d[2], L = N * G - R * A, _ = R * I - T * G, Y = T * A - N * I, U = Math.sqrt(L * L + _ * _ + Y * Y) / 2, W = m * U / 3;
      [
        a,
        l,
        c
      ].forEach((X) => {
        const $ = w.loads.get(X) || [
          0,
          0,
          0,
          0,
          0,
          0
        ];
        w.loads.set(X, [
          $[0],
          $[1],
          $[2] + W,
          $[3],
          $[4],
          $[5]
        ]);
      });
    });
    const u = {
      elasticities: /* @__PURE__ */ new Map(),
      elasticitiesOrthogonal: /* @__PURE__ */ new Map(),
      shearModuli: /* @__PURE__ */ new Map(),
      poissonsRatios: /* @__PURE__ */ new Map(),
      thicknesses: /* @__PURE__ */ new Map()
    };
    f.forEach((r, a) => {
      u.elasticities.set(a, p), u.elasticitiesOrthogonal.set(a, g), u.shearModuli.set(a, h), u.poissonsRatios.set(a, x), u.thicknesses.set(a, i);
    });
    const M = Q(b, f, w, u);
    let D = 0;
    (_a = M == null ? void 0 : M.deformations) == null ? void 0 : _a.forEach((r) => {
      const a = Math.abs(r[2]);
      a > D && (D = a);
    });
    const O = D * 1e3, z = Math.abs((O - S) / S) * 100, P = at(p, g, x, i);
    return {
      nodes: b,
      elements: f,
      nodeInputs: w,
      elementInputs: u,
      deformOutputs: M,
      w_fem: D,
      w_fem_mm: O,
      w_reference: S,
      error: z,
      numNodes: b.length,
      numElements: f.length,
      params: t,
      orthoInfo: P
    };
  }
  const K = E.state({
    "a [m]": y.a,
    "b [m]": y.b,
    "t [m]": y.t,
    "Ex [Pa]": y.Ex,
    "Ey [Pa]": y.Ey,
    nu: y.nu,
    "q [N/m\xB2]": y.q,
    meshDiv: y.meshDiv
  }), F = E.derive(() => {
    const t = K.val;
    return ot({
      a: t["a [m]"],
      b: t["b [m]"],
      t: t["t [m]"],
      Ex: t["Ex [Pa]"],
      Ey: t["Ey [Pa]"],
      nu: t.nu,
      q: t["q [N/m\xB2]"],
      meshDiv: Math.round(t.meshDiv)
    });
  }), q = E.derive(() => {
    const t = F.val;
    return {
      nodes: E.state(t.nodes),
      elements: E.state(t.elements),
      nodeInputs: E.state(t.nodeInputs),
      elementInputs: E.state(t.elementInputs),
      deformOutputs: E.state(t.deformOutputs),
      validationData: t
    };
  });
  Z({
    mesh: q
  });
  tt({
    parameters: K,
    mesh: q
  });
  J({
    buttons: [
      {
        label: "Validaci\xF3n",
        onClick: () => {
          const t = B({
            template: V,
            data: {
              ...q.val,
              validationData: F.val
            }
          }), e = document.createElement("dialog");
          e.style.cssText = `
          width: 90vw; max-width: 1000px; height: 85vh;
          padding: 0; border: 2px solid #333; border-radius: 8px;
          background: white; overflow: hidden;
        `;
          const o = document.createElement("button");
          o.textContent = "\u2715 Cerrar", o.style.cssText = `
          position: absolute; top: 10px; right: 10px; z-index: 100;
          padding: 8px 16px; cursor: pointer; font-size: 14px;
          background: #e74c3c; color: white; border: none; border-radius: 4px;
        `, o.onclick = () => e.close();
          const i = document.createElement("div");
          i.style.cssText = "height: 100%; overflow: auto; padding: 20px;", i.appendChild(t), e.appendChild(o), e.appendChild(i), document.body.appendChild(e), e.showModal();
        }
      },
      {
        label: "Print",
        onClick: () => {
          const t = B({
            template: V,
            data: {
              ...q.val,
              validationData: F.val
            }
          }), e = window.open("", "_blank");
          e && (e.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
              <title>TEST: Placa Ortotr\xF3pica - Validaci\xF3n</title>
              <style>
                body { font-family: 'Segoe UI', sans-serif; padding: 20px; }
                @media print { button { display: none; } }
              </style>
            </head>
            <body></body>
            </html>
          `), e.document.body.appendChild(t), e.document.close());
        }
      }
    ]
  });
});
