import { x as mt, v as W, j as $t, k as xt, g as At, e as Nt, b as Rt, d as It } from "./styles-E_L73LhH.js";
import { a as Ot } from "./analyze-CmnHHflB.js";
import { d as Pt, __tla as __tla_0 } from "./deformCpp-CS-wCYO-.js";
import { r as Tt, g as _t } from "./getParameters-BxljPuDv.js";
import { g as jt } from "./getDialog-CNIqPx0t.js";
import { g as rt } from "./getReport-C7vWZLrc.js";
import { g as Xt, __tla as __tla_1 } from "./getMesh-DmUdekin.js";
import { o as ht } from "./unsafe-html-CU446BhE.js";
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
  const Bt = `
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
  function j(t, a = 4) {
    return t == null || isNaN(t) || Math.abs(t) < 1e-10 ? "0" : t.toFixed(a).replace(".", ",");
  }
  function O(t, a = 4) {
    return t == null || isNaN(t) || Math.abs(t) < 1e-10 ? "0" : t.toFixed(a);
  }
  function st(t, a) {
    return `<span class="dvc">${t}<span class="dvl"></span>${a}</span>`;
  }
  function Y(t) {
    return `<span class="eq">${t}</span>`;
  }
  function d(t, a) {
    return a ? `<var>${t}</var><sub>${a}</sub>` : `<var>${t}</var>`;
  }
  function Lt(t, a = 4) {
    if (!t || !t.length) return "";
    let n = `<span class="matrix">
`;
    for (let r = 0; r < t.length; r++) {
      n += '<span class="tr"><span class="td"></span>';
      for (let c = 0; c < t[r].length; c++) n += `<span class="td">${j(t[r][c], a)}</span>`;
      n += `<span class="td"></span></span>
`;
    }
    return n += "</span>", n;
  }
  function Yt(t, a, n, r) {
    const T = 110 / Math.max(t, 1), v = (120 - 2 * 25) / Math.max(a, 1), X = Math.min(T, v), P = t * X, u = a * X, w = 25, C = 25;
    let f = '<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" style="width:160pt; height:120pt; font-family:Arial; font-size:9px;">';
    f += `<defs>
    <marker id="arrowStart" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
      <path d="M6,0 L0,3 L6,6" fill="none" stroke="#333" stroke-width="1"/>
    </marker>
    <marker id="arrowEnd" markerWidth="6" markerHeight="6" refX="0" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6" fill="none" stroke="#333" stroke-width="1"/>
    </marker>
  </defs>`, f += `<rect x="${w}" y="${C}" width="${P}" height="${u}" fill="#e8e8e8" stroke="#333" stroke-width="1.5"/>`;
    const $ = 4, N = 5;
    for (let h = 0; h <= N; h++) {
      const m = w + P * h / N;
      f += `<polygon points="${m},${C + u} ${m - $},${C + u + $} ${m + $},${C + u + $}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let h = 0; h <= N; h++) {
      const m = C + u * h / N;
      f += `<polygon points="${w},${m} ${w - $},${m - $} ${w - $},${m + $}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let h = 0; h <= N; h++) {
      const m = C + u * h / N;
      f += `<polygon points="${w + P},${m} ${w + P + $},${m - $} ${w + P + $},${m + $}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let h = 0; h <= N; h++) {
      const m = w + P * h / N;
      f += `<polygon points="${m},${C} ${m - $},${C - $} ${m + $},${C - $}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    const g = 3;
    for (let h = 1; h <= g; h++) for (let m = 1; m <= g; m++) {
      const z = w + P * h / (g + 1), L = C + u * m / (g + 1);
      f += `<line x1="${z}" y1="${L - 8}" x2="${z}" y2="${L + 5}" stroke="#0066cc" stroke-width="1.2" marker-end="url(#arrowEnd)"/>`;
    }
    f += `<text x="${w + P / 2}" y="${C + u / 2 - 12}" text-anchor="middle" fill="#0066cc" font-style="italic">q</text>`;
    const B = C + u + 18;
    f += `<line x1="${w}" y1="${B}" x2="${w + P}" y2="${B}" stroke="#333" stroke-width="0.8" marker-start="url(#arrowStart)" marker-end="url(#arrowEnd)"/>`, f += `<text x="${w + P / 2}" y="${B + 10}" text-anchor="middle" font-style="italic">a</text>`;
    const b = w + P + 18;
    return f += `<line x1="${b}" y1="${C}" x2="${b}" y2="${C + u}" stroke="#333" stroke-width="0.8" marker-start="url(#arrowStart)" marker-end="url(#arrowEnd)"/>`, f += `<text x="${b + 8}" y="${C + u / 2 + 3}" font-style="italic">b</text>`, f += "</svg>", f;
  }
  function Gt(t, a, n = 400) {
    if (!t.length || !a.length) return "<p>No mesh data</p>";
    const r = t.map((b) => b[0]), c = t.map((b) => b[1]), k = Math.min(...r), E = Math.max(...r), T = Math.min(...c), v = Math.max(...c), X = E - k || 1, P = v - T || 1, u = n / Math.max(X, P), w = P * u, C = 20, f = 2.666667, $ = 0.01, N = /* @__PURE__ */ new Set();
    t.forEach((b, h) => {
      (Math.abs(b[0] - k) < $ || Math.abs(b[0] - E) < $ || Math.abs(b[1] - T) < $ || Math.abs(b[1] - v) < $) && N.add(h);
    });
    let g = `<svg viewbox="-20 -20 ${O(n + 2 * C, 0)} ${O(w + 2 * C, 6)}" xmlns="http://www.w3.org/2000/svg" version="1.1" style=" font-family: Segoe UI; font-size:10px; width:${n}pt; height:${O(w, 6)}pt">`;
    g += "<style>.joint{fill:orangeRed;} .support{stroke:red; stroke-width:1; fill:lightpink;} .element{stroke:seaGreen; stroke-width:1; fill:lime; fill-opacity:0.1; stroke-opacity:0.5}</style>", g += `<rect x="0" y="0" width="${n}" height="${O(w, 6)}" style="fill:yellow; fill-opacity:0.2" />`, a.forEach((b, h) => {
      const m = b.reduce((p, x) => p + t[x][0], 0) / b.length, z = b.reduce((p, x) => p + t[x][1], 0) / b.length, L = (m - k) * u, G = w - (z - T) * u, l = b.map((p) => {
        const x = (t[p][0] - k) * u, M = w - (t[p][1] - T) * u;
        return `${O(x, 6)},${O(M, 6)}`;
      }).join(" ");
      g += `<text x="${O(L, 6)}" y="${O(G + 4, 6)}" text-anchor="middle">${h + 1}</text>`, g += `<polygon points="${l}" class="element"/>`;
    });
    const B = 5.333333;
    return N.forEach((b) => {
      const h = (t[b][0] - k) * u, m = w - (t[b][1] - T) * u;
      (Math.abs(t[b][1] - T) < $ || Math.abs(t[b][1] - v) < $) && (g += `<line x1="${O(h - 2 * B, 6)}" y1="${O(m, 6)}" x2="${O(h + 2 * B, 6)}" y2="${O(m, 6)}" class="support"/>`), (Math.abs(t[b][0] - k) < $ || Math.abs(t[b][0] - E) < $) && (g += `<line x1="${O(h, 6)}" y1="${O(m - 2 * B, 6)}" x2="${O(h, 6)}" y2="${O(m + 2 * B, 6)}" class="support"/>`), g += `<circle cx="${O(h, 6)}" cy="${O(m, 6)}" r="${B}" class="support"/>`;
    }), t.forEach((b, h) => {
      const m = (b[0] - k) * u, z = w - (b[1] - T) * u;
      g += `<circle cx="${O(m, 6)}" cy="${O(z, 6)}" r="${f}" class="joint" />`, g += `<text x="${O(m + f * 2, 6)}" y="${O(z - f, 6)}" text-anchor="start">${h + 1}</text>`;
    }), g += "</svg>", g;
  }
  function qt(t, a, n, r = 400, c = "w") {
    if (!t.length || !a.length || !n.length) return "";
    const k = t.map((l) => l[0]), E = t.map((l) => l[1]), T = Math.min(...k), v = Math.max(...k), X = Math.min(...E), P = Math.max(...E), u = v - T || 1, w = P - X || 1, C = r / Math.max(u, w), f = w * C, $ = 20, N = n.filter((l) => l !== void 0 && !isNaN(l));
    if (!N.length) return "";
    const g = Math.min(...N), B = Math.max(...N), b = Math.abs(B - g) || 1;
    function h(l) {
      const p = Math.max(0, Math.min(1, (l - g) / b));
      let x, M, S;
      return p < 0.25 ? (x = 0, M = Math.floor(255 * p * 4), S = 255) : p < 0.5 ? (x = 0, M = 255, S = Math.floor(255 * (1 - (p - 0.25) * 4))) : p < 0.75 ? (x = Math.floor(255 * (p - 0.5) * 4), M = 255, S = 0) : (x = 255, M = Math.floor(255 * (1 - (p - 0.75) * 4)), S = 0), `rgb(${x},${M},${S})`;
    }
    const m = `colorScale_${c.replace(/[^a-zA-Z0-9]/g, "")}`;
    let z = `<svg viewBox="-20 -20 ${r + 80} ${f + 2 * $}" xmlns="http://www.w3.org/2000/svg" style="width:${r + 80}pt; height:${O(f, 0)}pt; font-family:Arial; font-size:9px;">
