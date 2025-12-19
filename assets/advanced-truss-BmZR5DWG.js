import { v as a, g as re, e as ue, b as ce, d as de } from "./styles-pZ4aRE4c.js";
import { a as me } from "./analyze-CmnHHflB.js";
import { d as fe, __tla as __tla_0 } from "./deformCpp-CS-wCYO-.js";
import { g as ge } from "./getParameters-BTFRph3i.js";
import "./complex-i8qiIvCl.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function V(l, t, u, f, g, v, m, d = 0) {
    const n = Math.round(l / t);
    let c = [], i = [], C = [], T = [], M = [];
    for (let e = 0; e < n + 1; e++) {
      const I = e * t, p = (m - v) / l, s = v + p * I;
      c.push([
        d + I,
        0,
        s
      ]);
    }
    for (let e = 0; e < n + 1; e++) {
      const I = e * t, p = (g - f) / l, s = f + p * I, y = (m - v) / l, S = v + y * I;
      c.push([
        d + I,
        0,
        S + s
      ]), C.push(c.length - 1);
    }
    if (u === 1) for (let e = 0; e < n; e++) i.push([
      e,
      e + 1
    ], [
      n + 1 + e,
      n + 1 + e + 1
    ], [
      e,
      n + 1 + e
    ], [
      e,
      n + 1 + e + 1
    ]), T.push(i.length - 3, i.length - 4), M.push(i.length - 1, i.length - 2);
    if (u === 2) for (let e = 0; e < n; e++) i.push([
      e,
      e + 1
    ], [
      n + 1 + e,
      n + 1 + e + 1
    ], [
      e,
      n + 1 + e
    ], [
      e + 1,
      n + 1 + e
    ]), T.push(i.length - 3, i.length - 4), M.push(i.length - 1, i.length - 2);
    if (u === 3) for (let e = 0; e < n; e++) i.push([
      e,
      e + 1
    ], [
      n + 1 + e,
      n + 1 + e + 1
    ], [
      e,
      n + 1 + e
    ], [
      e,
      n + 1 + e + 1
    ], [
      e + 1,
      n + 1 + e
    ]), T.push(i.length - 4, i.length - 5), M.push(i.length - 1, i.length - 2, i.length - 3);
    return i.push([
      n,
      2 * n + 1
    ]), M.push(i.length - 1), {
      nodes: c,
      elements: i,
      topNodesIndices: C,
      chordsIndices: T,
      websIndices: M
    };
  }
  const r = {
    span: {
      value: a.state(20),
      min: 1,
      max: 20,
      label: "Span (m)",
      folder: "Geometry"
    },
    spacing: {
      value: a.state(2.5),
      min: 1,
      max: 5,
      label: "Spacing (m)",
      folder: "Geometry"
    },
    webType: {
      value: a.state(1),
      min: 1,
      max: 3,
      step: 1,
      label: "Web type",
      folder: "Geometry"
    },
    trimType: {
      value: a.state(1),
      min: 1,
      max: 3,
      step: 1,
      label: "Trim type",
      folder: "Geometry"
    },
    leftHeight: {
      value: a.state(2.5),
      min: 1,
      max: 10,
      step: 0.1,
      label: "Left height (m)",
      folder: "Geometry"
    },
    midHeight: {
      value: a.state(2.5),
      min: 1,
      max: 10,
      step: 0.1,
      label: "Mid height (m)",
      folder: "Geometry"
    },
    rightHeight: {
      value: a.state(2.5),
      min: 1,
      max: 10,
      step: 0.1,
      label: "Right height (m)",
      folder: "Geometry"
    },
    leftOffset: {
      value: a.state(0),
      min: 0,
      max: 10,
      step: 0.1,
      label: "Left offset (m)",
      folder: "Geometry"
    },
    midOffset: {
      value: a.state(5),
      min: 0,
      max: 10,
      step: 0.1,
      label: "Mid offset (m)",
      folder: "Geometry"
    },
    rightOffset: {
      value: a.state(0),
      min: 0,
      max: 10,
      step: 0.1,
      label: "Right offset (m)",
      folder: "Geometry"
    },
    supportType: {
      value: a.state(1),
      min: 1,
      max: 2,
      step: 1,
      label: "Support type",
      folder: "Supports"
    },
    uniformLoad: {
      value: a.state(300),
      min: 0,
      max: 1e3,
      step: 1,
      label: "Uniform load (KN/m)",
      folder: "Loads"
    },
    chordsArea: {
      value: a.state(50),
      min: 1,
      max: 100,
      step: 1,
      label: "Chords area (cm2)",
      folder: "Sections & Materials"
    },
    chordsElasticity: {
      value: a.state(10),
      min: 1,
      max: 250,
      step: 1,
      label: "Chords elasticity (gpa)",
      folder: "Sections & Materials"
    },
    websArea: {
      value: a.state(50),
      min: 1,
      max: 100,
      step: 1,
      label: "Webs area (cm2)",
      folder: "Sections & Materials"
    },
    websElasticity: {
      value: a.state(10),
      min: 1,
      max: 250,
      step: 1,
      label: "Webs elasticity (gpa)",
      folder: "Sections & Materials"
    }
  }, Z = a.state([]), _ = a.state([]), $ = a.state({}), ee = a.state({}), te = a.state({}), se = a.state({});
  a.derive(() => {
    let l = r.span.value.val, t = r.spacing.value.val;
    const u = r.webType.value.val, f = r.trimType.value.val, g = r.leftHeight.value.val, v = r.midHeight.value.val, m = r.rightHeight.value.val, d = r.leftOffset.value.val, n = r.midOffset.value.val, c = r.rightOffset.value.val, i = r.supportType.value.val, C = r.uniformLoad.value.val, T = r.chordsArea.value.val * 1e-4, M = r.chordsElasticity.value.val * 1e6, e = r.websArea.value.val * 1e-4, I = r.websElasticity.value.val * 1e6;
    let p = [], s = [], y = [], S = [], b = [], w = [];
    if (t = l / Math.round(l / t), Math.abs(v - 0.5 * (g + m)) > 0.3 || Math.abs(n - 0.5 * (d + c)) > 0.3) {
      l = l / 2, t = l / Math.round(l / t);
      const o = Math.round((l - 2 * t) / t), h = f >= 2 && o >= 1, W = (g - v) / l, A = g - W * t, x = (d - n) / l, U = d - x * t, { nodes: O, elements: k, topNodesIndices: K, chordsIndices: ne, websIndices: oe } = V(h ? l - t : l, t, u, h ? A : g, v, h ? U : d, n, h ? t : 0);
      p.push(...O), s.push(...k), S.push(...K), b.push(...ne), w.push(...oe);
      const J = (v - m) / l, Q = (n - c) / l;
      let P = u;
      u === 1 && (P = 2), u === 2 && (P = 1);
      const { nodes: z, elements: ae, topNodesIndices: ie, chordsIndices: he, websIndices: pe } = V(h ? l - 2 * t : l - t, t, P, v - J * t, h ? m + J * t : m, n - Q * t, h ? c + Q * t : c, l + t);
      if (b.push(...q(he, s.length)), w.push(...q(pe, s.length)), s.push(...ve(ae, p.length)), S.push(...q(ie, p.length)), p.push(...z), h) {
        p.push([
          0,
          0,
          f == 3 ? g + d : d
        ], [
          2 * l,
          0,
          f == 3 ? m + c : c
        ]), S.push(p.length - 2, p.length - 1);
        const H = (o + 1 + 1) * 2, X = (o + 1) * 2, R = H + X;
        s.push([
          0,
          R
        ], [
          o + 2,
          R
        ], [
          H + o,
          R + 1
        ], [
          H + X - 1,
          R + 1
        ]), b.push(s.length - 1, s.length - 2, s.length - 3, s.length - 4);
      }
      const D = Math.round(h ? (l - 1 * t) / t : l / t), G = D, L = (D + 1) * 2, N = (D + 1) * 2 - 1, E = N + D + 1;
      if (u === 1 && (s.push([
        G,
        L
      ], [
        N,
        E
      ], [
        N,
        L
      ]), b.push(s.length - 3, s.length - 2), w.push(s.length - 1)), u === 2 && (s.push([
        G,
        L
      ], [
        N,
        E
      ], [
        G,
        E
      ]), b.push(s.length - 3, s.length - 2), w.push(s.length - 1)), u === 3 && (s.push([
        G,
        L
      ], [
        N,
        E
      ], [
        G,
        E
      ], [
        N,
        L
      ]), b.push(s.length - 4, s.length - 3), w.push(s.length - 2, s.length - 1)), h) {
        const H = O.length + z.length;
        y.push(H, H + 1);
      } else i === 1 ? y.push(0, O.length + z.length / 2 - 1) : y.push(O.length / 2, O.length + z.length - 1);
    } else {
      const o = Math.round((l - 2 * t) / t), h = f >= 2 && o >= 1, W = (g - m) / l, A = (d - c) / l, { nodes: x, elements: U, topNodesIndices: O, chordsIndices: k, websIndices: K } = V(h ? l - 2 * t : l, t, u, h ? g - W * t : g, h ? m + W * t : m, h ? d - A * t : d, h ? c + A * t : c, h ? t : 0);
      p.push(...x), s.push(...U), S.push(...O), b.push(...k), w.push(...K), h && (p.push([
        0,
        0,
        f == 3 ? g + d : d
      ], [
        l,
        0,
        f == 3 ? m + c : c
      ]), S.push(p.length - 2, p.length - 1), s.push([
        0,
        (o + 1) * 2
      ], [
        o + 1,
        (o + 1) * 2
      ], [
        o,
        (o + 1) * 2 + 1
      ], [
        o * 2 + 1,
        (o + 1) * 2 + 1
      ]), b.push(s.length - 1, s.length - 2, s.length - 3, s.length - 4)), h ? y.push(x.length, x.length + 1) : i === 1 ? y.push(0, x.length / 2 - 1) : y.push(x.length / 2, x.length - 1);
    }
    const B = {
      supports: new Map(y.map((o) => [
        o,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])),
      loads: new Map(S.map((o) => [
        o,
        [
          0,
          0,
          -C * t,
          0,
          0,
          0
        ]
      ]))
    }, j = {
      elasticities: new Map([
        ...b.map((o) => [
          o,
          M
        ]),
        ...w.map((o) => [
          o,
          I
        ])
      ]),
      areas: new Map([
        ...b.map((o) => [
          o,
          T
        ]),
        ...w.map((o) => [
          o,
          e
        ])
      ])
    }, F = fe(p, s, B, j), le = me(p, s, j, F);
    Z.val = p, _.val = s, $.val = B, ee.val = j, te.val = F, se.val = le;
  });
  const Y = {
    nodes: Z,
    elements: _,
    nodeInputs: $,
    elementInputs: ee,
    deformOutputs: te,
    analyzeOutputs: se
  };
  document.body.append(ge(r), re({
    mesh: Y,
    settingsObj: {
      deformedShape: true,
      loads: false
    }
  }), ue(Y), ce({
    position: "bottom-center"
  }), de({
    sourceCode: "https://github.com/madil4/awatif/blob/main/examples/src/advanced-truss/main.ts",
    author: "https://www.linkedin.com/in/madil4/"
  }));
  function ve(l, t) {
    return l.map(([u, f]) => [
      u + t,
      f + t
    ]);
  }
  function q(l, t) {
    return l.map((u) => u + t);
  }
});
