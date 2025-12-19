import { x as ct, c as U, a as W, v as C, L as et, F as ot, g as pt, e as dt, b as mt, d as ht } from "./styles-9FDjb-ad.js";
import { a as ft } from "./analyze-CmnHHflB.js";
import { d as xt, __tla as __tla_0 } from "./deformCpp-CS-wCYO-.js";
import { r as $t, g as ut } from "./getParameters-agyy6sUI.js";
import { g as gt } from "./getDialog-BiqeruR6.js";
import { g as nt } from "./getReport-CYLnG9Sc.js";
import { g as bt, __tla as __tla_1 } from "./getMesh-DmUdekin.js";
import { o as yt } from "./unsafe-html-Dv3uUXY0.js";
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
  const vt = `
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
  function M(t, e = 4) {
    return t == null || isNaN(t) || Math.abs(t) < 1e-10 ? "0" : t.toFixed(e).replace(".", ",");
  }
  function y(t, e = 4) {
    return t == null || isNaN(t) || Math.abs(t) < 1e-10 ? "0" : t.toFixed(e);
  }
  function Z(t, e) {
    return `<span class="dvc">${t}<span class="dvl"></span>${e}</span>`;
  }
  function F(t) {
    return `<span class="eq">${t}</span>`;
  }
  function o(t, e) {
    return e ? `<var>${t}</var><sub>${e}</sub>` : `<var>${t}</var>`;
  }
  function wt(t, e = 4) {
    if (!t || !t.length) return "";
    let n = `<span class="matrix">
`;
    for (let m = 0; m < t.length; m++) {
      n += '<span class="tr"><span class="td"></span>';
      for (let X = 0; X < t[m].length; X++) n += `<span class="td">${M(t[m][X], e)}</span>`;
      n += `<span class="td"></span></span>
