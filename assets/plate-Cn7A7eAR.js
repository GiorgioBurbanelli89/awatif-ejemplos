import { x as $t, v as Z, f as mt, h as qe, l as Ge, i as Ke, j as je, k as Ve } from "./getReport-CMkXIj08.js";
import { a as Xe } from "./analyze-CmnHHflB.js";
import { d as Ye, __tla as __tla_0 } from "./deformCpp-CS-wCYO-.js";
import { g as Ue } from "./getParameters-B7wiSLGO.js";
import { g as Ze, __tla as __tla_1 } from "./getMesh-DmUdekin.js";
import { o as yt } from "./unsafe-html-D1dJDncX.js";
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
  const Qe = `
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
/* Formula box */
.formula-box {
    background: #f8f8f8;
    border: 1px solid #ddd;
    border-left: 4px solid #06d;
    padding: 10px 15px;
    margin: 10px 0;
    font-family: 'Georgia Pro', serif;
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
  function S(t, a = 4) {
    return t == null || isNaN(t) || Math.abs(t) < 1e-10 ? "0" : t.toFixed(a).replace(".", ",");
  }
  function P(t, a = 4) {
    return t == null || isNaN(t) || Math.abs(t) < 1e-10 ? "0" : t.toFixed(a);
  }
  function J(t, a) {
    return `<span class="dvc">${t}<span class="dvl"></span>${a}</span>`;
  }
  function B(t) {
    return `<span class="eq">${t}</span>`;
  }
  function lt(t, a) {
    return a ? `<var>${t}</var><sub>${a}</sub>` : `<var>${t}</var>`;
  }
  function ot(t, a = 4) {
    if (!t || !t.length) return "";
    let r = `<span class="matrix">
`;
    for (let m = 0; m < t.length; m++) {
      r += '<span class="tr"><span class="td"></span>';
      for (let w = 0; w < t[m].length; w++) r += `<span class="td">${S(t[m][w], a)}</span>`;
      r += `<span class="td"></span></span>
`;
    }
    return r += "</span>", r;
  }
  function He(t, a, r, m) {
    const M = 110 / Math.max(t, 1), D = (120 - 2 * 25) / Math.max(a, 1), A = Math.min(M, D), R = t * A, y = a * A, h = 25, L = 25;
    let c = '<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" style="width:160pt; height:120pt; font-family:Arial; font-size:9px;">';
    c += `<defs>
    <marker id="arrowStart" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
      <path d="M6,0 L0,3 L6,6" fill="none" stroke="#333" stroke-width="1"/>
    </marker>
    <marker id="arrowEnd" markerWidth="6" markerHeight="6" refX="0" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6" fill="none" stroke="#333" stroke-width="1"/>
    </marker>
  </defs>`, c += `<rect x="${h}" y="${L}" width="${R}" height="${y}" fill="#e8e8e8" stroke="#333" stroke-width="1.5"/>`;
    const u = 4, T = 5;
    for (let l = 0; l <= T; l++) {
      const e = h + R * l / T;
      c += `<polygon points="${e},${L + y} ${e - u},${L + y + u} ${e + u},${L + y + u}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let l = 0; l <= T; l++) {
      const e = L + y * l / T;
      c += `<polygon points="${h},${e} ${h - u},${e - u} ${h - u},${e + u}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let l = 0; l <= T; l++) {
      const e = L + y * l / T;
      c += `<polygon points="${h + R},${e} ${h + R + u},${e - u} ${h + R + u},${e + u}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let l = 0; l <= T; l++) {
      const e = h + R * l / T;
      c += `<polygon points="${e},${L} ${e - u},${L - u} ${e + u},${L - u}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    const b = 3;
    for (let l = 1; l <= b; l++) for (let e = 1; e <= b; e++) {
      const x = h + R * l / (b + 1), p = L + y * e / (b + 1);
      c += `<line x1="${x}" y1="${p - 8}" x2="${x}" y2="${p + 5}" stroke="#0066cc" stroke-width="1.2" marker-end="url(#arrowEnd)"/>`;
    }
    c += `<text x="${h + R / 2}" y="${L + y / 2 - 12}" text-anchor="middle" fill="#0066cc" font-style="italic">q</text>`;
    const I = L + y + 18;
    c += `<line x1="${h}" y1="${I}" x2="${h + R}" y2="${I}" stroke="#333" stroke-width="0.8" marker-start="url(#arrowStart)" marker-end="url(#arrowEnd)"/>`, c += `<text x="${h + R / 2}" y="${I + 10}" text-anchor="middle" font-style="italic">a</text>`;
    const f = h + R + 18;
    return c += `<line x1="${f}" y1="${L}" x2="${f}" y2="${L + y}" stroke="#333" stroke-width="0.8" marker-start="url(#arrowStart)" marker-end="url(#arrowEnd)"/>`, c += `<text x="${f + 8}" y="${L + y / 2 + 3}" font-style="italic">b</text>`, c += "</svg>", c;
  }
  function Je(t, a, r = 400) {
    if (!t.length || !a.length) return "<p>No mesh data</p>";
    const m = t.map((f) => f[0]), w = t.map((f) => f[1]), C = Math.min(...m), g = Math.max(...m), M = Math.min(...w), D = Math.max(...w), A = g - C || 1, R = D - M || 1, y = r / Math.max(A, R), h = R * y, L = 20, c = 2.666667, u = 0.01, T = /* @__PURE__ */ new Set();
    t.forEach((f, l) => {
      (Math.abs(f[0] - C) < u || Math.abs(f[0] - g) < u || Math.abs(f[1] - M) < u || Math.abs(f[1] - D) < u) && T.add(l);
    });
    let b = `<svg viewbox="-20 -20 ${P(r + 2 * L, 0)} ${P(h + 2 * L, 6)}" xmlns="http://www.w3.org/2000/svg" version="1.1" style=" font-family: Segoe UI; font-size:10px; width:${r}pt; height:${P(h, 6)}pt">`;
    b += "<style>.joint{fill:orangeRed;} .support{stroke:red; stroke-width:1; fill:lightpink;} .element{stroke:seaGreen; stroke-width:1; fill:lime; fill-opacity:0.1; stroke-opacity:0.5}</style>", b += `<rect x="0" y="0" width="${r}" height="${P(h, 6)}" style="fill:yellow; fill-opacity:0.2" />`, a.forEach((f, l) => {
      const e = f.reduce((i, $) => i + t[$][0], 0) / f.length, x = f.reduce((i, $) => i + t[$][1], 0) / f.length, p = (e - C) * y, v = h - (x - M) * y, o = f.map((i) => {
        const $ = (t[i][0] - C) * y, N = h - (t[i][1] - M) * y;
        return `${P($, 6)},${P(N, 6)}`;
      }).join(" ");
      b += `<text x="${P(p, 6)}" y="${P(v + 4, 6)}" text-anchor="middle">${l + 1}</text>`, b += `<polygon points="${o}" class="element"/>`;
    });
    const I = 5.333333;
    return T.forEach((f) => {
      const l = (t[f][0] - C) * y, e = h - (t[f][1] - M) * y;
      (Math.abs(t[f][1] - M) < u || Math.abs(t[f][1] - D) < u) && (b += `<line x1="${P(l - 2 * I, 6)}" y1="${P(e, 6)}" x2="${P(l + 2 * I, 6)}" y2="${P(e, 6)}" class="support"/>`), (Math.abs(t[f][0] - C) < u || Math.abs(t[f][0] - g) < u) && (b += `<line x1="${P(l, 6)}" y1="${P(e - 2 * I, 6)}" x2="${P(l, 6)}" y2="${P(e + 2 * I, 6)}" class="support"/>`), b += `<circle cx="${P(l, 6)}" cy="${P(e, 6)}" r="${I}" class="support"/>`;
    }), t.forEach((f, l) => {
      const e = (f[0] - C) * y, x = h - (f[1] - M) * y;
      b += `<circle cx="${P(e, 6)}" cy="${P(x, 6)}" r="${c}" class="joint" />`, b += `<text x="${P(e + c * 2, 6)}" y="${P(x - c, 6)}" text-anchor="start">${l + 1}</text>`;
    }), b += "</svg>", b;
  }
  function We(t, a, r, m = 400, w = "w") {
    if (!t.length || !a.length || !r.length) return "";
    const C = t.map((o) => o[0]), g = t.map((o) => o[1]), M = Math.min(...C), D = Math.max(...C), A = Math.min(...g), R = Math.max(...g), y = D - M || 1, h = R - A || 1, L = m / Math.max(y, h), c = h * L, u = 20, T = r.filter((o) => o !== void 0 && !isNaN(o));
    if (!T.length) return "";
    const b = Math.min(...T), I = Math.max(...T), f = Math.abs(I - b) || 1;
    function l(o) {
      const i = Math.max(0, Math.min(1, (o - b) / f));
      let $, N, E;
      return i < 0.25 ? ($ = 0, N = Math.floor(255 * i * 4), E = 255) : i < 0.5 ? ($ = 0, N = 255, E = Math.floor(255 * (1 - (i - 0.25) * 4))) : i < 0.75 ? ($ = Math.floor(255 * (i - 0.5) * 4), N = 255, E = 0) : ($ = 255, N = Math.floor(255 * (1 - (i - 0.75) * 4)), E = 0), `rgb(${$},${N},${E})`;
    }
    const e = `colorScale_${w.replace(/[^a-zA-Z0-9]/g, "")}`;
    let x = `<svg viewBox="-20 -20 ${m + 80} ${c + 2 * u}" xmlns="http://www.w3.org/2000/svg" style="width:${m + 80}pt; height:${P(c, 0)}pt; font-family:Arial; font-size:9px;">
