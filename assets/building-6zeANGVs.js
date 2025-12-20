import { g as U, a as k, c as y, x as L, v as s, f as B, h as O, l as A, i as P, j, k as F } from "./getReport-CnIkx0ml.js";
import { g as G } from "./getParameters-Ce3duQQe.js";
import { g as Y, a as N, b as z, c as V, d as X, __tla as __tla_0 } from "./getSolids-zhnAqBAR.js";
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
  const u = (e, o = 4) => e.toFixed(o);
  function S(e) {
    var _a, _b, _c, _d;
    const o = ((_a = e.nodes) == null ? void 0 : _a.val) || [], i = ((_b = e.elements) == null ? void 0 : _b.val) || [], r = (_c = e.nodeInputs) == null ? void 0 : _c.val, a = U();
    k();
    const p = ((_d = r == null ? void 0 : r.supports) == null ? void 0 : _d.size) || 0;
    let g = 1 / 0, h = -1 / 0, n = 1 / 0, m = -1 / 0, w = 1 / 0, b = -1 / 0;
    o.forEach((l) => {
      g = Math.min(g, l[0]), h = Math.max(h, l[0]), n = Math.min(n, l[1]), m = Math.max(m, l[1]), w = Math.min(w, l[2]), b = Math.max(b, l[2]);
    });
    const I = h - g, M = m - n, D = b - w;
    return L`
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 900px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #333; border-bottom: 2px solid #0066cc;">Building Analysis Report</h1>

      <h2>Building Geometry</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr style="background: #f5f5f5;">
          <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Parameter</th>
          <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Value</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Width (X direction)</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${u(y(I), 2)} ${a}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Depth (Y direction)</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${u(y(M), 2)} ${a}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Height (Z direction)</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${u(y(D), 2)} ${a}</td>
        </tr>
      </table>

      <h2>Mesh Information</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr style="background: #f5f5f5;">
          <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Parameter</th>
          <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Value</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Total Nodes</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${o.length}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Total Elements</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${i.length}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Fixed Supports</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${p}</td>
        </tr>
      </table>

      <h2>Node Coordinates</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr style="background: #f5f5f5;">
          <th style="border: 1px solid #ddd; padding: 8px;">Node</th>
          <th style="border: 1px solid #ddd; padding: 8px;">X (${a})</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Y (${a})</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Z (${a})</th>
        </tr>
        ${o.slice(0, 20).map((l, d) => L`
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px;">${d}</td>
              <td style="border: 1px solid #ddd; padding: 8px;">${u(y(l[0]), 2)}</td>
              <td style="border: 1px solid #ddd; padding: 8px;">${u(y(l[1]), 2)}</td>
              <td style="border: 1px solid #ddd; padding: 8px;">${u(y(l[2]), 2)}</td>
            </tr>
          `)}
        ${o.length > 20 ? L`<tr><td colspan="4" style="border: 1px solid #ddd; padding: 8px; text-align: center;">... (${o.length - 20} more nodes)</td></tr>` : ""}
      </table>

      <hr style="margin-top: 30px;">
      <p style="font-size: 11px; color: #666;">Generated with Awatif - Building Analysis</p>
    </div>
  `;
  }
  const H = {
    stories: {
      value: s.state(2),
      min: 1,
      max: 5,
      step: 1
    }
  }, t = {
    points: s.state([]),
    stories: s.state([]),
    columns: s.state([]),
    slabs: s.state([]),
    columnsByStory: s.state(/* @__PURE__ */ new Map()),
    slabsByStory: s.state(/* @__PURE__ */ new Map()),
    columnData: s.state(/* @__PURE__ */ new Map()),
    slabData: s.state(/* @__PURE__ */ new Map())
  }, c = {
    nodes: s.state([]),
    elements: s.state([]),
    nodeInputs: s.state({}),
    elementInputs: s.state({})
  }, $ = [
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
  ], x = [
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
  ], R = Y(), E = N(), T = s.state([
    E
  ]), Z = s.state([
    R
  ]);
  s.derive(() => {
    const e = [], o = [], i = [], r = [], a = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map();
    for (let n = 0; n < H.stories.value.val; n++) {
      const m = [], b = 4 * n;
      for (let d = 0; d < $.length; d++) m.push([
        $[d][0],
        $[d][1],
        $[d][2] + b
      ]);
      const I = [];
      let M = e.length;
      for (let d = 0; d < m.length; d++) e.push(m[d]), I.push(d + M);
      i.push(I), o.push(M), p.set(n, [
        n
      ]), h.set(n, {
        analysisInput: {
          areaLoad: 1,
          isOpening: false
        }
      });
      const l = [];
      for (let d = 0; d < x.length; d++) {
        const v = e.length;
        e.push([
          x[d][0],
          x[d][1],
          x[d][2] + b
        ]), r.push(v), l.push(r.length - 1);
      }
      if (n === 0) {
        const d = r.length - x.length;
        for (let v = 0; v < x.length; v++) g.set(d + v, {
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
      a.set(n, l);
    }
    t.points.val = e, t.stories.val = o, t.slabs.val = i, t.columns.val = r, t.columnsByStory.val = a, t.slabsByStory.val = p, t.columnData.val = g, t.slabData.val = h;
  });
  s.derive(() => {
    const { nodes: e, elements: o, nodeInputs: i, elementInputs: r } = z(t.points.val, t.stories.val, t.columns.val, t.slabs.val, t.columnsByStory.val, t.slabsByStory.val, t.columnData.val, t.slabData.val);
    c.nodes.val = e, c.elements.val = o, c.nodeInputs.val = i, c.elementInputs.val = r, E.geometry = V(t.points.val, t.slabs.val, t.columns.val), R.geometry = X(t.points.val, t.slabs.val, t.columns.val), T.val = [
      ...T.rawVal
    ];
  });
  const f = s.state(""), C = s.state(void 0);
  s.derive(() => {
    var _a;
    if (f.val === "Calcpad") try {
      const e = B({
        template: S,
        data: c
      });
      C.val = e;
    } catch (e) {
      console.error("Error generating report:", e);
    }
    if (f.val === "Print") {
      const e = B({
        template: S,
        data: c
      }), o = window.open("", "_blank");
      if (o) {
        const i = (e == null ? void 0 : e.innerHTML) || "";
        o.document.write(`
        <!DOCTYPE html>
        <html>
        <head><title>Building Analysis Report</title></head>
        <body>${i}</body>
        </html>
      `), o.document.close();
      }
      f.val = "";
    }
    if (f.val === "HTML") {
      const i = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Building Analysis Report - Awatif</title>
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
${((_a = B({
        template: S,
        data: c
      })) == null ? void 0 : _a.innerHTML) || ""}
</body>
</html>`, r = new Blob([
        i
      ], {
        type: "text/html"
      }), a = URL.createObjectURL(r), p = document.createElement("a");
      p.href = a, p.download = "building_report.html", document.body.appendChild(p), p.click(), document.body.removeChild(p), URL.revokeObjectURL(a), f.val = "";
    }
  });
  document.body.append(G(H), O({
    objects3D: T,
    solids: Z,
    mesh: c,
    settingsObj: {
      nodes: false,
      loads: false
    }
  }), A(c), P({
    position: "top-left",
    expanded: false
  }), j({
    dialogBody: C
  }), F({
    clickedButton: f,
    buttons: [
      "Calcpad",
      "Print",
      "HTML"
    ],
    sourceCode: "https://github.com/madil4/awatif/blob/main/examples/src/building/main.ts",
    author: "https://www.linkedin.com/in/abderrahmane-mazri-4638a81b8/"
  }));
});
