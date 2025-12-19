import { v as g, c as h, a as b, G as $ } from "./styles-pdtxawzU.js";
let u = null, i = null, o = null;
function m(l) {
  if (!l || l === "none") return "";
  const e = b.val, n = h.val;
  if (e === "\u2014" || n === "\u2014") return "";
  switch (l) {
    case "length":
      return e;
    case "force":
      return n;
    case "area":
      return `${e}\xB2`;
    case "volume":
      return `${e}\xB3`;
    case "stress":
      return `${n}/${e}\xB2`;
    case "moment":
      return `${n}\xB7${e}`;
    default:
      return "";
  }
}
let v = false;
function E(l) {
  const e = document.createElement("div");
  return e.setAttribute("id", "parameters"), i = e, o = l, f(e, l), v || (v = true, g.derive(() => {
    h.val, b.val, setTimeout(() => {
      i && o && f(i, o);
    }, 10);
  })), e;
}
function f(l, e) {
  u && u.dispose(), l.innerHTML = "";
  const n = new $({ title: "Parameters", container: l });
  u = n;
  const c = {};
  Object.entries(e).forEach(([r, t]) => {
    c[r] = t.value.val;
  });
  const a = /* @__PURE__ */ new Map();
  a.set("root", n), Object.entries(e).forEach(([r, t]) => {
    var _a;
    t.folder && !a.get(t.folder) && a.set(t.folder, n.addFolder({ title: t.folder }));
    const s = t.label || r, d = m(t.unit), P = d ? `${s} [${d}]` : s;
    (_a = a.get(t.folder ?? "root")) == null ? void 0 : _a.addBinding(c, r, { min: t.min ?? 0, max: t.max ?? 100, step: t.step ?? 1, label: P });
  }), n.on("change", (r) => {
    const t = r.target.key;
    e[t] && (e[t].value.val = r.value);
  }), Object.entries(e).forEach(([r, t]) => {
    g.derive(() => {
      const s = t.value.val;
      c[r] !== s && (c[r] = s, n.refresh());
    });
  });
}
function U() {
  i && o && f(i, o);
}
export {
  E as g,
  U as r
};
