import { E as H, T as tt, x as et, v as R, g as ot, e as nt, b as st, d as at } from "./styles-CWPU-Lqy.js";
import { d as it, a as rt, __tla as __tla_0 } from "./deformCpp-BprT8Kg9.js";
import { g as lt } from "./getParameters-COCExR_5.js";
import { i as ct, t as pt, e as dt, g as mt } from "./getDialog-Dp-ldI_q.js";
import { g as K } from "./getReport-B2dSsEEo.js";
import { g as ht, __tla as __tla_1 } from "./getMesh-DmUdekin.js";
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
  class D extends ct {
    constructor(e) {
      if (super(e), this.it = H, e.type !== pt.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
    }
    render(e) {
      if (e === H || e == null) return this._t = void 0, this.it = e;
      if (e === tt) return e;
      if (typeof e != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
      if (e === this.it) return this._t;
      this.it = e;
      const r = [
        e
      ];
      return r.raw = r, this._t = {
        _$litType$: this.constructor.resultType,
        strings: r,
        values: []
      };
    }
  }
  D.directiveName = "unsafeHTML", D.resultType = 1;
  const ft = dt(D), ut = `
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
  function u(t, e = 4) {
    return t == null || isNaN(t) || Math.abs(t) < 1e-10 ? "0" : t.toFixed(e).replace(".", ",");
  }
  function h(t, e = 4) {
    return t == null || isNaN(t) || Math.abs(t) < 1e-10 ? "0" : t.toFixed(e);
  }
  function P(t, e) {
    return `<span class="dvc">${t}<span class="dvl"></span>${e}</span>`;
  }
  function w(t) {
    return `<span class="eq">${t}</span>`;
  }
  function o(t, e) {
    return e ? `<var>${t}</var><sub>${e}</sub>` : `<var>${t}</var>`;
  }
  function xt(t, e = 4) {
    if (!t || !t.length) return "";
    let r = `<span class="matrix">
`;
    for (let x = 0; x < t.length; x++) {
      r += '<span class="tr"><span class="td"></span>';
      for (let $ = 0; $ < t[x].length; $++) r += `<span class="td">${u(t[x][$], e)}</span>`;
      r += `<span class="td"></span></span>
`;
    }
    return r += "</span>", r;
  }
  function $t(t, e, r, x) {
    const C = 110 / Math.max(t, 1), F = (120 - 2 * 25) / Math.max(e, 1), B = Math.min(C, F), X = t * B, g = e * B, p = 25, b = 25;
    let f = '<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" style="width:160pt; height:120pt; font-family:Arial; font-size:9px;">';
    f += `<defs>
    <marker id="arrowStart" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
      <path d="M6,0 L0,3 L6,6" fill="none" stroke="#333" stroke-width="1"/>
    </marker>
    <marker id="arrowEnd" markerWidth="6" markerHeight="6" refX="0" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6" fill="none" stroke="#333" stroke-width="1"/>
    </marker>
  </defs>`, f += `<rect x="${p}" y="${b}" width="${X}" height="${g}" fill="#e8e8e8" stroke="#333" stroke-width="1.5"/>`;
    const l = 4, z = 5;
    for (let a = 0; a <= z; a++) {
      const n = p + X * a / z;
      f += `<polygon points="${n},${b + g} ${n - l},${b + g + l} ${n + l},${b + g + l}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let a = 0; a <= z; a++) {
      const n = b + g * a / z;
      f += `<polygon points="${p},${n} ${p - l},${n - l} ${p - l},${n + l}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let a = 0; a <= z; a++) {
      const n = b + g * a / z;
      f += `<polygon points="${p + X},${n} ${p + X + l},${n - l} ${p + X + l},${n + l}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let a = 0; a <= z; a++) {
      const n = p + X * a / z;
      f += `<polygon points="${n},${b} ${n - l},${b - l} ${n + l},${b - l}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    const v = 3;
    for (let a = 1; a <= v; a++) for (let n = 1; n <= v; n++) {
      const M = p + X * a / (v + 1), I = b + g * n / (v + 1);
      f += `<line x1="${M}" y1="${I - 8}" x2="${M}" y2="${I + 5}" stroke="#0066cc" stroke-width="1.2" marker-end="url(#arrowEnd)"/>`;
    }
    f += `<text x="${p + X / 2}" y="${b + g / 2 - 12}" text-anchor="middle" fill="#0066cc" font-style="italic">q</text>`;
    const N = b + g + 18;
    f += `<line x1="${p}" y1="${N}" x2="${p + X}" y2="${N}" stroke="#333" stroke-width="0.8" marker-start="url(#arrowStart)" marker-end="url(#arrowEnd)"/>`, f += `<text x="${p + X / 2}" y="${N + 10}" text-anchor="middle" font-style="italic">a</text>`;
    const s = p + X + 18;
    return f += `<line x1="${s}" y1="${b}" x2="${s}" y2="${b + g}" stroke="#333" stroke-width="0.8" marker-start="url(#arrowStart)" marker-end="url(#arrowEnd)"/>`, f += `<text x="${s + 8}" y="${b + g / 2 + 3}" font-style="italic">b</text>`, f += "</svg>", f;
  }
  function gt(t, e, r = 400) {
    if (!t.length || !e.length) return "<p>No mesh data</p>";
    const x = t.map((s) => s[0]), $ = t.map((s) => s[1]), S = Math.min(...x), k = Math.max(...x), C = Math.min(...$), F = Math.max(...$), B = k - S || 1, X = F - C || 1, g = r / Math.max(B, X), p = X * g, b = 20, f = 2.666667, l = 0.01, z = /* @__PURE__ */ new Set();
    t.forEach((s, a) => {
      (Math.abs(s[0] - S) < l || Math.abs(s[0] - k) < l || Math.abs(s[1] - C) < l || Math.abs(s[1] - F) < l) && z.add(a);
    });
    let v = `<svg viewbox="-20 -20 ${h(r + 2 * b, 0)} ${h(p + 2 * b, 6)}" xmlns="http://www.w3.org/2000/svg" version="1.1" style=" font-family: Segoe UI; font-size:10px; width:${r}pt; height:${h(p, 6)}pt">`;
    v += "<style>.joint{fill:orangeRed;} .support{stroke:red; stroke-width:1; fill:lightpink;} .element{stroke:seaGreen; stroke-width:1; fill:lime; fill-opacity:0.1; stroke-opacity:0.5}</style>", v += `<rect x="0" y="0" width="${r}" height="${h(p, 6)}" style="fill:yellow; fill-opacity:0.2" />`, e.forEach((s, a) => {
      const n = s.reduce((c, y) => c + t[y][0], 0) / s.length, M = s.reduce((c, y) => c + t[y][1], 0) / s.length, I = (n - S) * g, A = p - (M - C) * g, i = s.map((c) => {
        const y = (t[c][0] - S) * g, E = p - (t[c][1] - C) * g;
        return `${h(y, 6)},${h(E, 6)}`;
      }).join(" ");
      v += `<text x="${h(I, 6)}" y="${h(A + 4, 6)}" text-anchor="middle">${a + 1}</text>`, v += `<polygon points="${i}" class="element"/>`;
    });
    const N = 5.333333;
    return z.forEach((s) => {
      const a = (t[s][0] - S) * g, n = p - (t[s][1] - C) * g;
      (Math.abs(t[s][1] - C) < l || Math.abs(t[s][1] - F) < l) && (v += `<line x1="${h(a - 2 * N, 6)}" y1="${h(n, 6)}" x2="${h(a + 2 * N, 6)}" y2="${h(n, 6)}" class="support"/>`), (Math.abs(t[s][0] - S) < l || Math.abs(t[s][0] - k) < l) && (v += `<line x1="${h(a, 6)}" y1="${h(n - 2 * N, 6)}" x2="${h(a, 6)}" y2="${h(n + 2 * N, 6)}" class="support"/>`), v += `<circle cx="${h(a, 6)}" cy="${h(n, 6)}" r="${N}" class="support"/>`;
    }), t.forEach((s, a) => {
      const n = (s[0] - S) * g, M = p - (s[1] - C) * g;
      v += `<circle cx="${h(n, 6)}" cy="${h(M, 6)}" r="${f}" class="joint" />`, v += `<text x="${h(n + f * 2, 6)}" y="${h(M - f, 6)}" text-anchor="start">${a + 1}</text>`;
    }), v += "</svg>", v;
  }
  function bt(t, e, r, x = 400, $ = "w") {
    if (!t.length || !e.length || !r.length) return "";
    const S = t.map((i) => i[0]), k = t.map((i) => i[1]), C = Math.min(...S), F = Math.max(...S), B = Math.min(...k), X = Math.max(...k), g = F - C || 1, p = X - B || 1, b = x / Math.max(g, p), f = p * b, l = 20, z = r.filter((i) => i !== void 0 && !isNaN(i));
    if (!z.length) return "";
    const v = Math.min(...z), N = Math.max(...z), s = Math.abs(N - v) || 1;
    function a(i) {
      const c = Math.max(0, Math.min(1, (i - v) / s));
      let y, E, Y;
      return c < 0.25 ? (y = 0, E = Math.floor(255 * c * 4), Y = 255) : c < 0.5 ? (y = 0, E = 255, Y = Math.floor(255 * (1 - (c - 0.25) * 4))) : c < 0.75 ? (y = Math.floor(255 * (c - 0.5) * 4), E = 255, Y = 0) : (y = 255, E = Math.floor(255 * (1 - (c - 0.75) * 4)), Y = 0), `rgb(${y},${E},${Y})`;
    }
    const n = `colorScale_${$.replace(/[^a-zA-Z0-9]/g, "")}`;
    let M = `<svg viewBox="-20 -20 ${x + 80} ${f + 2 * l}" xmlns="http://www.w3.org/2000/svg" style="width:${x + 80}pt; height:${h(f, 0)}pt; font-family:Arial; font-size:9px;">
<defs>
<linearGradient id="${n}" x1="0%" y1="100%" x2="0%" y2="0%">
<stop offset="0%" style="stop-color:#0000ff"/>
<stop offset="25%" style="stop-color:#00ffff"/>
<stop offset="50%" style="stop-color:#00ff00"/>
<stop offset="75%" style="stop-color:#ffff00"/>
<stop offset="100%" style="stop-color:#ff0000"/>
</linearGradient>
</defs>`;
    e.forEach((i) => {
      const c = i.reduce((Y, G) => Y + (r[G] || 0), 0) / i.length, y = a(c), E = i.map((Y) => {
        const G = (t[Y][0] - C) * b, O = f - (t[Y][1] - B) * b;
        return `${h(G, 6)},${h(O, 6)}`;
      }).join(" ");
      M += `<polygon points="${E}" fill="${y}" stroke="#333" stroke-width="0.3"/>`;
    });
    const I = x + 10, A = f - 20;
    M += `<rect x="${I}" y="10" width="15" height="${h(A, 0)}" fill="url(#${n})" stroke="#333"/>`;
    for (let i = 0; i <= 5; i++) {
      const c = v + s * i / 5, y = 10 + A - A * i / 5;
      M += `<text x="${I + 20}" y="${h(y + 3, 0)}">${u(c, 4)}</text>`;
    }
    return M += `<text x="${I}" y="5">${$}</text>`, M += "</svg>", M;
  }
  function U(t, e, r, x = 400, $ = "M") {
    if (!t.length || !e.length) return "";
    const S = r.filter((i) => i !== void 0 && !isNaN(i));
    if (!S.length) return "<p><i>No data for contour map</i></p>";
    const k = t.map((i) => i[0]), C = t.map((i) => i[1]), F = Math.min(...k), B = Math.max(...k), X = Math.min(...C), g = Math.max(...C), p = B - F || 1, b = g - X || 1, f = x / Math.max(p, b), l = b * f, z = 20, v = Math.min(...S), N = Math.max(...S), s = Math.abs(N - v) || 1;
    function a(i) {
      const c = Math.max(0, Math.min(1, (i - v) / s));
      let y, E, Y;
      return c < 0.25 ? (y = 0, E = Math.floor(255 * c * 4), Y = 255) : c < 0.5 ? (y = 0, E = 255, Y = Math.floor(255 * (1 - (c - 0.25) * 4))) : c < 0.75 ? (y = Math.floor(255 * (c - 0.5) * 4), E = 255, Y = 0) : (y = 255, E = Math.floor(255 * (1 - (c - 0.75) * 4)), Y = 0), `rgb(${y},${E},${Y})`;
    }
    const n = `colorScaleElem_${$.replace(/[^a-zA-Z0-9]/g, "")}`;
    let M = `<svg viewBox="-20 -20 ${x + 80} ${l + 2 * z}" xmlns="http://www.w3.org/2000/svg" style="width:${x + 80}pt; height:${h(l, 0)}pt; font-family:Arial; font-size:9px;">
<defs>
<linearGradient id="${n}" x1="0%" y1="100%" x2="0%" y2="0%">
<stop offset="0%" style="stop-color:#0000ff"/>
<stop offset="25%" style="stop-color:#00ffff"/>
<stop offset="50%" style="stop-color:#00ff00"/>
<stop offset="75%" style="stop-color:#ffff00"/>
<stop offset="100%" style="stop-color:#ff0000"/>
</linearGradient>
</defs>`;
    e.forEach((i, c) => {
      const y = r[c] || 0, E = a(y), Y = i.map((G) => {
        const O = (t[G][0] - F) * f, L = l - (t[G][1] - X) * f;
        return `${h(O, 6)},${h(L, 6)}`;
      }).join(" ");
      M += `<polygon points="${Y}" fill="${E}" stroke="#333" stroke-width="0.3"/>`;
    });
    const I = x + 10, A = l - 20;
    M += `<rect x="${I}" y="10" width="15" height="${h(A, 0)}" fill="url(#${n})" stroke="#333"/>`;
    for (let i = 0; i <= 5; i++) {
      const c = v + s * i / 5, y = 10 + A - A * i / 5;
      M += `<text x="${I + 20}" y="${h(y + 3, 0)}">${u(c, 4)}</text>`;
    }
    return M += `<text x="${I}" y="5">${$}</text>`, M += "</svg>", M;
  }
  function J(t) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
    console.log("Template Calcpad style called");
    const e = ((_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val) || [], r = ((_b = t == null ? void 0 : t.elements) == null ? void 0 : _b.val) || [], x = ((_c = t == null ? void 0 : t.nodeInputs) == null ? void 0 : _c.val) || {}, $ = ((_d = t == null ? void 0 : t.elementInputs) == null ? void 0 : _d.val) || {}, S = ((_e = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _e.val) || {}, k = ((_f = t == null ? void 0 : t.analyzeOutputs) == null ? void 0 : _f.val) || {}, C = ((_g = $.elasticities) == null ? void 0 : _g.values().next().value) || 100, F = ((_h = $.poissonsRatios) == null ? void 0 : _h.values().next().value) || 0.3, B = ((_i = $.thicknesses) == null ? void 0 : _i.values().next().value) || 1, X = ((_k = (_j = x.loads) == null ? void 0 : _j.values().next().value) == null ? void 0 : _k[2]) || -3, g = e.map((d) => d[0]), p = e.map((d) => d[1]), b = g.length ? Math.max(...g) - Math.min(...g) : 15, f = p.length ? Math.max(...p) - Math.min(...p) : 10, l = [];
    let z = 0, v = 0;
    S.deformations && S.deformations.forEach((d, m) => {
      l[m] = d[2] || 0, Math.abs(d[2]) > Math.abs(z) && (z = d[2], v = m);
    });
    const N = [], s = [], a = [], n = [], M = [], I = [];
    let A = 0, i = 0, c = 0, y = 0;
    k.bendingXX && k.bendingXX.forEach((d, m) => {
      const j = d.reduce((_, V) => _ + V, 0) / d.length;
      N[m] = j, Math.abs(j) > Math.abs(A) && (A = j, i = m);
    }), k.bendingYY && k.bendingYY.forEach((d, m) => {
      const j = d.reduce((_, V) => _ + V, 0) / d.length;
      s[m] = j, Math.abs(j) > Math.abs(c) && (c = j, y = m);
    }), k.bendingXY && k.bendingXY.forEach((d, m) => {
      const j = d.reduce((_, V) => _ + V, 0) / d.length;
      a[m] = j;
    }), k.membraneXX && k.membraneXX.forEach((d, m) => {
      const j = d.reduce((_, V) => _ + V, 0) / d.length;
      n[m] = j;
    }), k.membraneYY && k.membraneYY.forEach((d, m) => {
      const j = d.reduce((_, V) => _ + V, 0) / d.length;
      M[m] = j;
    }), k.membraneXY && k.membraneXY.forEach((d, m) => {
      const j = d.reduce((_, V) => _ + V, 0) / d.length;
      I[m] = j;
    });
    const E = C * Math.pow(B, 3) / (12 * (1 - F * F)), Y = [
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
    ], G = ((_l = x.supports) == null ? void 0 : _l.size) || 0, O = e.length, L = r.length, Q = `
<style>${ut}
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
<p>Plate dimensions - ${w(`${o("a")} = ${u(b, 1)}`)} m, ${w(`${o("b")} = ${u(f, 1)}`)} m</p>
<p>Thickness - ${w(`${o("t")} = ${u(B, 2)}`)} m</p>
<p>Load - ${w(`${o("q")} = ${u(Math.abs(X), 1)}`)} kN/m\xB2</p>
<p>Modulus of elasticity - ${w(`${o("E")} = ${u(C, 0)}`)} GPa</p>
<p>Poisson's ratio - ${w(`${o("\u03BD")} = ${u(F, 2)}`)}</p>
</td><td style="vertical-align:middle; padding-left:30px;">
${$t(b, f)}
</td></tr></table>

<h4>Finite element mesh</h4>
<p>We will use triangular finite elements with ${w(`${o("n")} = 18`)} DOFs (6 per node)</p>
<p>Total number of elements - ${w(`${o("n", "e")} = ${L}`)}</p>
<p>Total number of joints - ${w(`${o("n", "j")} = ${O}`)}</p>
<p>Supported joints count - ${w(`${o("n", "s")} = ${G}`)}</p>

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
${gt(e, r)}
</div>

<script>
(function() {
  const nodes = ${JSON.stringify(e)};
  const elements = ${JSON.stringify(r)};

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
${e.slice(0, 10).map((d, m) => `
<tr><td>${m + 1}</td><td>${u(d[0], 2)}</td><td>${u(d[1], 2)}</td></tr>
`).join("")}
${O > 10 ? `<tr><td colspan="3">... (${O - 10} more joints)</td></tr>` : ""}
</table>

<h4>Finite element formulation</h4>
<p><b>Shape functions</b></p>
<p>Linear shape functions for triangular element (area coordinates):</p>
<p>${w(`${o("N", "1")}(\u03BE,\u03B7) = 1 - \u03BE - \u03B7`)}</p>
<p>${w(`${o("N", "2")}(\u03BE,\u03B7) = \u03BE`)}</p>
<p>${w(`${o("N", "3")}(\u03BE,\u03B7) = \u03B7`)}</p>

<p><b>Constitutive matrix</b> (stress - strain relationship)</p>
<p>${w(`<b>${o("D")}</b> = ${P(`${o("E")} \xB7 ${o("t")}<sup>3</sup>`, `12 \xB7 (1 - ${o("\u03BD")}<sup>2</sup>)`)} \xB7 <b class="b1">[</b>1; ${o("\u03BD")}; 0 <b class="b0">|</b> ${o("\u03BD")}; 1; 0 <b class="b0">|</b> 0; 0; ${P(`1 - ${o("\u03BD")}`, "2")}<b class="b1">]</b>`)}</p>
<p>${w(`<b>${o("D")}</b> = ${P(`${u(C, 0)} \xB7 ${u(B, 2)}<sup>3</sup>`, `12 \xB7 (1 - ${u(F, 2)}<sup>2</sup>)`)} \xB7 <b class="b1">[</b>1; ${u(F, 2)}; 0 <b class="b0">|</b> ${u(F, 2)}; 1; 0 <b class="b0">|</b> 0; 0; ${P(`1 - ${u(F, 2)}`, "2")}<b class="b1">]</b> = ${xt(Y, 6)}`)}</p>

<p><b>Strain-displacement matrix</b></p>
<p>The bending strain-displacement matrix ${w(`${o("B", "b")}`)} (3\xD718) relates curvatures to nodal DOFs:</p>
<p>${w(`\u03BA = {${o("\u03BA", "xx")}, ${o("\u03BA", "yy")}, ${o("\u03BA", "xy")}}<sup>T</sup> = ${o("B", "b")} \xB7 ${o("u")}`)}</p>

<p><b>Element stiffness matrix</b></p>
<p>${w(`${o("K", "e")} = \u222B\u222B ${o("B")}<sup>T</sup> \xB7 ${o("D")} \xB7 ${o("B")} dA`)}</p>
<p>For shell elements: ${w(`${o("K", "e")} = ${o("K", "b")} + ${o("K", "s")} + ${o("K", "m")}`)}</p>
<p>(bending + shear + membrane)</p>

<h4>Solution</h4>
<p>Total degrees of freedom: ${w(`${O * 6}`)}</p>
<p>Free degrees of freedom: ${w(`${O * 6 - G * 6}`)}</p>
<p>Global system: ${w(`${o("K")} \xB7 ${o("U")} = ${o("F")}`)}</p>
<p>Solution method: LU decomposition</p>

<h4>Results</h4>
<p><b>Displacements</b></p>
<p>Maximum displacement: ${w(`${o("w", "max")} = <span class="${Math.abs(z) > 10 ? "err" : "ok"}">${u(z, 6)}</span>`)} at joint ${v + 1}</p>

<p>Nodal displacements</p>
<table class="bordered data">
<tr><th>Joint</th><th>${o("w")}</th><th>${o("\u03B8", "x")}</th><th>${o("\u03B8", "y")}</th></tr>
${S.deformations ? [
      ...S.deformations
    ].slice(0, 10).map(([d, m]) => `
<tr><td>${d + 1}</td><td>${u(m[2], 5)}</td><td>${u(m[3], 5)}</td><td>${u(m[4], 5)}</td></tr>
`).join("") : ""}
${(((_m = S.deformations) == null ? void 0 : _m.size) || 0) > 10 ? `<tr><td colspan="4">... (${(((_n = S.deformations) == null ? void 0 : _n.size) || 0) - 10} more)</td></tr>` : ""}
</table>

<p><b>Displacement contour map</b></p>
${bt(e, r, l, 400, "w")}
<p>${w(`${o("w")}(${P(o("a"), "2")}, ${P(o("b"), "2")}) = ${u(z, 6)}`)}</p>

<h4>Shell Results</h4>
<p><b>Bending moments</b></p>
<p>Maximum bending moment ${o("M", "x")}: ${w(`${o("M", "x,max")} = ${u(A, 4)}`)} kN\xB7m/m at element ${i + 1}</p>
<p>Maximum bending moment ${o("M", "y")}: ${w(`${o("M", "y,max")} = ${u(c, 4)}`)} kN\xB7m/m at element ${y + 1}</p>

${N.length > 0 ? `
<p>Element bending moments</p>
<table class="bordered data">
<tr><th>Element</th><th>${o("M", "x")}</th><th>${o("M", "y")}</th><th>${o("M", "xy")}</th></tr>
${r.slice(0, 10).map((d, m) => `
<tr><td>${m + 1}</td><td>${u(N[m] || 0, 4)}</td><td>${u(s[m] || 0, 4)}</td><td>${u(a[m] || 0, 4)}</td></tr>
`).join("")}
${L > 10 ? `<tr><td colspan="4">... (${L - 10} more elements)</td></tr>` : ""}
</table>

<p><b>Bending moment ${o("M", "x")} contour map</b></p>
${U(e, r, N, 400, "Mx")}

<p><b>Bending moment ${o("M", "y")} contour map</b></p>
${U(e, r, s, 400, "My")}
` : "<p><i>No shell results available</i></p>"}

${n.length > 0 ? `
<p><b>Membrane forces</b></p>
<table class="bordered data">
<tr><th>Element</th><th>${o("N", "x")}</th><th>${o("N", "y")}</th><th>${o("N", "xy")}</th></tr>
${r.slice(0, 10).map((d, m) => `
<tr><td>${m + 1}</td><td>${u(n[m] || 0, 4)}</td><td>${u(M[m] || 0, 4)}</td><td>${u(I[m] || 0, 4)}</td></tr>
`).join("")}
${L > 10 ? `<tr><td colspan="4">... (${L - 10} more elements)</td></tr>` : ""}
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
    return et`${ft(Q)}`;
  }
  const q = {
    xPosition: {
      value: R.state(15),
      min: 5,
      max: 20,
      label: "Posici\xF3n X",
      unit: "length"
    },
    Ex: {
      value: R.state(100),
      min: 50,
      max: 500,
      step: 10,
      label: "E (dir X)",
      unit: "stress"
    },
    Ey: {
      value: R.state(100),
      min: 50,
      max: 500,
      step: 10,
      label: "E (dir Y)",
      unit: "stress"
    },
    load: {
      value: R.state(-3),
      min: -10,
      max: 10,
      step: 1,
      label: "Carga",
      unit: "force"
    }
  }, T = {
    nodes: R.state([]),
    elements: R.state([]),
    nodeInputs: R.state({}),
    elementInputs: R.state({}),
    deformOutputs: R.state({}),
    analyzeOutputs: R.state({})
  };
  R.derive(() => {
    const { nodes: t, elements: e, boundaryIndices: r } = ht({
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
          q.xPosition.value.val,
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
    T.nodeInputs.val = {
      supports: new Map(r.map((x) => [
        x,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])),
      loads: new Map(t.map((x, $) => [
        $,
        [
          0,
          0,
          q.load.value.val,
          0,
          0,
          0
        ]
      ]))
    }, T.nodes.val = t, T.elements.val = e, T.elementInputs.val = {
      elasticities: new Map(e.map((x, $) => [
        $,
        q.Ex.value.val
      ])),
      elasticitiesOrthogonal: new Map(e.map((x, $) => [
        $,
        q.Ey.value.val
      ])),
      thicknesses: new Map(e.map((x, $) => [
        $,
        1
      ])),
      poissonsRatios: new Map(e.map((x, $) => [
        $,
        0.3
      ])),
      shearModuli: new Map(e.map((x, $) => [
        $,
        100
      ]))
    }, T.deformOutputs.val = it(t, e, T.nodeInputs.val, T.elementInputs.val), T.analyzeOutputs.val = rt(t, e, T.elementInputs.val, T.deformOutputs.val);
  });
  const Z = R.state(""), W = R.state(void 0);
  R.derive(() => {
    if (console.log("clickedButton.val changed to:", Z.val), Z.val === "Report") {
      console.log("Report button clicked!");
      try {
        const t = K({
          template: J,
          data: T
        });
        console.log("getReport returned:", t), W.val = t;
      } catch (t) {
        console.error("Error generating report:", t);
      }
    }
    if (Z.val === "Print") {
      const t = K({
        template: J,
        data: T
      }), e = window.open("", "_blank");
      if (e) {
        const r = (t == null ? void 0 : t.innerHTML) || "";
        e.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Plate FEM Report - Calcpad Style</title>
        </head>
        <body>
          ${r}
        </body>
        </html>
      `), e.document.close(), e.focus(), setTimeout(() => e.print(), 500);
      }
    }
  });
  document.body.append(lt(q), ot({
    mesh: T,
    settingsObj: {
      nodes: false,
      deformedShape: true,
      loads: false,
      shellResults: "displacementZ"
    }
  }), nt(T), st({
    position: "bottom-center"
  }), mt({
    dialogBody: W
  }), at({
    clickedButton: Z,
    buttons: [
      "Report",
      "Print"
    ],
    sourceCode: "https://github.com/madil4/awatif/blob/main/examples/src/plate/main.ts",
    author: "https://www.linkedin.com/in/mahjoubmusaab/"
  }));
});