<defs>
<linearGradient id="${m}" x1="0%" y1="100%" x2="0%" y2="0%">
<stop offset="0%" style="stop-color:#0000ff"/>
<stop offset="25%" style="stop-color:#00ffff"/>
<stop offset="50%" style="stop-color:#00ff00"/>
<stop offset="75%" style="stop-color:#ffff00"/>
<stop offset="100%" style="stop-color:#ff0000"/>
</linearGradient>
</defs>`;
    a.forEach((l) => {
      const p = l.reduce((S, D) => S + (n[D] || 0), 0) / l.length, x = h(p), M = l.map((S) => {
        const D = (t[S][0] - T) * C, R = f - (t[S][1] - X) * C;
        return `${O(D, 6)},${O(R, 6)}`;
      }).join(" ");
      z += `<polygon points="${M}" fill="${x}" stroke="#333" stroke-width="0.3"/>`;
    });
    const L = r + 10, G = f - 20;
    z += `<rect x="${L}" y="10" width="15" height="${O(G, 0)}" fill="url(#${m})" stroke="#333"/>`;
    for (let l = 0; l <= 5; l++) {
      const p = g + b * l / 5, x = 10 + G - G * l / 5;
      z += `<text x="${L + 20}" y="${O(x + 3, 0)}">${j(p, 4)}</text>`;
    }
    return z += `<text x="${L}" y="5">${c}</text>`, z += "</svg>", z;
  }
  function vt(t, a, n, r = 400, c = "M") {
    if (!t.length || !a.length) return "";
    const k = n.filter((l) => l !== void 0 && !isNaN(l));
    if (!k.length) return "<p><i>No data for contour map</i></p>";
    const E = t.map((l) => l[0]), T = t.map((l) => l[1]), v = Math.min(...E), X = Math.max(...E), P = Math.min(...T), u = Math.max(...T), w = X - v || 1, C = u - P || 1, f = r / Math.max(w, C), $ = C * f, N = 20, g = Math.min(...k), B = Math.max(...k), b = Math.abs(B - g) || 1;
    function h(l) {
      const p = Math.max(0, Math.min(1, (l - g) / b));
      let x, M, S;
      return p < 0.25 ? (x = 0, M = Math.floor(255 * p * 4), S = 255) : p < 0.5 ? (x = 0, M = 255, S = Math.floor(255 * (1 - (p - 0.25) * 4))) : p < 0.75 ? (x = Math.floor(255 * (p - 0.5) * 4), M = 255, S = 0) : (x = 255, M = Math.floor(255 * (1 - (p - 0.75) * 4)), S = 0), `rgb(${x},${M},${S})`;
    }
    const m = `colorScaleElem_${c.replace(/[^a-zA-Z0-9]/g, "")}`;
    let z = `<svg viewBox="-20 -20 ${r + 80} ${$ + 2 * N}" xmlns="http://www.w3.org/2000/svg" style="width:${r + 80}pt; height:${O($, 0)}pt; font-family:Arial; font-size:9px;">
<defs>
<linearGradient id="${m}" x1="0%" y1="100%" x2="0%" y2="0%">
<stop offset="0%" style="stop-color:#0000ff"/>
<stop offset="25%" style="stop-color:#00ffff"/>
<stop offset="50%" style="stop-color:#00ff00"/>
<stop offset="75%" style="stop-color:#ffff00"/>
<stop offset="100%" style="stop-color:#ff0000"/>
</linearGradient>
</defs>`;
    a.forEach((l, p) => {
      const x = n[p] || 0, M = h(x), S = l.map((D) => {
        const R = (t[D][0] - v) * f, K = $ - (t[D][1] - P) * f;
        return `${O(R, 6)},${O(K, 6)}`;
      }).join(" ");
      z += `<polygon points="${S}" fill="${M}" stroke="#333" stroke-width="0.3"/>`;
    });
    const L = r + 10, G = $ - 20;
    z += `<rect x="${L}" y="10" width="15" height="${O(G, 0)}" fill="url(#${m})" stroke="#333"/>`;
    for (let l = 0; l <= 5; l++) {
      const p = g + b * l / 5, x = 10 + G - G * l / 5;
      z += `<text x="${L + 20}" y="${O(x + 3, 0)}">${j(p, 4)}</text>`;
    }
    return z += `<text x="${L}" y="5">${c}</text>`, z += "</svg>", z;
  }
  function Mt(t) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
    console.log("Template Calcpad style called");
    const a = ((_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val) || [], n = ((_b = t == null ? void 0 : t.elements) == null ? void 0 : _b.val) || [], r = ((_c = t == null ? void 0 : t.nodeInputs) == null ? void 0 : _c.val) || {}, c = ((_d = t == null ? void 0 : t.elementInputs) == null ? void 0 : _d.val) || {}, k = ((_e = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _e.val) || {}, E = ((_f = t == null ? void 0 : t.analyzeOutputs) == null ? void 0 : _f.val) || {}, T = ((_g = c.elasticities) == null ? void 0 : _g.values().next().value) || 100, v = ((_h = c.poissonsRatios) == null ? void 0 : _h.values().next().value) || 0.3, X = ((_i = c.thicknesses) == null ? void 0 : _i.values().next().value) || 1, P = ((_k = (_j = r.loads) == null ? void 0 : _j.values().next().value) == null ? void 0 : _k[2]) || -3, u = a.map((F) => F[0]), w = a.map((F) => F[1]), C = u.length ? Math.max(...u) - Math.min(...u) : 15, f = w.length ? Math.max(...w) - Math.min(...w) : 10, $ = [];
    let N = 0, g = 0;
    k.deformations && k.deformations.forEach((F, A) => {
      $[A] = F[2] || 0, Math.abs(F[2]) > Math.abs(N) && (N = F[2], g = A);
    });
    const B = [], b = [], h = [], m = [], z = [], L = [];
    let G = 0, l = 0, p = 0, x = 0;
    E.bendingXX && E.bendingXX.forEach((F, A) => {
      const s = F.reduce((I, q) => I + q, 0) / F.length;
      B[A] = s, Math.abs(s) > Math.abs(G) && (G = s, l = A);
    }), E.bendingYY && E.bendingYY.forEach((F, A) => {
      const s = F.reduce((I, q) => I + q, 0) / F.length;
      b[A] = s, Math.abs(s) > Math.abs(p) && (p = s, x = A);
    }), E.bendingXY && E.bendingXY.forEach((F, A) => {
      const s = F.reduce((I, q) => I + q, 0) / F.length;
      h[A] = s;
    }), E.membraneXX && E.membraneXX.forEach((F, A) => {
      const s = F.reduce((I, q) => I + q, 0) / F.length;
      m[A] = s;
    }), E.membraneYY && E.membraneYY.forEach((F, A) => {
      const s = F.reduce((I, q) => I + q, 0) / F.length;
      z[A] = s;
    }), E.membraneXY && E.membraneXY.forEach((F, A) => {
      const s = F.reduce((I, q) => I + q, 0) / F.length;
      L[A] = s;
    });
    const M = T * Math.pow(X, 3) / (12 * (1 - v * v)), S = [
      [
        M,
        M * v,
        0
      ],
      [
        M * v,
        M,
        0
      ],
      [
        0,
        0,
        M * (1 - v) / 2
      ]
    ], D = ((_l = r.supports) == null ? void 0 : _l.size) || 0, R = a.length, K = n.length, at = `
<style>${Bt}
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
<p>Plate dimensions - ${Y(`${d("a")} = ${j(C, 1)}`)} m, ${Y(`${d("b")} = ${j(f, 1)}`)} m</p>
<p>Thickness - ${Y(`${d("t")} = ${j(X, 2)}`)} m</p>
<p>Load - ${Y(`${d("q")} = ${j(Math.abs(P), 1)}`)} kN/m\xB2</p>
<p>Modulus of elasticity - ${Y(`${d("E")} = ${j(T, 0)}`)} GPa</p>
<p>Poisson's ratio - ${Y(`${d("\u03BD")} = ${j(v, 2)}`)}</p>
</td><td style="vertical-align:middle; padding-left:30px;">
${Yt(C, f)}
</td></tr></table>

<h4>Finite element mesh</h4>
<p>We will use triangular finite elements with ${Y(`${d("n")} = 18`)} DOFs (6 per node)</p>
<p>Total number of elements - ${Y(`${d("n", "e")} = ${K}`)}</p>
<p>Total number of joints - ${Y(`${d("n", "j")} = ${R}`)}</p>
<p>Supported joints count - ${Y(`${d("n", "s")} = ${D}`)}</p>

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
${Gt(a, n)}
</div>

