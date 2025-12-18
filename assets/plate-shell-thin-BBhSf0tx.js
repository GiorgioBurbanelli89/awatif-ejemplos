import { x as ns, v as L, g as os, e as ps, b as ls, d as is } from "./styles-CWPU-Lqy.js";
import { d as rs, a as cs, __tla as __tla_0 } from "./deformCpp-BprT8Kg9.js";
import { g as ds } from "./getParameters-COCExR_5.js";
import { g as ms } from "./getDialog-Dp-ldI_q.js";
import { g as K } from "./getReport-B2dSsEEo.js";
import { g as us, __tla as __tla_1 } from "./getMesh-DmUdekin.js";
import { o as as } from "./unsafe-html-ChtKbCv5.js";
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
  const fs = `
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
  function C(s, t = 4) {
    return s == null || isNaN(s) || Math.abs(s) < 1e-10 ? "0" : s.toFixed(t).replace(".", ",");
  }
  function $(s, t = 4) {
    return s == null || isNaN(s) || Math.abs(s) < 1e-10 ? "0" : s.toFixed(t);
  }
  function q(s, t) {
    return `<span class="dvc">${s}<span class="dvl"></span>${t}</span>`;
  }
  function E(s) {
    return `<span class="eq">${s}</span>`;
  }
  function i(s, t) {
    return t ? `<var>${s}</var><sub>${t}</sub>` : `<var>${s}</var>`;
  }
  function bs(s, t = 4) {
    if (!s || !s.length) return "";
    let m = `<span class="matrix">
`;
    for (let g = 0; g < s.length; g++) {
      m += '<span class="tr"><span class="td"></span>';
      for (let k = 0; k < s[g].length; k++) m += `<span class="td">${C(s[g][k], t)}</span>`;
      m += `<span class="td"></span></span>
`;
    }
    return m += "</span>", m;
  }
  function hs(s, t, m, g) {
    const x = 110 / Math.max(s, 1), r = (120 - 2 * 25) / Math.max(t, 1), X = Math.min(x, r), z = s * X, p = t * X, e = 25, b = 25;
    let h = '<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" style="width:160pt; height:120pt; font-family:Arial; font-size:9px;">';
    h += `<defs>
    <marker id="arrowStart" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
      <path d="M6,0 L0,3 L6,6" fill="none" stroke="#333" stroke-width="1"/>
    </marker>
    <marker id="arrowEnd" markerWidth="6" markerHeight="6" refX="0" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6" fill="none" stroke="#333" stroke-width="1"/>
    </marker>
  </defs>`, h += `<rect x="${e}" y="${b}" width="${z}" height="${p}" fill="#e8e8e8" stroke="#333" stroke-width="1.5"/>`;
    const u = 4, v = 5;
    for (let l = 0; l <= v; l++) {
      const a = e + z * l / v;
      h += `<polygon points="${a},${b + p} ${a - u},${b + p + u} ${a + u},${b + p + u}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let l = 0; l <= v; l++) {
      const a = b + p * l / v;
      h += `<polygon points="${e},${a} ${e - u},${a - u} ${e - u},${a + u}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let l = 0; l <= v; l++) {
      const a = b + p * l / v;
      h += `<polygon points="${e + z},${a} ${e + z + u},${a - u} ${e + z + u},${a + u}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let l = 0; l <= v; l++) {
      const a = e + z * l / v;
      h += `<polygon points="${a},${b} ${a - u},${b - u} ${a + u},${b - u}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    const y = 3;
    for (let l = 1; l <= y; l++) for (let a = 1; a <= y; a++) {
      const M = e + z * l / (y + 1), R = b + p * a / (y + 1);
      h += `<line x1="${M}" y1="${R - 8}" x2="${M}" y2="${R + 5}" stroke="#0066cc" stroke-width="1.2" marker-end="url(#arrowEnd)"/>`;
    }
    h += `<text x="${e + z / 2}" y="${b + p / 2 - 12}" text-anchor="middle" fill="#0066cc" font-style="italic">q</text>`;
    const S = b + p + 18;
    h += `<line x1="${e}" y1="${S}" x2="${e + z}" y2="${S}" stroke="#333" stroke-width="0.8" marker-start="url(#arrowStart)" marker-end="url(#arrowEnd)"/>`, h += `<text x="${e + z / 2}" y="${S + 10}" text-anchor="middle" font-style="italic">B</text>`;
    const d = e + z + 18;
    return h += `<line x1="${d}" y1="${b}" x2="${d}" y2="${b + p}" stroke="#333" stroke-width="0.8" marker-start="url(#arrowStart)" marker-end="url(#arrowEnd)"/>`, h += `<text x="${d + 8}" y="${b + p / 2 + 3}" font-style="italic">L</text>`, h += "</svg>", h;
  }
  function gs(s, t, m = 400) {
    if (!s.length || !t.length) return "<p>No mesh data</p>";
    const g = s.map((d) => d[0]), k = s.map((d) => d[1]), D = Math.min(...g), I = Math.max(...g), x = Math.min(...k), r = Math.max(...k), X = I - D || 1, z = r - x || 1, p = m / Math.max(X, z), e = z * p, b = 20, h = 2.666667, u = 0.01, v = /* @__PURE__ */ new Set();
    s.forEach((d, l) => {
      (Math.abs(d[0] - D) < u || Math.abs(d[0] - I) < u || Math.abs(d[1] - x) < u || Math.abs(d[1] - r) < u) && v.add(l);
    });
    let y = `<svg viewbox="-20 -20 ${$(m + 2 * b, 0)} ${$(e + 2 * b, 6)}" xmlns="http://www.w3.org/2000/svg" version="1.1" style="font-family:Segoe UI;font-size:10px;width:${m}pt;height:${$(e, 6)}pt">`;
    y += "<style>.joint{fill:orangeRed;}.support{stroke:red;stroke-width:1;fill:lightpink;}.element{stroke:seaGreen;stroke-width:1;fill:lime;fill-opacity:0.1;stroke-opacity:0.5}</style>", y += `<rect x="0" y="0" width="${m}" height="${$(e, 6)}" style="fill:yellow;fill-opacity:0.2"/>`, t.forEach((d, l) => {
      const a = d.reduce((f, w) => f + s[w][0], 0) / d.length, M = d.reduce((f, w) => f + s[w][1], 0) / d.length, R = (a - D) * p, N = e - (M - x) * p, o = d.map((f) => {
        const w = (s[f][0] - D) * p, F = e - (s[f][1] - x) * p;
        return `${$(w, 6)},${$(F, 6)}`;
      }).join(" ");
      y += `<text x="${$(R, 6)}" y="${$(N + 4, 6)}" text-anchor="middle">${l + 1}</text>`, y += `<polygon points="${o}" class="element"/>`;
    });
    const S = 5.333333;
    return v.forEach((d) => {
      const l = (s[d][0] - D) * p, a = e - (s[d][1] - x) * p;
      (Math.abs(s[d][1] - x) < u || Math.abs(s[d][1] - r) < u) && (y += `<line x1="${$(l - 2 * S, 6)}" y1="${$(a, 6)}" x2="${$(l + 2 * S, 6)}" y2="${$(a, 6)}" class="support"/>`), (Math.abs(s[d][0] - D) < u || Math.abs(s[d][0] - I) < u) && (y += `<line x1="${$(l, 6)}" y1="${$(a - 2 * S, 6)}" x2="${$(l, 6)}" y2="${$(a + 2 * S, 6)}" class="support"/>`), y += `<circle cx="${$(l, 6)}" cy="${$(a, 6)}" r="${S}" class="support"/>`;
    }), s.forEach((d, l) => {
      const a = (d[0] - D) * p, M = e - (d[1] - x) * p;
      y += `<circle cx="${$(a, 6)}" cy="${$(M, 6)}" r="${h}" class="joint"/>`, y += `<text x="${$(a + h * 2, 6)}" y="${$(M - h, 6)}" text-anchor="start">${l + 1}</text>`;
    }), y += "</svg>", y;
  }
  function xs(s, t, m, g = 400, k = "w") {
    if (!s.length || !t.length || !m.length) return "";
    const D = s.map((o) => o[0]), I = s.map((o) => o[1]), x = Math.min(...D), r = Math.max(...D), X = Math.min(...I), z = Math.max(...I), p = r - x || 1, e = z - X || 1, b = g / Math.max(p, e), h = e * b, u = 20, v = m.filter((o) => o !== void 0 && !isNaN(o));
    if (!v.length) return "";
    const y = Math.min(...v), S = Math.max(...v), d = Math.abs(S - y) || 1;
    function l(o) {
      const f = Math.max(0, Math.min(1, (o - y) / d));
      let w, F, A;
      return f < 0.25 ? (w = 0, F = Math.floor(255 * f * 4), A = 255) : f < 0.5 ? (w = 0, F = 255, A = Math.floor(255 * (1 - (f - 0.25) * 4))) : f < 0.75 ? (w = Math.floor(255 * (f - 0.5) * 4), F = 255, A = 0) : (w = 255, F = Math.floor(255 * (1 - (f - 0.75) * 4)), A = 0), `rgb(${w},${F},${A})`;
    }
    const a = `colorScale_${k.replace(/[^a-zA-Z0-9]/g, "")}`;
    let M = `<svg viewBox="-20 -20 ${g + 80} ${h + 2 * u}" xmlns="http://www.w3.org/2000/svg" style="width:${g + 80}pt;height:${$(h, 0)}pt;font-family:Arial;font-size:9px;">
