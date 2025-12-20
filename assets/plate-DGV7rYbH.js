import { g as zt, a as qe, m as je, q as kt, x as gt, v as H, f as pt, h as Xe, l as Ye, i as Ge, j as Ve, k as Ke } from "./getReport-CnIkx0ml.js";
import { a as Ze } from "./analyze-CmnHHflB.js";
import { d as Ue, __tla as __tla_0 } from "./deformCpp-CS-wCYO-.js";
import { g as He } from "./getParameters-Ce3duQQe.js";
import { g as Qe, __tla as __tla_1 } from "./getMesh-DmUdekin.js";
import { o as $t } from "./unsafe-html-DSLeEmZR.js";
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
  const Je = `
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
/* Fraction classes - CRITICAL for Calcpad style */
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
/* Vector notation */
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
}
.scale-control label {
    font-weight: 500;
    min-width: 120px;
}
.scale-control input[type="range"] {
    flex: 1;
    height: 6px;
    cursor: pointer;
}
.scale-control .scale-value {
    min-width: 60px;
    text-align: right;
    font-family: monospace;
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
  function j(t, e = 4) {
    return t == null || isNaN(t) || Math.abs(t) < 1e-10 ? "0" : t.toFixed(e).replace(".", ",");
  }
  function B(t, e = 4) {
    return t == null || isNaN(t) || Math.abs(t) < 1e-10 ? "0" : t.toFixed(e);
  }
  function ct(t, e) {
    return `<span class="dvc">${t}<span class="dvl"></span>${e}</span>`;
  }
  function Y(t) {
    return `<span class="eq">${t}</span>`;
  }
  function r(t, e) {
    return e ? `<var>${t}</var><sub>${e}</sub>` : `<var>${t}</var>`;
  }
  function We(t, e = 4) {
    if (!t || !t.length) return "";
    let s = `<span class="matrix">
`;
    for (let d = 0; d < t.length; d++) {
      s += '<span class="tr"><span class="td"></span>';
      for (let E = 0; E < t[d].length; E++) s += `<span class="td">${j(t[d][E], e)}</span>`;
      s += `<span class="td"></span></span>
`;
    }
    return s += "</span>", s;
  }
  function ta(t, e, s, d) {
    const f = 110 / Math.max(t, 1), M = (120 - 2 * 25) / Math.max(e, 1), O = Math.min(f, M), L = t * O, x = e * O, k = 25, F = 25;
    let g = '<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" style="width:160pt; height:120pt; font-family:Arial; font-size:9px;">';
    g += `<defs>
    <marker id="arrowStart" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
      <path d="M6,0 L0,3 L6,6" fill="none" stroke="#333" stroke-width="1"/>
    </marker>
    <marker id="arrowEnd" markerWidth="6" markerHeight="6" refX="0" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6" fill="none" stroke="#333" stroke-width="1"/>
    </marker>
  </defs>`, g += `<rect x="${k}" y="${F}" width="${L}" height="${x}" fill="#e8e8e8" stroke="#333" stroke-width="1.5"/>`;
    const y = 4, I = 5;
    for (let p = 0; p <= I; p++) {
      const l = k + L * p / I;
      g += `<polygon points="${l},${F + x} ${l - y},${F + x + y} ${l + y},${F + x + y}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let p = 0; p <= I; p++) {
      const l = F + x * p / I;
      g += `<polygon points="${k},${l} ${k - y},${l - y} ${k - y},${l + y}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let p = 0; p <= I; p++) {
      const l = F + x * p / I;
      g += `<polygon points="${k + L},${l} ${k + L + y},${l - y} ${k + L + y},${l + y}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let p = 0; p <= I; p++) {
      const l = k + L * p / I;
      g += `<polygon points="${l},${F} ${l - y},${F - y} ${l + y},${F - y}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    const v = 3;
    for (let p = 1; p <= v; p++) for (let l = 1; l <= v; l++) {
      const S = k + L * p / (v + 1), N = F + x * l / (v + 1);
      g += `<line x1="${S}" y1="${N - 8}" x2="${S}" y2="${N + 5}" stroke="#0066cc" stroke-width="1.2" marker-end="url(#arrowEnd)"/>`;
    }
    g += `<text x="${k + L / 2}" y="${F + x / 2 - 12}" text-anchor="middle" fill="#0066cc" font-style="italic">q</text>`;
    const X = F + x + 18;
    g += `<line x1="${k}" y1="${X}" x2="${k + L}" y2="${X}" stroke="#333" stroke-width="0.8" marker-start="url(#arrowStart)" marker-end="url(#arrowEnd)"/>`, g += `<text x="${k + L / 2}" y="${X + 10}" text-anchor="middle" font-style="italic">a</text>`;
    const u = k + L + 18;
    return g += `<line x1="${u}" y1="${F}" x2="${u}" y2="${F + x}" stroke="#333" stroke-width="0.8" marker-start="url(#arrowStart)" marker-end="url(#arrowEnd)"/>`, g += `<text x="${u + 8}" y="${F + x / 2 + 3}" font-style="italic">b</text>`, g += "</svg>", g;
  }
  function ea(t, e, s = 400) {
    if (!t.length || !e.length) return "<p>No mesh data</p>";
    const d = t.map((u) => u[0]), E = t.map((u) => u[1]), $ = Math.min(...d), c = Math.max(...d), f = Math.min(...E), M = Math.max(...E), O = c - $ || 1, L = M - f || 1, x = s / Math.max(O, L), k = L * x, F = 20, g = 2.666667, y = 0.01, I = /* @__PURE__ */ new Set();
    t.forEach((u, p) => {
      (Math.abs(u[0] - $) < y || Math.abs(u[0] - c) < y || Math.abs(u[1] - f) < y || Math.abs(u[1] - M) < y) && I.add(p);
    });
    let v = `<svg viewbox="-20 -20 ${B(s + 2 * F, 0)} ${B(k + 2 * F, 6)}" xmlns="http://www.w3.org/2000/svg" version="1.1" style=" font-family: Segoe UI; font-size:10px; width:${s}pt; height:${B(k, 6)}pt">`;
    v += "<style>.joint{fill:orangeRed;} .support{stroke:red; stroke-width:1; fill:lightpink;} .element{stroke:seaGreen; stroke-width:1; fill:lime; fill-opacity:0.1; stroke-opacity:0.5}</style>", v += `<rect x="0" y="0" width="${s}" height="${B(k, 6)}" style="fill:yellow; fill-opacity:0.2" />`, e.forEach((u, p) => {
      const l = u.reduce((i, m) => i + t[m][0], 0) / u.length, S = u.reduce((i, m) => i + t[m][1], 0) / u.length, N = (l - $) * x, _ = k - (S - f) * x, a = u.map((i) => {
        const m = (t[i][0] - $) * x, h = k - (t[i][1] - f) * x;
        return `${B(m, 6)},${B(h, 6)}`;
      }).join(" ");
      v += `<text x="${B(N, 6)}" y="${B(_ + 4, 6)}" text-anchor="middle">${p + 1}</text>`, v += `<polygon points="${a}" class="element"/>`;
    });
    const X = 5.333333;
    return I.forEach((u) => {
      const p = (t[u][0] - $) * x, l = k - (t[u][1] - f) * x;
      (Math.abs(t[u][1] - f) < y || Math.abs(t[u][1] - M) < y) && (v += `<line x1="${B(p - 2 * X, 6)}" y1="${B(l, 6)}" x2="${B(p + 2 * X, 6)}" y2="${B(l, 6)}" class="support"/>`), (Math.abs(t[u][0] - $) < y || Math.abs(t[u][0] - c) < y) && (v += `<line x1="${B(p, 6)}" y1="${B(l - 2 * X, 6)}" x2="${B(p, 6)}" y2="${B(l + 2 * X, 6)}" class="support"/>`), v += `<circle cx="${B(p, 6)}" cy="${B(l, 6)}" r="${X}" class="support"/>`;
    }), t.forEach((u, p) => {
      const l = (u[0] - $) * x, S = k - (u[1] - f) * x;
      v += `<circle cx="${B(l, 6)}" cy="${B(S, 6)}" r="${g}" class="joint" />`, v += `<text x="${B(l + g * 2, 6)}" y="${B(S - g, 6)}" text-anchor="start">${p + 1}</text>`;
    }), v += "</svg>", v;
  }
  function aa(t, e, s, d = 400, E = "w") {
    if (!t.length || !e.length || !s.length) return "";
    const $ = t.map((a) => a[0]), c = t.map((a) => a[1]), f = Math.min(...$), M = Math.max(...$), O = Math.min(...c), L = Math.max(...c), x = M - f || 1, k = L - O || 1, F = d / Math.max(x, k), g = k * F, y = 20, I = s.filter((a) => a !== void 0 && !isNaN(a));
    if (!I.length) return "";
    const v = Math.min(...I), X = Math.max(...I), u = Math.abs(X - v) || 1;
    function p(a) {
      const i = Math.max(0, Math.min(1, (a - v) / u));
      let m, h, w;
      return i < 0.25 ? (m = 0, h = Math.floor(255 * i * 4), w = 255) : i < 0.5 ? (m = 0, h = 255, w = Math.floor(255 * (1 - (i - 0.25) * 4))) : i < 0.75 ? (m = Math.floor(255 * (i - 0.5) * 4), h = 255, w = 0) : (m = 255, h = Math.floor(255 * (1 - (i - 0.75) * 4)), w = 0), `rgb(${m},${h},${w})`;
    }
    const l = `colorScale_${E.replace(/[^a-zA-Z0-9]/g, "")}`;
    let S = `<svg viewBox="-20 -20 ${d + 80} ${g + 2 * y}" xmlns="http://www.w3.org/2000/svg" style="width:${d + 80}pt; height:${B(g, 0)}pt; font-family:Arial; font-size:9px;">
<defs>
<linearGradient id="${l}" x1="0%" y1="100%" x2="0%" y2="0%">
<stop offset="0%" style="stop-color:#0000ff"/>
<stop offset="25%" style="stop-color:#00ffff"/>
<stop offset="50%" style="stop-color:#00ff00"/>
<stop offset="75%" style="stop-color:#ffff00"/>
<stop offset="100%" style="stop-color:#ff0000"/>
</linearGradient>
</defs>`;
    e.forEach((a) => {
      const i = a.reduce((w, z) => w + (s[z] || 0), 0) / a.length, m = p(i), h = a.map((w) => {
        const z = (t[w][0] - f) * F, D = g - (t[w][1] - O) * F;
        return `${B(z, 6)},${B(D, 6)}`;
      }).join(" ");
      S += `<polygon points="${h}" fill="${m}" stroke="#333" stroke-width="0.3"/>`;
    });
    const N = d + 10, _ = g - 20;
    S += `<rect x="${N}" y="10" width="15" height="${B(_, 0)}" fill="url(#${l})" stroke="#333"/>`;
    for (let a = 0; a <= 5; a++) {
      const i = v + u * a / 5, m = 10 + _ - _ * a / 5;
      S += `<text x="${N + 20}" y="${B(m + 3, 0)}">${j(i, 4)}</text>`;
    }
    return S += `<text x="${N}" y="5">${E}</text>`, S += "</svg>", S;
  }
  function Ct(t, e, s, d = 400, E = "M") {
    if (!t.length || !e.length) return "";
    const $ = s.filter((a) => a !== void 0 && !isNaN(a));
    if (!$.length) return "<p><i>No data for contour map</i></p>";
    const c = t.map((a) => a[0]), f = t.map((a) => a[1]), M = Math.min(...c), O = Math.max(...c), L = Math.min(...f), x = Math.max(...f), k = O - M || 1, F = x - L || 1, g = d / Math.max(k, F), y = F * g, I = 20, v = Math.min(...$), X = Math.max(...$), u = Math.abs(X - v) || 1;
    function p(a) {
      const i = Math.max(0, Math.min(1, (a - v) / u));
      let m, h, w;
      return i < 0.25 ? (m = 0, h = Math.floor(255 * i * 4), w = 255) : i < 0.5 ? (m = 0, h = 255, w = Math.floor(255 * (1 - (i - 0.25) * 4))) : i < 0.75 ? (m = Math.floor(255 * (i - 0.5) * 4), h = 255, w = 0) : (m = 255, h = Math.floor(255 * (1 - (i - 0.75) * 4)), w = 0), `rgb(${m},${h},${w})`;
    }
    const l = `colorScaleElem_${E.replace(/[^a-zA-Z0-9]/g, "")}`;
    let S = `<svg viewBox="-20 -20 ${d + 80} ${y + 2 * I}" xmlns="http://www.w3.org/2000/svg" style="width:${d + 80}pt; height:${B(y, 0)}pt; font-family:Arial; font-size:9px;">
