import { x as T, v as r, f as L, h as M, l as C, i as P, j as N, k as R } from "./getReport-CMkXIj08.js";
import { d as k, __tla as __tla_0 } from "./deformCpp-CS-wCYO-.js";
import { g as F } from "./getParameters-B7wiSLGO.js";
import { o as _ } from "./unsafe-html-D1dJDncX.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function w(o) {
    const e = (o == null ? void 0 : o.validation) || {}, p = e.grad_fem ?? 0, d = e.epsilon_analytical ?? 0, c = e.error ?? 0, b = e.Rx_total ?? 0, v = e.F_applied ?? 0, m = e.ux0 ?? 0, i = e.ux1 ?? 0, s = e.params || {}, a = (n, g = 6) => Math.abs(n) < 1e-10 ? "0" : Math.abs(n) > 1e4 || Math.abs(n) < 1e-4 ? n.toExponential(g) : n.toFixed(g), l = c < 0.1, f = `
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
    background: linear-gradient(135deg, ${l ? "#27ae60" : "#e74c3c"} 0%, ${l ? "#2ecc71" : "#c0392b"} 100%);
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
    <div class="param-card"><div class="label">Lado L</div><div class="value">${a(s.L, 2)} m</div></div>
    <div class="param-card"><div class="label">Espesor t</div><div class="value">${a(s.t, 3)} m</div></div>
    <div class="param-card"><div class="label">M\xF3dulo E</div><div class="value">${a(s.E, 0)} Pa</div></div>
    <div class="param-card"><div class="label">Poisson \u03BD</div><div class="value">${a(s.nu, 2)}</div></div>
    <div class="param-card"><div class="label">Tracci\xF3n q</div><div class="value">${a(s.q, 2)} N/m</div></div>
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
    <div class="eq"><var>\u03C3</var><sub>x</sub> = <var>q</var> / <var>t</var> = ${a(s.q, 2)} / ${a(s.t, 3)} = ${a(s.q / s.t)} Pa</div>
    <div class="eq"><var>\u03B5</var><sub>x</sub> = <var>\u03C3</var><sub>x</sub> / <var>E</var> = <var>q</var> / (<var>E</var>\xB7<var>t</var>) = <span class="target">${a(d)}</span> (VALOR OBJETIVO)</div>
    <div class="eq"><var>\u0394u</var> = <var>\u03B5</var><sub>x</sub> \xB7 <var>L</var> = ${a(d)} \xD7 ${a(s.L)} = ${a(d * s.L)} m</div>
  </div>

  <h2>5. Resultados FEM</h2>

  <div class="formula">
    <div class="eq"><var>u</var><sub>x,0</sub> (nodo 0) = <span class="result">${a(m)} m</span></div>
    <div class="eq"><var>u</var><sub>x,1</sub> (nodo 1) = <span class="result">${a(i)} m</span></div>
    <div class="eq"><var>\u03B5</var><sub>x,FEM</sub> = (<var>u</var><sub>1</sub> - <var>u</var><sub>0</sub>) / <var>L</var> = <span class="result">${a(p)}</span></div>
  </div>

  <h3>5.1 Verificaci\xF3n de Equilibrio</h3>

  <div class="formula">
    <div class="eq">Fuerza aplicada total: F = 2 \xD7 (q \xD7 L/2) = <span class="result">${a(v)} N</span></div>
    <div class="eq">Reacci\xF3n total en x: R<sub>x</sub> = <span class="result">${a(b)} N</span></div>
    <div class="eq">Equilibrio: F + R<sub>x</sub> = ${a(v + b)} N \u2248 0 \u2713</div>
  </div>

  <div class="result-box">
    <h2 style="color: white; border: none;">RESULTADO DE VALIDACI\xD3N</h2>
    <div class="big-number">${l ? "\u2713 PASS" : "\u2717 FAIL"}</div>
    <p>Error: ${a(c, 4)}% (tolerancia: 0.1%)</p>
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
        <td class="target">${a(d)}</td>
        <td>${a(p)}</td>
        <td>${a(c, 4)}%</td>
        <td class="${l ? "pass" : "fail"}">${l ? "OK" : "FALLA"}</td>
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
    return T`${_(f)}`;
  }
  const u = {
    L: {
      value: r.state(1),
      min: 0.5,
      max: 5,
      step: 0.5,
      label: "Lado L",
      unit: "length"
    },
    t: {
      value: r.state(0.01),
      min: 1e-3,
      max: 0.1,
      step: 1e-3,
      label: "Espesor t",
      unit: "length"
    },
    E: {
      value: r.state(1e6),
      min: 1e5,
      max: 1e8,
      step: 1e5,
      label: "M\xF3dulo E",
      unit: "stress"
    },
    nu: {
      value: r.state(0.3),
      min: 0.1,
      max: 0.45,
      step: 0.05,
      label: "Poisson \u03BD"
    },
    q: {
      value: r.state(1),
      min: 0.1,
      max: 10,
      step: 0.1,
      label: "Tracci\xF3n q",
      unit: "force"
    }
  }, t = {
    nodes: r.state([]),
    elements: r.state([]),
    nodeInputs: r.state({}),
    elementInputs: r.state({}),
    deformOutputs: r.state({}),
    analyzeOutputs: r.state({})
  };
  let h = {
    grad_fem: 0,
    epsilon_analytical: 0,
    error: 0,
    Rx_total: 0,
    F_applied: 0,
    ux0: 0,
    ux1: 0,
    params: {
      L: 1,
      t: 0.01,
      E: 1e6,
      nu: 0.3,
      q: 1
    }
  };
  r.derive(() => {
    var _a, _b, _c, _d, _e;
    const o = u.L.value.val, e = u.t.value.val, p = u.E.value.val, d = u.nu.value.val, c = u.q.value.val, b = [
      [
        0,
        0,
        0
      ],
      [
        o,
        0,
        0
      ],
      [
        o,
        o,
        0
      ],
      [
        0,
        o,
        0
      ]
    ], v = [
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
    ], m = c * o / 2, i = {
      supports: /* @__PURE__ */ new Map(),
      loads: /* @__PURE__ */ new Map()
    };
    i.loads.set(1, [
      m,
      0,
      0,
      0,
      0,
      0
    ]), i.loads.set(2, [
      m,
      0,
      0,
      0,
      0,
      0
    ]), i.supports.set(0, [
      true,
      true,
      false,
      true,
      true,
      false
    ]), i.supports.set(3, [
      true,
      false,
      false,
      true,
      true,
      false
    ]);
    const s = {
      elasticities: /* @__PURE__ */ new Map(),
      poissonsRatios: /* @__PURE__ */ new Map(),
      thicknesses: /* @__PURE__ */ new Map()
    };
    v.forEach((E, x) => {
      s.elasticities.set(x, p), s.poissonsRatios.set(x, d), s.thicknesses.set(x, e);
    }), t.nodes.val = b, t.elements.val = v, t.nodeInputs.val = i, t.elementInputs.val = s, t.deformOutputs.val = k(b, v, i, s);
    const a = ((_b = (_a = t.deformOutputs.val.deformations) == null ? void 0 : _a.get(0)) == null ? void 0 : _b[0]) ?? 0, l = ((_d = (_c = t.deformOutputs.val.deformations) == null ? void 0 : _c.get(1)) == null ? void 0 : _d[0]) ?? 0, f = l - a, n = c / (p * e), g = Math.abs((f - n) / n) * 100;
    let q = 0;
    (_e = t.deformOutputs.val.reactions) == null ? void 0 : _e.forEach((E) => {
      q += E[0];
    }), h = {
      grad_fem: f,
      epsilon_analytical: n,
      error: g,
      Rx_total: q,
      F_applied: 2 * m,
      ux0: a,
      ux1: l,
      params: {
        L: o,
        t: e,
        E: p,
        nu: d,
        q: c
      }
    };
  });
  const y = r.state(""), $ = r.state(void 0);
  r.derive(() => {
    if (y.val === "Validaci\xF3n" && ($.val = L({
      template: w,
      data: {
        ...t,
        validation: h
      }
    })), y.val === "Print") {
      const o = L({
        template: w,
        data: {
          ...t,
          validation: h
        }
      }), e = window.open("", "_blank");
      e && (e.document.write(`<!DOCTYPE html><html><head><title>TEST: Membrana CST</title></head><body>${(o == null ? void 0 : o.innerHTML) || ""}</body></html>`), e.document.close(), e.focus(), setTimeout(() => e.print(), 500));
    }
  });
  document.body.append(F(u), M({
    mesh: t,
    settingsObj: {
      nodes: true,
      deformedShape: true,
      loads: true
    }
  }), C(t), P({
    position: "bottom-center"
  }), N({
    dialogBody: $
  }), R({
    clickedButton: y,
    buttons: [
      "Validaci\xF3n",
      "Print"
    ],
    sourceCode: "https://github.com/GiorgioBurbanelli89/awatif-ejemplos/tree/master/test-membrane-cst",
    author: "https://github.com/GiorgioBurbanelli89"
  }));
});
