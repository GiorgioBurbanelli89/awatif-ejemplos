import { g as k, x as g, n as D, B as C, o as E, v as n, p as P, f as h, k as B, j as U, h as z } from "./getReport-CnIkx0ml.js";
import { g as A } from "./getTables-gQyJqEo2.js";
const e = (l, t = 4) => l.toFixed(t);
function y(l) {
  var _a;
  const t = ((_a = l.inputPolyline) == null ? void 0 : _a.val) || [], b = k();
  let i = 0;
  for (let d = 0; d < t.length - 1; d++) {
    const o = t[d], a = t[d + 1], s = a[0] - o[0], p = a[1] - o[1], x = a[2] - o[2];
    i += Math.sqrt(s * s + p * p + x * x);
  }
  const w = t.length > 0 ? Math.min(...t.map((d) => d[0])) : 0, T = t.length > 0 ? Math.max(...t.map((d) => d[0])) : 0, $ = t.length > 0 ? Math.min(...t.map((d) => d[2])) : 0, L = t.length > 0 ? Math.max(...t.map((d) => d[2])) : 0;
  return g`
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 900px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #333; border-bottom: 2px solid #0066cc;">Tabular Data Editor Report</h1>

      <h2>Description</h2>
      <p>Demonstration of the W2UI tabular data editor component. This example shows how to create interactive tables for editing coordinate data that updates the 3D visualization in real-time.</p>

      <h2>Features</h2>
      <ul>
        <li><b>Editable cells:</b> Click on any coordinate to edit its value</li>
        <li><b>Real-time sync:</b> Changes immediately reflect in the 3D view</li>
        <li><b>Data validation:</b> Input is validated as floating-point numbers</li>
        <li><b>Add/Remove rows:</b> Dynamically modify the polyline vertices</li>
      </ul>

      <h2>Polyline Statistics</h2>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 20px 0;">
        <div style="background: #e3f2fd; padding: 20px; border-radius: 8px; text-align: center;">
          <p style="margin: 0; font-size: 12px; color: #1565c0;">VERTICES</p>
          <p style="margin: 5px 0; font-size: 32px; font-weight: bold; color: #0d47a1;">${t.length}</p>
        </div>
        <div style="background: #e8f5e9; padding: 20px; border-radius: 8px; text-align: center;">
          <p style="margin: 0; font-size: 12px; color: #2e7d32;">TOTAL LENGTH</p>
          <p style="margin: 5px 0; font-size: 32px; font-weight: bold; color: #1b5e20;">${e(i, 2)}</p>
          <p style="margin: 0; font-size: 11px; color: #666;">${b}</p>
        </div>
      </div>

      <h2>Bounding Box</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr style="background: #f5f5f5;">
          <th style="border: 1px solid #ddd; padding: 8px;">Dimension</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Min</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Max</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Range</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">X</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${e(w, 2)}</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${e(T, 2)}</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${e(T - w, 2)}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Z</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${e($, 2)}</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${e(L, 2)}</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${e(L - $, 2)}</td>
        </tr>
      </table>

      <h2>W2UI Table Configuration</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr style="background: #f5f5f5;">
          <th style="border: 1px solid #ddd; padding: 8px;">Property</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Value</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Library</td>
          <td style="border: 1px solid #ddd; padding: 8px;">W2UI v2.0</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Edit Type</td>
          <td style="border: 1px solid #ddd; padding: 8px;">Float (decimal numbers)</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Columns</td>
          <td style="border: 1px solid #ddd; padding: 8px;">X-coordinate, Y-coordinate, Z-coordinate</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Data Binding</td>
          <td style="border: 1px solid #ddd; padding: 8px;">VanJS reactive state</td>
        </tr>
      </table>

      <h2>Vertex Coordinates</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr style="background: #f5f5f5;">
          <th style="border: 1px solid #ddd; padding: 8px;">Point</th>
          <th style="border: 1px solid #ddd; padding: 8px;">X</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Y</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Z</th>
        </tr>
        ${t.map((d, o) => g`
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">${o + 1}</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${e(d[0], 2)}</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${e(d[1], 2)}</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${e(d[2], 2)}</td>
          </tr>
        `)}
      </table>

      <h2>Segment Lengths</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr style="background: #f5f5f5;">
          <th style="border: 1px solid #ddd; padding: 8px;">Segment</th>
          <th style="border: 1px solid #ddd; padding: 8px;">From</th>
          <th style="border: 1px solid #ddd; padding: 8px;">To</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Length</th>
        </tr>
        ${t.slice(0, -1).map((d, o) => {
    const a = t[o + 1], s = a[0] - d[0], p = a[1] - d[1], x = a[2] - d[2], R = Math.sqrt(s * s + p * p + x * x);
    return g`
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px;">${o + 1}</td>
              <td style="border: 1px solid #ddd; padding: 8px;">Point ${o + 1}</td>
              <td style="border: 1px solid #ddd; padding: 8px;">Point ${o + 2}</td>
              <td style="border: 1px solid #ddd; padding: 8px;">${e(R, 3)}</td>
            </tr>
          `;
  })}
        <tr style="background: #e8f5e9;">
          <td colspan="3" style="border: 1px solid #ddd; padding: 8px; text-align: right;"><b>Total Length:</b></td>
          <td style="border: 1px solid #ddd; padding: 8px;"><b>${e(i, 3)}</b></td>
        </tr>
      </table>

      <hr style="margin-top: 30px;">
      <p style="font-size: 11px; color: #666;">Generated with Awatif - Tabular Data Editor</p>
    </div>
  `;
}
const c = n.state([[0, 0, 0], [5, 0, 5], [10, 0, 0]]), M = new D(new C(), new E()), f = n.state([M]), v = /* @__PURE__ */ new Map(), m = { inputPolyline: c };
v.set("polyline", { text: "Polyline", fields: [{ field: "A", text: "X-coordinate", min: "25", editable: { type: "float" } }, { field: "B", text: "Y-coordinate", editable: { type: "float" } }, { field: "C", text: "Z-coordinate", editable: { type: "float" } }], data: c });
n.derive(() => c.val = v.get("polyline").data.val);
n.derive(() => {
  M.geometry.setAttribute("position", new P(c.val.flat(), 3)), f.val = [...f.rawVal];
});
const r = n.state(""), u = n.state(void 0);
n.derive(() => {
  if (r.val === "Tables" && (u.val = A({ tables: v })), r.val === "Report" && (u.val = h({ template: y, data: m })), r.val === "Print") {
    h({ template: y, data: m });
    const l = window.open("", "_blank");
    l && (l.document.write('<!DOCTYPE html><html><head><title>Tables Report</title></head><body>${reportEl?.innerHTML || ""}</body></html>'), l.document.close()), r.val = "";
  }
  if (r.val === "HTML") {
    h({ template: y, data: m });
    const l = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Tables Report</title></head><body>${reportEl?.innerHTML || ""}</body></html>', t = new Blob([l], { type: "text/html" }), b = URL.createObjectURL(t), i = document.createElement("a");
    i.href = b, i.download = "tables_report.html", document.body.appendChild(i), i.click(), document.body.removeChild(i), URL.revokeObjectURL(b), r.val = "";
  }
});
document.body.append(B({ clickedButton: r, buttons: ["Tables", "Report", "Print", "HTML"], sourceCode: "https://github.com/madil4/awatif/blob/main/examples/src/tables/main.ts", author: "https://www.linkedin.com/in/cal-mense/" }), U({ dialogBody: u }), z({ objects3D: f }));
