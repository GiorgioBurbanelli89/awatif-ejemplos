import { g as O, a as k, c as f, b as D, x as v, v as r, f as M, h as z, j as T, k as R } from "./getReport-CnIkx0ml.js";
import { a as U } from "./analyze-CmnHHflB.js";
import { d as E, __tla as __tla_0 } from "./deformCpp-CS-wCYO-.js";
import { g as P } from "./getParameters-Ce3duQQe.js";
import "./complex-i8qiIvCl.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const g = (d, e = 4) => d.toFixed(e);
  function w(d) {
    var _a, _b, _c, _d;
    const e = ((_a = d.nodes) == null ? void 0 : _a.val) || [], o = ((_b = d.elements) == null ? void 0 : _b.val) || [], s = (_c = d.deformOutputs) == null ? void 0 : _c.val, u = (_d = d.analyzeOutputs) == null ? void 0 : _d.val, i = O(), n = k();
    let c = 0, x = 0;
    (s == null ? void 0 : s.deformations) && s.deformations.forEach((l, t) => {
      const a = Math.sqrt(l[0] * l[0] + l[1] * l[1] + l[2] * l[2]);
      a > Math.abs(c) && (c = a, x = t);
    });
    let m = 0, y = 0;
    return (u == null ? void 0 : u.bendingsZ) && u.bendingsZ.forEach((l, t) => {
      const a = Math.max(Math.abs(l[0]), Math.abs(l[1]));
      a > Math.abs(m) && (m = a, y = t);
    }), v`
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 900px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #333; border-bottom: 2px solid #0066cc;">1D Mesh - Portal Frame Analysis</h1>

      <h2>Description</h2>
      <p>Parametric portal frame with variable mesh density. The structure consists of three connected beam segments forming a U-shape configuration.</p>

      <h2>Model Summary</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr style="background: #f5f5f5;">
          <th style="border: 1px solid #ddd; padding: 8px;">Parameter</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Value</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Total Nodes</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${e.length}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Total Elements</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${o.length}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Element Type</td>
          <td style="border: 1px solid #ddd; padding: 8px;">3D Beam (6 DOF per node)</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Supports</td>
          <td style="border: 1px solid #ddd; padding: 8px;">Fixed at base (nodes 0 and ${e.length - 1})</td>
        </tr>
      </table>

      <h2>Material Properties</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr style="background: #f5f5f5;">
          <th style="border: 1px solid #ddd; padding: 8px;">Property</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Value</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Elastic Modulus (E)</td>
          <td style="border: 1px solid #ddd; padding: 8px;">10 (normalized)</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Shear Modulus (G)</td>
          <td style="border: 1px solid #ddd; padding: 8px;">10 (normalized)</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Area (A)</td>
          <td style="border: 1px solid #ddd; padding: 8px;">10 (normalized)</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Moments of Inertia (Iy, Iz)</td>
          <td style="border: 1px solid #ddd; padding: 8px;">10 (normalized)</td>
        </tr>
      </table>

      <h2>Results Summary</h2>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div style="background: #f0f8ff; padding: 15px; border-radius: 8px;">
          <h3 style="margin-top: 0; color: #0066cc;">Maximum Displacement</h3>
          <p style="font-size: 24px; margin: 0;">
            <b>${g(f(c), 4)}</b> ${i}
          </p>
          <p style="color: #666; margin: 5px 0 0 0;">at Node ${x}</p>
        </div>
        <div style="background: #fff0f0; padding: 15px; border-radius: 8px;">
          <h3 style="margin-top: 0; color: #cc0000;">Maximum Moment</h3>
          <p style="font-size: 24px; margin: 0;">
            <b>${g(D(m), 2)}</b> ${n}·${i}
          </p>
          <p style="color: #666; margin: 5px 0 0 0;">at Element ${y}</p>
        </div>
      </div>

      ${(s == null ? void 0 : s.deformations) ? v`
        <h2>Nodal Displacements (first 10 nodes)</h2>
        <table style="border-collapse: collapse; width: 100%;">
          <tr style="background: #f5f5f5;">
            <th style="border: 1px solid #ddd; padding: 8px;">Node</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Ux (${i})</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Uy (${i})</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Uz (${i})</th>
          </tr>
          ${Array.from(s.deformations.entries()).slice(0, 10).map(([l, t]) => v`
              <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">${l}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">${g(f(t[0]), 6)}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">${g(f(t[1]), 6)}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">${g(f(t[2]), 6)}</td>
              </tr>
            `)}
          ${e.length > 10 ? v`<tr><td colspan="4" style="text-align: center; padding: 8px; color: #666;">... (${e.length - 10} more nodes)</td></tr>` : ""}
        </table>
      ` : ""}

      <hr style="margin-top: 30px;">
      <p style="font-size: 11px; color: #666;">Generated with Awatif - 1D Mesh Portal Frame</p>
    </div>
  `;
  }
  const b = {
    meshDensity: {
      value: r.state(7),
      min: 1,
      max: 7,
      step: 1,
      label: "mesh density"
    },
    span: {
      value: r.state(10),
      min: 1,
      max: 20
    },
    height: {
      value: r.state(10),
      min: 1,
      max: 10
    },
    load: {
      value: r.state(10),
      min: 0,
      max: 20
    }
  }, p = {
    nodes: r.state([]),
    elements: r.state([]),
    nodeInputs: r.state({}),
    elementInputs: r.state({}),
    deformOutputs: r.state({}),
    analyzeOutputs: r.state({})
  };
  r.derive(() => {
    const d = [], e = [], o = b.meshDensity.value.val, s = b.height.value.val, u = b.span.value.val, i = b.load.value.val;
    d.push(...[
      ...Array(o + 1).keys()
    ].map((t) => [
      0,
      0,
      s / o * t
    ])), e.push(...[
      ...Array(o).keys()
    ].map((t) => [
      t,
      t + 1
    ]));
    let n = d.length;
    d.push(...[
      ...Array(o).keys()
    ].map((t) => [
      u / o * (t + 1),
      0,
      s
    ])), e.push(...[
      ...Array(o - 1).keys()
    ].map((t) => [
      n + t,
      n + t + 1
    ])), e.push([
      n - 1,
      n
    ]), n = d.length;
    const c = n - 1;
    d.push(...[
      ...Array(o).keys()
    ].map((t) => [
      u,
      0,
      s - s / o * (t + 1)
    ])), e.push(...[
      ...Array(o - 1).keys()
    ].map((t) => [
      n + t,
      n + t + 1
    ])), e.push([
      n - 1,
      n
    ]);
    const x = {
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
          d.length - 1,
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
            i,
            0,
            0,
            0,
            0,
            0
          ]
        ]
      ])
    }, m = {
      elasticities: new Map(e.map((t, a) => [
        a,
        10
      ])),
      shearModuli: new Map(e.map((t, a) => [
        a,
        10
      ])),
      areas: new Map(e.map((t, a) => [
        a,
        10
      ])),
      torsionalConstants: new Map(e.map((t, a) => [
        a,
        10
      ])),
      momentsOfInertiaY: new Map(e.map((t, a) => [
        a,
        10
      ])),
      momentsOfInertiaZ: new Map(e.map((t, a) => [
        a,
        10
      ]))
    }, y = E(d, e, x, m), l = U(d, e, m, y);
    p.nodes.val = d, p.elements.val = e, p.nodeInputs.val = x, p.elementInputs.val = m, p.deformOutputs.val = y, p.analyzeOutputs.val = l;
  });
  const h = r.state(""), $ = r.state(void 0);
  r.derive(() => {
    if (h.val === "Report" && ($.val = M({
      template: w,
      data: p
    })), h.val === "Print") {
      M({
        template: w,
        data: p
      });
      const d = window.open("", "_blank");
      d && (d.document.write('<!DOCTYPE html><html><head><title>1D Mesh - Portal Frame Report</title></head><body>${reportEl?.innerHTML || ""}</body></html>'), d.document.close()), h.val = "";
    }
    if (h.val === "HTML") {
      M({
        template: w,
        data: p
      });
      const d = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>1D Mesh - Portal Frame Report</title></head><body>${reportEl?.innerHTML || ""}</body></html>', e = new Blob([
        d
      ], {
        type: "text/html"
      }), o = URL.createObjectURL(e), s = document.createElement("a");
      s.href = o, s.download = "1d_mesh_report.html", document.body.appendChild(s), s.click(), document.body.removeChild(s), URL.revokeObjectURL(o), h.val = "";
    }
  });
  document.body.append(P(b), z({
    mesh: p,
    settingsObj: {
      deformedShape: true
    }
  }), T({
    dialogBody: $
  }), R({
    clickedButton: h,
    buttons: [
      "Report",
      "Print",
      "HTML"
    ],
    sourceCode: "https://github.com/madil4/awatif/blob/main/examples/src/1d-mesh/main.ts",
    author: "https://www.linkedin.com/in/madil4/"
  }));
});
