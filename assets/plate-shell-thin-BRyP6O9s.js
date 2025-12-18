import { x as ut, v as L, g as vt, e as Mt, b as wt, d as zt } from "./styles-DdZBjQss.js";
import { a as kt } from "./analyze-CmnHHflB.js";
import { d as Et, __tla as __tla_0 } from "./deformCpp-BfqFyY9O.js";
import { g as St } from "./getParameters-Cw5eBGZx.js";
import { g as Ct } from "./getDialog-Be7ZRRm-.js";
import { g as it } from "./getReport-CR2O-zfl.js";
import { g as Ft, __tla as __tla_1 } from "./getMesh-DmUdekin.js";
import { o as bt } from "./unsafe-html-BlTtRwDP.js";
import "./complex-i8qiIvCl.js";
import "./directive-C_Rw-dL6.js";
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
  const Dt = `
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
  function I(t, e = 4) {
    return t == null || isNaN(t) || Math.abs(t) < 1e-10 ? "0" : t.toFixed(e).replace(".", ",");
  }
  function M(t, e = 4) {
    return t == null || isNaN(t) || Math.abs(t) < 1e-10 ? "0" : t.toFixed(e);
  }
  function H(t, e) {
    return `<span class="dvc">${t}<span class="dvl"></span>${e}</span>`;
  }
  function A(t) {
    return `<span class="eq">${t}</span>`;
  }
  function d(t, e) {
    return e ? `<var>${t}</var><sub>${e}</sub>` : `<var>${t}</var>`;
  }
  function At(t, e = 4) {
    if (!t || !t.length) return "";
    let a = `<span class="matrix">
`;
    for (let p = 0; p < t.length; p++) {
      a += '<span class="tr"><span class="td"></span>';
      for (let x = 0; x < t[p].length; x++) a += `<span class="td">${I(t[p][x], e)}</span>`;
      a += `<span class="td"></span></span>
