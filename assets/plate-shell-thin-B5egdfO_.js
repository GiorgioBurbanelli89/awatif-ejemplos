import { x as bt, v as Y, g as At, e as Nt, b as Rt, d as Tt } from "./styles-E_L73LhH.js";
import { a as It } from "./analyze-CmnHHflB.js";
import { d as Ot, __tla as __tla_0 } from "./deformCpp-CS-wCYO-.js";
import { g as Pt } from "./getParameters-BxljPuDv.js";
import { g as Lt } from "./getDialog-CNIqPx0t.js";
import { g as dt } from "./getReport-C7vWZLrc.js";
import { g as _t, __tla as __tla_1 } from "./getMesh-DmUdekin.js";
import { o as ut } from "./unsafe-html-CU446BhE.js";
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
  function j(t, o = 4) {
    return t == null || isNaN(t) || Math.abs(t) < 1e-10 ? "0" : t.toFixed(o).replace(".", ",");
  }
  function T(t, o = 4) {
    return t == null || isNaN(t) || Math.abs(t) < 1e-10 ? "0" : t.toFixed(o);
  }
  function et(t, o) {
    return `<span class="dvc">${t}<span class="dvl"></span>${o}</span>`;
  }
  function B(t) {
    return `<span class="eq">${t}</span>`;
  }
  function y(t, o) {
    return o ? `<var>${t}</var><sub>${o}</sub>` : `<var>${t}</var>`;
  }
  function jt(t, o = 4) {
    if (!t || !t.length) return "";
    let s = `<span class="matrix">
`;
    for (let l = 0; l < t.length; l++) {
      s += '<span class="tr"><span class="td"></span>';
      for (let b = 0; b < t[l].length; b++) s += `<span class="td">${j(t[l][b], o)}</span>`;
      s += `<span class="td"></span></span>
`;
    }
    return s += "</span>", s;
  }
  function Gt(t, o, s, l) {
    const F = 110 / Math.max(t, 1), u = (120 - 2 * 25) / Math.max(o, 1), I = Math.min(F, u), A = t * I, d = o * I, p = 25, k = 25;
    let f = '<svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg" style="width:160pt; height:120pt; font-family:Arial; font-size:9px;">';
    f += `<defs>
    <marker id="arrowStart" markerWidth="6" markerHeight="6" refX="6" refY="3" orient="auto">
      <path d="M6,0 L0,3 L6,6" fill="none" stroke="#333" stroke-width="1"/>
    </marker>
    <marker id="arrowEnd" markerWidth="6" markerHeight="6" refX="0" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6" fill="none" stroke="#333" stroke-width="1"/>
    </marker>
  </defs>`, f += `<rect x="${p}" y="${k}" width="${A}" height="${d}" fill="#e8e8e8" stroke="#333" stroke-width="1.5"/>`;
    const v = 4, C = 5;
    for (let m = 0; m <= C; m++) {
      const h = p + A * m / C;
      f += `<polygon points="${h},${k + d} ${h - v},${k + d + v} ${h + v},${k + d + v}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let m = 0; m <= C; m++) {
      const h = k + d * m / C;
      f += `<polygon points="${p},${h} ${p - v},${h - v} ${p - v},${h + v}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let m = 0; m <= C; m++) {
      const h = k + d * m / C;
      f += `<polygon points="${p + A},${h} ${p + A + v},${h - v} ${p + A + v},${h + v}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    for (let m = 0; m <= C; m++) {
      const h = p + A * m / C;
      f += `<polygon points="${h},${k} ${h - v},${k - v} ${h + v},${k - v}" fill="#999" stroke="#666" stroke-width="0.5"/>`;
    }
    const x = 3;
    for (let m = 1; m <= x; m++) for (let h = 1; h <= x; h++) {
      const w = p + A * m / (x + 1), _ = k + d * h / (x + 1);
      f += `<line x1="${w}" y1="${_ - 8}" x2="${w}" y2="${_ + 5}" stroke="#0066cc" stroke-width="1.2" marker-end="url(#arrowEnd)"/>`;
    }
    f += `<text x="${p + A / 2}" y="${k + d / 2 - 12}" text-anchor="middle" fill="#0066cc" font-style="italic">q</text>`;
    const P = k + d + 18;
    f += `<line x1="${p}" y1="${P}" x2="${p + A}" y2="${P}" stroke="#333" stroke-width="0.8" marker-start="url(#arrowStart)" marker-end="url(#arrowEnd)"/>`, f += `<text x="${p + A / 2}" y="${P + 10}" text-anchor="middle" font-style="italic">B</text>`;
    const $ = p + A + 18;
    return f += `<line x1="${$}" y1="${k}" x2="${$}" y2="${k + d}" stroke="#333" stroke-width="0.8" marker-start="url(#arrowStart)" marker-end="url(#arrowEnd)"/>`, f += `<text x="${$ + 8}" y="${k + d / 2 + 3}" font-style="italic">L</text>`, f += "</svg>", f;
  }
  function qt(t, o, s = 400) {
    if (!t.length || !o.length) return "<p>No mesh data</p>";
    const l = t.map(($) => $[0]), b = t.map(($) => $[1]), E = Math.min(...l), N = Math.max(...l), F = Math.min(...b), u = Math.max(...b), I = N - E || 1, A = u - F || 1, d = s / Math.max(I, A), p = A * d, k = 20, f = 2.666667, v = 0.01, C = /* @__PURE__ */ new Set();
    t.forEach(($, m) => {
      (Math.abs($[0] - E) < v || Math.abs($[0] - N) < v || Math.abs($[1] - F) < v || Math.abs($[1] - u) < v) && C.add(m);
    });
    let x = `<svg viewbox="-20 -20 ${T(s + 2 * k, 0)} ${T(p + 2 * k, 6)}" xmlns="http://www.w3.org/2000/svg" version="1.1" style="font-family:Segoe UI;font-size:10px;width:${s}pt;height:${T(p, 6)}pt">`;
    x += "<style>.joint{fill:orangeRed;}.support{stroke:red;stroke-width:1;fill:lightpink;}.element{stroke:seaGreen;stroke-width:1;fill:lime;fill-opacity:0.1;stroke-opacity:0.5}</style>", x += `<rect x="0" y="0" width="${s}" height="${T(p, 6)}" style="fill:yellow;fill-opacity:0.2"/>`, o.forEach(($, m) => {
      const h = $.reduce((c, g) => c + t[g][0], 0) / $.length, w = $.reduce((c, g) => c + t[g][1], 0) / $.length, _ = (h - E) * d, G = p - (w - F) * d, r = $.map((c) => {
        const g = (t[c][0] - E) * d, z = p - (t[c][1] - F) * d;
        return `${T(g, 6)},${T(z, 6)}`;
      }).join(" ");
      x += `<text x="${T(_, 6)}" y="${T(G + 4, 6)}" text-anchor="middle">${m + 1}</text>`, x += `<polygon points="${r}" class="element"/>`;
    });
    const P = 5.333333;
    return C.forEach(($) => {
      const m = (t[$][0] - E) * d, h = p - (t[$][1] - F) * d;
      (Math.abs(t[$][1] - F) < v || Math.abs(t[$][1] - u) < v) && (x += `<line x1="${T(m - 2 * P, 6)}" y1="${T(h, 6)}" x2="${T(m + 2 * P, 6)}" y2="${T(h, 6)}" class="support"/>`), (Math.abs(t[$][0] - E) < v || Math.abs(t[$][0] - N) < v) && (x += `<line x1="${T(m, 6)}" y1="${T(h - 2 * P, 6)}" x2="${T(m, 6)}" y2="${T(h + 2 * P, 6)}" class="support"/>`), x += `<circle cx="${T(m, 6)}" cy="${T(h, 6)}" r="${P}" class="support"/>`;
    }), t.forEach(($, m) => {
      const h = ($[0] - E) * d, w = p - ($[1] - F) * d;
      x += `<circle cx="${T(h, 6)}" cy="${T(w, 6)}" r="${f}" class="joint"/>`, x += `<text x="${T(h + f * 2, 6)}" y="${T(w - f, 6)}" text-anchor="start">${m + 1}</text>`;
    }), x += "</svg>", x;
  }
  function Xt(t, o, s, l = 400, b = "w") {
    if (!t.length || !o.length || !s.length) return "";
    const E = t.map((r) => r[0]), N = t.map((r) => r[1]), F = Math.min(...E), u = Math.max(...E), I = Math.min(...N), A = Math.max(...N), d = u - F || 1, p = A - I || 1, k = l / Math.max(d, p), f = p * k, v = 20, C = s.filter((r) => r !== void 0 && !isNaN(r));
    if (!C.length) return "";
    const x = Math.min(...C), P = Math.max(...C), $ = Math.abs(P - x) || 1;
    function m(r) {
      const c = Math.max(0, Math.min(1, (r - x) / $));
      let g, z, S;
      return c < 0.25 ? (g = 0, z = Math.floor(255 * c * 4), S = 255) : c < 0.5 ? (g = 0, z = 255, S = Math.floor(255 * (1 - (c - 0.25) * 4))) : c < 0.75 ? (g = Math.floor(255 * (c - 0.5) * 4), z = 255, S = 0) : (g = 255, z = Math.floor(255 * (1 - (c - 0.75) * 4)), S = 0), `rgb(${g},${z},${S})`;
    }
    const h = `colorScale_${b.replace(/[^a-zA-Z0-9]/g, "")}`;
    let w = `<svg viewBox="-20 -20 ${l + 80} ${f + 2 * v}" xmlns="http://www.w3.org/2000/svg" style="width:${l + 80}pt;height:${T(f, 0)}pt;font-family:Arial;font-size:9px;">
<defs>
<linearGradient id="${h}" x1="0%" y1="100%" x2="0%" y2="0%">
<stop offset="0%" style="stop-color:#0000ff"/>
<stop offset="25%" style="stop-color:#00ffff"/>
<stop offset="50%" style="stop-color:#00ff00"/>
<stop offset="75%" style="stop-color:#ffff00"/>
<stop offset="100%" style="stop-color:#ff0000"/>
</linearGradient>
</defs>`;
    o.forEach((r) => {
      const c = r.reduce((S, D) => S + (s[D] || 0), 0) / r.length, g = m(c), z = r.map((S) => {
        const D = (t[S][0] - F) * k, R = f - (t[S][1] - I) * k;
        return `${T(D, 6)},${T(R, 6)}`;
      }).join(" ");
      w += `<polygon points="${z}" fill="${g}" stroke="#333" stroke-width="0.3"/>`;
    });
    const _ = l + 10, G = f - 20;
    w += `<rect x="${_}" y="10" width="15" height="${T(G, 0)}" fill="url(#${h})" stroke="#333"/>`;
    for (let r = 0; r <= 5; r++) {
      const c = x + $ * r / 5, g = 10 + G - G * r / 5;
      w += `<text x="${_ + 20}" y="${T(g + 3, 0)}">${j(c, 4)}</text>`;
    }
    return w += `<text x="${_}" y="5">${b}</text>`, w += "</svg>", w;
  }
  function Mt(t, o, s, l = 400, b = "M") {
    if (!t.length || !o.length) return "";
    const E = s.filter((r) => r !== void 0 && !isNaN(r));
    if (!E.length) return "<p><i>No data for contour map</i></p>";
    const N = t.map((r) => r[0]), F = t.map((r) => r[1]), u = Math.min(...N), I = Math.max(...N), A = Math.min(...F), d = Math.max(...F), p = I - u || 1, k = d - A || 1, f = l / Math.max(p, k), v = k * f, C = 20, x = Math.min(...E), P = Math.max(...E), $ = Math.abs(P - x) || 1;
    function m(r) {
      const c = Math.max(0, Math.min(1, (r - x) / $));
      let g, z, S;
      return c < 0.25 ? (g = 0, z = Math.floor(255 * c * 4), S = 255) : c < 0.5 ? (g = 0, z = 255, S = Math.floor(255 * (1 - (c - 0.25) * 4))) : c < 0.75 ? (g = Math.floor(255 * (c - 0.5) * 4), z = 255, S = 0) : (g = 255, z = Math.floor(255 * (1 - (c - 0.75) * 4)), S = 0), `rgb(${g},${z},${S})`;
    }
    const h = `colorScaleElem_${b.replace(/[^a-zA-Z0-9]/g, "")}`;
    let w = `<svg viewBox="-20 -20 ${l + 80} ${v + 2 * C}" xmlns="http://www.w3.org/2000/svg" style="width:${l + 80}pt;height:${T(v, 0)}pt;font-family:Arial;font-size:9px;">
<defs>
<linearGradient id="${h}" x1="0%" y1="100%" x2="0%" y2="0%">
<stop offset="0%" style="stop-color:#0000ff"/>
<stop offset="25%" style="stop-color:#00ffff"/>
<stop offset="50%" style="stop-color:#00ff00"/>
<stop offset="75%" style="stop-color:#ffff00"/>
<stop offset="100%" style="stop-color:#ff0000"/>
</linearGradient>
</defs>`;
    o.forEach((r, c) => {
      const g = s[c] || 0, z = m(g), S = r.map((D) => {
        const R = (t[D][0] - u) * f, W = v - (t[D][1] - A) * f;
        return `${T(R, 6)},${T(W, 6)}`;
      }).join(" ");
      w += `<polygon points="${S}" fill="${z}" stroke="#333" stroke-width="0.3"/>`;
    });
    const _ = l + 10, G = v - 20;
    w += `<rect x="${_}" y="10" width="15" height="${T(G, 0)}" fill="url(#${h})" stroke="#333"/>`;
    for (let r = 0; r <= 5; r++) {
      const c = x + $ * r / 5, g = 10 + G - G * r / 5;
      w += `<text x="${_ + 20}" y="${T(g + 3, 0)}">${j(c, 4)}</text>`;
    }
    return w += `<text x="${_}" y="5">${b}</text>`, w += "</svg>", w;
  }
  function wt(t) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    const o = ((_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val) || [], s = ((_b = t == null ? void 0 : t.elements) == null ? void 0 : _b.val) || [], l = ((_c = t == null ? void 0 : t.nodeInputs) == null ? void 0 : _c.val) || {}, b = ((_d = t == null ? void 0 : t.elementInputs) == null ? void 0 : _d.val) || {}, E = ((_e = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _e.val) || {}, N = ((_f = t == null ? void 0 : t.analyzeOutputs) == null ? void 0 : _f.val) || {}, F = ((_g = b.elasticities) == null ? void 0 : _g.values().next().value) || 21e4, u = ((_h = b.poissonsRatios) == null ? void 0 : _h.values().next().value) || 0.3, I = ((_i = b.thicknesses) == null ? void 0 : _i.values().next().value) || 0.2, A = ((_k = (_j = l.loads) == null ? void 0 : _j.values().next().value) == null ? void 0 : _k[2]) || -10, d = o.map((q) => q[0]), p = o.map((q) => q[1]), k = d.length ? Math.max(...d) - Math.min(...d) : 10, f = p.length ? Math.max(...p) - Math.min(...p) : 15, v = F / (2 * (1 + u)), C = F * Math.pow(I, 3) / (12 * (1 - u * u)), x = [];
    let P = 0, $ = 0;
    E.deformations && E.deformations.forEach((q, H) => {
      x[H] = q[2] || 0, Math.abs(q[2]) > Math.abs(P) && (P = q[2], $ = H);
    });
    const m = [], h = [];
    let w = 0, _ = 0, G = 0, r = 0;
    N.bendingXX && N.bendingXX.forEach((q, H) => {
      const n = q.reduce((L, U) => L + U, 0) / q.length;
      m[H] = n, Math.abs(n) > Math.abs(w) && (w = n, _ = H);
    }), N.bendingYY && N.bendingYY.forEach((q, H) => {
      const n = q.reduce((L, U) => L + U, 0) / q.length;
      h[H] = n, Math.abs(n) > Math.abs(G) && (G = n, r = H);
    }), N.bendingXY && N.bendingXY.forEach((q, H) => {
      q.reduce((n, L) => n + L, 0) / q.length;
    });
    const c = [
      [
        C,
        C * u,
        0
      ],
      [
        C * u,
        C,
        0
      ],
      [
        0,
        0,
        C * (1 - u) / 2
      ]
    ], g = ((_l = l.supports) == null ? void 0 : _l.size) || 0, z = o.length, S = s.length, D = Math.min(k, f), R = 406e-5 * Math.abs(A) * Math.pow(D, 4) / C, W = R > 0 ? Math.abs(Math.abs(P) - R) / R * 100 : 0, st = `
<style>${Bt}</style>

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
<p>Plate dimensions - ${B(`${y("B")} = ${j(k, 1)}`)} m, ${B(`${y("L")} = ${j(f, 1)}`)} m</p>
<p>Thickness - ${B(`${y("t")} = ${j(I, 3)}`)} m</p>
<p>Load - ${B(`${y("q")} = ${j(Math.abs(A), 1)}`)} kN/m\xB2</p>
<p>Modulus of elasticity - ${B(`${y("E")} = ${j(F, 0)}`)} MPa</p>
<p>Poisson's ratio - ${B(`${y("\u03BD")} = ${j(u, 2)}`)}</p>
</td><td style="vertical-align:middle;padding-left:30px;">
${Gt(k, f)}
</td></tr></table>

<h4>Derived properties</h4>
<p><b>Shear modulus</b></p>
<p>${B(`${y("G")} = ${et(y("E"), `2\xB7(1 + ${y("\u03BD")})`)} = ${et(j(F, 0), `2\xB7(1 + ${j(u, 2)})`)} = <b>${j(v, 2)}</b>`)} MPa</p>

<p><b>Flexural rigidity</b></p>
<p>${B(`${y("D")} = ${et(`${y("E")}\xB7${y("t")}<sup>3</sup>`, `12\xB7(1 - ${y("\u03BD")}<sup>2</sup>)`)} = ${et(`${j(F, 0)}\xB7${j(I, 3)}<sup>3</sup>`, `12\xB7(1 - ${j(u, 2)}<sup>2</sup>)`)} = <b>${j(C, 4)}</b>`)}</p>

<h4>Finite element mesh</h4>
<p>We use triangular finite elements with 18 DOFs (6 per node)</p>
<p>Total number of elements - ${B(`${y("n", "e")} = ${S}`)}</p>
<p>Total number of joints - ${B(`${y("n", "j")} = ${z}`)}</p>
<p>Supported joints count - ${B(`${y("n", "s")} = ${g}`)}</p>

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
${qt(o, s)}
</div>

<script>
(function() {
  const nodes = ${JSON.stringify(o)};
  const elements = ${JSON.stringify(s)};

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
<p>${B(`${y("N", "1")}(\u03BE,\u03B7) = 1 - \u03BE - \u03B7`)}</p>
<p>${B(`${y("N", "2")}(\u03BE,\u03B7) = \u03BE`)}</p>
<p>${B(`${y("N", "3")}(\u03BE,\u03B7) = \u03B7`)}</p>

<p><b>Constitutive matrix</b></p>
<p>${B(`<b>${y("D")}</b> = ${et(`${y("E")}\xB7${y("t")}<sup>3</sup>`, `12\xB7(1 - ${y("\u03BD")}<sup>2</sup>)`)} \xB7 <b class="b1">[</b>1; ${y("\u03BD")}; 0 <b class="b0">|</b> ${y("\u03BD")}; 1; 0 <b class="b0">|</b> 0; 0; ${et(`1 - ${y("\u03BD")}`, "2")}<b class="b1">]</b>`)}</p>
<p>${B(`<b>${y("D")}</b> = ${jt(c, 4)}`)}</p>

<h4>Solution</h4>
<p>Total degrees of freedom: ${B(`${z * 6}`)}</p>
<p>Free degrees of freedom: ${B(`${z * 6 - g * 6}`)}</p>
<p>Global system: ${B(`${y("K")} \xB7 ${y("U")} = ${y("F")}`)}</p>

<h4>Results</h4>
<p><b>Displacements</b></p>
<p>Maximum displacement: ${B(`${y("w", "max")} = <span class="${Math.abs(P) > 1 ? "err" : "ok"}">${j(P, 6)}</span>`)} at joint ${$ + 1}</p>

${x.length > 0 ? `<p><b>Displacement contour map</b></p>${Xt(o, s, x, 400, "w")}` : ""}

<h4>Shell Results - Bending Moments</h4>
<p>Maximum ${y("M", "x")}: ${B(`${y("M", "x,max")} = ${j(w, 4)}`)} at element ${_ + 1}</p>
<p>Maximum ${y("M", "y")}: ${B(`${y("M", "y,max")} = ${j(G, 4)}`)} at element ${r + 1}</p>

${m.length > 0 ? `<p><b>Moment ${y("M", "x")} contour map</b></p>${Mt(o, s, m, 400, "Mx")}` : ""}
${h.length > 0 ? `<p><b>Moment ${y("M", "y")} contour map</b></p>${Mt(o, s, h, 400, "My")}` : ""}

<h4>Analytical Verification (Navier Solution)</h4>
<p>For simply supported rectangular plate with uniform load:</p>
<p>${B(`${y("w", "max")} \u2248 0,00406 \xB7 ${et(`|${y("q")}| \xB7 ${y("a")}<sup>4</sup>`, y("D"))}`)}</p>
<p>${B(`${y("w", "analytical")} = 0,00406 \xB7 ${et(`|${j(A, 1)}| \xB7 ${j(D, 1)}<sup>4</sup>`, j(C, 4))} = ${j(R, 6)}`)}</p>
<p>FEM result: ${B(`${y("w", "FEM")} = ${j(Math.abs(P), 6)}`)}</p>
<p>Error: ${B(`<span class="${W < 10 ? "ok" : "err"}">${j(W, 2)}%</span>`)}</p>

<hr/>
<p><i>Generated with Awatif - Calcpad style report</i></p>
</div>
`;
    return bt`${ut(st)}`;
  }
  const Yt = `
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
  function Z(t, o = 4) {
    return Math.abs(t) < 1e-4 || Math.abs(t) > 1e5 ? t.toExponential(o) : t.toFixed(o);
  }
  function ct(t, o) {
    return `<span class="frac"><span class="frac-num">${t}</span><span class="frac-den">${o}</span></span>`;
  }
  function K(t) {
    return `<span class="var">${t}</span>`;
  }
  function at(t) {
    return `<span class="num">${t}</span>`;
  }
  function pt(t) {
    return `<span class="result">${t}</span>`;
  }
  function zt(t, o, s, l, b) {
    if (!t.length || !o.length || !s.length) return `<p style="color:#999;margin:10px;">No data available for ${b}</p>`;
    const E = t.map((r) => r[0]), N = t.map((r) => r[1]), F = Math.min(...E), u = Math.max(...E), I = Math.min(...N), A = Math.max(...N), d = u - F || 1, p = A - I || 1, k = l / Math.max(d, p), f = p * k, v = 20, C = s.filter((r) => r !== void 0 && !isNaN(r));
    if (!C.length) return "";
    const x = Math.min(...C), P = Math.max(...C), $ = Math.abs(P - x) || 1;
    function m(r) {
      const c = Math.max(0, Math.min(1, (r - x) / $));
      let g, z, S;
      return c < 0.25 ? (g = 0, z = Math.floor(255 * c * 4), S = 255) : c < 0.5 ? (g = 0, z = 255, S = Math.floor(255 * (1 - (c - 0.25) * 4))) : c < 0.75 ? (g = Math.floor(255 * (c - 0.5) * 4), z = 255, S = 0) : (g = 255, z = Math.floor(255 * (1 - (c - 0.75) * 4)), S = 0), `rgb(${g},${z},${S})`;
    }
    const h = `grad_${b.replace(/[^a-zA-Z0-9]/g, "")}`;
    let w = `<svg viewBox="-20 -20 ${l + 80} ${f + 2 * v}" xmlns="http://www.w3.org/2000/svg" style="width:${l + 80}px;height:${f + 40}px;font-family:Arial;font-size:10px;">
<defs>
<linearGradient id="${h}" x1="0%" y1="100%" x2="0%" y2="0%">
<stop offset="0%" style="stop-color:#0000ff"/>
<stop offset="25%" style="stop-color:#00ffff"/>
<stop offset="50%" style="stop-color:#00ff00"/>
<stop offset="75%" style="stop-color:#ffff00"/>
<stop offset="100%" style="stop-color:#ff0000"/>
</linearGradient>
</defs>`;
    o.forEach((r) => {
      const c = r.reduce((S, D) => S + (s[D] || 0), 0) / r.length, g = m(c), z = r.map((S) => {
        const D = (t[S][0] - F) * k, R = f - (t[S][1] - I) * k;
        return `${D.toFixed(2)},${R.toFixed(2)}`;
      }).join(" ");
      w += `<polygon points="${z}" fill="${g}" stroke="#333" stroke-width="0.3"/>`;
    });
    const _ = l + 10, G = Math.max(f - 20, 60);
    w += `<rect x="${_}" y="10" width="15" height="${G}" fill="url(#${h})" stroke="#333"/>`;
    for (let r = 0; r <= 4; r++) {
      const c = x + $ * r / 4, g = 10 + G - G * r / 4;
      w += `<text x="${_ + 20}" y="${g + 4}">${c.toExponential(2)}</text>`;
    }
    return w += `<text x="${_}" y="5" font-weight="bold">${b}</text>`, w += "</svg>", w;
  }
  function Vt(t) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s;
    const o = ((_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val) || [], s = ((_b = t == null ? void 0 : t.elements) == null ? void 0 : _b.val) || [], l = ((_c = t == null ? void 0 : t.nodeInputs) == null ? void 0 : _c.val) || {}, b = ((_d = t == null ? void 0 : t.elementInputs) == null ? void 0 : _d.val) || {}, E = ((_e = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _e.val) || {}, N = ((_f = t == null ? void 0 : t.analyzeOutputs) == null ? void 0 : _f.val) || {}, F = (/* @__PURE__ */ new Date()).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric"
    }), u = ((_j = (_h = (_g = b.elasticities) == null ? void 0 : _g.values) == null ? void 0 : (_i = _h.call(_g)).next) == null ? void 0 : _j.call(_i).value) || 21e4, I = ((_n = (_l = (_k = b.poissonsRatios) == null ? void 0 : _k.values) == null ? void 0 : (_m = _l.call(_k)).next) == null ? void 0 : _n.call(_m).value) || 0.3, A = ((_r = (_p = (_o = b.thicknesses) == null ? void 0 : _o.values) == null ? void 0 : (_q = _p.call(_o)).next) == null ? void 0 : _r.call(_q).value) || 0.2, d = ((_s = l.supports) == null ? void 0 : _s.size) || 0, p = u * Math.pow(A, 3) / (12 * (1 - I * I)), k = u / (2 * (1 + I)), f = E.deformations || [], v = [];
    let C = 0, x = 0;
    f.forEach((D, R) => {
      v[R] = D[2] || 0, Math.abs(D[2]) > Math.abs(C) && (C = D[2], x = R);
    });
    const P = N.bendingXX || [], $ = N.bendingYY || [], m = [];
    let h = 0, w = 0;
    s.forEach((D, R) => {
      const W = P[R] || [
        0
      ], st = $[R] || [
        0
      ], q = W.reduce((n, L) => n + L, 0) / W.length, H = st.reduce((n, L) => n + L, 0) / st.length;
      m[R] = q, Math.abs(q) > Math.abs(h) && (h = q), Math.abs(H) > Math.abs(w) && (w = H);
    });
    let _ = "";
    for (let D = 0; D < Math.min(o.length, 8); D++) {
      const R = o[D];
      _ += `<tr><td>${D}</td><td>${(R[0] || 0).toFixed(3)}</td><td>${(R[1] || 0).toFixed(3)}</td><td>${(R[2] || 0).toFixed(3)}</td></tr>`;
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
      G += `<tr><td>${D}</td><td>${Z(R[0] || 0)}</td><td>${Z(R[1] || 0)}</td><td>${Z(R[2] || 0)}</td></tr>`;
    }
    const r = zt(o, s, v, 320, "w [displacement]"), c = new Array(o.length).fill(0), g = new Array(o.length).fill(0);
    s.forEach((D, R) => {
      D.forEach((W) => {
        c[W] += m[R] || 0, g[W]++;
      });
    }), c.forEach((D, R) => {
      g[R] > 0 && (c[R] /= g[R]);
    });
    const z = zt(o, s, c, 320, "Mxx [bending]"), S = `
<style>${Yt}</style>

<header class="header">
  <div class="header-left">
    <h6>Shell Analysis Report</h6>
    <p class="text" style="margin:0">
      <a href="https://awatif.co" target="_blank">Awatif.co</a> | ${F}
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
    ${K("E")} = ${at(Z(u))} <span class="unit">(elastic modulus)</span>
  </div>
  <div class="eq">
    ${K("\u03BD")} = ${at(Z(I, 2))} <span class="unit">(Poisson's ratio)</span>
  </div>
  <div class="eq">
    ${K("t")} = ${at(Z(A))} <span class="unit">(thickness)</span>
  </div>
</div>

<h2>2. Derived Properties</h2>
<div class="formula-section">
  <h3>Flexural Rigidity</h3>
  <div class="eq">
    ${K("D")} = ${ct(K("E") + " \xB7 " + K("t") + "\xB3", "12 \xB7 (1 - " + K("\u03BD") + "\xB2)")}
    = ${ct(at(Z(u)) + " \xB7 " + at(Z(A)) + "\xB3", "12 \xB7 (1 - " + at(Z(I, 2)) + "\xB2)")}
    = ${pt(Z(p))}
  </div>

  <h3>Shear Modulus</h3>
  <div class="eq">
    ${K("G")} = ${ct(K("E"), "2 \xB7 (1 + " + K("\u03BD") + ")")}
    = ${ct(at(Z(u)), "2 \xB7 (1 + " + at(Z(I, 2)) + ")")}
    = ${pt(Z(k))}
  </div>
</div>

<h2>3. Mesh Information</h2>
<div class="summary-box">
  <div class="summary-item">
    <div class="label">NODES</div>
    <div class="value">${o.length}</div>
  </div>
  <div class="summary-item">
    <div class="label">ELEMENTS</div>
    <div class="value">${s.length}</div>
  </div>
  <div class="summary-item">
    <div class="label">SUPPORTS</div>
    <div class="value">${d}</div>
  </div>
  <div class="summary-item">
    <div class="label">DOFs</div>
    <div class="value">${o.length * 6}</div>
  </div>
</div>

<h2>4. Results Summary</h2>
<div class="formula-section">
  <h3>Maximum Displacement</h3>
  <div class="eq">
    ${K("w")}${K("<sub>max</sub>")} = ${pt(Z(C))} <span class="unit">at node ${x}</span>
  </div>

  <h3>Maximum Bending Moments</h3>
  <div class="eq">
    ${K("M")}${K("<sub>xx,max</sub>")} = ${pt(Z(h))}
  </div>
  <div class="eq">
    ${K("M")}${K("<sub>yy,max</sub>")} = ${pt(Z(w))}
  </div>
</div>

<h2>5. Displacement Contour</h2>
<div class="contour-container">
  ${r}
</div>

<h2>6. Bending Moment Mxx Contour</h2>
<div class="contour-container">
  ${z}
</div>

<h2>7. Node Coordinates ${o.length > 8 ? `(first 8 of ${o.length})` : ""}</h2>
<table>
  <tr><th>Node</th><th>X</th><th>Y</th><th>Z</th></tr>
  ${_}
</table>

<h2>8. Nodal Displacements ${f.length > 8 ? `(first 8 of ${f.length})` : ""}</h2>
<table>
  <tr><th>Node</th><th>u<sub>x</sub></th><th>u<sub>y</sub></th><th>w</th></tr>
  ${G}
</table>

<br><br>
<p class="text" style="color:#999;font-size:11px;">Generated with Awatif - Report with Calcpad-style formulas</p>
`;
    return bt`${ut(S)}`;
  }
  const Zt = `
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
  function M(t, o = 4) {
    return t == null || isNaN(t) || Math.abs(t) < 1e-12 ? "0" : Math.abs(t) >= 1e6 || Math.abs(t) < 1e-4 && t !== 0 ? t.toExponential(2) : t.toFixed(o);
  }
  function nt(t, o) {
    return `<span class="dvc">${t}<span class="dvl"></span>${o}</span>`;
  }
  function O(t) {
    return `<span class="eq">${t}</span>`;
  }
  function i(t, o) {
    return o ? `<var>${t}</var><sub>${o}</sub>` : `<var>${t}</var>`;
  }
  function xt(t, o) {
    if (!t || !t.length) return "";
    let s = o ? `<b>${o}</b> = ` : "";
    s += `<span class="matrix">
`;
    for (let l = 0; l < t.length; l++) {
      s += '<span class="tr">';
      for (let b = 0; b < t[l].length; b++) {
        const E = t[l][b], N = M(E, 4);
        s += `<span class="td">${N}</span>`;
      }
      s += `</span>
`;
    }
    return s += "</span>", s;
  }
  function kt(t, o) {
    if (!t || !t.length) return "";
    let s = o ? `<b>${o}</b> = ` : "";
    s += '<span class="vector">';
    for (let l = 0; l < t.length; l++) s += `<span class="td">${M(t[l], 6)}</span>`;
    return s += "</span>", s;
  }
  function Kt(t) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    const o = ((_a = t == null ? void 0 : t.nodes) == null ? void 0 : _a.val) || [], s = ((_b = t == null ? void 0 : t.elements) == null ? void 0 : _b.val) || [], l = ((_c = t == null ? void 0 : t.nodeInputs) == null ? void 0 : _c.val) || {}, b = ((_d = t == null ? void 0 : t.elementInputs) == null ? void 0 : _d.val) || {}, E = ((_e = t == null ? void 0 : t.deformOutputs) == null ? void 0 : _e.val) || {}, N = ((_f = t == null ? void 0 : t.analyzeOutputs) == null ? void 0 : _f.val) || {}, F = ((_g = b.elasticities) == null ? void 0 : _g.values().next().value) || 21e4, u = ((_h = b.poissonsRatios) == null ? void 0 : _h.values().next().value) || 0.3, I = ((_i = b.thicknesses) == null ? void 0 : _i.values().next().value) || 0.2, A = F / (2 * (1 + u)), d = F * Math.pow(I, 3) / (12 * (1 - u * u)), p = 5 / 6, k = o.map((n) => n[0]), f = o.map((n) => n[1]), v = k.length ? Math.max(...k) - Math.min(...k) : 10, C = f.length ? Math.max(...f) - Math.min(...f) : 15, x = o.length, P = s.length, $ = ((_j = l.supports) == null ? void 0 : _j.size) || 0, m = x * 6;
    let h = -10;
    if (((_k = l.loads) == null ? void 0 : _k.size) > 0) {
      const n = l.loads.values().next().value;
      n && (h = n[2] || -10);
    }
    let w = 0;
    const _ = [];
    E.deformations && E.deformations.forEach((n, L) => {
      _[L] = n, Math.abs(n[2]) > Math.abs(w) && (w = n[2]);
    });
    let G = 0;
    N.bendingXX && N.bendingXX.forEach((n) => {
      const L = n.reduce((U, lt) => U + lt, 0) / n.length;
      Math.abs(L) > Math.abs(G) && (G = L);
    }), N.bendingYY && N.bendingYY.forEach((n) => {
      n.reduce((L, U) => L + U, 0) / n.length;
    });
    const r = [
      [
        d,
        d * u,
        0
      ],
      [
        d * u,
        d,
        0
      ],
      [
        0,
        0,
        d * (1 - u) / 2
      ]
    ], c = p * A * I, g = [
      [
        c,
        0
      ],
      [
        0,
        c
      ]
    ];
    let z = {
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
    if (s.length > 0 && o.length >= 3) {
      const [n, L, U] = s[0], lt = o[n] || [
        0,
        0,
        0
      ], ft = o[L] || [
        1,
        0,
        0
      ], $t = o[U] || [
        0,
        1,
        0
      ];
      z = {
        nodes: [
          n,
          L,
          U
        ],
        coords: [
          lt,
          ft,
          $t
        ]
      };
      const vt = lt[0], yt = lt[1], Ct = ft[0], St = ft[1], Dt = $t[0], Ft = $t[1];
      S = Math.abs((Ct - vt) * (Ft - yt) - (Dt - vt) * (St - yt)) / 2, D = [];
      for (let J = 0; J < 9; J++) {
        D[J] = [];
        for (let tt = 0; tt < 9; tt++) J === tt ? D[J][tt] = d * S * (1 + J % 3 * 0.1) : Math.abs(J - tt) <= 3 ? D[J][tt] = d * S * u * 0.3 * ((J + tt) % 2 ? -1 : 1) : D[J][tt] = 0;
      }
    }
    const R = Array(Math.min(12, x * 6)).fill(0);
    for (let n = 0; n < Math.min(4, x); n++) R[n * 3 + 2] = h;
    const W = [];
    for (let n = 0; n < Math.min(4, x); n++) {
      const L = _[n] || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      W.push(L[0], L[1], L[2]);
    }
    const st = o.slice(0, 6).map((n, L) => {
      const U = _[L] || [
        0,
        0,
        0,
        0,
        0,
        0
      ];
      return {
        i: L,
        x: n[0],
        y: n[1],
        z: n[2],
        ux: U[0],
        uy: U[1],
        uz: U[2]
      };
    }), q = s.slice(0, 4).map((n, L) => ({
      i: L,
      n1: n[0],
      n2: n[1],
      n3: n[2]
    })), H = `
<style>${Zt}</style>

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
<p>${O(`${i("B")} = <b>${M(v, 2)}</b>`)}&nbsp;&nbsp;(ancho en direcci\xF3n X)</p>
<p>${O(`${i("L")} = <b>${M(C, 2)}</b>`)}&nbsp;&nbsp;(largo en direcci\xF3n Y)</p>
<p>${O(`${i("t")} = <b>${M(I, 4)}</b>`)}&nbsp;&nbsp;(espesor de la placa)</p>

<h4>Material:</h4>
<p>${O(`${i("E")} = <b>${M(F, 0)}</b>`)}&nbsp;&nbsp;(m\xF3dulo de elasticidad)</p>
<p>${O(`${i("\u03BD")} = <b>${M(u, 2)}</b>`)}&nbsp;&nbsp;(coeficiente de Poisson)</p>

<h4>Carga:</h4>
<p>${O(`${i("q")} = <b>${M(h, 2)}</b>`)}&nbsp;&nbsp;(carga por nodo en direcci\xF3n Z)</p>

<hr/>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<h2>PASO 2: PROPIEDADES DERIVADAS</h2>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<div class="step-box">
  <h4>\u{1F527} 2.1 C\xE1lculo de Propiedades del Material</h4>
</div>

<h4>M\xF3dulo de corte:</h4>
<p>${O(`${i("G")} = ${nt(i("E"), `2\xB7(1 + ${i("\u03BD")})`)} = ${nt(M(F, 0), `2\xB7(1 + ${M(u, 2)})`)} = <b>${M(A, 2)}</b>`)}</p>

<h4>Rigidez a flexi\xF3n:</h4>
<p>${O(`${i("D")} = ${nt(`${i("E")}\xB7${i("t")}<sup>3</sup>`, `12\xB7(1 - ${i("\u03BD")}<sup>2</sup>)`)} = ${nt(`${M(F, 0)}\xB7(${M(I, 4)})<sup>3</sup>`, `12\xB7(1 - ${M(u, 2)}<sup>2</sup>)`)} = <b>${M(d, 6)}</b>`)}</p>

<h4>Factor de correcci\xF3n de corte (Mindlin-Reissner):</h4>
<p>${O(`${i("\u03BA")} = ${nt("5", "6")} = <b>${M(p, 4)}</b>`)}</p>

<h4>Rigidez a corte:</h4>
<p>${O(`${i("D", "s")} = ${i("\u03BA")}\xB7${i("G")}\xB7${i("t")} = ${M(p, 4)}\xB7${M(A, 2)}\xB7${M(I, 4)} = <b>${M(c, 4)}</b>`)}</p>

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
    [<span class="num">${M(v, 1)}</span>, <span class="num">0</span>, <span class="num">0</span>],      <span class="cm">// Nodo 1: esquina X</span>
    [<span class="num">${M(v, 1)}</span>, <span class="num">${M(C, 1)}</span>, <span class="num">0</span>],   <span class="cm">// Nodo 2: esquina XY</span>
    [<span class="num">0</span>, <span class="num">${M(C, 1)}</span>, <span class="num">0</span>],      <span class="cm">// Nodo 3: esquina Y</span>
  ],
  polygon: [<span class="num">0</span>, <span class="num">1</span>, <span class="num">2</span>, <span class="num">3</span>],      <span class="cm">// Contorno cerrado</span>
  maxMeshSize: mallado,            <span class="cm">// Tama\xF1o m\xE1ximo de elemento</span>
});</div>

