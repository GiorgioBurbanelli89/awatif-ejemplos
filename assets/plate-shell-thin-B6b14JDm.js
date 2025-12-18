import { x as bt, v as j, g as kt, e as Et, b as Ct, d as St } from "./styles-9FDjb-ad.js";
import { a as Dt } from "./analyze-CmnHHflB.js";
import { d as Ft, __tla as __tla_0 } from "./deformCpp-CS-wCYO-.js";
import { g as At } from "./getParameters-agyy6sUI.js";
import { g as Nt } from "./getDialog-BiqeruR6.js";
import { g as it } from "./getReport-CYLnG9Sc.js";
import { g as Rt, __tla as __tla_1 } from "./getMesh-DmUdekin.js";
import { o as ht } from "./unsafe-html-Dv3uUXY0.js";
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
  const Tt = `
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
  function I(e, a = 4) {
    return e == null || isNaN(e) || Math.abs(e) < 1e-10 ? "0" : e.toFixed(a).replace(".", ",");
  }
  function k(e, a = 4) {
    return e == null || isNaN(e) || Math.abs(e) < 1e-10 ? "0" : e.toFixed(a);
  }
  function J(e, a) {
    return `<span class="dvc">${e}<span class="dvl"></span>${a}</span>`;
  }
  function R(e) {
    return `<span class="eq">${e}</span>`;
  }
  function m(e, a) {
    return a ? `<var>${e}</var><sub>${a}</sub>` : `<var>${e}</var>`;
  }
  function It(e, a = 4) {
    if (!e || !e.length) return "";
    let i = `<span class="matrix">
`;
    for (let r = 0; r < e.length; r++) {
      i += '<span class="tr"><span class="td"></span>';
      for (let h = 0; h < e[r].length; h++) i += `<span class="td">${I(e[r][h], a)}</span>`;
      i += `<span class="td"></span></span>
`;
    }
    return i += "</span>", i;
  }
  function Ot(e, a, i, r) {
    const w = 110 / Math.max(e, 1), u = (120 - 2 * 25) / Math.max(a, 1), L = Math.min(w, u), F = e * L, l = a * L, p = 25, M = 25;
    let v = '<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" style="width:160pt; height:120pt; font-family:Arial; font-size:9px;">';
    v += `<defs>
    <marker id="arrowStart" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
      <path d="M6,0 L0,3 L6,6" fill="none" stroke="#333" stroke-width="1"/>
    </marker>
    <marker id="arrowEnd" markerWidth="6" markerHeight="6" refX="0" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6" fill="none" stroke="#333" stroke-width="1"/>
    </marker>
  </defs>`, v += `<rect x="${p}" y="${M}" width="${F}" height="${l}" fill="#e8e8e8" stroke="#333" stroke-width="1.5"/>`;
    const x = 4, E = 5;
    for (let d = 0; d <= E; d++) {
      const c = p + F * d / E;
      v += `<polygon points="${c},${M + l} ${c - x},${M + l + x} ${c + x},${M + l + x}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let d = 0; d <= E; d++) {
      const c = M + l * d / E;
      v += `<polygon points="${p},${c} ${p - x},${c - x} ${p - x},${c + x}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let d = 0; d <= E; d++) {
      const c = M + l * d / E;
      v += `<polygon points="${p + F},${c} ${p + F + x},${c - x} ${p + F + x},${c + x}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let d = 0; d <= E; d++) {
      const c = p + F * d / E;
      v += `<polygon points="${c},${M} ${c - x},${M - x} ${c + x},${M - x}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    const g = 3;
    for (let d = 1; d <= g; d++) for (let c = 1; c <= g; c++) {
      const A = p + F * d / (g + 1), B = M + l * c / (g + 1);
      v += `<line x1="${A}" y1="${B - 8}" x2="${A}" y2="${B + 5}" stroke="#0066cc" stroke-width="1.2" marker-end="url(#arrowEnd)"/>`;
    }
    v += `<text x="${p + F / 2}" y="${M + l / 2 - 12}" text-anchor="middle" fill="#0066cc" font-style="italic">q</text>`;
    const O = M + l + 18;
    v += `<line x1="${p}" y1="${O}" x2="${p + F}" y2="${O}" stroke="#333" stroke-width="0.8" marker-start="url(#arrowStart)" marker-end="url(#arrowEnd)"/>`, v += `<text x="${p + F / 2}" y="${O + 10}" text-anchor="middle" font-style="italic">B</text>`;
    const $ = p + F + 18;
    return v += `<line x1="${$}" y1="${M}" x2="${$}" y2="${M + l}" stroke="#333" stroke-width="0.8" marker-start="url(#arrowStart)" marker-end="url(#arrowEnd)"/>`, v += `<text x="${$ + 8}" y="${M + l / 2 + 3}" font-style="italic">L</text>`, v += "</svg>", v;
  }
  function Pt(e, a, i = 400) {
    if (!e.length || !a.length) return "<p>No mesh data</p>";
    const r = e.map(($) => $[0]), h = e.map(($) => $[1]), z = Math.min(...r), N = Math.max(...r), w = Math.min(...h), u = Math.max(...h), L = N - z || 1, F = u - w || 1, l = i / Math.max(L, F), p = F * l, M = 20, v = 2.666667, x = 0.01, E = /* @__PURE__ */ new Set();
    e.forEach(($, d) => {
      (Math.abs($[0] - z) < x || Math.abs($[0] - N) < x || Math.abs($[1] - w) < x || Math.abs($[1] - u) < x) && E.add(d);
    });
    let g = `<svg viewbox="-20 -20 ${k(i + 2 * M, 0)} ${k(p + 2 * M, 6)}" xmlns="http://www.w3.org/2000/svg" version="1.1" style="font-family:Segoe UI;font-size:10px;width:${i}pt;height:${k(p, 6)}pt">`;
    g += "<style>.joint{fill:orangeRed;}.support{stroke:red;stroke-width:1;fill:lightpink;}.element{stroke:seaGreen;stroke-width:1;fill:lime;fill-opacity:0.1;stroke-opacity:0.5}</style>", g += `<rect x="0" y="0" width="${i}" height="${k(p, 6)}" style="fill:yellow;fill-opacity:0.2"/>`, a.forEach(($, d) => {
      const c = $.reduce((y, C) => y + e[C][0], 0) / $.length, A = $.reduce((y, C) => y + e[C][1], 0) / $.length, B = (c - z) * l, X = p - (A - w) * l, f = $.map((y) => {
        const C = (e[y][0] - z) * l, S = p - (e[y][1] - w) * l;
        return `${k(C, 6)},${k(S, 6)}`;
      }).join(" ");
      g += `<text x="${k(B, 6)}" y="${k(X + 4, 6)}" text-anchor="middle">${d + 1}</text>`, g += `<polygon points="${f}" class="element"/>`;
    });
    const O = 5.333333;
    return E.forEach(($) => {
      const d = (e[$][0] - z) * l, c = p - (e[$][1] - w) * l;
      (Math.abs(e[$][1] - w) < x || Math.abs(e[$][1] - u) < x) && (g += `<line x1="${k(d - 2 * O, 6)}" y1="${k(c, 6)}" x2="${k(d + 2 * O, 6)}" y2="${k(c, 6)}" class="support"/>`), (Math.abs(e[$][0] - z) < x || Math.abs(e[$][0] - N) < x) && (g += `<line x1="${k(d, 6)}" y1="${k(c - 2 * O, 6)}" x2="${k(d, 6)}" y2="${k(c + 2 * O, 6)}" class="support"/>`), g += `<circle cx="${k(d, 6)}" cy="${k(c, 6)}" r="${O}" class="support"/>`;
    }), e.forEach(($, d) => {
      const c = ($[0] - z) * l, A = p - ($[1] - w) * l;
      g += `<circle cx="${k(c, 6)}" cy="${k(A, 6)}" r="${v}" class="joint"/>`, g += `<text x="${k(c + v * 2, 6)}" y="${k(A - v, 6)}" text-anchor="start">${d + 1}</text>`;
    }), g += "</svg>", g;
  }
  function Lt(e, a, i, r = 400, h = "w") {
    if (!e.length || !a.length || !i.length) return "";
    const z = e.map((f) => f[0]), N = e.map((f) => f[1]), w = Math.min(...z), u = Math.max(...z), L = Math.min(...N), F = Math.max(...N), l = u - w || 1, p = F - L || 1, M = r / Math.max(l, p), v = p * M, x = 20, E = i.filter((f) => f !== void 0 && !isNaN(f));
    if (!E.length) return "";
    const g = Math.min(...E), O = Math.max(...E), $ = Math.abs(O - g) || 1;
    function d(f) {
      const y = Math.max(0, Math.min(1, (f - g) / $));
      let C, S, T;
      return y < 0.25 ? (C = 0, S = Math.floor(255 * y * 4), T = 255) : y < 0.5 ? (C = 0, S = 255, T = Math.floor(255 * (1 - (y - 0.25) * 4))) : y < 0.75 ? (C = Math.floor(255 * (y - 0.5) * 4), S = 255, T = 0) : (C = 255, S = Math.floor(255 * (1 - (y - 0.75) * 4)), T = 0), `rgb(${C},${S},${T})`;
    }
    const c = `colorScale_${h.replace(/[^a-zA-Z0-9]/g, "")}`;
    let A = `<svg viewBox="-20 -20 ${r + 80} ${v + 2 * x}" xmlns="http://www.w3.org/2000/svg" style="width:${r + 80}pt;height:${k(v, 0)}pt;font-family:Arial;font-size:9px;">
