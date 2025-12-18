import { v as t, g as b, e as f, b as w, d as x } from "./styles-CWPU-Lqy.js";
import { d as y, a as M, __tla as __tla_0 } from "./deformCpp-BprT8Kg9.js";
import { g as E } from "./getParameters-COCExR_5.js";
import { g as I } from "./getDialog-Dp-ldI_q.js";
import { g as P, __tla as __tla_1 } from "./getMesh-DmUdekin.js";
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
  const a = {
    ancho: {
      value: t.state(10),
      min: 1,
      max: 30,
      step: 0.5,
      label: "Ancho (B)",
      unit: "length"
    },
    largo: {
      value: t.state(15),
      min: 1,
      max: 30,
      step: 0.5,
      label: "Largo (L)",
      unit: "length"
    },
    espesor: {
      value: t.state(0.2),
      min: 0.05,
      max: 1,
      step: 0.05,
      label: "Espesor (t)",
      unit: "length"
    },
    moduloE: {
      value: t.state(21e4),
      min: 1e4,
      max: 5e5,
      step: 1e3,
      label: "M\xF3dulo E",
      unit: "stress"
    },
    poisson: {
      value: t.state(0.3),
      min: 0.1,
      max: 0.45,
      step: 0.05,
      label: "Poisson (\u03BD)"
    },
    mallado: {
      value: t.state(1),
      min: 0.3,
      max: 3,
      step: 0.1,
      label: "Tama\xF1o malla",
      unit: "length"
    },
    carga: {
      value: t.state(-10),
      min: -50,
      max: 50,
      step: 1,
      label: "Carga uniforme",
      unit: "force"
    }
  }, e = {
    nodes: t.state([]),
    elements: t.state([]),
    nodeInputs: t.state({}),
    elementInputs: t.state({}),
    deformOutputs: t.state({}),
    analyzeOutputs: t.state({})
  };
  t.derive(() => {
    const i = a.ancho.value.val, p = a.largo.value.val, u = a.espesor.value.val, r = a.moduloE.value.val, s = a.poisson.value.val, c = a.mallado.value.val, v = a.carga.value.val, { nodes: m, elements: l, boundaryIndices: h } = P({
      points: [
        [
          0,
          0,
          0
        ],
        [
          i,
          0,
          0
        ],
        [
          i,
          p,
          0
        ],
        [
          0,
          p,
          0
        ]
      ],
      polygon: [
        0,
        1,
        2,
        3
      ],
      maxMeshSize: c
    });
    e.nodeInputs.val = {
      supports: new Map(h.map((n) => [
        n,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])),
      loads: new Map(m.map((n, o) => [
        o,
        [
          0,
          0,
          v,
          0,
          0,
          0
        ]
      ]))
    }, e.nodes.val = m, e.elements.val = l;
    const g = r / (2 * (1 + s));
    e.elementInputs.val = {
      elasticities: new Map(l.map((n, o) => [
        o,
        r
      ])),
      elasticitiesOrthogonal: new Map(l.map((n, o) => [
        o,
        r
      ])),
      thicknesses: new Map(l.map((n, o) => [
        o,
        u
      ])),
      poissonsRatios: new Map(l.map((n, o) => [
        o,
        s
      ])),
      shearModuli: new Map(l.map((n, o) => [
        o,
        g
      ]))
    }, e.deformOutputs.val = y(m, l, e.nodeInputs.val, e.elementInputs.val), e.analyzeOutputs.val = M(m, l, e.elementInputs.val, e.deformOutputs.val);
  });
  const d = t.state(""), B = t.state(void 0);
  t.derive(() => {
    if (d.val === "Print") {
      const i = a.ancho.value.val, p = a.largo.value.val, u = a.espesor.value.val, r = a.moduloE.value.val, s = window.open("", "_blank");
      s && (s.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Plate Shell Thin - Report</title>
          <style>
            body { font-family: 'Segoe UI', Arial, sans-serif; padding: 20px; }
            h1 { color: #333; }
            table { border-collapse: collapse; margin: 20px 0; }
            td, th { border: 1px solid #ccc; padding: 8px 12px; }
            th { background: #f5f5f5; }
          </style>
        </head>
        <body>
          <h1>Placa Rectangular - Shell Thin</h1>
          <h2>Par\xE1metros</h2>
          <table>
            <tr><th>Par\xE1metro</th><th>Valor</th></tr>
            <tr><td>Ancho (B)</td><td>${i}</td></tr>
            <tr><td>Largo (L)</td><td>${p}</td></tr>
            <tr><td>Espesor (t)</td><td>${u}</td></tr>
            <tr><td>M\xF3dulo E</td><td>${r}</td></tr>
          </table>
        </body>
        </html>
      `), s.document.close(), s.focus(), setTimeout(() => s.print(), 500));
    }
  });
  document.body.append(E(a), b({
    mesh: e,
    settingsObj: {
      nodes: false,
      deformedShape: true,
      loads: false,
      shellResults: "displacementZ"
    }
  }), f(e), w({
    position: "bottom-center"
  }), I({
    dialogBody: B
  }), x({
    clickedButton: d,
    buttons: [
      "Print"
    ],
    sourceCode: "https://github.com/GiorgioBurbanelli89/awatif-ejemplos",
    author: "https://github.com/GiorgioBurbanelli89"
  }));
});