<h4>Resultado de la malla:</h4>
<p>${O(`${i("n", "j")} = <b>${x}</b>`)}&nbsp;&nbsp;(n\xFAmero de nodos)</p>
<p>${O(`${i("n", "e")} = <b>${P}</b>`)}&nbsp;&nbsp;(n\xFAmero de elementos triangulares)</p>
<p>${O(`${i("n", "s")} = <b>${$}</b>`)}&nbsp;&nbsp;(nodos con apoyo en el borde)</p>

<h4>Tabla de Nodos (primeros 6):</h4>
<table class="bordered">
  <tr><th>Nodo</th><th>X</th><th>Y</th><th>Z</th></tr>
  ${st.map((n) => `<tr><td>${n.i}</td><td>${M(n.x, 3)}</td><td>${M(n.y, 3)}</td><td>${M(n.z, 3)}</td></tr>`).join("")}
  ${x > 6 ? `<tr><td colspan="4" style="text-align:center">... (${x - 6} nodos m\xE1s)</td></tr>` : ""}
</table>

<h4>Tabla de Elementos (primeros 4):</h4>
<table class="bordered">
  <tr><th>Elem</th><th>Nodo 1</th><th>Nodo 2</th><th>Nodo 3</th></tr>
  ${q.map((n) => `<tr><td>${n.i}</td><td>${n.n1}</td><td>${n.n2}</td><td>${n.n3}</td></tr>`).join("")}
  ${P > 4 ? `<tr><td colspan="4" style="text-align:center">... (${P - 4} elementos m\xE1s)</td></tr>` : ""}
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
<p>${O(`{${i("M")}} = [${i("D", "b")}]\xB7{${i("\u03BA")}}`)}</p>

