import { v as e, g as c, e as g, b as h, d as w } from "./styles-pZ4aRE4c.js";
import { a as f } from "./analyze-CmnHHflB.js";
import { d as b, __tla as __tla_0 } from "./deformCpp-CS-wCYO-.js";
import { g as M } from "./getParameters-BTFRph3i.js";
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
    length: {
      value: e.state(10),
      min: 1,
      max: 20
    },
    height: {
      value: e.state(10),
      min: 1,
      max: 10
    },
    xLoad: {
      value: e.state(10),
      min: 0,
      max: 10
    }
  }, o = e.state([]), t = e.state([]), m = e.state({}), l = e.state({}), r = e.state({}), u = e.state({});
  e.derive(() => {
    const p = n.length.value.val, i = n.height.value.val, d = n.xLoad.value.val;
    o.val = [
      [
        0,
        0,
        0
      ],
      [
        0,
        0,
        i
      ],
      [
        p,
        0,
        i
      ],
      [
        p,
        0,
        0
      ]
    ], t.val = [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ]
    ], m.val = {
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
          3,
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
      loads: /* @__PURE__ */ new Map([
        [
          2,
          [
            d,
            0,
            0,
            0,
            0,
            0
          ]
        ]
      ])
    }, l.val = {
      elasticities: new Map(t.val.map((s, a) => [
        a,
        10
      ])),
      shearModuli: new Map(t.val.map((s, a) => [
        a,
        10
      ])),
      areas: new Map(t.val.map((s, a) => [
        a,
        10
      ])),
      torsionalConstants: new Map(t.val.map((s, a) => [
        a,
        10
      ])),
      momentsOfInertiaY: new Map(t.val.map((s, a) => [
        a,
        10
      ])),
      momentsOfInertiaZ: new Map(t.val.map((s, a) => [
        a,
        10
      ]))
    }, r.val = b(o.val, t.val, m.val, l.val), u.val = f(o.val, t.val, l.val, r.val);
  });
  const v = {
    nodes: o,
    elements: t,
    nodeInputs: m,
    elementInputs: l,
    deformOutputs: r,
    analyzeOutputs: u
  };
  document.body.append(M(n), c({
    mesh: v,
    settingsObj: {
      deformedShape: true
    }
  }), g(v), h({
    position: "bottom-center"
  }), w({
    sourceCode: "https://github.com/madil4/awatif/blob/main/examples/src/beams/main.ts",
    author: "https://www.linkedin.com/in/madil4/"
  }));
});
