import { g as M, x as y, v as s, Q as z, V as f, f as v, h as R, j as T, k as D } from "./getReport-CnIkx0ml.js";
import { g as B } from "./getParameters-Ce3duQQe.js";
const i = (o, t = 4) => o.toFixed(t);
function w(o) {
  var _a, _b;
  const t = ((_a = o.nodes) == null ? void 0 : _a.val) || [], n = ((_b = o.elements) == null ? void 0 : _b.val) || [], d = M(), m = t.length > 0 ? Math.min(...t.map((r) => r[0])) : 0, g = t.length > 0 ? Math.max(...t.map((r) => r[0])) : 0, u = t.length > 0 ? Math.min(...t.map((r) => r[1])) : 0, x = t.length > 0 ? Math.max(...t.map((r) => r[1])) : 0, c = t.length > 0 ? Math.max(...t.map((r) => r[2])) : 0, h = n.filter((r) => {
    if (r.length !== 2) return false;
    const e = t[r[0]], a = t[r[1]];
    return e && a && Math.abs(e[1] - a[1]) < 1e-3;
  }).length, b = n.length - h;
  return y`
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 900px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #333; border-bottom: 2px solid #0066cc;">Parametric Curved Roof Structure</h1>

      <h2>Description</h2>
      <p>Parametric barrel vault structure generated using Bezier curves. The main arches follow a quadratic Bezier curve profile, connected by secondary beams forming a grid shell pattern.</p>

      <h2>Geometry Parameters</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr style="background: #f5f5f5;">
          <th style="border: 1px solid #ddd; padding: 8px;">Parameter</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Value</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Units</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">X Span</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${i(g - m, 1)}</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${d}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Y Span (Width)</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${i(x - u, 1)}</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${d}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Maximum Height</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${i(c, 1)}</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${d}</td>
        </tr>
      </table>

      <h2>Model Statistics</h2>
      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 15px; margin: 20px 0;">
        <div style="background: #e3f2fd; padding: 20px; border-radius: 8px; text-align: center;">
          <p style="margin: 0; font-size: 12px; color: #1565c0;">NODES</p>
          <p style="margin: 5px 0; font-size: 32px; font-weight: bold; color: #0d47a1;">${t.length}</p>
        </div>
        <div style="background: #fce4ec; padding: 20px; border-radius: 8px; text-align: center;">
          <p style="margin: 0; font-size: 12px; color: #c2185b;">MAIN ARCHES</p>
          <p style="margin: 5px 0; font-size: 32px; font-weight: bold; color: #880e4f;">${h}</p>
        </div>
        <div style="background: #e8f5e9; padding: 20px; border-radius: 8px; text-align: center;">
          <p style="margin: 0; font-size: 12px; color: #2e7d32;">SECONDARY</p>
          <p style="margin: 5px 0; font-size: 32px; font-weight: bold; color: #1b5e20;">${b}</p>
        </div>
      </div>

      <h2>Curve Type</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr style="background: #f5f5f5;">
          <th style="border: 1px solid #ddd; padding: 8px;">Property</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Value</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Curve Type</td>
          <td style="border: 1px solid #ddd; padding: 8px;">Quadratic Bezier (Three.js)</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Control Points</td>
          <td style="border: 1px solid #ddd; padding: 8px;">3 (Start, Control, End)</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Supports</td>
          <td style="border: 1px solid #ddd; padding: 8px;">Fixed at both ends of each arch</td>
        </tr>
      </table>

      <h2>Bezier Curve Formula</h2>
      <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; font-family: 'Times New Roman', serif;">
        <p style="font-size: 18px; text-align: center;">
          <b>B(t)</b> = (1-t)²<b>P₀</b> + 2(1-t)t<b>P₁</b> + t²<b>P₂</b>
        </p>
        <p style="text-align: center; color: #666; font-size: 14px;">
          where t ∈ [0, 1], P₀ = start, P₁ = control point, P₂ = end
        </p>
      </div>

      <h2>Node Coordinates (sample)</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr style="background: #f5f5f5;">
          <th style="border: 1px solid #ddd; padding: 8px;">Node</th>
          <th style="border: 1px solid #ddd; padding: 8px;">X (${d})</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Y (${d})</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Z (${d})</th>
        </tr>
        ${t.slice(0, 15).map((r, e) => y`
          <tr>
            <td style="border: 1px solid #ddd; padding: 8px;">${e}</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${i(r[0], 3)}</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${i(r[1], 3)}</td>
            <td style="border: 1px solid #ddd; padding: 8px;">${i(r[2], 3)}</td>
          </tr>
        `)}
        ${t.length > 15 ? y`<tr><td colspan="4" style="text-align: center; padding: 8px; color: #666;">... (${t.length - 15} more nodes)</td></tr>` : ""}
      </table>

      <hr style="margin-top: 30px;">
      <p style="font-size: 11px; color: #666;">Generated with Awatif - Parametric Curved Structure</p>
    </div>
  `;
}
const l = { xSpan: { value: s.state(16), min: 1, max: 20, step: 0.1, label: "xSpan (m)" }, xDivisions: { value: s.state(14), min: 5, max: 20, step: 1 }, ySpan: { value: s.state(5), min: 1, max: 10, step: 0.1, label: "ySpan (m)" }, yDivisions: { value: s.state(3), min: 1, max: 5, step: 1 }, height: { value: s.state(9), min: 0, max: 15, step: 0.1, label: "height (m)" }, heightOffset: { value: s.state(0), min: -10, max: 10, step: 0.1, label: "height offset (m)" } }, $ = s.state([]), P = s.state([]), C = s.state({}), S = { nodes: $, elements: P, nodeInputs: C };
s.derive(() => {
  const o = l.xSpan.value.val, t = l.xDivisions.value.val, n = l.ySpan.value.val, d = l.yDivisions.value.val, m = l.height.value.val, g = l.heightOffset.value.val, u = new z(new f(0, 0, 0), new f(0 + o / 2 + g, 0, m), new f(0 + o, 0, 0)), x = [], c = [];
  for (let e = 0; e <= d; e++) x.push(...u.getPoints(t).map((a) => (a.setY(0 + e * (n / d)), a.toArray())));
  for (let e = 0; e <= (d + 1) * t; e += t + 1) for (let a = 0; a < t; a++) c.push([e + a, e + a + 1]);
  for (let e = 0; e < d * (t + 1); e += t + 1) for (let a = 0; a < t + 1; a++) c.push([a + e, a + t + 1 + e]);
  const h = [...Array(d + 1).keys()].map((e) => (t + 1) * e), b = [...Array(d + 1).keys()].map((e) => (t + 1) * e + t), r = { supports: new Map([...h.map((e) => [e, [true, true, true, true, true, true]]), ...b.map((e) => [e, [true, true, true, true, true, true]])]) };
  $.val = x, P.val = c, C.val = r;
});
const p = s.state(""), k = s.state(void 0);
s.derive(() => {
  if (p.val === "Report" && (k.val = v({ template: w, data: S })), p.val === "Print") {
    v({ template: w, data: S });
    const o = window.open("", "_blank");
    o && (o.document.write('<!DOCTYPE html><html><head><title>Curved Structure Report</title></head><body>${reportEl?.innerHTML || ""}</body></html>'), o.document.close()), p.val = "";
  }
  if (p.val === "HTML") {
    v({ template: w, data: S });
    const o = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><title>Curved Structure Report</title></head><body>${reportEl?.innerHTML || ""}</body></html>', t = new Blob([o], { type: "text/html" }), n = URL.createObjectURL(t), d = document.createElement("a");
    d.href = n, d.download = "curves_report.html", document.body.appendChild(d), d.click(), document.body.removeChild(d), URL.revokeObjectURL(n), p.val = "";
  }
});
document.body.append(B(l), R({ mesh: { nodes: $, elements: P, nodeInputs: C } }), T({ dialogBody: k }), D({ clickedButton: p, buttons: ["Report", "Print", "HTML"], sourceCode: "https://github.com/madil4/awatif/blob/main/examples/src/curves/main.ts", author: "https://www.linkedin.com/in/madil4/" }));