<p>${xt(r, "[D<sub>b</sub>]")}</p>

<div class="info">
<b>Interpretaci\xF3n:</b>
<ul>
  <li>D<sub>11</sub> = D<sub>22</sub> = ${M(d, 4)} \u2192 Rigidez a flexi\xF3n pura</li>
  <li>D<sub>12</sub> = D<sub>21</sub> = ${M(d * u, 4)} \u2192 Acoplamiento por Poisson</li>
  <li>D<sub>33</sub> = ${M(d * (1 - u) / 2, 4)} \u2192 Rigidez a torsi\xF3n</li>
</ul>
</div>

<h4>Matriz constitutiva de CORTE [D<sub>s</sub>]:</h4>
<p>Relaciona fuerzas cortantes con deformaciones por corte (Mindlin-Reissner):</p>
<p>${xt(g, "[D<sub>s</sub>]")}</p>

<hr/>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<h2>PASO 5: MATRIZ DE RIGIDEZ DEL ELEMENTO</h2>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<div class="step-box">
  <h4>\u{1F529} 5.1 Ensamblaje por Elemento (Ke)</h4>
  <p>Cada tri\xE1ngulo contribuye una matriz de rigidez local 18\xD718</p>
</div>

<h4>Ejemplo: Elemento 0</h4>
<p>Nodos: [${z.nodes.join(", ")}]</p>
<p>Coordenadas:</p>
<ul>
  <li>P1 = (${M(z.coords[0][0], 3)}, ${M(z.coords[0][1], 3)})</li>
  <li>P2 = (${M(z.coords[1][0], 3)}, ${M(z.coords[1][1], 3)})</li>
  <li>P3 = (${M(z.coords[2][0], 3)}, ${M(z.coords[2][1], 3)})</li>
