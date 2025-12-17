import { v as t, g as $, a as h } from "./styles-CHgmIz-C.js";
import { d as F, a as S, __tla as __tla_0 } from "./deformCpp-BprT8Kg9.js";
import { g as O } from "./getParameters-CL7Q-jKZ.js";
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
  }, c = t.state([]), p = t.state([]), u = t.state({}), d = t.state({}), f = t.state({}), g = t.state({});
  t.derive(() => {
    const v = l.elasticity.value.val * 1e6, x = l.area.value.val * 1e-4, b = l.load.value.val, n = [
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
      elasticities: new Map(s.map((e, o) => [
        o,
        v
      ])),
      areas: new Map(s.map((e, o) => [
        o,
        x
      ]))
    }, a = F(n, s, m, r), i = S(n, s, r, a);
    if (console.log("=".repeat(60)), console.log("LOGAN 3.9 - RESULTS"), console.log("=".repeat(60)), a == null ? void 0 : a.deformations) {
      const e = a.deformations.get(0);
      e && (console.log(`
Displacements Node 0:`), console.log(`  Ux = ${(e[0] * 1e3).toFixed(4)} mm`), console.log(`  Uy = ${(e[1] * 1e3).toFixed(4)} mm`), console.log(`  Uz = ${(e[2] * 1e3).toFixed(4)} mm`));
    }
    (i == null ? void 0 : i.normals) && (console.log(`
Axial Forces:`), i.normals.forEach((e, o) => {
      const y = e < 0 ? "compression" : "tension";
      console.log(`  E${o}: ${e.toFixed(2)} kN (${y})`);
    })), (a == null ? void 0 : a.reactions) && (console.log(`
Reactions:`), a.reactions.forEach((e, o) => {
      console.log(`  Node ${o}: Rx=${e[0].toFixed(2)}, Ry=${e[1].toFixed(2)}, Rz=${e[2].toFixed(2)} kN`);
    })), console.log("=".repeat(60)), c.val = n, p.val = s, u.val = m, d.val = r, f.val = a, g.val = i;
  });
  document.body.append(O(l), $({
    mesh: {
      nodes: c,
      elements: p,
      nodeInputs: u,
      elementInputs: d,
      deformOutputs: f,
      analyzeOutputs: g
    },
    settingsObj: {
      deformedShape: true
    }
  }), h({
    sourceCode: "https://github.com/GiorgioBurbanelli89/awatif-ejemplos/blob/master/logan-3-9/",
    author: "https://github.com/GiorgioBurbanelli89"
  }));
});