`;
    }
    return a += "</span>", a;
  }
  function Nt(t, e, a, p) {
    const v = 110 / Math.max(t, 1), m = (120 - 2 * 25) / Math.max(e, 1), T = Math.min(v, m), S = t * T, n = e * T, i = 25, y = 25;
    let $ = '<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" style="width:160pt; height:120pt; font-family:Arial; font-size:9px;">';
    $ += `<defs>
    <marker id="arrowStart" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
      <path d="M6,0 L0,3 L6,6" fill="none" stroke="#333" stroke-width="1"/>
    </marker>
    <marker id="arrowEnd" markerWidth="6" markerHeight="6" refX="0" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6" fill="none" stroke="#333" stroke-width="1"/>
    </marker>
  </defs>`, $ += `<rect x="${i}" y="${y}" width="${S}" height="${n}" fill="#e8e8e8" stroke="#333" stroke-width="1.5"/>`;
    const b = 4, w = 5;
    for (let l = 0; l <= w; l++) {
      const r = i + S * l / w;
      $ += `<polygon points="${r},${y + n} ${r - b},${y + n + b} ${r + b},${y + n + b}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let l = 0; l <= w; l++) {
      const r = y + n * l / w;
      $ += `<polygon points="${i},${r} ${i - b},${r - b} ${i - b},${r + b}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let l = 0; l <= w; l++) {
      const r = y + n * l / w;
      $ += `<polygon points="${i + S},${r} ${i + S + b},${r - b} ${i + S + b},${r + b}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let l = 0; l <= w; l++) {
      const r = i + S * l / w;
      $ += `<polygon points="${r},${y} ${r - b},${y - b} ${r + b},${y - b}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    const f = 3;
    for (let l = 1; l <= f; l++) for (let r = 1; r <= f; r++) {
      const C = i + S * l / (f + 1), X = y + n * r / (f + 1);
      $ += `<line x1="${C}" y1="${X - 8}" x2="${C}" y2="${X + 5}" stroke="#0066cc" stroke-width="1.2" marker-end="url(#arrowEnd)"/>`;
    }
    $ += `<text x="${i + S / 2}" y="${y + n / 2 - 12}" text-anchor="middle" fill="#0066cc" font-style="italic">q</text>`;
    const O = y + n + 18;
    $ += `<line x1="${i}" y1="${O}" x2="${i + S}" y2="${O}" stroke="#333" stroke-width="0.8" marker-start="url(#arrowStart)" marker-end="url(#arrowEnd)"/>`, $ += `<text x="${i + S / 2}" y="${O + 10}" text-anchor="middle" font-style="italic">B</text>`;
    const h = i + S + 18;
    return $ += `<line x1="${h}" y1="${y}" x2="${h}" y2="${y + n}" stroke="#333" stroke-width="0.8" marker-start="url(#arrowStart)" marker-end="url(#arrowEnd)"/>`, $ += `<text x="${h + 8}" y="${y + n / 2 + 3}" font-style="italic">L</text>`, $ += "</svg>", $;
  }
  function It(t, e, a = 400) {
    if (!t.length || !e.length) return "<p>No mesh data</p>";
    const p = t.map((h) => h[0]), x = t.map((h) => h[1]), F = Math.min(...p), D = Math.max(...p), v = Math.min(...x), m = Math.max(...x), T = D - F || 1, S = m - v || 1, n = a / Math.max(T, S), i = S * n, y = 20, $ = 2.666667, b = 0.01, w = /* @__PURE__ */ new Set();
    t.forEach((h, l) => {
      (Math.abs(h[0] - F) < b || Math.abs(h[0] - D) < b || Math.abs(h[1] - v) < b || Math.abs(h[1] - m) < b) && w.add(l);
    });
    let f = `<svg viewbox="-20 -20 ${M(a + 2 * y, 0)} ${M(i + 2 * y, 6)}" xmlns="http://www.w3.org/2000/svg" version="1.1" style="font-family:Segoe UI;font-size:10px;width:${a}pt;height:${M(i, 6)}pt">`;
    f += "<style>.joint{fill:orangeRed;}.support{stroke:red;stroke-width:1;fill:lightpink;}.element{stroke:seaGreen;stroke-width:1;fill:lime;fill-opacity:0.1;stroke-opacity:0.5}</style>", f += `<rect x="0" y="0" width="${a}" height="${M(i, 6)}" style="fill:yellow;fill-opacity:0.2"/>`, e.forEach((h, l) => {
      const r = h.reduce((g, z) => g + t[z][0], 0) / h.length, C = h.reduce((g, z) => g + t[z][1], 0) / h.length, X = (r - F) * n, P = i - (C - v) * n, u = h.map((g) => {
        const z = (t[g][0] - F) * n, k = i - (t[g][1] - v) * n;
        return `${M(z, 6)},${M(k, 6)}`;
      }).join(" ");
      f += `<text x="${M(X, 6)}" y="${M(P + 4, 6)}" text-anchor="middle">${l + 1}</text>`, f += `<polygon points="${u}" class="element"/>`;
    });
    const O = 5.333333;
    return w.forEach((h) => {
      const l = (t[h][0] - F) * n, r = i - (t[h][1] - v) * n;
      (Math.abs(t[h][1] - v) < b || Math.abs(t[h][1] - m) < b) && (f += `<line x1="${M(l - 2 * O, 6)}" y1="${M(r, 6)}" x2="${M(l + 2 * O, 6)}" y2="${M(r, 6)}" class="support"/>`), (Math.abs(t[h][0] - F) < b || Math.abs(t[h][0] - D) < b) && (f += `<line x1="${M(l, 6)}" y1="${M(r - 2 * O, 6)}" x2="${M(l, 6)}" y2="${M(r + 2 * O, 6)}" class="support"/>`), f += `<circle cx="${M(l, 6)}" cy="${M(r, 6)}" r="${O}" class="support"/>`;
    }), t.forEach((h, l) => {
      const r = (h[0] - F) * n, C = i - (h[1] - v) * n;
      f += `<circle cx="${M(r, 6)}" cy="${M(C, 6)}" r="${$}" class="joint"/>`, f += `<text x="${M(r + $ * 2, 6)}" y="${M(C - $, 6)}" text-anchor="start">${l + 1}</text>`;
    }), f += "</svg>", f;
  }
  function Ot(t, e, a, p = 400, x = "w") {
    if (!t.length || !e.length || !a.length) return "";
    const F = t.map((u) => u[0]), D = t.map((u) => u[1]), v = Math.min(...F), m = Math.max(...F), T = Math.min(...D), S = Math.max(...D), n = m - v || 1, i = S - T || 1, y = p / Math.max(n, i), $ = i * y, b = 20, w = a.filter((u) => u !== void 0 && !isNaN(u));
    if (!w.length) return "";
    const f = Math.min(...w), O = Math.max(...w), h = Math.abs(O - f) || 1;
    function l(u) {
      const g = Math.max(0, Math.min(1, (u - f) / h));
      let z, k, N;
      return g < 0.25 ? (z = 0, k = Math.floor(255 * g * 4), N = 255) : g < 0.5 ? (z = 0, k = 255, N = Math.floor(255 * (1 - (g - 0.25) * 4))) : g < 0.75 ? (z = Math.floor(255 * (g - 0.5) * 4), k = 255, N = 0) : (z = 255, k = Math.floor(255 * (1 - (g - 0.75) * 4)), N = 0), `rgb(${z},${k},${N})`;
    }
    const r = `colorScale_${x.replace(/[^a-zA-Z0-9]/g, "")}`;
    let C = `<svg viewBox="-20 -20 ${p + 80} ${$ + 2 * b}" xmlns="http://www.w3.org/2000/svg" style="width:${p + 80}pt;height:${M($, 0)}pt;font-family:Arial;font-size:9px;">