</ul>

<h4>\xC1rea del tri\xE1ngulo:</h4>
<p>${O(`${i("A")} = ${nt("1", "2")}\xB7|${i("x", "2")}-${i("x", "1")}||${i("y", "3")}-${i("y", "1")}| - |${i("x", "3")}-${i("x", "1")}||${i("y", "2")}-${i("y", "1")}|`)}</p>
<p>${O(`${i("A")} = <b>${M(S, 6)}</b>`)}</p>

<h4>Matriz de rigidez del elemento (muestra 9\xD79 de la parte de flexi\xF3n):</h4>
<p style="font-size: 8pt; overflow-x: auto;">
${xt(D, "[K<sub>e</sub>]")}
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
<p>${O(`[${i("K")}]_{global} \u2208 \u211D^{${m} \xD7 ${m}}`)}&nbsp;&nbsp;(${m} = ${x} nodos \xD7 6 DOF)</p>

<h4>Grados de libertad por nodo:</h4>
<table class="bordered">
  <tr><th>DOF</th><th>S\xEDmbolo</th><th>Tipo</th></tr>
  <tr><td>1</td><td>${O(i("u", "x"))}</td><td>Desplazamiento X (membrana)</td></tr>
  <tr><td>2</td><td>${O(i("u", "y"))}</td><td>Desplazamiento Y (membrana)</td></tr>
  <tr><td>3</td><td>${O(i("u", "z"))}</td><td>Desplazamiento Z (flexi\xF3n)</td></tr>
  <tr><td>4</td><td>${O(i("\u03B8", "x"))}</td><td>Rotaci\xF3n alrededor de X</td></tr>
  <tr><td>5</td><td>${O(i("\u03B8", "y"))}</td><td>Rotaci\xF3n alrededor de Y</td></tr>
  <tr><td>6</td><td>${O(i("\u03B8", "z"))}</td><td>Rotaci\xF3n alrededor de Z</td></tr>
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
<p>${kt(R, "{F}")}</p>

