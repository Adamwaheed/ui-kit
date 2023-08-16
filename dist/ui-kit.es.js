import { openBlock as p, createElementBlock as d, createElementVNode as r, defineComponent as T, ref as $, toRefs as Be, watch as ee, onMounted as Z, Fragment as F, renderList as K, normalizeClass as L, createVNode as C, unref as O, withCtx as z, renderSlot as X, createBlock as N, resolveDynamicComponent as he, createCommentVNode as V, computed as E, toDisplayString as k, onBeforeUnmount as Lo, onUnmounted as re, withDirectives as Pe, isRef as js, withKeys as Fs, vModelText as Pt, vShow as Ot, cloneVNode as Ns, h as oe, inject as de, provide as fe, watchEffect as ve, Teleport as Lt, reactive as Hs, shallowRef as Il, nextTick as Mo, toRaw as Ue, Transition as Ze, withModifiers as le, onBeforeMount as qs, onBeforeUpdate as Ys, onUpdated as To, mergeProps as Te, createTextVNode as J, pushScopeId as Us, popScopeId as Ws, withScopeId as Zs, markRaw as Gs, shallowReactive as Ks, resolveComponent as El, resolveDirective as Xs, normalizeStyle as Do, toHandlers as Qs, normalizeProps as ut, guardReactiveProps as dt, createStaticVNode as Js } from "vue";
import { f as il, c as ea, d as ae, u as ta, t as oa, a as la } from "./FormatDate-7fbb31e2.mjs";
function sa(e, t) {
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
function aa(e, t) {
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
function na(e, t) {
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
function ra(e, t) {
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
function ia(e, t) {
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
function pa(e, t) {
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
function ua(e, t) {
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
function da(e, t) {
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
function Bl(e, t) {
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
function zl(e, t) {
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
function ca(e, t) {
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
function bo(e, t) {
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
function fa(e, t) {
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
function va(e, t) {
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
function Io(e, t) {
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
function Al(e, t) {
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
function ha(e, t) {
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
function ma(e, t) {
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
function ba(e, t) {
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
function pl(e, t) {
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
function Wt(e, t) {
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
function ga(e) {
  return { all: e = e || /* @__PURE__ */ new Map(), on: function(t, o) {
    var l = e.get(t);
    l ? l.push(o) : e.set(t, [o]);
  }, off: function(t, o) {
    var l = e.get(t);
    l && (o ? l.splice(l.indexOf(o) >>> 0, 1) : e.set(t, []));
  }, emit: function(t, o) {
    var l = e.get(t);
    l && l.slice().map(function(s) {
      s(o);
    }), (l = e.get("*")) && l.slice().map(function(s) {
      s(t, o);
    });
  } };
}
const xe = ga(), ya = { class: "po-bg-mpao-blue po-fixed po-top-0 po-left-0 po-right-0 po-w-full po-z-50 po-flex" }, wa = { class: "po-shrink-0 po-px-3 po-pt-3" }, _a = { class: "po-flex po-flex-col po-justify-center po-items-center po-w-5 po-h-5 po-space-y-[3px]" }, $a = { class: "po-mx-auto po-max-w-full po-pr-4 po-grow sm:po-pr-4" }, xa = { class: "po-flex po-relative po-h-16 po-items-center po-justify-between po-space-x-12" }, Va = { class: "po-flex po-items-center po-space-x-3" }, ka = {
  key: 0,
  class: "po-block po-w-6 po-text-slate-100 md:po-hidden",
  role: "button"
}, Ca = {
  name: "PoTopBar"
}, l2 = /* @__PURE__ */ T({
  ...Ca,
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
    const o = e, l = $(""), s = $(""), a = $(!0), { avatar: n, logo: i } = Be(o);
    ee(n, () => {
      l.value = n.value;
    }), ee(i, () => {
      s.value = i.value;
    }), Z(() => {
      const y = localStorage.getItem("isSidebarOpen");
      y !== null && (a.value = JSON.parse(y), xe.emit("sidebarOpen", a.value));
    });
    function u(y) {
      t("profileSwitcherClick", y);
    }
    function c(y) {
      t("query", y);
    }
    function h(y) {
      t("onSearchClear", y);
    }
    function w() {
      a.value = !a.value, xe.emit("sidebarOpen", a.value), localStorage.setItem("isSidebarOpen", JSON.stringify(a.value));
    }
    return xe.on("sidebarOpen", (y) => {
      typeof y == "boolean" && (a.value = y);
    }), (y, b) => (p(), d("nav", ya, [
      r("div", wa, [
        r("button", {
          for: "sidebar-drawer-toggle",
          role: "button",
          class: "genie-effect po-flex po-items-center po-justify-center po-bg-white/5 po-rounded-full po-w-10 po-h-10 po-select-none po-text-slate-100",
          onClick: w
        }, [
          r("span", _a, [
            (p(), d(F, null, K(3, (m) => r("span", {
              key: m,
              class: L(["po-block po-rounded-full po-bg-slate-100 po-transition-all po-duration-150 po-ease-in-out", [
                { "po-w-5 po-h-[2px]": !a.value },
                { "po-w-[3px] po-h-[3px]": a.value }
              ]])
            }, null, 2)), 64))
          ])
        ])
      ]),
      r("div", $a, [
        r("div", xa, [
          C(O(Da), { "app-name": y.appName }, {
            icon: z(() => [
              X(y.$slots, "appIcon", {}, () => [
                y.appIcon ? (p(), N(he(y.appIcon), { key: 0 })) : V("", !0)
              ])
            ]),
            _: 3
          }, 8, ["app-name"]),
          y.hasSearch ? (p(), N(O(Nn), {
            key: 0,
            onQuery: c,
            onOnClear: h,
            "current-query": y.currentQuery,
            "show-tray": y.showSearchTray
          }, {
            default: z(() => [
              X(y.$slots, "searchTray")
            ]),
            _: 3
          }, 8, ["current-query", "show-tray"])) : V("", !0),
          r("div", Va, [
            y.hasSearch ? (p(), d("span", ka, [
              C(O(Io), { class: "po-stroke-current" })
            ])) : V("", !0),
            C(O(ni), {
              notifications: y.notifications,
              "has-new-notifications": y.hasNewNotifications
            }, null, 8, ["notifications", "has-new-notifications"]),
            C(O(Zr), {
              "app-list": y.appList,
              "open-in-new-tab": !0
            }, null, 8, ["app-list"]),
            C(O(Ti), {
              "user-object": y.userObject,
              avatar: l.value,
              logo: s.value,
              onButtonClick: u
            }, null, 8, ["user-object", "avatar", "logo"])
          ])
        ])
      ])
    ]));
  }
}), Sa = { class: "po-flex po-items-center po-justify-center po-space-x-3" }, Pa = { class: "po-w-8 po-text-slate-100 app-icon" }, Oa = { class: "po-font-light po-text-lg po-text-slate-100" }, La = { class: "po-hidden md:po-block" }, Ma = { class: "po-block md:po-hidden" }, Ta = {
  name: "PoAppIcon"
}, Da = /* @__PURE__ */ T({
  ...Ta,
  props: {
    appName: { default: "App Name" }
  },
  setup(e) {
    const t = e, o = E(() => {
      if (!t.appName)
        return "";
      const l = t.appName.match(/\b[A-Z]/g);
      if (!l)
        return "";
      let s = l.join("");
      return s.length === 1 ? t.appName.substring(0, 3) : s;
    });
    return (l, s) => (p(), d("div", Sa, [
      r("div", Pa, [
        X(l.$slots, "icon")
      ]),
      r("span", Oa, [
        r("span", La, k(l.appName), 1),
        r("span", Ma, k(o.value), 1)
      ])
    ]));
  }
});
var me = "top", ke = "bottom", Ce = "right", be = "left", Eo = "auto", Mt = [me, ke, Ce, be], ct = "start", Ct = "end", Ia = "clippingParents", Rl = "viewport", _t = "popper", Ea = "reference", ul = /* @__PURE__ */ Mt.reduce(function(e, t) {
  return e.concat([t + "-" + ct, t + "-" + Ct]);
}, []), jl = /* @__PURE__ */ [].concat(Mt, [Eo]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ct, t + "-" + Ct]);
}, []), Ba = "beforeRead", za = "read", Aa = "afterRead", Ra = "beforeMain", ja = "main", Fa = "afterMain", Na = "beforeWrite", Ha = "write", qa = "afterWrite", Ya = [Ba, za, Aa, Ra, ja, Fa, Na, Ha, qa];
function Ie(e) {
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
function rt(e) {
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
function Ua(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(o) {
    var l = t.styles[o] || {}, s = t.attributes[o] || {}, a = t.elements[o];
    !Ve(a) || !Ie(a) || (Object.assign(a.style, l), Object.keys(s).forEach(function(n) {
      var i = s[n];
      i === !1 ? a.removeAttribute(n) : a.setAttribute(n, i === !0 ? "" : i);
    }));
  });
}
function Wa(e) {
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
    Object.keys(t.elements).forEach(function(l) {
      var s = t.elements[l], a = t.attributes[l] || {}, n = Object.keys(t.styles.hasOwnProperty(l) ? t.styles[l] : o[l]), i = n.reduce(function(u, c) {
        return u[c] = "", u;
      }, {});
      !Ve(s) || !Ie(s) || (Object.assign(s.style, i), Object.keys(a).forEach(function(u) {
        s.removeAttribute(u);
      }));
    });
  };
}
const Za = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Ua,
  effect: Wa,
  requires: ["computeStyles"]
};
function De(e) {
  return e.split("-")[0];
}
var at = Math.max, Ut = Math.min, ft = Math.round;
function go() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Fl() {
  return !/^((?!chrome|android).)*safari/i.test(go());
}
function vt(e, t, o) {
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  var l = e.getBoundingClientRect(), s = 1, a = 1;
  t && Ve(e) && (s = e.offsetWidth > 0 && ft(l.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && ft(l.height) / e.offsetHeight || 1);
  var n = rt(e) ? _e(e) : window, i = n.visualViewport, u = !Fl() && o, c = (l.left + (u && i ? i.offsetLeft : 0)) / s, h = (l.top + (u && i ? i.offsetTop : 0)) / a, w = l.width / s, y = l.height / a;
  return {
    width: w,
    height: y,
    top: h,
    right: c + w,
    bottom: h + y,
    left: c,
    x: c,
    y: h
  };
}
function zo(e) {
  var t = vt(e), o = e.offsetWidth, l = e.offsetHeight;
  return Math.abs(t.width - o) <= 1 && (o = t.width), Math.abs(t.height - l) <= 1 && (l = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: o,
    height: l
  };
}
function Nl(e, t) {
  var o = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (o && Bo(o)) {
    var l = t;
    do {
      if (l && e.isSameNode(l))
        return !0;
      l = l.parentNode || l.host;
    } while (l);
  }
  return !1;
}
function je(e) {
  return _e(e).getComputedStyle(e);
}
function Ga(e) {
  return ["table", "td", "th"].indexOf(Ie(e)) >= 0;
}
function Xe(e) {
  return ((rt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Zt(e) {
  return Ie(e) === "html" ? e : (
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
function dl(e) {
  return !Ve(e) || // https://github.com/popperjs/popper-core/issues/837
  je(e).position === "fixed" ? null : e.offsetParent;
}
function Ka(e) {
  var t = /firefox/i.test(go()), o = /Trident/i.test(go());
  if (o && Ve(e)) {
    var l = je(e);
    if (l.position === "fixed")
      return null;
  }
  var s = Zt(e);
  for (Bo(s) && (s = s.host); Ve(s) && ["html", "body"].indexOf(Ie(s)) < 0; ) {
    var a = je(s);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function Tt(e) {
  for (var t = _e(e), o = dl(e); o && Ga(o) && je(o).position === "static"; )
    o = dl(o);
  return o && (Ie(o) === "html" || Ie(o) === "body" && je(o).position === "static") ? t : o || Ka(e) || t;
}
function Ao(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Vt(e, t, o) {
  return at(e, Ut(t, o));
}
function Xa(e, t, o) {
  var l = Vt(e, t, o);
  return l > o ? o : l;
}
function Hl() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function ql(e) {
  return Object.assign({}, Hl(), e);
}
function Yl(e, t) {
  return t.reduce(function(o, l) {
    return o[l] = e, o;
  }, {});
}
var Qa = function(t, o) {
  return t = typeof t == "function" ? t(Object.assign({}, o.rects, {
    placement: o.placement
  })) : t, ql(typeof t != "number" ? t : Yl(t, Mt));
};
function Ja(e) {
  var t, o = e.state, l = e.name, s = e.options, a = o.elements.arrow, n = o.modifiersData.popperOffsets, i = De(o.placement), u = Ao(i), c = [be, Ce].indexOf(i) >= 0, h = c ? "height" : "width";
  if (!(!a || !n)) {
    var w = Qa(s.padding, o), y = zo(a), b = u === "y" ? me : be, m = u === "y" ? ke : Ce, f = o.rects.reference[h] + o.rects.reference[u] - n[u] - o.rects.popper[h], v = n[u] - o.rects.reference[u], _ = Tt(a), g = _ ? u === "y" ? _.clientHeight || 0 : _.clientWidth || 0 : 0, S = f / 2 - v / 2, x = w[b], I = g - y[h] - w[m], B = g / 2 - y[h] / 2 + S, j = Vt(x, B, I), D = u;
    o.modifiersData[l] = (t = {}, t[D] = j, t.centerOffset = j - B, t);
  }
}
function en(e) {
  var t = e.state, o = e.options, l = o.element, s = l === void 0 ? "[data-popper-arrow]" : l;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || Nl(t.elements.popper, s) && (t.elements.arrow = s));
}
const tn = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Ja,
  effect: en,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ht(e) {
  return e.split("-")[1];
}
var on = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function ln(e, t) {
  var o = e.x, l = e.y, s = t.devicePixelRatio || 1;
  return {
    x: ft(o * s) / s || 0,
    y: ft(l * s) / s || 0
  };
}
function cl(e) {
  var t, o = e.popper, l = e.popperRect, s = e.placement, a = e.variation, n = e.offsets, i = e.position, u = e.gpuAcceleration, c = e.adaptive, h = e.roundOffsets, w = e.isFixed, y = n.x, b = y === void 0 ? 0 : y, m = n.y, f = m === void 0 ? 0 : m, v = typeof h == "function" ? h({
    x: b,
    y: f
  }) : {
    x: b,
    y: f
  };
  b = v.x, f = v.y;
  var _ = n.hasOwnProperty("x"), g = n.hasOwnProperty("y"), S = be, x = me, I = window;
  if (c) {
    var B = Tt(o), j = "clientHeight", D = "clientWidth";
    if (B === _e(o) && (B = Xe(o), je(B).position !== "static" && i === "absolute" && (j = "scrollHeight", D = "scrollWidth")), B = B, s === me || (s === be || s === Ce) && a === Ct) {
      x = ke;
      var M = w && B === I && I.visualViewport ? I.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        B[j]
      );
      f -= M - l.height, f *= u ? 1 : -1;
    }
    if (s === be || (s === me || s === ke) && a === Ct) {
      S = Ce;
      var P = w && B === I && I.visualViewport ? I.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        B[D]
      );
      b -= P - l.width, b *= u ? 1 : -1;
    }
  }
  var A = Object.assign({
    position: i
  }, c && on), q = h === !0 ? ln({
    x: b,
    y: f
  }, _e(o)) : {
    x: b,
    y: f
  };
  if (b = q.x, f = q.y, u) {
    var H;
    return Object.assign({}, A, (H = {}, H[x] = g ? "0" : "", H[S] = _ ? "0" : "", H.transform = (I.devicePixelRatio || 1) <= 1 ? "translate(" + b + "px, " + f + "px)" : "translate3d(" + b + "px, " + f + "px, 0)", H));
  }
  return Object.assign({}, A, (t = {}, t[x] = g ? f + "px" : "", t[S] = _ ? b + "px" : "", t.transform = "", t));
}
function sn(e) {
  var t = e.state, o = e.options, l = o.gpuAcceleration, s = l === void 0 ? !0 : l, a = o.adaptive, n = a === void 0 ? !0 : a, i = o.roundOffsets, u = i === void 0 ? !0 : i, c = {
    placement: De(t.placement),
    variation: ht(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: s,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, cl(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: n,
    roundOffsets: u
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, cl(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: u
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const an = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: sn,
  data: {}
};
var jt = {
  passive: !0
};
function nn(e) {
  var t = e.state, o = e.instance, l = e.options, s = l.scroll, a = s === void 0 ? !0 : s, n = l.resize, i = n === void 0 ? !0 : n, u = _e(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && c.forEach(function(h) {
    h.addEventListener("scroll", o.update, jt);
  }), i && u.addEventListener("resize", o.update, jt), function() {
    a && c.forEach(function(h) {
      h.removeEventListener("scroll", o.update, jt);
    }), i && u.removeEventListener("resize", o.update, jt);
  };
}
const rn = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: nn,
  data: {}
};
var pn = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ht(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return pn[t];
  });
}
var un = {
  start: "end",
  end: "start"
};
function fl(e) {
  return e.replace(/start|end/g, function(t) {
    return un[t];
  });
}
function Ro(e) {
  var t = _e(e), o = t.pageXOffset, l = t.pageYOffset;
  return {
    scrollLeft: o,
    scrollTop: l
  };
}
function jo(e) {
  return vt(Xe(e)).left + Ro(e).scrollLeft;
}
function dn(e, t) {
  var o = _e(e), l = Xe(e), s = o.visualViewport, a = l.clientWidth, n = l.clientHeight, i = 0, u = 0;
  if (s) {
    a = s.width, n = s.height;
    var c = Fl();
    (c || !c && t === "fixed") && (i = s.offsetLeft, u = s.offsetTop);
  }
  return {
    width: a,
    height: n,
    x: i + jo(e),
    y: u
  };
}
function cn(e) {
  var t, o = Xe(e), l = Ro(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, a = at(o.scrollWidth, o.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), n = at(o.scrollHeight, o.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), i = -l.scrollLeft + jo(e), u = -l.scrollTop;
  return je(s || o).direction === "rtl" && (i += at(o.clientWidth, s ? s.clientWidth : 0) - a), {
    width: a,
    height: n,
    x: i,
    y: u
  };
}
function Fo(e) {
  var t = je(e), o = t.overflow, l = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + s + l);
}
function Ul(e) {
  return ["html", "body", "#document"].indexOf(Ie(e)) >= 0 ? e.ownerDocument.body : Ve(e) && Fo(e) ? e : Ul(Zt(e));
}
function kt(e, t) {
  var o;
  t === void 0 && (t = []);
  var l = Ul(e), s = l === ((o = e.ownerDocument) == null ? void 0 : o.body), a = _e(l), n = s ? [a].concat(a.visualViewport || [], Fo(l) ? l : []) : l, i = t.concat(n);
  return s ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(kt(Zt(n)))
  );
}
function yo(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function fn(e, t) {
  var o = vt(e, !1, t === "fixed");
  return o.top = o.top + e.clientTop, o.left = o.left + e.clientLeft, o.bottom = o.top + e.clientHeight, o.right = o.left + e.clientWidth, o.width = e.clientWidth, o.height = e.clientHeight, o.x = o.left, o.y = o.top, o;
}
function vl(e, t, o) {
  return t === Rl ? yo(dn(e, o)) : rt(t) ? fn(t, o) : yo(cn(Xe(e)));
}
function vn(e) {
  var t = kt(Zt(e)), o = ["absolute", "fixed"].indexOf(je(e).position) >= 0, l = o && Ve(e) ? Tt(e) : e;
  return rt(l) ? t.filter(function(s) {
    return rt(s) && Nl(s, l) && Ie(s) !== "body";
  }) : [];
}
function hn(e, t, o, l) {
  var s = t === "clippingParents" ? vn(e) : [].concat(t), a = [].concat(s, [o]), n = a[0], i = a.reduce(function(u, c) {
    var h = vl(e, c, l);
    return u.top = at(h.top, u.top), u.right = Ut(h.right, u.right), u.bottom = Ut(h.bottom, u.bottom), u.left = at(h.left, u.left), u;
  }, vl(e, n, l));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Wl(e) {
  var t = e.reference, o = e.element, l = e.placement, s = l ? De(l) : null, a = l ? ht(l) : null, n = t.x + t.width / 2 - o.width / 2, i = t.y + t.height / 2 - o.height / 2, u;
  switch (s) {
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
  var c = s ? Ao(s) : null;
  if (c != null) {
    var h = c === "y" ? "height" : "width";
    switch (a) {
      case ct:
        u[c] = u[c] - (t[h] / 2 - o[h] / 2);
        break;
      case Ct:
        u[c] = u[c] + (t[h] / 2 - o[h] / 2);
        break;
    }
  }
  return u;
}
function St(e, t) {
  t === void 0 && (t = {});
  var o = t, l = o.placement, s = l === void 0 ? e.placement : l, a = o.strategy, n = a === void 0 ? e.strategy : a, i = o.boundary, u = i === void 0 ? Ia : i, c = o.rootBoundary, h = c === void 0 ? Rl : c, w = o.elementContext, y = w === void 0 ? _t : w, b = o.altBoundary, m = b === void 0 ? !1 : b, f = o.padding, v = f === void 0 ? 0 : f, _ = ql(typeof v != "number" ? v : Yl(v, Mt)), g = y === _t ? Ea : _t, S = e.rects.popper, x = e.elements[m ? g : y], I = hn(rt(x) ? x : x.contextElement || Xe(e.elements.popper), u, h, n), B = vt(e.elements.reference), j = Wl({
    reference: B,
    element: S,
    strategy: "absolute",
    placement: s
  }), D = yo(Object.assign({}, S, j)), M = y === _t ? D : B, P = {
    top: I.top - M.top + _.top,
    bottom: M.bottom - I.bottom + _.bottom,
    left: I.left - M.left + _.left,
    right: M.right - I.right + _.right
  }, A = e.modifiersData.offset;
  if (y === _t && A) {
    var q = A[s];
    Object.keys(P).forEach(function(H) {
      var Y = [Ce, ke].indexOf(H) >= 0 ? 1 : -1, W = [me, ke].indexOf(H) >= 0 ? "y" : "x";
      P[H] += q[W] * Y;
    });
  }
  return P;
}
function mn(e, t) {
  t === void 0 && (t = {});
  var o = t, l = o.placement, s = o.boundary, a = o.rootBoundary, n = o.padding, i = o.flipVariations, u = o.allowedAutoPlacements, c = u === void 0 ? jl : u, h = ht(l), w = h ? i ? ul : ul.filter(function(m) {
    return ht(m) === h;
  }) : Mt, y = w.filter(function(m) {
    return c.indexOf(m) >= 0;
  });
  y.length === 0 && (y = w);
  var b = y.reduce(function(m, f) {
    return m[f] = St(e, {
      placement: f,
      boundary: s,
      rootBoundary: a,
      padding: n
    })[De(f)], m;
  }, {});
  return Object.keys(b).sort(function(m, f) {
    return b[m] - b[f];
  });
}
function bn(e) {
  if (De(e) === Eo)
    return [];
  var t = Ht(e);
  return [fl(e), t, fl(t)];
}
function gn(e) {
  var t = e.state, o = e.options, l = e.name;
  if (!t.modifiersData[l]._skip) {
    for (var s = o.mainAxis, a = s === void 0 ? !0 : s, n = o.altAxis, i = n === void 0 ? !0 : n, u = o.fallbackPlacements, c = o.padding, h = o.boundary, w = o.rootBoundary, y = o.altBoundary, b = o.flipVariations, m = b === void 0 ? !0 : b, f = o.allowedAutoPlacements, v = t.options.placement, _ = De(v), g = _ === v, S = u || (g || !m ? [Ht(v)] : bn(v)), x = [v].concat(S).reduce(function(Le, Me) {
      return Le.concat(De(Me) === Eo ? mn(t, {
        placement: Me,
        boundary: h,
        rootBoundary: w,
        padding: c,
        flipVariations: m,
        allowedAutoPlacements: f
      }) : Me);
    }, []), I = t.rects.reference, B = t.rects.popper, j = /* @__PURE__ */ new Map(), D = !0, M = x[0], P = 0; P < x.length; P++) {
      var A = x[P], q = De(A), H = ht(A) === ct, Y = [me, ke].indexOf(q) >= 0, W = Y ? "width" : "height", U = St(t, {
        placement: A,
        boundary: h,
        rootBoundary: w,
        altBoundary: y,
        padding: c
      }), G = Y ? H ? Ce : be : H ? ke : me;
      I[W] > B[W] && (G = Ht(G));
      var ce = Ht(G), Q = [];
      if (a && Q.push(U[q] <= 0), i && Q.push(U[G] <= 0, U[ce] <= 0), Q.every(function(Le) {
        return Le;
      })) {
        M = A, D = !1;
        break;
      }
      j.set(A, Q);
    }
    if (D)
      for (var $e = m ? 3 : 1, Re = function(Me) {
        var Qe = x.find(function(Je) {
          var Se = j.get(Je);
          if (Se)
            return Se.slice(0, Me).every(function(et) {
              return et;
            });
        });
        if (Qe)
          return M = Qe, "break";
      }, Oe = $e; Oe > 0; Oe--) {
        var qe = Re(Oe);
        if (qe === "break")
          break;
      }
    t.placement !== M && (t.modifiersData[l]._skip = !0, t.placement = M, t.reset = !0);
  }
}
const yn = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: gn,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function hl(e, t, o) {
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
function ml(e) {
  return [me, Ce, ke, be].some(function(t) {
    return e[t] >= 0;
  });
}
function wn(e) {
  var t = e.state, o = e.name, l = t.rects.reference, s = t.rects.popper, a = t.modifiersData.preventOverflow, n = St(t, {
    elementContext: "reference"
  }), i = St(t, {
    altBoundary: !0
  }), u = hl(n, l), c = hl(i, s, a), h = ml(u), w = ml(c);
  t.modifiersData[o] = {
    referenceClippingOffsets: u,
    popperEscapeOffsets: c,
    isReferenceHidden: h,
    hasPopperEscaped: w
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": h,
    "data-popper-escaped": w
  });
}
const _n = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: wn
};
function $n(e, t, o) {
  var l = De(e), s = [be, me].indexOf(l) >= 0 ? -1 : 1, a = typeof o == "function" ? o(Object.assign({}, t, {
    placement: e
  })) : o, n = a[0], i = a[1];
  return n = n || 0, i = (i || 0) * s, [be, Ce].indexOf(l) >= 0 ? {
    x: i,
    y: n
  } : {
    x: n,
    y: i
  };
}
function xn(e) {
  var t = e.state, o = e.options, l = e.name, s = o.offset, a = s === void 0 ? [0, 0] : s, n = jl.reduce(function(h, w) {
    return h[w] = $n(w, t.rects, a), h;
  }, {}), i = n[t.placement], u = i.x, c = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += c), t.modifiersData[l] = n;
}
const Vn = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: xn
};
function kn(e) {
  var t = e.state, o = e.name;
  t.modifiersData[o] = Wl({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Cn = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: kn,
  data: {}
};
function Sn(e) {
  return e === "x" ? "y" : "x";
}
function Pn(e) {
  var t = e.state, o = e.options, l = e.name, s = o.mainAxis, a = s === void 0 ? !0 : s, n = o.altAxis, i = n === void 0 ? !1 : n, u = o.boundary, c = o.rootBoundary, h = o.altBoundary, w = o.padding, y = o.tether, b = y === void 0 ? !0 : y, m = o.tetherOffset, f = m === void 0 ? 0 : m, v = St(t, {
    boundary: u,
    rootBoundary: c,
    padding: w,
    altBoundary: h
  }), _ = De(t.placement), g = ht(t.placement), S = !g, x = Ao(_), I = Sn(x), B = t.modifiersData.popperOffsets, j = t.rects.reference, D = t.rects.popper, M = typeof f == "function" ? f(Object.assign({}, t.rects, {
    placement: t.placement
  })) : f, P = typeof M == "number" ? {
    mainAxis: M,
    altAxis: M
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, M), A = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, q = {
    x: 0,
    y: 0
  };
  if (B) {
    if (a) {
      var H, Y = x === "y" ? me : be, W = x === "y" ? ke : Ce, U = x === "y" ? "height" : "width", G = B[x], ce = G + v[Y], Q = G - v[W], $e = b ? -D[U] / 2 : 0, Re = g === ct ? j[U] : D[U], Oe = g === ct ? -D[U] : -j[U], qe = t.elements.arrow, Le = b && qe ? zo(qe) : {
        width: 0,
        height: 0
      }, Me = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Hl(), Qe = Me[Y], Je = Me[W], Se = Vt(0, j[U], Le[U]), et = S ? j[U] / 2 - $e - Se - Qe - P.mainAxis : Re - Se - Qe - P.mainAxis, bt = S ? -j[U] / 2 + $e + Se + Je + P.mainAxis : Oe + Se + Je + P.mainAxis, Ye = t.elements.arrow && Tt(t.elements.arrow), gt = Ye ? x === "y" ? Ye.clientTop || 0 : Ye.clientLeft || 0 : 0, pt = (H = A == null ? void 0 : A[x]) != null ? H : 0, yt = G + et - pt - gt, wt = G + bt - pt, po = Vt(b ? Ut(ce, yt) : ce, G, b ? at(Q, wt) : Q);
      B[x] = po, q[x] = po - G;
    }
    if (i) {
      var tl, As = x === "x" ? me : be, Rs = x === "x" ? ke : Ce, tt = B[I], Rt = I === "y" ? "height" : "width", ol = tt + v[As], ll = tt - v[Rs], uo = [me, be].indexOf(_) !== -1, sl = (tl = A == null ? void 0 : A[I]) != null ? tl : 0, al = uo ? ol : tt - j[Rt] - D[Rt] - sl + P.altAxis, nl = uo ? tt + j[Rt] + D[Rt] - sl - P.altAxis : ll, rl = b && uo ? Xa(al, tt, nl) : Vt(b ? al : ol, tt, b ? nl : ll);
      B[I] = rl, q[I] = rl - tt;
    }
    t.modifiersData[l] = q;
  }
}
const On = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Pn,
  requiresIfExists: ["offset"]
};
function Ln(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Mn(e) {
  return e === _e(e) || !Ve(e) ? Ro(e) : Ln(e);
}
function Tn(e) {
  var t = e.getBoundingClientRect(), o = ft(t.width) / e.offsetWidth || 1, l = ft(t.height) / e.offsetHeight || 1;
  return o !== 1 || l !== 1;
}
function Dn(e, t, o) {
  o === void 0 && (o = !1);
  var l = Ve(t), s = Ve(t) && Tn(t), a = Xe(t), n = vt(e, s, o), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = {
    x: 0,
    y: 0
  };
  return (l || !l && !o) && ((Ie(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Fo(a)) && (i = Mn(t)), Ve(t) ? (u = vt(t, !0), u.x += t.clientLeft, u.y += t.clientTop) : a && (u.x = jo(a))), {
    x: n.left + i.scrollLeft - u.x,
    y: n.top + i.scrollTop - u.y,
    width: n.width,
    height: n.height
  };
}
function In(e) {
  var t = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), l = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function s(a) {
    o.add(a.name);
    var n = [].concat(a.requires || [], a.requiresIfExists || []);
    n.forEach(function(i) {
      if (!o.has(i)) {
        var u = t.get(i);
        u && s(u);
      }
    }), l.push(a);
  }
  return e.forEach(function(a) {
    o.has(a.name) || s(a);
  }), l;
}
function En(e) {
  var t = In(e);
  return Ya.reduce(function(o, l) {
    return o.concat(t.filter(function(s) {
      return s.phase === l;
    }));
  }, []);
}
function Bn(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(o) {
      Promise.resolve().then(function() {
        t = void 0, o(e());
      });
    })), t;
  };
}
function zn(e) {
  var t = e.reduce(function(o, l) {
    var s = o[l.name];
    return o[l.name] = s ? Object.assign({}, s, l, {
      options: Object.assign({}, s.options, l.options),
      data: Object.assign({}, s.data, l.data)
    }) : l, o;
  }, {});
  return Object.keys(t).map(function(o) {
    return t[o];
  });
}
var bl = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function gl() {
  for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
    t[o] = arguments[o];
  return !t.some(function(l) {
    return !(l && typeof l.getBoundingClientRect == "function");
  });
}
function An(e) {
  e === void 0 && (e = {});
  var t = e, o = t.defaultModifiers, l = o === void 0 ? [] : o, s = t.defaultOptions, a = s === void 0 ? bl : s;
  return function(i, u, c) {
    c === void 0 && (c = a);
    var h = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, bl, a),
      modifiersData: {},
      elements: {
        reference: i,
        popper: u
      },
      attributes: {},
      styles: {}
    }, w = [], y = !1, b = {
      state: h,
      setOptions: function(_) {
        var g = typeof _ == "function" ? _(h.options) : _;
        f(), h.options = Object.assign({}, a, h.options, g), h.scrollParents = {
          reference: rt(i) ? kt(i) : i.contextElement ? kt(i.contextElement) : [],
          popper: kt(u)
        };
        var S = En(zn([].concat(l, h.options.modifiers)));
        return h.orderedModifiers = S.filter(function(x) {
          return x.enabled;
        }), m(), b.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!y) {
          var _ = h.elements, g = _.reference, S = _.popper;
          if (gl(g, S)) {
            h.rects = {
              reference: Dn(g, Tt(S), h.options.strategy === "fixed"),
              popper: zo(S)
            }, h.reset = !1, h.placement = h.options.placement, h.orderedModifiers.forEach(function(P) {
              return h.modifiersData[P.name] = Object.assign({}, P.data);
            });
            for (var x = 0; x < h.orderedModifiers.length; x++) {
              if (h.reset === !0) {
                h.reset = !1, x = -1;
                continue;
              }
              var I = h.orderedModifiers[x], B = I.fn, j = I.options, D = j === void 0 ? {} : j, M = I.name;
              typeof B == "function" && (h = B({
                state: h,
                options: D,
                name: M,
                instance: b
              }) || h);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Bn(function() {
        return new Promise(function(v) {
          b.forceUpdate(), v(h);
        });
      }),
      destroy: function() {
        f(), y = !0;
      }
    };
    if (!gl(i, u))
      return b;
    b.setOptions(c).then(function(v) {
      !y && c.onFirstUpdate && c.onFirstUpdate(v);
    });
    function m() {
      h.orderedModifiers.forEach(function(v) {
        var _ = v.name, g = v.options, S = g === void 0 ? {} : g, x = v.effect;
        if (typeof x == "function") {
          var I = x({
            state: h,
            name: _,
            instance: b,
            options: S
          }), B = function() {
          };
          w.push(I || B);
        }
      });
    }
    function f() {
      w.forEach(function(v) {
        return v();
      }), w = [];
    }
    return b;
  };
}
var Rn = [rn, Cn, an, Za, Vn, yn, On, tn, _n], Dt = /* @__PURE__ */ An({
  defaultModifiers: Rn
});
function It(e, t) {
  if (!e)
    return;
  const o = (l) => {
    l.target !== e.value && l.composedPath().includes(e.value) || typeof t == "function" && t();
  };
  return Z(() => {
    window.addEventListener("click", o);
  }), Lo(() => {
    window.removeEventListener("click", o);
  }), { listener: o };
}
const jn = ["placeholder", "onKeyup"], Fn = {
  name: "PoSearchBar"
}, Nn = /* @__PURE__ */ T({
  ...Fn,
  props: {
    placeholder: { default: "Search" },
    currentQuery: { default: "" },
    showTray: { type: Boolean, default: !1 }
  },
  emits: ["query", "onClear"],
  setup(e, { emit: t }) {
    const o = e, l = $(!1), s = $(null), a = $(), n = $(), i = $({
      viewStartIdx: 0,
      viewEndIdx: 0,
      visibleStartIdx: 0,
      visibleEndIdx: 0
    });
    let u = $(""), c;
    const h = (m) => {
      t("query", u.value);
    };
    function w() {
      t("query", u.value);
    }
    Z(() => {
      o.showTray && setTimeout(() => {
        c = Dt(a.value, n.value, {
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
    }), ee(u, async (m, f) => {
      m === "" && t("onClear", !0);
    }), It(s, () => {
      o.showTray && (l.value = !1);
    }), xe.on("sidebarOpen", (m) => {
      setTimeout(() => {
        c && o.showTray && c.update();
      }, 320);
    }), re(() => {
      c && o.showTray && c.destroy();
    });
    function y(m, f, v, _) {
      i.value.viewStartIdx = m, i.value.viewEndIdx = f, i.value.visibleStartIdx = v, i.value.visibleEndIdx = _;
    }
    function b() {
      c && c.update();
    }
    return (m, f) => (p(), d("div", {
      class: "po-flex-grow po-hidden po-relative md:po-block",
      ref_key: "containerRef",
      ref: s
    }, [
      r("span", {
        class: L(["po-absolute po-top-[5px] po-right-[5px] po-text-xs po-rounded-lg po-px-4 po-py-2 po-cursor-pointer po-transition-colors po-duration-150 po-ease-out", [
          {
            "po-text-slate-200 po-bg-slate-500/60 hover:po-bg-slate-500": !m.showTray || !l.value
          },
          {
            "po-text-slate-400 po-bg-slate-200/60 hover:po-bg-slate-200": m.showTray && l.value
          },
          { "po-hidden": O(u) === "" }
        ]]),
        onClick: w
      }, "Search", 2),
      Pe(r("input", {
        "onUpdate:modelValue": f[0] || (f[0] = (v) => js(u) ? u.value = v : u = v),
        type: "text",
        ref_key: "mainSearchBox",
        ref: a,
        id: "main-search",
        placeholder: m.placeholder,
        onKeyup: Fs(h, ["enter"]),
        onFocus: f[1] || (f[1] = (v) => l.value = !0),
        autocomplete: "off",
        class: L(["peer/search po-border-transparent po-text-sm po-ring-0 po-outline-none focus:po-outline-none focus:po-ring-0 po-transition-colors po-ease-linear po-duration-100 po-block po-w-full po-pl-10 po-p-2.5 po-appearance-none hover:po-border-white/40", [
          {
            "po-rounded-md po-border focus:po-border-slate-400 po-bg-transparent po-text-slate-100 po-placeholder-white/60": !m.showTray || !l.value
          },
          {
            "po-rounded-t-md po-border-2 focus:po-border-white po-bg-white po-text-slate-600": m.showTray && l.value
          }
        ]])
      }, null, 42, jn), [
        [Pt, O(u)]
      ]),
      r("div", {
        class: L(["po-absolute po-inset-y-0 po-left-0 po-flex po-items-center po-pl-3 po-pointer-events-none po-transition-all po-ease-linear po-duration-100 po-origin-center peer-hover/search:po-scale-105", [
          {
            "po-text-white/50 peer-focus/search:po-text-white/50": !m.showTray || !l.value
          },
          {
            "po-text-black/30 peer-focus/search:po-text-black/30": m.showTray && l.value
          }
        ]])
      }, [
        C(O(Io), { class: "po-w-5 po-h-5 po-stroke-current" })
      ], 2),
      Pe(r("div", {
        ref_key: "popper",
        ref: n,
        class: "po-absolute po-z-[51] po-mt-1 po-w-full po-rounded-b-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm",
        onResize: b,
        onUpdate: y
      }, [
        X(m.$slots, "default")
      ], 544), [
        [Ot, l.value && m.showTray]
      ])
    ], 512));
  }
});
function ue(e, t, ...o) {
  if (e in t) {
    let s = t[e];
    return typeof s == "function" ? s(...o) : s;
  }
  let l = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((s) => `"${s}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(l, ue), l;
}
var Ee = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Ee || {}), We = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(We || {});
function te({ visible: e = !0, features: t = 0, ourProps: o, theirProps: l, ...s }) {
  var a;
  let n = Gl(l, o), i = Object.assign(s, { props: n });
  if (e || t & 2 && n.static)
    return co(i);
  if (t & 1) {
    let u = (a = n.unmount) == null || a ? 0 : 1;
    return ue(u, { [0]() {
      return null;
    }, [1]() {
      return co({ ...s, props: { ...n, hidden: !0, style: { display: "none" } } });
    } });
  }
  return co(i);
}
function co({ props: e, attrs: t, slots: o, slot: l, name: s }) {
  var a, n;
  let { as: i, ...u } = Gt(e, ["unmount", "static"]), c = (a = o.default) == null ? void 0 : a.call(o, l), h = {};
  if (l) {
    let w = !1, y = [];
    for (let [b, m] of Object.entries(l))
      typeof m == "boolean" && (w = !0), m === !0 && y.push(b);
    w && (h["data-headlessui-state"] = y.join(" "));
  }
  if (i === "template") {
    if (c = Zl(c ?? []), Object.keys(u).length > 0 || Object.keys(t).length > 0) {
      let [w, ...y] = c ?? [];
      if (!Hn(w) || y.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${s} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(u).concat(Object.keys(t)).map((f) => f.trim()).filter((f, v, _) => _.indexOf(f) === v).sort((f, v) => f.localeCompare(v)).map((f) => `  - ${f}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((f) => `  - ${f}`).join(`
`)].join(`
`));
      let b = Gl((n = w.props) != null ? n : {}, u), m = Ns(w, b);
      for (let f in b)
        f.startsWith("on") && (m.props || (m.props = {}), m.props[f] = b[f]);
      return m;
    }
    return Array.isArray(c) && c.length === 1 ? c[0] : c;
  }
  return oe(i, Object.assign({}, u, h), { default: () => c });
}
function Zl(e) {
  return e.flatMap((t) => t.type === F ? Zl(t.children) : [t]);
}
function Gl(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, o = {};
  for (let l of e)
    for (let s in l)
      s.startsWith("on") && typeof l[s] == "function" ? (o[s] != null || (o[s] = []), o[s].push(l[s])) : t[s] = l[s];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(o).map((l) => [l, void 0])));
  for (let l in o)
    Object.assign(t, { [l](s, ...a) {
      let n = o[l];
      for (let i of n) {
        if (s instanceof Event && s.defaultPrevented)
          return;
        i(s, ...a);
      }
    } });
  return t;
}
function Kl(e) {
  let t = Object.assign({}, e);
  for (let o in t)
    t[o] === void 0 && delete t[o];
  return t;
}
function Gt(e, t = []) {
  let o = Object.assign({}, e);
  for (let l of t)
    l in o && delete o[l];
  return o;
}
function Hn(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let qn = 0;
function Yn() {
  return ++qn;
}
function pe() {
  return Yn();
}
var ne = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(ne || {});
function R(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Xl = Symbol("Context");
var se = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(se || {});
function Un() {
  return mt() !== null;
}
function mt() {
  return de(Xl, null);
}
function No(e) {
  fe(Xl, e);
}
function yl(e, t) {
  if (e)
    return e;
  let o = t ?? "button";
  if (typeof o == "string" && o.toLowerCase() === "button")
    return "button";
}
function Ho(e, t) {
  let o = $(yl(e.value.type, e.value.as));
  return Z(() => {
    o.value = yl(e.value.type, e.value.as);
  }), ve(() => {
    var l;
    o.value || R(t) && R(t) instanceof HTMLButtonElement && !((l = R(t)) != null && l.hasAttribute("type")) && (o.value = "button");
  }), o;
}
var Wn = Object.defineProperty, Zn = (e, t, o) => t in e ? Wn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, wl = (e, t, o) => (Zn(e, typeof t != "symbol" ? t + "" : t, o), o);
let Gn = class {
  constructor() {
    wl(this, "current", this.detect()), wl(this, "currentId", 0);
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
}, Et = new Gn();
function we(e) {
  if (Et.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = R(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
function Kn({ container: e, accept: t, walk: o, enabled: l }) {
  ve(() => {
    let s = e.value;
    if (!s || l !== void 0 && !l.value)
      return;
    let a = we(e);
    if (!a)
      return;
    let n = Object.assign((u) => t(u), { acceptNode: t }), i = a.createTreeWalker(s, NodeFilter.SHOW_ELEMENT, n, !1);
    for (; i.nextNode(); )
      o(i.currentNode);
  });
}
let wo = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var ie = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ie || {}), it = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(it || {}), Xn = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Xn || {});
function Kt(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(wo)).sort((t, o) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (o.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var qo = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(qo || {});
function Ql(e, t = 0) {
  var o;
  return e === ((o = we(e)) == null ? void 0 : o.body) ? !1 : ue(t, { [0]() {
    return e.matches(wo);
  }, [1]() {
    let l = e;
    for (; l !== null; ) {
      if (l.matches(wo))
        return !0;
      l = l.parentElement;
    }
    return !1;
  } });
}
function nt(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Qn = ["textarea", "input"].join(",");
function Jn(e) {
  var t, o;
  return (o = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Qn)) != null ? o : !1;
}
function Jl(e, t = (o) => o) {
  return e.slice().sort((o, l) => {
    let s = t(o), a = t(l);
    if (s === null || a === null)
      return 0;
    let n = s.compareDocumentPosition(a);
    return n & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function ge(e, t, { sorted: o = !0, relativeTo: l = null, skipElements: s = [] } = {}) {
  var a;
  let n = (a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? a : document, i = Array.isArray(e) ? o ? Jl(e) : e : Kt(e);
  s.length > 0 && i.length > 1 && (i = i.filter((m) => !s.includes(m))), l = l ?? n.activeElement;
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
      return Math.max(0, i.indexOf(l)) - 1;
    if (t & 4)
      return Math.max(0, i.indexOf(l)) + 1;
    if (t & 8)
      return i.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), h = t & 32 ? { preventScroll: !0 } : {}, w = 0, y = i.length, b;
  do {
    if (w >= y || w + y <= 0)
      return 0;
    let m = c + w;
    if (t & 16)
      m = (m + y) % y;
    else {
      if (m < 0)
        return 3;
      if (m >= y)
        return 1;
    }
    b = i[m], b == null || b.focus(h), w += u;
  } while (b !== n.activeElement);
  return t & 6 && Jn(b) && b.select(), b.hasAttribute("tabindex") || b.setAttribute("tabindex", "0"), 2;
}
function fo(e, t, o) {
  Et.isServer || ve((l) => {
    document.addEventListener(e, t, o), l(() => document.removeEventListener(e, t, o));
  });
}
function es(e, t, o = E(() => !0)) {
  function l(a, n) {
    if (!o.value || a.defaultPrevented)
      return;
    let i = n(a);
    if (i === null || !i.getRootNode().contains(i))
      return;
    let u = function c(h) {
      return typeof h == "function" ? c(h()) : Array.isArray(h) || h instanceof Set ? h : [h];
    }(e);
    for (let c of u) {
      if (c === null)
        continue;
      let h = c instanceof HTMLElement ? c : R(c);
      if (h != null && h.contains(i) || a.composed && a.composedPath().includes(h))
        return;
    }
    return !Ql(i, qo.Loose) && i.tabIndex !== -1 && a.preventDefault(), t(a, i);
  }
  let s = $(null);
  fo("mousedown", (a) => {
    var n, i;
    o.value && (s.value = ((i = (n = a.composedPath) == null ? void 0 : n.call(a)) == null ? void 0 : i[0]) || a.target);
  }, !0), fo("click", (a) => {
    s.value && (l(a, () => s.value), s.value = null);
  }, !0), fo("blur", (a) => l(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Fe = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Fe || {});
let Ge = T({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: o }) {
  return () => {
    let { features: l, ...s } = e, a = { "aria-hidden": (l & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(l & 4) === 4 && (l & 2) !== 2 && { display: "none" } } };
    return te({ ourProps: a, theirProps: s, slot: {}, attrs: o, slots: t, name: "Hidden" });
  };
} });
function ts(e = {}, t = null, o = []) {
  for (let [l, s] of Object.entries(e))
    ls(o, os(t, l), s);
  return o;
}
function os(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function ls(e, t, o) {
  if (Array.isArray(o))
    for (let [l, s] of o.entries())
      ls(e, os(t, l.toString()), s);
  else
    o instanceof Date ? e.push([t, o.toISOString()]) : typeof o == "boolean" ? e.push([t, o ? "1" : "0"]) : typeof o == "string" ? e.push([t, o]) : typeof o == "number" ? e.push([t, `${o}`]) : o == null ? e.push([t, ""]) : ts(o, t, e);
}
function ss(e) {
  var t;
  let o = (t = e == null ? void 0 : e.form) != null ? t : e.closest("form");
  if (o) {
    for (let l of o.elements)
      if (l.tagName === "INPUT" && l.type === "submit" || l.tagName === "BUTTON" && l.type === "submit" || l.nodeName === "INPUT" && l.type === "image") {
        l.click();
        return;
      }
  }
}
function as(e, t, o) {
  let l = $(o == null ? void 0 : o.value), s = E(() => e.value !== void 0);
  return [E(() => s.value ? e.value : l.value), function(a) {
    return s.value || (l.value = a), t == null ? void 0 : t(a);
  }];
}
function er() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function tr(e, t, o) {
  Et.isServer || ve((l) => {
    window.addEventListener(e, t, o), l(() => window.removeEventListener(e, t, o));
  });
}
var ye = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(ye || {});
function Yo() {
  let e = $(0);
  return tr("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Uo(e, t, o, l) {
  Et.isServer || ve((s) => {
    e = e ?? window, e.addEventListener(t, o, l), s(() => e.removeEventListener(t, o, l));
  });
}
function ns(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function rs(e) {
  if (!e)
    return /* @__PURE__ */ new Set();
  if (typeof e == "function")
    return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let o of e.value) {
    let l = R(o);
    l instanceof HTMLElement && t.add(l);
  }
  return t;
}
var is = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(is || {});
let $t = Object.assign(T({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: $(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: l }) {
  let s = $(null);
  l({ el: s, $el: s });
  let a = E(() => we(s)), n = $(!1);
  Z(() => n.value = !0), re(() => n.value = !1), lr({ ownerDocument: a }, E(() => n.value && Boolean(e.features & 16)));
  let i = sr({ ownerDocument: a, container: s, initialFocus: E(() => e.initialFocus) }, E(() => n.value && Boolean(e.features & 2)));
  ar({ ownerDocument: a, container: s, containers: e.containers, previousActiveElement: i }, E(() => n.value && Boolean(e.features & 8)));
  let u = Yo();
  function c(b) {
    let m = R(s);
    m && ((f) => f())(() => {
      ue(u.value, { [ye.Forwards]: () => {
        ge(m, ie.First, { skipElements: [b.relatedTarget] });
      }, [ye.Backwards]: () => {
        ge(m, ie.Last, { skipElements: [b.relatedTarget] });
      } });
    });
  }
  let h = $(!1);
  function w(b) {
    b.key === "Tab" && (h.value = !0, requestAnimationFrame(() => {
      h.value = !1;
    }));
  }
  function y(b) {
    if (!n.value)
      return;
    let m = rs(e.containers);
    R(s) instanceof HTMLElement && m.add(R(s));
    let f = b.relatedTarget;
    f instanceof HTMLElement && f.dataset.headlessuiFocusGuard !== "true" && (ps(m, f) || (h.value ? ge(R(s), ue(u.value, { [ye.Forwards]: () => ie.Next, [ye.Backwards]: () => ie.Previous }) | ie.WrapAround, { relativeTo: b.target }) : b.target instanceof HTMLElement && nt(b.target)));
  }
  return () => {
    let b = {}, m = { ref: s, onKeydown: w, onFocusout: y }, { features: f, initialFocus: v, containers: _, ...g } = e;
    return oe(F, [Boolean(f & 4) && oe(Ge, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: Fe.Focusable }), te({ ourProps: m, theirProps: { ...t, ...g }, slot: b, attrs: t, slots: o, name: "FocusTrap" }), Boolean(f & 4) && oe(Ge, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: Fe.Focusable })]);
  };
} }), { features: is }), lt = [];
if (typeof window < "u" && typeof document < "u") {
  let e = function(t) {
    t.target instanceof HTMLElement && t.target !== document.body && lt[0] !== t.target && (lt.unshift(t.target), lt = lt.filter((o) => o != null && o.isConnected), lt.splice(10));
  };
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
}
function or(e) {
  let t = $(lt.slice());
  return ee([e], ([o], [l]) => {
    l === !0 && o === !1 ? ns(() => {
      t.value.splice(0);
    }) : l === !1 && o === !0 && (t.value = lt.slice());
  }, { flush: "post" }), () => {
    var o;
    return (o = t.value.find((l) => l != null && l.isConnected)) != null ? o : null;
  };
}
function lr({ ownerDocument: e }, t) {
  let o = or(t);
  Z(() => {
    ve(() => {
      var l, s;
      t.value || ((l = e.value) == null ? void 0 : l.activeElement) === ((s = e.value) == null ? void 0 : s.body) && nt(o());
    }, { flush: "post" });
  }), re(() => {
    nt(o());
  });
}
function sr({ ownerDocument: e, container: t, initialFocus: o }, l) {
  let s = $(null), a = $(!1);
  return Z(() => a.value = !0), re(() => a.value = !1), Z(() => {
    ee([t, o, l], (n, i) => {
      if (n.every((c, h) => (i == null ? void 0 : i[h]) === c) || !l.value)
        return;
      let u = R(t);
      u && ns(() => {
        var c, h;
        if (!a.value)
          return;
        let w = R(o), y = (c = e.value) == null ? void 0 : c.activeElement;
        if (w) {
          if (w === y) {
            s.value = y;
            return;
          }
        } else if (u.contains(y)) {
          s.value = y;
          return;
        }
        w ? nt(w) : ge(u, ie.First | ie.NoScroll) === it.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), s.value = (h = e.value) == null ? void 0 : h.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), s;
}
function ar({ ownerDocument: e, container: t, containers: o, previousActiveElement: l }, s) {
  var a;
  Uo((a = e.value) == null ? void 0 : a.defaultView, "focus", (n) => {
    if (!s.value)
      return;
    let i = rs(o);
    R(t) instanceof HTMLElement && i.add(R(t));
    let u = l.value;
    if (!u)
      return;
    let c = n.target;
    c && c instanceof HTMLElement ? ps(i, c) ? (l.value = c, nt(c)) : (n.preventDefault(), n.stopPropagation(), nt(u)) : nt(l.value);
  }, !0);
}
function ps(e, t) {
  for (let o of e)
    if (o.contains(t))
      return !0;
  return !1;
}
let vo = /* @__PURE__ */ new Map(), xt = /* @__PURE__ */ new Map();
function _l(e, t = $(!0)) {
  ve((o) => {
    var l;
    if (!t.value)
      return;
    let s = R(e);
    if (!s)
      return;
    o(function() {
      var n;
      if (!s)
        return;
      let i = (n = xt.get(s)) != null ? n : 1;
      if (i === 1 ? xt.delete(s) : xt.set(s, i - 1), i !== 1)
        return;
      let u = vo.get(s);
      u && (u["aria-hidden"] === null ? s.removeAttribute("aria-hidden") : s.setAttribute("aria-hidden", u["aria-hidden"]), s.inert = u.inert, vo.delete(s));
    });
    let a = (l = xt.get(s)) != null ? l : 0;
    xt.set(s, a + 1), a === 0 && (vo.set(s, { "aria-hidden": s.getAttribute("aria-hidden"), inert: s.inert }), s.setAttribute("aria-hidden", "true"), s.inert = !0);
  });
}
let us = Symbol("ForcePortalRootContext");
function nr() {
  return de(us, !1);
}
let _o = T({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: o }) {
  return fe(us, e.force), () => {
    let { force: l, ...s } = e;
    return te({ theirProps: s, ourProps: {}, slot: {}, slots: t, attrs: o, name: "ForcePortalRoot" });
  };
} });
function rr(e) {
  let t = we(e);
  if (!t) {
    if (e === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let o = t.getElementById("headlessui-portal-root");
  if (o)
    return o;
  let l = t.createElement("div");
  return l.setAttribute("id", "headlessui-portal-root"), t.body.appendChild(l);
}
let ds = T({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: o }) {
  let l = $(null), s = E(() => we(l)), a = nr(), n = de(cs, null), i = $(a === !0 || n == null ? rr(l.value) : n.resolveTarget());
  return ve(() => {
    a || n != null && (i.value = n.resolveTarget());
  }), re(() => {
    var u, c;
    let h = (u = s.value) == null ? void 0 : u.getElementById("headlessui-portal-root");
    h && i.value === h && i.value.children.length <= 0 && ((c = i.value.parentElement) == null || c.removeChild(i.value));
  }), () => {
    if (i.value === null)
      return null;
    let u = { ref: l, "data-headlessui-portal": "" };
    return oe(Lt, { to: i.value }, te({ ourProps: u, theirProps: e, slot: {}, attrs: o, slots: t, name: "Portal" }));
  };
} }), cs = Symbol("PortalGroupContext"), ir = T({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: o }) {
  let l = Hs({ resolveTarget() {
    return e.target;
  } });
  return fe(cs, l), () => {
    let { target: s, ...a } = e;
    return te({ theirProps: a, ourProps: {}, slot: {}, attrs: t, slots: o, name: "PortalGroup" });
  };
} }), fs = Symbol("StackContext");
var $o = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))($o || {});
function pr() {
  return de(fs, () => {
  });
}
function ur({ type: e, enabled: t, element: o, onUpdate: l }) {
  let s = pr();
  function a(...n) {
    l == null || l(...n), s(...n);
  }
  Z(() => {
    ee(t, (n, i) => {
      n ? a(0, e, o) : i === !0 && a(1, e, o);
    }, { immediate: !0, flush: "sync" });
  }), re(() => {
    t.value && a(1, e, o);
  }), fe(fs, a);
}
let vs = Symbol("DescriptionContext");
function dr() {
  let e = de(vs, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function Xt({ slot: e = $({}), name: t = "Description", props: o = {} } = {}) {
  let l = $([]);
  function s(a) {
    return l.value.push(a), () => {
      let n = l.value.indexOf(a);
      n !== -1 && l.value.splice(n, 1);
    };
  }
  return fe(vs, { register: s, slot: e, name: t, props: o }), E(() => l.value.length > 0 ? l.value.join(" ") : void 0);
}
let cr = T({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${pe()}` } }, setup(e, { attrs: t, slots: o }) {
  let l = dr();
  return Z(() => re(l.register(e.id))), () => {
    let { name: s = "Description", slot: a = $({}), props: n = {} } = l, { id: i, ...u } = e, c = { ...Object.entries(n).reduce((h, [w, y]) => Object.assign(h, { [w]: O(y) }), {}), id: i };
    return te({ ourProps: c, theirProps: u, slot: a.value, attrs: t, slots: o, name: s });
  };
} });
function fr(e) {
  let t = Il(e.getSnapshot());
  return re(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function Qt() {
  let e = [], t = { addEventListener(o, l, s, a) {
    return o.addEventListener(l, s, a), t.add(() => o.removeEventListener(l, s, a));
  }, requestAnimationFrame(...o) {
    let l = requestAnimationFrame(...o);
    t.add(() => cancelAnimationFrame(l));
  }, nextFrame(...o) {
    t.requestAnimationFrame(() => {
      t.requestAnimationFrame(...o);
    });
  }, setTimeout(...o) {
    let l = setTimeout(...o);
    t.add(() => clearTimeout(l));
  }, style(o, l, s) {
    let a = o.style.getPropertyValue(l);
    return Object.assign(o.style, { [l]: s }), this.add(() => {
      Object.assign(o.style, { [l]: a });
    });
  }, group(o) {
    let l = Qt();
    return o(l), this.add(() => l.dispose());
  }, add(o) {
    return e.push(o), () => {
      let l = e.indexOf(o);
      if (l >= 0)
        for (let s of e.splice(l, 1))
          s();
    };
  }, dispose() {
    for (let o of e.splice(0))
      o();
  } };
  return t;
}
function vr(e, t) {
  let o = e(), l = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return o;
  }, subscribe(s) {
    return l.add(s), () => l.delete(s);
  }, dispatch(s, ...a) {
    let n = t[s].call(o, ...a);
    n && (o = n, l.forEach((i) => i()));
  } };
}
function hr() {
  let e;
  return { before({ doc: t }) {
    var o;
    let l = t.documentElement;
    e = ((o = t.defaultView) != null ? o : window).innerWidth - l.clientWidth;
  }, after({ doc: t, d: o }) {
    let l = t.documentElement, s = l.clientWidth - l.offsetWidth, a = e - s;
    o.style(l, "paddingRight", `${a}px`);
  } };
}
function mr() {
  if (!er())
    return {};
  let e;
  return { before() {
    e = window.pageYOffset;
  }, after({ doc: t, d: o, meta: l }) {
    function s(n) {
      return l.containers.flatMap((i) => i()).some((i) => i.contains(n));
    }
    o.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
    let a = null;
    o.addEventListener(t, "click", (n) => {
      if (n.target instanceof HTMLElement)
        try {
          let i = n.target.closest("a");
          if (!i)
            return;
          let { hash: u } = new URL(i.href), c = t.querySelector(u);
          c && !s(c) && (a = c);
        } catch {
        }
    }, !0), o.addEventListener(t, "touchmove", (n) => {
      n.target instanceof HTMLElement && !s(n.target) && n.preventDefault();
    }, { passive: !1 }), o.add(() => {
      window.scrollTo(0, window.pageYOffset + e), a && a.isConnected && (a.scrollIntoView({ block: "nearest" }), a = null);
    });
  } };
}
function br() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function gr(e) {
  let t = {};
  for (let o of e)
    Object.assign(t, o(t));
  return t;
}
let st = vr(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var o;
  let l = (o = this.get(e)) != null ? o : { doc: e, count: 0, d: Qt(), meta: /* @__PURE__ */ new Set() };
  return l.count++, l.meta.add(t), this.set(e, l), this;
}, POP(e, t) {
  let o = this.get(e);
  return o && (o.count--, o.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: o }) {
  let l = { doc: e, d: t, meta: gr(o) }, s = [mr(), hr(), br()];
  s.forEach(({ before: a }) => a == null ? void 0 : a(l)), s.forEach(({ after: a }) => a == null ? void 0 : a(l));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
st.subscribe(() => {
  let e = st.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [o] of e)
    t.set(o, o.documentElement.style.overflow);
  for (let o of e.values()) {
    let l = t.get(o.doc) === "hidden", s = o.count !== 0;
    (s && !l || !s && l) && st.dispatch(o.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", o), o.count === 0 && st.dispatch("TEARDOWN", o);
  }
});
function yr(e, t, o) {
  let l = fr(st), s = E(() => {
    let a = e.value ? l.value.get(e.value) : void 0;
    return a ? a.count > 0 : !1;
  });
  return ee([e, t], ([a, n], [i], u) => {
    if (!a || !n)
      return;
    st.dispatch("PUSH", a, o);
    let c = !1;
    u(() => {
      c || (st.dispatch("POP", i ?? a, o), c = !0);
    });
  }, { immediate: !0 }), s;
}
var wr = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(wr || {});
let xo = Symbol("DialogContext");
function Bt(e) {
  let t = de(xo, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, Bt), o;
  }
  return t;
}
let Ft = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Jt = T({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Ft }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${pe()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: o, slots: l, expose: s }) {
  var a;
  let n = $(!1);
  Z(() => {
    n.value = !0;
  });
  let i = $(0), u = mt(), c = E(() => e.open === Ft && u !== null ? (u.value & se.Open) === se.Open : e.open), h = $(null), w = $(null), y = E(() => we(h));
  if (s({ el: h, $el: h }), !(e.open !== Ft || u !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof c.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${c.value === Ft ? void 0 : e.open}`);
  let b = E(() => n.value && c.value ? 0 : 1), m = E(() => b.value === 0), f = E(() => i.value > 1), v = de(xo, null) !== null, _ = E(() => f.value ? "parent" : "leaf"), g = E(() => u !== null ? (u.value & se.Closing) === se.Closing : !1), S = E(() => v || g.value ? !1 : m.value), x = E(() => {
    var Y, W, U;
    return (U = Array.from((W = (Y = y.value) == null ? void 0 : Y.querySelectorAll("body > *")) != null ? W : []).find((G) => G.id === "headlessui-portal-root" ? !1 : G.contains(R(w)) && G instanceof HTMLElement)) != null ? U : null;
  });
  _l(x, S);
  let I = E(() => f.value ? !0 : m.value), B = E(() => {
    var Y, W, U;
    return (U = Array.from((W = (Y = y.value) == null ? void 0 : Y.querySelectorAll("[data-headlessui-portal]")) != null ? W : []).find((G) => G.contains(R(w)) && G instanceof HTMLElement)) != null ? U : null;
  });
  _l(B, I), ur({ type: "Dialog", enabled: E(() => b.value === 0), element: h, onUpdate: (Y, W) => {
    if (W === "Dialog")
      return ue(Y, { [$o.Add]: () => i.value += 1, [$o.Remove]: () => i.value -= 1 });
  } });
  let j = Xt({ name: "DialogDescription", slot: E(() => ({ open: c.value })) }), D = $(null), M = { titleId: D, panelRef: $(null), dialogState: b, setTitleId(Y) {
    D.value !== Y && (D.value = Y);
  }, close() {
    t("close", !1);
  } };
  fe(xo, M);
  function P() {
    var Y, W, U;
    return [...Array.from((W = (Y = y.value) == null ? void 0 : Y.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? W : []).filter((G) => !(G === document.body || G === document.head || !(G instanceof HTMLElement) || G.contains(R(w)) || M.panelRef.value && G.contains(M.panelRef.value))), (U = M.panelRef.value) != null ? U : h.value];
  }
  let A = E(() => !(!m.value || f.value));
  es(() => P(), (Y, W) => {
    M.close(), Mo(() => W == null ? void 0 : W.focus());
  }, A);
  let q = E(() => !(f.value || b.value !== 0));
  Uo((a = y.value) == null ? void 0 : a.defaultView, "keydown", (Y) => {
    q.value && (Y.defaultPrevented || Y.key === ne.Escape && (Y.preventDefault(), Y.stopPropagation(), M.close()));
  });
  let H = E(() => !(g.value || b.value !== 0 || v));
  return yr(y, H, (Y) => {
    var W;
    return { containers: [...(W = Y.containers) != null ? W : [], P] };
  }), ve((Y) => {
    if (b.value !== 0)
      return;
    let W = R(h);
    if (!W)
      return;
    let U = new ResizeObserver((G) => {
      for (let ce of G) {
        let Q = ce.target.getBoundingClientRect();
        Q.x === 0 && Q.y === 0 && Q.width === 0 && Q.height === 0 && M.close();
      }
    });
    U.observe(W), Y(() => U.disconnect());
  }), () => {
    let { id: Y, open: W, initialFocus: U, ...G } = e, ce = { ...o, ref: h, id: Y, role: "dialog", "aria-modal": b.value === 0 ? !0 : void 0, "aria-labelledby": D.value, "aria-describedby": j.value }, Q = { open: b.value === 0 };
    return oe(_o, { force: !0 }, () => [oe(ds, () => oe(ir, { target: h.value }, () => oe(_o, { force: !1 }, () => oe($t, { initialFocus: U, containers: P, features: m.value ? ue(_.value, { parent: $t.features.RestoreFocus, leaf: $t.features.All & ~$t.features.FocusLock }) : $t.features.None }, () => te({ ourProps: ce, theirProps: G, slot: Q, attrs: o, slots: l, visible: b.value === 0, features: Ee.RenderStrategy | Ee.Static, name: "Dialog" }))))), oe(Ge, { features: Fe.Hidden, ref: w })]);
  };
} });
T({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${pe()}` } }, setup(e, { attrs: t, slots: o }) {
  let l = Bt("DialogOverlay");
  function s(a) {
    a.target === a.currentTarget && (a.preventDefault(), a.stopPropagation(), l.close());
  }
  return () => {
    let { id: a, ...n } = e;
    return te({ ourProps: { id: a, "aria-hidden": !0, onClick: s }, theirProps: n, slot: { open: l.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogOverlay" });
  };
} });
T({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${pe()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: l }) {
  let s = Bt("DialogBackdrop"), a = $(null);
  return l({ el: a, $el: a }), Z(() => {
    if (s.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: n, ...i } = e, u = { id: n, ref: a, "aria-hidden": !0 };
    return oe(_o, { force: !0 }, () => oe(ds, () => te({ ourProps: u, theirProps: { ...t, ...i }, slot: { open: s.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogBackdrop" })));
  };
} });
let eo = T({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${pe()}` } }, setup(e, { attrs: t, slots: o, expose: l }) {
  let s = Bt("DialogPanel");
  l({ el: s.panelRef, $el: s.panelRef });
  function a(n) {
    n.stopPropagation();
  }
  return () => {
    let { id: n, ...i } = e, u = { id: n, ref: s.panelRef, onClick: a };
    return te({ ourProps: u, theirProps: i, slot: { open: s.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogPanel" });
  };
} }), hs = T({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${pe()}` } }, setup(e, { attrs: t, slots: o }) {
  let l = Bt("DialogTitle");
  return Z(() => {
    l.setTitleId(e.id), re(() => l.setTitleId(null));
  }), () => {
    let { id: s, ...a } = e;
    return te({ ourProps: { id: s }, theirProps: a, slot: { open: l.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogTitle" });
  };
} });
var _r = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(_r || {});
let ms = Symbol("DisclosureContext");
function Wo(e) {
  let t = de(ms, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, Wo), o;
  }
  return t;
}
let bs = Symbol("DisclosurePanelContext");
function $r() {
  return de(bs, null);
}
let $l = T({ name: "Disclosure", props: { as: { type: [Object, String], default: "template" }, defaultOpen: { type: [Boolean], default: !1 } }, setup(e, { slots: t, attrs: o }) {
  let l = $(e.defaultOpen ? 0 : 1), s = $(null), a = $(null), n = { buttonId: $(null), panelId: $(null), disclosureState: l, panel: s, button: a, toggleDisclosure() {
    l.value = ue(l.value, { [0]: 1, [1]: 0 });
  }, closeDisclosure() {
    l.value !== 1 && (l.value = 1);
  }, close(i) {
    n.closeDisclosure();
    let u = (() => i ? i instanceof HTMLElement ? i : i.value instanceof HTMLElement ? R(i) : R(n.button) : R(n.button))();
    u == null || u.focus();
  } };
  return fe(ms, n), No(E(() => ue(l.value, { [0]: se.Open, [1]: se.Closed }))), () => {
    let { defaultOpen: i, ...u } = e, c = { open: l.value === 0, close: n.close };
    return te({ theirProps: u, ourProps: {}, slot: c, slots: t, attrs: o, name: "Disclosure" });
  };
} }), xl = T({ name: "DisclosureButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-disclosure-button-${pe()}` } }, setup(e, { attrs: t, slots: o, expose: l }) {
  let s = Wo("DisclosureButton");
  Z(() => {
    s.buttonId.value = e.id;
  }), re(() => {
    s.buttonId.value = null;
  });
  let a = $r(), n = E(() => a === null ? !1 : a.value === s.panelId.value), i = $(null);
  l({ el: i, $el: i }), n.value || ve(() => {
    s.button.value = i.value;
  });
  let u = Ho(E(() => ({ as: e.as, type: t.type })), i);
  function c() {
    var y;
    e.disabled || (n.value ? (s.toggleDisclosure(), (y = R(s.button)) == null || y.focus()) : s.toggleDisclosure());
  }
  function h(y) {
    var b;
    if (!e.disabled)
      if (n.value)
        switch (y.key) {
          case ne.Space:
          case ne.Enter:
            y.preventDefault(), y.stopPropagation(), s.toggleDisclosure(), (b = R(s.button)) == null || b.focus();
            break;
        }
      else
        switch (y.key) {
          case ne.Space:
          case ne.Enter:
            y.preventDefault(), y.stopPropagation(), s.toggleDisclosure();
            break;
        }
  }
  function w(y) {
    switch (y.key) {
      case ne.Space:
        y.preventDefault();
        break;
    }
  }
  return () => {
    let y = { open: s.disclosureState.value === 0 }, { id: b, ...m } = e, f = n.value ? { ref: i, type: u.value, onClick: c, onKeydown: h } : { id: b, ref: i, type: u.value, "aria-expanded": e.disabled ? void 0 : s.disclosureState.value === 0, "aria-controls": R(s.panel) ? s.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onClick: c, onKeydown: h, onKeyup: w };
    return te({ ourProps: f, theirProps: m, slot: y, attrs: t, slots: o, name: "DisclosureButton" });
  };
} }), Vl = T({ name: "DisclosurePanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-disclosure-panel-${pe()}` } }, setup(e, { attrs: t, slots: o, expose: l }) {
  let s = Wo("DisclosurePanel");
  Z(() => {
    s.panelId.value = e.id;
  }), re(() => {
    s.panelId.value = null;
  }), l({ el: s.panel, $el: s.panel }), fe(bs, s.panelId);
  let a = mt(), n = E(() => a !== null ? (a.value & se.Open) === se.Open : s.disclosureState.value === 0);
  return () => {
    let i = { open: s.disclosureState.value === 0, close: s.close }, { id: u, ...c } = e, h = { id: u, ref: s.panel };
    return te({ ourProps: h, theirProps: c, slot: i, attrs: t, slots: o, features: Ee.RenderStrategy | Ee.Static, visible: n.value, name: "DisclosurePanel" });
  };
} });
var xr = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(xr || {});
let gs = Symbol("PopoverContext");
function to(e) {
  let t = de(gs, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <${oo.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, to), o;
  }
  return t;
}
let ys = Symbol("PopoverGroupContext");
function ws() {
  return de(ys, null);
}
let _s = Symbol("PopoverPanelContext");
function Vr() {
  return de(_s, null);
}
let oo = T({ name: "Popover", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: o, expose: l }) {
  var s;
  let a = $(null);
  l({ el: a, $el: a });
  let n = $(1), i = $(null), u = $(null), c = $(null), h = $(null), w = E(() => we(a)), y = E(() => {
    var g, S;
    if (!R(i) || !R(h))
      return !1;
    for (let P of document.querySelectorAll("body > *"))
      if (Number(P == null ? void 0 : P.contains(R(i))) ^ Number(P == null ? void 0 : P.contains(R(h))))
        return !0;
    let x = Kt(), I = x.indexOf(R(i)), B = (I + x.length - 1) % x.length, j = (I + 1) % x.length, D = x[B], M = x[j];
    return !((g = R(h)) != null && g.contains(D)) && !((S = R(h)) != null && S.contains(M));
  }), b = { popoverState: n, buttonId: $(null), panelId: $(null), panel: h, button: i, isPortalled: y, beforePanelSentinel: u, afterPanelSentinel: c, togglePopover() {
    n.value = ue(n.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    n.value !== 1 && (n.value = 1);
  }, close(g) {
    b.closePopover();
    let S = (() => g ? g instanceof HTMLElement ? g : g.value instanceof HTMLElement ? R(g) : R(b.button) : R(b.button))();
    S == null || S.focus();
  } };
  fe(gs, b), No(E(() => ue(n.value, { [0]: se.Open, [1]: se.Closed })));
  let m = { buttonId: b.buttonId, panelId: b.panelId, close() {
    b.closePopover();
  } }, f = ws(), v = f == null ? void 0 : f.registerPopover;
  function _() {
    var g, S, x, I;
    return (I = f == null ? void 0 : f.isFocusWithinPopoverGroup()) != null ? I : ((g = w.value) == null ? void 0 : g.activeElement) && (((S = R(i)) == null ? void 0 : S.contains(w.value.activeElement)) || ((x = R(h)) == null ? void 0 : x.contains(w.value.activeElement)));
  }
  return ve(() => v == null ? void 0 : v(m)), Uo((s = w.value) == null ? void 0 : s.defaultView, "focus", (g) => {
    var S, x;
    n.value === 0 && (_() || i && h && g.target !== window && ((S = R(b.beforePanelSentinel)) != null && S.contains(g.target) || (x = R(b.afterPanelSentinel)) != null && x.contains(g.target) || b.closePopover()));
  }, !0), es([i, h], (g, S) => {
    var x;
    b.closePopover(), Ql(S, qo.Loose) || (g.preventDefault(), (x = R(i)) == null || x.focus());
  }, E(() => n.value === 0)), () => {
    let g = { open: n.value === 0, close: b.close };
    return te({ theirProps: e, ourProps: { ref: a }, slot: g, slots: t, attrs: o, name: "Popover" });
  };
} }), Zo = T({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-popover-button-${pe()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: l }) {
  let s = to("PopoverButton"), a = E(() => we(s.button));
  l({ el: s.button, $el: s.button }), Z(() => {
    s.buttonId.value = e.id;
  }), re(() => {
    s.buttonId.value = null;
  });
  let n = ws(), i = n == null ? void 0 : n.closeOthers, u = Vr(), c = E(() => u === null ? !1 : u.value === s.panelId.value), h = $(null), w = `headlessui-focus-sentinel-${pe()}`;
  c.value || ve(() => {
    s.button.value = h.value;
  });
  let y = Ho(E(() => ({ as: e.as, type: t.type })), h);
  function b(_) {
    var g, S, x, I, B;
    if (c.value) {
      if (s.popoverState.value === 1)
        return;
      switch (_.key) {
        case ne.Space:
        case ne.Enter:
          _.preventDefault(), (S = (g = _.target).click) == null || S.call(g), s.closePopover(), (x = R(s.button)) == null || x.focus();
          break;
      }
    } else
      switch (_.key) {
        case ne.Space:
        case ne.Enter:
          _.preventDefault(), _.stopPropagation(), s.popoverState.value === 1 && (i == null || i(s.buttonId.value)), s.togglePopover();
          break;
        case ne.Escape:
          if (s.popoverState.value !== 0)
            return i == null ? void 0 : i(s.buttonId.value);
          if (!R(s.button) || (I = a.value) != null && I.activeElement && !((B = R(s.button)) != null && B.contains(a.value.activeElement)))
            return;
          _.preventDefault(), _.stopPropagation(), s.closePopover();
          break;
      }
  }
  function m(_) {
    c.value || _.key === ne.Space && _.preventDefault();
  }
  function f(_) {
    var g, S;
    e.disabled || (c.value ? (s.closePopover(), (g = R(s.button)) == null || g.focus()) : (_.preventDefault(), _.stopPropagation(), s.popoverState.value === 1 && (i == null || i(s.buttonId.value)), s.togglePopover(), (S = R(s.button)) == null || S.focus()));
  }
  function v(_) {
    _.preventDefault(), _.stopPropagation();
  }
  return () => {
    let _ = s.popoverState.value === 0, g = { open: _ }, { id: S, ...x } = e, I = c.value ? { ref: h, type: y.value, onKeydown: b, onClick: f } : { ref: h, id: S, type: y.value, "aria-expanded": e.disabled ? void 0 : s.popoverState.value === 0, "aria-controls": R(s.panel) ? s.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onKeydown: b, onKeyup: m, onClick: f, onMousedown: v }, B = Yo();
    function j() {
      let D = R(s.panel);
      if (!D)
        return;
      function M() {
        ue(B.value, { [ye.Forwards]: () => ge(D, ie.First), [ye.Backwards]: () => ge(D, ie.Last) }) === it.Error && ge(Kt().filter((P) => P.dataset.headlessuiFocusGuard !== "true"), ue(B.value, { [ye.Forwards]: ie.Next, [ye.Backwards]: ie.Previous }), { relativeTo: R(s.button) });
      }
      M();
    }
    return oe(F, [te({ ourProps: I, theirProps: { ...t, ...x }, slot: g, attrs: t, slots: o, name: "PopoverButton" }), _ && !c.value && s.isPortalled.value && oe(Ge, { id: w, features: Fe.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: j })]);
  };
} });
T({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(e, { attrs: t, slots: o }) {
  let l = to("PopoverOverlay"), s = `headlessui-popover-overlay-${pe()}`, a = mt(), n = E(() => a !== null ? (a.value & se.Open) === se.Open : l.popoverState.value === 0);
  function i() {
    l.closePopover();
  }
  return () => {
    let u = { open: l.popoverState.value === 0 };
    return te({ ourProps: { id: s, "aria-hidden": !0, onClick: i }, theirProps: e, slot: u, attrs: t, slots: o, features: Ee.RenderStrategy | Ee.Static, visible: n.value, name: "PopoverOverlay" });
  };
} });
let Go = T({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-popover-panel-${pe()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: l }) {
  let { focus: s } = e, a = to("PopoverPanel"), n = E(() => we(a.panel)), i = `headlessui-focus-sentinel-before-${pe()}`, u = `headlessui-focus-sentinel-after-${pe()}`;
  l({ el: a.panel, $el: a.panel }), Z(() => {
    a.panelId.value = e.id;
  }), re(() => {
    a.panelId.value = null;
  }), fe(_s, a.panelId), ve(() => {
    var v, _;
    if (!s || a.popoverState.value !== 0 || !a.panel)
      return;
    let g = (v = n.value) == null ? void 0 : v.activeElement;
    (_ = R(a.panel)) != null && _.contains(g) || ge(R(a.panel), ie.First);
  });
  let c = mt(), h = E(() => c !== null ? (c.value & se.Open) === se.Open : a.popoverState.value === 0);
  function w(v) {
    var _, g;
    switch (v.key) {
      case ne.Escape:
        if (a.popoverState.value !== 0 || !R(a.panel) || n.value && !((_ = R(a.panel)) != null && _.contains(n.value.activeElement)))
          return;
        v.preventDefault(), v.stopPropagation(), a.closePopover(), (g = R(a.button)) == null || g.focus();
        break;
    }
  }
  function y(v) {
    var _, g, S, x, I;
    let B = v.relatedTarget;
    B && R(a.panel) && ((_ = R(a.panel)) != null && _.contains(B) || (a.closePopover(), ((S = (g = R(a.beforePanelSentinel)) == null ? void 0 : g.contains) != null && S.call(g, B) || (I = (x = R(a.afterPanelSentinel)) == null ? void 0 : x.contains) != null && I.call(x, B)) && B.focus({ preventScroll: !0 })));
  }
  let b = Yo();
  function m() {
    let v = R(a.panel);
    if (!v)
      return;
    function _() {
      ue(b.value, { [ye.Forwards]: () => {
        var g;
        ge(v, ie.First) === it.Error && ((g = R(a.afterPanelSentinel)) == null || g.focus());
      }, [ye.Backwards]: () => {
        var g;
        (g = R(a.button)) == null || g.focus({ preventScroll: !0 });
      } });
    }
    _();
  }
  function f() {
    let v = R(a.panel);
    if (!v)
      return;
    function _() {
      ue(b.value, { [ye.Forwards]: () => {
        let g = R(a.button), S = R(a.panel);
        if (!g)
          return;
        let x = Kt(), I = x.indexOf(g), B = x.slice(0, I + 1), j = [...x.slice(I + 1), ...B];
        for (let D of j.slice())
          if (D.dataset.headlessuiFocusGuard === "true" || S != null && S.contains(D)) {
            let M = j.indexOf(D);
            M !== -1 && j.splice(M, 1);
          }
        ge(j, ie.First, { sorted: !1 });
      }, [ye.Backwards]: () => {
        var g;
        ge(v, ie.Previous) === it.Error && ((g = R(a.button)) == null || g.focus());
      } });
    }
    _();
  }
  return () => {
    let v = { open: a.popoverState.value === 0, close: a.close }, { id: _, focus: g, ...S } = e, x = { ref: a.panel, id: _, onKeydown: w, onFocusout: s && a.popoverState.value === 0 ? y : void 0, tabIndex: -1 };
    return te({ ourProps: x, theirProps: { ...t, ...S }, attrs: t, slot: v, slots: { ...o, default: (...I) => {
      var B;
      return [oe(F, [h.value && a.isPortalled.value && oe(Ge, { id: i, ref: a.beforePanelSentinel, features: Fe.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: m }), (B = o.default) == null ? void 0 : B.call(o, ...I), h.value && a.isPortalled.value && oe(Ge, { id: u, ref: a.afterPanelSentinel, features: Fe.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: f })])];
    } }, features: Ee.RenderStrategy | Ee.Static, visible: h.value, name: "PopoverPanel" });
  };
} });
T({ name: "PopoverGroup", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: o, expose: l }) {
  let s = $(null), a = Il([]), n = E(() => we(s));
  l({ el: s, $el: s });
  function i(w) {
    let y = a.value.indexOf(w);
    y !== -1 && a.value.splice(y, 1);
  }
  function u(w) {
    return a.value.push(w), () => {
      i(w);
    };
  }
  function c() {
    var w;
    let y = n.value;
    if (!y)
      return !1;
    let b = y.activeElement;
    return (w = R(s)) != null && w.contains(b) ? !0 : a.value.some((m) => {
      var f, v;
      return ((f = y.getElementById(m.buttonId.value)) == null ? void 0 : f.contains(b)) || ((v = y.getElementById(m.panelId.value)) == null ? void 0 : v.contains(b));
    });
  }
  function h(w) {
    for (let y of a.value)
      y.buttonId.value !== w && y.close();
  }
  return fe(ys, { registerPopover: u, unregisterPopover: i, isFocusWithinPopoverGroup: c, closeOthers: h }), () => te({ ourProps: { ref: s }, theirProps: e, slot: {}, attrs: t, slots: o, name: "PopoverGroup" });
} });
let $s = Symbol("LabelContext");
function xs() {
  let e = de($s, null);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, xs), t;
  }
  return e;
}
function Ko({ slot: e = {}, name: t = "Label", props: o = {} } = {}) {
  let l = $([]);
  function s(a) {
    return l.value.push(a), () => {
      let n = l.value.indexOf(a);
      n !== -1 && l.value.splice(n, 1);
    };
  }
  return fe($s, { register: s, slot: e, name: t, props: o }), E(() => l.value.length > 0 ? l.value.join(" ") : void 0);
}
let Vs = T({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-label-${pe()}` } }, setup(e, { slots: t, attrs: o }) {
  let l = xs();
  return Z(() => re(l.register(e.id))), () => {
    let { name: s = "Label", slot: a = {}, props: n = {} } = l, { id: i, passive: u, ...c } = e, h = { ...Object.entries(n).reduce((w, [y, b]) => Object.assign(w, { [y]: O(b) }), {}), id: i };
    return u && (delete h.onClick, delete h.htmlFor, delete c.onClick), te({ ourProps: h, theirProps: c, slot: a, attrs: o, slots: t, name: s });
  };
} });
function kr(e, t) {
  return e === t;
}
let ks = Symbol("RadioGroupContext");
function Cs(e) {
  let t = de(ks, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, Cs), o;
  }
  return t;
}
let Cr = T({ name: "RadioGroup", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "div" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => kr }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-radiogroup-${pe()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: o, slots: l, expose: s }) {
  let a = $(null), n = $([]), i = Ko({ name: "RadioGroupLabel" }), u = Xt({ name: "RadioGroupDescription" });
  s({ el: a, $el: a });
  let [c, h] = as(E(() => e.modelValue), (m) => t("update:modelValue", m), E(() => e.defaultValue)), w = { options: n, value: c, disabled: E(() => e.disabled), firstOption: E(() => n.value.find((m) => !m.propsRef.disabled)), containsCheckedOption: E(() => n.value.some((m) => w.compare(Ue(m.propsRef.value), Ue(e.modelValue)))), compare(m, f) {
    if (typeof e.by == "string") {
      let v = e.by;
      return (m == null ? void 0 : m[v]) === (f == null ? void 0 : f[v]);
    }
    return e.by(m, f);
  }, change(m) {
    var f;
    if (e.disabled || w.compare(Ue(c.value), Ue(m)))
      return !1;
    let v = (f = n.value.find((_) => w.compare(Ue(_.propsRef.value), Ue(m)))) == null ? void 0 : f.propsRef;
    return v != null && v.disabled ? !1 : (h(m), !0);
  }, registerOption(m) {
    n.value.push(m), n.value = Jl(n.value, (f) => f.element);
  }, unregisterOption(m) {
    let f = n.value.findIndex((v) => v.id === m);
    f !== -1 && n.value.splice(f, 1);
  } };
  fe(ks, w), Kn({ container: E(() => R(a)), accept(m) {
    return m.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : m.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(m) {
    m.setAttribute("role", "none");
  } });
  function y(m) {
    if (!a.value || !a.value.contains(m.target))
      return;
    let f = n.value.filter((v) => v.propsRef.disabled === !1).map((v) => v.element);
    switch (m.key) {
      case ne.Enter:
        ss(m.currentTarget);
        break;
      case ne.ArrowLeft:
      case ne.ArrowUp:
        if (m.preventDefault(), m.stopPropagation(), ge(f, ie.Previous | ie.WrapAround) === it.Success) {
          let v = n.value.find((_) => {
            var g;
            return _.element === ((g = we(a)) == null ? void 0 : g.activeElement);
          });
          v && w.change(v.propsRef.value);
        }
        break;
      case ne.ArrowRight:
      case ne.ArrowDown:
        if (m.preventDefault(), m.stopPropagation(), ge(f, ie.Next | ie.WrapAround) === it.Success) {
          let v = n.value.find((_) => {
            var g;
            return _.element === ((g = we(_.element)) == null ? void 0 : g.activeElement);
          });
          v && w.change(v.propsRef.value);
        }
        break;
      case ne.Space:
        {
          m.preventDefault(), m.stopPropagation();
          let v = n.value.find((_) => {
            var g;
            return _.element === ((g = we(_.element)) == null ? void 0 : g.activeElement);
          });
          v && w.change(v.propsRef.value);
        }
        break;
    }
  }
  let b = E(() => {
    var m;
    return (m = R(a)) == null ? void 0 : m.closest("form");
  });
  return Z(() => {
    ee([b], () => {
      if (!b.value || e.defaultValue === void 0)
        return;
      function m() {
        w.change(e.defaultValue);
      }
      return b.value.addEventListener("reset", m), () => {
        var f;
        (f = b.value) == null || f.removeEventListener("reset", m);
      };
    }, { immediate: !0 });
  }), () => {
    let { disabled: m, name: f, id: v, ..._ } = e, g = { ref: a, id: v, role: "radiogroup", "aria-labelledby": i.value, "aria-describedby": u.value, onKeydown: y };
    return oe(F, [...f != null && c.value != null ? ts({ [f]: c.value }).map(([S, x]) => oe(Ge, Kl({ features: Fe.Hidden, key: S, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: S, value: x }))) : [], te({ ourProps: g, theirProps: { ...o, ...Gt(_, ["modelValue", "defaultValue"]) }, slot: {}, attrs: o, slots: l, name: "RadioGroup" })]);
  };
} });
var Sr = ((e) => (e[e.Empty = 1] = "Empty", e[e.Active = 2] = "Active", e))(Sr || {});
let Pr = T({ name: "RadioGroupOption", props: { as: { type: [Object, String], default: "div" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-radiogroup-option-${pe()}` } }, setup(e, { attrs: t, slots: o, expose: l }) {
  let s = Cs("RadioGroupOption"), a = Ko({ name: "RadioGroupLabel" }), n = Xt({ name: "RadioGroupDescription" }), i = $(null), u = E(() => ({ value: e.value, disabled: e.disabled })), c = $(1);
  l({ el: i, $el: i }), Z(() => s.registerOption({ id: e.id, element: i, propsRef: u })), re(() => s.unregisterOption(e.id));
  let h = E(() => {
    var _;
    return ((_ = s.firstOption.value) == null ? void 0 : _.id) === e.id;
  }), w = E(() => s.disabled.value || e.disabled), y = E(() => s.compare(Ue(s.value.value), Ue(e.value))), b = E(() => w.value ? -1 : y.value || !s.containsCheckedOption.value && h.value ? 0 : -1);
  function m() {
    var _;
    s.change(e.value) && (c.value |= 2, (_ = i.value) == null || _.focus());
  }
  function f() {
    c.value |= 2;
  }
  function v() {
    c.value &= -3;
  }
  return () => {
    let { id: _, value: g, disabled: S, ...x } = e, I = { checked: y.value, disabled: w.value, active: Boolean(c.value & 2) }, B = { id: _, ref: i, role: "radio", "aria-checked": y.value ? "true" : "false", "aria-labelledby": a.value, "aria-describedby": n.value, "aria-disabled": w.value ? !0 : void 0, tabIndex: b.value, onClick: w.value ? void 0 : m, onFocus: w.value ? void 0 : f, onBlur: w.value ? void 0 : v };
    return te({ ourProps: B, theirProps: x, slot: I, attrs: t, slots: o, name: "RadioGroupOption" });
  };
} }), kl = Vs, Or = cr, Ss = Symbol("GroupContext"), Lr = T({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: o }) {
  let l = $(null), s = Ko({ name: "SwitchLabel", props: { htmlFor: E(() => {
    var n;
    return (n = l.value) == null ? void 0 : n.id;
  }), onClick(n) {
    l.value && (n.currentTarget.tagName === "LABEL" && n.preventDefault(), l.value.click(), l.value.focus({ preventScroll: !0 }));
  } } }), a = Xt({ name: "SwitchDescription" });
  return fe(Ss, { switchRef: l, labelledby: s, describedby: a }), () => te({ theirProps: e, ourProps: {}, slot: {}, slots: t, attrs: o, name: "SwitchGroup" });
} }), Mr = T({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: !0 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-switch-${pe()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: o, slots: l, expose: s }) {
  let a = de(Ss, null), [n, i] = as(E(() => e.modelValue), (v) => t("update:modelValue", v), E(() => e.defaultChecked));
  function u() {
    i(!n.value);
  }
  let c = $(null), h = a === null ? c : a.switchRef, w = Ho(E(() => ({ as: e.as, type: o.type })), h);
  s({ el: h, $el: h });
  function y(v) {
    v.preventDefault(), u();
  }
  function b(v) {
    v.key === ne.Space ? (v.preventDefault(), u()) : v.key === ne.Enter && ss(v.currentTarget);
  }
  function m(v) {
    v.preventDefault();
  }
  let f = E(() => {
    var v, _;
    return (_ = (v = R(h)) == null ? void 0 : v.closest) == null ? void 0 : _.call(v, "form");
  });
  return Z(() => {
    ee([f], () => {
      if (!f.value || e.defaultChecked === void 0)
        return;
      function v() {
        i(e.defaultChecked);
      }
      return f.value.addEventListener("reset", v), () => {
        var _;
        (_ = f.value) == null || _.removeEventListener("reset", v);
      };
    }, { immediate: !0 });
  }), () => {
    let { id: v, name: _, value: g, ...S } = e, x = { checked: n.value }, I = { id: v, ref: h, role: "switch", type: w.value, tabIndex: 0, "aria-checked": n.value, "aria-labelledby": a == null ? void 0 : a.labelledby.value, "aria-describedby": a == null ? void 0 : a.describedby.value, onClick: y, onKeyup: b, onKeypress: m };
    return oe(F, [_ != null && n.value != null ? oe(Ge, Kl({ features: Fe.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: n.value, name: _, value: g })) : null, te({ ourProps: I, theirProps: { ...o, ...Gt(S, ["modelValue", "defaultChecked"]) }, slot: x, attrs: o, slots: l, name: "Switch" })]);
  };
} }), Tr = Vs;
function Dr(e) {
  let t = { called: !1 };
  return (...o) => {
    if (!t.called)
      return t.called = !0, e(...o);
  };
}
function ho(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Nt(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var Vo = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(Vo || {});
function Ir(e, t) {
  let o = Qt();
  if (!e)
    return o.dispose;
  let { transitionDuration: l, transitionDelay: s } = getComputedStyle(e), [a, n] = [l, s].map((i) => {
    let [u = 0] = i.split(",").filter(Boolean).map((c) => c.includes("ms") ? parseFloat(c) : parseFloat(c) * 1e3).sort((c, h) => h - c);
    return u;
  });
  return a !== 0 ? o.setTimeout(() => t("finished"), a + n) : t("finished"), o.add(() => t("cancelled")), o.dispose;
}
function Cl(e, t, o, l, s, a) {
  let n = Qt(), i = a !== void 0 ? Dr(a) : () => {
  };
  return Nt(e, ...s), ho(e, ...t, ...o), n.nextFrame(() => {
    Nt(e, ...o), ho(e, ...l), n.add(Ir(e, (u) => (Nt(e, ...l, ...t), ho(e, ...s), i(u))));
  }), n.add(() => Nt(e, ...t, ...o, ...l, ...s)), n.add(() => i("cancelled")), n.dispose;
}
function ot(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Xo = Symbol("TransitionContext");
var Er = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Er || {});
function Br() {
  return de(Xo, null) !== null;
}
function zr() {
  let e = de(Xo, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Ar() {
  let e = de(Qo, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let Qo = Symbol("NestingContext");
function lo(e) {
  return "children" in e ? lo(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Ps(e) {
  let t = $([]), o = $(!1);
  Z(() => o.value = !0), re(() => o.value = !1);
  function l(a, n = We.Hidden) {
    let i = t.value.findIndex(({ id: u }) => u === a);
    i !== -1 && (ue(n, { [We.Unmount]() {
      t.value.splice(i, 1);
    }, [We.Hidden]() {
      t.value[i].state = "hidden";
    } }), !lo(t) && o.value && (e == null || e()));
  }
  function s(a) {
    let n = t.value.find(({ id: i }) => i === a);
    return n ? n.state !== "visible" && (n.state = "visible") : t.value.push({ id: a, state: "visible" }), () => l(a, We.Unmount);
  }
  return { children: t, register: s, unregister: l };
}
let Os = Ee.RenderStrategy, Ke = T({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: o, slots: l, expose: s }) {
  let a = $(0);
  function n() {
    a.value |= se.Opening, t("beforeEnter");
  }
  function i() {
    a.value &= ~se.Opening, t("afterEnter");
  }
  function u() {
    a.value |= se.Closing, t("beforeLeave");
  }
  function c() {
    a.value &= ~se.Closing, t("afterLeave");
  }
  if (!Br() && Un())
    return () => oe(zt, { ...e, onBeforeEnter: n, onAfterEnter: i, onBeforeLeave: u, onAfterLeave: c }, l);
  let h = $(null), w = $("visible"), y = E(() => e.unmount ? We.Unmount : We.Hidden);
  s({ el: h, $el: h });
  let { show: b, appear: m } = zr(), { register: f, unregister: v } = Ar(), _ = { value: !0 }, g = pe(), S = { value: !1 }, x = Ps(() => {
    !S.value && w.value !== "hidden" && (w.value = "hidden", v(g), c());
  });
  Z(() => {
    let H = f(g);
    re(H);
  }), ve(() => {
    if (y.value === We.Hidden && g) {
      if (b && w.value !== "visible") {
        w.value = "visible";
        return;
      }
      ue(w.value, { hidden: () => v(g), visible: () => f(g) });
    }
  });
  let I = ot(e.enter), B = ot(e.enterFrom), j = ot(e.enterTo), D = ot(e.entered), M = ot(e.leave), P = ot(e.leaveFrom), A = ot(e.leaveTo);
  Z(() => {
    ve(() => {
      if (w.value === "visible") {
        let H = R(h);
        if (H instanceof Comment && H.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function q(H) {
    let Y = _.value && !m.value, W = R(h);
    !W || !(W instanceof HTMLElement) || Y || (S.value = !0, b.value && n(), b.value || u(), H(b.value ? Cl(W, I, B, j, D, (U) => {
      S.value = !1, U === Vo.Finished && i();
    }) : Cl(W, M, P, A, D, (U) => {
      S.value = !1, U === Vo.Finished && (lo(x) || (w.value = "hidden", v(g), c()));
    })));
  }
  return Z(() => {
    ee([b], (H, Y, W) => {
      q(W), _.value = !1;
    }, { immediate: !0 });
  }), fe(Qo, x), No(E(() => ue(w.value, { visible: se.Open, hidden: se.Closed }) | a.value)), () => {
    let { appear: H, show: Y, enter: W, enterFrom: U, enterTo: G, entered: ce, leave: Q, leaveFrom: $e, leaveTo: Re, ...Oe } = e, qe = { ref: h }, Le = { ...Oe, ...m && b && Et.isServer ? { class: L([o.class, Oe.class, ...I, ...B]) } : {} };
    return te({ theirProps: Le, ourProps: qe, slot: {}, slots: l, attrs: o, features: Os, visible: w.value === "visible", name: "TransitionChild" });
  };
} }), Rr = Ke, zt = T({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: o, slots: l }) {
  let s = mt(), a = E(() => e.show === null && s !== null ? (s.value & se.Open) === se.Open : e.show);
  ve(() => {
    if (![!0, !1].includes(a.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let n = $(a.value ? "visible" : "hidden"), i = Ps(() => {
    n.value = "hidden";
  }), u = $(!0), c = { show: a, appear: E(() => e.appear || !u.value) };
  return Z(() => {
    ve(() => {
      u.value = !1, a.value ? n.value = "visible" : lo(i) || (n.value = "hidden");
    });
  }), fe(Qo, i), fe(Xo, c), () => {
    let h = Gt(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), w = { unmount: e.unmount };
    return te({ ourProps: { ...w, as: "template" }, theirProps: {}, slot: {}, slots: { ...l, default: () => [oe(Rr, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...o, ...w, ...h }, l.default)] }, attrs: {}, features: Os, visible: n.value === "visible", name: "Transition" });
  };
} });
const jr = {
  key: 0,
  class: "po-text-sm po-font-normal po-text-slate-400 po-select-none po-block po-text-left po-pt-5"
}, Fr = { class: "po-grid po-grid-cols-3" }, Nr = { class: "po-bg-white hover:po-bg-slate-200 po-rounded-xl po-p-2 po-transition-colors po-duration-150 po-ease-in" }, Hr = ["href", "target"], qr = { class: "po-flex po-w-14 po-h-14 po-items-center po-justify-center po-duration-100 po-ease-in-out po-overflow-hidden" }, Yr = ["innerHTML"], Ur = { class: "po-text-slate-500 po-font-normal po-text-sm po-text-center" }, Sl = /* @__PURE__ */ T({
  __name: "appList",
  props: {
    list: { default: () => [] },
    openInNewTab: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, o) => (p(!0), d(F, null, K(t.list, (l) => (p(), d("div", null, [
      l.groupName.length > 0 ? (p(), d("span", jr, k(l.groupName), 1)) : V("", !0),
      r("ul", Fr, [
        (p(!0), d(F, null, K(l.apps, (s) => (p(), d("li", Nr, [
          r("a", {
            href: s.url,
            target: t.openInNewTab ? "_blank" : "_self",
            class: "po-flex po-flex-col po-group po-justify-center po-items-center"
          }, [
            r("span", qr, [
              r("span", {
                class: "po-w-9",
                innerHTML: s.icon
              }, null, 8, Yr)
            ]),
            r("span", Ur, k(s.name), 1)
          ], 8, Hr)
        ]))), 256))
      ])
    ]))), 256));
  }
}), Wr = {
  name: "PoAppTray"
}, Zr = /* @__PURE__ */ T({
  ...Wr,
  props: {
    appList: { default: null },
    justApps: { type: Boolean, default: !1 },
    openInNewTab: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, o = ["", "Internal"], l = E(() => {
      const s = [];
      return t.appList && o.forEach((a) => {
        const n = t.appList.filter((i) => i.group === a);
        n.length > 0 && s.push({
          groupName: a,
          apps: n
        });
      }), s;
    });
    return (s, a) => s.justApps ? (p(), N(Sl, {
      key: 1,
      list: l.value,
      "open-in-new-tab": s.openInNewTab
    }, null, 8, ["list", "open-in-new-tab"])) : (p(), N(O(oo), { key: 0 }, {
      default: z(({ open: n }) => [
        C(O(Zo), {
          class: L([n ? "" : "po-text-opacity-90", "po-block po-w-6 po-text-slate-100 genie-effect po-z-50 po-outline-none"])
        }, {
          default: z(() => [
            C(O(ma))
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
          default: z(() => [
            C(O(Go), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
              default: z(() => [
                C(Sl, {
                  list: l.value,
                  "open-in-new-tab": s.openInNewTab
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
}), Gr = {
  key: 0,
  class: "po-absolute po-right-0 po-w-3 po-h-3 po-bg-mpao-orange po-rounded-full po-border-2 po-border-mpao-blue"
}, Kr = {
  key: 0,
  class: "po-space-y-2"
}, Xr = ["onClick"], Qr = { class: "po-flex po-items-center po-justify-between" }, Jr = { class: "po-text-sm po-text-left po-font-semibold po-text-slate-700 po-grow po-flex po-space-x-2 po-items-center" }, ei = { class: "po-grow" }, ti = {
  key: 0,
  class: "po-w-[6px] po-h-[6px] po-rounded-full po-shrink-0 po-bg-mpao-orange po-animate-pulse"
}, oi = { class: "po-text-xs po-font-normal po-text-slate-400 po-shrink-0" }, li = { class: "po-block po-text-sm po-text-slate-500 po-pb-3 po-text-left" }, si = {
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
    return (o, l) => (p(), N(O(oo), null, {
      default: z(({ open: s }) => [
        C(O(Zo), {
          class: L([s ? "" : "text-opacity-90", "po-block po-w-6 po-text-slate-100 genie-effect po-relative po-z-50 po-outline-none"])
        }, {
          default: z(() => [
            o.hasNewNotifications ? (p(), d("span", Gr)) : V("", !0),
            C(O(ra), { class: "po-stroke-current" })
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
          default: z(() => [
            C(O(Go), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
              default: z(() => [
                o.notifications !== null && o.notifications.length > 0 ? (p(), d("ul", Kr, [
                  (p(!0), d(F, null, K(o.notifications, (a) => (p(), d("li", {
                    role: "button",
                    class: "po-space-y-2 po-p-2 po-rounded-lg po-bg-white hover:po-bg-slate-100 po-border po-border-slate-100",
                    onClick: le((n) => o.$emit("button-click", a.name), ["prevent"])
                  }, [
                    r("span", Qr, [
                      r("p", Jr, [
                        r("span", ei, k(a.name), 1),
                        a.seen ? V("", !0) : (p(), d("span", ti))
                      ]),
                      r("span", oi, k(a.time), 1)
                    ]),
                    r("span", li, k(a.text), 1)
                  ], 8, Xr))), 256))
                ])) : (p(), d("span", si, " No notifications to show at the moment. We'll keep you informed."))
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
}, hi = { key: 0 }, mi = { key: 1 }, bi = /* @__PURE__ */ r("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), gi = { class: "po-space-y-2 po-py-2 po-max-h-[250px] po-overflow-y-auto" }, yi = ["onClick"], wi = { class: "po-w-5" }, _i = { class: "" }, $i = { class: "po-block po-text-sm po-font-normal" }, xi = {
  key: 0,
  class: "po-text-left po-block po-text-xs po-text-slate-400"
}, Vi = /* @__PURE__ */ r("div", { class: "po-h-[2px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), ki = { class: "md:po-grid po-grid-cols-2 po-space-x-1 po-pt-2" }, Ci = { class: "po-w-5" }, Si = /* @__PURE__ */ r("span", { class: "po-text-sm po-font-normal" }, "Profile", -1), Pi = { class: "po-w-5" }, Oi = /* @__PURE__ */ r("span", { class: "po-text-sm po-font-normal" }, "Logout", -1), Li = /* @__PURE__ */ r("div", { class: "po-text-xs po-space-x-3 po-text-center po-pt-3" }, [
  /* @__PURE__ */ r("a", {
    href: "",
    class: "po-text-slate-500 hover:po-text-mpao-lightblue"
  }, "Privacy Policy"),
  /* @__PURE__ */ r("a", {
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
    function l(w) {
      t("button-click", w);
    }
    const s = $({
      name: "",
      initials: "",
      image: ""
    });
    function a(w) {
      var y, b;
      return w ? ((b = (y = w.match(/\b[A-Z]/g)) == null ? void 0 : y.join("")) == null ? void 0 : b.substring(0, 2)) ?? "" : "";
    }
    const n = E(() => {
      var f, v, _, g, S, x, I, B, j, D;
      const w = [], y = (f = o.userObject) == null ? void 0 : f.transacting_as_organisation, b = (y == null ? void 0 : y.name) || ((v = o.userObject) == null ? void 0 : v.name), m = (y == null ? void 0 : y.logo) || ((_ = o.userObject) == null ? void 0 : _.avatar);
      return s.value = {
        name: b,
        initials: a(b),
        image: m
      }, w.push({
        id: (g = o.userObject) == null ? void 0 : g.id,
        entity_id: (S = o.userObject) == null ? void 0 : S.entity_id,
        name: (x = o.userObject) == null ? void 0 : x.name,
        identifier: null,
        organisation_uuid: null
      }), ((B = (I = o.userObject) == null ? void 0 : I.organisations) == null ? void 0 : B.length) > 0 && w.push(...(j = o.userObject) == null ? void 0 : j.organisations), w.forEach((M) => {
        M.current = y && Object.keys(y).length > 0 && M.entity_id === y.entity_id;
      }), ((D = o.userObject) == null ? void 0 : D.transacting_as_organisation) === null && (w[0].current = !0), w;
    }), i = $(null), u = $(null), { avatar: c, logo: h } = Be(o);
    return ee(c, () => {
      i.value = c.value;
    }), ee(h, () => {
      u.value = h.value;
    }), qs(() => {
      n.value;
    }), Z(() => {
      n.value;
    }), Ys(() => {
      n.value;
    }), To(() => {
      n.value;
    }), (w, y) => (p(), N(O(oo), null, {
      default: z(({ open: b }) => [
        r("div", null, [
          C(O(Zo), { class: "po-flex po-items-center po-outline-none" }, {
            default: z(() => [
              u.value ? V("", !0) : (p(), d("span", ri, k(s.value.name), 1)),
              u.value ? (p(), d("span", ii, [
                r("img", {
                  class: "po-h-8",
                  src: u.value,
                  alt: ""
                }, null, 8, pi)
              ])) : V("", !0),
              r("div", {
                class: L([
                  {
                    "po-bg-gradient-to-br po-from-slate-50 po-to-blue-100 po-p-1 po-rounded-r-md": u.value
                  }
                ])
              }, [
                r("div", {
                  class: L([[
                    { "text-opacity-90": b },
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
                    alt: s.value.name
                  }, null, 8, ui)) : (p(), d("span", di, k(s.value.initials), 1))
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
            default: z(() => [
              C(O(Go), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
                default: z(() => {
                  var m, f, v, _;
                  return [
                    r("div", ci, [
                      i.value ? (p(), d("img", {
                        key: 0,
                        class: "po-w-20 po-h-20 po-mx-auto po-rounded-full po-overflow-hidden",
                        src: i.value,
                        alt: ""
                      }, null, 8, fi)) : V("", !0),
                      (m = w.userObject) != null && m.name ? (p(), d("span", {
                        key: 1,
                        class: L(["po-text-base po-text-slate-600 po-font-medium po-block", [{ "po-mt-4": i.value }]])
                      }, k((f = w.userObject) == null ? void 0 : f.name), 3)) : V("", !0),
                      (v = w.userObject) != null && v.name ? (p(), d("span", vi, [
                        s.value.name === ((_ = w.userObject) == null ? void 0 : _.name) ? (p(), d("span", hi, "Self")) : (p(), d("span", mi, "User at " + k(s.value.name), 1))
                      ])) : V("", !0)
                    ]),
                    bi,
                    r("div", gi, [
                      (p(!0), d(F, null, K(n.value, (g, S) => (p(), d("a", {
                        href: "#",
                        onClick: le((x) => l(g), ["prevent"]),
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
                        r("span", wi, [
                          g.isPersonal ? (p(), N(O(pl), {
                            key: 0,
                            class: L([
                              "po-stroke-current",
                              { "po-stroke-mpao-lightblue": g.current }
                            ])
                          }, null, 8, ["class"])) : V("", !0),
                          g.isPersonal ? V("", !0) : (p(), N(O(pa), {
                            key: 1,
                            class: L([
                              "po-stroke-current",
                              { "po-stroke-mpao-lightblue": g.current }
                            ])
                          }, null, 8, ["class"]))
                        ]),
                        r("span", _i, [
                          r("span", $i, k(g.name), 1),
                          g.identifier ? (p(), d("span", xi, k(g.identifier), 1)) : V("", !0)
                        ])
                      ], 10, yi))), 128))
                    ]),
                    Vi,
                    r("div", ki, [
                      r("a", {
                        href: "#",
                        onClick: y[0] || (y[0] = le((g) => w.$emit("button-click", "current-profile"), ["prevent"])),
                        class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-slate-50 hover:po-bg-blue-50 po-transition-all po-duration-150 po-ease-out",
                        role: "button"
                      }, [
                        r("span", Ci, [
                          C(O(pl), { class: "po-stroke-current" })
                        ]),
                        Si
                      ]),
                      r("a", {
                        href: "#",
                        onClick: y[1] || (y[1] = le((g) => w.$emit("button-click", "logout"), ["prevent"])),
                        class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-slate-50 hover:po-bg-blue-50 po-transition-all po-duration-150 po-ease-out",
                        role: "button"
                      }, [
                        r("span", Pi, [
                          C(O(aa), { class: "po-stroke-current" })
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
}), so = /* @__PURE__ */ T({
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
}), Di = ["disabled", "aria-disabled"], Ii = ["value", "disabled", "aria-disabled"], Ei = {
  name: "PoButton"
}, ao = /* @__PURE__ */ T({
  ...Ei,
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
    const o = e, l = "po-rounded-md po-transition-colors po-border po-duration-100 po-ease-in-out po-cursor-pointer disabled:po-bg-slate-400 disabled:po-border-slate-400 disabled:po-cursor-default disabled:po-hover:bg-slate-400", s = E(() => {
      switch (o.size) {
        case "sm":
          return "po-px-2 po-py-1 po-text-xs";
        case "md":
          return "po-px-4 po-py-2 po-text-sm";
        case "lg":
          return "po-px-5 po-py-3 po-text-normal";
      }
    }), a = E(() => {
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
    return (n, i) => (p(), d(F, null, [
      n.isLoading ? (p(), d("span", {
        key: 0,
        class: L([[l, s.value], "po-bg-slate-200 hover:po-bg-slate-200 focus:po-bg-slate-200"])
      }, [
        C(so, {
          "dot-color": "po-bg-slate-500",
          class: "po-relative -po-bottom-[0.2rem]"
        })
      ], 2)) : V("", !0),
      n.type == "button" && !n.isLoading ? (p(), d("button", Te({
        key: 1,
        onClick: i[0] || (i[0] = le((u) => n.$emit("button-click", n.to), ["prevent"])),
        class: [l, s.value, a.value],
        disabled: n.disabled,
        "aria-disabled": n.disabled
      }, n.$attrs), [
        X(n.$slots, "label", {}, () => [
          J(k(n.label), 1)
        ])
      ], 16, Di)) : V("", !0),
      n.type == "submit" && !n.isLoading ? (p(), d("input", Te({
        key: 2,
        type: "submit",
        class: [l, s.value, a.value],
        value: n.label,
        disabled: n.disabled,
        "aria-disabled": n.disabled
      }, n.$attrs), null, 16, Ii)) : V("", !0),
      n.type == "link" && !n.isLoading ? (p(), d("a", Te({
        key: 3,
        href: "#",
        onClick: i[1] || (i[1] = le((u) => n.$emit("button-click", n.to), ["prevent"])),
        class: [l, s.value, a.value]
      }, n.$attrs), [
        X(n.$slots, "label", {}, () => [
          J(k(n.label), 1)
        ])
      ], 16)) : V("", !0),
      n.type == "simple" && !n.isLoading ? (p(), d("a", {
        key: 4,
        href: "#",
        onClick: i[2] || (i[2] = le((u) => n.$emit("button-click", n.to), ["prevent"])),
        class: L(["po-text-sm po-transition-colors po-duration-100 po-ease-in-out po-inline-flex po-items-center po-space-x-1", [
          { "po-text-mpao-lightblue hover:po-text-mpao-midblue": !n.overrideColors }
        ]])
      }, [
        X(n.$slots, "label", {}, () => [
          J(k(n.label), 1)
        ])
      ], 2)) : V("", !0)
    ], 64));
  }
});
function Bi(e, t) {
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
function zi(e, t) {
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
function Ai(e, t) {
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
function Ri(e, t) {
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
function ji(e, t) {
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
function Pl(e, t) {
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
function Fi(e, t) {
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
function Ni(e, t) {
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
function Hi(e, t) {
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
function qi(e, t) {
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
function Yi(e, t) {
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
function Ui(e, t) {
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
function Ls(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
  ]);
}
const Ne = () => {
  const e = $("");
  return {
    uniqueId: e,
    generateUniqueId: () => {
      const l = `poid_${Math.random().toString(36).slice(2, 11)}`;
      e.value = l;
    }
  };
};
function Wi() {
  var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
  if (t > 0)
    return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
  var o = e.indexOf("Trident/");
  if (o > 0) {
    var l = e.indexOf("rv:");
    return parseInt(e.substring(l + 3, e.indexOf(".", l)), 10);
  }
  var s = e.indexOf("Edge/");
  return s > 0 ? parseInt(e.substring(s + 5, e.indexOf(".", s)), 10) : -1;
}
let qt;
function ko() {
  ko.init || (ko.init = !0, qt = Wi() !== -1);
}
var no = {
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
    ko(), Mo(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", qt && this.$el.appendChild(e), e.data = "about:blank", qt || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!qt && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const Zi = /* @__PURE__ */ Zs("data-v-b329ee4c");
Us("data-v-b329ee4c");
const Gi = {
  class: "resize-observer",
  tabindex: "-1"
};
Ws();
const Ki = /* @__PURE__ */ Zi((e, t, o, l, s, a) => (p(), N("div", Gi)));
no.render = Ki;
no.__scopeId = "data-v-b329ee4c";
no.__file = "src/components/ResizeObserver.vue";
function Yt(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Yt = function(t) {
    return typeof t;
  } : Yt = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Yt(e);
}
function Xi(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ol(e, t) {
  for (var o = 0; o < t.length; o++) {
    var l = t[o];
    l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(e, l.key, l);
  }
}
function Qi(e, t, o) {
  return t && Ol(e.prototype, t), o && Ol(e, o), e;
}
function Ll(e) {
  return Ji(e) || ep(e) || tp(e) || op();
}
function Ji(e) {
  if (Array.isArray(e))
    return Co(e);
}
function ep(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function tp(e, t) {
  if (e) {
    if (typeof e == "string")
      return Co(e, t);
    var o = Object.prototype.toString.call(e).slice(8, -1);
    if (o === "Object" && e.constructor && (o = e.constructor.name), o === "Map" || o === "Set")
      return Array.from(e);
    if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
      return Co(e, t);
  }
}
function Co(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var o = 0, l = new Array(t); o < t; o++)
    l[o] = e[o];
  return l;
}
function op() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function lp(e) {
  var t;
  return typeof e == "function" ? t = {
    callback: e
  } : t = e, t;
}
function sp(e, t) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l, s, a, n = function(u) {
    for (var c = arguments.length, h = new Array(c > 1 ? c - 1 : 0), w = 1; w < c; w++)
      h[w - 1] = arguments[w];
    if (a = h, !(l && u === s)) {
      var y = o.leading;
      typeof y == "function" && (y = y(u, s)), (!l || u !== s) && y && e.apply(void 0, [u].concat(Ll(a))), s = u, clearTimeout(l), l = setTimeout(function() {
        e.apply(void 0, [u].concat(Ll(a))), l = 0;
      }, t);
    }
  };
  return n._clear = function() {
    clearTimeout(l), l = null;
  }, n;
}
function Ms(e, t) {
  if (e === t)
    return !0;
  if (Yt(e) === "object") {
    for (var o in e)
      if (!Ms(e[o], t[o]))
        return !1;
    return !0;
  }
  return !1;
}
var ap = /* @__PURE__ */ function() {
  function e(t, o, l) {
    Xi(this, e), this.el = t, this.observer = null, this.frozen = !1, this.createObserver(o, l);
  }
  return Qi(e, [{
    key: "createObserver",
    value: function(o, l) {
      var s = this;
      if (this.observer && this.destroyObserver(), !this.frozen) {
        if (this.options = lp(o), this.callback = function(i, u) {
          s.options.callback(i, u), i && s.options.once && (s.frozen = !0, s.destroyObserver());
        }, this.callback && this.options.throttle) {
          var a = this.options.throttleOptions || {}, n = a.leading;
          this.callback = sp(this.callback, this.options.throttle, {
            leading: function(u) {
              return n === "both" || n === "visible" && u || n === "hidden" && !u;
            }
          });
        }
        this.oldResult = void 0, this.observer = new IntersectionObserver(function(i) {
          var u = i[0];
          if (i.length > 1) {
            var c = i.find(function(w) {
              return w.isIntersecting;
            });
            c && (u = c);
          }
          if (s.callback) {
            var h = u.isIntersecting && u.intersectionRatio >= s.threshold;
            if (h === s.oldResult)
              return;
            s.oldResult = h, s.callback(h, u);
          }
        }, this.options.intersection), Mo(function() {
          s.observer && s.observer.observe(s.el);
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
function Ts(e, t, o) {
  var l = t.value;
  if (l)
    if (typeof IntersectionObserver > "u")
      console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");
    else {
      var s = new ap(e, l, o);
      e._vue_visibilityState = s;
    }
}
function np(e, t, o) {
  var l = t.value, s = t.oldValue;
  if (!Ms(l, s)) {
    var a = e._vue_visibilityState;
    if (!l) {
      Ds(e);
      return;
    }
    a ? a.createObserver(l, o) : Ts(e, {
      value: l
    }, o);
  }
}
function Ds(e) {
  var t = e._vue_visibilityState;
  t && (t.destroyObserver(), delete e._vue_visibilityState);
}
var rp = {
  beforeMount: Ts,
  updated: np,
  unmounted: Ds
};
function ip(e) {
  return { all: e = e || /* @__PURE__ */ new Map(), on: function(t, o) {
    var l = e.get(t);
    l && l.push(o) || e.set(t, [o]);
  }, off: function(t, o) {
    var l = e.get(t);
    l && l.splice(l.indexOf(o) >>> 0, 1);
  }, emit: function(t, o) {
    (e.get(t) || []).slice().map(function(l) {
      l(o);
    }), (e.get("*") || []).slice().map(function(l) {
      l(t, o);
    });
  } };
}
var pp = {
  itemsLimit: 1e3
}, up = /(auto|scroll)/;
function Is(e, t) {
  return e.parentNode === null ? t : Is(e.parentNode, t.concat([e]));
}
var mo = function(t, o) {
  return getComputedStyle(t, null).getPropertyValue(o);
}, dp = function(t) {
  return mo(t, "overflow") + mo(t, "overflow-y") + mo(t, "overflow-x");
}, cp = function(t) {
  return up.test(dp(t));
};
function Ml(e) {
  if (e instanceof HTMLElement || e instanceof SVGElement) {
    for (var t = Is(e.parentNode, []), o = 0; o < t.length; o += 1)
      if (cp(t[o]))
        return t[o];
    return document.scrollingElement || document.documentElement;
  }
}
function So(e) {
  return So = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, So(e);
}
var Es = {
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
function Bs() {
  return this.items.length && So(this.items[0]) !== "object";
}
var Po = !1;
if (typeof window < "u") {
  Po = !1;
  try {
    var fp = Object.defineProperty({}, "passive", {
      get: function() {
        Po = !0;
      }
    });
    window.addEventListener("test", null, fp);
  } catch {
  }
}
let vp = 0;
var Jo = {
  name: "RecycleScroller",
  components: {
    ResizeObserver: no
  },
  directives: {
    ObserveVisibility: rp
  },
  props: {
    ...Es,
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
        }, t = this.items, o = this.sizeField, l = this.minItemSize;
        let s = 1e4, a = 0, n;
        for (let i = 0, u = t.length; i < u; i++)
          n = t[i][o] || l, n < s && (s = n), a += n, e[i] = { accumulator: a, size: n };
        return this.$_computedMinItemSize = s, e;
      }
      return [];
    },
    simpleArray: Bs,
    itemIndexByKey() {
      const { keyField: e, items: t } = this, o = {};
      for (let l = 0, s = t.length; l < s; l++)
        o[t[l][e]] = l;
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
    addView(e, t, o, l, s) {
      const a = Gs({
        id: vp++,
        index: t,
        used: !0,
        key: l,
        type: s
      }), n = Ks({
        item: o,
        position: 0,
        nr: a
      });
      return e.push(n), n;
    },
    unuseView(e, t = !1) {
      const o = this.$_unusedViews, l = e.nr.type;
      let s = o.get(l);
      s || (s = [], o.set(l, s)), s.push(e), t || (e.nr.used = !1, e.position = -9999);
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
      const o = this.itemSize, l = this.gridItems || 1, s = this.itemSecondarySize || o, a = this.$_computedMinItemSize, n = this.typeField, i = this.simpleArray ? null : this.keyField, u = this.items, c = u.length, h = this.sizes, w = this.$_views, y = this.$_unusedViews, b = this.pool, m = this.itemIndexByKey;
      let f, v, _, g, S;
      if (!c)
        f = v = g = S = _ = 0;
      else if (this.$_prerender)
        f = g = 0, v = S = Math.min(this.prerender, u.length), _ = null;
      else {
        const P = this.getScroll();
        if (t) {
          let H = P.start - this.$_lastUpdateScrollPosition;
          if (H < 0 && (H = -H), o === null && H < a || H < o)
            return {
              continuous: !0
            };
        }
        this.$_lastUpdateScrollPosition = P.start;
        const A = this.buffer;
        P.start -= A, P.end += A;
        let q = 0;
        if (this.$refs.before && (q = this.$refs.before.scrollHeight, P.start -= q), this.$refs.after) {
          const H = this.$refs.after.scrollHeight;
          P.end += H;
        }
        if (o === null) {
          let H, Y = 0, W = c - 1, U = ~~(c / 2), G;
          do
            G = U, H = h[U].accumulator, H < P.start ? Y = U : U < c - 1 && h[U + 1].accumulator > P.start && (W = U), U = ~~((Y + W) / 2);
          while (U !== G);
          for (U < 0 && (U = 0), f = U, _ = h[c - 1].accumulator, v = U; v < c && h[v].accumulator < P.end; v++)
            ;
          for (v === -1 ? v = u.length - 1 : (v++, v > c && (v = c)), g = f; g < c && q + h[g].accumulator < P.start; g++)
            ;
          for (S = g; S < c && q + h[S].accumulator < P.end; S++)
            ;
        } else {
          f = ~~(P.start / o * l);
          const H = f % l;
          f -= H, v = Math.ceil(P.end / o * l), g = Math.max(0, Math.floor((P.start - q) / o * l)), S = Math.floor((P.end - q) / o * l), f < 0 && (f = 0), v > c && (v = c), g < 0 && (g = 0), S > c && (S = c), _ = Math.ceil(c / l) * o;
        }
      }
      v - f > pp.itemsLimit && this.itemsLimitError(), this.totalSize = _;
      let x;
      const I = f <= this.$_endIndex && v >= this.$_startIndex;
      if (I)
        for (let P = 0, A = b.length; P < A; P++)
          x = b[P], x.nr.used && (e && (x.nr.index = m[x.item[i]]), (x.nr.index == null || x.nr.index < f || x.nr.index >= v) && this.unuseView(x));
      const B = I ? null : /* @__PURE__ */ new Map();
      let j, D, M;
      for (let P = f; P < v; P++) {
        j = u[P];
        const A = i ? j[i] : j;
        if (A == null)
          throw new Error(`Key is ${A} on item (keyField is '${i}')`);
        if (x = w.get(A), !o && !h[P].size) {
          x && this.unuseView(x);
          continue;
        }
        D = j[n];
        let q = y.get(D), H = !1;
        if (!x)
          I ? q && q.length ? x = q.pop() : x = this.addView(b, P, j, A, D) : (M = B.get(D) || 0, (!q || M >= q.length) && (x = this.addView(b, P, j, A, D), this.unuseView(x, !0), q = y.get(D)), x = q[M], B.set(D, M + 1)), w.delete(x.nr.key), x.nr.used = !0, x.nr.index = P, x.nr.key = A, x.nr.type = D, w.set(A, x), H = !0;
        else if (!x.nr.used && (x.nr.used = !0, H = !0, q)) {
          const Y = q.indexOf(x);
          Y !== -1 && q.splice(Y, 1);
        }
        x.item = j, H && (P === u.length - 1 && this.$emit("scroll-end"), P === 0 && this.$emit("scroll-start")), o === null ? (x.position = h[P - 1].accumulator, x.offset = 0) : (x.position = Math.floor(P / l) * o, x.offset = P % l * s);
      }
      return this.$_startIndex = f, this.$_endIndex = v, this.emitUpdate && this.$emit("update", f, v, g, S), clearTimeout(this.$_sortTimer), this.$_sortTimer = setTimeout(this.sortViews, this.updateInterval + 300), {
        continuous: I
      };
    },
    getListenerTarget() {
      let e = Ml(this.$el);
      return window.document && (e === window.document.documentElement || e === window.document.body) && (e = window), e;
    },
    getScroll() {
      const { $el: e, direction: t } = this, o = t === "vertical";
      let l;
      if (this.pageMode) {
        const s = e.getBoundingClientRect(), a = o ? s.height : s.width;
        let n = -(o ? s.top : s.left), i = o ? window.innerHeight : window.innerWidth;
        n < 0 && (i += n, n = 0), n + i > a && (i = a - n), l = {
          start: n,
          end: n + i
        };
      } else
        o ? l = {
          start: e.scrollTop,
          end: e.scrollTop + e.clientHeight
        } : l = {
          start: e.scrollLeft,
          end: e.scrollLeft + e.clientWidth
        };
      return l;
    },
    applyPageMode() {
      this.pageMode ? this.addListeners() : this.removeListeners();
    },
    addListeners() {
      this.listenerTarget = this.getListenerTarget(), this.listenerTarget.addEventListener("scroll", this.handleScroll, Po ? {
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
      let o, l, s;
      if (this.pageMode) {
        const a = Ml(this.$el), n = a.tagName === "HTML" ? 0 : a[t.scroll], i = a.getBoundingClientRect(), c = this.$el.getBoundingClientRect()[t.start] - i[t.start];
        o = a, l = t.scroll, s = e + n + c;
      } else
        o = this.$el, l = t.scroll, s = e;
      o[l] = s;
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
const hp = {
  key: 0,
  ref: "before",
  class: "vue-recycle-scroller__slot"
}, mp = {
  key: 1,
  ref: "after",
  class: "vue-recycle-scroller__slot"
};
function bp(e, t, o, l, s, a) {
  const n = El("ResizeObserver"), i = Xs("observe-visibility");
  return Pe((p(), d(
    "div",
    {
      class: L(["vue-recycle-scroller", {
        ready: s.ready,
        "page-mode": o.pageMode,
        [`direction-${e.direction}`]: !0
      }]),
      onScrollPassive: t[0] || (t[0] = (...u) => a.handleScroll && a.handleScroll(...u))
    },
    [
      e.$slots.before ? (p(), d(
        "div",
        hp,
        [
          X(e.$slots, "before")
        ],
        512
        /* NEED_PATCH */
      )) : V("v-if", !0),
      (p(), N(he(o.listTag), {
        ref: "wrapper",
        style: Do({ [e.direction === "vertical" ? "minHeight" : "minWidth"]: s.totalSize + "px" }),
        class: L(["vue-recycle-scroller__item-wrapper", o.listClass])
      }, {
        default: z(() => [
          (p(!0), d(
            F,
            null,
            K(s.pool, (u) => (p(), N(he(o.itemTag), Te({
              key: u.nr.id,
              style: s.ready ? {
                transform: `translate${e.direction === "vertical" ? "Y" : "X"}(${u.position}px) translate${e.direction === "vertical" ? "X" : "Y"}(${u.offset}px)`,
                width: o.gridItems ? `${e.direction === "vertical" && o.itemSecondarySize || o.itemSize}px` : void 0,
                height: o.gridItems ? `${e.direction === "horizontal" && o.itemSecondarySize || o.itemSize}px` : void 0
              } : null,
              class: ["vue-recycle-scroller__item-view", [
                o.itemClass,
                {
                  hover: !o.skipHover && s.hoverKey === u.nr.key
                }
              ]]
            }, Qs(o.skipHover ? {} : {
              mouseenter: () => {
                s.hoverKey = u.nr.key;
              },
              mouseleave: () => {
                s.hoverKey = null;
              }
            })), {
              default: z(() => [
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
        mp,
        [
          X(e.$slots, "after")
        ],
        512
        /* NEED_PATCH */
      )) : V("v-if", !0),
      C(n, { onNotify: a.handleResize }, null, 8, ["onNotify"])
    ],
    34
    /* CLASS, HYDRATE_EVENTS */
  )), [
    [i, a.handleVisibilityChange]
  ]);
}
Jo.render = bp;
Jo.__file = "src/components/RecycleScroller.vue";
var el = {
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
              let o, l;
              if (t.borderBoxSize) {
                const s = t.borderBoxSize[0];
                o = s.inlineSize, l = s.blockSize;
              } else
                o = t.contentRect.width, l = t.contentRect.height;
              t.target.$_vs_onResize(t.target.$_vs_id, o, l);
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
    ...Es,
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
    simpleArray: Bs,
    itemsWithSize() {
      const e = [], { items: t, keyField: o, simpleArray: l } = this, s = this.vscrollData.sizes, a = t.length;
      for (let n = 0; n < a; n++) {
        const i = t[n], u = l ? n : i[o];
        let c = s[u];
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
      let l = 0, s = 0;
      const a = Math.min(e.length, t.length);
      for (let i = 0; i < a && !(l >= o); i++)
        l += t[i].size || this.minItemSize, s += e[i].size || this.minItemSize;
      const n = s - l;
      n !== 0 && (this.$el.scrollTop += n);
    }
  },
  beforeCreate() {
    this.$_updates = [], this.$_undefinedSizes = 0, this.$_undefinedMap = {}, this.$_events = ip();
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
function gp(e, t, o, l, s, a) {
  const n = El("RecycleScroller");
  return p(), N(n, Te({
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
    default: z(({ item: i, index: u, active: c }) => [
      X(e.$slots, "default", ut(dt({
        item: i.item,
        index: u,
        active: c,
        itemWithSize: i
      })))
    ]),
    before: z(() => [
      X(e.$slots, "before")
    ]),
    after: z(() => [
      X(e.$slots, "after")
    ]),
    empty: z(() => [
      X(e.$slots, "empty")
    ]),
    _: 3
    /* FORWARDED */
  }, 16, ["items", "min-item-size", "direction", "list-tag", "item-tag", "onResize", "onVisible"]);
}
el.render = gp;
el.__file = "src/components/DynamicScroller.vue";
var zs = {
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
        const o = this.vscrollData.sizes[t], l = this.vscrollData.sizes[e];
        o != null && o !== l && this.applySize(o);
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
    return oe(this.tag, this.$slots.default());
  }
};
zs.__file = "src/components/DynamicScrollerItem.vue";
const yp = {
  key: 0,
  class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1"
}, ze = /* @__PURE__ */ T({
  __name: "FormErrorMessage",
  props: {
    errorMessage: { default: null }
  },
  setup(e) {
    const l = Be(e).errorMessage, s = E(
      () => !!l.value && l.value.trim() !== ""
    );
    return (a, n) => s.value ? (p(), d("p", yp, [
      r("span", null, k(O(l)), 1)
    ])) : V("", !0);
  }
}), wp = {
  key: 0,
  class: "po-mt-2 po-text-sm po-text-slate-500"
}, Ae = /* @__PURE__ */ T({
  __name: "FormMessage",
  props: {
    message: { default: null }
  },
  setup(e) {
    return (t, o) => t.message !== null ? (p(), d("p", wp, k(t.message), 1)) : V("", !0);
  }
}), _p = { class: "po-block po-w-4 po-text-mpao-lightblue hover:po-text-mpao-midblue po-transition-colors po-duration-150 po-ease-out" }, He = /* @__PURE__ */ T({
  __name: "FormInfo",
  props: {
    info: { default: "" }
  },
  setup(e) {
    return (t, o) => t.info !== "" ? (p(), N(O(io), {
      key: 0,
      text: t.info,
      placement: "right",
      strategy: "fixed"
    }, {
      default: z(() => [
        r("span", _p, [
          C(O(qi), { class: "po-fill-current" })
        ])
      ]),
      _: 1
    }, 8, ["text"])) : V("", !0);
  }
}), $p = ["for"], xp = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Vp = { class: "po-relative po-mt-1" }, kp = {
  role: "button",
  ref: "comboboxButton"
}, Cp = ["placeholder", "disabled", "id"], Sp = {
  class: /* @__PURE__ */ L(["group-hover:po-text-white po-block po-truncate"])
}, Pp = {
  key: 0,
  class: "po-block po-text-xs po-opacity-60"
}, Op = {
  key: 1,
  class: "scroller po-max-h-60 po-h-full po-overflow-y-auto"
}, Lp = ["onMousedown"], Mp = {
  class: /* @__PURE__ */ L(["group-hover:po-text-white po-block po-truncate"])
}, Tp = {
  key: 0,
  class: "po-block po-text-xs po-opacity-60"
}, Dp = {
  name: "PoSelectField"
}, Ip = /* @__PURE__ */ T({
  ...Dp,
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
    const o = e, l = $(""), s = $(""), a = $(), n = $(!1), i = $(!1), u = $(), c = $(null), h = $({
      viewStartIdx: 0,
      viewEndIdx: 0,
      visibleStartIdx: 0,
      visibleEndIdx: 0
    }), w = E(() => {
      var M, P;
      const D = l.value.toLowerCase();
      return D === "" ? ((M = o.list) == null ? void 0 : M.map((A) => ({
        ...A,
        active: a.value === A.id
      }))) ?? [] : ((P = o.list) == null ? void 0 : P.filter((A) => A.name.toLowerCase().includes(D)).map((A) => ({
        ...A,
        active: a.value === A.id
      }))) ?? [];
    });
    function y(D) {
      if (o.object)
        return D == null ? void 0 : D.name;
      if (w.value) {
        let M = w.value.find((P) => P.id === D);
        return M == null ? void 0 : M.name;
      } else if (o.placeholder)
        return o.placeholder;
    }
    a.value = o.modelValue, To(() => {
      a.value = o.modelValue;
    }), ee(a, () => {
      s.value = y(a.value);
    }), It(c, () => {
      n.value = !!i.value;
    });
    function b(D) {
      a.value = D, s.value = D.name, l.value = "", t("selected", o.object ? D : D.id), t("update:modelValue", o.object ? D : D.id), n.value = !!i.value;
    }
    const m = $();
    let f;
    const { uniqueId: v, generateUniqueId: _ } = Ne(), g = $(o.id);
    Z(() => {
      o.id === "" && (_(), g.value = v.value), s.value = y(o.modelValue), f = Dt(u.value, m.value, {
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
      i.value = !0, n.value = !0, f && f.update();
    }
    re(() => {
      f && f.destroy();
    });
    function x() {
      i.value = !1, setTimeout(() => {
        n.value = !1;
      }, 100);
    }
    const I = (D) => {
      let M = D.target.value;
      l.value = M;
    };
    function B(D, M, P, A) {
      h.value.viewStartIdx = D, h.value.viewEndIdx = M, h.value.visibleStartIdx = P, h.value.visibleEndIdx = A;
    }
    function j() {
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
      r("label", {
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700",
        for: g.value
      }, [
        r("span", null, k(D.label), 1),
        D.required ? (p(), d("span", xp, "*")) : V("", !0),
        C(He, { info: D.info }, null, 8, ["info"])
      ], 8, $p),
      r("div", Vp, [
        r("div", kp, [
          Pe(r("input", {
            type: "text",
            ref_key: "selectBox",
            ref: u,
            class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm",
            placeholder: D.placeholder,
            disabled: D.disabled,
            "onUpdate:modelValue": M[0] || (M[0] = (P) => s.value = P),
            onInput: I,
            onFocus: S,
            onBlur: x,
            id: g.value
          }, null, 40, Cp), [
            [Pt, s.value]
          ]),
          r("span", {
            class: "po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-rounded-r-md po-px-2 focus:po-outline-none",
            role: "button",
            onMousedown: M[1] || (M[1] = le((P) => n.value = !n.value, ["stop"]))
          }, [
            C(O(Ni), {
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
          D.dynamicScroll ? (p(), N(O(el), {
            key: 0,
            items: w.value,
            "min-item-size": 32,
            "key-field": "id",
            class: "scroller po-max-h-60 po-h-full po-overflow-y-auto",
            onResize: j,
            onUpdate: B
          }, {
            default: z(({ item: P, index: A, active: q }) => [
              C(O(zs), {
                item: P,
                active: q,
                "size-dependencies": [P.name],
                onMousedown: le((H) => b(P), ["stop"]),
                "data-index": A,
                class: L([
                  "po-relative po-group po-select-none po-py-2 po-pl-3 po-pr-9 po-cursor-pointer hover:po-bg-mpao-lightblue",
                  P.active ? "po-bg-mpao-lightblue po-text-white" : "po-text-slate-900"
                ])
              }, {
                default: z(() => [
                  r("span", Sp, [
                    J(k((P == null ? void 0 : P.name) ?? "") + " ", 1),
                    P != null && P.subtitle ? (p(), d("span", Pp, k(P == null ? void 0 : P.subtitle), 1)) : V("", !0)
                  ])
                ]),
                _: 2
              }, 1032, ["item", "active", "size-dependencies", "onMousedown", "data-index", "class"])
            ]),
            _: 1
          }, 8, ["items"])) : (p(), d("ul", Op, [
            (p(!0), d(F, null, K(w.value, (P) => (p(), d("li", {
              onMousedown: le((A) => b(P), ["stop"]),
              class: L([
                "po-relative po-group po-select-none po-py-2 po-pl-3 po-pr-9 po-cursor-pointer hover:po-bg-mpao-lightblue",
                P.active ? "po-bg-mpao-lightblue po-text-white" : "po-text-slate-900"
              ])
            }, [
              r("span", Mp, [
                J(k((P == null ? void 0 : P.name) ?? "") + " ", 1),
                P != null && P.subtitle ? (p(), d("span", Tp, k(P == null ? void 0 : P.subtitle), 1)) : V("", !0)
              ])
            ], 42, Lp))), 256))
          ]))
        ], 512), [
          [Ot, n.value && w.value.length > 0]
        ])
      ]),
      C(Ae, { message: D.message }, null, 8, ["message"]),
      C(ze, { "error-message": D.errorMessage }, null, 8, ["error-message"])
    ], 2));
  }
}), Ep = /* @__PURE__ */ r("div", { class: "po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity" }, null, -1), Bp = { class: "po-fixed po-z-10 po-inset-0" }, zp = { class: "po-flex po-justify-center po-items-start po-min-h-screen sm:po-px-4 sm:po-pt-10 sm:po-pb-20 po-text-center sm:po-block po-max-h-screen po-overflow-y-hidden" }, Ap = /* @__PURE__ */ r("span", {
  class: "po-hidden sm:po-inline-block sm:po-align-middle sm:po-h-screen",
  "aria-hidden": "true"
}, "​", -1), Rp = { class: "po-flex po-items-center po-bg-white po-rounded-t-xl po-p-5" }, jp = { class: "po-grow po-text-md po-font-bold po-text-slate-600" }, Fp = { class: "po-shrink-0" }, Np = /* @__PURE__ */ r("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), Hp = {
  key: 0,
  class: "po-bg-slate-50 po-rounded-b-xl"
}, qp = {
  name: "PoModal"
}, At = /* @__PURE__ */ T({
  ...qp,
  props: {
    openBtnLabel: { default: "" },
    modalTitle: { default: "Modal windows" },
    show: { type: Boolean, default: !1 },
    modalWidth: { default: "sm:po-max-w-xl" },
    modalHeight: { default: "" }
  },
  emits: ["modal-closed"],
  setup(e, { emit: t }) {
    const o = e, { show: l } = Be(o), s = $(!1);
    ee(l, () => {
      s.value = l.value;
    });
    function a() {
      s.value = !1, t("modal-closed", !0);
    }
    const n = o.modalTitle.toLowerCase().replace(/\s+/g, "-"), i = new URLSearchParams(window.location.search);
    return s.value = i.get("modal") !== void 0 && i.get("modal") === n, (u, c) => (p(), d("div", null, [
      u.openBtnLabel.length > 0 ? (p(), N(O(ao), {
        key: 0,
        label: u.openBtnLabel,
        onClick: c[0] || (c[0] = (h) => s.value = !0)
      }, null, 8, ["label"])) : V("", !0),
      (p(), N(Lt, { to: "body" }, [
        C(O(zt), {
          as: "template",
          show: s.value
        }, {
          default: z(() => [
            C(O(Jt), {
              as: "div",
              class: "po-relative po-z-50",
              onClose: a
            }, {
              default: z(() => [
                C(O(Ke), {
                  as: "template",
                  enter: "po-ease-out po-duration-300",
                  "enter-from": "po-opacity-0",
                  "enter-to": "po-opacity-100",
                  leave: "po-ease-in po-duration-200",
                  "leave-from": "po-opacity-100",
                  "leave-to": "po-opacity-0"
                }, {
                  default: z(() => [
                    Ep
                  ]),
                  _: 1
                }),
                r("div", Bp, [
                  r("div", zp, [
                    Ap,
                    C(O(Ke), {
                      as: "template",
                      enter: "po-ease-out po-duration-300",
                      "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                      "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                      leave: "po-ease-in po-duration-200",
                      "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                      "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                    }, {
                      default: z(() => [
                        C(O(eo), {
                          class: L(["po-relative po-inline-block po-align-bottom po-bg-white sm:po-rounded-xl po-text-left po-shadow-xl po-transform po-transition-all sm:po-align-top po-w-full", u.modalWidth])
                        }, {
                          default: z(() => [
                            r("div", Rp, [
                              r("h3", jp, k(u.modalTitle), 1),
                              r("div", Fp, [
                                r("span", {
                                  role: "button",
                                  class: "po-block",
                                  onClick: a
                                }, [
                                  C(O(Wt), { class: "po-w-5 po-stroke-slate-500 hover:po-stroke-mpao-orange po-transition-colors po-duration-150 po-ease-in-out" })
                                ])
                              ])
                            ]),
                            Np,
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
                              X(u.$slots, "content")
                            ], 2),
                            u.$slots.footer ? (p(), d("div", Hp, [
                              X(u.$slots, "footer")
                            ])) : V("", !0)
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
}), Yp = ["for"], Up = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Wp = ["name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], Zp = {
  name: "PoTextarea"
}, Gp = /* @__PURE__ */ T({
  ...Zp,
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
    const o = e, l = (i) => {
      let u = i.target.value;
      t("update:modelValue", u);
    }, { uniqueId: s, generateUniqueId: a } = Ne(), n = $(o.id);
    return Z(() => {
      o.id === "" && (a(), n.value = s.value);
    }), (i, u) => (p(), d("div", {
      class: L(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": i.display === "horizontal" }]])
    }, [
      r("label", {
        for: n.value,
        class: "po-text-sm po-font-medium po-text-slate-700 po-flex po-items-center po-space-x-1"
      }, [
        r("span", null, k(i.label), 1),
        i.required ? (p(), d("span", Up, "*")) : V("", !0),
        C(He, { info: i.info }, null, 8, ["info"])
      ], 8, Yp),
      r("textarea", Te({
        name: `${n.value}-field`,
        id: n.value,
        value: i.modelValue,
        placeholder: i.placeholder,
        disabled: i.disabled,
        required: i.required,
        "aria-describedby": `${i.id}-description`,
        "aria-required": i.required,
        "aria-disabled": i.disabled
      }, i.$attrs, {
        onInput: l,
        class: "po-mt-1 po-peer po-px-3 po-py-2 po-block po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-border-slate-300 po-bg-white focus:po-border-mpao-lightblue focus:po-ring-0 invalid:po-border-red-400 invalid:po-focus:border-red-600 invalid:focus:po-ring-red-600 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default"
      }), null, 16, Wp),
      C(Ae, { message: i.message }, null, 8, ["message"]),
      C(ze, { "error-message": i.errorMessage }, null, 8, ["error-message"])
    ], 2));
  }
}), Kp = { class: "po-w-5 po-h-5" }, Xp = { action: "" }, Qp = /* @__PURE__ */ r("br", null, null, -1), Jp = { class: "po-p-5" }, eu = /* @__PURE__ */ T({
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
    ], l = $({
      type: 1,
      message: ""
    });
    return (s, a) => (p(), d(F, null, [
      r("button", {
        onClick: a[0] || (a[0] = le(() => t.value = !0, ["prevent"])),
        class: "po-flex po-items-center po-w-full po-group po-space-x-3 po-px-2 po-py-3 po-transition-colors po-duration-100 po-ease-in-out po-rounded-lg po-outline-none po-ring-0 po-text-slate-600 hover:po-text-mpao-lightblue hover:po-bg-slate-100",
        title: "Go to feedback"
      }, [
        r("span", Kp, [
          C(O(ua), { class: "po-stroke-current group-hover:po-stroke-mpao-orange po-w-5 po-h-5 po-stroke-2" })
        ]),
        r("span", {
          class: L(["po-text-sm po-leading-none po-font-medium po-shrink-0 po-text-left po-transition-opacity po-duration-150 po-ease-out", [
            { "po-opacity-1": s.sidebarOpen },
            { "po-opacity-0": !s.sidebarOpen },
            { "po-hidden": s.hideSidebarItemLabel }
          ]])
        }, "Feedback", 2)
      ]),
      C(At, {
        show: t.value,
        onModalClosed: a[3] || (a[3] = () => t.value = !1),
        "modal-title": "Feedback"
      }, {
        content: z(() => [
          r("form", Xp, [
            C(Ip, {
              label: "Type",
              list: o,
              modelValue: l.value.type,
              "onUpdate:modelValue": a[1] || (a[1] = (n) => l.value.type = n)
            }, null, 8, ["modelValue"]),
            Qp,
            C(Gp, {
              cols: "6",
              rows: "6",
              label: "Description",
              modelValue: l.value.message,
              "onUpdate:modelValue": a[2] || (a[2] = (n) => l.value.message = n)
            }, null, 8, ["modelValue"])
          ])
        ]),
        footer: z(() => [
          r("div", Jp, [
            C(ao, {
              label: "Send",
              type: "button"
            })
          ])
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), tu = { key: 0 }, ou = ["innerHTML"], Tl = /* @__PURE__ */ T({
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
    function l(a = "") {
      const { type: n } = o;
      t("item-click", {
        actionType: n === "tab" ? "button-click" : "app-click",
        action: a
      });
    }
    function s() {
      var n, i;
      const a = ((n = o.item) == null ? void 0 : n.name) || ((i = o.item) == null ? void 0 : i.label) || "";
      return o.sidebarOpen ? "" : a;
    }
    return (a, n) => a.item ? (p(), d("li", tu, [
      r("span", null, [
        C(O(io), {
          text: s(),
          placement: "right",
          strategy: "fixed"
        }, {
          default: z(() => [
            a.item.disabled ? V("", !0) : (p(), d("button", {
              key: 0,
              onClick: n[0] || (n[0] = (i) => l(a.item.name || a.item.url)),
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
                }, null, 8, ou)) : (p(), N(he(a.item.icon), {
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
                class: L(["po-text-sm po-leading-none po-font-medium po-shrink-0 po-text-left po-transition-opacity po-duration-150 po-ease-out", [
                  { "po-opacity-1": a.sidebarOpen },
                  { "po-opacity-0": !a.sidebarOpen },
                  { "po-hidden": a.hideSidebarItemLabel }
                ]])
              }, k(a.item.name || a.item.label), 3)
            ], 2))
          ]),
          _: 1
        }, 8, ["text"])
      ])
    ])) : V("", !0);
  }
}), lu = { class: "po-grow" }, su = { class: "po-mt-2 po-mb-5" }, au = { class: "po-mt-2 po-mb-5" }, nu = {
  key: 0,
  class: "po-mt-2 po-shrink-0 po-mb-2 po-border-t po-border-slate-200 po-pt-2"
}, ru = {
  name: "PoSidebarDrawer"
}, a2 = /* @__PURE__ */ T({
  ...ru,
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
    const o = e, l = $(!0), s = $(window.innerWidth), a = $(!1), n = $(!1), i = $(!0), u = () => {
      y();
    }, c = E(() => {
      var f, v;
      let b = [];
      const m = (f = o.apps) == null ? void 0 : f.filter((_) => _.code == o.appCode)[0];
      if (m) {
        let _ = (v = o.apps) == null ? void 0 : v.filter(
          (g) => m.related.includes(g.code)
        );
        _ == null || _.forEach((g) => {
          b.push(g);
        });
      }
      return b;
    });
    Z(() => {
      window.addEventListener("resize", u), y();
    });
    function h({ actionType: b, action: m }) {
      t(b, m), a.value && xe.emit("sidebarOpen", !1);
    }
    function w(b) {
      return l.value ? "" : b;
    }
    function y() {
      s.value = window.innerWidth, s.value <= 1024 ? (a.value = !0, xe.emit("sidebarOpen", !1)) : a.value = !1;
    }
    return Lo(() => {
      window.removeEventListener("resize", u);
    }), xe.on("sidebarOpen", (b) => {
      typeof b == "boolean" && (l.value = b, b ? (n.value = !1, setTimeout(() => {
        i.value = !0;
      }, 150)) : (i.value = !1, setTimeout(() => {
        n.value = !0;
      }, 320)));
    }), (b, m) => {
      var f;
      return p(), d("aside", {
        class: L(["po-flex po-flex-col po-px-3 po-pt-[78px] po-top-0 po-bottom-0 po-bg-white po-overflow-y-auto po-overflow-x-hidden po-transition-all po-duration-300 po-ease-in-out po-border-r po-border-slate-50 po-z-[49] po-fixed", [
          { "po-w-[256px]": l.value && !a.value },
          { "po-w-[64px]": !l.value && !a.value },
          { "po-w-[256px] po-left-0 po-shadow": a.value && l.value },
          {
            "po-w-[256px] -po-left-[256px]  po-shadow-lg": a.value && !l.value
          }
        ]])
      }, [
        r("div", lu, [
          (p(!0), d(F, null, K(b.content, (v, _) => (p(), N(O($l), {
            key: `sidebar-group-${_}`,
            defaultOpen: !0
          }, {
            default: z(({ open: g }) => [
              v.groupName ? (p(), N(O(xl), {
                key: 0,
                class: L([[
                  { "po-mb-3": g === "" },
                  { "po-ml-0 po-text-center": n.value },
                  { "po-ml-2 po-text-left": !n.value },
                  { "po-animate-fadeOut": !n.value && !l.value },
                  { "po-animate-fadeIn": n.value }
                ], "po-uppercase po-select-none po-text-xs po-font-semibold po-text-slate-400 po-block po-w-full"])
              }, {
                default: z(() => [
                  J(k(i.value ? v.groupName : v.groupName.slice(0, 2)), 1)
                ]),
                _: 2
              }, 1032, ["class"])) : V("", !0),
              C(Ze, {
                "enter-active-class": "po-transition po-duration-100 po-ease-out",
                "enter-from-class": "po-transform po-scale-95 po-opacity-0",
                "enter-to-class": "po-transform po-scale-100 po-opacity-100",
                "leave-active-class": "po-transition po-duration-75 po-ease-out",
                "leave-from-class": "po-transform po-scale-100 po-opacity-100",
                "leave-to-class": "po-transform po-scale-95 po-opacity-0"
              }, {
                default: z(() => [
                  C(O(Vl), null, {
                    default: z(() => [
                      r("ul", su, [
                        (p(!0), d(F, null, K(v.items, (S) => (p(), N(Tl, {
                          key: S.label,
                          item: S,
                          sidebarOpen: l.value,
                          hideSidebarItemLabel: n.value,
                          currRoute: b.currRoute,
                          onItemClick: h
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
          ((f = c.value) == null ? void 0 : f.length) > 0 ? (p(), N(O($l), {
            key: 0,
            defaultOpen: !0
          }, {
            default: z(({ open: v }) => [
              b.appsLabel ? (p(), N(O(xl), {
                key: 0,
                class: L([[
                  { "po-mb-3": v === "" },
                  { "po-ml-0 po-text-center": n.value },
                  { "po-ml-2 po-text-left": !n.value },
                  { "po-animate-fadeOut": !n.value && !l.value },
                  { "po-animate-fadeIn": n.value }
                ], "po-uppercase po-select-none po-text-xs po-font-semibold po-text-slate-400 po-block po-w-full"])
              }, {
                default: z(() => [
                  J(k(i.value ? b.appsLabel : b.appsLabel.slice(0, 2)), 1)
                ]),
                _: 2
              }, 1032, ["class"])) : V("", !0),
              C(Ze, {
                "enter-active-class": "po-transition po-duration-100 po-ease-out",
                "enter-from-class": "po-transform po-scale-95 po-opacity-0",
                "enter-to-class": "po-transform po-scale-100 po-opacity-100",
                "leave-active-class": "po-transition po-duration-75 po-ease-out",
                "leave-from-class": "po-transform po-scale-100 po-opacity-100",
                "leave-to-class": "po-transform po-scale-95 po-opacity-0"
              }, {
                default: z(() => [
                  C(O(Vl), null, {
                    default: z(() => [
                      r("ul", au, [
                        (p(!0), d(F, null, K(c.value, (_) => (p(), N(Tl, {
                          key: _.name,
                          item: _,
                          sidebarOpen: l.value,
                          hideSidebarItemLabel: n.value,
                          currRoute: b.currRoute,
                          type: "app",
                          onItemClick: h
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
          })) : V("", !0)
        ]),
        b.hasFeedback ? (p(), d("ul", nu, [
          r("li", null, [
            C(O(io), {
              text: w("Feedback"),
              placement: "right",
              strategy: "fixed"
            }, {
              default: z(() => [
                C(eu, {
                  "sidebar-open": l.value,
                  "hide-sidebar-item-label": n.value
                }, null, 8, ["sidebar-open", "hide-sidebar-item-label"])
              ]),
              _: 1
            }, 8, ["text"])
          ])
        ])) : V("", !0)
      ], 2);
    };
  }
}), iu = {
  key: 0,
  class: "shell-content--action-bar"
}, pu = { class: "action-bar__nav" }, uu = ["onClick"], du = { class: "action-bar__nav_label po-font-medium" }, cu = {
  key: 0,
  class: "po-shrink-0 po-flex po-space-x-1"
}, fu = /* @__PURE__ */ r("span", { class: "action-bar__nav_label po-font-medium" }, "Go Back", -1), vu = {
  name: "PoActionBar"
}, n2 = /* @__PURE__ */ T({
  ...vu,
  props: {
    items: { default: null },
    showBackButton: { type: Boolean, default: !1 },
    currPageRoute: { default: "" }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, l) => o.items !== null && o.items.length > 0 || o.showBackButton ? (p(), d("section", iu, [
      r("nav", pu, [
        (p(!0), d(F, null, K(o.items, (s) => (p(), d("span", {
          onClick: (a) => o.$emit("button-click", s.label),
          class: L([[
            { "action-bar__nav_highlighted": s.highlighted },
            { "action-bar__nav_danger": s.danger }
          ], "action-bar__nav_link"])
        }, [
          (p(), N(he(s.icon), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" })),
          r("span", du, k(s.label), 1)
        ], 10, uu))), 256))
      ]),
      o.showBackButton ? (p(), d("nav", cu, [
        r("span", {
          onClick: l[0] || (l[0] = (s) => o.$emit("button-click", "back")),
          class: "action-bar__nav_link"
        }, [
          fu,
          (p(), N(he(O(na)), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" }))
        ])
      ])) : V("", !0)
    ])) : V("", !0);
  }
}), hu = { class: "po-shadow-sm po-rounded-xl po-bg-white po-relative" }, mu = {
  key: 0,
  class: "po-absolute po-right-2 po-top-2 po-p-2 po-rounded-lg"
}, bu = {
  key: 0,
  class: "po-text-base po-font-medium po-text-slate-600"
}, gu = {
  key: 1,
  class: "lg:po-col-span-2 lg:po-flex lg:po-justify-end po-space-x-2"
}, yu = {
  name: "PoCard"
}, r2 = /* @__PURE__ */ T({
  ...yu,
  props: {
    title: { default: "" },
    isLoading: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, o) => (p(), d("div", hu, [
      t.isLoading ? (p(), d("div", mu, [
        C(so)
      ])) : V("", !0),
      r("div", {
        class: L([
          { "po-grid po-grid-cols-1 lg:po-grid-cols-3 po-gap-3": t.$slots.action }
        ])
      }, [
        t.title.length > 0 ? (p(), d("h3", bu, k(t.title), 1)) : V("", !0),
        t.$slots.action ? (p(), d("div", gu, [
          X(t.$slots, "action")
        ])) : V("", !0)
      ], 2),
      X(t.$slots, "content")
    ]));
  }
}), wu = { class: "po-py-3 po-px-5 po-border-b po-border-slate-200" }, _u = {
  class: "po-flex po-w-full md:po-ml-0",
  action: "#",
  method: "GET"
}, $u = {
  for: "search-field",
  class: "po-sr-only"
}, xu = { class: "po-relative po-w-full po-text-slate-400 focus-within:po-text-mpao-lightblue po-transition-colors po-duration-100 po-ease-in-out" }, Vu = { class: "po-pointer-events-none po-absolute po-inset-y-0 po-left-0 po-flex po-items-center" }, ku = ["placeholder", "value"], Cu = ["disabled"], Su = {
  name: "PoCardSearch"
}, i2 = /* @__PURE__ */ T({
  ...Su,
  props: {
    modelValue: { default: "" },
    placeholder: { default: "Search" },
    showBtn: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "button-click"],
  setup(e, { emit: t }) {
    const o = (l) => {
      let s = l.target.value;
      t("update:modelValue", s);
    };
    return (l, s) => (p(), d("div", wu, [
      r("form", _u, [
        r("label", $u, k(l.placeholder), 1),
        r("div", xu, [
          r("div", Vu, [
            C(O(Io), { class: "po-h-5 po-w-5 po-flex-shrink-0" })
          ]),
          r("input", {
            name: "search-field",
            id: "desktop-search-field",
            placeholder: l.placeholder,
            value: l.modelValue,
            onInput: o,
            class: "po-h-full po-w-full po-border-transparent po-py-2 po-pl-8 po-pr-3 po-text-sm po-text-slate-700 po-placeholder-slate-500 focus:po-border-transparent focus:po-placeholder-slate-400 focus:po-outline-none focus:po-ring-0",
            type: "search"
          }, null, 40, ku),
          l.showBtn ? (p(), d("button", {
            key: 0,
            class: L(["po-absolute po-right-0 po-text-sm po-rounded-full po-px-3 po-py-2 po-transition-colors po-duration-150 po-ease-out", [
              { "po-bg-mpao-lightblue po-text-white": l.modelValue !== "" },
              { "po-bg-slate-100 po-text-slate-400": l.modelValue === "" }
            ]]),
            disabled: l.modelValue === "",
            onClick: s[0] || (s[0] = le((a) => l.$emit("button-click", l.modelValue), ["prevent"]))
          }, " Search ", 10, Cu)) : V("", !0)
        ])
      ])
    ]));
  }
}), Pu = { class: "po-flex po-items-center" }, Ou = { class: "po-text-sm po-font-medium po-text-slate-500 po-pr-2" }, Lu = {
  name: "PoPagination"
}, Mu = /* @__PURE__ */ T({
  ...Lu,
  props: {
    pagination: { default: null },
    totalPages: { default: null },
    currentPage: { default: null }
  },
  emits: ["button-click", "next-click", "prev-click"],
  setup(e, { emit: t }) {
    const o = e;
    function l() {
      t("button-click", "prev"), t("prev-click", !0);
    }
    function s() {
      t("button-click", "next"), t("next-click", !0);
    }
    const a = E(() => o.totalPages ? `Page ${o.currentPage} of ${o.totalPages}` : o.pagination ? o.pagination.label : "");
    return (n, i) => (p(), d("div", Pu, [
      r("span", Ou, k(a.value), 1),
      r("button", {
        title: "Previous",
        onClick: l,
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        C(O(Bl), { class: "po-w-4 po-stroke-current po-stroke-2" })
      ]),
      r("button", {
        title: "Next",
        onClick: s,
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        C(O(zl), { class: "po-w-4 po-stroke-current po-stroke-2" })
      ])
    ]));
  }
}), Tu = { key: 0 }, Du = {
  class: "po-text-xl md:po-text-2xl po-font-semibold po-text-slate-800",
  id: "po-page-title"
}, Iu = {
  key: 0,
  class: "po-text-base po-mt-2 po-max-w-md po-block po-text-slate-500"
}, Eu = { key: 1 }, Bu = { class: "po-grid po-grid-cols-1 lg:po-grid-cols-2 po-gap-5" }, zu = {
  class: "po-text-xl md:po-text-2xl po-font-semibold po-text-slate-800",
  id: "po-page-title"
}, Au = {
  key: 0,
  class: "po-text-base po-mt-4 po-max-w-md po-pb-5 po-block po-text-slate-500"
}, Ru = { class: "po-flex po-items-end po-justify-end po-flex-col" }, ju = {
  key: 0,
  class: "po-flex md:po-justify-end po-mb-5"
}, Fu = { class: "po-bg-slate-50 po-shadow-sm po-rounded-xl po-py-5 po-px-2 po-divide-x po-divide-slate-200 po-flex" }, Nu = ["onClick"], Hu = { class: "po-text-xl po-font-medium po-text-slate-600 po-flex po-items-center po-space-x-1" }, qu = { class: "po-text-xl po-font-medium po-text-slate-600 group-hover:po-text-mpao-lightblue" }, Yu = { class: "po-text-sm po-text-slate-500 po-block group-hover:po-text-mpao-lightblue" }, Uu = { class: "po-flex po-items-center po-space-x-1 md:po-justify-end" }, Wu = {
  key: 2,
  class: "po-border-l po-border-slate-400 po-h-3 po-w-3 po-ml-1"
}, Zu = {
  key: 0,
  class: "po-bg-slate-50 po-p-5 po-mt-5 po-rounded-md po-grid po-grid-cols-1 md:po-grid-cols-3 po-gap-5"
}, Gu = /* @__PURE__ */ r("span", { class: "po-text-xs po-text-slate-500 po-py-5" }, "No filters available at the moment.", -1), Ku = {
  name: "PoPageTitle"
}, p2 = /* @__PURE__ */ T({
  ...Ku,
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
    const l = e.filterOn ? $(!0) : $(!1);
    function s(n) {
      t("pagination-click", n);
    }
    function a(n) {
      return n.iconColor ? n.iconColor : "po-slate-600";
    }
    return (n, i) => n.standAlone ? (p(), d("div", Tu, [
      r("h1", Du, k(n.label), 1),
      n.description !== "" ? (p(), d("span", Iu, k(n.description), 1)) : V("", !0)
    ])) : (p(), d("div", Eu, [
      r("div", Bu, [
        r("div", null, [
          r("h1", zu, k(n.label), 1),
          n.description !== "" ? (p(), d("span", Au, k(n.description), 1)) : V("", !0)
        ]),
        r("div", Ru, [
          n.stats !== null ? (p(), d("div", ju, [
            r("div", Fu, [
              (p(!0), d(F, null, K(n.stats, (u) => (p(), d("div", {
                class: "po-px-5 po-cursor-pointer po-group genie-effect",
                onClick: (c) => n.$emit("stat-click", u)
              }, [
                r("span", Hu, [
                  r("span", qu, k(u.value), 1),
                  u.icon ? (p(), d("span", {
                    key: 0,
                    class: L(["po-w-5 po-h-5", a(u)])
                  }, [
                    (p(), N(he(u.icon)))
                  ], 2)) : V("", !0)
                ]),
                r("span", Yu, k(u.label), 1)
              ], 8, Nu))), 256))
            ])
          ])) : V("", !0),
          r("div", Uu, [
            n.showFilter ? (p(), d("button", {
              key: 0,
              title: "Filter",
              onClick: i[0] || (i[0] = (u) => {
                n.$emit("button-click", "filter"), l.value = !O(l);
              }),
              class: L([
                "po-p-2 po-rounded-md hover:po-bg-slate-200 po-transition-colors po-duration-75 po-ease-in-out",
                { "po-text-mpao-orange hover:po-text-mpao-orange": O(l) },
                { "tpo-ext-slate-600 hover:po-text-mpao-blue": !O(l) }
              ])
            }, [
              C(O(va), { class: "po-w-4 po-stroke-current po-stroke-2" })
            ], 2)) : V("", !0),
            n.showDownload ? (p(), d("button", {
              key: 1,
              title: "Download",
              onClick: i[1] || (i[1] = (u) => n.$emit("button-click", "download")),
              class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
            }, [
              C(O(sa), { class: "po-w-4 po-stroke-current po-stroke-2" })
            ])) : V("", !0),
            n.showFilter && n.showPagination || n.showDownload && n.showPagination ? (p(), d("span", Wu, " ")) : V("", !0),
            n.showPagination ? (p(), N(Mu, {
              key: 3,
              pagination: n.pagination,
              onButtonClick: s
            }, null, 8, ["pagination"])) : V("", !0)
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
        default: z(() => [
          O(l) ? (p(), d("div", Zu, [
            X(n.$slots, "filters", {}, () => [
              Gu
            ])
          ])) : V("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), Xu = {
  key: 0,
  class: "po-w-12"
}, Qu = ["onClick"], Ju = { class: "po-flex po-space-x-1 po-pr-2 po-items-center" }, ed = { class: "po-grow" }, td = {
  key: 0,
  class: "po-shrink-0 po-select-none po-bg-slate-100 po-rounded-md po-w-4 po-h-4 po-flex po-items-center po-justify-center po-cursor-pointer",
  role: "button"
}, od = {
  key: 0,
  class: "po-w-12"
}, ld = ["onClick"], sd = ["colspan"], ad = { key: 1 }, nd = ["colspan"], rd = { class: "po-py-10 po-block po-normal-case" }, id = { class: "po-pr-5" }, pd = { class: "po-py-1" }, ud = { key: 0 }, dd = {
  name: "PoTable"
}, u2 = /* @__PURE__ */ T({
  ...dd,
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
    const o = e, { isLoading: l, tbody: s, thead: a } = Be(o), n = $(!1), i = $(null), u = $(null), c = $(null);
    ee(l, () => {
      h();
    }), ee(s, () => {
      h(), w();
    }), Z(() => {
      h(), w(), i.value = a.value;
    });
    function h() {
      n.value = l.value, u.value = s.value, l.value && (u.value = [{}, {}, {}, {}, {}]);
    }
    function w() {
      if (o.hasDetailsRow && o.tbody)
        for (let m = 0; m < o.tbody.length; m++)
          o.tbody[m].showDetails = !1;
    }
    function y() {
      return Math.floor(Math.random() * 41) + 40;
    }
    const b = (m, f) => {
      var v;
      m.sortable && (m.sorted && c.value === "asc" ? c.value = "desc" : c.value = "asc", (v = i.value) == null || v.forEach((_) => {
        _.label === m.label ? (_.sorted = !0, _.sortDirection = c.value, _.index = f) : (_.sorted = !1, _.sortDirection = null);
      }), t("column-click", m));
    };
    return (m, f) => (p(), d("table", {
      class: L(["table-responsive po-w-full", [{ lg: m.breakAtLg }]])
    }, [
      r("thead", null, [
        r("tr", null, [
          m.hasDetailsRow ? (p(), d("th", Xu)) : V("", !0),
          (p(!0), d(F, null, K(i.value, (v, _) => (p(), d("th", {
            onClick: (g) => b(v, _)
          }, [
            r("span", Ju, [
              r("span", ed, [
                X(m.$slots, "th", ut(dt(v)))
              ]),
              v.sortable ? (p(), d("span", td, [
                v.sorted ? V("", !0) : (p(), N(O(Ri), {
                  key: 0,
                  class: "po-w-3 po-h-3"
                })),
                v.sorted && v.sortDirection === "asc" ? (p(), N(O(Ai), {
                  key: 1,
                  class: "po-w-3 po-h-3"
                })) : V("", !0),
                v.sorted && v.sortDirection === "desc" ? (p(), N(O(Bi), {
                  key: 2,
                  class: "po-w-3 po-h-3"
                })) : V("", !0)
              ])) : V("", !0)
            ])
          ], 8, Qu))), 256))
        ])
      ]),
      r("tbody", null, [
        u.value !== null && !n.value || u.value !== null && u.value.length !== 0 && !n.value ? (p(!0), d(F, { key: 0 }, K(u.value, (v, _) => (p(), d(F, null, [
          r("tr", null, [
            m.hasDetailsRow ? (p(), d("td", od, [
              r("span", {
                onClick: (g) => v.showDetails = !v.showDetails
              }, [
                C(O(zi), {
                  class: L(["po-w-5 po-fill-mpao-lightblue po-origin-center po-transition-transform po-duration-100 po-ease-out po-cursor-pointer", [{ "po-rotate-90": v.showDetails }]])
                }, null, 8, ["class"])
              ], 8, ld)
            ])) : V("", !0),
            X(m.$slots, "td", ut(dt({ ...v, index: _, item: v })))
          ]),
          m.hasDetailsRow ? (p(), d("tr", {
            key: 0,
            class: L(["po-table-details-row", [{ "po-hidden": !v.showDetails }]])
          }, [
            O(a) ? (p(), d("td", {
              key: 0,
              colspan: O(a).length + 1
            }, [
              X(m.$slots, "details", ut(dt({ item: v })))
            ], 8, sd)) : V("", !0)
          ], 2)) : V("", !0)
        ], 64))), 256)) : V("", !0),
        u.value == null && !n.value || u.value !== null && u.value.length == 0 && !n.value ? (p(), d("tr", ad, [
          O(a) ? (p(), d("td", {
            key: 0,
            colspan: O(a).length + 1,
            class: "po-text-center"
          }, [
            r("span", rd, k(m.emptyMessage), 1)
          ], 8, nd)) : V("", !0)
        ])) : V("", !0),
        n.value ? (p(!0), d(F, { key: 2 }, K(u.value, (v) => (p(), d("tr", null, [
          (p(!0), d(F, null, K(O(a), (_) => (p(), d("td", id, [
            r("div", pd, [
              r("div", {
                class: "po-h-2 loading-placeholder po-rounded-full",
                style: Do({ width: y() + "%" })
              }, null, 4)
            ])
          ]))), 256))
        ]))), 256)) : V("", !0)
      ]),
      m.$slots.tfoot ? (p(), d("tfoot", ud, [
        r("tr", null, [
          X(m.$slots, "tfoot")
        ])
      ])) : V("", !0)
    ], 2));
  }
}), cd = { class: "" }, fd = { class: "po-grow" }, vd = ["onClick"], hd = {
  name: "PoDescriptionList"
}, md = /* @__PURE__ */ T({
  ...hd,
  props: {
    items: { default: null },
    striped: { type: Boolean, default: !1 },
    columns: { type: Boolean, default: !0 }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, l) => (p(), d("div", null, [
      r("dl", {
        class: L([
          "po-description-list",
          { "po-divide-y po-divide-slate-200": !o.striped },
          { striped: o.striped },
          { "no-col": !o.columns }
        ])
      }, [
        X(o.$slots, "content", {}, () => [
          (p(!0), d(F, null, K(o.items, (s) => (p(), d("div", null, [
            r("dt", null, k(s.title), 1),
            r("dd", cd, [
              r("span", fd, k(s.description), 1),
              s.action !== void 0 ? (p(), d("span", {
                key: 0,
                class: "po-shrink-0 po-text-mpao-lightblue hover:po-text-mpao-blue po-transition-colors po-duration-100 po-ease-in-out po-px-2 po-cursor-pointer",
                onClick: (a) => o.$emit("button-click", s.action)
              }, k(typeof s.action == "string" ? s.action : s.action.label), 9, vd)) : V("", !0)
            ])
          ]))), 256))
        ])
      ], 2)
    ]));
  }
}), bd = ["for"], gd = { class: "po-capitalize" }, yd = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, wd = ["type", "name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], _d = {
  name: "PoInputField"
}, d2 = /* @__PURE__ */ T({
  ..._d,
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
    modelModifiers: { default: () => ({}) }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e;
    function l() {
      return o.hasError ? "po-border-red-400 focus:po-border-red-600 focus:po-ring-red-600" : o.borderColor;
    }
    let s = o.type === "currency" ? "text" : o.type;
    const a = $(void 0), n = (b) => {
      let m = b.target.value;
      a.value = m;
      let f = o.type === "currency" ? c(m) : m;
      t("update:modelValue", f);
    }, i = (b) => {
      u(b.target.value);
    };
    ee(o, (b, m) => {
      o.type === "currency" && a.value !== m.modelValue ? a.value = "" + il(o.modelValue) : a.value = o.modelValue;
    });
    const u = (b) => {
      let m = "";
      o.type === "currency" ? m = "" + il(c("" + b)) : m = b, a.value = m;
    }, c = (b) => {
      let m = b.replace(/,/g, "");
      const f = m.indexOf(".");
      return f !== -1 && m.substring(f + 1) === "00" && (m = m.substring(0, f)), m;
    };
    o.type === "currency" ? u(o.modelValue) : a.value = o.modelValue;
    const { uniqueId: h, generateUniqueId: w } = Ne(), y = $(o.id);
    return Z(() => {
      o.id === "" && (w(), y.value = h.value);
    }), (b, m) => (p(), d("div", {
      class: L(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": b.display === "horizontal" }]])
    }, [
      r("label", {
        for: y.value,
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700"
      }, [
        r("span", gd, k(b.label), 1),
        b.required ? (p(), d("span", yd, "*")) : V("", !0),
        C(He, { info: b.info }, null, 8, ["info"])
      ], 8, bd),
      r("input", Te({
        type: O(s),
        name: `${y.value}-field`,
        id: y.value,
        value: a.value,
        placeholder: b.placeholder,
        disabled: b.disabled,
        required: b.required,
        "aria-describedby": `${y.value}-description`,
        "aria-required": b.required,
        "aria-disabled": b.disabled
      }, b.$attrs, {
        onInput: n,
        onBlur: i,
        class: [
          "po-mt-1 peer po-block po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white focus:po-ring-0 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default",
          l()
        ]
      }), null, 16, wd),
      C(Ae, { message: b.message }, null, 8, ["message"]),
      C(ze, { "error-message": b.errorMessage }, null, 8, ["error-message"])
    ], 2));
  }
}), $d = { class: "po-text-sm po-font-medium po-text-slate-700 peer-focus:po-text-mpao-lightblue peer-invalid:po-text-red-500 peer-invalid:peer-focus:po-text-red-600 po-flex po-items-center po-space-x-1 po-capitalize" }, xd = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Vd = ["name", "id", "value"], kd = ["for"], Cd = { class: "po-flex po-items-center po-space-x-1" }, Sd = {
  key: 0,
  class: "po-text-sm"
}, Pd = {
  key: 1,
  class: "po-text-sm"
}, Od = {
  name: "PoInputFile"
}, c2 = /* @__PURE__ */ T({
  ...Od,
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
    E(() => `width: ${o.progress}%`), E(() => o.progress);
    const l = $(""), s = (c) => {
      var w, y;
      const h = (y = (w = c.target) == null ? void 0 : w.files) == null ? void 0 : y[0];
      l.value = h ? h.name : "";
    }, a = (c) => {
      let h = c.target.value;
      t("update:modelValue", h);
    }, { uniqueId: n, generateUniqueId: i } = Ne(), u = $(o.id);
    return Z(() => {
      o.id === "" && (i(), u.value = n.value);
    }), (c, h) => (p(), d("div", {
      class: L(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": c.display === "horizontal" }]])
    }, [
      r("span", $d, [
        r("span", null, k(c.label), 1),
        c.required ? (p(), d("span", xd, "*")) : V("", !0)
      ]),
      r("input", {
        name: `${u.value}-upload`,
        id: u.value,
        value: c.modelValue,
        type: "file",
        onInput: a,
        onChange: h[0] || (h[0] = (w) => s(w)),
        class: "po-sr-only po-peer"
      }, null, 40, Vd),
      r("label", {
        for: u.value,
        class: "po-mt-1 po-block po-w-full po-border po-cursor-pointer po-rounded-md po-border-slate-300 po-bg-white peer-focus:po-border-mpao-lightblue invalid:po-border-red-400 invalid:focus:po-border-red-600 invalid:focus:po-ring-red-600 sm:po-text-sm po-p-2"
      }, [
        r("div", Cd, [
          C(O(Al), { class: "po-w-4 po-stroke-slate-500" }),
          l.value ? (p(), d("span", Sd, k(l.value), 1)) : (p(), d("span", Pd, "Choose file"))
        ])
      ], 8, kd),
      C(Ae, { message: c.message }, null, 8, ["message"]),
      C(ze, { "error-message": c.errorMessage }, null, 8, ["error-message"])
    ], 2));
  }
});
var Oo = {}, Ld = {
  get exports() {
    return Oo;
  },
  set exports(e) {
    Oo = e;
  }
};
(function(e, t) {
  (function(o, l) {
    e.exports = l();
  })(ea, function() {
    var o = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, l = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d\d/, a = /\d\d?/, n = /\d*[^-_:/,()\s\d]+/, i = {}, u = function(f) {
      return (f = +f) + (f > 68 ? 1900 : 2e3);
    }, c = function(f) {
      return function(v) {
        this[f] = +v;
      };
    }, h = [/[+-]\d\d:?(\d\d)?|Z/, function(f) {
      (this.zone || (this.zone = {})).offset = function(v) {
        if (!v || v === "Z")
          return 0;
        var _ = v.match(/([+-]|\d\d)/g), g = 60 * _[1] + (+_[2] || 0);
        return g === 0 ? 0 : _[0] === "+" ? -g : g;
      }(f);
    }], w = function(f) {
      var v = i[f];
      return v && (v.indexOf ? v : v.s.concat(v.f));
    }, y = function(f, v) {
      var _, g = i.meridiem;
      if (g) {
        for (var S = 1; S <= 24; S += 1)
          if (f.indexOf(g(S, 0, v)) > -1) {
            _ = S > 12;
            break;
          }
      } else
        _ = f === (v ? "pm" : "PM");
      return _;
    }, b = { A: [n, function(f) {
      this.afternoon = y(f, !1);
    }], a: [n, function(f) {
      this.afternoon = y(f, !0);
    }], S: [/\d/, function(f) {
      this.milliseconds = 100 * +f;
    }], SS: [s, function(f) {
      this.milliseconds = 10 * +f;
    }], SSS: [/\d{3}/, function(f) {
      this.milliseconds = +f;
    }], s: [a, c("seconds")], ss: [a, c("seconds")], m: [a, c("minutes")], mm: [a, c("minutes")], H: [a, c("hours")], h: [a, c("hours")], HH: [a, c("hours")], hh: [a, c("hours")], D: [a, c("day")], DD: [s, c("day")], Do: [n, function(f) {
      var v = i.ordinal, _ = f.match(/\d+/);
      if (this.day = _[0], v)
        for (var g = 1; g <= 31; g += 1)
          v(g).replace(/\[|\]/g, "") === f && (this.day = g);
    }], M: [a, c("month")], MM: [s, c("month")], MMM: [n, function(f) {
      var v = w("months"), _ = (w("monthsShort") || v.map(function(g) {
        return g.slice(0, 3);
      })).indexOf(f) + 1;
      if (_ < 1)
        throw new Error();
      this.month = _ % 12 || _;
    }], MMMM: [n, function(f) {
      var v = w("months").indexOf(f) + 1;
      if (v < 1)
        throw new Error();
      this.month = v % 12 || v;
    }], Y: [/[+-]?\d+/, c("year")], YY: [s, function(f) {
      this.year = u(f);
    }], YYYY: [/\d{4}/, c("year")], Z: h, ZZ: h };
    function m(f) {
      var v, _;
      v = f, _ = i && i.formats;
      for (var g = (f = v.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(M, P, A) {
        var q = A && A.toUpperCase();
        return P || _[A] || o[A] || _[q].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(H, Y, W) {
          return Y || W.slice(1);
        });
      })).match(l), S = g.length, x = 0; x < S; x += 1) {
        var I = g[x], B = b[I], j = B && B[0], D = B && B[1];
        g[x] = D ? { regex: j, parser: D } : I.replace(/^\[|\]$/g, "");
      }
      return function(M) {
        for (var P = {}, A = 0, q = 0; A < S; A += 1) {
          var H = g[A];
          if (typeof H == "string")
            q += H.length;
          else {
            var Y = H.regex, W = H.parser, U = M.slice(q), G = Y.exec(U)[0];
            W.call(P, G), M = M.replace(G, "");
          }
        }
        return function(ce) {
          var Q = ce.afternoon;
          if (Q !== void 0) {
            var $e = ce.hours;
            Q ? $e < 12 && (ce.hours += 12) : $e === 12 && (ce.hours = 0), delete ce.afternoon;
          }
        }(P), P;
      };
    }
    return function(f, v, _) {
      _.p.customParseFormat = !0, f && f.parseTwoDigitYear && (u = f.parseTwoDigitYear);
      var g = v.prototype, S = g.parse;
      g.parse = function(x) {
        var I = x.date, B = x.utc, j = x.args;
        this.$u = B;
        var D = j[1];
        if (typeof D == "string") {
          var M = j[2] === !0, P = j[3] === !0, A = M || P, q = j[2];
          P && (q = j[2]), i = this.$locale(), !M && q && (i = _.Ls[q]), this.$d = function(U, G, ce) {
            try {
              if (["x", "X"].indexOf(G) > -1)
                return new Date((G === "X" ? 1e3 : 1) * U);
              var Q = m(G)(U), $e = Q.year, Re = Q.month, Oe = Q.day, qe = Q.hours, Le = Q.minutes, Me = Q.seconds, Qe = Q.milliseconds, Je = Q.zone, Se = new Date(), et = Oe || ($e || Re ? 1 : Se.getDate()), bt = $e || Se.getFullYear(), Ye = 0;
              $e && !Re || (Ye = Re > 0 ? Re - 1 : Se.getMonth());
              var gt = qe || 0, pt = Le || 0, yt = Me || 0, wt = Qe || 0;
              return Je ? new Date(Date.UTC(bt, Ye, et, gt, pt, yt, wt + 60 * Je.offset * 1e3)) : ce ? new Date(Date.UTC(bt, Ye, et, gt, pt, yt, wt)) : new Date(bt, Ye, et, gt, pt, yt, wt);
            } catch {
              return new Date("");
            }
          }(I, D, B), this.init(), q && q !== !0 && (this.$L = this.locale(q).$L), A && I != this.format(D) && (this.$d = new Date("")), i = {};
        } else if (D instanceof Array)
          for (var H = D.length, Y = 1; Y <= H; Y += 1) {
            j[1] = D[Y - 1];
            var W = _.apply(this, j);
            if (W.isValid()) {
              this.$d = W.$d, this.$L = W.$L, this.init();
              break;
            }
            Y === H && (this.$d = new Date(""));
          }
        else
          S.call(this, x);
      };
    };
  });
})(Ld);
const Md = Oo, Td = ["for"], Dd = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Id = { class: "po-relative po-mt-1" }, Ed = {
  role: "button",
  ref: "comboboxButton"
}, Bd = ["disabled", "id"], zd = { class: "po-flex po-items-center po-justify-between po-w-full po-px-2 po-pb-1" }, Ad = {
  class: "po-p-2 po-rounded-md hover:po-bg-slate-100 po-cursor-pointer po-transition-colors po-duration-150 po-ease-out po-text-sm po-slate-600 po-select-none",
  role: "button"
}, Rd = /* @__PURE__ */ r("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), jd = { class: "po-grid po-grid-cols-3 po-p-1" }, Fd = { class: "" }, Nd = ["onClick"], Hd = {
  name: "PoMonthYearPicker"
}, f2 = /* @__PURE__ */ T({
  ...Hd,
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
    ae.extend(ta), ae.extend(oa), ae.extend(Md), ae.tz.setDefault("Indian/Maldives");
    const l = $(""), s = $(!1), a = $(), n = $(null), i = $(ae().year()), u = $(ae().month()), { uniqueId: c, generateUniqueId: h } = Ne(), w = $(o.id), y = $(), b = $({
      viewStartIdx: 0,
      viewEndIdx: 0,
      visibleStartIdx: 0,
      visibleEndIdx: 0
    });
    let m;
    Z(() => {
      if (o.modelValue) {
        const M = ae(`02-${o.modelValue + 1}`, "DD-MM-YYYY");
        l.value = o.modelValue, u.value = M.month() + 1, i.value = M.year();
      }
      o.id === "" && (h(), w.value = c.value), m = Dt(a.value, y.value, {
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
    const f = E(() => i.value === ae(o.minDate, "DD-MM-YYYY").year()), v = E(() => i.value === ae(o.maxDate, "DD-MM-YYYY").year()), _ = E(() => {
      if (l.value !== "")
        return ae(`02-${l.value}`, "DD-MM-YYYY").format(
          o.displayFormat
        );
    });
    E(() => {
      const M = ae(o.minDate, "DD-MM-YYYY").year(), P = ae(o.maxDate, "DD-MM-YYYY").year();
      return Array.from(
        { length: P - M + 1 },
        (A, q) => M + q
      );
    });
    const g = E(() => Array.from({ length: 12 }, (M, P) => ({
      number: P + 1,
      year: i.value,
      value: `${ae(`${P + 1}-23-2023`).format("MM")}-${i.value}`,
      name: ae().month(P).format("MMM"),
      disabled: f.value && P + 1 < ae(o.minDate, "DD-MM-YYYY").month() + 1 || v.value && P + 1 > ae(o.maxDate, "DD-MM-YYYY").month() + 1
    })));
    function S(M) {
      return l.value === M.value;
    }
    function x() {
      i.value !== ae(o.maxDate, "DD-MM-YYYY").year() && (i.value = ae(`01-01-${i.value}`, "DD-MM-YYYY").add(1, "year").year());
    }
    function I() {
      i.value !== ae(o.minDate, "DD-MM-YYYY").year() && (i.value = ae(`01-01-${i.value}`, "DD-MM-YYYY").subtract(1, "year").year());
    }
    function B(M) {
      M.disabled || (l.value = M.value, u.value = M.number, i.value = M.year, t("update:modelValue", M.value));
    }
    It(n, () => {
      s.value = !1;
    }), xe.on("sidebarOpen", (M) => {
      setTimeout(() => {
        m && m.update();
      }, 320);
    }), re(() => {
      m && m.destroy();
    });
    function j(M, P, A, q) {
      b.value.viewStartIdx = M, b.value.viewEndIdx = P, b.value.visibleStartIdx = A, b.value.visibleEndIdx = q;
    }
    function D() {
      m && m.update();
    }
    return (M, P) => (p(), d("div", {
      class: L([{ "lg:po-grid lg:po-grid-cols-2": M.display === "horizontal" }]),
      ref_key: "containerRef",
      ref: n
    }, [
      r("label", {
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700",
        for: w.value
      }, [
        r("span", null, k(M.label), 1),
        M.required ? (p(), d("span", Dd, "*")) : V("", !0),
        C(He, { info: M.info }, null, 8, ["info"])
      ], 8, Td),
      r("div", Id, [
        r("div", Ed, [
          Pe(r("input", {
            type: "text",
            ref_key: "selectBox",
            ref: a,
            readonly: "",
            class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm",
            disabled: M.disabled,
            "onUpdate:modelValue": P[0] || (P[0] = (A) => _.value = A),
            onFocus: P[1] || (P[1] = (A) => s.value = !0),
            id: w.value
          }, null, 40, Bd), [
            [Pt, _.value]
          ]),
          r("span", {
            class: "po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-rounded-r-md po-px-2 focus:po-outline-none",
            role: "button",
            onMousedown: P[2] || (P[2] = le((A) => s.value = !s.value, ["stop"]))
          }, [
            C(O(ji), {
              class: "po-h-5 po-w-5 po-text-slate-400",
              "aria-hidden": "true"
            })
          ], 32)
        ], 512),
        Pe(r("div", {
          ref_key: "popper",
          ref: y,
          class: "po-absolute po-z-10 po-mt-1 po-w-full po-rounded-md po-max-w-[290px] po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm",
          onResize: D,
          onUpdate: j
        }, [
          r("div", zd, [
            r("span", {
              class: "po-p-2 po-rounded-md hover:po-bg-slate-100 po-cursor-pointer po-transition-colors po-duration-150 po-ease-out po-select-none",
              role: "button",
              onClick: I
            }, [
              C(O(Bl), { class: "po-w-4 po-stroke-slate-500 po-stroke-2" })
            ]),
            r("span", Ad, k(i.value), 1),
            r("span", {
              class: "po-p-2 po-rounded-md hover:po-bg-slate-100 po-cursor-pointer po-transition-colors po-duration-150 po-ease-out po-select-none",
              role: "button",
              onClick: x
            }, [
              C(O(zl), { class: "po-w-4 po-stroke-slate-500 po-stroke-2" })
            ])
          ]),
          Rd,
          r("div", jd, [
            (p(!0), d(F, null, K(g.value, (A) => (p(), d("div", Fd, [
              r("span", {
                class: L(["po-flex po-items-center po-justify-center po-py-2 po-px-2 po-group", [{ "po-cursor-pointer": !A.disabled }]]),
                onClick: (q) => B(A)
              }, [
                r("span", {
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
                }, k(A.name), 3)
              ], 10, Nd)
            ]))), 256))
          ])
        ], 544), [
          [Ot, s.value]
        ])
      ]),
      C(Ae, { message: M.message }, null, 8, ["message"]),
      C(ze, { "error-message": M.errorMessage }, null, 8, ["error-message"])
    ], 2));
  }
}), qd = { class: "po-text-sm po-font-medium po-text-slate-700 po-cursor-pointer po-select-none po-flex po-items-center po-space-x-1" }, Yd = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Ud = {
  name: "PoToggle"
}, v2 = /* @__PURE__ */ T({
  ...Ud,
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
    return (l, s) => (p(), d("div", null, [
      C(O(Lr), {
        as: "div",
        class: "po-flex po-items-center"
      }, {
        default: z(() => [
          C(O(Mr), {
            modelValue: o.value,
            "onUpdate:modelValue": s[0] || (s[0] = (a) => o.value = a),
            onClick: s[1] || (s[1] = (a) => l.$emit("update:modelValue", !o.value)),
            class: L([
              o.value ? "po-bg-mpao-lightblue" : "po-bg-slate-200",
              "po-relative po-inline-flex po-h-6 po-w-11 po-flex-shrink-0 po-cursor-pointer po-rounded-full po-border-2 po-border-transparent po-transition-colors po-duration-200 po-ease-in-out focus:po-outline-none focus:po-ring-2 focus:po-ring-mpao-lightblue focus:po-ring-offset-2"
            ])
          }, {
            default: z(() => [
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
          C(O(Tr), {
            as: "span",
            class: "po-ml-3"
          }, {
            default: z(() => [
              r("span", qd, [
                r("span", null, k(l.label), 1),
                l.required ? (p(), d("span", Yd, "*")) : V("", !0),
                C(He, { info: l.info }, null, 8, ["info"])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      C(Ae, { message: l.message }, null, 8, ["message"]),
      C(ze, { "error-message": l.errorMessage }, null, 8, ["error-message"])
    ]));
  }
}), Wd = { class: "po-pt-1 po-space-y-1 po-border-r-2 po-border-slate-200 po-relative" }, Zd = ["onClick"], Gd = {
  name: "PoSectionMenu"
}, h2 = /* @__PURE__ */ T({
  ...Gd,
  props: {
    currPageRoute: { default: "" },
    menuItems: { default: null }
  },
  emits: ["link-click"],
  setup(e, { emit: t }) {
    return (o, l) => (p(), d("ul", Wd, [
      (p(!0), d(F, null, K(o.menuItems, (s) => (p(), d("li", null, [
        r("span", {
          onClick: (a) => o.$emit("link-click", s.link),
          role: "button",
          class: L([
            "po-relative po-cursor-pointer -po-right-[0.15rem] po-py-1 po-border-r-2 hover:po-border-mpao-lightblue po-transition-colors po-duration-200 po-ease-in-out po-flex po-items-center po-space-x-2",
            {
              "po-border-mpao-lightblue po-text-sm po-text-mpao-lightblue": s.link == o.currPageRoute
            },
            {
              "po-border-slate-200 po-text-sm po-text-slate-600": s.link !== o.currPageRoute
            }
          ])
        }, [
          (p(), N(he(s.icon), { class: "po-w-4 po-h-4 po-stroke-current" })),
          r("span", null, k(s.label), 1)
        ], 10, Zd)
      ]))), 256))
    ]));
  }
}), Kd = { class: "po-relative po-flex po-items-start" }, Xd = { class: "po-flex po-h-5 po-items-center" }, Qd = ["name", "id", "checked", "disabled", "aria-describedby"], Jd = { class: "po-ml-3 po-text-sm" }, ec = ["for"], tc = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, oc = ["id"], lc = { class: "po-sr-only" }, sc = ["id"], ac = {
  name: "PoCheckbox"
}, m2 = /* @__PURE__ */ T({
  ...ac,
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
    return (o, l) => (p(), d("div", null, [
      r("div", Kd, [
        r("div", Xd, [
          r("input", Te({
            name: `${o.id}-field`,
            id: o.id,
            checked: o.modelValue,
            disabled: o.disabled,
            "aria-describedby": `${o.id}-description`
          }, o.$attrs, {
            onInput: l[0] || (l[0] = (s) => o.$emit("update:modelValue", s.target.checked)),
            type: "checkbox",
            class: ["po-h-4 po-w-4 po-rounded po-border-slate-300 po-text-mpao-lightblue focus:po-ring-mpao-lightblue", [{ "po-bg-slate-200": o.disabled }]]
          }), null, 16, Qd)
        ]),
        r("div", Jd, [
          r("label", {
            for: o.id,
            class: "po-font-medium po-text-slate-600 po-cursor-pointer po-select-none po-flex po-items-center po-space-x-1"
          }, [
            r("span", null, k(o.label), 1),
            o.required ? (p(), d("span", tc, "*")) : V("", !0)
          ], 8, ec),
          o.message ? (p(), d("span", {
            key: 0,
            id: `${o.id}-description`,
            class: "po-text-slate-500 po-cursor-default"
          }, [
            r("span", lc, k(o.label), 1),
            J(" " + k(o.message), 1)
          ], 8, oc)) : V("", !0)
        ])
      ]),
      o.errorMessage !== null ? (p(), d("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${o.id}-error`
      }, k(o.errorMessage), 9, sc)) : V("", !0)
    ]));
  }
});
function nc(e, t) {
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
function rc(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", { d: "M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" })
  ]);
}
function ic(e, t) {
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
const pc = /* @__PURE__ */ r("div", { class: "po-pb-5 po-max-w-xl" }, [
  /* @__PURE__ */ r("span", { class: "po-text-sm po-text-slate-600" }, "We're always working to improve our app, and we're excited to share the latest changes with you. We hope you enjoy these new features and improvements")
], -1), uc = { class: "po-flex po-space-x-2" }, dc = ["onClick"], cc = { class: "po-text-sm po-font-semibold po-slate-800" }, fc = { class: "po-text-xs po-text-white po-px-1 po-py-0 po-rounded-md po-bg-mpao-lightblue" }, vc = { class: "po-bg-gradient-to-t po-from-mpao-orange/20 po-via-mpao-lightblue/20 po-to-purple-500/10 -po-mb-5 -po-mx-5 po-p-5 po-pb-10" }, hc = { key: 0 }, mc = { class: "po-space-y-2 po-mt-5" }, bc = { class: "po-border po-border-slate-200 po-rounded-lg po-p-3 po-bg-white" }, gc = { class: "po-flex po-items-center po-space-x-2" }, yc = { class: "po-text-mpao-lightblue po-grow po-text-lg" }, wc = { class: "po-font-semibold po-shrink-0 po-text-mpao-lightblue po-text-sm po-px-2 po-py-1 po-rounded-xl po-bg-mpao-lightblue/10" }, _c = ["innerHTML"], $c = {
  key: 0,
  class: "po-bg-white po-rounded-md po-px-4 po-py-3 po-block po-text-sm po-text-center po-text-mpao-lightblue hover:po-text-purple-600 po-cursor-pointer"
}, xc = /* @__PURE__ */ T({
  __name: "ChangeLogModel",
  props: {
    changelog: { default: null },
    showBtn: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = $(!1), o = $(0);
    return (l, s) => (p(), d(F, null, [
      l.showBtn ? (p(), d("a", {
        key: 0,
        href: "#",
        onClick: s[0] || (s[0] = le((a) => t.value = !0, ["prevent"])),
        class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
      }, "Change logs")) : V("", !0),
      C(At, {
        show: t.value,
        onModalClosed: s[1] || (s[1] = (a) => t.value = !1),
        "modal-title": "Change Log",
        "modal-width": "sm:po-max-w-4xl",
        id: "change-log-modal"
      }, {
        content: z(() => [
          r("div", null, [
            pc,
            r("div", uc, [
              (p(!0), d(F, null, K(l.changelog, (a, n) => (p(), d("span", {
                class: L(["po-flex po-items-center po-space-x-1 po-px-4 po-py-3 po-rounded-t-xl po-cursor-pointer", [{ "po-bg-purple-500/10": o.value === n }]]),
                onClick: (i) => o.value = n
              }, [
                r("span", cc, k(a.label) + " Version", 1),
                r("span", fc, k(a.latest_version), 1)
              ], 10, dc))), 256))
            ]),
            r("div", vc, [
              (p(!0), d(F, null, K(l.changelog, (a, n) => (p(), d("div", null, [
                o.value === n ? (p(), d("div", hc, [
                  r("div", mc, [
                    (p(!0), d(F, null, K(a.version_history, (i) => (p(), d("div", bc, [
                      r("span", gc, [
                        r("span", yc, k(i.date), 1),
                        r("span", wc, k(i.version), 1)
                      ]),
                      r("div", {
                        class: "po-mt-3 po-prose-sm po-prose-slate",
                        innerHTML: i.note
                      }, null, 8, _c)
                    ]))), 256)),
                    a.hasMore ? (p(), d("span", $c, "More")) : V("", !0)
                  ])
                ])) : V("", !0)
              ]))), 256))
            ])
          ])
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), ro = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [l, s] of t)
    o[l] = s;
  return o;
}, Vc = {}, kc = {
  class: "po-h-8",
  src: "https://pension.gov.mv/asset/image/en-ccc-2020-issa.png",
  alt: "issa Certificate"
};
function Cc(e, t) {
  return p(), d("img", kc);
}
const Sc = /* @__PURE__ */ ro(Vc, [["render", Cc]]), Pc = {}, Oc = {
  class: "po-h-8",
  src: "https://pension.gov.mv/asset/image/iso_logo.png",
  alt: "ISO 27001 Certificate"
};
function Lc(e, t) {
  return p(), d("img", Oc);
}
const Mc = /* @__PURE__ */ ro(Pc, [["render", Lc]]), Tc = { class: "-po-m-5" }, Dc = ["src", "alt"], Dl = /* @__PURE__ */ T({
  __name: "CertificateModel",
  props: {
    src: { default: "" },
    title: { default: "" },
    logo: { default: null }
  },
  setup(e) {
    const t = $(!1);
    return (o, l) => (p(), d(F, null, [
      (p(), N(he(o.logo), {
        onClick: l[0] || (l[0] = le((s) => t.value = !0, ["prevent"])),
        class: "po-cursor-pointer",
        role: "button"
      })),
      C(At, {
        show: t.value,
        onModalClosed: l[1] || (l[1] = (s) => t.value = !1),
        "modal-title": o.title,
        "modal-width": "sm:po-max-w-4xl",
        id: "change-log-modal"
      }, {
        content: z(() => [
          r("div", Tc, [
            r("img", {
              src: o.src,
              alt: o.title
            }, null, 8, Dc)
          ])
        ]),
        _: 1
      }, 8, ["show", "modal-title"])
    ], 64));
  }
}), Ic = /* @__PURE__ */ r("div", { class: "po-prose-sm po-prose-slate po-p-5 po-opacity-8" }, [
  /* @__PURE__ */ r("h2", { class: "po-text-red-500" }, "Sample Terms and Conditions"),
  /* @__PURE__ */ r("h3", null, "1. Acceptance of Terms"),
  /* @__PURE__ */ r("p", null, " By accessing and using this web app, you agree to be bound by these terms and conditions. "),
  /* @__PURE__ */ r("h3", null, "2. User Responsibilities"),
  /* @__PURE__ */ r("p", null, " Users are responsible for maintaining the confidentiality of their account information and complying with all applicable laws. "),
  /* @__PURE__ */ r("h3", null, "3. Privacy Policy"),
  /* @__PURE__ */ r("p", null, [
    /* @__PURE__ */ J(" Our privacy policy outlines how we collect, use, and protect your personal information. Please review our "),
    /* @__PURE__ */ r("a", { href: "privacy.html" }, "Privacy Policy"),
    /* @__PURE__ */ J(" for more details. ")
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
    /* @__PURE__ */ J(" If you have any questions or concerns about these terms and conditions, please contact us at "),
    /* @__PURE__ */ r("a", { href: "mailto:info@pension.gov.mv" }, "info@pension.gov.mv"),
    /* @__PURE__ */ J(". ")
  ])
], -1), Ec = /* @__PURE__ */ T({
  __name: "ToCModel",
  setup(e) {
    const t = $(!1);
    return (o, l) => (p(), d(F, null, [
      r("a", {
        href: "#",
        onClick: l[0] || (l[0] = le((s) => t.value = !0, ["prevent"])),
        role: "button",
        class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
      }, "Terms & Conditions"),
      C(At, {
        show: t.value,
        onModalClosed: l[1] || (l[1] = (s) => t.value = !1),
        "modal-title": "Terms & Conditions",
        "modal-width": "sm:po-max-w-3xl",
        id: "change-log-modal"
      }, {
        content: z(() => [
          Ic
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Bc = /* @__PURE__ */ r("div", { class: "po-prose-sm po-prose-slate po-p-5 po-opacity-80" }, [
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
    /* @__PURE__ */ J(" If you have any questions or concerns about our privacy policy, please contact us at "),
    /* @__PURE__ */ r("a", { href: "mailto:info@pension.gov.mv" }, "info@pension.gov.mv"),
    /* @__PURE__ */ J(". ")
  ])
], -1), zc = /* @__PURE__ */ T({
  __name: "PrivacyPolicyModel",
  setup(e) {
    const t = $(!1);
    return (o, l) => (p(), d(F, null, [
      r("a", {
        href: "#",
        onClick: l[0] || (l[0] = le((s) => t.value = !0, ["prevent"])),
        role: "button",
        class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
      }, "Privacy Policy"),
      C(At, {
        show: t.value,
        onModalClosed: l[1] || (l[1] = (s) => t.value = !1),
        "modal-title": "Privacy Policy",
        "modal-width": "sm:po-max-w-3xl",
        id: "change-log-modal"
      }, {
        content: z(() => [
          Bc
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Ac = { class: "po-grid po-gap-5 po-grid-cols-1 lg:po-grid-cols-2 po-px-6 lg:po-px-8 po-mt-10 po-pb-10" }, Rc = { class: "sm:po-flex po-items-start sm:po-space-x-5" }, jc = /* @__PURE__ */ r("svg", {
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
], -1), Fc = { class: "po-mt-5 sm:po-mt-0" }, Nc = /* @__PURE__ */ r("p", { class: "-po-mt-1 po-text-xs po-text-slate-500" }, " 8th Floor, Allied Building , Chaandhanee Magu, Malé, 20156, Maldives ", -1), Hc = { class: "po-mt-1 po-text-xs po-text-slate-500" }, qc = { class: "po-mt-1 po-text-xs po-text-slate-500 po-flex -po-mb-2 po-flex-wrap" }, Yc = {
  href: "https://www.pension.gov.mv",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, Uc = /* @__PURE__ */ r("span", null, "www.pension.gov.mv", -1), Wc = {
  href: "mailto:info@pension.gov.mv",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, Zc = /* @__PURE__ */ r("span", null, "info@pension.gov.mv", -1), Gc = {
  href: "tel:1441",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, Kc = /* @__PURE__ */ r("span", null, "1441", -1), Xc = { class: "po-flex lg:po-items-end po-flex-col" }, Qc = { class: "-po-mt-1 po-text-xs po-text-slate-500 po-flex -po-mb-2 po-flex-wrap" }, Jc = { class: "po-flex po-space-x-2 po-mt-3 lg:po-justify-end" }, e1 = {
  name: "PoFooter"
}, b2 = /* @__PURE__ */ T({
  ...e1,
  props: {
    changelog: { default: null }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, l) => (p(), d("div", null, [
      r("section", Ac, [
        r("div", Rc, [
          jc,
          r("div", Fc, [
            Nc,
            r("p", Hc, " © " + k(new Date().getFullYear()) + " Pension Office, All Rights Reserved. ", 1),
            r("p", qc, [
              r("a", Yc, [
                C(O(rc), { class: "po-w-3 po-h-3 po-fill-current" }),
                Uc
              ]),
              r("a", Wc, [
                C(O(nc), { class: "po-w-3 po-h-3 po-fill-current" }),
                Zc
              ]),
              r("a", Gc, [
                C(O(ic), { class: "po-w-3 po-h-3 po-fill-current" }),
                Kc
              ])
            ])
          ])
        ]),
        r("div", Xc, [
          r("nav", Qc, [
            C(xc, {
              "show-btn": o.changelog !== null,
              changelog: o.changelog
            }, null, 8, ["show-btn", "changelog"]),
            C(Ec),
            C(zc)
          ]),
          r("div", Jc, [
            C(Dl, {
              logo: Mc,
              title: "ISO/IEC 27001:2013 Certificate",
              src: ""
            }),
            C(Dl, {
              logo: Sc,
              title: "issa Certificate",
              src: ""
            })
          ])
        ])
      ])
    ]));
  }
}), t1 = { class: "po-text-sm po-text-red-700" }, o1 = {
  key: 0,
  class: "po-text-sm po-text-red-800 po-list-disc po-ml-5 po-mt-2"
}, l1 = {
  key: 1,
  class: "po-flex po-items-start po-space-x-3 po-p-5 po-bg-green-50 po-rounded-md po-mt-5"
}, s1 = { class: "po-text-sm po-text-green-700" }, a1 = {
  name: "PoFormStatusMessage"
}, g2 = /* @__PURE__ */ T({
  ...a1,
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
      C(O(bo), { class: "po-shrink-0 po-w-6 po-stroke-red-600" }),
      r("div", null, [
        r("span", t1, k(t.message), 1),
        t.errorList !== null ? (p(), d("ul", o1, [
          (p(!0), d(F, null, K(t.errorList, (l) => (p(), d("li", null, k(l), 1))), 256))
        ])) : V("", !0)
      ])
    ], 2)) : (p(), d("div", l1, [
      C(O(da), { class: "po-w-6 po-stroke-green-600" }),
      r("div", null, [
        r("span", s1, k(t.message), 1)
      ])
    ]));
  }
}), n1 = {
  key: 0,
  class: "po-text-lg po-text-red-400 po-font-semibold"
}, r1 = ["id"], i1 = { class: "po-flex po-flex-1" }, p1 = { class: "po-flex po-flex-col" }, u1 = {
  name: "PoRadioInput"
}, y2 = /* @__PURE__ */ T({
  ...u1,
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
    const o = e, l = $();
    l.value = o.modelValue;
    const { uniqueId: s, generateUniqueId: a } = Ne(), n = $(o.id);
    return Z(() => {
      o.id === "" && (a(), n.value = s.value);
    }), To(() => {
      l.value = o.modelValue;
    }), ee(l, () => {
      t("update:modelValue", l.value), t("selected", l.value);
    }), (i, u) => (p(), N(O(Cr), {
      modelValue: l.value,
      "onUpdate:modelValue": u[0] || (u[0] = (c) => l.value = c),
      class: L([{ "lg:po-grid lg:po-grid-cols-2": i.display === "horizontal" }])
    }, {
      default: z(() => [
        C(O(kl), {
          class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700",
          for: n.value
        }, {
          default: z(() => [
            r("span", null, k(i.label), 1),
            i.required ? (p(), d("span", n1, "*")) : V("", !0),
            C(He, { info: i.info }, null, 8, ["info"])
          ]),
          _: 1
        }, 8, ["for"]),
        i.options !== null ? (p(), d("div", {
          key: 0,
          class: "po-mt-1 po-flex -po-mb-3 po-flex-wrap",
          id: n.value
        }, [
          (p(!0), d(F, null, K(i.options, (c) => (p(), N(O(Pr), {
            as: "template",
            key: c.id,
            value: c.id
          }, {
            default: z(({ checked: h, active: w }) => [
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
                    h ? "po-border-mpao-lightblue" : "po-border-slate-400"
                  ]])
                }, [
                  r("span", {
                    class: L(["po-w-3 po-h-3 po-rounded-full", [
                      "",
                      h ? "po-bg-mpao-lightblue" : "po-bg-transparent"
                    ]])
                  }, null, 2)
                ], 2),
                r("span", i1, [
                  r("span", p1, [
                    C(O(kl), {
                      as: "span",
                      class: "po-block po-text-sm po-font-medium po-text-gray-900"
                    }, {
                      default: z(() => [
                        J(k(c.title), 1)
                      ]),
                      _: 2
                    }, 1024),
                    c.description ? (p(), N(O(Or), {
                      key: 0,
                      as: "span",
                      class: "po-mt-1 po-flex po-items-center po-text-sm po-text-gray-500"
                    }, {
                      default: z(() => [
                        J(k(c.description), 1)
                      ]),
                      _: 2
                    }, 1024)) : V("", !0)
                  ])
                ])
              ], 2)
            ]),
            _: 2
          }, 1032, ["value"]))), 128))
        ], 8, r1)) : V("", !0),
        r("div", null, [
          C(Ae, { message: i.message }, null, 8, ["message"]),
          C(ze, { "error-message": i.errorMessage }, null, 8, ["error-message"])
        ])
      ]),
      _: 1
    }, 8, ["modelValue", "class"]));
  }
}), d1 = { class: "po-bg-white po-relative po-group po-rounded-xl focus-within:po-ring-2 focus-within:po-ring-inset focus-within:po-ring-indigo-500" }, c1 = { class: "po-block po-p-4 po-transition-colors po-duration-75 po-ease-linear" }, f1 = { class: "po-flex po-items-start po-space-x-2" }, v1 = { class: "po-flex po-items-start po-space-x-1" }, h1 = { class: "po-block po-text-2xl po-font-light po-text-slate-600" }, m1 = {
  key: 0,
  class: "po-text-sm po-text-green-500 po-font-medium po-pt-1"
}, b1 = { class: "po-text-sm po-tracking-wide po-text-slate-500" }, g1 = {
  name: "PoStatsBlock"
}, w2 = /* @__PURE__ */ T({
  ...g1,
  props: {
    items: { default: null },
    numberOfCols: { default: "po-grid-cols-1 lg:po-grid-cols-3" }
  },
  setup(e) {
    return (t, o) => (p(), d("div", {
      class: L(["po-grid po-gap-5", t.numberOfCols])
    }, [
      (p(!0), d(F, null, K(t.items, (l) => (p(), d("div", d1, [
        r("span", c1, [
          r("div", f1, [
            r("div", null, [
              r("span", {
                class: L([
                  "po-inline-flex po-p-2 po-rounded-md",
                  l.bgColor,
                  l.iconColor
                ])
              }, [
                (p(), N(he(l.icon), { class: "po-w-4 po-h-4" }))
              ], 2)
            ]),
            r("div", null, [
              r("div", v1, [
                r("span", h1, k(l.value), 1),
                l.diff ? (p(), d("span", m1, k(l.diff), 1)) : V("", !0)
              ]),
              r("h4", b1, k(l.label), 1)
            ])
          ])
        ])
      ]))), 256))
    ], 2));
  }
}), y1 = {
  key: 0,
  class: "po-flex po-space-x-3 po-items-start"
}, w1 = { class: "po-flex po-items-center po-space-x-2" }, _1 = ["datetime"], $1 = { class: "po-text-sm po-font-medium po-text-slate-600" }, x1 = ["datetime"], V1 = { class: "flex" }, k1 = { class: "po-flex po-pt-3 po-flex-wrap po-max-w-sm" }, C1 = ["onClick"], S1 = {
  key: 1,
  class: "po-w-full po-text-center"
}, P1 = { class: "po-inline-block po-text-sm po-italic po-text-slate-500" }, O1 = /* @__PURE__ */ r("span", { class: "po-text-lg po-text-slate-300 po-px-3 po-inline-block" }, "—", -1), L1 = ["datetime"], M1 = {
  name: "PoChatLogItem"
}, _2 = /* @__PURE__ */ T({
  ...M1,
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
      t.item.type !== "message" ? (p(), d("div", y1, [
        t.item.type !== "first" && t.item.avatar !== "" ? (p(), d("div", {
          key: 0,
          class: "po-shrink-0 po-w-8 po-h-8 po-rounded-full po-p-1 po-bg-contain po-bg-slate-100",
          style: Do({ "background-image": `url(${t.item.avatar})` })
        }, null, 4)) : V("", !0),
        r("div", {
          class: L([
            { "po-pt-1": t.item.type !== "first" },
            {
              "po-flex po-justify-end po-items-end po-flex-col": t.item.type === "first"
            }
          ])
        }, [
          r("span", w1, [
            t.item.type === "first" ? (p(), d("time", {
              key: 0,
              datetime: t.item.time,
              class: "po-text-xs po-text-slate-400"
            }, k(t.item.time_human), 9, _1)) : V("", !0),
            r("span", $1, k(t.item.name), 1),
            t.item.type === "second" ? (p(), d("time", {
              key: 1,
              datetime: t.item.time,
              class: "po-text-xs po-text-slate-400"
            }, k(t.item.time_human), 9, x1)) : V("", !0)
          ]),
          r("div", {
            class: L([
              "po-mt-2 po-space-y-1",
              {
                "po-flex po-justify-end po-items-end po-flex-col": t.item.type === "first"
              }
            ])
          }, [
            X(t.$slots, "message", {}, () => [
              (p(!0), d(F, null, K(t.item.message, (l) => (p(), d("div", V1, [
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
                }, k(l), 3)
              ]))), 256))
            ]),
            r("div", k1, [
              (p(!0), d(F, null, K(t.item.actions, (l) => (p(), d("button", {
                onClick: (s) => t.$emit("button-click", l.label),
                class: "po-appearance-none po-border po-border-mpao-lightblue po-bg-white hover:po-bg-mpao-lightblue po-px-3 po-py-1 po-mb-2 po-mr-2 po-rounded-lg po-text-slate-500 hover:po-text-sky-100 po-transition-colors po-duration-150 po-ease-in-out po-text-sm po-ring-0 po-outline-none"
              }, k(l.label), 9, C1))), 256))
            ])
          ], 2)
        ], 2)
      ])) : V("", !0),
      t.item.type === "message" ? (p(), d("div", S1, [
        (p(!0), d(F, null, K(t.item.message, (l) => (p(), d("p", P1, [
          J(k(l) + " ", 1),
          O1,
          r("time", {
            datetime: t.item.time,
            class: "po-text-xs po-text-slate-400 po-inline-block"
          }, k(t.item.time_human), 9, L1)
        ]))), 256))
      ])) : V("", !0)
    ], 2));
  }
}), T1 = {
  key: 0,
  class: "po-pointer-events-auto po-w-full po-max-w-sm po-overflow-hidden po-rounded-lg po-bg-mpao-lightblue po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5"
}, D1 = { class: "po-p-4" }, I1 = { class: "po-flex po-items-start" }, E1 = { class: "po-flex-shrink-0" }, B1 = { class: "po-ml-3 po-w-0 po-flex-1 po-pt-0.5" }, z1 = { class: "po-text-sm po-font-medium po-text-sky-100" }, A1 = { class: "po-mt-1 po-text-sm po-text-sky-300" }, R1 = { class: "po-mt-3 po-flex po-space-x-4" }, j1 = { class: "po-ml-4 po-flex po-flex-shrink-0" }, F1 = /* @__PURE__ */ r("span", { class: "po-sr-only" }, "Close", -1), N1 = {
  name: "PoNotification"
}, $2 = /* @__PURE__ */ T({
  ...N1,
  props: {
    show: { type: Boolean, default: !1 },
    label: { default: "" },
    text: { default: "" },
    buttonLabel: { default: "Ok" }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    const o = e, { show: l } = Be(o), s = $(!1);
    ee(l, () => {
      s.value = !1, setTimeout(() => {
        s.value = !0;
      }, 100);
    });
    const a = $(!1);
    return ee(s, () => {
      a.value = !1, setTimeout(() => {
        a.value = !0;
      }, 200);
    }), (n, i) => s.value ? (p(), N(Lt, {
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
        default: z(() => [
          a.value ? (p(), d("div", T1, [
            r("div", D1, [
              r("div", I1, [
                r("div", E1, [
                  X(n.$slots, "icon")
                ]),
                r("div", B1, [
                  r("p", z1, k(n.label), 1),
                  r("p", A1, k(n.text), 1),
                  r("div", R1, [
                    r("button", {
                      onClick: i[0] || (i[0] = (u) => n.$emit("button-click", n.buttonLabel)),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-100 hover:po-text-sky-200 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, k(n.buttonLabel), 1),
                    r("button", {
                      onClick: i[1] || (i[1] = (u) => s.value = !1),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-300 hover:po-text-sky-500 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, " Dismiss ")
                  ])
                ]),
                r("div", j1, [
                  r("button", {
                    type: "button",
                    onClick: i[2] || (i[2] = (u) => s.value = !1),
                    class: "po-inline-flex po-rounded-md po-bg-mpao-lightblue po-text-sky-500 hover:po-text-sky-300 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                  }, [
                    F1,
                    C(O(Ls), {
                      class: "po-h-5 po-w-5",
                      "aria-hidden": "true"
                    })
                  ])
                ])
              ])
            ])
          ])) : V("", !0)
        ]),
        _: 3
      })
    ])) : V("", !0);
  }
}), H1 = /* @__PURE__ */ r("div", { class: "po-fixed po-inset-0" }, null, -1), q1 = { class: "po-absolute po-inset-0 po-overflow-hidden" }, Y1 = { class: "po-pointer-events-none po-fixed po-inset-y-0 po-right-0 po-flex po-max-w-full po-pl-10" }, U1 = { class: "po-flex po-h-full po-flex-col po-overflow-y-auto po-bg-white po-shadow-xl" }, W1 = { class: "po-bg-slate-50 po-py-6 po-px-4 sm:po-px-6" }, Z1 = { class: "po-flex po-items-center po-justify-between" }, G1 = { class: "po-ml-3 po-flex po-h-7 po-items-center" }, K1 = /* @__PURE__ */ r("span", { class: "po-sr-only" }, "Close panel", -1), X1 = {
  key: 0,
  class: "po-mt-1"
}, Q1 = { class: "po-text-sm po-text-slate-500" }, J1 = {
  key: 0,
  class: "po-bg-slate-50 po-rounded-b-xl po-shrink-0"
}, e0 = {
  name: "PoSlideover"
}, x2 = /* @__PURE__ */ T({
  ...e0,
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
    const o = e, { show: l } = Be(o), s = $(!1);
    ee(l, () => {
      s.value = l.value;
    });
    function a() {
      s.value = !1, t("slideover-closed", !0);
    }
    return (n, i) => (p(), N(O(zt), {
      as: "template",
      show: s.value
    }, {
      default: z(() => [
        C(O(Jt), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: a
        }, {
          default: z(() => [
            H1,
            r("div", {
              class: L(["po-fixed po-inset-0 po-overflow-hidden po-bg-black", n.screenOpacity])
            }, [
              r("div", q1, [
                r("div", Y1, [
                  C(O(Ke), {
                    as: "template",
                    enter: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "enter-from": "po-translate-x-full",
                    "enter-to": "po-translate-x-0",
                    leave: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "leave-from": "po-translate-x-0",
                    "leave-to": "po-translate-x-full"
                  }, {
                    default: z(() => [
                      C(O(eo), {
                        class: L([n.maxWidth, "po-pointer-events-auto po-w-screen"])
                      }, {
                        default: z(() => [
                          r("div", U1, [
                            r("div", W1, [
                              r("div", Z1, [
                                C(O(hs), { class: "po-text-lg po-font-medium po-text-slate-600" }, {
                                  default: z(() => [
                                    J(k(n.label), 1)
                                  ]),
                                  _: 1
                                }),
                                r("div", G1, [
                                  r("button", {
                                    type: "button",
                                    class: "po-rounded-md po-text-slate-500 hover:po-text-mpao-lightblue focus:po-outline-none focus:po-ring-2 focus:po-ring-white",
                                    onClick: a
                                  }, [
                                    K1,
                                    C(O(Wt), {
                                      class: "po-h-6 po-w-6",
                                      "aria-hidden": "true"
                                    })
                                  ])
                                ])
                              ]),
                              n.description ? (p(), d("div", X1, [
                                r("p", Q1, k(n.description), 1)
                              ])) : V("", !0)
                            ]),
                            r("div", {
                              class: L([n.bgColor, "po-relative po-grow po-pt-6 po-px-4 sm:po-px-6"])
                            }, [
                              X(n.$slots, "content")
                            ], 2),
                            n.$slots.footer ? (p(), d("div", J1, [
                              X(n.$slots, "footer")
                            ])) : V("", !0)
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
}), t0 = /* @__PURE__ */ r("div", { class: "po-fixed po-inset-0 po-bg-gray-500 po-bg-opacity-25 po-transition-opacity" }, null, -1), o0 = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto po-p-4 sm:po-p-6 md:po-p-20" }, l0 = { class: "po-relative" }, s0 = {
  key: 0,
  class: "po-max-h-96 scroll-py-3 po-overflow-y-auto po-p-3"
}, a0 = {
  name: "PoCommandPalette"
}, V2 = /* @__PURE__ */ T({
  ...a0,
  props: {
    show: { type: Boolean, default: !1 },
    showContent: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, o = $(""), { show: l } = Be(t), s = $(!1);
    ee(l, () => {
      s.value = !1, setTimeout(() => {
        s.value = !0;
      }, 100);
    });
    function a(n) {
      n.ctrlKey && n.key === "b" && (s.value = !0);
    }
    return Z(() => {
      window.addEventListener("keyup", a);
    }), Lo(() => {
      window.removeEventListener("keyup", a);
    }), (n, i) => (p(), N(O(zt), {
      show: s.value,
      as: "template",
      onAfterLeave: i[2] || (i[2] = (u) => o.value = ""),
      appear: ""
    }, {
      default: z(() => [
        C(O(Jt), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: i[1] || (i[1] = (u) => s.value = !1)
        }, {
          default: z(() => [
            C(O(Ke), {
              as: "template",
              enter: "po-ease-out po-duration-300",
              "enter-from": "po-opacity-0",
              "enter-to": "po-opacity-100",
              leave: "po-ease-in po-duration-200",
              "leave-from": "po-opacity-100",
              "leave-to": "po-opacity-0"
            }, {
              default: z(() => [
                t0
              ]),
              _: 1
            }),
            r("div", o0, [
              C(O(Ke), {
                as: "template",
                enter: "po-ease-out po-duration-300",
                "enter-from": "po-opacity-0 po-scale-95",
                "enter-to": "po-opacity-100 po-scale-100",
                leave: "po-ease-in po-duration-200",
                "leave-from": "po-opacity-100 po-scale-100",
                "leave-to": "po-opacity-0 po-scale-95"
              }, {
                default: z(() => [
                  C(O(eo), { class: "po-mx-auto po-max-w-xl po-transform po-divide-y po-divide-gray-100 po-overflow-hidden po-rounded-xl po-bg-white po-shadow-2xl po-ring-1 po-ring-black po-ring-opacity-5 po-transition-all" }, {
                    default: z(() => [
                      r("div", l0, [
                        C(O(Yi), {
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
                      n.showContent ? (p(), d("div", s0, [
                        X(n.$slots, "content")
                      ])) : V("", !0)
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
}), n0 = /* @__PURE__ */ r("div", { class: "po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity" }, null, -1), r0 = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto" }, i0 = { class: "po-flex po-min-h-full po-items-start po-justify-center po-p-4 po-text-center sm:po-p-0" }, p0 = { class: "po-p-5" }, u0 = { class: "po-text-center po-space-y-3" }, d0 = { key: 1 }, c0 = { class: "po-text-sm po-text-gray-600" }, f0 = { class: "po-border-t po-border-slate-200 po-flex po-divide-x po-divide-slate-200" }, v0 = {
  name: "PoAlert"
}, k2 = /* @__PURE__ */ T({
  ...v0,
  props: {
    cancelBtnLabel: { default: "Cancel" },
    okBtnLabel: { default: "Ok" },
    alertTitle: { default: "" },
    alertDescription: { default: "" },
    show: { type: Boolean, default: !1 }
  },
  emits: ["alert-closed", "button-click", "confirm", "cancel"],
  setup(e, { emit: t }) {
    const o = e, { show: l } = Be(o), s = $(!1);
    ee(l, () => {
      s.value = l.value;
    });
    function a() {
      s.value = !1, t("alert-closed", !0);
    }
    return (n, i) => (p(), N(O(zt), {
      as: "template",
      show: s.value
    }, {
      default: z(() => [
        C(O(Jt), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: a
        }, {
          default: z(() => [
            C(O(Ke), {
              as: "template",
              enter: "po-ease-out po-duration-300",
              "enter-from": "po-opacity-0",
              "enter-to": "po-opacity-100",
              leave: "po-ease-in po-duration-200",
              "leave-from": "po-opacity-100",
              "leave-to": "po-opacity-0"
            }, {
              default: z(() => [
                n0
              ]),
              _: 1
            }),
            r("div", r0, [
              r("div", i0, [
                C(O(Ke), {
                  as: "template",
                  enter: "po-ease-out po-duration-300",
                  "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                  "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                  leave: "po-ease-in po-duration-200",
                  "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                  "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                }, {
                  default: z(() => [
                    C(O(eo), { class: "po-relative po-transform po-overflow-hidden po-rounded-lg po-bg-white po-text-left po-shadow-xl po-transition-all sm:po-my-8 sm:po-w-full sm:po-max-w-sm" }, {
                      default: z(() => [
                        r("div", p0, [
                          r("div", u0, [
                            n.alertTitle !== "" ? (p(), N(O(hs), {
                              key: 0,
                              as: "h3",
                              class: "po-text-lg po-font-medium po-leading-6 po-text-gray-900"
                            }, {
                              default: z(() => [
                                J(k(n.alertTitle), 1)
                              ]),
                              _: 1
                            })) : V("", !0),
                            n.alertDescription !== "" ? (p(), d("div", d0, [
                              r("p", c0, k(n.alertDescription), 1)
                            ])) : V("", !0)
                          ])
                        ]),
                        r("div", f0, [
                          r("button", {
                            onClick: i[0] || (i[0] = (u) => {
                              n.$emit("cancel", !0), a();
                            }),
                            class: "po-text-sm po-bg-white po-text-slate-500 hover:po-bg-slate-50 po-transition-colors po-duration-100 po-ease-out po-font-medium po-py-3 po-px-5 po-w-1/2 focus:po-ring-0"
                          }, k(n.cancelBtnLabel), 1),
                          r("button", {
                            onClick: i[1] || (i[1] = (u) => {
                              n.$emit("confirm", !0), n.$emit("button-click", "ok"), a();
                            }),
                            class: "po-text-sm po-bg-white po-text-mpao-lightblue hover:po-bg-slate-50 po-transition-colors po-duration-100 po-ease-out po-font-medium po-py-3 po-px-5 po-w-1/2 focus:po-ring-0"
                          }, k(n.okBtnLabel), 1)
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
}), h0 = {
  key: 0,
  class: "po-col-span-2 po-relative po-mt-5"
}, m0 = /* @__PURE__ */ r("span", {
  class: "po-absolute po-top-0 po-left-1 po--ml-px po-h-[calc(100%-7px)] po-w-0.5 po-bg-gray-200",
  "aria-hidden": "true"
}, null, -1), b0 = { class: "po-relative po-space-y-5" }, g0 = { class: "po-flex po-space-x-2 po-items-start" }, y0 = { class: "log-item" }, w0 = { key: 0 }, _0 = {
  key: 0,
  class: "po-text-slate-500 po-text-xs"
}, $0 = {
  key: 1,
  class: "po-text-center po-py-10"
}, x0 = { class: "po-text-sm po-text-slate-500" }, V0 = {
  name: "PoLogs"
}, C2 = /* @__PURE__ */ T({
  ...V0,
  props: {
    items: { default: null },
    emptyLabel: { default: "No logs to display." }
  },
  setup(e) {
    return (t, o) => (p(), d("div", null, [
      t.items && t.items.length > 0 ? (p(), d("div", h0, [
        m0,
        r("div", b0, [
          (p(!0), d(F, null, K(t.items, (l, s) => (p(), d("div", g0, [
            r("p", {
              class: L([
                "po-rounded-full po-w-2 po-h-2 border-1 po-border-white po-shrink-0",
                { "po-bg-orange-400": s !== t.items.length - 1 },
                ,
                { "po-bg-slate-300": s == t.items.length - 1 }
              ])
            }, null, 2),
            r("div", y0, [
              r("span", null, [
                J(k(l.label) + " on " + k(l.date) + " " + k(l.by && l.by !== "" ? "by" : "") + " ", 1),
                l.by && l.by !== "" ? (p(), d("span", w0, k(l.by), 1)) : V("", !0)
              ]),
              l.description && l.description !== "" ? (p(), d("blockquote", _0, ' "' + k(l.description) + '" ', 1)) : V("", !0)
            ])
          ]))), 256))
        ])
      ])) : (p(), d("div", $0, [
        r("span", x0, k(t.emptyLabel), 1)
      ]))
    ]));
  }
}), k0 = {
  name: "PoMain"
}, S2 = /* @__PURE__ */ T({
  ...k0,
  setup(e) {
    const t = $(!0);
    return xe.on("sidebarOpen", (o) => {
      typeof o == "boolean" && (t.value = o);
    }), (o, l) => (p(), d("main", {
      class: L(["po-min-h-screen po-overflow-y-auto po-transition-all po-duration-300 po-ease-in-out po-pt-[92px] po-flex po-flex-col po-w-full", [
        { "lg:po-pl-[250px]": t.value },
        { "lg:po-pl-[58px]": !t.value }
      ]]),
      id: "shell-content-root"
    }, [
      X(o.$slots, "default")
    ], 2));
  }
}), C0 = {
  key: 0,
  role: "list",
  class: "po-divide-y po-divide-gray-200 po-rounded-md po-border po-border-gray-200"
}, S0 = { class: "po-flex po-items-center po-justify-between po-py-3 po-pl-3 po-pr-4 po-text-sm" }, P0 = { class: "po-flex po-w-0 po-flex-1 po-items-center" }, O0 = { class: "po-ml-2 po-w-0 po-flex-1 po-truncate" }, L0 = { class: "po-ml-4 po-flex-shrink-0 po-space-x-4" }, M0 = ["onClick"], T0 = ["onClick"], D0 = {
  key: 1,
  class: "po-py-10"
}, I0 = { class: "po-text-sm po-text-slate-500" }, E0 = {
  name: "PoDownloadFileList"
}, P2 = /* @__PURE__ */ T({
  ...E0,
  props: {
    files: { default: null },
    linkLabel: { default: "Download" },
    emptyLabel: { default: "No files to download." },
    showViewBtn: { type: Boolean, default: !1 },
    viewBtnLabel: { default: "View" }
  },
  emits: ["button-click", "view-click"],
  setup(e, { emit: t }) {
    return (o, l) => (p(), d("div", null, [
      o.files && o.files.length > 0 ? (p(), d("ul", C0, [
        (p(!0), d(F, null, K(o.files, (s) => (p(), d("li", S0, [
          r("div", P0, [
            C(O(Al), {
              class: "po-h-5 po-w-5 po-flex-shrink-0 po-text-gray-400",
              "aria-hidden": "true"
            }),
            r("span", O0, k(s.label), 1)
          ]),
          r("div", L0, [
            r("a", {
              href: "#",
              onClick: le((a) => o.$emit("button-click", s), ["prevent"]),
              class: "po-font-medium po-text-mpao-lightblue hover:po-text-indigo-500"
            }, k(o.linkLabel), 9, M0),
            o.showViewBtn ? (p(), d("a", {
              key: 0,
              href: "#",
              onClick: le((a) => o.$emit("view-click", s), ["prevent"]),
              class: "po-font-medium po-text-mpao-lightblue hover:po-text-indigo-500"
            }, k(o.viewBtnLabel), 9, T0)) : V("", !0)
          ])
        ]))), 256))
      ])) : (p(), d("div", D0, [
        r("span", I0, k(o.emptyLabel), 1)
      ]))
    ]));
  }
}), B0 = {
  name: "PoContentArea"
}, O2 = /* @__PURE__ */ T({
  ...B0,
  setup(e) {
    const t = $(!0);
    return xe.on("sidebarOpen", (o) => {
      typeof o == "boolean" && (t.value = o);
    }), (o, l) => (p(), d("section", {
      class: L(["shell-content--area po-px-3 lg:po-px-5 po-pb-10 po-space-y-5 po-grow", [
        { "po-max-w-[1370px]": t.value },
        { "po-max-w-[1500px]": !t.value }
      ]])
    }, [
      X(o.$slots, "default")
    ], 2));
  }
}), z0 = {
  name: "AnimatedLogo"
}, A0 = /* @__PURE__ */ Js('<div><svg class="po-stroke-mpao-blue po-w-16 animated-logo" viewBox="0 0 62 55" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.76292 17.8572L7.7 17.9704V18.0682C6.87397 19.526 6.23618 20.649 5.58241 21.4779C4.93472 22.299 4.30505 22.7864 3.51417 23.0053C3.46261 23.0112 3.41718 23.0206 3.39088 23.026C3.35663 23.0331 3.31491 23.0425 3.27694 23.0511C3.25988 23.055 3.24357 23.0587 3.22903 23.0619C3.1106 23.0882 3.03712 23.1 3 23.1H2.93844L2.89561 23.1107L15.9876 0.600006H19.1308C17.2397 1.92747 16.1556 3.83665 15.5371 5.73245C14.8359 7.88203 14.7198 10.0514 14.7027 11.4258C13.1737 11.6033 11.0729 12.4434 9.38038 15.128C8.77075 16.0431 8.26353 16.9561 7.76713 17.8496L7.76292 17.8572Z"></path><path d="M48.1818 11.3241C48.047 8.39742 47.5389 6.05982 46.5472 4.07639C45.8153 2.61266 44.8203 1.39271 43.5945 0.5H46.8113L59.8583 23.0959C59.8303 23.0912 59.7891 23.0819 59.7213 23.0649C59.7166 23.0638 59.7117 23.0625 59.7066 23.0612C59.6302 23.042 59.5099 23.0118 59.3765 23.0027C58.59 22.7825 57.9627 22.2958 57.3176 21.4779C56.6586 20.6423 56.0158 19.508 55.1801 18.0331L55.1413 17.9647C54.8861 17.4553 54.6068 16.973 54.3362 16.5054L54.3327 16.4995C54.0565 16.0225 53.7893 15.5605 53.5472 15.0764L53.5333 15.0485L53.516 15.0226C51.7283 12.3411 49.7115 11.4988 48.1818 11.3241Z"></path><path d="M9.28397 39.6773C11.0717 42.3589 13.0885 43.2011 14.6182 43.3759C14.753 46.3026 15.2611 48.6402 16.2528 50.6236C16.9991 52.1163 17.9653 53.2992 19.1863 54.2H15.7881L2.74125 31.699C2.76073 31.6996 2.78031 31.7 2.8 31.7C2.89335 31.7 2.97474 31.7149 3.07903 31.7381C3.08854 31.7402 3.09897 31.7426 3.11023 31.7452C3.18647 31.7626 3.30082 31.7888 3.42319 31.7972C4.20888 32.0178 4.86081 32.5271 5.52047 33.3603C6.20216 34.2214 6.85697 35.382 7.66164 36.8405C8.26116 37.9396 8.76739 38.8512 9.276 39.665L9.27989 39.6712L9.28397 39.6773Z"></path><path d="M55.124 36.865L55.1331 36.8504L55.1412 36.8353C55.9431 35.3316 56.5997 34.1683 57.2697 33.307C57.9146 32.4778 58.5471 31.9616 59.2949 31.6961C59.4179 31.6866 59.5418 31.6616 59.6287 31.6442C59.6354 31.6428 59.6418 31.6415 59.6481 31.6403C59.719 31.6261 59.772 31.616 59.8123 31.6095L46.8115 54.1H43.8753C45.7283 52.7465 46.7867 50.8277 47.3889 48.9394C48.064 46.8226 48.1795 44.7058 48.1971 43.3742C49.7262 43.1967 51.8271 42.3567 53.5196 39.6719C53.8327 39.2016 54.1164 38.6849 54.3777 38.1995C54.4112 38.1375 54.4442 38.076 54.4768 38.0152C54.7049 37.5906 54.9148 37.1996 55.124 36.865Z"></path><path d="M32.2763 51.5708L32.2653 51.5582L32.2536 51.5465C32.0661 51.359 31.7413 51.2 31.4 51.2C31.3949 51.2 31.3894 51.2 31.3835 51.2C31.2956 51.1998 31.1323 51.1993 30.9751 51.2442C30.7932 51.2962 30.6132 51.4082 30.4904 51.6086C29.1941 53.0706 27.544 53.8 25.5 53.8C22.8209 53.8 20.828 52.9218 19.4532 51.2005C18.1148 49.5247 17.3123 46.988 17.1201 43.5109C18.6883 43.1579 19.8601 42.2673 20.5004 41.6896C20.5136 44.8271 20.8579 46.8152 21.6737 48.0181C22.5558 49.319 23.9045 49.6 25.5 49.6C27.4335 49.6 28.5187 48.2893 29.0946 46.9901C29.6604 45.7138 29.7966 44.3347 29.7999 43.8193C29.8943 42.5846 30.6602 41.8 31.5 41.8H31.5778C32.4558 41.8842 33.2 42.7102 33.2 43.9C33.2 45.6119 33.5619 47.0065 34.2986 47.9982C35.0485 49.0077 36.1459 49.544 37.4792 49.5996L37.4896 49.6H37.5C39.2304 49.6 40.5973 49.3258 41.4454 48.0081C41.849 47.3811 42.1078 46.5565 42.2692 45.5056C42.4311 44.4518 42.5 43.1353 42.5 41.5V24.4455L45.9 21.8182V41.5C45.9 41.4958 45.8996 41.5001 45.8978 41.519C45.8959 41.5381 45.8927 41.5719 45.887 41.6267L45.8842 41.6541C45.8752 41.7406 45.8636 41.8524 45.8521 41.9797C45.8264 42.2614 45.8 42.6283 45.8 43V43.9V43.9029V43.9059V43.9088V43.9117V43.9146V43.9175V43.9205V43.9234V43.9263V43.9292V43.9321V43.935V43.9379V43.9408V43.9437V43.9466V43.9495V43.9524V43.9553V43.9581V43.961V43.9639V43.9668V43.9696V43.9725V43.9754V43.9783V43.9811V43.984V43.9868V43.9897V43.9926V43.9954V43.9983V44.0011V44.004V44.0068V44.0096V44.0125V44.0153V44.0181V44.021V44.0238V44.0266V44.0295V44.0323V44.0351V44.0379V44.0407V44.0435V44.0463V44.0492V44.052V44.0548V44.0576V44.0603V44.0631V44.0659V44.0687V44.0715V44.0743V44.0771V44.0798V44.0826V44.0854V44.0882V44.0909V44.0937V44.0965V44.0992V44.102V44.1047V44.1075V44.1102V44.113V44.1157V44.1185V44.1212V44.1239V44.1267V44.1294V44.1321V44.1349V44.1376V44.1403V44.143V44.1457V44.1484V44.1512V44.1539V44.1566V44.1593V44.162V44.1647V44.1674V44.17V44.1727V44.1754V44.1781V44.1808V44.1835V44.1861V44.1888V44.1915V44.1941V44.1968V44.1995V44.2021V44.2048V44.2074V44.2101V44.2127V44.2154V44.218V44.2207V44.2233V44.2259V44.2285V44.2312V44.2338V44.2364V44.239V44.2417V44.2443V44.2469V44.2495V44.2521V44.2547V44.2573V44.2599V44.2625V44.2651V44.2677V44.2702V44.2728V44.2754V44.278V44.2806V44.2831V44.2857V44.2882V44.2908V44.2934V44.2959V44.2985V44.301V44.3036V44.3061V44.3087V44.3112V44.3137V44.3163V44.3188V44.3213V44.3238V44.3264V44.3289V44.3314V44.3339V44.3364V44.3389V44.3414V44.3439V44.3464V44.3489V44.3514V44.3539V44.3564V44.3588V44.3613V44.3638V44.3663V44.3687V44.3712V44.3737V44.3761V44.3786V44.381V44.3835V44.3859V44.3884V44.3908V44.3932V44.3957V44.3981V44.4005V44.403V44.4054V44.4078V44.4102V44.4126V44.415V44.4174V44.4199V44.4223V44.4247V44.427V44.4294V44.4318V44.4342V44.4366V44.439V44.4413V44.4437V44.4461V44.4484V44.4508V44.4532V44.4555V44.4579V44.4602V44.4626V44.4649V44.4672V44.4696V44.4719V44.4742V44.4766V44.4789V44.4812V44.4835V44.4858V44.4882V44.4905V44.4928V44.4951V44.4974V44.4997V44.5019V44.5042V44.5065V44.5088V44.5111V44.5133V44.5156V44.5179V44.5201V44.5224V44.5247V44.5269V44.5292V44.5314V44.5337V44.5359V44.5381V44.5404V44.5426V44.5448V44.547V44.5493V44.5515V44.5537V44.5559V44.5581V44.5603V44.5625V44.5647V44.5669V44.5691V44.5713V44.5734V44.5756V44.5778V44.58V44.5821V44.5843V44.5865V44.5886V44.5908V44.5929V44.5951V44.5972V44.5994V44.6015V44.6036V44.6058V44.6079V44.61V44.6121V44.6142V44.6164V44.6185V44.6206V44.6227V44.6248V44.6269V44.6289V44.631V44.6331V44.6352V44.6373V44.6393V44.6414V44.6435V44.6455V44.6476V44.6497V44.6517V44.6538V44.6558V44.6578V44.6599V44.6619V44.6639V44.666V44.668V44.67V44.672V44.674V44.676V44.678V44.68V44.682V44.684V44.686V44.688V44.69V44.692V44.6939V44.6959V44.6979V44.6998V44.7018V44.7037V44.7057V44.7076V44.7096V44.7115V44.7135V44.7154V44.7173V44.7193V44.7212V44.7231V44.725V44.7269V44.7288V44.7307V44.7326V44.7345V44.7364V44.7383V44.7402V44.7421V44.7439V44.7458V44.7477V44.7495V44.7514V44.7533V44.7551V44.757V44.7588V44.7606V44.7625V44.7643V44.7661V44.768V44.7698V44.7716V44.7734V44.7752V44.777V44.7788V44.7806V44.7824V44.7842V44.786V44.7878V44.7896V44.7914V44.7931V44.7949V44.7967V44.7984V44.8002V44.8019V44.8037V44.8054V44.8071V44.8089V44.8106V44.8123V44.8141V44.8158V44.8175V44.8192V44.8209V44.8226V44.8243V44.826V44.8277V44.8294V44.8311V44.8328V44.8344V44.8361V44.8378V44.8394V44.8411V44.8427V44.8444V44.846V44.8477V44.8493V44.851V44.8526V44.8542V44.8558V44.8575V44.8591V44.8607V44.8623V44.8639V44.8655V44.8671V44.8687V44.8702V44.8718V44.8734V44.875V44.8765V44.8781V44.8797V44.8812V44.8828V44.8843V44.8859V44.8874V44.8889V44.8905V44.892V44.8935V44.895V44.8965V44.898V44.8996V44.9011V44.9025V44.904V44.9055V44.907V44.9085V44.91V44.9114V44.9129V44.9144V44.9158V44.9173V44.9187V44.9202V44.9216V44.923V44.9245V44.9259V44.9273V44.9288V44.9302V44.9316V44.933V44.9344V44.9358V44.9372V44.9386V44.9399V44.9413V44.9427V44.9441V44.9454V44.9468V44.9482V44.9495V44.9509V44.9522V44.9535V44.9549V44.9562V44.9575V44.9589V44.9602V44.9615V44.9628V44.9641V44.9654V44.9667V44.968V44.9693V44.9706V44.9718V44.9731V44.9744V44.9757V44.9769V44.9782V44.9794V44.9807V44.9819V44.9832V44.9844V44.9856V44.9868V44.9881V44.9893V44.9905V44.9917V44.9929V44.9941V44.9953V44.9965V44.9977V44.9988V45V45.1V45.1006V45.1012V45.1017V45.1023V45.1029V45.1035V45.104V45.1046V45.1052V45.1057V45.1063V45.1069V45.1074V45.108V45.1085V45.1091V45.1096V45.1102V45.1107V45.1113V45.1118V45.1123V45.1129V45.1134V45.1139V45.1145V45.115V45.1155V45.1161V45.1166V45.1171V45.1176V45.1181V45.1186V45.1191V45.1196V45.1202V45.1207V45.1212V45.1217V45.1222V45.1226V45.1231V45.1236V45.1241V45.1246V45.1251V45.1256V45.1261V45.1265V45.127V45.1275V45.128V45.1284V45.1289V45.1294V45.1298V45.1303V45.1307V45.1312V45.1317V45.1321V45.1326V45.133V45.1335V45.1339V45.1343V45.1348V45.1352V45.1357V45.1361V45.1365V45.137V45.1374V45.1378V45.1383V45.1387V45.1391V45.1395V45.1399V45.1404V45.1408V45.1412V45.1416V45.142V45.1424V45.1428V45.1432V45.1436V45.144V45.1444V45.1448V45.1452V45.1456V45.146V45.1464V45.1468V45.1471V45.1475V45.1479V45.1483V45.1487V45.149V45.1494V45.1498V45.1501V45.1505V45.1509V45.1512V45.1516V45.152V45.1523V45.1527V45.153V45.1534V45.1537V45.1541V45.1544V45.1548V45.1551V45.1555V45.1558V45.1561V45.1565V45.1568V45.1572V45.1575V45.1578V45.1581V45.1585V45.1588V45.1591V45.1594V45.1598V45.1601V45.1604V45.1607V45.161V45.1613V45.1616V45.162V45.1623V45.1626V45.1629V45.1632V45.1635V45.1638V45.1641V45.1644V45.1647V45.165V45.1652V45.1655V45.1658V45.1661V45.1664V45.1667V45.167V45.1672V45.1675V45.1678V45.1681V45.1683V45.1686V45.1689V45.1691V45.1694V45.1697V45.1699V45.1702V45.1705V45.1707V45.171V45.1712V45.1715V45.1717V45.172V45.1722V45.1725V45.1727V45.173V45.1732V45.1735V45.1737V45.174V45.1742V45.1744V45.1747V45.1749V45.1751V45.1753C45.5039 48.1507 44.6544 50.2924 43.3031 51.6899C41.9582 53.0807 40.0524 53.8 37.5 53.8C35.4235 53.8 33.5685 53.0476 32.2763 51.5708Z"></path><path d="M22.8 23.2538V18.2178L29.3909 23.307L26.1939 25.8645L22.8 23.2538Z"></path><path d="M16.7 20.2V19.7H16.5V18.8V10.858C16.5042 10.8478 16.5096 10.8348 16.5142 10.8232C16.5488 10.7368 16.5963 10.6012 16.5998 10.4209C16.8474 7.03069 17.6799 4.61275 19.0737 3.04468C20.4543 1.49155 22.4511 0.699997 25.2 0.699997C27.2568 0.699997 29.1263 1.53906 30.5352 3.04197L30.5407 3.04785L30.5464 3.05355C30.7614 3.26854 31.0508 3.35 31.3 3.35C31.5492 3.35 31.8386 3.26854 32.0536 3.05355L32.0646 3.04251L32.0749 3.03081C33.4779 1.4408 35.1402 0.699997 37.3 0.699997C40.0769 0.699997 42.1441 1.62655 43.5571 3.42174C44.934 5.17104 45.7393 7.80743 45.886 11.3874C44.0184 11.8028 42.6345 12.9721 42.1 13.4936V13.2C42.1 10.0544 41.7835 8.06299 40.9925 6.86242C40.1497 5.58316 38.8495 5.3 37.3 5.3C35.4114 5.3 34.3769 6.59229 33.8399 7.85422C33.3055 9.11015 33.2 10.457 33.2 10.9C33.2 12.2634 32.2859 13.1 31.3 13.1H31.2204C30.2388 13.0141 29.4 12.0845 29.4 10.8C29.4 9.19015 29.0639 7.84653 28.3661 6.89234C27.6525 5.91665 26.5974 5.4 25.3 5.4C23.6267 5.4 22.3017 5.64608 21.4896 6.93319C21.1052 7.5425 20.863 8.34586 20.7131 9.3714C20.5626 10.4004 20.5 11.6909 20.5 13.3V30.4541L16.7 33.3833V20.2Z"></path><path d="M40.1 31.5462V36.5799L33.4225 31.4049L36.6974 28.9288L40.1 31.5462Z"></path><mask id="path-9-inside-1" fill="white"><path d="M58.7 30.1C58.9 30 59.5 30 59.8 29.9C60.9 29.8 61.8 28.7 61.8 27.4C61.8 26.1 60.9 25 59.8 24.9C59.7 24.9 59.5 24.9 59.4 24.8C59.3 24.8 59.2 24.8 59.1 24.7C59.1 24.7 59.1 24.7 59 24.7C58.6 24.6 58.1 24.4 57.7 24.1C57.7 24.1 57.7 24.1 57.6 24C56.1 23.1 55 21.2 53.6 18.7C53.1 17.8 52.6 16.9 52 16C50.5 13.7 48.9 13.1 47.8 13C47.7 13 47.6 13 47.5 13H47.3C47.1 13 46.9 13 46.9 13C45.2 13.2 44 14.3 43.6 14.8L25.2 29.1C25.2 29.1 25.2 29.1 25.1 29.2L23 30.8L16.8 35.5L16.4 35.9C16.4 35.9 16.4 35.9 16.3 35.9C16 36.1 15.7 36.3 15.4 36.3C15.1 36.3 14.9 36.2 14.7 36.1C14.5 35.9 14.4 35.8 14.3 35.5C13.9 34.8 13.4 34.1 13 33.3V33.1C12.2 31.7 11.3 30 10.1 28.6C10.1 28.6 10.1 28.6 10.1 28.5L10 28.4C9.9 28.3 9.9 28.3 9.8 28.2C9.8 28.2 9.8 28.2 9.7 28.1L9.2 27.5C9.2 27.5 9.2 27.5 9.1 27.5C9 27.3 9 27.1 9.1 27L9.6 26.5C10.9 25 11.9 23.2 12.8 21.6V21.5C13.2 20.7 13.7 19.9 14.2 19.1C14.4 18.8 14.6 18.6 14.7 18.5V13.1C13.6 13.2 12 13.9 10.6 16C10 16.9 9.5 17.8 9 18.7C7.8 20.9 6.8 22.5 5.6 23.5C4.8 24.1 4 24.4 3.5 24.6C3.5 24.6 3.5 24.6 3.4 24.6C3.3 24.6 3.1 24.7 3 24.7C2.9 24.7 2.9 24.7 2.8 24.7C2.7 24.7 2.7 24.7 2.7 24.7H2.6H2.5C2.3 24.7 2.2 24.8 2.1 24.8C2 24.8 2 24.8 2 24.9C1.7 25.1 1.4 25.3 1.2 25.6C1.2 25.7 1.1 25.7 1.1 25.8V25.9L0.999997 26.1C0.999997 26.2 0.999997 26.2 0.899997 26.3C0.899997 26.4 0.899997 26.4 0.799997 26.5C0.799997 26.6 0.799997 26.7 0.699997 26.7C0.699997 26.8 0.699997 26.9 0.699997 26.9C0.699997 27 0.699997 27.1 0.699997 27.1C0.699997 27.2 0.699997 27.2 0.699997 27.3C0.699997 27.4 0.699997 27.5 0.699997 27.5C0.699997 27.6 0.699997 27.7 0.699997 27.7C0.699997 27.8 0.699997 27.9 0.799997 27.9V28V28.1C0.799997 28.2 0.799997 28.2 0.899997 28.2L0.999997 28.4C0.999997 28.5 1.1 28.5 1.1 28.5C1.1 28.5 1.1 28.5 1.1 28.6C1.2 28.7 1.3 28.9 1.5 29C1.6 29 1.6 29.1 1.7 29.1C1.7 29.1 1.8 29.1 1.8 29.2C1.8 29.2 1.8 29.2 1.9 29.2C2 29.3 2.2 29.3 2.3 29.4C2.4 29.4 2.4 29.4 2.4 29.4L2.9 29.5C3.1 29.5 3.2 29.6 3.4 29.6C4.2 29.8 4.7 30.2 4.8 30.2C6.4 31.2 7.5 33 8.9 35.5C9.5 36.6 10 37.4 10.5 38.2C11.9 40.3 13.4 41 14.4 41.1C14.5 41.1 14.5 41.1 14.6 41.1C14.7 41.1 14.8 41.1 14.8 41.1C15 41.1 15.2 41.1 15.5 41.1H15.6C17.2 40.8 18.5 39.8 18.9 39.3L19 39.2L19.8 38.6C19.8 38.6 19.9 38.5 20 38.5L30.2 30.6L41.3 22L46.5 18H46.6C46.7 18 46.9 17.9 47 17.9C47.4 17.9 47.8 18.1 48.1 18.6L48.5 19.2C48.8 19.7 49.2 20.3 49.5 20.9V21C50.1 22.1 50.8 23.4 51.7 24.6C51.7 24.6 51.7 24.7 51.8 24.7C52.1 25.1 52.4 25.5 52.7 25.8C52.7 25.8 52.8 25.8 52.8 25.9C53 26.1 53.1 26.3 53.3 26.4C53.4 26.5 53.4 26.7 53.3 26.9C52 28.5 50.4 31.1 49.6 32.4V32.5C49.2 33.2 48.7 34.1 48.2 34.9C48 35.2 47.8 35.4 47.7 35.5V40.9C48.8 40.8 50.4 40.1 51.8 37.9C52.4 37 52.9 36 53.4 35.2C53.5 35 53.7 34.7 53.8 34.5C55.2 33 56.4 30.9 58.7 30.1Z"></path></mask><path d="M58.7 30.1C58.9 30 59.5 30 59.8 29.9C60.9 29.8 61.8 28.7 61.8 27.4C61.8 26.1 60.9 25 59.8 24.9C59.7 24.9 59.5 24.9 59.4 24.8C59.3 24.8 59.2 24.8 59.1 24.7C59.1 24.7 59.1 24.7 59 24.7C58.6 24.6 58.1 24.4 57.7 24.1C57.7 24.1 57.7 24.1 57.6 24C56.1 23.1 55 21.2 53.6 18.7C53.1 17.8 52.6 16.9 52 16C50.5 13.7 48.9 13.1 47.8 13C47.7 13 47.6 13 47.5 13H47.3C47.1 13 46.9 13 46.9 13C45.2 13.2 44 14.3 43.6 14.8L25.2 29.1C25.2 29.1 25.2 29.1 25.1 29.2L23 30.8L16.8 35.5L16.4 35.9C16.4 35.9 16.4 35.9 16.3 35.9C16 36.1 15.7 36.3 15.4 36.3C15.1 36.3 14.9 36.2 14.7 36.1C14.5 35.9 14.4 35.8 14.3 35.5C13.9 34.8 13.4 34.1 13 33.3V33.1C12.2 31.7 11.3 30 10.1 28.6C10.1 28.6 10.1 28.6 10.1 28.5L10 28.4C9.9 28.3 9.9 28.3 9.8 28.2C9.8 28.2 9.8 28.2 9.7 28.1L9.2 27.5C9.2 27.5 9.2 27.5 9.1 27.5C9 27.3 9 27.1 9.1 27L9.6 26.5C10.9 25 11.9 23.2 12.8 21.6V21.5C13.2 20.7 13.7 19.9 14.2 19.1C14.4 18.8 14.6 18.6 14.7 18.5V13.1C13.6 13.2 12 13.9 10.6 16C10 16.9 9.5 17.8 9 18.7C7.8 20.9 6.8 22.5 5.6 23.5C4.8 24.1 4 24.4 3.5 24.6C3.5 24.6 3.5 24.6 3.4 24.6C3.3 24.6 3.1 24.7 3 24.7C2.9 24.7 2.9 24.7 2.8 24.7C2.7 24.7 2.7 24.7 2.7 24.7H2.6H2.5C2.3 24.7 2.2 24.8 2.1 24.8C2 24.8 2 24.8 2 24.9C1.7 25.1 1.4 25.3 1.2 25.6C1.2 25.7 1.1 25.7 1.1 25.8V25.9L0.999997 26.1C0.999997 26.2 0.999997 26.2 0.899997 26.3C0.899997 26.4 0.899997 26.4 0.799997 26.5C0.799997 26.6 0.799997 26.7 0.699997 26.7C0.699997 26.8 0.699997 26.9 0.699997 26.9C0.699997 27 0.699997 27.1 0.699997 27.1C0.699997 27.2 0.699997 27.2 0.699997 27.3C0.699997 27.4 0.699997 27.5 0.699997 27.5C0.699997 27.6 0.699997 27.7 0.699997 27.7C0.699997 27.8 0.699997 27.9 0.799997 27.9V28V28.1C0.799997 28.2 0.799997 28.2 0.899997 28.2L0.999997 28.4C0.999997 28.5 1.1 28.5 1.1 28.5C1.1 28.5 1.1 28.5 1.1 28.6C1.2 28.7 1.3 28.9 1.5 29C1.6 29 1.6 29.1 1.7 29.1C1.7 29.1 1.8 29.1 1.8 29.2C1.8 29.2 1.8 29.2 1.9 29.2C2 29.3 2.2 29.3 2.3 29.4C2.4 29.4 2.4 29.4 2.4 29.4L2.9 29.5C3.1 29.5 3.2 29.6 3.4 29.6C4.2 29.8 4.7 30.2 4.8 30.2C6.4 31.2 7.5 33 8.9 35.5C9.5 36.6 10 37.4 10.5 38.2C11.9 40.3 13.4 41 14.4 41.1C14.5 41.1 14.5 41.1 14.6 41.1C14.7 41.1 14.8 41.1 14.8 41.1C15 41.1 15.2 41.1 15.5 41.1H15.6C17.2 40.8 18.5 39.8 18.9 39.3L19 39.2L19.8 38.6C19.8 38.6 19.9 38.5 20 38.5L30.2 30.6L41.3 22L46.5 18H46.6C46.7 18 46.9 17.9 47 17.9C47.4 17.9 47.8 18.1 48.1 18.6L48.5 19.2C48.8 19.7 49.2 20.3 49.5 20.9V21C50.1 22.1 50.8 23.4 51.7 24.6C51.7 24.6 51.7 24.7 51.8 24.7C52.1 25.1 52.4 25.5 52.7 25.8C52.7 25.8 52.8 25.8 52.8 25.9C53 26.1 53.1 26.3 53.3 26.4C53.4 26.5 53.4 26.7 53.3 26.9C52 28.5 50.4 31.1 49.6 32.4V32.5C49.2 33.2 48.7 34.1 48.2 34.9C48 35.2 47.8 35.4 47.7 35.5V40.9C48.8 40.8 50.4 40.1 51.8 37.9C52.4 37 52.9 36 53.4 35.2C53.5 35 53.7 34.7 53.8 34.5C55.2 33 56.4 30.9 58.7 30.1Z"></path></svg></div>', 1), R0 = [
  A0
];
function j0(e, t, o, l, s, a) {
  return p(), d("div", null, R0);
}
const F0 = /* @__PURE__ */ ro(z0, [["render", j0]]), N0 = {
  key: 0,
  class: "po-fixed po-z-[999] po-top-0 po-bottom-0 po-left-0 po-right-0 po-flex po-items-center po-justify-center"
}, H0 = /* @__PURE__ */ r("div", { class: "po-absolute po-w-[6.2rem] po-h-[6.2rem] po-bg-transparent po-overflow-hidden po-rounded-xl" }, [
  /* @__PURE__ */ r("div", { class: "po-loading-rotate po-absolute -po-top-8 -po-left-8 po-w-[10rem] po-h-[10rem]" })
], -1), q0 = { class: "relative po-bg-white po-w-24 po-h-24 po-flex po-items-center po-justify-center po-rounded-xl po-bg-opacity-50 po-backdrop-blur po-backdrop-filter po-z-10 po-shadow-xl" }, Y0 = {
  key: 0,
  class: "po-absolute po-left-1 po-right-1 po-text-center po-py-1 po-text-xs po-text-mpao-blue po-bg-white po-bg-opacity-50 po-backdrop-blur po-backdrop-filter"
}, U0 = {
  name: "PoLoading"
}, L2 = /* @__PURE__ */ T({
  ...U0,
  props: {
    show: { type: Boolean, default: !1 },
    label: { default: "" }
  },
  setup(e) {
    return (t, o) => t.show ? (p(), d("div", N0, [
      H0,
      r("div", q0, [
        t.label !== "" ? (p(), d("span", Y0, k(t.label), 1)) : V("", !0),
        C(F0)
      ])
    ])) : V("", !0);
  }
}), W0 = { class: "po-py-5 po-flex po-items-start po-space-x-5" }, Z0 = ["name", "id", "checked", "aria-describedby"], G0 = { class: "po-grow -po-mt-[0.26rem]" }, K0 = ["for"], X0 = { class: "po-mt-2 po-flex po-space-x-3" }, Q0 = ["href", "onClick"], J0 = {
  name: "PoConsent"
}, M2 = /* @__PURE__ */ T({
  ...J0,
  props: {
    modelValue: { type: Boolean, default: !1 },
    label: { default: "" },
    id: { default: "consent-checkbox" },
    links: { default: null }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = (l) => {
      let s = l.target.checked;
      t("update:modelValue", s);
    };
    return (l, s) => (p(), d("div", W0, [
      r("input", Te({
        type: "checkbox",
        name: `${l.id}-field`,
        id: l.id,
        checked: l.modelValue,
        "aria-describedby": `${l.id}-description`
      }, l.$attrs, {
        onInput: o,
        class: "po-shrink-0 po-h-4 po-w-4 po-rounded border-slate-300 po-text-mpao-lightblue focus:po-ring-mpao-lightblue"
      }), null, 16, Z0),
      r("div", G0, [
        r("label", {
          class: "po-block po-select-none po-text-sm po-text-slate-600 po-cursor-pointer",
          for: l.id
        }, k(l.label), 9, K0),
        r("div", X0, [
          (p(!0), d(F, null, K(l.links, (a) => (p(), d("a", {
            href: a.url,
            onClick: le((n) => l.$emit("button-click", a.url), ["prevent"]),
            class: "po-text-sm po-text-mpao-lightblue hover:po-text-mpao-blue"
          }, k(a.label), 9, Q0))), 256))
        ])
      ])
    ]));
  }
}), ef = {
  class: "po-flex po-bg-slate-50 po-rounded-t-xl po-justify-center lg:po-justify-start po-px-4 po-pt-4 xl:po-pt-2 po-flex-wrap po-overflow-hidden",
  "aria-label": "Tabs"
}, tf = ["onClick", "aria-current"], of = { key: 0 }, lf = {
  name: "PoCardTabs"
}, T2 = /* @__PURE__ */ T({
  ...lf,
  props: {
    tabs: { default: null }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    function o(l) {
      return l.iconColor ? l.iconColor : "po-fill-current";
    }
    return (l, s) => (p(), d("nav", ef, [
      (p(!0), d(F, null, K(l.tabs, (a) => (p(), d("span", {
        role: "button",
        onClick: (n) => l.$emit("button-click", a),
        key: a.name,
        class: L([
          a.current ? "po-bg-white po-text-slate-600 po-shadow-lg" : "po-text-slate-600 hover:po-text-mpao-blue",
          "po-px-4 po-py-3 po-font-medium po-mr-4 po-mb-4 xl:po-mb-0 po-text-sm po-cursor-pointer po-rounded-xl xl:po-rounded-b-none genie-effect hover:po-text-slate-600 hover:po-bg-white hover:po-shadow-md po-flex po-items-center po-flex-shrink-0 po-space-x-2"
        ]),
        "aria-current": a.current ? "page" : void 0
      }, [
        a.icon ? (p(), N(he(a.icon), {
          key: 0,
          class: L(["po-w-5 po-h-5", [o(a)]])
        }, null, 8, ["class"])) : V("", !0),
        r("span", null, [
          J(k(a.name), 1),
          a.count ? (p(), d("span", of, " (" + k(a.count) + ")", 1)) : V("", !0)
        ])
      ], 10, tf))), 128))
    ]));
  }
}), sf = { class: "sm:po-hidden" }, af = /* @__PURE__ */ r("label", {
  for: "tabs",
  class: "po-sr-only"
}, "Select a tab", -1), nf = ["value", "selected"], rf = { class: "po-hidden sm:po-block" }, pf = {
  class: "po-flex po-space-x-4 po-pt-2",
  "aria-label": "Tabs"
}, uf = ["onClick", "aria-current"], df = {
  name: "PoTabs"
}, D2 = /* @__PURE__ */ T({
  ...df,
  props: {
    tabs: { default: null },
    currentTab: { default: "" }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    const o = e;
    function l(n) {
      return n.iconColor ? n.iconColor : "po-fill-current";
    }
    const s = E(() => {
      var n;
      return (n = o.tabs) == null ? void 0 : n.map((i) => i.name === o.currentTab ? { ...i, current: !0 } : { ...i, current: !1 });
    }), a = (n) => {
      const i = Number(n.target.value);
      if (o.tabs) {
        const u = o.tabs[i];
        t("button-click", u);
      }
    };
    return (n, i) => (p(), d(F, null, [
      r("div", sf, [
        af,
        r("select", {
          id: "tabs",
          name: "tabs",
          class: "po-block po-w-full po-rounded-md po-border-gray-300 focus:po-border-indigo-500 focus:po-ring-indigo-500",
          onChange: a
        }, [
          (p(!0), d(F, null, K(n.tabs, (u, c) => (p(), d("option", {
            key: u.name,
            value: c,
            selected: u.current
          }, k(u.name), 9, nf))), 128))
        ], 32)
      ]),
      r("div", rf, [
        r("nav", pf, [
          (p(!0), d(F, null, K(s.value, (u) => (p(), d("span", {
            onClick: (c) => n.$emit("button-click", u),
            role: "button",
            key: u.name,
            class: L([
              u.current ? " po-text-slate-600 po-shadow-md po-border po-border-sky-200" : " po-text-slate-600 po-shadow-sm hover:po-text-mpao-blue",
              "po-bg-white po-px-4 po-relative po-group po-py-3 po-font-medium po-text-sm po-cursor-pointer po-rounded-xl genie-effect hover:po-text-slate-600 hover:po-bg-white hover:po-shadow-md po-flex po-items-center po-space-x-2"
            ]),
            "aria-current": u.current ? "page" : void 0
          }, [
            u.icon ? (p(), N(he(u.icon), {
              key: 0,
              class: L(["po-w-5 po-h-5", [l(u)]])
            }, null, 8, ["class"])) : V("", !0),
            r("span", null, [
              r("span", null, k(u.name), 1),
              u.count && u.count > 0 ? (p(), d("span", {
                key: 0,
                class: L(["po-absolute po-py-1 po-px-2 po-rounded-full po-text-xs -po-top-3 -po-right-2 po-shadow-md po-flex po-items-center po-justify-center", [
                  u.current ? "po-bg-mpao-orange po-text-white" : "po-bg-slate-400 po-text-white group-hover:po-bg-mpao-orange group-hover:po-text-white"
                ]])
              }, [
                r("span", null, k(u.count), 1)
              ], 2)) : V("", !0)
            ])
          ], 10, uf))), 128))
        ])
      ])
    ], 64));
  }
}), cf = { class: "po-mt-5 po-flex po-flex-col po-items-center po-justify-center po-px-5 po-py-8" }, ff = {
  key: 1,
  class: "po-text-base po-font-medium po-text-slate-600 po-text-center"
}, vf = {
  key: 2,
  class: "po-text-sm po-text-slate-500 po-text-center po-max-w-lg po-block po-mx-auto"
}, hf = {
  name: "PoEmpty"
}, I2 = /* @__PURE__ */ T({
  ...hf,
  props: {
    label: { default: "" },
    description: { default: "" },
    icon: { default: null },
    iconColor: { default: "po-stroke-slate-300" }
  },
  setup(e) {
    return (t, o) => (p(), d("div", cf, [
      r("div", {
        class: L(["po-space-y-2 po-flex po-items-center po-flex-col po-justify-center", [{ "po-mb-5": t.$slots.action }]])
      }, [
        t.icon ? (p(), N(he(t.icon), {
          key: 0,
          class: L(["po-w-10 po-h-10", t.iconColor])
        }, null, 8, ["class"])) : V("", !0),
        t.label !== "" ? (p(), d("span", ff, k(t.label), 1)) : V("", !0),
        t.description !== "" ? (p(), d("span", vf, k(t.description), 1)) : V("", !0)
      ], 2),
      X(t.$slots, "action")
    ]));
  }
}), mf = { class: "po-flex po-text-sm po-text-gray-700 po-flex-col po-space-y-5" }, bf = {
  key: 0,
  class: "po-text-base po-font-medium po-text-slate-700"
}, gf = {
  key: 1,
  class: "po-border po-border-orange-300 po-bg-orange-50 po-rounded-lg po-p-5 po-flex po-items-center po-space-x-3"
}, yf = { class: "po-grow po-text-sm po-text-slate-600" }, wf = {
  key: 2,
  class: "po-border po-border-red-300 po-bg-red-50 po-rounded-lg po-p-5 po-flex po-space-x-4"
}, _f = { class: "po-grow" }, $f = { class: "po-text-base po-text-slate-700 po-font-medium" }, xf = { class: "po-text-sm po-text-slate-600" }, Vf = { class: "po-font-medium" }, kf = { key: 0 }, Cf = { key: 0 }, Sf = /* @__PURE__ */ r("dt", null, "Name", -1), Pf = { key: 1 }, Of = /* @__PURE__ */ r("dt", null, "Identifer", -1), Lf = { key: 2 }, Mf = /* @__PURE__ */ r("dt", null, "Date of birth", -1), Tf = { key: 3 }, Df = /* @__PURE__ */ r("dt", null, "Reported Date of death", -1), If = {
  key: 3,
  class: "po-pt-5"
}, Ef = { class: "po-flex po-items-center po-space-x-1" }, Bf = /* @__PURE__ */ r("span", null, "File a dispute.", -1), zf = {
  name: "PoDRStatus"
}, E2 = /* @__PURE__ */ T({
  ...zf,
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
    return (l, s) => (p(), d("span", mf, [
      l.record !== null ? (p(), d("h2", bf, " Death was reported by " + k(l.record.institution), 1)) : V("", !0),
      l.request !== null && l.request.type_id === 1 ? (p(), d("div", gf, [
        C(O(bo), { class: "po-shrink-0 po-w-6 po-stroke-orange-600" }),
        r("span", yf, " This is a " + k(l.request.type) + " request and is in " + k(l.request.state) + " state. ", 1)
      ])) : V("", !0),
      l.request !== null && l.request.type_id !== 1 ? (p(), d("div", wf, [
        C(O(bo), { class: "po-shrink-0 po-w-6 po-h-6 po-stroke-red-600 po-stroke-2" }),
        r("div", _f, [
          r("h3", $f, k(l.request.type), 1),
          r("p", xf, [
            J(" The following " + k(l.request.type) + " was reported: ", 1),
            r("span", Vf, [
              J(k(l.request.dispute_type), 1),
              l.request.date_of_death ? (p(), d("span", kf, " (New date: " + k(l.request.date_of_death) + ")", 1)) : V("", !0)
            ])
          ])
        ])
      ])) : V("", !0),
      C(md, null, {
        content: z(() => [
          l.member !== null ? (p(), d("div", Cf, [
            Sf,
            r("dd", null, k(l.member.name), 1)
          ])) : V("", !0),
          l.member !== null ? (p(), d("div", Pf, [
            Of,
            r("dd", null, k(l.member.identifier), 1)
          ])) : V("", !0),
          l.member !== null ? (p(), d("div", Lf, [
            Mf,
            r("dd", null, k(l.member.dob), 1)
          ])) : V("", !0),
          l.record !== null ? (p(), d("div", Tf, [
            Df,
            r("dd", null, k(l.record.date_of_death), 1)
          ])) : V("", !0)
        ]),
        _: 1
      }),
      l.request === null ? (p(), d("span", If, [
        C(ao, {
          type: "simple",
          onButtonClick: o
        }, {
          label: z(() => [
            r("span", Ef, [
              C(O(ia), { class: "po-w-4 po-h-4 po-stroke-current" }),
              Bf
            ])
          ]),
          _: 1
        })
      ])) : V("", !0)
    ]));
  }
}), Af = {
  role: "button",
  class: "po-w-6 po-h-6 po-rounded-lg po-bg-white genie-effect po-flex po-items-center po-justify-center hover:po-bg-slate-50 po-cursor-pointer"
}, Rf = {
  name: "PoTableAction"
}, B2 = /* @__PURE__ */ T({
  ...Rf,
  props: {
    btnIcon: { default: null },
    btnType: { default: "text" },
    label: { default: "" },
    textColor: { default: "po-slate-500" },
    iconColor: { default: "po-stroke-slate-500" }
  },
  setup(e) {
    const t = e, o = $(), l = $(), s = $(t.label);
    return t.btnType === "view" ? (o.value = fa, s.value = t.label === "" ? "View" : t.label) : t.btnType === "edit" ? (o.value = ha, s.value = t.label === "" ? "Edit" : t.label) : t.btnType === "delete" ? (o.value = ba, s.value = t.label === "" ? "Delete" : t.label) : t.btnType === "icon" && t.btnIcon && (o.value = t.btnIcon), t.btnType === "view" ? l.value = "po-stroke-emerald-400" : t.btnType === "edit" ? l.value = "po-stroke-blue-400" : t.btnType === "delete" ? l.value = "po-stroke-red-400" : l.value = t.iconColor, (a, n) => (p(), d("span", null, [
      a.btnType === "icon" || a.btnType === "delete" || a.btnType === "edit" || a.btnType === "view" ? (p(), N(O(io), {
        key: 0,
        text: s.value,
        placement: "bottom",
        strategy: "fixed"
      }, {
        default: z(() => [
          r("span", Af, [
            (p(), N(he(o.value), {
              class: L(["po-w-4 po-stroke-2", l.value])
            }, null, 8, ["class"]))
          ])
        ]),
        _: 1
      }, 8, ["text"])) : (p(), d("span", {
        key: 1,
        role: "button",
        class: L(["po-block po-text-sm genie-effect", a.textColor])
      }, k(a.label), 3))
    ]));
  }
}), jf = { key: 0 }, Ff = {
  name: "Rufiyaa"
}, z2 = /* @__PURE__ */ T({
  ...Ff,
  props: {
    symbolWidth: { default: "po-w-3" },
    symbolFillColor: { default: "po-fill-current" },
    amount: { default: null }
  },
  setup(e) {
    function t(o) {
      const l = typeof o == "string" ? parseFloat(o.replace(/,/g, "")) : o;
      return isNaN(l) ? "" : l.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    }
    return (o, l) => (p(), d("span", null, [
      o.amount !== null ? (p(), d("span", jf, k(t(o.amount)), 1)) : V("", !0)
    ]));
  }
}), Nf = {
  name: "PoHeading"
}, A2 = /* @__PURE__ */ T({
  ...Nf,
  props: {
    text: { default: "" },
    type: { default: "h3" }
  },
  setup(e) {
    return (t, o) => (p(), N(he(t.type), { class: "po-text-base po-text-slate-600 po-font-semibold" }, {
      default: z(() => [
        J(k(t.text), 1)
      ]),
      _: 1
    }));
  }
}), Hf = ["for"], qf = { class: "po-capitalize" }, Yf = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Uf = { class: "po-relative po-mt-1" }, Wf = { class: "po-shrink-0 po-pr-1 po-inline-flex po-flex-wrap po-w-full po-gap-1 po-max-h-44" }, Zf = { class: "po-px-2 po-py-1 po-rounded-md po-text-sm po-text-slate-600 po-flex po-space-x-2 po-items-center po-bg-gradient-to-l po-from-slate-50 po-via-cyan-50 po-to-cyan-100/60 po-border po-border-cyan-200" }, Gf = ["onClick"], Kf = ["id"], Xf = {
  key: 0,
  class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
}, Qf = ["onClick", "value"], Jf = {
  class: /* @__PURE__ */ L(["po-block po-truncate"])
}, e4 = {
  name: "PoMultiSelect"
}, R2 = /* @__PURE__ */ T({
  ...e4,
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
    function l() {
      return o.hasError ? "po-border-red-400 focus:po-border-red-600 focus:po-ring-red-600" : o.borderColor;
    }
    const s = $(""), a = $([]), n = $(!1);
    function i(g) {
      a.value.splice(g, 1), h();
    }
    function u(g) {
      let S = s.value.split(",");
      g.key === "Enter" && 0 < s.value.length && (g.preventDefault(), S.forEach((x) => {
        var B;
        let I = (B = o.items) == null ? void 0 : B.find(
          (j) => j.name.toLowerCase() === x.trim().toLowerCase()
        );
        I && a.value.push(I);
      }), s.value = ""), g.key === "Backspace" && s.value.length === 0 && n.value && a.value.pop(), h();
    }
    const c = $([]);
    function h() {
      c.value = a.value.map((g) => g.id);
    }
    const { uniqueId: w, generateUniqueId: y } = Ne(), b = $(o.id);
    Z(() => {
      o.id === "" && (y(), b.value = w.value), document.addEventListener("keydown", u);
    }), re(() => {
      document.removeEventListener("keydown", u);
    });
    const m = $(!1), f = E(
      () => {
        var g;
        return s.value === "" ? o.items : (g = o.items) == null ? void 0 : g.filter((S) => S.name.toLowerCase().includes(s.value.toLowerCase()));
      }
    );
    let v = $();
    It(v, () => {
      m.value = !1;
    });
    function _(g) {
      a.value.push(g), s.value = "", h();
    }
    return ee(c, () => {
      t("update:modelValue", c.value);
    }), (g, S) => (p(), d("div", {
      ref_key: "multiSelectComponentRef",
      ref: v,
      class: L(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": g.display === "horizontal" }]])
    }, [
      r("label", {
        for: b.value,
        class: L([
          "po-text-sm po-font-medium po-flex po-items-center po-space-x-1",
          { "po-text-red-500": g.hasError },
          { "po-text-slate-700": !g.hasError }
        ])
      }, [
        r("span", qf, k(g.label), 1),
        g.required ? (p(), d("span", Yf, "*")) : V("", !0),
        C(He, { info: g.info }, null, 8, ["info"])
      ], 10, Hf),
      r("div", Uf, [
        r("div", {
          class: L([
            "po-border po-p-1 po-min-h-[2.38rem] po-flex po-flex-wrap po-items-center focus-within:po-border-mpao-lightblue po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white sm:po-text-sm",
            l()
          ])
        }, [
          r("div", Wf, [
            a.value.length > 0 ? (p(!0), d(F, { key: 0 }, K(a.value, (x, I) => (p(), d("span", Zf, [
              r("span", null, k(x.name), 1),
              r("span", {
                onClick: () => i(I),
                role: "button",
                class: "po-cursor-pointer"
              }, [
                C(O(Wt), { class: "po-w-3 po-stroke-red-600 po-stroke-2" })
              ], 8, Gf)
            ]))), 256)) : V("", !0),
            Pe(r("input", {
              id: b.value,
              "onUpdate:modelValue": S[0] || (S[0] = (x) => s.value = x),
              onFocus: S[1] || (S[1] = () => {
                m.value = !0, n.value = !0;
              }),
              onBlur: S[2] || (S[2] = () => n.value = !1),
              class: "po-border-0 po-outline-none po-ring-0 po-grow"
            }, null, 40, Kf), [
              [Pt, s.value]
            ])
          ])
        ], 2),
        m.value ? (p(), d("ul", Xf, [
          (p(!0), d(F, null, K(f.value, (x) => (p(), d("li", {
            onClick: () => _(x),
            key: x.id,
            value: x.id,
            class: L([
              "po-relative po-select-none po-py-2 hover:po-bg-mpao-lightblue hover:po-text-white po-cursor-pointer po-pl-3 po-pr-9"
            ])
          }, [
            r("span", Jf, k(x.name), 1)
          ], 8, Qf))), 128))
        ])) : V("", !0)
      ]),
      C(Ae, { message: g.message }, null, 8, ["message"]),
      C(ze, { "error-message": g.errorMessage }, null, 8, ["error-message"])
    ], 2));
  }
}), t4 = { class: "po-flex po-pl-5" }, o4 = /* @__PURE__ */ r("div", { class: "po-shrink-0 po-flex po-flex-col" }, [
  /* @__PURE__ */ r("div", { class: "po-w-[2px] po-shrink-0 po-h-10" }),
  /* @__PURE__ */ r("div", { class: "po-bg-gradient-to-t po-from-orange-400 po-via-red-300 po-to-blue-500 po-w-[2px] po-grow" }),
  /* @__PURE__ */ r("div", { class: "po-w-[2px] po-shrink-0 po-h-12" })
], -1), l4 = { class: "po-grow po-pl-5 po-pt-5 po-space-y-3" }, s4 = ["onClick"], a4 = { class: "-po-mt-1 po-flex po-space-x-3 po-items-center" }, n4 = { class: "po-block po-text-xs po-text-slate-400" }, r4 = { class: "po-text-xs po-text-slate-500 po-pt-1" }, i4 = {
  name: "PoTimeline"
}, j2 = /* @__PURE__ */ T({
  ...i4,
  props: {
    timeline: { default: null },
    clickable: { type: Boolean, default: !1 }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, l) => (p(), d("div", t4, [
      o4,
      r("div", l4, [
        (p(!0), d(F, null, K(o.timeline, (s) => (p(), d("div", {
          class: L(["po-px-2 po-pt-2 po-pb-6 po-relative po-group", [{ "po-cursor-pointer": o.clickable }]]),
          onClick: (a) => o.$emit("button-click", s)
        }, [
          r("span", {
            class: L(["po-rounded-full po-absolute po-flex po-items-center po-justify-center", [
              { "po-w-4 po-h-4 -po-left-[1.8rem] po-bg-blue-400": s.current },
              {
                "po-w-3 po-h-3 -po-left-[1.68rem] po-bg-green-400": !s.current
              }
            ]])
          }, [
            r("span", {
              class: L(["po-rounded-full po-bg-white", [
                { "po-w-2 po-h-2": s.current },
                { "po-w-1 po-h-1": !s.current }
              ]])
            }, null, 2)
          ], 2),
          r("div", null, [
            r("div", a4, [
              r("h4", {
                class: L(["po-text-sm po-text-slate-600 po-font-medium", [{ "group-hover:po-text-mpao-lightblue": o.clickable }]])
              }, k(s.label), 3),
              r("span", n4, k(O(la)(s.date)), 1)
            ]),
            r("p", r4, k(s.description), 1)
          ])
        ], 10, s4))), 256))
      ])
    ]));
  }
}), p4 = {
  name: "PoTableCheckbox"
}, F2 = /* @__PURE__ */ T({
  ...p4,
  props: {
    itemId: { default: null },
    isChecked: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["checkboxClicked"],
  setup(e, { emit: t }) {
    return (o, l) => (p(), d(F, null, [
      o.isChecked ? (p(), N(O(Pl), {
        key: 0,
        onClick: l[0] || (l[0] = le(() => o.$emit("checkboxClicked", o.itemId), ["prevent"])),
        class: "po-w-6 po-fill-mpao-lightblue po-cursor-pointer"
      })) : V("", !0),
      o.disabled ? (p(), N(O(Pl), {
        key: 1,
        class: "po-w-6 po-fill-slate-400"
      })) : V("", !0),
      !o.isChecked && !o.disabled ? (p(), d("span", {
        key: 2,
        onClick: l[1] || (l[1] = le(() => o.$emit("checkboxClicked", o.itemId), ["prevent"])),
        class: "po-h-5 po-w-5 po-rounded-full po-border-2 po-ml-[2px] po-block po-border-slate-300 po-cursor-pointer"
      })) : V("", !0)
    ], 64));
  }
}), u4 = { class: "po-p-4" }, d4 = { class: "po-flex po-items-start po-space-x-3" }, c4 = /* @__PURE__ */ r("span", { class: "po-sr-only" }, "Action icon", -1), f4 = { class: "po-w-0 po-flex-1 po-text-sm po-font-medium po-text-gray-400" }, v4 = { class: "po-ml-4 po-flex po-flex-shrink-0" }, h4 = /* @__PURE__ */ r("span", { class: "po-sr-only" }, "Close", -1), m4 = {
  name: "PoToast"
}, N2 = /* @__PURE__ */ T({
  ...m4,
  props: {
    show: { type: Boolean, default: !1 },
    actionType: { default: "" },
    message: { default: "" },
    hideIn: { default: 2e3 },
    size: { default: "sm" }
  },
  emits: ["toast-closed"],
  setup(e, { emit: t }) {
    const o = e, { show: l } = Be(o), s = $(!1);
    ee(l, () => {
      s.value = l.value;
    });
    function a() {
      s.value = !1, t("toast-closed", !0);
    }
    setTimeout(() => {
      a();
    }, o.hideIn);
    const n = E(() => o.message === "" && o.actionType !== "" ? o.actionType === "success" ? "Saved Successfully!" : o.actionType === "danger" ? "Item deleted!" : o.actionType === "warn" ? "Attention needed!" : "Wrong action" : o.message);
    return (i, u) => (p(), N(Lt, { to: "#po-notifications-alert" }, [
      C(Ze, {
        "enter-active-class": "po-transform po-ease-out po-duration-300 po-transition",
        "enter-from-class": "po-translate-y-2 po-opacity-0 sm:po-translate-y-0 sm:po-translate-x-2",
        "enter-to-class": "po-translate-y-0 po-opacity-100 sm:po-translate-x-0",
        "leave-active-class": "po-transition po-ease-in po-duration-100",
        "leave-from-class": "po-opacity-100",
        "leave-to-class": "po-opacity-0"
      }, {
        default: z(() => [
          s.value ? (p(), d("div", {
            key: 0,
            class: L(["po-pointer-events-auto po-w-full po-overflow-hidden po-rounded-lg po-bg-gray-900 po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5", [
              { "po-max-w-[260px]": i.size === "sm" },
              { "po-max-w-[360px]": i.size === "lg" },
              { "po-max-w-[560px]": i.size === "xl" }
            ]])
          }, [
            r("div", u4, [
              r("div", d4, [
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
                  i.actionType === "success" ? (p(), N(O(Fi), {
                    key: 0,
                    class: "po-w-4 po-h-4"
                  })) : V("", !0),
                  i.actionType === "danger" ? (p(), N(O(Ui), {
                    key: 1,
                    class: "po-w-4 po-h-4"
                  })) : V("", !0),
                  i.actionType === "warn" ? (p(), N(O(Hi), {
                    key: 2,
                    class: "po-w-4 po-h-4"
                  })) : V("", !0),
                  c4
                ], 2)) : V("", !0),
                r("p", f4, k(n.value), 1),
                r("div", v4, [
                  r("button", {
                    type: "button",
                    onClick: a,
                    class: "po-inline-flex po-rounded-md po-bg-gray-900 po-text-gray-400 hover:po-text-gray-300 hover:po-bg-gray-700 po-transition-colors po-duration-150 po-ease-out focus:po-outline-none focus:po-ring-2 focus:po-ring-indigo-500 focus:po-ring-offset-2"
                  }, [
                    h4,
                    C(O(Ls), {
                      class: "po-h-5 po-w-5",
                      "aria-hidden": "true"
                    })
                  ])
                ])
              ])
            ])
          ], 2)) : V("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), b4 = ["for"], g4 = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, y4 = { class: "po-relative po-mt-1" }, w4 = {
  key: 1,
  class: "po-absolute po-top-0 po-left-0 po-right-0 po-bottom-0 po-overflow-hidden po-bg-white po-rounded-md po-border po-border-slate-300 po-flex po-items-center"
}, _4 = { class: "po-grow" }, $4 = ["id"], x4 = ["onMousedown"], V4 = ["onMousedown"], k4 = {
  key: 0,
  class: "po-text-sm po-text-slate-600 po-p-4 po-block"
}, C4 = {
  name: "PoSelectApi"
}, H2 = /* @__PURE__ */ T({
  ...C4,
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
    const o = e, l = $(), s = $(!1), a = $(!1), n = $([]);
    ee(o, (S, x) => {
      n.value = o.options;
    });
    const i = $(null);
    It(i, () => {
      s.value = !!a.value;
    });
    function u() {
      a.value = !1, setTimeout(() => {
        s.value = !1;
      }, 100);
    }
    const { uniqueId: c, generateUniqueId: h } = Ne(), w = $(o.id);
    Z(() => {
      o.id === "" && (h(), w.value = c.value);
    });
    const y = $();
    function b() {
      t("search", y.value);
    }
    const m = $(null);
    function f(S) {
      m.value = S, t("selected", S), s.value = !!a.value;
    }
    function v() {
      t("loadmore", !0);
    }
    const _ = $();
    let g;
    return Z(() => {
      g = Dt(l.value, _.value, {
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
      ref: i,
      class: L(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": S.display === "horizontal" }]])
    }, [
      r("label", {
        for: w.value,
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700"
      }, [
        r("span", null, k(S.label), 1),
        S.required ? (p(), d("span", g4, "*")) : V("", !0),
        C(He, { info: S.info }, null, 8, ["info"])
      ], 8, b4),
      r("div", y4, [
        r("div", null, [
          S.loading ? (p(), N(so, {
            key: 0,
            class: "po-right-0 po-top-4",
            absolute: !0
          })) : V("", !0),
          m.value !== null && S.showSelected ? (p(), d("div", w4, [
            r("div", _4, [
              X(S.$slots, "selectedOption", ut(dt(m.value)), () => [
                J(k(m.value), 1)
              ])
            ]),
            r("span", {
              class: "po-shrink-0 po-p-1 po-cursor-pointer",
              onMousedown: x[0] || (x[0] = le((I) => {
                m.value = null, y.value = "";
              }, ["stop"]))
            }, [
              C(O(Wt), { class: "po-w-4 po-stroke-2 po-stroke-slate-400" })
            ], 32)
          ])) : V("", !0),
          Pe(r("input", {
            type: "text",
            name: "",
            id: w.value,
            ref_key: "selectBox",
            ref: l,
            "onUpdate:modelValue": x[1] || (x[1] = (I) => y.value = I),
            onInput: b,
            onFocus: x[2] || (x[2] = (I) => {
              a.value = !0, s.value = !0;
            }),
            onBlur: u,
            class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm"
          }, null, 40, $4), [
            [Pt, y.value]
          ])
        ]),
        Pe(r("div", {
          ref_key: "popper",
          ref: _,
          class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
        }, [
          n.value && n.value.length > 0 ? (p(), d(F, { key: 0 }, [
            (p(!0), d(F, null, K(n.value, (I) => (p(), d("div", {
              onMousedown: le((B) => f(I), ["stop"])
            }, [
              X(S.$slots, "option", ut(dt(I)), () => [
                J(k(I), 1)
              ])
            ], 40, x4))), 256)),
            S.showMoreBtn ? (p(), d("span", {
              key: 0,
              role: "button",
              onMousedown: le(v, ["stop"]),
              class: "po-text-sm po-text-semibold po-text-mpao-lightblue po-block po-text-center po-py-2 hover:po-bg-slate-50 po-transition-colors po-duration-150 po-ease-out"
            }, "More", 40, V4)) : V("", !0)
          ], 64)) : (p(), d(F, { key: 1 }, [
            S.emptyMessage ? (p(), d("span", k4, k(S.emptyMessage), 1)) : V("", !0)
          ], 64))
        ], 512), [
          [
            Ot,
            s.value && n.value.length > 0 || s.value && S.emptyMessage
          ]
        ]),
        C(Ae, { message: S.message }, null, 8, ["message"]),
        C(ze, { "error-message": S.errorMessage }, null, 8, ["error-message"])
      ])
    ], 2));
  }
}), S4 = { class: "po-bg-blue-300/20 po-border po-border-blue-200 po-p-3 po-mb-5 po-rounded-md po-text-sm sm:po-space-x-2 po-flex po-items-center po-flex-wrap" }, P4 = { class: "po-text-blue-500" }, O4 = {
  name: "PoMessage"
}, q2 = /* @__PURE__ */ T({
  ...O4,
  props: {
    msgType: { default: "info" },
    message: { default: "" },
    btnName: { default: "" },
    btnAction: { default: "" }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, l) => (p(), d("div", S4, [
      r("span", P4, k(o.message), 1),
      o.btnName !== "" ? (p(), d("span", {
        key: 0,
        role: "button",
        onClick: l[0] || (l[0] = (s) => o.$emit("button-click", o.btnAction)),
        class: "po-text-blue-600 po-underline po-font-medium po-text-xs"
      }, k(o.btnName), 1)) : V("", !0)
    ]));
  }
}), L4 = {
  key: 0,
  class: "po-flex md:po-justify-end"
}, M4 = ["onClick"], T4 = { class: "po-text-xl po-font-medium po-text-slate-600 po-flex po-items-center po-space-x-1" }, D4 = {
  name: "PoPageStats"
}, Y2 = /* @__PURE__ */ T({
  ...D4,
  props: {
    stats: { default: null },
    clickable: { type: [Boolean, null], default: !0 },
    padding: { default: "po-py-5 po-px-2" }
  },
  emits: ["stat-click"],
  setup(e, { emit: t }) {
    function o(l) {
      return l.iconColor ? l.iconColor : "po-slate-600";
    }
    return (l, s) => l.stats !== null ? (p(), d("div", L4, [
      r("div", {
        class: L(["po-bg-slate-50 po-shadow-sm po-rounded-xl po-divide-x po-divide-slate-200 po-flex", l.padding])
      }, [
        (p(!0), d(F, null, K(l.stats, (a) => (p(), d("div", {
          class: L(["po-px-4 po-group", { "po-cursor-pointer": l.clickable }]),
          onClick: (n) => l.$emit("stat-click", a)
        }, [
          r("span", T4, [
            a.icon ? (p(), d("span", {
              key: 0,
              class: L(["po-w-5 po-h-5", o(a)])
            }, [
              (p(), N(he(a.icon)))
            ], 2)) : V("", !0),
            r("span", {
              class: L(["po-text-xl po-font-medium po-text-slate-600", { "group-hover:po-text-mpao-lightblue": l.clickable }])
            }, k(a.value), 3)
          ]),
          r("span", {
            class: L(["po-text-sm po-text-slate-500 po-block", { "group-hover:po-text-mpao-lightblue": l.clickable }])
          }, k(a.label), 3)
        ], 10, M4))), 256))
      ], 2)
    ])) : V("", !0);
  }
}), I4 = {
  name: "PoTooltip"
}, io = /* @__PURE__ */ T({
  ...I4,
  props: {
    text: { default: "" },
    placement: { default: "bottom" },
    strategy: { default: "absolute" }
  },
  setup(e) {
    const t = e, o = $(null), l = $(null), s = $(!1);
    let a = null;
    Z(() => {
      o.value && l.value && (a = Dt(o.value, l.value, {
        placement: t.placement,
        strategy: t.strategy
      }));
    }), re(() => {
      a && (a.destroy(), a = null);
    });
    function n() {
      s.value = !0;
    }
    function i() {
      s.value = !1;
    }
    return xe.on("sidebarOpen", (u) => {
      setTimeout(() => {
        a && a.update();
      }, 320);
    }), (u, c) => (p(), d("span", {
      ref_key: "trigger",
      ref: o,
      onMouseover: n,
      onMouseleave: i
    }, [
      X(u.$slots, "default", {}, () => [
        J("Tooltip")
      ]),
      (p(), N(Lt, { to: "body" }, [
        Pe(r("div", {
          ref_key: "popper",
          ref: l,
          class: L(["po-bg-slate-700 po-text-xs po-z-50 po-transition-opacity po-duration-100 po-ease-linear po-text-slate-50 po-rounded-md po-px-2 po-py-1 po-shadow-md", [{ "po-opacity-0": !s.value }, { "po-opacity-100": s.value }]])
        }, k(u.text), 3), [
          [Ot, u.text]
        ])
      ]))
    ], 544));
  }
}), E4 = ["for"], B4 = { class: "po-capitalize" }, z4 = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, A4 = ["name", "id", "value", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], R4 = {
  key: 0,
  class: "po-text-sm po-grow po-text-slate-500 lg:po-min-h-[40px] po-flex po-items-center"
}, j4 = { key: 0 }, F4 = { key: 1 }, N4 = ["for"], H4 = {
  key: 2,
  class: "po-text-sm po-grow po-text-slate-500 lg:po-min-h-[40px] po-flex po-items-center"
}, q4 = /* @__PURE__ */ r("span", null, "Uploading...", -1), Y4 = [
  q4
], U4 = {
  key: 3,
  class: "po-shrink-0 po-relative po-top-[3px]"
}, W4 = {
  name: "PoUpload"
}, U2 = /* @__PURE__ */ T({
  ...W4,
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
    const o = e, l = $("initial"), { uniqueId: s, generateUniqueId: a } = Ne(), n = $(o.id);
    Z(() => {
      o.id === "" && (a(), n.value = s.value);
    });
    const i = $(!1), u = (f) => {
      f.preventDefault(), i.value = !0;
    }, c = () => {
      i.value = !1;
    }, h = (f) => {
      var _;
      f.preventDefault(), i.value = !1;
      const v = (_ = f.dataTransfer) == null ? void 0 : _.files;
      v && v.length > 0 && y(v);
    }, w = (f) => {
      const _ = f.target.files;
      _ && _.length > 0 && y(_);
    };
    function y(f) {
      l.value = "uploading", fetch(`${m()}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${o == null ? void 0 : o.token}`
        },
        body: b(f)
      }).then((v) => {
        l.value = "initial", t("uploaded", v);
      });
    }
    function b(f) {
      let v = new FormData();
      for (const _ of f)
        v.append("files", _);
      return v.append("payload", JSON.stringify(o.payload)), v;
    }
    function m() {
      return o == null || o.url, o == null ? void 0 : o.url;
    }
    return (f, v) => (p(), d("div", {
      class: L(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": f.display === "horizontal" }]])
    }, [
      r("label", {
        disabled: "",
        for: `${n.value}-wheel`,
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700 po-mb-1"
      }, [
        r("span", B4, k(f.label), 1),
        f.required ? (p(), d("span", z4, "*")) : V("", !0),
        C(He, { info: f.info }, null, 8, ["info"])
      ], 8, E4),
      r("input", Te({
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
        onChange: w
      }), null, 16, A4),
      r("div", {
        class: L(["po-border po-border-dashed po-rounded-md po-p-3 po-flex po-items-center po-space-x-4 po-transition-colors po-duration-150 po-ease-out", [
          { "po-border-slate-400/60": !i.value },
          { "po-border-mpao-lightblue": i.value }
        ]]),
        onDragover: u,
        onDragleave: c,
        onDrop: h
      }, [
        r("span", {
          class: L(["po-w-8 po-h-8 po-shrink-0 po-flex po-items-center po-justify-center po-rounded-md", [
            { "po-bg-slate-100 po-text-slate-500": !i.value },
            { "po-bg-blue-50 po-text-blue-500": i.value }
          ]])
        }, [
          C(O(ca), { class: "po-w-5 po-stroke-current" })
        ], 2),
        l.value === "initial" ? (p(), d("span", R4, [
          i.value ? (p(), d("span", j4, k(f.dragOverText), 1)) : (p(), d("span", F4, k(f.dragAreaText), 1))
        ])) : V("", !0),
        l.value === "initial" ? (p(), d("label", {
          key: 1,
          for: n.value,
          class: "po-cursor-pointer po-transition-colors po-duration-150 po-ease-out po-shrink-0 po-text-sm po-text-mpao-lightblue po-font-meidum hover:po-text-purple-600 po-px-3 po-py-1"
        }, "Upload file", 8, N4)) : V("", !0),
        l.value === "uploading" ? (p(), d("span", H4, Y4)) : V("", !0),
        l.value === "uploading" ? (p(), d("div", U4, [
          C(so)
        ])) : V("", !0)
      ], 34),
      C(Ae, { message: f.message }, null, 8, ["message"]),
      C(ze, { "error-message": f.errorMessage }, null, 8, ["error-message"])
    ], 2));
  }
}), Z4 = {
  name: "PoWrap"
}, G4 = /* @__PURE__ */ r("div", {
  "aria-live": "assertive",
  class: "po-pointer-events-none po-fixed po-inset-0 po-flex po-items-start po-px-4 po-py-6 sm:po-p-6 po-z-[60]"
}, [
  /* @__PURE__ */ r("div", {
    class: "po-flex po-w-full po-flex-col po-items-end po-space-y-4 sm:po-items-end po-pt-[55px]",
    id: "po-notifications-alert"
  })
], -1), K4 = { class: "po-h-full po-flex" };
function X4(e, t, o, l, s, a) {
  return p(), d(F, null, [
    G4,
    r("div", K4, [
      X(e.$slots, "default")
    ])
  ], 64);
}
const W2 = /* @__PURE__ */ ro(Z4, [["render", X4]]), Q4 = { class: "po-grid po-grid-cols-1 md:po-grid-cols-3 lg:po-grid-cols-4 po-gap-3" }, J4 = { class: "po-flex po-items-end" }, e2 = {
  name: "PoFilter"
}, Z2 = /* @__PURE__ */ T({
  ...e2,
  props: {
    filters: { default: null },
    btnLabel: { default: "Filter" }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    const l = $(e.filters);
    function s() {
      const a = new URLSearchParams();
      for (const u in l.value)
        Object.prototype.hasOwnProperty.call(l.value, u) && a.append(u, String(l.value[u]));
      const i = `${window.location.href}?${a.toString()}`;
      history.pushState({}, "", i), t("button-click", l.value);
    }
    return (a, n) => (p(), d("div", Q4, [
      X(a.$slots, "default"),
      r("div", J4, [
        C(O(ao), {
          label: a.btnLabel,
          onButtonClick: s
        }, null, 8, ["label"])
      ])
    ]));
  }
});
export {
  n2 as PoActionBar,
  k2 as PoAlert,
  Da as PoAppIcon,
  Zr as PoAppTray,
  ao as PoButton,
  r2 as PoCard,
  i2 as PoCardSearch,
  T2 as PoCardTabs,
  _2 as PoChatLogItem,
  m2 as PoCheckbox,
  V2 as PoCommandPalette,
  M2 as PoConsent,
  O2 as PoContentArea,
  E2 as PoDRStatus,
  md as PoDescriptionList,
  P2 as PoDownloadFileList,
  I2 as PoEmpty,
  Z2 as PoFilter,
  b2 as PoFooter,
  g2 as PoFormStatusMessage,
  A2 as PoHeading,
  d2 as PoInputField,
  c2 as PoInputFile,
  L2 as PoLoading,
  C2 as PoLogs,
  S2 as PoMain,
  q2 as PoMessage,
  At as PoModal,
  f2 as PoMonthYearPicker,
  R2 as PoMultiSelect,
  $2 as PoNotification,
  ni as PoNotificationHub,
  Y2 as PoPageStats,
  p2 as PoPageTitle,
  Mu as PoPagination,
  Ti as PoProfileSwitcher,
  y2 as PoRadioInput,
  Nn as PoSearchBar,
  h2 as PoSectionMenu,
  H2 as PoSelectApi,
  Ip as PoSelectField,
  a2 as PoSidebarDrawer,
  x2 as PoSlideover,
  w2 as PoStatsBlock,
  u2 as PoTable,
  B2 as PoTableAction,
  F2 as PoTableCheckbox,
  D2 as PoTabs,
  Gp as PoTextarea,
  j2 as PoTimeline,
  N2 as PoToast,
  v2 as PoToggle,
  io as PoTooltip,
  l2 as PoTopBar,
  U2 as PoUpload,
  W2 as PoWrap,
  z2 as Rufiyaa
};