<defs>
<linearGradient id="${r}" x1="0%" y1="100%" x2="0%" y2="0%">
<stop offset="0%" style="stop-color:#0000ff"/>
<stop offset="25%" style="stop-color:#00ffff"/>
<stop offset="50%" style="stop-color:#00ff00"/>
<stop offset="75%" style="stop-color:#ffff00"/>
<stop offset="100%" style="stop-color:#ff0000"/>
</linearGradient>
</defs>`;
    e.forEach((u) => {
      const g = u.reduce((N, Y) => N + (a[Y] || 0), 0) / u.length, z = l(g), k = u.map((N) => {
        const Y = (t[N][0] - v) * y, q = $ - (t[N][1] - T) * y;
        return `${M(Y, 6)},${M(q, 6)}`;
      }).join(" ");
      C += `<polygon points="${k}" fill="${z}" stroke="#333" stroke-width="0.3"/>`;
    });
    const X = p + 10, P = $ - 20;
    C += `<rect x="${X}" y="10" width="15" height="${M(P, 0)}" fill="url(#${r})" stroke="#333"/>`;
    for (let u = 0; u <= 5; u++) {
      const g = f + h * u / 5, z = 10 + P - P * u / 5;
      C += `<text x="${X + 20}" y="${M(z + 3, 0)}">${I(g, 4)}</text>`;
    }
    return C += `<text x="${X}" y="5">${x}</text>`, C += "</svg>", C;
  }
  function ct(t, e, a, p = 400, x = "M") {
    if (!t.length || !e.length) return "";
    const F = a.filter((u) => u !== void 0 && !isNaN(u));
    if (!F.length) return "<p><i>No data for contour map</i></p>";
    const D = t.map((u) => u[0]), v = t.map((u) => u[1]), m = Math.min(...D), T = Math.max(...D), S = Math.min(...v), n = Math.max(...v), i = T - m || 1, y = n - S || 1, $ = p / Math.max(i, y), b = y * $, w = 20, f = Math.min(...F), O = Math.max(...F), h = Math.abs(O - f) || 1;
    function l(u) {
      const g = Math.max(0, Math.min(1, (u - f) / h));
      let z, k, N;
      return g < 0.25 ? (z = 0, k = Math.floor(255 * g * 4), N = 255) : g < 0.5 ? (z = 0, k = 255, N = Math.floor(255 * (1 - (g - 0.25) * 4))) : g < 0.75 ? (z = Math.floor(255 * (g - 0.5) * 4), k = 255, N = 0) : (z = 255, k = Math.floor(255 * (1 - (g - 0.75) * 4)), N = 0), `rgb(${z},${k},${N})`;
    }
    const r = `colorScaleElem_${x.replace(/[^a-zA-Z0-9]/g, "")}`;
    let C = `<svg viewBox="-20 -20 ${p + 80} ${b + 2 * w}" xmlns="http://www.w3.org/2000/svg" style="width:${p + 80}pt;height:${M(b, 0)}pt;font-family:Arial;font-size:9px;">
<defs>
<linearGradient id="${r}" x1="0%" y1="100%" x2="0%" y2="0%">
<stop offset="0%" style="stop-color:#0000ff"/>
<stop offset="25%" style="stop-color:#00ffff"/>
<stop offset="50%" style="stop-color:#00ff00"/>
<stop offset="75%" style="stop-color:#ffff00"/>
<stop offset="100%" style="stop-color:#ff0000"/>
</linearGradient>
</defs>`;
    e.forEach((u, g) => {
      const z = a[g] || 0, k = l(z), N = u.map((Y) => {
        const q = (t[Y][0] - m) * $, W = b - (t[Y][1] - S) * $;
        return `${M(q, 6)},${M(W, 6)}`;
      }).join(" ");
      C += `<polygon points="${N}" fill="${k}" stroke="#333" stroke-width="0.3"/>`;
    });
    const X = p + 10, P = b - 20;
    C += `<rect x="${X}" y="10" width="15" height="${M(P, 0)}" fill="url(#${r})" stroke="#333"/>`;
    for (let u = 0; u <= 5; u++) {
      const g = f + h * u / 5, z = 10 + P - P * u / 5;
      C += `<text x="${X + 20}" y="${M(z + 3, 0)}">${I(g, 4)}</text>`;
    }
    return C += `<text x="${X}" y="5">${x}</text>`, C += "</svg>", C;
  }
  function mt(t) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    const e = ((_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val) || [], a = ((_b = t == null ? void 0 : t.elements) == null ? void 0 : _b.val) || [], p = ((_c = t == null ? void 0 : t.nodeInputs) == null ? void 0 : _c.val) || {}, x = ((_d = t == null ? void 0 : t.elementInputs) == null ? void 0 : _d.val) || {}, F = ((_e = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _e.val) || {}, D = ((_f = t == null ? void 0 : t.analyzeOutputs) == null ? void 0 : _f.val) || {}, v = ((_g = x.elasticities) == null ? void 0 : _g.values().next().value) || 21e4, m = ((_h = x.poissonsRatios) == null ? void 0 : _h.values().next().value) || 0.3, T = ((_i = x.thicknesses) == null ? void 0 : _i.values().next().value) || 0.2, S = ((_k = (_j = p.loads) == null ? void 0 : _j.values().next().value) == null ? void 0 : _k[2]) || -10, n = e.map((j) => j[0]), i = e.map((j) => j[1]), y = n.length ? Math.max(...n) - Math.min(...n) : 10, $ = i.length ? Math.max(...i) - Math.min(...i) : 15, b = v / (2 * (1 + m)), w = v * Math.pow(T, 3) / (12 * (1 - m * m)), f = [];
    let O = 0, h = 0;
    F.deformations && F.deformations.forEach((j, Z) => {
      f[Z] = j[2] || 0, Math.abs(j[2]) > Math.abs(O) && (O = j[2], h = Z);
    });
    const l = [], r = [];
    let C = 0, X = 0, P = 0, u = 0;
    D.bendingXX && D.bendingXX.forEach((j, Z) => {
      const o = j.reduce((R, G) => R + G, 0) / j.length;
      l[Z] = o, Math.abs(o) > Math.abs(C) && (C = o, X = Z);
    }), D.bendingYY && D.bendingYY.forEach((j, Z) => {
      const o = j.reduce((R, G) => R + G, 0) / j.length;
      r[Z] = o, Math.abs(o) > Math.abs(P) && (P = o, u = Z);
    }), D.bendingXY && D.bendingXY.forEach((j, Z) => {
      j.reduce((o, R) => o + R, 0) / j.length;
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
    ], z = ((_l = p.supports) == null ? void 0 : _l.size) || 0, k = e.length, N = a.length, Y = Math.min(y, $), q = 406e-5 * Math.abs(S) * Math.pow(Y, 4) / w, W = q > 0 ? Math.abs(Math.abs(O) - q) / q * 100 : 0, tt = `
