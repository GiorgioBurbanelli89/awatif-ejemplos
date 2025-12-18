import { x as K, v as X, g as tt, e as et, b as ot, d as nt } from "./styles-CWPU-Lqy.js";
import { d as at, a as st, __tla as __tla_0 } from "./deformCpp-BprT8Kg9.js";
import { g as it } from "./getParameters-COCExR_5.js";
import { g as rt } from "./getDialog-Dp-ldI_q.js";
import { g as Z } from "./getReport-B2dSsEEo.js";
import { g as lt, __tla as __tla_1 } from "./getMesh-DmUdekin.js";
import { o as J } from "./unsafe-html-ChtKbCv5.js";
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
  function k(t, o = 4) {
    return t == null || isNaN(t) || Math.abs(t) < 1e-10 ? "0" : t.toFixed(o).replace(".", ",");
  }
  function f(t, o = 4) {
    return t == null || isNaN(t) || Math.abs(t) < 1e-10 ? "0" : t.toFixed(o);
  }
  function j(t, o) {
    return `<span class="dvc">${t}<span class="dvl"></span>${o}</span>`;
  }
  function M(t) {
    return `<span class="eq">${t}</span>`;
  }
  function n(t, o) {
    return o ? `<var>${t}</var><sub>${o}</sub>` : `<var>${t}</var>`;
  }
  function dt(t, o = 4) {
    if (!t || !t.length) return "";
    let u = `<span class="matrix">
`;
    for (let b = 0; b < t.length; b++) {
      u += '<span class="tr"><span class="td"></span>';
      for (let z = 0; z < t[b].length; z++) u += `<span class="td">${k(t[b][z], o)}</span>`;
      u += `<span class="td"></span></span>
`;
    }
    return u += "</span>", u;
  }
  function ct(t, o, u, b) {
    const y = 110 / Math.max(t, 1), g = (120 - 2 * 25) / Math.max(o, 1), A = Math.min(y, g), $ = t * A, s = o * A, e = 25, m = 25;
    let c = '<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" style="width:160pt; height:120pt; font-family:Arial; font-size:9px;">';
    c += `<defs>
    <marker id="arrowStart" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
      <path d="M6,0 L0,3 L6,6" fill="none" stroke="#333" stroke-width="1"/>
    </marker>
    <marker id="arrowEnd" markerWidth="6" markerHeight="6" refX="0" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6" fill="none" stroke="#333" stroke-width="1"/>
    </marker>
  </defs>`, c += `<rect x="${e}" y="${m}" width="${$}" height="${s}" fill="#e8e8e8" stroke="#333" stroke-width="1.5"/>`;
    const p = 4, d = 5;
    for (let r = 0; r <= d; r++) {
      const a = e + $ * r / d;
      c += `<polygon points="${a},${m + s} ${a - p},${m + s + p} ${a + p},${m + s + p}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let r = 0; r <= d; r++) {
      const a = m + s * r / d;
      c += `<polygon points="${e},${a} ${e - p},${a - p} ${e - p},${a + p}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let r = 0; r <= d; r++) {
      const a = m + s * r / d;
      c += `<polygon points="${e + $},${a} ${e + $ + p},${a - p} ${e + $ + p},${a + p}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let r = 0; r <= d; r++) {
      const a = e + $ * r / d;
      c += `<polygon points="${a},${m} ${a - p},${m - p} ${a + p},${m - p}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    const x = 3;
    for (let r = 1; r <= x; r++) for (let a = 1; a <= x; a++) {
      const w = e + $ * r / (x + 1), Y = m + s * a / (x + 1);
      c += `<line x1="${w}" y1="${Y - 8}" x2="${w}" y2="${Y + 5}" stroke="#0066cc" stroke-width="1.2" marker-end="url(#arrowEnd)"/>`;
    }
    c += `<text x="${e + $ / 2}" y="${m + s / 2 - 12}" text-anchor="middle" fill="#0066cc" font-style="italic">q</text>`;
    const S = m + s + 18;
    c += `<line x1="${e}" y1="${S}" x2="${e + $}" y2="${S}" stroke="#333" stroke-width="0.8" marker-start="url(#arrowStart)" marker-end="url(#arrowEnd)"/>`, c += `<text x="${e + $ / 2}" y="${S + 10}" text-anchor="middle" font-style="italic">B</text>`;
    const i = e + $ + 18;
    return c += `<line x1="${i}" y1="${m}" x2="${i}" y2="${m + s}" stroke="#333" stroke-width="0.8" marker-start="url(#arrowStart)" marker-end="url(#arrowEnd)"/>`, c += `<text x="${i + 8}" y="${m + s / 2 + 3}" font-style="italic">L</text>`, c += "</svg>", c;
  }
  function mt(t, o, u = 400) {
    if (!t.length || !o.length) return "<p>No mesh data</p>";
    const b = t.map((i) => i[0]), z = t.map((i) => i[1]), E = Math.min(...b), F = Math.max(...b), y = Math.min(...z), g = Math.max(...z), A = F - E || 1, $ = g - y || 1, s = u / Math.max(A, $), e = $ * s, m = 20, c = 2.666667, p = 0.01, d = /* @__PURE__ */ new Set();
    t.forEach((i, r) => {
      (Math.abs(i[0] - E) < p || Math.abs(i[0] - F) < p || Math.abs(i[1] - y) < p || Math.abs(i[1] - g) < p) && d.add(r);
    });
    let x = `<svg viewbox="-20 -20 ${f(u + 2 * m, 0)} ${f(e + 2 * m, 6)}" xmlns="http://www.w3.org/2000/svg" version="1.1" style="font-family:Segoe UI;font-size:10px;width:${u}pt;height:${f(e, 6)}pt">`;
    x += "<style>.joint{fill:orangeRed;}.support{stroke:red;stroke-width:1;fill:lightpink;}.element{stroke:seaGreen;stroke-width:1;fill:lime;fill-opacity:0.1;stroke-opacity:0.5}</style>", x += `<rect x="0" y="0" width="${u}" height="${f(e, 6)}" style="fill:yellow;fill-opacity:0.2"/>`, o.forEach((i, r) => {
      const a = i.reduce((h, v) => h + t[v][0], 0) / i.length, w = i.reduce((h, v) => h + t[v][1], 0) / i.length, Y = (a - E) * s, T = e - (w - y) * s, l = i.map((h) => {
        const v = (t[h][0] - E) * s, C = e - (t[h][1] - y) * s;
        return `${f(v, 6)},${f(C, 6)}`;
      }).join(" ");
      x += `<text x="${f(Y, 6)}" y="${f(T + 4, 6)}" text-anchor="middle">${r + 1}</text>`, x += `<polygon points="${l}" class="element"/>`;
    });
    const S = 5.333333;
    return d.forEach((i) => {
      const r = (t[i][0] - E) * s, a = e - (t[i][1] - y) * s;
      (Math.abs(t[i][1] - y) < p || Math.abs(t[i][1] - g) < p) && (x += `<line x1="${f(r - 2 * S, 6)}" y1="${f(a, 6)}" x2="${f(r + 2 * S, 6)}" y2="${f(a, 6)}" class="support"/>`), (Math.abs(t[i][0] - E) < p || Math.abs(t[i][0] - F) < p) && (x += `<line x1="${f(r, 6)}" y1="${f(a - 2 * S, 6)}" x2="${f(r, 6)}" y2="${f(a + 2 * S, 6)}" class="support"/>`), x += `<circle cx="${f(r, 6)}" cy="${f(a, 6)}" r="${S}" class="support"/>`;
    }), t.forEach((i, r) => {
      const a = (i[0] - E) * s, w = e - (i[1] - y) * s;
      x += `<circle cx="${f(a, 6)}" cy="${f(w, 6)}" r="${c}" class="joint"/>`, x += `<text x="${f(a + c * 2, 6)}" y="${f(w - c, 6)}" text-anchor="start">${r + 1}</text>`;
    }), x += "</svg>", x;
  }
  function ht(t, o, u, b = 400, z = "w") {
    if (!t.length || !o.length || !u.length) return "";
    const E = t.map((l) => l[0]), F = t.map((l) => l[1]), y = Math.min(...E), g = Math.max(...E), A = Math.min(...F), $ = Math.max(...F), s = g - y || 1, e = $ - A || 1, m = b / Math.max(s, e), c = e * m, p = 20, d = u.filter((l) => l !== void 0 && !isNaN(l));
    if (!d.length) return "";
    const x = Math.min(...d), S = Math.max(...d), i = Math.abs(S - x) || 1;
    function r(l) {
      const h = Math.max(0, Math.min(1, (l - x) / i));
      let v, C, I;
      return h < 0.25 ? (v = 0, C = Math.floor(255 * h * 4), I = 255) : h < 0.5 ? (v = 0, C = 255, I = Math.floor(255 * (1 - (h - 0.25) * 4))) : h < 0.75 ? (v = Math.floor(255 * (h - 0.5) * 4), C = 255, I = 0) : (v = 255, C = Math.floor(255 * (1 - (h - 0.75) * 4)), I = 0), `rgb(${v},${C},${I})`;
    }
    const a = `colorScale_${z.replace(/[^a-zA-Z0-9]/g, "")}`;
    let w = `<svg viewBox="-20 -20 ${b + 80} ${c + 2 * p}" xmlns="http://www.w3.org/2000/svg" style="width:${b + 80}pt;height:${f(c, 0)}pt;font-family:Arial;font-size:9px;">
<defs>
<linearGradient id="${a}" x1="0%" y1="100%" x2="0%" y2="0%">
<stop offset="0%" style="stop-color:#0000ff"/>
<stop offset="25%" style="stop-color:#00ffff"/>
<stop offset="50%" style="stop-color:#00ff00"/>
<stop offset="75%" style="stop-color:#ffff00"/>
<stop offset="100%" style="stop-color:#ff0000"/>
</linearGradient>
</defs>`;
    o.forEach((l) => {
      const h = l.reduce((I, D) => I + (u[D] || 0), 0) / l.length, v = r(h), C = l.map((I) => {
        const D = (t[I][0] - y) * m, B = c - (t[I][1] - A) * m;
        return `${f(D, 6)},${f(B, 6)}`;
      }).join(" ");
      w += `<polygon points="${C}" fill="${v}" stroke="#333" stroke-width="0.3"/>`;
    });
    const Y = b + 10, T = c - 20;
    w += `<rect x="${Y}" y="10" width="15" height="${f(T, 0)}" fill="url(#${a})" stroke="#333"/>`;
    for (let l = 0; l <= 5; l++) {
      const h = x + i * l / 5, v = 10 + T - T * l / 5;
      w += `<text x="${Y + 20}" y="${f(v + 3, 0)}">${k(h, 4)}</text>`;
    }
    return w += `<text x="${Y}" y="5">${z}</text>`, w += "</svg>", w;
  }
  function _(t, o, u, b = 400, z = "M") {
    if (!t.length || !o.length) return "";
    const E = u.filter((l) => l !== void 0 && !isNaN(l));
    if (!E.length) return "<p><i>No data for contour map</i></p>";
    const F = t.map((l) => l[0]), y = t.map((l) => l[1]), g = Math.min(...F), A = Math.max(...F), $ = Math.min(...y), s = Math.max(...y), e = A - g || 1, m = s - $ || 1, c = b / Math.max(e, m), p = m * c, d = 20, x = Math.min(...E), S = Math.max(...E), i = Math.abs(S - x) || 1;
    function r(l) {
      const h = Math.max(0, Math.min(1, (l - x) / i));
      let v, C, I;
      return h < 0.25 ? (v = 0, C = Math.floor(255 * h * 4), I = 255) : h < 0.5 ? (v = 0, C = 255, I = Math.floor(255 * (1 - (h - 0.25) * 4))) : h < 0.75 ? (v = Math.floor(255 * (h - 0.5) * 4), C = 255, I = 0) : (v = 255, C = Math.floor(255 * (1 - (h - 0.75) * 4)), I = 0), `rgb(${v},${C},${I})`;
    }
    const a = `colorScaleElem_${z.replace(/[^a-zA-Z0-9]/g, "")}`;
    let w = `<svg viewBox="-20 -20 ${b + 80} ${p + 2 * d}" xmlns="http://www.w3.org/2000/svg" style="width:${b + 80}pt;height:${f(p, 0)}pt;font-family:Arial;font-size:9px;">
<defs>
<linearGradient id="${a}" x1="0%" y1="100%" x2="0%" y2="0%">
<stop offset="0%" style="stop-color:#0000ff"/>
<stop offset="25%" style="stop-color:#00ffff"/>
<stop offset="50%" style="stop-color:#00ff00"/>
<stop offset="75%" style="stop-color:#ffff00"/>
<stop offset="100%" style="stop-color:#ff0000"/>
</linearGradient>
</defs>`;
    o.forEach((l, h) => {
      const v = u[h] || 0, C = r(v), I = l.map((D) => {
        const B = (t[D][0] - g) * c, V = p - (t[D][1] - $) * c;
        return `${f(B, 6)},${f(V, 6)}`;
      }).join(" ");
      w += `<polygon points="${I}" fill="${C}" stroke="#333" stroke-width="0.3"/>`;
    });
    const Y = b + 10, T = p - 20;
    w += `<rect x="${Y}" y="10" width="15" height="${f(T, 0)}" fill="url(#${a})" stroke="#333"/>`;
    for (let l = 0; l <= 5; l++) {
      const h = x + i * l / 5, v = 10 + T - T * l / 5;
      w += `<text x="${Y + 20}" y="${f(v + 3, 0)}">${k(h, 4)}</text>`;
    }
    return w += `<text x="${Y}" y="5">${z}</text>`, w += "</svg>", w;
  }
  function W(t) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    const o = ((_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val) || [], u = ((_b = t == null ? void 0 : t.elements) == null ? void 0 : _b.val) || [], b = ((_c = t == null ? void 0 : t.nodeInputs) == null ? void 0 : _c.val) || {}, z = ((_d = t == null ? void 0 : t.elementInputs) == null ? void 0 : _d.val) || {}, E = ((_e = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _e.val) || {}, F = ((_f = t == null ? void 0 : t.analyzeOutputs) == null ? void 0 : _f.val) || {}, y = ((_g = z.elasticities) == null ? void 0 : _g.values().next().value) || 21e4, g = ((_h = z.poissonsRatios) == null ? void 0 : _h.values().next().value) || 0.3, A = ((_i = z.thicknesses) == null ? void 0 : _i.values().next().value) || 0.2, $ = ((_k = (_j = b.loads) == null ? void 0 : _j.values().next().value) == null ? void 0 : _k[2]) || -10, s = o.map((R) => R[0]), e = o.map((R) => R[1]), m = s.length ? Math.max(...s) - Math.min(...s) : 10, c = e.length ? Math.max(...e) - Math.min(...e) : 15, p = y / (2 * (1 + g)), d = y * Math.pow(A, 3) / (12 * (1 - g * g)), x = [];
    let S = 0, i = 0;
    E.deformations && E.deformations.forEach((R, L) => {
      x[L] = R[2] || 0, Math.abs(R[2]) > Math.abs(S) && (S = R[2], i = L);
    });
    const r = [], a = [];
    let w = 0, Y = 0, T = 0, l = 0;
    F.bendingXX && F.bendingXX.forEach((R, L) => {
      const G = R.reduce((P, U) => P + U, 0) / R.length;
      r[L] = G, Math.abs(G) > Math.abs(w) && (w = G, Y = L);
    }), F.bendingYY && F.bendingYY.forEach((R, L) => {
      const G = R.reduce((P, U) => P + U, 0) / R.length;
      a[L] = G, Math.abs(G) > Math.abs(T) && (T = G, l = L);
    }), F.bendingXY && F.bendingXY.forEach((R, L) => {
      R.reduce((G, P) => G + P, 0) / R.length;
    });
    const h = [
      [
        d,
        d * g,
        0
      ],
      [
        d * g,
        d,
        0
      ],
      [
        0,
        0,
        d * (1 - g) / 2
      ]
    ], v = ((_l = b.supports) == null ? void 0 : _l.size) || 0, C = o.length, I = u.length, D = Math.min(m, c), B = 406e-5 * Math.abs($) * Math.pow(D, 4) / d, V = B > 0 ? Math.abs(Math.abs(S) - B) / B * 100 : 0, Q = `
<style>${pt}</style>

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
<p>Plate dimensions - ${M(`${n("B")} = ${k(m, 1)}`)} m, ${M(`${n("L")} = ${k(c, 1)}`)} m</p>
<p>Thickness - ${M(`${n("t")} = ${k(A, 3)}`)} m</p>
<p>Load - ${M(`${n("q")} = ${k(Math.abs($), 1)}`)} kN/m\xB2</p>
<p>Modulus of elasticity - ${M(`${n("E")} = ${k(y, 0)}`)} MPa</p>
<p>Poisson's ratio - ${M(`${n("\u03BD")} = ${k(g, 2)}`)}</p>
</td><td style="vertical-align:middle;padding-left:30px;">
${ct(m, c)}
</td></tr></table>

<h4>Derived properties</h4>
<p><b>Shear modulus</b></p>
<p>${M(`${n("G")} = ${j(n("E"), `2\xB7(1 + ${n("\u03BD")})`)} = ${j(k(y, 0), `2\xB7(1 + ${k(g, 2)})`)} = <b>${k(p, 2)}</b>`)} MPa</p>

<p><b>Flexural rigidity</b></p>
<p>${M(`${n("D")} = ${j(`${n("E")}\xB7${n("t")}<sup>3</sup>`, `12\xB7(1 - ${n("\u03BD")}<sup>2</sup>)`)} = ${j(`${k(y, 0)}\xB7${k(A, 3)}<sup>3</sup>`, `12\xB7(1 - ${k(g, 2)}<sup>2</sup>)`)} = <b>${k(d, 4)}</b>`)}</p>

<h4>Finite element mesh</h4>
<p>We use triangular finite elements with 18 DOFs (6 per node)</p>
<p>Total number of elements - ${M(`${n("n", "e")} = ${I}`)}</p>
<p>Total number of joints - ${M(`${n("n", "j")} = ${C}`)}</p>
<p>Supported joints count - ${M(`${n("n", "s")} = ${v}`)}</p>

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
${mt(o, u)}
</div>

<script>
(function() {
  const nodes = ${JSON.stringify(o)};
  const elements = ${JSON.stringify(u)};

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
<p>${M(`${n("N", "1")}(\u03BE,\u03B7) = 1 - \u03BE - \u03B7`)}</p>
<p>${M(`${n("N", "2")}(\u03BE,\u03B7) = \u03BE`)}</p>
<p>${M(`${n("N", "3")}(\u03BE,\u03B7) = \u03B7`)}</p>

<p><b>Constitutive matrix</b></p>
<p>${M(`<b>${n("D")}</b> = ${j(`${n("E")}\xB7${n("t")}<sup>3</sup>`, `12\xB7(1 - ${n("\u03BD")}<sup>2</sup>)`)} \xB7 <b class="b1">[</b>1; ${n("\u03BD")}; 0 <b class="b0">|</b> ${n("\u03BD")}; 1; 0 <b class="b0">|</b> 0; 0; ${j(`1 - ${n("\u03BD")}`, "2")}<b class="b1">]</b>`)}</p>
<p>${M(`<b>${n("D")}</b> = ${dt(h, 4)}`)}</p>

<h4>Solution</h4>
<p>Total degrees of freedom: ${M(`${C * 6}`)}</p>
<p>Free degrees of freedom: ${M(`${C * 6 - v * 6}`)}</p>
<p>Global system: ${M(`${n("K")} \xB7 ${n("U")} = ${n("F")}`)}</p>

<h4>Results</h4>
<p><b>Displacements</b></p>
<p>Maximum displacement: ${M(`${n("w", "max")} = <span class="${Math.abs(S) > 1 ? "err" : "ok"}">${k(S, 6)}</span>`)} at joint ${i + 1}</p>

${x.length > 0 ? `<p><b>Displacement contour map</b></p>${ht(o, u, x, 400, "w")}` : ""}

<h4>Shell Results - Bending Moments</h4>
<p>Maximum ${n("M", "x")}: ${M(`${n("M", "x,max")} = ${k(w, 4)}`)} at element ${Y + 1}</p>
<p>Maximum ${n("M", "y")}: ${M(`${n("M", "y,max")} = ${k(T, 4)}`)} at element ${l + 1}</p>

${r.length > 0 ? `<p><b>Moment ${n("M", "x")} contour map</b></p>${_(o, u, r, 400, "Mx")}` : ""}
${a.length > 0 ? `<p><b>Moment ${n("M", "y")} contour map</b></p>${_(o, u, a, 400, "My")}` : ""}

<h4>Analytical Verification (Navier Solution)</h4>
<p>For simply supported rectangular plate with uniform load:</p>
<p>${M(`${n("w", "max")} \u2248 0,00406 \xB7 ${j(`|${n("q")}| \xB7 ${n("a")}<sup>4</sup>`, n("D"))}`)}</p>
<p>${M(`${n("w", "analytical")} = 0,00406 \xB7 ${j(`|${k($, 1)}| \xB7 ${k(D, 1)}<sup>4</sup>`, k(d, 4))} = ${k(B, 6)}`)}</p>
<p>FEM result: ${M(`${n("w", "FEM")} = ${k(Math.abs(S), 6)}`)}</p>
<p>Error: ${M(`<span class="${V < 10 ? "ok" : "err"}">${k(V, 2)}%</span>`)}</p>

<hr/>
<p><i>Generated with Awatif - Calcpad style report</i></p>
</div>
`;
    return K`${J(Q)}`;
  }
  const ft = `
.report-code {
    font-family: 'Segoe UI', 'Arial Nova', Helvetica, sans-serif;
    font-size: 11pt;
    max-width: 210mm;
    margin: 0 auto;
    padding: 20px;
    background: white;
    color: #333;
}
.report-code h1 {
    color: #1a5276;
    border-bottom: 3px solid #1a5276;
    padding-bottom: 10px;
}
.report-code h2 {
    color: #2874a6;
    border-bottom: 1px solid #aed6f1;
    margin-top: 30px;
}
.report-code h3 {
    color: #5dade2;
    margin-top: 20px;
}
.report-code .equation {
    background: #f8f9fa;
    border-left: 4px solid #3498db;
    padding: 15px 20px;
    margin: 15px 0;
    font-family: 'Cambria Math', 'Times New Roman', serif;
    font-size: 12pt;
}
.report-code .equation-result {
    background: #e8f6f3;
    border-left: 4px solid #1abc9c;
    padding: 15px 20px;
    margin: 15px 0;
}
.report-code .code-block {
    background: #2d2d2d;
    color: #f8f8f2;
    padding: 15px;
    border-radius: 5px;
    font-family: 'Consolas', 'Monaco', monospace;
    font-size: 10pt;
    overflow-x: auto;
    margin: 15px 0;
    white-space: pre;
}
.report-code .code-inline {
    background: #ecf0f1;
    padding: 2px 6px;
    border-radius: 3px;
    font-family: 'Consolas', monospace;
    font-size: 10pt;
}
.report-code .function-box {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 15px 20px;
    border-radius: 8px;
    margin: 15px 0;
}
.report-code .function-box h4 {
    margin: 0 0 10px 0;
    font-size: 14pt;
}
.report-code .function-box code {
    background: rgba(255,255,255,0.2);
    padding: 2px 6px;
    border-radius: 3px;
}
.report-code table {
    border-collapse: collapse;
    width: 100%;
    margin: 15px 0;
}
.report-code th, .report-code td {
    border: 1px solid #bdc3c7;
    padding: 10px;
    text-align: left;
}
.report-code th {
    background: #3498db;
    color: white;
}
.report-code .param-table tr:nth-child(even) {
    background: #f8f9fa;
}
.report-code .note {
    background: #fff3cd;
    border-left: 4px solid #ffc107;
    padding: 10px 15px;
    margin: 15px 0;
}
.report-code .source-link {
    color: #9b59b6;
    text-decoration: none;
}
.report-code .source-link:hover {
    text-decoration: underline;
}
`;
  function ut(t) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const o = ((_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val) || [], u = ((_b = t == null ? void 0 : t.elements) == null ? void 0 : _b.val) || [], b = ((_c = t == null ? void 0 : t.elementInputs) == null ? void 0 : _c.val) || {}, z = ((_d = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _d.val) || {}, E = ((_e = t == null ? void 0 : t.analyzeOutputs) == null ? void 0 : _e.val) || {}, F = ((_f = b.elasticities) == null ? void 0 : _f.values().next().value) || 21e4, y = ((_g = b.poissonsRatios) == null ? void 0 : _g.values().next().value) || 0.3, g = ((_h = b.thicknesses) == null ? void 0 : _h.values().next().value) || 0.2, A = o.map((d) => d[0]), $ = o.map((d) => d[1]), s = A.length ? Math.max(...A) - Math.min(...A) : 10, e = $.length ? Math.max(...$) - Math.min(...$) : 15;
    let m = 0;
    z.deformations && z.deformations.forEach((d) => {
      Math.abs(d[2]) > Math.abs(m) && (m = d[2]);
    });
    let c = 0;
    E.bendingXX && E.bendingXX.forEach((d) => {
      const x = d.reduce((S, i) => S + i, 0) / d.length;
      Math.abs(x) > Math.abs(c) && (c = x);
    });
    const p = `
<style>${ft}</style>

<div class="report-code">
  <h1>PLATE SHELL THIN - Reporte de C\xF3digo</h1>
  <p><strong>An\xE1lisis de Placa Rectangular por Elementos Finitos</strong></p>
  <p>Generado: ${(/* @__PURE__ */ new Date()).toLocaleString()}</p>

  <h2>1. PAR\xC1METROS DE ENTRADA</h2>
  <table class="param-table">
    <tr><th>Par\xE1metro</th><th>S\xEDmbolo</th><th>Valor</th><th>Descripci\xF3n</th></tr>
    <tr><td>Ancho</td><td>B</td><td>${s}</td><td>Dimensi\xF3n en direcci\xF3n X</td></tr>
    <tr><td>Largo</td><td>L</td><td>${e}</td><td>Dimensi\xF3n en direcci\xF3n Y</td></tr>
    <tr><td>Espesor</td><td>t</td><td>${g}</td><td>Espesor de la placa</td></tr>
    <tr><td>M\xF3dulo de Elasticidad</td><td>E</td><td>${F}</td><td>M\xF3dulo de Young</td></tr>
    <tr><td>Coeficiente de Poisson</td><td>\u03BD</td><td>${y}</td><td>Relaci\xF3n de Poisson</td></tr>
  </table>

  <h2>2. FUNCIONES DE AWATIF UTILIZADAS</h2>

  <h3>2.1 getMesh() - Generaci\xF3n de Malla</h3>
  <div class="function-box">
    <h4>awatif-mesh/getMesh</h4>
    <p><strong>Ubicaci\xF3n:</strong> <code>awatif-mesh/src/getMesh.ts</code></p>
    <p><strong>Prop\xF3sito:</strong> Genera una malla triangular 2D usando triangulaci\xF3n de Delaunay</p>
  </div>
  <div class="code-block">const { nodes, elements, boundaryIndices } = getMesh({
  points: [[0, 0, 0], [B, 0, 0], [B, L, 0], [0, L, 0]],
  polygon: [0, 1, 2, 3],
  maxMeshSize: meshSize,
});</div>

  <h3>2.2 deform() - C\xE1lculo de Deformaciones</h3>
  <div class="function-box">
    <h4>awatif-fem/deform</h4>
    <p><strong>Ubicaci\xF3n:</strong> <code>awatif-fem/src/deform.ts</code></p>
    <p><strong>Prop\xF3sito:</strong> Resuelve el sistema [K]{U} = {F}</p>
  </div>

  <h4>Ecuaciones de Placa (Mindlin-Reissner)</h4>
  <div class="equation">
    <strong>Rigidez a Flexi\xF3n:</strong><br>
    D = E\xB7t\xB3 / [12\xB7(1 - \u03BD\xB2)]
  </div>
  <div class="equation">
    <strong>Sistema Global:</strong><br>
    [K]\xB7{U} = {F}
  </div>

  <h3>2.3 analyze() - C\xE1lculo de Momentos</h3>
  <div class="function-box">
    <h4>awatif-fem/analyze</h4>
    <p><strong>Ubicaci\xF3n:</strong> <code>awatif-fem/src/analyze.ts</code></p>
  </div>
  <div class="equation">
    <strong>Momentos Flectores:</strong><br>
    M<sub>xx</sub> = D\xB7(\u03BA<sub>xx</sub> + \u03BD\xB7\u03BA<sub>yy</sub>)<br>
    M<sub>yy</sub> = D\xB7(\u03BA<sub>yy</sub> + \u03BD\xB7\u03BA<sub>xx</sub>)
  </div>

  <h2>3. C\xD3DIGO C++ (WebAssembly)</h2>
  <div class="function-box">
    <h4>awatif-fem/src/cpp/deform.cpp</h4>
    <p><strong>Compilado a:</strong> <code>deform.wasm</code></p>
  </div>
  <div class="code-block">void assembleStiffnessMatrix(
    const std::vector&lt;std::array&lt;double, 3&gt;&gt;&amp; nodes,
    const std::vector&lt;std::array&lt;int, 3&gt;&gt;&amp; elements,
    double E, double nu, double thickness,
    Eigen::SparseMatrix&lt;double&gt;&amp; K
) {
    double D = E * pow(thickness, 3) / (12.0 * (1.0 - nu * nu));
    // ... ensamblaje de matriz de rigidez
}</div>

  <h2>4. ARCHIVOS FUENTE</h2>
  <table>
    <tr><th>Funci\xF3n</th><th>Archivo</th><th>Lenguaje</th></tr>
    <tr><td>getMesh()</td><td>awatif-mesh/src/getMesh.ts</td><td>TypeScript</td></tr>
    <tr><td>Triangle</td><td>triangle-wasm (npm)</td><td>C \u2192 WASM</td></tr>
    <tr><td>deform()</td><td>awatif-fem/src/deform.ts</td><td>TypeScript</td></tr>
    <tr><td>deformCpp()</td><td>awatif-fem/src/cpp/deform.cpp</td><td>C++ \u2192 WASM</td></tr>
    <tr><td>analyze()</td><td>awatif-fem/src/analyze.ts</td><td>TypeScript</td></tr>
  </table>

  <h2>5. RESULTADOS</h2>
  <div class="equation-result">
    <strong>N\xFAmero de Nodos:</strong> ${o.length}<br>
    <strong>N\xFAmero de Elementos:</strong> ${u.length}<br>
    <strong>Desplazamiento M\xE1ximo (Uz):</strong> ${m.toFixed(6)}<br>
    <strong>Momento M\xE1ximo (Mxx):</strong> ${c.toFixed(4)}
  </div>

  <h2>6. REFERENCIAS</h2>
  <ul>
    <li>Awatif Documentation: <a href="https://awatif.co">https://awatif.co</a></li>
    <li>Teor\xEDa de Placas de Mindlin-Reissner</li>
    <li>Zienkiewicz, O.C. - "The Finite Element Method"</li>
  </ul>

  <hr>
  <p style="text-align: center; color: #888; font-size: 9pt;">
    Generado con Awatif<br>
    <a href="https://github.com/GiorgioBurbanelli89/awatif-ejemplos">github.com/GiorgioBurbanelli89/awatif-ejemplos</a>
  </p>
</div>
`;
    return K`${J(p)}`;
  }
  const O = {
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
  }, N = {
    nodes: X.state([]),
    elements: X.state([]),
    nodeInputs: X.state({}),
    elementInputs: X.state({}),
    deformOutputs: X.state({}),
    analyzeOutputs: X.state({})
  };
  X.derive(() => {
    const t = O.ancho.value.val, o = O.largo.value.val, u = O.espesor.value.val, b = O.moduloE.value.val, z = O.poisson.value.val, E = O.mallado.value.val, F = O.carga.value.val, { nodes: y, elements: g, boundaryIndices: A } = lt({
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
          o,
          0
        ],
        [
          0,
          o,
          0
        ]
      ],
      polygon: [
        0,
        1,
        2,
        3
      ],
      maxMeshSize: E
    });
    N.nodeInputs.val = {
      supports: new Map(A.map((s) => [
        s,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])),
      loads: new Map(y.map((s, e) => [
        e,
        [
          0,
          0,
          F,
          0,
          0,
          0
        ]
      ]))
    }, N.nodes.val = y, N.elements.val = g;
    const $ = b / (2 * (1 + z));
    N.elementInputs.val = {
      elasticities: new Map(g.map((s, e) => [
        e,
        b
      ])),
      elasticitiesOrthogonal: new Map(g.map((s, e) => [
        e,
        b
      ])),
      thicknesses: new Map(g.map((s, e) => [
        e,
        u
      ])),
      poissonsRatios: new Map(g.map((s, e) => [
        e,
        z
      ])),
      shearModuli: new Map(g.map((s, e) => [
        e,
        $
      ]))
    }, N.deformOutputs.val = at(y, g, N.nodeInputs.val, N.elementInputs.val), N.analyzeOutputs.val = st(y, g, N.elementInputs.val, N.deformOutputs.val);
  });
  const q = X.state(""), H = X.state(void 0);
  X.derive(() => {
    if (q.val === "Report") {
      const t = Z({
        template: W,
        data: N
      });
      H.val = t;
    }
    if (q.val === "Code") {
      const t = Z({
        template: ut,
        data: N
      });
      H.val = t;
    }
    if (q.val === "Print") {
      const t = Z({
        template: W,
        data: N
      }), o = window.open("", "_blank");
      if (o) {
        const u = (t == null ? void 0 : t.innerHTML) || "";
        o.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Plate Shell Thin - Report</title>
        </head>
        <body>
          ${u}
        </body>
        </html>
      `), o.document.close(), o.focus(), setTimeout(() => o.print(), 500);
      }
    }
  });
  document.body.append(it(O), tt({
    mesh: N,
    settingsObj: {
      nodes: false,
      deformedShape: true,
      loads: false,
      shellResults: "displacementZ"
    }
  }), et(N), ot({
    position: "bottom-center"
  }), rt({
    dialogBody: H
  }), nt({
    clickedButton: q,
    buttons: [
      "Report",
      "Code",
      "Print"
    ],
    sourceCode: "https://github.com/GiorgioBurbanelli89/awatif-ejemplos/tree/master/plate-shell-thin",
    author: "https://github.com/GiorgioBurbanelli89"
  }));
});
