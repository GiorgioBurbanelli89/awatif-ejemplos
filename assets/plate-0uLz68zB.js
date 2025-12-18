import { x as W, v as B, g as Q, e as tt, b as et, d as ot } from "./styles-CWPU-Lqy.js";
import { d as nt, a as st, __tla as __tla_0 } from "./deformCpp-BprT8Kg9.js";
import { g as at } from "./getParameters-COCExR_5.js";
import { g as it } from "./getDialog-Dp-ldI_q.js";
import { g as D } from "./getReport-B2dSsEEo.js";
import { g as rt, __tla as __tla_1 } from "./getMesh-DmUdekin.js";
import { o as lt } from "./unsafe-html-ChtKbCv5.js";
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
  const pt = `
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
  function x(t, o = 4) {
    return t == null || isNaN(t) || Math.abs(t) < 1e-10 ? "0" : t.toFixed(o).replace(".", ",");
  }
  function m(t, o = 4) {
    return t == null || isNaN(t) || Math.abs(t) < 1e-10 ? "0" : t.toFixed(o);
  }
  function q(t, o) {
    return `<span class="dvc">${t}<span class="dvl"></span>${o}</span>`;
  }
  function w(t) {
    return `<span class="eq">${t}</span>`;
  }
  function e(t, o) {
    return o ? `<var>${t}</var><sub>${o}</sub>` : `<var>${t}</var>`;
  }
  function ct(t, o = 4) {
    if (!t || !t.length) return "";
    let h = `<span class="matrix">
`;
    for (let $ = 0; $ < t.length; $++) {
      h += '<span class="tr"><span class="td"></span>';
      for (let u = 0; u < t[$].length; u++) h += `<span class="td">${x(t[$][u], o)}</span>`;
      h += `<span class="td"></span></span>
