import { c as $, a as b, v as l, L as T, F as S, g as Z, b as H, d as J } from "./styles-9FDjb-ad.js";
import { a as K } from "./analyze-CmnHHflB.js";
import { d as W, __tla as __tla_0 } from "./deformCpp-CS-wCYO-.js";
import { g as k, r as q } from "./getParameters-agyy6sUI.js";
import "./complex-i8qiIvCl.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const I = {
    length: l.state(3),
    load: l.state(98.0665),
    depth: l.state(0.3),
    width: l.state(0.15)
  };
  let M = $.val, g = b.val;
  const e = {
    length: {
      value: l.state(300),
      min: 0,
      max: 1e3,
      step: 10,
      label: "L (cm)"
    },
    load: {
      value: l.state(10),
      min: 0,
      max: 50,
      step: 1,
      label: "P (tonf)"
    },
    divisions: {
      value: l.state(10),
      min: 1,
      max: 20,
      step: 1,
      label: "n (divisiones)"
    },
    elasticity: {
      value: l.state(210),
      min: 0,
      max: 300,
      step: 10,
      label: "E (GPa)"
    },
    depth: {
      value: l.state(30),
      min: 0,
      max: 60,
      step: 1,
      label: "h (cm)"
    },
    width: {
      value: l.state(15),
      min: 0,
      max: 30,
      step: 1,
      label: "b (cm)"
    }
  };
  function i(t, a) {
    return t / T[a];
  }
  function P(t, a) {
    return t * T[a];
  }
  function f(t, a) {
    return t / S[a];
  }
  function Q(t, a) {
    return t * S[a];
  }
  function X() {
    const t = b.val, a = $.val;
    e.length.value.val = i(I.length.val, t), e.load.value.val = f(I.load.val, a), e.depth.value.val = i(I.depth.val, t), e.width.value.val = i(I.width.val, t), e.length.label = `L (${t})`, e.load.label = `P (${a})`, e.depth.label = `h (${t})`, e.width.label = `b (${t})`, C(t, a);
  }
  function C(t, a) {
    const n = {
      length: {
        min: 0,
        max: 10,
        step: 0.1
      },
      depth: {
        min: 0,
        max: 0.6,
        step: 0.01
      },
      width: {
        min: 0,
        max: 0.3,
        step: 0.01
      }
    }, c = {
      min: 0,
      max: 490,
      step: 9.8
    };
    e.length.min = i(n.length.min, t), e.length.max = i(n.length.max, t), e.length.step = i(n.length.step, t), e.depth.min = i(n.depth.min, t), e.depth.max = i(n.depth.max, t), e.depth.step = i(n.depth.step, t), e.width.min = i(n.width.min, t), e.width.max = i(n.width.max, t), e.width.step = i(n.width.step, t), e.load.min = f(c.min, a), e.load.max = f(c.max, a), e.load.step = f(c.step, a);
  }
  X();
  const R = l.state([]), z = l.state([]), D = l.state({}), A = l.state({}), G = l.state({}), N = l.state({});
  l.derive(() => {
    const t = $.val, a = b.val, n = t !== M, c = a !== g;
    if (n || c) {
      if (console.log(`Units changed: ${M}\u2192${t}, ${g}\u2192${a}`), c) {
        const m = P(e.length.value.val, g), s = P(e.depth.value.val, g), r = P(e.width.value.val, g);
        e.length.value.val = i(m, a), e.depth.value.val = i(s, a), e.width.value.val = i(r, a), e.length.label = `L (${a})`, e.depth.label = `h (${a})`, e.width.label = `b (${a})`;
      }
      if (n) {
        const m = Q(e.load.value.val, M);
        e.load.value.val = f(m, t), e.load.label = `P (${t})`;
      }
      C(a, t), q(), M = t, g = a;
    }
  });
  l.derive(() => {
    var _a, _b, _c, _d, _e, _f;
    const t = T[b.val], a = S[$.val], n = e.length.value.val * t, c = e.load.value.val * a, m = e.elasticity.value.val * 1e6, s = e.depth.value.val * t, r = e.width.value.val * t, d = Math.round(e.divisions.value.val), E = r * s, x = r * s * s * s / 12, U = m / (2 * (1 + 0.3)), B = r * s * s * s * (1 / 3 - 0.21 * (s / r) * (1 - s * s * s * s / (12 * r * r * r * r))), V = n / d, w = [], F = [];
    for (let o = 0; o <= d; o++) w.push([
      o * V,
      0,
      0
    ]);
    for (let o = 0; o < d; o++) F.push([
      o,
      o + 1
    ]);
    const _ = {
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
        ]
      ]),
      loads: /* @__PURE__ */ new Map([
        [
          d,
          [
            0,
            0,
            -c,
            0,
            0,
            0
          ]
        ]
      ])
    }, p = {
      elasticities: /* @__PURE__ */ new Map(),
      shearModuli: /* @__PURE__ */ new Map(),
      areas: /* @__PURE__ */ new Map(),
      torsionalConstants: /* @__PURE__ */ new Map(),
      momentsOfInertiaY: /* @__PURE__ */ new Map(),
      momentsOfInertiaZ: /* @__PURE__ */ new Map()
    };
    for (let o = 0; o < d; o++) (_a = p.elasticities) == null ? void 0 : _a.set(o, m), (_b = p.shearModuli) == null ? void 0 : _b.set(o, U), (_c = p.areas) == null ? void 0 : _c.set(o, E), (_d = p.torsionalConstants) == null ? void 0 : _d.set(o, B), (_e = p.momentsOfInertiaY) == null ? void 0 : _e.set(o, x), (_f = p.momentsOfInertiaZ) == null ? void 0 : _f.set(o, x * (r / s) * (r / s));
    const u = W(w, F, _, p), j = K(w, F, p, u), h = b.val, y = $.val, v = 1 / t, L = 1 / a;
    if (console.log("=".repeat(60)), console.log("CANTILEVER BEAM - AWATIF RESULTS"), console.log(`Units: ${y}, ${h}`), console.log(`Model: ${d} elements, ${d + 1} nodes`), console.log("=".repeat(60)), console.log(`Input: L=${(n * v).toFixed(2)} ${h}, P=${(c * L).toFixed(2)} ${y}`), console.log(`Section: ${(s * v).toFixed(1)}x${(r * v).toFixed(1)} ${h}`), console.log(`E = ${m / 1e6} GPa, A = ${(E * 1e4).toFixed(1)} cm\xB2, I = ${(x * 1e8).toFixed(0)} cm\u2074`), u == null ? void 0 : u.deformations) {
      const o = u.deformations.get(d);
      if (o) {
        console.log(`
Displacements (Node ${d} - Free end):`), console.log(`  Uz = ${(o[2] * v).toFixed(4)} ${h}`);
        const O = c * n * n * n / (3 * m * x);
        console.log(`  Theory: ${(O * v).toFixed(4)} ${h}`);
        const Y = Math.abs((Math.abs(o[2]) - O) / O * 100);
        console.log(`  Error: ${Y.toFixed(2)}%`);
      }
    }
    if (u == null ? void 0 : u.reactions) {
      const o = u.reactions.get(0);
      o && (console.log(`
Reactions (Node 0 - Fixed end):`), console.log(`  Rz = ${(o[2] * L).toFixed(2)} ${y}`), console.log(`  My = ${(o[4] * L * v).toFixed(2)} ${y}\xB7${h}`));
    }
    console.log("=".repeat(60)), R.val = w, z.val = F, D.val = _, A.val = p, G.val = u, N.val = j;
  });
  document.body.append(k(e), Z({
    mesh: {
      nodes: R,
      elements: z,
      nodeInputs: D,
      elementInputs: A,
      deformOutputs: G,
      analyzeOutputs: N
    },
    settingsObj: {
      deformedShape: true
    }
  }), H({
    position: "bottom-center"
  }), J({
    sourceCode: "https://github.com/GiorgioBurbanelli89/awatif-ejemplos/blob/master/cantilever-beam/",
    author: "https://github.com/GiorgioBurbanelli89"
  }));
});
