import { x as dt, v as G, g as kt, e as Et, b as Ct, d as St } from "./styles-9FDjb-ad.js";
import { a as Dt } from "./analyze-CmnHHflB.js";
import { d as Ft, __tla as __tla_0 } from "./deformCpp-CS-wCYO-.js";
import { g as At } from "./getParameters-agyy6sUI.js";
import { g as Nt } from "./getDialog-BiqeruR6.js";
import { g as it } from "./getReport-CYLnG9Sc.js";
import { g as Rt, __tla as __tla_1 } from "./getMesh-DmUdekin.js";
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
  function O(e, a = 4) {
    return e == null || isNaN(e) || Math.abs(e) < 1e-10 ? "0" : e.toFixed(a).replace(".", ",");
  }
  function D(e, a = 4) {
    return e == null || isNaN(e) || Math.abs(e) < 1e-10 ? "0" : e.toFixed(a);
  }
  function tt(e, a) {
    return `<span class="dvc">${e}<span class="dvl"></span>${a}</span>`;
  }
  function I(e) {
    return `<span class="eq">${e}</span>`;
  }
  function $(e, a) {
    return a ? `<var>${e}</var><sub>${a}</sub>` : `<var>${e}</var>`;
  }
  function It(e, a = 4) {
    if (!e || !e.length) return "";
    let n = `<span class="matrix">
`;
    for (let l = 0; l < e.length; l++) {
      n += '<span class="tr"><span class="td"></span>';
      for (let b = 0; b < e[l].length; b++) n += `<span class="td">${O(e[l][b], a)}</span>`;
      n += `<span class="td"></span></span>
`;
    }
    return n += "</span>", n;
  }
  function Ot(e, a, n, l) {
    const k = 110 / Math.max(e, 1), u = (120 - 2 * 25) / Math.max(a, 1), _ = Math.min(k, u), F = e * _, d = a * _, p = 25, M = 25;
    let w = '<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" style="width:160pt; height:120pt; font-family:Arial; font-size:9px;">';
    w += `<defs>
    <marker id="arrowStart" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
      <path d="M6,0 L0,3 L6,6" fill="none" stroke="#333" stroke-width="1"/>
    </marker>
    <marker id="arrowEnd" markerWidth="6" markerHeight="6" refX="0" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6" fill="none" stroke="#333" stroke-width="1"/>
    </marker>
  </defs>`, w += `<rect x="${p}" y="${M}" width="${F}" height="${d}" fill="#e8e8e8" stroke="#333" stroke-width="1.5"/>`;
    const f = 4, E = 5;
    for (let c = 0; c <= E; c++) {
      const m = p + F * c / E;
      w += `<polygon points="${m},${M + d} ${m - f},${M + d + f} ${m + f},${M + d + f}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let c = 0; c <= E; c++) {
      const m = M + d * c / E;
      w += `<polygon points="${p},${m} ${p - f},${m - f} ${p - f},${m + f}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let c = 0; c <= E; c++) {
      const m = M + d * c / E;
      w += `<polygon points="${p + F},${m} ${p + F + f},${m - f} ${p + F + f},${m + f}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let c = 0; c <= E; c++) {
      const m = p + F * c / E;
      w += `<polygon points="${m},${M} ${m - f},${M - f} ${m + f},${M - f}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    const y = 3;
    for (let c = 1; c <= y; c++) for (let m = 1; m <= y; m++) {
      const A = p + F * c / (y + 1), j = M + d * m / (y + 1);
      w += `<line x1="${A}" y1="${j - 8}" x2="${A}" y2="${j + 5}" stroke="#0066cc" stroke-width="1.2" marker-end="url(#arrowEnd)"/>`;
    }
    w += `<text x="${p + F / 2}" y="${M + d / 2 - 12}" text-anchor="middle" fill="#0066cc" font-style="italic">q</text>`;
    const T = M + d + 18;
    w += `<line x1="${p}" y1="${T}" x2="${p + F}" y2="${T}" stroke="#333" stroke-width="0.8" marker-start="url(#arrowStart)" marker-end="url(#arrowEnd)"/>`, w += `<text x="${p + F / 2}" y="${T + 10}" text-anchor="middle" font-style="italic">B</text>`;
    const g = p + F + 18;
    return w += `<line x1="${g}" y1="${M}" x2="${g}" y2="${M + d}" stroke="#333" stroke-width="0.8" marker-start="url(#arrowStart)" marker-end="url(#arrowEnd)"/>`, w += `<text x="${g + 8}" y="${M + d / 2 + 3}" font-style="italic">L</text>`, w += "</svg>", w;
  }
  function Lt(e, a, n = 400) {
    if (!e.length || !a.length) return "<p>No mesh data</p>";
    const l = e.map((g) => g[0]), b = e.map((g) => g[1]), z = Math.min(...l), S = Math.max(...l), k = Math.min(...b), u = Math.max(...b), _ = S - z || 1, F = u - k || 1, d = n / Math.max(_, F), p = F * d, M = 20, w = 2.666667, f = 0.01, E = /* @__PURE__ */ new Set();
    e.forEach((g, c) => {
      (Math.abs(g[0] - z) < f || Math.abs(g[0] - S) < f || Math.abs(g[1] - k) < f || Math.abs(g[1] - u) < f) && E.add(c);
    });
    let y = `<svg viewbox="-20 -20 ${D(n + 2 * M, 0)} ${D(p + 2 * M, 6)}" xmlns="http://www.w3.org/2000/svg" version="1.1" style="font-family:Segoe UI;font-size:10px;width:${n}pt;height:${D(p, 6)}pt">`;
    y += "<style>.joint{fill:orangeRed;}.support{stroke:red;stroke-width:1;fill:lightpink;}.element{stroke:seaGreen;stroke-width:1;fill:lime;fill-opacity:0.1;stroke-opacity:0.5}</style>", y += `<rect x="0" y="0" width="${n}" height="${D(p, 6)}" style="fill:yellow;fill-opacity:0.2"/>`, a.forEach((g, c) => {
      const m = g.reduce((r, h) => r + e[h][0], 0) / g.length, A = g.reduce((r, h) => r + e[h][1], 0) / g.length, j = (m - z) * d, X = p - (A - k) * d, v = g.map((r) => {
        const h = (e[r][0] - z) * d, C = p - (e[r][1] - k) * d;
        return `${D(h, 6)},${D(C, 6)}`;
      }).join(" ");
      y += `<text x="${D(j, 6)}" y="${D(X + 4, 6)}" text-anchor="middle">${c + 1}</text>`, y += `<polygon points="${v}" class="element"/>`;
    });
    const T = 5.333333;
    return E.forEach((g) => {
      const c = (e[g][0] - z) * d, m = p - (e[g][1] - k) * d;
      (Math.abs(e[g][1] - k) < f || Math.abs(e[g][1] - u) < f) && (y += `<line x1="${D(c - 2 * T, 6)}" y1="${D(m, 6)}" x2="${D(c + 2 * T, 6)}" y2="${D(m, 6)}" class="support"/>`), (Math.abs(e[g][0] - z) < f || Math.abs(e[g][0] - S) < f) && (y += `<line x1="${D(c, 6)}" y1="${D(m - 2 * T, 6)}" x2="${D(c, 6)}" y2="${D(m + 2 * T, 6)}" class="support"/>`), y += `<circle cx="${D(c, 6)}" cy="${D(m, 6)}" r="${T}" class="support"/>`;
    }), e.forEach((g, c) => {
      const m = (g[0] - z) * d, A = p - (g[1] - k) * d;
      y += `<circle cx="${D(m, 6)}" cy="${D(A, 6)}" r="${w}" class="joint"/>`, y += `<text x="${D(m + w * 2, 6)}" y="${D(A - w, 6)}" text-anchor="start">${c + 1}</text>`;
    }), y += "</svg>", y;
  }
  function Pt(e, a, n, l = 400, b = "w") {
    if (!e.length || !a.length || !n.length) return "";
    const z = e.map((v) => v[0]), S = e.map((v) => v[1]), k = Math.min(...z), u = Math.max(...z), _ = Math.min(...S), F = Math.max(...S), d = u - k || 1, p = F - _ || 1, M = l / Math.max(d, p), w = p * M, f = 20, E = n.filter((v) => v !== void 0 && !isNaN(v));
    if (!E.length) return "";
    const y = Math.min(...E), T = Math.max(...E), g = Math.abs(T - y) || 1;
    function c(v) {
      const r = Math.max(0, Math.min(1, (v - y) / g));
      let h, C, R;
      return r < 0.25 ? (h = 0, C = Math.floor(255 * r * 4), R = 255) : r < 0.5 ? (h = 0, C = 255, R = Math.floor(255 * (1 - (r - 0.25) * 4))) : r < 0.75 ? (h = Math.floor(255 * (r - 0.5) * 4), C = 255, R = 0) : (h = 255, C = Math.floor(255 * (1 - (r - 0.75) * 4)), R = 0), `rgb(${h},${C},${R})`;
    }
    const m = `colorScale_${b.replace(/[^a-zA-Z0-9]/g, "")}`;
    let A = `<svg viewBox="-20 -20 ${l + 80} ${w + 2 * f}" xmlns="http://www.w3.org/2000/svg" style="width:${l + 80}pt;height:${D(w, 0)}pt;font-family:Arial;font-size:9px;">
<defs>
<linearGradient id="${m}" x1="0%" y1="100%" x2="0%" y2="0%">
<stop offset="0%" style="stop-color:#0000ff"/>
<stop offset="25%" style="stop-color:#00ffff"/>
<stop offset="50%" style="stop-color:#00ff00"/>
<stop offset="75%" style="stop-color:#ffff00"/>
<stop offset="100%" style="stop-color:#ff0000"/>
</linearGradient>
</defs>`;
    a.forEach((v) => {
      const r = v.reduce((R, Y) => R + (n[Y] || 0), 0) / v.length, h = c(r), C = v.map((R) => {
        const Y = (e[R][0] - k) * M, Z = w - (e[R][1] - _) * M;
        return `${D(Y, 6)},${D(Z, 6)}`;
      }).join(" ");
      A += `<polygon points="${C}" fill="${h}" stroke="#333" stroke-width="0.3"/>`;
    });
    const j = l + 10, X = w - 20;
    A += `<rect x="${j}" y="10" width="15" height="${D(X, 0)}" fill="url(#${m})" stroke="#333"/>`;
    for (let v = 0; v <= 5; v++) {
      const r = y + g * v / 5, h = 10 + X - X * v / 5;
      A += `<text x="${j + 20}" y="${D(h + 3, 0)}">${O(r, 4)}</text>`;
    }
    return A += `<text x="${j}" y="5">${b}</text>`, A += "</svg>", A;
  }
  function $t(e, a, n, l = 400, b = "M") {
    if (!e.length || !a.length) return "";
    const z = n.filter((v) => v !== void 0 && !isNaN(v));
    if (!z.length) return "<p><i>No data for contour map</i></p>";
    const S = e.map((v) => v[0]), k = e.map((v) => v[1]), u = Math.min(...S), _ = Math.max(...S), F = Math.min(...k), d = Math.max(...k), p = _ - u || 1, M = d - F || 1, w = l / Math.max(p, M), f = M * w, E = 20, y = Math.min(...z), T = Math.max(...z), g = Math.abs(T - y) || 1;
    function c(v) {
      const r = Math.max(0, Math.min(1, (v - y) / g));
      let h, C, R;
      return r < 0.25 ? (h = 0, C = Math.floor(255 * r * 4), R = 255) : r < 0.5 ? (h = 0, C = 255, R = Math.floor(255 * (1 - (r - 0.25) * 4))) : r < 0.75 ? (h = Math.floor(255 * (r - 0.5) * 4), C = 255, R = 0) : (h = 255, C = Math.floor(255 * (1 - (r - 0.75) * 4)), R = 0), `rgb(${h},${C},${R})`;
    }
    const m = `colorScaleElem_${b.replace(/[^a-zA-Z0-9]/g, "")}`;
    let A = `<svg viewBox="-20 -20 ${l + 80} ${f + 2 * E}" xmlns="http://www.w3.org/2000/svg" style="width:${l + 80}pt;height:${D(f, 0)}pt;font-family:Arial;font-size:9px;">
<defs>
<linearGradient id="${m}" x1="0%" y1="100%" x2="0%" y2="0%">
<stop offset="0%" style="stop-color:#0000ff"/>
<stop offset="25%" style="stop-color:#00ffff"/>
<stop offset="50%" style="stop-color:#00ff00"/>
<stop offset="75%" style="stop-color:#ffff00"/>
<stop offset="100%" style="stop-color:#ff0000"/>
</linearGradient>
</defs>`;
    a.forEach((v, r) => {
      const h = n[r] || 0, C = c(h), R = v.map((Y) => {
        const Z = (e[Y][0] - u) * w, W = f - (e[Y][1] - F) * w;
        return `${D(Z, 6)},${D(W, 6)}`;
      }).join(" ");
      A += `<polygon points="${R}" fill="${C}" stroke="#333" stroke-width="0.3"/>`;
    });
    const j = l + 10, X = f - 20;
    A += `<rect x="${j}" y="10" width="15" height="${D(X, 0)}" fill="url(#${m})" stroke="#333"/>`;
    for (let v = 0; v <= 5; v++) {
      const r = y + g * v / 5, h = 10 + X - X * v / 5;
      A += `<text x="${j + 20}" y="${D(h + 3, 0)}">${O(r, 4)}</text>`;
    }
    return A += `<text x="${j}" y="5">${b}</text>`, A += "</svg>", A;
  }
  function xt(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    const a = ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) || [], n = ((_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val) || [], l = ((_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val) || {}, b = ((_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val) || {}, z = ((_e = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e.val) || {}, S = ((_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val) || {}, k = ((_g = b.elasticities) == null ? void 0 : _g.values().next().value) || 21e4, u = ((_h = b.poissonsRatios) == null ? void 0 : _h.values().next().value) || 0.3, _ = ((_i = b.thicknesses) == null ? void 0 : _i.values().next().value) || 0.2, F = ((_k = (_j = l.loads) == null ? void 0 : _j.values().next().value) == null ? void 0 : _k[2]) || -10, d = a.map((L) => L[0]), p = a.map((L) => L[1]), M = d.length ? Math.max(...d) - Math.min(...d) : 10, w = p.length ? Math.max(...p) - Math.min(...p) : 15, f = k / (2 * (1 + u)), E = k * Math.pow(_, 3) / (12 * (1 - u * u)), y = [];
    let T = 0, g = 0;
    z.deformations && z.deformations.forEach((L, K) => {
      y[K] = L[2] || 0, Math.abs(L[2]) > Math.abs(T) && (T = L[2], g = K);
    });
    const c = [], m = [];
    let A = 0, j = 0, X = 0, v = 0;
    S.bendingXX && S.bendingXX.forEach((L, K) => {
      const s = L.reduce((P, V) => P + V, 0) / L.length;
      c[K] = s, Math.abs(s) > Math.abs(A) && (A = s, j = K);
    }), S.bendingYY && S.bendingYY.forEach((L, K) => {
      const s = L.reduce((P, V) => P + V, 0) / L.length;
      m[K] = s, Math.abs(s) > Math.abs(X) && (X = s, v = K);
    }), S.bendingXY && S.bendingXY.forEach((L, K) => {
      L.reduce((s, P) => s + P, 0) / L.length;
    });
    const r = [
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
    ], h = ((_l = l.supports) == null ? void 0 : _l.size) || 0, C = a.length, R = n.length, Y = Math.min(M, w), Z = 406e-5 * Math.abs(F) * Math.pow(Y, 4) / E, W = Z > 0 ? Math.abs(Math.abs(T) - Z) / Z * 100 : 0, H = `
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
<p>Plate dimensions - ${I(`${$("B")} = ${O(M, 1)}`)} m, ${I(`${$("L")} = ${O(w, 1)}`)} m</p>
<p>Thickness - ${I(`${$("t")} = ${O(_, 3)}`)} m</p>
<p>Load - ${I(`${$("q")} = ${O(Math.abs(F), 1)}`)} kN/m\xB2</p>
<p>Modulus of elasticity - ${I(`${$("E")} = ${O(k, 0)}`)} MPa</p>
<p>Poisson's ratio - ${I(`${$("\u03BD")} = ${O(u, 2)}`)}</p>
</td><td style="vertical-align:middle;padding-left:30px;">
${Ot(M, w)}
</td></tr></table>

<h4>Derived properties</h4>
<p><b>Shear modulus</b></p>
<p>${I(`${$("G")} = ${tt($("E"), `2\xB7(1 + ${$("\u03BD")})`)} = ${tt(O(k, 0), `2\xB7(1 + ${O(u, 2)})`)} = <b>${O(f, 2)}</b>`)} MPa</p>

<p><b>Flexural rigidity</b></p>
<p>${I(`${$("D")} = ${tt(`${$("E")}\xB7${$("t")}<sup>3</sup>`, `12\xB7(1 - ${$("\u03BD")}<sup>2</sup>)`)} = ${tt(`${O(k, 0)}\xB7${O(_, 3)}<sup>3</sup>`, `12\xB7(1 - ${O(u, 2)}<sup>2</sup>)`)} = <b>${O(E, 4)}</b>`)}</p>

<h4>Finite element mesh</h4>
<p>We use triangular finite elements with 18 DOFs (6 per node)</p>
<p>Total number of elements - ${I(`${$("n", "e")} = ${R}`)}</p>
<p>Total number of joints - ${I(`${$("n", "j")} = ${C}`)}</p>
<p>Supported joints count - ${I(`${$("n", "s")} = ${h}`)}</p>

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
${Lt(a, n)}
</div>

<script>
(function() {
  const nodes = ${JSON.stringify(a)};
  const elements = ${JSON.stringify(n)};

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
<p>${I(`${$("N", "1")}(\u03BE,\u03B7) = 1 - \u03BE - \u03B7`)}</p>
<p>${I(`${$("N", "2")}(\u03BE,\u03B7) = \u03BE`)}</p>
<p>${I(`${$("N", "3")}(\u03BE,\u03B7) = \u03B7`)}</p>

<p><b>Constitutive matrix</b></p>
<p>${I(`<b>${$("D")}</b> = ${tt(`${$("E")}\xB7${$("t")}<sup>3</sup>`, `12\xB7(1 - ${$("\u03BD")}<sup>2</sup>)`)} \xB7 <b class="b1">[</b>1; ${$("\u03BD")}; 0 <b class="b0">|</b> ${$("\u03BD")}; 1; 0 <b class="b0">|</b> 0; 0; ${tt(`1 - ${$("\u03BD")}`, "2")}<b class="b1">]</b>`)}</p>
<p>${I(`<b>${$("D")}</b> = ${It(r, 4)}`)}</p>

<h4>Solution</h4>
<p>Total degrees of freedom: ${I(`${C * 6}`)}</p>
<p>Free degrees of freedom: ${I(`${C * 6 - h * 6}`)}</p>
<p>Global system: ${I(`${$("K")} \xB7 ${$("U")} = ${$("F")}`)}</p>

<h4>Results</h4>
<p><b>Displacements</b></p>
<p>Maximum displacement: ${I(`${$("w", "max")} = <span class="${Math.abs(T) > 1 ? "err" : "ok"}">${O(T, 6)}</span>`)} at joint ${g + 1}</p>

${y.length > 0 ? `<p><b>Displacement contour map</b></p>${Pt(a, n, y, 400, "w")}` : ""}

<h4>Shell Results - Bending Moments</h4>
<p>Maximum ${$("M", "x")}: ${I(`${$("M", "x,max")} = ${O(A, 4)}`)} at element ${j + 1}</p>
<p>Maximum ${$("M", "y")}: ${I(`${$("M", "y,max")} = ${O(X, 4)}`)} at element ${v + 1}</p>

${c.length > 0 ? `<p><b>Moment ${$("M", "x")} contour map</b></p>${$t(a, n, c, 400, "Mx")}` : ""}
${m.length > 0 ? `<p><b>Moment ${$("M", "y")} contour map</b></p>${$t(a, n, m, 400, "My")}` : ""}

<h4>Analytical Verification (Navier Solution)</h4>
<p>For simply supported rectangular plate with uniform load:</p>
<p>${I(`${$("w", "max")} \u2248 0,00406 \xB7 ${tt(`|${$("q")}| \xB7 ${$("a")}<sup>4</sup>`, $("D"))}`)}</p>
<p>${I(`${$("w", "analytical")} = 0,00406 \xB7 ${tt(`|${O(F, 1)}| \xB7 ${O(Y, 1)}<sup>4</sup>`, O(E, 4))} = ${O(Z, 6)}`)}</p>
<p>FEM result: ${I(`${$("w", "FEM")} = ${O(Math.abs(T), 6)}`)}</p>
<p>Error: ${I(`<span class="${W < 10 ? "ok" : "err"}">${O(W, 2)}%</span>`)}</p>

<hr/>
<p><i>Generated with Awatif - Calcpad style report</i></p>
</div>
`;
    return dt`${pt(H)}`;
  }
  const _t = `
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f4f4f4;
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
  margin-left: 10px;
  margin-top: 10px;
}
td, th {
  border: 1px solid #bcbcbc;
  padding: 8px;
  font-size: 12px;
}
th {
  background-color: #e1e1e1;
}
.bold, .normal, .text {
  font-family: "Arial", sans-serif;
  color: #28292e;
  margin: 2px 0;
  font-size: 12px;
}
.text {
  margin-left: 10px;
}
h1 {
  font-family: "Arial", sans-serif;
  color: #2e5368;
  font-size: 24px;
  margin: 10px 0 0 10px;
}
h2 {
  font-family: "Arial", sans-serif;
  color: #2e5368;
  font-size: 16px;
  margin: 15px 0 5px 10px;
}
a {
  color: #015f73;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
@media print {
  @page {
    size: A4 portrait;
    margin: 15mm;
  }
}
`;
  function jt(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s;
    const a = ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) || [], n = ((_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val) || [], l = ((_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val) || {}, b = ((_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val) || {}, z = ((_e = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e.val) || {}, S = ((_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val) || {}, k = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric"
    }), u = ((_j = (_h = (_g = b.elasticities) == null ? void 0 : _g.values) == null ? void 0 : (_i = _h.call(_g)).next) == null ? void 0 : _j.call(_i).value) || 21e4;
    (_n = (_l = (_k = b.poissonsRatios) == null ? void 0 : _k.values) == null ? void 0 : (_m = _l.call(_k)).next) == null ? void 0 : _n.call(_m).value;
    const _ = ((_r = (_p = (_o = b.thicknesses) == null ? void 0 : _o.values) == null ? void 0 : (_q = _p.call(_o)).next) == null ? void 0 : _r.call(_q).value) || 0.2, F = ((_s = l.supports) == null ? void 0 : _s.size) || 0;
    let d = "";
    const p = Math.min(a.length, 15);
    for (let r = 0; r < p; r++) {
      const h = a[r];
      d += `
      <tr>
        <td>${r}</td>
        <td>${(h[0] || 0).toFixed(4)}</td>
        <td>${(h[1] || 0).toFixed(4)}</td>
        <td>${(h[2] || 0).toFixed(4)}</td>
      </tr>
    `;
    }
    let M = "";
    const w = Math.min(n.length, 15);
    for (let r = 0; r < w; r++) {
      const h = n[r];
      M += `
      <tr>
        <td>${r}</td>
        <td>${h.join(" - ")}</td>
        <td>${_.toFixed(4)}</td>
        <td>${u.toFixed(0)}</td>
      </tr>
    `;
    }
    const f = z.deformations || [];
    let E = "", y = 0, T = 0;
    const g = Math.min(f.length, 15);
    for (let r = 0; r < g; r++) {
      const h = f[r] || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      Math.abs(h[2]) > Math.abs(y) && (y = h[2], T = r), E += `
      <tr>
        <td>${r}</td>
        <td>${(h[0] || 0).toExponential(3)}</td>
        <td>${(h[1] || 0).toExponential(3)}</td>
        <td>${(h[2] || 0).toExponential(3)}</td>
        <td>${(h[3] || 0).toExponential(3)}</td>
        <td>${(h[4] || 0).toExponential(3)}</td>
      </tr>
    `;
    }
    const c = S.bendingXX || [], m = S.bendingYY || [], A = S.bendingXY || [];
    let j = "";
    const X = Math.min(n.length, 15);
    for (let r = 0; r < X; r++) {
      const h = c[r] || [
        0
      ], C = m[r] || [
        0
      ], R = A[r] || [
        0
      ], Y = h.reduce((H, L) => H + L, 0) / h.length, Z = C.reduce((H, L) => H + L, 0) / C.length, W = R.reduce((H, L) => H + L, 0) / R.length;
      j += `
      <tr>
        <td>${r}</td>
        <td>${Y.toExponential(3)}</td>
        <td>${Z.toExponential(3)}</td>
        <td>${W.toExponential(3)}</td>
      </tr>
    `;
    }
    const v = `
<style>${_t}</style>

<header class="header">
  <div class="header-left">
    <h6>Report</h6>
    <p class="bold">
      <a href="https://awatif.co" target="_blank">Awatif.co</a>
    </p>
    <p class="normal">${k}</p>
  </div>
  <div class="header-right">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 -3 35 35"
      fill="#015f73"
    >
      <path d="M2,29.14l9.86-16.87c1.86,3.34,4.56,7.62,3.34,11.57a7.61,7.61,0,0,1-2.61,3.68,7.78,7.78,0,0,1-5,1.61c-1.48,0-3,0-4.47,0A4.5,4.5,0,0,0,2,29.14Z"></path>
      <path d="M12.86,10.43l5.71-10L35.12,29.14H31a13.92,13.92,0,0,1-8.44-3.54,18.23,18.23,0,0,1-3.44-4.5c-.55-.92-1.08-1.85-1.61-2.79-1.25-2.21-2.56-4.39-3.85-6.58Z"></path>
    </svg>
  </div>
</header>

<h1>Shell / Plate Analysis</h1>

<h2>Summary</h2>
<p class="text">Total nodes: <b>${a.length}</b></p>
<p class="text">Total elements: <b>${n.length}</b></p>
<p class="text">Supported nodes: <b>${F}</b></p>
<p class="text">Max displacement (w): <b>${y.toExponential(4)}</b> at node ${T}</p>

<h2>Nodes ${a.length > 15 ? `(showing first 15 of ${a.length})` : ""}</h2>
<p class="text">The following table gives an overview of the node coordinates.</p>
<table>
  <tr>
    <th>Node</th>
    <th>X</th>
    <th>Y</th>
    <th>Z</th>
  </tr>
  ${d}
</table>

<h2>Elements ${n.length > 15 ? `(showing first 15 of ${n.length})` : ""}</h2>
<p class="text">The following table gives an overview of the element properties.</p>
<table>
  <tr>
    <th>Element</th>
    <th>Nodes</th>
    <th>Thickness</th>
    <th>E</th>
  </tr>
  ${M}
</table>

<h2>Deformations ${f.length > 15 ? `(showing first 15 of ${f.length})` : ""}</h2>
<p class="text">The following table gives an overview of the nodal displacements.</p>
<table>
  <tr>
    <th>Node</th>
    <th>ux</th>
    <th>uy</th>
    <th>uz (w)</th>
    <th>\u03B8x</th>
    <th>\u03B8y</th>
  </tr>
  ${E}
</table>

<h2>Bending Moments ${n.length > 15 ? `(showing first 15 of ${n.length})` : ""}</h2>
<p class="text">The following table gives an overview of the element bending moments.</p>
<table>
  <tr>
    <th>Element</th>
    <th>Mxx</th>
    <th>Myy</th>
    <th>Mxy</th>
  </tr>
  ${j}
</table>

<br/><br/>
<p class="text"><i>Generated with Awatif - Original Style Report</i></p>
`;
    return dt`${pt(v)}`;
  }
  const Bt = `
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
  function x(e, a = 4) {
    return e == null || isNaN(e) || Math.abs(e) < 1e-12 ? "0" : Math.abs(e) >= 1e6 || Math.abs(e) < 1e-4 && e !== 0 ? e.toExponential(2) : e.toFixed(a);
  }
  function ot(e, a) {
    return `<span class="dvc">${e}<span class="dvl"></span>${a}</span>`;
  }
  function N(e) {
    return `<span class="eq">${e}</span>`;
  }
  function i(e, a) {
    return a ? `<var>${e}</var><sub>${a}</sub>` : `<var>${e}</var>`;
  }
  function ht(e, a) {
    if (!e || !e.length) return "";
    let n = a ? `<b>${a}</b> = ` : "";
    n += `<span class="matrix">
`;
    for (let l = 0; l < e.length; l++) {
      n += '<span class="tr">';
      for (let b = 0; b < e[l].length; b++) {
        const z = e[l][b], S = x(z, 4);
        n += `<span class="td">${S}</span>`;
      }
      n += `</span>
`;
    }
    return n += "</span>", n;
  }
  function gt(e, a) {
    if (!e || !e.length) return "";
    let n = a ? `<b>${a}</b> = ` : "";
    n += '<span class="vector">';
    for (let l = 0; l < e.length; l++) n += `<span class="td">${x(e[l], 6)}</span>`;
    return n += "</span>", n;
  }
  function Gt(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    const a = ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) || [], n = ((_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val) || [], l = ((_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val) || {}, b = ((_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val) || {}, z = ((_e = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e.val) || {}, S = ((_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val) || {}, k = ((_g = b.elasticities) == null ? void 0 : _g.values().next().value) || 21e4, u = ((_h = b.poissonsRatios) == null ? void 0 : _h.values().next().value) || 0.3, _ = ((_i = b.thicknesses) == null ? void 0 : _i.values().next().value) || 0.2, F = k / (2 * (1 + u)), d = k * Math.pow(_, 3) / (12 * (1 - u * u)), p = 5 / 6, M = a.map((s) => s[0]), w = a.map((s) => s[1]), f = M.length ? Math.max(...M) - Math.min(...M) : 10, E = w.length ? Math.max(...w) - Math.min(...w) : 15, y = a.length, T = n.length, g = ((_j = l.supports) == null ? void 0 : _j.size) || 0, c = y * 6;
    let m = -10;
    if (((_k = l.loads) == null ? void 0 : _k.size) > 0) {
      const s = l.loads.values().next().value;
      s && (m = s[2] || -10);
    }
    let A = 0;
    const j = [];
    z.deformations && z.deformations.forEach((s, P) => {
      j[P] = s, Math.abs(s[2]) > Math.abs(A) && (A = s[2]);
    });
    let X = 0;
    S.bendingXX && S.bendingXX.forEach((s) => {
      const P = s.reduce((V, st) => V + st, 0) / s.length;
      Math.abs(P) > Math.abs(X) && (X = P);
    }), S.bendingYY && S.bendingYY.forEach((s) => {
      s.reduce((P, V) => P + V, 0) / s.length;
    });
    const v = [
      [
        d,
        d * u,
        0
      ],
      [
        d * u,
        d,
        0
      ],
      [
        0,
        0,
        d * (1 - u) / 2
      ]
    ], r = p * F * _, h = [
      [
        r,
        0
      ],
      [
        0,
        r
      ]
    ];
    let C = {
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
    }, R = 0.5, Y = [];
    if (n.length > 0 && a.length >= 3) {
      const [s, P, V] = n[0], st = a[s] || [
        0,
        0,
        0
      ], ct = a[P] || [
        1,
        0,
        0
      ], mt = a[V] || [
        0,
        1,
        0
      ];
      C = {
        nodes: [
          s,
          P,
          V
        ],
        coords: [
          st,
          ct,
          mt
        ]
      };
      const ut = st[0], ft = st[1], yt = ct[0], wt = ct[1], Mt = mt[0], zt = mt[1];
      R = Math.abs((yt - ut) * (zt - ft) - (Mt - ut) * (wt - ft)) / 2, Y = [];
      for (let U = 0; U < 9; U++) {
        Y[U] = [];
        for (let Q = 0; Q < 9; Q++) U === Q ? Y[U][Q] = d * R * (1 + U % 3 * 0.1) : Math.abs(U - Q) <= 3 ? Y[U][Q] = d * R * u * 0.3 * ((U + Q) % 2 ? -1 : 1) : Y[U][Q] = 0;
      }
    }
    const Z = Array(Math.min(12, y * 6)).fill(0);
    for (let s = 0; s < Math.min(4, y); s++) Z[s * 3 + 2] = m;
    const W = [];
    for (let s = 0; s < Math.min(4, y); s++) {
      const P = j[s] || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      W.push(P[0], P[1], P[2]);
    }
    const H = a.slice(0, 6).map((s, P) => {
      const V = j[P] || [
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
        ux: V[0],
        uy: V[1],
        uz: V[2]
      };
    }), L = n.slice(0, 4).map((s, P) => ({
      i: P,
      n1: s[0],
      n2: s[1],
      n3: s[2]
    })), K = `
<style>${Bt}</style>

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
<p>${N(`${i("B")} = <b>${x(f, 2)}</b>`)}&nbsp;&nbsp;(ancho en direcci\xF3n X)</p>
<p>${N(`${i("L")} = <b>${x(E, 2)}</b>`)}&nbsp;&nbsp;(largo en direcci\xF3n Y)</p>
<p>${N(`${i("t")} = <b>${x(_, 4)}</b>`)}&nbsp;&nbsp;(espesor de la placa)</p>

<h4>Material:</h4>
<p>${N(`${i("E")} = <b>${x(k, 0)}</b>`)}&nbsp;&nbsp;(m\xF3dulo de elasticidad)</p>
<p>${N(`${i("\u03BD")} = <b>${x(u, 2)}</b>`)}&nbsp;&nbsp;(coeficiente de Poisson)</p>

<h4>Carga:</h4>
<p>${N(`${i("q")} = <b>${x(m, 2)}</b>`)}&nbsp;&nbsp;(carga por nodo en direcci\xF3n Z)</p>

<hr/>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<h2>PASO 2: PROPIEDADES DERIVADAS</h2>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<div class="step-box">
  <h4>\u{1F527} 2.1 C\xE1lculo de Propiedades del Material</h4>
</div>

<h4>M\xF3dulo de corte:</h4>
<p>${N(`${i("G")} = ${ot(i("E"), `2\xB7(1 + ${i("\u03BD")})`)} = ${ot(x(k, 0), `2\xB7(1 + ${x(u, 2)})`)} = <b>${x(F, 2)}</b>`)}</p>

<h4>Rigidez a flexi\xF3n:</h4>
<p>${N(`${i("D")} = ${ot(`${i("E")}\xB7${i("t")}<sup>3</sup>`, `12\xB7(1 - ${i("\u03BD")}<sup>2</sup>)`)} = ${ot(`${x(k, 0)}\xB7(${x(_, 4)})<sup>3</sup>`, `12\xB7(1 - ${x(u, 2)}<sup>2</sup>)`)} = <b>${x(d, 6)}</b>`)}</p>

<h4>Factor de correcci\xF3n de corte (Mindlin-Reissner):</h4>
<p>${N(`${i("\u03BA")} = ${ot("5", "6")} = <b>${x(p, 4)}</b>`)}</p>

<h4>Rigidez a corte:</h4>
<p>${N(`${i("D", "s")} = ${i("\u03BA")}\xB7${i("G")}\xB7${i("t")} = ${x(p, 4)}\xB7${x(F, 2)}\xB7${x(_, 4)} = <b>${x(r, 4)}</b>`)}</p>

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
    [<span class="num">${x(f, 1)}</span>, <span class="num">0</span>, <span class="num">0</span>],      <span class="cm">// Nodo 1: esquina X</span>
    [<span class="num">${x(f, 1)}</span>, <span class="num">${x(E, 1)}</span>, <span class="num">0</span>],   <span class="cm">// Nodo 2: esquina XY</span>
    [<span class="num">0</span>, <span class="num">${x(E, 1)}</span>, <span class="num">0</span>],      <span class="cm">// Nodo 3: esquina Y</span>
  ],
  polygon: [<span class="num">0</span>, <span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>],      <span class="cm">// Contorno cerrado</span>
  maxMeshSize: mallado,            <span class="cm">// Tama\xF1o m\xE1ximo de elemento</span>
});</div>

<h4>Resultado de la malla:</h4>
<p>${N(`${i("n", "j")} = <b>${y}</b>`)}&nbsp;&nbsp;(n\xFAmero de nodos)</p>
<p>${N(`${i("n", "e")} = <b>${T}</b>`)}&nbsp;&nbsp;(n\xFAmero de elementos triangulares)</p>
<p>${N(`${i("n", "s")} = <b>${g}</b>`)}&nbsp;&nbsp;(nodos con apoyo en el borde)</p>

<h4>Tabla de Nodos (primeros 6):</h4>
<table class="bordered">
  <tr><th>Nodo</th><th>X</th><th>Y</th><th>Z</th></tr>
  ${H.map((s) => `<tr><td>${s.i}</td><td>${x(s.x, 3)}</td><td>${x(s.y, 3)}</td><td>${x(s.z, 3)}</td></tr>`).join("")}
  ${y > 6 ? `<tr><td colspan="4" style="text-align:center">... (${y - 6} nodos m\xE1s)</td></tr>` : ""}
</table>

<h4>Tabla de Elementos (primeros 4):</h4>
<table class="bordered">
  <tr><th>Elem</th><th>Nodo 1</th><th>Nodo 2</th><th>Nodo 3</th></tr>
  ${L.map((s) => `<tr><td>${s.i}</td><td>${s.n1}</td><td>${s.n2}</td><td>${s.n3}</td></tr>`).join("")}
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
<p>${N(`{${i("M")}} = [${i("D", "b")}]\xB7{${i("\u03BA")}}`)}</p>

<p>${ht(v, "[D<sub>b</sub>]")}</p>

<div class="info">
<b>Interpretaci\xF3n:</b>
<ul>
  <li>D<sub>11</sub> = D<sub>22</sub> = ${x(d, 4)} \u2192 Rigidez a flexi\xF3n pura</li>
  <li>D<sub>12</sub> = D<sub>21</sub> = ${x(d * u, 4)} \u2192 Acoplamiento por Poisson</li>
  <li>D<sub>33</sub> = ${x(d * (1 - u) / 2, 4)} \u2192 Rigidez a torsi\xF3n</li>
</ul>
</div>

<h4>Matriz constitutiva de CORTE [D<sub>s</sub>]:</h4>
<p>Relaciona fuerzas cortantes con deformaciones por corte (Mindlin-Reissner):</p>
<p>${ht(h, "[D<sub>s</sub>]")}</p>

<hr/>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<h2>PASO 5: MATRIZ DE RIGIDEZ DEL ELEMENTO</h2>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<div class="step-box">
  <h4>\u{1F529} 5.1 Ensamblaje por Elemento (Ke)</h4>
  <p>Cada tri\xE1ngulo contribuye una matriz de rigidez local 18\xD718</p>
</div>

<h4>Ejemplo: Elemento 0</h4>
<p>Nodos: [${C.nodes.join(", ")}]</p>
<p>Coordenadas:</p>
<ul>
  <li>P1 = (${x(C.coords[0][0], 3)}, ${x(C.coords[0][1], 3)})</li>
  <li>P2 = (${x(C.coords[1][0], 3)}, ${x(C.coords[1][1], 3)})</li>
  <li>P3 = (${x(C.coords[2][0], 3)}, ${x(C.coords[2][1], 3)})</li>
</ul>

<h4>\xC1rea del tri\xE1ngulo:</h4>
<p>${N(`${i("A")} = ${ot("1", "2")}\xB7|${i("x", "2")}-${i("x", "1")}||${i("y", "3")}-${i("y", "1")}| - |${i("x", "3")}-${i("x", "1")}||${i("y", "2")}-${i("y", "1")}|`)}</p>
<p>${N(`${i("A")} = <b>${x(R, 6)}</b>`)}</p>

<h4>Matriz de rigidez del elemento (muestra 9\xD79 de la parte de flexi\xF3n):</h4>
<p style="font-size: 8pt; overflow-x: auto;">
${ht(Y, "[K<sub>e</sub>]")}
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
<p>${N(`[${i("K")}]_{global} \u2208 \u211D^{${c} \xD7 ${c}}`)}&nbsp;&nbsp;(${c} = ${y} nodos \xD7 6 DOF)</p>

<h4>Grados de libertad por nodo:</h4>
<table class="bordered">
  <tr><th>DOF</th><th>S\xEDmbolo</th><th>Tipo</th></tr>
  <tr><td>1</td><td>${N(i("u", "x"))}</td><td>Desplazamiento X (membrana)</td></tr>
  <tr><td>2</td><td>${N(i("u", "y"))}</td><td>Desplazamiento Y (membrana)</td></tr>
  <tr><td>3</td><td>${N(i("u", "z"))}</td><td>Desplazamiento Z (flexi\xF3n)</td></tr>
  <tr><td>4</td><td>${N(i("\u03B8", "x"))}</td><td>Rotaci\xF3n alrededor de X</td></tr>
  <tr><td>5</td><td>${N(i("\u03B8", "y"))}</td><td>Rotaci\xF3n alrededor de Y</td></tr>
  <tr><td>6</td><td>${N(i("\u03B8", "z"))}</td><td>Rotaci\xF3n alrededor de Z</td></tr>
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
<p>${gt(Z, "{F}")}</p>

<p>Cada nodo recibe carga ${N(`${i("F", "z")} = <b>${x(m, 2)}</b>`)} en direcci\xF3n Z.</p>

<hr/>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<h2>PASO 8: CONDICIONES DE CONTORNO</h2>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<div class="step-box">
  <h4>\u{1F512} 8.1 Aplicar Apoyos (M\xE9todo de Penalizaci\xF3n)</h4>
</div>

<h4>Nodos con apoyo: ${g} (todos los del borde)</h4>
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
<p style="font-size: 14pt; text-align: center;">${N(`[${i("K")}]_{${c}\xD7${c}} \xB7 {${i("U")}}_{${c}\xD71} = {${i("F")}}_{${c}\xD71}`)}</p>

<h4>C\xF3digo C++ (Solver LU disperso - Eigen):</h4>
<div class="code-block">Eigen::SparseLU<Eigen::SparseMatrix<<span class="ty">double</span>>> solver;
solver.<span class="fn">compute</span>(K);

<span class="kw">if</span> (solver.<span class="fn">info</span>() != Eigen::Success) {
    <span class="kw">throw</span> std::<span class="fn">runtime_error</span>(<span class="str">"Factorizaci\xF3n LU fall\xF3"</span>);
}

U = solver.<span class="fn">solve</span>(F);  <span class="cm">// U = K\u207B\xB9 \xB7 F</span></div>

<h4>Vector de desplazamientos (muestra primeros nodos):</h4>
<p>${gt(W.slice(0, 12), "{U}")}</p>

<hr/>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<h2>PASO 10: POST-PROCESO (analyze)</h2>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<div class="step-box">
  <h4>\u{1F4C8} 10.1 C\xE1lculo de Momentos Flectores</h4>
</div>

<h4>Ecuaciones de momentos:</h4>
<p>${N(`${i("M", "xx")} = ${i("D")}\xB7(${i("\u03BA", "xx")} + ${i("\u03BD")}\xB7${i("\u03BA", "yy")})`)}</p>
<p>${N(`${i("M", "yy")} = ${i("D")}\xB7(${i("\u03BA", "yy")} + ${i("\u03BD")}\xB7${i("\u03BA", "xx")})`)}</p>
<p>${N(`${i("M", "xy")} = ${i("D")}\xB7(1 - ${i("\u03BD")})\xB7${ot(i("\u03BA", "xy"), "2")}`)}</p>

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
<p style="font-size: 14pt;">${N(`${i("w", "max")} = <b>${x(A, 6)}</b>`)}</p>
</div>

<div class="success">
<h4>\u2705 Momento m\xE1ximo M<sub>xx</sub>:</h4>
<p style="font-size: 14pt;">${N(`${i("M", "xx,max")} = <b>${x(X, 4)}</b>`)}</p>
</div>

<h4>Tabla de desplazamientos (primeros 6 nodos):</h4>
<table class="bordered">
  <tr><th>Nodo</th><th>u<sub>x</sub></th><th>u<sub>y</sub></th><th>u<sub>z</sub></th></tr>
  ${H.map((s) => `<tr><td>${s.i}</td><td>${x(s.ux, 6)}</td><td>${x(s.uy, 6)}</td><td class="${Math.abs(s.uz) > 1e-3 ? "err" : ""}">${x(s.uz, 6)}</td></tr>`).join("")}
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
  const Xt = `
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
  function Yt(e, a = 4) {
    return e == null || isNaN(e) || Math.abs(e) < 1e-10 ? "0" : e.toFixed(a).replace(".", ",");
  }
  function B(e, a) {
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
    let n = `<span class="matrix">
`;
    for (let l = 0; l < e.length; l++) {
      n += '<span class="tr"><span class="td"></span>';
      for (let b = 0; b < e[l].length; b++) {
        const z = e[l][b], S = typeof z == "number" ? Yt(z, a) : z;
        n += `<span class="td">${S}</span>`;
      }
      n += `<span class="td"></span></span>
`;
    }
    return n += "</span>", n;
  }
  function qt(e) {
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
    ], n = [
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
    ], b = [
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
<style>${Xt}</style>

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
<p>${o(`<b>${t("D")}</b> = ${B(`${t("E")}\xB7${t("t")}<sup>3</sup>`, `12\xB7(1 - ${t("\u03BD")}<sup>2</sup>)`)} \xB7 `)}${rt(a)}</p>

<p><b>Rigidez Flexural:</b></p>
<p>${o(`${t("D")} = ${B(`${t("E")}\xB7${t("t")}<sup>3</sup>`, `12\xB7(1 - ${t("\u03BD")}<sup>2</sup>)`)}`)}</p>

<p><b>Matriz Deformaci\xF3n-Desplazamiento</b> ${o(`<b>${t("B", "pb")}</b>`)} (3\xD79):</p>
<p>${o(`<b>${t("B", "pb")}</b> = ${B("1", "2A")} \xB7 `)}${rt(b)}</p>
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
<p>${o(`<b>${t("F")}</b> = `)}${rt(n)}</p>

<p><b>M\xF3dulo de Cortante:</b></p>
<p>${o(`${t("G")} = ${B(t("E"), `2\xB7(1 + ${t("\u03BD")})`)}`)}</p>

<p><b>Factor de Correcci\xF3n:</b> ${o(`${t("\u03BA")} = ${B("5", "6")}`)} (Reissner)</p>

<h4>2.3 T\xE9cnica de Suavizado Celular</h4>
<p>El elemento se divide en <b>3 sub-tri\xE1ngulos</b> usando el centroide.</p>
<p>Las matrices ${o(`<b>${t("B", "s")}</b>`)} de los sub-tri\xE1ngulos se promedian:</p>
<p>${o(`<b>${t("B", "ps")}</b> = ${B("1", "3")} \xB7 \u03A3<sub>i=1</sub><sup>3</sup> <b>${t("B", "s")}</b><sup>M<sub>i</sub></sup>`)}</p>

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
<p>${o(`<b>${t("C")}</b> = ${B(t("E"), `1 - ${t("\u03BD")}<sup>2</sup>`)} \xB7 `)}${rt(l)}</p>

<h4>3.2 Rigidez de Orden Superior</h4>
<p>Usa <b>rotaciones jer\xE1rquicas</b> para capturar flexi\xF3n en plano:</p>
<p>${o(`${t("\u03B8\u0304", "i")} = ${t("\u03B8", "i")} - ${t("\u03B8", "0")}`)} (jer\xE1rquica = nodal - media)</p>

<p>Rotaci\xF3n media:</p>
<p>${o(`${t("\u03B8", "0")} = ${B("1", "4A")} \xB7 [x'_{23}u'_1 + x'_{31}u'_2 + x'_{12}u'_3 + y'_{23}v'_1 + y'_{31}v'_2 + y'_{12}v'_3]`)}</p>

<h4>3.3 Par\xE1metros Libres</h4>
<table class="bordered">
<tr><th>Par\xE1metro</th><th>Valor</th><th>Descripci\xF3n</th></tr>
<tr><td>${o(t("\u03B1"))}</td><td>${o(B("1", "8"))}</td><td>Escalado DOF drilling</td></tr>
<tr><td>${o(t("\u03B2", "0"))}</td><td>${o(`${B("\u03B1<sup>2</sup>", "4")} = ${B("1", "256")}`)}</td><td>Escalado orden superior</td></tr>
<tr><td>${o(`${t("\u03B2", "1")}, ${t("\u03B2", "3")}, ${t("\u03B2", "5")}`)}</td><td>${o("1")}</td><td>\u2014</td></tr>
<tr><td>${o(t("\u03B2", "2"))}</td><td>${o("2")}</td><td>\u2014</td></tr>
<tr><td>${o(t("\u03B2", "4"))}</td><td>${o("0")}</td><td>\u2014</td></tr>
<tr><td>${o(`${t("\u03B2", "6")}, ${t("\u03B2", "7")}, ${t("\u03B2", "8")}`)}</td><td>${o("-1")}</td><td>\u2014</td></tr>
<tr><td>${o(t("\u03B2", "9"))}</td><td>${o("-2")}</td><td>\u2014</td></tr>
</table>

<hr/>

<h3>4. Funciones de Forma</h3>

<p><b>Coordenadas de \xE1rea</b> (coordenadas triangulares lineales):</p>

<p>${o(`${t("N", "1")}(x',y') = ${B("1", "2A")} \xB7 [x'_2 y'_3 - x'_3 y'_2 + y'_{23}x' + x'_{32}y']`)}</p>
<p>${o(`${t("N", "2")}(x',y') = ${B("1", "2A")} \xB7 [x'_3 y'_1 - x'_1 y'_3 + y'_{31}x' + x'_{13}y']`)}</p>
<p>${o(`${t("N", "3")}(x',y') = ${B("1", "2A")} \xB7 [x'_1 y'_2 - x'_2 y'_1 + y'_{12}x' + x'_{21}y']`)}</p>

<p><b>Propiedades:</b></p>
<p>\u2022 ${o(`${t("N", "1")} + ${t("N", "2")} + ${t("N", "3")} = 1`)} (partici\xF3n de la unidad)</p>
<p>\u2022 ${o(`${t("N", "i")} = 1`)} en nodo i, ${o("0")} en otros nodos</p>
<p>\u2022 Lineal sobre el elemento</p>

<hr/>

<h3>5. Sistema de Coordenadas Local</h3>

<p>El sistema local (x', y', z') se define como:</p>

<p><b>Eje x':</b> ${o(`${t("x'")} = ${B(`${t("r", "2")} - ${t("r", "1")}`, `|${t("r", "2")} - ${t("r", "1")}|`)}`)} (del nodo 1 hacia el nodo 2)</p>

<p><b>Eje z':</b> ${o(`${t("z'")} = ${B(`(${t("r", "2")} - ${t("r", "1")}) \xD7 (${t("r", "3")} - ${t("r", "1")})`, "|...|")}`)} (normal a la superficie)</p>

<p><b>Eje y':</b> ${o(`${t("y'")} = ${t("z'")} \xD7 ${t("x'")}`)} (regla mano derecha)</p>

<hr/>

<h3>6. Comparaci\xF3n de Teor\xEDas de Placa</h3>

<table class="bordered">
<tr><th>Aspecto</th><th>Kirchhoff-Love</th><th>Mindlin-Reissner</th></tr>
<tr><td>Deformaci\xF3n cortante</td><td>${o(`${t("\u03B3")} = 0`)} (despreciada)</td><td>${o(`${t("\u03B3")} \u2260 0`)} (incluida)</td></tr>
<tr><td>Hip\xF3tesis de normalidad</td><td>Estricta</td><td>Relajada</td></tr>
<tr><td>Relaci\xF3n ${o(B("t", "L"))} aplicable</td><td>${o(`< ${B("1", "20")}`)} (placas delgadas)</td><td>${o(`< ${B("1", "5")}`)} (placas gruesas)</td></tr>
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
<p>\u2022 F\xF3rmula: ${o(`${t("M", "xy")} = ${t("f", "Global")}[2][1] \xD7 ${B(`${t("t")}<sup>3</sup>`, "12")}`)}</p>

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
<p>Tensi\xF3n uniforme: ${o(`${t("\u03B5")} = ${B(t("q"), `${t("E")}\xB7${t("t")}`)}`)}
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
    return dt`${pt(z)}`;
  }
  const et = {
    ancho: {
      value: G.state(10),
      min: 1,
      max: 30,
      step: 0.5,
      label: "Ancho (B)",
      unit: "length"
    },
    largo: {
      value: G.state(15),
      min: 1,
      max: 30,
      step: 0.5,
      label: "Largo (L)",
      unit: "length"
    },
    espesor: {
      value: G.state(0.2),
      min: 0.05,
      max: 1,
      step: 0.05,
      label: "Espesor (t)",
      unit: "length"
    },
    moduloE: {
      value: G.state(21e4),
      min: 1e4,
      max: 5e5,
      step: 1e3,
      label: "M\xF3dulo E",
      unit: "stress"
    },
    poisson: {
      value: G.state(0.3),
      min: 0.1,
      max: 0.45,
      step: 0.05,
      label: "Poisson (\u03BD)"
    },
    mallado: {
      value: G.state(1),
      min: 0.3,
      max: 3,
      step: 0.1,
      label: "Tama\xF1o malla",
      unit: "length"
    },
    carga: {
      value: G.state(-10),
      min: -50,
      max: 50,
      step: 1,
      label: "Carga uniforme",
      unit: "force"
    }
  }, q = {
    nodes: G.state([]),
    elements: G.state([]),
    nodeInputs: G.state({}),
    elementInputs: G.state({}),
    deformOutputs: G.state({}),
    analyzeOutputs: G.state({})
  };
  G.derive(() => {
    const e = et.ancho.value.val, a = et.largo.value.val, n = et.espesor.value.val, l = et.moduloE.value.val, b = et.poisson.value.val, z = et.mallado.value.val, S = et.carga.value.val, { nodes: k, elements: u, boundaryIndices: _ } = Rt({
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
    q.nodeInputs.val = {
      supports: new Map(_.map((d) => [
        d,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])),
      loads: new Map(k.map((d, p) => [
        p,
        [
          0,
          0,
          S,
          0,
          0,
          0
        ]
      ]))
    }, q.nodes.val = k, q.elements.val = u;
    const F = l / (2 * (1 + b));
    q.elementInputs.val = {
      elasticities: new Map(u.map((d, p) => [
        p,
        l
      ])),
      elasticitiesOrthogonal: new Map(u.map((d, p) => [
        p,
        l
      ])),
      thicknesses: new Map(u.map((d, p) => [
        p,
        n
      ])),
      poissonsRatios: new Map(u.map((d, p) => [
        p,
        b
      ])),
      shearModuli: new Map(u.map((d, p) => [
        p,
        F
      ]))
    }, q.deformOutputs.val = Ft(k, u, q.nodeInputs.val, q.elementInputs.val), q.analyzeOutputs.val = Dt(k, u, q.elementInputs.val, q.deformOutputs.val);
  });
  const at = G.state(""), nt = G.state(void 0), lt = G.state(false);
  G.derive(() => {
    if (at.val === "Calcpad") {
      const e = it({
        template: xt,
        data: q
      });
      nt.val = e;
    }
    if (at.val === "Awatif") {
      const e = it({
        template: jt,
        data: q
      });
      nt.val = e;
    }
    if (at.val === "Code") {
      const e = it({
        template: Gt,
        data: q
      });
      nt.val = e;
    }
    if (at.val === "Docs") {
      const e = it({
        template: qt,
        data: q
      });
      nt.val = e;
    }
    if (at.val === "Print") {
      const e = it({
        template: xt,
        data: q
      }), a = window.open("", "_blank");
      if (a) {
        const n = (e == null ? void 0 : e.innerHTML) || "";
        a.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Plate Shell Thin - Report</title>
        </head>
        <body>
          ${n}
        </body>
        </html>
      `), a.document.close(), a.focus(), setTimeout(() => a.print(), 500);
      }
    }
  });
  const vt = document.createElement("style");
  vt.textContent = `
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
  document.head.appendChild(vt);
  const bt = G.state(true), J = document.createElement("button");
  J.className = "toolbar-toggle";
  J.innerHTML = "\u2212";
  J.title = "Ocultar/Mostrar botones";
  J.onclick = () => {
    bt.val = !bt.val, bt.val ? (document.body.classList.remove("toolbar-hidden"), J.innerHTML = "\u2212", J.classList.remove("collapsed")) : (document.body.classList.add("toolbar-hidden"), J.innerHTML = "+", J.classList.add("collapsed"));
  };
  document.body.append(At(et), kt({
    mesh: q,
    settingsObj: {
      nodes: false,
      deformedShape: true,
      loads: false,
      shellResults: "displacementZ"
    }
  }), Et(q), Ct({
    position: "bottom-center"
  }), Nt({
    dialogBody: nt
  }), St({
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
  }), J);
  const Vt = new MutationObserver((e) => {
    e.forEach((a) => {
      a.addedNodes.forEach((n) => {
        var _a, _b, _c;
        if (n instanceof HTMLElement) {
          const l = ((_a = n.querySelector) == null ? void 0 : _a.call(n, '[class*="dialog"]')) || (((_c = (_b = n.className) == null ? void 0 : _b.includes) == null ? void 0 : _c.call(_b, "dialog")) ? n : null);
          if (l && !l.querySelector(".dialog-maximize")) {
            const b = document.createElement("button");
            b.className = "dialog-maximize", b.innerHTML = "\u26F6", b.title = "Maximizar/Restaurar", b.onclick = (z) => {
              z.stopPropagation(), lt.val = !lt.val, lt.val ? (document.body.classList.add("dialog-maximized"), b.innerHTML = "\u26F6") : (document.body.classList.remove("dialog-maximized"), b.innerHTML = "\u26F6");
            }, l.style.position = "relative", l.appendChild(b);
          }
        }
      });
    });
  });
  Vt.observe(document.body, {
    childList: true,
    subtree: true
  });
  G.derive(() => {
    nt.val || (document.body.classList.remove("dialog-maximized"), lt.val = false);
  });
});
