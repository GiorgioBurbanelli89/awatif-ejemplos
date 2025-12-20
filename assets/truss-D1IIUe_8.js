import { g as C, a as I, m as D, c as x, x as b, b as M, v as o, f as T, h as H, l as P, i as F, j as _, k as j } from "./getReport-CMkXIj08.js";
import { a as q } from "./analyze-CmnHHflB.js";
import { d as B, __tla as __tla_0 } from "./deformCpp-CS-wCYO-.js";
import { g as G } from "./getParameters-B7wiSLGO.js";
import "./complex-i8qiIvCl.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const U = (a) => `<var>${a}</var>`, E = (a) => `<span class="eq">${a}</span>`, c = (a, e = 4) => a.toFixed(e);
  function A(a) {
    var _a, _b, _c, _d;
    const e = ((_a = a.nodes) == null ? void 0 : _a.val) || [], u = ((_b = a.elements) == null ? void 0 : _b.val) || [], m = (_c = a.deformOutputs) == null ? void 0 : _c.val, p = (_d = a.analyzeOutputs) == null ? void 0 : _d.val, l = C(), h = I();
    D();
    let r = 0, v = 0;
    (m == null ? void 0 : m.deformations) && m.deformations.forEach((d, s) => {
      Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]) > Math.abs(r) && (r = d[2], v = s);
    });
    let y = 0, $ = 0;
    return (p == null ? void 0 : p.normals) && p.normals.forEach((d, s) => {
      const n = Array.isArray(d) ? (d[0] + d[1]) / 2 : d;
      Math.abs(n) > Math.abs(y) && (y = n, $ = s);
    }), b`
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 900px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #333; border-bottom: 2px solid #0066cc;">Truss Analysis Report</h1>

      <h2>Input Data</h2>
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
          <td style="border: 1px solid #ddd; padding: 8px;">${u.length}</td>
        </tr>
      </table>

      <h2>Geometry</h2>
      <p>Node coordinates:</p>
      <table style="border-collapse: collapse; width: 100%;">
        <tr style="background: #f5f5f5;">
          <th style="border: 1px solid #ddd; padding: 8px;">Node</th>
          <th style="border: 1px solid #ddd; padding: 8px;">X (${l})</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Y (${l})</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Z (${l})</th>
        </tr>
        ${e.slice(0, 10).map((d, s) => b`
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px;">${s}</td>
              <td style="border: 1px solid #ddd; padding: 8px;">${c(x(d[0]), 2)}</td>
              <td style="border: 1px solid #ddd; padding: 8px;">${c(x(d[1]), 2)}</td>
              <td style="border: 1px solid #ddd; padding: 8px;">${c(x(d[2]), 2)}</td>
            </tr>
          `)}
        ${e.length > 10 ? b`<tr><td colspan="4" style="border: 1px solid #ddd; padding: 8px; text-align: center;">... (${e.length - 10} more nodes)</td></tr>` : ""}
      </table>

      <h2>Results</h2>

      <h3>Maximum Displacement</h3>
      <p style="font-size: 18px; background: #f0f8ff; padding: 15px; border-radius: 8px;">
        ${E(`${U("u")}<sub>max</sub> = <b style='color:#0066cc;'>${c(x(r), 4)} ${l}</b>`)}
        at Node ${v}
      </p>

      <h3>Maximum Axial Force</h3>
      <p style="font-size: 18px; background: #fff0f0; padding: 15px; border-radius: 8px;">
        ${E(`${U("N")}<sub>max</sub> = <b style='color:#cc0000;'>${c(M(y), 2)} ${h}</b>`)}
        at Element ${$}
      </p>

      ${(m == null ? void 0 : m.deformations) ? b`
        <h3>Nodal Displacements</h3>
        <table style="border-collapse: collapse; width: 100%;">
          <tr style="background: #f5f5f5;">
            <th style="border: 1px solid #ddd; padding: 8px;">Node</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Ux (${l})</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Uy (${l})</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Uz (${l})</th>
          </tr>
          ${Array.from(m.deformations.entries()).slice(0, 10).map(([d, s]) => b`
              <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">${d}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">${c(x(s[0]), 6)}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">${c(x(s[1]), 6)}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">${c(x(s[2]), 6)}</td>
              </tr>
            `)}
        </table>
      ` : ""}

      ${(p == null ? void 0 : p.normals) ? b`
        <h3>Axial Forces</h3>
        <table style="border-collapse: collapse; width: 100%;">
          <tr style="background: #f5f5f5;">
            <th style="border: 1px solid #ddd; padding: 8px;">Element</th>
            <th style="border: 1px solid #ddd; padding: 8px;">N (${h})</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Type</th>
          </tr>
          ${Array.from(p.normals.entries()).slice(0, 15).map(([d, s]) => {
      const n = Array.isArray(s) ? (s[0] + s[1]) / 2 : s, t = n > 0 ? "Tension" : n < 0 ? "Compression" : "Zero", i = n > 0 ? "#006600" : n < 0 ? "#cc0000" : "#666";
      return b`
                <tr>
                  <td style="border: 1px solid #ddd; padding: 8px;">${d}</td>
                  <td style="border: 1px solid #ddd; padding: 8px; color: ${i};">${c(M(n), 2)}</td>
                  <td style="border: 1px solid #ddd; padding: 8px; color: ${i};">${t}</td>
                </tr>
              `;
    })}
        </table>
      ` : ""}

      <hr style="margin-top: 30px;">
      <p style="font-size: 11px; color: #666;">Generated with Awatif - Truss Analysis</p>
    </div>
  `;
  }
  const g = {
    span: {
      value: o.state(15),
      min: 5,
      max: 20,
      step: 1,
      label: "span",
      unit: "length"
    },
    divisions: {
      value: o.state(5),
      min: 2,
      max: 5,
      step: 1
    },
    height: {
      value: o.state(2),
      min: 1,
      max: 5,
      step: 0.1,
      label: "height",
      unit: "length"
    },
    elasticity: {
      value: o.state(10),
      min: 1,
      max: 250,
      step: 1,
      label: "Elasticity (GPa)"
    },
    area: {
      value: o.state(10),
      min: 1,
      max: 300,
      step: 1,
      label: "area (cm\xB2)"
    },
    load: {
      value: o.state(250),
      min: 1,
      max: 500,
      step: 1,
      label: "load",
      unit: "force"
    }
  }, L = o.state([]), O = o.state([]), R = o.state({}), k = o.state({}), N = o.state({}), S = o.state({});
  o.derive(() => {
    const a = g.span.value.val, e = g.divisions.value.val, u = g.height.value.val, m = g.elasticity.value.val * 1e6, p = g.area.value.val * 1e-4, l = g.load.value.val, h = [], r = [], v = a / e, y = [];
    for (let t = 0; t <= e; t++) {
      const i = [
        v * t,
        0,
        0
      ];
      h.push(i), y.push(i);
    }
    for (let t = 0; t <= e; t++) h.push([
      v * t,
      0,
      u
    ]);
    for (let t = 0; t < e; t++) r.push([
      t,
      t + 1
    ]);
    for (let t = 0; t < e; t++) r.push([
      e + 1 + t,
      e + 1 + t + 1
    ]);
    for (let t = 0; t <= e; t++) r.push([
      t,
      e + 1 + t
    ]);
    for (let t = 0; t < e; t++) t < e / 2 ? r.push([
      t,
      e + 1 + t + 1
    ]) : r.push([
      e + 1 + t,
      t + 1
    ]);
    const $ = {
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
          e,
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
      loads: new Map(y.map((t, i) => [
        i,
        [
          0,
          0,
          -l,
          0,
          0,
          0
        ]
      ]))
    }, d = {
      elasticities: new Map(r.map((t, i) => [
        i,
        m
      ])),
      areas: new Map(r.map((t, i) => [
        i,
        p
      ]))
    }, s = B(h, r, $, d), n = q(h, r, d, s);
    L.val = h, O.val = r, R.val = $, k.val = d, N.val = s, S.val = n;
  });
  const w = {
    nodes: L,
    elements: O,
    nodeInputs: R,
    elementInputs: k,
    deformOutputs: N,
    analyzeOutputs: S
  }, f = o.state(""), z = o.state(void 0);
  o.derive(() => {
    var _a;
    if (f.val === "Calcpad") try {
      const a = T({
        template: A,
        data: w
      });
      z.val = a;
    } catch (a) {
      console.error("Error generating report:", a);
    }
    if (f.val === "Print") {
      const a = T({
        template: A,
        data: w
      }), e = window.open("", "_blank");
      if (e) {
        const u = (a == null ? void 0 : a.innerHTML) || "";
        e.document.write(`
        <!DOCTYPE html>
        <html>
        <head><title>Truss Analysis Report</title></head>
        <body>${u}</body>
        </html>
      `), e.document.close();
      }
      f.val = "";
    }
    if (f.val === "HTML") {
      const u = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Truss Analysis Report - Awatif</title>
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
${((_a = T({
        template: A,
        data: w
      })) == null ? void 0 : _a.innerHTML) || ""}
</body>
</html>`, m = new Blob([
        u
      ], {
        type: "text/html"
      }), p = URL.createObjectURL(m), l = document.createElement("a");
      l.href = p, l.download = "truss_report.html", document.body.appendChild(l), l.click(), document.body.removeChild(l), URL.revokeObjectURL(p), f.val = "";
    }
  });
  document.body.append(G(g), H({
    mesh: w,
    settingsObj: {
      deformedShape: true
    }
  }), P(w), F({
    position: "top-left",
    expanded: false
  }), _({
    dialogBody: z
  }), j({
    clickedButton: f,
    buttons: [
      "Calcpad",
      "Print",
      "HTML"
    ],
    sourceCode: "https://github.com/madil4/awatif/blob/main/examples/src/truss/main.ts",
    author: "https://www.linkedin.com/in/madil4/"
  }));
});
