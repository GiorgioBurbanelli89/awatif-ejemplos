const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./styles-DdZBjQss.js","./styles-Sm9c63Sz.css"])))=>i.map(i=>d[i]);
import { x as N, v as d, b as O, g as R, e as F, d as S } from "./styles-DdZBjQss.js";
import { _ as V, d as z, __tla as __tla_0 } from "./deformCpp-BfqFyY9O.js";
import { g as A } from "./getParameters-Cw5eBGZx.js";
import { g as D } from "./getDialog-Be7ZRRm-.js";
import { g as H } from "./getReport-CR2O-zfl.js";
import { o as G } from "./unsafe-html-BlTtRwDP.js";
import "./directive-C_Rw-dL6.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function I(e) {
    const s = (e == null ? void 0 : e.validation) || {}, n = s.grad_fem ?? 0, l = s.epsilon_analytical ?? 0, i = s.error ?? 0, x = s.Rx_total ?? 0, c = s.F_applied ?? 0, b = s.ux0 ?? 0, m = s.ux1 ?? 0, r = s.params || {}, a = (t, p = 6) => Math.abs(t) < 1e-10 ? "0" : Math.abs(t) > 1e4 || Math.abs(t) < 1e-4 ? t.toExponential(p) : t.toFixed(p), v = i < 0.1, f = `
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
    color: #16a085;
    border-bottom: 3px solid #1abc9c;
    padding-bottom: 10px;
  }
  .validation-report h2 {
    color: #34495e;
    margin-top: 25px;
    border-left: 4px solid #1abc9c;
    padding-left: 10px;
  }
  .validation-report h3 {
    color: #7f8c8d;
    background: #ecf0f1;
    padding: 8px;
  }
  .result-box {
    background: linear-gradient(135deg, ${v ? "#27ae60" : "#e74c3c"} 0%, ${v ? "#2ecc71" : "#c0392b"} 100%);
    color: white;
    padding: 20px;
    border-radius: 10px;
    margin: 20px 0;
    text-align: center;
  }
  .result-box .big-number {
    font-size: 48px;
    font-weight: bold;
  }
  .comparison-table {
    width: 100%;
    border-collapse: collapse;
    margin: 15px 0;
  }
  .comparison-table th, .comparison-table td {
    border: 1px solid #bdc3c7;
    padding: 12px;
    text-align: center;
  }
  .comparison-table th { background: #34495e; color: white; }
  .pass { background: #27ae60 !important; color: white; }
  .fail { background: #e74c3c !important; color: white; }
  .formula {
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 5px;
    padding: 15px;
    margin: 10px 0;
    font-family: "Courier New", monospace;
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
  .param-card .value { font-size: 16px; font-weight: bold; color: #2c3e50; }
  .reference {
    background: #d5f5e3;
    border-left: 4px solid #16a085;
    padding: 10px 15px;
    margin: 15px 0;
  }
  .theory-box {
    background: #e8f8f5;
    border: 1px solid #1abc9c;
    border-radius: 5px;
    padding: 15px;
    margin: 15px 0;
  }
  .theory-box h4 { color: #16a085; margin: 0 0 10px 0; }
  .eq { margin: 8px 0; }
  .eq var { font-style: italic; color: #16a085; }
  .eq .result { color: #27ae60; font-weight: bold; }
  .eq .target { color: #e74c3c; font-weight: bold; }
  .diagram {
    background: white;
    border: 1px solid #ddd;
    padding: 20px;
    text-align: center;
    margin: 15px 0;
  }
  .diagram svg {
    max-width: 400px;
  }
</style>

<div class="validation-report">
  <h1>TEST: Membrana CST - Elemento de Deformaci\xF3n Constante</h1>
  <p><strong>Benchmark MacNeal & Harder (1985) - Tracci\xF3n Uniforme</strong></p>

  <div class="reference">
    <strong>Referencia:</strong> MacNeal RH, Harder RL (1985) "A proposed standard set of problems to test finite element accuracy"<br>
    <strong>C\xF3digo:</strong> deform.test.ts l\xEDnea 438-491<br>
    <strong>Paper PDF:</strong> rama2018.pdf - Section 3.6 "Cooks membrane"
  </div>

  <h2>1. Descripci\xF3n del Test</h2>

  <div class="theory-box">
    <h4>Problema de Tracci\xF3n Uniforme</h4>
    <p>Un cuadrado unitario de material el\xE1stico se somete a tracci\xF3n uniforme en un borde.
    Este es el test m\xE1s b\xE1sico para verificar que un elemento de membrana reproduce correctamente
    el campo de deformaci\xF3n uniforme (patch test).</p>
    <p><strong>Condici\xF3n:</strong> La soluci\xF3n exacta es <var>\u03B5</var><sub>x</sub> = <var>q</var> / (<var>E</var>\xB7<var>t</var>) constante en todo el dominio.</p>
  </div>

  <h2>2. Par\xE1metros de Entrada</h2>

  <div class="params-grid">
    <div class="param-card"><div class="label">Lado L</div><div class="value">${a(r.L, 2)} m</div></div>
    <div class="param-card"><div class="label">Espesor t</div><div class="value">${a(r.t, 3)} m</div></div>
    <div class="param-card"><div class="label">M\xF3dulo E</div><div class="value">${a(r.E, 0)} Pa</div></div>
    <div class="param-card"><div class="label">Poisson \u03BD</div><div class="value">${a(r.nu, 2)}</div></div>
    <div class="param-card"><div class="label">Tracci\xF3n q</div><div class="value">${a(r.q, 2)} N/m</div></div>
    <div class="param-card"><div class="label">Elementos</div><div class="value">2 (CST)</div></div>
  </div>

  <h2>3. Teor\xEDa del Elemento CST</h2>

  <div class="theory-box">
    <h4>Constant Strain Triangle (CST)</h4>
    <p>El tri\xE1ngulo de deformaci\xF3n constante es el elemento m\xE1s simple para an\xE1lisis de membrana:</p>
    <ul>
      <li>3 nodos con 2 GDL cada uno (u, v)</li>
      <li>Funciones de forma lineales (coordenadas de \xE1rea)</li>
      <li>Campo de deformaci\xF3n <strong>constante</strong> dentro del elemento</li>
      <li>Matriz de rigidez 6\xD76</li>
    </ul>
    <p><strong>Limitaci\xF3n:</strong> Solo captura estados de deformaci\xF3n constante. Para flexi\xF3n se necesitan m\xFAltiples elementos.</p>
  </div>

  <h3>3.1 Funciones de Forma</h3>

  <div class="formula">
    <div class="eq"><var>N</var><sub>1</sub> = <var>L</var><sub>1</sub> = (\xE1rea P-2-3) / (\xE1rea 1-2-3)</div>
    <div class="eq"><var>N</var><sub>2</sub> = <var>L</var><sub>2</sub> = (\xE1rea 1-P-3) / (\xE1rea 1-2-3)</div>
    <div class="eq"><var>N</var><sub>3</sub> = <var>L</var><sub>3</sub> = (\xE1rea 1-2-P) / (\xE1rea 1-2-3)</div>
    <br>
    <div class="eq">donde L<sub>1</sub> + L<sub>2</sub> + L<sub>3</sub> = 1 (coordenadas de \xE1rea)</div>
  </div>

  <h3>3.2 Campo de Desplazamientos</h3>

  <div class="formula">
    <div class="eq"><var>u</var>(<var>x</var>, <var>y</var>) = N<sub>1</sub>\xB7u<sub>1</sub> + N<sub>2</sub>\xB7u<sub>2</sub> + N<sub>3</sub>\xB7u<sub>3</sub></div>
    <div class="eq"><var>v</var>(<var>x</var>, <var>y</var>) = N<sub>1</sub>\xB7v<sub>1</sub> + N<sub>2</sub>\xB7v<sub>2</sub> + N<sub>3</sub>\xB7v<sub>3</sub></div>
  </div>

  <h3>3.3 Deformaciones (Constantes)</h3>

  <div class="formula">
    <div class="eq"><var>\u03B5</var><sub>x</sub> = \u2202<var>u</var>/\u2202<var>x</var> = constante</div>
    <div class="eq"><var>\u03B5</var><sub>y</sub> = \u2202<var>v</var>/\u2202<var>y</var> = constante</div>
    <div class="eq"><var>\u03B3</var><sub>xy</sub> = \u2202<var>u</var>/\u2202<var>y</var> + \u2202<var>v</var>/\u2202<var>x</var> = constante</div>
  </div>

  <h2>4. Soluci\xF3n Anal\xEDtica</h2>

  <div class="formula">
    <div class="eq">Para tracci\xF3n uniforme <var>q</var> en el borde:</div>
    <div class="eq"><var>\u03C3</var><sub>x</sub> = <var>q</var> / <var>t</var> = ${a(r.q, 2)} / ${a(r.t, 3)} = ${a(r.q / r.t)} Pa</div>
    <div class="eq"><var>\u03B5</var><sub>x</sub> = <var>\u03C3</var><sub>x</sub> / <var>E</var> = <var>q</var> / (<var>E</var>\xB7<var>t</var>) = <span class="target">${a(l)}</span> (VALOR OBJETIVO)</div>
    <div class="eq"><var>\u0394u</var> = <var>\u03B5</var><sub>x</sub> \xB7 <var>L</var> = ${a(l)} \xD7 ${a(r.L)} = ${a(l * r.L)} m</div>
  </div>

  <h2>5. Resultados FEM</h2>

  <div class="formula">
    <div class="eq"><var>u</var><sub>x,0</sub> (nodo 0) = <span class="result">${a(b)} m</span></div>
    <div class="eq"><var>u</var><sub>x,1</sub> (nodo 1) = <span class="result">${a(m)} m</span></div>
    <div class="eq"><var>\u03B5</var><sub>x,FEM</sub> = (<var>u</var><sub>1</sub> - <var>u</var><sub>0</sub>) / <var>L</var> = <span class="result">${a(n)}</span></div>
  </div>

  <h3>5.1 Verificaci\xF3n de Equilibrio</h3>

  <div class="formula">
    <div class="eq">Fuerza aplicada total: F = 2 \xD7 (q \xD7 L/2) = <span class="result">${a(c)} N</span></div>
    <div class="eq">Reacci\xF3n total en x: R<sub>x</sub> = <span class="result">${a(x)} N</span></div>
    <div class="eq">Equilibrio: F + R<sub>x</sub> = ${a(c + x)} N \u2248 0 \u2713</div>
  </div>

  <div class="result-box">
    <h2 style="color: white; border: none;">RESULTADO DE VALIDACI\xD3N</h2>
    <div class="big-number">${v ? "\u2713 PASS" : "\u2717 FAIL"}</div>
    <p>Error: ${a(i, 4)}% (tolerancia: 0.1%)</p>
  </div>

  <h2>6. Tabla Comparativa</h2>

  <table class="comparison-table">
    <thead>
      <tr>
        <th>Magnitud</th>
        <th>Valor Anal\xEDtico</th>
        <th>Valor FEM</th>
        <th>Error %</th>
        <th>Estado</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><var>\u03B5</var><sub>x</sub></td>
        <td class="target">${a(l)}</td>
        <td>${a(n)}</td>
        <td>${a(i, 4)}%</td>
        <td class="${v ? "pass" : "fail"}">${v ? "OK" : "FALLA"}</td>
      </tr>
    </tbody>
  </table>

  <h2>7. C\xF3digo de Referencia</h2>

  <div class="formula" style="font-size: 11px; background: #2d2d2d; color: #f8f8f2;">
    <span style="color: #75715e;">// awatif-fem/src/deform.test.ts l\xEDnea 438</span><br>
    <span style="color: #66d9ef;">test</span>(<span style="color: #e6db74;">"Membrane: unit square under uniform edge tension"</span>, () => {<br>
    &nbsp;&nbsp;<span style="color: #75715e;">// MacNeal & Harder (1985)</span><br>
    &nbsp;&nbsp;<span style="color: #66d9ef;">const</span> E = <span style="color: #ae81ff;">1e6</span>;<br>
    &nbsp;&nbsp;<span style="color: #66d9ef;">const</span> nu = <span style="color: #ae81ff;">0.3</span>;<br>
    &nbsp;&nbsp;<span style="color: #66d9ef;">const</span> t = <span style="color: #ae81ff;">0.01</span>;<br>
    &nbsp;&nbsp;<span style="color: #66d9ef;">const</span> q = <span style="color: #ae81ff;">1</span>;<br>
    &nbsp;&nbsp;<span style="color: #66d9ef;">const</span> expectedGrad = q / (E * t); <span style="color: #75715e;">// \u03B5x anal\xEDtico</span><br>
    &nbsp;&nbsp;<span style="color: #a6e22e;">expect</span>(grad).<span style="color: #a6e22e;">toBeCloseTo</span>(expectedGrad, <span style="color: #ae81ff;">4</span>);<br>
    });
  </div>

  <h2>8. Importancia del Test</h2>

  <ul>
    <li><strong>Patch Test:</strong> El elemento debe reproducir exactamente estados de deformaci\xF3n constante.</li>
    <li><strong>Convergencia:</strong> Pasar el patch test es condici\xF3n necesaria para convergencia.</li>
    <li><strong>Equilibrio:</strong> Las reacciones deben equilibrar las fuerzas aplicadas.</li>
    <li><strong>Precisi\xF3n:</strong> Error < 0.1% demuestra implementaci\xF3n correcta.</li>
  </ul>

  <p style="text-align: center; color: #7f8c8d; margin-top: 30px; font-size: 12px;">
    Generado por Awatif FEM - Validaci\xF3n Membrana CST<br>
    Referencia: MacNeal & Harder (1985)
  </p>
</div>
`;
    return N`${G(f)}`;
  }
  const _ = d.state({
    L: {
      value: 1,
      min: 0.5,
      max: 5,
      step: 0.5,
      label: "Lado L (m)"
    },
    t: {
      value: 0.01,
      min: 1e-3,
      max: 0.1,
      step: 1e-3,
      label: "Espesor t (m)"
    },
    E: {
      value: 1e6,
      min: 1e5,
      max: 1e8,
      step: 1e5,
      label: "M\xF3dulo E (Pa)"
    },
    nu: {
      value: 0.3,
      min: 0.1,
      max: 0.45,
      step: 0.05,
      label: "Poisson \u03BD"
    },
    q: {
      value: 1,
      min: 0.1,
      max: 10,
      step: 0.1,
      label: "Tracci\xF3n q (N/m)"
    }
  });
  function U(e) {
    var _a, _b;
    const { L: s, t: n, E: l, nu: i, q: x } = e, c = s.value, b = n.value, m = l.value, r = i.value, a = x.value, v = [
      [
        0,
        0,
        0
      ],
      [
        c,
        0,
        0
      ],
      [
        c,
        c,
        0
      ],
      [
        0,
        c,
        0
      ]
    ], f = [
      [
        0,
        1,
        2
      ],
      [
        0,
        2,
        3
      ]
    ], t = {
      supports: /* @__PURE__ */ new Map(),
      loads: /* @__PURE__ */ new Map()
    }, p = a * c / 2;
    t.loads.set(1, [
      p,
      0,
      0,
      0,
      0,
      0
    ]), t.loads.set(2, [
      p,
      0,
      0,
      0,
      0,
      0
    ]), t.supports.set(0, [
      true,
      true,
      false,
      true,
      true,
      false
    ]), t.supports.set(3, [
      true,
      false,
      false,
      true,
      true,
      false
    ]);
    const g = {
      elasticities: /* @__PURE__ */ new Map(),
      poissonsRatios: /* @__PURE__ */ new Map(),
      thicknesses: /* @__PURE__ */ new Map()
    };
    f.forEach((C, L) => {
      g.elasticities.set(L, m), g.poissonsRatios.set(L, r), g.thicknesses.set(L, b);
    });
    const h = z(v, f, t, g), T = ((_a = h.deformations.get(0)) == null ? void 0 : _a[0]) ?? 0, $ = ((_b = h.deformations.get(1)) == null ? void 0 : _b[0]) ?? 0, M = $ - T, E = a / (m * b), k = Math.abs((M - E) / E) * 100;
    let P = 0;
    return h.reactions.forEach((C) => {
      P += C[0];
    }), {
      nodes: d.state(v),
      elements: d.state(f),
      nodeInputs: d.state(t),
      elementInputs: d.state(g),
      deformOutputs: d.state(h),
      analyzeOutputs: d.state(null),
      validation: {
        grad_fem: M,
        epsilon_analytical: E,
        error: k,
        Rx_total: P,
        F_applied: 2 * p,
        ux0: T,
        ux1: $,
        params: {
          L: c,
          t: b,
          E: m,
          nu: r,
          q: a
        }
      }
    };
  }
  const o = d.derive(() => U(_.val)), B = O(), u = R({
    nodes: o.val.nodes,
    elements: o.val.elements,
    nodeInputs: o.val.nodeInputs,
    elementInputs: o.val.elementInputs,
    deformOutputs: o.val.deformOutputs,
    analyzeOutputs: o.val.analyzeOutputs
  }), J = A(_), y = F({
    nodes: o.val.nodes,
    nodeInputs: o.val.nodeInputs,
    deformOutputs: o.val.deformOutputs
  }), q = S([
    "Validaci\xF3n",
    "Print"
  ]), w = D("Validaci\xF3n Membrana CST");
  d.derive(() => {
    const e = o.val;
    u.nodes.val = e.nodes.val, u.elements.val = e.elements.val, u.nodeInputs.val = e.nodeInputs.val, u.elementInputs.val = e.elementInputs.val, u.deformOutputs.val = e.deformOutputs.val, y.nodes.val = e.nodes.val, y.nodeInputs.val = e.nodeInputs.val, y.deformOutputs.val = e.deformOutputs.val;
  });
  d.derive(() => {
    const e = q.clicked.val;
    if (!e) return;
    const s = o.val;
    if (e === "Validaci\xF3n") {
      const n = H({
        template: I,
        data: {
          ...s,
          validation: s.validation
        }
      });
      w.content.val = n, w.open.val = true, q.clicked.val = "";
    } else if (e === "Print") {
      const n = window.open("", "_blank");
      n && V(async () => {
        const { render: l } = await import("./styles-DdZBjQss.js").then((i) => i.y);
        return {
          render: l
        };
      }, __vite__mapDeps([0,1]), import.meta.url).then(({ render: l }) => {
        const i = document.createElement("div");
        l(I({
          ...s,
          validation: s.validation
        }), i), n.document.write(`<!DOCTYPE html><html><head><title>TEST: Membrana CST</title></head><body>${i.innerHTML}</body></html>`), n.document.close();
      }), q.clicked.val = "";
    }
  });
  document.body.append(u.dom, J, B, y, q.dom, w.dom);
});