`;
    }
    return h += "</span>", h;
  }
  function dt(t, o, h, $) {
    const C = 110 / Math.max(t, 1), F = (120 - 2 * 25) / Math.max(o, 1), T = Math.min(C, F), X = t * T, g = o * T, p = 25, b = 25;
    let f = '<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" style="width:160pt; height:120pt; font-family:Arial; font-size:9px;">';
    f += `<defs>
    <marker id="arrowStart" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
      <path d="M6,0 L0,3 L6,6" fill="none" stroke="#333" stroke-width="1"/>
    </marker>
    <marker id="arrowEnd" markerWidth="6" markerHeight="6" refX="0" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6" fill="none" stroke="#333" stroke-width="1"/>
    </marker>
  </defs>`, f += `<rect x="${p}" y="${b}" width="${X}" height="${g}" fill="#e8e8e8" stroke="#333" stroke-width="1.5"/>`;
    const r = 4, z = 5;
    for (let a = 0; a <= z; a++) {
      const n = p + X * a / z;
      f += `<polygon points="${n},${b + g} ${n - r},${b + g + r} ${n + r},${b + g + r}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let a = 0; a <= z; a++) {
      const n = b + g * a / z;
      f += `<polygon points="${p},${n} ${p - r},${n - r} ${p - r},${n + r}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let a = 0; a <= z; a++) {
      const n = b + g * a / z;
      f += `<polygon points="${p + X},${n} ${p + X + r},${n - r} ${p + X + r},${n + r}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let a = 0; a <= z; a++) {
      const n = p + X * a / z;
      f += `<polygon points="${n},${b} ${n - r},${b - r} ${n + r},${b - r}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    const v = 3;
    for (let a = 1; a <= v; a++) for (let n = 1; n <= v; n++) {
      const M = p + X * a / (v + 1), N = b + g * n / (v + 1);
      f += `<line x1="${M}" y1="${N - 8}" x2="${M}" y2="${N + 5}" stroke="#0066cc" stroke-width="1.2" marker-end="url(#arrowEnd)"/>`;
    }
    f += `<text x="${p + X / 2}" y="${b + g / 2 - 12}" text-anchor="middle" fill="#0066cc" font-style="italic">q</text>`;
    const I = b + g + 18;
    f += `<line x1="${p}" y1="${I}" x2="${p + X}" y2="${I}" stroke="#333" stroke-width="0.8" marker-start="url(#arrowStart)" marker-end="url(#arrowEnd)"/>`, f += `<text x="${p + X / 2}" y="${I + 10}" text-anchor="middle" font-style="italic">a</text>`;
    const s = p + X + 18;
    return f += `<line x1="${s}" y1="${b}" x2="${s}" y2="${b + g}" stroke="#333" stroke-width="0.8" marker-start="url(#arrowStart)" marker-end="url(#arrowEnd)"/>`, f += `<text x="${s + 8}" y="${b + g / 2 + 3}" font-style="italic">b</text>`, f += "</svg>", f;
  }
  function mt(t, o, h = 400) {
    if (!t.length || !o.length) return "<p>No mesh data</p>";
    const $ = t.map((s) => s[0]), u = t.map((s) => s[1]), E = Math.min(...$), k = Math.max(...$), C = Math.min(...u), F = Math.max(...u), T = k - E || 1, X = F - C || 1, g = h / Math.max(T, X), p = X * g, b = 20, f = 2.666667, r = 0.01, z = /* @__PURE__ */ new Set();
    t.forEach((s, a) => {
      (Math.abs(s[0] - E) < r || Math.abs(s[0] - k) < r || Math.abs(s[1] - C) < r || Math.abs(s[1] - F) < r) && z.add(a);
    });
    let v = `<svg viewbox="-20 -20 ${m(h + 2 * b, 0)} ${m(p + 2 * b, 6)}" xmlns="http://www.w3.org/2000/svg" version="1.1" style=" font-family: Segoe UI; font-size:10px; width:${h}pt; height:${m(p, 6)}pt">`;
    v += "<style>.joint{fill:orangeRed;} .support{stroke:red; stroke-width:1; fill:lightpink;} .element{stroke:seaGreen; stroke-width:1; fill:lime; fill-opacity:0.1; stroke-opacity:0.5}</style>", v += `<rect x="0" y="0" width="${h}" height="${m(p, 6)}" style="fill:yellow; fill-opacity:0.2" />`, o.forEach((s, a) => {
      const n = s.reduce((l, y) => l + t[y][0], 0) / s.length, M = s.reduce((l, y) => l + t[y][1], 0) / s.length, N = (n - E) * g, A = p - (M - C) * g, i = s.map((l) => {
        const y = (t[l][0] - E) * g, S = p - (t[l][1] - C) * g;
        return `${m(y, 6)},${m(S, 6)}`;
      }).join(" ");
      v += `<text x="${m(N, 6)}" y="${m(A + 4, 6)}" text-anchor="middle">${a + 1}</text>`, v += `<polygon points="${i}" class="element"/>`;
    });
    const I = 5.333333;
    return z.forEach((s) => {
      const a = (t[s][0] - E) * g, n = p - (t[s][1] - C) * g;
      (Math.abs(t[s][1] - C) < r || Math.abs(t[s][1] - F) < r) && (v += `<line x1="${m(a - 2 * I, 6)}" y1="${m(n, 6)}" x2="${m(a + 2 * I, 6)}" y2="${m(n, 6)}" class="support"/>`), (Math.abs(t[s][0] - E) < r || Math.abs(t[s][0] - k) < r) && (v += `<line x1="${m(a, 6)}" y1="${m(n - 2 * I, 6)}" x2="${m(a, 6)}" y2="${m(n + 2 * I, 6)}" class="support"/>`), v += `<circle cx="${m(a, 6)}" cy="${m(n, 6)}" r="${I}" class="support"/>`;
    }), t.forEach((s, a) => {
      const n = (s[0] - E) * g, M = p - (s[1] - C) * g;
      v += `<circle cx="${m(n, 6)}" cy="${m(M, 6)}" r="${f}" class="joint" />`, v += `<text x="${m(n + f * 2, 6)}" y="${m(M - f, 6)}" text-anchor="start">${a + 1}</text>`;
    }), v += "</svg>", v;
  }
  function ht(t, o, h, $ = 400, u = "w") {
    if (!t.length || !o.length || !h.length) return "";
    const E = t.map((i) => i[0]), k = t.map((i) => i[1]), C = Math.min(...E), F = Math.max(...E), T = Math.min(...k), X = Math.max(...k), g = F - C || 1, p = X - T || 1, b = $ / Math.max(g, p), f = p * b, r = 20, z = h.filter((i) => i !== void 0 && !isNaN(i));
    if (!z.length) return "";
    const v = Math.min(...z), I = Math.max(...z), s = Math.abs(I - v) || 1;
    function a(i) {
      const l = Math.max(0, Math.min(1, (i - v) / s));
      let y, S, Y;
      return l < 0.25 ? (y = 0, S = Math.floor(255 * l * 4), Y = 255) : l < 0.5 ? (y = 0, S = 255, Y = Math.floor(255 * (1 - (l - 0.25) * 4))) : l < 0.75 ? (y = Math.floor(255 * (l - 0.5) * 4), S = 255, Y = 0) : (y = 255, S = Math.floor(255 * (1 - (l - 0.75) * 4)), Y = 0), `rgb(${y},${S},${Y})`;
    }
    const n = `colorScale_${u.replace(/[^a-zA-Z0-9]/g, "")}`;
    let M = `<svg viewBox="-20 -20 ${$ + 80} ${f + 2 * r}" xmlns="http://www.w3.org/2000/svg" style="width:${$ + 80}pt; height:${m(f, 0)}pt; font-family:Arial; font-size:9px;">
