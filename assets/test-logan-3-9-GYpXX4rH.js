import { g as k, a as O, x as b, v as r, f as u, h as P, j as R, k as C } from "./getReport-CnIkx0ml.js";
import { a as I } from "./analyze-CmnHHflB.js";
import { d as N, __tla as __tla_0 } from "./deformCpp-CS-wCYO-.js";
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
  const e = (d, o = 4) => d.toFixed(o);
  function f(d) {
    var _a2, _b, _c, _d, _e;
    const o = ((_a2 = d.nodes) == null ? void 0 : _a2.val) || [], y = ((_b = d.elements) == null ? void 0 : _b.val) || [], l = (_c = d.deformOutputs) == null ? void 0 : _c.val, L = (_d = d.analyzeOutputs) == null ? void 0 : _d.val;
    k(), O();
    const s = {
      Ux: 1.384,
      Uy: -0.052,
      Uz: 0.06
    }, h = ((_e = l == null ? void 0 : l.deformations) == null ? void 0 : _e.get(0)) || [
      0,
      0,
      0,
      0,
      0,
      0
    ], a = {
      Ux: h[0] * 1e3,
      Uy: h[1] * 1e3,
      Uz: h[2] * 1e3
    }, t = {
      Ux: Math.abs((a.Ux - s.Ux) / s.Ux * 100),
      Uy: Math.abs((a.Uy - s.Uy) / s.Uy * 100),
      Uz: Math.abs((a.Uz - s.Uz) / s.Uz * 100)
    }, v = t.Ux < 1 && t.Uy < 5 && t.Uz < 5;
    return b`
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 900px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #333; border-bottom: 2px solid #0066cc;">
        Logan Example 3.9 - 3D Bar System
        <span style="float: right; font-size: 16px; padding: 5px 15px; border-radius: 4px; background: ${v ? "#28a745" : "#dc3545"}; color: white;">
          ${v ? "PASS" : "FAIL"}
        </span>
      </h1>

      <h2>Problem Description</h2>
      <p>Three-dimensional bar system with a single load applied at node 0.</p>
      <p><strong>Reference:</strong> Logan, D.L. "A First Course in the Finite Element Method", Example 3.9</p>

      <h2>Input Data</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr style="background: #f5f5f5;">
          <th style="border: 1px solid #ddd; padding: 8px;">Parameter</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Value</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Units</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Young's Modulus (E)</td>
          <td style="border: 1px solid #ddd; padding: 8px;">210</td>
          <td style="border: 1px solid #ddd; padding: 8px;">MPa</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Cross-sectional Area (A)</td>
          <td style="border: 1px solid #ddd; padding: 8px;">10</td>
          <td style="border: 1px solid #ddd; padding: 8px;">cm²</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Applied Force (F)</td>
          <td style="border: 1px solid #ddd; padding: 8px;">20</td>
          <td style="border: 1px solid #ddd; padding: 8px;">kN</td>
        </tr>
      </table>

      <h2>Geometry</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr style="background: #f5f5f5;">
          <th style="border: 1px solid #ddd; padding: 8px;">Node</th>
          <th style="border: 1px solid #ddd; padding: 8px;">X (m)</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Y (m)</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Z (m)</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Support</th>
        </tr>
        ${o.map((i, p) => b`
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">${p}</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${e(i[0], 1)}</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${e(i[1], 1)}</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${e(i[2], 1)}</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${p === 0 ? "Load (Fx=20kN)" : "Fixed"}</td>
          </tr>
        `)}
      </table>

      <h2>Validation Results</h2>
      <p>Comparison of computed displacements at Node 0 with reference values:</p>
      <table style="border-collapse: collapse; width: 100%;">
        <tr style="background: #f5f5f5;">
          <th style="border: 1px solid #ddd; padding: 8px;">DOF</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Expected (mm)</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Computed (mm)</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Error (%)</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Status</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;"><b>Ux</b></td>
          <td style="border: 1px solid #ddd; padding: 8px;">${s.Ux}</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${e(a.Ux, 4)}</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${e(t.Ux, 2)}%</td>
          <td style="border: 1px solid #ddd; padding: 8px; color: ${t.Ux < 1 ? "#28a745" : "#dc3545"};">
            ${t.Ux < 1 ? "\u2713 PASS" : "\u2717 FAIL"}
          </td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;"><b>Uy</b></td>
          <td style="border: 1px solid #ddd; padding: 8px;">${s.Uy}</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${e(a.Uy, 4)}</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${e(t.Uy, 2)}%</td>
          <td style="border: 1px solid #ddd; padding: 8px; color: ${t.Uy < 5 ? "#28a745" : "#dc3545"};">
            ${t.Uy < 5 ? "\u2713 PASS" : "\u2717 FAIL"}
          </td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;"><b>Uz</b></td>
          <td style="border: 1px solid #ddd; padding: 8px;">${s.Uz}</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${e(a.Uz, 4)}</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${e(t.Uz, 2)}%</td>
          <td style="border: 1px solid #ddd; padding: 8px; color: ${t.Uz < 5 ? "#28a745" : "#dc3545"};">
            ${t.Uz < 5 ? "\u2713 PASS" : "\u2717 FAIL"}
          </td>
        </tr>
      </table>

      ${(L == null ? void 0 : L.normals) ? b`
        <h2>Axial Forces</h2>
        <table style="border-collapse: collapse; width: 100%;">
          <tr style="background: #f5f5f5;">
            <th style="border: 1px solid #ddd; padding: 8px;">Element</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Nodes</th>
            <th style="border: 1px solid #ddd; padding: 8px;">N (kN)</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Type</th>
          </tr>
          ${Array.from(L.normals.entries()).map(([i, p]) => {
      var _a3;
      const x = (Array.isArray(p) ? (p[0] + p[1]) / 2 : p) / 1e3, T = x > 0.01 ? "Tension" : x < -0.01 ? "Compression" : "~Zero", z = x > 0.01 ? "#006600" : x < -0.01 ? "#cc0000" : "#666";
      return b`
              <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">${i}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">${(_a3 = y[i]) == null ? void 0 : _a3.join(" - ")}</td>
                <td style="border: 1px solid #ddd; padding: 8px; color: ${z};">${e(x, 3)}</td>
                <td style="border: 1px solid #ddd; padding: 8px; color: ${z};">${T}</td>
              </tr>
            `;
    })}
        </table>
      ` : ""}

      <hr style="margin-top: 30px;">
      <p style="font-size: 11px; color: #666;">
        Generated with Awatif - Logan Example 3.9 Validation Test
      </p>
    </div>
  `;
  }
  const U = [
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
  ], c = [
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
  ], F = 21e7, A = 1e-3, E = 2e4, M = {
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
          E,
          0,
          0,
          0,
          0,
          0
        ]
      ]
    ])
  }, $ = {
    elasticities: new Map(c.map((d, o) => [
      o,
      F
    ])),
    areas: new Map(c.map((d, o) => [
      o,
      A
    ]))
  }, w = N(U, c, M, $), D = I(U, c, $, w), g = {
    nodes: r.state(U),
    elements: r.state(c),
    nodeInputs: r.state(M),
    elementInputs: r.state($),
    deformOutputs: r.state(w),
    analyzeOutputs: r.state(D)
  }, m = ((_a = w.deformations) == null ? void 0 : _a.get(0)) || [
    0,
    0,
    0,
    0,
    0,
    0
  ];
  console.log("TEST: Logan 3.9 - 3D Bar System");
  console.log("E =", F / 1e6, "MPa, A =", A * 1e4, "cm\xB2, F =", E / 1e3, "kN");
  console.log("Node 0 displacement:");
  console.log("  Ux =", (m[0] * 1e3).toFixed(4), "mm");
  console.log("  Uy =", (m[1] * 1e3).toFixed(4), "mm");
  console.log("  Uz =", (m[2] * 1e3).toFixed(4), "mm");
  console.log("Expected: Ux=1.384mm, Uy=-0.052mm, Uz=0.060mm");
  const n = r.state(""), S = r.state(void 0);
  r.derive(() => {
    if (n.val === "Report" && (S.val = u({
      template: f,
      data: g
    })), n.val === "Print") {
      u({
        template: f,
        data: g
      });
      const d = window.open("", "_blank");
      d && (d.document.write('<!DOCTYPE html><html><head><title>Logan 3.9 - Validation Report</title></head><body>${reportEl?.innerHTML || ""}</body></html>'), d.document.close()), n.val = "";
    }
    if (n.val === "HTML") {
      u({
        template: f,
        data: g
      });
      const d = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Logan 3.9 - Validation Report</title></head><body>${reportEl?.innerHTML || ""}</body></html>', o = new Blob([
        d
      ], {
        type: "text/html"
      }), y = URL.createObjectURL(o), l = document.createElement("a");
      l.href = y, l.download = "logan_3_9_report.html", document.body.appendChild(l), l.click(), document.body.removeChild(l), URL.revokeObjectURL(y), n.val = "";
    }
  });
  document.body.append(P({
    mesh: g,
    settingsObj: {
      deformedShape: true,
      loads: true,
      supports: true
    }
  }), R({
    dialogBody: S
  }), C({
    clickedButton: n,
    buttons: [
      "Report",
      "Print",
      "HTML"
    ],
    sourceCode: "https://github.com/madil4/awatif/blob/main/awatif-fem/src/deform.test.ts"
  }));
  document.title = "Logan 3.9 - Ux=" + (m[0] * 1e3).toFixed(2) + "mm";
});
