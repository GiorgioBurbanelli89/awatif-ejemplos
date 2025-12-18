import { v as t, g as $, a as h } from "./styles-ClHqCtjW.js";
import { d as S, a as O, __tla as __tla_0 } from "./deformCpp-BprT8Kg9.js";
import { g as w } from "./getParameters-C6U2T3MX.js";
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
  }, p = t.state([]), u = t.state([]), d = t.state({}), g = t.state({}), f = t.state({}), v = t.state({});
  t.derive(() => {
    const x = l.elasticity.value.val * 1e6, y = l.area.value.val * 1e-4, b = l.load.value.val, n = [
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
            b,
            0,
            0,
            0,
            0,
            0
          ]
        ]
      ])
    }, r = {
      elasticities: new Map(s.map((e, a) => [
        a,
        x
      ])),
      areas: new Map(s.map((e, a) => [
        a,
        y
      ]))
    }, o = S(n, s, m, r), i = O(n, s, r, o);
    if (console.log("=".repeat(60)), console.log("LOGAN 3.9 - RESULTS"), console.log("=".repeat(60)), o == null ? void 0 : o.deformations) {
      const e = o.deformations.get(0);
      e && (console.log(`
Displacements Node 0:`), console.log(`  Ux = ${(e[0] * 1e3).toFixed(4)} mm`), console.log(`  Uy = ${(e[1] * 1e3).toFixed(4)} mm`), console.log(`  Uz = ${(e[2] * 1e3).toFixed(4)} mm`));
    }
    (i == null ? void 0 : i.normals) && (console.log(`
Axial Forces:`), i.normals.forEach((e, a) => {
      const c = Array.isArray(e) ? (e[0] + e[1]) / 2 : e, F = c < 0 ? "compression" : "tension";
      console.log(`  E${a}: ${c.toFixed(2)} kN (${F})`);
    })), (o == null ? void 0 : o.reactions) && (console.log(`
Reactions:`), o.reactions.forEach((e, a) => {
      console.log(`  Node ${a}: Rx=${e[0].toFixed(2)}, Ry=${e[1].toFixed(2)}, Rz=${e[2].toFixed(2)} kN`);
    })), console.log("=".repeat(60)), p.val = n, u.val = s, d.val = m, g.val = r, f.val = o, v.val = i;
  });
  document.body.append(w(l), $({
    mesh: {
      nodes: p,
      elements: u,
      nodeInputs: d,
      elementInputs: g,
      deformOutputs: f,
      analyzeOutputs: v
    },
    settingsObj: {
      deformedShape: true
    }
  }), h({
    sourceCode: "https://github.com/GiorgioBurbanelli89/awatif-ejemplos/blob/master/logan-3-9/",
    author: "https://github.com/GiorgioBurbanelli89"
  }));
});
