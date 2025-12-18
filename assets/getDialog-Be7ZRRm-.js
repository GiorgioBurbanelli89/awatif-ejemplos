import { s as $, v as p, t as A, x as y } from "./styles-DdZBjQss.js";
import { i as g, t as Y, e as w } from "./directive-C_Rw-dL6.js";
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const z = (e) => e.strings === void 0;
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const l = (e, t) => {
  var _a;
  const s = e._$AN;
  if (s === void 0) return false;
  for (const i of s) (_a = i._$AO) == null ? void 0 : _a.call(i, t, false), l(i, t);
  return true;
}, d = (e) => {
  let t, s;
  do {
    if ((t = e._$AM) === void 0) break;
    s = t._$AN, s.delete(e), e = t;
  } while ((s == null ? void 0 : s.size) === 0);
}, _ = (e) => {
  for (let t; t = e._$AM; e = t) {
    let s = t._$AN;
    if (s === void 0) t._$AN = s = /* @__PURE__ */ new Set();
    else if (s.has(e)) break;
    s.add(e), H(t);
  }
};
function C(e) {
  this._$AN !== void 0 ? (d(this), this._$AM = e, _(this)) : this._$AM = e;
}
function b(e, t = false, s = 0) {
  const i = this._$AH, o = this._$AN;
  if (o !== void 0 && o.size !== 0) if (t) if (Array.isArray(i)) for (let r = s; r < i.length; r++) l(i[r], false), d(i[r]);
  else i != null && (l(i, false), d(i));
  else l(this, e);
}
const H = (e) => {
  e.type == Y.CHILD && (e._$AP ?? (e._$AP = b), e._$AQ ?? (e._$AQ = C));
};
class x extends g {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(t, s, i) {
    super._$AT(t, s, i), _(this), this.isConnected = t._$AU;
  }
  _$AO(t, s = true) {
    var _a, _b;
    t !== this.isConnected && (this.isConnected = t, t ? (_a = this.reconnected) == null ? void 0 : _a.call(this) : (_b = this.disconnected) == null ? void 0 : _b.call(this)), s && (l(this, t), d(this));
  }
  setValue(t) {
    if (z(this._$Ct)) this._$Ct._$AI(t, this);
    else {
      const s = [...this._$Ct._$AH];
      s[this._$Ci] = t, this._$Ct._$AI(s, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
}
/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
const E = () => new N();
class N {
}
const c = /* @__PURE__ */ new WeakMap(), L = w(class extends x {
  render(e) {
    return $;
  }
  update(e, [t]) {
    var _a;
    const s = t !== this.Y;
    return s && this.Y !== void 0 && this.rt(void 0), (s || this.lt !== this.ct) && (this.Y = t, this.ht = (_a = e.options) == null ? void 0 : _a.host, this.rt(this.ct = e.element)), $;
  }
  rt(e) {
    if (this.isConnected || (e = void 0), typeof this.Y == "function") {
      const t = this.ht ?? globalThis;
      let s = c.get(t);
      s === void 0 && (s = /* @__PURE__ */ new WeakMap(), c.set(t, s)), s.get(this.Y) !== void 0 && this.Y.call(this.ht, void 0), s.set(this.Y, e), e !== void 0 && this.Y.call(this.ht, e);
    } else this.Y.value = e;
  }
  get lt() {
    var _a, _b;
    return typeof this.Y == "function" ? (_a = c.get(this.ht ?? globalThis)) == null ? void 0 : _a.get(this.Y) : (_b = this.Y) == null ? void 0 : _b.value;
  }
  disconnected() {
    this.lt === this.ct && this.rt(void 0);
  }
  reconnected() {
    this.rt(this.ct);
  }
});
function W({ dialogBody: e }) {
  const t = document.createElement("div"), s = E();
  function i() {
    return y`
      <dialog ref=${L(s)}>
        <div class="dialog-header">
          <span class="close" @click=${o}>&times;</span>
        </div>

        <div class="dialog-body">${e.val}</div>

        <div class="resize-handle resize-handle-right"></div>
        <div class="resize-handle resize-handle-top"></div>
      </dialog>
    `;
  }
  t.id = "dialog", p.derive(() => {
    A(i(), t);
  }), p.derive(() => {
    var _a;
    e.val && ((_a = s.value) == null ? void 0 : _a.show());
  });
  function o() {
    var _a;
    (_a = s.value) == null ? void 0 : _a.close(), e.val = void 0;
  }
  return M(s.value), t;
}
function M(e) {
  if (!e) return;
  const t = e.querySelector(".resize-handle-right"), s = e.querySelector(".resize-handle-top");
  let i = false, o = 0, r = 0, a = 0, u = 0, f = 0;
  t.addEventListener("mousedown", (n) => {
    i = true, o = n.clientX, a = e.offsetWidth, document.body.style.cursor = "ew-resize", n.preventDefault();
  }), s.addEventListener("mousedown", (n) => {
    i = true, r = n.clientY, u = e.offsetHeight, f = parseFloat(getComputedStyle(e).top) || 0, document.body.style.cursor = "ns-resize", n.preventDefault();
  }), document.addEventListener("mousemove", (n) => {
    if (i) {
      if (document.body.style.cursor === "ew-resize") {
        const h = a + (n.clientX - o);
        e.style.width = `${h}px`;
      }
      if (document.body.style.cursor === "ns-resize") {
        const h = n.clientY - r, v = u - h, m = f + h;
        v > 100 && (e.style.height = `${v}px`, e.style.top = `${m}px`);
      }
    }
  }), document.addEventListener("mouseup", () => {
    i = false, document.body.style.cursor = "default";
  });
}
export {
  W as g
};
