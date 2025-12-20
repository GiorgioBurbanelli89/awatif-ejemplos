import { g as R, x as p, v as a, f as b, h as A, j as C, k as U } from "./getReport-CnIkx0ml.js";
import { g as N } from "./getParameters-Ce3duQQe.js";
import { g as B, __tla as __tla_0 } from "./getMesh-DmUdekin.js";
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
  const l = (o, t = 4) => o.toFixed(t);
  function m(o) {
    var _a, _b;
    const t = ((_a = o.nodes) == null ? void 0 : _a.val) || [], r = ((_b = o.elements) == null ? void 0 : _b.val) || [], e = R(), f = Math.min(...t.map((d) => d[0])), $ = Math.max(...t.map((d) => d[0])), v = Math.min(...t.map((d) => d[2])), M = Math.max(...t.map((d) => d[2]));
    let h = 0;
    r.forEach((d) => {
      if (d.length === 3) {
        const [i, k, D] = d, n = t[i], x = t[k], g = t[D];
        if (n && x && g) {
          const L = 0.5 * Math.abs((x[0] - n[0]) * (g[2] - n[2]) - (g[0] - n[0]) * (x[2] - n[2]));
          h += L;
        }
      }
    });
    const E = r.length > 0 ? h / r.length : 0;
    return p`
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 900px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #333; border-bottom: 2px solid #0066cc;">2D Mesh Generation Report</h1>

      <h2>Description</h2>
      <p>Automatic triangular mesh generation using the Triangle library (Delaunay triangulation). The mesh is generated from a polygon boundary with parametric control points.</p>

      <h2>Mesh Statistics</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr style="background: #f5f5f5;">
          <th style="border: 1px solid #ddd; padding: 8px;">Property</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Value</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Total Nodes</td>
          <td style="border: 1px solid #ddd; padding: 8px;"><b>${t.length}</b></td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Total Elements (Triangles)</td>
          <td style="border: 1px solid #ddd; padding: 8px;"><b>${r.length}</b></td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Element Type</td>
          <td style="border: 1px solid #ddd; padding: 8px;">3-node triangles (CST)</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Average Element Area</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${l(E, 3)} ${e}²</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Total Mesh Area</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${l(h, 2)} ${e}²</td>
        </tr>
      </table>

      <h2>Bounding Box</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr style="background: #f5f5f5;">
          <th style="border: 1px solid #ddd; padding: 8px;">Dimension</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Min</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Max</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Size</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">X (${e})</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${l(f, 2)}</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${l($, 2)}</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${l($ - f, 2)}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Z (${e})</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${l(v, 2)}</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${l(M, 2)}</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${l(M - v, 2)}</td>
        </tr>
      </table>

      <h2>Meshing Algorithm</h2>
      <ul>
        <li><b>Library:</b> Triangle (Jonathan Shewchuk)</li>
        <li><b>Method:</b> Constrained Delaunay Triangulation</li>
        <li><b>Quality:</b> Automatic refinement for mesh quality</li>
      </ul>

      <h2>Node Coordinates (first 15)</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr style="background: #f5f5f5;">
          <th style="border: 1px solid #ddd; padding: 8px;">Node</th>
          <th style="border: 1px solid #ddd; padding: 8px;">X (${e})</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Y (${e})</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Z (${e})</th>
        </tr>
        ${t.slice(0, 15).map((d, i) => p`
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">${i}</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${l(d[0], 3)}</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${l(d[1], 3)}</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${l(d[2], 3)}</td>
          </tr>
        `)}
        ${t.length > 15 ? p`<tr><td colspan="4" style="text-align: center; padding: 8px; color: #666;">... (${t.length - 15} more nodes)</td></tr>` : ""}
      </table>

      <h2>Element Connectivity (first 15)</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr style="background: #f5f5f5;">
          <th style="border: 1px solid #ddd; padding: 8px;">Element</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Node 1</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Node 2</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Node 3</th>
        </tr>
        ${r.slice(0, 15).map((d, i) => p`
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">${i}</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${d[0]}</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${d[1]}</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${d[2]}</td>
          </tr>
        `)}
        ${r.length > 15 ? p`<tr><td colspan="4" style="text-align: center; padding: 8px; color: #666;">... (${r.length - 15} more elements)</td></tr>` : ""}
      </table>

      <hr style="margin-top: 30px;">
      <p style="font-size: 11px; color: #666;">Generated with Awatif - 2D Mesh Generation</p>
    </div>
  `;
  }
  const w = {
    boundary: {
      value: a.state(5),
      min: 1,
      max: 10,
      step: 0.1,
      label: "Boundary point"
    }
  }, c = a.state([]), u = a.state([]), y = {
    nodes: c,
    elements: u
  };
  a.derive(() => {
    const { nodes: o, elements: t } = B({
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
        [
          w.boundary.value.val,
          0,
          3
        ],
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
      ]
    });
    c.val = o, u.val = t;
  });
  const s = a.state(""), T = a.state(void 0);
  a.derive(() => {
    if (s.val === "Report" && (T.val = b({
      template: m,
      data: y
    })), s.val === "Print") {
      b({
        template: m,
        data: y
      });
      const o = window.open("", "_blank");
      o && (o.document.write('<!DOCTYPE html><html><head><title>2D Mesh Report</title></head><body>${reportEl?.innerHTML || ""}</body></html>'), o.document.close()), s.val = "";
    }
    if (s.val === "HTML") {
      b({
        template: m,
        data: y
      });
      const o = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>2D Mesh Report</title></head><body>${reportEl?.innerHTML || ""}</body></html>', t = new Blob([
        o
      ], {
        type: "text/html"
      }), r = URL.createObjectURL(t), e = document.createElement("a");
      e.href = r, e.download = "2d_mesh_report.html", document.body.appendChild(e), e.click(), document.body.removeChild(e), URL.revokeObjectURL(r), s.val = "";
    }
  });
  document.body.append(N(w), A({
    mesh: {
      nodes: c,
      elements: u
    }
  }), C({
    dialogBody: T
  }), U({
    clickedButton: s,
    buttons: [
      "Report",
      "Print",
      "HTML"
    ],
    sourceCode: "https://github.com/madil4/awatif/blob/main/examples/src/2d-mesh/main.ts",
    author: "https://www.linkedin.com/in/madil4/"
  }));
});
