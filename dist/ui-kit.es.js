import { openBlock as p, createElementBlock as d, createElementVNode as r, defineComponent as z, ref as V, toRefs as $e, watch as Q, createVNode as M, unref as C, withCtx as j, renderSlot as G, createBlock as q, resolveDynamicComponent as ve, createCommentVNode as $, computed as B, toDisplayString as x, onMounted as X, onBeforeUnmount as ko, onUnmounted as ae, normalizeClass as L, withDirectives as Pe, isRef as Ll, withKeys as Tl, vModelText as xt, vShow as Vt, cloneVNode as Dl, h as ee, Fragment as N, inject as fe, provide as he, watchEffect as de, Teleport as kt, reactive as El, shallowRef as $s, nextTick as Co, toRaw as Re, renderList as K, Transition as dt, withModifiers as oe, onBeforeMount as zl, onBeforeUpdate as Bl, onUpdated as So, normalizeProps as nt, guardReactiveProps as at, normalizeStyle as Po, mergeProps as Te, pushScopeId as Al, popScopeId as Il, withScopeId as jl, markRaw as Rl, shallowReactive as Fl, resolveComponent as xs, resolveDirective as Nl, toHandlers as Hl, createTextVNode as te, createStaticVNode as ql } from "vue";
import { f as es, c as Yl, d as le, u as Wl, t as Ul, a as Zl } from "./FormatDate-7fbb31e2.mjs";
function Gl(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
    })
  ]);
}
function Kl(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
    })
  ]);
}
function Xl(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
    })
  ]);
}
function Ql(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    })
  ]);
}
function Jl(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
    })
  ]);
}
function en(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
    })
  ]);
}
function tn(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
    })
  ]);
}
function on(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  ]);
}
function Vs(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 19.5L8.25 12l7.5-7.5"
    })
  ]);
}
function ks(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 4.5l7.5 7.5-7.5 7.5"
    })
  ]);
}
function sn(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
    })
  ]);
}
function co(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
    })
  ]);
}
function ln(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
    }),
    r("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    })
  ]);
}
function nn(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
    })
  ]);
}
function an(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
    })
  ]);
}
function Oo(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    })
  ]);
}
function Cs(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
    })
  ]);
}
function rn(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
    })
  ]);
}
function pn(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
    })
  ]);
}
function un(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
    })
  ]);
}
function ts(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
    })
  ]);
}
function Ht(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6 18L18 6M6 6l12 12"
    })
  ]);
}
function dn(e) {
  return { all: e = e || /* @__PURE__ */ new Map(), on: function(t, o) {
    var s = e.get(t);
    s ? s.push(o) : e.set(t, [o]);
  }, off: function(t, o) {
    var s = e.get(t);
    s && (o ? s.splice(s.indexOf(o) >>> 0, 1) : e.set(t, []));
  }, emit: function(t, o) {
    var s = e.get(t);
    s && s.slice().map(function(l) {
      l(o);
    }), (s = e.get("*")) && s.slice().map(function(l) {
      l(t, o);
    });
  } };
}
const st = dn(), cn = { class: "po-bg-mpao-blue po-fixed po-top-0 po-left-0 po-right-0 po-w-full po-z-50 po-flex" }, fn = { class: "po-shrink-0 po-px-3 po-pt-3" }, vn = { class: "po-mx-auto po-max-w-full po-pr-4 po-grow sm:po-pr-4" }, hn = { class: "po-flex po-relative po-h-16 po-items-center po-justify-between po-space-x-12" }, mn = { class: "po-flex po-items-center po-space-x-3" }, bn = {
  key: 0,
  class: "po-block po-w-6 po-text-slate-100 md:po-hidden",
  role: "button"
}, gn = {
  name: "PoTopBar"
}, J4 = /* @__PURE__ */ z({
  ...gn,
  props: {
    currentQuery: { default: "" },
    appName: { default: "Pension App" },
    hasSearch: { type: Boolean, default: !0 },
    showSearchTray: { type: Boolean, default: !1 },
    appList: { default: null },
    notifications: { default: null },
    hasNewNotifications: { type: Boolean, default: !1 },
    userObject: { default: null },
    avatar: { default: "" },
    logo: { default: "" },
    appIcon: { default: null }
  },
  emits: ["query", "profileSwitcherClick", "onSearchClear"],
  setup(e, { emit: t }) {
    const o = e, s = V(""), l = V(""), n = V(!0), { avatar: a, logo: i } = $e(o);
    Q(a, () => {
      s.value = a.value;
    }), Q(i, () => {
      l.value = i.value;
    });
    function u(_) {
      t("profileSwitcherClick", _);
    }
    function f(_) {
      t("query", _);
    }
    function h(_) {
      t("onSearchClear", _);
    }
    function w() {
      n.value = !n.value, st.emit("sidebarOpen", n.value);
    }
    return (_, g) => (p(), d("nav", cn, [
      r("div", fn, [
        r("button", {
          for: "sidebar-drawer-toggle",
          role: "button",
          class: "genie-effect po-flex po-items-center po-justify-center po-bg-white/10 po-rounded-full po-w-10 po-h-10 po-select-none po-text-slate-100",
          onClick: w
        }, [
          M(C(Ql), { class: "po-w-6 po-fill-current" })
        ])
      ]),
      r("div", vn, [
        r("div", hn, [
          M(C(kn), { "app-name": _.appName }, {
            icon: j(() => [
              G(_.$slots, "appIcon", {}, () => [
                _.appIcon ? (p(), q(ve(_.appIcon), { key: 0 })) : $("", !0)
              ])
            ]),
            _: 3
          }, 8, ["app-name"]),
          _.hasSearch ? (p(), q(C(Da), {
            key: 0,
            onQuery: f,
            onOnClear: h,
            "current-query": _.currentQuery,
            "show-tray": _.showSearchTray
          }, {
            default: j(() => [
              G(_.$slots, "searchTray")
            ]),
            _: 3
          }, 8, ["current-query", "show-tray"])) : $("", !0),
          r("div", mn, [
            _.hasSearch ? (p(), d("span", bn, [
              M(C(Oo), { class: "po-stroke-current" })
            ])) : $("", !0),
            M(C(Gr), {
              notifications: _.notifications,
              "has-new-notifications": _.hasNewNotifications
            }, null, 8, ["notifications", "has-new-notifications"]),
            M(C(Ar), {
              "app-list": _.appList,
              "open-in-new-tab": !0
            }, null, 8, ["app-list"]),
            M(C(_i), {
              "user-object": _.userObject,
              avatar: s.value,
              logo: l.value,
              onButtonClick: u
            }, null, 8, ["user-object", "avatar", "logo"])
          ])
        ])
      ])
    ]));
  }
}), yn = { class: "po-flex po-items-center po-justify-center po-space-x-3" }, wn = { class: "po-w-8 po-text-slate-100 app-icon" }, _n = { class: "po-font-light po-text-lg po-text-slate-100" }, $n = { class: "po-hidden md:po-block" }, xn = { class: "po-block md:po-hidden" }, Vn = {
  name: "PoAppIcon"
}, kn = /* @__PURE__ */ z({
  ...Vn,
  props: {
    appName: { default: "App Name" }
  },
  setup(e) {
    const t = e, o = B(() => {
      if (!t.appName)
        return "";
      const s = t.appName.match(/\b[A-Z]/g);
      if (!s)
        return "";
      let l = s.join("");
      return l.length === 1 ? t.appName.substring(0, 3) : l;
    });
    return (s, l) => (p(), d("div", yn, [
      r("div", wn, [
        G(s.$slots, "icon")
      ]),
      r("span", _n, [
        r("span", $n, x(s.appName), 1),
        r("span", xn, x(o.value), 1)
      ])
    ]));
  }
});
var me = "top", ke = "bottom", Ce = "right", be = "left", Mo = "auto", Ct = [me, ke, Ce, be], rt = "start", _t = "end", Cn = "clippingParents", Ss = "viewport", mt = "popper", Sn = "reference", os = /* @__PURE__ */ Ct.reduce(function(e, t) {
  return e.concat([t + "-" + rt, t + "-" + _t]);
}, []), Ps = /* @__PURE__ */ [].concat(Ct, [Mo]).reduce(function(e, t) {
  return e.concat([t, t + "-" + rt, t + "-" + _t]);
}, []), Pn = "beforeRead", On = "read", Mn = "afterRead", Ln = "beforeMain", Tn = "main", Dn = "afterMain", En = "beforeWrite", zn = "write", Bn = "afterWrite", An = [Pn, On, Mn, Ln, Tn, Dn, En, zn, Bn];
function Ee(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function _e(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function tt(e) {
  var t = _e(e).Element;
  return e instanceof t || e instanceof Element;
}
function Ve(e) {
  var t = _e(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Lo(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = _e(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function In(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(o) {
    var s = t.styles[o] || {}, l = t.attributes[o] || {}, n = t.elements[o];
    !Ve(n) || !Ee(n) || (Object.assign(n.style, s), Object.keys(l).forEach(function(a) {
      var i = l[a];
      i === !1 ? n.removeAttribute(a) : n.setAttribute(a, i === !0 ? "" : i);
    }));
  });
}
function jn(e) {
  var t = e.state, o = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, o.popper), t.styles = o, t.elements.arrow && Object.assign(t.elements.arrow.style, o.arrow), function() {
    Object.keys(t.elements).forEach(function(s) {
      var l = t.elements[s], n = t.attributes[s] || {}, a = Object.keys(t.styles.hasOwnProperty(s) ? t.styles[s] : o[s]), i = a.reduce(function(u, f) {
        return u[f] = "", u;
      }, {});
      !Ve(l) || !Ee(l) || (Object.assign(l.style, i), Object.keys(n).forEach(function(u) {
        l.removeAttribute(u);
      }));
    });
  };
}
const Rn = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: In,
  effect: jn,
  requires: ["computeStyles"]
};
function De(e) {
  return e.split("-")[0];
}
var Je = Math.max, Nt = Math.min, it = Math.round;
function fo() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Os() {
  return !/^((?!chrome|android).)*safari/i.test(fo());
}
function pt(e, t, o) {
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  var s = e.getBoundingClientRect(), l = 1, n = 1;
  t && Ve(e) && (l = e.offsetWidth > 0 && it(s.width) / e.offsetWidth || 1, n = e.offsetHeight > 0 && it(s.height) / e.offsetHeight || 1);
  var a = tt(e) ? _e(e) : window, i = a.visualViewport, u = !Os() && o, f = (s.left + (u && i ? i.offsetLeft : 0)) / l, h = (s.top + (u && i ? i.offsetTop : 0)) / n, w = s.width / l, _ = s.height / n;
  return {
    width: w,
    height: _,
    top: h,
    right: f + w,
    bottom: h + _,
    left: f,
    x: f,
    y: h
  };
}
function To(e) {
  var t = pt(e), o = e.offsetWidth, s = e.offsetHeight;
  return Math.abs(t.width - o) <= 1 && (o = t.width), Math.abs(t.height - s) <= 1 && (s = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: o,
    height: s
  };
}
function Ms(e, t) {
  var o = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (o && Lo(o)) {
    var s = t;
    do {
      if (s && e.isSameNode(s))
        return !0;
      s = s.parentNode || s.host;
    } while (s);
  }
  return !1;
}
function Be(e) {
  return _e(e).getComputedStyle(e);
}
function Fn(e) {
  return ["table", "td", "th"].indexOf(Ee(e)) >= 0;
}
function Ye(e) {
  return ((tt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function qt(e) {
  return Ee(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Lo(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Ye(e)
  );
}
function ss(e) {
  return !Ve(e) || // https://github.com/popperjs/popper-core/issues/837
  Be(e).position === "fixed" ? null : e.offsetParent;
}
function Nn(e) {
  var t = /firefox/i.test(fo()), o = /Trident/i.test(fo());
  if (o && Ve(e)) {
    var s = Be(e);
    if (s.position === "fixed")
      return null;
  }
  var l = qt(e);
  for (Lo(l) && (l = l.host); Ve(l) && ["html", "body"].indexOf(Ee(l)) < 0; ) {
    var n = Be(l);
    if (n.transform !== "none" || n.perspective !== "none" || n.contain === "paint" || ["transform", "perspective"].indexOf(n.willChange) !== -1 || t && n.willChange === "filter" || t && n.filter && n.filter !== "none")
      return l;
    l = l.parentNode;
  }
  return null;
}
function St(e) {
  for (var t = _e(e), o = ss(e); o && Fn(o) && Be(o).position === "static"; )
    o = ss(o);
  return o && (Ee(o) === "html" || Ee(o) === "body" && Be(o).position === "static") ? t : o || Nn(e) || t;
}
function Do(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function yt(e, t, o) {
  return Je(e, Nt(t, o));
}
function Hn(e, t, o) {
  var s = yt(e, t, o);
  return s > o ? o : s;
}
function Ls() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ts(e) {
  return Object.assign({}, Ls(), e);
}
function Ds(e, t) {
  return t.reduce(function(o, s) {
    return o[s] = e, o;
  }, {});
}
var qn = function(t, o) {
  return t = typeof t == "function" ? t(Object.assign({}, o.rects, {
    placement: o.placement
  })) : t, Ts(typeof t != "number" ? t : Ds(t, Ct));
};
function Yn(e) {
  var t, o = e.state, s = e.name, l = e.options, n = o.elements.arrow, a = o.modifiersData.popperOffsets, i = De(o.placement), u = Do(i), f = [be, Ce].indexOf(i) >= 0, h = f ? "height" : "width";
  if (!(!n || !a)) {
    var w = qn(l.padding, o), _ = To(n), g = u === "y" ? me : be, b = u === "y" ? ke : Ce, c = o.rects.reference[h] + o.rects.reference[u] - a[u] - o.rects.popper[h], v = a[u] - o.rects.reference[u], m = St(n), y = m ? u === "y" ? m.clientHeight || 0 : m.clientWidth || 0 : 0, P = c / 2 - v / 2, k = w[g], A = y - _[h] - w[b], O = y / 2 - _[h] / 2 + P, S = yt(k, O, A), D = u;
    o.modifiersData[s] = (t = {}, t[D] = S, t.centerOffset = S - O, t);
  }
}
function Wn(e) {
  var t = e.state, o = e.options, s = o.element, l = s === void 0 ? "[data-popper-arrow]" : s;
  l != null && (typeof l == "string" && (l = t.elements.popper.querySelector(l), !l) || Ms(t.elements.popper, l) && (t.elements.arrow = l));
}
const Un = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Yn,
  effect: Wn,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ut(e) {
  return e.split("-")[1];
}
var Zn = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Gn(e, t) {
  var o = e.x, s = e.y, l = t.devicePixelRatio || 1;
  return {
    x: it(o * l) / l || 0,
    y: it(s * l) / l || 0
  };
}
function ls(e) {
  var t, o = e.popper, s = e.popperRect, l = e.placement, n = e.variation, a = e.offsets, i = e.position, u = e.gpuAcceleration, f = e.adaptive, h = e.roundOffsets, w = e.isFixed, _ = a.x, g = _ === void 0 ? 0 : _, b = a.y, c = b === void 0 ? 0 : b, v = typeof h == "function" ? h({
    x: g,
    y: c
  }) : {
    x: g,
    y: c
  };
  g = v.x, c = v.y;
  var m = a.hasOwnProperty("x"), y = a.hasOwnProperty("y"), P = be, k = me, A = window;
  if (f) {
    var O = St(o), S = "clientHeight", D = "clientWidth";
    if (O === _e(o) && (O = Ye(o), Be(O).position !== "static" && i === "absolute" && (S = "scrollHeight", D = "scrollWidth")), O = O, l === me || (l === be || l === Ce) && n === _t) {
      k = ke;
      var T = w && O === A && A.visualViewport ? A.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        O[S]
      );
      c -= T - s.height, c *= u ? 1 : -1;
    }
    if (l === be || (l === me || l === ke) && n === _t) {
      P = Ce;
      var E = w && O === A && A.visualViewport ? A.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        O[D]
      );
      g -= E - s.width, g *= u ? 1 : -1;
    }
  }
  var W = Object.assign({
    position: i
  }, f && Zn), U = h === !0 ? Gn({
    x: g,
    y: c
  }, _e(o)) : {
    x: g,
    y: c
  };
  if (g = U.x, c = U.y, u) {
    var R;
    return Object.assign({}, W, (R = {}, R[k] = y ? "0" : "", R[P] = m ? "0" : "", R.transform = (A.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + c + "px)" : "translate3d(" + g + "px, " + c + "px, 0)", R));
  }
  return Object.assign({}, W, (t = {}, t[k] = y ? c + "px" : "", t[P] = m ? g + "px" : "", t.transform = "", t));
}
function Kn(e) {
  var t = e.state, o = e.options, s = o.gpuAcceleration, l = s === void 0 ? !0 : s, n = o.adaptive, a = n === void 0 ? !0 : n, i = o.roundOffsets, u = i === void 0 ? !0 : i, f = {
    placement: De(t.placement),
    variation: ut(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: l,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ls(Object.assign({}, f, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: u
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ls(Object.assign({}, f, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: u
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const Xn = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Kn,
  data: {}
};
var Bt = {
  passive: !0
};
function Qn(e) {
  var t = e.state, o = e.instance, s = e.options, l = s.scroll, n = l === void 0 ? !0 : l, a = s.resize, i = a === void 0 ? !0 : a, u = _e(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return n && f.forEach(function(h) {
    h.addEventListener("scroll", o.update, Bt);
  }), i && u.addEventListener("resize", o.update, Bt), function() {
    n && f.forEach(function(h) {
      h.removeEventListener("scroll", o.update, Bt);
    }), i && u.removeEventListener("resize", o.update, Bt);
  };
}
const Jn = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Qn,
  data: {}
};
var ea = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function jt(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return ea[t];
  });
}
var ta = {
  start: "end",
  end: "start"
};
function ns(e) {
  return e.replace(/start|end/g, function(t) {
    return ta[t];
  });
}
function Eo(e) {
  var t = _e(e), o = t.pageXOffset, s = t.pageYOffset;
  return {
    scrollLeft: o,
    scrollTop: s
  };
}
function zo(e) {
  return pt(Ye(e)).left + Eo(e).scrollLeft;
}
function oa(e, t) {
  var o = _e(e), s = Ye(e), l = o.visualViewport, n = s.clientWidth, a = s.clientHeight, i = 0, u = 0;
  if (l) {
    n = l.width, a = l.height;
    var f = Os();
    (f || !f && t === "fixed") && (i = l.offsetLeft, u = l.offsetTop);
  }
  return {
    width: n,
    height: a,
    x: i + zo(e),
    y: u
  };
}
function sa(e) {
  var t, o = Ye(e), s = Eo(e), l = (t = e.ownerDocument) == null ? void 0 : t.body, n = Je(o.scrollWidth, o.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0), a = Je(o.scrollHeight, o.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0), i = -s.scrollLeft + zo(e), u = -s.scrollTop;
  return Be(l || o).direction === "rtl" && (i += Je(o.clientWidth, l ? l.clientWidth : 0) - n), {
    width: n,
    height: a,
    x: i,
    y: u
  };
}
function Bo(e) {
  var t = Be(e), o = t.overflow, s = t.overflowX, l = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + l + s);
}
function Es(e) {
  return ["html", "body", "#document"].indexOf(Ee(e)) >= 0 ? e.ownerDocument.body : Ve(e) && Bo(e) ? e : Es(qt(e));
}
function wt(e, t) {
  var o;
  t === void 0 && (t = []);
  var s = Es(e), l = s === ((o = e.ownerDocument) == null ? void 0 : o.body), n = _e(s), a = l ? [n].concat(n.visualViewport || [], Bo(s) ? s : []) : s, i = t.concat(a);
  return l ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(wt(qt(a)))
  );
}
function vo(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function la(e, t) {
  var o = pt(e, !1, t === "fixed");
  return o.top = o.top + e.clientTop, o.left = o.left + e.clientLeft, o.bottom = o.top + e.clientHeight, o.right = o.left + e.clientWidth, o.width = e.clientWidth, o.height = e.clientHeight, o.x = o.left, o.y = o.top, o;
}
function as(e, t, o) {
  return t === Ss ? vo(oa(e, o)) : tt(t) ? la(t, o) : vo(sa(Ye(e)));
}
function na(e) {
  var t = wt(qt(e)), o = ["absolute", "fixed"].indexOf(Be(e).position) >= 0, s = o && Ve(e) ? St(e) : e;
  return tt(s) ? t.filter(function(l) {
    return tt(l) && Ms(l, s) && Ee(l) !== "body";
  }) : [];
}
function aa(e, t, o, s) {
  var l = t === "clippingParents" ? na(e) : [].concat(t), n = [].concat(l, [o]), a = n[0], i = n.reduce(function(u, f) {
    var h = as(e, f, s);
    return u.top = Je(h.top, u.top), u.right = Nt(h.right, u.right), u.bottom = Nt(h.bottom, u.bottom), u.left = Je(h.left, u.left), u;
  }, as(e, a, s));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function zs(e) {
  var t = e.reference, o = e.element, s = e.placement, l = s ? De(s) : null, n = s ? ut(s) : null, a = t.x + t.width / 2 - o.width / 2, i = t.y + t.height / 2 - o.height / 2, u;
  switch (l) {
    case me:
      u = {
        x: a,
        y: t.y - o.height
      };
      break;
    case ke:
      u = {
        x: a,
        y: t.y + t.height
      };
      break;
    case Ce:
      u = {
        x: t.x + t.width,
        y: i
      };
      break;
    case be:
      u = {
        x: t.x - o.width,
        y: i
      };
      break;
    default:
      u = {
        x: t.x,
        y: t.y
      };
  }
  var f = l ? Do(l) : null;
  if (f != null) {
    var h = f === "y" ? "height" : "width";
    switch (n) {
      case rt:
        u[f] = u[f] - (t[h] / 2 - o[h] / 2);
        break;
      case _t:
        u[f] = u[f] + (t[h] / 2 - o[h] / 2);
        break;
    }
  }
  return u;
}
function $t(e, t) {
  t === void 0 && (t = {});
  var o = t, s = o.placement, l = s === void 0 ? e.placement : s, n = o.strategy, a = n === void 0 ? e.strategy : n, i = o.boundary, u = i === void 0 ? Cn : i, f = o.rootBoundary, h = f === void 0 ? Ss : f, w = o.elementContext, _ = w === void 0 ? mt : w, g = o.altBoundary, b = g === void 0 ? !1 : g, c = o.padding, v = c === void 0 ? 0 : c, m = Ts(typeof v != "number" ? v : Ds(v, Ct)), y = _ === mt ? Sn : mt, P = e.rects.popper, k = e.elements[b ? y : _], A = aa(tt(k) ? k : k.contextElement || Ye(e.elements.popper), u, h, a), O = pt(e.elements.reference), S = zs({
    reference: O,
    element: P,
    strategy: "absolute",
    placement: l
  }), D = vo(Object.assign({}, P, S)), T = _ === mt ? D : O, E = {
    top: A.top - T.top + m.top,
    bottom: T.bottom - A.bottom + m.bottom,
    left: A.left - T.left + m.left,
    right: T.right - A.right + m.right
  }, W = e.modifiersData.offset;
  if (_ === mt && W) {
    var U = W[l];
    Object.keys(E).forEach(function(R) {
      var F = [Ce, ke].indexOf(R) >= 0 ? 1 : -1, Y = [me, ke].indexOf(R) >= 0 ? "y" : "x";
      E[R] += U[Y] * F;
    });
  }
  return E;
}
function ra(e, t) {
  t === void 0 && (t = {});
  var o = t, s = o.placement, l = o.boundary, n = o.rootBoundary, a = o.padding, i = o.flipVariations, u = o.allowedAutoPlacements, f = u === void 0 ? Ps : u, h = ut(s), w = h ? i ? os : os.filter(function(b) {
    return ut(b) === h;
  }) : Ct, _ = w.filter(function(b) {
    return f.indexOf(b) >= 0;
  });
  _.length === 0 && (_ = w);
  var g = _.reduce(function(b, c) {
    return b[c] = $t(e, {
      placement: c,
      boundary: l,
      rootBoundary: n,
      padding: a
    })[De(c)], b;
  }, {});
  return Object.keys(g).sort(function(b, c) {
    return g[b] - g[c];
  });
}
function ia(e) {
  if (De(e) === Mo)
    return [];
  var t = jt(e);
  return [ns(e), t, ns(t)];
}
function pa(e) {
  var t = e.state, o = e.options, s = e.name;
  if (!t.modifiersData[s]._skip) {
    for (var l = o.mainAxis, n = l === void 0 ? !0 : l, a = o.altAxis, i = a === void 0 ? !0 : a, u = o.fallbackPlacements, f = o.padding, h = o.boundary, w = o.rootBoundary, _ = o.altBoundary, g = o.flipVariations, b = g === void 0 ? !0 : g, c = o.allowedAutoPlacements, v = t.options.placement, m = De(v), y = m === v, P = u || (y || !b ? [jt(v)] : ia(v)), k = [v].concat(P).reduce(function(Me, Le) {
      return Me.concat(De(Le) === Mo ? ra(t, {
        placement: Le,
        boundary: h,
        rootBoundary: w,
        padding: f,
        flipVariations: b,
        allowedAutoPlacements: c
      }) : Le);
    }, []), A = t.rects.reference, O = t.rects.popper, S = /* @__PURE__ */ new Map(), D = !0, T = k[0], E = 0; E < k.length; E++) {
      var W = k[E], U = De(W), R = ut(W) === rt, F = [me, ke].indexOf(U) >= 0, Y = F ? "width" : "height", H = $t(t, {
        placement: W,
        boundary: h,
        rootBoundary: w,
        altBoundary: _,
        padding: f
      }), Z = F ? R ? Ce : be : R ? ke : me;
      A[Y] > O[Y] && (Z = jt(Z));
      var ie = jt(Z), J = [];
      if (n && J.push(H[U] <= 0), i && J.push(H[Z] <= 0, H[ie] <= 0), J.every(function(Me) {
        return Me;
      })) {
        T = W, D = !1;
        break;
      }
      S.set(W, J);
    }
    if (D)
      for (var xe = b ? 3 : 1, ze = function(Le) {
        var We = k.find(function(Ue) {
          var Se = S.get(Ue);
          if (Se)
            return Se.slice(0, Le).every(function(Ze) {
              return Ze;
            });
        });
        if (We)
          return T = We, "break";
      }, Oe = xe; Oe > 0; Oe--) {
        var Ie = ze(Oe);
        if (Ie === "break")
          break;
      }
    t.placement !== T && (t.modifiersData[s]._skip = !0, t.placement = T, t.reset = !0);
  }
}
const ua = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: pa,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function rs(e, t, o) {
  return o === void 0 && (o = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - o.y,
    right: e.right - t.width + o.x,
    bottom: e.bottom - t.height + o.y,
    left: e.left - t.width - o.x
  };
}
function is(e) {
  return [me, Ce, ke, be].some(function(t) {
    return e[t] >= 0;
  });
}
function da(e) {
  var t = e.state, o = e.name, s = t.rects.reference, l = t.rects.popper, n = t.modifiersData.preventOverflow, a = $t(t, {
    elementContext: "reference"
  }), i = $t(t, {
    altBoundary: !0
  }), u = rs(a, s), f = rs(i, l, n), h = is(u), w = is(f);
  t.modifiersData[o] = {
    referenceClippingOffsets: u,
    popperEscapeOffsets: f,
    isReferenceHidden: h,
    hasPopperEscaped: w
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": h,
    "data-popper-escaped": w
  });
}
const ca = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: da
};
function fa(e, t, o) {
  var s = De(e), l = [be, me].indexOf(s) >= 0 ? -1 : 1, n = typeof o == "function" ? o(Object.assign({}, t, {
    placement: e
  })) : o, a = n[0], i = n[1];
  return a = a || 0, i = (i || 0) * l, [be, Ce].indexOf(s) >= 0 ? {
    x: i,
    y: a
  } : {
    x: a,
    y: i
  };
}
function va(e) {
  var t = e.state, o = e.options, s = e.name, l = o.offset, n = l === void 0 ? [0, 0] : l, a = Ps.reduce(function(h, w) {
    return h[w] = fa(w, t.rects, n), h;
  }, {}), i = a[t.placement], u = i.x, f = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += f), t.modifiersData[s] = a;
}
const ha = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: va
};
function ma(e) {
  var t = e.state, o = e.name;
  t.modifiersData[o] = zs({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const ba = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: ma,
  data: {}
};
function ga(e) {
  return e === "x" ? "y" : "x";
}
function ya(e) {
  var t = e.state, o = e.options, s = e.name, l = o.mainAxis, n = l === void 0 ? !0 : l, a = o.altAxis, i = a === void 0 ? !1 : a, u = o.boundary, f = o.rootBoundary, h = o.altBoundary, w = o.padding, _ = o.tether, g = _ === void 0 ? !0 : _, b = o.tetherOffset, c = b === void 0 ? 0 : b, v = $t(t, {
    boundary: u,
    rootBoundary: f,
    padding: w,
    altBoundary: h
  }), m = De(t.placement), y = ut(t.placement), P = !y, k = Do(m), A = ga(k), O = t.modifiersData.popperOffsets, S = t.rects.reference, D = t.rects.popper, T = typeof c == "function" ? c(Object.assign({}, t.rects, {
    placement: t.placement
  })) : c, E = typeof T == "number" ? {
    mainAxis: T,
    altAxis: T
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, T), W = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, U = {
    x: 0,
    y: 0
  };
  if (O) {
    if (n) {
      var R, F = k === "y" ? me : be, Y = k === "y" ? ke : Ce, H = k === "y" ? "height" : "width", Z = O[k], ie = Z + v[F], J = Z - v[Y], xe = g ? -D[H] / 2 : 0, ze = y === rt ? S[H] : D[H], Oe = y === rt ? -D[H] : -S[H], Ie = t.elements.arrow, Me = g && Ie ? To(Ie) : {
        width: 0,
        height: 0
      }, Le = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ls(), We = Le[F], Ue = Le[Y], Se = yt(0, S[H], Me[H]), Ze = P ? S[H] / 2 - xe - Se - We - E.mainAxis : ze - Se - We - E.mainAxis, ct = P ? -S[H] / 2 + xe + Se + Ue + E.mainAxis : Oe + Se + Ue + E.mainAxis, je = t.elements.arrow && St(t.elements.arrow), ft = je ? k === "y" ? je.clientTop || 0 : je.clientLeft || 0 : 0, lt = (R = W == null ? void 0 : W[k]) != null ? R : 0, vt = Z + Ze - lt - ft, ht = Z + ct - lt, lo = yt(g ? Nt(ie, vt) : ie, Z, g ? Je(J, ht) : J);
      O[k] = lo, U[k] = lo - Z;
    }
    if (i) {
      var Uo, Ol = k === "x" ? me : be, Ml = k === "x" ? ke : Ce, Ge = O[A], zt = A === "y" ? "height" : "width", Zo = Ge + v[Ol], Go = Ge - v[Ml], no = [me, be].indexOf(m) !== -1, Ko = (Uo = W == null ? void 0 : W[A]) != null ? Uo : 0, Xo = no ? Zo : Ge - S[zt] - D[zt] - Ko + E.altAxis, Qo = no ? Ge + S[zt] + D[zt] - Ko - E.altAxis : Go, Jo = g && no ? Hn(Xo, Ge, Qo) : yt(g ? Xo : Zo, Ge, g ? Qo : Go);
      O[A] = Jo, U[A] = Jo - Ge;
    }
    t.modifiersData[s] = U;
  }
}
const wa = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: ya,
  requiresIfExists: ["offset"]
};
function _a(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function $a(e) {
  return e === _e(e) || !Ve(e) ? Eo(e) : _a(e);
}
function xa(e) {
  var t = e.getBoundingClientRect(), o = it(t.width) / e.offsetWidth || 1, s = it(t.height) / e.offsetHeight || 1;
  return o !== 1 || s !== 1;
}
function Va(e, t, o) {
  o === void 0 && (o = !1);
  var s = Ve(t), l = Ve(t) && xa(t), n = Ye(t), a = pt(e, l, o), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = {
    x: 0,
    y: 0
  };
  return (s || !s && !o) && ((Ee(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Bo(n)) && (i = $a(t)), Ve(t) ? (u = pt(t, !0), u.x += t.clientLeft, u.y += t.clientTop) : n && (u.x = zo(n))), {
    x: a.left + i.scrollLeft - u.x,
    y: a.top + i.scrollTop - u.y,
    width: a.width,
    height: a.height
  };
}
function ka(e) {
  var t = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), s = [];
  e.forEach(function(n) {
    t.set(n.name, n);
  });
  function l(n) {
    o.add(n.name);
    var a = [].concat(n.requires || [], n.requiresIfExists || []);
    a.forEach(function(i) {
      if (!o.has(i)) {
        var u = t.get(i);
        u && l(u);
      }
    }), s.push(n);
  }
  return e.forEach(function(n) {
    o.has(n.name) || l(n);
  }), s;
}
function Ca(e) {
  var t = ka(e);
  return An.reduce(function(o, s) {
    return o.concat(t.filter(function(l) {
      return l.phase === s;
    }));
  }, []);
}
function Sa(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(o) {
      Promise.resolve().then(function() {
        t = void 0, o(e());
      });
    })), t;
  };
}
function Pa(e) {
  var t = e.reduce(function(o, s) {
    var l = o[s.name];
    return o[s.name] = l ? Object.assign({}, l, s, {
      options: Object.assign({}, l.options, s.options),
      data: Object.assign({}, l.data, s.data)
    }) : s, o;
  }, {});
  return Object.keys(t).map(function(o) {
    return t[o];
  });
}
var ps = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function us() {
  for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
    t[o] = arguments[o];
  return !t.some(function(s) {
    return !(s && typeof s.getBoundingClientRect == "function");
  });
}
function Oa(e) {
  e === void 0 && (e = {});
  var t = e, o = t.defaultModifiers, s = o === void 0 ? [] : o, l = t.defaultOptions, n = l === void 0 ? ps : l;
  return function(i, u, f) {
    f === void 0 && (f = n);
    var h = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, ps, n),
      modifiersData: {},
      elements: {
        reference: i,
        popper: u
      },
      attributes: {},
      styles: {}
    }, w = [], _ = !1, g = {
      state: h,
      setOptions: function(m) {
        var y = typeof m == "function" ? m(h.options) : m;
        c(), h.options = Object.assign({}, n, h.options, y), h.scrollParents = {
          reference: tt(i) ? wt(i) : i.contextElement ? wt(i.contextElement) : [],
          popper: wt(u)
        };
        var P = Ca(Pa([].concat(s, h.options.modifiers)));
        return h.orderedModifiers = P.filter(function(k) {
          return k.enabled;
        }), b(), g.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!_) {
          var m = h.elements, y = m.reference, P = m.popper;
          if (us(y, P)) {
            h.rects = {
              reference: Va(y, St(P), h.options.strategy === "fixed"),
              popper: To(P)
            }, h.reset = !1, h.placement = h.options.placement, h.orderedModifiers.forEach(function(E) {
              return h.modifiersData[E.name] = Object.assign({}, E.data);
            });
            for (var k = 0; k < h.orderedModifiers.length; k++) {
              if (h.reset === !0) {
                h.reset = !1, k = -1;
                continue;
              }
              var A = h.orderedModifiers[k], O = A.fn, S = A.options, D = S === void 0 ? {} : S, T = A.name;
              typeof O == "function" && (h = O({
                state: h,
                options: D,
                name: T,
                instance: g
              }) || h);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Sa(function() {
        return new Promise(function(v) {
          g.forceUpdate(), v(h);
        });
      }),
      destroy: function() {
        c(), _ = !0;
      }
    };
    if (!us(i, u))
      return g;
    g.setOptions(f).then(function(v) {
      !_ && f.onFirstUpdate && f.onFirstUpdate(v);
    });
    function b() {
      h.orderedModifiers.forEach(function(v) {
        var m = v.name, y = v.options, P = y === void 0 ? {} : y, k = v.effect;
        if (typeof k == "function") {
          var A = k({
            state: h,
            name: m,
            instance: g,
            options: P
          }), O = function() {
          };
          w.push(A || O);
        }
      });
    }
    function c() {
      w.forEach(function(v) {
        return v();
      }), w = [];
    }
    return g;
  };
}
var Ma = [Jn, ba, Xn, Rn, ha, ua, wa, Un, ca], Pt = /* @__PURE__ */ Oa({
  defaultModifiers: Ma
});
function Ot(e, t) {
  if (!e)
    return;
  const o = (s) => {
    s.target !== e.value && s.composedPath().includes(e.value) || typeof t == "function" && t();
  };
  return X(() => {
    window.addEventListener("click", o);
  }), ko(() => {
    window.removeEventListener("click", o);
  }), { listener: o };
}
const La = ["placeholder", "onKeyup"], Ta = {
  name: "PoSearchBar"
}, Da = /* @__PURE__ */ z({
  ...Ta,
  props: {
    placeholder: { default: "Search" },
    currentQuery: { default: "" },
    showTray: { type: Boolean, default: !1 }
  },
  emits: ["query", "onClear"],
  setup(e, { emit: t }) {
    const o = e, s = V(!1), l = V(null), n = V(), a = V(), i = V({
      viewStartIdx: 0,
      viewEndIdx: 0,
      visibleStartIdx: 0,
      visibleEndIdx: 0
    });
    let u = V(""), f;
    const h = (b) => {
      t("query", u.value);
    };
    function w() {
      t("query", u.value);
    }
    X(() => {
      o.showTray && setTimeout(() => {
        f = Pt(n.value, a.value, {
          placement: "bottom-end",
          strategy: "fixed",
          modifiers: [
            {
              name: "sameWidth",
              enabled: !0,
              fn: ({ state: b }) => {
                b.styles.popper.width = `${b.rects.reference.width}px`;
              },
              phase: "beforeWrite",
              requires: ["computeStyles"]
            }
          ]
        });
      }, 320);
    }), Q(u, async (b, c) => {
      b === "" && t("onClear", !0);
    }), Ot(l, () => {
      o.showTray && (s.value = !1);
    }), st.on("sidebarOpen", (b) => {
      setTimeout(() => {
        f && o.showTray && f.update();
      }, 320);
    }), ae(() => {
      f && o.showTray && f.destroy();
    });
    function _(b, c, v, m) {
      i.value.viewStartIdx = b, i.value.viewEndIdx = c, i.value.visibleStartIdx = v, i.value.visibleEndIdx = m;
    }
    function g() {
      f && f.update();
    }
    return (b, c) => (p(), d("div", {
      class: "po-flex-grow po-hidden po-relative md:po-block",
      ref_key: "containerRef",
      ref: l
    }, [
      r("span", {
        class: L(["po-absolute po-top-[5px] po-right-[5px] po-text-xs po-rounded-lg po-px-4 po-py-2 po-cursor-pointer po-transition-colors po-duration-150 po-ease-out", [
          {
            "po-text-slate-200 po-bg-slate-500/60 hover:po-bg-slate-500": !b.showTray || !s.value
          },
          {
            "po-text-slate-400 po-bg-slate-200/60 hover:po-bg-slate-200": b.showTray && s.value
          },
          { "po-hidden": C(u) === "" }
        ]]),
        onClick: w
      }, "Search", 2),
      Pe(r("input", {
        "onUpdate:modelValue": c[0] || (c[0] = (v) => Ll(u) ? u.value = v : u = v),
        type: "text",
        ref_key: "mainSearchBox",
        ref: n,
        id: "main-search",
        placeholder: b.placeholder,
        onKeyup: Tl(h, ["enter"]),
        onFocus: c[1] || (c[1] = (v) => s.value = !0),
        autocomplete: "off",
        class: L(["peer/search po-border-transparent po-text-sm po-ring-0 po-outline-none focus:po-outline-none focus:po-ring-0 po-transition-colors po-ease-linear po-duration-100 po-block po-w-full po-pl-10 po-p-2.5 po-appearance-none hover:po-border-white/40", [
          {
            "po-rounded-md po-border focus:po-border-slate-400 po-bg-transparent po-text-slate-100 po-placeholder-white/60": !b.showTray || !s.value
          },
          {
            "po-rounded-t-md po-border-2 focus:po-border-white po-bg-white po-text-slate-600": b.showTray && s.value
          }
        ]])
      }, null, 42, La), [
        [xt, C(u)]
      ]),
      r("div", {
        class: L(["po-absolute po-inset-y-0 po-left-0 po-flex po-items-center po-pl-3 po-pointer-events-none po-transition-all po-ease-linear po-duration-100 po-origin-center peer-hover/search:po-scale-105", [
          {
            "po-text-white/50 peer-focus/search:po-text-white/50": !b.showTray || !s.value
          },
          {
            "po-text-black/30 peer-focus/search:po-text-black/30": b.showTray && s.value
          }
        ]])
      }, [
        M(C(Oo), { class: "po-w-5 po-h-5 po-stroke-current" })
      ], 2),
      Pe(r("div", {
        ref_key: "popper",
        ref: a,
        class: "po-absolute po-z-[51] po-mt-1 po-w-full po-rounded-b-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm",
        onResize: g,
        onUpdate: _
      }, [
        G(b.$slots, "default")
      ], 544), [
        [Vt, s.value && b.showTray]
      ])
    ], 512));
  }
});
function ce(e, t, ...o) {
  if (e in t) {
    let l = t[e];
    return typeof l == "function" ? l(...o) : l;
  }
  let s = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((l) => `"${l}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(s, ce), s;
}
var Ne = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Ne || {}), Fe = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Fe || {});
function se({ visible: e = !0, features: t = 0, ourProps: o, theirProps: s, ...l }) {
  var n;
  let a = As(s, o), i = Object.assign(l, { props: a });
  if (e || t & 2 && a.static)
    return ao(i);
  if (t & 1) {
    let u = (n = a.unmount) == null || n ? 0 : 1;
    return ce(u, { [0]() {
      return null;
    }, [1]() {
      return ao({ ...l, props: { ...a, hidden: !0, style: { display: "none" } } });
    } });
  }
  return ao(i);
}
function ao({ props: e, attrs: t, slots: o, slot: s, name: l }) {
  var n, a;
  let { as: i, ...u } = Yt(e, ["unmount", "static"]), f = (n = o.default) == null ? void 0 : n.call(o, s), h = {};
  if (s) {
    let w = !1, _ = [];
    for (let [g, b] of Object.entries(s))
      typeof b == "boolean" && (w = !0), b === !0 && _.push(g);
    w && (h["data-headlessui-state"] = _.join(" "));
  }
  if (i === "template") {
    if (f = Bs(f ?? []), Object.keys(u).length > 0 || Object.keys(t).length > 0) {
      let [w, ..._] = f ?? [];
      if (!Ea(w) || _.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${l} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(u).concat(Object.keys(t)).map((c) => c.trim()).filter((c, v, m) => m.indexOf(c) === v).sort((c, v) => c.localeCompare(v)).map((c) => `  - ${c}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((c) => `  - ${c}`).join(`
`)].join(`
`));
      let g = As((a = w.props) != null ? a : {}, u), b = Dl(w, g);
      for (let c in g)
        c.startsWith("on") && (b.props || (b.props = {}), b.props[c] = g[c]);
      return b;
    }
    return Array.isArray(f) && f.length === 1 ? f[0] : f;
  }
  return ee(i, Object.assign({}, u, h), { default: () => f });
}
function Bs(e) {
  return e.flatMap((t) => t.type === N ? Bs(t.children) : [t]);
}
function As(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, o = {};
  for (let s of e)
    for (let l in s)
      l.startsWith("on") && typeof s[l] == "function" ? (o[l] != null || (o[l] = []), o[l].push(s[l])) : t[l] = s[l];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(o).map((s) => [s, void 0])));
  for (let s in o)
    Object.assign(t, { [s](l, ...n) {
      let a = o[s];
      for (let i of a) {
        if (l instanceof Event && l.defaultPrevented)
          return;
        i(l, ...n);
      }
    } });
  return t;
}
function Is(e) {
  let t = Object.assign({}, e);
  for (let o in t)
    t[o] === void 0 && delete t[o];
  return t;
}
function Yt(e, t = []) {
  let o = Object.assign({}, e);
  for (let s of t)
    s in o && delete o[s];
  return o;
}
function Ea(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let za = 0;
function Ba() {
  return ++za;
}
function ue() {
  return Ba();
}
var pe = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(pe || {});
function I(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let js = Symbol("Context");
var re = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(re || {});
function Aa() {
  return Mt() !== null;
}
function Mt() {
  return fe(js, null);
}
function Rs(e) {
  he(js, e);
}
function ds(e, t) {
  if (e)
    return e;
  let o = t ?? "button";
  if (typeof o == "string" && o.toLowerCase() === "button")
    return "button";
}
function Fs(e, t) {
  let o = V(ds(e.value.type, e.value.as));
  return X(() => {
    o.value = ds(e.value.type, e.value.as);
  }), de(() => {
    var s;
    o.value || I(t) && I(t) instanceof HTMLButtonElement && !((s = I(t)) != null && s.hasAttribute("type")) && (o.value = "button");
  }), o;
}
var Ia = Object.defineProperty, ja = (e, t, o) => t in e ? Ia(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, cs = (e, t, o) => (ja(e, typeof t != "symbol" ? t + "" : t, o), o);
let Ra = class {
  constructor() {
    cs(this, "current", this.detect()), cs(this, "currentId", 0);
  }
  set(t) {
    this.current !== t && (this.currentId = 0, this.current = t);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
}, Lt = new Ra();
function we(e) {
  if (Lt.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = I(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
function Fa({ container: e, accept: t, walk: o, enabled: s }) {
  de(() => {
    let l = e.value;
    if (!l || s !== void 0 && !s.value)
      return;
    let n = we(e);
    if (!n)
      return;
    let a = Object.assign((u) => t(u), { acceptNode: t }), i = n.createTreeWalker(l, NodeFilter.SHOW_ELEMENT, a, !1);
    for (; i.nextNode(); )
      o(i.currentNode);
  });
}
let ho = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var ne = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ne || {}), ot = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(ot || {}), Na = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Na || {});
function Wt(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(ho)).sort((t, o) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (o.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Ao = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Ao || {});
function Ns(e, t = 0) {
  var o;
  return e === ((o = we(e)) == null ? void 0 : o.body) ? !1 : ce(t, { [0]() {
    return e.matches(ho);
  }, [1]() {
    let s = e;
    for (; s !== null; ) {
      if (s.matches(ho))
        return !0;
      s = s.parentElement;
    }
    return !1;
  } });
}
function et(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Ha = ["textarea", "input"].join(",");
function qa(e) {
  var t, o;
  return (o = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Ha)) != null ? o : !1;
}
function Hs(e, t = (o) => o) {
  return e.slice().sort((o, s) => {
    let l = t(o), n = t(s);
    if (l === null || n === null)
      return 0;
    let a = l.compareDocumentPosition(n);
    return a & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : a & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function ge(e, t, { sorted: o = !0, relativeTo: s = null, skipElements: l = [] } = {}) {
  var n;
  let a = (n = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? n : document, i = Array.isArray(e) ? o ? Hs(e) : e : Wt(e);
  l.length > 0 && i.length > 1 && (i = i.filter((b) => !l.includes(b))), s = s ?? a.activeElement;
  let u = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), f = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, i.indexOf(s)) - 1;
    if (t & 4)
      return Math.max(0, i.indexOf(s)) + 1;
    if (t & 8)
      return i.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), h = t & 32 ? { preventScroll: !0 } : {}, w = 0, _ = i.length, g;
  do {
    if (w >= _ || w + _ <= 0)
      return 0;
    let b = f + w;
    if (t & 16)
      b = (b + _) % _;
    else {
      if (b < 0)
        return 3;
      if (b >= _)
        return 1;
    }
    g = i[b], g == null || g.focus(h), w += u;
  } while (g !== a.activeElement);
  return t & 6 && qa(g) && g.select(), g.hasAttribute("tabindex") || g.setAttribute("tabindex", "0"), 2;
}
function ro(e, t, o) {
  Lt.isServer || de((s) => {
    document.addEventListener(e, t, o), s(() => document.removeEventListener(e, t, o));
  });
}
function qs(e, t, o = B(() => !0)) {
  function s(n, a) {
    if (!o.value || n.defaultPrevented)
      return;
    let i = a(n);
    if (i === null || !i.getRootNode().contains(i))
      return;
    let u = function f(h) {
      return typeof h == "function" ? f(h()) : Array.isArray(h) || h instanceof Set ? h : [h];
    }(e);
    for (let f of u) {
      if (f === null)
        continue;
      let h = f instanceof HTMLElement ? f : I(f);
      if (h != null && h.contains(i) || n.composed && n.composedPath().includes(h))
        return;
    }
    return !Ns(i, Ao.Loose) && i.tabIndex !== -1 && n.preventDefault(), t(n, i);
  }
  let l = V(null);
  ro("mousedown", (n) => {
    var a, i;
    o.value && (l.value = ((i = (a = n.composedPath) == null ? void 0 : a.call(n)) == null ? void 0 : i[0]) || n.target);
  }, !0), ro("click", (n) => {
    l.value && (s(n, () => l.value), l.value = null);
  }, !0), ro("blur", (n) => s(n, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Ae = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Ae || {});
let He = z({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: o }) {
  return () => {
    let { features: s, ...l } = e, n = { "aria-hidden": (s & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(s & 4) === 4 && (s & 2) !== 2 && { display: "none" } } };
    return se({ ourProps: n, theirProps: l, slot: {}, attrs: o, slots: t, name: "Hidden" });
  };
} });
function Ys(e = {}, t = null, o = []) {
  for (let [s, l] of Object.entries(e))
    Us(o, Ws(t, s), l);
  return o;
}
function Ws(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Us(e, t, o) {
  if (Array.isArray(o))
    for (let [s, l] of o.entries())
      Us(e, Ws(t, s.toString()), l);
  else
    o instanceof Date ? e.push([t, o.toISOString()]) : typeof o == "boolean" ? e.push([t, o ? "1" : "0"]) : typeof o == "string" ? e.push([t, o]) : typeof o == "number" ? e.push([t, `${o}`]) : o == null ? e.push([t, ""]) : Ys(o, t, e);
}
function Zs(e) {
  var t;
  let o = (t = e == null ? void 0 : e.form) != null ? t : e.closest("form");
  if (o) {
    for (let s of o.elements)
      if (s.tagName === "INPUT" && s.type === "submit" || s.tagName === "BUTTON" && s.type === "submit" || s.nodeName === "INPUT" && s.type === "image") {
        s.click();
        return;
      }
  }
}
function Gs(e, t, o) {
  let s = V(o == null ? void 0 : o.value), l = B(() => e.value !== void 0);
  return [B(() => l.value ? e.value : s.value), function(n) {
    return l.value || (s.value = n), t == null ? void 0 : t(n);
  }];
}
function Ya() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Wa(e, t, o) {
  Lt.isServer || de((s) => {
    window.addEventListener(e, t, o), s(() => window.removeEventListener(e, t, o));
  });
}
var ye = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(ye || {});
function Io() {
  let e = V(0);
  return Wa("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function jo(e, t, o, s) {
  Lt.isServer || de((l) => {
    e = e ?? window, e.addEventListener(t, o, s), l(() => e.removeEventListener(t, o, s));
  });
}
function Ks(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function Xs(e) {
  if (!e)
    return /* @__PURE__ */ new Set();
  if (typeof e == "function")
    return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let o of e.value) {
    let s = I(o);
    s instanceof HTMLElement && t.add(s);
  }
  return t;
}
var Qs = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Qs || {});
let bt = Object.assign(z({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: V(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: s }) {
  let l = V(null);
  s({ el: l, $el: l });
  let n = B(() => we(l)), a = V(!1);
  X(() => a.value = !0), ae(() => a.value = !1), Za({ ownerDocument: n }, B(() => a.value && Boolean(e.features & 16)));
  let i = Ga({ ownerDocument: n, container: l, initialFocus: B(() => e.initialFocus) }, B(() => a.value && Boolean(e.features & 2)));
  Ka({ ownerDocument: n, container: l, containers: e.containers, previousActiveElement: i }, B(() => a.value && Boolean(e.features & 8)));
  let u = Io();
  function f(g) {
    let b = I(l);
    b && ((c) => c())(() => {
      ce(u.value, { [ye.Forwards]: () => {
        ge(b, ne.First, { skipElements: [g.relatedTarget] });
      }, [ye.Backwards]: () => {
        ge(b, ne.Last, { skipElements: [g.relatedTarget] });
      } });
    });
  }
  let h = V(!1);
  function w(g) {
    g.key === "Tab" && (h.value = !0, requestAnimationFrame(() => {
      h.value = !1;
    }));
  }
  function _(g) {
    if (!a.value)
      return;
    let b = Xs(e.containers);
    I(l) instanceof HTMLElement && b.add(I(l));
    let c = g.relatedTarget;
    c instanceof HTMLElement && c.dataset.headlessuiFocusGuard !== "true" && (Js(b, c) || (h.value ? ge(I(l), ce(u.value, { [ye.Forwards]: () => ne.Next, [ye.Backwards]: () => ne.Previous }) | ne.WrapAround, { relativeTo: g.target }) : g.target instanceof HTMLElement && et(g.target)));
  }
  return () => {
    let g = {}, b = { ref: l, onKeydown: w, onFocusout: _ }, { features: c, initialFocus: v, containers: m, ...y } = e;
    return ee(N, [Boolean(c & 4) && ee(He, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: Ae.Focusable }), se({ ourProps: b, theirProps: { ...t, ...y }, slot: g, attrs: t, slots: o, name: "FocusTrap" }), Boolean(c & 4) && ee(He, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: Ae.Focusable })]);
  };
} }), { features: Qs }), Xe = [];
if (typeof window < "u" && typeof document < "u") {
  let e = function(t) {
    t.target instanceof HTMLElement && t.target !== document.body && Xe[0] !== t.target && (Xe.unshift(t.target), Xe = Xe.filter((o) => o != null && o.isConnected), Xe.splice(10));
  };
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
}
function Ua(e) {
  let t = V(Xe.slice());
  return Q([e], ([o], [s]) => {
    s === !0 && o === !1 ? Ks(() => {
      t.value.splice(0);
    }) : s === !1 && o === !0 && (t.value = Xe.slice());
  }, { flush: "post" }), () => {
    var o;
    return (o = t.value.find((s) => s != null && s.isConnected)) != null ? o : null;
  };
}
function Za({ ownerDocument: e }, t) {
  let o = Ua(t);
  X(() => {
    de(() => {
      var s, l;
      t.value || ((s = e.value) == null ? void 0 : s.activeElement) === ((l = e.value) == null ? void 0 : l.body) && et(o());
    }, { flush: "post" });
  }), ae(() => {
    et(o());
  });
}
function Ga({ ownerDocument: e, container: t, initialFocus: o }, s) {
  let l = V(null), n = V(!1);
  return X(() => n.value = !0), ae(() => n.value = !1), X(() => {
    Q([t, o, s], (a, i) => {
      if (a.every((f, h) => (i == null ? void 0 : i[h]) === f) || !s.value)
        return;
      let u = I(t);
      u && Ks(() => {
        var f, h;
        if (!n.value)
          return;
        let w = I(o), _ = (f = e.value) == null ? void 0 : f.activeElement;
        if (w) {
          if (w === _) {
            l.value = _;
            return;
          }
        } else if (u.contains(_)) {
          l.value = _;
          return;
        }
        w ? et(w) : ge(u, ne.First | ne.NoScroll) === ot.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), l.value = (h = e.value) == null ? void 0 : h.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), l;
}
function Ka({ ownerDocument: e, container: t, containers: o, previousActiveElement: s }, l) {
  var n;
  jo((n = e.value) == null ? void 0 : n.defaultView, "focus", (a) => {
    if (!l.value)
      return;
    let i = Xs(o);
    I(t) instanceof HTMLElement && i.add(I(t));
    let u = s.value;
    if (!u)
      return;
    let f = a.target;
    f && f instanceof HTMLElement ? Js(i, f) ? (s.value = f, et(f)) : (a.preventDefault(), a.stopPropagation(), et(u)) : et(s.value);
  }, !0);
}
function Js(e, t) {
  for (let o of e)
    if (o.contains(t))
      return !0;
  return !1;
}
let io = /* @__PURE__ */ new Map(), gt = /* @__PURE__ */ new Map();
function fs(e, t = V(!0)) {
  de((o) => {
    var s;
    if (!t.value)
      return;
    let l = I(e);
    if (!l)
      return;
    o(function() {
      var a;
      if (!l)
        return;
      let i = (a = gt.get(l)) != null ? a : 1;
      if (i === 1 ? gt.delete(l) : gt.set(l, i - 1), i !== 1)
        return;
      let u = io.get(l);
      u && (u["aria-hidden"] === null ? l.removeAttribute("aria-hidden") : l.setAttribute("aria-hidden", u["aria-hidden"]), l.inert = u.inert, io.delete(l));
    });
    let n = (s = gt.get(l)) != null ? s : 0;
    gt.set(l, n + 1), n === 0 && (io.set(l, { "aria-hidden": l.getAttribute("aria-hidden"), inert: l.inert }), l.setAttribute("aria-hidden", "true"), l.inert = !0);
  });
}
let el = Symbol("ForcePortalRootContext");
function Xa() {
  return fe(el, !1);
}
let mo = z({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: o }) {
  return he(el, e.force), () => {
    let { force: s, ...l } = e;
    return se({ theirProps: l, ourProps: {}, slot: {}, slots: t, attrs: o, name: "ForcePortalRoot" });
  };
} });
function Qa(e) {
  let t = we(e);
  if (!t) {
    if (e === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let o = t.getElementById("headlessui-portal-root");
  if (o)
    return o;
  let s = t.createElement("div");
  return s.setAttribute("id", "headlessui-portal-root"), t.body.appendChild(s);
}
let tl = z({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: o }) {
  let s = V(null), l = B(() => we(s)), n = Xa(), a = fe(ol, null), i = V(n === !0 || a == null ? Qa(s.value) : a.resolveTarget());
  return de(() => {
    n || a != null && (i.value = a.resolveTarget());
  }), ae(() => {
    var u, f;
    let h = (u = l.value) == null ? void 0 : u.getElementById("headlessui-portal-root");
    h && i.value === h && i.value.children.length <= 0 && ((f = i.value.parentElement) == null || f.removeChild(i.value));
  }), () => {
    if (i.value === null)
      return null;
    let u = { ref: s, "data-headlessui-portal": "" };
    return ee(kt, { to: i.value }, se({ ourProps: u, theirProps: e, slot: {}, attrs: o, slots: t, name: "Portal" }));
  };
} }), ol = Symbol("PortalGroupContext"), Ja = z({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: o }) {
  let s = El({ resolveTarget() {
    return e.target;
  } });
  return he(ol, s), () => {
    let { target: l, ...n } = e;
    return se({ theirProps: n, ourProps: {}, slot: {}, attrs: t, slots: o, name: "PortalGroup" });
  };
} }), sl = Symbol("StackContext");
var bo = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(bo || {});
function er() {
  return fe(sl, () => {
  });
}
function tr({ type: e, enabled: t, element: o, onUpdate: s }) {
  let l = er();
  function n(...a) {
    s == null || s(...a), l(...a);
  }
  X(() => {
    Q(t, (a, i) => {
      a ? n(0, e, o) : i === !0 && n(1, e, o);
    }, { immediate: !0, flush: "sync" });
  }), ae(() => {
    t.value && n(1, e, o);
  }), he(sl, n);
}
let ll = Symbol("DescriptionContext");
function or() {
  let e = fe(ll, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function Ut({ slot: e = V({}), name: t = "Description", props: o = {} } = {}) {
  let s = V([]);
  function l(n) {
    return s.value.push(n), () => {
      let a = s.value.indexOf(n);
      a !== -1 && s.value.splice(a, 1);
    };
  }
  return he(ll, { register: l, slot: e, name: t, props: o }), B(() => s.value.length > 0 ? s.value.join(" ") : void 0);
}
let sr = z({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${ue()}` } }, setup(e, { attrs: t, slots: o }) {
  let s = or();
  return X(() => ae(s.register(e.id))), () => {
    let { name: l = "Description", slot: n = V({}), props: a = {} } = s, { id: i, ...u } = e, f = { ...Object.entries(a).reduce((h, [w, _]) => Object.assign(h, { [w]: C(_) }), {}), id: i };
    return se({ ourProps: f, theirProps: u, slot: n.value, attrs: t, slots: o, name: l });
  };
} });
function lr(e) {
  let t = $s(e.getSnapshot());
  return ae(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function Zt() {
  let e = [], t = { addEventListener(o, s, l, n) {
    return o.addEventListener(s, l, n), t.add(() => o.removeEventListener(s, l, n));
  }, requestAnimationFrame(...o) {
    let s = requestAnimationFrame(...o);
    t.add(() => cancelAnimationFrame(s));
  }, nextFrame(...o) {
    t.requestAnimationFrame(() => {
      t.requestAnimationFrame(...o);
    });
  }, setTimeout(...o) {
    let s = setTimeout(...o);
    t.add(() => clearTimeout(s));
  }, style(o, s, l) {
    let n = o.style.getPropertyValue(s);
    return Object.assign(o.style, { [s]: l }), this.add(() => {
      Object.assign(o.style, { [s]: n });
    });
  }, group(o) {
    let s = Zt();
    return o(s), this.add(() => s.dispose());
  }, add(o) {
    return e.push(o), () => {
      let s = e.indexOf(o);
      if (s >= 0)
        for (let l of e.splice(s, 1))
          l();
    };
  }, dispose() {
    for (let o of e.splice(0))
      o();
  } };
  return t;
}
function nr(e, t) {
  let o = e(), s = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return o;
  }, subscribe(l) {
    return s.add(l), () => s.delete(l);
  }, dispatch(l, ...n) {
    let a = t[l].call(o, ...n);
    a && (o = a, s.forEach((i) => i()));
  } };
}
function ar() {
  let e;
  return { before({ doc: t }) {
    var o;
    let s = t.documentElement;
    e = ((o = t.defaultView) != null ? o : window).innerWidth - s.clientWidth;
  }, after({ doc: t, d: o }) {
    let s = t.documentElement, l = s.clientWidth - s.offsetWidth, n = e - l;
    o.style(s, "paddingRight", `${n}px`);
  } };
}
function rr() {
  if (!Ya())
    return {};
  let e;
  return { before() {
    e = window.pageYOffset;
  }, after({ doc: t, d: o, meta: s }) {
    function l(a) {
      return s.containers.flatMap((i) => i()).some((i) => i.contains(a));
    }
    o.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
    let n = null;
    o.addEventListener(t, "click", (a) => {
      if (a.target instanceof HTMLElement)
        try {
          let i = a.target.closest("a");
          if (!i)
            return;
          let { hash: u } = new URL(i.href), f = t.querySelector(u);
          f && !l(f) && (n = f);
        } catch {
        }
    }, !0), o.addEventListener(t, "touchmove", (a) => {
      a.target instanceof HTMLElement && !l(a.target) && a.preventDefault();
    }, { passive: !1 }), o.add(() => {
      window.scrollTo(0, window.pageYOffset + e), n && n.isConnected && (n.scrollIntoView({ block: "nearest" }), n = null);
    });
  } };
}
function ir() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function pr(e) {
  let t = {};
  for (let o of e)
    Object.assign(t, o(t));
  return t;
}
let Qe = nr(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var o;
  let s = (o = this.get(e)) != null ? o : { doc: e, count: 0, d: Zt(), meta: /* @__PURE__ */ new Set() };
  return s.count++, s.meta.add(t), this.set(e, s), this;
}, POP(e, t) {
  let o = this.get(e);
  return o && (o.count--, o.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: o }) {
  let s = { doc: e, d: t, meta: pr(o) }, l = [rr(), ar(), ir()];
  l.forEach(({ before: n }) => n == null ? void 0 : n(s)), l.forEach(({ after: n }) => n == null ? void 0 : n(s));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
Qe.subscribe(() => {
  let e = Qe.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [o] of e)
    t.set(o, o.documentElement.style.overflow);
  for (let o of e.values()) {
    let s = t.get(o.doc) === "hidden", l = o.count !== 0;
    (l && !s || !l && s) && Qe.dispatch(o.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", o), o.count === 0 && Qe.dispatch("TEARDOWN", o);
  }
});
function ur(e, t, o) {
  let s = lr(Qe), l = B(() => {
    let n = e.value ? s.value.get(e.value) : void 0;
    return n ? n.count > 0 : !1;
  });
  return Q([e, t], ([n, a], [i], u) => {
    if (!n || !a)
      return;
    Qe.dispatch("PUSH", n, o);
    let f = !1;
    u(() => {
      f || (Qe.dispatch("POP", i ?? n, o), f = !0);
    });
  }, { immediate: !0 }), l;
}
var dr = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(dr || {});
let go = Symbol("DialogContext");
function Tt(e) {
  let t = fe(go, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, Tt), o;
  }
  return t;
}
let At = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Gt = z({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: At }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${ue()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: o, slots: s, expose: l }) {
  var n;
  let a = V(!1);
  X(() => {
    a.value = !0;
  });
  let i = V(0), u = Mt(), f = B(() => e.open === At && u !== null ? (u.value & re.Open) === re.Open : e.open), h = V(null), w = V(null), _ = B(() => we(h));
  if (l({ el: h, $el: h }), !(e.open !== At || u !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof f.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${f.value === At ? void 0 : e.open}`);
  let g = B(() => a.value && f.value ? 0 : 1), b = B(() => g.value === 0), c = B(() => i.value > 1), v = fe(go, null) !== null, m = B(() => c.value ? "parent" : "leaf"), y = B(() => u !== null ? (u.value & re.Closing) === re.Closing : !1), P = B(() => v || y.value ? !1 : b.value), k = B(() => {
    var F, Y, H;
    return (H = Array.from((Y = (F = _.value) == null ? void 0 : F.querySelectorAll("body > *")) != null ? Y : []).find((Z) => Z.id === "headlessui-portal-root" ? !1 : Z.contains(I(w)) && Z instanceof HTMLElement)) != null ? H : null;
  });
  fs(k, P);
  let A = B(() => c.value ? !0 : b.value), O = B(() => {
    var F, Y, H;
    return (H = Array.from((Y = (F = _.value) == null ? void 0 : F.querySelectorAll("[data-headlessui-portal]")) != null ? Y : []).find((Z) => Z.contains(I(w)) && Z instanceof HTMLElement)) != null ? H : null;
  });
  fs(O, A), tr({ type: "Dialog", enabled: B(() => g.value === 0), element: h, onUpdate: (F, Y) => {
    if (Y === "Dialog")
      return ce(F, { [bo.Add]: () => i.value += 1, [bo.Remove]: () => i.value -= 1 });
  } });
  let S = Ut({ name: "DialogDescription", slot: B(() => ({ open: f.value })) }), D = V(null), T = { titleId: D, panelRef: V(null), dialogState: g, setTitleId(F) {
    D.value !== F && (D.value = F);
  }, close() {
    t("close", !1);
  } };
  he(go, T);
  function E() {
    var F, Y, H;
    return [...Array.from((Y = (F = _.value) == null ? void 0 : F.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? Y : []).filter((Z) => !(Z === document.body || Z === document.head || !(Z instanceof HTMLElement) || Z.contains(I(w)) || T.panelRef.value && Z.contains(T.panelRef.value))), (H = T.panelRef.value) != null ? H : h.value];
  }
  let W = B(() => !(!b.value || c.value));
  qs(() => E(), (F, Y) => {
    T.close(), Co(() => Y == null ? void 0 : Y.focus());
  }, W);
  let U = B(() => !(c.value || g.value !== 0));
  jo((n = _.value) == null ? void 0 : n.defaultView, "keydown", (F) => {
    U.value && (F.defaultPrevented || F.key === pe.Escape && (F.preventDefault(), F.stopPropagation(), T.close()));
  });
  let R = B(() => !(y.value || g.value !== 0 || v));
  return ur(_, R, (F) => {
    var Y;
    return { containers: [...(Y = F.containers) != null ? Y : [], E] };
  }), de((F) => {
    if (g.value !== 0)
      return;
    let Y = I(h);
    if (!Y)
      return;
    let H = new ResizeObserver((Z) => {
      for (let ie of Z) {
        let J = ie.target.getBoundingClientRect();
        J.x === 0 && J.y === 0 && J.width === 0 && J.height === 0 && T.close();
      }
    });
    H.observe(Y), F(() => H.disconnect());
  }), () => {
    let { id: F, open: Y, initialFocus: H, ...Z } = e, ie = { ...o, ref: h, id: F, role: "dialog", "aria-modal": g.value === 0 ? !0 : void 0, "aria-labelledby": D.value, "aria-describedby": S.value }, J = { open: g.value === 0 };
    return ee(mo, { force: !0 }, () => [ee(tl, () => ee(Ja, { target: h.value }, () => ee(mo, { force: !1 }, () => ee(bt, { initialFocus: H, containers: E, features: b.value ? ce(m.value, { parent: bt.features.RestoreFocus, leaf: bt.features.All & ~bt.features.FocusLock }) : bt.features.None }, () => se({ ourProps: ie, theirProps: Z, slot: J, attrs: o, slots: s, visible: g.value === 0, features: Ne.RenderStrategy | Ne.Static, name: "Dialog" }))))), ee(He, { features: Ae.Hidden, ref: w })]);
  };
} });
z({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${ue()}` } }, setup(e, { attrs: t, slots: o }) {
  let s = Tt("DialogOverlay");
  function l(n) {
    n.target === n.currentTarget && (n.preventDefault(), n.stopPropagation(), s.close());
  }
  return () => {
    let { id: n, ...a } = e;
    return se({ ourProps: { id: n, "aria-hidden": !0, onClick: l }, theirProps: a, slot: { open: s.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogOverlay" });
  };
} });
z({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${ue()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: s }) {
  let l = Tt("DialogBackdrop"), n = V(null);
  return s({ el: n, $el: n }), X(() => {
    if (l.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: a, ...i } = e, u = { id: a, ref: n, "aria-hidden": !0 };
    return ee(mo, { force: !0 }, () => ee(tl, () => se({ ourProps: u, theirProps: { ...t, ...i }, slot: { open: l.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogBackdrop" })));
  };
} });
let Kt = z({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${ue()}` } }, setup(e, { attrs: t, slots: o, expose: s }) {
  let l = Tt("DialogPanel");
  s({ el: l.panelRef, $el: l.panelRef });
  function n(a) {
    a.stopPropagation();
  }
  return () => {
    let { id: a, ...i } = e, u = { id: a, ref: l.panelRef, onClick: n };
    return se({ ourProps: u, theirProps: i, slot: { open: l.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogPanel" });
  };
} }), nl = z({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${ue()}` } }, setup(e, { attrs: t, slots: o }) {
  let s = Tt("DialogTitle");
  return X(() => {
    s.setTitleId(e.id), ae(() => s.setTitleId(null));
  }), () => {
    let { id: l, ...n } = e;
    return se({ ourProps: { id: l }, theirProps: n, slot: { open: s.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogTitle" });
  };
} });
var cr = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(cr || {});
let al = Symbol("PopoverContext");
function Xt(e) {
  let t = fe(al, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <${Qt.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, Xt), o;
  }
  return t;
}
let rl = Symbol("PopoverGroupContext");
function il() {
  return fe(rl, null);
}
let pl = Symbol("PopoverPanelContext");
function fr() {
  return fe(pl, null);
}
let Qt = z({ name: "Popover", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: o, expose: s }) {
  var l;
  let n = V(null);
  s({ el: n, $el: n });
  let a = V(1), i = V(null), u = V(null), f = V(null), h = V(null), w = B(() => we(n)), _ = B(() => {
    var y, P;
    if (!I(i) || !I(h))
      return !1;
    for (let E of document.querySelectorAll("body > *"))
      if (Number(E == null ? void 0 : E.contains(I(i))) ^ Number(E == null ? void 0 : E.contains(I(h))))
        return !0;
    let k = Wt(), A = k.indexOf(I(i)), O = (A + k.length - 1) % k.length, S = (A + 1) % k.length, D = k[O], T = k[S];
    return !((y = I(h)) != null && y.contains(D)) && !((P = I(h)) != null && P.contains(T));
  }), g = { popoverState: a, buttonId: V(null), panelId: V(null), panel: h, button: i, isPortalled: _, beforePanelSentinel: u, afterPanelSentinel: f, togglePopover() {
    a.value = ce(a.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    a.value !== 1 && (a.value = 1);
  }, close(y) {
    g.closePopover();
    let P = (() => y ? y instanceof HTMLElement ? y : y.value instanceof HTMLElement ? I(y) : I(g.button) : I(g.button))();
    P == null || P.focus();
  } };
  he(al, g), Rs(B(() => ce(a.value, { [0]: re.Open, [1]: re.Closed })));
  let b = { buttonId: g.buttonId, panelId: g.panelId, close() {
    g.closePopover();
  } }, c = il(), v = c == null ? void 0 : c.registerPopover;
  function m() {
    var y, P, k, A;
    return (A = c == null ? void 0 : c.isFocusWithinPopoverGroup()) != null ? A : ((y = w.value) == null ? void 0 : y.activeElement) && (((P = I(i)) == null ? void 0 : P.contains(w.value.activeElement)) || ((k = I(h)) == null ? void 0 : k.contains(w.value.activeElement)));
  }
  return de(() => v == null ? void 0 : v(b)), jo((l = w.value) == null ? void 0 : l.defaultView, "focus", (y) => {
    var P, k;
    a.value === 0 && (m() || i && h && y.target !== window && ((P = I(g.beforePanelSentinel)) != null && P.contains(y.target) || (k = I(g.afterPanelSentinel)) != null && k.contains(y.target) || g.closePopover()));
  }, !0), qs([i, h], (y, P) => {
    var k;
    g.closePopover(), Ns(P, Ao.Loose) || (y.preventDefault(), (k = I(i)) == null || k.focus());
  }, B(() => a.value === 0)), () => {
    let y = { open: a.value === 0, close: g.close };
    return se({ theirProps: e, ourProps: { ref: n }, slot: y, slots: t, attrs: o, name: "Popover" });
  };
} }), Ro = z({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-popover-button-${ue()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: s }) {
  let l = Xt("PopoverButton"), n = B(() => we(l.button));
  s({ el: l.button, $el: l.button }), X(() => {
    l.buttonId.value = e.id;
  }), ae(() => {
    l.buttonId.value = null;
  });
  let a = il(), i = a == null ? void 0 : a.closeOthers, u = fr(), f = B(() => u === null ? !1 : u.value === l.panelId.value), h = V(null), w = `headlessui-focus-sentinel-${ue()}`;
  f.value || de(() => {
    l.button.value = h.value;
  });
  let _ = Fs(B(() => ({ as: e.as, type: t.type })), h);
  function g(m) {
    var y, P, k, A, O;
    if (f.value) {
      if (l.popoverState.value === 1)
        return;
      switch (m.key) {
        case pe.Space:
        case pe.Enter:
          m.preventDefault(), (P = (y = m.target).click) == null || P.call(y), l.closePopover(), (k = I(l.button)) == null || k.focus();
          break;
      }
    } else
      switch (m.key) {
        case pe.Space:
        case pe.Enter:
          m.preventDefault(), m.stopPropagation(), l.popoverState.value === 1 && (i == null || i(l.buttonId.value)), l.togglePopover();
          break;
        case pe.Escape:
          if (l.popoverState.value !== 0)
            return i == null ? void 0 : i(l.buttonId.value);
          if (!I(l.button) || (A = n.value) != null && A.activeElement && !((O = I(l.button)) != null && O.contains(n.value.activeElement)))
            return;
          m.preventDefault(), m.stopPropagation(), l.closePopover();
          break;
      }
  }
  function b(m) {
    f.value || m.key === pe.Space && m.preventDefault();
  }
  function c(m) {
    var y, P;
    e.disabled || (f.value ? (l.closePopover(), (y = I(l.button)) == null || y.focus()) : (m.preventDefault(), m.stopPropagation(), l.popoverState.value === 1 && (i == null || i(l.buttonId.value)), l.togglePopover(), (P = I(l.button)) == null || P.focus()));
  }
  function v(m) {
    m.preventDefault(), m.stopPropagation();
  }
  return () => {
    let m = l.popoverState.value === 0, y = { open: m }, { id: P, ...k } = e, A = f.value ? { ref: h, type: _.value, onKeydown: g, onClick: c } : { ref: h, id: P, type: _.value, "aria-expanded": e.disabled ? void 0 : l.popoverState.value === 0, "aria-controls": I(l.panel) ? l.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onKeydown: g, onKeyup: b, onClick: c, onMousedown: v }, O = Io();
    function S() {
      let D = I(l.panel);
      if (!D)
        return;
      function T() {
        ce(O.value, { [ye.Forwards]: () => ge(D, ne.First), [ye.Backwards]: () => ge(D, ne.Last) }) === ot.Error && ge(Wt().filter((E) => E.dataset.headlessuiFocusGuard !== "true"), ce(O.value, { [ye.Forwards]: ne.Next, [ye.Backwards]: ne.Previous }), { relativeTo: I(l.button) });
      }
      T();
    }
    return ee(N, [se({ ourProps: A, theirProps: { ...t, ...k }, slot: y, attrs: t, slots: o, name: "PopoverButton" }), m && !f.value && l.isPortalled.value && ee(He, { id: w, features: Ae.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: S })]);
  };
} });
z({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(e, { attrs: t, slots: o }) {
  let s = Xt("PopoverOverlay"), l = `headlessui-popover-overlay-${ue()}`, n = Mt(), a = B(() => n !== null ? (n.value & re.Open) === re.Open : s.popoverState.value === 0);
  function i() {
    s.closePopover();
  }
  return () => {
    let u = { open: s.popoverState.value === 0 };
    return se({ ourProps: { id: l, "aria-hidden": !0, onClick: i }, theirProps: e, slot: u, attrs: t, slots: o, features: Ne.RenderStrategy | Ne.Static, visible: a.value, name: "PopoverOverlay" });
  };
} });
let Fo = z({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-popover-panel-${ue()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: s }) {
  let { focus: l } = e, n = Xt("PopoverPanel"), a = B(() => we(n.panel)), i = `headlessui-focus-sentinel-before-${ue()}`, u = `headlessui-focus-sentinel-after-${ue()}`;
  s({ el: n.panel, $el: n.panel }), X(() => {
    n.panelId.value = e.id;
  }), ae(() => {
    n.panelId.value = null;
  }), he(pl, n.panelId), de(() => {
    var v, m;
    if (!l || n.popoverState.value !== 0 || !n.panel)
      return;
    let y = (v = a.value) == null ? void 0 : v.activeElement;
    (m = I(n.panel)) != null && m.contains(y) || ge(I(n.panel), ne.First);
  });
  let f = Mt(), h = B(() => f !== null ? (f.value & re.Open) === re.Open : n.popoverState.value === 0);
  function w(v) {
    var m, y;
    switch (v.key) {
      case pe.Escape:
        if (n.popoverState.value !== 0 || !I(n.panel) || a.value && !((m = I(n.panel)) != null && m.contains(a.value.activeElement)))
          return;
        v.preventDefault(), v.stopPropagation(), n.closePopover(), (y = I(n.button)) == null || y.focus();
        break;
    }
  }
  function _(v) {
    var m, y, P, k, A;
    let O = v.relatedTarget;
    O && I(n.panel) && ((m = I(n.panel)) != null && m.contains(O) || (n.closePopover(), ((P = (y = I(n.beforePanelSentinel)) == null ? void 0 : y.contains) != null && P.call(y, O) || (A = (k = I(n.afterPanelSentinel)) == null ? void 0 : k.contains) != null && A.call(k, O)) && O.focus({ preventScroll: !0 })));
  }
  let g = Io();
  function b() {
    let v = I(n.panel);
    if (!v)
      return;
    function m() {
      ce(g.value, { [ye.Forwards]: () => {
        var y;
        ge(v, ne.First) === ot.Error && ((y = I(n.afterPanelSentinel)) == null || y.focus());
      }, [ye.Backwards]: () => {
        var y;
        (y = I(n.button)) == null || y.focus({ preventScroll: !0 });
      } });
    }
    m();
  }
  function c() {
    let v = I(n.panel);
    if (!v)
      return;
    function m() {
      ce(g.value, { [ye.Forwards]: () => {
        let y = I(n.button), P = I(n.panel);
        if (!y)
          return;
        let k = Wt(), A = k.indexOf(y), O = k.slice(0, A + 1), S = [...k.slice(A + 1), ...O];
        for (let D of S.slice())
          if (D.dataset.headlessuiFocusGuard === "true" || P != null && P.contains(D)) {
            let T = S.indexOf(D);
            T !== -1 && S.splice(T, 1);
          }
        ge(S, ne.First, { sorted: !1 });
      }, [ye.Backwards]: () => {
        var y;
        ge(v, ne.Previous) === ot.Error && ((y = I(n.button)) == null || y.focus());
      } });
    }
    m();
  }
  return () => {
    let v = { open: n.popoverState.value === 0, close: n.close }, { id: m, focus: y, ...P } = e, k = { ref: n.panel, id: m, onKeydown: w, onFocusout: l && n.popoverState.value === 0 ? _ : void 0, tabIndex: -1 };
    return se({ ourProps: k, theirProps: { ...t, ...P }, attrs: t, slot: v, slots: { ...o, default: (...A) => {
      var O;
      return [ee(N, [h.value && n.isPortalled.value && ee(He, { id: i, ref: n.beforePanelSentinel, features: Ae.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: b }), (O = o.default) == null ? void 0 : O.call(o, ...A), h.value && n.isPortalled.value && ee(He, { id: u, ref: n.afterPanelSentinel, features: Ae.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: c })])];
    } }, features: Ne.RenderStrategy | Ne.Static, visible: h.value, name: "PopoverPanel" });
  };
} });
z({ name: "PopoverGroup", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: o, expose: s }) {
  let l = V(null), n = $s([]), a = B(() => we(l));
  s({ el: l, $el: l });
  function i(w) {
    let _ = n.value.indexOf(w);
    _ !== -1 && n.value.splice(_, 1);
  }
  function u(w) {
    return n.value.push(w), () => {
      i(w);
    };
  }
  function f() {
    var w;
    let _ = a.value;
    if (!_)
      return !1;
    let g = _.activeElement;
    return (w = I(l)) != null && w.contains(g) ? !0 : n.value.some((b) => {
      var c, v;
      return ((c = _.getElementById(b.buttonId.value)) == null ? void 0 : c.contains(g)) || ((v = _.getElementById(b.panelId.value)) == null ? void 0 : v.contains(g));
    });
  }
  function h(w) {
    for (let _ of n.value)
      _.buttonId.value !== w && _.close();
  }
  return he(rl, { registerPopover: u, unregisterPopover: i, isFocusWithinPopoverGroup: f, closeOthers: h }), () => se({ ourProps: { ref: l }, theirProps: e, slot: {}, attrs: t, slots: o, name: "PopoverGroup" });
} });
let ul = Symbol("LabelContext");
function dl() {
  let e = fe(ul, null);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, dl), t;
  }
  return e;
}
function No({ slot: e = {}, name: t = "Label", props: o = {} } = {}) {
  let s = V([]);
  function l(n) {
    return s.value.push(n), () => {
      let a = s.value.indexOf(n);
      a !== -1 && s.value.splice(a, 1);
    };
  }
  return he(ul, { register: l, slot: e, name: t, props: o }), B(() => s.value.length > 0 ? s.value.join(" ") : void 0);
}
let cl = z({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-label-${ue()}` } }, setup(e, { slots: t, attrs: o }) {
  let s = dl();
  return X(() => ae(s.register(e.id))), () => {
    let { name: l = "Label", slot: n = {}, props: a = {} } = s, { id: i, passive: u, ...f } = e, h = { ...Object.entries(a).reduce((w, [_, g]) => Object.assign(w, { [_]: C(g) }), {}), id: i };
    return u && (delete h.onClick, delete h.htmlFor, delete f.onClick), se({ ourProps: h, theirProps: f, slot: n, attrs: o, slots: t, name: l });
  };
} });
function vr(e, t) {
  return e === t;
}
let fl = Symbol("RadioGroupContext");
function vl(e) {
  let t = fe(fl, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, vl), o;
  }
  return t;
}
let hr = z({ name: "RadioGroup", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "div" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => vr }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-radiogroup-${ue()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: o, slots: s, expose: l }) {
  let n = V(null), a = V([]), i = No({ name: "RadioGroupLabel" }), u = Ut({ name: "RadioGroupDescription" });
  l({ el: n, $el: n });
  let [f, h] = Gs(B(() => e.modelValue), (b) => t("update:modelValue", b), B(() => e.defaultValue)), w = { options: a, value: f, disabled: B(() => e.disabled), firstOption: B(() => a.value.find((b) => !b.propsRef.disabled)), containsCheckedOption: B(() => a.value.some((b) => w.compare(Re(b.propsRef.value), Re(e.modelValue)))), compare(b, c) {
    if (typeof e.by == "string") {
      let v = e.by;
      return (b == null ? void 0 : b[v]) === (c == null ? void 0 : c[v]);
    }
    return e.by(b, c);
  }, change(b) {
    var c;
    if (e.disabled || w.compare(Re(f.value), Re(b)))
      return !1;
    let v = (c = a.value.find((m) => w.compare(Re(m.propsRef.value), Re(b)))) == null ? void 0 : c.propsRef;
    return v != null && v.disabled ? !1 : (h(b), !0);
  }, registerOption(b) {
    a.value.push(b), a.value = Hs(a.value, (c) => c.element);
  }, unregisterOption(b) {
    let c = a.value.findIndex((v) => v.id === b);
    c !== -1 && a.value.splice(c, 1);
  } };
  he(fl, w), Fa({ container: B(() => I(n)), accept(b) {
    return b.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : b.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(b) {
    b.setAttribute("role", "none");
  } });
  function _(b) {
    if (!n.value || !n.value.contains(b.target))
      return;
    let c = a.value.filter((v) => v.propsRef.disabled === !1).map((v) => v.element);
    switch (b.key) {
      case pe.Enter:
        Zs(b.currentTarget);
        break;
      case pe.ArrowLeft:
      case pe.ArrowUp:
        if (b.preventDefault(), b.stopPropagation(), ge(c, ne.Previous | ne.WrapAround) === ot.Success) {
          let v = a.value.find((m) => {
            var y;
            return m.element === ((y = we(n)) == null ? void 0 : y.activeElement);
          });
          v && w.change(v.propsRef.value);
        }
        break;
      case pe.ArrowRight:
      case pe.ArrowDown:
        if (b.preventDefault(), b.stopPropagation(), ge(c, ne.Next | ne.WrapAround) === ot.Success) {
          let v = a.value.find((m) => {
            var y;
            return m.element === ((y = we(m.element)) == null ? void 0 : y.activeElement);
          });
          v && w.change(v.propsRef.value);
        }
        break;
      case pe.Space:
        {
          b.preventDefault(), b.stopPropagation();
          let v = a.value.find((m) => {
            var y;
            return m.element === ((y = we(m.element)) == null ? void 0 : y.activeElement);
          });
          v && w.change(v.propsRef.value);
        }
        break;
    }
  }
  let g = B(() => {
    var b;
    return (b = I(n)) == null ? void 0 : b.closest("form");
  });
  return X(() => {
    Q([g], () => {
      if (!g.value || e.defaultValue === void 0)
        return;
      function b() {
        w.change(e.defaultValue);
      }
      return g.value.addEventListener("reset", b), () => {
        var c;
        (c = g.value) == null || c.removeEventListener("reset", b);
      };
    }, { immediate: !0 });
  }), () => {
    let { disabled: b, name: c, id: v, ...m } = e, y = { ref: n, id: v, role: "radiogroup", "aria-labelledby": i.value, "aria-describedby": u.value, onKeydown: _ };
    return ee(N, [...c != null && f.value != null ? Ys({ [c]: f.value }).map(([P, k]) => ee(He, Is({ features: Ae.Hidden, key: P, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: P, value: k }))) : [], se({ ourProps: y, theirProps: { ...o, ...Yt(m, ["modelValue", "defaultValue"]) }, slot: {}, attrs: o, slots: s, name: "RadioGroup" })]);
  };
} });
var mr = ((e) => (e[e.Empty = 1] = "Empty", e[e.Active = 2] = "Active", e))(mr || {});
let br = z({ name: "RadioGroupOption", props: { as: { type: [Object, String], default: "div" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-radiogroup-option-${ue()}` } }, setup(e, { attrs: t, slots: o, expose: s }) {
  let l = vl("RadioGroupOption"), n = No({ name: "RadioGroupLabel" }), a = Ut({ name: "RadioGroupDescription" }), i = V(null), u = B(() => ({ value: e.value, disabled: e.disabled })), f = V(1);
  s({ el: i, $el: i }), X(() => l.registerOption({ id: e.id, element: i, propsRef: u })), ae(() => l.unregisterOption(e.id));
  let h = B(() => {
    var m;
    return ((m = l.firstOption.value) == null ? void 0 : m.id) === e.id;
  }), w = B(() => l.disabled.value || e.disabled), _ = B(() => l.compare(Re(l.value.value), Re(e.value))), g = B(() => w.value ? -1 : _.value || !l.containsCheckedOption.value && h.value ? 0 : -1);
  function b() {
    var m;
    l.change(e.value) && (f.value |= 2, (m = i.value) == null || m.focus());
  }
  function c() {
    f.value |= 2;
  }
  function v() {
    f.value &= -3;
  }
  return () => {
    let { id: m, value: y, disabled: P, ...k } = e, A = { checked: _.value, disabled: w.value, active: Boolean(f.value & 2) }, O = { id: m, ref: i, role: "radio", "aria-checked": _.value ? "true" : "false", "aria-labelledby": n.value, "aria-describedby": a.value, "aria-disabled": w.value ? !0 : void 0, tabIndex: g.value, onClick: w.value ? void 0 : b, onFocus: w.value ? void 0 : c, onBlur: w.value ? void 0 : v };
    return se({ ourProps: O, theirProps: k, slot: A, attrs: t, slots: o, name: "RadioGroupOption" });
  };
} }), vs = cl, gr = sr, hl = Symbol("GroupContext"), yr = z({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: o }) {
  let s = V(null), l = No({ name: "SwitchLabel", props: { htmlFor: B(() => {
    var a;
    return (a = s.value) == null ? void 0 : a.id;
  }), onClick(a) {
    s.value && (a.currentTarget.tagName === "LABEL" && a.preventDefault(), s.value.click(), s.value.focus({ preventScroll: !0 }));
  } } }), n = Ut({ name: "SwitchDescription" });
  return he(hl, { switchRef: s, labelledby: l, describedby: n }), () => se({ theirProps: e, ourProps: {}, slot: {}, slots: t, attrs: o, name: "SwitchGroup" });
} }), wr = z({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: !0 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-switch-${ue()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: o, slots: s, expose: l }) {
  let n = fe(hl, null), [a, i] = Gs(B(() => e.modelValue), (v) => t("update:modelValue", v), B(() => e.defaultChecked));
  function u() {
    i(!a.value);
  }
  let f = V(null), h = n === null ? f : n.switchRef, w = Fs(B(() => ({ as: e.as, type: o.type })), h);
  l({ el: h, $el: h });
  function _(v) {
    v.preventDefault(), u();
  }
  function g(v) {
    v.key === pe.Space ? (v.preventDefault(), u()) : v.key === pe.Enter && Zs(v.currentTarget);
  }
  function b(v) {
    v.preventDefault();
  }
  let c = B(() => {
    var v, m;
    return (m = (v = I(h)) == null ? void 0 : v.closest) == null ? void 0 : m.call(v, "form");
  });
  return X(() => {
    Q([c], () => {
      if (!c.value || e.defaultChecked === void 0)
        return;
      function v() {
        i(e.defaultChecked);
      }
      return c.value.addEventListener("reset", v), () => {
        var m;
        (m = c.value) == null || m.removeEventListener("reset", v);
      };
    }, { immediate: !0 });
  }), () => {
    let { id: v, name: m, value: y, ...P } = e, k = { checked: a.value }, A = { id: v, ref: h, role: "switch", type: w.value, tabIndex: 0, "aria-checked": a.value, "aria-labelledby": n == null ? void 0 : n.labelledby.value, "aria-describedby": n == null ? void 0 : n.describedby.value, onClick: _, onKeyup: g, onKeypress: b };
    return ee(N, [m != null && a.value != null ? ee(He, Is({ features: Ae.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: a.value, name: m, value: y })) : null, se({ ourProps: A, theirProps: { ...o, ...Yt(P, ["modelValue", "defaultChecked"]) }, slot: k, attrs: o, slots: s, name: "Switch" })]);
  };
} }), _r = cl;
function $r(e) {
  let t = { called: !1 };
  return (...o) => {
    if (!t.called)
      return t.called = !0, e(...o);
  };
}
function po(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function It(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var yo = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(yo || {});
function xr(e, t) {
  let o = Zt();
  if (!e)
    return o.dispose;
  let { transitionDuration: s, transitionDelay: l } = getComputedStyle(e), [n, a] = [s, l].map((i) => {
    let [u = 0] = i.split(",").filter(Boolean).map((f) => f.includes("ms") ? parseFloat(f) : parseFloat(f) * 1e3).sort((f, h) => h - f);
    return u;
  });
  return n !== 0 ? o.setTimeout(() => t("finished"), n + a) : t("finished"), o.add(() => t("cancelled")), o.dispose;
}
function hs(e, t, o, s, l, n) {
  let a = Zt(), i = n !== void 0 ? $r(n) : () => {
  };
  return It(e, ...l), po(e, ...t, ...o), a.nextFrame(() => {
    It(e, ...o), po(e, ...s), a.add(xr(e, (u) => (It(e, ...s, ...t), po(e, ...l), i(u))));
  }), a.add(() => It(e, ...t, ...o, ...s, ...l)), a.add(() => i("cancelled")), a.dispose;
}
function Ke(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Ho = Symbol("TransitionContext");
var Vr = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Vr || {});
function kr() {
  return fe(Ho, null) !== null;
}
function Cr() {
  let e = fe(Ho, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Sr() {
  let e = fe(qo, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let qo = Symbol("NestingContext");
function Jt(e) {
  return "children" in e ? Jt(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function ml(e) {
  let t = V([]), o = V(!1);
  X(() => o.value = !0), ae(() => o.value = !1);
  function s(n, a = Fe.Hidden) {
    let i = t.value.findIndex(({ id: u }) => u === n);
    i !== -1 && (ce(a, { [Fe.Unmount]() {
      t.value.splice(i, 1);
    }, [Fe.Hidden]() {
      t.value[i].state = "hidden";
    } }), !Jt(t) && o.value && (e == null || e()));
  }
  function l(n) {
    let a = t.value.find(({ id: i }) => i === n);
    return a ? a.state !== "visible" && (a.state = "visible") : t.value.push({ id: n, state: "visible" }), () => s(n, Fe.Unmount);
  }
  return { children: t, register: l, unregister: s };
}
let bl = Ne.RenderStrategy, qe = z({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: o, slots: s, expose: l }) {
  let n = V(0);
  function a() {
    n.value |= re.Opening, t("beforeEnter");
  }
  function i() {
    n.value &= ~re.Opening, t("afterEnter");
  }
  function u() {
    n.value |= re.Closing, t("beforeLeave");
  }
  function f() {
    n.value &= ~re.Closing, t("afterLeave");
  }
  if (!kr() && Aa())
    return () => ee(Dt, { ...e, onBeforeEnter: a, onAfterEnter: i, onBeforeLeave: u, onAfterLeave: f }, s);
  let h = V(null), w = V("visible"), _ = B(() => e.unmount ? Fe.Unmount : Fe.Hidden);
  l({ el: h, $el: h });
  let { show: g, appear: b } = Cr(), { register: c, unregister: v } = Sr(), m = { value: !0 }, y = ue(), P = { value: !1 }, k = ml(() => {
    !P.value && w.value !== "hidden" && (w.value = "hidden", v(y), f());
  });
  X(() => {
    let R = c(y);
    ae(R);
  }), de(() => {
    if (_.value === Fe.Hidden && y) {
      if (g && w.value !== "visible") {
        w.value = "visible";
        return;
      }
      ce(w.value, { hidden: () => v(y), visible: () => c(y) });
    }
  });
  let A = Ke(e.enter), O = Ke(e.enterFrom), S = Ke(e.enterTo), D = Ke(e.entered), T = Ke(e.leave), E = Ke(e.leaveFrom), W = Ke(e.leaveTo);
  X(() => {
    de(() => {
      if (w.value === "visible") {
        let R = I(h);
        if (R instanceof Comment && R.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function U(R) {
    let F = m.value && !b.value, Y = I(h);
    !Y || !(Y instanceof HTMLElement) || F || (P.value = !0, g.value && a(), g.value || u(), R(g.value ? hs(Y, A, O, S, D, (H) => {
      P.value = !1, H === yo.Finished && i();
    }) : hs(Y, T, E, W, D, (H) => {
      P.value = !1, H === yo.Finished && (Jt(k) || (w.value = "hidden", v(y), f()));
    })));
  }
  return X(() => {
    Q([g], (R, F, Y) => {
      U(Y), m.value = !1;
    }, { immediate: !0 });
  }), he(qo, k), Rs(B(() => ce(w.value, { visible: re.Open, hidden: re.Closed }) | n.value)), () => {
    let { appear: R, show: F, enter: Y, enterFrom: H, enterTo: Z, entered: ie, leave: J, leaveFrom: xe, leaveTo: ze, ...Oe } = e, Ie = { ref: h }, Me = { ...Oe, ...b && g && Lt.isServer ? { class: L([o.class, Oe.class, ...A, ...O]) } : {} };
    return se({ theirProps: Me, ourProps: Ie, slot: {}, slots: s, attrs: o, features: bl, visible: w.value === "visible", name: "TransitionChild" });
  };
} }), Pr = qe, Dt = z({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: o, slots: s }) {
  let l = Mt(), n = B(() => e.show === null && l !== null ? (l.value & re.Open) === re.Open : e.show);
  de(() => {
    if (![!0, !1].includes(n.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let a = V(n.value ? "visible" : "hidden"), i = ml(() => {
    a.value = "hidden";
  }), u = V(!0), f = { show: n, appear: B(() => e.appear || !u.value) };
  return X(() => {
    de(() => {
      u.value = !1, n.value ? a.value = "visible" : Jt(i) || (a.value = "hidden");
    });
  }), he(qo, i), he(Ho, f), () => {
    let h = Yt(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), w = { unmount: e.unmount };
    return se({ ourProps: { ...w, as: "template" }, theirProps: {}, slot: {}, slots: { ...s, default: () => [ee(Pr, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...o, ...w, ...h }, s.default)] }, attrs: {}, features: bl, visible: a.value === "visible", name: "Transition" });
  };
} });
const Or = {
  key: 0,
  class: "po-text-sm po-font-normal po-text-slate-400 po-select-none po-block po-text-left po-pt-5"
}, Mr = { class: "po-grid po-grid-cols-3" }, Lr = { class: "po-bg-white hover:po-bg-slate-200 po-rounded-xl po-p-2 po-transition-colors po-duration-150 po-ease-in" }, Tr = ["href", "target"], Dr = { class: "po-flex po-w-14 po-h-14 po-items-center po-justify-center po-duration-100 po-ease-in-out po-overflow-hidden" }, Er = ["innerHTML"], zr = { class: "po-text-slate-500 po-font-normal po-text-sm po-text-center" }, ms = /* @__PURE__ */ z({
  __name: "appList",
  props: {
    list: { default: () => [] },
    openInNewTab: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, o) => (p(!0), d(N, null, K(t.list, (s) => (p(), d("div", null, [
      s.groupName.length > 0 ? (p(), d("span", Or, x(s.groupName), 1)) : $("", !0),
      r("ul", Mr, [
        (p(!0), d(N, null, K(s.apps, (l) => (p(), d("li", Lr, [
          r("a", {
            href: l.url,
            target: t.openInNewTab ? "_blank" : "_self",
            class: "po-flex po-flex-col po-group po-justify-center po-items-center"
          }, [
            r("span", Dr, [
              r("span", {
                class: "po-w-9",
                innerHTML: l.icon
              }, null, 8, Er)
            ]),
            r("span", zr, x(l.name), 1)
          ], 8, Tr)
        ]))), 256))
      ])
    ]))), 256));
  }
}), Br = {
  name: "PoAppTray"
}, Ar = /* @__PURE__ */ z({
  ...Br,
  props: {
    appList: { default: null },
    justApps: { type: Boolean, default: !1 },
    openInNewTab: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, o = ["", "Internal"], s = B(() => {
      const l = [];
      return t.appList && o.forEach((n) => {
        const a = t.appList.filter((i) => i.group === n);
        a.length > 0 && l.push({
          groupName: n,
          apps: a
        });
      }), l;
    });
    return (l, n) => l.justApps ? (p(), q(ms, {
      key: 1,
      list: s.value,
      "open-in-new-tab": l.openInNewTab
    }, null, 8, ["list", "open-in-new-tab"])) : (p(), q(C(Qt), { key: 0 }, {
      default: j(({ open: a }) => [
        M(C(Ro), {
          class: L([a ? "" : "po-text-opacity-90", "po-block po-w-6 po-text-slate-100 genie-effect po-z-50 po-outline-none"])
        }, {
          default: j(() => [
            M(C(pn))
          ]),
          _: 2
        }, 1032, ["class"]),
        M(dt, {
          "enter-active-class": "po-transition po-duration-200 po-ease-out",
          "enter-from-class": "po-translate-y-1 po-opacity-0",
          "enter-to-class": "po-translate-y-0 po-opacity-100",
          "leave-active-class": "po-transition po-duration-150 po-ease-in",
          "leave-from-class": "po-translate-y-0 po-opacity-100",
          "leave-to-class": "po-translate-y-1 po-opacity-0"
        }, {
          default: j(() => [
            M(C(Fo), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
              default: j(() => [
                M(ms, {
                  list: s.value,
                  "open-in-new-tab": l.openInNewTab
                }, null, 8, ["list", "open-in-new-tab"])
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Ir = {
  key: 0,
  class: "po-absolute po-right-0 po-w-3 po-h-3 po-bg-mpao-orange po-rounded-full po-border-2 po-border-mpao-blue"
}, jr = {
  key: 0,
  class: "po-space-y-2"
}, Rr = ["onClick"], Fr = { class: "po-flex po-items-center po-justify-between" }, Nr = { class: "po-text-sm po-text-left po-font-semibold po-text-slate-700 po-grow po-flex po-space-x-2 po-items-center" }, Hr = { class: "po-grow" }, qr = {
  key: 0,
  class: "po-w-[6px] po-h-[6px] po-rounded-full po-shrink-0 po-bg-mpao-orange po-animate-pulse"
}, Yr = { class: "po-text-xs po-font-normal po-text-slate-400 po-shrink-0" }, Wr = { class: "po-block po-text-sm po-text-slate-500 po-pb-3 po-text-left" }, Ur = {
  key: 1,
  class: "po-text-sm po-text-slate-500 po-py-10 po-text-center po-block"
}, Zr = {
  name: "PoNotificationHub"
}, Gr = /* @__PURE__ */ z({
  ...Zr,
  props: {
    notifications: { default: null },
    hasNewNotifications: { type: Boolean, default: !1 }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, s) => (p(), q(C(Qt), null, {
      default: j(({ open: l }) => [
        M(C(Ro), {
          class: L([l ? "" : "text-opacity-90", "po-block po-w-6 po-text-slate-100 genie-effect po-relative po-z-50 po-outline-none"])
        }, {
          default: j(() => [
            o.hasNewNotifications ? (p(), d("span", Ir)) : $("", !0),
            M(C(Jl), { class: "po-stroke-current" })
          ]),
          _: 2
        }, 1032, ["class"]),
        M(dt, {
          "enter-active-class": "po-transition po-duration-200 po-ease-out",
          "enter-from-class": "po-translate-y-1 po-opacity-0",
          "enter-to-class": "po-translate-y-0 po-opacity-100",
          "leave-active-class": "po-transition po-duration-150 po-ease-in",
          "leave-from-class": "po-translate-y-0 po-opacity-100",
          "leave-to-class": "po-translate-y-1 po-opacity-0"
        }, {
          default: j(() => [
            M(C(Fo), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
              default: j(() => [
                o.notifications !== null && o.notifications.length > 0 ? (p(), d("ul", jr, [
                  (p(!0), d(N, null, K(o.notifications, (n) => (p(), d("li", {
                    role: "button",
                    class: "po-space-y-2 po-p-2 po-rounded-lg po-bg-white hover:po-bg-slate-100 po-border po-border-slate-100",
                    onClick: oe((a) => o.$emit("button-click", n.name), ["prevent"])
                  }, [
                    r("span", Fr, [
                      r("p", Nr, [
                        r("span", Hr, x(n.name), 1),
                        n.seen ? $("", !0) : (p(), d("span", qr))
                      ]),
                      r("span", Yr, x(n.time), 1)
                    ]),
                    r("span", Wr, x(n.text), 1)
                  ], 8, Rr))), 256))
                ])) : (p(), d("span", Ur, " No notifications to show at the moment. We'll keep you informed."))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Kr = {
  key: 0,
  class: "po-hidden lg:po-block po-text-sky-50 po-text-sm po-shrink-0 po-pr-3 po-truncate po-max-w-[140px] po-overflow-hidden"
}, Xr = {
  key: 1,
  class: "po-px-3 po-bg-gradient-to-br po-from-slate-50 po-to-blue-100 po-py-1 po-rounded-l-md po-w-[100px] po-flex po-items-center po-justify-center po-text-center"
}, Qr = ["src"], Jr = ["src", "alt"], ei = {
  key: 1,
  class: "po-text-xs po-text-white po-font-semibold"
}, ti = { class: "po-pb-5" }, oi = ["src"], si = {
  key: 2,
  class: "po-block po-text-sm po-text-slate-400 po-italic"
}, li = { key: 0 }, ni = { key: 1 }, ai = /* @__PURE__ */ r("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), ri = { class: "po-space-y-2 po-py-2 po-max-h-[250px] po-overflow-y-auto" }, ii = ["onClick"], pi = { class: "po-w-5" }, ui = { class: "" }, di = { class: "po-block po-text-sm po-font-normal" }, ci = {
  key: 0,
  class: "po-text-left po-block po-text-xs po-text-slate-400"
}, fi = /* @__PURE__ */ r("div", { class: "po-h-[2px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), vi = { class: "md:po-grid po-grid-cols-2 po-space-x-1 po-pt-2" }, hi = { class: "po-w-5" }, mi = /* @__PURE__ */ r("span", { class: "po-text-sm po-font-normal" }, "Profile", -1), bi = { class: "po-w-5" }, gi = /* @__PURE__ */ r("span", { class: "po-text-sm po-font-normal" }, "Logout", -1), yi = /* @__PURE__ */ r("div", { class: "po-text-xs po-space-x-3 po-text-center po-pt-3" }, [
  /* @__PURE__ */ r("a", {
    href: "",
    class: "po-text-slate-500 hover:po-text-mpao-lightblue"
  }, "Privacy Policy"),
  /* @__PURE__ */ r("a", {
    href: "",
    class: "po-text-slate-500 hover:po-text-mpao-lightblue"
  }, "Terms of Service")
], -1), wi = {
  name: "PoProfileSwitcher"
}, _i = /* @__PURE__ */ z({
  ...wi,
  props: {
    userObject: { default: null },
    avatar: { default: "" },
    logo: { default: "" }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    const o = e;
    function s(w) {
      t("button-click", w);
    }
    const l = V({
      name: "",
      initials: "",
      image: ""
    });
    function n(w) {
      var _, g;
      return w ? ((g = (_ = w.match(/\b[A-Z]/g)) == null ? void 0 : _.join("")) == null ? void 0 : g.substring(0, 2)) ?? "" : "";
    }
    const a = B(() => {
      var c, v, m, y, P, k, A, O, S, D;
      const w = [], _ = (c = o.userObject) == null ? void 0 : c.transacting_as_organisation, g = (_ == null ? void 0 : _.name) || ((v = o.userObject) == null ? void 0 : v.name), b = (_ == null ? void 0 : _.logo) || ((m = o.userObject) == null ? void 0 : m.avatar);
      return l.value = {
        name: g,
        initials: n(g),
        image: b
      }, w.push({
        id: (y = o.userObject) == null ? void 0 : y.id,
        entity_id: (P = o.userObject) == null ? void 0 : P.entity_id,
        name: (k = o.userObject) == null ? void 0 : k.name,
        identifier: null,
        organisation_uuid: null
      }), ((O = (A = o.userObject) == null ? void 0 : A.organisations) == null ? void 0 : O.length) > 0 && w.push(...(S = o.userObject) == null ? void 0 : S.organisations), w.forEach((T) => {
        T.current = _ && Object.keys(_).length > 0 && T.entity_id === _.entity_id;
      }), ((D = o.userObject) == null ? void 0 : D.transacting_as_organisation) === null && (w[0].current = !0), w;
    }), i = V(null), u = V(null), { avatar: f, logo: h } = $e(o);
    return Q(f, () => {
      i.value = f.value;
    }), Q(h, () => {
      u.value = h.value;
    }), zl(() => {
      a.value;
    }), X(() => {
      a.value;
    }), Bl(() => {
      a.value;
    }), So(() => {
      a.value;
    }), (w, _) => (p(), q(C(Qt), null, {
      default: j(({ open: g }) => [
        r("div", null, [
          M(C(Ro), { class: "po-flex po-items-center po-outline-none" }, {
            default: j(() => [
              u.value ? $("", !0) : (p(), d("span", Kr, x(l.value.name), 1)),
              u.value ? (p(), d("span", Xr, [
                r("img", {
                  class: "po-h-8",
                  src: u.value,
                  alt: ""
                }, null, 8, Qr)
              ])) : $("", !0),
              r("div", {
                class: L([
                  {
                    "po-bg-gradient-to-br po-from-slate-50 po-to-blue-100 po-p-1 po-rounded-r-md": u.value
                  }
                ])
              }, [
                r("div", {
                  class: L([[
                    { "text-opacity-90": g },
                    {
                      "po-w-10 po-h-10": !u.value
                    },
                    { "po-w-8 po-h-8": u.value }
                  ], "po-shrink-0 po-select-none po-rounded-full po-bg-white/10 po-flex po-items-center po-justify-center genie-effect po-z-50"])
                }, [
                  i.value ? (p(), d("img", {
                    key: 0,
                    class: "po-rounded-full po-border po-border-white",
                    src: i.value,
                    alt: l.value.name
                  }, null, 8, Jr)) : (p(), d("span", ei, x(l.value.initials), 1))
                ], 2)
              ], 2)
            ]),
            _: 2
          }, 1024),
          M(dt, {
            "enter-active-class": "po-transition po-duration-200 po-ease-out",
            "enter-from-class": "po-translate-y-1 po-opacity-0",
            "enter-to-class": "po-translate-y-0 po-opacity-100",
            "leave-active-class": "po-transition po-duration-150 po-ease-in",
            "leave-from-class": "po-translate-y-0 po-opacity-100",
            "leave-to-class": "po-translate-y-1 po-opacity-0"
          }, {
            default: j(() => [
              M(C(Fo), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
                default: j(() => {
                  var b, c, v, m;
                  return [
                    r("div", ti, [
                      i.value ? (p(), d("img", {
                        key: 0,
                        class: "po-w-20 po-h-20 po-mx-auto po-rounded-full po-overflow-hidden",
                        src: i.value,
                        alt: ""
                      }, null, 8, oi)) : $("", !0),
                      (b = w.userObject) != null && b.name ? (p(), d("span", {
                        key: 1,
                        class: L(["po-text-base po-text-slate-600 po-font-medium po-block", [{ "po-mt-4": i.value }]])
                      }, x((c = w.userObject) == null ? void 0 : c.name), 3)) : $("", !0),
                      (v = w.userObject) != null && v.name ? (p(), d("span", si, [
                        l.value.name === ((m = w.userObject) == null ? void 0 : m.name) ? (p(), d("span", li, "Self")) : (p(), d("span", ni, "User at " + x(l.value.name), 1))
                      ])) : $("", !0)
                    ]),
                    ai,
                    r("div", ri, [
                      (p(!0), d(N, null, K(a.value, (y, P) => (p(), d("a", {
                        href: "#",
                        onClick: oe((k) => s(y), ["prevent"]),
                        class: L(["po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-shadow-sm po-transition-all po-duration-150 po-ease-out hover:po-bg-blue-50", [
                          {
                            " po-bg-white": !y.current
                          },
                          {
                            " po-bg-blue-50 po-shadow-sm": y.current
                          }
                        ]]),
                        role: "button",
                        key: P
                      }, [
                        r("span", pi, [
                          y.isPersonal ? (p(), q(C(ts), {
                            key: 0,
                            class: L([
                              "po-stroke-current",
                              { "po-stroke-mpao-lightblue": y.current }
                            ])
                          }, null, 8, ["class"])) : $("", !0),
                          y.isPersonal ? $("", !0) : (p(), q(C(tn), {
                            key: 1,
                            class: L([
                              "po-stroke-current",
                              { "po-stroke-mpao-lightblue": y.current }
                            ])
                          }, null, 8, ["class"]))
                        ]),
                        r("span", ui, [
                          r("span", di, x(y.name), 1),
                          y.identifier ? (p(), d("span", ci, x(y.identifier), 1)) : $("", !0)
                        ])
                      ], 10, ii))), 128))
                    ]),
                    fi,
                    r("div", vi, [
                      r("a", {
                        href: "#",
                        onClick: _[0] || (_[0] = oe((y) => w.$emit("button-click", "current-profile"), ["prevent"])),
                        class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-slate-50 hover:po-bg-blue-50 po-transition-all po-duration-150 po-ease-out",
                        role: "button"
                      }, [
                        r("span", hi, [
                          M(C(ts), { class: "po-stroke-current" })
                        ]),
                        mi
                      ]),
                      r("a", {
                        href: "#",
                        onClick: _[1] || (_[1] = oe((y) => w.$emit("button-click", "logout"), ["prevent"])),
                        class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-slate-50 hover:po-bg-blue-50 po-transition-all po-duration-150 po-ease-out",
                        role: "button"
                      }, [
                        r("span", bi, [
                          M(C(Kl), { class: "po-stroke-current" })
                        ]),
                        gi
                      ])
                    ]),
                    yi
                  ];
                }),
                _: 1
              })
            ]),
            _: 1
          })
        ])
      ]),
      _: 1
    }));
  }
}), $i = {
  name: "PoSidebarDrawer"
}, t2 = /* @__PURE__ */ z({
  ...$i,
  props: {
    content: { default: null },
    currRoute: { default: "/" },
    hasFeedback: { type: Boolean, default: !1 },
    appsLabel: { default: "Related apps" },
    apps: { default: null },
    appCode: { default: "" }
  },
  setup(e) {
    const t = V(!0), o = V(window.innerWidth), s = V(!1), l = () => {
      o.value = window.innerWidth, o.value <= 1024 && (s.value = !0);
    };
    return X(() => {
      window.addEventListener("resize", l);
    }), ko(() => {
      window.removeEventListener("resize", l);
    }), st.on("sidebarOpen", (n) => {
      typeof n == "boolean" && (t.value = n);
    }), (n, a) => (p(), d("aside", {
      class: L(["po-flex po-flex-col po-px-3 po-pt-[78px] po-min-h-screen po-bg-white po-overflow-y-auto po-overflow-x-hidden po-transition-all po-duration-300 po-ease-in-out po-border-r po-border-slate-50 po-z-[49] po-fixed", [
        { "po-w-[256px]": t.value },
        { "po-w-[64px]": !t.value && !s.value },
        { "po-w-[64px]": s.value }
      ]])
    }, " ... ", 2));
  }
}), xi = {
  key: 0,
  class: "shell-content--action-bar"
}, Vi = { class: "action-bar__nav" }, ki = ["onClick"], Ci = { class: "action-bar__nav_label po-font-medium" }, Si = {
  key: 0,
  class: "po-shrink-0 po-flex po-space-x-1"
}, Pi = /* @__PURE__ */ r("span", { class: "action-bar__nav_label po-font-medium" }, "Go Back", -1), Oi = {
  name: "PoActionBar"
}, o2 = /* @__PURE__ */ z({
  ...Oi,
  props: {
    items: { default: null },
    showBackButton: { type: Boolean, default: !1 },
    currPageRoute: { default: "" }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, s) => o.items !== null && o.items.length > 0 || o.showBackButton ? (p(), d("section", xi, [
      r("nav", Vi, [
        (p(!0), d(N, null, K(o.items, (l) => (p(), d("span", {
          onClick: (n) => o.$emit("button-click", l.label),
          class: L([[
            { "action-bar__nav_highlighted": l.highlighted },
            { "action-bar__nav_danger": l.danger }
          ], "action-bar__nav_link"])
        }, [
          (p(), q(ve(l.icon), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" })),
          r("span", Ci, x(l.label), 1)
        ], 10, ki))), 256))
      ]),
      o.showBackButton ? (p(), d("nav", Si, [
        r("span", {
          onClick: s[0] || (s[0] = (l) => o.$emit("button-click", "back")),
          class: "action-bar__nav_link"
        }, [
          Pi,
          (p(), q(ve(C(Xl)), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" }))
        ])
      ])) : $("", !0)
    ])) : $("", !0);
  }
}), eo = /* @__PURE__ */ z({
  __name: "LoadingDots",
  props: {
    dotColor: { default: "po-bg-mpao-lightblue" },
    absolute: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, o) => (p(), d("div", {
      class: L(["loading-dots po-inline-block po-w-[40px] po-h-[10px]", [{ "po-relative": !t.absolute }, { "po-absolute": t.absolute }]])
    }, [
      r("div", {
        class: L(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[8px]", t.dotColor])
      }, null, 2),
      r("div", {
        class: L(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[8px]", t.dotColor])
      }, null, 2),
      r("div", {
        class: L(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[17px]", t.dotColor])
      }, null, 2),
      r("div", {
        class: L(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[26px]", t.dotColor])
      }, null, 2)
    ], 2));
  }
}), Mi = { class: "po-shadow-sm po-rounded-xl po-bg-white po-relative" }, Li = {
  key: 0,
  class: "po-absolute po-right-2 po-top-2 po-p-2 po-rounded-lg"
}, Ti = {
  key: 0,
  class: "po-text-base po-font-medium po-text-slate-600"
}, Di = {
  key: 1,
  class: "lg:po-col-span-2 lg:po-flex lg:po-justify-end po-space-x-2"
}, Ei = {
  name: "PoCard"
}, s2 = /* @__PURE__ */ z({
  ...Ei,
  props: {
    title: { default: "" },
    isLoading: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, o) => (p(), d("div", Mi, [
      t.isLoading ? (p(), d("div", Li, [
        M(eo)
      ])) : $("", !0),
      r("div", {
        class: L([
          { "po-grid po-grid-cols-1 lg:po-grid-cols-3 po-gap-3": t.$slots.action }
        ])
      }, [
        t.title.length > 0 ? (p(), d("h3", Ti, x(t.title), 1)) : $("", !0),
        t.$slots.action ? (p(), d("div", Di, [
          G(t.$slots, "action")
        ])) : $("", !0)
      ], 2),
      G(t.$slots, "content")
    ]));
  }
}), zi = { class: "po-py-3 po-px-5 po-border-b po-border-slate-200" }, Bi = {
  class: "po-flex po-w-full md:po-ml-0",
  action: "#",
  method: "GET"
}, Ai = {
  for: "search-field",
  class: "po-sr-only"
}, Ii = { class: "po-relative po-w-full po-text-slate-400 focus-within:po-text-mpao-lightblue po-transition-colors po-duration-100 po-ease-in-out" }, ji = { class: "po-pointer-events-none po-absolute po-inset-y-0 po-left-0 po-flex po-items-center" }, Ri = ["placeholder", "value"], Fi = ["disabled"], Ni = {
  name: "PoCardSearch"
}, l2 = /* @__PURE__ */ z({
  ...Ni,
  props: {
    modelValue: { default: "" },
    placeholder: { default: "Search" },
    showBtn: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "button-click"],
  setup(e, { emit: t }) {
    const o = (s) => {
      let l = s.target.value;
      t("update:modelValue", l);
    };
    return (s, l) => (p(), d("div", zi, [
      r("form", Bi, [
        r("label", Ai, x(s.placeholder), 1),
        r("div", Ii, [
          r("div", ji, [
            M(C(Oo), { class: "po-h-5 po-w-5 po-flex-shrink-0" })
          ]),
          r("input", {
            name: "search-field",
            id: "desktop-search-field",
            placeholder: s.placeholder,
            value: s.modelValue,
            onInput: o,
            class: "po-h-full po-w-full po-border-transparent po-py-2 po-pl-8 po-pr-3 po-text-sm po-text-slate-700 po-placeholder-slate-500 focus:po-border-transparent focus:po-placeholder-slate-400 focus:po-outline-none focus:po-ring-0",
            type: "search"
          }, null, 40, Ri),
          s.showBtn ? (p(), d("button", {
            key: 0,
            class: L(["po-absolute po-right-0 po-text-sm po-rounded-full po-px-3 po-py-2 po-transition-colors po-duration-150 po-ease-out", [
              { "po-bg-mpao-lightblue po-text-white": s.modelValue !== "" },
              { "po-bg-slate-100 po-text-slate-400": s.modelValue === "" }
            ]]),
            disabled: s.modelValue === "",
            onClick: l[0] || (l[0] = oe((n) => s.$emit("button-click", s.modelValue), ["prevent"]))
          }, " Search ", 10, Fi)) : $("", !0)
        ])
      ])
    ]));
  }
}), Hi = { class: "po-flex po-items-center" }, qi = { class: "po-text-sm po-font-medium po-text-slate-500 po-pr-2" }, Yi = {
  name: "PoPagination"
}, Wi = /* @__PURE__ */ z({
  ...Yi,
  props: {
    pagination: { default: null },
    totalPages: { default: null },
    currentPage: { default: null }
  },
  emits: ["button-click", "next-click", "prev-click"],
  setup(e, { emit: t }) {
    const o = e;
    function s() {
      t("button-click", "prev"), t("prev-click", !0);
    }
    function l() {
      t("button-click", "next"), t("next-click", !0);
    }
    const n = B(() => o.totalPages ? `Page ${o.currentPage} of ${o.totalPages}` : o.pagination ? o.pagination.label : "");
    return (a, i) => (p(), d("div", Hi, [
      r("span", qi, x(n.value), 1),
      r("button", {
        title: "Previous",
        onClick: s,
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        M(C(Vs), { class: "po-w-4 po-stroke-current po-stroke-2" })
      ]),
      r("button", {
        title: "Next",
        onClick: l,
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        M(C(ks), { class: "po-w-4 po-stroke-current po-stroke-2" })
      ])
    ]));
  }
}), Ui = { key: 0 }, Zi = {
  class: "po-text-xl md:po-text-2xl po-font-semibold po-text-slate-800",
  id: "po-page-title"
}, Gi = {
  key: 0,
  class: "po-text-base po-mt-2 po-max-w-md po-block po-text-slate-500"
}, Ki = { key: 1 }, Xi = { class: "po-grid po-grid-cols-1 lg:po-grid-cols-2 po-gap-5" }, Qi = {
  class: "po-text-xl md:po-text-2xl po-font-semibold po-text-slate-800",
  id: "po-page-title"
}, Ji = {
  key: 0,
  class: "po-text-base po-mt-4 po-max-w-md po-pb-5 po-block po-text-slate-500"
}, ep = { class: "po-flex po-items-end po-justify-end po-flex-col" }, tp = {
  key: 0,
  class: "po-flex md:po-justify-end po-mb-5"
}, op = { class: "po-bg-slate-50 po-shadow-sm po-rounded-xl po-py-5 po-px-2 po-divide-x po-divide-slate-200 po-flex" }, sp = ["onClick"], lp = { class: "po-text-xl po-font-medium po-text-slate-600 po-flex po-items-center po-space-x-1" }, np = { class: "po-text-xl po-font-medium po-text-slate-600 group-hover:po-text-mpao-lightblue" }, ap = { class: "po-text-sm po-text-slate-500 po-block group-hover:po-text-mpao-lightblue" }, rp = { class: "po-flex po-items-center po-space-x-1 md:po-justify-end" }, ip = {
  key: 2,
  class: "po-border-l po-border-slate-400 po-h-3 po-w-3 po-ml-1"
}, pp = {
  key: 0,
  class: "po-bg-slate-50 po-p-5 po-mt-5 po-rounded-md po-grid po-grid-cols-1 md:po-grid-cols-3 po-gap-5"
}, up = /* @__PURE__ */ r("span", { class: "po-text-xs po-text-slate-500 po-py-5" }, "No filters available at the moment.", -1), dp = {
  name: "PoPageTitle"
}, n2 = /* @__PURE__ */ z({
  ...dp,
  props: {
    label: { default: "" },
    description: { default: "" },
    stats: { default: null },
    showPagination: { type: Boolean, default: !1 },
    showFilter: { type: Boolean, default: !1 },
    showDownload: { type: Boolean, default: !1 },
    pagination: { default: null },
    filterOn: { type: Boolean, default: !1 },
    standAlone: { type: Boolean, default: !1 }
  },
  emits: ["button-click", "pagination-click", "stat-click"],
  setup(e, { emit: t }) {
    const s = e.filterOn ? V(!0) : V(!1);
    function l(a) {
      t("pagination-click", a);
    }
    function n(a) {
      return a.iconColor ? a.iconColor : "po-slate-600";
    }
    return (a, i) => a.standAlone ? (p(), d("div", Ui, [
      r("h1", Zi, x(a.label), 1),
      a.description !== "" ? (p(), d("span", Gi, x(a.description), 1)) : $("", !0)
    ])) : (p(), d("div", Ki, [
      r("div", Xi, [
        r("div", null, [
          r("h1", Qi, x(a.label), 1),
          a.description !== "" ? (p(), d("span", Ji, x(a.description), 1)) : $("", !0)
        ]),
        r("div", ep, [
          a.stats !== null ? (p(), d("div", tp, [
            r("div", op, [
              (p(!0), d(N, null, K(a.stats, (u) => (p(), d("div", {
                class: "po-px-5 po-cursor-pointer po-group genie-effect",
                onClick: (f) => a.$emit("stat-click", u)
              }, [
                r("span", lp, [
                  r("span", np, x(u.value), 1),
                  u.icon ? (p(), d("span", {
                    key: 0,
                    class: L(["po-w-5 po-h-5", n(u)])
                  }, [
                    (p(), q(ve(u.icon)))
                  ], 2)) : $("", !0)
                ]),
                r("span", ap, x(u.label), 1)
              ], 8, sp))), 256))
            ])
          ])) : $("", !0),
          r("div", rp, [
            a.showFilter ? (p(), d("button", {
              key: 0,
              title: "Filter",
              onClick: i[0] || (i[0] = (u) => {
                a.$emit("button-click", "filter"), s.value = !C(s);
              }),
              class: L([
                "po-p-2 po-rounded-md hover:po-bg-slate-200 po-transition-colors po-duration-75 po-ease-in-out",
                { "po-text-mpao-orange hover:po-text-mpao-orange": C(s) },
                { "tpo-ext-slate-600 hover:po-text-mpao-blue": !C(s) }
              ])
            }, [
              M(C(nn), { class: "po-w-4 po-stroke-current po-stroke-2" })
            ], 2)) : $("", !0),
            a.showDownload ? (p(), d("button", {
              key: 1,
              title: "Download",
              onClick: i[1] || (i[1] = (u) => a.$emit("button-click", "download")),
              class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
            }, [
              M(C(Gl), { class: "po-w-4 po-stroke-current po-stroke-2" })
            ])) : $("", !0),
            a.showFilter && a.showPagination || a.showDownload && a.showPagination ? (p(), d("span", ip, " ")) : $("", !0),
            a.showPagination ? (p(), q(Wi, {
              key: 3,
              pagination: a.pagination,
              onButtonClick: l
            }, null, 8, ["pagination"])) : $("", !0)
          ])
        ])
      ]),
      M(dt, {
        "enter-active-class": "po-transition po-duration-100 po-ease-out",
        "enter-from-class": "po-transform po-scale-95 po-opacity-0",
        "enter-to-class": "po-transform po-scale-100 po-opacity-100",
        "leave-active-class": "po-transition po-duration-75 po-ease-out",
        "leave-from-class": "po-transform po-scale-100 po-opacity-100",
        "leave-to-class": "po-transform po-scale-95 po-opacity-0"
      }, {
        default: j(() => [
          C(s) ? (p(), d("div", pp, [
            G(a.$slots, "filters", {}, () => [
              up
            ])
          ])) : $("", !0)
        ]),
        _: 3
      })
    ]));
  }
});
function cp(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "fill-rule": "evenodd",
      d: "M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z",
      "clip-rule": "evenodd"
    })
  ]);
}
function fp(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "fill-rule": "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h4.59l-2.1 1.95a.75.75 0 001.02 1.1l3.5-3.25a.75.75 0 000-1.1l-3.5-3.25a.75.75 0 10-1.02 1.1l2.1 1.95H6.75z",
      "clip-rule": "evenodd"
    })
  ]);
}
function vp(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "fill-rule": "evenodd",
      d: "M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z",
      "clip-rule": "evenodd"
    })
  ]);
}
function hp(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "fill-rule": "evenodd",
      d: "M2.24 6.8a.75.75 0 001.06-.04l1.95-2.1v8.59a.75.75 0 001.5 0V4.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L2.2 5.74a.75.75 0 00.04 1.06zm8 6.4a.75.75 0 00-.04 1.06l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V6.75a.75.75 0 00-1.5 0v8.59l-1.95-2.1a.75.75 0 00-1.06-.04z",
      "clip-rule": "evenodd"
    })
  ]);
}
function mp(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "fill-rule": "evenodd",
      d: "M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z",
      "clip-rule": "evenodd"
    })
  ]);
}
function bs(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "fill-rule": "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      "clip-rule": "evenodd"
    })
  ]);
}
function bp(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "fill-rule": "evenodd",
      d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",
      "clip-rule": "evenodd"
    })
  ]);
}
function gp(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "fill-rule": "evenodd",
      d: "M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z",
      "clip-rule": "evenodd"
    })
  ]);
}
function gl(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "fill-rule": "evenodd",
      d: "M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z",
      "clip-rule": "evenodd"
    })
  ]);
}
function to(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "fill-rule": "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      "clip-rule": "evenodd"
    })
  ]);
}
function yp(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "fill-rule": "evenodd",
      d: "M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z",
      "clip-rule": "evenodd"
    })
  ]);
}
function wp(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "fill-rule": "evenodd",
      d: "M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z",
      "clip-rule": "evenodd"
    })
  ]);
}
function yl(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
  ]);
}
const _p = {
  key: 0,
  class: "po-w-12"
}, $p = ["onClick"], xp = { class: "po-flex po-space-x-1 po-pr-2 po-items-center" }, Vp = { class: "po-grow" }, kp = {
  key: 0,
  class: "po-shrink-0 po-select-none po-bg-slate-100 po-rounded-md po-w-4 po-h-4 po-flex po-items-center po-justify-center po-cursor-pointer",
  role: "button"
}, Cp = {
  key: 0,
  class: "po-w-12"
}, Sp = ["onClick"], Pp = ["colspan"], Op = { key: 1 }, Mp = ["colspan"], Lp = { class: "po-py-10 po-block po-normal-case" }, Tp = { class: "po-pr-5" }, Dp = { class: "po-py-1" }, Ep = { key: 0 }, zp = {
  name: "PoTable"
}, a2 = /* @__PURE__ */ z({
  ...zp,
  props: {
    thead: { default: null },
    tbody: { default: null },
    emptyMessage: { default: "We couldn't find any content to display." },
    breakAtLg: { type: Boolean, default: !1 },
    isLoading: { type: Boolean, default: !1 },
    hasDetailsRow: { type: Boolean, default: !1 }
  },
  emits: ["column-click"],
  setup(e, { emit: t }) {
    const o = e, { isLoading: s, tbody: l, thead: n } = $e(o), a = V(!1), i = V(null), u = V(null), f = V(null);
    Q(s, () => {
      h();
    }), Q(l, () => {
      h(), w();
    }), X(() => {
      h(), w(), i.value = n.value;
    });
    function h() {
      a.value = s.value, u.value = l.value, s.value && (u.value = [{}, {}, {}, {}, {}]);
    }
    function w() {
      if (o.hasDetailsRow && o.tbody)
        for (let b = 0; b < o.tbody.length; b++)
          o.tbody[b].showDetails = !1;
    }
    function _() {
      return Math.floor(Math.random() * 41) + 40;
    }
    const g = (b, c) => {
      var v;
      b.sortable && (b.sorted && f.value === "asc" ? f.value = "desc" : f.value = "asc", (v = i.value) == null || v.forEach((m) => {
        m.label === b.label ? (m.sorted = !0, m.sortDirection = f.value, m.index = c) : (m.sorted = !1, m.sortDirection = null);
      }), t("column-click", b));
    };
    return (b, c) => (p(), d("table", {
      class: L(["table-responsive po-w-full", [{ lg: b.breakAtLg }]])
    }, [
      r("thead", null, [
        r("tr", null, [
          b.hasDetailsRow ? (p(), d("th", _p)) : $("", !0),
          (p(!0), d(N, null, K(i.value, (v, m) => (p(), d("th", {
            onClick: (y) => g(v, m)
          }, [
            r("span", xp, [
              r("span", Vp, [
                G(b.$slots, "th", nt(at(v)))
              ]),
              v.sortable ? (p(), d("span", kp, [
                v.sorted ? $("", !0) : (p(), q(C(hp), {
                  key: 0,
                  class: "po-w-3 po-h-3"
                })),
                v.sorted && v.sortDirection === "asc" ? (p(), q(C(vp), {
                  key: 1,
                  class: "po-w-3 po-h-3"
                })) : $("", !0),
                v.sorted && v.sortDirection === "desc" ? (p(), q(C(cp), {
                  key: 2,
                  class: "po-w-3 po-h-3"
                })) : $("", !0)
              ])) : $("", !0)
            ])
          ], 8, $p))), 256))
        ])
      ]),
      r("tbody", null, [
        u.value !== null && !a.value || u.value !== null && u.value.length !== 0 && !a.value ? (p(!0), d(N, { key: 0 }, K(u.value, (v, m) => (p(), d(N, null, [
          r("tr", null, [
            b.hasDetailsRow ? (p(), d("td", Cp, [
              r("span", {
                onClick: (y) => v.showDetails = !v.showDetails
              }, [
                M(C(fp), {
                  class: L(["po-w-5 po-fill-mpao-lightblue po-origin-center po-transition-transform po-duration-100 po-ease-out po-cursor-pointer", [{ "po-rotate-90": v.showDetails }]])
                }, null, 8, ["class"])
              ], 8, Sp)
            ])) : $("", !0),
            G(b.$slots, "td", nt(at({ ...v, index: m, item: v })))
          ]),
          b.hasDetailsRow ? (p(), d("tr", {
            key: 0,
            class: L(["po-table-details-row", [{ "po-hidden": !v.showDetails }]])
          }, [
            C(n) ? (p(), d("td", {
              key: 0,
              colspan: C(n).length + 1
            }, [
              G(b.$slots, "details", nt(at({ item: v })))
            ], 8, Pp)) : $("", !0)
          ], 2)) : $("", !0)
        ], 64))), 256)) : $("", !0),
        u.value == null && !a.value || u.value !== null && u.value.length == 0 && !a.value ? (p(), d("tr", Op, [
          C(n) ? (p(), d("td", {
            key: 0,
            colspan: C(n).length + 1,
            class: "po-text-center"
          }, [
            r("span", Lp, x(b.emptyMessage), 1)
          ], 8, Mp)) : $("", !0)
        ])) : $("", !0),
        a.value ? (p(!0), d(N, { key: 2 }, K(u.value, (v) => (p(), d("tr", null, [
          (p(!0), d(N, null, K(C(n), (m) => (p(), d("td", Tp, [
            r("div", Dp, [
              r("div", {
                class: "po-h-2 loading-placeholder po-rounded-full",
                style: Po({ width: _() + "%" })
              }, null, 4)
            ])
          ]))), 256))
        ]))), 256)) : $("", !0)
      ]),
      b.$slots.tfoot ? (p(), d("tfoot", Ep, [
        r("tr", null, [
          G(b.$slots, "tfoot")
        ])
      ])) : $("", !0)
    ], 2));
  }
}), Bp = { class: "" }, Ap = { class: "po-grow" }, Ip = ["onClick"], jp = {
  name: "PoDescriptionList"
}, Rp = /* @__PURE__ */ z({
  ...jp,
  props: {
    items: { default: null },
    striped: { type: Boolean, default: !1 },
    columns: { type: Boolean, default: !0 }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, s) => (p(), d("div", null, [
      r("dl", {
        class: L([
          "po-description-list",
          { "po-divide-y po-divide-slate-200": !o.striped },
          { striped: o.striped },
          { "no-col": !o.columns }
        ])
      }, [
        G(o.$slots, "content", {}, () => [
          (p(!0), d(N, null, K(o.items, (l) => (p(), d("div", null, [
            r("dt", null, x(l.title), 1),
            r("dd", Bp, [
              r("span", Ap, x(l.description), 1),
              l.action !== void 0 ? (p(), d("span", {
                key: 0,
                class: "po-shrink-0 po-text-mpao-lightblue hover:po-text-mpao-blue po-transition-colors po-duration-100 po-ease-in-out po-px-2 po-cursor-pointer",
                onClick: (n) => o.$emit("button-click", l.action)
              }, x(typeof l.action == "string" ? l.action : l.action.label), 9, Ip)) : $("", !0)
            ])
          ]))), 256))
        ])
      ], 2)
    ]));
  }
}), Fp = ["for"], Np = { class: "po-capitalize" }, Hp = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, qp = ["title"], Yp = ["type", "name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], Wp = ["id"], Up = ["id"], Zp = {
  name: "PoInputField"
}, r2 = /* @__PURE__ */ z({
  ...Zp,
  props: {
    modelValue: { default: "" },
    label: { default: "" },
    type: { default: "text" },
    display: { default: "vertical" },
    id: { default: "" },
    info: { default: null },
    message: { default: null },
    errorMessage: { default: null },
    hasError: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    placeholder: { default: void 0 },
    borderColor: { default: "po-border-slate-300 focus:po-border-mpao-lightblue" },
    modelModifiers: { default: () => ({}) }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e;
    function s() {
      return o.hasError ? "po-border-red-400 focus:po-border-red-600 focus:po-ring-red-600" : o.borderColor;
    }
    const { errorMessage: l } = $e(o), n = V(l.value !== null);
    Q(l, (g, b) => {
      n.value = l.value !== null && l.value !== "";
    }), Q(l, (g, b) => {
      n.value = l.value !== null && l.value !== "";
    });
    let a = o.type === "currency" ? "text" : o.type;
    const i = V(void 0), u = (g) => {
      let b = g.target.value;
      i.value = b;
      let c = o.type === "currency" ? w(b) : b;
      console.log(o.modelModifiers), t("update:modelValue", c);
    }, f = (g) => {
      h(g.target.value);
    };
    Q(o, (g, b) => {
      o.type === "currency" && i.value !== b.modelValue ? i.value = "" + es(o.modelValue) : i.value = o.modelValue;
    });
    const h = (g) => {
      let b = "";
      o.type === "currency" ? b = "" + es(w("" + g)) : b = g, i.value = b;
    }, w = (g) => {
      let b = g.replace(/,/g, "");
      const c = b.indexOf(".");
      return c !== -1 && b.substring(c + 1) === "00" && (b = b.substring(0, c)), b;
    };
    o.type === "currency" ? h(o.modelValue) : i.value = o.modelValue;
    const _ = V("");
    return X(() => {
      o.id === "" ? _.value = o.id ? o.id : `${o.label.replace(
        /\s/g,
        ""
      )}-${Date.now()}-inputfield-${Math.floor(Math.random() * 9e3)}` : _.value = o.id;
    }), (g, b) => (p(), d("div", {
      class: L(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": g.display === "horizontal" }]])
    }, [
      r("label", {
        for: _.value,
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700"
      }, [
        r("span", Np, x(g.label), 1),
        g.required ? (p(), d("span", Hp, "*")) : $("", !0),
        g.info !== null ? (p(), d("abbr", {
          key: 1,
          title: g.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          M(C(to), { class: "po-fill-current" })
        ], 8, qp)) : $("", !0)
      ], 8, Fp),
      r("input", Te({
        type: C(a),
        name: `${_.value}-field`,
        id: _.value,
        value: i.value,
        placeholder: g.placeholder,
        disabled: g.disabled,
        required: g.required,
        "aria-describedby": `${_.value}-description`,
        "aria-required": g.required,
        "aria-disabled": g.disabled
      }, g.$attrs, {
        onInput: u,
        onBlur: f,
        class: [
          "po-mt-1 peer po-block po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white focus:po-ring-0 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default",
          s()
        ]
      }), null, 16, Yp),
      g.message !== null ? (p(), d("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${g.id}-description`
      }, x(g.message), 9, Wp)) : $("", !0),
      n.value && C(l) !== null ? (p(), d("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
        id: `${g.id}-error`
      }, [
        r("span", null, x(C(l)), 1)
      ], 8, Up)) : $("", !0)
    ], 2));
  }
}), Gp = { class: "po-text-sm po-font-medium po-text-slate-700 peer-focus:po-text-mpao-lightblue peer-invalid:po-text-red-500 peer-invalid:peer-focus:po-text-red-600 po-flex po-items-center po-space-x-1 po-capitalize" }, Kp = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Xp = ["name", "id", "value"], Qp = ["for"], Jp = { class: "po-flex po-items-center po-space-x-1" }, eu = {
  key: 0,
  class: "po-text-sm"
}, tu = {
  key: 1,
  class: "po-text-sm"
}, ou = ["id"], su = ["id"], lu = {
  name: "PoInputFile"
}, i2 = /* @__PURE__ */ z({
  ...lu,
  props: {
    modelValue: { default: "" },
    label: { default: "" },
    id: { default: "" },
    info: { default: null },
    message: { default: null },
    errorMessage: { default: null },
    display: { default: "vertical" },
    required: { type: Boolean, default: !1 },
    progress: { default: null }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e;
    B(() => `width: ${o.progress}%`), B(() => o.progress);
    const s = V(""), l = (a) => {
      var u, f;
      const i = (f = (u = a.target) == null ? void 0 : u.files) == null ? void 0 : f[0];
      s.value = i ? i.name : "";
    }, n = (a) => {
      let i = a.target.value;
      t("update:modelValue", i);
    };
    return (a, i) => (p(), d("div", {
      class: L(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": a.display === "horizontal" }]])
    }, [
      r("span", Gp, [
        r("span", null, x(a.label), 1),
        a.required ? (p(), d("span", Kp, "*")) : $("", !0)
      ]),
      r("input", {
        name: `${a.id}-upload`,
        id: `${a.id}-fileupload`,
        value: a.modelValue,
        type: "file",
        onInput: n,
        onChange: i[0] || (i[0] = (u) => l(u)),
        class: "po-sr-only po-peer"
      }, null, 40, Xp),
      r("label", {
        for: `${a.id}-fileupload`,
        class: "po-mt-1 po-block po-w-full po-border po-cursor-pointer po-rounded-md po-border-slate-300 po-bg-white peer-focus:po-border-mpao-lightblue invalid:po-border-red-400 invalid:focus:po-border-red-600 invalid:focus:po-ring-red-600 sm:po-text-sm po-p-2"
      }, [
        r("div", Jp, [
          M(C(Cs), { class: "po-w-4 po-stroke-slate-500" }),
          s.value ? (p(), d("span", eu, x(s.value), 1)) : (p(), d("span", tu, "Choose file"))
        ])
      ], 8, Qp),
      a.message !== null ? (p(), d("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${a.id}-description`
      }, x(a.message), 9, ou)) : $("", !0),
      a.errorMessage !== null ? (p(), d("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${a.id}-error`
      }, x(a.errorMessage), 9, su)) : $("", !0)
    ], 2));
  }
});
function nu() {
  var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
  if (t > 0)
    return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
  var o = e.indexOf("Trident/");
  if (o > 0) {
    var s = e.indexOf("rv:");
    return parseInt(e.substring(s + 3, e.indexOf(".", s)), 10);
  }
  var l = e.indexOf("Edge/");
  return l > 0 ? parseInt(e.substring(l + 5, e.indexOf(".", l)), 10) : -1;
}
let Rt;
function wo() {
  wo.init || (wo.init = !0, Rt = nu() !== -1);
}
var oo = {
  name: "ResizeObserver",
  props: {
    emitOnMount: {
      type: Boolean,
      default: !1
    },
    ignoreWidth: {
      type: Boolean,
      default: !1
    },
    ignoreHeight: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    "notify"
  ],
  mounted() {
    wo(), Co(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", Rt && this.$el.appendChild(e), e.data = "about:blank", Rt || this.$el.appendChild(e);
  },
  beforeUnmount() {
    this.removeResizeHandlers();
  },
  methods: {
    compareAndNotify() {
      (!this.ignoreWidth && this._w !== this.$el.offsetWidth || !this.ignoreHeight && this._h !== this.$el.offsetHeight) && (this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitSize());
    },
    emitSize() {
      this.$emit("notify", {
        width: this._w,
        height: this._h
      });
    },
    addResizeHandlers() {
      this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify), this.compareAndNotify();
    },
    removeResizeHandlers() {
      this._resizeObject && this._resizeObject.onload && (!Rt && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const au = /* @__PURE__ */ jl("data-v-b329ee4c");
Al("data-v-b329ee4c");
const ru = {
  class: "resize-observer",
  tabindex: "-1"
};
Il();
const iu = /* @__PURE__ */ au((e, t, o, s, l, n) => (p(), q("div", ru)));
oo.render = iu;
oo.__scopeId = "data-v-b329ee4c";
oo.__file = "src/components/ResizeObserver.vue";
function Ft(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ft = function(t) {
    return typeof t;
  } : Ft = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ft(e);
}
function pu(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function gs(e, t) {
  for (var o = 0; o < t.length; o++) {
    var s = t[o];
    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
  }
}
function uu(e, t, o) {
  return t && gs(e.prototype, t), o && gs(e, o), e;
}
function ys(e) {
  return du(e) || cu(e) || fu(e) || vu();
}
function du(e) {
  if (Array.isArray(e))
    return _o(e);
}
function cu(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function fu(e, t) {
  if (e) {
    if (typeof e == "string")
      return _o(e, t);
    var o = Object.prototype.toString.call(e).slice(8, -1);
    if (o === "Object" && e.constructor && (o = e.constructor.name), o === "Map" || o === "Set")
      return Array.from(e);
    if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
      return _o(e, t);
  }
}
function _o(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var o = 0, s = new Array(t); o < t; o++)
    s[o] = e[o];
  return s;
}
function vu() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function hu(e) {
  var t;
  return typeof e == "function" ? t = {
    callback: e
  } : t = e, t;
}
function mu(e, t) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s, l, n, a = function(u) {
    for (var f = arguments.length, h = new Array(f > 1 ? f - 1 : 0), w = 1; w < f; w++)
      h[w - 1] = arguments[w];
    if (n = h, !(s && u === l)) {
      var _ = o.leading;
      typeof _ == "function" && (_ = _(u, l)), (!s || u !== l) && _ && e.apply(void 0, [u].concat(ys(n))), l = u, clearTimeout(s), s = setTimeout(function() {
        e.apply(void 0, [u].concat(ys(n))), s = 0;
      }, t);
    }
  };
  return a._clear = function() {
    clearTimeout(s), s = null;
  }, a;
}
function wl(e, t) {
  if (e === t)
    return !0;
  if (Ft(e) === "object") {
    for (var o in e)
      if (!wl(e[o], t[o]))
        return !1;
    return !0;
  }
  return !1;
}
var bu = /* @__PURE__ */ function() {
  function e(t, o, s) {
    pu(this, e), this.el = t, this.observer = null, this.frozen = !1, this.createObserver(o, s);
  }
  return uu(e, [{
    key: "createObserver",
    value: function(o, s) {
      var l = this;
      if (this.observer && this.destroyObserver(), !this.frozen) {
        if (this.options = hu(o), this.callback = function(i, u) {
          l.options.callback(i, u), i && l.options.once && (l.frozen = !0, l.destroyObserver());
        }, this.callback && this.options.throttle) {
          var n = this.options.throttleOptions || {}, a = n.leading;
          this.callback = mu(this.callback, this.options.throttle, {
            leading: function(u) {
              return a === "both" || a === "visible" && u || a === "hidden" && !u;
            }
          });
        }
        this.oldResult = void 0, this.observer = new IntersectionObserver(function(i) {
          var u = i[0];
          if (i.length > 1) {
            var f = i.find(function(w) {
              return w.isIntersecting;
            });
            f && (u = f);
          }
          if (l.callback) {
            var h = u.isIntersecting && u.intersectionRatio >= l.threshold;
            if (h === l.oldResult)
              return;
            l.oldResult = h, l.callback(h, u);
          }
        }, this.options.intersection), Co(function() {
          l.observer && l.observer.observe(l.el);
        });
      }
    }
  }, {
    key: "destroyObserver",
    value: function() {
      this.observer && (this.observer.disconnect(), this.observer = null), this.callback && this.callback._clear && (this.callback._clear(), this.callback = null);
    }
  }, {
    key: "threshold",
    get: function() {
      return this.options.intersection && typeof this.options.intersection.threshold == "number" ? this.options.intersection.threshold : 0;
    }
  }]), e;
}();
function _l(e, t, o) {
  var s = t.value;
  if (s)
    if (typeof IntersectionObserver > "u")
      console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");
    else {
      var l = new bu(e, s, o);
      e._vue_visibilityState = l;
    }
}
function gu(e, t, o) {
  var s = t.value, l = t.oldValue;
  if (!wl(s, l)) {
    var n = e._vue_visibilityState;
    if (!s) {
      $l(e);
      return;
    }
    n ? n.createObserver(s, o) : _l(e, {
      value: s
    }, o);
  }
}
function $l(e) {
  var t = e._vue_visibilityState;
  t && (t.destroyObserver(), delete e._vue_visibilityState);
}
var yu = {
  beforeMount: _l,
  updated: gu,
  unmounted: $l
};
function wu(e) {
  return { all: e = e || /* @__PURE__ */ new Map(), on: function(t, o) {
    var s = e.get(t);
    s && s.push(o) || e.set(t, [o]);
  }, off: function(t, o) {
    var s = e.get(t);
    s && s.splice(s.indexOf(o) >>> 0, 1);
  }, emit: function(t, o) {
    (e.get(t) || []).slice().map(function(s) {
      s(o);
    }), (e.get("*") || []).slice().map(function(s) {
      s(t, o);
    });
  } };
}
var _u = {
  itemsLimit: 1e3
}, $u = /(auto|scroll)/;
function xl(e, t) {
  return e.parentNode === null ? t : xl(e.parentNode, t.concat([e]));
}
var uo = function(t, o) {
  return getComputedStyle(t, null).getPropertyValue(o);
}, xu = function(t) {
  return uo(t, "overflow") + uo(t, "overflow-y") + uo(t, "overflow-x");
}, Vu = function(t) {
  return $u.test(xu(t));
};
function ws(e) {
  if (e instanceof HTMLElement || e instanceof SVGElement) {
    for (var t = xl(e.parentNode, []), o = 0; o < t.length; o += 1)
      if (Vu(t[o]))
        return t[o];
    return document.scrollingElement || document.documentElement;
  }
}
function $o(e) {
  return $o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, $o(e);
}
var Vl = {
  items: {
    type: Array,
    required: !0
  },
  keyField: {
    type: String,
    default: "id"
  },
  direction: {
    type: String,
    default: "vertical",
    validator: function(t) {
      return ["vertical", "horizontal"].includes(t);
    }
  },
  listTag: {
    type: String,
    default: "div"
  },
  itemTag: {
    type: String,
    default: "div"
  }
};
function kl() {
  return this.items.length && $o(this.items[0]) !== "object";
}
var xo = !1;
if (typeof window < "u") {
  xo = !1;
  try {
    var ku = Object.defineProperty({}, "passive", {
      get: function() {
        xo = !0;
      }
    });
    window.addEventListener("test", null, ku);
  } catch {
  }
}
let Cu = 0;
var Yo = {
  name: "RecycleScroller",
  components: {
    ResizeObserver: oo
  },
  directives: {
    ObserveVisibility: yu
  },
  props: {
    ...Vl,
    itemSize: {
      type: Number,
      default: null
    },
    gridItems: {
      type: Number,
      default: void 0
    },
    itemSecondarySize: {
      type: Number,
      default: void 0
    },
    minItemSize: {
      type: [Number, String],
      default: null
    },
    sizeField: {
      type: String,
      default: "size"
    },
    typeField: {
      type: String,
      default: "type"
    },
    buffer: {
      type: Number,
      default: 200
    },
    pageMode: {
      type: Boolean,
      default: !1
    },
    prerender: {
      type: Number,
      default: 0
    },
    emitUpdate: {
      type: Boolean,
      default: !1
    },
    updateInterval: {
      type: Number,
      default: 0
    },
    skipHover: {
      type: Boolean,
      default: !1
    },
    listTag: {
      type: String,
      default: "div"
    },
    itemTag: {
      type: String,
      default: "div"
    },
    listClass: {
      type: [String, Object, Array],
      default: ""
    },
    itemClass: {
      type: [String, Object, Array],
      default: ""
    }
  },
  emits: [
    "resize",
    "visible",
    "hidden",
    "update",
    "scroll-start",
    "scroll-end"
  ],
  data() {
    return {
      pool: [],
      totalSize: 0,
      ready: !1,
      hoverKey: null
    };
  },
  computed: {
    sizes() {
      if (this.itemSize === null) {
        const e = {
          "-1": { accumulator: 0 }
        }, t = this.items, o = this.sizeField, s = this.minItemSize;
        let l = 1e4, n = 0, a;
        for (let i = 0, u = t.length; i < u; i++)
          a = t[i][o] || s, a < l && (l = a), n += a, e[i] = { accumulator: n, size: a };
        return this.$_computedMinItemSize = l, e;
      }
      return [];
    },
    simpleArray: kl,
    itemIndexByKey() {
      const { keyField: e, items: t } = this, o = {};
      for (let s = 0, l = t.length; s < l; s++)
        o[t[s][e]] = s;
      return o;
    }
  },
  watch: {
    items() {
      this.updateVisibleItems(!0);
    },
    pageMode() {
      this.applyPageMode(), this.updateVisibleItems(!1);
    },
    sizes: {
      handler() {
        this.updateVisibleItems(!1);
      },
      deep: !0
    },
    gridItems() {
      this.updateVisibleItems(!0);
    },
    itemSecondarySize() {
      this.updateVisibleItems(!0);
    }
  },
  created() {
    this.$_startIndex = 0, this.$_endIndex = 0, this.$_views = /* @__PURE__ */ new Map(), this.$_unusedViews = /* @__PURE__ */ new Map(), this.$_scrollDirty = !1, this.$_lastUpdateScrollPosition = 0, this.prerender && (this.$_prerender = !0, this.updateVisibleItems(!1)), this.gridItems && !this.itemSize && console.error("[vue-recycle-scroller] You must provide an itemSize when using gridItems");
  },
  mounted() {
    this.applyPageMode(), this.$nextTick(() => {
      this.$_prerender = !1, this.updateVisibleItems(!0), this.ready = !0;
    });
  },
  activated() {
    const e = this.$_lastUpdateScrollPosition;
    typeof e == "number" && this.$nextTick(() => {
      this.scrollToPosition(e);
    });
  },
  beforeUnmount() {
    this.removeListeners();
  },
  methods: {
    addView(e, t, o, s, l) {
      const n = Rl({
        id: Cu++,
        index: t,
        used: !0,
        key: s,
        type: l
      }), a = Fl({
        item: o,
        position: 0,
        nr: n
      });
      return e.push(a), a;
    },
    unuseView(e, t = !1) {
      const o = this.$_unusedViews, s = e.nr.type;
      let l = o.get(s);
      l || (l = [], o.set(s, l)), l.push(e), t || (e.nr.used = !1, e.position = -9999);
    },
    handleResize() {
      this.$emit("resize"), this.ready && this.updateVisibleItems(!1);
    },
    handleScroll(e) {
      if (!this.$_scrollDirty) {
        if (this.$_scrollDirty = !0, this.$_updateTimeout)
          return;
        const t = () => requestAnimationFrame(() => {
          this.$_scrollDirty = !1;
          const { continuous: o } = this.updateVisibleItems(!1, !0);
          o || (clearTimeout(this.$_refreshTimout), this.$_refreshTimout = setTimeout(this.handleScroll, this.updateInterval + 100));
        });
        t(), this.updateInterval && (this.$_updateTimeout = setTimeout(() => {
          this.$_updateTimeout = 0, this.$_scrollDirty && t();
        }, this.updateInterval));
      }
    },
    handleVisibilityChange(e, t) {
      this.ready && (e || t.boundingClientRect.width !== 0 || t.boundingClientRect.height !== 0 ? (this.$emit("visible"), requestAnimationFrame(() => {
        this.updateVisibleItems(!1);
      })) : this.$emit("hidden"));
    },
    updateVisibleItems(e, t = !1) {
      const o = this.itemSize, s = this.gridItems || 1, l = this.itemSecondarySize || o, n = this.$_computedMinItemSize, a = this.typeField, i = this.simpleArray ? null : this.keyField, u = this.items, f = u.length, h = this.sizes, w = this.$_views, _ = this.$_unusedViews, g = this.pool, b = this.itemIndexByKey;
      let c, v, m, y, P;
      if (!f)
        c = v = y = P = m = 0;
      else if (this.$_prerender)
        c = y = 0, v = P = Math.min(this.prerender, u.length), m = null;
      else {
        const E = this.getScroll();
        if (t) {
          let R = E.start - this.$_lastUpdateScrollPosition;
          if (R < 0 && (R = -R), o === null && R < n || R < o)
            return {
              continuous: !0
            };
        }
        this.$_lastUpdateScrollPosition = E.start;
        const W = this.buffer;
        E.start -= W, E.end += W;
        let U = 0;
        if (this.$refs.before && (U = this.$refs.before.scrollHeight, E.start -= U), this.$refs.after) {
          const R = this.$refs.after.scrollHeight;
          E.end += R;
        }
        if (o === null) {
          let R, F = 0, Y = f - 1, H = ~~(f / 2), Z;
          do
            Z = H, R = h[H].accumulator, R < E.start ? F = H : H < f - 1 && h[H + 1].accumulator > E.start && (Y = H), H = ~~((F + Y) / 2);
          while (H !== Z);
          for (H < 0 && (H = 0), c = H, m = h[f - 1].accumulator, v = H; v < f && h[v].accumulator < E.end; v++)
            ;
          for (v === -1 ? v = u.length - 1 : (v++, v > f && (v = f)), y = c; y < f && U + h[y].accumulator < E.start; y++)
            ;
          for (P = y; P < f && U + h[P].accumulator < E.end; P++)
            ;
        } else {
          c = ~~(E.start / o * s);
          const R = c % s;
          c -= R, v = Math.ceil(E.end / o * s), y = Math.max(0, Math.floor((E.start - U) / o * s)), P = Math.floor((E.end - U) / o * s), c < 0 && (c = 0), v > f && (v = f), y < 0 && (y = 0), P > f && (P = f), m = Math.ceil(f / s) * o;
        }
      }
      v - c > _u.itemsLimit && this.itemsLimitError(), this.totalSize = m;
      let k;
      const A = c <= this.$_endIndex && v >= this.$_startIndex;
      if (A)
        for (let E = 0, W = g.length; E < W; E++)
          k = g[E], k.nr.used && (e && (k.nr.index = b[k.item[i]]), (k.nr.index == null || k.nr.index < c || k.nr.index >= v) && this.unuseView(k));
      const O = A ? null : /* @__PURE__ */ new Map();
      let S, D, T;
      for (let E = c; E < v; E++) {
        S = u[E];
        const W = i ? S[i] : S;
        if (W == null)
          throw new Error(`Key is ${W} on item (keyField is '${i}')`);
        if (k = w.get(W), !o && !h[E].size) {
          k && this.unuseView(k);
          continue;
        }
        D = S[a];
        let U = _.get(D), R = !1;
        if (!k)
          A ? U && U.length ? k = U.pop() : k = this.addView(g, E, S, W, D) : (T = O.get(D) || 0, (!U || T >= U.length) && (k = this.addView(g, E, S, W, D), this.unuseView(k, !0), U = _.get(D)), k = U[T], O.set(D, T + 1)), w.delete(k.nr.key), k.nr.used = !0, k.nr.index = E, k.nr.key = W, k.nr.type = D, w.set(W, k), R = !0;
        else if (!k.nr.used && (k.nr.used = !0, R = !0, U)) {
          const F = U.indexOf(k);
          F !== -1 && U.splice(F, 1);
        }
        k.item = S, R && (E === u.length - 1 && this.$emit("scroll-end"), E === 0 && this.$emit("scroll-start")), o === null ? (k.position = h[E - 1].accumulator, k.offset = 0) : (k.position = Math.floor(E / s) * o, k.offset = E % s * l);
      }
      return this.$_startIndex = c, this.$_endIndex = v, this.emitUpdate && this.$emit("update", c, v, y, P), clearTimeout(this.$_sortTimer), this.$_sortTimer = setTimeout(this.sortViews, this.updateInterval + 300), {
        continuous: A
      };
    },
    getListenerTarget() {
      let e = ws(this.$el);
      return window.document && (e === window.document.documentElement || e === window.document.body) && (e = window), e;
    },
    getScroll() {
      const { $el: e, direction: t } = this, o = t === "vertical";
      let s;
      if (this.pageMode) {
        const l = e.getBoundingClientRect(), n = o ? l.height : l.width;
        let a = -(o ? l.top : l.left), i = o ? window.innerHeight : window.innerWidth;
        a < 0 && (i += a, a = 0), a + i > n && (i = n - a), s = {
          start: a,
          end: a + i
        };
      } else
        o ? s = {
          start: e.scrollTop,
          end: e.scrollTop + e.clientHeight
        } : s = {
          start: e.scrollLeft,
          end: e.scrollLeft + e.clientWidth
        };
      return s;
    },
    applyPageMode() {
      this.pageMode ? this.addListeners() : this.removeListeners();
    },
    addListeners() {
      this.listenerTarget = this.getListenerTarget(), this.listenerTarget.addEventListener("scroll", this.handleScroll, xo ? {
        passive: !0
      } : !1), this.listenerTarget.addEventListener("resize", this.handleResize);
    },
    removeListeners() {
      this.listenerTarget && (this.listenerTarget.removeEventListener("scroll", this.handleScroll), this.listenerTarget.removeEventListener("resize", this.handleResize), this.listenerTarget = null);
    },
    scrollToItem(e) {
      let t;
      const o = this.gridItems || 1;
      this.itemSize === null ? t = e > 0 ? this.sizes[e - 1].accumulator : 0 : t = Math.floor(e / o) * this.itemSize, this.scrollToPosition(t);
    },
    scrollToPosition(e) {
      const t = this.direction === "vertical" ? { scroll: "scrollTop", start: "top" } : { scroll: "scrollLeft", start: "left" };
      let o, s, l;
      if (this.pageMode) {
        const n = ws(this.$el), a = n.tagName === "HTML" ? 0 : n[t.scroll], i = n.getBoundingClientRect(), f = this.$el.getBoundingClientRect()[t.start] - i[t.start];
        o = n, s = t.scroll, l = e + a + f;
      } else
        o = this.$el, s = t.scroll, l = e;
      o[s] = l;
    },
    itemsLimitError() {
      throw setTimeout(() => {
        console.log("It seems the scroller element isn't scrolling, so it tries to render all the items at once.", "Scroller:", this.$el), console.log("Make sure the scroller has a fixed height (or width) and 'overflow-y' (or 'overflow-x') set to 'auto' so it can scroll correctly and only render the items visible in the scroll viewport.");
      }), new Error("Rendered items limit reached");
    },
    sortViews() {
      this.pool.sort((e, t) => e.nr.index - t.nr.index);
    }
  }
};
const Su = {
  key: 0,
  ref: "before",
  class: "vue-recycle-scroller__slot"
}, Pu = {
  key: 1,
  ref: "after",
  class: "vue-recycle-scroller__slot"
};
function Ou(e, t, o, s, l, n) {
  const a = xs("ResizeObserver"), i = Nl("observe-visibility");
  return Pe((p(), d(
    "div",
    {
      class: L(["vue-recycle-scroller", {
        ready: l.ready,
        "page-mode": o.pageMode,
        [`direction-${e.direction}`]: !0
      }]),
      onScrollPassive: t[0] || (t[0] = (...u) => n.handleScroll && n.handleScroll(...u))
    },
    [
      e.$slots.before ? (p(), d(
        "div",
        Su,
        [
          G(e.$slots, "before")
        ],
        512
        /* NEED_PATCH */
      )) : $("v-if", !0),
      (p(), q(ve(o.listTag), {
        ref: "wrapper",
        style: Po({ [e.direction === "vertical" ? "minHeight" : "minWidth"]: l.totalSize + "px" }),
        class: L(["vue-recycle-scroller__item-wrapper", o.listClass])
      }, {
        default: j(() => [
          (p(!0), d(
            N,
            null,
            K(l.pool, (u) => (p(), q(ve(o.itemTag), Te({
              key: u.nr.id,
              style: l.ready ? {
                transform: `translate${e.direction === "vertical" ? "Y" : "X"}(${u.position}px) translate${e.direction === "vertical" ? "X" : "Y"}(${u.offset}px)`,
                width: o.gridItems ? `${e.direction === "vertical" && o.itemSecondarySize || o.itemSize}px` : void 0,
                height: o.gridItems ? `${e.direction === "horizontal" && o.itemSecondarySize || o.itemSize}px` : void 0
              } : null,
              class: ["vue-recycle-scroller__item-view", [
                o.itemClass,
                {
                  hover: !o.skipHover && l.hoverKey === u.nr.key
                }
              ]]
            }, Hl(o.skipHover ? {} : {
              mouseenter: () => {
                l.hoverKey = u.nr.key;
              },
              mouseleave: () => {
                l.hoverKey = null;
              }
            })), {
              default: j(() => [
                G(e.$slots, "default", {
                  item: u.item,
                  index: u.nr.index,
                  active: u.nr.used
                })
              ]),
              _: 2
              /* DYNAMIC */
            }, 1040, ["style", "class"]))),
            128
            /* KEYED_FRAGMENT */
          )),
          G(e.$slots, "empty")
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["style", "class"])),
      e.$slots.after ? (p(), d(
        "div",
        Pu,
        [
          G(e.$slots, "after")
        ],
        512
        /* NEED_PATCH */
      )) : $("v-if", !0),
      M(a, { onNotify: n.handleResize }, null, 8, ["onNotify"])
    ],
    34
    /* CLASS, HYDRATE_EVENTS */
  )), [
    [i, n.handleVisibilityChange]
  ]);
}
Yo.render = Ou;
Yo.__file = "src/components/RecycleScroller.vue";
var Wo = {
  name: "DynamicScroller",
  components: {
    RecycleScroller: Yo
  },
  provide() {
    return typeof ResizeObserver < "u" && (this.$_resizeObserver = new ResizeObserver((e) => {
      requestAnimationFrame(() => {
        if (Array.isArray(e)) {
          for (const t of e)
            if (t.target && t.target.$_vs_onResize) {
              let o, s;
              if (t.borderBoxSize) {
                const l = t.borderBoxSize[0];
                o = l.inlineSize, s = l.blockSize;
              } else
                o = t.contentRect.width, s = t.contentRect.height;
              t.target.$_vs_onResize(t.target.$_vs_id, o, s);
            }
        }
      });
    })), {
      vscrollData: this.vscrollData,
      vscrollParent: this,
      vscrollResizeObserver: this.$_resizeObserver
    };
  },
  inheritAttrs: !1,
  props: {
    ...Vl,
    minItemSize: {
      type: [Number, String],
      required: !0
    }
  },
  emits: [
    "resize",
    "visible"
  ],
  data() {
    return {
      vscrollData: {
        active: !0,
        sizes: {},
        keyField: this.keyField,
        simpleArray: !1
      }
    };
  },
  computed: {
    simpleArray: kl,
    itemsWithSize() {
      const e = [], { items: t, keyField: o, simpleArray: s } = this, l = this.vscrollData.sizes, n = t.length;
      for (let a = 0; a < n; a++) {
        const i = t[a], u = s ? a : i[o];
        let f = l[u];
        typeof f > "u" && !this.$_undefinedMap[u] && (f = 0), e.push({
          item: i,
          id: u,
          size: f
        });
      }
      return e;
    }
  },
  watch: {
    items() {
      this.forceUpdate();
    },
    simpleArray: {
      handler(e) {
        this.vscrollData.simpleArray = e;
      },
      immediate: !0
    },
    direction(e) {
      this.forceUpdate(!0);
    },
    itemsWithSize(e, t) {
      const o = this.$el.scrollTop;
      let s = 0, l = 0;
      const n = Math.min(e.length, t.length);
      for (let i = 0; i < n && !(s >= o); i++)
        s += t[i].size || this.minItemSize, l += e[i].size || this.minItemSize;
      const a = l - s;
      a !== 0 && (this.$el.scrollTop += a);
    }
  },
  beforeCreate() {
    this.$_updates = [], this.$_undefinedSizes = 0, this.$_undefinedMap = {}, this.$_events = wu();
  },
  activated() {
    this.vscrollData.active = !0;
  },
  deactivated() {
    this.vscrollData.active = !1;
  },
  unmounted() {
    this.$_events.all.clear();
  },
  methods: {
    onScrollerResize() {
      this.$refs.scroller && this.forceUpdate(), this.$emit("resize");
    },
    onScrollerVisible() {
      this.$_events.emit("vscroll:update", { force: !1 }), this.$emit("visible");
    },
    forceUpdate(e = !1) {
      (e || this.simpleArray) && (this.vscrollData.sizes = {}), this.$_events.emit("vscroll:update", { force: !0 });
    },
    scrollToItem(e) {
      const t = this.$refs.scroller;
      t && t.scrollToItem(e);
    },
    getItemSize(e, t = void 0) {
      const o = this.simpleArray ? t ?? this.items.indexOf(e) : e[this.keyField];
      return this.vscrollData.sizes[o] || 0;
    },
    scrollToBottom() {
      if (this.$_scrollingToBottom)
        return;
      this.$_scrollingToBottom = !0;
      const e = this.$el;
      this.$nextTick(() => {
        e.scrollTop = e.scrollHeight + 5e3;
        const t = () => {
          e.scrollTop = e.scrollHeight + 5e3, requestAnimationFrame(() => {
            e.scrollTop = e.scrollHeight + 5e3, this.$_undefinedSizes === 0 ? this.$_scrollingToBottom = !1 : requestAnimationFrame(t);
          });
        };
        requestAnimationFrame(t);
      });
    }
  }
};
function Mu(e, t, o, s, l, n) {
  const a = xs("RecycleScroller");
  return p(), q(a, Te({
    ref: "scroller",
    items: n.itemsWithSize,
    "min-item-size": o.minItemSize,
    direction: e.direction,
    "key-field": "id",
    "list-tag": e.listTag,
    "item-tag": e.itemTag
  }, e.$attrs, {
    onResize: n.onScrollerResize,
    onVisible: n.onScrollerVisible
  }), {
    default: j(({ item: i, index: u, active: f }) => [
      G(e.$slots, "default", nt(at({
        item: i.item,
        index: u,
        active: f,
        itemWithSize: i
      })))
    ]),
    before: j(() => [
      G(e.$slots, "before")
    ]),
    after: j(() => [
      G(e.$slots, "after")
    ]),
    empty: j(() => [
      G(e.$slots, "empty")
    ]),
    _: 3
    /* FORWARDED */
  }, 16, ["items", "min-item-size", "direction", "list-tag", "item-tag", "onResize", "onVisible"]);
}
Wo.render = Mu;
Wo.__file = "src/components/DynamicScroller.vue";
var Cl = {
  name: "DynamicScrollerItem",
  inject: [
    "vscrollData",
    "vscrollParent",
    "vscrollResizeObserver"
  ],
  props: {
    // eslint-disable-next-line vue/require-prop-types
    item: {
      required: !0
    },
    watchData: {
      type: Boolean,
      default: !1
    },
    /**
     * Indicates if the view is actively used to display an item.
     */
    active: {
      type: Boolean,
      required: !0
    },
    index: {
      type: Number,
      default: void 0
    },
    sizeDependencies: {
      type: [Array, Object],
      default: null
    },
    emitResize: {
      type: Boolean,
      default: !1
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  emits: [
    "resize"
  ],
  computed: {
    id() {
      if (this.vscrollData.simpleArray)
        return this.index;
      if (this.vscrollData.keyField in this.item)
        return this.item[this.vscrollData.keyField];
      throw new Error(`keyField '${this.vscrollData.keyField}' not found in your item. You should set a valid keyField prop on your Scroller`);
    },
    size() {
      return this.vscrollData.sizes[this.id] || 0;
    },
    finalActive() {
      return this.active && this.vscrollData.active;
    }
  },
  watch: {
    watchData: "updateWatchData",
    id(e, t) {
      if (this.$el.$_vs_id = this.id, this.size || this.onDataUpdate(), this.$_sizeObserved) {
        const o = this.vscrollData.sizes[t], s = this.vscrollData.sizes[e];
        o != null && o !== s && this.applySize(o);
      }
    },
    finalActive(e) {
      this.size || (e ? this.vscrollParent.$_undefinedMap[this.id] || (this.vscrollParent.$_undefinedSizes++, this.vscrollParent.$_undefinedMap[this.id] = !0) : this.vscrollParent.$_undefinedMap[this.id] && (this.vscrollParent.$_undefinedSizes--, this.vscrollParent.$_undefinedMap[this.id] = !1)), this.vscrollResizeObserver ? e ? this.observeSize() : this.unobserveSize() : e && this.$_pendingVScrollUpdate === this.id && this.updateSize();
    }
  },
  created() {
    if (!this.$isServer && (this.$_forceNextVScrollUpdate = null, this.updateWatchData(), !this.vscrollResizeObserver)) {
      for (const e in this.sizeDependencies)
        this.$watch(() => this.sizeDependencies[e], this.onDataUpdate);
      this.vscrollParent.$_events.on("vscroll:update", this.onVscrollUpdate);
    }
  },
  mounted() {
    this.finalActive && (this.updateSize(), this.observeSize());
  },
  beforeUnmount() {
    this.vscrollParent.$_events.off("vscroll:update", this.onVscrollUpdate), this.unobserveSize();
  },
  methods: {
    updateSize() {
      this.finalActive ? this.$_pendingSizeUpdate !== this.id && (this.$_pendingSizeUpdate = this.id, this.$_forceNextVScrollUpdate = null, this.$_pendingVScrollUpdate = null, this.computeSize(this.id)) : this.$_forceNextVScrollUpdate = this.id;
    },
    updateWatchData() {
      this.watchData && !this.vscrollResizeObserver ? this.$_watchData = this.$watch("item", () => {
        this.onDataUpdate();
      }, {
        deep: !0
      }) : this.$_watchData && (this.$_watchData(), this.$_watchData = null);
    },
    onVscrollUpdate({ force: e }) {
      !this.finalActive && e && (this.$_pendingVScrollUpdate = this.id), (this.$_forceNextVScrollUpdate === this.id || e || !this.size) && this.updateSize();
    },
    onDataUpdate() {
      this.updateSize();
    },
    computeSize(e) {
      this.$nextTick(() => {
        if (this.id === e) {
          const t = this.$el.offsetWidth, o = this.$el.offsetHeight;
          this.applyWidthHeight(t, o);
        }
        this.$_pendingSizeUpdate = null;
      });
    },
    applyWidthHeight(e, t) {
      const o = ~~(this.vscrollParent.direction === "vertical" ? t : e);
      o && this.size !== o && this.applySize(o);
    },
    applySize(e) {
      this.vscrollParent.$_undefinedMap[this.id] && (this.vscrollParent.$_undefinedSizes--, this.vscrollParent.$_undefinedMap[this.id] = void 0), this.vscrollData.sizes[this.id] = e, this.emitResize && this.$emit("resize", this.id);
    },
    observeSize() {
      this.vscrollResizeObserver && (this.$_sizeObserved || (this.vscrollResizeObserver.observe(this.$el), this.$el.$_vs_id = this.id, this.$el.$_vs_onResize = this.onResize, this.$_sizeObserved = !0));
    },
    unobserveSize() {
      this.vscrollResizeObserver && this.$_sizeObserved && (this.vscrollResizeObserver.unobserve(this.$el), this.$el.$_vs_onResize = void 0, this.$_sizeObserved = !1);
    },
    onResize(e, t, o) {
      this.id === e && this.applyWidthHeight(t, o);
    }
  },
  render() {
    return ee(this.tag, this.$slots.default());
  }
};
Cl.__file = "src/components/DynamicScrollerItem.vue";
const Lu = ["for"], Tu = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Du = ["title"], Eu = { class: "po-relative po-mt-1" }, zu = {
  role: "button",
  ref: "comboboxButton"
}, Bu = ["placeholder", "disabled", "id"], Au = {
  class: /* @__PURE__ */ L(["group-hover:po-text-white po-block po-truncate"])
}, Iu = {
  key: 0,
  class: "po-block po-text-xs po-opacity-60"
}, ju = {
  key: 1,
  class: "scroller po-max-h-60 po-h-full po-overflow-y-auto"
}, Ru = ["onMousedown"], Fu = {
  class: /* @__PURE__ */ L(["group-hover:po-text-white po-block po-truncate"])
}, Nu = {
  key: 0,
  class: "po-block po-text-xs po-opacity-60"
}, Hu = {
  key: 0,
  class: "po-mt-2 po-text-sm po-text-slate-500",
  id: "-description"
}, qu = {
  key: 1,
  class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
  id: "-error"
}, Yu = {
  name: "PoSelectField"
}, p2 = /* @__PURE__ */ z({
  ...Yu,
  props: {
    modelValue: { default: null },
    label: { default: "" },
    id: { default: "" },
    info: { default: null },
    list: { default: null },
    display: { default: "vertical" },
    required: { type: Boolean, default: !1 },
    errorMessage: { default: null },
    message: { default: null },
    disabled: { type: Boolean, default: !1 },
    object: { type: Boolean, default: !1 },
    dynamicScroll: { type: Boolean, default: !1 },
    placeholder: { default: void 0 }
  },
  emits: ["selected", "unSelected", "update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, s = V(""), l = V(""), n = V(), a = V(!1), i = V(!1), u = V(), f = V(null), h = V({
      viewStartIdx: 0,
      viewEndIdx: 0,
      visibleStartIdx: 0,
      visibleEndIdx: 0
    }), w = B(() => {
      var D, T;
      const S = s.value.toLowerCase();
      return S === "" ? ((D = o.list) == null ? void 0 : D.map((E) => ({
        ...E,
        active: n.value === E.id
      }))) ?? [] : ((T = o.list) == null ? void 0 : T.filter((E) => E.name.toLowerCase().includes(S)).map((E) => ({
        ...E,
        active: n.value === E.id
      }))) ?? [];
    });
    function _(S) {
      if (o.object)
        return S == null ? void 0 : S.name;
      if (w.value) {
        let D = w.value.find((T) => T.id === S);
        return D == null ? void 0 : D.name;
      } else if (o.placeholder)
        return o.placeholder;
    }
    n.value = o.modelValue, So(() => {
      n.value = o.modelValue;
    }), Q(n, () => {
      l.value = _(n.value);
    });
    const { errorMessage: g } = $e(o), b = V(g.value !== null);
    Q(g, (S, D) => {
      b.value = g.value !== null && g.value !== "";
    });
    const c = V("");
    Ot(f, () => {
      a.value = !!i.value;
    });
    function v(S) {
      n.value = S, l.value = S.name, s.value = "", t("selected", o.object ? S : S.id), t("update:modelValue", o.object ? S : S.id), a.value = !!i.value;
    }
    const m = V();
    let y;
    X(() => {
      o.id === "" ? c.value = o.id ? o.id : `${o.label.replace(
        /\s/g,
        ""
      )}-${Date.now()}-selectfield-${Math.floor(Math.random() * 9e3)}` : c.value = o.id, l.value = _(o.modelValue), y = Pt(u.value, m.value, {
        placement: "bottom-end",
        strategy: "fixed",
        modifiers: [
          {
            name: "sameWidth",
            enabled: !0,
            fn: ({ state: S }) => {
              S.styles.popper.width = `${S.rects.reference.width}px`;
            },
            phase: "beforeWrite",
            requires: ["computeStyles"]
          }
        ]
      });
    }), ae(() => {
      y && y.destroy();
    });
    function P() {
      i.value = !1, setTimeout(() => {
        a.value = !1;
      }, 100);
    }
    const k = (S) => {
      let D = S.target.value;
      s.value = D;
    };
    function A(S, D, T, E) {
      h.value.viewStartIdx = S, h.value.viewEndIdx = D, h.value.visibleStartIdx = T, h.value.visibleEndIdx = E;
    }
    function O() {
      y && y.update();
    }
    return st.on("sidebarOpen", (S) => {
      setTimeout(() => {
        y && y.update();
      }, 320);
    }), (S, D) => (p(), d("div", {
      class: L([{ "lg:po-grid lg:po-grid-cols-2": S.display === "horizontal" }]),
      ref_key: "containerRef",
      ref: f
    }, [
      r("label", {
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700",
        for: c.value
      }, [
        r("span", null, x(S.label), 1),
        S.required ? (p(), d("span", Tu, "*")) : $("", !0),
        S.info !== null ? (p(), d("abbr", {
          key: 1,
          title: S.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          M(C(to), { class: "po-fill-current" })
        ], 8, Du)) : $("", !0)
      ], 8, Lu),
      r("div", Eu, [
        r("div", zu, [
          Pe(r("input", {
            type: "text",
            ref_key: "selectBox",
            ref: u,
            class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm",
            placeholder: S.placeholder,
            disabled: S.disabled,
            "onUpdate:modelValue": D[0] || (D[0] = (T) => l.value = T),
            onInput: k,
            onFocus: D[1] || (D[1] = (T) => {
              i.value = !0, a.value = !0;
            }),
            onBlur: P,
            id: c.value
          }, null, 40, Bu), [
            [xt, l.value]
          ]),
          r("span", {
            class: "po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-rounded-r-md po-px-2 focus:po-outline-none",
            role: "button",
            onMousedown: D[2] || (D[2] = oe((T) => a.value = !a.value, ["stop"]))
          }, [
            M(C(gp), {
              class: "po-h-5 po-w-5 po-text-slate-400",
              "aria-hidden": "true"
            })
          ], 32)
        ], 512),
        Pe(r("div", {
          ref_key: "popper",
          ref: m,
          class: "po-absolute po-z-10 po-mt-1 po-w-full po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
        }, [
          S.dynamicScroll ? (p(), q(C(Wo), {
            key: 0,
            items: w.value,
            "min-item-size": 32,
            "key-field": "id",
            class: "scroller po-max-h-60 po-h-full po-overflow-y-auto",
            onResize: O,
            onUpdate: A
          }, {
            default: j(({ item: T, index: E, active: W }) => [
              M(C(Cl), {
                item: T,
                active: W,
                "size-dependencies": [T.name],
                onMousedown: oe((U) => v(T), ["stop"]),
                "data-index": E,
                class: L([
                  "po-relative po-group po-select-none po-py-2 po-pl-3 po-pr-9 po-cursor-pointer hover:po-bg-mpao-lightblue",
                  T.active ? "po-bg-mpao-lightblue po-text-white" : "po-text-slate-900"
                ])
              }, {
                default: j(() => [
                  r("span", Au, [
                    te(x((T == null ? void 0 : T.name) ?? "") + " ", 1),
                    T != null && T.subtitle ? (p(), d("span", Iu, x(T == null ? void 0 : T.subtitle), 1)) : $("", !0)
                  ])
                ]),
                _: 2
              }, 1032, ["item", "active", "size-dependencies", "onMousedown", "data-index", "class"])
            ]),
            _: 1
          }, 8, ["items"])) : (p(), d("ul", ju, [
            (p(!0), d(N, null, K(w.value, (T) => (p(), d("li", {
              onMousedown: oe((E) => v(T), ["stop"]),
              class: L([
                "po-relative po-group po-select-none po-py-2 po-pl-3 po-pr-9 po-cursor-pointer hover:po-bg-mpao-lightblue",
                T.active ? "po-bg-mpao-lightblue po-text-white" : "po-text-slate-900"
              ])
            }, [
              r("span", Fu, [
                te(x((T == null ? void 0 : T.name) ?? "") + " ", 1),
                T != null && T.subtitle ? (p(), d("span", Nu, x(T == null ? void 0 : T.subtitle), 1)) : $("", !0)
              ])
            ], 42, Ru))), 256))
          ]))
        ], 512), [
          [Vt, a.value && w.value.length > 0]
        ])
      ]),
      S.message !== null ? (p(), d("p", Hu, x(S.message), 1)) : $("", !0),
      C(g) !== null ? (p(), d("p", qu, [
        r("span", null, x(C(g)), 1)
      ])) : $("", !0)
    ], 2));
  }
}), Wu = ["disabled", "aria-disabled"], Uu = ["value", "disabled", "aria-disabled"], Zu = {
  name: "PoButton"
}, Sl = /* @__PURE__ */ z({
  ...Zu,
  props: {
    type: { default: "button" },
    actionType: { default: "default" },
    label: { default: "Button" },
    disabled: { type: Boolean, default: !1 },
    to: { default: "#" },
    overrideColors: { type: Boolean, default: !1 },
    size: { default: "md" },
    isLoading: { type: Boolean, default: !1 }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    const o = e, s = "po-rounded-md po-transition-colors po-border po-duration-100 po-ease-in-out po-cursor-pointer disabled:po-bg-slate-400 disabled:po-border-slate-400 disabled:po-cursor-default disabled:po-hover:bg-slate-400", l = B(() => {
      switch (o.size) {
        case "sm":
          return "po-px-2 po-py-1 po-text-xs";
        case "md":
          return "po-px-4 po-py-2 po-text-sm";
        case "lg":
          return "po-px-5 po-py-3 po-text-normal";
      }
    }), n = B(() => {
      if (o.overrideColors)
        return "";
      switch (o.actionType) {
        case "default":
          return "po-bg-mpao-lightblue hover:po-bg-mpao-midblue focus:po-bg-mpao-midblue po-text-slate-50 po-border-mpao-lightblue hover:po-border-mpao-midblue focus:border-mpao-midblue";
        case "danger":
          return "po-bg-mpao-red hover:po-bg-rose-600 focus:po-bg-mpao-red po-text-white po-border-mpao-red hover:po-border-rose-600 focus:po-border-rose-600";
        case "success":
          return "po-bg-mpao-green hover:po-bg-green-500 focus:po-bg-mpao-green po-text-white po-border-mpao-green hover:po-border-green-500 focus:po-border-green-500";
        case "ghost":
          return "po-bg-white hover:po-bg-slate-100 focus:po-bg-slate-100 po-text-slate-600 po-border-slate-300 hover:po-border-slate-400 focus:po-border-slate-400";
      }
    });
    return (a, i) => (p(), d(N, null, [
      a.isLoading ? (p(), d("span", {
        key: 0,
        class: L([[s, l.value], "po-bg-slate-200 hover:po-bg-slate-200 focus:po-bg-slate-200"])
      }, [
        M(eo, {
          "dot-color": "po-bg-slate-500",
          class: "po-relative -po-bottom-[0.2rem]"
        })
      ], 2)) : $("", !0),
      a.type == "button" && !a.isLoading ? (p(), d("button", Te({
        key: 1,
        onClick: i[0] || (i[0] = oe((u) => a.$emit("button-click", a.to), ["prevent"])),
        class: [s, l.value, n.value],
        disabled: a.disabled,
        "aria-disabled": a.disabled
      }, a.$attrs), [
        G(a.$slots, "label", {}, () => [
          te(x(a.label), 1)
        ])
      ], 16, Wu)) : $("", !0),
      a.type == "submit" && !a.isLoading ? (p(), d("input", Te({
        key: 2,
        type: "submit",
        class: [s, l.value, n.value],
        value: a.label,
        disabled: a.disabled,
        "aria-disabled": a.disabled
      }, a.$attrs), null, 16, Uu)) : $("", !0),
      a.type == "link" && !a.isLoading ? (p(), d("a", Te({
        key: 3,
        href: "#",
        onClick: i[1] || (i[1] = oe((u) => a.$emit("button-click", a.to), ["prevent"])),
        class: [s, l.value, n.value]
      }, a.$attrs), [
        G(a.$slots, "label", {}, () => [
          te(x(a.label), 1)
        ])
      ], 16)) : $("", !0),
      a.type == "simple" && !a.isLoading ? (p(), d("a", {
        key: 4,
        href: "#",
        onClick: i[2] || (i[2] = oe((u) => a.$emit("button-click", a.to), ["prevent"])),
        class: L(["po-text-sm po-transition-colors po-duration-100 po-ease-in-out po-inline-flex po-items-center po-space-x-1", [
          { "po-text-mpao-lightblue hover:po-text-mpao-midblue": !a.overrideColors }
        ]])
      }, [
        G(a.$slots, "label", {}, () => [
          te(x(a.label), 1)
        ])
      ], 2)) : $("", !0)
    ], 64));
  }
}), Gu = /* @__PURE__ */ r("div", { class: "po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity" }, null, -1), Ku = { class: "po-fixed po-z-10 po-inset-0" }, Xu = { class: "po-flex po-justify-center po-items-start po-min-h-screen sm:po-px-4 sm:po-pt-10 sm:po-pb-20 po-text-center sm:po-block po-max-h-screen po-overflow-y-hidden" }, Qu = /* @__PURE__ */ r("span", {
  class: "po-hidden sm:po-inline-block sm:po-align-middle sm:po-h-screen",
  "aria-hidden": "true"
}, "​", -1), Ju = { class: "po-flex po-items-center po-bg-white po-rounded-t-xl po-p-5" }, ed = { class: "po-grow po-text-md po-font-bold po-text-slate-600" }, td = { class: "po-shrink-0" }, od = /* @__PURE__ */ r("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), sd = {
  key: 0,
  class: "po-bg-slate-50 po-rounded-b-xl"
}, ld = {
  name: "PoModal"
}, so = /* @__PURE__ */ z({
  ...ld,
  props: {
    openBtnLabel: { default: "" },
    modalTitle: { default: "Modal windows" },
    show: { type: Boolean, default: !1 },
    modalWidth: { default: "sm:po-max-w-xl" },
    modalHeight: { default: "" }
  },
  emits: ["modal-closed"],
  setup(e, { emit: t }) {
    const o = e, { show: s } = $e(o), l = V(!1);
    Q(s, () => {
      l.value = s.value;
    });
    function n() {
      l.value = !1, t("modal-closed", !0);
    }
    const a = o.modalTitle.toLowerCase().replace(/\s+/g, "-"), i = new URLSearchParams(window.location.search);
    return l.value = i.get("modal") !== void 0 && i.get("modal") === a, (u, f) => (p(), d("div", null, [
      u.openBtnLabel.length > 0 ? (p(), q(C(Sl), {
        key: 0,
        label: u.openBtnLabel,
        onClick: f[0] || (f[0] = (h) => l.value = !0)
      }, null, 8, ["label"])) : $("", !0),
      (p(), q(kt, { to: "body" }, [
        M(C(Dt), {
          as: "template",
          show: l.value
        }, {
          default: j(() => [
            M(C(Gt), {
              as: "div",
              class: "po-relative po-z-50",
              onClose: n
            }, {
              default: j(() => [
                M(C(qe), {
                  as: "template",
                  enter: "po-ease-out po-duration-300",
                  "enter-from": "po-opacity-0",
                  "enter-to": "po-opacity-100",
                  leave: "po-ease-in po-duration-200",
                  "leave-from": "po-opacity-100",
                  "leave-to": "po-opacity-0"
                }, {
                  default: j(() => [
                    Gu
                  ]),
                  _: 1
                }),
                r("div", Ku, [
                  r("div", Xu, [
                    Qu,
                    M(C(qe), {
                      as: "template",
                      enter: "po-ease-out po-duration-300",
                      "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                      "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                      leave: "po-ease-in po-duration-200",
                      "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                      "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                    }, {
                      default: j(() => [
                        M(C(Kt), {
                          class: L(["po-relative po-inline-block po-align-bottom po-bg-white sm:po-rounded-xl po-text-left po-shadow-xl po-transform po-transition-all sm:po-align-top po-w-full", u.modalWidth])
                        }, {
                          default: j(() => [
                            r("div", Ju, [
                              r("h3", ed, x(u.modalTitle), 1),
                              r("div", td, [
                                r("span", {
                                  role: "button",
                                  class: "po-block",
                                  onClick: n
                                }, [
                                  M(C(Ht), { class: "po-w-5 po-stroke-slate-500 hover:po-stroke-mpao-orange po-transition-colors po-duration-150 po-ease-in-out" })
                                ])
                              ])
                            ]),
                            od,
                            r("div", {
                              class: L(["po-p-5 po-overflow-y-auto", [
                                {
                                  "po-max-h-[calc(100vh-220px)]": u.$slots.footer
                                },
                                {
                                  "po-max-h-[calc(100vh-145px)]": !u.$slots.footer
                                },
                                u.modalHeight
                              ]])
                            }, [
                              G(u.$slots, "content")
                            ], 2),
                            u.$slots.footer ? (p(), d("div", sd, [
                              G(u.$slots, "footer")
                            ])) : $("", !0)
                          ]),
                          _: 3
                        }, 8, ["class"])
                      ]),
                      _: 3
                    })
                  ])
                ])
              ]),
              _: 3
            })
          ]),
          _: 3
        }, 8, ["show"])
      ]))
    ]));
  }
});
var Vo = {}, nd = {
  get exports() {
    return Vo;
  },
  set exports(e) {
    Vo = e;
  }
};
(function(e, t) {
  (function(o, s) {
    e.exports = s();
  })(Yl, function() {
    var o = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, s = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, l = /\d\d/, n = /\d\d?/, a = /\d*[^-_:/,()\s\d]+/, i = {}, u = function(c) {
      return (c = +c) + (c > 68 ? 1900 : 2e3);
    }, f = function(c) {
      return function(v) {
        this[c] = +v;
      };
    }, h = [/[+-]\d\d:?(\d\d)?|Z/, function(c) {
      (this.zone || (this.zone = {})).offset = function(v) {
        if (!v || v === "Z")
          return 0;
        var m = v.match(/([+-]|\d\d)/g), y = 60 * m[1] + (+m[2] || 0);
        return y === 0 ? 0 : m[0] === "+" ? -y : y;
      }(c);
    }], w = function(c) {
      var v = i[c];
      return v && (v.indexOf ? v : v.s.concat(v.f));
    }, _ = function(c, v) {
      var m, y = i.meridiem;
      if (y) {
        for (var P = 1; P <= 24; P += 1)
          if (c.indexOf(y(P, 0, v)) > -1) {
            m = P > 12;
            break;
          }
      } else
        m = c === (v ? "pm" : "PM");
      return m;
    }, g = { A: [a, function(c) {
      this.afternoon = _(c, !1);
    }], a: [a, function(c) {
      this.afternoon = _(c, !0);
    }], S: [/\d/, function(c) {
      this.milliseconds = 100 * +c;
    }], SS: [l, function(c) {
      this.milliseconds = 10 * +c;
    }], SSS: [/\d{3}/, function(c) {
      this.milliseconds = +c;
    }], s: [n, f("seconds")], ss: [n, f("seconds")], m: [n, f("minutes")], mm: [n, f("minutes")], H: [n, f("hours")], h: [n, f("hours")], HH: [n, f("hours")], hh: [n, f("hours")], D: [n, f("day")], DD: [l, f("day")], Do: [a, function(c) {
      var v = i.ordinal, m = c.match(/\d+/);
      if (this.day = m[0], v)
        for (var y = 1; y <= 31; y += 1)
          v(y).replace(/\[|\]/g, "") === c && (this.day = y);
    }], M: [n, f("month")], MM: [l, f("month")], MMM: [a, function(c) {
      var v = w("months"), m = (w("monthsShort") || v.map(function(y) {
        return y.slice(0, 3);
      })).indexOf(c) + 1;
      if (m < 1)
        throw new Error();
      this.month = m % 12 || m;
    }], MMMM: [a, function(c) {
      var v = w("months").indexOf(c) + 1;
      if (v < 1)
        throw new Error();
      this.month = v % 12 || v;
    }], Y: [/[+-]?\d+/, f("year")], YY: [l, function(c) {
      this.year = u(c);
    }], YYYY: [/\d{4}/, f("year")], Z: h, ZZ: h };
    function b(c) {
      var v, m;
      v = c, m = i && i.formats;
      for (var y = (c = v.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(T, E, W) {
        var U = W && W.toUpperCase();
        return E || m[W] || o[W] || m[U].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(R, F, Y) {
          return F || Y.slice(1);
        });
      })).match(s), P = y.length, k = 0; k < P; k += 1) {
        var A = y[k], O = g[A], S = O && O[0], D = O && O[1];
        y[k] = D ? { regex: S, parser: D } : A.replace(/^\[|\]$/g, "");
      }
      return function(T) {
        for (var E = {}, W = 0, U = 0; W < P; W += 1) {
          var R = y[W];
          if (typeof R == "string")
            U += R.length;
          else {
            var F = R.regex, Y = R.parser, H = T.slice(U), Z = F.exec(H)[0];
            Y.call(E, Z), T = T.replace(Z, "");
          }
        }
        return function(ie) {
          var J = ie.afternoon;
          if (J !== void 0) {
            var xe = ie.hours;
            J ? xe < 12 && (ie.hours += 12) : xe === 12 && (ie.hours = 0), delete ie.afternoon;
          }
        }(E), E;
      };
    }
    return function(c, v, m) {
      m.p.customParseFormat = !0, c && c.parseTwoDigitYear && (u = c.parseTwoDigitYear);
      var y = v.prototype, P = y.parse;
      y.parse = function(k) {
        var A = k.date, O = k.utc, S = k.args;
        this.$u = O;
        var D = S[1];
        if (typeof D == "string") {
          var T = S[2] === !0, E = S[3] === !0, W = T || E, U = S[2];
          E && (U = S[2]), i = this.$locale(), !T && U && (i = m.Ls[U]), this.$d = function(H, Z, ie) {
            try {
              if (["x", "X"].indexOf(Z) > -1)
                return new Date((Z === "X" ? 1e3 : 1) * H);
              var J = b(Z)(H), xe = J.year, ze = J.month, Oe = J.day, Ie = J.hours, Me = J.minutes, Le = J.seconds, We = J.milliseconds, Ue = J.zone, Se = new Date(), Ze = Oe || (xe || ze ? 1 : Se.getDate()), ct = xe || Se.getFullYear(), je = 0;
              xe && !ze || (je = ze > 0 ? ze - 1 : Se.getMonth());
              var ft = Ie || 0, lt = Me || 0, vt = Le || 0, ht = We || 0;
              return Ue ? new Date(Date.UTC(ct, je, Ze, ft, lt, vt, ht + 60 * Ue.offset * 1e3)) : ie ? new Date(Date.UTC(ct, je, Ze, ft, lt, vt, ht)) : new Date(ct, je, Ze, ft, lt, vt, ht);
            } catch {
              return new Date("");
            }
          }(A, D, O), this.init(), U && U !== !0 && (this.$L = this.locale(U).$L), W && A != this.format(D) && (this.$d = new Date("")), i = {};
        } else if (D instanceof Array)
          for (var R = D.length, F = 1; F <= R; F += 1) {
            S[1] = D[F - 1];
            var Y = m.apply(this, S);
            if (Y.isValid()) {
              this.$d = Y.$d, this.$L = Y.$L, this.init();
              break;
            }
            F === R && (this.$d = new Date(""));
          }
        else
          P.call(this, k);
      };
    };
  });
})(nd);
const ad = Vo, rd = ["for"], id = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, pd = ["title"], ud = { class: "po-relative po-mt-1" }, dd = {
  role: "button",
  ref: "comboboxButton"
}, cd = ["disabled", "id"], fd = { class: "po-flex po-items-center po-justify-between po-w-full po-px-2 po-pb-1" }, vd = {
  class: "po-p-2 po-rounded-md hover:po-bg-slate-100 po-cursor-pointer po-transition-colors po-duration-150 po-ease-out po-text-sm po-slate-600 po-select-none",
  role: "button"
}, hd = /* @__PURE__ */ r("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), md = { class: "po-grid po-grid-cols-3 po-p-1" }, bd = { class: "" }, gd = ["onClick"], yd = {
  key: 0,
  class: "po-mt-2 po-text-sm po-text-slate-500"
}, wd = {
  name: "PoMonthYearPicker"
}, u2 = /* @__PURE__ */ z({
  ...wd,
  props: {
    modelValue: { default: null },
    label: { default: "" },
    minDate: { default: le().subtract(10, "year").format("DD-MM-YYYY") },
    maxDate: { default: le().add(10, "year").format("DD-MM-YYYY") },
    id: { default: "" },
    info: { default: null },
    display: { default: "vertical" },
    required: { type: Boolean, default: !1 },
    message: { default: null },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e;
    le.extend(Wl), le.extend(Ul), le.extend(ad), le.tz.setDefault("Indian/Maldives");
    const s = V(""), l = V(!1), n = V(), a = V(null), i = V(le().year()), u = V(le().month()), f = V(""), h = V(), w = V({
      viewStartIdx: 0,
      viewEndIdx: 0,
      visibleStartIdx: 0,
      visibleEndIdx: 0
    });
    let _;
    X(() => {
      if (o.modelValue) {
        const O = le(`02-${o.modelValue + 1}`, "DD-MM-YYYY");
        s.value = o.modelValue, u.value = O.month() + 1, i.value = O.year();
      }
      o.id === "" ? f.value = o.id ? o.id : `${o.label.replace(
        /\s/g,
        ""
      )}-${Date.now()}-month-picker-${Math.floor(Math.random() * 9e3)}` : f.value = o.id, _ = Pt(n.value, h.value, {
        placement: "bottom-end",
        strategy: "fixed",
        modifiers: [
          {
            name: "sameWidth",
            enabled: !0,
            fn: ({ state: O }) => {
              O.styles.popper.width = `${O.rects.reference.width}px`;
            },
            phase: "beforeWrite",
            requires: ["computeStyles"]
          }
        ]
      });
    });
    const g = B(() => i.value === le(o.minDate, "DD-MM-YYYY").year()), b = B(() => i.value === le(o.maxDate, "DD-MM-YYYY").year());
    B(() => {
      const O = le(o.minDate, "DD-MM-YYYY").year(), S = le(o.maxDate, "DD-MM-YYYY").year();
      return Array.from(
        { length: S - O + 1 },
        (D, T) => O + T
      );
    });
    const c = B(() => Array.from({ length: 12 }, (O, S) => ({
      number: S + 1,
      year: i.value,
      value: `${le(`${S + 1}-23-2023`).format("MM")}-${i.value}`,
      name: le().month(S).format("MMM"),
      disabled: g.value && S + 1 < le(o.minDate, "DD-MM-YYYY").month() + 1 || b.value && S + 1 > le(o.maxDate, "DD-MM-YYYY").month() + 1
    })));
    function v(O) {
      return s.value === O.value;
    }
    function m() {
      i.value !== le(o.maxDate, "DD-MM-YYYY").year() && (i.value = le(`01-01-${i.value}`, "DD-MM-YYYY").add(1, "year").year());
    }
    function y() {
      i.value !== le(o.minDate, "DD-MM-YYYY").year() && (i.value = le(`01-01-${i.value}`, "DD-MM-YYYY").subtract(1, "year").year());
    }
    function P(O) {
      O.disabled || (s.value = O.value, u.value = O.number, i.value = O.year, t("update:modelValue", O.value));
    }
    Ot(a, () => {
      l.value = !1;
    }), st.on("sidebarOpen", (O) => {
      setTimeout(() => {
        _ && _.update();
      }, 320);
    }), ae(() => {
      _ && _.destroy();
    });
    function k(O, S, D, T) {
      w.value.viewStartIdx = O, w.value.viewEndIdx = S, w.value.visibleStartIdx = D, w.value.visibleEndIdx = T;
    }
    function A() {
      _ && _.update();
    }
    return (O, S) => (p(), d("div", {
      class: L([{ "lg:po-grid lg:po-grid-cols-2": O.display === "horizontal" }]),
      ref_key: "containerRef",
      ref: a
    }, [
      r("label", {
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700",
        for: f.value
      }, [
        r("span", null, x(O.label), 1),
        O.required ? (p(), d("span", id, "*")) : $("", !0),
        O.info !== null ? (p(), d("abbr", {
          key: 1,
          title: O.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          M(C(to), { class: "po-fill-current" })
        ], 8, pd)) : $("", !0)
      ], 8, rd),
      r("div", ud, [
        r("div", dd, [
          Pe(r("input", {
            type: "text",
            ref_key: "selectBox",
            ref: n,
            readonly: "",
            class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm",
            disabled: O.disabled,
            "onUpdate:modelValue": S[0] || (S[0] = (D) => s.value = D),
            onFocus: S[1] || (S[1] = (D) => l.value = !0),
            id: f.value
          }, null, 40, cd), [
            [xt, s.value]
          ]),
          r("span", {
            class: "po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-rounded-r-md po-px-2 focus:po-outline-none",
            role: "button",
            onMousedown: S[2] || (S[2] = oe((D) => l.value = !l.value, ["stop"]))
          }, [
            M(C(mp), {
              class: "po-h-5 po-w-5 po-text-slate-400",
              "aria-hidden": "true"
            })
          ], 32)
        ], 512),
        Pe(r("div", {
          ref_key: "popper",
          ref: h,
          class: "po-absolute po-z-10 po-mt-1 po-w-full po-rounded-md po-max-w-[290px] po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm",
          onResize: A,
          onUpdate: k
        }, [
          r("div", fd, [
            r("span", {
              class: "po-p-2 po-rounded-md hover:po-bg-slate-100 po-cursor-pointer po-transition-colors po-duration-150 po-ease-out po-select-none",
              role: "button",
              onClick: y
            }, [
              M(C(Vs), { class: "po-w-4 po-stroke-slate-500 po-stroke-2" })
            ]),
            r("span", vd, x(i.value), 1),
            r("span", {
              class: "po-p-2 po-rounded-md hover:po-bg-slate-100 po-cursor-pointer po-transition-colors po-duration-150 po-ease-out po-select-none",
              role: "button",
              onClick: m
            }, [
              M(C(ks), { class: "po-w-4 po-stroke-slate-500 po-stroke-2" })
            ])
          ]),
          hd,
          r("div", md, [
            (p(!0), d(N, null, K(c.value, (D) => (p(), d("div", bd, [
              r("span", {
                class: L(["po-flex po-items-center po-justify-center po-py-2 po-px-2 po-group", [{ "po-cursor-pointer": !D.disabled }]]),
                onClick: (T) => P(D)
              }, [
                r("span", {
                  class: L(["po-px-4 po-text-sm po-py-1 po-rounded-full po-text-center po-transition-colors po-duration-150 po-ease-out", [
                    {
                      " po-text-slate-600 group-hover:po-bg-slate-100": !v(D) && !D.disabled
                    },
                    {
                      "po-cursor-default po-select-none po-text-slate-400": D.disabled
                    },
                    {
                      " po-text-white po-bg-mpao-lightblue group-hover:po-bg-purple-600": v(D)
                    }
                  ]])
                }, x(D.name), 3)
              ], 10, gd)
            ]))), 256))
          ])
        ], 544), [
          [Vt, l.value]
        ])
      ]),
      O.message !== null ? (p(), d("p", yd, x(O.message), 1)) : $("", !0)
    ], 2));
  }
}), _d = { class: "po-text-sm po-font-medium po-text-slate-700 po-cursor-pointer po-select-none po-flex po-items-center po-space-x-1" }, $d = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, xd = {
  name: "PoToggle"
}, d2 = /* @__PURE__ */ z({
  ...xd,
  props: {
    modelValue: { type: Boolean, default: !1 },
    label: { default: "" },
    required: { type: Boolean, default: !1 }
  },
  setup(e) {
    const o = V(e.modelValue);
    return (s, l) => (p(), q(C(yr), {
      as: "div",
      class: "po-flex po-items-center"
    }, {
      default: j(() => [
        M(C(wr), {
          modelValue: o.value,
          "onUpdate:modelValue": l[0] || (l[0] = (n) => o.value = n),
          onClick: l[1] || (l[1] = (n) => s.$emit("update:modelValue", !o.value)),
          class: L([
            o.value ? "po-bg-mpao-lightblue" : "po-bg-slate-200",
            "po-relative po-inline-flex po-h-6 po-w-11 po-flex-shrink-0 po-cursor-pointer po-rounded-full po-border-2 po-border-transparent po-transition-colors po-duration-200 po-ease-in-out focus:po-outline-none focus:po-ring-2 focus:po-ring-mpao-lightblue focus:po-ring-offset-2"
          ])
        }, {
          default: j(() => [
            r("span", {
              "aria-hidden": "true",
              class: L([
                o.value ? "po-translate-x-5" : "po-translate-x-0",
                "po-pointer-events-none po-inline-block po-h-5 po-w-5 po-transform po-rounded-full po-bg-white po-shadow po-ring-0 po-transition po-duration-200 po-ease-in-out"
              ])
            }, null, 2)
          ]),
          _: 1
        }, 8, ["modelValue", "class"]),
        M(C(_r), {
          as: "span",
          class: "po-ml-3"
        }, {
          default: j(() => [
            r("span", _d, [
              r("span", null, x(s.label), 1),
              s.required ? (p(), d("span", $d, "*")) : $("", !0)
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Vd = { class: "po-pt-1 po-space-y-1 po-border-r-2 po-border-slate-200 po-relative" }, kd = ["onClick"], Cd = {
  name: "PoSectionMenu"
}, c2 = /* @__PURE__ */ z({
  ...Cd,
  props: {
    currPageRoute: { default: "" },
    menuItems: { default: null }
  },
  emits: ["link-click"],
  setup(e, { emit: t }) {
    return (o, s) => (p(), d("ul", Vd, [
      (p(!0), d(N, null, K(o.menuItems, (l) => (p(), d("li", null, [
        r("span", {
          onClick: (n) => o.$emit("link-click", l.link),
          role: "button",
          class: L([
            "po-relative po-cursor-pointer -po-right-[0.15rem] po-py-1 po-border-r-2 hover:po-border-mpao-lightblue po-transition-colors po-duration-200 po-ease-in-out po-flex po-items-center po-space-x-2",
            {
              "po-border-mpao-lightblue po-text-sm po-text-mpao-lightblue": l.link == o.currPageRoute
            },
            {
              "po-border-slate-200 po-text-sm po-text-slate-600": l.link !== o.currPageRoute
            }
          ])
        }, [
          (p(), q(ve(l.icon), { class: "po-w-4 po-h-4 po-stroke-current" })),
          r("span", null, x(l.label), 1)
        ], 10, kd)
      ]))), 256))
    ]));
  }
}), Sd = { class: "po-relative po-flex po-items-start" }, Pd = { class: "po-flex po-h-5 po-items-center" }, Od = ["name", "id", "checked", "disabled", "aria-describedby"], Md = { class: "po-ml-3 po-text-sm" }, Ld = ["for"], Td = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Dd = ["id"], Ed = { class: "po-sr-only" }, zd = ["id"], Bd = {
  name: "PoCheckbox"
}, f2 = /* @__PURE__ */ z({
  ...Bd,
  props: {
    modelValue: { type: Boolean, default: !1 },
    label: { default: "" },
    id: { default: "checkbox-0" },
    message: { default: null },
    errorMessage: { default: null },
    disabled: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 }
  },
  emits: "update:modelValue",
  setup(e, { emit: t }) {
    return (o, s) => (p(), d("div", null, [
      r("div", Sd, [
        r("div", Pd, [
          r("input", Te({
            name: `${o.id}-field`,
            id: o.id,
            checked: o.modelValue,
            disabled: o.disabled,
            "aria-describedby": `${o.id}-description`
          }, o.$attrs, {
            onInput: s[0] || (s[0] = (l) => o.$emit("update:modelValue", l.target.checked)),
            type: "checkbox",
            class: ["po-h-4 po-w-4 po-rounded po-border-slate-300 po-text-mpao-lightblue focus:po-ring-mpao-lightblue", [{ "po-bg-slate-200": o.disabled }]]
          }), null, 16, Od)
        ]),
        r("div", Md, [
          r("label", {
            for: o.id,
            class: "po-font-medium po-text-slate-600 po-cursor-pointer po-select-none po-flex po-items-center po-space-x-1"
          }, [
            r("span", null, x(o.label), 1),
            o.required ? (p(), d("span", Td, "*")) : $("", !0)
          ], 8, Ld),
          o.message ? (p(), d("span", {
            key: 0,
            id: `${o.id}-description`,
            class: "po-text-slate-500 po-cursor-default"
          }, [
            r("span", Ed, x(o.label), 1),
            te(" " + x(o.message), 1)
          ], 8, Dd)) : $("", !0)
        ])
      ]),
      o.errorMessage !== null ? (p(), d("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${o.id}-error`
      }, x(o.errorMessage), 9, zd)) : $("", !0)
    ]));
  }
});
function Ad(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", { d: "M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" }),
    r("path", { d: "M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" })
  ]);
}
function Id(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "fill-rule": "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      "clip-rule": "evenodd"
    })
  ]);
}
function jd(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", { d: "M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" })
  ]);
}
function Pl(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "fill-rule": "evenodd",
      d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Rd(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "fill-rule": "evenodd",
      d: "M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z",
      "clip-rule": "evenodd"
    })
  ]);
}
const Fd = ["for"], Nd = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Hd = ["title"], qd = ["name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], Yd = ["id"], Wd = ["id"], Ud = {
  name: "PoTextarea"
}, v2 = /* @__PURE__ */ z({
  ...Ud,
  props: {
    modelValue: { default: "" },
    label: { default: "" },
    id: { default: "" },
    info: { default: null },
    message: { default: null },
    errorMessage: { default: null },
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    placeholder: { default: void 0 },
    display: { default: "vertical" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = (s) => {
      let l = s.target.value;
      t("update:modelValue", l);
    };
    return (s, l) => (p(), d("div", {
      class: L(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": s.display === "horizontal" }]])
    }, [
      r("label", {
        for: s.id,
        class: "po-text-sm po-font-medium po-text-slate-700 po-flex po-items-center po-space-x-1"
      }, [
        r("span", null, x(s.label), 1),
        s.required ? (p(), d("span", Nd, "*")) : $("", !0),
        s.info !== null ? (p(), d("abbr", {
          key: 1,
          title: s.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          M(C(Pl))
        ], 8, Hd)) : $("", !0)
      ], 8, Fd),
      r("textarea", Te({
        name: `${s.id}-field`,
        id: s.id,
        value: s.modelValue,
        placeholder: s.placeholder,
        disabled: s.disabled,
        required: s.required,
        "aria-describedby": `${s.id}-description`,
        "aria-required": s.required,
        "aria-disabled": s.disabled
      }, s.$attrs, {
        onInput: o,
        class: "po-mt-1 po-peer po-px-3 po-py-2 po-block po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-border-slate-300 po-bg-white focus:po-border-mpao-lightblue focus:po-ring-0 invalid:po-border-red-400 invalid:po-focus:border-red-600 invalid:focus:po-ring-red-600 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default"
      }), null, 16, qd),
      s.message !== null ? (p(), d("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${s.id}-description`
      }, x(s.message), 9, Yd)) : $("", !0),
      s.errorMessage !== null ? (p(), d("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${s.id}-error`
      }, x(s.errorMessage), 9, Wd)) : $("", !0)
    ], 2));
  }
}), Zd = /* @__PURE__ */ r("div", { class: "po-pb-5 po-max-w-xl" }, [
  /* @__PURE__ */ r("span", { class: "po-text-sm po-text-slate-600" }, "We're always working to improve our app, and we're excited to share the latest changes with you. We hope you enjoy these new features and improvements")
], -1), Gd = { class: "po-flex po-space-x-2" }, Kd = ["onClick"], Xd = { class: "po-text-sm po-font-semibold po-slate-800" }, Qd = { class: "po-text-xs po-text-white po-px-1 po-py-0 po-rounded-md po-bg-mpao-lightblue" }, Jd = { class: "po-bg-gradient-to-t po-from-mpao-orange/20 po-via-mpao-lightblue/20 po-to-purple-500/10 -po-mb-5 -po-mx-5 po-p-5 po-pb-10" }, ec = { key: 0 }, tc = { class: "po-space-y-2 po-mt-5" }, oc = { class: "po-border po-border-slate-200 po-rounded-lg po-p-3 po-bg-white" }, sc = { class: "po-flex po-items-center po-space-x-2" }, lc = { class: "po-text-mpao-lightblue po-grow po-text-lg" }, nc = { class: "po-font-semibold po-shrink-0 po-text-mpao-lightblue po-text-sm po-px-2 po-py-1 po-rounded-xl po-bg-mpao-lightblue/10" }, ac = ["innerHTML"], rc = {
  key: 0,
  class: "po-bg-white po-rounded-md po-px-4 po-py-3 po-block po-text-sm po-text-center po-text-mpao-lightblue hover:po-text-purple-600 po-cursor-pointer"
}, ic = /* @__PURE__ */ z({
  __name: "ChangeLogModel",
  props: {
    changelog: { default: null },
    showBtn: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = V(!1), o = V(0);
    return (s, l) => (p(), d(N, null, [
      s.showBtn ? (p(), d("a", {
        key: 0,
        href: "#",
        onClick: l[0] || (l[0] = oe((n) => t.value = !0, ["prevent"])),
        class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
      }, "Change logs")) : $("", !0),
      M(so, {
        show: t.value,
        onModalClosed: l[1] || (l[1] = (n) => t.value = !1),
        "modal-title": "Change Log",
        "modal-width": "sm:po-max-w-4xl",
        id: "change-log-modal"
      }, {
        content: j(() => [
          r("div", null, [
            Zd,
            r("div", Gd, [
              (p(!0), d(N, null, K(s.changelog, (n, a) => (p(), d("span", {
                class: L(["po-flex po-items-center po-space-x-1 po-px-4 po-py-3 po-rounded-t-xl po-cursor-pointer", [{ "po-bg-purple-500/10": o.value === a }]]),
                onClick: (i) => o.value = a
              }, [
                r("span", Xd, x(n.label) + " Version", 1),
                r("span", Qd, x(n.latest_version), 1)
              ], 10, Kd))), 256))
            ]),
            r("div", Jd, [
              (p(!0), d(N, null, K(s.changelog, (n, a) => (p(), d("div", null, [
                o.value === a ? (p(), d("div", ec, [
                  r("div", tc, [
                    (p(!0), d(N, null, K(n.version_history, (i) => (p(), d("div", oc, [
                      r("span", sc, [
                        r("span", lc, x(i.date), 1),
                        r("span", nc, x(i.version), 1)
                      ]),
                      r("div", {
                        class: "po-mt-3 po-prose-sm po-prose-slate",
                        innerHTML: i.note
                      }, null, 8, ac)
                    ]))), 256)),
                    n.hasMore ? (p(), d("span", rc, "More")) : $("", !0)
                  ])
                ])) : $("", !0)
              ]))), 256))
            ])
          ])
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Et = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [s, l] of t)
    o[s] = l;
  return o;
}, pc = {}, uc = {
  class: "po-h-8",
  src: "https://pension.gov.mv/asset/image/en-ccc-2020-issa.png",
  alt: "issa Certificate"
};
function dc(e, t) {
  return p(), d("img", uc);
}
const cc = /* @__PURE__ */ Et(pc, [["render", dc]]), fc = {}, vc = {
  class: "po-h-8",
  src: "https://pension.gov.mv/asset/image/iso_logo.png",
  alt: "ISO 27001 Certificate"
};
function hc(e, t) {
  return p(), d("img", vc);
}
const mc = /* @__PURE__ */ Et(fc, [["render", hc]]), bc = { class: "-po-m-5" }, gc = ["src", "alt"], _s = /* @__PURE__ */ z({
  __name: "CertificateModel",
  props: {
    src: { default: "" },
    title: { default: "" },
    logo: { default: null }
  },
  setup(e) {
    const t = V(!1);
    return (o, s) => (p(), d(N, null, [
      (p(), q(ve(o.logo), {
        onClick: s[0] || (s[0] = oe((l) => t.value = !0, ["prevent"])),
        class: "po-cursor-pointer",
        role: "button"
      })),
      M(so, {
        show: t.value,
        onModalClosed: s[1] || (s[1] = (l) => t.value = !1),
        "modal-title": o.title,
        "modal-width": "sm:po-max-w-4xl",
        id: "change-log-modal"
      }, {
        content: j(() => [
          r("div", bc, [
            r("img", {
              src: o.src,
              alt: o.title
            }, null, 8, gc)
          ])
        ]),
        _: 1
      }, 8, ["show", "modal-title"])
    ], 64));
  }
}), yc = /* @__PURE__ */ r("div", { class: "po-prose-sm po-prose-slate po-p-5 po-opacity-8" }, [
  /* @__PURE__ */ r("h2", { class: "po-text-red-500" }, "Sample Terms and Conditions"),
  /* @__PURE__ */ r("h3", null, "1. Acceptance of Terms"),
  /* @__PURE__ */ r("p", null, " By accessing and using this web app, you agree to be bound by these terms and conditions. "),
  /* @__PURE__ */ r("h3", null, "2. User Responsibilities"),
  /* @__PURE__ */ r("p", null, " Users are responsible for maintaining the confidentiality of their account information and complying with all applicable laws. "),
  /* @__PURE__ */ r("h3", null, "3. Privacy Policy"),
  /* @__PURE__ */ r("p", null, [
    /* @__PURE__ */ te(" Our privacy policy outlines how we collect, use, and protect your personal information. Please review our "),
    /* @__PURE__ */ r("a", { href: "privacy.html" }, "Privacy Policy"),
    /* @__PURE__ */ te(" for more details. ")
  ]),
  /* @__PURE__ */ r("h3", null, "4. Intellectual Property"),
  /* @__PURE__ */ r("p", null, " All content and materials provided on this web app are protected by intellectual property laws. Unauthorized use is prohibited. "),
  /* @__PURE__ */ r("h3", null, "5. Limitation of Liability"),
  /* @__PURE__ */ r("p", null, " We are not liable for any damages or losses incurred from the use of this web app, including but not limited to, errors, omissions, or interruptions. "),
  /* @__PURE__ */ r("h3", null, "6. Modification of Terms"),
  /* @__PURE__ */ r("p", null, " We reserve the right to modify or update these terms and conditions at any time without prior notice. It is your responsibility to review them periodically. "),
  /* @__PURE__ */ r("h3", null, "7. Governing Law"),
  /* @__PURE__ */ r("p", null, " These terms and conditions shall be governed by and construed in accordance with the laws of your jurisdiction. "),
  /* @__PURE__ */ r("h3", null, "8. Contact Us"),
  /* @__PURE__ */ r("p", null, [
    /* @__PURE__ */ te(" If you have any questions or concerns about these terms and conditions, please contact us at "),
    /* @__PURE__ */ r("a", { href: "mailto:info@pension.gov.mv" }, "info@pension.gov.mv"),
    /* @__PURE__ */ te(". ")
  ])
], -1), wc = /* @__PURE__ */ z({
  __name: "ToCModel",
  setup(e) {
    const t = V(!1);
    return (o, s) => (p(), d(N, null, [
      r("a", {
        href: "#",
        onClick: s[0] || (s[0] = oe((l) => t.value = !0, ["prevent"])),
        role: "button",
        class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
      }, "Terms & Conditions"),
      M(so, {
        show: t.value,
        onModalClosed: s[1] || (s[1] = (l) => t.value = !1),
        "modal-title": "Terms & Conditions",
        "modal-width": "sm:po-max-w-3xl",
        id: "change-log-modal"
      }, {
        content: j(() => [
          yc
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), _c = /* @__PURE__ */ r("div", { class: "po-prose-sm po-prose-slate po-p-5 po-opacity-80" }, [
  /* @__PURE__ */ r("h2", { class: "po-text-red-500" }, "Sample Privacy Policy"),
  /* @__PURE__ */ r("h3", null, "1. Information Collection"),
  /* @__PURE__ */ r("p", null, " We may collect personal information such as name, contact details, and pension-related data necessary for providing our services. "),
  /* @__PURE__ */ r("h3", null, "2. Use of Information"),
  /* @__PURE__ */ r("p", null, " The collected information is used for the purpose of administering pensions, processing applications, and communicating with users. "),
  /* @__PURE__ */ r("h3", null, "3. Data Security"),
  /* @__PURE__ */ r("p", null, " We implement appropriate security measures to protect personal information from unauthorized access, alteration, or disclosure. "),
  /* @__PURE__ */ r("h3", null, "4. Third-Party Disclosure"),
  /* @__PURE__ */ r("p", null, " We may share personal information with trusted third parties only to the extent necessary for pension administration purposes. "),
  /* @__PURE__ */ r("h3", null, "5. Cookies and Tracking"),
  /* @__PURE__ */ r("p", null, " We use cookies and similar technologies to enhance user experience and collect non-personal information about website usage. "),
  /* @__PURE__ */ r("h3", null, "6. Data Retention"),
  /* @__PURE__ */ r("p", null, " We retain personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law. "),
  /* @__PURE__ */ r("h3", null, "7. User Rights"),
  /* @__PURE__ */ r("p", null, " Users have the right to access, update, and delete their personal information. Please contact us to exercise these rights. "),
  /* @__PURE__ */ r("h3", null, "8. Children's Privacy"),
  /* @__PURE__ */ r("p", null, " This web app is not intended for children under the age of 13. We do not knowingly collect or store personal information from children. "),
  /* @__PURE__ */ r("h3", null, "9. Changes to Privacy Policy"),
  /* @__PURE__ */ r("p", null, " We reserve the right to modify or update this privacy policy at any time. Users will be notified of any significant changes. "),
  /* @__PURE__ */ r("h3", null, "8. Contact Us"),
  /* @__PURE__ */ r("p", null, [
    /* @__PURE__ */ te(" If you have any questions or concerns about our privacy policy, please contact us at "),
    /* @__PURE__ */ r("a", { href: "mailto:info@pension.gov.mv" }, "info@pension.gov.mv"),
    /* @__PURE__ */ te(". ")
  ])
], -1), $c = /* @__PURE__ */ z({
  __name: "PrivacyPolicyModel",
  setup(e) {
    const t = V(!1);
    return (o, s) => (p(), d(N, null, [
      r("a", {
        href: "#",
        onClick: s[0] || (s[0] = oe((l) => t.value = !0, ["prevent"])),
        role: "button",
        class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
      }, "Privacy Policy"),
      M(so, {
        show: t.value,
        onModalClosed: s[1] || (s[1] = (l) => t.value = !1),
        "modal-title": "Privacy Policy",
        "modal-width": "sm:po-max-w-3xl",
        id: "change-log-modal"
      }, {
        content: j(() => [
          _c
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), xc = { class: "po-grid po-gap-5 po-grid-cols-1 lg:po-grid-cols-2 po-px-6 lg:po-px-8 po-mt-10 po-pb-10" }, Vc = { class: "sm:po-flex po-items-start sm:po-space-x-5" }, kc = /* @__PURE__ */ r("svg", {
  class: "po-h-10",
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  "fill-rule": "evenodd",
  "stroke-linejoin": "round",
  "stroke-miterlimit": "2",
  "clip-rule": "evenodd",
  viewBox: "0 0 343 287"
}, [
  /* @__PURE__ */ r("path", {
    fill: "#203057",
    d: "M61.305 92.088a16.74 16.74 0 0 1-2.583.542 12.086 12.086 0 0 0-4.604 1.425L108.41 0h21.308c-22.054 9.263-22.871 36.388-23.021 46.463-.237.008-.467.017-.708.042-5.509.462-13.509 3.245-20.296 13.904-2.267 3.512-4.392 7.341-6.263 10.721l-.125.204c-6.429 11.579-10.725 18.766-18 20.754ZM261.87 71.267c0-.013-.079-.142-.092-.159-1.987-3.575-4.045-7.279-6.225-10.683-6.82-10.675-14.795-13.458-20.295-13.908a6.116 6.116 0 0 0-.755-.063c-.358-12.162-2.37-21.821-6.12-29.492C224.449 8.912 218.67 3.233 211.17 0h21.104l54.109 93.708a12.134 12.134 0 0 0-3.884-1.05c-.875-.104-1.7-.3-2.408-.487-.063-.029-.167-.067-.167-.067-7.271-1.979-11.575-9.175-18.054-20.837ZM112.871 197.965c3.809 7.767 9.363 13.342 16.538 16.588h-21L54.384 120.99c1.371.692 2.837 1.146 4.337 1.292 1.034.112 1.979.362 2.592.529 7.267 1.971 11.575 9.179 18 20.754 2.412 4.329 4.275 7.65 6.379 10.938 6.8 10.65 14.783 13.445 20.288 13.9.266.02.512.029.754.029.358 12.166 2.362 21.829 6.137 29.533Zm149.045-54.381c6.442-11.571 10.738-18.767 18.009-20.759.745-.2 1.641-.425 2.575-.529 1.25-.121 2.45-.446 3.608-.933l-53.829 93.204h-20.063c21.375-9.537 22.175-36.212 22.313-46.104.229-.013.462-.021.716-.042 5.513-.462 13.505-3.246 20.309-13.908 2.304-3.625 4.558-7.667 6.362-10.929Zm-82.546 28.807v.208c.037 12.463 5.654 19.896 15.033 19.896 13.329 0 17.767-4.317 17.767-29.808V94.903l17.433-13.47v81.254c0 .241-.108 3.041-.217 5.746l-.158 3.7c-.071 1.975-.142 3.687-.167 4.458a1.689 1.689 0 0 0-.079.383c0 .104.021.196.033.3-2.454 24.05-13.783 35.746-34.612 35.746-8.758 0-16.329-3.292-21.925-9.542a2.922 2.922 0 0 0-2.15-.945c-.825 0-1.613.358-2.15.975-5.567 6.308-12.746 9.512-21.35 9.512-22.246 0-34.05-14.842-35.104-44.121 7.871-1.337 13.466-6.258 15.471-8.325l1.87-1.433v3.546c0 25.341 5.725 29.808 17.763 29.808 13.312 0 14.921-17.183 15.117-20.629.3-5.413 4.116-9.663 8.691-9.663h.325c4.709.2 8.409 4.68 8.409 10.188Zm-68.52-37.313V42.615c0-.104.088-.579.284-1.396 1.737-27.029 13.429-40.171 35.696-40.171 8.962 0 16.75 3.405 22.512 9.821.754.871 2.3.892 3.121-.012 5.712-6.509 13.1-9.809 21.937-9.809 22.938 0 35.021 15.355 35.93 45.638-7.934 1.075-13.717 6.146-15.817 8.275l-3.125 2.408v-5.171c0-24.833-5.25-29.012-16.988-29.012-12.616 0-14.129 16.55-14.325 19.875-.304 5.937-4.437 10.417-9.608 10.417h-.221c-5.137-.23-9.162-5.055-9.162-11.009v-.183c-.034-11.971-5.371-19.1-14.254-19.1-12.946 0-16.963 4.004-16.963 29.012v68.192l-19.017 14.688Z"
  }),
  /* @__PURE__ */ r("path", {
    fill: "#ec6e25",
    d: "m165.883 91.539-15.875 12.271-15.171-11.733V67.535l31.046 24.004Zm9.441 31.844 15.884-12.288 15.195 11.763-.004 24.529-31.075-24.004Zm-64.934 39.882c-.042.014-.031.008-.014.001l-.286.016c-1.067.113-2 .171-2.784.175h-.075c-.241-.017-.462-.004-.858-.004a24.05 24.05 0 0 1-.829-.104c-.038-.013-.075-.013-.117-.013 0 0-.012 0-.054-.016 0 0-.046-.009-.088-.009-4.07-.633-10.07-3.125-15.408-11.5-1.967-3.083-3.737-6.225-6.212-10.666-5.534-9.946-9.913-17.255-16.088-21.005-.092-.045-2.221-1.379-5.375-2.245a23.775 23.775 0 0 0-1.771-.392l-1.858-.292c-.121 0-.233-.016-.554-.15-.684-.196-1.275-.433-1.713-.679a1.038 1.038 0 0 0-.25-.146l-.133-.091c-.117-.075-.233-.138-.346-.234-.208-.141-.404-.296-.604-.45-.008-.029-.042-.062-.042-.062-.571-.488-1.133-1.084-1.508-1.609-.05-.087-.1-.191-.15-.25-.129-.187-.233-.362-.367-.562l-.346-.675c-.054-.104-.116-.217-.225-.458l-.162-.392a4.5 4.5 0 0 1-.121-.308 9.748 9.748 0 0 0-.042-.092.188.188 0 0 0-.033-.1 10.976 10.976 0 0 1-.237-.817 10.23 10.23 0 0 1-.196-.85c-.038-.3-.088-.587-.125-.983a17.836 17.836 0 0 1-.054-.771c.008-.292.037-.587.066-.975.025-.308.075-.604.125-.954.063-.279.117-.546.217-.917.058-.25.129-.475.204-.7.025-.046.042-.121.042-.121.008-.025.016-.058.033-.075.067-.191.133-.366.254-.654l.463-.966.162-.25c.109-.188.225-.367.367-.596.829-1.188 1.829-2.129 3.083-2.834.188-.1.363-.2.579-.295.375-.184.863-.334 1.596-.484l.317-.071c.121-.025.233-.054.337-.054.117-.016.238-.025.438-.071.275-.029.533-.075.783-.129.404-.058 1.117-.2 1.609-.346a.998.998 0 0 0 .291-.062c1.975-.575 5.017-1.796 8.134-4.283 4.77-4.059 8.512-10.446 13.283-19.025 1.946-3.53 3.958-7.171 6.129-10.563 5.446-8.529 11.558-11.029 15.992-11.575l-.009 21.342c-.67.612-1.37 1.483-2.05 2.541-1.933 3.021-3.795 6.392-5.45 9.363l-.15.267c-3.458 6.22-7.383 13.27-12.491 19.187l-2.142 2a1.423 1.423 0 0 0-.129 1.983c.092.088.208.175.208.175l1.946 2.238c.067.062.15.125.242.204.221.246.421.517.641.771l.309.35c.012.042.121.183.137.217 4.659 5.762 8.363 12.42 11.325 17.75l.571 1.033c1.583 2.846 3.229 5.787 4.983 8.529a14.943 14.943 0 0 0 1.667 2.171c.504.429 1.35.967 2.563.967 1.166 0 2.375-.534 3.483-1.488.062-.037.225-.158.258-.187l1.592-1.538 24.154-18.529 8.271-6.479c.083-.063.154-.134.237-.229l71.888-55.605c1.787-1.808 6.662-6.125 13.142-6.958.25 0 .991-.029 1.766-.075l.671-.017c.583-.033 1.1-.054 1.317-.054 4.387.371 10.812 2.684 16.541 11.634 2.184 3.45 4.317 7.27 6.205 10.662 5.458 9.846 9.791 17.096 15.758 20.796.079.087.179.154.258.221 1.663 1.021 3.404 1.787 5.159 2.246.133.041.258.041.295.02.35.084.73.175 1.121.271.054.009.129.042.179.042.013 0 .15.021.159.021.475.087.958.162 1.491.225 4.367.454 7.767 4.712 7.884 9.871-.15 5.179-3.55 9.42-7.896 9.883-.854.096-3.233.417-4.15.654-9.354 3.158-13.879 11.442-18.667 20.229-.529.954-1.046 1.917-1.591 2.896-1.884 3.383-4 7.208-6.2 10.663-5.45 8.512-11.546 11.041-15.988 11.587v-21.337c.658-.584 1.358-1.459 2.054-2.542 1.967-3.092 3.804-6.417 5.425-9.35l.125-.196c3.029-5.454 9.467-15.325 14.596-21.762a1.419 1.419 0 0 0-.05-1.855c-.521-.558-1.146-1.283-1.829-2.07a1.192 1.192 0 0 0-.488-.346 60.342 60.342 0 0 1-3.341-4.304c-.113-.146-.204-.275-.275-.371 0 0-.067-.138-.088-.167-3.329-4.721-6.208-9.908-8.546-14.104l-.15-.279c-1.266-2.284-2.625-4.584-3.895-6.738l-1.463-2.487c-1.104-1.854-2.487-2.813-4.129-2.813-.596 0-1.138.142-1.604.296l-.392.154-20.537 15.563-43.45 33.587-39.988 31.125a1.463 1.463 0 0 0-.683.304l-3.113 2.417s-.146.125-.262.229c-1.692 1.717-6.554 5.909-12.904 6.929Z"
  }),
  /* @__PURE__ */ r("path", {
    fill: "#203057",
    d: "M9.142 250.096c8.762 0 12.862 3.154 12.862 10.838v3.341c0 7.492-4.242 10.98-12.862 10.98H6.646v11.116H0v-36.275h9.142Zm0 18.892c4.708 0 6.262-1.604 6.262-5.042v-2.683c0-3.442-1.129-5.233-6.171-5.233H6.596v12.958h2.546Zm39.011-18.892v5.654h-14.37v9.325h12.25v5.842h-12.25v9.567h15.033v5.937H27.283v-36.325h20.87Zm28.511 36.277h-6.313l-10.65-22.992.567 13.758v9.234h-6.454v-36.23h6.454l10.646 23.888-.704-15.313v-8.575h6.454v36.23Zm17.293-30.764c-3.579 0-5.042 1.129-5.042 4.571 0 4.566 3.63 4.191 9.142 5.041 4.192.654 8.196 2.354 8.196 9.609 0 8.383-3.629 11.92-12.342 11.92-9.046 0-11.921-4.383-11.921-10.225h6.546c.146 2.78 1.371 4.288 5.513 4.288 3.912 0 5.704-1.65 5.704-5.746 0-4.287-5.088-4.287-8.954-4.808-4.096-.517-8.429-2.542-8.429-10.034 0-6.783 4.141-10.316 11.587-10.316 6.55 0 10.883 2.4 11.496 9.654h-6.55c-.188-3.063-1.792-3.954-4.946-3.954Zm17.716-5.465h6.55v36.275h-6.55v-36.275Zm12.631 25.722v-15.358c0-7.68 3.346-10.838 12.108-10.838 8.763 0 12.392 3.158 12.392 10.838v15.358c0 7.492-3.771 10.837-12.392 10.837-8.621 0-12.108-3.345-12.108-10.837Zm18-.329v-14.7c0-3.296-.85-5.417-5.892-5.417-4.712 0-5.608 2.121-5.608 5.417v14.7c0 3.441.896 5.416 5.608 5.416 4.713 0 5.892-1.975 5.892-5.416Zm35.526 10.836h-6.313l-10.65-22.992.567 13.758v9.234h-6.454v-36.23h6.454l10.646 23.888-.704-15.313v-8.575h6.454v36.23Zm17.861-10.507v-15.358c0-7.68 3.346-10.838 12.108-10.838 8.763 0 12.392 3.158 12.392 10.838v15.358c0 7.492-3.771 10.837-12.392 10.837-8.621 0-12.108-3.345-12.108-10.837Zm18-.329v-14.7c0-3.296-.85-5.417-5.892-5.417-4.712 0-5.608 2.121-5.608 5.417v14.7c0 3.441.896 5.416 5.608 5.416 4.713 0 5.892-1.975 5.892-5.416Zm33.925-19.506H232.82v9.046h12.533v5.891H232.82v15.45h-6.454v-36.32h21.25v5.933Zm26.007 0h-14.791v9.046h12.533v5.891h-12.533v15.45h-6.455v-36.32h21.246v5.933Zm4.809-5.887h6.55v36.275h-6.55v-36.275Zm37.133 25.015c0 7.962-3.771 11.308-12.392 11.308-8.62 0-12.108-3.346-12.108-10.837v-14.746c0-7.679 3.346-10.838 12.108-10.838 8.763 0 12.392 3.204 12.392 11.263h-6.5c0-3.534-.85-5.513-5.892-5.513-4.712 0-5.608 1.979-5.608 5.417V275.3c0 3.442.896 5.421 5.608 5.421 4.713 0 5.892-1.979 5.892-5.562h6.5Zm26.243-25.063v5.654h-14.37v9.325h12.25v5.842h-12.25v9.567h15.033v5.937h-21.533v-36.325h20.87Z"
  })
], -1), Cc = { class: "po-mt-5 sm:po-mt-0" }, Sc = /* @__PURE__ */ r("p", { class: "-po-mt-1 po-text-xs po-text-slate-500" }, " 8th Floor, Allied Building , Chaandhanee Magu, Malé, 20156, Maldives ", -1), Pc = { class: "po-mt-1 po-text-xs po-text-slate-500" }, Oc = { class: "po-mt-1 po-text-xs po-text-slate-500 po-flex -po-mb-2 po-flex-wrap" }, Mc = {
  href: "https://www.pension.gov.mv",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, Lc = /* @__PURE__ */ r("span", null, "www.pension.gov.mv", -1), Tc = {
  href: "mailto:info@pension.gov.mv",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, Dc = /* @__PURE__ */ r("span", null, "info@pension.gov.mv", -1), Ec = {
  href: "tel:1441",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, zc = /* @__PURE__ */ r("span", null, "1441", -1), Bc = { class: "po-flex lg:po-items-end po-flex-col" }, Ac = { class: "-po-mt-1 po-text-xs po-text-slate-500 po-flex -po-mb-2 po-flex-wrap" }, Ic = { class: "po-flex po-space-x-2 po-mt-3 lg:po-justify-end" }, jc = {
  name: "PoFooter"
}, h2 = /* @__PURE__ */ z({
  ...jc,
  props: {
    changelog: { default: null }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, s) => (p(), d("div", null, [
      r("section", xc, [
        r("div", Vc, [
          kc,
          r("div", Cc, [
            Sc,
            r("p", Pc, " © " + x(new Date().getFullYear()) + " Pension Office, All Rights Reserved. ", 1),
            r("p", Oc, [
              r("a", Mc, [
                M(C(jd), { class: "po-w-3 po-h-3 po-fill-current" }),
                Lc
              ]),
              r("a", Tc, [
                M(C(Ad), { class: "po-w-3 po-h-3 po-fill-current" }),
                Dc
              ]),
              r("a", Ec, [
                M(C(Rd), { class: "po-w-3 po-h-3 po-fill-current" }),
                zc
              ])
            ])
          ])
        ]),
        r("div", Bc, [
          r("nav", Ac, [
            M(ic, {
              "show-btn": o.changelog !== null,
              changelog: o.changelog
            }, null, 8, ["show-btn", "changelog"]),
            M(wc),
            M($c)
          ]),
          r("div", Ic, [
            M(_s, {
              logo: mc,
              title: "ISO/IEC 27001:2013 Certificate",
              src: ""
            }),
            M(_s, {
              logo: cc,
              title: "issa Certificate",
              src: ""
            })
          ])
        ])
      ])
    ]));
  }
}), Rc = { class: "po-text-sm po-text-red-700" }, Fc = {
  key: 0,
  class: "po-text-sm po-text-red-800 po-list-disc po-ml-5 po-mt-2"
}, Nc = {
  key: 1,
  class: "po-flex po-items-start po-space-x-3 po-p-5 po-bg-green-50 po-rounded-md po-mt-5"
}, Hc = { class: "po-text-sm po-text-green-700" }, qc = {
  name: "PoFormStatusMessage"
}, m2 = /* @__PURE__ */ z({
  ...qc,
  props: {
    isError: { type: Boolean, default: !1 },
    message: { default: "This is a form status" },
    errorList: { default: null }
  },
  setup(e) {
    return (t, o) => t.isError ? (p(), d("div", {
      key: 0,
      class: L(["po-flex po-space-x-3 po-p-3 po-bg-red-50 po-rounded-md", [
        { "po-items-start": t.errorList !== null },
        { "po-items-center": t.errorList === null }
      ]])
    }, [
      M(C(co), { class: "po-shrink-0 po-w-6 po-stroke-red-600" }),
      r("div", null, [
        r("span", Rc, x(t.message), 1),
        t.errorList !== null ? (p(), d("ul", Fc, [
          (p(!0), d(N, null, K(t.errorList, (s) => (p(), d("li", null, x(s), 1))), 256))
        ])) : $("", !0)
      ])
    ], 2)) : (p(), d("div", Nc, [
      M(C(on), { class: "po-w-6 po-stroke-green-600" }),
      r("div", null, [
        r("span", Hc, x(t.message), 1)
      ])
    ]));
  }
}), Yc = {
  key: 0,
  class: "po-text-lg po-text-red-400 po-font-semibold"
}, Wc = {
  key: 0,
  class: "po-mt-1 po-flex -po-mb-3 po-flex-wrap"
}, Uc = { class: "po-flex po-flex-1" }, Zc = { class: "po-flex po-flex-col" }, Gc = {
  key: 0,
  class: "po-mt-2 po-text-sm po-text-slate-500"
}, Kc = {
  key: 1,
  class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1"
}, Xc = {
  name: "PoRadioInput"
}, b2 = /* @__PURE__ */ z({
  ...Xc,
  props: {
    modelValue: { default: null },
    options: { default: null },
    label: { default: "" },
    display: { default: "vertical" },
    required: { type: Boolean, default: !1 },
    errorMessage: { default: null },
    message: { default: null }
  },
  emits: ["selected", "unSelected", "update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, s = V();
    s.value = o.modelValue, So(() => {
      s.value = o.modelValue;
    }), Q(s, () => {
      t("update:modelValue", s.value), t("selected", s.value);
    });
    const { errorMessage: l } = $e(o), n = V();
    return Q(l, (a, i) => {
      n.value = l.value !== null && l.value !== "";
    }), (a, i) => (p(), q(C(hr), {
      modelValue: s.value,
      "onUpdate:modelValue": i[0] || (i[0] = (u) => s.value = u),
      class: L([{ "lg:po-grid lg:po-grid-cols-2": a.display === "horizontal" }])
    }, {
      default: j(() => [
        M(C(vs), { class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700" }, {
          default: j(() => [
            r("span", null, x(a.label), 1),
            a.required ? (p(), d("span", Yc, "*")) : $("", !0)
          ]),
          _: 1
        }),
        a.options !== null ? (p(), d("div", Wc, [
          (p(!0), d(N, null, K(a.options, (u) => (p(), q(C(br), {
            as: "template",
            key: u.id,
            value: u.id
          }, {
            default: j(({ checked: f, active: h }) => [
              r("div", {
                class: L([
                  "po-transition-colors po-duration-100 po-ease-out po-mr-3",
                  "",
                  "",
                  "po-mb-3 po-pt-[0.13rem] po-relative po-flex po-cursor-pointer focus:po-outline-none"
                ])
              }, [
                r("span", {
                  class: L(["po-w-5 po-h-5 po-rounded-full po-border po-mr-2 po-flex po-items-center po-justify-center", [
                    "",
                    f ? "po-border-mpao-lightblue" : "po-border-slate-400"
                  ]])
                }, [
                  r("span", {
                    class: L(["po-w-3 po-h-3 po-rounded-full", [
                      "",
                      f ? "po-bg-mpao-lightblue" : "po-bg-transparent"
                    ]])
                  }, null, 2)
                ], 2),
                r("span", Uc, [
                  r("span", Zc, [
                    M(C(vs), {
                      as: "span",
                      class: "po-block po-text-sm po-font-medium po-text-gray-900"
                    }, {
                      default: j(() => [
                        te(x(u.title), 1)
                      ]),
                      _: 2
                    }, 1024),
                    u.description ? (p(), q(C(gr), {
                      key: 0,
                      as: "span",
                      class: "po-mt-1 po-flex po-items-center po-text-sm po-text-gray-500"
                    }, {
                      default: j(() => [
                        te(x(u.description), 1)
                      ]),
                      _: 2
                    }, 1024)) : $("", !0)
                  ])
                ])
              ], 2)
            ]),
            _: 2
          }, 1032, ["value"]))), 128))
        ])) : $("", !0),
        r("div", null, [
          a.message !== null ? (p(), d("p", Gc, x(a.message), 1)) : $("", !0),
          n.value && C(l) !== null ? (p(), d("p", Kc, [
            M(C(gl), { class: "po-fill-current po-w-4 po-mt-[0.2rem] po-shrink-0" }),
            r("span", null, x(C(l)), 1)
          ])) : $("", !0)
        ])
      ]),
      _: 1
    }, 8, ["modelValue", "class"]));
  }
}), Qc = { class: "po-bg-white po-relative po-group po-rounded-xl focus-within:po-ring-2 focus-within:po-ring-inset focus-within:po-ring-indigo-500" }, Jc = { class: "po-block po-p-4 po-transition-colors po-duration-75 po-ease-linear" }, e1 = { class: "po-flex po-items-start po-space-x-2" }, t1 = { class: "po-flex po-items-start po-space-x-1" }, o1 = { class: "po-block po-text-2xl po-font-light po-text-slate-600" }, s1 = {
  key: 0,
  class: "po-text-sm po-text-green-500 po-font-medium po-pt-1"
}, l1 = { class: "po-text-sm po-tracking-wide po-text-slate-500" }, n1 = {
  name: "PoStatsBlock"
}, g2 = /* @__PURE__ */ z({
  ...n1,
  props: {
    items: { default: null },
    numberOfCols: { default: "po-grid-cols-1 lg:po-grid-cols-3" }
  },
  setup(e) {
    return (t, o) => (p(), d("div", {
      class: L(["po-grid po-gap-5", t.numberOfCols])
    }, [
      (p(!0), d(N, null, K(t.items, (s) => (p(), d("div", Qc, [
        r("span", Jc, [
          r("div", e1, [
            r("div", null, [
              r("span", {
                class: L([
                  "po-inline-flex po-p-2 po-rounded-md",
                  s.bgColor,
                  s.iconColor
                ])
              }, [
                (p(), q(ve(s.icon), { class: "po-w-4 po-h-4" }))
              ], 2)
            ]),
            r("div", null, [
              r("div", t1, [
                r("span", o1, x(s.value), 1),
                s.diff ? (p(), d("span", s1, x(s.diff), 1)) : $("", !0)
              ]),
              r("h4", l1, x(s.label), 1)
            ])
          ])
        ])
      ]))), 256))
    ], 2));
  }
}), a1 = {
  key: 0,
  class: "po-flex po-space-x-3 po-items-start"
}, r1 = { class: "po-flex po-items-center po-space-x-2" }, i1 = ["datetime"], p1 = { class: "po-text-sm po-font-medium po-text-slate-600" }, u1 = ["datetime"], d1 = { class: "flex" }, c1 = { class: "po-flex po-pt-3 po-flex-wrap po-max-w-sm" }, f1 = ["onClick"], v1 = {
  key: 1,
  class: "po-w-full po-text-center"
}, h1 = { class: "po-inline-block po-text-sm po-italic po-text-slate-500" }, m1 = /* @__PURE__ */ r("span", { class: "po-text-lg po-text-slate-300 po-px-3 po-inline-block" }, "—", -1), b1 = ["datetime"], g1 = {
  name: "PoChatLogItem"
}, y2 = /* @__PURE__ */ z({
  ...g1,
  props: {
    item: { default: null }
  },
  setup(e) {
    return (t, o) => (p(), d("li", {
      class: L([
        "po-flex po-px-5",
        { "po-justify-end po-items-end po-flex-col": t.item.type === "first" }
      ])
    }, [
      t.item.type !== "message" ? (p(), d("div", a1, [
        t.item.type !== "first" && t.item.avatar !== "" ? (p(), d("div", {
          key: 0,
          class: "po-shrink-0 po-w-8 po-h-8 po-rounded-full po-p-1 po-bg-contain po-bg-slate-100",
          style: Po({ "background-image": `url(${t.item.avatar})` })
        }, null, 4)) : $("", !0),
        r("div", {
          class: L([
            { "po-pt-1": t.item.type !== "first" },
            {
              "po-flex po-justify-end po-items-end po-flex-col": t.item.type === "first"
            }
          ])
        }, [
          r("span", r1, [
            t.item.type === "first" ? (p(), d("time", {
              key: 0,
              datetime: t.item.time,
              class: "po-text-xs po-text-slate-400"
            }, x(t.item.time_human), 9, i1)) : $("", !0),
            r("span", p1, x(t.item.name), 1),
            t.item.type === "second" ? (p(), d("time", {
              key: 1,
              datetime: t.item.time,
              class: "po-text-xs po-text-slate-400"
            }, x(t.item.time_human), 9, u1)) : $("", !0)
          ]),
          r("div", {
            class: L([
              "po-mt-2 po-space-y-1",
              {
                "po-flex po-justify-end po-items-end po-flex-col": t.item.type === "first"
              }
            ])
          }, [
            G(t.$slots, "message", {}, () => [
              (p(!0), d(N, null, K(t.item.message, (s) => (p(), d("div", d1, [
                r("p", {
                  class: L([
                    "po-text-sm po-rounded-xl po-px-4 po-py-2",
                    {
                      "po-bg-slate-100 po-text-slate-600": t.item.type !== "first"
                    },
                    {
                      "po-bg-mpao-lightblue po-text-sky-50": t.item.type === "first"
                    }
                  ])
                }, x(s), 3)
              ]))), 256))
            ]),
            r("div", c1, [
              (p(!0), d(N, null, K(t.item.actions, (s) => (p(), d("button", {
                onClick: (l) => t.$emit("button-click", s.label),
                class: "po-appearance-none po-border po-border-mpao-lightblue po-bg-white hover:po-bg-mpao-lightblue po-px-3 po-py-1 po-mb-2 po-mr-2 po-rounded-lg po-text-slate-500 hover:po-text-sky-100 po-transition-colors po-duration-150 po-ease-in-out po-text-sm po-ring-0 po-outline-none"
              }, x(s.label), 9, f1))), 256))
            ])
          ], 2)
        ], 2)
      ])) : $("", !0),
      t.item.type === "message" ? (p(), d("div", v1, [
        (p(!0), d(N, null, K(t.item.message, (s) => (p(), d("p", h1, [
          te(x(s) + " ", 1),
          m1,
          r("time", {
            datetime: t.item.time,
            class: "po-text-xs po-text-slate-400 po-inline-block"
          }, x(t.item.time_human), 9, b1)
        ]))), 256))
      ])) : $("", !0)
    ], 2));
  }
}), y1 = {
  key: 0,
  class: "po-pointer-events-auto po-w-full po-max-w-sm po-overflow-hidden po-rounded-lg po-bg-mpao-lightblue po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5"
}, w1 = { class: "po-p-4" }, _1 = { class: "po-flex po-items-start" }, $1 = { class: "po-flex-shrink-0" }, x1 = { class: "po-ml-3 po-w-0 po-flex-1 po-pt-0.5" }, V1 = { class: "po-text-sm po-font-medium po-text-sky-100" }, k1 = { class: "po-mt-1 po-text-sm po-text-sky-300" }, C1 = { class: "po-mt-3 po-flex po-space-x-4" }, S1 = { class: "po-ml-4 po-flex po-flex-shrink-0" }, P1 = /* @__PURE__ */ r("span", { class: "po-sr-only" }, "Close", -1), O1 = {
  name: "PoNotification"
}, w2 = /* @__PURE__ */ z({
  ...O1,
  props: {
    show: { type: Boolean, default: !1 },
    label: { default: "" },
    text: { default: "" },
    buttonLabel: { default: "Ok" }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    const o = e, { show: s } = $e(o), l = V(!1);
    Q(s, () => {
      l.value = !1, setTimeout(() => {
        l.value = !0;
      }, 100);
    });
    const n = V(!1);
    return Q(l, () => {
      n.value = !1, setTimeout(() => {
        n.value = !0;
      }, 200);
    }), (a, i) => l.value ? (p(), q(kt, {
      key: 0,
      to: "#po-notifications-alert"
    }, [
      M(dt, {
        "enter-active-class": "po-transform po-ease-out po-duration-300 po-transition",
        "enter-from-class": "po-translate-y-2 po-opacity-0 sm:po-translate-y-0 sm:po-translate-x-2",
        "enter-to-class": "po-translate-y-0 po-opacity-100 sm:po-translate-x-0",
        "leave-active-class": "po-transition po-ease-in po-duration-100",
        "leave-from-class": "po-opacity-100",
        "leave-to-class": "po-opacity-0"
      }, {
        default: j(() => [
          n.value ? (p(), d("div", y1, [
            r("div", w1, [
              r("div", _1, [
                r("div", $1, [
                  G(a.$slots, "icon")
                ]),
                r("div", x1, [
                  r("p", V1, x(a.label), 1),
                  r("p", k1, x(a.text), 1),
                  r("div", C1, [
                    r("button", {
                      onClick: i[0] || (i[0] = (u) => a.$emit("button-click", a.buttonLabel)),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-100 hover:po-text-sky-200 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, x(a.buttonLabel), 1),
                    r("button", {
                      onClick: i[1] || (i[1] = (u) => l.value = !1),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-300 hover:po-text-sky-500 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, " Dismiss ")
                  ])
                ]),
                r("div", S1, [
                  r("button", {
                    type: "button",
                    onClick: i[2] || (i[2] = (u) => l.value = !1),
                    class: "po-inline-flex po-rounded-md po-bg-mpao-lightblue po-text-sky-500 hover:po-text-sky-300 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                  }, [
                    P1,
                    M(C(yl), {
                      class: "po-h-5 po-w-5",
                      "aria-hidden": "true"
                    })
                  ])
                ])
              ])
            ])
          ])) : $("", !0)
        ]),
        _: 3
      })
    ])) : $("", !0);
  }
}), M1 = /* @__PURE__ */ r("div", { class: "po-fixed po-inset-0" }, null, -1), L1 = { class: "po-absolute po-inset-0 po-overflow-hidden" }, T1 = { class: "po-pointer-events-none po-fixed po-inset-y-0 po-right-0 po-flex po-max-w-full po-pl-10" }, D1 = { class: "po-flex po-h-full po-flex-col po-overflow-y-auto po-bg-white po-shadow-xl" }, E1 = { class: "po-bg-slate-50 po-py-6 po-px-4 sm:po-px-6" }, z1 = { class: "po-flex po-items-center po-justify-between" }, B1 = { class: "po-ml-3 po-flex po-h-7 po-items-center" }, A1 = /* @__PURE__ */ r("span", { class: "po-sr-only" }, "Close panel", -1), I1 = {
  key: 0,
  class: "po-mt-1"
}, j1 = { class: "po-text-sm po-text-slate-500" }, R1 = {
  key: 0,
  class: "po-bg-slate-50 po-rounded-b-xl po-shrink-0"
}, F1 = {
  name: "PoSlideover"
}, _2 = /* @__PURE__ */ z({
  ...F1,
  props: {
    label: { default: null },
    description: { default: null },
    show: { type: Boolean, default: !1 },
    maxWidth: { default: "po-max-w-lg" },
    bgColor: { default: "" },
    screenOpacity: { default: "po-bg-opacity-10" }
  },
  emits: ["slideover-closed"],
  setup(e, { emit: t }) {
    const o = e, { show: s } = $e(o), l = V(!1);
    Q(s, () => {
      l.value = s.value;
    });
    function n() {
      l.value = !1, t("slideover-closed", !0);
    }
    return (a, i) => (p(), q(C(Dt), {
      as: "template",
      show: l.value
    }, {
      default: j(() => [
        M(C(Gt), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: n
        }, {
          default: j(() => [
            M1,
            r("div", {
              class: L(["po-fixed po-inset-0 po-overflow-hidden po-bg-black", a.screenOpacity])
            }, [
              r("div", L1, [
                r("div", T1, [
                  M(C(qe), {
                    as: "template",
                    enter: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "enter-from": "po-translate-x-full",
                    "enter-to": "po-translate-x-0",
                    leave: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "leave-from": "po-translate-x-0",
                    "leave-to": "po-translate-x-full"
                  }, {
                    default: j(() => [
                      M(C(Kt), {
                        class: L([a.maxWidth, "po-pointer-events-auto po-w-screen"])
                      }, {
                        default: j(() => [
                          r("div", D1, [
                            r("div", E1, [
                              r("div", z1, [
                                M(C(nl), { class: "po-text-lg po-font-medium po-text-slate-600" }, {
                                  default: j(() => [
                                    te(x(a.label), 1)
                                  ]),
                                  _: 1
                                }),
                                r("div", B1, [
                                  r("button", {
                                    type: "button",
                                    class: "po-rounded-md po-text-slate-500 hover:po-text-mpao-lightblue focus:po-outline-none focus:po-ring-2 focus:po-ring-white",
                                    onClick: n
                                  }, [
                                    A1,
                                    M(C(Ht), {
                                      class: "po-h-6 po-w-6",
                                      "aria-hidden": "true"
                                    })
                                  ])
                                ])
                              ]),
                              a.description ? (p(), d("div", I1, [
                                r("p", j1, x(a.description), 1)
                              ])) : $("", !0)
                            ]),
                            r("div", {
                              class: L([a.bgColor, "po-relative po-grow po-pt-6 po-px-4 sm:po-px-6"])
                            }, [
                              G(a.$slots, "content")
                            ], 2),
                            a.$slots.footer ? (p(), d("div", R1, [
                              G(a.$slots, "footer")
                            ])) : $("", !0)
                          ])
                        ]),
                        _: 3
                      }, 8, ["class"])
                    ]),
                    _: 3
                  })
                ])
              ])
            ], 2)
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["show"]));
  }
}), N1 = /* @__PURE__ */ r("div", { class: "po-fixed po-inset-0 po-bg-gray-500 po-bg-opacity-25 po-transition-opacity" }, null, -1), H1 = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto po-p-4 sm:po-p-6 md:po-p-20" }, q1 = { class: "po-relative" }, Y1 = {
  key: 0,
  class: "po-max-h-96 scroll-py-3 po-overflow-y-auto po-p-3"
}, W1 = {
  name: "PoCommandPalette"
}, $2 = /* @__PURE__ */ z({
  ...W1,
  props: {
    show: { type: Boolean, default: !1 },
    showContent: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, o = V(""), { show: s } = $e(t), l = V(!1);
    Q(s, () => {
      l.value = !1, setTimeout(() => {
        l.value = !0;
      }, 100);
    });
    function n(a) {
      a.ctrlKey && a.key === "b" && (l.value = !0);
    }
    return X(() => {
      window.addEventListener("keyup", n);
    }), ko(() => {
      window.removeEventListener("keyup", n);
    }), (a, i) => (p(), q(C(Dt), {
      show: l.value,
      as: "template",
      onAfterLeave: i[2] || (i[2] = (u) => o.value = ""),
      appear: ""
    }, {
      default: j(() => [
        M(C(Gt), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: i[1] || (i[1] = (u) => l.value = !1)
        }, {
          default: j(() => [
            M(C(qe), {
              as: "template",
              enter: "po-ease-out po-duration-300",
              "enter-from": "po-opacity-0",
              "enter-to": "po-opacity-100",
              leave: "po-ease-in po-duration-200",
              "leave-from": "po-opacity-100",
              "leave-to": "po-opacity-0"
            }, {
              default: j(() => [
                N1
              ]),
              _: 1
            }),
            r("div", H1, [
              M(C(qe), {
                as: "template",
                enter: "po-ease-out po-duration-300",
                "enter-from": "po-opacity-0 po-scale-95",
                "enter-to": "po-opacity-100 po-scale-100",
                leave: "po-ease-in po-duration-200",
                "leave-from": "po-opacity-100 po-scale-100",
                "leave-to": "po-opacity-0 po-scale-95"
              }, {
                default: j(() => [
                  M(C(Kt), { class: "po-mx-auto po-max-w-xl po-transform po-divide-y po-divide-gray-100 po-overflow-hidden po-rounded-xl po-bg-white po-shadow-2xl po-ring-1 po-ring-black po-ring-opacity-5 po-transition-all" }, {
                    default: j(() => [
                      r("div", q1, [
                        M(C(yp), {
                          class: "po-pointer-events-none po-absolute po-top-3.5 po-left-4 po-h-5 po-w-5 po-text-gray-400",
                          "aria-hidden": "true"
                        }),
                        r("input", {
                          type: "text",
                          name: "",
                          class: "po-h-12 po-w-full po-border-0 po-bg-transparent po-pl-11 po-pr-4 po-text-gray-800 po-placeholder-gray-400 focus:po-ring-0 sm:po-text-sm",
                          placeholder: "Search...",
                          onChange: i[0] || (i[0] = (u) => o.value = u.target.value)
                        }, null, 32)
                      ]),
                      a.showContent ? (p(), d("div", Y1, [
                        G(a.$slots, "content")
                      ])) : $("", !0)
                    ]),
                    _: 3
                  })
                ]),
                _: 3
              })
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["show"]));
  }
}), U1 = /* @__PURE__ */ r("div", { class: "po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity" }, null, -1), Z1 = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto" }, G1 = { class: "po-flex po-min-h-full po-items-start po-justify-center po-p-4 po-text-center sm:po-p-0" }, K1 = { class: "po-p-5" }, X1 = { class: "po-text-center po-space-y-3" }, Q1 = { key: 1 }, J1 = { class: "po-text-sm po-text-gray-600" }, e0 = { class: "po-border-t po-border-slate-200 po-flex po-divide-x po-divide-slate-200" }, t0 = {
  name: "PoAlert"
}, x2 = /* @__PURE__ */ z({
  ...t0,
  props: {
    cancelBtnLabel: { default: "Cancel" },
    okBtnLabel: { default: "Ok" },
    alertTitle: { default: "" },
    alertDescription: { default: "" },
    show: { type: Boolean, default: !1 }
  },
  emits: ["alert-closed", "button-click", "confirm", "cancel"],
  setup(e, { emit: t }) {
    const o = e, { show: s } = $e(o), l = V(!1);
    Q(s, () => {
      l.value = s.value;
    });
    function n() {
      l.value = !1, t("alert-closed", !0);
    }
    return (a, i) => (p(), q(C(Dt), {
      as: "template",
      show: l.value
    }, {
      default: j(() => [
        M(C(Gt), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: n
        }, {
          default: j(() => [
            M(C(qe), {
              as: "template",
              enter: "po-ease-out po-duration-300",
              "enter-from": "po-opacity-0",
              "enter-to": "po-opacity-100",
              leave: "po-ease-in po-duration-200",
              "leave-from": "po-opacity-100",
              "leave-to": "po-opacity-0"
            }, {
              default: j(() => [
                U1
              ]),
              _: 1
            }),
            r("div", Z1, [
              r("div", G1, [
                M(C(qe), {
                  as: "template",
                  enter: "po-ease-out po-duration-300",
                  "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                  "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                  leave: "po-ease-in po-duration-200",
                  "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                  "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                }, {
                  default: j(() => [
                    M(C(Kt), { class: "po-relative po-transform po-overflow-hidden po-rounded-lg po-bg-white po-text-left po-shadow-xl po-transition-all sm:po-my-8 sm:po-w-full sm:po-max-w-sm" }, {
                      default: j(() => [
                        r("div", K1, [
                          r("div", X1, [
                            a.alertTitle !== "" ? (p(), q(C(nl), {
                              key: 0,
                              as: "h3",
                              class: "po-text-lg po-font-medium po-leading-6 po-text-gray-900"
                            }, {
                              default: j(() => [
                                te(x(a.alertTitle), 1)
                              ]),
                              _: 1
                            })) : $("", !0),
                            a.alertDescription !== "" ? (p(), d("div", Q1, [
                              r("p", J1, x(a.alertDescription), 1)
                            ])) : $("", !0)
                          ])
                        ]),
                        r("div", e0, [
                          r("button", {
                            onClick: i[0] || (i[0] = (u) => {
                              a.$emit("cancel", !0), n();
                            }),
                            class: "po-text-sm po-bg-white po-text-slate-500 hover:po-bg-slate-50 po-transition-colors po-duration-100 po-ease-out po-font-medium po-py-3 po-px-5 po-w-1/2 focus:po-ring-0"
                          }, x(a.cancelBtnLabel), 1),
                          r("button", {
                            onClick: i[1] || (i[1] = (u) => {
                              a.$emit("confirm", !0), a.$emit("button-click", "ok"), n();
                            }),
                            class: "po-text-sm po-bg-white po-text-mpao-lightblue hover:po-bg-slate-50 po-transition-colors po-duration-100 po-ease-out po-font-medium po-py-3 po-px-5 po-w-1/2 focus:po-ring-0"
                          }, x(a.okBtnLabel), 1)
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["show"]));
  }
}), o0 = {
  key: 0,
  class: "po-col-span-2 po-relative po-mt-5"
}, s0 = /* @__PURE__ */ r("span", {
  class: "po-absolute po-top-0 po-left-1 po--ml-px po-h-[calc(100%-7px)] po-w-0.5 po-bg-gray-200",
  "aria-hidden": "true"
}, null, -1), l0 = { class: "po-relative po-space-y-5" }, n0 = { class: "po-flex po-space-x-2 po-items-start" }, a0 = { class: "log-item" }, r0 = { key: 0 }, i0 = {
  key: 0,
  class: "po-text-slate-500 po-text-xs"
}, p0 = {
  key: 1,
  class: "po-text-center po-py-10"
}, u0 = { class: "po-text-sm po-text-slate-500" }, d0 = {
  name: "PoLogs"
}, V2 = /* @__PURE__ */ z({
  ...d0,
  props: {
    items: { default: null },
    emptyLabel: { default: "No logs to display." }
  },
  setup(e) {
    return (t, o) => (p(), d("div", null, [
      t.items && t.items.length > 0 ? (p(), d("div", o0, [
        s0,
        r("div", l0, [
          (p(!0), d(N, null, K(t.items, (s, l) => (p(), d("div", n0, [
            r("p", {
              class: L([
                "po-rounded-full po-w-2 po-h-2 border-1 po-border-white po-shrink-0",
                { "po-bg-orange-400": l !== t.items.length - 1 },
                ,
                { "po-bg-slate-300": l == t.items.length - 1 }
              ])
            }, null, 2),
            r("div", a0, [
              r("span", null, [
                te(x(s.label) + " on " + x(s.date) + " " + x(s.by && s.by !== "" ? "by" : "") + " ", 1),
                s.by && s.by !== "" ? (p(), d("span", r0, x(s.by), 1)) : $("", !0)
              ]),
              s.description && s.description !== "" ? (p(), d("blockquote", i0, ' "' + x(s.description) + '" ', 1)) : $("", !0)
            ])
          ]))), 256))
        ])
      ])) : (p(), d("div", p0, [
        r("span", u0, x(t.emptyLabel), 1)
      ]))
    ]));
  }
}), c0 = {
  name: "PoMain"
}, k2 = /* @__PURE__ */ z({
  ...c0,
  setup(e) {
    const t = V(!0);
    return st.on("sidebarOpen", (o) => {
      typeof o == "boolean" && (t.value = o);
    }), (o, s) => (p(), d("main", {
      class: L(["po-min-h-screen po-overflow-y-auto po-transition-all po-duration-300 po-ease-in-out po-pt-[78px] po-flex po-flex-col", [
        { "po-pl-[250px]": t.value },
        { "po-pl-[58px]": !t.value }
      ]]),
      id: "shell-content-root"
    }, [
      G(o.$slots, "default")
    ], 2));
  }
}), f0 = {
  key: 0,
  role: "list",
  class: "po-divide-y po-divide-gray-200 po-rounded-md po-border po-border-gray-200"
}, v0 = { class: "po-flex po-items-center po-justify-between po-py-3 po-pl-3 po-pr-4 po-text-sm" }, h0 = { class: "po-flex po-w-0 po-flex-1 po-items-center" }, m0 = { class: "po-ml-2 po-w-0 po-flex-1 po-truncate" }, b0 = { class: "po-ml-4 po-flex-shrink-0 po-space-x-4" }, g0 = ["onClick"], y0 = ["onClick"], w0 = {
  key: 1,
  class: "po-py-10"
}, _0 = { class: "po-text-sm po-text-slate-500" }, $0 = {
  name: "PoDownloadFileList"
}, C2 = /* @__PURE__ */ z({
  ...$0,
  props: {
    files: { default: null },
    linkLabel: { default: "Download" },
    emptyLabel: { default: "No files to download." },
    showViewBtn: { type: Boolean, default: !1 },
    viewBtnLabel: { default: "View" }
  },
  emits: ["button-click", "view-click"],
  setup(e, { emit: t }) {
    return (o, s) => (p(), d("div", null, [
      o.files && o.files.length > 0 ? (p(), d("ul", f0, [
        (p(!0), d(N, null, K(o.files, (l) => (p(), d("li", v0, [
          r("div", h0, [
            M(C(Cs), {
              class: "po-h-5 po-w-5 po-flex-shrink-0 po-text-gray-400",
              "aria-hidden": "true"
            }),
            r("span", m0, x(l.label), 1)
          ]),
          r("div", b0, [
            r("a", {
              href: "#",
              onClick: oe((n) => o.$emit("button-click", l), ["prevent"]),
              class: "po-font-medium po-text-mpao-lightblue hover:po-text-indigo-500"
            }, x(o.linkLabel), 9, g0),
            o.showViewBtn ? (p(), d("a", {
              key: 0,
              href: "#",
              onClick: oe((n) => o.$emit("view-click", l), ["prevent"]),
              class: "po-font-medium po-text-mpao-lightblue hover:po-text-indigo-500"
            }, x(o.viewBtnLabel), 9, y0)) : $("", !0)
          ])
        ]))), 256))
      ])) : (p(), d("div", w0, [
        r("span", _0, x(o.emptyLabel), 1)
      ]))
    ]));
  }
}), x0 = {
  name: "PoContentArea"
}, V0 = { class: "shell-content--area po-max-w-[1370px]" };
function k0(e, t, o, s, l, n) {
  return p(), d("section", V0, [
    G(e.$slots, "default")
  ]);
}
const S2 = /* @__PURE__ */ Et(x0, [["render", k0]]), C0 = {
  name: "AnimatedLogo"
}, S0 = /* @__PURE__ */ ql('<div><svg class="po-stroke-mpao-blue po-w-16 animated-logo" viewBox="0 0 62 55" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.76292 17.8572L7.7 17.9704V18.0682C6.87397 19.526 6.23618 20.649 5.58241 21.4779C4.93472 22.299 4.30505 22.7864 3.51417 23.0053C3.46261 23.0112 3.41718 23.0206 3.39088 23.026C3.35663 23.0331 3.31491 23.0425 3.27694 23.0511C3.25988 23.055 3.24357 23.0587 3.22903 23.0619C3.1106 23.0882 3.03712 23.1 3 23.1H2.93844L2.89561 23.1107L15.9876 0.600006H19.1308C17.2397 1.92747 16.1556 3.83665 15.5371 5.73245C14.8359 7.88203 14.7198 10.0514 14.7027 11.4258C13.1737 11.6033 11.0729 12.4434 9.38038 15.128C8.77075 16.0431 8.26353 16.9561 7.76713 17.8496L7.76292 17.8572Z"></path><path d="M48.1818 11.3241C48.047 8.39742 47.5389 6.05982 46.5472 4.07639C45.8153 2.61266 44.8203 1.39271 43.5945 0.5H46.8113L59.8583 23.0959C59.8303 23.0912 59.7891 23.0819 59.7213 23.0649C59.7166 23.0638 59.7117 23.0625 59.7066 23.0612C59.6302 23.042 59.5099 23.0118 59.3765 23.0027C58.59 22.7825 57.9627 22.2958 57.3176 21.4779C56.6586 20.6423 56.0158 19.508 55.1801 18.0331L55.1413 17.9647C54.8861 17.4553 54.6068 16.973 54.3362 16.5054L54.3327 16.4995C54.0565 16.0225 53.7893 15.5605 53.5472 15.0764L53.5333 15.0485L53.516 15.0226C51.7283 12.3411 49.7115 11.4988 48.1818 11.3241Z"></path><path d="M9.28397 39.6773C11.0717 42.3589 13.0885 43.2011 14.6182 43.3759C14.753 46.3026 15.2611 48.6402 16.2528 50.6236C16.9991 52.1163 17.9653 53.2992 19.1863 54.2H15.7881L2.74125 31.699C2.76073 31.6996 2.78031 31.7 2.8 31.7C2.89335 31.7 2.97474 31.7149 3.07903 31.7381C3.08854 31.7402 3.09897 31.7426 3.11023 31.7452C3.18647 31.7626 3.30082 31.7888 3.42319 31.7972C4.20888 32.0178 4.86081 32.5271 5.52047 33.3603C6.20216 34.2214 6.85697 35.382 7.66164 36.8405C8.26116 37.9396 8.76739 38.8512 9.276 39.665L9.27989 39.6712L9.28397 39.6773Z"></path><path d="M55.124 36.865L55.1331 36.8504L55.1412 36.8353C55.9431 35.3316 56.5997 34.1683 57.2697 33.307C57.9146 32.4778 58.5471 31.9616 59.2949 31.6961C59.4179 31.6866 59.5418 31.6616 59.6287 31.6442C59.6354 31.6428 59.6418 31.6415 59.6481 31.6403C59.719 31.6261 59.772 31.616 59.8123 31.6095L46.8115 54.1H43.8753C45.7283 52.7465 46.7867 50.8277 47.3889 48.9394C48.064 46.8226 48.1795 44.7058 48.1971 43.3742C49.7262 43.1967 51.8271 42.3567 53.5196 39.6719C53.8327 39.2016 54.1164 38.6849 54.3777 38.1995C54.4112 38.1375 54.4442 38.076 54.4768 38.0152C54.7049 37.5906 54.9148 37.1996 55.124 36.865Z"></path><path d="M32.2763 51.5708L32.2653 51.5582L32.2536 51.5465C32.0661 51.359 31.7413 51.2 31.4 51.2C31.3949 51.2 31.3894 51.2 31.3835 51.2C31.2956 51.1998 31.1323 51.1993 30.9751 51.2442C30.7932 51.2962 30.6132 51.4082 30.4904 51.6086C29.1941 53.0706 27.544 53.8 25.5 53.8C22.8209 53.8 20.828 52.9218 19.4532 51.2005C18.1148 49.5247 17.3123 46.988 17.1201 43.5109C18.6883 43.1579 19.8601 42.2673 20.5004 41.6896C20.5136 44.8271 20.8579 46.8152 21.6737 48.0181C22.5558 49.319 23.9045 49.6 25.5 49.6C27.4335 49.6 28.5187 48.2893 29.0946 46.9901C29.6604 45.7138 29.7966 44.3347 29.7999 43.8193C29.8943 42.5846 30.6602 41.8 31.5 41.8H31.5778C32.4558 41.8842 33.2 42.7102 33.2 43.9C33.2 45.6119 33.5619 47.0065 34.2986 47.9982C35.0485 49.0077 36.1459 49.544 37.4792 49.5996L37.4896 49.6H37.5C39.2304 49.6 40.5973 49.3258 41.4454 48.0081C41.849 47.3811 42.1078 46.5565 42.2692 45.5056C42.4311 44.4518 42.5 43.1353 42.5 41.5V24.4455L45.9 21.8182V41.5C45.9 41.4958 45.8996 41.5001 45.8978 41.519C45.8959 41.5381 45.8927 41.5719 45.887 41.6267L45.8842 41.6541C45.8752 41.7406 45.8636 41.8524 45.8521 41.9797C45.8264 42.2614 45.8 42.6283 45.8 43V43.9V43.9029V43.9059V43.9088V43.9117V43.9146V43.9175V43.9205V43.9234V43.9263V43.9292V43.9321V43.935V43.9379V43.9408V43.9437V43.9466V43.9495V43.9524V43.9553V43.9581V43.961V43.9639V43.9668V43.9696V43.9725V43.9754V43.9783V43.9811V43.984V43.9868V43.9897V43.9926V43.9954V43.9983V44.0011V44.004V44.0068V44.0096V44.0125V44.0153V44.0181V44.021V44.0238V44.0266V44.0295V44.0323V44.0351V44.0379V44.0407V44.0435V44.0463V44.0492V44.052V44.0548V44.0576V44.0603V44.0631V44.0659V44.0687V44.0715V44.0743V44.0771V44.0798V44.0826V44.0854V44.0882V44.0909V44.0937V44.0965V44.0992V44.102V44.1047V44.1075V44.1102V44.113V44.1157V44.1185V44.1212V44.1239V44.1267V44.1294V44.1321V44.1349V44.1376V44.1403V44.143V44.1457V44.1484V44.1512V44.1539V44.1566V44.1593V44.162V44.1647V44.1674V44.17V44.1727V44.1754V44.1781V44.1808V44.1835V44.1861V44.1888V44.1915V44.1941V44.1968V44.1995V44.2021V44.2048V44.2074V44.2101V44.2127V44.2154V44.218V44.2207V44.2233V44.2259V44.2285V44.2312V44.2338V44.2364V44.239V44.2417V44.2443V44.2469V44.2495V44.2521V44.2547V44.2573V44.2599V44.2625V44.2651V44.2677V44.2702V44.2728V44.2754V44.278V44.2806V44.2831V44.2857V44.2882V44.2908V44.2934V44.2959V44.2985V44.301V44.3036V44.3061V44.3087V44.3112V44.3137V44.3163V44.3188V44.3213V44.3238V44.3264V44.3289V44.3314V44.3339V44.3364V44.3389V44.3414V44.3439V44.3464V44.3489V44.3514V44.3539V44.3564V44.3588V44.3613V44.3638V44.3663V44.3687V44.3712V44.3737V44.3761V44.3786V44.381V44.3835V44.3859V44.3884V44.3908V44.3932V44.3957V44.3981V44.4005V44.403V44.4054V44.4078V44.4102V44.4126V44.415V44.4174V44.4199V44.4223V44.4247V44.427V44.4294V44.4318V44.4342V44.4366V44.439V44.4413V44.4437V44.4461V44.4484V44.4508V44.4532V44.4555V44.4579V44.4602V44.4626V44.4649V44.4672V44.4696V44.4719V44.4742V44.4766V44.4789V44.4812V44.4835V44.4858V44.4882V44.4905V44.4928V44.4951V44.4974V44.4997V44.5019V44.5042V44.5065V44.5088V44.5111V44.5133V44.5156V44.5179V44.5201V44.5224V44.5247V44.5269V44.5292V44.5314V44.5337V44.5359V44.5381V44.5404V44.5426V44.5448V44.547V44.5493V44.5515V44.5537V44.5559V44.5581V44.5603V44.5625V44.5647V44.5669V44.5691V44.5713V44.5734V44.5756V44.5778V44.58V44.5821V44.5843V44.5865V44.5886V44.5908V44.5929V44.5951V44.5972V44.5994V44.6015V44.6036V44.6058V44.6079V44.61V44.6121V44.6142V44.6164V44.6185V44.6206V44.6227V44.6248V44.6269V44.6289V44.631V44.6331V44.6352V44.6373V44.6393V44.6414V44.6435V44.6455V44.6476V44.6497V44.6517V44.6538V44.6558V44.6578V44.6599V44.6619V44.6639V44.666V44.668V44.67V44.672V44.674V44.676V44.678V44.68V44.682V44.684V44.686V44.688V44.69V44.692V44.6939V44.6959V44.6979V44.6998V44.7018V44.7037V44.7057V44.7076V44.7096V44.7115V44.7135V44.7154V44.7173V44.7193V44.7212V44.7231V44.725V44.7269V44.7288V44.7307V44.7326V44.7345V44.7364V44.7383V44.7402V44.7421V44.7439V44.7458V44.7477V44.7495V44.7514V44.7533V44.7551V44.757V44.7588V44.7606V44.7625V44.7643V44.7661V44.768V44.7698V44.7716V44.7734V44.7752V44.777V44.7788V44.7806V44.7824V44.7842V44.786V44.7878V44.7896V44.7914V44.7931V44.7949V44.7967V44.7984V44.8002V44.8019V44.8037V44.8054V44.8071V44.8089V44.8106V44.8123V44.8141V44.8158V44.8175V44.8192V44.8209V44.8226V44.8243V44.826V44.8277V44.8294V44.8311V44.8328V44.8344V44.8361V44.8378V44.8394V44.8411V44.8427V44.8444V44.846V44.8477V44.8493V44.851V44.8526V44.8542V44.8558V44.8575V44.8591V44.8607V44.8623V44.8639V44.8655V44.8671V44.8687V44.8702V44.8718V44.8734V44.875V44.8765V44.8781V44.8797V44.8812V44.8828V44.8843V44.8859V44.8874V44.8889V44.8905V44.892V44.8935V44.895V44.8965V44.898V44.8996V44.9011V44.9025V44.904V44.9055V44.907V44.9085V44.91V44.9114V44.9129V44.9144V44.9158V44.9173V44.9187V44.9202V44.9216V44.923V44.9245V44.9259V44.9273V44.9288V44.9302V44.9316V44.933V44.9344V44.9358V44.9372V44.9386V44.9399V44.9413V44.9427V44.9441V44.9454V44.9468V44.9482V44.9495V44.9509V44.9522V44.9535V44.9549V44.9562V44.9575V44.9589V44.9602V44.9615V44.9628V44.9641V44.9654V44.9667V44.968V44.9693V44.9706V44.9718V44.9731V44.9744V44.9757V44.9769V44.9782V44.9794V44.9807V44.9819V44.9832V44.9844V44.9856V44.9868V44.9881V44.9893V44.9905V44.9917V44.9929V44.9941V44.9953V44.9965V44.9977V44.9988V45V45.1V45.1006V45.1012V45.1017V45.1023V45.1029V45.1035V45.104V45.1046V45.1052V45.1057V45.1063V45.1069V45.1074V45.108V45.1085V45.1091V45.1096V45.1102V45.1107V45.1113V45.1118V45.1123V45.1129V45.1134V45.1139V45.1145V45.115V45.1155V45.1161V45.1166V45.1171V45.1176V45.1181V45.1186V45.1191V45.1196V45.1202V45.1207V45.1212V45.1217V45.1222V45.1226V45.1231V45.1236V45.1241V45.1246V45.1251V45.1256V45.1261V45.1265V45.127V45.1275V45.128V45.1284V45.1289V45.1294V45.1298V45.1303V45.1307V45.1312V45.1317V45.1321V45.1326V45.133V45.1335V45.1339V45.1343V45.1348V45.1352V45.1357V45.1361V45.1365V45.137V45.1374V45.1378V45.1383V45.1387V45.1391V45.1395V45.1399V45.1404V45.1408V45.1412V45.1416V45.142V45.1424V45.1428V45.1432V45.1436V45.144V45.1444V45.1448V45.1452V45.1456V45.146V45.1464V45.1468V45.1471V45.1475V45.1479V45.1483V45.1487V45.149V45.1494V45.1498V45.1501V45.1505V45.1509V45.1512V45.1516V45.152V45.1523V45.1527V45.153V45.1534V45.1537V45.1541V45.1544V45.1548V45.1551V45.1555V45.1558V45.1561V45.1565V45.1568V45.1572V45.1575V45.1578V45.1581V45.1585V45.1588V45.1591V45.1594V45.1598V45.1601V45.1604V45.1607V45.161V45.1613V45.1616V45.162V45.1623V45.1626V45.1629V45.1632V45.1635V45.1638V45.1641V45.1644V45.1647V45.165V45.1652V45.1655V45.1658V45.1661V45.1664V45.1667V45.167V45.1672V45.1675V45.1678V45.1681V45.1683V45.1686V45.1689V45.1691V45.1694V45.1697V45.1699V45.1702V45.1705V45.1707V45.171V45.1712V45.1715V45.1717V45.172V45.1722V45.1725V45.1727V45.173V45.1732V45.1735V45.1737V45.174V45.1742V45.1744V45.1747V45.1749V45.1751V45.1753C45.5039 48.1507 44.6544 50.2924 43.3031 51.6899C41.9582 53.0807 40.0524 53.8 37.5 53.8C35.4235 53.8 33.5685 53.0476 32.2763 51.5708Z"></path><path d="M22.8 23.2538V18.2178L29.3909 23.307L26.1939 25.8645L22.8 23.2538Z"></path><path d="M16.7 20.2V19.7H16.5V18.8V10.858C16.5042 10.8478 16.5096 10.8348 16.5142 10.8232C16.5488 10.7368 16.5963 10.6012 16.5998 10.4209C16.8474 7.03069 17.6799 4.61275 19.0737 3.04468C20.4543 1.49155 22.4511 0.699997 25.2 0.699997C27.2568 0.699997 29.1263 1.53906 30.5352 3.04197L30.5407 3.04785L30.5464 3.05355C30.7614 3.26854 31.0508 3.35 31.3 3.35C31.5492 3.35 31.8386 3.26854 32.0536 3.05355L32.0646 3.04251L32.0749 3.03081C33.4779 1.4408 35.1402 0.699997 37.3 0.699997C40.0769 0.699997 42.1441 1.62655 43.5571 3.42174C44.934 5.17104 45.7393 7.80743 45.886 11.3874C44.0184 11.8028 42.6345 12.9721 42.1 13.4936V13.2C42.1 10.0544 41.7835 8.06299 40.9925 6.86242C40.1497 5.58316 38.8495 5.3 37.3 5.3C35.4114 5.3 34.3769 6.59229 33.8399 7.85422C33.3055 9.11015 33.2 10.457 33.2 10.9C33.2 12.2634 32.2859 13.1 31.3 13.1H31.2204C30.2388 13.0141 29.4 12.0845 29.4 10.8C29.4 9.19015 29.0639 7.84653 28.3661 6.89234C27.6525 5.91665 26.5974 5.4 25.3 5.4C23.6267 5.4 22.3017 5.64608 21.4896 6.93319C21.1052 7.5425 20.863 8.34586 20.7131 9.3714C20.5626 10.4004 20.5 11.6909 20.5 13.3V30.4541L16.7 33.3833V20.2Z"></path><path d="M40.1 31.5462V36.5799L33.4225 31.4049L36.6974 28.9288L40.1 31.5462Z"></path><mask id="path-9-inside-1" fill="white"><path d="M58.7 30.1C58.9 30 59.5 30 59.8 29.9C60.9 29.8 61.8 28.7 61.8 27.4C61.8 26.1 60.9 25 59.8 24.9C59.7 24.9 59.5 24.9 59.4 24.8C59.3 24.8 59.2 24.8 59.1 24.7C59.1 24.7 59.1 24.7 59 24.7C58.6 24.6 58.1 24.4 57.7 24.1C57.7 24.1 57.7 24.1 57.6 24C56.1 23.1 55 21.2 53.6 18.7C53.1 17.8 52.6 16.9 52 16C50.5 13.7 48.9 13.1 47.8 13C47.7 13 47.6 13 47.5 13H47.3C47.1 13 46.9 13 46.9 13C45.2 13.2 44 14.3 43.6 14.8L25.2 29.1C25.2 29.1 25.2 29.1 25.1 29.2L23 30.8L16.8 35.5L16.4 35.9C16.4 35.9 16.4 35.9 16.3 35.9C16 36.1 15.7 36.3 15.4 36.3C15.1 36.3 14.9 36.2 14.7 36.1C14.5 35.9 14.4 35.8 14.3 35.5C13.9 34.8 13.4 34.1 13 33.3V33.1C12.2 31.7 11.3 30 10.1 28.6C10.1 28.6 10.1 28.6 10.1 28.5L10 28.4C9.9 28.3 9.9 28.3 9.8 28.2C9.8 28.2 9.8 28.2 9.7 28.1L9.2 27.5C9.2 27.5 9.2 27.5 9.1 27.5C9 27.3 9 27.1 9.1 27L9.6 26.5C10.9 25 11.9 23.2 12.8 21.6V21.5C13.2 20.7 13.7 19.9 14.2 19.1C14.4 18.8 14.6 18.6 14.7 18.5V13.1C13.6 13.2 12 13.9 10.6 16C10 16.9 9.5 17.8 9 18.7C7.8 20.9 6.8 22.5 5.6 23.5C4.8 24.1 4 24.4 3.5 24.6C3.5 24.6 3.5 24.6 3.4 24.6C3.3 24.6 3.1 24.7 3 24.7C2.9 24.7 2.9 24.7 2.8 24.7C2.7 24.7 2.7 24.7 2.7 24.7H2.6H2.5C2.3 24.7 2.2 24.8 2.1 24.8C2 24.8 2 24.8 2 24.9C1.7 25.1 1.4 25.3 1.2 25.6C1.2 25.7 1.1 25.7 1.1 25.8V25.9L0.999997 26.1C0.999997 26.2 0.999997 26.2 0.899997 26.3C0.899997 26.4 0.899997 26.4 0.799997 26.5C0.799997 26.6 0.799997 26.7 0.699997 26.7C0.699997 26.8 0.699997 26.9 0.699997 26.9C0.699997 27 0.699997 27.1 0.699997 27.1C0.699997 27.2 0.699997 27.2 0.699997 27.3C0.699997 27.4 0.699997 27.5 0.699997 27.5C0.699997 27.6 0.699997 27.7 0.699997 27.7C0.699997 27.8 0.699997 27.9 0.799997 27.9V28V28.1C0.799997 28.2 0.799997 28.2 0.899997 28.2L0.999997 28.4C0.999997 28.5 1.1 28.5 1.1 28.5C1.1 28.5 1.1 28.5 1.1 28.6C1.2 28.7 1.3 28.9 1.5 29C1.6 29 1.6 29.1 1.7 29.1C1.7 29.1 1.8 29.1 1.8 29.2C1.8 29.2 1.8 29.2 1.9 29.2C2 29.3 2.2 29.3 2.3 29.4C2.4 29.4 2.4 29.4 2.4 29.4L2.9 29.5C3.1 29.5 3.2 29.6 3.4 29.6C4.2 29.8 4.7 30.2 4.8 30.2C6.4 31.2 7.5 33 8.9 35.5C9.5 36.6 10 37.4 10.5 38.2C11.9 40.3 13.4 41 14.4 41.1C14.5 41.1 14.5 41.1 14.6 41.1C14.7 41.1 14.8 41.1 14.8 41.1C15 41.1 15.2 41.1 15.5 41.1H15.6C17.2 40.8 18.5 39.8 18.9 39.3L19 39.2L19.8 38.6C19.8 38.6 19.9 38.5 20 38.5L30.2 30.6L41.3 22L46.5 18H46.6C46.7 18 46.9 17.9 47 17.9C47.4 17.9 47.8 18.1 48.1 18.6L48.5 19.2C48.8 19.7 49.2 20.3 49.5 20.9V21C50.1 22.1 50.8 23.4 51.7 24.6C51.7 24.6 51.7 24.7 51.8 24.7C52.1 25.1 52.4 25.5 52.7 25.8C52.7 25.8 52.8 25.8 52.8 25.9C53 26.1 53.1 26.3 53.3 26.4C53.4 26.5 53.4 26.7 53.3 26.9C52 28.5 50.4 31.1 49.6 32.4V32.5C49.2 33.2 48.7 34.1 48.2 34.9C48 35.2 47.8 35.4 47.7 35.5V40.9C48.8 40.8 50.4 40.1 51.8 37.9C52.4 37 52.9 36 53.4 35.2C53.5 35 53.7 34.7 53.8 34.5C55.2 33 56.4 30.9 58.7 30.1Z"></path></mask><path d="M58.7 30.1C58.9 30 59.5 30 59.8 29.9C60.9 29.8 61.8 28.7 61.8 27.4C61.8 26.1 60.9 25 59.8 24.9C59.7 24.9 59.5 24.9 59.4 24.8C59.3 24.8 59.2 24.8 59.1 24.7C59.1 24.7 59.1 24.7 59 24.7C58.6 24.6 58.1 24.4 57.7 24.1C57.7 24.1 57.7 24.1 57.6 24C56.1 23.1 55 21.2 53.6 18.7C53.1 17.8 52.6 16.9 52 16C50.5 13.7 48.9 13.1 47.8 13C47.7 13 47.6 13 47.5 13H47.3C47.1 13 46.9 13 46.9 13C45.2 13.2 44 14.3 43.6 14.8L25.2 29.1C25.2 29.1 25.2 29.1 25.1 29.2L23 30.8L16.8 35.5L16.4 35.9C16.4 35.9 16.4 35.9 16.3 35.9C16 36.1 15.7 36.3 15.4 36.3C15.1 36.3 14.9 36.2 14.7 36.1C14.5 35.9 14.4 35.8 14.3 35.5C13.9 34.8 13.4 34.1 13 33.3V33.1C12.2 31.7 11.3 30 10.1 28.6C10.1 28.6 10.1 28.6 10.1 28.5L10 28.4C9.9 28.3 9.9 28.3 9.8 28.2C9.8 28.2 9.8 28.2 9.7 28.1L9.2 27.5C9.2 27.5 9.2 27.5 9.1 27.5C9 27.3 9 27.1 9.1 27L9.6 26.5C10.9 25 11.9 23.2 12.8 21.6V21.5C13.2 20.7 13.7 19.9 14.2 19.1C14.4 18.8 14.6 18.6 14.7 18.5V13.1C13.6 13.2 12 13.9 10.6 16C10 16.9 9.5 17.8 9 18.7C7.8 20.9 6.8 22.5 5.6 23.5C4.8 24.1 4 24.4 3.5 24.6C3.5 24.6 3.5 24.6 3.4 24.6C3.3 24.6 3.1 24.7 3 24.7C2.9 24.7 2.9 24.7 2.8 24.7C2.7 24.7 2.7 24.7 2.7 24.7H2.6H2.5C2.3 24.7 2.2 24.8 2.1 24.8C2 24.8 2 24.8 2 24.9C1.7 25.1 1.4 25.3 1.2 25.6C1.2 25.7 1.1 25.7 1.1 25.8V25.9L0.999997 26.1C0.999997 26.2 0.999997 26.2 0.899997 26.3C0.899997 26.4 0.899997 26.4 0.799997 26.5C0.799997 26.6 0.799997 26.7 0.699997 26.7C0.699997 26.8 0.699997 26.9 0.699997 26.9C0.699997 27 0.699997 27.1 0.699997 27.1C0.699997 27.2 0.699997 27.2 0.699997 27.3C0.699997 27.4 0.699997 27.5 0.699997 27.5C0.699997 27.6 0.699997 27.7 0.699997 27.7C0.699997 27.8 0.699997 27.9 0.799997 27.9V28V28.1C0.799997 28.2 0.799997 28.2 0.899997 28.2L0.999997 28.4C0.999997 28.5 1.1 28.5 1.1 28.5C1.1 28.5 1.1 28.5 1.1 28.6C1.2 28.7 1.3 28.9 1.5 29C1.6 29 1.6 29.1 1.7 29.1C1.7 29.1 1.8 29.1 1.8 29.2C1.8 29.2 1.8 29.2 1.9 29.2C2 29.3 2.2 29.3 2.3 29.4C2.4 29.4 2.4 29.4 2.4 29.4L2.9 29.5C3.1 29.5 3.2 29.6 3.4 29.6C4.2 29.8 4.7 30.2 4.8 30.2C6.4 31.2 7.5 33 8.9 35.5C9.5 36.6 10 37.4 10.5 38.2C11.9 40.3 13.4 41 14.4 41.1C14.5 41.1 14.5 41.1 14.6 41.1C14.7 41.1 14.8 41.1 14.8 41.1C15 41.1 15.2 41.1 15.5 41.1H15.6C17.2 40.8 18.5 39.8 18.9 39.3L19 39.2L19.8 38.6C19.8 38.6 19.9 38.5 20 38.5L30.2 30.6L41.3 22L46.5 18H46.6C46.7 18 46.9 17.9 47 17.9C47.4 17.9 47.8 18.1 48.1 18.6L48.5 19.2C48.8 19.7 49.2 20.3 49.5 20.9V21C50.1 22.1 50.8 23.4 51.7 24.6C51.7 24.6 51.7 24.7 51.8 24.7C52.1 25.1 52.4 25.5 52.7 25.8C52.7 25.8 52.8 25.8 52.8 25.9C53 26.1 53.1 26.3 53.3 26.4C53.4 26.5 53.4 26.7 53.3 26.9C52 28.5 50.4 31.1 49.6 32.4V32.5C49.2 33.2 48.7 34.1 48.2 34.9C48 35.2 47.8 35.4 47.7 35.5V40.9C48.8 40.8 50.4 40.1 51.8 37.9C52.4 37 52.9 36 53.4 35.2C53.5 35 53.7 34.7 53.8 34.5C55.2 33 56.4 30.9 58.7 30.1Z"></path></svg></div>', 1), P0 = [
  S0
];
function O0(e, t, o, s, l, n) {
  return p(), d("div", null, P0);
}
const M0 = /* @__PURE__ */ Et(C0, [["render", O0]]), L0 = {
  key: 0,
  class: "po-fixed po-z-[999] po-top-0 po-bottom-0 po-left-0 po-right-0 po-flex po-items-center po-justify-center"
}, T0 = /* @__PURE__ */ r("div", { class: "po-absolute po-w-[6.2rem] po-h-[6.2rem] po-bg-transparent po-overflow-hidden po-rounded-xl" }, [
  /* @__PURE__ */ r("div", { class: "po-loading-rotate po-absolute -po-top-8 -po-left-8 po-w-[10rem] po-h-[10rem]" })
], -1), D0 = { class: "relative po-bg-white po-w-24 po-h-24 po-flex po-items-center po-justify-center po-rounded-xl po-bg-opacity-50 po-backdrop-blur po-backdrop-filter po-z-10 po-shadow-xl" }, E0 = {
  key: 0,
  class: "po-absolute po-left-1 po-right-1 po-text-center po-py-1 po-text-xs po-text-mpao-blue po-bg-white po-bg-opacity-50 po-backdrop-blur po-backdrop-filter"
}, z0 = {
  name: "PoLoading"
}, P2 = /* @__PURE__ */ z({
  ...z0,
  props: {
    show: { type: Boolean, default: !1 },
    label: { default: "" }
  },
  setup(e) {
    return (t, o) => t.show ? (p(), d("div", L0, [
      T0,
      r("div", D0, [
        t.label !== "" ? (p(), d("span", E0, x(t.label), 1)) : $("", !0),
        M(M0)
      ])
    ])) : $("", !0);
  }
}), B0 = { class: "po-py-5 po-flex po-items-start po-space-x-5" }, A0 = ["name", "id", "checked", "aria-describedby"], I0 = { class: "po-grow -po-mt-[0.26rem]" }, j0 = ["for"], R0 = { class: "po-mt-2 po-flex po-space-x-3" }, F0 = ["href", "onClick"], N0 = {
  name: "PoConsent"
}, O2 = /* @__PURE__ */ z({
  ...N0,
  props: {
    modelValue: { type: Boolean, default: !1 },
    label: { default: "" },
    id: { default: "consent-checkbox" },
    links: { default: null }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = (s) => {
      let l = s.target.checked;
      t("update:modelValue", l);
    };
    return (s, l) => (p(), d("div", B0, [
      r("input", Te({
        type: "checkbox",
        name: `${s.id}-field`,
        id: s.id,
        checked: s.modelValue,
        "aria-describedby": `${s.id}-description`
      }, s.$attrs, {
        onInput: o,
        class: "po-shrink-0 po-h-4 po-w-4 po-rounded border-slate-300 po-text-mpao-lightblue focus:po-ring-mpao-lightblue"
      }), null, 16, A0),
      r("div", I0, [
        r("label", {
          class: "po-block po-select-none po-text-sm po-text-slate-600 po-cursor-pointer",
          for: s.id
        }, x(s.label), 9, j0),
        r("div", R0, [
          (p(!0), d(N, null, K(s.links, (n) => (p(), d("a", {
            href: n.url,
            onClick: oe((a) => s.$emit("button-click", n.url), ["prevent"]),
            class: "po-text-sm po-text-mpao-lightblue hover:po-text-mpao-blue"
          }, x(n.label), 9, F0))), 256))
        ])
      ])
    ]));
  }
}), H0 = {
  class: "po-flex po-bg-slate-50 po-rounded-t-xl po-justify-center lg:po-justify-start po-px-4 po-pt-4 xl:po-pt-2 po-flex-wrap po-overflow-hidden",
  "aria-label": "Tabs"
}, q0 = ["onClick", "aria-current"], Y0 = { key: 0 }, W0 = {
  name: "PoCardTabs"
}, M2 = /* @__PURE__ */ z({
  ...W0,
  props: {
    tabs: { default: null }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    function o(s) {
      return s.iconColor ? s.iconColor : "po-fill-current";
    }
    return (s, l) => (p(), d("nav", H0, [
      (p(!0), d(N, null, K(s.tabs, (n) => (p(), d("span", {
        role: "button",
        onClick: (a) => s.$emit("button-click", n),
        key: n.name,
        class: L([
          n.current ? "po-bg-white po-text-slate-600 po-shadow-lg" : "po-text-slate-600 hover:po-text-mpao-blue",
          "po-px-4 po-py-3 po-font-medium po-mr-4 po-mb-4 xl:po-mb-0 po-text-sm po-cursor-pointer po-rounded-xl xl:po-rounded-b-none genie-effect hover:po-text-slate-600 hover:po-bg-white hover:po-shadow-md po-flex po-items-center po-flex-shrink-0 po-space-x-2"
        ]),
        "aria-current": n.current ? "page" : void 0
      }, [
        n.icon ? (p(), q(ve(n.icon), {
          key: 0,
          class: L(["po-w-5 po-h-5", [o(n)]])
        }, null, 8, ["class"])) : $("", !0),
        r("span", null, [
          te(x(n.name), 1),
          n.count ? (p(), d("span", Y0, " (" + x(n.count) + ")", 1)) : $("", !0)
        ])
      ], 10, q0))), 128))
    ]));
  }
}), U0 = { class: "sm:po-hidden" }, Z0 = /* @__PURE__ */ r("label", {
  for: "tabs",
  class: "po-sr-only"
}, "Select a tab", -1), G0 = ["value", "selected"], K0 = { class: "po-hidden sm:po-block" }, X0 = {
  class: "po-flex po-space-x-4 po-pt-2",
  "aria-label": "Tabs"
}, Q0 = ["onClick", "aria-current"], J0 = {
  name: "PoTabs"
}, L2 = /* @__PURE__ */ z({
  ...J0,
  props: {
    tabs: { default: null },
    currentTab: { default: "" }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    const o = e;
    function s(a) {
      return a.iconColor ? a.iconColor : "po-fill-current";
    }
    const l = B(() => {
      var a;
      return (a = o.tabs) == null ? void 0 : a.map((i) => i.name === o.currentTab ? { ...i, current: !0 } : { ...i, current: !1 });
    }), n = (a) => {
      const i = Number(a.target.value);
      if (o.tabs) {
        const u = o.tabs[i];
        t("button-click", u);
      }
    };
    return (a, i) => (p(), d(N, null, [
      r("div", U0, [
        Z0,
        r("select", {
          id: "tabs",
          name: "tabs",
          class: "po-block po-w-full po-rounded-md po-border-gray-300 focus:po-border-indigo-500 focus:po-ring-indigo-500",
          onChange: n
        }, [
          (p(!0), d(N, null, K(a.tabs, (u, f) => (p(), d("option", {
            key: u.name,
            value: f,
            selected: u.current
          }, x(u.name), 9, G0))), 128))
        ], 32)
      ]),
      r("div", K0, [
        r("nav", X0, [
          (p(!0), d(N, null, K(l.value, (u) => (p(), d("span", {
            onClick: (f) => a.$emit("button-click", u),
            role: "button",
            key: u.name,
            class: L([
              u.current ? " po-text-slate-600 po-shadow-md po-border po-border-sky-200" : " po-text-slate-600 po-shadow-sm hover:po-text-mpao-blue",
              "po-bg-white po-px-4 po-relative po-group po-py-3 po-font-medium po-text-sm po-cursor-pointer po-rounded-xl genie-effect hover:po-text-slate-600 hover:po-bg-white hover:po-shadow-md po-flex po-items-center po-space-x-2"
            ]),
            "aria-current": u.current ? "page" : void 0
          }, [
            u.icon ? (p(), q(ve(u.icon), {
              key: 0,
              class: L(["po-w-5 po-h-5", [s(u)]])
            }, null, 8, ["class"])) : $("", !0),
            r("span", null, [
              r("span", null, x(u.name), 1),
              u.count && u.count > 0 ? (p(), d("span", {
                key: 0,
                class: L(["po-absolute po-py-1 po-px-2 po-rounded-full po-text-xs -po-top-3 -po-right-2 po-shadow-md po-flex po-items-center po-justify-center", [
                  u.current ? "po-bg-mpao-orange po-text-white" : "po-bg-slate-400 po-text-white group-hover:po-bg-mpao-orange group-hover:po-text-white"
                ]])
              }, [
                r("span", null, x(u.count), 1)
              ], 2)) : $("", !0)
            ])
          ], 10, Q0))), 128))
        ])
      ])
    ], 64));
  }
}), ef = { class: "po-mt-5 po-flex po-flex-col po-items-center po-justify-center po-px-5 po-py-8" }, tf = {
  key: 1,
  class: "po-text-base po-font-medium po-text-slate-600 po-text-center"
}, of = {
  key: 2,
  class: "po-text-sm po-text-slate-500 po-text-center po-max-w-lg po-block po-mx-auto"
}, sf = {
  name: "PoEmpty"
}, T2 = /* @__PURE__ */ z({
  ...sf,
  props: {
    label: { default: "" },
    description: { default: "" },
    icon: { default: null },
    iconColor: { default: "po-stroke-slate-300" }
  },
  setup(e) {
    return (t, o) => (p(), d("div", ef, [
      r("div", {
        class: L(["po-space-y-2 po-flex po-items-center po-flex-col po-justify-center", [{ "po-mb-5": t.$slots.action }]])
      }, [
        t.icon ? (p(), q(ve(t.icon), {
          key: 0,
          class: L(["po-w-10 po-h-10", t.iconColor])
        }, null, 8, ["class"])) : $("", !0),
        t.label !== "" ? (p(), d("span", tf, x(t.label), 1)) : $("", !0),
        t.description !== "" ? (p(), d("span", of, x(t.description), 1)) : $("", !0)
      ], 2),
      G(t.$slots, "action")
    ]));
  }
}), lf = { class: "po-flex po-text-sm po-text-gray-700 po-flex-col po-space-y-5" }, nf = {
  key: 0,
  class: "po-text-base po-font-medium po-text-slate-700"
}, af = {
  key: 1,
  class: "po-border po-border-orange-300 po-bg-orange-50 po-rounded-lg po-p-5 po-flex po-items-center po-space-x-3"
}, rf = { class: "po-grow po-text-sm po-text-slate-600" }, pf = {
  key: 2,
  class: "po-border po-border-red-300 po-bg-red-50 po-rounded-lg po-p-5 po-flex po-space-x-4"
}, uf = { class: "po-grow" }, df = { class: "po-text-base po-text-slate-700 po-font-medium" }, cf = { class: "po-text-sm po-text-slate-600" }, ff = { class: "po-font-medium" }, vf = { key: 0 }, hf = { key: 0 }, mf = /* @__PURE__ */ r("dt", null, "Name", -1), bf = { key: 1 }, gf = /* @__PURE__ */ r("dt", null, "Identifer", -1), yf = { key: 2 }, wf = /* @__PURE__ */ r("dt", null, "Date of birth", -1), _f = { key: 3 }, $f = /* @__PURE__ */ r("dt", null, "Reported Date of death", -1), xf = {
  key: 3,
  class: "po-pt-5"
}, Vf = { class: "po-flex po-items-center po-space-x-1" }, kf = /* @__PURE__ */ r("span", null, "File a dispute.", -1), Cf = {
  name: "PoDRStatus"
}, D2 = /* @__PURE__ */ z({
  ...Cf,
  props: {
    member: { default: null },
    record: { default: null },
    request: { default: null }
  },
  emits: ["dispute-click"],
  setup(e, { emit: t }) {
    function o() {
      t("dispute-click", "clicked");
    }
    return (s, l) => (p(), d("span", lf, [
      s.record !== null ? (p(), d("h2", nf, " Death was reported by " + x(s.record.institution), 1)) : $("", !0),
      s.request !== null && s.request.type_id === 1 ? (p(), d("div", af, [
        M(C(co), { class: "po-shrink-0 po-w-6 po-stroke-orange-600" }),
        r("span", rf, " This is a " + x(s.request.type) + " request and is in " + x(s.request.state) + " state. ", 1)
      ])) : $("", !0),
      s.request !== null && s.request.type_id !== 1 ? (p(), d("div", pf, [
        M(C(co), { class: "po-shrink-0 po-w-6 po-h-6 po-stroke-red-600 po-stroke-2" }),
        r("div", uf, [
          r("h3", df, x(s.request.type), 1),
          r("p", cf, [
            te(" The following " + x(s.request.type) + " was reported: ", 1),
            r("span", ff, [
              te(x(s.request.dispute_type), 1),
              s.request.date_of_death ? (p(), d("span", vf, " (New date: " + x(s.request.date_of_death) + ")", 1)) : $("", !0)
            ])
          ])
        ])
      ])) : $("", !0),
      M(Rp, null, {
        content: j(() => [
          s.member !== null ? (p(), d("div", hf, [
            mf,
            r("dd", null, x(s.member.name), 1)
          ])) : $("", !0),
          s.member !== null ? (p(), d("div", bf, [
            gf,
            r("dd", null, x(s.member.identifier), 1)
          ])) : $("", !0),
          s.member !== null ? (p(), d("div", yf, [
            wf,
            r("dd", null, x(s.member.dob), 1)
          ])) : $("", !0),
          s.record !== null ? (p(), d("div", _f, [
            $f,
            r("dd", null, x(s.record.date_of_death), 1)
          ])) : $("", !0)
        ]),
        _: 1
      }),
      s.request === null ? (p(), d("span", xf, [
        M(Sl, {
          type: "simple",
          onButtonClick: o
        }, {
          label: j(() => [
            r("span", Vf, [
              M(C(en), { class: "po-w-4 po-h-4 po-stroke-current" }),
              kf
            ])
          ]),
          _: 1
        })
      ])) : $("", !0)
    ]));
  }
}), Sf = {
  role: "button",
  class: "po-w-6 po-h-6 po-rounded-lg po-bg-white genie-effect po-flex po-items-center po-justify-center hover:po-bg-slate-50 po-cursor-pointer"
}, Pf = {
  name: "PoTableAction"
}, E2 = /* @__PURE__ */ z({
  ...Pf,
  props: {
    btnIcon: { default: null },
    btnType: { default: "text" },
    label: { default: "" },
    textColor: { default: "po-slate-500" },
    iconColor: { default: "po-stroke-slate-500" }
  },
  setup(e) {
    const t = e, o = V(), s = V(), l = V(t.label);
    return t.btnType === "view" ? (o.value = ln, l.value = t.label === "" ? "View" : t.label) : t.btnType === "edit" ? (o.value = rn, l.value = t.label === "" ? "Edit" : t.label) : t.btnType === "delete" ? (o.value = un, l.value = t.label === "" ? "Delete" : t.label) : t.btnType === "icon" && t.btnIcon && (o.value = t.btnIcon), t.btnType === "view" ? s.value = "po-stroke-emerald-400" : t.btnType === "edit" ? s.value = "po-stroke-blue-400" : t.btnType === "delete" ? s.value = "po-stroke-red-400" : s.value = t.iconColor, (n, a) => (p(), d("span", null, [
      n.btnType === "icon" || n.btnType === "delete" || n.btnType === "edit" || n.btnType === "view" ? (p(), q(C(M4), {
        key: 0,
        text: l.value,
        placement: "bottom",
        strategy: "fixed"
      }, {
        default: j(() => [
          r("span", Sf, [
            (p(), q(ve(o.value), {
              class: L(["po-w-4 po-stroke-2", s.value])
            }, null, 8, ["class"]))
          ])
        ]),
        _: 1
      }, 8, ["text"])) : (p(), d("span", {
        key: 1,
        role: "button",
        class: L(["po-block po-text-sm genie-effect", n.textColor])
      }, x(n.label), 3))
    ]));
  }
}), Of = { key: 0 }, Mf = {
  name: "Rufiyaa"
}, z2 = /* @__PURE__ */ z({
  ...Mf,
  props: {
    symbolWidth: { default: "po-w-3" },
    symbolFillColor: { default: "po-fill-current" },
    amount: { default: null }
  },
  setup(e) {
    function t(o) {
      const s = typeof o == "string" ? parseFloat(o.replace(/,/g, "")) : o;
      return isNaN(s) ? "" : s.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    }
    return (o, s) => (p(), d("span", null, [
      o.amount !== null ? (p(), d("span", Of, x(t(o.amount)), 1)) : $("", !0)
    ]));
  }
}), Lf = {
  name: "PoHeading"
}, B2 = /* @__PURE__ */ z({
  ...Lf,
  props: {
    text: { default: "" },
    type: { default: "h3" }
  },
  setup(e) {
    return (t, o) => (p(), q(ve(t.type), { class: "po-text-base po-text-slate-600 po-font-semibold" }, {
      default: j(() => [
        te(x(t.text), 1)
      ]),
      _: 1
    }));
  }
}), Tf = ["for"], Df = { class: "po-capitalize" }, Ef = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, zf = ["title"], Bf = { class: "po-relative po-mt-1" }, Af = { class: "po-shrink-0 po-pr-1 po-inline-flex po-flex-wrap po-w-full po-gap-1 po-max-h-44" }, If = { class: "po-px-2 po-py-1 po-rounded-md po-text-sm po-text-slate-600 po-flex po-space-x-2 po-items-center po-bg-gradient-to-l po-from-slate-50 po-via-cyan-50 po-to-cyan-100/60 po-border po-border-cyan-200" }, jf = ["onClick"], Rf = ["id"], Ff = {
  key: 0,
  class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
}, Nf = ["onClick", "value"], Hf = {
  class: /* @__PURE__ */ L(["po-block po-truncate"])
}, qf = ["id"], Yf = ["id"], Wf = {
  name: "PoMultiSelect"
}, A2 = /* @__PURE__ */ z({
  ...Wf,
  props: {
    modelValue: { default: null },
    label: { default: "" },
    display: { default: "vertical" },
    id: { default: "" },
    info: { default: null },
    message: { default: null },
    errorMessage: { default: null },
    hasError: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    placeholder: { default: null },
    borderColor: { default: "po-border-slate-300 focus:po-border-mpao-lightblue" },
    items: { default: null }
  },
  emits: ["selected", "unSelected", "update:modelValue"],
  setup(e, { emit: t }) {
    const o = e;
    function s() {
      return o.hasError ? "po-border-red-400 focus:po-border-red-600 focus:po-ring-red-600" : o.borderColor;
    }
    const l = V(""), n = V([]), a = V(!1);
    function i(c) {
      n.value.splice(c, 1), h();
    }
    function u(c) {
      let v = l.value.split(",");
      c.key === "Enter" && 0 < l.value.length && (c.preventDefault(), v.forEach((m) => {
        var P;
        let y = (P = o.items) == null ? void 0 : P.find(
          (k) => k.name.toLowerCase() === m.trim().toLowerCase()
        );
        y && n.value.push(y);
      }), l.value = ""), c.key === "Backspace" && l.value.length === 0 && a.value && n.value.pop(), h();
    }
    const f = V([]);
    function h() {
      f.value = n.value.map((c) => c.id);
    }
    X(() => {
      document.addEventListener("keydown", u);
    }), ae(() => {
      document.removeEventListener("keydown", u);
    });
    const w = V(!1), _ = B(
      () => {
        var c;
        return l.value === "" ? o.items : (c = o.items) == null ? void 0 : c.filter((v) => v.name.toLowerCase().includes(l.value.toLowerCase()));
      }
    );
    let g = V();
    Ot(g, () => {
      w.value = !1;
    });
    function b(c) {
      n.value.push(c), l.value = "", h();
    }
    return Q(f, () => {
      t("update:modelValue", f.value);
    }), (c, v) => (p(), d("div", {
      ref_key: "multiSelectComponentRef",
      ref: g,
      class: L(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": c.display === "horizontal" }]])
    }, [
      r("label", {
        for: c.id,
        class: L([
          "po-text-sm po-font-medium po-flex po-items-center po-space-x-1",
          { "po-text-red-500": c.hasError },
          { "po-text-slate-700": !c.hasError }
        ])
      }, [
        r("span", Df, x(c.label), 1),
        c.required ? (p(), d("span", Ef, "*")) : $("", !0),
        c.info !== null ? (p(), d("abbr", {
          key: 1,
          title: c.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          M(C(Pl), { class: "po-fill-current" })
        ], 8, zf)) : $("", !0)
      ], 10, Tf),
      r("div", Bf, [
        r("div", {
          class: L([
            "po-border po-p-1 po-min-h-[2.38rem] po-flex po-flex-wrap po-items-center focus-within:po-border-mpao-lightblue po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white sm:po-text-sm",
            s()
          ])
        }, [
          r("div", Af, [
            n.value.length > 0 ? (p(!0), d(N, { key: 0 }, K(n.value, (m, y) => (p(), d("span", If, [
              r("span", null, x(m.name), 1),
              r("span", {
                onClick: () => i(y),
                role: "button",
                class: "po-cursor-pointer"
              }, [
                M(C(Ht), { class: "po-w-3 po-stroke-red-600 po-stroke-2" })
              ], 8, jf)
            ]))), 256)) : $("", !0),
            Pe(r("input", {
              id: c.id,
              "onUpdate:modelValue": v[0] || (v[0] = (m) => l.value = m),
              onFocus: v[1] || (v[1] = () => {
                w.value = !0, a.value = !0;
              }),
              onBlur: v[2] || (v[2] = () => a.value = !1),
              class: "po-border-0 po-outline-none po-ring-0 po-grow"
            }, null, 40, Rf), [
              [xt, l.value]
            ])
          ])
        ], 2),
        w.value ? (p(), d("ul", Ff, [
          (p(!0), d(N, null, K(_.value, (m) => (p(), d("li", {
            onClick: () => b(m),
            key: m.id,
            value: m.id,
            class: L([
              "po-relative po-select-none po-py-2 hover:po-bg-mpao-lightblue hover:po-text-white po-cursor-pointer po-pl-3 po-pr-9"
            ])
          }, [
            r("span", Hf, x(m.name), 1)
          ], 8, Nf))), 128))
        ])) : $("", !0)
      ]),
      c.message !== null ? (p(), d("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${c.id}-description`
      }, x(c.message), 9, qf)) : $("", !0),
      c.hasError && c.errorMessage !== null ? (p(), d("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-center po-space-x-1",
        id: `${c.id}-error`
      }, [
        M(C(Id), { class: "po-fill-current po-w-4" }),
        r("span", null, x(c.errorMessage), 1)
      ], 8, Yf)) : $("", !0)
    ], 2));
  }
}), Uf = { class: "po-flex po-pl-5" }, Zf = /* @__PURE__ */ r("div", { class: "po-shrink-0 po-flex po-flex-col" }, [
  /* @__PURE__ */ r("div", { class: "po-w-[2px] po-shrink-0 po-h-10" }),
  /* @__PURE__ */ r("div", { class: "po-bg-gradient-to-t po-from-orange-400 po-via-red-300 po-to-blue-500 po-w-[2px] po-grow" }),
  /* @__PURE__ */ r("div", { class: "po-w-[2px] po-shrink-0 po-h-12" })
], -1), Gf = { class: "po-grow po-pl-5 po-pt-5 po-space-y-3" }, Kf = ["onClick"], Xf = { class: "-po-mt-1 po-flex po-space-x-3 po-items-center" }, Qf = { class: "po-block po-text-xs po-text-slate-400" }, Jf = { class: "po-text-xs po-text-slate-500 po-pt-1" }, e4 = {
  name: "PoTimeline"
}, I2 = /* @__PURE__ */ z({
  ...e4,
  props: {
    timeline: { default: null },
    clickable: { type: Boolean, default: !1 }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, s) => (p(), d("div", Uf, [
      Zf,
      r("div", Gf, [
        (p(!0), d(N, null, K(o.timeline, (l) => (p(), d("div", {
          class: L(["po-px-2 po-pt-2 po-pb-6 po-relative po-group", [{ "po-cursor-pointer": o.clickable }]]),
          onClick: (n) => o.$emit("button-click", l)
        }, [
          r("span", {
            class: L(["po-rounded-full po-absolute po-flex po-items-center po-justify-center", [
              { "po-w-4 po-h-4 -po-left-[1.8rem] po-bg-blue-400": l.current },
              {
                "po-w-3 po-h-3 -po-left-[1.68rem] po-bg-green-400": !l.current
              }
            ]])
          }, [
            r("span", {
              class: L(["po-rounded-full po-bg-white", [
                { "po-w-2 po-h-2": l.current },
                { "po-w-1 po-h-1": !l.current }
              ]])
            }, null, 2)
          ], 2),
          r("div", null, [
            r("div", Xf, [
              r("h4", {
                class: L(["po-text-sm po-text-slate-600 po-font-medium", [{ "group-hover:po-text-mpao-lightblue": o.clickable }]])
              }, x(l.label), 3),
              r("span", Qf, x(C(Zl)(l.date)), 1)
            ]),
            r("p", Jf, x(l.description), 1)
          ])
        ], 10, Kf))), 256))
      ])
    ]));
  }
}), t4 = {
  name: "PoTableCheckbox"
}, j2 = /* @__PURE__ */ z({
  ...t4,
  props: {
    itemId: { default: null },
    isChecked: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["checkboxClicked"],
  setup(e, { emit: t }) {
    return (o, s) => (p(), d(N, null, [
      o.isChecked ? (p(), q(C(bs), {
        key: 0,
        onClick: s[0] || (s[0] = oe(() => o.$emit("checkboxClicked", o.itemId), ["prevent"])),
        class: "po-w-6 po-fill-mpao-lightblue po-cursor-pointer"
      })) : $("", !0),
      o.disabled ? (p(), q(C(bs), {
        key: 1,
        class: "po-w-6 po-fill-slate-400"
      })) : $("", !0),
      !o.isChecked && !o.disabled ? (p(), d("span", {
        key: 2,
        onClick: s[1] || (s[1] = oe(() => o.$emit("checkboxClicked", o.itemId), ["prevent"])),
        class: "po-h-5 po-w-5 po-rounded-full po-border-2 po-ml-[2px] po-block po-border-slate-300 po-cursor-pointer"
      })) : $("", !0)
    ], 64));
  }
}), o4 = { class: "po-p-4" }, s4 = { class: "po-flex po-items-start po-space-x-3" }, l4 = /* @__PURE__ */ r("span", { class: "po-sr-only" }, "Action icon", -1), n4 = { class: "po-w-0 po-flex-1 po-text-sm po-font-medium po-text-gray-400" }, a4 = { class: "po-ml-4 po-flex po-flex-shrink-0" }, r4 = /* @__PURE__ */ r("span", { class: "po-sr-only" }, "Close", -1), i4 = {
  name: "PoToast"
}, R2 = /* @__PURE__ */ z({
  ...i4,
  props: {
    show: { type: Boolean, default: !1 },
    actionType: { default: "" },
    message: { default: "" },
    hideIn: { default: 2e3 },
    size: { default: "sm" }
  },
  emits: ["toast-closed"],
  setup(e, { emit: t }) {
    const o = e, { show: s } = $e(o), l = V(!1);
    Q(s, () => {
      l.value = s.value;
    });
    function n() {
      l.value = !1, t("toast-closed", !0);
    }
    setTimeout(() => {
      n();
    }, o.hideIn);
    const a = B(() => o.message === "" && o.actionType !== "" ? o.actionType === "success" ? "Saved Successfully!" : o.actionType === "danger" ? "Item deleted!" : o.actionType === "warn" ? "Attention needed!" : "Wrong action" : o.message);
    return (i, u) => (p(), q(kt, { to: "#po-notifications-alert" }, [
      M(dt, {
        "enter-active-class": "po-transform po-ease-out po-duration-300 po-transition",
        "enter-from-class": "po-translate-y-2 po-opacity-0 sm:po-translate-y-0 sm:po-translate-x-2",
        "enter-to-class": "po-translate-y-0 po-opacity-100 sm:po-translate-x-0",
        "leave-active-class": "po-transition po-ease-in po-duration-100",
        "leave-from-class": "po-opacity-100",
        "leave-to-class": "po-opacity-0"
      }, {
        default: j(() => [
          l.value ? (p(), d("div", {
            key: 0,
            class: L(["po-pointer-events-auto po-w-full po-overflow-hidden po-rounded-lg po-bg-gray-900 po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5", [
              { "po-max-w-[260px]": i.size === "sm" },
              { "po-max-w-[360px]": i.size === "lg" },
              { "po-max-w-[560px]": i.size === "xl" }
            ]])
          }, [
            r("div", o4, [
              r("div", s4, [
                i.actionType !== "" ? (p(), d("div", {
                  key: 0,
                  class: L(["po-inline-flex po-items-center po-justify-center po-flex-shrink-0 po-w-6 po-h-6 po-rounded-lg", [
                    {
                      "po-bg-mpao-green po-text-green-100": i.actionType === "success"
                    },
                    { "po-bg-mpao-red po-text-red-100": i.actionType === "danger" },
                    {
                      "po-bg-mpao-orange po-text-orange-100": i.actionType === "warn"
                    }
                  ]])
                }, [
                  i.actionType === "success" ? (p(), q(C(bp), {
                    key: 0,
                    class: "po-w-4 po-h-4"
                  })) : $("", !0),
                  i.actionType === "danger" ? (p(), q(C(wp), {
                    key: 1,
                    class: "po-w-4 po-h-4"
                  })) : $("", !0),
                  i.actionType === "warn" ? (p(), q(C(gl), {
                    key: 2,
                    class: "po-w-4 po-h-4"
                  })) : $("", !0),
                  l4
                ], 2)) : $("", !0),
                r("p", n4, x(a.value), 1),
                r("div", a4, [
                  r("button", {
                    type: "button",
                    onClick: n,
                    class: "po-inline-flex po-rounded-md po-bg-gray-900 po-text-gray-400 hover:po-text-gray-300 hover:po-bg-gray-700 po-transition-colors po-duration-150 po-ease-out focus:po-outline-none focus:po-ring-2 focus:po-ring-indigo-500 focus:po-ring-offset-2"
                  }, [
                    r4,
                    M(C(yl), {
                      class: "po-h-5 po-w-5",
                      "aria-hidden": "true"
                    })
                  ])
                ])
              ])
            ])
          ], 2)) : $("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), p4 = ["for"], u4 = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, d4 = ["title"], c4 = { class: "po-relative po-mt-1" }, f4 = {
  key: 1,
  class: "po-absolute po-top-0 po-left-0 po-right-0 po-bottom-0 po-overflow-hidden po-bg-white po-rounded-md po-border po-border-slate-300 po-flex po-items-center"
}, v4 = { class: "po-grow" }, h4 = ["id"], m4 = ["onMousedown"], b4 = ["onMousedown"], g4 = {
  key: 0,
  class: "po-text-sm po-text-slate-600 po-p-4 po-block"
}, y4 = {
  key: 0,
  class: "po-mt-2 po-text-sm po-text-slate-500",
  id: "-description"
}, w4 = {
  key: 1,
  class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
  id: "-error"
}, _4 = {
  name: "PoSelectApi"
}, F2 = /* @__PURE__ */ z({
  ..._4,
  props: {
    options: { default: () => [] },
    id: { default: "" },
    loading: { type: Boolean, default: !1 },
    showMoreBtn: { type: Boolean, default: !1 },
    label: { default: "" },
    info: { default: null },
    display: { default: "vertical" },
    required: { type: Boolean, default: !1 },
    errorMessage: { default: null },
    message: { default: null },
    disabled: { type: Boolean, default: !1 },
    emptyMessage: { default: null },
    showSelected: { type: Boolean, default: !0 }
  },
  emits: ["search", "selected", "loadmore"],
  setup(e, { emit: t }) {
    const o = e, s = V(), l = V(!1), n = V(!1), a = V([]);
    Q(o, (m, y) => {
      a.value = o.options;
    });
    const i = V(null);
    Ot(i, () => {
      l.value = !!n.value;
    });
    function u() {
      n.value = !1, setTimeout(() => {
        l.value = !1;
      }, 100);
    }
    const f = V("");
    X(() => {
      o.id === "" ? f.value = o.label.replace(/\s/g, "") + "-" + Date.now() + "-selectapi-" + Math.floor(Math.random() * 9e3) : f.value = o.id;
    });
    const h = V();
    function w() {
      t("search", h.value);
    }
    const _ = V(null);
    function g(m) {
      _.value = m, t("selected", m), l.value = !!n.value;
    }
    function b() {
      t("loadmore", !0);
    }
    const c = V();
    let v;
    return X(() => {
      v = Pt(s.value, c.value, {
        placement: "bottom-end",
        strategy: "fixed",
        modifiers: [
          {
            name: "sameWidth",
            enabled: !0,
            fn: ({ state: m }) => {
              m.styles.popper.width = `${m.rects.reference.width}px`;
            },
            phase: "beforeWrite",
            requires: ["computeStyles"]
          }
        ]
      });
    }), ae(() => {
      v && v.destroy();
    }), (m, y) => (p(), d("div", {
      ref_key: "containerRef",
      ref: i,
      class: L(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": m.display === "horizontal" }]])
    }, [
      r("label", {
        for: f.value,
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700"
      }, [
        r("span", null, x(m.label), 1),
        m.required ? (p(), d("span", u4, "*")) : $("", !0),
        m.info !== null ? (p(), d("abbr", {
          key: 1,
          title: m.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          M(C(to), { class: "po-fill-current" })
        ], 8, d4)) : $("", !0)
      ], 8, p4),
      r("div", c4, [
        r("div", null, [
          m.loading ? (p(), q(eo, {
            key: 0,
            class: "po-right-0 po-top-4",
            absolute: !0
          })) : $("", !0),
          _.value !== null && m.showSelected ? (p(), d("div", f4, [
            r("div", v4, [
              G(m.$slots, "selectedOption", nt(at(_.value)), () => [
                te(x(_.value), 1)
              ])
            ]),
            r("span", {
              class: "po-shrink-0 po-p-1 po-cursor-pointer",
              onMousedown: y[0] || (y[0] = oe((P) => {
                _.value = null, h.value = "";
              }, ["stop"]))
            }, [
              M(C(Ht), { class: "po-w-4 po-stroke-2 po-stroke-slate-400" })
            ], 32)
          ])) : $("", !0),
          Pe(r("input", {
            type: "text",
            name: "",
            id: f.value,
            ref_key: "selectBox",
            ref: s,
            "onUpdate:modelValue": y[1] || (y[1] = (P) => h.value = P),
            onInput: w,
            onFocus: y[2] || (y[2] = (P) => {
              n.value = !0, l.value = !0;
            }),
            onBlur: u,
            class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm"
          }, null, 40, h4), [
            [xt, h.value]
          ])
        ]),
        Pe(r("div", {
          ref_key: "popper",
          ref: c,
          class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
        }, [
          a.value && a.value.length > 0 ? (p(), d(N, { key: 0 }, [
            (p(!0), d(N, null, K(a.value, (P) => (p(), d("div", {
              onMousedown: oe((k) => g(P), ["stop"])
            }, [
              G(m.$slots, "option", nt(at(P)), () => [
                te(x(P), 1)
              ])
            ], 40, m4))), 256)),
            m.showMoreBtn ? (p(), d("span", {
              key: 0,
              role: "button",
              onMousedown: oe(b, ["stop"]),
              class: "po-text-sm po-text-semibold po-text-mpao-lightblue po-block po-text-center po-py-2 hover:po-bg-slate-50 po-transition-colors po-duration-150 po-ease-out"
            }, "More", 40, b4)) : $("", !0)
          ], 64)) : (p(), d(N, { key: 1 }, [
            m.emptyMessage ? (p(), d("span", g4, x(m.emptyMessage), 1)) : $("", !0)
          ], 64))
        ], 512), [
          [
            Vt,
            l.value && a.value.length > 0 || l.value && m.emptyMessage
          ]
        ]),
        m.message !== null ? (p(), d("p", y4, x(m.message), 1)) : $("", !0),
        m.errorMessage !== null ? (p(), d("p", w4, [
          r("span", null, x(m.errorMessage), 1)
        ])) : $("", !0)
      ])
    ], 2));
  }
}), $4 = { class: "po-bg-blue-300/20 po-border po-border-blue-200 po-p-3 po-mb-5 po-rounded-md po-text-sm sm:po-space-x-2 po-flex po-items-center po-flex-wrap" }, x4 = { class: "po-text-blue-500" }, V4 = {
  name: "PoMessage"
}, N2 = /* @__PURE__ */ z({
  ...V4,
  props: {
    msgType: { default: "info" },
    message: { default: "" },
    btnName: { default: "" },
    btnAction: { default: "" }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, s) => (p(), d("div", $4, [
      r("span", x4, x(o.message), 1),
      o.btnName !== "" ? (p(), d("span", {
        key: 0,
        role: "button",
        onClick: s[0] || (s[0] = (l) => o.$emit("button-click", o.btnAction)),
        class: "po-text-blue-600 po-underline po-font-medium po-text-xs"
      }, x(o.btnName), 1)) : $("", !0)
    ]));
  }
}), k4 = {
  key: 0,
  class: "po-flex md:po-justify-end"
}, C4 = ["onClick"], S4 = { class: "po-text-xl po-font-medium po-text-slate-600 po-flex po-items-center po-space-x-1" }, P4 = {
  name: "PoPageStats"
}, H2 = /* @__PURE__ */ z({
  ...P4,
  props: {
    stats: { default: null },
    clickable: { type: [Boolean, null], default: !0 },
    padding: { default: "po-py-5 po-px-2" }
  },
  emits: ["stat-click"],
  setup(e, { emit: t }) {
    function o(s) {
      return s.iconColor ? s.iconColor : "po-slate-600";
    }
    return (s, l) => s.stats !== null ? (p(), d("div", k4, [
      r("div", {
        class: L(["po-bg-slate-50 po-shadow-sm po-rounded-xl po-divide-x po-divide-slate-200 po-flex", s.padding])
      }, [
        (p(!0), d(N, null, K(s.stats, (n) => (p(), d("div", {
          class: L(["po-px-4 po-group", { "po-cursor-pointer": s.clickable }]),
          onClick: (a) => s.$emit("stat-click", n)
        }, [
          r("span", S4, [
            n.icon ? (p(), d("span", {
              key: 0,
              class: L(["po-w-5 po-h-5", o(n)])
            }, [
              (p(), q(ve(n.icon)))
            ], 2)) : $("", !0),
            r("span", {
              class: L(["po-text-xl po-font-medium po-text-slate-600", { "group-hover:po-text-mpao-lightblue": s.clickable }])
            }, x(n.value), 3)
          ]),
          r("span", {
            class: L(["po-text-sm po-text-slate-500 po-block", { "group-hover:po-text-mpao-lightblue": s.clickable }])
          }, x(n.label), 3)
        ], 10, C4))), 256))
      ], 2)
    ])) : $("", !0);
  }
}), O4 = {
  name: "PoTooltip"
}, M4 = /* @__PURE__ */ z({
  ...O4,
  props: {
    text: { default: "" },
    placement: { default: "bottom" },
    strategy: { default: "absolute" }
  },
  setup(e) {
    const t = e, o = V(null), s = V(null), l = V(!1);
    let n = null;
    X(() => {
      o.value && s.value && (n = Pt(o.value, s.value, {
        placement: t.placement,
        strategy: t.strategy
      }));
    }), ae(() => {
      n && (n.destroy(), n = null);
    });
    function a() {
      l.value = !0;
    }
    function i() {
      l.value = !1;
    }
    return st.on("sidebarOpen", (u) => {
      setTimeout(() => {
        n && n.update();
      }, 320);
    }), (u, f) => (p(), d("span", {
      ref_key: "trigger",
      ref: o,
      onMouseover: a,
      onMouseleave: i
    }, [
      G(u.$slots, "default", {}, () => [
        te("Tooltip")
      ]),
      (p(), q(kt, { to: "body" }, [
        Pe(r("div", {
          ref_key: "popper",
          ref: s,
          class: L(["po-bg-slate-700 po-text-xs po-z-50 po-transition-opacity po-duration-100 po-ease-linear po-text-slate-50 po-rounded-md po-px-2 po-py-1 po-shadow-md", [{ "po-opacity-0": !l.value }, { "po-opacity-100": l.value }]])
        }, x(u.text), 3), [
          [Vt, u.text]
        ])
      ]))
    ], 544));
  }
}), L4 = ["for"], T4 = { class: "po-capitalize" }, D4 = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, E4 = ["title"], z4 = ["name", "id", "value", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], B4 = {
  key: 0,
  class: "po-text-sm po-grow po-text-slate-500 lg:po-min-h-[40px] po-flex po-items-center"
}, A4 = { key: 0 }, I4 = { key: 1 }, j4 = ["for"], R4 = {
  key: 2,
  class: "po-text-sm po-grow po-text-slate-500 lg:po-min-h-[40px] po-flex po-items-center"
}, F4 = /* @__PURE__ */ r("span", null, "Uploading...", -1), N4 = [
  F4
], H4 = {
  key: 3,
  class: "po-shrink-0 po-relative po-top-[3px]"
}, q4 = ["id"], Y4 = ["id"], W4 = {
  name: "PoUpload"
}, q2 = /* @__PURE__ */ z({
  ...W4,
  props: {
    token: { default: "" },
    url: { default: "" },
    payload: { default: () => ({}) },
    modelValue: { default: "" },
    label: { default: "" },
    display: { default: "vertical" },
    id: { default: "fileupload" },
    info: { default: null },
    message: { default: null },
    errorMessage: { default: null },
    hasError: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    placeholder: {},
    borderColor: { default: "border-slate-300 focus:border-mpao-lightblue" },
    dragAreaText: { default: "Drag and drop files to upload" },
    dragOverText: { default: "Drop files here to upload" }
  },
  emits: [
    "selected",
    "unSelected",
    "update:modelValue",
    "uploaded"
  ],
  setup(e, { emit: t }) {
    const o = e, { errorMessage: s } = $e(o), l = V(!!s.value);
    Q(s, (c, v) => {
      l.value = !!(s.value && s.value !== "");
    });
    const n = V(""), a = V("initial");
    X(() => {
      o.id === "" ? n.value = o.id ? o.id : `${o.label.replace(
        /\s/g,
        ""
      )}-${Date.now()}-upload-field-${Math.floor(Math.random() * 9e3)}` : n.value = o.id;
    });
    const i = V(!1), u = (c) => {
      c.preventDefault(), i.value = !0;
    }, f = () => {
      i.value = !1;
    }, h = (c) => {
      var m;
      c.preventDefault(), i.value = !1;
      const v = (m = c.dataTransfer) == null ? void 0 : m.files;
      v && v.length > 0 && _(v);
    }, w = (c) => {
      const m = c.target.files;
      m && m.length > 0 && _(m);
    };
    function _(c) {
      a.value = "uploading", fetch(`${b()}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${o == null ? void 0 : o.token}`
        },
        body: g(c)
      }).then((v) => {
        a.value = "initial", t("uploaded", v);
      });
    }
    function g(c) {
      let v = new FormData();
      for (const m of c)
        v.append("files", m);
      return v.append("payload", JSON.stringify(o.payload)), v;
    }
    function b() {
      return o == null || o.url, o == null ? void 0 : o.url;
    }
    return (c, v) => (p(), d("div", {
      class: L(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": c.display === "horizontal" }]])
    }, [
      r("label", {
        disabled: !0,
        for: n.value,
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700 po-mb-1"
      }, [
        r("span", T4, x(c.label), 1),
        c.required ? (p(), d("span", D4, "*")) : $("", !0),
        c.info !== null ? (p(), d("abbr", {
          key: 1,
          title: c.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          M(C(an), { class: "po-fill-current" })
        ], 8, E4)) : $("", !0)
      ], 8, L4),
      r("input", Te({
        type: "file",
        name: n.value,
        id: n.value,
        value: c.modelValue,
        disabled: c.disabled,
        required: c.required,
        "aria-describedby": n.value,
        "aria-required": c.required,
        "aria-disabled": c.disabled
      }, c.$attrs, {
        ref: "fileInput",
        class: "po-hidden",
        onChange: w
      }), null, 16, z4),
      r("div", {
        class: L(["po-border po-border-dashed po-rounded-md po-p-3 po-flex po-items-center po-space-x-4 po-transition-colors po-duration-150 po-ease-out", [
          { "po-border-slate-400/60": !i.value },
          { "po-border-mpao-lightblue": i.value }
        ]]),
        onDragover: u,
        onDragleave: f,
        onDrop: h
      }, [
        r("span", {
          class: L(["po-w-8 po-h-8 po-shrink-0 po-flex po-items-center po-justify-center po-rounded-md", [
            { "po-bg-slate-100 po-text-slate-500": !i.value },
            { "po-bg-blue-50 po-text-blue-500": i.value }
          ]])
        }, [
          M(C(sn), { class: "po-w-5 po-stroke-current" })
        ], 2),
        a.value === "initial" ? (p(), d("span", B4, [
          i.value ? (p(), d("span", A4, x(c.dragOverText), 1)) : (p(), d("span", I4, x(c.dragAreaText), 1))
        ])) : $("", !0),
        a.value === "initial" ? (p(), d("label", {
          key: 1,
          for: n.value,
          class: "po-cursor-pointer po-transition-colors po-duration-150 po-ease-out po-shrink-0 po-text-sm po-text-mpao-lightblue po-font-meidum hover:po-text-purple-600 po-px-3 po-py-1"
        }, "Upload file", 8, j4)) : $("", !0),
        a.value === "uploading" ? (p(), d("span", R4, N4)) : $("", !0),
        a.value === "uploading" ? (p(), d("div", H4, [
          M(eo)
        ])) : $("", !0)
      ], 34),
      c.message !== null ? (p(), d("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${c.id}-description`
      }, x(c.message), 9, q4)) : $("", !0),
      l.value && C(s) !== null ? (p(), d("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
        id: `${c.id}-error`
      }, [
        r("span", null, x(C(s)), 1)
      ], 8, Y4)) : $("", !0)
    ], 2));
  }
}), U4 = {
  name: "PoWrap"
}, Z4 = /* @__PURE__ */ r("div", {
  "aria-live": "assertive",
  class: "po-pointer-events-none po-fixed po-inset-0 po-flex po-items-start po-px-4 po-py-6 sm:po-p-6 po-z-[60]"
}, [
  /* @__PURE__ */ r("div", {
    class: "po-flex po-w-full po-flex-col po-items-end po-space-y-4 sm:po-items-end po-pt-[55px]",
    id: "po-notifications-alert"
  })
], -1), G4 = { class: "po-h-full po-flex" };
function K4(e, t, o, s, l, n) {
  return p(), d(N, null, [
    Z4,
    r("div", G4, [
      G(e.$slots, "default")
    ])
  ], 64);
}
const Y2 = /* @__PURE__ */ Et(U4, [["render", K4]]);
export {
  o2 as PoActionBar,
  x2 as PoAlert,
  kn as PoAppIcon,
  Ar as PoAppTray,
  Sl as PoButton,
  s2 as PoCard,
  l2 as PoCardSearch,
  M2 as PoCardTabs,
  y2 as PoChatLogItem,
  f2 as PoCheckbox,
  $2 as PoCommandPalette,
  O2 as PoConsent,
  S2 as PoContentArea,
  D2 as PoDRStatus,
  Rp as PoDescriptionList,
  C2 as PoDownloadFileList,
  T2 as PoEmpty,
  h2 as PoFooter,
  m2 as PoFormStatusMessage,
  B2 as PoHeading,
  r2 as PoInputField,
  i2 as PoInputFile,
  P2 as PoLoading,
  V2 as PoLogs,
  k2 as PoMain,
  N2 as PoMessage,
  so as PoModal,
  u2 as PoMonthYearPicker,
  A2 as PoMultiSelect,
  w2 as PoNotification,
  Gr as PoNotificationHub,
  H2 as PoPageStats,
  n2 as PoPageTitle,
  Wi as PoPagination,
  _i as PoProfileSwitcher,
  b2 as PoRadioInput,
  Da as PoSearchBar,
  c2 as PoSectionMenu,
  F2 as PoSelectApi,
  p2 as PoSelectField,
  t2 as PoSidebarDrawer,
  _2 as PoSlideover,
  g2 as PoStatsBlock,
  a2 as PoTable,
  E2 as PoTableAction,
  j2 as PoTableCheckbox,
  L2 as PoTabs,
  v2 as PoTextarea,
  I2 as PoTimeline,
  R2 as PoToast,
  d2 as PoToggle,
  M4 as PoTooltip,
  J4 as PoTopBar,
  q2 as PoUpload,
  Y2 as PoWrap,
  z2 as Rufiyaa
};
