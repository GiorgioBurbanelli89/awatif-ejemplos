import { g as c, v as e, d as f } from "./styles-E_L73LhH.js";
import { a as i } from "./analyze-CmnHHflB.js";
import { d as g, __tla as __tla_0 } from "./deformCpp-CS-wCYO-.js";
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
  const a = [
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
  ], l = 21e7, r = 1e-3, p = 2e4, u = {
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
          p,
          0,
          0,
          0,
          0,
          0
        ]
      ]
    ])
  }, n = {
    elasticities: new Map(t.map((d, s) => [
      s,
      l
    ])),
    areas: new Map(t.map((d, s) => [
      s,
      r
    ]))
  }, m = g(a, t, u, n), x = i(a, t, n, m), o = ((_a = m.deformations) == null ? void 0 : _a.get(0)) || [
    0,
    0,
    0,
    0,
    0,
    0
  ];
  console.log("TEST: Logan 3.9 - 3D Bar System");
  console.log("E =", l / 1e6, "MPa, A =", r * 1e4, "cm\xB2, F =", p / 1e3, "kN");
  console.log("Node 0 displacement:");
  console.log("  Ux =", (o[0] * 1e3).toFixed(4), "mm");
  console.log("  Uy =", (o[1] * 1e3).toFixed(4), "mm");
  console.log("  Uz =", (o[2] * 1e3).toFixed(4), "mm");
  console.log("Expected: Ux=1.384mm, Uy=-0.052mm, Uz=0.060mm");
  document.body.append(c({
    mesh: {
      nodes: e.state(a),
      elements: e.state(t),
      nodeInputs: e.state(u),
      elementInputs: e.state(n),
      deformOutputs: e.state(m),
      analyzeOutputs: e.state(x)
    },
    settingsObj: {
      deformedShape: true,
      loads: true,
      supports: true
    }
  }), f({
    sourceCode: "https://github.com/madil4/awatif/blob/main/awatif-fem/src/deform.test.ts"
  }));
  document.title = "Logan 3.9 - Ux=" + (o[0] * 1e3).toFixed(2) + "mm";
});