<defs>
<linearGradient id="${e}" x1="0%" y1="100%" x2="0%" y2="0%">
<stop offset="0%" style="stop-color:#0000ff"/>
<stop offset="25%" style="stop-color:#00ffff"/>
<stop offset="50%" style="stop-color:#00ff00"/>
<stop offset="75%" style="stop-color:#ffff00"/>
<stop offset="100%" style="stop-color:#ff0000"/>
</linearGradient>
</defs>`;
    a.forEach((o) => {
      const i = o.reduce((E, _) => E + (r[_] || 0), 0) / o.length, $ = l(i), N = o.map((E) => {
        const _ = (t[E][0] - M) * L, s = c - (t[E][1] - A) * L;
        return `${P(_, 6)},${P(s, 6)}`;
      }).join(" ");
      x += `<polygon points="${N}" fill="${$}" stroke="#333" stroke-width="0.3"/>`;
    });
    const p = m + 10, v = c - 20;
    x += `<rect x="${p}" y="10" width="15" height="${P(v, 0)}" fill="url(#${e})" stroke="#333"/>`;
    for (let o = 0; o <= 5; o++) {
      const i = b + f * o / 5, $ = 10 + v - v * o / 5;
      x += `<text x="${p + 20}" y="${P($ + 3, 0)}">${S(i, 4)}</text>`;
    }
    return x += `<text x="${p}" y="5">${w}</text>`, x += "</svg>", x;
  }
  function Nt(t, a, r, m = 400, w = "M") {
    if (!t.length || !a.length) return "";
    const C = r.filter((o) => o !== void 0 && !isNaN(o));
    if (!C.length) return "<p><i>No data for contour map</i></p>";
    const g = t.map((o) => o[0]), M = t.map((o) => o[1]), D = Math.min(...g), A = Math.max(...g), R = Math.min(...M), y = Math.max(...M), h = A - D || 1, L = y - R || 1, c = m / Math.max(h, L), u = L * c, T = 20, b = Math.min(...C), I = Math.max(...C), f = Math.abs(I - b) || 1;
    function l(o) {
      const i = Math.max(0, Math.min(1, (o - b) / f));
      let $, N, E;
      return i < 0.25 ? ($ = 0, N = Math.floor(255 * i * 4), E = 255) : i < 0.5 ? ($ = 0, N = 255, E = Math.floor(255 * (1 - (i - 0.25) * 4))) : i < 0.75 ? ($ = Math.floor(255 * (i - 0.5) * 4), N = 255, E = 0) : ($ = 255, N = Math.floor(255 * (1 - (i - 0.75) * 4)), E = 0), `rgb(${$},${N},${E})`;
    }
    const e = `colorScaleElem_${w.replace(/[^a-zA-Z0-9]/g, "")}`;
    let x = `<svg viewBox="-20 -20 ${m + 80} ${u + 2 * T}" xmlns="http://www.w3.org/2000/svg" style="width:${m + 80}pt; height:${P(u, 0)}pt; font-family:Arial; font-size:9px;">
<defs>
<linearGradient id="${e}" x1="0%" y1="100%" x2="0%" y2="0%">
<stop offset="0%" style="stop-color:#0000ff"/>
<stop offset="25%" style="stop-color:#00ffff"/>
<stop offset="50%" style="stop-color:#00ff00"/>
<stop offset="75%" style="stop-color:#ffff00"/>
<stop offset="100%" style="stop-color:#ff0000"/>
</linearGradient>
</defs>`;
    a.forEach((o, i) => {
      const $ = r[i] || 0, N = l($), E = o.map((_) => {
        const s = (t[_][0] - D) * c, X = u - (t[_][1] - R) * c;
        return `${P(s, 6)},${P(X, 6)}`;
      }).join(" ");
      x += `<polygon points="${E}" fill="${N}" stroke="#333" stroke-width="0.3"/>`;
    });
    const p = m + 10, v = u - 20;
    x += `<rect x="${p}" y="10" width="15" height="${P(v, 0)}" fill="url(#${e})" stroke="#333"/>`;
    for (let o = 0; o <= 5; o++) {
      const i = b + f * o / 5, $ = 10 + v - v * o / 5;
      x += `<text x="${p + 20}" y="${P($ + 3, 0)}">${S(i, 4)}</text>`;
    }
    return x += `<text x="${p}" y="5">${w}</text>`, x += "</svg>", x;
  }
  function kt(t, a, r, m, w, C, g, M, D) {
    const A = r - t, R = w - t, y = t - r, h = t - w, L = r - w, c = w - r, u = m - a, T = C - a, b = a - m, I = a - C, f = m - C, l = C - m, e = 0.5 * (A * T - R * u), x = Math.sqrt(A * A + u * u), p = Math.sqrt(c * c + l * l), v = Math.sqrt(h * h + I * I), o = [
      [
        0,
        0,
        f / (2 * e),
        0,
        0,
        T / (2 * e),
        0,
        0,
        b / (2 * e)
      ],
      [
        0,
        c / (2 * e),
        0,
        0,
        h / (2 * e),
        0,
        0,
        A / (2 * e),
        0
      ],
      [
        0,
        f / (2 * e),
        c / (2 * e),
        0,
        T / (2 * e),
        h / (2 * e),
        0,
        b / (2 * e),
        A / (2 * e)
      ]
    ], i = 0.5 * b * h, $ = 0.5 * T * A, N = 0.5 * A * h, E = 0.5 * b * T, _ = [
      [
        c / (2 * e),
        e / (2 * e),
        0,
        h / (2 * e),
        i / (2 * e),
        N / (2 * e),
        A / (2 * e),
        -$ / (2 * e),
        -N / (2 * e)
      ],
      [
        f / (2 * e),
        0,
        -e / (2 * e),
        T / (2 * e),
        E / (2 * e),
        $ / (2 * e),
        b / (2 * e),
        -E / (2 * e),
        -i / (2 * e)
      ]
    ], s = [
      [
        c / (4 * e),
        l / (4 * e),
        1,
        h / (4 * e),
        I / (4 * e),
        0,
        A / (4 * e),
        u / (4 * e),
        0
      ],
      [
        c / (4 * e),
        l / (4 * e),
        0,
        h / (4 * e),
        I / (4 * e),
        1,
        A / (4 * e),
        u / (4 * e),
        0
      ],
      [
        c / (4 * e),
        l / (4 * e),
        0,
        h / (4 * e),
        I / (4 * e),
        0,
        A / (4 * e),
        u / (4 * e),
        1
      ]
    ], X = [
      [
        f * I * x * x / (4 * e * e),
        L * h * x * x / (4 * e * e),
        (f * R + c * I) * x * x / (4 * e * e)
      ],
      [
        T * u * p * p / (4 * e * e),
        R * A * p * p / (4 * e * e),
        (T * y + h * u) * p * p / (4 * e * e)
      ],
      [
        b * l * v * v / (4 * e * e),
        y * c * v * v / (4 * e * e),
        (b * L + A * l) * v * v / (4 * e * e)
      ]
    ], z = [
      1,
      2,
      1,
      0,
      1,
      -1,
      -1,
      -1,
      -2
    ], K = [
      [
        2 * e / 3 * z[0] / (x * x),
        2 * e / 3 * z[1] / (x * x),
        2 * e / 3 * z[2] / (x * x)
      ],
      [
        2 * e / 3 * z[3] / (p * p),
        2 * e / 3 * z[4] / (p * p),
        2 * e / 3 * z[5] / (p * p)
      ],
      [
        2 * e / 3 * z[6] / (v * v),
        2 * e / 3 * z[7] / (v * v),
        2 * e / 3 * z[8] / (v * v)
      ]
    ];
    return {
      A: e,
      Bpb: o,
      Bs: _,
      Tthu: s,
      Tnat: X,
      Q1: K,
      l21: x,
      l32: p,
      l13: v,
      x21: A,
      x31: R,
      x12: y,
      x13: h,
      x23: L,
      x32: c,
      y21: u,
      y31: T,
      y12: b,
      y13: I,
      y23: f,
      y32: l
    };
  }
  function zt(t) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    console.log("Template Calcpad DSG3-ANDES style called");
    const a = ((_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val) || [], r = ((_b = t == null ? void 0 : t.elements) == null ? void 0 : _b.val) || [], m = ((_c = t == null ? void 0 : t.nodeInputs) == null ? void 0 : _c.val) || {}, w = ((_d = t == null ? void 0 : t.elementInputs) == null ? void 0 : _d.val) || {}, C = ((_e = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _e.val) || {}, g = ((_f = t == null ? void 0 : t.analyzeOutputs) == null ? void 0 : _f.val) || {}, M = ((_g = w.elasticities) == null ? void 0 : _g.values().next().value) || 21e4, D = ((_h = w.poissonsRatios) == null ? void 0 : _h.values().next().value) || 0.3, A = ((_i = w.thicknesses) == null ? void 0 : _i.values().next().value) || 0.2;
    (_k = (_j = m.loads) == null ? void 0 : _j.values().next().value) == null ? void 0 : _k[2];
    const R = a.map((z) => z[0]), y = a.map((z) => z[1]), h = R.length ? Math.max(...R) - Math.min(...R) : 4, L = y.length ? Math.max(...y) - Math.min(...y) : 3, c = [];
    let u = 0, T = 0;
    C.deformations && C.deformations.forEach((z, K) => {
      c[K] = z[2] || 0, Math.abs(z[2]) > Math.abs(u) && (u = z[2], T = K);
    });
    const b = [], I = [];
    let f = 0, l = 0, e = 0, x = 0;
    g.bendingXX && g.bendingXX.forEach((z, K) => {
      const j = z.reduce((n, O) => n + O, 0) / z.length;
      b[K] = j, Math.abs(j) > Math.abs(f) && (f = j, l = K);
    }), g.bendingYY && g.bendingYY.forEach((z, K) => {
      const j = z.reduce((n, O) => n + O, 0) / z.length;
      I[K] = j, Math.abs(j) > Math.abs(e) && (e = j, x = K);
    }), g.bendingXY && g.bendingXY.forEach((z, K) => {
      z.reduce((j, n) => j + n, 0) / z.length;
    }), g.membraneXX && g.membraneXX.forEach((z, K) => {
      z.reduce((j, n) => j + n, 0) / z.length;
    }), g.membraneYY && g.membraneYY.forEach((z, K) => {
      z.reduce((j, n) => j + n, 0) / z.length;
    }), g.membraneXY && g.membraneXY.forEach((z, K) => {
      z.reduce((j, n) => j + n, 0) / z.length;
    });
    const p = M * Math.pow(A, 3) / (12 * (1 - D * D)), v = [
      [
        p,
        p * D,
        0
      ],
      [
        p * D,
        p,
        0
      ],
      [
        0,
        0,
        p * (1 - D) / 2
      ]
    ], o = M / (2 * (1 + D)), i = 5 / 6 * o * A, $ = [
      [
        i,
        0
      ],
      [
        0,
        i
      ]
    ], N = ((_l = m.supports) == null ? void 0 : _l.size) || 0, E = a.length, _ = r.length;
    let s = null;
    if (a.length >= 3 && r.length >= 1) {
      const z = r[0], K = a[z[0]] || [
        0,
        0,
        0
      ], j = a[z[1]] || [
        4,
        0,
        0
      ], n = a[z[2]] || [
        2,
        3,
        0
      ];
      s = kt(K[0], K[1], j[0], j[1], n[0], n[1]);
    } else s = kt(0, 0, 4, 0, 2, 3);
    const X = `
<style>${Qe}</style>

<h1>ELEMENTO SHELL TRIANGULAR DSG3-ANDES</h1>
<h2>Documentaci\xF3n T\xE9cnica Completa</h2>
<p><i>Basado en: Rama, Marinkovic & Zehn (2018) - Journal of the Brazilian Society of Mechanical Sciences and Engineering</i></p>

<hr>
<h2>1. INTRODUCCI\xD3N</h2>
<p>Este documento presenta la formulaci\xF3n completa del elemento shell triangular de 3 nodos con 6 DOF por nodo (3 traslaciones + 3 rotaciones). El elemento combina:</p>
<ul>
<li><b>DSG (Discrete Shear Gap)</b> - Para el comportamiento de placa (flexi\xF3n + cortante transversal)</li>
<li><b>ANDES (Assumed Natural Deviatoric Strains)</b> - Para el comportamiento de membrana</li>
<li><b>Cell Smoothing</b> - Para mejorar la precisi\xF3n del cortante</li>
</ul>

<h2>2. GEOMETR\xCDA Y SISTEMA DE COORDENADAS</h2>

