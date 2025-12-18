import { v as e, g as z, e as S, b as O, d as I } from "./styles-CWPU-Lqy.js";
import { d as M, a as k, __tla as __tla_0 } from "./deformCpp-BprT8Kg9.js";
import { g as C } from "./getParameters-COCExR_5.js";
import "./complex-i8qiIvCl.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const n = {
    dx: {
      value: e.state(2),
      min: 1,
      max: 5,
      step: 0.1,
      label: "dx (m)"
    },
    dy: {
      value: e.state(2),
      min: 1,
      max: 5,
      step: 0.1,
      label: "dy (m)"
    },
    dz: {
      value: e.state(2),
      min: 1,
      max: 5,
      step: 0.1,
      label: "dz (m)"
    },
    divisions: {
      value: e.state(4),
      min: 1,
      max: 10,
      step: 1
    },
    load: {
      value: e.state(30),
      min: 1,
      max: 50,
      step: 0.5,
      label: "load (kN)"
    }
  }, f = e.state([]), h = e.state([]), b = e.state({}), g = e.state({}), x = e.state({}), w = e.state({});
  e.derive(() => {
    const d = n.dx.value.val, i = n.dy.value.val, o = n.dz.value.val, l = n.divisions.value.val;
    let s = [], a = [];
    for (let t = 0; t <= l; t++) s.push([
      0,
      0,
      o * t
    ], [
      d,
      0,
      o * t
    ], [
      d,
      i,
      o * t
    ], [
      0,
      i,
      o * t
    ]);
    s = s.map((t) => [
      6 + t[0],
      6 + t[1],
      t[2]
    ]);
    for (let t = 0; t < l * 4; ) t += 4, a.push([
      t,
      t + 1
    ], [
      t + 1,
      t + 2
    ], [
      t + 2,
      t + 3
    ], [
      t + 3,
      t
    ]), a.push([
      t,
      t + 2
    ]);
    for (let t = 0; t < l * 4; t++) a.push([
      t,
      t + 4
    ]);
    for (let t = 0; t < l * 4; t += 4) a.push([
      t,
      t + 5
    ], [
      t + 3,
      t + 6
    ]), a.push([
      t,
      t + 7
    ], [
      t + 1,
      t + 6
    ]);
    const u = [
      true,
      true,
      true,
      true,
      true,
      true
    ], r = {
      supports: /* @__PURE__ */ new Map([
        [
          0,
          u
        ],
        [
          1,
          u
        ],
        [
          2,
          u
        ],
        [
          3,
          u
        ]
      ]),
      loads: /* @__PURE__ */ new Map([
        [
          s.length - 2,
          [
            n.load.value.val,
            0,
            0,
            0,
            0,
            0
          ]
        ]
      ])
    }, m = {
      elasticities: new Map(a.map((t, p) => [
        p,
        100
      ])),
      areas: new Map(a.map((t, p) => [
        p,
        10
      ]))
    }, c = M(s, a, r, m), y = k(s, a, m, c);
    f.val = s, h.val = a, b.val = r, g.val = m, x.val = c, w.val = y;
  });
  const v = {
    nodes: f,
    elements: h,
    nodeInputs: b,
    elementInputs: g,
    deformOutputs: x,
    analyzeOutputs: w
  };
  document.body.append(C(n), z({
    mesh: v,
    settingsObj: {
      deformedShape: true,
      gridSize: 15
    }
  }), S(v), O({
    position: "bottom-center"
  }), I({
    sourceCode: "https://github.com/madil4/awatif/blob/main/examples/src/3d-structure/main.ts",
    author: "https://www.linkedin.com/in/madil4/"
  }));
});