`;
    }
    return n += "</span>", n;
  }
  function Mt(t, e, n, m) {
    const P = 110 / Math.max(t, 1), $ = (120 - 2 * 25) / Math.max(e, 1), A = Math.min(P, $), E = t * A, c = e * A, h = 25, v = 25;
    let f = '<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" style="width:160pt; height:120pt; font-family:Arial; font-size:9px;">';
    f += `<defs>
    <marker id="arrowStart" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
      <path d="M6,0 L0,3 L6,6" fill="none" stroke="#333" stroke-width="1"/>
    </marker>
    <marker id="arrowEnd" markerWidth="6" markerHeight="6" refX="0" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6" fill="none" stroke="#333" stroke-width="1"/>
    </marker>
  </defs>`, f += `<rect x="${h}" y="${v}" width="${E}" height="${c}" fill="#e8e8e8" stroke="#333" stroke-width="1.5"/>`;
    const l = 4, S = 5;
    for (let r = 0; r <= S; r++) {
      const a = h + E * r / S;
      f += `<polygon points="${a},${v + c} ${a - l},${v + c + l} ${a + l},${v + c + l}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let r = 0; r <= S; r++) {
      const a = v + c * r / S;
      f += `<polygon points="${h},${a} ${h - l},${a - l} ${h - l},${a + l}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let r = 0; r <= S; r++) {
      const a = v + c * r / S;
      f += `<polygon points="${h + E},${a} ${h + E + l},${a - l} ${h + E + l},${a + l}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let r = 0; r <= S; r++) {
      const a = h + E * r / S;
      f += `<polygon points="${a},${v} ${a - l},${v - l} ${a + l},${v - l}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    const u = 3;
    for (let r = 1; r <= u; r++) for (let a = 1; a <= u; a++) {
      const p = h + E * r / (u + 1), _ = v + c * a / (u + 1);
      f += `<line x1="${p}" y1="${_ - 8}" x2="${p}" y2="${_ + 5}" stroke="#0066cc" stroke-width="1.2" marker-end="url(#arrowEnd)"/>`;
    }
    f += `<text x="${h + E / 2}" y="${v + c / 2 - 12}" text-anchor="middle" fill="#0066cc" font-style="italic">q</text>`;
    const N = v + c + 18;
    f += `<line x1="${h}" y1="${N}" x2="${h + E}" y2="${N}" stroke="#333" stroke-width="0.8" marker-start="url(#arrowStart)" marker-end="url(#arrowEnd)"/>`, f += `<text x="${h + E / 2}" y="${N + 10}" text-anchor="middle" font-style="italic">a</text>`;
    const i = h + E + 18;
    return f += `<line x1="${i}" y1="${v}" x2="${i}" y2="${v + c}" stroke="#333" stroke-width="0.8" marker-start="url(#arrowStart)" marker-end="url(#arrowEnd)"/>`, f += `<text x="${i + 8}" y="${v + c / 2 + 3}" font-style="italic">b</text>`, f += "</svg>", f;
  }
  function kt(t, e, n = 400) {
    if (!t.length || !e.length) return "<p>No mesh data</p>";
    const m = t.map((i) => i[0]), X = t.map((i) => i[1]), w = Math.min(...m), k = Math.max(...m), P = Math.min(...X), $ = Math.max(...X), A = k - w || 1, E = $ - P || 1, c = n / Math.max(A, E), h = E * c, v = 20, f = 2.666667, l = 0.01, S = /* @__PURE__ */ new Set();
    t.forEach((i, r) => {
      (Math.abs(i[0] - w) < l || Math.abs(i[0] - k) < l || Math.abs(i[1] - P) < l || Math.abs(i[1] - $) < l) && S.add(r);
    });
    let u = `<svg viewbox="-20 -20 ${y(n + 2 * v, 0)} ${y(h + 2 * v, 6)}" xmlns="http://www.w3.org/2000/svg" version="1.1" style=" font-family: Segoe UI; font-size:10px; width:${n}pt; height:${y(h, 6)}pt">`;
    u += "<style>.joint{fill:orangeRed;} .support{stroke:red; stroke-width:1; fill:lightpink;} .element{stroke:seaGreen; stroke-width:1; fill:lime; fill-opacity:0.1; stroke-opacity:0.5}</style>", u += `<rect x="0" y="0" width="${n}" height="${y(h, 6)}" style="fill:yellow; fill-opacity:0.2" />`, e.forEach((i, r) => {
      const a = i.reduce((x, z) => x + t[z][0], 0) / i.length, p = i.reduce((x, z) => x + t[z][1], 0) / i.length, _ = (a - w) * c, G = h - (p - P) * c, d = i.map((x) => {
        const z = (t[x][0] - w) * c, Y = h - (t[x][1] - P) * c;
        return `${y(z, 6)},${y(Y, 6)}`;
      }).join(" ");
      u += `<text x="${y(_, 6)}" y="${y(G + 4, 6)}" text-anchor="middle">${r + 1}</text>`, u += `<polygon points="${d}" class="element"/>`;
    });
    const N = 5.333333;
    return S.forEach((i) => {
      const r = (t[i][0] - w) * c, a = h - (t[i][1] - P) * c;
      (Math.abs(t[i][1] - P) < l || Math.abs(t[i][1] - $) < l) && (u += `<line x1="${y(r - 2 * N, 6)}" y1="${y(a, 6)}" x2="${y(r + 2 * N, 6)}" y2="${y(a, 6)}" class="support"/>`), (Math.abs(t[i][0] - w) < l || Math.abs(t[i][0] - k) < l) && (u += `<line x1="${y(r, 6)}" y1="${y(a - 2 * N, 6)}" x2="${y(r, 6)}" y2="${y(a + 2 * N, 6)}" class="support"/>`), u += `<circle cx="${y(r, 6)}" cy="${y(a, 6)}" r="${N}" class="support"/>`;
    }), t.forEach((i, r) => {
      const a = (i[0] - w) * c, p = h - (i[1] - P) * c;
      u += `<circle cx="${y(a, 6)}" cy="${y(p, 6)}" r="${f}" class="joint" />`, u += `<text x="${y(a + f * 2, 6)}" y="${y(p - f, 6)}" text-anchor="start">${r + 1}</text>`;
    }), u += "</svg>", u;
  }
  function zt(t, e, n, m = 400, X = "w") {
    if (!t.length || !e.length || !n.length) return "";
    const w = t.map((d) => d[0]), k = t.map((d) => d[1]), P = Math.min(...w), $ = Math.max(...w), A = Math.min(...k), E = Math.max(...k), c = $ - P || 1, h = E - A || 1, v = m / Math.max(c, h), f = h * v, l = 20, S = n.filter((d) => d !== void 0 && !isNaN(d));
    if (!S.length) return "";
    const u = Math.min(...S), N = Math.max(...S), i = Math.abs(N - u) || 1;
    function r(d) {
      const x = Math.max(0, Math.min(1, (d - u) / i));
      let z, Y, I;
      return x < 0.25 ? (z = 0, Y = Math.floor(255 * x * 4), I = 255) : x < 0.5 ? (z = 0, Y = 255, I = Math.floor(255 * (1 - (x - 0.25) * 4))) : x < 0.75 ? (z = Math.floor(255 * (x - 0.5) * 4), Y = 255, I = 0) : (z = 255, Y = Math.floor(255 * (1 - (x - 0.75) * 4)), I = 0), `rgb(${z},${Y},${I})`;
    }
    const a = `colorScale_${X.replace(/[^a-zA-Z0-9]/g, "")}`;
    let p = `<svg viewBox="-20 -20 ${m + 80} ${f + 2 * l}" xmlns="http://www.w3.org/2000/svg" style="width:${m + 80}pt; height:${y(f, 0)}pt; font-family:Arial; font-size:9px;">
