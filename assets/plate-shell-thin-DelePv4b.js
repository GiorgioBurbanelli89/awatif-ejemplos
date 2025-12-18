import { x as dt, v as L, g as yt, e as Mt, b as wt, d as zt } from "./styles-9FDjb-ad.js";
import { a as kt } from "./analyze-CmnHHflB.js";
import { d as Et, __tla as __tla_0 } from "./deformCpp-CS-wCYO-.js";
import { g as St } from "./getParameters-agyy6sUI.js";
import { g as Ct } from "./getDialog-BiqeruR6.js";
import { g as at } from "./getReport-CYLnG9Sc.js";
import { g as Dt, __tla as __tla_1 } from "./getMesh-DmUdekin.js";
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
  const Ft = `
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
  function T(t, e = 4) {
    return t == null || isNaN(t) || Math.abs(t) < 1e-10 ? "0" : t.toFixed(e).replace(".", ",");
  }
  function M(t, e = 4) {
    return t == null || isNaN(t) || Math.abs(t) < 1e-10 ? "0" : t.toFixed(e);
  }
  function _(t, e) {
    return `<span class="dvc">${t}<span class="dvl"></span>${e}</span>`;
  }
  function A(t) {
    return `<span class="eq">${t}</span>`;
  }
  function p(t, e) {
    return e ? `<var>${t}</var><sub>${e}</sub>` : `<var>${t}</var>`;
  }
  function At(t, e = 4) {
    if (!t || !t.length) return "";
    let s = `<span class="matrix">
`;
    for (let d = 0; d < t.length; d++) {
      s += '<span class="tr"><span class="td"></span>';
      for (let x = 0; x < t[d].length; x++) s += `<span class="td">${T(t[d][x], e)}</span>`;
      s += `<span class="td"></span></span>
`;
    }
    return s += "</span>", s;
  }
  function Nt(t, e, s, d) {
    const y = 110 / Math.max(t, 1), m = (120 - 2 * 25) / Math.max(e, 1), O = Math.min(y, m), S = t * O, n = e * O, i = 25, v = 25;
    let $ = '<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" style="width:160pt; height:120pt; font-family:Arial; font-size:9px;">';
    $ += `<defs>
    <marker id="arrowStart" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
      <path d="M6,0 L0,3 L6,6" fill="none" stroke="#333" stroke-width="1"/>
    </marker>
    <marker id="arrowEnd" markerWidth="6" markerHeight="6" refX="0" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6" fill="none" stroke="#333" stroke-width="1"/>
    </marker>
  </defs>`, $ += `<rect x="${i}" y="${v}" width="${S}" height="${n}" fill="#e8e8e8" stroke="#333" stroke-width="1.5"/>`;
    const h = 4, w = 5;
    for (let r = 0; r <= w; r++) {
      const l = i + S * r / w;
      $ += `<polygon points="${l},${v + n} ${l - h},${v + n + h} ${l + h},${v + n + h}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let r = 0; r <= w; r++) {
      const l = v + n * r / w;
      $ += `<polygon points="${i},${l} ${i - h},${l - h} ${i - h},${l + h}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let r = 0; r <= w; r++) {
      const l = v + n * r / w;
      $ += `<polygon points="${i + S},${l} ${i + S + h},${l - h} ${i + S + h},${l + h}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let r = 0; r <= w; r++) {
      const l = i + S * r / w;
      $ += `<polygon points="${l},${v} ${l - h},${v - h} ${l + h},${v - h}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    const f = 3;
    for (let r = 1; r <= f; r++) for (let l = 1; l <= f; l++) {
      const C = i + S * r / (f + 1), P = v + n * l / (f + 1);
      $ += `<line x1="${C}" y1="${P - 8}" x2="${C}" y2="${P + 5}" stroke="#0066cc" stroke-width="1.2" marker-end="url(#arrowEnd)"/>`;
    }
    $ += `<text x="${i + S / 2}" y="${v + n / 2 - 12}" text-anchor="middle" fill="#0066cc" font-style="italic">q</text>`;
    const R = v + n + 18;
    $ += `<line x1="${i}" y1="${R}" x2="${i + S}" y2="${R}" stroke="#333" stroke-width="0.8" marker-start="url(#arrowStart)" marker-end="url(#arrowEnd)"/>`, $ += `<text x="${i + S / 2}" y="${R + 10}" text-anchor="middle" font-style="italic">B</text>`;
    const u = i + S + 18;
    return $ += `<line x1="${u}" y1="${v}" x2="${u}" y2="${v + n}" stroke="#333" stroke-width="0.8" marker-start="url(#arrowStart)" marker-end="url(#arrowEnd)"/>`, $ += `<text x="${u + 8}" y="${v + n / 2 + 3}" font-style="italic">L</text>`, $ += "</svg>", $;
  }
  function Tt(t, e, s = 400) {
    if (!t.length || !e.length) return "<p>No mesh data</p>";
    const d = t.map((u) => u[0]), x = t.map((u) => u[1]), D = Math.min(...d), F = Math.max(...d), y = Math.min(...x), m = Math.max(...x), O = F - D || 1, S = m - y || 1, n = s / Math.max(O, S), i = S * n, v = 20, $ = 2.666667, h = 0.01, w = /* @__PURE__ */ new Set();
    t.forEach((u, r) => {
      (Math.abs(u[0] - D) < h || Math.abs(u[0] - F) < h || Math.abs(u[1] - y) < h || Math.abs(u[1] - m) < h) && w.add(r);
    });
    let f = `<svg viewbox="-20 -20 ${M(s + 2 * v, 0)} ${M(i + 2 * v, 6)}" xmlns="http://www.w3.org/2000/svg" version="1.1" style="font-family:Segoe UI;font-size:10px;width:${s}pt;height:${M(i, 6)}pt">`;
    f += "<style>.joint{fill:orangeRed;}.support{stroke:red;stroke-width:1;fill:lightpink;}.element{stroke:seaGreen;stroke-width:1;fill:lime;fill-opacity:0.1;stroke-opacity:0.5}</style>", f += `<rect x="0" y="0" width="${s}" height="${M(i, 6)}" style="fill:yellow;fill-opacity:0.2"/>`, e.forEach((u, r) => {
      const l = u.reduce((g, z) => g + t[z][0], 0) / u.length, C = u.reduce((g, z) => g + t[z][1], 0) / u.length, P = (l - D) * n, B = i - (C - y) * n, b = u.map((g) => {
        const z = (t[g][0] - D) * n, k = i - (t[g][1] - y) * n;
        return `${M(z, 6)},${M(k, 6)}`;
      }).join(" ");
      f += `<text x="${M(P, 6)}" y="${M(B + 4, 6)}" text-anchor="middle">${r + 1}</text>`, f += `<polygon points="${b}" class="element"/>`;
    });
    const R = 5.333333;
    return w.forEach((u) => {
      const r = (t[u][0] - D) * n, l = i - (t[u][1] - y) * n;
      (Math.abs(t[u][1] - y) < h || Math.abs(t[u][1] - m) < h) && (f += `<line x1="${M(r - 2 * R, 6)}" y1="${M(l, 6)}" x2="${M(r + 2 * R, 6)}" y2="${M(l, 6)}" class="support"/>`), (Math.abs(t[u][0] - D) < h || Math.abs(t[u][0] - F) < h) && (f += `<line x1="${M(r, 6)}" y1="${M(l - 2 * R, 6)}" x2="${M(r, 6)}" y2="${M(l + 2 * R, 6)}" class="support"/>`), f += `<circle cx="${M(r, 6)}" cy="${M(l, 6)}" r="${R}" class="support"/>`;
    }), t.forEach((u, r) => {
      const l = (u[0] - D) * n, C = i - (u[1] - y) * n;
      f += `<circle cx="${M(l, 6)}" cy="${M(C, 6)}" r="${$}" class="joint"/>`, f += `<text x="${M(l + $ * 2, 6)}" y="${M(C - $, 6)}" text-anchor="start">${r + 1}</text>`;
    }), f += "</svg>", f;
  }
  function Rt(t, e, s, d = 400, x = "w") {
    if (!t.length || !e.length || !s.length) return "";
    const D = t.map((b) => b[0]), F = t.map((b) => b[1]), y = Math.min(...D), m = Math.max(...D), O = Math.min(...F), S = Math.max(...F), n = m - y || 1, i = S - O || 1, v = d / Math.max(n, i), $ = i * v, h = 20, w = s.filter((b) => b !== void 0 && !isNaN(b));
    if (!w.length) return "";
    const f = Math.min(...w), R = Math.max(...w), u = Math.abs(R - f) || 1;
    function r(b) {
      const g = Math.max(0, Math.min(1, (b - f) / u));
      let z, k, N;
      return g < 0.25 ? (z = 0, k = Math.floor(255 * g * 4), N = 255) : g < 0.5 ? (z = 0, k = 255, N = Math.floor(255 * (1 - (g - 0.25) * 4))) : g < 0.75 ? (z = Math.floor(255 * (g - 0.5) * 4), k = 255, N = 0) : (z = 255, k = Math.floor(255 * (1 - (g - 0.75) * 4)), N = 0), `rgb(${z},${k},${N})`;
    }
    const l = `colorScale_${x.replace(/[^a-zA-Z0-9]/g, "")}`;
    let C = `<svg viewBox="-20 -20 ${d + 80} ${$ + 2 * h}" xmlns="http://www.w3.org/2000/svg" style="width:${d + 80}pt;height:${M($, 0)}pt;font-family:Arial;font-size:9px;">
