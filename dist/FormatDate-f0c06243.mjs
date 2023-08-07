function st(y) {
  const j = typeof y == "string" ? Number(y.replace(/,/g, "")) : y;
  return isNaN(j) ? null : j.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
var K = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, B = {}, tt = {
  get exports() {
    return B;
  },
  set exports(y) {
    B = y;
  }
};
(function(y, j) {
  (function(k, b) {
    y.exports = b();
  })(K, function() {
    var k = 1e3, b = 6e4, J = 36e5, A = "millisecond", M = "second", w = "minute", f = "hour", z = "day", L = "week", x = "month", $ = "quarter", m = "year", l = "date", r = "Invalid Date", c = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, O = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, v = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(s) {
      var n = ["th", "st", "nd", "rd"], t = s % 100;
      return "[" + s + (n[(t - 20) % 10] || n[t] || n[0]) + "]";
    } }, g = function(s, n, t) {
      var i = String(s);
      return !i || i.length >= n ? s : "" + Array(n + 1 - i.length).join(t) + s;
    }, C = { s: g, z: function(s) {
      var n = -s.utcOffset(), t = Math.abs(n), i = Math.floor(t / 60), e = t % 60;
      return (n <= 0 ? "+" : "-") + g(i, 2, "0") + ":" + g(e, 2, "0");
    }, m: function s(n, t) {
      if (n.date() < t.date())
        return -s(t, n);
      var i = 12 * (t.year() - n.year()) + (t.month() - n.month()), e = n.clone().add(i, x), u = t - e < 0, a = n.clone().add(i + (u ? -1 : 1), x);
      return +(-(i + (t - e) / (u ? e - a : a - e)) || 0);
    }, a: function(s) {
      return s < 0 ? Math.ceil(s) || 0 : Math.floor(s);
    }, p: function(s) {
      return { M: x, y: m, w: L, d: z, D: l, h: f, m: w, s: M, ms: A, Q: $ }[s] || String(s || "").toLowerCase().replace(/s$/, "");
    }, u: function(s) {
      return s === void 0;
    } }, p = "en", Y = {};
    Y[p] = v;
    var _ = function(s) {
      return s instanceof I;
    }, U = function s(n, t, i) {
      var e;
      if (!n)
        return p;
      if (typeof n == "string") {
        var u = n.toLowerCase();
        Y[u] && (e = u), t && (Y[u] = t, e = u);
        var a = n.split("-");
        if (!e && a.length > 1)
          return s(a[0]);
      } else {
        var d = n.name;
        Y[d] = n, e = d;
      }
      return !i && e && (p = e), e || !i && p;
    }, h = function(s, n) {
      if (_(s))
        return s.clone();
      var t = typeof n == "object" ? n : {};
      return t.date = s, t.args = arguments, new I(t);
    }, o = C;
    o.l = U, o.i = _, o.w = function(s, n) {
      return h(s, { locale: n.$L, utc: n.$u, x: n.$x, $offset: n.$offset });
    };
    var I = function() {
      function s(t) {
        this.$L = U(t.locale, null, !0), this.parse(t);
      }
      var n = s.prototype;
      return n.parse = function(t) {
        this.$d = function(i) {
          var e = i.date, u = i.utc;
          if (e === null)
            return new Date(NaN);
          if (o.u(e))
            return new Date();
          if (e instanceof Date)
            return new Date(e);
          if (typeof e == "string" && !/Z$/i.test(e)) {
            var a = e.match(c);
            if (a) {
              var d = a[2] - 1 || 0, D = (a[7] || "0").substring(0, 3);
              return u ? new Date(Date.UTC(a[1], d, a[3] || 1, a[4] || 0, a[5] || 0, a[6] || 0, D)) : new Date(a[1], d, a[3] || 1, a[4] || 0, a[5] || 0, a[6] || 0, D);
            }
          }
          return new Date(e);
        }(t), this.$x = t.x || {}, this.init();
      }, n.init = function() {
        var t = this.$d;
        this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
      }, n.$utils = function() {
        return o;
      }, n.isValid = function() {
        return this.$d.toString() !== r;
      }, n.isSame = function(t, i) {
        var e = h(t);
        return this.startOf(i) <= e && e <= this.endOf(i);
      }, n.isAfter = function(t, i) {
        return h(t) < this.startOf(i);
      }, n.isBefore = function(t, i) {
        return this.endOf(i) < h(t);
      }, n.$g = function(t, i, e) {
        return o.u(t) ? this[i] : this.set(e, t);
      }, n.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, n.valueOf = function() {
        return this.$d.getTime();
      }, n.startOf = function(t, i) {
        var e = this, u = !!o.u(i) || i, a = o.p(t), d = function(F, H) {
          var Z = o.w(e.$u ? Date.UTC(e.$y, H, F) : new Date(e.$y, H, F), e);
          return u ? Z : Z.endOf(z);
        }, D = function(F, H) {
          return o.w(e.toDate()[F].apply(e.toDate("s"), (u ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(H)), e);
        }, S = this.$W, T = this.$M, N = this.$D, E = "set" + (this.$u ? "UTC" : "");
        switch (a) {
          case m:
            return u ? d(1, 0) : d(31, 11);
          case x:
            return u ? d(1, T) : d(0, T + 1);
          case L:
            var W = this.$locale().weekStart || 0, V = (S < W ? S + 7 : S) - W;
            return d(u ? N - V : N + (6 - V), T);
          case z:
          case l:
            return D(E + "Hours", 0);
          case f:
            return D(E + "Minutes", 1);
          case w:
            return D(E + "Seconds", 2);
          case M:
            return D(E + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, n.endOf = function(t) {
        return this.startOf(t, !1);
      }, n.$set = function(t, i) {
        var e, u = o.p(t), a = "set" + (this.$u ? "UTC" : ""), d = (e = {}, e[z] = a + "Date", e[l] = a + "Date", e[x] = a + "Month", e[m] = a + "FullYear", e[f] = a + "Hours", e[w] = a + "Minutes", e[M] = a + "Seconds", e[A] = a + "Milliseconds", e)[u], D = u === z ? this.$D + (i - this.$W) : i;
        if (u === x || u === m) {
          var S = this.clone().set(l, 1);
          S.$d[d](D), S.init(), this.$d = S.set(l, Math.min(this.$D, S.daysInMonth())).$d;
        } else
          d && this.$d[d](D);
        return this.init(), this;
      }, n.set = function(t, i) {
        return this.clone().$set(t, i);
      }, n.get = function(t) {
        return this[o.p(t)]();
      }, n.add = function(t, i) {
        var e, u = this;
        t = Number(t);
        var a = o.p(i), d = function(T) {
          var N = h(u);
          return o.w(N.date(N.date() + Math.round(T * t)), u);
        };
        if (a === x)
          return this.set(x, this.$M + t);
        if (a === m)
          return this.set(m, this.$y + t);
        if (a === z)
          return d(1);
        if (a === L)
          return d(7);
        var D = (e = {}, e[w] = b, e[f] = J, e[M] = k, e)[a] || 1, S = this.$d.getTime() + t * D;
        return o.w(S, this);
      }, n.subtract = function(t, i) {
        return this.add(-1 * t, i);
      }, n.format = function(t) {
        var i = this, e = this.$locale();
        if (!this.isValid())
          return e.invalidDate || r;
        var u = t || "YYYY-MM-DDTHH:mm:ssZ", a = o.z(this), d = this.$H, D = this.$m, S = this.$M, T = e.weekdays, N = e.months, E = e.meridiem, W = function(H, Z, P, q) {
          return H && (H[Z] || H(i, u)) || P[Z].slice(0, q);
        }, V = function(H) {
          return o.s(d % 12 || 12, H, "0");
        }, F = E || function(H, Z, P) {
          var q = H < 12 ? "AM" : "PM";
          return P ? q.toLowerCase() : q;
        };
        return u.replace(O, function(H, Z) {
          return Z || function(P) {
            switch (P) {
              case "YY":
                return String(i.$y).slice(-2);
              case "YYYY":
                return o.s(i.$y, 4, "0");
              case "M":
                return S + 1;
              case "MM":
                return o.s(S + 1, 2, "0");
              case "MMM":
                return W(e.monthsShort, S, N, 3);
              case "MMMM":
                return W(N, S);
              case "D":
                return i.$D;
              case "DD":
                return o.s(i.$D, 2, "0");
              case "d":
                return String(i.$W);
              case "dd":
                return W(e.weekdaysMin, i.$W, T, 2);
              case "ddd":
                return W(e.weekdaysShort, i.$W, T, 3);
              case "dddd":
                return T[i.$W];
              case "H":
                return String(d);
              case "HH":
                return o.s(d, 2, "0");
              case "h":
                return V(1);
              case "hh":
                return V(2);
              case "a":
                return F(d, D, !0);
              case "A":
                return F(d, D, !1);
              case "m":
                return String(D);
              case "mm":
                return o.s(D, 2, "0");
              case "s":
                return String(i.$s);
              case "ss":
                return o.s(i.$s, 2, "0");
              case "SSS":
                return o.s(i.$ms, 3, "0");
              case "Z":
                return a;
            }
            return null;
          }(H) || a.replace(":", "");
        });
      }, n.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, n.diff = function(t, i, e) {
        var u, a = this, d = o.p(i), D = h(t), S = (D.utcOffset() - this.utcOffset()) * b, T = this - D, N = function() {
          return o.m(a, D);
        };
        switch (d) {
          case m:
            u = N() / 12;
            break;
          case x:
            u = N();
            break;
          case $:
            u = N() / 3;
            break;
          case L:
            u = (T - S) / 6048e5;
            break;
          case z:
            u = (T - S) / 864e5;
            break;
          case f:
            u = T / J;
            break;
          case w:
            u = T / b;
            break;
          case M:
            u = T / k;
            break;
          default:
            u = T;
        }
        return e ? u : o.a(u);
      }, n.daysInMonth = function() {
        return this.endOf(x).$D;
      }, n.$locale = function() {
        return Y[this.$L];
      }, n.locale = function(t, i) {
        if (!t)
          return this.$L;
        var e = this.clone(), u = U(t, i, !0);
        return u && (e.$L = u), e;
      }, n.clone = function() {
        return o.w(this.$d, this);
      }, n.toDate = function() {
        return new Date(this.valueOf());
      }, n.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, n.toISOString = function() {
        return this.$d.toISOString();
      }, n.toString = function() {
        return this.$d.toUTCString();
      }, s;
    }(), X = I.prototype;
    return h.prototype = X, [["$ms", A], ["$s", M], ["$m", w], ["$H", f], ["$W", z], ["$M", x], ["$y", m], ["$D", l]].forEach(function(s) {
      X[s[1]] = function(n) {
        return this.$g(n, s[0], s[1]);
      };
    }), h.extend = function(s, n) {
      return s.$i || (s(n, I, h), s.$i = !0), h;
    }, h.locale = U, h.isDayjs = _, h.unix = function(s) {
      return h(1e3 * s);
    }, h.en = Y[p], h.Ls = Y, h.p = {}, h;
  });
})(tt);
const R = B;
var G = {}, et = {
  get exports() {
    return G;
  },
  set exports(y) {
    G = y;
  }
};
(function(y, j) {
  (function(k, b) {
    y.exports = b();
  })(K, function() {
    var k = "minute", b = /[+-]\d\d(?::?\d\d)?/g, J = /([+-]|\d\d)/g;
    return function(A, M, w) {
      var f = M.prototype;
      w.utc = function(r) {
        var c = { date: r, utc: !0, args: arguments };
        return new M(c);
      }, f.utc = function(r) {
        var c = w(this.toDate(), { locale: this.$L, utc: !0 });
        return r ? c.add(this.utcOffset(), k) : c;
      }, f.local = function() {
        return w(this.toDate(), { locale: this.$L, utc: !1 });
      };
      var z = f.parse;
      f.parse = function(r) {
        r.utc && (this.$u = !0), this.$utils().u(r.$offset) || (this.$offset = r.$offset), z.call(this, r);
      };
      var L = f.init;
      f.init = function() {
        if (this.$u) {
          var r = this.$d;
          this.$y = r.getUTCFullYear(), this.$M = r.getUTCMonth(), this.$D = r.getUTCDate(), this.$W = r.getUTCDay(), this.$H = r.getUTCHours(), this.$m = r.getUTCMinutes(), this.$s = r.getUTCSeconds(), this.$ms = r.getUTCMilliseconds();
        } else
          L.call(this);
      };
      var x = f.utcOffset;
      f.utcOffset = function(r, c) {
        var O = this.$utils().u;
        if (O(r))
          return this.$u ? 0 : O(this.$offset) ? x.call(this) : this.$offset;
        if (typeof r == "string" && (r = function(p) {
          p === void 0 && (p = "");
          var Y = p.match(b);
          if (!Y)
            return null;
          var _ = ("" + Y[0]).match(J) || ["-", 0, 0], U = _[0], h = 60 * +_[1] + +_[2];
          return h === 0 ? 0 : U === "+" ? h : -h;
        }(r), r === null))
          return this;
        var v = Math.abs(r) <= 16 ? 60 * r : r, g = this;
        if (c)
          return g.$offset = v, g.$u = r === 0, g;
        if (r !== 0) {
          var C = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          (g = this.local().add(v + C, k)).$offset = v, g.$x.$localOffset = C;
        } else
          g = this.utc();
        return g;
      };
      var $ = f.format;
      f.format = function(r) {
        var c = r || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return $.call(this, c);
      }, f.valueOf = function() {
        var r = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * r;
      }, f.isUTC = function() {
        return !!this.$u;
      }, f.toISOString = function() {
        return this.toDate().toISOString();
      }, f.toString = function() {
        return this.toDate().toUTCString();
      };
      var m = f.toDate;
      f.toDate = function(r) {
        return r === "s" && this.$offset ? w(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : m.call(this);
      };
      var l = f.diff;
      f.diff = function(r, c, O) {
        if (r && this.$u === r.$u)
          return l.call(this, r, c, O);
        var v = this.local(), g = w(r).local();
        return l.call(v, g, c, O);
      };
    };
  });
})(et);
const nt = G;
var Q = {}, rt = {
  get exports() {
    return Q;
  },
  set exports(y) {
    Q = y;
  }
};
(function(y, j) {
  (function(k, b) {
    y.exports = b();
  })(K, function() {
    var k = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, b = {};
    return function(J, A, M) {
      var w, f = function($, m, l) {
        l === void 0 && (l = {});
        var r = new Date($), c = function(O, v) {
          v === void 0 && (v = {});
          var g = v.timeZoneName || "short", C = O + "|" + g, p = b[C];
          return p || (p = new Intl.DateTimeFormat("en-US", { hour12: !1, timeZone: O, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: g }), b[C] = p), p;
        }(m, l);
        return c.formatToParts(r);
      }, z = function($, m) {
        for (var l = f($, m), r = [], c = 0; c < l.length; c += 1) {
          var O = l[c], v = O.type, g = O.value, C = k[v];
          C >= 0 && (r[C] = parseInt(g, 10));
        }
        var p = r[3], Y = p === 24 ? 0 : p, _ = r[0] + "-" + r[1] + "-" + r[2] + " " + Y + ":" + r[4] + ":" + r[5] + ":000", U = +$;
        return (M.utc(_).valueOf() - (U -= U % 1e3)) / 6e4;
      }, L = A.prototype;
      L.tz = function($, m) {
        $ === void 0 && ($ = w);
        var l = this.utcOffset(), r = this.toDate(), c = r.toLocaleString("en-US", { timeZone: $ }), O = Math.round((r - new Date(c)) / 1e3 / 60), v = M(c).$set("millisecond", this.$ms).utcOffset(15 * -Math.round(r.getTimezoneOffset() / 15) - O, !0);
        if (m) {
          var g = v.utcOffset();
          v = v.add(l - g, "minute");
        }
        return v.$x.$timezone = $, v;
      }, L.offsetName = function($) {
        var m = this.$x.$timezone || M.tz.guess(), l = f(this.valueOf(), m, { timeZoneName: $ }).find(function(r) {
          return r.type.toLowerCase() === "timezonename";
        });
        return l && l.value;
      };
      var x = L.startOf;
      L.startOf = function($, m) {
        if (!this.$x || !this.$x.$timezone)
          return x.call(this, $, m);
        var l = M(this.format("YYYY-MM-DD HH:mm:ss:SSS"));
        return x.call(l, $, m).tz(this.$x.$timezone, !0);
      }, M.tz = function($, m, l) {
        var r = l && m, c = l || m || w, O = z(+M(), c);
        if (typeof $ != "string")
          return M($).tz(c);
        var v = function(Y, _, U) {
          var h = Y - 60 * _ * 1e3, o = z(h, U);
          if (_ === o)
            return [h, _];
          var I = z(h -= 60 * (o - _) * 1e3, U);
          return o === I ? [h, o] : [Y - 60 * Math.min(o, I) * 1e3, Math.max(o, I)];
        }(M.utc($, r).valueOf(), O, c), g = v[0], C = v[1], p = M(g).utcOffset(C);
        return p.$x.$timezone = c, p;
      }, M.tz.guess = function() {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
      }, M.tz.setDefault = function($) {
        w = $;
      };
    };
  });
})(rt);
const it = Q;
R.extend(nt);
R.extend(it);
function ut(y) {
  return y === "" ? "" : R(y).tz("Indian/Maldives").format("DD-MM-YYYY");
}
export {
  ut as a,
  R as d,
  st as f,
  it as t,
  nt as u
};