<defs>
<linearGradient id="${a}" x1="0%" y1="100%" x2="0%" y2="0%">
<stop offset="0%" style="stop-color:#0000ff"/>
<stop offset="25%" style="stop-color:#00ffff"/>
<stop offset="50%" style="stop-color:#00ff00"/>
<stop offset="75%" style="stop-color:#ffff00"/>
<stop offset="100%" style="stop-color:#ff0000"/>
</linearGradient>
</defs>`;
    t.forEach((o) => {
      const f = o.reduce((A, B) => A + (m[B] || 0), 0) / o.length, w = l(f), F = o.map((A) => {
        const B = (s[A][0] - x) * b, V = h - (s[A][1] - X) * b;
        return `${$(B, 6)},${$(V, 6)}`;
      }).join(" ");
      M += `<polygon points="${F}" fill="${w}" stroke="#333" stroke-width="0.3"/>`;
    });
    const R = g + 10, N = h - 20;
    M += `<rect x="${R}" y="10" width="15" height="${$(N, 0)}" fill="url(#${a})" stroke="#333"/>`;
    for (let o = 0; o <= 5; o++) {
      const f = y + d * o / 5, w = 10 + N - N * o / 5;
      M += `<text x="${R + 20}" y="${$(w + 3, 0)}">${C(f, 4)}</text>`;
    }
    return M += `<text x="${R}" y="5">${k}</text>`, M += "</svg>", M;
  }
  function Q(s, t, m, g = 400, k = "M") {
    if (!s.length || !t.length) return "";
    const D = m.filter((o) => o !== void 0 && !isNaN(o));
    if (!D.length) return "<p><i>No data for contour map</i></p>";
    const I = s.map((o) => o[0]), x = s.map((o) => o[1]), r = Math.min(...I), X = Math.max(...I), z = Math.min(...x), p = Math.max(...x), e = X - r || 1, b = p - z || 1, h = g / Math.max(e, b), u = b * h, v = 20, y = Math.min(...D), S = Math.max(...D), d = Math.abs(S - y) || 1;
    function l(o) {
      const f = Math.max(0, Math.min(1, (o - y) / d));
      let w, F, A;
      return f < 0.25 ? (w = 0, F = Math.floor(255 * f * 4), A = 255) : f < 0.5 ? (w = 0, F = 255, A = Math.floor(255 * (1 - (f - 0.25) * 4))) : f < 0.75 ? (w = Math.floor(255 * (f - 0.5) * 4), F = 255, A = 0) : (w = 255, F = Math.floor(255 * (1 - (f - 0.75) * 4)), A = 0), `rgb(${w},${F},${A})`;
    }
    const a = `colorScaleElem_${k.replace(/[^a-zA-Z0-9]/g, "")}`;
    let M = `<svg viewBox="-20 -20 ${g + 80} ${u + 2 * v}" xmlns="http://www.w3.org/2000/svg" style="width:${g + 80}pt;height:${$(u, 0)}pt;font-family:Arial;font-size:9px;">
<defs>
<linearGradient id="${a}" x1="0%" y1="100%" x2="0%" y2="0%">
<stop offset="0%" style="stop-color:#0000ff"/>
<stop offset="25%" style="stop-color:#00ffff"/>
<stop offset="50%" style="stop-color:#00ff00"/>
<stop offset="75%" style="stop-color:#ffff00"/>
<stop offset="100%" style="stop-color:#ff0000"/>
</linearGradient>
</defs>`;
    t.forEach((o, f) => {
      const w = m[f] || 0, F = l(w), A = o.map((B) => {
        const V = (s[B][0] - r) * h, _ = u - (s[B][1] - z) * h;
        return `${$(V, 6)},${$(_, 6)}`;
      }).join(" ");
      M += `<polygon points="${A}" fill="${F}" stroke="#333" stroke-width="0.3"/>`;
    });
    const R = g + 10, N = u - 20;
    M += `<rect x="${R}" y="10" width="15" height="${$(N, 0)}" fill="url(#${a})" stroke="#333"/>`;
    for (let o = 0; o <= 5; o++) {
      const f = y + d * o / 5, w = 10 + N - N * o / 5;
      M += `<text x="${R + 20}" y="${$(w + 3, 0)}">${C(f, 4)}</text>`;
    }
    return M += `<text x="${R}" y="5">${k}</text>`, M += "</svg>", M;
  }
  function ss(s) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    const t = ((_a = s == null ? void 0 : s.nodes) == null ? void 0 : _a.val) || [], m = ((_b = s == null ? void 0 : s.elements) == null ? void 0 : _b.val) || [], g = ((_c = s == null ? void 0 : s.nodeInputs) == null ? void 0 : _c.val) || {}, k = ((_d = s == null ? void 0 : s.elementInputs) == null ? void 0 : _d.val) || {}, D = ((_e = s == null ? void 0 : s.deformOutputs) == null ? void 0 : _e.val) || {}, I = ((_f = s == null ? void 0 : s.analyzeOutputs) == null ? void 0 : _f.val) || {}, x = ((_g = k.elasticities) == null ? void 0 : _g.values().next().value) || 21e4, r = ((_h = k.poissonsRatios) == null ? void 0 : _h.values().next().value) || 0.3, X = ((_i = k.thicknesses) == null ? void 0 : _i.values().next().value) || 0.2, z = ((_k = (_j = g.loads) == null ? void 0 : _j.values().next().value) == null ? void 0 : _k[2]) || -10, p = t.map((T) => T[0]), e = t.map((T) => T[1]), b = p.length ? Math.max(...p) - Math.min(...p) : 10, h = e.length ? Math.max(...e) - Math.min(...e) : 15, u = x / (2 * (1 + r)), v = x * Math.pow(X, 3) / (12 * (1 - r * r)), y = [];
    let S = 0, d = 0;
    D.deformations && D.deformations.forEach((T, G) => {
      y[G] = T[2] || 0, Math.abs(T[2]) > Math.abs(S) && (S = T[2], d = G);
    });
    const l = [], a = [];
    let M = 0, R = 0, N = 0, o = 0;
    I.bendingXX && I.bendingXX.forEach((T, G) => {
      const P = T.reduce((U, H) => U + H, 0) / T.length;
      l[G] = P, Math.abs(P) > Math.abs(M) && (M = P, R = G);
    }), I.bendingYY && I.bendingYY.forEach((T, G) => {
      const P = T.reduce((U, H) => U + H, 0) / T.length;
      a[G] = P, Math.abs(P) > Math.abs(N) && (N = P, o = G);
    }), I.bendingXY && I.bendingXY.forEach((T, G) => {
      T.reduce((P, U) => P + U, 0) / T.length;
    });
    const f = [
      [
        v,
        v * r,
        0
      ],
      [
        v * r,
        v,
        0
      ],
      [
        0,
        0,
        v * (1 - r) / 2
      ]
    ], w = ((_l = g.supports) == null ? void 0 : _l.size) || 0, F = t.length, A = m.length, B = Math.min(b, h), V = 406e-5 * Math.abs(z) * Math.pow(B, 4) / v, _ = V > 0 ? Math.abs(Math.abs(S) - V) / V * 100 : 0, es = `
