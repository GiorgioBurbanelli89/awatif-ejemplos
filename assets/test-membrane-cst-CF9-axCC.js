import { x as V, v as C, a as it, g as st } from "./styles-Dp6ubQGB.js";
import { d as lt, a as dt, __tla as __tla_0 } from "./deformCpp-BprT8Kg9.js";
import { g as pt } from "./getDialog-OCmRZYi6.js";
import { g as K } from "./getReport-DmQ4_zmx.js";
import { o as ct } from "./unsafe-html-D8nu7NCE.js";
import "./complex-i8qiIvCl.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  function mt(t) {
    const a = Math.abs(t.strainX - t.expectedStrain) < 1e-10;
    return V`
    <br />
    <header class="header">
      <div class="header-left">
        <h6>Test Report: Membrane CST</h6>
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
    <h1>Membrane CST - Constant Strain Triangle</h1>
    <p class="text">
      This test validates the CST (Constant Strain Triangle) membrane element formulation.
      Based on MacNeal & Harder (1985) benchmark.
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
        <td>${(t.E / 1e6).toFixed(1)}</td>
        <td>MPa</td>
      </tr>
      <tr>
        <td>Poisson's Ratio (ν)</td>
        <td>${t.nu}</td>
        <td>-</td>
      </tr>
      <tr>
        <td>Thickness (t)</td>
        <td>${(t.t * 1e3).toFixed(1)}</td>
        <td>mm</td>
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
        <td>Edge Load (q)</td>
        <td>${t.q}</td>
        <td>N/m</td>
      </tr>
    </table>

    <br />
    <h2>Geometry</h2>
    <p class="text">
      Unit square (1m × 1m) divided into 2 CST triangles.
    </p>
    <table>
      <tr>
        <th>Node</th>
        <th>X</th>
        <th>Y</th>
        <th>Supports</th>
      </tr>
      <tr><td>0</td><td>0</td><td>0</td><td>ux, uy fixed</td></tr>
      <tr><td>1</td><td>1</td><td>0</td><td>free</td></tr>
      <tr><td>2</td><td>1</td><td>1</td><td>free</td></tr>
      <tr><td>3</td><td>0</td><td>1</td><td>uy fixed</td></tr>
    </table>

    <br />
    <h2>Expected Behavior</h2>
    <p class="text">
      For a uniform axial load, the strain should be:
    </p>
    <p class="text" style="font-family: monospace; margin-left: 20px;">
      εx = q / (E × t) = ${t.q} / (${t.E / 1e6} MPa × ${t.t * 1e3} mm) = ${t.expectedStrain.toExponential(4)}
    </p>

    <br />
    <h2>Results: Nodal Displacements</h2>
    <table>
      <tr>
        <th>Node</th>
        <th>Ux (m)</th>
      </tr>
      ${t.displacements.map((d) => V`
        <tr>
          <td>${d.node}</td>
          <td><code>${d.ux.toExponential(4)}</code></td>
        </tr>
      `)}
    </table>

    <br />
    <h2>Strain Comparison</h2>
    <div class="result-box ${a ? "success" : "warning"}">
      <h3>Axial Strain εx</h3>
      <table>
        <tr>
          <th>Source</th>
          <th>Value</th>
          <th>Match</th>
        </tr>
        <tr>
          <td><strong>Awatif FEM</strong></td>
          <td><code>${t.strainX.toExponential(4)}</code></td>
          <td rowspan="2"><strong>${a ? "EXACT" : "DIFFERS"}</strong></td>
        </tr>
        <tr>
          <td>Expected (analytical)</td>
          <td><code>${t.expectedStrain.toExponential(4)}</code></td>
        </tr>
      </table>
    </div>

    <br />
    <h2>Reference</h2>
    <p class="text">
      MacNeal, R.H. and Harder, R.L. (1985). "A proposed standard set of problems
      to test finite element accuracy". Finite Elements in Analysis and Design, 1(1), 3-20.
    </p>

    <br />
    <div class="result-box info">
      <p><strong>Status:</strong> ${a ? "\u2713 PASS - Exact match with analytical solution" : "\u26A0 WARNING - Results differ from expected"}</p>
    </div>
    <br /><br />
  `;
  }
  const ht = `
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
  function b(t, o = 4) {
    return t == null || isNaN(t) || Math.abs(t) < 1e-10 ? "0" : t.toFixed(o).replace(".", ",");
  }
  function M(t) {
    return t == null || isNaN(t) || Math.abs(t) < 1e-15 ? "0" : t.toExponential(4).replace(".", ",");
  }
  function F(t, o) {
    return `<span class="dvc">${t}<span class="dvl"></span>${o}</span>`;
  }
  function f(t) {
    return `<span class="eq">${t}</span>`;
  }
  function i(t, o) {
    return o ? `<var>${t}</var><sub>${o}</sub>` : `<var>${t}</var>`;
  }
  function I(t, o = 4) {
    if (!t || !t.length) return "";
    let a = `<span class="matrix">