<defs>
<linearGradient id="${a}" x1="0%" y1="100%" x2="0%" y2="0%">
<stop offset="0%" style="stop-color:#0000ff"/>
<stop offset="25%" style="stop-color:#00ffff"/>
<stop offset="50%" style="stop-color:#00ff00"/>
<stop offset="75%" style="stop-color:#ffff00"/>
<stop offset="100%" style="stop-color:#ff0000"/>
</linearGradient>
</defs>`;
    e.forEach((d) => {
      const x = d.reduce((I, O) => I + (n[O] || 0), 0) / d.length, z = r(x), Y = d.map((I) => {
        const O = (t[I][0] - P) * v, V = f - (t[I][1] - A) * v;
        return `${y(O, 6)},${y(V, 6)}`;
      }).join(" ");
      p += `<polygon points="${Y}" fill="${z}" stroke="#333" stroke-width="0.3"/>`;
    });
    const _ = m + 10, G = f - 20;
    p += `<rect x="${_}" y="10" width="15" height="${y(G, 0)}" fill="url(#${a})" stroke="#333"/>`;
    for (let d = 0; d <= 5; d++) {
      const x = u + i * d / 5, z = 10 + G - G * d / 5;
      p += `<text x="${_ + 20}" y="${y(z + 3, 0)}">${M(x, 4)}</text>`;
    }
    return p += `<text x="${_}" y="5">${X}</text>`, p += "</svg>", p;
  }
  function at(t, e, n, m = 400, X = "M") {
    if (!t.length || !e.length) return "";
    const w = n.filter((d) => d !== void 0 && !isNaN(d));
    if (!w.length) return "<p><i>No data for contour map</i></p>";
    const k = t.map((d) => d[0]), P = t.map((d) => d[1]), $ = Math.min(...k), A = Math.max(...k), E = Math.min(...P), c = Math.max(...P), h = A - $ || 1, v = c - E || 1, f = m / Math.max(h, v), l = v * f, S = 20, u = Math.min(...w), N = Math.max(...w), i = Math.abs(N - u) || 1;
    function r(d) {
      const x = Math.max(0, Math.min(1, (d - u) / i));
      let z, Y, I;
      return x < 0.25 ? (z = 0, Y = Math.floor(255 * x * 4), I = 255) : x < 0.5 ? (z = 0, Y = 255, I = Math.floor(255 * (1 - (x - 0.25) * 4))) : x < 0.75 ? (z = Math.floor(255 * (x - 0.5) * 4), Y = 255, I = 0) : (z = 255, Y = Math.floor(255 * (1 - (x - 0.75) * 4)), I = 0), `rgb(${z},${Y},${I})`;
    }
    const a = `colorScaleElem_${X.replace(/[^a-zA-Z0-9]/g, "")}`;
    let p = `<svg viewBox="-20 -20 ${m + 80} ${l + 2 * S}" xmlns="http://www.w3.org/2000/svg" style="width:${m + 80}pt; height:${y(l, 0)}pt; font-family:Arial; font-size:9px;">
