var K = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, B = {}, tt = {
  get exports() {
    return B;
  },
  set exports(p) {
    B = p;
  }
};
(function(p, I) {
  (function(z, O) {
    p.exports = O();
  })(K, function() {
    var z = 1e3, O = 6e4, A = 36e5, E = "millisecond", M = "second", x = "minute", f = "hour", _ = "day", L = "week", T = "month", $ = "quarter", m = "year", l = "date", r = "Invalid Date", c = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, w = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, v = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(s) {
      var n = ["th", "st", "nd", "rd"], t = s % 100;
      return "[" + s + (n[(t - 20) % 10] || n[t] || n[0]) + "]";
    } }, g = function(s, n, t) {
      var i = String(s);
      return !i || i.length >= n ? s : "" + Array(n + 1 - i.length).join(t) + s;
    }, U = { s: g, z: function(s) {
      var n = -s.utcOffset(), t = Math.abs(n), i = Math.floor(t / 60), e = t % 60;
      return (n <= 0 ? "+" : "-") + g(i, 2, "0") + ":" + g(e, 2, "0");
    }, m: function s(n, t) {
      if (n.date() < t.date())
        return -s(t, n);
      var i = 12 * (t.year() - n.year()) + (t.month() - n.month()), e = n.clone().add(i, T), u = t - e < 0, a = n.clone().add(i + (u ? -1 : 1), T);
      return +(-(i + (t - e) / (u ? e - a : a - e)) || 0);
    }, a: function(s) {
      return s < 0 ? Math.ceil(s) || 0 : Math.floor(s);
    }, p: function(s) {
      return { M: T, y: m, w: L, d: _, D: l, h: f, m: x, s: M, ms: E, Q: $ }[s] || String(s || "").toLowerCase().replace(/s$/, "");
    }, u: function(s) {
      return s === void 0;
    } }, y = "en", b = {};
    b[y] = v;
    var H = function(s) {
      return s instanceof Z;
    }, N = function s(n, t, i) {
      var e;
      if (!n)
        return y;
      if (typeof n == "string") {
        var u = n.toLowerCase();
        b[u] && (e = u), t && (b[u] = t, e = u);
        var a = n.split("-");
        if (!e && a.length > 1)
          return s(a[0]);
      } else {
        var d = n.name;
        b[d] = n, e = d;
      }
      return !i && e && (y = e), e || !i && y;
    }, h = function(s, n) {
      if (H(s))
        return s.clone();
      var t = typeof n == "object" ? n : {};
      return t.date = s, t.args = arguments, new Z(t);
    }, o = U;
    o.l = N, o.i = H, o.w = function(s, n) {
      return h(s, { locale: n.$L, utc: n.$u, x: n.$x, $offset: n.$offset });
    };
    var Z = function() {
      function s(t) {
        this.$L = N(t.locale, null, !0), this.parse(t);
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
        var e = this, u = !!o.u(i) || i, a = o.p(t), d = function(j, C) {
          var W = o.w(e.$u ? Date.UTC(e.$y, C, j) : new Date(e.$y, C, j), e);
          return u ? W : W.endOf(_);
        }, D = function(j, C) {
          return o.w(e.toDate()[j].apply(e.toDate("s"), (u ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(C)), e);
        }, S = this.$W, Y = this.$M, k = this.$D, J = "set" + (this.$u ? "UTC" : "");
        switch (a) {
          case m:
            return u ? d(1, 0) : d(31, 11);
          case T:
            return u ? d(1, Y) : d(0, Y + 1);
          case L:
            var F = this.$locale().weekStart || 0, P = (S < F ? S + 7 : S) - F;
            return d(u ? k - P : k + (6 - P), Y);
          case _:
          case l:
            return D(J + "Hours", 0);
          case f:
            return D(J + "Minutes", 1);
          case x:
            return D(J + "Seconds", 2);
          case M:
            return D(J + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, n.endOf = function(t) {
        return this.startOf(t, !1);
      }, n.$set = function(t, i) {
        var e, u = o.p(t), a = "set" + (this.$u ? "UTC" : ""), d = (e = {}, e[_] = a + "Date", e[l] = a + "Date", e[T] = a + "Month", e[m] = a + "FullYear", e[f] = a + "Hours", e[x] = a + "Minutes", e[M] = a + "Seconds", e[E] = a + "Milliseconds", e)[u], D = u === _ ? this.$D + (i - this.$W) : i;
        if (u === T || u === m) {
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
        var a = o.p(i), d = function(Y) {
          var k = h(u);
          return o.w(k.date(k.date() + Math.round(Y * t)), u);
        };
        if (a === T)
          return this.set(T, this.$M + t);
        if (a === m)
          return this.set(m, this.$y + t);
        if (a === _)
          return d(1);
        if (a === L)
          return d(7);
        var D = (e = {}, e[x] = O, e[f] = A, e[M] = z, e)[a] || 1, S = this.$d.getTime() + t * D;
        return o.w(S, this);
      }, n.subtract = function(t, i) {
        return this.add(-1 * t, i);
      }, n.format = function(t) {
        var i = this, e = this.$locale();
        if (!this.isValid())
          return e.invalidDate || r;
        var u = t || "YYYY-MM-DDTHH:mm:ssZ", a = o.z(this), d = this.$H, D = this.$m, S = this.$M, Y = e.weekdays, k = e.months, J = e.meridiem, F = function(C, W, V, q) {
          return C && (C[W] || C(i, u)) || V[W].slice(0, q);
        }, P = function(C) {
          return o.s(d % 12 || 12, C, "0");
        }, j = J || function(C, W, V) {
          var q = C < 12 ? "AM" : "PM";
          return V ? q.toLowerCase() : q;
        };
        return u.replace(w, function(C, W) {
          return W || function(V) {
            switch (V) {
              case "YY":
                return String(i.$y).slice(-2);
              case "YYYY":
                return o.s(i.$y, 4, "0");
              case "M":
                return S + 1;
              case "MM":
                return o.s(S + 1, 2, "0");
              case "MMM":
                return F(e.monthsShort, S, k, 3);
              case "MMMM":
                return F(k, S);
              case "D":
                return i.$D;
              case "DD":
                return o.s(i.$D, 2, "0");
              case "d":
                return String(i.$W);
              case "dd":
                return F(e.weekdaysMin, i.$W, Y, 2);
              case "ddd":
                return F(e.weekdaysShort, i.$W, Y, 3);
              case "dddd":
                return Y[i.$W];
              case "H":
                return String(d);
              case "HH":
                return o.s(d, 2, "0");
              case "h":
                return P(1);
              case "hh":
                return P(2);
              case "a":
                return j(d, D, !0);
              case "A":
                return j(d, D, !1);
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
          }(C) || a.replace(":", "");
        });
      }, n.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, n.diff = function(t, i, e) {
        var u, a = this, d = o.p(i), D = h(t), S = (D.utcOffset() - this.utcOffset()) * O, Y = this - D, k = function() {
          return o.m(a, D);
        };
        switch (d) {
          case m:
            u = k() / 12;
            break;
          case T:
            u = k();
            break;
          case $:
            u = k() / 3;
            break;
          case L:
            u = (Y - S) / 6048e5;
            break;
          case _:
            u = (Y - S) / 864e5;
            break;
          case f:
            u = Y / A;
            break;
          case x:
            u = Y / O;
            break;
          case M:
            u = Y / z;
            break;
          default:
            u = Y;
        }
        return e ? u : o.a(u);
      }, n.daysInMonth = function() {
        return this.endOf(T).$D;
      }, n.$locale = function() {
        return b[this.$L];
      }, n.locale = function(t, i) {
        if (!t)
          return this.$L;
        var e = this.clone(), u = N(t, i, !0);
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
    }(), X = Z.prototype;
    return h.prototype = X, [["$ms", E], ["$s", M], ["$m", x], ["$H", f], ["$W", _], ["$M", T], ["$y", m], ["$D", l]].forEach(function(s) {
      X[s[1]] = function(n) {
        return this.$g(n, s[0], s[1]);
      };
    }), h.extend = function(s, n) {
      return s.$i || (s(n, Z, h), s.$i = !0), h;
    }, h.locale = N, h.isDayjs = H, h.unix = function(s) {
      return h(1e3 * s);
    }, h.en = b[y], h.Ls = b, h.p = {}, h;
  });
})(tt);
const R = B;
var G = {}, et = {
  get exports() {
    return G;
  },
  set exports(p) {
    G = p;
  }
};
(function(p, I) {
  (function(z, O) {
    p.exports = O();
  })(K, function() {
    var z = "minute", O = /[+-]\d\d(?::?\d\d)?/g, A = /([+-]|\d\d)/g;
    return function(E, M, x) {
      var f = M.prototype;
      x.utc = function(r) {
        var c = { date: r, utc: !0, args: arguments };
        return new M(c);
      }, f.utc = function(r) {
        var c = x(this.toDate(), { locale: this.$L, utc: !0 });
        return r ? c.add(this.utcOffset(), z) : c;
      }, f.local = function() {
        return x(this.toDate(), { locale: this.$L, utc: !1 });
      };
      var _ = f.parse;
      f.parse = function(r) {
        r.utc && (this.$u = !0), this.$utils().u(r.$offset) || (this.$offset = r.$offset), _.call(this, r);
      };
      var L = f.init;
      f.init = function() {
        if (this.$u) {
          var r = this.$d;
          this.$y = r.getUTCFullYear(), this.$M = r.getUTCMonth(), this.$D = r.getUTCDate(), this.$W = r.getUTCDay(), this.$H = r.getUTCHours(), this.$m = r.getUTCMinutes(), this.$s = r.getUTCSeconds(), this.$ms = r.getUTCMilliseconds();
        } else
          L.call(this);
      };
      var T = f.utcOffset;
      f.utcOffset = function(r, c) {
        var w = this.$utils().u;
        if (w(r))
          return this.$u ? 0 : w(this.$offset) ? T.call(this) : this.$offset;
        if (typeof r == "string" && (r = function(y) {
          y === void 0 && (y = "");
          var b = y.match(O);
          if (!b)
            return null;
          var H = ("" + b[0]).match(A) || ["-", 0, 0], N = H[0], h = 60 * +H[1] + +H[2];
          return h === 0 ? 0 : N === "+" ? h : -h;
        }(r), r === null))
          return this;
        var v = Math.abs(r) <= 16 ? 60 * r : r, g = this;
        if (c)
          return g.$offset = v, g.$u = r === 0, g;
        if (r !== 0) {
          var U = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          (g = this.local().add(v + U, z)).$offset = v, g.$x.$localOffset = U;
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
        return r === "s" && this.$offset ? x(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : m.call(this);
      };
      var l = f.diff;
      f.diff = function(r, c, w) {
        if (r && this.$u === r.$u)
          return l.call(this, r, c, w);
        var v = this.local(), g = x(r).local();
        return l.call(v, g, c, w);
      };
    };
  });
})(et);
const nt = G;
var Q = {}, rt = {
  get exports() {
    return Q;
  },
  set exports(p) {
    Q = p;
  }
};
(function(p, I) {
  (function(z, O) {
    p.exports = O();
  })(K, function() {
    var z = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, O = {};
    return function(A, E, M) {
      var x, f = function($, m, l) {
        l === void 0 && (l = {});
        var r = new Date($), c = function(w, v) {
          v === void 0 && (v = {});
          var g = v.timeZoneName || "short", U = w + "|" + g, y = O[U];
          return y || (y = new Intl.DateTimeFormat("en-US", { hour12: !1, timeZone: w, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: g }), O[U] = y), y;
        }(m, l);
        return c.formatToParts(r);
      }, _ = function($, m) {
        for (var l = f($, m), r = [], c = 0; c < l.length; c += 1) {
          var w = l[c], v = w.type, g = w.value, U = z[v];
          U >= 0 && (r[U] = parseInt(g, 10));
        }
        var y = r[3], b = y === 24 ? 0 : y, H = r[0] + "-" + r[1] + "-" + r[2] + " " + b + ":" + r[4] + ":" + r[5] + ":000", N = +$;
        return (M.utc(H).valueOf() - (N -= N % 1e3)) / 6e4;
      }, L = E.prototype;
      L.tz = function($, m) {
        $ === void 0 && ($ = x);
        var l = this.utcOffset(), r = this.toDate(), c = r.toLocaleString("en-US", { timeZone: $ }), w = Math.round((r - new Date(c)) / 1e3 / 60), v = M(c).$set("millisecond", this.$ms).utcOffset(15 * -Math.round(r.getTimezoneOffset() / 15) - w, !0);
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
      var T = L.startOf;
      L.startOf = function($, m) {
        if (!this.$x || !this.$x.$timezone)
          return T.call(this, $, m);
        var l = M(this.format("YYYY-MM-DD HH:mm:ss:SSS"));
        return T.call(l, $, m).tz(this.$x.$timezone, !0);
      }, M.tz = function($, m, l) {
        var r = l && m, c = l || m || x, w = _(+M(), c);
        if (typeof $ != "string")
          return M($).tz(c);
        var v = function(b, H, N) {
          var h = b - 60 * H * 1e3, o = _(h, N);
          if (H === o)
            return [h, H];
          var Z = _(h -= 60 * (o - H) * 1e3, N);
          return o === Z ? [h, o] : [b - 60 * Math.min(o, Z) * 1e3, Math.max(o, Z)];
        }(M.utc($, r).valueOf(), w, c), g = v[0], U = v[1], y = M(g).utcOffset(U);
        return y.$x.$timezone = c, y;
      }, M.tz.guess = function() {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
      }, M.tz.setDefault = function($) {
        x = $;
      };
    };
  });
})(rt);
const it = Q;
R.extend(nt);
R.extend(it);
function st(p, I = "DD-MM-YYYY") {
  return p === "" ? "" : R(p).tz("Indian/Maldives").format(I);
}
function ut(p, I) {
  const z = typeof p == "string" ? Number(p.replace(/,/g, "")) : p;
  if (isNaN(z))
    return null;
  const O = (I == null ? void 0 : I.decimalPoints) || 2;
  return z.toLocaleString("en-US", {
    minimumFractionDigits: O,
    maximumFractionDigits: O
  });
}
export {
  ut as a,
  K as c,
  R as d,
  st as f,
  it as t,
  nt as u
};
