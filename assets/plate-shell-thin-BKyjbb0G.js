import { x as dt, v as Y, g as Et, e as St, b as Ct, d as Dt } from "./styles-9FDjb-ad.js";
import { a as Ft } from "./analyze-CmnHHflB.js";
import { d as At, __tla as __tla_0 } from "./deformCpp-CS-wCYO-.js";
import { g as Nt } from "./getParameters-agyy6sUI.js";
import { g as Rt } from "./getDialog-BiqeruR6.js";
import { g as it } from "./getReport-CYLnG9Sc.js";
import { g as Tt, __tla as __tla_1 } from "./getMesh-DmUdekin.js";
import { o as pt } from "./unsafe-html-Dv3uUXY0.js";
import "./complex-i8qiIvCl.js";
import "./__vite-browser-external-D7Ct-6yo.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })()
]).then(async () => {
  const It = `
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
/* Bracket classes */
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
/* Fraction classes */
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
/* Control deslizante */
.scale-control {
    background: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 10px 15px;
    margin: 10px 0;
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
}
.scale-control label {
    font-weight: 500;
    min-width: 100px;
}
.scale-control input[type="range"] {
    flex: 1;
    min-width: 100px;
    height: 6px;
    cursor: pointer;
}
.scale-control .scale-value {
    min-width: 60px;
    text-align: right;
    font-family: monospace;
}
/* Zoom toolbar */
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
    flex-wrap: wrap;
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
@media print {
    body {
        margin: 0;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
    }
    .no-print {
        display: none !important;
    }
}
@media screen {
    .no-screen {
        display: none;
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
  function j(t, a = 4) {
    return t == null || isNaN(t) || Math.abs(t) < 1e-10 ? "0" : t.toFixed(a).replace(".", ",");
  }
  function N(t, a = 4) {
    return t == null || isNaN(t) || Math.abs(t) < 1e-10 ? "0" : t.toFixed(a);
  }
  function Q(t, a) {
    return `<span class="dvc">${t}<span class="dvl"></span>${a}</span>`;
  }
  function L(t) {
    return `<span class="eq">${t}</span>`;
  }
  function M(t, a) {
    return a ? `<var>${t}</var><sub>${a}</sub>` : `<var>${t}</var>`;
  }
  function Ot(t, a = 4) {
    if (!t || !t.length) return "";
    let s = `<span class="matrix">
`;
    for (let l = 0; l < t.length; l++) {
      s += '<span class="tr"><span class="td"></span>';
      for (let u = 0; u < t[l].length; u++) s += `<span class="td">${j(t[l][u], a)}</span>`;
      s += `<span class="td"></span></span>
`;
    }
    return s += "</span>", s;
  }
  function Pt(t, a, s, l) {
    const C = 110 / Math.max(t, 1), x = (120 - 2 * 25) / Math.max(a, 1), I = Math.min(C, x), A = t * I, m = a * I, d = 25, k = 25;
    let g = '<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" style="width:160pt; height:120pt; font-family:Arial; font-size:9px;">';
    g += `<defs>
    <marker id="arrowStart" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
      <path d="M6,0 L0,3 L6,6" fill="none" stroke="#333" stroke-width="1"/>
    </marker>
    <marker id="arrowEnd" markerWidth="6" markerHeight="6" refX="0" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6" fill="none" stroke="#333" stroke-width="1"/>
    </marker>
  </defs>`, g += `<rect x="${d}" y="${k}" width="${A}" height="${m}" fill="#e8e8e8" stroke="#333" stroke-width="1.5"/>`;
    const v = 4, D = 5;
    for (let h = 0; h <= D; h++) {
      const b = d + A * h / D;
      g += `<polygon points="${b},${k + m} ${b - v},${k + m + v} ${b + v},${k + m + v}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let h = 0; h <= D; h++) {
      const b = k + m * h / D;
      g += `<polygon points="${d},${b} ${d - v},${b - v} ${d - v},${b + v}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let h = 0; h <= D; h++) {
      const b = k + m * h / D;
      g += `<polygon points="${d + A},${b} ${d + A + v},${b - v} ${d + A + v},${b + v}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let h = 0; h <= D; h++) {
      const b = d + A * h / D;
      g += `<polygon points="${b},${k} ${b - v},${k - v} ${b + v},${k - v}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    const y = 3;
    for (let h = 1; h <= y; h++) for (let b = 1; b <= y; b++) {
      const E = d + A * h / (y + 1), _ = k + m * b / (y + 1);
      g += `<line x1="${E}" y1="${_ - 8}" x2="${E}" y2="${_ + 5}" stroke="#0066cc" stroke-width="1.2" marker-end="url(#arrowEnd)"/>`;
    }
    g += `<text x="${d + A / 2}" y="${k + m / 2 - 12}" text-anchor="middle" fill="#0066cc" font-style="italic">q</text>`;
    const T = k + m + 18;
    g += `<line x1="${d}" y1="${T}" x2="${d + A}" y2="${T}" stroke="#333" stroke-width="0.8" marker-start="url(#arrowStart)" marker-end="url(#arrowEnd)"/>`, g += `<text x="${d + A / 2}" y="${T + 10}" text-anchor="middle" font-style="italic">B</text>`;
    const $ = d + A + 18;
    return g += `<line x1="${$}" y1="${k}" x2="${$}" y2="${k + m}" stroke="#333" stroke-width="0.8" marker-start="url(#arrowStart)" marker-end="url(#arrowEnd)"/>`, g += `<text x="${$ + 8}" y="${k + m / 2 + 3}" font-style="italic">L</text>`, g += "</svg>", g;
  }
  function Lt(t, a, s = 400) {
    if (!t.length || !a.length) return "<p>No mesh data</p>";
    const l = t.map(($) => $[0]), u = t.map(($) => $[1]), S = Math.min(...l), F = Math.max(...l), C = Math.min(...u), x = Math.max(...u), I = F - S || 1, A = x - C || 1, m = s / Math.max(I, A), d = A * m, k = 20, g = 2.666667, v = 0.01, D = /* @__PURE__ */ new Set();
    t.forEach(($, h) => {
      (Math.abs($[0] - S) < v || Math.abs($[0] - F) < v || Math.abs($[1] - C) < v || Math.abs($[1] - x) < v) && D.add(h);
    });
    let y = `<svg viewbox="-20 -20 ${N(s + 2 * k, 0)} ${N(d + 2 * k, 6)}" xmlns="http://www.w3.org/2000/svg" version="1.1" style="font-family:Segoe UI;font-size:10px;width:${s}pt;height:${N(d, 6)}pt">`;
    y += "<style>.joint{fill:orangeRed;}.support{stroke:red;stroke-width:1;fill:lightpink;}.element{stroke:seaGreen;stroke-width:1;fill:lime;fill-opacity:0.1;stroke-opacity:0.5}</style>", y += `<rect x="0" y="0" width="${s}" height="${N(d, 6)}" style="fill:yellow;fill-opacity:0.2"/>`, a.forEach(($, h) => {
      const b = $.reduce((f, z) => f + t[z][0], 0) / $.length, E = $.reduce((f, z) => f + t[z][1], 0) / $.length, _ = (b - S) * m, O = d - (E - C) * m, n = $.map((f) => {
        const z = (t[f][0] - S) * m, c = d - (t[f][1] - C) * m;
        return `${N(z, 6)},${N(c, 6)}`;
      }).join(" ");
      y += `<text x="${N(_, 6)}" y="${N(O + 4, 6)}" text-anchor="middle">${h + 1}</text>`, y += `<polygon points="${n}" class="element"/>`;
    });
    const T = 5.333333;
    return D.forEach(($) => {
      const h = (t[$][0] - S) * m, b = d - (t[$][1] - C) * m;
      (Math.abs(t[$][1] - C) < v || Math.abs(t[$][1] - x) < v) && (y += `<line x1="${N(h - 2 * T, 6)}" y1="${N(b, 6)}" x2="${N(h + 2 * T, 6)}" y2="${N(b, 6)}" class="support"/>`), (Math.abs(t[$][0] - S) < v || Math.abs(t[$][0] - F) < v) && (y += `<line x1="${N(h, 6)}" y1="${N(b - 2 * T, 6)}" x2="${N(h, 6)}" y2="${N(b + 2 * T, 6)}" class="support"/>`), y += `<circle cx="${N(h, 6)}" cy="${N(b, 6)}" r="${T}" class="support"/>`;
    }), t.forEach(($, h) => {
      const b = ($[0] - S) * m, E = d - ($[1] - C) * m;
      y += `<circle cx="${N(b, 6)}" cy="${N(E, 6)}" r="${g}" class="joint"/>`, y += `<text x="${N(b + g * 2, 6)}" y="${N(E - g, 6)}" text-anchor="start">${h + 1}</text>`;
    }), y += "</svg>", y;
  }
  function _t(t, a, s, l = 400, u = "w") {
    if (!t.length || !a.length || !s.length) return "";
    const S = t.map((n) => n[0]), F = t.map((n) => n[1]), C = Math.min(...S), x = Math.max(...S), I = Math.min(...F), A = Math.max(...F), m = x - C || 1, d = A - I || 1, k = l / Math.max(m, d), g = d * k, v = 20, D = s.filter((n) => n !== void 0 && !isNaN(n));
    if (!D.length) return "";
    const y = Math.min(...D), T = Math.max(...D), $ = Math.abs(T - y) || 1;
    function h(n) {
      const f = Math.max(0, Math.min(1, (n - y) / $));
      let z, c, p;
      return f < 0.25 ? (z = 0, c = Math.floor(255 * f * 4), p = 255) : f < 0.5 ? (z = 0, c = 255, p = Math.floor(255 * (1 - (f - 0.25) * 4))) : f < 0.75 ? (z = Math.floor(255 * (f - 0.5) * 4), c = 255, p = 0) : (z = 255, c = Math.floor(255 * (1 - (f - 0.75) * 4)), p = 0), `rgb(${z},${c},${p})`;
    }
    const b = `colorScale_${u.replace(/[^a-zA-Z0-9]/g, "")}`;
    let E = `<svg viewBox="-20 -20 ${l + 80} ${g + 2 * v}" xmlns="http://www.w3.org/2000/svg" style="width:${l + 80}pt;height:${N(g, 0)}pt;font-family:Arial;font-size:9px;">
<defs>
<linearGradient id="${b}" x1="0%" y1="100%" x2="0%" y2="0%">
<stop offset="0%" style="stop-color:#0000ff"/>
<stop offset="25%" style="stop-color:#00ffff"/>
<stop offset="50%" style="stop-color:#00ff00"/>
<stop offset="75%" style="stop-color:#ffff00"/>
<stop offset="100%" style="stop-color:#ff0000"/>
</linearGradient>
</defs>`;
    a.forEach((n) => {
      const f = n.reduce((p, P) => p + (s[P] || 0), 0) / n.length, z = h(f), c = n.map((p) => {
        const P = (t[p][0] - C) * k, q = g - (t[p][1] - I) * k;
        return `${N(P, 6)},${N(q, 6)}`;
      }).join(" ");
      E += `<polygon points="${c}" fill="${z}" stroke="#333" stroke-width="0.3"/>`;
    });
    const _ = l + 10, O = g - 20;
    E += `<rect x="${_}" y="10" width="15" height="${N(O, 0)}" fill="url(#${b})" stroke="#333"/>`;
    for (let n = 0; n <= 5; n++) {
      const f = y + $ * n / 5, z = 10 + O - O * n / 5;
      E += `<text x="${_ + 20}" y="${N(z + 3, 0)}">${j(f, 4)}</text>`;
    }
    return E += `<text x="${_}" y="5">${u}</text>`, E += "</svg>", E;
  }
  function $t(t, a, s, l = 400, u = "M") {
    if (!t.length || !a.length) return "";
    const S = s.filter((n) => n !== void 0 && !isNaN(n));
    if (!S.length) return "<p><i>No data for contour map</i></p>";
    const F = t.map((n) => n[0]), C = t.map((n) => n[1]), x = Math.min(...F), I = Math.max(...F), A = Math.min(...C), m = Math.max(...C), d = I - x || 1, k = m - A || 1, g = l / Math.max(d, k), v = k * g, D = 20, y = Math.min(...S), T = Math.max(...S), $ = Math.abs(T - y) || 1;
    function h(n) {
      const f = Math.max(0, Math.min(1, (n - y) / $));
      let z, c, p;
      return f < 0.25 ? (z = 0, c = Math.floor(255 * f * 4), p = 255) : f < 0.5 ? (z = 0, c = 255, p = Math.floor(255 * (1 - (f - 0.25) * 4))) : f < 0.75 ? (z = Math.floor(255 * (f - 0.5) * 4), c = 255, p = 0) : (z = 255, c = Math.floor(255 * (1 - (f - 0.75) * 4)), p = 0), `rgb(${z},${c},${p})`;
    }
    const b = `colorScaleElem_${u.replace(/[^a-zA-Z0-9]/g, "")}`;
    let E = `<svg viewBox="-20 -20 ${l + 80} ${v + 2 * D}" xmlns="http://www.w3.org/2000/svg" style="width:${l + 80}pt;height:${N(v, 0)}pt;font-family:Arial;font-size:9px;">
<defs>
<linearGradient id="${b}" x1="0%" y1="100%" x2="0%" y2="0%">
<stop offset="0%" style="stop-color:#0000ff"/>
<stop offset="25%" style="stop-color:#00ffff"/>
<stop offset="50%" style="stop-color:#00ff00"/>
<stop offset="75%" style="stop-color:#ffff00"/>
<stop offset="100%" style="stop-color:#ff0000"/>
</linearGradient>
</defs>`;
    a.forEach((n, f) => {
      const z = s[f] || 0, c = h(z), p = n.map((P) => {
        const q = (t[P][0] - x) * g, H = v - (t[P][1] - A) * g;
        return `${N(q, 6)},${N(H, 6)}`;
      }).join(" ");
      E += `<polygon points="${p}" fill="${c}" stroke="#333" stroke-width="0.3"/>`;
    });
    const _ = l + 10, O = v - 20;
    E += `<rect x="${_}" y="10" width="15" height="${N(O, 0)}" fill="url(#${b})" stroke="#333"/>`;
    for (let n = 0; n <= 5; n++) {
      const f = y + $ * n / 5, z = 10 + O - O * n / 5;
      E += `<text x="${_ + 20}" y="${N(z + 3, 0)}">${j(f, 4)}</text>`;
    }
    return E += `<text x="${_}" y="5">${u}</text>`, E += "</svg>", E;
  }
  function xt(t) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    const a = ((_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val) || [], s = ((_b = t == null ? void 0 : t.elements) == null ? void 0 : _b.val) || [], l = ((_c = t == null ? void 0 : t.nodeInputs) == null ? void 0 : _c.val) || {}, u = ((_d = t == null ? void 0 : t.elementInputs) == null ? void 0 : _d.val) || {}, S = ((_e = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _e.val) || {}, F = ((_f = t == null ? void 0 : t.analyzeOutputs) == null ? void 0 : _f.val) || {}, C = ((_g = u.elasticities) == null ? void 0 : _g.values().next().value) || 21e4, x = ((_h = u.poissonsRatios) == null ? void 0 : _h.values().next().value) || 0.3, I = ((_i = u.thicknesses) == null ? void 0 : _i.values().next().value) || 0.2, A = ((_k = (_j = l.loads) == null ? void 0 : _j.values().next().value) == null ? void 0 : _k[2]) || -10, m = a.map((G) => G[0]), d = a.map((G) => G[1]), k = m.length ? Math.max(...m) - Math.min(...m) : 10, g = d.length ? Math.max(...d) - Math.min(...d) : 15, v = C / (2 * (1 + x)), D = C * Math.pow(I, 3) / (12 * (1 - x * x)), y = [];
    let T = 0, $ = 0;
    S.deformations && S.deformations.forEach((G, Z) => {
      y[Z] = G[2] || 0, Math.abs(G[2]) > Math.abs(T) && (T = G[2], $ = Z);
    });
    const h = [], b = [];
    let E = 0, _ = 0, O = 0, n = 0;
    F.bendingXX && F.bendingXX.forEach((G, Z) => {
      const i = G.reduce((B, K) => B + K, 0) / G.length;
      h[Z] = i, Math.abs(i) > Math.abs(E) && (E = i, _ = Z);
    }), F.bendingYY && F.bendingYY.forEach((G, Z) => {
      const i = G.reduce((B, K) => B + K, 0) / G.length;
      b[Z] = i, Math.abs(i) > Math.abs(O) && (O = i, n = Z);
    }), F.bendingXY && F.bendingXY.forEach((G, Z) => {
      G.reduce((i, B) => i + B, 0) / G.length;
    });
    const f = [
      [
        D,
        D * x,
        0
      ],
      [
        D * x,
        D,
        0
      ],
      [
        0,
        0,
        D * (1 - x) / 2
      ]
    ], z = ((_l = l.supports) == null ? void 0 : _l.size) || 0, c = a.length, p = s.length, P = Math.min(k, g), q = 406e-5 * Math.abs(A) * Math.pow(P, 4) / D, H = q > 0 ? Math.abs(Math.abs(T) - q) / q * 100 : 0, et = `
<style>${It}</style>

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

<div id="reportContent">
<h3>Finite Element Analysis of Rectangular Plate</h3>
<hr/>

<h4>Input data</h4>
<table><tr><td>
<p>Plate dimensions - ${L(`${M("B")} = ${j(k, 1)}`)} m, ${L(`${M("L")} = ${j(g, 1)}`)} m</p>
<p>Thickness - ${L(`${M("t")} = ${j(I, 3)}`)} m</p>
<p>Load - ${L(`${M("q")} = ${j(Math.abs(A), 1)}`)} kN/m\xB2</p>
<p>Modulus of elasticity - ${L(`${M("E")} = ${j(C, 0)}`)} MPa</p>
<p>Poisson's ratio - ${L(`${M("\u03BD")} = ${j(x, 2)}`)}</p>
</td><td style="vertical-align:middle;padding-left:30px;">
${Pt(k, g)}
</td></tr></table>

<h4>Derived properties</h4>
<p><b>Shear modulus</b></p>
<p>${L(`${M("G")} = ${Q(M("E"), `2\xB7(1 + ${M("\u03BD")})`)} = ${Q(j(C, 0), `2\xB7(1 + ${j(x, 2)})`)} = <b>${j(v, 2)}</b>`)} MPa</p>

<p><b>Flexural rigidity</b></p>
<p>${L(`${M("D")} = ${Q(`${M("E")}\xB7${M("t")}<sup>3</sup>`, `12\xB7(1 - ${M("\u03BD")}<sup>2</sup>)`)} = ${Q(`${j(C, 0)}\xB7${j(I, 3)}<sup>3</sup>`, `12\xB7(1 - ${j(x, 2)}<sup>2</sup>)`)} = <b>${j(D, 4)}</b>`)}</p>

<h4>Finite element mesh</h4>
<p>We use triangular finite elements with 18 DOFs (6 per node)</p>
<p>Total number of elements - ${L(`${M("n", "e")} = ${p}`)}</p>
<p>Total number of joints - ${L(`${M("n", "j")} = ${c}`)}</p>
<p>Supported joints count - ${L(`${M("n", "s")} = ${z}`)}</p>

<div class="no-print scale-control">
  <label>Text size:</label>
  <input type="range" id="textSizeSlider" min="1" max="24" value="10" oninput="updateTextSize(this.value)">
  <span class="scale-value" id="textSizeValue">10 px</span>
  &nbsp;&nbsp;|&nbsp;&nbsp;
  <label>Graphic size:</label>
  <input type="range" id="graphicSizeSlider" min="200" max="1000" value="400" oninput="updateGraphicSize(this.value)">
  <span class="scale-value" id="graphicSizeValue">400 pt</span>
</div>
<div id="meshContainer">
${Lt(a, s)}
</div>

<script>
(function() {
  const nodes = ${JSON.stringify(a)};
  const elements = ${JSON.stringify(s)};

  window.updateTextSize = function(size) {
    document.getElementById('textSizeValue').textContent = size + ' px';
    const svg = document.querySelector('#meshContainer svg');
    if (svg) svg.style.fontSize = size + 'px';
  };

  window.updateGraphicSize = function(size) {
    const width = parseInt(size);
    document.getElementById('graphicSizeValue').textContent = width + ' pt';
    if (!nodes.length || !elements.length) return;

    const xs = nodes.map(n => n[0]);
    const ys = nodes.map(n => n[1]);
    const minX = Math.min(...xs), maxX = Math.max(...xs);
    const minY = Math.min(...ys), maxY = Math.max(...ys);
    const rangeX = maxX - minX || 1;
    const rangeY = maxY - minY || 1;
    const k = width / Math.max(rangeX, rangeY);
    const h = rangeY * k;
    const d = 20;
    const r = 2.666667;

    const tol = 0.01;
    const boundaryNodes = new Set();
    nodes.forEach((node, i) => {
      if (Math.abs(node[0] - minX) < tol || Math.abs(node[0] - maxX) < tol ||
          Math.abs(node[1] - minY) < tol || Math.abs(node[1] - maxY) < tol) {
        boundaryNodes.add(i);
      }
    });

    const currentFontSize = document.getElementById('textSizeSlider').value || 10;
    let svg = '<svg viewbox="' + (-d) + ' ' + (-d) + ' ' + (width + 2*d) + ' ' + (h + 2*d).toFixed(6) + '" xmlns="http://www.w3.org/2000/svg" version="1.1" style="font-family:Segoe UI;font-size:' + currentFontSize + 'px;width:' + width + 'pt;height:' + h.toFixed(6) + 'pt">';
    svg += '<style>.joint{fill:orangeRed;}.support{stroke:red;stroke-width:1;fill:lightpink;}.element{stroke:seaGreen;stroke-width:1;fill:lime;fill-opacity:0.1;stroke-opacity:0.5}</style>';
    svg += '<rect x="0" y="0" width="' + width + '" height="' + h.toFixed(6) + '" style="fill:yellow;fill-opacity:0.2"/>';

    elements.forEach((elem, e) => {
      const cx = elem.reduce((s, ni) => s + nodes[ni][0], 0) / elem.length;
      const cy = elem.reduce((s, ni) => s + nodes[ni][1], 0) / elem.length;
      const x = (cx - minX) * k;
      const y = h - (cy - minY) * k;
      const pts = elem.map(ni => {
        const px = (nodes[ni][0] - minX) * k;
        const py = h - (nodes[ni][1] - minY) * k;
        return px.toFixed(6) + ',' + py.toFixed(6);
      }).join(' ');
      svg += '<text x="' + x.toFixed(6) + '" y="' + (y + 4).toFixed(6) + '" text-anchor="middle">' + (e + 1) + '</text>';
      svg += '<polygon points="' + pts + '" class="element"/>';
    });

    const supportR = 5.333333;
    boundaryNodes.forEach(i => {
      const x = (nodes[i][0] - minX) * k;
      const y = h - (nodes[i][1] - minY) * k;
      if (Math.abs(nodes[i][1] - minY) < tol || Math.abs(nodes[i][1] - maxY) < tol) {
        svg += '<line x1="' + (x - 2*supportR).toFixed(6) + '" y1="' + y.toFixed(6) + '" x2="' + (x + 2*supportR).toFixed(6) + '" y2="' + y.toFixed(6) + '" class="support"/>';
      }
      if (Math.abs(nodes[i][0] - minX) < tol || Math.abs(nodes[i][0] - maxX) < tol) {
        svg += '<line x1="' + x.toFixed(6) + '" y1="' + (y - 2*supportR).toFixed(6) + '" x2="' + x.toFixed(6) + '" y2="' + (y + 2*supportR).toFixed(6) + '" class="support"/>';
      }
      svg += '<circle cx="' + x.toFixed(6) + '" cy="' + y.toFixed(6) + '" r="' + supportR + '" class="support"/>';
    });

    nodes.forEach((node, j) => {
      const x = (node[0] - minX) * k;
      const y = h - (node[1] - minY) * k;
      svg += '<circle cx="' + x.toFixed(6) + '" cy="' + y.toFixed(6) + '" r="' + r + '" class="joint"/>';
      svg += '<text x="' + (x + r*2).toFixed(6) + '" y="' + (y - r).toFixed(6) + '" text-anchor="start">' + (j + 1) + '</text>';
    });

    svg += '</svg>';
    document.getElementById('meshContainer').innerHTML = svg;
  };

  window.updateZoom = function(value) {
    const zoom = parseInt(value);
    document.getElementById('zoomValue').textContent = zoom + '%';
    document.getElementById('zoomSlider').value = zoom;
    const content = document.getElementById('reportContent');
    if (content) content.style.transform = 'scale(' + (zoom / 100) + ')';
  };
  window.setZoom = function(value) { updateZoom(value); };
})();
<\/script>

<h4>Finite element formulation</h4>
<p><b>Shape functions</b></p>
<p>Linear shape functions for triangular element (area coordinates):</p>
<p>${L(`${M("N", "1")}(\u03BE,\u03B7) = 1 - \u03BE - \u03B7`)}</p>
<p>${L(`${M("N", "2")}(\u03BE,\u03B7) = \u03BE`)}</p>
<p>${L(`${M("N", "3")}(\u03BE,\u03B7) = \u03B7`)}</p>

<p><b>Constitutive matrix</b></p>
<p>${L(`<b>${M("D")}</b> = ${Q(`${M("E")}\xB7${M("t")}<sup>3</sup>`, `12\xB7(1 - ${M("\u03BD")}<sup>2</sup>)`)} \xB7 <b class="b1">[</b>1; ${M("\u03BD")}; 0 <b class="b0">|</b> ${M("\u03BD")}; 1; 0 <b class="b0">|</b> 0; 0; ${Q(`1 - ${M("\u03BD")}`, "2")}<b class="b1">]</b>`)}</p>
<p>${L(`<b>${M("D")}</b> = ${Ot(f, 4)}`)}</p>

<h4>Solution</h4>
<p>Total degrees of freedom: ${L(`${c * 6}`)}</p>
<p>Free degrees of freedom: ${L(`${c * 6 - z * 6}`)}</p>
<p>Global system: ${L(`${M("K")} \xB7 ${M("U")} = ${M("F")}`)}</p>

<h4>Results</h4>
<p><b>Displacements</b></p>
<p>Maximum displacement: ${L(`${M("w", "max")} = <span class="${Math.abs(T) > 1 ? "err" : "ok"}">${j(T, 6)}</span>`)} at joint ${$ + 1}</p>

${y.length > 0 ? `<p><b>Displacement contour map</b></p>${_t(a, s, y, 400, "w")}` : ""}

<h4>Shell Results - Bending Moments</h4>
<p>Maximum ${M("M", "x")}: ${L(`${M("M", "x,max")} = ${j(E, 4)}`)} at element ${_ + 1}</p>
<p>Maximum ${M("M", "y")}: ${L(`${M("M", "y,max")} = ${j(O, 4)}`)} at element ${n + 1}</p>

${h.length > 0 ? `<p><b>Moment ${M("M", "x")} contour map</b></p>${$t(a, s, h, 400, "Mx")}` : ""}
${b.length > 0 ? `<p><b>Moment ${M("M", "y")} contour map</b></p>${$t(a, s, b, 400, "My")}` : ""}

<h4>Analytical Verification (Navier Solution)</h4>
<p>For simply supported rectangular plate with uniform load:</p>
<p>${L(`${M("w", "max")} \u2248 0,00406 \xB7 ${Q(`|${M("q")}| \xB7 ${M("a")}<sup>4</sup>`, M("D"))}`)}</p>
<p>${L(`${M("w", "analytical")} = 0,00406 \xB7 ${Q(`|${j(A, 1)}| \xB7 ${j(P, 1)}<sup>4</sup>`, j(D, 4))} = ${j(q, 6)}`)}</p>
<p>FEM result: ${L(`${M("w", "FEM")} = ${j(Math.abs(T), 6)}`)}</p>
<p>Error: ${L(`<span class="${H < 10 ? "ok" : "err"}">${j(H, 2)}%</span>`)}</p>

<hr/>
<p><i>Generated with Awatif - Calcpad style report</i></p>
</div>
`;
    return dt`${pt(et)}`;
  }
  const jt = `
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f4f4f4;
  margin-bottom: 15px;
}
.header-left h6 {
  margin: 0;
  font-size: 20px;
  color: #2e5368;
}
.header-right {
  display: flex;
  align-items: center;
}
table {
  border-collapse: collapse;
  border: 1px solid #000;
  font-size: 12px;
  margin: 10px;
}
td, th {
  border: 1px solid #bcbcbc;
  padding: 6px 10px;
  font-size: 12px;
}
th {
  background-color: #e1e1e1;
}
.text {
  font-family: "Arial", sans-serif;
  color: #28292e;
  margin: 5px 10px;
  font-size: 13px;
}
h1 {
  font-family: "Arial", sans-serif;
  color: #2e5368;
  font-size: 22px;
  margin: 15px 10px 5px 10px;
}
h2 {
  font-family: "Arial", sans-serif;
  color: #2e5368;
  font-size: 16px;
  margin: 20px 10px 8px 10px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 5px;
}
a {
  color: #015f73;
  text-decoration: none;
}
.summary-box {
  background: #f0f7fa;
  border: 1px solid #b8d4e3;
  border-radius: 5px;
  padding: 15px;
  margin: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 10px;
}
.summary-item {
  text-align: center;
}
.summary-item .label {
  font-size: 11px;
  color: #666;
}
.summary-item .value {
  font-size: 18px;
  font-weight: bold;
  color: #2e5368;
}
.contour-container {
  margin: 15px 10px;
  text-align: center;
}
.result-highlight {
  background: #fff3cd;
  border: 1px solid #ffc107;
  border-radius: 4px;
  padding: 10px 15px;
  margin: 10px;
  font-size: 14px;
}
.result-highlight b {
  color: #856404;
}
@media print {
  @page {
    size: A4 portrait;
    margin: 15mm;
  }
}
`;
  function gt(t, a, s, l, u) {
    if (!t.length || !a.length || !s.length) return `<p style="color:#999;margin:10px;">No data available for ${u}</p>`;
    const S = t.map((n) => n[0]), F = t.map((n) => n[1]), C = Math.min(...S), x = Math.max(...S), I = Math.min(...F), A = Math.max(...F), m = x - C || 1, d = A - I || 1, k = l / Math.max(m, d), g = d * k, v = 20, D = s.filter((n) => n !== void 0 && !isNaN(n));
    if (!D.length) return "";
    const y = Math.min(...D), T = Math.max(...D), $ = Math.abs(T - y) || 1;
    function h(n) {
      const f = Math.max(0, Math.min(1, (n - y) / $));
      let z, c, p;
      return f < 0.25 ? (z = 0, c = Math.floor(255 * f * 4), p = 255) : f < 0.5 ? (z = 0, c = 255, p = Math.floor(255 * (1 - (f - 0.25) * 4))) : f < 0.75 ? (z = Math.floor(255 * (f - 0.5) * 4), c = 255, p = 0) : (z = 255, c = Math.floor(255 * (1 - (f - 0.75) * 4)), p = 0), `rgb(${z},${c},${p})`;
    }
    const b = `grad_${u.replace(/[^a-zA-Z0-9]/g, "")}`;
    let E = `<svg viewBox="-20 -20 ${l + 80} ${g + 2 * v}" xmlns="http://www.w3.org/2000/svg" style="width:${l + 80}px;height:${g + 40}px;font-family:Arial;font-size:10px;">
<defs>
<linearGradient id="${b}" x1="0%" y1="100%" x2="0%" y2="0%">
<stop offset="0%" style="stop-color:#0000ff"/>
<stop offset="25%" style="stop-color:#00ffff"/>
<stop offset="50%" style="stop-color:#00ff00"/>
<stop offset="75%" style="stop-color:#ffff00"/>
<stop offset="100%" style="stop-color:#ff0000"/>
</linearGradient>
</defs>`;
    a.forEach((n) => {
      const f = n.reduce((p, P) => p + (s[P] || 0), 0) / n.length, z = h(f), c = n.map((p) => {
        const P = (t[p][0] - C) * k, q = g - (t[p][1] - I) * k;
        return `${P.toFixed(2)},${q.toFixed(2)}`;
      }).join(" ");
      E += `<polygon points="${c}" fill="${z}" stroke="#333" stroke-width="0.3"/>`;
    });
    const _ = l + 10, O = Math.max(g - 20, 60);
    E += `<rect x="${_}" y="10" width="15" height="${O}" fill="url(#${b})" stroke="#333"/>`;
    for (let n = 0; n <= 4; n++) {
      const f = y + $ * n / 4, z = 10 + O - O * n / 4;
      E += `<text x="${_ + 20}" y="${z + 4}">${f.toExponential(2)}</text>`;
    }
    return E += `<text x="${_}" y="5" font-weight="bold">${u}</text>`, E += "</svg>", E;
  }
  function Bt(t) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s;
    const a = ((_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val) || [], s = ((_b = t == null ? void 0 : t.elements) == null ? void 0 : _b.val) || [], l = ((_c = t == null ? void 0 : t.nodeInputs) == null ? void 0 : _c.val) || {}, u = ((_d = t == null ? void 0 : t.elementInputs) == null ? void 0 : _d.val) || {}, S = ((_e = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _e.val) || {}, F = ((_f = t == null ? void 0 : t.analyzeOutputs) == null ? void 0 : _f.val) || {}, C = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric"
    }), x = ((_j = (_h = (_g = u.elasticities) == null ? void 0 : _g.values) == null ? void 0 : (_i = _h.call(_g)).next) == null ? void 0 : _j.call(_i).value) || 21e4, I = ((_n = (_l = (_k = u.poissonsRatios) == null ? void 0 : _k.values) == null ? void 0 : (_m = _l.call(_k)).next) == null ? void 0 : _n.call(_m).value) || 0.3, A = ((_r = (_p = (_o = u.thicknesses) == null ? void 0 : _o.values) == null ? void 0 : (_q = _p.call(_o)).next) == null ? void 0 : _r.call(_q).value) || 0.2, m = ((_s = l.supports) == null ? void 0 : _s.size) || 0, d = S.deformations || [], k = [];
    let g = 0, v = 0;
    d.forEach((c, p) => {
      k[p] = c[2] || 0, Math.abs(c[2]) > Math.abs(g) && (g = c[2], v = p);
    });
    const D = F.bendingXX || [], y = F.bendingYY || [], T = [];
    let $ = 0, h = 0;
    s.forEach((c, p) => {
      const P = D[p] || [
        0
      ], q = y[p] || [
        0
      ], H = P.reduce((G, Z) => G + Z, 0) / P.length, et = q.reduce((G, Z) => G + Z, 0) / q.length;
      T[p] = H, Math.abs(H) > Math.abs($) && ($ = H), Math.abs(et) > Math.abs(h) && (h = et);
    });
    let b = "";
    for (let c = 0; c < Math.min(a.length, 10); c++) {
      const p = a[c];
      b += `<tr><td>${c}</td><td>${(p[0] || 0).toFixed(3)}</td><td>${(p[1] || 0).toFixed(3)}</td><td>${(p[2] || 0).toFixed(3)}</td></tr>`;
    }
    let E = "";
    for (let c = 0; c < Math.min(d.length, 10); c++) {
      const p = d[c] || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      E += `<tr><td>${c}</td><td>${(p[0] || 0).toExponential(3)}</td><td>${(p[1] || 0).toExponential(3)}</td><td>${(p[2] || 0).toExponential(3)}</td></tr>`;
    }
    const _ = gt(a, s, k, 350, "Displacement (w)"), O = new Array(a.length).fill(0), n = new Array(a.length).fill(0);
    s.forEach((c, p) => {
      c.forEach((P) => {
        O[P] += T[p] || 0, n[P]++;
      });
    }), O.forEach((c, p) => {
      n[p] > 0 && (O[p] /= n[p]);
    });
    const f = gt(a, s, O, 350, "Moment Mxx"), z = `
<style>${jt}</style>

<header class="header">
  <div class="header-left">
    <h6>Shell Analysis Report</h6>
    <p class="text" style="margin:0">
      <a href="https://awatif.co" target="_blank">Awatif.co</a> | ${C}
    </p>
  </div>
  <div class="header-right">
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 -3 35 35" fill="#015f73">
      <path d="M2,29.14l9.86-16.87c1.86,3.34,4.56,7.62,3.34,11.57a7.61,7.61,0,0,1-2.61,3.68,7.78,7.78,0,0,1-5,1.61c-1.48,0-3,0-4.47,0A4.5,4.5,0,0,0,2,29.14Z"></path>
      <path d="M12.86,10.43l5.71-10L35.12,29.14H31a13.92,13.92,0,0,1-8.44-3.54,18.23,18.23,0,0,1-3.44-4.5c-.55-.92-1.08-1.85-1.61-2.79-1.25-2.21-2.56-4.39-3.85-6.58Z"></path>
    </svg>
  </div>
</header>

<h1>Plate / Shell Finite Element Analysis</h1>

<div class="summary-box">
  <div class="summary-item">
    <div class="label">NODES</div>
    <div class="value">${a.length}</div>
  </div>
  <div class="summary-item">
    <div class="label">ELEMENTS</div>
    <div class="value">${s.length}</div>
  </div>
  <div class="summary-item">
    <div class="label">SUPPORTS</div>
    <div class="value">${m}</div>
  </div>
  <div class="summary-item">
    <div class="label">THICKNESS</div>
    <div class="value">${A.toFixed(3)}</div>
  </div>
  <div class="summary-item">
    <div class="label">MODULUS E</div>
    <div class="value">${x.toFixed(0)}</div>
  </div>
  <div class="summary-item">
    <div class="label">POISSON</div>
    <div class="value">${I.toFixed(2)}</div>
  </div>
</div>

<div class="result-highlight">
  <b>Maximum Displacement:</b> w<sub>max</sub> = ${g.toExponential(4)} at node ${v}<br>
  <b>Maximum Moment Mxx:</b> ${$.toExponential(4)}<br>
  <b>Maximum Moment Myy:</b> ${h.toExponential(4)}
</div>

<h2>Displacement Contour Map</h2>
<div class="contour-container">
  ${_}
</div>

<h2>Bending Moment Mxx Contour Map</h2>
<div class="contour-container">
  ${f}
</div>

<h2>Node Coordinates ${a.length > 10 ? `(first 10 of ${a.length})` : ""}</h2>
<table>
  <tr><th>Node</th><th>X</th><th>Y</th><th>Z</th></tr>
  ${b}
</table>

<h2>Nodal Displacements ${d.length > 10 ? `(first 10 of ${d.length})` : ""}</h2>
<table>
  <tr><th>Node</th><th>ux</th><th>uy</th><th>w (uz)</th></tr>
  ${E}
</table>

<br><br>
<p class="text" style="color:#999;font-size:11px;">Generated with Awatif - Original Style Report</p>
`;
    return dt`${pt(z)}`;
  }
  const Gt = `
body {
    font-size: 11pt;
    font-family: 'Segoe UI', 'Arial Nova', Helvetica, sans-serif;
    margin-left: 1.5em;
    max-width: 210mm;
}
h1, h2, h3, h4, h5, h6 {
    font-family: 'Arial Nova', Helvetica, sans-serif;
    margin: 0.5em 0 0.5em 0;
    padding: 0;
    line-height: 150%;
}
h1 {font-size: 2.1em; color: #1a5276; border-bottom: 3px solid #1a5276; padding-bottom: 10px;}
h2 {font-size: 1.5em; color: #2874a6; border-bottom: 1px solid #aed6f1; margin-top: 25px;}
h3 {font-size: 1.2em; color: #5dade2; margin-top: 15px;}
h4 {font-size: 1.1em; color: #333;}
p, li { margin: 0.3em 0; line-height: 150%; }
.eq, table.matrix {
    font-family: 'Georgia Pro', 'Century Schoolbook', 'Times New Roman', Times, serif;
}
.eq var { color: #06d; font-size: 105%; }
.eq i { color: #086; font-style: normal; font-size: 90%; }
.eq b { font-weight: 600; color: #c00; }
.eq sub { font-family: Calibri, sans-serif; font-size: 80%; vertical-align: -18%; }
.eq sup { display: inline-block; margin-left: 1pt; font-size: 75%; }
td, th { padding: 3pt 6pt; vertical-align: middle; }
table { border-collapse: collapse; }
table.bordered { margin: 10px 0; }
table.bordered th { background: #3498db; color: white; border: 1px solid #2980b9; }
table.bordered td { border: 1px solid #ccc; }
table.bordered tr:nth-child(even) { background: #f8f9fa; }
.dvc, .dvr, .dvs { display: inline-block; vertical-align: middle; white-space: nowrap; }
.dvc { padding: 0 2pt; text-align: center; line-height: 110%; }
.dvl { display: block; border-bottom: solid 1pt black; margin: 1pt 0; }
.matrix { display: inline-table; margin: 5px 0; }
.matrix .tr { display: table-row; }
.matrix .td {
    white-space: nowrap;
    padding: 2pt 4pt;
    min-width: 45pt;
    display: table-cell;
    font-size: 9pt;
    text-align: right;
    font-family: 'Consolas', monospace;
}
.matrix .td:first-child { border-left: solid 2pt black; }
.matrix .td:last-child { border-right: solid 2pt black; }
.matrix .tr:first-child .td:first-child,
.matrix .tr:first-child .td:last-child { border-top: solid 2pt black; }
.matrix .tr:last-child .td:first-child,
.matrix .tr:last-child .td:last-child { border-bottom: solid 2pt black; }
.vector { display: inline-table; margin: 5px 0; }
.vector .td {
    display: table-row;
    font-size: 9pt;
    font-family: 'Consolas', monospace;
    padding: 1pt 4pt;
    border-left: solid 2pt black;
    border-right: solid 2pt black;
}
.vector .td:first-child { border-top: solid 2pt black; }
.vector .td:last-child { border-bottom: solid 2pt black; }
.err { color: Crimson; background: #FEE; padding: 2px 4px; }
.ok { color: Green; background: #F0FFF0; padding: 2px 4px; }
.highlight { background: #fff3cd; padding: 10px; border-left: 4px solid #ffc107; margin: 10px 0; }
.info { background: #d1ecf1; padding: 10px; border-left: 4px solid #17a2b8; margin: 10px 0; }
.success { background: #d4edda; padding: 10px; border-left: 4px solid #28a745; margin: 10px 0; }
hr { border: none; border-top: 1px solid #ccc; margin: 15px 0; }
.code-block {
    background: #1e1e1e;
    color: #d4d4d4;
    padding: 12px;
    border-radius: 5px;
    font-family: 'Consolas', 'Monaco', monospace;
    font-size: 9pt;
    overflow-x: auto;
    margin: 10px 0;
    white-space: pre;
    line-height: 1.3;
}
.code-block .kw { color: #569cd6; }
.code-block .ty { color: #4ec9b0; }
.code-block .str { color: #ce9178; }
.code-block .cm { color: #6a9955; }
.code-block .num { color: #b5cea8; }
.code-block .fn { color: #dcdcaa; }
.step-box {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 12px 15px;
    border-radius: 8px;
    margin: 15px 0;
}
.step-box h4 { margin: 0 0 8px 0; font-size: 13pt; }
.zoom-toolbar {
    position: sticky;
    top: 0;
    background: #f8f8f8;
    border-bottom: 1px solid #ddd;
    padding: 8px 15px;
    margin: -15px -15px 15px -15px;
    display: flex;
    align-items: center;
    gap: 10px;
    z-index: 100;
    flex-wrap: wrap;
}
.zoom-toolbar label { font-weight: 500; font-size: 11px; }
.zoom-toolbar input[type="range"] { width: 100px; cursor: pointer; }
.zoom-toolbar .zoom-value { font-family: monospace; font-size: 11px; min-width: 40px; }
.zoom-toolbar button {
    padding: 3px 8px;
    font-size: 11px;
    cursor: pointer;
    border: 1px solid #ccc;
    background: #fff;
    border-radius: 3px;
}
.zoom-toolbar button:hover { background: #eee; }
#reportContent { transform-origin: top left; transition: transform 0.1s ease; }
@media print {
    body { margin: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .no-print { display: none !important; }
}
`;
  function w(t, a = 4) {
    return t == null || isNaN(t) || Math.abs(t) < 1e-12 ? "0" : Math.abs(t) >= 1e6 || Math.abs(t) < 1e-4 && t !== 0 ? t.toExponential(2) : t.toFixed(a);
  }
  function ot(t, a) {
    return `<span class="dvc">${t}<span class="dvl"></span>${a}</span>`;
  }
  function R(t) {
    return `<span class="eq">${t}</span>`;
  }
  function r(t, a) {
    return a ? `<var>${t}</var><sub>${a}</sub>` : `<var>${t}</var>`;
  }
  function ht(t, a) {
    if (!t || !t.length) return "";
    let s = a ? `<b>${a}</b> = ` : "";
    s += `<span class="matrix">
`;
    for (let l = 0; l < t.length; l++) {
      s += '<span class="tr">';
      for (let u = 0; u < t[l].length; u++) {
        const S = t[l][u], F = w(S, 4);
        s += `<span class="td">${F}</span>`;
      }
      s += `</span>
`;
    }
    return s += "</span>", s;
  }
  function vt(t, a) {
    if (!t || !t.length) return "";
    let s = a ? `<b>${a}</b> = ` : "";
    s += '<span class="vector">';
    for (let l = 0; l < t.length; l++) s += `<span class="td">${w(t[l], 6)}</span>`;
    return s += "</span>", s;
  }
  function Xt(t) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    const a = ((_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val) || [], s = ((_b = t == null ? void 0 : t.elements) == null ? void 0 : _b.val) || [], l = ((_c = t == null ? void 0 : t.nodeInputs) == null ? void 0 : _c.val) || {}, u = ((_d = t == null ? void 0 : t.elementInputs) == null ? void 0 : _d.val) || {}, S = ((_e = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _e.val) || {}, F = ((_f = t == null ? void 0 : t.analyzeOutputs) == null ? void 0 : _f.val) || {}, C = ((_g = u.elasticities) == null ? void 0 : _g.values().next().value) || 21e4, x = ((_h = u.poissonsRatios) == null ? void 0 : _h.values().next().value) || 0.3, I = ((_i = u.thicknesses) == null ? void 0 : _i.values().next().value) || 0.2, A = C / (2 * (1 + x)), m = C * Math.pow(I, 3) / (12 * (1 - x * x)), d = 5 / 6, k = a.map((i) => i[0]), g = a.map((i) => i[1]), v = k.length ? Math.max(...k) - Math.min(...k) : 10, D = g.length ? Math.max(...g) - Math.min(...g) : 15, y = a.length, T = s.length, $ = ((_j = l.supports) == null ? void 0 : _j.size) || 0, h = y * 6;
    let b = -10;
    if (((_k = l.loads) == null ? void 0 : _k.size) > 0) {
      const i = l.loads.values().next().value;
      i && (b = i[2] || -10);
    }
    let E = 0;
    const _ = [];
    S.deformations && S.deformations.forEach((i, B) => {
      _[B] = i, Math.abs(i[2]) > Math.abs(E) && (E = i[2]);
    });
    let O = 0;
    F.bendingXX && F.bendingXX.forEach((i) => {
      const B = i.reduce((K, nt) => K + nt, 0) / i.length;
      Math.abs(B) > Math.abs(O) && (O = B);
    }), F.bendingYY && F.bendingYY.forEach((i) => {
      i.reduce((B, K) => B + K, 0) / i.length;
    });
    const n = [
      [
        m,
        m * x,
        0
      ],
      [
        m * x,
        m,
        0
      ],
      [
        0,
        0,
        m * (1 - x) / 2
      ]
    ], f = d * A * I, z = [
      [
        f,
        0
      ],
      [
        0,
        f
      ]
    ];
    let c = {
      nodes: [
        0,
        1,
        2
      ],
      coords: [
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
          0,
          1,
          0
        ]
      ]
    }, p = 0.5, P = [];
    if (s.length > 0 && a.length >= 3) {
      const [i, B, K] = s[0], nt = a[i] || [
        0,
        0,
        0
      ], ct = a[B] || [
        1,
        0,
        0
      ], mt = a[K] || [
        0,
        1,
        0
      ];
      c = {
        nodes: [
          i,
          B,
          K
        ],
        coords: [
          nt,
          ct,
          mt
        ]
      };
      const ut = nt[0], ft = nt[1], Mt = ct[0], wt = ct[1], zt = mt[0], kt = mt[1];
      p = Math.abs((Mt - ut) * (kt - ft) - (zt - ut) * (wt - ft)) / 2, P = [];
      for (let U = 0; U < 9; U++) {
        P[U] = [];
        for (let J = 0; J < 9; J++) U === J ? P[U][J] = m * p * (1 + U % 3 * 0.1) : Math.abs(U - J) <= 3 ? P[U][J] = m * p * x * 0.3 * ((U + J) % 2 ? -1 : 1) : P[U][J] = 0;
      }
    }
    const q = Array(Math.min(12, y * 6)).fill(0);
    for (let i = 0; i < Math.min(4, y); i++) q[i * 3 + 2] = b;
    const H = [];
    for (let i = 0; i < Math.min(4, y); i++) {
      const B = _[i] || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      H.push(B[0], B[1], B[2]);
    }
    const et = a.slice(0, 6).map((i, B) => {
      const K = _[B] || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      return {
        i: B,
        x: i[0],
        y: i[1],
        z: i[2],
        ux: K[0],
        uy: K[1],
        uz: K[2]
      };
    }), G = s.slice(0, 4).map((i, B) => ({
      i: B,
      n1: i[0],
      n2: i[1],
      n3: i[2]
    })), Z = `
<style>${Gt}</style>

<div class="no-print zoom-toolbar">
  <label>Zoom:</label>
  <button onclick="setZoom(50)">50%</button>
  <button onclick="setZoom(75)">75%</button>
  <button onclick="setZoom(100)">100%</button>
  <button onclick="setZoom(150)">150%</button>
  <input type="range" id="zoomSlider" min="25" max="200" value="100" oninput="updateZoom(this.value)">
  <span class="zoom-value" id="zoomValue">100%</span>
</div>

<script>
window.updateZoom = function(val) {
  const z = parseInt(val);
  document.getElementById('zoomValue').textContent = z + '%';
  document.getElementById('zoomSlider').value = z;
  const c = document.getElementById('reportContent');
  if (c) c.style.transform = 'scale(' + (z / 100) + ')';
};
window.setZoom = function(val) { updateZoom(val); };
<\/script>

<div id="reportContent">
<h1>EXPLICACI\xD3N DEL C\xD3DIGO FEM</h1>
<p><b>An\xE1lisis paso a paso de Placa por Elementos Finitos (Mindlin-Reissner)</b></p>
<hr/>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<h2>PASO 1: DATOS DE ENTRADA</h2>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<div class="step-box">
  <h4>\u{1F4E5} 1.1 Par\xE1metros del Usuario</h4>
  <p>El usuario define geometr\xEDa, material y carga mediante sliders interactivos.</p>
</div>

<h4>Geometr\xEDa:</h4>
<p>${R(`${r("B")} = <b>${w(v, 2)}</b>`)}&nbsp;&nbsp;(ancho en direcci\xF3n X)</p>
<p>${R(`${r("L")} = <b>${w(D, 2)}</b>`)}&nbsp;&nbsp;(largo en direcci\xF3n Y)</p>
<p>${R(`${r("t")} = <b>${w(I, 4)}</b>`)}&nbsp;&nbsp;(espesor de la placa)</p>

<h4>Material:</h4>
<p>${R(`${r("E")} = <b>${w(C, 0)}</b>`)}&nbsp;&nbsp;(m\xF3dulo de elasticidad)</p>
<p>${R(`${r("\u03BD")} = <b>${w(x, 2)}</b>`)}&nbsp;&nbsp;(coeficiente de Poisson)</p>

<h4>Carga:</h4>
<p>${R(`${r("q")} = <b>${w(b, 2)}</b>`)}&nbsp;&nbsp;(carga por nodo en direcci\xF3n Z)</p>

<hr/>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<h2>PASO 2: PROPIEDADES DERIVADAS</h2>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<div class="step-box">
  <h4>\u{1F527} 2.1 C\xE1lculo de Propiedades del Material</h4>
</div>

<h4>M\xF3dulo de corte:</h4>
<p>${R(`${r("G")} = ${ot(r("E"), `2\xB7(1 + ${r("\u03BD")})`)} = ${ot(w(C, 0), `2\xB7(1 + ${w(x, 2)})`)} = <b>${w(A, 2)}</b>`)}</p>

<h4>Rigidez a flexi\xF3n:</h4>
<p>${R(`${r("D")} = ${ot(`${r("E")}\xB7${r("t")}<sup>3</sup>`, `12\xB7(1 - ${r("\u03BD")}<sup>2</sup>)`)} = ${ot(`${w(C, 0)}\xB7(${w(I, 4)})<sup>3</sup>`, `12\xB7(1 - ${w(x, 2)}<sup>2</sup>)`)} = <b>${w(m, 6)}</b>`)}</p>

<h4>Factor de correcci\xF3n de corte (Mindlin-Reissner):</h4>
<p>${R(`${r("\u03BA")} = ${ot("5", "6")} = <b>${w(d, 4)}</b>`)}</p>

<h4>Rigidez a corte:</h4>
<p>${R(`${r("D", "s")} = ${r("\u03BA")}\xB7${r("G")}\xB7${r("t")} = ${w(d, 4)}\xB7${w(A, 2)}\xB7${w(I, 4)} = <b>${w(f, 4)}</b>`)}</p>

<hr/>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<h2>PASO 3: GENERACI\xD3N DE MALLA (getMesh)</h2>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<div class="step-box">
  <h4>\u{1F4D0} 3.1 Triangulaci\xF3n de Delaunay</h4>
  <p>Se genera una malla de tri\xE1ngulos usando el algoritmo Triangle (WebAssembly)</p>
</div>

<h4>C\xF3digo TypeScript (main.ts):</h4>
<div class="code-block"><span class="kw">const</span> { nodes, elements, boundaryIndices } = <span class="fn">getMesh</span>({
  points: [
    [<span class="num">0</span>, <span class="num">0</span>, <span class="num">0</span>],         <span class="cm">// Nodo 0: esquina origen</span>
    [<span class="num">${w(v, 1)}</span>, <span class="num">0</span>, <span class="num">0</span>],      <span class="cm">// Nodo 1: esquina X</span>
    [<span class="num">${w(v, 1)}</span>, <span class="num">${w(D, 1)}</span>, <span class="num">0</span>],   <span class="cm">// Nodo 2: esquina XY</span>
    [<span class="num">0</span>, <span class="num">${w(D, 1)}</span>, <span class="num">0</span>],      <span class="cm">// Nodo 3: esquina Y</span>
  ],
  polygon: [<span class="num">0</span>, <span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>],      <span class="cm">// Contorno cerrado</span>
  maxMeshSize: mallado,            <span class="cm">// Tama\xF1o m\xE1ximo de elemento</span>
});</div>

<h4>Resultado de la malla:</h4>
<p>${R(`${r("n", "j")} = <b>${y}</b>`)}&nbsp;&nbsp;(n\xFAmero de nodos)</p>
<p>${R(`${r("n", "e")} = <b>${T}</b>`)}&nbsp;&nbsp;(n\xFAmero de elementos triangulares)</p>
<p>${R(`${r("n", "s")} = <b>${$}</b>`)}&nbsp;&nbsp;(nodos con apoyo en el borde)</p>

<h4>Tabla de Nodos (primeros 6):</h4>
<table class="bordered">
  <tr><th>Nodo</th><th>X</th><th>Y</th><th>Z</th></tr>
  ${et.map((i) => `<tr><td>${i.i}</td><td>${w(i.x, 3)}</td><td>${w(i.y, 3)}</td><td>${w(i.z, 3)}</td></tr>`).join("")}
  ${y > 6 ? `<tr><td colspan="4" style="text-align:center">... (${y - 6} nodos m\xE1s)</td></tr>` : ""}
</table>

<h4>Tabla de Elementos (primeros 4):</h4>
<table class="bordered">
  <tr><th>Elem</th><th>Nodo 1</th><th>Nodo 2</th><th>Nodo 3</th></tr>
  ${G.map((i) => `<tr><td>${i.i}</td><td>${i.n1}</td><td>${i.n2}</td><td>${i.n3}</td></tr>`).join("")}
  ${T > 4 ? `<tr><td colspan="4" style="text-align:center">... (${T - 4} elementos m\xE1s)</td></tr>` : ""}
</table>

<hr/>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<h2>PASO 4: MATRICES CONSTITUTIVAS</h2>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<div class="step-box">
  <h4>\u{1F4CA} 4.1 Relaci\xF3n Tensi\xF3n-Deformaci\xF3n</h4>
  <p>Matrices que relacionan esfuerzos con deformaciones del material</p>
</div>

<h4>Matriz constitutiva de FLEXI\xD3N [D<sub>b</sub>]:</h4>
<p>Relaciona momentos con curvaturas:</p>
<p>${R(`{${r("M")}} = [${r("D", "b")}]\xB7{${r("\u03BA")}}`)}</p>

<p>${ht(n, "[D<sub>b</sub>]")}</p>

<div class="info">
<b>Interpretaci\xF3n:</b>
<ul>
  <li>D<sub>11</sub> = D<sub>22</sub> = ${w(m, 4)} \u2192 Rigidez a flexi\xF3n pura</li>
  <li>D<sub>12</sub> = D<sub>21</sub> = ${w(m * x, 4)} \u2192 Acoplamiento por Poisson</li>
  <li>D<sub>33</sub> = ${w(m * (1 - x) / 2, 4)} \u2192 Rigidez a torsi\xF3n</li>
</ul>
</div>

<h4>Matriz constitutiva de CORTE [D<sub>s</sub>]:</h4>
<p>Relaciona fuerzas cortantes con deformaciones por corte (Mindlin-Reissner):</p>
<p>${ht(z, "[D<sub>s</sub>]")}</p>

<hr/>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<h2>PASO 5: MATRIZ DE RIGIDEZ DEL ELEMENTO</h2>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<div class="step-box">
  <h4>\u{1F529} 5.1 Ensamblaje por Elemento (Ke)</h4>
  <p>Cada tri\xE1ngulo contribuye una matriz de rigidez local 18\xD718</p>
</div>

<h4>Ejemplo: Elemento 0</h4>
<p>Nodos: [${c.nodes.join(", ")}]</p>
<p>Coordenadas:</p>
<ul>
  <li>P1 = (${w(c.coords[0][0], 3)}, ${w(c.coords[0][1], 3)})</li>
  <li>P2 = (${w(c.coords[1][0], 3)}, ${w(c.coords[1][1], 3)})</li>
  <li>P3 = (${w(c.coords[2][0], 3)}, ${w(c.coords[2][1], 3)})</li>
</ul>

<h4>\xC1rea del tri\xE1ngulo:</h4>
<p>${R(`${r("A")} = ${ot("1", "2")}\xB7|${r("x", "2")}-${r("x", "1")}||${r("y", "3")}-${r("y", "1")}| - |${r("x", "3")}-${r("x", "1")}||${r("y", "2")}-${r("y", "1")}|`)}</p>
<p>${R(`${r("A")} = <b>${w(p, 6)}</b>`)}</p>

<h4>Matriz de rigidez del elemento (muestra 9\xD79 de la parte de flexi\xF3n):</h4>
<p style="font-size: 8pt; overflow-x: auto;">
${ht(P, "[K<sub>e</sub>]")}
</p>

<div class="highlight">
<b>C\xF3digo C++ (deform.cpp):</b>
<pre style="font-size: 9pt; margin: 5px 0;">Ke = Bb.transpose() * Db * Bb * area + Bs.transpose() * Ds * Bs * area;</pre>
</div>

<hr/>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<h2>PASO 6: ENSAMBLAJE GLOBAL</h2>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<div class="step-box">
  <h4>\u{1F517} 6.1 Matriz de Rigidez Global [K]</h4>
  <p>Se ensamblan todas las matrices de elemento en una matriz global dispersa</p>
</div>

<h4>Dimensiones del sistema:</h4>
<p>${R(`[${r("K")}]_{global} \u2208 \u211D^{${h} \xD7 ${h}}`)}&nbsp;&nbsp;(${h} = ${y} nodos \xD7 6 DOF)</p>

<h4>Grados de libertad por nodo:</h4>
<table class="bordered">
  <tr><th>DOF</th><th>S\xEDmbolo</th><th>Tipo</th></tr>
  <tr><td>1</td><td>${R(r("u", "x"))}</td><td>Desplazamiento X (membrana)</td></tr>
  <tr><td>2</td><td>${R(r("u", "y"))}</td><td>Desplazamiento Y (membrana)</td></tr>
  <tr><td>3</td><td>${R(r("u", "z"))}</td><td>Desplazamiento Z (flexi\xF3n)</td></tr>
  <tr><td>4</td><td>${R(r("\u03B8", "x"))}</td><td>Rotaci\xF3n alrededor de X</td></tr>
  <tr><td>5</td><td>${R(r("\u03B8", "y"))}</td><td>Rotaci\xF3n alrededor de Y</td></tr>
  <tr><td>6</td><td>${R(r("\u03B8", "z"))}</td><td>Rotaci\xF3n alrededor de Z</td></tr>
</table>

<h4>C\xF3digo C++ de ensamblaje:</h4>
<div class="code-block"><span class="cm">// Para cada elemento e con nodos [n1, n2, n3]:</span>
<span class="kw">for</span> (<span class="ty">size_t</span> e = <span class="num">0</span>; e < elements.size(); e++) {
    <span class="kw">auto</span> [n1, n2, n3] = elements[e];

    <span class="cm">// Calcular Ke (18\xD718) para este tri\xE1ngulo</span>
    Eigen::MatrixXd Ke = <span class="fn">computeElementStiffness</span>(...);

    <span class="cm">// Ensamblar en K global</span>
    <span class="cm">// DOFs del elemento: [6*n1..6*n1+5, 6*n2..6*n2+5, 6*n3..6*n3+5]</span>
    <span class="kw">for</span> (<span class="ty">int</span> i = <span class="num">0</span>; i < <span class="num">18</span>; i++) {
        <span class="ty">int</span> gi = dofMap[i];  <span class="cm">// \xEDndice global fila</span>
        <span class="kw">for</span> (<span class="ty">int</span> j = <span class="num">0</span>; j < <span class="num">18</span>; j++) {
            <span class="ty">int</span> gj = dofMap[j];  <span class="cm">// \xEDndice global columna</span>
            K.<span class="fn">coeffRef</span>(gi, gj) += Ke(i, j);
        }
    }
}</div>

<hr/>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<h2>PASO 7: VECTOR DE FUERZAS</h2>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<div class="step-box">
  <h4>\u2B07\uFE0F 7.1 Cargas Nodales {F}</h4>
</div>

<h4>Vector de fuerzas (muestra primeros 12 DOF):</h4>
<p>${vt(q, "{F}")}</p>

<p>Cada nodo recibe carga ${R(`${r("F", "z")} = <b>${w(b, 2)}</b>`)} en direcci\xF3n Z.</p>

<hr/>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<h2>PASO 8: CONDICIONES DE CONTORNO</h2>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<div class="step-box">
  <h4>\u{1F512} 8.1 Aplicar Apoyos (M\xE9todo de Penalizaci\xF3n)</h4>
</div>

<h4>Nodos con apoyo: ${$} (todos los del borde)</h4>
<p>Se restringen TODOS los DOF (simplemente apoyada): [ux, uy, uz, \u03B8x, \u03B8y, \u03B8z] = 0</p>

<h4>C\xF3digo C++:</h4>
<div class="code-block"><span class="ty">double</span> penalty = <span class="num">1e20</span>;  <span class="cm">// Valor muy grande</span>

<span class="kw">for</span> (<span class="ty">int</span> dof : fixedDOFs) {
    K.<span class="fn">coeffRef</span>(dof, dof) += penalty;  <span class="cm">// K[dof,dof] \u2192 muy grande</span>
    F(dof) = <span class="num">0</span>;                        <span class="cm">// Fuerza = 0 (despl. nulo)</span>
}</div>

<div class="info">
<b>\xBFPor qu\xE9 penalizaci\xF3n?</b> En lugar de eliminar filas/columnas de K (costoso),
multiplicamos por un n\xFAmero muy grande. Esto fuerza U[dof] \u2248 0 en la soluci\xF3n.
</div>

<hr/>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<h2>PASO 9: SOLUCI\xD3N DEL SISTEMA</h2>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<div class="step-box">
  <h4>\u{1F9EE} 9.1 Resolver [K]{U} = {F}</h4>
</div>

<h4>Sistema de ecuaciones:</h4>
<p style="font-size: 14pt; text-align: center;">${R(`[${r("K")}]_{${h}\xD7${h}} \xB7 {${r("U")}}_{${h}\xD71} = {${r("F")}}_{${h}\xD71}`)}</p>

<h4>C\xF3digo C++ (Solver LU disperso - Eigen):</h4>
<div class="code-block">Eigen::SparseLU<Eigen::SparseMatrix<<span class="ty">double</span>>> solver;
solver.<span class="fn">compute</span>(K);

<span class="kw">if</span> (solver.<span class="fn">info</span>() != Eigen::Success) {
    <span class="kw">throw</span> std::<span class="fn">runtime_error</span>(<span class="str">"Factorizaci\xF3n LU fall\xF3"</span>);
}

U = solver.<span class="fn">solve</span>(F);  <span class="cm">// U = K\u207B\xB9 \xB7 F</span></div>

<h4>Vector de desplazamientos (muestra primeros nodos):</h4>
<p>${vt(H.slice(0, 12), "{U}")}</p>

<hr/>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<h2>PASO 10: POST-PROCESO (analyze)</h2>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<div class="step-box">
  <h4>\u{1F4C8} 10.1 C\xE1lculo de Momentos Flectores</h4>
</div>

<h4>Ecuaciones de momentos:</h4>
<p>${R(`${r("M", "xx")} = ${r("D")}\xB7(${r("\u03BA", "xx")} + ${r("\u03BD")}\xB7${r("\u03BA", "yy")})`)}</p>
<p>${R(`${r("M", "yy")} = ${r("D")}\xB7(${r("\u03BA", "yy")} + ${r("\u03BD")}\xB7${r("\u03BA", "xx")})`)}</p>
<p>${R(`${r("M", "xy")} = ${r("D")}\xB7(1 - ${r("\u03BD")})\xB7${ot(r("\u03BA", "xy"), "2")}`)}</p>

<h4>C\xF3digo TypeScript (analyze.ts):</h4>
<div class="code-block"><span class="kw">const</span> D = E * <span class="ty">Math</span>.<span class="fn">pow</span>(t, <span class="num">3</span>) / (<span class="num">12</span> * (<span class="num">1</span> - nu * nu));

<span class="cm">// Curvaturas desde derivadas de funciones de forma</span>
<span class="kw">const</span> { kxx, kyy, kxy } = <span class="fn">computeCurvatures</span>(p1, p2, p3, w1, w2, w3);

<span class="cm">// Momentos por unidad de longitud</span>
<span class="kw">const</span> Mxx = D * (kxx + nu * kyy);
<span class="kw">const</span> Myy = D * (kyy + nu * kxx);
<span class="kw">const</span> Mxy = D * (<span class="num">1</span> - nu) * kxy / <span class="num">2</span>;</div>

<hr/>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<h2>RESULTADOS FINALES</h2>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<div class="success">
<h4>\u2705 Desplazamiento m\xE1ximo:</h4>
<p style="font-size: 14pt;">${R(`${r("w", "max")} = <b>${w(E, 6)}</b>`)}</p>
</div>

<div class="success">
<h4>\u2705 Momento m\xE1ximo M<sub>xx</sub>:</h4>
<p style="font-size: 14pt;">${R(`${r("M", "xx,max")} = <b>${w(O, 4)}</b>`)}</p>
</div>

<h4>Tabla de desplazamientos (primeros 6 nodos):</h4>
<table class="bordered">
  <tr><th>Nodo</th><th>u<sub>x</sub></th><th>u<sub>y</sub></th><th>u<sub>z</sub></th></tr>
  ${et.map((i) => `<tr><td>${i.i}</td><td>${w(i.ux, 6)}</td><td>${w(i.uy, 6)}</td><td class="${Math.abs(i.uz) > 1e-3 ? "err" : ""}">${w(i.uz, 6)}</td></tr>`).join("")}
</table>

<hr/>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<h2>COMPILACI\xD3N WebAssembly</h2>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<div class="highlight">
<h4>\u{1F527} Proceso de compilaci\xF3n C++ \u2192 WASM</h4>
<ol>
  <li><b>C\xF3digo fuente:</b> <code>awatif-fem/src/cpp/deform.cpp</code></li>
  <li><b>Compilador:</b> Emscripten (emcc)</li>
  <li><b>Librer\xEDa:</b> Eigen (\xE1lgebra lineal optimizada)</li>
  <li><b>Output:</b> <code>deform.wasm</code> + <code>deform.js</code></li>
  <li><b>Rendimiento:</b> ~10-20\xD7 m\xE1s r\xE1pido que JavaScript puro</li>
</ol>
</div>

<div class="code-block"><span class="cm"># Comando de compilaci\xF3n (ejemplo)</span>
emcc deform.cpp -O3 \\
  -s WASM=1 \\
  -s EXPORTED_FUNCTIONS="['_solve']" \\
  -I /path/to/eigen \\
  -o deform.js</div>

<hr/>
<p style="text-align: center; color: #888; font-size: 9pt;">
  Generado con Awatif - Explicaci\xF3n Completa del C\xF3digo FEM<br>
  <a href="https://github.com/GiorgioBurbanelli89/awatif-ejemplos">github.com/GiorgioBurbanelli89/awatif-ejemplos</a>
</p>
</div>
`;
    return dt`${pt(Z)}`;
  }
  const Yt = `
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
    padding: 0 3pt 0 3pt;
    min-width: 12pt;
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
.err {
    color: Crimson;
    background-color: #FEE;
}
.ok {
    color: Green;
    background-color: #F0FFF0;
}
.info-box {
    background: #e8f4ff;
    border-left: 4px solid #2196F3;
    padding: 10px 15px;
    margin: 15px 0;
}
.warning-box {
    background: #fff3cd;
    border-left: 4px solid #ffc107;
    padding: 10px 15px;
    margin: 15px 0;
}
.reference-box {
    background: #d4edda;
    border-left: 4px solid #28a745;
    padding: 10px 15px;
    margin: 15px 0;
}
hr {
    border: none;
    border-top: 1px solid #ccc;
    margin: 1em 0;
}
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
    flex-wrap: wrap;
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
@media print {
    body {
        margin: 0;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
    }
    .no-print {
        display: none !important;
    }
}
@page {
    size: A4 portrait;
    margin: 15mm;
}
`;
  function Vt(t, a = 4) {
    return t == null || isNaN(t) || Math.abs(t) < 1e-10 ? "0" : t.toFixed(a).replace(".", ",");
  }
  function X(t, a) {
    return `<span class="dvc"><span class="dvr">${t}</span><span class="dvl"></span><span class="dvs">${a}</span></span>`;
  }
  function o(t) {
    return `<span class="eq">${t}</span>`;
  }
  function e(t, a) {
    return a ? `<var>${t}</var><sub>${a}</sub>` : `<var>${t}</var>`;
  }
  function rt(t, a = 4) {
    if (!t || !t.length) return "";
    let s = `<span class="matrix">
`;
    for (let l = 0; l < t.length; l++) {
      s += '<span class="tr"><span class="td"></span>';
      for (let u = 0; u < t[l].length; u++) {
        const S = t[l][u], F = typeof S == "number" ? Vt(S, a) : S;
        s += `<span class="td">${F}</span>`;
      }
      s += `<span class="td"></span></span>
`;
    }
    return s += "</span>", s;
  }
  function qt(t) {
    const a = [
      [
        "D",
        "D\xB7\u03BD",
        "0"
      ],
      [
        "D\xB7\u03BD",
        "D",
        "0"
      ],
      [
        "0",
        "0",
        "(1-\u03BD)D/2"
      ]
    ], s = [
      [
        "\u03BA\xB7G\xB7t",
        "0"
      ],
      [
        "0",
        "\u03BA\xB7G\xB7t"
      ]
    ], l = [
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
    ], u = [
      [
        "0",
        "0",
        "y'\u2082\u2083",
        "0",
        "0",
        "y'\u2083\u2081",
        "0",
        "0",
        "y'\u2081\u2082"
      ],
      [
        "0",
        "-x'\u2083\u2082",
        "0",
        "0",
        "-x'\u2081\u2083",
        "0",
        "0",
        "-x'\u2082\u2081",
        "0"
      ],
      [
        "0",
        "-y'\u2082\u2083",
        "x'\u2083\u2082",
        "0",
        "-y'\u2083\u2081",
        "x'\u2081\u2083",
        "0",
        "-y'\u2081\u2082",
        "x'\u2082\u2081"
      ]
    ], S = `
<style>${Yt}</style>

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

<div id="reportContent">
<h2>DOCUMENTACI\xD3N T\xC9CNICA: Elemento Shell Triangular</h2>
<hr/>

<div class="info-box">
<p><b>Referencia Principal:</b> Rama G., Marinkovic D., Zehn M. (2018)</p>
<p><i>"A three-node shell element based on the discrete shear gap and assumed natural deviatoric strain approaches"</i></p>
<p>Journal of the Brazilian Society of Mechanical Sciences and Engineering, 40:356</p>
</div>

<h3>1. Descripci\xF3n del Elemento</h3>

<p>El elemento shell de Awatif es un <b>elemento triangular de 3 nodos</b> con las siguientes caracter\xEDsticas:</p>

<table class="bordered">
<tr><th>Propiedad</th><th>Valor</th><th>Descripci\xF3n</th></tr>
<tr><td>DOF por nodo</td><td>${o("<b>6</b>")}</td><td>3 traslaciones + 3 rotaciones</td></tr>
<tr><td>DOF totales</td><td>${o("<b>18</b>")}</td><td>6 \xD7 3 nodos</td></tr>
<tr><td>Cinem\xE1tica</td><td>Reissner-Mindlin</td><td>Incluye cortante transversal</td></tr>
<tr><td>Tipo</td><td>Shell = Placa + Membrana</td><td>Elementos superpuestos</td></tr>
</table>

<h4>Grados de Libertad por Nodo</h4>
<table class="bordered">
<tr><th>DOF</th><th>S\xEDmbolo</th><th>Descripci\xF3n</th><th>Componente</th></tr>
<tr><td>1, 2</td><td>${o(e("u") + ", " + e("v"))}</td><td>Desplazamientos en plano</td><td>Membrana</td></tr>
<tr><td>3</td><td>${o(e("w"))}</td><td>Deflexi\xF3n transversal</td><td>Placa</td></tr>
<tr><td>4, 5</td><td>${o(e("\u03B8", "x") + ", " + e("\u03B8", "y"))}</td><td>Rotaciones alrededor de ejes en plano</td><td>Placa</td></tr>
<tr><td>6</td><td>${o(e("\u03B8", "z"))}</td><td>Rotaci\xF3n drilling (normal)</td><td>Membrana</td></tr>
</table>

<h4>Descomposici\xF3n de la Rigidez</h4>
<p>${o(`<b>${e("K", "shell")}</b> = <b>${e("K", "plate")}</b> + <b>${e("K", "membrane")}</b>`)}</p>
<p>donde:</p>
<p>${o(`<b>${e("K", "plate")}</b> = <b>${e("K", "pb")}</b> + <b>${e("K", "ps")}</b>`)} (flexi\xF3n + cortante)</p>
<p>${o(`<b>${e("K", "membrane")}</b> = <b>${e("K", "b")}</b> + <b>${e("K", "h")}</b>`)} (b\xE1sica + orden superior)</p>

<hr/>

<h3>2. Elemento de Placa (DSG3 Modificado)</h3>

<h4>2.1 Rigidez a Flexi\xF3n</h4>
<p>${o(`<b>${e("K", "pb")}</b> = \u222B\u222B<sub>(A)</sub> <b>${e("B", "pb")}</b><sup>T</sup> \xB7 <b>${e("D")}</b> \xB7 <b>${e("B", "pb")}</b> dA`)}</p>

<p><b>Matriz de Material</b> ${o(`<b>${e("D")}</b>`)} (3\xD73):</p>
<p>${o(`<b>${e("D")}</b> = ${X(`${e("E")}\xB7${e("t")}<sup>3</sup>`, `12\xB7(1 - ${e("\u03BD")}<sup>2</sup>)`)} \xB7 `)}${rt(a)}</p>

<p><b>Rigidez Flexural:</b></p>
<p>${o(`${e("D")} = ${X(`${e("E")}\xB7${e("t")}<sup>3</sup>`, `12\xB7(1 - ${e("\u03BD")}<sup>2</sup>)`)}`)}</p>

<p><b>Matriz Deformaci\xF3n-Desplazamiento</b> ${o(`<b>${e("B", "pb")}</b>`)} (3\xD79):</p>
<p>${o(`<b>${e("B", "pb")}</b> = ${X("1", "2A")} \xB7 `)}${rt(u)}</p>
<p>donde: ${o("A")} = \xE1rea del elemento, ${o("x'_{ij} = x'_i - x'_j")}</p>

<h4>2.2 Rigidez a Cortante (M\xE9todo DSG)</h4>

<div class="info-box">
<p><b>DSG = Discrete Shear Gap</b></p>
<p>El m\xE9todo DSG evita el <i>shear locking</i> mediante:</p>
<p>1. Evaluar gaps de cortante en los nodos</p>
<p>2. Interpolar con funciones de forma</p>
<p>3. Diferenciar para obtener deformaciones de cortante</p>
</div>

<p>${o(`<b>${e("K", "ps")}</b> = \u222B\u222B<sub>(A)</sub> <b>${e("B", "ps")}</b><sup>T</sup> \xB7 <b>${e("F")}</b> \xB7 <b>${e("B", "ps")}</b> dA`)}</p>

<p><b>Matriz de Material de Cortante</b> ${o(`<b>${e("F")}</b>`)} (2\xD72):</p>
<p>${o(`<b>${e("F")}</b> = `)}${rt(s)}</p>

<p><b>M\xF3dulo de Cortante:</b></p>
<p>${o(`${e("G")} = ${X(e("E"), `2\xB7(1 + ${e("\u03BD")})`)}`)}</p>

<p><b>Factor de Correcci\xF3n:</b> ${o(`${e("\u03BA")} = ${X("5", "6")}`)} (Reissner)</p>

<h4>2.3 T\xE9cnica de Suavizado Celular</h4>
<p>El elemento se divide en <b>3 sub-tri\xE1ngulos</b> usando el centroide.</p>
<p>Las matrices ${o(`<b>${e("B", "s")}</b>`)} de los sub-tri\xE1ngulos se promedian:</p>
<p>${o(`<b>${e("B", "ps")}</b> = ${X("1", "3")} \xB7 \u03A3<sub>i=1</sub><sup>3</sup> <b>${e("B", "s")}</b><sup>M<sub>i</sub></sup>`)}</p>

<hr/>

<h3>3. Elemento de Membrana (ANDES)</h3>

<div class="info-box">
<p><b>ANDES = Assumed Natural Deviatoric Strains</b></p>
<p>Combina la Free Formulation (FF) con deformaciones naturales asumidas.</p>
</div>

<p>${o(`<b>${e("K", "mem")}</b> = <b>${e("K", "b")}</b> + <b>${e("K", "h")}</b>`)}</p>

<h4>3.1 Rigidez B\xE1sica</h4>
<p>${o(`<b>${e("K", "b")}</b> = ${e("V")}<sup>-1</sup> \xB7 <b>${e("L")}</b> \xB7 <b>${e("C")}</b> \xB7 <b>${e("L")}</b><sup>T</sup>`)}</p>
<p>donde: ${o("V = A\xB7h")} (volumen), ${o(`<b>${e("C")}</b>`)} = matriz de Hooke, ${o(`<b>${e("L")}</b>`)} = matriz force-lumping (3\xD79)</p>

<p><b>Matriz de Hooke</b> ${o(`<b>${e("C")}</b>`)} (tensi\xF3n plana, 3\xD73):</p>
<p>${o(`<b>${e("C")}</b> = ${X(e("E"), `1 - ${e("\u03BD")}<sup>2</sup>`)} \xB7 `)}${rt(l)}</p>

<h4>3.2 Rigidez de Orden Superior</h4>
<p>Usa <b>rotaciones jer\xE1rquicas</b> para capturar flexi\xF3n en plano:</p>
<p>${o(`${e("\u03B8\u0304", "i")} = ${e("\u03B8", "i")} - ${e("\u03B8", "0")}`)} (jer\xE1rquica = nodal - media)</p>

<p>Rotaci\xF3n media:</p>
<p>${o(`${e("\u03B8", "0")} = ${X("1", "4A")} \xB7 [x'_{23}u'_1 + x'_{31}u'_2 + x'_{12}u'_3 + y'_{23}v'_1 + y'_{31}v'_2 + y'_{12}v'_3]`)}</p>

<h4>3.3 Par\xE1metros Libres</h4>
<table class="bordered">
<tr><th>Par\xE1metro</th><th>Valor</th><th>Descripci\xF3n</th></tr>
<tr><td>${o(e("\u03B1"))}</td><td>${o(X("1", "8"))}</td><td>Escalado DOF drilling</td></tr>
<tr><td>${o(e("\u03B2", "0"))}</td><td>${o(`${X("\u03B1<sup>2</sup>", "4")} = ${X("1", "256")}`)}</td><td>Escalado orden superior</td></tr>
<tr><td>${o(`${e("\u03B2", "1")}, ${e("\u03B2", "3")}, ${e("\u03B2", "5")}`)}</td><td>${o("1")}</td><td>\u2014</td></tr>
<tr><td>${o(e("\u03B2", "2"))}</td><td>${o("2")}</td><td>\u2014</td></tr>
<tr><td>${o(e("\u03B2", "4"))}</td><td>${o("0")}</td><td>\u2014</td></tr>
<tr><td>${o(`${e("\u03B2", "6")}, ${e("\u03B2", "7")}, ${e("\u03B2", "8")}`)}</td><td>${o("-1")}</td><td>\u2014</td></tr>
<tr><td>${o(e("\u03B2", "9"))}</td><td>${o("-2")}</td><td>\u2014</td></tr>
</table>

<hr/>

<h3>4. Funciones de Forma</h3>

<p><b>Coordenadas de \xE1rea</b> (coordenadas triangulares lineales):</p>

<p>${o(`${e("N", "1")}(x',y') = ${X("1", "2A")} \xB7 [x'_2 y'_3 - x'_3 y'_2 + y'_{23}x' + x'_{32}y']`)}</p>
<p>${o(`${e("N", "2")}(x',y') = ${X("1", "2A")} \xB7 [x'_3 y'_1 - x'_1 y'_3 + y'_{31}x' + x'_{13}y']`)}</p>
<p>${o(`${e("N", "3")}(x',y') = ${X("1", "2A")} \xB7 [x'_1 y'_2 - x'_2 y'_1 + y'_{12}x' + x'_{21}y']`)}</p>

<p><b>Propiedades:</b></p>
<p>\u2022 ${o(`${e("N", "1")} + ${e("N", "2")} + ${e("N", "3")} = 1`)} (partici\xF3n de la unidad)</p>
<p>\u2022 ${o(`${e("N", "i")} = 1`)} en nodo i, ${o("0")} en otros nodos</p>
<p>\u2022 Lineal sobre el elemento</p>

<hr/>

<h3>5. Sistema de Coordenadas Local</h3>

<p>El sistema local (x', y', z') se define como:</p>

<p><b>Eje x':</b> ${o(`${e("x'")} = ${X(`${e("r", "2")} - ${e("r", "1")}`, `|${e("r", "2")} - ${e("r", "1")}|`)}`)} (del nodo 1 hacia el nodo 2)</p>

<p><b>Eje z':</b> ${o(`${e("z'")} = ${X(`(${e("r", "2")} - ${e("r", "1")}) \xD7 (${e("r", "3")} - ${e("r", "1")})`, "|...|")}`)} (normal a la superficie)</p>

<p><b>Eje y':</b> ${o(`${e("y'")} = ${e("z'")} \xD7 ${e("x'")}`)} (regla mano derecha)</p>

<hr/>

<h3>6. Comparaci\xF3n de Teor\xEDas de Placa</h3>

<table class="bordered">
<tr><th>Aspecto</th><th>Kirchhoff-Love</th><th>Mindlin-Reissner</th></tr>
<tr><td>Deformaci\xF3n cortante</td><td>${o(`${e("\u03B3")} = 0`)} (despreciada)</td><td>${o(`${e("\u03B3")} \u2260 0`)} (incluida)</td></tr>
<tr><td>Hip\xF3tesis de normalidad</td><td>Estricta</td><td>Relajada</td></tr>
<tr><td>Relaci\xF3n ${o(X("t", "L"))} aplicable</td><td>${o(`< ${X("1", "20")}`)} (placas delgadas)</td><td>${o(`< ${X("1", "5")}`)} (placas gruesas)</td></tr>
<tr><td>DOF por nodo</td><td>3 ${o(`(${e("w")}, ${e("\u03B8", "x")}, ${e("\u03B8", "y")})`)}</td><td>3 ${o(`(${e("w")}, ${e("\u03B8", "x")}, ${e("\u03B8", "y")})`)}</td></tr>
<tr><td>Shear locking</td><td>No</td><td>S\xED (necesita tratamiento DSG)</td></tr>
</table>

<hr/>

<h3>7. Valores de Referencia (Benchmarks)</h3>

<table class="bordered">
<tr><th>Test</th><th>Valor Referencia</th><th>Fuente</th></tr>
<tr><td>Raasch Hook</td><td>${o(`${e("w", "ref")} = 0,12535`)}</td><td>Knight [24]</td></tr>
<tr><td>Twisted Beam (${o("t = 0,05")})</td><td>${o(`${e("w", "ref")} = 0,3431`)}, ${o(`${e("v", "ref")} = 1,390`)}</td><td>Simo et al. [46]</td></tr>
<tr><td>Twisted Beam (${o("t = 0,32")})</td><td>${o(`${e("w", "ref")} = 1,754\xD710<sup>-3</sup>`)}</td><td>MacNeal & Harder [30]</td></tr>
<tr><td>Pinched Hemisphere</td><td>${o(`${e("u", "ref")} = ${e("w", "ref")} = 0,093`)}</td><td>Simo et al. [46]</td></tr>
<tr><td>Pinched Cylinder</td><td>${o(`${e("w", "ref")} = 1,8248\xD710<sup>-2</sup>`)}</td><td>Belytschko [3]</td></tr>
<tr><td>Cook's Membrane</td><td>${o(`${e("u", "ref")} = 23,91`)}</td><td>Winkler & Plakomytis [43]</td></tr>
</table>

<hr/>

<h3>8. Implementaci\xF3n en Awatif</h3>

<h4>8.1 Archivos Fuente</h4>
<table class="bordered">
<tr><th>Archivo</th><th>Contenido</th><th>Lenguaje</th></tr>
<tr><td>awatif-fem/src/deformCpp.ts</td><td>Wrapper FEM principal</td><td>TypeScript</td></tr>
<tr><td>awatif-fem/src/cpp/deform.cpp</td><td>Solver C++ (WebAssembly)</td><td>C++</td></tr>
<tr><td>awatif-fem/src/analyze.ts</td><td>Post-procesamiento</td><td>TypeScript</td></tr>
<tr><td>awatif-mesh/src/getMesh.ts</td><td>Generaci\xF3n de malla</td><td>TypeScript</td></tr>
</table>

<h4>8.2 Funciones Principales</h4>

<p><b>deform(nodes, elements, nodeInputs, elementInputs)</b></p>
<p>\u2022 Ensambla matriz de rigidez global ${o(`<b>${e("K")}</b>`)}</p>
<p>\u2022 Aplica condiciones de contorno</p>
<p>\u2022 Resuelve ${o(`<b>${e("K")}</b> \xB7 <b>${e("U")}</b> = <b>${e("F")}</b>`)} usando librer\xEDa Eigen</p>

<p><b>analyze(nodes, elements, deformOutputs, elementInputs)</b></p>
<p>\u2022 Calcula momentos flectores ${o(`(${e("M", "xx")}, ${e("M", "yy")}, ${e("M", "xy")})`)}</p>
<p>\u2022 F\xF3rmula: ${o(`${e("M", "xy")} = ${e("f", "Global")}[2][1] \xD7 ${X(`${e("t")}<sup>3</sup>`, "12")}`)}</p>

<h4>8.3 Propiedades de Material</h4>
<p>${o(`${e("E")}`)} - M\xF3dulo de Young (elasticities)</p>
<p>${o(`${e("E", "y")}`)} - M\xF3dulo ortogonal (elasticitiesOrthogonal)</p>
<p>${o(`${e("G")}`)} - M\xF3dulo de cortante (shearModuli)</p>
<p>${o(`${e("\u03BD")}`)} - Raz\xF3n de Poisson (poissonsRatios)</p>
<p>${o(`${e("t")}`)} - Espesor (thicknesses)</p>

<hr/>

<h3>9. Tests de Validaci\xF3n</h3>

<div class="reference-box">
<p><b>Test 1: Placa Isotr\xF3pica (Navier)</b></p>
<p>${o(`${e("a")} = ${e("b")} = 10`)} m, ${o(`${e("t")} = 0,15`)} m</p>
<p>${o(`${e("E")} = 10`)} GPa, ${o(`${e("\u03BD")} = 0,25`)}</p>
<p>${o(`${e("q")} = -1000`)} N/m\xB2 (uniforme)</p>
<p>${o(`${e("w", "max")} <small>(anal\xEDtico)</small> = 13,541`)} mm</p>
<p>${o(`${e("w", "max")} <small>(FEM, 10\xD710)</small> \u2248 12,69`)} mm</p>
</div>

<div class="reference-box">
<p><b>Test 2: Placa Ortotr\xF3pica</b></p>
<p>${o(`${e("E", "x")} = 10`)} GPa, ${o(`${e("E", "y")} = 5`)} GPa ${o(`(${e("E", "x")}/${e("E", "y")} = 2)`)}</p>
<p>${o(`${e("w", "max")} <small>(referencia)</small> = 16,903575`)} mm</p>
</div>

<div class="reference-box">
<p><b>Test 3: Membrana CST (MacNeal-Harder)</b></p>
<p>Cuadrado 1\xD71 m, ${o(`${e("E")} = 10<sup>6</sup>`)}, ${o(`${e("\u03BD")} = 0,3`)}, ${o(`${e("t")} = 0,01`)}</p>
<p>Tensi\xF3n uniforme: ${o(`${e("\u03B5")} = ${X(e("q"), `${e("E")}\xB7${e("t")}`)}`)}
</div>

<hr/>

<h3>10. Referencias Bibliogr\xE1ficas</h3>

<p>1. Bletzinger KU, Bischoff M, Ramm E (2000) - M\xE9todo DSG</p>
<p>2. Felippa C, Militello C (1992) - Elemento ANDES</p>
<p>3. MacNeal RH, Harder RL (1985) - Problemas benchmark est\xE1ndar</p>
<p>4. Nguyen-Thoi T et al. (2013) - Cell smoothing CS-FEM-DSG3</p>
<p>5. Shin CM, Lee BC (2014) - Shell element con drilling DOF</p>

<hr/>
<p><i>Documentaci\xF3n generada con Awatif - Estilo Calcpad</i></p>
</div>

<script>
(function() {
  window.updateZoom = function(value) {
    const zoom = parseInt(value);
    document.getElementById('zoomValue').textContent = zoom + '%';
    document.getElementById('zoomSlider').value = zoom;
    const content = document.getElementById('reportContent');
    if (content) content.style.transform = 'scale(' + (zoom / 100) + ')';
  };
  window.setZoom = function(value) { updateZoom(value); };
})();
<\/script>
`;
    return dt`${pt(S)}`;
  }
  const tt = {
    ancho: {
      value: Y.state(10),
      min: 1,
      max: 30,
      step: 0.5,
      label: "Ancho (B)",
      unit: "length"
    },
    largo: {
      value: Y.state(15),
      min: 1,
      max: 30,
      step: 0.5,
      label: "Largo (L)",
      unit: "length"
    },
    espesor: {
      value: Y.state(0.2),
      min: 0.05,
      max: 1,
      step: 0.05,
      label: "Espesor (t)",
      unit: "length"
    },
    moduloE: {
      value: Y.state(21e4),
      min: 1e4,
      max: 5e5,
      step: 1e3,
      label: "M\xF3dulo E",
      unit: "stress"
    },
    poisson: {
      value: Y.state(0.3),
      min: 0.1,
      max: 0.45,
      step: 0.05,
      label: "Poisson (\u03BD)"
    },
    mallado: {
      value: Y.state(1),
      min: 0.3,
      max: 3,
      step: 0.1,
      label: "Tama\xF1o malla",
      unit: "length"
    },
    carga: {
      value: Y.state(-10),
      min: -50,
      max: 50,
      step: 1,
      label: "Carga uniforme",
      unit: "force"
    }
  }, V = {
    nodes: Y.state([]),
    elements: Y.state([]),
    nodeInputs: Y.state({}),
    elementInputs: Y.state({}),
    deformOutputs: Y.state({}),
    analyzeOutputs: Y.state({})
  };
  Y.derive(() => {
    const t = tt.ancho.value.val, a = tt.largo.value.val, s = tt.espesor.value.val, l = tt.moduloE.value.val, u = tt.poisson.value.val, S = tt.mallado.value.val, F = tt.carga.value.val, { nodes: C, elements: x, boundaryIndices: I } = Tt({
      points: [
        [
          0,
          0,
          0
        ],
        [
          t,
          0,
          0
        ],
        [
          t,
          a,
          0
        ],
        [
          0,
          a,
          0
        ]
      ],
      polygon: [
        0,
        1,
        2,
        3
      ],
      maxMeshSize: S
    });
    V.nodeInputs.val = {
      supports: new Map(I.map((m) => [
        m,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])),
      loads: new Map(C.map((m, d) => [
        d,
        [
          0,
          0,
          F,
          0,
          0,
          0
        ]
      ]))
    }, V.nodes.val = C, V.elements.val = x;
    const A = l / (2 * (1 + u));
    V.elementInputs.val = {
      elasticities: new Map(x.map((m, d) => [
        d,
        l
      ])),
      elasticitiesOrthogonal: new Map(x.map((m, d) => [
        d,
        l
      ])),
      thicknesses: new Map(x.map((m, d) => [
        d,
        s
      ])),
      poissonsRatios: new Map(x.map((m, d) => [
        d,
        u
      ])),
      shearModuli: new Map(x.map((m, d) => [
        d,
        A
      ]))
    }, V.deformOutputs.val = At(C, x, V.nodeInputs.val, V.elementInputs.val), V.analyzeOutputs.val = Ft(C, x, V.elementInputs.val, V.deformOutputs.val);
  });
  const at = Y.state(""), st = Y.state(void 0), lt = Y.state(false);
  Y.derive(() => {
    if (at.val === "Calcpad") {
      const t = it({
        template: xt,
        data: V
      });
      st.val = t;
    }
    if (at.val === "Awatif") {
      const t = it({
        template: Bt,
        data: V
      });
      st.val = t;
    }
    if (at.val === "Code") {
      const t = it({
        template: Xt,
        data: V
      });
      st.val = t;
    }
    if (at.val === "Docs") {
      const t = it({
        template: qt,
        data: V
      });
      st.val = t;
    }
    if (at.val === "Print") {
      const t = it({
        template: xt,
        data: V
      }), a = window.open("", "_blank");
      if (a) {
        const s = (t == null ? void 0 : t.innerHTML) || "";
        a.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Plate Shell Thin - Report</title>
        </head>
        <body>
          ${s}
        </body>
        </html>
      `), a.document.close(), a.focus(), setTimeout(() => a.print(), 500);
      }
    }
  });
  const yt = document.createElement("style");
  yt.textContent = `
  /* Toggle button para mostrar/ocultar toolbar */
  .toolbar-toggle {
    position: fixed;
    bottom: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #333;
    color: white;
    border: none;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 10px rgba(0,0,0,0.3);
    transition: transform 0.2s, background 0.2s;
  }
  .toolbar-toggle:hover {
    background: #555;
    transform: scale(1.1);
  }
  .toolbar-toggle.collapsed {
    background: #1a73e8;
  }

  /* Cuando toolbar est\xE1 oculto */
  .toolbar-hidden #toolbar,
  .toolbar-hidden .tp-dfwv {
    display: none !important;
  }

  /* Bot\xF3n maximizar en di\xE1logo */
  .dialog-maximize {
    position: absolute;
    top: 5px;
    right: 40px;
    width: 30px;
    height: 30px;
    background: #1a73e8;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10001;
  }
  .dialog-maximize:hover {
    background: #1557b0;
  }

  /* Di\xE1logo maximizado */
  body.dialog-maximized .dialog,
  body.dialog-maximized [class*="dialog"] {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    max-width: 100vw !important;
    max-height: 100vh !important;
    margin: 0 !important;
    border-radius: 0 !important;
    z-index: 9999 !important;
  }
  body.dialog-maximized .dialog > div,
  body.dialog-maximized [class*="dialog"] > div {
    height: calc(100vh - 50px) !important;
    max-height: none !important;
    overflow: auto !important;
  }

  /* Mobile responsive */
  @media (max-width: 768px) {
    .toolbar-toggle {
      bottom: 15px;
      right: 15px;
      width: 50px;
      height: 50px;
      font-size: 28px;
    }
  }
`;
  document.head.appendChild(yt);
  const bt = Y.state(true), W = document.createElement("button");
  W.className = "toolbar-toggle";
  W.innerHTML = "\u2212";
  W.title = "Ocultar/Mostrar botones";
  W.onclick = () => {
    bt.val = !bt.val, bt.val ? (document.body.classList.remove("toolbar-hidden"), W.innerHTML = "\u2212", W.classList.remove("collapsed")) : (document.body.classList.add("toolbar-hidden"), W.innerHTML = "+", W.classList.add("collapsed"));
  };
  document.body.append(Nt(tt), Et({
    mesh: V,
    settingsObj: {
      nodes: false,
      deformedShape: true,
      loads: false,
      shellResults: "displacementZ"
    }
  }), St(V), Ct({
    position: "bottom-center"
  }), Rt({
    dialogBody: st
  }), Dt({
    clickedButton: at,
    buttons: [
      "Calcpad",
      "Awatif",
      "Code",
      "Docs",
      "Print"
    ],
    sourceCode: "https://github.com/GiorgioBurbanelli89/awatif-ejemplos/tree/master/plate-shell-thin",
    author: "https://github.com/GiorgioBurbanelli89"
  }), W);
  const Zt = new MutationObserver((t) => {
    t.forEach((a) => {
      a.addedNodes.forEach((s) => {
        var _a, _b, _c;
        if (s instanceof HTMLElement) {
          const l = ((_a = s.querySelector) == null ? void 0 : _a.call(s, '[class*="dialog"]')) || (((_c = (_b = s.className) == null ? void 0 : _b.includes) == null ? void 0 : _c.call(_b, "dialog")) ? s : null);
          if (l && !l.querySelector(".dialog-maximize")) {
            const u = document.createElement("button");
            u.className = "dialog-maximize", u.innerHTML = "\u26F6", u.title = "Maximizar/Restaurar", u.onclick = (S) => {
              S.stopPropagation(), lt.val = !lt.val, lt.val ? (document.body.classList.add("dialog-maximized"), u.innerHTML = "\u26F6") : (document.body.classList.remove("dialog-maximized"), u.innerHTML = "\u26F6");
            }, l.style.position = "relative", l.appendChild(u);
          }
        }
      });
    });
  });
  Zt.observe(document.body, {
    childList: true,
    subtree: true
  });
  Y.derive(() => {
    st.val || (document.body.classList.remove("dialog-maximized"), lt.val = false);
  });
});
