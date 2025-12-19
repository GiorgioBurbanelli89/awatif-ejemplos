import { v as e, g as D, e as L, b as O, d as x } from "./styles-9FDjb-ad.js";
import { g as G } from "./getParameters-agyy6sUI.js";
import { g as H, a as j, b as C, c as T, d as z, __tla as __tla_0 } from "./getSolids-k6IS3eP7.js";
import { __tla as __tla_1 } from "./getMesh-DmUdekin.js";
import "./__vite-browser-external-D7Ct-6yo.js";
import "./complex-i8qiIvCl.js";
import "./pureFunctionsAny.generated-Dh3LO6N2.js";
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
  const f = {
    stories: {
      value: e.state(2),
      min: 1,
      max: 5,
      step: 1
    }
  }, s = {
    points: e.state([]),
    stories: e.state([]),
    columns: e.state([]),
    slabs: e.state([]),
    columnsByStory: e.state(/* @__PURE__ */ new Map()),
    slabsByStory: e.state(/* @__PURE__ */ new Map()),
    columnData: e.state(/* @__PURE__ */ new Map()),
    slabData: e.state(/* @__PURE__ */ new Map())
  }, r = {
    nodes: e.state([]),
    elements: e.state([]),
    nodeInputs: e.state({}),
    elementInputs: e.state({})
  }, p = [
    [
      0,
      0,
      4
    ],
    [
      0,
      10,
      4
    ],
    [
      18,
      10,
      4
    ],
    [
      18,
      0,
      4
    ],
    [
      0,
      0,
      4
    ]
  ], l = [
    [
      0,
      0,
      4
    ],
    [
      0,
      10,
      4
    ],
    [
      18,
      10,
      4
    ],
    [
      18,
      0,
      4
    ],
    [
      6,
      0,
      4
    ],
    [
      6,
      10,
      4
    ]
  ], B = H(), M = j(), b = e.state([
    M
  ]), E = e.state([
    B
  ]);
  e.derive(() => {
    const o = [], m = [], c = [], n = [], v = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map();
    for (let a = 0; a < f.stories.value.val; a++) {
      const u = [], y = 4 * a;
      for (let t = 0; t < p.length; t++) u.push([
        p[t][0],
        p[t][1],
        p[t][2] + y
      ]);
      const w = [];
      let S = o.length;
      for (let t = 0; t < u.length; t++) o.push(u[t]), w.push(t + S);
      c.push(w), m.push(S), d.set(a, [
        a
      ]), h.set(a, {
        analysisInput: {
          areaLoad: 1,
          isOpening: false
        }
      });
      const I = [];
      for (let t = 0; t < l.length; t++) {
        const i = o.length;
        o.push([
          l[t][0],
          l[t][1],
          l[t][2] + y
        ]), n.push(i), I.push(n.length - 1);
      }
      if (a === 0) {
        const t = n.length - l.length;
        for (let i = 0; i < l.length; i++) g.set(t + i, {
          analysisInput: {
            support: [
              true,
              true,
              true,
              true,
              true,
              true
            ]
          }
        });
      }
      v.set(a, I);
    }
    s.points.val = o, s.stories.val = m, s.slabs.val = c, s.columns.val = n, s.columnsByStory.val = v, s.slabsByStory.val = d, s.columnData.val = g, s.slabData.val = h;
  });
  e.derive(() => {
    const { nodes: o, elements: m, nodeInputs: c, elementInputs: n } = C(s.points.val, s.stories.val, s.columns.val, s.slabs.val, s.columnsByStory.val, s.slabsByStory.val, s.columnData.val, s.slabData.val);
    r.nodes.val = o, r.elements.val = m, r.nodeInputs.val = c, r.elementInputs.val = n, M.geometry = T(s.points.val, s.slabs.val, s.columns.val), B.geometry = z(s.points.val, s.slabs.val, s.columns.val), b.val = [
      ...b.rawVal
    ];
  });
  document.body.append(G(f), D({
    objects3D: b,
    solids: E,
    mesh: r,
    settingsObj: {
      nodes: false,
      loads: false
    }
  }), L(r), O({
    position: "bottom-center"
  }), x({
    sourceCode: "https://github.com/madil4/awatif/blob/main/examples/src/building/main.ts",
    author: "https://www.linkedin.com/in/abderrahmane-mazri-4638a81b8/"
  }));
});