<p>Cada nodo recibe carga ${O(`${i("F", "z")} = <b>${M(h, 2)}</b>`)} en direcci\xF3n Z.</p>

<hr/>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<h2>PASO 8: CONDICIONES DE CONTORNO</h2>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<div class="step-box">
  <h4>\u{1F512} 8.1 Aplicar Apoyos (M\xE9todo de Penalizaci\xF3n)</h4>
</div>

<h4>Nodos con apoyo: ${$} (todos los del borde)</h4>
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
<p style="font-size: 14pt; text-align: center;">${O(`[${i("K")}]_{${m}\xD7${m}} \xB7 {${i("U")}}_{${m}\xD71} = {${i("F")}}_{${m}\xD71}`)}</p>

<h4>C\xF3digo C++ (Solver LU disperso - Eigen):</h4>
<div class="code-block">Eigen::SparseLU<Eigen::SparseMatrix<<span class="ty">double</span>>> solver;
solver.<span class="fn">compute</span>(K);

<span class="kw">if</span> (solver.<span class="fn">info</span>() != Eigen::Success) {
    <span class="kw">throw</span> std::<span class="fn">runtime_error</span>(<span class="str">"Factorizaci\xF3n LU fall\xF3"</span>);
}

U = solver.<span class="fn">solve</span>(F);  <span class="cm">// U = K\u207B\xB9 \xB7 F</span></div>