<defs>
<linearGradient id="${n}" x1="0%" y1="100%" x2="0%" y2="0%">
<stop offset="0%" style="stop-color:#0000ff"/>
<stop offset="25%" style="stop-color:#00ffff"/>
<stop offset="50%" style="stop-color:#00ff00"/>
<stop offset="75%" style="stop-color:#ffff00"/>
<stop offset="100%" style="stop-color:#ff0000"/>
</linearGradient>
</defs>`;
    o.forEach((i) => {
      const l = i.reduce((Y, O) => Y + (h[O] || 0), 0) / i.length, y = a(l), S = i.map((Y) => {
        const O = (t[Y][0] - C) * b, P = f - (t[Y][1] - T) * b;
        return `${m(O, 6)},${m(P, 6)}`;
      }).join(" ");
      M += `<polygon points="${S}" fill="${y}" stroke="#333" stroke-width="0.3"/>`;
    });
    const N = $ + 10, A = f - 20;
    M += `<rect x="${N}" y="10" width="15" height="${m(A, 0)}" fill="url(#${n})" stroke="#333"/>`;
    for (let i = 0; i <= 5; i++) {
      const l = v + s * i / 5, y = 10 + A - A * i / 5;
      M += `<text x="${N + 20}" y="${m(y + 3, 0)}">${x(l, 4)}</text>`;
    }
    return M += `<text x="${N}" y="5">${u}</text>`, M += "</svg>", M;
  }
  function H(t, o, h, $ = 400, u = "M") {
    if (!t.length || !o.length) return "";
    const E = h.filter((i) => i !== void 0 && !isNaN(i));
    if (!E.length) return "<p><i>No data for contour map</i></p>";
    const k = t.map((i) => i[0]), C = t.map((i) => i[1]), F = Math.min(...k), T = Math.max(...k), X = Math.min(...C), g = Math.max(...C), p = T - F || 1, b = g - X || 1, f = $ / Math.max(p, b), r = b * f, z = 20, v = Math.min(...E), I = Math.max(...E), s = Math.abs(I - v) || 1;
    function a(i) {
      const l = Math.max(0, Math.min(1, (i - v) / s));
      let y, S, Y;
      return l < 0.25 ? (y = 0, S = Math.floor(255 * l * 4), Y = 255) : l < 0.5 ? (y = 0, S = 255, Y = Math.floor(255 * (1 - (l - 0.25) * 4))) : l < 0.75 ? (y = Math.floor(255 * (l - 0.5) * 4), S = 255, Y = 0) : (y = 255, S = Math.floor(255 * (1 - (l - 0.75) * 4)), Y = 0), `rgb(${y},${S},${Y})`;
    }
    const n = `colorScaleElem_${u.replace(/[^a-zA-Z0-9]/g, "")}`;
    let M = `<svg viewBox="-20 -20 ${$ + 80} ${r + 2 * z}" xmlns="http://www.w3.org/2000/svg" style="width:${$ + 80}pt; height:${m(r, 0)}pt; font-family:Arial; font-size:9px;">