`;
    for (let d = 0; d < t.length; d++) {
      a += '<span class="tr"><span class="td"></span>';
      for (let e = 0; e < t[d].length; e++) {
        const s = t[d][e], n = typeof s == "string" ? s : b(s, o);
        a += `<span class="td">${n}</span>`;
      }
      a += `<span class="td"></span></span>
`;
    }
    return a += "</span>", a;
  }
  function ft(t, o, a, d = 200) {
    if (!t || !t.length || !o || !o.length) return "<p><i>No mesh data</i></p>";
    const e = t.map((m) => m[0]), s = t.map((m) => m[1]), n = Math.min(...e), p = Math.max(...e), l = Math.min(...s), y = Math.max(...s), T = p - n || 1, r = y - l || 1, x = d / Math.max(T, r), $ = r * x, k = 30, R = 5, z = new Set(a);
    let g = `<svg viewBox="-30 -30 ${d + 2 * k} ${$ + 2 * k}" xmlns="http://www.w3.org/2000/svg" style="font-family:Segoe UI; font-size:10px; width:${d + 60}pt; height:${$ + 60}pt">`;
    g += "<style>.joint{fill:orangeRed;} .support{stroke:red; stroke-width:1.5; fill:lightpink;} .element{stroke:seaGreen; stroke-width:1.5; fill:lime; fill-opacity:0.15}</style>", g += `<rect x="0" y="0" width="${d}" height="${$}" style="fill:yellow; fill-opacity:0.15" />`, o.forEach((m, A) => {
      const E = m.reduce((h, u) => h + t[u][0], 0) / m.length, v = m.reduce((h, u) => h + t[u][1], 0) / m.length, P = (E - n) * x, B = $ - (v - l) * x, c = m.map((h) => {
        const u = (t[h][0] - n) * x, S = $ - (t[h][1] - l) * x;
        return `${u.toFixed(2)},${S.toFixed(2)}`;
      }).join(" ");
      g += `<polygon points="${c}" class="element"/>`, g += `<text x="${P.toFixed(2)}" y="${(B + 4).toFixed(2)}" text-anchor="middle" fill="#228B22" font-weight="bold">${A + 1}</text>`;
    });
    const L = 8;
    return z.forEach((m) => {
      const A = (t[m][0] - n) * x, E = $ - (t[m][1] - l) * x;
      g += `<circle cx="${A.toFixed(2)}" cy="${E.toFixed(2)}" r="${L}" class="support"/>`;
    }), t.forEach((m, A) => {
      const E = (m[0] - n) * x, v = $ - (m[1] - l) * x;
      g += `<circle cx="${E.toFixed(2)}" cy="${v.toFixed(2)}" r="${R}" class="joint" />`, g += `<text x="${(E - R - 8).toFixed(2)}" y="${(v + 4).toFixed(2)}" text-anchor="end" fill="#333" font-weight="bold">${A}</text>`;
    }), g += "</svg>", g;
  }
  function xt(t, o, a, d = 200, e = "u") {
    if (!t || !t.length || !o || !o.length || !a || !a.length) return "<p><i>No data for contour map</i></p>";
    const s = t.map((c) => c[0]), n = t.map((c) => c[1]), p = Math.min(...s), l = Math.max(...s), y = Math.min(...n), T = Math.max(...n), r = l - p || 1, x = T - y || 1, $ = d / Math.max(r, x), k = x * $, R = 30, z = a.filter((c) => c !== void 0 && !isNaN(c));
    if (!z.length) return "<p><i>No valid values</i></p>";
    const g = Math.min(...z), L = Math.max(...z), m = Math.abs(L - g) || 1;
    function A(c) {
      const h = Math.max(0, Math.min(1, (c - g) / m));
      let u, S, w;
      return h < 0.25 ? (u = 0, S = Math.floor(255 * h * 4), w = 255) : h < 0.5 ? (u = 0, S = 255, w = Math.floor(255 * (1 - (h - 0.25) * 4))) : h < 0.75 ? (u = Math.floor(255 * (h - 0.5) * 4), S = 255, w = 0) : (u = 255, S = Math.floor(255 * (1 - (h - 0.75) * 4)), w = 0), `rgb(${u},${S},${w})`;
    }
    const E = `colorScale_${e}`;
    let v = `<svg viewBox="-30 -30 ${d + 100} ${k + 2 * R}" xmlns="http://www.w3.org/2000/svg" style="width:${d + 100}pt; height:${k + 60}pt; font-family:Arial; font-size:9px;">