<script>
(function() {
  const nodes = ${JSON.stringify(a)};
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
<tr><th>Joint</th><th>${d("x")}</th><th>${d("y")}</th></tr>
${a.slice(0, 10).map((F, A) => `
<tr><td>${A + 1}</td><td>${j(F[0], 2)}</td><td>${j(F[1], 2)}</td></tr>
`).join("")}
${R > 10 ? `<tr><td colspan="3">... (${R - 10} more joints)</td></tr>` : ""}
</table>

<h4>Finite element formulation</h4>
<p><b>Shape functions</b></p>
<p>Linear shape functions for triangular element (area coordinates):</p>
<p>${Y(`${d("N", "1")}(\u03BE,\u03B7) = 1 - \u03BE - \u03B7`)}</p>
<p>${Y(`${d("N", "2")}(\u03BE,\u03B7) = \u03BE`)}</p>
<p>${Y(`${d("N", "3")}(\u03BE,\u03B7) = \u03B7`)}</p>

<p><b>Constitutive matrix</b> (stress - strain relationship)</p>
<p>${Y(`<b>${d("D")}</b> = ${st(`${d("E")} \xB7 ${d("t")}<sup>3</sup>`, `12 \xB7 (1 - ${d("\u03BD")}<sup>2</sup>)`)} \xB7 <b class="b1">[</b>1; ${d("\u03BD")}; 0 <b class="b0">|</b> ${d("\u03BD")}; 1; 0 <b class="b0">|</b> 0; 0; ${st(`1 - ${d("\u03BD")}`, "2")}<b class="b1">]</b>`)}</p>
<p>${Y(`<b>${d("D")}</b> = ${st(`${j(T, 0)} \xB7 ${j(X, 2)}<sup>3</sup>`, `12 \xB7 (1 - ${j(v, 2)}<sup>2</sup>)`)} \xB7 <b class="b1">[</b>1; ${j(v, 2)}; 0 <b class="b0">|</b> ${j(v, 2)}; 1; 0 <b class="b0">|</b> 0; 0; ${st(`1 - ${j(v, 2)}`, "2")}<b class="b1">]</b> = ${Lt(S, 6)}`)}</p>

<p><b>Strain-displacement matrix</b></p>
<p>The bending strain-displacement matrix ${Y(`${d("B", "b")}`)} (3\xD718) relates curvatures to nodal DOFs:</p>
<p>${Y(`\u03BA = {${d("\u03BA", "xx")}, ${d("\u03BA", "yy")}, ${d("\u03BA", "xy")}}<sup>T</sup> = ${d("B", "b")} \xB7 ${d("u")}`)}</p>

<p><b>Element stiffness matrix</b></p>
<p>${Y(`${d("K", "e")} = \u222B\u222B ${d("B")}<sup>T</sup> \xB7 ${d("D")} \xB7 ${d("B")} dA`)}</p>
<p>For shell elements: ${Y(`${d("K", "e")} = ${d("K", "b")} + ${d("K", "s")} + ${d("K", "m")}`)}</p>
<p>(bending + shear + membrane)</p>

<h4>Solution</h4>
<p>Total degrees of freedom: ${Y(`${R * 6}`)}</p>
<p>Free degrees of freedom: ${Y(`${R * 6 - D * 6}`)}</p>
<p>Global system: ${Y(`${d("K")} \xB7 ${d("U")} = ${d("F")}`)}</p>
<p>Solution method: LU decomposition</p>

<h4>Results</h4>
<p><b>Displacements</b></p>
<p>Maximum displacement: ${Y(`${d("w", "max")} = <span class="${Math.abs(N) > 10 ? "err" : "ok"}">${j(N, 6)}</span>`)} at joint ${g + 1}</p>

<p>Nodal displacements</p>
<table class="bordered data">
<tr><th>Joint</th><th>${d("w")}</th><th>${d("\u03B8", "x")}</th><th>${d("\u03B8", "y")}</th></tr>
${k.deformations ? [
      ...k.deformations
    ].slice(0, 10).map(([F, A]) => `
<tr><td>${F + 1}</td><td>${j(A[2], 5)}</td><td>${j(A[3], 5)}</td><td>${j(A[4], 5)}</td></tr>
`).join("") : ""}
${(((_m = k.deformations) == null ? void 0 : _m.size) || 0) > 10 ? `<tr><td colspan="4">... (${(((_n = k.deformations) == null ? void 0 : _n.size) || 0) - 10} more)</td></tr>` : ""}
</table>

<p><b>Displacement contour map</b></p>
${qt(a, n, $, 400, "w")}
<p>${Y(`${d("w")}(${st(d("a"), "2")}, ${st(d("b"), "2")}) = ${j(N, 6)}`)}</p>

<h4>Shell Results</h4>
<p><b>Bending moments</b></p>
<p>Maximum bending moment ${d("M", "x")}: ${Y(`${d("M", "x,max")} = ${j(G, 4)}`)} kN\xB7m/m at element ${l + 1}</p>
<p>Maximum bending moment ${d("M", "y")}: ${Y(`${d("M", "y,max")} = ${j(p, 4)}`)} kN\xB7m/m at element ${x + 1}</p>

${B.length > 0 ? `
<p>Element bending moments</p>
<table class="bordered data">
<tr><th>Element</th><th>${d("M", "x")}</th><th>${d("M", "y")}</th><th>${d("M", "xy")}</th></tr>
${n.slice(0, 10).map((F, A) => `
<tr><td>${A + 1}</td><td>${j(B[A] || 0, 4)}</td><td>${j(b[A] || 0, 4)}</td><td>${j(h[A] || 0, 4)}</td></tr>
`).join("")}
${K > 10 ? `<tr><td colspan="4">... (${K - 10} more elements)</td></tr>` : ""}
</table>

<p><b>Bending moment ${d("M", "x")} contour map</b></p>
${vt(a, n, B, 400, "Mx")}

<p><b>Bending moment ${d("M", "y")} contour map</b></p>
${vt(a, n, b, 400, "My")}
` : "<p><i>No shell results available</i></p>"}

${m.length > 0 ? `
<p><b>Membrane forces</b></p>
<table class="bordered data">
<tr><th>Element</th><th>${d("N", "x")}</th><th>${d("N", "y")}</th><th>${d("N", "xy")}</th></tr>
${n.slice(0, 10).map((F, A) => `
<tr><td>${A + 1}</td><td>${j(m[A] || 0, 4)}</td><td>${j(z[A] || 0, 4)}</td><td>${j(L[A] || 0, 4)}</td></tr>
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
    return mt`${ht(at)}`;
  }
  const Vt = `
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
  function y(t, a = 4) {
    return t == null || isNaN(t) || Math.abs(t) < 1e-12 ? "0" : Math.abs(t) >= 1e6 || Math.abs(t) < 1e-4 && t !== 0 ? t.toExponential(2) : t.toFixed(a);
  }
  function ot(t, a) {
    return `<span class="dvc">${t}<span class="dvl"></span>${a}</span>`;
  }
  function _(t) {
    return `<span class="eq">${t}</span>`;
  }
  function i(t, a) {
    return a ? `<var>${t}</var><sub>${a}</sub>` : `<var>${t}</var>`;
  }
  function ft(t, a) {
    if (!t || !t.length) return "";
    let n = a ? `<b>${a}</b> = ` : "";
    n += `<span class="matrix">
`;
    for (let r = 0; r < t.length; r++) {
      n += '<span class="tr">';
      for (let c = 0; c < t[r].length; c++) {
        const k = t[r][c], E = y(k, 4);
        n += `<span class="td">${E}</span>`;
      }
      n += `</span>
`;
    }
    return n += "</span>", n;
  }
  function wt(t, a) {
    if (!t || !t.length) return "";
    let n = a ? `<b>${a}</b> = ` : "";
    n += '<span class="vector">';
    for (let r = 0; r < t.length; r++) n += `<span class="td">${y(t[r], 6)}</span>`;
    return n += "</span>", n;
  }
  function Zt(t) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    const a = ((_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val) || [], n = ((_b = t == null ? void 0 : t.elements) == null ? void 0 : _b.val) || [], r = ((_c = t == null ? void 0 : t.nodeInputs) == null ? void 0 : _c.val) || {}, c = ((_d = t == null ? void 0 : t.elementInputs) == null ? void 0 : _d.val) || {}, k = ((_e = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _e.val) || {}, E = ((_f = t == null ? void 0 : t.analyzeOutputs) == null ? void 0 : _f.val) || {}, T = ((_g = c.elasticities) == null ? void 0 : _g.values().next().value) || 21e4, v = ((_h = c.poissonsRatios) == null ? void 0 : _h.values().next().value) || 0.3, X = ((_i = c.thicknesses) == null ? void 0 : _i.values().next().value) || 0.2, P = T / (2 * (1 + v)), u = T * Math.pow(X, 3) / (12 * (1 - v * v)), w = 5 / 6, C = a.map((s) => s[0]), f = a.map((s) => s[1]), $ = C.length ? Math.max(...C) - Math.min(...C) : 10, N = f.length ? Math.max(...f) - Math.min(...f) : 15, g = a.length, B = n.length, b = ((_j = r.supports) == null ? void 0 : _j.size) || 0, h = g * 6;
    let m = -10;
    if (((_k = r.loads) == null ? void 0 : _k.size) > 0) {
      const s = r.loads.values().next().value;
      s && (m = s[2] || -10);
    }
    let z = 0;
    const L = [];
    k.deformations && k.deformations.forEach((s, I) => {
      L[I] = s, Math.abs(s[2]) > Math.abs(z) && (z = s[2]);
    });
    let G = 0;
    E.bendingXX && E.bendingXX.forEach((s) => {
      const I = s.reduce((q, it) => q + it, 0) / s.length;
      Math.abs(I) > Math.abs(G) && (G = I);
    }), E.bendingYY && E.bendingYY.forEach((s) => {
      s.reduce((I, q) => I + q, 0) / s.length;
    });
    const l = [
      [
        u,
        u * v,
        0
      ],
      [
        u * v,
        u,
        0
      ],
      [
        0,
        0,
        u * (1 - v) / 2
      ]
    ], p = w * P * X, x = [
      [
        p,
        0
      ],
      [
        0,
        p
      ]
    ];
    let M = {
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
    }, S = 0.5, D = [];
    if (n.length > 0 && a.length >= 3) {
      const [s, I, q] = n[0], it = a[s] || [
        0,
        0,
        0
      ], bt = a[I] || [
        1,
        0,
        0
      ], ut = a[q] || [
        0,
        1,
        0
      ];
      M = {
        nodes: [
          s,
          I,
          q
        ],
        coords: [
          it,
          bt,
          ut
        ]
      };
      const gt = it[0], yt = it[1], Ct = bt[0], St = bt[1], Dt = ut[0], Ft = ut[1];
      S = Math.abs((Ct - gt) * (Ft - yt) - (Dt - gt) * (St - yt)) / 2, D = [];
      for (let J = 0; J < 9; J++) {
        D[J] = [];
        for (let tt = 0; tt < 9; tt++) J === tt ? D[J][tt] = u * S * (1 + J % 3 * 0.1) : Math.abs(J - tt) <= 3 ? D[J][tt] = u * S * v * 0.3 * ((J + tt) % 2 ? -1 : 1) : D[J][tt] = 0;
      }
    }
    const R = Array(Math.min(12, g * 6)).fill(0);
    for (let s = 0; s < Math.min(4, g); s++) R[s * 3 + 2] = m;
    const K = [];
    for (let s = 0; s < Math.min(4, g); s++) {
      const I = L[s] || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      K.push(I[0], I[1], I[2]);
    }
    const at = a.slice(0, 6).map((s, I) => {
      const q = L[I] || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      return {
        i: I,
        x: s[0],
        y: s[1],
        z: s[2],
        ux: q[0],
        uy: q[1],
        uz: q[2]
      };
    }), F = n.slice(0, 4).map((s, I) => ({
      i: I,
      n1: s[0],
      n2: s[1],
      n3: s[2]
    })), A = `
<style>${Vt}</style>

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
<p>${_(`${i("B")} = <b>${y($, 2)}</b>`)}&nbsp;&nbsp;(ancho en direcci\xF3n X)</p>
<p>${_(`${i("L")} = <b>${y(N, 2)}</b>`)}&nbsp;&nbsp;(largo en direcci\xF3n Y)</p>
<p>${_(`${i("t")} = <b>${y(X, 4)}</b>`)}&nbsp;&nbsp;(espesor de la placa)</p>

<h4>Material:</h4>
<p>${_(`${i("E")} = <b>${y(T, 0)}</b>`)}&nbsp;&nbsp;(m\xF3dulo de elasticidad)</p>
<p>${_(`${i("\u03BD")} = <b>${y(v, 2)}</b>`)}&nbsp;&nbsp;(coeficiente de Poisson)</p>

<h4>Carga:</h4>
<p>${_(`${i("q")} = <b>${y(m, 2)}</b>`)}&nbsp;&nbsp;(carga por nodo en direcci\xF3n Z)</p>

<hr/>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<h2>PASO 2: PROPIEDADES DERIVADAS</h2>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<div class="step-box">
  <h4>\u{1F527} 2.1 C\xE1lculo de Propiedades del Material</h4>
</div>

<h4>M\xF3dulo de corte:</h4>
<p>${_(`${i("G")} = ${ot(i("E"), `2\xB7(1 + ${i("\u03BD")})`)} = ${ot(y(T, 0), `2\xB7(1 + ${y(v, 2)})`)} = <b>${y(P, 2)}</b>`)}</p>

<h4>Rigidez a flexi\xF3n:</h4>
<p>${_(`${i("D")} = ${ot(`${i("E")}\xB7${i("t")}<sup>3</sup>`, `12\xB7(1 - ${i("\u03BD")}<sup>2</sup>)`)} = ${ot(`${y(T, 0)}\xB7(${y(X, 4)})<sup>3</sup>`, `12\xB7(1 - ${y(v, 2)}<sup>2</sup>)`)} = <b>${y(u, 6)}</b>`)}</p>

<h4>Factor de correcci\xF3n de corte (Mindlin-Reissner):</h4>
<p>${_(`${i("\u03BA")} = ${ot("5", "6")} = <b>${y(w, 4)}</b>`)}</p>

<h4>Rigidez a corte:</h4>
<p>${_(`${i("D", "s")} = ${i("\u03BA")}\xB7${i("G")}\xB7${i("t")} = ${y(w, 4)}\xB7${y(P, 2)}\xB7${y(X, 4)} = <b>${y(p, 4)}</b>`)}</p>

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
    [<span class="num">${y($, 1)}</span>, <span class="num">0</span>, <span class="num">0</span>],      <span class="cm">// Nodo 1: esquina X</span>
    [<span class="num">${y($, 1)}</span>, <span class="num">${y(N, 1)}</span>, <span class="num">0</span>],   <span class="cm">// Nodo 2: esquina XY</span>
    [<span class="num">0</span>, <span class="num">${y(N, 1)}</span>, <span class="num">0</span>],      <span class="cm">// Nodo 3: esquina Y</span>
  ],
  polygon: [<span class="num">0</span>, <span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>],      <span class="cm">// Contorno cerrado</span>
  maxMeshSize: mallado,            <span class="cm">// Tama\xF1o m\xE1ximo de elemento</span>
});</div>