<defs>
<linearGradient id="${n}" x1="0%" y1="100%" x2="0%" y2="0%">
<stop offset="0%" style="stop-color:#0000ff"/>
<stop offset="25%" style="stop-color:#00ffff"/>
<stop offset="50%" style="stop-color:#00ff00"/>
<stop offset="75%" style="stop-color:#ffff00"/>
<stop offset="100%" style="stop-color:#ff0000"/>
</linearGradient>
</defs>`;
    o.forEach((i, l) => {
      const y = h[l] || 0, S = a(y), Y = i.map((O) => {
        const P = (t[O][0] - F) * f, _ = r - (t[O][1] - X) * f;
        return `${m(P, 6)},${m(_, 6)}`;
      }).join(" ");
      M += `<polygon points="${Y}" fill="${S}" stroke="#333" stroke-width="0.3"/>`;
    });
    const N = $ + 10, A = r - 20;
    M += `<rect x="${N}" y="10" width="15" height="${m(A, 0)}" fill="url(#${n})" stroke="#333"/>`;
    for (let i = 0; i <= 5; i++) {
      const l = v + s * i / 5, y = 10 + A - A * i / 5;
      M += `<text x="${N + 20}" y="${m(y + 3, 0)}">${x(l, 4)}</text>`;
    }
    return M += `<text x="${N}" y="5">${u}</text>`, M += "</svg>", M;
  }
  function K(t) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
    console.log("Template Calcpad style called");
    const o = ((_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val) || [], h = ((_b = t == null ? void 0 : t.elements) == null ? void 0 : _b.val) || [], $ = ((_c = t == null ? void 0 : t.nodeInputs) == null ? void 0 : _c.val) || {}, u = ((_d = t == null ? void 0 : t.elementInputs) == null ? void 0 : _d.val) || {}, E = ((_e = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _e.val) || {}, k = ((_f = t == null ? void 0 : t.analyzeOutputs) == null ? void 0 : _f.val) || {}, C = ((_g = u.elasticities) == null ? void 0 : _g.values().next().value) || 100, F = ((_h = u.poissonsRatios) == null ? void 0 : _h.values().next().value) || 0.3, T = ((_i = u.thicknesses) == null ? void 0 : _i.values().next().value) || 1, X = ((_k = (_j = $.loads) == null ? void 0 : _j.values().next().value) == null ? void 0 : _k[2]) || -3, g = o.map((c) => c[0]), p = o.map((c) => c[1]), b = g.length ? Math.max(...g) - Math.min(...g) : 15, f = p.length ? Math.max(...p) - Math.min(...p) : 10, r = [];
    let z = 0, v = 0;
    E.deformations && E.deformations.forEach((c, d) => {
      r[d] = c[2] || 0, Math.abs(c[2]) > Math.abs(z) && (z = c[2], v = d);
    });
    const I = [], s = [], a = [], n = [], M = [], N = [];
    let A = 0, i = 0, l = 0, y = 0;
    k.bendingXX && k.bendingXX.forEach((c, d) => {
      const j = c.reduce((V, G) => V + G, 0) / c.length;
      I[d] = j, Math.abs(j) > Math.abs(A) && (A = j, i = d);
    }), k.bendingYY && k.bendingYY.forEach((c, d) => {
      const j = c.reduce((V, G) => V + G, 0) / c.length;
      s[d] = j, Math.abs(j) > Math.abs(l) && (l = j, y = d);
    }), k.bendingXY && k.bendingXY.forEach((c, d) => {
      const j = c.reduce((V, G) => V + G, 0) / c.length;
      a[d] = j;
    }), k.membraneXX && k.membraneXX.forEach((c, d) => {
      const j = c.reduce((V, G) => V + G, 0) / c.length;
      n[d] = j;
    }), k.membraneYY && k.membraneYY.forEach((c, d) => {
      const j = c.reduce((V, G) => V + G, 0) / c.length;
      M[d] = j;
    }), k.membraneXY && k.membraneXY.forEach((c, d) => {
      const j = c.reduce((V, G) => V + G, 0) / c.length;
      N[d] = j;
    });
    const S = C * Math.pow(T, 3) / (12 * (1 - F * F)), Y = [
      [
        S,
        S * F,
        0
      ],
      [
        S * F,
        S,
        0
      ],
      [
        0,
        0,
        S * (1 - F) / 2
      ]
    ], O = ((_l = $.supports) == null ? void 0 : _l.size) || 0, P = o.length, _ = h.length, J = `