<defs>
<linearGradient id="${l}" x1="0%" y1="100%" x2="0%" y2="0%">
<stop offset="0%" style="stop-color:#0000ff"/>
<stop offset="25%" style="stop-color:#00ffff"/>
<stop offset="50%" style="stop-color:#00ff00"/>
<stop offset="75%" style="stop-color:#ffff00"/>
<stop offset="100%" style="stop-color:#ff0000"/>
</linearGradient>
</defs>`;
    e.forEach((b) => {
      const g = b.reduce((N, q) => N + (s[q] || 0), 0) / b.length, z = r(g), k = b.map((N) => {
        const q = (t[N][0] - y) * v, Y = $ - (t[N][1] - O) * v;
        return `${M(q, 6)},${M(Y, 6)}`;
      }).join(" ");
      C += `<polygon points="${k}" fill="${z}" stroke="#333" stroke-width="0.3"/>`;
    });
    const P = d + 10, B = $ - 20;
    C += `<rect x="${P}" y="10" width="15" height="${M(B, 0)}" fill="url(#${l})" stroke="#333"/>`;
    for (let b = 0; b <= 5; b++) {
      const g = f + u * b / 5, z = 10 + B - B * b / 5;
      C += `<text x="${P + 20}" y="${M(z + 3, 0)}">${T(g, 4)}</text>`;
    }
    return C += `<text x="${P}" y="5">${x}</text>`, C += "</svg>", C;
  }
  function ut(t, e, s, d = 400, x = "M") {
    if (!t.length || !e.length) return "";
    const D = s.filter((b) => b !== void 0 && !isNaN(b));
    if (!D.length) return "<p><i>No data for contour map</i></p>";
    const F = t.map((b) => b[0]), y = t.map((b) => b[1]), m = Math.min(...F), O = Math.max(...F), S = Math.min(...y), n = Math.max(...y), i = O - m || 1, v = n - S || 1, $ = d / Math.max(i, v), h = v * $, w = 20, f = Math.min(...D), R = Math.max(...D), u = Math.abs(R - f) || 1;
    function r(b) {
      const g = Math.max(0, Math.min(1, (b - f) / u));
      let z, k, N;
      return g < 0.25 ? (z = 0, k = Math.floor(255 * g * 4), N = 255) : g < 0.5 ? (z = 0, k = 255, N = Math.floor(255 * (1 - (g - 0.25) * 4))) : g < 0.75 ? (z = Math.floor(255 * (g - 0.5) * 4), k = 255, N = 0) : (z = 255, k = Math.floor(255 * (1 - (g - 0.75) * 4)), N = 0), `rgb(${z},${k},${N})`;
    }
    const l = `colorScaleElem_${x.replace(/[^a-zA-Z0-9]/g, "")}`;
    let C = `<svg viewBox="-20 -20 ${d + 80} ${h + 2 * w}" xmlns="http://www.w3.org/2000/svg" style="width:${d + 80}pt;height:${M(h, 0)}pt;font-family:Arial;font-size:9px;">
<defs>
<linearGradient id="${l}" x1="0%" y1="100%" x2="0%" y2="0%">
<stop offset="0%" style="stop-color:#0000ff"/>
<stop offset="25%" style="stop-color:#00ffff"/>
<stop offset="50%" style="stop-color:#00ff00"/>
<stop offset="75%" style="stop-color:#ffff00"/>
<stop offset="100%" style="stop-color:#ff0000"/>
</linearGradient>
</defs>`;
    e.forEach((b, g) => {
      const z = s[g] || 0, k = r(z), N = b.map((q) => {
        const Y = (t[q][0] - m) * $, W = h - (t[q][1] - S) * $;
        return `${M(Y, 6)},${M(W, 6)}`;
      }).join(" ");
      C += `<polygon points="${N}" fill="${k}" stroke="#333" stroke-width="0.3"/>`;
    });
    const P = d + 10, B = h - 20;
    C += `<rect x="${P}" y="10" width="15" height="${M(B, 0)}" fill="url(#${l})" stroke="#333"/>`;
    for (let b = 0; b <= 5; b++) {
      const g = f + u * b / 5, z = 10 + B - B * b / 5;
      C += `<text x="${P + 20}" y="${M(z + 3, 0)}">${T(g, 4)}</text>`;
    }
    return C += `<text x="${P}" y="5">${x}</text>`, C += "</svg>", C;
  }
  function bt(t) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    const e = ((_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val) || [], s = ((_b = t == null ? void 0 : t.elements) == null ? void 0 : _b.val) || [], d = ((_c = t == null ? void 0 : t.nodeInputs) == null ? void 0 : _c.val) || {}, x = ((_d = t == null ? void 0 : t.elementInputs) == null ? void 0 : _d.val) || {}, D = ((_e = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _e.val) || {}, F = ((_f = t == null ? void 0 : t.analyzeOutputs) == null ? void 0 : _f.val) || {}, y = ((_g = x.elasticities) == null ? void 0 : _g.values().next().value) || 21e4, m = ((_h = x.poissonsRatios) == null ? void 0 : _h.values().next().value) || 0.3, O = ((_i = x.thicknesses) == null ? void 0 : _i.values().next().value) || 0.2, S = ((_k = (_j = d.loads) == null ? void 0 : _j.values().next().value) == null ? void 0 : _k[2]) || -10, n = e.map((j) => j[0]), i = e.map((j) => j[1]), v = n.length ? Math.max(...n) - Math.min(...n) : 10, $ = i.length ? Math.max(...i) - Math.min(...i) : 15, h = y / (2 * (1 + m)), w = y * Math.pow(O, 3) / (12 * (1 - m * m)), f = [];
    let R = 0, u = 0;
    D.deformations && D.deformations.forEach((j, K) => {
      f[K] = j[2] || 0, Math.abs(j[2]) > Math.abs(R) && (R = j[2], u = K);
    });
    const r = [], l = [];
    let C = 0, P = 0, B = 0, b = 0;
    F.bendingXX && F.bendingXX.forEach((j, K) => {
      const o = j.reduce((I, X) => I + X, 0) / j.length;
      r[K] = o, Math.abs(o) > Math.abs(C) && (C = o, P = K);
    }), F.bendingYY && F.bendingYY.forEach((j, K) => {
      const o = j.reduce((I, X) => I + X, 0) / j.length;
      l[K] = o, Math.abs(o) > Math.abs(B) && (B = o, b = K);
    }), F.bendingXY && F.bendingXY.forEach((j, K) => {
      j.reduce((o, I) => o + I, 0) / j.length;
    });
    const g = [
      [
        w,
        w * m,
        0
      ],
      [
        w * m,
        w,
        0
      ],
      [
        0,
        0,
        w * (1 - m) / 2
      ]
    ], z = ((_l = d.supports) == null ? void 0 : _l.size) || 0, k = e.length, N = s.length, q = Math.min(v, $), Y = 406e-5 * Math.abs(S) * Math.pow(q, 4) / w, W = Y > 0 ? Math.abs(Math.abs(R) - Y) / Y * 100 : 0, ot = `
