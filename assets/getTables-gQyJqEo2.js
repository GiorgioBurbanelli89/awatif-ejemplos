import { r as g, v as h, s as v } from "./getReport-CnIkx0ml.js";
function E({ fields: s, data: l }) {
  const n = document.createElement("div"), e = new g({ name: Math.random().toString().substring(2), box: n, selectType: "cell", recordHeight: 26, show: { columnMenu: false, lineNumbers: true }, columns: w(s), records: b(l.rawVal, s) });
  return n.setAttribute("id", "table"), new ResizeObserver(() => e.refresh()).observe(n), e.onChange = (o) => {
    if (!s[o.detail.column]) return;
    const t = f[o.detail.column];
    e.records[o.detail.index][t] = o.detail.value.new, l.val = m(e.records, s);
  }, e.onDelete = (o) => {
    o.detail.force = true, o.onComplete = () => {
      l.val = m(e.records, s);
    };
  }, e.onPaste = (o) => {
    o.onComplete = () => {
      e.mergeChanges(), l.val = m(e.records, s);
    };
  }, h.derive(() => {
    e.records = b(l.val, s), e.refresh();
  }), n;
}
const f = "ABCDEFGHIJKLMNOPRST";
function w(s) {
  return f.split("").map((n) => ({ field: n, text: '<div style="text-align: center">' + n + "</div>", size: "90px", resizable: true, sortable: true, editable: { type: "text" } })).map((n) => {
    const e = s.find((i) => i.field === n.field);
    return e ? { ...n, ...e } : n;
  });
}
function b(s, l) {
  const n = Array.isArray(s) ? s : o(s, l), e = Array(50).fill(0).map((t, r) => ({ recid: r })), i = f.split("");
  for (let t = 0; t < n.length; t++) for (let r = 0; r < n[t].length; r++) e[t][i[r]] = n[t][r];
  return e;
  function o(t, r) {
    const d = /* @__PURE__ */ new Map();
    return r.forEach((u) => d.set(u.field, u)), Object.keys(t).map((u) => [d.get(u).text, t[u]]);
  }
}
function m(s, l) {
  if (f.includes(l[0].field)) return e(s, l);
  return i(s, l);
  function e(o, t) {
    let r = [...Array(o.length)].map(() => [...Array(t.length)]);
    const d = f.split("");
    for (let c = 0; c < r.length; c++) for (let a = 0; a < r[c].length; a++) r[c][a] = o[c][d[a]] ?? "";
    return r.slice(0, u(r) + 1);
    function u(c) {
      for (let a = c.length - 1; a >= 0; a--) if (c[a].some((p) => p !== "")) return a;
    }
  }
  function i(o, t) {
    return Object.fromEntries(t.map(({ field: r }, d) => [r, o[d].B]));
  }
}
function y({ tables: s }) {
  const l = document.createElement("div"), n = document.createElement("div"), e = [], i = /* @__PURE__ */ new Map();
  s.forEach((t, r) => {
    e.push({ id: r, text: t.text }), i.set(r, E({ fields: t.fields, data: t.data }));
  });
  const o = new v({ box: n, name: "tabs", active: e[0].id, flow: "up", tabs: e });
  return l.id = "tables", n.id = "tabs", l.append(i.values().next().value, n), o.onClick = (t) => {
    l.firstChild.replaceWith(i.get(t.target));
  }, l;
}
export {
  y as g
};
