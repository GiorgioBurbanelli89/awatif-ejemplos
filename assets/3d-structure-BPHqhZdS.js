import { e as I, f as N, h as $, i as A, x as g, v as s, g as H, j as F, b as P, d as _ } from "./styles-pdtxawzU.js";
import { a as j } from "./analyze-CmnHHflB.js";
import { d as q, __tla as __tla_0 } from "./deformCpp-CS-wCYO-.js";
import { g as B } from "./getParameters-Dl3mTgVW.js";
import { g as Y } from "./getDialog-SKblNfmB.js";
import { g as w } from "./getReport-9byhZbfH.js";
import "./complex-i8qiIvCl.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const S = (d) => `<var>${d}</var>`, z = (d) => `<span class="eq">${d}</span>`, x = (d, r = 4) => d.toFixed(r);
  function M(d) {
    var _a, _b, _c, _d;
    const r = ((_a = d.nodes) == null ? void 0 : _a.val) || [], i = ((_b = d.elements) == null ? void 0 : _b.val) || [], n = (_c = d.deformOutputs) == null ? void 0 : _c.val, o = (_d = d.analyzeOutputs) == null ? void 0 : _d.val, e = I(), u = N();
    let p = 0, c = 0, h = "X";
    (n == null ? void 0 : n.deformations) && n.deformations.forEach((a, l) => {
      Math.abs(a[0]) > Math.abs(p) && (p = a[0], c = l, h = "X"), Math.abs(a[1]) > Math.abs(p) && (p = a[1], c = l, h = "Y"), Math.abs(a[2]) > Math.abs(p) && (p = a[2], c = l, h = "Z");
    });
    let y = 0, t = 0;
    return (o == null ? void 0 : o.normals) && o.normals.forEach((a, l) => {
      const m = Array.isArray(a) ? (a[0] + a[1]) / 2 : a;
      Math.abs(m) > Math.abs(y) && (y = m, t = l);
    }), g`
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 900px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #333; border-bottom: 2px solid #0066cc;">3D Structure Analysis Report</h1>

      <h2>Input Data</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr style="background: #f5f5f5;">
          <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Parameter</th>
          <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Value</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Total Nodes</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${r.length}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Total Elements</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${i.length}</td>
        </tr>
      </table>

      <h2>Results Summary</h2>

      <h3>Maximum Displacement</h3>
      <p style="font-size: 18px; background: #f0f8ff; padding: 15px; border-radius: 8px;">
        ${z(`${S("u")}<sub>${h}</sub> = <b style='color:#0066cc;'>${x($(p), 4)} ${e}</b>`)}
        at Node ${c}
      </p>

      <h3>Maximum Axial Force</h3>
      <p style="font-size: 18px; background: #fff0f0; padding: 15px; border-radius: 8px;">
        ${z(`${S("N")}<sub>max</sub> = <b style='color:#cc0000;'>${x(A(y), 2)} ${u}</b>`)}
        at Element ${t}
      </p>

      ${(n == null ? void 0 : n.deformations) ? g`
        <h3>Nodal Displacements (first 20 nodes)</h3>
        <table style="border-collapse: collapse; width: 100%;">
          <tr style="background: #f5f5f5;">
            <th style="border: 1px solid #ddd; padding: 8px;">Node</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Ux (${e})</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Uy (${e})</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Uz (${e})</th>
          </tr>
          ${Array.from(n.deformations.entries()).slice(0, 20).map(([a, l]) => g`
              <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">${a}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">${x($(l[0]), 6)}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">${x($(l[1]), 6)}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">${x($(l[2]), 6)}</td>
              </tr>
            `)}
        </table>
      ` : ""}

      ${(o == null ? void 0 : o.normals) ? g`
        <h3>Axial Forces (first 20 elements)</h3>
        <table style="border-collapse: collapse; width: 100%;">
          <tr style="background: #f5f5f5;">
            <th style="border: 1px solid #ddd; padding: 8px;">Element</th>
            <th style="border: 1px solid #ddd; padding: 8px;">N (${u})</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Type</th>
          </tr>
          ${Array.from(o.normals.entries()).slice(0, 20).map(([a, l]) => {
      const m = Array.isArray(l) ? (l[0] + l[1]) / 2 : l, C = m > 0 ? "Tension" : m < 0 ? "Compression" : "Zero", T = m > 0 ? "#006600" : m < 0 ? "#cc0000" : "#666";
      return g`
                <tr>
                  <td style="border: 1px solid #ddd; padding: 8px;">${a}</td>
                  <td style="border: 1px solid #ddd; padding: 8px; color: ${T};">${x(A(m), 2)}</td>
                  <td style="border: 1px solid #ddd; padding: 8px; color: ${T};">${C}</td>
                </tr>
              `;
    })}
        </table>
      ` : ""}

      <hr style="margin-top: 30px;">
      <p style="font-size: 11px; color: #666;">Generated with Awatif - 3D Structure Analysis</p>
    </div>
  `;
  }
  const f = {
    dx: {
      value: s.state(2),
      min: 1,
      max: 5,
      step: 0.1,
      label: "dx (m)"
    },
    dy: {
      value: s.state(2),
      min: 1,
      max: 5,
      step: 0.1,
      label: "dy (m)"
    },
    dz: {
      value: s.state(2),
      min: 1,
      max: 5,
      step: 0.1,
      label: "dz (m)"
    },
    divisions: {
      value: s.state(4),
      min: 1,
      max: 10,
      step: 1
    },
    load: {
      value: s.state(30),
      min: 1,
      max: 50,
      step: 0.5,
      label: "load (kN)"
    }
  }, L = s.state([]), O = s.state([]), U = s.state({}), D = s.state({}), E = s.state({}), R = s.state({});
  s.derive(() => {
    const d = f.dx.value.val, r = f.dy.value.val, i = f.dz.value.val, n = f.divisions.value.val;
    let o = [], e = [];
    for (let t = 0; t <= n; t++) o.push([
      0,
      0,
      i * t
    ], [
      d,
      0,
      i * t
    ], [
      d,
      r,
      i * t
    ], [
      0,
      r,
      i * t
    ]);
    o = o.map((t) => [
      6 + t[0],
      6 + t[1],
      t[2]
    ]);
    for (let t = 0; t < n * 4; ) t += 4, e.push([
      t,
      t + 1
    ], [
      t + 1,
      t + 2
    ], [
      t + 2,
      t + 3
    ], [
      t + 3,
      t
    ]), e.push([
      t,
      t + 2
    ]);
    for (let t = 0; t < n * 4; t++) e.push([
      t,
      t + 4
    ]);
    for (let t = 0; t < n * 4; t += 4) e.push([
      t,
      t + 5
    ], [
      t + 3,
      t + 6
    ]), e.push([
      t,
      t + 7
    ], [
      t + 1,
      t + 6
    ]);
    const u = [
      true,
      true,
      true,
      true,
      true,
      true
    ], p = {
      supports: /* @__PURE__ */ new Map([
        [
          0,
          u
        ],
        [
          1,
          u
        ],
        [
          2,
          u
        ],
        [
          3,
          u
        ]
      ]),
      loads: /* @__PURE__ */ new Map([
        [
          o.length - 2,
          [
            f.load.value.val,
            0,
            0,
            0,
            0,
            0
          ]
        ]
      ])
    }, c = {
      elasticities: new Map(e.map((t, a) => [
        a,
        100
      ])),
      areas: new Map(e.map((t, a) => [
        a,
        10
      ]))
    }, h = q(o, e, p, c), y = j(o, e, c, h);
    L.val = o, O.val = e, U.val = p, D.val = c, E.val = h, R.val = y;
  });
  const v = {
    nodes: L,
    elements: O,
    nodeInputs: U,
    elementInputs: D,
    deformOutputs: E,
    analyzeOutputs: R
  }, b = s.state(""), k = s.state(void 0);
  s.derive(() => {
    var _a;
    if (b.val === "Calcpad") try {
      const d = w({
        template: M,
        data: v
      });
      k.val = d;
    } catch (d) {
      console.error("Error generating report:", d);
    }
    if (b.val === "Print") {
      const d = w({
        template: M,
        data: v
      }), r = window.open("", "_blank");
      if (r) {
        const i = (d == null ? void 0 : d.innerHTML) || "";
        r.document.write(`
        <!DOCTYPE html>
        <html>
        <head><title>3D Structure Analysis Report</title></head>
        <body>${i}</body>
        </html>
      `), r.document.close();
      }
      b.val = "";
    }
    if (b.val === "HTML") {
      const i = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>3D Structure Analysis Report - Awatif</title>
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
${((_a = w({
        template: M,
        data: v
      })) == null ? void 0 : _a.innerHTML) || ""}
</body>
</html>`, n = new Blob([
        i
      ], {
        type: "text/html"
      }), o = URL.createObjectURL(n), e = document.createElement("a");
      e.href = o, e.download = "3d_structure_report.html", document.body.appendChild(e), e.click(), document.body.removeChild(e), URL.revokeObjectURL(o), b.val = "";
    }
  });
  document.body.append(B(f), H({
    mesh: v,
    settingsObj: {
      deformedShape: true,
      gridSize: 15
    }
  }), F(v), P({
    position: "top-left",
    expanded: false
  }), Y({
    dialogBody: k
  }), _({
    clickedButton: b,
    buttons: [
      "Calcpad",
      "Print",
      "HTML"
    ],
    sourceCode: "https://github.com/madil4/awatif/blob/main/examples/src/3d-structure/main.ts",
    author: "https://www.linkedin.com/in/madil4/"
  }));
});
