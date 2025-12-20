import { w as z, g as U, x, v as n, f as v, h as O, j as A, k as N } from "./getReport-CnIkx0ml.js";
import { g as j } from "./getParameters-Ce3duQQe.js";
function F({ onToolbarClick: t }) {
  const d = document.createElement("div");
  return d.id = "drawing-toolbar", new z({ name: "toolbar", box: d, items: [{ type: "radio", id: "1st-floor", text: "1st Floor", checked: true }, { type: "radio", id: "2nd-floor", text: "2nd Floor" }], onClick(l) {
    t(l.target);
  } }), d;
}
const p = (t, d = 4) => t.toFixed(d);
function w(t) {
  var _a, _b;
  const d = ((_a = t.nodes) == null ? void 0 : _a.val) || [], l = ((_b = t.elements) == null ? void 0 : _b.val) || [], o = U(), i = l.filter((e) => e.length === 2).length, r = l.filter((e) => e.length > 2).length, s = d.length > 0 ? Math.min(...d.map((e) => e[0])) : 0, a = d.length > 0 ? Math.max(...d.map((e) => e[0])) : 0, c = d.length > 0 ? Math.min(...d.map((e) => e[1])) : 0, M = d.length > 0 ? Math.max(...d.map((e) => e[1])) : 0, D = d.length > 0 ? Math.max(...d.map((e) => e[2])) : 0;
  return x`
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 900px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #333; border-bottom: 2px solid #0066cc;">Interactive Drawing Tool Report</h1>

      <h2>Description</h2>
      <p>Interactive 3D drawing tool for creating structural elements. Users can place points on a grid plane to define column positions, and draw polylines to define slab boundaries. The system automatically generates 3D structural elements from the 2D drawings.</p>

      <h2>Drawing Features</h2>
      <ul>
        <li><b>Multi-floor support:</b> Switch between floor levels (1st and 2nd floor)</li>
        <li><b>Point placement:</b> Click to place column positions</li>
        <li><b>Polyline drawing:</b> Connect points to define slab edges</li>
        <li><b>Parametric columns:</b> Adjustable width parameter</li>
        <li><b>Real-time 3D preview:</b> Instant visualization of structural model</li>
      </ul>

      <h2>Model Statistics</h2>
      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 15px; margin: 20px 0;">
        <div style="background: #e3f2fd; padding: 20px; border-radius: 8px; text-align: center;">
          <p style="margin: 0; font-size: 12px; color: #1565c0;">TOTAL NODES</p>
          <p style="margin: 5px 0; font-size: 32px; font-weight: bold; color: #0d47a1;">${d.length}</p>
        </div>
        <div style="background: #fff3e0; padding: 20px; border-radius: 8px; text-align: center;">
          <p style="margin: 0; font-size: 12px; color: #e65100;">COLUMNS</p>
          <p style="margin: 5px 0; font-size: 32px; font-weight: bold; color: #bf360c;">${i}</p>
        </div>
        <div style="background: #e8f5e9; padding: 20px; border-radius: 8px; text-align: center;">
          <p style="margin: 0; font-size: 12px; color: #2e7d32;">SLABS</p>
          <p style="margin: 5px 0; font-size: 32px; font-weight: bold; color: #1b5e20;">${r}</p>
        </div>
      </div>

      <h2>Bounding Box</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr style="background: #f5f5f5;">
          <th style="border: 1px solid #ddd; padding: 8px;">Dimension</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Min</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Max</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Size</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">X (${o})</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${p(s, 2)}</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${p(a, 2)}</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${p(a - s, 2)}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Y (${o})</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${p(c, 2)}</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${p(M, 2)}</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${p(M - c, 2)}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Z (Height)</td>
          <td style="border: 1px solid #ddd; padding: 8px;">0</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${p(D, 2)}</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${p(D, 2)}</td>
        </tr>
      </table>

      <h2>Interaction Controls</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr style="background: #f5f5f5;">
          <th style="border: 1px solid #ddd; padding: 8px;">Action</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Description</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;"><b>Click on grid</b></td>
          <td style="border: 1px solid #ddd; padding: 8px;">Add a new point (column position)</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;"><b>Floor buttons</b></td>
          <td style="border: 1px solid #ddd; padding: 8px;">Switch between 1st and 2nd floor</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;"><b>Width slider</b></td>
          <td style="border: 1px solid #ddd; padding: 8px;">Adjust column width parameter</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;"><b>Orbit</b></td>
          <td style="border: 1px solid #ddd; padding: 8px;">Left-click drag to rotate view</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;"><b>Pan</b></td>
          <td style="border: 1px solid #ddd; padding: 8px;">Right-click drag to pan view</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;"><b>Zoom</b></td>
          <td style="border: 1px solid #ddd; padding: 8px;">Mouse wheel to zoom in/out</td>
        </tr>
      </table>

      <h2>Generated Elements</h2>
      <h3>Line Elements (Columns)</h3>
      <table style="border-collapse: collapse; width: 100%;">
        <tr style="background: #f5f5f5;">
          <th style="border: 1px solid #ddd; padding: 8px;">Element</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Start Node</th>
          <th style="border: 1px solid #ddd; padding: 8px;">End Node</th>
        </tr>
        ${l.filter((e) => e.length === 2).slice(0, 10).map((e, u) => x`
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">${u}</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${e[0]}</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${e[1]}</td>
          </tr>
        `)}
        ${i > 10 ? x`<tr><td colspan="3" style="text-align: center; padding: 8px; color: #666;">... (${i - 10} more)</td></tr>` : ""}
      </table>

      ${r > 0 ? x`
        <h3>Polygon Elements (Slabs)</h3>
        <table style="border-collapse: collapse; width: 100%;">
          <tr style="background: #f5f5f5;">
            <th style="border: 1px solid #ddd; padding: 8px;">Element</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Nodes</th>
          </tr>
          ${l.filter((e) => e.length > 2).map((e, u) => x`
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px;">${u}</td>
              <td style="border: 1px solid #ddd; padding: 8px;">${e.join(" \u2192 ")}</td>
            </tr>
          `)}
        </table>
      ` : ""}

      <hr style="margin-top: 30px;">
      <p style="font-size: 11px; color: #666;">Generated with Awatif - Interactive Drawing Tool</p>
    </div>
  `;
}
const b = n.state([]), m = n.state([]), $ = { nodes: b, elements: m }, f = n.state([[5, 5, 0], [10, 15, 0], [15, 10, 0]]), k = n.state([[10, 2, 5], [2, 2, 5], [2, 10, 5], [7, 10, 5]]), L = n.state([]), T = n.state([[0, 1, 2, 3], []]), h = n.state([]), y = n.state([]), C = { width: { value: n.state(2), min: 0.5, max: 5, step: 0.1 } }, P = n.state({ position: [10, 10, 0], rotation: [Math.PI / 2, 0, 0] }), R = 5;
h.val = f.val;
let E = "1st-floor";
function H(t) {
  E = t, P.val = { position: [10, 10, t === "1st-floor" ? 0 : R], rotation: [Math.PI / 2, 0, 0] }, h.val = t === "1st-floor" ? f.val : k.val, y.val = t === "1st-floor" ? L.val : T.val;
}
n.derive(() => {
  E == "1st-floor" && (f.val = h.val, L.val = y.val), E == "2nd-floor" && (k.val = h.val, T.val = y.val);
});
n.derive(() => {
  b.val = [], m.val = [];
  const t = [], d = [];
  f.val.forEach((r, s) => {
    const { columnNodes: a, columnElements: c } = B(s * 4, r, R, C.width.value.val);
    t.push(...a), d.push(...c);
  });
  const l = [];
  k.val.forEach((r, s) => {
    l.push(r);
  });
  const o = [], i = t.length;
  T.val.forEach((r, s) => {
    const a = r.map((c) => i + c);
    o.push(a);
  }), b.val = [...b.rawVal, ...t, ...l], m.val = [...m.rawVal, ...d, ...o];
});
const g = n.state(""), S = n.state(void 0);
n.derive(() => {
  if (g.val === "Report" && (S.val = v({ template: w, data: $ })), g.val === "Print") {
    v({ template: w, data: $ });
    const t = window.open("", "_blank");
    t && (t.document.write('<!DOCTYPE html><html><head><title>Drawing Tool Report</title></head><body>${reportEl?.innerHTML || ""}</body></html>'), t.document.close()), g.val = "";
  }
  if (g.val === "HTML") {
    v({ template: w, data: $ });
    const t = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Drawing Tool Report</title></head><body>${reportEl?.innerHTML || ""}</body></html>', d = new Blob([t], { type: "text/html" }), l = URL.createObjectURL(d), o = document.createElement("a");
    o.href = l, o.download = "drawing_report.html", document.body.appendChild(o), o.click(), document.body.removeChild(o), URL.revokeObjectURL(l), g.val = "";
  }
});
document.body.append(j(C), O({ mesh: { nodes: b, elements: m }, drawingObj: { points: h, polylines: y, gridTarget: P } }), F({ onToolbarClick: H }), A({ dialogBody: S }), N({ clickedButton: g, buttons: ["Report", "Print", "HTML"], sourceCode: "https://github.com/madil4/awatif/blob/main/examples/src/drawing/main.ts", author: "https://www.linkedin.com/in/madil4/" }));
function B(t, d, l, o) {
  const i = d[0], r = d[1], s = [d, [i - 0.5 * o, r - 0.5 * o, l], [i + 0.5 * o, r - 0.5 * o, l], [i, r + 0.5 * o, l]], a = [[t, t + 1], [t, t + 2], [t, t + 3]];
  return { columnNodes: s, columnElements: a };
}
