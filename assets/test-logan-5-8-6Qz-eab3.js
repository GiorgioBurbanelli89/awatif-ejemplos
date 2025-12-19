import { g as l, v as o, d as c } from "./styles-9FDjb-ad.js";
import { a as i } from "./analyze-CmnHHflB.js";
import { d as f, __tla as __tla_0 } from "./deformCpp-CS-wCYO-.js";
import "./complex-i8qiIvCl.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var _a;
  const s = [
    [
      2.5,
      0,
      0
    ],
    [
      0,
      0,
      0
    ],
    [
      2.5,
      0,
      -2.5
    ],
    [
      2.5,
      -2.5,
      0
    ]
  ], t = [
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
  ], p = 2e11, u = 6e10, g = 625e-5, w = 4e-5, M = 4e-5, y = 2e-5, I = -2e5, x = -1e5, d = {
    supports: /* @__PURE__ */ new Map([
      [
        1,
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
        2,
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
        0,
        [
          0,
          I,
          0,
          x,
          0,
          0
        ]
      ]
    ])
  }, n = {
    elasticities: new Map(t.map((a, e) => [
      e,
      p
    ])),
    shearModuli: new Map(t.map((a, e) => [
      e,
      u
    ])),
    areas: new Map(t.map((a, e) => [
      e,
      g
    ])),
    momentsOfInertiaY: new Map(t.map((a, e) => [
      e,
      w
    ])),
    momentsOfInertiaZ: new Map(t.map((a, e) => [
      e,
      M
    ])),
    torsionalConstants: new Map(t.map((a, e) => [
      e,
      y
    ]))
  }, r = f(s, t, d, n), O = i(s, t, n, r), m = ((_a = r.deformations) == null ? void 0 : _a.get(0)) || [
    0,
    0,
    0,
    0,
    0,
    0
  ];
  console.log("TEST: Logan 5.8 - 3D Space Frame");
  console.log("E =", p / 1e9, "GPa, G =", u / 1e9, "GPa");
  console.log("Node 0 displacement:");
  console.log("  Uy =", (m[1] * 1e3).toFixed(4), "mm (expected: -0.336 mm)");
  console.log("  Rx =", (m[3] * 1e3).toFixed(4), "mrad (expected: -3.75 mrad)");
  document.body.append(l({
    mesh: {
      nodes: o.state(s),
      elements: o.state(t),
      nodeInputs: o.state(d),
      elementInputs: o.state(n),
      deformOutputs: o.state(r),
      analyzeOutputs: o.state(O)
    },
    settingsObj: {
      deformedShape: true,
      loads: true,
      supports: true
    }
  }), c({
    sourceCode: "https://github.com/madil4/awatif/blob/main/awatif-fem/src/deform.test.ts"
  }));
  document.title = "Logan 5.8 - Uy=" + (m[1] * 1e3).toFixed(2) + "mm";
});