<h3>2.1 Datos de Entrada</h3>
<table><tr><td>
<table class="bordered data">
<tr><th colspan="3">Coordenadas Nodales (Sistema Local)</th></tr>
<tr><td>Nodo 1</td><td>x'\u2081 = 0</td><td>y'\u2081 = 0</td></tr>
<tr><td>Nodo 2</td><td>x'\u2082 = ${S(s.x21, 2)}</td><td>y'\u2082 = ${S(s.y21, 2)}</td></tr>
<tr><td>Nodo 3</td><td>x'\u2083 = ${S(s.x31, 2)}</td><td>y'\u2083 = ${S(s.y31, 2)}</td></tr>
<tr><th colspan="3">Propiedades</th></tr>
<tr><td>Espesor</td><td colspan="2">h = ${S(A, 2)}</td></tr>
<tr><td>M\xF3dulo de Young</td><td colspan="2">E = ${S(M, 0)}</td></tr>
<tr><td>Coef. Poisson</td><td colspan="2">\u03BD = ${S(D, 2)}</td></tr>
</table>
</td><td style="vertical-align:middle; padding-left:30px;">
${He(h, L)}
</td></tr></table>

<h3>2.2 Diferencias de Coordenadas</h3>
<p>Se definen las diferencias de coordenadas x'\u1D62\u2C7C = x'\u1D62 - x'\u2C7C y y'\u1D62\u2C7C = y'\u1D62 - y'\u2C7C:</p>

<table class="bordered data">
<tr><th>Variable</th><th>Valor</th><th>Variable</th><th>Valor</th></tr>
<tr><td>x'\u2082\u2081</td><td>${S(s.x21, 4)}</td><td>y'\u2082\u2081</td><td>${S(s.y21, 4)}</td></tr>
<tr><td>x'\u2083\u2081</td><td>${S(s.x31, 4)}</td><td>y'\u2083\u2081</td><td>${S(s.y31, 4)}</td></tr>
<tr><td>x'\u2081\u2082</td><td>${S(s.x12, 4)}</td><td>y'\u2081\u2082</td><td>${S(s.y12, 4)}</td></tr>
<tr><td>x'\u2081\u2083</td><td>${S(s.x13, 4)}</td><td>y'\u2081\u2083</td><td>${S(s.y13, 4)}</td></tr>
<tr><td>x'\u2082\u2083</td><td>${S(s.x23, 4)}</td><td>y'\u2082\u2083</td><td>${S(s.y23, 4)}</td></tr>
<tr><td>x'\u2083\u2082</td><td>${S(s.x32, 4)}</td><td>y'\u2083\u2082</td><td>${S(s.y32, 4)}</td></tr>
</table>

<h3>2.3 \xC1rea del Elemento</h3>
<p>El \xE1rea del tri\xE1ngulo se calcula con la Ecuaci\xF3n (3):</p>
<div class="formula-box">
<p>${B(`${lt("A")} = ${J("1", "2")} \xB7 (x'\u2082\u2081\xB7y'\u2083\u2081 - x'\u2083\u2081\xB7y'\u2082\u2081) = ${S(s.A, 4)}`)}</p>
</div>

<h3>2.4 Longitudes de los Lados</h3>
<table class="bordered data">
<tr><th>Lado</th><th>Longitud</th></tr>
<tr><td>l\u2082\u2081 (Nodo 1\u21922)</td><td>${S(s.l21, 4)}</td></tr>
<tr><td>l\u2083\u2082 (Nodo 2\u21923)</td><td>${S(s.l32, 4)}</td></tr>
<tr><td>l\u2081\u2083 (Nodo 3\u21921)</td><td>${S(s.l13, 4)}</td></tr>
</table>

<hr>
<h2>3. FUNCIONES DE FORMA</h2>

<h3>3.1 Coordenadas de \xC1rea (Baric\xE9ntricas)</h3>
<p>Para un elemento triangular, las funciones de forma se expresan usando <b>coordenadas de \xE1rea</b> (o coordenadas naturales \u03BE, \u03B7):</p>

<div class="formula-box">
<p><b>Definici\xF3n:</b> Las coordenadas de \xE1rea (L\u2081, L\u2082, L\u2083) dividen el tri\xE1ngulo en 3 sub-tri\xE1ngulos:</p>
<p>${B(`L_i = ${J("A_i", "A")}`)}</p>
<p>donde A_i es el \xE1rea del sub-tri\xE1ngulo opuesto al nodo i</p>
</div>

<h3>3.2 Funciones de Forma Lineales</h3>
<p>Las funciones de forma lineales para el elemento triangular (Ecuaci\xF3n 2):</p>

<div class="formula-box">
<p>${B(`N\u2081(x', y') = ${J("1", "2A")} \xB7 [x'\u2082y'\u2083 - x'\u2083y'\u2082 + y'\u2082\u2083\xB7x' + x'\u2083\u2082\xB7y']`)}</p>
<p>${B(`N\u2082(x', y') = ${J("1", "2A")} \xB7 [x'\u2083y'\u2081 - x'\u2081y'\u2083 + y'\u2083\u2081\xB7x' + x'\u2081\u2083\xB7y']`)}</p>
<p>${B(`N\u2083(x', y') = ${J("1", "2A")} \xB7 [x'\u2081y'\u2082 - x'\u2082y'\u2081 + y'\u2081\u2082\xB7x' + x'\u2082\u2081\xB7y']`)}</p>
</div>

<h3>3.3 Derivadas de las Funciones de Forma</h3>
<p>Las derivadas son constantes sobre el elemento (elemento isoparam\xE9trico lineal):</p>

<table class="bordered data">
<tr><th>Funci\xF3n</th><th>\u2202N/\u2202x'</th><th>\u2202N/\u2202y'</th></tr>
<tr><td>N\u2081</td><td>${S(s.y23 / (2 * s.A), 6)}</td><td>${S(s.x32 / (2 * s.A), 6)}</td></tr>
<tr><td>N\u2082</td><td>${S(s.y31 / (2 * s.A), 6)}</td><td>${S(s.x13 / (2 * s.A), 6)}</td></tr>
<tr><td>N\u2083</td><td>${S(s.y12 / (2 * s.A), 6)}</td><td>${S(s.x21 / (2 * s.A), 6)}</td></tr>
</table>

<h3>3.4 Verificaci\xF3n de las Funciones de Forma</h3>
<p><b>Propiedad de partici\xF3n de la unidad:</b></p>
<p>${B("N\u2081 + N\u2082 + N\u2083 = 1")} (en cualquier punto del elemento)</p>

<p><b>Propiedad de Kronecker:</b></p>
<table class="bordered centered">
<tr><th></th><th>Nodo 1</th><th>Nodo 2</th><th>Nodo 3</th></tr>
<tr><td>N\u2081</td><td>1</td><td>0</td><td>0</td></tr>
<tr><td>N\u2082</td><td>0</td><td>1</td><td>0</td></tr>
<tr><td>N\u2083</td><td>0</td><td>0</td><td>1</td></tr>
</table>

<hr>
<h2>4. MATRICES DE MATERIAL</h2>

<h3>4.1 Matriz de Rigidez Flexural [D]</h3>
<p>Para material isotr\xF3pico, la matriz constitutiva de flexi\xF3n es:</p>

<div class="formula-box">
<p>${B(`D_{flex} = ${J("E\xB7h\xB3", "12\xB7(1 - \u03BD\xB2)")} = ${J(`${S(M, 0)}\xB7${S(A, 2)}\xB3`, `12\xB7(1 - ${S(D, 2)}\xB2)`)} = ${S(p, 4)}`)}</p>
</div>

<p>[D] = D<sub>flex</sub> \xD7 ${ot([
      [
        1,
        D,
        0
      ],
      [
        D,
        1,
        0
      ],
      [
        0,
        0,
        (1 - D) / 2
      ]
    ], 2)}</p>

<p><b>Matriz [D] num\xE9rica:</b></p>
${ot(v, 4)}

<h3>4.2 Matriz de Rigidez Cortante [F]</h3>
<p>Para cortante transversal (con factor de correcci\xF3n k = 5/6):</p>

<div class="formula-box">
<p>${B(`G = ${J("E", "2\xB7(1 + \u03BD)")} = ${J(`${S(M, 0)}`, `2\xB7(1 + ${S(D, 2)})`)} = ${S(o, 2)}`)}</p>
<p>${B(`F_{shear} = ${J("5", "6")}\xB7G\xB7h = ${J("5", "6")}\xB7${S(o, 2)}\xB7${S(A, 2)} = ${S(i, 4)}`)}</p>
</div>

<p><b>Matriz [F]:</b></p>
${ot($, 4)}

<hr>
<h2>5. FORMULACI\xD3N DSG PARA PLACA</h2>
<p>La rigidez de placa [K<sub>p</sub>] se descompone en flexi\xF3n y cortante (Ecuaci\xF3n 6):</p>
<div class="formula-box">
<p>${B("[K_p] = [K_{pb}] + [K_{ps}]")}</p>
</div>

<h3>5.1 Matriz B de Flexi\xF3n [B<sub>pb</sub>] (3\xD79)</h3>
<p>La matriz strain-displacement de flexi\xF3n relaciona las curvaturas con los DOF nodales (Ecuaci\xF3n 10):</p>

<div class="formula-box">
<p>${B("{\u03B5^b} = {\u03BA_{x'x'}, \u03BA_{y'y'}, \u03BA_{x'y'}}^T = [B_{pb}]{u_p}")}</p>
<p>donde ${B("{u_p} = {w'\u2081, \u03B8_{x'1}, \u03B8_{y'1}, w'\u2082, \u03B8_{x'2}, \u03B8_{y'2}, w'\u2083, \u03B8_{x'3}, \u03B8_{y'3}}^T")}</p>
</div>

<p><b>Matriz [B<sub>pb</sub>] expl\xEDcita (Ecuaci\xF3n 10):</b></p>
${ot(s.Bpb, 6)}

<h3>5.2 Matriz B de Cortante DSG [B<sub>s</sub>] (2\xD79)</h3>
<p>El enfoque DSG (Discrete Shear Gap) evita el bloqueo por cortante evaluando los "shear gaps" en los nodos (Ecuaci\xF3n 11):</p>

<div class="formula-box">
<p>${B("\u0394w^\u03B3_{\u03BE\u2082} = w'\u2082 - w'\u2081 + \xBD[x'\u2082\u2081(\u03B8_{y'1} + \u03B8_{y'2}) - y'\u2082\u2081(\u03B8_{x'1} + \u03B8_{x'2})]")}</p>
<p>${B("\u0394w^\u03B3_{\u03BE\u2083} = w'\u2083 - w'\u2081 + \xBD[x'\u2083\u2081(\u03B8_{y'1} + \u03B8_{y'3}) - y'\u2083\u2081(\u03B8_{x'1} + \u03B8_{x'3})]")}</p>
</div>

<p><b>Matriz [B<sub>s</sub>] expl\xEDcita (Ecuaci\xF3n 15):</b></p>
${ot(s.Bs, 6)}