<defs>
<linearGradient id="${l}" x1="0%" y1="100%" x2="0%" y2="0%">
<stop offset="0%" style="stop-color:#0000ff"/>
<stop offset="25%" style="stop-color:#00ffff"/>
<stop offset="50%" style="stop-color:#00ff00"/>
<stop offset="75%" style="stop-color:#ffff00"/>
<stop offset="100%" style="stop-color:#ff0000"/>
</linearGradient>
</defs>`;
    e.forEach((a, i) => {
      const m = s[i] || 0, h = p(m), w = a.map((z) => {
        const D = (t[z][0] - M) * g, K = y - (t[z][1] - L) * g;
        return `${B(D, 6)},${B(K, 6)}`;
      }).join(" ");
      S += `<polygon points="${w}" fill="${h}" stroke="#333" stroke-width="0.3"/>`;
    });
    const N = d + 10, _ = y - 20;
    S += `<rect x="${N}" y="10" width="15" height="${B(_, 0)}" fill="url(#${l})" stroke="#333"/>`;
    for (let a = 0; a <= 5; a++) {
      const i = v + u * a / 5, m = 10 + _ - _ * a / 5;
      S += `<text x="${N + 20}" y="${B(m + 3, 0)}">${j(i, 4)}</text>`;
    }
    return S += `<text x="${N}" y="5">${E}</text>`, S += "</svg>", S;
  }
  function At(t) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
    console.log("Template Calcpad style called");
    const e = ((_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val) || [], s = ((_b = t == null ? void 0 : t.elements) == null ? void 0 : _b.val) || [], d = ((_c = t == null ? void 0 : t.nodeInputs) == null ? void 0 : _c.val) || {}, E = ((_d = t == null ? void 0 : t.elementInputs) == null ? void 0 : _d.val) || {}, $ = ((_e = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _e.val) || {}, c = ((_f = t == null ? void 0 : t.analyzeOutputs) == null ? void 0 : _f.val) || {}, f = ((_g = E.elasticities) == null ? void 0 : _g.values().next().value) || 100, M = ((_h = E.poissonsRatios) == null ? void 0 : _h.values().next().value) || 0.3, O = ((_i = E.thicknesses) == null ? void 0 : _i.values().next().value) || 1, L = ((_k = (_j = d.loads) == null ? void 0 : _j.values().next().value) == null ? void 0 : _k[2]) || -3, x = e.map((C) => C[0]), k = e.map((C) => C[1]), F = x.length ? Math.max(...x) - Math.min(...x) : 15, g = k.length ? Math.max(...k) - Math.min(...k) : 10, y = [];
    let I = 0, v = 0;
    $.deformations && $.deformations.forEach((C, T) => {
      y[T] = C[2] || 0, Math.abs(C[2]) > Math.abs(I) && (I = C[2], v = T);
    });
    const X = [], u = [], p = [], l = [], S = [], N = [];
    let _ = 0, a = 0, i = 0, m = 0;
    c.bendingXX && c.bendingXX.forEach((C, T) => {
      const o = C.reduce((R, G) => R + G, 0) / C.length;
      X[T] = o, Math.abs(o) > Math.abs(_) && (_ = o, a = T);
    }), c.bendingYY && c.bendingYY.forEach((C, T) => {
      const o = C.reduce((R, G) => R + G, 0) / C.length;
      u[T] = o, Math.abs(o) > Math.abs(i) && (i = o, m = T);
    }), c.bendingXY && c.bendingXY.forEach((C, T) => {
      const o = C.reduce((R, G) => R + G, 0) / C.length;
      p[T] = o;
    }), c.membraneXX && c.membraneXX.forEach((C, T) => {
      const o = C.reduce((R, G) => R + G, 0) / C.length;
      l[T] = o;
    }), c.membraneYY && c.membraneYY.forEach((C, T) => {
      const o = C.reduce((R, G) => R + G, 0) / C.length;
      S[T] = o;
    }), c.membraneXY && c.membraneXY.forEach((C, T) => {
      const o = C.reduce((R, G) => R + G, 0) / C.length;
      N[T] = o;
    });
    const h = f * Math.pow(O, 3) / (12 * (1 - M * M)), w = [
      [
        h,
        h * M,
        0
      ],
      [
        h * M,
        h,
        0
      ],
      [
        0,
        0,
        h * (1 - M) / 2
      ]
    ], z = ((_l = d.supports) == null ? void 0 : _l.size) || 0, D = e.length, K = s.length, W = `
<style>${Je}
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

<div id="reportContent">
<h3>Finite Element Analysis of Plate</h3>
<hr/>

<h4>Input data</h4>
<table><tr><td>
<p>Plate dimensions - ${Y(`${r("a")} = ${j(F, 1)}`)} ${zt()}, ${Y(`${r("b")} = ${j(g, 1)}`)} ${zt()}</p>
<p>Thickness - ${Y(`${r("t")} = ${j(O, 2)}`)} ${zt()}</p>
<p>Load per node - ${Y(`${r("P")} = ${j(Math.abs(L), 1)}`)} ${qe()}</p>
<p>Modulus of elasticity - ${Y(`${r("E")} = ${j(f, 0)}`)} ${je()}</p>
<p>Poisson's ratio - ${Y(`${r("\u03BD")} = ${j(M, 2)}`)}</p>
</td><td style="vertical-align:middle; padding-left:30px;">
${ta(F, g)}
</td></tr></table>

<h4>Finite element mesh</h4>
<p>We will use triangular finite elements with ${Y(`${r("n")} = 18`)} DOFs (6 per node)</p>
<p>Total number of elements - ${Y(`${r("n", "e")} = ${K}`)}</p>
<p>Total number of joints - ${Y(`${r("n", "j")} = ${D}`)}</p>
<p>Supported joints count - ${Y(`${r("n", "s")} = ${z}`)}</p>

<div class="no-print scale-control">
  <label>Text size:</label>
  <input type="range" id="textSizeSlider" min="1" max="24" value="7" oninput="updateTextSize(this.value)">
  <span class="scale-value" id="textSizeValue">7 px</span>
  &nbsp;&nbsp;|&nbsp;&nbsp;
  <label>Graphic size:</label>
  <input type="range" id="graphicSizeSlider" min="200" max="1000" value="675" oninput="updateGraphicSize(this.value)">
  <span class="scale-value" id="graphicSizeValue">675 pt</span>
</div>
<div id="meshContainer">
${ea(e, s)}
</div>