<defs>
<linearGradient id="${E}" x1="0%" y1="100%" x2="0%" y2="0%">
<stop offset="0%" style="stop-color:#0000ff"/>
<stop offset="25%" style="stop-color:#00ffff"/>
<stop offset="50%" style="stop-color:#00ff00"/>
<stop offset="75%" style="stop-color:#ffff00"/>
<stop offset="100%" style="stop-color:#ff0000"/>
</linearGradient>
</defs>`;
    o.forEach((c) => {
      const h = c.reduce((w, G) => w + (a[G] || 0), 0) / c.length, u = A(h), S = c.map((w) => {
        const G = (t[w][0] - p) * $, rt = k - (t[w][1] - y) * $;
        return `${G.toFixed(2)},${rt.toFixed(2)}`;
      }).join(" ");
      v += `<polygon points="${S}" fill="${u}" stroke="#333" stroke-width="0.5"/>`;
    });
    const P = d + 15, B = k - 10;
    v += `<rect x="${P}" y="5" width="15" height="${B}" fill="url(#${E})" stroke="#333"/>`;
    for (let c = 0; c <= 4; c++) {
      const h = g + m * c / 4, u = 5 + B - B * c / 4;
      v += `<text x="${P + 20}" y="${u + 3}">${M(h)}</text>`;
    }
    return v += `<text x="${P}" y="-5" font-weight="bold">${e}</text>`, v += "</svg>", v;
  }
  function ut() {
    let e = '<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style="width:200pt; height:200pt; font-family:Arial; font-size:10px;">';
    e += `<defs>
    <marker id="arrowEnd" markerWidth="6" markerHeight="6" refX="0" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6" fill="none" stroke="#cc0000" stroke-width="1"/>
    </marker>
  </defs>`;
    const s = 40, n = 40, p = 160, l = 160;
    e += `<polygon points="${s},${l} ${p},${l} ${p},${n}" fill="#e0ffe0" stroke="#228B22" stroke-width="1.5"/>`, e += `<polygon points="${s},${l} ${p},${n} ${s},${n}" fill="#e0f0ff" stroke="#4169E1" stroke-width="1.5"/>`, e += `<line x1="${s}" y1="${l}" x2="${p}" y2="${n}" stroke="#333" stroke-width="1" stroke-dasharray="4,2"/>`;
    const y = 6;
    return [
      {
        x: s,
        y: l,
        label: "0",
        support: "xy"
      },
      {
        x: p,
        y: l,
        label: "1",
        support: ""
      },
      {
        x: p,
        y: n,
        label: "2",
        support: ""
      },
      {
        x: s,
        y: n,
        label: "3",
        support: "x"
      }
    ].forEach((r) => {
      r.support.includes("x") && (e += `<polygon points="${r.x - 10},${r.y - 5} ${r.x - 10},${r.y + 5} ${r.x - 3},${r.y}" fill="#ff6666" stroke="#cc0000" stroke-width="1"/>`), r.support.includes("y") && (e += `<polygon points="${r.x - 5},${r.y + 10} ${r.x + 5},${r.y + 10} ${r.x},${r.y + 3}" fill="#ff6666" stroke="#cc0000" stroke-width="1"/>`), e += `<circle cx="${r.x}" cy="${r.y}" r="${y}" fill="#ff6600" stroke="#333" stroke-width="1"/>`, e += `<text x="${r.x - 12}" y="${r.y + 4}" font-weight="bold">${r.label}</text>`;
    }), e += `<line x1="${p + 5}" y1="${l}" x2="${p + 25}" y2="${l}" stroke="#cc0000" stroke-width="2" marker-end="url(#arrowEnd)"/>`, e += `<text x="${p + 28}" y="${l + 4}" fill="#cc0000" font-weight="bold">F</text>`, e += `<line x1="${p + 5}" y1="${n}" x2="${p + 25}" y2="${n}" stroke="#cc0000" stroke-width="2" marker-end="url(#arrowEnd)"/>`, e += `<text x="${p + 28}" y="${n + 4}" fill="#cc0000" font-weight="bold">F</text>`, e += `<text x="${s + 120 / 3}" y="${n + 120 * 2 / 3}" fill="#4169E1" font-weight="bold">Elem 1</text>`, e += `<text x="${s + 120 * 2 / 3}" y="${n + 120 / 3}" fill="#228B22" font-weight="bold">Elem 2</text>`, e += `<text x="${s + 120 / 2}" y="${l + 25}" text-anchor="middle">L = 1 m</text>`, e += `<text x="${s - 25}" y="${n + 120 / 2}" text-anchor="middle" transform="rotate(-90,${s - 25},${n + 120 / 2})">L = 1 m</text>`, e += "</svg>", e;
  }
  function $t(t) {
    const { E: o, nu: a, t: d, q: e, strainX: s, expectedStrain: n, displacements: p, nodes: l, elements: y, nodeDisplacements: T, supports: r } = t, x = Math.abs(s - n), $ = x < 1e-10, k = o / (1 - a * a), R = `