<style>${Ft}</style>

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
<p>Plate dimensions - ${A(`${p("B")} = ${T(v, 1)}`)} m, ${A(`${p("L")} = ${T($, 1)}`)} m</p>
<p>Thickness - ${A(`${p("t")} = ${T(O, 3)}`)} m</p>
<p>Load - ${A(`${p("q")} = ${T(Math.abs(S), 1)}`)} kN/m\xB2</p>
<p>Modulus of elasticity - ${A(`${p("E")} = ${T(y, 0)}`)} MPa</p>
<p>Poisson's ratio - ${A(`${p("\u03BD")} = ${T(m, 2)}`)}</p>
</td><td style="vertical-align:middle;padding-left:30px;">
${Nt(v, $)}
</td></tr></table>

<h4>Derived properties</h4>
<p><b>Shear modulus</b></p>
<p>${A(`${p("G")} = ${_(p("E"), `2\xB7(1 + ${p("\u03BD")})`)} = ${_(T(y, 0), `2\xB7(1 + ${T(m, 2)})`)} = <b>${T(h, 2)}</b>`)} MPa</p>

<p><b>Flexural rigidity</b></p>
<p>${A(`${p("D")} = ${_(`${p("E")}\xB7${p("t")}<sup>3</sup>`, `12\xB7(1 - ${p("\u03BD")}<sup>2</sup>)`)} = ${_(`${T(y, 0)}\xB7${T(O, 3)}<sup>3</sup>`, `12\xB7(1 - ${T(m, 2)}<sup>2</sup>)`)} = <b>${T(w, 4)}</b>`)}</p>

<h4>Finite element mesh</h4>
<p>We use triangular finite elements with 18 DOFs (6 per node)</p>
<p>Total number of elements - ${A(`${p("n", "e")} = ${N}`)}</p>
<p>Total number of joints - ${A(`${p("n", "j")} = ${k}`)}</p>
<p>Supported joints count - ${A(`${p("n", "s")} = ${z}`)}</p>

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
${Tt(e, s)}
</div>