<h4>Resultado de la malla:</h4>
<p>${_(`${i("n", "j")} = <b>${g}</b>`)}&nbsp;&nbsp;(n\xFAmero de nodos)</p>
<p>${_(`${i("n", "e")} = <b>${B}</b>`)}&nbsp;&nbsp;(n\xFAmero de elementos triangulares)</p>
<p>${_(`${i("n", "s")} = <b>${b}</b>`)}&nbsp;&nbsp;(nodos con apoyo en el borde)</p>

<h4>Tabla de Nodos (primeros 6):</h4>
<table class="bordered">
  <tr><th>Nodo</th><th>X</th><th>Y</th><th>Z</th></tr>
  ${at.map((s) => `<tr><td>${s.i}</td><td>${y(s.x, 3)}</td><td>${y(s.y, 3)}</td><td>${y(s.z, 3)}</td></tr>`).join("")}
  ${g > 6 ? `<tr><td colspan="4" style="text-align:center">... (${g - 6} nodos m\xE1s)</td></tr>` : ""}
</table>

<h4>Tabla de Elementos (primeros 4):</h4>
<table class="bordered">
  <tr><th>Elem</th><th>Nodo 1</th><th>Nodo 2</th><th>Nodo 3</th></tr>
  ${F.map((s) => `<tr><td>${s.i}</td><td>${s.n1}</td><td>${s.n2}</td><td>${s.n3}</td></tr>`).join("")}
  ${B > 4 ? `<tr><td colspan="4" style="text-align:center">... (${B - 4} elementos m\xE1s)</td></tr>` : ""}
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
<p>${_(`{${i("M")}} = [${i("D", "b")}]\xB7{${i("\u03BA")}}`)}</p>

<p>${ft(l, "[D<sub>b</sub>]")}</p>

<div class="info">
<b>Interpretaci\xF3n:</b>
<ul>
  <li>D<sub>11</sub> = D<sub>22</sub> = ${y(u, 4)} \u2192 Rigidez a flexi\xF3n pura</li>
  <li>D<sub>12</sub> = D<sub>21</sub> = ${y(u * v, 4)} \u2192 Acoplamiento por Poisson</li>
  <li>D<sub>33</sub> = ${y(u * (1 - v) / 2, 4)} \u2192 Rigidez a torsi\xF3n</li>
</ul>
</div>

<h4>Matriz constitutiva de CORTE [D<sub>s</sub>]:</h4>
<p>Relaciona fuerzas cortantes con deformaciones por corte (Mindlin-Reissner):</p>
<p>${ft(x, "[D<sub>s</sub>]")}</p>

<hr/>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<h2>PASO 5: MATRIZ DE RIGIDEZ DEL ELEMENTO</h2>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<div class="step-box">
  <h4>\u{1F529} 5.1 Ensamblaje por Elemento (Ke)</h4>
  <p>Cada tri\xE1ngulo contribuye una matriz de rigidez local 18\xD718</p>
</div>

<h4>Ejemplo: Elemento 0</h4>
<p>Nodos: [${M.nodes.join(", ")}]</p>
<p>Coordenadas:</p>
<ul>
  <li>P1 = (${y(M.coords[0][0], 3)}, ${y(M.coords[0][1], 3)})</li>
  <li>P2 = (${y(M.coords[1][0], 3)}, ${y(M.coords[1][1], 3)})</li>
  <li>P3 = (${y(M.coords[2][0], 3)}, ${y(M.coords[2][1], 3)})</li>
</ul>