<style>${pt}
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
<p>Plate dimensions - ${w(`${e("a")} = ${x(b, 1)}`)} m, ${w(`${e("b")} = ${x(f, 1)}`)} m</p>
<p>Thickness - ${w(`${e("t")} = ${x(T, 2)}`)} m</p>
<p>Load - ${w(`${e("q")} = ${x(Math.abs(X), 1)}`)} kN/m\xB2</p>
<p>Modulus of elasticity - ${w(`${e("E")} = ${x(C, 0)}`)} GPa</p>
<p>Poisson's ratio - ${w(`${e("\u03BD")} = ${x(F, 2)}`)}</p>
</td><td style="vertical-align:middle; padding-left:30px;">
${dt(b, f)}
</td></tr></table>

<h4>Finite element mesh</h4>
<p>We will use triangular finite elements with ${w(`${e("n")} = 18`)} DOFs (6 per node)</p>
<p>Total number of elements - ${w(`${e("n", "e")} = ${_}`)}</p>
<p>Total number of joints - ${w(`${e("n", "j")} = ${P}`)}</p>
<p>Supported joints count - ${w(`${e("n", "s")} = ${O}`)}</p>

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
${mt(o, h)}
</div>

<script>
(function() {
  const nodes = ${JSON.stringify(o)};
  const elements = ${JSON.stringify(h)};

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
<tr><th>Joint</th><th>${e("x")}</th><th>${e("y")}</th></tr>
${o.slice(0, 10).map((c, d) => `
<tr><td>${d + 1}</td><td>${x(c[0], 2)}</td><td>${x(c[1], 2)}</td></tr>
`).join("")}
${P > 10 ? `<tr><td colspan="3">... (${P - 10} more joints)</td></tr>` : ""}
</table>

<h4>Finite element formulation</h4>
<p><b>Shape functions</b></p>
<p>Linear shape functions for triangular element (area coordinates):</p>
<p>${w(`${e("N", "1")}(\u03BE,\u03B7) = 1 - \u03BE - \u03B7`)}</p>
<p>${w(`${e("N", "2")}(\u03BE,\u03B7) = \u03BE`)}</p>
<p>${w(`${e("N", "3")}(\u03BE,\u03B7) = \u03B7`)}</p>

<p><b>Constitutive matrix</b> (stress - strain relationship)</p>
<p>${w(`<b>${e("D")}</b> = ${q(`${e("E")} \xB7 ${e("t")}<sup>3</sup>`, `12 \xB7 (1 - ${e("\u03BD")}<sup>2</sup>)`)} \xB7 <b class="b1">[</b>1; ${e("\u03BD")}; 0 <b class="b0">|</b> ${e("\u03BD")}; 1; 0 <b class="b0">|</b> 0; 0; ${q(`1 - ${e("\u03BD")}`, "2")}<b class="b1">]</b>`)}</p>
<p>${w(`<b>${e("D")}</b> = ${q(`${x(C, 0)} \xB7 ${x(T, 2)}<sup>3</sup>`, `12 \xB7 (1 - ${x(F, 2)}<sup>2</sup>)`)} \xB7 <b class="b1">[</b>1; ${x(F, 2)}; 0 <b class="b0">|</b> ${x(F, 2)}; 1; 0 <b class="b0">|</b> 0; 0; ${q(`1 - ${x(F, 2)}`, "2")}<b class="b1">]</b> = ${ct(Y, 6)}`)}</p>

<p><b>Strain-displacement matrix</b></p>
<p>The bending strain-displacement matrix ${w(`${e("B", "b")}`)} (3\xD718) relates curvatures to nodal DOFs:</p>
<p>${w(`\u03BA = {${e("\u03BA", "xx")}, ${e("\u03BA", "yy")}, ${e("\u03BA", "xy")}}<sup>T</sup> = ${e("B", "b")} \xB7 ${e("u")}`)}</p>

<p><b>Element stiffness matrix</b></p>
<p>${w(`${e("K", "e")} = \u222B\u222B ${e("B")}<sup>T</sup> \xB7 ${e("D")} \xB7 ${e("B")} dA`)}</p>
<p>For shell elements: ${w(`${e("K", "e")} = ${e("K", "b")} + ${e("K", "s")} + ${e("K", "m")}`)}</p>
<p>(bending + shear + membrane)</p>

<h4>Solution</h4>
<p>Total degrees of freedom: ${w(`${P * 6}`)}</p>
<p>Free degrees of freedom: ${w(`${P * 6 - O * 6}`)}</p>
<p>Global system: ${w(`${e("K")} \xB7 ${e("U")} = ${e("F")}`)}</p>
<p>Solution method: LU decomposition</p>

<h4>Results</h4>
<p><b>Displacements</b></p>
<p>Maximum displacement: ${w(`${e("w", "max")} = <span class="${Math.abs(z) > 10 ? "err" : "ok"}">${x(z, 6)}</span>`)} at joint ${v + 1}</p>

<p>Nodal displacements</p>
<table class="bordered data">
<tr><th>Joint</th><th>${e("w")}</th><th>${e("\u03B8", "x")}</th><th>${e("\u03B8", "y")}</th></tr>
${E.deformations ? [
      ...E.deformations
    ].slice(0, 10).map(([c, d]) => `
<tr><td>${c + 1}</td><td>${x(d[2], 5)}</td><td>${x(d[3], 5)}</td><td>${x(d[4], 5)}</td></tr>
`).join("") : ""}
${(((_m = E.deformations) == null ? void 0 : _m.size) || 0) > 10 ? `<tr><td colspan="4">... (${(((_n = E.deformations) == null ? void 0 : _n.size) || 0) - 10} more)</td></tr>` : ""}
</table>

<p><b>Displacement contour map</b></p>
${ht(o, h, r, 400, "w")}
<p>${w(`${e("w")}(${q(e("a"), "2")}, ${q(e("b"), "2")}) = ${x(z, 6)}`)}</p>

<h4>Shell Results</h4>
<p><b>Bending moments</b></p>
<p>Maximum bending moment ${e("M", "x")}: ${w(`${e("M", "x,max")} = ${x(A, 4)}`)} kN\xB7m/m at element ${i + 1}</p>
<p>Maximum bending moment ${e("M", "y")}: ${w(`${e("M", "y,max")} = ${x(l, 4)}`)} kN\xB7m/m at element ${y + 1}</p>

${I.length > 0 ? `
<p>Element bending moments</p>
<table class="bordered data">
<tr><th>Element</th><th>${e("M", "x")}</th><th>${e("M", "y")}</th><th>${e("M", "xy")}</th></tr>
${h.slice(0, 10).map((c, d) => `
<tr><td>${d + 1}</td><td>${x(I[d] || 0, 4)}</td><td>${x(s[d] || 0, 4)}</td><td>${x(a[d] || 0, 4)}</td></tr>
`).join("")}
${_ > 10 ? `<tr><td colspan="4">... (${_ - 10} more elements)</td></tr>` : ""}
</table>

<p><b>Bending moment ${e("M", "x")} contour map</b></p>
${H(o, h, I, 400, "Mx")}

<p><b>Bending moment ${e("M", "y")} contour map</b></p>
${H(o, h, s, 400, "My")}
` : "<p><i>No shell results available</i></p>"}

${n.length > 0 ? `
<p><b>Membrane forces</b></p>
<table class="bordered data">
<tr><th>Element</th><th>${e("N", "x")}</th><th>${e("N", "y")}</th><th>${e("N", "xy")}</th></tr>
${h.slice(0, 10).map((c, d) => `
<tr><td>${d + 1}</td><td>${x(n[d] || 0, 4)}</td><td>${x(M[d] || 0, 4)}</td><td>${x(N[d] || 0, 4)}</td></tr>
`).join("")}
${_ > 10 ? `<tr><td colspan="4">... (${_ - 10} more elements)</td></tr>` : ""}
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
    return W`${lt(J)}`;
  }
  const Z = {
    xPosition: {
      value: B.state(15),
      min: 5,
      max: 20,
      label: "Posici\xF3n X",
      unit: "length"
    },
    Ex: {
      value: B.state(100),
      min: 50,
      max: 500,
      step: 10,
      label: "E (dir X)",
      unit: "stress"
    },
    Ey: {
      value: B.state(100),
      min: 50,
      max: 500,
      step: 10,
      label: "E (dir Y)",
      unit: "stress"
    },
    load: {
      value: B.state(-3),
      min: -10,
      max: 10,
      step: 1,
      label: "Carga",
      unit: "force"
    }
  }, R = {
    nodes: B.state([]),
    elements: B.state([]),
    nodeInputs: B.state({}),
    elementInputs: B.state({}),
    deformOutputs: B.state({}),
    analyzeOutputs: B.state({})
  };
  B.derive(() => {
    const { nodes: t, elements: o, boundaryIndices: h } = rt({
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
          Z.xPosition.value.val,
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
    R.nodeInputs.val = {
      supports: new Map(h.map(($) => [
        $,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])),
      loads: new Map(t.map(($, u) => [
        u,
        [
          0,
          0,
          Z.load.value.val,
          0,
          0,
          0
        ]
      ]))
    }, R.nodes.val = t, R.elements.val = o, R.elementInputs.val = {
      elasticities: new Map(o.map(($, u) => [
        u,
        Z.Ex.value.val
      ])),
      elasticitiesOrthogonal: new Map(o.map(($, u) => [
        u,
        Z.Ey.value.val
      ])),
      thicknesses: new Map(o.map(($, u) => [
        u,
        1
      ])),
      poissonsRatios: new Map(o.map(($, u) => [
        u,
        0.3
      ])),
      shearModuli: new Map(o.map(($, u) => [
        u,
        100
      ]))
    }, R.deformOutputs.val = nt(t, o, R.nodeInputs.val, R.elementInputs.val), R.analyzeOutputs.val = st(t, o, R.elementInputs.val, R.deformOutputs.val);
  });
  const L = B.state(""), U = B.state(void 0);
  B.derive(() => {
    if (console.log("clickedButton.val changed to:", L.val), L.val === "Report") {
      console.log("Report button clicked!");
      try {
        const t = D({
          template: K,
          data: R
        });
        console.log("getReport returned:", t), U.val = t;
      } catch (t) {
        console.error("Error generating report:", t);
      }
    }
    if (L.val === "Print") {
      const t = D({
        template: K,
        data: R
      }), o = window.open("", "_blank");
      if (o) {
        const h = (t == null ? void 0 : t.innerHTML) || "";
        o.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Plate FEM Report - Calcpad Style</title>
        </head>
        <body>
          ${h}
        </body>
        </html>
      `), o.document.close(), o.focus(), setTimeout(() => o.print(), 500);
      }
    }
  });
  document.body.append(at(Z), Q({
    mesh: R,
    settingsObj: {
      nodes: false,
      deformedShape: true,
      loads: false,
      shellResults: "displacementZ"
    }
  }), tt(R), et({
    position: "bottom-center"
  }), it({
    dialogBody: U
  }), ot({
    clickedButton: L,
    buttons: [
      "Report",
      "Print"
    ],
    sourceCode: "https://github.com/madil4/awatif/blob/main/examples/src/plate/main.ts",
    author: "https://www.linkedin.com/in/mahjoubmusaab/"
  }));
});
