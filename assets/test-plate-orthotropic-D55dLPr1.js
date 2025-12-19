import { x as tt, v as T, a as at, g as lt } from "./styles-Dp6ubQGB.js";
import { d as pt, a as dt, __tla as __tla_0 } from "./deformCpp-BprT8Kg9.js";
import { g as ct } from "./getDialog-OCmRZYi6.js";
import { g as J } from "./getReport-DmQ4_zmx.js";
import { o as ht } from "./unsafe-html-D8nu7NCE.js";
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
  function mt(t) {
    const e = Math.abs(t.maxDeflection - t.expectedDeflection) / t.expectedDeflection * 100, i = e < 10;
    return tt`
    <br />
    <header class="header">
      <div class="header-left">
        <h6>Test Report: Orthotropic Plate</h6>
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
    <h1>Orthotropic Plate - Simply Supported</h1>
    <p class="text">
      This test validates the shell element formulation for an orthotropic plate
      (different elastic moduli in X and Y directions) under uniform pressure load.
    </p>

    <br />
    <h2>Material Properties (Orthotropic)</h2>
    <table>
      <tr>
        <th>Property</th>
        <th>Value</th>
        <th>Units</th>
      </tr>
      <tr>
        <td>Young's Modulus X (Ex)</td>
        <td>${(t.Ex / 1e9).toFixed(1)}</td>
        <td>GPa</td>
      </tr>
      <tr>
        <td>Young's Modulus Y (Ey)</td>
        <td>${(t.Ey / 1e9).toFixed(1)}</td>
        <td>GPa</td>
      </tr>
      <tr>
        <td>Ratio Ey/Ex</td>
        <td>${(t.Ey / t.Ex).toFixed(2)}</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Poisson's Ratio (ν)</td>
        <td>${t.nu}</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Shear Modulus (G)</td>
        <td>${(t.G / 1e9).toFixed(2)}</td>
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
    <div class="result-box ${i ? "success" : "warning"}">
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
      </table>
    </div>

    <br />
    <h2>Notes on Orthotropic Behavior</h2>
    <p class="text">
      For orthotropic materials, the plate is stiffer in the X direction (Ex = 10 GPa)
      than in the Y direction (Ey = 5 GPa). This results in larger deflections compared
      to an isotropic plate with the same average modulus.
    </p>

    <br />
    <div class="result-box info">
      <p><strong>Status:</strong> ${i ? "\u2713 PASS - Results within acceptable tolerance" : "\u26A0 WARNING - Results differ from expected"}</p>
    </div>
    <br /><br />
  `;
  }
  const ft = `
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
.eq small {
    font-family: Calibri, Candara, Corbel, sans-serif;
    font-size: 70%;
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
table.centered td, .matrix .td {
    text-align: center;
}
table.data td {
    text-align: right;
}
table.data td:first-child {
    text-align: left;
    padding-left: 0;
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
.b0, .b1 {
    font-weight: normal;
    color: #000;
}
.b0 {
    font-size: 100%;
}
.b1 {
    font-size: 140%;
    vertical-align: -10%;
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
.dvr {
    text-align: center;
    line-height: 110%;
    margin-bottom: 4pt;
}
.dvs {
    text-align: left;
    line-height: 110%;
}
.dvl {
    display: block;
    border-bottom: solid 1pt black;
    margin-top: 1pt;
    margin-bottom: 1pt;
}
.vec {
    font-family: 'Cambria Math', serif;
    color: #8af;
    font-style: normal;
    display: inline-block;
    vertical-align: 2pt;
    margin-left: 3pt;
    margin-right: -7pt;
}
.err {
    color: Crimson;
    background-color: #FEE;
}
.ok {
    color: Green;
    background-color: #F0FFF0;
}
.plot {
    max-width: 100%
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
    margin-left: 20mm;
    margin-right: 10mm;
    margin-top: 10mm;
    margin-bottom: 10mm;
}
`;
  function s(t, e = 4) {
    return t == null || isNaN(t) || Math.abs(t) < 1e-10 ? "0" : t.toFixed(e).replace(".", ",");
  }
  function N(t, e) {
    return `<span class="dvc">${t}<span class="dvl"></span>${e}</span>`;
  }
  function u(t) {
    return `<span class="eq">${t}</span>`;
  }
  function o(t, e) {
    return e ? `<var>${t}</var><sub>${e}</sub>` : `<var>${t}</var>`;
  }
  function K(t, e = 4) {
    if (!t || !t.length) return "";
    let i = `<span class="matrix">
`;
    for (let m = 0; m < t.length; m++) {
      i += '<span class="tr"><span class="td"></span>';
      for (let x = 0; x < t[m].length; x++) {
        const c = t[m][x], $ = typeof c == "string" ? c : s(c, e);
        i += `<span class="td">${$}</span>`;
      }
      i += `<span class="td"></span></span>
`;
    }
    return i += "</span>", i;
  }
  function $t(t, e, i, m = 400) {
    if (!t || !t.length || !e || !e.length) return "<p><i>No mesh data</i></p>";
    const x = t.map((f) => f[0]), c = t.map((f) => f[1]), $ = Math.min(...x), G = Math.max(...x), h = Math.min(...c), b = Math.max(...c), d = G - $ || 1, p = b - h || 1, n = m / Math.max(d, p), l = p * n, y = 20, k = 2.5, a = new Set(i);
    let r = `<svg viewBox="-20 -20 ${m + 2 * y} ${l + 2 * y}" xmlns="http://www.w3.org/2000/svg" style="font-family:Segoe UI; font-size:8px; width:${m}pt; height:${l}pt">`;
    r += "<style>.joint{fill:orangeRed;} .support{stroke:red; stroke-width:1; fill:lightpink;} .element{stroke:seaGreen; stroke-width:1; fill:lime; fill-opacity:0.1; stroke-opacity:0.5}</style>", r += `<rect x="0" y="0" width="${m}" height="${l}" style="fill:yellow; fill-opacity:0.2" />`, e.forEach((f, z) => {
      const D = f.reduce((w, v) => w + t[v][0], 0) / f.length, E = f.reduce((w, v) => w + t[v][1], 0) / f.length, P = (D - $) * n, O = l - (E - h) * n, g = f.map((w) => {
        const v = (t[w][0] - $) * n, F = l - (t[w][1] - h) * n;
        return `${v.toFixed(2)},${F.toFixed(2)}`;
      }).join(" ");
      r += `<polygon points="${g}" class="element"/>`, r += `<text x="${P.toFixed(2)}" y="${O.toFixed(2) + 3}" text-anchor="middle" fill="#333">${z + 1}</text>`;
    });
    const R = 5;
    return a.forEach((f) => {
      const z = (t[f][0] - $) * n, D = l - (t[f][1] - h) * n;
      r += `<circle cx="${z.toFixed(2)}" cy="${D.toFixed(2)}" r="${R}" class="support"/>`;
    }), t.forEach((f, z) => {
      const D = (f[0] - $) * n, E = l - (f[1] - h) * n;
      r += `<circle cx="${D.toFixed(2)}" cy="${E.toFixed(2)}" r="${k}" class="joint" />`, r += `<text x="${(D + k * 2).toFixed(2)}" y="${(E - k).toFixed(2)}" text-anchor="start" fill="#333">${z + 1}</text>`;
    }), r += "</svg>", r;
  }
  function ut(t, e, i, m = 450, x = "w") {
    if (!t || !t.length || !e || !e.length || !i || !i.length) return "<p><i>No data for contour map</i></p>";
    const c = t.map((g) => g[0]), $ = t.map((g) => g[1]), G = Math.min(...c), h = Math.max(...c), b = Math.min(...$), d = Math.max(...$), p = h - G || 1, n = d - b || 1, l = m / Math.max(p, n), y = n * l, k = 20, a = i.filter((g) => g !== void 0 && !isNaN(g));
    if (!a.length) return "<p><i>No valid values</i></p>";
    const r = Math.min(...a), R = Math.max(...a), f = Math.abs(R - r) || 1;
    function z(g) {
      const w = Math.max(0, Math.min(1, (g - r) / f));
      let v, F, A;
      return w < 0.25 ? (v = 0, F = Math.floor(255 * w * 4), A = 255) : w < 0.5 ? (v = 0, F = 255, A = Math.floor(255 * (1 - (w - 0.25) * 4))) : w < 0.75 ? (v = Math.floor(255 * (w - 0.5) * 4), F = 255, A = 0) : (v = 255, F = Math.floor(255 * (1 - (w - 0.75) * 4)), A = 0), `rgb(${v},${F},${A})`;
    }
    const D = `colorScale_${x}`;
    let E = `<svg viewBox="-20 -20 ${m + 80} ${y + 2 * k}" xmlns="http://www.w3.org/2000/svg" style="width:${m + 80}pt; height:${y}pt; font-family:Arial; font-size:9px;">
<defs>
<linearGradient id="${D}" x1="0%" y1="100%" x2="0%" y2="0%">
<stop offset="0%" style="stop-color:#0000ff"/>
<stop offset="25%" style="stop-color:#00ffff"/>
<stop offset="50%" style="stop-color:#00ff00"/>
<stop offset="75%" style="stop-color:#ffff00"/>
<stop offset="100%" style="stop-color:#ff0000"/>
</linearGradient>
</defs>`;
    e.forEach((g) => {
      const w = g.reduce((A, V) => A + (i[V] || 0), 0) / g.length, v = z(w), F = g.map((A) => {
        const V = (t[A][0] - G) * l, nt = y - (t[A][1] - b) * l;
        return `${V.toFixed(2)},${nt.toFixed(2)}`;
      }).join(" ");
      E += `<polygon points="${F}" fill="${v}" stroke="#333" stroke-width="0.3"/>`;
    });
    const P = m + 10, O = y - 20;
    E += `<rect x="${P}" y="10" width="15" height="${O}" fill="url(#${D})" stroke="#333"/>`;
    for (let g = 0; g <= 5; g++) {
      const w = r + f * g / 5, v = 10 + O - O * g / 5;
      E += `<text x="${P + 20}" y="${v + 3}">${s(w, 4)}</text>`;
    }
    return E += `<text x="${P}" y="5" font-weight="bold">${x}</text>`, E += "</svg>", E;
  }
  function xt(t, e) {
    const c = 120 / Math.max(t, 1), $ = (140 - 2 * 30) / Math.max(e, 1), G = Math.min(c, $), h = t * G, b = e * G, d = 30, p = 30;
    let n = '<svg viewBox="0 0 180 140" xmlns="http://www.w3.org/2000/svg" style="width:180pt; height:140pt; font-family:Arial; font-size:9px;">';
    n += `<defs>
    <marker id="arrowStart" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
      <path d="M6,0 L0,3 L6,6" fill="none" stroke="#333" stroke-width="1"/>
    </marker>
    <marker id="arrowEnd" markerWidth="6" markerHeight="6" refX="0" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6" fill="none" stroke="#333" stroke-width="1"/>
    </marker>
    <pattern id="fibers" patternUnits="userSpaceOnUse" width="8" height="8">
      <line x1="0" y1="0" x2="8" y2="0" stroke="#996600" stroke-width="0.5"/>
    </pattern>
  </defs>`, n += `<rect x="${d}" y="${p}" width="${h}" height="${b}" fill="url(#fibers)" stroke="#333" stroke-width="1.5"/>`, n += `<rect x="${d}" y="${p}" width="${h}" height="${b}" fill="#e8d8a8" fill-opacity="0.5" stroke="#333" stroke-width="1.5"/>`;
    for (let a = 1; a < 6; a++) {
      const r = p + b * a / 6;
      n += `<line x1="${d + 5}" y1="${r}" x2="${d + h - 5}" y2="${r}" stroke="#996600" stroke-width="0.8" stroke-dasharray="4,2"/>`;
    }
    const l = 4, y = 5;
    for (let a = 0; a <= y; a++) {
      const r = d + h * a / y;
      n += `<polygon points="${r},${p + b} ${r - l},${p + b + l} ${r + l},${p + b + l}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let a = 0; a <= y; a++) {
      const r = p + b * a / y;
      n += `<polygon points="${d},${r} ${d - l},${r - l} ${d - l},${r + l}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let a = 0; a <= y; a++) {
      const r = p + b * a / y;
      n += `<polygon points="${d + h},${r} ${d + h + l},${r - l} ${d + h + l},${r + l}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let a = 0; a <= y; a++) {
      const r = d + h * a / y;
      n += `<polygon points="${r},${p} ${r - l},${p - l} ${r + l},${p - l}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    n += `<line x1="${d + h + 8}" y1="${p + b / 2}" x2="${d + h + 25}" y2="${p + b / 2}" stroke="#cc0000" stroke-width="2" marker-end="url(#arrowEnd)"/>`, n += `<text x="${d + h + 28}" y="${p + b / 2 + 3}" fill="#cc0000" font-weight="bold">E<tspan font-size="7" baseline-shift="-25%">x</tspan></text>`, n += `<line x1="${d + h / 2}" y1="${p - 8}" x2="${d + h / 2}" y2="${p - 25}" stroke="#0066cc" stroke-width="2" marker-end="url(#arrowEnd)"/>`, n += `<text x="${d + h / 2 + 5}" y="${p - 15}" fill="#0066cc" font-weight="bold">E<tspan font-size="7" baseline-shift="-25%">y</tspan></text>`;
    const k = 3;
    for (let a = 1; a <= k; a++) for (let r = 1; r <= k; r++) {
      const R = d + h * a / (k + 1), f = p + b * r / (k + 1);
      n += `<line x1="${R}" y1="${f - 6}" x2="${R}" y2="${f + 4}" stroke="#006600" stroke-width="1" marker-end="url(#arrowEnd)"/>`;
    }
    return n += `<text x="${d + h / 2}" y="${p + b / 2 - 10}" text-anchor="middle" fill="#006600" font-style="italic">q</text>`, n += "</svg>", n;
  }
  function gt(t) {
    const { Ex: e, Ey: i, G: m, nu: x, h: c, a: $, b: G, p0: h, numDiv: b, maxDeflection: d, expectedDeflection: p, numNodes: n, numElements: l, nodes: y, elements: k, displacements: a, boundary: r } = t, R = d * 1e3, f = Math.abs((d - p) / p) * 100, z = x * i / e, D = 1 - x * z, E = e * Math.pow(c, 3) / (12 * D), P = i * Math.pow(c, 3) / (12 * D), O = x * P, g = m * Math.pow(c, 3) / 12, w = 5 / 6 * m * c, v = [
      [
        E,
        O,
        0
      ],
      [
        O,
        P,
        0
      ],
      [
        0,
        0,
        g
      ]
    ], F = `
<style>${ft}
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
<h3>Finite Element Analysis of Orthotropic Plate</h3>
<hr/>

<h4>Input data</h4>
<table><tr><td>
<p>Plate dimensions - ${u(`${o("a")} = ${s($, 1)}`)} m, ${u(`${o("b")} = ${s(G, 1)}`)} m</p>
<p>Thickness - ${u(`${o("h")} = ${s(c, 2)}`)} m</p>
<p>Load - ${u(`${o("q")} = ${s(Math.abs(h) / 1e3, 1)}`)} kN/m\xB2</p>
<p><b>Orthotropic properties:</b></p>
<p>Modulus in X - ${u(`${o("E", "x")} = ${s(e / 1e9, 0)}`)} GPa</p>
<p>Modulus in Y - ${u(`${o("E", "y")} = ${s(i / 1e9, 1)}`)} GPa</p>
<p>Shear modulus - ${u(`${o("G")} = ${s(m / 1e9, 2)}`)} GPa</p>
<p>Poisson's ratio - ${u(`${o("\u03BD", "xy")} = ${s(x, 2)}`)}</p>
<p>Anisotropy ratio - ${u(`${o("E", "x")}/${o("E", "y")} = ${s(e / i, 1)}`)}</p>
</td><td style="vertical-align:middle; padding-left:20px;">
${xt($, G)}
</td></tr></table>

<h4>Finite element mesh</h4>
<p>Triangular shell elements with 18 DOFs (6 per node)</p>
<p>Mesh: ${u(`${b} \xD7 ${b}`)} grid</p>
<p>Total elements - ${u(`${o("n", "e")} = ${l}`)}</p>
<p>Total joints - ${u(`${o("n", "j")} = ${n}`)}</p>

${y && k && r ? $t(y, k, r, 400) : ""}

<h4>Orthotropic constitutive relations</h4>
<p>For orthotropic materials, we have the reciprocity relation:</p>
<p>${u(`${o("\u03BD", "yx")} = ${o("\u03BD", "xy")} \xB7 ${N(o("E", "y"), o("E", "x"))} = ${s(x, 2)} \xB7 ${N(s(i / 1e9, 1), s(e / 1e9, 0))} = <b>${s(z, 4)}</b>`)}</p>

<p><b>Bending stiffness coefficients:</b></p>
<p>${u(`${o("D", "x")} = ${N(`${o("E", "x")} \xB7 ${o("h")}<sup>3</sup>`, `12 \xB7 (1 - ${o("\u03BD", "xy")} \xB7 ${o("\u03BD", "yx")})`)} = ${N(`${s(e / 1e9, 0)} \xB7 10<sup>9</sup> \xB7 ${s(c, 2)}<sup>3</sup>`, `12 \xB7 (1 - ${s(x, 2)} \xB7 ${s(z, 4)})`)} = <b>${s(E, 2)}</b>`)} N\xB7m</p>

<p>${u(`${o("D", "y")} = ${N(`${o("E", "y")} \xB7 ${o("h")}<sup>3</sup>`, `12 \xB7 (1 - ${o("\u03BD", "xy")} \xB7 ${o("\u03BD", "yx")})`)} = ${N(`${s(i / 1e9, 1)} \xB7 10<sup>9</sup> \xB7 ${s(c, 2)}<sup>3</sup>`, `12 \xB7 (1 - ${s(x, 2)} \xB7 ${s(z, 4)})`)} = <b>${s(P, 2)}</b>`)} N\xB7m</p>

<p>${u(`${o("D", "xy")} = ${o("\u03BD", "xy")} \xB7 ${o("D", "y")} = ${s(x, 2)} \xB7 ${s(P, 2)} = <b>${s(O, 2)}</b>`)} N\xB7m</p>

<p>${u(`${o("D", "66")} = ${N(`${o("G")} \xB7 ${o("h")}<sup>3</sup>`, "12")} = ${N(`${s(m / 1e9, 2)} \xB7 10<sup>9</sup> \xB7 ${s(c, 2)}<sup>3</sup>`, "12")} = <b>${s(g, 2)}</b>`)} N\xB7m</p>

<p><b>Bending matrix [D<sub>b</sub>]</b></p>
<p>${u(`<b>${o("D", "b")}</b> = `)}${K([
      [
        "D<sub>x</sub>",
        "D<sub>xy</sub>",
        "0"
      ],
      [
        "D<sub>xy</sub>",
        "D<sub>y</sub>",
        "0"
      ],
      [
        "0",
        "0",
        "D<sub>66</sub>"
      ]
    ], 0)} = ${K(v, 2)}</p>

<p><b>Shear stiffness</b></p>
<p>${u(`${o("D", "s")} = ${N("5", "6")} \xB7 ${o("G")} \xB7 ${o("h")} = ${N("5", "6")} \xB7 ${s(m / 1e9, 2)} \xB7 10<sup>9</sup> \xB7 ${s(c, 2)} = <b>${s(w, 2)}</b>`)} N/m</p>

<h4>Solution</h4>
<p>Total degrees of freedom: ${u(`${n} \xD7 6 = ${n * 6}`)}</p>
<p>Solution method: LU decomposition</p>

<h4>Results - Displacement</h4>
<p>Maximum deflection at center:</p>
<p>${u(`${o("w", "max")} = <span class="ok">${s(R, 4)}</span>`)} mm</p>

<h4>Displacement contour map</h4>
${y && k && a ? ut(y, k, a, 450, "w") : ""}

<h4>Comparison</h4>
<table class="bordered">
<tr><th>Result</th><th>Value</th></tr>
<tr><td>FEM deflection</td><td>${s(R, 4)} mm</td></tr>
<tr><td>Expected</td><td>${s(p * 1e3, 4)} mm</td></tr>
<tr><td>Error</td><td>${s(f, 2)}%</td></tr>
</table>

<h4>Verification</h4>
<p>Error vs expected: ${u(`${s(f, 2)}%`)} ${f < 10 ? '<span class="ok">\u2713 PASS (< 10%)</span>' : '<span class="err">\u2717 FAIL (> 10%)</span>'}</p>

<h4>Notes on Orthotropic Behavior</h4>
<p>With ${u(`${o("E", "x")} > ${o("E", "y")}`)}, the plate is stiffer in the X direction.</p>
<p>The deflection is larger than an isotropic plate with ${u(`${o("E")} = ${o("E", "x")}`)} because the weaker Y-direction governs.</p>

<hr/>
<p><i>Generated with Awatif - Calcpad style report</i></p>
</div>
`;
    return tt`${ht(F)}`;
  }
  const L = 10, q = 10, et = 0.15, ot = -1e3, X = 1e10, U = 5e9, _ = 0.25, rt = 0.5 * X / (1 + _), S = 30, C = [];
  for (let t = 0; t < S; t++) for (let e = 0; e < S; e++) C.push([
    e * L / (S - 1),
    t * q / (S - 1),
    0
  ]);
  const M = [];
  for (let t = 0; t < S - 1; t++) for (let e = 0; e < S - 1; e++) {
    const i = t * S + e;
    M.push([
      i,
      i + 1,
      (t + 1) * S + e
    ]), M.push([
      i + 1,
      (t + 1) * S + e + 1,
      (t + 1) * S + e
    ]);
  }
  const H = [];
  C.forEach((t, e) => {
    (t[0] === 0 || t[0] === L || t[1] === 0 || t[1] === q) && H.push(e);
  });
  function bt(t, e, i) {
    const m = e[0] - t[0], x = e[1] - t[1], c = i[0] - t[0], $ = i[1] - t[1];
    return Math.abs(m * $ - x * c) / 2;
  }
  const B = /* @__PURE__ */ new Map();
  M.forEach(([t, e, i]) => {
    const m = bt(C[t], C[e], C[i]), x = ot * m / 3;
    [
      t,
      e,
      i
    ].forEach((c) => {
      const $ = B.get(c) || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      B.set(c, [
        $[0],
        $[1],
        $[2] + x,
        $[3],
        $[4],
        $[5]
      ]);
    });
  });
  const st = {
    supports: new Map(H.map((t) => [
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
    loads: B
  }, W = {
    elasticities: new Map(M.map((t, e) => [
      e,
      X
    ])),
    elasticitiesOrthogonal: new Map(M.map((t, e) => [
      e,
      U
    ])),
    shearModuli: new Map(M.map((t, e) => [
      e,
      rt
    ])),
    poissonsRatios: new Map(M.map((t, e) => [
      e,
      _
    ])),
    thicknesses: new Map(M.map((t, e) => [
      e,
      et
    ]))
  }, Z = pt(C, M, st, W), yt = dt(C, M, W, Z);
  let Y = 0;
  (_a = Z.deformations) == null ? void 0 : _a.forEach((t) => {
    Y = Math.max(Y, Math.abs(t[2]));
  });
  console.log("TEST: Orthotropic Plate");
  console.log("Ex =", X / 1e9, "GPa, Ey =", U / 1e9, "GPa");
  console.log("Max deflection:", (Y * 1e3).toFixed(2), "mm (expected: 16.90 mm)");
  const it = [];
  C.forEach((t, e) => {
    var _a2;
    const i = (_a2 = Z.deformations) == null ? void 0 : _a2.get(e);
    it.push(i ? i[2] : 0);
  });
  const Q = {
    Ex: X,
    Ey: U,
    G: rt,
    nu: _,
    h: et,
    a: L,
    b: q,
    p0: ot,
    numDiv: S,
    maxDeflection: Y,
    expectedDeflection: 0.0169,
    numNodes: C.length,
    numElements: M.length,
    nodes: C,
    elements: M,
    displacements: it,
    boundary: H
  }, I = T.state(""), j = T.state(void 0);
  T.derive(() => {
    I.val === "Report" ? j.val = J({
      template: () => mt(Q)
    }) : I.val === "Report Calcpad" && (j.val = J({
      template: () => gt(Q)
    }));
  });
  document.body.append(at({
    clickedButton: I,
    buttons: [
      "Report",
      "Report Calcpad"
    ],
    sourceCode: "https://github.com/madil4/awatif/blob/main/awatif-fem/src/deform.test.ts"
  }), ct({
    dialogBody: j
  }), lt({
    mesh: {
      nodes: T.state(C),
      elements: T.state(M),
      nodeInputs: T.state(st),
      elementInputs: T.state(W),
      deformOutputs: T.state(Z),
      analyzeOutputs: T.state(yt)
    },
    settingsObj: {
      nodes: false,
      deformedShape: true,
      shellResults: "displacementZ"
    }
  }));
  document.title = "Plate Orthotropic - Max Z=" + (Y * 1e3).toFixed(2) + "mm";
});