<style>${ht}
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
<h3>Membrane CST Element - Patch Test</h3>
<p><i>MacNeal & Harder (1985) - Constant Strain Triangle</i></p>
<hr/>

<h4>Input data</h4>
<table><tr><td>
<p>Element size - ${f(`${i("L")} = 1`)} m \xD7 ${f("1")} m</p>
<p>Thickness - ${f(`${i("t")} = ${b(d * 1e3, 0)}`)} mm</p>
<p>Applied force - ${f(`${i("q")} = ${b(e, 0)}`)} N/m</p>
<p>Modulus of elasticity - ${f(`${i("E")} = ${b(o / 1e6, 0)}`)} MPa</p>
<p>Poisson's ratio - ${f(`${i("\u03BD")} = ${b(a, 2)}`)}</p>
</td><td style="vertical-align:middle; padding-left:20px;">
${ut()}
</td></tr></table>

<h4>Finite element mesh</h4>
<p>2 CST (Constant Strain Triangle) elements</p>
<p>4 nodes, 2 DOFs per node (u, v)</p>
<p>Total DOFs: ${f("8")}</p>

${l && y && r ? ft(l, y, r, 180) : ""}

<h4>CST Element formulation</h4>
<p>The CST element has constant strain within each element.</p>
<p><b>Shape functions (area coordinates):</b></p>
<p>${f(`${i("N", "1")} = 1 - \u03BE - \u03B7`)}, ${f(`${i("N", "2")} = \u03BE`)}, ${f(`${i("N", "3")} = \u03B7`)}</p>