<defs>
<linearGradient id="${a}" x1="0%" y1="100%" x2="0%" y2="0%">
<stop offset="0%" style="stop-color:#0000ff"/>
<stop offset="25%" style="stop-color:#00ffff"/>
<stop offset="50%" style="stop-color:#00ff00"/>
<stop offset="75%" style="stop-color:#ffff00"/>
<stop offset="100%" style="stop-color:#ff0000"/>
</linearGradient>
</defs>`;
    e.forEach((d, x) => {
      const z = n[x] || 0, Y = r(z), I = d.map((O) => {
        const V = (t[O][0] - $) * f, D = l - (t[O][1] - E) * f;
        return `${y(V, 6)},${y(D, 6)}`;
      }).join(" ");
      p += `<polygon points="${I}" fill="${Y}" stroke="#333" stroke-width="0.3"/>`;
    });
    const _ = m + 10, G = l - 20;
    p += `<rect x="${_}" y="10" width="15" height="${y(G, 0)}" fill="url(#${a})" stroke="#333"/>`;
    for (let d = 0; d <= 5; d++) {
      const x = u + i * d / 5, z = 10 + G - G * d / 5;
      p += `<text x="${_ + 20}" y="${y(z + 3, 0)}">${M(x, 4)}</text>`;
    }
    return p += `<text x="${_}" y="5">${X}</text>`, p += "</svg>", p;
  }
  function st(t) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
    console.log("Template Calcpad style called");
    const e = ((_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val) || [], n = ((_b = t == null ? void 0 : t.elements) == null ? void 0 : _b.val) || [], m = ((_c = t == null ? void 0 : t.nodeInputs) == null ? void 0 : _c.val) || {}, X = ((_d = t == null ? void 0 : t.elementInputs) == null ? void 0 : _d.val) || {}, w = ((_e = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _e.val) || {}, k = ((_f = t == null ? void 0 : t.analyzeOutputs) == null ? void 0 : _f.val) || {}, P = ((_g = X.elasticities) == null ? void 0 : _g.values().next().value) || 100, $ = ((_h = X.poissonsRatios) == null ? void 0 : _h.values().next().value) || 0.3, A = ((_i = X.thicknesses) == null ? void 0 : _i.values().next().value) || 1, E = ((_k = (_j = m.loads) == null ? void 0 : _j.values().next().value) == null ? void 0 : _k[2]) || -3, c = e.map((g) => g[0]), h = e.map((g) => g[1]), v = c.length ? Math.max(...c) - Math.min(...c) : 15, f = h.length ? Math.max(...h) - Math.min(...h) : 10, l = [];
    let S = 0, u = 0;
    w.deformations && w.deformations.forEach((g, b) => {
      l[b] = g[2] || 0, Math.abs(g[2]) > Math.abs(S) && (S = g[2], u = b);
    });
    const N = [], i = [], r = [], a = [], p = [], _ = [];
    let G = 0, d = 0, x = 0, z = 0;
    k.bendingXX && k.bendingXX.forEach((g, b) => {
      const R = g.reduce((j, B) => j + B, 0) / g.length;
      N[b] = R, Math.abs(R) > Math.abs(G) && (G = R, d = b);
    }), k.bendingYY && k.bendingYY.forEach((g, b) => {
      const R = g.reduce((j, B) => j + B, 0) / g.length;
      i[b] = R, Math.abs(R) > Math.abs(x) && (x = R, z = b);
    }), k.bendingXY && k.bendingXY.forEach((g, b) => {
      const R = g.reduce((j, B) => j + B, 0) / g.length;
      r[b] = R;
    }), k.membraneXX && k.membraneXX.forEach((g, b) => {
      const R = g.reduce((j, B) => j + B, 0) / g.length;
      a[b] = R;
    }), k.membraneYY && k.membraneYY.forEach((g, b) => {
      const R = g.reduce((j, B) => j + B, 0) / g.length;
      p[b] = R;
    }), k.membraneXY && k.membraneXY.forEach((g, b) => {
      const R = g.reduce((j, B) => j + B, 0) / g.length;
      _[b] = R;
    });
    const Y = P * Math.pow(A, 3) / (12 * (1 - $ * $)), I = [
      [
        Y,
        Y * $,
        0
      ],
      [
        Y * $,
        Y,
        0
      ],
      [
        0,
        0,
        Y * (1 - $) / 2
      ]
    ], O = ((_l = m.supports) == null ? void 0 : _l.size) || 0, V = e.length, D = n.length, rt = `