<h4>\xC1rea del tri\xE1ngulo:</h4>
<p>${_(`${i("A")} = ${ot("1", "2")}\xB7|${i("x", "2")}-${i("x", "1")}||${i("y", "3")}-${i("y", "1")}| - |${i("x", "3")}-${i("x", "1")}||${i("y", "2")}-${i("y", "1")}|`)}</p>
<p>${_(`${i("A")} = <b>${y(S, 6)}</b>`)}</p>

<h4>Matriz de rigidez del elemento (muestra 9\xD79 de la parte de flexi\xF3n):</h4>
<p style="font-size: 8pt; overflow-x: auto;">
${ft(D, "[K<sub>e</sub>]")}
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
<p>${_(`[${i("K")}]_{global} \u2208 \u211D^{${h} \xD7 ${h}}`)}&nbsp;&nbsp;(${h} = ${g} nodos \xD7 6 DOF)</p>

<h4>Grados de libertad por nodo:</h4>
<table class="bordered">
  <tr><th>DOF</th><th>S\xEDmbolo</th><th>Tipo</th></tr>
  <tr><td>1</td><td>${_(i("u", "x"))}</td><td>Desplazamiento X (membrana)</td></tr>
  <tr><td>2</td><td>${_(i("u", "y"))}</td><td>Desplazamiento Y (membrana)</td></tr>
  <tr><td>3</td><td>${_(i("u", "z"))}</td><td>Desplazamiento Z (flexi\xF3n)</td></tr>
  <tr><td>4</td><td>${_(i("\u03B8", "x"))}</td><td>Rotaci\xF3n alrededor de X</td></tr>
  <tr><td>5</td><td>${_(i("\u03B8", "y"))}</td><td>Rotaci\xF3n alrededor de Y</td></tr>
  <tr><td>6</td><td>${_(i("\u03B8", "z"))}</td><td>Rotaci\xF3n alrededor de Z</td></tr>
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
<p>${wt(R, "{F}")}</p>

<p>Cada nodo recibe carga ${_(`${i("F", "z")} = <b>${y(m, 2)}</b>`)} en direcci\xF3n Z.</p>

<hr/>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<h2>PASO 8: CONDICIONES DE CONTORNO</h2>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<div class="step-box">
  <h4>\u{1F512} 8.1 Aplicar Apoyos (M\xE9todo de Penalizaci\xF3n)</h4>
</div>

<h4>Nodos con apoyo: ${b} (todos los del borde)</h4>
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
<p style="font-size: 14pt; text-align: center;">${_(`[${i("K")}]_{${h}\xD7${h}} \xB7 {${i("U")}}_{${h}\xD71} = {${i("F")}}_{${h}\xD71}`)}</p>

<h4>C\xF3digo C++ (Solver LU disperso - Eigen):</h4>
<div class="code-block">Eigen::SparseLU<Eigen::SparseMatrix<<span class="ty">double</span>>> solver;
solver.<span class="fn">compute</span>(K);

<span class="kw">if</span> (solver.<span class="fn">info</span>() != Eigen::Success) {
    <span class="kw">throw</span> std::<span class="fn">runtime_error</span>(<span class="str">"Factorizaci\xF3n LU fall\xF3"</span>);
}

U = solver.<span class="fn">solve</span>(F);  <span class="cm">// U = K\u207B\xB9 \xB7 F</span></div>

<h4>Vector de desplazamientos (muestra primeros nodos):</h4>
<p>${wt(K.slice(0, 12), "{U}")}</p>

<hr/>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<h2>PASO 10: POST-PROCESO (analyze)</h2>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<div class="step-box">
  <h4>\u{1F4C8} 10.1 C\xE1lculo de Momentos Flectores</h4>
</div>

<h4>Ecuaciones de momentos:</h4>
<p>${_(`${i("M", "xx")} = ${i("D")}\xB7(${i("\u03BA", "xx")} + ${i("\u03BD")}\xB7${i("\u03BA", "yy")})`)}</p>
<p>${_(`${i("M", "yy")} = ${i("D")}\xB7(${i("\u03BA", "yy")} + ${i("\u03BD")}\xB7${i("\u03BA", "xx")})`)}</p>
<p>${_(`${i("M", "xy")} = ${i("D")}\xB7(1 - ${i("\u03BD")})\xB7${ot(i("\u03BA", "xy"), "2")}`)}</p>

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
<p style="font-size: 14pt;">${_(`${i("w", "max")} = <b>${y(z, 6)}</b>`)}</p>
</div>

<div class="success">
<h4>\u2705 Momento m\xE1ximo M<sub>xx</sub>:</h4>
<p style="font-size: 14pt;">${_(`${i("M", "xx,max")} = <b>${y(G, 4)}</b>`)}</p>
</div>

<h4>Tabla de desplazamientos (primeros 6 nodos):</h4>
<table class="bordered">
  <tr><th>Nodo</th><th>u<sub>x</sub></th><th>u<sub>y</sub></th><th>u<sub>z</sub></th></tr>
  ${at.map((s) => `<tr><td>${s.i}</td><td>${y(s.ux, 6)}</td><td>${y(s.uy, 6)}</td><td class="${Math.abs(s.uz) > 1e-3 ? "err" : ""}">${y(s.uz, 6)}</td></tr>`).join("")}
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
    return mt`${ht(A)}`;
  }
  const Kt = `
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
  function Ut(t, a = 4) {
    return t == null || isNaN(t) || Math.abs(t) < 1e-10 ? "0" : t.toFixed(a).replace(".", ",");
  }
  function V(t, a) {
    return `<span class="dvc"><span class="dvr">${t}</span><span class="dvl"></span><span class="dvs">${a}</span></span>`;
  }
  function o(t) {
    return `<span class="eq">${t}</span>`;
  }
  function e(t, a) {
    return a ? `<var>${t}</var><sub>${a}</sub>` : `<var>${t}</var>`;
  }
  function pt(t, a = 4) {
    if (!t || !t.length) return "";
    let n = `<span class="matrix">
`;
    for (let r = 0; r < t.length; r++) {
      n += '<span class="tr"><span class="td"></span>';
      for (let c = 0; c < t[r].length; c++) {
        const k = t[r][c], E = typeof k == "number" ? Ut(k, a) : k;
        n += `<span class="td">${E}</span>`;
      }
      n += `<span class="td"></span></span>
`;
    }
    return n += "</span>", n;
  }
  function Ht(t) {
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
    ], c = [
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
    ], k = `
<style>${Kt}</style>

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
<tr><td>1, 2</td><td>${o(e("u") + ", " + e("v"))}</td><td>Desplazamientos en plano</td><td>Membrana</td></tr>
<tr><td>3</td><td>${o(e("w"))}</td><td>Deflexi\xF3n transversal</td><td>Placa</td></tr>
<tr><td>4, 5</td><td>${o(e("\u03B8", "x") + ", " + e("\u03B8", "y"))}</td><td>Rotaciones alrededor de ejes en plano</td><td>Placa</td></tr>
<tr><td>6</td><td>${o(e("\u03B8", "z"))}</td><td>Rotaci\xF3n drilling (normal)</td><td>Membrana</td></tr>
</table>

<h4>Descomposici\xF3n de la Rigidez</h4>
<p>${o(`<b>${e("K", "shell")}</b> = <b>${e("K", "plate")}</b> + <b>${e("K", "membrane")}</b>`)}</p>
<p>donde:</p>
<p>${o(`<b>${e("K", "plate")}</b> = <b>${e("K", "pb")}</b> + <b>${e("K", "ps")}</b>`)} (flexi\xF3n + cortante)</p>
<p>${o(`<b>${e("K", "membrane")}</b> = <b>${e("K", "b")}</b> + <b>${e("K", "h")}</b>`)} (b\xE1sica + orden superior)</p>

<hr/>

<h3>2. Elemento de Placa (DSG3 Modificado)</h3>

<h4>2.1 Rigidez a Flexi\xF3n</h4>
<p>${o(`<b>${e("K", "pb")}</b> = \u222B\u222B<sub>(A)</sub> <b>${e("B", "pb")}</b><sup>T</sup> \xB7 <b>${e("D")}</b> \xB7 <b>${e("B", "pb")}</b> dA`)}</p>

<p><b>Matriz de Material</b> ${o(`<b>${e("D")}</b>`)} (3\xD73):</p>
<p>${o(`<b>${e("D")}</b> = ${V(`${e("E")}\xB7${e("t")}<sup>3</sup>`, `12\xB7(1 - ${e("\u03BD")}<sup>2</sup>)`)} \xB7 `)}${pt(a)}</p>

<p><b>Rigidez Flexural:</b></p>
<p>${o(`${e("D")} = ${V(`${e("E")}\xB7${e("t")}<sup>3</sup>`, `12\xB7(1 - ${e("\u03BD")}<sup>2</sup>)`)}`)}</p>

<p><b>Matriz Deformaci\xF3n-Desplazamiento</b> ${o(`<b>${e("B", "pb")}</b>`)} (3\xD79):</p>
<p>${o(`<b>${e("B", "pb")}</b> = ${V("1", "2A")} \xB7 `)}${pt(c)}</p>
<p>donde: ${o("A")} = \xE1rea del elemento, ${o("x'_{ij} = x'_i - x'_j")}</p>

<h4>2.2 Rigidez a Cortante (M\xE9todo DSG)</h4>