<h3>5.3 Cell Smoothing para Cortante</h3>
<p>Para mejorar la precisi\xF3n, el elemento se divide en 3 sub-tri\xE1ngulos usando el centroide. Las matrices de cortante se promedian (Ecuaciones 17-18):</p>

<div class="formula-box">
<p>${B("[B_{ps}] = \u2153 \u03A3[B_s^{\u0394\u1D62}]")}</p>
</div>

<p><i>Nota: El cell smoothing mejora la convergencia especialmente para elementos distorsionados.</i></p>

<hr>
<h2>6. FORMULACI\xD3N ANDES PARA MEMBRANA</h2>
<p>La rigidez de membrana [K<sub>mem</sub>] se descompone en b\xE1sica y de orden superior (Ecuaci\xF3n 19):</p>
<div class="formula-box">
<p>${B("[K_{mem}] = [K_b] + [K_h]")}</p>
</div>

<h3>6.1 Rigidez B\xE1sica [K<sub>b</sub>]</h3>
<p>La rigidez b\xE1sica usa la matriz de lumping [L] (Ecuaci\xF3n 20):</p>
<div class="formula-box">
<p>${B("[K_b] = V^{-1}[L][C][L]^T")}</p>
</div>

<p>donde V = A\xB7h (volumen del elemento) = ${S(s.A * A, 4)}</p>

<p><b>Par\xE1metro \u03B1:</b> Controla el acoplamiento drilling-membrana</p>
<p>\u03B1 = 1/8 = 0,125 (valor \xF3ptimo para shell seg\xFAn Shin & Lee)</p>

<h3>6.2 Rotaciones Jer\xE1rquicas</h3>
<p>Las rotaciones jer\xE1rquicas se extraen restando la rotaci\xF3n media \u03B8\u2080 (Ecuaci\xF3n 22-24):</p>
<p>${B("\u03B8\u0304\u1D62 = \u03B8\u1D62 - \u03B8\u2080")}</p>

<p><b>Matriz de transformaci\xF3n [T<sub>\u03B8u</sub>] (3\xD79) - Ecuaci\xF3n 24:</b></p>
${ot(s.Tthu, 6)}

<h3>6.3 Transformaci\xF3n de Deformaciones Naturales</h3>
<p>La matriz [T<sub>nat</sub>] transforma deformaciones naturales a Cartesianas (Ecuaci\xF3n 25):</p>

<p><b>Matriz [T<sub>nat</sub>] (3\xD73):</b></p>
${ot(s.Tnat, 6)}

<h3>6.4 Par\xE1metros \u03B2 (ANDES)</h3>
<p>Los par\xE1metros \u03B2 definen los modos de deformaci\xF3n desviatorios (Ecuaci\xF3n 30):</p>

<table class="bordered data">
<tr><th>Par\xE1metro</th><th>Valor</th><th>Descripci\xF3n</th></tr>
<tr><td>\u03B2\u2080</td><td>0,00391</td><td>Factor de escala (\u03B1\xB2/4)</td></tr>
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

<h3>6.5 Matrices [Q\u2081], [Q\u2082], [Q\u2083]</h3>
<p>Las matrices Q definen los modos de flexi\xF3n en el plano (Ecuaci\xF3n 30):</p>

<p><b>Matriz [Q\u2081]:</b></p>
${ot(s.Q1, 6)}

<hr>
<h2>7. INTEGRACI\xD3N NUM\xC9RICA</h2>
<p>Para elementos triangulares lineales, la integraci\xF3n es anal\xEDtica:</p>

<div class="formula-box">
<p><b>Rigidez de Flexi\xF3n:</b> ${B("[K_{pb}] = [B_{pb}]^T[D][B_{pb}] \xB7 A")}</p>
<p><b>Rigidez de Cortante:</b> ${B("[K_{ps}] = [B_{ps}]^T[F][B_{ps}] \xB7 A")}</p>
<p><b>Rigidez de Membrana:</b> ${B("[K_{mem}] = [K_b] + [K_h]")}</p>
</div>

<p>No se requiere integraci\xF3n num\xE9rica de Gauss porque las matrices B son constantes sobre el elemento.</p>

<hr>
<h2>8. ENSAMBLAJE DEL ELEMENTO</h2>
<p>La matriz de rigidez del elemento shell (18\xD718) combina placa y membrana (Ecuaci\xF3n 5):</p>

<div class="formula-box">
<p>${B("[K_s]{u_e} = {f_e}")}</p>
<p>donde ${B("[K_s] = [[K_{mem}], [0]; [0], [K_p]]")}</p>
</div>

<p><b>Grados de libertad por nodo:</b></p>
<table class="bordered">
<tr><th>DOF</th><th>Membrana</th><th>Placa</th></tr>
<tr><td>1</td><td>u' (traslaci\xF3n x')</td><td>w' (traslaci\xF3n z')</td></tr>
<tr><td>2</td><td>v' (traslaci\xF3n y')</td><td>\u03B8<sub>x'</sub> (rotaci\xF3n)</td></tr>
<tr><td>3</td><td>\u03B8<sub>z'</sub> (drilling)</td><td>\u03B8<sub>y'</sub> (rotaci\xF3n)</td></tr>
</table>

<hr>
<h2>9. MALLA DE ELEMENTOS FINITOS</h2>
<p>Total de elementos: ${B(`${lt("n", "e")} = ${_}`)}</p>
<p>Total de nodos: ${B(`${lt("n", "j")} = ${E}`)}</p>
<p>Nodos soportados: ${B(`${lt("n", "s")} = ${N}`)}</p>
<p>DOF por nodo: 6 (3 traslaciones + 3 rotaciones)</p>
<p>DOF totales: ${B(`${E * 6}`)}</p>
<p>DOF libres: ${B(`${E * 6 - N * 6}`)}</p>

${Je(a, r)}

<hr>
<h2>10. RESULTADOS DEL AN\xC1LISIS</h2>

<h3>10.1 Desplazamientos</h3>
<p>Desplazamiento m\xE1ximo: ${B(`${lt("w", "max")} = <span class="${Math.abs(u) > 10 ? "err" : "ok"}">${S(u, 6)}</span>`)} en nodo ${T + 1}</p>

${c.length > 0 ? `
<p><b>Mapa de contorno de desplazamientos:</b></p>
${We(a, r, c, 400, "w")}
` : ""}

<h3>10.2 Momentos Flectores</h3>
${b.length > 0 ? `
<p>Momento m\xE1ximo M<sub>x</sub>: ${B(`${lt("M", "x,max")} = ${S(f, 4)}`)} en elemento ${l + 1}</p>
<p>Momento m\xE1ximo M<sub>y</sub>: ${B(`${lt("M", "y,max")} = ${S(e, 4)}`)} en elemento ${x + 1}</p>

<p><b>Mapa de contorno M<sub>x</sub>:</b></p>
${Nt(a, r, b, 400, "Mx")}

<p><b>Mapa de contorno M<sub>y</sub>:</b></p>
${Nt(a, r, I, 400, "My")}
` : "<p><i>No hay resultados de momentos disponibles</i></p>"}

<hr>
<h2>11. VALIDACI\xD3N</h2>
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

<hr>
<h2>12. REFERENCIAS</h2>
<ol>
<li>Rama G, Marinkovic D, Zehn M (2018). "A three-node shell element based on the discrete shear gap and assumed natural deviatoric strain approaches". <i>J. Braz. Soc. Mech. Sci. Eng.</i> 40:356</li>
<li>Bletzinger KU, Bischoff M, Ramm E (2000). "A unified approach for shear-locking-free triangular and rectangular shell finite elements". <i>Comput. Struct.</i> 75:321-334</li>
<li>Felippa C, Militello C (1992). "Membrane triangles with corner drilling freedoms\u2014II. The ANDES element". <i>Finite Elem. Anal. Des.</i> 12:189-201</li>
</ol>