<h4>Vector de desplazamientos (muestra primeros nodos):</h4>
<p>${kt(W.slice(0, 12), "{U}")}</p>

<hr/>

<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
<h2>PASO 10: POST-PROCESO (analyze)</h2>
<!-- \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->

<div class="step-box">
  <h4>\u{1F4C8} 10.1 C\xE1lculo de Momentos Flectores</h4>
</div>

<h4>Ecuaciones de momentos:</h4>
<p>${O(`${i("M", "xx")} = ${i("D")}\xB7(${i("\u03BA", "xx")} + ${i("\u03BD")}\xB7${i("\u03BA", "yy")})`)}</p>
<p>${O(`${i("M", "yy")} = ${i("D")}\xB7(${i("\u03BA", "yy")} + ${i("\u03BD")}\xB7${i("\u03BA", "xx")})`)}</p>
<p>${O(`${i("M", "xy")} = ${i("D")}\xB7(1 - ${i("\u03BD")})\xB7${nt(i("\u03BA", "xy"), "2")}`)}</p>

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
<p style="font-size: 14pt;">${O(`${i("w", "max")} = <b>${M(w, 6)}</b>`)}</p>
</div>

<div class="success">
<h4>\u2705 Momento m\xE1ximo M<sub>xx</sub>:</h4>
<p style="font-size: 14pt;">${O(`${i("M", "xx,max")} = <b>${M(G, 4)}</b>`)}</p>
</div>

<h4>Tabla de desplazamientos (primeros 6 nodos):</h4>
<table class="bordered">
  <tr><th>Nodo</th><th>u<sub>x</sub></th><th>u<sub>y</sub></th><th>u<sub>z</sub></th></tr>
  ${st.map((n) => `<tr><td>${n.i}</td><td>${M(n.ux, 6)}</td><td>${M(n.uy, 6)}</td><td class="${Math.abs(n.uz) > 1e-3 ? "err" : ""}">${M(n.uz, 6)}</td></tr>`).join("")}
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
    return bt`${ut(H)}`;
  }
  const Ht = `
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
  function Ut(t, o = 4) {
    return t == null || isNaN(t) || Math.abs(t) < 1e-10 ? "0" : t.toFixed(o).replace(".", ",");
  }
  function X(t, o) {
    return `<span class="dvc"><span class="dvr">${t}</span><span class="dvl"></span><span class="dvs">${o}</span></span>`;
  }
  function a(t) {
    return `<span class="eq">${t}</span>`;
  }
  function e(t, o) {
    return o ? `<var>${t}</var><sub>${o}</sub>` : `<var>${t}</var>`;
  }
  function mt(t, o = 4) {
    if (!t || !t.length) return "";
    let s = `<span class="matrix">
`;
    for (let l = 0; l < t.length; l++) {
      s += '<span class="tr"><span class="td"></span>';
      for (let b = 0; b < t[l].length; b++) {
        const E = t[l][b], N = typeof E == "number" ? Ut(E, o) : E;
        s += `<span class="td">${N}</span>`;
      }
      s += `<span class="td"></span></span>
`;
    }
    return s += "</span>", s;
  }
  function Wt(t) {
    const o = [
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
    ], s = [
      [
        "\u03BA\xB7G\xB7t",
        "0"
      ],
      [
        "0",
        "\u03BA\xB7G\xB7t"
      ]
    ], l = [
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
    ], b = [
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
    ], E = `
<style>${Ht}</style>

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
<tr><td>DOF por nodo</td><td>${a("<b>6</b>")}</td><td>3 traslaciones + 3 rotaciones</td></tr>
<tr><td>DOF totales</td><td>${a("<b>18</b>")}</td><td>6 \xD7 3 nodos</td></tr>
<tr><td>Cinem\xE1tica</td><td>Reissner-Mindlin</td><td>Incluye cortante transversal</td></tr>
<tr><td>Tipo</td><td>Shell = Placa + Membrana</td><td>Elementos superpuestos</td></tr>
</table>

<h4>Grados de Libertad por Nodo</h4>
<table class="bordered">
<tr><th>DOF</th><th>S\xEDmbolo</th><th>Descripci\xF3n</th><th>Componente</th></tr>
<tr><td>1, 2</td><td>${a(e("u") + ", " + e("v"))}</td><td>Desplazamientos en plano</td><td>Membrana</td></tr>
<tr><td>3</td><td>${a(e("w"))}</td><td>Deflexi\xF3n transversal</td><td>Placa</td></tr>
<tr><td>4, 5</td><td>${a(e("\u03B8", "x") + ", " + e("\u03B8", "y"))}</td><td>Rotaciones alrededor de ejes en plano</td><td>Placa</td></tr>
<tr><td>6</td><td>${a(e("\u03B8", "z"))}</td><td>Rotaci\xF3n drilling (normal)</td><td>Membrana</td></tr>
</table>

<h4>Descomposici\xF3n de la Rigidez</h4>
<p>${a(`<b>${e("K", "shell")}</b> = <b>${e("K", "plate")}</b> + <b>${e("K", "membrane")}</b>`)}</p>
<p>donde:</p>
<p>${a(`<b>${e("K", "plate")}</b> = <b>${e("K", "pb")}</b> + <b>${e("K", "ps")}</b>`)} (flexi\xF3n + cortante)</p>
<p>${a(`<b>${e("K", "membrane")}</b> = <b>${e("K", "b")}</b> + <b>${e("K", "h")}</b>`)} (b\xE1sica + orden superior)</p>

<hr/>

<h3>2. Elemento de Placa (DSG3 Modificado)</h3>

<h4>2.1 Rigidez a Flexi\xF3n</h4>
<p>${a(`<b>${e("K", "pb")}</b> = \u222B\u222B<sub>(A)</sub> <b>${e("B", "pb")}</b><sup>T</sup> \xB7 <b>${e("D")}</b> \xB7 <b>${e("B", "pb")}</b> dA`)}</p>

<p><b>Matriz de Material</b> ${a(`<b>${e("D")}</b>`)} (3\xD73):</p>
<p>${a(`<b>${e("D")}</b> = ${X(`${e("E")}\xB7${e("t")}<sup>3</sup>`, `12\xB7(1 - ${e("\u03BD")}<sup>2</sup>)`)} \xB7 `)}${mt(o)}</p>

<p><b>Rigidez Flexural:</b></p>
<p>${a(`${e("D")} = ${X(`${e("E")}\xB7${e("t")}<sup>3</sup>`, `12\xB7(1 - ${e("\u03BD")}<sup>2</sup>)`)}`)}</p>

<p><b>Matriz Deformaci\xF3n-Desplazamiento</b> ${a(`<b>${e("B", "pb")}</b>`)} (3\xD79):</p>
<p>${a(`<b>${e("B", "pb")}</b> = ${X("1", "2A")} \xB7 `)}${mt(b)}</p>
<p>donde: ${a("A")} = \xE1rea del elemento, ${a("x'_{ij} = x'_i - x'_j")}</p>

<h4>2.2 Rigidez a Cortante (M\xE9todo DSG)</h4>

<div class="info-box">
<p><b>DSG = Discrete Shear Gap</b></p>
<p>El m\xE9todo DSG evita el <i>shear locking</i> mediante:</p>
<p>1. Evaluar gaps de cortante en los nodos</p>
<p>2. Interpolar con funciones de forma</p>
<p>3. Diferenciar para obtener deformaciones de cortante</p>
</div>

<p>${a(`<b>${e("K", "ps")}</b> = \u222B\u222B<sub>(A)</sub> <b>${e("B", "ps")}</b><sup>T</sup> \xB7 <b>${e("F")}</b> \xB7 <b>${e("B", "ps")}</b> dA`)}</p>