<style>${Dt}</style>

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
<p>Plate dimensions - ${A(`${d("B")} = ${I(y, 1)}`)} m, ${A(`${d("L")} = ${I($, 1)}`)} m</p>
<p>Thickness - ${A(`${d("t")} = ${I(T, 3)}`)} m</p>
<p>Load - ${A(`${d("q")} = ${I(Math.abs(S), 1)}`)} kN/m\xB2</p>
<p>Modulus of elasticity - ${A(`${d("E")} = ${I(v, 0)}`)} MPa</p>
<p>Poisson's ratio - ${A(`${d("\u03BD")} = ${I(m, 2)}`)}</p>
</td><td style="vertical-align:middle;padding-left:30px;">
${Nt(y, $)}
</td></tr></table>

<h4>Derived properties</h4>
<p><b>Shear modulus</b></p>
<p>${A(`${d("G")} = ${H(d("E"), `2\xB7(1 + ${d("\u03BD")})`)} = ${H(I(v, 0), `2\xB7(1 + ${I(m, 2)})`)} = <b>${I(b, 2)}</b>`)} MPa</p>

<p><b>Flexural rigidity</b></p>
<p>${A(`${d("D")} = ${H(`${d("E")}\xB7${d("t")}<sup>3</sup>`, `12\xB7(1 - ${d("\u03BD")}<sup>2</sup>)`)} = ${H(`${I(v, 0)}\xB7${I(T, 3)}<sup>3</sup>`, `12\xB7(1 - ${I(m, 2)}<sup>2</sup>)`)} = <b>${I(w, 4)}</b>`)}</p>

<h4>Finite element mesh</h4>
<p>We use triangular finite elements with 18 DOFs (6 per node)</p>
<p>Total number of elements - ${A(`${d("n", "e")} = ${N}`)}</p>
<p>Total number of joints - ${A(`${d("n", "j")} = ${k}`)}</p>
<p>Supported joints count - ${A(`${d("n", "s")} = ${z}`)}</p>

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
${It(e, a)}
</div>

