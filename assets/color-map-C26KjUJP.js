import { g as z, x as h, v as d, C as k, f as b, h as C, D as R, j as L, k as T } from "./getReport-CnIkx0ml.js";
import { g as N } from "./getParameters-Ce3duQQe.js";
import { g as U, __tla as __tla_0 } from "./getMesh-DmUdekin.js";
import { n as E, s as I } from "./pureFunctionsAny.generated-Dh3LO6N2.js";
import "./__vite-browser-external-D7Ct-6yo.js";
import "./complex-i8qiIvCl.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const a = (e, o = 4) => e.toFixed(o);
  function x(e) {
    var _a, _b, _c;
    const o = ((_a = e.nodes) == null ? void 0 : _a.val) || [], i = ((_b = e.elements) == null ? void 0 : _b.val) || [], t = ((_c = e.distances) == null ? void 0 : _c.val) || [], u = z(), m = t.length > 0 ? Math.min(...t) : 0, s = t.length > 0 ? Math.max(...t) : 0, M = t.length > 0 ? t.reduce((p, l) => p + l, 0) / t.length : 0, $ = t.indexOf(m), D = t.indexOf(s);
    return h`
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 900px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #333; border-bottom: 2px solid #0066cc;">Color Map Visualization Report</h1>

      <h2>Description</h2>
      <p>Interactive color map visualization showing scalar field distribution over a 2D mesh. The color gradient represents the distance from each node to a reference boundary point.</p>

      <h2>Mesh Information</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr style="background: #f5f5f5;">
          <th style="border: 1px solid #ddd; padding: 8px;">Property</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Value</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Total Nodes</td>
          <td style="border: 1px solid #ddd; padding: 8px;"><b>${o.length}</b></td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Total Elements</td>
          <td style="border: 1px solid #ddd; padding: 8px;"><b>${i.length}</b></td>
        </tr>
      </table>

      <h2>Distance Field Statistics</h2>
      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 15px; margin: 20px 0;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px; text-align: center;">
          <p style="margin: 0; font-size: 12px; opacity: 0.9;">MINIMUM</p>
          <p style="margin: 5px 0; font-size: 28px; font-weight: bold;">${a(m, 2)}</p>
          <p style="margin: 0; font-size: 11px; opacity: 0.8;">Node ${$}</p>
        </div>
        <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 20px; border-radius: 8px; text-align: center;">
          <p style="margin: 0; font-size: 12px; opacity: 0.9;">AVERAGE</p>
          <p style="margin: 5px 0; font-size: 28px; font-weight: bold;">${a(M, 2)}</p>
          <p style="margin: 0; font-size: 11px; opacity: 0.8;">${u}</p>
        </div>
        <div style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; padding: 20px; border-radius: 8px; text-align: center;">
          <p style="margin: 0; font-size: 12px; opacity: 0.9;">MAXIMUM</p>
          <p style="margin: 5px 0; font-size: 28px; font-weight: bold;">${a(s, 2)}</p>
          <p style="margin: 0; font-size: 11px; opacity: 0.8;">Node ${D}</p>
        </div>
      </div>

      <h2>Color Scale</h2>
      <div style="display: flex; align-items: center; margin: 20px 0;">
        <span style="margin-right: 10px;">${a(m, 2)}</span>
        <div style="flex: 1; height: 30px; background: linear-gradient(to right, #0000ff, #00ffff, #00ff00, #ffff00, #ff0000); border-radius: 4px;"></div>
        <span style="margin-left: 10px;">${a(s, 2)}</span>
      </div>
      <p style="text-align: center; color: #666; font-size: 12px;">Distance from boundary point (${u})</p>

      <h2>Visualization Features</h2>
      <ul>
        <li><b>Color Mapping:</b> Rainbow spectrum (blue → red)</li>
        <li><b>Interpolation:</b> Linear per-vertex coloring</li>
        <li><b>Interactive:</b> Boundary point position is adjustable via slider</li>
        <li><b>Real-time:</b> Colors update dynamically with parameter changes</li>
      </ul>

      <h2>Sample Distance Values (first 20 nodes)</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr style="background: #f5f5f5;">
          <th style="border: 1px solid #ddd; padding: 8px;">Node</th>
          <th style="border: 1px solid #ddd; padding: 8px;">X</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Z</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Distance</th>
        </tr>
        ${o.slice(0, 20).map((p, l) => h`
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">${l}</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${a(p[0], 2)}</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${a(p[2], 2)}</td>
            <td style="border: 1px solid #ddd; padding: 8px; background: hsl(${240 - (t[l] || 0) / s * 240}, 70%, 90%);">${a(t[l] || 0, 3)}</td>
          </tr>
        `)}
        ${o.length > 20 ? h`<tr><td colspan="4" style="text-align: center; padding: 8px; color: #666;">... (${o.length - 20} more nodes)</td></tr>` : ""}
      </table>

      <hr style="margin-top: 30px;">
      <p style="font-size: 11px; color: #666;">Generated with Awatif - Color Map Visualization</p>
    </div>
  `;
  }
  const v = {
    boundary: {
      value: d.state(10),
      min: 1,
      max: 10,
      step: 0.1,
      label: "Boundary point"
    }
  }, r = d.state([]), c = d.state([]), g = d.state([]), y = d.state([
    k(r, c, g)
  ]), f = {
    nodes: r,
    elements: c,
    distances: g
  };
  d.derive(() => {
    const e = [
      v.boundary.value.val,
      0,
      3
    ], { nodes: o, elements: i } = U({
      points: [
        [
          0,
          0,
          0
        ],
        [
          5,
          0,
          0
        ],
        e,
        [
          8,
          0,
          7
        ],
        [
          15,
          0,
          5
        ],
        [
          15,
          0,
          0
        ],
        [
          20,
          0,
          0
        ],
        [
          20,
          0,
          10
        ],
        [
          0,
          0,
          10
        ],
        [
          0,
          0,
          0
        ]
      ],
      polygon: [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8
      ],
      maxMeshSize: 1
    });
    r.val = o, c.val = i, g.val = V(e, r.val), y.val = [
      ...y.rawVal
    ];
  });
  const n = d.state(""), w = d.state(void 0);
  d.derive(() => {
    if (n.val === "Report" && (w.val = b({
      template: x,
      data: f
    })), n.val === "Print") {
      b({
        template: x,
        data: f
      });
      const e = window.open("", "_blank");
      e && (e.document.write('<!DOCTYPE html><html><head><title>Color Map Report</title></head><body>${reportEl?.innerHTML || ""}</body></html>'), e.document.close()), n.val = "";
    }
    if (n.val === "HTML") {
      b({
        template: x,
        data: f
      });
      const e = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Color Map Report</title></head><body>${reportEl?.innerHTML || ""}</body></html>', o = new Blob([
        e
      ], {
        type: "text/html"
      }), i = URL.createObjectURL(o), t = document.createElement("a");
      t.href = i, t.download = "color_map_report.html", document.body.appendChild(t), t.click(), document.body.removeChild(t), URL.revokeObjectURL(i), n.val = "";
    }
  });
  document.body.append(N(v), C({
    mesh: {
      nodes: r,
      elements: c
    },
    objects3D: y
  }), R(g), L({
    dialogBody: w
  }), T({
    clickedButton: n,
    buttons: [
      "Report",
      "Print",
      "HTML"
    ],
    sourceCode: "https://github.com/madil4/awatif/blob/main/examples/src/color-map/main.ts",
    author: "https://www.linkedin.com/in/siu-kai-cheung/"
  }));
  function V(e, o) {
    return o.map((i) => E(I(i, e)));
  }
});