<style>${vt}
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
<p>Plate dimensions - ${F(`${o("a")} = ${M(v, 1)}`)} m, ${F(`${o("b")} = ${M(f, 1)}`)} m</p>
<p>Thickness - ${F(`${o("t")} = ${M(A, 2)}`)} m</p>
<p>Load - ${F(`${o("q")} = ${M(Math.abs(E), 1)}`)} kN/m\xB2</p>
<p>Modulus of elasticity - ${F(`${o("E")} = ${M(P, 0)}`)} GPa</p>
<p>Poisson's ratio - ${F(`${o("\u03BD")} = ${M($, 2)}`)}</p>
</td><td style="vertical-align:middle; padding-left:30px;">
${Mt(v, f)}
</td></tr></table>

<h4>Finite element mesh</h4>
<p>We will use triangular finite elements with ${F(`${o("n")} = 18`)} DOFs (6 per node)</p>
<p>Total number of elements - ${F(`${o("n", "e")} = ${D}`)}</p>
<p>Total number of joints - ${F(`${o("n", "j")} = ${V}`)}</p>
<p>Supported joints count - ${F(`${o("n", "s")} = ${O}`)}</p>

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
${kt(e, n)}
</div>

<script>
(function() {
  const nodes = ${JSON.stringify(e)};
  const elements = ${JSON.stringify(n)};

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
})();
<\/script>

<p>Joint coordinates</p>
<table class="bordered centered">
<tr><th>Joint</th><th>${o("x")}</th><th>${o("y")}</th></tr>
${e.slice(0, 10).map((g, b) => `
<tr><td>${b + 1}</td><td>${M(g[0], 2)}</td><td>${M(g[1], 2)}</td></tr>
`).join("")}
${V > 10 ? `<tr><td colspan="3">... (${V - 10} more joints)</td></tr>` : ""}
</table>

<h4>Finite element formulation</h4>
<p><b>Shape functions</b></p>
<p>Linear shape functions for triangular element (area coordinates):</p>
<p>${F(`${o("N", "1")}(\u03BE,\u03B7) = 1 - \u03BE - \u03B7`)}</p>
<p>${F(`${o("N", "2")}(\u03BE,\u03B7) = \u03BE`)}</p>
<p>${F(`${o("N", "3")}(\u03BE,\u03B7) = \u03B7`)}</p>

<p><b>Constitutive matrix</b> (stress - strain relationship)</p>
<p>${F(`<b>${o("D")}</b> = ${Z(`${o("E")} \xB7 ${o("t")}<sup>3</sup>`, `12 \xB7 (1 - ${o("\u03BD")}<sup>2</sup>)`)} \xB7 <b class="b1">[</b>1; ${o("\u03BD")}; 0 <b class="b0">|</b> ${o("\u03BD")}; 1; 0 <b class="b0">|</b> 0; 0; ${Z(`1 - ${o("\u03BD")}`, "2")}<b class="b1">]</b>`)}</p>
<p>${F(`<b>${o("D")}</b> = ${Z(`${M(P, 0)} \xB7 ${M(A, 2)}<sup>3</sup>`, `12 \xB7 (1 - ${M($, 2)}<sup>2</sup>)`)} \xB7 <b class="b1">[</b>1; ${M($, 2)}; 0 <b class="b0">|</b> ${M($, 2)}; 1; 0 <b class="b0">|</b> 0; 0; ${Z(`1 - ${M($, 2)}`, "2")}<b class="b1">]</b> = ${wt(I, 6)}`)}</p>

<p><b>Strain-displacement matrix</b></p>
<p>The bending strain-displacement matrix ${F(`${o("B", "b")}`)} (3\xD718) relates curvatures to nodal DOFs:</p>
<p>${F(`\u03BA = {${o("\u03BA", "xx")}, ${o("\u03BA", "yy")}, ${o("\u03BA", "xy")}}<sup>T</sup> = ${o("B", "b")} \xB7 ${o("u")}`)}</p>

<p><b>Element stiffness matrix</b></p>
<p>${F(`${o("K", "e")} = \u222B\u222B ${o("B")}<sup>T</sup> \xB7 ${o("D")} \xB7 ${o("B")} dA`)}</p>
<p>For shell elements: ${F(`${o("K", "e")} = ${o("K", "b")} + ${o("K", "s")} + ${o("K", "m")}`)}</p>
<p>(bending + shear + membrane)</p>

