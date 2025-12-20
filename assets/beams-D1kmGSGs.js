import { g as k, a as E, c as m, x as c, b as A, v as s, f as v, h as C, l as B, i as D, j as F, k as H } from "./getReport-CMkXIj08.js";
import { a as Y } from "./analyze-CmnHHflB.js";
import { d as _, __tla as __tla_0 } from "./deformCpp-CS-wCYO-.js";
import { g as z } from "./getParameters-B7wiSLGO.js";
import "./complex-i8qiIvCl.js";
Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const I = (t) => `<var>${t}</var>`, N = (t) => `<span class="eq">${t}</span>`, i = (t, r = 4) => t.toFixed(r);
  function $(t) {
    var _a, _b, _c, _d;
    const r = ((_a = t.nodes) == null ? void 0 : _a.val) || [], p = ((_b = t.elements) == null ? void 0 : _b.val) || [], l = (_c = t.deformOutputs) == null ? void 0 : _c.val, e = (_d = t.analyzeOutputs) == null ? void 0 : _d.val, a = k(), L = E();
    let f = 0, T = 0;
    return (l == null ? void 0 : l.deformations) && l.deformations.forEach((d, o) => {
      const b = Math.sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
      b > Math.abs(f) && (f = b, T = o);
    }), (e == null ? void 0 : e.momentsY) && e.momentsY.forEach((d, o) => {
      Array.isArray(d) ? Math.max(Math.abs(d[0]), Math.abs(d[1])) : Math.abs(d);
    }), c`
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 900px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #333; border-bottom: 2px solid #0066cc;">Beam Frame Analysis Report</h1>

      <h2>Input Data</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr style="background: #f5f5f5;">
          <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Parameter</th>
          <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Value</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Total Nodes</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${r.length}</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 8px;">Total Elements</td>
          <td style="border: 1px solid #ddd; padding: 8px;">${p.length}</td>
        </tr>
      </table>

      <h2>Geometry</h2>
      <table style="border-collapse: collapse; width: 100%;">
        <tr style="background: #f5f5f5;">
          <th style="border: 1px solid #ddd; padding: 8px;">Node</th>
          <th style="border: 1px solid #ddd; padding: 8px;">X (${a})</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Y (${a})</th>
          <th style="border: 1px solid #ddd; padding: 8px;">Z (${a})</th>
        </tr>
        ${r.map((d, o) => c`
            <tr>
              <td style="border: 1px solid #ddd; padding: 8px;">${o}</td>
              <td style="border: 1px solid #ddd; padding: 8px;">${i(m(d[0]), 2)}</td>
              <td style="border: 1px solid #ddd; padding: 8px;">${i(m(d[1]), 2)}</td>
              <td style="border: 1px solid #ddd; padding: 8px;">${i(m(d[2]), 2)}</td>
            </tr>
          `)}
      </table>

      <h2>Results</h2>

      <h3>Maximum Displacement</h3>
      <p style="font-size: 18px; background: #f0f8ff; padding: 15px; border-radius: 8px;">
        ${N(`${I("u")}<sub>max</sub> = <b style='color:#0066cc;'>${i(m(f), 4)} ${a}</b>`)}
        at Node ${T}
      </p>

      ${(l == null ? void 0 : l.deformations) ? c`
        <h3>Nodal Displacements</h3>
        <table style="border-collapse: collapse; width: 100%;">
          <tr style="background: #f5f5f5;">
            <th style="border: 1px solid #ddd; padding: 8px;">Node</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Ux (${a})</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Uy (${a})</th>
            <th style="border: 1px solid #ddd; padding: 8px;">Uz (${a})</th>
          </tr>
          ${Array.from(l.deformations.entries()).map(([d, o]) => c`
              <tr>
                <td style="border: 1px solid #ddd; padding: 8px;">${d}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">${i(m(o[0]), 6)}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">${i(m(o[1]), 6)}</td>
                <td style="border: 1px solid #ddd; padding: 8px;">${i(m(o[2]), 6)}</td>
              </tr>
            `)}
        </table>
      ` : ""}

      ${(e == null ? void 0 : e.momentsY) ? c`
        <h3>Bending Moments (My)</h3>
        <table style="border-collapse: collapse; width: 100%;">
          <tr style="background: #f5f5f5;">
            <th style="border: 1px solid #ddd; padding: 8px;">Element</th>
            <th style="border: 1px solid #ddd; padding: 8px;">M<sub>i</sub> (${L}*${a})</th>
            <th style="border: 1px solid #ddd; padding: 8px;">M<sub>j</sub> (${L}*${a})</th>
          </tr>
          ${Array.from(e.momentsY.entries()).map(([d, o]) => {
      const b = Array.isArray(o) ? o[0] : o, O = Array.isArray(o) ? o[1] : o;
      return c`
                <tr>
                  <td style="border: 1px solid #ddd; padding: 8px;">${d}</td>
                  <td style="border: 1px solid #ddd; padding: 8px;">${i(A(b), 2)}</td>
                  <td style="border: 1px solid #ddd; padding: 8px;">${i(A(O), 2)}</td>
                </tr>
              `;
    })}
        </table>
      ` : ""}

      <hr style="margin-top: 30px;">
      <p style="font-size: 11px; color: #666;">Generated with Awatif - Beam Frame Analysis</p>
    </div>
  `;
  }
  const g = {
    length: {
      value: s.state(10),
      min: 1,
      max: 20
    },
    height: {
      value: s.state(10),
      min: 1,
      max: 10
    },
    xLoad: {
      value: s.state(10),
      min: 0,
      max: 10
    }
  }, y = s.state([]), n = s.state([]), w = s.state({}), u = s.state({}), M = s.state({}), U = s.state({});
  s.derive(() => {
    const t = g.length.value.val, r = g.height.value.val, p = g.xLoad.value.val;
    y.val = [
      [
        0,
        0,
        0
      ],
      [
        0,
        0,
        r
      ],
      [
        t,
        0,
        r
      ],
      [
        t,
        0,
        0
      ]
    ], n.val = [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ]
    ], w.val = {
      supports: /* @__PURE__ */ new Map([
        [
          0,
          [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        ],
        [
          3,
          [
            true,
            true,
            true,
            true,
            true,
            true
          ]
        ]
      ]),
      loads: /* @__PURE__ */ new Map([
        [
          2,
          [
            p,
            0,
            0,
            0,
            0,
            0
          ]
        ]
      ])
    }, u.val = {
      elasticities: new Map(n.val.map((l, e) => [
        e,
        10
      ])),
      shearModuli: new Map(n.val.map((l, e) => [
        e,
        10
      ])),
      areas: new Map(n.val.map((l, e) => [
        e,
        10
      ])),
      torsionalConstants: new Map(n.val.map((l, e) => [
        e,
        10
      ])),
      momentsOfInertiaY: new Map(n.val.map((l, e) => [
        e,
        10
      ])),
      momentsOfInertiaZ: new Map(n.val.map((l, e) => [
        e,
        10
      ]))
    }, M.val = _(y.val, n.val, w.val, u.val), U.val = Y(y.val, n.val, u.val, M.val);
  });
  const x = {
    nodes: y,
    elements: n,
    nodeInputs: w,
    elementInputs: u,
    deformOutputs: M,
    analyzeOutputs: U
  }, h = s.state(""), R = s.state(void 0);
  s.derive(() => {
    var _a;
    if (h.val === "Calcpad") try {
      const t = v({
        template: $,
        data: x
      });
      R.val = t;
    } catch (t) {
      console.error("Error generating report:", t);
    }
    if (h.val === "Print") {
      const t = v({
        template: $,
        data: x
      }), r = window.open("", "_blank");
      if (r) {
        const p = (t == null ? void 0 : t.innerHTML) || "";
        r.document.write(`
        <!DOCTYPE html>
        <html>
        <head><title>Beam Frame Analysis Report</title></head>
        <body>${p}</body>
        </html>
      `), r.document.close();
      }
      h.val = "";
    }
    if (h.val === "HTML") {
      const p = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Beam Frame Analysis Report - Awatif</title>
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
${((_a = v({
        template: $,
        data: x
      })) == null ? void 0 : _a.innerHTML) || ""}
</body>
</html>`, l = new Blob([
        p
      ], {
        type: "text/html"
      }), e = URL.createObjectURL(l), a = document.createElement("a");
      a.href = e, a.download = "beams_report.html", document.body.appendChild(a), a.click(), document.body.removeChild(a), URL.revokeObjectURL(e), h.val = "";
    }
  });
  document.body.append(z(g), C({
    mesh: x,
    settingsObj: {
      deformedShape: true
    }
  }), B(x), D({
    position: "top-left",
    expanded: false
  }), F({
    dialogBody: R
  }), H({
    clickedButton: h,
    buttons: [
      "Calcpad",
      "Print",
      "HTML"
    ],
    sourceCode: "https://github.com/madil4/awatif/blob/main/examples/src/beams/main.ts",
    author: "https://www.linkedin.com/in/madil4/"
  }));
});