<style>${fs}</style>

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
<p>Plate dimensions - ${E(`${i("B")} = ${C(b, 1)}`)} m, ${E(`${i("L")} = ${C(h, 1)}`)} m</p>
<p>Thickness - ${E(`${i("t")} = ${C(X, 3)}`)} m</p>
<p>Load - ${E(`${i("q")} = ${C(Math.abs(z), 1)}`)} kN/m\xB2</p>
<p>Modulus of elasticity - ${E(`${i("E")} = ${C(x, 0)}`)} MPa</p>
<p>Poisson's ratio - ${E(`${i("\u03BD")} = ${C(r, 2)}`)}</p>
</td><td style="vertical-align:middle;padding-left:30px;">
${hs(b, h)}
</td></tr></table>

<h4>Derived properties</h4>
<p><b>Shear modulus</b></p>
<p>${E(`${i("G")} = ${q(i("E"), `2\xB7(1 + ${i("\u03BD")})`)} = ${q(C(x, 0), `2\xB7(1 + ${C(r, 2)})`)} = <b>${C(u, 2)}</b>`)} MPa</p>

<p><b>Flexural rigidity</b></p>
<p>${E(`${i("D")} = ${q(`${i("E")}\xB7${i("t")}<sup>3</sup>`, `12\xB7(1 - ${i("\u03BD")}<sup>2</sup>)`)} = ${q(`${C(x, 0)}\xB7${C(X, 3)}<sup>3</sup>`, `12\xB7(1 - ${C(r, 2)}<sup>2</sup>)`)} = <b>${C(v, 4)}</b>`)}</p>

<h4>Finite element mesh</h4>
<p>We use triangular finite elements with 18 DOFs (6 per node)</p>
<p>Total number of elements - ${E(`${i("n", "e")} = ${A}`)}</p>
<p>Total number of joints - ${E(`${i("n", "j")} = ${F}`)}</p>
<p>Supported joints count - ${E(`${i("n", "s")} = ${w}`)}</p>

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
${gs(t, m)}
</div>

