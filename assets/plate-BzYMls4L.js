import { x as W, v as T, g as Q, e as tt, b as et, d as ot } from "./styles-9FDjb-ad.js";
import { a as nt } from "./analyze-CmnHHflB.js";
import { d as st, __tla as __tla_0 } from "./deformCpp-CS-wCYO-.js";
import { g as at } from "./getParameters-agyy6sUI.js";
import { g as it } from "./getDialog-BiqeruR6.js";
import { g as L } from "./getReport-CYLnG9Sc.js";
import { g as rt, __tla as __tla_1 } from "./getMesh-DmUdekin.js";
import { o as lt } from "./unsafe-html-Dv3uUXY0.js";
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
  function u(t, o = 4) {
    return t == null || isNaN(t) || Math.abs(t) < 1e-10 ? "0" : t.toFixed(o).replace(".", ",");
  }
  function f(t, o = 4) {
    return t == null || isNaN(t) || Math.abs(t) < 1e-10 ? "0" : t.toFixed(o);
  }
  function q(t, o) {
    return `<span class="dvc">${t}<span class="dvl"></span>${o}</span>`;
  }
  function M(t) {
    return `<span class="eq">${t}</span>`;
  }
  function e(t, o) {
    return o ? `<var>${t}</var><sub>${o}</sub>` : `<var>${t}</var>`;
  }
  function ct(t, o = 4) {
    if (!t || !t.length) return "";
    let x = `<span class="matrix">
`;
    for (let p = 0; p < t.length; p++) {
      x += '<span class="tr"><span class="td"></span>';
      for (let c = 0; c < t[p].length; c++) x += `<span class="td">${u(t[p][c], o)}</span>`;
      x += `<span class="td"></span></span>
`;
    }
    return x += "</span>", x;
  }
  function dt(t, o, x, p) {
    const C = 110 / Math.max(t, 1), F = (120 - 2 * 25) / Math.max(o, 1), A = Math.min(C, F), X = t * A, g = o * A, d = 25, b = 25;
    let $ = '<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" style="width:160pt; height:120pt; font-family:Arial; font-size:9px;">';
    $ += `<defs>
    <marker id="arrowStart" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
      <path d="M6,0 L0,3 L6,6" fill="none" stroke="#333" stroke-width="1"/>
    </marker>
    <marker id="arrowEnd" markerWidth="6" markerHeight="6" refX="0" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6" fill="none" stroke="#333" stroke-width="1"/>
    </marker>
  </defs>`, $ += `<rect x="${d}" y="${b}" width="${X}" height="${g}" fill="#e8e8e8" stroke="#333" stroke-width="1.5"/>`;
    const r = 4, z = 5;
    for (let a = 0; a <= z; a++) {
      const n = d + X * a / z;
      $ += `<polygon points="${n},${b + g} ${n - r},${b + g + r} ${n + r},${b + g + r}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let a = 0; a <= z; a++) {
      const n = b + g * a / z;
      $ += `<polygon points="${d},${n} ${d - r},${n - r} ${d - r},${n + r}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let a = 0; a <= z; a++) {
      const n = b + g * a / z;
      $ += `<polygon points="${d + X},${n} ${d + X + r},${n - r} ${d + X + r},${n + r}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let a = 0; a <= z; a++) {
      const n = d + X * a / z;
      $ += `<polygon points="${n},${b} ${n - r},${b - r} ${n + r},${b - r}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    const v = 3;
    for (let a = 1; a <= v; a++) for (let n = 1; n <= v; n++) {
      const w = d + X * a / (v + 1), j = b + g * n / (v + 1);
      $ += `<line x1="${w}" y1="${j - 8}" x2="${w}" y2="${j + 5}" stroke="#0066cc" stroke-width="1.2" marker-end="url(#arrowEnd)"/>`;
    }
    $ += `<text x="${d + X / 2}" y="${b + g / 2 - 12}" text-anchor="middle" fill="#0066cc" font-style="italic">q</text>`;
    const I = b + g + 18;
    $ += `<line x1="${d}" y1="${I}" x2="${d + X}" y2="${I}" stroke="#333" stroke-width="0.8" marker-start="url(#arrowStart)" marker-end="url(#arrowEnd)"/>`, $ += `<text x="${d + X / 2}" y="${I + 10}" text-anchor="middle" font-style="italic">a</text>`;
    const s = d + X + 18;
    return $ += `<line x1="${s}" y1="${b}" x2="${s}" y2="${b + g}" stroke="#333" stroke-width="0.8" marker-start="url(#arrowStart)" marker-end="url(#arrowEnd)"/>`, $ += `<text x="${s + 8}" y="${b + g / 2 + 3}" font-style="italic">b</text>`, $ += "</svg>", $;
  }
  function mt(t, o, x = 400) {
    if (!t.length || !o.length) return "<p>No mesh data</p>";
    const p = t.map((s) => s[0]), c = t.map((s) => s[1]), S = Math.min(...p), k = Math.max(...p), C = Math.min(...c), F = Math.max(...c), A = k - S || 1, X = F - C || 1, g = x / Math.max(A, X), d = X * g, b = 20, $ = 2.666667, r = 0.01, z = /* @__PURE__ */ new Set();
    t.forEach((s, a) => {
      (Math.abs(s[0] - S) < r || Math.abs(s[0] - k) < r || Math.abs(s[1] - C) < r || Math.abs(s[1] - F) < r) && z.add(a);
    });
    let v = `<svg viewbox="-20 -20 ${f(x + 2 * b, 0)} ${f(d + 2 * b, 6)}" xmlns="http://www.w3.org/2000/svg" version="1.1" style=" font-family: Segoe UI; font-size:10px; width:${x}pt; height:${f(d, 6)}pt">`;
    v += "<style>.joint{fill:orangeRed;} .support{stroke:red; stroke-width:1; fill:lightpink;} .element{stroke:seaGreen; stroke-width:1; fill:lime; fill-opacity:0.1; stroke-opacity:0.5}</style>", v += `<rect x="0" y="0" width="${x}" height="${f(d, 6)}" style="fill:yellow; fill-opacity:0.2" />`, o.forEach((s, a) => {
      const n = s.reduce((l, y) => l + t[y][0], 0) / s.length, w = s.reduce((l, y) => l + t[y][1], 0) / s.length, j = (n - S) * g, B = d - (w - C) * g, i = s.map((l) => {
        const y = (t[l][0] - S) * g, E = d - (t[l][1] - C) * g;
        return `${f(y, 6)},${f(E, 6)}`;
      }).join(" ");
      v += `<text x="${f(j, 6)}" y="${f(B + 4, 6)}" text-anchor="middle">${a + 1}</text>`, v += `<polygon points="${i}" class="element"/>`;
    });
    const I = 5.333333;
    return z.forEach((s) => {
      const a = (t[s][0] - S) * g, n = d - (t[s][1] - C) * g;
      (Math.abs(t[s][1] - C) < r || Math.abs(t[s][1] - F) < r) && (v += `<line x1="${f(a - 2 * I, 6)}" y1="${f(n, 6)}" x2="${f(a + 2 * I, 6)}" y2="${f(n, 6)}" class="support"/>`), (Math.abs(t[s][0] - S) < r || Math.abs(t[s][0] - k) < r) && (v += `<line x1="${f(a, 6)}" y1="${f(n - 2 * I, 6)}" x2="${f(a, 6)}" y2="${f(n + 2 * I, 6)}" class="support"/>`), v += `<circle cx="${f(a, 6)}" cy="${f(n, 6)}" r="${I}" class="support"/>`;
    }), t.forEach((s, a) => {
      const n = (s[0] - S) * g, w = d - (s[1] - C) * g;
      v += `<circle cx="${f(n, 6)}" cy="${f(w, 6)}" r="${$}" class="joint" />`, v += `<text x="${f(n + $ * 2, 6)}" y="${f(w - $, 6)}" text-anchor="start">${a + 1}</text>`;
    }), v += "</svg>", v;
  }
  function ht(t, o, x, p = 400, c = "w") {
    if (!t.length || !o.length || !x.length) return "";
    const S = t.map((i) => i[0]), k = t.map((i) => i[1]), C = Math.min(...S), F = Math.max(...S), A = Math.min(...k), X = Math.max(...k), g = F - C || 1, d = X - A || 1, b = p / Math.max(g, d), $ = d * b, r = 20, z = x.filter((i) => i !== void 0 && !isNaN(i));
    if (!z.length) return "";
    const v = Math.min(...z), I = Math.max(...z), s = Math.abs(I - v) || 1;
    function a(i) {
      const l = Math.max(0, Math.min(1, (i - v) / s));
      let y, E, Y;
      return l < 0.25 ? (y = 0, E = Math.floor(255 * l * 4), Y = 255) : l < 0.5 ? (y = 0, E = 255, Y = Math.floor(255 * (1 - (l - 0.25) * 4))) : l < 0.75 ? (y = Math.floor(255 * (l - 0.5) * 4), E = 255, Y = 0) : (y = 255, E = Math.floor(255 * (1 - (l - 0.75) * 4)), Y = 0), `rgb(${y},${E},${Y})`;
    }
    const n = `colorScale_${c.replace(/[^a-zA-Z0-9]/g, "")}`;
    let w = `<svg viewBox="-20 -20 ${p + 80} ${$ + 2 * r}" xmlns="http://www.w3.org/2000/svg" style="width:${p + 80}pt; height:${f($, 0)}pt; font-family:Arial; font-size:9px;">
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
      const l = i.reduce((Y, G) => Y + (x[G] || 0), 0) / i.length, y = a(l), E = i.map((Y) => {
        const G = (t[Y][0] - C) * b, P = $ - (t[Y][1] - A) * b;
        return `${f(G, 6)},${f(P, 6)}`;
      }).join(" ");
      w += `<polygon points="${E}" fill="${y}" stroke="#333" stroke-width="0.3"/>`;
    });
    const j = p + 10, B = $ - 20;
    w += `<rect x="${j}" y="10" width="15" height="${f(B, 0)}" fill="url(#${n})" stroke="#333"/>`;
    for (let i = 0; i <= 5; i++) {
      const l = v + s * i / 5, y = 10 + B - B * i / 5;
      w += `<text x="${j + 20}" y="${f(y + 3, 0)}">${u(l, 4)}</text>`;
    }
    return w += `<text x="${j}" y="5">${c}</text>`, w += "</svg>", w;
  }
  function H(t, o, x, p = 400, c = "M") {
    if (!t.length || !o.length) return "";
    const S = x.filter((i) => i !== void 0 && !isNaN(i));
    if (!S.length) return "<p><i>No data for contour map</i></p>";
    const k = t.map((i) => i[0]), C = t.map((i) => i[1]), F = Math.min(...k), A = Math.max(...k), X = Math.min(...C), g = Math.max(...C), d = A - F || 1, b = g - X || 1, $ = p / Math.max(d, b), r = b * $, z = 20, v = Math.min(...S), I = Math.max(...S), s = Math.abs(I - v) || 1;
    function a(i) {
      const l = Math.max(0, Math.min(1, (i - v) / s));
      let y, E, Y;
      return l < 0.25 ? (y = 0, E = Math.floor(255 * l * 4), Y = 255) : l < 0.5 ? (y = 0, E = 255, Y = Math.floor(255 * (1 - (l - 0.25) * 4))) : l < 0.75 ? (y = Math.floor(255 * (l - 0.5) * 4), E = 255, Y = 0) : (y = 255, E = Math.floor(255 * (1 - (l - 0.75) * 4)), Y = 0), `rgb(${y},${E},${Y})`;
    }
    const n = `colorScaleElem_${c.replace(/[^a-zA-Z0-9]/g, "")}`;
    let w = `<svg viewBox="-20 -20 ${p + 80} ${r + 2 * z}" xmlns="http://www.w3.org/2000/svg" style="width:${p + 80}pt; height:${f(r, 0)}pt; font-family:Arial; font-size:9px;">
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
      const y = x[l] || 0, E = a(y), Y = i.map((G) => {
        const P = (t[G][0] - F) * $, _ = r - (t[G][1] - X) * $;
        return `${f(P, 6)},${f(_, 6)}`;
      }).join(" ");
      w += `<polygon points="${Y}" fill="${E}" stroke="#333" stroke-width="0.3"/>`;
    });
    const j = p + 10, B = r - 20;
    w += `<rect x="${j}" y="10" width="15" height="${f(B, 0)}" fill="url(#${n})" stroke="#333"/>`;
    for (let i = 0; i <= 5; i++) {
      const l = v + s * i / 5, y = 10 + B - B * i / 5;
      w += `<text x="${j + 20}" y="${f(y + 3, 0)}">${u(l, 4)}</text>`;
    }
    return w += `<text x="${j}" y="5">${c}</text>`, w += "</svg>", w;
  }
  function K(t) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
    console.log("Template Calcpad style called");
    const o = ((_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val) || [], x = ((_b = t == null ? void 0 : t.elements) == null ? void 0 : _b.val) || [], p = ((_c = t == null ? void 0 : t.nodeInputs) == null ? void 0 : _c.val) || {}, c = ((_d = t == null ? void 0 : t.elementInputs) == null ? void 0 : _d.val) || {}, S = ((_e = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _e.val) || {}, k = ((_f = t == null ? void 0 : t.analyzeOutputs) == null ? void 0 : _f.val) || {}, C = ((_g = c.elasticities) == null ? void 0 : _g.values().next().value) || 100, F = ((_h = c.poissonsRatios) == null ? void 0 : _h.values().next().value) || 0.3, A = ((_i = c.thicknesses) == null ? void 0 : _i.values().next().value) || 1, X = ((_k = (_j = p.loads) == null ? void 0 : _j.values().next().value) == null ? void 0 : _k[2]) || -3, g = o.map((m) => m[0]), d = o.map((m) => m[1]), b = g.length ? Math.max(...g) - Math.min(...g) : 15, $ = d.length ? Math.max(...d) - Math.min(...d) : 10, r = [];
    let z = 0, v = 0;
    S.deformations && S.deformations.forEach((m, h) => {
      r[h] = m[2] || 0, Math.abs(m[2]) > Math.abs(z) && (z = m[2], v = h);
    });
    const I = [], s = [], a = [], n = [], w = [], j = [];
    let B = 0, i = 0, l = 0, y = 0;
    k.bendingXX && k.bendingXX.forEach((m, h) => {
      const R = m.reduce((O, V) => O + V, 0) / m.length;
      I[h] = R, Math.abs(R) > Math.abs(B) && (B = R, i = h);
    }), k.bendingYY && k.bendingYY.forEach((m, h) => {
      const R = m.reduce((O, V) => O + V, 0) / m.length;
      s[h] = R, Math.abs(R) > Math.abs(l) && (l = R, y = h);
    }), k.bendingXY && k.bendingXY.forEach((m, h) => {
      const R = m.reduce((O, V) => O + V, 0) / m.length;
      a[h] = R;
    }), k.membraneXX && k.membraneXX.forEach((m, h) => {
      const R = m.reduce((O, V) => O + V, 0) / m.length;
      n[h] = R;
    }), k.membraneYY && k.membraneYY.forEach((m, h) => {
      const R = m.reduce((O, V) => O + V, 0) / m.length;
      w[h] = R;
    }), k.membraneXY && k.membraneXY.forEach((m, h) => {
      const R = m.reduce((O, V) => O + V, 0) / m.length;
      j[h] = R;
    });
    const E = C * Math.pow(A, 3) / (12 * (1 - F * F)), Y = [
      [
        E,
        E * F,
        0
      ],
      [
        E * F,
        E,
        0
      ],
      [
        0,
        0,
        E * (1 - F) / 2
      ]
    ], G = ((_l = p.supports) == null ? void 0 : _l.size) || 0, P = o.length, _ = x.length, J = `
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
<p>Plate dimensions - ${M(`${e("a")} = ${u(b, 1)}`)} m, ${M(`${e("b")} = ${u($, 1)}`)} m</p>
<p>Thickness - ${M(`${e("t")} = ${u(A, 2)}`)} m</p>
<p>Load - ${M(`${e("q")} = ${u(Math.abs(X), 1)}`)} kN/m\xB2</p>
<p>Modulus of elasticity - ${M(`${e("E")} = ${u(C, 0)}`)} GPa</p>
<p>Poisson's ratio - ${M(`${e("\u03BD")} = ${u(F, 2)}`)}</p>
</td><td style="vertical-align:middle; padding-left:30px;">
${dt(b, $)}
</td></tr></table>

<h4>Finite element mesh</h4>
<p>We will use triangular finite elements with ${M(`${e("n")} = 18`)} DOFs (6 per node)</p>
<p>Total number of elements - ${M(`${e("n", "e")} = ${_}`)}</p>
<p>Total number of joints - ${M(`${e("n", "j")} = ${P}`)}</p>
<p>Supported joints count - ${M(`${e("n", "s")} = ${G}`)}</p>

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
${mt(o, x)}
</div>

<script>
(function() {
  const nodes = ${JSON.stringify(o)};
  const elements = ${JSON.stringify(x)};

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
${o.slice(0, 10).map((m, h) => `
<tr><td>${h + 1}</td><td>${u(m[0], 2)}</td><td>${u(m[1], 2)}</td></tr>
`).join("")}
${P > 10 ? `<tr><td colspan="3">... (${P - 10} more joints)</td></tr>` : ""}
</table>

<h4>Finite element formulation</h4>
<p><b>Shape functions</b></p>
<p>Linear shape functions for triangular element (area coordinates):</p>
<p>${M(`${e("N", "1")}(\u03BE,\u03B7) = 1 - \u03BE - \u03B7`)}</p>
<p>${M(`${e("N", "2")}(\u03BE,\u03B7) = \u03BE`)}</p>
<p>${M(`${e("N", "3")}(\u03BE,\u03B7) = \u03B7`)}</p>

<p><b>Constitutive matrix</b> (stress - strain relationship)</p>
<p>${M(`<b>${e("D")}</b> = ${q(`${e("E")} \xB7 ${e("t")}<sup>3</sup>`, `12 \xB7 (1 - ${e("\u03BD")}<sup>2</sup>)`)} \xB7 <b class="b1">[</b>1; ${e("\u03BD")}; 0 <b class="b0">|</b> ${e("\u03BD")}; 1; 0 <b class="b0">|</b> 0; 0; ${q(`1 - ${e("\u03BD")}`, "2")}<b class="b1">]</b>`)}</p>
<p>${M(`<b>${e("D")}</b> = ${q(`${u(C, 0)} \xB7 ${u(A, 2)}<sup>3</sup>`, `12 \xB7 (1 - ${u(F, 2)}<sup>2</sup>)`)} \xB7 <b class="b1">[</b>1; ${u(F, 2)}; 0 <b class="b0">|</b> ${u(F, 2)}; 1; 0 <b class="b0">|</b> 0; 0; ${q(`1 - ${u(F, 2)}`, "2")}<b class="b1">]</b> = ${ct(Y, 6)}`)}</p>

<p><b>Strain-displacement matrix</b></p>
<p>The bending strain-displacement matrix ${M(`${e("B", "b")}`)} (3\xD718) relates curvatures to nodal DOFs:</p>
<p>${M(`\u03BA = {${e("\u03BA", "xx")}, ${e("\u03BA", "yy")}, ${e("\u03BA", "xy")}}<sup>T</sup> = ${e("B", "b")} \xB7 ${e("u")}`)}</p>

<p><b>Element stiffness matrix</b></p>
<p>${M(`${e("K", "e")} = \u222B\u222B ${e("B")}<sup>T</sup> \xB7 ${e("D")} \xB7 ${e("B")} dA`)}</p>
<p>For shell elements: ${M(`${e("K", "e")} = ${e("K", "b")} + ${e("K", "s")} + ${e("K", "m")}`)}</p>
<p>(bending + shear + membrane)</p>

<h4>Solution</h4>
<p>Total degrees of freedom: ${M(`${P * 6}`)}</p>
<p>Free degrees of freedom: ${M(`${P * 6 - G * 6}`)}</p>
<p>Global system: ${M(`${e("K")} \xB7 ${e("U")} = ${e("F")}`)}</p>
<p>Solution method: LU decomposition</p>

<h4>Results</h4>
<p><b>Displacements</b></p>
<p>Maximum displacement: ${M(`${e("w", "max")} = <span class="${Math.abs(z) > 10 ? "err" : "ok"}">${u(z, 6)}</span>`)} at joint ${v + 1}</p>

<p>Nodal displacements</p>
<table class="bordered data">
<tr><th>Joint</th><th>${e("w")}</th><th>${e("\u03B8", "x")}</th><th>${e("\u03B8", "y")}</th></tr>
${S.deformations ? [
      ...S.deformations
    ].slice(0, 10).map(([m, h]) => `
<tr><td>${m + 1}</td><td>${u(h[2], 5)}</td><td>${u(h[3], 5)}</td><td>${u(h[4], 5)}</td></tr>
`).join("") : ""}
${(((_m = S.deformations) == null ? void 0 : _m.size) || 0) > 10 ? `<tr><td colspan="4">... (${(((_n = S.deformations) == null ? void 0 : _n.size) || 0) - 10} more)</td></tr>` : ""}
</table>

<p><b>Displacement contour map</b></p>
${ht(o, x, r, 400, "w")}
<p>${M(`${e("w")}(${q(e("a"), "2")}, ${q(e("b"), "2")}) = ${u(z, 6)}`)}</p>

<h4>Shell Results</h4>
<p><b>Bending moments</b></p>
<p>Maximum bending moment ${e("M", "x")}: ${M(`${e("M", "x,max")} = ${u(B, 4)}`)} kN\xB7m/m at element ${i + 1}</p>
<p>Maximum bending moment ${e("M", "y")}: ${M(`${e("M", "y,max")} = ${u(l, 4)}`)} kN\xB7m/m at element ${y + 1}</p>

${I.length > 0 ? `
<p>Element bending moments</p>
<table class="bordered data">
<tr><th>Element</th><th>${e("M", "x")}</th><th>${e("M", "y")}</th><th>${e("M", "xy")}</th></tr>
${x.slice(0, 10).map((m, h) => `
<tr><td>${h + 1}</td><td>${u(I[h] || 0, 4)}</td><td>${u(s[h] || 0, 4)}</td><td>${u(a[h] || 0, 4)}</td></tr>
`).join("")}
${_ > 10 ? `<tr><td colspan="4">... (${_ - 10} more elements)</td></tr>` : ""}
</table>

<p><b>Bending moment ${e("M", "x")} contour map</b></p>
${H(o, x, I, 400, "Mx")}

<p><b>Bending moment ${e("M", "y")} contour map</b></p>
${H(o, x, s, 400, "My")}
` : "<p><i>No shell results available</i></p>"}

${n.length > 0 ? `
<p><b>Membrane forces</b></p>
<table class="bordered data">
<tr><th>Element</th><th>${e("N", "x")}</th><th>${e("N", "y")}</th><th>${e("N", "xy")}</th></tr>
${x.slice(0, 10).map((m, h) => `
<tr><td>${h + 1}</td><td>${u(n[h] || 0, 4)}</td><td>${u(w[h] || 0, 4)}</td><td>${u(j[h] || 0, 4)}</td></tr>
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
      value: T.state(15),
      min: 5,
      max: 20,
      label: "xPosition"
    },
    Ex: {
      value: T.state(100),
      min: 50,
      max: 500,
      step: 10,
      label: "Ex"
    },
    Ey: {
      value: T.state(100),
      min: 50,
      max: 500,
      step: 10,
      label: "Ey"
    },
    load: {
      value: T.state(-3),
      min: -10,
      max: 10,
      step: 1,
      label: "load"
    }
  }, N = {
    nodes: T.state([]),
    elements: T.state([]),
    nodeInputs: T.state({}),
    elementInputs: T.state({}),
    deformOutputs: T.state({}),
    analyzeOutputs: T.state({})
  };
  T.derive(() => {
    var _a;
    const { nodes: t, elements: o, boundaryIndices: x } = rt({
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
    if (N.nodeInputs.val = {
      supports: new Map(x.map((p) => [
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
      loads: new Map(t.map((p, c) => [
        c,
        [
          0,
          0,
          Z.load.value.val,
          0,
          0,
          0
        ]
      ]))
    }, N.nodes.val = t, N.elements.val = o, N.elementInputs.val = {
      elasticities: new Map(o.map((p, c) => [
        c,
        Z.Ex.value.val
      ])),
      elasticitiesOrthogonal: new Map(o.map((p, c) => [
        c,
        Z.Ey.value.val
      ])),
      thicknesses: new Map(o.map((p, c) => [
        c,
        1
      ])),
      poissonsRatios: new Map(o.map((p, c) => [
        c,
        0.3
      ])),
      shearModuli: new Map(o.map((p, c) => [
        c,
        100
      ]))
    }, N.deformOutputs.val = st(t, o, N.nodeInputs.val, N.elementInputs.val), N.analyzeOutputs.val = nt(t, o, N.elementInputs.val, N.deformOutputs.val), (_a = N.deformOutputs.val) == null ? void 0 : _a.deformations) {
      let p = 0;
      N.deformOutputs.val.deformations.forEach((c) => {
        Math.abs(c[2]) > Math.abs(p) && (p = c[2]);
      }), console.log(`Max deflection: ${p.toFixed(4)} (expected: ~-3.98)`);
    }
  });
  const D = T.state(""), U = T.state(void 0);
  T.derive(() => {
    if (D.val === "Report") try {
      const t = L({
        template: K,
        data: N
      });
      U.val = t;
    } catch (t) {
      console.error("Error generating report:", t);
    }
    if (D.val === "Print") {
      const t = L({
        template: K,
        data: N
      }), o = window.open("", "_blank");
      if (o) {
        const x = (t == null ? void 0 : t.innerHTML) || "";
        o.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Plate FEM Report</title>
        </head>
        <body>
          ${x}
        </body>
        </html>
      `), o.document.close(), o.focus(), setTimeout(() => o.print(), 500);
      }
    }
  });
  document.body.append(at(Z), Q({
    mesh: N,
    settingsObj: {
      nodes: false,
      deformedShape: true,
      loads: false,
      shellResults: "displacementZ"
    }
  }), tt(N), et({
    position: "bottom-center"
  }), it({
    dialogBody: U
  }), ot({
    clickedButton: D,
    buttons: [
      "Report",
      "Print"
    ],
    sourceCode: "https://github.com/madil4/awatif/blob/main/examples/src/plate/main.ts",
    author: "https://www.linkedin.com/in/mahjoubmusaab/"
  }));
});