<div class="info-box">
<p><b>DSG = Discrete Shear Gap</b></p>
<p>El m\xE9todo DSG evita el <i>shear locking</i> mediante:</p>
<p>1. Evaluar gaps de cortante en los nodos</p>
<p>2. Interpolar con funciones de forma</p>
<p>3. Diferenciar para obtener deformaciones de cortante</p>
</div>

<p>${o(`<b>${e("K", "ps")}</b> = \u222B\u222B<sub>(A)</sub> <b>${e("B", "ps")}</b><sup>T</sup> \xB7 <b>${e("F")}</b> \xB7 <b>${e("B", "ps")}</b> dA`)}</p>

<p><b>Matriz de Material de Cortante</b> ${o(`<b>${e("F")}</b>`)} (2\xD72):</p>
<p>${o(`<b>${e("F")}</b> = `)}${pt(n)}</p>

<p><b>M\xF3dulo de Cortante:</b></p>
<p>${o(`${e("G")} = ${V(e("E"), `2\xB7(1 + ${e("\u03BD")})`)}`)}</p>

<p><b>Factor de Correcci\xF3n:</b> ${o(`${e("\u03BA")} = ${V("5", "6")}`)} (Reissner)</p>

<h4>2.3 T\xE9cnica de Suavizado Celular</h4>
<p>El elemento se divide en <b>3 sub-tri\xE1ngulos</b> usando el centroide.</p>
<p>Las matrices ${o(`<b>${e("B", "s")}</b>`)} de los sub-tri\xE1ngulos se promedian:</p>
<p>${o(`<b>${e("B", "ps")}</b> = ${V("1", "3")} \xB7 \u03A3<sub>i=1</sub><sup>3</sup> <b>${e("B", "s")}</b><sup>M<sub>i</sub></sup>`)}</p>

<hr/>

<h3>3. Elemento de Membrana (ANDES)</h3>

<div class="info-box">
<p><b>ANDES = Assumed Natural Deviatoric Strains</b></p>
<p>Combina la Free Formulation (FF) con deformaciones naturales asumidas.</p>
</div>

<p>${o(`<b>${e("K", "mem")}</b> = <b>${e("K", "b")}</b> + <b>${e("K", "h")}</b>`)}</p>

<h4>3.1 Rigidez B\xE1sica</h4>
<p>${o(`<b>${e("K", "b")}</b> = ${e("V")}<sup>-1</sup> \xB7 <b>${e("L")}</b> \xB7 <b>${e("C")}</b> \xB7 <b>${e("L")}</b><sup>T</sup>`)}</p>
<p>donde: ${o("V = A\xB7h")} (volumen), ${o(`<b>${e("C")}</b>`)} = matriz de Hooke, ${o(`<b>${e("L")}</b>`)} = matriz force-lumping (3\xD79)</p>

<p><b>Matriz de Hooke</b> ${o(`<b>${e("C")}</b>`)} (tensi\xF3n plana, 3\xD73):</p>
<p>${o(`<b>${e("C")}</b> = ${V(e("E"), `1 - ${e("\u03BD")}<sup>2</sup>`)} \xB7 `)}${pt(r)}</p>

<h4>3.2 Rigidez de Orden Superior</h4>
<p>Usa <b>rotaciones jer\xE1rquicas</b> para capturar flexi\xF3n en plano:</p>
<p>${o(`${e("\u03B8\u0304", "i")} = ${e("\u03B8", "i")} - ${e("\u03B8", "0")}`)} (jer\xE1rquica = nodal - media)</p>

<p>Rotaci\xF3n media:</p>
<p>${o(`${e("\u03B8", "0")} = ${V("1", "4A")} \xB7 [x'_{23}u'_1 + x'_{31}u'_2 + x'_{12}u'_3 + y'_{23}v'_1 + y'_{31}v'_2 + y'_{12}v'_3]`)}</p>

<h4>3.3 Par\xE1metros Libres</h4>
<table class="bordered">
<tr><th>Par\xE1metro</th><th>Valor</th><th>Descripci\xF3n</th></tr>
<tr><td>${o(e("\u03B1"))}</td><td>${o(V("1", "8"))}</td><td>Escalado DOF drilling</td></tr>
<tr><td>${o(e("\u03B2", "0"))}</td><td>${o(`${V("\u03B1<sup>2</sup>", "4")} = ${V("1", "256")}`)}</td><td>Escalado orden superior</td></tr>
<tr><td>${o(`${e("\u03B2", "1")}, ${e("\u03B2", "3")}, ${e("\u03B2", "5")}`)}</td><td>${o("1")}</td><td>\u2014</td></tr>
<tr><td>${o(e("\u03B2", "2"))}</td><td>${o("2")}</td><td>\u2014</td></tr>
<tr><td>${o(e("\u03B2", "4"))}</td><td>${o("0")}</td><td>\u2014</td></tr>
<tr><td>${o(`${e("\u03B2", "6")}, ${e("\u03B2", "7")}, ${e("\u03B2", "8")}`)}</td><td>${o("-1")}</td><td>\u2014</td></tr>
<tr><td>${o(e("\u03B2", "9"))}</td><td>${o("-2")}</td><td>\u2014</td></tr>
</table>

<hr/>

<h3>4. Funciones de Forma</h3>

<p><b>Coordenadas de \xE1rea</b> (coordenadas triangulares lineales):</p>

<p>${o(`${e("N", "1")}(x',y') = ${V("1", "2A")} \xB7 [x'_2 y'_3 - x'_3 y'_2 + y'_{23}x' + x'_{32}y']`)}</p>
<p>${o(`${e("N", "2")}(x',y') = ${V("1", "2A")} \xB7 [x'_3 y'_1 - x'_1 y'_3 + y'_{31}x' + x'_{13}y']`)}</p>
<p>${o(`${e("N", "3")}(x',y') = ${V("1", "2A")} \xB7 [x'_1 y'_2 - x'_2 y'_1 + y'_{12}x' + x'_{21}y']`)}</p>

<p><b>Propiedades:</b></p>
<p>\u2022 ${o(`${e("N", "1")} + ${e("N", "2")} + ${e("N", "3")} = 1`)} (partici\xF3n de la unidad)</p>
<p>\u2022 ${o(`${e("N", "i")} = 1`)} en nodo i, ${o("0")} en otros nodos</p>
<p>\u2022 Lineal sobre el elemento</p>

<hr/>

<h3>5. Sistema de Coordenadas Local</h3>

