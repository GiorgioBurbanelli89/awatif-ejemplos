import { v as e, q as l, g as c, r as d, d as p } from "./styles-9FDjb-ad.js";
import { g as u } from "./getParameters-agyy6sUI.js";
import { g, __tla as __tla_0 } from "./getMesh-DmUdekin.js";
import { n as b, s as v } from "./pureFunctionsAny.generated-Dh3LO6N2.js";
import "./__vite-browser-external-D7Ct-6yo.js";
import "./complex-i8qiIvCl.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const i = {
    boundary: {
      value: e.state(10),
      min: 1,
      max: 10,
      step: 0.1,
      label: "Boundary point"
    }
  }, a = e.state([]), r = e.state([]), m = e.state([]), n = e.state([
    l(a, r, m)
  ]);
  e.derive(() => {
    const t = [
      i.boundary.value.val,
      0,
      3
    ], { nodes: s, elements: o } = g({
      points: [
        [
          0,
          0,
          0
        ],
        [
          5,
          0,
          0
        ],
        t,
        [
          8,
          0,
          7
        ],
        [
          15,
          0,
          5
        ],
        [
          15,
          0,
          0
        ],
        [
          20,
          0,
          0
        ],
        [
          20,
          0,
          10
        ],
        [
          0,
          0,
          10
        ],
        [
          0,
          0,
          0
        ]
      ],
      polygon: [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8
      ],
      maxMeshSize: 1
    });
    a.val = s, r.val = o, m.val = h(t, a.val), n.val = [
      ...n.rawVal
    ];
  });
  document.body.append(u(i), c({
    mesh: {
      nodes: a,
      elements: r
    },
    objects3D: n
  }), d(m), p({
    sourceCode: "https://github.com/madil4/awatif/blob/main/examples/src/color-map/main.ts",
    author: "https://www.linkedin.com/in/siu-kai-cheung/"
  }));
  function h(t, s) {
    return s.map((o) => b(v(o, t)));
  }
});
