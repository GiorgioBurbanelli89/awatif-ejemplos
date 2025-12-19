import { v as t, g as i, a as r } from "./styles-Dp6ubQGB.js";
import { d as v, a as d, __tla as __tla_0 } from "./deformCpp-BprT8Kg9.js";
import { g as c } from "./getParameters-C4BmRb7M.js";
import { g, __tla as __tla_1 } from "./getMesh-DmUdekin.js";
import "./complex-i8qiIvCl.js";
import "./__vite-browser-external-D7Ct-6yo.js";
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
  const o = {
    xPosition: {
      value: t.state(15),
      min: 5,
      max: 20
    },
    Ex: {
      value: t.state(100),
      min: 50,
      max: 500
    },
    Ey: {
      value: t.state(100),
      min: 50,
      max: 500
    },
    load: {
      value: t.state(-3),
      min: -10,
      max: 10,
      step: 1
    }
  }, a = {
    nodes: t.state([]),
    elements: t.state([]),
    nodeInputs: t.state({}),
    elementInputs: t.state({}),
    deformOutputs: t.state({}),
    analyzeOutputs: t.state({})
  };
  t.derive(() => {
    const { nodes: l, elements: s, boundaryIndices: p } = g({
      points: [
        [
          0,
          0,
          0
        ],
        [
          15,
          0,
          0
        ],
        [
          o.xPosition.value.val,
          10,
          0
        ],
        [
          0,
          5,
          0
        ]
      ],
      polygon: [
        0,
        1,
        2,
        3
      ],
      maxMeshSize: 0.5
    });
    a.nodeInputs.val = {
      supports: new Map(p.map((n) => [
        n,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])),
      loads: new Map(l.map((n, e) => [
        e,
        [
          0,
          0,
          o.load.value.val,
          0,
          0,
          0
        ]
      ]))
    }, a.nodes.val = l, a.elements.val = s;
    const m = 0.3, u = (o.Ex.value.val + o.Ey.value.val) / 2 / (2 * (1 + m));
    a.elementInputs.val = {
      elasticities: new Map(s.map((n, e) => [
        e,
        o.Ex.value.val
      ])),
      elasticitiesOrthogonal: new Map(s.map((n, e) => [
        e,
        o.Ey.value.val
      ])),
      thicknesses: new Map(s.map((n, e) => [
        e,
        1
      ])),
      poissonsRatios: new Map(s.map((n, e) => [
        e,
        m
      ])),
      shearModuli: new Map(s.map((n, e) => [
        e,
        u
      ]))
    }, a.deformOutputs.val = v(l, s, a.nodeInputs.val, a.elementInputs.val), a.analyzeOutputs.val = d(l, s, a.elementInputs.val, a.deformOutputs.val);
  });
  document.body.append(c(o), i({
    mesh: a,
    settingsObj: {
      nodes: false,
      deformedShape: true,
      loads: false,
      shellResults: "displacementZ"
    }
  }), r({
    sourceCode: "https://github.com/madil4/awatif/blob/main/examples/src/plate/main.ts",
    author: "https://www.linkedin.com/in/mahjoubmusaab/"
  }));
});