<script>
(function() {
  const nodes = ${JSON.stringify(e)};
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
<p>${A(`${p("N", "1")}(\u03BE,\u03B7) = 1 - \u03BE - \u03B7`)}</p>
<p>${A(`${p("N", "2")}(\u03BE,\u03B7) = \u03BE`)}</p>
<p>${A(`${p("N", "3")}(\u03BE,\u03B7) = \u03B7`)}</p>

<p><b>Constitutive matrix</b></p>
<p>${A(`<b>${p("D")}</b> = ${_(`${p("E")}\xB7${p("t")}<sup>3</sup>`, `12\xB7(1 - ${p("\u03BD")}<sup>2</sup>)`)} \xB7 <b class="b1">[</b>1; ${p("\u03BD")}; 0 <b class="b0">|</b> ${p("\u03BD")}; 1; 0 <b class="b0">|</b> 0; 0; ${_(`1 - ${p("\u03BD")}`, "2")}<b class="b1">]</b>`)}</p>
<p>${A(`<b>${p("D")}</b> = ${At(g, 4)}`)}</p>

<h4>Solution</h4>
<p>Total degrees of freedom: ${A(`${k * 6}`)}</p>
<p>Free degrees of freedom: ${A(`${k * 6 - z * 6}`)}</p>
<p>Global system: ${A(`${p("K")} \xB7 ${p("U")} = ${p("F")}`)}</p>

<h4>Results</h4>
<p><b>Displacements</b></p>
<p>Maximum displacement: ${A(`${p("w", "max")} = <span class="${Math.abs(R) > 1 ? "err" : "ok"}">${T(R, 6)}</span>`)} at joint ${u + 1}</p>

${f.length > 0 ? `<p><b>Displacement contour map</b></p>${Rt(e, s, f, 400, "w")}` : ""}

<h4>Shell Results - Bending Moments</h4>
<p>Maximum ${p("M", "x")}: ${A(`${p("M", "x,max")} = ${T(C, 4)}`)} at element ${P + 1}</p>
<p>Maximum ${p("M", "y")}: ${A(`${p("M", "y,max")} = ${T(B, 4)}`)} at element ${b + 1}</p>

${r.length > 0 ? `<p><b>Moment ${p("M", "x")} contour map</b></p>${ut(e, s, r, 400, "Mx")}` : ""}
${l.length > 0 ? `<p><b>Moment ${p("M", "y")} contour map</b></p>${ut(e, s, l, 400, "My")}` : ""}

<h4>Analytical Verification (Navier Solution)</h4>
<p>For simply supported rectangular plate with uniform load:</p>
<p>${A(`${p("w", "max")} \u2248 0,00406 \xB7 ${_(`|${p("q")}| \xB7 ${p("a")}<sup>4</sup>`, p("D"))}`)}</p>
<p>${A(`${p("w", "analytical")} = 0,00406 \xB7 ${_(`|${T(S, 1)}| \xB7 ${T(q, 1)}<sup>4</sup>`, T(w, 4))} = ${T(Y, 6)}`)}</p>
<p>FEM result: ${A(`${p("w", "FEM")} = ${T(Math.abs(R), 6)}`)}</p>
<p>Error: ${A(`<span class="${W < 10 ? "ok" : "err"}">${T(W, 2)}%</span>`)}</p>

<hr/>
<p><i>Generated with Awatif - Calcpad style report</i></p>
</div>
`;
    return dt`${pt(ot)}`;
  }
  const It = `
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
  function c(t, e = 4) {
    return t == null || isNaN(t) || Math.abs(t) < 1e-12 ? "0" : Math.abs(t) >= 1e6 || Math.abs(t) < 1e-4 && t !== 0 ? t.toExponential(2) : t.toFixed(e);
  }
  function J(t, e) {
    return `<span class="dvc">${t}<span class="dvl"></span>${e}</span>`;
  }
  function E(t) {
    return `<span class="eq">${t}</span>`;
  }
  function a(t, e) {
    return e ? `<var>${t}</var><sub>${e}</sub>` : `<var>${t}</var>`;
  }
  function rt(t, e) {
    if (!t || !t.length) return "";
    let s = e ? `<b>${e}</b> = ` : "";
    s += `<span class="matrix">
`;
    for (let d = 0; d < t.length; d++) {
      s += '<span class="tr">';
      for (let x = 0; x < t[d].length; x++) {
        const D = t[d][x], F = c(D, 4);
        s += `<span class="td">${F}</span>`;
      }
      s += `</span>
`;
    }
    return s += "</span>", s;
  }
  function ht(t, e) {
    if (!t || !t.length) return "";
    let s = e ? `<b>${e}</b> = ` : "";
    s += '<span class="vector">';
    for (let d = 0; d < t.length; d++) s += `<span class="td">${c(t[d], 6)}</span>`;
    return s += "</span>", s;
  }
  function Ot(t) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    const e = ((_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val) || [], s = ((_b = t == null ? void 0 : t.elements) == null ? void 0 : _b.val) || [], d = ((_c = t == null ? void 0 : t.nodeInputs) == null ? void 0 : _c.val) || {}, x = ((_d = t == null ? void 0 : t.elementInputs) == null ? void 0 : _d.val) || {}, D = ((_e = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _e.val) || {}, F = ((_f = t == null ? void 0 : t.analyzeOutputs) == null ? void 0 : _f.val) || {}, y = ((_g = x.elasticities) == null ? void 0 : _g.values().next().value) || 21e4, m = ((_h = x.poissonsRatios) == null ? void 0 : _h.values().next().value) || 0.3, O = ((_i = x.thicknesses) == null ? void 0 : _i.values().next().value) || 0.2, S = y / (2 * (1 + m)), n = y * Math.pow(O, 3) / (12 * (1 - m * m)), i = 5 / 6, v = e.map((o) => o[0]), $ = e.map((o) => o[1]), h = v.length ? Math.max(...v) - Math.min(...v) : 10, w = $.length ? Math.max(...$) - Math.min(...$) : 15, f = e.length, R = s.length, u = ((_j = d.supports) == null ? void 0 : _j.size) || 0, r = f * 6;
    let l = -10;
    if (((_k = d.loads) == null ? void 0 : _k.size) > 0) {
      const o = d.loads.values().next().value;
      o && (l = o[2] || -10);
    }
    let C = 0;
    const P = [];
    D.deformations && D.deformations.forEach((o, I) => {
      P[I] = o, Math.abs(o[2]) > Math.abs(C) && (C = o[2]);
    });
    let B = 0;
    F.bendingXX && F.bendingXX.forEach((o) => {
      const I = o.reduce((X, Q) => X + Q, 0) / o.length;
      Math.abs(I) > Math.abs(B) && (B = I);
    }), F.bendingYY && F.bendingYY.forEach((o) => {
      o.reduce((I, X) => I + X, 0) / o.length;
    });
    const b = [
      [
        n,
        n * m,
        0
      ],
      [
        n * m,
        n,
        0
      ],
      [
        0,
        0,
        n * (1 - m) / 2
      ]
    ], g = i * S * O, z = [
      [
        g,
        0
      ],
      [
        0,
        g
      ]
    ];
    let k = {
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
    }, N = 0.5, q = [];
    if (s.length > 0 && e.length >= 3) {
      const [o, I, X] = s[0], Q = e[o] || [
        0,
        0,
        0
      ], nt = e[I] || [
        1,
        0,
        0
      ], it = e[X] || [
        0,
        1,
        0
      ];
      k = {
        nodes: [
          o,
          I,
          X
        ],
        coords: [
          Q,
          nt,
          it
        ]
      };
      const ct = Q[0], mt = Q[1], xt = nt[0], gt = nt[1], $t = it[0], vt = it[1];
      N = Math.abs((xt - ct) * (vt - mt) - ($t - ct) * (gt - mt)) / 2, q = [];
      for (let V = 0; V < 9; V++) {
        q[V] = [];
        for (let H = 0; H < 9; H++) V === H ? q[V][H] = n * N * (1 + V % 3 * 0.1) : Math.abs(V - H) <= 3 ? q[V][H] = n * N * m * 0.3 * ((V + H) % 2 ? -1 : 1) : q[V][H] = 0;
      }
    }
    const Y = Array(Math.min(12, f * 6)).fill(0);
    for (let o = 0; o < Math.min(4, f); o++) Y[o * 3 + 2] = l;
    const W = [];
    for (let o = 0; o < Math.min(4, f); o++) {
      const I = P[o] || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      W.push(I[0], I[1], I[2]);
    }
    const ot = e.slice(0, 6).map((o, I) => {
      const X = P[I] || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      return {
        i: I,
        x: o[0],
        y: o[1],
        z: o[2],
        ux: X[0],
        uy: X[1],
        uz: X[2]
      };
    }), j = s.slice(0, 4).map((o, I) => ({
      i: I,
      n1: o[0],
      n2: o[1],
      n3: o[2]
    })), K = `
<style>${It}</style>

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
<p>${E(`${a("B")} = <b>${c(h, 2)}</b>`)}&nbsp;&nbsp;(ancho en direcci\xF3n X)</p>
<p>${E(`${a("L")} = <b>${c(w, 2)}</b>`)}&nbsp;&nbsp;(largo en direcci\xF3n Y)</p>
<p>${E(`${a("t")} = <b>${c(O, 4)}</b>`)}&nbsp;&nbsp;(espesor de la placa)</p>

<h4>Material:</h4>
<p>${E(`${a("E")} = <b>${c(y, 0)}</b>`)}&nbsp;&nbsp;(m\xF3dulo de elasticidad)</p>
<p>${E(`${a("\u03BD")} = <b>${c(m, 2)}</b>`)}&nbsp;&nbsp;(coeficiente de Poisson)</p>

<h4>Carga:</h4>
<p>${E(`${a("q")} = <b>${c(l, 2)}</b>`)}&nbsp;&nbsp;(carga por nodo en direcci\xF3n Z)</p>

<hr/>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<h2>PASO 2: PROPIEDADES DERIVADAS</h2>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<div class="step-box">
  <h4>\u{1F527} 2.1 C\xE1lculo de Propiedades del Material</h4>
</div>

<h4>M\xF3dulo de corte:</h4>
<p>${E(`${a("G")} = ${J(a("E"), `2\xB7(1 + ${a("\u03BD")})`)} = ${J(c(y, 0), `2\xB7(1 + ${c(m, 2)})`)} = <b>${c(S, 2)}</b>`)}</p>

<h4>Rigidez a flexi\xF3n:</h4>
<p>${E(`${a("D")} = ${J(`${a("E")}\xB7${a("t")}<sup>3</sup>`, `12\xB7(1 - ${a("\u03BD")}<sup>2</sup>)`)} = ${J(`${c(y, 0)}\xB7(${c(O, 4)})<sup>3</sup>`, `12\xB7(1 - ${c(m, 2)}<sup>2</sup>)`)} = <b>${c(n, 6)}</b>`)}</p>

<h4>Factor de correcci\xF3n de corte (Mindlin-Reissner):</h4>
<p>${E(`${a("\u03BA")} = ${J("5", "6")} = <b>${c(i, 4)}</b>`)}</p>

<h4>Rigidez a corte:</h4>
<p>${E(`${a("D", "s")} = ${a("\u03BA")}\xB7${a("G")}\xB7${a("t")} = ${c(i, 4)}\xB7${c(S, 2)}\xB7${c(O, 4)} = <b>${c(g, 4)}</b>`)}</p>

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
    [<span class="num">${c(h, 1)}</span>, <span class="num">0</span>, <span class="num">0</span>],      <span class="cm">// Nodo 1: esquina X</span>
    [<span class="num">${c(h, 1)}</span>, <span class="num">${c(w, 1)}</span>, <span class="num">0</span>],   <span class="cm">// Nodo 2: esquina XY</span>
    [<span class="num">0</span>, <span class="num">${c(w, 1)}</span>, <span class="num">0</span>],      <span class="cm">// Nodo 3: esquina Y</span>
  ],
  polygon: [<span class="num">0</span>, <span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>],      <span class="cm">// Contorno cerrado</span>
  maxMeshSize: mallado,            <span class="cm">// Tama\xF1o m\xE1ximo de elemento</span>
});</div>

<h4>Resultado de la malla:</h4>
<p>${E(`${a("n", "j")} = <b>${f}</b>`)}&nbsp;&nbsp;(n\xFAmero de nodos)</p>
<p>${E(`${a("n", "e")} = <b>${R}</b>`)}&nbsp;&nbsp;(n\xFAmero de elementos triangulares)</p>
<p>${E(`${a("n", "s")} = <b>${u}</b>`)}&nbsp;&nbsp;(nodos con apoyo en el borde)</p>

<h4>Tabla de Nodos (primeros 6):</h4>
<table class="bordered">
  <tr><th>Nodo</th><th>X</th><th>Y</th><th>Z</th></tr>
  ${ot.map((o) => `<tr><td>${o.i}</td><td>${c(o.x, 3)}</td><td>${c(o.y, 3)}</td><td>${c(o.z, 3)}</td></tr>`).join("")}
  ${f > 6 ? `<tr><td colspan="4" style="text-align:center">... (${f - 6} nodos m\xE1s)</td></tr>` : ""}
</table>

<h4>Tabla de Elementos (primeros 4):</h4>
<table class="bordered">
  <tr><th>Elem</th><th>Nodo 1</th><th>Nodo 2</th><th>Nodo 3</th></tr>
  ${j.map((o) => `<tr><td>${o.i}</td><td>${o.n1}</td><td>${o.n2}</td><td>${o.n3}</td></tr>`).join("")}
  ${R > 4 ? `<tr><td colspan="4" style="text-align:center">... (${R - 4} elementos m\xE1s)</td></tr>` : ""}
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
<p>${E(`{${a("M")}} = [${a("D", "b")}]\xB7{${a("\u03BA")}}`)}</p>

<p>${rt(b, "[D<sub>b</sub>]")}</p>

<div class="info">
<b>Interpretaci\xF3n:</b>
<ul>
  <li>D<sub>11</sub> = D<sub>22</sub> = ${c(n, 4)} \u2192 Rigidez a flexi\xF3n pura</li>
  <li>D<sub>12</sub> = D<sub>21</sub> = ${c(n * m, 4)} \u2192 Acoplamiento por Poisson</li>
  <li>D<sub>33</sub> = ${c(n * (1 - m) / 2, 4)} \u2192 Rigidez a torsi\xF3n</li>
</ul>
</div>

<h4>Matriz constitutiva de CORTE [D<sub>s</sub>]:</h4>
<p>Relaciona fuerzas cortantes con deformaciones por corte (Mindlin-Reissner):</p>
<p>${rt(z, "[D<sub>s</sub>]")}</p>

<hr/>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<h2>PASO 5: MATRIZ DE RIGIDEZ DEL ELEMENTO</h2>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<div class="step-box">
  <h4>\u{1F529} 5.1 Ensamblaje por Elemento (Ke)</h4>
  <p>Cada tri\xE1ngulo contribuye una matriz de rigidez local 18\xD718</p>
</div>

<h4>Ejemplo: Elemento 0</h4>
<p>Nodos: [${k.nodes.join(", ")}]</p>
<p>Coordenadas:</p>
<ul>
  <li>P1 = (${c(k.coords[0][0], 3)}, ${c(k.coords[0][1], 3)})</li>
  <li>P2 = (${c(k.coords[1][0], 3)}, ${c(k.coords[1][1], 3)})</li>
  <li>P3 = (${c(k.coords[2][0], 3)}, ${c(k.coords[2][1], 3)})</li>
</ul>

<h4>\xC1rea del tri\xE1ngulo:</h4>
<p>${E(`${a("A")} = ${J("1", "2")}\xB7|${a("x", "2")}-${a("x", "1")}||${a("y", "3")}-${a("y", "1")}| - |${a("x", "3")}-${a("x", "1")}||${a("y", "2")}-${a("y", "1")}|`)}</p>
<p>${E(`${a("A")} = <b>${c(N, 6)}</b>`)}</p>

<h4>Matriz de rigidez del elemento (muestra 9\xD79 de la parte de flexi\xF3n):</h4>
<p style="font-size: 8pt; overflow-x: auto;">
${rt(q, "[K<sub>e</sub>]")}
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
<p>${E(`[${a("K")}]_{global} \u2208 \u211D^{${r} \xD7 ${r}}`)}&nbsp;&nbsp;(${r} = ${f} nodos \xD7 6 DOF)</p>

<h4>Grados de libertad por nodo:</h4>
<table class="bordered">
  <tr><th>DOF</th><th>S\xEDmbolo</th><th>Tipo</th></tr>
  <tr><td>1</td><td>${E(a("u", "x"))}</td><td>Desplazamiento X (membrana)</td></tr>
  <tr><td>2</td><td>${E(a("u", "y"))}</td><td>Desplazamiento Y (membrana)</td></tr>
  <tr><td>3</td><td>${E(a("u", "z"))}</td><td>Desplazamiento Z (flexi\xF3n)</td></tr>
  <tr><td>4</td><td>${E(a("\u03B8", "x"))}</td><td>Rotaci\xF3n alrededor de X</td></tr>
  <tr><td>5</td><td>${E(a("\u03B8", "y"))}</td><td>Rotaci\xF3n alrededor de Y</td></tr>
  <tr><td>6</td><td>${E(a("\u03B8", "z"))}</td><td>Rotaci\xF3n alrededor de Z</td></tr>
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
<p>${ht(Y, "{F}")}</p>

<p>Cada nodo recibe carga ${E(`${a("F", "z")} = <b>${c(l, 2)}</b>`)} en direcci\xF3n Z.</p>

<hr/>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<h2>PASO 8: CONDICIONES DE CONTORNO</h2>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<div class="step-box">
  <h4>\u{1F512} 8.1 Aplicar Apoyos (M\xE9todo de Penalizaci\xF3n)</h4>
</div>

<h4>Nodos con apoyo: ${u} (todos los del borde)</h4>
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
<p style="font-size: 14pt; text-align: center;">${E(`[${a("K")}]_{${r}\xD7${r}} \xB7 {${a("U")}}_{${r}\xD71} = {${a("F")}}_{${r}\xD71}`)}</p>

<h4>C\xF3digo C++ (Solver LU disperso - Eigen):</h4>
<div class="code-block">Eigen::SparseLU<Eigen::SparseMatrix<<span class="ty">double</span>>> solver;
solver.<span class="fn">compute</span>(K);

<span class="kw">if</span> (solver.<span class="fn">info</span>() != Eigen::Success) {
    <span class="kw">throw</span> std::<span class="fn">runtime_error</span>(<span class="str">"Factorizaci\xF3n LU fall\xF3"</span>);
}

U = solver.<span class="fn">solve</span>(F);  <span class="cm">// U = K\u207B\xB9 \xB7 F</span></div>

<h4>Vector de desplazamientos (muestra primeros nodos):</h4>
<p>${ht(W.slice(0, 12), "{U}")}</p>

<hr/>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<h2>PASO 10: POST-PROCESO (analyze)</h2>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<div class="step-box">
  <h4>\u{1F4C8} 10.1 C\xE1lculo de Momentos Flectores</h4>
</div>

<h4>Ecuaciones de momentos:</h4>
<p>${E(`${a("M", "xx")} = ${a("D")}\xB7(${a("\u03BA", "xx")} + ${a("\u03BD")}\xB7${a("\u03BA", "yy")})`)}</p>
<p>${E(`${a("M", "yy")} = ${a("D")}\xB7(${a("\u03BA", "yy")} + ${a("\u03BD")}\xB7${a("\u03BA", "xx")})`)}</p>
<p>${E(`${a("M", "xy")} = ${a("D")}\xB7(1 - ${a("\u03BD")})\xB7${J(a("\u03BA", "xy"), "2")}`)}</p>

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
<p style="font-size: 14pt;">${E(`${a("w", "max")} = <b>${c(C, 6)}</b>`)}</p>
</div>

<div class="success">
<h4>\u2705 Momento m\xE1ximo M<sub>xx</sub>:</h4>
<p style="font-size: 14pt;">${E(`${a("M", "xx,max")} = <b>${c(B, 4)}</b>`)}</p>
</div>

<h4>Tabla de desplazamientos (primeros 6 nodos):</h4>
<table class="bordered">
  <tr><th>Nodo</th><th>u<sub>x</sub></th><th>u<sub>y</sub></th><th>u<sub>z</sub></th></tr>
  ${ot.map((o) => `<tr><td>${o.i}</td><td>${c(o.ux, 6)}</td><td>${c(o.uy, 6)}</td><td class="${Math.abs(o.uz) > 1e-3 ? "err" : ""}">${c(o.uz, 6)}</td></tr>`).join("")}
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
    return dt`${pt(K)}`;
  }
  function Lt(t) {
    return dt`${pt(`
<style>
  .doc-container {
    font-family: 'Times New Roman', serif;
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
    background: white;
    color: #333;
    line-height: 1.6;
  }
  .doc-container h1 {
    color: #2c3e50;
    border-bottom: 3px solid #3498db;
    padding-bottom: 10px;
    font-size: 24px;
  }
  .doc-container h2 {
    color: #34495e;
    border-left: 4px solid #e74c3c;
    padding-left: 15px;
    margin-top: 30px;
    font-size: 20px;
  }
  .doc-container h3 {
    color: #7f8c8d;
    font-size: 16px;
    margin-top: 20px;
  }
  .theory-box {
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    padding: 15px;
    margin: 15px 0;
  }
  .equation-box {
    background: #fff3cd;
    border: 1px solid #ffc107;
    border-radius: 5px;
    padding: 15px;
    margin: 10px 0;
    font-family: 'Courier New', monospace;
    overflow-x: auto;
  }
  .matrix-display {
    font-family: 'Courier New', monospace;
    background: #e8f4f8;
    padding: 10px;
    border-radius: 5px;
    margin: 10px 0;
    white-space: pre;
    overflow-x: auto;
  }
  .reference-box {
    background: #d4edda;
    border: 1px solid #28a745;
    border-radius: 5px;
    padding: 15px;
    margin: 15px 0;
  }
  .warning-box {
    background: #f8d7da;
    border: 1px solid #dc3545;
    border-radius: 5px;
    padding: 15px;
    margin: 15px 0;
  }
  .info-box {
    background: #cce5ff;
    border: 1px solid #0d6efd;
    border-radius: 5px;
    padding: 15px;
    margin: 15px 0;
  }
  .benchmark-table {
    width: 100%;
    border-collapse: collapse;
    margin: 15px 0;
  }
  .benchmark-table th, .benchmark-table td {
    border: 1px solid #dee2e6;
    padding: 10px;
    text-align: left;
  }
  .benchmark-table th {
    background: #343a40;
    color: white;
  }
  .benchmark-table tr:nth-child(even) {
    background: #f8f9fa;
  }
  .file-table {
    width: 100%;
    border-collapse: collapse;
    margin: 15px 0;
    font-size: 14px;
  }
  .file-table th, .file-table td {
    border: 1px solid #dee2e6;
    padding: 8px;
  }
  .file-table th {
    background: #495057;
    color: white;
  }
  .dof-diagram {
    text-align: center;
    margin: 20px 0;
  }
  .formula {
    font-style: italic;
    color: #c0392b;
  }
</style>

<div class="doc-container">
  <h1>DOCUMENTACI\xD3N T\xC9CNICA: Elemento Shell Triangular</h1>

  <div class="info-box">
    <strong>Referencia Principal:</strong><br>
    Rama G., Marinkovic D., Zehn M. (2018)<br>
    <em>"A three-node shell element based on the discrete shear gap and assumed natural deviatoric strain approaches"</em><br>
    Journal of the Brazilian Society of Mechanical Sciences and Engineering, 40:356
  </div>

  <h2>1. Descripci\xF3n del Elemento</h2>

  <div class="theory-box">
    <p>El elemento shell de Awatif es un <strong>elemento triangular de 3 nodos</strong> con:</p>
    <ul>
      <li><strong>6 DOF por nodo</strong>: 3 traslaciones (u, v, w) + 3 rotaciones (\u03B8x, \u03B8y, \u03B8z)</li>
      <li><strong>18 DOF totales</strong> por elemento</li>
      <li><strong>Cinem\xE1tica Reissner-Mindlin</strong>: Incluye efectos de cortante transversal</li>
      <li><strong>Elemento plano</strong>: Shell = Placa + Membrana superpuestos</li>
    </ul>
  </div>

  <div class="equation-box">
    <strong>Descomposici\xF3n de Rigidez:</strong><br><br>
    [K<sub>shell</sub>] = [K<sub>plate</sub>] + [K<sub>membrane</sub>]<br><br>
    donde:<br>
    \u2022 [K<sub>plate</sub>] = [K<sub>pb</sub>] + [K<sub>ps</sub>]  (flexi\xF3n + cortante)<br>
    \u2022 [K<sub>membrane</sub>] = [K<sub>b</sub>] + [K<sub>h</sub>]  (b\xE1sica + orden superior)
  </div>

  <h3>Grados de Libertad por Nodo</h3>
  <table class="benchmark-table">
    <tr><th>DOF</th><th>Descripci\xF3n</th><th>Tipo</th><th>Parte</th></tr>
    <tr><td>u, v</td><td>Desplazamientos en el plano</td><td>Traslaci\xF3n</td><td>Membrana</td></tr>
    <tr><td>w</td><td>Deflexi\xF3n transversal</td><td>Traslaci\xF3n</td><td>Placa</td></tr>
    <tr><td>\u03B8x, \u03B8y</td><td>Rotaciones alrededor de ejes en plano</td><td>Rotaci\xF3n</td><td>Placa</td></tr>
    <tr><td>\u03B8z</td><td>Rotaci\xF3n drilling (alrededor de normal)</td><td>Rotaci\xF3n</td><td>Membrana</td></tr>
  </table>

  <h2>2. Elemento de Placa (DSG3 Modificado)</h2>

  <div class="theory-box">
    <p>La rigidez de placa se descompone en:</p>
    <div class="equation-box">
      [K<sub>p</sub>] = [K<sub>pb</sub>] + [K<sub>ps</sub>]<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;flexi\xF3n&nbsp;&nbsp;&nbsp;cortante
    </div>
  </div>

  <h3>2.1 Rigidez a Flexi\xF3n</h3>
  <div class="equation-box">
    [K<sub>pb</sub>] = \u222B\u222B<sub>(A)</sub> [B<sub>pb</sub>]<sup>T</sup> [D] [B<sub>pb</sub>] dA
  </div>

  <p><strong>Matriz de Material [D]</strong> (3\xD73):</p>
  <div class="matrix-display">
        \u250C                           \u2510
        \u2502   D    D\xB7\u03BD      0        \u2502
[D] =   \u2502  D\xB7\u03BD    D       0        \u2502
        \u2502   0     0    D\xB7(1-\u03BD)/2   \u2502
        \u2514                           \u2518

donde: D = E\xB7t\xB3 / [12\xB7(1-\u03BD\xB2)]  (rigidez flexural)
  </div>

  <p><strong>Matriz Deformaci\xF3n-Desplazamiento [B<sub>pb</sub>]</strong> (3\xD79):</p>
  <div class="matrix-display">
              1   \u250C  0    0   y'\u2082\u2083    0    0   y'\u2083\u2081    0    0   y'\u2081\u2082  \u2510
[B<sub>pb</sub>] =  \u2500\u2500\u2500  \u2502  0  -x'\u2083\u2082   0     0  -x'\u2081\u2083   0     0  -x'\u2082\u2081   0   \u2502
             2A   \u2514  0  -y'\u2082\u2083  x'\u2083\u2082   0  -y'\u2083\u2081  x'\u2081\u2083   0  -y'\u2081\u2082  x'\u2082\u2081 \u2518

donde: A = \xE1rea del elemento, x'\u1D62\u2C7C = x'\u1D62 - x'\u2C7C
  </div>

  <h3>2.2 Rigidez a Cortante (M\xE9todo DSG)</h3>

  <div class="info-box">
    <strong>DSG = Discrete Shear Gap</strong><br>
    El m\xE9todo DSG evita el <em>shear locking</em> mediante:
    <ol>
      <li>Evaluar gaps de cortante en los nodos</li>
      <li>Interpolar con funciones de forma</li>
      <li>Diferenciar para obtener deformaciones de cortante</li>
    </ol>
  </div>

  <div class="equation-box">
    [K<sub>ps</sub>] = \u222B\u222B<sub>(A)</sub> [B<sub>ps</sub>]<sup>T</sup> [F] [B<sub>ps</sub>] dA
  </div>

  <p><strong>Matriz de Material de Cortante [F]</strong> (2\xD72):</p>
  <div class="matrix-display">
        \u250C  \u03BA\xB7G\xB7t    0   \u2510
[F] =   \u2502                \u2502
        \u2514    0    \u03BA\xB7G\xB7t \u2518

donde: G = E / [2\xB7(1+\u03BD)]  (m\xF3dulo de cortante)
       \u03BA = 5/6           (factor de correcci\xF3n)
  </div>

  <h3>2.3 T\xE9cnica de Suavizado Celular</h3>
  <div class="theory-box">
    <p>El elemento se divide en <strong>3 sub-tri\xE1ngulos</strong> usando el centroide:</p>
    <div class="matrix-display">
        (3)
        /\\
       /  \\
      / M\u2081 \\
     /------\\  (0) = centroide
    (1)--M\u2082--(2)
        M\u2083
    </div>
    <p>Las matrices [B<sub>s</sub>] de los sub-tri\xE1ngulos se promedian:</p>
    <div class="equation-box">
      [B<sub>ps</sub>] = \u2153 \xB7 \u03A3\u1D62\u208C\u2081\xB3 [B<sub>s</sub><sup>M\u1D62</sup>]
    </div>
  </div>

  <h2>3. Elemento de Membrana (ANDES)</h2>

  <div class="info-box">
    <strong>ANDES = Assumed Natural Deviatoric Strains</strong><br>
    Combina la Free Formulation (FF) con deformaciones naturales asumidas.
  </div>

  <div class="equation-box">
    [K<sub>mem</sub>] = [K<sub>b</sub>] + [K<sub>h</sub>]<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b\xE1sica&nbsp;&nbsp;orden superior
  </div>

  <h3>3.1 Rigidez B\xE1sica</h3>
  <div class="equation-box">
    [K<sub>b</sub>] = V<sup>-1</sup> \xB7 [L] \xB7 [C] \xB7 [L]<sup>T</sup>
  </div>
  <p>donde V = A\xB7h (volumen), [C] = matriz de Hooke, [L] = matriz force-lumping (3\xD79)</p>

  <p><strong>Matriz de Hooke [C]</strong> (tensi\xF3n plana, 3\xD73):</p>
  <div class="matrix-display">
            E      \u250C  1    \u03BD     0      \u2510
[C] =   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500  \u2502  \u03BD    1     0      \u2502
        (1 - \u03BD\xB2)   \u2514  0    0   (1-\u03BD)/2  \u2518
  </div>

  <h3>3.2 Rigidez de Orden Superior</h3>
  <div class="theory-box">
    <p>Usa <strong>rotaciones jer\xE1rquicas</strong> para capturar flexi\xF3n en plano:</p>
    <div class="equation-box">
      \u03B8\u0304\u1D62 = \u03B8\u1D62 - \u03B8\u2080  (jer\xE1rquica = nodal - media)
    </div>
    <p>donde la rotaci\xF3n media \u03B8\u2080:</p>
    <div class="equation-box">
      \u03B8\u2080 = (1/4A) \xB7 [x'\u2082\u2083u'\u2081 + x'\u2083\u2081u'\u2082 + x'\u2081\u2082u'\u2083 + y'\u2082\u2083v'\u2081 + y'\u2083\u2081v'\u2082 + y'\u2081\u2082v'\u2083]
    </div>
  </div>

  <h3>3.3 Par\xE1metros Libres</h3>
  <table class="benchmark-table">
    <tr><th>Par\xE1metro</th><th>Valor</th><th>Descripci\xF3n</th></tr>
    <tr><td>\u03B1</td><td>1/8</td><td>Escalado DOF drilling</td></tr>
    <tr><td>\u03B2\u2080</td><td>\u03B1\xB2/4 = 1/256</td><td>Escalado orden superior</td></tr>
    <tr><td>\u03B2\u2081, \u03B2\u2083, \u03B2\u2085</td><td>1</td><td>\u2014</td></tr>
    <tr><td>\u03B2\u2082</td><td>2</td><td>\u2014</td></tr>
    <tr><td>\u03B2\u2084</td><td>0</td><td>\u2014</td></tr>
    <tr><td>\u03B2\u2086, \u03B2\u2087, \u03B2\u2088</td><td>-1</td><td>\u2014</td></tr>
    <tr><td>\u03B2\u2089</td><td>-2</td><td>\u2014</td></tr>
  </table>

  <h2>4. Funciones de Forma</h2>

  <div class="theory-box">
    <p><strong>Coordenadas de \xE1rea</strong> (coordenadas triangulares lineales):</p>
    <div class="equation-box">
N\u2081(x',y') = (1/2A) \xB7 [x'\u2082y'\u2083 - x'\u2083y'\u2082 + y'\u2082\u2083x' + x'\u2083\u2082y']
N\u2082(x',y') = (1/2A) \xB7 [x'\u2083y'\u2081 - x'\u2081y'\u2083 + y'\u2083\u2081x' + x'\u2081\u2083y']
N\u2083(x',y') = (1/2A) \xB7 [x'\u2081y'\u2082 - x'\u2082y'\u2081 + y'\u2081\u2082x' + x'\u2082\u2081y']
    </div>
    <p>Propiedades:</p>
    <ul>
      <li>N\u2081 + N\u2082 + N\u2083 = 1</li>
      <li>N\u1D62 = 1 en nodo i, 0 en otros nodos</li>
      <li>Lineal sobre el elemento</li>
    </ul>
  </div>

  <h2>5. Sistema de Coordenadas Local</h2>

  <div class="theory-box">
    <p>El sistema local (x', y', z') se define como:</p>
    <ul>
      <li><strong>eje x'</strong>: Del nodo 1 hacia el nodo 2</li>
      <li><strong>eje z'</strong>: Normal a la superficie del elemento (producto cruz)</li>
      <li><strong>eje y'</strong>: z' \xD7 x' (regla mano derecha)</li>
    </ul>
    <div class="equation-box">
z' = (r\u2082 - r\u2081) \xD7 (r\u2083 - r\u2081) / |...|
x' = (r\u2082 - r\u2081) / |r\u2082 - r\u2081|
y' = z' \xD7 x'
    </div>
  </div>

  <h2>6. Comparaci\xF3n de Teor\xEDas de Placa</h2>

  <table class="benchmark-table">
    <tr><th>Aspecto</th><th>Kirchhoff-Love</th><th>Mindlin-Reissner</th></tr>
    <tr><td>Deformaci\xF3n cortante</td><td>Despreciada</td><td>Incluida</td></tr>
    <tr><td>Normalidad</td><td>Estricta</td><td>Relajada</td></tr>
    <tr><td>Relaci\xF3n aplicable t/L</td><td>&lt; 1/20</td><td>&lt; 1/5</td></tr>
    <tr><td>DOF por nodo</td><td>3 (w, \u03B8x, \u03B8y)</td><td>3 (w, \u03B8x, \u03B8y)</td></tr>
    <tr><td>Shear locking</td><td>No</td><td>S\xED (necesita tratamiento)</td></tr>
  </table>

  <h2>7. Valores de Referencia (Benchmarks)</h2>

  <table class="benchmark-table">
    <tr><th>Test</th><th>Valor Referencia</th><th>Fuente</th></tr>
    <tr><td>Raasch Hook</td><td>w<sub>ref</sub> = 0.12535</td><td>Knight [24]</td></tr>
    <tr><td>Twisted Beam (t=0.05)</td><td>w<sub>ref</sub>=0.3431, v<sub>ref</sub>=1.390</td><td>Simo et al. [46]</td></tr>
    <tr><td>Twisted Beam (t=0.32)</td><td>w<sub>ref</sub>=1.754\xD710\u207B\xB3, v<sub>ref</sub>=5.424\xD710\u207B\xB3</td><td>MacNeal & Harder [30]</td></tr>
    <tr><td>Pinched Hemisphere</td><td>u<sub>ref</sub>=w<sub>ref</sub>=0.093</td><td>Simo et al. [46]</td></tr>
    <tr><td>Pinched Cylinder</td><td>w<sub>ref</sub>=1.8248\xD710\u207B\xB2</td><td>Belytschko [3]</td></tr>
    <tr><td>Cook's Membrane</td><td>u<sub>ref</sub>=23.91</td><td>Winkler & Plakomytis [43]</td></tr>
  </table>

  <h2>8. Implementaci\xF3n en Awatif</h2>

  <h3>8.1 Archivos Fuente</h3>
  <table class="file-table">
    <tr><th>Archivo</th><th>Contenido</th><th>Lenguaje</th></tr>
    <tr><td>awatif-fem/src/deformCpp.ts</td><td>Wrapper FEM principal</td><td>TypeScript</td></tr>
    <tr><td>awatif-fem/src/cpp/deform.cpp</td><td>Solver C++ (WebAssembly)</td><td>C++</td></tr>
    <tr><td>awatif-fem/src/analyze.ts</td><td>Post-procesamiento (momentos, tensiones)</td><td>TypeScript</td></tr>
    <tr><td>awatif-fem/src/deform.test.ts</td><td>Tests de validaci\xF3n</td><td>TypeScript</td></tr>
    <tr><td>awatif-mesh/src/getMesh.ts</td><td>Generaci\xF3n de malla triangular</td><td>TypeScript</td></tr>
  </table>

  <h3>8.2 Funciones Principales</h3>
  <div class="theory-box">
    <p><strong>deform(nodes, elements, nodeInputs, elementInputs)</strong></p>
    <ul>
      <li>Ensambla matriz de rigidez global</li>
      <li>Aplica condiciones de contorno</li>
      <li>Resuelve K\xB7U = F usando librer\xEDa Eigen</li>
    </ul>

    <p><strong>analyze(nodes, elements, deformOutputs, elementInputs)</strong></p>
    <ul>
      <li>Calcula momentos flectores (Mxx, Myy, Mxy)</li>
      <li>F\xF3rmula: M<sub>xy</sub> = f<sub>Global</sub>[2][1] \xD7 (t\xB3/12)</li>
    </ul>
  </div>

  <h3>8.3 Propiedades de Material</h3>
  <div class="equation-box">
elementInputs = {
  elasticities: Map&lt;number, number&gt;,        // E (m\xF3dulo de Young)
  elasticitiesOrthogonal: Map&lt;number, number&gt;, // Ey (para ortotr\xF3pico)
  shearModuli: Map&lt;number, number&gt;,         // G
  poissonsRatios: Map&lt;number, number&gt;,      // \u03BD
  thicknesses: Map&lt;number, number&gt;,         // t
}
  </div>

  <h2>9. Tests de Validaci\xF3n en Awatif</h2>

  <div class="reference-box">
    <h3>Test 1: Placa Isotr\xF3pica (Navier)</h3>
    <div class="equation-box">
a = b = 10 m, t = 0.15 m
E = 10 GPa, \u03BD = 0.25
q = -1000 N/m\xB2 (uniforme)
w<sub>max</sub> (anal\xEDtico) = 13.541 mm
w<sub>max</sub> (FEM, 10\xD710) \u2248 12.69 mm
    </div>
  </div>

  <div class="reference-box">
    <h3>Test 2: Placa Ortotr\xF3pica</h3>
    <div class="equation-box">
Ex = 10 GPa, Ey = 5 GPa (Ex/Ey = 2)
w<sub>max</sub> (referencia) = 16.903575 mm
    </div>
  </div>

  <div class="reference-box">
    <h3>Test 3: Membrana CST (MacNeal-Harder)</h3>
    <div class="equation-box">
Cuadrado 1\xD71 m, E = 1\xD710\u2076, \u03BD = 0.3, t = 0.01
Tensi\xF3n uniforme: \u03B5 = q/(E\xB7t)
    </div>
  </div>

  <h2>10. Referencias Bibliogr\xE1ficas</h2>

  <div class="theory-box">
    <ol>
      <li>Bletzinger KU, Bischoff M, Ramm E (2000) - M\xE9todo DSG</li>
      <li>Felippa C, Militello C (1992) - Elemento ANDES</li>
      <li>MacNeal RH, Harder RL (1985) - Problemas benchmark est\xE1ndar</li>
      <li>Nguyen-Thoi T et al. (2013) - Cell smoothing CS-FEM-DSG3</li>
      <li>Shin CM, Lee BC (2014) - Shell element con drilling DOF</li>
    </ol>
    <p><em>Esta documentaci\xF3n est\xE1 basada en el paper t\xE9cnico de Rama, Marinkovic y Zehn (2018)
    que describe la fundamentaci\xF3n te\xF3rica del elemento shell de Awatif.</em></p>
  </div>

</div>
`)}`;
  }
  const U = {
    ancho: {
      value: L.state(10),
      min: 1,
      max: 30,
      step: 0.5,
      label: "Ancho (B)",
      unit: "length"
    },
    largo: {
      value: L.state(15),
      min: 1,
      max: 30,
      step: 0.5,
      label: "Largo (L)",
      unit: "length"
    },
    espesor: {
      value: L.state(0.2),
      min: 0.05,
      max: 1,
      step: 0.05,
      label: "Espesor (t)",
      unit: "length"
    },
    moduloE: {
      value: L.state(21e4),
      min: 1e4,
      max: 5e5,
      step: 1e3,
      label: "M\xF3dulo E",
      unit: "stress"
    },
    poisson: {
      value: L.state(0.3),
      min: 0.1,
      max: 0.45,
      step: 0.05,
      label: "Poisson (\u03BD)"
    },
    mallado: {
      value: L.state(1),
      min: 0.3,
      max: 3,
      step: 0.1,
      label: "Tama\xF1o malla",
      unit: "length"
    },
    carga: {
      value: L.state(-10),
      min: -50,
      max: 50,
      step: 1,
      label: "Carga uniforme",
      unit: "force"
    }
  }, G = {
    nodes: L.state([]),
    elements: L.state([]),
    nodeInputs: L.state({}),
    elementInputs: L.state({}),
    deformOutputs: L.state({}),
    analyzeOutputs: L.state({})
  };
  L.derive(() => {
    const t = U.ancho.value.val, e = U.largo.value.val, s = U.espesor.value.val, d = U.moduloE.value.val, x = U.poisson.value.val, D = U.mallado.value.val, F = U.carga.value.val, { nodes: y, elements: m, boundaryIndices: O } = Dt({
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
          e,
          0
        ],
        [
          0,
          e,
          0
        ]
      ],
      polygon: [
        0,
        1,
        2,
        3
      ],
      maxMeshSize: D
    });
    G.nodeInputs.val = {
      supports: new Map(O.map((n) => [
        n,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])),
      loads: new Map(y.map((n, i) => [
        i,
        [
          0,
          0,
          F,
          0,
          0,
          0
        ]
      ]))
    }, G.nodes.val = y, G.elements.val = m;
    const S = d / (2 * (1 + x));
    G.elementInputs.val = {
      elasticities: new Map(m.map((n, i) => [
        i,
        d
      ])),
      elasticitiesOrthogonal: new Map(m.map((n, i) => [
        i,
        d
      ])),
      thicknesses: new Map(m.map((n, i) => [
        i,
        s
      ])),
      poissonsRatios: new Map(m.map((n, i) => [
        i,
        x
      ])),
      shearModuli: new Map(m.map((n, i) => [
        i,
        S
      ]))
    }, G.deformOutputs.val = Et(y, m, G.nodeInputs.val, G.elementInputs.val), G.analyzeOutputs.val = kt(y, m, G.elementInputs.val, G.deformOutputs.val);
  });
  const tt = L.state(""), et = L.state(void 0), st = L.state(false);
  L.derive(() => {
    if (tt.val === "Report") {
      const t = at({
        template: bt,
        data: G
      });
      et.val = t;
    }
    if (tt.val === "Code") {
      const t = at({
        template: Ot,
        data: G
      });
      et.val = t;
    }
    if (tt.val === "Docs") {
      const t = at({
        template: Lt,
        data: G
      });
      et.val = t;
    }
    if (tt.val === "Print") {
      const t = at({
        template: bt,
        data: G
      }), e = window.open("", "_blank");
      if (e) {
        const s = (t == null ? void 0 : t.innerHTML) || "";
        e.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Plate Shell Thin - Report</title>
        </head>
        <body>
          ${s}
        </body>
        </html>
      `), e.document.close(), e.focus(), setTimeout(() => e.print(), 500);
      }
    }
  });
  const ft = document.createElement("style");
  ft.textContent = `
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
  document.head.appendChild(ft);
  const lt = L.state(true), Z = document.createElement("button");
  Z.className = "toolbar-toggle";
  Z.innerHTML = "\u2212";
  Z.title = "Ocultar/Mostrar botones";
  Z.onclick = () => {
    lt.val = !lt.val, lt.val ? (document.body.classList.remove("toolbar-hidden"), Z.innerHTML = "\u2212", Z.classList.remove("collapsed")) : (document.body.classList.add("toolbar-hidden"), Z.innerHTML = "+", Z.classList.add("collapsed"));
  };
  document.body.append(St(U), yt({
    mesh: G,
    settingsObj: {
      nodes: false,
      deformedShape: true,
      loads: false,
      shellResults: "displacementZ"
    }
  }), Mt(G), wt({
    position: "bottom-center"
  }), Ct({
    dialogBody: et
  }), zt({
    clickedButton: tt,
    buttons: [
      "Report",
      "Code",
      "Docs",
      "Print"
    ],
    sourceCode: "https://github.com/GiorgioBurbanelli89/awatif-ejemplos/tree/master/plate-shell-thin",
    author: "https://github.com/GiorgioBurbanelli89"
  }), Z);
  const Pt = new MutationObserver((t) => {
    t.forEach((e) => {
      e.addedNodes.forEach((s) => {
        var _a, _b, _c;
        if (s instanceof HTMLElement) {
          const d = ((_a = s.querySelector) == null ? void 0 : _a.call(s, '[class*="dialog"]')) || (((_c = (_b = s.className) == null ? void 0 : _b.includes) == null ? void 0 : _c.call(_b, "dialog")) ? s : null);
          if (d && !d.querySelector(".dialog-maximize")) {
            const x = document.createElement("button");
            x.className = "dialog-maximize", x.innerHTML = "\u26F6", x.title = "Maximizar/Restaurar", x.onclick = (D) => {
              D.stopPropagation(), st.val = !st.val, st.val ? (document.body.classList.add("dialog-maximized"), x.innerHTML = "\u26F6") : (document.body.classList.remove("dialog-maximized"), x.innerHTML = "\u26F6");
            }, d.style.position = "relative", d.appendChild(x);
          }
        }
      });
    });
  });
  Pt.observe(document.body, {
    childList: true,
    subtree: true
  });
  L.derive(() => {
    et.val || (document.body.classList.remove("dialog-maximized"), st.val = false);
  });
});