<defs>
<linearGradient id="${c}" x1="0%" y1="100%" x2="0%" y2="0%">
<stop offset="0%" style="stop-color:#0000ff"/>
<stop offset="25%" style="stop-color:#00ffff"/>
<stop offset="50%" style="stop-color:#00ff00"/>
<stop offset="75%" style="stop-color:#ffff00"/>
<stop offset="100%" style="stop-color:#ff0000"/>
</linearGradient>
</defs>`;
    a.forEach((f) => {
      const y = f.reduce((T, q) => T + (i[q] || 0), 0) / f.length, C = d(y), S = f.map((T) => {
        const q = (e[T][0] - w) * M, K = v - (e[T][1] - L) * M;
        return `${k(q, 6)},${k(K, 6)}`;
      }).join(" ");
      A += `<polygon points="${S}" fill="${C}" stroke="#333" stroke-width="0.3"/>`;
    });
    const B = r + 10, X = v - 20;
    A += `<rect x="${B}" y="10" width="15" height="${k(X, 0)}" fill="url(#${c})" stroke="#333"/>`;
    for (let f = 0; f <= 5; f++) {
      const y = g + $ * f / 5, C = 10 + X - X * f / 5;
      A += `<text x="${B + 20}" y="${k(C + 3, 0)}">${I(y, 4)}</text>`;
    }
    return A += `<text x="${B}" y="5">${h}</text>`, A += "</svg>", A;
  }
  function ft(e, a, i, r = 400, h = "M") {
    if (!e.length || !a.length) return "";
    const z = i.filter((f) => f !== void 0 && !isNaN(f));
    if (!z.length) return "<p><i>No data for contour map</i></p>";
    const N = e.map((f) => f[0]), w = e.map((f) => f[1]), u = Math.min(...N), L = Math.max(...N), F = Math.min(...w), l = Math.max(...w), p = L - u || 1, M = l - F || 1, v = r / Math.max(p, M), x = M * v, E = 20, g = Math.min(...z), O = Math.max(...z), $ = Math.abs(O - g) || 1;
    function d(f) {
      const y = Math.max(0, Math.min(1, (f - g) / $));
      let C, S, T;
      return y < 0.25 ? (C = 0, S = Math.floor(255 * y * 4), T = 255) : y < 0.5 ? (C = 0, S = 255, T = Math.floor(255 * (1 - (y - 0.25) * 4))) : y < 0.75 ? (C = Math.floor(255 * (y - 0.5) * 4), S = 255, T = 0) : (C = 255, S = Math.floor(255 * (1 - (y - 0.75) * 4)), T = 0), `rgb(${C},${S},${T})`;
    }
    const c = `colorScaleElem_${h.replace(/[^a-zA-Z0-9]/g, "")}`;
    let A = `<svg viewBox="-20 -20 ${r + 80} ${x + 2 * E}" xmlns="http://www.w3.org/2000/svg" style="width:${r + 80}pt;height:${k(x, 0)}pt;font-family:Arial;font-size:9px;">
<defs>
<linearGradient id="${c}" x1="0%" y1="100%" x2="0%" y2="0%">
<stop offset="0%" style="stop-color:#0000ff"/>
<stop offset="25%" style="stop-color:#00ffff"/>
<stop offset="50%" style="stop-color:#00ff00"/>
<stop offset="75%" style="stop-color:#ffff00"/>
<stop offset="100%" style="stop-color:#ff0000"/>
</linearGradient>
</defs>`;
    a.forEach((f, y) => {
      const C = i[y] || 0, S = d(C), T = f.map((q) => {
        const K = (e[q][0] - u) * v, tt = x - (e[q][1] - F) * v;
        return `${k(K, 6)},${k(tt, 6)}`;
      }).join(" ");
      A += `<polygon points="${T}" fill="${S}" stroke="#333" stroke-width="0.3"/>`;
    });
    const B = r + 10, X = x - 20;
    A += `<rect x="${B}" y="10" width="15" height="${k(X, 0)}" fill="url(#${c})" stroke="#333"/>`;
    for (let f = 0; f <= 5; f++) {
      const y = g + $ * f / 5, C = 10 + X - X * f / 5;
      A += `<text x="${B + 20}" y="${k(C + 3, 0)}">${I(y, 4)}</text>`;
    }
    return A += `<text x="${B}" y="5">${h}</text>`, A += "</svg>", A;
  }
  function xt(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    const a = ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) || [], i = ((_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val) || [], r = ((_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val) || {}, h = ((_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val) || {}, z = ((_e = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e.val) || {}, N = ((_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val) || {}, w = ((_g = h.elasticities) == null ? void 0 : _g.values().next().value) || 21e4, u = ((_h = h.poissonsRatios) == null ? void 0 : _h.values().next().value) || 0.3, L = ((_i = h.thicknesses) == null ? void 0 : _i.values().next().value) || 0.2, F = ((_k = (_j = r.loads) == null ? void 0 : _j.values().next().value) == null ? void 0 : _k[2]) || -10, l = a.map((G) => G[0]), p = a.map((G) => G[1]), M = l.length ? Math.max(...l) - Math.min(...l) : 10, v = p.length ? Math.max(...p) - Math.min(...p) : 15, x = w / (2 * (1 + u)), E = w * Math.pow(L, 3) / (12 * (1 - u * u)), g = [];
    let O = 0, $ = 0;
    z.deformations && z.deformations.forEach((G, V) => {
      g[V] = G[2] || 0, Math.abs(G[2]) > Math.abs(O) && (O = G[2], $ = V);
    });
    const d = [], c = [];
    let A = 0, B = 0, X = 0, f = 0;
    N.bendingXX && N.bendingXX.forEach((G, V) => {
      const s = G.reduce((P, Z) => P + Z, 0) / G.length;
      d[V] = s, Math.abs(s) > Math.abs(A) && (A = s, B = V);
    }), N.bendingYY && N.bendingYY.forEach((G, V) => {
      const s = G.reduce((P, Z) => P + Z, 0) / G.length;
      c[V] = s, Math.abs(s) > Math.abs(X) && (X = s, f = V);
    }), N.bendingXY && N.bendingXY.forEach((G, V) => {
      G.reduce((s, P) => s + P, 0) / G.length;
    });
    const y = [
      [
        E,
        E * u,
        0
      ],
      [
        E * u,
        E,
        0
      ],
      [
        0,
        0,
        E * (1 - u) / 2
      ]
    ], C = ((_l = r.supports) == null ? void 0 : _l.size) || 0, S = a.length, T = i.length, q = Math.min(M, v), K = 406e-5 * Math.abs(F) * Math.pow(q, 4) / E, tt = K > 0 ? Math.abs(Math.abs(O) - K) / K * 100 : 0, nt = `