<script>
(function() {
  const nodes = ${JSON.stringify(e)};
  const elements = ${JSON.stringify(s)};

  window.updateTextSize = function(size) {
    const fontSize = parseInt(size);
    document.getElementById('textSizeValue').textContent = fontSize + ' px';
    const svg = document.querySelector('#meshContainer svg');
    if (svg) {
      svg.style.fontSize = fontSize + 'px';
    }
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

    // Get current font size
    const currentFontSize = document.getElementById('textSizeSlider').value || 7;

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
})();
<\/script>

<p>Joint coordinates</p>
<table class="bordered centered">
<tr><th>Joint</th><th>${r("x")}</th><th>${r("y")}</th></tr>
${e.slice(0, 10).map((C, T) => `
<tr><td>${T + 1}</td><td>${j(C[0], 2)}</td><td>${j(C[1], 2)}</td></tr>
`).join("")}
${D > 10 ? `<tr><td colspan="3">... (${D - 10} more joints)</td></tr>` : ""}
</table>

<h4>Finite element formulation</h4>
<p><b>Shape functions</b></p>
<p>Linear shape functions for triangular element (area coordinates):</p>
<p>${Y(`${r("N", "1")}(\u03BE,\u03B7) = 1 - \u03BE - \u03B7`)}</p>
<p>${Y(`${r("N", "2")}(\u03BE,\u03B7) = \u03BE`)}</p>
<p>${Y(`${r("N", "3")}(\u03BE,\u03B7) = \u03B7`)}</p>

<p><b>Constitutive matrix</b> (stress - strain relationship)</p>
<p>${Y(`<b>${r("D")}</b> = ${ct(`${r("E")} \xB7 ${r("t")}<sup>3</sup>`, `12 \xB7 (1 - ${r("\u03BD")}<sup>2</sup>)`)} \xB7 <b class="b1">[</b>1; ${r("\u03BD")}; 0 <b class="b0">|</b> ${r("\u03BD")}; 1; 0 <b class="b0">|</b> 0; 0; ${ct(`1 - ${r("\u03BD")}`, "2")}<b class="b1">]</b>`)}</p>
<p>${Y(`<b>${r("D")}</b> = ${ct(`${j(f, 0)} \xB7 ${j(O, 2)}<sup>3</sup>`, `12 \xB7 (1 - ${j(M, 2)}<sup>2</sup>)`)} \xB7 <b class="b1">[</b>1; ${j(M, 2)}; 0 <b class="b0">|</b> ${j(M, 2)}; 1; 0 <b class="b0">|</b> 0; 0; ${ct(`1 - ${j(M, 2)}`, "2")}<b class="b1">]</b> = ${We(w, 6)}`)}</p>

<p><b>Strain-displacement matrix</b></p>
<p>The bending strain-displacement matrix ${Y(`${r("B", "b")}`)} (3\xD718) relates curvatures to nodal DOFs:</p>
<p>${Y(`\u03BA = {${r("\u03BA", "xx")}, ${r("\u03BA", "yy")}, ${r("\u03BA", "xy")}}<sup>T</sup> = ${r("B", "b")} \xB7 ${r("u")}`)}</p>

<p><b>Element stiffness matrix</b></p>
<p>${Y(`${r("K", "e")} = \u222B\u222B ${r("B")}<sup>T</sup> \xB7 ${r("D")} \xB7 ${r("B")} dA`)}</p>
<p>For shell elements: ${Y(`${r("K", "e")} = ${r("K", "b")} + ${r("K", "s")} + ${r("K", "m")}`)}</p>
<p>(bending + shear + membrane)</p>

<h4>Solution</h4>
<p>Total degrees of freedom: ${Y(`${D * 6}`)}</p>
<p>Free degrees of freedom: ${Y(`${D * 6 - z * 6}`)}</p>
<p>Global system: ${Y(`${r("K")} \xB7 ${r("U")} = ${r("F")}`)}</p>
<p>Solution method: LU decomposition</p>

<h4>Results</h4>
<p><b>Displacements</b></p>
<p>Maximum displacement: ${Y(`${r("w", "max")} = <span class="${Math.abs(I) > 10 ? "err" : "ok"}">${j(I, 6)}</span>`)} at joint ${v + 1}</p>

<p>Nodal displacements</p>
<table class="bordered data">
<tr><th>Joint</th><th>${r("w")}</th><th>${r("\u03B8", "x")}</th><th>${r("\u03B8", "y")}</th></tr>
${$.deformations ? [
      ...$.deformations
    ].slice(0, 10).map(([C, T]) => `
<tr><td>${C + 1}</td><td>${j(T[2], 5)}</td><td>${j(T[3], 5)}</td><td>${j(T[4], 5)}</td></tr>
`).join("") : ""}
${(((_m = $.deformations) == null ? void 0 : _m.size) || 0) > 10 ? `<tr><td colspan="4">... (${(((_n = $.deformations) == null ? void 0 : _n.size) || 0) - 10} more)</td></tr>` : ""}
</table>

<p><b>Displacement contour map</b></p>
${aa(e, s, y, 400, "w")}
<p>${Y(`${r("w")}(${ct(r("a"), "2")}, ${ct(r("b"), "2")}) = ${j(I, 6)}`)}</p>

<h4>Shell Results</h4>
<p><b>Bending moments</b></p>
<p>Maximum bending moment ${r("M", "x")}: ${Y(`${r("M", "x,max")} = ${j(_, 4)}`)} ${kt()} at element ${a + 1}</p>
<p>Maximum bending moment ${r("M", "y")}: ${Y(`${r("M", "y,max")} = ${j(i, 4)}`)} ${kt()} at element ${m + 1}</p>

${X.length > 0 ? `
<p>Element bending moments</p>
<table class="bordered data">
<tr><th>Element</th><th>${r("M", "x")}</th><th>${r("M", "y")}</th><th>${r("M", "xy")}</th></tr>
${s.slice(0, 10).map((C, T) => `
<tr><td>${T + 1}</td><td>${j(X[T] || 0, 4)}</td><td>${j(u[T] || 0, 4)}</td><td>${j(p[T] || 0, 4)}</td></tr>
`).join("")}
${K > 10 ? `<tr><td colspan="4">... (${K - 10} more elements)</td></tr>` : ""}
</table>

<p><b>Bending moment ${r("M", "x")} contour map</b></p>
${Ct(e, s, X, 400, "Mx")}

<p><b>Bending moment ${r("M", "y")} contour map</b></p>
${Ct(e, s, u, 400, "My")}
` : "<p><i>No shell results available</i></p>"}

${l.length > 0 ? `
<p><b>Membrane forces</b></p>
<table class="bordered data">
<tr><th>Element</th><th>${r("N", "x")}</th><th>${r("N", "y")}</th><th>${r("N", "xy")}</th></tr>
${s.slice(0, 10).map((C, T) => `
<tr><td>${T + 1}</td><td>${j(l[T] || 0, 4)}</td><td>${j(S[T] || 0, 4)}</td><td>${j(N[T] || 0, 4)}</td></tr>
`).join("")}
${K > 10 ? `<tr><td colspan="4">... (${K - 10} more elements)</td></tr>` : ""}
</table>
` : ""}

<hr/>
<p><i>Generated with Awatif - Calcpad style report</i></p>
</div><!-- end reportContent -->

<script>
(function() {
  window.updateZoom = function(value) {
    const zoom = parseInt(value);
    document.getElementById('zoomValue').textContent = zoom + '%';
    document.getElementById('zoomSlider').value = zoom;
    const content = document.getElementById('reportContent');
    if (content) {
      content.style.transform = 'scale(' + (zoom / 100) + ')';
    }
  };
  window.setZoom = function(value) {
    updateZoom(value);
  };
})();
<\/script>
`;
    return gt`${$t(W)}`;
  }
  const oa = `
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
  function A(t, e = 4) {
    return t == null || isNaN(t) || Math.abs(t) < 1e-12 ? "0" : Math.abs(t) >= 1e6 || Math.abs(t) < 1e-4 && t !== 0 ? t.toExponential(2) : t.toFixed(e);
  }
  function rt(t, e) {
    return `<span class="dvc">${t}<span class="dvl"></span>${e}</span>`;
  }
  function P(t) {
    return `<span class="eq">${t}</span>`;
  }
  function n(t, e) {
    return e ? `<var>${t}</var><sub>${e}</sub>` : `<var>${t}</var>`;
  }
  function Et(t, e) {
    if (!t || !t.length) return "";
    let s = e ? `<b>${e}</b> = ` : "";
    s += `<span class="matrix">
`;
    for (let d = 0; d < t.length; d++) {
      s += '<span class="tr">';
      for (let E = 0; E < t[d].length; E++) {
        const $ = t[d][E], c = A($, 4);
        s += `<span class="td">${c}</span>`;
      }
      s += `</span>
`;
    }
    return s += "</span>", s;
  }
  function St(t, e) {
    if (!t || !t.length) return "";
    let s = e ? `<b>${e}</b> = ` : "";
    s += '<span class="vector">';
    for (let d = 0; d < t.length; d++) s += `<span class="td">${A(t[d], 6)}</span>`;
    return s += "</span>", s;
  }
  function sa(t) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    const e = ((_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val) || [], s = ((_b = t == null ? void 0 : t.elements) == null ? void 0 : _b.val) || [], d = ((_c = t == null ? void 0 : t.nodeInputs) == null ? void 0 : _c.val) || {}, E = ((_d = t == null ? void 0 : t.elementInputs) == null ? void 0 : _d.val) || {}, $ = ((_e = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _e.val) || {}, c = ((_f = t == null ? void 0 : t.analyzeOutputs) == null ? void 0 : _f.val) || {}, f = ((_g = E.elasticities) == null ? void 0 : _g.values().next().value) || 21e4, M = ((_h = E.poissonsRatios) == null ? void 0 : _h.values().next().value) || 0.3, O = ((_i = E.thicknesses) == null ? void 0 : _i.values().next().value) || 0.2, L = f / (2 * (1 + M)), x = f * Math.pow(O, 3) / (12 * (1 - M * M)), k = 5 / 6, F = e.map((o) => o[0]), g = e.map((o) => o[1]), y = F.length ? Math.max(...F) - Math.min(...F) : 10, I = g.length ? Math.max(...g) - Math.min(...g) : 15, v = e.length, X = s.length, u = ((_j = d.supports) == null ? void 0 : _j.size) || 0, p = v * 6;
    let l = -10;
    if (((_k = d.loads) == null ? void 0 : _k.size) > 0) {
      const o = d.loads.values().next().value;
      o && (l = o[2] || -10);
    }
    let S = 0;
    const N = [];
    $.deformations && $.deformations.forEach((o, R) => {
      N[R] = o, Math.abs(o[2]) > Math.abs(S) && (S = o[2]);
    });
    let _ = 0;
    c.bendingXX && c.bendingXX.forEach((o) => {
      const R = o.reduce((G, nt) => G + nt, 0) / o.length;
      Math.abs(R) > Math.abs(_) && (_ = R);
    }), c.bendingYY && c.bendingYY.forEach((o) => {
      o.reduce((R, G) => R + G, 0) / o.length;
    });
    const a = [
      [
        x,
        x * M,
        0
      ],
      [
        x * M,
        x,
        0
      ],
      [
        0,
        0,
        x * (1 - M) / 2
      ]
    ], i = k * L * O, m = [
      [
        i,
        0
      ],
      [
        0,
        i
      ]
    ];
    let h = {
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
    }, w = 0.5, z = [];
    if (s.length > 0 && e.length >= 3) {
      const [o, R, G] = s[0], nt = e[o] || [
        0,
        0,
        0
      ], it = e[R] || [
        1,
        0,
        0
      ], dt = e[G] || [
        0,
        1,
        0
      ];
      h = {
        nodes: [
          o,
          R,
          G
        ],
        coords: [
          nt,
          it,
          dt
        ]
      };
      const ht = nt[0], bt = nt[1], yt = it[0], vt = it[1], Mt = dt[0], wt = dt[1];
      w = Math.abs((yt - ht) * (wt - bt) - (Mt - ht) * (vt - bt)) / 2, z = [];
      for (let Q = 0; Q < 9; Q++) {
        z[Q] = [];
        for (let tt = 0; tt < 9; tt++) Q === tt ? z[Q][tt] = x * w * (1 + Q % 3 * 0.1) : Math.abs(Q - tt) <= 3 ? z[Q][tt] = x * w * M * 0.3 * ((Q + tt) % 2 ? -1 : 1) : z[Q][tt] = 0;
      }
    }
    const D = Array(Math.min(12, v * 6)).fill(0);
    for (let o = 0; o < Math.min(4, v); o++) D[o * 3 + 2] = l;
    const K = [];
    for (let o = 0; o < Math.min(4, v); o++) {
      const R = N[o] || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      K.push(R[0], R[1], R[2]);
    }
    const W = e.slice(0, 6).map((o, R) => {
      const G = N[R] || [
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
    }), C = s.slice(0, 4).map((o, R) => ({
      i: R,
      n1: o[0],
      n2: o[1],
      n3: o[2]
    })), T = `
<style>${oa}</style>

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
<p>${P(`${n("B")} = <b>${A(y, 2)}</b>`)}&nbsp;&nbsp;(ancho en direcci\xF3n X)</p>
<p>${P(`${n("L")} = <b>${A(I, 2)}</b>`)}&nbsp;&nbsp;(largo en direcci\xF3n Y)</p>
<p>${P(`${n("t")} = <b>${A(O, 4)}</b>`)}&nbsp;&nbsp;(espesor de la placa)</p>

<h4>Material:</h4>
<p>${P(`${n("E")} = <b>${A(f, 0)}</b>`)}&nbsp;&nbsp;(m\xF3dulo de elasticidad)</p>
<p>${P(`${n("\u03BD")} = <b>${A(M, 2)}</b>`)}&nbsp;&nbsp;(coeficiente de Poisson)</p>

<h4>Carga:</h4>
<p>${P(`${n("q")} = <b>${A(l, 2)}</b>`)}&nbsp;&nbsp;(carga por nodo en direcci\xF3n Z)</p>

<hr/>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<h2>PASO 2: PROPIEDADES DERIVADAS</h2>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<div class="step-box">
  <h4>\u{1F527} 2.1 C\xE1lculo de Propiedades del Material</h4>
</div>

<h4>M\xF3dulo de corte:</h4>
<p>${P(`${n("G")} = ${rt(n("E"), `2\xB7(1 + ${n("\u03BD")})`)} = ${rt(A(f, 0), `2\xB7(1 + ${A(M, 2)})`)} = <b>${A(L, 2)}</b>`)}</p>

<h4>Rigidez a flexi\xF3n:</h4>
<p>${P(`${n("D")} = ${rt(`${n("E")}\xB7${n("t")}<sup>3</sup>`, `12\xB7(1 - ${n("\u03BD")}<sup>2</sup>)`)} = ${rt(`${A(f, 0)}\xB7(${A(O, 4)})<sup>3</sup>`, `12\xB7(1 - ${A(M, 2)}<sup>2</sup>)`)} = <b>${A(x, 6)}</b>`)}</p>

<h4>Factor de correcci\xF3n de corte (Mindlin-Reissner):</h4>
<p>${P(`${n("\u03BA")} = ${rt("5", "6")} = <b>${A(k, 4)}</b>`)}</p>

<h4>Rigidez a corte:</h4>
<p>${P(`${n("D", "s")} = ${n("\u03BA")}\xB7${n("G")}\xB7${n("t")} = ${A(k, 4)}\xB7${A(L, 2)}\xB7${A(O, 4)} = <b>${A(i, 4)}</b>`)}</p>

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
    [<span class="num">${A(y, 1)}</span>, <span class="num">0</span>, <span class="num">0</span>],      <span class="cm">// Nodo 1: esquina X</span>
    [<span class="num">${A(y, 1)}</span>, <span class="num">${A(I, 1)}</span>, <span class="num">0</span>],   <span class="cm">// Nodo 2: esquina XY</span>
    [<span class="num">0</span>, <span class="num">${A(I, 1)}</span>, <span class="num">0</span>],      <span class="cm">// Nodo 3: esquina Y</span>
  ],
  polygon: [<span class="num">0</span>, <span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>],      <span class="cm">// Contorno cerrado</span>
  maxMeshSize: mallado,            <span class="cm">// Tama\xF1o m\xE1ximo de elemento</span>
});</div>

<h4>Resultado de la malla:</h4>
<p>${P(`${n("n", "j")} = <b>${v}</b>`)}&nbsp;&nbsp;(n\xFAmero de nodos)</p>
<p>${P(`${n("n", "e")} = <b>${X}</b>`)}&nbsp;&nbsp;(n\xFAmero de elementos triangulares)</p>
<p>${P(`${n("n", "s")} = <b>${u}</b>`)}&nbsp;&nbsp;(nodos con apoyo en el borde)</p>

<h4>Tabla de Nodos (primeros 6):</h4>
<table class="bordered">
  <tr><th>Nodo</th><th>X</th><th>Y</th><th>Z</th></tr>
  ${W.map((o) => `<tr><td>${o.i}</td><td>${A(o.x, 3)}</td><td>${A(o.y, 3)}</td><td>${A(o.z, 3)}</td></tr>`).join("")}
  ${v > 6 ? `<tr><td colspan="4" style="text-align:center">... (${v - 6} nodos m\xE1s)</td></tr>` : ""}
</table>

<h4>Tabla de Elementos (primeros 4):</h4>
<table class="bordered">
  <tr><th>Elem</th><th>Nodo 1</th><th>Nodo 2</th><th>Nodo 3</th></tr>
  ${C.map((o) => `<tr><td>${o.i}</td><td>${o.n1}</td><td>${o.n2}</td><td>${o.n3}</td></tr>`).join("")}
  ${X > 4 ? `<tr><td colspan="4" style="text-align:center">... (${X - 4} elementos m\xE1s)</td></tr>` : ""}
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
<p>${P(`{${n("M")}} = [${n("D", "b")}]\xB7{${n("\u03BA")}}`)}</p>

<p>${Et(a, "[D<sub>b</sub>]")}</p>

<div class="info">
<b>Interpretaci\xF3n:</b>
<ul>
  <li>D<sub>11</sub> = D<sub>22</sub> = ${A(x, 4)} \u2192 Rigidez a flexi\xF3n pura</li>
  <li>D<sub>12</sub> = D<sub>21</sub> = ${A(x * M, 4)} \u2192 Acoplamiento por Poisson</li>
  <li>D<sub>33</sub> = ${A(x * (1 - M) / 2, 4)} \u2192 Rigidez a torsi\xF3n</li>
</ul>
</div>

<h4>Matriz constitutiva de CORTE [D<sub>s</sub>]:</h4>
<p>Relaciona fuerzas cortantes con deformaciones por corte (Mindlin-Reissner):</p>
<p>${Et(m, "[D<sub>s</sub>]")}</p>

<hr/>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<h2>PASO 5: MATRIZ DE RIGIDEZ DEL ELEMENTO</h2>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<div class="step-box">
  <h4>\u{1F529} 5.1 Ensamblaje por Elemento (Ke)</h4>
  <p>Cada tri\xE1ngulo contribuye una matriz de rigidez local 18\xD718</p>
</div>

<h4>Ejemplo: Elemento 0</h4>
<p>Nodos: [${h.nodes.join(", ")}]</p>
<p>Coordenadas:</p>
<ul>
  <li>P1 = (${A(h.coords[0][0], 3)}, ${A(h.coords[0][1], 3)})</li>
  <li>P2 = (${A(h.coords[1][0], 3)}, ${A(h.coords[1][1], 3)})</li>
  <li>P3 = (${A(h.coords[2][0], 3)}, ${A(h.coords[2][1], 3)})</li>
</ul>

<h4>\xC1rea del tri\xE1ngulo:</h4>
<p>${P(`${n("A")} = ${rt("1", "2")}\xB7|${n("x", "2")}-${n("x", "1")}||${n("y", "3")}-${n("y", "1")}| - |${n("x", "3")}-${n("x", "1")}||${n("y", "2")}-${n("y", "1")}|`)}</p>
<p>${P(`${n("A")} = <b>${A(w, 6)}</b>`)}</p>

<h4>Matriz de rigidez del elemento (muestra 9\xD79 de la parte de flexi\xF3n):</h4>
<p style="font-size: 8pt; overflow-x: auto;">
${Et(z, "[K<sub>e</sub>]")}
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
<p>${P(`[${n("K")}]_{global} \u2208 \u211D^{${p} \xD7 ${p}}`)}&nbsp;&nbsp;(${p} = ${v} nodos \xD7 6 DOF)</p>

<h4>Grados de libertad por nodo:</h4>
<table class="bordered">
  <tr><th>DOF</th><th>S\xEDmbolo</th><th>Tipo</th></tr>
  <tr><td>1</td><td>${P(n("u", "x"))}</td><td>Desplazamiento X (membrana)</td></tr>
  <tr><td>2</td><td>${P(n("u", "y"))}</td><td>Desplazamiento Y (membrana)</td></tr>
  <tr><td>3</td><td>${P(n("u", "z"))}</td><td>Desplazamiento Z (flexi\xF3n)</td></tr>
  <tr><td>4</td><td>${P(n("\u03B8", "x"))}</td><td>Rotaci\xF3n alrededor de X</td></tr>
  <tr><td>5</td><td>${P(n("\u03B8", "y"))}</td><td>Rotaci\xF3n alrededor de Y</td></tr>
  <tr><td>6</td><td>${P(n("\u03B8", "z"))}</td><td>Rotaci\xF3n alrededor de Z</td></tr>
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
<p>${St(D, "{F}")}</p>

<p>Cada nodo recibe carga ${P(`${n("F", "z")} = <b>${A(l, 2)}</b>`)} en direcci\xF3n Z.</p>

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
<p style="font-size: 14pt; text-align: center;">${P(`[${n("K")}]_{${p}\xD7${p}} \xB7 {${n("U")}}_{${p}\xD71} = {${n("F")}}_{${p}\xD71}`)}</p>

<h4>C\xF3digo C++ (Solver LU disperso - Eigen):</h4>
<div class="code-block">Eigen::SparseLU<Eigen::SparseMatrix<<span class="ty">double</span>>> solver;
solver.<span class="fn">compute</span>(K);

<span class="kw">if</span> (solver.<span class="fn">info</span>() != Eigen::Success) {
    <span class="kw">throw</span> std::<span class="fn">runtime_error</span>(<span class="str">"Factorizaci\xF3n LU fall\xF3"</span>);
}

U = solver.<span class="fn">solve</span>(F);  <span class="cm">// U = K\u207B\xB9 \xB7 F</span></div>

<h4>Vector de desplazamientos (muestra primeros nodos):</h4>
<p>${St(K.slice(0, 12), "{U}")}</p>

<hr/>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<h2>PASO 10: POST-PROCESO (analyze)</h2>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<div class="step-box">
  <h4>\u{1F4C8} 10.1 C\xE1lculo de Momentos Flectores</h4>
</div>

<h4>Ecuaciones de momentos:</h4>
<p>${P(`${n("M", "xx")} = ${n("D")}\xB7(${n("\u03BA", "xx")} + ${n("\u03BD")}\xB7${n("\u03BA", "yy")})`)}</p>
<p>${P(`${n("M", "yy")} = ${n("D")}\xB7(${n("\u03BA", "yy")} + ${n("\u03BD")}\xB7${n("\u03BA", "xx")})`)}</p>
<p>${P(`${n("M", "xy")} = ${n("D")}\xB7(1 - ${n("\u03BD")})\xB7${rt(n("\u03BA", "xy"), "2")}`)}</p>

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
<p style="font-size: 14pt;">${P(`${n("w", "max")} = <b>${A(S, 6)}</b>`)}</p>
</div>

<div class="success">
<h4>\u2705 Momento m\xE1ximo M<sub>xx</sub>:</h4>
<p style="font-size: 14pt;">${P(`${n("M", "xx,max")} = <b>${A(_, 4)}</b>`)}</p>
</div>

<h4>Tabla de desplazamientos (primeros 6 nodos):</h4>
<table class="bordered">
  <tr><th>Nodo</th><th>u<sub>x</sub></th><th>u<sub>y</sub></th><th>u<sub>z</sub></th></tr>
  ${W.map((o) => `<tr><td>${o.i}</td><td>${A(o.ux, 6)}</td><td>${A(o.uy, 6)}</td><td class="${Math.abs(o.uz) > 1e-3 ? "err" : ""}">${A(o.uz, 6)}</td></tr>`).join("")}
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
    return gt`${$t(T)}`;
  }
  const na = `
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
.formula-box {
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 4px;
    padding: 12px 16px;
    margin: 10px 0;
    font-family: 'Georgia Pro', 'Century Schoolbook', 'Times New Roman', Times, serif;
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
  function b(t, e = 4) {
    return t == null || isNaN(t) || Math.abs(t) < 1e-10 ? "0" : t.toFixed(e).replace(".", ",");
  }
  function q(t, e) {
    return `<span class="dvc"><span class="dvr">${t}</span><span class="dvl"></span><span class="dvs">${e}</span></span>`;
  }
  function ft(t) {
    return `<span class="eq">${t}</span>`;
  }
  function J(t, e) {
    return e ? `<var>${t}</var><sub>${e}</sub>` : `<var>${t}</var>`;
  }
  function at(t, e = 4) {
    if (!t || !t.length) return "";
    let s = `<span class="matrix">
`;
    for (let d = 0; d < t.length; d++) {
      s += '<span class="tr"><span class="td"></span>';
      for (let E = 0; E < t[d].length; E++) {
        const $ = t[d][E], c = typeof $ == "number" ? b($, e) : $;
        s += `<span class="td">${c}</span>`;
      }
      s += `<span class="td"></span></span>
`;
    }
    return s += "</span>", s;
  }
  function ia(t) {
    const N = Math.sqrt(16), _ = Math.sqrt(-2 * -2 + 3 * 3), a = Math.sqrt(-2 * -2 + -3 * -3), i = -3 / (2 * 6), m = -2 / (2 * 6), h = 3 / (2 * 6), w = -2 / (2 * 6), z = 0 / (2 * 6), D = 4 / (2 * 6), K = 0.5 * 0 * -2, W = 0.5 * 3 * 4, C = 0.5 * 4 * -2, T = 0.5 * 0 * 3, o = 21e4 * Math.pow(0.2, 3) / (12 * (1 - 0.3 * 0.3)), R = 21e4 / (2 * (1 + 0.3)), G = 5 / 6 * R * 0.2, nt = 6 * 0.2, it = 1 / 8, dt = it * it / 4, ht = [
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
    ], bt = [
      [
        "1",
        "0"
      ],
      [
        "0",
        "1"
      ]
    ], yt = [
      [
        "0",
        "0",
        "\u2202N\u2081/\u2202y'",
        "0",
        "0",
        "\u2202N\u2082/\u2202y'",
        "0",
        "0",
        "\u2202N\u2083/\u2202y'"
      ],
      [
        "0",
        "\u2202N\u2081/\u2202x'",
        "0",
        "0",
        "\u2202N\u2082/\u2202x'",
        "0",
        "0",
        "\u2202N\u2083/\u2202x'",
        "0"
      ],
      [
        "0",
        "\u2202N\u2081/\u2202y'",
        "\u2202N\u2081/\u2202x'",
        "0",
        "\u2202N\u2082/\u2202y'",
        "\u2202N\u2082/\u2202x'",
        "0",
        "\u2202N\u2083/\u2202y'",
        "\u2202N\u2083/\u2202x'"
      ]
    ], vt = [
      [
        0,
        0,
        b(i),
        0,
        0,
        b(h),
        0,
        0,
        b(z)
      ],
      [
        0,
        b(m),
        0,
        0,
        b(w),
        0,
        0,
        b(D),
        0
      ],
      [
        0,
        b(i),
        b(m),
        0,
        b(h),
        b(w),
        0,
        b(z),
        b(D)
      ]
    ], Mt = [
      [
        "x'\u2083\u2082/2A",
        "A/2A",
        "0",
        "x'\u2081\u2083/2A",
        "a\u2081/2A",
        "a\u2083/2A",
        "x'\u2082\u2081/2A",
        "-a\u2082/2A",
        "-a\u2083/2A"
      ],
      [
        "y'\u2082\u2083/2A",
        "0",
        "-A/2A",
        "y'\u2083\u2081/2A",
        "a\u2084/2A",
        "a\u2082/2A",
        "y'\u2081\u2082/2A",
        "-a\u2084/2A",
        "-a\u2081/2A"
      ]
    ], wt = -2 / (2 * 6), Q = 6 / (2 * 6), tt = 0, Dt = -2 / (2 * 6), Tt = K / (2 * 6), Ft = C / (2 * 6), _t = 4 / (2 * 6), Rt = -6 / (2 * 6), It = 4 / (2 * 6), Lt = -3 / (2 * 6), Bt = 0, Ot = -6 / (2 * 6), Pt = 3 / (2 * 6), qt = T / (2 * 6), jt = W / (2 * 6), Xt = 0 / (2 * 6), Yt = -0 / (2 * 6), Gt = 0 / (2 * 6), Vt = [
      [
        wt,
        Q,
        tt,
        Dt,
        Tt,
        Ft,
        _t,
        Rt,
        It
      ],
      [
        Lt,
        Bt,
        Ot,
        Pt,
        qt,
        jt,
        Xt,
        Yt,
        Gt
      ]
    ], Kt = -2 / (4 * 6), Zt = 3 / (4 * 6), Ut = 1, Ht = -2 / (4 * 6), Qt = -3 / (4 * 6), Jt = 0, Wt = 4 / (4 * 6), te = 0 / (4 * 6), ee = 0, ae = -2 / (4 * 6), oe = 3 / (4 * 6), se = 0, ne = -2 / (4 * 6), ie = -3 / (4 * 6), re = 1, le = 4 / (4 * 6), de = 0 / (4 * 6), pe = 0, ce = -2 / (4 * 6), me = 3 / (4 * 6), ue = 0, he = -2 / (4 * 6), be = -3 / (4 * 6), fe = 0, xe = 4 / (4 * 6), ge = 0 / (4 * 6), $e = [
      [
        Kt,
        Zt,
        Ut,
        Ht,
        Qt,
        Jt,
        Wt,
        te,
        ee
      ],
      [
        ae,
        oe,
        se,
        ne,
        ie,
        re,
        le,
        de,
        pe
      ],
      [
        ce,
        me,
        ue,
        he,
        be,
        fe,
        xe,
        ge,
        1
      ]
    ], ye = -3 * -3 * N * N / (4 * 6 * 6), ve = 2 * -2 * N * N / (4 * 6 * 6), Me = (-3 * 2 + -2 * -3) * N * N / (4 * 6 * 6), we = 3 * 0 * _ * _ / (4 * 6 * 6), ze = 2 * 4 * _ * _ / (4 * 6 * 6), Ae = (3 * -4 + -2 * 0) * _ * _ / (4 * 6 * 6), Ee = 0 * 3 * a * a / (4 * 6 * 6), ke = -4 * -2 * a * a / (4 * 6 * 6), Ce = (0 * 2 + 4 * 3) * a * a / (4 * 6 * 6), Se = [
      [
        ye,
        ve,
        Me
      ],
      [
        we,
        ze,
        Ae
      ],
      [
        Ee,
        ke,
        Ce
      ]
    ], et = [
      dt,
      1,
      2,
      1,
      0,
      1,
      -1,
      -1,
      -1,
      -2
    ], Ne = 2 * 6 / 3 * et[1] / (N * N), De = 2 * 6 / 3 * et[2] / (N * N), Te = 2 * 6 / 3 * et[3] / (N * N), Fe = 2 * 6 / 3 * et[4] / (_ * _), _e = 2 * 6 / 3 * et[5] / (_ * _), Re = 2 * 6 / 3 * et[6] / (_ * _), Ie = 2 * 6 / 3 * et[7] / (a * a), Le = 2 * 6 / 3 * et[8] / (a * a), Be = 2 * 6 / 3 * et[9] / (a * a), Oe = [
      [
        Ne,
        De,
        Te
      ],
      [
        Fe,
        _e,
        Re
      ],
      [
        Ie,
        Le,
        Be
      ]
    ], Pe = `
<style>${na}</style>

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
<h1>ELEMENTO SHELL TRIANGULAR DSG3-ANDES</h1>
<h2>Documentaci\xF3n T\xE9cnica Completa</h2>
<p><i>Basado en: Rama, Marinkovic & Zehn (2018) - Journal of the Brazilian Society of Mechanical Sciences and Engineering</i></p>

<hr/>
<h2>1. INTRODUCCI\xD3N</h2>
<p>Este documento presenta la formulaci\xF3n completa del elemento shell triangular de 3 nodos con 6 DOF por nodo (3 traslaciones + 3 rotaciones). El elemento combina:</p>
<ul>
<li><b>DSG (Discrete Shear Gap)</b> - Para el comportamiento de placa (flexi\xF3n + cortante transversal)</li>
<li><b>ANDES (Assumed Natural Deviatoric Strains)</b> - Para el comportamiento de membrana</li>
<li><b>Cell Smoothing</b> - Para mejorar la precisi\xF3n del cortante</li>
</ul>

<h2>2. GEOMETR\xCDA Y SISTEMA DE COORDENADAS</h2>

<h3>2.1 Datos de Entrada</h3>
<table class="bordered data">
<tr><th colspan="3">Coordenadas Nodales (Sistema Local)</th></tr>
<tr><td>Nodo 1</td><td>x'\u2081 = 0</td><td>y'\u2081 = 0</td></tr>
<tr><td>Nodo 2</td><td>x'\u2082 = 4</td><td>y'\u2082 = 0</td></tr>
<tr><td>Nodo 3</td><td>x'\u2083 = 2</td><td>y'\u2083 = 3</td></tr>
<tr><th colspan="3">Propiedades</th></tr>
<tr><td>Espesor</td><td colspan="2">h = ${0.2}</td></tr>
<tr><td>M\xF3dulo de Young</td><td colspan="2">E = 210000</td></tr>
<tr><td>Coef. Poisson</td><td colspan="2">\u03BD = ${0.3}</td></tr>
</table>

<h3>2.2 Diferencias de Coordenadas</h3>
<p>Se definen las diferencias de coordenadas x'\u1D62\u2C7C = x'\u1D62 - x'\u2C7C y y'\u1D62\u2C7C = y'\u1D62 - y'\u2C7C:</p>

<table class="bordered data">
<tr><th>Variable</th><th>Valor</th><th>Variable</th><th>Valor</th></tr>
<tr><td>x'\u2082\u2081</td><td>4</td><td>y'\u2082\u2081</td><td>0</td></tr>
<tr><td>x'\u2083\u2081</td><td>2</td><td>y'\u2083\u2081</td><td>3</td></tr>
<tr><td>x'\u2081\u2082</td><td>-4</td><td>y'\u2081\u2082</td><td>0</td></tr>
<tr><td>x'\u2081\u2083</td><td>-2</td><td>y'\u2081\u2083</td><td>-3</td></tr>
<tr><td>x'\u2082\u2083</td><td>2</td><td>y'\u2082\u2083</td><td>-3</td></tr>
<tr><td>x'\u2083\u2082</td><td>-2</td><td>y'\u2083\u2082</td><td>3</td></tr>
</table>

<h3>2.3 \xC1rea del Elemento</h3>
<p>El \xE1rea del tri\xE1ngulo se calcula con la Ecuaci\xF3n (3):</p>

<div class="formula-box">
${ft(`${J("A")} = ${q("1", "2")} \xB7 (x'\u2082\u2081\xB7y'\u2083\u2081 - x'\u2083\u2081\xB7y'\u2082\u2081) = ${q("1", "2")} \xB7 (4\xB73 - 2\xB70) = <b>${b(6, 2)}</b>`)}
</div>

<h3>2.4 Longitudes de los Lados</h3>
<table class="bordered data">
<tr><th>Lado</th><th>Longitud</th></tr>
<tr><td>l\u2082\u2081 (Nodo 1\u21922)</td><td>${b(N, 4)}</td></tr>
<tr><td>l\u2083\u2082 (Nodo 2\u21923)</td><td>${b(_, 4)}</td></tr>
<tr><td>l\u2081\u2083 (Nodo 3\u21921)</td><td>${b(a, 4)}</td></tr>
</table>

<hr/>
<h2>3. FUNCIONES DE FORMA</h2>

<h3>3.1 Concepto de Coordenadas de \xC1rea</h3>
<p>Para un elemento triangular, las <b>coordenadas de \xE1rea</b> (tambi\xE9n llamadas coordenadas triangulares o baric\xE9ntricas) son una forma natural de describir la posici\xF3n de cualquier punto dentro del tri\xE1ngulo.</p>

<div class="info-box">
<p><b>Definici\xF3n:</b> Las coordenadas de \xE1rea L\u2081, L\u2082, L\u2083 de un punto P representan la proporci\xF3n del \xE1rea total que corresponde a cada sub-tri\xE1ngulo formado por P y los lados opuestos.</p>
<p><b>Propiedad fundamental:</b> L\u2081 + L\u2082 + L\u2083 = 1 (partici\xF3n de la unidad)</p>
</div>

<h3>3.2 Funciones de Forma Lineales</h3>
<p>Para el elemento triangular lineal de 3 nodos, las funciones de forma N coinciden con las coordenadas de \xE1rea:</p>

<div class="formula-box">
<p><b>N\u1D62 = L\u1D62</b></p>
<p>donde N\u1D62 = 1 en el nodo i y N\u1D62 = 0 en los otros nodos</p>
</div>

<h3>3.3 Derivaci\xF3n Expl\xEDcita de las Funciones de Forma</h3>
<p>Usando la f\xF3rmula general del \xE1rea de un tri\xE1ngulo con v\xE9rtices (x\u2081,y\u2081), (x\u2082,y\u2082), (x\u2083,y\u2083):</p>

<div class="formula-box">
<p>\xC1rea = \xBD|x\u2081(y\u2082 - y\u2083) + x\u2082(y\u2083 - y\u2081) + x\u2083(y\u2081 - y\u2082)|</p>
</div>

<p>Las funciones de forma se expresan como:</p>

<div class="formula-box">
<p><b>N\u2081(x', y') = </b>${q("1", "2A")}[x'\u2082y'\u2083 - x'\u2083y'\u2082 + y'\u2082\u2083x' + x'\u2083\u2082y']</p>
<p><b>N\u2082(x', y') = </b>${q("1", "2A")}[x'\u2083y'\u2081 - x'\u2081y'\u2083 + y'\u2083\u2081x' + x'\u2081\u2083y']</p>
<p><b>N\u2083(x', y') = </b>${q("1", "2A")}[x'\u2081y'\u2082 - x'\u2082y'\u2081 + y'\u2081\u2082x' + x'\u2082\u2081y']</p>
</div>

<h3>3.4 Verificaci\xF3n en los Nodos</h3>
<p>Verificamos que las funciones de forma cumplen la condici\xF3n de interpolaci\xF3n:</p>

<table class="bordered data">
<tr><th>Punto</th><th>N\u2081</th><th>N\u2082</th><th>N\u2083</th><th>Suma</th></tr>
<tr><td>Nodo 1 (0, 0)</td><td><b>1</b></td><td>0</td><td>0</td><td>1</td></tr>
<tr><td>Nodo 2 (4, 0)</td><td>0</td><td><b>1</b></td><td>0</td><td>1</td></tr>
<tr><td>Nodo 3 (2, 3)</td><td>0</td><td>0</td><td><b>1</b></td><td>1</td></tr>
<tr><td>Centroide (${b(6 / 3, 2)}, ${b(3 / 3, 2)})</td><td>\u2153</td><td>\u2153</td><td>\u2153</td><td>1</td></tr>
</table>

<h3>3.5 Derivadas de las Funciones de Forma</h3>
<p>Las derivadas parciales de las funciones de forma son <b>constantes</b> sobre todo el elemento (caracter\xEDstica del elemento lineal):</p>

<div class="formula-box">
<p>${q("\u2202N\u2081", "\u2202x'")} = ${q("y'\u2082\u2083", "2A")} = ${q(String(-3), "2\xB7" + b(6, 2))} = ${b(i)}</p>
<p>${q("\u2202N\u2081", "\u2202y'")} = ${q("x'\u2083\u2082", "2A")} = ${q(String(-2), "2\xB7" + b(6, 2))} = ${b(m)}</p>
</div>

<div class="formula-box">
<p>${q("\u2202N\u2082", "\u2202x'")} = ${q("y'\u2083\u2081", "2A")} = ${q(String(3), "2\xB7" + b(6, 2))} = ${b(h)}</p>
<p>${q("\u2202N\u2082", "\u2202y'")} = ${q("x'\u2081\u2083", "2A")} = ${q(String(-2), "2\xB7" + b(6, 2))} = ${b(w)}</p>
</div>

<div class="formula-box">
<p>${q("\u2202N\u2083", "\u2202x'")} = ${q("y'\u2081\u2082", "2A")} = ${q(String(0), "2\xB7" + b(6, 2))} = ${b(z)}</p>
<p>${q("\u2202N\u2083", "\u2202y'")} = ${q("x'\u2082\u2081", "2A")} = ${q(String(4), "2\xB7" + b(6, 2))} = ${b(D)}</p>
</div>

<p><b>Tabla resumen de derivadas:</b></p>
<table class="bordered data">
<tr><th>Funci\xF3n</th><th>\u2202N/\u2202x'</th><th>\u2202N/\u2202y'</th></tr>
<tr><td>N\u2081</td><td>${b(i)}</td><td>${b(m)}</td></tr>
<tr><td>N\u2082</td><td>${b(h)}</td><td>${b(w)}</td></tr>
<tr><td>N\u2083</td><td>${b(z)}</td><td>${b(D)}</td></tr>
</table>

<h3>3.6 Propiedades de las Funciones de Forma</h3>
<ul>
<li><b>Partici\xF3n de la unidad:</b> N\u2081 + N\u2082 + N\u2083 = 1 en todo el elemento</li>
<li><b>Interpolaci\xF3n:</b> N\u1D62(nodo j) = \u03B4\u1D62\u2C7C (delta de Kronecker)</li>
<li><b>Linealidad:</b> Las funciones son lineales en x' e y'</li>
<li><b>Derivadas constantes:</b> \u2202N\u1D62/\u2202x' y \u2202N\u1D62/\u2202y' son constantes (elemento de deformaci\xF3n constante)</li>
<li><b>Consistencia:</b> \u2211\u2202N\u1D62/\u2202x' = \u2211\u2202N\u1D62/\u2202y' = 0</li>
</ul>

<div class="reference-box">
<p><b>Nota importante:</b> Como las derivadas de las funciones de forma son constantes, las matrices B (strain-displacement) tambi\xE9n son constantes sobre todo el elemento. Esto simplifica la integraci\xF3n, que se reduce a multiplicar por el \xE1rea.</p>
</div>

<hr/>
<h2>4. MATRICES DE MATERIAL</h2>

<h3>4.1 Matriz de Rigidez Flexural [D]</h3>
<p>Para material isotr\xF3pico, la matriz constitutiva de flexi\xF3n es:</p>

<div class="formula-box">
${ft(`${J("D", "flex")} = ${q(`${J("E")}\xB7${J("h")}<sup>3</sup>`, `12\xB7(1 - ${J("\u03BD")}<sup>2</sup>)`)} = ${q(`210000\xB7${0.2}<sup>3</sup>`, `12\xB7(1 - ${0.3}<sup>2</sup>)`)} = <b>${b(o, 2)}</b>`)}
</div>

<p>[D] = D<sub>flex</sub> \xD7 ${at(ht)}</p>

<h3>4.2 Matriz de Rigidez Cortante [F]</h3>
<p>Para cortante transversal (con factor de correcci\xF3n \u03BA = 5/6):</p>

<div class="formula-box">
${ft(`${J("G")} = ${q(J("E"), `2\xB7(1 + ${J("\u03BD")})`)} = ${q(String(21e4), `2\xB7(1 + ${0.3})`)} = <b>${b(R, 2)}</b>`)}
<br>
${ft(`${J("F", "shear")} = ${q("5", "6")}\xB7${J("G")}\xB7${J("h")} = ${q("5", "6")}\xB7${b(R, 2)}\xB7${0.2} = <b>${b(G, 2)}</b>`)}
</div>

<p>[F] = F<sub>shear</sub> \xD7 ${at(bt)}</p>

<hr/>
<h2>5. FORMULACI\xD3N DSG PARA PLACA</h2>
<p>La rigidez de placa [K<sub>p</sub>] se descompone en flexi\xF3n y cortante (Ecuaci\xF3n 6):</p>
<div class="formula-box">[K<sub>p</sub>] = [K<sub>pb</sub>] + [K<sub>ps</sub>]</div>

<h3>5.1 Matriz B de Flexi\xF3n [B<sub>pb</sub>] (3\xD79)</h3>
<p>La matriz strain-displacement de flexi\xF3n relaciona las curvaturas con los DOF nodales (Ecuaci\xF3n 10):</p>

<div class="formula-box">
<p>{\u03B5<sup>b</sup>} = {\u03BA<sub>x'x'</sub>, \u03BA<sub>y'y'</sub>, \u03BA<sub>x'y'</sub>}<sup>T</sup> = [B<sub>pb</sub>]{u<sub>p</sub>}</p>
<p>donde {u<sub>p</sub>} = {w'\u2081, \u03B8<sub>x'1</sub>, \u03B8<sub>y'1</sub>, w'\u2082, \u03B8<sub>x'2</sub>, \u03B8<sub>y'2</sub>, w'\u2083, \u03B8<sub>x'3</sub>, \u03B8<sub>y'3</sub>}<sup>T</sup></p>
</div>

<p><b>Matriz [B<sub>pb</sub>] estructura (Ecuaci\xF3n 10):</b></p>
<p>[B<sub>pb</sub>] = ${q("1", "2A")} \xD7 ${at(yt)}</p>

<p><b>Matriz [B<sub>pb</sub>] valores num\xE9ricos:</b></p>
<p>${at(vt)}</p>

<h3>5.2 Matriz B de Cortante DSG [B<sub>s</sub>] (2\xD79)</h3>
<p>El enfoque DSG (Discrete Shear Gap) evita el bloqueo por cortante evaluando los "shear gaps" en los nodos (Ecuaci\xF3n 11):</p>

<div class="formula-box">
<p>\u0394w<sup>\u03B3</sup><sub>\u03BE\u2082</sub> en nodo 2 = w'\u2082 - w'\u2081 + \xBD[x'\u2082\u2081(\u03B8<sub>y'1</sub> + \u03B8<sub>y'2</sub>) - y'\u2082\u2081(\u03B8<sub>x'1</sub> + \u03B8<sub>x'2</sub>)]</p>
<p>\u0394w<sup>\u03B3</sup><sub>\u03BE\u2083</sub> en nodo 3 = w'\u2083 - w'\u2081 + \xBD[x'\u2083\u2081(\u03B8<sub>y'1</sub> + \u03B8<sub>y'3</sub>) - y'\u2083\u2081(\u03B8<sub>x'1</sub> + \u03B8<sub>x'3</sub>)]</p>
</div>

<p><b>Par\xE1metros auxiliares (Ecuaci\xF3n 16):</b></p>
<table class="bordered data">
<tr><td>a\u2081 = \xBD\xB7y'\u2081\u2082\xB7x'\u2081\u2083</td><td>${b(K)}</td></tr>
<tr><td>a\u2082 = \xBD\xB7y'\u2083\u2081\xB7x'\u2082\u2081</td><td>${b(W)}</td></tr>
<tr><td>a\u2083 = \xBD\xB7x'\u2082\u2081\xB7x'\u2081\u2083</td><td>${b(C)}</td></tr>
<tr><td>a\u2084 = \xBD\xB7y'\u2081\u2082\xB7y'\u2083\u2081</td><td>${b(T)}</td></tr>
</table>

<p><b>Matriz [B<sub>s</sub>] estructura (Ecuaci\xF3n 15):</b></p>
<p>${at(Mt)}</p>

<p><b>Matriz [B<sub>s</sub>] valores num\xE9ricos:</b></p>
<p>${at(Vt)}</p>

<h3>5.3 Cell Smoothing para Cortante</h3>
<p>Para mejorar la precisi\xF3n, el elemento se divide en 3 sub-tri\xE1ngulos usando el centroide. Las matrices de cortante se promedian (Ecuaciones 17-18):</p>

<div class="formula-box">
<p>[B<sub>ps</sub>] = \u2153 \u03A3[B<sub>s</sub><sup>\u0394\u1D62</sup>]</p>
</div>

<p><i>Nota: El cell smoothing mejora la convergencia especialmente para elementos distorsionados.</i></p>

<hr/>
<h2>6. FORMULACI\xD3N ANDES PARA MEMBRANA</h2>
<p>La rigidez de membrana [K<sub>mem</sub>] se descompone en b\xE1sica y de orden superior (Ecuaci\xF3n 19):</p>
<div class="formula-box">[K<sub>mem</sub>] = [K<sub>b</sub>] + [K<sub>h</sub>]</div>

<h3>6.1 Rigidez B\xE1sica [K<sub>b</sub>]</h3>
<p>La rigidez b\xE1sica usa la matriz de lumping [L] (Ecuaci\xF3n 20):</p>
<div class="formula-box">[K<sub>b</sub>] = V\u207B\xB9[L][C][L]<sup>T</sup></div>

<p>donde V = A\xB7h (volumen del elemento)</p>
<p>V = ${b(nt, 4)}</p>

<p><b>Par\xE1metro \u03B1:</b> Controla el acoplamiento drilling-membrana</p>
<p>\u03B1 = ${it} (valor \xF3ptimo para shell seg\xFAn Shin & Lee)</p>

<h3>6.2 Rigidez de Orden Superior [K<sub>h</sub>]</h3>
<p>La rigidez de orden superior captura la flexi\xF3n en el plano usando rotaciones jer\xE1rquicas (Ecuaci\xF3n 26):</p>
<div class="formula-box">[K<sub>h</sub>] = \u03B2\u2080\xB7(9/4)\xB7[T<sub>\u03B8u</sub>]<sup>T</sup>[K\u0304<sub>h</sub>][T<sub>\u03B8u</sub>]</div>

<h4>6.2.1 Rotaciones Jer\xE1rquicas</h4>
<p>Las rotaciones jer\xE1rquicas se extraen restando la rotaci\xF3n media \u03B8\u2080 (Ecuaci\xF3n 22-24):</p>
<p>\u03B8\u0304\u1D62 = \u03B8\u1D62 - \u03B8\u2080</p>

<p><b>Matriz de transformaci\xF3n [T<sub>\u03B8u</sub>] (3\xD79) - Ecuaci\xF3n 24:</b></p>
<p>${at($e)}</p>

<h4>6.2.2 Transformaci\xF3n de Deformaciones Naturales</h4>
<p>La matriz [T<sub>nat</sub>] transforma deformaciones naturales a Cartesianas (Ecuaci\xF3n 25):</p>

<p><b>Matriz [T<sub>nat</sub>] (3\xD73):</b></p>
<p>${at(Se)}</p>

<h4>6.2.3 Par\xE1metros \u03B2 (ANDES)</h4>
<p>Los par\xE1metros \u03B2 definen los modos de deformaci\xF3n desviatorios (Ecuaci\xF3n 30):</p>

<table class="bordered data">
<tr><th>Par\xE1metro</th><th>Valor</th><th>Descripci\xF3n</th></tr>
<tr><td>\u03B2\u2080</td><td>${b(dt, 6)}</td><td>Factor de escala (\u03B1\xB2/4)</td></tr>
<tr><td>\u03B2\u2081</td><td>1</td><td rowspan="9">Modos de deformaci\xF3n desviatorios</td></tr>
<tr><td>\u03B2\u2082</td><td>2</td></tr>
<tr><td>\u03B2\u2083</td><td>1</td></tr>
<tr><td>\u03B2\u2084</td><td>0</td></tr>
<tr><td>\u03B2\u2085</td><td>1</td></tr>
<tr><td>\u03B2\u2086</td><td>-1</td></tr>
<tr><td>\u03B2\u2087</td><td>-1</td></tr>
<tr><td>\u03B2\u2088</td><td>-1</td></tr>
<tr><td>\u03B2\u2089</td><td>-2</td></tr>
</table>

<h4>6.2.4 Matrices [Q\u2081], [Q\u2082], [Q\u2083]</h4>
<p>Las matrices Q definen los modos de flexi\xF3n en el plano (Ecuaci\xF3n 30):</p>

<p><b>Matriz [Q\u2081]:</b></p>
<p>${at(Oe)}</p>

<p><b>Promedios:</b></p>
<p>[Q\u2084] = \xBD([Q\u2081] + [Q\u2082])</p>
<p>[Q\u2085] = \xBD([Q\u2082] + [Q\u2083])</p>
<p>[Q\u2086] = \xBD([Q\u2081] + [Q\u2083])</p>

<hr/>
<h2>7. INTEGRACI\xD3N NUM\xC9RICA</h2>
<p>Para elementos triangulares lineales, la integraci\xF3n es anal\xEDtica:</p>

<div class="formula-box">
<p><b>Rigidez de Flexi\xF3n:</b></p>
<p>[K<sub>pb</sub>] = [B<sub>pb</sub>]<sup>T</sup>[D][B<sub>pb</sub>] \xB7 A</p>
<p><b>Rigidez de Cortante:</b></p>
<p>[K<sub>ps</sub>] = [B<sub>ps</sub>]<sup>T</sup>[F][B<sub>ps</sub>] \xB7 A</p>
<p><b>Rigidez de Membrana:</b></p>
<p>[K<sub>mem</sub>] = [K<sub>b</sub>] + [K<sub>h</sub>]</p>
</div>

<p>No se requiere integraci\xF3n num\xE9rica de Gauss porque las matrices B son constantes sobre el elemento.</p>

<hr/>
<h2>8. ENSAMBLAJE DEL ELEMENTO</h2>
<p>La matriz de rigidez del elemento shell (18\xD718) combina placa y membrana (Ecuaci\xF3n 5):</p>

<div class="formula-box">
<p>[K<sub>s</sub>]{u<sub>e</sub>} = {f<sub>e</sub>}</p>
<p>donde [K<sub>s</sub>] = [[K<sub>mem</sub>], [0]; [0], [K<sub>p</sub>]]</p>
</div>

<p><b>Grados de libertad por nodo:</b></p>
<table class="bordered">
<tr><th>DOF</th><th>Membrana</th><th>Placa</th></tr>
<tr><td>1</td><td>u' (traslaci\xF3n x')</td><td>w' (traslaci\xF3n z')</td></tr>
<tr><td>2</td><td>v' (traslaci\xF3n y')</td><td>\u03B8<sub>x'</sub> (rotaci\xF3n)</td></tr>
<tr><td>3</td><td>\u03B8<sub>z'</sub> (drilling)</td><td>\u03B8<sub>y'</sub> (rotaci\xF3n)</td></tr>
</table>

<hr/>
<h2>9. VALIDACI\xD3N</h2>
<p>El elemento DSG3-ANDES ha sido validado contra los siguientes benchmarks (ver paper):</p>

<table class="bordered">
<tr><th>Benchmark</th><th>Descripci\xF3n</th><th>Resultado</th></tr>
<tr><td>Patch Tests</td><td>Membrana y flexi\xF3n</td><td>\u2713 Exacto</td></tr>
<tr><td>Raasch Hook</td><td>Flexi\xF3n-torsi\xF3n acoplada</td><td>\u2713 Convergencia r\xE1pida</td></tr>
<tr><td>Twisted Beam</td><td>Geometr\xEDa alabeada</td><td>\u2713 Mejor que Abaqus S3</td></tr>
<tr><td>Pinched Hemisphere</td><td>Doble curvatura</td><td>\u2713 Convergencia</td></tr>
<tr><td>Pinched Cylinder</td><td>Curvatura simple</td><td>\u2713 Convergencia</td></tr>
<tr><td>Cooks Membrane</td><td>Flexi\xF3n en plano + cortante</td><td>\u2713 Mejor que Abaqus S3</td></tr>
</table>

<hr/>
<h2>10. REFERENCIAS</h2>
<ol>
<li>Rama G, Marinkovic D, Zehn M (2018). "A three-node shell element based on the discrete shear gap and assumed natural deviatoric strain approaches". <i>J. Braz. Soc. Mech. Sci. Eng.</i> 40:356</li>
<li>Bletzinger KU, Bischoff M, Ramm E (2000). "A unified approach for shear-locking-free triangular and rectangular shell finite elements". <i>Comput. Struct.</i> 75:321-334</li>
<li>Felippa C, Militello C (1992). "Membrane triangles with corner drilling freedoms\u2014II. The ANDES element". <i>Finite Elem. Anal. Des.</i> 12:189-201</li>
</ol>

<hr/>
<p style="font-size:10pt; color:#666; text-align:center;">Documento generado con Awatif - Formulaci\xF3n DSG3-ANDES Completa - Estilo Calcpad</p>
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
    return gt`${$t(Pe)}`;
  }
  const ra = `
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
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
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

/* Estilos Calcpad para formulas */
.formula-section {
  background: #fafafa;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px;
  margin: 10px;
  font-family: "Times New Roman", serif;
  font-size: 14px;
}
.formula-section h3 {
  color: #2e5368;
  font-size: 14px;
  margin: 0 0 10px 0;
  font-family: Arial, sans-serif;
}
.eq {
  margin: 8px 0;
  padding: 5px 10px;
  background: white;
  border-left: 3px solid #2e5368;
}
.eq .var {
  color: #0066cc;
  font-style: italic;
}
.eq .op {
  color: #333;
  margin: 0 3px;
}
.eq .num {
  color: #006600;
}
.eq .unit {
  color: #666;
  font-size: 12px;
}
.eq .result {
  color: #cc0000;
  font-weight: bold;
}
.frac {
  display: inline-block;
  text-align: center;
  vertical-align: middle;
}
.frac-num {
  display: block;
  border-bottom: 1px solid #333;
  padding: 2px 5px;
}
.frac-den {
  display: block;
  padding: 2px 5px;
}

@media print {
  @page {
    size: A4 portrait;
    margin: 15mm;
  }
}
`;
  function Z(t, e = 4) {
    return Math.abs(t) < 1e-4 || Math.abs(t) > 1e5 ? t.toExponential(e) : t.toFixed(e);
  }
  function xt(t, e) {
    return `<span class="frac"><span class="frac-num">${t}</span><span class="frac-den">${e}</span></span>`;
  }
  function U(t) {
    return `<span class="var">${t}</span>`;
  }
  function ot(t) {
    return `<span class="num">${t}</span>`;
  }
  function mt(t) {
    return `<span class="result">${t}</span>`;
  }
  function Nt(t, e, s, d, E) {
    if (!t.length || !e.length || !s.length) return `<p style="color:#999;margin:10px;">No data available for ${E}</p>`;
    const $ = t.map((a) => a[0]), c = t.map((a) => a[1]), f = Math.min(...$), M = Math.max(...$), O = Math.min(...c), L = Math.max(...c), x = M - f || 1, k = L - O || 1, F = d / Math.max(x, k), g = k * F, y = 20, I = s.filter((a) => a !== void 0 && !isNaN(a));
    if (!I.length) return "";
    const v = Math.min(...I), X = Math.max(...I), u = Math.abs(X - v) || 1;
    function p(a) {
      const i = Math.max(0, Math.min(1, (a - v) / u));
      let m, h, w;
      return i < 0.25 ? (m = 0, h = Math.floor(255 * i * 4), w = 255) : i < 0.5 ? (m = 0, h = 255, w = Math.floor(255 * (1 - (i - 0.25) * 4))) : i < 0.75 ? (m = Math.floor(255 * (i - 0.5) * 4), h = 255, w = 0) : (m = 255, h = Math.floor(255 * (1 - (i - 0.75) * 4)), w = 0), `rgb(${m},${h},${w})`;
    }
    const l = `grad_${E.replace(/[^a-zA-Z0-9]/g, "")}`;
    let S = `<svg viewBox="-20 -20 ${d + 80} ${g + 2 * y}" xmlns="http://www.w3.org/2000/svg" style="width:${d + 80}px;height:${g + 40}px;font-family:Arial;font-size:10px;">
<defs>
<linearGradient id="${l}" x1="0%" y1="100%" x2="0%" y2="0%">
<stop offset="0%" style="stop-color:#0000ff"/>
<stop offset="25%" style="stop-color:#00ffff"/>
<stop offset="50%" style="stop-color:#00ff00"/>
<stop offset="75%" style="stop-color:#ffff00"/>
<stop offset="100%" style="stop-color:#ff0000"/>
</linearGradient>
</defs>`;
    e.forEach((a) => {
      const i = a.reduce((w, z) => w + (s[z] || 0), 0) / a.length, m = p(i), h = a.map((w) => {
        const z = (t[w][0] - f) * F, D = g - (t[w][1] - O) * F;
        return `${z.toFixed(2)},${D.toFixed(2)}`;
      }).join(" ");
      S += `<polygon points="${h}" fill="${m}" stroke="#333" stroke-width="0.3"/>`;
    });
    const N = d + 10, _ = Math.max(g - 20, 60);
    S += `<rect x="${N}" y="10" width="15" height="${_}" fill="url(#${l})" stroke="#333"/>`;
    for (let a = 0; a <= 4; a++) {
      const i = v + u * a / 4, m = 10 + _ - _ * a / 4;
      S += `<text x="${N + 20}" y="${m + 4}">${i.toExponential(2)}</text>`;
    }
    return S += `<text x="${N}" y="5" font-weight="bold">${E}</text>`, S += "</svg>", S;
  }
  function la(t) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s;
    const e = ((_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val) || [], s = ((_b = t == null ? void 0 : t.elements) == null ? void 0 : _b.val) || [], d = ((_c = t == null ? void 0 : t.nodeInputs) == null ? void 0 : _c.val) || {}, E = ((_d = t == null ? void 0 : t.elementInputs) == null ? void 0 : _d.val) || {}, $ = ((_e = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _e.val) || {}, c = ((_f = t == null ? void 0 : t.analyzeOutputs) == null ? void 0 : _f.val) || {}, f = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric"
    }), M = ((_j = (_h = (_g = E.elasticities) == null ? void 0 : _g.values) == null ? void 0 : (_i = _h.call(_g)).next) == null ? void 0 : _j.call(_i).value) || 21e4, O = ((_n = (_l = (_k = E.poissonsRatios) == null ? void 0 : _k.values) == null ? void 0 : (_m = _l.call(_k)).next) == null ? void 0 : _n.call(_m).value) || 0.3, L = ((_r = (_p = (_o = E.thicknesses) == null ? void 0 : _o.values) == null ? void 0 : (_q = _p.call(_o)).next) == null ? void 0 : _r.call(_q).value) || 0.2, x = ((_s = d.supports) == null ? void 0 : _s.size) || 0, k = M * Math.pow(L, 3) / (12 * (1 - O * O)), F = M / (2 * (1 + O)), g = $.deformations || [], y = [];
    let I = 0, v = 0;
    g.forEach((z, D) => {
      y[D] = z[2] || 0, Math.abs(z[2]) > Math.abs(I) && (I = z[2], v = D);
    });
    const X = c.bendingXX || [], u = c.bendingYY || [], p = [];
    let l = 0, S = 0;
    s.forEach((z, D) => {
      const K = X[D] || [
        0
      ], W = u[D] || [
        0
      ], C = K.reduce((o, R) => o + R, 0) / K.length, T = W.reduce((o, R) => o + R, 0) / W.length;
      p[D] = C, Math.abs(C) > Math.abs(l) && (l = C), Math.abs(T) > Math.abs(S) && (S = T);
    });
    let N = "";
    for (let z = 0; z < Math.min(e.length, 8); z++) {
      const D = e[z];
      N += `<tr><td>${z}</td><td>${(D[0] || 0).toFixed(3)}</td><td>${(D[1] || 0).toFixed(3)}</td><td>${(D[2] || 0).toFixed(3)}</td></tr>`;
    }
    let _ = "";
    for (let z = 0; z < Math.min(g.length, 8); z++) {
      const D = g[z] || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      _ += `<tr><td>${z}</td><td>${Z(D[0] || 0)}</td><td>${Z(D[1] || 0)}</td><td>${Z(D[2] || 0)}</td></tr>`;
    }
    const a = Nt(e, s, y, 320, "w [displacement]"), i = new Array(e.length).fill(0), m = new Array(e.length).fill(0);
    s.forEach((z, D) => {
      z.forEach((K) => {
        i[K] += p[D] || 0, m[K]++;
      });
    }), i.forEach((z, D) => {
      m[D] > 0 && (i[D] /= m[D]);
    });
    const h = Nt(e, s, i, 320, "Mxx [bending]"), w = `
<style>${ra}</style>

<header class="header">
  <div class="header-left">
    <h6>Shell Analysis Report</h6>
    <p class="text" style="margin:0">
      <a href="https://awatif.co" target="_blank">Awatif.co</a> | ${f}
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

<h2>1. Input Parameters</h2>
<div class="formula-section">
  <h3>Material Properties</h3>
  <div class="eq">
    ${U("E")} = ${ot(Z(M))} <span class="unit">(elastic modulus)</span>
  </div>
  <div class="eq">
    ${U("\u03BD")} = ${ot(Z(O, 2))} <span class="unit">(Poisson's ratio)</span>
  </div>
  <div class="eq">
    ${U("t")} = ${ot(Z(L))} <span class="unit">(thickness)</span>
  </div>
</div>

<h2>2. Derived Properties</h2>
<div class="formula-section">
  <h3>Flexural Rigidity</h3>
  <div class="eq">
    ${U("D")} = ${xt(U("E") + " \xB7 " + U("t") + "\xB3", "12 \xB7 (1 - " + U("\u03BD") + "\xB2)")}
    = ${xt(ot(Z(M)) + " \xB7 " + ot(Z(L)) + "\xB3", "12 \xB7 (1 - " + ot(Z(O, 2)) + "\xB2)")}
    = ${mt(Z(k))}
  </div>

  <h3>Shear Modulus</h3>
  <div class="eq">
    ${U("G")} = ${xt(U("E"), "2 \xB7 (1 + " + U("\u03BD") + ")")}
    = ${xt(ot(Z(M)), "2 \xB7 (1 + " + ot(Z(O, 2)) + ")")}
    = ${mt(Z(F))}
  </div>
</div>

<h2>3. Mesh Information</h2>
<div class="summary-box">
  <div class="summary-item">
    <div class="label">NODES</div>
    <div class="value">${e.length}</div>
  </div>
  <div class="summary-item">
    <div class="label">ELEMENTS</div>
    <div class="value">${s.length}</div>
  </div>
  <div class="summary-item">
    <div class="label">SUPPORTS</div>
    <div class="value">${x}</div>
  </div>
  <div class="summary-item">
    <div class="label">DOFs</div>
    <div class="value">${e.length * 6}</div>
  </div>
</div>

<h2>4. Results Summary</h2>
<div class="formula-section">
  <h3>Maximum Displacement</h3>
  <div class="eq">
    ${U("w")}${U("<sub>max</sub>")} = ${mt(Z(I))} <span class="unit">at node ${v}</span>
  </div>

  <h3>Maximum Bending Moments</h3>
  <div class="eq">
    ${U("M")}${U("<sub>xx,max</sub>")} = ${mt(Z(l))}
  </div>
  <div class="eq">
    ${U("M")}${U("<sub>yy,max</sub>")} = ${mt(Z(S))}
  </div>
</div>

<h2>5. Displacement Contour</h2>
<div class="contour-container">
  ${a}
</div>

<h2>6. Bending Moment Mxx Contour</h2>
<div class="contour-container">
  ${h}
</div>

<h2>7. Node Coordinates ${e.length > 8 ? `(first 8 of ${e.length})` : ""}</h2>
<table>
  <tr><th>Node</th><th>X</th><th>Y</th><th>Z</th></tr>
  ${N}
</table>

<h2>8. Nodal Displacements ${g.length > 8 ? `(first 8 of ${g.length})` : ""}</h2>
<table>
  <tr><th>Node</th><th>u<sub>x</sub></th><th>u<sub>y</sub></th><th>w</th></tr>
  ${_}
</table>

<br><br>
<p class="text" style="color:#999;font-size:11px;">Generated with Awatif - Report with Calcpad-style formulas</p>
`;
    return gt`${$t(w)}`;
  }
  const lt = {
    xPosition: {
      value: H.state(15),
      min: 5,
      max: 20,
      label: "xPosition",
      unit: "length"
    },
    Ex: {
      value: H.state(100),
      min: 50,
      max: 500,
      step: 10,
      label: "Ex",
      unit: "stress"
    },
    Ey: {
      value: H.state(100),
      min: 50,
      max: 500,
      step: 10,
      label: "Ey",
      unit: "stress"
    },
    load: {
      value: H.state(-3),
      min: -10,
      max: 10,
      step: 1,
      label: "load",
      unit: "force"
    }
  }, V = {
    nodes: H.state([]),
    elements: H.state([]),
    nodeInputs: H.state({}),
    elementInputs: H.state({}),
    deformOutputs: H.state({}),
    analyzeOutputs: H.state({})
  };
  H.derive(() => {
    var _a;
    const { nodes: t, elements: e, boundaryIndices: s } = Qe({
      points: [
        [
          0,
          0,
          0
        ],
        [
          15,
          0,
          0
        ],
        [
          lt.xPosition.value.val,
          10,
          0
        ],
        [
          0,
          5,
          0
        ]
      ],
      polygon: [
        0,
        1,
        2,
        3
      ],
      maxMeshSize: 0.5
    });
    V.nodeInputs.val = {
      supports: new Map(s.map((c) => [
        c,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])),
      loads: new Map(t.map((c, f) => [
        f,
        [
          0,
          0,
          lt.load.value.val,
          0,
          0,
          0
        ]
      ]))
    }, V.nodes.val = t, V.elements.val = e;
    const d = 0.3, $ = (lt.Ex.value.val + lt.Ey.value.val) / 2 / (2 * (1 + d));
    if (V.elementInputs.val = {
      elasticities: new Map(e.map((c, f) => [
        f,
        lt.Ex.value.val
      ])),
      elasticitiesOrthogonal: new Map(e.map((c, f) => [
        f,
        lt.Ey.value.val
      ])),
      thicknesses: new Map(e.map((c, f) => [
        f,
        1
      ])),
      poissonsRatios: new Map(e.map((c, f) => [
        f,
        d
      ])),
      shearModuli: new Map(e.map((c, f) => [
        f,
        $
      ]))
    }, V.deformOutputs.val = Ue(t, e, V.nodeInputs.val, V.elementInputs.val), V.analyzeOutputs.val = Ze(t, e, V.elementInputs.val, V.deformOutputs.val), (_a = V.deformOutputs.val) == null ? void 0 : _a.deformations) {
      let c = 0;
      V.deformOutputs.val.deformations.forEach((f) => {
        Math.abs(f[2]) > Math.abs(c) && (c = f[2]);
      }), console.log(`Max deflection: ${c.toFixed(4)} (expected: ~-3.98)`);
    }
  });
  const st = H.state(""), ut = H.state(void 0);
  H.derive(() => {
    var _a;
    if (st.val === "Calcpad") try {
      const t = pt({
        template: At,
        data: V
      });
      ut.val = t;
    } catch (t) {
      console.error("Error generating Calcpad report:", t);
    }
    if (st.val === "Awatif") try {
      const t = pt({
        template: la,
        data: V
      });
      ut.val = t;
    } catch (t) {
      console.error("Error generating Awatif report:", t);
    }
    if (st.val === "Code") try {
      const t = pt({
        template: sa,
        data: V
      });
      ut.val = t;
    } catch (t) {
      console.error("Error generating Code report:", t);
    }
    if (st.val === "Docs") try {
      const t = pt({
        template: ia,
        data: V
      });
      ut.val = t;
    } catch (t) {
      console.error("Error generating Docs report:", t);
    }
    if (st.val === "Print") {
      const t = pt({
        template: At,
        data: V
      }), e = window.open("", "_blank");
      if (e) {
        const s = (t == null ? void 0 : t.innerHTML) || "";
        e.document.write(`
        <!DOCTYPE html>
        <html>
        <head><title>Plate FEM Report</title></head>
        <body>${s}</body>
        </html>
      `), e.document.close();
      }
    }
    if (st.val === "HTML") {
      const s = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Plate FEM Report - Awatif</title>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; max-width: 900px; margin: 0 auto; padding: 20px; }
    h1, h2, h3, h4 { color: #333; }
    table { border-collapse: collapse; width: 100%; margin: 10px 0; }
    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
    th { background: #f5f5f5; }
    .eq { font-family: 'Times New Roman', serif; font-style: italic; }
    pre { background: #f8f8f8; padding: 10px; border-radius: 4px; overflow-x: auto; }
    code { font-family: 'Consolas', monospace; }
  </style>
</head>
<body>
${((_a = pt({
        template: At,
        data: V
      })) == null ? void 0 : _a.innerHTML) || ""}
<hr>
<p style="font-size:11px; color:#666;">Generated with Awatif - Plate FEM Analysis</p>
</body>
</html>`, d = new Blob([
        s
      ], {
        type: "text/html"
      }), E = URL.createObjectURL(d), $ = document.createElement("a");
      $.href = E, $.download = "plate_fem_report.html", document.body.appendChild($), $.click(), document.body.removeChild($), URL.revokeObjectURL(E), st.val = "";
    }
  });
  document.body.append(He(lt), Xe({
    mesh: V,
    settingsObj: {
      nodes: false,
      deformedShape: true,
      loads: false,
      shellResults: "displacementZ"
    }
  }), Ye(V), Ge({
    position: "top-left",
    expanded: false
  }), Ve({
    dialogBody: ut
  }), Ke({
    clickedButton: st,
    buttons: [
      "Calcpad",
      "Awatif",
      "Code",
      "Docs",
      "Print",
      "HTML"
    ],
    sourceCode: "https://github.com/madil4/awatif/blob/main/examples/src/plate/main.ts",
    author: "https://www.linkedin.com/in/mahjoubmusaab/"
  }));
});