<h4>Solution</h4>
<p>Total degrees of freedom: ${F(`${V * 6}`)}</p>
<p>Free degrees of freedom: ${F(`${V * 6 - O * 6}`)}</p>
<p>Global system: ${F(`${o("K")} \xB7 ${o("U")} = ${o("F")}`)}</p>
<p>Solution method: LU decomposition</p>

<h4>Results</h4>
<p><b>Displacements</b></p>
<p>Maximum displacement: ${F(`${o("w", "max")} = <span class="${Math.abs(S) > 10 ? "err" : "ok"}">${M(S, 6)}</span>`)} at joint ${u + 1}</p>

<p>Nodal displacements</p>
<table class="bordered data">
<tr><th>Joint</th><th>${o("w")}</th><th>${o("\u03B8", "x")}</th><th>${o("\u03B8", "y")}</th></tr>
${w.deformations ? [
      ...w.deformations
    ].slice(0, 10).map(([g, b]) => `
<tr><td>${g + 1}</td><td>${M(b[2], 5)}</td><td>${M(b[3], 5)}</td><td>${M(b[4], 5)}</td></tr>
`).join("") : ""}
${(((_m = w.deformations) == null ? void 0 : _m.size) || 0) > 10 ? `<tr><td colspan="4">... (${(((_n = w.deformations) == null ? void 0 : _n.size) || 0) - 10} more)</td></tr>` : ""}
</table>

<p><b>Displacement contour map</b></p>
${zt(e, n, l, 400, "w")}
<p>${F(`${o("w")}(${Z(o("a"), "2")}, ${Z(o("b"), "2")}) = ${M(S, 6)}`)}</p>

<h4>Shell Results</h4>
<p><b>Bending moments</b></p>
<p>Maximum bending moment ${o("M", "x")}: ${F(`${o("M", "x,max")} = ${M(G, 4)}`)} kN\xB7m/m at element ${d + 1}</p>
<p>Maximum bending moment ${o("M", "y")}: ${F(`${o("M", "y,max")} = ${M(x, 4)}`)} kN\xB7m/m at element ${z + 1}</p>

${N.length > 0 ? `
<p>Element bending moments</p>
<table class="bordered data">
<tr><th>Element</th><th>${o("M", "x")}</th><th>${o("M", "y")}</th><th>${o("M", "xy")}</th></tr>
${n.slice(0, 10).map((g, b) => `
<tr><td>${b + 1}</td><td>${M(N[b] || 0, 4)}</td><td>${M(i[b] || 0, 4)}</td><td>${M(r[b] || 0, 4)}</td></tr>
`).join("")}
${D > 10 ? `<tr><td colspan="4">... (${D - 10} more elements)</td></tr>` : ""}
</table>

<p><b>Bending moment ${o("M", "x")} contour map</b></p>
${at(e, n, N, 400, "Mx")}

<p><b>Bending moment ${o("M", "y")} contour map</b></p>
${at(e, n, i, 400, "My")}
` : "<p><i>No shell results available</i></p>"}

