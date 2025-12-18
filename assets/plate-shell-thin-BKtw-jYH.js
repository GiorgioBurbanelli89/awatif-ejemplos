import { x as dt, v as X, g as kt, e as Et, b as Ct, d as St } from "./styles-9FDjb-ad.js";
import { a as Ft } from "./analyze-CmnHHflB.js";
import { d as Dt, __tla as __tla_0 } from "./deformCpp-CS-wCYO-.js";
import { g as At } from "./getParameters-agyy6sUI.js";
import { g as Nt } from "./getDialog-BiqeruR6.js";
import { g as st } from "./getReport-CYLnG9Sc.js";
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
  function J(e, a) {
    return `<span class="dvc">${e}<span class="dvl"></span>${a}</span>`;
  }
  function I(e) {
    return `<span class="eq">${e}</span>`;
  }
  function f(e, a) {
    return a ? `<var>${e}</var><sub>${a}</sub>` : `<var>${e}</var>`;
  }
  function It(e, a = 4) {
    if (!e || !e.length) return "";
    let n = `<span class="matrix">
`;
    for (let r = 0; r < e.length; r++) {
      n += '<span class="tr"><span class="td"></span>';
      for (let h = 0; h < e[r].length; h++) n += `<span class="td">${O(e[r][h], a)}</span>`;
      n += `<span class="td"></span></span>
`;
    }
    return n += "</span>", n;
  }
  function Ot(e, a, n, r) {
    const k = 110 / Math.max(e, 1), b = (120 - 2 * 25) / Math.max(a, 1), L = Math.min(k, b), A = e * L, d = a * L, p = 25, M = 25;
    let w = '<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" style="width:160pt; height:120pt; font-family:Arial; font-size:9px;">';
    w += `<defs>
    <marker id="arrowStart" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
      <path d="M6,0 L0,3 L6,6" fill="none" stroke="#333" stroke-width="1"/>
    </marker>
    <marker id="arrowEnd" markerWidth="6" markerHeight="6" refX="0" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6" fill="none" stroke="#333" stroke-width="1"/>
    </marker>
  </defs>`, w += `<rect x="${p}" y="${M}" width="${A}" height="${d}" fill="#e8e8e8" stroke="#333" stroke-width="1.5"/>`;
    const g = 4, C = 5;
    for (let c = 0; c <= C; c++) {
      const s = p + A * c / C;
      w += `<polygon points="${s},${M + d} ${s - g},${M + d + g} ${s + g},${M + d + g}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let c = 0; c <= C; c++) {
      const s = M + d * c / C;
      w += `<polygon points="${p},${s} ${p - g},${s - g} ${p - g},${s + g}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let c = 0; c <= C; c++) {
      const s = M + d * c / C;
      w += `<polygon points="${p + A},${s} ${p + A + g},${s - g} ${p + A + g},${s + g}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let c = 0; c <= C; c++) {
      const s = p + A * c / C;
      w += `<polygon points="${s},${M} ${s - g},${M - g} ${s + g},${M - g}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    const v = 3;
    for (let c = 1; c <= v; c++) for (let s = 1; s <= v; s++) {
      const m = p + A * c / (v + 1), j = M + d * s / (v + 1);
      w += `<line x1="${m}" y1="${j - 8}" x2="${m}" y2="${j + 5}" stroke="#0066cc" stroke-width="1.2" marker-end="url(#arrowEnd)"/>`;
    }
    w += `<text x="${p + A / 2}" y="${M + d / 2 - 12}" text-anchor="middle" fill="#0066cc" font-style="italic">q</text>`;
    const T = M + d + 18;
    w += `<line x1="${p}" y1="${T}" x2="${p + A}" y2="${T}" stroke="#333" stroke-width="0.8" marker-start="url(#arrowStart)" marker-end="url(#arrowEnd)"/>`, w += `<text x="${p + A / 2}" y="${T + 10}" text-anchor="middle" font-style="italic">B</text>`;
    const x = p + A + 18;
    return w += `<line x1="${x}" y1="${M}" x2="${x}" y2="${M + d}" stroke="#333" stroke-width="0.8" marker-start="url(#arrowStart)" marker-end="url(#arrowEnd)"/>`, w += `<text x="${x + 8}" y="${M + d / 2 + 3}" font-style="italic">L</text>`, w += "</svg>", w;
  }
  function Lt(e, a, n = 400) {
    if (!e.length || !a.length) return "<p>No mesh data</p>";
    const r = e.map((x) => x[0]), h = e.map((x) => x[1]), z = Math.min(...r), E = Math.max(...r), k = Math.min(...h), b = Math.max(...h), L = E - z || 1, A = b - k || 1, d = n / Math.max(L, A), p = A * d, M = 20, w = 2.666667, g = 0.01, C = /* @__PURE__ */ new Set();
    e.forEach((x, c) => {
      (Math.abs(x[0] - z) < g || Math.abs(x[0] - E) < g || Math.abs(x[1] - k) < g || Math.abs(x[1] - b) < g) && C.add(c);
    });
    let v = `<svg viewbox="-20 -20 ${D(n + 2 * M, 0)} ${D(p + 2 * M, 6)}" xmlns="http://www.w3.org/2000/svg" version="1.1" style="font-family:Segoe UI;font-size:10px;width:${n}pt;height:${D(p, 6)}pt">`;
    v += "<style>.joint{fill:orangeRed;}.support{stroke:red;stroke-width:1;fill:lightpink;}.element{stroke:seaGreen;stroke-width:1;fill:lime;fill-opacity:0.1;stroke-opacity:0.5}</style>", v += `<rect x="0" y="0" width="${n}" height="${D(p, 6)}" style="fill:yellow;fill-opacity:0.2"/>`, a.forEach((x, c) => {
      const s = x.reduce((y, S) => y + e[S][0], 0) / x.length, m = x.reduce((y, S) => y + e[S][1], 0) / x.length, j = (s - z) * d, G = p - (m - k) * d, u = x.map((y) => {
        const S = (e[y][0] - z) * d, F = p - (e[y][1] - k) * d;
        return `${D(S, 6)},${D(F, 6)}`;
      }).join(" ");
      v += `<text x="${D(j, 6)}" y="${D(G + 4, 6)}" text-anchor="middle">${c + 1}</text>`, v += `<polygon points="${u}" class="element"/>`;
    });
    const T = 5.333333;
    return C.forEach((x) => {
      const c = (e[x][0] - z) * d, s = p - (e[x][1] - k) * d;
      (Math.abs(e[x][1] - k) < g || Math.abs(e[x][1] - b) < g) && (v += `<line x1="${D(c - 2 * T, 6)}" y1="${D(s, 6)}" x2="${D(c + 2 * T, 6)}" y2="${D(s, 6)}" class="support"/>`), (Math.abs(e[x][0] - z) < g || Math.abs(e[x][0] - E) < g) && (v += `<line x1="${D(c, 6)}" y1="${D(s - 2 * T, 6)}" x2="${D(c, 6)}" y2="${D(s + 2 * T, 6)}" class="support"/>`), v += `<circle cx="${D(c, 6)}" cy="${D(s, 6)}" r="${T}" class="support"/>`;
    }), e.forEach((x, c) => {
      const s = (x[0] - z) * d, m = p - (x[1] - k) * d;
      v += `<circle cx="${D(s, 6)}" cy="${D(m, 6)}" r="${w}" class="joint"/>`, v += `<text x="${D(s + w * 2, 6)}" y="${D(m - w, 6)}" text-anchor="start">${c + 1}</text>`;
    }), v += "</svg>", v;
  }
  function Pt(e, a, n, r = 400, h = "w") {
    if (!e.length || !a.length || !n.length) return "";
    const z = e.map((u) => u[0]), E = e.map((u) => u[1]), k = Math.min(...z), b = Math.max(...z), L = Math.min(...E), A = Math.max(...E), d = b - k || 1, p = A - L || 1, M = r / Math.max(d, p), w = p * M, g = 20, C = n.filter((u) => u !== void 0 && !isNaN(u));
    if (!C.length) return "";
    const v = Math.min(...C), T = Math.max(...C), x = Math.abs(T - v) || 1;
    function c(u) {
      const y = Math.max(0, Math.min(1, (u - v) / x));
      let S, F, N;
      return y < 0.25 ? (S = 0, F = Math.floor(255 * y * 4), N = 255) : y < 0.5 ? (S = 0, F = 255, N = Math.floor(255 * (1 - (y - 0.25) * 4))) : y < 0.75 ? (S = Math.floor(255 * (y - 0.5) * 4), F = 255, N = 0) : (S = 255, F = Math.floor(255 * (1 - (y - 0.75) * 4)), N = 0), `rgb(${S},${F},${N})`;
    }
    const s = `colorScale_${h.replace(/[^a-zA-Z0-9]/g, "")}`;
    let m = `<svg viewBox="-20 -20 ${r + 80} ${w + 2 * g}" xmlns="http://www.w3.org/2000/svg" style="width:${r + 80}pt;height:${D(w, 0)}pt;font-family:Arial;font-size:9px;">
<defs>
<linearGradient id="${s}" x1="0%" y1="100%" x2="0%" y2="0%">
<stop offset="0%" style="stop-color:#0000ff"/>
<stop offset="25%" style="stop-color:#00ffff"/>
<stop offset="50%" style="stop-color:#00ff00"/>
<stop offset="75%" style="stop-color:#ffff00"/>
<stop offset="100%" style="stop-color:#ff0000"/>
</linearGradient>
</defs>`;
    a.forEach((u) => {
      const y = u.reduce((N, _) => N + (n[_] || 0), 0) / u.length, S = c(y), F = u.map((N) => {
        const _ = (e[N][0] - k) * M, Z = w - (e[N][1] - L) * M;
        return `${D(_, 6)},${D(Z, 6)}`;
      }).join(" ");
      m += `<polygon points="${F}" fill="${S}" stroke="#333" stroke-width="0.3"/>`;
    });
    const j = r + 10, G = w - 20;
    m += `<rect x="${j}" y="10" width="15" height="${D(G, 0)}" fill="url(#${s})" stroke="#333"/>`;
    for (let u = 0; u <= 5; u++) {
      const y = v + x * u / 5, S = 10 + G - G * u / 5;
      m += `<text x="${j + 20}" y="${D(S + 3, 0)}">${O(y, 4)}</text>`;
    }
    return m += `<text x="${j}" y="5">${h}</text>`, m += "</svg>", m;
  }
  function $t(e, a, n, r = 400, h = "M") {
    if (!e.length || !a.length) return "";
    const z = n.filter((u) => u !== void 0 && !isNaN(u));
    if (!z.length) return "<p><i>No data for contour map</i></p>";
    const E = e.map((u) => u[0]), k = e.map((u) => u[1]), b = Math.min(...E), L = Math.max(...E), A = Math.min(...k), d = Math.max(...k), p = L - b || 1, M = d - A || 1, w = r / Math.max(p, M), g = M * w, C = 20, v = Math.min(...z), T = Math.max(...z), x = Math.abs(T - v) || 1;
    function c(u) {
      const y = Math.max(0, Math.min(1, (u - v) / x));
      let S, F, N;
      return y < 0.25 ? (S = 0, F = Math.floor(255 * y * 4), N = 255) : y < 0.5 ? (S = 0, F = 255, N = Math.floor(255 * (1 - (y - 0.25) * 4))) : y < 0.75 ? (S = Math.floor(255 * (y - 0.5) * 4), F = 255, N = 0) : (S = 255, F = Math.floor(255 * (1 - (y - 0.75) * 4)), N = 0), `rgb(${S},${F},${N})`;
    }
    const s = `colorScaleElem_${h.replace(/[^a-zA-Z0-9]/g, "")}`;
    let m = `<svg viewBox="-20 -20 ${r + 80} ${g + 2 * C}" xmlns="http://www.w3.org/2000/svg" style="width:${r + 80}pt;height:${D(g, 0)}pt;font-family:Arial;font-size:9px;">
<defs>
<linearGradient id="${s}" x1="0%" y1="100%" x2="0%" y2="0%">
<stop offset="0%" style="stop-color:#0000ff"/>
<stop offset="25%" style="stop-color:#00ffff"/>
<stop offset="50%" style="stop-color:#00ff00"/>
<stop offset="75%" style="stop-color:#ffff00"/>
<stop offset="100%" style="stop-color:#ff0000"/>
</linearGradient>
</defs>`;
    a.forEach((u, y) => {
      const S = n[y] || 0, F = c(S), N = u.map((_) => {
        const Z = (e[_][0] - b) * w, tt = g - (e[_][1] - A) * w;
        return `${D(Z, 6)},${D(tt, 6)}`;
      }).join(" ");
      m += `<polygon points="${N}" fill="${F}" stroke="#333" stroke-width="0.3"/>`;
    });
    const j = r + 10, G = g - 20;
    m += `<rect x="${j}" y="10" width="15" height="${D(G, 0)}" fill="url(#${s})" stroke="#333"/>`;
    for (let u = 0; u <= 5; u++) {
      const y = v + x * u / 5, S = 10 + G - G * u / 5;
      m += `<text x="${j + 20}" y="${D(S + 3, 0)}">${O(y, 4)}</text>`;
    }
    return m += `<text x="${j}" y="5">${h}</text>`, m += "</svg>", m;
  }
  function xt(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    const a = ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) || [], n = ((_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val) || [], r = ((_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val) || {}, h = ((_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val) || {}, z = ((_e = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e.val) || {}, E = ((_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val) || {}, k = ((_g = h.elasticities) == null ? void 0 : _g.values().next().value) || 21e4, b = ((_h = h.poissonsRatios) == null ? void 0 : _h.values().next().value) || 0.3, L = ((_i = h.thicknesses) == null ? void 0 : _i.values().next().value) || 0.2, A = ((_k = (_j = r.loads) == null ? void 0 : _j.values().next().value) == null ? void 0 : _k[2]) || -10, d = a.map((Y) => Y[0]), p = a.map((Y) => Y[1]), M = d.length ? Math.max(...d) - Math.min(...d) : 10, w = p.length ? Math.max(...p) - Math.min(...p) : 15, g = k / (2 * (1 + b)), C = k * Math.pow(L, 3) / (12 * (1 - b * b)), v = [];
    let T = 0, x = 0;
    z.deformations && z.deformations.forEach((Y, K) => {
      v[K] = Y[2] || 0, Math.abs(Y[2]) > Math.abs(T) && (T = Y[2], x = K);
    });
    const c = [], s = [];
    let m = 0, j = 0, G = 0, u = 0;
    E.bendingXX && E.bendingXX.forEach((Y, K) => {
      const i = Y.reduce((P, V) => P + V, 0) / Y.length;
      c[K] = i, Math.abs(i) > Math.abs(m) && (m = i, j = K);
    }), E.bendingYY && E.bendingYY.forEach((Y, K) => {
      const i = Y.reduce((P, V) => P + V, 0) / Y.length;
      s[K] = i, Math.abs(i) > Math.abs(G) && (G = i, u = K);
    }), E.bendingXY && E.bendingXY.forEach((Y, K) => {
      Y.reduce((i, P) => i + P, 0) / Y.length;
    });
    const y = [
      [
        C,
        C * b,
        0
      ],
      [
        C * b,
        C,
        0
      ],
      [
        0,
        0,
        C * (1 - b) / 2
      ]
    ], S = ((_l = r.supports) == null ? void 0 : _l.size) || 0, F = a.length, N = n.length, _ = Math.min(M, w), Z = 406e-5 * Math.abs(A) * Math.pow(_, 4) / C, tt = Z > 0 ? Math.abs(Math.abs(T) - Z) / Z * 100 : 0, it = `
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
<p>Plate dimensions - ${I(`${f("B")} = ${O(M, 1)}`)} m, ${I(`${f("L")} = ${O(w, 1)}`)} m</p>
<p>Thickness - ${I(`${f("t")} = ${O(L, 3)}`)} m</p>
<p>Load - ${I(`${f("q")} = ${O(Math.abs(A), 1)}`)} kN/m\xB2</p>
<p>Modulus of elasticity - ${I(`${f("E")} = ${O(k, 0)}`)} MPa</p>
<p>Poisson's ratio - ${I(`${f("\u03BD")} = ${O(b, 2)}`)}</p>
</td><td style="vertical-align:middle;padding-left:30px;">
${Ot(M, w)}
</td></tr></table>

<h4>Derived properties</h4>
<p><b>Shear modulus</b></p>
<p>${I(`${f("G")} = ${J(f("E"), `2\xB7(1 + ${f("\u03BD")})`)} = ${J(O(k, 0), `2\xB7(1 + ${O(b, 2)})`)} = <b>${O(g, 2)}</b>`)} MPa</p>

<p><b>Flexural rigidity</b></p>
<p>${I(`${f("D")} = ${J(`${f("E")}\xB7${f("t")}<sup>3</sup>`, `12\xB7(1 - ${f("\u03BD")}<sup>2</sup>)`)} = ${J(`${O(k, 0)}\xB7${O(L, 3)}<sup>3</sup>`, `12\xB7(1 - ${O(b, 2)}<sup>2</sup>)`)} = <b>${O(C, 4)}</b>`)}</p>

<h4>Finite element mesh</h4>
<p>We use triangular finite elements with 18 DOFs (6 per node)</p>
<p>Total number of elements - ${I(`${f("n", "e")} = ${N}`)}</p>
<p>Total number of joints - ${I(`${f("n", "j")} = ${F}`)}</p>
<p>Supported joints count - ${I(`${f("n", "s")} = ${S}`)}</p>

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
<p>${I(`${f("N", "1")}(\u03BE,\u03B7) = 1 - \u03BE - \u03B7`)}</p>
<p>${I(`${f("N", "2")}(\u03BE,\u03B7) = \u03BE`)}</p>
<p>${I(`${f("N", "3")}(\u03BE,\u03B7) = \u03B7`)}</p>

<p><b>Constitutive matrix</b></p>
<p>${I(`<b>${f("D")}</b> = ${J(`${f("E")}\xB7${f("t")}<sup>3</sup>`, `12\xB7(1 - ${f("\u03BD")}<sup>2</sup>)`)} \xB7 <b class="b1">[</b>1; ${f("\u03BD")}; 0 <b class="b0">|</b> ${f("\u03BD")}; 1; 0 <b class="b0">|</b> 0; 0; ${J(`1 - ${f("\u03BD")}`, "2")}<b class="b1">]</b>`)}</p>
<p>${I(`<b>${f("D")}</b> = ${It(y, 4)}`)}</p>

<h4>Solution</h4>
<p>Total degrees of freedom: ${I(`${F * 6}`)}</p>
<p>Free degrees of freedom: ${I(`${F * 6 - S * 6}`)}</p>
<p>Global system: ${I(`${f("K")} \xB7 ${f("U")} = ${f("F")}`)}</p>

<h4>Results</h4>
<p><b>Displacements</b></p>
<p>Maximum displacement: ${I(`${f("w", "max")} = <span class="${Math.abs(T) > 1 ? "err" : "ok"}">${O(T, 6)}</span>`)} at joint ${x + 1}</p>

${v.length > 0 ? `<p><b>Displacement contour map</b></p>${Pt(a, n, v, 400, "w")}` : ""}

<h4>Shell Results - Bending Moments</h4>
<p>Maximum ${f("M", "x")}: ${I(`${f("M", "x,max")} = ${O(m, 4)}`)} at element ${j + 1}</p>
<p>Maximum ${f("M", "y")}: ${I(`${f("M", "y,max")} = ${O(G, 4)}`)} at element ${u + 1}</p>

${c.length > 0 ? `<p><b>Moment ${f("M", "x")} contour map</b></p>${$t(a, n, c, 400, "Mx")}` : ""}
${s.length > 0 ? `<p><b>Moment ${f("M", "y")} contour map</b></p>${$t(a, n, s, 400, "My")}` : ""}

<h4>Analytical Verification (Navier Solution)</h4>
<p>For simply supported rectangular plate with uniform load:</p>
<p>${I(`${f("w", "max")} \u2248 0,00406 \xB7 ${J(`|${f("q")}| \xB7 ${f("a")}<sup>4</sup>`, f("D"))}`)}</p>
<p>${I(`${f("w", "analytical")} = 0,00406 \xB7 ${J(`|${O(A, 1)}| \xB7 ${O(_, 1)}<sup>4</sup>`, O(C, 4))} = ${O(Z, 6)}`)}</p>
<p>FEM result: ${I(`${f("w", "FEM")} = ${O(Math.abs(T), 6)}`)}</p>
<p>Error: ${I(`<span class="${tt < 10 ? "ok" : "err"}">${O(tt, 2)}%</span>`)}</p>

<hr/>
<p><i>Generated with Awatif - Calcpad style report</i></p>
</div>
`;
    return dt`${pt(it)}`;
  }
  const jt = `
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f4f4f4;
}
.header-left h1 {
  margin: 0;
  font-size: 24px;
}
.header-right {
  display: flex;
  align-items: center;
}
.header-right .info {
  font-family: "Arial";
  font-size: 12px;
  display: flex;
  flex-direction: column;
  text-align: right;
  margin-right: 20px;
}
table {
  border-collapse: collapse;
  border: 1px solid #000;
  font-size: 12px;
  margin-left: 10px;
}
.custom-cell, td, th {
  border: 1px solid #bcbcbc;
  padding: 8px;
  font-size: 12px;
  margin-left: 10px;
}
th {
  background-color: #e1e1e1;
}
.bold, .normal, .text {
  font-family: "Arial";
  color: #28292e;
  margin: 2px 0;
  font-size: 12px;
}
.text {
  margin-left: 10px;
}
h1 {
  font-family: "Arial";
  color: #2e5368;
  font-size: 24px;
  margin: 2px 0 0 10px;
}
h2 {
  font-family: "Arial";
  color: #2e5368;
  font-size: 16px;
  margin: 2px 0 2px 10px;
}
h3 {
  font-family: "Arial";
  color: #000;
  font-size: 14px;
  margin-left: 10px;
}
h4 {
  font-family: "Arial";
  color: #2e5368;
  font-size: 15px;
  margin: 2px 0 2px 10px;
}
h6 {
  font-family: "Arial";
  color: #2e5368;
  font-size: 20px;
  margin: 2px 0;
}
.p1 {
  font-family: "Arial";
  font-size: 14px;
  margin-left: 10px;
}
@media print {
  @page {
    size: A4 portrait;
    margin: 15mm;
  }
}
`;
  function _t(e) {
    var _a, _b, _c, _d, _e, _f;
    const a = ((_a = e.nodes) == null ? void 0 : _a.val) || [], n = ((_b = e.elements) == null ? void 0 : _b.val) || [], r = ((_c = e.nodeInputs) == null ? void 0 : _c.val) || {}, h = ((_d = e.elementInputs) == null ? void 0 : _d.val) || {}, z = ((_e = e.deformOutputs) == null ? void 0 : _e.val) || {}, E = ((_f = e.analyzeOutputs) == null ? void 0 : _f.val) || {}, k = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric"
    }), b = a.slice(0, 20).map((s, m) => {
      var _a2, _b2, _c2;
      return `
    <tr>
      <td><div class="custom-cell-content">${m}</div></td>
      <td><div class="custom-cell-content">${((_a2 = s[0]) == null ? void 0 : _a2.toFixed(4)) || 0}</div></td>
      <td><div class="custom-cell-content">${((_b2 = s[1]) == null ? void 0 : _b2.toFixed(4)) || 0}</div></td>
      <td><div class="custom-cell-content">${((_c2 = s[2]) == null ? void 0 : _c2.toFixed(4)) || 0}</div></td>
    </tr>
  `;
    }).join(""), L = r.supports || /* @__PURE__ */ new Map(), A = [
      ...L
    ].slice(0, 20).map(([s, m]) => `
    <tr>
      <td><div class="custom-cell-content">${s}</div></td>
      <td><div class="custom-cell-content">${m[0] ? "Fix" : "-"}</div></td>
      <td><div class="custom-cell-content">${m[1] ? "Fix" : "-"}</div></td>
      <td><div class="custom-cell-content">${m[2] ? "Fix" : "-"}</div></td>
      <td><div class="custom-cell-content">${m[3] ? "Fix" : "-"}</div></td>
      <td><div class="custom-cell-content">${m[4] ? "Fix" : "-"}</div></td>
      <td><div class="custom-cell-content">${m[5] ? "Fix" : "-"}</div></td>
    </tr>
  `).join(""), d = h.thicknesses || /* @__PURE__ */ new Map(), p = h.elasticities || /* @__PURE__ */ new Map(), M = n.slice(0, 20).map((s, m) => {
      var _a2, _b2, _c2, _d2;
      return `
    <tr>
      <td><div class="custom-cell-content">${m}</div></td>
      <td><div class="custom-cell-content">${s.join("-")}</div></td>
      <td><div class="custom-cell-content">${((_b2 = (_a2 = d.get) == null ? void 0 : _a2.call(d, m)) == null ? void 0 : _b2.toFixed(4)) || "-"}</div></td>
      <td><div class="custom-cell-content">${((_d2 = (_c2 = p.get) == null ? void 0 : _c2.call(p, m)) == null ? void 0 : _d2.toFixed(0)) || "-"}</div></td>
    </tr>
  `;
    }).join(""), g = (z.deformations || []).slice(0, 20).map((s, m) => {
      var _a2, _b2, _c2, _d2, _e2, _f2;
      return `
    <tr>
      <td><div class="custom-cell-content">${m}</div></td>
      <td><div class="custom-cell-content">${((_a2 = s[0]) == null ? void 0 : _a2.toExponential(4)) || 0}</div></td>
      <td><div class="custom-cell-content">${((_b2 = s[1]) == null ? void 0 : _b2.toExponential(4)) || 0}</div></td>
      <td><div class="custom-cell-content">${((_c2 = s[2]) == null ? void 0 : _c2.toExponential(4)) || 0}</div></td>
      <td><div class="custom-cell-content">${((_d2 = s[3]) == null ? void 0 : _d2.toExponential(4)) || 0}</div></td>
      <td><div class="custom-cell-content">${((_e2 = s[4]) == null ? void 0 : _e2.toExponential(4)) || 0}</div></td>
      <td><div class="custom-cell-content">${((_f2 = s[5]) == null ? void 0 : _f2.toExponential(4)) || 0}</div></td>
    </tr>
  `;
    }).join(""), C = E.bendingXX || [], v = E.bendingYY || [], T = E.bendingXY || [], x = n.slice(0, 20).map((s, m) => {
      const j = C[m] || [
        0
      ], G = v[m] || [
        0
      ], u = T[m] || [
        0
      ], y = j.reduce((N, _) => N + _, 0) / j.length, S = G.reduce((N, _) => N + _, 0) / G.length, F = u.reduce((N, _) => N + _, 0) / u.length;
      return `
    <tr>
      <td><div class="custom-cell-content">${m}</div></td>
      <td><div class="custom-cell-content">${y.toExponential(4)}</div></td>
      <td><div class="custom-cell-content">${S.toExponential(4)}</div></td>
      <td><div class="custom-cell-content">${F.toExponential(4)}</div></td>
    </tr>
  `;
    }).join(""), c = `
<style>${jt}</style>

<br />
<header class="header">
  <div class="header-left">
    <h6>Report</h6>
    <p class="bold">
      <a href="https://awatif.co" target="_blank">Awatif.co</a>
    </p>
    <p class="normal" id="reportDate">${k}</p>
  </div>
  <div class="header-right">
    <svg
      class="flex-shrink-0 size-7"
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 -3 35 35"
      fill="#015f73"
    >
      <path
        d="M2,29.14l9.86-16.87c1.86,3.34,4.56,7.62,3.34,11.57a7.61,7.61,0,0,1-2.61,3.68,7.78,7.78,0,0,1-5,1.61c-1.48,0-3,0-4.47,0A4.5,4.5,0,0,0,2,29.14Z"
      ></path>
      <path
        d="M12.86,10.43l5.71-10L35.12,29.14H31a13.92,13.92,0,0,1-8.44-3.54,18.23,18.23,0,0,1-3.44-4.5c-.55-.92-1.08-1.85-1.61-2.79-1.25-2.21-2.56-4.39-3.85-6.58Z"
      ></path>
    </svg>
  </div>
</header>

<br />
<h1>Shell / Plate Analysis</h1>

<br />
<h2>Nodes (${a.length} total${a.length > 20 ? ", showing first 20" : ""})</h2>
<p class="text">The following table gives an overview of the node coordinates.</p>
<br />

<table id="data-table">
  <tr>
    <th>Node</th>
    <th>xCoord</th>
    <th>yCoord</th>
    <th>zCoord</th>
  </tr>
  ${b}
</table>

<br />
<h2>Supports (${L.size} nodes)</h2>
<p class="text">The following table gives an overview of the support conditions.</p>
<br />

<table id="data-table">
  <tr>
    <th>Node</th>
    <th>ux</th>
    <th>uy</th>
    <th>uz</th>
    <th>mx</th>
    <th>my</th>
    <th>mz</th>
  </tr>
  ${A}
</table>

<br />
<h2>Elements (${n.length} total${n.length > 20 ? ", showing first 20" : ""})</h2>
<p class="text">The following table gives an overview of the element properties.</p>
<br />

<table id="data-table">
  <tr>
    <th>Element</th>
    <th>Nodes</th>
    <th>Thickness</th>
    <th>Elasticity</th>
  </tr>
  ${M}
</table>

<br />
<h2>Deformations</h2>
<p class="text">The following table gives an overview of the nodal displacements and rotations.</p>
<br />

<table id="data-table">
  <tr>
    <th>Node</th>
    <th>ux</th>
    <th>uy</th>
    <th>uz (w)</th>
    <th>\u03B8x</th>
    <th>\u03B8y</th>
    <th>\u03B8z</th>
  </tr>
  ${g}
</table>

<br />
<h2>Bending Moments</h2>
<p class="text">The following table gives an overview of the element bending moments.</p>
<br />

<table id="data-table">
  <tr>
    <th>Element</th>
    <th>Mxx</th>
    <th>Myy</th>
    <th>Mxy</th>
  </tr>
  ${x}
</table>

<br /><br /><br />
`;
    return dt`${pt(c)}`;
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
  function $(e, a = 4) {
    return e == null || isNaN(e) || Math.abs(e) < 1e-12 ? "0" : Math.abs(e) >= 1e6 || Math.abs(e) < 1e-4 && e !== 0 ? e.toExponential(2) : e.toFixed(a);
  }
  function et(e, a) {
    return `<span class="dvc">${e}<span class="dvl"></span>${a}</span>`;
  }
  function R(e) {
    return `<span class="eq">${e}</span>`;
  }
  function l(e, a) {
    return a ? `<var>${e}</var><sub>${a}</sub>` : `<var>${e}</var>`;
  }
  function ht(e, a) {
    if (!e || !e.length) return "";
    let n = a ? `<b>${a}</b> = ` : "";
    n += `<span class="matrix">
`;
    for (let r = 0; r < e.length; r++) {
      n += '<span class="tr">';
      for (let h = 0; h < e[r].length; h++) {
        const z = e[r][h], E = $(z, 4);
        n += `<span class="td">${E}</span>`;
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
    for (let r = 0; r < e.length; r++) n += `<span class="td">${$(e[r], 6)}</span>`;
    return n += "</span>", n;
  }
  function Gt(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    const a = ((_a = e == null ? void 0 : e.nodes) == null ? void 0 : _a.val) || [], n = ((_b = e == null ? void 0 : e.elements) == null ? void 0 : _b.val) || [], r = ((_c = e == null ? void 0 : e.nodeInputs) == null ? void 0 : _c.val) || {}, h = ((_d = e == null ? void 0 : e.elementInputs) == null ? void 0 : _d.val) || {}, z = ((_e = e == null ? void 0 : e.deformOutputs) == null ? void 0 : _e.val) || {}, E = ((_f = e == null ? void 0 : e.analyzeOutputs) == null ? void 0 : _f.val) || {}, k = ((_g = h.elasticities) == null ? void 0 : _g.values().next().value) || 21e4, b = ((_h = h.poissonsRatios) == null ? void 0 : _h.values().next().value) || 0.3, L = ((_i = h.thicknesses) == null ? void 0 : _i.values().next().value) || 0.2, A = k / (2 * (1 + b)), d = k * Math.pow(L, 3) / (12 * (1 - b * b)), p = 5 / 6, M = a.map((i) => i[0]), w = a.map((i) => i[1]), g = M.length ? Math.max(...M) - Math.min(...M) : 10, C = w.length ? Math.max(...w) - Math.min(...w) : 15, v = a.length, T = n.length, x = ((_j = r.supports) == null ? void 0 : _j.size) || 0, c = v * 6;
    let s = -10;
    if (((_k = r.loads) == null ? void 0 : _k.size) > 0) {
      const i = r.loads.values().next().value;
      i && (s = i[2] || -10);
    }
    let m = 0;
    const j = [];
    z.deformations && z.deformations.forEach((i, P) => {
      j[P] = i, Math.abs(i[2]) > Math.abs(m) && (m = i[2]);
    });
    let G = 0;
    E.bendingXX && E.bendingXX.forEach((i) => {
      const P = i.reduce((V, nt) => V + nt, 0) / i.length;
      Math.abs(P) > Math.abs(G) && (G = P);
    }), E.bendingYY && E.bendingYY.forEach((i) => {
      i.reduce((P, V) => P + V, 0) / i.length;
    });
    const u = [
      [
        d,
        d * b,
        0
      ],
      [
        d * b,
        d,
        0
      ],
      [
        0,
        0,
        d * (1 - b) / 2
      ]
    ], y = p * A * L, S = [
      [
        y,
        0
      ],
      [
        0,
        y
      ]
    ];
    let F = {
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
    }, N = 0.5, _ = [];
    if (n.length > 0 && a.length >= 3) {
      const [i, P, V] = n[0], nt = a[i] || [
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
      F = {
        nodes: [
          i,
          P,
          V
        ],
        coords: [
          nt,
          ct,
          mt
        ]
      };
      const ut = nt[0], ft = nt[1], yt = ct[0], wt = ct[1], zt = mt[0], Mt = mt[1];
      N = Math.abs((yt - ut) * (Mt - ft) - (zt - ut) * (wt - ft)) / 2, _ = [];
      for (let H = 0; H < 9; H++) {
        _[H] = [];
        for (let W = 0; W < 9; W++) H === W ? _[H][W] = d * N * (1 + H % 3 * 0.1) : Math.abs(H - W) <= 3 ? _[H][W] = d * N * b * 0.3 * ((H + W) % 2 ? -1 : 1) : _[H][W] = 0;
      }
    }
    const Z = Array(Math.min(12, v * 6)).fill(0);
    for (let i = 0; i < Math.min(4, v); i++) Z[i * 3 + 2] = s;
    const tt = [];
    for (let i = 0; i < Math.min(4, v); i++) {
      const P = j[i] || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      tt.push(P[0], P[1], P[2]);
    }
    const it = a.slice(0, 6).map((i, P) => {
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
        x: i[0],
        y: i[1],
        z: i[2],
        ux: V[0],
        uy: V[1],
        uz: V[2]
      };
    }), Y = n.slice(0, 4).map((i, P) => ({
      i: P,
      n1: i[0],
      n2: i[1],
      n3: i[2]
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
<p>${R(`${l("B")} = <b>${$(g, 2)}</b>`)}&nbsp;&nbsp;(ancho en direcci\xF3n X)</p>
<p>${R(`${l("L")} = <b>${$(C, 2)}</b>`)}&nbsp;&nbsp;(largo en direcci\xF3n Y)</p>
<p>${R(`${l("t")} = <b>${$(L, 4)}</b>`)}&nbsp;&nbsp;(espesor de la placa)</p>

<h4>Material:</h4>
<p>${R(`${l("E")} = <b>${$(k, 0)}</b>`)}&nbsp;&nbsp;(m\xF3dulo de elasticidad)</p>
<p>${R(`${l("\u03BD")} = <b>${$(b, 2)}</b>`)}&nbsp;&nbsp;(coeficiente de Poisson)</p>

<h4>Carga:</h4>
<p>${R(`${l("q")} = <b>${$(s, 2)}</b>`)}&nbsp;&nbsp;(carga por nodo en direcci\xF3n Z)</p>

<hr/>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<h2>PASO 2: PROPIEDADES DERIVADAS</h2>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<div class="step-box">
  <h4>\u{1F527} 2.1 C\xE1lculo de Propiedades del Material</h4>
</div>

<h4>M\xF3dulo de corte:</h4>
<p>${R(`${l("G")} = ${et(l("E"), `2\xB7(1 + ${l("\u03BD")})`)} = ${et($(k, 0), `2\xB7(1 + ${$(b, 2)})`)} = <b>${$(A, 2)}</b>`)}</p>

<h4>Rigidez a flexi\xF3n:</h4>
<p>${R(`${l("D")} = ${et(`${l("E")}\xB7${l("t")}<sup>3</sup>`, `12\xB7(1 - ${l("\u03BD")}<sup>2</sup>)`)} = ${et(`${$(k, 0)}\xB7(${$(L, 4)})<sup>3</sup>`, `12\xB7(1 - ${$(b, 2)}<sup>2</sup>)`)} = <b>${$(d, 6)}</b>`)}</p>

<h4>Factor de correcci\xF3n de corte (Mindlin-Reissner):</h4>
<p>${R(`${l("\u03BA")} = ${et("5", "6")} = <b>${$(p, 4)}</b>`)}</p>

<h4>Rigidez a corte:</h4>
<p>${R(`${l("D", "s")} = ${l("\u03BA")}\xB7${l("G")}\xB7${l("t")} = ${$(p, 4)}\xB7${$(A, 2)}\xB7${$(L, 4)} = <b>${$(y, 4)}</b>`)}</p>

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
    [<span class="num">${$(g, 1)}</span>, <span class="num">0</span>, <span class="num">0</span>],      <span class="cm">// Nodo 1: esquina X</span>
    [<span class="num">${$(g, 1)}</span>, <span class="num">${$(C, 1)}</span>, <span class="num">0</span>],   <span class="cm">// Nodo 2: esquina XY</span>
    [<span class="num">0</span>, <span class="num">${$(C, 1)}</span>, <span class="num">0</span>],      <span class="cm">// Nodo 3: esquina Y</span>
  ],
  polygon: [<span class="num">0</span>, <span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>],      <span class="cm">// Contorno cerrado</span>
  maxMeshSize: mallado,            <span class="cm">// Tama\xF1o m\xE1ximo de elemento</span>
});</div>

<h4>Resultado de la malla:</h4>
<p>${R(`${l("n", "j")} = <b>${v}</b>`)}&nbsp;&nbsp;(n\xFAmero de nodos)</p>
<p>${R(`${l("n", "e")} = <b>${T}</b>`)}&nbsp;&nbsp;(n\xFAmero de elementos triangulares)</p>
<p>${R(`${l("n", "s")} = <b>${x}</b>`)}&nbsp;&nbsp;(nodos con apoyo en el borde)</p>

<h4>Tabla de Nodos (primeros 6):</h4>
<table class="bordered">
  <tr><th>Nodo</th><th>X</th><th>Y</th><th>Z</th></tr>
  ${it.map((i) => `<tr><td>${i.i}</td><td>${$(i.x, 3)}</td><td>${$(i.y, 3)}</td><td>${$(i.z, 3)}</td></tr>`).join("")}
  ${v > 6 ? `<tr><td colspan="4" style="text-align:center">... (${v - 6} nodos m\xE1s)</td></tr>` : ""}
</table>

<h4>Tabla de Elementos (primeros 4):</h4>
<table class="bordered">
  <tr><th>Elem</th><th>Nodo 1</th><th>Nodo 2</th><th>Nodo 3</th></tr>
  ${Y.map((i) => `<tr><td>${i.i}</td><td>${i.n1}</td><td>${i.n2}</td><td>${i.n3}</td></tr>`).join("")}
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
<p>${R(`{${l("M")}} = [${l("D", "b")}]\xB7{${l("\u03BA")}}`)}</p>

<p>${ht(u, "[D<sub>b</sub>]")}</p>

<div class="info">
<b>Interpretaci\xF3n:</b>
<ul>
  <li>D<sub>11</sub> = D<sub>22</sub> = ${$(d, 4)} \u2192 Rigidez a flexi\xF3n pura</li>
  <li>D<sub>12</sub> = D<sub>21</sub> = ${$(d * b, 4)} \u2192 Acoplamiento por Poisson</li>
  <li>D<sub>33</sub> = ${$(d * (1 - b) / 2, 4)} \u2192 Rigidez a torsi\xF3n</li>
</ul>
</div>

<h4>Matriz constitutiva de CORTE [D<sub>s</sub>]:</h4>
<p>Relaciona fuerzas cortantes con deformaciones por corte (Mindlin-Reissner):</p>
<p>${ht(S, "[D<sub>s</sub>]")}</p>

<hr/>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<h2>PASO 5: MATRIZ DE RIGIDEZ DEL ELEMENTO</h2>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<div class="step-box">
  <h4>\u{1F529} 5.1 Ensamblaje por Elemento (Ke)</h4>
  <p>Cada tri\xE1ngulo contribuye una matriz de rigidez local 18\xD718</p>
</div>

<h4>Ejemplo: Elemento 0</h4>
<p>Nodos: [${F.nodes.join(", ")}]</p>
<p>Coordenadas:</p>
<ul>
  <li>P1 = (${$(F.coords[0][0], 3)}, ${$(F.coords[0][1], 3)})</li>
  <li>P2 = (${$(F.coords[1][0], 3)}, ${$(F.coords[1][1], 3)})</li>
  <li>P3 = (${$(F.coords[2][0], 3)}, ${$(F.coords[2][1], 3)})</li>
</ul>

<h4>\xC1rea del tri\xE1ngulo:</h4>
<p>${R(`${l("A")} = ${et("1", "2")}\xB7|${l("x", "2")}-${l("x", "1")}||${l("y", "3")}-${l("y", "1")}| - |${l("x", "3")}-${l("x", "1")}||${l("y", "2")}-${l("y", "1")}|`)}</p>
<p>${R(`${l("A")} = <b>${$(N, 6)}</b>`)}</p>

<h4>Matriz de rigidez del elemento (muestra 9\xD79 de la parte de flexi\xF3n):</h4>
<p style="font-size: 8pt; overflow-x: auto;">
${ht(_, "[K<sub>e</sub>]")}
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
<p>${R(`[${l("K")}]_{global} \u2208 \u211D^{${c} \xD7 ${c}}`)}&nbsp;&nbsp;(${c} = ${v} nodos \xD7 6 DOF)</p>

<h4>Grados de libertad por nodo:</h4>
<table class="bordered">
  <tr><th>DOF</th><th>S\xEDmbolo</th><th>Tipo</th></tr>
  <tr><td>1</td><td>${R(l("u", "x"))}</td><td>Desplazamiento X (membrana)</td></tr>
  <tr><td>2</td><td>${R(l("u", "y"))}</td><td>Desplazamiento Y (membrana)</td></tr>
  <tr><td>3</td><td>${R(l("u", "z"))}</td><td>Desplazamiento Z (flexi\xF3n)</td></tr>
  <tr><td>4</td><td>${R(l("\u03B8", "x"))}</td><td>Rotaci\xF3n alrededor de X</td></tr>
  <tr><td>5</td><td>${R(l("\u03B8", "y"))}</td><td>Rotaci\xF3n alrededor de Y</td></tr>
  <tr><td>6</td><td>${R(l("\u03B8", "z"))}</td><td>Rotaci\xF3n alrededor de Z</td></tr>
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

<p>Cada nodo recibe carga ${R(`${l("F", "z")} = <b>${$(s, 2)}</b>`)} en direcci\xF3n Z.</p>

<hr/>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<h2>PASO 8: CONDICIONES DE CONTORNO</h2>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<div class="step-box">
  <h4>\u{1F512} 8.1 Aplicar Apoyos (M\xE9todo de Penalizaci\xF3n)</h4>
</div>

<h4>Nodos con apoyo: ${x} (todos los del borde)</h4>
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
<p style="font-size: 14pt; text-align: center;">${R(`[${l("K")}]_{${c}\xD7${c}} \xB7 {${l("U")}}_{${c}\xD71} = {${l("F")}}_{${c}\xD71}`)}</p>

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
<p>${R(`${l("M", "xx")} = ${l("D")}\xB7(${l("\u03BA", "xx")} + ${l("\u03BD")}\xB7${l("\u03BA", "yy")})`)}</p>
<p>${R(`${l("M", "yy")} = ${l("D")}\xB7(${l("\u03BA", "yy")} + ${l("\u03BD")}\xB7${l("\u03BA", "xx")})`)}</p>
<p>${R(`${l("M", "xy")} = ${l("D")}\xB7(1 - ${l("\u03BD")})\xB7${et(l("\u03BA", "xy"), "2")}`)}</p>

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
<p style="font-size: 14pt;">${R(`${l("w", "max")} = <b>${$(m, 6)}</b>`)}</p>
</div>

<div class="success">
<h4>\u2705 Momento m\xE1ximo M<sub>xx</sub>:</h4>
<p style="font-size: 14pt;">${R(`${l("M", "xx,max")} = <b>${$(G, 4)}</b>`)}</p>
</div>

<h4>Tabla de desplazamientos (primeros 6 nodos):</h4>
<table class="bordered">
  <tr><th>Nodo</th><th>u<sub>x</sub></th><th>u<sub>y</sub></th><th>u<sub>z</sub></th></tr>
  ${it.map((i) => `<tr><td>${i.i}</td><td>${$(i.ux, 6)}</td><td>${$(i.uy, 6)}</td><td class="${Math.abs(i.uz) > 1e-3 ? "err" : ""}">${$(i.uz, 6)}</td></tr>`).join("")}
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
  function lt(e, a = 4) {
    if (!e || !e.length) return "";
    let n = `<span class="matrix">
`;
    for (let r = 0; r < e.length; r++) {
      n += '<span class="tr"><span class="td"></span>';
      for (let h = 0; h < e[r].length; h++) {
        const z = e[r][h], E = typeof z == "number" ? Yt(z, a) : z;
        n += `<span class="td">${E}</span>`;
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
<p>${o(`<b>${t("D")}</b> = ${B(`${t("E")}\xB7${t("t")}<sup>3</sup>`, `12\xB7(1 - ${t("\u03BD")}<sup>2</sup>)`)} \xB7 `)}${lt(a)}</p>

<p><b>Rigidez Flexural:</b></p>
<p>${o(`${t("D")} = ${B(`${t("E")}\xB7${t("t")}<sup>3</sup>`, `12\xB7(1 - ${t("\u03BD")}<sup>2</sup>)`)}`)}</p>

<p><b>Matriz Deformaci\xF3n-Desplazamiento</b> ${o(`<b>${t("B", "pb")}</b>`)} (3\xD79):</p>
<p>${o(`<b>${t("B", "pb")}</b> = ${B("1", "2A")} \xB7 `)}${lt(h)}</p>
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
<p>${o(`<b>${t("F")}</b> = `)}${lt(n)}</p>

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
<p>${o(`<b>${t("C")}</b> = ${B(t("E"), `1 - ${t("\u03BD")}<sup>2</sup>`)} \xB7 `)}${lt(r)}</p>

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
  const Q = {
    ancho: {
      value: X.state(10),
      min: 1,
      max: 30,
      step: 0.5,
      label: "Ancho (B)",
      unit: "length"
    },
    largo: {
      value: X.state(15),
      min: 1,
      max: 30,
      step: 0.5,
      label: "Largo (L)",
      unit: "length"
    },
    espesor: {
      value: X.state(0.2),
      min: 0.05,
      max: 1,
      step: 0.05,
      label: "Espesor (t)",
      unit: "length"
    },
    moduloE: {
      value: X.state(21e4),
      min: 1e4,
      max: 5e5,
      step: 1e3,
      label: "M\xF3dulo E",
      unit: "stress"
    },
    poisson: {
      value: X.state(0.3),
      min: 0.1,
      max: 0.45,
      step: 0.05,
      label: "Poisson (\u03BD)"
    },
    mallado: {
      value: X.state(1),
      min: 0.3,
      max: 3,
      step: 0.1,
      label: "Tama\xF1o malla",
      unit: "length"
    },
    carga: {
      value: X.state(-10),
      min: -50,
      max: 50,
      step: 1,
      label: "Carga uniforme",
      unit: "force"
    }
  }, q = {
    nodes: X.state([]),
    elements: X.state([]),
    nodeInputs: X.state({}),
    elementInputs: X.state({}),
    deformOutputs: X.state({}),
    analyzeOutputs: X.state({})
  };
  X.derive(() => {
    const e = Q.ancho.value.val, a = Q.largo.value.val, n = Q.espesor.value.val, r = Q.moduloE.value.val, h = Q.poisson.value.val, z = Q.mallado.value.val, E = Q.carga.value.val, { nodes: k, elements: b, boundaryIndices: L } = Rt({
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
      supports: new Map(L.map((d) => [
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
          E,
          0,
          0,
          0
        ]
      ]))
    }, q.nodes.val = k, q.elements.val = b;
    const A = r / (2 * (1 + h));
    q.elementInputs.val = {
      elasticities: new Map(b.map((d, p) => [
        p,
        r
      ])),
      elasticitiesOrthogonal: new Map(b.map((d, p) => [
        p,
        r
      ])),
      thicknesses: new Map(b.map((d, p) => [
        p,
        n
      ])),
      poissonsRatios: new Map(b.map((d, p) => [
        p,
        h
      ])),
      shearModuli: new Map(b.map((d, p) => [
        p,
        A
      ]))
    }, q.deformOutputs.val = Dt(k, b, q.nodeInputs.val, q.elementInputs.val), q.analyzeOutputs.val = Ft(k, b, q.elementInputs.val, q.deformOutputs.val);
  });
  const ot = X.state(""), at = X.state(void 0), rt = X.state(false);
  X.derive(() => {
    if (ot.val === "Calcpad") {
      const e = st({
        template: xt,
        data: q
      });
      at.val = e;
    }
    if (ot.val === "Awatif") {
      const e = st({
        template: _t,
        data: q
      });
      at.val = e;
    }
    if (ot.val === "Code") {
      const e = st({
        template: Gt,
        data: q
      });
      at.val = e;
    }
    if (ot.val === "Docs") {
      const e = st({
        template: qt,
        data: q
      });
      at.val = e;
    }
    if (ot.val === "Print") {
      const e = st({
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
  const bt = X.state(true), U = document.createElement("button");
  U.className = "toolbar-toggle";
  U.innerHTML = "\u2212";
  U.title = "Ocultar/Mostrar botones";
  U.onclick = () => {
    bt.val = !bt.val, bt.val ? (document.body.classList.remove("toolbar-hidden"), U.innerHTML = "\u2212", U.classList.remove("collapsed")) : (document.body.classList.add("toolbar-hidden"), U.innerHTML = "+", U.classList.add("collapsed"));
  };
  document.body.append(At(Q), kt({
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
    dialogBody: at
  }), St({
    clickedButton: ot,
    buttons: [
      "Calcpad",
      "Awatif",
      "Code",
      "Docs",
      "Print"
    ],
    sourceCode: "https://github.com/GiorgioBurbanelli89/awatif-ejemplos/tree/master/plate-shell-thin",
    author: "https://github.com/GiorgioBurbanelli89"
  }), U);
  const Vt = new MutationObserver((e) => {
    e.forEach((a) => {
      a.addedNodes.forEach((n) => {
        var _a, _b, _c;
        if (n instanceof HTMLElement) {
          const r = ((_a = n.querySelector) == null ? void 0 : _a.call(n, '[class*="dialog"]')) || (((_c = (_b = n.className) == null ? void 0 : _b.includes) == null ? void 0 : _c.call(_b, "dialog")) ? n : null);
          if (r && !r.querySelector(".dialog-maximize")) {
            const h = document.createElement("button");
            h.className = "dialog-maximize", h.innerHTML = "\u26F6", h.title = "Maximizar/Restaurar", h.onclick = (z) => {
              z.stopPropagation(), rt.val = !rt.val, rt.val ? (document.body.classList.add("dialog-maximized"), h.innerHTML = "\u26F6") : (document.body.classList.remove("dialog-maximized"), h.innerHTML = "\u26F6");
            }, r.style.position = "relative", r.appendChild(h);
          }
        }
      });
    });
  });
  Vt.observe(document.body, {
    childList: true,
    subtree: true
  });
  X.derive(() => {
    at.val || (document.body.classList.remove("dialog-maximized"), rt.val = false);
  });
});