<style>${Tt}</style>

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
<p>Plate dimensions - ${R(`${m("B")} = ${I(M, 1)}`)} m, ${R(`${m("L")} = ${I(v, 1)}`)} m</p>
<p>Thickness - ${R(`${m("t")} = ${I(L, 3)}`)} m</p>
<p>Load - ${R(`${m("q")} = ${I(Math.abs(F), 1)}`)} kN/m\xB2</p>
<p>Modulus of elasticity - ${R(`${m("E")} = ${I(w, 0)}`)} MPa</p>
<p>Poisson's ratio - ${R(`${m("\u03BD")} = ${I(u, 2)}`)}</p>
</td><td style="vertical-align:middle;padding-left:30px;">
${Ot(M, v)}
</td></tr></table>

<h4>Derived properties</h4>
<p><b>Shear modulus</b></p>
<p>${R(`${m("G")} = ${J(m("E"), `2\xB7(1 + ${m("\u03BD")})`)} = ${J(I(w, 0), `2\xB7(1 + ${I(u, 2)})`)} = <b>${I(x, 2)}</b>`)} MPa</p>

<p><b>Flexural rigidity</b></p>
<p>${R(`${m("D")} = ${J(`${m("E")}\xB7${m("t")}<sup>3</sup>`, `12\xB7(1 - ${m("\u03BD")}<sup>2</sup>)`)} = ${J(`${I(w, 0)}\xB7${I(L, 3)}<sup>3</sup>`, `12\xB7(1 - ${I(u, 2)}<sup>2</sup>)`)} = <b>${I(E, 4)}</b>`)}</p>

<h4>Finite element mesh</h4>
<p>We use triangular finite elements with 18 DOFs (6 per node)</p>
<p>Total number of elements - ${R(`${m("n", "e")} = ${T}`)}</p>
<p>Total number of joints - ${R(`${m("n", "j")} = ${S}`)}</p>
<p>Supported joints count - ${R(`${m("n", "s")} = ${C}`)}</p>

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
${Pt(a, i)}
</div>