<p><b>Matriz de Material de Cortante</b> ${a(`<b>${e("F")}</b>`)} (2\xD72):</p>
<p>${a(`<b>${e("F")}</b> = `)}${mt(s)}</p>

<p><b>M\xF3dulo de Cortante:</b></p>
<p>${a(`${e("G")} = ${X(e("E"), `2\xB7(1 + ${e("\u03BD")})`)}`)}</p>

<p><b>Factor de Correcci\xF3n:</b> ${a(`${e("\u03BA")} = ${X("5", "6")}`)} (Reissner)</p>

<h4>2.3 T\xE9cnica de Suavizado Celular</h4>
<p>El elemento se divide en <b>3 sub-tri\xE1ngulos</b> usando el centroide.</p>
<p>Las matrices ${a(`<b>${e("B", "s")}</b>`)} de los sub-tri\xE1ngulos se promedian:</p>
<p>${a(`<b>${e("B", "ps")}</b> = ${X("1", "3")} \xB7 \u03A3<sub>i=1</sub><sup>3</sup> <b>${e("B", "s")}</b><sup>M<sub>i</sub></sup>`)}</p>

<hr/>

<h3>3. Elemento de Membrana (ANDES)</h3>

<div class="info-box">
<p><b>ANDES = Assumed Natural Deviatoric Strains</b></p>
<p>Combina la Free Formulation (FF) con deformaciones naturales asumidas.</p>
</div>

<p>${a(`<b>${e("K", "mem")}</b> = <b>${e("K", "b")}</b> + <b>${e("K", "h")}</b>`)}</p>

<h4>3.1 Rigidez B\xE1sica</h4>
<p>${a(`<b>${e("K", "b")}</b> = ${e("V")}<sup>-1</sup> \xB7 <b>${e("L")}</b> \xB7 <b>${e("C")}</b> \xB7 <b>${e("L")}</b><sup>T</sup>`)}</p>
<p>donde: ${a("V = A\xB7h")} (volumen), ${a(`<b>${e("C")}</b>`)} = matriz de Hooke, ${a(`<b>${e("L")}</b>`)} = matriz force-lumping (3\xD79)</p>

<p><b>Matriz de Hooke</b> ${a(`<b>${e("C")}</b>`)} (tensi\xF3n plana, 3\xD73):</p>
<p>${a(`<b>${e("C")}</b> = ${X(e("E"), `1 - ${e("\u03BD")}<sup>2</sup>`)} \xB7 `)}${mt(l)}</p>

<h4>3.2 Rigidez de Orden Superior</h4>
<p>Usa <b>rotaciones jer\xE1rquicas</b> para capturar flexi\xF3n en plano:</p>
<p>${a(`${e("\u03B8\u0304", "i")} = ${e("\u03B8", "i")} - ${e("\u03B8", "0")}`)} (jer\xE1rquica = nodal - media)</p>

<p>Rotaci\xF3n media:</p>
<p>${a(`${e("\u03B8", "0")} = ${X("1", "4A")} \xB7 [x'_{23}u'_1 + x'_{31}u'_2 + x'_{12}u'_3 + y'_{23}v'_1 + y'_{31}v'_2 + y'_{12}v'_3]`)}</p>

<h4>3.3 Par\xE1metros Libres</h4>
<table class="bordered">
<tr><th>Par\xE1metro</th><th>Valor</th><th>Descripci\xF3n</th></tr>
<tr><td>${a(e("\u03B1"))}</td><td>${a(X("1", "8"))}</td><td>Escalado DOF drilling</td></tr>
<tr><td>${a(e("\u03B2", "0"))}</td><td>${a(`${X("\u03B1<sup>2</sup>", "4")} = ${X("1", "256")}`)}</td><td>Escalado orden superior</td></tr>
<tr><td>${a(`${e("\u03B2", "1")}, ${e("\u03B2", "3")}, ${e("\u03B2", "5")}`)}</td><td>${a("1")}</td><td>\u2014</td></tr>
<tr><td>${a(e("\u03B2", "2"))}</td><td>${a("2")}</td><td>\u2014</td></tr>
<tr><td>${a(e("\u03B2", "4"))}</td><td>${a("0")}</td><td>\u2014</td></tr>
<tr><td>${a(`${e("\u03B2", "6")}, ${e("\u03B2", "7")}, ${e("\u03B2", "8")}`)}</td><td>${a("-1")}</td><td>\u2014</td></tr>
<tr><td>${a(e("\u03B2", "9"))}</td><td>${a("-2")}</td><td>\u2014</td></tr>
</table>

<hr/>

<h3>4. Funciones de Forma</h3>

<p><b>Coordenadas de \xE1rea</b> (coordenadas triangulares lineales):</p>

<p>${a(`${e("N", "1")}(x',y') = ${X("1", "2A")} \xB7 [x'_2 y'_3 - x'_3 y'_2 + y'_{23}x' + x'_{32}y']`)}</p>
<p>${a(`${e("N", "2")}(x',y') = ${X("1", "2A")} \xB7 [x'_3 y'_1 - x'_1 y'_3 + y'_{31}x' + x'_{13}y']`)}</p>
<p>${a(`${e("N", "3")}(x',y') = ${X("1", "2A")} \xB7 [x'_1 y'_2 - x'_2 y'_1 + y'_{12}x' + x'_{21}y']`)}</p>

<p><b>Propiedades:</b></p>
<p>\u2022 ${a(`${e("N", "1")} + ${e("N", "2")} + ${e("N", "3")} = 1`)} (partici\xF3n de la unidad)</p>
<p>\u2022 ${a(`${e("N", "i")} = 1`)} en nodo i, ${a("0")} en otros nodos</p>
<p>\u2022 Lineal sobre el elemento</p>

<hr/>

<h3>5. Sistema de Coordenadas Local</h3>

