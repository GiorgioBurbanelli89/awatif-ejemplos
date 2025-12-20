import { g as ve, a as xe, c as Te, b as se, x as B, v as n, f as V, h as we, l as Me, i as Ie, j as Se, k as $e } from "./getReport-CMkXIj08.js";
import { a as Ae } from "./analyze-CmnHHflB.js";
import { d as Ee, __tla as __tla_0 } from "./deformCpp-CS-wCYO-.js";
import { g as Oe } from "./getParameters-B7wiSLGO.js";
import "./complex-i8qiIvCl.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function _(t, s, r, y, c, m, v, f = 0) {
    const l = Math.round(t / s);
    let i = [], d = [], $ = [], T = [], p = [];
    for (let e = 0; e < l + 1; e++) {
      const g = e * s, h = (v - m) / t, o = m + h * g;
      i.push([
        f + g,
        0,
        o
      ]);
    }
    for (let e = 0; e < l + 1; e++) {
      const g = e * s, h = (c - y) / t, o = y + h * g, w = (v - m) / t, M = m + w * g;
      i.push([
        f + g,
        0,
        M + o
      ]), $.push(i.length - 1);
    }
    if (r === 1) for (let e = 0; e < l; e++) d.push([
      e,
      e + 1
    ], [
      l + 1 + e,
      l + 1 + e + 1
    ], [
      e,
      l + 1 + e
    ], [
      e,
      l + 1 + e + 1
    ]), T.push(d.length - 3, d.length - 4), p.push(d.length - 1, d.length - 2);
    if (r === 2) for (let e = 0; e < l; e++) d.push([
      e,
      e + 1
    ], [
      l + 1 + e,
      l + 1 + e + 1
    ], [
      e,
      l + 1 + e
    ], [
      e + 1,
      l + 1 + e
    ]), T.push(d.length - 3, d.length - 4), p.push(d.length - 1, d.length - 2);
    if (r === 3) for (let e = 0; e < l; e++) d.push([
      e,
      e + 1
    ], [
      l + 1 + e,
      l + 1 + e + 1
    ], [
      e,
      l + 1 + e
    ], [
      e,
      l + 1 + e + 1
    ], [
      e + 1,
      l + 1 + e
    ]), T.push(d.length - 4, d.length - 5), p.push(d.length - 1, d.length - 2, d.length - 3);
    return d.push([
      l,
      2 * l + 1
    ]), p.push(d.length - 1), {
      nodes: i,
      elements: d,
      topNodesIndices: $,
      chordsIndices: T,
      websIndices: p
    };
  }
  const oe = (t) => `<var>${t}</var>`, le = (t) => `<span class="eq">${t}</span>`, Y = (t, s = 4) => t.toFixed(s);
  function K(t) {
    var _a, _b, _c, _d;
    const s = ((_a = t.nodes) == null ? void 0 : _a.val) || [], r = ((_b = t.elements) == null ? void 0 : _b.val) || [], y = (_c = t.deformOutputs) == null ? void 0 : _c.val, c = (_d = t.analyzeOutputs) == null ? void 0 : _d.val, m = ve(), v = xe();
    let f = 0, l = 0;
    (y == null ? void 0 : y.deformations) && y.deformations.forEach((p, e) => {
      Math.abs(p[2]) > Math.abs(f) && (f = p[2], l = e);
    });
    let i = 0, d = 0, $ = 0, T = 0;
    return (c == null ? void 0 : c.normals) && c.normals.forEach((p, e) => {
      const g = Array.isArray(p) ? (p[0] + p[1]) / 2 : p;
      g > 0 && $++, g < 0 && T++, Math.abs(g) > Math.abs(i) && (i = g, d = e);
    }), B`
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 900px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #333; border-bottom: 2px solid #0066cc;">Advanced Truss Analysis Report</h1>

      <h2>Structure Summary</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr style="background: #f5f5f5;">
          <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Parameter</th>
          <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Value</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Total Nodes</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${s.length}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Total Elements</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${r.length}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Elements in Tension</td>
          <td style="border: 1px solid #ddd; padding: 8px; color: #006600;">${$}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Elements in Compression</td>
          <td style="border: 1px solid #ddd; padding: 8px; color: #cc0000;">${T}</td>
        </tr>
      </table>

      <h2>Results Summary</h2>

      <h3>Maximum Vertical Displacement</h3>
      <p style="font-size: 18px; background: #f0f8ff; padding: 15px; border-radius: 8px;">
        ${le(`${oe("u")}<sub>z,max</sub> = <b style='color:#0066cc;'>${Y(Te(f), 4)} ${m}</b>`)}
        at Node ${l}
      </p>

      <h3>Maximum Axial Force</h3>
      <p style="font-size: 18px; background: #fff0f0; padding: 15px; border-radius: 8px;">
        ${le(`${oe("N")}<sub>max</sub> = <b style='color:#cc0000;'>${Y(se(i), 2)} ${v}</b>`)}
        at Element ${d}
        (${i > 0 ? "Tension" : "Compression"})
      </p>

      ${(c == null ? void 0 : c.normals) ? B`
        <h3>Top 15 Critical Elements</h3>
        <table style="border-collapse: collapse; width: 100%;">
          <tr style="background: #f5f5f5;">
            <th style="border: 1px solid #ddd; padding: 8px;">Element</th>
            <th style="border: 1px solid #ddd; padding: 8px;">N (${v})</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Type</th>
          </tr>
          ${Array.from(c.normals.entries()).map(([p, e]) => {
      const g = Array.isArray(e) ? (e[0] + e[1]) / 2 : e;
      return {
        i: p,
        avg: g
      };
    }).sort((p, e) => Math.abs(e.avg) - Math.abs(p.avg)).slice(0, 15).map(({ i: p, avg: e }) => {
      const g = e > 0 ? "Tension" : e < 0 ? "Compression" : "Zero", h = e > 0 ? "#006600" : e < 0 ? "#cc0000" : "#666";
      return B`
                  <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">${p}</td>
                    <td style="border: 1px solid #ddd; padding: 8px; color: ${h};">${Y(se(e), 2)}</td>
                    <td style="border: 1px solid #ddd; padding: 8px; color: ${h};">${g}</td>
                  </tr>
                `;
    })}
        </table>
      ` : ""}

      <hr style="margin-top: 30px;">
      <p style="font-size: 11px; color: #666;">Generated with Awatif - Advanced Truss Analysis</p>
    </div>
  `;
  }
  const b = {
    span: {
      value: n.state(20),
      min: 1,
      max: 20,
      label: "Span (m)",
      folder: "Geometry"
    },
    spacing: {
      value: n.state(2.5),
      min: 1,
      max: 5,
      label: "Spacing (m)",
      folder: "Geometry"
    },
    webType: {
      value: n.state(1),
      min: 1,
      max: 3,
      step: 1,
      label: "Web type",
      folder: "Geometry"
    },
    trimType: {
      value: n.state(1),
      min: 1,
      max: 3,
      step: 1,
      label: "Trim type",
      folder: "Geometry"
    },
    leftHeight: {
      value: n.state(2.5),
      min: 1,
      max: 10,
      step: 0.1,
      label: "Left height (m)",
      folder: "Geometry"
    },
    midHeight: {
      value: n.state(2.5),
      min: 1,
      max: 10,
      step: 0.1,
      label: "Mid height (m)",
      folder: "Geometry"
    },
    rightHeight: {
      value: n.state(2.5),
      min: 1,
      max: 10,
      step: 0.1,
      label: "Right height (m)",
      folder: "Geometry"
    },
    leftOffset: {
      value: n.state(0),
      min: 0,
      max: 10,
      step: 0.1,
      label: "Left offset (m)",
      folder: "Geometry"
    },
    midOffset: {
      value: n.state(5),
      min: 0,
      max: 10,
      step: 0.1,
      label: "Mid offset (m)",
      folder: "Geometry"
    },
    rightOffset: {
      value: n.state(0),
      min: 0,
      max: 10,
      step: 0.1,
      label: "Right offset (m)",
      folder: "Geometry"
    },
    supportType: {
      value: n.state(1),
      min: 1,
      max: 2,
      step: 1,
      label: "Support type",
      folder: "Supports"
    },
    uniformLoad: {
      value: n.state(300),
      min: 0,
      max: 1e3,
      step: 1,
      label: "Uniform load (KN/m)",
      folder: "Loads"
    },
    chordsArea: {
      value: n.state(50),
      min: 1,
      max: 100,
      step: 1,
      label: "Chords area (cm2)",
      folder: "Sections & Materials"
    },
    chordsElasticity: {
      value: n.state(10),
      min: 1,
      max: 250,
      step: 1,
      label: "Chords elasticity (gpa)",
      folder: "Sections & Materials"
    },
    websArea: {
      value: n.state(50),
      min: 1,
      max: 100,
      step: 1,
      label: "Webs area (cm2)",
      folder: "Sections & Materials"
    },
    websElasticity: {
      value: n.state(10),
      min: 1,
      max: 250,
      step: 1,
      label: "Webs elasticity (gpa)",
      folder: "Sections & Materials"
    }
  }, ae = n.state([]), ne = n.state([]), de = n.state({}), re = n.state({}), ie = n.state({}), pe = n.state({});
  n.derive(() => {
    let t = b.span.value.val, s = b.spacing.value.val;
    const r = b.webType.value.val, y = b.trimType.value.val, c = b.leftHeight.value.val, m = b.midHeight.value.val, v = b.rightHeight.value.val, f = b.leftOffset.value.val, l = b.midOffset.value.val, i = b.rightOffset.value.val, d = b.supportType.value.val, $ = b.uniformLoad.value.val, T = b.chordsArea.value.val * 1e-4, p = b.chordsElasticity.value.val * 1e6, e = b.websArea.value.val * 1e-4, g = b.websElasticity.value.val * 1e6;
    let h = [], o = [], w = [], M = [], x = [], I = [];
    if (s = t / Math.round(t / s), Math.abs(m - 0.5 * (c + v)) > 0.3 || Math.abs(l - 0.5 * (f + i)) > 0.3) {
      t = t / 2, s = t / Math.round(t / s);
      const a = Math.round((t - 2 * s) / s), u = y >= 2 && a >= 1, U = (c - m) / t, k = c - U * s, S = (f - l) / t, P = f - S * s, { nodes: A, elements: j, topNodesIndices: F, chordsIndices: ue, websIndices: me } = _(u ? t - s : t, s, r, u ? k : c, m, u ? P : f, l, u ? s : 0);
      h.push(...A), o.push(...j), M.push(...F), x.push(...ue), I.push(...me);
      const X = (m - v) / t, ee = (l - i) / t;
      let q = r;
      r === 1 && (q = 2), r === 2 && (q = 1);
      const { nodes: G, elements: fe, topNodesIndices: ge, chordsIndices: be, websIndices: ye } = _(u ? t - 2 * s : t - s, s, q, m - X * s, u ? v + X * s : v, l - ee * s, u ? i + ee * s : i, t + s);
      if (x.push(...Z(be, o.length)), I.push(...Z(ye, o.length)), o.push(...Le(fe, h.length)), M.push(...Z(ge, h.length)), h.push(...G), u) {
        h.push([
          0,
          0,
          y == 3 ? c + f : f
        ], [
          2 * t,
          0,
          y == 3 ? v + i : i
        ]), M.push(h.length - 2, h.length - 1);
        const O = (a + 1 + 1) * 2, te = (a + 1) * 2, D = O + te;
        o.push([
          0,
          D
        ], [
          a + 2,
          D
        ], [
          O + a,
          D + 1
        ], [
          O + te - 1,
          D + 1
        ]), x.push(o.length - 1, o.length - 2, o.length - 3, o.length - 4);
      }
      const z = Math.round(u ? (t - 1 * s) / s : t / s), C = z, H = (z + 1) * 2, E = (z + 1) * 2 - 1, N = E + z + 1;
      if (r === 1 && (o.push([
        C,
        H
      ], [
        E,
        N
      ], [
        E,
        H
      ]), x.push(o.length - 3, o.length - 2), I.push(o.length - 1)), r === 2 && (o.push([
        C,
        H
      ], [
        E,
        N
      ], [
        C,
        N
      ]), x.push(o.length - 3, o.length - 2), I.push(o.length - 1)), r === 3 && (o.push([
        C,
        H
      ], [
        E,
        N
      ], [
        C,
        N
      ], [
        E,
        H
      ]), x.push(o.length - 4, o.length - 3), I.push(o.length - 2, o.length - 1)), u) {
        const O = A.length + G.length;
        w.push(O, O + 1);
      } else d === 1 ? w.push(0, A.length + G.length / 2 - 1) : w.push(A.length / 2, A.length + G.length - 1);
    } else {
      const a = Math.round((t - 2 * s) / s), u = y >= 2 && a >= 1, U = (c - v) / t, k = (f - i) / t, { nodes: S, elements: P, topNodesIndices: A, chordsIndices: j, websIndices: F } = _(u ? t - 2 * s : t, s, r, u ? c - U * s : c, u ? v + U * s : v, u ? f - k * s : f, u ? i + k * s : i, u ? s : 0);
      h.push(...S), o.push(...P), M.push(...A), x.push(...j), I.push(...F), u && (h.push([
        0,
        0,
        y == 3 ? c + f : f
      ], [
        t,
        0,
        y == 3 ? v + i : i
      ]), M.push(h.length - 2, h.length - 1), o.push([
        0,
        (a + 1) * 2
      ], [
        a + 1,
        (a + 1) * 2
      ], [
        a,
        (a + 1) * 2 + 1
      ], [
        a * 2 + 1,
        (a + 1) * 2 + 1
      ]), x.push(o.length - 1, o.length - 2, o.length - 3, o.length - 4)), u ? w.push(S.length, S.length + 1) : d === 1 ? w.push(0, S.length / 2 - 1) : w.push(S.length / 2, S.length - 1);
    }
    const J = {
      supports: new Map(w.map((a) => [
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
      loads: new Map(M.map((a) => [
        a,
        [
          0,
          0,
          -$ * s,
          0,
          0,
          0
        ]
      ]))
    }, W = {
      elasticities: new Map([
        ...x.map((a) => [
          a,
          p
        ]),
        ...I.map((a) => [
          a,
          g
        ])
      ]),
      areas: new Map([
        ...x.map((a) => [
          a,
          T
        ]),
        ...I.map((a) => [
          a,
          e
        ])
      ])
    }, Q = Ee(h, o, J, W), ce = Ae(h, o, W, Q);
    ae.val = h, ne.val = o, de.val = J, re.val = W, ie.val = Q, pe.val = ce;
  });
  const R = {
    nodes: ae,
    elements: ne,
    nodeInputs: de,
    elementInputs: re,
    deformOutputs: ie,
    analyzeOutputs: pe
  }, L = n.state(""), he = n.state(void 0);
  n.derive(() => {
    var _a;
    if (L.val === "Calcpad") try {
      const t = V({
        template: K,
        data: R
      });
      he.val = t;
    } catch (t) {
      console.error("Error generating report:", t);
    }
    if (L.val === "Print") {
      const t = V({
        template: K,
        data: R
      }), s = window.open("", "_blank");
      if (s) {
        const r = (t == null ? void 0 : t.innerHTML) || "";
        s.document.write(`
        <!DOCTYPE html>
        <html>
        <head><title>Advanced Truss Analysis Report</title></head>
        <body>${r}</body>
        </html>
      `), s.document.close();
      }
      L.val = "";
    }
    if (L.val === "HTML") {
      const r = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Advanced Truss Analysis Report - Awatif</title>
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; max-width: 900px; margin: 0 auto; padding: 20px; }
    h1, h2, h3 { color: #333; }
    table { border-collapse: collapse; width: 100%; margin: 10px 0; }
    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
    th { background: #f5f5f5; }
    .eq { font-family: 'Times New Roman', serif; }
    var { font-style: italic; color: #0066cc; }
  </style>
</head>
<body>
${((_a = V({
        template: K,
        data: R
      })) == null ? void 0 : _a.innerHTML) || ""}
</body>
</html>`, y = new Blob([
        r
      ], {
        type: "text/html"
      }), c = URL.createObjectURL(y), m = document.createElement("a");
      m.href = c, m.download = "advanced_truss_report.html", document.body.appendChild(m), m.click(), document.body.removeChild(m), URL.revokeObjectURL(c), L.val = "";
    }
  });
  document.body.append(Oe(b), we({
    mesh: R,
    settingsObj: {
      deformedShape: true,
      loads: false
    }
  }), Me(R), Ie({
    position: "top-left",
    expanded: false
  }), Se({
    dialogBody: he
  }), $e({
    clickedButton: L,
    buttons: [
      "Calcpad",
      "Print",
      "HTML"
    ],
    sourceCode: "https://github.com/madil4/awatif/blob/main/examples/src/advanced-truss/main.ts",
    author: "https://www.linkedin.com/in/madil4/"
  }));
  function Le(t, s) {
    return t.map(([r, y]) => [
      r + s,
      y + s
    ]);
  }
  function Z(t, s) {
    return t.map((r) => r + s);
  }
});
