import { openBlock as p, createElementBlock as d, createElementVNode as r, defineComponent as T, ref as V, toRefs as Se, watch as Q, onMounted as Z, Fragment as F, renderList as G, normalizeClass as L, createVNode as C, unref as S, withCtx as E, renderSlot as K, createBlock as H, resolveDynamicComponent as fe, createCommentVNode as x, computed as I, toDisplayString as k, onBeforeUnmount as Do, onUnmounted as re, withDirectives as Oe, isRef as ql, withKeys as Ul, vModelText as Mt, vShow as Tt, cloneVNode as Yl, h as se, inject as de, provide as ve, watchEffect as he, Teleport as Dt, reactive as Wl, shallowRef as Is, nextTick as Bo, toRaw as Ye, Transition as Ze, withModifiers as te, onBeforeMount as Zl, onBeforeUpdate as Gl, onUpdated as Io, mergeProps as Be, createTextVNode as ee, pushScopeId as Kl, popScopeId as Xl, withScopeId as Ql, markRaw as Jl, shallowReactive as en, resolveComponent as zs, resolveDirective as tn, normalizeStyle as ft, toHandlers as on, normalizeProps as dt, guardReactiveProps as ct, createStaticVNode as sn } from "vue";
import { f as Es, a as ps, c as ln, d as ne, u as nn, t as an } from "./FormatMoney-8affc721.mjs";
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
      d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
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
      d: "M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
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
      d: "M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
    })
  ]);
}
function dn(e, t) {
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
function cn(e, t) {
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
function fn(e, t) {
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
function vn(e, t) {
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
      d: "M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
    })
  ]);
}
function hn(e, t) {
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
function As(e, t) {
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
function js(e, t) {
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
function mn(e, t) {
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
function wo(e, t) {
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
function bn(e, t) {
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
function Rs(e, t) {
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
function Qt(e, t) {
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
function Fs(e, t) {
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
function gn(e, t) {
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
function yn(e, t) {
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
function wn(e, t) {
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
function us(e, t) {
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
function Jt(e, t) {
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
function _n(e) {
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
const xe = _n(), $n = { class: "po-bg-mpao-blue po-fixed po-top-0 po-left-0 po-right-0 po-w-full po-z-50 po-flex" }, xn = { class: "po-shrink-0 po-px-3 po-pt-3" }, Vn = { class: "po-flex po-flex-col po-justify-center po-items-center po-w-5 po-h-5 po-space-y-[3px]" }, kn = { class: "po-mx-auto po-max-w-full po-pr-4 po-grow sm:po-pr-4" }, Cn = { class: "po-flex po-relative po-h-16 po-items-center po-justify-between po-space-x-12" }, Sn = { class: "po-flex po-items-center po-space-x-3" }, Pn = {
  key: 0,
  class: "po-block po-w-6 po-text-slate-100 md:po-hidden",
  role: "button"
}, On = {
  name: "PoTopBar"
}, I5 = /* @__PURE__ */ T({
  ...On,
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
    const o = e, s = V(""), l = V(""), n = V(!0), { avatar: a, logo: i } = Se(o);
    Q(a, () => {
      s.value = a.value;
    }), Q(i, () => {
      l.value = i.value;
    }), Z(() => {
      const _ = localStorage.getItem("isSidebarOpen");
      _ !== null && (n.value = JSON.parse(_), xe.emit("sidebarOpen", n.value));
    });
    function u(_) {
      t("profileSwitcherClick", _);
    }
    function c(_) {
      t("query", _);
    }
    function v(_) {
      t("onSearchClear", _);
    }
    function g() {
      n.value = !n.value, xe.emit("sidebarOpen", n.value), localStorage.setItem("isSidebarOpen", JSON.stringify(n.value));
    }
    return xe.on("sidebarOpen", (_) => {
      typeof _ == "boolean" && (n.value = _, localStorage.setItem("isSidebarOpen", JSON.stringify(n.value)));
    }), (_, y) => (p(), d("nav", $n, [
      r("div", xn, [
        r("button", {
          for: "sidebar-drawer-toggle",
          role: "button",
          class: "genie-effect po-flex po-items-center po-justify-center po-bg-white/5 po-rounded-full po-w-10 po-h-10 po-select-none po-text-slate-100",
          onClick: g
        }, [
          r("span", Vn, [
            (p(), d(F, null, G(3, (b) => r("span", {
              key: b,
              class: L(["po-block po-rounded-full po-bg-slate-100 po-transition-all po-duration-150 po-ease-in-out", [
                { "po-w-5 po-h-[2px]": !n.value },
                { "po-w-[3px] po-h-[3px]": n.value }
              ]])
            }, null, 2)), 64))
          ])
        ])
      ]),
      r("div", kn, [
        r("div", Cn, [
          C(S(zn), { "app-name": _.appName }, {
            icon: E(() => [
              K(_.$slots, "appIcon", {}, () => [
                _.appIcon ? (p(), H(fe(_.appIcon), { key: 0 })) : x("", !0)
              ])
            ]),
            _: 3
          }, 8, ["app-name"]),
          _.hasSearch ? (p(), H(S(qa), {
            key: 0,
            onQuery: c,
            onOnClear: v,
            "current-query": _.currentQuery,
            "show-tray": _.showSearchTray
          }, {
            default: E(() => [
              K(_.$slots, "searchTray")
            ]),
            _: 3
          }, 8, ["current-query", "show-tray"])) : x("", !0),
          r("div", Sn, [
            _.hasSearch ? (p(), d("span", Pn, [
              C(S(Qt), { class: "po-stroke-current" })
            ])) : x("", !0),
            C(S(ri), {
              notifications: _.notifications,
              "has-new-notifications": _.hasNewNotifications
            }, null, 8, ["notifications", "has-new-notifications"]),
            C(S(Gr), {
              "app-list": _.appList,
              "open-in-new-tab": !0
            }, null, 8, ["app-list"]),
            C(S(Di), {
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
}), Ln = { class: "po-flex po-items-center po-justify-center po-space-x-3" }, Mn = { class: "po-w-8 po-text-slate-100 app-icon" }, Tn = { class: "po-font-light po-text-lg po-text-slate-100" }, Dn = { class: "po-hidden md:po-block" }, Bn = { class: "po-block md:po-hidden" }, In = {
  name: "PoAppIcon"
}, zn = /* @__PURE__ */ T({
  ...In,
  props: {
    appName: { default: "App Name" }
  },
  setup(e) {
    const t = e, o = I(() => {
      if (!t.appName)
        return "";
      const s = t.appName.match(/\b[A-Z]/g);
      if (!s)
        return "";
      let l = s.join("");
      return l.length === 1 ? t.appName.substring(0, 3) : l;
    });
    return (s, l) => (p(), d("div", Ln, [
      r("div", Mn, [
        K(s.$slots, "icon")
      ]),
      r("span", Tn, [
        r("span", Dn, k(s.appName), 1),
        r("span", Bn, k(o.value), 1)
      ])
    ]));
  }
});
var me = "top", ke = "bottom", Ce = "right", be = "left", zo = "auto", Bt = [me, ke, Ce, be], vt = "start", Ot = "end", En = "clippingParents", Hs = "viewport", Vt = "popper", An = "reference", ds = /* @__PURE__ */ Bt.reduce(function(e, t) {
  return e.concat([t + "-" + vt, t + "-" + Ot]);
}, []), Ns = /* @__PURE__ */ [].concat(Bt, [zo]).reduce(function(e, t) {
  return e.concat([t, t + "-" + vt, t + "-" + Ot]);
}, []), jn = "beforeRead", Rn = "read", Fn = "afterRead", Hn = "beforeMain", Nn = "main", qn = "afterMain", Un = "beforeWrite", Yn = "write", Wn = "afterWrite", Zn = [jn, Rn, Fn, Hn, Nn, qn, Un, Yn, Wn];
function ze(e) {
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
function it(e) {
  var t = _e(e).Element;
  return e instanceof t || e instanceof Element;
}
function Ve(e) {
  var t = _e(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Eo(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = _e(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Gn(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(o) {
    var s = t.styles[o] || {}, l = t.attributes[o] || {}, n = t.elements[o];
    !Ve(n) || !ze(n) || (Object.assign(n.style, s), Object.keys(l).forEach(function(a) {
      var i = l[a];
      i === !1 ? n.removeAttribute(a) : n.setAttribute(a, i === !0 ? "" : i);
    }));
  });
}
function Kn(e) {
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
      var l = t.elements[s], n = t.attributes[s] || {}, a = Object.keys(t.styles.hasOwnProperty(s) ? t.styles[s] : o[s]), i = a.reduce(function(u, c) {
        return u[c] = "", u;
      }, {});
      !Ve(l) || !ze(l) || (Object.assign(l.style, i), Object.keys(n).forEach(function(u) {
        l.removeAttribute(u);
      }));
    });
  };
}
const Xn = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Gn,
  effect: Kn,
  requires: ["computeStyles"]
};
function Ie(e) {
  return e.split("-")[0];
}
var at = Math.max, Xt = Math.min, ht = Math.round;
function _o() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function qs() {
  return !/^((?!chrome|android).)*safari/i.test(_o());
}
function mt(e, t, o) {
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  var s = e.getBoundingClientRect(), l = 1, n = 1;
  t && Ve(e) && (l = e.offsetWidth > 0 && ht(s.width) / e.offsetWidth || 1, n = e.offsetHeight > 0 && ht(s.height) / e.offsetHeight || 1);
  var a = it(e) ? _e(e) : window, i = a.visualViewport, u = !qs() && o, c = (s.left + (u && i ? i.offsetLeft : 0)) / l, v = (s.top + (u && i ? i.offsetTop : 0)) / n, g = s.width / l, _ = s.height / n;
  return {
    width: g,
    height: _,
    top: v,
    right: c + g,
    bottom: v + _,
    left: c,
    x: c,
    y: v
  };
}
function Ao(e) {
  var t = mt(e), o = e.offsetWidth, s = e.offsetHeight;
  return Math.abs(t.width - o) <= 1 && (o = t.width), Math.abs(t.height - s) <= 1 && (s = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: o,
    height: s
  };
}
function Us(e, t) {
  var o = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (o && Eo(o)) {
    var s = t;
    do {
      if (s && e.isSameNode(s))
        return !0;
      s = s.parentNode || s.host;
    } while (s);
  }
  return !1;
}
function Fe(e) {
  return _e(e).getComputedStyle(e);
}
function Qn(e) {
  return ["table", "td", "th"].indexOf(ze(e)) >= 0;
}
function Xe(e) {
  return ((it(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function eo(e) {
  return ze(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Eo(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Xe(e)
  );
}
function cs(e) {
  return !Ve(e) || // https://github.com/popperjs/popper-core/issues/837
  Fe(e).position === "fixed" ? null : e.offsetParent;
}
function Jn(e) {
  var t = /firefox/i.test(_o()), o = /Trident/i.test(_o());
  if (o && Ve(e)) {
    var s = Fe(e);
    if (s.position === "fixed")
      return null;
  }
  var l = eo(e);
  for (Eo(l) && (l = l.host); Ve(l) && ["html", "body"].indexOf(ze(l)) < 0; ) {
    var n = Fe(l);
    if (n.transform !== "none" || n.perspective !== "none" || n.contain === "paint" || ["transform", "perspective"].indexOf(n.willChange) !== -1 || t && n.willChange === "filter" || t && n.filter && n.filter !== "none")
      return l;
    l = l.parentNode;
  }
  return null;
}
function It(e) {
  for (var t = _e(e), o = cs(e); o && Qn(o) && Fe(o).position === "static"; )
    o = cs(o);
  return o && (ze(o) === "html" || ze(o) === "body" && Fe(o).position === "static") ? t : o || Jn(e) || t;
}
function jo(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function St(e, t, o) {
  return at(e, Xt(t, o));
}
function ea(e, t, o) {
  var s = St(e, t, o);
  return s > o ? o : s;
}
function Ys() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ws(e) {
  return Object.assign({}, Ys(), e);
}
function Zs(e, t) {
  return t.reduce(function(o, s) {
    return o[s] = e, o;
  }, {});
}
var ta = function(t, o) {
  return t = typeof t == "function" ? t(Object.assign({}, o.rects, {
    placement: o.placement
  })) : t, Ws(typeof t != "number" ? t : Zs(t, Bt));
};
function oa(e) {
  var t, o = e.state, s = e.name, l = e.options, n = o.elements.arrow, a = o.modifiersData.popperOffsets, i = Ie(o.placement), u = jo(i), c = [be, Ce].indexOf(i) >= 0, v = c ? "height" : "width";
  if (!(!n || !a)) {
    var g = ta(l.padding, o), _ = Ao(n), y = u === "y" ? me : be, b = u === "y" ? ke : Ce, f = o.rects.reference[v] + o.rects.reference[u] - a[u] - o.rects.popper[v], m = a[u] - o.rects.reference[u], $ = It(n), h = $ ? u === "y" ? $.clientHeight || 0 : $.clientWidth || 0 : 0, O = f / 2 - m / 2, w = g[y], M = h - _[v] - g[b], z = h / 2 - _[v] / 2 + O, R = St(w, z, M), B = u;
    o.modifiersData[s] = (t = {}, t[B] = R, t.centerOffset = R - z, t);
  }
}
function sa(e) {
  var t = e.state, o = e.options, s = o.element, l = s === void 0 ? "[data-popper-arrow]" : s;
  l != null && (typeof l == "string" && (l = t.elements.popper.querySelector(l), !l) || Us(t.elements.popper, l) && (t.elements.arrow = l));
}
const la = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: oa,
  effect: sa,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function bt(e) {
  return e.split("-")[1];
}
var na = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function aa(e, t) {
  var o = e.x, s = e.y, l = t.devicePixelRatio || 1;
  return {
    x: ht(o * l) / l || 0,
    y: ht(s * l) / l || 0
  };
}
function fs(e) {
  var t, o = e.popper, s = e.popperRect, l = e.placement, n = e.variation, a = e.offsets, i = e.position, u = e.gpuAcceleration, c = e.adaptive, v = e.roundOffsets, g = e.isFixed, _ = a.x, y = _ === void 0 ? 0 : _, b = a.y, f = b === void 0 ? 0 : b, m = typeof v == "function" ? v({
    x: y,
    y: f
  }) : {
    x: y,
    y: f
  };
  y = m.x, f = m.y;
  var $ = a.hasOwnProperty("x"), h = a.hasOwnProperty("y"), O = be, w = me, M = window;
  if (c) {
    var z = It(o), R = "clientHeight", B = "clientWidth";
    if (z === _e(o) && (z = Xe(o), Fe(z).position !== "static" && i === "absolute" && (R = "scrollHeight", B = "scrollWidth")), z = z, l === me || (l === be || l === Ce) && n === Ot) {
      w = ke;
      var D = g && z === M && M.visualViewport ? M.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        z[R]
      );
      f -= D - s.height, f *= u ? 1 : -1;
    }
    if (l === be || (l === me || l === ke) && n === Ot) {
      O = Ce;
      var P = g && z === M && M.visualViewport ? M.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        z[B]
      );
      y -= P - s.width, y *= u ? 1 : -1;
    }
  }
  var A = Object.assign({
    position: i
  }, c && na), q = v === !0 ? aa({
    x: y,
    y: f
  }, _e(o)) : {
    x: y,
    y: f
  };
  if (y = q.x, f = q.y, u) {
    var N;
    return Object.assign({}, A, (N = {}, N[w] = h ? "0" : "", N[O] = $ ? "0" : "", N.transform = (M.devicePixelRatio || 1) <= 1 ? "translate(" + y + "px, " + f + "px)" : "translate3d(" + y + "px, " + f + "px, 0)", N));
  }
  return Object.assign({}, A, (t = {}, t[w] = h ? f + "px" : "", t[O] = $ ? y + "px" : "", t.transform = "", t));
}
function ra(e) {
  var t = e.state, o = e.options, s = o.gpuAcceleration, l = s === void 0 ? !0 : s, n = o.adaptive, a = n === void 0 ? !0 : n, i = o.roundOffsets, u = i === void 0 ? !0 : i, c = {
    placement: Ie(t.placement),
    variation: bt(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: l,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, fs(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: u
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, fs(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: u
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const ia = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: ra,
  data: {}
};
var qt = {
  passive: !0
};
function pa(e) {
  var t = e.state, o = e.instance, s = e.options, l = s.scroll, n = l === void 0 ? !0 : l, a = s.resize, i = a === void 0 ? !0 : a, u = _e(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return n && c.forEach(function(v) {
    v.addEventListener("scroll", o.update, qt);
  }), i && u.addEventListener("resize", o.update, qt), function() {
    n && c.forEach(function(v) {
      v.removeEventListener("scroll", o.update, qt);
    }), i && u.removeEventListener("resize", o.update, qt);
  };
}
const ua = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: pa,
  data: {}
};
var da = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Zt(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return da[t];
  });
}
var ca = {
  start: "end",
  end: "start"
};
function vs(e) {
  return e.replace(/start|end/g, function(t) {
    return ca[t];
  });
}
function Ro(e) {
  var t = _e(e), o = t.pageXOffset, s = t.pageYOffset;
  return {
    scrollLeft: o,
    scrollTop: s
  };
}
function Fo(e) {
  return mt(Xe(e)).left + Ro(e).scrollLeft;
}
function fa(e, t) {
  var o = _e(e), s = Xe(e), l = o.visualViewport, n = s.clientWidth, a = s.clientHeight, i = 0, u = 0;
  if (l) {
    n = l.width, a = l.height;
    var c = qs();
    (c || !c && t === "fixed") && (i = l.offsetLeft, u = l.offsetTop);
  }
  return {
    width: n,
    height: a,
    x: i + Fo(e),
    y: u
  };
}
function va(e) {
  var t, o = Xe(e), s = Ro(e), l = (t = e.ownerDocument) == null ? void 0 : t.body, n = at(o.scrollWidth, o.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0), a = at(o.scrollHeight, o.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0), i = -s.scrollLeft + Fo(e), u = -s.scrollTop;
  return Fe(l || o).direction === "rtl" && (i += at(o.clientWidth, l ? l.clientWidth : 0) - n), {
    width: n,
    height: a,
    x: i,
    y: u
  };
}
function Ho(e) {
  var t = Fe(e), o = t.overflow, s = t.overflowX, l = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + l + s);
}
function Gs(e) {
  return ["html", "body", "#document"].indexOf(ze(e)) >= 0 ? e.ownerDocument.body : Ve(e) && Ho(e) ? e : Gs(eo(e));
}
function Pt(e, t) {
  var o;
  t === void 0 && (t = []);
  var s = Gs(e), l = s === ((o = e.ownerDocument) == null ? void 0 : o.body), n = _e(s), a = l ? [n].concat(n.visualViewport || [], Ho(s) ? s : []) : s, i = t.concat(a);
  return l ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(Pt(eo(a)))
  );
}
function $o(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function ha(e, t) {
  var o = mt(e, !1, t === "fixed");
  return o.top = o.top + e.clientTop, o.left = o.left + e.clientLeft, o.bottom = o.top + e.clientHeight, o.right = o.left + e.clientWidth, o.width = e.clientWidth, o.height = e.clientHeight, o.x = o.left, o.y = o.top, o;
}
function hs(e, t, o) {
  return t === Hs ? $o(fa(e, o)) : it(t) ? ha(t, o) : $o(va(Xe(e)));
}
function ma(e) {
  var t = Pt(eo(e)), o = ["absolute", "fixed"].indexOf(Fe(e).position) >= 0, s = o && Ve(e) ? It(e) : e;
  return it(s) ? t.filter(function(l) {
    return it(l) && Us(l, s) && ze(l) !== "body";
  }) : [];
}
function ba(e, t, o, s) {
  var l = t === "clippingParents" ? ma(e) : [].concat(t), n = [].concat(l, [o]), a = n[0], i = n.reduce(function(u, c) {
    var v = hs(e, c, s);
    return u.top = at(v.top, u.top), u.right = Xt(v.right, u.right), u.bottom = Xt(v.bottom, u.bottom), u.left = at(v.left, u.left), u;
  }, hs(e, a, s));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Ks(e) {
  var t = e.reference, o = e.element, s = e.placement, l = s ? Ie(s) : null, n = s ? bt(s) : null, a = t.x + t.width / 2 - o.width / 2, i = t.y + t.height / 2 - o.height / 2, u;
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
  var c = l ? jo(l) : null;
  if (c != null) {
    var v = c === "y" ? "height" : "width";
    switch (n) {
      case vt:
        u[c] = u[c] - (t[v] / 2 - o[v] / 2);
        break;
      case Ot:
        u[c] = u[c] + (t[v] / 2 - o[v] / 2);
        break;
    }
  }
  return u;
}
function Lt(e, t) {
  t === void 0 && (t = {});
  var o = t, s = o.placement, l = s === void 0 ? e.placement : s, n = o.strategy, a = n === void 0 ? e.strategy : n, i = o.boundary, u = i === void 0 ? En : i, c = o.rootBoundary, v = c === void 0 ? Hs : c, g = o.elementContext, _ = g === void 0 ? Vt : g, y = o.altBoundary, b = y === void 0 ? !1 : y, f = o.padding, m = f === void 0 ? 0 : f, $ = Ws(typeof m != "number" ? m : Zs(m, Bt)), h = _ === Vt ? An : Vt, O = e.rects.popper, w = e.elements[b ? h : _], M = ba(it(w) ? w : w.contextElement || Xe(e.elements.popper), u, v, a), z = mt(e.elements.reference), R = Ks({
    reference: z,
    element: O,
    strategy: "absolute",
    placement: l
  }), B = $o(Object.assign({}, O, R)), D = _ === Vt ? B : z, P = {
    top: M.top - D.top + $.top,
    bottom: D.bottom - M.bottom + $.bottom,
    left: M.left - D.left + $.left,
    right: D.right - M.right + $.right
  }, A = e.modifiersData.offset;
  if (_ === Vt && A) {
    var q = A[l];
    Object.keys(P).forEach(function(N) {
      var U = [Ce, ke].indexOf(N) >= 0 ? 1 : -1, W = [me, ke].indexOf(N) >= 0 ? "y" : "x";
      P[N] += q[W] * U;
    });
  }
  return P;
}
function ga(e, t) {
  t === void 0 && (t = {});
  var o = t, s = o.placement, l = o.boundary, n = o.rootBoundary, a = o.padding, i = o.flipVariations, u = o.allowedAutoPlacements, c = u === void 0 ? Ns : u, v = bt(s), g = v ? i ? ds : ds.filter(function(b) {
    return bt(b) === v;
  }) : Bt, _ = g.filter(function(b) {
    return c.indexOf(b) >= 0;
  });
  _.length === 0 && (_ = g);
  var y = _.reduce(function(b, f) {
    return b[f] = Lt(e, {
      placement: f,
      boundary: l,
      rootBoundary: n,
      padding: a
    })[Ie(f)], b;
  }, {});
  return Object.keys(y).sort(function(b, f) {
    return y[b] - y[f];
  });
}
function ya(e) {
  if (Ie(e) === zo)
    return [];
  var t = Zt(e);
  return [vs(e), t, vs(t)];
}
function wa(e) {
  var t = e.state, o = e.options, s = e.name;
  if (!t.modifiersData[s]._skip) {
    for (var l = o.mainAxis, n = l === void 0 ? !0 : l, a = o.altAxis, i = a === void 0 ? !0 : a, u = o.fallbackPlacements, c = o.padding, v = o.boundary, g = o.rootBoundary, _ = o.altBoundary, y = o.flipVariations, b = y === void 0 ? !0 : y, f = o.allowedAutoPlacements, m = t.options.placement, $ = Ie(m), h = $ === m, O = u || (h || !b ? [Zt(m)] : ya(m)), w = [m].concat(O).reduce(function(Te, De) {
      return Te.concat(Ie(De) === zo ? ga(t, {
        placement: De,
        boundary: v,
        rootBoundary: g,
        padding: c,
        flipVariations: b,
        allowedAutoPlacements: f
      }) : De);
    }, []), M = t.rects.reference, z = t.rects.popper, R = /* @__PURE__ */ new Map(), B = !0, D = w[0], P = 0; P < w.length; P++) {
      var A = w[P], q = Ie(A), N = bt(A) === vt, U = [me, ke].indexOf(q) >= 0, W = U ? "width" : "height", Y = Lt(t, {
        placement: A,
        boundary: v,
        rootBoundary: g,
        altBoundary: _,
        padding: c
      }), X = U ? N ? Ce : be : N ? ke : me;
      M[W] > z[W] && (X = Zt(X));
      var ce = Zt(X), J = [];
      if (n && J.push(Y[q] <= 0), i && J.push(Y[X] <= 0, Y[ce] <= 0), J.every(function(Te) {
        return Te;
      })) {
        D = A, B = !1;
        break;
      }
      R.set(A, J);
    }
    if (B)
      for (var $e = b ? 3 : 1, Re = function(De) {
        var Qe = w.find(function(Je) {
          var Pe = R.get(Je);
          if (Pe)
            return Pe.slice(0, De).every(function(et) {
              return et;
            });
        });
        if (Qe)
          return D = Qe, "break";
      }, Me = $e; Me > 0; Me--) {
        var qe = Re(Me);
        if (qe === "break")
          break;
      }
    t.placement !== D && (t.modifiersData[s]._skip = !0, t.placement = D, t.reset = !0);
  }
}
const _a = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: wa,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function ms(e, t, o) {
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
function bs(e) {
  return [me, Ce, ke, be].some(function(t) {
    return e[t] >= 0;
  });
}
function $a(e) {
  var t = e.state, o = e.name, s = t.rects.reference, l = t.rects.popper, n = t.modifiersData.preventOverflow, a = Lt(t, {
    elementContext: "reference"
  }), i = Lt(t, {
    altBoundary: !0
  }), u = ms(a, s), c = ms(i, l, n), v = bs(u), g = bs(c);
  t.modifiersData[o] = {
    referenceClippingOffsets: u,
    popperEscapeOffsets: c,
    isReferenceHidden: v,
    hasPopperEscaped: g
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": v,
    "data-popper-escaped": g
  });
}
const xa = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: $a
};
function Va(e, t, o) {
  var s = Ie(e), l = [be, me].indexOf(s) >= 0 ? -1 : 1, n = typeof o == "function" ? o(Object.assign({}, t, {
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
function ka(e) {
  var t = e.state, o = e.options, s = e.name, l = o.offset, n = l === void 0 ? [0, 0] : l, a = Ns.reduce(function(v, g) {
    return v[g] = Va(g, t.rects, n), v;
  }, {}), i = a[t.placement], u = i.x, c = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += c), t.modifiersData[s] = a;
}
const Ca = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: ka
};
function Sa(e) {
  var t = e.state, o = e.name;
  t.modifiersData[o] = Ks({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Pa = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Sa,
  data: {}
};
function Oa(e) {
  return e === "x" ? "y" : "x";
}
function La(e) {
  var t = e.state, o = e.options, s = e.name, l = o.mainAxis, n = l === void 0 ? !0 : l, a = o.altAxis, i = a === void 0 ? !1 : a, u = o.boundary, c = o.rootBoundary, v = o.altBoundary, g = o.padding, _ = o.tether, y = _ === void 0 ? !0 : _, b = o.tetherOffset, f = b === void 0 ? 0 : b, m = Lt(t, {
    boundary: u,
    rootBoundary: c,
    padding: g,
    altBoundary: v
  }), $ = Ie(t.placement), h = bt(t.placement), O = !h, w = jo($), M = Oa(w), z = t.modifiersData.popperOffsets, R = t.rects.reference, B = t.rects.popper, D = typeof f == "function" ? f(Object.assign({}, t.rects, {
    placement: t.placement
  })) : f, P = typeof D == "number" ? {
    mainAxis: D,
    altAxis: D
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, D), A = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, q = {
    x: 0,
    y: 0
  };
  if (z) {
    if (n) {
      var N, U = w === "y" ? me : be, W = w === "y" ? ke : Ce, Y = w === "y" ? "height" : "width", X = z[w], ce = X + m[U], J = X - m[W], $e = y ? -B[Y] / 2 : 0, Re = h === vt ? R[Y] : B[Y], Me = h === vt ? -B[Y] : -R[Y], qe = t.elements.arrow, Te = y && qe ? Ao(qe) : {
        width: 0,
        height: 0
      }, De = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Ys(), Qe = De[U], Je = De[W], Pe = St(0, R[Y], Te[Y]), et = O ? R[Y] / 2 - $e - Pe - Qe - P.mainAxis : Re - Pe - Qe - P.mainAxis, wt = O ? -R[Y] / 2 + $e + Pe + Je + P.mainAxis : Me + Pe + Je + P.mainAxis, Ue = t.elements.arrow && It(t.elements.arrow), _t = Ue ? w === "y" ? Ue.clientTop || 0 : Ue.clientLeft || 0 : 0, ut = (N = A == null ? void 0 : A[w]) != null ? N : 0, $t = X + et - ut - _t, xt = X + wt - ut, fo = St(y ? Xt(ce, $t) : ce, X, y ? at(J, xt) : J);
      z[w] = fo, q[w] = fo - X;
    }
    if (i) {
      var os, Hl = w === "x" ? me : be, Nl = w === "x" ? ke : Ce, tt = z[M], Nt = M === "y" ? "height" : "width", ss = tt + m[Hl], ls = tt - m[Nl], vo = [me, be].indexOf($) !== -1, ns = (os = A == null ? void 0 : A[M]) != null ? os : 0, as = vo ? ss : tt - R[Nt] - B[Nt] - ns + P.altAxis, rs = vo ? tt + R[Nt] + B[Nt] - ns - P.altAxis : ls, is = y && vo ? ea(as, tt, rs) : St(y ? as : ss, tt, y ? rs : ls);
      z[M] = is, q[M] = is - tt;
    }
    t.modifiersData[s] = q;
  }
}
const Ma = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: La,
  requiresIfExists: ["offset"]
};
function Ta(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Da(e) {
  return e === _e(e) || !Ve(e) ? Ro(e) : Ta(e);
}
function Ba(e) {
  var t = e.getBoundingClientRect(), o = ht(t.width) / e.offsetWidth || 1, s = ht(t.height) / e.offsetHeight || 1;
  return o !== 1 || s !== 1;
}
function Ia(e, t, o) {
  o === void 0 && (o = !1);
  var s = Ve(t), l = Ve(t) && Ba(t), n = Xe(t), a = mt(e, l, o), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = {
    x: 0,
    y: 0
  };
  return (s || !s && !o) && ((ze(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Ho(n)) && (i = Da(t)), Ve(t) ? (u = mt(t, !0), u.x += t.clientLeft, u.y += t.clientTop) : n && (u.x = Fo(n))), {
    x: a.left + i.scrollLeft - u.x,
    y: a.top + i.scrollTop - u.y,
    width: a.width,
    height: a.height
  };
}
function za(e) {
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
function Ea(e) {
  var t = za(e);
  return Zn.reduce(function(o, s) {
    return o.concat(t.filter(function(l) {
      return l.phase === s;
    }));
  }, []);
}
function Aa(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(o) {
      Promise.resolve().then(function() {
        t = void 0, o(e());
      });
    })), t;
  };
}
function ja(e) {
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
var gs = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function ys() {
  for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
    t[o] = arguments[o];
  return !t.some(function(s) {
    return !(s && typeof s.getBoundingClientRect == "function");
  });
}
function Ra(e) {
  e === void 0 && (e = {});
  var t = e, o = t.defaultModifiers, s = o === void 0 ? [] : o, l = t.defaultOptions, n = l === void 0 ? gs : l;
  return function(i, u, c) {
    c === void 0 && (c = n);
    var v = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, gs, n),
      modifiersData: {},
      elements: {
        reference: i,
        popper: u
      },
      attributes: {},
      styles: {}
    }, g = [], _ = !1, y = {
      state: v,
      setOptions: function($) {
        var h = typeof $ == "function" ? $(v.options) : $;
        f(), v.options = Object.assign({}, n, v.options, h), v.scrollParents = {
          reference: it(i) ? Pt(i) : i.contextElement ? Pt(i.contextElement) : [],
          popper: Pt(u)
        };
        var O = Ea(ja([].concat(s, v.options.modifiers)));
        return v.orderedModifiers = O.filter(function(w) {
          return w.enabled;
        }), b(), y.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!_) {
          var $ = v.elements, h = $.reference, O = $.popper;
          if (ys(h, O)) {
            v.rects = {
              reference: Ia(h, It(O), v.options.strategy === "fixed"),
              popper: Ao(O)
            }, v.reset = !1, v.placement = v.options.placement, v.orderedModifiers.forEach(function(P) {
              return v.modifiersData[P.name] = Object.assign({}, P.data);
            });
            for (var w = 0; w < v.orderedModifiers.length; w++) {
              if (v.reset === !0) {
                v.reset = !1, w = -1;
                continue;
              }
              var M = v.orderedModifiers[w], z = M.fn, R = M.options, B = R === void 0 ? {} : R, D = M.name;
              typeof z == "function" && (v = z({
                state: v,
                options: B,
                name: D,
                instance: y
              }) || v);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Aa(function() {
        return new Promise(function(m) {
          y.forceUpdate(), m(v);
        });
      }),
      destroy: function() {
        f(), _ = !0;
      }
    };
    if (!ys(i, u))
      return y;
    y.setOptions(c).then(function(m) {
      !_ && c.onFirstUpdate && c.onFirstUpdate(m);
    });
    function b() {
      v.orderedModifiers.forEach(function(m) {
        var $ = m.name, h = m.options, O = h === void 0 ? {} : h, w = m.effect;
        if (typeof w == "function") {
          var M = w({
            state: v,
            name: $,
            instance: y,
            options: O
          }), z = function() {
          };
          g.push(M || z);
        }
      });
    }
    function f() {
      g.forEach(function(m) {
        return m();
      }), g = [];
    }
    return y;
  };
}
var Fa = [ua, Pa, ia, Xn, Ca, _a, Ma, la, xa], zt = /* @__PURE__ */ Ra({
  defaultModifiers: Fa
});
function Et(e, t) {
  if (!e)
    return;
  const o = (s) => {
    s.target !== e.value && s.composedPath().includes(e.value) || typeof t == "function" && t();
  };
  return Z(() => {
    window.addEventListener("click", o);
  }), Do(() => {
    window.removeEventListener("click", o);
  }), { listener: o };
}
const Ha = ["placeholder", "onKeyup"], Na = {
  name: "PoSearchBar"
}, qa = /* @__PURE__ */ T({
  ...Na,
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
    let u = V(""), c;
    const v = (b) => {
      t("query", u.value);
    };
    function g() {
      t("query", u.value);
    }
    Z(() => {
      o.showTray && setTimeout(() => {
        c = zt(n.value, a.value, {
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
    }), Q(u, async (b, f) => {
      b === "" && t("onClear", !0);
    }), Et(l, () => {
      o.showTray && (s.value = !1);
    }), xe.on("sidebarOpen", (b) => {
      setTimeout(() => {
        c && o.showTray && c.update();
      }, 320);
    }), re(() => {
      c && o.showTray && c.destroy();
    });
    function _(b, f, m, $) {
      i.value.viewStartIdx = b, i.value.viewEndIdx = f, i.value.visibleStartIdx = m, i.value.visibleEndIdx = $;
    }
    function y() {
      c && c.update();
    }
    return (b, f) => (p(), d("div", {
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
          { "po-hidden": S(u) === "" }
        ]]),
        onClick: g
      }, "Search", 2),
      Oe(r("input", {
        "onUpdate:modelValue": f[0] || (f[0] = (m) => ql(u) ? u.value = m : u = m),
        type: "text",
        ref_key: "mainSearchBox",
        ref: n,
        id: "main-search",
        placeholder: b.placeholder,
        onKeyup: Ul(v, ["enter"]),
        onFocus: f[1] || (f[1] = (m) => s.value = !0),
        autocomplete: "off",
        class: L(["peer/search po-border-transparent po-text-sm po-ring-0 po-outline-none focus:po-outline-none focus:po-ring-0 po-transition-colors po-ease-linear po-duration-100 po-block po-w-full po-pl-10 po-p-2.5 po-appearance-none hover:po-border-white/40", [
          {
            "po-rounded-md po-border focus:po-border-slate-400 po-bg-transparent po-text-slate-100 po-placeholder-white/60": !b.showTray || !s.value
          },
          {
            "po-rounded-t-md po-border-2 focus:po-border-white po-bg-white po-text-slate-600": b.showTray && s.value
          }
        ]])
      }, null, 42, Ha), [
        [Mt, S(u)]
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
        C(S(Qt), { class: "po-w-5 po-h-5 po-stroke-current" })
      ], 2),
      Oe(r("div", {
        ref_key: "popper",
        ref: a,
        class: "po-absolute po-z-[51] po-mt-1 po-w-full po-rounded-b-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm",
        onResize: y,
        onUpdate: _
      }, [
        K(b.$slots, "default")
      ], 544), [
        [Tt, s.value && b.showTray]
      ])
    ], 512));
  }
});
function ue(e, t, ...o) {
  if (e in t) {
    let l = t[e];
    return typeof l == "function" ? l(...o) : l;
  }
  let s = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((l) => `"${l}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(s, ue), s;
}
var Ee = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Ee || {}), We = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(We || {});
function oe({ visible: e = !0, features: t = 0, ourProps: o, theirProps: s, ...l }) {
  var n;
  let a = Qs(s, o), i = Object.assign(l, { props: a });
  if (e || t & 2 && a.static)
    return ho(i);
  if (t & 1) {
    let u = (n = a.unmount) == null || n ? 0 : 1;
    return ue(u, { [0]() {
      return null;
    }, [1]() {
      return ho({ ...l, props: { ...a, hidden: !0, style: { display: "none" } } });
    } });
  }
  return ho(i);
}
function ho({ props: e, attrs: t, slots: o, slot: s, name: l }) {
  var n, a;
  let { as: i, ...u } = to(e, ["unmount", "static"]), c = (n = o.default) == null ? void 0 : n.call(o, s), v = {};
  if (s) {
    let g = !1, _ = [];
    for (let [y, b] of Object.entries(s))
      typeof b == "boolean" && (g = !0), b === !0 && _.push(y);
    g && (v["data-headlessui-state"] = _.join(" "));
  }
  if (i === "template") {
    if (c = Xs(c ?? []), Object.keys(u).length > 0 || Object.keys(t).length > 0) {
      let [g, ..._] = c ?? [];
      if (!Ua(g) || _.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${l} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(u).concat(Object.keys(t)).map((f) => f.trim()).filter((f, m, $) => $.indexOf(f) === m).sort((f, m) => f.localeCompare(m)).map((f) => `  - ${f}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((f) => `  - ${f}`).join(`
`)].join(`
`));
      let y = Qs((a = g.props) != null ? a : {}, u), b = Yl(g, y);
      for (let f in y)
        f.startsWith("on") && (b.props || (b.props = {}), b.props[f] = y[f]);
      return b;
    }
    return Array.isArray(c) && c.length === 1 ? c[0] : c;
  }
  return se(i, Object.assign({}, u, v), { default: () => c });
}
function Xs(e) {
  return e.flatMap((t) => t.type === F ? Xs(t.children) : [t]);
}
function Qs(...e) {
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
function Js(e) {
  let t = Object.assign({}, e);
  for (let o in t)
    t[o] === void 0 && delete t[o];
  return t;
}
function to(e, t = []) {
  let o = Object.assign({}, e);
  for (let s of t)
    s in o && delete o[s];
  return o;
}
function Ua(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Ya = 0;
function Wa() {
  return ++Ya;
}
function pe() {
  return Wa();
}
var ae = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(ae || {});
function j(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let el = Symbol("Context");
var le = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(le || {});
function Za() {
  return yt() !== null;
}
function yt() {
  return de(el, null);
}
function No(e) {
  ve(el, e);
}
function ws(e, t) {
  if (e)
    return e;
  let o = t ?? "button";
  if (typeof o == "string" && o.toLowerCase() === "button")
    return "button";
}
function qo(e, t) {
  let o = V(ws(e.value.type, e.value.as));
  return Z(() => {
    o.value = ws(e.value.type, e.value.as);
  }), he(() => {
    var s;
    o.value || j(t) && j(t) instanceof HTMLButtonElement && !((s = j(t)) != null && s.hasAttribute("type")) && (o.value = "button");
  }), o;
}
var Ga = Object.defineProperty, Ka = (e, t, o) => t in e ? Ga(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, _s = (e, t, o) => (Ka(e, typeof t != "symbol" ? t + "" : t, o), o);
let Xa = class {
  constructor() {
    _s(this, "current", this.detect()), _s(this, "currentId", 0);
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
}, At = new Xa();
function we(e) {
  if (At.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = j(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
function Qa({ container: e, accept: t, walk: o, enabled: s }) {
  he(() => {
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
let xo = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var ie = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ie || {}), pt = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(pt || {}), Ja = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Ja || {});
function oo(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(xo)).sort((t, o) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (o.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Uo = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Uo || {});
function tl(e, t = 0) {
  var o;
  return e === ((o = we(e)) == null ? void 0 : o.body) ? !1 : ue(t, { [0]() {
    return e.matches(xo);
  }, [1]() {
    let s = e;
    for (; s !== null; ) {
      if (s.matches(xo))
        return !0;
      s = s.parentElement;
    }
    return !1;
  } });
}
function rt(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let er = ["textarea", "input"].join(",");
function tr(e) {
  var t, o;
  return (o = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, er)) != null ? o : !1;
}
function ol(e, t = (o) => o) {
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
  let a = (n = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? n : document, i = Array.isArray(e) ? o ? ol(e) : e : oo(e);
  l.length > 0 && i.length > 1 && (i = i.filter((b) => !l.includes(b))), s = s ?? a.activeElement;
  let u = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), c = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, i.indexOf(s)) - 1;
    if (t & 4)
      return Math.max(0, i.indexOf(s)) + 1;
    if (t & 8)
      return i.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), v = t & 32 ? { preventScroll: !0 } : {}, g = 0, _ = i.length, y;
  do {
    if (g >= _ || g + _ <= 0)
      return 0;
    let b = c + g;
    if (t & 16)
      b = (b + _) % _;
    else {
      if (b < 0)
        return 3;
      if (b >= _)
        return 1;
    }
    y = i[b], y == null || y.focus(v), g += u;
  } while (y !== a.activeElement);
  return t & 6 && tr(y) && y.select(), y.hasAttribute("tabindex") || y.setAttribute("tabindex", "0"), 2;
}
function mo(e, t, o) {
  At.isServer || he((s) => {
    document.addEventListener(e, t, o), s(() => document.removeEventListener(e, t, o));
  });
}
function sl(e, t, o = I(() => !0)) {
  function s(n, a) {
    if (!o.value || n.defaultPrevented)
      return;
    let i = a(n);
    if (i === null || !i.getRootNode().contains(i))
      return;
    let u = function c(v) {
      return typeof v == "function" ? c(v()) : Array.isArray(v) || v instanceof Set ? v : [v];
    }(e);
    for (let c of u) {
      if (c === null)
        continue;
      let v = c instanceof HTMLElement ? c : j(c);
      if (v != null && v.contains(i) || n.composed && n.composedPath().includes(v))
        return;
    }
    return !tl(i, Uo.Loose) && i.tabIndex !== -1 && n.preventDefault(), t(n, i);
  }
  let l = V(null);
  mo("mousedown", (n) => {
    var a, i;
    o.value && (l.value = ((i = (a = n.composedPath) == null ? void 0 : a.call(n)) == null ? void 0 : i[0]) || n.target);
  }, !0), mo("click", (n) => {
    l.value && (s(n, () => l.value), l.value = null);
  }, !0), mo("blur", (n) => s(n, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var He = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(He || {});
let Ge = T({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: o }) {
  return () => {
    let { features: s, ...l } = e, n = { "aria-hidden": (s & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(s & 4) === 4 && (s & 2) !== 2 && { display: "none" } } };
    return oe({ ourProps: n, theirProps: l, slot: {}, attrs: o, slots: t, name: "Hidden" });
  };
} });
function ll(e = {}, t = null, o = []) {
  for (let [s, l] of Object.entries(e))
    al(o, nl(t, s), l);
  return o;
}
function nl(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function al(e, t, o) {
  if (Array.isArray(o))
    for (let [s, l] of o.entries())
      al(e, nl(t, s.toString()), l);
  else
    o instanceof Date ? e.push([t, o.toISOString()]) : typeof o == "boolean" ? e.push([t, o ? "1" : "0"]) : typeof o == "string" ? e.push([t, o]) : typeof o == "number" ? e.push([t, `${o}`]) : o == null ? e.push([t, ""]) : ll(o, t, e);
}
function rl(e) {
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
function il(e, t, o) {
  let s = V(o == null ? void 0 : o.value), l = I(() => e.value !== void 0);
  return [I(() => l.value ? e.value : s.value), function(n) {
    return l.value || (s.value = n), t == null ? void 0 : t(n);
  }];
}
function or() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function sr(e, t, o) {
  At.isServer || he((s) => {
    window.addEventListener(e, t, o), s(() => window.removeEventListener(e, t, o));
  });
}
var ye = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(ye || {});
function Yo() {
  let e = V(0);
  return sr("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Wo(e, t, o, s) {
  At.isServer || he((l) => {
    e = e ?? window, e.addEventListener(t, o, s), l(() => e.removeEventListener(t, o, s));
  });
}
function pl(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function ul(e) {
  if (!e)
    return /* @__PURE__ */ new Set();
  if (typeof e == "function")
    return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let o of e.value) {
    let s = j(o);
    s instanceof HTMLElement && t.add(s);
  }
  return t;
}
var dl = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(dl || {});
let kt = Object.assign(T({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: V(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: s }) {
  let l = V(null);
  s({ el: l, $el: l });
  let n = I(() => we(l)), a = V(!1);
  Z(() => a.value = !0), re(() => a.value = !1), nr({ ownerDocument: n }, I(() => a.value && Boolean(e.features & 16)));
  let i = ar({ ownerDocument: n, container: l, initialFocus: I(() => e.initialFocus) }, I(() => a.value && Boolean(e.features & 2)));
  rr({ ownerDocument: n, container: l, containers: e.containers, previousActiveElement: i }, I(() => a.value && Boolean(e.features & 8)));
  let u = Yo();
  function c(y) {
    let b = j(l);
    b && ((f) => f())(() => {
      ue(u.value, { [ye.Forwards]: () => {
        ge(b, ie.First, { skipElements: [y.relatedTarget] });
      }, [ye.Backwards]: () => {
        ge(b, ie.Last, { skipElements: [y.relatedTarget] });
      } });
    });
  }
  let v = V(!1);
  function g(y) {
    y.key === "Tab" && (v.value = !0, requestAnimationFrame(() => {
      v.value = !1;
    }));
  }
  function _(y) {
    if (!a.value)
      return;
    let b = ul(e.containers);
    j(l) instanceof HTMLElement && b.add(j(l));
    let f = y.relatedTarget;
    f instanceof HTMLElement && f.dataset.headlessuiFocusGuard !== "true" && (cl(b, f) || (v.value ? ge(j(l), ue(u.value, { [ye.Forwards]: () => ie.Next, [ye.Backwards]: () => ie.Previous }) | ie.WrapAround, { relativeTo: y.target }) : y.target instanceof HTMLElement && rt(y.target)));
  }
  return () => {
    let y = {}, b = { ref: l, onKeydown: g, onFocusout: _ }, { features: f, initialFocus: m, containers: $, ...h } = e;
    return se(F, [Boolean(f & 4) && se(Ge, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: He.Focusable }), oe({ ourProps: b, theirProps: { ...t, ...h }, slot: y, attrs: t, slots: o, name: "FocusTrap" }), Boolean(f & 4) && se(Ge, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: He.Focusable })]);
  };
} }), { features: dl }), st = [];
if (typeof window < "u" && typeof document < "u") {
  let e = function(t) {
    t.target instanceof HTMLElement && t.target !== document.body && st[0] !== t.target && (st.unshift(t.target), st = st.filter((o) => o != null && o.isConnected), st.splice(10));
  };
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
}
function lr(e) {
  let t = V(st.slice());
  return Q([e], ([o], [s]) => {
    s === !0 && o === !1 ? pl(() => {
      t.value.splice(0);
    }) : s === !1 && o === !0 && (t.value = st.slice());
  }, { flush: "post" }), () => {
    var o;
    return (o = t.value.find((s) => s != null && s.isConnected)) != null ? o : null;
  };
}
function nr({ ownerDocument: e }, t) {
  let o = lr(t);
  Z(() => {
    he(() => {
      var s, l;
      t.value || ((s = e.value) == null ? void 0 : s.activeElement) === ((l = e.value) == null ? void 0 : l.body) && rt(o());
    }, { flush: "post" });
  }), re(() => {
    rt(o());
  });
}
function ar({ ownerDocument: e, container: t, initialFocus: o }, s) {
  let l = V(null), n = V(!1);
  return Z(() => n.value = !0), re(() => n.value = !1), Z(() => {
    Q([t, o, s], (a, i) => {
      if (a.every((c, v) => (i == null ? void 0 : i[v]) === c) || !s.value)
        return;
      let u = j(t);
      u && pl(() => {
        var c, v;
        if (!n.value)
          return;
        let g = j(o), _ = (c = e.value) == null ? void 0 : c.activeElement;
        if (g) {
          if (g === _) {
            l.value = _;
            return;
          }
        } else if (u.contains(_)) {
          l.value = _;
          return;
        }
        g ? rt(g) : ge(u, ie.First | ie.NoScroll) === pt.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), l.value = (v = e.value) == null ? void 0 : v.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), l;
}
function rr({ ownerDocument: e, container: t, containers: o, previousActiveElement: s }, l) {
  var n;
  Wo((n = e.value) == null ? void 0 : n.defaultView, "focus", (a) => {
    if (!l.value)
      return;
    let i = ul(o);
    j(t) instanceof HTMLElement && i.add(j(t));
    let u = s.value;
    if (!u)
      return;
    let c = a.target;
    c && c instanceof HTMLElement ? cl(i, c) ? (s.value = c, rt(c)) : (a.preventDefault(), a.stopPropagation(), rt(u)) : rt(s.value);
  }, !0);
}
function cl(e, t) {
  for (let o of e)
    if (o.contains(t))
      return !0;
  return !1;
}
let bo = /* @__PURE__ */ new Map(), Ct = /* @__PURE__ */ new Map();
function $s(e, t = V(!0)) {
  he((o) => {
    var s;
    if (!t.value)
      return;
    let l = j(e);
    if (!l)
      return;
    o(function() {
      var a;
      if (!l)
        return;
      let i = (a = Ct.get(l)) != null ? a : 1;
      if (i === 1 ? Ct.delete(l) : Ct.set(l, i - 1), i !== 1)
        return;
      let u = bo.get(l);
      u && (u["aria-hidden"] === null ? l.removeAttribute("aria-hidden") : l.setAttribute("aria-hidden", u["aria-hidden"]), l.inert = u.inert, bo.delete(l));
    });
    let n = (s = Ct.get(l)) != null ? s : 0;
    Ct.set(l, n + 1), n === 0 && (bo.set(l, { "aria-hidden": l.getAttribute("aria-hidden"), inert: l.inert }), l.setAttribute("aria-hidden", "true"), l.inert = !0);
  });
}
let fl = Symbol("ForcePortalRootContext");
function ir() {
  return de(fl, !1);
}
let Vo = T({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: o }) {
  return ve(fl, e.force), () => {
    let { force: s, ...l } = e;
    return oe({ theirProps: l, ourProps: {}, slot: {}, slots: t, attrs: o, name: "ForcePortalRoot" });
  };
} });
function pr(e) {
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
let vl = T({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: o }) {
  let s = V(null), l = I(() => we(s)), n = ir(), a = de(hl, null), i = V(n === !0 || a == null ? pr(s.value) : a.resolveTarget());
  return he(() => {
    n || a != null && (i.value = a.resolveTarget());
  }), re(() => {
    var u, c;
    let v = (u = l.value) == null ? void 0 : u.getElementById("headlessui-portal-root");
    v && i.value === v && i.value.children.length <= 0 && ((c = i.value.parentElement) == null || c.removeChild(i.value));
  }), () => {
    if (i.value === null)
      return null;
    let u = { ref: s, "data-headlessui-portal": "" };
    return se(Dt, { to: i.value }, oe({ ourProps: u, theirProps: e, slot: {}, attrs: o, slots: t, name: "Portal" }));
  };
} }), hl = Symbol("PortalGroupContext"), ur = T({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: o }) {
  let s = Wl({ resolveTarget() {
    return e.target;
  } });
  return ve(hl, s), () => {
    let { target: l, ...n } = e;
    return oe({ theirProps: n, ourProps: {}, slot: {}, attrs: t, slots: o, name: "PortalGroup" });
  };
} }), ml = Symbol("StackContext");
var ko = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(ko || {});
function dr() {
  return de(ml, () => {
  });
}
function cr({ type: e, enabled: t, element: o, onUpdate: s }) {
  let l = dr();
  function n(...a) {
    s == null || s(...a), l(...a);
  }
  Z(() => {
    Q(t, (a, i) => {
      a ? n(0, e, o) : i === !0 && n(1, e, o);
    }, { immediate: !0, flush: "sync" });
  }), re(() => {
    t.value && n(1, e, o);
  }), ve(ml, n);
}
let bl = Symbol("DescriptionContext");
function fr() {
  let e = de(bl, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function so({ slot: e = V({}), name: t = "Description", props: o = {} } = {}) {
  let s = V([]);
  function l(n) {
    return s.value.push(n), () => {
      let a = s.value.indexOf(n);
      a !== -1 && s.value.splice(a, 1);
    };
  }
  return ve(bl, { register: l, slot: e, name: t, props: o }), I(() => s.value.length > 0 ? s.value.join(" ") : void 0);
}
let vr = T({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${pe()}` } }, setup(e, { attrs: t, slots: o }) {
  let s = fr();
  return Z(() => re(s.register(e.id))), () => {
    let { name: l = "Description", slot: n = V({}), props: a = {} } = s, { id: i, ...u } = e, c = { ...Object.entries(a).reduce((v, [g, _]) => Object.assign(v, { [g]: S(_) }), {}), id: i };
    return oe({ ourProps: c, theirProps: u, slot: n.value, attrs: t, slots: o, name: l });
  };
} });
function hr(e) {
  let t = Is(e.getSnapshot());
  return re(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function lo() {
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
    let s = lo();
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
function mr(e, t) {
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
function br() {
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
function gr() {
  if (!or())
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
          let { hash: u } = new URL(i.href), c = t.querySelector(u);
          c && !l(c) && (n = c);
        } catch {
        }
    }, !0), o.addEventListener(t, "touchmove", (a) => {
      a.target instanceof HTMLElement && !l(a.target) && a.preventDefault();
    }, { passive: !1 }), o.add(() => {
      window.scrollTo(0, window.pageYOffset + e), n && n.isConnected && (n.scrollIntoView({ block: "nearest" }), n = null);
    });
  } };
}
function yr() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function wr(e) {
  let t = {};
  for (let o of e)
    Object.assign(t, o(t));
  return t;
}
let lt = mr(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var o;
  let s = (o = this.get(e)) != null ? o : { doc: e, count: 0, d: lo(), meta: /* @__PURE__ */ new Set() };
  return s.count++, s.meta.add(t), this.set(e, s), this;
}, POP(e, t) {
  let o = this.get(e);
  return o && (o.count--, o.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: o }) {
  let s = { doc: e, d: t, meta: wr(o) }, l = [gr(), br(), yr()];
  l.forEach(({ before: n }) => n == null ? void 0 : n(s)), l.forEach(({ after: n }) => n == null ? void 0 : n(s));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
lt.subscribe(() => {
  let e = lt.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [o] of e)
    t.set(o, o.documentElement.style.overflow);
  for (let o of e.values()) {
    let s = t.get(o.doc) === "hidden", l = o.count !== 0;
    (l && !s || !l && s) && lt.dispatch(o.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", o), o.count === 0 && lt.dispatch("TEARDOWN", o);
  }
});
function _r(e, t, o) {
  let s = hr(lt), l = I(() => {
    let n = e.value ? s.value.get(e.value) : void 0;
    return n ? n.count > 0 : !1;
  });
  return Q([e, t], ([n, a], [i], u) => {
    if (!n || !a)
      return;
    lt.dispatch("PUSH", n, o);
    let c = !1;
    u(() => {
      c || (lt.dispatch("POP", i ?? n, o), c = !0);
    });
  }, { immediate: !0 }), l;
}
var $r = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))($r || {});
let Co = Symbol("DialogContext");
function jt(e) {
  let t = de(Co, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, jt), o;
  }
  return t;
}
let Ut = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", no = T({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Ut }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${pe()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: o, slots: s, expose: l }) {
  var n;
  let a = V(!1);
  Z(() => {
    a.value = !0;
  });
  let i = V(0), u = yt(), c = I(() => e.open === Ut && u !== null ? (u.value & le.Open) === le.Open : e.open), v = V(null), g = V(null), _ = I(() => we(v));
  if (l({ el: v, $el: v }), !(e.open !== Ut || u !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof c.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${c.value === Ut ? void 0 : e.open}`);
  let y = I(() => a.value && c.value ? 0 : 1), b = I(() => y.value === 0), f = I(() => i.value > 1), m = de(Co, null) !== null, $ = I(() => f.value ? "parent" : "leaf"), h = I(() => u !== null ? (u.value & le.Closing) === le.Closing : !1), O = I(() => m || h.value ? !1 : b.value), w = I(() => {
    var U, W, Y;
    return (Y = Array.from((W = (U = _.value) == null ? void 0 : U.querySelectorAll("body > *")) != null ? W : []).find((X) => X.id === "headlessui-portal-root" ? !1 : X.contains(j(g)) && X instanceof HTMLElement)) != null ? Y : null;
  });
  $s(w, O);
  let M = I(() => f.value ? !0 : b.value), z = I(() => {
    var U, W, Y;
    return (Y = Array.from((W = (U = _.value) == null ? void 0 : U.querySelectorAll("[data-headlessui-portal]")) != null ? W : []).find((X) => X.contains(j(g)) && X instanceof HTMLElement)) != null ? Y : null;
  });
  $s(z, M), cr({ type: "Dialog", enabled: I(() => y.value === 0), element: v, onUpdate: (U, W) => {
    if (W === "Dialog")
      return ue(U, { [ko.Add]: () => i.value += 1, [ko.Remove]: () => i.value -= 1 });
  } });
  let R = so({ name: "DialogDescription", slot: I(() => ({ open: c.value })) }), B = V(null), D = { titleId: B, panelRef: V(null), dialogState: y, setTitleId(U) {
    B.value !== U && (B.value = U);
  }, close() {
    t("close", !1);
  } };
  ve(Co, D);
  function P() {
    var U, W, Y;
    return [...Array.from((W = (U = _.value) == null ? void 0 : U.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? W : []).filter((X) => !(X === document.body || X === document.head || !(X instanceof HTMLElement) || X.contains(j(g)) || D.panelRef.value && X.contains(D.panelRef.value))), (Y = D.panelRef.value) != null ? Y : v.value];
  }
  let A = I(() => !(!b.value || f.value));
  sl(() => P(), (U, W) => {
    D.close(), Bo(() => W == null ? void 0 : W.focus());
  }, A);
  let q = I(() => !(f.value || y.value !== 0));
  Wo((n = _.value) == null ? void 0 : n.defaultView, "keydown", (U) => {
    q.value && (U.defaultPrevented || U.key === ae.Escape && (U.preventDefault(), U.stopPropagation(), D.close()));
  });
  let N = I(() => !(h.value || y.value !== 0 || m));
  return _r(_, N, (U) => {
    var W;
    return { containers: [...(W = U.containers) != null ? W : [], P] };
  }), he((U) => {
    if (y.value !== 0)
      return;
    let W = j(v);
    if (!W)
      return;
    let Y = new ResizeObserver((X) => {
      for (let ce of X) {
        let J = ce.target.getBoundingClientRect();
        J.x === 0 && J.y === 0 && J.width === 0 && J.height === 0 && D.close();
      }
    });
    Y.observe(W), U(() => Y.disconnect());
  }), () => {
    let { id: U, open: W, initialFocus: Y, ...X } = e, ce = { ...o, ref: v, id: U, role: "dialog", "aria-modal": y.value === 0 ? !0 : void 0, "aria-labelledby": B.value, "aria-describedby": R.value }, J = { open: y.value === 0 };
    return se(Vo, { force: !0 }, () => [se(vl, () => se(ur, { target: v.value }, () => se(Vo, { force: !1 }, () => se(kt, { initialFocus: Y, containers: P, features: b.value ? ue($.value, { parent: kt.features.RestoreFocus, leaf: kt.features.All & ~kt.features.FocusLock }) : kt.features.None }, () => oe({ ourProps: ce, theirProps: X, slot: J, attrs: o, slots: s, visible: y.value === 0, features: Ee.RenderStrategy | Ee.Static, name: "Dialog" }))))), se(Ge, { features: He.Hidden, ref: g })]);
  };
} });
T({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${pe()}` } }, setup(e, { attrs: t, slots: o }) {
  let s = jt("DialogOverlay");
  function l(n) {
    n.target === n.currentTarget && (n.preventDefault(), n.stopPropagation(), s.close());
  }
  return () => {
    let { id: n, ...a } = e;
    return oe({ ourProps: { id: n, "aria-hidden": !0, onClick: l }, theirProps: a, slot: { open: s.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogOverlay" });
  };
} });
T({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${pe()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: s }) {
  let l = jt("DialogBackdrop"), n = V(null);
  return s({ el: n, $el: n }), Z(() => {
    if (l.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: a, ...i } = e, u = { id: a, ref: n, "aria-hidden": !0 };
    return se(Vo, { force: !0 }, () => se(vl, () => oe({ ourProps: u, theirProps: { ...t, ...i }, slot: { open: l.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogBackdrop" })));
  };
} });
let ao = T({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${pe()}` } }, setup(e, { attrs: t, slots: o, expose: s }) {
  let l = jt("DialogPanel");
  s({ el: l.panelRef, $el: l.panelRef });
  function n(a) {
    a.stopPropagation();
  }
  return () => {
    let { id: a, ...i } = e, u = { id: a, ref: l.panelRef, onClick: n };
    return oe({ ourProps: u, theirProps: i, slot: { open: l.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogPanel" });
  };
} }), gl = T({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${pe()}` } }, setup(e, { attrs: t, slots: o }) {
  let s = jt("DialogTitle");
  return Z(() => {
    s.setTitleId(e.id), re(() => s.setTitleId(null));
  }), () => {
    let { id: l, ...n } = e;
    return oe({ ourProps: { id: l }, theirProps: n, slot: { open: s.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogTitle" });
  };
} });
var xr = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(xr || {});
let yl = Symbol("DisclosureContext");
function Zo(e) {
  let t = de(yl, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, Zo), o;
  }
  return t;
}
let wl = Symbol("DisclosurePanelContext");
function Vr() {
  return de(wl, null);
}
let xs = T({ name: "Disclosure", props: { as: { type: [Object, String], default: "template" }, defaultOpen: { type: [Boolean], default: !1 } }, setup(e, { slots: t, attrs: o }) {
  let s = V(e.defaultOpen ? 0 : 1), l = V(null), n = V(null), a = { buttonId: V(null), panelId: V(null), disclosureState: s, panel: l, button: n, toggleDisclosure() {
    s.value = ue(s.value, { [0]: 1, [1]: 0 });
  }, closeDisclosure() {
    s.value !== 1 && (s.value = 1);
  }, close(i) {
    a.closeDisclosure();
    let u = (() => i ? i instanceof HTMLElement ? i : i.value instanceof HTMLElement ? j(i) : j(a.button) : j(a.button))();
    u == null || u.focus();
  } };
  return ve(yl, a), No(I(() => ue(s.value, { [0]: le.Open, [1]: le.Closed }))), () => {
    let { defaultOpen: i, ...u } = e, c = { open: s.value === 0, close: a.close };
    return oe({ theirProps: u, ourProps: {}, slot: c, slots: t, attrs: o, name: "Disclosure" });
  };
} }), Vs = T({ name: "DisclosureButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-disclosure-button-${pe()}` } }, setup(e, { attrs: t, slots: o, expose: s }) {
  let l = Zo("DisclosureButton");
  Z(() => {
    l.buttonId.value = e.id;
  }), re(() => {
    l.buttonId.value = null;
  });
  let n = Vr(), a = I(() => n === null ? !1 : n.value === l.panelId.value), i = V(null);
  s({ el: i, $el: i }), a.value || he(() => {
    l.button.value = i.value;
  });
  let u = qo(I(() => ({ as: e.as, type: t.type })), i);
  function c() {
    var _;
    e.disabled || (a.value ? (l.toggleDisclosure(), (_ = j(l.button)) == null || _.focus()) : l.toggleDisclosure());
  }
  function v(_) {
    var y;
    if (!e.disabled)
      if (a.value)
        switch (_.key) {
          case ae.Space:
          case ae.Enter:
            _.preventDefault(), _.stopPropagation(), l.toggleDisclosure(), (y = j(l.button)) == null || y.focus();
            break;
        }
      else
        switch (_.key) {
          case ae.Space:
          case ae.Enter:
            _.preventDefault(), _.stopPropagation(), l.toggleDisclosure();
            break;
        }
  }
  function g(_) {
    switch (_.key) {
      case ae.Space:
        _.preventDefault();
        break;
    }
  }
  return () => {
    let _ = { open: l.disclosureState.value === 0 }, { id: y, ...b } = e, f = a.value ? { ref: i, type: u.value, onClick: c, onKeydown: v } : { id: y, ref: i, type: u.value, "aria-expanded": e.disabled ? void 0 : l.disclosureState.value === 0, "aria-controls": j(l.panel) ? l.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onClick: c, onKeydown: v, onKeyup: g };
    return oe({ ourProps: f, theirProps: b, slot: _, attrs: t, slots: o, name: "DisclosureButton" });
  };
} }), ks = T({ name: "DisclosurePanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-disclosure-panel-${pe()}` } }, setup(e, { attrs: t, slots: o, expose: s }) {
  let l = Zo("DisclosurePanel");
  Z(() => {
    l.panelId.value = e.id;
  }), re(() => {
    l.panelId.value = null;
  }), s({ el: l.panel, $el: l.panel }), ve(wl, l.panelId);
  let n = yt(), a = I(() => n !== null ? (n.value & le.Open) === le.Open : l.disclosureState.value === 0);
  return () => {
    let i = { open: l.disclosureState.value === 0, close: l.close }, { id: u, ...c } = e, v = { id: u, ref: l.panel };
    return oe({ ourProps: v, theirProps: c, slot: i, attrs: t, slots: o, features: Ee.RenderStrategy | Ee.Static, visible: a.value, name: "DisclosurePanel" });
  };
} });
var kr = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(kr || {});
let _l = Symbol("PopoverContext");
function ro(e) {
  let t = de(_l, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <${io.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, ro), o;
  }
  return t;
}
let $l = Symbol("PopoverGroupContext");
function xl() {
  return de($l, null);
}
let Vl = Symbol("PopoverPanelContext");
function Cr() {
  return de(Vl, null);
}
let io = T({ name: "Popover", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: o, expose: s }) {
  var l;
  let n = V(null);
  s({ el: n, $el: n });
  let a = V(1), i = V(null), u = V(null), c = V(null), v = V(null), g = I(() => we(n)), _ = I(() => {
    var h, O;
    if (!j(i) || !j(v))
      return !1;
    for (let P of document.querySelectorAll("body > *"))
      if (Number(P == null ? void 0 : P.contains(j(i))) ^ Number(P == null ? void 0 : P.contains(j(v))))
        return !0;
    let w = oo(), M = w.indexOf(j(i)), z = (M + w.length - 1) % w.length, R = (M + 1) % w.length, B = w[z], D = w[R];
    return !((h = j(v)) != null && h.contains(B)) && !((O = j(v)) != null && O.contains(D));
  }), y = { popoverState: a, buttonId: V(null), panelId: V(null), panel: v, button: i, isPortalled: _, beforePanelSentinel: u, afterPanelSentinel: c, togglePopover() {
    a.value = ue(a.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    a.value !== 1 && (a.value = 1);
  }, close(h) {
    y.closePopover();
    let O = (() => h ? h instanceof HTMLElement ? h : h.value instanceof HTMLElement ? j(h) : j(y.button) : j(y.button))();
    O == null || O.focus();
  } };
  ve(_l, y), No(I(() => ue(a.value, { [0]: le.Open, [1]: le.Closed })));
  let b = { buttonId: y.buttonId, panelId: y.panelId, close() {
    y.closePopover();
  } }, f = xl(), m = f == null ? void 0 : f.registerPopover;
  function $() {
    var h, O, w, M;
    return (M = f == null ? void 0 : f.isFocusWithinPopoverGroup()) != null ? M : ((h = g.value) == null ? void 0 : h.activeElement) && (((O = j(i)) == null ? void 0 : O.contains(g.value.activeElement)) || ((w = j(v)) == null ? void 0 : w.contains(g.value.activeElement)));
  }
  return he(() => m == null ? void 0 : m(b)), Wo((l = g.value) == null ? void 0 : l.defaultView, "focus", (h) => {
    var O, w;
    a.value === 0 && ($() || i && v && h.target !== window && ((O = j(y.beforePanelSentinel)) != null && O.contains(h.target) || (w = j(y.afterPanelSentinel)) != null && w.contains(h.target) || y.closePopover()));
  }, !0), sl([i, v], (h, O) => {
    var w;
    y.closePopover(), tl(O, Uo.Loose) || (h.preventDefault(), (w = j(i)) == null || w.focus());
  }, I(() => a.value === 0)), () => {
    let h = { open: a.value === 0, close: y.close };
    return oe({ theirProps: e, ourProps: { ref: n }, slot: h, slots: t, attrs: o, name: "Popover" });
  };
} }), Go = T({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-popover-button-${pe()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: s }) {
  let l = ro("PopoverButton"), n = I(() => we(l.button));
  s({ el: l.button, $el: l.button }), Z(() => {
    l.buttonId.value = e.id;
  }), re(() => {
    l.buttonId.value = null;
  });
  let a = xl(), i = a == null ? void 0 : a.closeOthers, u = Cr(), c = I(() => u === null ? !1 : u.value === l.panelId.value), v = V(null), g = `headlessui-focus-sentinel-${pe()}`;
  c.value || he(() => {
    l.button.value = v.value;
  });
  let _ = qo(I(() => ({ as: e.as, type: t.type })), v);
  function y($) {
    var h, O, w, M, z;
    if (c.value) {
      if (l.popoverState.value === 1)
        return;
      switch ($.key) {
        case ae.Space:
        case ae.Enter:
          $.preventDefault(), (O = (h = $.target).click) == null || O.call(h), l.closePopover(), (w = j(l.button)) == null || w.focus();
          break;
      }
    } else
      switch ($.key) {
        case ae.Space:
        case ae.Enter:
          $.preventDefault(), $.stopPropagation(), l.popoverState.value === 1 && (i == null || i(l.buttonId.value)), l.togglePopover();
          break;
        case ae.Escape:
          if (l.popoverState.value !== 0)
            return i == null ? void 0 : i(l.buttonId.value);
          if (!j(l.button) || (M = n.value) != null && M.activeElement && !((z = j(l.button)) != null && z.contains(n.value.activeElement)))
            return;
          $.preventDefault(), $.stopPropagation(), l.closePopover();
          break;
      }
  }
  function b($) {
    c.value || $.key === ae.Space && $.preventDefault();
  }
  function f($) {
    var h, O;
    e.disabled || (c.value ? (l.closePopover(), (h = j(l.button)) == null || h.focus()) : ($.preventDefault(), $.stopPropagation(), l.popoverState.value === 1 && (i == null || i(l.buttonId.value)), l.togglePopover(), (O = j(l.button)) == null || O.focus()));
  }
  function m($) {
    $.preventDefault(), $.stopPropagation();
  }
  return () => {
    let $ = l.popoverState.value === 0, h = { open: $ }, { id: O, ...w } = e, M = c.value ? { ref: v, type: _.value, onKeydown: y, onClick: f } : { ref: v, id: O, type: _.value, "aria-expanded": e.disabled ? void 0 : l.popoverState.value === 0, "aria-controls": j(l.panel) ? l.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onKeydown: y, onKeyup: b, onClick: f, onMousedown: m }, z = Yo();
    function R() {
      let B = j(l.panel);
      if (!B)
        return;
      function D() {
        ue(z.value, { [ye.Forwards]: () => ge(B, ie.First), [ye.Backwards]: () => ge(B, ie.Last) }) === pt.Error && ge(oo().filter((P) => P.dataset.headlessuiFocusGuard !== "true"), ue(z.value, { [ye.Forwards]: ie.Next, [ye.Backwards]: ie.Previous }), { relativeTo: j(l.button) });
      }
      D();
    }
    return se(F, [oe({ ourProps: M, theirProps: { ...t, ...w }, slot: h, attrs: t, slots: o, name: "PopoverButton" }), $ && !c.value && l.isPortalled.value && se(Ge, { id: g, features: He.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: R })]);
  };
} });
T({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(e, { attrs: t, slots: o }) {
  let s = ro("PopoverOverlay"), l = `headlessui-popover-overlay-${pe()}`, n = yt(), a = I(() => n !== null ? (n.value & le.Open) === le.Open : s.popoverState.value === 0);
  function i() {
    s.closePopover();
  }
  return () => {
    let u = { open: s.popoverState.value === 0 };
    return oe({ ourProps: { id: l, "aria-hidden": !0, onClick: i }, theirProps: e, slot: u, attrs: t, slots: o, features: Ee.RenderStrategy | Ee.Static, visible: a.value, name: "PopoverOverlay" });
  };
} });
let Ko = T({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-popover-panel-${pe()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: s }) {
  let { focus: l } = e, n = ro("PopoverPanel"), a = I(() => we(n.panel)), i = `headlessui-focus-sentinel-before-${pe()}`, u = `headlessui-focus-sentinel-after-${pe()}`;
  s({ el: n.panel, $el: n.panel }), Z(() => {
    n.panelId.value = e.id;
  }), re(() => {
    n.panelId.value = null;
  }), ve(Vl, n.panelId), he(() => {
    var m, $;
    if (!l || n.popoverState.value !== 0 || !n.panel)
      return;
    let h = (m = a.value) == null ? void 0 : m.activeElement;
    ($ = j(n.panel)) != null && $.contains(h) || ge(j(n.panel), ie.First);
  });
  let c = yt(), v = I(() => c !== null ? (c.value & le.Open) === le.Open : n.popoverState.value === 0);
  function g(m) {
    var $, h;
    switch (m.key) {
      case ae.Escape:
        if (n.popoverState.value !== 0 || !j(n.panel) || a.value && !(($ = j(n.panel)) != null && $.contains(a.value.activeElement)))
          return;
        m.preventDefault(), m.stopPropagation(), n.closePopover(), (h = j(n.button)) == null || h.focus();
        break;
    }
  }
  function _(m) {
    var $, h, O, w, M;
    let z = m.relatedTarget;
    z && j(n.panel) && (($ = j(n.panel)) != null && $.contains(z) || (n.closePopover(), ((O = (h = j(n.beforePanelSentinel)) == null ? void 0 : h.contains) != null && O.call(h, z) || (M = (w = j(n.afterPanelSentinel)) == null ? void 0 : w.contains) != null && M.call(w, z)) && z.focus({ preventScroll: !0 })));
  }
  let y = Yo();
  function b() {
    let m = j(n.panel);
    if (!m)
      return;
    function $() {
      ue(y.value, { [ye.Forwards]: () => {
        var h;
        ge(m, ie.First) === pt.Error && ((h = j(n.afterPanelSentinel)) == null || h.focus());
      }, [ye.Backwards]: () => {
        var h;
        (h = j(n.button)) == null || h.focus({ preventScroll: !0 });
      } });
    }
    $();
  }
  function f() {
    let m = j(n.panel);
    if (!m)
      return;
    function $() {
      ue(y.value, { [ye.Forwards]: () => {
        let h = j(n.button), O = j(n.panel);
        if (!h)
          return;
        let w = oo(), M = w.indexOf(h), z = w.slice(0, M + 1), R = [...w.slice(M + 1), ...z];
        for (let B of R.slice())
          if (B.dataset.headlessuiFocusGuard === "true" || O != null && O.contains(B)) {
            let D = R.indexOf(B);
            D !== -1 && R.splice(D, 1);
          }
        ge(R, ie.First, { sorted: !1 });
      }, [ye.Backwards]: () => {
        var h;
        ge(m, ie.Previous) === pt.Error && ((h = j(n.button)) == null || h.focus());
      } });
    }
    $();
  }
  return () => {
    let m = { open: n.popoverState.value === 0, close: n.close }, { id: $, focus: h, ...O } = e, w = { ref: n.panel, id: $, onKeydown: g, onFocusout: l && n.popoverState.value === 0 ? _ : void 0, tabIndex: -1 };
    return oe({ ourProps: w, theirProps: { ...t, ...O }, attrs: t, slot: m, slots: { ...o, default: (...M) => {
      var z;
      return [se(F, [v.value && n.isPortalled.value && se(Ge, { id: i, ref: n.beforePanelSentinel, features: He.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: b }), (z = o.default) == null ? void 0 : z.call(o, ...M), v.value && n.isPortalled.value && se(Ge, { id: u, ref: n.afterPanelSentinel, features: He.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: f })])];
    } }, features: Ee.RenderStrategy | Ee.Static, visible: v.value, name: "PopoverPanel" });
  };
} });
T({ name: "PopoverGroup", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: o, expose: s }) {
  let l = V(null), n = Is([]), a = I(() => we(l));
  s({ el: l, $el: l });
  function i(g) {
    let _ = n.value.indexOf(g);
    _ !== -1 && n.value.splice(_, 1);
  }
  function u(g) {
    return n.value.push(g), () => {
      i(g);
    };
  }
  function c() {
    var g;
    let _ = a.value;
    if (!_)
      return !1;
    let y = _.activeElement;
    return (g = j(l)) != null && g.contains(y) ? !0 : n.value.some((b) => {
      var f, m;
      return ((f = _.getElementById(b.buttonId.value)) == null ? void 0 : f.contains(y)) || ((m = _.getElementById(b.panelId.value)) == null ? void 0 : m.contains(y));
    });
  }
  function v(g) {
    for (let _ of n.value)
      _.buttonId.value !== g && _.close();
  }
  return ve($l, { registerPopover: u, unregisterPopover: i, isFocusWithinPopoverGroup: c, closeOthers: v }), () => oe({ ourProps: { ref: l }, theirProps: e, slot: {}, attrs: t, slots: o, name: "PopoverGroup" });
} });
let kl = Symbol("LabelContext");
function Cl() {
  let e = de(kl, null);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Cl), t;
  }
  return e;
}
function Xo({ slot: e = {}, name: t = "Label", props: o = {} } = {}) {
  let s = V([]);
  function l(n) {
    return s.value.push(n), () => {
      let a = s.value.indexOf(n);
      a !== -1 && s.value.splice(a, 1);
    };
  }
  return ve(kl, { register: l, slot: e, name: t, props: o }), I(() => s.value.length > 0 ? s.value.join(" ") : void 0);
}
let Sl = T({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-label-${pe()}` } }, setup(e, { slots: t, attrs: o }) {
  let s = Cl();
  return Z(() => re(s.register(e.id))), () => {
    let { name: l = "Label", slot: n = {}, props: a = {} } = s, { id: i, passive: u, ...c } = e, v = { ...Object.entries(a).reduce((g, [_, y]) => Object.assign(g, { [_]: S(y) }), {}), id: i };
    return u && (delete v.onClick, delete v.htmlFor, delete c.onClick), oe({ ourProps: v, theirProps: c, slot: n, attrs: o, slots: t, name: l });
  };
} });
function Sr(e, t) {
  return e === t;
}
let Pl = Symbol("RadioGroupContext");
function Ol(e) {
  let t = de(Pl, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, Ol), o;
  }
  return t;
}
let Pr = T({ name: "RadioGroup", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "div" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => Sr }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-radiogroup-${pe()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: o, slots: s, expose: l }) {
  let n = V(null), a = V([]), i = Xo({ name: "RadioGroupLabel" }), u = so({ name: "RadioGroupDescription" });
  l({ el: n, $el: n });
  let [c, v] = il(I(() => e.modelValue), (b) => t("update:modelValue", b), I(() => e.defaultValue)), g = { options: a, value: c, disabled: I(() => e.disabled), firstOption: I(() => a.value.find((b) => !b.propsRef.disabled)), containsCheckedOption: I(() => a.value.some((b) => g.compare(Ye(b.propsRef.value), Ye(e.modelValue)))), compare(b, f) {
    if (typeof e.by == "string") {
      let m = e.by;
      return (b == null ? void 0 : b[m]) === (f == null ? void 0 : f[m]);
    }
    return e.by(b, f);
  }, change(b) {
    var f;
    if (e.disabled || g.compare(Ye(c.value), Ye(b)))
      return !1;
    let m = (f = a.value.find(($) => g.compare(Ye($.propsRef.value), Ye(b)))) == null ? void 0 : f.propsRef;
    return m != null && m.disabled ? !1 : (v(b), !0);
  }, registerOption(b) {
    a.value.push(b), a.value = ol(a.value, (f) => f.element);
  }, unregisterOption(b) {
    let f = a.value.findIndex((m) => m.id === b);
    f !== -1 && a.value.splice(f, 1);
  } };
  ve(Pl, g), Qa({ container: I(() => j(n)), accept(b) {
    return b.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : b.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(b) {
    b.setAttribute("role", "none");
  } });
  function _(b) {
    if (!n.value || !n.value.contains(b.target))
      return;
    let f = a.value.filter((m) => m.propsRef.disabled === !1).map((m) => m.element);
    switch (b.key) {
      case ae.Enter:
        rl(b.currentTarget);
        break;
      case ae.ArrowLeft:
      case ae.ArrowUp:
        if (b.preventDefault(), b.stopPropagation(), ge(f, ie.Previous | ie.WrapAround) === pt.Success) {
          let m = a.value.find(($) => {
            var h;
            return $.element === ((h = we(n)) == null ? void 0 : h.activeElement);
          });
          m && g.change(m.propsRef.value);
        }
        break;
      case ae.ArrowRight:
      case ae.ArrowDown:
        if (b.preventDefault(), b.stopPropagation(), ge(f, ie.Next | ie.WrapAround) === pt.Success) {
          let m = a.value.find(($) => {
            var h;
            return $.element === ((h = we($.element)) == null ? void 0 : h.activeElement);
          });
          m && g.change(m.propsRef.value);
        }
        break;
      case ae.Space:
        {
          b.preventDefault(), b.stopPropagation();
          let m = a.value.find(($) => {
            var h;
            return $.element === ((h = we($.element)) == null ? void 0 : h.activeElement);
          });
          m && g.change(m.propsRef.value);
        }
        break;
    }
  }
  let y = I(() => {
    var b;
    return (b = j(n)) == null ? void 0 : b.closest("form");
  });
  return Z(() => {
    Q([y], () => {
      if (!y.value || e.defaultValue === void 0)
        return;
      function b() {
        g.change(e.defaultValue);
      }
      return y.value.addEventListener("reset", b), () => {
        var f;
        (f = y.value) == null || f.removeEventListener("reset", b);
      };
    }, { immediate: !0 });
  }), () => {
    let { disabled: b, name: f, id: m, ...$ } = e, h = { ref: n, id: m, role: "radiogroup", "aria-labelledby": i.value, "aria-describedby": u.value, onKeydown: _ };
    return se(F, [...f != null && c.value != null ? ll({ [f]: c.value }).map(([O, w]) => se(Ge, Js({ features: He.Hidden, key: O, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: O, value: w }))) : [], oe({ ourProps: h, theirProps: { ...o, ...to($, ["modelValue", "defaultValue"]) }, slot: {}, attrs: o, slots: s, name: "RadioGroup" })]);
  };
} });
var Or = ((e) => (e[e.Empty = 1] = "Empty", e[e.Active = 2] = "Active", e))(Or || {});
let Lr = T({ name: "RadioGroupOption", props: { as: { type: [Object, String], default: "div" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-radiogroup-option-${pe()}` } }, setup(e, { attrs: t, slots: o, expose: s }) {
  let l = Ol("RadioGroupOption"), n = Xo({ name: "RadioGroupLabel" }), a = so({ name: "RadioGroupDescription" }), i = V(null), u = I(() => ({ value: e.value, disabled: e.disabled })), c = V(1);
  s({ el: i, $el: i }), Z(() => l.registerOption({ id: e.id, element: i, propsRef: u })), re(() => l.unregisterOption(e.id));
  let v = I(() => {
    var $;
    return (($ = l.firstOption.value) == null ? void 0 : $.id) === e.id;
  }), g = I(() => l.disabled.value || e.disabled), _ = I(() => l.compare(Ye(l.value.value), Ye(e.value))), y = I(() => g.value ? -1 : _.value || !l.containsCheckedOption.value && v.value ? 0 : -1);
  function b() {
    var $;
    l.change(e.value) && (c.value |= 2, ($ = i.value) == null || $.focus());
  }
  function f() {
    c.value |= 2;
  }
  function m() {
    c.value &= -3;
  }
  return () => {
    let { id: $, value: h, disabled: O, ...w } = e, M = { checked: _.value, disabled: g.value, active: Boolean(c.value & 2) }, z = { id: $, ref: i, role: "radio", "aria-checked": _.value ? "true" : "false", "aria-labelledby": n.value, "aria-describedby": a.value, "aria-disabled": g.value ? !0 : void 0, tabIndex: y.value, onClick: g.value ? void 0 : b, onFocus: g.value ? void 0 : f, onBlur: g.value ? void 0 : m };
    return oe({ ourProps: z, theirProps: w, slot: M, attrs: t, slots: o, name: "RadioGroupOption" });
  };
} }), Cs = Sl, Mr = vr, Ll = Symbol("GroupContext"), Tr = T({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: o }) {
  let s = V(null), l = Xo({ name: "SwitchLabel", props: { htmlFor: I(() => {
    var a;
    return (a = s.value) == null ? void 0 : a.id;
  }), onClick(a) {
    s.value && (a.currentTarget.tagName === "LABEL" && a.preventDefault(), s.value.click(), s.value.focus({ preventScroll: !0 }));
  } } }), n = so({ name: "SwitchDescription" });
  return ve(Ll, { switchRef: s, labelledby: l, describedby: n }), () => oe({ theirProps: e, ourProps: {}, slot: {}, slots: t, attrs: o, name: "SwitchGroup" });
} }), Dr = T({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: !0 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-switch-${pe()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: o, slots: s, expose: l }) {
  let n = de(Ll, null), [a, i] = il(I(() => e.modelValue), (m) => t("update:modelValue", m), I(() => e.defaultChecked));
  function u() {
    i(!a.value);
  }
  let c = V(null), v = n === null ? c : n.switchRef, g = qo(I(() => ({ as: e.as, type: o.type })), v);
  l({ el: v, $el: v });
  function _(m) {
    m.preventDefault(), u();
  }
  function y(m) {
    m.key === ae.Space ? (m.preventDefault(), u()) : m.key === ae.Enter && rl(m.currentTarget);
  }
  function b(m) {
    m.preventDefault();
  }
  let f = I(() => {
    var m, $;
    return ($ = (m = j(v)) == null ? void 0 : m.closest) == null ? void 0 : $.call(m, "form");
  });
  return Z(() => {
    Q([f], () => {
      if (!f.value || e.defaultChecked === void 0)
        return;
      function m() {
        i(e.defaultChecked);
      }
      return f.value.addEventListener("reset", m), () => {
        var $;
        ($ = f.value) == null || $.removeEventListener("reset", m);
      };
    }, { immediate: !0 });
  }), () => {
    let { id: m, name: $, value: h, ...O } = e, w = { checked: a.value }, M = { id: m, ref: v, role: "switch", type: g.value, tabIndex: 0, "aria-checked": a.value, "aria-labelledby": n == null ? void 0 : n.labelledby.value, "aria-describedby": n == null ? void 0 : n.describedby.value, onClick: _, onKeyup: y, onKeypress: b };
    return se(F, [$ != null && a.value != null ? se(Ge, Js({ features: He.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: a.value, name: $, value: h })) : null, oe({ ourProps: M, theirProps: { ...o, ...to(O, ["modelValue", "defaultChecked"]) }, slot: w, attrs: o, slots: s, name: "Switch" })]);
  };
} }), Br = Sl;
function Ir(e) {
  let t = { called: !1 };
  return (...o) => {
    if (!t.called)
      return t.called = !0, e(...o);
  };
}
function go(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Yt(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var So = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(So || {});
function zr(e, t) {
  let o = lo();
  if (!e)
    return o.dispose;
  let { transitionDuration: s, transitionDelay: l } = getComputedStyle(e), [n, a] = [s, l].map((i) => {
    let [u = 0] = i.split(",").filter(Boolean).map((c) => c.includes("ms") ? parseFloat(c) : parseFloat(c) * 1e3).sort((c, v) => v - c);
    return u;
  });
  return n !== 0 ? o.setTimeout(() => t("finished"), n + a) : t("finished"), o.add(() => t("cancelled")), o.dispose;
}
function Ss(e, t, o, s, l, n) {
  let a = lo(), i = n !== void 0 ? Ir(n) : () => {
  };
  return Yt(e, ...l), go(e, ...t, ...o), a.nextFrame(() => {
    Yt(e, ...o), go(e, ...s), a.add(zr(e, (u) => (Yt(e, ...s, ...t), go(e, ...l), i(u))));
  }), a.add(() => Yt(e, ...t, ...o, ...s, ...l)), a.add(() => i("cancelled")), a.dispose;
}
function ot(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Qo = Symbol("TransitionContext");
var Er = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Er || {});
function Ar() {
  return de(Qo, null) !== null;
}
function jr() {
  let e = de(Qo, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Rr() {
  let e = de(Jo, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let Jo = Symbol("NestingContext");
function po(e) {
  return "children" in e ? po(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Ml(e) {
  let t = V([]), o = V(!1);
  Z(() => o.value = !0), re(() => o.value = !1);
  function s(n, a = We.Hidden) {
    let i = t.value.findIndex(({ id: u }) => u === n);
    i !== -1 && (ue(a, { [We.Unmount]() {
      t.value.splice(i, 1);
    }, [We.Hidden]() {
      t.value[i].state = "hidden";
    } }), !po(t) && o.value && (e == null || e()));
  }
  function l(n) {
    let a = t.value.find(({ id: i }) => i === n);
    return a ? a.state !== "visible" && (a.state = "visible") : t.value.push({ id: n, state: "visible" }), () => s(n, We.Unmount);
  }
  return { children: t, register: l, unregister: s };
}
let Tl = Ee.RenderStrategy, Ke = T({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: o, slots: s, expose: l }) {
  let n = V(0);
  function a() {
    n.value |= le.Opening, t("beforeEnter");
  }
  function i() {
    n.value &= ~le.Opening, t("afterEnter");
  }
  function u() {
    n.value |= le.Closing, t("beforeLeave");
  }
  function c() {
    n.value &= ~le.Closing, t("afterLeave");
  }
  if (!Ar() && Za())
    return () => se(Rt, { ...e, onBeforeEnter: a, onAfterEnter: i, onBeforeLeave: u, onAfterLeave: c }, s);
  let v = V(null), g = V("visible"), _ = I(() => e.unmount ? We.Unmount : We.Hidden);
  l({ el: v, $el: v });
  let { show: y, appear: b } = jr(), { register: f, unregister: m } = Rr(), $ = { value: !0 }, h = pe(), O = { value: !1 }, w = Ml(() => {
    !O.value && g.value !== "hidden" && (g.value = "hidden", m(h), c());
  });
  Z(() => {
    let N = f(h);
    re(N);
  }), he(() => {
    if (_.value === We.Hidden && h) {
      if (y && g.value !== "visible") {
        g.value = "visible";
        return;
      }
      ue(g.value, { hidden: () => m(h), visible: () => f(h) });
    }
  });
  let M = ot(e.enter), z = ot(e.enterFrom), R = ot(e.enterTo), B = ot(e.entered), D = ot(e.leave), P = ot(e.leaveFrom), A = ot(e.leaveTo);
  Z(() => {
    he(() => {
      if (g.value === "visible") {
        let N = j(v);
        if (N instanceof Comment && N.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function q(N) {
    let U = $.value && !b.value, W = j(v);
    !W || !(W instanceof HTMLElement) || U || (O.value = !0, y.value && a(), y.value || u(), N(y.value ? Ss(W, M, z, R, B, (Y) => {
      O.value = !1, Y === So.Finished && i();
    }) : Ss(W, D, P, A, B, (Y) => {
      O.value = !1, Y === So.Finished && (po(w) || (g.value = "hidden", m(h), c()));
    })));
  }
  return Z(() => {
    Q([y], (N, U, W) => {
      q(W), $.value = !1;
    }, { immediate: !0 });
  }), ve(Jo, w), No(I(() => ue(g.value, { visible: le.Open, hidden: le.Closed }) | n.value)), () => {
    let { appear: N, show: U, enter: W, enterFrom: Y, enterTo: X, entered: ce, leave: J, leaveFrom: $e, leaveTo: Re, ...Me } = e, qe = { ref: v }, Te = { ...Me, ...b && y && At.isServer ? { class: L([o.class, Me.class, ...M, ...z]) } : {} };
    return oe({ theirProps: Te, ourProps: qe, slot: {}, slots: s, attrs: o, features: Tl, visible: g.value === "visible", name: "TransitionChild" });
  };
} }), Fr = Ke, Rt = T({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: o, slots: s }) {
  let l = yt(), n = I(() => e.show === null && l !== null ? (l.value & le.Open) === le.Open : e.show);
  he(() => {
    if (![!0, !1].includes(n.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let a = V(n.value ? "visible" : "hidden"), i = Ml(() => {
    a.value = "hidden";
  }), u = V(!0), c = { show: n, appear: I(() => e.appear || !u.value) };
  return Z(() => {
    he(() => {
      u.value = !1, n.value ? a.value = "visible" : po(i) || (a.value = "hidden");
    });
  }), ve(Jo, i), ve(Qo, c), () => {
    let v = to(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), g = { unmount: e.unmount };
    return oe({ ourProps: { ...g, as: "template" }, theirProps: {}, slot: {}, slots: { ...s, default: () => [se(Fr, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...o, ...g, ...v }, s.default)] }, attrs: {}, features: Tl, visible: a.value === "visible", name: "Transition" });
  };
} });
const Hr = {
  key: 0,
  class: "po-text-sm po-font-normal po-text-slate-400 po-select-none po-block po-text-left po-pt-5"
}, Nr = { class: "po-bg-white hover:po-bg-slate-200 po-rounded-xl po-p-2 po-transition-colors po-duration-150 po-ease-in" }, qr = ["href", "target"], Ur = { class: "po-flex po-w-14 po-h-14 po-items-center po-justify-center po-duration-100 po-ease-in-out po-overflow-hidden" }, Yr = ["innerHTML"], Wr = { class: "po-text-slate-500 po-font-normal po-text-sm po-text-center" }, Ps = /* @__PURE__ */ T({
  __name: "appList",
  props: {
    list: { default: () => [] },
    openInNewTab: { type: Boolean, default: !1 },
    gridCols: { default: "po-grid-cols-3" }
  },
  setup(e) {
    return (t, o) => (p(!0), d(F, null, G(t.list, (s) => (p(), d("div", null, [
      s.groupName.length > 0 ? (p(), d("span", Hr, k(s.groupName), 1)) : x("", !0),
      r("ul", {
        class: L(["po-grid", [t.gridCols]])
      }, [
        (p(!0), d(F, null, G(s.apps, (l) => (p(), d("li", Nr, [
          r("a", {
            href: l.url,
            target: t.openInNewTab ? "_blank" : "_self",
            class: "po-flex po-flex-col po-group po-justify-center po-items-center"
          }, [
            r("span", Ur, [
              r("span", {
                class: "po-w-9",
                innerHTML: l.icon
              }, null, 8, Yr)
            ]),
            r("span", Wr, k(l.name), 1)
          ], 8, qr)
        ]))), 256))
      ], 2)
    ]))), 256));
  }
}), Zr = {
  name: "PoAppTray"
}, Gr = /* @__PURE__ */ T({
  ...Zr,
  props: {
    appList: { default: null },
    justApps: { type: Boolean, default: !1 },
    openInNewTab: { type: Boolean, default: !1 },
    gridCols: { default: "po-grid-cols-3" }
  },
  setup(e) {
    const t = e, o = ["", "Internal"], s = t.gridCols, l = I(() => {
      const n = [];
      return t.appList && o.forEach((a) => {
        const i = t.appList.filter((u) => u.group === a);
        i.length > 0 && n.push({
          groupName: a,
          apps: i
        });
      }), n;
    });
    return (n, a) => n.justApps ? (p(), H(Ps, {
      key: 1,
      list: l.value,
      "open-in-new-tab": n.openInNewTab,
      gridCols: S(s)
    }, null, 8, ["list", "open-in-new-tab", "gridCols"])) : (p(), H(S(io), { key: 0 }, {
      default: E(({ open: i }) => [
        C(S(Go), {
          class: L([i ? "" : "po-text-opacity-90", "po-block po-w-6 po-text-slate-100 genie-effect po-z-50 po-outline-none"])
        }, {
          default: E(() => [
            C(S(yn))
          ]),
          _: 2
        }, 1032, ["class"]),
        C(Ze, {
          "enter-active-class": "po-transition po-duration-200 po-ease-out",
          "enter-from-class": "po-translate-y-1 po-opacity-0",
          "enter-to-class": "po-translate-y-0 po-opacity-100",
          "leave-active-class": "po-transition po-duration-150 po-ease-in",
          "leave-from-class": "po-translate-y-0 po-opacity-100",
          "leave-to-class": "po-translate-y-1 po-opacity-0"
        }, {
          default: E(() => [
            C(S(Ko), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
              default: E(() => [
                C(Ps, {
                  list: l.value,
                  "open-in-new-tab": n.openInNewTab,
                  gridCols: S(s)
                }, null, 8, ["list", "open-in-new-tab", "gridCols"])
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
  class: "po-absolute po-right-0 po-w-3 po-h-3 po-bg-mpao-orange po-rounded-full po-border-2 po-border-mpao-blue"
}, Xr = {
  key: 0,
  class: "po-space-y-2"
}, Qr = ["onClick"], Jr = { class: "po-flex po-items-center po-justify-between" }, ei = { class: "po-text-sm po-text-left po-font-semibold po-text-slate-700 po-grow po-flex po-space-x-2 po-items-center" }, ti = { class: "po-grow" }, oi = {
  key: 0,
  class: "po-w-[6px] po-h-[6px] po-rounded-full po-shrink-0 po-bg-mpao-orange po-animate-pulse"
}, si = { class: "po-text-xs po-font-normal po-text-slate-400 po-shrink-0" }, li = { class: "po-block po-text-sm po-text-slate-500 po-pb-3 po-text-left" }, ni = {
  key: 1,
  class: "po-text-sm po-text-slate-500 po-py-10 po-text-center po-block"
}, ai = {
  name: "PoNotificationHub"
}, ri = /* @__PURE__ */ T({
  ...ai,
  props: {
    notifications: { default: null },
    hasNewNotifications: { type: Boolean, default: !1 }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, s) => (p(), H(S(io), null, {
      default: E(({ open: l }) => [
        C(S(Go), {
          class: L([l ? "" : "text-opacity-90", "po-block po-w-6 po-text-slate-100 genie-effect po-relative po-z-50 po-outline-none"])
        }, {
          default: E(() => [
            o.hasNewNotifications ? (p(), d("span", Kr)) : x("", !0),
            C(S(dn), { class: "po-stroke-current" })
          ]),
          _: 2
        }, 1032, ["class"]),
        C(Ze, {
          "enter-active-class": "po-transition po-duration-200 po-ease-out",
          "enter-from-class": "po-translate-y-1 po-opacity-0",
          "enter-to-class": "po-translate-y-0 po-opacity-100",
          "leave-active-class": "po-transition po-duration-150 po-ease-in",
          "leave-from-class": "po-translate-y-0 po-opacity-100",
          "leave-to-class": "po-translate-y-1 po-opacity-0"
        }, {
          default: E(() => [
            C(S(Ko), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
              default: E(() => [
                o.notifications !== null && o.notifications.length > 0 ? (p(), d("ul", Xr, [
                  (p(!0), d(F, null, G(o.notifications, (n) => (p(), d("li", {
                    role: "button",
                    class: "po-space-y-2 po-p-2 po-rounded-lg po-bg-white hover:po-bg-slate-100 po-border po-border-slate-100",
                    onClick: te((a) => o.$emit("button-click", n.name), ["prevent"])
                  }, [
                    r("span", Jr, [
                      r("p", ei, [
                        r("span", ti, k(n.name), 1),
                        n.seen ? x("", !0) : (p(), d("span", oi))
                      ]),
                      r("span", si, k(n.time), 1)
                    ]),
                    r("span", li, k(n.text), 1)
                  ], 8, Qr))), 256))
                ])) : (p(), d("span", ni, " No notifications to show at the moment. We'll keep you informed."))
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
}), ii = {
  key: 0,
  class: "po-hidden lg:po-block po-text-sky-50 po-text-sm po-shrink-0 po-pr-3 po-truncate po-max-w-[140px] po-overflow-hidden"
}, pi = {
  key: 1,
  class: "po-px-3 po-bg-gradient-to-br po-from-slate-50 po-to-blue-100 po-py-1 po-rounded-l-md po-w-[100px] po-flex po-items-center po-justify-center po-text-center"
}, ui = ["src"], di = ["src", "alt"], ci = {
  key: 1,
  class: "po-text-xs po-text-white po-font-semibold"
}, fi = { class: "po-pb-5" }, vi = ["src"], hi = {
  key: 2,
  class: "po-block po-text-sm po-text-slate-400 po-italic"
}, mi = { key: 0 }, bi = { key: 1 }, gi = /* @__PURE__ */ r("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), yi = { class: "po-space-y-2 po-py-2 po-max-h-[250px] po-overflow-y-auto" }, wi = ["onClick"], _i = { class: "po-w-5" }, $i = { class: "" }, xi = { class: "po-block po-text-sm po-font-normal" }, Vi = {
  key: 0,
  class: "po-text-left po-block po-text-xs po-text-slate-400"
}, ki = /* @__PURE__ */ r("div", { class: "po-h-[2px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), Ci = { class: "md:po-grid po-grid-cols-2 po-space-x-1 po-pt-2" }, Si = { class: "po-w-5" }, Pi = /* @__PURE__ */ r("span", { class: "po-text-sm po-font-normal" }, "Profile", -1), Oi = { class: "po-w-5" }, Li = /* @__PURE__ */ r("span", { class: "po-text-sm po-font-normal" }, "Logout", -1), Mi = /* @__PURE__ */ r("div", { class: "po-text-xs po-space-x-3 po-text-center po-pt-3" }, [
  /* @__PURE__ */ r("a", {
    href: "",
    class: "po-text-slate-500 hover:po-text-mpao-lightblue"
  }, "Privacy Policy"),
  /* @__PURE__ */ r("a", {
    href: "",
    class: "po-text-slate-500 hover:po-text-mpao-lightblue"
  }, "Terms of Service")
], -1), Ti = {
  name: "PoProfileSwitcher"
}, Di = /* @__PURE__ */ T({
  ...Ti,
  props: {
    userObject: { default: null },
    avatar: { default: "" },
    logo: { default: "" }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    const o = e;
    function s(g) {
      t("button-click", g);
    }
    const l = V({
      name: "",
      initials: "",
      image: ""
    });
    function n(g) {
      var _, y;
      return g ? ((y = (_ = g.match(/\b[A-Z]/g)) == null ? void 0 : _.join("")) == null ? void 0 : y.substring(0, 2)) ?? "" : "";
    }
    const a = I(() => {
      var f, m, $, h, O, w, M, z, R, B;
      const g = [], _ = (f = o.userObject) == null ? void 0 : f.transacting_as_organisation, y = (_ == null ? void 0 : _.name) || ((m = o.userObject) == null ? void 0 : m.name), b = (_ == null ? void 0 : _.logo) || (($ = o.userObject) == null ? void 0 : $.avatar);
      return l.value = {
        name: y,
        initials: n(y),
        image: b
      }, g.push({
        id: (h = o.userObject) == null ? void 0 : h.id,
        entity_id: (O = o.userObject) == null ? void 0 : O.entity_id,
        name: (w = o.userObject) == null ? void 0 : w.name,
        identifier: null,
        organisation_uuid: null
      }), ((z = (M = o.userObject) == null ? void 0 : M.organisations) == null ? void 0 : z.length) > 0 && g.push(...(R = o.userObject) == null ? void 0 : R.organisations), g.forEach((D) => {
        D.current = _ && Object.keys(_).length > 0 && D.entity_id === _.entity_id;
      }), ((B = o.userObject) == null ? void 0 : B.transacting_as_organisation) === null && (g[0].current = !0), g;
    }), i = V(null), u = V(null), { avatar: c, logo: v } = Se(o);
    return Q(c, () => {
      i.value = c.value;
    }), Q(v, () => {
      u.value = v.value;
    }), Zl(() => {
      a.value;
    }), Z(() => {
      a.value;
    }), Gl(() => {
      a.value;
    }), Io(() => {
      a.value;
    }), (g, _) => (p(), H(S(io), null, {
      default: E(({ open: y }) => [
        r("div", null, [
          C(S(Go), { class: "po-flex po-items-center po-outline-none" }, {
            default: E(() => [
              u.value ? x("", !0) : (p(), d("span", ii, k(l.value.name), 1)),
              u.value ? (p(), d("span", pi, [
                r("img", {
                  class: "po-h-8",
                  src: u.value,
                  alt: ""
                }, null, 8, ui)
              ])) : x("", !0),
              r("div", {
                class: L([
                  {
                    "po-bg-gradient-to-br po-from-slate-50 po-to-blue-100 po-p-1 po-rounded-r-md": u.value
                  }
                ])
              }, [
                r("div", {
                  class: L([[
                    { "text-opacity-90": y },
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
                  }, null, 8, di)) : (p(), d("span", ci, k(l.value.initials), 1))
                ], 2)
              ], 2)
            ]),
            _: 2
          }, 1024),
          C(Ze, {
            "enter-active-class": "po-transition po-duration-200 po-ease-out",
            "enter-from-class": "po-translate-y-1 po-opacity-0",
            "enter-to-class": "po-translate-y-0 po-opacity-100",
            "leave-active-class": "po-transition po-duration-150 po-ease-in",
            "leave-from-class": "po-translate-y-0 po-opacity-100",
            "leave-to-class": "po-translate-y-1 po-opacity-0"
          }, {
            default: E(() => [
              C(S(Ko), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
                default: E(() => {
                  var b, f, m, $;
                  return [
                    r("div", fi, [
                      i.value ? (p(), d("img", {
                        key: 0,
                        class: "po-w-20 po-h-20 po-mx-auto po-rounded-full po-overflow-hidden",
                        src: i.value,
                        alt: ""
                      }, null, 8, vi)) : x("", !0),
                      (b = g.userObject) != null && b.name ? (p(), d("span", {
                        key: 1,
                        class: L(["po-text-base po-text-slate-600 po-font-medium po-block", [{ "po-mt-4": i.value }]])
                      }, k((f = g.userObject) == null ? void 0 : f.name), 3)) : x("", !0),
                      (m = g.userObject) != null && m.name ? (p(), d("span", hi, [
                        l.value.name === (($ = g.userObject) == null ? void 0 : $.name) ? (p(), d("span", mi, "Self")) : (p(), d("span", bi, "User at " + k(l.value.name), 1))
                      ])) : x("", !0)
                    ]),
                    gi,
                    r("div", yi, [
                      (p(!0), d(F, null, G(a.value, (h, O) => (p(), d("a", {
                        href: "#",
                        onClick: te((w) => s(h), ["prevent"]),
                        class: L(["po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-shadow-sm po-transition-all po-duration-150 po-ease-out hover:po-bg-blue-50", [
                          {
                            " po-bg-white": !h.current
                          },
                          {
                            " po-bg-blue-50 po-shadow-sm": h.current
                          }
                        ]]),
                        role: "button",
                        key: O
                      }, [
                        r("span", _i, [
                          h.isPersonal ? (p(), H(S(us), {
                            key: 0,
                            class: L([
                              "po-stroke-current",
                              { "po-stroke-mpao-lightblue": h.current }
                            ])
                          }, null, 8, ["class"])) : x("", !0),
                          h.isPersonal ? x("", !0) : (p(), H(S(fn), {
                            key: 1,
                            class: L([
                              "po-stroke-current",
                              { "po-stroke-mpao-lightblue": h.current }
                            ])
                          }, null, 8, ["class"]))
                        ]),
                        r("span", $i, [
                          r("span", xi, k(h.name), 1),
                          h.identifier ? (p(), d("span", Vi, k(h.identifier), 1)) : x("", !0)
                        ])
                      ], 10, wi))), 128))
                    ]),
                    ki,
                    r("div", Ci, [
                      r("a", {
                        href: "#",
                        onClick: _[0] || (_[0] = te((h) => g.$emit("button-click", "current-profile"), ["prevent"])),
                        class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-slate-50 hover:po-bg-blue-50 po-transition-all po-duration-150 po-ease-out",
                        role: "button"
                      }, [
                        r("span", Si, [
                          C(S(us), { class: "po-stroke-current" })
                        ]),
                        Pi
                      ]),
                      r("a", {
                        href: "#",
                        onClick: _[1] || (_[1] = te((h) => g.$emit("button-click", "logout"), ["prevent"])),
                        class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-slate-50 hover:po-bg-blue-50 po-transition-all po-duration-150 po-ease-out",
                        role: "button"
                      }, [
                        r("span", Oi, [
                          C(S(pn), { class: "po-stroke-current" })
                        ]),
                        Li
                      ])
                    ]),
                    Mi
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
}), nt = /* @__PURE__ */ T({
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
}), Bi = ["disabled", "aria-disabled"], Ii = {
  key: 0,
  class: "po-absolute po-bg-slate-200 -po-top-[1px] -po-right-[1px] -po-bottom-[1px] -po-left-[1px] po-rounded-md po-flex po-items-center po-justify-center"
}, zi = {
  key: 1,
  class: "po-relative"
}, Ei = ["value", "disabled", "aria-disabled"], Ai = {
  key: 0,
  class: "po-absolute po-bg-slate-200 -po-top-[1px] -po-right-[1px] -po-bottom-[1px] -po-left-[1px] po-rounded-md po-flex po-items-center po-justify-center"
}, ji = {
  key: 0,
  class: "po-absolute po-bg-slate-200 -po-top-[1px] -po-right-[1px] -po-bottom-[1px] -po-left-[1px] po-rounded-md po-flex po-items-center po-justify-center"
}, Ri = {
  key: 3,
  class: "po-relative"
}, Fi = {
  key: 0,
  class: "po-absolute po-bg-slate-200 -po-top-[1px] -po-right-[1px] -po-bottom-[1px] -po-left-[1px] po-rounded-md po-flex po-items-center po-justify-center"
}, Hi = {
  name: "PoButton"
}, gt = /* @__PURE__ */ T({
  ...Hi,
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
    const o = e, s = "po-rounded-md po-transition-colors po-border po-duration-100 po-ease-in-out po-cursor-pointer disabled:po-bg-slate-400 disabled:po-border-slate-400 disabled:po-cursor-default disabled:po-hover:bg-slate-400", l = I(() => {
      switch (o.size) {
        case "sm":
          return "po-px-2 po-py-1 po-text-xs";
        case "md":
          return "po-px-4 po-py-2 po-text-sm";
        case "lg":
          return "po-px-5 po-py-3 po-text-normal";
      }
    }), n = I(() => {
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
    return (a, i) => (p(), d(F, null, [
      a.type == "button" ? (p(), d("button", Be({
        key: 0,
        onClick: i[0] || (i[0] = te((u) => a.$emit("button-click", a.to), ["prevent"])),
        class: [s, l.value, n.value, "po-relative"],
        disabled: a.disabled,
        "aria-disabled": a.disabled
      }, a.$attrs), [
        K(a.$slots, "label", {}, () => [
          ee(k(a.label), 1)
        ]),
        a.isLoading ? (p(), d("span", Ii, [
          C(nt, {
            "dot-color": "po-bg-slate-500",
            class: "po-relative -po-bottom-[0.2rem]"
          })
        ])) : x("", !0)
      ], 16, Bi)) : x("", !0),
      a.type == "submit" ? (p(), d("span", zi, [
        r("input", Be({
          type: "submit",
          class: [s, l.value, n.value],
          value: a.label,
          disabled: a.disabled,
          "aria-disabled": a.disabled
        }, a.$attrs), null, 16, Ei),
        a.isLoading ? (p(), d("span", Ai, [
          C(nt, {
            "dot-color": "po-bg-slate-500",
            class: "po-relative -po-bottom-[0.2rem]"
          })
        ])) : x("", !0)
      ])) : x("", !0),
      a.type == "link" ? (p(), d("a", Be({
        key: 2,
        href: "#",
        onClick: i[1] || (i[1] = te((u) => a.$emit("button-click", a.to), ["prevent"])),
        class: [s, l.value, n.value, "po-relative"]
      }, a.$attrs), [
        K(a.$slots, "label", {}, () => [
          ee(k(a.label), 1)
        ]),
        a.isLoading ? (p(), d("span", ji, [
          C(nt, {
            "dot-color": "po-bg-slate-500",
            class: "po-relative -po-bottom-[0.2rem]"
          })
        ])) : x("", !0)
      ], 16)) : x("", !0),
      a.type == "simple" ? (p(), d("span", Ri, [
        r("a", {
          href: "#",
          onClick: i[2] || (i[2] = te((u) => a.$emit("button-click", a.to), ["prevent"])),
          class: L(["po-text-sm po-transition-colors po-duration-100 po-ease-in-out po-inline-flex po-items-center po-space-x-1", [
            {
              "po-text-mpao-lightblue hover:po-text-mpao-midblue": !a.overrideColors
            }
          ]])
        }, [
          K(a.$slots, "label", {}, () => [
            ee(k(a.label), 1)
          ])
        ], 2),
        a.isLoading ? (p(), d("span", Fi, [
          C(nt, {
            "dot-color": "po-bg-slate-500",
            class: "po-relative -po-bottom-[0.2rem]"
          })
        ])) : x("", !0)
      ])) : x("", !0)
    ], 64));
  }
});
function Ni(e, t) {
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
function qi(e, t) {
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
function Ui(e, t) {
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
function Yi(e, t) {
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
function Wi(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", { d: "M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z" })
  ]);
}
function Zi(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", { d: "M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z" }),
    r("path", {
      "fill-rule": "evenodd",
      d: "M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Gi(e, t) {
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
function Os(e, t) {
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
function Ki(e, t) {
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
function Xi(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "fill-rule": "evenodd",
      d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Qi(e, t) {
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
function Ji(e, t) {
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
function ep(e, t) {
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
function tp(e, t) {
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
function op(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", { d: "M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" })
  ]);
}
function sp(e, t) {
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
function Dl(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
  ]);
}
const Le = () => {
  const e = V("");
  return {
    uniqueId: e,
    generateUniqueId: () => {
      const s = `poid_${Math.random().toString(36).slice(2, 11)}`;
      e.value = s;
    }
  };
};
function lp() {
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
let Gt;
function Po() {
  Po.init || (Po.init = !0, Gt = lp() !== -1);
}
var uo = {
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
    Po(), Bo(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", Gt && this.$el.appendChild(e), e.data = "about:blank", Gt || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!Gt && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const np = /* @__PURE__ */ Ql("data-v-b329ee4c");
Kl("data-v-b329ee4c");
const ap = {
  class: "resize-observer",
  tabindex: "-1"
};
Xl();
const rp = /* @__PURE__ */ np((e, t, o, s, l, n) => (p(), H("div", ap)));
uo.render = rp;
uo.__scopeId = "data-v-b329ee4c";
uo.__file = "src/components/ResizeObserver.vue";
function Kt(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Kt = function(t) {
    return typeof t;
  } : Kt = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Kt(e);
}
function ip(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ls(e, t) {
  for (var o = 0; o < t.length; o++) {
    var s = t[o];
    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
  }
}
function pp(e, t, o) {
  return t && Ls(e.prototype, t), o && Ls(e, o), e;
}
function Ms(e) {
  return up(e) || dp(e) || cp(e) || fp();
}
function up(e) {
  if (Array.isArray(e))
    return Oo(e);
}
function dp(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function cp(e, t) {
  if (e) {
    if (typeof e == "string")
      return Oo(e, t);
    var o = Object.prototype.toString.call(e).slice(8, -1);
    if (o === "Object" && e.constructor && (o = e.constructor.name), o === "Map" || o === "Set")
      return Array.from(e);
    if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
      return Oo(e, t);
  }
}
function Oo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var o = 0, s = new Array(t); o < t; o++)
    s[o] = e[o];
  return s;
}
function fp() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vp(e) {
  var t;
  return typeof e == "function" ? t = {
    callback: e
  } : t = e, t;
}
function hp(e, t) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s, l, n, a = function(u) {
    for (var c = arguments.length, v = new Array(c > 1 ? c - 1 : 0), g = 1; g < c; g++)
      v[g - 1] = arguments[g];
    if (n = v, !(s && u === l)) {
      var _ = o.leading;
      typeof _ == "function" && (_ = _(u, l)), (!s || u !== l) && _ && e.apply(void 0, [u].concat(Ms(n))), l = u, clearTimeout(s), s = setTimeout(function() {
        e.apply(void 0, [u].concat(Ms(n))), s = 0;
      }, t);
    }
  };
  return a._clear = function() {
    clearTimeout(s), s = null;
  }, a;
}
function Bl(e, t) {
  if (e === t)
    return !0;
  if (Kt(e) === "object") {
    for (var o in e)
      if (!Bl(e[o], t[o]))
        return !1;
    return !0;
  }
  return !1;
}
var mp = /* @__PURE__ */ function() {
  function e(t, o, s) {
    ip(this, e), this.el = t, this.observer = null, this.frozen = !1, this.createObserver(o, s);
  }
  return pp(e, [{
    key: "createObserver",
    value: function(o, s) {
      var l = this;
      if (this.observer && this.destroyObserver(), !this.frozen) {
        if (this.options = vp(o), this.callback = function(i, u) {
          l.options.callback(i, u), i && l.options.once && (l.frozen = !0, l.destroyObserver());
        }, this.callback && this.options.throttle) {
          var n = this.options.throttleOptions || {}, a = n.leading;
          this.callback = hp(this.callback, this.options.throttle, {
            leading: function(u) {
              return a === "both" || a === "visible" && u || a === "hidden" && !u;
            }
          });
        }
        this.oldResult = void 0, this.observer = new IntersectionObserver(function(i) {
          var u = i[0];
          if (i.length > 1) {
            var c = i.find(function(g) {
              return g.isIntersecting;
            });
            c && (u = c);
          }
          if (l.callback) {
            var v = u.isIntersecting && u.intersectionRatio >= l.threshold;
            if (v === l.oldResult)
              return;
            l.oldResult = v, l.callback(v, u);
          }
        }, this.options.intersection), Bo(function() {
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
function Il(e, t, o) {
  var s = t.value;
  if (s)
    if (typeof IntersectionObserver > "u")
      console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");
    else {
      var l = new mp(e, s, o);
      e._vue_visibilityState = l;
    }
}
function bp(e, t, o) {
  var s = t.value, l = t.oldValue;
  if (!Bl(s, l)) {
    var n = e._vue_visibilityState;
    if (!s) {
      zl(e);
      return;
    }
    n ? n.createObserver(s, o) : Il(e, {
      value: s
    }, o);
  }
}
function zl(e) {
  var t = e._vue_visibilityState;
  t && (t.destroyObserver(), delete e._vue_visibilityState);
}
var gp = {
  beforeMount: Il,
  updated: bp,
  unmounted: zl
};
function yp(e) {
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
var wp = {
  itemsLimit: 1e3
}, _p = /(auto|scroll)/;
function El(e, t) {
  return e.parentNode === null ? t : El(e.parentNode, t.concat([e]));
}
var yo = function(t, o) {
  return getComputedStyle(t, null).getPropertyValue(o);
}, $p = function(t) {
  return yo(t, "overflow") + yo(t, "overflow-y") + yo(t, "overflow-x");
}, xp = function(t) {
  return _p.test($p(t));
};
function Ts(e) {
  if (e instanceof HTMLElement || e instanceof SVGElement) {
    for (var t = El(e.parentNode, []), o = 0; o < t.length; o += 1)
      if (xp(t[o]))
        return t[o];
    return document.scrollingElement || document.documentElement;
  }
}
function Lo(e) {
  return Lo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Lo(e);
}
var Al = {
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
function jl() {
  return this.items.length && Lo(this.items[0]) !== "object";
}
var Mo = !1;
if (typeof window < "u") {
  Mo = !1;
  try {
    var Vp = Object.defineProperty({}, "passive", {
      get: function() {
        Mo = !0;
      }
    });
    window.addEventListener("test", null, Vp);
  } catch {
  }
}
let kp = 0;
var es = {
  name: "RecycleScroller",
  components: {
    ResizeObserver: uo
  },
  directives: {
    ObserveVisibility: gp
  },
  props: {
    ...Al,
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
    simpleArray: jl,
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
      const n = Jl({
        id: kp++,
        index: t,
        used: !0,
        key: s,
        type: l
      }), a = en({
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
      const o = this.itemSize, s = this.gridItems || 1, l = this.itemSecondarySize || o, n = this.$_computedMinItemSize, a = this.typeField, i = this.simpleArray ? null : this.keyField, u = this.items, c = u.length, v = this.sizes, g = this.$_views, _ = this.$_unusedViews, y = this.pool, b = this.itemIndexByKey;
      let f, m, $, h, O;
      if (!c)
        f = m = h = O = $ = 0;
      else if (this.$_prerender)
        f = h = 0, m = O = Math.min(this.prerender, u.length), $ = null;
      else {
        const P = this.getScroll();
        if (t) {
          let N = P.start - this.$_lastUpdateScrollPosition;
          if (N < 0 && (N = -N), o === null && N < n || N < o)
            return {
              continuous: !0
            };
        }
        this.$_lastUpdateScrollPosition = P.start;
        const A = this.buffer;
        P.start -= A, P.end += A;
        let q = 0;
        if (this.$refs.before && (q = this.$refs.before.scrollHeight, P.start -= q), this.$refs.after) {
          const N = this.$refs.after.scrollHeight;
          P.end += N;
        }
        if (o === null) {
          let N, U = 0, W = c - 1, Y = ~~(c / 2), X;
          do
            X = Y, N = v[Y].accumulator, N < P.start ? U = Y : Y < c - 1 && v[Y + 1].accumulator > P.start && (W = Y), Y = ~~((U + W) / 2);
          while (Y !== X);
          for (Y < 0 && (Y = 0), f = Y, $ = v[c - 1].accumulator, m = Y; m < c && v[m].accumulator < P.end; m++)
            ;
          for (m === -1 ? m = u.length - 1 : (m++, m > c && (m = c)), h = f; h < c && q + v[h].accumulator < P.start; h++)
            ;
          for (O = h; O < c && q + v[O].accumulator < P.end; O++)
            ;
        } else {
          f = ~~(P.start / o * s);
          const N = f % s;
          f -= N, m = Math.ceil(P.end / o * s), h = Math.max(0, Math.floor((P.start - q) / o * s)), O = Math.floor((P.end - q) / o * s), f < 0 && (f = 0), m > c && (m = c), h < 0 && (h = 0), O > c && (O = c), $ = Math.ceil(c / s) * o;
        }
      }
      m - f > wp.itemsLimit && this.itemsLimitError(), this.totalSize = $;
      let w;
      const M = f <= this.$_endIndex && m >= this.$_startIndex;
      if (M)
        for (let P = 0, A = y.length; P < A; P++)
          w = y[P], w.nr.used && (e && (w.nr.index = b[w.item[i]]), (w.nr.index == null || w.nr.index < f || w.nr.index >= m) && this.unuseView(w));
      const z = M ? null : /* @__PURE__ */ new Map();
      let R, B, D;
      for (let P = f; P < m; P++) {
        R = u[P];
        const A = i ? R[i] : R;
        if (A == null)
          throw new Error(`Key is ${A} on item (keyField is '${i}')`);
        if (w = g.get(A), !o && !v[P].size) {
          w && this.unuseView(w);
          continue;
        }
        B = R[a];
        let q = _.get(B), N = !1;
        if (!w)
          M ? q && q.length ? w = q.pop() : w = this.addView(y, P, R, A, B) : (D = z.get(B) || 0, (!q || D >= q.length) && (w = this.addView(y, P, R, A, B), this.unuseView(w, !0), q = _.get(B)), w = q[D], z.set(B, D + 1)), g.delete(w.nr.key), w.nr.used = !0, w.nr.index = P, w.nr.key = A, w.nr.type = B, g.set(A, w), N = !0;
        else if (!w.nr.used && (w.nr.used = !0, N = !0, q)) {
          const U = q.indexOf(w);
          U !== -1 && q.splice(U, 1);
        }
        w.item = R, N && (P === u.length - 1 && this.$emit("scroll-end"), P === 0 && this.$emit("scroll-start")), o === null ? (w.position = v[P - 1].accumulator, w.offset = 0) : (w.position = Math.floor(P / s) * o, w.offset = P % s * l);
      }
      return this.$_startIndex = f, this.$_endIndex = m, this.emitUpdate && this.$emit("update", f, m, h, O), clearTimeout(this.$_sortTimer), this.$_sortTimer = setTimeout(this.sortViews, this.updateInterval + 300), {
        continuous: M
      };
    },
    getListenerTarget() {
      let e = Ts(this.$el);
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
      this.listenerTarget = this.getListenerTarget(), this.listenerTarget.addEventListener("scroll", this.handleScroll, Mo ? {
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
        const n = Ts(this.$el), a = n.tagName === "HTML" ? 0 : n[t.scroll], i = n.getBoundingClientRect(), c = this.$el.getBoundingClientRect()[t.start] - i[t.start];
        o = n, s = t.scroll, l = e + a + c;
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
const Cp = {
  key: 0,
  ref: "before",
  class: "vue-recycle-scroller__slot"
}, Sp = {
  key: 1,
  ref: "after",
  class: "vue-recycle-scroller__slot"
};
function Pp(e, t, o, s, l, n) {
  const a = zs("ResizeObserver"), i = tn("observe-visibility");
  return Oe((p(), d(
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
        Cp,
        [
          K(e.$slots, "before")
        ],
        512
        /* NEED_PATCH */
      )) : x("v-if", !0),
      (p(), H(fe(o.listTag), {
        ref: "wrapper",
        style: ft({ [e.direction === "vertical" ? "minHeight" : "minWidth"]: l.totalSize + "px" }),
        class: L(["vue-recycle-scroller__item-wrapper", o.listClass])
      }, {
        default: E(() => [
          (p(!0), d(
            F,
            null,
            G(l.pool, (u) => (p(), H(fe(o.itemTag), Be({
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
            }, on(o.skipHover ? {} : {
              mouseenter: () => {
                l.hoverKey = u.nr.key;
              },
              mouseleave: () => {
                l.hoverKey = null;
              }
            })), {
              default: E(() => [
                K(e.$slots, "default", {
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
          K(e.$slots, "empty")
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["style", "class"])),
      e.$slots.after ? (p(), d(
        "div",
        Sp,
        [
          K(e.$slots, "after")
        ],
        512
        /* NEED_PATCH */
      )) : x("v-if", !0),
      C(a, { onNotify: n.handleResize }, null, 8, ["onNotify"])
    ],
    34
    /* CLASS, HYDRATE_EVENTS */
  )), [
    [i, n.handleVisibilityChange]
  ]);
}
es.render = Pp;
es.__file = "src/components/RecycleScroller.vue";
var ts = {
  name: "DynamicScroller",
  components: {
    RecycleScroller: es
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
    ...Al,
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
    simpleArray: jl,
    itemsWithSize() {
      const e = [], { items: t, keyField: o, simpleArray: s } = this, l = this.vscrollData.sizes, n = t.length;
      for (let a = 0; a < n; a++) {
        const i = t[a], u = s ? a : i[o];
        let c = l[u];
        typeof c > "u" && !this.$_undefinedMap[u] && (c = 0), e.push({
          item: i,
          id: u,
          size: c
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
    this.$_updates = [], this.$_undefinedSizes = 0, this.$_undefinedMap = {}, this.$_events = yp();
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
function Op(e, t, o, s, l, n) {
  const a = zs("RecycleScroller");
  return p(), H(a, Be({
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
    default: E(({ item: i, index: u, active: c }) => [
      K(e.$slots, "default", dt(ct({
        item: i.item,
        index: u,
        active: c,
        itemWithSize: i
      })))
    ]),
    before: E(() => [
      K(e.$slots, "before")
    ]),
    after: E(() => [
      K(e.$slots, "after")
    ]),
    empty: E(() => [
      K(e.$slots, "empty")
    ]),
    _: 3
    /* FORWARDED */
  }, 16, ["items", "min-item-size", "direction", "list-tag", "item-tag", "onResize", "onVisible"]);
}
ts.render = Op;
ts.__file = "src/components/DynamicScroller.vue";
var Rl = {
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
    return se(this.tag, this.$slots.default());
  }
};
Rl.__file = "src/components/DynamicScrollerItem.vue";
const Lp = {
  key: 0,
  class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1"
}, Ae = /* @__PURE__ */ T({
  __name: "FormErrorMessage",
  props: {
    errorMessage: { default: null }
  },
  setup(e) {
    const s = Se(e).errorMessage, l = I(
      () => !!s.value && s.value.trim() !== ""
    );
    return (n, a) => l.value ? (p(), d("p", Lp, [
      r("span", null, k(S(s)), 1)
    ])) : x("", !0);
  }
}), Mp = {
  key: 0,
  class: "po-mt-2 po-text-sm po-text-slate-500"
}, je = /* @__PURE__ */ T({
  __name: "FormMessage",
  props: {
    message: { default: null }
  },
  setup(e) {
    return (t, o) => t.message !== null ? (p(), d("p", Mp, k(t.message), 1)) : x("", !0);
  }
}), Tp = { class: "po-block po-w-4 po-text-mpao-lightblue hover:po-text-mpao-midblue po-transition-colors po-duration-150 po-ease-out" }, Ne = /* @__PURE__ */ T({
  __name: "FormInfo",
  props: {
    info: { default: "" }
  },
  setup(e) {
    return (t, o) => t.info !== "" ? (p(), H(S(co), {
      key: 0,
      text: t.info,
      placement: "right",
      strategy: "fixed"
    }, {
      default: E(() => [
        r("span", Tp, [
          C(S(ep), { class: "po-fill-current" })
        ])
      ]),
      _: 1
    }, 8, ["text"])) : x("", !0);
  }
}), Dp = ["for"], Bp = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Ip = { class: "po-relative po-mt-1" }, zp = {
  role: "button",
  ref: "comboboxButton"
}, Ep = ["placeholder", "disabled", "id"], Ap = {
  class: /* @__PURE__ */ L(["group-hover:po-text-white po-block po-truncate"])
}, jp = {
  key: 0,
  class: "po-block po-text-xs po-opacity-60"
}, Rp = {
  key: 1,
  class: "scroller po-max-h-60 po-h-full po-overflow-y-auto"
}, Fp = ["onMousedown"], Hp = {
  class: /* @__PURE__ */ L(["group-hover:po-text-white po-block po-truncate"])
}, Np = {
  key: 0,
  class: "po-block po-text-xs po-opacity-60"
}, qp = {
  name: "PoSelectField"
}, Up = /* @__PURE__ */ T({
  ...qp,
  props: {
    modelValue: { default: null },
    label: { default: "" },
    id: { default: "" },
    info: { default: "" },
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
    const o = e, s = V(""), l = V(""), n = V(), a = V(!1), i = V(!1), u = V(), c = V(null), v = V({
      viewStartIdx: 0,
      viewEndIdx: 0,
      visibleStartIdx: 0,
      visibleEndIdx: 0
    }), g = I(() => {
      var D, P;
      const B = s.value.toLowerCase();
      return B === "" ? ((D = o.list) == null ? void 0 : D.map((A) => ({
        ...A,
        active: n.value === A.id
      }))) ?? [] : ((P = o.list) == null ? void 0 : P.filter((A) => A.name.toLowerCase().includes(B)).map((A) => ({
        ...A,
        active: n.value === A.id
      }))) ?? [];
    });
    function _(B) {
      if (o.object)
        return B == null ? void 0 : B.name;
      if (g.value) {
        let D = g.value.find((P) => P.id === B);
        return D == null ? void 0 : D.name;
      } else if (o.placeholder)
        return o.placeholder;
    }
    n.value = o.modelValue, Io(() => {
      n.value = o.modelValue;
    }), Q(n, () => {
      l.value = _(n.value);
    }), Et(c, () => {
      a.value = !!i.value;
    });
    function y(B) {
      n.value = B, l.value = B.name, s.value = "", t("selected", o.object ? B : B.id), t("update:modelValue", o.object ? B : B.id), a.value = !!i.value;
    }
    const b = V();
    let f;
    const { uniqueId: m, generateUniqueId: $ } = Le(), h = V(o.id);
    Z(() => {
      o.id === "" && ($(), h.value = m.value), l.value = _(o.modelValue), f = zt(u.value, b.value, {
        placement: "bottom-end",
        strategy: "fixed",
        modifiers: [
          {
            name: "sameWidth",
            enabled: !0,
            fn: ({ state: B }) => {
              B.styles.popper.width = `${B.rects.reference.width}px`;
            },
            phase: "beforeWrite",
            requires: ["computeStyles"]
          }
        ]
      });
    });
    function O() {
      i.value = !0, a.value = !0, f && f.update();
    }
    re(() => {
      f && f.destroy();
    });
    function w() {
      i.value = !1, setTimeout(() => {
        a.value = !1;
      }, 100);
    }
    const M = (B) => {
      let D = B.target.value;
      s.value = D;
    };
    function z(B, D, P, A) {
      v.value.viewStartIdx = B, v.value.viewEndIdx = D, v.value.visibleStartIdx = P, v.value.visibleEndIdx = A;
    }
    function R() {
      f && f.update();
    }
    return xe.on("sidebarOpen", (B) => {
      setTimeout(() => {
        f && f.update();
      }, 320);
    }), (B, D) => (p(), d("div", {
      class: L([{ "lg:po-grid lg:po-grid-cols-2": B.display === "horizontal" }]),
      ref_key: "containerRef",
      ref: c
    }, [
      r("label", {
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700",
        for: h.value
      }, [
        r("span", null, k(B.label), 1),
        B.required ? (p(), d("span", Bp, "*")) : x("", !0),
        C(Ne, { info: B.info }, null, 8, ["info"])
      ], 8, Dp),
      r("div", Ip, [
        r("div", zp, [
          Oe(r("input", {
            type: "text",
            ref_key: "selectBox",
            ref: u,
            class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm",
            placeholder: B.placeholder,
            disabled: B.disabled,
            "onUpdate:modelValue": D[0] || (D[0] = (P) => l.value = P),
            onInput: M,
            onFocus: O,
            onBlur: w,
            id: h.value
          }, null, 40, Ep), [
            [Mt, l.value]
          ]),
          r("span", {
            class: "po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-rounded-r-md po-px-2 focus:po-outline-none",
            role: "button",
            onMousedown: D[1] || (D[1] = te((P) => a.value = !a.value, ["stop"]))
          }, [
            C(S(Qi), {
              class: "po-h-5 po-w-5 po-text-slate-400",
              "aria-hidden": "true"
            })
          ], 32)
        ], 512),
        Oe(r("div", {
          ref_key: "popper",
          ref: b,
          class: "po-absolute po-z-10 po-mt-1 po-w-full po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
        }, [
          B.dynamicScroll ? (p(), H(S(ts), {
            key: 0,
            items: g.value,
            "min-item-size": 32,
            "key-field": "id",
            class: "scroller po-max-h-60 po-h-full po-overflow-y-auto",
            onResize: R,
            onUpdate: z
          }, {
            default: E(({ item: P, index: A, active: q }) => [
              C(S(Rl), {
                item: P,
                active: q,
                "size-dependencies": [P.name],
                onMousedown: te((N) => y(P), ["stop"]),
                "data-index": A,
                class: L([
                  "po-relative po-group po-select-none po-py-2 po-pl-3 po-pr-9 po-cursor-pointer hover:po-bg-mpao-lightblue",
                  P.active ? "po-bg-mpao-lightblue po-text-white" : "po-text-slate-900"
                ])
              }, {
                default: E(() => [
                  r("span", Ap, [
                    ee(k((P == null ? void 0 : P.name) ?? "") + " ", 1),
                    P != null && P.subtitle ? (p(), d("span", jp, k(P == null ? void 0 : P.subtitle), 1)) : x("", !0)
                  ])
                ]),
                _: 2
              }, 1032, ["item", "active", "size-dependencies", "onMousedown", "data-index", "class"])
            ]),
            _: 1
          }, 8, ["items"])) : (p(), d("ul", Rp, [
            (p(!0), d(F, null, G(g.value, (P) => (p(), d("li", {
              onMousedown: te((A) => y(P), ["stop"]),
              class: L([
                "po-relative po-group po-select-none po-py-2 po-pl-3 po-pr-9 po-cursor-pointer hover:po-bg-mpao-lightblue",
                P.active ? "po-bg-mpao-lightblue po-text-white" : "po-text-slate-900"
              ]),
              key: `sf-${h.value}-${P.id}`
            }, [
              r("span", Hp, [
                ee(k((P == null ? void 0 : P.name) ?? "") + " ", 1),
                P != null && P.subtitle ? (p(), d("span", Np, k(P == null ? void 0 : P.subtitle), 1)) : x("", !0)
              ])
            ], 42, Fp))), 128))
          ]))
        ], 512), [
          [Tt, a.value && g.value.length > 0]
        ])
      ]),
      C(je, { message: B.message }, null, 8, ["message"]),
      C(Ae, { "error-message": B.errorMessage }, null, 8, ["error-message"])
    ], 2));
  }
}), Yp = /* @__PURE__ */ r("div", { class: "po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity" }, null, -1), Wp = { class: "po-fixed po-z-10 po-inset-0" }, Zp = { class: "po-flex po-justify-center po-items-start po-min-h-screen sm:po-px-4 sm:po-pt-10 sm:po-pb-20 po-text-center sm:po-block po-max-h-screen po-overflow-y-hidden" }, Gp = /* @__PURE__ */ r("span", {
  class: "po-hidden sm:po-inline-block sm:po-align-middle sm:po-h-screen",
  "aria-hidden": "true"
}, "​", -1), Kp = { class: "po-flex po-items-center po-bg-white po-rounded-t-xl po-p-5" }, Xp = { class: "po-grow po-text-md po-font-bold po-text-slate-600" }, Qp = { class: "po-shrink-0" }, Jp = /* @__PURE__ */ r("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), eu = {
  key: 0,
  class: "po-bg-slate-50 po-rounded-b-xl"
}, tu = {
  name: "PoModal"
}, Ft = /* @__PURE__ */ T({
  ...tu,
  props: {
    openBtnLabel: { default: "" },
    modalTitle: { default: "Modal windows" },
    show: { type: Boolean, default: !1 },
    modalWidth: { default: "sm:po-max-w-xl" },
    modalHeight: { default: "" }
  },
  emits: ["modal-closed"],
  setup(e, { emit: t }) {
    const o = e, { show: s } = Se(o), l = V(!1);
    Q(s, () => {
      l.value = s.value;
    });
    function n() {
      l.value = !1, t("modal-closed", !0);
    }
    const a = o.modalTitle.toLowerCase().replace(/\s+/g, "-"), i = new URLSearchParams(window.location.search);
    return l.value = i.get("modal") !== void 0 && i.get("modal") === a, (u, c) => (p(), d("div", null, [
      u.openBtnLabel.length > 0 ? (p(), H(S(gt), {
        key: 0,
        label: u.openBtnLabel,
        onClick: c[0] || (c[0] = (v) => l.value = !0)
      }, null, 8, ["label"])) : x("", !0),
      (p(), H(Dt, { to: "body" }, [
        C(S(Rt), {
          as: "template",
          show: l.value
        }, {
          default: E(() => [
            C(S(no), {
              as: "div",
              class: "po-relative po-z-50",
              onClose: n
            }, {
              default: E(() => [
                C(S(Ke), {
                  as: "template",
                  enter: "po-ease-out po-duration-300",
                  "enter-from": "po-opacity-0",
                  "enter-to": "po-opacity-100",
                  leave: "po-ease-in po-duration-200",
                  "leave-from": "po-opacity-100",
                  "leave-to": "po-opacity-0"
                }, {
                  default: E(() => [
                    Yp
                  ]),
                  _: 1
                }),
                r("div", Wp, [
                  r("div", Zp, [
                    Gp,
                    C(S(Ke), {
                      as: "template",
                      enter: "po-ease-out po-duration-300",
                      "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                      "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                      leave: "po-ease-in po-duration-200",
                      "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                      "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                    }, {
                      default: E(() => [
                        C(S(ao), {
                          class: L(["po-relative po-inline-block po-align-bottom po-bg-white sm:po-rounded-xl po-text-left po-shadow-xl po-transform po-transition-all sm:po-align-top po-w-full", u.modalWidth])
                        }, {
                          default: E(() => [
                            r("div", Kp, [
                              r("h3", Xp, k(u.modalTitle), 1),
                              r("div", Qp, [
                                r("span", {
                                  role: "button",
                                  class: "po-block",
                                  onClick: n
                                }, [
                                  C(S(Jt), { class: "po-w-5 po-stroke-slate-500 hover:po-stroke-mpao-orange po-transition-colors po-duration-150 po-ease-in-out" })
                                ])
                              ])
                            ]),
                            Jp,
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
                              K(u.$slots, "content")
                            ], 2),
                            u.$slots.footer ? (p(), d("div", eu, [
                              K(u.$slots, "footer")
                            ])) : x("", !0)
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
}), ou = ["for"], su = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, lu = ["name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], nu = {
  name: "PoTextarea"
}, au = /* @__PURE__ */ T({
  ...nu,
  props: {
    modelValue: { default: "" },
    label: { default: "" },
    id: { default: "" },
    info: { default: "" },
    message: { default: null },
    errorMessage: { default: null },
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    placeholder: { default: void 0 },
    display: { default: "vertical" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, s = (i) => {
      let u = i.target.value;
      t("update:modelValue", u);
    }, { uniqueId: l, generateUniqueId: n } = Le(), a = V(o.id);
    return Z(() => {
      o.id === "" && (n(), a.value = l.value);
    }), (i, u) => (p(), d("div", {
      class: L(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": i.display === "horizontal" }]])
    }, [
      r("label", {
        for: a.value,
        class: "po-text-sm po-font-medium po-text-slate-700 po-flex po-items-center po-space-x-1"
      }, [
        r("span", null, k(i.label), 1),
        i.required ? (p(), d("span", su, "*")) : x("", !0),
        C(Ne, { info: i.info }, null, 8, ["info"])
      ], 8, ou),
      r("textarea", Be({
        name: `${a.value}-field`,
        id: a.value,
        value: i.modelValue,
        placeholder: i.placeholder,
        disabled: i.disabled,
        required: i.required,
        "aria-describedby": `${i.id}-description`,
        "aria-required": i.required,
        "aria-disabled": i.disabled
      }, i.$attrs, {
        onInput: s,
        class: "po-mt-1 po-peer po-px-3 po-py-2 po-block po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-border-slate-300 po-bg-white focus:po-border-mpao-lightblue focus:po-ring-0 invalid:po-border-red-400 invalid:po-focus:border-red-600 invalid:focus:po-ring-red-600 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default"
      }), null, 16, lu),
      C(je, { message: i.message }, null, 8, ["message"]),
      C(Ae, { "error-message": i.errorMessage }, null, 8, ["error-message"])
    ], 2));
  }
}), ru = { class: "po-w-5 po-h-5" }, iu = { action: "" }, pu = /* @__PURE__ */ r("br", null, null, -1), uu = { class: "po-p-5" }, du = /* @__PURE__ */ T({
  __name: "feedbackForm",
  props: {
    sidebarOpen: { type: Boolean, default: !0 },
    hideSidebarItemLabel: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = V(!1), o = [
      {
        id: 1,
        name: "Suggestion"
      },
      {
        id: 2,
        name: "Feature request"
      },
      {
        id: 2,
        name: "Other"
      }
    ], s = V({
      type: 1,
      message: ""
    });
    return (l, n) => (p(), d(F, null, [
      r("button", {
        onClick: n[0] || (n[0] = te(() => t.value = !0, ["prevent"])),
        class: "po-flex po-items-center po-w-full po-group po-space-x-3 po-px-2 po-py-3 po-transition-colors po-duration-100 po-ease-in-out po-rounded-lg po-outline-none po-ring-0 po-text-slate-600 hover:po-text-mpao-lightblue hover:po-bg-slate-100",
        title: "Go to feedback"
      }, [
        r("span", ru, [
          C(S(vn), { class: "po-stroke-current group-hover:po-stroke-mpao-orange po-w-5 po-h-5 po-stroke-2" })
        ]),
        r("span", {
          class: L(["po-text-sm po-leading-none po-font-medium po-shrink-0 po-text-left po-transition-opacity po-duration-150 po-ease-out", [
            { "po-opacity-1": l.sidebarOpen },
            { "po-opacity-0": !l.sidebarOpen },
            { "po-hidden": l.hideSidebarItemLabel }
          ]])
        }, "Feedback", 2)
      ]),
      C(Ft, {
        show: t.value,
        onModalClosed: n[3] || (n[3] = () => t.value = !1),
        "modal-title": "Feedback"
      }, {
        content: E(() => [
          r("form", iu, [
            C(Up, {
              label: "Type",
              list: o,
              modelValue: s.value.type,
              "onUpdate:modelValue": n[1] || (n[1] = (a) => s.value.type = a)
            }, null, 8, ["modelValue"]),
            pu,
            C(au, {
              cols: "6",
              rows: "6",
              label: "Description",
              modelValue: s.value.message,
              "onUpdate:modelValue": n[2] || (n[2] = (a) => s.value.message = a)
            }, null, 8, ["modelValue"])
          ])
        ]),
        footer: E(() => [
          r("div", uu, [
            C(gt, {
              label: "Send",
              type: "button"
            })
          ])
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), cu = { key: 0 }, fu = ["innerHTML"], vu = { class: "po-grow" }, hu = {
  key: 0,
  class: "po-shrink-0 po-relative po-py-[1px] po-px-2 po-rounded-full po-text-xs po-inline-flex po-items-center po-justify-center po-bg-mpao-orange po-text-white"
}, Ds = /* @__PURE__ */ T({
  __name: "sidebarItem",
  props: {
    item: { default: null },
    sidebarOpen: { type: Boolean, default: !0 },
    hideSidebarItemLabel: { type: Boolean, default: !1 },
    currRoute: { default: "" },
    type: { default: "tab" }
  },
  emits: ["item-click"],
  setup(e, { emit: t }) {
    const o = e;
    function s(a = "") {
      t("item-click", {
        actionType: "button-click",
        action: a
      });
    }
    function l() {
      var i, u;
      const a = ((i = o.item) == null ? void 0 : i.name) || ((u = o.item) == null ? void 0 : u.label) || "";
      return o.sidebarOpen ? "" : a;
    }
    const n = (a) => {
      const i = /^(.+?)(?:\s+\((\d+)\))?$/, u = a.match(i), c = u && u[1] ? u[1].trim() : "", v = u && u[2] ? parseInt(u[2], 10) : 0;
      return {
        label: c,
        count: v
      };
    };
    return (a, i) => a.item ? (p(), d("li", cu, [
      r("span", null, [
        C(S(co), {
          text: l(),
          placement: "right",
          strategy: "fixed"
        }, {
          default: E(() => [
            a.item.disabled ? x("", !0) : (p(), d("button", {
              key: 0,
              onClick: i[0] || (i[0] = (u) => s(a.item.url || a.item.name)),
              class: L(["po-flex po-items-center po-w-full po-group po-space-x-3 po-px-2 po-py-3 po-transition-all po-duration-100 po-ease-in-out po-rounded-lg po-outline-none po-ring-0", [
                {
                  "po-text-mpao-lightblue po-bg-slate-100 hover:po-bg-slate-100/50": a.item.url == a.currRoute
                },
                {
                  "po-text-slate-600 hover:po-text-mpao-lightblue hover:po-bg-slate-100": a.item.url !== a.currRoute
                },
                { "po-justify-left": !a.hideSidebarItemLabel },
                { "po-justify-center": a.hideSidebarItemLabel }
              ]])
            }, [
              r("span", {
                class: L(["po-shrink-0", [
                  {
                    "po-w-5 po-h-5": a.type === "tab"
                  },
                  {
                    "po-w-4": a.type !== "tab"
                  },
                  { "po-animate-fadeOut": !a.hideSidebarItemLabel && !a.sidebarOpen },
                  { "po-animate-fadeIn": a.hideSidebarItemLabel }
                ]])
              }, [
                a.type === "app" ? (p(), d("span", {
                  key: 0,
                  innerHTML: a.item.icon,
                  class: "po-text-slate-600 po-w-5"
                }, null, 8, fu)) : (p(), H(fe(a.item.icon), {
                  key: 1,
                  class: L([
                    {
                      "po-stroke-current group-hover:po-stroke-mpao-orange": a.item.url !== a.currRoute
                    },
                    {
                      "po-stroke-mpao-orange": a.item.url == a.currRoute
                    },
                    {
                      "po-w-5 po-h-5 po-stroke-2": a.type === "tab"
                    },
                    {
                      "po-w-4": a.type !== "tab"
                    }
                  ])
                }, null, 8, ["class"]))
              ], 2),
              r("span", {
                class: L(["po-text-sm po-leading-none po-flex po-items-center po-font-medium po-grow po-text-left po-transition-opacity po-duration-150 po-ease-out", [
                  { "po-opacity-1": a.sidebarOpen },
                  { "po-opacity-0": !a.sidebarOpen },
                  { "po-hidden": a.hideSidebarItemLabel }
                ]])
              }, [
                a.item.name ? (p(), d(F, { key: 0 }, [
                  ee(k(a.item.name), 1)
                ], 64)) : x("", !0),
                a.item.label ? (p(), d(F, { key: 1 }, [
                  r("span", vu, k(n(a.item.label).label), 1),
                  n(a.item.label).count ? (p(), d("span", hu, [
                    r("span", null, k(n(a.item.label).count), 1)
                  ])) : x("", !0)
                ], 64)) : x("", !0)
              ], 2)
            ], 2))
          ]),
          _: 1
        }, 8, ["text"])
      ])
    ])) : x("", !0);
  }
}), mu = { class: "po-grow" }, bu = { class: "po-mt-2 po-mb-5" }, gu = { class: "po-mt-2 po-mb-5" }, yu = {
  key: 0,
  class: "po-mt-2 po-shrink-0 po-mb-2 po-border-t po-border-slate-200 po-pt-2"
}, wu = {
  name: "PoSidebarDrawer"
}, E5 = /* @__PURE__ */ T({
  ...wu,
  props: {
    content: { default: null },
    currRoute: { default: "/" },
    hasFeedback: { type: Boolean, default: !1 },
    appsLabel: { default: "Related apps" },
    apps: { default: null },
    appCode: { default: "" }
  },
  emits: ["button-click", "app-click"],
  setup(e, { emit: t }) {
    const o = e, s = V(!0), l = V(window.innerWidth), n = V(!1), a = V(!1), i = V(!0), u = () => {
      _();
    }, c = I(() => {
      var f, m;
      let y = [];
      const b = (f = o.apps) == null ? void 0 : f.filter(($) => $.code == o.appCode)[0];
      if (b) {
        let $ = (m = o.apps) == null ? void 0 : m.filter(
          (h) => b.related.includes(h.code)
        );
        $ == null || $.forEach((h) => {
          y.push(h);
        });
      }
      return y;
    });
    Z(() => {
      window.addEventListener("resize", u), _();
    });
    function v({ actionType: y, action: b }) {
      t(y, b), n.value && xe.emit("sidebarOpen", !1);
    }
    function g(y) {
      return s.value ? "" : y;
    }
    function _() {
      l.value = window.innerWidth, l.value <= 1024 ? (n.value = !0, xe.emit("sidebarOpen", !1)) : n.value = !1;
    }
    return Do(() => {
      window.removeEventListener("resize", u);
    }), xe.on("sidebarOpen", (y) => {
      typeof y == "boolean" && (s.value = y, y ? (a.value = !1, setTimeout(() => {
        i.value = !0;
      }, 150)) : (i.value = !1, setTimeout(() => {
        a.value = !0;
      }, 320)));
    }), (y, b) => {
      var f;
      return p(), d("aside", {
        class: L(["po-flex po-flex-col po-px-3 po-pt-[78px] po-top-0 po-bottom-0 po-bg-white po-overflow-y-auto po-overflow-x-hidden po-transition-all po-duration-300 po-ease-in-out po-border-r po-border-slate-50 po-z-[49] po-fixed", [
          { "po-w-[256px]": s.value && !n.value },
          { "po-w-[64px]": !s.value && !n.value },
          { "po-w-[256px] po-left-0 po-shadow": n.value && s.value },
          {
            "po-w-[256px] -po-left-[256px]  po-shadow-lg": n.value && !s.value
          }
        ]])
      }, [
        r("div", mu, [
          (p(!0), d(F, null, G(y.content, (m, $) => (p(), H(S(xs), {
            key: `sidebar-group-${$}`,
            defaultOpen: !0
          }, {
            default: E(({ open: h }) => [
              m.groupName ? (p(), H(S(Vs), {
                key: 0,
                class: L([[
                  { "po-mb-3": h === "" },
                  { "po-ml-0 po-text-center": a.value },
                  { "po-ml-2 po-text-left": !a.value },
                  { "po-animate-fadeOut": !a.value && !s.value },
                  { "po-animate-fadeIn": a.value }
                ], "po-uppercase po-select-none po-text-xs po-font-semibold po-text-slate-400 po-block po-w-full"])
              }, {
                default: E(() => [
                  ee(k(i.value ? m.groupName : m.groupName.slice(0, 2)), 1)
                ]),
                _: 2
              }, 1032, ["class"])) : x("", !0),
              C(Ze, {
                "enter-active-class": "po-transition po-duration-100 po-ease-out",
                "enter-from-class": "po-transform po-scale-95 po-opacity-0",
                "enter-to-class": "po-transform po-scale-100 po-opacity-100",
                "leave-active-class": "po-transition po-duration-75 po-ease-out",
                "leave-from-class": "po-transform po-scale-100 po-opacity-100",
                "leave-to-class": "po-transform po-scale-95 po-opacity-0"
              }, {
                default: E(() => [
                  C(S(ks), null, {
                    default: E(() => [
                      r("ul", bu, [
                        (p(!0), d(F, null, G(m.items, (O) => (p(), H(Ds, {
                          key: O.label,
                          item: O,
                          sidebarOpen: s.value,
                          hideSidebarItemLabel: a.value,
                          currRoute: y.currRoute,
                          onItemClick: v
                        }, null, 8, ["item", "sidebarOpen", "hideSidebarItemLabel", "currRoute"]))), 128))
                      ])
                    ]),
                    _: 2
                  }, 1024)
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1024))), 128)),
          ((f = c.value) == null ? void 0 : f.length) > 0 ? (p(), H(S(xs), {
            key: 0,
            defaultOpen: !0
          }, {
            default: E(({ open: m }) => [
              y.appsLabel ? (p(), H(S(Vs), {
                key: 0,
                class: L([[
                  { "po-mb-3": m === "" },
                  { "po-ml-0 po-text-center": a.value },
                  { "po-ml-2 po-text-left": !a.value },
                  { "po-animate-fadeOut": !a.value && !s.value },
                  { "po-animate-fadeIn": a.value }
                ], "po-uppercase po-select-none po-text-xs po-font-semibold po-text-slate-400 po-block po-w-full"])
              }, {
                default: E(() => [
                  ee(k(i.value ? y.appsLabel : y.appsLabel.slice(0, 2)), 1)
                ]),
                _: 2
              }, 1032, ["class"])) : x("", !0),
              C(Ze, {
                "enter-active-class": "po-transition po-duration-100 po-ease-out",
                "enter-from-class": "po-transform po-scale-95 po-opacity-0",
                "enter-to-class": "po-transform po-scale-100 po-opacity-100",
                "leave-active-class": "po-transition po-duration-75 po-ease-out",
                "leave-from-class": "po-transform po-scale-100 po-opacity-100",
                "leave-to-class": "po-transform po-scale-95 po-opacity-0"
              }, {
                default: E(() => [
                  C(S(ks), null, {
                    default: E(() => [
                      r("ul", gu, [
                        (p(!0), d(F, null, G(c.value, ($) => (p(), H(Ds, {
                          key: $.name,
                          item: $,
                          sidebarOpen: s.value,
                          hideSidebarItemLabel: a.value,
                          currRoute: y.currRoute,
                          type: "app",
                          onItemClick: v
                        }, null, 8, ["item", "sidebarOpen", "hideSidebarItemLabel", "currRoute"]))), 128))
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : x("", !0)
        ]),
        y.hasFeedback ? (p(), d("ul", yu, [
          r("li", null, [
            C(S(co), {
              text: g("Feedback"),
              placement: "right",
              strategy: "fixed"
            }, {
              default: E(() => [
                C(du, {
                  "sidebar-open": s.value,
                  "hide-sidebar-item-label": a.value
                }, null, 8, ["sidebar-open", "hide-sidebar-item-label"])
              ]),
              _: 1
            }, 8, ["text"])
          ])
        ])) : x("", !0)
      ], 2);
    };
  }
}), _u = {
  key: 0,
  class: "shell-content--action-bar"
}, $u = { class: "action-bar__nav" }, xu = ["onClick"], Vu = { class: "action-bar__nav_label po-font-medium" }, ku = {
  key: 0,
  class: "po-shrink-0 po-flex po-space-x-1"
}, Cu = /* @__PURE__ */ r("span", { class: "action-bar__nav_label po-font-medium" }, "Go Back", -1), Su = {
  name: "PoActionBar"
}, A5 = /* @__PURE__ */ T({
  ...Su,
  props: {
    items: { default: null },
    showBackButton: { type: Boolean, default: !1 },
    currPageRoute: { default: "" }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, s) => o.items !== null && o.items.length > 0 || o.showBackButton ? (p(), d("section", _u, [
      r("nav", $u, [
        (p(!0), d(F, null, G(o.items, (l) => (p(), d("span", {
          onClick: (n) => o.$emit("button-click", l.label),
          class: L([[
            { "action-bar__nav_highlighted": l.highlighted },
            { "action-bar__nav_danger": l.danger }
          ], "action-bar__nav_link"])
        }, [
          (p(), H(fe(l.icon), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" })),
          r("span", Vu, k(l.label), 1)
        ], 10, xu))), 256))
      ]),
      o.showBackButton ? (p(), d("nav", ku, [
        r("span", {
          onClick: s[0] || (s[0] = (l) => o.$emit("button-click", "back")),
          class: "action-bar__nav_link"
        }, [
          Cu,
          (p(), H(fe(S(un)), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" }))
        ])
      ])) : x("", !0)
    ])) : x("", !0);
  }
}), Pu = { class: "po-shadow-sm po-rounded-xl po-bg-white po-relative" }, Ou = {
  key: 0,
  class: "po-absolute po-right-2 po-top-2 po-p-2 po-rounded-lg"
}, Lu = {
  key: 1,
  class: "lg:po-col-span-2 lg:po-flex lg:po-justify-end po-space-x-2"
}, Mu = {
  name: "PoCard"
}, j5 = /* @__PURE__ */ T({
  ...Mu,
  props: {
    title: { default: "" },
    isLoading: { type: Boolean, default: !1 },
    titleStyle: { default: "" }
  },
  setup(e) {
    return (t, o) => (p(), d("div", Pu, [
      t.isLoading ? (p(), d("div", Ou, [
        C(nt)
      ])) : x("", !0),
      r("div", {
        class: L([
          { "po-grid po-grid-cols-1 lg:po-grid-cols-3 po-gap-3": t.$slots.action }
        ])
      }, [
        t.title.length > 0 ? (p(), d("h3", {
          key: 0,
          class: L(["po-text-base po-font-medium po-text-slate-600", [t.titleStyle]])
        }, k(t.title), 3)) : x("", !0),
        t.$slots.action ? (p(), d("div", Lu, [
          K(t.$slots, "action")
        ])) : x("", !0)
      ], 2),
      K(t.$slots, "content"),
      K(t.$slots, "default")
    ]));
  }
}), Tu = { class: "po-py-3 po-px-5 po-border-b po-border-slate-200" }, Du = {
  class: "po-flex po-w-full md:po-ml-0",
  action: "#",
  method: "GET"
}, Bu = ["for"], Iu = { class: "po-relative po-w-full po-text-slate-400 focus-within:po-text-mpao-lightblue po-transition-colors po-duration-100 po-ease-in-out" }, zu = { class: "po-pointer-events-none po-absolute po-inset-y-0 po-left-0 po-flex po-items-center" }, Eu = ["id", "placeholder", "value"], Au = ["disabled"], ju = {
  name: "PoCardSearch"
}, R5 = /* @__PURE__ */ T({
  ...ju,
  props: {
    modelValue: { default: "" },
    placeholder: { default: "Search" },
    showBtn: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "button-click"],
  setup(e, { emit: t }) {
    const o = (a) => {
      let i = a.target.value;
      t("update:modelValue", i);
    }, { uniqueId: s, generateUniqueId: l } = Le(), n = V("card-search-field");
    return Z(() => {
      l(), n.value = s.value;
    }), (a, i) => (p(), d("div", Tu, [
      r("form", Du, [
        r("label", {
          for: n.value,
          class: "po-sr-only"
        }, k(a.placeholder), 9, Bu),
        r("div", Iu, [
          r("div", zu, [
            C(S(Qt), { class: "po-h-5 po-w-5 po-flex-shrink-0" })
          ]),
          r("input", {
            name: "search-field",
            id: n.value,
            autocomplete: "off",
            "aria-autocomplete": "none",
            placeholder: a.placeholder,
            value: a.modelValue,
            onInput: o,
            class: "po-h-full po-w-full po-border-transparent po-py-2 po-pl-8 po-pr-3 po-text-sm po-text-slate-700 po-placeholder-slate-500 focus:po-border-transparent focus:po-placeholder-slate-400 focus:po-outline-none focus:po-ring-0",
            type: "search"
          }, null, 40, Eu),
          a.showBtn ? (p(), d("button", {
            key: 0,
            class: L(["po-absolute po-right-0 po-text-sm po-rounded-lg po-px-3 po-py-2 po-transition-colors po-duration-150 po-ease-out", [
              { "po-bg-mpao-lightblue po-text-white": a.modelValue !== "" },
              { "po-bg-slate-100 po-text-slate-400": a.modelValue === "" }
            ]]),
            disabled: a.modelValue === "",
            onClick: i[0] || (i[0] = te((u) => a.$emit("button-click", a.modelValue), ["prevent"]))
          }, " Search ", 10, Au)) : x("", !0)
        ])
      ])
    ]));
  }
}), Ru = { class: "po-flex po-items-center" }, Fu = { class: "po-text-sm po-font-medium po-text-slate-500 po-pr-2" }, Hu = {
  name: "PoPagination"
}, Nu = /* @__PURE__ */ T({
  ...Hu,
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
    const n = I(() => o.totalPages ? `Page ${o.currentPage} of ${o.totalPages}` : o.pagination ? o.pagination.label : "");
    return (a, i) => (p(), d("div", Ru, [
      r("span", Fu, k(n.value), 1),
      r("button", {
        title: "Previous",
        onClick: s,
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        C(S(As), { class: "po-w-4 po-stroke-current po-stroke-2" })
      ]),
      r("button", {
        title: "Next",
        onClick: l,
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        C(S(js), { class: "po-w-4 po-stroke-current po-stroke-2" })
      ])
    ]));
  }
}), qu = { key: 0 }, Uu = {
  class: "po-text-xl md:po-text-2xl po-font-semibold po-text-slate-800",
  id: "po-page-title"
}, Yu = {
  key: 0,
  class: "po-text-base po-mt-2 po-max-w-md po-block po-text-slate-500"
}, Wu = { key: 1 }, Zu = { class: "po-grid po-grid-cols-1 lg:po-grid-cols-2 po-gap-5" }, Gu = {
  class: "po-text-xl md:po-text-2xl po-font-semibold po-text-slate-800",
  id: "po-page-title"
}, Ku = {
  key: 0,
  class: "po-text-base po-mt-4 po-max-w-md po-pb-5 po-block po-text-slate-500"
}, Xu = { class: "po-flex po-items-end po-justify-end po-flex-col" }, Qu = {
  key: 0,
  class: "po-flex md:po-justify-end po-mb-5"
}, Ju = { class: "po-bg-slate-50 po-shadow-sm po-rounded-xl po-py-5 po-px-2 po-divide-x po-divide-slate-200 po-flex" }, ed = ["onClick"], td = { class: "po-text-xl po-font-medium po-text-slate-600 po-flex po-items-center po-space-x-1" }, od = { class: "po-text-xl po-font-medium po-text-slate-600 group-hover:po-text-mpao-lightblue" }, sd = { class: "po-text-sm po-text-slate-500 po-block group-hover:po-text-mpao-lightblue" }, ld = { class: "po-flex po-items-center po-space-x-1 md:po-justify-end" }, nd = {
  key: 2,
  class: "po-border-l po-border-slate-400 po-h-3 po-w-3 po-ml-1"
}, ad = {
  key: 0,
  class: "po-bg-slate-50 po-p-5 po-mt-5 po-rounded-md po-grid po-grid-cols-1 md:po-grid-cols-3 po-gap-5"
}, rd = /* @__PURE__ */ r("span", { class: "po-text-xs po-text-slate-500 po-py-5" }, "No filters available at the moment.", -1), id = {
  name: "PoPageTitle"
}, F5 = /* @__PURE__ */ T({
  ...id,
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
    return (a, i) => a.standAlone ? (p(), d("div", qu, [
      r("h1", Uu, k(a.label), 1),
      a.description !== "" ? (p(), d("span", Yu, k(a.description), 1)) : x("", !0)
    ])) : (p(), d("div", Wu, [
      r("div", Zu, [
        r("div", null, [
          r("h1", Gu, k(a.label), 1),
          a.description !== "" ? (p(), d("span", Ku, k(a.description), 1)) : x("", !0)
        ]),
        r("div", Xu, [
          a.stats !== null ? (p(), d("div", Qu, [
            r("div", Ju, [
              (p(!0), d(F, null, G(a.stats, (u) => (p(), d("div", {
                class: "po-px-5 po-cursor-pointer po-group genie-effect",
                onClick: (c) => a.$emit("stat-click", u)
              }, [
                r("span", td, [
                  r("span", od, k(u.value), 1),
                  u.icon ? (p(), d("span", {
                    key: 0,
                    class: L(["po-w-5 po-h-5", n(u)])
                  }, [
                    (p(), H(fe(u.icon)))
                  ], 2)) : x("", !0)
                ]),
                r("span", sd, k(u.label), 1)
              ], 8, ed))), 256))
            ])
          ])) : x("", !0),
          r("div", ld, [
            a.showFilter ? (p(), d("button", {
              key: 0,
              title: "Filter",
              onClick: i[0] || (i[0] = (u) => {
                a.$emit("button-click", "filter"), s.value = !S(s);
              }),
              class: L([
                "po-p-2 po-rounded-md hover:po-bg-slate-200 po-transition-colors po-duration-75 po-ease-in-out",
                { "po-text-mpao-orange hover:po-text-mpao-orange": S(s) },
                { "tpo-ext-slate-600 hover:po-text-mpao-blue": !S(s) }
              ])
            }, [
              C(S(Rs), { class: "po-w-4 po-stroke-current po-stroke-2" })
            ], 2)) : x("", !0),
            a.showDownload ? (p(), d("button", {
              key: 1,
              title: "Download",
              onClick: i[1] || (i[1] = (u) => a.$emit("button-click", "download")),
              class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
            }, [
              C(S(rn), { class: "po-w-4 po-stroke-current po-stroke-2" })
            ])) : x("", !0),
            a.showFilter && a.showPagination || a.showDownload && a.showPagination ? (p(), d("span", nd, " ")) : x("", !0),
            a.showPagination ? (p(), H(Nu, {
              key: 3,
              pagination: a.pagination,
              onButtonClick: l
            }, null, 8, ["pagination"])) : x("", !0)
          ])
        ])
      ]),
      C(Ze, {
        "enter-active-class": "po-transition po-duration-100 po-ease-out",
        "enter-from-class": "po-transform po-scale-95 po-opacity-0",
        "enter-to-class": "po-transform po-scale-100 po-opacity-100",
        "leave-active-class": "po-transition po-duration-75 po-ease-out",
        "leave-from-class": "po-transform po-scale-100 po-opacity-100",
        "leave-to-class": "po-transform po-scale-95 po-opacity-0"
      }, {
        default: E(() => [
          S(s) ? (p(), d("div", ad, [
            K(a.$slots, "filters", {}, () => [
              rd
            ])
          ])) : x("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), pd = {
  key: 0,
  class: "po-w-12"
}, ud = ["onClick"], dd = { class: "po-flex po-space-x-1 po-pr-2 po-items-center" }, cd = { class: "po-grow" }, fd = { key: 0 }, vd = {
  key: 1,
  class: "sr-only"
}, hd = {
  key: 0,
  class: "po-shrink-0 po-select-none po-bg-slate-100 po-rounded-md po-w-4 po-h-4 po-flex po-items-center po-justify-center po-cursor-pointer",
  role: "button"
}, md = {
  key: 0,
  class: "po-w-12"
}, bd = ["onClick"], gd = ["data-title"], yd = { key: 1 }, wd = /* @__PURE__ */ r("div", { class: "flex items-center space-x-3 justify-end" }, " action ", -1), _d = [
  wd
], $d = ["colspan"], xd = { key: 1 }, Vd = ["colspan"], kd = { class: "po-py-10 po-block po-normal-case" }, Cd = { class: "po-pr-5" }, Sd = { class: "po-py-1" }, Pd = { key: 0 }, Od = {
  name: "PoTable"
}, H5 = /* @__PURE__ */ T({
  ...Od,
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
    const o = e, { isLoading: s, tbody: l, thead: n } = Se(o), a = V(!1), i = V(null), u = V(null), c = V(null);
    Q(s, () => {
      v();
    }), Q(l, () => {
      v(), g();
    }), Z(() => {
      v(), g(), i.value = n.value;
    });
    function v() {
      a.value = s.value, u.value = l.value, s.value && (u.value = [{}, {}, {}, {}, {}]);
    }
    function g() {
      if (o.hasDetailsRow && o.tbody)
        for (let h = 0; h < o.tbody.length; h++)
          o.tbody[h].showDetails = !1;
    }
    function _() {
      return Math.floor(Math.random() * 41) + 40;
    }
    const y = (h, O) => {
      var w;
      h.sortable && (h.sorted && c.value === "asc" ? c.value = "desc" : c.value = "asc", (w = i.value) == null || w.forEach((M) => {
        M.label === h.label ? (M.sorted = !0, M.sortDirection = c.value, M.index = O) : (M.sorted = !1, M.sortDirection = null);
      }), t("column-click", h));
    };
    function b(h) {
      return $(h) ? h : m(h) ? Es(h) : h;
    }
    const f = (h) => typeof h == "string", m = (h) => {
      const O = new Date(h);
      return !isNaN(O.getTime());
    }, $ = (h) => /^(\d{1,3}(,\d{3})*(\.\d{2})?|\d+(\.\d{2})?)$/.test(h);
    return (h, O) => (p(), d("table", {
      class: L(["table-responsive po-w-full", [{ lg: h.breakAtLg }]])
    }, [
      r("thead", null, [
        r("tr", null, [
          h.hasDetailsRow ? (p(), d("th", pd)) : x("", !0),
          (p(!0), d(F, null, G(i.value, (w, M) => (p(), d("th", {
            onClick: (z) => y(w, M),
            class: L(w.style)
          }, [
            r("span", dd, [
              r("span", cd, [
                K(h.$slots, "th", dt(ct(w)), () => [
                  w.label !== "Action" ? (p(), d("span", fd, k(w.label), 1)) : x("", !0),
                  w.label == "Action" ? (p(), d("span", vd, k(w.label), 1)) : x("", !0)
                ])
              ]),
              w.sortable ? (p(), d("span", hd, [
                w.sorted ? x("", !0) : (p(), H(S(Yi), {
                  key: 0,
                  class: "po-w-3 po-h-3"
                })),
                w.sorted && w.sortDirection === "asc" ? (p(), H(S(Ui), {
                  key: 1,
                  class: "po-w-3 po-h-3"
                })) : x("", !0),
                w.sorted && w.sortDirection === "desc" ? (p(), H(S(Ni), {
                  key: 2,
                  class: "po-w-3 po-h-3"
                })) : x("", !0)
              ])) : x("", !0)
            ])
          ], 10, ud))), 256))
        ])
      ]),
      r("tbody", null, [
        u.value !== null && !a.value || u.value !== null && u.value.length !== 0 && !a.value ? (p(!0), d(F, { key: 0 }, G(u.value, (w, M) => (p(), d(F, null, [
          r("tr", null, [
            h.hasDetailsRow ? (p(), d("td", md, [
              r("span", {
                onClick: (z) => w.showDetails = !w.showDetails
              }, [
                C(S(qi), {
                  class: L(["po-w-5 po-fill-mpao-lightblue po-origin-center po-transition-transform po-duration-100 po-ease-out po-cursor-pointer", [{ "po-rotate-90": w.showDetails }]])
                }, null, 8, ["class"])
              ], 8, bd)
            ])) : x("", !0),
            K(h.$slots, "td", dt(ct({ ...w, index: M, item: w })), () => [
              (p(!0), d(F, null, G(w, (z, R) => (p(), d(F, null, [
                f(R) && R !== "action" ? (p(), d("td", {
                  key: 0,
                  "data-title": R
                }, k(b(z)), 9, gd)) : (p(), d("td", yd, _d))
              ], 64))), 256))
            ])
          ]),
          h.hasDetailsRow ? (p(), d("tr", {
            key: 0,
            class: L(["po-table-details-row", [{ "po-hidden": !w.showDetails }]])
          }, [
            S(n) ? (p(), d("td", {
              key: 0,
              colspan: S(n).length + 1
            }, [
              K(h.$slots, "details", dt(ct({ item: w })))
            ], 8, $d)) : x("", !0)
          ], 2)) : x("", !0)
        ], 64))), 256)) : x("", !0),
        u.value == null && !a.value || u.value !== null && u.value.length == 0 && !a.value ? (p(), d("tr", xd, [
          S(n) ? (p(), d("td", {
            key: 0,
            colspan: S(n).length + 1,
            class: "po-text-center"
          }, [
            r("span", kd, k(h.emptyMessage), 1)
          ], 8, Vd)) : x("", !0)
        ])) : x("", !0),
        a.value ? (p(!0), d(F, { key: 2 }, G(u.value, (w) => (p(), d("tr", null, [
          (p(!0), d(F, null, G(S(n), (M) => (p(), d("td", Cd, [
            r("div", Sd, [
              r("div", {
                class: "po-h-2 loading-placeholder po-rounded-full",
                style: ft({ width: _() + "%" })
              }, null, 4)
            ])
          ]))), 256))
        ]))), 256)) : x("", !0)
      ]),
      h.$slots.tfoot ? (p(), d("tfoot", Pd, [
        r("tr", null, [
          K(h.$slots, "tfoot")
        ])
      ])) : x("", !0)
    ], 2));
  }
}), Ld = { class: "" }, Md = { class: "po-grow" }, Td = ["onClick"], Dd = { class: "po-block po-py-[6px]" }, Bd = { class: "po-block po-py-[6px] po-w-full" }, Id = {
  name: "PoDescriptionList"
}, zd = /* @__PURE__ */ T({
  ...Id,
  props: {
    items: { default: null },
    striped: { type: Boolean, default: !1 },
    columns: { type: Boolean, default: !0 },
    itemsCount: { default: 4 },
    isLoading: { type: Boolean, default: !1 }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    const o = e, { isLoading: s } = Se(o), l = V(!1);
    Q(s, () => {
      n();
    }), Z(() => {
      n();
    });
    function n() {
      l.value = s.value;
    }
    function a() {
      return Math.floor(Math.random() * 41) + 40;
    }
    return (i, u) => (p(), d("div", null, [
      r("dl", {
        class: L([
          "po-description-list",
          { "po-divide-y po-divide-slate-200": !i.striped },
          { striped: i.striped },
          { "no-col": !i.columns }
        ])
      }, [
        l.value ? (p(!0), d(F, { key: 1 }, G(i.itemsCount, (c) => (p(), d("div", null, [
          r("dt", null, [
            r("span", Dd, [
              r("span", {
                class: "po-block po-h-2 loading-placeholder po-rounded-full",
                style: ft({ width: a() + "%" })
              }, null, 4)
            ])
          ]),
          r("dd", null, [
            r("span", Bd, [
              r("span", {
                class: "po-block po-h-2 loading-placeholder po-rounded-full",
                style: ft({ width: a() + "%" })
              }, null, 4)
            ])
          ])
        ]))), 256)) : K(i.$slots, "content", { key: 0 }, () => [
          (p(!0), d(F, null, G(i.items, (c) => (p(), d("div", null, [
            r("dt", null, k(c.title), 1),
            r("dd", Ld, [
              r("span", Md, k(c.description), 1),
              c.action !== void 0 ? (p(), d("span", {
                key: 0,
                class: "po-shrink-0 po-text-mpao-lightblue hover:po-text-mpao-blue po-transition-colors po-duration-100 po-ease-in-out po-px-2 po-cursor-pointer",
                onClick: (v) => i.$emit("button-click", c.action)
              }, k(typeof c.action == "string" ? c.action : c.action.label), 9, Td)) : x("", !0)
            ])
          ]))), 256))
        ])
      ], 2)
    ]));
  }
}), Ed = ["for"], Ad = { class: "po-capitalize" }, jd = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Rd = ["type", "name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], Fd = {
  name: "PoInputField"
}, Hd = /* @__PURE__ */ T({
  ...Fd,
  props: {
    modelValue: { default: "" },
    label: { default: "" },
    type: { default: "text" },
    display: { default: "vertical" },
    id: { default: "" },
    info: { default: "" },
    message: { default: null },
    errorMessage: { default: null },
    hasError: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    placeholder: { default: void 0 },
    borderColor: { default: "po-border-slate-300 focus:po-border-mpao-lightblue" },
    styleClasses: { default: "" },
    modelModifiers: { default: () => ({}) }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e;
    function s() {
      return o.hasError ? "po-border-red-400 focus:po-border-red-600 focus:po-ring-red-600" : o.borderColor;
    }
    let l = o.type === "currency" ? "text" : o.type;
    const n = V(void 0), a = (b) => {
      let f = b.target.value;
      n.value = f;
      let m = o.type === "currency" ? v(f) : f;
      t("update:modelValue", m);
    }, i = (b) => {
      c(b.target.value);
    }, u = I(() => o.type === "currency" && n.value !== o.modelValue ? "" + ps(o.modelValue) : o.modelValue);
    Q(u, (b) => {
      n.value = b;
    });
    const c = (b) => {
      let f = "";
      o.type === "currency" ? f = "" + ps(v("" + b)) : f = b, n.value = f;
    }, v = (b) => {
      let f = b.replace(/,/g, "");
      const m = f.indexOf(".");
      return m !== -1 && f.substring(m + 1) === "00" && (f = f.substring(0, m)), f;
    };
    o.type === "currency" ? c(o.modelValue) : n.value = o.modelValue;
    const { uniqueId: g, generateUniqueId: _ } = Le(), y = V(o.id);
    return Z(() => {
      o.id === "" && (_(), y.value = g.value);
    }), (b, f) => (p(), d("div", {
      class: L(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": b.display === "horizontal" }]])
    }, [
      r("label", {
        for: y.value,
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700"
      }, [
        r("span", Ad, k(b.label), 1),
        b.required ? (p(), d("span", jd, "*")) : x("", !0),
        C(Ne, { info: b.info }, null, 8, ["info"])
      ], 8, Ed),
      r("input", Be({
        type: S(l),
        name: `${y.value}-field`,
        id: y.value,
        value: n.value,
        placeholder: b.placeholder,
        disabled: b.disabled,
        required: b.required,
        "aria-describedby": `${y.value}-description`,
        "aria-required": b.required,
        "aria-disabled": b.disabled
      }, b.$attrs, {
        onInput: a,
        onBlur: i,
        class: [
          "po-mt-1 peer po-block po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white focus:po-ring-0 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default",
          s(),
          b.styleClasses
        ]
      }), null, 16, Rd),
      C(je, { message: b.message }, null, 8, ["message"]),
      C(Ae, { "error-message": b.errorMessage }, null, 8, ["error-message"])
    ], 2));
  }
}), Nd = { class: "po-text-sm po-font-medium po-text-slate-700 peer-focus:po-text-mpao-lightblue peer-invalid:po-text-red-500 peer-invalid:peer-focus:po-text-red-600 po-flex po-items-center po-space-x-1 po-capitalize" }, qd = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Ud = ["name", "id", "value"], Yd = ["for"], Wd = { class: "po-flex po-items-center po-space-x-1" }, Zd = {
  key: 0,
  class: "po-text-sm"
}, Gd = {
  key: 1,
  class: "po-text-sm"
}, Kd = {
  name: "PoInputFile"
}, N5 = /* @__PURE__ */ T({
  ...Kd,
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
    I(() => `width: ${o.progress}%`), I(() => o.progress);
    const s = V(""), l = (c) => {
      var g, _;
      const v = (_ = (g = c.target) == null ? void 0 : g.files) == null ? void 0 : _[0];
      s.value = v ? v.name : "";
    }, n = (c) => {
      let v = c.target.value;
      t("update:modelValue", v);
    }, { uniqueId: a, generateUniqueId: i } = Le(), u = V(o.id);
    return Z(() => {
      o.id === "" && (i(), u.value = a.value);
    }), (c, v) => (p(), d("div", {
      class: L(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": c.display === "horizontal" }]])
    }, [
      r("span", Nd, [
        r("span", null, k(c.label), 1),
        c.required ? (p(), d("span", qd, "*")) : x("", !0)
      ]),
      r("input", {
        name: `${u.value}-upload`,
        id: u.value,
        value: c.modelValue,
        type: "file",
        onInput: n,
        onChange: v[0] || (v[0] = (g) => l(g)),
        class: "po-sr-only po-peer"
      }, null, 40, Ud),
      r("label", {
        for: u.value,
        class: "po-mt-1 po-block po-w-full po-border po-cursor-pointer po-rounded-md po-border-slate-300 po-bg-white peer-focus:po-border-mpao-lightblue invalid:po-border-red-400 invalid:focus:po-border-red-600 invalid:focus:po-ring-red-600 sm:po-text-sm po-p-2"
      }, [
        r("div", Wd, [
          C(S(Fs), { class: "po-w-4 po-stroke-slate-500" }),
          s.value ? (p(), d("span", Zd, k(s.value), 1)) : (p(), d("span", Gd, "Choose file"))
        ])
      ], 8, Yd),
      C(je, { message: c.message }, null, 8, ["message"]),
      C(Ae, { "error-message": c.errorMessage }, null, 8, ["error-message"])
    ], 2));
  }
});
var To = {}, Xd = {
  get exports() {
    return To;
  },
  set exports(e) {
    To = e;
  }
};
(function(e, t) {
  (function(o, s) {
    e.exports = s();
  })(ln, function() {
    var o = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, s = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, l = /\d\d/, n = /\d\d?/, a = /\d*[^-_:/,()\s\d]+/, i = {}, u = function(f) {
      return (f = +f) + (f > 68 ? 1900 : 2e3);
    }, c = function(f) {
      return function(m) {
        this[f] = +m;
      };
    }, v = [/[+-]\d\d:?(\d\d)?|Z/, function(f) {
      (this.zone || (this.zone = {})).offset = function(m) {
        if (!m || m === "Z")
          return 0;
        var $ = m.match(/([+-]|\d\d)/g), h = 60 * $[1] + (+$[2] || 0);
        return h === 0 ? 0 : $[0] === "+" ? -h : h;
      }(f);
    }], g = function(f) {
      var m = i[f];
      return m && (m.indexOf ? m : m.s.concat(m.f));
    }, _ = function(f, m) {
      var $, h = i.meridiem;
      if (h) {
        for (var O = 1; O <= 24; O += 1)
          if (f.indexOf(h(O, 0, m)) > -1) {
            $ = O > 12;
            break;
          }
      } else
        $ = f === (m ? "pm" : "PM");
      return $;
    }, y = { A: [a, function(f) {
      this.afternoon = _(f, !1);
    }], a: [a, function(f) {
      this.afternoon = _(f, !0);
    }], S: [/\d/, function(f) {
      this.milliseconds = 100 * +f;
    }], SS: [l, function(f) {
      this.milliseconds = 10 * +f;
    }], SSS: [/\d{3}/, function(f) {
      this.milliseconds = +f;
    }], s: [n, c("seconds")], ss: [n, c("seconds")], m: [n, c("minutes")], mm: [n, c("minutes")], H: [n, c("hours")], h: [n, c("hours")], HH: [n, c("hours")], hh: [n, c("hours")], D: [n, c("day")], DD: [l, c("day")], Do: [a, function(f) {
      var m = i.ordinal, $ = f.match(/\d+/);
      if (this.day = $[0], m)
        for (var h = 1; h <= 31; h += 1)
          m(h).replace(/\[|\]/g, "") === f && (this.day = h);
    }], M: [n, c("month")], MM: [l, c("month")], MMM: [a, function(f) {
      var m = g("months"), $ = (g("monthsShort") || m.map(function(h) {
        return h.slice(0, 3);
      })).indexOf(f) + 1;
      if ($ < 1)
        throw new Error();
      this.month = $ % 12 || $;
    }], MMMM: [a, function(f) {
      var m = g("months").indexOf(f) + 1;
      if (m < 1)
        throw new Error();
      this.month = m % 12 || m;
    }], Y: [/[+-]?\d+/, c("year")], YY: [l, function(f) {
      this.year = u(f);
    }], YYYY: [/\d{4}/, c("year")], Z: v, ZZ: v };
    function b(f) {
      var m, $;
      m = f, $ = i && i.formats;
      for (var h = (f = m.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(D, P, A) {
        var q = A && A.toUpperCase();
        return P || $[A] || o[A] || $[q].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(N, U, W) {
          return U || W.slice(1);
        });
      })).match(s), O = h.length, w = 0; w < O; w += 1) {
        var M = h[w], z = y[M], R = z && z[0], B = z && z[1];
        h[w] = B ? { regex: R, parser: B } : M.replace(/^\[|\]$/g, "");
      }
      return function(D) {
        for (var P = {}, A = 0, q = 0; A < O; A += 1) {
          var N = h[A];
          if (typeof N == "string")
            q += N.length;
          else {
            var U = N.regex, W = N.parser, Y = D.slice(q), X = U.exec(Y)[0];
            W.call(P, X), D = D.replace(X, "");
          }
        }
        return function(ce) {
          var J = ce.afternoon;
          if (J !== void 0) {
            var $e = ce.hours;
            J ? $e < 12 && (ce.hours += 12) : $e === 12 && (ce.hours = 0), delete ce.afternoon;
          }
        }(P), P;
      };
    }
    return function(f, m, $) {
      $.p.customParseFormat = !0, f && f.parseTwoDigitYear && (u = f.parseTwoDigitYear);
      var h = m.prototype, O = h.parse;
      h.parse = function(w) {
        var M = w.date, z = w.utc, R = w.args;
        this.$u = z;
        var B = R[1];
        if (typeof B == "string") {
          var D = R[2] === !0, P = R[3] === !0, A = D || P, q = R[2];
          P && (q = R[2]), i = this.$locale(), !D && q && (i = $.Ls[q]), this.$d = function(Y, X, ce) {
            try {
              if (["x", "X"].indexOf(X) > -1)
                return new Date((X === "X" ? 1e3 : 1) * Y);
              var J = b(X)(Y), $e = J.year, Re = J.month, Me = J.day, qe = J.hours, Te = J.minutes, De = J.seconds, Qe = J.milliseconds, Je = J.zone, Pe = new Date(), et = Me || ($e || Re ? 1 : Pe.getDate()), wt = $e || Pe.getFullYear(), Ue = 0;
              $e && !Re || (Ue = Re > 0 ? Re - 1 : Pe.getMonth());
              var _t = qe || 0, ut = Te || 0, $t = De || 0, xt = Qe || 0;
              return Je ? new Date(Date.UTC(wt, Ue, et, _t, ut, $t, xt + 60 * Je.offset * 1e3)) : ce ? new Date(Date.UTC(wt, Ue, et, _t, ut, $t, xt)) : new Date(wt, Ue, et, _t, ut, $t, xt);
            } catch {
              return new Date("");
            }
          }(M, B, z), this.init(), q && q !== !0 && (this.$L = this.locale(q).$L), A && M != this.format(B) && (this.$d = new Date("")), i = {};
        } else if (B instanceof Array)
          for (var N = B.length, U = 1; U <= N; U += 1) {
            R[1] = B[U - 1];
            var W = $.apply(this, R);
            if (W.isValid()) {
              this.$d = W.$d, this.$L = W.$L, this.init();
              break;
            }
            U === N && (this.$d = new Date(""));
          }
        else
          O.call(this, w);
      };
    };
  });
})(Xd);
const Qd = To, Jd = ["for"], ec = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, tc = { class: "po-relative po-mt-1" }, oc = {
  role: "button",
  ref: "comboboxButton"
}, sc = ["disabled", "id"], lc = { class: "po-flex po-items-center po-justify-between po-w-full po-px-2 po-pb-1" }, nc = {
  class: "po-p-2 po-rounded-md hover:po-bg-slate-100 po-cursor-pointer po-transition-colors po-duration-150 po-ease-out po-text-sm po-slate-600 po-select-none",
  role: "button"
}, ac = /* @__PURE__ */ r("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), rc = { class: "po-grid po-grid-cols-3 po-p-1" }, ic = { class: "" }, pc = ["onClick"], uc = {
  name: "PoMonthYearPicker"
}, q5 = /* @__PURE__ */ T({
  ...uc,
  props: {
    modelValue: { default: null },
    label: { default: "" },
    minDate: { default: ne().subtract(10, "year").format("DD-MM-YYYY") },
    maxDate: { default: ne().add(10, "year").format("DD-MM-YYYY") },
    id: { default: "" },
    info: { default: "" },
    displayFormat: { default: "MM-YYYY" },
    display: { default: "vertical" },
    required: { type: Boolean, default: !1 },
    message: { default: null },
    errorMessage: { default: null },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e;
    ne.extend(nn), ne.extend(an), ne.extend(Qd), ne.tz.setDefault("Indian/Maldives");
    const s = V(""), l = V(!1), n = V(), a = V(null), i = V(ne().year()), u = V(ne().month()), { uniqueId: c, generateUniqueId: v } = Le(), g = V(o.id), _ = V(), y = V({
      viewStartIdx: 0,
      viewEndIdx: 0,
      visibleStartIdx: 0,
      visibleEndIdx: 0
    });
    let b;
    Z(() => {
      if (o.modelValue) {
        const D = ne(`02-${o.modelValue + 1}`, "DD-MM-YYYY");
        s.value = o.modelValue, u.value = D.month() + 1, i.value = D.year();
      }
      o.id === "" && (v(), g.value = c.value), b = zt(n.value, _.value, {
        placement: "bottom-end",
        strategy: "fixed",
        modifiers: [
          {
            name: "sameWidth",
            enabled: !0,
            fn: ({ state: D }) => {
              D.styles.popper.width = `${D.rects.reference.width}px`;
            },
            phase: "beforeWrite",
            requires: ["computeStyles"]
          }
        ]
      });
    });
    const f = I(() => i.value === ne(o.minDate, "DD-MM-YYYY").year()), m = I(() => i.value === ne(o.maxDate, "DD-MM-YYYY").year()), $ = I(() => {
      if (s.value !== "")
        return ne(`02-${s.value}`, "DD-MM-YYYY").format(
          o.displayFormat
        );
    });
    I(() => {
      const D = ne(o.minDate, "DD-MM-YYYY").year(), P = ne(o.maxDate, "DD-MM-YYYY").year();
      return Array.from(
        { length: P - D + 1 },
        (A, q) => D + q
      );
    });
    const h = I(() => Array.from({ length: 12 }, (D, P) => ({
      number: P + 1,
      year: i.value,
      value: `${ne(`${P + 1}-23-2023`).format("MM")}-${i.value}`,
      name: ne().month(P).format("MMM"),
      disabled: f.value && P + 1 < ne(o.minDate, "DD-MM-YYYY").month() + 1 || m.value && P + 1 > ne(o.maxDate, "DD-MM-YYYY").month() + 1
    })));
    function O(D) {
      return s.value === D.value;
    }
    function w() {
      i.value !== ne(o.maxDate, "DD-MM-YYYY").year() && (i.value = ne(`01-01-${i.value}`, "DD-MM-YYYY").add(1, "year").year());
    }
    function M() {
      i.value !== ne(o.minDate, "DD-MM-YYYY").year() && (i.value = ne(`01-01-${i.value}`, "DD-MM-YYYY").subtract(1, "year").year());
    }
    function z(D) {
      D.disabled || (s.value = D.value, u.value = D.number, i.value = D.year, t("update:modelValue", D.value));
    }
    Et(a, () => {
      l.value = !1;
    }), xe.on("sidebarOpen", (D) => {
      setTimeout(() => {
        b && b.update();
      }, 320);
    }), re(() => {
      b && b.destroy();
    });
    function R(D, P, A, q) {
      y.value.viewStartIdx = D, y.value.viewEndIdx = P, y.value.visibleStartIdx = A, y.value.visibleEndIdx = q;
    }
    function B() {
      b && b.update();
    }
    return (D, P) => (p(), d("div", {
      class: L([{ "lg:po-grid lg:po-grid-cols-2": D.display === "horizontal" }]),
      ref_key: "containerRef",
      ref: a
    }, [
      r("label", {
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700",
        for: g.value
      }, [
        r("span", null, k(D.label), 1),
        D.required ? (p(), d("span", ec, "*")) : x("", !0),
        C(Ne, { info: D.info }, null, 8, ["info"])
      ], 8, Jd),
      r("div", tc, [
        r("div", oc, [
          Oe(r("input", {
            type: "text",
            ref_key: "selectBox",
            ref: n,
            readonly: "",
            class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm",
            disabled: D.disabled,
            "onUpdate:modelValue": P[0] || (P[0] = (A) => $.value = A),
            onFocus: P[1] || (P[1] = (A) => l.value = !0),
            id: g.value
          }, null, 40, sc), [
            [Mt, $.value]
          ]),
          r("span", {
            class: "po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-rounded-r-md po-px-2 focus:po-outline-none",
            role: "button",
            onMousedown: P[2] || (P[2] = te((A) => l.value = !l.value, ["stop"]))
          }, [
            C(S(Gi), {
              class: "po-h-5 po-w-5 po-text-slate-400",
              "aria-hidden": "true"
            })
          ], 32)
        ], 512),
        Oe(r("div", {
          ref_key: "popper",
          ref: _,
          class: "po-absolute po-z-10 po-mt-1 po-w-full po-rounded-md po-max-w-[290px] po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm",
          onResize: B,
          onUpdate: R
        }, [
          r("div", lc, [
            r("span", {
              class: "po-p-2 po-rounded-md hover:po-bg-slate-100 po-cursor-pointer po-transition-colors po-duration-150 po-ease-out po-select-none",
              role: "button",
              onClick: M
            }, [
              C(S(As), { class: "po-w-4 po-stroke-slate-500 po-stroke-2" })
            ]),
            r("span", nc, k(i.value), 1),
            r("span", {
              class: "po-p-2 po-rounded-md hover:po-bg-slate-100 po-cursor-pointer po-transition-colors po-duration-150 po-ease-out po-select-none",
              role: "button",
              onClick: w
            }, [
              C(S(js), { class: "po-w-4 po-stroke-slate-500 po-stroke-2" })
            ])
          ]),
          ac,
          r("div", rc, [
            (p(!0), d(F, null, G(h.value, (A) => (p(), d("div", ic, [
              r("span", {
                class: L(["po-flex po-items-center po-justify-center po-py-2 po-px-2 po-group", [{ "po-cursor-pointer": !A.disabled }]]),
                onClick: (q) => z(A)
              }, [
                r("span", {
                  class: L(["po-px-4 po-text-sm po-py-1 po-rounded-full po-text-center po-transition-colors po-duration-150 po-ease-out", [
                    {
                      " po-text-slate-600 group-hover:po-bg-slate-100": !O(A) && !A.disabled
                    },
                    {
                      "po-cursor-default po-select-none po-text-slate-400": A.disabled
                    },
                    {
                      " po-text-white po-bg-mpao-lightblue group-hover:po-bg-purple-600": O(A)
                    }
                  ]])
                }, k(A.name), 3)
              ], 10, pc)
            ]))), 256))
          ])
        ], 544), [
          [Tt, l.value]
        ])
      ]),
      C(je, { message: D.message }, null, 8, ["message"]),
      C(Ae, { "error-message": D.errorMessage }, null, 8, ["error-message"])
    ], 2));
  }
}), dc = { class: "po-text-sm po-font-medium po-text-slate-700 po-cursor-pointer po-select-none po-flex po-items-center po-space-x-1" }, cc = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, fc = {
  name: "PoToggle"
}, U5 = /* @__PURE__ */ T({
  ...fc,
  props: {
    modelValue: { type: Boolean, default: !1 },
    label: { default: "" },
    required: { type: Boolean, default: !1 },
    info: { default: "" },
    message: { default: null },
    errorMessage: { default: null }
  },
  setup(e) {
    const o = V(e.modelValue);
    return (s, l) => (p(), d("div", null, [
      C(S(Tr), {
        as: "div",
        class: "po-flex po-items-center"
      }, {
        default: E(() => [
          C(S(Dr), {
            modelValue: o.value,
            "onUpdate:modelValue": l[0] || (l[0] = (n) => o.value = n),
            onClick: l[1] || (l[1] = (n) => s.$emit("update:modelValue", !o.value)),
            class: L([
              o.value ? "po-bg-mpao-lightblue" : "po-bg-slate-200",
              "po-relative po-inline-flex po-h-6 po-w-11 po-flex-shrink-0 po-cursor-pointer po-rounded-full po-border-2 po-border-transparent po-transition-colors po-duration-200 po-ease-in-out focus:po-outline-none focus:po-ring-2 focus:po-ring-mpao-lightblue focus:po-ring-offset-2"
            ])
          }, {
            default: E(() => [
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
          C(S(Br), {
            as: "span",
            class: "po-ml-3"
          }, {
            default: E(() => [
              r("span", dc, [
                r("span", null, k(s.label), 1),
                s.required ? (p(), d("span", cc, "*")) : x("", !0),
                C(Ne, { info: s.info }, null, 8, ["info"])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      C(je, { message: s.message }, null, 8, ["message"]),
      C(Ae, { "error-message": s.errorMessage }, null, 8, ["error-message"])
    ]));
  }
}), vc = { class: "po-pt-1 po-space-y-1 po-border-r-2 po-border-slate-200 po-relative" }, hc = ["onClick"], mc = {
  name: "PoSectionMenu"
}, Y5 = /* @__PURE__ */ T({
  ...mc,
  props: {
    currPageRoute: { default: "" },
    menuItems: { default: null }
  },
  emits: ["link-click"],
  setup(e, { emit: t }) {
    return (o, s) => (p(), d("ul", vc, [
      (p(!0), d(F, null, G(o.menuItems, (l) => (p(), d("li", null, [
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
          (p(), H(fe(l.icon), { class: "po-w-4 po-h-4 po-stroke-current" })),
          r("span", null, k(l.label), 1)
        ], 10, hc)
      ]))), 256))
    ]));
  }
}), bc = { class: "po-relative po-flex po-items-start" }, gc = { class: "po-flex po-h-5 po-items-center" }, yc = ["name", "id", "checked", "disabled", "aria-describedby"], wc = { class: "po-ml-3 po-text-sm" }, _c = ["for"], $c = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, xc = ["id"], Vc = { class: "po-sr-only" }, kc = ["id"], Cc = {
  name: "PoCheckbox"
}, W5 = /* @__PURE__ */ T({
  ...Cc,
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
      r("div", bc, [
        r("div", gc, [
          r("input", Be({
            name: `${o.id}-field`,
            id: o.id,
            checked: o.modelValue,
            disabled: o.disabled,
            "aria-describedby": `${o.id}-description`
          }, o.$attrs, {
            onInput: s[0] || (s[0] = (l) => o.$emit("update:modelValue", l.target.checked)),
            type: "checkbox",
            class: ["po-h-4 po-w-4 po-rounded po-border-slate-300 po-text-mpao-lightblue focus:po-ring-mpao-lightblue", [{ "po-bg-slate-200": o.disabled }]]
          }), null, 16, yc)
        ]),
        r("div", wc, [
          r("label", {
            for: o.id,
            class: "po-font-medium po-text-slate-600 po-cursor-pointer po-select-none po-flex po-items-center po-space-x-1"
          }, [
            r("span", null, k(o.label), 1),
            o.required ? (p(), d("span", $c, "*")) : x("", !0)
          ], 8, _c),
          o.message ? (p(), d("span", {
            key: 0,
            id: `${o.id}-description`,
            class: "po-text-slate-500 po-cursor-default"
          }, [
            r("span", Vc, k(o.label), 1),
            ee(" " + k(o.message), 1)
          ], 8, xc)) : x("", !0)
        ])
      ]),
      o.errorMessage !== null ? (p(), d("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${o.id}-error`
      }, k(o.errorMessage), 9, kc)) : x("", !0)
    ]));
  }
});
function Sc(e, t) {
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
function Pc(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", { d: "M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" })
  ]);
}
function Oc(e, t) {
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
const Lc = /* @__PURE__ */ r("div", { class: "po-pb-5 po-max-w-xl" }, [
  /* @__PURE__ */ r("span", { class: "po-text-sm po-text-slate-600" }, "We're always working to improve our app, and we're excited to share the latest changes with you. We hope you enjoy these new features and improvements")
], -1), Mc = { class: "po-flex po-space-x-2" }, Tc = ["onClick"], Dc = { class: "po-text-sm po-font-semibold po-slate-800" }, Bc = { class: "po-text-sm po-font-semibold po-pl-1 po-text-mpao-lightblue" }, Ic = { class: "-po-mb-5 -po-mx-5 po-p-5 po-pb-10 po-border-t po-border-slate-300 po-bg-slate-50" }, zc = { key: 0 }, Ec = { class: "po-space-y-2" }, Ac = { class: "po-pb-4" }, jc = { class: "po-flex po-items-center po-space-x-2" }, Rc = { class: "po-shrink-0" }, Fc = { class: "po-shrink-0 po-text-xs po-flex po-items-center po-space-x-1 po-text-slate-600" }, Hc = /* @__PURE__ */ r("span", { class: "po-shrink-0" }, "Updated on", -1), Nc = { class: "po-font-medium" }, qc = /* @__PURE__ */ r("span", { class: "po-shrink-0" }, "Version", -1), Uc = { class: "po-font-semibold po-shrink-0 po-text-xs po-px-1 po-rounded-xl po-bg-white" }, Yc = ["innerHTML"], Wc = {
  key: 0,
  class: "po-bg-white po-border po-border-slate-200 po-rounded-md po-px-4 po-py-3 po-block po-text-sm po-text-center po-text-mpao-lightblue hover:po-text-purple-600 po-cursor-pointer"
}, Zc = /* @__PURE__ */ T({
  __name: "ChangeLogModel",
  props: {
    changelog: { default: null },
    showBtn: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = V(!1), o = V(0);
    return (s, l) => (p(), d(F, null, [
      s.showBtn ? (p(), d("a", {
        key: 0,
        href: "#",
        onClick: l[0] || (l[0] = te((n) => t.value = !0, ["prevent"])),
        class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
      }, "Change logs")) : x("", !0),
      C(Ft, {
        show: t.value,
        onModalClosed: l[1] || (l[1] = (n) => t.value = !1),
        "modal-title": "Change Log",
        "modal-width": "sm:po-max-w-4xl",
        id: "change-log-modal"
      }, {
        content: E(() => [
          r("div", null, [
            Lc,
            r("div", Mc, [
              (p(!0), d(F, null, G(s.changelog, (n, a) => (p(), d("span", {
                class: L(["po-flex po-items-center po-space-x-1 po-px-4 po-py-3 po-rounded-t-xl po-cursor-pointer po-border-b", [
                  { "po-border-mpao-lightblue": o.value === a },
                  { "po-border-white": o.value !== a }
                ]]),
                onClick: (i) => o.value = a
              }, [
                r("span", Dc, k(n.label) + " Version", 1),
                r("span", Bc, k(n.latest_version), 1)
              ], 10, Tc))), 256))
            ]),
            r("div", Ic, [
              (p(!0), d(F, null, G(s.changelog, (n, a) => (p(), d("div", null, [
                o.value === a ? (p(), d("div", zc, [
                  r("div", Ec, [
                    (p(!0), d(F, null, G(n.version_history, (i) => (p(), d("div", Ac, [
                      r("span", jc, [
                        r("span", Rc, [
                          C(S(Wi), { class: "po-w-5 po-fill-sky-500" })
                        ]),
                        r("span", Fc, [
                          Hc,
                          C(S(Zi), { class: "po-w-4 po-fill-current" }),
                          r("span", Nc, k(i.date) + ".", 1),
                          qc
                        ]),
                        r("span", Uc, k(i.version), 1)
                      ]),
                      r("div", {
                        class: "po-mt-2 po-ml-2 po-prose-sm po-prose-slate prose-p:po-text-slate-600 prose-ul:po-text-slate-600 prose-ul:po-list-disc prose-p:po-mb-2 prose-ul:po-mt-1 prose-p:po-mt-2 po-rounded-xl po-p-3 po-bg-white",
                        innerHTML: i.note
                      }, null, 8, Yc)
                    ]))), 256)),
                    n.hasMore ? (p(), d("span", Wc, "More")) : x("", !0)
                  ])
                ])) : x("", !0)
              ]))), 256))
            ])
          ])
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ht = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [s, l] of t)
    o[s] = l;
  return o;
}, Gc = {}, Kc = {
  class: "po-h-8",
  src: "https://pension.gov.mv/asset/image/en-ccc-2020-issa.png",
  alt: "issa Certificate"
};
function Xc(e, t) {
  return p(), d("img", Kc);
}
const Qc = /* @__PURE__ */ Ht(Gc, [["render", Xc]]), Jc = {}, e1 = {
  class: "po-h-8",
  src: "https://pension.gov.mv/asset/image/iso_logo.png",
  alt: "ISO 27001 Certificate"
};
function t1(e, t) {
  return p(), d("img", e1);
}
const o1 = /* @__PURE__ */ Ht(Jc, [["render", t1]]), s1 = { class: "-po-m-5" }, l1 = ["src", "alt"], Bs = /* @__PURE__ */ T({
  __name: "CertificateModel",
  props: {
    src: { default: "" },
    title: { default: "" },
    logo: { default: null }
  },
  setup(e) {
    const t = V(!1);
    return (o, s) => (p(), d(F, null, [
      (p(), H(fe(o.logo), {
        onClick: s[0] || (s[0] = te((l) => t.value = !0, ["prevent"])),
        class: "po-cursor-pointer",
        role: "button"
      })),
      C(Ft, {
        show: t.value,
        onModalClosed: s[1] || (s[1] = (l) => t.value = !1),
        "modal-title": o.title,
        "modal-width": "sm:po-max-w-4xl",
        id: "change-log-modal"
      }, {
        content: E(() => [
          r("div", s1, [
            r("img", {
              src: o.src,
              alt: o.title
            }, null, 8, l1)
          ])
        ]),
        _: 1
      }, 8, ["show", "modal-title"])
    ], 64));
  }
}), n1 = {}, a1 = { class: "po-prose-sm po-prose-slate prose-p:po-text-slate-600 prose-h3:po-text-slate-700 prose-h3:po-text-base prose-h3:po-font-medium po-p-5 po-opacity-8" };
function r1(e, t) {
  return p(), d("div", a1, [
    K(e.$slots, "default")
  ]);
}
const Fl = /* @__PURE__ */ Ht(n1, [["render", r1]]), i1 = /* @__PURE__ */ r("h2", { class: "po-text-red-500" }, "Sample Terms and Conditions", -1), p1 = /* @__PURE__ */ r("h3", null, "1. Acceptance of Terms", -1), u1 = /* @__PURE__ */ r("p", null, " By accessing and using this web app, you agree to be bound by these terms and conditions. ", -1), d1 = /* @__PURE__ */ r("h3", null, "2. User Responsibilities", -1), c1 = /* @__PURE__ */ r("p", null, " Users are responsible for maintaining the confidentiality of their account information and complying with all applicable laws. ", -1), f1 = /* @__PURE__ */ r("h3", null, "3. Privacy Policy", -1), v1 = /* @__PURE__ */ r("p", null, [
  /* @__PURE__ */ ee(" Our privacy policy outlines how we collect, use, and protect your personal information. Please review our "),
  /* @__PURE__ */ r("a", { href: "privacy.html" }, "Privacy Policy"),
  /* @__PURE__ */ ee(" for more details. ")
], -1), h1 = /* @__PURE__ */ r("h3", null, "4. Intellectual Property", -1), m1 = /* @__PURE__ */ r("p", null, " All content and materials provided on this web app are protected by intellectual property laws. Unauthorized use is prohibited. ", -1), b1 = /* @__PURE__ */ r("h3", null, "5. Limitation of Liability", -1), g1 = /* @__PURE__ */ r("p", null, " We are not liable for any damages or losses incurred from the use of this web app, including but not limited to, errors, omissions, or interruptions. ", -1), y1 = /* @__PURE__ */ r("h3", null, "6. Modification of Terms", -1), w1 = /* @__PURE__ */ r("p", null, " We reserve the right to modify or update these terms and conditions at any time without prior notice. It is your responsibility to review them periodically. ", -1), _1 = /* @__PURE__ */ r("h3", null, "7. Governing Law", -1), $1 = /* @__PURE__ */ r("p", null, " These terms and conditions shall be governed by and construed in accordance with the laws of your jurisdiction. ", -1), x1 = /* @__PURE__ */ r("h3", null, "8. Contact Us", -1), V1 = /* @__PURE__ */ r("p", null, [
  /* @__PURE__ */ ee(" If you have any questions or concerns about these terms and conditions, please contact us at "),
  /* @__PURE__ */ r("a", { href: "mailto:info@pension.gov.mv" }, "info@pension.gov.mv"),
  /* @__PURE__ */ ee(". ")
], -1), k1 = /* @__PURE__ */ T({
  __name: "ToCModel",
  setup(e) {
    const t = V(!1);
    return (o, s) => (p(), d(F, null, [
      r("a", {
        href: "#",
        onClick: s[0] || (s[0] = te((l) => t.value = !0, ["prevent"])),
        role: "button",
        class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
      }, "Terms & Conditions"),
      C(Ft, {
        show: t.value,
        onModalClosed: s[1] || (s[1] = (l) => t.value = !1),
        "modal-title": "Terms & Conditions",
        "modal-width": "sm:po-max-w-3xl",
        id: "change-log-modal"
      }, {
        content: E(() => [
          C(Fl, null, {
            default: E(() => [
              i1,
              p1,
              u1,
              d1,
              c1,
              f1,
              v1,
              h1,
              m1,
              b1,
              g1,
              y1,
              w1,
              _1,
              $1,
              x1,
              V1
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), C1 = /* @__PURE__ */ r("h2", { class: "po-text-red-500" }, "Sample Privacy Policy", -1), S1 = /* @__PURE__ */ r("h3", null, "1. Information Collection", -1), P1 = /* @__PURE__ */ r("p", null, " We may collect personal information such as name, contact details, and pension-related data necessary for providing our services. ", -1), O1 = /* @__PURE__ */ r("h3", null, "2. Use of Information", -1), L1 = /* @__PURE__ */ r("p", null, " The collected information is used for the purpose of administering pensions, processing applications, and communicating with users. ", -1), M1 = /* @__PURE__ */ r("h3", null, "3. Data Security", -1), T1 = /* @__PURE__ */ r("p", null, " We implement appropriate security measures to protect personal information from unauthorized access, alteration, or disclosure. ", -1), D1 = /* @__PURE__ */ r("h3", null, "4. Third-Party Disclosure", -1), B1 = /* @__PURE__ */ r("p", null, " We may share personal information with trusted third parties only to the extent necessary for pension administration purposes. ", -1), I1 = /* @__PURE__ */ r("h3", null, "5. Cookies and Tracking", -1), z1 = /* @__PURE__ */ r("p", null, " We use cookies and similar technologies to enhance user experience and collect non-personal information about website usage. ", -1), E1 = /* @__PURE__ */ r("h3", null, "6. Data Retention", -1), A1 = /* @__PURE__ */ r("p", null, " We retain personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law. ", -1), j1 = /* @__PURE__ */ r("h3", null, "7. User Rights", -1), R1 = /* @__PURE__ */ r("p", null, " Users have the right to access, update, and delete their personal information. Please contact us to exercise these rights. ", -1), F1 = /* @__PURE__ */ r("h3", null, "8. Children's Privacy", -1), H1 = /* @__PURE__ */ r("p", null, " This web app is not intended for children under the age of 13. We do not knowingly collect or store personal information from children. ", -1), N1 = /* @__PURE__ */ r("h3", null, "9. Changes to Privacy Policy", -1), q1 = /* @__PURE__ */ r("p", null, " We reserve the right to modify or update this privacy policy at any time. Users will be notified of any significant changes. ", -1), U1 = /* @__PURE__ */ r("h3", null, "8. Contact Us", -1), Y1 = /* @__PURE__ */ r("p", null, [
  /* @__PURE__ */ ee(" If you have any questions or concerns about our privacy policy, please contact us at "),
  /* @__PURE__ */ r("a", { href: "mailto:info@pension.gov.mv" }, "info@pension.gov.mv"),
  /* @__PURE__ */ ee(". ")
], -1), W1 = /* @__PURE__ */ T({
  __name: "PrivacyPolicyModel",
  setup(e) {
    const t = V(!1);
    return (o, s) => (p(), d(F, null, [
      r("a", {
        href: "#",
        onClick: s[0] || (s[0] = te((l) => t.value = !0, ["prevent"])),
        role: "button",
        class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
      }, "Privacy Policy"),
      C(Ft, {
        show: t.value,
        onModalClosed: s[1] || (s[1] = (l) => t.value = !1),
        "modal-title": "Privacy Policy",
        "modal-width": "sm:po-max-w-3xl",
        id: "change-log-modal"
      }, {
        content: E(() => [
          C(Fl, null, {
            default: E(() => [
              C1,
              S1,
              P1,
              O1,
              L1,
              M1,
              T1,
              D1,
              B1,
              I1,
              z1,
              E1,
              A1,
              j1,
              R1,
              F1,
              H1,
              N1,
              q1,
              U1,
              Y1
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Z1 = { class: "po-grid po-gap-5 po-grid-cols-1 lg:po-grid-cols-2 po-px-6 lg:po-px-8 po-mt-10 po-pb-10" }, G1 = { class: "sm:po-flex po-items-start sm:po-space-x-5" }, K1 = /* @__PURE__ */ r("svg", {
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
], -1), X1 = { class: "po-mt-5 sm:po-mt-0" }, Q1 = /* @__PURE__ */ r("p", { class: "-po-mt-1 po-text-xs po-text-slate-500" }, " 8th Floor, Allied Building , Chaandhanee Magu, Malé, 20156, Maldives ", -1), J1 = { class: "po-mt-1 po-text-xs po-text-slate-500" }, e0 = { class: "po-mt-1 po-text-xs po-text-slate-500 po-flex -po-mb-2 po-flex-wrap" }, t0 = {
  href: "https://www.pension.gov.mv",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, o0 = /* @__PURE__ */ r("span", null, "www.pension.gov.mv", -1), s0 = {
  href: "mailto:info@pension.gov.mv",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, l0 = /* @__PURE__ */ r("span", null, "info@pension.gov.mv", -1), n0 = {
  href: "tel:1441",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, a0 = /* @__PURE__ */ r("span", null, "1441", -1), r0 = { class: "po-flex lg:po-items-end po-flex-col" }, i0 = { class: "-po-mt-1 po-text-xs po-text-slate-500 po-flex -po-mb-2 po-flex-wrap" }, p0 = { class: "po-flex po-space-x-2 po-mt-3 lg:po-justify-end" }, u0 = {
  name: "PoFooter"
}, Z5 = /* @__PURE__ */ T({
  ...u0,
  props: {
    changelog: { default: null }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, s) => (p(), d("div", null, [
      r("section", Z1, [
        r("div", G1, [
          K1,
          r("div", X1, [
            Q1,
            r("p", J1, " © " + k(new Date().getFullYear()) + " Pension Office, All Rights Reserved. ", 1),
            r("p", e0, [
              r("a", t0, [
                C(S(Pc), { class: "po-w-3 po-h-3 po-fill-current" }),
                o0
              ]),
              r("a", s0, [
                C(S(Sc), { class: "po-w-3 po-h-3 po-fill-current" }),
                l0
              ]),
              r("a", n0, [
                C(S(Oc), { class: "po-w-3 po-h-3 po-fill-current" }),
                a0
              ])
            ])
          ])
        ]),
        r("div", r0, [
          r("nav", i0, [
            C(Zc, {
              "show-btn": o.changelog !== null,
              changelog: o.changelog
            }, null, 8, ["show-btn", "changelog"]),
            C(k1),
            C(W1)
          ]),
          r("div", p0, [
            C(Bs, {
              logo: o1,
              title: "ISO/IEC 27001:2013 Certificate",
              src: ""
            }),
            C(Bs, {
              logo: Qc,
              title: "issa Certificate",
              src: ""
            })
          ])
        ])
      ])
    ]));
  }
}), d0 = { class: "po-text-sm po-text-red-700" }, c0 = {
  key: 0,
  class: "po-text-sm po-text-red-800 po-list-disc po-ml-5 po-mt-2"
}, f0 = {
  key: 1,
  class: "po-flex po-items-start po-space-x-3 po-p-5 po-bg-green-50 po-rounded-md po-mt-5"
}, v0 = { class: "po-text-sm po-text-green-700" }, h0 = {
  name: "PoFormStatusMessage"
}, G5 = /* @__PURE__ */ T({
  ...h0,
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
      C(S(wo), { class: "po-shrink-0 po-w-6 po-stroke-red-600" }),
      r("div", null, [
        r("span", d0, k(t.message), 1),
        t.errorList !== null ? (p(), d("ul", c0, [
          (p(!0), d(F, null, G(t.errorList, (s) => (p(), d("li", null, k(s), 1))), 256))
        ])) : x("", !0)
      ])
    ], 2)) : (p(), d("div", f0, [
      C(S(hn), { class: "po-w-6 po-stroke-green-600" }),
      r("div", null, [
        r("span", v0, k(t.message), 1)
      ])
    ]));
  }
}), m0 = {
  key: 0,
  class: "po-text-lg po-text-red-400 po-font-semibold"
}, b0 = ["id"], g0 = { class: "po-flex po-flex-1" }, y0 = { class: "po-flex po-flex-col" }, w0 = {
  name: "PoRadioInput"
}, K5 = /* @__PURE__ */ T({
  ...w0,
  props: {
    modelValue: { default: null },
    options: { default: null },
    label: { default: "" },
    id: { default: "" },
    info: { default: "" },
    display: { default: "vertical" },
    required: { type: Boolean, default: !1 },
    errorMessage: { default: null },
    message: { default: null }
  },
  emits: ["selected", "unSelected", "update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, s = V();
    s.value = o.modelValue;
    const { uniqueId: l, generateUniqueId: n } = Le(), a = V(o.id);
    return Z(() => {
      o.id === "" && (n(), a.value = l.value);
    }), Io(() => {
      s.value = o.modelValue;
    }), Q(s, () => {
      t("update:modelValue", s.value), t("selected", s.value);
    }), (i, u) => (p(), H(S(Pr), {
      modelValue: s.value,
      "onUpdate:modelValue": u[0] || (u[0] = (c) => s.value = c),
      class: L([{ "lg:po-grid lg:po-grid-cols-2": i.display === "horizontal" }])
    }, {
      default: E(() => [
        C(S(Cs), {
          class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700",
          for: a.value
        }, {
          default: E(() => [
            r("span", null, k(i.label), 1),
            i.required ? (p(), d("span", m0, "*")) : x("", !0),
            C(Ne, { info: i.info }, null, 8, ["info"])
          ]),
          _: 1
        }, 8, ["for"]),
        i.options !== null ? (p(), d("div", {
          key: 0,
          class: "po-mt-1 po-flex -po-mb-3 po-flex-wrap",
          id: a.value
        }, [
          (p(!0), d(F, null, G(i.options, (c) => (p(), H(S(Lr), {
            as: "template",
            key: c.id,
            value: c.id
          }, {
            default: E(({ checked: v, active: g }) => [
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
                    v ? "po-border-mpao-lightblue" : "po-border-slate-400"
                  ]])
                }, [
                  r("span", {
                    class: L(["po-w-3 po-h-3 po-rounded-full", [
                      "",
                      v ? "po-bg-mpao-lightblue" : "po-bg-transparent"
                    ]])
                  }, null, 2)
                ], 2),
                r("span", g0, [
                  r("span", y0, [
                    C(S(Cs), {
                      as: "span",
                      class: "po-block po-text-sm po-font-medium po-text-gray-900"
                    }, {
                      default: E(() => [
                        ee(k(c.title), 1)
                      ]),
                      _: 2
                    }, 1024),
                    c.description ? (p(), H(S(Mr), {
                      key: 0,
                      as: "span",
                      class: "po-mt-1 po-flex po-items-center po-text-sm po-text-gray-500"
                    }, {
                      default: E(() => [
                        ee(k(c.description), 1)
                      ]),
                      _: 2
                    }, 1024)) : x("", !0)
                  ])
                ])
              ], 2)
            ]),
            _: 2
          }, 1032, ["value"]))), 128))
        ], 8, b0)) : x("", !0),
        r("div", null, [
          C(je, { message: i.message }, null, 8, ["message"]),
          C(Ae, { "error-message": i.errorMessage }, null, 8, ["error-message"])
        ])
      ]),
      _: 1
    }, 8, ["modelValue", "class"]));
  }
}), _0 = { class: "po-bg-white po-relative po-group po-rounded-xl po-border po-border-slate-200 focus-within:po-ring-2 focus-within:po-ring-inset focus-within:po-ring-indigo-500" }, $0 = { class: "po-block po-p-4 po-transition-colors po-duration-75 po-ease-linear" }, x0 = { class: "po-flex po-items-start po-space-x-2" }, V0 = { class: "po-flex po-items-start po-space-x-1" }, k0 = { class: "po-block po-text-2xl po-font-light po-text-slate-600" }, C0 = {
  key: 0,
  class: "po-text-sm po-text-green-500 po-font-medium po-pt-1"
}, S0 = { class: "po-text-sm po-tracking-wide po-text-slate-500" }, P0 = {
  name: "PoStatsBlock"
}, X5 = /* @__PURE__ */ T({
  ...P0,
  props: {
    items: { default: null },
    numberOfCols: { default: "po-gap-5 po-grid-cols-1 lg:po-grid-cols-3" }
  },
  setup(e) {
    return (t, o) => (p(), d("div", {
      class: L(["po-grid", t.numberOfCols])
    }, [
      (p(!0), d(F, null, G(t.items, (s) => (p(), d("div", _0, [
        r("span", $0, [
          r("div", x0, [
            r("div", null, [
              r("span", {
                class: L([
                  "po-inline-flex po-p-2 po-rounded-md",
                  s.bgColor,
                  s.iconColor
                ])
              }, [
                (p(), H(fe(s.icon), { class: "po-w-4 po-h-4" }))
              ], 2)
            ]),
            r("div", null, [
              r("div", V0, [
                r("span", k0, k(s.value), 1),
                s.diff ? (p(), d("span", C0, k(s.diff), 1)) : x("", !0)
              ]),
              r("h4", S0, k(s.label), 1)
            ])
          ])
        ])
      ]))), 256))
    ], 2));
  }
}), O0 = {
  key: 0,
  class: "po-flex po-space-x-3 po-items-start"
}, L0 = { class: "po-flex po-items-center po-space-x-2" }, M0 = ["datetime"], T0 = { class: "po-text-sm po-font-medium po-text-slate-600" }, D0 = ["datetime"], B0 = { class: "flex" }, I0 = { class: "po-flex po-pt-3 po-flex-wrap po-max-w-sm" }, z0 = ["onClick"], E0 = {
  key: 1,
  class: "po-w-full po-text-center"
}, A0 = { class: "po-inline-block po-text-sm po-italic po-text-slate-500" }, j0 = /* @__PURE__ */ r("span", { class: "po-text-lg po-text-slate-300 po-px-3 po-inline-block" }, "—", -1), R0 = ["datetime"], F0 = {
  name: "PoChatLogItem"
}, Q5 = /* @__PURE__ */ T({
  ...F0,
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
      t.item.type !== "message" ? (p(), d("div", O0, [
        t.item.type !== "first" && t.item.avatar !== "" ? (p(), d("div", {
          key: 0,
          class: "po-shrink-0 po-w-8 po-h-8 po-rounded-full po-p-1 po-bg-contain po-bg-slate-100",
          style: ft({ "background-image": `url(${t.item.avatar})` })
        }, null, 4)) : x("", !0),
        r("div", {
          class: L([
            { "po-pt-1": t.item.type !== "first" },
            {
              "po-flex po-justify-end po-items-end po-flex-col": t.item.type === "first"
            }
          ])
        }, [
          r("span", L0, [
            t.item.type === "first" ? (p(), d("time", {
              key: 0,
              datetime: t.item.time,
              class: "po-text-xs po-text-slate-400"
            }, k(t.item.time_human), 9, M0)) : x("", !0),
            r("span", T0, k(t.item.name), 1),
            t.item.type === "second" ? (p(), d("time", {
              key: 1,
              datetime: t.item.time,
              class: "po-text-xs po-text-slate-400"
            }, k(t.item.time_human), 9, D0)) : x("", !0)
          ]),
          r("div", {
            class: L([
              "po-mt-2 po-space-y-1",
              {
                "po-flex po-justify-end po-items-end po-flex-col": t.item.type === "first"
              }
            ])
          }, [
            K(t.$slots, "message", {}, () => [
              (p(!0), d(F, null, G(t.item.message, (s) => (p(), d("div", B0, [
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
                }, k(s), 3)
              ]))), 256))
            ]),
            r("div", I0, [
              (p(!0), d(F, null, G(t.item.actions, (s) => (p(), d("button", {
                onClick: (l) => t.$emit("button-click", s.label),
                class: "po-appearance-none po-border po-border-mpao-lightblue po-bg-white hover:po-bg-mpao-lightblue po-px-3 po-py-1 po-mb-2 po-mr-2 po-rounded-lg po-text-slate-500 hover:po-text-sky-100 po-transition-colors po-duration-150 po-ease-in-out po-text-sm po-ring-0 po-outline-none"
              }, k(s.label), 9, z0))), 256))
            ])
          ], 2)
        ], 2)
      ])) : x("", !0),
      t.item.type === "message" ? (p(), d("div", E0, [
        (p(!0), d(F, null, G(t.item.message, (s) => (p(), d("p", A0, [
          ee(k(s) + " ", 1),
          j0,
          r("time", {
            datetime: t.item.time,
            class: "po-text-xs po-text-slate-400 po-inline-block"
          }, k(t.item.time_human), 9, R0)
        ]))), 256))
      ])) : x("", !0)
    ], 2));
  }
}), H0 = {
  key: 0,
  class: "po-pointer-events-auto po-w-full po-max-w-sm po-overflow-hidden po-rounded-lg po-bg-mpao-lightblue po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5"
}, N0 = { class: "po-p-4" }, q0 = { class: "po-flex po-items-start" }, U0 = { class: "po-flex-shrink-0" }, Y0 = { class: "po-ml-3 po-w-0 po-flex-1 po-pt-0.5" }, W0 = { class: "po-text-sm po-font-medium po-text-sky-100" }, Z0 = { class: "po-mt-1 po-text-sm po-text-sky-300" }, G0 = { class: "po-mt-3 po-flex po-space-x-4" }, K0 = { class: "po-ml-4 po-flex po-flex-shrink-0" }, X0 = /* @__PURE__ */ r("span", { class: "po-sr-only" }, "Close", -1), Q0 = {
  name: "PoNotification"
}, J5 = /* @__PURE__ */ T({
  ...Q0,
  props: {
    show: { type: Boolean, default: !1 },
    label: { default: "" },
    text: { default: "" },
    buttonLabel: { default: "Ok" }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    const o = e, { show: s } = Se(o), l = V(!1);
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
    }), (a, i) => l.value ? (p(), H(Dt, {
      key: 0,
      to: "#po-notifications-alert"
    }, [
      C(Ze, {
        "enter-active-class": "po-transform po-ease-out po-duration-300 po-transition",
        "enter-from-class": "po-translate-y-2 po-opacity-0 sm:po-translate-y-0 sm:po-translate-x-2",
        "enter-to-class": "po-translate-y-0 po-opacity-100 sm:po-translate-x-0",
        "leave-active-class": "po-transition po-ease-in po-duration-100",
        "leave-from-class": "po-opacity-100",
        "leave-to-class": "po-opacity-0"
      }, {
        default: E(() => [
          n.value ? (p(), d("div", H0, [
            r("div", N0, [
              r("div", q0, [
                r("div", U0, [
                  K(a.$slots, "icon")
                ]),
                r("div", Y0, [
                  r("p", W0, k(a.label), 1),
                  r("p", Z0, k(a.text), 1),
                  r("div", G0, [
                    r("button", {
                      onClick: i[0] || (i[0] = (u) => a.$emit("button-click", a.buttonLabel)),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-100 hover:po-text-sky-200 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, k(a.buttonLabel), 1),
                    r("button", {
                      onClick: i[1] || (i[1] = (u) => l.value = !1),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-300 hover:po-text-sky-500 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, " Dismiss ")
                  ])
                ]),
                r("div", K0, [
                  r("button", {
                    type: "button",
                    onClick: i[2] || (i[2] = (u) => l.value = !1),
                    class: "po-inline-flex po-rounded-md po-bg-mpao-lightblue po-text-sky-500 hover:po-text-sky-300 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                  }, [
                    X0,
                    C(S(Dl), {
                      class: "po-h-5 po-w-5",
                      "aria-hidden": "true"
                    })
                  ])
                ])
              ])
            ])
          ])) : x("", !0)
        ]),
        _: 3
      })
    ])) : x("", !0);
  }
}), J0 = /* @__PURE__ */ r("div", { class: "po-fixed po-inset-0" }, null, -1), ef = { class: "po-absolute po-inset-0 po-overflow-hidden" }, tf = { class: "po-pointer-events-none po-fixed po-inset-y-0 po-right-0 po-flex po-max-w-full po-pl-10" }, of = { class: "po-flex po-h-full po-flex-col po-overflow-y-auto po-bg-white po-shadow-xl" }, sf = { class: "po-bg-slate-50 po-py-6 po-px-4 sm:po-px-6" }, lf = { class: "po-flex po-items-center po-justify-between" }, nf = { class: "po-ml-3 po-flex po-h-7 po-items-center" }, af = /* @__PURE__ */ r("span", { class: "po-sr-only" }, "Close panel", -1), rf = {
  key: 0,
  class: "po-mt-1"
}, pf = { class: "po-text-sm po-text-slate-500" }, uf = {
  key: 0,
  class: "po-bg-slate-50 po-rounded-b-xl po-shrink-0"
}, df = {
  name: "PoSlideover"
}, ev = /* @__PURE__ */ T({
  ...df,
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
    const o = e, { show: s } = Se(o), l = V(!1);
    Q(s, () => {
      l.value = s.value;
    });
    function n() {
      l.value = !1, t("slideover-closed", !0);
    }
    return (a, i) => (p(), H(S(Rt), {
      as: "template",
      show: l.value
    }, {
      default: E(() => [
        C(S(no), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: n
        }, {
          default: E(() => [
            J0,
            r("div", {
              class: L(["po-fixed po-inset-0 po-overflow-hidden po-bg-black", a.screenOpacity])
            }, [
              r("div", ef, [
                r("div", tf, [
                  C(S(Ke), {
                    as: "template",
                    enter: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "enter-from": "po-translate-x-full",
                    "enter-to": "po-translate-x-0",
                    leave: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "leave-from": "po-translate-x-0",
                    "leave-to": "po-translate-x-full"
                  }, {
                    default: E(() => [
                      C(S(ao), {
                        class: L([a.maxWidth, "po-pointer-events-auto po-w-screen"])
                      }, {
                        default: E(() => [
                          r("div", of, [
                            r("div", sf, [
                              r("div", lf, [
                                C(S(gl), { class: "po-text-lg po-font-medium po-text-slate-600" }, {
                                  default: E(() => [
                                    ee(k(a.label), 1)
                                  ]),
                                  _: 1
                                }),
                                r("div", nf, [
                                  r("button", {
                                    type: "button",
                                    class: "po-rounded-md po-text-slate-500 hover:po-text-mpao-lightblue focus:po-outline-none focus:po-ring-2 focus:po-ring-white",
                                    onClick: n
                                  }, [
                                    af,
                                    C(S(Jt), {
                                      class: "po-h-6 po-w-6",
                                      "aria-hidden": "true"
                                    })
                                  ])
                                ])
                              ]),
                              a.description ? (p(), d("div", rf, [
                                r("p", pf, k(a.description), 1)
                              ])) : x("", !0)
                            ]),
                            r("div", {
                              class: L([a.bgColor, "po-relative po-grow po-pt-6 po-px-4 sm:po-px-6"])
                            }, [
                              K(a.$slots, "content")
                            ], 2),
                            a.$slots.footer ? (p(), d("div", uf, [
                              K(a.$slots, "footer")
                            ])) : x("", !0)
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
}), cf = /* @__PURE__ */ r("div", { class: "po-fixed po-inset-0 po-bg-gray-500 po-bg-opacity-25 po-transition-opacity" }, null, -1), ff = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto po-p-4 sm:po-p-6 md:po-p-20" }, vf = { class: "po-relative" }, hf = {
  key: 0,
  class: "po-max-h-96 scroll-py-3 po-overflow-y-auto po-p-3"
}, mf = {
  name: "PoCommandPalette"
}, tv = /* @__PURE__ */ T({
  ...mf,
  props: {
    show: { type: Boolean, default: !1 },
    showContent: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, o = V(""), { show: s } = Se(t), l = V(!1);
    Q(s, () => {
      l.value = !1, setTimeout(() => {
        l.value = !0;
      }, 100);
    });
    function n(a) {
      a.ctrlKey && a.key === "b" && (l.value = !0);
    }
    return Z(() => {
      window.addEventListener("keyup", n);
    }), Do(() => {
      window.removeEventListener("keyup", n);
    }), (a, i) => (p(), H(S(Rt), {
      show: l.value,
      as: "template",
      onAfterLeave: i[2] || (i[2] = (u) => o.value = ""),
      appear: ""
    }, {
      default: E(() => [
        C(S(no), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: i[1] || (i[1] = (u) => l.value = !1)
        }, {
          default: E(() => [
            C(S(Ke), {
              as: "template",
              enter: "po-ease-out po-duration-300",
              "enter-from": "po-opacity-0",
              "enter-to": "po-opacity-100",
              leave: "po-ease-in po-duration-200",
              "leave-from": "po-opacity-100",
              "leave-to": "po-opacity-0"
            }, {
              default: E(() => [
                cf
              ]),
              _: 1
            }),
            r("div", ff, [
              C(S(Ke), {
                as: "template",
                enter: "po-ease-out po-duration-300",
                "enter-from": "po-opacity-0 po-scale-95",
                "enter-to": "po-opacity-100 po-scale-100",
                leave: "po-ease-in po-duration-200",
                "leave-from": "po-opacity-100 po-scale-100",
                "leave-to": "po-opacity-0 po-scale-95"
              }, {
                default: E(() => [
                  C(S(ao), { class: "po-mx-auto po-max-w-xl po-transform po-divide-y po-divide-gray-100 po-overflow-hidden po-rounded-xl po-bg-white po-shadow-2xl po-ring-1 po-ring-black po-ring-opacity-5 po-transition-all" }, {
                    default: E(() => [
                      r("div", vf, [
                        C(S(tp), {
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
                      a.showContent ? (p(), d("div", hf, [
                        K(a.$slots, "content")
                      ])) : x("", !0)
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
}), bf = /* @__PURE__ */ r("div", { class: "po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity" }, null, -1), gf = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto" }, yf = { class: "po-flex po-min-h-full po-items-start po-justify-center po-p-4 po-text-center sm:po-p-0" }, wf = { class: "po-p-5" }, _f = { class: "po-text-center po-space-y-3" }, $f = { key: 1 }, xf = { class: "po-text-sm po-text-gray-600" }, Vf = { class: "po-border-t po-border-slate-200 po-flex po-divide-x po-divide-slate-200" }, kf = {
  name: "PoAlert"
}, ov = /* @__PURE__ */ T({
  ...kf,
  props: {
    cancelBtnLabel: { default: "Cancel" },
    okBtnLabel: { default: "Ok" },
    alertTitle: { default: "" },
    alertDescription: { default: "" },
    show: { type: Boolean, default: !1 }
  },
  emits: ["alert-closed", "button-click", "confirm", "cancel"],
  setup(e, { emit: t }) {
    const o = e, { show: s } = Se(o), l = V(!1);
    Q(s, () => {
      l.value = s.value;
    });
    function n() {
      l.value = !1, t("alert-closed", !0);
    }
    return (a, i) => (p(), H(S(Rt), {
      as: "template",
      show: l.value
    }, {
      default: E(() => [
        C(S(no), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: n
        }, {
          default: E(() => [
            C(S(Ke), {
              as: "template",
              enter: "po-ease-out po-duration-300",
              "enter-from": "po-opacity-0",
              "enter-to": "po-opacity-100",
              leave: "po-ease-in po-duration-200",
              "leave-from": "po-opacity-100",
              "leave-to": "po-opacity-0"
            }, {
              default: E(() => [
                bf
              ]),
              _: 1
            }),
            r("div", gf, [
              r("div", yf, [
                C(S(Ke), {
                  as: "template",
                  enter: "po-ease-out po-duration-300",
                  "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                  "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                  leave: "po-ease-in po-duration-200",
                  "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                  "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                }, {
                  default: E(() => [
                    C(S(ao), { class: "po-relative po-transform po-overflow-hidden po-rounded-lg po-bg-white po-text-left po-shadow-xl po-transition-all sm:po-my-8 sm:po-w-full sm:po-max-w-sm" }, {
                      default: E(() => [
                        r("div", wf, [
                          r("div", _f, [
                            a.alertTitle !== "" ? (p(), H(S(gl), {
                              key: 0,
                              as: "h3",
                              class: "po-text-lg po-font-medium po-leading-6 po-text-gray-900"
                            }, {
                              default: E(() => [
                                ee(k(a.alertTitle), 1)
                              ]),
                              _: 1
                            })) : x("", !0),
                            a.alertDescription !== "" ? (p(), d("div", $f, [
                              r("p", xf, k(a.alertDescription), 1)
                            ])) : x("", !0)
                          ])
                        ]),
                        r("div", Vf, [
                          r("button", {
                            onClick: i[0] || (i[0] = (u) => {
                              a.$emit("cancel", !0), n();
                            }),
                            class: "po-text-sm po-bg-white po-text-slate-500 hover:po-bg-slate-50 po-transition-colors po-duration-100 po-ease-out po-font-medium po-py-3 po-px-5 po-w-1/2 focus:po-ring-0"
                          }, k(a.cancelBtnLabel), 1),
                          r("button", {
                            onClick: i[1] || (i[1] = (u) => {
                              a.$emit("confirm", !0), a.$emit("button-click", "ok"), n();
                            }),
                            class: "po-text-sm po-bg-white po-text-mpao-lightblue hover:po-bg-slate-50 po-transition-colors po-duration-100 po-ease-out po-font-medium po-py-3 po-px-5 po-w-1/2 focus:po-ring-0"
                          }, k(a.okBtnLabel), 1)
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
}), Cf = {
  key: 0,
  class: "po-col-span-2 po-relative po-mt-5"
}, Sf = /* @__PURE__ */ r("span", {
  class: "po-absolute po-top-0 po-left-1 po--ml-px po-h-[calc(100%-7px)] po-w-0.5 po-bg-gray-200",
  "aria-hidden": "true"
}, null, -1), Pf = { class: "po-relative po-space-y-5" }, Of = { class: "po-flex po-space-x-2 po-items-start" }, Lf = { class: "log-item" }, Mf = { key: 0 }, Tf = {
  key: 0,
  class: "po-text-slate-500 po-text-xs"
}, Df = {
  key: 1,
  class: "po-text-center po-py-10"
}, Bf = { class: "po-text-sm po-text-slate-500" }, If = {
  name: "PoLogs"
}, sv = /* @__PURE__ */ T({
  ...If,
  props: {
    items: { default: null },
    emptyLabel: { default: "No logs to display." }
  },
  setup(e) {
    return (t, o) => (p(), d("div", null, [
      t.items && t.items.length > 0 ? (p(), d("div", Cf, [
        Sf,
        r("div", Pf, [
          (p(!0), d(F, null, G(t.items, (s, l) => (p(), d("div", Of, [
            r("p", {
              class: L([
                "po-rounded-full po-w-2 po-h-2 border-1 po-border-white po-shrink-0",
                { "po-bg-orange-400": l !== t.items.length - 1 },
                ,
                { "po-bg-slate-300": l == t.items.length - 1 }
              ])
            }, null, 2),
            r("div", Lf, [
              r("span", null, [
                ee(k(s.label) + " on " + k(s.date) + " " + k(s.by && s.by !== "" ? "by" : "") + " ", 1),
                s.by && s.by !== "" ? (p(), d("span", Mf, k(s.by), 1)) : x("", !0)
              ]),
              s.description && s.description !== "" ? (p(), d("blockquote", Tf, ' "' + k(s.description) + '" ', 1)) : x("", !0)
            ])
          ]))), 256))
        ])
      ])) : (p(), d("div", Df, [
        r("span", Bf, k(t.emptyLabel), 1)
      ]))
    ]));
  }
}), zf = {
  name: "PoMain"
}, lv = /* @__PURE__ */ T({
  ...zf,
  setup(e) {
    const t = V(!0);
    return xe.on("sidebarOpen", (o) => {
      typeof o == "boolean" && (t.value = o);
    }), (o, s) => (p(), d("main", {
      class: L(["po-min-h-screen po-overflow-y-auto po-transition-all po-duration-300 po-ease-in-out po-pt-[92px] po-flex po-flex-col po-w-full", [
        { "lg:po-pl-[250px]": t.value },
        { "lg:po-pl-[58px]": !t.value }
      ]]),
      id: "shell-content-root"
    }, [
      K(o.$slots, "default")
    ], 2));
  }
}), Ef = {
  key: 0,
  role: "list",
  class: "po-divide-y po-divide-gray-200 po-rounded-md po-border po-border-gray-200"
}, Af = { class: "po-flex po-items-center po-justify-between po-py-3 po-pl-3 po-pr-4 po-text-sm" }, jf = { class: "po-flex po-w-0 po-flex-1 po-items-center" }, Rf = { class: "po-ml-2 po-w-0 po-flex-1 po-truncate" }, Ff = { class: "po-ml-4 po-flex-shrink-0 po-space-x-4" }, Hf = ["onClick"], Nf = ["onClick"], qf = {
  key: 1,
  class: "po-py-10"
}, Uf = { class: "po-text-sm po-text-slate-500" }, Yf = {
  name: "PoDownloadFileList"
}, nv = /* @__PURE__ */ T({
  ...Yf,
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
      o.files && o.files.length > 0 ? (p(), d("ul", Ef, [
        (p(!0), d(F, null, G(o.files, (l) => (p(), d("li", Af, [
          r("div", jf, [
            C(S(Fs), {
              class: "po-h-5 po-w-5 po-flex-shrink-0 po-text-gray-400",
              "aria-hidden": "true"
            }),
            r("span", Rf, k(l.label), 1)
          ]),
          r("div", Ff, [
            r("a", {
              href: "#",
              onClick: te((n) => o.$emit("button-click", l), ["prevent"]),
              class: "po-font-medium po-text-mpao-lightblue hover:po-text-indigo-500"
            }, k(o.linkLabel), 9, Hf),
            o.showViewBtn ? (p(), d("a", {
              key: 0,
              href: "#",
              onClick: te((n) => o.$emit("view-click", l), ["prevent"]),
              class: "po-font-medium po-text-mpao-lightblue hover:po-text-indigo-500"
            }, k(o.viewBtnLabel), 9, Nf)) : x("", !0)
          ])
        ]))), 256))
      ])) : (p(), d("div", qf, [
        r("span", Uf, k(o.emptyLabel), 1)
      ]))
    ]));
  }
}), Wf = { class: "po-px-3 lg:po-pl-5 lg:po-pr-3 po-pb-10 po-space-y-5 po-grow po-max-w-[1500px]" }, Zf = {
  name: "PoContentArea"
}, av = /* @__PURE__ */ T({
  ...Zf,
  setup(e) {
    const t = V(!0);
    return xe.on("sidebarOpen", (o) => {
      typeof o == "boolean" && (t.value = o);
    }), (o, s) => (p(), d("section", Wf, [
      K(o.$slots, "default")
    ]));
  }
}), Gf = {
  name: "AnimatedLogo"
}, Kf = /* @__PURE__ */ sn('<div><svg class="po-stroke-mpao-blue po-w-16 animated-logo" viewBox="0 0 62 55" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.76292 17.8572L7.7 17.9704V18.0682C6.87397 19.526 6.23618 20.649 5.58241 21.4779C4.93472 22.299 4.30505 22.7864 3.51417 23.0053C3.46261 23.0112 3.41718 23.0206 3.39088 23.026C3.35663 23.0331 3.31491 23.0425 3.27694 23.0511C3.25988 23.055 3.24357 23.0587 3.22903 23.0619C3.1106 23.0882 3.03712 23.1 3 23.1H2.93844L2.89561 23.1107L15.9876 0.600006H19.1308C17.2397 1.92747 16.1556 3.83665 15.5371 5.73245C14.8359 7.88203 14.7198 10.0514 14.7027 11.4258C13.1737 11.6033 11.0729 12.4434 9.38038 15.128C8.77075 16.0431 8.26353 16.9561 7.76713 17.8496L7.76292 17.8572Z"></path><path d="M48.1818 11.3241C48.047 8.39742 47.5389 6.05982 46.5472 4.07639C45.8153 2.61266 44.8203 1.39271 43.5945 0.5H46.8113L59.8583 23.0959C59.8303 23.0912 59.7891 23.0819 59.7213 23.0649C59.7166 23.0638 59.7117 23.0625 59.7066 23.0612C59.6302 23.042 59.5099 23.0118 59.3765 23.0027C58.59 22.7825 57.9627 22.2958 57.3176 21.4779C56.6586 20.6423 56.0158 19.508 55.1801 18.0331L55.1413 17.9647C54.8861 17.4553 54.6068 16.973 54.3362 16.5054L54.3327 16.4995C54.0565 16.0225 53.7893 15.5605 53.5472 15.0764L53.5333 15.0485L53.516 15.0226C51.7283 12.3411 49.7115 11.4988 48.1818 11.3241Z"></path><path d="M9.28397 39.6773C11.0717 42.3589 13.0885 43.2011 14.6182 43.3759C14.753 46.3026 15.2611 48.6402 16.2528 50.6236C16.9991 52.1163 17.9653 53.2992 19.1863 54.2H15.7881L2.74125 31.699C2.76073 31.6996 2.78031 31.7 2.8 31.7C2.89335 31.7 2.97474 31.7149 3.07903 31.7381C3.08854 31.7402 3.09897 31.7426 3.11023 31.7452C3.18647 31.7626 3.30082 31.7888 3.42319 31.7972C4.20888 32.0178 4.86081 32.5271 5.52047 33.3603C6.20216 34.2214 6.85697 35.382 7.66164 36.8405C8.26116 37.9396 8.76739 38.8512 9.276 39.665L9.27989 39.6712L9.28397 39.6773Z"></path><path d="M55.124 36.865L55.1331 36.8504L55.1412 36.8353C55.9431 35.3316 56.5997 34.1683 57.2697 33.307C57.9146 32.4778 58.5471 31.9616 59.2949 31.6961C59.4179 31.6866 59.5418 31.6616 59.6287 31.6442C59.6354 31.6428 59.6418 31.6415 59.6481 31.6403C59.719 31.6261 59.772 31.616 59.8123 31.6095L46.8115 54.1H43.8753C45.7283 52.7465 46.7867 50.8277 47.3889 48.9394C48.064 46.8226 48.1795 44.7058 48.1971 43.3742C49.7262 43.1967 51.8271 42.3567 53.5196 39.6719C53.8327 39.2016 54.1164 38.6849 54.3777 38.1995C54.4112 38.1375 54.4442 38.076 54.4768 38.0152C54.7049 37.5906 54.9148 37.1996 55.124 36.865Z"></path><path d="M32.2763 51.5708L32.2653 51.5582L32.2536 51.5465C32.0661 51.359 31.7413 51.2 31.4 51.2C31.3949 51.2 31.3894 51.2 31.3835 51.2C31.2956 51.1998 31.1323 51.1993 30.9751 51.2442C30.7932 51.2962 30.6132 51.4082 30.4904 51.6086C29.1941 53.0706 27.544 53.8 25.5 53.8C22.8209 53.8 20.828 52.9218 19.4532 51.2005C18.1148 49.5247 17.3123 46.988 17.1201 43.5109C18.6883 43.1579 19.8601 42.2673 20.5004 41.6896C20.5136 44.8271 20.8579 46.8152 21.6737 48.0181C22.5558 49.319 23.9045 49.6 25.5 49.6C27.4335 49.6 28.5187 48.2893 29.0946 46.9901C29.6604 45.7138 29.7966 44.3347 29.7999 43.8193C29.8943 42.5846 30.6602 41.8 31.5 41.8H31.5778C32.4558 41.8842 33.2 42.7102 33.2 43.9C33.2 45.6119 33.5619 47.0065 34.2986 47.9982C35.0485 49.0077 36.1459 49.544 37.4792 49.5996L37.4896 49.6H37.5C39.2304 49.6 40.5973 49.3258 41.4454 48.0081C41.849 47.3811 42.1078 46.5565 42.2692 45.5056C42.4311 44.4518 42.5 43.1353 42.5 41.5V24.4455L45.9 21.8182V41.5C45.9 41.4958 45.8996 41.5001 45.8978 41.519C45.8959 41.5381 45.8927 41.5719 45.887 41.6267L45.8842 41.6541C45.8752 41.7406 45.8636 41.8524 45.8521 41.9797C45.8264 42.2614 45.8 42.6283 45.8 43V43.9V43.9029V43.9059V43.9088V43.9117V43.9146V43.9175V43.9205V43.9234V43.9263V43.9292V43.9321V43.935V43.9379V43.9408V43.9437V43.9466V43.9495V43.9524V43.9553V43.9581V43.961V43.9639V43.9668V43.9696V43.9725V43.9754V43.9783V43.9811V43.984V43.9868V43.9897V43.9926V43.9954V43.9983V44.0011V44.004V44.0068V44.0096V44.0125V44.0153V44.0181V44.021V44.0238V44.0266V44.0295V44.0323V44.0351V44.0379V44.0407V44.0435V44.0463V44.0492V44.052V44.0548V44.0576V44.0603V44.0631V44.0659V44.0687V44.0715V44.0743V44.0771V44.0798V44.0826V44.0854V44.0882V44.0909V44.0937V44.0965V44.0992V44.102V44.1047V44.1075V44.1102V44.113V44.1157V44.1185V44.1212V44.1239V44.1267V44.1294V44.1321V44.1349V44.1376V44.1403V44.143V44.1457V44.1484V44.1512V44.1539V44.1566V44.1593V44.162V44.1647V44.1674V44.17V44.1727V44.1754V44.1781V44.1808V44.1835V44.1861V44.1888V44.1915V44.1941V44.1968V44.1995V44.2021V44.2048V44.2074V44.2101V44.2127V44.2154V44.218V44.2207V44.2233V44.2259V44.2285V44.2312V44.2338V44.2364V44.239V44.2417V44.2443V44.2469V44.2495V44.2521V44.2547V44.2573V44.2599V44.2625V44.2651V44.2677V44.2702V44.2728V44.2754V44.278V44.2806V44.2831V44.2857V44.2882V44.2908V44.2934V44.2959V44.2985V44.301V44.3036V44.3061V44.3087V44.3112V44.3137V44.3163V44.3188V44.3213V44.3238V44.3264V44.3289V44.3314V44.3339V44.3364V44.3389V44.3414V44.3439V44.3464V44.3489V44.3514V44.3539V44.3564V44.3588V44.3613V44.3638V44.3663V44.3687V44.3712V44.3737V44.3761V44.3786V44.381V44.3835V44.3859V44.3884V44.3908V44.3932V44.3957V44.3981V44.4005V44.403V44.4054V44.4078V44.4102V44.4126V44.415V44.4174V44.4199V44.4223V44.4247V44.427V44.4294V44.4318V44.4342V44.4366V44.439V44.4413V44.4437V44.4461V44.4484V44.4508V44.4532V44.4555V44.4579V44.4602V44.4626V44.4649V44.4672V44.4696V44.4719V44.4742V44.4766V44.4789V44.4812V44.4835V44.4858V44.4882V44.4905V44.4928V44.4951V44.4974V44.4997V44.5019V44.5042V44.5065V44.5088V44.5111V44.5133V44.5156V44.5179V44.5201V44.5224V44.5247V44.5269V44.5292V44.5314V44.5337V44.5359V44.5381V44.5404V44.5426V44.5448V44.547V44.5493V44.5515V44.5537V44.5559V44.5581V44.5603V44.5625V44.5647V44.5669V44.5691V44.5713V44.5734V44.5756V44.5778V44.58V44.5821V44.5843V44.5865V44.5886V44.5908V44.5929V44.5951V44.5972V44.5994V44.6015V44.6036V44.6058V44.6079V44.61V44.6121V44.6142V44.6164V44.6185V44.6206V44.6227V44.6248V44.6269V44.6289V44.631V44.6331V44.6352V44.6373V44.6393V44.6414V44.6435V44.6455V44.6476V44.6497V44.6517V44.6538V44.6558V44.6578V44.6599V44.6619V44.6639V44.666V44.668V44.67V44.672V44.674V44.676V44.678V44.68V44.682V44.684V44.686V44.688V44.69V44.692V44.6939V44.6959V44.6979V44.6998V44.7018V44.7037V44.7057V44.7076V44.7096V44.7115V44.7135V44.7154V44.7173V44.7193V44.7212V44.7231V44.725V44.7269V44.7288V44.7307V44.7326V44.7345V44.7364V44.7383V44.7402V44.7421V44.7439V44.7458V44.7477V44.7495V44.7514V44.7533V44.7551V44.757V44.7588V44.7606V44.7625V44.7643V44.7661V44.768V44.7698V44.7716V44.7734V44.7752V44.777V44.7788V44.7806V44.7824V44.7842V44.786V44.7878V44.7896V44.7914V44.7931V44.7949V44.7967V44.7984V44.8002V44.8019V44.8037V44.8054V44.8071V44.8089V44.8106V44.8123V44.8141V44.8158V44.8175V44.8192V44.8209V44.8226V44.8243V44.826V44.8277V44.8294V44.8311V44.8328V44.8344V44.8361V44.8378V44.8394V44.8411V44.8427V44.8444V44.846V44.8477V44.8493V44.851V44.8526V44.8542V44.8558V44.8575V44.8591V44.8607V44.8623V44.8639V44.8655V44.8671V44.8687V44.8702V44.8718V44.8734V44.875V44.8765V44.8781V44.8797V44.8812V44.8828V44.8843V44.8859V44.8874V44.8889V44.8905V44.892V44.8935V44.895V44.8965V44.898V44.8996V44.9011V44.9025V44.904V44.9055V44.907V44.9085V44.91V44.9114V44.9129V44.9144V44.9158V44.9173V44.9187V44.9202V44.9216V44.923V44.9245V44.9259V44.9273V44.9288V44.9302V44.9316V44.933V44.9344V44.9358V44.9372V44.9386V44.9399V44.9413V44.9427V44.9441V44.9454V44.9468V44.9482V44.9495V44.9509V44.9522V44.9535V44.9549V44.9562V44.9575V44.9589V44.9602V44.9615V44.9628V44.9641V44.9654V44.9667V44.968V44.9693V44.9706V44.9718V44.9731V44.9744V44.9757V44.9769V44.9782V44.9794V44.9807V44.9819V44.9832V44.9844V44.9856V44.9868V44.9881V44.9893V44.9905V44.9917V44.9929V44.9941V44.9953V44.9965V44.9977V44.9988V45V45.1V45.1006V45.1012V45.1017V45.1023V45.1029V45.1035V45.104V45.1046V45.1052V45.1057V45.1063V45.1069V45.1074V45.108V45.1085V45.1091V45.1096V45.1102V45.1107V45.1113V45.1118V45.1123V45.1129V45.1134V45.1139V45.1145V45.115V45.1155V45.1161V45.1166V45.1171V45.1176V45.1181V45.1186V45.1191V45.1196V45.1202V45.1207V45.1212V45.1217V45.1222V45.1226V45.1231V45.1236V45.1241V45.1246V45.1251V45.1256V45.1261V45.1265V45.127V45.1275V45.128V45.1284V45.1289V45.1294V45.1298V45.1303V45.1307V45.1312V45.1317V45.1321V45.1326V45.133V45.1335V45.1339V45.1343V45.1348V45.1352V45.1357V45.1361V45.1365V45.137V45.1374V45.1378V45.1383V45.1387V45.1391V45.1395V45.1399V45.1404V45.1408V45.1412V45.1416V45.142V45.1424V45.1428V45.1432V45.1436V45.144V45.1444V45.1448V45.1452V45.1456V45.146V45.1464V45.1468V45.1471V45.1475V45.1479V45.1483V45.1487V45.149V45.1494V45.1498V45.1501V45.1505V45.1509V45.1512V45.1516V45.152V45.1523V45.1527V45.153V45.1534V45.1537V45.1541V45.1544V45.1548V45.1551V45.1555V45.1558V45.1561V45.1565V45.1568V45.1572V45.1575V45.1578V45.1581V45.1585V45.1588V45.1591V45.1594V45.1598V45.1601V45.1604V45.1607V45.161V45.1613V45.1616V45.162V45.1623V45.1626V45.1629V45.1632V45.1635V45.1638V45.1641V45.1644V45.1647V45.165V45.1652V45.1655V45.1658V45.1661V45.1664V45.1667V45.167V45.1672V45.1675V45.1678V45.1681V45.1683V45.1686V45.1689V45.1691V45.1694V45.1697V45.1699V45.1702V45.1705V45.1707V45.171V45.1712V45.1715V45.1717V45.172V45.1722V45.1725V45.1727V45.173V45.1732V45.1735V45.1737V45.174V45.1742V45.1744V45.1747V45.1749V45.1751V45.1753C45.5039 48.1507 44.6544 50.2924 43.3031 51.6899C41.9582 53.0807 40.0524 53.8 37.5 53.8C35.4235 53.8 33.5685 53.0476 32.2763 51.5708Z"></path><path d="M22.8 23.2538V18.2178L29.3909 23.307L26.1939 25.8645L22.8 23.2538Z"></path><path d="M16.7 20.2V19.7H16.5V18.8V10.858C16.5042 10.8478 16.5096 10.8348 16.5142 10.8232C16.5488 10.7368 16.5963 10.6012 16.5998 10.4209C16.8474 7.03069 17.6799 4.61275 19.0737 3.04468C20.4543 1.49155 22.4511 0.699997 25.2 0.699997C27.2568 0.699997 29.1263 1.53906 30.5352 3.04197L30.5407 3.04785L30.5464 3.05355C30.7614 3.26854 31.0508 3.35 31.3 3.35C31.5492 3.35 31.8386 3.26854 32.0536 3.05355L32.0646 3.04251L32.0749 3.03081C33.4779 1.4408 35.1402 0.699997 37.3 0.699997C40.0769 0.699997 42.1441 1.62655 43.5571 3.42174C44.934 5.17104 45.7393 7.80743 45.886 11.3874C44.0184 11.8028 42.6345 12.9721 42.1 13.4936V13.2C42.1 10.0544 41.7835 8.06299 40.9925 6.86242C40.1497 5.58316 38.8495 5.3 37.3 5.3C35.4114 5.3 34.3769 6.59229 33.8399 7.85422C33.3055 9.11015 33.2 10.457 33.2 10.9C33.2 12.2634 32.2859 13.1 31.3 13.1H31.2204C30.2388 13.0141 29.4 12.0845 29.4 10.8C29.4 9.19015 29.0639 7.84653 28.3661 6.89234C27.6525 5.91665 26.5974 5.4 25.3 5.4C23.6267 5.4 22.3017 5.64608 21.4896 6.93319C21.1052 7.5425 20.863 8.34586 20.7131 9.3714C20.5626 10.4004 20.5 11.6909 20.5 13.3V30.4541L16.7 33.3833V20.2Z"></path><path d="M40.1 31.5462V36.5799L33.4225 31.4049L36.6974 28.9288L40.1 31.5462Z"></path><mask id="path-9-inside-1" fill="white"><path d="M58.7 30.1C58.9 30 59.5 30 59.8 29.9C60.9 29.8 61.8 28.7 61.8 27.4C61.8 26.1 60.9 25 59.8 24.9C59.7 24.9 59.5 24.9 59.4 24.8C59.3 24.8 59.2 24.8 59.1 24.7C59.1 24.7 59.1 24.7 59 24.7C58.6 24.6 58.1 24.4 57.7 24.1C57.7 24.1 57.7 24.1 57.6 24C56.1 23.1 55 21.2 53.6 18.7C53.1 17.8 52.6 16.9 52 16C50.5 13.7 48.9 13.1 47.8 13C47.7 13 47.6 13 47.5 13H47.3C47.1 13 46.9 13 46.9 13C45.2 13.2 44 14.3 43.6 14.8L25.2 29.1C25.2 29.1 25.2 29.1 25.1 29.2L23 30.8L16.8 35.5L16.4 35.9C16.4 35.9 16.4 35.9 16.3 35.9C16 36.1 15.7 36.3 15.4 36.3C15.1 36.3 14.9 36.2 14.7 36.1C14.5 35.9 14.4 35.8 14.3 35.5C13.9 34.8 13.4 34.1 13 33.3V33.1C12.2 31.7 11.3 30 10.1 28.6C10.1 28.6 10.1 28.6 10.1 28.5L10 28.4C9.9 28.3 9.9 28.3 9.8 28.2C9.8 28.2 9.8 28.2 9.7 28.1L9.2 27.5C9.2 27.5 9.2 27.5 9.1 27.5C9 27.3 9 27.1 9.1 27L9.6 26.5C10.9 25 11.9 23.2 12.8 21.6V21.5C13.2 20.7 13.7 19.9 14.2 19.1C14.4 18.8 14.6 18.6 14.7 18.5V13.1C13.6 13.2 12 13.9 10.6 16C10 16.9 9.5 17.8 9 18.7C7.8 20.9 6.8 22.5 5.6 23.5C4.8 24.1 4 24.4 3.5 24.6C3.5 24.6 3.5 24.6 3.4 24.6C3.3 24.6 3.1 24.7 3 24.7C2.9 24.7 2.9 24.7 2.8 24.7C2.7 24.7 2.7 24.7 2.7 24.7H2.6H2.5C2.3 24.7 2.2 24.8 2.1 24.8C2 24.8 2 24.8 2 24.9C1.7 25.1 1.4 25.3 1.2 25.6C1.2 25.7 1.1 25.7 1.1 25.8V25.9L0.999997 26.1C0.999997 26.2 0.999997 26.2 0.899997 26.3C0.899997 26.4 0.899997 26.4 0.799997 26.5C0.799997 26.6 0.799997 26.7 0.699997 26.7C0.699997 26.8 0.699997 26.9 0.699997 26.9C0.699997 27 0.699997 27.1 0.699997 27.1C0.699997 27.2 0.699997 27.2 0.699997 27.3C0.699997 27.4 0.699997 27.5 0.699997 27.5C0.699997 27.6 0.699997 27.7 0.699997 27.7C0.699997 27.8 0.699997 27.9 0.799997 27.9V28V28.1C0.799997 28.2 0.799997 28.2 0.899997 28.2L0.999997 28.4C0.999997 28.5 1.1 28.5 1.1 28.5C1.1 28.5 1.1 28.5 1.1 28.6C1.2 28.7 1.3 28.9 1.5 29C1.6 29 1.6 29.1 1.7 29.1C1.7 29.1 1.8 29.1 1.8 29.2C1.8 29.2 1.8 29.2 1.9 29.2C2 29.3 2.2 29.3 2.3 29.4C2.4 29.4 2.4 29.4 2.4 29.4L2.9 29.5C3.1 29.5 3.2 29.6 3.4 29.6C4.2 29.8 4.7 30.2 4.8 30.2C6.4 31.2 7.5 33 8.9 35.5C9.5 36.6 10 37.4 10.5 38.2C11.9 40.3 13.4 41 14.4 41.1C14.5 41.1 14.5 41.1 14.6 41.1C14.7 41.1 14.8 41.1 14.8 41.1C15 41.1 15.2 41.1 15.5 41.1H15.6C17.2 40.8 18.5 39.8 18.9 39.3L19 39.2L19.8 38.6C19.8 38.6 19.9 38.5 20 38.5L30.2 30.6L41.3 22L46.5 18H46.6C46.7 18 46.9 17.9 47 17.9C47.4 17.9 47.8 18.1 48.1 18.6L48.5 19.2C48.8 19.7 49.2 20.3 49.5 20.9V21C50.1 22.1 50.8 23.4 51.7 24.6C51.7 24.6 51.7 24.7 51.8 24.7C52.1 25.1 52.4 25.5 52.7 25.8C52.7 25.8 52.8 25.8 52.8 25.9C53 26.1 53.1 26.3 53.3 26.4C53.4 26.5 53.4 26.7 53.3 26.9C52 28.5 50.4 31.1 49.6 32.4V32.5C49.2 33.2 48.7 34.1 48.2 34.9C48 35.2 47.8 35.4 47.7 35.5V40.9C48.8 40.8 50.4 40.1 51.8 37.9C52.4 37 52.9 36 53.4 35.2C53.5 35 53.7 34.7 53.8 34.5C55.2 33 56.4 30.9 58.7 30.1Z"></path></mask><path d="M58.7 30.1C58.9 30 59.5 30 59.8 29.9C60.9 29.8 61.8 28.7 61.8 27.4C61.8 26.1 60.9 25 59.8 24.9C59.7 24.9 59.5 24.9 59.4 24.8C59.3 24.8 59.2 24.8 59.1 24.7C59.1 24.7 59.1 24.7 59 24.7C58.6 24.6 58.1 24.4 57.7 24.1C57.7 24.1 57.7 24.1 57.6 24C56.1 23.1 55 21.2 53.6 18.7C53.1 17.8 52.6 16.9 52 16C50.5 13.7 48.9 13.1 47.8 13C47.7 13 47.6 13 47.5 13H47.3C47.1 13 46.9 13 46.9 13C45.2 13.2 44 14.3 43.6 14.8L25.2 29.1C25.2 29.1 25.2 29.1 25.1 29.2L23 30.8L16.8 35.5L16.4 35.9C16.4 35.9 16.4 35.9 16.3 35.9C16 36.1 15.7 36.3 15.4 36.3C15.1 36.3 14.9 36.2 14.7 36.1C14.5 35.9 14.4 35.8 14.3 35.5C13.9 34.8 13.4 34.1 13 33.3V33.1C12.2 31.7 11.3 30 10.1 28.6C10.1 28.6 10.1 28.6 10.1 28.5L10 28.4C9.9 28.3 9.9 28.3 9.8 28.2C9.8 28.2 9.8 28.2 9.7 28.1L9.2 27.5C9.2 27.5 9.2 27.5 9.1 27.5C9 27.3 9 27.1 9.1 27L9.6 26.5C10.9 25 11.9 23.2 12.8 21.6V21.5C13.2 20.7 13.7 19.9 14.2 19.1C14.4 18.8 14.6 18.6 14.7 18.5V13.1C13.6 13.2 12 13.9 10.6 16C10 16.9 9.5 17.8 9 18.7C7.8 20.9 6.8 22.5 5.6 23.5C4.8 24.1 4 24.4 3.5 24.6C3.5 24.6 3.5 24.6 3.4 24.6C3.3 24.6 3.1 24.7 3 24.7C2.9 24.7 2.9 24.7 2.8 24.7C2.7 24.7 2.7 24.7 2.7 24.7H2.6H2.5C2.3 24.7 2.2 24.8 2.1 24.8C2 24.8 2 24.8 2 24.9C1.7 25.1 1.4 25.3 1.2 25.6C1.2 25.7 1.1 25.7 1.1 25.8V25.9L0.999997 26.1C0.999997 26.2 0.999997 26.2 0.899997 26.3C0.899997 26.4 0.899997 26.4 0.799997 26.5C0.799997 26.6 0.799997 26.7 0.699997 26.7C0.699997 26.8 0.699997 26.9 0.699997 26.9C0.699997 27 0.699997 27.1 0.699997 27.1C0.699997 27.2 0.699997 27.2 0.699997 27.3C0.699997 27.4 0.699997 27.5 0.699997 27.5C0.699997 27.6 0.699997 27.7 0.699997 27.7C0.699997 27.8 0.699997 27.9 0.799997 27.9V28V28.1C0.799997 28.2 0.799997 28.2 0.899997 28.2L0.999997 28.4C0.999997 28.5 1.1 28.5 1.1 28.5C1.1 28.5 1.1 28.5 1.1 28.6C1.2 28.7 1.3 28.9 1.5 29C1.6 29 1.6 29.1 1.7 29.1C1.7 29.1 1.8 29.1 1.8 29.2C1.8 29.2 1.8 29.2 1.9 29.2C2 29.3 2.2 29.3 2.3 29.4C2.4 29.4 2.4 29.4 2.4 29.4L2.9 29.5C3.1 29.5 3.2 29.6 3.4 29.6C4.2 29.8 4.7 30.2 4.8 30.2C6.4 31.2 7.5 33 8.9 35.5C9.5 36.6 10 37.4 10.5 38.2C11.9 40.3 13.4 41 14.4 41.1C14.5 41.1 14.5 41.1 14.6 41.1C14.7 41.1 14.8 41.1 14.8 41.1C15 41.1 15.2 41.1 15.5 41.1H15.6C17.2 40.8 18.5 39.8 18.9 39.3L19 39.2L19.8 38.6C19.8 38.6 19.9 38.5 20 38.5L30.2 30.6L41.3 22L46.5 18H46.6C46.7 18 46.9 17.9 47 17.9C47.4 17.9 47.8 18.1 48.1 18.6L48.5 19.2C48.8 19.7 49.2 20.3 49.5 20.9V21C50.1 22.1 50.8 23.4 51.7 24.6C51.7 24.6 51.7 24.7 51.8 24.7C52.1 25.1 52.4 25.5 52.7 25.8C52.7 25.8 52.8 25.8 52.8 25.9C53 26.1 53.1 26.3 53.3 26.4C53.4 26.5 53.4 26.7 53.3 26.9C52 28.5 50.4 31.1 49.6 32.4V32.5C49.2 33.2 48.7 34.1 48.2 34.9C48 35.2 47.8 35.4 47.7 35.5V40.9C48.8 40.8 50.4 40.1 51.8 37.9C52.4 37 52.9 36 53.4 35.2C53.5 35 53.7 34.7 53.8 34.5C55.2 33 56.4 30.9 58.7 30.1Z"></path></svg></div>', 1), Xf = [
  Kf
];
function Qf(e, t, o, s, l, n) {
  return p(), d("div", null, Xf);
}
const Jf = /* @__PURE__ */ Ht(Gf, [["render", Qf]]), e4 = {
  key: 0,
  class: "po-fixed po-z-[999] po-top-0 po-bottom-0 po-left-0 po-right-0 po-flex po-items-center po-justify-center"
}, t4 = /* @__PURE__ */ r("div", { class: "po-absolute po-w-[6.2rem] po-h-[6.2rem] po-bg-transparent po-overflow-hidden po-rounded-xl" }, [
  /* @__PURE__ */ r("div", { class: "po-loading-rotate po-absolute -po-top-8 -po-left-8 po-w-[10rem] po-h-[10rem]" })
], -1), o4 = { class: "relative po-bg-white po-w-24 po-h-24 po-flex po-items-center po-justify-center po-rounded-xl po-bg-opacity-50 po-backdrop-blur po-backdrop-filter po-z-10 po-shadow-xl" }, s4 = {
  key: 0,
  class: "po-absolute po-left-1 po-right-1 po-text-center po-py-1 po-text-xs po-text-mpao-blue po-bg-white po-bg-opacity-50 po-backdrop-blur po-backdrop-filter"
}, l4 = {
  name: "PoLoading"
}, rv = /* @__PURE__ */ T({
  ...l4,
  props: {
    show: { type: Boolean, default: !1 },
    label: { default: "" }
  },
  setup(e) {
    return (t, o) => t.show ? (p(), d("div", e4, [
      t4,
      r("div", o4, [
        t.label !== "" ? (p(), d("span", s4, k(t.label), 1)) : x("", !0),
        C(Jf)
      ])
    ])) : x("", !0);
  }
}), n4 = { class: "po-py-5 po-flex po-items-start po-space-x-5" }, a4 = ["name", "id", "checked", "aria-describedby"], r4 = { class: "po-grow -po-mt-[0.26rem]" }, i4 = ["for"], p4 = { class: "po-mt-2 po-flex po-space-x-3" }, u4 = ["href", "onClick"], d4 = {
  name: "PoConsent"
}, iv = /* @__PURE__ */ T({
  ...d4,
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
    return (s, l) => (p(), d("div", n4, [
      r("input", Be({
        type: "checkbox",
        name: `${s.id}-field`,
        id: s.id,
        checked: s.modelValue,
        "aria-describedby": `${s.id}-description`
      }, s.$attrs, {
        onInput: o,
        class: "po-shrink-0 po-h-4 po-w-4 po-rounded border-slate-300 po-text-mpao-lightblue focus:po-ring-mpao-lightblue"
      }), null, 16, a4),
      r("div", r4, [
        r("label", {
          class: "po-block po-select-none po-text-sm po-text-slate-600 po-cursor-pointer",
          for: s.id
        }, k(s.label), 9, i4),
        r("div", p4, [
          (p(!0), d(F, null, G(s.links, (n) => (p(), d("a", {
            href: n.url,
            onClick: te((a) => s.$emit("button-click", n.url), ["prevent"]),
            class: "po-text-sm po-text-mpao-lightblue hover:po-text-mpao-blue"
          }, k(n.label), 9, u4))), 256))
        ])
      ])
    ]));
  }
}), c4 = {
  class: "po-flex po-relative po-bg-slate-200 po-rounded-t-xl po-justify-center lg:po-justify-start po-px-4 po-pt-4 xl:po-pt-3 po-flex-wrap po-overflow-hidden",
  "aria-label": "Tabs"
}, f4 = ["onClick", "aria-current"], v4 = {
  key: 1,
  class: "pr-2 pt-4 pb-2 po-hidden xl:po-block"
}, h4 = /* @__PURE__ */ r("span", { class: "po-block po-bg-slate-300 po-w-[2px] po-rounded-full po-h-full" }, null, -1), m4 = [
  h4
], b4 = /* @__PURE__ */ r("div", { class: "po-absolute po-bg-sky-200 po-h-[1px] po-bottom-0 po-left-0 po-right-0" }, null, -1), g4 = {
  name: "PoCardTabs"
}, pv = /* @__PURE__ */ T({
  ...g4,
  props: {
    tabs: { default: null }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    function o(s) {
      return s.iconColor ? s.iconColor : "po-fill-current";
    }
    return (s, l) => (p(), d("nav", c4, [
      (p(!0), d(F, null, G(s.tabs, (n) => (p(), d(F, {
        key: n.name
      }, [
        n.name ? (p(), d("span", {
          key: 0,
          role: "button",
          onClick: (a) => s.$emit("button-click", n),
          class: L(["po-relative po-px-4 po-py-3 po-font-medium po-mr-2 po-mb-4 xl:po-mb-0 po-text-sm po-cursor-pointer hover:po-z-[2] po-rounded-xl xl:po-rounded-b-none genie-effect hover:po-text-slate-600 hover:po-bg-white hover:po-shadow-md po-flex po-items-center po-flex-shrink-0 po-space-x-2", [
            n.current ? "po-bg-white po-text-slate-600 po-shadow-lg po-border po-border-b-0 po-border-sky-200 po-z-[1]" : "po-text-slate-600 hover:po-text-mpao-blue bg-slate-50"
          ]]),
          "aria-current": n.current ? "page" : void 0
        }, [
          n.icon ? (p(), H(fe(n.icon), {
            key: 0,
            class: L(["po-w-5 po-h-5", [o(n)]])
          }, null, 8, ["class"])) : x("", !0),
          r("span", null, [
            ee(k(n.name), 1),
            n.count && n.count > 0 ? (p(), d("span", {
              key: 0,
              class: L(["po-absolute po-py-1 po-z-[2] po-px-2 po-rounded-full po-text-xs -po-top-2 -po-right-4 po-shadow-md po-flex po-items-center po-justify-center", [
                n.current ? "po-bg-mpao-orange po-text-white" : "po-bg-slate-400 po-text-white group-hover:po-bg-mpao-orange group-hover:po-text-white"
              ]])
            }, [
              r("span", null, k(n.count), 1)
            ], 2)) : x("", !0)
          ])
        ], 10, f4)) : (p(), d("span", v4, m4))
      ], 64))), 128)),
      b4
    ]));
  }
}), y4 = { class: "sm:po-hidden" }, w4 = /* @__PURE__ */ r("label", {
  for: "tabs",
  class: "po-sr-only"
}, "Select a tab", -1), _4 = ["value", "selected"], $4 = { class: "po-hidden sm:po-block" }, x4 = {
  class: "po-flex po-gap-3 po-pt-2 po-flex-wrap",
  "aria-label": "Tabs"
}, V4 = ["onClick", "aria-current"], k4 = {
  name: "PoTabs"
}, uv = /* @__PURE__ */ T({
  ...k4,
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
    const l = I(() => {
      var a;
      return (a = o.tabs) == null ? void 0 : a.map((i) => i.name === o.currentTab ? { ...i, current: !0 } : { ...i, current: !1 });
    }), n = (a) => {
      const i = Number(a.target.value);
      if (o.tabs) {
        const u = o.tabs[i];
        t("button-click", u);
      }
    };
    return (a, i) => (p(), d(F, null, [
      r("div", y4, [
        w4,
        r("select", {
          id: "tabs",
          name: "tabs",
          class: "po-block po-w-full po-rounded-md po-border-gray-300 focus:po-border-indigo-500 focus:po-ring-indigo-500",
          onChange: n
        }, [
          (p(!0), d(F, null, G(a.tabs, (u, c) => (p(), d("option", {
            key: u.name,
            value: c,
            selected: u.current
          }, k(u.name), 9, _4))), 128))
        ], 32)
      ]),
      r("div", $4, [
        r("nav", x4, [
          (p(!0), d(F, null, G(l.value, (u) => (p(), d("span", {
            onClick: (c) => a.$emit("button-click", u),
            role: "button",
            key: u.name,
            class: L([
              u.current ? " po-text-slate-600 po-shadow-md po-border po-border-sky-200" : " po-text-slate-600 po-shadow-sm hover:po-text-mpao-blue",
              "po-bg-white po-px-4 po-relative po-group po-py-3 po-font-medium po-text-sm po-cursor-pointer po-rounded-xl genie-effect hover:po-text-slate-600 hover:po-bg-white hover:po-shadow-md po-flex po-items-center po-space-x-2"
            ]),
            "aria-current": u.current ? "page" : void 0
          }, [
            u.icon ? (p(), H(fe(u.icon), {
              key: 0,
              class: L(["po-w-5 po-h-5", [s(u)]])
            }, null, 8, ["class"])) : x("", !0),
            r("span", null, [
              r("span", null, k(u.name), 1),
              u.count && u.count > 0 ? (p(), d("span", {
                key: 0,
                class: L(["po-absolute po-py-1 po-px-2 po-rounded-full po-text-xs -po-top-3 -po-right-2 po-shadow-md po-flex po-items-center po-justify-center", [
                  u.current ? "po-bg-mpao-orange po-text-white" : "po-bg-slate-400 po-text-white group-hover:po-bg-mpao-orange group-hover:po-text-white"
                ]])
              }, [
                r("span", null, k(u.count), 1)
              ], 2)) : x("", !0)
            ])
          ], 10, V4))), 128))
        ])
      ])
    ], 64));
  }
}), C4 = { class: "po-mt-5 po-flex po-flex-col po-items-center po-justify-center po-px-5 po-pt-8 po-pb-12" }, S4 = {
  key: 0,
  class: "po-w-16 po-h-16 po-flex po-items-center po-justify-center po-rounded-full po-bg-blue-50"
}, P4 = {
  key: 1,
  class: "po-text-base po-pt-2 po-font-medium po-text-slate-600 po-text-center"
}, O4 = {
  key: 2,
  class: "po-text-sm po-text-slate-500 po-text-center po-max-w-lg po-block po-mx-auto"
}, L4 = {
  name: "PoEmpty"
}, dv = /* @__PURE__ */ T({
  ...L4,
  props: {
    label: { default: "" },
    description: { default: "" },
    icon: { default: null },
    iconColor: { default: "po-stroke-blue-400" }
  },
  setup(e) {
    return (t, o) => (p(), d("div", C4, [
      r("div", {
        class: L(["po-space-y-1 po-flex po-items-center po-flex-col po-justify-center", [{ "po-mb-5": t.$slots.action }]])
      }, [
        t.icon ? (p(), d("span", S4, [
          t.icon ? (p(), H(fe(t.icon), {
            key: 0,
            class: L(["po-w-8 po-h-8", t.iconColor])
          }, null, 8, ["class"])) : x("", !0)
        ])) : x("", !0),
        t.label !== "" ? (p(), d("span", P4, k(t.label), 1)) : x("", !0),
        t.description !== "" ? (p(), d("span", O4, k(t.description), 1)) : x("", !0)
      ], 2),
      K(t.$slots, "action")
    ]));
  }
}), M4 = { class: "po-flex po-text-sm po-text-gray-700 po-flex-col po-space-y-5" }, T4 = {
  key: 0,
  class: "po-text-base po-font-medium po-text-slate-700"
}, D4 = {
  key: 1,
  class: "po-border po-border-orange-300 po-bg-orange-50 po-rounded-lg po-p-5 po-flex po-items-center po-space-x-3"
}, B4 = { class: "po-grow po-text-sm po-text-slate-600" }, I4 = {
  key: 2,
  class: "po-border po-border-red-300 po-bg-red-50 po-rounded-lg po-p-5 po-flex po-space-x-4"
}, z4 = { class: "po-grow" }, E4 = { class: "po-text-base po-text-slate-700 po-font-medium" }, A4 = { class: "po-text-sm po-text-slate-600" }, j4 = { class: "po-font-medium" }, R4 = { key: 0 }, F4 = { key: 0 }, H4 = /* @__PURE__ */ r("dt", null, "Name", -1), N4 = { key: 1 }, q4 = /* @__PURE__ */ r("dt", null, "Identifer", -1), U4 = { key: 2 }, Y4 = /* @__PURE__ */ r("dt", null, "Date of birth", -1), W4 = { key: 3 }, Z4 = /* @__PURE__ */ r("dt", null, "Reported Date of death", -1), G4 = {
  key: 3,
  class: "po-pt-5"
}, K4 = { class: "po-flex po-items-center po-space-x-1" }, X4 = /* @__PURE__ */ r("span", null, "File a dispute.", -1), Q4 = {
  name: "PoDRStatus"
}, cv = /* @__PURE__ */ T({
  ...Q4,
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
    return (s, l) => (p(), d("span", M4, [
      s.record !== null ? (p(), d("h2", T4, " Death was reported by " + k(s.record.institution), 1)) : x("", !0),
      s.request !== null && s.request.type_id === 1 ? (p(), d("div", D4, [
        C(S(wo), { class: "po-shrink-0 po-w-6 po-stroke-orange-600" }),
        r("span", B4, " This is a " + k(s.request.type) + " request and is in " + k(s.request.state) + " state. ", 1)
      ])) : x("", !0),
      s.request !== null && s.request.type_id !== 1 ? (p(), d("div", I4, [
        C(S(wo), { class: "po-shrink-0 po-w-6 po-h-6 po-stroke-red-600 po-stroke-2" }),
        r("div", z4, [
          r("h3", E4, k(s.request.type), 1),
          r("p", A4, [
            ee(" The following " + k(s.request.type) + " was reported: ", 1),
            r("span", j4, [
              ee(k(s.request.dispute_type), 1),
              s.request.date_of_death ? (p(), d("span", R4, " (New date: " + k(s.request.date_of_death) + ")", 1)) : x("", !0)
            ])
          ])
        ])
      ])) : x("", !0),
      C(zd, null, {
        content: E(() => [
          s.member !== null ? (p(), d("div", F4, [
            H4,
            r("dd", null, k(s.member.name), 1)
          ])) : x("", !0),
          s.member !== null ? (p(), d("div", N4, [
            q4,
            r("dd", null, k(s.member.identifier), 1)
          ])) : x("", !0),
          s.member !== null ? (p(), d("div", U4, [
            Y4,
            r("dd", null, k(s.member.dob), 1)
          ])) : x("", !0),
          s.record !== null ? (p(), d("div", W4, [
            Z4,
            r("dd", null, k(s.record.date_of_death), 1)
          ])) : x("", !0)
        ]),
        _: 1
      }),
      s.request === null ? (p(), d("span", G4, [
        C(gt, {
          type: "simple",
          onButtonClick: o
        }, {
          label: E(() => [
            r("span", K4, [
              C(S(cn), { class: "po-w-4 po-h-4 po-stroke-current" }),
              X4
            ])
          ]),
          _: 1
        })
      ])) : x("", !0)
    ]));
  }
}), J4 = {
  role: "button",
  class: "po-w-6 po-h-6 po-rounded-lg po-bg-white genie-effect po-flex po-items-center po-justify-center hover:po-bg-slate-50 po-cursor-pointer"
}, e2 = {
  name: "PoTableAction"
}, Wt = /* @__PURE__ */ T({
  ...e2,
  props: {
    btnIcon: { default: null },
    btnType: { default: "text" },
    label: { default: "" },
    textColor: { default: "po-slate-500" },
    iconColor: { default: "po-stroke-slate-500" }
  },
  setup(e) {
    const t = e, o = V(), s = V(), l = V(t.label);
    return t.btnType === "view" ? (o.value = bn, l.value = t.label === "" ? "View" : t.label) : t.btnType === "edit" ? (o.value = gn, l.value = t.label === "" ? "Edit" : t.label) : t.btnType === "delete" ? (o.value = wn, l.value = t.label === "" ? "Delete" : t.label) : t.btnType === "icon" && t.btnIcon && (o.value = t.btnIcon), t.btnType === "view" ? s.value = "po-stroke-emerald-400" : t.btnType === "edit" ? s.value = "po-stroke-blue-400" : t.btnType === "delete" ? s.value = "po-stroke-red-400" : s.value = t.iconColor, (n, a) => (p(), d("span", null, [
      n.btnType === "icon" || n.btnType === "delete" || n.btnType === "edit" || n.btnType === "view" ? (p(), H(S(co), {
        key: 0,
        text: l.value,
        placement: "bottom",
        strategy: "fixed"
      }, {
        default: E(() => [
          r("span", J4, [
            (p(), H(fe(o.value), {
              class: L(["po-w-4 po-stroke-2", s.value])
            }, null, 8, ["class"]))
          ])
        ]),
        _: 1
      }, 8, ["text"])) : (p(), d("span", {
        key: 1,
        role: "button",
        class: L(["po-block po-text-sm genie-effect", n.textColor])
      }, k(n.label), 3))
    ]));
  }
}), t2 = { key: 0 }, o2 = {
  name: "Rufiyaa"
}, fv = /* @__PURE__ */ T({
  ...o2,
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
      o.amount !== null ? (p(), d("span", t2, k(t(o.amount)), 1)) : x("", !0)
    ]));
  }
}), s2 = {
  name: "PoHeading"
}, vv = /* @__PURE__ */ T({
  ...s2,
  props: {
    text: { default: "" },
    type: { default: "h3" }
  },
  setup(e) {
    return (t, o) => (p(), H(fe(t.type), { class: "po-text-base po-text-slate-600 po-font-semibold" }, {
      default: E(() => [
        ee(k(t.text), 1)
      ]),
      _: 1
    }));
  }
}), l2 = ["for"], n2 = { class: "po-capitalize" }, a2 = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, r2 = { class: "po-relative po-mt-1" }, i2 = { class: "po-shrink-0 po-pr-1 po-inline-flex po-flex-wrap po-w-full po-gap-1 po-max-h-44" }, p2 = { class: "po-px-2 po-py-1 po-rounded-md po-text-sm po-text-slate-600 po-flex po-space-x-2 po-items-center po-bg-gradient-to-l po-from-slate-50 po-via-cyan-50 po-to-cyan-100/60 po-border po-border-cyan-200" }, u2 = ["onClick"], d2 = ["id"], c2 = {
  key: 0,
  class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
}, f2 = ["onClick", "value"], v2 = {
  class: /* @__PURE__ */ L(["po-block po-truncate"])
}, h2 = {
  name: "PoMultiSelect"
}, hv = /* @__PURE__ */ T({
  ...h2,
  props: {
    modelValue: { default: null },
    label: { default: "" },
    display: { default: "vertical" },
    id: { default: "" },
    info: { default: "" },
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
    function i(h) {
      n.value.splice(h, 1), v();
    }
    function u(h) {
      let O = l.value.split(",");
      h.key === "Enter" && 0 < l.value.length && (h.preventDefault(), O.forEach((w) => {
        var z;
        let M = (z = o.items) == null ? void 0 : z.find(
          (R) => R.name.toLowerCase() === w.trim().toLowerCase()
        );
        M && n.value.push(M);
      }), l.value = ""), h.key === "Backspace" && l.value.length === 0 && a.value && n.value.pop(), v();
    }
    const c = V([]);
    function v() {
      c.value = n.value.map((h) => h.id);
    }
    const { uniqueId: g, generateUniqueId: _ } = Le(), y = V(o.id);
    Z(() => {
      o.id === "" && (_(), y.value = g.value), document.addEventListener("keydown", u);
    }), re(() => {
      document.removeEventListener("keydown", u);
    });
    const b = V(!1), f = I(
      () => {
        var h;
        return l.value === "" ? o.items : (h = o.items) == null ? void 0 : h.filter((O) => O.name.toLowerCase().includes(l.value.toLowerCase()));
      }
    );
    let m = V();
    Et(m, () => {
      b.value = !1;
    });
    function $(h) {
      n.value.push(h), l.value = "", v();
    }
    return Q(c, () => {
      t("update:modelValue", c.value);
    }), (h, O) => (p(), d("div", {
      ref_key: "multiSelectComponentRef",
      ref: m,
      class: L(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": h.display === "horizontal" }]])
    }, [
      r("label", {
        for: y.value,
        class: L([
          "po-text-sm po-font-medium po-flex po-items-center po-space-x-1",
          { "po-text-red-500": h.hasError },
          { "po-text-slate-700": !h.hasError }
        ])
      }, [
        r("span", n2, k(h.label), 1),
        h.required ? (p(), d("span", a2, "*")) : x("", !0),
        C(Ne, { info: h.info }, null, 8, ["info"])
      ], 10, l2),
      r("div", r2, [
        r("div", {
          class: L([
            "po-border po-p-1 po-min-h-[2.38rem] po-flex po-flex-wrap po-items-center focus-within:po-border-mpao-lightblue po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white sm:po-text-sm",
            s()
          ])
        }, [
          r("div", i2, [
            n.value.length > 0 ? (p(!0), d(F, { key: 0 }, G(n.value, (w, M) => (p(), d("span", p2, [
              r("span", null, k(w.name), 1),
              r("span", {
                onClick: () => i(M),
                role: "button",
                class: "po-cursor-pointer"
              }, [
                C(S(Jt), { class: "po-w-3 po-stroke-red-600 po-stroke-2" })
              ], 8, u2)
            ]))), 256)) : x("", !0),
            Oe(r("input", {
              id: y.value,
              "onUpdate:modelValue": O[0] || (O[0] = (w) => l.value = w),
              onFocus: O[1] || (O[1] = () => {
                b.value = !0, a.value = !0;
              }),
              onBlur: O[2] || (O[2] = () => a.value = !1),
              class: "po-border-0 po-outline-none po-ring-0 po-grow"
            }, null, 40, d2), [
              [Mt, l.value]
            ])
          ])
        ], 2),
        b.value ? (p(), d("ul", c2, [
          (p(!0), d(F, null, G(f.value, (w) => (p(), d("li", {
            onClick: () => $(w),
            key: w.id,
            value: w.id,
            class: L([
              "po-relative po-select-none po-py-2 hover:po-bg-mpao-lightblue hover:po-text-white po-cursor-pointer po-pl-3 po-pr-9"
            ])
          }, [
            r("span", v2, k(w.name), 1)
          ], 8, f2))), 128))
        ])) : x("", !0)
      ]),
      C(je, { message: h.message }, null, 8, ["message"]),
      C(Ae, { "error-message": h.errorMessage }, null, 8, ["error-message"])
    ], 2));
  }
}), m2 = { class: "po-flex po-pl-5" }, b2 = /* @__PURE__ */ r("div", { class: "po-shrink-0 po-flex po-flex-col" }, [
  /* @__PURE__ */ r("div", { class: "po-w-[2px] po-shrink-0 po-h-10" }),
  /* @__PURE__ */ r("div", { class: "po-bg-gradient-to-t po-from-orange-400 po-via-red-300 po-to-blue-500 po-w-[2px] po-grow" }),
  /* @__PURE__ */ r("div", { class: "po-w-[2px] po-shrink-0 po-h-12" })
], -1), g2 = { class: "po-grow po-pl-5 po-pt-5 po-space-y-3" }, y2 = ["onClick"], w2 = { class: "-po-mt-1 po-flex po-space-x-3 po-items-center" }, _2 = { class: "po-block po-text-xs po-text-slate-400" }, $2 = { class: "po-text-xs po-text-slate-500 po-pt-1" }, x2 = {
  name: "PoTimeline"
}, mv = /* @__PURE__ */ T({
  ...x2,
  props: {
    timeline: { default: null },
    clickable: { type: Boolean, default: !1 }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, s) => (p(), d("div", m2, [
      b2,
      r("div", g2, [
        (p(!0), d(F, null, G(o.timeline, (l) => (p(), d("div", {
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
            r("div", w2, [
              r("h4", {
                class: L(["po-text-sm po-text-slate-600 po-font-medium", [{ "group-hover:po-text-mpao-lightblue": o.clickable }]])
              }, k(l.label), 3),
              r("span", _2, k(S(Es)(l.date)), 1)
            ]),
            r("p", $2, k(l.description), 1)
          ])
        ], 10, y2))), 256))
      ])
    ]));
  }
}), V2 = {
  name: "PoTableCheckbox"
}, bv = /* @__PURE__ */ T({
  ...V2,
  props: {
    itemId: { default: null },
    isChecked: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["checkboxClicked"],
  setup(e, { emit: t }) {
    return (o, s) => (p(), d(F, null, [
      o.isChecked ? (p(), H(S(Os), {
        key: 0,
        onClick: s[0] || (s[0] = te(() => o.$emit("checkboxClicked", o.itemId), ["prevent"])),
        class: "po-w-6 po-fill-mpao-lightblue po-cursor-pointer"
      })) : x("", !0),
      o.disabled ? (p(), H(S(Os), {
        key: 1,
        class: "po-w-6 po-fill-slate-400"
      })) : x("", !0),
      !o.isChecked && !o.disabled ? (p(), d("span", {
        key: 2,
        onClick: s[1] || (s[1] = te(() => o.$emit("checkboxClicked", o.itemId), ["prevent"])),
        class: "po-h-5 po-w-5 po-rounded-full po-border-2 po-ml-[2px] po-block po-border-slate-300 po-cursor-pointer"
      })) : x("", !0)
    ], 64));
  }
}), k2 = { class: "po-p-4" }, C2 = { class: "po-flex po-items-start po-space-x-3" }, S2 = /* @__PURE__ */ r("span", { class: "po-sr-only" }, "Action icon", -1), P2 = { class: "po-w-0 po-flex-1 po-text-sm po-font-medium po-text-gray-400" }, O2 = { class: "po-ml-4 po-flex po-flex-shrink-0" }, L2 = /* @__PURE__ */ r("span", { class: "po-sr-only" }, "Close", -1), M2 = {
  name: "PoToast"
}, gv = /* @__PURE__ */ T({
  ...M2,
  props: {
    show: { type: Boolean, default: !1 },
    actionType: { default: "" },
    message: { default: "" },
    hideIn: { default: 2e3 },
    size: { default: "sm" }
  },
  emits: ["toast-closed"],
  setup(e, { emit: t }) {
    const o = e, { show: s } = Se(o), l = V(!1);
    Q(s, () => {
      l.value = s.value, setTimeout(() => {
        n();
      }, o.hideIn);
    });
    function n() {
      l.value = !1, t("toast-closed", !0);
    }
    const a = I(() => o.message === "" && o.actionType !== "" ? o.actionType === "success" ? "Saved Successfully!" : o.actionType === "danger" ? "Item deleted!" : o.actionType === "warn" ? "Attention needed!" : "Wrong action" : o.message);
    return (i, u) => (p(), H(Dt, { to: "#po-notifications-alert" }, [
      C(Ze, {
        "enter-active-class": "po-transform po-ease-out po-duration-300 po-transition",
        "enter-from-class": "po-translate-y-2 po-opacity-0 sm:po-translate-y-0 sm:po-translate-x-2",
        "enter-to-class": "po-translate-y-0 po-opacity-100 sm:po-translate-x-0",
        "leave-active-class": "po-transition po-ease-in po-duration-100",
        "leave-from-class": "po-opacity-100",
        "leave-to-class": "po-opacity-0"
      }, {
        default: E(() => [
          l.value ? (p(), d("div", {
            key: 0,
            class: L(["po-pointer-events-auto po-w-full po-overflow-hidden po-rounded-lg po-bg-gray-900 po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5", [
              { "po-max-w-[260px]": i.size === "sm" },
              { "po-max-w-[360px]": i.size === "lg" },
              { "po-max-w-[560px]": i.size === "xl" }
            ]])
          }, [
            r("div", k2, [
              r("div", C2, [
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
                  i.actionType === "success" ? (p(), H(S(Ki), {
                    key: 0,
                    class: "po-w-4 po-h-4"
                  })) : x("", !0),
                  i.actionType === "danger" ? (p(), H(S(sp), {
                    key: 1,
                    class: "po-w-4 po-h-4"
                  })) : x("", !0),
                  i.actionType === "warn" ? (p(), H(S(Ji), {
                    key: 2,
                    class: "po-w-4 po-h-4"
                  })) : x("", !0),
                  S2
                ], 2)) : x("", !0),
                r("p", P2, k(a.value), 1),
                r("div", O2, [
                  r("button", {
                    type: "button",
                    onClick: n,
                    class: "po-inline-flex po-rounded-md po-bg-gray-900 po-text-gray-400 hover:po-text-gray-300 hover:po-bg-gray-700 po-transition-colors po-duration-150 po-ease-out focus:po-outline-none focus:po-ring-2 focus:po-ring-indigo-500 focus:po-ring-offset-2"
                  }, [
                    L2,
                    C(S(Dl), {
                      class: "po-h-5 po-w-5",
                      "aria-hidden": "true"
                    })
                  ])
                ])
              ])
            ])
          ], 2)) : x("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), T2 = ["for"], D2 = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, B2 = { class: "po-relative po-mt-1" }, I2 = {
  key: 1,
  class: "po-absolute po-top-0 po-left-0 po-right-0 po-bottom-0 po-overflow-hidden po-bg-white po-rounded-md po-border po-border-slate-300 po-flex po-items-center"
}, z2 = { class: "po-grow" }, E2 = ["id"], A2 = ["onMousedown"], j2 = ["onMousedown"], R2 = {
  key: 0,
  class: "po-text-sm po-text-slate-600 po-p-4 po-block"
}, F2 = {
  name: "PoSelectApi"
}, yv = /* @__PURE__ */ T({
  ...F2,
  props: {
    options: { default: () => [] },
    id: { default: "" },
    loading: { type: Boolean, default: !1 },
    showMoreBtn: { type: Boolean, default: !1 },
    label: { default: "" },
    info: { default: "" },
    display: { default: "vertical" },
    required: { type: Boolean, default: !1 },
    errorMessage: { default: null },
    message: { default: null },
    disabled: { type: Boolean, default: !1 },
    emptyMessage: { default: null },
    showSelected: { type: Boolean, default: !0 }
  },
  emits: ["search", "selected", "loadmore", "onClear"],
  setup(e, { emit: t }) {
    const o = e, s = V(), l = V(!1), n = V(!1), a = V([]);
    Q(o, (w, M) => {
      a.value = o.options;
    });
    const i = V(null);
    Et(i, () => {
      l.value = !!n.value;
    });
    function u() {
      n.value = !1, setTimeout(() => {
        l.value = !1;
      }, 100);
    }
    const { uniqueId: c, generateUniqueId: v } = Le(), g = V(o.id);
    Z(() => {
      o.id === "" && (v(), g.value = c.value);
    });
    const _ = V();
    function y() {
      t("search", _.value);
    }
    const b = V(null);
    function f(w) {
      b.value = w, t("selected", w), l.value = !!n.value;
    }
    function m() {
      t("loadmore", !0);
    }
    function $() {
      b.value = null, _.value = "", t("onClear", !0);
    }
    const h = V();
    let O;
    return Z(() => {
      O = zt(s.value, h.value, {
        placement: "bottom-end",
        strategy: "fixed",
        modifiers: [
          {
            name: "sameWidth",
            enabled: !0,
            fn: ({ state: w }) => {
              w.styles.popper.width = `${w.rects.reference.width}px`;
            },
            phase: "beforeWrite",
            requires: ["computeStyles"]
          }
        ]
      });
    }), re(() => {
      O && O.destroy();
    }), (w, M) => (p(), d("div", {
      ref_key: "containerRef",
      ref: i,
      class: L(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": w.display === "horizontal" }]])
    }, [
      r("label", {
        for: g.value,
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700"
      }, [
        r("span", null, k(w.label), 1),
        w.required ? (p(), d("span", D2, "*")) : x("", !0),
        C(Ne, { info: w.info }, null, 8, ["info"])
      ], 8, T2),
      r("div", B2, [
        r("div", null, [
          w.loading ? (p(), H(nt, {
            key: 0,
            class: "po-right-0 po-top-4",
            absolute: !0
          })) : x("", !0),
          b.value !== null && w.showSelected ? (p(), d("div", I2, [
            r("div", z2, [
              K(w.$slots, "selectedOption", dt(ct(b.value)), () => [
                ee(k(b.value), 1)
              ])
            ]),
            r("span", {
              class: "po-shrink-0 po-p-1 po-cursor-pointer",
              onMousedown: M[0] || (M[0] = te((z) => $(), ["stop"]))
            }, [
              C(S(Jt), { class: "po-w-4 po-stroke-2 po-stroke-slate-400" })
            ], 32)
          ])) : x("", !0),
          Oe(r("input", {
            type: "text",
            name: "",
            id: g.value,
            ref_key: "selectBox",
            ref: s,
            "onUpdate:modelValue": M[1] || (M[1] = (z) => _.value = z),
            onInput: y,
            onFocus: M[2] || (M[2] = (z) => {
              n.value = !0, l.value = !0;
            }),
            onBlur: u,
            class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm"
          }, null, 40, E2), [
            [Mt, _.value]
          ])
        ]),
        Oe(r("div", {
          ref_key: "popper",
          ref: h,
          class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
        }, [
          a.value && a.value.length > 0 ? (p(), d(F, { key: 0 }, [
            (p(!0), d(F, null, G(a.value, (z) => (p(), d("div", {
              onMousedown: te((R) => f(z), ["stop"])
            }, [
              K(w.$slots, "option", dt(ct(z)), () => [
                ee(k(z), 1)
              ])
            ], 40, A2))), 256)),
            w.showMoreBtn ? (p(), d("span", {
              key: 0,
              role: "button",
              onMousedown: te(m, ["stop"]),
              class: "po-text-sm po-text-semibold po-text-mpao-lightblue po-block po-text-center po-py-2 hover:po-bg-slate-50 po-transition-colors po-duration-150 po-ease-out"
            }, "More", 40, j2)) : x("", !0)
          ], 64)) : (p(), d(F, { key: 1 }, [
            w.emptyMessage ? (p(), d("span", R2, k(w.emptyMessage), 1)) : x("", !0)
          ], 64))
        ], 512), [
          [
            Tt,
            l.value && a.value.length > 0 || l.value && w.emptyMessage
          ]
        ]),
        C(je, { message: w.message }, null, 8, ["message"]),
        C(Ae, { "error-message": w.errorMessage }, null, 8, ["error-message"])
      ])
    ], 2));
  }
}), H2 = { class: "po-bg-blue-300/20 po-border po-border-blue-200 po-p-3 po-rounded-md po-text-sm sm:po-space-x-2 po-flex po-items-center po-flex-wrap" }, N2 = { class: "po-text-blue-500" }, q2 = {
  name: "PoMessage"
}, wv = /* @__PURE__ */ T({
  ...q2,
  props: {
    msgType: { default: "info" },
    message: { default: "" },
    btnName: { default: "" },
    btnAction: { default: "" }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, s) => (p(), d("div", H2, [
      r("span", N2, k(o.message), 1),
      o.btnName !== "" ? (p(), d("span", {
        key: 0,
        role: "button",
        onClick: s[0] || (s[0] = (l) => o.$emit("button-click", o.btnAction)),
        class: "po-text-blue-600 po-underline po-font-medium po-text-xs"
      }, k(o.btnName), 1)) : x("", !0)
    ]));
  }
}), U2 = {
  key: 0,
  class: "po-flex md:po-justify-end"
}, Y2 = ["onClick"], W2 = { class: "po-text-xl po-font-medium po-text-slate-600 po-flex po-items-center po-space-x-1" }, Z2 = {
  name: "PoPageStats"
}, _v = /* @__PURE__ */ T({
  ...Z2,
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
    return (s, l) => s.stats !== null ? (p(), d("div", U2, [
      r("div", {
        class: L(["po-bg-slate-50 po-shadow-sm po-rounded-xl po-divide-x po-divide-slate-200 po-flex", s.padding])
      }, [
        (p(!0), d(F, null, G(s.stats, (n) => (p(), d("div", {
          class: L(["po-px-4 po-group", { "po-cursor-pointer": s.clickable }]),
          onClick: (a) => s.$emit("stat-click", n)
        }, [
          r("span", W2, [
            n.icon ? (p(), d("span", {
              key: 0,
              class: L(["po-w-5 po-h-5", o(n)])
            }, [
              (p(), H(fe(n.icon)))
            ], 2)) : x("", !0),
            r("span", {
              class: L(["po-text-xl po-font-medium po-text-slate-600", { "group-hover:po-text-mpao-lightblue": s.clickable }])
            }, k(n.value), 3)
          ]),
          r("span", {
            class: L(["po-text-sm po-text-slate-500 po-block", { "group-hover:po-text-mpao-lightblue": s.clickable }])
          }, k(n.label), 3)
        ], 10, Y2))), 256))
      ], 2)
    ])) : x("", !0);
  }
}), G2 = {
  name: "PoTooltip"
}, co = /* @__PURE__ */ T({
  ...G2,
  props: {
    text: { default: "" },
    placement: { default: "bottom" },
    strategy: { default: "absolute" }
  },
  setup(e) {
    const t = e, o = V(), s = V(), l = V(!1);
    let n = null;
    Z(() => {
      o.value && s.value && setTimeout(() => {
        n = zt(o.value, s.value, {
          placement: t.placement,
          strategy: t.strategy
        });
      }, 320);
    }), re(() => {
      n && (n.destroy(), n = null);
    });
    function a() {
      l.value = !0;
    }
    function i() {
      l.value = !1;
    }
    return xe.on("sidebarOpen", (u) => {
      setTimeout(() => {
        n && n.update();
      }, 320);
    }), (u, c) => (p(), d("span", {
      ref_key: "trigger",
      ref: o,
      onMouseover: a,
      onMouseleave: i
    }, [
      K(u.$slots, "default"),
      (p(), H(Dt, { to: "body" }, [
        Oe(r("div", {
          ref_key: "popper",
          ref: s,
          class: L(["po-bg-slate-700 po-text-xs po-z-50 po-transition-opacity po-duration-100 po-ease-linear po-text-slate-50 po-rounded-md po-px-2 po-py-1 po-shadow-md", [{ "po-opacity-0": !l.value }, { "po-opacity-100": l.value }]])
        }, k(u.text), 3), [
          [Tt, u.text]
        ])
      ]))
    ], 544));
  }
}), K2 = ["for"], X2 = { class: "po-capitalize" }, Q2 = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, J2 = ["name", "id", "value", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], e5 = {
  key: 0,
  class: "po-text-sm po-grow po-text-slate-500 lg:po-min-h-[40px] po-flex po-items-center"
}, t5 = { key: 0 }, o5 = { key: 1 }, s5 = ["for"], l5 = {
  key: 2,
  class: "po-text-sm po-grow po-text-slate-500 lg:po-min-h-[40px] po-flex po-items-center"
}, n5 = /* @__PURE__ */ r("span", null, "Uploading...", -1), a5 = [
  n5
], r5 = {
  key: 3,
  class: "po-shrink-0 po-relative po-top-[3px]"
}, i5 = {
  name: "PoUpload"
}, $v = /* @__PURE__ */ T({
  ...i5,
  props: {
    token: { default: "" },
    url: { default: "" },
    payload: { default: () => ({}) },
    modelValue: { default: "" },
    label: { default: "" },
    display: { default: "vertical" },
    id: { default: "" },
    info: { default: "" },
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
    const o = e, s = V("initial"), { uniqueId: l, generateUniqueId: n } = Le(), a = V(o.id);
    Z(() => {
      o.id === "" && (n(), a.value = l.value);
    });
    const i = V(!1), u = (f) => {
      f.preventDefault(), i.value = !0;
    }, c = () => {
      i.value = !1;
    }, v = (f) => {
      var $;
      f.preventDefault(), i.value = !1;
      const m = ($ = f.dataTransfer) == null ? void 0 : $.files;
      m && m.length > 0 && _(m);
    }, g = (f) => {
      const $ = f.target.files;
      $ && $.length > 0 && _($);
    };
    function _(f) {
      s.value = "uploading", fetch(`${b()}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${o == null ? void 0 : o.token}`
        },
        body: y(f)
      }).then((m) => {
        s.value = "initial", t("uploaded", m);
      });
    }
    function y(f) {
      let m = new FormData();
      for (const $ of f)
        m.append("files", $);
      return m.append("payload", JSON.stringify(o.payload)), m;
    }
    function b() {
      return o == null || o.url, o == null ? void 0 : o.url;
    }
    return (f, m) => (p(), d("div", {
      class: L(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": f.display === "horizontal" }]])
    }, [
      r("label", {
        disabled: "",
        for: `${a.value}-wheel`,
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700 po-mb-1"
      }, [
        r("span", X2, k(f.label), 1),
        f.required ? (p(), d("span", Q2, "*")) : x("", !0),
        C(Ne, { info: f.info }, null, 8, ["info"])
      ], 8, K2),
      r("input", Be({
        type: "file",
        name: a.value,
        id: a.value,
        value: f.modelValue,
        disabled: f.disabled,
        required: f.required,
        "aria-describedby": a.value,
        "aria-required": f.required,
        "aria-disabled": f.disabled
      }, f.$attrs, {
        ref: "fileInput",
        class: "po-hidden",
        onChange: g
      }), null, 16, J2),
      r("div", {
        class: L(["po-bg-white po-border po-border-dashed po-rounded-md po-p-3 po-flex po-items-center po-space-x-4 po-transition-colors po-duration-150 po-ease-out", [
          { "po-border-slate-400/60": !i.value },
          { "po-border-mpao-lightblue": i.value }
        ]]),
        onDragover: u,
        onDragleave: c,
        onDrop: v
      }, [
        r("span", {
          class: L(["po-w-8 po-h-8 po-shrink-0 po-flex po-items-center po-justify-center po-rounded-md", [
            { "po-bg-slate-100 po-text-slate-500": !i.value },
            { "po-bg-blue-50 po-text-blue-500": i.value }
          ]])
        }, [
          C(S(mn), { class: "po-w-5 po-stroke-current" })
        ], 2),
        s.value === "initial" ? (p(), d("span", e5, [
          i.value ? (p(), d("span", t5, k(f.dragOverText), 1)) : (p(), d("span", o5, k(f.dragAreaText), 1))
        ])) : x("", !0),
        s.value === "initial" ? (p(), d("label", {
          key: 1,
          for: a.value,
          class: "po-cursor-pointer po-transition-colors po-duration-150 po-ease-out po-shrink-0 po-text-sm po-text-mpao-lightblue po-font-meidum hover:po-text-purple-600 po-px-3 po-py-1"
        }, "Upload file", 8, s5)) : x("", !0),
        s.value === "uploading" ? (p(), d("span", l5, a5)) : x("", !0),
        s.value === "uploading" ? (p(), d("div", r5, [
          C(nt)
        ])) : x("", !0)
      ], 34),
      C(je, { message: f.message }, null, 8, ["message"]),
      C(Ae, { "error-message": f.errorMessage }, null, 8, ["error-message"])
    ], 2));
  }
}), p5 = {
  name: "PoWrap"
}, u5 = /* @__PURE__ */ r("div", {
  "aria-live": "assertive",
  class: "po-pointer-events-none po-fixed po-inset-0 po-flex po-items-start po-px-4 po-py-6 sm:po-p-6 po-z-[60]"
}, [
  /* @__PURE__ */ r("div", {
    class: "po-flex po-w-full po-flex-col po-items-end po-space-y-4 sm:po-items-end po-pt-[55px]",
    id: "po-notifications-alert"
  })
], -1), d5 = { class: "po-h-full po-flex" };
function c5(e, t, o, s, l, n) {
  return p(), d(F, null, [
    u5,
    r("div", d5, [
      K(e.$slots, "default")
    ])
  ], 64);
}
const xv = /* @__PURE__ */ Ht(p5, [["render", c5]]), f5 = { class: "po-grid po-grid-cols-1 md:po-grid-cols-3 lg:po-grid-cols-4 po-gap-3" }, v5 = { class: "po-flex po-items-end" }, h5 = {
  name: "PoFilter"
}, Vv = /* @__PURE__ */ T({
  ...h5,
  props: {
    filters: { default: null },
    btnLabel: { default: "Filter" },
    addToUrl: { type: Boolean, default: !0 },
    btnDisabled: { type: Boolean, default: !1 },
    hasClear: { type: Boolean, default: !1 }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    const o = e, s = V(o.filters), l = V(!1);
    function n() {
      if (o.addToUrl) {
        const i = new URLSearchParams(window.location.search);
        for (const v in s.value)
          if (Object.prototype.hasOwnProperty.call(s.value, v)) {
            const g = String(s.value[v]);
            g.trim() !== "" ? i.set(v, g) : i.delete(v);
          }
        const c = `${window.location.href.split("?")[0]}?${i.toString()}`;
        history.pushState({}, "", c), l.value = !!o.hasClear;
      }
      t("button-click", s.value);
    }
    function a() {
      const i = window.location.href.split("?")[0];
      history.pushState({}, "", i), l.value = !1;
    }
    return (i, u) => (p(), d("div", f5, [
      K(i.$slots, "default"),
      r("div", v5, [
        l.value ? (p(), H(S(gt), {
          key: 1,
          label: "Clear",
          onButtonClick: a
        })) : (p(), H(S(gt), {
          key: 0,
          label: i.btnLabel,
          onButtonClick: n,
          disabled: i.btnDisabled
        }, null, 8, ["label", "disabled"]))
      ])
    ]));
  }
}), m5 = { class: "po-grow po-flex po-items-end po-space-x-2" }, b5 = { class: "po-grow po-w-full po-max-w-lg lg:po-max-w-xs" }, g5 = /* @__PURE__ */ r("label", {
  for: "search",
  class: "po-sr-only"
}, "Search", -1), y5 = { class: "po-relative po-group" }, w5 = { class: "po-pointer-events-none po-absolute po-inset-y-0 po-left-0 po-flex po-items-center po-pl-3 po-z-10 po-top-[5px]" }, _5 = { class: "po-shrink-0" }, $5 = { class: "po-flex po-items-center po-space-x-2" }, x5 = {
  name: "PoSearch"
}, kv = /* @__PURE__ */ T({
  ...x5,
  props: {
    modelValue: { default: "" },
    placeholder: { default: "Search" },
    btnLabel: { default: "Search" },
    showBtn: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "button-click"],
  setup(e, { emit: t }) {
    const o = (a) => {
      let i = a.target.value;
      t("update:modelValue", i);
    }, { uniqueId: s, generateUniqueId: l } = Le(), n = V("card-search-field");
    return Z(() => {
      l(), n.value = s.value;
    }), (a, i) => (p(), d("div", m5, [
      r("div", b5, [
        g5,
        r("div", y5, [
          r("div", w5, [
            C(S(Qt), {
              class: "po-h-5 po-w-5 po-text-gray-400 group-focus-within:po-text-mpao-lightblue",
              "aria-hidden": "true"
            })
          ]),
          C(S(Hd), {
            placeholder: a.placeholder,
            styleClasses: "po-py-2 po-pl-10 po-pr-3",
            value: a.modelValue,
            onInput: o
          }, null, 8, ["placeholder", "value"])
        ])
      ]),
      r("div", _5, [
        C(S(gt), {
          "action-type": a.modelValue === "" ? "ghost" : "default",
          onClick: i[0] || (i[0] = te((u) => a.$emit("button-click", a.modelValue), ["prevent"]))
        }, {
          label: E(() => [
            r("span", $5, [
              C(S(Rs), { class: "-po-ml-1 po-w-4 po-h-4 po-stroke-current" }),
              r("span", null, k(a.btnLabel), 1)
            ])
          ]),
          _: 1
        }, 8, ["action-type"])
      ])
    ]));
  }
}), V5 = { class: "po-font-semibold po-text-white" }, k5 = {
  name: "PoAvatar"
}, Cv = /* @__PURE__ */ T({
  ...k5,
  props: {
    src: { default: "" },
    name: { default: "" },
    avatarSize: { default: "sm" },
    bgColor: {},
    isLoading: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, o = I(() => {
      var v, g;
      const c = ((g = (v = t.name) == null ? void 0 : v.match(/\b[A-Z]/g)) == null ? void 0 : g.join("")) || "";
      return c.length === 1 ? t.name.substring(0, 2) : c;
    }), s = I(() => t.avatarSize === "xs" ? "po-h-6 po-w-6 po-text-xs" : t.avatarSize === "sm" ? "po-h-8 po-w-8 po-text-sm" : t.avatarSize === "md" ? "po-h-10 po-w-10 po-font-medium" : t.avatarSize === "lg" ? "po-h-12 po-w-12 po-text-lg" : t.avatarSize === "xl" ? "po-h-14 po-w-14 po-text-xl" : t.avatarSize === "2xl" ? "po-h-24 po-w-24 po-text-xl" : null), l = [
      "po-bg-green-500",
      "po-bg-yellow-500",
      "po-bg-teal-500",
      "po-bg-cyan-500",
      "po-bg-sky-500",
      "po-bg-blue-500",
      "po-bg-rose-500",
      "po-bg-stone-500"
    ], n = I(() => {
      const c = Math.floor(Math.random() * l.length);
      return l[c];
    }), { isLoading: a } = Se(t), i = V(!1);
    Q(a, () => {
      u();
    }), Z(() => {
      u();
    });
    function u() {
      i.value = a.value;
    }
    return (c, v) => i.value ? (p(), d("span", {
      key: 1,
      class: L(["po-shrink-0 po-block loading-placeholder po-rounded-full", [s.value]])
    }, null, 2)) : (p(), d(F, { key: 0 }, [
      c.src ? (p(), d("span", {
        key: 0,
        class: L(["po-shrink-0 po-inline-flex po-rounded-full po-bg-cover po-bg-center", [s.value]]),
        style: ft(`background-image:url(${c.src})`)
      }, null, 6)) : (p(), d("span", {
        key: 1,
        class: L(["po-shrink-0 po-inline-flex po-items-center po-justify-center po-rounded-full", [s.value, n.value]])
      }, [
        r("span", V5, k(o.value), 1)
      ], 2))
    ], 64));
  }
}), C5 = {
  key: 0,
  class: "po-space-x-6 po-space-y-2"
}, S5 = { class: "po-grow po-text-sm po-text-slate-600 po-font-semibold po-select-none group-hover:po-text-mpao-lightblue po-transition-colors po-duration-75 po-ease-out" }, P5 = {
  key: 0,
  class: "po-shrink-0 po-flex po-items-center po-space-x-1 po-pl-2 po-pr-2 po-py-2 po-rounded-r-md po-bg-slate-50"
}, O5 = {
  name: "PoTree"
}, L5 = /* @__PURE__ */ T({
  ...O5,
  props: {
    node: { default: void 0 },
    showAddBtn: { type: Boolean, default: !1 },
    showViewBtn: { type: Boolean, default: !1 },
    showEditBtn: { type: Boolean, default: !1 },
    showDeleteBtn: { type: Boolean, default: !1 }
  },
  emits: [
    "add-click",
    "view-click",
    "edit-click",
    "delete-click"
  ],
  setup(e, { emit: t }) {
    const o = V(!1), s = (l, n) => `${l}-${n}`;
    return (l, n) => {
      var a, i, u, c, v;
      return l.node ? (p(), d("div", C5, [
        r("div", {
          class: L(["po-inline-flex po-items-center po-space-x-1 po-rounded-md po-shadow-md po-group", [
            { "po-bg-white": (a = l.node.children) == null ? void 0 : a.length },
            { "bg-white/60": !((i = l.node.children) != null && i.length) }
          ]])
        }, [
          r("div", {
            class: L(["po-flex po-items-center grow po-p-3 po-pr-2 po-space-x-1", [
              { "po-cursor-pointer": (u = l.node.children) == null ? void 0 : u.length },
              {
                "po-pr-4": !l.showAddBtn || !l.showViewBtn || !l.showEditBtn || !l.showDeleteBtn
              }
            ]]),
            onClick: n[0] || (n[0] = (g) => o.value = !o.value)
          }, [
            (c = l.node.children) != null && c.length ? (p(), H(S(Xi), {
              key: 0,
              class: L(["po-w-5 po-h-5 po-fill-slate-600 group-hover:po-fill-mpao-lightblue po-shrink-0 po-transition-all po-duration-75 po-ease-linear", [{ "po-rotate-90": o.value }]])
            }, null, 8, ["class"])) : x("", !0),
            r("span", S5, k(l.node.name), 1)
          ], 2),
          l.showAddBtn || l.showViewBtn || l.showEditBtn || l.showDeleteBtn ? (p(), d("div", P5, [
            l.showAddBtn ? (p(), H(S(Wt), {
              key: 0,
              "btn-type": "icon",
              "btn-icon": S(op),
              label: "Add",
              "icon-color": "po-fill-cyan-600",
              onClick: n[1] || (n[1] = (g) => l.$emit("add-click", l.node))
            }, null, 8, ["btn-icon"])) : x("", !0),
            l.showViewBtn ? (p(), H(S(Wt), {
              key: 1,
              "btn-type": "view",
              onClick: n[2] || (n[2] = (g) => l.$emit("view-click", l.node))
            })) : x("", !0),
            l.showEditBtn ? (p(), H(S(Wt), {
              key: 2,
              "btn-type": "edit",
              onClick: n[3] || (n[3] = (g) => l.$emit("edit-click", l.node))
            })) : x("", !0),
            l.showDeleteBtn ? (p(), H(S(Wt), {
              key: 3,
              "btn-type": "delete",
              onClick: n[4] || (n[4] = (g) => l.$emit("delete-click", l.node))
            })) : x("", !0)
          ])) : x("", !0)
        ], 2),
        (v = l.node.children) != null && v.length && o.value ? (p(!0), d(F, { key: 0 }, G(l.node.children, (g, _) => (p(), H(S(L5), {
          node: g,
          key: s(g.name, _),
          "show-add-btn": l.showAddBtn,
          "show-view-btn": l.showViewBtn,
          "show-edit-btn": l.showEditBtn,
          "show-delete-btn": l.showDeleteBtn,
          onViewClick: n[5] || (n[5] = (y) => l.$emit("view-click", y)),
          onAddClick: n[6] || (n[6] = (y) => l.$emit("add-click", y)),
          onEditClick: n[7] || (n[7] = (y) => l.$emit("edit-click", y)),
          onDeleteClick: n[8] || (n[8] = (y) => l.$emit("delete-click", y))
        }, null, 8, ["node", "show-add-btn", "show-view-btn", "show-edit-btn", "show-delete-btn"]))), 128)) : x("", !0)
      ])) : x("", !0);
    };
  }
}), M5 = { class: "po-pr-2 po-py-1 po-pl-1 po-text-slate-600 po-text-xs po-font-medium po-select-none" }, T5 = {
  name: "PoStatusPill"
}, Sv = /* @__PURE__ */ T({
  ...T5,
  props: {
    icon: { default: void 0 },
    label: { default: "" },
    color: { default: "green" },
    customIconColor: { default: "" },
    customBgColor: { default: "" },
    grayscale: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, o = I(() => {
      if (t.grayscale)
        return {
          icon: "po-fill-slate-400",
          bg: "po-bg-slate-100"
        };
      if (t.customIconColor !== "" && t.customBgColor !== "")
        return {
          icon: t.customIconColor,
          bg: t.customBgColor
        };
      if (t.color === "green")
        return {
          icon: "po-fill-green-400",
          bg: "po-bg-green-100"
        };
      if (t.color === "blue")
        return {
          icon: "po-fill-blue-400",
          bg: "po-bg-blue-100"
        };
      if (t.color === "red")
        return {
          icon: "po-fill-red-400",
          bg: "po-bg-red-100"
        };
    });
    return (s, l) => {
      var n, a;
      return p(), d("span", {
        class: L(["po-inline-flex po-rounded-xl po-pl-1 po-cursor-pointer", (n = o.value) == null ? void 0 : n.bg]),
        "aria-role": "button"
      }, [
        (p(), H(fe(s.icon), {
          class: L(["po-w-4", (a = o.value) == null ? void 0 : a.icon])
        }, null, 8, ["class"])),
        r("span", M5, k(s.label), 1)
      ], 2);
    };
  }
});
export {
  A5 as PoActionBar,
  ov as PoAlert,
  zn as PoAppIcon,
  Gr as PoAppTray,
  Cv as PoAvatar,
  gt as PoButton,
  j5 as PoCard,
  R5 as PoCardSearch,
  pv as PoCardTabs,
  Q5 as PoChatLogItem,
  W5 as PoCheckbox,
  tv as PoCommandPalette,
  iv as PoConsent,
  av as PoContentArea,
  cv as PoDRStatus,
  zd as PoDescriptionList,
  nv as PoDownloadFileList,
  dv as PoEmpty,
  Vv as PoFilter,
  Z5 as PoFooter,
  G5 as PoFormStatusMessage,
  vv as PoHeading,
  Hd as PoInputField,
  N5 as PoInputFile,
  rv as PoLoading,
  sv as PoLogs,
  lv as PoMain,
  wv as PoMessage,
  Ft as PoModal,
  q5 as PoMonthYearPicker,
  hv as PoMultiSelect,
  J5 as PoNotification,
  ri as PoNotificationHub,
  _v as PoPageStats,
  F5 as PoPageTitle,
  Nu as PoPagination,
  Di as PoProfileSwitcher,
  K5 as PoRadioInput,
  kv as PoSearch,
  qa as PoSearchBar,
  Y5 as PoSectionMenu,
  yv as PoSelectApi,
  Up as PoSelectField,
  E5 as PoSidebarDrawer,
  ev as PoSlideover,
  X5 as PoStatsBlock,
  Sv as PoStatusPill,
  H5 as PoTable,
  Wt as PoTableAction,
  bv as PoTableCheckbox,
  uv as PoTabs,
  au as PoTextarea,
  mv as PoTimeline,
  gv as PoToast,
  U5 as PoToggle,
  co as PoTooltip,
  I5 as PoTopBar,
  L5 as PoTree,
  $v as PoUpload,
  xv as PoWrap,
  fv as Rufiyaa
};
