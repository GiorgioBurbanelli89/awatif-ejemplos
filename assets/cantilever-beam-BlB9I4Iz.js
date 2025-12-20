import { g as at, a as ot, c as w, b as G, x as A, d as M, e as L, v as s, L as B, F as k, f as D, h as lt, i as nt, j as st, k as dt } from "./getReport-CnIkx0ml.js";
import { a as it } from "./analyze-CmnHHflB.js";
import { d as rt, __tla as __tla_0 } from "./deformCpp-CS-wCYO-.js";
import { g as pt, r as ct } from "./getParameters-Ce3duQQe.js";
import "./complex-i8qiIvCl.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const S = (t) => `<var>${t}</var>`, z = (t) => `<span class="eq">${t}</span>`, u = (t, e = 4) => t.toFixed(e);
  function N(t) {
    var _a, _b, _c, _d;
    const e = ((_a = t.nodes) == null ? void 0 : _a.val) || [], n = ((_b = t.elements) == null ? void 0 : _b.val) || [], d = (_c = t.deformOutputs) == null ? void 0 : _c.val, i = at(), o = ot();
    let r = 0, c = 0;
    (d == null ? void 0 : d.deformations) && d.deformations.forEach((m, g) => {
      Math.abs(m[2]) > Math.abs(r) && (r = m[2], c = g);
    });
    const $ = ((_d = d == null ? void 0 : d.reactions) == null ? void 0 : _d.get(0)) || [
      0,
      0,
      0,
      0,
      0,
      0
    ];
    return A`
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 900px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #333; border-bottom: 2px solid #0066cc;">Cantilever Beam Analysis Report</h1>
      <p style="color: #666; font-style: italic;">Validated against SAP2000 - Error &lt; 0.3%</p>

      <h2>Model Information</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr style="background: #f5f5f5;">
          <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Parameter</th>
          <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Value</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Total Nodes</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${e.length}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Total Elements</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${n.length}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Beam Length</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${e.length > 0 ? u(w(e[e.length - 1][0]), 2) : "0"} ${i}</td>
        </tr>
      </table>

      <h2>Results</h2>

      <h3>Maximum Deflection (Free End)</h3>
      <p style="font-size: 18px; background: #f0f8ff; padding: 15px; border-radius: 8px;">
        ${z(`${S("\u03B4")}<sub>max</sub> = <b style='color:#0066cc;'>${u(w(r), 6)} ${i}</b>`)}
        at Node ${c}
      </p>

      <h3>Reactions (Fixed End - Node 0)</h3>
      <div style="background: #fff0f0; padding: 15px; border-radius: 8px;">
        <p style="font-size: 16px; margin: 5px 0;">
          ${z(`${S("R")}<sub>z</sub> = <b style='color:#cc0000;'>${u(G($[2]), 2)} ${o}</b>`)}
        </p>
        <p style="font-size: 16px; margin: 5px 0;">
          ${z(`${S("M")}<sub>y</sub> = <b style='color:#cc0000;'>${u(G($[4]) * w(1), 2)} ${o}\xB7${i}</b>`)}
        </p>
      </div>

      ${(d == null ? void 0 : d.deformations) ? A`
        <h3>Nodal Displacements</h3>
        <table style="border-collapse: collapse; width: 100%;">
          <tr style="background: #f5f5f5;">
            <th style="border: 1px solid #ddd; padding: 8px;">Node</th>
            <th style="border: 1px solid #ddd; padding: 8px;">X (${i})</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Uz (${i})</th>
            <th style="border: 1px solid #ddd; padding: 8px;">θy (rad)</th>
          </tr>
          ${Array.from(d.deformations.entries()).map(([m, g]) => A`
              <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">${m}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">${e[m] ? u(w(e[m][0]), 2) : "0"}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">${u(w(g[2]), 6)}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">${u(g[4], 6)}</td>
              </tr>
            `)}
        </table>
      ` : ""}

      <hr style="margin-top: 30px;">
      <p style="font-size: 11px; color: #666;">Generated with Awatif - Cantilever Beam Analysis</p>
    </div>
  `;
  }
  const I = {
    length: s.state(3),
    load: s.state(98.0665),
    depth: s.state(0.3),
    width: s.state(0.15)
  };
  let O = M.val, b = L.val;
  const a = {
    length: {
      value: s.state(300),
      min: 0,
      max: 1e3,
      step: 10,
      label: "L (cm)"
    },
    load: {
      value: s.state(10),
      min: 0,
      max: 50,
      step: 1,
      label: "P (tonf)"
    },
    divisions: {
      value: s.state(10),
      min: 1,
      max: 20,
      step: 1,
      label: "n (divisiones)"
    },
    elasticity: {
      value: s.state(210),
      min: 0,
      max: 300,
      step: 10,
      label: "E (GPa)"
    },
    depth: {
      value: s.state(30),
      min: 0,
      max: 60,
      step: 1,
      label: "h (cm)"
    },
    width: {
      value: s.state(15),
      min: 0,
      max: 30,
      step: 1,
      label: "b (cm)"
    }
  };
  function p(t, e) {
    return t / B[e];
  }
  function _(t, e) {
    return t * B[e];
  }
  function F(t, e) {
    return t / k[e];
  }
  function mt(t, e) {
    return t * k[e];
  }
  function ht() {
    const t = L.val, e = M.val;
    a.length.value.val = p(I.length.val, t), a.load.value.val = F(I.load.val, e), a.depth.value.val = p(I.depth.val, t), a.width.value.val = p(I.width.val, t), a.length.label = `L (${t})`, a.load.label = `P (${e})`, a.depth.label = `h (${t})`, a.width.label = `b (${t})`, j(t, e);
  }
  function j(t, e) {
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
    }, d = {
      min: 0,
      max: 490,
      step: 9.8
    };
    a.length.min = p(n.length.min, t), a.length.max = p(n.length.max, t), a.length.step = p(n.length.step, t), a.depth.min = p(n.depth.min, t), a.depth.max = p(n.depth.max, t), a.depth.step = p(n.depth.step, t), a.width.min = p(n.width.min, t), a.width.max = p(n.width.max, t), a.width.step = p(n.width.step, t), a.load.min = F(d.min, e), a.load.max = F(d.max, e), a.load.step = F(d.step, e);
  }
  ht();
  const V = s.state([]), Y = s.state([]), q = s.state({}), W = s.state({}), Z = s.state({}), J = s.state({});
  s.derive(() => {
    const t = M.val, e = L.val, n = t !== O, d = e !== b;
    if (n || d) {
      if (console.log(`Units changed: ${O}\u2192${t}, ${b}\u2192${e}`), d) {
        const i = _(a.length.value.val, b), o = _(a.depth.value.val, b), r = _(a.width.value.val, b);
        a.length.value.val = p(i, e), a.depth.value.val = p(o, e), a.width.value.val = p(r, e), a.length.label = `L (${e})`, a.depth.label = `h (${e})`, a.width.label = `b (${e})`;
      }
      if (n) {
        const i = mt(a.load.value.val, O);
        a.load.value.val = F(i, t), a.load.label = `P (${t})`;
      }
      j(e, t), ct(), O = t, b = e;
    }
  });
  s.derive(() => {
    var _a, _b, _c, _d, _e, _f;
    const t = B[L.val], e = k[M.val], n = a.length.value.val * t, d = a.load.value.val * e, i = a.elasticity.value.val * 1e6, o = a.depth.value.val * t, r = a.width.value.val * t, c = Math.round(a.divisions.value.val), $ = r * o, m = r * o * o * o / 12, g = i / (2 * (1 + 0.3)), X = r * o * o * o * (1 / 3 - 0.21 * (o / r) * (1 - o * o * o * o / (12 * r * r * r * r))), Q = n / c, T = [], R = [];
    for (let l = 0; l <= c; l++) T.push([
      l * Q,
      0,
      0
    ]);
    for (let l = 0; l < c; l++) R.push([
      l,
      l + 1
    ]);
    const H = {
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
          c,
          [
            0,
            0,
            -d,
            0,
            0,
            0
          ]
        ]
      ])
    }, h = {
      elasticities: /* @__PURE__ */ new Map(),
      shearModuli: /* @__PURE__ */ new Map(),
      areas: /* @__PURE__ */ new Map(),
      torsionalConstants: /* @__PURE__ */ new Map(),
      momentsOfInertiaY: /* @__PURE__ */ new Map(),
      momentsOfInertiaZ: /* @__PURE__ */ new Map()
    };
    for (let l = 0; l < c; l++) (_a = h.elasticities) == null ? void 0 : _a.set(l, i), (_b = h.shearModuli) == null ? void 0 : _b.set(l, g), (_c = h.areas) == null ? void 0 : _c.set(l, $), (_d = h.torsionalConstants) == null ? void 0 : _d.set(l, X), (_e = h.momentsOfInertiaY) == null ? void 0 : _e.set(l, m), (_f = h.momentsOfInertiaZ) == null ? void 0 : _f.set(l, m * (r / o) * (r / o));
    const v = rt(T, R, H, h), tt = it(T, R, h, v), f = L.val, E = M.val, x = 1 / t, P = 1 / e;
    if (console.log("=".repeat(60)), console.log("CANTILEVER BEAM - AWATIF RESULTS"), console.log(`Units: ${E}, ${f}`), console.log(`Model: ${c} elements, ${c + 1} nodes`), console.log("=".repeat(60)), console.log(`Input: L=${(n * x).toFixed(2)} ${f}, P=${(d * P).toFixed(2)} ${E}`), console.log(`Section: ${(o * x).toFixed(1)}x${(r * x).toFixed(1)} ${f}`), console.log(`E = ${i / 1e6} GPa, A = ${($ * 1e4).toFixed(1)} cm\xB2, I = ${(m * 1e8).toFixed(0)} cm\u2074`), v == null ? void 0 : v.deformations) {
      const l = v.deformations.get(c);
      if (l) {
        console.log(`
Displacements (Node ${c} - Free end):`), console.log(`  Uz = ${(l[2] * x).toFixed(4)} ${f}`);
        const U = d * n * n * n / (3 * i * m);
        console.log(`  Theory: ${(U * x).toFixed(4)} ${f}`);
        const et = Math.abs((Math.abs(l[2]) - U) / U * 100);
        console.log(`  Error: ${et.toFixed(2)}%`);
      }
    }
    if (v == null ? void 0 : v.reactions) {
      const l = v.reactions.get(0);
      l && (console.log(`
Reactions (Node 0 - Fixed end):`), console.log(`  Rz = ${(l[2] * P).toFixed(2)} ${E}`), console.log(`  My = ${(l[4] * P * x).toFixed(2)} ${E}\xB7${f}`));
    }
    console.log("=".repeat(60)), V.val = T, Y.val = R, q.val = H, W.val = h, Z.val = v, J.val = tt;
  });
  const C = {
    nodes: V,
    elements: Y,
    nodeInputs: q,
    elementInputs: W,
    deformOutputs: Z,
    analyzeOutputs: J
  }, y = s.state(""), K = s.state(void 0);
  s.derive(() => {
    var _a;
    if (y.val === "Calcpad") try {
      const t = D({
        template: N,
        data: C
      });
      K.val = t;
    } catch (t) {
      console.error("Error generating report:", t);
    }
    if (y.val === "Print") {
      const t = D({
        template: N,
        data: C
      }), e = window.open("", "_blank");
      if (e) {
        const n = (t == null ? void 0 : t.innerHTML) || "";
        e.document.write(`
        <!DOCTYPE html>
        <html>
        <head><title>Cantilever Beam Analysis Report</title></head>
        <body>${n}</body>
        </html>
      `), e.document.close();
      }
      y.val = "";
    }
    if (y.val === "HTML") {
      const n = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cantilever Beam Analysis Report - Awatif</title>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; max-width: 900px; margin: 0 auto; padding: 20px; }
    h1, h2, h3 { color: #333; }
    table { border-collapse: collapse; width: 100%; margin: 10px 0; }
    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
    th { background: #f5f5f5; }
    .eq { font-family: 'Times New Roman', serif; }
    var { font-style: italic; color: #0066cc; }
  </style>
</head>
<body>
${((_a = D({
        template: N,
        data: C
      })) == null ? void 0 : _a.innerHTML) || ""}
</body>
</html>`, d = new Blob([
        n
      ], {
        type: "text/html"
      }), i = URL.createObjectURL(d), o = document.createElement("a");
      o.href = i, o.download = "cantilever_beam_report.html", document.body.appendChild(o), o.click(), document.body.removeChild(o), URL.revokeObjectURL(i), y.val = "";
    }
  });
  document.body.append(pt(a), lt({
    mesh: C,
    settingsObj: {
      deformedShape: true
    }
  }), nt({
    position: "top-left",
    expanded: false
  }), st({
    dialogBody: K
  }), dt({
    clickedButton: y,
    buttons: [
      "Calcpad",
      "Print",
      "HTML"
    ],
    sourceCode: "https://github.com/GiorgioBurbanelli89/awatif-ejemplos/blob/master/cantilever-beam/",
    author: "https://github.com/GiorgioBurbanelli89"
  }));
});
