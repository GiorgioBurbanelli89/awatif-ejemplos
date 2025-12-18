import { s, T as r } from "./styles-DdZBjQss.js";
import { i as n, t as o, e as c } from "./getDialog-COZgeqJ-.js";
/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/
class e extends n {
  constructor(t) {
    if (super(t), this.it = s, t.type !== o.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(t) {
    if (t === s || t == null) return this._t = void 0, this.it = t;
    if (t === r) return t;
    if (typeof t != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (t === this.it) return this._t;
    this.it = t;
    const i = [t];
    return i.raw = i, this._t = { _$litType$: this.constructor.resultType, strings: i, values: [] };
  }
}
e.directiveName = "unsafeHTML", e.resultType = 1;
const l = c(e);
export {
  l as o
};