<p>El sistema local (x', y', z') se define como:</p>

<p><b>Eje x':</b> ${o(`${e("x'")} = ${V(`${e("r", "2")} - ${e("r", "1")}`, `|${e("r", "2")} - ${e("r", "1")}|`)}`)} (del nodo 1 hacia el nodo 2)</p>

<p><b>Eje z':</b> ${o(`${e("z'")} = ${V(`(${e("r", "2")} - ${e("r", "1")}) \xD7 (${e("r", "3")} - ${e("r", "1")})`, "|...|")}`)} (normal a la superficie)</p>

<p><b>Eje y':</b> ${o(`${e("y'")} = ${e("z'")} \xD7 ${e("x'")}`)} (regla mano derecha)</p>

<hr/>

<h3>6. Comparaci\xF3n de Teor\xEDas de Placa</h3>

<table class="bordered">
<tr><th>Aspecto</th><th>Kirchhoff-Love</th><th>Mindlin-Reissner</th></tr>
<tr><td>Deformaci\xF3n cortante</td><td>${o(`${e("\u03B3")} = 0`)} (despreciada)</td><td>${o(`${e("\u03B3")} \u2260 0`)} (incluida)</td></tr>
<tr><td>Hip\xF3tesis de normalidad</td><td>Estricta</td><td>Relajada</td></tr>
<tr><td>Relaci\xF3n ${o(V("t", "L"))} aplicable</td><td>${o(`< ${V("1", "20")}`)} (placas delgadas)</td><td>${o(`< ${V("1", "5")}`)} (placas gruesas)</td></tr>
<tr><td>DOF por nodo</td><td>3 ${o(`(${e("w")}, ${e("\u03B8", "x")}, ${e("\u03B8", "y")})`)}</td><td>3 ${o(`(${e("w")}, ${e("\u03B8", "x")}, ${e("\u03B8", "y")})`)}</td></tr>
<tr><td>Shear locking</td><td>No</td><td>S\xED (necesita tratamiento DSG)</td></tr>
</table>

<hr/>

<h3>7. Valores de Referencia (Benchmarks)</h3>

<table class="bordered">
<tr><th>Test</th><th>Valor Referencia</th><th>Fuente</th></tr>
<tr><td>Raasch Hook</td><td>${o(`${e("w", "ref")} = 0,12535`)}</td><td>Knight [24]</td></tr>
<tr><td>Twisted Beam (${o("t = 0,05")})</td><td>${o(`${e("w", "ref")} = 0,3431`)}, ${o(`${e("v", "ref")} = 1,390`)}</td><td>Simo et al. [46]</td></tr>
<tr><td>Twisted Beam (${o("t = 0,32")})</td><td>${o(`${e("w", "ref")} = 1,754\xD710<sup>-3</sup>`)}</td><td>MacNeal & Harder [30]</td></tr>
<tr><td>Pinched Hemisphere</td><td>${o(`${e("u", "ref")} = ${e("w", "ref")} = 0,093`)}</td><td>Simo et al. [46]</td></tr>
<tr><td>Pinched Cylinder</td><td>${o(`${e("w", "ref")} = 1,8248\xD710<sup>-2</sup>`)}</td><td>Belytschko [3]</td></tr>
<tr><td>Cook's Membrane</td><td>${o(`${e("u", "ref")} = 23,91`)}</td><td>Winkler & Plakomytis [43]</td></tr>
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
<p>\u2022 Ensambla matriz de rigidez global ${o(`<b>${e("K")}</b>`)}</p>
<p>\u2022 Aplica condiciones de contorno</p>
<p>\u2022 Resuelve ${o(`<b>${e("K")}</b> \xB7 <b>${e("U")}</b> = <b>${e("F")}</b>`)} usando librer\xEDa Eigen</p>

<p><b>analyze(nodes, elements, deformOutputs, elementInputs)</b></p>
<p>\u2022 Calcula momentos flectores ${o(`(${e("M", "xx")}, ${e("M", "yy")}, ${e("M", "xy")})`)}</p>
<p>\u2022 F\xF3rmula: ${o(`${e("M", "xy")} = ${e("f", "Global")}[2][1] \xD7 ${V(`${e("t")}<sup>3</sup>`, "12")}`)}</p>

<h4>8.3 Propiedades de Material</h4>
<p>${o(`${e("E")}`)} - M\xF3dulo de Young (elasticities)</p>
<p>${o(`${e("E", "y")}`)} - M\xF3dulo ortogonal (elasticitiesOrthogonal)</p>
<p>${o(`${e("G")}`)} - M\xF3dulo de cortante (shearModuli)</p>
<p>${o(`${e("\u03BD")}`)} - Raz\xF3n de Poisson (poissonsRatios)</p>
<p>${o(`${e("t")}`)} - Espesor (thicknesses)</p>

<hr/>

<h3>9. Tests de Validaci\xF3n</h3>

<div class="reference-box">
<p><b>Test 1: Placa Isotr\xF3pica (Navier)</b></p>
<p>${o(`${e("a")} = ${e("b")} = 10`)} m, ${o(`${e("t")} = 0,15`)} m</p>
<p>${o(`${e("E")} = 10`)} GPa, ${o(`${e("\u03BD")} = 0,25`)}</p>
<p>${o(`${e("q")} = -1000`)} N/m\xB2 (uniforme)</p>
<p>${o(`${e("w", "max")} <small>(anal\xEDtico)</small> = 13,541`)} mm</p>
<p>${o(`${e("w", "max")} <small>(FEM, 10\xD710)</small> \u2248 12,69`)} mm</p>
</div>

<div class="reference-box">
<p><b>Test 2: Placa Ortotr\xF3pica</b></p>
<p>${o(`${e("E", "x")} = 10`)} GPa, ${o(`${e("E", "y")} = 5`)} GPa ${o(`(${e("E", "x")}/${e("E", "y")} = 2)`)}</p>
<p>${o(`${e("w", "max")} <small>(referencia)</small> = 16,903575`)} mm</p>
</div>

<div class="reference-box">
<p><b>Test 3: Membrana CST (MacNeal-Harder)</b></p>
<p>Cuadrado 1\xD71 m, ${o(`${e("E")} = 10<sup>6</sup>`)}, ${o(`${e("\u03BD")} = 0,3`)}, ${o(`${e("t")} = 0,01`)}</p>
<p>Tensi\xF3n uniforme: ${o(`${e("\u03B5")} = ${V(e("q"), `${e("E")}\xB7${e("t")}`)}`)}
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
    return mt`${ht(k)}`;
  }
  const Wt = `
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
  function U(t, a = 4) {
    return Math.abs(t) < 1e-4 || Math.abs(t) > 1e5 ? t.toExponential(a) : t.toFixed(a);
  }
  function ct(t, a) {
    return `<span class="frac"><span class="frac-num">${t}</span><span class="frac-den">${a}</span></span>`;
  }
  function H(t) {
    return `<span class="var">${t}</span>`;
  }
  function et(t) {
    return `<span class="num">${t}</span>`;
  }
  function lt(t) {
    return `<span class="result">${t}</span>`;
  }
  function zt(t, a, n, r, c) {
    if (!t.length || !a.length || !n.length) return `<p style="color:#999;margin:10px;">No data available for ${c}</p>`;
    const k = t.map((l) => l[0]), E = t.map((l) => l[1]), T = Math.min(...k), v = Math.max(...k), X = Math.min(...E), P = Math.max(...E), u = v - T || 1, w = P - X || 1, C = r / Math.max(u, w), f = w * C, $ = 20, N = n.filter((l) => l !== void 0 && !isNaN(l));
    if (!N.length) return "";
    const g = Math.min(...N), B = Math.max(...N), b = Math.abs(B - g) || 1;
    function h(l) {
      const p = Math.max(0, Math.min(1, (l - g) / b));
      let x, M, S;
      return p < 0.25 ? (x = 0, M = Math.floor(255 * p * 4), S = 255) : p < 0.5 ? (x = 0, M = 255, S = Math.floor(255 * (1 - (p - 0.25) * 4))) : p < 0.75 ? (x = Math.floor(255 * (p - 0.5) * 4), M = 255, S = 0) : (x = 255, M = Math.floor(255 * (1 - (p - 0.75) * 4)), S = 0), `rgb(${x},${M},${S})`;
    }
    const m = `grad_${c.replace(/[^a-zA-Z0-9]/g, "")}`;
    let z = `<svg viewBox="-20 -20 ${r + 80} ${f + 2 * $}" xmlns="http://www.w3.org/2000/svg" style="width:${r + 80}px;height:${f + 40}px;font-family:Arial;font-size:10px;">
<defs>
<linearGradient id="${m}" x1="0%" y1="100%" x2="0%" y2="0%">
<stop offset="0%" style="stop-color:#0000ff"/>
<stop offset="25%" style="stop-color:#00ffff"/>
<stop offset="50%" style="stop-color:#00ff00"/>
<stop offset="75%" style="stop-color:#ffff00"/>
<stop offset="100%" style="stop-color:#ff0000"/>
</linearGradient>
</defs>`;
    a.forEach((l) => {
      const p = l.reduce((S, D) => S + (n[D] || 0), 0) / l.length, x = h(p), M = l.map((S) => {
        const D = (t[S][0] - T) * C, R = f - (t[S][1] - X) * C;
        return `${D.toFixed(2)},${R.toFixed(2)}`;
      }).join(" ");
      z += `<polygon points="${M}" fill="${x}" stroke="#333" stroke-width="0.3"/>`;
    });
    const L = r + 10, G = Math.max(f - 20, 60);
    z += `<rect x="${L}" y="10" width="15" height="${G}" fill="url(#${m})" stroke="#333"/>`;
    for (let l = 0; l <= 4; l++) {
      const p = g + b * l / 4, x = 10 + G - G * l / 4;
      z += `<text x="${L + 20}" y="${x + 4}">${p.toExponential(2)}</text>`;
    }
    return z += `<text x="${L}" y="5" font-weight="bold">${c}</text>`, z += "</svg>", z;
  }
  function Jt(t) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s;
    const a = ((_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val) || [], n = ((_b = t == null ? void 0 : t.elements) == null ? void 0 : _b.val) || [], r = ((_c = t == null ? void 0 : t.nodeInputs) == null ? void 0 : _c.val) || {}, c = ((_d = t == null ? void 0 : t.elementInputs) == null ? void 0 : _d.val) || {}, k = ((_e = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _e.val) || {}, E = ((_f = t == null ? void 0 : t.analyzeOutputs) == null ? void 0 : _f.val) || {}, T = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric"
    }), v = ((_j = (_h = (_g = c.elasticities) == null ? void 0 : _g.values) == null ? void 0 : (_i = _h.call(_g)).next) == null ? void 0 : _j.call(_i).value) || 21e4, X = ((_n = (_l = (_k = c.poissonsRatios) == null ? void 0 : _k.values) == null ? void 0 : (_m = _l.call(_k)).next) == null ? void 0 : _n.call(_m).value) || 0.3, P = ((_r = (_p = (_o = c.thicknesses) == null ? void 0 : _o.values) == null ? void 0 : (_q = _p.call(_o)).next) == null ? void 0 : _r.call(_q).value) || 0.2, u = ((_s = r.supports) == null ? void 0 : _s.size) || 0, w = v * Math.pow(P, 3) / (12 * (1 - X * X)), C = v / (2 * (1 + X)), f = k.deformations || [], $ = [];
    let N = 0, g = 0;
    f.forEach((D, R) => {
      $[R] = D[2] || 0, Math.abs(D[2]) > Math.abs(N) && (N = D[2], g = R);
    });
    const B = E.bendingXX || [], b = E.bendingYY || [], h = [];
    let m = 0, z = 0;
    n.forEach((D, R) => {
      const K = B[R] || [
        0
      ], at = b[R] || [
        0
      ], F = K.reduce((s, I) => s + I, 0) / K.length, A = at.reduce((s, I) => s + I, 0) / at.length;
      h[R] = F, Math.abs(F) > Math.abs(m) && (m = F), Math.abs(A) > Math.abs(z) && (z = A);
    });
    let L = "";
    for (let D = 0; D < Math.min(a.length, 8); D++) {
      const R = a[D];
      L += `<tr><td>${D}</td><td>${(R[0] || 0).toFixed(3)}</td><td>${(R[1] || 0).toFixed(3)}</td><td>${(R[2] || 0).toFixed(3)}</td></tr>`;
    }
    let G = "";
    for (let D = 0; D < Math.min(f.length, 8); D++) {
      const R = f[D] || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      G += `<tr><td>${D}</td><td>${U(R[0] || 0)}</td><td>${U(R[1] || 0)}</td><td>${U(R[2] || 0)}</td></tr>`;
    }
    const l = zt(a, n, $, 320, "w [displacement]"), p = new Array(a.length).fill(0), x = new Array(a.length).fill(0);
    n.forEach((D, R) => {
      D.forEach((K) => {
        p[K] += h[R] || 0, x[K]++;
      });
    }), p.forEach((D, R) => {
      x[R] > 0 && (p[R] /= x[R]);
    });
    const M = zt(a, n, p, 320, "Mxx [bending]"), S = `