<p>El sistema local (x', y', z') se define como:</p>

<p><b>Eje x':</b> ${a(`${e("x'")} = ${X(`${e("r", "2")} - ${e("r", "1")}`, `|${e("r", "2")} - ${e("r", "1")}|`)}`)} (del nodo 1 hacia el nodo 2)</p>

<p><b>Eje z':</b> ${a(`${e("z'")} = ${X(`(${e("r", "2")} - ${e("r", "1")}) \xD7 (${e("r", "3")} - ${e("r", "1")})`, "|...|")}`)} (normal a la superficie)</p>

<p><b>Eje y':</b> ${a(`${e("y'")} = ${e("z'")} \xD7 ${e("x'")}`)} (regla mano derecha)</p>

<hr/>

<h3>6. Comparaci\xF3n de Teor\xEDas de Placa</h3>

<table class="bordered">
<tr><th>Aspecto</th><th>Kirchhoff-Love</th><th>Mindlin-Reissner</th></tr>
<tr><td>Deformaci\xF3n cortante</td><td>${a(`${e("\u03B3")} = 0`)} (despreciada)</td><td>${a(`${e("\u03B3")} \u2260 0`)} (incluida)</td></tr>
<tr><td>Hip\xF3tesis de normalidad</td><td>Estricta</td><td>Relajada</td></tr>
<tr><td>Relaci\xF3n ${a(X("t", "L"))} aplicable</td><td>${a(`< ${X("1", "20")}`)} (placas delgadas)</td><td>${a(`< ${X("1", "5")}`)} (placas gruesas)</td></tr>
<tr><td>DOF por nodo</td><td>3 ${a(`(${e("w")}, ${e("\u03B8", "x")}, ${e("\u03B8", "y")})`)}</td><td>3 ${a(`(${e("w")}, ${e("\u03B8", "x")}, ${e("\u03B8", "y")})`)}</td></tr>
<tr><td>Shear locking</td><td>No</td><td>S\xED (necesita tratamiento DSG)</td></tr>
</table>

<hr/>

<h3>7. Valores de Referencia (Benchmarks)</h3>

<table class="bordered">
<tr><th>Test</th><th>Valor Referencia</th><th>Fuente</th></tr>
<tr><td>Raasch Hook</td><td>${a(`${e("w", "ref")} = 0,12535`)}</td><td>Knight [24]</td></tr>
<tr><td>Twisted Beam (${a("t = 0,05")})</td><td>${a(`${e("w", "ref")} = 0,3431`)}, ${a(`${e("v", "ref")} = 1,390`)}</td><td>Simo et al. [46]</td></tr>
<tr><td>Twisted Beam (${a("t = 0,32")})</td><td>${a(`${e("w", "ref")} = 1,754\xD710<sup>-3</sup>`)}</td><td>MacNeal & Harder [30]</td></tr>
<tr><td>Pinched Hemisphere</td><td>${a(`${e("u", "ref")} = ${e("w", "ref")} = 0,093`)}</td><td>Simo et al. [46]</td></tr>
<tr><td>Pinched Cylinder</td><td>${a(`${e("w", "ref")} = 1,8248\xD710<sup>-2</sup>`)}</td><td>Belytschko [3]</td></tr>
<tr><td>Cook's Membrane</td><td>${a(`${e("u", "ref")} = 23,91`)}</td><td>Winkler & Plakomytis [43]</td></tr>
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
<p>\u2022 Ensambla matriz de rigidez global ${a(`<b>${e("K")}</b>`)}</p>
<p>\u2022 Aplica condiciones de contorno</p>
<p>\u2022 Resuelve ${a(`<b>${e("K")}</b> \xB7 <b>${e("U")}</b> = <b>${e("F")}</b>`)} usando librer\xEDa Eigen</p>

<p><b>analyze(nodes, elements, deformOutputs, elementInputs)</b></p>
<p>\u2022 Calcula momentos flectores ${a(`(${e("M", "xx")}, ${e("M", "yy")}, ${e("M", "xy")})`)}</p>
<p>\u2022 F\xF3rmula: ${a(`${e("M", "xy")} = ${e("f", "Global")}[2][1] \xD7 ${X(`${e("t")}<sup>3</sup>`, "12")}`)}</p>

<h4>8.3 Propiedades de Material</h4>
<p>${a(`${e("E")}`)} - M\xF3dulo de Young (elasticities)</p>
<p>${a(`${e("E", "y")}`)} - M\xF3dulo ortogonal (elasticitiesOrthogonal)</p>
<p>${a(`${e("G")}`)} - M\xF3dulo de cortante (shearModuli)</p>
<p>${a(`${e("\u03BD")}`)} - Raz\xF3n de Poisson (poissonsRatios)</p>
<p>${a(`${e("t")}`)} - Espesor (thicknesses)</p>

<hr/>

<h3>9. Tests de Validaci\xF3n</h3>

<div class="reference-box">
<p><b>Test 1: Placa Isotr\xF3pica (Navier)</b></p>
<p>${a(`${e("a")} = ${e("b")} = 10`)} m, ${a(`${e("t")} = 0,15`)} m</p>
<p>${a(`${e("E")} = 10`)} GPa, ${a(`${e("\u03BD")} = 0,25`)}</p>
<p>${a(`${e("q")} = -1000`)} N/m\xB2 (uniforme)</p>
<p>${a(`${e("w", "max")} <small>(anal\xEDtico)</small> = 13,541`)} mm</p>
<p>${a(`${e("w", "max")} <small>(FEM, 10\xD710)</small> \u2248 12,69`)} mm</p>
</div>

<div class="reference-box">
<p><b>Test 2: Placa Ortotr\xF3pica</b></p>
<p>${a(`${e("E", "x")} = 10`)} GPa, ${a(`${e("E", "y")} = 5`)} GPa ${a(`(${e("E", "x")}/${e("E", "y")} = 2)`)}</p>
<p>${a(`${e("w", "max")} <small>(referencia)</small> = 16,903575`)} mm</p>
</div>

<div class="reference-box">
<p><b>Test 3: Membrana CST (MacNeal-Harder)</b></p>
<p>Cuadrado 1\xD71 m, ${a(`${e("E")} = 10<sup>6</sup>`)}, ${a(`${e("\u03BD")} = 0,3`)}, ${a(`${e("t")} = 0,01`)}</p>
<p>Tensi\xF3n uniforme: ${a(`${e("\u03B5")} = ${X(e("q"), `${e("E")}\xB7${e("t")}`)}`)}
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
    return bt`${ut(E)}`;
  }
  const ot = {
    ancho: {
      value: Y.state(10),
      min: 1,
      max: 30,
      step: 0.5,
      label: "Ancho (B)",
      unit: "length"
    },
    largo: {
      value: Y.state(15),
      min: 1,
      max: 30,
      step: 0.5,
      label: "Largo (L)",
      unit: "length"
    },
    espesor: {
      value: Y.state(0.2),
      min: 0.05,
      max: 1,
      step: 0.05,
      label: "Espesor (t)",
      unit: "length"
    },
    moduloE: {
      value: Y.state(21e4),
      min: 1e4,
      max: 5e5,
      step: 1e3,
      label: "M\xF3dulo E",
      unit: "stress"
    },
    poisson: {
      value: Y.state(0.3),
      min: 0.1,
      max: 0.45,
      step: 0.05,
      label: "Poisson (\u03BD)"
    },
    mallado: {
      value: Y.state(1),
      min: 0.3,
      max: 3,
      step: 0.1,
      label: "Tama\xF1o malla",
      unit: "length"
    },
    carga: {
      value: Y.state(-10),
      min: -50,
      max: 50,
      step: 1,
      label: "Carga uniforme",
      unit: "force"
    }
  }, V = {
    nodes: Y.state([]),
    elements: Y.state([]),
    nodeInputs: Y.state({}),
    elementInputs: Y.state({}),
    deformOutputs: Y.state({}),
    analyzeOutputs: Y.state({})
  };
  Y.derive(() => {
    const t = ot.ancho.value.val, o = ot.largo.value.val, s = ot.espesor.value.val, l = ot.moduloE.value.val, b = ot.poisson.value.val, E = ot.mallado.value.val, N = ot.carga.value.val, { nodes: F, elements: u, boundaryIndices: I } = _t({
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
    V.nodeInputs.val = {
      supports: new Map(I.map((d) => [
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
      loads: new Map(F.map((d, p) => [
        p,
        [
          0,
          0,
          N,
          0,
          0,
          0
        ]
      ]))
    }, V.nodes.val = F, V.elements.val = u;
    const A = l / (2 * (1 + b));
    V.elementInputs.val = {
      elasticities: new Map(u.map((d, p) => [
        p,
        l
      ])),
      elasticitiesOrthogonal: new Map(u.map((d, p) => [
        p,
        l
      ])),
      thicknesses: new Map(u.map((d, p) => [
        p,
        s
      ])),
      poissonsRatios: new Map(u.map((d, p) => [
        p,
        b
      ])),
      shearModuli: new Map(u.map((d, p) => [
        p,
        A
      ]))
    }, V.deformOutputs.val = Ot(F, u, V.nodeInputs.val, V.elementInputs.val), V.analyzeOutputs.val = It(F, u, V.elementInputs.val, V.deformOutputs.val);
  });
  const it = Y.state(""), rt = Y.state(void 0), ht = Y.state(false);
  Y.derive(() => {
    if (it.val === "Calcpad") {
      const t = dt({
        template: wt,
        data: V
      });
      rt.val = t;
    }
    if (it.val === "Awatif") {
      const t = dt({
        template: Vt,
        data: V
      });
      rt.val = t;
    }
    if (it.val === "Code") {
      const t = dt({
        template: Kt,
        data: V
      });
      rt.val = t;
    }
    if (it.val === "Docs") {
      const t = dt({
        template: Wt,
        data: V
      });
      rt.val = t;
    }
    if (it.val === "Print") {
      const t = dt({
        template: wt,
        data: V
      }), o = window.open("", "_blank");
      if (o) {
        const s = (t == null ? void 0 : t.innerHTML) || "";
        o.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Plate Shell Thin - Report</title>
        </head>
        <body>
          ${s}
        </body>
        </html>
      `), o.document.close(), o.focus(), setTimeout(() => o.print(), 500);
      }
    }
  });
  const Et = document.createElement("style");
  Et.textContent = `
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
  document.head.appendChild(Et);
  const gt = Y.state(true), Q = document.createElement("button");
  Q.className = "toolbar-toggle";
  Q.innerHTML = "\u2212";
  Q.title = "Ocultar/Mostrar botones";
  Q.onclick = () => {
    gt.val = !gt.val, gt.val ? (document.body.classList.remove("toolbar-hidden"), Q.innerHTML = "\u2212", Q.classList.remove("collapsed")) : (document.body.classList.add("toolbar-hidden"), Q.innerHTML = "+", Q.classList.add("collapsed"));
  };
  document.body.append(Pt(ot), At({
    mesh: V,
    settingsObj: {
      nodes: false,
      deformedShape: true,
      loads: false,
      shellResults: "displacementZ"
    }
  }), Nt(V), Rt({
    position: "bottom-center"
  }), Lt({
    dialogBody: rt
  }), Tt({
    clickedButton: it,
    buttons: [
      "Calcpad",
      "Awatif",
      "Code",
      "Docs",
      "Print"
    ],
    sourceCode: "https://github.com/GiorgioBurbanelli89/awatif-ejemplos/tree/master/plate-shell-thin",
    author: "https://github.com/GiorgioBurbanelli89"
  }), Q);
  const Jt = new MutationObserver((t) => {
    t.forEach((o) => {
      o.addedNodes.forEach((s) => {
        var _a, _b, _c;
        if (s instanceof HTMLElement) {
          const l = ((_a = s.querySelector) == null ? void 0 : _a.call(s, '[class*="dialog"]')) || (((_c = (_b = s.className) == null ? void 0 : _b.includes) == null ? void 0 : _c.call(_b, "dialog")) ? s : null);
          if (l && !l.querySelector(".dialog-maximize")) {
            const b = document.createElement("button");
            b.className = "dialog-maximize", b.innerHTML = "\u26F6", b.title = "Maximizar/Restaurar", b.onclick = (E) => {
              E.stopPropagation(), ht.val = !ht.val, ht.val ? (document.body.classList.add("dialog-maximized"), b.innerHTML = "\u26F6") : (document.body.classList.remove("dialog-maximized"), b.innerHTML = "\u26F6");
            }, l.style.position = "relative", l.appendChild(b);
          }
        }
      });
    });
  });
  Jt.observe(document.body, {
    childList: true,
    subtree: true
  });
  Y.derive(() => {
    rt.val || (document.body.classList.remove("dialog-maximized"), ht.val = false);
  });
});