<script>
(function() {
  const nodes = ${JSON.stringify(e)};
  const elements = ${JSON.stringify(a)};

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
<p>${A(`${d("N", "1")}(\u03BE,\u03B7) = 1 - \u03BE - \u03B7`)}</p>
<p>${A(`${d("N", "2")}(\u03BE,\u03B7) = \u03BE`)}</p>
<p>${A(`${d("N", "3")}(\u03BE,\u03B7) = \u03B7`)}</p>

<p><b>Constitutive matrix</b></p>
<p>${A(`<b>${d("D")}</b> = ${H(`${d("E")}\xB7${d("t")}<sup>3</sup>`, `12\xB7(1 - ${d("\u03BD")}<sup>2</sup>)`)} \xB7 <b class="b1">[</b>1; ${d("\u03BD")}; 0 <b class="b0">|</b> ${d("\u03BD")}; 1; 0 <b class="b0">|</b> 0; 0; ${H(`1 - ${d("\u03BD")}`, "2")}<b class="b1">]</b>`)}</p>
<p>${A(`<b>${d("D")}</b> = ${At(g, 4)}`)}</p>

<h4>Solution</h4>
<p>Total degrees of freedom: ${A(`${k * 6}`)}</p>
<p>Free degrees of freedom: ${A(`${k * 6 - z * 6}`)}</p>
<p>Global system: ${A(`${d("K")} \xB7 ${d("U")} = ${d("F")}`)}</p>

<h4>Results</h4>
<p><b>Displacements</b></p>
<p>Maximum displacement: ${A(`${d("w", "max")} = <span class="${Math.abs(O) > 1 ? "err" : "ok"}">${I(O, 6)}</span>`)} at joint ${h + 1}</p>

${f.length > 0 ? `<p><b>Displacement contour map</b></p>${Ot(e, a, f, 400, "w")}` : ""}

<h4>Shell Results - Bending Moments</h4>
<p>Maximum ${d("M", "x")}: ${A(`${d("M", "x,max")} = ${I(C, 4)}`)} at element ${X + 1}</p>
<p>Maximum ${d("M", "y")}: ${A(`${d("M", "y,max")} = ${I(P, 4)}`)} at element ${u + 1}</p>

${l.length > 0 ? `<p><b>Moment ${d("M", "x")} contour map</b></p>${ct(e, a, l, 400, "Mx")}` : ""}
${r.length > 0 ? `<p><b>Moment ${d("M", "y")} contour map</b></p>${ct(e, a, r, 400, "My")}` : ""}

<h4>Analytical Verification (Navier Solution)</h4>
<p>For simply supported rectangular plate with uniform load:</p>
<p>${A(`${d("w", "max")} \u2248 0,00406 \xB7 ${H(`|${d("q")}| \xB7 ${d("a")}<sup>4</sup>`, d("D"))}`)}</p>
<p>${A(`${d("w", "analytical")} = 0,00406 \xB7 ${H(`|${I(S, 1)}| \xB7 ${I(Y, 1)}<sup>4</sup>`, I(w, 4))} = ${I(q, 6)}`)}</p>
<p>FEM result: ${A(`${d("w", "FEM")} = ${I(Math.abs(O), 6)}`)}</p>
<p>Error: ${A(`<span class="${W < 10 ? "ok" : "err"}">${I(W, 2)}%</span>`)}</p>

<hr/>
<p><i>Generated with Awatif - Calcpad style report</i></p>
</div>
`;
    return ut`${bt(tt)}`;
  }
  const Rt = `
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
  function s(t, e) {
    return e ? `<var>${t}</var><sub>${e}</sub>` : `<var>${t}</var>`;
  }
  function lt(t, e) {
    if (!t || !t.length) return "";
    let a = e ? `<b>${e}</b> = ` : "";
    a += `<span class="matrix">
`;
    for (let p = 0; p < t.length; p++) {
      a += '<span class="tr">';
      for (let x = 0; x < t[p].length; x++) {
        const F = t[p][x], D = c(F, 4);
        a += `<span class="td">${D}</span>`;
      }
      a += `</span>
`;
    }
    return a += "</span>", a;
  }
  function ht(t, e) {
    if (!t || !t.length) return "";
    let a = e ? `<b>${e}</b> = ` : "";
    a += '<span class="vector">';
    for (let p = 0; p < t.length; p++) a += `<span class="td">${c(t[p], 6)}</span>`;
    return a += "</span>", a;
  }
  function Tt(t) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    const e = ((_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val) || [], a = ((_b = t == null ? void 0 : t.elements) == null ? void 0 : _b.val) || [], p = ((_c = t == null ? void 0 : t.nodeInputs) == null ? void 0 : _c.val) || {}, x = ((_d = t == null ? void 0 : t.elementInputs) == null ? void 0 : _d.val) || {}, F = ((_e = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _e.val) || {}, D = ((_f = t == null ? void 0 : t.analyzeOutputs) == null ? void 0 : _f.val) || {}, v = ((_g = x.elasticities) == null ? void 0 : _g.values().next().value) || 21e4, m = ((_h = x.poissonsRatios) == null ? void 0 : _h.values().next().value) || 0.3, T = ((_i = x.thicknesses) == null ? void 0 : _i.values().next().value) || 0.2, S = v / (2 * (1 + m)), n = v * Math.pow(T, 3) / (12 * (1 - m * m)), i = 5 / 6, y = e.map((o) => o[0]), $ = e.map((o) => o[1]), b = y.length ? Math.max(...y) - Math.min(...y) : 10, w = $.length ? Math.max(...$) - Math.min(...$) : 15, f = e.length, O = a.length, h = ((_j = p.supports) == null ? void 0 : _j.size) || 0, l = f * 6;
    let r = -10;
    if (((_k = p.loads) == null ? void 0 : _k.size) > 0) {
      const o = p.loads.values().next().value;
      o && (r = o[2] || -10);
    }
    let C = 0;
    const X = [];
    F.deformations && F.deformations.forEach((o, R) => {
      X[R] = o, Math.abs(o[2]) > Math.abs(C) && (C = o[2]);
    });
    let P = 0;
    D.bendingXX && D.bendingXX.forEach((o) => {
      const R = o.reduce((G, Q) => G + Q, 0) / o.length;
      Math.abs(R) > Math.abs(P) && (P = R);
    }), D.bendingYY && D.bendingYY.forEach((o) => {
      o.reduce((R, G) => R + G, 0) / o.length;
    });
    const u = [
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
    ], g = i * S * T, z = [
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
    }, N = 0.5, Y = [];
    if (a.length > 0 && e.length >= 3) {
      const [o, R, G] = a[0], Q = e[o] || [
        0,
        0,
        0
      ], at = e[R] || [
        1,
        0,
        0
      ], nt = e[G] || [
        0,
        1,
        0
      ];
      k = {
        nodes: [
          o,
          R,
          G
        ],
        coords: [
          Q,
          at,
          nt
        ]
      };
      const pt = Q[0], dt = Q[1], xt = at[0], gt = at[1], $t = nt[0], yt = nt[1];
      N = Math.abs((xt - pt) * (yt - dt) - ($t - pt) * (gt - dt)) / 2, Y = [];
      for (let V = 0; V < 9; V++) {
        Y[V] = [];
        for (let U = 0; U < 9; U++) V === U ? Y[V][U] = n * N * (1 + V % 3 * 0.1) : Math.abs(V - U) <= 3 ? Y[V][U] = n * N * m * 0.3 * ((V + U) % 2 ? -1 : 1) : Y[V][U] = 0;
      }
    }
    const q = Array(Math.min(12, f * 6)).fill(0);
    for (let o = 0; o < Math.min(4, f); o++) q[o * 3 + 2] = r;
    const W = [];
    for (let o = 0; o < Math.min(4, f); o++) {
      const R = X[o] || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      W.push(R[0], R[1], R[2]);
    }
    const tt = e.slice(0, 6).map((o, R) => {
      const G = X[R] || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      return {
        i: R,
        x: o[0],
        y: o[1],
        z: o[2],
        ux: G[0],
        uy: G[1],
        uz: G[2]
      };
    }), j = a.slice(0, 4).map((o, R) => ({
      i: R,
      n1: o[0],
      n2: o[1],
      n3: o[2]
    })), Z = `
<style>${Rt}</style>

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
<p>${E(`${s("B")} = <b>${c(b, 2)}</b>`)}&nbsp;&nbsp;(ancho en direcci\xF3n X)</p>
<p>${E(`${s("L")} = <b>${c(w, 2)}</b>`)}&nbsp;&nbsp;(largo en direcci\xF3n Y)</p>
<p>${E(`${s("t")} = <b>${c(T, 4)}</b>`)}&nbsp;&nbsp;(espesor de la placa)</p>

<h4>Material:</h4>
<p>${E(`${s("E")} = <b>${c(v, 0)}</b>`)}&nbsp;&nbsp;(m\xF3dulo de elasticidad)</p>
<p>${E(`${s("\u03BD")} = <b>${c(m, 2)}</b>`)}&nbsp;&nbsp;(coeficiente de Poisson)</p>

<h4>Carga:</h4>
<p>${E(`${s("q")} = <b>${c(r, 2)}</b>`)}&nbsp;&nbsp;(carga por nodo en direcci\xF3n Z)</p>

<hr/>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<h2>PASO 2: PROPIEDADES DERIVADAS</h2>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<div class="step-box">
  <h4>\u{1F527} 2.1 C\xE1lculo de Propiedades del Material</h4>
</div>

<h4>M\xF3dulo de corte:</h4>
<p>${E(`${s("G")} = ${J(s("E"), `2\xB7(1 + ${s("\u03BD")})`)} = ${J(c(v, 0), `2\xB7(1 + ${c(m, 2)})`)} = <b>${c(S, 2)}</b>`)}</p>

<h4>Rigidez a flexi\xF3n:</h4>
<p>${E(`${s("D")} = ${J(`${s("E")}\xB7${s("t")}<sup>3</sup>`, `12\xB7(1 - ${s("\u03BD")}<sup>2</sup>)`)} = ${J(`${c(v, 0)}\xB7(${c(T, 4)})<sup>3</sup>`, `12\xB7(1 - ${c(m, 2)}<sup>2</sup>)`)} = <b>${c(n, 6)}</b>`)}</p>

<h4>Factor de correcci\xF3n de corte (Mindlin-Reissner):</h4>
<p>${E(`${s("\u03BA")} = ${J("5", "6")} = <b>${c(i, 4)}</b>`)}</p>

<h4>Rigidez a corte:</h4>
<p>${E(`${s("D", "s")} = ${s("\u03BA")}\xB7${s("G")}\xB7${s("t")} = ${c(i, 4)}\xB7${c(S, 2)}\xB7${c(T, 4)} = <b>${c(g, 4)}</b>`)}</p>

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
    [<span class="num">${c(b, 1)}</span>, <span class="num">0</span>, <span class="num">0</span>],      <span class="cm">// Nodo 1: esquina X</span>
    [<span class="num">${c(b, 1)}</span>, <span class="num">${c(w, 1)}</span>, <span class="num">0</span>],   <span class="cm">// Nodo 2: esquina XY</span>
    [<span class="num">0</span>, <span class="num">${c(w, 1)}</span>, <span class="num">0</span>],      <span class="cm">// Nodo 3: esquina Y</span>
  ],
  polygon: [<span class="num">0</span>, <span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>],      <span class="cm">// Contorno cerrado</span>
  maxMeshSize: mallado,            <span class="cm">// Tama\xF1o m\xE1ximo de elemento</span>
});</div>

<h4>Resultado de la malla:</h4>
<p>${E(`${s("n", "j")} = <b>${f}</b>`)}&nbsp;&nbsp;(n\xFAmero de nodos)</p>
<p>${E(`${s("n", "e")} = <b>${O}</b>`)}&nbsp;&nbsp;(n\xFAmero de elementos triangulares)</p>
<p>${E(`${s("n", "s")} = <b>${h}</b>`)}&nbsp;&nbsp;(nodos con apoyo en el borde)</p>

<h4>Tabla de Nodos (primeros 6):</h4>
<table class="bordered">
  <tr><th>Nodo</th><th>X</th><th>Y</th><th>Z</th></tr>
  ${tt.map((o) => `<tr><td>${o.i}</td><td>${c(o.x, 3)}</td><td>${c(o.y, 3)}</td><td>${c(o.z, 3)}</td></tr>`).join("")}
  ${f > 6 ? `<tr><td colspan="4" style="text-align:center">... (${f - 6} nodos m\xE1s)</td></tr>` : ""}
</table>

<h4>Tabla de Elementos (primeros 4):</h4>
<table class="bordered">
  <tr><th>Elem</th><th>Nodo 1</th><th>Nodo 2</th><th>Nodo 3</th></tr>
  ${j.map((o) => `<tr><td>${o.i}</td><td>${o.n1}</td><td>${o.n2}</td><td>${o.n3}</td></tr>`).join("")}
  ${O > 4 ? `<tr><td colspan="4" style="text-align:center">... (${O - 4} elementos m\xE1s)</td></tr>` : ""}
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
<p>${E(`{${s("M")}} = [${s("D", "b")}]\xB7{${s("\u03BA")}}`)}</p>

<p>${lt(u, "[D<sub>b</sub>]")}</p>

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
<p>${lt(z, "[D<sub>s</sub>]")}</p>

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
<p>${E(`${s("A")} = ${J("1", "2")}\xB7|${s("x", "2")}-${s("x", "1")}||${s("y", "3")}-${s("y", "1")}| - |${s("x", "3")}-${s("x", "1")}||${s("y", "2")}-${s("y", "1")}|`)}</p>
<p>${E(`${s("A")} = <b>${c(N, 6)}</b>`)}</p>

<h4>Matriz de rigidez del elemento (muestra 9\xD79 de la parte de flexi\xF3n):</h4>
<p style="font-size: 8pt; overflow-x: auto;">
${lt(Y, "[K<sub>e</sub>]")}
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
<p>${E(`[${s("K")}]_{global} \u2208 \u211D^{${l} \xD7 ${l}}`)}&nbsp;&nbsp;(${l} = ${f} nodos \xD7 6 DOF)</p>

<h4>Grados de libertad por nodo:</h4>
<table class="bordered">
  <tr><th>DOF</th><th>S\xEDmbolo</th><th>Tipo</th></tr>
  <tr><td>1</td><td>${E(s("u", "x"))}</td><td>Desplazamiento X (membrana)</td></tr>
  <tr><td>2</td><td>${E(s("u", "y"))}</td><td>Desplazamiento Y (membrana)</td></tr>
  <tr><td>3</td><td>${E(s("u", "z"))}</td><td>Desplazamiento Z (flexi\xF3n)</td></tr>
  <tr><td>4</td><td>${E(s("\u03B8", "x"))}</td><td>Rotaci\xF3n alrededor de X</td></tr>
  <tr><td>5</td><td>${E(s("\u03B8", "y"))}</td><td>Rotaci\xF3n alrededor de Y</td></tr>
  <tr><td>6</td><td>${E(s("\u03B8", "z"))}</td><td>Rotaci\xF3n alrededor de Z</td></tr>
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
<p>${ht(q, "{F}")}</p>

<p>Cada nodo recibe carga ${E(`${s("F", "z")} = <b>${c(r, 2)}</b>`)} en direcci\xF3n Z.</p>

<hr/>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<h2>PASO 8: CONDICIONES DE CONTORNO</h2>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<div class="step-box">
  <h4>\u{1F512} 8.1 Aplicar Apoyos (M\xE9todo de Penalizaci\xF3n)</h4>
</div>

<h4>Nodos con apoyo: ${h} (todos los del borde)</h4>
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
<p style="font-size: 14pt; text-align: center;">${E(`[${s("K")}]_{${l}\xD7${l}} \xB7 {${s("U")}}_{${l}\xD71} = {${s("F")}}_{${l}\xD71}`)}</p>

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
<p>${E(`${s("M", "xx")} = ${s("D")}\xB7(${s("\u03BA", "xx")} + ${s("\u03BD")}\xB7${s("\u03BA", "yy")})`)}</p>
<p>${E(`${s("M", "yy")} = ${s("D")}\xB7(${s("\u03BA", "yy")} + ${s("\u03BD")}\xB7${s("\u03BA", "xx")})`)}</p>
<p>${E(`${s("M", "xy")} = ${s("D")}\xB7(1 - ${s("\u03BD")})\xB7${J(s("\u03BA", "xy"), "2")}`)}</p>

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
<p style="font-size: 14pt;">${E(`${s("w", "max")} = <b>${c(C, 6)}</b>`)}</p>
</div>

<div class="success">
<h4>\u2705 Momento m\xE1ximo M<sub>xx</sub>:</h4>
<p style="font-size: 14pt;">${E(`${s("M", "xx,max")} = <b>${c(P, 4)}</b>`)}</p>
</div>

<h4>Tabla de desplazamientos (primeros 6 nodos):</h4>
<table class="bordered">
  <tr><th>Nodo</th><th>u<sub>x</sub></th><th>u<sub>y</sub></th><th>u<sub>z</sub></th></tr>
  ${tt.map((o) => `<tr><td>${o.i}</td><td>${c(o.ux, 6)}</td><td>${c(o.uy, 6)}</td><td class="${Math.abs(o.uz) > 1e-3 ? "err" : ""}">${c(o.uz, 6)}</td></tr>`).join("")}
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
    return ut`${bt(Z)}`;
  }
  const K = {
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
  }, B = {
    nodes: L.state([]),
    elements: L.state([]),
    nodeInputs: L.state({}),
    elementInputs: L.state({}),
    deformOutputs: L.state({}),
    analyzeOutputs: L.state({})
  };
  L.derive(() => {
    const t = K.ancho.value.val, e = K.largo.value.val, a = K.espesor.value.val, p = K.moduloE.value.val, x = K.poisson.value.val, F = K.mallado.value.val, D = K.carga.value.val, { nodes: v, elements: m, boundaryIndices: T } = Ft({
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
      maxMeshSize: F
    });
    B.nodeInputs.val = {
      supports: new Map(T.map((n) => [
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
      loads: new Map(v.map((n, i) => [
        i,
        [
          0,
          0,
          D,
          0,
          0,
          0
        ]
      ]))
    }, B.nodes.val = v, B.elements.val = m;
    const S = p / (2 * (1 + x));
    B.elementInputs.val = {
      elasticities: new Map(m.map((n, i) => [
        i,
        p
      ])),
      elasticitiesOrthogonal: new Map(m.map((n, i) => [
        i,
        p
      ])),
      thicknesses: new Map(m.map((n, i) => [
        i,
        a
      ])),
      poissonsRatios: new Map(m.map((n, i) => [
        i,
        x
      ])),
      shearModuli: new Map(m.map((n, i) => [
        i,
        S
      ]))
    }, B.deformOutputs.val = Et(v, m, B.nodeInputs.val, B.elementInputs.val), B.analyzeOutputs.val = kt(v, m, B.elementInputs.val, B.deformOutputs.val);
  });
  const et = L.state(""), st = L.state(void 0), ot = L.state(false);
  L.derive(() => {
    if (et.val === "Report") {
      const t = it({
        template: mt,
        data: B
      });
      st.val = t;
    }
    if (et.val === "Code") {
      const t = it({
        template: Tt,
        data: B
      });
      st.val = t;
    }
    if (et.val === "Print") {
      const t = it({
        template: mt,
        data: B
      }), e = window.open("", "_blank");
      if (e) {
        const a = (t == null ? void 0 : t.innerHTML) || "";
        e.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Plate Shell Thin - Report</title>
        </head>
        <body>
          ${a}
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
  const rt = L.state(true), _ = document.createElement("button");
  _.className = "toolbar-toggle";
  _.innerHTML = "\u2212";
  _.title = "Ocultar/Mostrar botones";
  _.onclick = () => {
    rt.val = !rt.val, rt.val ? (document.body.classList.remove("toolbar-hidden"), _.innerHTML = "\u2212", _.classList.remove("collapsed")) : (document.body.classList.add("toolbar-hidden"), _.innerHTML = "+", _.classList.add("collapsed"));
  };
  document.body.append(St(K), vt({
    mesh: B,
    settingsObj: {
      nodes: false,
      deformedShape: true,
      loads: false,
      shellResults: "displacementZ"
    }
  }), Mt(B), wt({
    position: "bottom-center"
  }), Ct({
    dialogBody: st
  }), zt({
    clickedButton: et,
    buttons: [
      "Report",
      "Code",
      "Print"
    ],
    sourceCode: "https://github.com/GiorgioBurbanelli89/awatif-ejemplos/tree/master/plate-shell-thin",
    author: "https://github.com/GiorgioBurbanelli89"
  }), _);
  const Lt = new MutationObserver((t) => {
    t.forEach((e) => {
      e.addedNodes.forEach((a) => {
        var _a, _b, _c;
        if (a instanceof HTMLElement) {
          const p = ((_a = a.querySelector) == null ? void 0 : _a.call(a, '[class*="dialog"]')) || (((_c = (_b = a.className) == null ? void 0 : _b.includes) == null ? void 0 : _c.call(_b, "dialog")) ? a : null);
          if (p && !p.querySelector(".dialog-maximize")) {
            const x = document.createElement("button");
            x.className = "dialog-maximize", x.innerHTML = "\u26F6", x.title = "Maximizar/Restaurar", x.onclick = (F) => {
              F.stopPropagation(), ot.val = !ot.val, ot.val ? (document.body.classList.add("dialog-maximized"), x.innerHTML = "\u26F6") : (document.body.classList.remove("dialog-maximized"), x.innerHTML = "\u26F6");
            }, p.style.position = "relative", p.appendChild(x);
          }
        }
      });
    });
  });
  Lt.observe(document.body, {
    childList: true,
    subtree: true
  });
  L.derive(() => {
    st.val || (document.body.classList.remove("dialog-maximized"), ot.val = false);
  });
});
