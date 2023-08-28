import { openBlock as p, createElementBlock as d, createElementVNode as i, defineComponent as T, ref as $, toRefs as Se, watch as Q, onMounted as Z, Fragment as F, renderList as G, normalizeClass as L, createVNode as V, unref as P, withCtx as B, renderSlot as X, createBlock as H, resolveDynamicComponent as he, createCommentVNode as k, computed as z, toDisplayString as C, onBeforeUnmount as To, onUnmounted as re, withDirectives as Oe, isRef as Hl, withKeys as Nl, vModelText as Mt, vShow as Tt, cloneVNode as ql, h as se, inject as de, provide as fe, watchEffect as ve, Teleport as Dt, reactive as Ul, shallowRef as Is, nextTick as Do, toRaw as Ye, Transition as Ze, withModifiers as te, onBeforeMount as Yl, onBeforeUpdate as Wl, onUpdated as Io, mergeProps as Ie, createTextVNode as ee, pushScopeId as Zl, popScopeId as Gl, withScopeId as Kl, markRaw as Xl, shallowReactive as Ql, resolveComponent as zs, resolveDirective as Jl, normalizeStyle as ft, toHandlers as ea, normalizeProps as dt, guardReactiveProps as ct, createStaticVNode as ta } from "vue";
import { f as is, c as oa, d as ae, u as sa, t as la, a as aa } from "./FormatDate-9773d705.mjs";
function na(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    i("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
    })
  ]);
}
function ra(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    i("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
    })
  ]);
}
function ia(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    i("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
    })
  ]);
}
function pa(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    i("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
    })
  ]);
}
function ua(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    i("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
    })
  ]);
}
function da(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    i("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
    })
  ]);
}
function ca(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    i("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
    })
  ]);
}
function fa(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    i("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  ]);
}
function Bs(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    i("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 19.5L8.25 12l7.5-7.5"
    })
  ]);
}
function Es(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    i("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 4.5l7.5 7.5-7.5 7.5"
    })
  ]);
}
function va(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    i("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
    })
  ]);
}
function yo(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    i("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
    })
  ]);
}
function ha(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    i("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
    }),
    i("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
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
    i("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
    })
  ]);
}
function Xt(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    i("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
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
    i("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
    })
  ]);
}
function ma(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    i("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
    })
  ]);
}
function ba(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    i("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
    })
  ]);
}
function ga(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    i("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
    })
  ]);
}
function ps(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    i("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
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
    i("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6 18L18 6M6 6l12 12"
    })
  ]);
}
function ya(e) {
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
const xe = ya(), wa = { class: "po-bg-mpao-blue po-fixed po-top-0 po-left-0 po-right-0 po-w-full po-z-50 po-flex" }, _a = { class: "po-shrink-0 po-px-3 po-pt-3" }, $a = { class: "po-flex po-flex-col po-justify-center po-items-center po-w-5 po-h-5 po-space-y-[3px]" }, xa = { class: "po-mx-auto po-max-w-full po-pr-4 po-grow sm:po-pr-4" }, Va = { class: "po-flex po-relative po-h-16 po-items-center po-justify-between po-space-x-12" }, ka = { class: "po-flex po-items-center po-space-x-3" }, Ca = {
  key: 0,
  class: "po-block po-w-6 po-text-slate-100 md:po-hidden",
  role: "button"
}, Sa = {
  name: "PoTopBar"
}, h5 = /* @__PURE__ */ T({
  ...Sa,
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
    const o = e, s = $(""), l = $(""), a = $(!0), { avatar: n, logo: r } = Se(o);
    Q(n, () => {
      s.value = n.value;
    }), Q(r, () => {
      l.value = r.value;
    }), Z(() => {
      const w = localStorage.getItem("isSidebarOpen");
      w !== null && (a.value = JSON.parse(w), xe.emit("sidebarOpen", a.value));
    });
    function u(w) {
      t("profileSwitcherClick", w);
    }
    function c(w) {
      t("query", w);
    }
    function v(w) {
      t("onSearchClear", w);
    }
    function y() {
      a.value = !a.value, xe.emit("sidebarOpen", a.value), localStorage.setItem("isSidebarOpen", JSON.stringify(a.value));
    }
    return xe.on("sidebarOpen", (w) => {
      typeof w == "boolean" && (a.value = w, localStorage.setItem("isSidebarOpen", JSON.stringify(a.value)));
    }), (w, b) => (p(), d("nav", wa, [
      i("div", _a, [
        i("button", {
          for: "sidebar-drawer-toggle",
          role: "button",
          class: "genie-effect po-flex po-items-center po-justify-center po-bg-white/5 po-rounded-full po-w-10 po-h-10 po-select-none po-text-slate-100",
          onClick: y
        }, [
          i("span", $a, [
            (p(), d(F, null, G(3, (m) => i("span", {
              key: m,
              class: L(["po-block po-rounded-full po-bg-slate-100 po-transition-all po-duration-150 po-ease-in-out", [
                { "po-w-5 po-h-[2px]": !a.value },
                { "po-w-[3px] po-h-[3px]": a.value }
              ]])
            }, null, 2)), 64))
          ])
        ])
      ]),
      i("div", xa, [
        i("div", Va, [
          V(P(Ia), { "app-name": w.appName }, {
            icon: B(() => [
              X(w.$slots, "appIcon", {}, () => [
                w.appIcon ? (p(), H(he(w.appIcon), { key: 0 })) : k("", !0)
              ])
            ]),
            _: 3
          }, 8, ["app-name"]),
          w.hasSearch ? (p(), H(P(Nn), {
            key: 0,
            onQuery: c,
            onOnClear: v,
            "current-query": w.currentQuery,
            "show-tray": w.showSearchTray
          }, {
            default: B(() => [
              X(w.$slots, "searchTray")
            ]),
            _: 3
          }, 8, ["current-query", "show-tray"])) : k("", !0),
          i("div", ka, [
            w.hasSearch ? (p(), d("span", Ca, [
              V(P(Xt), { class: "po-stroke-current" })
            ])) : k("", !0),
            V(P(ni), {
              notifications: w.notifications,
              "has-new-notifications": w.hasNewNotifications
            }, null, 8, ["notifications", "has-new-notifications"]),
            V(P(Zr), {
              "app-list": w.appList,
              "open-in-new-tab": !0
            }, null, 8, ["app-list"]),
            V(P(Ti), {
              "user-object": w.userObject,
              avatar: s.value,
              logo: l.value,
              onButtonClick: u
            }, null, 8, ["user-object", "avatar", "logo"])
          ])
        ])
      ])
    ]));
  }
}), Pa = { class: "po-flex po-items-center po-justify-center po-space-x-3" }, Oa = { class: "po-w-8 po-text-slate-100 app-icon" }, La = { class: "po-font-light po-text-lg po-text-slate-100" }, Ma = { class: "po-hidden md:po-block" }, Ta = { class: "po-block md:po-hidden" }, Da = {
  name: "PoAppIcon"
}, Ia = /* @__PURE__ */ T({
  ...Da,
  props: {
    appName: { default: "App Name" }
  },
  setup(e) {
    const t = e, o = z(() => {
      if (!t.appName)
        return "";
      const s = t.appName.match(/\b[A-Z]/g);
      if (!s)
        return "";
      let l = s.join("");
      return l.length === 1 ? t.appName.substring(0, 3) : l;
    });
    return (s, l) => (p(), d("div", Pa, [
      i("div", Oa, [
        X(s.$slots, "icon")
      ]),
      i("span", La, [
        i("span", Ma, C(s.appName), 1),
        i("span", Ta, C(o.value), 1)
      ])
    ]));
  }
});
var me = "top", ke = "bottom", Ce = "right", be = "left", zo = "auto", It = [me, ke, Ce, be], vt = "start", Ot = "end", za = "clippingParents", Rs = "viewport", Vt = "popper", Ba = "reference", us = /* @__PURE__ */ It.reduce(function(e, t) {
  return e.concat([t + "-" + vt, t + "-" + Ot]);
}, []), Fs = /* @__PURE__ */ [].concat(It, [zo]).reduce(function(e, t) {
  return e.concat([t, t + "-" + vt, t + "-" + Ot]);
}, []), Ea = "beforeRead", Aa = "read", ja = "afterRead", Ra = "beforeMain", Fa = "main", Ha = "afterMain", Na = "beforeWrite", qa = "write", Ua = "afterWrite", Ya = [Ea, Aa, ja, Ra, Fa, Ha, Na, qa, Ua];
function Be(e) {
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
function Bo(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = _e(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Wa(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(o) {
    var s = t.styles[o] || {}, l = t.attributes[o] || {}, a = t.elements[o];
    !Ve(a) || !Be(a) || (Object.assign(a.style, s), Object.keys(l).forEach(function(n) {
      var r = l[n];
      r === !1 ? a.removeAttribute(n) : a.setAttribute(n, r === !0 ? "" : r);
    }));
  });
}
function Za(e) {
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
      var l = t.elements[s], a = t.attributes[s] || {}, n = Object.keys(t.styles.hasOwnProperty(s) ? t.styles[s] : o[s]), r = n.reduce(function(u, c) {
        return u[c] = "", u;
      }, {});
      !Ve(l) || !Be(l) || (Object.assign(l.style, r), Object.keys(a).forEach(function(u) {
        l.removeAttribute(u);
      }));
    });
  };
}
const Ga = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Wa,
  effect: Za,
  requires: ["computeStyles"]
};
function ze(e) {
  return e.split("-")[0];
}
var nt = Math.max, Kt = Math.min, ht = Math.round;
function wo() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Hs() {
  return !/^((?!chrome|android).)*safari/i.test(wo());
}
function mt(e, t, o) {
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  var s = e.getBoundingClientRect(), l = 1, a = 1;
  t && Ve(e) && (l = e.offsetWidth > 0 && ht(s.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && ht(s.height) / e.offsetHeight || 1);
  var n = it(e) ? _e(e) : window, r = n.visualViewport, u = !Hs() && o, c = (s.left + (u && r ? r.offsetLeft : 0)) / l, v = (s.top + (u && r ? r.offsetTop : 0)) / a, y = s.width / l, w = s.height / a;
  return {
    width: y,
    height: w,
    top: v,
    right: c + y,
    bottom: v + w,
    left: c,
    x: c,
    y: v
  };
}
function Eo(e) {
  var t = mt(e), o = e.offsetWidth, s = e.offsetHeight;
  return Math.abs(t.width - o) <= 1 && (o = t.width), Math.abs(t.height - s) <= 1 && (s = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: o,
    height: s
  };
}
function Ns(e, t) {
  var o = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (o && Bo(o)) {
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
function Ka(e) {
  return ["table", "td", "th"].indexOf(Be(e)) >= 0;
}
function Xe(e) {
  return ((it(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Jt(e) {
  return Be(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Bo(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Xe(e)
  );
}
function ds(e) {
  return !Ve(e) || // https://github.com/popperjs/popper-core/issues/837
  Fe(e).position === "fixed" ? null : e.offsetParent;
}
function Xa(e) {
  var t = /firefox/i.test(wo()), o = /Trident/i.test(wo());
  if (o && Ve(e)) {
    var s = Fe(e);
    if (s.position === "fixed")
      return null;
  }
  var l = Jt(e);
  for (Bo(l) && (l = l.host); Ve(l) && ["html", "body"].indexOf(Be(l)) < 0; ) {
    var a = Fe(l);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return l;
    l = l.parentNode;
  }
  return null;
}
function zt(e) {
  for (var t = _e(e), o = ds(e); o && Ka(o) && Fe(o).position === "static"; )
    o = ds(o);
  return o && (Be(o) === "html" || Be(o) === "body" && Fe(o).position === "static") ? t : o || Xa(e) || t;
}
function Ao(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function St(e, t, o) {
  return nt(e, Kt(t, o));
}
function Qa(e, t, o) {
  var s = St(e, t, o);
  return s > o ? o : s;
}
function qs() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Us(e) {
  return Object.assign({}, qs(), e);
}
function Ys(e, t) {
  return t.reduce(function(o, s) {
    return o[s] = e, o;
  }, {});
}
var Ja = function(t, o) {
  return t = typeof t == "function" ? t(Object.assign({}, o.rects, {
    placement: o.placement
  })) : t, Us(typeof t != "number" ? t : Ys(t, It));
};
function en(e) {
  var t, o = e.state, s = e.name, l = e.options, a = o.elements.arrow, n = o.modifiersData.popperOffsets, r = ze(o.placement), u = Ao(r), c = [be, Ce].indexOf(r) >= 0, v = c ? "height" : "width";
  if (!(!a || !n)) {
    var y = Ja(l.padding, o), w = Eo(a), b = u === "y" ? me : be, m = u === "y" ? ke : Ce, f = o.rects.reference[v] + o.rects.reference[u] - n[u] - o.rects.popper[v], h = n[u] - o.rects.reference[u], _ = zt(a), g = _ ? u === "y" ? _.clientHeight || 0 : _.clientWidth || 0 : 0, S = f / 2 - h / 2, x = y[b], I = g - w[v] - y[m], E = g / 2 - w[v] / 2 + S, R = St(x, E, I), D = u;
    o.modifiersData[s] = (t = {}, t[D] = R, t.centerOffset = R - E, t);
  }
}
function tn(e) {
  var t = e.state, o = e.options, s = o.element, l = s === void 0 ? "[data-popper-arrow]" : s;
  l != null && (typeof l == "string" && (l = t.elements.popper.querySelector(l), !l) || Ns(t.elements.popper, l) && (t.elements.arrow = l));
}
const on = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: en,
  effect: tn,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function bt(e) {
  return e.split("-")[1];
}
var sn = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function ln(e, t) {
  var o = e.x, s = e.y, l = t.devicePixelRatio || 1;
  return {
    x: ht(o * l) / l || 0,
    y: ht(s * l) / l || 0
  };
}
function cs(e) {
  var t, o = e.popper, s = e.popperRect, l = e.placement, a = e.variation, n = e.offsets, r = e.position, u = e.gpuAcceleration, c = e.adaptive, v = e.roundOffsets, y = e.isFixed, w = n.x, b = w === void 0 ? 0 : w, m = n.y, f = m === void 0 ? 0 : m, h = typeof v == "function" ? v({
    x: b,
    y: f
  }) : {
    x: b,
    y: f
  };
  b = h.x, f = h.y;
  var _ = n.hasOwnProperty("x"), g = n.hasOwnProperty("y"), S = be, x = me, I = window;
  if (c) {
    var E = zt(o), R = "clientHeight", D = "clientWidth";
    if (E === _e(o) && (E = Xe(o), Fe(E).position !== "static" && r === "absolute" && (R = "scrollHeight", D = "scrollWidth")), E = E, l === me || (l === be || l === Ce) && a === Ot) {
      x = ke;
      var M = y && E === I && I.visualViewport ? I.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        E[R]
      );
      f -= M - s.height, f *= u ? 1 : -1;
    }
    if (l === be || (l === me || l === ke) && a === Ot) {
      S = Ce;
      var O = y && E === I && I.visualViewport ? I.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        E[D]
      );
      b -= O - s.width, b *= u ? 1 : -1;
    }
  }
  var A = Object.assign({
    position: r
  }, c && sn), q = v === !0 ? ln({
    x: b,
    y: f
  }, _e(o)) : {
    x: b,
    y: f
  };
  if (b = q.x, f = q.y, u) {
    var N;
    return Object.assign({}, A, (N = {}, N[x] = g ? "0" : "", N[S] = _ ? "0" : "", N.transform = (I.devicePixelRatio || 1) <= 1 ? "translate(" + b + "px, " + f + "px)" : "translate3d(" + b + "px, " + f + "px, 0)", N));
  }
  return Object.assign({}, A, (t = {}, t[x] = g ? f + "px" : "", t[S] = _ ? b + "px" : "", t.transform = "", t));
}
function an(e) {
  var t = e.state, o = e.options, s = o.gpuAcceleration, l = s === void 0 ? !0 : s, a = o.adaptive, n = a === void 0 ? !0 : a, r = o.roundOffsets, u = r === void 0 ? !0 : r, c = {
    placement: ze(t.placement),
    variation: bt(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: l,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, cs(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: n,
    roundOffsets: u
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, cs(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: u
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const nn = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: an,
  data: {}
};
var qt = {
  passive: !0
};
function rn(e) {
  var t = e.state, o = e.instance, s = e.options, l = s.scroll, a = l === void 0 ? !0 : l, n = s.resize, r = n === void 0 ? !0 : n, u = _e(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && c.forEach(function(v) {
    v.addEventListener("scroll", o.update, qt);
  }), r && u.addEventListener("resize", o.update, qt), function() {
    a && c.forEach(function(v) {
      v.removeEventListener("scroll", o.update, qt);
    }), r && u.removeEventListener("resize", o.update, qt);
  };
}
const pn = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: rn,
  data: {}
};
var un = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Wt(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return un[t];
  });
}
var dn = {
  start: "end",
  end: "start"
};
function fs(e) {
  return e.replace(/start|end/g, function(t) {
    return dn[t];
  });
}
function jo(e) {
  var t = _e(e), o = t.pageXOffset, s = t.pageYOffset;
  return {
    scrollLeft: o,
    scrollTop: s
  };
}
function Ro(e) {
  return mt(Xe(e)).left + jo(e).scrollLeft;
}
function cn(e, t) {
  var o = _e(e), s = Xe(e), l = o.visualViewport, a = s.clientWidth, n = s.clientHeight, r = 0, u = 0;
  if (l) {
    a = l.width, n = l.height;
    var c = Hs();
    (c || !c && t === "fixed") && (r = l.offsetLeft, u = l.offsetTop);
  }
  return {
    width: a,
    height: n,
    x: r + Ro(e),
    y: u
  };
}
function fn(e) {
  var t, o = Xe(e), s = jo(e), l = (t = e.ownerDocument) == null ? void 0 : t.body, a = nt(o.scrollWidth, o.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0), n = nt(o.scrollHeight, o.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0), r = -s.scrollLeft + Ro(e), u = -s.scrollTop;
  return Fe(l || o).direction === "rtl" && (r += nt(o.clientWidth, l ? l.clientWidth : 0) - a), {
    width: a,
    height: n,
    x: r,
    y: u
  };
}
function Fo(e) {
  var t = Fe(e), o = t.overflow, s = t.overflowX, l = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + l + s);
}
function Ws(e) {
  return ["html", "body", "#document"].indexOf(Be(e)) >= 0 ? e.ownerDocument.body : Ve(e) && Fo(e) ? e : Ws(Jt(e));
}
function Pt(e, t) {
  var o;
  t === void 0 && (t = []);
  var s = Ws(e), l = s === ((o = e.ownerDocument) == null ? void 0 : o.body), a = _e(s), n = l ? [a].concat(a.visualViewport || [], Fo(s) ? s : []) : s, r = t.concat(n);
  return l ? r : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    r.concat(Pt(Jt(n)))
  );
}
function _o(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function vn(e, t) {
  var o = mt(e, !1, t === "fixed");
  return o.top = o.top + e.clientTop, o.left = o.left + e.clientLeft, o.bottom = o.top + e.clientHeight, o.right = o.left + e.clientWidth, o.width = e.clientWidth, o.height = e.clientHeight, o.x = o.left, o.y = o.top, o;
}
function vs(e, t, o) {
  return t === Rs ? _o(cn(e, o)) : it(t) ? vn(t, o) : _o(fn(Xe(e)));
}
function hn(e) {
  var t = Pt(Jt(e)), o = ["absolute", "fixed"].indexOf(Fe(e).position) >= 0, s = o && Ve(e) ? zt(e) : e;
  return it(s) ? t.filter(function(l) {
    return it(l) && Ns(l, s) && Be(l) !== "body";
  }) : [];
}
function mn(e, t, o, s) {
  var l = t === "clippingParents" ? hn(e) : [].concat(t), a = [].concat(l, [o]), n = a[0], r = a.reduce(function(u, c) {
    var v = vs(e, c, s);
    return u.top = nt(v.top, u.top), u.right = Kt(v.right, u.right), u.bottom = Kt(v.bottom, u.bottom), u.left = nt(v.left, u.left), u;
  }, vs(e, n, s));
  return r.width = r.right - r.left, r.height = r.bottom - r.top, r.x = r.left, r.y = r.top, r;
}
function Zs(e) {
  var t = e.reference, o = e.element, s = e.placement, l = s ? ze(s) : null, a = s ? bt(s) : null, n = t.x + t.width / 2 - o.width / 2, r = t.y + t.height / 2 - o.height / 2, u;
  switch (l) {
    case me:
      u = {
        x: n,
        y: t.y - o.height
      };
      break;
    case ke:
      u = {
        x: n,
        y: t.y + t.height
      };
      break;
    case Ce:
      u = {
        x: t.x + t.width,
        y: r
      };
      break;
    case be:
      u = {
        x: t.x - o.width,
        y: r
      };
      break;
    default:
      u = {
        x: t.x,
        y: t.y
      };
  }
  var c = l ? Ao(l) : null;
  if (c != null) {
    var v = c === "y" ? "height" : "width";
    switch (a) {
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
  var o = t, s = o.placement, l = s === void 0 ? e.placement : s, a = o.strategy, n = a === void 0 ? e.strategy : a, r = o.boundary, u = r === void 0 ? za : r, c = o.rootBoundary, v = c === void 0 ? Rs : c, y = o.elementContext, w = y === void 0 ? Vt : y, b = o.altBoundary, m = b === void 0 ? !1 : b, f = o.padding, h = f === void 0 ? 0 : f, _ = Us(typeof h != "number" ? h : Ys(h, It)), g = w === Vt ? Ba : Vt, S = e.rects.popper, x = e.elements[m ? g : w], I = mn(it(x) ? x : x.contextElement || Xe(e.elements.popper), u, v, n), E = mt(e.elements.reference), R = Zs({
    reference: E,
    element: S,
    strategy: "absolute",
    placement: l
  }), D = _o(Object.assign({}, S, R)), M = w === Vt ? D : E, O = {
    top: I.top - M.top + _.top,
    bottom: M.bottom - I.bottom + _.bottom,
    left: I.left - M.left + _.left,
    right: M.right - I.right + _.right
  }, A = e.modifiersData.offset;
  if (w === Vt && A) {
    var q = A[l];
    Object.keys(O).forEach(function(N) {
      var U = [Ce, ke].indexOf(N) >= 0 ? 1 : -1, W = [me, ke].indexOf(N) >= 0 ? "y" : "x";
      O[N] += q[W] * U;
    });
  }
  return O;
}
function bn(e, t) {
  t === void 0 && (t = {});
  var o = t, s = o.placement, l = o.boundary, a = o.rootBoundary, n = o.padding, r = o.flipVariations, u = o.allowedAutoPlacements, c = u === void 0 ? Fs : u, v = bt(s), y = v ? r ? us : us.filter(function(m) {
    return bt(m) === v;
  }) : It, w = y.filter(function(m) {
    return c.indexOf(m) >= 0;
  });
  w.length === 0 && (w = y);
  var b = w.reduce(function(m, f) {
    return m[f] = Lt(e, {
      placement: f,
      boundary: l,
      rootBoundary: a,
      padding: n
    })[ze(f)], m;
  }, {});
  return Object.keys(b).sort(function(m, f) {
    return b[m] - b[f];
  });
}
function gn(e) {
  if (ze(e) === zo)
    return [];
  var t = Wt(e);
  return [fs(e), t, fs(t)];
}
function yn(e) {
  var t = e.state, o = e.options, s = e.name;
  if (!t.modifiersData[s]._skip) {
    for (var l = o.mainAxis, a = l === void 0 ? !0 : l, n = o.altAxis, r = n === void 0 ? !0 : n, u = o.fallbackPlacements, c = o.padding, v = o.boundary, y = o.rootBoundary, w = o.altBoundary, b = o.flipVariations, m = b === void 0 ? !0 : b, f = o.allowedAutoPlacements, h = t.options.placement, _ = ze(h), g = _ === h, S = u || (g || !m ? [Wt(h)] : gn(h)), x = [h].concat(S).reduce(function(Te, De) {
      return Te.concat(ze(De) === zo ? bn(t, {
        placement: De,
        boundary: v,
        rootBoundary: y,
        padding: c,
        flipVariations: m,
        allowedAutoPlacements: f
      }) : De);
    }, []), I = t.rects.reference, E = t.rects.popper, R = /* @__PURE__ */ new Map(), D = !0, M = x[0], O = 0; O < x.length; O++) {
      var A = x[O], q = ze(A), N = bt(A) === vt, U = [me, ke].indexOf(q) >= 0, W = U ? "width" : "height", Y = Lt(t, {
        placement: A,
        boundary: v,
        rootBoundary: y,
        altBoundary: w,
        padding: c
      }), K = U ? N ? Ce : be : N ? ke : me;
      I[W] > E[W] && (K = Wt(K));
      var ce = Wt(K), J = [];
      if (a && J.push(Y[q] <= 0), r && J.push(Y[K] <= 0, Y[ce] <= 0), J.every(function(Te) {
        return Te;
      })) {
        M = A, D = !1;
        break;
      }
      R.set(A, J);
    }
    if (D)
      for (var $e = m ? 3 : 1, Re = function(De) {
        var Qe = x.find(function(Je) {
          var Pe = R.get(Je);
          if (Pe)
            return Pe.slice(0, De).every(function(et) {
              return et;
            });
        });
        if (Qe)
          return M = Qe, "break";
      }, Me = $e; Me > 0; Me--) {
        var qe = Re(Me);
        if (qe === "break")
          break;
      }
    t.placement !== M && (t.modifiersData[s]._skip = !0, t.placement = M, t.reset = !0);
  }
}
const wn = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: yn,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function hs(e, t, o) {
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
function ms(e) {
  return [me, Ce, ke, be].some(function(t) {
    return e[t] >= 0;
  });
}
function _n(e) {
  var t = e.state, o = e.name, s = t.rects.reference, l = t.rects.popper, a = t.modifiersData.preventOverflow, n = Lt(t, {
    elementContext: "reference"
  }), r = Lt(t, {
    altBoundary: !0
  }), u = hs(n, s), c = hs(r, l, a), v = ms(u), y = ms(c);
  t.modifiersData[o] = {
    referenceClippingOffsets: u,
    popperEscapeOffsets: c,
    isReferenceHidden: v,
    hasPopperEscaped: y
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": v,
    "data-popper-escaped": y
  });
}
const $n = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: _n
};
function xn(e, t, o) {
  var s = ze(e), l = [be, me].indexOf(s) >= 0 ? -1 : 1, a = typeof o == "function" ? o(Object.assign({}, t, {
    placement: e
  })) : o, n = a[0], r = a[1];
  return n = n || 0, r = (r || 0) * l, [be, Ce].indexOf(s) >= 0 ? {
    x: r,
    y: n
  } : {
    x: n,
    y: r
  };
}
function Vn(e) {
  var t = e.state, o = e.options, s = e.name, l = o.offset, a = l === void 0 ? [0, 0] : l, n = Fs.reduce(function(v, y) {
    return v[y] = xn(y, t.rects, a), v;
  }, {}), r = n[t.placement], u = r.x, c = r.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += c), t.modifiersData[s] = n;
}
const kn = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Vn
};
function Cn(e) {
  var t = e.state, o = e.name;
  t.modifiersData[o] = Zs({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Sn = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Cn,
  data: {}
};
function Pn(e) {
  return e === "x" ? "y" : "x";
}
function On(e) {
  var t = e.state, o = e.options, s = e.name, l = o.mainAxis, a = l === void 0 ? !0 : l, n = o.altAxis, r = n === void 0 ? !1 : n, u = o.boundary, c = o.rootBoundary, v = o.altBoundary, y = o.padding, w = o.tether, b = w === void 0 ? !0 : w, m = o.tetherOffset, f = m === void 0 ? 0 : m, h = Lt(t, {
    boundary: u,
    rootBoundary: c,
    padding: y,
    altBoundary: v
  }), _ = ze(t.placement), g = bt(t.placement), S = !g, x = Ao(_), I = Pn(x), E = t.modifiersData.popperOffsets, R = t.rects.reference, D = t.rects.popper, M = typeof f == "function" ? f(Object.assign({}, t.rects, {
    placement: t.placement
  })) : f, O = typeof M == "number" ? {
    mainAxis: M,
    altAxis: M
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, M), A = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, q = {
    x: 0,
    y: 0
  };
  if (E) {
    if (a) {
      var N, U = x === "y" ? me : be, W = x === "y" ? ke : Ce, Y = x === "y" ? "height" : "width", K = E[x], ce = K + h[U], J = K - h[W], $e = b ? -D[Y] / 2 : 0, Re = g === vt ? R[Y] : D[Y], Me = g === vt ? -D[Y] : -R[Y], qe = t.elements.arrow, Te = b && qe ? Eo(qe) : {
        width: 0,
        height: 0
      }, De = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : qs(), Qe = De[U], Je = De[W], Pe = St(0, R[Y], Te[Y]), et = S ? R[Y] / 2 - $e - Pe - Qe - O.mainAxis : Re - Pe - Qe - O.mainAxis, wt = S ? -R[Y] / 2 + $e + Pe + Je + O.mainAxis : Me + Pe + Je + O.mainAxis, Ue = t.elements.arrow && zt(t.elements.arrow), _t = Ue ? x === "y" ? Ue.clientTop || 0 : Ue.clientLeft || 0 : 0, ut = (N = A == null ? void 0 : A[x]) != null ? N : 0, $t = K + et - ut - _t, xt = K + wt - ut, co = St(b ? Kt(ce, $t) : ce, K, b ? nt(J, xt) : J);
      E[x] = co, q[x] = co - K;
    }
    if (r) {
      var ts, Rl = x === "x" ? me : be, Fl = x === "x" ? ke : Ce, tt = E[I], Nt = I === "y" ? "height" : "width", os = tt + h[Rl], ss = tt - h[Fl], fo = [me, be].indexOf(_) !== -1, ls = (ts = A == null ? void 0 : A[I]) != null ? ts : 0, as = fo ? os : tt - R[Nt] - D[Nt] - ls + O.altAxis, ns = fo ? tt + R[Nt] + D[Nt] - ls - O.altAxis : ss, rs = b && fo ? Qa(as, tt, ns) : St(b ? as : os, tt, b ? ns : ss);
      E[I] = rs, q[I] = rs - tt;
    }
    t.modifiersData[s] = q;
  }
}
const Ln = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: On,
  requiresIfExists: ["offset"]
};
function Mn(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Tn(e) {
  return e === _e(e) || !Ve(e) ? jo(e) : Mn(e);
}
function Dn(e) {
  var t = e.getBoundingClientRect(), o = ht(t.width) / e.offsetWidth || 1, s = ht(t.height) / e.offsetHeight || 1;
  return o !== 1 || s !== 1;
}
function In(e, t, o) {
  o === void 0 && (o = !1);
  var s = Ve(t), l = Ve(t) && Dn(t), a = Xe(t), n = mt(e, l, o), r = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = {
    x: 0,
    y: 0
  };
  return (s || !s && !o) && ((Be(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Fo(a)) && (r = Tn(t)), Ve(t) ? (u = mt(t, !0), u.x += t.clientLeft, u.y += t.clientTop) : a && (u.x = Ro(a))), {
    x: n.left + r.scrollLeft - u.x,
    y: n.top + r.scrollTop - u.y,
    width: n.width,
    height: n.height
  };
}
function zn(e) {
  var t = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), s = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function l(a) {
    o.add(a.name);
    var n = [].concat(a.requires || [], a.requiresIfExists || []);
    n.forEach(function(r) {
      if (!o.has(r)) {
        var u = t.get(r);
        u && l(u);
      }
    }), s.push(a);
  }
  return e.forEach(function(a) {
    o.has(a.name) || l(a);
  }), s;
}
function Bn(e) {
  var t = zn(e);
  return Ya.reduce(function(o, s) {
    return o.concat(t.filter(function(l) {
      return l.phase === s;
    }));
  }, []);
}
function En(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(o) {
      Promise.resolve().then(function() {
        t = void 0, o(e());
      });
    })), t;
  };
}
function An(e) {
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
var bs = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function gs() {
  for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
    t[o] = arguments[o];
  return !t.some(function(s) {
    return !(s && typeof s.getBoundingClientRect == "function");
  });
}
function jn(e) {
  e === void 0 && (e = {});
  var t = e, o = t.defaultModifiers, s = o === void 0 ? [] : o, l = t.defaultOptions, a = l === void 0 ? bs : l;
  return function(r, u, c) {
    c === void 0 && (c = a);
    var v = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, bs, a),
      modifiersData: {},
      elements: {
        reference: r,
        popper: u
      },
      attributes: {},
      styles: {}
    }, y = [], w = !1, b = {
      state: v,
      setOptions: function(_) {
        var g = typeof _ == "function" ? _(v.options) : _;
        f(), v.options = Object.assign({}, a, v.options, g), v.scrollParents = {
          reference: it(r) ? Pt(r) : r.contextElement ? Pt(r.contextElement) : [],
          popper: Pt(u)
        };
        var S = Bn(An([].concat(s, v.options.modifiers)));
        return v.orderedModifiers = S.filter(function(x) {
          return x.enabled;
        }), m(), b.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!w) {
          var _ = v.elements, g = _.reference, S = _.popper;
          if (gs(g, S)) {
            v.rects = {
              reference: In(g, zt(S), v.options.strategy === "fixed"),
              popper: Eo(S)
            }, v.reset = !1, v.placement = v.options.placement, v.orderedModifiers.forEach(function(O) {
              return v.modifiersData[O.name] = Object.assign({}, O.data);
            });
            for (var x = 0; x < v.orderedModifiers.length; x++) {
              if (v.reset === !0) {
                v.reset = !1, x = -1;
                continue;
              }
              var I = v.orderedModifiers[x], E = I.fn, R = I.options, D = R === void 0 ? {} : R, M = I.name;
              typeof E == "function" && (v = E({
                state: v,
                options: D,
                name: M,
                instance: b
              }) || v);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: En(function() {
        return new Promise(function(h) {
          b.forceUpdate(), h(v);
        });
      }),
      destroy: function() {
        f(), w = !0;
      }
    };
    if (!gs(r, u))
      return b;
    b.setOptions(c).then(function(h) {
      !w && c.onFirstUpdate && c.onFirstUpdate(h);
    });
    function m() {
      v.orderedModifiers.forEach(function(h) {
        var _ = h.name, g = h.options, S = g === void 0 ? {} : g, x = h.effect;
        if (typeof x == "function") {
          var I = x({
            state: v,
            name: _,
            instance: b,
            options: S
          }), E = function() {
          };
          y.push(I || E);
        }
      });
    }
    function f() {
      y.forEach(function(h) {
        return h();
      }), y = [];
    }
    return b;
  };
}
var Rn = [pn, Sn, nn, Ga, kn, wn, Ln, on, $n], Bt = /* @__PURE__ */ jn({
  defaultModifiers: Rn
});
function Et(e, t) {
  if (!e)
    return;
  const o = (s) => {
    s.target !== e.value && s.composedPath().includes(e.value) || typeof t == "function" && t();
  };
  return Z(() => {
    window.addEventListener("click", o);
  }), To(() => {
    window.removeEventListener("click", o);
  }), { listener: o };
}
const Fn = ["placeholder", "onKeyup"], Hn = {
  name: "PoSearchBar"
}, Nn = /* @__PURE__ */ T({
  ...Hn,
  props: {
    placeholder: { default: "Search" },
    currentQuery: { default: "" },
    showTray: { type: Boolean, default: !1 }
  },
  emits: ["query", "onClear"],
  setup(e, { emit: t }) {
    const o = e, s = $(!1), l = $(null), a = $(), n = $(), r = $({
      viewStartIdx: 0,
      viewEndIdx: 0,
      visibleStartIdx: 0,
      visibleEndIdx: 0
    });
    let u = $(""), c;
    const v = (m) => {
      t("query", u.value);
    };
    function y() {
      t("query", u.value);
    }
    Z(() => {
      o.showTray && setTimeout(() => {
        c = Bt(a.value, n.value, {
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
      }, 320);
    }), Q(u, async (m, f) => {
      m === "" && t("onClear", !0);
    }), Et(l, () => {
      o.showTray && (s.value = !1);
    }), xe.on("sidebarOpen", (m) => {
      setTimeout(() => {
        c && o.showTray && c.update();
      }, 320);
    }), re(() => {
      c && o.showTray && c.destroy();
    });
    function w(m, f, h, _) {
      r.value.viewStartIdx = m, r.value.viewEndIdx = f, r.value.visibleStartIdx = h, r.value.visibleEndIdx = _;
    }
    function b() {
      c && c.update();
    }
    return (m, f) => (p(), d("div", {
      class: "po-flex-grow po-hidden po-relative md:po-block",
      ref_key: "containerRef",
      ref: l
    }, [
      i("span", {
        class: L(["po-absolute po-top-[5px] po-right-[5px] po-text-xs po-rounded-lg po-px-4 po-py-2 po-cursor-pointer po-transition-colors po-duration-150 po-ease-out", [
          {
            "po-text-slate-200 po-bg-slate-500/60 hover:po-bg-slate-500": !m.showTray || !s.value
          },
          {
            "po-text-slate-400 po-bg-slate-200/60 hover:po-bg-slate-200": m.showTray && s.value
          },
          { "po-hidden": P(u) === "" }
        ]]),
        onClick: y
      }, "Search", 2),
      Oe(i("input", {
        "onUpdate:modelValue": f[0] || (f[0] = (h) => Hl(u) ? u.value = h : u = h),
        type: "text",
        ref_key: "mainSearchBox",
        ref: a,
        id: "main-search",
        placeholder: m.placeholder,
        onKeyup: Nl(v, ["enter"]),
        onFocus: f[1] || (f[1] = (h) => s.value = !0),
        autocomplete: "off",
        class: L(["peer/search po-border-transparent po-text-sm po-ring-0 po-outline-none focus:po-outline-none focus:po-ring-0 po-transition-colors po-ease-linear po-duration-100 po-block po-w-full po-pl-10 po-p-2.5 po-appearance-none hover:po-border-white/40", [
          {
            "po-rounded-md po-border focus:po-border-slate-400 po-bg-transparent po-text-slate-100 po-placeholder-white/60": !m.showTray || !s.value
          },
          {
            "po-rounded-t-md po-border-2 focus:po-border-white po-bg-white po-text-slate-600": m.showTray && s.value
          }
        ]])
      }, null, 42, Fn), [
        [Mt, P(u)]
      ]),
      i("div", {
        class: L(["po-absolute po-inset-y-0 po-left-0 po-flex po-items-center po-pl-3 po-pointer-events-none po-transition-all po-ease-linear po-duration-100 po-origin-center peer-hover/search:po-scale-105", [
          {
            "po-text-white/50 peer-focus/search:po-text-white/50": !m.showTray || !s.value
          },
          {
            "po-text-black/30 peer-focus/search:po-text-black/30": m.showTray && s.value
          }
        ]])
      }, [
        V(P(Xt), { class: "po-w-5 po-h-5 po-stroke-current" })
      ], 2),
      Oe(i("div", {
        ref_key: "popper",
        ref: n,
        class: "po-absolute po-z-[51] po-mt-1 po-w-full po-rounded-b-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm",
        onResize: b,
        onUpdate: w
      }, [
        X(m.$slots, "default")
      ], 544), [
        [Tt, s.value && m.showTray]
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
  var a;
  let n = Ks(s, o), r = Object.assign(l, { props: n });
  if (e || t & 2 && n.static)
    return vo(r);
  if (t & 1) {
    let u = (a = n.unmount) == null || a ? 0 : 1;
    return ue(u, { [0]() {
      return null;
    }, [1]() {
      return vo({ ...l, props: { ...n, hidden: !0, style: { display: "none" } } });
    } });
  }
  return vo(r);
}
function vo({ props: e, attrs: t, slots: o, slot: s, name: l }) {
  var a, n;
  let { as: r, ...u } = eo(e, ["unmount", "static"]), c = (a = o.default) == null ? void 0 : a.call(o, s), v = {};
  if (s) {
    let y = !1, w = [];
    for (let [b, m] of Object.entries(s))
      typeof m == "boolean" && (y = !0), m === !0 && w.push(b);
    y && (v["data-headlessui-state"] = w.join(" "));
  }
  if (r === "template") {
    if (c = Gs(c ?? []), Object.keys(u).length > 0 || Object.keys(t).length > 0) {
      let [y, ...w] = c ?? [];
      if (!qn(y) || w.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${l} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(u).concat(Object.keys(t)).map((f) => f.trim()).filter((f, h, _) => _.indexOf(f) === h).sort((f, h) => f.localeCompare(h)).map((f) => `  - ${f}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((f) => `  - ${f}`).join(`
`)].join(`
`));
      let b = Ks((n = y.props) != null ? n : {}, u), m = ql(y, b);
      for (let f in b)
        f.startsWith("on") && (m.props || (m.props = {}), m.props[f] = b[f]);
      return m;
    }
    return Array.isArray(c) && c.length === 1 ? c[0] : c;
  }
  return se(r, Object.assign({}, u, v), { default: () => c });
}
function Gs(e) {
  return e.flatMap((t) => t.type === F ? Gs(t.children) : [t]);
}
function Ks(...e) {
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
    Object.assign(t, { [s](l, ...a) {
      let n = o[s];
      for (let r of n) {
        if (l instanceof Event && l.defaultPrevented)
          return;
        r(l, ...a);
      }
    } });
  return t;
}
function Xs(e) {
  let t = Object.assign({}, e);
  for (let o in t)
    t[o] === void 0 && delete t[o];
  return t;
}
function eo(e, t = []) {
  let o = Object.assign({}, e);
  for (let s of t)
    s in o && delete o[s];
  return o;
}
function qn(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Un = 0;
function Yn() {
  return ++Un;
}
function pe() {
  return Yn();
}
var ne = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(ne || {});
function j(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Qs = Symbol("Context");
var le = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(le || {});
function Wn() {
  return yt() !== null;
}
function yt() {
  return de(Qs, null);
}
function Ho(e) {
  fe(Qs, e);
}
function ys(e, t) {
  if (e)
    return e;
  let o = t ?? "button";
  if (typeof o == "string" && o.toLowerCase() === "button")
    return "button";
}
function No(e, t) {
  let o = $(ys(e.value.type, e.value.as));
  return Z(() => {
    o.value = ys(e.value.type, e.value.as);
  }), ve(() => {
    var s;
    o.value || j(t) && j(t) instanceof HTMLButtonElement && !((s = j(t)) != null && s.hasAttribute("type")) && (o.value = "button");
  }), o;
}
var Zn = Object.defineProperty, Gn = (e, t, o) => t in e ? Zn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, ws = (e, t, o) => (Gn(e, typeof t != "symbol" ? t + "" : t, o), o);
let Kn = class {
  constructor() {
    ws(this, "current", this.detect()), ws(this, "currentId", 0);
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
}, At = new Kn();
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
function Xn({ container: e, accept: t, walk: o, enabled: s }) {
  ve(() => {
    let l = e.value;
    if (!l || s !== void 0 && !s.value)
      return;
    let a = we(e);
    if (!a)
      return;
    let n = Object.assign((u) => t(u), { acceptNode: t }), r = a.createTreeWalker(l, NodeFilter.SHOW_ELEMENT, n, !1);
    for (; r.nextNode(); )
      o(r.currentNode);
  });
}
let $o = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var ie = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ie || {}), pt = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(pt || {}), Qn = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Qn || {});
function to(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll($o)).sort((t, o) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (o.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var qo = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(qo || {});
function Js(e, t = 0) {
  var o;
  return e === ((o = we(e)) == null ? void 0 : o.body) ? !1 : ue(t, { [0]() {
    return e.matches($o);
  }, [1]() {
    let s = e;
    for (; s !== null; ) {
      if (s.matches($o))
        return !0;
      s = s.parentElement;
    }
    return !1;
  } });
}
function rt(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Jn = ["textarea", "input"].join(",");
function er(e) {
  var t, o;
  return (o = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Jn)) != null ? o : !1;
}
function el(e, t = (o) => o) {
  return e.slice().sort((o, s) => {
    let l = t(o), a = t(s);
    if (l === null || a === null)
      return 0;
    let n = l.compareDocumentPosition(a);
    return n & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function ge(e, t, { sorted: o = !0, relativeTo: s = null, skipElements: l = [] } = {}) {
  var a;
  let n = (a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? a : document, r = Array.isArray(e) ? o ? el(e) : e : to(e);
  l.length > 0 && r.length > 1 && (r = r.filter((m) => !l.includes(m))), s = s ?? n.activeElement;
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
      return Math.max(0, r.indexOf(s)) - 1;
    if (t & 4)
      return Math.max(0, r.indexOf(s)) + 1;
    if (t & 8)
      return r.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), v = t & 32 ? { preventScroll: !0 } : {}, y = 0, w = r.length, b;
  do {
    if (y >= w || y + w <= 0)
      return 0;
    let m = c + y;
    if (t & 16)
      m = (m + w) % w;
    else {
      if (m < 0)
        return 3;
      if (m >= w)
        return 1;
    }
    b = r[m], b == null || b.focus(v), y += u;
  } while (b !== n.activeElement);
  return t & 6 && er(b) && b.select(), b.hasAttribute("tabindex") || b.setAttribute("tabindex", "0"), 2;
}
function ho(e, t, o) {
  At.isServer || ve((s) => {
    document.addEventListener(e, t, o), s(() => document.removeEventListener(e, t, o));
  });
}
function tl(e, t, o = z(() => !0)) {
  function s(a, n) {
    if (!o.value || a.defaultPrevented)
      return;
    let r = n(a);
    if (r === null || !r.getRootNode().contains(r))
      return;
    let u = function c(v) {
      return typeof v == "function" ? c(v()) : Array.isArray(v) || v instanceof Set ? v : [v];
    }(e);
    for (let c of u) {
      if (c === null)
        continue;
      let v = c instanceof HTMLElement ? c : j(c);
      if (v != null && v.contains(r) || a.composed && a.composedPath().includes(v))
        return;
    }
    return !Js(r, qo.Loose) && r.tabIndex !== -1 && a.preventDefault(), t(a, r);
  }
  let l = $(null);
  ho("mousedown", (a) => {
    var n, r;
    o.value && (l.value = ((r = (n = a.composedPath) == null ? void 0 : n.call(a)) == null ? void 0 : r[0]) || a.target);
  }, !0), ho("click", (a) => {
    l.value && (s(a, () => l.value), l.value = null);
  }, !0), ho("blur", (a) => s(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var He = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(He || {});
let Ge = T({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: o }) {
  return () => {
    let { features: s, ...l } = e, a = { "aria-hidden": (s & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(s & 4) === 4 && (s & 2) !== 2 && { display: "none" } } };
    return oe({ ourProps: a, theirProps: l, slot: {}, attrs: o, slots: t, name: "Hidden" });
  };
} });
function ol(e = {}, t = null, o = []) {
  for (let [s, l] of Object.entries(e))
    ll(o, sl(t, s), l);
  return o;
}
function sl(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function ll(e, t, o) {
  if (Array.isArray(o))
    for (let [s, l] of o.entries())
      ll(e, sl(t, s.toString()), l);
  else
    o instanceof Date ? e.push([t, o.toISOString()]) : typeof o == "boolean" ? e.push([t, o ? "1" : "0"]) : typeof o == "string" ? e.push([t, o]) : typeof o == "number" ? e.push([t, `${o}`]) : o == null ? e.push([t, ""]) : ol(o, t, e);
}
function al(e) {
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
function nl(e, t, o) {
  let s = $(o == null ? void 0 : o.value), l = z(() => e.value !== void 0);
  return [z(() => l.value ? e.value : s.value), function(a) {
    return l.value || (s.value = a), t == null ? void 0 : t(a);
  }];
}
function tr() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function or(e, t, o) {
  At.isServer || ve((s) => {
    window.addEventListener(e, t, o), s(() => window.removeEventListener(e, t, o));
  });
}
var ye = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(ye || {});
function Uo() {
  let e = $(0);
  return or("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Yo(e, t, o, s) {
  At.isServer || ve((l) => {
    e = e ?? window, e.addEventListener(t, o, s), l(() => e.removeEventListener(t, o, s));
  });
}
function rl(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function il(e) {
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
var pl = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(pl || {});
let kt = Object.assign(T({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: $(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: s }) {
  let l = $(null);
  s({ el: l, $el: l });
  let a = z(() => we(l)), n = $(!1);
  Z(() => n.value = !0), re(() => n.value = !1), lr({ ownerDocument: a }, z(() => n.value && Boolean(e.features & 16)));
  let r = ar({ ownerDocument: a, container: l, initialFocus: z(() => e.initialFocus) }, z(() => n.value && Boolean(e.features & 2)));
  nr({ ownerDocument: a, container: l, containers: e.containers, previousActiveElement: r }, z(() => n.value && Boolean(e.features & 8)));
  let u = Uo();
  function c(b) {
    let m = j(l);
    m && ((f) => f())(() => {
      ue(u.value, { [ye.Forwards]: () => {
        ge(m, ie.First, { skipElements: [b.relatedTarget] });
      }, [ye.Backwards]: () => {
        ge(m, ie.Last, { skipElements: [b.relatedTarget] });
      } });
    });
  }
  let v = $(!1);
  function y(b) {
    b.key === "Tab" && (v.value = !0, requestAnimationFrame(() => {
      v.value = !1;
    }));
  }
  function w(b) {
    if (!n.value)
      return;
    let m = il(e.containers);
    j(l) instanceof HTMLElement && m.add(j(l));
    let f = b.relatedTarget;
    f instanceof HTMLElement && f.dataset.headlessuiFocusGuard !== "true" && (ul(m, f) || (v.value ? ge(j(l), ue(u.value, { [ye.Forwards]: () => ie.Next, [ye.Backwards]: () => ie.Previous }) | ie.WrapAround, { relativeTo: b.target }) : b.target instanceof HTMLElement && rt(b.target)));
  }
  return () => {
    let b = {}, m = { ref: l, onKeydown: y, onFocusout: w }, { features: f, initialFocus: h, containers: _, ...g } = e;
    return se(F, [Boolean(f & 4) && se(Ge, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: He.Focusable }), oe({ ourProps: m, theirProps: { ...t, ...g }, slot: b, attrs: t, slots: o, name: "FocusTrap" }), Boolean(f & 4) && se(Ge, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: He.Focusable })]);
  };
} }), { features: pl }), st = [];
if (typeof window < "u" && typeof document < "u") {
  let e = function(t) {
    t.target instanceof HTMLElement && t.target !== document.body && st[0] !== t.target && (st.unshift(t.target), st = st.filter((o) => o != null && o.isConnected), st.splice(10));
  };
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
}
function sr(e) {
  let t = $(st.slice());
  return Q([e], ([o], [s]) => {
    s === !0 && o === !1 ? rl(() => {
      t.value.splice(0);
    }) : s === !1 && o === !0 && (t.value = st.slice());
  }, { flush: "post" }), () => {
    var o;
    return (o = t.value.find((s) => s != null && s.isConnected)) != null ? o : null;
  };
}
function lr({ ownerDocument: e }, t) {
  let o = sr(t);
  Z(() => {
    ve(() => {
      var s, l;
      t.value || ((s = e.value) == null ? void 0 : s.activeElement) === ((l = e.value) == null ? void 0 : l.body) && rt(o());
    }, { flush: "post" });
  }), re(() => {
    rt(o());
  });
}
function ar({ ownerDocument: e, container: t, initialFocus: o }, s) {
  let l = $(null), a = $(!1);
  return Z(() => a.value = !0), re(() => a.value = !1), Z(() => {
    Q([t, o, s], (n, r) => {
      if (n.every((c, v) => (r == null ? void 0 : r[v]) === c) || !s.value)
        return;
      let u = j(t);
      u && rl(() => {
        var c, v;
        if (!a.value)
          return;
        let y = j(o), w = (c = e.value) == null ? void 0 : c.activeElement;
        if (y) {
          if (y === w) {
            l.value = w;
            return;
          }
        } else if (u.contains(w)) {
          l.value = w;
          return;
        }
        y ? rt(y) : ge(u, ie.First | ie.NoScroll) === pt.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), l.value = (v = e.value) == null ? void 0 : v.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), l;
}
function nr({ ownerDocument: e, container: t, containers: o, previousActiveElement: s }, l) {
  var a;
  Yo((a = e.value) == null ? void 0 : a.defaultView, "focus", (n) => {
    if (!l.value)
      return;
    let r = il(o);
    j(t) instanceof HTMLElement && r.add(j(t));
    let u = s.value;
    if (!u)
      return;
    let c = n.target;
    c && c instanceof HTMLElement ? ul(r, c) ? (s.value = c, rt(c)) : (n.preventDefault(), n.stopPropagation(), rt(u)) : rt(s.value);
  }, !0);
}
function ul(e, t) {
  for (let o of e)
    if (o.contains(t))
      return !0;
  return !1;
}
let mo = /* @__PURE__ */ new Map(), Ct = /* @__PURE__ */ new Map();
function _s(e, t = $(!0)) {
  ve((o) => {
    var s;
    if (!t.value)
      return;
    let l = j(e);
    if (!l)
      return;
    o(function() {
      var n;
      if (!l)
        return;
      let r = (n = Ct.get(l)) != null ? n : 1;
      if (r === 1 ? Ct.delete(l) : Ct.set(l, r - 1), r !== 1)
        return;
      let u = mo.get(l);
      u && (u["aria-hidden"] === null ? l.removeAttribute("aria-hidden") : l.setAttribute("aria-hidden", u["aria-hidden"]), l.inert = u.inert, mo.delete(l));
    });
    let a = (s = Ct.get(l)) != null ? s : 0;
    Ct.set(l, a + 1), a === 0 && (mo.set(l, { "aria-hidden": l.getAttribute("aria-hidden"), inert: l.inert }), l.setAttribute("aria-hidden", "true"), l.inert = !0);
  });
}
let dl = Symbol("ForcePortalRootContext");
function rr() {
  return de(dl, !1);
}
let xo = T({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: o }) {
  return fe(dl, e.force), () => {
    let { force: s, ...l } = e;
    return oe({ theirProps: l, ourProps: {}, slot: {}, slots: t, attrs: o, name: "ForcePortalRoot" });
  };
} });
function ir(e) {
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
let cl = T({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: o }) {
  let s = $(null), l = z(() => we(s)), a = rr(), n = de(fl, null), r = $(a === !0 || n == null ? ir(s.value) : n.resolveTarget());
  return ve(() => {
    a || n != null && (r.value = n.resolveTarget());
  }), re(() => {
    var u, c;
    let v = (u = l.value) == null ? void 0 : u.getElementById("headlessui-portal-root");
    v && r.value === v && r.value.children.length <= 0 && ((c = r.value.parentElement) == null || c.removeChild(r.value));
  }), () => {
    if (r.value === null)
      return null;
    let u = { ref: s, "data-headlessui-portal": "" };
    return se(Dt, { to: r.value }, oe({ ourProps: u, theirProps: e, slot: {}, attrs: o, slots: t, name: "Portal" }));
  };
} }), fl = Symbol("PortalGroupContext"), pr = T({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: o }) {
  let s = Ul({ resolveTarget() {
    return e.target;
  } });
  return fe(fl, s), () => {
    let { target: l, ...a } = e;
    return oe({ theirProps: a, ourProps: {}, slot: {}, attrs: t, slots: o, name: "PortalGroup" });
  };
} }), vl = Symbol("StackContext");
var Vo = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Vo || {});
function ur() {
  return de(vl, () => {
  });
}
function dr({ type: e, enabled: t, element: o, onUpdate: s }) {
  let l = ur();
  function a(...n) {
    s == null || s(...n), l(...n);
  }
  Z(() => {
    Q(t, (n, r) => {
      n ? a(0, e, o) : r === !0 && a(1, e, o);
    }, { immediate: !0, flush: "sync" });
  }), re(() => {
    t.value && a(1, e, o);
  }), fe(vl, a);
}
let hl = Symbol("DescriptionContext");
function cr() {
  let e = de(hl, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function oo({ slot: e = $({}), name: t = "Description", props: o = {} } = {}) {
  let s = $([]);
  function l(a) {
    return s.value.push(a), () => {
      let n = s.value.indexOf(a);
      n !== -1 && s.value.splice(n, 1);
    };
  }
  return fe(hl, { register: l, slot: e, name: t, props: o }), z(() => s.value.length > 0 ? s.value.join(" ") : void 0);
}
let fr = T({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${pe()}` } }, setup(e, { attrs: t, slots: o }) {
  let s = cr();
  return Z(() => re(s.register(e.id))), () => {
    let { name: l = "Description", slot: a = $({}), props: n = {} } = s, { id: r, ...u } = e, c = { ...Object.entries(n).reduce((v, [y, w]) => Object.assign(v, { [y]: P(w) }), {}), id: r };
    return oe({ ourProps: c, theirProps: u, slot: a.value, attrs: t, slots: o, name: l });
  };
} });
function vr(e) {
  let t = Is(e.getSnapshot());
  return re(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function so() {
  let e = [], t = { addEventListener(o, s, l, a) {
    return o.addEventListener(s, l, a), t.add(() => o.removeEventListener(s, l, a));
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
    let a = o.style.getPropertyValue(s);
    return Object.assign(o.style, { [s]: l }), this.add(() => {
      Object.assign(o.style, { [s]: a });
    });
  }, group(o) {
    let s = so();
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
function hr(e, t) {
  let o = e(), s = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return o;
  }, subscribe(l) {
    return s.add(l), () => s.delete(l);
  }, dispatch(l, ...a) {
    let n = t[l].call(o, ...a);
    n && (o = n, s.forEach((r) => r()));
  } };
}
function mr() {
  let e;
  return { before({ doc: t }) {
    var o;
    let s = t.documentElement;
    e = ((o = t.defaultView) != null ? o : window).innerWidth - s.clientWidth;
  }, after({ doc: t, d: o }) {
    let s = t.documentElement, l = s.clientWidth - s.offsetWidth, a = e - l;
    o.style(s, "paddingRight", `${a}px`);
  } };
}
function br() {
  if (!tr())
    return {};
  let e;
  return { before() {
    e = window.pageYOffset;
  }, after({ doc: t, d: o, meta: s }) {
    function l(n) {
      return s.containers.flatMap((r) => r()).some((r) => r.contains(n));
    }
    o.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
    let a = null;
    o.addEventListener(t, "click", (n) => {
      if (n.target instanceof HTMLElement)
        try {
          let r = n.target.closest("a");
          if (!r)
            return;
          let { hash: u } = new URL(r.href), c = t.querySelector(u);
          c && !l(c) && (a = c);
        } catch {
        }
    }, !0), o.addEventListener(t, "touchmove", (n) => {
      n.target instanceof HTMLElement && !l(n.target) && n.preventDefault();
    }, { passive: !1 }), o.add(() => {
      window.scrollTo(0, window.pageYOffset + e), a && a.isConnected && (a.scrollIntoView({ block: "nearest" }), a = null);
    });
  } };
}
function gr() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function yr(e) {
  let t = {};
  for (let o of e)
    Object.assign(t, o(t));
  return t;
}
let lt = hr(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var o;
  let s = (o = this.get(e)) != null ? o : { doc: e, count: 0, d: so(), meta: /* @__PURE__ */ new Set() };
  return s.count++, s.meta.add(t), this.set(e, s), this;
}, POP(e, t) {
  let o = this.get(e);
  return o && (o.count--, o.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: o }) {
  let s = { doc: e, d: t, meta: yr(o) }, l = [br(), mr(), gr()];
  l.forEach(({ before: a }) => a == null ? void 0 : a(s)), l.forEach(({ after: a }) => a == null ? void 0 : a(s));
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
function wr(e, t, o) {
  let s = vr(lt), l = z(() => {
    let a = e.value ? s.value.get(e.value) : void 0;
    return a ? a.count > 0 : !1;
  });
  return Q([e, t], ([a, n], [r], u) => {
    if (!a || !n)
      return;
    lt.dispatch("PUSH", a, o);
    let c = !1;
    u(() => {
      c || (lt.dispatch("POP", r ?? a, o), c = !0);
    });
  }, { immediate: !0 }), l;
}
var _r = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(_r || {});
let ko = Symbol("DialogContext");
function jt(e) {
  let t = de(ko, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, jt), o;
  }
  return t;
}
let Ut = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", lo = T({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Ut }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${pe()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: o, slots: s, expose: l }) {
  var a;
  let n = $(!1);
  Z(() => {
    n.value = !0;
  });
  let r = $(0), u = yt(), c = z(() => e.open === Ut && u !== null ? (u.value & le.Open) === le.Open : e.open), v = $(null), y = $(null), w = z(() => we(v));
  if (l({ el: v, $el: v }), !(e.open !== Ut || u !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof c.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${c.value === Ut ? void 0 : e.open}`);
  let b = z(() => n.value && c.value ? 0 : 1), m = z(() => b.value === 0), f = z(() => r.value > 1), h = de(ko, null) !== null, _ = z(() => f.value ? "parent" : "leaf"), g = z(() => u !== null ? (u.value & le.Closing) === le.Closing : !1), S = z(() => h || g.value ? !1 : m.value), x = z(() => {
    var U, W, Y;
    return (Y = Array.from((W = (U = w.value) == null ? void 0 : U.querySelectorAll("body > *")) != null ? W : []).find((K) => K.id === "headlessui-portal-root" ? !1 : K.contains(j(y)) && K instanceof HTMLElement)) != null ? Y : null;
  });
  _s(x, S);
  let I = z(() => f.value ? !0 : m.value), E = z(() => {
    var U, W, Y;
    return (Y = Array.from((W = (U = w.value) == null ? void 0 : U.querySelectorAll("[data-headlessui-portal]")) != null ? W : []).find((K) => K.contains(j(y)) && K instanceof HTMLElement)) != null ? Y : null;
  });
  _s(E, I), dr({ type: "Dialog", enabled: z(() => b.value === 0), element: v, onUpdate: (U, W) => {
    if (W === "Dialog")
      return ue(U, { [Vo.Add]: () => r.value += 1, [Vo.Remove]: () => r.value -= 1 });
  } });
  let R = oo({ name: "DialogDescription", slot: z(() => ({ open: c.value })) }), D = $(null), M = { titleId: D, panelRef: $(null), dialogState: b, setTitleId(U) {
    D.value !== U && (D.value = U);
  }, close() {
    t("close", !1);
  } };
  fe(ko, M);
  function O() {
    var U, W, Y;
    return [...Array.from((W = (U = w.value) == null ? void 0 : U.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? W : []).filter((K) => !(K === document.body || K === document.head || !(K instanceof HTMLElement) || K.contains(j(y)) || M.panelRef.value && K.contains(M.panelRef.value))), (Y = M.panelRef.value) != null ? Y : v.value];
  }
  let A = z(() => !(!m.value || f.value));
  tl(() => O(), (U, W) => {
    M.close(), Do(() => W == null ? void 0 : W.focus());
  }, A);
  let q = z(() => !(f.value || b.value !== 0));
  Yo((a = w.value) == null ? void 0 : a.defaultView, "keydown", (U) => {
    q.value && (U.defaultPrevented || U.key === ne.Escape && (U.preventDefault(), U.stopPropagation(), M.close()));
  });
  let N = z(() => !(g.value || b.value !== 0 || h));
  return wr(w, N, (U) => {
    var W;
    return { containers: [...(W = U.containers) != null ? W : [], O] };
  }), ve((U) => {
    if (b.value !== 0)
      return;
    let W = j(v);
    if (!W)
      return;
    let Y = new ResizeObserver((K) => {
      for (let ce of K) {
        let J = ce.target.getBoundingClientRect();
        J.x === 0 && J.y === 0 && J.width === 0 && J.height === 0 && M.close();
      }
    });
    Y.observe(W), U(() => Y.disconnect());
  }), () => {
    let { id: U, open: W, initialFocus: Y, ...K } = e, ce = { ...o, ref: v, id: U, role: "dialog", "aria-modal": b.value === 0 ? !0 : void 0, "aria-labelledby": D.value, "aria-describedby": R.value }, J = { open: b.value === 0 };
    return se(xo, { force: !0 }, () => [se(cl, () => se(pr, { target: v.value }, () => se(xo, { force: !1 }, () => se(kt, { initialFocus: Y, containers: O, features: m.value ? ue(_.value, { parent: kt.features.RestoreFocus, leaf: kt.features.All & ~kt.features.FocusLock }) : kt.features.None }, () => oe({ ourProps: ce, theirProps: K, slot: J, attrs: o, slots: s, visible: b.value === 0, features: Ee.RenderStrategy | Ee.Static, name: "Dialog" }))))), se(Ge, { features: He.Hidden, ref: y })]);
  };
} });
T({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${pe()}` } }, setup(e, { attrs: t, slots: o }) {
  let s = jt("DialogOverlay");
  function l(a) {
    a.target === a.currentTarget && (a.preventDefault(), a.stopPropagation(), s.close());
  }
  return () => {
    let { id: a, ...n } = e;
    return oe({ ourProps: { id: a, "aria-hidden": !0, onClick: l }, theirProps: n, slot: { open: s.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogOverlay" });
  };
} });
T({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${pe()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: s }) {
  let l = jt("DialogBackdrop"), a = $(null);
  return s({ el: a, $el: a }), Z(() => {
    if (l.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: n, ...r } = e, u = { id: n, ref: a, "aria-hidden": !0 };
    return se(xo, { force: !0 }, () => se(cl, () => oe({ ourProps: u, theirProps: { ...t, ...r }, slot: { open: l.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogBackdrop" })));
  };
} });
let ao = T({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${pe()}` } }, setup(e, { attrs: t, slots: o, expose: s }) {
  let l = jt("DialogPanel");
  s({ el: l.panelRef, $el: l.panelRef });
  function a(n) {
    n.stopPropagation();
  }
  return () => {
    let { id: n, ...r } = e, u = { id: n, ref: l.panelRef, onClick: a };
    return oe({ ourProps: u, theirProps: r, slot: { open: l.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogPanel" });
  };
} }), ml = T({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${pe()}` } }, setup(e, { attrs: t, slots: o }) {
  let s = jt("DialogTitle");
  return Z(() => {
    s.setTitleId(e.id), re(() => s.setTitleId(null));
  }), () => {
    let { id: l, ...a } = e;
    return oe({ ourProps: { id: l }, theirProps: a, slot: { open: s.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogTitle" });
  };
} });
var $r = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))($r || {});
let bl = Symbol("DisclosureContext");
function Wo(e) {
  let t = de(bl, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, Wo), o;
  }
  return t;
}
let gl = Symbol("DisclosurePanelContext");
function xr() {
  return de(gl, null);
}
let $s = T({ name: "Disclosure", props: { as: { type: [Object, String], default: "template" }, defaultOpen: { type: [Boolean], default: !1 } }, setup(e, { slots: t, attrs: o }) {
  let s = $(e.defaultOpen ? 0 : 1), l = $(null), a = $(null), n = { buttonId: $(null), panelId: $(null), disclosureState: s, panel: l, button: a, toggleDisclosure() {
    s.value = ue(s.value, { [0]: 1, [1]: 0 });
  }, closeDisclosure() {
    s.value !== 1 && (s.value = 1);
  }, close(r) {
    n.closeDisclosure();
    let u = (() => r ? r instanceof HTMLElement ? r : r.value instanceof HTMLElement ? j(r) : j(n.button) : j(n.button))();
    u == null || u.focus();
  } };
  return fe(bl, n), Ho(z(() => ue(s.value, { [0]: le.Open, [1]: le.Closed }))), () => {
    let { defaultOpen: r, ...u } = e, c = { open: s.value === 0, close: n.close };
    return oe({ theirProps: u, ourProps: {}, slot: c, slots: t, attrs: o, name: "Disclosure" });
  };
} }), xs = T({ name: "DisclosureButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-disclosure-button-${pe()}` } }, setup(e, { attrs: t, slots: o, expose: s }) {
  let l = Wo("DisclosureButton");
  Z(() => {
    l.buttonId.value = e.id;
  }), re(() => {
    l.buttonId.value = null;
  });
  let a = xr(), n = z(() => a === null ? !1 : a.value === l.panelId.value), r = $(null);
  s({ el: r, $el: r }), n.value || ve(() => {
    l.button.value = r.value;
  });
  let u = No(z(() => ({ as: e.as, type: t.type })), r);
  function c() {
    var w;
    e.disabled || (n.value ? (l.toggleDisclosure(), (w = j(l.button)) == null || w.focus()) : l.toggleDisclosure());
  }
  function v(w) {
    var b;
    if (!e.disabled)
      if (n.value)
        switch (w.key) {
          case ne.Space:
          case ne.Enter:
            w.preventDefault(), w.stopPropagation(), l.toggleDisclosure(), (b = j(l.button)) == null || b.focus();
            break;
        }
      else
        switch (w.key) {
          case ne.Space:
          case ne.Enter:
            w.preventDefault(), w.stopPropagation(), l.toggleDisclosure();
            break;
        }
  }
  function y(w) {
    switch (w.key) {
      case ne.Space:
        w.preventDefault();
        break;
    }
  }
  return () => {
    let w = { open: l.disclosureState.value === 0 }, { id: b, ...m } = e, f = n.value ? { ref: r, type: u.value, onClick: c, onKeydown: v } : { id: b, ref: r, type: u.value, "aria-expanded": e.disabled ? void 0 : l.disclosureState.value === 0, "aria-controls": j(l.panel) ? l.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onClick: c, onKeydown: v, onKeyup: y };
    return oe({ ourProps: f, theirProps: m, slot: w, attrs: t, slots: o, name: "DisclosureButton" });
  };
} }), Vs = T({ name: "DisclosurePanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-disclosure-panel-${pe()}` } }, setup(e, { attrs: t, slots: o, expose: s }) {
  let l = Wo("DisclosurePanel");
  Z(() => {
    l.panelId.value = e.id;
  }), re(() => {
    l.panelId.value = null;
  }), s({ el: l.panel, $el: l.panel }), fe(gl, l.panelId);
  let a = yt(), n = z(() => a !== null ? (a.value & le.Open) === le.Open : l.disclosureState.value === 0);
  return () => {
    let r = { open: l.disclosureState.value === 0, close: l.close }, { id: u, ...c } = e, v = { id: u, ref: l.panel };
    return oe({ ourProps: v, theirProps: c, slot: r, attrs: t, slots: o, features: Ee.RenderStrategy | Ee.Static, visible: n.value, name: "DisclosurePanel" });
  };
} });
var Vr = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Vr || {});
let yl = Symbol("PopoverContext");
function no(e) {
  let t = de(yl, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <${ro.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, no), o;
  }
  return t;
}
let wl = Symbol("PopoverGroupContext");
function _l() {
  return de(wl, null);
}
let $l = Symbol("PopoverPanelContext");
function kr() {
  return de($l, null);
}
let ro = T({ name: "Popover", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: o, expose: s }) {
  var l;
  let a = $(null);
  s({ el: a, $el: a });
  let n = $(1), r = $(null), u = $(null), c = $(null), v = $(null), y = z(() => we(a)), w = z(() => {
    var g, S;
    if (!j(r) || !j(v))
      return !1;
    for (let O of document.querySelectorAll("body > *"))
      if (Number(O == null ? void 0 : O.contains(j(r))) ^ Number(O == null ? void 0 : O.contains(j(v))))
        return !0;
    let x = to(), I = x.indexOf(j(r)), E = (I + x.length - 1) % x.length, R = (I + 1) % x.length, D = x[E], M = x[R];
    return !((g = j(v)) != null && g.contains(D)) && !((S = j(v)) != null && S.contains(M));
  }), b = { popoverState: n, buttonId: $(null), panelId: $(null), panel: v, button: r, isPortalled: w, beforePanelSentinel: u, afterPanelSentinel: c, togglePopover() {
    n.value = ue(n.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    n.value !== 1 && (n.value = 1);
  }, close(g) {
    b.closePopover();
    let S = (() => g ? g instanceof HTMLElement ? g : g.value instanceof HTMLElement ? j(g) : j(b.button) : j(b.button))();
    S == null || S.focus();
  } };
  fe(yl, b), Ho(z(() => ue(n.value, { [0]: le.Open, [1]: le.Closed })));
  let m = { buttonId: b.buttonId, panelId: b.panelId, close() {
    b.closePopover();
  } }, f = _l(), h = f == null ? void 0 : f.registerPopover;
  function _() {
    var g, S, x, I;
    return (I = f == null ? void 0 : f.isFocusWithinPopoverGroup()) != null ? I : ((g = y.value) == null ? void 0 : g.activeElement) && (((S = j(r)) == null ? void 0 : S.contains(y.value.activeElement)) || ((x = j(v)) == null ? void 0 : x.contains(y.value.activeElement)));
  }
  return ve(() => h == null ? void 0 : h(m)), Yo((l = y.value) == null ? void 0 : l.defaultView, "focus", (g) => {
    var S, x;
    n.value === 0 && (_() || r && v && g.target !== window && ((S = j(b.beforePanelSentinel)) != null && S.contains(g.target) || (x = j(b.afterPanelSentinel)) != null && x.contains(g.target) || b.closePopover()));
  }, !0), tl([r, v], (g, S) => {
    var x;
    b.closePopover(), Js(S, qo.Loose) || (g.preventDefault(), (x = j(r)) == null || x.focus());
  }, z(() => n.value === 0)), () => {
    let g = { open: n.value === 0, close: b.close };
    return oe({ theirProps: e, ourProps: { ref: a }, slot: g, slots: t, attrs: o, name: "Popover" });
  };
} }), Zo = T({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-popover-button-${pe()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: s }) {
  let l = no("PopoverButton"), a = z(() => we(l.button));
  s({ el: l.button, $el: l.button }), Z(() => {
    l.buttonId.value = e.id;
  }), re(() => {
    l.buttonId.value = null;
  });
  let n = _l(), r = n == null ? void 0 : n.closeOthers, u = kr(), c = z(() => u === null ? !1 : u.value === l.panelId.value), v = $(null), y = `headlessui-focus-sentinel-${pe()}`;
  c.value || ve(() => {
    l.button.value = v.value;
  });
  let w = No(z(() => ({ as: e.as, type: t.type })), v);
  function b(_) {
    var g, S, x, I, E;
    if (c.value) {
      if (l.popoverState.value === 1)
        return;
      switch (_.key) {
        case ne.Space:
        case ne.Enter:
          _.preventDefault(), (S = (g = _.target).click) == null || S.call(g), l.closePopover(), (x = j(l.button)) == null || x.focus();
          break;
      }
    } else
      switch (_.key) {
        case ne.Space:
        case ne.Enter:
          _.preventDefault(), _.stopPropagation(), l.popoverState.value === 1 && (r == null || r(l.buttonId.value)), l.togglePopover();
          break;
        case ne.Escape:
          if (l.popoverState.value !== 0)
            return r == null ? void 0 : r(l.buttonId.value);
          if (!j(l.button) || (I = a.value) != null && I.activeElement && !((E = j(l.button)) != null && E.contains(a.value.activeElement)))
            return;
          _.preventDefault(), _.stopPropagation(), l.closePopover();
          break;
      }
  }
  function m(_) {
    c.value || _.key === ne.Space && _.preventDefault();
  }
  function f(_) {
    var g, S;
    e.disabled || (c.value ? (l.closePopover(), (g = j(l.button)) == null || g.focus()) : (_.preventDefault(), _.stopPropagation(), l.popoverState.value === 1 && (r == null || r(l.buttonId.value)), l.togglePopover(), (S = j(l.button)) == null || S.focus()));
  }
  function h(_) {
    _.preventDefault(), _.stopPropagation();
  }
  return () => {
    let _ = l.popoverState.value === 0, g = { open: _ }, { id: S, ...x } = e, I = c.value ? { ref: v, type: w.value, onKeydown: b, onClick: f } : { ref: v, id: S, type: w.value, "aria-expanded": e.disabled ? void 0 : l.popoverState.value === 0, "aria-controls": j(l.panel) ? l.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onKeydown: b, onKeyup: m, onClick: f, onMousedown: h }, E = Uo();
    function R() {
      let D = j(l.panel);
      if (!D)
        return;
      function M() {
        ue(E.value, { [ye.Forwards]: () => ge(D, ie.First), [ye.Backwards]: () => ge(D, ie.Last) }) === pt.Error && ge(to().filter((O) => O.dataset.headlessuiFocusGuard !== "true"), ue(E.value, { [ye.Forwards]: ie.Next, [ye.Backwards]: ie.Previous }), { relativeTo: j(l.button) });
      }
      M();
    }
    return se(F, [oe({ ourProps: I, theirProps: { ...t, ...x }, slot: g, attrs: t, slots: o, name: "PopoverButton" }), _ && !c.value && l.isPortalled.value && se(Ge, { id: y, features: He.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: R })]);
  };
} });
T({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(e, { attrs: t, slots: o }) {
  let s = no("PopoverOverlay"), l = `headlessui-popover-overlay-${pe()}`, a = yt(), n = z(() => a !== null ? (a.value & le.Open) === le.Open : s.popoverState.value === 0);
  function r() {
    s.closePopover();
  }
  return () => {
    let u = { open: s.popoverState.value === 0 };
    return oe({ ourProps: { id: l, "aria-hidden": !0, onClick: r }, theirProps: e, slot: u, attrs: t, slots: o, features: Ee.RenderStrategy | Ee.Static, visible: n.value, name: "PopoverOverlay" });
  };
} });
let Go = T({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-popover-panel-${pe()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: s }) {
  let { focus: l } = e, a = no("PopoverPanel"), n = z(() => we(a.panel)), r = `headlessui-focus-sentinel-before-${pe()}`, u = `headlessui-focus-sentinel-after-${pe()}`;
  s({ el: a.panel, $el: a.panel }), Z(() => {
    a.panelId.value = e.id;
  }), re(() => {
    a.panelId.value = null;
  }), fe($l, a.panelId), ve(() => {
    var h, _;
    if (!l || a.popoverState.value !== 0 || !a.panel)
      return;
    let g = (h = n.value) == null ? void 0 : h.activeElement;
    (_ = j(a.panel)) != null && _.contains(g) || ge(j(a.panel), ie.First);
  });
  let c = yt(), v = z(() => c !== null ? (c.value & le.Open) === le.Open : a.popoverState.value === 0);
  function y(h) {
    var _, g;
    switch (h.key) {
      case ne.Escape:
        if (a.popoverState.value !== 0 || !j(a.panel) || n.value && !((_ = j(a.panel)) != null && _.contains(n.value.activeElement)))
          return;
        h.preventDefault(), h.stopPropagation(), a.closePopover(), (g = j(a.button)) == null || g.focus();
        break;
    }
  }
  function w(h) {
    var _, g, S, x, I;
    let E = h.relatedTarget;
    E && j(a.panel) && ((_ = j(a.panel)) != null && _.contains(E) || (a.closePopover(), ((S = (g = j(a.beforePanelSentinel)) == null ? void 0 : g.contains) != null && S.call(g, E) || (I = (x = j(a.afterPanelSentinel)) == null ? void 0 : x.contains) != null && I.call(x, E)) && E.focus({ preventScroll: !0 })));
  }
  let b = Uo();
  function m() {
    let h = j(a.panel);
    if (!h)
      return;
    function _() {
      ue(b.value, { [ye.Forwards]: () => {
        var g;
        ge(h, ie.First) === pt.Error && ((g = j(a.afterPanelSentinel)) == null || g.focus());
      }, [ye.Backwards]: () => {
        var g;
        (g = j(a.button)) == null || g.focus({ preventScroll: !0 });
      } });
    }
    _();
  }
  function f() {
    let h = j(a.panel);
    if (!h)
      return;
    function _() {
      ue(b.value, { [ye.Forwards]: () => {
        let g = j(a.button), S = j(a.panel);
        if (!g)
          return;
        let x = to(), I = x.indexOf(g), E = x.slice(0, I + 1), R = [...x.slice(I + 1), ...E];
        for (let D of R.slice())
          if (D.dataset.headlessuiFocusGuard === "true" || S != null && S.contains(D)) {
            let M = R.indexOf(D);
            M !== -1 && R.splice(M, 1);
          }
        ge(R, ie.First, { sorted: !1 });
      }, [ye.Backwards]: () => {
        var g;
        ge(h, ie.Previous) === pt.Error && ((g = j(a.button)) == null || g.focus());
      } });
    }
    _();
  }
  return () => {
    let h = { open: a.popoverState.value === 0, close: a.close }, { id: _, focus: g, ...S } = e, x = { ref: a.panel, id: _, onKeydown: y, onFocusout: l && a.popoverState.value === 0 ? w : void 0, tabIndex: -1 };
    return oe({ ourProps: x, theirProps: { ...t, ...S }, attrs: t, slot: h, slots: { ...o, default: (...I) => {
      var E;
      return [se(F, [v.value && a.isPortalled.value && se(Ge, { id: r, ref: a.beforePanelSentinel, features: He.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: m }), (E = o.default) == null ? void 0 : E.call(o, ...I), v.value && a.isPortalled.value && se(Ge, { id: u, ref: a.afterPanelSentinel, features: He.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: f })])];
    } }, features: Ee.RenderStrategy | Ee.Static, visible: v.value, name: "PopoverPanel" });
  };
} });
T({ name: "PopoverGroup", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: o, expose: s }) {
  let l = $(null), a = Is([]), n = z(() => we(l));
  s({ el: l, $el: l });
  function r(y) {
    let w = a.value.indexOf(y);
    w !== -1 && a.value.splice(w, 1);
  }
  function u(y) {
    return a.value.push(y), () => {
      r(y);
    };
  }
  function c() {
    var y;
    let w = n.value;
    if (!w)
      return !1;
    let b = w.activeElement;
    return (y = j(l)) != null && y.contains(b) ? !0 : a.value.some((m) => {
      var f, h;
      return ((f = w.getElementById(m.buttonId.value)) == null ? void 0 : f.contains(b)) || ((h = w.getElementById(m.panelId.value)) == null ? void 0 : h.contains(b));
    });
  }
  function v(y) {
    for (let w of a.value)
      w.buttonId.value !== y && w.close();
  }
  return fe(wl, { registerPopover: u, unregisterPopover: r, isFocusWithinPopoverGroup: c, closeOthers: v }), () => oe({ ourProps: { ref: l }, theirProps: e, slot: {}, attrs: t, slots: o, name: "PopoverGroup" });
} });
let xl = Symbol("LabelContext");
function Vl() {
  let e = de(xl, null);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Vl), t;
  }
  return e;
}
function Ko({ slot: e = {}, name: t = "Label", props: o = {} } = {}) {
  let s = $([]);
  function l(a) {
    return s.value.push(a), () => {
      let n = s.value.indexOf(a);
      n !== -1 && s.value.splice(n, 1);
    };
  }
  return fe(xl, { register: l, slot: e, name: t, props: o }), z(() => s.value.length > 0 ? s.value.join(" ") : void 0);
}
let kl = T({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-label-${pe()}` } }, setup(e, { slots: t, attrs: o }) {
  let s = Vl();
  return Z(() => re(s.register(e.id))), () => {
    let { name: l = "Label", slot: a = {}, props: n = {} } = s, { id: r, passive: u, ...c } = e, v = { ...Object.entries(n).reduce((y, [w, b]) => Object.assign(y, { [w]: P(b) }), {}), id: r };
    return u && (delete v.onClick, delete v.htmlFor, delete c.onClick), oe({ ourProps: v, theirProps: c, slot: a, attrs: o, slots: t, name: l });
  };
} });
function Cr(e, t) {
  return e === t;
}
let Cl = Symbol("RadioGroupContext");
function Sl(e) {
  let t = de(Cl, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, Sl), o;
  }
  return t;
}
let Sr = T({ name: "RadioGroup", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "div" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => Cr }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-radiogroup-${pe()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: o, slots: s, expose: l }) {
  let a = $(null), n = $([]), r = Ko({ name: "RadioGroupLabel" }), u = oo({ name: "RadioGroupDescription" });
  l({ el: a, $el: a });
  let [c, v] = nl(z(() => e.modelValue), (m) => t("update:modelValue", m), z(() => e.defaultValue)), y = { options: n, value: c, disabled: z(() => e.disabled), firstOption: z(() => n.value.find((m) => !m.propsRef.disabled)), containsCheckedOption: z(() => n.value.some((m) => y.compare(Ye(m.propsRef.value), Ye(e.modelValue)))), compare(m, f) {
    if (typeof e.by == "string") {
      let h = e.by;
      return (m == null ? void 0 : m[h]) === (f == null ? void 0 : f[h]);
    }
    return e.by(m, f);
  }, change(m) {
    var f;
    if (e.disabled || y.compare(Ye(c.value), Ye(m)))
      return !1;
    let h = (f = n.value.find((_) => y.compare(Ye(_.propsRef.value), Ye(m)))) == null ? void 0 : f.propsRef;
    return h != null && h.disabled ? !1 : (v(m), !0);
  }, registerOption(m) {
    n.value.push(m), n.value = el(n.value, (f) => f.element);
  }, unregisterOption(m) {
    let f = n.value.findIndex((h) => h.id === m);
    f !== -1 && n.value.splice(f, 1);
  } };
  fe(Cl, y), Xn({ container: z(() => j(a)), accept(m) {
    return m.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : m.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(m) {
    m.setAttribute("role", "none");
  } });
  function w(m) {
    if (!a.value || !a.value.contains(m.target))
      return;
    let f = n.value.filter((h) => h.propsRef.disabled === !1).map((h) => h.element);
    switch (m.key) {
      case ne.Enter:
        al(m.currentTarget);
        break;
      case ne.ArrowLeft:
      case ne.ArrowUp:
        if (m.preventDefault(), m.stopPropagation(), ge(f, ie.Previous | ie.WrapAround) === pt.Success) {
          let h = n.value.find((_) => {
            var g;
            return _.element === ((g = we(a)) == null ? void 0 : g.activeElement);
          });
          h && y.change(h.propsRef.value);
        }
        break;
      case ne.ArrowRight:
      case ne.ArrowDown:
        if (m.preventDefault(), m.stopPropagation(), ge(f, ie.Next | ie.WrapAround) === pt.Success) {
          let h = n.value.find((_) => {
            var g;
            return _.element === ((g = we(_.element)) == null ? void 0 : g.activeElement);
          });
          h && y.change(h.propsRef.value);
        }
        break;
      case ne.Space:
        {
          m.preventDefault(), m.stopPropagation();
          let h = n.value.find((_) => {
            var g;
            return _.element === ((g = we(_.element)) == null ? void 0 : g.activeElement);
          });
          h && y.change(h.propsRef.value);
        }
        break;
    }
  }
  let b = z(() => {
    var m;
    return (m = j(a)) == null ? void 0 : m.closest("form");
  });
  return Z(() => {
    Q([b], () => {
      if (!b.value || e.defaultValue === void 0)
        return;
      function m() {
        y.change(e.defaultValue);
      }
      return b.value.addEventListener("reset", m), () => {
        var f;
        (f = b.value) == null || f.removeEventListener("reset", m);
      };
    }, { immediate: !0 });
  }), () => {
    let { disabled: m, name: f, id: h, ..._ } = e, g = { ref: a, id: h, role: "radiogroup", "aria-labelledby": r.value, "aria-describedby": u.value, onKeydown: w };
    return se(F, [...f != null && c.value != null ? ol({ [f]: c.value }).map(([S, x]) => se(Ge, Xs({ features: He.Hidden, key: S, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: S, value: x }))) : [], oe({ ourProps: g, theirProps: { ...o, ...eo(_, ["modelValue", "defaultValue"]) }, slot: {}, attrs: o, slots: s, name: "RadioGroup" })]);
  };
} });
var Pr = ((e) => (e[e.Empty = 1] = "Empty", e[e.Active = 2] = "Active", e))(Pr || {});
let Or = T({ name: "RadioGroupOption", props: { as: { type: [Object, String], default: "div" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-radiogroup-option-${pe()}` } }, setup(e, { attrs: t, slots: o, expose: s }) {
  let l = Sl("RadioGroupOption"), a = Ko({ name: "RadioGroupLabel" }), n = oo({ name: "RadioGroupDescription" }), r = $(null), u = z(() => ({ value: e.value, disabled: e.disabled })), c = $(1);
  s({ el: r, $el: r }), Z(() => l.registerOption({ id: e.id, element: r, propsRef: u })), re(() => l.unregisterOption(e.id));
  let v = z(() => {
    var _;
    return ((_ = l.firstOption.value) == null ? void 0 : _.id) === e.id;
  }), y = z(() => l.disabled.value || e.disabled), w = z(() => l.compare(Ye(l.value.value), Ye(e.value))), b = z(() => y.value ? -1 : w.value || !l.containsCheckedOption.value && v.value ? 0 : -1);
  function m() {
    var _;
    l.change(e.value) && (c.value |= 2, (_ = r.value) == null || _.focus());
  }
  function f() {
    c.value |= 2;
  }
  function h() {
    c.value &= -3;
  }
  return () => {
    let { id: _, value: g, disabled: S, ...x } = e, I = { checked: w.value, disabled: y.value, active: Boolean(c.value & 2) }, E = { id: _, ref: r, role: "radio", "aria-checked": w.value ? "true" : "false", "aria-labelledby": a.value, "aria-describedby": n.value, "aria-disabled": y.value ? !0 : void 0, tabIndex: b.value, onClick: y.value ? void 0 : m, onFocus: y.value ? void 0 : f, onBlur: y.value ? void 0 : h };
    return oe({ ourProps: E, theirProps: x, slot: I, attrs: t, slots: o, name: "RadioGroupOption" });
  };
} }), ks = kl, Lr = fr, Pl = Symbol("GroupContext"), Mr = T({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: o }) {
  let s = $(null), l = Ko({ name: "SwitchLabel", props: { htmlFor: z(() => {
    var n;
    return (n = s.value) == null ? void 0 : n.id;
  }), onClick(n) {
    s.value && (n.currentTarget.tagName === "LABEL" && n.preventDefault(), s.value.click(), s.value.focus({ preventScroll: !0 }));
  } } }), a = oo({ name: "SwitchDescription" });
  return fe(Pl, { switchRef: s, labelledby: l, describedby: a }), () => oe({ theirProps: e, ourProps: {}, slot: {}, slots: t, attrs: o, name: "SwitchGroup" });
} }), Tr = T({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: !0 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-switch-${pe()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: o, slots: s, expose: l }) {
  let a = de(Pl, null), [n, r] = nl(z(() => e.modelValue), (h) => t("update:modelValue", h), z(() => e.defaultChecked));
  function u() {
    r(!n.value);
  }
  let c = $(null), v = a === null ? c : a.switchRef, y = No(z(() => ({ as: e.as, type: o.type })), v);
  l({ el: v, $el: v });
  function w(h) {
    h.preventDefault(), u();
  }
  function b(h) {
    h.key === ne.Space ? (h.preventDefault(), u()) : h.key === ne.Enter && al(h.currentTarget);
  }
  function m(h) {
    h.preventDefault();
  }
  let f = z(() => {
    var h, _;
    return (_ = (h = j(v)) == null ? void 0 : h.closest) == null ? void 0 : _.call(h, "form");
  });
  return Z(() => {
    Q([f], () => {
      if (!f.value || e.defaultChecked === void 0)
        return;
      function h() {
        r(e.defaultChecked);
      }
      return f.value.addEventListener("reset", h), () => {
        var _;
        (_ = f.value) == null || _.removeEventListener("reset", h);
      };
    }, { immediate: !0 });
  }), () => {
    let { id: h, name: _, value: g, ...S } = e, x = { checked: n.value }, I = { id: h, ref: v, role: "switch", type: y.value, tabIndex: 0, "aria-checked": n.value, "aria-labelledby": a == null ? void 0 : a.labelledby.value, "aria-describedby": a == null ? void 0 : a.describedby.value, onClick: w, onKeyup: b, onKeypress: m };
    return se(F, [_ != null && n.value != null ? se(Ge, Xs({ features: He.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: n.value, name: _, value: g })) : null, oe({ ourProps: I, theirProps: { ...o, ...eo(S, ["modelValue", "defaultChecked"]) }, slot: x, attrs: o, slots: s, name: "Switch" })]);
  };
} }), Dr = kl;
function Ir(e) {
  let t = { called: !1 };
  return (...o) => {
    if (!t.called)
      return t.called = !0, e(...o);
  };
}
function bo(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Yt(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var Co = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(Co || {});
function zr(e, t) {
  let o = so();
  if (!e)
    return o.dispose;
  let { transitionDuration: s, transitionDelay: l } = getComputedStyle(e), [a, n] = [s, l].map((r) => {
    let [u = 0] = r.split(",").filter(Boolean).map((c) => c.includes("ms") ? parseFloat(c) : parseFloat(c) * 1e3).sort((c, v) => v - c);
    return u;
  });
  return a !== 0 ? o.setTimeout(() => t("finished"), a + n) : t("finished"), o.add(() => t("cancelled")), o.dispose;
}
function Cs(e, t, o, s, l, a) {
  let n = so(), r = a !== void 0 ? Ir(a) : () => {
  };
  return Yt(e, ...l), bo(e, ...t, ...o), n.nextFrame(() => {
    Yt(e, ...o), bo(e, ...s), n.add(zr(e, (u) => (Yt(e, ...s, ...t), bo(e, ...l), r(u))));
  }), n.add(() => Yt(e, ...t, ...o, ...s, ...l)), n.add(() => r("cancelled")), n.dispose;
}
function ot(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Xo = Symbol("TransitionContext");
var Br = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Br || {});
function Er() {
  return de(Xo, null) !== null;
}
function Ar() {
  let e = de(Xo, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function jr() {
  let e = de(Qo, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let Qo = Symbol("NestingContext");
function io(e) {
  return "children" in e ? io(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Ol(e) {
  let t = $([]), o = $(!1);
  Z(() => o.value = !0), re(() => o.value = !1);
  function s(a, n = We.Hidden) {
    let r = t.value.findIndex(({ id: u }) => u === a);
    r !== -1 && (ue(n, { [We.Unmount]() {
      t.value.splice(r, 1);
    }, [We.Hidden]() {
      t.value[r].state = "hidden";
    } }), !io(t) && o.value && (e == null || e()));
  }
  function l(a) {
    let n = t.value.find(({ id: r }) => r === a);
    return n ? n.state !== "visible" && (n.state = "visible") : t.value.push({ id: a, state: "visible" }), () => s(a, We.Unmount);
  }
  return { children: t, register: l, unregister: s };
}
let Ll = Ee.RenderStrategy, Ke = T({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: o, slots: s, expose: l }) {
  let a = $(0);
  function n() {
    a.value |= le.Opening, t("beforeEnter");
  }
  function r() {
    a.value &= ~le.Opening, t("afterEnter");
  }
  function u() {
    a.value |= le.Closing, t("beforeLeave");
  }
  function c() {
    a.value &= ~le.Closing, t("afterLeave");
  }
  if (!Er() && Wn())
    return () => se(Rt, { ...e, onBeforeEnter: n, onAfterEnter: r, onBeforeLeave: u, onAfterLeave: c }, s);
  let v = $(null), y = $("visible"), w = z(() => e.unmount ? We.Unmount : We.Hidden);
  l({ el: v, $el: v });
  let { show: b, appear: m } = Ar(), { register: f, unregister: h } = jr(), _ = { value: !0 }, g = pe(), S = { value: !1 }, x = Ol(() => {
    !S.value && y.value !== "hidden" && (y.value = "hidden", h(g), c());
  });
  Z(() => {
    let N = f(g);
    re(N);
  }), ve(() => {
    if (w.value === We.Hidden && g) {
      if (b && y.value !== "visible") {
        y.value = "visible";
        return;
      }
      ue(y.value, { hidden: () => h(g), visible: () => f(g) });
    }
  });
  let I = ot(e.enter), E = ot(e.enterFrom), R = ot(e.enterTo), D = ot(e.entered), M = ot(e.leave), O = ot(e.leaveFrom), A = ot(e.leaveTo);
  Z(() => {
    ve(() => {
      if (y.value === "visible") {
        let N = j(v);
        if (N instanceof Comment && N.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function q(N) {
    let U = _.value && !m.value, W = j(v);
    !W || !(W instanceof HTMLElement) || U || (S.value = !0, b.value && n(), b.value || u(), N(b.value ? Cs(W, I, E, R, D, (Y) => {
      S.value = !1, Y === Co.Finished && r();
    }) : Cs(W, M, O, A, D, (Y) => {
      S.value = !1, Y === Co.Finished && (io(x) || (y.value = "hidden", h(g), c()));
    })));
  }
  return Z(() => {
    Q([b], (N, U, W) => {
      q(W), _.value = !1;
    }, { immediate: !0 });
  }), fe(Qo, x), Ho(z(() => ue(y.value, { visible: le.Open, hidden: le.Closed }) | a.value)), () => {
    let { appear: N, show: U, enter: W, enterFrom: Y, enterTo: K, entered: ce, leave: J, leaveFrom: $e, leaveTo: Re, ...Me } = e, qe = { ref: v }, Te = { ...Me, ...m && b && At.isServer ? { class: L([o.class, Me.class, ...I, ...E]) } : {} };
    return oe({ theirProps: Te, ourProps: qe, slot: {}, slots: s, attrs: o, features: Ll, visible: y.value === "visible", name: "TransitionChild" });
  };
} }), Rr = Ke, Rt = T({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: o, slots: s }) {
  let l = yt(), a = z(() => e.show === null && l !== null ? (l.value & le.Open) === le.Open : e.show);
  ve(() => {
    if (![!0, !1].includes(a.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let n = $(a.value ? "visible" : "hidden"), r = Ol(() => {
    n.value = "hidden";
  }), u = $(!0), c = { show: a, appear: z(() => e.appear || !u.value) };
  return Z(() => {
    ve(() => {
      u.value = !1, a.value ? n.value = "visible" : io(r) || (n.value = "hidden");
    });
  }), fe(Qo, r), fe(Xo, c), () => {
    let v = eo(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), y = { unmount: e.unmount };
    return oe({ ourProps: { ...y, as: "template" }, theirProps: {}, slot: {}, slots: { ...s, default: () => [se(Rr, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...o, ...y, ...v }, s.default)] }, attrs: {}, features: Ll, visible: n.value === "visible", name: "Transition" });
  };
} });
const Fr = {
  key: 0,
  class: "po-text-sm po-font-normal po-text-slate-400 po-select-none po-block po-text-left po-pt-5"
}, Hr = { class: "po-bg-white hover:po-bg-slate-200 po-rounded-xl po-p-2 po-transition-colors po-duration-150 po-ease-in" }, Nr = ["href", "target"], qr = { class: "po-flex po-w-14 po-h-14 po-items-center po-justify-center po-duration-100 po-ease-in-out po-overflow-hidden" }, Ur = ["innerHTML"], Yr = { class: "po-text-slate-500 po-font-normal po-text-sm po-text-center" }, Ss = /* @__PURE__ */ T({
  __name: "appList",
  props: {
    list: { default: () => [] },
    openInNewTab: { type: Boolean, default: !1 },
    gridCols: { default: "po-grid-cols-3" }
  },
  setup(e) {
    return (t, o) => (p(!0), d(F, null, G(t.list, (s) => (p(), d("div", null, [
      s.groupName.length > 0 ? (p(), d("span", Fr, C(s.groupName), 1)) : k("", !0),
      i("ul", {
        class: L(["po-grid", [t.gridCols]])
      }, [
        (p(!0), d(F, null, G(s.apps, (l) => (p(), d("li", Hr, [
          i("a", {
            href: l.url,
            target: t.openInNewTab ? "_blank" : "_self",
            class: "po-flex po-flex-col po-group po-justify-center po-items-center"
          }, [
            i("span", qr, [
              i("span", {
                class: "po-w-9",
                innerHTML: l.icon
              }, null, 8, Ur)
            ]),
            i("span", Yr, C(l.name), 1)
          ], 8, Nr)
        ]))), 256))
      ], 2)
    ]))), 256));
  }
}), Wr = {
  name: "PoAppTray"
}, Zr = /* @__PURE__ */ T({
  ...Wr,
  props: {
    appList: { default: null },
    justApps: { type: Boolean, default: !1 },
    openInNewTab: { type: Boolean, default: !1 },
    gridCols: { default: "po-grid-cols-3" }
  },
  setup(e) {
    const t = e, o = ["", "Internal"], s = t.gridCols, l = z(() => {
      const a = [];
      return t.appList && o.forEach((n) => {
        const r = t.appList.filter((u) => u.group === n);
        r.length > 0 && a.push({
          groupName: n,
          apps: r
        });
      }), a;
    });
    return (a, n) => a.justApps ? (p(), H(Ss, {
      key: 1,
      list: l.value,
      "open-in-new-tab": a.openInNewTab,
      gridCols: P(s)
    }, null, 8, ["list", "open-in-new-tab", "gridCols"])) : (p(), H(P(ro), { key: 0 }, {
      default: B(({ open: r }) => [
        V(P(Zo), {
          class: L([r ? "" : "po-text-opacity-90", "po-block po-w-6 po-text-slate-100 genie-effect po-z-50 po-outline-none"])
        }, {
          default: B(() => [
            V(P(ba))
          ]),
          _: 2
        }, 1032, ["class"]),
        V(Ze, {
          "enter-active-class": "po-transition po-duration-200 po-ease-out",
          "enter-from-class": "po-translate-y-1 po-opacity-0",
          "enter-to-class": "po-translate-y-0 po-opacity-100",
          "leave-active-class": "po-transition po-duration-150 po-ease-in",
          "leave-from-class": "po-translate-y-0 po-opacity-100",
          "leave-to-class": "po-translate-y-1 po-opacity-0"
        }, {
          default: B(() => [
            V(P(Go), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
              default: B(() => [
                V(Ss, {
                  list: l.value,
                  "open-in-new-tab": a.openInNewTab,
                  gridCols: P(s)
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
}), Gr = {
  key: 0,
  class: "po-absolute po-right-0 po-w-3 po-h-3 po-bg-mpao-orange po-rounded-full po-border-2 po-border-mpao-blue"
}, Kr = {
  key: 0,
  class: "po-space-y-2"
}, Xr = ["onClick"], Qr = { class: "po-flex po-items-center po-justify-between" }, Jr = { class: "po-text-sm po-text-left po-font-semibold po-text-slate-700 po-grow po-flex po-space-x-2 po-items-center" }, ei = { class: "po-grow" }, ti = {
  key: 0,
  class: "po-w-[6px] po-h-[6px] po-rounded-full po-shrink-0 po-bg-mpao-orange po-animate-pulse"
}, oi = { class: "po-text-xs po-font-normal po-text-slate-400 po-shrink-0" }, si = { class: "po-block po-text-sm po-text-slate-500 po-pb-3 po-text-left" }, li = {
  key: 1,
  class: "po-text-sm po-text-slate-500 po-py-10 po-text-center po-block"
}, ai = {
  name: "PoNotificationHub"
}, ni = /* @__PURE__ */ T({
  ...ai,
  props: {
    notifications: { default: null },
    hasNewNotifications: { type: Boolean, default: !1 }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, s) => (p(), H(P(ro), null, {
      default: B(({ open: l }) => [
        V(P(Zo), {
          class: L([l ? "" : "text-opacity-90", "po-block po-w-6 po-text-slate-100 genie-effect po-relative po-z-50 po-outline-none"])
        }, {
          default: B(() => [
            o.hasNewNotifications ? (p(), d("span", Gr)) : k("", !0),
            V(P(pa), { class: "po-stroke-current" })
          ]),
          _: 2
        }, 1032, ["class"]),
        V(Ze, {
          "enter-active-class": "po-transition po-duration-200 po-ease-out",
          "enter-from-class": "po-translate-y-1 po-opacity-0",
          "enter-to-class": "po-translate-y-0 po-opacity-100",
          "leave-active-class": "po-transition po-duration-150 po-ease-in",
          "leave-from-class": "po-translate-y-0 po-opacity-100",
          "leave-to-class": "po-translate-y-1 po-opacity-0"
        }, {
          default: B(() => [
            V(P(Go), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
              default: B(() => [
                o.notifications !== null && o.notifications.length > 0 ? (p(), d("ul", Kr, [
                  (p(!0), d(F, null, G(o.notifications, (a) => (p(), d("li", {
                    role: "button",
                    class: "po-space-y-2 po-p-2 po-rounded-lg po-bg-white hover:po-bg-slate-100 po-border po-border-slate-100",
                    onClick: te((n) => o.$emit("button-click", a.name), ["prevent"])
                  }, [
                    i("span", Qr, [
                      i("p", Jr, [
                        i("span", ei, C(a.name), 1),
                        a.seen ? k("", !0) : (p(), d("span", ti))
                      ]),
                      i("span", oi, C(a.time), 1)
                    ]),
                    i("span", si, C(a.text), 1)
                  ], 8, Xr))), 256))
                ])) : (p(), d("span", li, " No notifications to show at the moment. We'll keep you informed."))
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
}), ri = {
  key: 0,
  class: "po-hidden lg:po-block po-text-sky-50 po-text-sm po-shrink-0 po-pr-3 po-truncate po-max-w-[140px] po-overflow-hidden"
}, ii = {
  key: 1,
  class: "po-px-3 po-bg-gradient-to-br po-from-slate-50 po-to-blue-100 po-py-1 po-rounded-l-md po-w-[100px] po-flex po-items-center po-justify-center po-text-center"
}, pi = ["src"], ui = ["src", "alt"], di = {
  key: 1,
  class: "po-text-xs po-text-white po-font-semibold"
}, ci = { class: "po-pb-5" }, fi = ["src"], vi = {
  key: 2,
  class: "po-block po-text-sm po-text-slate-400 po-italic"
}, hi = { key: 0 }, mi = { key: 1 }, bi = /* @__PURE__ */ i("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), gi = { class: "po-space-y-2 po-py-2 po-max-h-[250px] po-overflow-y-auto" }, yi = ["onClick"], wi = { class: "po-w-5" }, _i = { class: "" }, $i = { class: "po-block po-text-sm po-font-normal" }, xi = {
  key: 0,
  class: "po-text-left po-block po-text-xs po-text-slate-400"
}, Vi = /* @__PURE__ */ i("div", { class: "po-h-[2px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), ki = { class: "md:po-grid po-grid-cols-2 po-space-x-1 po-pt-2" }, Ci = { class: "po-w-5" }, Si = /* @__PURE__ */ i("span", { class: "po-text-sm po-font-normal" }, "Profile", -1), Pi = { class: "po-w-5" }, Oi = /* @__PURE__ */ i("span", { class: "po-text-sm po-font-normal" }, "Logout", -1), Li = /* @__PURE__ */ i("div", { class: "po-text-xs po-space-x-3 po-text-center po-pt-3" }, [
  /* @__PURE__ */ i("a", {
    href: "",
    class: "po-text-slate-500 hover:po-text-mpao-lightblue"
  }, "Privacy Policy"),
  /* @__PURE__ */ i("a", {
    href: "",
    class: "po-text-slate-500 hover:po-text-mpao-lightblue"
  }, "Terms of Service")
], -1), Mi = {
  name: "PoProfileSwitcher"
}, Ti = /* @__PURE__ */ T({
  ...Mi,
  props: {
    userObject: { default: null },
    avatar: { default: "" },
    logo: { default: "" }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    const o = e;
    function s(y) {
      t("button-click", y);
    }
    const l = $({
      name: "",
      initials: "",
      image: ""
    });
    function a(y) {
      var w, b;
      return y ? ((b = (w = y.match(/\b[A-Z]/g)) == null ? void 0 : w.join("")) == null ? void 0 : b.substring(0, 2)) ?? "" : "";
    }
    const n = z(() => {
      var f, h, _, g, S, x, I, E, R, D;
      const y = [], w = (f = o.userObject) == null ? void 0 : f.transacting_as_organisation, b = (w == null ? void 0 : w.name) || ((h = o.userObject) == null ? void 0 : h.name), m = (w == null ? void 0 : w.logo) || ((_ = o.userObject) == null ? void 0 : _.avatar);
      return l.value = {
        name: b,
        initials: a(b),
        image: m
      }, y.push({
        id: (g = o.userObject) == null ? void 0 : g.id,
        entity_id: (S = o.userObject) == null ? void 0 : S.entity_id,
        name: (x = o.userObject) == null ? void 0 : x.name,
        identifier: null,
        organisation_uuid: null
      }), ((E = (I = o.userObject) == null ? void 0 : I.organisations) == null ? void 0 : E.length) > 0 && y.push(...(R = o.userObject) == null ? void 0 : R.organisations), y.forEach((M) => {
        M.current = w && Object.keys(w).length > 0 && M.entity_id === w.entity_id;
      }), ((D = o.userObject) == null ? void 0 : D.transacting_as_organisation) === null && (y[0].current = !0), y;
    }), r = $(null), u = $(null), { avatar: c, logo: v } = Se(o);
    return Q(c, () => {
      r.value = c.value;
    }), Q(v, () => {
      u.value = v.value;
    }), Yl(() => {
      n.value;
    }), Z(() => {
      n.value;
    }), Wl(() => {
      n.value;
    }), Io(() => {
      n.value;
    }), (y, w) => (p(), H(P(ro), null, {
      default: B(({ open: b }) => [
        i("div", null, [
          V(P(Zo), { class: "po-flex po-items-center po-outline-none" }, {
            default: B(() => [
              u.value ? k("", !0) : (p(), d("span", ri, C(l.value.name), 1)),
              u.value ? (p(), d("span", ii, [
                i("img", {
                  class: "po-h-8",
                  src: u.value,
                  alt: ""
                }, null, 8, pi)
              ])) : k("", !0),
              i("div", {
                class: L([
                  {
                    "po-bg-gradient-to-br po-from-slate-50 po-to-blue-100 po-p-1 po-rounded-r-md": u.value
                  }
                ])
              }, [
                i("div", {
                  class: L([[
                    { "text-opacity-90": b },
                    {
                      "po-w-10 po-h-10": !u.value
                    },
                    { "po-w-8 po-h-8": u.value }
                  ], "po-shrink-0 po-select-none po-rounded-full po-bg-white/10 po-flex po-items-center po-justify-center genie-effect po-z-50"])
                }, [
                  r.value ? (p(), d("img", {
                    key: 0,
                    class: "po-rounded-full po-border po-border-white",
                    src: r.value,
                    alt: l.value.name
                  }, null, 8, ui)) : (p(), d("span", di, C(l.value.initials), 1))
                ], 2)
              ], 2)
            ]),
            _: 2
          }, 1024),
          V(Ze, {
            "enter-active-class": "po-transition po-duration-200 po-ease-out",
            "enter-from-class": "po-translate-y-1 po-opacity-0",
            "enter-to-class": "po-translate-y-0 po-opacity-100",
            "leave-active-class": "po-transition po-duration-150 po-ease-in",
            "leave-from-class": "po-translate-y-0 po-opacity-100",
            "leave-to-class": "po-translate-y-1 po-opacity-0"
          }, {
            default: B(() => [
              V(P(Go), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
                default: B(() => {
                  var m, f, h, _;
                  return [
                    i("div", ci, [
                      r.value ? (p(), d("img", {
                        key: 0,
                        class: "po-w-20 po-h-20 po-mx-auto po-rounded-full po-overflow-hidden",
                        src: r.value,
                        alt: ""
                      }, null, 8, fi)) : k("", !0),
                      (m = y.userObject) != null && m.name ? (p(), d("span", {
                        key: 1,
                        class: L(["po-text-base po-text-slate-600 po-font-medium po-block", [{ "po-mt-4": r.value }]])
                      }, C((f = y.userObject) == null ? void 0 : f.name), 3)) : k("", !0),
                      (h = y.userObject) != null && h.name ? (p(), d("span", vi, [
                        l.value.name === ((_ = y.userObject) == null ? void 0 : _.name) ? (p(), d("span", hi, "Self")) : (p(), d("span", mi, "User at " + C(l.value.name), 1))
                      ])) : k("", !0)
                    ]),
                    bi,
                    i("div", gi, [
                      (p(!0), d(F, null, G(n.value, (g, S) => (p(), d("a", {
                        href: "#",
                        onClick: te((x) => s(g), ["prevent"]),
                        class: L(["po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-shadow-sm po-transition-all po-duration-150 po-ease-out hover:po-bg-blue-50", [
                          {
                            " po-bg-white": !g.current
                          },
                          {
                            " po-bg-blue-50 po-shadow-sm": g.current
                          }
                        ]]),
                        role: "button",
                        key: S
                      }, [
                        i("span", wi, [
                          g.isPersonal ? (p(), H(P(ps), {
                            key: 0,
                            class: L([
                              "po-stroke-current",
                              { "po-stroke-mpao-lightblue": g.current }
                            ])
                          }, null, 8, ["class"])) : k("", !0),
                          g.isPersonal ? k("", !0) : (p(), H(P(da), {
                            key: 1,
                            class: L([
                              "po-stroke-current",
                              { "po-stroke-mpao-lightblue": g.current }
                            ])
                          }, null, 8, ["class"]))
                        ]),
                        i("span", _i, [
                          i("span", $i, C(g.name), 1),
                          g.identifier ? (p(), d("span", xi, C(g.identifier), 1)) : k("", !0)
                        ])
                      ], 10, yi))), 128))
                    ]),
                    Vi,
                    i("div", ki, [
                      i("a", {
                        href: "#",
                        onClick: w[0] || (w[0] = te((g) => y.$emit("button-click", "current-profile"), ["prevent"])),
                        class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-slate-50 hover:po-bg-blue-50 po-transition-all po-duration-150 po-ease-out",
                        role: "button"
                      }, [
                        i("span", Ci, [
                          V(P(ps), { class: "po-stroke-current" })
                        ]),
                        Si
                      ]),
                      i("a", {
                        href: "#",
                        onClick: w[1] || (w[1] = te((g) => y.$emit("button-click", "logout"), ["prevent"])),
                        class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-slate-50 hover:po-bg-blue-50 po-transition-all po-duration-150 po-ease-out",
                        role: "button"
                      }, [
                        i("span", Pi, [
                          V(P(ra), { class: "po-stroke-current" })
                        ]),
                        Oi
                      ])
                    ]),
                    Li
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
}), at = /* @__PURE__ */ T({
  __name: "LoadingDots",
  props: {
    dotColor: { default: "po-bg-mpao-lightblue" },
    absolute: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, o) => (p(), d("div", {
      class: L(["loading-dots po-inline-block po-w-[40px] po-h-[10px]", [{ "po-relative": !t.absolute }, { "po-absolute": t.absolute }]])
    }, [
      i("div", {
        class: L(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[8px]", t.dotColor])
      }, null, 2),
      i("div", {
        class: L(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[8px]", t.dotColor])
      }, null, 2),
      i("div", {
        class: L(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[17px]", t.dotColor])
      }, null, 2),
      i("div", {
        class: L(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[26px]", t.dotColor])
      }, null, 2)
    ], 2));
  }
}), Di = ["disabled", "aria-disabled"], Ii = {
  key: 0,
  class: "po-absolute po-bg-slate-200 -po-top-[1px] -po-right-[1px] -po-bottom-[1px] -po-left-[1px] po-rounded-md po-flex po-items-center po-justify-center"
}, zi = {
  key: 1,
  class: "po-relative"
}, Bi = ["value", "disabled", "aria-disabled"], Ei = {
  key: 0,
  class: "po-absolute po-bg-slate-200 -po-top-[1px] -po-right-[1px] -po-bottom-[1px] -po-left-[1px] po-rounded-md po-flex po-items-center po-justify-center"
}, Ai = {
  key: 0,
  class: "po-absolute po-bg-slate-200 -po-top-[1px] -po-right-[1px] -po-bottom-[1px] -po-left-[1px] po-rounded-md po-flex po-items-center po-justify-center"
}, ji = {
  key: 3,
  class: "po-relative"
}, Ri = {
  key: 0,
  class: "po-absolute po-bg-slate-200 -po-top-[1px] -po-right-[1px] -po-bottom-[1px] -po-left-[1px] po-rounded-md po-flex po-items-center po-justify-center"
}, Fi = {
  name: "PoButton"
}, gt = /* @__PURE__ */ T({
  ...Fi,
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
    const o = e, s = "po-rounded-md po-transition-colors po-border po-duration-100 po-ease-in-out po-cursor-pointer disabled:po-bg-slate-400 disabled:po-border-slate-400 disabled:po-cursor-default disabled:po-hover:bg-slate-400", l = z(() => {
      switch (o.size) {
        case "sm":
          return "po-px-2 po-py-1 po-text-xs";
        case "md":
          return "po-px-4 po-py-2 po-text-sm";
        case "lg":
          return "po-px-5 po-py-3 po-text-normal";
      }
    }), a = z(() => {
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
    return (n, r) => (p(), d(F, null, [
      n.type == "button" ? (p(), d("button", Ie({
        key: 0,
        onClick: r[0] || (r[0] = te((u) => n.$emit("button-click", n.to), ["prevent"])),
        class: [s, l.value, a.value, "po-relative"],
        disabled: n.disabled,
        "aria-disabled": n.disabled
      }, n.$attrs), [
        X(n.$slots, "label", {}, () => [
          ee(C(n.label), 1)
        ]),
        n.isLoading ? (p(), d("span", Ii, [
          V(at, {
            "dot-color": "po-bg-slate-500",
            class: "po-relative -po-bottom-[0.2rem]"
          })
        ])) : k("", !0)
      ], 16, Di)) : k("", !0),
      n.type == "submit" ? (p(), d("span", zi, [
        i("input", Ie({
          type: "submit",
          class: [s, l.value, a.value],
          value: n.label,
          disabled: n.disabled,
          "aria-disabled": n.disabled
        }, n.$attrs), null, 16, Bi),
        n.isLoading ? (p(), d("span", Ei, [
          V(at, {
            "dot-color": "po-bg-slate-500",
            class: "po-relative -po-bottom-[0.2rem]"
          })
        ])) : k("", !0)
      ])) : k("", !0),
      n.type == "link" ? (p(), d("a", Ie({
        key: 2,
        href: "#",
        onClick: r[1] || (r[1] = te((u) => n.$emit("button-click", n.to), ["prevent"])),
        class: [s, l.value, a.value, "po-relative"]
      }, n.$attrs), [
        X(n.$slots, "label", {}, () => [
          ee(C(n.label), 1)
        ]),
        n.isLoading ? (p(), d("span", Ai, [
          V(at, {
            "dot-color": "po-bg-slate-500",
            class: "po-relative -po-bottom-[0.2rem]"
          })
        ])) : k("", !0)
      ], 16)) : k("", !0),
      n.type == "simple" ? (p(), d("span", ji, [
        i("a", {
          href: "#",
          onClick: r[2] || (r[2] = te((u) => n.$emit("button-click", n.to), ["prevent"])),
          class: L(["po-text-sm po-transition-colors po-duration-100 po-ease-in-out po-inline-flex po-items-center po-space-x-1", [
            {
              "po-text-mpao-lightblue hover:po-text-mpao-midblue": !n.overrideColors
            }
          ]])
        }, [
          X(n.$slots, "label", {}, () => [
            ee(C(n.label), 1)
          ])
        ], 2),
        n.isLoading ? (p(), d("span", Ri, [
          V(at, {
            "dot-color": "po-bg-slate-500",
            class: "po-relative -po-bottom-[0.2rem]"
          })
        ])) : k("", !0)
      ])) : k("", !0)
    ], 64));
  }
});
function Hi(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    i("path", {
      "fill-rule": "evenodd",
      d: "M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Ni(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    i("path", {
      "fill-rule": "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h4.59l-2.1 1.95a.75.75 0 001.02 1.1l3.5-3.25a.75.75 0 000-1.1l-3.5-3.25a.75.75 0 10-1.02 1.1l2.1 1.95H6.75z",
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
    i("path", {
      "fill-rule": "evenodd",
      d: "M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z",
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
    i("path", {
      "fill-rule": "evenodd",
      d: "M2.24 6.8a.75.75 0 001.06-.04l1.95-2.1v8.59a.75.75 0 001.5 0V4.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L2.2 5.74a.75.75 0 00.04 1.06zm8 6.4a.75.75 0 00-.04 1.06l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V6.75a.75.75 0 00-1.5 0v8.59l-1.95-2.1a.75.75 0 00-1.06-.04z",
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
    i("path", { d: "M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z" })
  ]);
}
function Wi(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    i("path", { d: "M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z" }),
    i("path", {
      "fill-rule": "evenodd",
      d: "M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Zi(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    i("path", {
      "fill-rule": "evenodd",
      d: "M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Ps(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    i("path", {
      "fill-rule": "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
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
    i("path", {
      "fill-rule": "evenodd",
      d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",
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
    i("path", {
      "fill-rule": "evenodd",
      d: "M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z",
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
    i("path", {
      "fill-rule": "evenodd",
      d: "M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z",
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
    i("path", {
      "fill-rule": "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
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
    i("path", {
      "fill-rule": "evenodd",
      d: "M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z",
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
    i("path", {
      "fill-rule": "evenodd",
      d: "M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Ml(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    i("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
  ]);
}
const Le = () => {
  const e = $("");
  return {
    uniqueId: e,
    generateUniqueId: () => {
      const s = `poid_${Math.random().toString(36).slice(2, 11)}`;
      e.value = s;
    }
  };
};
function tp() {
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
let Zt;
function So() {
  So.init || (So.init = !0, Zt = tp() !== -1);
}
var po = {
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
    So(), Do(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", Zt && this.$el.appendChild(e), e.data = "about:blank", Zt || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!Zt && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const op = /* @__PURE__ */ Kl("data-v-b329ee4c");
Zl("data-v-b329ee4c");
const sp = {
  class: "resize-observer",
  tabindex: "-1"
};
Gl();
const lp = /* @__PURE__ */ op((e, t, o, s, l, a) => (p(), H("div", sp)));
po.render = lp;
po.__scopeId = "data-v-b329ee4c";
po.__file = "src/components/ResizeObserver.vue";
function Gt(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Gt = function(t) {
    return typeof t;
  } : Gt = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Gt(e);
}
function ap(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Os(e, t) {
  for (var o = 0; o < t.length; o++) {
    var s = t[o];
    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
  }
}
function np(e, t, o) {
  return t && Os(e.prototype, t), o && Os(e, o), e;
}
function Ls(e) {
  return rp(e) || ip(e) || pp(e) || up();
}
function rp(e) {
  if (Array.isArray(e))
    return Po(e);
}
function ip(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function pp(e, t) {
  if (e) {
    if (typeof e == "string")
      return Po(e, t);
    var o = Object.prototype.toString.call(e).slice(8, -1);
    if (o === "Object" && e.constructor && (o = e.constructor.name), o === "Map" || o === "Set")
      return Array.from(e);
    if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
      return Po(e, t);
  }
}
function Po(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var o = 0, s = new Array(t); o < t; o++)
    s[o] = e[o];
  return s;
}
function up() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function dp(e) {
  var t;
  return typeof e == "function" ? t = {
    callback: e
  } : t = e, t;
}
function cp(e, t) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s, l, a, n = function(u) {
    for (var c = arguments.length, v = new Array(c > 1 ? c - 1 : 0), y = 1; y < c; y++)
      v[y - 1] = arguments[y];
    if (a = v, !(s && u === l)) {
      var w = o.leading;
      typeof w == "function" && (w = w(u, l)), (!s || u !== l) && w && e.apply(void 0, [u].concat(Ls(a))), l = u, clearTimeout(s), s = setTimeout(function() {
        e.apply(void 0, [u].concat(Ls(a))), s = 0;
      }, t);
    }
  };
  return n._clear = function() {
    clearTimeout(s), s = null;
  }, n;
}
function Tl(e, t) {
  if (e === t)
    return !0;
  if (Gt(e) === "object") {
    for (var o in e)
      if (!Tl(e[o], t[o]))
        return !1;
    return !0;
  }
  return !1;
}
var fp = /* @__PURE__ */ function() {
  function e(t, o, s) {
    ap(this, e), this.el = t, this.observer = null, this.frozen = !1, this.createObserver(o, s);
  }
  return np(e, [{
    key: "createObserver",
    value: function(o, s) {
      var l = this;
      if (this.observer && this.destroyObserver(), !this.frozen) {
        if (this.options = dp(o), this.callback = function(r, u) {
          l.options.callback(r, u), r && l.options.once && (l.frozen = !0, l.destroyObserver());
        }, this.callback && this.options.throttle) {
          var a = this.options.throttleOptions || {}, n = a.leading;
          this.callback = cp(this.callback, this.options.throttle, {
            leading: function(u) {
              return n === "both" || n === "visible" && u || n === "hidden" && !u;
            }
          });
        }
        this.oldResult = void 0, this.observer = new IntersectionObserver(function(r) {
          var u = r[0];
          if (r.length > 1) {
            var c = r.find(function(y) {
              return y.isIntersecting;
            });
            c && (u = c);
          }
          if (l.callback) {
            var v = u.isIntersecting && u.intersectionRatio >= l.threshold;
            if (v === l.oldResult)
              return;
            l.oldResult = v, l.callback(v, u);
          }
        }, this.options.intersection), Do(function() {
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
function Dl(e, t, o) {
  var s = t.value;
  if (s)
    if (typeof IntersectionObserver > "u")
      console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");
    else {
      var l = new fp(e, s, o);
      e._vue_visibilityState = l;
    }
}
function vp(e, t, o) {
  var s = t.value, l = t.oldValue;
  if (!Tl(s, l)) {
    var a = e._vue_visibilityState;
    if (!s) {
      Il(e);
      return;
    }
    a ? a.createObserver(s, o) : Dl(e, {
      value: s
    }, o);
  }
}
function Il(e) {
  var t = e._vue_visibilityState;
  t && (t.destroyObserver(), delete e._vue_visibilityState);
}
var hp = {
  beforeMount: Dl,
  updated: vp,
  unmounted: Il
};
function mp(e) {
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
var bp = {
  itemsLimit: 1e3
}, gp = /(auto|scroll)/;
function zl(e, t) {
  return e.parentNode === null ? t : zl(e.parentNode, t.concat([e]));
}
var go = function(t, o) {
  return getComputedStyle(t, null).getPropertyValue(o);
}, yp = function(t) {
  return go(t, "overflow") + go(t, "overflow-y") + go(t, "overflow-x");
}, wp = function(t) {
  return gp.test(yp(t));
};
function Ms(e) {
  if (e instanceof HTMLElement || e instanceof SVGElement) {
    for (var t = zl(e.parentNode, []), o = 0; o < t.length; o += 1)
      if (wp(t[o]))
        return t[o];
    return document.scrollingElement || document.documentElement;
  }
}
function Oo(e) {
  return Oo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Oo(e);
}
var Bl = {
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
function El() {
  return this.items.length && Oo(this.items[0]) !== "object";
}
var Lo = !1;
if (typeof window < "u") {
  Lo = !1;
  try {
    var _p = Object.defineProperty({}, "passive", {
      get: function() {
        Lo = !0;
      }
    });
    window.addEventListener("test", null, _p);
  } catch {
  }
}
let $p = 0;
var Jo = {
  name: "RecycleScroller",
  components: {
    ResizeObserver: po
  },
  directives: {
    ObserveVisibility: hp
  },
  props: {
    ...Bl,
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
        let l = 1e4, a = 0, n;
        for (let r = 0, u = t.length; r < u; r++)
          n = t[r][o] || s, n < l && (l = n), a += n, e[r] = { accumulator: a, size: n };
        return this.$_computedMinItemSize = l, e;
      }
      return [];
    },
    simpleArray: El,
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
      const a = Xl({
        id: $p++,
        index: t,
        used: !0,
        key: s,
        type: l
      }), n = Ql({
        item: o,
        position: 0,
        nr: a
      });
      return e.push(n), n;
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
      const o = this.itemSize, s = this.gridItems || 1, l = this.itemSecondarySize || o, a = this.$_computedMinItemSize, n = this.typeField, r = this.simpleArray ? null : this.keyField, u = this.items, c = u.length, v = this.sizes, y = this.$_views, w = this.$_unusedViews, b = this.pool, m = this.itemIndexByKey;
      let f, h, _, g, S;
      if (!c)
        f = h = g = S = _ = 0;
      else if (this.$_prerender)
        f = g = 0, h = S = Math.min(this.prerender, u.length), _ = null;
      else {
        const O = this.getScroll();
        if (t) {
          let N = O.start - this.$_lastUpdateScrollPosition;
          if (N < 0 && (N = -N), o === null && N < a || N < o)
            return {
              continuous: !0
            };
        }
        this.$_lastUpdateScrollPosition = O.start;
        const A = this.buffer;
        O.start -= A, O.end += A;
        let q = 0;
        if (this.$refs.before && (q = this.$refs.before.scrollHeight, O.start -= q), this.$refs.after) {
          const N = this.$refs.after.scrollHeight;
          O.end += N;
        }
        if (o === null) {
          let N, U = 0, W = c - 1, Y = ~~(c / 2), K;
          do
            K = Y, N = v[Y].accumulator, N < O.start ? U = Y : Y < c - 1 && v[Y + 1].accumulator > O.start && (W = Y), Y = ~~((U + W) / 2);
          while (Y !== K);
          for (Y < 0 && (Y = 0), f = Y, _ = v[c - 1].accumulator, h = Y; h < c && v[h].accumulator < O.end; h++)
            ;
          for (h === -1 ? h = u.length - 1 : (h++, h > c && (h = c)), g = f; g < c && q + v[g].accumulator < O.start; g++)
            ;
          for (S = g; S < c && q + v[S].accumulator < O.end; S++)
            ;
        } else {
          f = ~~(O.start / o * s);
          const N = f % s;
          f -= N, h = Math.ceil(O.end / o * s), g = Math.max(0, Math.floor((O.start - q) / o * s)), S = Math.floor((O.end - q) / o * s), f < 0 && (f = 0), h > c && (h = c), g < 0 && (g = 0), S > c && (S = c), _ = Math.ceil(c / s) * o;
        }
      }
      h - f > bp.itemsLimit && this.itemsLimitError(), this.totalSize = _;
      let x;
      const I = f <= this.$_endIndex && h >= this.$_startIndex;
      if (I)
        for (let O = 0, A = b.length; O < A; O++)
          x = b[O], x.nr.used && (e && (x.nr.index = m[x.item[r]]), (x.nr.index == null || x.nr.index < f || x.nr.index >= h) && this.unuseView(x));
      const E = I ? null : /* @__PURE__ */ new Map();
      let R, D, M;
      for (let O = f; O < h; O++) {
        R = u[O];
        const A = r ? R[r] : R;
        if (A == null)
          throw new Error(`Key is ${A} on item (keyField is '${r}')`);
        if (x = y.get(A), !o && !v[O].size) {
          x && this.unuseView(x);
          continue;
        }
        D = R[n];
        let q = w.get(D), N = !1;
        if (!x)
          I ? q && q.length ? x = q.pop() : x = this.addView(b, O, R, A, D) : (M = E.get(D) || 0, (!q || M >= q.length) && (x = this.addView(b, O, R, A, D), this.unuseView(x, !0), q = w.get(D)), x = q[M], E.set(D, M + 1)), y.delete(x.nr.key), x.nr.used = !0, x.nr.index = O, x.nr.key = A, x.nr.type = D, y.set(A, x), N = !0;
        else if (!x.nr.used && (x.nr.used = !0, N = !0, q)) {
          const U = q.indexOf(x);
          U !== -1 && q.splice(U, 1);
        }
        x.item = R, N && (O === u.length - 1 && this.$emit("scroll-end"), O === 0 && this.$emit("scroll-start")), o === null ? (x.position = v[O - 1].accumulator, x.offset = 0) : (x.position = Math.floor(O / s) * o, x.offset = O % s * l);
      }
      return this.$_startIndex = f, this.$_endIndex = h, this.emitUpdate && this.$emit("update", f, h, g, S), clearTimeout(this.$_sortTimer), this.$_sortTimer = setTimeout(this.sortViews, this.updateInterval + 300), {
        continuous: I
      };
    },
    getListenerTarget() {
      let e = Ms(this.$el);
      return window.document && (e === window.document.documentElement || e === window.document.body) && (e = window), e;
    },
    getScroll() {
      const { $el: e, direction: t } = this, o = t === "vertical";
      let s;
      if (this.pageMode) {
        const l = e.getBoundingClientRect(), a = o ? l.height : l.width;
        let n = -(o ? l.top : l.left), r = o ? window.innerHeight : window.innerWidth;
        n < 0 && (r += n, n = 0), n + r > a && (r = a - n), s = {
          start: n,
          end: n + r
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
      this.listenerTarget = this.getListenerTarget(), this.listenerTarget.addEventListener("scroll", this.handleScroll, Lo ? {
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
        const a = Ms(this.$el), n = a.tagName === "HTML" ? 0 : a[t.scroll], r = a.getBoundingClientRect(), c = this.$el.getBoundingClientRect()[t.start] - r[t.start];
        o = a, s = t.scroll, l = e + n + c;
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
const xp = {
  key: 0,
  ref: "before",
  class: "vue-recycle-scroller__slot"
}, Vp = {
  key: 1,
  ref: "after",
  class: "vue-recycle-scroller__slot"
};
function kp(e, t, o, s, l, a) {
  const n = zs("ResizeObserver"), r = Jl("observe-visibility");
  return Oe((p(), d(
    "div",
    {
      class: L(["vue-recycle-scroller", {
        ready: l.ready,
        "page-mode": o.pageMode,
        [`direction-${e.direction}`]: !0
      }]),
      onScrollPassive: t[0] || (t[0] = (...u) => a.handleScroll && a.handleScroll(...u))
    },
    [
      e.$slots.before ? (p(), d(
        "div",
        xp,
        [
          X(e.$slots, "before")
        ],
        512
        /* NEED_PATCH */
      )) : k("v-if", !0),
      (p(), H(he(o.listTag), {
        ref: "wrapper",
        style: ft({ [e.direction === "vertical" ? "minHeight" : "minWidth"]: l.totalSize + "px" }),
        class: L(["vue-recycle-scroller__item-wrapper", o.listClass])
      }, {
        default: B(() => [
          (p(!0), d(
            F,
            null,
            G(l.pool, (u) => (p(), H(he(o.itemTag), Ie({
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
            }, ea(o.skipHover ? {} : {
              mouseenter: () => {
                l.hoverKey = u.nr.key;
              },
              mouseleave: () => {
                l.hoverKey = null;
              }
            })), {
              default: B(() => [
                X(e.$slots, "default", {
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
          X(e.$slots, "empty")
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["style", "class"])),
      e.$slots.after ? (p(), d(
        "div",
        Vp,
        [
          X(e.$slots, "after")
        ],
        512
        /* NEED_PATCH */
      )) : k("v-if", !0),
      V(n, { onNotify: a.handleResize }, null, 8, ["onNotify"])
    ],
    34
    /* CLASS, HYDRATE_EVENTS */
  )), [
    [r, a.handleVisibilityChange]
  ]);
}
Jo.render = kp;
Jo.__file = "src/components/RecycleScroller.vue";
var es = {
  name: "DynamicScroller",
  components: {
    RecycleScroller: Jo
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
    ...Bl,
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
    simpleArray: El,
    itemsWithSize() {
      const e = [], { items: t, keyField: o, simpleArray: s } = this, l = this.vscrollData.sizes, a = t.length;
      for (let n = 0; n < a; n++) {
        const r = t[n], u = s ? n : r[o];
        let c = l[u];
        typeof c > "u" && !this.$_undefinedMap[u] && (c = 0), e.push({
          item: r,
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
      const a = Math.min(e.length, t.length);
      for (let r = 0; r < a && !(s >= o); r++)
        s += t[r].size || this.minItemSize, l += e[r].size || this.minItemSize;
      const n = l - s;
      n !== 0 && (this.$el.scrollTop += n);
    }
  },
  beforeCreate() {
    this.$_updates = [], this.$_undefinedSizes = 0, this.$_undefinedMap = {}, this.$_events = mp();
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
function Cp(e, t, o, s, l, a) {
  const n = zs("RecycleScroller");
  return p(), H(n, Ie({
    ref: "scroller",
    items: a.itemsWithSize,
    "min-item-size": o.minItemSize,
    direction: e.direction,
    "key-field": "id",
    "list-tag": e.listTag,
    "item-tag": e.itemTag
  }, e.$attrs, {
    onResize: a.onScrollerResize,
    onVisible: a.onScrollerVisible
  }), {
    default: B(({ item: r, index: u, active: c }) => [
      X(e.$slots, "default", dt(ct({
        item: r.item,
        index: u,
        active: c,
        itemWithSize: r
      })))
    ]),
    before: B(() => [
      X(e.$slots, "before")
    ]),
    after: B(() => [
      X(e.$slots, "after")
    ]),
    empty: B(() => [
      X(e.$slots, "empty")
    ]),
    _: 3
    /* FORWARDED */
  }, 16, ["items", "min-item-size", "direction", "list-tag", "item-tag", "onResize", "onVisible"]);
}
es.render = Cp;
es.__file = "src/components/DynamicScroller.vue";
var Al = {
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
Al.__file = "src/components/DynamicScrollerItem.vue";
const Sp = {
  key: 0,
  class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1"
}, Ae = /* @__PURE__ */ T({
  __name: "FormErrorMessage",
  props: {
    errorMessage: { default: null }
  },
  setup(e) {
    const s = Se(e).errorMessage, l = z(
      () => !!s.value && s.value.trim() !== ""
    );
    return (a, n) => l.value ? (p(), d("p", Sp, [
      i("span", null, C(P(s)), 1)
    ])) : k("", !0);
  }
}), Pp = {
  key: 0,
  class: "po-mt-2 po-text-sm po-text-slate-500"
}, je = /* @__PURE__ */ T({
  __name: "FormMessage",
  props: {
    message: { default: null }
  },
  setup(e) {
    return (t, o) => t.message !== null ? (p(), d("p", Pp, C(t.message), 1)) : k("", !0);
  }
}), Op = { class: "po-block po-w-4 po-text-mpao-lightblue hover:po-text-mpao-midblue po-transition-colors po-duration-150 po-ease-out" }, Ne = /* @__PURE__ */ T({
  __name: "FormInfo",
  props: {
    info: { default: "" }
  },
  setup(e) {
    return (t, o) => t.info !== "" ? (p(), H(P(uo), {
      key: 0,
      text: t.info,
      placement: "right",
      strategy: "fixed"
    }, {
      default: B(() => [
        i("span", Op, [
          V(P(Qi), { class: "po-fill-current" })
        ])
      ]),
      _: 1
    }, 8, ["text"])) : k("", !0);
  }
}), Lp = ["for"], Mp = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Tp = { class: "po-relative po-mt-1" }, Dp = {
  role: "button",
  ref: "comboboxButton"
}, Ip = ["placeholder", "disabled", "id"], zp = {
  class: /* @__PURE__ */ L(["group-hover:po-text-white po-block po-truncate"])
}, Bp = {
  key: 0,
  class: "po-block po-text-xs po-opacity-60"
}, Ep = {
  key: 1,
  class: "scroller po-max-h-60 po-h-full po-overflow-y-auto"
}, Ap = ["onMousedown"], jp = {
  class: /* @__PURE__ */ L(["group-hover:po-text-white po-block po-truncate"])
}, Rp = {
  key: 0,
  class: "po-block po-text-xs po-opacity-60"
}, Fp = {
  name: "PoSelectField"
}, Hp = /* @__PURE__ */ T({
  ...Fp,
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
    const o = e, s = $(""), l = $(""), a = $(), n = $(!1), r = $(!1), u = $(), c = $(null), v = $({
      viewStartIdx: 0,
      viewEndIdx: 0,
      visibleStartIdx: 0,
      visibleEndIdx: 0
    }), y = z(() => {
      var M, O;
      const D = s.value.toLowerCase();
      return D === "" ? ((M = o.list) == null ? void 0 : M.map((A) => ({
        ...A,
        active: a.value === A.id
      }))) ?? [] : ((O = o.list) == null ? void 0 : O.filter((A) => A.name.toLowerCase().includes(D)).map((A) => ({
        ...A,
        active: a.value === A.id
      }))) ?? [];
    });
    function w(D) {
      if (o.object)
        return D == null ? void 0 : D.name;
      if (y.value) {
        let M = y.value.find((O) => O.id === D);
        return M == null ? void 0 : M.name;
      } else if (o.placeholder)
        return o.placeholder;
    }
    a.value = o.modelValue, Io(() => {
      a.value = o.modelValue;
    }), Q(a, () => {
      l.value = w(a.value);
    }), Et(c, () => {
      n.value = !!r.value;
    });
    function b(D) {
      a.value = D, l.value = D.name, s.value = "", t("selected", o.object ? D : D.id), t("update:modelValue", o.object ? D : D.id), n.value = !!r.value;
    }
    const m = $();
    let f;
    const { uniqueId: h, generateUniqueId: _ } = Le(), g = $(o.id);
    Z(() => {
      o.id === "" && (_(), g.value = h.value), l.value = w(o.modelValue), f = Bt(u.value, m.value, {
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
    function S() {
      r.value = !0, n.value = !0, f && f.update();
    }
    re(() => {
      f && f.destroy();
    });
    function x() {
      r.value = !1, setTimeout(() => {
        n.value = !1;
      }, 100);
    }
    const I = (D) => {
      let M = D.target.value;
      s.value = M;
    };
    function E(D, M, O, A) {
      v.value.viewStartIdx = D, v.value.viewEndIdx = M, v.value.visibleStartIdx = O, v.value.visibleEndIdx = A;
    }
    function R() {
      f && f.update();
    }
    return xe.on("sidebarOpen", (D) => {
      setTimeout(() => {
        f && f.update();
      }, 320);
    }), (D, M) => (p(), d("div", {
      class: L([{ "lg:po-grid lg:po-grid-cols-2": D.display === "horizontal" }]),
      ref_key: "containerRef",
      ref: c
    }, [
      i("label", {
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700",
        for: g.value
      }, [
        i("span", null, C(D.label), 1),
        D.required ? (p(), d("span", Mp, "*")) : k("", !0),
        V(Ne, { info: D.info }, null, 8, ["info"])
      ], 8, Lp),
      i("div", Tp, [
        i("div", Dp, [
          Oe(i("input", {
            type: "text",
            ref_key: "selectBox",
            ref: u,
            class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm",
            placeholder: D.placeholder,
            disabled: D.disabled,
            "onUpdate:modelValue": M[0] || (M[0] = (O) => l.value = O),
            onInput: I,
            onFocus: S,
            onBlur: x,
            id: g.value
          }, null, 40, Ip), [
            [Mt, l.value]
          ]),
          i("span", {
            class: "po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-rounded-r-md po-px-2 focus:po-outline-none",
            role: "button",
            onMousedown: M[1] || (M[1] = te((O) => n.value = !n.value, ["stop"]))
          }, [
            V(P(Ki), {
              class: "po-h-5 po-w-5 po-text-slate-400",
              "aria-hidden": "true"
            })
          ], 32)
        ], 512),
        Oe(i("div", {
          ref_key: "popper",
          ref: m,
          class: "po-absolute po-z-10 po-mt-1 po-w-full po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
        }, [
          D.dynamicScroll ? (p(), H(P(es), {
            key: 0,
            items: y.value,
            "min-item-size": 32,
            "key-field": "id",
            class: "scroller po-max-h-60 po-h-full po-overflow-y-auto",
            onResize: R,
            onUpdate: E
          }, {
            default: B(({ item: O, index: A, active: q }) => [
              V(P(Al), {
                item: O,
                active: q,
                "size-dependencies": [O.name],
                onMousedown: te((N) => b(O), ["stop"]),
                "data-index": A,
                class: L([
                  "po-relative po-group po-select-none po-py-2 po-pl-3 po-pr-9 po-cursor-pointer hover:po-bg-mpao-lightblue",
                  O.active ? "po-bg-mpao-lightblue po-text-white" : "po-text-slate-900"
                ])
              }, {
                default: B(() => [
                  i("span", zp, [
                    ee(C((O == null ? void 0 : O.name) ?? "") + " ", 1),
                    O != null && O.subtitle ? (p(), d("span", Bp, C(O == null ? void 0 : O.subtitle), 1)) : k("", !0)
                  ])
                ]),
                _: 2
              }, 1032, ["item", "active", "size-dependencies", "onMousedown", "data-index", "class"])
            ]),
            _: 1
          }, 8, ["items"])) : (p(), d("ul", Ep, [
            (p(!0), d(F, null, G(y.value, (O) => (p(), d("li", {
              onMousedown: te((A) => b(O), ["stop"]),
              class: L([
                "po-relative po-group po-select-none po-py-2 po-pl-3 po-pr-9 po-cursor-pointer hover:po-bg-mpao-lightblue",
                O.active ? "po-bg-mpao-lightblue po-text-white" : "po-text-slate-900"
              ])
            }, [
              i("span", jp, [
                ee(C((O == null ? void 0 : O.name) ?? "") + " ", 1),
                O != null && O.subtitle ? (p(), d("span", Rp, C(O == null ? void 0 : O.subtitle), 1)) : k("", !0)
              ])
            ], 42, Ap))), 256))
          ]))
        ], 512), [
          [Tt, n.value && y.value.length > 0]
        ])
      ]),
      V(je, { message: D.message }, null, 8, ["message"]),
      V(Ae, { "error-message": D.errorMessage }, null, 8, ["error-message"])
    ], 2));
  }
}), Np = /* @__PURE__ */ i("div", { class: "po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity" }, null, -1), qp = { class: "po-fixed po-z-10 po-inset-0" }, Up = { class: "po-flex po-justify-center po-items-start po-min-h-screen sm:po-px-4 sm:po-pt-10 sm:po-pb-20 po-text-center sm:po-block po-max-h-screen po-overflow-y-hidden" }, Yp = /* @__PURE__ */ i("span", {
  class: "po-hidden sm:po-inline-block sm:po-align-middle sm:po-h-screen",
  "aria-hidden": "true"
}, "​", -1), Wp = { class: "po-flex po-items-center po-bg-white po-rounded-t-xl po-p-5" }, Zp = { class: "po-grow po-text-md po-font-bold po-text-slate-600" }, Gp = { class: "po-shrink-0" }, Kp = /* @__PURE__ */ i("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), Xp = {
  key: 0,
  class: "po-bg-slate-50 po-rounded-b-xl"
}, Qp = {
  name: "PoModal"
}, Ft = /* @__PURE__ */ T({
  ...Qp,
  props: {
    openBtnLabel: { default: "" },
    modalTitle: { default: "Modal windows" },
    show: { type: Boolean, default: !1 },
    modalWidth: { default: "sm:po-max-w-xl" },
    modalHeight: { default: "" }
  },
  emits: ["modal-closed"],
  setup(e, { emit: t }) {
    const o = e, { show: s } = Se(o), l = $(!1);
    Q(s, () => {
      l.value = s.value;
    });
    function a() {
      l.value = !1, t("modal-closed", !0);
    }
    const n = o.modalTitle.toLowerCase().replace(/\s+/g, "-"), r = new URLSearchParams(window.location.search);
    return l.value = r.get("modal") !== void 0 && r.get("modal") === n, (u, c) => (p(), d("div", null, [
      u.openBtnLabel.length > 0 ? (p(), H(P(gt), {
        key: 0,
        label: u.openBtnLabel,
        onClick: c[0] || (c[0] = (v) => l.value = !0)
      }, null, 8, ["label"])) : k("", !0),
      (p(), H(Dt, { to: "body" }, [
        V(P(Rt), {
          as: "template",
          show: l.value
        }, {
          default: B(() => [
            V(P(lo), {
              as: "div",
              class: "po-relative po-z-50",
              onClose: a
            }, {
              default: B(() => [
                V(P(Ke), {
                  as: "template",
                  enter: "po-ease-out po-duration-300",
                  "enter-from": "po-opacity-0",
                  "enter-to": "po-opacity-100",
                  leave: "po-ease-in po-duration-200",
                  "leave-from": "po-opacity-100",
                  "leave-to": "po-opacity-0"
                }, {
                  default: B(() => [
                    Np
                  ]),
                  _: 1
                }),
                i("div", qp, [
                  i("div", Up, [
                    Yp,
                    V(P(Ke), {
                      as: "template",
                      enter: "po-ease-out po-duration-300",
                      "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                      "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                      leave: "po-ease-in po-duration-200",
                      "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                      "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                    }, {
                      default: B(() => [
                        V(P(ao), {
                          class: L(["po-relative po-inline-block po-align-bottom po-bg-white sm:po-rounded-xl po-text-left po-shadow-xl po-transform po-transition-all sm:po-align-top po-w-full", u.modalWidth])
                        }, {
                          default: B(() => [
                            i("div", Wp, [
                              i("h3", Zp, C(u.modalTitle), 1),
                              i("div", Gp, [
                                i("span", {
                                  role: "button",
                                  class: "po-block",
                                  onClick: a
                                }, [
                                  V(P(Qt), { class: "po-w-5 po-stroke-slate-500 hover:po-stroke-mpao-orange po-transition-colors po-duration-150 po-ease-in-out" })
                                ])
                              ])
                            ]),
                            Kp,
                            i("div", {
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
                              X(u.$slots, "content")
                            ], 2),
                            u.$slots.footer ? (p(), d("div", Xp, [
                              X(u.$slots, "footer")
                            ])) : k("", !0)
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
}), Jp = ["for"], eu = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, tu = ["name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], ou = {
  name: "PoTextarea"
}, su = /* @__PURE__ */ T({
  ...ou,
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
    const o = e, s = (r) => {
      let u = r.target.value;
      t("update:modelValue", u);
    }, { uniqueId: l, generateUniqueId: a } = Le(), n = $(o.id);
    return Z(() => {
      o.id === "" && (a(), n.value = l.value);
    }), (r, u) => (p(), d("div", {
      class: L(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": r.display === "horizontal" }]])
    }, [
      i("label", {
        for: n.value,
        class: "po-text-sm po-font-medium po-text-slate-700 po-flex po-items-center po-space-x-1"
      }, [
        i("span", null, C(r.label), 1),
        r.required ? (p(), d("span", eu, "*")) : k("", !0),
        V(Ne, { info: r.info }, null, 8, ["info"])
      ], 8, Jp),
      i("textarea", Ie({
        name: `${n.value}-field`,
        id: n.value,
        value: r.modelValue,
        placeholder: r.placeholder,
        disabled: r.disabled,
        required: r.required,
        "aria-describedby": `${r.id}-description`,
        "aria-required": r.required,
        "aria-disabled": r.disabled
      }, r.$attrs, {
        onInput: s,
        class: "po-mt-1 po-peer po-px-3 po-py-2 po-block po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-border-slate-300 po-bg-white focus:po-border-mpao-lightblue focus:po-ring-0 invalid:po-border-red-400 invalid:po-focus:border-red-600 invalid:focus:po-ring-red-600 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default"
      }), null, 16, tu),
      V(je, { message: r.message }, null, 8, ["message"]),
      V(Ae, { "error-message": r.errorMessage }, null, 8, ["error-message"])
    ], 2));
  }
}), lu = { class: "po-w-5 po-h-5" }, au = { action: "" }, nu = /* @__PURE__ */ i("br", null, null, -1), ru = { class: "po-p-5" }, iu = /* @__PURE__ */ T({
  __name: "feedbackForm",
  props: {
    sidebarOpen: { type: Boolean, default: !0 },
    hideSidebarItemLabel: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = $(!1), o = [
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
    ], s = $({
      type: 1,
      message: ""
    });
    return (l, a) => (p(), d(F, null, [
      i("button", {
        onClick: a[0] || (a[0] = te(() => t.value = !0, ["prevent"])),
        class: "po-flex po-items-center po-w-full po-group po-space-x-3 po-px-2 po-py-3 po-transition-colors po-duration-100 po-ease-in-out po-rounded-lg po-outline-none po-ring-0 po-text-slate-600 hover:po-text-mpao-lightblue hover:po-bg-slate-100",
        title: "Go to feedback"
      }, [
        i("span", lu, [
          V(P(ca), { class: "po-stroke-current group-hover:po-stroke-mpao-orange po-w-5 po-h-5 po-stroke-2" })
        ]),
        i("span", {
          class: L(["po-text-sm po-leading-none po-font-medium po-shrink-0 po-text-left po-transition-opacity po-duration-150 po-ease-out", [
            { "po-opacity-1": l.sidebarOpen },
            { "po-opacity-0": !l.sidebarOpen },
            { "po-hidden": l.hideSidebarItemLabel }
          ]])
        }, "Feedback", 2)
      ]),
      V(Ft, {
        show: t.value,
        onModalClosed: a[3] || (a[3] = () => t.value = !1),
        "modal-title": "Feedback"
      }, {
        content: B(() => [
          i("form", au, [
            V(Hp, {
              label: "Type",
              list: o,
              modelValue: s.value.type,
              "onUpdate:modelValue": a[1] || (a[1] = (n) => s.value.type = n)
            }, null, 8, ["modelValue"]),
            nu,
            V(su, {
              cols: "6",
              rows: "6",
              label: "Description",
              modelValue: s.value.message,
              "onUpdate:modelValue": a[2] || (a[2] = (n) => s.value.message = n)
            }, null, 8, ["modelValue"])
          ])
        ]),
        footer: B(() => [
          i("div", ru, [
            V(gt, {
              label: "Send",
              type: "button"
            })
          ])
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), pu = { key: 0 }, uu = ["innerHTML"], Ts = /* @__PURE__ */ T({
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
      const { type: n } = o;
      t("item-click", {
        actionType: n === "tab" ? "button-click" : "app-click",
        action: a
      });
    }
    function l() {
      var n, r;
      const a = ((n = o.item) == null ? void 0 : n.name) || ((r = o.item) == null ? void 0 : r.label) || "";
      return o.sidebarOpen ? "" : a;
    }
    return (a, n) => a.item ? (p(), d("li", pu, [
      i("span", null, [
        V(P(uo), {
          text: l(),
          placement: "right",
          strategy: "fixed"
        }, {
          default: B(() => [
            a.item.disabled ? k("", !0) : (p(), d("button", {
              key: 0,
              onClick: n[0] || (n[0] = (r) => s(a.item.name || a.item.url)),
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
              i("span", {
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
                }, null, 8, uu)) : (p(), H(he(a.item.icon), {
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
              i("span", {
                class: L(["po-text-sm po-leading-none po-font-medium po-shrink-0 po-text-left po-transition-opacity po-duration-150 po-ease-out", [
                  { "po-opacity-1": a.sidebarOpen },
                  { "po-opacity-0": !a.sidebarOpen },
                  { "po-hidden": a.hideSidebarItemLabel }
                ]])
              }, C(a.item.name || a.item.label), 3)
            ], 2))
          ]),
          _: 1
        }, 8, ["text"])
      ])
    ])) : k("", !0);
  }
}), du = { class: "po-grow" }, cu = { class: "po-mt-2 po-mb-5" }, fu = { class: "po-mt-2 po-mb-5" }, vu = {
  key: 0,
  class: "po-mt-2 po-shrink-0 po-mb-2 po-border-t po-border-slate-200 po-pt-2"
}, hu = {
  name: "PoSidebarDrawer"
}, b5 = /* @__PURE__ */ T({
  ...hu,
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
    const o = e, s = $(!0), l = $(window.innerWidth), a = $(!1), n = $(!1), r = $(!0), u = () => {
      w();
    }, c = z(() => {
      var f, h;
      let b = [];
      const m = (f = o.apps) == null ? void 0 : f.filter((_) => _.code == o.appCode)[0];
      if (m) {
        let _ = (h = o.apps) == null ? void 0 : h.filter(
          (g) => m.related.includes(g.code)
        );
        _ == null || _.forEach((g) => {
          b.push(g);
        });
      }
      return b;
    });
    Z(() => {
      window.addEventListener("resize", u), w();
    });
    function v({ actionType: b, action: m }) {
      t(b, m), a.value && xe.emit("sidebarOpen", !1);
    }
    function y(b) {
      return s.value ? "" : b;
    }
    function w() {
      l.value = window.innerWidth, l.value <= 1024 ? (a.value = !0, xe.emit("sidebarOpen", !1)) : a.value = !1;
    }
    return To(() => {
      window.removeEventListener("resize", u);
    }), xe.on("sidebarOpen", (b) => {
      typeof b == "boolean" && (s.value = b, b ? (n.value = !1, setTimeout(() => {
        r.value = !0;
      }, 150)) : (r.value = !1, setTimeout(() => {
        n.value = !0;
      }, 320)));
    }), (b, m) => {
      var f;
      return p(), d("aside", {
        class: L(["po-flex po-flex-col po-px-3 po-pt-[78px] po-top-0 po-bottom-0 po-bg-white po-overflow-y-auto po-overflow-x-hidden po-transition-all po-duration-300 po-ease-in-out po-border-r po-border-slate-50 po-z-[49] po-fixed", [
          { "po-w-[256px]": s.value && !a.value },
          { "po-w-[64px]": !s.value && !a.value },
          { "po-w-[256px] po-left-0 po-shadow": a.value && s.value },
          {
            "po-w-[256px] -po-left-[256px]  po-shadow-lg": a.value && !s.value
          }
        ]])
      }, [
        i("div", du, [
          (p(!0), d(F, null, G(b.content, (h, _) => (p(), H(P($s), {
            key: `sidebar-group-${_}`,
            defaultOpen: !0
          }, {
            default: B(({ open: g }) => [
              h.groupName ? (p(), H(P(xs), {
                key: 0,
                class: L([[
                  { "po-mb-3": g === "" },
                  { "po-ml-0 po-text-center": n.value },
                  { "po-ml-2 po-text-left": !n.value },
                  { "po-animate-fadeOut": !n.value && !s.value },
                  { "po-animate-fadeIn": n.value }
                ], "po-uppercase po-select-none po-text-xs po-font-semibold po-text-slate-400 po-block po-w-full"])
              }, {
                default: B(() => [
                  ee(C(r.value ? h.groupName : h.groupName.slice(0, 2)), 1)
                ]),
                _: 2
              }, 1032, ["class"])) : k("", !0),
              V(Ze, {
                "enter-active-class": "po-transition po-duration-100 po-ease-out",
                "enter-from-class": "po-transform po-scale-95 po-opacity-0",
                "enter-to-class": "po-transform po-scale-100 po-opacity-100",
                "leave-active-class": "po-transition po-duration-75 po-ease-out",
                "leave-from-class": "po-transform po-scale-100 po-opacity-100",
                "leave-to-class": "po-transform po-scale-95 po-opacity-0"
              }, {
                default: B(() => [
                  V(P(Vs), null, {
                    default: B(() => [
                      i("ul", cu, [
                        (p(!0), d(F, null, G(h.items, (S) => (p(), H(Ts, {
                          key: S.label,
                          item: S,
                          sidebarOpen: s.value,
                          hideSidebarItemLabel: n.value,
                          currRoute: b.currRoute,
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
          ((f = c.value) == null ? void 0 : f.length) > 0 ? (p(), H(P($s), {
            key: 0,
            defaultOpen: !0
          }, {
            default: B(({ open: h }) => [
              b.appsLabel ? (p(), H(P(xs), {
                key: 0,
                class: L([[
                  { "po-mb-3": h === "" },
                  { "po-ml-0 po-text-center": n.value },
                  { "po-ml-2 po-text-left": !n.value },
                  { "po-animate-fadeOut": !n.value && !s.value },
                  { "po-animate-fadeIn": n.value }
                ], "po-uppercase po-select-none po-text-xs po-font-semibold po-text-slate-400 po-block po-w-full"])
              }, {
                default: B(() => [
                  ee(C(r.value ? b.appsLabel : b.appsLabel.slice(0, 2)), 1)
                ]),
                _: 2
              }, 1032, ["class"])) : k("", !0),
              V(Ze, {
                "enter-active-class": "po-transition po-duration-100 po-ease-out",
                "enter-from-class": "po-transform po-scale-95 po-opacity-0",
                "enter-to-class": "po-transform po-scale-100 po-opacity-100",
                "leave-active-class": "po-transition po-duration-75 po-ease-out",
                "leave-from-class": "po-transform po-scale-100 po-opacity-100",
                "leave-to-class": "po-transform po-scale-95 po-opacity-0"
              }, {
                default: B(() => [
                  V(P(Vs), null, {
                    default: B(() => [
                      i("ul", fu, [
                        (p(!0), d(F, null, G(c.value, (_) => (p(), H(Ts, {
                          key: _.name,
                          item: _,
                          sidebarOpen: s.value,
                          hideSidebarItemLabel: n.value,
                          currRoute: b.currRoute,
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
          })) : k("", !0)
        ]),
        b.hasFeedback ? (p(), d("ul", vu, [
          i("li", null, [
            V(P(uo), {
              text: y("Feedback"),
              placement: "right",
              strategy: "fixed"
            }, {
              default: B(() => [
                V(iu, {
                  "sidebar-open": s.value,
                  "hide-sidebar-item-label": n.value
                }, null, 8, ["sidebar-open", "hide-sidebar-item-label"])
              ]),
              _: 1
            }, 8, ["text"])
          ])
        ])) : k("", !0)
      ], 2);
    };
  }
}), mu = {
  key: 0,
  class: "shell-content--action-bar"
}, bu = { class: "action-bar__nav" }, gu = ["onClick"], yu = { class: "action-bar__nav_label po-font-medium" }, wu = {
  key: 0,
  class: "po-shrink-0 po-flex po-space-x-1"
}, _u = /* @__PURE__ */ i("span", { class: "action-bar__nav_label po-font-medium" }, "Go Back", -1), $u = {
  name: "PoActionBar"
}, g5 = /* @__PURE__ */ T({
  ...$u,
  props: {
    items: { default: null },
    showBackButton: { type: Boolean, default: !1 },
    currPageRoute: { default: "" }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, s) => o.items !== null && o.items.length > 0 || o.showBackButton ? (p(), d("section", mu, [
      i("nav", bu, [
        (p(!0), d(F, null, G(o.items, (l) => (p(), d("span", {
          onClick: (a) => o.$emit("button-click", l.label),
          class: L([[
            { "action-bar__nav_highlighted": l.highlighted },
            { "action-bar__nav_danger": l.danger }
          ], "action-bar__nav_link"])
        }, [
          (p(), H(he(l.icon), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" })),
          i("span", yu, C(l.label), 1)
        ], 10, gu))), 256))
      ]),
      o.showBackButton ? (p(), d("nav", wu, [
        i("span", {
          onClick: s[0] || (s[0] = (l) => o.$emit("button-click", "back")),
          class: "action-bar__nav_link"
        }, [
          _u,
          (p(), H(he(P(ia)), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" }))
        ])
      ])) : k("", !0)
    ])) : k("", !0);
  }
}), xu = { class: "po-shadow-sm po-rounded-xl po-bg-white po-relative" }, Vu = {
  key: 0,
  class: "po-absolute po-right-2 po-top-2 po-p-2 po-rounded-lg"
}, ku = {
  key: 0,
  class: "po-text-base po-font-medium po-text-slate-600"
}, Cu = {
  key: 1,
  class: "lg:po-col-span-2 lg:po-flex lg:po-justify-end po-space-x-2"
}, Su = {
  name: "PoCard"
}, y5 = /* @__PURE__ */ T({
  ...Su,
  props: {
    title: { default: "" },
    isLoading: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, o) => (p(), d("div", xu, [
      t.isLoading ? (p(), d("div", Vu, [
        V(at)
      ])) : k("", !0),
      i("div", {
        class: L([
          { "po-grid po-grid-cols-1 lg:po-grid-cols-3 po-gap-3": t.$slots.action }
        ])
      }, [
        t.title.length > 0 ? (p(), d("h3", ku, C(t.title), 1)) : k("", !0),
        t.$slots.action ? (p(), d("div", Cu, [
          X(t.$slots, "action")
        ])) : k("", !0)
      ], 2),
      X(t.$slots, "content")
    ]));
  }
}), Pu = { class: "po-py-3 po-px-5 po-border-b po-border-slate-200" }, Ou = {
  class: "po-flex po-w-full md:po-ml-0",
  action: "#",
  method: "GET"
}, Lu = ["for"], Mu = { class: "po-relative po-w-full po-text-slate-400 focus-within:po-text-mpao-lightblue po-transition-colors po-duration-100 po-ease-in-out" }, Tu = { class: "po-pointer-events-none po-absolute po-inset-y-0 po-left-0 po-flex po-items-center" }, Du = ["id", "placeholder", "value"], Iu = ["disabled"], zu = {
  name: "PoCardSearch"
}, w5 = /* @__PURE__ */ T({
  ...zu,
  props: {
    modelValue: { default: "" },
    placeholder: { default: "Search" },
    showBtn: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "button-click"],
  setup(e, { emit: t }) {
    const o = (n) => {
      let r = n.target.value;
      t("update:modelValue", r);
    }, { uniqueId: s, generateUniqueId: l } = Le(), a = $("card-search-field");
    return Z(() => {
      l(), a.value = s.value;
    }), (n, r) => (p(), d("div", Pu, [
      i("form", Ou, [
        i("label", {
          for: a.value,
          class: "po-sr-only"
        }, C(n.placeholder), 9, Lu),
        i("div", Mu, [
          i("div", Tu, [
            V(P(Xt), { class: "po-h-5 po-w-5 po-flex-shrink-0" })
          ]),
          i("input", {
            name: "search-field",
            id: a.value,
            autocomplete: "off",
            "aria-autocomplete": "none",
            placeholder: n.placeholder,
            value: n.modelValue,
            onInput: o,
            class: "po-h-full po-w-full po-border-transparent po-py-2 po-pl-8 po-pr-3 po-text-sm po-text-slate-700 po-placeholder-slate-500 focus:po-border-transparent focus:po-placeholder-slate-400 focus:po-outline-none focus:po-ring-0",
            type: "search"
          }, null, 40, Du),
          n.showBtn ? (p(), d("button", {
            key: 0,
            class: L(["po-absolute po-right-0 po-text-sm po-rounded-lg po-px-3 po-py-2 po-transition-colors po-duration-150 po-ease-out", [
              { "po-bg-mpao-lightblue po-text-white": n.modelValue !== "" },
              { "po-bg-slate-100 po-text-slate-400": n.modelValue === "" }
            ]]),
            disabled: n.modelValue === "",
            onClick: r[0] || (r[0] = te((u) => n.$emit("button-click", n.modelValue), ["prevent"]))
          }, " Search ", 10, Iu)) : k("", !0)
        ])
      ])
    ]));
  }
}), Bu = { class: "po-flex po-items-center" }, Eu = { class: "po-text-sm po-font-medium po-text-slate-500 po-pr-2" }, Au = {
  name: "PoPagination"
}, ju = /* @__PURE__ */ T({
  ...Au,
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
    const a = z(() => o.totalPages ? `Page ${o.currentPage} of ${o.totalPages}` : o.pagination ? o.pagination.label : "");
    return (n, r) => (p(), d("div", Bu, [
      i("span", Eu, C(a.value), 1),
      i("button", {
        title: "Previous",
        onClick: s,
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        V(P(Bs), { class: "po-w-4 po-stroke-current po-stroke-2" })
      ]),
      i("button", {
        title: "Next",
        onClick: l,
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        V(P(Es), { class: "po-w-4 po-stroke-current po-stroke-2" })
      ])
    ]));
  }
}), Ru = { key: 0 }, Fu = {
  class: "po-text-xl md:po-text-2xl po-font-semibold po-text-slate-800",
  id: "po-page-title"
}, Hu = {
  key: 0,
  class: "po-text-base po-mt-2 po-max-w-md po-block po-text-slate-500"
}, Nu = { key: 1 }, qu = { class: "po-grid po-grid-cols-1 lg:po-grid-cols-2 po-gap-5" }, Uu = {
  class: "po-text-xl md:po-text-2xl po-font-semibold po-text-slate-800",
  id: "po-page-title"
}, Yu = {
  key: 0,
  class: "po-text-base po-mt-4 po-max-w-md po-pb-5 po-block po-text-slate-500"
}, Wu = { class: "po-flex po-items-end po-justify-end po-flex-col" }, Zu = {
  key: 0,
  class: "po-flex md:po-justify-end po-mb-5"
}, Gu = { class: "po-bg-slate-50 po-shadow-sm po-rounded-xl po-py-5 po-px-2 po-divide-x po-divide-slate-200 po-flex" }, Ku = ["onClick"], Xu = { class: "po-text-xl po-font-medium po-text-slate-600 po-flex po-items-center po-space-x-1" }, Qu = { class: "po-text-xl po-font-medium po-text-slate-600 group-hover:po-text-mpao-lightblue" }, Ju = { class: "po-text-sm po-text-slate-500 po-block group-hover:po-text-mpao-lightblue" }, ed = { class: "po-flex po-items-center po-space-x-1 md:po-justify-end" }, td = {
  key: 2,
  class: "po-border-l po-border-slate-400 po-h-3 po-w-3 po-ml-1"
}, od = {
  key: 0,
  class: "po-bg-slate-50 po-p-5 po-mt-5 po-rounded-md po-grid po-grid-cols-1 md:po-grid-cols-3 po-gap-5"
}, sd = /* @__PURE__ */ i("span", { class: "po-text-xs po-text-slate-500 po-py-5" }, "No filters available at the moment.", -1), ld = {
  name: "PoPageTitle"
}, _5 = /* @__PURE__ */ T({
  ...ld,
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
    const s = e.filterOn ? $(!0) : $(!1);
    function l(n) {
      t("pagination-click", n);
    }
    function a(n) {
      return n.iconColor ? n.iconColor : "po-slate-600";
    }
    return (n, r) => n.standAlone ? (p(), d("div", Ru, [
      i("h1", Fu, C(n.label), 1),
      n.description !== "" ? (p(), d("span", Hu, C(n.description), 1)) : k("", !0)
    ])) : (p(), d("div", Nu, [
      i("div", qu, [
        i("div", null, [
          i("h1", Uu, C(n.label), 1),
          n.description !== "" ? (p(), d("span", Yu, C(n.description), 1)) : k("", !0)
        ]),
        i("div", Wu, [
          n.stats !== null ? (p(), d("div", Zu, [
            i("div", Gu, [
              (p(!0), d(F, null, G(n.stats, (u) => (p(), d("div", {
                class: "po-px-5 po-cursor-pointer po-group genie-effect",
                onClick: (c) => n.$emit("stat-click", u)
              }, [
                i("span", Xu, [
                  i("span", Qu, C(u.value), 1),
                  u.icon ? (p(), d("span", {
                    key: 0,
                    class: L(["po-w-5 po-h-5", a(u)])
                  }, [
                    (p(), H(he(u.icon)))
                  ], 2)) : k("", !0)
                ]),
                i("span", Ju, C(u.label), 1)
              ], 8, Ku))), 256))
            ])
          ])) : k("", !0),
          i("div", ed, [
            n.showFilter ? (p(), d("button", {
              key: 0,
              title: "Filter",
              onClick: r[0] || (r[0] = (u) => {
                n.$emit("button-click", "filter"), s.value = !P(s);
              }),
              class: L([
                "po-p-2 po-rounded-md hover:po-bg-slate-200 po-transition-colors po-duration-75 po-ease-in-out",
                { "po-text-mpao-orange hover:po-text-mpao-orange": P(s) },
                { "tpo-ext-slate-600 hover:po-text-mpao-blue": !P(s) }
              ])
            }, [
              V(P(As), { class: "po-w-4 po-stroke-current po-stroke-2" })
            ], 2)) : k("", !0),
            n.showDownload ? (p(), d("button", {
              key: 1,
              title: "Download",
              onClick: r[1] || (r[1] = (u) => n.$emit("button-click", "download")),
              class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
            }, [
              V(P(na), { class: "po-w-4 po-stroke-current po-stroke-2" })
            ])) : k("", !0),
            n.showFilter && n.showPagination || n.showDownload && n.showPagination ? (p(), d("span", td, " ")) : k("", !0),
            n.showPagination ? (p(), H(ju, {
              key: 3,
              pagination: n.pagination,
              onButtonClick: l
            }, null, 8, ["pagination"])) : k("", !0)
          ])
        ])
      ]),
      V(Ze, {
        "enter-active-class": "po-transition po-duration-100 po-ease-out",
        "enter-from-class": "po-transform po-scale-95 po-opacity-0",
        "enter-to-class": "po-transform po-scale-100 po-opacity-100",
        "leave-active-class": "po-transition po-duration-75 po-ease-out",
        "leave-from-class": "po-transform po-scale-100 po-opacity-100",
        "leave-to-class": "po-transform po-scale-95 po-opacity-0"
      }, {
        default: B(() => [
          P(s) ? (p(), d("div", od, [
            X(n.$slots, "filters", {}, () => [
              sd
            ])
          ])) : k("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), ad = {
  key: 0,
  class: "po-w-12"
}, nd = ["onClick"], rd = { class: "po-flex po-space-x-1 po-pr-2 po-items-center" }, id = { class: "po-grow" }, pd = {
  key: 0,
  class: "po-shrink-0 po-select-none po-bg-slate-100 po-rounded-md po-w-4 po-h-4 po-flex po-items-center po-justify-center po-cursor-pointer",
  role: "button"
}, ud = {
  key: 0,
  class: "po-w-12"
}, dd = ["onClick"], cd = ["colspan"], fd = { key: 1 }, vd = ["colspan"], hd = { class: "po-py-10 po-block po-normal-case" }, md = { class: "po-pr-5" }, bd = { class: "po-py-1" }, gd = { key: 0 }, yd = {
  name: "PoTable"
}, $5 = /* @__PURE__ */ T({
  ...yd,
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
    const o = e, { isLoading: s, tbody: l, thead: a } = Se(o), n = $(!1), r = $(null), u = $(null), c = $(null);
    Q(s, () => {
      v();
    }), Q(l, () => {
      v(), y();
    }), Z(() => {
      v(), y(), r.value = a.value;
    });
    function v() {
      n.value = s.value, u.value = l.value, s.value && (u.value = [{}, {}, {}, {}, {}]);
    }
    function y() {
      if (o.hasDetailsRow && o.tbody)
        for (let m = 0; m < o.tbody.length; m++)
          o.tbody[m].showDetails = !1;
    }
    function w() {
      return Math.floor(Math.random() * 41) + 40;
    }
    const b = (m, f) => {
      var h;
      m.sortable && (m.sorted && c.value === "asc" ? c.value = "desc" : c.value = "asc", (h = r.value) == null || h.forEach((_) => {
        _.label === m.label ? (_.sorted = !0, _.sortDirection = c.value, _.index = f) : (_.sorted = !1, _.sortDirection = null);
      }), t("column-click", m));
    };
    return (m, f) => (p(), d("table", {
      class: L(["table-responsive po-w-full", [{ lg: m.breakAtLg }]])
    }, [
      i("thead", null, [
        i("tr", null, [
          m.hasDetailsRow ? (p(), d("th", ad)) : k("", !0),
          (p(!0), d(F, null, G(r.value, (h, _) => (p(), d("th", {
            onClick: (g) => b(h, _)
          }, [
            i("span", rd, [
              i("span", id, [
                X(m.$slots, "th", dt(ct(h)))
              ]),
              h.sortable ? (p(), d("span", pd, [
                h.sorted ? k("", !0) : (p(), H(P(Ui), {
                  key: 0,
                  class: "po-w-3 po-h-3"
                })),
                h.sorted && h.sortDirection === "asc" ? (p(), H(P(qi), {
                  key: 1,
                  class: "po-w-3 po-h-3"
                })) : k("", !0),
                h.sorted && h.sortDirection === "desc" ? (p(), H(P(Hi), {
                  key: 2,
                  class: "po-w-3 po-h-3"
                })) : k("", !0)
              ])) : k("", !0)
            ])
          ], 8, nd))), 256))
        ])
      ]),
      i("tbody", null, [
        u.value !== null && !n.value || u.value !== null && u.value.length !== 0 && !n.value ? (p(!0), d(F, { key: 0 }, G(u.value, (h, _) => (p(), d(F, null, [
          i("tr", null, [
            m.hasDetailsRow ? (p(), d("td", ud, [
              i("span", {
                onClick: (g) => h.showDetails = !h.showDetails
              }, [
                V(P(Ni), {
                  class: L(["po-w-5 po-fill-mpao-lightblue po-origin-center po-transition-transform po-duration-100 po-ease-out po-cursor-pointer", [{ "po-rotate-90": h.showDetails }]])
                }, null, 8, ["class"])
              ], 8, dd)
            ])) : k("", !0),
            X(m.$slots, "td", dt(ct({ ...h, index: _, item: h })))
          ]),
          m.hasDetailsRow ? (p(), d("tr", {
            key: 0,
            class: L(["po-table-details-row", [{ "po-hidden": !h.showDetails }]])
          }, [
            P(a) ? (p(), d("td", {
              key: 0,
              colspan: P(a).length + 1
            }, [
              X(m.$slots, "details", dt(ct({ item: h })))
            ], 8, cd)) : k("", !0)
          ], 2)) : k("", !0)
        ], 64))), 256)) : k("", !0),
        u.value == null && !n.value || u.value !== null && u.value.length == 0 && !n.value ? (p(), d("tr", fd, [
          P(a) ? (p(), d("td", {
            key: 0,
            colspan: P(a).length + 1,
            class: "po-text-center"
          }, [
            i("span", hd, C(m.emptyMessage), 1)
          ], 8, vd)) : k("", !0)
        ])) : k("", !0),
        n.value ? (p(!0), d(F, { key: 2 }, G(u.value, (h) => (p(), d("tr", null, [
          (p(!0), d(F, null, G(P(a), (_) => (p(), d("td", md, [
            i("div", bd, [
              i("div", {
                class: "po-h-2 loading-placeholder po-rounded-full",
                style: ft({ width: w() + "%" })
              }, null, 4)
            ])
          ]))), 256))
        ]))), 256)) : k("", !0)
      ]),
      m.$slots.tfoot ? (p(), d("tfoot", gd, [
        i("tr", null, [
          X(m.$slots, "tfoot")
        ])
      ])) : k("", !0)
    ], 2));
  }
}), wd = { class: "" }, _d = { class: "po-grow" }, $d = ["onClick"], xd = { class: "po-block po-py-[6px]" }, Vd = { class: "po-block po-py-[6px] po-w-full" }, kd = {
  name: "PoDescriptionList"
}, Cd = /* @__PURE__ */ T({
  ...kd,
  props: {
    items: { default: null },
    striped: { type: Boolean, default: !1 },
    columns: { type: Boolean, default: !0 },
    itemsCount: { default: 4 },
    isLoading: { type: Boolean, default: !1 }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    const o = e, { isLoading: s } = Se(o), l = $(!1);
    Q(s, () => {
      a();
    }), Z(() => {
      a();
    });
    function a() {
      l.value = s.value;
    }
    function n() {
      return Math.floor(Math.random() * 41) + 40;
    }
    return (r, u) => (p(), d("div", null, [
      i("dl", {
        class: L([
          "po-description-list",
          { "po-divide-y po-divide-slate-200": !r.striped },
          { striped: r.striped },
          { "no-col": !r.columns }
        ])
      }, [
        l.value ? (p(!0), d(F, { key: 1 }, G(r.itemsCount, (c) => (p(), d("div", null, [
          i("dt", null, [
            i("span", xd, [
              i("span", {
                class: "po-block po-h-2 loading-placeholder po-rounded-full",
                style: ft({ width: n() + "%" })
              }, null, 4)
            ])
          ]),
          i("dd", null, [
            i("span", Vd, [
              i("span", {
                class: "po-block po-h-2 loading-placeholder po-rounded-full",
                style: ft({ width: n() + "%" })
              }, null, 4)
            ])
          ])
        ]))), 256)) : X(r.$slots, "content", { key: 0 }, () => [
          (p(!0), d(F, null, G(r.items, (c) => (p(), d("div", null, [
            i("dt", null, C(c.title), 1),
            i("dd", wd, [
              i("span", _d, C(c.description), 1),
              c.action !== void 0 ? (p(), d("span", {
                key: 0,
                class: "po-shrink-0 po-text-mpao-lightblue hover:po-text-mpao-blue po-transition-colors po-duration-100 po-ease-in-out po-px-2 po-cursor-pointer",
                onClick: (v) => r.$emit("button-click", c.action)
              }, C(typeof c.action == "string" ? c.action : c.action.label), 9, $d)) : k("", !0)
            ])
          ]))), 256))
        ])
      ], 2)
    ]));
  }
}), Sd = ["for"], Pd = { class: "po-capitalize" }, Od = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Ld = ["type", "name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], Md = {
  name: "PoInputField"
}, Td = /* @__PURE__ */ T({
  ...Md,
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
    const a = $(void 0), n = (b) => {
      let m = b.target.value;
      a.value = m;
      let f = o.type === "currency" ? c(m) : m;
      t("update:modelValue", f);
    }, r = (b) => {
      u(b.target.value);
    };
    Q(o, (b, m) => {
      o.type === "currency" && a.value !== m.modelValue ? a.value = "" + is(o.modelValue) : a.value = o.modelValue;
    });
    const u = (b) => {
      let m = "";
      o.type === "currency" ? m = "" + is(c("" + b)) : m = b, a.value = m;
    }, c = (b) => {
      let m = b.replace(/,/g, "");
      const f = m.indexOf(".");
      return f !== -1 && m.substring(f + 1) === "00" && (m = m.substring(0, f)), m;
    };
    o.type === "currency" ? u(o.modelValue) : a.value = o.modelValue;
    const { uniqueId: v, generateUniqueId: y } = Le(), w = $(o.id);
    return Z(() => {
      o.id === "" && (y(), w.value = v.value);
    }), (b, m) => (p(), d("div", {
      class: L(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": b.display === "horizontal" }]])
    }, [
      i("label", {
        for: w.value,
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700"
      }, [
        i("span", Pd, C(b.label), 1),
        b.required ? (p(), d("span", Od, "*")) : k("", !0),
        V(Ne, { info: b.info }, null, 8, ["info"])
      ], 8, Sd),
      i("input", Ie({
        type: P(l),
        name: `${w.value}-field`,
        id: w.value,
        value: a.value,
        placeholder: b.placeholder,
        disabled: b.disabled,
        required: b.required,
        "aria-describedby": `${w.value}-description`,
        "aria-required": b.required,
        "aria-disabled": b.disabled
      }, b.$attrs, {
        onInput: n,
        onBlur: r,
        class: [
          "po-mt-1 peer po-block po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white focus:po-ring-0 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default",
          s(),
          b.styleClasses
        ]
      }), null, 16, Ld),
      V(je, { message: b.message }, null, 8, ["message"]),
      V(Ae, { "error-message": b.errorMessage }, null, 8, ["error-message"])
    ], 2));
  }
}), Dd = { class: "po-text-sm po-font-medium po-text-slate-700 peer-focus:po-text-mpao-lightblue peer-invalid:po-text-red-500 peer-invalid:peer-focus:po-text-red-600 po-flex po-items-center po-space-x-1 po-capitalize" }, Id = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, zd = ["name", "id", "value"], Bd = ["for"], Ed = { class: "po-flex po-items-center po-space-x-1" }, Ad = {
  key: 0,
  class: "po-text-sm"
}, jd = {
  key: 1,
  class: "po-text-sm"
}, Rd = {
  name: "PoInputFile"
}, x5 = /* @__PURE__ */ T({
  ...Rd,
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
    z(() => `width: ${o.progress}%`), z(() => o.progress);
    const s = $(""), l = (c) => {
      var y, w;
      const v = (w = (y = c.target) == null ? void 0 : y.files) == null ? void 0 : w[0];
      s.value = v ? v.name : "";
    }, a = (c) => {
      let v = c.target.value;
      t("update:modelValue", v);
    }, { uniqueId: n, generateUniqueId: r } = Le(), u = $(o.id);
    return Z(() => {
      o.id === "" && (r(), u.value = n.value);
    }), (c, v) => (p(), d("div", {
      class: L(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": c.display === "horizontal" }]])
    }, [
      i("span", Dd, [
        i("span", null, C(c.label), 1),
        c.required ? (p(), d("span", Id, "*")) : k("", !0)
      ]),
      i("input", {
        name: `${u.value}-upload`,
        id: u.value,
        value: c.modelValue,
        type: "file",
        onInput: a,
        onChange: v[0] || (v[0] = (y) => l(y)),
        class: "po-sr-only po-peer"
      }, null, 40, zd),
      i("label", {
        for: u.value,
        class: "po-mt-1 po-block po-w-full po-border po-cursor-pointer po-rounded-md po-border-slate-300 po-bg-white peer-focus:po-border-mpao-lightblue invalid:po-border-red-400 invalid:focus:po-border-red-600 invalid:focus:po-ring-red-600 sm:po-text-sm po-p-2"
      }, [
        i("div", Ed, [
          V(P(js), { class: "po-w-4 po-stroke-slate-500" }),
          s.value ? (p(), d("span", Ad, C(s.value), 1)) : (p(), d("span", jd, "Choose file"))
        ])
      ], 8, Bd),
      V(je, { message: c.message }, null, 8, ["message"]),
      V(Ae, { "error-message": c.errorMessage }, null, 8, ["error-message"])
    ], 2));
  }
});
var Mo = {}, Fd = {
  get exports() {
    return Mo;
  },
  set exports(e) {
    Mo = e;
  }
};
(function(e, t) {
  (function(o, s) {
    e.exports = s();
  })(oa, function() {
    var o = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, s = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, l = /\d\d/, a = /\d\d?/, n = /\d*[^-_:/,()\s\d]+/, r = {}, u = function(f) {
      return (f = +f) + (f > 68 ? 1900 : 2e3);
    }, c = function(f) {
      return function(h) {
        this[f] = +h;
      };
    }, v = [/[+-]\d\d:?(\d\d)?|Z/, function(f) {
      (this.zone || (this.zone = {})).offset = function(h) {
        if (!h || h === "Z")
          return 0;
        var _ = h.match(/([+-]|\d\d)/g), g = 60 * _[1] + (+_[2] || 0);
        return g === 0 ? 0 : _[0] === "+" ? -g : g;
      }(f);
    }], y = function(f) {
      var h = r[f];
      return h && (h.indexOf ? h : h.s.concat(h.f));
    }, w = function(f, h) {
      var _, g = r.meridiem;
      if (g) {
        for (var S = 1; S <= 24; S += 1)
          if (f.indexOf(g(S, 0, h)) > -1) {
            _ = S > 12;
            break;
          }
      } else
        _ = f === (h ? "pm" : "PM");
      return _;
    }, b = { A: [n, function(f) {
      this.afternoon = w(f, !1);
    }], a: [n, function(f) {
      this.afternoon = w(f, !0);
    }], S: [/\d/, function(f) {
      this.milliseconds = 100 * +f;
    }], SS: [l, function(f) {
      this.milliseconds = 10 * +f;
    }], SSS: [/\d{3}/, function(f) {
      this.milliseconds = +f;
    }], s: [a, c("seconds")], ss: [a, c("seconds")], m: [a, c("minutes")], mm: [a, c("minutes")], H: [a, c("hours")], h: [a, c("hours")], HH: [a, c("hours")], hh: [a, c("hours")], D: [a, c("day")], DD: [l, c("day")], Do: [n, function(f) {
      var h = r.ordinal, _ = f.match(/\d+/);
      if (this.day = _[0], h)
        for (var g = 1; g <= 31; g += 1)
          h(g).replace(/\[|\]/g, "") === f && (this.day = g);
    }], M: [a, c("month")], MM: [l, c("month")], MMM: [n, function(f) {
      var h = y("months"), _ = (y("monthsShort") || h.map(function(g) {
        return g.slice(0, 3);
      })).indexOf(f) + 1;
      if (_ < 1)
        throw new Error();
      this.month = _ % 12 || _;
    }], MMMM: [n, function(f) {
      var h = y("months").indexOf(f) + 1;
      if (h < 1)
        throw new Error();
      this.month = h % 12 || h;
    }], Y: [/[+-]?\d+/, c("year")], YY: [l, function(f) {
      this.year = u(f);
    }], YYYY: [/\d{4}/, c("year")], Z: v, ZZ: v };
    function m(f) {
      var h, _;
      h = f, _ = r && r.formats;
      for (var g = (f = h.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(M, O, A) {
        var q = A && A.toUpperCase();
        return O || _[A] || o[A] || _[q].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(N, U, W) {
          return U || W.slice(1);
        });
      })).match(s), S = g.length, x = 0; x < S; x += 1) {
        var I = g[x], E = b[I], R = E && E[0], D = E && E[1];
        g[x] = D ? { regex: R, parser: D } : I.replace(/^\[|\]$/g, "");
      }
      return function(M) {
        for (var O = {}, A = 0, q = 0; A < S; A += 1) {
          var N = g[A];
          if (typeof N == "string")
            q += N.length;
          else {
            var U = N.regex, W = N.parser, Y = M.slice(q), K = U.exec(Y)[0];
            W.call(O, K), M = M.replace(K, "");
          }
        }
        return function(ce) {
          var J = ce.afternoon;
          if (J !== void 0) {
            var $e = ce.hours;
            J ? $e < 12 && (ce.hours += 12) : $e === 12 && (ce.hours = 0), delete ce.afternoon;
          }
        }(O), O;
      };
    }
    return function(f, h, _) {
      _.p.customParseFormat = !0, f && f.parseTwoDigitYear && (u = f.parseTwoDigitYear);
      var g = h.prototype, S = g.parse;
      g.parse = function(x) {
        var I = x.date, E = x.utc, R = x.args;
        this.$u = E;
        var D = R[1];
        if (typeof D == "string") {
          var M = R[2] === !0, O = R[3] === !0, A = M || O, q = R[2];
          O && (q = R[2]), r = this.$locale(), !M && q && (r = _.Ls[q]), this.$d = function(Y, K, ce) {
            try {
              if (["x", "X"].indexOf(K) > -1)
                return new Date((K === "X" ? 1e3 : 1) * Y);
              var J = m(K)(Y), $e = J.year, Re = J.month, Me = J.day, qe = J.hours, Te = J.minutes, De = J.seconds, Qe = J.milliseconds, Je = J.zone, Pe = new Date(), et = Me || ($e || Re ? 1 : Pe.getDate()), wt = $e || Pe.getFullYear(), Ue = 0;
              $e && !Re || (Ue = Re > 0 ? Re - 1 : Pe.getMonth());
              var _t = qe || 0, ut = Te || 0, $t = De || 0, xt = Qe || 0;
              return Je ? new Date(Date.UTC(wt, Ue, et, _t, ut, $t, xt + 60 * Je.offset * 1e3)) : ce ? new Date(Date.UTC(wt, Ue, et, _t, ut, $t, xt)) : new Date(wt, Ue, et, _t, ut, $t, xt);
            } catch {
              return new Date("");
            }
          }(I, D, E), this.init(), q && q !== !0 && (this.$L = this.locale(q).$L), A && I != this.format(D) && (this.$d = new Date("")), r = {};
        } else if (D instanceof Array)
          for (var N = D.length, U = 1; U <= N; U += 1) {
            R[1] = D[U - 1];
            var W = _.apply(this, R);
            if (W.isValid()) {
              this.$d = W.$d, this.$L = W.$L, this.init();
              break;
            }
            U === N && (this.$d = new Date(""));
          }
        else
          S.call(this, x);
      };
    };
  });
})(Fd);
const Hd = Mo, Nd = ["for"], qd = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Ud = { class: "po-relative po-mt-1" }, Yd = {
  role: "button",
  ref: "comboboxButton"
}, Wd = ["disabled", "id"], Zd = { class: "po-flex po-items-center po-justify-between po-w-full po-px-2 po-pb-1" }, Gd = {
  class: "po-p-2 po-rounded-md hover:po-bg-slate-100 po-cursor-pointer po-transition-colors po-duration-150 po-ease-out po-text-sm po-slate-600 po-select-none",
  role: "button"
}, Kd = /* @__PURE__ */ i("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), Xd = { class: "po-grid po-grid-cols-3 po-p-1" }, Qd = { class: "" }, Jd = ["onClick"], ec = {
  name: "PoMonthYearPicker"
}, V5 = /* @__PURE__ */ T({
  ...ec,
  props: {
    modelValue: { default: null },
    label: { default: "" },
    minDate: { default: ae().subtract(10, "year").format("DD-MM-YYYY") },
    maxDate: { default: ae().add(10, "year").format("DD-MM-YYYY") },
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
    ae.extend(sa), ae.extend(la), ae.extend(Hd), ae.tz.setDefault("Indian/Maldives");
    const s = $(""), l = $(!1), a = $(), n = $(null), r = $(ae().year()), u = $(ae().month()), { uniqueId: c, generateUniqueId: v } = Le(), y = $(o.id), w = $(), b = $({
      viewStartIdx: 0,
      viewEndIdx: 0,
      visibleStartIdx: 0,
      visibleEndIdx: 0
    });
    let m;
    Z(() => {
      if (o.modelValue) {
        const M = ae(`02-${o.modelValue + 1}`, "DD-MM-YYYY");
        s.value = o.modelValue, u.value = M.month() + 1, r.value = M.year();
      }
      o.id === "" && (v(), y.value = c.value), m = Bt(a.value, w.value, {
        placement: "bottom-end",
        strategy: "fixed",
        modifiers: [
          {
            name: "sameWidth",
            enabled: !0,
            fn: ({ state: M }) => {
              M.styles.popper.width = `${M.rects.reference.width}px`;
            },
            phase: "beforeWrite",
            requires: ["computeStyles"]
          }
        ]
      });
    });
    const f = z(() => r.value === ae(o.minDate, "DD-MM-YYYY").year()), h = z(() => r.value === ae(o.maxDate, "DD-MM-YYYY").year()), _ = z(() => {
      if (s.value !== "")
        return ae(`02-${s.value}`, "DD-MM-YYYY").format(
          o.displayFormat
        );
    });
    z(() => {
      const M = ae(o.minDate, "DD-MM-YYYY").year(), O = ae(o.maxDate, "DD-MM-YYYY").year();
      return Array.from(
        { length: O - M + 1 },
        (A, q) => M + q
      );
    });
    const g = z(() => Array.from({ length: 12 }, (M, O) => ({
      number: O + 1,
      year: r.value,
      value: `${ae(`${O + 1}-23-2023`).format("MM")}-${r.value}`,
      name: ae().month(O).format("MMM"),
      disabled: f.value && O + 1 < ae(o.minDate, "DD-MM-YYYY").month() + 1 || h.value && O + 1 > ae(o.maxDate, "DD-MM-YYYY").month() + 1
    })));
    function S(M) {
      return s.value === M.value;
    }
    function x() {
      r.value !== ae(o.maxDate, "DD-MM-YYYY").year() && (r.value = ae(`01-01-${r.value}`, "DD-MM-YYYY").add(1, "year").year());
    }
    function I() {
      r.value !== ae(o.minDate, "DD-MM-YYYY").year() && (r.value = ae(`01-01-${r.value}`, "DD-MM-YYYY").subtract(1, "year").year());
    }
    function E(M) {
      M.disabled || (s.value = M.value, u.value = M.number, r.value = M.year, t("update:modelValue", M.value));
    }
    Et(n, () => {
      l.value = !1;
    }), xe.on("sidebarOpen", (M) => {
      setTimeout(() => {
        m && m.update();
      }, 320);
    }), re(() => {
      m && m.destroy();
    });
    function R(M, O, A, q) {
      b.value.viewStartIdx = M, b.value.viewEndIdx = O, b.value.visibleStartIdx = A, b.value.visibleEndIdx = q;
    }
    function D() {
      m && m.update();
    }
    return (M, O) => (p(), d("div", {
      class: L([{ "lg:po-grid lg:po-grid-cols-2": M.display === "horizontal" }]),
      ref_key: "containerRef",
      ref: n
    }, [
      i("label", {
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700",
        for: y.value
      }, [
        i("span", null, C(M.label), 1),
        M.required ? (p(), d("span", qd, "*")) : k("", !0),
        V(Ne, { info: M.info }, null, 8, ["info"])
      ], 8, Nd),
      i("div", Ud, [
        i("div", Yd, [
          Oe(i("input", {
            type: "text",
            ref_key: "selectBox",
            ref: a,
            readonly: "",
            class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm",
            disabled: M.disabled,
            "onUpdate:modelValue": O[0] || (O[0] = (A) => _.value = A),
            onFocus: O[1] || (O[1] = (A) => l.value = !0),
            id: y.value
          }, null, 40, Wd), [
            [Mt, _.value]
          ]),
          i("span", {
            class: "po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-rounded-r-md po-px-2 focus:po-outline-none",
            role: "button",
            onMousedown: O[2] || (O[2] = te((A) => l.value = !l.value, ["stop"]))
          }, [
            V(P(Zi), {
              class: "po-h-5 po-w-5 po-text-slate-400",
              "aria-hidden": "true"
            })
          ], 32)
        ], 512),
        Oe(i("div", {
          ref_key: "popper",
          ref: w,
          class: "po-absolute po-z-10 po-mt-1 po-w-full po-rounded-md po-max-w-[290px] po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm",
          onResize: D,
          onUpdate: R
        }, [
          i("div", Zd, [
            i("span", {
              class: "po-p-2 po-rounded-md hover:po-bg-slate-100 po-cursor-pointer po-transition-colors po-duration-150 po-ease-out po-select-none",
              role: "button",
              onClick: I
            }, [
              V(P(Bs), { class: "po-w-4 po-stroke-slate-500 po-stroke-2" })
            ]),
            i("span", Gd, C(r.value), 1),
            i("span", {
              class: "po-p-2 po-rounded-md hover:po-bg-slate-100 po-cursor-pointer po-transition-colors po-duration-150 po-ease-out po-select-none",
              role: "button",
              onClick: x
            }, [
              V(P(Es), { class: "po-w-4 po-stroke-slate-500 po-stroke-2" })
            ])
          ]),
          Kd,
          i("div", Xd, [
            (p(!0), d(F, null, G(g.value, (A) => (p(), d("div", Qd, [
              i("span", {
                class: L(["po-flex po-items-center po-justify-center po-py-2 po-px-2 po-group", [{ "po-cursor-pointer": !A.disabled }]]),
                onClick: (q) => E(A)
              }, [
                i("span", {
                  class: L(["po-px-4 po-text-sm po-py-1 po-rounded-full po-text-center po-transition-colors po-duration-150 po-ease-out", [
                    {
                      " po-text-slate-600 group-hover:po-bg-slate-100": !S(A) && !A.disabled
                    },
                    {
                      "po-cursor-default po-select-none po-text-slate-400": A.disabled
                    },
                    {
                      " po-text-white po-bg-mpao-lightblue group-hover:po-bg-purple-600": S(A)
                    }
                  ]])
                }, C(A.name), 3)
              ], 10, Jd)
            ]))), 256))
          ])
        ], 544), [
          [Tt, l.value]
        ])
      ]),
      V(je, { message: M.message }, null, 8, ["message"]),
      V(Ae, { "error-message": M.errorMessage }, null, 8, ["error-message"])
    ], 2));
  }
}), tc = { class: "po-text-sm po-font-medium po-text-slate-700 po-cursor-pointer po-select-none po-flex po-items-center po-space-x-1" }, oc = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, sc = {
  name: "PoToggle"
}, k5 = /* @__PURE__ */ T({
  ...sc,
  props: {
    modelValue: { type: Boolean, default: !1 },
    label: { default: "" },
    required: { type: Boolean, default: !1 },
    info: { default: "" },
    message: { default: null },
    errorMessage: { default: null }
  },
  setup(e) {
    const o = $(e.modelValue);
    return (s, l) => (p(), d("div", null, [
      V(P(Mr), {
        as: "div",
        class: "po-flex po-items-center"
      }, {
        default: B(() => [
          V(P(Tr), {
            modelValue: o.value,
            "onUpdate:modelValue": l[0] || (l[0] = (a) => o.value = a),
            onClick: l[1] || (l[1] = (a) => s.$emit("update:modelValue", !o.value)),
            class: L([
              o.value ? "po-bg-mpao-lightblue" : "po-bg-slate-200",
              "po-relative po-inline-flex po-h-6 po-w-11 po-flex-shrink-0 po-cursor-pointer po-rounded-full po-border-2 po-border-transparent po-transition-colors po-duration-200 po-ease-in-out focus:po-outline-none focus:po-ring-2 focus:po-ring-mpao-lightblue focus:po-ring-offset-2"
            ])
          }, {
            default: B(() => [
              i("span", {
                "aria-hidden": "true",
                class: L([
                  o.value ? "po-translate-x-5" : "po-translate-x-0",
                  "po-pointer-events-none po-inline-block po-h-5 po-w-5 po-transform po-rounded-full po-bg-white po-shadow po-ring-0 po-transition po-duration-200 po-ease-in-out"
                ])
              }, null, 2)
            ]),
            _: 1
          }, 8, ["modelValue", "class"]),
          V(P(Dr), {
            as: "span",
            class: "po-ml-3"
          }, {
            default: B(() => [
              i("span", tc, [
                i("span", null, C(s.label), 1),
                s.required ? (p(), d("span", oc, "*")) : k("", !0),
                V(Ne, { info: s.info }, null, 8, ["info"])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      V(je, { message: s.message }, null, 8, ["message"]),
      V(Ae, { "error-message": s.errorMessage }, null, 8, ["error-message"])
    ]));
  }
}), lc = { class: "po-pt-1 po-space-y-1 po-border-r-2 po-border-slate-200 po-relative" }, ac = ["onClick"], nc = {
  name: "PoSectionMenu"
}, C5 = /* @__PURE__ */ T({
  ...nc,
  props: {
    currPageRoute: { default: "" },
    menuItems: { default: null }
  },
  emits: ["link-click"],
  setup(e, { emit: t }) {
    return (o, s) => (p(), d("ul", lc, [
      (p(!0), d(F, null, G(o.menuItems, (l) => (p(), d("li", null, [
        i("span", {
          onClick: (a) => o.$emit("link-click", l.link),
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
          (p(), H(he(l.icon), { class: "po-w-4 po-h-4 po-stroke-current" })),
          i("span", null, C(l.label), 1)
        ], 10, ac)
      ]))), 256))
    ]));
  }
}), rc = { class: "po-relative po-flex po-items-start" }, ic = { class: "po-flex po-h-5 po-items-center" }, pc = ["name", "id", "checked", "disabled", "aria-describedby"], uc = { class: "po-ml-3 po-text-sm" }, dc = ["for"], cc = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, fc = ["id"], vc = { class: "po-sr-only" }, hc = ["id"], mc = {
  name: "PoCheckbox"
}, S5 = /* @__PURE__ */ T({
  ...mc,
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
      i("div", rc, [
        i("div", ic, [
          i("input", Ie({
            name: `${o.id}-field`,
            id: o.id,
            checked: o.modelValue,
            disabled: o.disabled,
            "aria-describedby": `${o.id}-description`
          }, o.$attrs, {
            onInput: s[0] || (s[0] = (l) => o.$emit("update:modelValue", l.target.checked)),
            type: "checkbox",
            class: ["po-h-4 po-w-4 po-rounded po-border-slate-300 po-text-mpao-lightblue focus:po-ring-mpao-lightblue", [{ "po-bg-slate-200": o.disabled }]]
          }), null, 16, pc)
        ]),
        i("div", uc, [
          i("label", {
            for: o.id,
            class: "po-font-medium po-text-slate-600 po-cursor-pointer po-select-none po-flex po-items-center po-space-x-1"
          }, [
            i("span", null, C(o.label), 1),
            o.required ? (p(), d("span", cc, "*")) : k("", !0)
          ], 8, dc),
          o.message ? (p(), d("span", {
            key: 0,
            id: `${o.id}-description`,
            class: "po-text-slate-500 po-cursor-default"
          }, [
            i("span", vc, C(o.label), 1),
            ee(" " + C(o.message), 1)
          ], 8, fc)) : k("", !0)
        ])
      ]),
      o.errorMessage !== null ? (p(), d("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${o.id}-error`
      }, C(o.errorMessage), 9, hc)) : k("", !0)
    ]));
  }
});
function bc(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    i("path", { d: "M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" }),
    i("path", { d: "M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" })
  ]);
}
function gc(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    i("path", { d: "M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" })
  ]);
}
function yc(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    i("path", {
      "fill-rule": "evenodd",
      d: "M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z",
      "clip-rule": "evenodd"
    })
  ]);
}
const wc = /* @__PURE__ */ i("div", { class: "po-pb-5 po-max-w-xl" }, [
  /* @__PURE__ */ i("span", { class: "po-text-sm po-text-slate-600" }, "We're always working to improve our app, and we're excited to share the latest changes with you. We hope you enjoy these new features and improvements")
], -1), _c = { class: "po-flex po-space-x-2" }, $c = ["onClick"], xc = { class: "po-text-sm po-font-semibold po-slate-800" }, Vc = { class: "po-text-sm po-font-semibold po-pl-1 po-text-mpao-lightblue" }, kc = { class: "-po-mb-5 -po-mx-5 po-p-5 po-pb-10 po-border-t po-border-slate-300 po-bg-slate-50" }, Cc = { key: 0 }, Sc = { class: "po-space-y-2" }, Pc = { class: "po-pb-4" }, Oc = { class: "po-flex po-items-center po-space-x-2" }, Lc = { class: "po-shrink-0" }, Mc = { class: "po-shrink-0 po-text-xs po-flex po-items-center po-space-x-1 po-text-slate-600" }, Tc = /* @__PURE__ */ i("span", { class: "po-shrink-0" }, "Updated on", -1), Dc = { class: "po-font-medium" }, Ic = /* @__PURE__ */ i("span", { class: "po-shrink-0" }, "Version", -1), zc = { class: "po-font-semibold po-shrink-0 po-text-xs po-px-1 po-rounded-xl po-bg-white" }, Bc = ["innerHTML"], Ec = {
  key: 0,
  class: "po-bg-white po-border po-border-slate-200 po-rounded-md po-px-4 po-py-3 po-block po-text-sm po-text-center po-text-mpao-lightblue hover:po-text-purple-600 po-cursor-pointer"
}, Ac = /* @__PURE__ */ T({
  __name: "ChangeLogModel",
  props: {
    changelog: { default: null },
    showBtn: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = $(!1), o = $(0);
    return (s, l) => (p(), d(F, null, [
      s.showBtn ? (p(), d("a", {
        key: 0,
        href: "#",
        onClick: l[0] || (l[0] = te((a) => t.value = !0, ["prevent"])),
        class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
      }, "Change logs")) : k("", !0),
      V(Ft, {
        show: t.value,
        onModalClosed: l[1] || (l[1] = (a) => t.value = !1),
        "modal-title": "Change Log",
        "modal-width": "sm:po-max-w-4xl",
        id: "change-log-modal"
      }, {
        content: B(() => [
          i("div", null, [
            wc,
            i("div", _c, [
              (p(!0), d(F, null, G(s.changelog, (a, n) => (p(), d("span", {
                class: L(["po-flex po-items-center po-space-x-1 po-px-4 po-py-3 po-rounded-t-xl po-cursor-pointer po-border-b", [
                  { "po-border-mpao-lightblue": o.value === n },
                  { "po-border-white": o.value !== n }
                ]]),
                onClick: (r) => o.value = n
              }, [
                i("span", xc, C(a.label) + " Version", 1),
                i("span", Vc, C(a.latest_version), 1)
              ], 10, $c))), 256))
            ]),
            i("div", kc, [
              (p(!0), d(F, null, G(s.changelog, (a, n) => (p(), d("div", null, [
                o.value === n ? (p(), d("div", Cc, [
                  i("div", Sc, [
                    (p(!0), d(F, null, G(a.version_history, (r) => (p(), d("div", Pc, [
                      i("span", Oc, [
                        i("span", Lc, [
                          V(P(Yi), { class: "po-w-5 po-fill-sky-500" })
                        ]),
                        i("span", Mc, [
                          Tc,
                          V(P(Wi), { class: "po-w-4 po-fill-current" }),
                          i("span", Dc, C(r.date) + ".", 1),
                          Ic
                        ]),
                        i("span", zc, C(r.version), 1)
                      ]),
                      i("div", {
                        class: "po-mt-2 po-ml-2 po-prose-sm po-prose-slate prose-p:po-text-slate-600 prose-ul:po-text-slate-600 prose-ul:po-list-disc prose-p:po-mb-2 prose-ul:po-mt-1 prose-p:po-mt-2 po-rounded-xl po-p-3 po-bg-white",
                        innerHTML: r.note
                      }, null, 8, Bc)
                    ]))), 256)),
                    a.hasMore ? (p(), d("span", Ec, "More")) : k("", !0)
                  ])
                ])) : k("", !0)
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
}, jc = {}, Rc = {
  class: "po-h-8",
  src: "https://pension.gov.mv/asset/image/en-ccc-2020-issa.png",
  alt: "issa Certificate"
};
function Fc(e, t) {
  return p(), d("img", Rc);
}
const Hc = /* @__PURE__ */ Ht(jc, [["render", Fc]]), Nc = {}, qc = {
  class: "po-h-8",
  src: "https://pension.gov.mv/asset/image/iso_logo.png",
  alt: "ISO 27001 Certificate"
};
function Uc(e, t) {
  return p(), d("img", qc);
}
const Yc = /* @__PURE__ */ Ht(Nc, [["render", Uc]]), Wc = { class: "-po-m-5" }, Zc = ["src", "alt"], Ds = /* @__PURE__ */ T({
  __name: "CertificateModel",
  props: {
    src: { default: "" },
    title: { default: "" },
    logo: { default: null }
  },
  setup(e) {
    const t = $(!1);
    return (o, s) => (p(), d(F, null, [
      (p(), H(he(o.logo), {
        onClick: s[0] || (s[0] = te((l) => t.value = !0, ["prevent"])),
        class: "po-cursor-pointer",
        role: "button"
      })),
      V(Ft, {
        show: t.value,
        onModalClosed: s[1] || (s[1] = (l) => t.value = !1),
        "modal-title": o.title,
        "modal-width": "sm:po-max-w-4xl",
        id: "change-log-modal"
      }, {
        content: B(() => [
          i("div", Wc, [
            i("img", {
              src: o.src,
              alt: o.title
            }, null, 8, Zc)
          ])
        ]),
        _: 1
      }, 8, ["show", "modal-title"])
    ], 64));
  }
}), Gc = {}, Kc = { class: "po-prose-sm po-prose-slate prose-p:po-text-slate-600 prose-h3:po-text-slate-700 prose-h3:po-text-base prose-h3:po-font-medium po-p-5 po-opacity-8" };
function Xc(e, t) {
  return p(), d("div", Kc, [
    X(e.$slots, "default")
  ]);
}
const jl = /* @__PURE__ */ Ht(Gc, [["render", Xc]]), Qc = /* @__PURE__ */ i("h2", { class: "po-text-red-500" }, "Sample Terms and Conditions", -1), Jc = /* @__PURE__ */ i("h3", null, "1. Acceptance of Terms", -1), e1 = /* @__PURE__ */ i("p", null, " By accessing and using this web app, you agree to be bound by these terms and conditions. ", -1), t1 = /* @__PURE__ */ i("h3", null, "2. User Responsibilities", -1), o1 = /* @__PURE__ */ i("p", null, " Users are responsible for maintaining the confidentiality of their account information and complying with all applicable laws. ", -1), s1 = /* @__PURE__ */ i("h3", null, "3. Privacy Policy", -1), l1 = /* @__PURE__ */ i("p", null, [
  /* @__PURE__ */ ee(" Our privacy policy outlines how we collect, use, and protect your personal information. Please review our "),
  /* @__PURE__ */ i("a", { href: "privacy.html" }, "Privacy Policy"),
  /* @__PURE__ */ ee(" for more details. ")
], -1), a1 = /* @__PURE__ */ i("h3", null, "4. Intellectual Property", -1), n1 = /* @__PURE__ */ i("p", null, " All content and materials provided on this web app are protected by intellectual property laws. Unauthorized use is prohibited. ", -1), r1 = /* @__PURE__ */ i("h3", null, "5. Limitation of Liability", -1), i1 = /* @__PURE__ */ i("p", null, " We are not liable for any damages or losses incurred from the use of this web app, including but not limited to, errors, omissions, or interruptions. ", -1), p1 = /* @__PURE__ */ i("h3", null, "6. Modification of Terms", -1), u1 = /* @__PURE__ */ i("p", null, " We reserve the right to modify or update these terms and conditions at any time without prior notice. It is your responsibility to review them periodically. ", -1), d1 = /* @__PURE__ */ i("h3", null, "7. Governing Law", -1), c1 = /* @__PURE__ */ i("p", null, " These terms and conditions shall be governed by and construed in accordance with the laws of your jurisdiction. ", -1), f1 = /* @__PURE__ */ i("h3", null, "8. Contact Us", -1), v1 = /* @__PURE__ */ i("p", null, [
  /* @__PURE__ */ ee(" If you have any questions or concerns about these terms and conditions, please contact us at "),
  /* @__PURE__ */ i("a", { href: "mailto:info@pension.gov.mv" }, "info@pension.gov.mv"),
  /* @__PURE__ */ ee(". ")
], -1), h1 = /* @__PURE__ */ T({
  __name: "ToCModel",
  setup(e) {
    const t = $(!1);
    return (o, s) => (p(), d(F, null, [
      i("a", {
        href: "#",
        onClick: s[0] || (s[0] = te((l) => t.value = !0, ["prevent"])),
        role: "button",
        class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
      }, "Terms & Conditions"),
      V(Ft, {
        show: t.value,
        onModalClosed: s[1] || (s[1] = (l) => t.value = !1),
        "modal-title": "Terms & Conditions",
        "modal-width": "sm:po-max-w-3xl",
        id: "change-log-modal"
      }, {
        content: B(() => [
          V(jl, null, {
            default: B(() => [
              Qc,
              Jc,
              e1,
              t1,
              o1,
              s1,
              l1,
              a1,
              n1,
              r1,
              i1,
              p1,
              u1,
              d1,
              c1,
              f1,
              v1
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), m1 = /* @__PURE__ */ i("h2", { class: "po-text-red-500" }, "Sample Privacy Policy", -1), b1 = /* @__PURE__ */ i("h3", null, "1. Information Collection", -1), g1 = /* @__PURE__ */ i("p", null, " We may collect personal information such as name, contact details, and pension-related data necessary for providing our services. ", -1), y1 = /* @__PURE__ */ i("h3", null, "2. Use of Information", -1), w1 = /* @__PURE__ */ i("p", null, " The collected information is used for the purpose of administering pensions, processing applications, and communicating with users. ", -1), _1 = /* @__PURE__ */ i("h3", null, "3. Data Security", -1), $1 = /* @__PURE__ */ i("p", null, " We implement appropriate security measures to protect personal information from unauthorized access, alteration, or disclosure. ", -1), x1 = /* @__PURE__ */ i("h3", null, "4. Third-Party Disclosure", -1), V1 = /* @__PURE__ */ i("p", null, " We may share personal information with trusted third parties only to the extent necessary for pension administration purposes. ", -1), k1 = /* @__PURE__ */ i("h3", null, "5. Cookies and Tracking", -1), C1 = /* @__PURE__ */ i("p", null, " We use cookies and similar technologies to enhance user experience and collect non-personal information about website usage. ", -1), S1 = /* @__PURE__ */ i("h3", null, "6. Data Retention", -1), P1 = /* @__PURE__ */ i("p", null, " We retain personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law. ", -1), O1 = /* @__PURE__ */ i("h3", null, "7. User Rights", -1), L1 = /* @__PURE__ */ i("p", null, " Users have the right to access, update, and delete their personal information. Please contact us to exercise these rights. ", -1), M1 = /* @__PURE__ */ i("h3", null, "8. Children's Privacy", -1), T1 = /* @__PURE__ */ i("p", null, " This web app is not intended for children under the age of 13. We do not knowingly collect or store personal information from children. ", -1), D1 = /* @__PURE__ */ i("h3", null, "9. Changes to Privacy Policy", -1), I1 = /* @__PURE__ */ i("p", null, " We reserve the right to modify or update this privacy policy at any time. Users will be notified of any significant changes. ", -1), z1 = /* @__PURE__ */ i("h3", null, "8. Contact Us", -1), B1 = /* @__PURE__ */ i("p", null, [
  /* @__PURE__ */ ee(" If you have any questions or concerns about our privacy policy, please contact us at "),
  /* @__PURE__ */ i("a", { href: "mailto:info@pension.gov.mv" }, "info@pension.gov.mv"),
  /* @__PURE__ */ ee(". ")
], -1), E1 = /* @__PURE__ */ T({
  __name: "PrivacyPolicyModel",
  setup(e) {
    const t = $(!1);
    return (o, s) => (p(), d(F, null, [
      i("a", {
        href: "#",
        onClick: s[0] || (s[0] = te((l) => t.value = !0, ["prevent"])),
        role: "button",
        class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
      }, "Privacy Policy"),
      V(Ft, {
        show: t.value,
        onModalClosed: s[1] || (s[1] = (l) => t.value = !1),
        "modal-title": "Privacy Policy",
        "modal-width": "sm:po-max-w-3xl",
        id: "change-log-modal"
      }, {
        content: B(() => [
          V(jl, null, {
            default: B(() => [
              m1,
              b1,
              g1,
              y1,
              w1,
              _1,
              $1,
              x1,
              V1,
              k1,
              C1,
              S1,
              P1,
              O1,
              L1,
              M1,
              T1,
              D1,
              I1,
              z1,
              B1
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), A1 = { class: "po-grid po-gap-5 po-grid-cols-1 lg:po-grid-cols-2 po-px-6 lg:po-px-8 po-mt-10 po-pb-10" }, j1 = { class: "sm:po-flex po-items-start sm:po-space-x-5" }, R1 = /* @__PURE__ */ i("svg", {
  class: "po-h-10",
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  "fill-rule": "evenodd",
  "stroke-linejoin": "round",
  "stroke-miterlimit": "2",
  "clip-rule": "evenodd",
  viewBox: "0 0 343 287"
}, [
  /* @__PURE__ */ i("path", {
    fill: "#203057",
    d: "M61.305 92.088a16.74 16.74 0 0 1-2.583.542 12.086 12.086 0 0 0-4.604 1.425L108.41 0h21.308c-22.054 9.263-22.871 36.388-23.021 46.463-.237.008-.467.017-.708.042-5.509.462-13.509 3.245-20.296 13.904-2.267 3.512-4.392 7.341-6.263 10.721l-.125.204c-6.429 11.579-10.725 18.766-18 20.754ZM261.87 71.267c0-.013-.079-.142-.092-.159-1.987-3.575-4.045-7.279-6.225-10.683-6.82-10.675-14.795-13.458-20.295-13.908a6.116 6.116 0 0 0-.755-.063c-.358-12.162-2.37-21.821-6.12-29.492C224.449 8.912 218.67 3.233 211.17 0h21.104l54.109 93.708a12.134 12.134 0 0 0-3.884-1.05c-.875-.104-1.7-.3-2.408-.487-.063-.029-.167-.067-.167-.067-7.271-1.979-11.575-9.175-18.054-20.837ZM112.871 197.965c3.809 7.767 9.363 13.342 16.538 16.588h-21L54.384 120.99c1.371.692 2.837 1.146 4.337 1.292 1.034.112 1.979.362 2.592.529 7.267 1.971 11.575 9.179 18 20.754 2.412 4.329 4.275 7.65 6.379 10.938 6.8 10.65 14.783 13.445 20.288 13.9.266.02.512.029.754.029.358 12.166 2.362 21.829 6.137 29.533Zm149.045-54.381c6.442-11.571 10.738-18.767 18.009-20.759.745-.2 1.641-.425 2.575-.529 1.25-.121 2.45-.446 3.608-.933l-53.829 93.204h-20.063c21.375-9.537 22.175-36.212 22.313-46.104.229-.013.462-.021.716-.042 5.513-.462 13.505-3.246 20.309-13.908 2.304-3.625 4.558-7.667 6.362-10.929Zm-82.546 28.807v.208c.037 12.463 5.654 19.896 15.033 19.896 13.329 0 17.767-4.317 17.767-29.808V94.903l17.433-13.47v81.254c0 .241-.108 3.041-.217 5.746l-.158 3.7c-.071 1.975-.142 3.687-.167 4.458a1.689 1.689 0 0 0-.079.383c0 .104.021.196.033.3-2.454 24.05-13.783 35.746-34.612 35.746-8.758 0-16.329-3.292-21.925-9.542a2.922 2.922 0 0 0-2.15-.945c-.825 0-1.613.358-2.15.975-5.567 6.308-12.746 9.512-21.35 9.512-22.246 0-34.05-14.842-35.104-44.121 7.871-1.337 13.466-6.258 15.471-8.325l1.87-1.433v3.546c0 25.341 5.725 29.808 17.763 29.808 13.312 0 14.921-17.183 15.117-20.629.3-5.413 4.116-9.663 8.691-9.663h.325c4.709.2 8.409 4.68 8.409 10.188Zm-68.52-37.313V42.615c0-.104.088-.579.284-1.396 1.737-27.029 13.429-40.171 35.696-40.171 8.962 0 16.75 3.405 22.512 9.821.754.871 2.3.892 3.121-.012 5.712-6.509 13.1-9.809 21.937-9.809 22.938 0 35.021 15.355 35.93 45.638-7.934 1.075-13.717 6.146-15.817 8.275l-3.125 2.408v-5.171c0-24.833-5.25-29.012-16.988-29.012-12.616 0-14.129 16.55-14.325 19.875-.304 5.937-4.437 10.417-9.608 10.417h-.221c-5.137-.23-9.162-5.055-9.162-11.009v-.183c-.034-11.971-5.371-19.1-14.254-19.1-12.946 0-16.963 4.004-16.963 29.012v68.192l-19.017 14.688Z"
  }),
  /* @__PURE__ */ i("path", {
    fill: "#ec6e25",
    d: "m165.883 91.539-15.875 12.271-15.171-11.733V67.535l31.046 24.004Zm9.441 31.844 15.884-12.288 15.195 11.763-.004 24.529-31.075-24.004Zm-64.934 39.882c-.042.014-.031.008-.014.001l-.286.016c-1.067.113-2 .171-2.784.175h-.075c-.241-.017-.462-.004-.858-.004a24.05 24.05 0 0 1-.829-.104c-.038-.013-.075-.013-.117-.013 0 0-.012 0-.054-.016 0 0-.046-.009-.088-.009-4.07-.633-10.07-3.125-15.408-11.5-1.967-3.083-3.737-6.225-6.212-10.666-5.534-9.946-9.913-17.255-16.088-21.005-.092-.045-2.221-1.379-5.375-2.245a23.775 23.775 0 0 0-1.771-.392l-1.858-.292c-.121 0-.233-.016-.554-.15-.684-.196-1.275-.433-1.713-.679a1.038 1.038 0 0 0-.25-.146l-.133-.091c-.117-.075-.233-.138-.346-.234-.208-.141-.404-.296-.604-.45-.008-.029-.042-.062-.042-.062-.571-.488-1.133-1.084-1.508-1.609-.05-.087-.1-.191-.15-.25-.129-.187-.233-.362-.367-.562l-.346-.675c-.054-.104-.116-.217-.225-.458l-.162-.392a4.5 4.5 0 0 1-.121-.308 9.748 9.748 0 0 0-.042-.092.188.188 0 0 0-.033-.1 10.976 10.976 0 0 1-.237-.817 10.23 10.23 0 0 1-.196-.85c-.038-.3-.088-.587-.125-.983a17.836 17.836 0 0 1-.054-.771c.008-.292.037-.587.066-.975.025-.308.075-.604.125-.954.063-.279.117-.546.217-.917.058-.25.129-.475.204-.7.025-.046.042-.121.042-.121.008-.025.016-.058.033-.075.067-.191.133-.366.254-.654l.463-.966.162-.25c.109-.188.225-.367.367-.596.829-1.188 1.829-2.129 3.083-2.834.188-.1.363-.2.579-.295.375-.184.863-.334 1.596-.484l.317-.071c.121-.025.233-.054.337-.054.117-.016.238-.025.438-.071.275-.029.533-.075.783-.129.404-.058 1.117-.2 1.609-.346a.998.998 0 0 0 .291-.062c1.975-.575 5.017-1.796 8.134-4.283 4.77-4.059 8.512-10.446 13.283-19.025 1.946-3.53 3.958-7.171 6.129-10.563 5.446-8.529 11.558-11.029 15.992-11.575l-.009 21.342c-.67.612-1.37 1.483-2.05 2.541-1.933 3.021-3.795 6.392-5.45 9.363l-.15.267c-3.458 6.22-7.383 13.27-12.491 19.187l-2.142 2a1.423 1.423 0 0 0-.129 1.983c.092.088.208.175.208.175l1.946 2.238c.067.062.15.125.242.204.221.246.421.517.641.771l.309.35c.012.042.121.183.137.217 4.659 5.762 8.363 12.42 11.325 17.75l.571 1.033c1.583 2.846 3.229 5.787 4.983 8.529a14.943 14.943 0 0 0 1.667 2.171c.504.429 1.35.967 2.563.967 1.166 0 2.375-.534 3.483-1.488.062-.037.225-.158.258-.187l1.592-1.538 24.154-18.529 8.271-6.479c.083-.063.154-.134.237-.229l71.888-55.605c1.787-1.808 6.662-6.125 13.142-6.958.25 0 .991-.029 1.766-.075l.671-.017c.583-.033 1.1-.054 1.317-.054 4.387.371 10.812 2.684 16.541 11.634 2.184 3.45 4.317 7.27 6.205 10.662 5.458 9.846 9.791 17.096 15.758 20.796.079.087.179.154.258.221 1.663 1.021 3.404 1.787 5.159 2.246.133.041.258.041.295.02.35.084.73.175 1.121.271.054.009.129.042.179.042.013 0 .15.021.159.021.475.087.958.162 1.491.225 4.367.454 7.767 4.712 7.884 9.871-.15 5.179-3.55 9.42-7.896 9.883-.854.096-3.233.417-4.15.654-9.354 3.158-13.879 11.442-18.667 20.229-.529.954-1.046 1.917-1.591 2.896-1.884 3.383-4 7.208-6.2 10.663-5.45 8.512-11.546 11.041-15.988 11.587v-21.337c.658-.584 1.358-1.459 2.054-2.542 1.967-3.092 3.804-6.417 5.425-9.35l.125-.196c3.029-5.454 9.467-15.325 14.596-21.762a1.419 1.419 0 0 0-.05-1.855c-.521-.558-1.146-1.283-1.829-2.07a1.192 1.192 0 0 0-.488-.346 60.342 60.342 0 0 1-3.341-4.304c-.113-.146-.204-.275-.275-.371 0 0-.067-.138-.088-.167-3.329-4.721-6.208-9.908-8.546-14.104l-.15-.279c-1.266-2.284-2.625-4.584-3.895-6.738l-1.463-2.487c-1.104-1.854-2.487-2.813-4.129-2.813-.596 0-1.138.142-1.604.296l-.392.154-20.537 15.563-43.45 33.587-39.988 31.125a1.463 1.463 0 0 0-.683.304l-3.113 2.417s-.146.125-.262.229c-1.692 1.717-6.554 5.909-12.904 6.929Z"
  }),
  /* @__PURE__ */ i("path", {
    fill: "#203057",
    d: "M9.142 250.096c8.762 0 12.862 3.154 12.862 10.838v3.341c0 7.492-4.242 10.98-12.862 10.98H6.646v11.116H0v-36.275h9.142Zm0 18.892c4.708 0 6.262-1.604 6.262-5.042v-2.683c0-3.442-1.129-5.233-6.171-5.233H6.596v12.958h2.546Zm39.011-18.892v5.654h-14.37v9.325h12.25v5.842h-12.25v9.567h15.033v5.937H27.283v-36.325h20.87Zm28.511 36.277h-6.313l-10.65-22.992.567 13.758v9.234h-6.454v-36.23h6.454l10.646 23.888-.704-15.313v-8.575h6.454v36.23Zm17.293-30.764c-3.579 0-5.042 1.129-5.042 4.571 0 4.566 3.63 4.191 9.142 5.041 4.192.654 8.196 2.354 8.196 9.609 0 8.383-3.629 11.92-12.342 11.92-9.046 0-11.921-4.383-11.921-10.225h6.546c.146 2.78 1.371 4.288 5.513 4.288 3.912 0 5.704-1.65 5.704-5.746 0-4.287-5.088-4.287-8.954-4.808-4.096-.517-8.429-2.542-8.429-10.034 0-6.783 4.141-10.316 11.587-10.316 6.55 0 10.883 2.4 11.496 9.654h-6.55c-.188-3.063-1.792-3.954-4.946-3.954Zm17.716-5.465h6.55v36.275h-6.55v-36.275Zm12.631 25.722v-15.358c0-7.68 3.346-10.838 12.108-10.838 8.763 0 12.392 3.158 12.392 10.838v15.358c0 7.492-3.771 10.837-12.392 10.837-8.621 0-12.108-3.345-12.108-10.837Zm18-.329v-14.7c0-3.296-.85-5.417-5.892-5.417-4.712 0-5.608 2.121-5.608 5.417v14.7c0 3.441.896 5.416 5.608 5.416 4.713 0 5.892-1.975 5.892-5.416Zm35.526 10.836h-6.313l-10.65-22.992.567 13.758v9.234h-6.454v-36.23h6.454l10.646 23.888-.704-15.313v-8.575h6.454v36.23Zm17.861-10.507v-15.358c0-7.68 3.346-10.838 12.108-10.838 8.763 0 12.392 3.158 12.392 10.838v15.358c0 7.492-3.771 10.837-12.392 10.837-8.621 0-12.108-3.345-12.108-10.837Zm18-.329v-14.7c0-3.296-.85-5.417-5.892-5.417-4.712 0-5.608 2.121-5.608 5.417v14.7c0 3.441.896 5.416 5.608 5.416 4.713 0 5.892-1.975 5.892-5.416Zm33.925-19.506H232.82v9.046h12.533v5.891H232.82v15.45h-6.454v-36.32h21.25v5.933Zm26.007 0h-14.791v9.046h12.533v5.891h-12.533v15.45h-6.455v-36.32h21.246v5.933Zm4.809-5.887h6.55v36.275h-6.55v-36.275Zm37.133 25.015c0 7.962-3.771 11.308-12.392 11.308-8.62 0-12.108-3.346-12.108-10.837v-14.746c0-7.679 3.346-10.838 12.108-10.838 8.763 0 12.392 3.204 12.392 11.263h-6.5c0-3.534-.85-5.513-5.892-5.513-4.712 0-5.608 1.979-5.608 5.417V275.3c0 3.442.896 5.421 5.608 5.421 4.713 0 5.892-1.979 5.892-5.562h6.5Zm26.243-25.063v5.654h-14.37v9.325h12.25v5.842h-12.25v9.567h15.033v5.937h-21.533v-36.325h20.87Z"
  })
], -1), F1 = { class: "po-mt-5 sm:po-mt-0" }, H1 = /* @__PURE__ */ i("p", { class: "-po-mt-1 po-text-xs po-text-slate-500" }, " 8th Floor, Allied Building , Chaandhanee Magu, Malé, 20156, Maldives ", -1), N1 = { class: "po-mt-1 po-text-xs po-text-slate-500" }, q1 = { class: "po-mt-1 po-text-xs po-text-slate-500 po-flex -po-mb-2 po-flex-wrap" }, U1 = {
  href: "https://www.pension.gov.mv",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, Y1 = /* @__PURE__ */ i("span", null, "www.pension.gov.mv", -1), W1 = {
  href: "mailto:info@pension.gov.mv",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, Z1 = /* @__PURE__ */ i("span", null, "info@pension.gov.mv", -1), G1 = {
  href: "tel:1441",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, K1 = /* @__PURE__ */ i("span", null, "1441", -1), X1 = { class: "po-flex lg:po-items-end po-flex-col" }, Q1 = { class: "-po-mt-1 po-text-xs po-text-slate-500 po-flex -po-mb-2 po-flex-wrap" }, J1 = { class: "po-flex po-space-x-2 po-mt-3 lg:po-justify-end" }, e0 = {
  name: "PoFooter"
}, P5 = /* @__PURE__ */ T({
  ...e0,
  props: {
    changelog: { default: null }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, s) => (p(), d("div", null, [
      i("section", A1, [
        i("div", j1, [
          R1,
          i("div", F1, [
            H1,
            i("p", N1, " © " + C(new Date().getFullYear()) + " Pension Office, All Rights Reserved. ", 1),
            i("p", q1, [
              i("a", U1, [
                V(P(gc), { class: "po-w-3 po-h-3 po-fill-current" }),
                Y1
              ]),
              i("a", W1, [
                V(P(bc), { class: "po-w-3 po-h-3 po-fill-current" }),
                Z1
              ]),
              i("a", G1, [
                V(P(yc), { class: "po-w-3 po-h-3 po-fill-current" }),
                K1
              ])
            ])
          ])
        ]),
        i("div", X1, [
          i("nav", Q1, [
            V(Ac, {
              "show-btn": o.changelog !== null,
              changelog: o.changelog
            }, null, 8, ["show-btn", "changelog"]),
            V(h1),
            V(E1)
          ]),
          i("div", J1, [
            V(Ds, {
              logo: Yc,
              title: "ISO/IEC 27001:2013 Certificate",
              src: ""
            }),
            V(Ds, {
              logo: Hc,
              title: "issa Certificate",
              src: ""
            })
          ])
        ])
      ])
    ]));
  }
}), t0 = { class: "po-text-sm po-text-red-700" }, o0 = {
  key: 0,
  class: "po-text-sm po-text-red-800 po-list-disc po-ml-5 po-mt-2"
}, s0 = {
  key: 1,
  class: "po-flex po-items-start po-space-x-3 po-p-5 po-bg-green-50 po-rounded-md po-mt-5"
}, l0 = { class: "po-text-sm po-text-green-700" }, a0 = {
  name: "PoFormStatusMessage"
}, O5 = /* @__PURE__ */ T({
  ...a0,
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
      V(P(yo), { class: "po-shrink-0 po-w-6 po-stroke-red-600" }),
      i("div", null, [
        i("span", t0, C(t.message), 1),
        t.errorList !== null ? (p(), d("ul", o0, [
          (p(!0), d(F, null, G(t.errorList, (s) => (p(), d("li", null, C(s), 1))), 256))
        ])) : k("", !0)
      ])
    ], 2)) : (p(), d("div", s0, [
      V(P(fa), { class: "po-w-6 po-stroke-green-600" }),
      i("div", null, [
        i("span", l0, C(t.message), 1)
      ])
    ]));
  }
}), n0 = {
  key: 0,
  class: "po-text-lg po-text-red-400 po-font-semibold"
}, r0 = ["id"], i0 = { class: "po-flex po-flex-1" }, p0 = { class: "po-flex po-flex-col" }, u0 = {
  name: "PoRadioInput"
}, L5 = /* @__PURE__ */ T({
  ...u0,
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
    const o = e, s = $();
    s.value = o.modelValue;
    const { uniqueId: l, generateUniqueId: a } = Le(), n = $(o.id);
    return Z(() => {
      o.id === "" && (a(), n.value = l.value);
    }), Io(() => {
      s.value = o.modelValue;
    }), Q(s, () => {
      t("update:modelValue", s.value), t("selected", s.value);
    }), (r, u) => (p(), H(P(Sr), {
      modelValue: s.value,
      "onUpdate:modelValue": u[0] || (u[0] = (c) => s.value = c),
      class: L([{ "lg:po-grid lg:po-grid-cols-2": r.display === "horizontal" }])
    }, {
      default: B(() => [
        V(P(ks), {
          class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700",
          for: n.value
        }, {
          default: B(() => [
            i("span", null, C(r.label), 1),
            r.required ? (p(), d("span", n0, "*")) : k("", !0),
            V(Ne, { info: r.info }, null, 8, ["info"])
          ]),
          _: 1
        }, 8, ["for"]),
        r.options !== null ? (p(), d("div", {
          key: 0,
          class: "po-mt-1 po-flex -po-mb-3 po-flex-wrap",
          id: n.value
        }, [
          (p(!0), d(F, null, G(r.options, (c) => (p(), H(P(Or), {
            as: "template",
            key: c.id,
            value: c.id
          }, {
            default: B(({ checked: v, active: y }) => [
              i("div", {
                class: L([
                  "po-transition-colors po-duration-100 po-ease-out po-mr-3",
                  "",
                  "",
                  "po-mb-3 po-pt-[0.13rem] po-relative po-flex po-cursor-pointer focus:po-outline-none"
                ])
              }, [
                i("span", {
                  class: L(["po-w-5 po-h-5 po-rounded-full po-border po-mr-2 po-flex po-items-center po-justify-center", [
                    "",
                    v ? "po-border-mpao-lightblue" : "po-border-slate-400"
                  ]])
                }, [
                  i("span", {
                    class: L(["po-w-3 po-h-3 po-rounded-full", [
                      "",
                      v ? "po-bg-mpao-lightblue" : "po-bg-transparent"
                    ]])
                  }, null, 2)
                ], 2),
                i("span", i0, [
                  i("span", p0, [
                    V(P(ks), {
                      as: "span",
                      class: "po-block po-text-sm po-font-medium po-text-gray-900"
                    }, {
                      default: B(() => [
                        ee(C(c.title), 1)
                      ]),
                      _: 2
                    }, 1024),
                    c.description ? (p(), H(P(Lr), {
                      key: 0,
                      as: "span",
                      class: "po-mt-1 po-flex po-items-center po-text-sm po-text-gray-500"
                    }, {
                      default: B(() => [
                        ee(C(c.description), 1)
                      ]),
                      _: 2
                    }, 1024)) : k("", !0)
                  ])
                ])
              ], 2)
            ]),
            _: 2
          }, 1032, ["value"]))), 128))
        ], 8, r0)) : k("", !0),
        i("div", null, [
          V(je, { message: r.message }, null, 8, ["message"]),
          V(Ae, { "error-message": r.errorMessage }, null, 8, ["error-message"])
        ])
      ]),
      _: 1
    }, 8, ["modelValue", "class"]));
  }
}), d0 = { class: "po-bg-white po-relative po-group po-rounded-xl po-border po-border-slate-200 focus-within:po-ring-2 focus-within:po-ring-inset focus-within:po-ring-indigo-500" }, c0 = { class: "po-block po-p-4 po-transition-colors po-duration-75 po-ease-linear" }, f0 = { class: "po-flex po-items-start po-space-x-2" }, v0 = { class: "po-flex po-items-start po-space-x-1" }, h0 = { class: "po-block po-text-2xl po-font-light po-text-slate-600" }, m0 = {
  key: 0,
  class: "po-text-sm po-text-green-500 po-font-medium po-pt-1"
}, b0 = { class: "po-text-sm po-tracking-wide po-text-slate-500" }, g0 = {
  name: "PoStatsBlock"
}, M5 = /* @__PURE__ */ T({
  ...g0,
  props: {
    items: { default: null },
    numberOfCols: { default: "po-gap-5 po-grid-cols-1 lg:po-grid-cols-3" }
  },
  setup(e) {
    return (t, o) => (p(), d("div", {
      class: L(["po-grid", t.numberOfCols])
    }, [
      (p(!0), d(F, null, G(t.items, (s) => (p(), d("div", d0, [
        i("span", c0, [
          i("div", f0, [
            i("div", null, [
              i("span", {
                class: L([
                  "po-inline-flex po-p-2 po-rounded-md",
                  s.bgColor,
                  s.iconColor
                ])
              }, [
                (p(), H(he(s.icon), { class: "po-w-4 po-h-4" }))
              ], 2)
            ]),
            i("div", null, [
              i("div", v0, [
                i("span", h0, C(s.value), 1),
                s.diff ? (p(), d("span", m0, C(s.diff), 1)) : k("", !0)
              ]),
              i("h4", b0, C(s.label), 1)
            ])
          ])
        ])
      ]))), 256))
    ], 2));
  }
}), y0 = {
  key: 0,
  class: "po-flex po-space-x-3 po-items-start"
}, w0 = { class: "po-flex po-items-center po-space-x-2" }, _0 = ["datetime"], $0 = { class: "po-text-sm po-font-medium po-text-slate-600" }, x0 = ["datetime"], V0 = { class: "flex" }, k0 = { class: "po-flex po-pt-3 po-flex-wrap po-max-w-sm" }, C0 = ["onClick"], S0 = {
  key: 1,
  class: "po-w-full po-text-center"
}, P0 = { class: "po-inline-block po-text-sm po-italic po-text-slate-500" }, O0 = /* @__PURE__ */ i("span", { class: "po-text-lg po-text-slate-300 po-px-3 po-inline-block" }, "—", -1), L0 = ["datetime"], M0 = {
  name: "PoChatLogItem"
}, T5 = /* @__PURE__ */ T({
  ...M0,
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
      t.item.type !== "message" ? (p(), d("div", y0, [
        t.item.type !== "first" && t.item.avatar !== "" ? (p(), d("div", {
          key: 0,
          class: "po-shrink-0 po-w-8 po-h-8 po-rounded-full po-p-1 po-bg-contain po-bg-slate-100",
          style: ft({ "background-image": `url(${t.item.avatar})` })
        }, null, 4)) : k("", !0),
        i("div", {
          class: L([
            { "po-pt-1": t.item.type !== "first" },
            {
              "po-flex po-justify-end po-items-end po-flex-col": t.item.type === "first"
            }
          ])
        }, [
          i("span", w0, [
            t.item.type === "first" ? (p(), d("time", {
              key: 0,
              datetime: t.item.time,
              class: "po-text-xs po-text-slate-400"
            }, C(t.item.time_human), 9, _0)) : k("", !0),
            i("span", $0, C(t.item.name), 1),
            t.item.type === "second" ? (p(), d("time", {
              key: 1,
              datetime: t.item.time,
              class: "po-text-xs po-text-slate-400"
            }, C(t.item.time_human), 9, x0)) : k("", !0)
          ]),
          i("div", {
            class: L([
              "po-mt-2 po-space-y-1",
              {
                "po-flex po-justify-end po-items-end po-flex-col": t.item.type === "first"
              }
            ])
          }, [
            X(t.$slots, "message", {}, () => [
              (p(!0), d(F, null, G(t.item.message, (s) => (p(), d("div", V0, [
                i("p", {
                  class: L([
                    "po-text-sm po-rounded-xl po-px-4 po-py-2",
                    {
                      "po-bg-slate-100 po-text-slate-600": t.item.type !== "first"
                    },
                    {
                      "po-bg-mpao-lightblue po-text-sky-50": t.item.type === "first"
                    }
                  ])
                }, C(s), 3)
              ]))), 256))
            ]),
            i("div", k0, [
              (p(!0), d(F, null, G(t.item.actions, (s) => (p(), d("button", {
                onClick: (l) => t.$emit("button-click", s.label),
                class: "po-appearance-none po-border po-border-mpao-lightblue po-bg-white hover:po-bg-mpao-lightblue po-px-3 po-py-1 po-mb-2 po-mr-2 po-rounded-lg po-text-slate-500 hover:po-text-sky-100 po-transition-colors po-duration-150 po-ease-in-out po-text-sm po-ring-0 po-outline-none"
              }, C(s.label), 9, C0))), 256))
            ])
          ], 2)
        ], 2)
      ])) : k("", !0),
      t.item.type === "message" ? (p(), d("div", S0, [
        (p(!0), d(F, null, G(t.item.message, (s) => (p(), d("p", P0, [
          ee(C(s) + " ", 1),
          O0,
          i("time", {
            datetime: t.item.time,
            class: "po-text-xs po-text-slate-400 po-inline-block"
          }, C(t.item.time_human), 9, L0)
        ]))), 256))
      ])) : k("", !0)
    ], 2));
  }
}), T0 = {
  key: 0,
  class: "po-pointer-events-auto po-w-full po-max-w-sm po-overflow-hidden po-rounded-lg po-bg-mpao-lightblue po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5"
}, D0 = { class: "po-p-4" }, I0 = { class: "po-flex po-items-start" }, z0 = { class: "po-flex-shrink-0" }, B0 = { class: "po-ml-3 po-w-0 po-flex-1 po-pt-0.5" }, E0 = { class: "po-text-sm po-font-medium po-text-sky-100" }, A0 = { class: "po-mt-1 po-text-sm po-text-sky-300" }, j0 = { class: "po-mt-3 po-flex po-space-x-4" }, R0 = { class: "po-ml-4 po-flex po-flex-shrink-0" }, F0 = /* @__PURE__ */ i("span", { class: "po-sr-only" }, "Close", -1), H0 = {
  name: "PoNotification"
}, D5 = /* @__PURE__ */ T({
  ...H0,
  props: {
    show: { type: Boolean, default: !1 },
    label: { default: "" },
    text: { default: "" },
    buttonLabel: { default: "Ok" }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    const o = e, { show: s } = Se(o), l = $(!1);
    Q(s, () => {
      l.value = !1, setTimeout(() => {
        l.value = !0;
      }, 100);
    });
    const a = $(!1);
    return Q(l, () => {
      a.value = !1, setTimeout(() => {
        a.value = !0;
      }, 200);
    }), (n, r) => l.value ? (p(), H(Dt, {
      key: 0,
      to: "#po-notifications-alert"
    }, [
      V(Ze, {
        "enter-active-class": "po-transform po-ease-out po-duration-300 po-transition",
        "enter-from-class": "po-translate-y-2 po-opacity-0 sm:po-translate-y-0 sm:po-translate-x-2",
        "enter-to-class": "po-translate-y-0 po-opacity-100 sm:po-translate-x-0",
        "leave-active-class": "po-transition po-ease-in po-duration-100",
        "leave-from-class": "po-opacity-100",
        "leave-to-class": "po-opacity-0"
      }, {
        default: B(() => [
          a.value ? (p(), d("div", T0, [
            i("div", D0, [
              i("div", I0, [
                i("div", z0, [
                  X(n.$slots, "icon")
                ]),
                i("div", B0, [
                  i("p", E0, C(n.label), 1),
                  i("p", A0, C(n.text), 1),
                  i("div", j0, [
                    i("button", {
                      onClick: r[0] || (r[0] = (u) => n.$emit("button-click", n.buttonLabel)),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-100 hover:po-text-sky-200 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, C(n.buttonLabel), 1),
                    i("button", {
                      onClick: r[1] || (r[1] = (u) => l.value = !1),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-300 hover:po-text-sky-500 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, " Dismiss ")
                  ])
                ]),
                i("div", R0, [
                  i("button", {
                    type: "button",
                    onClick: r[2] || (r[2] = (u) => l.value = !1),
                    class: "po-inline-flex po-rounded-md po-bg-mpao-lightblue po-text-sky-500 hover:po-text-sky-300 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                  }, [
                    F0,
                    V(P(Ml), {
                      class: "po-h-5 po-w-5",
                      "aria-hidden": "true"
                    })
                  ])
                ])
              ])
            ])
          ])) : k("", !0)
        ]),
        _: 3
      })
    ])) : k("", !0);
  }
}), N0 = /* @__PURE__ */ i("div", { class: "po-fixed po-inset-0" }, null, -1), q0 = { class: "po-absolute po-inset-0 po-overflow-hidden" }, U0 = { class: "po-pointer-events-none po-fixed po-inset-y-0 po-right-0 po-flex po-max-w-full po-pl-10" }, Y0 = { class: "po-flex po-h-full po-flex-col po-overflow-y-auto po-bg-white po-shadow-xl" }, W0 = { class: "po-bg-slate-50 po-py-6 po-px-4 sm:po-px-6" }, Z0 = { class: "po-flex po-items-center po-justify-between" }, G0 = { class: "po-ml-3 po-flex po-h-7 po-items-center" }, K0 = /* @__PURE__ */ i("span", { class: "po-sr-only" }, "Close panel", -1), X0 = {
  key: 0,
  class: "po-mt-1"
}, Q0 = { class: "po-text-sm po-text-slate-500" }, J0 = {
  key: 0,
  class: "po-bg-slate-50 po-rounded-b-xl po-shrink-0"
}, ef = {
  name: "PoSlideover"
}, I5 = /* @__PURE__ */ T({
  ...ef,
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
    const o = e, { show: s } = Se(o), l = $(!1);
    Q(s, () => {
      l.value = s.value;
    });
    function a() {
      l.value = !1, t("slideover-closed", !0);
    }
    return (n, r) => (p(), H(P(Rt), {
      as: "template",
      show: l.value
    }, {
      default: B(() => [
        V(P(lo), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: a
        }, {
          default: B(() => [
            N0,
            i("div", {
              class: L(["po-fixed po-inset-0 po-overflow-hidden po-bg-black", n.screenOpacity])
            }, [
              i("div", q0, [
                i("div", U0, [
                  V(P(Ke), {
                    as: "template",
                    enter: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "enter-from": "po-translate-x-full",
                    "enter-to": "po-translate-x-0",
                    leave: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "leave-from": "po-translate-x-0",
                    "leave-to": "po-translate-x-full"
                  }, {
                    default: B(() => [
                      V(P(ao), {
                        class: L([n.maxWidth, "po-pointer-events-auto po-w-screen"])
                      }, {
                        default: B(() => [
                          i("div", Y0, [
                            i("div", W0, [
                              i("div", Z0, [
                                V(P(ml), { class: "po-text-lg po-font-medium po-text-slate-600" }, {
                                  default: B(() => [
                                    ee(C(n.label), 1)
                                  ]),
                                  _: 1
                                }),
                                i("div", G0, [
                                  i("button", {
                                    type: "button",
                                    class: "po-rounded-md po-text-slate-500 hover:po-text-mpao-lightblue focus:po-outline-none focus:po-ring-2 focus:po-ring-white",
                                    onClick: a
                                  }, [
                                    K0,
                                    V(P(Qt), {
                                      class: "po-h-6 po-w-6",
                                      "aria-hidden": "true"
                                    })
                                  ])
                                ])
                              ]),
                              n.description ? (p(), d("div", X0, [
                                i("p", Q0, C(n.description), 1)
                              ])) : k("", !0)
                            ]),
                            i("div", {
                              class: L([n.bgColor, "po-relative po-grow po-pt-6 po-px-4 sm:po-px-6"])
                            }, [
                              X(n.$slots, "content")
                            ], 2),
                            n.$slots.footer ? (p(), d("div", J0, [
                              X(n.$slots, "footer")
                            ])) : k("", !0)
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
}), tf = /* @__PURE__ */ i("div", { class: "po-fixed po-inset-0 po-bg-gray-500 po-bg-opacity-25 po-transition-opacity" }, null, -1), of = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto po-p-4 sm:po-p-6 md:po-p-20" }, sf = { class: "po-relative" }, lf = {
  key: 0,
  class: "po-max-h-96 scroll-py-3 po-overflow-y-auto po-p-3"
}, af = {
  name: "PoCommandPalette"
}, z5 = /* @__PURE__ */ T({
  ...af,
  props: {
    show: { type: Boolean, default: !1 },
    showContent: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, o = $(""), { show: s } = Se(t), l = $(!1);
    Q(s, () => {
      l.value = !1, setTimeout(() => {
        l.value = !0;
      }, 100);
    });
    function a(n) {
      n.ctrlKey && n.key === "b" && (l.value = !0);
    }
    return Z(() => {
      window.addEventListener("keyup", a);
    }), To(() => {
      window.removeEventListener("keyup", a);
    }), (n, r) => (p(), H(P(Rt), {
      show: l.value,
      as: "template",
      onAfterLeave: r[2] || (r[2] = (u) => o.value = ""),
      appear: ""
    }, {
      default: B(() => [
        V(P(lo), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: r[1] || (r[1] = (u) => l.value = !1)
        }, {
          default: B(() => [
            V(P(Ke), {
              as: "template",
              enter: "po-ease-out po-duration-300",
              "enter-from": "po-opacity-0",
              "enter-to": "po-opacity-100",
              leave: "po-ease-in po-duration-200",
              "leave-from": "po-opacity-100",
              "leave-to": "po-opacity-0"
            }, {
              default: B(() => [
                tf
              ]),
              _: 1
            }),
            i("div", of, [
              V(P(Ke), {
                as: "template",
                enter: "po-ease-out po-duration-300",
                "enter-from": "po-opacity-0 po-scale-95",
                "enter-to": "po-opacity-100 po-scale-100",
                leave: "po-ease-in po-duration-200",
                "leave-from": "po-opacity-100 po-scale-100",
                "leave-to": "po-opacity-0 po-scale-95"
              }, {
                default: B(() => [
                  V(P(ao), { class: "po-mx-auto po-max-w-xl po-transform po-divide-y po-divide-gray-100 po-overflow-hidden po-rounded-xl po-bg-white po-shadow-2xl po-ring-1 po-ring-black po-ring-opacity-5 po-transition-all" }, {
                    default: B(() => [
                      i("div", sf, [
                        V(P(Ji), {
                          class: "po-pointer-events-none po-absolute po-top-3.5 po-left-4 po-h-5 po-w-5 po-text-gray-400",
                          "aria-hidden": "true"
                        }),
                        i("input", {
                          type: "text",
                          name: "",
                          class: "po-h-12 po-w-full po-border-0 po-bg-transparent po-pl-11 po-pr-4 po-text-gray-800 po-placeholder-gray-400 focus:po-ring-0 sm:po-text-sm",
                          placeholder: "Search...",
                          onChange: r[0] || (r[0] = (u) => o.value = u.target.value)
                        }, null, 32)
                      ]),
                      n.showContent ? (p(), d("div", lf, [
                        X(n.$slots, "content")
                      ])) : k("", !0)
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
}), nf = /* @__PURE__ */ i("div", { class: "po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity" }, null, -1), rf = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto" }, pf = { class: "po-flex po-min-h-full po-items-start po-justify-center po-p-4 po-text-center sm:po-p-0" }, uf = { class: "po-p-5" }, df = { class: "po-text-center po-space-y-3" }, cf = { key: 1 }, ff = { class: "po-text-sm po-text-gray-600" }, vf = { class: "po-border-t po-border-slate-200 po-flex po-divide-x po-divide-slate-200" }, hf = {
  name: "PoAlert"
}, B5 = /* @__PURE__ */ T({
  ...hf,
  props: {
    cancelBtnLabel: { default: "Cancel" },
    okBtnLabel: { default: "Ok" },
    alertTitle: { default: "" },
    alertDescription: { default: "" },
    show: { type: Boolean, default: !1 }
  },
  emits: ["alert-closed", "button-click", "confirm", "cancel"],
  setup(e, { emit: t }) {
    const o = e, { show: s } = Se(o), l = $(!1);
    Q(s, () => {
      l.value = s.value;
    });
    function a() {
      l.value = !1, t("alert-closed", !0);
    }
    return (n, r) => (p(), H(P(Rt), {
      as: "template",
      show: l.value
    }, {
      default: B(() => [
        V(P(lo), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: a
        }, {
          default: B(() => [
            V(P(Ke), {
              as: "template",
              enter: "po-ease-out po-duration-300",
              "enter-from": "po-opacity-0",
              "enter-to": "po-opacity-100",
              leave: "po-ease-in po-duration-200",
              "leave-from": "po-opacity-100",
              "leave-to": "po-opacity-0"
            }, {
              default: B(() => [
                nf
              ]),
              _: 1
            }),
            i("div", rf, [
              i("div", pf, [
                V(P(Ke), {
                  as: "template",
                  enter: "po-ease-out po-duration-300",
                  "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                  "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                  leave: "po-ease-in po-duration-200",
                  "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                  "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                }, {
                  default: B(() => [
                    V(P(ao), { class: "po-relative po-transform po-overflow-hidden po-rounded-lg po-bg-white po-text-left po-shadow-xl po-transition-all sm:po-my-8 sm:po-w-full sm:po-max-w-sm" }, {
                      default: B(() => [
                        i("div", uf, [
                          i("div", df, [
                            n.alertTitle !== "" ? (p(), H(P(ml), {
                              key: 0,
                              as: "h3",
                              class: "po-text-lg po-font-medium po-leading-6 po-text-gray-900"
                            }, {
                              default: B(() => [
                                ee(C(n.alertTitle), 1)
                              ]),
                              _: 1
                            })) : k("", !0),
                            n.alertDescription !== "" ? (p(), d("div", cf, [
                              i("p", ff, C(n.alertDescription), 1)
                            ])) : k("", !0)
                          ])
                        ]),
                        i("div", vf, [
                          i("button", {
                            onClick: r[0] || (r[0] = (u) => {
                              n.$emit("cancel", !0), a();
                            }),
                            class: "po-text-sm po-bg-white po-text-slate-500 hover:po-bg-slate-50 po-transition-colors po-duration-100 po-ease-out po-font-medium po-py-3 po-px-5 po-w-1/2 focus:po-ring-0"
                          }, C(n.cancelBtnLabel), 1),
                          i("button", {
                            onClick: r[1] || (r[1] = (u) => {
                              n.$emit("confirm", !0), n.$emit("button-click", "ok"), a();
                            }),
                            class: "po-text-sm po-bg-white po-text-mpao-lightblue hover:po-bg-slate-50 po-transition-colors po-duration-100 po-ease-out po-font-medium po-py-3 po-px-5 po-w-1/2 focus:po-ring-0"
                          }, C(n.okBtnLabel), 1)
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
}), mf = {
  key: 0,
  class: "po-col-span-2 po-relative po-mt-5"
}, bf = /* @__PURE__ */ i("span", {
  class: "po-absolute po-top-0 po-left-1 po--ml-px po-h-[calc(100%-7px)] po-w-0.5 po-bg-gray-200",
  "aria-hidden": "true"
}, null, -1), gf = { class: "po-relative po-space-y-5" }, yf = { class: "po-flex po-space-x-2 po-items-start" }, wf = { class: "log-item" }, _f = { key: 0 }, $f = {
  key: 0,
  class: "po-text-slate-500 po-text-xs"
}, xf = {
  key: 1,
  class: "po-text-center po-py-10"
}, Vf = { class: "po-text-sm po-text-slate-500" }, kf = {
  name: "PoLogs"
}, E5 = /* @__PURE__ */ T({
  ...kf,
  props: {
    items: { default: null },
    emptyLabel: { default: "No logs to display." }
  },
  setup(e) {
    return (t, o) => (p(), d("div", null, [
      t.items && t.items.length > 0 ? (p(), d("div", mf, [
        bf,
        i("div", gf, [
          (p(!0), d(F, null, G(t.items, (s, l) => (p(), d("div", yf, [
            i("p", {
              class: L([
                "po-rounded-full po-w-2 po-h-2 border-1 po-border-white po-shrink-0",
                { "po-bg-orange-400": l !== t.items.length - 1 },
                ,
                { "po-bg-slate-300": l == t.items.length - 1 }
              ])
            }, null, 2),
            i("div", wf, [
              i("span", null, [
                ee(C(s.label) + " on " + C(s.date) + " " + C(s.by && s.by !== "" ? "by" : "") + " ", 1),
                s.by && s.by !== "" ? (p(), d("span", _f, C(s.by), 1)) : k("", !0)
              ]),
              s.description && s.description !== "" ? (p(), d("blockquote", $f, ' "' + C(s.description) + '" ', 1)) : k("", !0)
            ])
          ]))), 256))
        ])
      ])) : (p(), d("div", xf, [
        i("span", Vf, C(t.emptyLabel), 1)
      ]))
    ]));
  }
}), Cf = {
  name: "PoMain"
}, A5 = /* @__PURE__ */ T({
  ...Cf,
  setup(e) {
    const t = $(!0);
    return xe.on("sidebarOpen", (o) => {
      typeof o == "boolean" && (t.value = o);
    }), (o, s) => (p(), d("main", {
      class: L(["po-min-h-screen po-overflow-y-auto po-transition-all po-duration-300 po-ease-in-out po-pt-[92px] po-flex po-flex-col po-w-full", [
        { "lg:po-pl-[250px]": t.value },
        { "lg:po-pl-[58px]": !t.value }
      ]]),
      id: "shell-content-root"
    }, [
      X(o.$slots, "default")
    ], 2));
  }
}), Sf = {
  key: 0,
  role: "list",
  class: "po-divide-y po-divide-gray-200 po-rounded-md po-border po-border-gray-200"
}, Pf = { class: "po-flex po-items-center po-justify-between po-py-3 po-pl-3 po-pr-4 po-text-sm" }, Of = { class: "po-flex po-w-0 po-flex-1 po-items-center" }, Lf = { class: "po-ml-2 po-w-0 po-flex-1 po-truncate" }, Mf = { class: "po-ml-4 po-flex-shrink-0 po-space-x-4" }, Tf = ["onClick"], Df = ["onClick"], If = {
  key: 1,
  class: "po-py-10"
}, zf = { class: "po-text-sm po-text-slate-500" }, Bf = {
  name: "PoDownloadFileList"
}, j5 = /* @__PURE__ */ T({
  ...Bf,
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
      o.files && o.files.length > 0 ? (p(), d("ul", Sf, [
        (p(!0), d(F, null, G(o.files, (l) => (p(), d("li", Pf, [
          i("div", Of, [
            V(P(js), {
              class: "po-h-5 po-w-5 po-flex-shrink-0 po-text-gray-400",
              "aria-hidden": "true"
            }),
            i("span", Lf, C(l.label), 1)
          ]),
          i("div", Mf, [
            i("a", {
              href: "#",
              onClick: te((a) => o.$emit("button-click", l), ["prevent"]),
              class: "po-font-medium po-text-mpao-lightblue hover:po-text-indigo-500"
            }, C(o.linkLabel), 9, Tf),
            o.showViewBtn ? (p(), d("a", {
              key: 0,
              href: "#",
              onClick: te((a) => o.$emit("view-click", l), ["prevent"]),
              class: "po-font-medium po-text-mpao-lightblue hover:po-text-indigo-500"
            }, C(o.viewBtnLabel), 9, Df)) : k("", !0)
          ])
        ]))), 256))
      ])) : (p(), d("div", If, [
        i("span", zf, C(o.emptyLabel), 1)
      ]))
    ]));
  }
}), Ef = { class: "shell-content--area po-px-3 lg:po-px-5 po-pb-10 po-space-y-5 po-grow po-max-w-[1500px]" }, Af = {
  name: "PoContentArea"
}, R5 = /* @__PURE__ */ T({
  ...Af,
  setup(e) {
    const t = $(!0);
    return xe.on("sidebarOpen", (o) => {
      typeof o == "boolean" && (t.value = o);
    }), (o, s) => (p(), d("section", Ef, [
      X(o.$slots, "default")
    ]));
  }
}), jf = {
  name: "AnimatedLogo"
}, Rf = /* @__PURE__ */ ta('<div><svg class="po-stroke-mpao-blue po-w-16 animated-logo" viewBox="0 0 62 55" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.76292 17.8572L7.7 17.9704V18.0682C6.87397 19.526 6.23618 20.649 5.58241 21.4779C4.93472 22.299 4.30505 22.7864 3.51417 23.0053C3.46261 23.0112 3.41718 23.0206 3.39088 23.026C3.35663 23.0331 3.31491 23.0425 3.27694 23.0511C3.25988 23.055 3.24357 23.0587 3.22903 23.0619C3.1106 23.0882 3.03712 23.1 3 23.1H2.93844L2.89561 23.1107L15.9876 0.600006H19.1308C17.2397 1.92747 16.1556 3.83665 15.5371 5.73245C14.8359 7.88203 14.7198 10.0514 14.7027 11.4258C13.1737 11.6033 11.0729 12.4434 9.38038 15.128C8.77075 16.0431 8.26353 16.9561 7.76713 17.8496L7.76292 17.8572Z"></path><path d="M48.1818 11.3241C48.047 8.39742 47.5389 6.05982 46.5472 4.07639C45.8153 2.61266 44.8203 1.39271 43.5945 0.5H46.8113L59.8583 23.0959C59.8303 23.0912 59.7891 23.0819 59.7213 23.0649C59.7166 23.0638 59.7117 23.0625 59.7066 23.0612C59.6302 23.042 59.5099 23.0118 59.3765 23.0027C58.59 22.7825 57.9627 22.2958 57.3176 21.4779C56.6586 20.6423 56.0158 19.508 55.1801 18.0331L55.1413 17.9647C54.8861 17.4553 54.6068 16.973 54.3362 16.5054L54.3327 16.4995C54.0565 16.0225 53.7893 15.5605 53.5472 15.0764L53.5333 15.0485L53.516 15.0226C51.7283 12.3411 49.7115 11.4988 48.1818 11.3241Z"></path><path d="M9.28397 39.6773C11.0717 42.3589 13.0885 43.2011 14.6182 43.3759C14.753 46.3026 15.2611 48.6402 16.2528 50.6236C16.9991 52.1163 17.9653 53.2992 19.1863 54.2H15.7881L2.74125 31.699C2.76073 31.6996 2.78031 31.7 2.8 31.7C2.89335 31.7 2.97474 31.7149 3.07903 31.7381C3.08854 31.7402 3.09897 31.7426 3.11023 31.7452C3.18647 31.7626 3.30082 31.7888 3.42319 31.7972C4.20888 32.0178 4.86081 32.5271 5.52047 33.3603C6.20216 34.2214 6.85697 35.382 7.66164 36.8405C8.26116 37.9396 8.76739 38.8512 9.276 39.665L9.27989 39.6712L9.28397 39.6773Z"></path><path d="M55.124 36.865L55.1331 36.8504L55.1412 36.8353C55.9431 35.3316 56.5997 34.1683 57.2697 33.307C57.9146 32.4778 58.5471 31.9616 59.2949 31.6961C59.4179 31.6866 59.5418 31.6616 59.6287 31.6442C59.6354 31.6428 59.6418 31.6415 59.6481 31.6403C59.719 31.6261 59.772 31.616 59.8123 31.6095L46.8115 54.1H43.8753C45.7283 52.7465 46.7867 50.8277 47.3889 48.9394C48.064 46.8226 48.1795 44.7058 48.1971 43.3742C49.7262 43.1967 51.8271 42.3567 53.5196 39.6719C53.8327 39.2016 54.1164 38.6849 54.3777 38.1995C54.4112 38.1375 54.4442 38.076 54.4768 38.0152C54.7049 37.5906 54.9148 37.1996 55.124 36.865Z"></path><path d="M32.2763 51.5708L32.2653 51.5582L32.2536 51.5465C32.0661 51.359 31.7413 51.2 31.4 51.2C31.3949 51.2 31.3894 51.2 31.3835 51.2C31.2956 51.1998 31.1323 51.1993 30.9751 51.2442C30.7932 51.2962 30.6132 51.4082 30.4904 51.6086C29.1941 53.0706 27.544 53.8 25.5 53.8C22.8209 53.8 20.828 52.9218 19.4532 51.2005C18.1148 49.5247 17.3123 46.988 17.1201 43.5109C18.6883 43.1579 19.8601 42.2673 20.5004 41.6896C20.5136 44.8271 20.8579 46.8152 21.6737 48.0181C22.5558 49.319 23.9045 49.6 25.5 49.6C27.4335 49.6 28.5187 48.2893 29.0946 46.9901C29.6604 45.7138 29.7966 44.3347 29.7999 43.8193C29.8943 42.5846 30.6602 41.8 31.5 41.8H31.5778C32.4558 41.8842 33.2 42.7102 33.2 43.9C33.2 45.6119 33.5619 47.0065 34.2986 47.9982C35.0485 49.0077 36.1459 49.544 37.4792 49.5996L37.4896 49.6H37.5C39.2304 49.6 40.5973 49.3258 41.4454 48.0081C41.849 47.3811 42.1078 46.5565 42.2692 45.5056C42.4311 44.4518 42.5 43.1353 42.5 41.5V24.4455L45.9 21.8182V41.5C45.9 41.4958 45.8996 41.5001 45.8978 41.519C45.8959 41.5381 45.8927 41.5719 45.887 41.6267L45.8842 41.6541C45.8752 41.7406 45.8636 41.8524 45.8521 41.9797C45.8264 42.2614 45.8 42.6283 45.8 43V43.9V43.9029V43.9059V43.9088V43.9117V43.9146V43.9175V43.9205V43.9234V43.9263V43.9292V43.9321V43.935V43.9379V43.9408V43.9437V43.9466V43.9495V43.9524V43.9553V43.9581V43.961V43.9639V43.9668V43.9696V43.9725V43.9754V43.9783V43.9811V43.984V43.9868V43.9897V43.9926V43.9954V43.9983V44.0011V44.004V44.0068V44.0096V44.0125V44.0153V44.0181V44.021V44.0238V44.0266V44.0295V44.0323V44.0351V44.0379V44.0407V44.0435V44.0463V44.0492V44.052V44.0548V44.0576V44.0603V44.0631V44.0659V44.0687V44.0715V44.0743V44.0771V44.0798V44.0826V44.0854V44.0882V44.0909V44.0937V44.0965V44.0992V44.102V44.1047V44.1075V44.1102V44.113V44.1157V44.1185V44.1212V44.1239V44.1267V44.1294V44.1321V44.1349V44.1376V44.1403V44.143V44.1457V44.1484V44.1512V44.1539V44.1566V44.1593V44.162V44.1647V44.1674V44.17V44.1727V44.1754V44.1781V44.1808V44.1835V44.1861V44.1888V44.1915V44.1941V44.1968V44.1995V44.2021V44.2048V44.2074V44.2101V44.2127V44.2154V44.218V44.2207V44.2233V44.2259V44.2285V44.2312V44.2338V44.2364V44.239V44.2417V44.2443V44.2469V44.2495V44.2521V44.2547V44.2573V44.2599V44.2625V44.2651V44.2677V44.2702V44.2728V44.2754V44.278V44.2806V44.2831V44.2857V44.2882V44.2908V44.2934V44.2959V44.2985V44.301V44.3036V44.3061V44.3087V44.3112V44.3137V44.3163V44.3188V44.3213V44.3238V44.3264V44.3289V44.3314V44.3339V44.3364V44.3389V44.3414V44.3439V44.3464V44.3489V44.3514V44.3539V44.3564V44.3588V44.3613V44.3638V44.3663V44.3687V44.3712V44.3737V44.3761V44.3786V44.381V44.3835V44.3859V44.3884V44.3908V44.3932V44.3957V44.3981V44.4005V44.403V44.4054V44.4078V44.4102V44.4126V44.415V44.4174V44.4199V44.4223V44.4247V44.427V44.4294V44.4318V44.4342V44.4366V44.439V44.4413V44.4437V44.4461V44.4484V44.4508V44.4532V44.4555V44.4579V44.4602V44.4626V44.4649V44.4672V44.4696V44.4719V44.4742V44.4766V44.4789V44.4812V44.4835V44.4858V44.4882V44.4905V44.4928V44.4951V44.4974V44.4997V44.5019V44.5042V44.5065V44.5088V44.5111V44.5133V44.5156V44.5179V44.5201V44.5224V44.5247V44.5269V44.5292V44.5314V44.5337V44.5359V44.5381V44.5404V44.5426V44.5448V44.547V44.5493V44.5515V44.5537V44.5559V44.5581V44.5603V44.5625V44.5647V44.5669V44.5691V44.5713V44.5734V44.5756V44.5778V44.58V44.5821V44.5843V44.5865V44.5886V44.5908V44.5929V44.5951V44.5972V44.5994V44.6015V44.6036V44.6058V44.6079V44.61V44.6121V44.6142V44.6164V44.6185V44.6206V44.6227V44.6248V44.6269V44.6289V44.631V44.6331V44.6352V44.6373V44.6393V44.6414V44.6435V44.6455V44.6476V44.6497V44.6517V44.6538V44.6558V44.6578V44.6599V44.6619V44.6639V44.666V44.668V44.67V44.672V44.674V44.676V44.678V44.68V44.682V44.684V44.686V44.688V44.69V44.692V44.6939V44.6959V44.6979V44.6998V44.7018V44.7037V44.7057V44.7076V44.7096V44.7115V44.7135V44.7154V44.7173V44.7193V44.7212V44.7231V44.725V44.7269V44.7288V44.7307V44.7326V44.7345V44.7364V44.7383V44.7402V44.7421V44.7439V44.7458V44.7477V44.7495V44.7514V44.7533V44.7551V44.757V44.7588V44.7606V44.7625V44.7643V44.7661V44.768V44.7698V44.7716V44.7734V44.7752V44.777V44.7788V44.7806V44.7824V44.7842V44.786V44.7878V44.7896V44.7914V44.7931V44.7949V44.7967V44.7984V44.8002V44.8019V44.8037V44.8054V44.8071V44.8089V44.8106V44.8123V44.8141V44.8158V44.8175V44.8192V44.8209V44.8226V44.8243V44.826V44.8277V44.8294V44.8311V44.8328V44.8344V44.8361V44.8378V44.8394V44.8411V44.8427V44.8444V44.846V44.8477V44.8493V44.851V44.8526V44.8542V44.8558V44.8575V44.8591V44.8607V44.8623V44.8639V44.8655V44.8671V44.8687V44.8702V44.8718V44.8734V44.875V44.8765V44.8781V44.8797V44.8812V44.8828V44.8843V44.8859V44.8874V44.8889V44.8905V44.892V44.8935V44.895V44.8965V44.898V44.8996V44.9011V44.9025V44.904V44.9055V44.907V44.9085V44.91V44.9114V44.9129V44.9144V44.9158V44.9173V44.9187V44.9202V44.9216V44.923V44.9245V44.9259V44.9273V44.9288V44.9302V44.9316V44.933V44.9344V44.9358V44.9372V44.9386V44.9399V44.9413V44.9427V44.9441V44.9454V44.9468V44.9482V44.9495V44.9509V44.9522V44.9535V44.9549V44.9562V44.9575V44.9589V44.9602V44.9615V44.9628V44.9641V44.9654V44.9667V44.968V44.9693V44.9706V44.9718V44.9731V44.9744V44.9757V44.9769V44.9782V44.9794V44.9807V44.9819V44.9832V44.9844V44.9856V44.9868V44.9881V44.9893V44.9905V44.9917V44.9929V44.9941V44.9953V44.9965V44.9977V44.9988V45V45.1V45.1006V45.1012V45.1017V45.1023V45.1029V45.1035V45.104V45.1046V45.1052V45.1057V45.1063V45.1069V45.1074V45.108V45.1085V45.1091V45.1096V45.1102V45.1107V45.1113V45.1118V45.1123V45.1129V45.1134V45.1139V45.1145V45.115V45.1155V45.1161V45.1166V45.1171V45.1176V45.1181V45.1186V45.1191V45.1196V45.1202V45.1207V45.1212V45.1217V45.1222V45.1226V45.1231V45.1236V45.1241V45.1246V45.1251V45.1256V45.1261V45.1265V45.127V45.1275V45.128V45.1284V45.1289V45.1294V45.1298V45.1303V45.1307V45.1312V45.1317V45.1321V45.1326V45.133V45.1335V45.1339V45.1343V45.1348V45.1352V45.1357V45.1361V45.1365V45.137V45.1374V45.1378V45.1383V45.1387V45.1391V45.1395V45.1399V45.1404V45.1408V45.1412V45.1416V45.142V45.1424V45.1428V45.1432V45.1436V45.144V45.1444V45.1448V45.1452V45.1456V45.146V45.1464V45.1468V45.1471V45.1475V45.1479V45.1483V45.1487V45.149V45.1494V45.1498V45.1501V45.1505V45.1509V45.1512V45.1516V45.152V45.1523V45.1527V45.153V45.1534V45.1537V45.1541V45.1544V45.1548V45.1551V45.1555V45.1558V45.1561V45.1565V45.1568V45.1572V45.1575V45.1578V45.1581V45.1585V45.1588V45.1591V45.1594V45.1598V45.1601V45.1604V45.1607V45.161V45.1613V45.1616V45.162V45.1623V45.1626V45.1629V45.1632V45.1635V45.1638V45.1641V45.1644V45.1647V45.165V45.1652V45.1655V45.1658V45.1661V45.1664V45.1667V45.167V45.1672V45.1675V45.1678V45.1681V45.1683V45.1686V45.1689V45.1691V45.1694V45.1697V45.1699V45.1702V45.1705V45.1707V45.171V45.1712V45.1715V45.1717V45.172V45.1722V45.1725V45.1727V45.173V45.1732V45.1735V45.1737V45.174V45.1742V45.1744V45.1747V45.1749V45.1751V45.1753C45.5039 48.1507 44.6544 50.2924 43.3031 51.6899C41.9582 53.0807 40.0524 53.8 37.5 53.8C35.4235 53.8 33.5685 53.0476 32.2763 51.5708Z"></path><path d="M22.8 23.2538V18.2178L29.3909 23.307L26.1939 25.8645L22.8 23.2538Z"></path><path d="M16.7 20.2V19.7H16.5V18.8V10.858C16.5042 10.8478 16.5096 10.8348 16.5142 10.8232C16.5488 10.7368 16.5963 10.6012 16.5998 10.4209C16.8474 7.03069 17.6799 4.61275 19.0737 3.04468C20.4543 1.49155 22.4511 0.699997 25.2 0.699997C27.2568 0.699997 29.1263 1.53906 30.5352 3.04197L30.5407 3.04785L30.5464 3.05355C30.7614 3.26854 31.0508 3.35 31.3 3.35C31.5492 3.35 31.8386 3.26854 32.0536 3.05355L32.0646 3.04251L32.0749 3.03081C33.4779 1.4408 35.1402 0.699997 37.3 0.699997C40.0769 0.699997 42.1441 1.62655 43.5571 3.42174C44.934 5.17104 45.7393 7.80743 45.886 11.3874C44.0184 11.8028 42.6345 12.9721 42.1 13.4936V13.2C42.1 10.0544 41.7835 8.06299 40.9925 6.86242C40.1497 5.58316 38.8495 5.3 37.3 5.3C35.4114 5.3 34.3769 6.59229 33.8399 7.85422C33.3055 9.11015 33.2 10.457 33.2 10.9C33.2 12.2634 32.2859 13.1 31.3 13.1H31.2204C30.2388 13.0141 29.4 12.0845 29.4 10.8C29.4 9.19015 29.0639 7.84653 28.3661 6.89234C27.6525 5.91665 26.5974 5.4 25.3 5.4C23.6267 5.4 22.3017 5.64608 21.4896 6.93319C21.1052 7.5425 20.863 8.34586 20.7131 9.3714C20.5626 10.4004 20.5 11.6909 20.5 13.3V30.4541L16.7 33.3833V20.2Z"></path><path d="M40.1 31.5462V36.5799L33.4225 31.4049L36.6974 28.9288L40.1 31.5462Z"></path><mask id="path-9-inside-1" fill="white"><path d="M58.7 30.1C58.9 30 59.5 30 59.8 29.9C60.9 29.8 61.8 28.7 61.8 27.4C61.8 26.1 60.9 25 59.8 24.9C59.7 24.9 59.5 24.9 59.4 24.8C59.3 24.8 59.2 24.8 59.1 24.7C59.1 24.7 59.1 24.7 59 24.7C58.6 24.6 58.1 24.4 57.7 24.1C57.7 24.1 57.7 24.1 57.6 24C56.1 23.1 55 21.2 53.6 18.7C53.1 17.8 52.6 16.9 52 16C50.5 13.7 48.9 13.1 47.8 13C47.7 13 47.6 13 47.5 13H47.3C47.1 13 46.9 13 46.9 13C45.2 13.2 44 14.3 43.6 14.8L25.2 29.1C25.2 29.1 25.2 29.1 25.1 29.2L23 30.8L16.8 35.5L16.4 35.9C16.4 35.9 16.4 35.9 16.3 35.9C16 36.1 15.7 36.3 15.4 36.3C15.1 36.3 14.9 36.2 14.7 36.1C14.5 35.9 14.4 35.8 14.3 35.5C13.9 34.8 13.4 34.1 13 33.3V33.1C12.2 31.7 11.3 30 10.1 28.6C10.1 28.6 10.1 28.6 10.1 28.5L10 28.4C9.9 28.3 9.9 28.3 9.8 28.2C9.8 28.2 9.8 28.2 9.7 28.1L9.2 27.5C9.2 27.5 9.2 27.5 9.1 27.5C9 27.3 9 27.1 9.1 27L9.6 26.5C10.9 25 11.9 23.2 12.8 21.6V21.5C13.2 20.7 13.7 19.9 14.2 19.1C14.4 18.8 14.6 18.6 14.7 18.5V13.1C13.6 13.2 12 13.9 10.6 16C10 16.9 9.5 17.8 9 18.7C7.8 20.9 6.8 22.5 5.6 23.5C4.8 24.1 4 24.4 3.5 24.6C3.5 24.6 3.5 24.6 3.4 24.6C3.3 24.6 3.1 24.7 3 24.7C2.9 24.7 2.9 24.7 2.8 24.7C2.7 24.7 2.7 24.7 2.7 24.7H2.6H2.5C2.3 24.7 2.2 24.8 2.1 24.8C2 24.8 2 24.8 2 24.9C1.7 25.1 1.4 25.3 1.2 25.6C1.2 25.7 1.1 25.7 1.1 25.8V25.9L0.999997 26.1C0.999997 26.2 0.999997 26.2 0.899997 26.3C0.899997 26.4 0.899997 26.4 0.799997 26.5C0.799997 26.6 0.799997 26.7 0.699997 26.7C0.699997 26.8 0.699997 26.9 0.699997 26.9C0.699997 27 0.699997 27.1 0.699997 27.1C0.699997 27.2 0.699997 27.2 0.699997 27.3C0.699997 27.4 0.699997 27.5 0.699997 27.5C0.699997 27.6 0.699997 27.7 0.699997 27.7C0.699997 27.8 0.699997 27.9 0.799997 27.9V28V28.1C0.799997 28.2 0.799997 28.2 0.899997 28.2L0.999997 28.4C0.999997 28.5 1.1 28.5 1.1 28.5C1.1 28.5 1.1 28.5 1.1 28.6C1.2 28.7 1.3 28.9 1.5 29C1.6 29 1.6 29.1 1.7 29.1C1.7 29.1 1.8 29.1 1.8 29.2C1.8 29.2 1.8 29.2 1.9 29.2C2 29.3 2.2 29.3 2.3 29.4C2.4 29.4 2.4 29.4 2.4 29.4L2.9 29.5C3.1 29.5 3.2 29.6 3.4 29.6C4.2 29.8 4.7 30.2 4.8 30.2C6.4 31.2 7.5 33 8.9 35.5C9.5 36.6 10 37.4 10.5 38.2C11.9 40.3 13.4 41 14.4 41.1C14.5 41.1 14.5 41.1 14.6 41.1C14.7 41.1 14.8 41.1 14.8 41.1C15 41.1 15.2 41.1 15.5 41.1H15.6C17.2 40.8 18.5 39.8 18.9 39.3L19 39.2L19.8 38.6C19.8 38.6 19.9 38.5 20 38.5L30.2 30.6L41.3 22L46.5 18H46.6C46.7 18 46.9 17.9 47 17.9C47.4 17.9 47.8 18.1 48.1 18.6L48.5 19.2C48.8 19.7 49.2 20.3 49.5 20.9V21C50.1 22.1 50.8 23.4 51.7 24.6C51.7 24.6 51.7 24.7 51.8 24.7C52.1 25.1 52.4 25.5 52.7 25.8C52.7 25.8 52.8 25.8 52.8 25.9C53 26.1 53.1 26.3 53.3 26.4C53.4 26.5 53.4 26.7 53.3 26.9C52 28.5 50.4 31.1 49.6 32.4V32.5C49.2 33.2 48.7 34.1 48.2 34.9C48 35.2 47.8 35.4 47.7 35.5V40.9C48.8 40.8 50.4 40.1 51.8 37.9C52.4 37 52.9 36 53.4 35.2C53.5 35 53.7 34.7 53.8 34.5C55.2 33 56.4 30.9 58.7 30.1Z"></path></mask><path d="M58.7 30.1C58.9 30 59.5 30 59.8 29.9C60.9 29.8 61.8 28.7 61.8 27.4C61.8 26.1 60.9 25 59.8 24.9C59.7 24.9 59.5 24.9 59.4 24.8C59.3 24.8 59.2 24.8 59.1 24.7C59.1 24.7 59.1 24.7 59 24.7C58.6 24.6 58.1 24.4 57.7 24.1C57.7 24.1 57.7 24.1 57.6 24C56.1 23.1 55 21.2 53.6 18.7C53.1 17.8 52.6 16.9 52 16C50.5 13.7 48.9 13.1 47.8 13C47.7 13 47.6 13 47.5 13H47.3C47.1 13 46.9 13 46.9 13C45.2 13.2 44 14.3 43.6 14.8L25.2 29.1C25.2 29.1 25.2 29.1 25.1 29.2L23 30.8L16.8 35.5L16.4 35.9C16.4 35.9 16.4 35.9 16.3 35.9C16 36.1 15.7 36.3 15.4 36.3C15.1 36.3 14.9 36.2 14.7 36.1C14.5 35.9 14.4 35.8 14.3 35.5C13.9 34.8 13.4 34.1 13 33.3V33.1C12.2 31.7 11.3 30 10.1 28.6C10.1 28.6 10.1 28.6 10.1 28.5L10 28.4C9.9 28.3 9.9 28.3 9.8 28.2C9.8 28.2 9.8 28.2 9.7 28.1L9.2 27.5C9.2 27.5 9.2 27.5 9.1 27.5C9 27.3 9 27.1 9.1 27L9.6 26.5C10.9 25 11.9 23.2 12.8 21.6V21.5C13.2 20.7 13.7 19.9 14.2 19.1C14.4 18.8 14.6 18.6 14.7 18.5V13.1C13.6 13.2 12 13.9 10.6 16C10 16.9 9.5 17.8 9 18.7C7.8 20.9 6.8 22.5 5.6 23.5C4.8 24.1 4 24.4 3.5 24.6C3.5 24.6 3.5 24.6 3.4 24.6C3.3 24.6 3.1 24.7 3 24.7C2.9 24.7 2.9 24.7 2.8 24.7C2.7 24.7 2.7 24.7 2.7 24.7H2.6H2.5C2.3 24.7 2.2 24.8 2.1 24.8C2 24.8 2 24.8 2 24.9C1.7 25.1 1.4 25.3 1.2 25.6C1.2 25.7 1.1 25.7 1.1 25.8V25.9L0.999997 26.1C0.999997 26.2 0.999997 26.2 0.899997 26.3C0.899997 26.4 0.899997 26.4 0.799997 26.5C0.799997 26.6 0.799997 26.7 0.699997 26.7C0.699997 26.8 0.699997 26.9 0.699997 26.9C0.699997 27 0.699997 27.1 0.699997 27.1C0.699997 27.2 0.699997 27.2 0.699997 27.3C0.699997 27.4 0.699997 27.5 0.699997 27.5C0.699997 27.6 0.699997 27.7 0.699997 27.7C0.699997 27.8 0.699997 27.9 0.799997 27.9V28V28.1C0.799997 28.2 0.799997 28.2 0.899997 28.2L0.999997 28.4C0.999997 28.5 1.1 28.5 1.1 28.5C1.1 28.5 1.1 28.5 1.1 28.6C1.2 28.7 1.3 28.9 1.5 29C1.6 29 1.6 29.1 1.7 29.1C1.7 29.1 1.8 29.1 1.8 29.2C1.8 29.2 1.8 29.2 1.9 29.2C2 29.3 2.2 29.3 2.3 29.4C2.4 29.4 2.4 29.4 2.4 29.4L2.9 29.5C3.1 29.5 3.2 29.6 3.4 29.6C4.2 29.8 4.7 30.2 4.8 30.2C6.4 31.2 7.5 33 8.9 35.5C9.5 36.6 10 37.4 10.5 38.2C11.9 40.3 13.4 41 14.4 41.1C14.5 41.1 14.5 41.1 14.6 41.1C14.7 41.1 14.8 41.1 14.8 41.1C15 41.1 15.2 41.1 15.5 41.1H15.6C17.2 40.8 18.5 39.8 18.9 39.3L19 39.2L19.8 38.6C19.8 38.6 19.9 38.5 20 38.5L30.2 30.6L41.3 22L46.5 18H46.6C46.7 18 46.9 17.9 47 17.9C47.4 17.9 47.8 18.1 48.1 18.6L48.5 19.2C48.8 19.7 49.2 20.3 49.5 20.9V21C50.1 22.1 50.8 23.4 51.7 24.6C51.7 24.6 51.7 24.7 51.8 24.7C52.1 25.1 52.4 25.5 52.7 25.8C52.7 25.8 52.8 25.8 52.8 25.9C53 26.1 53.1 26.3 53.3 26.4C53.4 26.5 53.4 26.7 53.3 26.9C52 28.5 50.4 31.1 49.6 32.4V32.5C49.2 33.2 48.7 34.1 48.2 34.9C48 35.2 47.8 35.4 47.7 35.5V40.9C48.8 40.8 50.4 40.1 51.8 37.9C52.4 37 52.9 36 53.4 35.2C53.5 35 53.7 34.7 53.8 34.5C55.2 33 56.4 30.9 58.7 30.1Z"></path></svg></div>', 1), Ff = [
  Rf
];
function Hf(e, t, o, s, l, a) {
  return p(), d("div", null, Ff);
}
const Nf = /* @__PURE__ */ Ht(jf, [["render", Hf]]), qf = {
  key: 0,
  class: "po-fixed po-z-[999] po-top-0 po-bottom-0 po-left-0 po-right-0 po-flex po-items-center po-justify-center"
}, Uf = /* @__PURE__ */ i("div", { class: "po-absolute po-w-[6.2rem] po-h-[6.2rem] po-bg-transparent po-overflow-hidden po-rounded-xl" }, [
  /* @__PURE__ */ i("div", { class: "po-loading-rotate po-absolute -po-top-8 -po-left-8 po-w-[10rem] po-h-[10rem]" })
], -1), Yf = { class: "relative po-bg-white po-w-24 po-h-24 po-flex po-items-center po-justify-center po-rounded-xl po-bg-opacity-50 po-backdrop-blur po-backdrop-filter po-z-10 po-shadow-xl" }, Wf = {
  key: 0,
  class: "po-absolute po-left-1 po-right-1 po-text-center po-py-1 po-text-xs po-text-mpao-blue po-bg-white po-bg-opacity-50 po-backdrop-blur po-backdrop-filter"
}, Zf = {
  name: "PoLoading"
}, F5 = /* @__PURE__ */ T({
  ...Zf,
  props: {
    show: { type: Boolean, default: !1 },
    label: { default: "" }
  },
  setup(e) {
    return (t, o) => t.show ? (p(), d("div", qf, [
      Uf,
      i("div", Yf, [
        t.label !== "" ? (p(), d("span", Wf, C(t.label), 1)) : k("", !0),
        V(Nf)
      ])
    ])) : k("", !0);
  }
}), Gf = { class: "po-py-5 po-flex po-items-start po-space-x-5" }, Kf = ["name", "id", "checked", "aria-describedby"], Xf = { class: "po-grow -po-mt-[0.26rem]" }, Qf = ["for"], Jf = { class: "po-mt-2 po-flex po-space-x-3" }, e4 = ["href", "onClick"], t4 = {
  name: "PoConsent"
}, H5 = /* @__PURE__ */ T({
  ...t4,
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
    return (s, l) => (p(), d("div", Gf, [
      i("input", Ie({
        type: "checkbox",
        name: `${s.id}-field`,
        id: s.id,
        checked: s.modelValue,
        "aria-describedby": `${s.id}-description`
      }, s.$attrs, {
        onInput: o,
        class: "po-shrink-0 po-h-4 po-w-4 po-rounded border-slate-300 po-text-mpao-lightblue focus:po-ring-mpao-lightblue"
      }), null, 16, Kf),
      i("div", Xf, [
        i("label", {
          class: "po-block po-select-none po-text-sm po-text-slate-600 po-cursor-pointer",
          for: s.id
        }, C(s.label), 9, Qf),
        i("div", Jf, [
          (p(!0), d(F, null, G(s.links, (a) => (p(), d("a", {
            href: a.url,
            onClick: te((n) => s.$emit("button-click", a.url), ["prevent"]),
            class: "po-text-sm po-text-mpao-lightblue hover:po-text-mpao-blue"
          }, C(a.label), 9, e4))), 256))
        ])
      ])
    ]));
  }
}), o4 = {
  class: "po-flex po-bg-slate-50 po-rounded-t-xl po-justify-center lg:po-justify-start po-px-4 po-pt-4 xl:po-pt-2 po-flex-wrap po-overflow-hidden",
  "aria-label": "Tabs"
}, s4 = ["onClick", "aria-current"], l4 = { key: 0 }, a4 = {
  name: "PoCardTabs"
}, N5 = /* @__PURE__ */ T({
  ...a4,
  props: {
    tabs: { default: null }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    function o(s) {
      return s.iconColor ? s.iconColor : "po-fill-current";
    }
    return (s, l) => (p(), d("nav", o4, [
      (p(!0), d(F, null, G(s.tabs, (a) => (p(), d("span", {
        role: "button",
        onClick: (n) => s.$emit("button-click", a),
        key: a.name,
        class: L([
          a.current ? "po-bg-white po-text-slate-600 po-shadow-lg" : "po-text-slate-600 hover:po-text-mpao-blue",
          "po-px-4 po-py-3 po-font-medium po-mr-4 po-mb-4 xl:po-mb-0 po-text-sm po-cursor-pointer po-rounded-xl xl:po-rounded-b-none genie-effect hover:po-text-slate-600 hover:po-bg-white hover:po-shadow-md po-flex po-items-center po-flex-shrink-0 po-space-x-2"
        ]),
        "aria-current": a.current ? "page" : void 0
      }, [
        a.icon ? (p(), H(he(a.icon), {
          key: 0,
          class: L(["po-w-5 po-h-5", [o(a)]])
        }, null, 8, ["class"])) : k("", !0),
        i("span", null, [
          ee(C(a.name), 1),
          a.count ? (p(), d("span", l4, " (" + C(a.count) + ")", 1)) : k("", !0)
        ])
      ], 10, s4))), 128))
    ]));
  }
}), n4 = { class: "sm:po-hidden" }, r4 = /* @__PURE__ */ i("label", {
  for: "tabs",
  class: "po-sr-only"
}, "Select a tab", -1), i4 = ["value", "selected"], p4 = { class: "po-hidden sm:po-block" }, u4 = {
  class: "po-flex po-space-x-4 po-pt-2",
  "aria-label": "Tabs"
}, d4 = ["onClick", "aria-current"], c4 = {
  name: "PoTabs"
}, q5 = /* @__PURE__ */ T({
  ...c4,
  props: {
    tabs: { default: null },
    currentTab: { default: "" }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    const o = e;
    function s(n) {
      return n.iconColor ? n.iconColor : "po-fill-current";
    }
    const l = z(() => {
      var n;
      return (n = o.tabs) == null ? void 0 : n.map((r) => r.name === o.currentTab ? { ...r, current: !0 } : { ...r, current: !1 });
    }), a = (n) => {
      const r = Number(n.target.value);
      if (o.tabs) {
        const u = o.tabs[r];
        t("button-click", u);
      }
    };
    return (n, r) => (p(), d(F, null, [
      i("div", n4, [
        r4,
        i("select", {
          id: "tabs",
          name: "tabs",
          class: "po-block po-w-full po-rounded-md po-border-gray-300 focus:po-border-indigo-500 focus:po-ring-indigo-500",
          onChange: a
        }, [
          (p(!0), d(F, null, G(n.tabs, (u, c) => (p(), d("option", {
            key: u.name,
            value: c,
            selected: u.current
          }, C(u.name), 9, i4))), 128))
        ], 32)
      ]),
      i("div", p4, [
        i("nav", u4, [
          (p(!0), d(F, null, G(l.value, (u) => (p(), d("span", {
            onClick: (c) => n.$emit("button-click", u),
            role: "button",
            key: u.name,
            class: L([
              u.current ? " po-text-slate-600 po-shadow-md po-border po-border-sky-200" : " po-text-slate-600 po-shadow-sm hover:po-text-mpao-blue",
              "po-bg-white po-px-4 po-relative po-group po-py-3 po-font-medium po-text-sm po-cursor-pointer po-rounded-xl genie-effect hover:po-text-slate-600 hover:po-bg-white hover:po-shadow-md po-flex po-items-center po-space-x-2"
            ]),
            "aria-current": u.current ? "page" : void 0
          }, [
            u.icon ? (p(), H(he(u.icon), {
              key: 0,
              class: L(["po-w-5 po-h-5", [s(u)]])
            }, null, 8, ["class"])) : k("", !0),
            i("span", null, [
              i("span", null, C(u.name), 1),
              u.count && u.count > 0 ? (p(), d("span", {
                key: 0,
                class: L(["po-absolute po-py-1 po-px-2 po-rounded-full po-text-xs -po-top-3 -po-right-2 po-shadow-md po-flex po-items-center po-justify-center", [
                  u.current ? "po-bg-mpao-orange po-text-white" : "po-bg-slate-400 po-text-white group-hover:po-bg-mpao-orange group-hover:po-text-white"
                ]])
              }, [
                i("span", null, C(u.count), 1)
              ], 2)) : k("", !0)
            ])
          ], 10, d4))), 128))
        ])
      ])
    ], 64));
  }
}), f4 = { class: "po-mt-5 po-flex po-flex-col po-items-center po-justify-center po-px-5 po-pt-8 po-pb-12" }, v4 = {
  key: 0,
  class: "po-w-16 po-h-16 po-flex po-items-center po-justify-center po-rounded-full po-bg-blue-50"
}, h4 = {
  key: 1,
  class: "po-text-base po-pt-2 po-font-medium po-text-slate-600 po-text-center"
}, m4 = {
  key: 2,
  class: "po-text-sm po-text-slate-500 po-text-center po-max-w-lg po-block po-mx-auto"
}, b4 = {
  name: "PoEmpty"
}, U5 = /* @__PURE__ */ T({
  ...b4,
  props: {
    label: { default: "" },
    description: { default: "" },
    icon: { default: null },
    iconColor: { default: "po-stroke-blue-400" }
  },
  setup(e) {
    return (t, o) => (p(), d("div", f4, [
      i("div", {
        class: L(["po-space-y-1 po-flex po-items-center po-flex-col po-justify-center", [{ "po-mb-5": t.$slots.action }]])
      }, [
        t.icon ? (p(), d("span", v4, [
          t.icon ? (p(), H(he(t.icon), {
            key: 0,
            class: L(["po-w-8 po-h-8", t.iconColor])
          }, null, 8, ["class"])) : k("", !0)
        ])) : k("", !0),
        t.label !== "" ? (p(), d("span", h4, C(t.label), 1)) : k("", !0),
        t.description !== "" ? (p(), d("span", m4, C(t.description), 1)) : k("", !0)
      ], 2),
      X(t.$slots, "action")
    ]));
  }
}), g4 = { class: "po-flex po-text-sm po-text-gray-700 po-flex-col po-space-y-5" }, y4 = {
  key: 0,
  class: "po-text-base po-font-medium po-text-slate-700"
}, w4 = {
  key: 1,
  class: "po-border po-border-orange-300 po-bg-orange-50 po-rounded-lg po-p-5 po-flex po-items-center po-space-x-3"
}, _4 = { class: "po-grow po-text-sm po-text-slate-600" }, $4 = {
  key: 2,
  class: "po-border po-border-red-300 po-bg-red-50 po-rounded-lg po-p-5 po-flex po-space-x-4"
}, x4 = { class: "po-grow" }, V4 = { class: "po-text-base po-text-slate-700 po-font-medium" }, k4 = { class: "po-text-sm po-text-slate-600" }, C4 = { class: "po-font-medium" }, S4 = { key: 0 }, P4 = { key: 0 }, O4 = /* @__PURE__ */ i("dt", null, "Name", -1), L4 = { key: 1 }, M4 = /* @__PURE__ */ i("dt", null, "Identifer", -1), T4 = { key: 2 }, D4 = /* @__PURE__ */ i("dt", null, "Date of birth", -1), I4 = { key: 3 }, z4 = /* @__PURE__ */ i("dt", null, "Reported Date of death", -1), B4 = {
  key: 3,
  class: "po-pt-5"
}, E4 = { class: "po-flex po-items-center po-space-x-1" }, A4 = /* @__PURE__ */ i("span", null, "File a dispute.", -1), j4 = {
  name: "PoDRStatus"
}, Y5 = /* @__PURE__ */ T({
  ...j4,
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
    return (s, l) => (p(), d("span", g4, [
      s.record !== null ? (p(), d("h2", y4, " Death was reported by " + C(s.record.institution), 1)) : k("", !0),
      s.request !== null && s.request.type_id === 1 ? (p(), d("div", w4, [
        V(P(yo), { class: "po-shrink-0 po-w-6 po-stroke-orange-600" }),
        i("span", _4, " This is a " + C(s.request.type) + " request and is in " + C(s.request.state) + " state. ", 1)
      ])) : k("", !0),
      s.request !== null && s.request.type_id !== 1 ? (p(), d("div", $4, [
        V(P(yo), { class: "po-shrink-0 po-w-6 po-h-6 po-stroke-red-600 po-stroke-2" }),
        i("div", x4, [
          i("h3", V4, C(s.request.type), 1),
          i("p", k4, [
            ee(" The following " + C(s.request.type) + " was reported: ", 1),
            i("span", C4, [
              ee(C(s.request.dispute_type), 1),
              s.request.date_of_death ? (p(), d("span", S4, " (New date: " + C(s.request.date_of_death) + ")", 1)) : k("", !0)
            ])
          ])
        ])
      ])) : k("", !0),
      V(Cd, null, {
        content: B(() => [
          s.member !== null ? (p(), d("div", P4, [
            O4,
            i("dd", null, C(s.member.name), 1)
          ])) : k("", !0),
          s.member !== null ? (p(), d("div", L4, [
            M4,
            i("dd", null, C(s.member.identifier), 1)
          ])) : k("", !0),
          s.member !== null ? (p(), d("div", T4, [
            D4,
            i("dd", null, C(s.member.dob), 1)
          ])) : k("", !0),
          s.record !== null ? (p(), d("div", I4, [
            z4,
            i("dd", null, C(s.record.date_of_death), 1)
          ])) : k("", !0)
        ]),
        _: 1
      }),
      s.request === null ? (p(), d("span", B4, [
        V(gt, {
          type: "simple",
          onButtonClick: o
        }, {
          label: B(() => [
            i("span", E4, [
              V(P(ua), { class: "po-w-4 po-h-4 po-stroke-current" }),
              A4
            ])
          ]),
          _: 1
        })
      ])) : k("", !0)
    ]));
  }
}), R4 = {
  role: "button",
  class: "po-w-6 po-h-6 po-rounded-lg po-bg-white genie-effect po-flex po-items-center po-justify-center hover:po-bg-slate-50 po-cursor-pointer"
}, F4 = {
  name: "PoTableAction"
}, W5 = /* @__PURE__ */ T({
  ...F4,
  props: {
    btnIcon: { default: null },
    btnType: { default: "text" },
    label: { default: "" },
    textColor: { default: "po-slate-500" },
    iconColor: { default: "po-stroke-slate-500" }
  },
  setup(e) {
    const t = e, o = $(), s = $(), l = $(t.label);
    return t.btnType === "view" ? (o.value = ha, l.value = t.label === "" ? "View" : t.label) : t.btnType === "edit" ? (o.value = ma, l.value = t.label === "" ? "Edit" : t.label) : t.btnType === "delete" ? (o.value = ga, l.value = t.label === "" ? "Delete" : t.label) : t.btnType === "icon" && t.btnIcon && (o.value = t.btnIcon), t.btnType === "view" ? s.value = "po-stroke-emerald-400" : t.btnType === "edit" ? s.value = "po-stroke-blue-400" : t.btnType === "delete" ? s.value = "po-stroke-red-400" : s.value = t.iconColor, (a, n) => (p(), d("span", null, [
      a.btnType === "icon" || a.btnType === "delete" || a.btnType === "edit" || a.btnType === "view" ? (p(), H(P(uo), {
        key: 0,
        text: l.value,
        placement: "bottom",
        strategy: "fixed"
      }, {
        default: B(() => [
          i("span", R4, [
            (p(), H(he(o.value), {
              class: L(["po-w-4 po-stroke-2", s.value])
            }, null, 8, ["class"]))
          ])
        ]),
        _: 1
      }, 8, ["text"])) : (p(), d("span", {
        key: 1,
        role: "button",
        class: L(["po-block po-text-sm genie-effect", a.textColor])
      }, C(a.label), 3))
    ]));
  }
}), H4 = { key: 0 }, N4 = {
  name: "Rufiyaa"
}, Z5 = /* @__PURE__ */ T({
  ...N4,
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
      o.amount !== null ? (p(), d("span", H4, C(t(o.amount)), 1)) : k("", !0)
    ]));
  }
}), q4 = {
  name: "PoHeading"
}, G5 = /* @__PURE__ */ T({
  ...q4,
  props: {
    text: { default: "" },
    type: { default: "h3" }
  },
  setup(e) {
    return (t, o) => (p(), H(he(t.type), { class: "po-text-base po-text-slate-600 po-font-semibold" }, {
      default: B(() => [
        ee(C(t.text), 1)
      ]),
      _: 1
    }));
  }
}), U4 = ["for"], Y4 = { class: "po-capitalize" }, W4 = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Z4 = { class: "po-relative po-mt-1" }, G4 = { class: "po-shrink-0 po-pr-1 po-inline-flex po-flex-wrap po-w-full po-gap-1 po-max-h-44" }, K4 = { class: "po-px-2 po-py-1 po-rounded-md po-text-sm po-text-slate-600 po-flex po-space-x-2 po-items-center po-bg-gradient-to-l po-from-slate-50 po-via-cyan-50 po-to-cyan-100/60 po-border po-border-cyan-200" }, X4 = ["onClick"], Q4 = ["id"], J4 = {
  key: 0,
  class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
}, e2 = ["onClick", "value"], t2 = {
  class: /* @__PURE__ */ L(["po-block po-truncate"])
}, o2 = {
  name: "PoMultiSelect"
}, K5 = /* @__PURE__ */ T({
  ...o2,
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
    const l = $(""), a = $([]), n = $(!1);
    function r(g) {
      a.value.splice(g, 1), v();
    }
    function u(g) {
      let S = l.value.split(",");
      g.key === "Enter" && 0 < l.value.length && (g.preventDefault(), S.forEach((x) => {
        var E;
        let I = (E = o.items) == null ? void 0 : E.find(
          (R) => R.name.toLowerCase() === x.trim().toLowerCase()
        );
        I && a.value.push(I);
      }), l.value = ""), g.key === "Backspace" && l.value.length === 0 && n.value && a.value.pop(), v();
    }
    const c = $([]);
    function v() {
      c.value = a.value.map((g) => g.id);
    }
    const { uniqueId: y, generateUniqueId: w } = Le(), b = $(o.id);
    Z(() => {
      o.id === "" && (w(), b.value = y.value), document.addEventListener("keydown", u);
    }), re(() => {
      document.removeEventListener("keydown", u);
    });
    const m = $(!1), f = z(
      () => {
        var g;
        return l.value === "" ? o.items : (g = o.items) == null ? void 0 : g.filter((S) => S.name.toLowerCase().includes(l.value.toLowerCase()));
      }
    );
    let h = $();
    Et(h, () => {
      m.value = !1;
    });
    function _(g) {
      a.value.push(g), l.value = "", v();
    }
    return Q(c, () => {
      t("update:modelValue", c.value);
    }), (g, S) => (p(), d("div", {
      ref_key: "multiSelectComponentRef",
      ref: h,
      class: L(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": g.display === "horizontal" }]])
    }, [
      i("label", {
        for: b.value,
        class: L([
          "po-text-sm po-font-medium po-flex po-items-center po-space-x-1",
          { "po-text-red-500": g.hasError },
          { "po-text-slate-700": !g.hasError }
        ])
      }, [
        i("span", Y4, C(g.label), 1),
        g.required ? (p(), d("span", W4, "*")) : k("", !0),
        V(Ne, { info: g.info }, null, 8, ["info"])
      ], 10, U4),
      i("div", Z4, [
        i("div", {
          class: L([
            "po-border po-p-1 po-min-h-[2.38rem] po-flex po-flex-wrap po-items-center focus-within:po-border-mpao-lightblue po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white sm:po-text-sm",
            s()
          ])
        }, [
          i("div", G4, [
            a.value.length > 0 ? (p(!0), d(F, { key: 0 }, G(a.value, (x, I) => (p(), d("span", K4, [
              i("span", null, C(x.name), 1),
              i("span", {
                onClick: () => r(I),
                role: "button",
                class: "po-cursor-pointer"
              }, [
                V(P(Qt), { class: "po-w-3 po-stroke-red-600 po-stroke-2" })
              ], 8, X4)
            ]))), 256)) : k("", !0),
            Oe(i("input", {
              id: b.value,
              "onUpdate:modelValue": S[0] || (S[0] = (x) => l.value = x),
              onFocus: S[1] || (S[1] = () => {
                m.value = !0, n.value = !0;
              }),
              onBlur: S[2] || (S[2] = () => n.value = !1),
              class: "po-border-0 po-outline-none po-ring-0 po-grow"
            }, null, 40, Q4), [
              [Mt, l.value]
            ])
          ])
        ], 2),
        m.value ? (p(), d("ul", J4, [
          (p(!0), d(F, null, G(f.value, (x) => (p(), d("li", {
            onClick: () => _(x),
            key: x.id,
            value: x.id,
            class: L([
              "po-relative po-select-none po-py-2 hover:po-bg-mpao-lightblue hover:po-text-white po-cursor-pointer po-pl-3 po-pr-9"
            ])
          }, [
            i("span", t2, C(x.name), 1)
          ], 8, e2))), 128))
        ])) : k("", !0)
      ]),
      V(je, { message: g.message }, null, 8, ["message"]),
      V(Ae, { "error-message": g.errorMessage }, null, 8, ["error-message"])
    ], 2));
  }
}), s2 = { class: "po-flex po-pl-5" }, l2 = /* @__PURE__ */ i("div", { class: "po-shrink-0 po-flex po-flex-col" }, [
  /* @__PURE__ */ i("div", { class: "po-w-[2px] po-shrink-0 po-h-10" }),
  /* @__PURE__ */ i("div", { class: "po-bg-gradient-to-t po-from-orange-400 po-via-red-300 po-to-blue-500 po-w-[2px] po-grow" }),
  /* @__PURE__ */ i("div", { class: "po-w-[2px] po-shrink-0 po-h-12" })
], -1), a2 = { class: "po-grow po-pl-5 po-pt-5 po-space-y-3" }, n2 = ["onClick"], r2 = { class: "-po-mt-1 po-flex po-space-x-3 po-items-center" }, i2 = { class: "po-block po-text-xs po-text-slate-400" }, p2 = { class: "po-text-xs po-text-slate-500 po-pt-1" }, u2 = {
  name: "PoTimeline"
}, X5 = /* @__PURE__ */ T({
  ...u2,
  props: {
    timeline: { default: null },
    clickable: { type: Boolean, default: !1 }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, s) => (p(), d("div", s2, [
      l2,
      i("div", a2, [
        (p(!0), d(F, null, G(o.timeline, (l) => (p(), d("div", {
          class: L(["po-px-2 po-pt-2 po-pb-6 po-relative po-group", [{ "po-cursor-pointer": o.clickable }]]),
          onClick: (a) => o.$emit("button-click", l)
        }, [
          i("span", {
            class: L(["po-rounded-full po-absolute po-flex po-items-center po-justify-center", [
              { "po-w-4 po-h-4 -po-left-[1.8rem] po-bg-blue-400": l.current },
              {
                "po-w-3 po-h-3 -po-left-[1.68rem] po-bg-green-400": !l.current
              }
            ]])
          }, [
            i("span", {
              class: L(["po-rounded-full po-bg-white", [
                { "po-w-2 po-h-2": l.current },
                { "po-w-1 po-h-1": !l.current }
              ]])
            }, null, 2)
          ], 2),
          i("div", null, [
            i("div", r2, [
              i("h4", {
                class: L(["po-text-sm po-text-slate-600 po-font-medium", [{ "group-hover:po-text-mpao-lightblue": o.clickable }]])
              }, C(l.label), 3),
              i("span", i2, C(P(aa)(l.date)), 1)
            ]),
            i("p", p2, C(l.description), 1)
          ])
        ], 10, n2))), 256))
      ])
    ]));
  }
}), d2 = {
  name: "PoTableCheckbox"
}, Q5 = /* @__PURE__ */ T({
  ...d2,
  props: {
    itemId: { default: null },
    isChecked: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["checkboxClicked"],
  setup(e, { emit: t }) {
    return (o, s) => (p(), d(F, null, [
      o.isChecked ? (p(), H(P(Ps), {
        key: 0,
        onClick: s[0] || (s[0] = te(() => o.$emit("checkboxClicked", o.itemId), ["prevent"])),
        class: "po-w-6 po-fill-mpao-lightblue po-cursor-pointer"
      })) : k("", !0),
      o.disabled ? (p(), H(P(Ps), {
        key: 1,
        class: "po-w-6 po-fill-slate-400"
      })) : k("", !0),
      !o.isChecked && !o.disabled ? (p(), d("span", {
        key: 2,
        onClick: s[1] || (s[1] = te(() => o.$emit("checkboxClicked", o.itemId), ["prevent"])),
        class: "po-h-5 po-w-5 po-rounded-full po-border-2 po-ml-[2px] po-block po-border-slate-300 po-cursor-pointer"
      })) : k("", !0)
    ], 64));
  }
}), c2 = { class: "po-p-4" }, f2 = { class: "po-flex po-items-start po-space-x-3" }, v2 = /* @__PURE__ */ i("span", { class: "po-sr-only" }, "Action icon", -1), h2 = { class: "po-w-0 po-flex-1 po-text-sm po-font-medium po-text-gray-400" }, m2 = { class: "po-ml-4 po-flex po-flex-shrink-0" }, b2 = /* @__PURE__ */ i("span", { class: "po-sr-only" }, "Close", -1), g2 = {
  name: "PoToast"
}, J5 = /* @__PURE__ */ T({
  ...g2,
  props: {
    show: { type: Boolean, default: !1 },
    actionType: { default: "" },
    message: { default: "" },
    hideIn: { default: 2e3 },
    size: { default: "sm" }
  },
  emits: ["toast-closed"],
  setup(e, { emit: t }) {
    const o = e, { show: s } = Se(o), l = $(!1);
    Q(s, () => {
      l.value = s.value, setTimeout(() => {
        a();
      }, o.hideIn);
    });
    function a() {
      l.value = !1, t("toast-closed", !0);
    }
    const n = z(() => o.message === "" && o.actionType !== "" ? o.actionType === "success" ? "Saved Successfully!" : o.actionType === "danger" ? "Item deleted!" : o.actionType === "warn" ? "Attention needed!" : "Wrong action" : o.message);
    return (r, u) => (p(), H(Dt, { to: "#po-notifications-alert" }, [
      V(Ze, {
        "enter-active-class": "po-transform po-ease-out po-duration-300 po-transition",
        "enter-from-class": "po-translate-y-2 po-opacity-0 sm:po-translate-y-0 sm:po-translate-x-2",
        "enter-to-class": "po-translate-y-0 po-opacity-100 sm:po-translate-x-0",
        "leave-active-class": "po-transition po-ease-in po-duration-100",
        "leave-from-class": "po-opacity-100",
        "leave-to-class": "po-opacity-0"
      }, {
        default: B(() => [
          l.value ? (p(), d("div", {
            key: 0,
            class: L(["po-pointer-events-auto po-w-full po-overflow-hidden po-rounded-lg po-bg-gray-900 po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5", [
              { "po-max-w-[260px]": r.size === "sm" },
              { "po-max-w-[360px]": r.size === "lg" },
              { "po-max-w-[560px]": r.size === "xl" }
            ]])
          }, [
            i("div", c2, [
              i("div", f2, [
                r.actionType !== "" ? (p(), d("div", {
                  key: 0,
                  class: L(["po-inline-flex po-items-center po-justify-center po-flex-shrink-0 po-w-6 po-h-6 po-rounded-lg", [
                    {
                      "po-bg-mpao-green po-text-green-100": r.actionType === "success"
                    },
                    { "po-bg-mpao-red po-text-red-100": r.actionType === "danger" },
                    {
                      "po-bg-mpao-orange po-text-orange-100": r.actionType === "warn"
                    }
                  ]])
                }, [
                  r.actionType === "success" ? (p(), H(P(Gi), {
                    key: 0,
                    class: "po-w-4 po-h-4"
                  })) : k("", !0),
                  r.actionType === "danger" ? (p(), H(P(ep), {
                    key: 1,
                    class: "po-w-4 po-h-4"
                  })) : k("", !0),
                  r.actionType === "warn" ? (p(), H(P(Xi), {
                    key: 2,
                    class: "po-w-4 po-h-4"
                  })) : k("", !0),
                  v2
                ], 2)) : k("", !0),
                i("p", h2, C(n.value), 1),
                i("div", m2, [
                  i("button", {
                    type: "button",
                    onClick: a,
                    class: "po-inline-flex po-rounded-md po-bg-gray-900 po-text-gray-400 hover:po-text-gray-300 hover:po-bg-gray-700 po-transition-colors po-duration-150 po-ease-out focus:po-outline-none focus:po-ring-2 focus:po-ring-indigo-500 focus:po-ring-offset-2"
                  }, [
                    b2,
                    V(P(Ml), {
                      class: "po-h-5 po-w-5",
                      "aria-hidden": "true"
                    })
                  ])
                ])
              ])
            ])
          ], 2)) : k("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), y2 = ["for"], w2 = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, _2 = { class: "po-relative po-mt-1" }, $2 = {
  key: 1,
  class: "po-absolute po-top-0 po-left-0 po-right-0 po-bottom-0 po-overflow-hidden po-bg-white po-rounded-md po-border po-border-slate-300 po-flex po-items-center"
}, x2 = { class: "po-grow" }, V2 = ["id"], k2 = ["onMousedown"], C2 = ["onMousedown"], S2 = {
  key: 0,
  class: "po-text-sm po-text-slate-600 po-p-4 po-block"
}, P2 = {
  name: "PoSelectApi"
}, ev = /* @__PURE__ */ T({
  ...P2,
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
  emits: ["search", "selected", "loadmore"],
  setup(e, { emit: t }) {
    const o = e, s = $(), l = $(!1), a = $(!1), n = $([]);
    Q(o, (S, x) => {
      n.value = o.options;
    });
    const r = $(null);
    Et(r, () => {
      l.value = !!a.value;
    });
    function u() {
      a.value = !1, setTimeout(() => {
        l.value = !1;
      }, 100);
    }
    const { uniqueId: c, generateUniqueId: v } = Le(), y = $(o.id);
    Z(() => {
      o.id === "" && (v(), y.value = c.value);
    });
    const w = $();
    function b() {
      t("search", w.value);
    }
    const m = $(null);
    function f(S) {
      m.value = S, t("selected", S), l.value = !!a.value;
    }
    function h() {
      t("loadmore", !0);
    }
    const _ = $();
    let g;
    return Z(() => {
      g = Bt(s.value, _.value, {
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
    }), re(() => {
      g && g.destroy();
    }), (S, x) => (p(), d("div", {
      ref_key: "containerRef",
      ref: r,
      class: L(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": S.display === "horizontal" }]])
    }, [
      i("label", {
        for: y.value,
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700"
      }, [
        i("span", null, C(S.label), 1),
        S.required ? (p(), d("span", w2, "*")) : k("", !0),
        V(Ne, { info: S.info }, null, 8, ["info"])
      ], 8, y2),
      i("div", _2, [
        i("div", null, [
          S.loading ? (p(), H(at, {
            key: 0,
            class: "po-right-0 po-top-4",
            absolute: !0
          })) : k("", !0),
          m.value !== null && S.showSelected ? (p(), d("div", $2, [
            i("div", x2, [
              X(S.$slots, "selectedOption", dt(ct(m.value)), () => [
                ee(C(m.value), 1)
              ])
            ]),
            i("span", {
              class: "po-shrink-0 po-p-1 po-cursor-pointer",
              onMousedown: x[0] || (x[0] = te((I) => {
                m.value = null, w.value = "";
              }, ["stop"]))
            }, [
              V(P(Qt), { class: "po-w-4 po-stroke-2 po-stroke-slate-400" })
            ], 32)
          ])) : k("", !0),
          Oe(i("input", {
            type: "text",
            name: "",
            id: y.value,
            ref_key: "selectBox",
            ref: s,
            "onUpdate:modelValue": x[1] || (x[1] = (I) => w.value = I),
            onInput: b,
            onFocus: x[2] || (x[2] = (I) => {
              a.value = !0, l.value = !0;
            }),
            onBlur: u,
            class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm"
          }, null, 40, V2), [
            [Mt, w.value]
          ])
        ]),
        Oe(i("div", {
          ref_key: "popper",
          ref: _,
          class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
        }, [
          n.value && n.value.length > 0 ? (p(), d(F, { key: 0 }, [
            (p(!0), d(F, null, G(n.value, (I) => (p(), d("div", {
              onMousedown: te((E) => f(I), ["stop"])
            }, [
              X(S.$slots, "option", dt(ct(I)), () => [
                ee(C(I), 1)
              ])
            ], 40, k2))), 256)),
            S.showMoreBtn ? (p(), d("span", {
              key: 0,
              role: "button",
              onMousedown: te(h, ["stop"]),
              class: "po-text-sm po-text-semibold po-text-mpao-lightblue po-block po-text-center po-py-2 hover:po-bg-slate-50 po-transition-colors po-duration-150 po-ease-out"
            }, "More", 40, C2)) : k("", !0)
          ], 64)) : (p(), d(F, { key: 1 }, [
            S.emptyMessage ? (p(), d("span", S2, C(S.emptyMessage), 1)) : k("", !0)
          ], 64))
        ], 512), [
          [
            Tt,
            l.value && n.value.length > 0 || l.value && S.emptyMessage
          ]
        ]),
        V(je, { message: S.message }, null, 8, ["message"]),
        V(Ae, { "error-message": S.errorMessage }, null, 8, ["error-message"])
      ])
    ], 2));
  }
}), O2 = { class: "po-bg-blue-300/20 po-border po-border-blue-200 po-p-3 po-mb-5 po-rounded-md po-text-sm sm:po-space-x-2 po-flex po-items-center po-flex-wrap" }, L2 = { class: "po-text-blue-500" }, M2 = {
  name: "PoMessage"
}, tv = /* @__PURE__ */ T({
  ...M2,
  props: {
    msgType: { default: "info" },
    message: { default: "" },
    btnName: { default: "" },
    btnAction: { default: "" }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, s) => (p(), d("div", O2, [
      i("span", L2, C(o.message), 1),
      o.btnName !== "" ? (p(), d("span", {
        key: 0,
        role: "button",
        onClick: s[0] || (s[0] = (l) => o.$emit("button-click", o.btnAction)),
        class: "po-text-blue-600 po-underline po-font-medium po-text-xs"
      }, C(o.btnName), 1)) : k("", !0)
    ]));
  }
}), T2 = {
  key: 0,
  class: "po-flex md:po-justify-end"
}, D2 = ["onClick"], I2 = { class: "po-text-xl po-font-medium po-text-slate-600 po-flex po-items-center po-space-x-1" }, z2 = {
  name: "PoPageStats"
}, ov = /* @__PURE__ */ T({
  ...z2,
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
    return (s, l) => s.stats !== null ? (p(), d("div", T2, [
      i("div", {
        class: L(["po-bg-slate-50 po-shadow-sm po-rounded-xl po-divide-x po-divide-slate-200 po-flex", s.padding])
      }, [
        (p(!0), d(F, null, G(s.stats, (a) => (p(), d("div", {
          class: L(["po-px-4 po-group", { "po-cursor-pointer": s.clickable }]),
          onClick: (n) => s.$emit("stat-click", a)
        }, [
          i("span", I2, [
            a.icon ? (p(), d("span", {
              key: 0,
              class: L(["po-w-5 po-h-5", o(a)])
            }, [
              (p(), H(he(a.icon)))
            ], 2)) : k("", !0),
            i("span", {
              class: L(["po-text-xl po-font-medium po-text-slate-600", { "group-hover:po-text-mpao-lightblue": s.clickable }])
            }, C(a.value), 3)
          ]),
          i("span", {
            class: L(["po-text-sm po-text-slate-500 po-block", { "group-hover:po-text-mpao-lightblue": s.clickable }])
          }, C(a.label), 3)
        ], 10, D2))), 256))
      ], 2)
    ])) : k("", !0);
  }
}), B2 = {
  name: "PoTooltip"
}, uo = /* @__PURE__ */ T({
  ...B2,
  props: {
    text: { default: "" },
    placement: { default: "bottom" },
    strategy: { default: "absolute" }
  },
  setup(e) {
    const t = e, o = $(), s = $(), l = $(!1);
    let a = null;
    Z(() => {
      o.value && s.value && setTimeout(() => {
        a = Bt(o.value, s.value, {
          placement: t.placement,
          strategy: t.strategy
        });
      }, 320);
    }), re(() => {
      a && (a.destroy(), a = null);
    });
    function n() {
      l.value = !0;
    }
    function r() {
      l.value = !1;
    }
    return xe.on("sidebarOpen", (u) => {
      setTimeout(() => {
        a && a.update();
      }, 320);
    }), (u, c) => (p(), d("span", {
      ref_key: "trigger",
      ref: o,
      onMouseover: n,
      onMouseleave: r
    }, [
      X(u.$slots, "default", {}, () => [
        ee("Tooltip")
      ]),
      (p(), H(Dt, { to: "body" }, [
        Oe(i("div", {
          ref_key: "popper",
          ref: s,
          class: L(["po-bg-slate-700 po-text-xs po-z-50 po-transition-opacity po-duration-100 po-ease-linear po-text-slate-50 po-rounded-md po-px-2 po-py-1 po-shadow-md", [{ "po-opacity-0": !l.value }, { "po-opacity-100": l.value }]])
        }, C(u.text), 3), [
          [Tt, u.text]
        ])
      ]))
    ], 544));
  }
}), E2 = ["for"], A2 = { class: "po-capitalize" }, j2 = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, R2 = ["name", "id", "value", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], F2 = {
  key: 0,
  class: "po-text-sm po-grow po-text-slate-500 lg:po-min-h-[40px] po-flex po-items-center"
}, H2 = { key: 0 }, N2 = { key: 1 }, q2 = ["for"], U2 = {
  key: 2,
  class: "po-text-sm po-grow po-text-slate-500 lg:po-min-h-[40px] po-flex po-items-center"
}, Y2 = /* @__PURE__ */ i("span", null, "Uploading...", -1), W2 = [
  Y2
], Z2 = {
  key: 3,
  class: "po-shrink-0 po-relative po-top-[3px]"
}, G2 = {
  name: "PoUpload"
}, sv = /* @__PURE__ */ T({
  ...G2,
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
    const o = e, s = $("initial"), { uniqueId: l, generateUniqueId: a } = Le(), n = $(o.id);
    Z(() => {
      o.id === "" && (a(), n.value = l.value);
    });
    const r = $(!1), u = (f) => {
      f.preventDefault(), r.value = !0;
    }, c = () => {
      r.value = !1;
    }, v = (f) => {
      var _;
      f.preventDefault(), r.value = !1;
      const h = (_ = f.dataTransfer) == null ? void 0 : _.files;
      h && h.length > 0 && w(h);
    }, y = (f) => {
      const _ = f.target.files;
      _ && _.length > 0 && w(_);
    };
    function w(f) {
      s.value = "uploading", fetch(`${m()}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${o == null ? void 0 : o.token}`
        },
        body: b(f)
      }).then((h) => {
        s.value = "initial", t("uploaded", h);
      });
    }
    function b(f) {
      let h = new FormData();
      for (const _ of f)
        h.append("files", _);
      return h.append("payload", JSON.stringify(o.payload)), h;
    }
    function m() {
      return o == null || o.url, o == null ? void 0 : o.url;
    }
    return (f, h) => (p(), d("div", {
      class: L(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": f.display === "horizontal" }]])
    }, [
      i("label", {
        disabled: "",
        for: `${n.value}-wheel`,
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700 po-mb-1"
      }, [
        i("span", A2, C(f.label), 1),
        f.required ? (p(), d("span", j2, "*")) : k("", !0),
        V(Ne, { info: f.info }, null, 8, ["info"])
      ], 8, E2),
      i("input", Ie({
        type: "file",
        name: n.value,
        id: n.value,
        value: f.modelValue,
        disabled: f.disabled,
        required: f.required,
        "aria-describedby": n.value,
        "aria-required": f.required,
        "aria-disabled": f.disabled
      }, f.$attrs, {
        ref: "fileInput",
        class: "po-hidden",
        onChange: y
      }), null, 16, R2),
      i("div", {
        class: L(["po-border po-border-dashed po-rounded-md po-p-3 po-flex po-items-center po-space-x-4 po-transition-colors po-duration-150 po-ease-out", [
          { "po-border-slate-400/60": !r.value },
          { "po-border-mpao-lightblue": r.value }
        ]]),
        onDragover: u,
        onDragleave: c,
        onDrop: v
      }, [
        i("span", {
          class: L(["po-w-8 po-h-8 po-shrink-0 po-flex po-items-center po-justify-center po-rounded-md", [
            { "po-bg-slate-100 po-text-slate-500": !r.value },
            { "po-bg-blue-50 po-text-blue-500": r.value }
          ]])
        }, [
          V(P(va), { class: "po-w-5 po-stroke-current" })
        ], 2),
        s.value === "initial" ? (p(), d("span", F2, [
          r.value ? (p(), d("span", H2, C(f.dragOverText), 1)) : (p(), d("span", N2, C(f.dragAreaText), 1))
        ])) : k("", !0),
        s.value === "initial" ? (p(), d("label", {
          key: 1,
          for: n.value,
          class: "po-cursor-pointer po-transition-colors po-duration-150 po-ease-out po-shrink-0 po-text-sm po-text-mpao-lightblue po-font-meidum hover:po-text-purple-600 po-px-3 po-py-1"
        }, "Upload file", 8, q2)) : k("", !0),
        s.value === "uploading" ? (p(), d("span", U2, W2)) : k("", !0),
        s.value === "uploading" ? (p(), d("div", Z2, [
          V(at)
        ])) : k("", !0)
      ], 34),
      V(je, { message: f.message }, null, 8, ["message"]),
      V(Ae, { "error-message": f.errorMessage }, null, 8, ["error-message"])
    ], 2));
  }
}), K2 = {
  name: "PoWrap"
}, X2 = /* @__PURE__ */ i("div", {
  "aria-live": "assertive",
  class: "po-pointer-events-none po-fixed po-inset-0 po-flex po-items-start po-px-4 po-py-6 sm:po-p-6 po-z-[60]"
}, [
  /* @__PURE__ */ i("div", {
    class: "po-flex po-w-full po-flex-col po-items-end po-space-y-4 sm:po-items-end po-pt-[55px]",
    id: "po-notifications-alert"
  })
], -1), Q2 = { class: "po-h-full po-flex" };
function J2(e, t, o, s, l, a) {
  return p(), d(F, null, [
    X2,
    i("div", Q2, [
      X(e.$slots, "default")
    ])
  ], 64);
}
const lv = /* @__PURE__ */ Ht(K2, [["render", J2]]), e5 = { class: "po-grid po-grid-cols-1 md:po-grid-cols-3 lg:po-grid-cols-4 po-gap-3" }, t5 = { class: "po-flex po-items-end" }, o5 = {
  name: "PoFilter"
}, av = /* @__PURE__ */ T({
  ...o5,
  props: {
    filters: { default: null },
    btnLabel: { default: "Filter" },
    addToUrl: { type: Boolean, default: !0 },
    btnDisabled: { type: Boolean, default: !1 },
    hasClear: { type: Boolean, default: !1 }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    const o = e, s = $(o.filters), l = $(!1);
    function a() {
      if (o.addToUrl) {
        const r = new URLSearchParams(window.location.search);
        for (const v in s.value)
          if (Object.prototype.hasOwnProperty.call(s.value, v)) {
            const y = String(s.value[v]);
            y.trim() !== "" ? r.set(v, y) : r.delete(v);
          }
        const c = `${window.location.href.split("?")[0]}?${r.toString()}`;
        history.pushState({}, "", c), l.value = !!o.hasClear;
      }
      t("button-click", s.value);
    }
    function n() {
      const r = window.location.href.split("?")[0];
      history.pushState({}, "", r), l.value = !1;
    }
    return (r, u) => (p(), d("div", e5, [
      X(r.$slots, "default"),
      i("div", t5, [
        l.value ? (p(), H(P(gt), {
          key: 1,
          label: "Clear",
          onButtonClick: n
        })) : (p(), H(P(gt), {
          key: 0,
          label: r.btnLabel,
          onButtonClick: a,
          disabled: r.btnDisabled
        }, null, 8, ["label", "disabled"]))
      ])
    ]));
  }
}), s5 = { class: "po-grow po-flex po-items-end po-space-x-2" }, l5 = { class: "po-grow po-w-full po-max-w-lg lg:po-max-w-xs" }, a5 = /* @__PURE__ */ i("label", {
  for: "search",
  class: "po-sr-only"
}, "Search", -1), n5 = { class: "po-relative po-group" }, r5 = { class: "po-pointer-events-none po-absolute po-inset-y-0 po-left-0 po-flex po-items-center po-pl-3 po-z-10 po-top-[5px]" }, i5 = { class: "po-shrink-0" }, p5 = { class: "po-flex po-items-center po-space-x-2" }, u5 = {
  name: "PoSearch"
}, nv = /* @__PURE__ */ T({
  ...u5,
  props: {
    modelValue: { default: "" },
    placeholder: { default: "Search" },
    btnLabel: { default: "Search" },
    showBtn: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "button-click"],
  setup(e, { emit: t }) {
    const o = (n) => {
      let r = n.target.value;
      t("update:modelValue", r);
    }, { uniqueId: s, generateUniqueId: l } = Le(), a = $("card-search-field");
    return Z(() => {
      l(), a.value = s.value;
    }), (n, r) => (p(), d("div", s5, [
      i("div", l5, [
        a5,
        i("div", n5, [
          i("div", r5, [
            V(P(Xt), {
              class: "po-h-5 po-w-5 po-text-gray-400 group-focus-within:po-text-mpao-lightblue",
              "aria-hidden": "true"
            })
          ]),
          V(P(Td), {
            placeholder: n.placeholder,
            styleClasses: "po-py-2 po-pl-10 po-pr-3",
            value: n.modelValue,
            onInput: o
          }, null, 8, ["placeholder", "value"])
        ])
      ]),
      i("div", i5, [
        V(P(gt), {
          "action-type": n.modelValue === "" ? "ghost" : "default",
          onClick: r[0] || (r[0] = te((u) => n.$emit("button-click", n.modelValue), ["prevent"]))
        }, {
          label: B(() => [
            i("span", p5, [
              V(P(As), { class: "-po-ml-1 po-w-4 po-h-4 po-stroke-current" }),
              i("span", null, C(n.btnLabel), 1)
            ])
          ]),
          _: 1
        }, 8, ["action-type"])
      ])
    ]));
  }
}), d5 = { class: "po-font-semibold po-text-white" }, c5 = {
  name: "PoAvatar"
}, rv = /* @__PURE__ */ T({
  ...c5,
  props: {
    src: { default: "" },
    name: { default: "" },
    avatarSize: { default: "sm" },
    bgColor: {},
    isLoading: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, o = z(() => {
      var v, y;
      const c = ((y = (v = t.name) == null ? void 0 : v.match(/\b[A-Z]/g)) == null ? void 0 : y.join("")) || "";
      return c.length === 1 ? t.name.substring(0, 2) : c;
    }), s = z(() => t.avatarSize === "xs" ? "po-h-6 po-w-6 po-text-xs" : t.avatarSize === "sm" ? "po-h-8 po-w-8 po-text-sm" : t.avatarSize === "md" ? "po-h-10 po-w-10 po-font-medium" : t.avatarSize === "lg" ? "po-h-12 po-w-12 po-text-lg" : t.avatarSize === "xl" ? "po-h-14 po-w-14 po-text-xl" : null), l = [
      "po-bg-green-500",
      "po-bg-yellow-500",
      "po-bg-teal-500",
      "po-bg-cyan-500",
      "po-bg-sky-500",
      "po-bg-blue-500",
      "po-bg-rose-500",
      "po-bg-stone-500"
    ], a = z(() => {
      const c = Math.floor(Math.random() * l.length);
      return l[c];
    }), { isLoading: n } = Se(t), r = $(!1);
    Q(n, () => {
      u();
    }), Z(() => {
      u();
    });
    function u() {
      r.value = n.value;
    }
    return (c, v) => r.value ? (p(), d("span", {
      key: 1,
      class: L(["po-block loading-placeholder po-rounded-full", [s.value]])
    }, null, 2)) : (p(), d(F, { key: 0 }, [
      c.src ? (p(), d("span", {
        key: 0,
        class: L(["po-inline-flex po-rounded-full po-bg-cover po-bg-center", [s.value]]),
        style: ft(`background-image:url(${c.src})`)
      }, null, 6)) : (p(), d("span", {
        key: 1,
        class: L(["po-inline-flex po-items-center po-justify-center po-rounded-full", [s.value, a.value]])
      }, [
        i("span", d5, C(o.value), 1)
      ], 2))
    ], 64));
  }
});
export {
  g5 as PoActionBar,
  B5 as PoAlert,
  Ia as PoAppIcon,
  Zr as PoAppTray,
  rv as PoAvatar,
  gt as PoButton,
  y5 as PoCard,
  w5 as PoCardSearch,
  N5 as PoCardTabs,
  T5 as PoChatLogItem,
  S5 as PoCheckbox,
  z5 as PoCommandPalette,
  H5 as PoConsent,
  R5 as PoContentArea,
  Y5 as PoDRStatus,
  Cd as PoDescriptionList,
  j5 as PoDownloadFileList,
  U5 as PoEmpty,
  av as PoFilter,
  P5 as PoFooter,
  O5 as PoFormStatusMessage,
  G5 as PoHeading,
  Td as PoInputField,
  x5 as PoInputFile,
  F5 as PoLoading,
  E5 as PoLogs,
  A5 as PoMain,
  tv as PoMessage,
  Ft as PoModal,
  V5 as PoMonthYearPicker,
  K5 as PoMultiSelect,
  D5 as PoNotification,
  ni as PoNotificationHub,
  ov as PoPageStats,
  _5 as PoPageTitle,
  ju as PoPagination,
  Ti as PoProfileSwitcher,
  L5 as PoRadioInput,
  nv as PoSearch,
  Nn as PoSearchBar,
  C5 as PoSectionMenu,
  ev as PoSelectApi,
  Hp as PoSelectField,
  b5 as PoSidebarDrawer,
  I5 as PoSlideover,
  M5 as PoStatsBlock,
  $5 as PoTable,
  W5 as PoTableAction,
  Q5 as PoTableCheckbox,
  q5 as PoTabs,
  su as PoTextarea,
  X5 as PoTimeline,
  J5 as PoToast,
  k5 as PoToggle,
  uo as PoTooltip,
  h5 as PoTopBar,
  sv as PoUpload,
  lv as PoWrap,
  Z5 as Rufiyaa
};