${a.length > 0 ? `
<p><b>Membrane forces</b></p>
<table class="bordered data">
<tr><th>Element</th><th>${o("N", "x")}</th><th>${o("N", "y")}</th><th>${o("N", "xy")}</th></tr>
${n.slice(0, 10).map((g, b) => `
<tr><td>${b + 1}</td><td>${M(a[b] || 0, 4)}</td><td>${M(p[b] || 0, 4)}</td><td>${M(_[b] || 0, 4)}</td></tr>
`).join("")}
${D > 10 ? `<tr><td colspan="4">... (${D - 10} more elements)</td></tr>` : ""}
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
    return ct`${yt(rt)}`;
  }
  const H = {
    width: C.state(15),
    height: C.state(10),
    xPosition: C.state(15),
    thickness: C.state(0.2),
    G: C.state(12.5),
    load: C.state(-5)
  };
  let J = U.val, q = W.val;
  function T(t, e) {
    return t / et[e];
  }
  function Q(t, e) {
    return t * et[e];
  }
  function K(t, e) {
    return t / ot[e];
  }
  function Et(t, e) {
    return t * ot[e];
  }
  const s = {
    width: {
      value: C.state(15),
      min: 5,
      max: 30,
      step: 1,
      label: "Ancho (m)"
    },
    height: {
      value: C.state(10),
      min: 5,
      max: 20,
      step: 1,
      label: "Alto (m)"
    },
    xPosition: {
      value: C.state(15),
      min: 5,
      max: 25,
      step: 1,
      label: "Pos X (m)"
    },
    thickness: {
      value: C.state(0.2),
      min: 0.05,
      max: 0.5,
      step: 0.01,
      label: "Espesor (m)"
    },
    Ex: {
      value: C.state(30),
      min: 10,
      max: 210,
      step: 5,
      label: "E_x (GPa)"
    },
    Ey: {
      value: C.state(30),
      min: 10,
      max: 210,
      step: 5,
      label: "E_y (GPa)"
    },
    load: {
      value: C.state(-5),
      min: -20,
      max: 20,
      step: 1,
      label: "Carga (kN)"
    }
  };
  function it(t, e) {
    const n = {
      width: {
        min: 5,
        max: 30,
        step: 1
      },
      height: {
        min: 5,
        max: 20,
        step: 1
      },
      xPosition: {
        min: 5,
        max: 25,
        step: 1
      },
      thickness: {
        min: 0.05,
        max: 0.5,
        step: 0.01
      }
    }, m = {
      min: -20,
      max: 20,
      step: 1
    };
    s.width.min = T(n.width.min, t), s.width.max = T(n.width.max, t), s.width.step = T(n.width.step, t), s.height.min = T(n.height.min, t), s.height.max = T(n.height.max, t), s.height.step = T(n.height.step, t), s.xPosition.min = T(n.xPosition.min, t), s.xPosition.max = T(n.xPosition.max, t), s.xPosition.step = T(n.xPosition.step, t), s.thickness.min = T(n.thickness.min, t), s.thickness.max = T(n.thickness.max, t), s.thickness.step = T(n.thickness.step, t), s.load.min = K(m.min, e), s.load.max = K(m.max, e), s.load.step = K(m.step, e);
  }
  function Ft() {
    const t = W.val, e = U.val;
    s.width.value.val = T(H.width.val, t), s.height.value.val = T(H.height.val, t), s.xPosition.value.val = T(H.xPosition.val, t), s.thickness.value.val = T(H.thickness.val, t), s.load.value.val = K(H.load.val, e);
    const n = t === "\u2014" ? "" : t, m = e === "\u2014" ? "" : e;
    s.width.label = `Ancho${n ? ` (${n})` : ""}`, s.height.label = `Alto${n ? ` (${n})` : ""}`, s.xPosition.label = `Pos X${n ? ` (${n})` : ""}`, s.thickness.label = `Espesor${n ? ` (${n})` : ""}`, s.load.label = `Carga${m ? ` (${m})` : ""}`, it(t, e);
  }
  Ft();
  const L = {
    nodes: C.state([]),
    elements: C.state([]),
    nodeInputs: C.state({}),
    elementInputs: C.state({}),
    deformOutputs: C.state({}),
    analyzeOutputs: C.state({})
  };
  C.derive(() => {
    const t = U.val, e = W.val, n = t !== J, m = e !== q;
    if (n || m) {
      if (console.log(`Units changed: ${J}\u2192${t}, ${q}\u2192${e}`), m) {
        const X = Q(s.width.value.val, q), w = Q(s.height.value.val, q), k = Q(s.xPosition.value.val, q), P = Q(s.thickness.value.val, q);
        s.width.value.val = T(X, e), s.height.value.val = T(w, e), s.xPosition.value.val = T(k, e), s.thickness.value.val = T(P, e);
        const $ = e === "\u2014" ? "" : e;
        s.width.label = `Ancho${$ ? ` (${$})` : ""}`, s.height.label = `Alto${$ ? ` (${$})` : ""}`, s.xPosition.label = `Pos X${$ ? ` (${$})` : ""}`, s.thickness.label = `Espesor${$ ? ` (${$})` : ""}`;
      }
      if (n) {
        const X = Et(s.load.value.val, J);
        s.load.value.val = K(X, t);
        const w = t === "\u2014" ? "" : t;
        s.load.label = `Carga${w ? ` (${w})` : ""}`;
      }
      it(e, t), $t(), J = t, q = e;
    }
  });
  C.derive(() => {
    const t = et[W.val], e = ot[U.val], n = s.width.value.val * t, m = s.height.value.val * t, X = s.xPosition.value.val * t, w = s.thickness.value.val * t, k = s.load.value.val * e, P = s.Ex.value.val * 1e6, $ = s.Ey.value.val * 1e6, A = H.G.val * 1e6, { nodes: E, elements: c, boundaryIndices: h } = bt({
      points: [
        [
          0,
          0,
          0
        ],
        [
          n,
          0,
          0
        ],
        [
          X,
          m,
          0
        ],
        [
          0,
          m * 0.5,
          0
        ]
      ],
      polygon: [
        0,
        1,
        2,
        3
      ],
      maxMeshSize: Math.min(n, m) / 10
    }), v = {
      supports: new Map(h.map((a) => [
        a,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])),
      loads: new Map(E.map((a, p) => [
        p,
        [
          0,
          0,
          k,
          0,
          0,
          0
        ]
      ]))
    }, f = {
      elasticities: new Map(c.map((a, p) => [
        p,
        P
      ])),
      elasticitiesOrthogonal: new Map(c.map((a, p) => [
        p,
        $
      ])),
      thicknesses: new Map(c.map((a, p) => [
        p,
        w
      ])),
      poissonsRatios: new Map(c.map((a, p) => [
        p,
        0.3
      ])),
      shearModuli: new Map(c.map((a, p) => [
        p,
        A
      ]))
    }, l = xt(E, c, v, f), S = ft(E, c, f, l), u = W.val, N = U.val, i = 1 / t, r = 1 / e;
    if (console.log("=".repeat(60)), console.log("PLATE FEM - AWATIF RESULTS"), console.log(`Units: ${N}, ${u}`), console.log(`Model: ${c.length} elements, ${E.length} nodes`), console.log("=".repeat(60)), console.log(`Plate: ${(n * i).toFixed(2)} x ${(m * i).toFixed(2)} ${u}`), console.log(`Thickness: ${(w * i).toFixed(3)} ${u}`), console.log(`E_x = ${s.Ex.value.val} GPa, E_y = ${s.Ey.value.val} GPa`), console.log(`Load per node: ${(k * r).toFixed(2)} ${N}`), l == null ? void 0 : l.deformations) {
      let a = 0, p = 0;
      l.deformations.forEach((_, G) => {
        Math.abs(_[2]) > Math.abs(a) && (a = _[2], p = G);
      }), console.log(`
Max deflection (Node ${p}):`), console.log(`  w_max = ${(a * i).toFixed(6)} ${u}`), console.log(`  w_max = ${(a * 1e3).toFixed(4)} mm`);
    }
    console.log("=".repeat(60)), L.nodes.val = E, L.elements.val = c, L.nodeInputs.val = v, L.elementInputs.val = f, L.deformOutputs.val = l, L.analyzeOutputs.val = S;
  });
  const tt = C.state(""), lt = C.state(void 0);
  C.derive(() => {
    if (tt.val === "Report") try {
      const t = nt({
        template: st,
        data: L
      });
      lt.val = t;
    } catch (t) {
      console.error("Error generating report:", t);
    }
    if (tt.val === "Print") {
      const t = nt({
        template: st,
        data: L
      }), e = window.open("", "_blank");
      if (e) {
        const n = (t == null ? void 0 : t.innerHTML) || "";
        e.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Plate FEM Report - Calcpad Style</title>
        </head>
        <body>
          ${n}
        </body>
        </html>
      `), e.document.close(), e.focus(), setTimeout(() => e.print(), 500);
      }
    }
  });
  document.body.append(ut(s), pt({
    mesh: L,
    settingsObj: {
      nodes: false,
      deformedShape: true,
      loads: false,
      shellResults: "displacementZ"
    }
  }), dt(L), mt({
    position: "bottom-center"
  }), gt({
    dialogBody: lt
  }), ht({
    clickedButton: tt,
    buttons: [
      "Report",
      "Print"
    ],
    sourceCode: "https://github.com/GiorgioBurbanelli89/awatif-ejemplos/blob/master/plate/",
    author: "https://github.com/GiorgioBurbanelli89"
  }));
});
