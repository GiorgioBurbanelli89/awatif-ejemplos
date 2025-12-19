import { v as o, A as s } from "./styles-pZ4aRE4c.js";
function u({ template: t, data: n }) {
  const e = document.createElement("div");
  return o.derive(() => {
    s(t(n), e), a(e);
  }), e;
}
function a(t) {
  t.querySelectorAll("script").forEach((e) => {
    var _a;
    const r = document.createElement("script");
    Array.from(e.attributes).forEach((c) => {
      r.setAttribute(c.name, c.value);
    }), r.textContent = e.textContent, (_a = e.parentNode) == null ? void 0 : _a.replaceChild(r, e);
  });
}
export {
  u as g
};