<p><b>Strain-displacement matrix [B]:</b></p>
<p>${f(`<b>${i("B")}</b> = ${F("1", "2A")} \xB7 `)}${I([
      [
        1,
        0,
        -1,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        1,
        0,
        -1
      ],
      [
        0,
        1,
        0,
        -1,
        1,
        0
      ]
    ], 0)}</p>
<p><i>(simplified for unit square element)</i></p>

<p><b>Constitutive matrix [C] - Plane Stress:</b></p>
<p>${f(`<b>${i("C")}</b> = ${F(i("E"), `1 - ${i("\u03BD")}<sup>2</sup>`)} \xB7 `)}${I([
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
    ], 0)} = ${f(`${F(`${b(o / 1e6, 0)} \xB7 10<sup>6</sup>`, `1 - ${b(a, 2)}<sup>2</sup>`)} \xB7 `)}${I([
      [
        1,
        a,
        0
      ],
      [
        a,
        1,
        0
      ],
      [
        0,
        0,
        (1 - a) / 2
      ]
    ], 2)}</p>
<p>${f(`<b>${i("C")}</b> = <b>${b(k / 1e6, 4)} \xB7 10<sup>6</sup></b> \xB7 `)}${I([
      [
        1,
        a,
        0
      ],
      [
        a,
        1,
        0
      ],
      [
        0,
        0,
        (1 - a) / 2
      ]
    ], 2)} Pa</p>

<h4>Solution</h4>
<p>Applied load per node:</p>
<p>${f(`${i("F")} = ${F(i("q"), "2")} = ${F(b(e, 0), "2")} = <b>${b(e / 2, 2)}</b>`)} N</p>

<p><b>Nodal displacements:</b></p>
<table class="bordered">
<tr><th>Node</th><th>${i("u", "x")}</th></tr>
${p.map((z) => `
<tr><td>${z.node}</td><td>${M(z.ux)}</td></tr>
`).join("")}
</table>

<h4>Displacement contour map</h4>
${l && y && T ? xt(l, y, T, 180, "ux") : ""}

<h4>Results - Strain</h4>
<p><b>Expected strain (analytical solution):</b></p>
<p>For uniaxial stress:</p>
<p>${f(`${i("\u03B5", "x")} = ${F(i("\u03C3", "x"), i("E"))} = ${F(i("q"), `${i("E")} \xB7 ${i("t")}`)} = ${F(b(e, 0), `${b(o / 1e6, 0)} \xB7 10<sup>6</sup> \xB7 ${b(d * 1e3, 0)} \xB7 10<sup>-3</sup>`)} = <b>${M(n)}</b>`)}</p>

<p><b>FEM computed strain:</b></p>
<p>${f(`${i("\u03B5", "x,FEM")} = ${i("u", "1")} - ${i("u", "0")} = ${M(p[1].ux)} - ${M(p[0].ux)} = <b>${M(s)}</b>`)}</p>

<h4>Comparison</h4>
<table class="bordered">
<tr><th>Method</th><th>Strain ${i("\u03B5", "x")}</th></tr>
<tr><td>Analytical</td><td>${M(n)}</td></tr>
<tr><td>FEM (CST)</td><td>${M(s)}</td></tr>
<tr><td>Difference</td><td>${M(x)}</td></tr>
</table>

<h4>Verification</h4>
<p>The CST element should reproduce constant strain states exactly.</p>
<p>This is known as the "patch test" and is a fundamental requirement for FE convergence.</p>
<p>${$ ? '<span class="ok">\u2713 PASS - Patch test satisfied (exact match)</span>' : '<span class="err">\u2717 FAIL - Patch test not satisfied</span>'}</p>