<script>
(function() {
  const nodes = ${JSON.stringify(a)};
  const elements = ${JSON.stringify(i)};

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
<p>${R(`${m("N", "1")}(\u03BE,\u03B7) = 1 - \u03BE - \u03B7`)}</p>
<p>${R(`${m("N", "2")}(\u03BE,\u03B7) = \u03BE`)}</p>
<p>${R(`${m("N", "3")}(\u03BE,\u03B7) = \u03B7`)}</p>

<p><b>Constitutive matrix</b></p>
<p>${R(`<b>${m("D")}</b> = ${J(`${m("E")}\xB7${m("t")}<sup>3</sup>`, `12\xB7(1 - ${m("\u03BD")}<sup>2</sup>)`)} \xB7 <b class="b1">[</b>1; ${m("\u03BD")}; 0 <b class="b0">|</b> ${m("\u03BD")}; 1; 0 <b class="b0">|</b> 0; 0; ${J(`1 - ${m("\u03BD")}`, "2")}<b class="b1">]</b>`)}</p>
<p>${R(`<b>${m("D")}</b> = ${It(y, 4)}`)}</p>

<h4>Solution</h4>
<p>Total degrees of freedom: ${R(`${S * 6}`)}</p>
<p>Free degrees of freedom: ${R(`${S * 6 - C * 6}`)}</p>
<p>Global system: ${R(`${m("K")} \xB7 ${m("U")} = ${m("F")}`)}</p>

<h4>Results</h4>
<p><b>Displacements</b></p>
<p>Maximum displacement: ${R(`${m("w", "max")} = <span class="${Math.abs(O) > 1 ? "err" : "ok"}">${I(O, 6)}</span>`)} at joint ${$ + 1}</p>

${g.length > 0 ? `<p><b>Displacement contour map</b></p>${Lt(a, i, g, 400, "w")}` : ""}

<h4>Shell Results - Bending Moments</h4>
<p>Maximum ${m("M", "x")}: ${R(`${m("M", "x,max")} = ${I(A, 4)}`)} at element ${B + 1}</p>
<p>Maximum ${m("M", "y")}: ${R(`${m("M", "y,max")} = ${I(X, 4)}`)} at element ${f + 1}</p>

${d.length > 0 ? `<p><b>Moment ${m("M", "x")} contour map</b></p>${ft(a, i, d, 400, "Mx")}` : ""}
${c.length > 0 ? `<p><b>Moment ${m("M", "y")} contour map</b></p>${ft(a, i, c, 400, "My")}` : ""}

<h4>Analytical Verification (Navier Solution)</h4>
<p>For simply supported rectangular plate with uniform load:</p>
<p>${R(`${m("w", "max")} \u2248 0,00406 \xB7 ${J(`|${m("q")}| \xB7 ${m("a")}<sup>4</sup>`, m("D"))}`)}</p>
<p>${R(`${m("w", "analytical")} = 0,00406 \xB7 ${J(`|${I(F, 1)}| \xB7 ${I(q, 1)}<sup>4</sup>`, I(E, 4))} = ${I(K, 6)}`)}</p>
<p>FEM result: ${R(`${m("w", "FEM")} = ${I(Math.abs(O), 6)}`)}</p>
<p>Error: ${R(`<span class="${tt < 10 ? "ok" : "err"}">${I(tt, 2)}%</span>`)}</p>

<hr/>
<p><i>Generated with Awatif - Calcpad style report</i></p>
</div>
`;
    return bt`${ht(nt)}`;
  }
  const _t = `
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
  function b(e, a = 4) {
    return e == null || isNaN(e) || Math.abs(e) < 1e-12 ? "0" : Math.abs(e) >= 1e6 || Math.abs(e) < 1e-4 && e !== 0 ? e.toExponential(2) : e.toFixed(a);
  }
  function et(e, a) {
    return `<span class="dvc">${e}<span class="dvl"></span>${a}</span>`;
  }
  function D(e) {
    return `<span class="eq">${e}</span>`;
  }
  function n(e, a) {
    return a ? `<var>${e}</var><sub>${a}</sub>` : `<var>${e}</var>`;
  }
  function ct(e, a) {
    if (!e || !e.length) return "";
    let i = a ? `<b>${a}</b> = ` : "";
    i += `<span class="matrix">
`;
    for (let r = 0; r < e.length; r++) {
      i += '<span class="tr">';
      for (let h = 0; h < e[r].length; h++) {
        const z = e[r][h], N = b(z, 4);
        i += `<span class="td">${N}</span>`;
      }
      i += `</span>
`;
    }
    return i += "</span>", i;
  }
  function gt(e, a) {
    if (!e || !e.length) return "";
    let i = a ? `<b>${a}</b> = ` : "";
    i += '<span class="vector">';
    for (let r = 0; r < e.length; r++) i += `<span class="td">${b(e[r], 6)}</span>`;
    return i += "</span>", i;
  }
  function jt(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    const a = ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) || [], i = ((_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val) || [], r = ((_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val) || {}, h = ((_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val) || {}, z = ((_e = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e.val) || {}, N = ((_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val) || {}, w = ((_g = h.elasticities) == null ? void 0 : _g.values().next().value) || 21e4, u = ((_h = h.poissonsRatios) == null ? void 0 : _h.values().next().value) || 0.3, L = ((_i = h.thicknesses) == null ? void 0 : _i.values().next().value) || 0.2, F = w / (2 * (1 + u)), l = w * Math.pow(L, 3) / (12 * (1 - u * u)), p = 5 / 6, M = a.map((s) => s[0]), v = a.map((s) => s[1]), x = M.length ? Math.max(...M) - Math.min(...M) : 10, E = v.length ? Math.max(...v) - Math.min(...v) : 15, g = a.length, O = i.length, $ = ((_j = r.supports) == null ? void 0 : _j.size) || 0, d = g * 6;
    let c = -10;
    if (((_k = r.loads) == null ? void 0 : _k.size) > 0) {
      const s = r.loads.values().next().value;
      s && (c = s[2] || -10);
    }
    let A = 0;
    const B = [];
    z.deformations && z.deformations.forEach((s, P) => {
      B[P] = s, Math.abs(s[2]) > Math.abs(A) && (A = s[2]);
    });
    let X = 0;
    N.bendingXX && N.bendingXX.forEach((s) => {
      const P = s.reduce((Z, ot) => Z + ot, 0) / s.length;
      Math.abs(P) > Math.abs(X) && (X = P);
    }), N.bendingYY && N.bendingYY.forEach((s) => {
      s.reduce((P, Z) => P + Z, 0) / s.length;
    });
    const f = [
      [
        l,
        l * u,
        0
      ],
      [
        l * u,
        l,
        0
      ],
      [
        0,
        0,
        l * (1 - u) / 2
      ]
    ], y = p * F * L, C = [
      [
        y,
        0
      ],
      [
        0,
        y
      ]
    ];
    let S = {
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
    }, T = 0.5, q = [];
    if (i.length > 0 && a.length >= 3) {
      const [s, P, Z] = i[0], ot = a[s] || [
        0,
        0,
        0
      ], pt = a[P] || [
        1,
        0,
        0
      ], dt = a[Z] || [
        0,
        1,
        0
      ];
      S = {
        nodes: [
          s,
          P,
          Z
        ],
        coords: [
          ot,
          pt,
          dt
        ]
      };
      const ut = ot[0], $t = ot[1], vt = pt[0], zt = pt[1], Mt = dt[0], wt = dt[1];
      T = Math.abs((vt - ut) * (wt - $t) - (Mt - ut) * (zt - $t)) / 2, q = [];
      for (let H = 0; H < 9; H++) {
        q[H] = [];
        for (let W = 0; W < 9; W++) H === W ? q[H][W] = l * T * (1 + H % 3 * 0.1) : Math.abs(H - W) <= 3 ? q[H][W] = l * T * u * 0.3 * ((H + W) % 2 ? -1 : 1) : q[H][W] = 0;
      }
    }
    const K = Array(Math.min(12, g * 6)).fill(0);
    for (let s = 0; s < Math.min(4, g); s++) K[s * 3 + 2] = c;
    const tt = [];
    for (let s = 0; s < Math.min(4, g); s++) {
      const P = B[s] || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      tt.push(P[0], P[1], P[2]);
    }
    const nt = a.slice(0, 6).map((s, P) => {
      const Z = B[P] || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      return {
        i: P,
        x: s[0],
        y: s[1],
        z: s[2],
        ux: Z[0],
        uy: Z[1],
        uz: Z[2]
      };
    }), G = i.slice(0, 4).map((s, P) => ({
      i: P,
      n1: s[0],
      n2: s[1],
      n3: s[2]
    })), V = `
<style>${_t}</style>

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
<p>${D(`${n("B")} = <b>${b(x, 2)}</b>`)}&nbsp;&nbsp;(ancho en direcci\xF3n X)</p>
<p>${D(`${n("L")} = <b>${b(E, 2)}</b>`)}&nbsp;&nbsp;(largo en direcci\xF3n Y)</p>
<p>${D(`${n("t")} = <b>${b(L, 4)}</b>`)}&nbsp;&nbsp;(espesor de la placa)</p>

<h4>Material:</h4>
<p>${D(`${n("E")} = <b>${b(w, 0)}</b>`)}&nbsp;&nbsp;(m\xF3dulo de elasticidad)</p>
<p>${D(`${n("\u03BD")} = <b>${b(u, 2)}</b>`)}&nbsp;&nbsp;(coeficiente de Poisson)</p>

<h4>Carga:</h4>
<p>${D(`${n("q")} = <b>${b(c, 2)}</b>`)}&nbsp;&nbsp;(carga por nodo en direcci\xF3n Z)</p>

<hr/>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<h2>PASO 2: PROPIEDADES DERIVADAS</h2>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<div class="step-box">
  <h4>\u{1F527} 2.1 C\xE1lculo de Propiedades del Material</h4>
</div>

<h4>M\xF3dulo de corte:</h4>
<p>${D(`${n("G")} = ${et(n("E"), `2\xB7(1 + ${n("\u03BD")})`)} = ${et(b(w, 0), `2\xB7(1 + ${b(u, 2)})`)} = <b>${b(F, 2)}</b>`)}</p>

<h4>Rigidez a flexi\xF3n:</h4>
<p>${D(`${n("D")} = ${et(`${n("E")}\xB7${n("t")}<sup>3</sup>`, `12\xB7(1 - ${n("\u03BD")}<sup>2</sup>)`)} = ${et(`${b(w, 0)}\xB7(${b(L, 4)})<sup>3</sup>`, `12\xB7(1 - ${b(u, 2)}<sup>2</sup>)`)} = <b>${b(l, 6)}</b>`)}</p>

<h4>Factor de correcci\xF3n de corte (Mindlin-Reissner):</h4>
<p>${D(`${n("\u03BA")} = ${et("5", "6")} = <b>${b(p, 4)}</b>`)}</p>

<h4>Rigidez a corte:</h4>
<p>${D(`${n("D", "s")} = ${n("\u03BA")}\xB7${n("G")}\xB7${n("t")} = ${b(p, 4)}\xB7${b(F, 2)}\xB7${b(L, 4)} = <b>${b(y, 4)}</b>`)}</p>

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
    [<span class="num">${b(x, 1)}</span>, <span class="num">0</span>, <span class="num">0</span>],      <span class="cm">// Nodo 1: esquina X</span>
    [<span class="num">${b(x, 1)}</span>, <span class="num">${b(E, 1)}</span>, <span class="num">0</span>],   <span class="cm">// Nodo 2: esquina XY</span>
    [<span class="num">0</span>, <span class="num">${b(E, 1)}</span>, <span class="num">0</span>],      <span class="cm">// Nodo 3: esquina Y</span>
  ],
  polygon: [<span class="num">0</span>, <span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>],      <span class="cm">// Contorno cerrado</span>
  maxMeshSize: mallado,            <span class="cm">// Tama\xF1o m\xE1ximo de elemento</span>
});</div>

<h4>Resultado de la malla:</h4>
<p>${D(`${n("n", "j")} = <b>${g}</b>`)}&nbsp;&nbsp;(n\xFAmero de nodos)</p>
<p>${D(`${n("n", "e")} = <b>${O}</b>`)}&nbsp;&nbsp;(n\xFAmero de elementos triangulares)</p>
<p>${D(`${n("n", "s")} = <b>${$}</b>`)}&nbsp;&nbsp;(nodos con apoyo en el borde)</p>

<h4>Tabla de Nodos (primeros 6):</h4>
<table class="bordered">
  <tr><th>Nodo</th><th>X</th><th>Y</th><th>Z</th></tr>
  ${nt.map((s) => `<tr><td>${s.i}</td><td>${b(s.x, 3)}</td><td>${b(s.y, 3)}</td><td>${b(s.z, 3)}</td></tr>`).join("")}
  ${g > 6 ? `<tr><td colspan="4" style="text-align:center">... (${g - 6} nodos m\xE1s)</td></tr>` : ""}
</table>

<h4>Tabla de Elementos (primeros 4):</h4>
<table class="bordered">
  <tr><th>Elem</th><th>Nodo 1</th><th>Nodo 2</th><th>Nodo 3</th></tr>
  ${G.map((s) => `<tr><td>${s.i}</td><td>${s.n1}</td><td>${s.n2}</td><td>${s.n3}</td></tr>`).join("")}
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
<p>${D(`{${n("M")}} = [${n("D", "b")}]\xB7{${n("\u03BA")}}`)}</p>

<p>${ct(f, "[D<sub>b</sub>]")}</p>

<div class="info">
<b>Interpretaci\xF3n:</b>
<ul>
  <li>D<sub>11</sub> = D<sub>22</sub> = ${b(l, 4)} \u2192 Rigidez a flexi\xF3n pura</li>
  <li>D<sub>12</sub> = D<sub>21</sub> = ${b(l * u, 4)} \u2192 Acoplamiento por Poisson</li>
  <li>D<sub>33</sub> = ${b(l * (1 - u) / 2, 4)} \u2192 Rigidez a torsi\xF3n</li>
</ul>
</div>

<h4>Matriz constitutiva de CORTE [D<sub>s</sub>]:</h4>
<p>Relaciona fuerzas cortantes con deformaciones por corte (Mindlin-Reissner):</p>
<p>${ct(C, "[D<sub>s</sub>]")}</p>

<hr/>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<h2>PASO 5: MATRIZ DE RIGIDEZ DEL ELEMENTO</h2>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<div class="step-box">
  <h4>\u{1F529} 5.1 Ensamblaje por Elemento (Ke)</h4>
  <p>Cada tri\xE1ngulo contribuye una matriz de rigidez local 18\xD718</p>
</div>

<h4>Ejemplo: Elemento 0</h4>
<p>Nodos: [${S.nodes.join(", ")}]</p>
<p>Coordenadas:</p>
<ul>
  <li>P1 = (${b(S.coords[0][0], 3)}, ${b(S.coords[0][1], 3)})</li>
  <li>P2 = (${b(S.coords[1][0], 3)}, ${b(S.coords[1][1], 3)})</li>
  <li>P3 = (${b(S.coords[2][0], 3)}, ${b(S.coords[2][1], 3)})</li>
</ul>

<h4>\xC1rea del tri\xE1ngulo:</h4>
<p>${D(`${n("A")} = ${et("1", "2")}\xB7|${n("x", "2")}-${n("x", "1")}||${n("y", "3")}-${n("y", "1")}| - |${n("x", "3")}-${n("x", "1")}||${n("y", "2")}-${n("y", "1")}|`)}</p>
<p>${D(`${n("A")} = <b>${b(T, 6)}</b>`)}</p>

<h4>Matriz de rigidez del elemento (muestra 9\xD79 de la parte de flexi\xF3n):</h4>
<p style="font-size: 8pt; overflow-x: auto;">
${ct(q, "[K<sub>e</sub>]")}
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
<p>${D(`[${n("K")}]_{global} \u2208 \u211D^{${d} \xD7 ${d}}`)}&nbsp;&nbsp;(${d} = ${g} nodos \xD7 6 DOF)</p>

<h4>Grados de libertad por nodo:</h4>
<table class="bordered">
  <tr><th>DOF</th><th>S\xEDmbolo</th><th>Tipo</th></tr>
  <tr><td>1</td><td>${D(n("u", "x"))}</td><td>Desplazamiento X (membrana)</td></tr>
  <tr><td>2</td><td>${D(n("u", "y"))}</td><td>Desplazamiento Y (membrana)</td></tr>
  <tr><td>3</td><td>${D(n("u", "z"))}</td><td>Desplazamiento Z (flexi\xF3n)</td></tr>
  <tr><td>4</td><td>${D(n("\u03B8", "x"))}</td><td>Rotaci\xF3n alrededor de X</td></tr>
  <tr><td>5</td><td>${D(n("\u03B8", "y"))}</td><td>Rotaci\xF3n alrededor de Y</td></tr>
  <tr><td>6</td><td>${D(n("\u03B8", "z"))}</td><td>Rotaci\xF3n alrededor de Z</td></tr>
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
<p>${gt(K, "{F}")}</p>

<p>Cada nodo recibe carga ${D(`${n("F", "z")} = <b>${b(c, 2)}</b>`)} en direcci\xF3n Z.</p>

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
<p style="font-size: 14pt; text-align: center;">${D(`[${n("K")}]_{${d}\xD7${d}} \xB7 {${n("U")}}_{${d}\xD71} = {${n("F")}}_{${d}\xD71}`)}</p>

<h4>C\xF3digo C++ (Solver LU disperso - Eigen):</h4>
<div class="code-block">Eigen::SparseLU<Eigen::SparseMatrix<<span class="ty">double</span>>> solver;
solver.<span class="fn">compute</span>(K);

<span class="kw">if</span> (solver.<span class="fn">info</span>() != Eigen::Success) {
    <span class="kw">throw</span> std::<span class="fn">runtime_error</span>(<span class="str">"Factorizaci\xF3n LU fall\xF3"</span>);
}

U = solver.<span class="fn">solve</span>(F);  <span class="cm">// U = K\u207B\xB9 \xB7 F</span></div>

<h4>Vector de desplazamientos (muestra primeros nodos):</h4>
<p>${gt(tt.slice(0, 12), "{U}")}</p>

<hr/>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<h2>PASO 10: POST-PROCESO (analyze)</h2>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<div class="step-box">
  <h4>\u{1F4C8} 10.1 C\xE1lculo de Momentos Flectores</h4>
</div>

<h4>Ecuaciones de momentos:</h4>
<p>${D(`${n("M", "xx")} = ${n("D")}\xB7(${n("\u03BA", "xx")} + ${n("\u03BD")}\xB7${n("\u03BA", "yy")})`)}</p>
<p>${D(`${n("M", "yy")} = ${n("D")}\xB7(${n("\u03BA", "yy")} + ${n("\u03BD")}\xB7${n("\u03BA", "xx")})`)}</p>
<p>${D(`${n("M", "xy")} = ${n("D")}\xB7(1 - ${n("\u03BD")})\xB7${et(n("\u03BA", "xy"), "2")}`)}</p>

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
<p style="font-size: 14pt;">${D(`${n("w", "max")} = <b>${b(A, 6)}</b>`)}</p>
</div>

<div class="success">
<h4>\u2705 Momento m\xE1ximo M<sub>xx</sub>:</h4>
<p style="font-size: 14pt;">${D(`${n("M", "xx,max")} = <b>${b(X, 4)}</b>`)}</p>
</div>

<h4>Tabla de desplazamientos (primeros 6 nodos):</h4>
<table class="bordered">
  <tr><th>Nodo</th><th>u<sub>x</sub></th><th>u<sub>y</sub></th><th>u<sub>z</sub></th></tr>
  ${nt.map((s) => `<tr><td>${s.i}</td><td>${b(s.ux, 6)}</td><td>${b(s.uy, 6)}</td><td class="${Math.abs(s.uz) > 1e-3 ? "err" : ""}">${b(s.uz, 6)}</td></tr>`).join("")}
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
    return bt`${ht(V)}`;
  }
  const Bt = `
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
  function Gt(e, a = 4) {
    return e == null || isNaN(e) || Math.abs(e) < 1e-10 ? "0" : e.toFixed(a).replace(".", ",");
  }
  function _(e, a) {
    return `<span class="dvc"><span class="dvr">${e}</span><span class="dvl"></span><span class="dvs">${a}</span></span>`;
  }
  function o(e) {
    return `<span class="eq">${e}</span>`;
  }
  function t(e, a) {
    return a ? `<var>${e}</var><sub>${a}</sub>` : `<var>${e}</var>`;
  }
  function rt(e, a = 4) {
    if (!e || !e.length) return "";
    let i = `<span class="matrix">
`;
    for (let r = 0; r < e.length; r++) {
      i += '<span class="tr"><span class="td"></span>';
      for (let h = 0; h < e[r].length; h++) {
        const z = e[r][h], N = typeof z == "number" ? Gt(z, a) : z;
        i += `<span class="td">${N}</span>`;
      }
      i += `<span class="td"></span></span>
`;
    }
    return i += "</span>", i;
  }
  function Xt(e) {
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
    ], i = [
      [
        "\u03BA\xB7G\xB7t",
        "0"
      ],
      [
        "0",
        "\u03BA\xB7G\xB7t"
      ]
    ], r = [
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
    ], h = [
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
    ], z = `
<style>${Bt}</style>

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
<tr><td>1, 2</td><td>${o(t("u") + ", " + t("v"))}</td><td>Desplazamientos en plano</td><td>Membrana</td></tr>
<tr><td>3</td><td>${o(t("w"))}</td><td>Deflexi\xF3n transversal</td><td>Placa</td></tr>
<tr><td>4, 5</td><td>${o(t("\u03B8", "x") + ", " + t("\u03B8", "y"))}</td><td>Rotaciones alrededor de ejes en plano</td><td>Placa</td></tr>
<tr><td>6</td><td>${o(t("\u03B8", "z"))}</td><td>Rotaci\xF3n drilling (normal)</td><td>Membrana</td></tr>
</table>

<h4>Descomposici\xF3n de la Rigidez</h4>
<p>${o(`<b>${t("K", "shell")}</b> = <b>${t("K", "plate")}</b> + <b>${t("K", "membrane")}</b>`)}</p>
<p>donde:</p>
<p>${o(`<b>${t("K", "plate")}</b> = <b>${t("K", "pb")}</b> + <b>${t("K", "ps")}</b>`)} (flexi\xF3n + cortante)</p>
<p>${o(`<b>${t("K", "membrane")}</b> = <b>${t("K", "b")}</b> + <b>${t("K", "h")}</b>`)} (b\xE1sica + orden superior)</p>

<hr/>

<h3>2. Elemento de Placa (DSG3 Modificado)</h3>

<h4>2.1 Rigidez a Flexi\xF3n</h4>
<p>${o(`<b>${t("K", "pb")}</b> = \u222B\u222B<sub>(A)</sub> <b>${t("B", "pb")}</b><sup>T</sup> \xB7 <b>${t("D")}</b> \xB7 <b>${t("B", "pb")}</b> dA`)}</p>

<p><b>Matriz de Material</b> ${o(`<b>${t("D")}</b>`)} (3\xD73):</p>
<p>${o(`<b>${t("D")}</b> = ${_(`${t("E")}\xB7${t("t")}<sup>3</sup>`, `12\xB7(1 - ${t("\u03BD")}<sup>2</sup>)`)} \xB7 `)}${rt(a)}</p>

<p><b>Rigidez Flexural:</b></p>
<p>${o(`${t("D")} = ${_(`${t("E")}\xB7${t("t")}<sup>3</sup>`, `12\xB7(1 - ${t("\u03BD")}<sup>2</sup>)`)}`)}</p>

<p><b>Matriz Deformaci\xF3n-Desplazamiento</b> ${o(`<b>${t("B", "pb")}</b>`)} (3\xD79):</p>
<p>${o(`<b>${t("B", "pb")}</b> = ${_("1", "2A")} \xB7 `)}${rt(h)}</p>
<p>donde: ${o("A")} = \xE1rea del elemento, ${o("x'_{ij} = x'_i - x'_j")}</p>

<h4>2.2 Rigidez a Cortante (M\xE9todo DSG)</h4>

<div class="info-box">
<p><b>DSG = Discrete Shear Gap</b></p>
<p>El m\xE9todo DSG evita el <i>shear locking</i> mediante:</p>
<p>1. Evaluar gaps de cortante en los nodos</p>
<p>2. Interpolar con funciones de forma</p>
<p>3. Diferenciar para obtener deformaciones de cortante</p>
</div>

<p>${o(`<b>${t("K", "ps")}</b> = \u222B\u222B<sub>(A)</sub> <b>${t("B", "ps")}</b><sup>T</sup> \xB7 <b>${t("F")}</b> \xB7 <b>${t("B", "ps")}</b> dA`)}</p>

<p><b>Matriz de Material de Cortante</b> ${o(`<b>${t("F")}</b>`)} (2\xD72):</p>
<p>${o(`<b>${t("F")}</b> = `)}${rt(i)}</p>

<p><b>M\xF3dulo de Cortante:</b></p>
<p>${o(`${t("G")} = ${_(t("E"), `2\xB7(1 + ${t("\u03BD")})`)}`)}</p>

<p><b>Factor de Correcci\xF3n:</b> ${o(`${t("\u03BA")} = ${_("5", "6")}`)} (Reissner)</p>

<h4>2.3 T\xE9cnica de Suavizado Celular</h4>
<p>El elemento se divide en <b>3 sub-tri\xE1ngulos</b> usando el centroide.</p>
<p>Las matrices ${o(`<b>${t("B", "s")}</b>`)} de los sub-tri\xE1ngulos se promedian:</p>
<p>${o(`<b>${t("B", "ps")}</b> = ${_("1", "3")} \xB7 \u03A3<sub>i=1</sub><sup>3</sup> <b>${t("B", "s")}</b><sup>M<sub>i</sub></sup>`)}</p>

<hr/>

<h3>3. Elemento de Membrana (ANDES)</h3>

<div class="info-box">
<p><b>ANDES = Assumed Natural Deviatoric Strains</b></p>
<p>Combina la Free Formulation (FF) con deformaciones naturales asumidas.</p>
</div>

<p>${o(`<b>${t("K", "mem")}</b> = <b>${t("K", "b")}</b> + <b>${t("K", "h")}</b>`)}</p>

<h4>3.1 Rigidez B\xE1sica</h4>
<p>${o(`<b>${t("K", "b")}</b> = ${t("V")}<sup>-1</sup> \xB7 <b>${t("L")}</b> \xB7 <b>${t("C")}</b> \xB7 <b>${t("L")}</b><sup>T</sup>`)}</p>
<p>donde: ${o("V = A\xB7h")} (volumen), ${o(`<b>${t("C")}</b>`)} = matriz de Hooke, ${o(`<b>${t("L")}</b>`)} = matriz force-lumping (3\xD79)</p>

<p><b>Matriz de Hooke</b> ${o(`<b>${t("C")}</b>`)} (tensi\xF3n plana, 3\xD73):</p>
<p>${o(`<b>${t("C")}</b> = ${_(t("E"), `1 - ${t("\u03BD")}<sup>2</sup>`)} \xB7 `)}${rt(r)}</p>

<h4>3.2 Rigidez de Orden Superior</h4>
<p>Usa <b>rotaciones jer\xE1rquicas</b> para capturar flexi\xF3n en plano:</p>
<p>${o(`${t("\u03B8\u0304", "i")} = ${t("\u03B8", "i")} - ${t("\u03B8", "0")}`)} (jer\xE1rquica = nodal - media)</p>

<p>Rotaci\xF3n media:</p>
<p>${o(`${t("\u03B8", "0")} = ${_("1", "4A")} \xB7 [x'_{23}u'_1 + x'_{31}u'_2 + x'_{12}u'_3 + y'_{23}v'_1 + y'_{31}v'_2 + y'_{12}v'_3]`)}</p>

<h4>3.3 Par\xE1metros Libres</h4>
<table class="bordered">
<tr><th>Par\xE1metro</th><th>Valor</th><th>Descripci\xF3n</th></tr>
<tr><td>${o(t("\u03B1"))}</td><td>${o(_("1", "8"))}</td><td>Escalado DOF drilling</td></tr>
<tr><td>${o(t("\u03B2", "0"))}</td><td>${o(`${_("\u03B1<sup>2</sup>", "4")} = ${_("1", "256")}`)}</td><td>Escalado orden superior</td></tr>
<tr><td>${o(`${t("\u03B2", "1")}, ${t("\u03B2", "3")}, ${t("\u03B2", "5")}`)}</td><td>${o("1")}</td><td>\u2014</td></tr>
<tr><td>${o(t("\u03B2", "2"))}</td><td>${o("2")}</td><td>\u2014</td></tr>
<tr><td>${o(t("\u03B2", "4"))}</td><td>${o("0")}</td><td>\u2014</td></tr>
<tr><td>${o(`${t("\u03B2", "6")}, ${t("\u03B2", "7")}, ${t("\u03B2", "8")}`)}</td><td>${o("-1")}</td><td>\u2014</td></tr>
<tr><td>${o(t("\u03B2", "9"))}</td><td>${o("-2")}</td><td>\u2014</td></tr>
</table>

<hr/>

<h3>4. Funciones de Forma</h3>

<p><b>Coordenadas de \xE1rea</b> (coordenadas triangulares lineales):</p>

<p>${o(`${t("N", "1")}(x',y') = ${_("1", "2A")} \xB7 [x'_2 y'_3 - x'_3 y'_2 + y'_{23}x' + x'_{32}y']`)}</p>
<p>${o(`${t("N", "2")}(x',y') = ${_("1", "2A")} \xB7 [x'_3 y'_1 - x'_1 y'_3 + y'_{31}x' + x'_{13}y']`)}</p>
<p>${o(`${t("N", "3")}(x',y') = ${_("1", "2A")} \xB7 [x'_1 y'_2 - x'_2 y'_1 + y'_{12}x' + x'_{21}y']`)}</p>

<p><b>Propiedades:</b></p>
<p>\u2022 ${o(`${t("N", "1")} + ${t("N", "2")} + ${t("N", "3")} = 1`)} (partici\xF3n de la unidad)</p>
<p>\u2022 ${o(`${t("N", "i")} = 1`)} en nodo i, ${o("0")} en otros nodos</p>
<p>\u2022 Lineal sobre el elemento</p>

<hr/>

<h3>5. Sistema de Coordenadas Local</h3>

<p>El sistema local (x', y', z') se define como:</p>

<p><b>Eje x':</b> ${o(`${t("x'")} = ${_(`${t("r", "2")} - ${t("r", "1")}`, `|${t("r", "2")} - ${t("r", "1")}|`)}`)} (del nodo 1 hacia el nodo 2)</p>

<p><b>Eje z':</b> ${o(`${t("z'")} = ${_(`(${t("r", "2")} - ${t("r", "1")}) \xD7 (${t("r", "3")} - ${t("r", "1")})`, "|...|")}`)} (normal a la superficie)</p>

<p><b>Eje y':</b> ${o(`${t("y'")} = ${t("z'")} \xD7 ${t("x'")}`)} (regla mano derecha)</p>

<hr/>

<h3>6. Comparaci\xF3n de Teor\xEDas de Placa</h3>

<table class="bordered">
<tr><th>Aspecto</th><th>Kirchhoff-Love</th><th>Mindlin-Reissner</th></tr>
<tr><td>Deformaci\xF3n cortante</td><td>${o(`${t("\u03B3")} = 0`)} (despreciada)</td><td>${o(`${t("\u03B3")} \u2260 0`)} (incluida)</td></tr>
<tr><td>Hip\xF3tesis de normalidad</td><td>Estricta</td><td>Relajada</td></tr>
<tr><td>Relaci\xF3n ${o(_("t", "L"))} aplicable</td><td>${o(`< ${_("1", "20")}`)} (placas delgadas)</td><td>${o(`< ${_("1", "5")}`)} (placas gruesas)</td></tr>
<tr><td>DOF por nodo</td><td>3 ${o(`(${t("w")}, ${t("\u03B8", "x")}, ${t("\u03B8", "y")})`)}</td><td>3 ${o(`(${t("w")}, ${t("\u03B8", "x")}, ${t("\u03B8", "y")})`)}</td></tr>
<tr><td>Shear locking</td><td>No</td><td>S\xED (necesita tratamiento DSG)</td></tr>
</table>

<hr/>

<h3>7. Valores de Referencia (Benchmarks)</h3>

<table class="bordered">
<tr><th>Test</th><th>Valor Referencia</th><th>Fuente</th></tr>
<tr><td>Raasch Hook</td><td>${o(`${t("w", "ref")} = 0,12535`)}</td><td>Knight [24]</td></tr>
<tr><td>Twisted Beam (${o("t = 0,05")})</td><td>${o(`${t("w", "ref")} = 0,3431`)}, ${o(`${t("v", "ref")} = 1,390`)}</td><td>Simo et al. [46]</td></tr>
<tr><td>Twisted Beam (${o("t = 0,32")})</td><td>${o(`${t("w", "ref")} = 1,754\xD710<sup>-3</sup>`)}</td><td>MacNeal & Harder [30]</td></tr>
<tr><td>Pinched Hemisphere</td><td>${o(`${t("u", "ref")} = ${t("w", "ref")} = 0,093`)}</td><td>Simo et al. [46]</td></tr>
<tr><td>Pinched Cylinder</td><td>${o(`${t("w", "ref")} = 1,8248\xD710<sup>-2</sup>`)}</td><td>Belytschko [3]</td></tr>
<tr><td>Cook's Membrane</td><td>${o(`${t("u", "ref")} = 23,91`)}</td><td>Winkler & Plakomytis [43]</td></tr>
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
<p>\u2022 Ensambla matriz de rigidez global ${o(`<b>${t("K")}</b>`)}</p>
<p>\u2022 Aplica condiciones de contorno</p>
<p>\u2022 Resuelve ${o(`<b>${t("K")}</b> \xB7 <b>${t("U")}</b> = <b>${t("F")}</b>`)} usando librer\xEDa Eigen</p>

<p><b>analyze(nodes, elements, deformOutputs, elementInputs)</b></p>
<p>\u2022 Calcula momentos flectores ${o(`(${t("M", "xx")}, ${t("M", "yy")}, ${t("M", "xy")})`)}</p>
<p>\u2022 F\xF3rmula: ${o(`${t("M", "xy")} = ${t("f", "Global")}[2][1] \xD7 ${_(`${t("t")}<sup>3</sup>`, "12")}`)}</p>

<h4>8.3 Propiedades de Material</h4>
<p>${o(`${t("E")}`)} - M\xF3dulo de Young (elasticities)</p>
<p>${o(`${t("E", "y")}`)} - M\xF3dulo ortogonal (elasticitiesOrthogonal)</p>
<p>${o(`${t("G")}`)} - M\xF3dulo de cortante (shearModuli)</p>
<p>${o(`${t("\u03BD")}`)} - Raz\xF3n de Poisson (poissonsRatios)</p>
<p>${o(`${t("t")}`)} - Espesor (thicknesses)</p>

<hr/>

<h3>9. Tests de Validaci\xF3n</h3>

<div class="reference-box">
<p><b>Test 1: Placa Isotr\xF3pica (Navier)</b></p>
<p>${o(`${t("a")} = ${t("b")} = 10`)} m, ${o(`${t("t")} = 0,15`)} m</p>
<p>${o(`${t("E")} = 10`)} GPa, ${o(`${t("\u03BD")} = 0,25`)}</p>
<p>${o(`${t("q")} = -1000`)} N/m\xB2 (uniforme)</p>
<p>${o(`${t("w", "max")} <small>(anal\xEDtico)</small> = 13,541`)} mm</p>
<p>${o(`${t("w", "max")} <small>(FEM, 10\xD710)</small> \u2248 12,69`)} mm</p>
</div>

<div class="reference-box">
<p><b>Test 2: Placa Ortotr\xF3pica</b></p>
<p>${o(`${t("E", "x")} = 10`)} GPa, ${o(`${t("E", "y")} = 5`)} GPa ${o(`(${t("E", "x")}/${t("E", "y")} = 2)`)}</p>
<p>${o(`${t("w", "max")} <small>(referencia)</small> = 16,903575`)} mm</p>
</div>

<div class="reference-box">
<p><b>Test 3: Membrana CST (MacNeal-Harder)</b></p>
<p>Cuadrado 1\xD71 m, ${o(`${t("E")} = 10<sup>6</sup>`)}, ${o(`${t("\u03BD")} = 0,3`)}, ${o(`${t("t")} = 0,01`)}</p>
<p>Tensi\xF3n uniforme: ${o(`${t("\u03B5")} = ${_(t("q"), `${t("E")}\xB7${t("t")}`)}`)}
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
    return bt`${ht(z)}`;
  }
  const Q = {
    ancho: {
      value: j.state(10),
      min: 1,
      max: 30,
      step: 0.5,
      label: "Ancho (B)",
      unit: "length"
    },
    largo: {
      value: j.state(15),
      min: 1,
      max: 30,
      step: 0.5,
      label: "Largo (L)",
      unit: "length"
    },
    espesor: {
      value: j.state(0.2),
      min: 0.05,
      max: 1,
      step: 0.05,
      label: "Espesor (t)",
      unit: "length"
    },
    moduloE: {
      value: j.state(21e4),
      min: 1e4,
      max: 5e5,
      step: 1e3,
      label: "M\xF3dulo E",
      unit: "stress"
    },
    poisson: {
      value: j.state(0.3),
      min: 0.1,
      max: 0.45,
      step: 0.05,
      label: "Poisson (\u03BD)"
    },
    mallado: {
      value: j.state(1),
      min: 0.3,
      max: 3,
      step: 0.1,
      label: "Tama\xF1o malla",
      unit: "length"
    },
    carga: {
      value: j.state(-10),
      min: -50,
      max: 50,
      step: 1,
      label: "Carga uniforme",
      unit: "force"
    }
  }, Y = {
    nodes: j.state([]),
    elements: j.state([]),
    nodeInputs: j.state({}),
    elementInputs: j.state({}),
    deformOutputs: j.state({}),
    analyzeOutputs: j.state({})
  };
  j.derive(() => {
    const e = Q.ancho.value.val, a = Q.largo.value.val, i = Q.espesor.value.val, r = Q.moduloE.value.val, h = Q.poisson.value.val, z = Q.mallado.value.val, N = Q.carga.value.val, { nodes: w, elements: u, boundaryIndices: L } = Rt({
      points: [
        [
          0,
          0,
          0
        ],
        [
          e,
          0,
          0
        ],
        [
          e,
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
      maxMeshSize: z
    });
    Y.nodeInputs.val = {
      supports: new Map(L.map((l) => [
        l,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])),
      loads: new Map(w.map((l, p) => [
        p,
        [
          0,
          0,
          N,
          0,
          0,
          0
        ]
      ]))
    }, Y.nodes.val = w, Y.elements.val = u;
    const F = r / (2 * (1 + h));
    Y.elementInputs.val = {
      elasticities: new Map(u.map((l, p) => [
        p,
        r
      ])),
      elasticitiesOrthogonal: new Map(u.map((l, p) => [
        p,
        r
      ])),
      thicknesses: new Map(u.map((l, p) => [
        p,
        i
      ])),
      poissonsRatios: new Map(u.map((l, p) => [
        p,
        h
      ])),
      shearModuli: new Map(u.map((l, p) => [
        p,
        F
      ]))
    }, Y.deformOutputs.val = Ft(w, u, Y.nodeInputs.val, Y.elementInputs.val), Y.analyzeOutputs.val = Dt(w, u, Y.elementInputs.val, Y.deformOutputs.val);
  });
  const at = j.state(""), st = j.state(void 0), lt = j.state(false);
  j.derive(() => {
    if (at.val === "Report") {
      const e = it({
        template: xt,
        data: Y
      });
      st.val = e;
    }
    if (at.val === "Code") {
      const e = it({
        template: jt,
        data: Y
      });
      st.val = e;
    }
    if (at.val === "Docs") {
      const e = it({
        template: Xt,
        data: Y
      });
      st.val = e;
    }
    if (at.val === "Print") {
      const e = it({
        template: xt,
        data: Y
      }), a = window.open("", "_blank");
      if (a) {
        const i = (e == null ? void 0 : e.innerHTML) || "";
        a.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Plate Shell Thin - Report</title>
        </head>
        <body>
          ${i}
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
  const mt = j.state(true), U = document.createElement("button");
  U.className = "toolbar-toggle";
  U.innerHTML = "\u2212";
  U.title = "Ocultar/Mostrar botones";
  U.onclick = () => {
    mt.val = !mt.val, mt.val ? (document.body.classList.remove("toolbar-hidden"), U.innerHTML = "\u2212", U.classList.remove("collapsed")) : (document.body.classList.add("toolbar-hidden"), U.innerHTML = "+", U.classList.add("collapsed"));
  };
  document.body.append(At(Q), kt({
    mesh: Y,
    settingsObj: {
      nodes: false,
      deformedShape: true,
      loads: false,
      shellResults: "displacementZ"
    }
  }), Et(Y), Ct({
    position: "bottom-center"
  }), Nt({
    dialogBody: st
  }), St({
    clickedButton: at,
    buttons: [
      "Report",
      "Code",
      "Docs",
      "Print"
    ],
    sourceCode: "https://github.com/GiorgioBurbanelli89/awatif-ejemplos/tree/master/plate-shell-thin",
    author: "https://github.com/GiorgioBurbanelli89"
  }), U);
  const qt = new MutationObserver((e) => {
    e.forEach((a) => {
      a.addedNodes.forEach((i) => {
        var _a, _b, _c;
        if (i instanceof HTMLElement) {
          const r = ((_a = i.querySelector) == null ? void 0 : _a.call(i, '[class*="dialog"]')) || (((_c = (_b = i.className) == null ? void 0 : _b.includes) == null ? void 0 : _c.call(_b, "dialog")) ? i : null);
          if (r && !r.querySelector(".dialog-maximize")) {
            const h = document.createElement("button");
            h.className = "dialog-maximize", h.innerHTML = "\u26F6", h.title = "Maximizar/Restaurar", h.onclick = (z) => {
              z.stopPropagation(), lt.val = !lt.val, lt.val ? (document.body.classList.add("dialog-maximized"), h.innerHTML = "\u26F6") : (document.body.classList.remove("dialog-maximized"), h.innerHTML = "\u26F6");
            }, r.style.position = "relative", r.appendChild(h);
          }
        }
      });
    });
  });
  qt.observe(document.body, {
    childList: true,
    subtree: true
  });
  j.derive(() => {
    st.val || (document.body.classList.remove("dialog-maximized"), lt.val = false);
  });
});