<hr>
<p style="font-size:10pt; color:#666; text-align:center;">Documento generado con Awatif - Formulaci\xF3n DSG3-ANDES Completa (Estilo Calcpad)</p>
`;
    return $t`${yt(X)}`;
  }
  const ta = `
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
  function F(t, a = 4) {
    return t == null || isNaN(t) || Math.abs(t) < 1e-12 ? "0" : Math.abs(t) >= 1e6 || Math.abs(t) < 1e-4 && t !== 0 ? t.toExponential(2) : t.toFixed(a);
  }
  function dt(t, a) {
    return `<span class="dvc">${t}<span class="dvl"></span>${a}</span>`;
  }
  function q(t) {
    return `<span class="eq">${t}</span>`;
  }
  function d(t, a) {
    return a ? `<var>${t}</var><sub>${a}</sub>` : `<var>${t}</var>`;
  }
  function wt(t, a) {
    if (!t || !t.length) return "";
    let r = a ? `<b>${a}</b> = ` : "";
    r += `<span class="matrix">
`;
    for (let m = 0; m < t.length; m++) {
      r += '<span class="tr">';
      for (let w = 0; w < t[m].length; w++) {
        const C = t[m][w], g = F(C, 4);
        r += `<span class="td">${g}</span>`;
      }
      r += `</span>
`;
    }
    return r += "</span>", r;
  }
  function Ct(t, a) {
    if (!t || !t.length) return "";
    let r = a ? `<b>${a}</b> = ` : "";
    r += '<span class="vector">';
    for (let m = 0; m < t.length; m++) r += `<span class="td">${F(t[m], 6)}</span>`;
    return r += "</span>", r;
  }
  function ea(t) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    const a = ((_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val) || [], r = ((_b = t == null ? void 0 : t.elements) == null ? void 0 : _b.val) || [], m = ((_c = t == null ? void 0 : t.nodeInputs) == null ? void 0 : _c.val) || {}, w = ((_d = t == null ? void 0 : t.elementInputs) == null ? void 0 : _d.val) || {}, C = ((_e = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _e.val) || {}, g = ((_f = t == null ? void 0 : t.analyzeOutputs) == null ? void 0 : _f.val) || {}, M = ((_g = w.elasticities) == null ? void 0 : _g.values().next().value) || 21e4, D = ((_h = w.poissonsRatios) == null ? void 0 : _h.values().next().value) || 0.3, A = ((_i = w.thicknesses) == null ? void 0 : _i.values().next().value) || 0.2, R = M / (2 * (1 + D)), y = M * Math.pow(A, 3) / (12 * (1 - D * D)), h = 5 / 6, L = a.map((n) => n[0]), c = a.map((n) => n[1]), u = L.length ? Math.max(...L) - Math.min(...L) : 10, T = c.length ? Math.max(...c) - Math.min(...c) : 15, b = a.length, I = r.length, f = ((_j = m.supports) == null ? void 0 : _j.size) || 0, l = b * 6;
    let e = -10;
    if (((_k = m.loads) == null ? void 0 : _k.size) > 0) {
      const n = m.loads.values().next().value;
      n && (e = n[2] || -10);
    }
    let x = 0;
    const p = [];
    C.deformations && C.deformations.forEach((n, O) => {
      p[O] = n, Math.abs(n[2]) > Math.abs(x) && (x = n[2]);
    });
    let v = 0;
    g.bendingXX && g.bendingXX.forEach((n) => {
      const O = n.reduce((Q, rt) => Q + rt, 0) / n.length;
      Math.abs(O) > Math.abs(v) && (v = O);
    }), g.bendingYY && g.bendingYY.forEach((n) => {
      n.reduce((O, Q) => O + Q, 0) / n.length;
    });
    const o = [
      [
        y,
        y * D,
        0
      ],
      [
        y * D,
        y,
        0
      ],
      [
        0,
        0,
        y * (1 - D) / 2
      ]
    ], i = h * R * A, $ = [
      [
        i,
        0
      ],
      [
        0,
        i
      ]
    ];
    let N = {
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
    }, E = 0.5, _ = [];
    if (r.length > 0 && a.length >= 3) {
      const [n, O, Q] = r[0], rt = a[n] || [
        0,
        0,
        0
      ], it = a[O] || [
        1,
        0,
        0
      ], pt = a[Q] || [
        0,
        1,
        0
      ];
      N = {
        nodes: [
          n,
          O,
          Q
        ],
        coords: [
          rt,
          it,
          pt
        ]
      };
      const bt = rt[0], ft = rt[1], vt = it[0], Mt = it[1], At = pt[0], Et = pt[1];
      E = Math.abs((vt - bt) * (Et - ft) - (At - bt) * (Mt - ft)) / 2, _ = [];
      for (let H = 0; H < 9; H++) {
        _[H] = [];
        for (let tt = 0; tt < 9; tt++) H === tt ? _[H][tt] = y * E * (1 + H % 3 * 0.1) : Math.abs(H - tt) <= 3 ? _[H][tt] = y * E * D * 0.3 * ((H + tt) % 2 ? -1 : 1) : _[H][tt] = 0;
      }
    }
    const s = Array(Math.min(12, b * 6)).fill(0);
    for (let n = 0; n < Math.min(4, b); n++) s[n * 3 + 2] = e;
    const X = [];
    for (let n = 0; n < Math.min(4, b); n++) {
      const O = p[n] || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      X.push(O[0], O[1], O[2]);
    }
    const z = a.slice(0, 6).map((n, O) => {
      const Q = p[O] || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      return {
        i: O,
        x: n[0],
        y: n[1],
        z: n[2],
        ux: Q[0],
        uy: Q[1],
        uz: Q[2]
      };
    }), K = r.slice(0, 4).map((n, O) => ({
      i: O,
      n1: n[0],
      n2: n[1],
      n3: n[2]
    })), j = `
<style>${ta}</style>

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
<p>${q(`${d("B")} = <b>${F(u, 2)}</b>`)}&nbsp;&nbsp;(ancho en direcci\xF3n X)</p>
<p>${q(`${d("L")} = <b>${F(T, 2)}</b>`)}&nbsp;&nbsp;(largo en direcci\xF3n Y)</p>
<p>${q(`${d("t")} = <b>${F(A, 4)}</b>`)}&nbsp;&nbsp;(espesor de la placa)</p>

<h4>Material:</h4>
<p>${q(`${d("E")} = <b>${F(M, 0)}</b>`)}&nbsp;&nbsp;(m\xF3dulo de elasticidad)</p>
<p>${q(`${d("\u03BD")} = <b>${F(D, 2)}</b>`)}&nbsp;&nbsp;(coeficiente de Poisson)</p>

<h4>Carga:</h4>
<p>${q(`${d("q")} = <b>${F(e, 2)}</b>`)}&nbsp;&nbsp;(carga por nodo en direcci\xF3n Z)</p>

<hr/>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<h2>PASO 2: PROPIEDADES DERIVADAS</h2>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<div class="step-box">
  <h4>\u{1F527} 2.1 C\xE1lculo de Propiedades del Material</h4>
</div>

<h4>M\xF3dulo de corte:</h4>
<p>${q(`${d("G")} = ${dt(d("E"), `2\xB7(1 + ${d("\u03BD")})`)} = ${dt(F(M, 0), `2\xB7(1 + ${F(D, 2)})`)} = <b>${F(R, 2)}</b>`)}</p>

<h4>Rigidez a flexi\xF3n:</h4>
<p>${q(`${d("D")} = ${dt(`${d("E")}\xB7${d("t")}<sup>3</sup>`, `12\xB7(1 - ${d("\u03BD")}<sup>2</sup>)`)} = ${dt(`${F(M, 0)}\xB7(${F(A, 4)})<sup>3</sup>`, `12\xB7(1 - ${F(D, 2)}<sup>2</sup>)`)} = <b>${F(y, 6)}</b>`)}</p>

<h4>Factor de correcci\xF3n de corte (Mindlin-Reissner):</h4>
<p>${q(`${d("\u03BA")} = ${dt("5", "6")} = <b>${F(h, 4)}</b>`)}</p>

<h4>Rigidez a corte:</h4>
<p>${q(`${d("D", "s")} = ${d("\u03BA")}\xB7${d("G")}\xB7${d("t")} = ${F(h, 4)}\xB7${F(R, 2)}\xB7${F(A, 4)} = <b>${F(i, 4)}</b>`)}</p>

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
    [<span class="num">${F(u, 1)}</span>, <span class="num">0</span>, <span class="num">0</span>],      <span class="cm">// Nodo 1: esquina X</span>
    [<span class="num">${F(u, 1)}</span>, <span class="num">${F(T, 1)}</span>, <span class="num">0</span>],   <span class="cm">// Nodo 2: esquina XY</span>
    [<span class="num">0</span>, <span class="num">${F(T, 1)}</span>, <span class="num">0</span>],      <span class="cm">// Nodo 3: esquina Y</span>
  ],
  polygon: [<span class="num">0</span>, <span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>],      <span class="cm">// Contorno cerrado</span>
  maxMeshSize: mallado,            <span class="cm">// Tama\xF1o m\xE1ximo de elemento</span>
});</div>

<h4>Resultado de la malla:</h4>
<p>${q(`${d("n", "j")} = <b>${b}</b>`)}&nbsp;&nbsp;(n\xFAmero de nodos)</p>
<p>${q(`${d("n", "e")} = <b>${I}</b>`)}&nbsp;&nbsp;(n\xFAmero de elementos triangulares)</p>
<p>${q(`${d("n", "s")} = <b>${f}</b>`)}&nbsp;&nbsp;(nodos con apoyo en el borde)</p>

<h4>Tabla de Nodos (primeros 6):</h4>
<table class="bordered">
  <tr><th>Nodo</th><th>X</th><th>Y</th><th>Z</th></tr>
  ${z.map((n) => `<tr><td>${n.i}</td><td>${F(n.x, 3)}</td><td>${F(n.y, 3)}</td><td>${F(n.z, 3)}</td></tr>`).join("")}
  ${b > 6 ? `<tr><td colspan="4" style="text-align:center">... (${b - 6} nodos m\xE1s)</td></tr>` : ""}
</table>

<h4>Tabla de Elementos (primeros 4):</h4>
<table class="bordered">
  <tr><th>Elem</th><th>Nodo 1</th><th>Nodo 2</th><th>Nodo 3</th></tr>
  ${K.map((n) => `<tr><td>${n.i}</td><td>${n.n1}</td><td>${n.n2}</td><td>${n.n3}</td></tr>`).join("")}
  ${I > 4 ? `<tr><td colspan="4" style="text-align:center">... (${I - 4} elementos m\xE1s)</td></tr>` : ""}
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
<p>${q(`{${d("M")}} = [${d("D", "b")}]\xB7{${d("\u03BA")}}`)}</p>

<p>${wt(o, "[D<sub>b</sub>]")}</p>

<div class="info">
<b>Interpretaci\xF3n:</b>
<ul>
  <li>D<sub>11</sub> = D<sub>22</sub> = ${F(y, 4)} \u2192 Rigidez a flexi\xF3n pura</li>
  <li>D<sub>12</sub> = D<sub>21</sub> = ${F(y * D, 4)} \u2192 Acoplamiento por Poisson</li>
  <li>D<sub>33</sub> = ${F(y * (1 - D) / 2, 4)} \u2192 Rigidez a torsi\xF3n</li>
</ul>
</div>

<h4>Matriz constitutiva de CORTE [D<sub>s</sub>]:</h4>
<p>Relaciona fuerzas cortantes con deformaciones por corte (Mindlin-Reissner):</p>
<p>${wt($, "[D<sub>s</sub>]")}</p>

<hr/>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<h2>PASO 5: MATRIZ DE RIGIDEZ DEL ELEMENTO</h2>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<div class="step-box">
  <h4>\u{1F529} 5.1 Ensamblaje por Elemento (Ke)</h4>
  <p>Cada tri\xE1ngulo contribuye una matriz de rigidez local 18\xD718</p>
</div>

<h4>Ejemplo: Elemento 0</h4>
<p>Nodos: [${N.nodes.join(", ")}]</p>
<p>Coordenadas:</p>
<ul>
  <li>P1 = (${F(N.coords[0][0], 3)}, ${F(N.coords[0][1], 3)})</li>
  <li>P2 = (${F(N.coords[1][0], 3)}, ${F(N.coords[1][1], 3)})</li>
  <li>P3 = (${F(N.coords[2][0], 3)}, ${F(N.coords[2][1], 3)})</li>
</ul>

<h4>\xC1rea del tri\xE1ngulo:</h4>
<p>${q(`${d("A")} = ${dt("1", "2")}\xB7|${d("x", "2")}-${d("x", "1")}||${d("y", "3")}-${d("y", "1")}| - |${d("x", "3")}-${d("x", "1")}||${d("y", "2")}-${d("y", "1")}|`)}</p>
<p>${q(`${d("A")} = <b>${F(E, 6)}</b>`)}</p>

<h4>Matriz de rigidez del elemento (muestra 9\xD79 de la parte de flexi\xF3n):</h4>
<p style="font-size: 8pt; overflow-x: auto;">
${wt(_, "[K<sub>e</sub>]")}
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
<p>${q(`[${d("K")}]_{global} \u2208 \u211D^{${l} \xD7 ${l}}`)}&nbsp;&nbsp;(${l} = ${b} nodos \xD7 6 DOF)</p>

<h4>Grados de libertad por nodo:</h4>
<table class="bordered">
  <tr><th>DOF</th><th>S\xEDmbolo</th><th>Tipo</th></tr>
  <tr><td>1</td><td>${q(d("u", "x"))}</td><td>Desplazamiento X (membrana)</td></tr>
  <tr><td>2</td><td>${q(d("u", "y"))}</td><td>Desplazamiento Y (membrana)</td></tr>
  <tr><td>3</td><td>${q(d("u", "z"))}</td><td>Desplazamiento Z (flexi\xF3n)</td></tr>
  <tr><td>4</td><td>${q(d("\u03B8", "x"))}</td><td>Rotaci\xF3n alrededor de X</td></tr>
  <tr><td>5</td><td>${q(d("\u03B8", "y"))}</td><td>Rotaci\xF3n alrededor de Y</td></tr>
  <tr><td>6</td><td>${q(d("\u03B8", "z"))}</td><td>Rotaci\xF3n alrededor de Z</td></tr>
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
<p>${Ct(s, "{F}")}</p>

<p>Cada nodo recibe carga ${q(`${d("F", "z")} = <b>${F(e, 2)}</b>`)} en direcci\xF3n Z.</p>

<hr/>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<h2>PASO 8: CONDICIONES DE CONTORNO</h2>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<div class="step-box">
  <h4>\u{1F512} 8.1 Aplicar Apoyos (M\xE9todo de Penalizaci\xF3n)</h4>
</div>

<h4>Nodos con apoyo: ${f} (todos los del borde)</h4>
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
<p style="font-size: 14pt; text-align: center;">${q(`[${d("K")}]_{${l}\xD7${l}} \xB7 {${d("U")}}_{${l}\xD71} = {${d("F")}}_{${l}\xD71}`)}</p>

<h4>C\xF3digo C++ (Solver LU disperso - Eigen):</h4>
<div class="code-block">Eigen::SparseLU<Eigen::SparseMatrix<<span class="ty">double</span>>> solver;
solver.<span class="fn">compute</span>(K);

<span class="kw">if</span> (solver.<span class="fn">info</span>() != Eigen::Success) {
    <span class="kw">throw</span> std::<span class="fn">runtime_error</span>(<span class="str">"Factorizaci\xF3n LU fall\xF3"</span>);
}

U = solver.<span class="fn">solve</span>(F);  <span class="cm">// U = K\u207B\xB9 \xB7 F</span></div>

<h4>Vector de desplazamientos (muestra primeros nodos):</h4>
<p>${Ct(X.slice(0, 12), "{U}")}</p>

<hr/>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<h2>PASO 10: POST-PROCESO (analyze)</h2>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<div class="step-box">
  <h4>\u{1F4C8} 10.1 C\xE1lculo de Momentos Flectores</h4>
</div>

<h4>Ecuaciones de momentos:</h4>
<p>${q(`${d("M", "xx")} = ${d("D")}\xB7(${d("\u03BA", "xx")} + ${d("\u03BD")}\xB7${d("\u03BA", "yy")})`)}</p>
<p>${q(`${d("M", "yy")} = ${d("D")}\xB7(${d("\u03BA", "yy")} + ${d("\u03BD")}\xB7${d("\u03BA", "xx")})`)}</p>
<p>${q(`${d("M", "xy")} = ${d("D")}\xB7(1 - ${d("\u03BD")})\xB7${dt(d("\u03BA", "xy"), "2")}`)}</p>

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
<p style="font-size: 14pt;">${q(`${d("w", "max")} = <b>${F(x, 6)}</b>`)}</p>
</div>

<div class="success">
<h4>\u2705 Momento m\xE1ximo M<sub>xx</sub>:</h4>
<p style="font-size: 14pt;">${q(`${d("M", "xx,max")} = <b>${F(v, 4)}</b>`)}</p>
</div>

<h4>Tabla de desplazamientos (primeros 6 nodos):</h4>
<table class="bordered">
  <tr><th>Nodo</th><th>u<sub>x</sub></th><th>u<sub>y</sub></th><th>u<sub>z</sub></th></tr>
  ${z.map((n) => `<tr><td>${n.i}</td><td>${F(n.ux, 6)}</td><td>${F(n.uy, 6)}</td><td class="${Math.abs(n.uz) > 1e-3 ? "err" : ""}">${F(n.uz, 6)}</td></tr>`).join("")}
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
    return $t`${yt(j)}`;
  }
  const aa = `
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
  function k(t, a = 4) {
    return t == null || isNaN(t) || Math.abs(t) < 1e-10 ? "0" : t.toFixed(a).replace(".", ",");
  }
  function G(t, a) {
    return `<span class="dvc"><span class="dvr">${t}</span><span class="dvl"></span><span class="dvs">${a}</span></span>`;
  }
  function xt(t) {
    return `<span class="eq">${t}</span>`;
  }
  function W(t, a) {
    return a ? `<var>${t}</var><sub>${a}</sub>` : `<var>${t}</var>`;
  }
  function at(t, a = 4) {
    if (!t || !t.length) return "";
    let r = `<span class="matrix">
`;
    for (let m = 0; m < t.length; m++) {
      r += '<span class="tr"><span class="td"></span>';
      for (let w = 0; w < t[m].length; w++) {
        const C = t[m][w], g = typeof C == "number" ? k(C, a) : C;
        r += `<span class="td">${g}</span>`;
      }
      r += `<span class="td"></span></span>
`;
    }
    return r += "</span>", r;
  }
  function oa(t) {
    const p = Math.sqrt(16), v = Math.sqrt(-2 * -2 + 3 * 3), o = Math.sqrt(-2 * -2 + -3 * -3), i = -3 / (2 * 6), $ = -2 / (2 * 6), N = 3 / (2 * 6), E = -2 / (2 * 6), _ = 0 / (2 * 6), s = 4 / (2 * 6), X = 0.5 * 0 * -2, z = 0.5 * 3 * 4, K = 0.5 * 4 * -2, j = 0.5 * 0 * 3, n = 21e4 * Math.pow(0.2, 3) / (12 * (1 - 0.3 * 0.3)), O = 21e4 / (2 * (1 + 0.3)), Q = 5 / 6 * O * 0.2, rt = 6 * 0.2, it = 1 / 8, pt = it * it / 4, bt = [
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
    ], ft = [
      [
        "1",
        "0"
      ],
      [
        "0",
        "1"
      ]
    ], vt = [
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
    ], Mt = [
      [
        0,
        0,
        k(i),
        0,
        0,
        k(N),
        0,
        0,
        k(_)
      ],
      [
        0,
        k($),
        0,
        0,
        k(E),
        0,
        0,
        k(s),
        0
      ],
      [
        0,
        k(i),
        k($),
        0,
        k(N),
        k(E),
        0,
        k(_),
        k(s)
      ]
    ], At = [
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
    ], Et = -2 / (2 * 6), H = 6 / (2 * 6), tt = 0, St = -2 / (2 * 6), _t = X / (2 * 6), Tt = K / (2 * 6), Ft = 4 / (2 * 6), Lt = -6 / (2 * 6), Rt = 4 / (2 * 6), It = -3 / (2 * 6), Pt = 0, Bt = -6 / (2 * 6), Ot = 3 / (2 * 6), qt = j / (2 * 6), Gt = z / (2 * 6), Kt = 0 / (2 * 6), jt = -0 / (2 * 6), Vt = 0 / (2 * 6), Xt = [
      [
        Et,
        H,
        tt,
        St,
        _t,
        Tt,
        Ft,
        Lt,
        Rt
      ],
      [
        It,
        Pt,
        Bt,
        Ot,
        qt,
        Gt,
        Kt,
        jt,
        Vt
      ]
    ], Yt = -2 / (4 * 6), Ut = 3 / (4 * 6), Zt = 1, Qt = -2 / (4 * 6), Ht = -3 / (4 * 6), Jt = 0, Wt = 4 / (4 * 6), te = 0 / (4 * 6), ee = 0, ae = -2 / (4 * 6), oe = 3 / (4 * 6), se = 0, ne = -2 / (4 * 6), re = -3 / (4 * 6), ie = 1, le = 4 / (4 * 6), de = 0 / (4 * 6), ce = 0, pe = -2 / (4 * 6), me = 3 / (4 * 6), ue = 0, he = -2 / (4 * 6), be = -3 / (4 * 6), fe = 0, xe = 4 / (4 * 6), ge = 0 / (4 * 6), $e = [
      [
        Yt,
        Ut,
        Zt,
        Qt,
        Ht,
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
        re,
        ie,
        le,
        de,
        ce
      ],
      [
        pe,
        me,
        ue,
        he,
        be,
        fe,
        xe,
        ge,
        1
      ]
    ], ye = -3 * -3 * p * p / (4 * 6 * 6), ve = 2 * -2 * p * p / (4 * 6 * 6), Me = (-3 * 2 + -2 * -3) * p * p / (4 * 6 * 6), Ae = 3 * 0 * v * v / (4 * 6 * 6), Ee = 2 * 4 * v * v / (4 * 6 * 6), ze = (3 * -4 + -2 * 0) * v * v / (4 * 6 * 6), we = 0 * 3 * o * o / (4 * 6 * 6), Ne = -4 * -2 * o * o / (4 * 6 * 6), ke = (0 * 2 + 4 * 3) * o * o / (4 * 6 * 6), Ce = [
      [
        ye,
        ve,
        Me
      ],
      [
        Ae,
        Ee,
        ze
      ],
      [
        we,
        Ne,
        ke
      ]
    ], et = [
      pt,
      1,
      2,
      1,
      0,
      1,
      -1,
      -1,
      -1,
      -2
    ], De = 2 * 6 / 3 * et[1] / (p * p), Se = 2 * 6 / 3 * et[2] / (p * p), _e = 2 * 6 / 3 * et[3] / (p * p), Te = 2 * 6 / 3 * et[4] / (v * v), Fe = 2 * 6 / 3 * et[5] / (v * v), Le = 2 * 6 / 3 * et[6] / (v * v), Re = 2 * 6 / 3 * et[7] / (o * o), Ie = 2 * 6 / 3 * et[8] / (o * o), Pe = 2 * 6 / 3 * et[9] / (o * o), Be = [
      [
        De,
        Se,
        _e
      ],
      [
        Te,
        Fe,
        Le
      ],
      [
        Re,
        Ie,
        Pe
      ]
    ], Oe = `
<style>${aa}</style>

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
${xt(`${W("A")} = ${G("1", "2")} \xB7 (x'\u2082\u2081\xB7y'\u2083\u2081 - x'\u2083\u2081\xB7y'\u2082\u2081) = ${G("1", "2")} \xB7 (4\xB73 - 2\xB70) = <b>${k(6, 2)}</b>`)}
</div>

<h3>2.4 Longitudes de los Lados</h3>
<table class="bordered data">
<tr><th>Lado</th><th>Longitud</th></tr>
<tr><td>l\u2082\u2081 (Nodo 1\u21922)</td><td>${k(p, 4)}</td></tr>
<tr><td>l\u2083\u2082 (Nodo 2\u21923)</td><td>${k(v, 4)}</td></tr>
<tr><td>l\u2081\u2083 (Nodo 3\u21921)</td><td>${k(o, 4)}</td></tr>
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
<p><b>N\u2081(x', y') = </b>${G("1", "2A")}[x'\u2082y'\u2083 - x'\u2083y'\u2082 + y'\u2082\u2083x' + x'\u2083\u2082y']</p>
<p><b>N\u2082(x', y') = </b>${G("1", "2A")}[x'\u2083y'\u2081 - x'\u2081y'\u2083 + y'\u2083\u2081x' + x'\u2081\u2083y']</p>
<p><b>N\u2083(x', y') = </b>${G("1", "2A")}[x'\u2081y'\u2082 - x'\u2082y'\u2081 + y'\u2081\u2082x' + x'\u2082\u2081y']</p>
</div>

<h3>3.4 Verificaci\xF3n en los Nodos</h3>
<p>Verificamos que las funciones de forma cumplen la condici\xF3n de interpolaci\xF3n:</p>

<table class="bordered data">
<tr><th>Punto</th><th>N\u2081</th><th>N\u2082</th><th>N\u2083</th><th>Suma</th></tr>
<tr><td>Nodo 1 (0, 0)</td><td><b>1</b></td><td>0</td><td>0</td><td>1</td></tr>
<tr><td>Nodo 2 (4, 0)</td><td>0</td><td><b>1</b></td><td>0</td><td>1</td></tr>
<tr><td>Nodo 3 (2, 3)</td><td>0</td><td>0</td><td><b>1</b></td><td>1</td></tr>
<tr><td>Centroide (${k(6 / 3, 2)}, ${k(3 / 3, 2)})</td><td>\u2153</td><td>\u2153</td><td>\u2153</td><td>1</td></tr>
</table>

<h3>3.5 Derivadas de las Funciones de Forma</h3>
<p>Las derivadas parciales de las funciones de forma son <b>constantes</b> sobre todo el elemento (caracter\xEDstica del elemento lineal):</p>

<div class="formula-box">
<p>${G("\u2202N\u2081", "\u2202x'")} = ${G("y'\u2082\u2083", "2A")} = ${G(String(-3), "2\xB7" + k(6, 2))} = ${k(i)}</p>
<p>${G("\u2202N\u2081", "\u2202y'")} = ${G("x'\u2083\u2082", "2A")} = ${G(String(-2), "2\xB7" + k(6, 2))} = ${k($)}</p>
</div>

<div class="formula-box">
<p>${G("\u2202N\u2082", "\u2202x'")} = ${G("y'\u2083\u2081", "2A")} = ${G(String(3), "2\xB7" + k(6, 2))} = ${k(N)}</p>
<p>${G("\u2202N\u2082", "\u2202y'")} = ${G("x'\u2081\u2083", "2A")} = ${G(String(-2), "2\xB7" + k(6, 2))} = ${k(E)}</p>
</div>

<div class="formula-box">
<p>${G("\u2202N\u2083", "\u2202x'")} = ${G("y'\u2081\u2082", "2A")} = ${G(String(0), "2\xB7" + k(6, 2))} = ${k(_)}</p>
<p>${G("\u2202N\u2083", "\u2202y'")} = ${G("x'\u2082\u2081", "2A")} = ${G(String(4), "2\xB7" + k(6, 2))} = ${k(s)}</p>
</div>

<p><b>Tabla resumen de derivadas:</b></p>
<table class="bordered data">
<tr><th>Funci\xF3n</th><th>\u2202N/\u2202x'</th><th>\u2202N/\u2202y'</th></tr>
<tr><td>N\u2081</td><td>${k(i)}</td><td>${k($)}</td></tr>
<tr><td>N\u2082</td><td>${k(N)}</td><td>${k(E)}</td></tr>
<tr><td>N\u2083</td><td>${k(_)}</td><td>${k(s)}</td></tr>
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
${xt(`${W("D", "flex")} = ${G(`${W("E")}\xB7${W("h")}<sup>3</sup>`, `12\xB7(1 - ${W("\u03BD")}<sup>2</sup>)`)} = ${G(`210000\xB7${0.2}<sup>3</sup>`, `12\xB7(1 - ${0.3}<sup>2</sup>)`)} = <b>${k(n, 2)}</b>`)}
</div>

<p>[D] = D<sub>flex</sub> \xD7 ${at(bt)}</p>

<h3>4.2 Matriz de Rigidez Cortante [F]</h3>
<p>Para cortante transversal (con factor de correcci\xF3n \u03BA = 5/6):</p>

<div class="formula-box">
${xt(`${W("G")} = ${G(W("E"), `2\xB7(1 + ${W("\u03BD")})`)} = ${G(String(21e4), `2\xB7(1 + ${0.3})`)} = <b>${k(O, 2)}</b>`)}
<br>
${xt(`${W("F", "shear")} = ${G("5", "6")}\xB7${W("G")}\xB7${W("h")} = ${G("5", "6")}\xB7${k(O, 2)}\xB7${0.2} = <b>${k(Q, 2)}</b>`)}
</div>

<p>[F] = F<sub>shear</sub> \xD7 ${at(ft)}</p>

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
<p>[B<sub>pb</sub>] = ${G("1", "2A")} \xD7 ${at(vt)}</p>

<p><b>Matriz [B<sub>pb</sub>] valores num\xE9ricos:</b></p>
<p>${at(Mt)}</p>

<h3>5.2 Matriz B de Cortante DSG [B<sub>s</sub>] (2\xD79)</h3>
<p>El enfoque DSG (Discrete Shear Gap) evita el bloqueo por cortante evaluando los "shear gaps" en los nodos (Ecuaci\xF3n 11):</p>

<div class="formula-box">
<p>\u0394w<sup>\u03B3</sup><sub>\u03BE\u2082</sub> en nodo 2 = w'\u2082 - w'\u2081 + \xBD[x'\u2082\u2081(\u03B8<sub>y'1</sub> + \u03B8<sub>y'2</sub>) - y'\u2082\u2081(\u03B8<sub>x'1</sub> + \u03B8<sub>x'2</sub>)]</p>
<p>\u0394w<sup>\u03B3</sup><sub>\u03BE\u2083</sub> en nodo 3 = w'\u2083 - w'\u2081 + \xBD[x'\u2083\u2081(\u03B8<sub>y'1</sub> + \u03B8<sub>y'3</sub>) - y'\u2083\u2081(\u03B8<sub>x'1</sub> + \u03B8<sub>x'3</sub>)]</p>
</div>

<p><b>Par\xE1metros auxiliares (Ecuaci\xF3n 16):</b></p>
<table class="bordered data">
<tr><td>a\u2081 = \xBD\xB7y'\u2081\u2082\xB7x'\u2081\u2083</td><td>${k(X)}</td></tr>
<tr><td>a\u2082 = \xBD\xB7y'\u2083\u2081\xB7x'\u2082\u2081</td><td>${k(z)}</td></tr>
<tr><td>a\u2083 = \xBD\xB7x'\u2082\u2081\xB7x'\u2081\u2083</td><td>${k(K)}</td></tr>
<tr><td>a\u2084 = \xBD\xB7y'\u2081\u2082\xB7y'\u2083\u2081</td><td>${k(j)}</td></tr>
</table>

<p><b>Matriz [B<sub>s</sub>] estructura (Ecuaci\xF3n 15):</b></p>
<p>${at(At)}</p>

<p><b>Matriz [B<sub>s</sub>] valores num\xE9ricos:</b></p>
<p>${at(Xt)}</p>

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
<p>V = ${k(rt, 4)}</p>

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
<p>${at(Ce)}</p>

<h4>6.2.3 Par\xE1metros \u03B2 (ANDES)</h4>
<p>Los par\xE1metros \u03B2 definen los modos de deformaci\xF3n desviatorios (Ecuaci\xF3n 30):</p>

<table class="bordered data">
<tr><th>Par\xE1metro</th><th>Valor</th><th>Descripci\xF3n</th></tr>
<tr><td>\u03B2\u2080</td><td>${k(pt, 6)}</td><td>Factor de escala (\u03B1\xB2/4)</td></tr>
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
<p>${at(Be)}</p>

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
    return $t`${yt(Oe)}`;
  }
  const sa = `
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
  function Y(t, a = 4) {
    return Math.abs(t) < 1e-4 || Math.abs(t) > 1e5 ? t.toExponential(a) : t.toFixed(a);
  }
  function gt(t, a) {
    return `<span class="frac"><span class="frac-num">${t}</span><span class="frac-den">${a}</span></span>`;
  }
  function U(t) {
    return `<span class="var">${t}</span>`;
  }
  function st(t) {
    return `<span class="num">${t}</span>`;
  }
  function ut(t) {
    return `<span class="result">${t}</span>`;
  }
  function Dt(t, a, r, m, w) {
    if (!t.length || !a.length || !r.length) return `<p style="color:#999;margin:10px;">No data available for ${w}</p>`;
    const C = t.map((o) => o[0]), g = t.map((o) => o[1]), M = Math.min(...C), D = Math.max(...C), A = Math.min(...g), R = Math.max(...g), y = D - M || 1, h = R - A || 1, L = m / Math.max(y, h), c = h * L, u = 20, T = r.filter((o) => o !== void 0 && !isNaN(o));
    if (!T.length) return "";
    const b = Math.min(...T), I = Math.max(...T), f = Math.abs(I - b) || 1;
    function l(o) {
      const i = Math.max(0, Math.min(1, (o - b) / f));
      let $, N, E;
      return i < 0.25 ? ($ = 0, N = Math.floor(255 * i * 4), E = 255) : i < 0.5 ? ($ = 0, N = 255, E = Math.floor(255 * (1 - (i - 0.25) * 4))) : i < 0.75 ? ($ = Math.floor(255 * (i - 0.5) * 4), N = 255, E = 0) : ($ = 255, N = Math.floor(255 * (1 - (i - 0.75) * 4)), E = 0), `rgb(${$},${N},${E})`;
    }
    const e = `grad_${w.replace(/[^a-zA-Z0-9]/g, "")}`;
    let x = `<svg viewBox="-20 -20 ${m + 80} ${c + 2 * u}" xmlns="http://www.w3.org/2000/svg" style="width:${m + 80}px;height:${c + 40}px;font-family:Arial;font-size:10px;">
<defs>
<linearGradient id="${e}" x1="0%" y1="100%" x2="0%" y2="0%">
<stop offset="0%" style="stop-color:#0000ff"/>
<stop offset="25%" style="stop-color:#00ffff"/>
<stop offset="50%" style="stop-color:#00ff00"/>
<stop offset="75%" style="stop-color:#ffff00"/>
<stop offset="100%" style="stop-color:#ff0000"/>
</linearGradient>
</defs>`;
    a.forEach((o) => {
      const i = o.reduce((E, _) => E + (r[_] || 0), 0) / o.length, $ = l(i), N = o.map((E) => {
        const _ = (t[E][0] - M) * L, s = c - (t[E][1] - A) * L;
        return `${_.toFixed(2)},${s.toFixed(2)}`;
      }).join(" ");
      x += `<polygon points="${N}" fill="${$}" stroke="#333" stroke-width="0.3"/>`;
    });
    const p = m + 10, v = Math.max(c - 20, 60);
    x += `<rect x="${p}" y="10" width="15" height="${v}" fill="url(#${e})" stroke="#333"/>`;
    for (let o = 0; o <= 4; o++) {
      const i = b + f * o / 4, $ = 10 + v - v * o / 4;
      x += `<text x="${p + 20}" y="${$ + 4}">${i.toExponential(2)}</text>`;
    }
    return x += `<text x="${p}" y="5" font-weight="bold">${w}</text>`, x += "</svg>", x;
  }
  function na(t) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s;
    const a = ((_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val) || [], r = ((_b = t == null ? void 0 : t.elements) == null ? void 0 : _b.val) || [], m = ((_c = t == null ? void 0 : t.nodeInputs) == null ? void 0 : _c.val) || {}, w = ((_d = t == null ? void 0 : t.elementInputs) == null ? void 0 : _d.val) || {}, C = ((_e = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _e.val) || {}, g = ((_f = t == null ? void 0 : t.analyzeOutputs) == null ? void 0 : _f.val) || {}, M = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric"
    }), D = ((_j = (_h = (_g = w.elasticities) == null ? void 0 : _g.values) == null ? void 0 : (_i = _h.call(_g)).next) == null ? void 0 : _j.call(_i).value) || 21e4, A = ((_n = (_l = (_k = w.poissonsRatios) == null ? void 0 : _k.values) == null ? void 0 : (_m = _l.call(_k)).next) == null ? void 0 : _n.call(_m).value) || 0.3, R = ((_r = (_p = (_o = w.thicknesses) == null ? void 0 : _o.values) == null ? void 0 : (_q = _p.call(_o)).next) == null ? void 0 : _r.call(_q).value) || 0.2, y = ((_s = m.supports) == null ? void 0 : _s.size) || 0, h = D * Math.pow(R, 3) / (12 * (1 - A * A)), L = D / (2 * (1 + A)), c = C.deformations || [], u = [];
    let T = 0, b = 0;
    c.forEach((_, s) => {
      u[s] = _[2] || 0, Math.abs(_[2]) > Math.abs(T) && (T = _[2], b = s);
    });
    const I = g.bendingXX || [], f = g.bendingYY || [], l = [];
    let e = 0, x = 0;
    r.forEach((_, s) => {
      const X = I[s] || [
        0
      ], z = f[s] || [
        0
      ], K = X.reduce((n, O) => n + O, 0) / X.length, j = z.reduce((n, O) => n + O, 0) / z.length;
      l[s] = K, Math.abs(K) > Math.abs(e) && (e = K), Math.abs(j) > Math.abs(x) && (x = j);
    });
    let p = "";
    for (let _ = 0; _ < Math.min(a.length, 8); _++) {
      const s = a[_];
      p += `<tr><td>${_}</td><td>${(s[0] || 0).toFixed(3)}</td><td>${(s[1] || 0).toFixed(3)}</td><td>${(s[2] || 0).toFixed(3)}</td></tr>`;
    }
    let v = "";
    for (let _ = 0; _ < Math.min(c.length, 8); _++) {
      const s = c[_] || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      v += `<tr><td>${_}</td><td>${Y(s[0] || 0)}</td><td>${Y(s[1] || 0)}</td><td>${Y(s[2] || 0)}</td></tr>`;
    }
    const o = Dt(a, r, u, 320, "w [displacement]"), i = new Array(a.length).fill(0), $ = new Array(a.length).fill(0);
    r.forEach((_, s) => {
      _.forEach((X) => {
        i[X] += l[s] || 0, $[X]++;
      });
    }), i.forEach((_, s) => {
      $[s] > 0 && (i[s] /= $[s]);
    });
    const N = Dt(a, r, i, 320, "Mxx [bending]"), E = `
<style>${sa}</style>

<header class="header">
  <div class="header-left">
    <h6>Shell Analysis Report</h6>
    <p class="text" style="margin:0">
      <a href="https://awatif.co" target="_blank">Awatif.co</a> | ${M}
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
    ${U("E")} = ${st(Y(D))} <span class="unit">(elastic modulus)</span>
  </div>
  <div class="eq">
    ${U("\u03BD")} = ${st(Y(A, 2))} <span class="unit">(Poisson's ratio)</span>
  </div>
  <div class="eq">
    ${U("t")} = ${st(Y(R))} <span class="unit">(thickness)</span>
  </div>
</div>

<h2>2. Derived Properties</h2>
<div class="formula-section">
  <h3>Flexural Rigidity</h3>
  <div class="eq">
    ${U("D")} = ${gt(U("E") + " \xB7 " + U("t") + "\xB3", "12 \xB7 (1 - " + U("\u03BD") + "\xB2)")}
    = ${gt(st(Y(D)) + " \xB7 " + st(Y(R)) + "\xB3", "12 \xB7 (1 - " + st(Y(A, 2)) + "\xB2)")}
    = ${ut(Y(h))}
  </div>

  <h3>Shear Modulus</h3>
  <div class="eq">
    ${U("G")} = ${gt(U("E"), "2 \xB7 (1 + " + U("\u03BD") + ")")}
    = ${gt(st(Y(D)), "2 \xB7 (1 + " + st(Y(A, 2)) + ")")}
    = ${ut(Y(L))}
  </div>
</div>

<h2>3. Mesh Information</h2>
<div class="summary-box">
  <div class="summary-item">
    <div class="label">NODES</div>
    <div class="value">${a.length}</div>
  </div>
  <div class="summary-item">
    <div class="label">ELEMENTS</div>
    <div class="value">${r.length}</div>
  </div>
  <div class="summary-item">
    <div class="label">SUPPORTS</div>
    <div class="value">${y}</div>
  </div>
  <div class="summary-item">
    <div class="label">DOFs</div>
    <div class="value">${a.length * 6}</div>
  </div>
</div>

<h2>4. Results Summary</h2>
<div class="formula-section">
  <h3>Maximum Displacement</h3>
  <div class="eq">
    ${U("w")}${U("<sub>max</sub>")} = ${ut(Y(T))} <span class="unit">at node ${b}</span>
  </div>

  <h3>Maximum Bending Moments</h3>
  <div class="eq">
    ${U("M")}${U("<sub>xx,max</sub>")} = ${ut(Y(e))}
  </div>
  <div class="eq">
    ${U("M")}${U("<sub>yy,max</sub>")} = ${ut(Y(x))}
  </div>
</div>

<h2>5. Displacement Contour</h2>
<div class="contour-container">
  ${o}
</div>

<h2>6. Bending Moment Mxx Contour</h2>
<div class="contour-container">
  ${N}
</div>

<h2>7. Node Coordinates ${a.length > 8 ? `(first 8 of ${a.length})` : ""}</h2>
<table>
  <tr><th>Node</th><th>X</th><th>Y</th><th>Z</th></tr>
  ${p}
</table>

<h2>8. Nodal Displacements ${c.length > 8 ? `(first 8 of ${c.length})` : ""}</h2>
<table>
  <tr><th>Node</th><th>u<sub>x</sub></th><th>u<sub>y</sub></th><th>w</th></tr>
  ${v}
</table>

<br><br>
<p class="text" style="color:#999;font-size:11px;">Generated with Awatif - Report with Calcpad-style formulas</p>
`;
    return $t`${yt(E)}`;
  }
  const ct = {
    xPosition: {
      value: Z.state(15),
      min: 5,
      max: 20,
      label: "xPosition",
      unit: "length"
    },
    Ex: {
      value: Z.state(100),
      min: 50,
      max: 500,
      step: 10,
      label: "Ex",
      unit: "stress"
    },
    Ey: {
      value: Z.state(100),
      min: 50,
      max: 500,
      step: 10,
      label: "Ey",
      unit: "stress"
    },
    load: {
      value: Z.state(-3),
      min: -10,
      max: 10,
      step: 1,
      label: "load",
      unit: "force"
    }
  }, V = {
    nodes: Z.state([]),
    elements: Z.state([]),
    nodeInputs: Z.state({}),
    elementInputs: Z.state({}),
    deformOutputs: Z.state({}),
    analyzeOutputs: Z.state({})
  };
  Z.derive(() => {
    var _a;
    const { nodes: t, elements: a, boundaryIndices: r } = Ze({
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
          ct.xPosition.value.val,
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
      supports: new Map(r.map((g) => [
        g,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])),
      loads: new Map(t.map((g, M) => [
        M,
        [
          0,
          0,
          ct.load.value.val,
          0,
          0,
          0
        ]
      ]))
    }, V.nodes.val = t, V.elements.val = a;
    const m = 0.3, C = (ct.Ex.value.val + ct.Ey.value.val) / 2 / (2 * (1 + m));
    if (V.elementInputs.val = {
      elasticities: new Map(a.map((g, M) => [
        M,
        ct.Ex.value.val
      ])),
      elasticitiesOrthogonal: new Map(a.map((g, M) => [
        M,
        ct.Ey.value.val
      ])),
      thicknesses: new Map(a.map((g, M) => [
        M,
        1
      ])),
      poissonsRatios: new Map(a.map((g, M) => [
        M,
        m
      ])),
      shearModuli: new Map(a.map((g, M) => [
        M,
        C
      ]))
    }, V.deformOutputs.val = Ye(t, a, V.nodeInputs.val, V.elementInputs.val), V.analyzeOutputs.val = Xe(t, a, V.elementInputs.val, V.deformOutputs.val), (_a = V.deformOutputs.val) == null ? void 0 : _a.deformations) {
      let g = 0;
      V.deformOutputs.val.deformations.forEach((M) => {
        Math.abs(M[2]) > Math.abs(g) && (g = M[2]);
      }), console.log(`Max deflection: ${g.toFixed(4)} (expected: ~-3.98)`);
    }
  });
  const nt = Z.state(""), ht = Z.state(void 0);
  Z.derive(() => {
    var _a;
    if (nt.val === "Calcpad") try {
      const t = mt({
        template: zt,
        data: V
      });
      ht.val = t;
    } catch (t) {
      console.error("Error generating Calcpad report:", t);
    }
    if (nt.val === "Awatif") try {
      const t = mt({
        template: na,
        data: V
      });
      ht.val = t;
    } catch (t) {
      console.error("Error generating Awatif report:", t);
    }
    if (nt.val === "Code") try {
      const t = mt({
        template: ea,
        data: V
      });
      ht.val = t;
    } catch (t) {
      console.error("Error generating Code report:", t);
    }
    if (nt.val === "Docs") try {
      const t = mt({
        template: oa,
        data: V
      });
      ht.val = t;
    } catch (t) {
      console.error("Error generating Docs report:", t);
    }
    if (nt.val === "Print") {
      const t = mt({
        template: zt,
        data: V
      }), a = window.open("", "_blank");
      if (a) {
        const r = (t == null ? void 0 : t.innerHTML) || "";
        a.document.write(`
        <!DOCTYPE html>
        <html>
        <head><title>Plate FEM Report</title></head>
        <body>${r}</body>
        </html>
      `), a.document.close();
      }
    }
    if (nt.val === "HTML") {
      const r = `<!DOCTYPE html>
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
${((_a = mt({
        template: zt,
        data: V
      })) == null ? void 0 : _a.innerHTML) || ""}
<hr>
<p style="font-size:11px; color:#666;">Generated with Awatif - Plate FEM Analysis</p>
</body>
</html>`, m = new Blob([
        r
      ], {
        type: "text/html"
      }), w = URL.createObjectURL(m), C = document.createElement("a");
      C.href = w, C.download = "plate_fem_report.html", document.body.appendChild(C), C.click(), document.body.removeChild(C), URL.revokeObjectURL(w), nt.val = "";
    }
  });
  document.body.append(Ue(ct), qe({
    mesh: V,
    settingsObj: {
      nodes: false,
      deformedShape: true,
      loads: false,
      shellResults: "displacementZ"
    }
  }), Ge(V), Ke({
    position: "top-left",
    expanded: false
  }), je({
    dialogBody: ht
  }), Ve({
    clickedButton: nt,
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