<hr/>
<p><i>Generated with Awatif - Calcpad style report</i></p>
</div>
`;
    return V`${ct(R)}`;
  }
  const X = [
    [
      0,
      0,
      0
    ],
    [
      1,
      0,
      0
    ],
    [
      1,
      1,
      0
    ],
    [
      0,
      1,
      0
    ]
  ], N = [
    [
      0,
      1,
      2
    ],
    [
      0,
      2,
      3
    ]
  ], Y = 1e6, et = 0.3, O = 0.01, U = 1, Q = U * 0.5, ot = {
    supports: /* @__PURE__ */ new Map([
      [
        0,
        [
          true,
          true,
          false,
          true,
          true,
          false
        ]
      ],
      [
        3,
        [
          true,
          false,
          false,
          true,
          true,
          false
        ]
      ]
    ]),
    loads: /* @__PURE__ */ new Map([
      [
        1,
        [
          Q,
          0,
          0,
          0,
          0,
          0
        ]
      ],
      [
        2,
        [
          Q,
          0,
          0,
          0,
          0,
          0
        ]
      ]
    ])
  }, _ = {
    elasticities: new Map(N.map((t, o) => [
      o,
      Y
    ])),
    poissonsRatios: new Map(N.map((t, o) => [
      o,
      et
    ])),
    thicknesses: new Map(N.map((t, o) => [
      o,
      O
    ]))
  }, q = lt(X, N, ot, _), gt = dt(X, N, _, q), W = ((_b = (_a = q.deformations) == null ? void 0 : _a.get(0)) == null ? void 0 : _b[0]) || 0, J = ((_d = (_c = q.deformations) == null ? void 0 : _c.get(1)) == null ? void 0 : _d[0]) || 0, at = ((_f = (_e = q.deformations) == null ? void 0 : _e.get(2)) == null ? void 0 : _f[0]) || 0, nt = ((_h = (_g = q.deformations) == null ? void 0 : _g.get(3)) == null ? void 0 : _h[0]) || 0, D = J - W, Z = U / (Y * O);
  console.log("TEST: Membrane CST");
  console.log("Strain \u03B5x (Awatif):", D.toExponential(4));
  console.log("Strain \u03B5x (Expected):", Z.toExponential(4));
  console.log("Match:", Math.abs(D - Z) < 1e-10 ? "EXACT" : "DIFFERS");
  const bt = [
    W,
    J,
    at,
    nt
  ], yt = [
    0,
    3
  ], tt = {
    E: Y,
    nu: et,
    t: O,
    q: U,
    strainX: D,
    expectedStrain: Z,
    displacements: [
      {
        node: 0,
        ux: W
      },
      {
        node: 1,
        ux: J
      },
      {
        node: 2,
        ux: at
      },
      {
        node: 3,
        ux: nt
      }
    ],
    nodes: X,
    elements: N,
    nodeDisplacements: bt,
    supports: yt
  }, H = C.state(""), j = C.state(void 0);
  C.derive(() => {
    H.val === "Report" ? j.val = K({
      template: () => mt(tt)
    }) : H.val === "Report Calcpad" && (j.val = K({
      template: () => $t(tt)
    }));
  });
  document.body.append(it({
    clickedButton: H,
    buttons: [
      "Report",
      "Report Calcpad"
    ],
    sourceCode: "https://github.com/madil4/awatif/blob/main/awatif-fem/src/deform.test.ts"
  }), pt({
    dialogBody: j
  }), st({
    mesh: {
      nodes: C.state(X),
      elements: C.state(N),
      nodeInputs: C.state(ot),
      elementInputs: C.state(_),
      deformOutputs: C.state(q),
      analyzeOutputs: C.state(gt)
    },
    settingsObj: {
      deformedShape: true,
      loads: true,
      supports: true,
      nodes: true
    }
  }));
  document.title = "Membrane CST - \u03B5x=" + D.toExponential(2) + " (expected: " + Z.toExponential(2) + ")";
});