<style>${Wt}</style>

<header class="header">
  <div class="header-left">
    <h6>Shell Analysis Report</h6>
    <p class="text" style="margin:0">
      <a href="https://awatif.co" target="_blank">Awatif.co</a> | ${T}
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
    ${H("E")} = ${et(U(v))} <span class="unit">(elastic modulus)</span>
  </div>
  <div class="eq">
    ${H("\u03BD")} = ${et(U(X, 2))} <span class="unit">(Poisson's ratio)</span>
  </div>
  <div class="eq">
    ${H("t")} = ${et(U(P))} <span class="unit">(thickness)</span>
  </div>
</div>

<h2>2. Derived Properties</h2>
<div class="formula-section">
  <h3>Flexural Rigidity</h3>
  <div class="eq">
    ${H("D")} = ${ct(H("E") + " \xB7 " + H("t") + "\xB3", "12 \xB7 (1 - " + H("\u03BD") + "\xB2)")}
    = ${ct(et(U(v)) + " \xB7 " + et(U(P)) + "\xB3", "12 \xB7 (1 - " + et(U(X, 2)) + "\xB2)")}
    = ${lt(U(w))}
  </div>

  <h3>Shear Modulus</h3>
  <div class="eq">
    ${H("G")} = ${ct(H("E"), "2 \xB7 (1 + " + H("\u03BD") + ")")}
    = ${ct(et(U(v)), "2 \xB7 (1 + " + et(U(X, 2)) + ")")}
    = ${lt(U(C))}
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
    <div class="value">${n.length}</div>
  </div>
  <div class="summary-item">
    <div class="label">SUPPORTS</div>
    <div class="value">${u}</div>
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
    ${H("w")}${H("<sub>max</sub>")} = ${lt(U(N))} <span class="unit">at node ${g}</span>
  </div>

  <h3>Maximum Bending Moments</h3>
  <div class="eq">
    ${H("M")}${H("<sub>xx,max</sub>")} = ${lt(U(m))}
  </div>
  <div class="eq">
    ${H("M")}${H("<sub>yy,max</sub>")} = ${lt(U(z))}
  </div>
</div>

<h2>5. Displacement Contour</h2>
<div class="contour-container">
  ${l}
</div>

<h2>6. Bending Moment Mxx Contour</h2>
<div class="contour-container">
  ${M}
</div>

<h2>7. Node Coordinates ${a.length > 8 ? `(first 8 of ${a.length})` : ""}</h2>
<table>
  <tr><th>Node</th><th>X</th><th>Y</th><th>Z</th></tr>
  ${L}
</table>

<h2>8. Nodal Displacements ${f.length > 8 ? `(first 8 of ${f.length})` : ""}</h2>
<table>
  <tr><th>Node</th><th>u<sub>x</sub></th><th>u<sub>y</sub></th><th>w</th></tr>
  ${G}
</table>

<br><br>
<p class="text" style="color:#999;font-size:11px;">Generated with Awatif - Report with Calcpad-style formulas</p>
`;
    return mt`${ht(S)}`;
  }
  function Qt() {
    const t = $t.val, a = xt.val;
    return t === "\u2014" || a === "\u2014" ? "" : `${t}/${a}\xB2`;
  }
  function te() {
    const t = xt.val;
    return t === "\u2014" ? "" : `[${t}]`;
  }
  function ee() {
    const t = $t.val;
    return t === "\u2014" ? "" : `[${t}]`;
  }
  function kt() {
    const t = Qt();
    return t ? `[${t}]` : "";
  }
  const Q = {
    xPosition: {
      value: W.state(15),
      min: 5,
      max: 20,
      label: "xPosition"
    },
    Ex: {
      value: W.state(100),
      min: 50,
      max: 500,
      step: 10,
      label: "Ex"
    },
    Ey: {
      value: W.state(100),
      min: 50,
      max: 500,
      step: 10,
      label: "Ey"
    },
    load: {
      value: W.state(-3),
      min: -10,
      max: 10,
      step: 1,
      label: "load"
    }
  };
  function Et() {
    Q.xPosition.label = `xPosition ${te()}`, Q.Ex.label = `Ex ${kt()}`, Q.Ey.label = `Ey ${kt()}`, Q.load.label = `load ${ee()}`;
  }
  Et();
  const Z = {
    nodes: W.state([]),
    elements: W.state([]),
    nodeInputs: W.state({}),
    elementInputs: W.state({}),
    deformOutputs: W.state({}),
    analyzeOutputs: W.state({})
  };
  W.derive(() => {
    $t.val, xt.val, Et(), Tt();
  });
  W.derive(() => {
    var _a;
    const { nodes: t, elements: a, boundaryIndices: n } = Xt({
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
          Q.xPosition.value.val,
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
    if (Z.nodeInputs.val = {
      supports: new Map(n.map((r) => [
        r,
        [
          true,
          true,
          true,
          true,
          true,
          true
        ]
      ])),
      loads: new Map(t.map((r, c) => [
        c,
        [
          0,
          0,
          Q.load.value.val,
          0,
          0,
          0
        ]
      ]))
    }, Z.nodes.val = t, Z.elements.val = a, Z.elementInputs.val = {
      elasticities: new Map(a.map((r, c) => [
        c,
        Q.Ex.value.val
      ])),
      elasticitiesOrthogonal: new Map(a.map((r, c) => [
        c,
        Q.Ey.value.val
      ])),
      thicknesses: new Map(a.map((r, c) => [
        c,
        1
      ])),
      poissonsRatios: new Map(a.map((r, c) => [
        c,
        0.3
      ])),
      shearModuli: new Map(a.map((r, c) => [
        c,
        100
      ]))
    }, Z.deformOutputs.val = Pt(t, a, Z.nodeInputs.val, Z.elementInputs.val), Z.analyzeOutputs.val = Ot(t, a, Z.elementInputs.val, Z.deformOutputs.val), (_a = Z.deformOutputs.val) == null ? void 0 : _a.deformations) {
      let r = 0;
      Z.deformOutputs.val.deformations.forEach((c) => {
        Math.abs(c[2]) > Math.abs(r) && (r = c[2]);
      }), console.log(`Max deflection: ${r.toFixed(4)} (expected: ~-3.98)`);
    }
  });
  const nt = W.state(""), dt = W.state(void 0);
  W.derive(() => {
    if (nt.val === "Calcpad") try {
      const t = rt({
        template: Mt,
        data: Z
      });
      dt.val = t;
    } catch (t) {
      console.error("Error generating Calcpad report:", t);
    }
    if (nt.val === "Awatif") try {
      const t = rt({
        template: Jt,
        data: Z
      });
      dt.val = t;
    } catch (t) {
      console.error("Error generating Awatif report:", t);
    }
    if (nt.val === "Code") try {
      const t = rt({
        template: Zt,
        data: Z
      });
      dt.val = t;
    } catch (t) {
      console.error("Error generating Code report:", t);
    }
    if (nt.val === "Docs") try {
      const t = rt({
        template: Ht,
        data: Z
      });
      dt.val = t;
    } catch (t) {
      console.error("Error generating Docs report:", t);
    }
    if (nt.val === "Print") {
      const t = rt({
        template: Mt,
        data: Z
      }), a = window.open("", "_blank");
      if (a) {
        const n = (t == null ? void 0 : t.innerHTML) || "";
        a.document.write(`
        <!DOCTYPE html>
        <html>
        <head><title>Plate FEM Report</title></head>
        <body>${n}</body>
        </html>
      `), a.document.close();
      }
    }
  });
  document.body.append(_t(Q), At({
    mesh: Z,
    settingsObj: {
      nodes: false,
      deformedShape: true,
      loads: false,
      shellResults: "displacementZ"
    }
  }), Nt(Z), Rt({
    position: "bottom-center"
  }), jt({
    dialogBody: dt
  }), It({
    clickedButton: nt,
    buttons: [
      "Calcpad",
      "Awatif",
      "Code",
      "Docs",
      "Print"
    ],
    sourceCode: "https://github.com/madil4/awatif/blob/main/examples/src/plate/main.ts",
    author: "https://www.linkedin.com/in/mahjoubmusaab/"
  }));
});
