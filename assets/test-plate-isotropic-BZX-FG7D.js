import { x as et, v as G, a as at, g as nt } from "./styles-Dp6ubQGB.js";
import { d as it, a as lt, __tla as __tla_0 } from "./deformCpp-BprT8Kg9.js";
import { g as pt } from "./getDialog-OCmRZYi6.js";
import { g as J } from "./getReport-DmQ4_zmx.js";
import { o as dt } from "./unsafe-html-D8nu7NCE.js";
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
  function ct(t) {
    const e = Math.abs(t.maxDeflection - t.expectedDeflection) / t.expectedDeflection * 100, o = e < 10;
    return et`
    <br />
    <header class="header">
      <div class="header-left">
        <h6>Test Report: Isotropic Plate</h6>
        <p class="bold">
          <a href="https://awatif.co" target="_blank">Awatif.co</a>
        </p>
        <p class="normal">
          ${(/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric"
    })}
        </p>
      </div>
      <div class="header-right">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 -3 35 35" fill="#015f73">
          <path d="M2,29.14l9.86-16.87c1.86,3.34,4.56,7.62,3.34,11.57a7.61,7.61,0,0,1-2.61,3.68,7.78,7.78,0,0,1-5,1.61c-1.48,0-3,0-4.47,0A4.5,4.5,0,0,0,2,29.14Z"></path>
          <path d="M12.86,10.43l5.71-10L35.12,29.14H31a13.92,13.92,0,0,1-8.44-3.54,18.23,18.23,0,0,1-3.44-4.5c-.55-.92-1.08-1.85-1.61-2.79-1.25-2.21-2.56-4.39-3.85-6.58Z"></path>
        </svg>
      </div>
    </header>

    <br />
    <h1>Isotropic Plate - Simply Supported</h1>
    <p class="text">
      This test validates the shell element formulation for a simply supported square plate
      under uniform pressure load.
    </p>

    <br />
    <h2>Material Properties</h2>
    <table>
      <tr>
        <th>Property</th>
        <th>Value</th>
        <th>Units</th>
      </tr>
      <tr>
        <td>Young's Modulus (E)</td>
        <td>${(t.E / 1e9).toFixed(1)}</td>
        <td>GPa</td>
      </tr>
      <tr>
        <td>Poisson's Ratio (ν)</td>
        <td>${t.nu}</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Shear Modulus (G)</td>
        <td>${(0.5 * t.E / (1 + t.nu) / 1e9).toFixed(2)}</td>
        <td>GPa</td>
      </tr>
    </table>

    <br />
    <h2>Geometry</h2>
    <table>
      <tr>
        <th>Parameter</th>
        <th>Value</th>
        <th>Units</th>
      </tr>
      <tr>
        <td>Length (a)</td>
        <td>${t.a}</td>
        <td>m</td>
      </tr>
      <tr>
        <td>Width (b)</td>
        <td>${t.b}</td>
        <td>m</td>
      </tr>
      <tr>
        <td>Thickness (h)</td>
        <td>${t.h}</td>
        <td>m</td>
      </tr>
    </table>

    <br />
    <h2>Loading</h2>
    <table>
      <tr>
        <th>Parameter</th>
        <th>Value</th>
        <th>Units</th>
      </tr>
      <tr>
        <td>Uniform Pressure (p₀)</td>
        <td>${t.p0 / 1e3}</td>
        <td>kN/m²</td>
      </tr>
    </table>

    <br />
    <h2>Mesh</h2>
    <table>
      <tr>
        <th>Parameter</th>
        <th>Value</th>
      </tr>
      <tr>
        <td>Divisions per side</td>
        <td>${t.numDiv}</td>
      </tr>
      <tr>
        <td>Total nodes</td>
        <td>${t.numNodes}</td>
      </tr>
      <tr>
        <td>Total elements (triangles)</td>
        <td>${t.numElements}</td>
      </tr>
    </table>

    <br />
    <h2>Results Comparison</h2>
    <div class="result-box ${o ? "success" : "warning"}">
      <h3>Maximum Deflection (center)</h3>
      <table>
        <tr>
          <th>Source</th>
          <th>Value (mm)</th>
          <th>Error (%)</th>
        </tr>
        <tr>
          <td><strong>Awatif FEM</strong></td>
          <td><strong>${(t.maxDeflection * 1e3).toFixed(2)}</strong></td>
          <td><strong>${e.toFixed(1)}%</strong></td>
        </tr>
        <tr>
          <td>Expected (from test)</td>
          <td>${(t.expectedDeflection * 1e3).toFixed(2)}</td>
          <td>Reference</td>
        </tr>
        <tr>
          <td>Navier Series Solution</td>
          <td>${(t.navierDeflection * 1e3).toFixed(2)}</td>
          <td>Analytical</td>
        </tr>
      </table>
    </div>

    <br />
    <h2>Analytical Reference</h2>
    <p class="text">
      The Navier series solution for a simply supported rectangular plate under uniform load:
    </p>
    <p class="text" style="font-family: monospace; margin-left: 20px;">
      w_max = (16 × p₀ × a⁴) / (π⁶ × D) × Σ [1 / (m × n × (m²/a² + n²/b²)²)]
    </p>
    <p class="text">
      where D = E × h³ / (12 × (1 - ν²)) is the flexural rigidity.
    </p>

    <br />
    <div class="result-box info">
      <p><strong>Status:</strong> ${o ? "\u2713 PASS - Results within acceptable tolerance" : "\u26A0 WARNING - Results differ from expected"}</p>
    </div>
    <br /><br />
  `;
  }
  const mt = `
body {
    font-size: 11pt;
    font-family: 'Segoe UI', 'Arial Nova', Helvetica, sans-serif;
    margin-left: 1.5em;
    max-width: 190mm;
}
h1, h2, h3, h4, h5, h6 {
    font-family: 'Arial Nova', Helvetica, sans-serif;
    margin: 0.5em 0 0.5em 0;
    padding: 0;
    line-height: 150%;
}
h1 {font-size: 2.1em;}
h2 {font-size: 1.7em;}
h3 {font-size: 1.4em;}
h4 {font-size: 1.2em;}
h5 {font-size: 1.1em;}
h6 {font-size: 1em;}
p, li {
    margin: 0.3em 0 0.3em 0;
    padding: 0;
    line-height: 150%;
}
.eq, table.matrix {
    font-family: 'Georgia Pro', 'Century Schoolbook', 'Times New Roman', Times, serif;
}
.eq var {
    color: #06d;
    font-size: 105%;
}
.eq i {
    color: #086;
    font-style: normal;
    font-size: 90%;
}
i.unit {
    color: #043!important;
    font-size: 90%!important;
    vertical-align: -1pt;
}
.eq b {
    font-weight: 600;
}
.eq sub {
    font-family: Calibri, Candara, Corbel, sans-serif;
    font-size: 80%;
    vertical-align: -18%;
}
.eq sup {
    display: inline-block;
    margin-left: 1pt;
    margin-top: -3pt;
    font-size: 75%;
}
td, th {
    padding: 2pt 4pt 2pt 4pt;
    vertical-align: top;
}
table {
    border-collapse: collapse;
}
table.bordered {
    margin-top: 1em;
}
table.bordered th {
    background-color: #F0F0F0;
    border: solid 1pt #AAAAAA;
}
table.bordered td {
    border: solid 1pt #CCCCCC;
}
.matrix {
    display: inline-table;
}
.matrix .tr {
    display: table-row;
}
.matrix .td {
    white-space: nowrap;
    padding: 0 2pt 0 2pt;
    min-width: 10pt;
    display: table-cell;
    font-size: 10pt;
    text-align: center;
}
.matrix .td:first-child,
.matrix .td:last-child {
    width: 0.75pt;
    min-width: 0.75pt;
    max-width: 0.75pt;
    padding: 0 1pt 0 1pt;
}
.matrix .td:first-child {
    border-left: solid 1pt black;
}
.matrix .td:last-child {
    border-right: solid 1pt black;
}
.matrix .tr:first-child .td:first-child,
.matrix .tr:first-child .td:last-child {
    border-top: solid 1pt black;
}
.matrix .tr:last-child .td:first-child,
.matrix .tr:last-child .td:last-child {
    border-bottom: solid 1pt black;
}
.dvc, .dvr, .dvs {
    display: inline-block;
    vertical-align: middle;
    white-space: nowrap;
}
.dvc {
    padding-left: 2pt;
    padding-right: 2pt;
    text-align: center;
    line-height: 110%;
}
.dvl {
    display: block;
    border-bottom: solid 1pt black;
    margin-top: 1pt;
    margin-bottom: 1pt;
}
.err {
    color: Crimson;
    background-color: #FEE;
}
.ok {
    color: Green;
    background-color: #F0FFF0;
}
svg {
    max-width: 100%;
}
hr {
    border: none;
    border-top: 1px solid #ccc;
    margin: 1em 0;
}
@media print {
    body {
        margin: 0;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
    }
}
@page {
    size: A4 portrait;
    margin: 10mm 10mm 10mm 20mm;
}
`;
  function i(t, e = 4) {
    return t == null || isNaN(t) || Math.abs(t) < 1e-10 ? "0" : t.toFixed(e).replace(".", ",");
  }
  function R(t, e) {
    return `<span class="dvc">${t}<span class="dvl"></span>${e}</span>`;
  }
  function g(t) {
    return `<span class="eq">${t}</span>`;
  }
  function a(t, e) {
    return e ? `<var>${t}</var><sub>${e}</sub>` : `<var>${t}</var>`;
  }
  function Q(t, e = 4) {
    if (!t || !t.length) return "";
    let o = `<span class="matrix">
`;
    for (let l = 0; l < t.length; l++) {
      o += '<span class="tr"><span class="td"></span>';
      for (let y = 0; y < t[l].length; y++) {
        const $ = t[l][y], c = typeof $ == "string" ? $ : i($, e);
        o += `<span class="td">${c}</span>`;
      }
      o += `<span class="td"></span></span>
`;
    }
    return o += "</span>", o;
  }
  function ht(t, e) {
    const $ = 110 / Math.max(t, 1), c = (120 - 2 * 25) / Math.max(e, 1), C = Math.min($, c), m = t * C, f = e * C, h = 25, p = 25;
    let n = '<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" style="width:160pt; height:120pt; font-family:Arial; font-size:9px;">';
    n += `<defs>
    <marker id="arrowStart" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
      <path d="M6,0 L0,3 L6,6" fill="none" stroke="#333" stroke-width="1"/>
    </marker>
    <marker id="arrowEnd" markerWidth="6" markerHeight="6" refX="0" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6" fill="none" stroke="#333" stroke-width="1"/>
    </marker>
  </defs>`, n += `<rect x="${h}" y="${p}" width="${m}" height="${f}" fill="#e8e8e8" stroke="#333" stroke-width="1.5"/>`;
    const s = 4, w = 5;
    for (let u = 0; u <= w; u++) {
      const r = h + m * u / w;
      n += `<polygon points="${r},${p + f} ${r - s},${p + f + s} ${r + s},${p + f + s}" fill="#999" stroke="#666" stroke-width="0.5"/>`, n += `<polygon points="${r},${p} ${r - s},${p - s} ${r + s},${p - s}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let u = 0; u <= w; u++) {
      const r = p + f * u / w;
      n += `<polygon points="${h},${r} ${h - s},${r - s} ${h - s},${r + s}" fill="#999" stroke="#666" stroke-width="0.5"/>`, n += `<polygon points="${h + m},${r} ${h + m + s},${r - s} ${h + m + s},${r + s}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    const k = 3;
    for (let u = 1; u <= k; u++) for (let r = 1; r <= k; r++) {
      const z = h + m * u / (k + 1), d = p + f * r / (k + 1);
      n += `<line x1="${z}" y1="${d - 8}" x2="${z}" y2="${d + 5}" stroke="#0066cc" stroke-width="1.2" marker-end="url(#arrowEnd)"/>`;
    }
    return n += `<text x="${h + m / 2}" y="${p + f / 2 - 12}" text-anchor="middle" fill="#0066cc" font-style="italic">q</text>`, n += `<line x1="${h}" y1="${p + f + 18}" x2="${h + m}" y2="${p + f + 18}" stroke="#333" stroke-width="0.8" marker-start="url(#arrowStart)" marker-end="url(#arrowEnd)"/>`, n += `<text x="${h + m / 2}" y="${p + f + 28}" text-anchor="middle" font-style="italic">a</text>`, n += `<line x1="${h + m + 18}" y1="${p}" x2="${h + m + 18}" y2="${p + f}" stroke="#333" stroke-width="0.8" marker-start="url(#arrowStart)" marker-end="url(#arrowEnd)"/>`, n += `<text x="${h + m + 26}" y="${p + f / 2 + 3}" font-style="italic">b</text>`, n += "</svg>", n;
  }
  function ft(t, e, o, l = 400) {
    if (!t || !t.length || !e || !e.length) return "<p><i>No mesh data</i></p>";
    const y = t.map((d) => d[0]), $ = t.map((d) => d[1]), c = Math.min(...y), C = Math.max(...y), m = Math.min(...$), f = Math.max(...$), h = C - c || 1, p = f - m || 1, n = l / Math.max(h, p), s = p * n, w = 20, k = 2.5, u = new Set(o);
    let r = `<svg viewBox="-20 -20 ${l + 2 * w} ${s + 2 * w}" xmlns="http://www.w3.org/2000/svg" style="font-family:Segoe UI; font-size:8px; width:${l}pt; height:${s}pt">`;
    r += "<style>.joint{fill:orangeRed;} .support{stroke:red; stroke-width:1; fill:lightpink;} .element{stroke:seaGreen; stroke-width:1; fill:lime; fill-opacity:0.1; stroke-opacity:0.5}</style>", r += `<rect x="0" y="0" width="${l}" height="${s}" style="fill:yellow; fill-opacity:0.2" />`, e.forEach((d, N) => {
      const M = d.reduce((b, v) => b + t[v][0], 0) / d.length, S = d.reduce((b, v) => b + t[v][1], 0) / d.length, I = (M - c) * n, T = s - (S - m) * n, x = d.map((b) => {
        const v = (t[b][0] - c) * n, P = s - (t[b][1] - m) * n;
        return `${v.toFixed(2)},${P.toFixed(2)}`;
      }).join(" ");
      r += `<polygon points="${x}" class="element"/>`, r += `<text x="${I.toFixed(2)}" y="${T.toFixed(2) + 3}" text-anchor="middle" fill="#333">${N + 1}</text>`;
    });
    const z = 5;
    return u.forEach((d) => {
      const N = (t[d][0] - c) * n, M = s - (t[d][1] - m) * n;
      r += `<circle cx="${N.toFixed(2)}" cy="${M.toFixed(2)}" r="${z}" class="support"/>`;
    }), t.forEach((d, N) => {
      const M = (d[0] - c) * n, S = s - (d[1] - m) * n;
      r += `<circle cx="${M.toFixed(2)}" cy="${S.toFixed(2)}" r="${k}" class="joint" />`, r += `<text x="${(M + k * 2).toFixed(2)}" y="${(S - k).toFixed(2)}" text-anchor="start" fill="#333">${N + 1}</text>`;
    }), r += "</svg>", r;
  }
  function ut(t, e, o, l = 450, y = "w") {
    if (!t || !t.length || !e || !e.length || !o || !o.length) return "<p><i>No data for contour map</i></p>";
    const $ = t.map((x) => x[0]), c = t.map((x) => x[1]), C = Math.min(...$), m = Math.max(...$), f = Math.min(...c), h = Math.max(...c), p = m - C || 1, n = h - f || 1, s = l / Math.max(p, n), w = n * s, k = 20, u = o.filter((x) => x !== void 0 && !isNaN(x));
    if (!u.length) return "<p><i>No valid values</i></p>";
    const r = Math.min(...u), z = Math.max(...u), d = Math.abs(z - r) || 1;
    function N(x) {
      const b = Math.max(0, Math.min(1, (x - r) / d));
      let v, P, A;
      return b < 0.25 ? (v = 0, P = Math.floor(255 * b * 4), A = 255) : b < 0.5 ? (v = 0, P = 255, A = Math.floor(255 * (1 - (b - 0.25) * 4))) : b < 0.75 ? (v = Math.floor(255 * (b - 0.5) * 4), P = 255, A = 0) : (v = 255, P = Math.floor(255 * (1 - (b - 0.75) * 4)), A = 0), `rgb(${v},${P},${A})`;
    }
    const M = `colorScale_${y}`;
    let S = `<svg viewBox="-20 -20 ${l + 80} ${w + 2 * k}" xmlns="http://www.w3.org/2000/svg" style="width:${l + 80}pt; height:${w}pt; font-family:Arial; font-size:9px;">
<defs>
<linearGradient id="${M}" x1="0%" y1="100%" x2="0%" y2="0%">
<stop offset="0%" style="stop-color:#0000ff"/>
<stop offset="25%" style="stop-color:#00ffff"/>
<stop offset="50%" style="stop-color:#00ff00"/>
<stop offset="75%" style="stop-color:#ffff00"/>
<stop offset="100%" style="stop-color:#ff0000"/>
</linearGradient>
</defs>`;
    e.forEach((x) => {
      const b = x.reduce((A, j) => A + (o[j] || 0), 0) / x.length, v = N(b), P = x.map((A) => {
        const j = (t[A][0] - C) * s, st = w - (t[A][1] - f) * s;
        return `${j.toFixed(2)},${st.toFixed(2)}`;
      }).join(" ");
      S += `<polygon points="${P}" fill="${v}" stroke="#333" stroke-width="0.3"/>`;
    });
    const I = l + 10, T = w - 20;
    S += `<rect x="${I}" y="10" width="15" height="${T}" fill="url(#${M})" stroke="#333"/>`;
    for (let x = 0; x <= 5; x++) {
      const b = r + d * x / 5, v = 10 + T - T * x / 5;
      S += `<text x="${I + 20}" y="${v + 3}">${i(b, 4)}</text>`;
    }
    return S += `<text x="${I}" y="5" font-weight="bold">${y}</text>`, S += "</svg>", S;
  }
  function $t(t) {
    const { E: e, nu: o, h: l, a: y, b: $, p0: c, numDiv: C, maxDeflection: m, expectedDeflection: f, navierDeflection: h, numNodes: p, numElements: n, nodes: s, elements: w, displacements: k, boundary: u } = t, r = m * 1e3, z = h * 1e3, d = Math.abs((m - f) / f) * 100, N = e * Math.pow(l, 3) / (12 * (1 - o * o)), M = e / (2 * (1 + o)), S = 5 / 6 * M * l, I = `
<style>${mt}
/* Zoom control styles */
.zoom-toolbar {
  position: sticky;
  top: 0;
  background: #f8f8f8;
  border-bottom: 1px solid #ddd;
  padding: 8px 15px;
  margin: -15px -15px 15px -15px;
  display: flex;
  align-items: center;
  gap: 15px;
  z-index: 100;
}
.zoom-toolbar label {
  font-weight: 500;
  font-size: 12px;
}
.zoom-toolbar input[type="range"] {
  width: 120px;
  cursor: pointer;
}
.zoom-toolbar .zoom-value {
  font-family: monospace;
  font-size: 12px;
  min-width: 45px;
}
.zoom-toolbar button {
  padding: 4px 10px;
  font-size: 12px;
  cursor: pointer;
  border: 1px solid #ccc;
  background: #fff;
  border-radius: 3px;
}
.zoom-toolbar button:hover {
  background: #eee;
}
#reportContent {
  transform-origin: top left;
  transition: transform 0.1s ease;
}
</style>

<div class="no-print zoom-toolbar">
  <label>Zoom:</label>
  <button onclick="setZoom(50)">50%</button>
  <button onclick="setZoom(75)">75%</button>
  <button onclick="setZoom(100)">100%</button>
  <button onclick="setZoom(150)">150%</button>
  <button onclick="setZoom(200)">200%</button>
  <input type="range" id="zoomSlider" min="25" max="300" value="100" oninput="updateZoom(this.value)">
  <span class="zoom-value" id="zoomValue">100%</span>
</div>

<script>
window.setZoom = function(val) {
  document.getElementById('zoomSlider').value = val;
  updateZoom(val);
};
window.updateZoom = function(val) {
  document.getElementById('zoomValue').textContent = val + '%';
  document.getElementById('reportContent').style.transform = 'scale(' + (val/100) + ')';
};
<\/script>

<div id="reportContent">
<h3>Finite Element Analysis of Simply Supported Plate</h3>
<hr/>

<h4>Input data</h4>
<table><tr><td>
<p>Plate dimensions - ${g(`${a("a")} = ${i(y, 1)}`)} m, ${g(`${a("b")} = ${i($, 1)}`)} m</p>
<p>Thickness - ${g(`${a("h")} = ${i(l, 2)}`)} m</p>
<p>Load - ${g(`${a("q")} = ${i(Math.abs(c) / 1e3, 1)}`)} kN/m\xB2</p>
<p>Modulus of elasticity - ${g(`${a("E")} = ${i(e / 1e9, 0)}`)} GPa</p>
<p>Poisson's ratio - ${g(`${a("\u03BD")} = ${i(o, 2)}`)}</p>
</td><td style="vertical-align:middle; padding-left:30px;">
${ht(y, $)}
</td></tr></table>

<h4>Finite element mesh</h4>
<p>Triangular shell elements with 18 DOFs (6 per node)</p>
<p>Mesh: ${g(`${C} \xD7 ${C}`)} grid</p>
<p>Total elements - ${g(`${a("n", "e")} = ${n}`)}</p>
<p>Total joints - ${g(`${a("n", "j")} = ${p}`)}</p>

${s && w && u ? ft(s, w, u, 400) : ""}

<h4>Constitutive matrix</h4>
<p><b>Flexural rigidity (bending stiffness)</b></p>
<p>${g(`${a("D")} = ${R(`${a("E")} \xB7 ${a("h")}<sup>3</sup>`, `12 \xB7 (1 - ${a("\u03BD")}<sup>2</sup>)`)} = ${R(`${i(e / 1e9, 0)} \xB7 10<sup>9</sup> \xB7 ${i(l, 2)}<sup>3</sup>`, `12 \xB7 (1 - ${i(o, 2)}<sup>2</sup>)`)} = <b>${i(N, 2)}</b>`)} N\xB7m</p>

<p><b>Shear modulus</b></p>
<p>${g(`${a("G")} = ${R(a("E"), `2 \xB7 (1 + ${a("\u03BD")})`)} = ${R(`${i(e / 1e9, 0)} \xB7 10<sup>9</sup>`, `2 \xB7 (1 + ${i(o, 2)})`)} = <b>${i(M / 1e9, 2)} \xB7 10<sup>9</sup></b>`)} Pa</p>

<p><b>Bending matrix [D<sub>b</sub>]</b></p>
<p>${g(`<b>${a("D", "b")}</b> = ${a("D")} \xB7 `)}${Q([
      [
        "1",
        "\u03BD",
        "0"
      ],
      [
        "\u03BD",
        "1",
        "0"
      ],
      [
        "0",
        "0",
        "(1-\u03BD)/2"
      ]
    ], 0)}</p>
<p>${g(`<b>${a("D", "b")}</b> = ${i(N, 2)} \xB7 `)}${Q([
      [
        1,
        o,
        0
      ],
      [
        o,
        1,
        0
      ],
      [
        0,
        0,
        (1 - o) / 2
      ]
    ], 3)}</p>

<p><b>Shear stiffness</b></p>
<p>${g(`${a("D", "s")} = ${R("5", "6")} \xB7 ${a("G")} \xB7 ${a("h")} = ${R("5", "6")} \xB7 ${i(M / 1e9, 2)} \xB7 10<sup>9</sup> \xB7 ${i(l, 2)} = <b>${i(S, 2)}</b>`)} N/m</p>

<h4>Solution</h4>
<p>Total degrees of freedom: ${g(`${p} \xD7 6 = ${p * 6}`)}</p>
<p>Solution method: LU decomposition</p>

<h4>Results - Displacement</h4>
<p>Maximum deflection at center:</p>
<p>${g(`${a("w", "max")} = <span class="ok">${i(r, 4)}</span>`)} mm</p>

<h4>Displacement contour map</h4>
${s && w && k ? ut(s, w, k, 450, "w") : ""}

<h4>Comparison with Analytical Solution</h4>
<p><b>Navier series solution</b> (Kirchhoff plate theory):</p>
<p>${g(`${a("w", "Navier")} = ${R(`16 \xB7 ${a("q")} \xB7 ${a("a")}<sup>4</sup>`, `${a("\u03C0")}<sup>6</sup> \xB7 ${a("D")}`)} \xB7 \u03A3 ${R("1", `${a("m")} \xB7 ${a("n")} \xB7 (${a("m")}<sup>2</sup> + ${a("n")}<sup>2</sup>)<sup>2</sup>`)}`)}</p>
<p>${g(`${a("w", "Navier")} = ${i(z, 4)}`)} mm</p>

<table class="bordered">
<tr><th>Method</th><th>Deflection (mm)</th><th>Error (%)</th></tr>
<tr><td>FEM (Shell)</td><td>${i(r, 4)}</td><td>-</td></tr>
<tr><td>Navier Series</td><td>${i(z, 4)}</td><td>${i(Math.abs(r - z) / z * 100, 2)}%</td></tr>
<tr><td>Expected</td><td>${i(f * 1e3, 4)}</td><td>${i(d, 2)}%</td></tr>
</table>

<h4>Verification</h4>
<p>Error vs expected: ${g(`${i(d, 2)}%`)} ${d < 10 ? '<span class="ok">\u2713 PASS (< 10%)</span>' : '<span class="err">\u2717 FAIL (> 10%)</span>'}</p>

<hr/>
<p><i>Generated with Awatif - Calcpad style report</i></p>
</div>
`;
    return et`${dt(I)}`;
  }
  const X = 10, Y = 10, U = 0.15, H = -1e3, Z = 1e10, O = 0.25, xt = 0.5 * Z / (1 + O), D = 10, F = [];
  for (let t = 0; t < D; t++) for (let e = 0; e < D; e++) F.push([
    e * X / (D - 1),
    t * Y / (D - 1),
    0
  ]);
  const E = [];
  for (let t = 0; t < D - 1; t++) for (let e = 0; e < D - 1; e++) {
    const o = t * D + e;
    E.push([
      o,
      o + 1,
      (t + 1) * D + e
    ]), E.push([
      o + 1,
      (t + 1) * D + e + 1,
      (t + 1) * D + e
    ]);
  }
  const W = [];
  F.forEach((t, e) => {
    (t[0] === 0 || t[0] === X || t[1] === 0 || t[1] === Y) && W.push(e);
  });
  function gt(t, e, o) {
    const l = e[0] - t[0], y = e[1] - t[1], $ = o[0] - t[0], c = o[1] - t[1];
    return Math.abs(l * c - y * $) / 2;
  }
  const q = /* @__PURE__ */ new Map();
  E.forEach(([t, e, o]) => {
    const l = gt(F[t], F[e], F[o]), y = H * l / 3;
    [
      t,
      e,
      o
    ].forEach(($) => {
      const c = q.get($) || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      q.set($, [
        c[0],
        c[1],
        c[2] + y,
        c[3],
        c[4],
        c[5]
      ]);
    });
  });
  const ot = {
    supports: new Map(W.map((t) => [
      t,
      [
        true,
        true,
        true,
        false,
        false,
        false
      ]
    ])),
    loads: q
  }, K = {
    elasticities: new Map(E.map((t, e) => [
      e,
      Z
    ])),
    elasticitiesOrthogonal: new Map(E.map((t, e) => [
      e,
      Z
    ])),
    shearModuli: new Map(E.map((t, e) => [
      e,
      xt
    ])),
    poissonsRatios: new Map(E.map((t, e) => [
      e,
      O
    ])),
    thicknesses: new Map(E.map((t, e) => [
      e,
      U
    ]))
  }, _ = it(F, E, ot, K), bt = lt(F, E, K, _);
  let V = 0;
  (_a = _.deformations) == null ? void 0 : _a.forEach((t) => {
    V = Math.max(V, Math.abs(t[2]));
  });
  console.log("TEST: Isotropic Plate - Simply Supported");
  console.log("E =", Z / 1e9, "GPa, h =", U, "m, p =", H / 1e3, "kN/m\xB2");
  console.log("Max deflection:", (V * 1e3).toFixed(2), "mm");
  console.log("Expected: 12.69 mm (Navier: 13.54 mm)");
  const rt = [];
  F.forEach((t, e) => {
    var _a2;
    const o = (_a2 = _.deformations) == null ? void 0 : _a2.get(e);
    rt.push(o ? o[2] : 0);
  });
  const tt = {
    E: Z,
    nu: O,
    h: U,
    a: X,
    b: Y,
    p0: H,
    numDiv: D,
    maxDeflection: V,
    expectedDeflection: 0.01269,
    navierDeflection: 0.01354,
    numNodes: F.length,
    numElements: E.length,
    nodes: F,
    elements: E,
    displacements: rt,
    boundary: W
  }, L = G.state(""), B = G.state(void 0);
  G.derive(() => {
    L.val === "Report" ? B.val = J({
      template: () => ct(tt)
    }) : L.val === "Report Calcpad" && (B.val = J({
      template: () => $t(tt)
    }));
  });
  document.body.append(at({
    clickedButton: L,
    buttons: [
      "Report",
      "Report Calcpad"
    ],
    sourceCode: "https://github.com/madil4/awatif/blob/main/awatif-fem/src/deform.test.ts"
  }), pt({
    dialogBody: B
  }), nt({
    mesh: {
      nodes: G.state(F),
      elements: G.state(E),
      nodeInputs: G.state(ot),
      elementInputs: G.state(K),
      deformOutputs: G.state(_),
      analyzeOutputs: G.state(bt)
    },
    settingsObj: {
      nodes: false,
      deformedShape: true,
      shellResults: "displacementZ"
    }
  }));
  document.title = "Plate Isotropic - Max Z=" + (V * 1e3).toFixed(2) + "mm";
});
