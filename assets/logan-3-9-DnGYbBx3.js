import { v as t, g as $, e as h, b as O, d as w } from "./styles-pZ4aRE4c.js";
import { a as z } from "./analyze-CmnHHflB.js";
import { d as I, __tla as __tla_0 } from "./deformCpp-CS-wCYO-.js";
import { g as N } from "./getParameters-BTFRph3i.js";
import "./complex-i8qiIvCl.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const l = {
    elasticity: {
      value: t.state(210),
      min: 100,
      max: 300,
      step: 10,
      label: "E (GPa)"
    },
    area: {
      value: t.state(10),
      min: 1,
      max: 50,
      step: 1,
      label: "A (cm\xB2)"
    },
    load: {
      value: t.state(20),
      min: 5,
      max: 100,
      step: 5,
      label: "Fx (kN)"
    }
  }, u = t.state([]), d = t.state([]), g = t.state({}), f = t.state({}), v = t.state({}), b = t.state({});
  t.derive(() => {
    const x = l.elasticity.value.val * 1e6, y = l.area.value.val * 1e-4, F = l.load.value.val, n = [
      [
        12,
        -3,
        -4
      ],
      [
        0,
        0,
        0
      ],
      [
        12,
        -3,
        -7
      ],
      [
        14,
        6,
        0
      ]
    ], s = [
      [
        1,
        0
      ],
      [
        2,
        0
      ],
      [
        3,
        0
      ]
    ], m = {
      supports: /* @__PURE__ */ new Map([
        [
          1,
          [
            true,
            true,
            true,
            false,
            false,
            false
          ]
        ],
        [
          2,
          [
            true,
            true,
            true,
            false,
            false,
            false
          ]
        ],
        [
          3,
          [
            true,
            true,
            true,
            false,
            false,
            false
          ]
        ]
      ]),
      loads: /* @__PURE__ */ new Map([
        [
          0,
          [
            F,
            0,
            0,
            0,
            0,
            0
          ]
        ]
      ])
    }, r = {
      elasticities: new Map(s.map((e, o) => [
        o,
        x
      ])),
      areas: new Map(s.map((e, o) => [
        o,
        y
      ]))
    }, a = I(n, s, m, r), i = z(n, s, r, a);
    if (console.log("=".repeat(60)), console.log("LOGAN 3.9 - RESULTS"), console.log("=".repeat(60)), a == null ? void 0 : a.deformations) {
      const e = a.deformations.get(0);
      e && (console.log(`
Displacements Node 0:`), console.log(`  Ux = ${(e[0] * 1e3).toFixed(4)} mm`), console.log(`  Uy = ${(e[1] * 1e3).toFixed(4)} mm`), console.log(`  Uz = ${(e[2] * 1e3).toFixed(4)} mm`));
    }
    (i == null ? void 0 : i.normals) && (console.log(`
Axial Forces:`), i.normals.forEach((e, o) => {
      const c = Array.isArray(e) ? (e[0] + e[1]) / 2 : e, S = c < 0 ? "compression" : "tension";
      console.log(`  E${o}: ${c.toFixed(2)} kN (${S})`);
    })), (a == null ? void 0 : a.reactions) && (console.log(`
Reactions:`), a.reactions.forEach((e, o) => {
      console.log(`  Node ${o}: Rx=${e[0].toFixed(2)}, Ry=${e[1].toFixed(2)}, Rz=${e[2].toFixed(2)} kN`);
    })), console.log("=".repeat(60)), u.val = n, d.val = s, g.val = m, f.val = r, v.val = a, b.val = i;
  });
  const p = {
    nodes: u,
    elements: d,
    nodeInputs: g,
    elementInputs: f,
    deformOutputs: v,
    analyzeOutputs: b
  };
  document.body.append(N(l), $({
    mesh: p,
    settingsObj: {
      deformedShape: true
    }
  }), h(p), O({
    position: "bottom-center"
  }), w({
    sourceCode: "https://github.com/GiorgioBurbanelli89/awatif-ejemplos/blob/master/logan-3-9/",
    author: "https://github.com/GiorgioBurbanelli89"
  }));
});
