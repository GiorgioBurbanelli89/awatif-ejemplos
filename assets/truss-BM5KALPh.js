import { v as a, g as z, e as M, b as C, d as _ } from "./styles-pZ4aRE4c.js";
import { a as k } from "./analyze-CmnHHflB.js";
import { d as N, __tla as __tla_0 } from "./deformCpp-CS-wCYO-.js";
import { g as j } from "./getParameters-BTFRph3i.js";
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
    span: {
      value: a.state(15),
      min: 5,
      max: 20,
      step: 1,
      label: "span (m)"
    },
    divisions: {
      value: a.state(5),
      min: 2,
      max: 5,
      step: 1
    },
    height: {
      value: a.state(2),
      min: 1,
      max: 5,
      step: 0.1,
      label: "height (m)"
    },
    elasticity: {
      value: a.state(10),
      min: 1,
      max: 250,
      step: 1,
      label: "Elasticity (gpa)"
    },
    area: {
      value: a.state(10),
      min: 1,
      max: 300,
      step: 1,
      label: "area (cm2)"
    },
    load: {
      value: a.state(250),
      min: 1,
      max: 500,
      step: 1,
      label: "load (kN)"
    }
  }, d = a.state([]), v = a.state([]), h = a.state({}), f = a.state({}), g = a.state({}), b = a.state({});
  a.derive(() => {
    const w = n.span.value.val, e = n.divisions.value.val, y = n.height.value.val, x = n.elasticity.value.val * 1e6, S = n.area.value.val * 1e-4, O = n.load.value.val, l = [], s = [], u = w / e, p = [];
    for (let t = 0; t <= e; t++) {
      const o = [
        u * t,
        0,
        0
      ];
      l.push(o), p.push(o);
    }
    for (let t = 0; t <= e; t++) l.push([
      u * t,
      0,
      y
    ]);
    for (let t = 0; t < e; t++) s.push([
      t,
      t + 1
    ]);
    for (let t = 0; t < e; t++) s.push([
      e + 1 + t,
      e + 1 + t + 1
    ]);
    for (let t = 0; t <= e; t++) s.push([
      t,
      e + 1 + t
    ]);
    for (let t = 0; t < e; t++) t < e / 2 ? s.push([
      t,
      e + 1 + t + 1
    ]) : s.push([
      e + 1 + t,
      t + 1
    ]);
    const r = {
      supports: /* @__PURE__ */ new Map([
        [
          0,
          [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        ],
        [
          e,
          [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        ]
      ]),
      loads: new Map(p.map((t, o) => [
        o,
        [
          0,
          0,
          -O,
          0,
          0,
          0
        ]
      ]))
    }, i = {
      elasticities: new Map(s.map((t, o) => [
        o,
        x
      ])),
      areas: new Map(s.map((t, o) => [
        o,
        S
      ]))
    }, m = N(l, s, r, i), I = k(l, s, i, m);
    d.val = l, v.val = s, h.val = r, f.val = i, g.val = m, b.val = I;
  });
  const c = {
    nodes: d,
    elements: v,
    nodeInputs: h,
    elementInputs: f,
    deformOutputs: g,
    analyzeOutputs: b
  };
  document.body.append(j(n), z({
    mesh: c,
    settingsObj: {
      deformedShape: true
    }
  }), M(c), C({
    position: "bottom-center"
  }), _({
    sourceCode: "https://github.com/madil4/awatif/blob/main/examples/src/truss/main.ts",
    author: "https://www.linkedin.com/in/madil4/"
  }));
});
