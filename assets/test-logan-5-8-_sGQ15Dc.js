import { g as E, a as k, x as m, v as o, f as h, h as P, j as A, k as T } from "./getReport-CMkXIj08.js";
import { a as z } from "./analyze-CmnHHflB.js";
import { d as C, __tla as __tla_0 } from "./deformCpp-CS-wCYO-.js";
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
  const e = (d, t = 4) => d.toFixed(t);
  function u(d) {
    var _a2, _b, _c, _d, _e;
    const t = ((_a2 = d.nodes) == null ? void 0 : _a2.val) || [], b = ((_b = d.elements) == null ? void 0 : _b.val) || [], l = (_c = d.deformOutputs) == null ? void 0 : _c.val, y = (_d = d.analyzeOutputs) == null ? void 0 : _d.val;
    E(), k();
    const a = {
      Uy: -0.336,
      Rx: -3.75
    }, p = ((_e = l == null ? void 0 : l.deformations) == null ? void 0 : _e.get(0)) || [
      0,
      0,
      0,
      0,
      0,
      0
    ], g = {
      Uy: p[1] * 1e3,
      Rx: p[3] * 1e3
    }, s = {
      Uy: Math.abs((g.Uy - a.Uy) / a.Uy * 100),
      Rx: Math.abs((g.Rx - a.Rx) / a.Rx * 100)
    }, U = s.Uy < 5 && s.Rx < 5;
    return m`
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 900px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #333; border-bottom: 2px solid #0066cc;">
        Logan Example 5.8 - 3D Space Frame
        <span style="float: right; font-size: 16px; padding: 5px 15px; border-radius: 4px; background: ${U ? "#28a745" : "#dc3545"}; color: white;">
          ${U ? "PASS" : "FAIL"}
        </span>
      </h1>

      <h2>Problem Description</h2>
      <p>Three-dimensional space frame with concentrated load and moment at node 0.</p>
      <p><strong>Reference:</strong> Logan, D.L. "A First Course in the Finite Element Method", Example 5.8</p>

      <h2>Input Data</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr style="background: #f5f5f5;">
          <th style="border: 1px solid #ddd; padding: 8px;">Parameter</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Value</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Units</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Young's Modulus (E)</td>
          <td style="border: 1px solid #ddd; padding: 8px;">200</td>
          <td style="border: 1px solid #ddd; padding: 8px;">GPa</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Shear Modulus (G)</td>
          <td style="border: 1px solid #ddd; padding: 8px;">60</td>
          <td style="border: 1px solid #ddd; padding: 8px;">GPa</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Cross-sectional Area (A)</td>
          <td style="border: 1px solid #ddd; padding: 8px;">62.5</td>
          <td style="border: 1px solid #ddd; padding: 8px;">cm²</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Moment of Inertia (Iy = Iz)</td>
          <td style="border: 1px solid #ddd; padding: 8px;">40</td>
          <td style="border: 1px solid #ddd; padding: 8px;">cm⁴</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Torsional Constant (J)</td>
          <td style="border: 1px solid #ddd; padding: 8px;">20</td>
          <td style="border: 1px solid #ddd; padding: 8px;">cm⁴</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Applied Force (Fy)</td>
          <td style="border: 1px solid #ddd; padding: 8px;">-200</td>
          <td style="border: 1px solid #ddd; padding: 8px;">kN</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Applied Moment (Mx)</td>
          <td style="border: 1px solid #ddd; padding: 8px;">-100</td>
          <td style="border: 1px solid #ddd; padding: 8px;">kN·m</td>
        </tr>
      </table>

      <h2>Geometry</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr style="background: #f5f5f5;">
          <th style="border: 1px solid #ddd; padding: 8px;">Node</th>
          <th style="border: 1px solid #ddd; padding: 8px;">X (m)</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Y (m)</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Z (m)</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Condition</th>
        </tr>
        ${t.map((x, i) => m`
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">${i}</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${e(x[0], 2)}</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${e(x[1], 2)}</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${e(x[2], 2)}</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${i === 0 ? "Load Point" : "Fixed"}</td>
          </tr>
        `)}
      </table>

      <h2>Validation Results</h2>
      <p>Comparison of computed values at Node 0 with reference values:</p>
      <table style="border-collapse: collapse; width: 100%;">
        <tr style="background: #f5f5f5;">
          <th style="border: 1px solid #ddd; padding: 8px;">DOF</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Expected</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Computed</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Error (%)</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Status</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;"><b>Uy (mm)</b></td>
          <td style="border: 1px solid #ddd; padding: 8px;">${a.Uy}</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${e(g.Uy, 4)}</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${e(s.Uy, 2)}%</td>
          <td style="border: 1px solid #ddd; padding: 8px; color: ${s.Uy < 5 ? "#28a745" : "#dc3545"};">
            ${s.Uy < 5 ? "\u2713 PASS" : "\u2717 FAIL"}
          </td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;"><b>Rx (mrad)</b></td>
          <td style="border: 1px solid #ddd; padding: 8px;">${a.Rx}</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${e(g.Rx, 4)}</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${e(s.Rx, 2)}%</td>
          <td style="border: 1px solid #ddd; padding: 8px; color: ${s.Rx < 5 ? "#28a745" : "#dc3545"};">
            ${s.Rx < 5 ? "\u2713 PASS" : "\u2717 FAIL"}
          </td>
        </tr>
      </table>

      <h2>Full Displacement Vector at Node 0</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr style="background: #f5f5f5;">
          <th style="border: 1px solid #ddd; padding: 8px;">DOF</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Value</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Units</th>
        </tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">Ux</td><td style="border: 1px solid #ddd; padding: 8px;">${e(p[0] * 1e3, 6)}</td><td style="border: 1px solid #ddd; padding: 8px;">mm</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">Uy</td><td style="border: 1px solid #ddd; padding: 8px;">${e(p[1] * 1e3, 6)}</td><td style="border: 1px solid #ddd; padding: 8px;">mm</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">Uz</td><td style="border: 1px solid #ddd; padding: 8px;">${e(p[2] * 1e3, 6)}</td><td style="border: 1px solid #ddd; padding: 8px;">mm</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">Rx</td><td style="border: 1px solid #ddd; padding: 8px;">${e(p[3] * 1e3, 6)}</td><td style="border: 1px solid #ddd; padding: 8px;">mrad</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">Ry</td><td style="border: 1px solid #ddd; padding: 8px;">${e(p[4] * 1e3, 6)}</td><td style="border: 1px solid #ddd; padding: 8px;">mrad</td></tr>
        <tr><td style="border: 1px solid #ddd; padding: 8px;">Rz</td><td style="border: 1px solid #ddd; padding: 8px;">${e(p[5] * 1e3, 6)}</td><td style="border: 1px solid #ddd; padding: 8px;">mrad</td></tr>
      </table>

      ${(y == null ? void 0 : y.bendingsY) || (y == null ? void 0 : y.bendingsZ) ? m`
        <h2>Internal Forces</h2>
        <table style="border-collapse: collapse; width: 100%;">
          <tr style="background: #f5f5f5;">
            <th style="border: 1px solid #ddd; padding: 8px;">Element</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Nodes</th>
            <th style="border: 1px solid #ddd; padding: 8px;">My (kN·m)</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Mz (kN·m)</th>
          </tr>
          ${b.map((x, i) => {
      var _a3, _b2;
      const M = ((_a3 = y == null ? void 0 : y.bendingsY) == null ? void 0 : _a3.get(i)) || [
        0,
        0
      ], L = ((_b2 = y == null ? void 0 : y.bendingsZ) == null ? void 0 : _b2.get(i)) || [
        0,
        0
      ];
      return m`
              <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">${i}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">${x.join(" - ")}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">${e(M[0] / 1e3, 2)} / ${e(M[1] / 1e3, 2)}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">${e(L[0] / 1e3, 2)} / ${e(L[1] / 1e3, 2)}</td>
              </tr>
            `;
    })}
        </table>
      ` : ""}

      <hr style="margin-top: 30px;">
      <p style="font-size: 11px; color: #666;">
        Generated with Awatif - Logan Example 5.8 Validation Test
      </p>
    </div>
  `;
  }
  const f = [
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
  ], r = [
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
  ], F = 2e11, v = 6e10, S = 625e-5, D = 4e-5, _ = 4e-5, G = 2e-5, N = -2e5, V = -1e5, I = {
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
          N,
          0,
          V,
          0,
          0
        ]
      ]
    ])
  }, $ = {
    elasticities: new Map(r.map((d, t) => [
      t,
      F
    ])),
    shearModuli: new Map(r.map((d, t) => [
      t,
      v
    ])),
    areas: new Map(r.map((d, t) => [
      t,
      S
    ])),
    momentsOfInertiaY: new Map(r.map((d, t) => [
      t,
      D
    ])),
    momentsOfInertiaZ: new Map(r.map((d, t) => [
      t,
      _
    ])),
    torsionalConstants: new Map(r.map((d, t) => [
      t,
      G
    ]))
  }, R = C(f, r, I, $), Y = z(f, r, $, R), c = {
    nodes: o.state(f),
    elements: o.state(r),
    nodeInputs: o.state(I),
    elementInputs: o.state($),
    deformOutputs: o.state(R),
    analyzeOutputs: o.state(Y)
  }, w = ((_a = R.deformations) == null ? void 0 : _a.get(0)) || [
    0,
    0,
    0,
    0,
    0,
    0
  ];
  console.log("TEST: Logan 5.8 - 3D Space Frame");
  console.log("E =", F / 1e9, "GPa, G =", v / 1e9, "GPa");
  console.log("Node 0 displacement:");
  console.log("  Uy =", (w[1] * 1e3).toFixed(4), "mm (expected: -0.336 mm)");
  console.log("  Rx =", (w[3] * 1e3).toFixed(4), "mrad (expected: -3.75 mrad)");
  const n = o.state(""), O = o.state(void 0);
  o.derive(() => {
    if (n.val === "Report" && (O.val = h({
      template: u,
      data: c
    })), n.val === "Print") {
      h({
        template: u,
        data: c
      });
      const d = window.open("", "_blank");
      d && (d.document.write('<!DOCTYPE html><html><head><title>Logan 5.8 - Validation Report</title></head><body>${reportEl?.innerHTML || ""}</body></html>'), d.document.close()), n.val = "";
    }
    if (n.val === "HTML") {
      h({
        template: u,
        data: c
      });
      const d = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Logan 5.8 - Validation Report</title></head><body>${reportEl?.innerHTML || ""}</body></html>', t = new Blob([
        d
      ], {
        type: "text/html"
      }), b = URL.createObjectURL(t), l = document.createElement("a");
      l.href = b, l.download = "logan_5_8_report.html", document.body.appendChild(l), l.click(), document.body.removeChild(l), URL.revokeObjectURL(b), n.val = "";
    }
  });
  document.body.append(P({
    mesh: c,
    settingsObj: {
      deformedShape: true,
      loads: true,
      supports: true
    }
  }), A({
    dialogBody: O
  }), T({
    clickedButton: n,
    buttons: [
      "Report",
      "Print",
      "HTML"
    ],
    sourceCode: "https://github.com/madil4/awatif/blob/main/awatif-fem/src/deform.test.ts"
  }));
  document.title = "Logan 5.8 - Uy=" + (w[1] * 1e3).toFixed(2) + "mm";
});