<script>
(function() {
  const nodes = ${JSON.stringify(t)};
  const elements = ${JSON.stringify(m)};

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
<p>${E(`${i("N", "1")}(\u03BE,\u03B7) = 1 - \u03BE - \u03B7`)}</p>
<p>${E(`${i("N", "2")}(\u03BE,\u03B7) = \u03BE`)}</p>
<p>${E(`${i("N", "3")}(\u03BE,\u03B7) = \u03B7`)}</p>

<p><b>Constitutive matrix</b></p>
<p>${E(`<b>${i("D")}</b> = ${q(`${i("E")}\xB7${i("t")}<sup>3</sup>`, `12\xB7(1 - ${i("\u03BD")}<sup>2</sup>)`)} \xB7 <b class="b1">[</b>1; ${i("\u03BD")}; 0 <b class="b0">|</b> ${i("\u03BD")}; 1; 0 <b class="b0">|</b> 0; 0; ${q(`1 - ${i("\u03BD")}`, "2")}<b class="b1">]</b>`)}</p>
<p>${E(`<b>${i("D")}</b> = ${bs(f, 4)}`)}</p>

<h4>Solution</h4>
<p>Total degrees of freedom: ${E(`${F * 6}`)}</p>
<p>Free degrees of freedom: ${E(`${F * 6 - w * 6}`)}</p>
<p>Global system: ${E(`${i("K")} \xB7 ${i("U")} = ${i("F")}`)}</p>

<h4>Results</h4>
<p><b>Displacements</b></p>
<p>Maximum displacement: ${E(`${i("w", "max")} = <span class="${Math.abs(S) > 1 ? "err" : "ok"}">${C(S, 6)}</span>`)} at joint ${d + 1}</p>

${y.length > 0 ? `<p><b>Displacement contour map</b></p>${xs(t, m, y, 400, "w")}` : ""}

<h4>Shell Results - Bending Moments</h4>
<p>Maximum ${i("M", "x")}: ${E(`${i("M", "x,max")} = ${C(M, 4)}`)} at element ${R + 1}</p>
<p>Maximum ${i("M", "y")}: ${E(`${i("M", "y,max")} = ${C(N, 4)}`)} at element ${o + 1}</p>

${l.length > 0 ? `<p><b>Moment ${i("M", "x")} contour map</b></p>${Q(t, m, l, 400, "Mx")}` : ""}
${a.length > 0 ? `<p><b>Moment ${i("M", "y")} contour map</b></p>${Q(t, m, a, 400, "My")}` : ""}

<h4>Analytical Verification (Navier Solution)</h4>
<p>For simply supported rectangular plate with uniform load:</p>
<p>${E(`${i("w", "max")} \u2248 0,00406 \xB7 ${q(`|${i("q")}| \xB7 ${i("a")}<sup>4</sup>`, i("D"))}`)}</p>
<p>${E(`${i("w", "analytical")} = 0,00406 \xB7 ${q(`|${C(z, 1)}| \xB7 ${C(B, 1)}<sup>4</sup>`, C(v, 4))} = ${C(V, 6)}`)}</p>
<p>FEM result: ${E(`${i("w", "FEM")} = ${C(Math.abs(S), 6)}`)}</p>
<p>Error: ${E(`<span class="${_ < 10 ? "ok" : "err"}">${C(_, 2)}%</span>`)}</p>

<hr/>
<p><i>Generated with Awatif - Calcpad style report</i></p>
</div>
`;
    return ns`${as(es)}`;
  }
  const ys = `
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
h2 {font-size: 1.7em; color: #2874a6; border-bottom: 1px solid #aed6f1; margin-top: 30px;}
h3 {font-size: 1.4em; color: #5dade2; margin-top: 20px;}
h4 {font-size: 1.2em;}
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
    background-color: #3498db;
    color: white;
    border: solid 1pt #2980b9;
}
table.bordered td {
    border: solid 1pt #CCCCCC;
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
.dvl {
    display: block;
    border-bottom: solid 1pt black;
    margin-top: 1pt;
    margin-bottom: 1pt;
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
.matrix .td:first-child { border-left: solid 1pt black; }
.matrix .td:last-child { border-right: solid 1pt black; }
.matrix .tr:first-child .td:first-child,
.matrix .tr:first-child .td:last-child { border-top: solid 1pt black; }
.matrix .tr:last-child .td:first-child,
.matrix .tr:last-child .td:last-child { border-bottom: solid 1pt black; }
.err { color: Crimson; background-color: #FEE; }
.ok { color: Green; background-color: #F0FFF0; }
hr { border: none; border-top: 1px solid #ccc; margin: 1em 0; }
/* Code blocks */
.code-block {
    background: #1e1e1e;
    color: #d4d4d4;
    padding: 15px;
    border-radius: 5px;
    font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
    font-size: 10pt;
    overflow-x: auto;
    margin: 15px 0;
    white-space: pre;
    line-height: 1.4;
}
.code-block .keyword { color: #569cd6; }
.code-block .type { color: #4ec9b0; }
.code-block .string { color: #ce9178; }
.code-block .comment { color: #6a9955; }
.code-block .number { color: #b5cea8; }
.code-block .function { color: #dcdcaa; }
.code-inline {
    background: #ecf0f1;
    padding: 2px 6px;
    border-radius: 3px;
    font-family: 'Consolas', monospace;
    font-size: 10pt;
}
/* Function box */
.function-box {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 15px 20px;
    border-radius: 8px;
    margin: 15px 0;
}
.function-box h4 { margin: 0 0 10px 0; font-size: 14pt; }
.function-box code {
    background: rgba(255,255,255,0.2);
    padding: 2px 6px;
    border-radius: 3px;
}
/* Note box */
.note {
    background: #fff3cd;
    border-left: 4px solid #ffc107;
    padding: 10px 15px;
    margin: 15px 0;
}
.note-info {
    background: #d1ecf1;
    border-left: 4px solid #17a2b8;
    padding: 10px 15px;
    margin: 15px 0;
}
.note-success {
    background: #d4edda;
    border-left: 4px solid #28a745;
    padding: 10px 15px;
    margin: 15px 0;
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
.zoom-toolbar label { font-weight: 500; font-size: 12px; }
.zoom-toolbar input[type="range"] { width: 120px; cursor: pointer; }
.zoom-toolbar .zoom-value { font-family: monospace; font-size: 12px; min-width: 45px; }
.zoom-toolbar button {
    padding: 4px 10px;
    font-size: 12px;
    cursor: pointer;
    border: 1px solid #ccc;
    background: #fff;
    border-radius: 3px;
}
.zoom-toolbar button:hover { background: #eee; }
#reportContent {
    transform-origin: top left;
    transition: transform 0.1s ease;
}
@media print {
    body { margin: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .no-print { display: none !important; }
}
`;
  function O(s, t = 4) {
    return s == null || isNaN(s) || Math.abs(s) < 1e-10 ? "0" : s.toFixed(t).replace(".", ",");
  }
  function j(s, t) {
    return `<span class="dvc">${s}<span class="dvl"></span>${t}</span>`;
  }
  function c(s) {
    return `<span class="eq">${s}</span>`;
  }
  function n(s, t) {
    return t ? `<var>${s}</var><sub>${t}</sub>` : `<var>${s}</var>`;
  }
  function ts(s, t = 4) {
    if (!s || !s.length) return "";
    let m = `<span class="matrix">
`;
    for (let g = 0; g < s.length; g++) {
      m += '<span class="tr"><span class="td"></span>';
      for (let k = 0; k < s[g].length; k++) m += `<span class="td">${O(s[g][k], t)}</span>`;
      m += `<span class="td"></span></span>
`;
    }
    return m += "</span>", m;
  }
  function $s(s) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
    const t = ((_a = s == null ? void 0 : s.nodes) == null ? void 0 : _a.val) || [], m = ((_b = s == null ? void 0 : s.elements) == null ? void 0 : _b.val) || [], g = ((_c = s == null ? void 0 : s.nodeInputs) == null ? void 0 : _c.val) || {}, k = ((_d = s == null ? void 0 : s.elementInputs) == null ? void 0 : _d.val) || {}, D = ((_e = s == null ? void 0 : s.deformOutputs) == null ? void 0 : _e.val) || {}, I = ((_f = s == null ? void 0 : s.analyzeOutputs) == null ? void 0 : _f.val) || {}, x = ((_g = k.elasticities) == null ? void 0 : _g.values().next().value) || 21e4, r = ((_h = k.poissonsRatios) == null ? void 0 : _h.values().next().value) || 0.3, X = ((_i = k.thicknesses) == null ? void 0 : _i.values().next().value) || 0.2, z = x / (2 * (1 + r)), p = x * Math.pow(X, 3) / (12 * (1 - r * r)), e = t.map((o) => o[0]), b = t.map((o) => o[1]), h = e.length ? Math.max(...e) - Math.min(...e) : 10, u = b.length ? Math.max(...b) - Math.min(...b) : 15;
    let v = 0;
    D.deformations && D.deformations.forEach((o) => {
      Math.abs(o[2]) > Math.abs(v) && (v = o[2]);
    });
    let y = 0;
    I.bendingXX && I.bendingXX.forEach((o) => {
      const f = o.reduce((w, F) => w + F, 0) / o.length;
      Math.abs(f) > Math.abs(y) && (y = f);
    });
    const S = t.length, d = m.length, l = ((_j = g.supports) == null ? void 0 : _j.size) || 0, a = S * 6, M = a - l * 6, R = [
      [
        p,
        p * r,
        0
      ],
      [
        p * r,
        p,
        0
      ],
      [
        0,
        0,
        p * (1 - r) / 2
      ]
    ], N = `
<style>${ys}</style>

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
window.updateZoom = function(value) {
  const zoom = parseInt(value);
  document.getElementById('zoomValue').textContent = zoom + '%';
  document.getElementById('zoomSlider').value = zoom;
  const content = document.getElementById('reportContent');
  if (content) content.style.transform = 'scale(' + (zoom / 100) + ')';
};
window.setZoom = function(value) { updateZoom(value); };
<\/script>

<div id="reportContent">
<h1>EXPLICACI\xD3N DEL C\xD3DIGO - Plate Shell Thin</h1>
<p><strong>An\xE1lisis de Placa Rectangular por Elementos Finitos</strong></p>
<p>Este documento explica en detalle c\xF3mo funciona el c\xF3digo de Awatif para an\xE1lisis de placas.</p>
<hr/>

<h2>1. DATOS DE ENTRADA</h2>

<h3>1.1 Par\xE1metros Geom\xE9tricos</h3>
<table class="bordered">
  <tr><th>Par\xE1metro</th><th>S\xEDmbolo</th><th>Valor</th><th>Descripci\xF3n</th></tr>
  <tr><td>Ancho</td><td>${c(n("B"))}</td><td>${c(`<b>${O(h, 2)}</b>`)}</td><td>Dimensi\xF3n en direcci\xF3n X</td></tr>
  <tr><td>Largo</td><td>${c(n("L"))}</td><td>${c(`<b>${O(u, 2)}</b>`)}</td><td>Dimensi\xF3n en direcci\xF3n Y</td></tr>
  <tr><td>Espesor</td><td>${c(n("t"))}</td><td>${c(`<b>${O(X, 4)}</b>`)}</td><td>Espesor de la placa</td></tr>
</table>

<h3>1.2 Propiedades del Material</h3>
<table class="bordered">
  <tr><th>Propiedad</th><th>S\xEDmbolo</th><th>Valor</th><th>Unidad</th></tr>
  <tr><td>M\xF3dulo de Elasticidad</td><td>${c(n("E"))}</td><td>${c(`<b>${O(x, 0)}</b>`)}</td><td>MPa</td></tr>
  <tr><td>Coeficiente de Poisson</td><td>${c(n("\u03BD"))}</td><td>${c(`<b>${O(r, 2)}</b>`)}</td><td>-</td></tr>
</table>

<h3>1.3 Propiedades Derivadas</h3>
<p><b>M\xF3dulo de Corte:</b></p>
<p>${c(`${n("G")} = ${j(n("E"), `2\xB7(1 + ${n("\u03BD")})`)} = ${j(O(x, 0), `2\xB7(1 + ${O(r, 2)})`)} = <b>${O(z, 2)}</b>`)}</p>

<p><b>Rigidez a Flexi\xF3n:</b></p>
<p>${c(`${n("D")} = ${j(`${n("E")}\xB7${n("t")}<sup>3</sup>`, `12\xB7(1 - ${n("\u03BD")}<sup>2</sup>)`)} = ${j(`${O(x, 0)}\xB7${O(X, 4)}<sup>3</sup>`, `12\xB7(1 - ${O(r, 2)}<sup>2</sup>)`)} = <b>${O(p, 6)}</b>`)}</p>

<hr/>

<h2>2. FLUJO DE DATOS EN EL C\xD3DIGO</h2>

<div class="note-info">
<strong>Arquitectura:</strong> El c\xF3digo sigue el patr\xF3n <b>Init \u2192 Update \u2192 Events</b> de VanJS para reactividad.
</div>

<h3>2.1 Estructura de Datos Principal (mesh)</h3>
<div class="code-block"><span class="comment">// TypeScript - main.ts</span>
<span class="keyword">const</span> mesh: <span class="type">Mesh</span> = {
  nodes: van.<span class="function">state</span>([]),           <span class="comment">// Coordenadas [x, y, z]</span>
  elements: van.<span class="function">state</span>([]),        <span class="comment">// Conectividad [n1, n2, n3]</span>
  nodeInputs: van.<span class="function">state</span>({}),      <span class="comment">// Apoyos y cargas</span>
  elementInputs: van.<span class="function">state</span>({}),   <span class="comment">// Propiedades de material</span>
  deformOutputs: van.<span class="function">state</span>({}),   <span class="comment">// Desplazamientos (resultado)</span>
  analyzeOutputs: van.<span class="function">state</span>({}),  <span class="comment">// Momentos (resultado)</span>
};</div>

<p><b>Estado actual:</b></p>
<ul>
  <li>N\xFAmero de nodos: ${c(`${n("n", "j")} = <b>${S}</b>`)}</li>
  <li>N\xFAmero de elementos: ${c(`${n("n", "e")} = <b>${d}</b>`)}</li>
  <li>Nodos con apoyo: ${c(`${n("n", "s")} = <b>${l}</b>`)}</li>
  <li>Total DOF: ${c(`6 \xB7 ${n("n", "j")} = 6 \xB7 ${S} = <b>${a}</b>`)}</li>
  <li>DOF libres: ${c(`${a} - 6 \xB7 ${l} = <b>${M}</b>`)}</li>
</ul>

<hr/>

<h2>3. FUNCI\xD3N getMesh() - Generaci\xF3n de Malla</h2>

<div class="function-box">
  <h4>\u{1F4E6} awatif-mesh/src/getMesh.ts</h4>
  <p><strong>Prop\xF3sito:</strong> Genera una malla triangular 2D usando triangulaci\xF3n de Delaunay</p>
  <p><strong>Librer\xEDa:</strong> <code>triangle-wasm</code> (algoritmo de Shewchuk)</p>
</div>

<h3>3.1 Llamada en main.ts</h3>
<div class="code-block"><span class="keyword">const</span> { nodes, elements, boundaryIndices } = <span class="function">getMesh</span>({
  points: [
    [<span class="number">0</span>, <span class="number">0</span>, <span class="number">0</span>],      <span class="comment">// Esquina inferior izquierda</span>
    [B, <span class="number">0</span>, <span class="number">0</span>],      <span class="comment">// Esquina inferior derecha</span>
    [B, L, <span class="number">0</span>],      <span class="comment">// Esquina superior derecha</span>
    [<span class="number">0</span>, L, <span class="number">0</span>],      <span class="comment">// Esquina superior izquierda</span>
  ],
  polygon: [<span class="number">0</span>, <span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>],  <span class="comment">// \xCDndices del pol\xEDgono cerrado</span>
  maxMeshSize: meshSize,   <span class="comment">// Tama\xF1o m\xE1ximo de elemento</span>
});</div>

<h3>3.2 C\xF3digo Interno de getMesh.ts</h3>
<div class="code-block"><span class="comment">// awatif-mesh/src/getMesh.ts</span>
<span class="keyword">import</span> Triangle <span class="keyword">from</span> <span class="string">"triangle-wasm"</span>;

<span class="keyword">export function</span> <span class="function">getMesh</span>(options: <span class="type">MeshOptions</span>): <span class="type">MeshResult</span> {
  <span class="keyword">const</span> { points, polygon, maxMeshSize } = options;

  <span class="comment">// Preparar input para Triangle (formato plano)</span>
  <span class="keyword">const</span> input = {
    pointList: points.<span class="function">map</span>(p => [p[<span class="number">0</span>], p[<span class="number">1</span>]]).<span class="function">flat</span>(),
    segmentList: polygon.<span class="function">map</span>((_, i) => [i, (i + <span class="number">1</span>) % polygon.length]).<span class="function">flat</span>(),
  };

  <span class="comment">// Opciones de triangulaci\xF3n:</span>
  <span class="comment">// p = usa pol\xEDgono como restricci\xF3n</span>
  <span class="comment">// q = calidad (\xE1ngulos m\xEDnimos > 20\xB0)</span>
  <span class="comment">// a = \xE1rea m\xE1xima del elemento</span>
  <span class="keyword">const</span> triangleOptions = \`pq20a\${maxMeshSize * maxMeshSize}\`;

  <span class="comment">// Ejecutar triangulaci\xF3n (WebAssembly - muy r\xE1pido)</span>
  <span class="keyword">const</span> output = Triangle.<span class="function">triangulate</span>(input, triangleOptions);

  <span class="comment">// Extraer nodos (agregar z=0 para 3D)</span>
  <span class="keyword">const</span> nodes: <span class="type">number</span>[][] = [];
  <span class="keyword">for</span> (<span class="keyword">let</span> i = <span class="number">0</span>; i < output.pointList.length; i += <span class="number">2</span>) {
    nodes.<span class="function">push</span>([output.pointList[i], output.pointList[i+<span class="number">1</span>], <span class="number">0</span>]);
  }

  <span class="comment">// Extraer elementos (tri\xE1ngulos)</span>
  <span class="keyword">const</span> elements: <span class="type">number</span>[][] = [];
  <span class="keyword">for</span> (<span class="keyword">let</span> i = <span class="number">0</span>; i < output.triangleList.length; i += <span class="number">3</span>) {
    elements.<span class="function">push</span>([
      output.triangleList[i],
      output.triangleList[i+<span class="number">1</span>],
      output.triangleList[i+<span class="number">2</span>]
    ]);
  }

  <span class="comment">// Identificar nodos en el borde (para condiciones de contorno)</span>
  <span class="keyword">const</span> boundaryIndices = <span class="function">findBoundaryNodes</span>(output);

  <span class="keyword">return</span> { nodes, elements, boundaryIndices };
}</div>

<div class="note">
<strong>Algoritmo Triangle:</strong> Implementa triangulaci\xF3n de Delaunay con restricciones.
Garantiza que ning\xFAn \xE1ngulo sea menor a 20\xB0 (opci\xF3n q20), lo que mejora la precisi\xF3n del FEM.
</div>

<hr/>

<h2>4. FUNCI\xD3N deform() - C\xE1lculo de Deformaciones</h2>

<div class="function-box">
  <h4>\u{1F4E6} awatif-fem/src/deform.ts</h4>
  <p><strong>Prop\xF3sito:</strong> Resuelve el sistema de ecuaciones de elementos finitos</p>
  <p><strong>Backend:</strong> C++ compilado a WebAssembly (Eigen library)</p>
</div>

<h3>4.1 Ecuaci\xF3n Fundamental</h3>
<p>El m\xE9todo de elementos finitos resuelve el sistema matricial:</p>
<p style="font-size: 14pt; text-align: center;">${c("<b>[K]</b> \xB7 <b>{U}</b> = <b>{F}</b>")}</p>

<p>Donde:</p>
<ul>
  <li>${c("<b>[K]</b>")} = Matriz de rigidez global (${a} \xD7 ${a})</li>
  <li>${c("<b>{U}</b>")} = Vector de desplazamientos nodales (${a} \xD7 1)</li>
  <li>${c("<b>{F}</b>")} = Vector de fuerzas nodales (${a} \xD7 1)</li>
</ul>

<h3>4.2 Grados de Libertad por Nodo</h3>
<p>Cada nodo tiene 6 DOF para elemento shell:</p>
<table class="bordered">
  <tr><th>DOF</th><th>S\xEDmbolo</th><th>Descripci\xF3n</th></tr>
  <tr><td>1</td><td>${c(n("u", "x"))}</td><td>Desplazamiento en X (membrana)</td></tr>
  <tr><td>2</td><td>${c(n("u", "y"))}</td><td>Desplazamiento en Y (membrana)</td></tr>
  <tr><td>3</td><td>${c(n("u", "z"))}</td><td>Desplazamiento en Z (flexi\xF3n)</td></tr>
  <tr><td>4</td><td>${c(n("\u03B8", "x"))}</td><td>Rotaci\xF3n alrededor de X</td></tr>
  <tr><td>5</td><td>${c(n("\u03B8", "y"))}</td><td>Rotaci\xF3n alrededor de Y</td></tr>
  <tr><td>6</td><td>${c(n("\u03B8", "z"))}</td><td>Rotaci\xF3n alrededor de Z (drilling)</td></tr>
</table>

<h3>4.3 Matriz Constitutiva de Flexi\xF3n</h3>
<p>Para teor\xEDa de placas de Mindlin-Reissner:</p>
<p>${c(`<b>[D<sub>b</sub>]</b> = ${n("D")} \xB7 ${ts([
      [
        1,
        r,
        0
      ],
      [
        r,
        1,
        0
      ],
      [
        0,
        0,
        (1 - r) / 2
      ]
    ], 2)}`)}</p>
<p>Con los valores actuales:</p>
<p>${c(`<b>[D<sub>b</sub>]</b> = ${ts(R, 4)}`)}</p>

<h3>4.4 C\xF3digo TypeScript (Wrapper)</h3>
<div class="code-block"><span class="comment">// awatif-fem/src/deform.ts</span>
<span class="keyword">import</span> { deformCpp } <span class="keyword">from</span> <span class="string">"./cpp/built/deform.js"</span>;

<span class="keyword">export function</span> <span class="function">deform</span>(
  nodes: <span class="type">number</span>[][],
  elements: <span class="type">number</span>[][],
  nodeInputs: <span class="type">NodeInputs</span>,
  elementInputs: <span class="type">ElementInputs</span>
): <span class="type">DeformOutputs</span> {

  <span class="comment">// Preparar datos para C++ (formato plano)</span>
  <span class="keyword">const</span> nodesFlat = nodes.<span class="function">flat</span>();
  <span class="keyword">const</span> elementsFlat = elements.<span class="function">flat</span>();

  <span class="comment">// Extraer propiedades de material</span>
  <span class="keyword">const</span> elasticities = <span class="type">Array</span>.<span class="function">from</span>(elementInputs.elasticities.<span class="function">values</span>());
  <span class="keyword">const</span> thicknesses = <span class="type">Array</span>.<span class="function">from</span>(elementInputs.thicknesses.<span class="function">values</span>());
  <span class="keyword">const</span> poissonsRatios = <span class="type">Array</span>.<span class="function">from</span>(elementInputs.poissonsRatios.<span class="function">values</span>());
  <span class="keyword">const</span> shearModuli = <span class="type">Array</span>.<span class="function">from</span>(elementInputs.shearModuli.<span class="function">values</span>());

  <span class="comment">// Extraer condiciones de contorno</span>
  <span class="keyword">const</span> supports = <span class="function">serializeSupports</span>(nodeInputs.supports);
  <span class="keyword">const</span> loads = <span class="function">serializeLoads</span>(nodeInputs.loads);

  <span class="comment">// \u2605 Llamar al solver C++ (WebAssembly) \u2605</span>
  <span class="keyword">const</span> result = <span class="function">deformCpp</span>(
    nodesFlat, elementsFlat,
    elasticities, thicknesses, poissonsRatios, shearModuli,
    supports, loads
  );

  <span class="comment">// Convertir resultado a formato TypeScript</span>
  <span class="keyword">return</span> {
    deformations: <span class="function">reshapeDeformations</span>(result.U, nodes.length),
    reactions: <span class="function">reshapeReactions</span>(result.R, nodes.length),
  };
}</div>

<h3>4.5 C\xF3digo C++ (WebAssembly)</h3>
<div class="code-block"><span class="comment">// awatif-fem/src/cpp/deform.cpp</span>
<span class="comment">// Compilado con Emscripten a deform.wasm</span>

<span class="keyword">#include</span> <span class="string">&lt;Eigen/Sparse&gt;</span>
<span class="keyword">#include</span> <span class="string">&lt;Eigen/SparseLU&gt;</span>

<span class="keyword">void</span> <span class="function">assembleStiffnessMatrix</span>(
    <span class="keyword">const</span> std::vector&lt;std::array&lt;<span class="type">double</span>, <span class="number">3</span>&gt;&gt;&amp; nodes,
    <span class="keyword">const</span> std::vector&lt;std::array&lt;<span class="type">int</span>, <span class="number">3</span>&gt;&gt;&amp; elements,
    <span class="type">double</span> E, <span class="type">double</span> nu, <span class="type">double</span> thickness, <span class="type">double</span> G,
    Eigen::SparseMatrix&lt;<span class="type">double</span>&gt;&amp; K
) {
    <span class="comment">// Rigidez a flexi\xF3n D = E\xB7t\xB3/[12(1-\u03BD\xB2)]</span>
    <span class="type">double</span> D = E * <span class="function">pow</span>(thickness, <span class="number">3</span>) / (<span class="number">12.0</span> * (<span class="number">1.0</span> - nu * nu));

    <span class="comment">// Factor de correcci\xF3n de corte (Mindlin-Reissner)</span>
    <span class="type">double</span> kappa = <span class="number">5.0</span> / <span class="number">6.0</span>;
    <span class="type">double</span> Ds = kappa * G * thickness;

    <span class="comment">// Matriz constitutiva de flexi\xF3n [Db]</span>
    Eigen::Matrix3d Db;
    Db &lt;&lt; <span class="number">1</span>,  nu, <span class="number">0</span>,
          nu, <span class="number">1</span>,  <span class="number">0</span>,
          <span class="number">0</span>,  <span class="number">0</span>,  (<span class="number">1</span>-nu)/<span class="number">2</span>;
    Db *= D;

    <span class="comment">// Matriz constitutiva de corte [Ds]</span>
    Eigen::Matrix2d DsMatrix;
    DsMatrix &lt;&lt; Ds, <span class="number">0</span>,
                <span class="number">0</span>,  Ds;

    <span class="keyword">for</span> (<span class="type">size_t</span> e = <span class="number">0</span>; e &lt; elements.<span class="function">size</span>(); e++) {
        <span class="comment">// Obtener coordenadas del tri\xE1ngulo</span>
        <span class="keyword">auto</span> [n1, n2, n3] = elements[e];

        <span class="type">double</span> x1 = nodes[n1][<span class="number">0</span>], y1 = nodes[n1][<span class="number">1</span>];
        <span class="type">double</span> x2 = nodes[n2][<span class="number">0</span>], y2 = nodes[n2][<span class="number">1</span>];
        <span class="type">double</span> x3 = nodes[n3][<span class="number">0</span>], y3 = nodes[n3][<span class="number">1</span>];

        <span class="comment">// \xC1rea del tri\xE1ngulo</span>
        <span class="type">double</span> area = <span class="number">0.5</span> * <span class="function">abs</span>((x2-x1)*(y3-y1) - (x3-x1)*(y2-y1));

        <span class="comment">// Matriz B de deformaci\xF3n-desplazamiento</span>
        Eigen::MatrixXd Bb = <span class="function">computeBendingBMatrix</span>(x1, y1, x2, y2, x3, y3);
        Eigen::MatrixXd Bs = <span class="function">computeShearBMatrix</span>(x1, y1, x2, y2, x3, y3);

        <span class="comment">// Matriz de rigidez del elemento (18\xD718)</span>
        <span class="comment">// Ke = \u222B\u222B Bb'\xB7Db\xB7Bb dA + \u222B\u222B Bs'\xB7Ds\xB7Bs dA</span>
        Eigen::MatrixXd Ke = Bb.<span class="function">transpose</span>() * Db * Bb * area
                           + Bs.<span class="function">transpose</span>() * DsMatrix * Bs * area;

        <span class="comment">// Ensamblar en matriz global K</span>
        <span class="function">assembleToGlobal</span>(K, Ke, n1, n2, n3);
    }
}

<span class="keyword">void</span> <span class="function">solveSystem</span>(
    Eigen::SparseMatrix&lt;<span class="type">double</span>&gt;&amp; K,
    Eigen::VectorXd&amp; F,
    Eigen::VectorXd&amp; U,
    <span class="keyword">const</span> std::vector&lt;<span class="type">int</span>&gt;&amp; fixedDOFs
) {
    <span class="comment">// Aplicar condiciones de contorno (m\xE9todo de penalizaci\xF3n)</span>
    <span class="type">double</span> penalty = <span class="number">1e20</span>;
    <span class="keyword">for</span> (<span class="type">int</span> dof : fixedDOFs) {
        K.<span class="function">coeffRef</span>(dof, dof) += penalty;
        F(dof) = <span class="number">0</span>;
    }

    <span class="comment">// Solver LU disperso (Eigen)</span>
    Eigen::SparseLU&lt;Eigen::SparseMatrix&lt;<span class="type">double</span>&gt;&gt; solver;
    solver.<span class="function">compute</span>(K);

    <span class="keyword">if</span> (solver.<span class="function">info</span>() != Eigen::Success) {
        <span class="keyword">throw</span> std::<span class="function">runtime_error</span>(<span class="string">"Factorizaci\xF3n LU fall\xF3"</span>);
    }

    U = solver.<span class="function">solve</span>(F);
}</div>

<div class="note-success">
<strong>Rendimiento:</strong> El c\xF3digo C++ compilado a WebAssembly es ~10-20x m\xE1s r\xE1pido
que JavaScript puro para operaciones matriciales. Usa la librer\xEDa Eigen para \xE1lgebra lineal optimizada.
</div>

<hr/>

<h2>5. FUNCI\xD3N analyze() - C\xE1lculo de Momentos</h2>

<div class="function-box">
  <h4>\u{1F4E6} awatif-fem/src/analyze.ts</h4>
  <p><strong>Prop\xF3sito:</strong> Calcula momentos flectores a partir de los desplazamientos</p>
</div>

<h3>5.1 Ecuaciones de Momentos Flectores</h3>
<p>Las curvaturas se calculan a partir de los desplazamientos:</p>
<p>${c(`${n("\u03BA", "xx")} = -${j(`\u2202<sup>2</sup>${n("w")}`, `\u2202${n("x")}<sup>2</sup>`)}`)}</p>
<p>${c(`${n("\u03BA", "yy")} = -${j(`\u2202<sup>2</sup>${n("w")}`, `\u2202${n("y")}<sup>2</sup>`)}`)}</p>
<p>${c(`${n("\u03BA", "xy")} = -2\xB7${j(`\u2202<sup>2</sup>${n("w")}`, `\u2202${n("x")}\u2202${n("y")}`)}`)}</p>

<p>Los momentos flectores (por unidad de longitud) son:</p>
<p>${c(`${n("M", "xx")} = ${n("D")}\xB7(${n("\u03BA", "xx")} + ${n("\u03BD")}\xB7${n("\u03BA", "yy")})`)}</p>
<p>${c(`${n("M", "yy")} = ${n("D")}\xB7(${n("\u03BA", "yy")} + ${n("\u03BD")}\xB7${n("\u03BA", "xx")})`)}</p>
<p>${c(`${n("M", "xy")} = ${n("D")}\xB7(1 - ${n("\u03BD")})\xB7${j(n("\u03BA", "xy"), "2")}`)}</p>

<h3>5.2 C\xF3digo TypeScript</h3>
<div class="code-block"><span class="comment">// awatif-fem/src/analyze.ts</span>

<span class="keyword">export function</span> <span class="function">analyze</span>(
  nodes: <span class="type">number</span>[][],
  elements: <span class="type">number</span>[][],
  elementInputs: <span class="type">ElementInputs</span>,
  deformOutputs: <span class="type">DeformOutputs</span>
): <span class="type">AnalyzeOutputs</span> {

  <span class="keyword">const</span> bendingXX: <span class="type">Map</span>&lt;<span class="type">number</span>, <span class="type">number</span>[]&gt; = <span class="keyword">new</span> <span class="type">Map</span>();
  <span class="keyword">const</span> bendingYY: <span class="type">Map</span>&lt;<span class="type">number</span>, <span class="type">number</span>[]&gt; = <span class="keyword">new</span> <span class="type">Map</span>();
  <span class="keyword">const</span> bendingXY: <span class="type">Map</span>&lt;<span class="type">number</span>, <span class="type">number</span>[]&gt; = <span class="keyword">new</span> <span class="type">Map</span>();

  <span class="keyword">for</span> (<span class="keyword">let</span> e = <span class="number">0</span>; e &lt; elements.length; e++) {
    <span class="keyword">const</span> [n1, n2, n3] = elements[e];
    <span class="keyword">const</span> thickness = elementInputs.thicknesses.<span class="function">get</span>(e) || <span class="number">0.1</span>;
    <span class="keyword">const</span> E = elementInputs.elasticities.<span class="function">get</span>(e) || <span class="number">200000</span>;
    <span class="keyword">const</span> nu = elementInputs.poissonsRatios.<span class="function">get</span>(e) || <span class="number">0.3</span>;

    <span class="comment">// Rigidez a flexi\xF3n</span>
    <span class="keyword">const</span> D = E * <span class="type">Math</span>.<span class="function">pow</span>(thickness, <span class="number">3</span>) / (<span class="number">12</span> * (<span class="number">1</span> - nu * nu));

    <span class="comment">// Obtener desplazamientos nodales del elemento</span>
    <span class="keyword">const</span> w1 = deformOutputs.deformations.<span class="function">get</span>(n1)?.[<span class="number">2</span>] || <span class="number">0</span>;
    <span class="keyword">const</span> w2 = deformOutputs.deformations.<span class="function">get</span>(n2)?.[<span class="number">2</span>] || <span class="number">0</span>;
    <span class="keyword">const</span> w3 = deformOutputs.deformations.<span class="function">get</span>(n3)?.[<span class="number">2</span>] || <span class="number">0</span>;

    <span class="comment">// Calcular curvaturas usando derivadas de funciones de forma</span>
    <span class="keyword">const</span> { kxx, kyy, kxy } = <span class="function">computeCurvatures</span>(
      nodes[n1], nodes[n2], nodes[n3],
      w1, w2, w3
    );

    <span class="comment">// Momentos flectores por unidad de longitud</span>
    <span class="keyword">const</span> Mxx = D * (kxx + nu * kyy);
    <span class="keyword">const</span> Myy = D * (kyy + nu * kxx);
    <span class="keyword">const</span> Mxy = D * (<span class="number">1</span> - nu) * kxy / <span class="number">2</span>;

    <span class="comment">// Guardar resultados (3 puntos de Gauss por elemento)</span>
    bendingXX.<span class="function">set</span>(e, [Mxx, Mxx, Mxx]);
    bendingYY.<span class="function">set</span>(e, [Myy, Myy, Myy]);
    bendingXY.<span class="function">set</span>(e, [Mxy, Mxy, Mxy]);
  }

  <span class="keyword">return</span> { bendingXX, bendingYY, bendingXY };
}</div>

<hr/>

<h2>6. ARCHIVOS FUENTE DE AWATIF</h2>

<table class="bordered">
  <tr><th>Funci\xF3n</th><th>Archivo</th><th>Lenguaje</th><th>Descripci\xF3n</th></tr>
  <tr>
    <td><code>getMesh()</code></td>
    <td>awatif-mesh/src/getMesh.ts</td>
    <td>TypeScript</td>
    <td>Wrapper para Triangle WASM</td>
  </tr>
  <tr>
    <td><code>Triangle</code></td>
    <td>triangle-wasm (npm)</td>
    <td>C \u2192 WASM</td>
    <td>Triangulaci\xF3n de Delaunay</td>
  </tr>
  <tr>
    <td><code>deform()</code></td>
    <td>awatif-fem/src/deform.ts</td>
    <td>TypeScript</td>
    <td>Wrapper para solver C++</td>
  </tr>
  <tr>
    <td><code>deformCpp()</code></td>
    <td>awatif-fem/src/cpp/deform.cpp</td>
    <td>C++ \u2192 WASM</td>
    <td>Solver FEM (Eigen library)</td>
  </tr>
  <tr>
    <td><code>analyze()</code></td>
    <td>awatif-fem/src/analyze.ts</td>
    <td>TypeScript</td>
    <td>Post-proceso de momentos</td>
  </tr>
  <tr>
    <td><code>getViewer()</code></td>
    <td>awatif-ui/src/viewer/getViewer.ts</td>
    <td>TypeScript</td>
    <td>Visualizaci\xF3n 3D (Three.js)</td>
  </tr>
  <tr>
    <td><code>getParameters()</code></td>
    <td>awatif-ui/src/parameters/getParameters.ts</td>
    <td>TypeScript</td>
    <td>Panel UI (Tweakpane)</td>
  </tr>
</table>

<hr/>

<h2>7. RESULTADOS DEL AN\xC1LISIS</h2>

<h3>7.1 Informaci\xF3n de la Malla</h3>
<p>N\xFAmero de nodos: ${c(`${n("n", "j")} = <b>${S}</b>`)}</p>
<p>N\xFAmero de elementos: ${c(`${n("n", "e")} = <b>${d}</b>`)}</p>
<p>Grados de libertad totales: ${c(`<b>${a}</b>`)}</p>
<p>Grados de libertad libres: ${c(`<b>${M}</b>`)}</p>

<h3>7.2 Resultados de Desplazamiento</h3>
<p>Desplazamiento m\xE1ximo: ${c(`${n("w", "max")} = <span class="${Math.abs(v) > 1 ? "err" : "ok"}"><b>${O(v, 6)}</b></span>`)}</p>

<h3>7.3 Resultados de Momentos</h3>
<p>Momento m\xE1ximo ${n("M", "xx")}: ${c(`<b>${O(y, 4)}</b>`)}</p>

<hr/>

<h2>8. REFERENCIAS</h2>
<ul>
  <li><b>Awatif Documentation:</b> <a href="https://awatif.co">https://awatif.co</a></li>
  <li><b>Teor\xEDa de Placas:</b> Mindlin-Reissner (considera deformaci\xF3n por corte)</li>
  <li><b>Zienkiewicz, O.C.:</b> "The Finite Element Method" (7th Edition)</li>
  <li><b>Cook, R.D.:</b> "Concepts and Applications of Finite Element Analysis"</li>
  <li><b>Eigen Library:</b> <a href="https://eigen.tuxfamily.org">https://eigen.tuxfamily.org</a></li>
  <li><b>Triangle:</b> J.R. Shewchuk's triangulation library</li>
</ul>

<hr/>
<p style="text-align: center; color: #888; font-size: 9pt;">
  Generado con Awatif - Explicaci\xF3n del C\xF3digo<br>
  <a href="https://github.com/GiorgioBurbanelli89/awatif-ejemplos">github.com/GiorgioBurbanelli89/awatif-ejemplos</a>
</p>
</div>
`;
    return ns`${as(N)}`;
  }
  const Z = {
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
  }, Y = {
    nodes: L.state([]),
    elements: L.state([]),
    nodeInputs: L.state({}),
    elementInputs: L.state({}),
    deformOutputs: L.state({}),
    analyzeOutputs: L.state({})
  };
  L.derive(() => {
    const s = Z.ancho.value.val, t = Z.largo.value.val, m = Z.espesor.value.val, g = Z.moduloE.value.val, k = Z.poisson.value.val, D = Z.mallado.value.val, I = Z.carga.value.val, { nodes: x, elements: r, boundaryIndices: X } = us({
      points: [
        [
          0,
          0,
          0
        ],
        [
          s,
          0,
          0
        ],
        [
          s,
          t,
          0
        ],
        [
          0,
          t,
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
    Y.nodeInputs.val = {
      supports: new Map(X.map((p) => [
        p,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])),
      loads: new Map(x.map((p, e) => [
        e,
        [
          0,
          0,
          I,
          0,
          0,
          0
        ]
      ]))
    }, Y.nodes.val = x, Y.elements.val = r;
    const z = g / (2 * (1 + k));
    Y.elementInputs.val = {
      elasticities: new Map(r.map((p, e) => [
        e,
        g
      ])),
      elasticitiesOrthogonal: new Map(r.map((p, e) => [
        e,
        g
      ])),
      thicknesses: new Map(r.map((p, e) => [
        e,
        m
      ])),
      poissonsRatios: new Map(r.map((p, e) => [
        e,
        k
      ])),
      shearModuli: new Map(r.map((p, e) => [
        e,
        z
      ]))
    }, Y.deformOutputs.val = rs(x, r, Y.nodeInputs.val, Y.elementInputs.val), Y.analyzeOutputs.val = cs(x, r, Y.elementInputs.val, Y.deformOutputs.val);
  });
  const W = L.state(""), J = L.state(void 0);
  L.derive(() => {
    if (W.val === "Report") {
      const s = K({
        template: ss,
        data: Y
      });
      J.val = s;
    }
    if (W.val === "Code") {
      const s = K({
        template: $s,
        data: Y
      });
      J.val = s;
    }
    if (W.val === "Print") {
      const s = K({
        template: ss,
        data: Y
      }), t = window.open("", "_blank");
      if (t) {
        const m = (s == null ? void 0 : s.innerHTML) || "";
        t.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Plate Shell Thin - Report</title>
        </head>
        <body>
          ${m}
        </body>
        </html>
      `), t.document.close(), t.focus(), setTimeout(() => t.print(), 500);
      }
    }
  });
  document.body.append(ds(Z), os({
    mesh: Y,
    settingsObj: {
      nodes: false,
      deformedShape: true,
      loads: false,
      shellResults: "displacementZ"
    }
  }), ps(Y), ls({
    position: "bottom-center"
  }), ms({
    dialogBody: J
  }), is({
    clickedButton: W,
    buttons: [
      "Report",
      "Code",
      "Print"
    ],
    sourceCode: "https://github.com/GiorgioBurbanelli89/awatif-ejemplos/tree/master/plate-shell-thin",
    author: "https://github.com/GiorgioBurbanelli89"
  }));
});
