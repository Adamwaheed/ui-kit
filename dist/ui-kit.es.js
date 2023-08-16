import { openBlock as p, createElementBlock as d, createElementVNode as r, defineComponent as D, ref as x, toRefs as Ie, watch as ee, onMounted as Z, normalizeClass as L, createVNode as S, unref as O, withCtx as z, renderSlot as K, createBlock as N, resolveDynamicComponent as he, createCommentVNode as C, computed as B, toDisplayString as k, onBeforeUnmount as Lo, onUnmounted as re, withDirectives as Pe, isRef as js, withKeys as Rs, vModelText as Ot, vShow as Lt, cloneVNode as Fs, h as oe, Fragment as F, inject as de, provide as fe, watchEffect as ve, Teleport as Mt, reactive as Ns, shallowRef as Dl, nextTick as Mo, toRaw as Ue, renderList as X, Transition as Ze, withModifiers as le, onBeforeMount as Hs, onBeforeUpdate as qs, onUpdated as To, mergeProps as Te, createTextVNode as J, pushScopeId as Ys, popScopeId as Us, withScopeId as Ws, markRaw as Zs, shallowReactive as Gs, resolveComponent as El, resolveDirective as Ks, normalizeStyle as Do, toHandlers as Xs, normalizeProps as ut, guardReactiveProps as dt, createStaticVNode as Qs } from "vue";
import { f as il, c as Js, d as ne, u as en, t as tn, a as on } from "./FormatDate-7fbb31e2.mjs";
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
      d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
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
      d: "M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
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
      d: "M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
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
      d: "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
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
      d: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
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
      d: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
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
      d: "M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
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
function Il(e, t) {
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
      d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
    })
  ]);
}
function go(e, t) {
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
      d: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
    }),
    r("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
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
      d: "M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
    })
  ]);
}
function Eo(e, t) {
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
      d: "M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
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
      d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
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
      d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
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
function Zt(e, t) {
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
function bn(e) {
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
const xe = bn(), yn = { class: "po-bg-mpao-blue po-fixed po-top-0 po-left-0 po-right-0 po-w-full po-z-50 po-flex" }, wn = { class: "po-shrink-0 po-px-3 po-pt-3" }, _n = { class: "po-flex po-flex-col po-justify-center po-items-center po-w-5 po-h-5 po-space-y-[3px]" }, $n = { class: "po-mx-auto po-max-w-full po-pr-4 po-grow sm:po-pr-4" }, xn = { class: "po-flex po-relative po-h-16 po-items-center po-justify-between po-space-x-12" }, Vn = { class: "po-flex po-items-center po-space-x-3" }, kn = {
  key: 0,
  class: "po-block po-w-6 po-text-slate-100 md:po-hidden",
  role: "button"
}, Cn = {
  name: "PoTopBar"
}, n2 = /* @__PURE__ */ D({
  ...Cn,
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
    const o = e, l = x(""), s = x(""), n = x(!0), { avatar: a, logo: i } = Ie(o);
    ee(a, () => {
      l.value = a.value;
    }), ee(i, () => {
      s.value = i.value;
    }), Z(() => {
      const y = localStorage.getItem("isSidebarOpen");
      y !== null && (n.value = JSON.parse(y), xe.emit("sidebarOpen", n.value));
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
      n.value = !n.value, xe.emit("sidebarOpen", n.value), localStorage.setItem("isSidebarOpen", JSON.stringify(n.value));
    }
    return xe.on("sidebarOpen", (y) => {
      typeof y == "boolean" && (n.value = y);
    }), (y, g) => (p(), d("nav", yn, [
      r("div", wn, [
        r("button", {
          for: "sidebar-drawer-toggle",
          role: "button",
          class: "genie-effect po-flex po-items-center po-justify-center po-bg-white/10 po-rounded-full po-w-10 po-h-10 po-select-none po-text-slate-100",
          onClick: w
        }, [
          r("span", _n, [
            r("span", {
              class: L(["po-block po-h-[2px] po-rounded-full po-bg-slate-100 po-transition-all po-duration-150 po-ease-in-out", [
                { "po-w-5": !n.value },
                { "po-w-[3px]": n.value }
              ]])
            }, null, 2),
            r("span", {
              class: L(["po-block po-h-[2px] po-rounded-full po-bg-slate-100 po-transition-all po-duration-150 po-ease-in-out", [
                { "po-w-5": !n.value },
                { "po-w-[3px]": n.value }
              ]])
            }, null, 2),
            r("span", {
              class: L(["po-block po-h-[2px] po-rounded-full po-bg-slate-100 po-transition-all po-duration-150 po-ease-in-out", [
                { "po-w-5": !n.value },
                { "po-w-[3px]": n.value }
              ]])
            }, null, 2)
          ])
        ])
      ]),
      r("div", $n, [
        r("div", xn, [
          S(O(Dn), { "app-name": y.appName }, {
            icon: z(() => [
              K(y.$slots, "appIcon", {}, () => [
                y.appIcon ? (p(), N(he(y.appIcon), { key: 0 })) : C("", !0)
              ])
            ]),
            _: 3
          }, 8, ["app-name"]),
          y.hasSearch ? (p(), N(O(Fa), {
            key: 0,
            onQuery: c,
            onOnClear: h,
            "current-query": y.currentQuery,
            "show-tray": y.showSearchTray
          }, {
            default: z(() => [
              K(y.$slots, "searchTray")
            ]),
            _: 3
          }, 8, ["current-query", "show-tray"])) : C("", !0),
          r("div", Vn, [
            y.hasSearch ? (p(), d("span", kn, [
              S(O(Eo), { class: "po-stroke-current" })
            ])) : C("", !0),
            S(O(ni), {
              notifications: y.notifications,
              "has-new-notifications": y.hasNewNotifications
            }, null, 8, ["notifications", "has-new-notifications"]),
            S(O(Wr), {
              "app-list": y.appList,
              "open-in-new-tab": !0
            }, null, 8, ["app-list"]),
            S(O(Mi), {
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
}), Sn = { class: "po-flex po-items-center po-justify-center po-space-x-3" }, Pn = { class: "po-w-8 po-text-slate-100 app-icon" }, On = { class: "po-font-light po-text-lg po-text-slate-100" }, Ln = { class: "po-hidden md:po-block" }, Mn = { class: "po-block md:po-hidden" }, Tn = {
  name: "PoAppIcon"
}, Dn = /* @__PURE__ */ D({
  ...Tn,
  props: {
    appName: { default: "App Name" }
  },
  setup(e) {
    const t = e, o = B(() => {
      if (!t.appName)
        return "";
      const l = t.appName.match(/\b[A-Z]/g);
      if (!l)
        return "";
      let s = l.join("");
      return s.length === 1 ? t.appName.substring(0, 3) : s;
    });
    return (l, s) => (p(), d("div", Sn, [
      r("div", Pn, [
        K(l.$slots, "icon")
      ]),
      r("span", On, [
        r("span", Ln, k(l.appName), 1),
        r("span", Mn, k(o.value), 1)
      ])
    ]));
  }
});
var me = "top", ke = "bottom", Ce = "right", ge = "left", Bo = "auto", Tt = [me, ke, Ce, ge], ct = "start", St = "end", En = "clippingParents", Al = "viewport", _t = "popper", Bn = "reference", ul = /* @__PURE__ */ Tt.reduce(function(e, t) {
  return e.concat([t + "-" + ct, t + "-" + St]);
}, []), jl = /* @__PURE__ */ [].concat(Tt, [Bo]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ct, t + "-" + St]);
}, []), In = "beforeRead", zn = "read", An = "afterRead", jn = "beforeMain", Rn = "main", Fn = "afterMain", Nn = "beforeWrite", Hn = "write", qn = "afterWrite", Yn = [In, zn, An, jn, Rn, Fn, Nn, Hn, qn];
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
function rt(e) {
  var t = _e(e).Element;
  return e instanceof t || e instanceof Element;
}
function Ve(e) {
  var t = _e(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Io(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = _e(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Un(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(o) {
    var l = t.styles[o] || {}, s = t.attributes[o] || {}, n = t.elements[o];
    !Ve(n) || !Ee(n) || (Object.assign(n.style, l), Object.keys(s).forEach(function(a) {
      var i = s[a];
      i === !1 ? n.removeAttribute(a) : n.setAttribute(a, i === !0 ? "" : i);
    }));
  });
}
function Wn(e) {
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
      var s = t.elements[l], n = t.attributes[l] || {}, a = Object.keys(t.styles.hasOwnProperty(l) ? t.styles[l] : o[l]), i = a.reduce(function(u, c) {
        return u[c] = "", u;
      }, {});
      !Ve(s) || !Ee(s) || (Object.assign(s.style, i), Object.keys(n).forEach(function(u) {
        s.removeAttribute(u);
      }));
    });
  };
}
const Zn = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Un,
  effect: Wn,
  requires: ["computeStyles"]
};
function De(e) {
  return e.split("-")[0];
}
var nt = Math.max, Wt = Math.min, ft = Math.round;
function bo() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Rl() {
  return !/^((?!chrome|android).)*safari/i.test(bo());
}
function vt(e, t, o) {
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  var l = e.getBoundingClientRect(), s = 1, n = 1;
  t && Ve(e) && (s = e.offsetWidth > 0 && ft(l.width) / e.offsetWidth || 1, n = e.offsetHeight > 0 && ft(l.height) / e.offsetHeight || 1);
  var a = rt(e) ? _e(e) : window, i = a.visualViewport, u = !Rl() && o, c = (l.left + (u && i ? i.offsetLeft : 0)) / s, h = (l.top + (u && i ? i.offsetTop : 0)) / n, w = l.width / s, y = l.height / n;
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
function Fl(e, t) {
  var o = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (o && Io(o)) {
    var l = t;
    do {
      if (l && e.isSameNode(l))
        return !0;
      l = l.parentNode || l.host;
    } while (l);
  }
  return !1;
}
function Re(e) {
  return _e(e).getComputedStyle(e);
}
function Gn(e) {
  return ["table", "td", "th"].indexOf(Ee(e)) >= 0;
}
function Xe(e) {
  return ((rt(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Gt(e) {
  return Ee(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Io(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Xe(e)
  );
}
function dl(e) {
  return !Ve(e) || // https://github.com/popperjs/popper-core/issues/837
  Re(e).position === "fixed" ? null : e.offsetParent;
}
function Kn(e) {
  var t = /firefox/i.test(bo()), o = /Trident/i.test(bo());
  if (o && Ve(e)) {
    var l = Re(e);
    if (l.position === "fixed")
      return null;
  }
  var s = Gt(e);
  for (Io(s) && (s = s.host); Ve(s) && ["html", "body"].indexOf(Ee(s)) < 0; ) {
    var n = Re(s);
    if (n.transform !== "none" || n.perspective !== "none" || n.contain === "paint" || ["transform", "perspective"].indexOf(n.willChange) !== -1 || t && n.willChange === "filter" || t && n.filter && n.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function Dt(e) {
  for (var t = _e(e), o = dl(e); o && Gn(o) && Re(o).position === "static"; )
    o = dl(o);
  return o && (Ee(o) === "html" || Ee(o) === "body" && Re(o).position === "static") ? t : o || Kn(e) || t;
}
function Ao(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Vt(e, t, o) {
  return nt(e, Wt(t, o));
}
function Xn(e, t, o) {
  var l = Vt(e, t, o);
  return l > o ? o : l;
}
function Nl() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Hl(e) {
  return Object.assign({}, Nl(), e);
}
function ql(e, t) {
  return t.reduce(function(o, l) {
    return o[l] = e, o;
  }, {});
}
var Qn = function(t, o) {
  return t = typeof t == "function" ? t(Object.assign({}, o.rects, {
    placement: o.placement
  })) : t, Hl(typeof t != "number" ? t : ql(t, Tt));
};
function Jn(e) {
  var t, o = e.state, l = e.name, s = e.options, n = o.elements.arrow, a = o.modifiersData.popperOffsets, i = De(o.placement), u = Ao(i), c = [ge, Ce].indexOf(i) >= 0, h = c ? "height" : "width";
  if (!(!n || !a)) {
    var w = Qn(s.padding, o), y = zo(n), g = u === "y" ? me : ge, m = u === "y" ? ke : Ce, f = o.rects.reference[h] + o.rects.reference[u] - a[u] - o.rects.popper[h], v = a[u] - o.rects.reference[u], _ = Dt(n), b = _ ? u === "y" ? _.clientHeight || 0 : _.clientWidth || 0 : 0, V = f / 2 - v / 2, $ = w[g], E = b - y[h] - w[m], I = b / 2 - y[h] / 2 + V, R = Vt($, I, E), T = u;
    o.modifiersData[l] = (t = {}, t[T] = R, t.centerOffset = R - I, t);
  }
}
function ea(e) {
  var t = e.state, o = e.options, l = o.element, s = l === void 0 ? "[data-popper-arrow]" : l;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || Fl(t.elements.popper, s) && (t.elements.arrow = s));
}
const ta = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Jn,
  effect: ea,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ht(e) {
  return e.split("-")[1];
}
var oa = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function la(e, t) {
  var o = e.x, l = e.y, s = t.devicePixelRatio || 1;
  return {
    x: ft(o * s) / s || 0,
    y: ft(l * s) / s || 0
  };
}
function cl(e) {
  var t, o = e.popper, l = e.popperRect, s = e.placement, n = e.variation, a = e.offsets, i = e.position, u = e.gpuAcceleration, c = e.adaptive, h = e.roundOffsets, w = e.isFixed, y = a.x, g = y === void 0 ? 0 : y, m = a.y, f = m === void 0 ? 0 : m, v = typeof h == "function" ? h({
    x: g,
    y: f
  }) : {
    x: g,
    y: f
  };
  g = v.x, f = v.y;
  var _ = a.hasOwnProperty("x"), b = a.hasOwnProperty("y"), V = ge, $ = me, E = window;
  if (c) {
    var I = Dt(o), R = "clientHeight", T = "clientWidth";
    if (I === _e(o) && (I = Xe(o), Re(I).position !== "static" && i === "absolute" && (R = "scrollHeight", T = "scrollWidth")), I = I, s === me || (s === ge || s === Ce) && n === St) {
      $ = ke;
      var M = w && I === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        I[R]
      );
      f -= M - l.height, f *= u ? 1 : -1;
    }
    if (s === ge || (s === me || s === ke) && n === St) {
      V = Ce;
      var P = w && I === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        I[T]
      );
      g -= P - l.width, g *= u ? 1 : -1;
    }
  }
  var A = Object.assign({
    position: i
  }, c && oa), q = h === !0 ? la({
    x: g,
    y: f
  }, _e(o)) : {
    x: g,
    y: f
  };
  if (g = q.x, f = q.y, u) {
    var H;
    return Object.assign({}, A, (H = {}, H[$] = b ? "0" : "", H[V] = _ ? "0" : "", H.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + g + "px, " + f + "px)" : "translate3d(" + g + "px, " + f + "px, 0)", H));
  }
  return Object.assign({}, A, (t = {}, t[$] = b ? f + "px" : "", t[V] = _ ? g + "px" : "", t.transform = "", t));
}
function sa(e) {
  var t = e.state, o = e.options, l = o.gpuAcceleration, s = l === void 0 ? !0 : l, n = o.adaptive, a = n === void 0 ? !0 : n, i = o.roundOffsets, u = i === void 0 ? !0 : i, c = {
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
    adaptive: a,
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
const na = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: sa,
  data: {}
};
var Ft = {
  passive: !0
};
function aa(e) {
  var t = e.state, o = e.instance, l = e.options, s = l.scroll, n = s === void 0 ? !0 : s, a = l.resize, i = a === void 0 ? !0 : a, u = _e(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return n && c.forEach(function(h) {
    h.addEventListener("scroll", o.update, Ft);
  }), i && u.addEventListener("resize", o.update, Ft), function() {
    n && c.forEach(function(h) {
      h.removeEventListener("scroll", o.update, Ft);
    }), i && u.removeEventListener("resize", o.update, Ft);
  };
}
const ra = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: aa,
  data: {}
};
var ia = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function qt(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return ia[t];
  });
}
var pa = {
  start: "end",
  end: "start"
};
function fl(e) {
  return e.replace(/start|end/g, function(t) {
    return pa[t];
  });
}
function jo(e) {
  var t = _e(e), o = t.pageXOffset, l = t.pageYOffset;
  return {
    scrollLeft: o,
    scrollTop: l
  };
}
function Ro(e) {
  return vt(Xe(e)).left + jo(e).scrollLeft;
}
function ua(e, t) {
  var o = _e(e), l = Xe(e), s = o.visualViewport, n = l.clientWidth, a = l.clientHeight, i = 0, u = 0;
  if (s) {
    n = s.width, a = s.height;
    var c = Rl();
    (c || !c && t === "fixed") && (i = s.offsetLeft, u = s.offsetTop);
  }
  return {
    width: n,
    height: a,
    x: i + Ro(e),
    y: u
  };
}
function da(e) {
  var t, o = Xe(e), l = jo(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, n = nt(o.scrollWidth, o.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = nt(o.scrollHeight, o.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), i = -l.scrollLeft + Ro(e), u = -l.scrollTop;
  return Re(s || o).direction === "rtl" && (i += nt(o.clientWidth, s ? s.clientWidth : 0) - n), {
    width: n,
    height: a,
    x: i,
    y: u
  };
}
function Fo(e) {
  var t = Re(e), o = t.overflow, l = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + s + l);
}
function Yl(e) {
  return ["html", "body", "#document"].indexOf(Ee(e)) >= 0 ? e.ownerDocument.body : Ve(e) && Fo(e) ? e : Yl(Gt(e));
}
function kt(e, t) {
  var o;
  t === void 0 && (t = []);
  var l = Yl(e), s = l === ((o = e.ownerDocument) == null ? void 0 : o.body), n = _e(l), a = s ? [n].concat(n.visualViewport || [], Fo(l) ? l : []) : l, i = t.concat(a);
  return s ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(kt(Gt(a)))
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
function ca(e, t) {
  var o = vt(e, !1, t === "fixed");
  return o.top = o.top + e.clientTop, o.left = o.left + e.clientLeft, o.bottom = o.top + e.clientHeight, o.right = o.left + e.clientWidth, o.width = e.clientWidth, o.height = e.clientHeight, o.x = o.left, o.y = o.top, o;
}
function vl(e, t, o) {
  return t === Al ? yo(ua(e, o)) : rt(t) ? ca(t, o) : yo(da(Xe(e)));
}
function fa(e) {
  var t = kt(Gt(e)), o = ["absolute", "fixed"].indexOf(Re(e).position) >= 0, l = o && Ve(e) ? Dt(e) : e;
  return rt(l) ? t.filter(function(s) {
    return rt(s) && Fl(s, l) && Ee(s) !== "body";
  }) : [];
}
function va(e, t, o, l) {
  var s = t === "clippingParents" ? fa(e) : [].concat(t), n = [].concat(s, [o]), a = n[0], i = n.reduce(function(u, c) {
    var h = vl(e, c, l);
    return u.top = nt(h.top, u.top), u.right = Wt(h.right, u.right), u.bottom = Wt(h.bottom, u.bottom), u.left = nt(h.left, u.left), u;
  }, vl(e, a, l));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Ul(e) {
  var t = e.reference, o = e.element, l = e.placement, s = l ? De(l) : null, n = l ? ht(l) : null, a = t.x + t.width / 2 - o.width / 2, i = t.y + t.height / 2 - o.height / 2, u;
  switch (s) {
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
    case ge:
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
    switch (n) {
      case ct:
        u[c] = u[c] - (t[h] / 2 - o[h] / 2);
        break;
      case St:
        u[c] = u[c] + (t[h] / 2 - o[h] / 2);
        break;
    }
  }
  return u;
}
function Pt(e, t) {
  t === void 0 && (t = {});
  var o = t, l = o.placement, s = l === void 0 ? e.placement : l, n = o.strategy, a = n === void 0 ? e.strategy : n, i = o.boundary, u = i === void 0 ? En : i, c = o.rootBoundary, h = c === void 0 ? Al : c, w = o.elementContext, y = w === void 0 ? _t : w, g = o.altBoundary, m = g === void 0 ? !1 : g, f = o.padding, v = f === void 0 ? 0 : f, _ = Hl(typeof v != "number" ? v : ql(v, Tt)), b = y === _t ? Bn : _t, V = e.rects.popper, $ = e.elements[m ? b : y], E = va(rt($) ? $ : $.contextElement || Xe(e.elements.popper), u, h, a), I = vt(e.elements.reference), R = Ul({
    reference: I,
    element: V,
    strategy: "absolute",
    placement: s
  }), T = yo(Object.assign({}, V, R)), M = y === _t ? T : I, P = {
    top: E.top - M.top + _.top,
    bottom: M.bottom - E.bottom + _.bottom,
    left: E.left - M.left + _.left,
    right: M.right - E.right + _.right
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
function ha(e, t) {
  t === void 0 && (t = {});
  var o = t, l = o.placement, s = o.boundary, n = o.rootBoundary, a = o.padding, i = o.flipVariations, u = o.allowedAutoPlacements, c = u === void 0 ? jl : u, h = ht(l), w = h ? i ? ul : ul.filter(function(m) {
    return ht(m) === h;
  }) : Tt, y = w.filter(function(m) {
    return c.indexOf(m) >= 0;
  });
  y.length === 0 && (y = w);
  var g = y.reduce(function(m, f) {
    return m[f] = Pt(e, {
      placement: f,
      boundary: s,
      rootBoundary: n,
      padding: a
    })[De(f)], m;
  }, {});
  return Object.keys(g).sort(function(m, f) {
    return g[m] - g[f];
  });
}
function ma(e) {
  if (De(e) === Bo)
    return [];
  var t = qt(e);
  return [fl(e), t, fl(t)];
}
function ga(e) {
  var t = e.state, o = e.options, l = e.name;
  if (!t.modifiersData[l]._skip) {
    for (var s = o.mainAxis, n = s === void 0 ? !0 : s, a = o.altAxis, i = a === void 0 ? !0 : a, u = o.fallbackPlacements, c = o.padding, h = o.boundary, w = o.rootBoundary, y = o.altBoundary, g = o.flipVariations, m = g === void 0 ? !0 : g, f = o.allowedAutoPlacements, v = t.options.placement, _ = De(v), b = _ === v, V = u || (b || !m ? [qt(v)] : ma(v)), $ = [v].concat(V).reduce(function(Le, Me) {
      return Le.concat(De(Me) === Bo ? ha(t, {
        placement: Me,
        boundary: h,
        rootBoundary: w,
        padding: c,
        flipVariations: m,
        allowedAutoPlacements: f
      }) : Me);
    }, []), E = t.rects.reference, I = t.rects.popper, R = /* @__PURE__ */ new Map(), T = !0, M = $[0], P = 0; P < $.length; P++) {
      var A = $[P], q = De(A), H = ht(A) === ct, Y = [me, ke].indexOf(q) >= 0, W = Y ? "width" : "height", U = Pt(t, {
        placement: A,
        boundary: h,
        rootBoundary: w,
        altBoundary: y,
        padding: c
      }), G = Y ? H ? Ce : ge : H ? ke : me;
      E[W] > I[W] && (G = qt(G));
      var ce = qt(G), Q = [];
      if (n && Q.push(U[q] <= 0), i && Q.push(U[G] <= 0, U[ce] <= 0), Q.every(function(Le) {
        return Le;
      })) {
        M = A, T = !1;
        break;
      }
      R.set(A, Q);
    }
    if (T)
      for (var $e = m ? 3 : 1, je = function(Me) {
        var Qe = $.find(function(Je) {
          var Se = R.get(Je);
          if (Se)
            return Se.slice(0, Me).every(function(et) {
              return et;
            });
        });
        if (Qe)
          return M = Qe, "break";
      }, Oe = $e; Oe > 0; Oe--) {
        var qe = je(Oe);
        if (qe === "break")
          break;
      }
    t.placement !== M && (t.modifiersData[l]._skip = !0, t.placement = M, t.reset = !0);
  }
}
const ba = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: ga,
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
  return [me, Ce, ke, ge].some(function(t) {
    return e[t] >= 0;
  });
}
function ya(e) {
  var t = e.state, o = e.name, l = t.rects.reference, s = t.rects.popper, n = t.modifiersData.preventOverflow, a = Pt(t, {
    elementContext: "reference"
  }), i = Pt(t, {
    altBoundary: !0
  }), u = hl(a, l), c = hl(i, s, n), h = ml(u), w = ml(c);
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
const wa = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: ya
};
function _a(e, t, o) {
  var l = De(e), s = [ge, me].indexOf(l) >= 0 ? -1 : 1, n = typeof o == "function" ? o(Object.assign({}, t, {
    placement: e
  })) : o, a = n[0], i = n[1];
  return a = a || 0, i = (i || 0) * s, [ge, Ce].indexOf(l) >= 0 ? {
    x: i,
    y: a
  } : {
    x: a,
    y: i
  };
}
function $a(e) {
  var t = e.state, o = e.options, l = e.name, s = o.offset, n = s === void 0 ? [0, 0] : s, a = jl.reduce(function(h, w) {
    return h[w] = _a(w, t.rects, n), h;
  }, {}), i = a[t.placement], u = i.x, c = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += c), t.modifiersData[l] = a;
}
const xa = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: $a
};
function Va(e) {
  var t = e.state, o = e.name;
  t.modifiersData[o] = Ul({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const ka = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Va,
  data: {}
};
function Ca(e) {
  return e === "x" ? "y" : "x";
}
function Sa(e) {
  var t = e.state, o = e.options, l = e.name, s = o.mainAxis, n = s === void 0 ? !0 : s, a = o.altAxis, i = a === void 0 ? !1 : a, u = o.boundary, c = o.rootBoundary, h = o.altBoundary, w = o.padding, y = o.tether, g = y === void 0 ? !0 : y, m = o.tetherOffset, f = m === void 0 ? 0 : m, v = Pt(t, {
    boundary: u,
    rootBoundary: c,
    padding: w,
    altBoundary: h
  }), _ = De(t.placement), b = ht(t.placement), V = !b, $ = Ao(_), E = Ca($), I = t.modifiersData.popperOffsets, R = t.rects.reference, T = t.rects.popper, M = typeof f == "function" ? f(Object.assign({}, t.rects, {
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
  if (I) {
    if (n) {
      var H, Y = $ === "y" ? me : ge, W = $ === "y" ? ke : Ce, U = $ === "y" ? "height" : "width", G = I[$], ce = G + v[Y], Q = G - v[W], $e = g ? -T[U] / 2 : 0, je = b === ct ? R[U] : T[U], Oe = b === ct ? -T[U] : -R[U], qe = t.elements.arrow, Le = g && qe ? zo(qe) : {
        width: 0,
        height: 0
      }, Me = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : Nl(), Qe = Me[Y], Je = Me[W], Se = Vt(0, R[U], Le[U]), et = V ? R[U] / 2 - $e - Se - Qe - P.mainAxis : je - Se - Qe - P.mainAxis, gt = V ? -R[U] / 2 + $e + Se + Je + P.mainAxis : Oe + Se + Je + P.mainAxis, Ye = t.elements.arrow && Dt(t.elements.arrow), bt = Ye ? $ === "y" ? Ye.clientTop || 0 : Ye.clientLeft || 0 : 0, pt = (H = A == null ? void 0 : A[$]) != null ? H : 0, yt = G + et - pt - bt, wt = G + gt - pt, po = Vt(g ? Wt(ce, yt) : ce, G, g ? nt(Q, wt) : Q);
      I[$] = po, q[$] = po - G;
    }
    if (i) {
      var tl, zs = $ === "x" ? me : ge, As = $ === "x" ? ke : Ce, tt = I[E], Rt = E === "y" ? "height" : "width", ol = tt + v[zs], ll = tt - v[As], uo = [me, ge].indexOf(_) !== -1, sl = (tl = A == null ? void 0 : A[E]) != null ? tl : 0, nl = uo ? ol : tt - R[Rt] - T[Rt] - sl + P.altAxis, al = uo ? tt + R[Rt] + T[Rt] - sl - P.altAxis : ll, rl = g && uo ? Xn(nl, tt, al) : Vt(g ? nl : ol, tt, g ? al : ll);
      I[E] = rl, q[E] = rl - tt;
    }
    t.modifiersData[l] = q;
  }
}
const Pa = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Sa,
  requiresIfExists: ["offset"]
};
function Oa(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function La(e) {
  return e === _e(e) || !Ve(e) ? jo(e) : Oa(e);
}
function Ma(e) {
  var t = e.getBoundingClientRect(), o = ft(t.width) / e.offsetWidth || 1, l = ft(t.height) / e.offsetHeight || 1;
  return o !== 1 || l !== 1;
}
function Ta(e, t, o) {
  o === void 0 && (o = !1);
  var l = Ve(t), s = Ve(t) && Ma(t), n = Xe(t), a = vt(e, s, o), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = {
    x: 0,
    y: 0
  };
  return (l || !l && !o) && ((Ee(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Fo(n)) && (i = La(t)), Ve(t) ? (u = vt(t, !0), u.x += t.clientLeft, u.y += t.clientTop) : n && (u.x = Ro(n))), {
    x: a.left + i.scrollLeft - u.x,
    y: a.top + i.scrollTop - u.y,
    width: a.width,
    height: a.height
  };
}
function Da(e) {
  var t = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), l = [];
  e.forEach(function(n) {
    t.set(n.name, n);
  });
  function s(n) {
    o.add(n.name);
    var a = [].concat(n.requires || [], n.requiresIfExists || []);
    a.forEach(function(i) {
      if (!o.has(i)) {
        var u = t.get(i);
        u && s(u);
      }
    }), l.push(n);
  }
  return e.forEach(function(n) {
    o.has(n.name) || s(n);
  }), l;
}
function Ea(e) {
  var t = Da(e);
  return Yn.reduce(function(o, l) {
    return o.concat(t.filter(function(s) {
      return s.phase === l;
    }));
  }, []);
}
function Ba(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(o) {
      Promise.resolve().then(function() {
        t = void 0, o(e());
      });
    })), t;
  };
}
function Ia(e) {
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
var gl = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function bl() {
  for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
    t[o] = arguments[o];
  return !t.some(function(l) {
    return !(l && typeof l.getBoundingClientRect == "function");
  });
}
function za(e) {
  e === void 0 && (e = {});
  var t = e, o = t.defaultModifiers, l = o === void 0 ? [] : o, s = t.defaultOptions, n = s === void 0 ? gl : s;
  return function(i, u, c) {
    c === void 0 && (c = n);
    var h = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, gl, n),
      modifiersData: {},
      elements: {
        reference: i,
        popper: u
      },
      attributes: {},
      styles: {}
    }, w = [], y = !1, g = {
      state: h,
      setOptions: function(_) {
        var b = typeof _ == "function" ? _(h.options) : _;
        f(), h.options = Object.assign({}, n, h.options, b), h.scrollParents = {
          reference: rt(i) ? kt(i) : i.contextElement ? kt(i.contextElement) : [],
          popper: kt(u)
        };
        var V = Ea(Ia([].concat(l, h.options.modifiers)));
        return h.orderedModifiers = V.filter(function($) {
          return $.enabled;
        }), m(), g.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!y) {
          var _ = h.elements, b = _.reference, V = _.popper;
          if (bl(b, V)) {
            h.rects = {
              reference: Ta(b, Dt(V), h.options.strategy === "fixed"),
              popper: zo(V)
            }, h.reset = !1, h.placement = h.options.placement, h.orderedModifiers.forEach(function(P) {
              return h.modifiersData[P.name] = Object.assign({}, P.data);
            });
            for (var $ = 0; $ < h.orderedModifiers.length; $++) {
              if (h.reset === !0) {
                h.reset = !1, $ = -1;
                continue;
              }
              var E = h.orderedModifiers[$], I = E.fn, R = E.options, T = R === void 0 ? {} : R, M = E.name;
              typeof I == "function" && (h = I({
                state: h,
                options: T,
                name: M,
                instance: g
              }) || h);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Ba(function() {
        return new Promise(function(v) {
          g.forceUpdate(), v(h);
        });
      }),
      destroy: function() {
        f(), y = !0;
      }
    };
    if (!bl(i, u))
      return g;
    g.setOptions(c).then(function(v) {
      !y && c.onFirstUpdate && c.onFirstUpdate(v);
    });
    function m() {
      h.orderedModifiers.forEach(function(v) {
        var _ = v.name, b = v.options, V = b === void 0 ? {} : b, $ = v.effect;
        if (typeof $ == "function") {
          var E = $({
            state: h,
            name: _,
            instance: g,
            options: V
          }), I = function() {
          };
          w.push(E || I);
        }
      });
    }
    function f() {
      w.forEach(function(v) {
        return v();
      }), w = [];
    }
    return g;
  };
}
var Aa = [ra, ka, na, Zn, xa, ba, Pa, ta, wa], Et = /* @__PURE__ */ za({
  defaultModifiers: Aa
});
function Bt(e, t) {
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
const ja = ["placeholder", "onKeyup"], Ra = {
  name: "PoSearchBar"
}, Fa = /* @__PURE__ */ D({
  ...Ra,
  props: {
    placeholder: { default: "Search" },
    currentQuery: { default: "" },
    showTray: { type: Boolean, default: !1 }
  },
  emits: ["query", "onClear"],
  setup(e, { emit: t }) {
    const o = e, l = x(!1), s = x(null), n = x(), a = x(), i = x({
      viewStartIdx: 0,
      viewEndIdx: 0,
      visibleStartIdx: 0,
      visibleEndIdx: 0
    });
    let u = x(""), c;
    const h = (m) => {
      t("query", u.value);
    };
    function w() {
      t("query", u.value);
    }
    Z(() => {
      o.showTray && setTimeout(() => {
        c = Et(n.value, a.value, {
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
    }), Bt(s, () => {
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
    function g() {
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
        ref: n,
        id: "main-search",
        placeholder: m.placeholder,
        onKeyup: Rs(h, ["enter"]),
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
      }, null, 42, ja), [
        [Ot, O(u)]
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
        S(O(Eo), { class: "po-w-5 po-h-5 po-stroke-current" })
      ], 2),
      Pe(r("div", {
        ref_key: "popper",
        ref: a,
        class: "po-absolute po-z-[51] po-mt-1 po-w-full po-rounded-b-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm",
        onResize: g,
        onUpdate: y
      }, [
        K(m.$slots, "default")
      ], 544), [
        [Lt, l.value && m.showTray]
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
var Be = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Be || {}), We = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(We || {});
function te({ visible: e = !0, features: t = 0, ourProps: o, theirProps: l, ...s }) {
  var n;
  let a = Zl(l, o), i = Object.assign(s, { props: a });
  if (e || t & 2 && a.static)
    return co(i);
  if (t & 1) {
    let u = (n = a.unmount) == null || n ? 0 : 1;
    return ue(u, { [0]() {
      return null;
    }, [1]() {
      return co({ ...s, props: { ...a, hidden: !0, style: { display: "none" } } });
    } });
  }
  return co(i);
}
function co({ props: e, attrs: t, slots: o, slot: l, name: s }) {
  var n, a;
  let { as: i, ...u } = Kt(e, ["unmount", "static"]), c = (n = o.default) == null ? void 0 : n.call(o, l), h = {};
  if (l) {
    let w = !1, y = [];
    for (let [g, m] of Object.entries(l))
      typeof m == "boolean" && (w = !0), m === !0 && y.push(g);
    w && (h["data-headlessui-state"] = y.join(" "));
  }
  if (i === "template") {
    if (c = Wl(c ?? []), Object.keys(u).length > 0 || Object.keys(t).length > 0) {
      let [w, ...y] = c ?? [];
      if (!Na(w) || y.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${s} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(u).concat(Object.keys(t)).map((f) => f.trim()).filter((f, v, _) => _.indexOf(f) === v).sort((f, v) => f.localeCompare(v)).map((f) => `  - ${f}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((f) => `  - ${f}`).join(`
`)].join(`
`));
      let g = Zl((a = w.props) != null ? a : {}, u), m = Fs(w, g);
      for (let f in g)
        f.startsWith("on") && (m.props || (m.props = {}), m.props[f] = g[f]);
      return m;
    }
    return Array.isArray(c) && c.length === 1 ? c[0] : c;
  }
  return oe(i, Object.assign({}, u, h), { default: () => c });
}
function Wl(e) {
  return e.flatMap((t) => t.type === F ? Wl(t.children) : [t]);
}
function Zl(...e) {
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
    Object.assign(t, { [l](s, ...n) {
      let a = o[l];
      for (let i of a) {
        if (s instanceof Event && s.defaultPrevented)
          return;
        i(s, ...n);
      }
    } });
  return t;
}
function Gl(e) {
  let t = Object.assign({}, e);
  for (let o in t)
    t[o] === void 0 && delete t[o];
  return t;
}
function Kt(e, t = []) {
  let o = Object.assign({}, e);
  for (let l of t)
    l in o && delete o[l];
  return o;
}
function Na(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Ha = 0;
function qa() {
  return ++Ha;
}
function pe() {
  return qa();
}
var ae = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(ae || {});
function j(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Kl = Symbol("Context");
var se = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(se || {});
function Ya() {
  return mt() !== null;
}
function mt() {
  return de(Kl, null);
}
function No(e) {
  fe(Kl, e);
}
function yl(e, t) {
  if (e)
    return e;
  let o = t ?? "button";
  if (typeof o == "string" && o.toLowerCase() === "button")
    return "button";
}
function Ho(e, t) {
  let o = x(yl(e.value.type, e.value.as));
  return Z(() => {
    o.value = yl(e.value.type, e.value.as);
  }), ve(() => {
    var l;
    o.value || j(t) && j(t) instanceof HTMLButtonElement && !((l = j(t)) != null && l.hasAttribute("type")) && (o.value = "button");
  }), o;
}
var Ua = Object.defineProperty, Wa = (e, t, o) => t in e ? Ua(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, wl = (e, t, o) => (Wa(e, typeof t != "symbol" ? t + "" : t, o), o);
let Za = class {
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
}, It = new Za();
function we(e) {
  if (It.isServer)
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
function Ga({ container: e, accept: t, walk: o, enabled: l }) {
  ve(() => {
    let s = e.value;
    if (!s || l !== void 0 && !l.value)
      return;
    let n = we(e);
    if (!n)
      return;
    let a = Object.assign((u) => t(u), { acceptNode: t }), i = n.createTreeWalker(s, NodeFilter.SHOW_ELEMENT, a, !1);
    for (; i.nextNode(); )
      o(i.currentNode);
  });
}
let wo = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var ie = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ie || {}), it = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(it || {}), Ka = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Ka || {});
function Xt(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(wo)).sort((t, o) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (o.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var qo = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(qo || {});
function Xl(e, t = 0) {
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
function at(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Xa = ["textarea", "input"].join(",");
function Qa(e) {
  var t, o;
  return (o = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Xa)) != null ? o : !1;
}
function Ql(e, t = (o) => o) {
  return e.slice().sort((o, l) => {
    let s = t(o), n = t(l);
    if (s === null || n === null)
      return 0;
    let a = s.compareDocumentPosition(n);
    return a & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : a & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function be(e, t, { sorted: o = !0, relativeTo: l = null, skipElements: s = [] } = {}) {
  var n;
  let a = (n = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? n : document, i = Array.isArray(e) ? o ? Ql(e) : e : Xt(e);
  s.length > 0 && i.length > 1 && (i = i.filter((m) => !s.includes(m))), l = l ?? a.activeElement;
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
  })(), h = t & 32 ? { preventScroll: !0 } : {}, w = 0, y = i.length, g;
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
    g = i[m], g == null || g.focus(h), w += u;
  } while (g !== a.activeElement);
  return t & 6 && Qa(g) && g.select(), g.hasAttribute("tabindex") || g.setAttribute("tabindex", "0"), 2;
}
function fo(e, t, o) {
  It.isServer || ve((l) => {
    document.addEventListener(e, t, o), l(() => document.removeEventListener(e, t, o));
  });
}
function Jl(e, t, o = B(() => !0)) {
  function l(n, a) {
    if (!o.value || n.defaultPrevented)
      return;
    let i = a(n);
    if (i === null || !i.getRootNode().contains(i))
      return;
    let u = function c(h) {
      return typeof h == "function" ? c(h()) : Array.isArray(h) || h instanceof Set ? h : [h];
    }(e);
    for (let c of u) {
      if (c === null)
        continue;
      let h = c instanceof HTMLElement ? c : j(c);
      if (h != null && h.contains(i) || n.composed && n.composedPath().includes(h))
        return;
    }
    return !Xl(i, qo.Loose) && i.tabIndex !== -1 && n.preventDefault(), t(n, i);
  }
  let s = x(null);
  fo("mousedown", (n) => {
    var a, i;
    o.value && (s.value = ((i = (a = n.composedPath) == null ? void 0 : a.call(n)) == null ? void 0 : i[0]) || n.target);
  }, !0), fo("click", (n) => {
    s.value && (l(n, () => s.value), s.value = null);
  }, !0), fo("blur", (n) => l(n, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Fe = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Fe || {});
let Ge = D({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: o }) {
  return () => {
    let { features: l, ...s } = e, n = { "aria-hidden": (l & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(l & 4) === 4 && (l & 2) !== 2 && { display: "none" } } };
    return te({ ourProps: n, theirProps: s, slot: {}, attrs: o, slots: t, name: "Hidden" });
  };
} });
function es(e = {}, t = null, o = []) {
  for (let [l, s] of Object.entries(e))
    os(o, ts(t, l), s);
  return o;
}
function ts(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function os(e, t, o) {
  if (Array.isArray(o))
    for (let [l, s] of o.entries())
      os(e, ts(t, l.toString()), s);
  else
    o instanceof Date ? e.push([t, o.toISOString()]) : typeof o == "boolean" ? e.push([t, o ? "1" : "0"]) : typeof o == "string" ? e.push([t, o]) : typeof o == "number" ? e.push([t, `${o}`]) : o == null ? e.push([t, ""]) : es(o, t, e);
}
function ls(e) {
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
function ss(e, t, o) {
  let l = x(o == null ? void 0 : o.value), s = B(() => e.value !== void 0);
  return [B(() => s.value ? e.value : l.value), function(n) {
    return s.value || (l.value = n), t == null ? void 0 : t(n);
  }];
}
function Ja() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function er(e, t, o) {
  It.isServer || ve((l) => {
    window.addEventListener(e, t, o), l(() => window.removeEventListener(e, t, o));
  });
}
var ye = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(ye || {});
function Yo() {
  let e = x(0);
  return er("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Uo(e, t, o, l) {
  It.isServer || ve((s) => {
    e = e ?? window, e.addEventListener(t, o, l), s(() => e.removeEventListener(t, o, l));
  });
}
function ns(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function as(e) {
  if (!e)
    return /* @__PURE__ */ new Set();
  if (typeof e == "function")
    return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let o of e.value) {
    let l = j(o);
    l instanceof HTMLElement && t.add(l);
  }
  return t;
}
var rs = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(rs || {});
let $t = Object.assign(D({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: x(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: l }) {
  let s = x(null);
  l({ el: s, $el: s });
  let n = B(() => we(s)), a = x(!1);
  Z(() => a.value = !0), re(() => a.value = !1), or({ ownerDocument: n }, B(() => a.value && Boolean(e.features & 16)));
  let i = lr({ ownerDocument: n, container: s, initialFocus: B(() => e.initialFocus) }, B(() => a.value && Boolean(e.features & 2)));
  sr({ ownerDocument: n, container: s, containers: e.containers, previousActiveElement: i }, B(() => a.value && Boolean(e.features & 8)));
  let u = Yo();
  function c(g) {
    let m = j(s);
    m && ((f) => f())(() => {
      ue(u.value, { [ye.Forwards]: () => {
        be(m, ie.First, { skipElements: [g.relatedTarget] });
      }, [ye.Backwards]: () => {
        be(m, ie.Last, { skipElements: [g.relatedTarget] });
      } });
    });
  }
  let h = x(!1);
  function w(g) {
    g.key === "Tab" && (h.value = !0, requestAnimationFrame(() => {
      h.value = !1;
    }));
  }
  function y(g) {
    if (!a.value)
      return;
    let m = as(e.containers);
    j(s) instanceof HTMLElement && m.add(j(s));
    let f = g.relatedTarget;
    f instanceof HTMLElement && f.dataset.headlessuiFocusGuard !== "true" && (is(m, f) || (h.value ? be(j(s), ue(u.value, { [ye.Forwards]: () => ie.Next, [ye.Backwards]: () => ie.Previous }) | ie.WrapAround, { relativeTo: g.target }) : g.target instanceof HTMLElement && at(g.target)));
  }
  return () => {
    let g = {}, m = { ref: s, onKeydown: w, onFocusout: y }, { features: f, initialFocus: v, containers: _, ...b } = e;
    return oe(F, [Boolean(f & 4) && oe(Ge, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: Fe.Focusable }), te({ ourProps: m, theirProps: { ...t, ...b }, slot: g, attrs: t, slots: o, name: "FocusTrap" }), Boolean(f & 4) && oe(Ge, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: Fe.Focusable })]);
  };
} }), { features: rs }), lt = [];
if (typeof window < "u" && typeof document < "u") {
  let e = function(t) {
    t.target instanceof HTMLElement && t.target !== document.body && lt[0] !== t.target && (lt.unshift(t.target), lt = lt.filter((o) => o != null && o.isConnected), lt.splice(10));
  };
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
}
function tr(e) {
  let t = x(lt.slice());
  return ee([e], ([o], [l]) => {
    l === !0 && o === !1 ? ns(() => {
      t.value.splice(0);
    }) : l === !1 && o === !0 && (t.value = lt.slice());
  }, { flush: "post" }), () => {
    var o;
    return (o = t.value.find((l) => l != null && l.isConnected)) != null ? o : null;
  };
}
function or({ ownerDocument: e }, t) {
  let o = tr(t);
  Z(() => {
    ve(() => {
      var l, s;
      t.value || ((l = e.value) == null ? void 0 : l.activeElement) === ((s = e.value) == null ? void 0 : s.body) && at(o());
    }, { flush: "post" });
  }), re(() => {
    at(o());
  });
}
function lr({ ownerDocument: e, container: t, initialFocus: o }, l) {
  let s = x(null), n = x(!1);
  return Z(() => n.value = !0), re(() => n.value = !1), Z(() => {
    ee([t, o, l], (a, i) => {
      if (a.every((c, h) => (i == null ? void 0 : i[h]) === c) || !l.value)
        return;
      let u = j(t);
      u && ns(() => {
        var c, h;
        if (!n.value)
          return;
        let w = j(o), y = (c = e.value) == null ? void 0 : c.activeElement;
        if (w) {
          if (w === y) {
            s.value = y;
            return;
          }
        } else if (u.contains(y)) {
          s.value = y;
          return;
        }
        w ? at(w) : be(u, ie.First | ie.NoScroll) === it.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), s.value = (h = e.value) == null ? void 0 : h.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), s;
}
function sr({ ownerDocument: e, container: t, containers: o, previousActiveElement: l }, s) {
  var n;
  Uo((n = e.value) == null ? void 0 : n.defaultView, "focus", (a) => {
    if (!s.value)
      return;
    let i = as(o);
    j(t) instanceof HTMLElement && i.add(j(t));
    let u = l.value;
    if (!u)
      return;
    let c = a.target;
    c && c instanceof HTMLElement ? is(i, c) ? (l.value = c, at(c)) : (a.preventDefault(), a.stopPropagation(), at(u)) : at(l.value);
  }, !0);
}
function is(e, t) {
  for (let o of e)
    if (o.contains(t))
      return !0;
  return !1;
}
let vo = /* @__PURE__ */ new Map(), xt = /* @__PURE__ */ new Map();
function _l(e, t = x(!0)) {
  ve((o) => {
    var l;
    if (!t.value)
      return;
    let s = j(e);
    if (!s)
      return;
    o(function() {
      var a;
      if (!s)
        return;
      let i = (a = xt.get(s)) != null ? a : 1;
      if (i === 1 ? xt.delete(s) : xt.set(s, i - 1), i !== 1)
        return;
      let u = vo.get(s);
      u && (u["aria-hidden"] === null ? s.removeAttribute("aria-hidden") : s.setAttribute("aria-hidden", u["aria-hidden"]), s.inert = u.inert, vo.delete(s));
    });
    let n = (l = xt.get(s)) != null ? l : 0;
    xt.set(s, n + 1), n === 0 && (vo.set(s, { "aria-hidden": s.getAttribute("aria-hidden"), inert: s.inert }), s.setAttribute("aria-hidden", "true"), s.inert = !0);
  });
}
let ps = Symbol("ForcePortalRootContext");
function nr() {
  return de(ps, !1);
}
let _o = D({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: o }) {
  return fe(ps, e.force), () => {
    let { force: l, ...s } = e;
    return te({ theirProps: s, ourProps: {}, slot: {}, slots: t, attrs: o, name: "ForcePortalRoot" });
  };
} });
function ar(e) {
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
let us = D({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: o }) {
  let l = x(null), s = B(() => we(l)), n = nr(), a = de(ds, null), i = x(n === !0 || a == null ? ar(l.value) : a.resolveTarget());
  return ve(() => {
    n || a != null && (i.value = a.resolveTarget());
  }), re(() => {
    var u, c;
    let h = (u = s.value) == null ? void 0 : u.getElementById("headlessui-portal-root");
    h && i.value === h && i.value.children.length <= 0 && ((c = i.value.parentElement) == null || c.removeChild(i.value));
  }), () => {
    if (i.value === null)
      return null;
    let u = { ref: l, "data-headlessui-portal": "" };
    return oe(Mt, { to: i.value }, te({ ourProps: u, theirProps: e, slot: {}, attrs: o, slots: t, name: "Portal" }));
  };
} }), ds = Symbol("PortalGroupContext"), rr = D({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: o }) {
  let l = Ns({ resolveTarget() {
    return e.target;
  } });
  return fe(ds, l), () => {
    let { target: s, ...n } = e;
    return te({ theirProps: n, ourProps: {}, slot: {}, attrs: t, slots: o, name: "PortalGroup" });
  };
} }), cs = Symbol("StackContext");
var $o = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))($o || {});
function ir() {
  return de(cs, () => {
  });
}
function pr({ type: e, enabled: t, element: o, onUpdate: l }) {
  let s = ir();
  function n(...a) {
    l == null || l(...a), s(...a);
  }
  Z(() => {
    ee(t, (a, i) => {
      a ? n(0, e, o) : i === !0 && n(1, e, o);
    }, { immediate: !0, flush: "sync" });
  }), re(() => {
    t.value && n(1, e, o);
  }), fe(cs, n);
}
let fs = Symbol("DescriptionContext");
function ur() {
  let e = de(fs, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function Qt({ slot: e = x({}), name: t = "Description", props: o = {} } = {}) {
  let l = x([]);
  function s(n) {
    return l.value.push(n), () => {
      let a = l.value.indexOf(n);
      a !== -1 && l.value.splice(a, 1);
    };
  }
  return fe(fs, { register: s, slot: e, name: t, props: o }), B(() => l.value.length > 0 ? l.value.join(" ") : void 0);
}
let dr = D({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${pe()}` } }, setup(e, { attrs: t, slots: o }) {
  let l = ur();
  return Z(() => re(l.register(e.id))), () => {
    let { name: s = "Description", slot: n = x({}), props: a = {} } = l, { id: i, ...u } = e, c = { ...Object.entries(a).reduce((h, [w, y]) => Object.assign(h, { [w]: O(y) }), {}), id: i };
    return te({ ourProps: c, theirProps: u, slot: n.value, attrs: t, slots: o, name: s });
  };
} });
function cr(e) {
  let t = Dl(e.getSnapshot());
  return re(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function Jt() {
  let e = [], t = { addEventListener(o, l, s, n) {
    return o.addEventListener(l, s, n), t.add(() => o.removeEventListener(l, s, n));
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
    let n = o.style.getPropertyValue(l);
    return Object.assign(o.style, { [l]: s }), this.add(() => {
      Object.assign(o.style, { [l]: n });
    });
  }, group(o) {
    let l = Jt();
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
function fr(e, t) {
  let o = e(), l = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return o;
  }, subscribe(s) {
    return l.add(s), () => l.delete(s);
  }, dispatch(s, ...n) {
    let a = t[s].call(o, ...n);
    a && (o = a, l.forEach((i) => i()));
  } };
}
function vr() {
  let e;
  return { before({ doc: t }) {
    var o;
    let l = t.documentElement;
    e = ((o = t.defaultView) != null ? o : window).innerWidth - l.clientWidth;
  }, after({ doc: t, d: o }) {
    let l = t.documentElement, s = l.clientWidth - l.offsetWidth, n = e - s;
    o.style(l, "paddingRight", `${n}px`);
  } };
}
function hr() {
  if (!Ja())
    return {};
  let e;
  return { before() {
    e = window.pageYOffset;
  }, after({ doc: t, d: o, meta: l }) {
    function s(a) {
      return l.containers.flatMap((i) => i()).some((i) => i.contains(a));
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
          c && !s(c) && (n = c);
        } catch {
        }
    }, !0), o.addEventListener(t, "touchmove", (a) => {
      a.target instanceof HTMLElement && !s(a.target) && a.preventDefault();
    }, { passive: !1 }), o.add(() => {
      window.scrollTo(0, window.pageYOffset + e), n && n.isConnected && (n.scrollIntoView({ block: "nearest" }), n = null);
    });
  } };
}
function mr() {
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
let st = fr(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var o;
  let l = (o = this.get(e)) != null ? o : { doc: e, count: 0, d: Jt(), meta: /* @__PURE__ */ new Set() };
  return l.count++, l.meta.add(t), this.set(e, l), this;
}, POP(e, t) {
  let o = this.get(e);
  return o && (o.count--, o.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: o }) {
  let l = { doc: e, d: t, meta: gr(o) }, s = [hr(), vr(), mr()];
  s.forEach(({ before: n }) => n == null ? void 0 : n(l)), s.forEach(({ after: n }) => n == null ? void 0 : n(l));
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
function br(e, t, o) {
  let l = cr(st), s = B(() => {
    let n = e.value ? l.value.get(e.value) : void 0;
    return n ? n.count > 0 : !1;
  });
  return ee([e, t], ([n, a], [i], u) => {
    if (!n || !a)
      return;
    st.dispatch("PUSH", n, o);
    let c = !1;
    u(() => {
      c || (st.dispatch("POP", i ?? n, o), c = !0);
    });
  }, { immediate: !0 }), s;
}
var yr = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(yr || {});
let xo = Symbol("DialogContext");
function zt(e) {
  let t = de(xo, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, zt), o;
  }
  return t;
}
let Nt = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", eo = D({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Nt }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${pe()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: o, slots: l, expose: s }) {
  var n;
  let a = x(!1);
  Z(() => {
    a.value = !0;
  });
  let i = x(0), u = mt(), c = B(() => e.open === Nt && u !== null ? (u.value & se.Open) === se.Open : e.open), h = x(null), w = x(null), y = B(() => we(h));
  if (s({ el: h, $el: h }), !(e.open !== Nt || u !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof c.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${c.value === Nt ? void 0 : e.open}`);
  let g = B(() => a.value && c.value ? 0 : 1), m = B(() => g.value === 0), f = B(() => i.value > 1), v = de(xo, null) !== null, _ = B(() => f.value ? "parent" : "leaf"), b = B(() => u !== null ? (u.value & se.Closing) === se.Closing : !1), V = B(() => v || b.value ? !1 : m.value), $ = B(() => {
    var Y, W, U;
    return (U = Array.from((W = (Y = y.value) == null ? void 0 : Y.querySelectorAll("body > *")) != null ? W : []).find((G) => G.id === "headlessui-portal-root" ? !1 : G.contains(j(w)) && G instanceof HTMLElement)) != null ? U : null;
  });
  _l($, V);
  let E = B(() => f.value ? !0 : m.value), I = B(() => {
    var Y, W, U;
    return (U = Array.from((W = (Y = y.value) == null ? void 0 : Y.querySelectorAll("[data-headlessui-portal]")) != null ? W : []).find((G) => G.contains(j(w)) && G instanceof HTMLElement)) != null ? U : null;
  });
  _l(I, E), pr({ type: "Dialog", enabled: B(() => g.value === 0), element: h, onUpdate: (Y, W) => {
    if (W === "Dialog")
      return ue(Y, { [$o.Add]: () => i.value += 1, [$o.Remove]: () => i.value -= 1 });
  } });
  let R = Qt({ name: "DialogDescription", slot: B(() => ({ open: c.value })) }), T = x(null), M = { titleId: T, panelRef: x(null), dialogState: g, setTitleId(Y) {
    T.value !== Y && (T.value = Y);
  }, close() {
    t("close", !1);
  } };
  fe(xo, M);
  function P() {
    var Y, W, U;
    return [...Array.from((W = (Y = y.value) == null ? void 0 : Y.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? W : []).filter((G) => !(G === document.body || G === document.head || !(G instanceof HTMLElement) || G.contains(j(w)) || M.panelRef.value && G.contains(M.panelRef.value))), (U = M.panelRef.value) != null ? U : h.value];
  }
  let A = B(() => !(!m.value || f.value));
  Jl(() => P(), (Y, W) => {
    M.close(), Mo(() => W == null ? void 0 : W.focus());
  }, A);
  let q = B(() => !(f.value || g.value !== 0));
  Uo((n = y.value) == null ? void 0 : n.defaultView, "keydown", (Y) => {
    q.value && (Y.defaultPrevented || Y.key === ae.Escape && (Y.preventDefault(), Y.stopPropagation(), M.close()));
  });
  let H = B(() => !(b.value || g.value !== 0 || v));
  return br(y, H, (Y) => {
    var W;
    return { containers: [...(W = Y.containers) != null ? W : [], P] };
  }), ve((Y) => {
    if (g.value !== 0)
      return;
    let W = j(h);
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
    let { id: Y, open: W, initialFocus: U, ...G } = e, ce = { ...o, ref: h, id: Y, role: "dialog", "aria-modal": g.value === 0 ? !0 : void 0, "aria-labelledby": T.value, "aria-describedby": R.value }, Q = { open: g.value === 0 };
    return oe(_o, { force: !0 }, () => [oe(us, () => oe(rr, { target: h.value }, () => oe(_o, { force: !1 }, () => oe($t, { initialFocus: U, containers: P, features: m.value ? ue(_.value, { parent: $t.features.RestoreFocus, leaf: $t.features.All & ~$t.features.FocusLock }) : $t.features.None }, () => te({ ourProps: ce, theirProps: G, slot: Q, attrs: o, slots: l, visible: g.value === 0, features: Be.RenderStrategy | Be.Static, name: "Dialog" }))))), oe(Ge, { features: Fe.Hidden, ref: w })]);
  };
} });
D({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${pe()}` } }, setup(e, { attrs: t, slots: o }) {
  let l = zt("DialogOverlay");
  function s(n) {
    n.target === n.currentTarget && (n.preventDefault(), n.stopPropagation(), l.close());
  }
  return () => {
    let { id: n, ...a } = e;
    return te({ ourProps: { id: n, "aria-hidden": !0, onClick: s }, theirProps: a, slot: { open: l.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogOverlay" });
  };
} });
D({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${pe()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: l }) {
  let s = zt("DialogBackdrop"), n = x(null);
  return l({ el: n, $el: n }), Z(() => {
    if (s.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: a, ...i } = e, u = { id: a, ref: n, "aria-hidden": !0 };
    return oe(_o, { force: !0 }, () => oe(us, () => te({ ourProps: u, theirProps: { ...t, ...i }, slot: { open: s.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogBackdrop" })));
  };
} });
let to = D({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${pe()}` } }, setup(e, { attrs: t, slots: o, expose: l }) {
  let s = zt("DialogPanel");
  l({ el: s.panelRef, $el: s.panelRef });
  function n(a) {
    a.stopPropagation();
  }
  return () => {
    let { id: a, ...i } = e, u = { id: a, ref: s.panelRef, onClick: n };
    return te({ ourProps: u, theirProps: i, slot: { open: s.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogPanel" });
  };
} }), vs = D({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${pe()}` } }, setup(e, { attrs: t, slots: o }) {
  let l = zt("DialogTitle");
  return Z(() => {
    l.setTitleId(e.id), re(() => l.setTitleId(null));
  }), () => {
    let { id: s, ...n } = e;
    return te({ ourProps: { id: s }, theirProps: n, slot: { open: l.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogTitle" });
  };
} });
var wr = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(wr || {});
let hs = Symbol("DisclosureContext");
function Wo(e) {
  let t = de(hs, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, Wo), o;
  }
  return t;
}
let ms = Symbol("DisclosurePanelContext");
function _r() {
  return de(ms, null);
}
let $l = D({ name: "Disclosure", props: { as: { type: [Object, String], default: "template" }, defaultOpen: { type: [Boolean], default: !1 } }, setup(e, { slots: t, attrs: o }) {
  let l = x(e.defaultOpen ? 0 : 1), s = x(null), n = x(null), a = { buttonId: x(null), panelId: x(null), disclosureState: l, panel: s, button: n, toggleDisclosure() {
    l.value = ue(l.value, { [0]: 1, [1]: 0 });
  }, closeDisclosure() {
    l.value !== 1 && (l.value = 1);
  }, close(i) {
    a.closeDisclosure();
    let u = (() => i ? i instanceof HTMLElement ? i : i.value instanceof HTMLElement ? j(i) : j(a.button) : j(a.button))();
    u == null || u.focus();
  } };
  return fe(hs, a), No(B(() => ue(l.value, { [0]: se.Open, [1]: se.Closed }))), () => {
    let { defaultOpen: i, ...u } = e, c = { open: l.value === 0, close: a.close };
    return te({ theirProps: u, ourProps: {}, slot: c, slots: t, attrs: o, name: "Disclosure" });
  };
} }), xl = D({ name: "DisclosureButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-disclosure-button-${pe()}` } }, setup(e, { attrs: t, slots: o, expose: l }) {
  let s = Wo("DisclosureButton");
  Z(() => {
    s.buttonId.value = e.id;
  }), re(() => {
    s.buttonId.value = null;
  });
  let n = _r(), a = B(() => n === null ? !1 : n.value === s.panelId.value), i = x(null);
  l({ el: i, $el: i }), a.value || ve(() => {
    s.button.value = i.value;
  });
  let u = Ho(B(() => ({ as: e.as, type: t.type })), i);
  function c() {
    var y;
    e.disabled || (a.value ? (s.toggleDisclosure(), (y = j(s.button)) == null || y.focus()) : s.toggleDisclosure());
  }
  function h(y) {
    var g;
    if (!e.disabled)
      if (a.value)
        switch (y.key) {
          case ae.Space:
          case ae.Enter:
            y.preventDefault(), y.stopPropagation(), s.toggleDisclosure(), (g = j(s.button)) == null || g.focus();
            break;
        }
      else
        switch (y.key) {
          case ae.Space:
          case ae.Enter:
            y.preventDefault(), y.stopPropagation(), s.toggleDisclosure();
            break;
        }
  }
  function w(y) {
    switch (y.key) {
      case ae.Space:
        y.preventDefault();
        break;
    }
  }
  return () => {
    let y = { open: s.disclosureState.value === 0 }, { id: g, ...m } = e, f = a.value ? { ref: i, type: u.value, onClick: c, onKeydown: h } : { id: g, ref: i, type: u.value, "aria-expanded": e.disabled ? void 0 : s.disclosureState.value === 0, "aria-controls": j(s.panel) ? s.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onClick: c, onKeydown: h, onKeyup: w };
    return te({ ourProps: f, theirProps: m, slot: y, attrs: t, slots: o, name: "DisclosureButton" });
  };
} }), Vl = D({ name: "DisclosurePanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-disclosure-panel-${pe()}` } }, setup(e, { attrs: t, slots: o, expose: l }) {
  let s = Wo("DisclosurePanel");
  Z(() => {
    s.panelId.value = e.id;
  }), re(() => {
    s.panelId.value = null;
  }), l({ el: s.panel, $el: s.panel }), fe(ms, s.panelId);
  let n = mt(), a = B(() => n !== null ? (n.value & se.Open) === se.Open : s.disclosureState.value === 0);
  return () => {
    let i = { open: s.disclosureState.value === 0, close: s.close }, { id: u, ...c } = e, h = { id: u, ref: s.panel };
    return te({ ourProps: h, theirProps: c, slot: i, attrs: t, slots: o, features: Be.RenderStrategy | Be.Static, visible: a.value, name: "DisclosurePanel" });
  };
} });
var $r = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))($r || {});
let gs = Symbol("PopoverContext");
function oo(e) {
  let t = de(gs, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <${lo.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, oo), o;
  }
  return t;
}
let bs = Symbol("PopoverGroupContext");
function ys() {
  return de(bs, null);
}
let ws = Symbol("PopoverPanelContext");
function xr() {
  return de(ws, null);
}
let lo = D({ name: "Popover", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: o, expose: l }) {
  var s;
  let n = x(null);
  l({ el: n, $el: n });
  let a = x(1), i = x(null), u = x(null), c = x(null), h = x(null), w = B(() => we(n)), y = B(() => {
    var b, V;
    if (!j(i) || !j(h))
      return !1;
    for (let P of document.querySelectorAll("body > *"))
      if (Number(P == null ? void 0 : P.contains(j(i))) ^ Number(P == null ? void 0 : P.contains(j(h))))
        return !0;
    let $ = Xt(), E = $.indexOf(j(i)), I = (E + $.length - 1) % $.length, R = (E + 1) % $.length, T = $[I], M = $[R];
    return !((b = j(h)) != null && b.contains(T)) && !((V = j(h)) != null && V.contains(M));
  }), g = { popoverState: a, buttonId: x(null), panelId: x(null), panel: h, button: i, isPortalled: y, beforePanelSentinel: u, afterPanelSentinel: c, togglePopover() {
    a.value = ue(a.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    a.value !== 1 && (a.value = 1);
  }, close(b) {
    g.closePopover();
    let V = (() => b ? b instanceof HTMLElement ? b : b.value instanceof HTMLElement ? j(b) : j(g.button) : j(g.button))();
    V == null || V.focus();
  } };
  fe(gs, g), No(B(() => ue(a.value, { [0]: se.Open, [1]: se.Closed })));
  let m = { buttonId: g.buttonId, panelId: g.panelId, close() {
    g.closePopover();
  } }, f = ys(), v = f == null ? void 0 : f.registerPopover;
  function _() {
    var b, V, $, E;
    return (E = f == null ? void 0 : f.isFocusWithinPopoverGroup()) != null ? E : ((b = w.value) == null ? void 0 : b.activeElement) && (((V = j(i)) == null ? void 0 : V.contains(w.value.activeElement)) || (($ = j(h)) == null ? void 0 : $.contains(w.value.activeElement)));
  }
  return ve(() => v == null ? void 0 : v(m)), Uo((s = w.value) == null ? void 0 : s.defaultView, "focus", (b) => {
    var V, $;
    a.value === 0 && (_() || i && h && b.target !== window && ((V = j(g.beforePanelSentinel)) != null && V.contains(b.target) || ($ = j(g.afterPanelSentinel)) != null && $.contains(b.target) || g.closePopover()));
  }, !0), Jl([i, h], (b, V) => {
    var $;
    g.closePopover(), Xl(V, qo.Loose) || (b.preventDefault(), ($ = j(i)) == null || $.focus());
  }, B(() => a.value === 0)), () => {
    let b = { open: a.value === 0, close: g.close };
    return te({ theirProps: e, ourProps: { ref: n }, slot: b, slots: t, attrs: o, name: "Popover" });
  };
} }), Zo = D({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-popover-button-${pe()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: l }) {
  let s = oo("PopoverButton"), n = B(() => we(s.button));
  l({ el: s.button, $el: s.button }), Z(() => {
    s.buttonId.value = e.id;
  }), re(() => {
    s.buttonId.value = null;
  });
  let a = ys(), i = a == null ? void 0 : a.closeOthers, u = xr(), c = B(() => u === null ? !1 : u.value === s.panelId.value), h = x(null), w = `headlessui-focus-sentinel-${pe()}`;
  c.value || ve(() => {
    s.button.value = h.value;
  });
  let y = Ho(B(() => ({ as: e.as, type: t.type })), h);
  function g(_) {
    var b, V, $, E, I;
    if (c.value) {
      if (s.popoverState.value === 1)
        return;
      switch (_.key) {
        case ae.Space:
        case ae.Enter:
          _.preventDefault(), (V = (b = _.target).click) == null || V.call(b), s.closePopover(), ($ = j(s.button)) == null || $.focus();
          break;
      }
    } else
      switch (_.key) {
        case ae.Space:
        case ae.Enter:
          _.preventDefault(), _.stopPropagation(), s.popoverState.value === 1 && (i == null || i(s.buttonId.value)), s.togglePopover();
          break;
        case ae.Escape:
          if (s.popoverState.value !== 0)
            return i == null ? void 0 : i(s.buttonId.value);
          if (!j(s.button) || (E = n.value) != null && E.activeElement && !((I = j(s.button)) != null && I.contains(n.value.activeElement)))
            return;
          _.preventDefault(), _.stopPropagation(), s.closePopover();
          break;
      }
  }
  function m(_) {
    c.value || _.key === ae.Space && _.preventDefault();
  }
  function f(_) {
    var b, V;
    e.disabled || (c.value ? (s.closePopover(), (b = j(s.button)) == null || b.focus()) : (_.preventDefault(), _.stopPropagation(), s.popoverState.value === 1 && (i == null || i(s.buttonId.value)), s.togglePopover(), (V = j(s.button)) == null || V.focus()));
  }
  function v(_) {
    _.preventDefault(), _.stopPropagation();
  }
  return () => {
    let _ = s.popoverState.value === 0, b = { open: _ }, { id: V, ...$ } = e, E = c.value ? { ref: h, type: y.value, onKeydown: g, onClick: f } : { ref: h, id: V, type: y.value, "aria-expanded": e.disabled ? void 0 : s.popoverState.value === 0, "aria-controls": j(s.panel) ? s.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onKeydown: g, onKeyup: m, onClick: f, onMousedown: v }, I = Yo();
    function R() {
      let T = j(s.panel);
      if (!T)
        return;
      function M() {
        ue(I.value, { [ye.Forwards]: () => be(T, ie.First), [ye.Backwards]: () => be(T, ie.Last) }) === it.Error && be(Xt().filter((P) => P.dataset.headlessuiFocusGuard !== "true"), ue(I.value, { [ye.Forwards]: ie.Next, [ye.Backwards]: ie.Previous }), { relativeTo: j(s.button) });
      }
      M();
    }
    return oe(F, [te({ ourProps: E, theirProps: { ...t, ...$ }, slot: b, attrs: t, slots: o, name: "PopoverButton" }), _ && !c.value && s.isPortalled.value && oe(Ge, { id: w, features: Fe.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: R })]);
  };
} });
D({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(e, { attrs: t, slots: o }) {
  let l = oo("PopoverOverlay"), s = `headlessui-popover-overlay-${pe()}`, n = mt(), a = B(() => n !== null ? (n.value & se.Open) === se.Open : l.popoverState.value === 0);
  function i() {
    l.closePopover();
  }
  return () => {
    let u = { open: l.popoverState.value === 0 };
    return te({ ourProps: { id: s, "aria-hidden": !0, onClick: i }, theirProps: e, slot: u, attrs: t, slots: o, features: Be.RenderStrategy | Be.Static, visible: a.value, name: "PopoverOverlay" });
  };
} });
let Go = D({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-popover-panel-${pe()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: l }) {
  let { focus: s } = e, n = oo("PopoverPanel"), a = B(() => we(n.panel)), i = `headlessui-focus-sentinel-before-${pe()}`, u = `headlessui-focus-sentinel-after-${pe()}`;
  l({ el: n.panel, $el: n.panel }), Z(() => {
    n.panelId.value = e.id;
  }), re(() => {
    n.panelId.value = null;
  }), fe(ws, n.panelId), ve(() => {
    var v, _;
    if (!s || n.popoverState.value !== 0 || !n.panel)
      return;
    let b = (v = a.value) == null ? void 0 : v.activeElement;
    (_ = j(n.panel)) != null && _.contains(b) || be(j(n.panel), ie.First);
  });
  let c = mt(), h = B(() => c !== null ? (c.value & se.Open) === se.Open : n.popoverState.value === 0);
  function w(v) {
    var _, b;
    switch (v.key) {
      case ae.Escape:
        if (n.popoverState.value !== 0 || !j(n.panel) || a.value && !((_ = j(n.panel)) != null && _.contains(a.value.activeElement)))
          return;
        v.preventDefault(), v.stopPropagation(), n.closePopover(), (b = j(n.button)) == null || b.focus();
        break;
    }
  }
  function y(v) {
    var _, b, V, $, E;
    let I = v.relatedTarget;
    I && j(n.panel) && ((_ = j(n.panel)) != null && _.contains(I) || (n.closePopover(), ((V = (b = j(n.beforePanelSentinel)) == null ? void 0 : b.contains) != null && V.call(b, I) || (E = ($ = j(n.afterPanelSentinel)) == null ? void 0 : $.contains) != null && E.call($, I)) && I.focus({ preventScroll: !0 })));
  }
  let g = Yo();
  function m() {
    let v = j(n.panel);
    if (!v)
      return;
    function _() {
      ue(g.value, { [ye.Forwards]: () => {
        var b;
        be(v, ie.First) === it.Error && ((b = j(n.afterPanelSentinel)) == null || b.focus());
      }, [ye.Backwards]: () => {
        var b;
        (b = j(n.button)) == null || b.focus({ preventScroll: !0 });
      } });
    }
    _();
  }
  function f() {
    let v = j(n.panel);
    if (!v)
      return;
    function _() {
      ue(g.value, { [ye.Forwards]: () => {
        let b = j(n.button), V = j(n.panel);
        if (!b)
          return;
        let $ = Xt(), E = $.indexOf(b), I = $.slice(0, E + 1), R = [...$.slice(E + 1), ...I];
        for (let T of R.slice())
          if (T.dataset.headlessuiFocusGuard === "true" || V != null && V.contains(T)) {
            let M = R.indexOf(T);
            M !== -1 && R.splice(M, 1);
          }
        be(R, ie.First, { sorted: !1 });
      }, [ye.Backwards]: () => {
        var b;
        be(v, ie.Previous) === it.Error && ((b = j(n.button)) == null || b.focus());
      } });
    }
    _();
  }
  return () => {
    let v = { open: n.popoverState.value === 0, close: n.close }, { id: _, focus: b, ...V } = e, $ = { ref: n.panel, id: _, onKeydown: w, onFocusout: s && n.popoverState.value === 0 ? y : void 0, tabIndex: -1 };
    return te({ ourProps: $, theirProps: { ...t, ...V }, attrs: t, slot: v, slots: { ...o, default: (...E) => {
      var I;
      return [oe(F, [h.value && n.isPortalled.value && oe(Ge, { id: i, ref: n.beforePanelSentinel, features: Fe.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: m }), (I = o.default) == null ? void 0 : I.call(o, ...E), h.value && n.isPortalled.value && oe(Ge, { id: u, ref: n.afterPanelSentinel, features: Fe.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: f })])];
    } }, features: Be.RenderStrategy | Be.Static, visible: h.value, name: "PopoverPanel" });
  };
} });
D({ name: "PopoverGroup", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: o, expose: l }) {
  let s = x(null), n = Dl([]), a = B(() => we(s));
  l({ el: s, $el: s });
  function i(w) {
    let y = n.value.indexOf(w);
    y !== -1 && n.value.splice(y, 1);
  }
  function u(w) {
    return n.value.push(w), () => {
      i(w);
    };
  }
  function c() {
    var w;
    let y = a.value;
    if (!y)
      return !1;
    let g = y.activeElement;
    return (w = j(s)) != null && w.contains(g) ? !0 : n.value.some((m) => {
      var f, v;
      return ((f = y.getElementById(m.buttonId.value)) == null ? void 0 : f.contains(g)) || ((v = y.getElementById(m.panelId.value)) == null ? void 0 : v.contains(g));
    });
  }
  function h(w) {
    for (let y of n.value)
      y.buttonId.value !== w && y.close();
  }
  return fe(bs, { registerPopover: u, unregisterPopover: i, isFocusWithinPopoverGroup: c, closeOthers: h }), () => te({ ourProps: { ref: s }, theirProps: e, slot: {}, attrs: t, slots: o, name: "PopoverGroup" });
} });
let _s = Symbol("LabelContext");
function $s() {
  let e = de(_s, null);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, $s), t;
  }
  return e;
}
function Ko({ slot: e = {}, name: t = "Label", props: o = {} } = {}) {
  let l = x([]);
  function s(n) {
    return l.value.push(n), () => {
      let a = l.value.indexOf(n);
      a !== -1 && l.value.splice(a, 1);
    };
  }
  return fe(_s, { register: s, slot: e, name: t, props: o }), B(() => l.value.length > 0 ? l.value.join(" ") : void 0);
}
let xs = D({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-label-${pe()}` } }, setup(e, { slots: t, attrs: o }) {
  let l = $s();
  return Z(() => re(l.register(e.id))), () => {
    let { name: s = "Label", slot: n = {}, props: a = {} } = l, { id: i, passive: u, ...c } = e, h = { ...Object.entries(a).reduce((w, [y, g]) => Object.assign(w, { [y]: O(g) }), {}), id: i };
    return u && (delete h.onClick, delete h.htmlFor, delete c.onClick), te({ ourProps: h, theirProps: c, slot: n, attrs: o, slots: t, name: s });
  };
} });
function Vr(e, t) {
  return e === t;
}
let Vs = Symbol("RadioGroupContext");
function ks(e) {
  let t = de(Vs, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, ks), o;
  }
  return t;
}
let kr = D({ name: "RadioGroup", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "div" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => Vr }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-radiogroup-${pe()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: o, slots: l, expose: s }) {
  let n = x(null), a = x([]), i = Ko({ name: "RadioGroupLabel" }), u = Qt({ name: "RadioGroupDescription" });
  s({ el: n, $el: n });
  let [c, h] = ss(B(() => e.modelValue), (m) => t("update:modelValue", m), B(() => e.defaultValue)), w = { options: a, value: c, disabled: B(() => e.disabled), firstOption: B(() => a.value.find((m) => !m.propsRef.disabled)), containsCheckedOption: B(() => a.value.some((m) => w.compare(Ue(m.propsRef.value), Ue(e.modelValue)))), compare(m, f) {
    if (typeof e.by == "string") {
      let v = e.by;
      return (m == null ? void 0 : m[v]) === (f == null ? void 0 : f[v]);
    }
    return e.by(m, f);
  }, change(m) {
    var f;
    if (e.disabled || w.compare(Ue(c.value), Ue(m)))
      return !1;
    let v = (f = a.value.find((_) => w.compare(Ue(_.propsRef.value), Ue(m)))) == null ? void 0 : f.propsRef;
    return v != null && v.disabled ? !1 : (h(m), !0);
  }, registerOption(m) {
    a.value.push(m), a.value = Ql(a.value, (f) => f.element);
  }, unregisterOption(m) {
    let f = a.value.findIndex((v) => v.id === m);
    f !== -1 && a.value.splice(f, 1);
  } };
  fe(Vs, w), Ga({ container: B(() => j(n)), accept(m) {
    return m.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : m.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(m) {
    m.setAttribute("role", "none");
  } });
  function y(m) {
    if (!n.value || !n.value.contains(m.target))
      return;
    let f = a.value.filter((v) => v.propsRef.disabled === !1).map((v) => v.element);
    switch (m.key) {
      case ae.Enter:
        ls(m.currentTarget);
        break;
      case ae.ArrowLeft:
      case ae.ArrowUp:
        if (m.preventDefault(), m.stopPropagation(), be(f, ie.Previous | ie.WrapAround) === it.Success) {
          let v = a.value.find((_) => {
            var b;
            return _.element === ((b = we(n)) == null ? void 0 : b.activeElement);
          });
          v && w.change(v.propsRef.value);
        }
        break;
      case ae.ArrowRight:
      case ae.ArrowDown:
        if (m.preventDefault(), m.stopPropagation(), be(f, ie.Next | ie.WrapAround) === it.Success) {
          let v = a.value.find((_) => {
            var b;
            return _.element === ((b = we(_.element)) == null ? void 0 : b.activeElement);
          });
          v && w.change(v.propsRef.value);
        }
        break;
      case ae.Space:
        {
          m.preventDefault(), m.stopPropagation();
          let v = a.value.find((_) => {
            var b;
            return _.element === ((b = we(_.element)) == null ? void 0 : b.activeElement);
          });
          v && w.change(v.propsRef.value);
        }
        break;
    }
  }
  let g = B(() => {
    var m;
    return (m = j(n)) == null ? void 0 : m.closest("form");
  });
  return Z(() => {
    ee([g], () => {
      if (!g.value || e.defaultValue === void 0)
        return;
      function m() {
        w.change(e.defaultValue);
      }
      return g.value.addEventListener("reset", m), () => {
        var f;
        (f = g.value) == null || f.removeEventListener("reset", m);
      };
    }, { immediate: !0 });
  }), () => {
    let { disabled: m, name: f, id: v, ..._ } = e, b = { ref: n, id: v, role: "radiogroup", "aria-labelledby": i.value, "aria-describedby": u.value, onKeydown: y };
    return oe(F, [...f != null && c.value != null ? es({ [f]: c.value }).map(([V, $]) => oe(Ge, Gl({ features: Fe.Hidden, key: V, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: V, value: $ }))) : [], te({ ourProps: b, theirProps: { ...o, ...Kt(_, ["modelValue", "defaultValue"]) }, slot: {}, attrs: o, slots: l, name: "RadioGroup" })]);
  };
} });
var Cr = ((e) => (e[e.Empty = 1] = "Empty", e[e.Active = 2] = "Active", e))(Cr || {});
let Sr = D({ name: "RadioGroupOption", props: { as: { type: [Object, String], default: "div" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-radiogroup-option-${pe()}` } }, setup(e, { attrs: t, slots: o, expose: l }) {
  let s = ks("RadioGroupOption"), n = Ko({ name: "RadioGroupLabel" }), a = Qt({ name: "RadioGroupDescription" }), i = x(null), u = B(() => ({ value: e.value, disabled: e.disabled })), c = x(1);
  l({ el: i, $el: i }), Z(() => s.registerOption({ id: e.id, element: i, propsRef: u })), re(() => s.unregisterOption(e.id));
  let h = B(() => {
    var _;
    return ((_ = s.firstOption.value) == null ? void 0 : _.id) === e.id;
  }), w = B(() => s.disabled.value || e.disabled), y = B(() => s.compare(Ue(s.value.value), Ue(e.value))), g = B(() => w.value ? -1 : y.value || !s.containsCheckedOption.value && h.value ? 0 : -1);
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
    let { id: _, value: b, disabled: V, ...$ } = e, E = { checked: y.value, disabled: w.value, active: Boolean(c.value & 2) }, I = { id: _, ref: i, role: "radio", "aria-checked": y.value ? "true" : "false", "aria-labelledby": n.value, "aria-describedby": a.value, "aria-disabled": w.value ? !0 : void 0, tabIndex: g.value, onClick: w.value ? void 0 : m, onFocus: w.value ? void 0 : f, onBlur: w.value ? void 0 : v };
    return te({ ourProps: I, theirProps: $, slot: E, attrs: t, slots: o, name: "RadioGroupOption" });
  };
} }), kl = xs, Pr = dr, Cs = Symbol("GroupContext"), Or = D({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: o }) {
  let l = x(null), s = Ko({ name: "SwitchLabel", props: { htmlFor: B(() => {
    var a;
    return (a = l.value) == null ? void 0 : a.id;
  }), onClick(a) {
    l.value && (a.currentTarget.tagName === "LABEL" && a.preventDefault(), l.value.click(), l.value.focus({ preventScroll: !0 }));
  } } }), n = Qt({ name: "SwitchDescription" });
  return fe(Cs, { switchRef: l, labelledby: s, describedby: n }), () => te({ theirProps: e, ourProps: {}, slot: {}, slots: t, attrs: o, name: "SwitchGroup" });
} }), Lr = D({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: !0 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-switch-${pe()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: o, slots: l, expose: s }) {
  let n = de(Cs, null), [a, i] = ss(B(() => e.modelValue), (v) => t("update:modelValue", v), B(() => e.defaultChecked));
  function u() {
    i(!a.value);
  }
  let c = x(null), h = n === null ? c : n.switchRef, w = Ho(B(() => ({ as: e.as, type: o.type })), h);
  s({ el: h, $el: h });
  function y(v) {
    v.preventDefault(), u();
  }
  function g(v) {
    v.key === ae.Space ? (v.preventDefault(), u()) : v.key === ae.Enter && ls(v.currentTarget);
  }
  function m(v) {
    v.preventDefault();
  }
  let f = B(() => {
    var v, _;
    return (_ = (v = j(h)) == null ? void 0 : v.closest) == null ? void 0 : _.call(v, "form");
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
    let { id: v, name: _, value: b, ...V } = e, $ = { checked: a.value }, E = { id: v, ref: h, role: "switch", type: w.value, tabIndex: 0, "aria-checked": a.value, "aria-labelledby": n == null ? void 0 : n.labelledby.value, "aria-describedby": n == null ? void 0 : n.describedby.value, onClick: y, onKeyup: g, onKeypress: m };
    return oe(F, [_ != null && a.value != null ? oe(Ge, Gl({ features: Fe.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: a.value, name: _, value: b })) : null, te({ ourProps: E, theirProps: { ...o, ...Kt(V, ["modelValue", "defaultChecked"]) }, slot: $, attrs: o, slots: l, name: "Switch" })]);
  };
} }), Mr = xs;
function Tr(e) {
  let t = { called: !1 };
  return (...o) => {
    if (!t.called)
      return t.called = !0, e(...o);
  };
}
function ho(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Ht(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var Vo = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(Vo || {});
function Dr(e, t) {
  let o = Jt();
  if (!e)
    return o.dispose;
  let { transitionDuration: l, transitionDelay: s } = getComputedStyle(e), [n, a] = [l, s].map((i) => {
    let [u = 0] = i.split(",").filter(Boolean).map((c) => c.includes("ms") ? parseFloat(c) : parseFloat(c) * 1e3).sort((c, h) => h - c);
    return u;
  });
  return n !== 0 ? o.setTimeout(() => t("finished"), n + a) : t("finished"), o.add(() => t("cancelled")), o.dispose;
}
function Cl(e, t, o, l, s, n) {
  let a = Jt(), i = n !== void 0 ? Tr(n) : () => {
  };
  return Ht(e, ...s), ho(e, ...t, ...o), a.nextFrame(() => {
    Ht(e, ...o), ho(e, ...l), a.add(Dr(e, (u) => (Ht(e, ...l, ...t), ho(e, ...s), i(u))));
  }), a.add(() => Ht(e, ...t, ...o, ...l, ...s)), a.add(() => i("cancelled")), a.dispose;
}
function ot(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Xo = Symbol("TransitionContext");
var Er = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Er || {});
function Br() {
  return de(Xo, null) !== null;
}
function Ir() {
  let e = de(Xo, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function zr() {
  let e = de(Qo, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let Qo = Symbol("NestingContext");
function so(e) {
  return "children" in e ? so(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Ss(e) {
  let t = x([]), o = x(!1);
  Z(() => o.value = !0), re(() => o.value = !1);
  function l(n, a = We.Hidden) {
    let i = t.value.findIndex(({ id: u }) => u === n);
    i !== -1 && (ue(a, { [We.Unmount]() {
      t.value.splice(i, 1);
    }, [We.Hidden]() {
      t.value[i].state = "hidden";
    } }), !so(t) && o.value && (e == null || e()));
  }
  function s(n) {
    let a = t.value.find(({ id: i }) => i === n);
    return a ? a.state !== "visible" && (a.state = "visible") : t.value.push({ id: n, state: "visible" }), () => l(n, We.Unmount);
  }
  return { children: t, register: s, unregister: l };
}
let Ps = Be.RenderStrategy, Ke = D({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: o, slots: l, expose: s }) {
  let n = x(0);
  function a() {
    n.value |= se.Opening, t("beforeEnter");
  }
  function i() {
    n.value &= ~se.Opening, t("afterEnter");
  }
  function u() {
    n.value |= se.Closing, t("beforeLeave");
  }
  function c() {
    n.value &= ~se.Closing, t("afterLeave");
  }
  if (!Br() && Ya())
    return () => oe(At, { ...e, onBeforeEnter: a, onAfterEnter: i, onBeforeLeave: u, onAfterLeave: c }, l);
  let h = x(null), w = x("visible"), y = B(() => e.unmount ? We.Unmount : We.Hidden);
  s({ el: h, $el: h });
  let { show: g, appear: m } = Ir(), { register: f, unregister: v } = zr(), _ = { value: !0 }, b = pe(), V = { value: !1 }, $ = Ss(() => {
    !V.value && w.value !== "hidden" && (w.value = "hidden", v(b), c());
  });
  Z(() => {
    let H = f(b);
    re(H);
  }), ve(() => {
    if (y.value === We.Hidden && b) {
      if (g && w.value !== "visible") {
        w.value = "visible";
        return;
      }
      ue(w.value, { hidden: () => v(b), visible: () => f(b) });
    }
  });
  let E = ot(e.enter), I = ot(e.enterFrom), R = ot(e.enterTo), T = ot(e.entered), M = ot(e.leave), P = ot(e.leaveFrom), A = ot(e.leaveTo);
  Z(() => {
    ve(() => {
      if (w.value === "visible") {
        let H = j(h);
        if (H instanceof Comment && H.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function q(H) {
    let Y = _.value && !m.value, W = j(h);
    !W || !(W instanceof HTMLElement) || Y || (V.value = !0, g.value && a(), g.value || u(), H(g.value ? Cl(W, E, I, R, T, (U) => {
      V.value = !1, U === Vo.Finished && i();
    }) : Cl(W, M, P, A, T, (U) => {
      V.value = !1, U === Vo.Finished && (so($) || (w.value = "hidden", v(b), c()));
    })));
  }
  return Z(() => {
    ee([g], (H, Y, W) => {
      q(W), _.value = !1;
    }, { immediate: !0 });
  }), fe(Qo, $), No(B(() => ue(w.value, { visible: se.Open, hidden: se.Closed }) | n.value)), () => {
    let { appear: H, show: Y, enter: W, enterFrom: U, enterTo: G, entered: ce, leave: Q, leaveFrom: $e, leaveTo: je, ...Oe } = e, qe = { ref: h }, Le = { ...Oe, ...m && g && It.isServer ? { class: L([o.class, Oe.class, ...E, ...I]) } : {} };
    return te({ theirProps: Le, ourProps: qe, slot: {}, slots: l, attrs: o, features: Ps, visible: w.value === "visible", name: "TransitionChild" });
  };
} }), Ar = Ke, At = D({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: o, slots: l }) {
  let s = mt(), n = B(() => e.show === null && s !== null ? (s.value & se.Open) === se.Open : e.show);
  ve(() => {
    if (![!0, !1].includes(n.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let a = x(n.value ? "visible" : "hidden"), i = Ss(() => {
    a.value = "hidden";
  }), u = x(!0), c = { show: n, appear: B(() => e.appear || !u.value) };
  return Z(() => {
    ve(() => {
      u.value = !1, n.value ? a.value = "visible" : so(i) || (a.value = "hidden");
    });
  }), fe(Qo, i), fe(Xo, c), () => {
    let h = Kt(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), w = { unmount: e.unmount };
    return te({ ourProps: { ...w, as: "template" }, theirProps: {}, slot: {}, slots: { ...l, default: () => [oe(Ar, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...o, ...w, ...h }, l.default)] }, attrs: {}, features: Ps, visible: a.value === "visible", name: "Transition" });
  };
} });
const jr = {
  key: 0,
  class: "po-text-sm po-font-normal po-text-slate-400 po-select-none po-block po-text-left po-pt-5"
}, Rr = { class: "po-grid po-grid-cols-3" }, Fr = { class: "po-bg-white hover:po-bg-slate-200 po-rounded-xl po-p-2 po-transition-colors po-duration-150 po-ease-in" }, Nr = ["href", "target"], Hr = { class: "po-flex po-w-14 po-h-14 po-items-center po-justify-center po-duration-100 po-ease-in-out po-overflow-hidden" }, qr = ["innerHTML"], Yr = { class: "po-text-slate-500 po-font-normal po-text-sm po-text-center" }, Sl = /* @__PURE__ */ D({
  __name: "appList",
  props: {
    list: { default: () => [] },
    openInNewTab: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, o) => (p(!0), d(F, null, X(t.list, (l) => (p(), d("div", null, [
      l.groupName.length > 0 ? (p(), d("span", jr, k(l.groupName), 1)) : C("", !0),
      r("ul", Rr, [
        (p(!0), d(F, null, X(l.apps, (s) => (p(), d("li", Fr, [
          r("a", {
            href: s.url,
            target: t.openInNewTab ? "_blank" : "_self",
            class: "po-flex po-flex-col po-group po-justify-center po-items-center"
          }, [
            r("span", Hr, [
              r("span", {
                class: "po-w-9",
                innerHTML: s.icon
              }, null, 8, qr)
            ]),
            r("span", Yr, k(s.name), 1)
          ], 8, Nr)
        ]))), 256))
      ])
    ]))), 256));
  }
}), Ur = {
  name: "PoAppTray"
}, Wr = /* @__PURE__ */ D({
  ...Ur,
  props: {
    appList: { default: null },
    justApps: { type: Boolean, default: !1 },
    openInNewTab: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, o = ["", "Internal"], l = B(() => {
      const s = [];
      return t.appList && o.forEach((n) => {
        const a = t.appList.filter((i) => i.group === n);
        a.length > 0 && s.push({
          groupName: n,
          apps: a
        });
      }), s;
    });
    return (s, n) => s.justApps ? (p(), N(Sl, {
      key: 1,
      list: l.value,
      "open-in-new-tab": s.openInNewTab
    }, null, 8, ["list", "open-in-new-tab"])) : (p(), N(O(lo), { key: 0 }, {
      default: z(({ open: a }) => [
        S(O(Zo), {
          class: L([a ? "" : "po-text-opacity-90", "po-block po-w-6 po-text-slate-100 genie-effect po-z-50 po-outline-none"])
        }, {
          default: z(() => [
            S(O(mn))
          ]),
          _: 2
        }, 1032, ["class"]),
        S(Ze, {
          "enter-active-class": "po-transition po-duration-200 po-ease-out",
          "enter-from-class": "po-translate-y-1 po-opacity-0",
          "enter-to-class": "po-translate-y-0 po-opacity-100",
          "leave-active-class": "po-transition po-duration-150 po-ease-in",
          "leave-from-class": "po-translate-y-0 po-opacity-100",
          "leave-to-class": "po-translate-y-1 po-opacity-0"
        }, {
          default: z(() => [
            S(O(Go), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
              default: z(() => [
                S(Sl, {
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
}), Zr = {
  key: 0,
  class: "po-absolute po-right-0 po-w-3 po-h-3 po-bg-mpao-orange po-rounded-full po-border-2 po-border-mpao-blue"
}, Gr = {
  key: 0,
  class: "po-space-y-2"
}, Kr = ["onClick"], Xr = { class: "po-flex po-items-center po-justify-between" }, Qr = { class: "po-text-sm po-text-left po-font-semibold po-text-slate-700 po-grow po-flex po-space-x-2 po-items-center" }, Jr = { class: "po-grow" }, ei = {
  key: 0,
  class: "po-w-[6px] po-h-[6px] po-rounded-full po-shrink-0 po-bg-mpao-orange po-animate-pulse"
}, ti = { class: "po-text-xs po-font-normal po-text-slate-400 po-shrink-0" }, oi = { class: "po-block po-text-sm po-text-slate-500 po-pb-3 po-text-left" }, li = {
  key: 1,
  class: "po-text-sm po-text-slate-500 po-py-10 po-text-center po-block"
}, si = {
  name: "PoNotificationHub"
}, ni = /* @__PURE__ */ D({
  ...si,
  props: {
    notifications: { default: null },
    hasNewNotifications: { type: Boolean, default: !1 }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, l) => (p(), N(O(lo), null, {
      default: z(({ open: s }) => [
        S(O(Zo), {
          class: L([s ? "" : "text-opacity-90", "po-block po-w-6 po-text-slate-100 genie-effect po-relative po-z-50 po-outline-none"])
        }, {
          default: z(() => [
            o.hasNewNotifications ? (p(), d("span", Zr)) : C("", !0),
            S(O(an), { class: "po-stroke-current" })
          ]),
          _: 2
        }, 1032, ["class"]),
        S(Ze, {
          "enter-active-class": "po-transition po-duration-200 po-ease-out",
          "enter-from-class": "po-translate-y-1 po-opacity-0",
          "enter-to-class": "po-translate-y-0 po-opacity-100",
          "leave-active-class": "po-transition po-duration-150 po-ease-in",
          "leave-from-class": "po-translate-y-0 po-opacity-100",
          "leave-to-class": "po-translate-y-1 po-opacity-0"
        }, {
          default: z(() => [
            S(O(Go), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
              default: z(() => [
                o.notifications !== null && o.notifications.length > 0 ? (p(), d("ul", Gr, [
                  (p(!0), d(F, null, X(o.notifications, (n) => (p(), d("li", {
                    role: "button",
                    class: "po-space-y-2 po-p-2 po-rounded-lg po-bg-white hover:po-bg-slate-100 po-border po-border-slate-100",
                    onClick: le((a) => o.$emit("button-click", n.name), ["prevent"])
                  }, [
                    r("span", Xr, [
                      r("p", Qr, [
                        r("span", Jr, k(n.name), 1),
                        n.seen ? C("", !0) : (p(), d("span", ei))
                      ]),
                      r("span", ti, k(n.time), 1)
                    ]),
                    r("span", oi, k(n.text), 1)
                  ], 8, Kr))), 256))
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
}), ai = {
  key: 0,
  class: "po-hidden lg:po-block po-text-sky-50 po-text-sm po-shrink-0 po-pr-3 po-truncate po-max-w-[140px] po-overflow-hidden"
}, ri = {
  key: 1,
  class: "po-px-3 po-bg-gradient-to-br po-from-slate-50 po-to-blue-100 po-py-1 po-rounded-l-md po-w-[100px] po-flex po-items-center po-justify-center po-text-center"
}, ii = ["src"], pi = ["src", "alt"], ui = {
  key: 1,
  class: "po-text-xs po-text-white po-font-semibold"
}, di = { class: "po-pb-5" }, ci = ["src"], fi = {
  key: 2,
  class: "po-block po-text-sm po-text-slate-400 po-italic"
}, vi = { key: 0 }, hi = { key: 1 }, mi = /* @__PURE__ */ r("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), gi = { class: "po-space-y-2 po-py-2 po-max-h-[250px] po-overflow-y-auto" }, bi = ["onClick"], yi = { class: "po-w-5" }, wi = { class: "" }, _i = { class: "po-block po-text-sm po-font-normal" }, $i = {
  key: 0,
  class: "po-text-left po-block po-text-xs po-text-slate-400"
}, xi = /* @__PURE__ */ r("div", { class: "po-h-[2px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), Vi = { class: "md:po-grid po-grid-cols-2 po-space-x-1 po-pt-2" }, ki = { class: "po-w-5" }, Ci = /* @__PURE__ */ r("span", { class: "po-text-sm po-font-normal" }, "Profile", -1), Si = { class: "po-w-5" }, Pi = /* @__PURE__ */ r("span", { class: "po-text-sm po-font-normal" }, "Logout", -1), Oi = /* @__PURE__ */ r("div", { class: "po-text-xs po-space-x-3 po-text-center po-pt-3" }, [
  /* @__PURE__ */ r("a", {
    href: "",
    class: "po-text-slate-500 hover:po-text-mpao-lightblue"
  }, "Privacy Policy"),
  /* @__PURE__ */ r("a", {
    href: "",
    class: "po-text-slate-500 hover:po-text-mpao-lightblue"
  }, "Terms of Service")
], -1), Li = {
  name: "PoProfileSwitcher"
}, Mi = /* @__PURE__ */ D({
  ...Li,
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
    const s = x({
      name: "",
      initials: "",
      image: ""
    });
    function n(w) {
      var y, g;
      return w ? ((g = (y = w.match(/\b[A-Z]/g)) == null ? void 0 : y.join("")) == null ? void 0 : g.substring(0, 2)) ?? "" : "";
    }
    const a = B(() => {
      var f, v, _, b, V, $, E, I, R, T;
      const w = [], y = (f = o.userObject) == null ? void 0 : f.transacting_as_organisation, g = (y == null ? void 0 : y.name) || ((v = o.userObject) == null ? void 0 : v.name), m = (y == null ? void 0 : y.logo) || ((_ = o.userObject) == null ? void 0 : _.avatar);
      return s.value = {
        name: g,
        initials: n(g),
        image: m
      }, w.push({
        id: (b = o.userObject) == null ? void 0 : b.id,
        entity_id: (V = o.userObject) == null ? void 0 : V.entity_id,
        name: ($ = o.userObject) == null ? void 0 : $.name,
        identifier: null,
        organisation_uuid: null
      }), ((I = (E = o.userObject) == null ? void 0 : E.organisations) == null ? void 0 : I.length) > 0 && w.push(...(R = o.userObject) == null ? void 0 : R.organisations), w.forEach((M) => {
        M.current = y && Object.keys(y).length > 0 && M.entity_id === y.entity_id;
      }), ((T = o.userObject) == null ? void 0 : T.transacting_as_organisation) === null && (w[0].current = !0), w;
    }), i = x(null), u = x(null), { avatar: c, logo: h } = Ie(o);
    return ee(c, () => {
      i.value = c.value;
    }), ee(h, () => {
      u.value = h.value;
    }), Hs(() => {
      a.value;
    }), Z(() => {
      a.value;
    }), qs(() => {
      a.value;
    }), To(() => {
      a.value;
    }), (w, y) => (p(), N(O(lo), null, {
      default: z(({ open: g }) => [
        r("div", null, [
          S(O(Zo), { class: "po-flex po-items-center po-outline-none" }, {
            default: z(() => [
              u.value ? C("", !0) : (p(), d("span", ai, k(s.value.name), 1)),
              u.value ? (p(), d("span", ri, [
                r("img", {
                  class: "po-h-8",
                  src: u.value,
                  alt: ""
                }, null, 8, ii)
              ])) : C("", !0),
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
                    alt: s.value.name
                  }, null, 8, pi)) : (p(), d("span", ui, k(s.value.initials), 1))
                ], 2)
              ], 2)
            ]),
            _: 2
          }, 1024),
          S(Ze, {
            "enter-active-class": "po-transition po-duration-200 po-ease-out",
            "enter-from-class": "po-translate-y-1 po-opacity-0",
            "enter-to-class": "po-translate-y-0 po-opacity-100",
            "leave-active-class": "po-transition po-duration-150 po-ease-in",
            "leave-from-class": "po-translate-y-0 po-opacity-100",
            "leave-to-class": "po-translate-y-1 po-opacity-0"
          }, {
            default: z(() => [
              S(O(Go), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
                default: z(() => {
                  var m, f, v, _;
                  return [
                    r("div", di, [
                      i.value ? (p(), d("img", {
                        key: 0,
                        class: "po-w-20 po-h-20 po-mx-auto po-rounded-full po-overflow-hidden",
                        src: i.value,
                        alt: ""
                      }, null, 8, ci)) : C("", !0),
                      (m = w.userObject) != null && m.name ? (p(), d("span", {
                        key: 1,
                        class: L(["po-text-base po-text-slate-600 po-font-medium po-block", [{ "po-mt-4": i.value }]])
                      }, k((f = w.userObject) == null ? void 0 : f.name), 3)) : C("", !0),
                      (v = w.userObject) != null && v.name ? (p(), d("span", fi, [
                        s.value.name === ((_ = w.userObject) == null ? void 0 : _.name) ? (p(), d("span", vi, "Self")) : (p(), d("span", hi, "User at " + k(s.value.name), 1))
                      ])) : C("", !0)
                    ]),
                    mi,
                    r("div", gi, [
                      (p(!0), d(F, null, X(a.value, (b, V) => (p(), d("a", {
                        href: "#",
                        onClick: le(($) => l(b), ["prevent"]),
                        class: L(["po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-shadow-sm po-transition-all po-duration-150 po-ease-out hover:po-bg-blue-50", [
                          {
                            " po-bg-white": !b.current
                          },
                          {
                            " po-bg-blue-50 po-shadow-sm": b.current
                          }
                        ]]),
                        role: "button",
                        key: V
                      }, [
                        r("span", yi, [
                          b.isPersonal ? (p(), N(O(pl), {
                            key: 0,
                            class: L([
                              "po-stroke-current",
                              { "po-stroke-mpao-lightblue": b.current }
                            ])
                          }, null, 8, ["class"])) : C("", !0),
                          b.isPersonal ? C("", !0) : (p(), N(O(pn), {
                            key: 1,
                            class: L([
                              "po-stroke-current",
                              { "po-stroke-mpao-lightblue": b.current }
                            ])
                          }, null, 8, ["class"]))
                        ]),
                        r("span", wi, [
                          r("span", _i, k(b.name), 1),
                          b.identifier ? (p(), d("span", $i, k(b.identifier), 1)) : C("", !0)
                        ])
                      ], 10, bi))), 128))
                    ]),
                    xi,
                    r("div", Vi, [
                      r("a", {
                        href: "#",
                        onClick: y[0] || (y[0] = le((b) => w.$emit("button-click", "current-profile"), ["prevent"])),
                        class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-slate-50 hover:po-bg-blue-50 po-transition-all po-duration-150 po-ease-out",
                        role: "button"
                      }, [
                        r("span", ki, [
                          S(O(pl), { class: "po-stroke-current" })
                        ]),
                        Ci
                      ]),
                      r("a", {
                        href: "#",
                        onClick: y[1] || (y[1] = le((b) => w.$emit("button-click", "logout"), ["prevent"])),
                        class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-slate-50 hover:po-bg-blue-50 po-transition-all po-duration-150 po-ease-out",
                        role: "button"
                      }, [
                        r("span", Si, [
                          S(O(sn), { class: "po-stroke-current" })
                        ]),
                        Pi
                      ])
                    ]),
                    Oi
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
}), no = /* @__PURE__ */ D({
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
}), Ti = ["disabled", "aria-disabled"], Di = ["value", "disabled", "aria-disabled"], Ei = {
  name: "PoButton"
}, ao = /* @__PURE__ */ D({
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
    const o = e, l = "po-rounded-md po-transition-colors po-border po-duration-100 po-ease-in-out po-cursor-pointer disabled:po-bg-slate-400 disabled:po-border-slate-400 disabled:po-cursor-default disabled:po-hover:bg-slate-400", s = B(() => {
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
    return (a, i) => (p(), d(F, null, [
      a.isLoading ? (p(), d("span", {
        key: 0,
        class: L([[l, s.value], "po-bg-slate-200 hover:po-bg-slate-200 focus:po-bg-slate-200"])
      }, [
        S(no, {
          "dot-color": "po-bg-slate-500",
          class: "po-relative -po-bottom-[0.2rem]"
        })
      ], 2)) : C("", !0),
      a.type == "button" && !a.isLoading ? (p(), d("button", Te({
        key: 1,
        onClick: i[0] || (i[0] = le((u) => a.$emit("button-click", a.to), ["prevent"])),
        class: [l, s.value, n.value],
        disabled: a.disabled,
        "aria-disabled": a.disabled
      }, a.$attrs), [
        K(a.$slots, "label", {}, () => [
          J(k(a.label), 1)
        ])
      ], 16, Ti)) : C("", !0),
      a.type == "submit" && !a.isLoading ? (p(), d("input", Te({
        key: 2,
        type: "submit",
        class: [l, s.value, n.value],
        value: a.label,
        disabled: a.disabled,
        "aria-disabled": a.disabled
      }, a.$attrs), null, 16, Di)) : C("", !0),
      a.type == "link" && !a.isLoading ? (p(), d("a", Te({
        key: 3,
        href: "#",
        onClick: i[1] || (i[1] = le((u) => a.$emit("button-click", a.to), ["prevent"])),
        class: [l, s.value, n.value]
      }, a.$attrs), [
        K(a.$slots, "label", {}, () => [
          J(k(a.label), 1)
        ])
      ], 16)) : C("", !0),
      a.type == "simple" && !a.isLoading ? (p(), d("a", {
        key: 4,
        href: "#",
        onClick: i[2] || (i[2] = le((u) => a.$emit("button-click", a.to), ["prevent"])),
        class: L(["po-text-sm po-transition-colors po-duration-100 po-ease-in-out po-inline-flex po-items-center po-space-x-1", [
          { "po-text-mpao-lightblue hover:po-text-mpao-midblue": !a.overrideColors }
        ]])
      }, [
        K(a.$slots, "label", {}, () => [
          J(k(a.label), 1)
        ])
      ], 2)) : C("", !0)
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
function Ii(e, t) {
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
function zi(e, t) {
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
function Ai(e, t) {
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
function Ri(e, t) {
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
function Fi(e, t) {
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
function Ni(e, t) {
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
function Hi(e, t) {
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
function qi(e, t) {
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
function Yi(e, t) {
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
function Os(e, t) {
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
  const e = x("");
  return {
    uniqueId: e,
    generateUniqueId: () => {
      const l = `poid_${Math.random().toString(36).slice(2, 11)}`;
      e.value = l;
    }
  };
};
function Ui() {
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
let Yt;
function ko() {
  ko.init || (ko.init = !0, Yt = Ui() !== -1);
}
var ro = {
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
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", Yt && this.$el.appendChild(e), e.data = "about:blank", Yt || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!Yt && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const Wi = /* @__PURE__ */ Ws("data-v-b329ee4c");
Ys("data-v-b329ee4c");
const Zi = {
  class: "resize-observer",
  tabindex: "-1"
};
Us();
const Gi = /* @__PURE__ */ Wi((e, t, o, l, s, n) => (p(), N("div", Zi)));
ro.render = Gi;
ro.__scopeId = "data-v-b329ee4c";
ro.__file = "src/components/ResizeObserver.vue";
function Ut(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ut = function(t) {
    return typeof t;
  } : Ut = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ut(e);
}
function Ki(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Ol(e, t) {
  for (var o = 0; o < t.length; o++) {
    var l = t[o];
    l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(e, l.key, l);
  }
}
function Xi(e, t, o) {
  return t && Ol(e.prototype, t), o && Ol(e, o), e;
}
function Ll(e) {
  return Qi(e) || Ji(e) || ep(e) || tp();
}
function Qi(e) {
  if (Array.isArray(e))
    return Co(e);
}
function Ji(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function ep(e, t) {
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
function tp() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function op(e) {
  var t;
  return typeof e == "function" ? t = {
    callback: e
  } : t = e, t;
}
function lp(e, t) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l, s, n, a = function(u) {
    for (var c = arguments.length, h = new Array(c > 1 ? c - 1 : 0), w = 1; w < c; w++)
      h[w - 1] = arguments[w];
    if (n = h, !(l && u === s)) {
      var y = o.leading;
      typeof y == "function" && (y = y(u, s)), (!l || u !== s) && y && e.apply(void 0, [u].concat(Ll(n))), s = u, clearTimeout(l), l = setTimeout(function() {
        e.apply(void 0, [u].concat(Ll(n))), l = 0;
      }, t);
    }
  };
  return a._clear = function() {
    clearTimeout(l), l = null;
  }, a;
}
function Ls(e, t) {
  if (e === t)
    return !0;
  if (Ut(e) === "object") {
    for (var o in e)
      if (!Ls(e[o], t[o]))
        return !1;
    return !0;
  }
  return !1;
}
var sp = /* @__PURE__ */ function() {
  function e(t, o, l) {
    Ki(this, e), this.el = t, this.observer = null, this.frozen = !1, this.createObserver(o, l);
  }
  return Xi(e, [{
    key: "createObserver",
    value: function(o, l) {
      var s = this;
      if (this.observer && this.destroyObserver(), !this.frozen) {
        if (this.options = op(o), this.callback = function(i, u) {
          s.options.callback(i, u), i && s.options.once && (s.frozen = !0, s.destroyObserver());
        }, this.callback && this.options.throttle) {
          var n = this.options.throttleOptions || {}, a = n.leading;
          this.callback = lp(this.callback, this.options.throttle, {
            leading: function(u) {
              return a === "both" || a === "visible" && u || a === "hidden" && !u;
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
function Ms(e, t, o) {
  var l = t.value;
  if (l)
    if (typeof IntersectionObserver > "u")
      console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");
    else {
      var s = new sp(e, l, o);
      e._vue_visibilityState = s;
    }
}
function np(e, t, o) {
  var l = t.value, s = t.oldValue;
  if (!Ls(l, s)) {
    var n = e._vue_visibilityState;
    if (!l) {
      Ts(e);
      return;
    }
    n ? n.createObserver(l, o) : Ms(e, {
      value: l
    }, o);
  }
}
function Ts(e) {
  var t = e._vue_visibilityState;
  t && (t.destroyObserver(), delete e._vue_visibilityState);
}
var ap = {
  beforeMount: Ms,
  updated: np,
  unmounted: Ts
};
function rp(e) {
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
var ip = {
  itemsLimit: 1e3
}, pp = /(auto|scroll)/;
function Ds(e, t) {
  return e.parentNode === null ? t : Ds(e.parentNode, t.concat([e]));
}
var mo = function(t, o) {
  return getComputedStyle(t, null).getPropertyValue(o);
}, up = function(t) {
  return mo(t, "overflow") + mo(t, "overflow-y") + mo(t, "overflow-x");
}, dp = function(t) {
  return pp.test(up(t));
};
function Ml(e) {
  if (e instanceof HTMLElement || e instanceof SVGElement) {
    for (var t = Ds(e.parentNode, []), o = 0; o < t.length; o += 1)
      if (dp(t[o]))
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
    var cp = Object.defineProperty({}, "passive", {
      get: function() {
        Po = !0;
      }
    });
    window.addEventListener("test", null, cp);
  } catch {
  }
}
let fp = 0;
var Jo = {
  name: "RecycleScroller",
  components: {
    ResizeObserver: ro
  },
  directives: {
    ObserveVisibility: ap
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
        let s = 1e4, n = 0, a;
        for (let i = 0, u = t.length; i < u; i++)
          a = t[i][o] || l, a < s && (s = a), n += a, e[i] = { accumulator: n, size: a };
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
      const n = Zs({
        id: fp++,
        index: t,
        used: !0,
        key: l,
        type: s
      }), a = Gs({
        item: o,
        position: 0,
        nr: n
      });
      return e.push(a), a;
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
      const o = this.itemSize, l = this.gridItems || 1, s = this.itemSecondarySize || o, n = this.$_computedMinItemSize, a = this.typeField, i = this.simpleArray ? null : this.keyField, u = this.items, c = u.length, h = this.sizes, w = this.$_views, y = this.$_unusedViews, g = this.pool, m = this.itemIndexByKey;
      let f, v, _, b, V;
      if (!c)
        f = v = b = V = _ = 0;
      else if (this.$_prerender)
        f = b = 0, v = V = Math.min(this.prerender, u.length), _ = null;
      else {
        const P = this.getScroll();
        if (t) {
          let H = P.start - this.$_lastUpdateScrollPosition;
          if (H < 0 && (H = -H), o === null && H < n || H < o)
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
          for (v === -1 ? v = u.length - 1 : (v++, v > c && (v = c)), b = f; b < c && q + h[b].accumulator < P.start; b++)
            ;
          for (V = b; V < c && q + h[V].accumulator < P.end; V++)
            ;
        } else {
          f = ~~(P.start / o * l);
          const H = f % l;
          f -= H, v = Math.ceil(P.end / o * l), b = Math.max(0, Math.floor((P.start - q) / o * l)), V = Math.floor((P.end - q) / o * l), f < 0 && (f = 0), v > c && (v = c), b < 0 && (b = 0), V > c && (V = c), _ = Math.ceil(c / l) * o;
        }
      }
      v - f > ip.itemsLimit && this.itemsLimitError(), this.totalSize = _;
      let $;
      const E = f <= this.$_endIndex && v >= this.$_startIndex;
      if (E)
        for (let P = 0, A = g.length; P < A; P++)
          $ = g[P], $.nr.used && (e && ($.nr.index = m[$.item[i]]), ($.nr.index == null || $.nr.index < f || $.nr.index >= v) && this.unuseView($));
      const I = E ? null : /* @__PURE__ */ new Map();
      let R, T, M;
      for (let P = f; P < v; P++) {
        R = u[P];
        const A = i ? R[i] : R;
        if (A == null)
          throw new Error(`Key is ${A} on item (keyField is '${i}')`);
        if ($ = w.get(A), !o && !h[P].size) {
          $ && this.unuseView($);
          continue;
        }
        T = R[a];
        let q = y.get(T), H = !1;
        if (!$)
          E ? q && q.length ? $ = q.pop() : $ = this.addView(g, P, R, A, T) : (M = I.get(T) || 0, (!q || M >= q.length) && ($ = this.addView(g, P, R, A, T), this.unuseView($, !0), q = y.get(T)), $ = q[M], I.set(T, M + 1)), w.delete($.nr.key), $.nr.used = !0, $.nr.index = P, $.nr.key = A, $.nr.type = T, w.set(A, $), H = !0;
        else if (!$.nr.used && ($.nr.used = !0, H = !0, q)) {
          const Y = q.indexOf($);
          Y !== -1 && q.splice(Y, 1);
        }
        $.item = R, H && (P === u.length - 1 && this.$emit("scroll-end"), P === 0 && this.$emit("scroll-start")), o === null ? ($.position = h[P - 1].accumulator, $.offset = 0) : ($.position = Math.floor(P / l) * o, $.offset = P % l * s);
      }
      return this.$_startIndex = f, this.$_endIndex = v, this.emitUpdate && this.$emit("update", f, v, b, V), clearTimeout(this.$_sortTimer), this.$_sortTimer = setTimeout(this.sortViews, this.updateInterval + 300), {
        continuous: E
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
        const s = e.getBoundingClientRect(), n = o ? s.height : s.width;
        let a = -(o ? s.top : s.left), i = o ? window.innerHeight : window.innerWidth;
        a < 0 && (i += a, a = 0), a + i > n && (i = n - a), l = {
          start: a,
          end: a + i
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
        const n = Ml(this.$el), a = n.tagName === "HTML" ? 0 : n[t.scroll], i = n.getBoundingClientRect(), c = this.$el.getBoundingClientRect()[t.start] - i[t.start];
        o = n, l = t.scroll, s = e + a + c;
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
const vp = {
  key: 0,
  ref: "before",
  class: "vue-recycle-scroller__slot"
}, hp = {
  key: 1,
  ref: "after",
  class: "vue-recycle-scroller__slot"
};
function mp(e, t, o, l, s, n) {
  const a = El("ResizeObserver"), i = Ks("observe-visibility");
  return Pe((p(), d(
    "div",
    {
      class: L(["vue-recycle-scroller", {
        ready: s.ready,
        "page-mode": o.pageMode,
        [`direction-${e.direction}`]: !0
      }]),
      onScrollPassive: t[0] || (t[0] = (...u) => n.handleScroll && n.handleScroll(...u))
    },
    [
      e.$slots.before ? (p(), d(
        "div",
        vp,
        [
          K(e.$slots, "before")
        ],
        512
        /* NEED_PATCH */
      )) : C("v-if", !0),
      (p(), N(he(o.listTag), {
        ref: "wrapper",
        style: Do({ [e.direction === "vertical" ? "minHeight" : "minWidth"]: s.totalSize + "px" }),
        class: L(["vue-recycle-scroller__item-wrapper", o.listClass])
      }, {
        default: z(() => [
          (p(!0), d(
            F,
            null,
            X(s.pool, (u) => (p(), N(he(o.itemTag), Te({
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
            }, Xs(o.skipHover ? {} : {
              mouseenter: () => {
                s.hoverKey = u.nr.key;
              },
              mouseleave: () => {
                s.hoverKey = null;
              }
            })), {
              default: z(() => [
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
        hp,
        [
          K(e.$slots, "after")
        ],
        512
        /* NEED_PATCH */
      )) : C("v-if", !0),
      S(a, { onNotify: n.handleResize }, null, 8, ["onNotify"])
    ],
    34
    /* CLASS, HYDRATE_EVENTS */
  )), [
    [i, n.handleVisibilityChange]
  ]);
}
Jo.render = mp;
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
      const e = [], { items: t, keyField: o, simpleArray: l } = this, s = this.vscrollData.sizes, n = t.length;
      for (let a = 0; a < n; a++) {
        const i = t[a], u = l ? a : i[o];
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
      const n = Math.min(e.length, t.length);
      for (let i = 0; i < n && !(l >= o); i++)
        l += t[i].size || this.minItemSize, s += e[i].size || this.minItemSize;
      const a = s - l;
      a !== 0 && (this.$el.scrollTop += a);
    }
  },
  beforeCreate() {
    this.$_updates = [], this.$_undefinedSizes = 0, this.$_undefinedMap = {}, this.$_events = rp();
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
function gp(e, t, o, l, s, n) {
  const a = El("RecycleScroller");
  return p(), N(a, Te({
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
    default: z(({ item: i, index: u, active: c }) => [
      K(e.$slots, "default", ut(dt({
        item: i.item,
        index: u,
        active: c,
        itemWithSize: i
      })))
    ]),
    before: z(() => [
      K(e.$slots, "before")
    ]),
    after: z(() => [
      K(e.$slots, "after")
    ]),
    empty: z(() => [
      K(e.$slots, "empty")
    ]),
    _: 3
    /* FORWARDED */
  }, 16, ["items", "min-item-size", "direction", "list-tag", "item-tag", "onResize", "onVisible"]);
}
el.render = gp;
el.__file = "src/components/DynamicScroller.vue";
var Is = {
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
Is.__file = "src/components/DynamicScrollerItem.vue";
const bp = {
  key: 0,
  class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1"
}, ze = /* @__PURE__ */ D({
  __name: "FormErrorMessage",
  props: {
    errorMessage: { default: null }
  },
  setup(e) {
    const l = Ie(e).errorMessage, s = B(
      () => !!l.value && l.value.trim() !== ""
    );
    return (n, a) => s.value ? (p(), d("p", bp, [
      r("span", null, k(O(l)), 1)
    ])) : C("", !0);
  }
}), yp = {
  key: 0,
  class: "po-mt-2 po-text-sm po-text-slate-500"
}, Ae = /* @__PURE__ */ D({
  __name: "FormMessage",
  props: {
    message: { default: null }
  },
  setup(e) {
    return (t, o) => t.message !== null ? (p(), d("p", yp, k(t.message), 1)) : C("", !0);
  }
}), wp = { class: "po-block po-w-4 po-text-mpao-lightblue hover:po-text-mpao-midblue po-transition-colors po-duration-150 po-ease-out" }, He = /* @__PURE__ */ D({
  __name: "FormInfo",
  props: {
    info: { default: "" }
  },
  setup(e) {
    return (t, o) => t.info !== "" ? (p(), N(O(Ct), {
      key: 0,
      text: t.info,
      placement: "right",
      strategy: "fixed"
    }, {
      default: z(() => [
        r("span", wp, [
          S(O(Hi), { class: "po-fill-current" })
        ])
      ]),
      _: 1
    }, 8, ["text"])) : C("", !0);
  }
}), _p = ["for"], $p = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, xp = { class: "po-relative po-mt-1" }, Vp = {
  role: "button",
  ref: "comboboxButton"
}, kp = ["placeholder", "disabled", "id"], Cp = {
  class: /* @__PURE__ */ L(["group-hover:po-text-white po-block po-truncate"])
}, Sp = {
  key: 0,
  class: "po-block po-text-xs po-opacity-60"
}, Pp = {
  key: 1,
  class: "scroller po-max-h-60 po-h-full po-overflow-y-auto"
}, Op = ["onMousedown"], Lp = {
  class: /* @__PURE__ */ L(["group-hover:po-text-white po-block po-truncate"])
}, Mp = {
  key: 0,
  class: "po-block po-text-xs po-opacity-60"
}, Tp = {
  name: "PoSelectField"
}, Dp = /* @__PURE__ */ D({
  ...Tp,
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
    const o = e, l = x(""), s = x(""), n = x(), a = x(!1), i = x(!1), u = x(), c = x(null), h = x({
      viewStartIdx: 0,
      viewEndIdx: 0,
      visibleStartIdx: 0,
      visibleEndIdx: 0
    }), w = B(() => {
      var M, P;
      const T = l.value.toLowerCase();
      return T === "" ? ((M = o.list) == null ? void 0 : M.map((A) => ({
        ...A,
        active: n.value === A.id
      }))) ?? [] : ((P = o.list) == null ? void 0 : P.filter((A) => A.name.toLowerCase().includes(T)).map((A) => ({
        ...A,
        active: n.value === A.id
      }))) ?? [];
    });
    function y(T) {
      if (o.object)
        return T == null ? void 0 : T.name;
      if (w.value) {
        let M = w.value.find((P) => P.id === T);
        return M == null ? void 0 : M.name;
      } else if (o.placeholder)
        return o.placeholder;
    }
    n.value = o.modelValue, To(() => {
      n.value = o.modelValue;
    }), ee(n, () => {
      s.value = y(n.value);
    }), Bt(c, () => {
      a.value = !!i.value;
    });
    function g(T) {
      n.value = T, s.value = T.name, l.value = "", t("selected", o.object ? T : T.id), t("update:modelValue", o.object ? T : T.id), a.value = !!i.value;
    }
    const m = x();
    let f;
    const { uniqueId: v, generateUniqueId: _ } = Ne(), b = x(o.id);
    Z(() => {
      o.id === "" && (_(), b.value = v.value), s.value = y(o.modelValue), f = Et(u.value, m.value, {
        placement: "bottom-end",
        strategy: "fixed",
        modifiers: [
          {
            name: "sameWidth",
            enabled: !0,
            fn: ({ state: T }) => {
              T.styles.popper.width = `${T.rects.reference.width}px`;
            },
            phase: "beforeWrite",
            requires: ["computeStyles"]
          }
        ]
      });
    });
    function V() {
      i.value = !0, a.value = !0, f && f.update();
    }
    re(() => {
      f && f.destroy();
    });
    function $() {
      i.value = !1, setTimeout(() => {
        a.value = !1;
      }, 100);
    }
    const E = (T) => {
      let M = T.target.value;
      l.value = M;
    };
    function I(T, M, P, A) {
      h.value.viewStartIdx = T, h.value.viewEndIdx = M, h.value.visibleStartIdx = P, h.value.visibleEndIdx = A;
    }
    function R() {
      f && f.update();
    }
    return xe.on("sidebarOpen", (T) => {
      setTimeout(() => {
        f && f.update();
      }, 320);
    }), (T, M) => (p(), d("div", {
      class: L([{ "lg:po-grid lg:po-grid-cols-2": T.display === "horizontal" }]),
      ref_key: "containerRef",
      ref: c
    }, [
      r("label", {
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700",
        for: b.value
      }, [
        r("span", null, k(T.label), 1),
        T.required ? (p(), d("span", $p, "*")) : C("", !0),
        S(He, { info: T.info }, null, 8, ["info"])
      ], 8, _p),
      r("div", xp, [
        r("div", Vp, [
          Pe(r("input", {
            type: "text",
            ref_key: "selectBox",
            ref: u,
            class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm",
            placeholder: T.placeholder,
            disabled: T.disabled,
            "onUpdate:modelValue": M[0] || (M[0] = (P) => s.value = P),
            onInput: E,
            onFocus: V,
            onBlur: $,
            id: b.value
          }, null, 40, kp), [
            [Ot, s.value]
          ]),
          r("span", {
            class: "po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-rounded-r-md po-px-2 focus:po-outline-none",
            role: "button",
            onMousedown: M[1] || (M[1] = le((P) => a.value = !a.value, ["stop"]))
          }, [
            S(O(Fi), {
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
          T.dynamicScroll ? (p(), N(O(el), {
            key: 0,
            items: w.value,
            "min-item-size": 32,
            "key-field": "id",
            class: "scroller po-max-h-60 po-h-full po-overflow-y-auto",
            onResize: R,
            onUpdate: I
          }, {
            default: z(({ item: P, index: A, active: q }) => [
              S(O(Is), {
                item: P,
                active: q,
                "size-dependencies": [P.name],
                onMousedown: le((H) => g(P), ["stop"]),
                "data-index": A,
                class: L([
                  "po-relative po-group po-select-none po-py-2 po-pl-3 po-pr-9 po-cursor-pointer hover:po-bg-mpao-lightblue",
                  P.active ? "po-bg-mpao-lightblue po-text-white" : "po-text-slate-900"
                ])
              }, {
                default: z(() => [
                  r("span", Cp, [
                    J(k((P == null ? void 0 : P.name) ?? "") + " ", 1),
                    P != null && P.subtitle ? (p(), d("span", Sp, k(P == null ? void 0 : P.subtitle), 1)) : C("", !0)
                  ])
                ]),
                _: 2
              }, 1032, ["item", "active", "size-dependencies", "onMousedown", "data-index", "class"])
            ]),
            _: 1
          }, 8, ["items"])) : (p(), d("ul", Pp, [
            (p(!0), d(F, null, X(w.value, (P) => (p(), d("li", {
              onMousedown: le((A) => g(P), ["stop"]),
              class: L([
                "po-relative po-group po-select-none po-py-2 po-pl-3 po-pr-9 po-cursor-pointer hover:po-bg-mpao-lightblue",
                P.active ? "po-bg-mpao-lightblue po-text-white" : "po-text-slate-900"
              ])
            }, [
              r("span", Lp, [
                J(k((P == null ? void 0 : P.name) ?? "") + " ", 1),
                P != null && P.subtitle ? (p(), d("span", Mp, k(P == null ? void 0 : P.subtitle), 1)) : C("", !0)
              ])
            ], 42, Op))), 256))
          ]))
        ], 512), [
          [Lt, a.value && w.value.length > 0]
        ])
      ]),
      S(Ae, { message: T.message }, null, 8, ["message"]),
      S(ze, { "error-message": T.errorMessage }, null, 8, ["error-message"])
    ], 2));
  }
}), Ep = /* @__PURE__ */ r("div", { class: "po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity" }, null, -1), Bp = { class: "po-fixed po-z-10 po-inset-0" }, Ip = { class: "po-flex po-justify-center po-items-start po-min-h-screen sm:po-px-4 sm:po-pt-10 sm:po-pb-20 po-text-center sm:po-block po-max-h-screen po-overflow-y-hidden" }, zp = /* @__PURE__ */ r("span", {
  class: "po-hidden sm:po-inline-block sm:po-align-middle sm:po-h-screen",
  "aria-hidden": "true"
}, "​", -1), Ap = { class: "po-flex po-items-center po-bg-white po-rounded-t-xl po-p-5" }, jp = { class: "po-grow po-text-md po-font-bold po-text-slate-600" }, Rp = { class: "po-shrink-0" }, Fp = /* @__PURE__ */ r("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), Np = {
  key: 0,
  class: "po-bg-slate-50 po-rounded-b-xl"
}, Hp = {
  name: "PoModal"
}, jt = /* @__PURE__ */ D({
  ...Hp,
  props: {
    openBtnLabel: { default: "" },
    modalTitle: { default: "Modal windows" },
    show: { type: Boolean, default: !1 },
    modalWidth: { default: "sm:po-max-w-xl" },
    modalHeight: { default: "" }
  },
  emits: ["modal-closed"],
  setup(e, { emit: t }) {
    const o = e, { show: l } = Ie(o), s = x(!1);
    ee(l, () => {
      s.value = l.value;
    });
    function n() {
      s.value = !1, t("modal-closed", !0);
    }
    const a = o.modalTitle.toLowerCase().replace(/\s+/g, "-"), i = new URLSearchParams(window.location.search);
    return s.value = i.get("modal") !== void 0 && i.get("modal") === a, (u, c) => (p(), d("div", null, [
      u.openBtnLabel.length > 0 ? (p(), N(O(ao), {
        key: 0,
        label: u.openBtnLabel,
        onClick: c[0] || (c[0] = (h) => s.value = !0)
      }, null, 8, ["label"])) : C("", !0),
      (p(), N(Mt, { to: "body" }, [
        S(O(At), {
          as: "template",
          show: s.value
        }, {
          default: z(() => [
            S(O(eo), {
              as: "div",
              class: "po-relative po-z-50",
              onClose: n
            }, {
              default: z(() => [
                S(O(Ke), {
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
                  r("div", Ip, [
                    zp,
                    S(O(Ke), {
                      as: "template",
                      enter: "po-ease-out po-duration-300",
                      "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                      "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                      leave: "po-ease-in po-duration-200",
                      "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                      "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                    }, {
                      default: z(() => [
                        S(O(to), {
                          class: L(["po-relative po-inline-block po-align-bottom po-bg-white sm:po-rounded-xl po-text-left po-shadow-xl po-transform po-transition-all sm:po-align-top po-w-full", u.modalWidth])
                        }, {
                          default: z(() => [
                            r("div", Ap, [
                              r("h3", jp, k(u.modalTitle), 1),
                              r("div", Rp, [
                                r("span", {
                                  role: "button",
                                  class: "po-block",
                                  onClick: n
                                }, [
                                  S(O(Zt), { class: "po-w-5 po-stroke-slate-500 hover:po-stroke-mpao-orange po-transition-colors po-duration-150 po-ease-in-out" })
                                ])
                              ])
                            ]),
                            Fp,
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
                            u.$slots.footer ? (p(), d("div", Np, [
                              K(u.$slots, "footer")
                            ])) : C("", !0)
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
}), qp = ["for"], Yp = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Up = ["name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], Wp = {
  name: "PoTextarea"
}, Zp = /* @__PURE__ */ D({
  ...Wp,
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
    }, { uniqueId: s, generateUniqueId: n } = Ne(), a = x(o.id);
    return Z(() => {
      o.id === "" && (n(), a.value = s.value);
    }), (i, u) => (p(), d("div", {
      class: L(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": i.display === "horizontal" }]])
    }, [
      r("label", {
        for: a.value,
        class: "po-text-sm po-font-medium po-text-slate-700 po-flex po-items-center po-space-x-1"
      }, [
        r("span", null, k(i.label), 1),
        i.required ? (p(), d("span", Yp, "*")) : C("", !0),
        S(He, { info: i.info }, null, 8, ["info"])
      ], 8, qp),
      r("textarea", Te({
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
        onInput: l,
        class: "po-mt-1 po-peer po-px-3 po-py-2 po-block po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-border-slate-300 po-bg-white focus:po-border-mpao-lightblue focus:po-ring-0 invalid:po-border-red-400 invalid:po-focus:border-red-600 invalid:focus:po-ring-red-600 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default"
      }), null, 16, Up),
      S(Ae, { message: i.message }, null, 8, ["message"]),
      S(ze, { "error-message": i.errorMessage }, null, 8, ["error-message"])
    ], 2));
  }
}), Gp = { class: "po-w-5 po-h-5" }, Kp = { action: "" }, Xp = /* @__PURE__ */ r("br", null, null, -1), Qp = { class: "po-p-5" }, Jp = /* @__PURE__ */ D({
  __name: "feedbackForm",
  props: {
    sidebarOpen: { type: Boolean, default: !0 },
    hideSidebarItemLabel: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = x(!1), o = [
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
    ], l = x({
      type: 1,
      message: ""
    });
    return (s, n) => (p(), d(F, null, [
      r("button", {
        onClick: n[0] || (n[0] = le(() => t.value = !0, ["prevent"])),
        class: "po-flex po-items-center po-w-full po-group po-space-x-3 po-px-2 po-py-3 po-transition-colors po-duration-100 po-ease-in-out po-rounded-lg po-outline-none po-ring-0 po-text-slate-600 hover:po-text-mpao-lightblue hover:po-bg-slate-100",
        title: "Go to feedback"
      }, [
        r("span", Gp, [
          S(O(un), { class: "po-stroke-current group-hover:po-stroke-mpao-orange po-w-5 po-h-5 po-stroke-2" })
        ]),
        r("span", {
          class: L(["po-text-sm po-leading-none po-font-medium po-shrink-0 po-text-left po-transition-opacity po-duration-150 po-ease-out", [
            { "po-opacity-1": s.sidebarOpen },
            { "po-opacity-0": !s.sidebarOpen },
            { "po-hidden": s.hideSidebarItemLabel }
          ]])
        }, "Feedback", 2)
      ]),
      S(jt, {
        show: t.value,
        onModalClosed: n[3] || (n[3] = () => t.value = !1),
        "modal-title": "Feedback"
      }, {
        content: z(() => [
          r("form", Kp, [
            S(Dp, {
              label: "Type",
              list: o,
              modelValue: l.value.type,
              "onUpdate:modelValue": n[1] || (n[1] = (a) => l.value.type = a)
            }, null, 8, ["modelValue"]),
            Xp,
            S(Zp, {
              cols: "6",
              rows: "6",
              label: "Description",
              modelValue: l.value.message,
              "onUpdate:modelValue": n[2] || (n[2] = (a) => l.value.message = a)
            }, null, 8, ["modelValue"])
          ])
        ]),
        footer: z(() => [
          r("div", Qp, [
            S(ao, {
              label: "Send",
              type: "button"
            })
          ])
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), eu = { class: "po-grow" }, tu = { class: "po-mt-2 po-mb-5" }, ou = ["onClick"], lu = { class: "po-w-5 po-h-5" }, su = { class: "po-mt-2 po-mb-5" }, nu = ["onClick"], au = { class: "po-w-4 po-shrink-0" }, ru = ["innerHTML"], iu = {
  key: 0,
  class: "po-mt-2 po-shrink-0 po-mb-2 po-border-t po-border-slate-200 po-pt-2"
}, pu = {
  name: "PoSidebarDrawer"
}, r2 = /* @__PURE__ */ D({
  ...pu,
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
    const o = e, l = x(!0), s = x(window.innerWidth), n = x(!1), a = x(!1), i = x(!0), u = () => {
      y();
    }, c = B(() => {
      var f, v;
      let g = [];
      const m = (f = o.apps) == null ? void 0 : f.filter((_) => _.code == o.appCode)[0];
      if (m) {
        let _ = (v = o.apps) == null ? void 0 : v.filter(
          (b) => m.related.includes(b.code)
        );
        _ == null || _.forEach((b) => {
          g.push(b);
        });
      }
      return g;
    });
    Z(() => {
      window.addEventListener("resize", u), y();
    });
    function h(g, m) {
      t(g, m), n.value && xe.emit("sidebarOpen", !1);
    }
    function w(g) {
      return l.value ? "" : g;
    }
    function y() {
      s.value = window.innerWidth, s.value <= 1024 ? (n.value = !0, xe.emit("sidebarOpen", !1)) : n.value = !1;
    }
    return Lo(() => {
      window.removeEventListener("resize", u);
    }), xe.on("sidebarOpen", (g) => {
      typeof g == "boolean" && (l.value = g, g ? (a.value = !1, setTimeout(() => {
        i.value = !0;
      }, 150)) : (i.value = !1, setTimeout(() => {
        a.value = !0;
      }, 320)));
    }), (g, m) => {
      var f;
      return p(), d("aside", {
        class: L(["po-flex po-flex-col po-px-3 po-pt-[78px] po-top-0 po-bottom-0 po-bg-white po-overflow-y-auto po-overflow-x-hidden po-transition-all po-duration-300 po-ease-in-out po-border-r po-border-slate-50 po-z-[49] po-fixed", [
          { "po-w-[256px]": l.value && !n.value },
          { "po-w-[64px]": !l.value && !n.value },
          { "po-w-[256px] po-left-0 po-shadow": n.value && l.value },
          {
            "po-w-[256px] -po-left-[256px]  po-shadow-lg": n.value && !l.value
          }
        ]])
      }, [
        r("div", eu, [
          (p(!0), d(F, null, X(g.content, (v, _) => (p(), N(O($l), {
            key: `sidebar-group-${_}`,
            defaultOpen: !0
          }, {
            default: z(({ open: b }) => [
              v.groupName ? (p(), N(O(xl), {
                key: 0,
                class: L([[
                  { "po-mb-3": b === "" },
                  { "po-ml-0 po-text-center": a.value },
                  { "po-ml-2 po-text-left": !a.value }
                ], "po-uppercase po-select-none po-text-xs po-font-semibold po-text-slate-400 po-block po-w-full"])
              }, {
                default: z(() => [
                  J(k(i.value ? v.groupName : v.groupName.slice(0, 2)), 1)
                ]),
                _: 2
              }, 1032, ["class"])) : C("", !0),
              S(Ze, {
                "enter-active-class": "po-transition po-duration-100 po-ease-out",
                "enter-from-class": "po-transform po-scale-95 po-opacity-0",
                "enter-to-class": "po-transform po-scale-100 po-opacity-100",
                "leave-active-class": "po-transition po-duration-75 po-ease-out",
                "leave-from-class": "po-transform po-scale-100 po-opacity-100",
                "leave-to-class": "po-transform po-scale-95 po-opacity-0"
              }, {
                default: z(() => [
                  S(O(Vl), null, {
                    default: z(() => [
                      r("ul", tu, [
                        (p(!0), d(F, null, X(v.items, (V) => (p(), d("li", {
                          key: V.label
                        }, [
                          r("span", null, [
                            S(O(Ct), {
                              text: w(V.label),
                              placement: "right",
                              strategy: "fixed"
                            }, {
                              default: z(() => [
                                V.disabled ? C("", !0) : (p(), d("button", {
                                  key: 0,
                                  onClick: ($) => h("button-click", V.url),
                                  class: L(["po-flex po-items-center po-w-full po-group po-space-x-3 po-px-2 po-py-3 po-transition-colors po-duration-100 po-ease-in-out po-rounded-lg po-outline-none po-ring-0", [
                                    {
                                      "po-text-mpao-lightblue po-bg-slate-100 hover:po-bg-slate-100/50": V.url == g.currRoute
                                    },
                                    {
                                      "po-text-slate-600 hover:po-text-mpao-lightblue hover:po-bg-slate-100": V.url !== g.currRoute
                                    },
                                    { "po-justify-center": a.value }
                                  ]])
                                }, [
                                  r("span", lu, [
                                    (p(), N(he(V.icon), {
                                      class: L(["po-w-5 po-h-5 po-stroke-2", [
                                        {
                                          "po-stroke-current group-hover:po-stroke-mpao-orange": V.url !== g.currRoute
                                        },
                                        {
                                          "po-stroke-mpao-orange": V.url == g.currRoute
                                        }
                                      ]])
                                    }, null, 8, ["class"]))
                                  ]),
                                  r("span", {
                                    class: L(["po-text-sm po-leading-none po-font-medium po-shrink-0 po-text-left po-transition-opacity po-duration-150 po-ease-out", [
                                      { "po-opacity-1": l.value },
                                      { "po-opacity-0": !l.value },
                                      { "po-hidden": a.value }
                                    ]])
                                  }, k(V.label), 3)
                                ], 10, ou))
                              ]),
                              _: 2
                            }, 1032, ["text"])
                          ])
                        ]))), 128))
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
              g.appsLabel ? (p(), N(O(xl), {
                key: 0,
                class: L([[
                  { "po-mb-3": v === "" },
                  { "po-ml-0 po-text-center": a.value },
                  { "po-ml-2 po-text-left": !a.value }
                ], "po-uppercase po-select-none po-text-xs po-font-semibold po-text-slate-400 po-block po-w-full"])
              }, {
                default: z(() => [
                  J(k(i.value ? g.appsLabel : g.appsLabel.slice(0, 2)), 1)
                ]),
                _: 2
              }, 1032, ["class"])) : C("", !0),
              S(Ze, {
                "enter-active-class": "po-transition po-duration-100 po-ease-out",
                "enter-from-class": "po-transform po-scale-95 po-opacity-0",
                "enter-to-class": "po-transform po-scale-100 po-opacity-100",
                "leave-active-class": "po-transition po-duration-75 po-ease-out",
                "leave-from-class": "po-transform po-scale-100 po-opacity-100",
                "leave-to-class": "po-transform po-scale-95 po-opacity-0"
              }, {
                default: z(() => [
                  S(O(Vl), null, {
                    default: z(() => [
                      r("ul", su, [
                        (p(!0), d(F, null, X(c.value, (_) => (p(), d("li", null, [
                          r("span", null, [
                            S(O(Ct), {
                              text: w(_.name),
                              placement: "right",
                              strategy: "fixed"
                            }, {
                              default: z(() => [
                                r("button", {
                                  onClick: (b) => h("app-click", _.name),
                                  class: L(["po-flex po-items-center po-w-full po-group po-space-x-3 po-px-2 po-py-3 po-transition-colors po-duration-100 po-ease-in-out po-rounded-lg po-outline-none po-ring-0", [
                                    {
                                      "po-text-mpao-lightblue po-bg-slate-100 hover:po-bg-slate-100/50": _.current
                                    },
                                    {
                                      "po-text-slate-600 hover:po-text-mpao-lightblue hover:po-bg-slate-100": !_.current
                                    },
                                    { "po-justify-center": a.value }
                                  ]])
                                }, [
                                  r("span", au, [
                                    r("span", {
                                      innerHTML: _.icon,
                                      class: "po-text-slate-600 po-w-5"
                                    }, null, 8, ru)
                                  ]),
                                  r("span", {
                                    class: L(["po-text-sm po-leading-none po-font-medium po-shrink-0 po-text-left po-transition-opacity po-duration-150 po-ease-out", [
                                      { "po-opacity-1": l.value },
                                      { "po-opacity-0": !l.value },
                                      { "po-hidden": a.value }
                                    ]])
                                  }, k(_.name), 3)
                                ], 10, nu)
                              ]),
                              _: 2
                            }, 1032, ["text"])
                          ])
                        ]))), 256))
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : C("", !0)
        ]),
        g.hasFeedback ? (p(), d("ul", iu, [
          r("li", null, [
            S(O(Ct), {
              text: w("Feedback"),
              placement: "right",
              strategy: "fixed"
            }, {
              default: z(() => [
                S(Jp, {
                  "sidebar-open": l.value,
                  "hide-sidebar-item-label": a.value
                }, null, 8, ["sidebar-open", "hide-sidebar-item-label"])
              ]),
              _: 1
            }, 8, ["text"])
          ])
        ])) : C("", !0)
      ], 2);
    };
  }
}), uu = {
  key: 0,
  class: "shell-content--action-bar"
}, du = { class: "action-bar__nav" }, cu = ["onClick"], fu = { class: "action-bar__nav_label po-font-medium" }, vu = {
  key: 0,
  class: "po-shrink-0 po-flex po-space-x-1"
}, hu = /* @__PURE__ */ r("span", { class: "action-bar__nav_label po-font-medium" }, "Go Back", -1), mu = {
  name: "PoActionBar"
}, i2 = /* @__PURE__ */ D({
  ...mu,
  props: {
    items: { default: null },
    showBackButton: { type: Boolean, default: !1 },
    currPageRoute: { default: "" }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, l) => o.items !== null && o.items.length > 0 || o.showBackButton ? (p(), d("section", uu, [
      r("nav", du, [
        (p(!0), d(F, null, X(o.items, (s) => (p(), d("span", {
          onClick: (n) => o.$emit("button-click", s.label),
          class: L([[
            { "action-bar__nav_highlighted": s.highlighted },
            { "action-bar__nav_danger": s.danger }
          ], "action-bar__nav_link"])
        }, [
          (p(), N(he(s.icon), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" })),
          r("span", fu, k(s.label), 1)
        ], 10, cu))), 256))
      ]),
      o.showBackButton ? (p(), d("nav", vu, [
        r("span", {
          onClick: l[0] || (l[0] = (s) => o.$emit("button-click", "back")),
          class: "action-bar__nav_link"
        }, [
          hu,
          (p(), N(he(O(nn)), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" }))
        ])
      ])) : C("", !0)
    ])) : C("", !0);
  }
}), gu = { class: "po-shadow-sm po-rounded-xl po-bg-white po-relative" }, bu = {
  key: 0,
  class: "po-absolute po-right-2 po-top-2 po-p-2 po-rounded-lg"
}, yu = {
  key: 0,
  class: "po-text-base po-font-medium po-text-slate-600"
}, wu = {
  key: 1,
  class: "lg:po-col-span-2 lg:po-flex lg:po-justify-end po-space-x-2"
}, _u = {
  name: "PoCard"
}, p2 = /* @__PURE__ */ D({
  ..._u,
  props: {
    title: { default: "" },
    isLoading: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, o) => (p(), d("div", gu, [
      t.isLoading ? (p(), d("div", bu, [
        S(no)
      ])) : C("", !0),
      r("div", {
        class: L([
          { "po-grid po-grid-cols-1 lg:po-grid-cols-3 po-gap-3": t.$slots.action }
        ])
      }, [
        t.title.length > 0 ? (p(), d("h3", yu, k(t.title), 1)) : C("", !0),
        t.$slots.action ? (p(), d("div", wu, [
          K(t.$slots, "action")
        ])) : C("", !0)
      ], 2),
      K(t.$slots, "content")
    ]));
  }
}), $u = { class: "po-py-3 po-px-5 po-border-b po-border-slate-200" }, xu = {
  class: "po-flex po-w-full md:po-ml-0",
  action: "#",
  method: "GET"
}, Vu = {
  for: "search-field",
  class: "po-sr-only"
}, ku = { class: "po-relative po-w-full po-text-slate-400 focus-within:po-text-mpao-lightblue po-transition-colors po-duration-100 po-ease-in-out" }, Cu = { class: "po-pointer-events-none po-absolute po-inset-y-0 po-left-0 po-flex po-items-center" }, Su = ["placeholder", "value"], Pu = ["disabled"], Ou = {
  name: "PoCardSearch"
}, u2 = /* @__PURE__ */ D({
  ...Ou,
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
    return (l, s) => (p(), d("div", $u, [
      r("form", xu, [
        r("label", Vu, k(l.placeholder), 1),
        r("div", ku, [
          r("div", Cu, [
            S(O(Eo), { class: "po-h-5 po-w-5 po-flex-shrink-0" })
          ]),
          r("input", {
            name: "search-field",
            id: "desktop-search-field",
            placeholder: l.placeholder,
            value: l.modelValue,
            onInput: o,
            class: "po-h-full po-w-full po-border-transparent po-py-2 po-pl-8 po-pr-3 po-text-sm po-text-slate-700 po-placeholder-slate-500 focus:po-border-transparent focus:po-placeholder-slate-400 focus:po-outline-none focus:po-ring-0",
            type: "search"
          }, null, 40, Su),
          l.showBtn ? (p(), d("button", {
            key: 0,
            class: L(["po-absolute po-right-0 po-text-sm po-rounded-full po-px-3 po-py-2 po-transition-colors po-duration-150 po-ease-out", [
              { "po-bg-mpao-lightblue po-text-white": l.modelValue !== "" },
              { "po-bg-slate-100 po-text-slate-400": l.modelValue === "" }
            ]]),
            disabled: l.modelValue === "",
            onClick: s[0] || (s[0] = le((n) => l.$emit("button-click", l.modelValue), ["prevent"]))
          }, " Search ", 10, Pu)) : C("", !0)
        ])
      ])
    ]));
  }
}), Lu = { class: "po-flex po-items-center" }, Mu = { class: "po-text-sm po-font-medium po-text-slate-500 po-pr-2" }, Tu = {
  name: "PoPagination"
}, Du = /* @__PURE__ */ D({
  ...Tu,
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
    const n = B(() => o.totalPages ? `Page ${o.currentPage} of ${o.totalPages}` : o.pagination ? o.pagination.label : "");
    return (a, i) => (p(), d("div", Lu, [
      r("span", Mu, k(n.value), 1),
      r("button", {
        title: "Previous",
        onClick: l,
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        S(O(Bl), { class: "po-w-4 po-stroke-current po-stroke-2" })
      ]),
      r("button", {
        title: "Next",
        onClick: s,
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        S(O(Il), { class: "po-w-4 po-stroke-current po-stroke-2" })
      ])
    ]));
  }
}), Eu = { key: 0 }, Bu = {
  class: "po-text-xl md:po-text-2xl po-font-semibold po-text-slate-800",
  id: "po-page-title"
}, Iu = {
  key: 0,
  class: "po-text-base po-mt-2 po-max-w-md po-block po-text-slate-500"
}, zu = { key: 1 }, Au = { class: "po-grid po-grid-cols-1 lg:po-grid-cols-2 po-gap-5" }, ju = {
  class: "po-text-xl md:po-text-2xl po-font-semibold po-text-slate-800",
  id: "po-page-title"
}, Ru = {
  key: 0,
  class: "po-text-base po-mt-4 po-max-w-md po-pb-5 po-block po-text-slate-500"
}, Fu = { class: "po-flex po-items-end po-justify-end po-flex-col" }, Nu = {
  key: 0,
  class: "po-flex md:po-justify-end po-mb-5"
}, Hu = { class: "po-bg-slate-50 po-shadow-sm po-rounded-xl po-py-5 po-px-2 po-divide-x po-divide-slate-200 po-flex" }, qu = ["onClick"], Yu = { class: "po-text-xl po-font-medium po-text-slate-600 po-flex po-items-center po-space-x-1" }, Uu = { class: "po-text-xl po-font-medium po-text-slate-600 group-hover:po-text-mpao-lightblue" }, Wu = { class: "po-text-sm po-text-slate-500 po-block group-hover:po-text-mpao-lightblue" }, Zu = { class: "po-flex po-items-center po-space-x-1 md:po-justify-end" }, Gu = {
  key: 2,
  class: "po-border-l po-border-slate-400 po-h-3 po-w-3 po-ml-1"
}, Ku = {
  key: 0,
  class: "po-bg-slate-50 po-p-5 po-mt-5 po-rounded-md po-grid po-grid-cols-1 md:po-grid-cols-3 po-gap-5"
}, Xu = /* @__PURE__ */ r("span", { class: "po-text-xs po-text-slate-500 po-py-5" }, "No filters available at the moment.", -1), Qu = {
  name: "PoPageTitle"
}, d2 = /* @__PURE__ */ D({
  ...Qu,
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
    const l = e.filterOn ? x(!0) : x(!1);
    function s(a) {
      t("pagination-click", a);
    }
    function n(a) {
      return a.iconColor ? a.iconColor : "po-slate-600";
    }
    return (a, i) => a.standAlone ? (p(), d("div", Eu, [
      r("h1", Bu, k(a.label), 1),
      a.description !== "" ? (p(), d("span", Iu, k(a.description), 1)) : C("", !0)
    ])) : (p(), d("div", zu, [
      r("div", Au, [
        r("div", null, [
          r("h1", ju, k(a.label), 1),
          a.description !== "" ? (p(), d("span", Ru, k(a.description), 1)) : C("", !0)
        ]),
        r("div", Fu, [
          a.stats !== null ? (p(), d("div", Nu, [
            r("div", Hu, [
              (p(!0), d(F, null, X(a.stats, (u) => (p(), d("div", {
                class: "po-px-5 po-cursor-pointer po-group genie-effect",
                onClick: (c) => a.$emit("stat-click", u)
              }, [
                r("span", Yu, [
                  r("span", Uu, k(u.value), 1),
                  u.icon ? (p(), d("span", {
                    key: 0,
                    class: L(["po-w-5 po-h-5", n(u)])
                  }, [
                    (p(), N(he(u.icon)))
                  ], 2)) : C("", !0)
                ]),
                r("span", Wu, k(u.label), 1)
              ], 8, qu))), 256))
            ])
          ])) : C("", !0),
          r("div", Zu, [
            a.showFilter ? (p(), d("button", {
              key: 0,
              title: "Filter",
              onClick: i[0] || (i[0] = (u) => {
                a.$emit("button-click", "filter"), l.value = !O(l);
              }),
              class: L([
                "po-p-2 po-rounded-md hover:po-bg-slate-200 po-transition-colors po-duration-75 po-ease-in-out",
                { "po-text-mpao-orange hover:po-text-mpao-orange": O(l) },
                { "tpo-ext-slate-600 hover:po-text-mpao-blue": !O(l) }
              ])
            }, [
              S(O(vn), { class: "po-w-4 po-stroke-current po-stroke-2" })
            ], 2)) : C("", !0),
            a.showDownload ? (p(), d("button", {
              key: 1,
              title: "Download",
              onClick: i[1] || (i[1] = (u) => a.$emit("button-click", "download")),
              class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
            }, [
              S(O(ln), { class: "po-w-4 po-stroke-current po-stroke-2" })
            ])) : C("", !0),
            a.showFilter && a.showPagination || a.showDownload && a.showPagination ? (p(), d("span", Gu, " ")) : C("", !0),
            a.showPagination ? (p(), N(Du, {
              key: 3,
              pagination: a.pagination,
              onButtonClick: s
            }, null, 8, ["pagination"])) : C("", !0)
          ])
        ])
      ]),
      S(Ze, {
        "enter-active-class": "po-transition po-duration-100 po-ease-out",
        "enter-from-class": "po-transform po-scale-95 po-opacity-0",
        "enter-to-class": "po-transform po-scale-100 po-opacity-100",
        "leave-active-class": "po-transition po-duration-75 po-ease-out",
        "leave-from-class": "po-transform po-scale-100 po-opacity-100",
        "leave-to-class": "po-transform po-scale-95 po-opacity-0"
      }, {
        default: z(() => [
          O(l) ? (p(), d("div", Ku, [
            K(a.$slots, "filters", {}, () => [
              Xu
            ])
          ])) : C("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), Ju = {
  key: 0,
  class: "po-w-12"
}, ed = ["onClick"], td = { class: "po-flex po-space-x-1 po-pr-2 po-items-center" }, od = { class: "po-grow" }, ld = {
  key: 0,
  class: "po-shrink-0 po-select-none po-bg-slate-100 po-rounded-md po-w-4 po-h-4 po-flex po-items-center po-justify-center po-cursor-pointer",
  role: "button"
}, sd = {
  key: 0,
  class: "po-w-12"
}, nd = ["onClick"], ad = ["colspan"], rd = { key: 1 }, id = ["colspan"], pd = { class: "po-py-10 po-block po-normal-case" }, ud = { class: "po-pr-5" }, dd = { class: "po-py-1" }, cd = { key: 0 }, fd = {
  name: "PoTable"
}, c2 = /* @__PURE__ */ D({
  ...fd,
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
    const o = e, { isLoading: l, tbody: s, thead: n } = Ie(o), a = x(!1), i = x(null), u = x(null), c = x(null);
    ee(l, () => {
      h();
    }), ee(s, () => {
      h(), w();
    }), Z(() => {
      h(), w(), i.value = n.value;
    });
    function h() {
      a.value = l.value, u.value = s.value, l.value && (u.value = [{}, {}, {}, {}, {}]);
    }
    function w() {
      if (o.hasDetailsRow && o.tbody)
        for (let m = 0; m < o.tbody.length; m++)
          o.tbody[m].showDetails = !1;
    }
    function y() {
      return Math.floor(Math.random() * 41) + 40;
    }
    const g = (m, f) => {
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
          m.hasDetailsRow ? (p(), d("th", Ju)) : C("", !0),
          (p(!0), d(F, null, X(i.value, (v, _) => (p(), d("th", {
            onClick: (b) => g(v, _)
          }, [
            r("span", td, [
              r("span", od, [
                K(m.$slots, "th", ut(dt(v)))
              ]),
              v.sortable ? (p(), d("span", ld, [
                v.sorted ? C("", !0) : (p(), N(O(Ai), {
                  key: 0,
                  class: "po-w-3 po-h-3"
                })),
                v.sorted && v.sortDirection === "asc" ? (p(), N(O(zi), {
                  key: 1,
                  class: "po-w-3 po-h-3"
                })) : C("", !0),
                v.sorted && v.sortDirection === "desc" ? (p(), N(O(Bi), {
                  key: 2,
                  class: "po-w-3 po-h-3"
                })) : C("", !0)
              ])) : C("", !0)
            ])
          ], 8, ed))), 256))
        ])
      ]),
      r("tbody", null, [
        u.value !== null && !a.value || u.value !== null && u.value.length !== 0 && !a.value ? (p(!0), d(F, { key: 0 }, X(u.value, (v, _) => (p(), d(F, null, [
          r("tr", null, [
            m.hasDetailsRow ? (p(), d("td", sd, [
              r("span", {
                onClick: (b) => v.showDetails = !v.showDetails
              }, [
                S(O(Ii), {
                  class: L(["po-w-5 po-fill-mpao-lightblue po-origin-center po-transition-transform po-duration-100 po-ease-out po-cursor-pointer", [{ "po-rotate-90": v.showDetails }]])
                }, null, 8, ["class"])
              ], 8, nd)
            ])) : C("", !0),
            K(m.$slots, "td", ut(dt({ ...v, index: _, item: v })))
          ]),
          m.hasDetailsRow ? (p(), d("tr", {
            key: 0,
            class: L(["po-table-details-row", [{ "po-hidden": !v.showDetails }]])
          }, [
            O(n) ? (p(), d("td", {
              key: 0,
              colspan: O(n).length + 1
            }, [
              K(m.$slots, "details", ut(dt({ item: v })))
            ], 8, ad)) : C("", !0)
          ], 2)) : C("", !0)
        ], 64))), 256)) : C("", !0),
        u.value == null && !a.value || u.value !== null && u.value.length == 0 && !a.value ? (p(), d("tr", rd, [
          O(n) ? (p(), d("td", {
            key: 0,
            colspan: O(n).length + 1,
            class: "po-text-center"
          }, [
            r("span", pd, k(m.emptyMessage), 1)
          ], 8, id)) : C("", !0)
        ])) : C("", !0),
        a.value ? (p(!0), d(F, { key: 2 }, X(u.value, (v) => (p(), d("tr", null, [
          (p(!0), d(F, null, X(O(n), (_) => (p(), d("td", ud, [
            r("div", dd, [
              r("div", {
                class: "po-h-2 loading-placeholder po-rounded-full",
                style: Do({ width: y() + "%" })
              }, null, 4)
            ])
          ]))), 256))
        ]))), 256)) : C("", !0)
      ]),
      m.$slots.tfoot ? (p(), d("tfoot", cd, [
        r("tr", null, [
          K(m.$slots, "tfoot")
        ])
      ])) : C("", !0)
    ], 2));
  }
}), vd = { class: "" }, hd = { class: "po-grow" }, md = ["onClick"], gd = {
  name: "PoDescriptionList"
}, bd = /* @__PURE__ */ D({
  ...gd,
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
        K(o.$slots, "content", {}, () => [
          (p(!0), d(F, null, X(o.items, (s) => (p(), d("div", null, [
            r("dt", null, k(s.title), 1),
            r("dd", vd, [
              r("span", hd, k(s.description), 1),
              s.action !== void 0 ? (p(), d("span", {
                key: 0,
                class: "po-shrink-0 po-text-mpao-lightblue hover:po-text-mpao-blue po-transition-colors po-duration-100 po-ease-in-out po-px-2 po-cursor-pointer",
                onClick: (n) => o.$emit("button-click", s.action)
              }, k(typeof s.action == "string" ? s.action : s.action.label), 9, md)) : C("", !0)
            ])
          ]))), 256))
        ])
      ], 2)
    ]));
  }
}), yd = ["for"], wd = { class: "po-capitalize" }, _d = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, $d = ["type", "name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], xd = {
  name: "PoInputField"
}, f2 = /* @__PURE__ */ D({
  ...xd,
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
    const n = x(void 0), a = (g) => {
      let m = g.target.value;
      n.value = m;
      let f = o.type === "currency" ? c(m) : m;
      t("update:modelValue", f);
    }, i = (g) => {
      u(g.target.value);
    };
    ee(o, (g, m) => {
      o.type === "currency" && n.value !== m.modelValue ? n.value = "" + il(o.modelValue) : n.value = o.modelValue;
    });
    const u = (g) => {
      let m = "";
      o.type === "currency" ? m = "" + il(c("" + g)) : m = g, n.value = m;
    }, c = (g) => {
      let m = g.replace(/,/g, "");
      const f = m.indexOf(".");
      return f !== -1 && m.substring(f + 1) === "00" && (m = m.substring(0, f)), m;
    };
    o.type === "currency" ? u(o.modelValue) : n.value = o.modelValue;
    const { uniqueId: h, generateUniqueId: w } = Ne(), y = x(o.id);
    return Z(() => {
      o.id === "" && (w(), y.value = h.value);
    }), (g, m) => (p(), d("div", {
      class: L(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": g.display === "horizontal" }]])
    }, [
      r("label", {
        for: y.value,
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700"
      }, [
        r("span", wd, k(g.label), 1),
        g.required ? (p(), d("span", _d, "*")) : C("", !0),
        S(He, { info: g.info }, null, 8, ["info"])
      ], 8, yd),
      r("input", Te({
        type: O(s),
        name: `${y.value}-field`,
        id: y.value,
        value: n.value,
        placeholder: g.placeholder,
        disabled: g.disabled,
        required: g.required,
        "aria-describedby": `${y.value}-description`,
        "aria-required": g.required,
        "aria-disabled": g.disabled
      }, g.$attrs, {
        onInput: a,
        onBlur: i,
        class: [
          "po-mt-1 peer po-block po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white focus:po-ring-0 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default",
          l()
        ]
      }), null, 16, $d),
      S(Ae, { message: g.message }, null, 8, ["message"]),
      S(ze, { "error-message": g.errorMessage }, null, 8, ["error-message"])
    ], 2));
  }
}), Vd = { class: "po-text-sm po-font-medium po-text-slate-700 peer-focus:po-text-mpao-lightblue peer-invalid:po-text-red-500 peer-invalid:peer-focus:po-text-red-600 po-flex po-items-center po-space-x-1 po-capitalize" }, kd = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Cd = ["name", "id", "value"], Sd = ["for"], Pd = { class: "po-flex po-items-center po-space-x-1" }, Od = {
  key: 0,
  class: "po-text-sm"
}, Ld = {
  key: 1,
  class: "po-text-sm"
}, Md = {
  name: "PoInputFile"
}, v2 = /* @__PURE__ */ D({
  ...Md,
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
    const l = x(""), s = (c) => {
      var w, y;
      const h = (y = (w = c.target) == null ? void 0 : w.files) == null ? void 0 : y[0];
      l.value = h ? h.name : "";
    }, n = (c) => {
      let h = c.target.value;
      t("update:modelValue", h);
    }, { uniqueId: a, generateUniqueId: i } = Ne(), u = x(o.id);
    return Z(() => {
      o.id === "" && (i(), u.value = a.value);
    }), (c, h) => (p(), d("div", {
      class: L(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": c.display === "horizontal" }]])
    }, [
      r("span", Vd, [
        r("span", null, k(c.label), 1),
        c.required ? (p(), d("span", kd, "*")) : C("", !0)
      ]),
      r("input", {
        name: `${u.value}-upload`,
        id: u.value,
        value: c.modelValue,
        type: "file",
        onInput: n,
        onChange: h[0] || (h[0] = (w) => s(w)),
        class: "po-sr-only po-peer"
      }, null, 40, Cd),
      r("label", {
        for: u.value,
        class: "po-mt-1 po-block po-w-full po-border po-cursor-pointer po-rounded-md po-border-slate-300 po-bg-white peer-focus:po-border-mpao-lightblue invalid:po-border-red-400 invalid:focus:po-border-red-600 invalid:focus:po-ring-red-600 sm:po-text-sm po-p-2"
      }, [
        r("div", Pd, [
          S(O(zl), { class: "po-w-4 po-stroke-slate-500" }),
          l.value ? (p(), d("span", Od, k(l.value), 1)) : (p(), d("span", Ld, "Choose file"))
        ])
      ], 8, Sd),
      S(Ae, { message: c.message }, null, 8, ["message"]),
      S(ze, { "error-message": c.errorMessage }, null, 8, ["error-message"])
    ], 2));
  }
});
var Oo = {}, Td = {
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
  })(Js, function() {
    var o = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, l = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d\d/, n = /\d\d?/, a = /\d*[^-_:/,()\s\d]+/, i = {}, u = function(f) {
      return (f = +f) + (f > 68 ? 1900 : 2e3);
    }, c = function(f) {
      return function(v) {
        this[f] = +v;
      };
    }, h = [/[+-]\d\d:?(\d\d)?|Z/, function(f) {
      (this.zone || (this.zone = {})).offset = function(v) {
        if (!v || v === "Z")
          return 0;
        var _ = v.match(/([+-]|\d\d)/g), b = 60 * _[1] + (+_[2] || 0);
        return b === 0 ? 0 : _[0] === "+" ? -b : b;
      }(f);
    }], w = function(f) {
      var v = i[f];
      return v && (v.indexOf ? v : v.s.concat(v.f));
    }, y = function(f, v) {
      var _, b = i.meridiem;
      if (b) {
        for (var V = 1; V <= 24; V += 1)
          if (f.indexOf(b(V, 0, v)) > -1) {
            _ = V > 12;
            break;
          }
      } else
        _ = f === (v ? "pm" : "PM");
      return _;
    }, g = { A: [a, function(f) {
      this.afternoon = y(f, !1);
    }], a: [a, function(f) {
      this.afternoon = y(f, !0);
    }], S: [/\d/, function(f) {
      this.milliseconds = 100 * +f;
    }], SS: [s, function(f) {
      this.milliseconds = 10 * +f;
    }], SSS: [/\d{3}/, function(f) {
      this.milliseconds = +f;
    }], s: [n, c("seconds")], ss: [n, c("seconds")], m: [n, c("minutes")], mm: [n, c("minutes")], H: [n, c("hours")], h: [n, c("hours")], HH: [n, c("hours")], hh: [n, c("hours")], D: [n, c("day")], DD: [s, c("day")], Do: [a, function(f) {
      var v = i.ordinal, _ = f.match(/\d+/);
      if (this.day = _[0], v)
        for (var b = 1; b <= 31; b += 1)
          v(b).replace(/\[|\]/g, "") === f && (this.day = b);
    }], M: [n, c("month")], MM: [s, c("month")], MMM: [a, function(f) {
      var v = w("months"), _ = (w("monthsShort") || v.map(function(b) {
        return b.slice(0, 3);
      })).indexOf(f) + 1;
      if (_ < 1)
        throw new Error();
      this.month = _ % 12 || _;
    }], MMMM: [a, function(f) {
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
      for (var b = (f = v.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(M, P, A) {
        var q = A && A.toUpperCase();
        return P || _[A] || o[A] || _[q].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(H, Y, W) {
          return Y || W.slice(1);
        });
      })).match(l), V = b.length, $ = 0; $ < V; $ += 1) {
        var E = b[$], I = g[E], R = I && I[0], T = I && I[1];
        b[$] = T ? { regex: R, parser: T } : E.replace(/^\[|\]$/g, "");
      }
      return function(M) {
        for (var P = {}, A = 0, q = 0; A < V; A += 1) {
          var H = b[A];
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
      var b = v.prototype, V = b.parse;
      b.parse = function($) {
        var E = $.date, I = $.utc, R = $.args;
        this.$u = I;
        var T = R[1];
        if (typeof T == "string") {
          var M = R[2] === !0, P = R[3] === !0, A = M || P, q = R[2];
          P && (q = R[2]), i = this.$locale(), !M && q && (i = _.Ls[q]), this.$d = function(U, G, ce) {
            try {
              if (["x", "X"].indexOf(G) > -1)
                return new Date((G === "X" ? 1e3 : 1) * U);
              var Q = m(G)(U), $e = Q.year, je = Q.month, Oe = Q.day, qe = Q.hours, Le = Q.minutes, Me = Q.seconds, Qe = Q.milliseconds, Je = Q.zone, Se = new Date(), et = Oe || ($e || je ? 1 : Se.getDate()), gt = $e || Se.getFullYear(), Ye = 0;
              $e && !je || (Ye = je > 0 ? je - 1 : Se.getMonth());
              var bt = qe || 0, pt = Le || 0, yt = Me || 0, wt = Qe || 0;
              return Je ? new Date(Date.UTC(gt, Ye, et, bt, pt, yt, wt + 60 * Je.offset * 1e3)) : ce ? new Date(Date.UTC(gt, Ye, et, bt, pt, yt, wt)) : new Date(gt, Ye, et, bt, pt, yt, wt);
            } catch {
              return new Date("");
            }
          }(E, T, I), this.init(), q && q !== !0 && (this.$L = this.locale(q).$L), A && E != this.format(T) && (this.$d = new Date("")), i = {};
        } else if (T instanceof Array)
          for (var H = T.length, Y = 1; Y <= H; Y += 1) {
            R[1] = T[Y - 1];
            var W = _.apply(this, R);
            if (W.isValid()) {
              this.$d = W.$d, this.$L = W.$L, this.init();
              break;
            }
            Y === H && (this.$d = new Date(""));
          }
        else
          V.call(this, $);
      };
    };
  });
})(Td);
const Dd = Oo, Ed = ["for"], Bd = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Id = { class: "po-relative po-mt-1" }, zd = {
  role: "button",
  ref: "comboboxButton"
}, Ad = ["disabled", "id"], jd = { class: "po-flex po-items-center po-justify-between po-w-full po-px-2 po-pb-1" }, Rd = {
  class: "po-p-2 po-rounded-md hover:po-bg-slate-100 po-cursor-pointer po-transition-colors po-duration-150 po-ease-out po-text-sm po-slate-600 po-select-none",
  role: "button"
}, Fd = /* @__PURE__ */ r("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), Nd = { class: "po-grid po-grid-cols-3 po-p-1" }, Hd = { class: "" }, qd = ["onClick"], Yd = {
  name: "PoMonthYearPicker"
}, h2 = /* @__PURE__ */ D({
  ...Yd,
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
    ne.extend(en), ne.extend(tn), ne.extend(Dd), ne.tz.setDefault("Indian/Maldives");
    const l = x(""), s = x(!1), n = x(), a = x(null), i = x(ne().year()), u = x(ne().month()), { uniqueId: c, generateUniqueId: h } = Ne(), w = x(o.id), y = x(), g = x({
      viewStartIdx: 0,
      viewEndIdx: 0,
      visibleStartIdx: 0,
      visibleEndIdx: 0
    });
    let m;
    Z(() => {
      if (o.modelValue) {
        const M = ne(`02-${o.modelValue + 1}`, "DD-MM-YYYY");
        l.value = o.modelValue, u.value = M.month() + 1, i.value = M.year();
      }
      o.id === "" && (h(), w.value = c.value), m = Et(n.value, y.value, {
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
    const f = B(() => i.value === ne(o.minDate, "DD-MM-YYYY").year()), v = B(() => i.value === ne(o.maxDate, "DD-MM-YYYY").year()), _ = B(() => {
      if (l.value !== "")
        return ne(`02-${l.value}`, "DD-MM-YYYY").format(
          o.displayFormat
        );
    });
    B(() => {
      const M = ne(o.minDate, "DD-MM-YYYY").year(), P = ne(o.maxDate, "DD-MM-YYYY").year();
      return Array.from(
        { length: P - M + 1 },
        (A, q) => M + q
      );
    });
    const b = B(() => Array.from({ length: 12 }, (M, P) => ({
      number: P + 1,
      year: i.value,
      value: `${ne(`${P + 1}-23-2023`).format("MM")}-${i.value}`,
      name: ne().month(P).format("MMM"),
      disabled: f.value && P + 1 < ne(o.minDate, "DD-MM-YYYY").month() + 1 || v.value && P + 1 > ne(o.maxDate, "DD-MM-YYYY").month() + 1
    })));
    function V(M) {
      return l.value === M.value;
    }
    function $() {
      i.value !== ne(o.maxDate, "DD-MM-YYYY").year() && (i.value = ne(`01-01-${i.value}`, "DD-MM-YYYY").add(1, "year").year());
    }
    function E() {
      i.value !== ne(o.minDate, "DD-MM-YYYY").year() && (i.value = ne(`01-01-${i.value}`, "DD-MM-YYYY").subtract(1, "year").year());
    }
    function I(M) {
      M.disabled || (l.value = M.value, u.value = M.number, i.value = M.year, t("update:modelValue", M.value));
    }
    Bt(a, () => {
      s.value = !1;
    }), xe.on("sidebarOpen", (M) => {
      setTimeout(() => {
        m && m.update();
      }, 320);
    }), re(() => {
      m && m.destroy();
    });
    function R(M, P, A, q) {
      g.value.viewStartIdx = M, g.value.viewEndIdx = P, g.value.visibleStartIdx = A, g.value.visibleEndIdx = q;
    }
    function T() {
      m && m.update();
    }
    return (M, P) => (p(), d("div", {
      class: L([{ "lg:po-grid lg:po-grid-cols-2": M.display === "horizontal" }]),
      ref_key: "containerRef",
      ref: a
    }, [
      r("label", {
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700",
        for: w.value
      }, [
        r("span", null, k(M.label), 1),
        M.required ? (p(), d("span", Bd, "*")) : C("", !0),
        S(He, { info: M.info }, null, 8, ["info"])
      ], 8, Ed),
      r("div", Id, [
        r("div", zd, [
          Pe(r("input", {
            type: "text",
            ref_key: "selectBox",
            ref: n,
            readonly: "",
            class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm",
            disabled: M.disabled,
            "onUpdate:modelValue": P[0] || (P[0] = (A) => _.value = A),
            onFocus: P[1] || (P[1] = (A) => s.value = !0),
            id: w.value
          }, null, 40, Ad), [
            [Ot, _.value]
          ]),
          r("span", {
            class: "po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-rounded-r-md po-px-2 focus:po-outline-none",
            role: "button",
            onMousedown: P[2] || (P[2] = le((A) => s.value = !s.value, ["stop"]))
          }, [
            S(O(ji), {
              class: "po-h-5 po-w-5 po-text-slate-400",
              "aria-hidden": "true"
            })
          ], 32)
        ], 512),
        Pe(r("div", {
          ref_key: "popper",
          ref: y,
          class: "po-absolute po-z-10 po-mt-1 po-w-full po-rounded-md po-max-w-[290px] po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm",
          onResize: T,
          onUpdate: R
        }, [
          r("div", jd, [
            r("span", {
              class: "po-p-2 po-rounded-md hover:po-bg-slate-100 po-cursor-pointer po-transition-colors po-duration-150 po-ease-out po-select-none",
              role: "button",
              onClick: E
            }, [
              S(O(Bl), { class: "po-w-4 po-stroke-slate-500 po-stroke-2" })
            ]),
            r("span", Rd, k(i.value), 1),
            r("span", {
              class: "po-p-2 po-rounded-md hover:po-bg-slate-100 po-cursor-pointer po-transition-colors po-duration-150 po-ease-out po-select-none",
              role: "button",
              onClick: $
            }, [
              S(O(Il), { class: "po-w-4 po-stroke-slate-500 po-stroke-2" })
            ])
          ]),
          Fd,
          r("div", Nd, [
            (p(!0), d(F, null, X(b.value, (A) => (p(), d("div", Hd, [
              r("span", {
                class: L(["po-flex po-items-center po-justify-center po-py-2 po-px-2 po-group", [{ "po-cursor-pointer": !A.disabled }]]),
                onClick: (q) => I(A)
              }, [
                r("span", {
                  class: L(["po-px-4 po-text-sm po-py-1 po-rounded-full po-text-center po-transition-colors po-duration-150 po-ease-out", [
                    {
                      " po-text-slate-600 group-hover:po-bg-slate-100": !V(A) && !A.disabled
                    },
                    {
                      "po-cursor-default po-select-none po-text-slate-400": A.disabled
                    },
                    {
                      " po-text-white po-bg-mpao-lightblue group-hover:po-bg-purple-600": V(A)
                    }
                  ]])
                }, k(A.name), 3)
              ], 10, qd)
            ]))), 256))
          ])
        ], 544), [
          [Lt, s.value]
        ])
      ]),
      S(Ae, { message: M.message }, null, 8, ["message"]),
      S(ze, { "error-message": M.errorMessage }, null, 8, ["error-message"])
    ], 2));
  }
}), Ud = { class: "po-text-sm po-font-medium po-text-slate-700 po-cursor-pointer po-select-none po-flex po-items-center po-space-x-1" }, Wd = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Zd = {
  name: "PoToggle"
}, m2 = /* @__PURE__ */ D({
  ...Zd,
  props: {
    modelValue: { type: Boolean, default: !1 },
    label: { default: "" },
    required: { type: Boolean, default: !1 },
    info: { default: "" },
    message: { default: null },
    errorMessage: { default: null }
  },
  setup(e) {
    const o = x(e.modelValue);
    return (l, s) => (p(), d("div", null, [
      S(O(Or), {
        as: "div",
        class: "po-flex po-items-center"
      }, {
        default: z(() => [
          S(O(Lr), {
            modelValue: o.value,
            "onUpdate:modelValue": s[0] || (s[0] = (n) => o.value = n),
            onClick: s[1] || (s[1] = (n) => l.$emit("update:modelValue", !o.value)),
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
          S(O(Mr), {
            as: "span",
            class: "po-ml-3"
          }, {
            default: z(() => [
              r("span", Ud, [
                r("span", null, k(l.label), 1),
                l.required ? (p(), d("span", Wd, "*")) : C("", !0),
                S(He, { info: l.info }, null, 8, ["info"])
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      S(Ae, { message: l.message }, null, 8, ["message"]),
      S(ze, { "error-message": l.errorMessage }, null, 8, ["error-message"])
    ]));
  }
}), Gd = { class: "po-pt-1 po-space-y-1 po-border-r-2 po-border-slate-200 po-relative" }, Kd = ["onClick"], Xd = {
  name: "PoSectionMenu"
}, g2 = /* @__PURE__ */ D({
  ...Xd,
  props: {
    currPageRoute: { default: "" },
    menuItems: { default: null }
  },
  emits: ["link-click"],
  setup(e, { emit: t }) {
    return (o, l) => (p(), d("ul", Gd, [
      (p(!0), d(F, null, X(o.menuItems, (s) => (p(), d("li", null, [
        r("span", {
          onClick: (n) => o.$emit("link-click", s.link),
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
        ], 10, Kd)
      ]))), 256))
    ]));
  }
}), Qd = { class: "po-relative po-flex po-items-start" }, Jd = { class: "po-flex po-h-5 po-items-center" }, ec = ["name", "id", "checked", "disabled", "aria-describedby"], tc = { class: "po-ml-3 po-text-sm" }, oc = ["for"], lc = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, sc = ["id"], nc = { class: "po-sr-only" }, ac = ["id"], rc = {
  name: "PoCheckbox"
}, b2 = /* @__PURE__ */ D({
  ...rc,
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
      r("div", Qd, [
        r("div", Jd, [
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
          }), null, 16, ec)
        ]),
        r("div", tc, [
          r("label", {
            for: o.id,
            class: "po-font-medium po-text-slate-600 po-cursor-pointer po-select-none po-flex po-items-center po-space-x-1"
          }, [
            r("span", null, k(o.label), 1),
            o.required ? (p(), d("span", lc, "*")) : C("", !0)
          ], 8, oc),
          o.message ? (p(), d("span", {
            key: 0,
            id: `${o.id}-description`,
            class: "po-text-slate-500 po-cursor-default"
          }, [
            r("span", nc, k(o.label), 1),
            J(" " + k(o.message), 1)
          ], 8, sc)) : C("", !0)
        ])
      ]),
      o.errorMessage !== null ? (p(), d("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${o.id}-error`
      }, k(o.errorMessage), 9, ac)) : C("", !0)
    ]));
  }
});
function ic(e, t) {
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
function pc(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", { d: "M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" })
  ]);
}
function uc(e, t) {
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
const dc = /* @__PURE__ */ r("div", { class: "po-pb-5 po-max-w-xl" }, [
  /* @__PURE__ */ r("span", { class: "po-text-sm po-text-slate-600" }, "We're always working to improve our app, and we're excited to share the latest changes with you. We hope you enjoy these new features and improvements")
], -1), cc = { class: "po-flex po-space-x-2" }, fc = ["onClick"], vc = { class: "po-text-sm po-font-semibold po-slate-800" }, hc = { class: "po-text-xs po-text-white po-px-1 po-py-0 po-rounded-md po-bg-mpao-lightblue" }, mc = { class: "po-bg-gradient-to-t po-from-mpao-orange/20 po-via-mpao-lightblue/20 po-to-purple-500/10 -po-mb-5 -po-mx-5 po-p-5 po-pb-10" }, gc = { key: 0 }, bc = { class: "po-space-y-2 po-mt-5" }, yc = { class: "po-border po-border-slate-200 po-rounded-lg po-p-3 po-bg-white" }, wc = { class: "po-flex po-items-center po-space-x-2" }, _c = { class: "po-text-mpao-lightblue po-grow po-text-lg" }, $c = { class: "po-font-semibold po-shrink-0 po-text-mpao-lightblue po-text-sm po-px-2 po-py-1 po-rounded-xl po-bg-mpao-lightblue/10" }, xc = ["innerHTML"], Vc = {
  key: 0,
  class: "po-bg-white po-rounded-md po-px-4 po-py-3 po-block po-text-sm po-text-center po-text-mpao-lightblue hover:po-text-purple-600 po-cursor-pointer"
}, kc = /* @__PURE__ */ D({
  __name: "ChangeLogModel",
  props: {
    changelog: { default: null },
    showBtn: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = x(!1), o = x(0);
    return (l, s) => (p(), d(F, null, [
      l.showBtn ? (p(), d("a", {
        key: 0,
        href: "#",
        onClick: s[0] || (s[0] = le((n) => t.value = !0, ["prevent"])),
        class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
      }, "Change logs")) : C("", !0),
      S(jt, {
        show: t.value,
        onModalClosed: s[1] || (s[1] = (n) => t.value = !1),
        "modal-title": "Change Log",
        "modal-width": "sm:po-max-w-4xl",
        id: "change-log-modal"
      }, {
        content: z(() => [
          r("div", null, [
            dc,
            r("div", cc, [
              (p(!0), d(F, null, X(l.changelog, (n, a) => (p(), d("span", {
                class: L(["po-flex po-items-center po-space-x-1 po-px-4 po-py-3 po-rounded-t-xl po-cursor-pointer", [{ "po-bg-purple-500/10": o.value === a }]]),
                onClick: (i) => o.value = a
              }, [
                r("span", vc, k(n.label) + " Version", 1),
                r("span", hc, k(n.latest_version), 1)
              ], 10, fc))), 256))
            ]),
            r("div", mc, [
              (p(!0), d(F, null, X(l.changelog, (n, a) => (p(), d("div", null, [
                o.value === a ? (p(), d("div", gc, [
                  r("div", bc, [
                    (p(!0), d(F, null, X(n.version_history, (i) => (p(), d("div", yc, [
                      r("span", wc, [
                        r("span", _c, k(i.date), 1),
                        r("span", $c, k(i.version), 1)
                      ]),
                      r("div", {
                        class: "po-mt-3 po-prose-sm po-prose-slate",
                        innerHTML: i.note
                      }, null, 8, xc)
                    ]))), 256)),
                    n.hasMore ? (p(), d("span", Vc, "More")) : C("", !0)
                  ])
                ])) : C("", !0)
              ]))), 256))
            ])
          ])
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), io = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [l, s] of t)
    o[l] = s;
  return o;
}, Cc = {}, Sc = {
  class: "po-h-8",
  src: "https://pension.gov.mv/asset/image/en-ccc-2020-issa.png",
  alt: "issa Certificate"
};
function Pc(e, t) {
  return p(), d("img", Sc);
}
const Oc = /* @__PURE__ */ io(Cc, [["render", Pc]]), Lc = {}, Mc = {
  class: "po-h-8",
  src: "https://pension.gov.mv/asset/image/iso_logo.png",
  alt: "ISO 27001 Certificate"
};
function Tc(e, t) {
  return p(), d("img", Mc);
}
const Dc = /* @__PURE__ */ io(Lc, [["render", Tc]]), Ec = { class: "-po-m-5" }, Bc = ["src", "alt"], Tl = /* @__PURE__ */ D({
  __name: "CertificateModel",
  props: {
    src: { default: "" },
    title: { default: "" },
    logo: { default: null }
  },
  setup(e) {
    const t = x(!1);
    return (o, l) => (p(), d(F, null, [
      (p(), N(he(o.logo), {
        onClick: l[0] || (l[0] = le((s) => t.value = !0, ["prevent"])),
        class: "po-cursor-pointer",
        role: "button"
      })),
      S(jt, {
        show: t.value,
        onModalClosed: l[1] || (l[1] = (s) => t.value = !1),
        "modal-title": o.title,
        "modal-width": "sm:po-max-w-4xl",
        id: "change-log-modal"
      }, {
        content: z(() => [
          r("div", Ec, [
            r("img", {
              src: o.src,
              alt: o.title
            }, null, 8, Bc)
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
], -1), zc = /* @__PURE__ */ D({
  __name: "ToCModel",
  setup(e) {
    const t = x(!1);
    return (o, l) => (p(), d(F, null, [
      r("a", {
        href: "#",
        onClick: l[0] || (l[0] = le((s) => t.value = !0, ["prevent"])),
        role: "button",
        class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
      }, "Terms & Conditions"),
      S(jt, {
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
}), Ac = /* @__PURE__ */ r("div", { class: "po-prose-sm po-prose-slate po-p-5 po-opacity-80" }, [
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
], -1), jc = /* @__PURE__ */ D({
  __name: "PrivacyPolicyModel",
  setup(e) {
    const t = x(!1);
    return (o, l) => (p(), d(F, null, [
      r("a", {
        href: "#",
        onClick: l[0] || (l[0] = le((s) => t.value = !0, ["prevent"])),
        role: "button",
        class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
      }, "Privacy Policy"),
      S(jt, {
        show: t.value,
        onModalClosed: l[1] || (l[1] = (s) => t.value = !1),
        "modal-title": "Privacy Policy",
        "modal-width": "sm:po-max-w-3xl",
        id: "change-log-modal"
      }, {
        content: z(() => [
          Ac
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Rc = { class: "po-grid po-gap-5 po-grid-cols-1 lg:po-grid-cols-2 po-px-6 lg:po-px-8 po-mt-10 po-pb-10" }, Fc = { class: "sm:po-flex po-items-start sm:po-space-x-5" }, Nc = /* @__PURE__ */ r("svg", {
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
], -1), Hc = { class: "po-mt-5 sm:po-mt-0" }, qc = /* @__PURE__ */ r("p", { class: "-po-mt-1 po-text-xs po-text-slate-500" }, " 8th Floor, Allied Building , Chaandhanee Magu, Malé, 20156, Maldives ", -1), Yc = { class: "po-mt-1 po-text-xs po-text-slate-500" }, Uc = { class: "po-mt-1 po-text-xs po-text-slate-500 po-flex -po-mb-2 po-flex-wrap" }, Wc = {
  href: "https://www.pension.gov.mv",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, Zc = /* @__PURE__ */ r("span", null, "www.pension.gov.mv", -1), Gc = {
  href: "mailto:info@pension.gov.mv",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, Kc = /* @__PURE__ */ r("span", null, "info@pension.gov.mv", -1), Xc = {
  href: "tel:1441",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, Qc = /* @__PURE__ */ r("span", null, "1441", -1), Jc = { class: "po-flex lg:po-items-end po-flex-col" }, e1 = { class: "-po-mt-1 po-text-xs po-text-slate-500 po-flex -po-mb-2 po-flex-wrap" }, t1 = { class: "po-flex po-space-x-2 po-mt-3 lg:po-justify-end" }, o1 = {
  name: "PoFooter"
}, y2 = /* @__PURE__ */ D({
  ...o1,
  props: {
    changelog: { default: null }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, l) => (p(), d("div", null, [
      r("section", Rc, [
        r("div", Fc, [
          Nc,
          r("div", Hc, [
            qc,
            r("p", Yc, " © " + k(new Date().getFullYear()) + " Pension Office, All Rights Reserved. ", 1),
            r("p", Uc, [
              r("a", Wc, [
                S(O(pc), { class: "po-w-3 po-h-3 po-fill-current" }),
                Zc
              ]),
              r("a", Gc, [
                S(O(ic), { class: "po-w-3 po-h-3 po-fill-current" }),
                Kc
              ]),
              r("a", Xc, [
                S(O(uc), { class: "po-w-3 po-h-3 po-fill-current" }),
                Qc
              ])
            ])
          ])
        ]),
        r("div", Jc, [
          r("nav", e1, [
            S(kc, {
              "show-btn": o.changelog !== null,
              changelog: o.changelog
            }, null, 8, ["show-btn", "changelog"]),
            S(zc),
            S(jc)
          ]),
          r("div", t1, [
            S(Tl, {
              logo: Dc,
              title: "ISO/IEC 27001:2013 Certificate",
              src: ""
            }),
            S(Tl, {
              logo: Oc,
              title: "issa Certificate",
              src: ""
            })
          ])
        ])
      ])
    ]));
  }
}), l1 = { class: "po-text-sm po-text-red-700" }, s1 = {
  key: 0,
  class: "po-text-sm po-text-red-800 po-list-disc po-ml-5 po-mt-2"
}, n1 = {
  key: 1,
  class: "po-flex po-items-start po-space-x-3 po-p-5 po-bg-green-50 po-rounded-md po-mt-5"
}, a1 = { class: "po-text-sm po-text-green-700" }, r1 = {
  name: "PoFormStatusMessage"
}, w2 = /* @__PURE__ */ D({
  ...r1,
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
      S(O(go), { class: "po-shrink-0 po-w-6 po-stroke-red-600" }),
      r("div", null, [
        r("span", l1, k(t.message), 1),
        t.errorList !== null ? (p(), d("ul", s1, [
          (p(!0), d(F, null, X(t.errorList, (l) => (p(), d("li", null, k(l), 1))), 256))
        ])) : C("", !0)
      ])
    ], 2)) : (p(), d("div", n1, [
      S(O(dn), { class: "po-w-6 po-stroke-green-600" }),
      r("div", null, [
        r("span", a1, k(t.message), 1)
      ])
    ]));
  }
}), i1 = {
  key: 0,
  class: "po-text-lg po-text-red-400 po-font-semibold"
}, p1 = ["id"], u1 = { class: "po-flex po-flex-1" }, d1 = { class: "po-flex po-flex-col" }, c1 = {
  name: "PoRadioInput"
}, _2 = /* @__PURE__ */ D({
  ...c1,
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
    const o = e, l = x();
    l.value = o.modelValue;
    const { uniqueId: s, generateUniqueId: n } = Ne(), a = x(o.id);
    return Z(() => {
      o.id === "" && (n(), a.value = s.value);
    }), To(() => {
      l.value = o.modelValue;
    }), ee(l, () => {
      t("update:modelValue", l.value), t("selected", l.value);
    }), (i, u) => (p(), N(O(kr), {
      modelValue: l.value,
      "onUpdate:modelValue": u[0] || (u[0] = (c) => l.value = c),
      class: L([{ "lg:po-grid lg:po-grid-cols-2": i.display === "horizontal" }])
    }, {
      default: z(() => [
        S(O(kl), {
          class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700",
          for: a.value
        }, {
          default: z(() => [
            r("span", null, k(i.label), 1),
            i.required ? (p(), d("span", i1, "*")) : C("", !0),
            S(He, { info: i.info }, null, 8, ["info"])
          ]),
          _: 1
        }, 8, ["for"]),
        i.options !== null ? (p(), d("div", {
          key: 0,
          class: "po-mt-1 po-flex -po-mb-3 po-flex-wrap",
          id: a.value
        }, [
          (p(!0), d(F, null, X(i.options, (c) => (p(), N(O(Sr), {
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
                r("span", u1, [
                  r("span", d1, [
                    S(O(kl), {
                      as: "span",
                      class: "po-block po-text-sm po-font-medium po-text-gray-900"
                    }, {
                      default: z(() => [
                        J(k(c.title), 1)
                      ]),
                      _: 2
                    }, 1024),
                    c.description ? (p(), N(O(Pr), {
                      key: 0,
                      as: "span",
                      class: "po-mt-1 po-flex po-items-center po-text-sm po-text-gray-500"
                    }, {
                      default: z(() => [
                        J(k(c.description), 1)
                      ]),
                      _: 2
                    }, 1024)) : C("", !0)
                  ])
                ])
              ], 2)
            ]),
            _: 2
          }, 1032, ["value"]))), 128))
        ], 8, p1)) : C("", !0),
        r("div", null, [
          S(Ae, { message: i.message }, null, 8, ["message"]),
          S(ze, { "error-message": i.errorMessage }, null, 8, ["error-message"])
        ])
      ]),
      _: 1
    }, 8, ["modelValue", "class"]));
  }
}), f1 = { class: "po-bg-white po-relative po-group po-rounded-xl focus-within:po-ring-2 focus-within:po-ring-inset focus-within:po-ring-indigo-500" }, v1 = { class: "po-block po-p-4 po-transition-colors po-duration-75 po-ease-linear" }, h1 = { class: "po-flex po-items-start po-space-x-2" }, m1 = { class: "po-flex po-items-start po-space-x-1" }, g1 = { class: "po-block po-text-2xl po-font-light po-text-slate-600" }, b1 = {
  key: 0,
  class: "po-text-sm po-text-green-500 po-font-medium po-pt-1"
}, y1 = { class: "po-text-sm po-tracking-wide po-text-slate-500" }, w1 = {
  name: "PoStatsBlock"
}, $2 = /* @__PURE__ */ D({
  ...w1,
  props: {
    items: { default: null },
    numberOfCols: { default: "po-grid-cols-1 lg:po-grid-cols-3" }
  },
  setup(e) {
    return (t, o) => (p(), d("div", {
      class: L(["po-grid po-gap-5", t.numberOfCols])
    }, [
      (p(!0), d(F, null, X(t.items, (l) => (p(), d("div", f1, [
        r("span", v1, [
          r("div", h1, [
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
              r("div", m1, [
                r("span", g1, k(l.value), 1),
                l.diff ? (p(), d("span", b1, k(l.diff), 1)) : C("", !0)
              ]),
              r("h4", y1, k(l.label), 1)
            ])
          ])
        ])
      ]))), 256))
    ], 2));
  }
}), _1 = {
  key: 0,
  class: "po-flex po-space-x-3 po-items-start"
}, $1 = { class: "po-flex po-items-center po-space-x-2" }, x1 = ["datetime"], V1 = { class: "po-text-sm po-font-medium po-text-slate-600" }, k1 = ["datetime"], C1 = { class: "flex" }, S1 = { class: "po-flex po-pt-3 po-flex-wrap po-max-w-sm" }, P1 = ["onClick"], O1 = {
  key: 1,
  class: "po-w-full po-text-center"
}, L1 = { class: "po-inline-block po-text-sm po-italic po-text-slate-500" }, M1 = /* @__PURE__ */ r("span", { class: "po-text-lg po-text-slate-300 po-px-3 po-inline-block" }, "—", -1), T1 = ["datetime"], D1 = {
  name: "PoChatLogItem"
}, x2 = /* @__PURE__ */ D({
  ...D1,
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
      t.item.type !== "message" ? (p(), d("div", _1, [
        t.item.type !== "first" && t.item.avatar !== "" ? (p(), d("div", {
          key: 0,
          class: "po-shrink-0 po-w-8 po-h-8 po-rounded-full po-p-1 po-bg-contain po-bg-slate-100",
          style: Do({ "background-image": `url(${t.item.avatar})` })
        }, null, 4)) : C("", !0),
        r("div", {
          class: L([
            { "po-pt-1": t.item.type !== "first" },
            {
              "po-flex po-justify-end po-items-end po-flex-col": t.item.type === "first"
            }
          ])
        }, [
          r("span", $1, [
            t.item.type === "first" ? (p(), d("time", {
              key: 0,
              datetime: t.item.time,
              class: "po-text-xs po-text-slate-400"
            }, k(t.item.time_human), 9, x1)) : C("", !0),
            r("span", V1, k(t.item.name), 1),
            t.item.type === "second" ? (p(), d("time", {
              key: 1,
              datetime: t.item.time,
              class: "po-text-xs po-text-slate-400"
            }, k(t.item.time_human), 9, k1)) : C("", !0)
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
              (p(!0), d(F, null, X(t.item.message, (l) => (p(), d("div", C1, [
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
            r("div", S1, [
              (p(!0), d(F, null, X(t.item.actions, (l) => (p(), d("button", {
                onClick: (s) => t.$emit("button-click", l.label),
                class: "po-appearance-none po-border po-border-mpao-lightblue po-bg-white hover:po-bg-mpao-lightblue po-px-3 po-py-1 po-mb-2 po-mr-2 po-rounded-lg po-text-slate-500 hover:po-text-sky-100 po-transition-colors po-duration-150 po-ease-in-out po-text-sm po-ring-0 po-outline-none"
              }, k(l.label), 9, P1))), 256))
            ])
          ], 2)
        ], 2)
      ])) : C("", !0),
      t.item.type === "message" ? (p(), d("div", O1, [
        (p(!0), d(F, null, X(t.item.message, (l) => (p(), d("p", L1, [
          J(k(l) + " ", 1),
          M1,
          r("time", {
            datetime: t.item.time,
            class: "po-text-xs po-text-slate-400 po-inline-block"
          }, k(t.item.time_human), 9, T1)
        ]))), 256))
      ])) : C("", !0)
    ], 2));
  }
}), E1 = {
  key: 0,
  class: "po-pointer-events-auto po-w-full po-max-w-sm po-overflow-hidden po-rounded-lg po-bg-mpao-lightblue po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5"
}, B1 = { class: "po-p-4" }, I1 = { class: "po-flex po-items-start" }, z1 = { class: "po-flex-shrink-0" }, A1 = { class: "po-ml-3 po-w-0 po-flex-1 po-pt-0.5" }, j1 = { class: "po-text-sm po-font-medium po-text-sky-100" }, R1 = { class: "po-mt-1 po-text-sm po-text-sky-300" }, F1 = { class: "po-mt-3 po-flex po-space-x-4" }, N1 = { class: "po-ml-4 po-flex po-flex-shrink-0" }, H1 = /* @__PURE__ */ r("span", { class: "po-sr-only" }, "Close", -1), q1 = {
  name: "PoNotification"
}, V2 = /* @__PURE__ */ D({
  ...q1,
  props: {
    show: { type: Boolean, default: !1 },
    label: { default: "" },
    text: { default: "" },
    buttonLabel: { default: "Ok" }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    const o = e, { show: l } = Ie(o), s = x(!1);
    ee(l, () => {
      s.value = !1, setTimeout(() => {
        s.value = !0;
      }, 100);
    });
    const n = x(!1);
    return ee(s, () => {
      n.value = !1, setTimeout(() => {
        n.value = !0;
      }, 200);
    }), (a, i) => s.value ? (p(), N(Mt, {
      key: 0,
      to: "#po-notifications-alert"
    }, [
      S(Ze, {
        "enter-active-class": "po-transform po-ease-out po-duration-300 po-transition",
        "enter-from-class": "po-translate-y-2 po-opacity-0 sm:po-translate-y-0 sm:po-translate-x-2",
        "enter-to-class": "po-translate-y-0 po-opacity-100 sm:po-translate-x-0",
        "leave-active-class": "po-transition po-ease-in po-duration-100",
        "leave-from-class": "po-opacity-100",
        "leave-to-class": "po-opacity-0"
      }, {
        default: z(() => [
          n.value ? (p(), d("div", E1, [
            r("div", B1, [
              r("div", I1, [
                r("div", z1, [
                  K(a.$slots, "icon")
                ]),
                r("div", A1, [
                  r("p", j1, k(a.label), 1),
                  r("p", R1, k(a.text), 1),
                  r("div", F1, [
                    r("button", {
                      onClick: i[0] || (i[0] = (u) => a.$emit("button-click", a.buttonLabel)),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-100 hover:po-text-sky-200 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, k(a.buttonLabel), 1),
                    r("button", {
                      onClick: i[1] || (i[1] = (u) => s.value = !1),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-300 hover:po-text-sky-500 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, " Dismiss ")
                  ])
                ]),
                r("div", N1, [
                  r("button", {
                    type: "button",
                    onClick: i[2] || (i[2] = (u) => s.value = !1),
                    class: "po-inline-flex po-rounded-md po-bg-mpao-lightblue po-text-sky-500 hover:po-text-sky-300 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                  }, [
                    H1,
                    S(O(Os), {
                      class: "po-h-5 po-w-5",
                      "aria-hidden": "true"
                    })
                  ])
                ])
              ])
            ])
          ])) : C("", !0)
        ]),
        _: 3
      })
    ])) : C("", !0);
  }
}), Y1 = /* @__PURE__ */ r("div", { class: "po-fixed po-inset-0" }, null, -1), U1 = { class: "po-absolute po-inset-0 po-overflow-hidden" }, W1 = { class: "po-pointer-events-none po-fixed po-inset-y-0 po-right-0 po-flex po-max-w-full po-pl-10" }, Z1 = { class: "po-flex po-h-full po-flex-col po-overflow-y-auto po-bg-white po-shadow-xl" }, G1 = { class: "po-bg-slate-50 po-py-6 po-px-4 sm:po-px-6" }, K1 = { class: "po-flex po-items-center po-justify-between" }, X1 = { class: "po-ml-3 po-flex po-h-7 po-items-center" }, Q1 = /* @__PURE__ */ r("span", { class: "po-sr-only" }, "Close panel", -1), J1 = {
  key: 0,
  class: "po-mt-1"
}, e0 = { class: "po-text-sm po-text-slate-500" }, t0 = {
  key: 0,
  class: "po-bg-slate-50 po-rounded-b-xl po-shrink-0"
}, o0 = {
  name: "PoSlideover"
}, k2 = /* @__PURE__ */ D({
  ...o0,
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
    const o = e, { show: l } = Ie(o), s = x(!1);
    ee(l, () => {
      s.value = l.value;
    });
    function n() {
      s.value = !1, t("slideover-closed", !0);
    }
    return (a, i) => (p(), N(O(At), {
      as: "template",
      show: s.value
    }, {
      default: z(() => [
        S(O(eo), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: n
        }, {
          default: z(() => [
            Y1,
            r("div", {
              class: L(["po-fixed po-inset-0 po-overflow-hidden po-bg-black", a.screenOpacity])
            }, [
              r("div", U1, [
                r("div", W1, [
                  S(O(Ke), {
                    as: "template",
                    enter: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "enter-from": "po-translate-x-full",
                    "enter-to": "po-translate-x-0",
                    leave: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "leave-from": "po-translate-x-0",
                    "leave-to": "po-translate-x-full"
                  }, {
                    default: z(() => [
                      S(O(to), {
                        class: L([a.maxWidth, "po-pointer-events-auto po-w-screen"])
                      }, {
                        default: z(() => [
                          r("div", Z1, [
                            r("div", G1, [
                              r("div", K1, [
                                S(O(vs), { class: "po-text-lg po-font-medium po-text-slate-600" }, {
                                  default: z(() => [
                                    J(k(a.label), 1)
                                  ]),
                                  _: 1
                                }),
                                r("div", X1, [
                                  r("button", {
                                    type: "button",
                                    class: "po-rounded-md po-text-slate-500 hover:po-text-mpao-lightblue focus:po-outline-none focus:po-ring-2 focus:po-ring-white",
                                    onClick: n
                                  }, [
                                    Q1,
                                    S(O(Zt), {
                                      class: "po-h-6 po-w-6",
                                      "aria-hidden": "true"
                                    })
                                  ])
                                ])
                              ]),
                              a.description ? (p(), d("div", J1, [
                                r("p", e0, k(a.description), 1)
                              ])) : C("", !0)
                            ]),
                            r("div", {
                              class: L([a.bgColor, "po-relative po-grow po-pt-6 po-px-4 sm:po-px-6"])
                            }, [
                              K(a.$slots, "content")
                            ], 2),
                            a.$slots.footer ? (p(), d("div", t0, [
                              K(a.$slots, "footer")
                            ])) : C("", !0)
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
}), l0 = /* @__PURE__ */ r("div", { class: "po-fixed po-inset-0 po-bg-gray-500 po-bg-opacity-25 po-transition-opacity" }, null, -1), s0 = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto po-p-4 sm:po-p-6 md:po-p-20" }, n0 = { class: "po-relative" }, a0 = {
  key: 0,
  class: "po-max-h-96 scroll-py-3 po-overflow-y-auto po-p-3"
}, r0 = {
  name: "PoCommandPalette"
}, C2 = /* @__PURE__ */ D({
  ...r0,
  props: {
    show: { type: Boolean, default: !1 },
    showContent: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, o = x(""), { show: l } = Ie(t), s = x(!1);
    ee(l, () => {
      s.value = !1, setTimeout(() => {
        s.value = !0;
      }, 100);
    });
    function n(a) {
      a.ctrlKey && a.key === "b" && (s.value = !0);
    }
    return Z(() => {
      window.addEventListener("keyup", n);
    }), Lo(() => {
      window.removeEventListener("keyup", n);
    }), (a, i) => (p(), N(O(At), {
      show: s.value,
      as: "template",
      onAfterLeave: i[2] || (i[2] = (u) => o.value = ""),
      appear: ""
    }, {
      default: z(() => [
        S(O(eo), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: i[1] || (i[1] = (u) => s.value = !1)
        }, {
          default: z(() => [
            S(O(Ke), {
              as: "template",
              enter: "po-ease-out po-duration-300",
              "enter-from": "po-opacity-0",
              "enter-to": "po-opacity-100",
              leave: "po-ease-in po-duration-200",
              "leave-from": "po-opacity-100",
              "leave-to": "po-opacity-0"
            }, {
              default: z(() => [
                l0
              ]),
              _: 1
            }),
            r("div", s0, [
              S(O(Ke), {
                as: "template",
                enter: "po-ease-out po-duration-300",
                "enter-from": "po-opacity-0 po-scale-95",
                "enter-to": "po-opacity-100 po-scale-100",
                leave: "po-ease-in po-duration-200",
                "leave-from": "po-opacity-100 po-scale-100",
                "leave-to": "po-opacity-0 po-scale-95"
              }, {
                default: z(() => [
                  S(O(to), { class: "po-mx-auto po-max-w-xl po-transform po-divide-y po-divide-gray-100 po-overflow-hidden po-rounded-xl po-bg-white po-shadow-2xl po-ring-1 po-ring-black po-ring-opacity-5 po-transition-all" }, {
                    default: z(() => [
                      r("div", n0, [
                        S(O(qi), {
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
                      a.showContent ? (p(), d("div", a0, [
                        K(a.$slots, "content")
                      ])) : C("", !0)
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
}), i0 = /* @__PURE__ */ r("div", { class: "po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity" }, null, -1), p0 = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto" }, u0 = { class: "po-flex po-min-h-full po-items-start po-justify-center po-p-4 po-text-center sm:po-p-0" }, d0 = { class: "po-p-5" }, c0 = { class: "po-text-center po-space-y-3" }, f0 = { key: 1 }, v0 = { class: "po-text-sm po-text-gray-600" }, h0 = { class: "po-border-t po-border-slate-200 po-flex po-divide-x po-divide-slate-200" }, m0 = {
  name: "PoAlert"
}, S2 = /* @__PURE__ */ D({
  ...m0,
  props: {
    cancelBtnLabel: { default: "Cancel" },
    okBtnLabel: { default: "Ok" },
    alertTitle: { default: "" },
    alertDescription: { default: "" },
    show: { type: Boolean, default: !1 }
  },
  emits: ["alert-closed", "button-click", "confirm", "cancel"],
  setup(e, { emit: t }) {
    const o = e, { show: l } = Ie(o), s = x(!1);
    ee(l, () => {
      s.value = l.value;
    });
    function n() {
      s.value = !1, t("alert-closed", !0);
    }
    return (a, i) => (p(), N(O(At), {
      as: "template",
      show: s.value
    }, {
      default: z(() => [
        S(O(eo), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: n
        }, {
          default: z(() => [
            S(O(Ke), {
              as: "template",
              enter: "po-ease-out po-duration-300",
              "enter-from": "po-opacity-0",
              "enter-to": "po-opacity-100",
              leave: "po-ease-in po-duration-200",
              "leave-from": "po-opacity-100",
              "leave-to": "po-opacity-0"
            }, {
              default: z(() => [
                i0
              ]),
              _: 1
            }),
            r("div", p0, [
              r("div", u0, [
                S(O(Ke), {
                  as: "template",
                  enter: "po-ease-out po-duration-300",
                  "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                  "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                  leave: "po-ease-in po-duration-200",
                  "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                  "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                }, {
                  default: z(() => [
                    S(O(to), { class: "po-relative po-transform po-overflow-hidden po-rounded-lg po-bg-white po-text-left po-shadow-xl po-transition-all sm:po-my-8 sm:po-w-full sm:po-max-w-sm" }, {
                      default: z(() => [
                        r("div", d0, [
                          r("div", c0, [
                            a.alertTitle !== "" ? (p(), N(O(vs), {
                              key: 0,
                              as: "h3",
                              class: "po-text-lg po-font-medium po-leading-6 po-text-gray-900"
                            }, {
                              default: z(() => [
                                J(k(a.alertTitle), 1)
                              ]),
                              _: 1
                            })) : C("", !0),
                            a.alertDescription !== "" ? (p(), d("div", f0, [
                              r("p", v0, k(a.alertDescription), 1)
                            ])) : C("", !0)
                          ])
                        ]),
                        r("div", h0, [
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
}), g0 = {
  key: 0,
  class: "po-col-span-2 po-relative po-mt-5"
}, b0 = /* @__PURE__ */ r("span", {
  class: "po-absolute po-top-0 po-left-1 po--ml-px po-h-[calc(100%-7px)] po-w-0.5 po-bg-gray-200",
  "aria-hidden": "true"
}, null, -1), y0 = { class: "po-relative po-space-y-5" }, w0 = { class: "po-flex po-space-x-2 po-items-start" }, _0 = { class: "log-item" }, $0 = { key: 0 }, x0 = {
  key: 0,
  class: "po-text-slate-500 po-text-xs"
}, V0 = {
  key: 1,
  class: "po-text-center po-py-10"
}, k0 = { class: "po-text-sm po-text-slate-500" }, C0 = {
  name: "PoLogs"
}, P2 = /* @__PURE__ */ D({
  ...C0,
  props: {
    items: { default: null },
    emptyLabel: { default: "No logs to display." }
  },
  setup(e) {
    return (t, o) => (p(), d("div", null, [
      t.items && t.items.length > 0 ? (p(), d("div", g0, [
        b0,
        r("div", y0, [
          (p(!0), d(F, null, X(t.items, (l, s) => (p(), d("div", w0, [
            r("p", {
              class: L([
                "po-rounded-full po-w-2 po-h-2 border-1 po-border-white po-shrink-0",
                { "po-bg-orange-400": s !== t.items.length - 1 },
                ,
                { "po-bg-slate-300": s == t.items.length - 1 }
              ])
            }, null, 2),
            r("div", _0, [
              r("span", null, [
                J(k(l.label) + " on " + k(l.date) + " " + k(l.by && l.by !== "" ? "by" : "") + " ", 1),
                l.by && l.by !== "" ? (p(), d("span", $0, k(l.by), 1)) : C("", !0)
              ]),
              l.description && l.description !== "" ? (p(), d("blockquote", x0, ' "' + k(l.description) + '" ', 1)) : C("", !0)
            ])
          ]))), 256))
        ])
      ])) : (p(), d("div", V0, [
        r("span", k0, k(t.emptyLabel), 1)
      ]))
    ]));
  }
}), S0 = {
  name: "PoMain"
}, O2 = /* @__PURE__ */ D({
  ...S0,
  setup(e) {
    const t = x(!0);
    return xe.on("sidebarOpen", (o) => {
      typeof o == "boolean" && (t.value = o);
    }), (o, l) => (p(), d("main", {
      class: L(["po-min-h-screen po-overflow-y-auto po-transition-all po-duration-300 po-ease-in-out po-pt-[92px] po-flex po-flex-col po-w-full", [
        { "lg:po-pl-[250px]": t.value },
        { "lg:po-pl-[58px]": !t.value }
      ]]),
      id: "shell-content-root"
    }, [
      K(o.$slots, "default")
    ], 2));
  }
}), P0 = {
  key: 0,
  role: "list",
  class: "po-divide-y po-divide-gray-200 po-rounded-md po-border po-border-gray-200"
}, O0 = { class: "po-flex po-items-center po-justify-between po-py-3 po-pl-3 po-pr-4 po-text-sm" }, L0 = { class: "po-flex po-w-0 po-flex-1 po-items-center" }, M0 = { class: "po-ml-2 po-w-0 po-flex-1 po-truncate" }, T0 = { class: "po-ml-4 po-flex-shrink-0 po-space-x-4" }, D0 = ["onClick"], E0 = ["onClick"], B0 = {
  key: 1,
  class: "po-py-10"
}, I0 = { class: "po-text-sm po-text-slate-500" }, z0 = {
  name: "PoDownloadFileList"
}, L2 = /* @__PURE__ */ D({
  ...z0,
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
      o.files && o.files.length > 0 ? (p(), d("ul", P0, [
        (p(!0), d(F, null, X(o.files, (s) => (p(), d("li", O0, [
          r("div", L0, [
            S(O(zl), {
              class: "po-h-5 po-w-5 po-flex-shrink-0 po-text-gray-400",
              "aria-hidden": "true"
            }),
            r("span", M0, k(s.label), 1)
          ]),
          r("div", T0, [
            r("a", {
              href: "#",
              onClick: le((n) => o.$emit("button-click", s), ["prevent"]),
              class: "po-font-medium po-text-mpao-lightblue hover:po-text-indigo-500"
            }, k(o.linkLabel), 9, D0),
            o.showViewBtn ? (p(), d("a", {
              key: 0,
              href: "#",
              onClick: le((n) => o.$emit("view-click", s), ["prevent"]),
              class: "po-font-medium po-text-mpao-lightblue hover:po-text-indigo-500"
            }, k(o.viewBtnLabel), 9, E0)) : C("", !0)
          ])
        ]))), 256))
      ])) : (p(), d("div", B0, [
        r("span", I0, k(o.emptyLabel), 1)
      ]))
    ]));
  }
}), A0 = {
  name: "PoContentArea"
}, M2 = /* @__PURE__ */ D({
  ...A0,
  setup(e) {
    const t = x(!0);
    return xe.on("sidebarOpen", (o) => {
      typeof o == "boolean" && (t.value = o);
    }), (o, l) => (p(), d("section", {
      class: L(["shell-content--area po-px-3 lg:po-px-5 po-pb-10 po-space-y-5 po-grow", [
        { "po-max-w-[1370px]": t.value },
        { "po-max-w-[1500px]": !t.value }
      ]])
    }, [
      K(o.$slots, "default")
    ], 2));
  }
}), j0 = {
  name: "AnimatedLogo"
}, R0 = /* @__PURE__ */ Qs('<div><svg class="po-stroke-mpao-blue po-w-16 animated-logo" viewBox="0 0 62 55" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.76292 17.8572L7.7 17.9704V18.0682C6.87397 19.526 6.23618 20.649 5.58241 21.4779C4.93472 22.299 4.30505 22.7864 3.51417 23.0053C3.46261 23.0112 3.41718 23.0206 3.39088 23.026C3.35663 23.0331 3.31491 23.0425 3.27694 23.0511C3.25988 23.055 3.24357 23.0587 3.22903 23.0619C3.1106 23.0882 3.03712 23.1 3 23.1H2.93844L2.89561 23.1107L15.9876 0.600006H19.1308C17.2397 1.92747 16.1556 3.83665 15.5371 5.73245C14.8359 7.88203 14.7198 10.0514 14.7027 11.4258C13.1737 11.6033 11.0729 12.4434 9.38038 15.128C8.77075 16.0431 8.26353 16.9561 7.76713 17.8496L7.76292 17.8572Z"></path><path d="M48.1818 11.3241C48.047 8.39742 47.5389 6.05982 46.5472 4.07639C45.8153 2.61266 44.8203 1.39271 43.5945 0.5H46.8113L59.8583 23.0959C59.8303 23.0912 59.7891 23.0819 59.7213 23.0649C59.7166 23.0638 59.7117 23.0625 59.7066 23.0612C59.6302 23.042 59.5099 23.0118 59.3765 23.0027C58.59 22.7825 57.9627 22.2958 57.3176 21.4779C56.6586 20.6423 56.0158 19.508 55.1801 18.0331L55.1413 17.9647C54.8861 17.4553 54.6068 16.973 54.3362 16.5054L54.3327 16.4995C54.0565 16.0225 53.7893 15.5605 53.5472 15.0764L53.5333 15.0485L53.516 15.0226C51.7283 12.3411 49.7115 11.4988 48.1818 11.3241Z"></path><path d="M9.28397 39.6773C11.0717 42.3589 13.0885 43.2011 14.6182 43.3759C14.753 46.3026 15.2611 48.6402 16.2528 50.6236C16.9991 52.1163 17.9653 53.2992 19.1863 54.2H15.7881L2.74125 31.699C2.76073 31.6996 2.78031 31.7 2.8 31.7C2.89335 31.7 2.97474 31.7149 3.07903 31.7381C3.08854 31.7402 3.09897 31.7426 3.11023 31.7452C3.18647 31.7626 3.30082 31.7888 3.42319 31.7972C4.20888 32.0178 4.86081 32.5271 5.52047 33.3603C6.20216 34.2214 6.85697 35.382 7.66164 36.8405C8.26116 37.9396 8.76739 38.8512 9.276 39.665L9.27989 39.6712L9.28397 39.6773Z"></path><path d="M55.124 36.865L55.1331 36.8504L55.1412 36.8353C55.9431 35.3316 56.5997 34.1683 57.2697 33.307C57.9146 32.4778 58.5471 31.9616 59.2949 31.6961C59.4179 31.6866 59.5418 31.6616 59.6287 31.6442C59.6354 31.6428 59.6418 31.6415 59.6481 31.6403C59.719 31.6261 59.772 31.616 59.8123 31.6095L46.8115 54.1H43.8753C45.7283 52.7465 46.7867 50.8277 47.3889 48.9394C48.064 46.8226 48.1795 44.7058 48.1971 43.3742C49.7262 43.1967 51.8271 42.3567 53.5196 39.6719C53.8327 39.2016 54.1164 38.6849 54.3777 38.1995C54.4112 38.1375 54.4442 38.076 54.4768 38.0152C54.7049 37.5906 54.9148 37.1996 55.124 36.865Z"></path><path d="M32.2763 51.5708L32.2653 51.5582L32.2536 51.5465C32.0661 51.359 31.7413 51.2 31.4 51.2C31.3949 51.2 31.3894 51.2 31.3835 51.2C31.2956 51.1998 31.1323 51.1993 30.9751 51.2442C30.7932 51.2962 30.6132 51.4082 30.4904 51.6086C29.1941 53.0706 27.544 53.8 25.5 53.8C22.8209 53.8 20.828 52.9218 19.4532 51.2005C18.1148 49.5247 17.3123 46.988 17.1201 43.5109C18.6883 43.1579 19.8601 42.2673 20.5004 41.6896C20.5136 44.8271 20.8579 46.8152 21.6737 48.0181C22.5558 49.319 23.9045 49.6 25.5 49.6C27.4335 49.6 28.5187 48.2893 29.0946 46.9901C29.6604 45.7138 29.7966 44.3347 29.7999 43.8193C29.8943 42.5846 30.6602 41.8 31.5 41.8H31.5778C32.4558 41.8842 33.2 42.7102 33.2 43.9C33.2 45.6119 33.5619 47.0065 34.2986 47.9982C35.0485 49.0077 36.1459 49.544 37.4792 49.5996L37.4896 49.6H37.5C39.2304 49.6 40.5973 49.3258 41.4454 48.0081C41.849 47.3811 42.1078 46.5565 42.2692 45.5056C42.4311 44.4518 42.5 43.1353 42.5 41.5V24.4455L45.9 21.8182V41.5C45.9 41.4958 45.8996 41.5001 45.8978 41.519C45.8959 41.5381 45.8927 41.5719 45.887 41.6267L45.8842 41.6541C45.8752 41.7406 45.8636 41.8524 45.8521 41.9797C45.8264 42.2614 45.8 42.6283 45.8 43V43.9V43.9029V43.9059V43.9088V43.9117V43.9146V43.9175V43.9205V43.9234V43.9263V43.9292V43.9321V43.935V43.9379V43.9408V43.9437V43.9466V43.9495V43.9524V43.9553V43.9581V43.961V43.9639V43.9668V43.9696V43.9725V43.9754V43.9783V43.9811V43.984V43.9868V43.9897V43.9926V43.9954V43.9983V44.0011V44.004V44.0068V44.0096V44.0125V44.0153V44.0181V44.021V44.0238V44.0266V44.0295V44.0323V44.0351V44.0379V44.0407V44.0435V44.0463V44.0492V44.052V44.0548V44.0576V44.0603V44.0631V44.0659V44.0687V44.0715V44.0743V44.0771V44.0798V44.0826V44.0854V44.0882V44.0909V44.0937V44.0965V44.0992V44.102V44.1047V44.1075V44.1102V44.113V44.1157V44.1185V44.1212V44.1239V44.1267V44.1294V44.1321V44.1349V44.1376V44.1403V44.143V44.1457V44.1484V44.1512V44.1539V44.1566V44.1593V44.162V44.1647V44.1674V44.17V44.1727V44.1754V44.1781V44.1808V44.1835V44.1861V44.1888V44.1915V44.1941V44.1968V44.1995V44.2021V44.2048V44.2074V44.2101V44.2127V44.2154V44.218V44.2207V44.2233V44.2259V44.2285V44.2312V44.2338V44.2364V44.239V44.2417V44.2443V44.2469V44.2495V44.2521V44.2547V44.2573V44.2599V44.2625V44.2651V44.2677V44.2702V44.2728V44.2754V44.278V44.2806V44.2831V44.2857V44.2882V44.2908V44.2934V44.2959V44.2985V44.301V44.3036V44.3061V44.3087V44.3112V44.3137V44.3163V44.3188V44.3213V44.3238V44.3264V44.3289V44.3314V44.3339V44.3364V44.3389V44.3414V44.3439V44.3464V44.3489V44.3514V44.3539V44.3564V44.3588V44.3613V44.3638V44.3663V44.3687V44.3712V44.3737V44.3761V44.3786V44.381V44.3835V44.3859V44.3884V44.3908V44.3932V44.3957V44.3981V44.4005V44.403V44.4054V44.4078V44.4102V44.4126V44.415V44.4174V44.4199V44.4223V44.4247V44.427V44.4294V44.4318V44.4342V44.4366V44.439V44.4413V44.4437V44.4461V44.4484V44.4508V44.4532V44.4555V44.4579V44.4602V44.4626V44.4649V44.4672V44.4696V44.4719V44.4742V44.4766V44.4789V44.4812V44.4835V44.4858V44.4882V44.4905V44.4928V44.4951V44.4974V44.4997V44.5019V44.5042V44.5065V44.5088V44.5111V44.5133V44.5156V44.5179V44.5201V44.5224V44.5247V44.5269V44.5292V44.5314V44.5337V44.5359V44.5381V44.5404V44.5426V44.5448V44.547V44.5493V44.5515V44.5537V44.5559V44.5581V44.5603V44.5625V44.5647V44.5669V44.5691V44.5713V44.5734V44.5756V44.5778V44.58V44.5821V44.5843V44.5865V44.5886V44.5908V44.5929V44.5951V44.5972V44.5994V44.6015V44.6036V44.6058V44.6079V44.61V44.6121V44.6142V44.6164V44.6185V44.6206V44.6227V44.6248V44.6269V44.6289V44.631V44.6331V44.6352V44.6373V44.6393V44.6414V44.6435V44.6455V44.6476V44.6497V44.6517V44.6538V44.6558V44.6578V44.6599V44.6619V44.6639V44.666V44.668V44.67V44.672V44.674V44.676V44.678V44.68V44.682V44.684V44.686V44.688V44.69V44.692V44.6939V44.6959V44.6979V44.6998V44.7018V44.7037V44.7057V44.7076V44.7096V44.7115V44.7135V44.7154V44.7173V44.7193V44.7212V44.7231V44.725V44.7269V44.7288V44.7307V44.7326V44.7345V44.7364V44.7383V44.7402V44.7421V44.7439V44.7458V44.7477V44.7495V44.7514V44.7533V44.7551V44.757V44.7588V44.7606V44.7625V44.7643V44.7661V44.768V44.7698V44.7716V44.7734V44.7752V44.777V44.7788V44.7806V44.7824V44.7842V44.786V44.7878V44.7896V44.7914V44.7931V44.7949V44.7967V44.7984V44.8002V44.8019V44.8037V44.8054V44.8071V44.8089V44.8106V44.8123V44.8141V44.8158V44.8175V44.8192V44.8209V44.8226V44.8243V44.826V44.8277V44.8294V44.8311V44.8328V44.8344V44.8361V44.8378V44.8394V44.8411V44.8427V44.8444V44.846V44.8477V44.8493V44.851V44.8526V44.8542V44.8558V44.8575V44.8591V44.8607V44.8623V44.8639V44.8655V44.8671V44.8687V44.8702V44.8718V44.8734V44.875V44.8765V44.8781V44.8797V44.8812V44.8828V44.8843V44.8859V44.8874V44.8889V44.8905V44.892V44.8935V44.895V44.8965V44.898V44.8996V44.9011V44.9025V44.904V44.9055V44.907V44.9085V44.91V44.9114V44.9129V44.9144V44.9158V44.9173V44.9187V44.9202V44.9216V44.923V44.9245V44.9259V44.9273V44.9288V44.9302V44.9316V44.933V44.9344V44.9358V44.9372V44.9386V44.9399V44.9413V44.9427V44.9441V44.9454V44.9468V44.9482V44.9495V44.9509V44.9522V44.9535V44.9549V44.9562V44.9575V44.9589V44.9602V44.9615V44.9628V44.9641V44.9654V44.9667V44.968V44.9693V44.9706V44.9718V44.9731V44.9744V44.9757V44.9769V44.9782V44.9794V44.9807V44.9819V44.9832V44.9844V44.9856V44.9868V44.9881V44.9893V44.9905V44.9917V44.9929V44.9941V44.9953V44.9965V44.9977V44.9988V45V45.1V45.1006V45.1012V45.1017V45.1023V45.1029V45.1035V45.104V45.1046V45.1052V45.1057V45.1063V45.1069V45.1074V45.108V45.1085V45.1091V45.1096V45.1102V45.1107V45.1113V45.1118V45.1123V45.1129V45.1134V45.1139V45.1145V45.115V45.1155V45.1161V45.1166V45.1171V45.1176V45.1181V45.1186V45.1191V45.1196V45.1202V45.1207V45.1212V45.1217V45.1222V45.1226V45.1231V45.1236V45.1241V45.1246V45.1251V45.1256V45.1261V45.1265V45.127V45.1275V45.128V45.1284V45.1289V45.1294V45.1298V45.1303V45.1307V45.1312V45.1317V45.1321V45.1326V45.133V45.1335V45.1339V45.1343V45.1348V45.1352V45.1357V45.1361V45.1365V45.137V45.1374V45.1378V45.1383V45.1387V45.1391V45.1395V45.1399V45.1404V45.1408V45.1412V45.1416V45.142V45.1424V45.1428V45.1432V45.1436V45.144V45.1444V45.1448V45.1452V45.1456V45.146V45.1464V45.1468V45.1471V45.1475V45.1479V45.1483V45.1487V45.149V45.1494V45.1498V45.1501V45.1505V45.1509V45.1512V45.1516V45.152V45.1523V45.1527V45.153V45.1534V45.1537V45.1541V45.1544V45.1548V45.1551V45.1555V45.1558V45.1561V45.1565V45.1568V45.1572V45.1575V45.1578V45.1581V45.1585V45.1588V45.1591V45.1594V45.1598V45.1601V45.1604V45.1607V45.161V45.1613V45.1616V45.162V45.1623V45.1626V45.1629V45.1632V45.1635V45.1638V45.1641V45.1644V45.1647V45.165V45.1652V45.1655V45.1658V45.1661V45.1664V45.1667V45.167V45.1672V45.1675V45.1678V45.1681V45.1683V45.1686V45.1689V45.1691V45.1694V45.1697V45.1699V45.1702V45.1705V45.1707V45.171V45.1712V45.1715V45.1717V45.172V45.1722V45.1725V45.1727V45.173V45.1732V45.1735V45.1737V45.174V45.1742V45.1744V45.1747V45.1749V45.1751V45.1753C45.5039 48.1507 44.6544 50.2924 43.3031 51.6899C41.9582 53.0807 40.0524 53.8 37.5 53.8C35.4235 53.8 33.5685 53.0476 32.2763 51.5708Z"></path><path d="M22.8 23.2538V18.2178L29.3909 23.307L26.1939 25.8645L22.8 23.2538Z"></path><path d="M16.7 20.2V19.7H16.5V18.8V10.858C16.5042 10.8478 16.5096 10.8348 16.5142 10.8232C16.5488 10.7368 16.5963 10.6012 16.5998 10.4209C16.8474 7.03069 17.6799 4.61275 19.0737 3.04468C20.4543 1.49155 22.4511 0.699997 25.2 0.699997C27.2568 0.699997 29.1263 1.53906 30.5352 3.04197L30.5407 3.04785L30.5464 3.05355C30.7614 3.26854 31.0508 3.35 31.3 3.35C31.5492 3.35 31.8386 3.26854 32.0536 3.05355L32.0646 3.04251L32.0749 3.03081C33.4779 1.4408 35.1402 0.699997 37.3 0.699997C40.0769 0.699997 42.1441 1.62655 43.5571 3.42174C44.934 5.17104 45.7393 7.80743 45.886 11.3874C44.0184 11.8028 42.6345 12.9721 42.1 13.4936V13.2C42.1 10.0544 41.7835 8.06299 40.9925 6.86242C40.1497 5.58316 38.8495 5.3 37.3 5.3C35.4114 5.3 34.3769 6.59229 33.8399 7.85422C33.3055 9.11015 33.2 10.457 33.2 10.9C33.2 12.2634 32.2859 13.1 31.3 13.1H31.2204C30.2388 13.0141 29.4 12.0845 29.4 10.8C29.4 9.19015 29.0639 7.84653 28.3661 6.89234C27.6525 5.91665 26.5974 5.4 25.3 5.4C23.6267 5.4 22.3017 5.64608 21.4896 6.93319C21.1052 7.5425 20.863 8.34586 20.7131 9.3714C20.5626 10.4004 20.5 11.6909 20.5 13.3V30.4541L16.7 33.3833V20.2Z"></path><path d="M40.1 31.5462V36.5799L33.4225 31.4049L36.6974 28.9288L40.1 31.5462Z"></path><mask id="path-9-inside-1" fill="white"><path d="M58.7 30.1C58.9 30 59.5 30 59.8 29.9C60.9 29.8 61.8 28.7 61.8 27.4C61.8 26.1 60.9 25 59.8 24.9C59.7 24.9 59.5 24.9 59.4 24.8C59.3 24.8 59.2 24.8 59.1 24.7C59.1 24.7 59.1 24.7 59 24.7C58.6 24.6 58.1 24.4 57.7 24.1C57.7 24.1 57.7 24.1 57.6 24C56.1 23.1 55 21.2 53.6 18.7C53.1 17.8 52.6 16.9 52 16C50.5 13.7 48.9 13.1 47.8 13C47.7 13 47.6 13 47.5 13H47.3C47.1 13 46.9 13 46.9 13C45.2 13.2 44 14.3 43.6 14.8L25.2 29.1C25.2 29.1 25.2 29.1 25.1 29.2L23 30.8L16.8 35.5L16.4 35.9C16.4 35.9 16.4 35.9 16.3 35.9C16 36.1 15.7 36.3 15.4 36.3C15.1 36.3 14.9 36.2 14.7 36.1C14.5 35.9 14.4 35.8 14.3 35.5C13.9 34.8 13.4 34.1 13 33.3V33.1C12.2 31.7 11.3 30 10.1 28.6C10.1 28.6 10.1 28.6 10.1 28.5L10 28.4C9.9 28.3 9.9 28.3 9.8 28.2C9.8 28.2 9.8 28.2 9.7 28.1L9.2 27.5C9.2 27.5 9.2 27.5 9.1 27.5C9 27.3 9 27.1 9.1 27L9.6 26.5C10.9 25 11.9 23.2 12.8 21.6V21.5C13.2 20.7 13.7 19.9 14.2 19.1C14.4 18.8 14.6 18.6 14.7 18.5V13.1C13.6 13.2 12 13.9 10.6 16C10 16.9 9.5 17.8 9 18.7C7.8 20.9 6.8 22.5 5.6 23.5C4.8 24.1 4 24.4 3.5 24.6C3.5 24.6 3.5 24.6 3.4 24.6C3.3 24.6 3.1 24.7 3 24.7C2.9 24.7 2.9 24.7 2.8 24.7C2.7 24.7 2.7 24.7 2.7 24.7H2.6H2.5C2.3 24.7 2.2 24.8 2.1 24.8C2 24.8 2 24.8 2 24.9C1.7 25.1 1.4 25.3 1.2 25.6C1.2 25.7 1.1 25.7 1.1 25.8V25.9L0.999997 26.1C0.999997 26.2 0.999997 26.2 0.899997 26.3C0.899997 26.4 0.899997 26.4 0.799997 26.5C0.799997 26.6 0.799997 26.7 0.699997 26.7C0.699997 26.8 0.699997 26.9 0.699997 26.9C0.699997 27 0.699997 27.1 0.699997 27.1C0.699997 27.2 0.699997 27.2 0.699997 27.3C0.699997 27.4 0.699997 27.5 0.699997 27.5C0.699997 27.6 0.699997 27.7 0.699997 27.7C0.699997 27.8 0.699997 27.9 0.799997 27.9V28V28.1C0.799997 28.2 0.799997 28.2 0.899997 28.2L0.999997 28.4C0.999997 28.5 1.1 28.5 1.1 28.5C1.1 28.5 1.1 28.5 1.1 28.6C1.2 28.7 1.3 28.9 1.5 29C1.6 29 1.6 29.1 1.7 29.1C1.7 29.1 1.8 29.1 1.8 29.2C1.8 29.2 1.8 29.2 1.9 29.2C2 29.3 2.2 29.3 2.3 29.4C2.4 29.4 2.4 29.4 2.4 29.4L2.9 29.5C3.1 29.5 3.2 29.6 3.4 29.6C4.2 29.8 4.7 30.2 4.8 30.2C6.4 31.2 7.5 33 8.9 35.5C9.5 36.6 10 37.4 10.5 38.2C11.9 40.3 13.4 41 14.4 41.1C14.5 41.1 14.5 41.1 14.6 41.1C14.7 41.1 14.8 41.1 14.8 41.1C15 41.1 15.2 41.1 15.5 41.1H15.6C17.2 40.8 18.5 39.8 18.9 39.3L19 39.2L19.8 38.6C19.8 38.6 19.9 38.5 20 38.5L30.2 30.6L41.3 22L46.5 18H46.6C46.7 18 46.9 17.9 47 17.9C47.4 17.9 47.8 18.1 48.1 18.6L48.5 19.2C48.8 19.7 49.2 20.3 49.5 20.9V21C50.1 22.1 50.8 23.4 51.7 24.6C51.7 24.6 51.7 24.7 51.8 24.7C52.1 25.1 52.4 25.5 52.7 25.8C52.7 25.8 52.8 25.8 52.8 25.9C53 26.1 53.1 26.3 53.3 26.4C53.4 26.5 53.4 26.7 53.3 26.9C52 28.5 50.4 31.1 49.6 32.4V32.5C49.2 33.2 48.7 34.1 48.2 34.9C48 35.2 47.8 35.4 47.7 35.5V40.9C48.8 40.8 50.4 40.1 51.8 37.9C52.4 37 52.9 36 53.4 35.2C53.5 35 53.7 34.7 53.8 34.5C55.2 33 56.4 30.9 58.7 30.1Z"></path></mask><path d="M58.7 30.1C58.9 30 59.5 30 59.8 29.9C60.9 29.8 61.8 28.7 61.8 27.4C61.8 26.1 60.9 25 59.8 24.9C59.7 24.9 59.5 24.9 59.4 24.8C59.3 24.8 59.2 24.8 59.1 24.7C59.1 24.7 59.1 24.7 59 24.7C58.6 24.6 58.1 24.4 57.7 24.1C57.7 24.1 57.7 24.1 57.6 24C56.1 23.1 55 21.2 53.6 18.7C53.1 17.8 52.6 16.9 52 16C50.5 13.7 48.9 13.1 47.8 13C47.7 13 47.6 13 47.5 13H47.3C47.1 13 46.9 13 46.9 13C45.2 13.2 44 14.3 43.6 14.8L25.2 29.1C25.2 29.1 25.2 29.1 25.1 29.2L23 30.8L16.8 35.5L16.4 35.9C16.4 35.9 16.4 35.9 16.3 35.9C16 36.1 15.7 36.3 15.4 36.3C15.1 36.3 14.9 36.2 14.7 36.1C14.5 35.9 14.4 35.8 14.3 35.5C13.9 34.8 13.4 34.1 13 33.3V33.1C12.2 31.7 11.3 30 10.1 28.6C10.1 28.6 10.1 28.6 10.1 28.5L10 28.4C9.9 28.3 9.9 28.3 9.8 28.2C9.8 28.2 9.8 28.2 9.7 28.1L9.2 27.5C9.2 27.5 9.2 27.5 9.1 27.5C9 27.3 9 27.1 9.1 27L9.6 26.5C10.9 25 11.9 23.2 12.8 21.6V21.5C13.2 20.7 13.7 19.9 14.2 19.1C14.4 18.8 14.6 18.6 14.7 18.5V13.1C13.6 13.2 12 13.9 10.6 16C10 16.9 9.5 17.8 9 18.7C7.8 20.9 6.8 22.5 5.6 23.5C4.8 24.1 4 24.4 3.5 24.6C3.5 24.6 3.5 24.6 3.4 24.6C3.3 24.6 3.1 24.7 3 24.7C2.9 24.7 2.9 24.7 2.8 24.7C2.7 24.7 2.7 24.7 2.7 24.7H2.6H2.5C2.3 24.7 2.2 24.8 2.1 24.8C2 24.8 2 24.8 2 24.9C1.7 25.1 1.4 25.3 1.2 25.6C1.2 25.7 1.1 25.7 1.1 25.8V25.9L0.999997 26.1C0.999997 26.2 0.999997 26.2 0.899997 26.3C0.899997 26.4 0.899997 26.4 0.799997 26.5C0.799997 26.6 0.799997 26.7 0.699997 26.7C0.699997 26.8 0.699997 26.9 0.699997 26.9C0.699997 27 0.699997 27.1 0.699997 27.1C0.699997 27.2 0.699997 27.2 0.699997 27.3C0.699997 27.4 0.699997 27.5 0.699997 27.5C0.699997 27.6 0.699997 27.7 0.699997 27.7C0.699997 27.8 0.699997 27.9 0.799997 27.9V28V28.1C0.799997 28.2 0.799997 28.2 0.899997 28.2L0.999997 28.4C0.999997 28.5 1.1 28.5 1.1 28.5C1.1 28.5 1.1 28.5 1.1 28.6C1.2 28.7 1.3 28.9 1.5 29C1.6 29 1.6 29.1 1.7 29.1C1.7 29.1 1.8 29.1 1.8 29.2C1.8 29.2 1.8 29.2 1.9 29.2C2 29.3 2.2 29.3 2.3 29.4C2.4 29.4 2.4 29.4 2.4 29.4L2.9 29.5C3.1 29.5 3.2 29.6 3.4 29.6C4.2 29.8 4.7 30.2 4.8 30.2C6.4 31.2 7.5 33 8.9 35.5C9.5 36.6 10 37.4 10.5 38.2C11.9 40.3 13.4 41 14.4 41.1C14.5 41.1 14.5 41.1 14.6 41.1C14.7 41.1 14.8 41.1 14.8 41.1C15 41.1 15.2 41.1 15.5 41.1H15.6C17.2 40.8 18.5 39.8 18.9 39.3L19 39.2L19.8 38.6C19.8 38.6 19.9 38.5 20 38.5L30.2 30.6L41.3 22L46.5 18H46.6C46.7 18 46.9 17.9 47 17.9C47.4 17.9 47.8 18.1 48.1 18.6L48.5 19.2C48.8 19.7 49.2 20.3 49.5 20.9V21C50.1 22.1 50.8 23.4 51.7 24.6C51.7 24.6 51.7 24.7 51.8 24.7C52.1 25.1 52.4 25.5 52.7 25.8C52.7 25.8 52.8 25.8 52.8 25.9C53 26.1 53.1 26.3 53.3 26.4C53.4 26.5 53.4 26.7 53.3 26.9C52 28.5 50.4 31.1 49.6 32.4V32.5C49.2 33.2 48.7 34.1 48.2 34.9C48 35.2 47.8 35.4 47.7 35.5V40.9C48.8 40.8 50.4 40.1 51.8 37.9C52.4 37 52.9 36 53.4 35.2C53.5 35 53.7 34.7 53.8 34.5C55.2 33 56.4 30.9 58.7 30.1Z"></path></svg></div>', 1), F0 = [
  R0
];
function N0(e, t, o, l, s, n) {
  return p(), d("div", null, F0);
}
const H0 = /* @__PURE__ */ io(j0, [["render", N0]]), q0 = {
  key: 0,
  class: "po-fixed po-z-[999] po-top-0 po-bottom-0 po-left-0 po-right-0 po-flex po-items-center po-justify-center"
}, Y0 = /* @__PURE__ */ r("div", { class: "po-absolute po-w-[6.2rem] po-h-[6.2rem] po-bg-transparent po-overflow-hidden po-rounded-xl" }, [
  /* @__PURE__ */ r("div", { class: "po-loading-rotate po-absolute -po-top-8 -po-left-8 po-w-[10rem] po-h-[10rem]" })
], -1), U0 = { class: "relative po-bg-white po-w-24 po-h-24 po-flex po-items-center po-justify-center po-rounded-xl po-bg-opacity-50 po-backdrop-blur po-backdrop-filter po-z-10 po-shadow-xl" }, W0 = {
  key: 0,
  class: "po-absolute po-left-1 po-right-1 po-text-center po-py-1 po-text-xs po-text-mpao-blue po-bg-white po-bg-opacity-50 po-backdrop-blur po-backdrop-filter"
}, Z0 = {
  name: "PoLoading"
}, T2 = /* @__PURE__ */ D({
  ...Z0,
  props: {
    show: { type: Boolean, default: !1 },
    label: { default: "" }
  },
  setup(e) {
    return (t, o) => t.show ? (p(), d("div", q0, [
      Y0,
      r("div", U0, [
        t.label !== "" ? (p(), d("span", W0, k(t.label), 1)) : C("", !0),
        S(H0)
      ])
    ])) : C("", !0);
  }
}), G0 = { class: "po-py-5 po-flex po-items-start po-space-x-5" }, K0 = ["name", "id", "checked", "aria-describedby"], X0 = { class: "po-grow -po-mt-[0.26rem]" }, Q0 = ["for"], J0 = { class: "po-mt-2 po-flex po-space-x-3" }, ef = ["href", "onClick"], tf = {
  name: "PoConsent"
}, D2 = /* @__PURE__ */ D({
  ...tf,
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
    return (l, s) => (p(), d("div", G0, [
      r("input", Te({
        type: "checkbox",
        name: `${l.id}-field`,
        id: l.id,
        checked: l.modelValue,
        "aria-describedby": `${l.id}-description`
      }, l.$attrs, {
        onInput: o,
        class: "po-shrink-0 po-h-4 po-w-4 po-rounded border-slate-300 po-text-mpao-lightblue focus:po-ring-mpao-lightblue"
      }), null, 16, K0),
      r("div", X0, [
        r("label", {
          class: "po-block po-select-none po-text-sm po-text-slate-600 po-cursor-pointer",
          for: l.id
        }, k(l.label), 9, Q0),
        r("div", J0, [
          (p(!0), d(F, null, X(l.links, (n) => (p(), d("a", {
            href: n.url,
            onClick: le((a) => l.$emit("button-click", n.url), ["prevent"]),
            class: "po-text-sm po-text-mpao-lightblue hover:po-text-mpao-blue"
          }, k(n.label), 9, ef))), 256))
        ])
      ])
    ]));
  }
}), of = {
  class: "po-flex po-bg-slate-50 po-rounded-t-xl po-justify-center lg:po-justify-start po-px-4 po-pt-4 xl:po-pt-2 po-flex-wrap po-overflow-hidden",
  "aria-label": "Tabs"
}, lf = ["onClick", "aria-current"], sf = { key: 0 }, nf = {
  name: "PoCardTabs"
}, E2 = /* @__PURE__ */ D({
  ...nf,
  props: {
    tabs: { default: null }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    function o(l) {
      return l.iconColor ? l.iconColor : "po-fill-current";
    }
    return (l, s) => (p(), d("nav", of, [
      (p(!0), d(F, null, X(l.tabs, (n) => (p(), d("span", {
        role: "button",
        onClick: (a) => l.$emit("button-click", n),
        key: n.name,
        class: L([
          n.current ? "po-bg-white po-text-slate-600 po-shadow-lg" : "po-text-slate-600 hover:po-text-mpao-blue",
          "po-px-4 po-py-3 po-font-medium po-mr-4 po-mb-4 xl:po-mb-0 po-text-sm po-cursor-pointer po-rounded-xl xl:po-rounded-b-none genie-effect hover:po-text-slate-600 hover:po-bg-white hover:po-shadow-md po-flex po-items-center po-flex-shrink-0 po-space-x-2"
        ]),
        "aria-current": n.current ? "page" : void 0
      }, [
        n.icon ? (p(), N(he(n.icon), {
          key: 0,
          class: L(["po-w-5 po-h-5", [o(n)]])
        }, null, 8, ["class"])) : C("", !0),
        r("span", null, [
          J(k(n.name), 1),
          n.count ? (p(), d("span", sf, " (" + k(n.count) + ")", 1)) : C("", !0)
        ])
      ], 10, lf))), 128))
    ]));
  }
}), af = { class: "sm:po-hidden" }, rf = /* @__PURE__ */ r("label", {
  for: "tabs",
  class: "po-sr-only"
}, "Select a tab", -1), pf = ["value", "selected"], uf = { class: "po-hidden sm:po-block" }, df = {
  class: "po-flex po-space-x-4 po-pt-2",
  "aria-label": "Tabs"
}, cf = ["onClick", "aria-current"], ff = {
  name: "PoTabs"
}, B2 = /* @__PURE__ */ D({
  ...ff,
  props: {
    tabs: { default: null },
    currentTab: { default: "" }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    const o = e;
    function l(a) {
      return a.iconColor ? a.iconColor : "po-fill-current";
    }
    const s = B(() => {
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
      r("div", af, [
        rf,
        r("select", {
          id: "tabs",
          name: "tabs",
          class: "po-block po-w-full po-rounded-md po-border-gray-300 focus:po-border-indigo-500 focus:po-ring-indigo-500",
          onChange: n
        }, [
          (p(!0), d(F, null, X(a.tabs, (u, c) => (p(), d("option", {
            key: u.name,
            value: c,
            selected: u.current
          }, k(u.name), 9, pf))), 128))
        ], 32)
      ]),
      r("div", uf, [
        r("nav", df, [
          (p(!0), d(F, null, X(s.value, (u) => (p(), d("span", {
            onClick: (c) => a.$emit("button-click", u),
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
            }, null, 8, ["class"])) : C("", !0),
            r("span", null, [
              r("span", null, k(u.name), 1),
              u.count && u.count > 0 ? (p(), d("span", {
                key: 0,
                class: L(["po-absolute po-py-1 po-px-2 po-rounded-full po-text-xs -po-top-3 -po-right-2 po-shadow-md po-flex po-items-center po-justify-center", [
                  u.current ? "po-bg-mpao-orange po-text-white" : "po-bg-slate-400 po-text-white group-hover:po-bg-mpao-orange group-hover:po-text-white"
                ]])
              }, [
                r("span", null, k(u.count), 1)
              ], 2)) : C("", !0)
            ])
          ], 10, cf))), 128))
        ])
      ])
    ], 64));
  }
}), vf = { class: "po-mt-5 po-flex po-flex-col po-items-center po-justify-center po-px-5 po-py-8" }, hf = {
  key: 1,
  class: "po-text-base po-font-medium po-text-slate-600 po-text-center"
}, mf = {
  key: 2,
  class: "po-text-sm po-text-slate-500 po-text-center po-max-w-lg po-block po-mx-auto"
}, gf = {
  name: "PoEmpty"
}, I2 = /* @__PURE__ */ D({
  ...gf,
  props: {
    label: { default: "" },
    description: { default: "" },
    icon: { default: null },
    iconColor: { default: "po-stroke-slate-300" }
  },
  setup(e) {
    return (t, o) => (p(), d("div", vf, [
      r("div", {
        class: L(["po-space-y-2 po-flex po-items-center po-flex-col po-justify-center", [{ "po-mb-5": t.$slots.action }]])
      }, [
        t.icon ? (p(), N(he(t.icon), {
          key: 0,
          class: L(["po-w-10 po-h-10", t.iconColor])
        }, null, 8, ["class"])) : C("", !0),
        t.label !== "" ? (p(), d("span", hf, k(t.label), 1)) : C("", !0),
        t.description !== "" ? (p(), d("span", mf, k(t.description), 1)) : C("", !0)
      ], 2),
      K(t.$slots, "action")
    ]));
  }
}), bf = { class: "po-flex po-text-sm po-text-gray-700 po-flex-col po-space-y-5" }, yf = {
  key: 0,
  class: "po-text-base po-font-medium po-text-slate-700"
}, wf = {
  key: 1,
  class: "po-border po-border-orange-300 po-bg-orange-50 po-rounded-lg po-p-5 po-flex po-items-center po-space-x-3"
}, _f = { class: "po-grow po-text-sm po-text-slate-600" }, $f = {
  key: 2,
  class: "po-border po-border-red-300 po-bg-red-50 po-rounded-lg po-p-5 po-flex po-space-x-4"
}, xf = { class: "po-grow" }, Vf = { class: "po-text-base po-text-slate-700 po-font-medium" }, kf = { class: "po-text-sm po-text-slate-600" }, Cf = { class: "po-font-medium" }, Sf = { key: 0 }, Pf = { key: 0 }, Of = /* @__PURE__ */ r("dt", null, "Name", -1), Lf = { key: 1 }, Mf = /* @__PURE__ */ r("dt", null, "Identifer", -1), Tf = { key: 2 }, Df = /* @__PURE__ */ r("dt", null, "Date of birth", -1), Ef = { key: 3 }, Bf = /* @__PURE__ */ r("dt", null, "Reported Date of death", -1), If = {
  key: 3,
  class: "po-pt-5"
}, zf = { class: "po-flex po-items-center po-space-x-1" }, Af = /* @__PURE__ */ r("span", null, "File a dispute.", -1), jf = {
  name: "PoDRStatus"
}, z2 = /* @__PURE__ */ D({
  ...jf,
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
    return (l, s) => (p(), d("span", bf, [
      l.record !== null ? (p(), d("h2", yf, " Death was reported by " + k(l.record.institution), 1)) : C("", !0),
      l.request !== null && l.request.type_id === 1 ? (p(), d("div", wf, [
        S(O(go), { class: "po-shrink-0 po-w-6 po-stroke-orange-600" }),
        r("span", _f, " This is a " + k(l.request.type) + " request and is in " + k(l.request.state) + " state. ", 1)
      ])) : C("", !0),
      l.request !== null && l.request.type_id !== 1 ? (p(), d("div", $f, [
        S(O(go), { class: "po-shrink-0 po-w-6 po-h-6 po-stroke-red-600 po-stroke-2" }),
        r("div", xf, [
          r("h3", Vf, k(l.request.type), 1),
          r("p", kf, [
            J(" The following " + k(l.request.type) + " was reported: ", 1),
            r("span", Cf, [
              J(k(l.request.dispute_type), 1),
              l.request.date_of_death ? (p(), d("span", Sf, " (New date: " + k(l.request.date_of_death) + ")", 1)) : C("", !0)
            ])
          ])
        ])
      ])) : C("", !0),
      S(bd, null, {
        content: z(() => [
          l.member !== null ? (p(), d("div", Pf, [
            Of,
            r("dd", null, k(l.member.name), 1)
          ])) : C("", !0),
          l.member !== null ? (p(), d("div", Lf, [
            Mf,
            r("dd", null, k(l.member.identifier), 1)
          ])) : C("", !0),
          l.member !== null ? (p(), d("div", Tf, [
            Df,
            r("dd", null, k(l.member.dob), 1)
          ])) : C("", !0),
          l.record !== null ? (p(), d("div", Ef, [
            Bf,
            r("dd", null, k(l.record.date_of_death), 1)
          ])) : C("", !0)
        ]),
        _: 1
      }),
      l.request === null ? (p(), d("span", If, [
        S(ao, {
          type: "simple",
          onButtonClick: o
        }, {
          label: z(() => [
            r("span", zf, [
              S(O(rn), { class: "po-w-4 po-h-4 po-stroke-current" }),
              Af
            ])
          ]),
          _: 1
        })
      ])) : C("", !0)
    ]));
  }
}), Rf = {
  role: "button",
  class: "po-w-6 po-h-6 po-rounded-lg po-bg-white genie-effect po-flex po-items-center po-justify-center hover:po-bg-slate-50 po-cursor-pointer"
}, Ff = {
  name: "PoTableAction"
}, A2 = /* @__PURE__ */ D({
  ...Ff,
  props: {
    btnIcon: { default: null },
    btnType: { default: "text" },
    label: { default: "" },
    textColor: { default: "po-slate-500" },
    iconColor: { default: "po-stroke-slate-500" }
  },
  setup(e) {
    const t = e, o = x(), l = x(), s = x(t.label);
    return t.btnType === "view" ? (o.value = fn, s.value = t.label === "" ? "View" : t.label) : t.btnType === "edit" ? (o.value = hn, s.value = t.label === "" ? "Edit" : t.label) : t.btnType === "delete" ? (o.value = gn, s.value = t.label === "" ? "Delete" : t.label) : t.btnType === "icon" && t.btnIcon && (o.value = t.btnIcon), t.btnType === "view" ? l.value = "po-stroke-emerald-400" : t.btnType === "edit" ? l.value = "po-stroke-blue-400" : t.btnType === "delete" ? l.value = "po-stroke-red-400" : l.value = t.iconColor, (n, a) => (p(), d("span", null, [
      n.btnType === "icon" || n.btnType === "delete" || n.btnType === "edit" || n.btnType === "view" ? (p(), N(O(Ct), {
        key: 0,
        text: s.value,
        placement: "bottom",
        strategy: "fixed"
      }, {
        default: z(() => [
          r("span", Rf, [
            (p(), N(he(o.value), {
              class: L(["po-w-4 po-stroke-2", l.value])
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
}), Nf = { key: 0 }, Hf = {
  name: "Rufiyaa"
}, j2 = /* @__PURE__ */ D({
  ...Hf,
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
      o.amount !== null ? (p(), d("span", Nf, k(t(o.amount)), 1)) : C("", !0)
    ]));
  }
}), qf = {
  name: "PoHeading"
}, R2 = /* @__PURE__ */ D({
  ...qf,
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
}), Yf = ["for"], Uf = { class: "po-capitalize" }, Wf = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Zf = { class: "po-relative po-mt-1" }, Gf = { class: "po-shrink-0 po-pr-1 po-inline-flex po-flex-wrap po-w-full po-gap-1 po-max-h-44" }, Kf = { class: "po-px-2 po-py-1 po-rounded-md po-text-sm po-text-slate-600 po-flex po-space-x-2 po-items-center po-bg-gradient-to-l po-from-slate-50 po-via-cyan-50 po-to-cyan-100/60 po-border po-border-cyan-200" }, Xf = ["onClick"], Qf = ["id"], Jf = {
  key: 0,
  class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
}, e4 = ["onClick", "value"], t4 = {
  class: /* @__PURE__ */ L(["po-block po-truncate"])
}, o4 = {
  name: "PoMultiSelect"
}, F2 = /* @__PURE__ */ D({
  ...o4,
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
    const s = x(""), n = x([]), a = x(!1);
    function i(b) {
      n.value.splice(b, 1), h();
    }
    function u(b) {
      let V = s.value.split(",");
      b.key === "Enter" && 0 < s.value.length && (b.preventDefault(), V.forEach(($) => {
        var I;
        let E = (I = o.items) == null ? void 0 : I.find(
          (R) => R.name.toLowerCase() === $.trim().toLowerCase()
        );
        E && n.value.push(E);
      }), s.value = ""), b.key === "Backspace" && s.value.length === 0 && a.value && n.value.pop(), h();
    }
    const c = x([]);
    function h() {
      c.value = n.value.map((b) => b.id);
    }
    const { uniqueId: w, generateUniqueId: y } = Ne(), g = x(o.id);
    Z(() => {
      o.id === "" && (y(), g.value = w.value), document.addEventListener("keydown", u);
    }), re(() => {
      document.removeEventListener("keydown", u);
    });
    const m = x(!1), f = B(
      () => {
        var b;
        return s.value === "" ? o.items : (b = o.items) == null ? void 0 : b.filter((V) => V.name.toLowerCase().includes(s.value.toLowerCase()));
      }
    );
    let v = x();
    Bt(v, () => {
      m.value = !1;
    });
    function _(b) {
      n.value.push(b), s.value = "", h();
    }
    return ee(c, () => {
      t("update:modelValue", c.value);
    }), (b, V) => (p(), d("div", {
      ref_key: "multiSelectComponentRef",
      ref: v,
      class: L(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": b.display === "horizontal" }]])
    }, [
      r("label", {
        for: g.value,
        class: L([
          "po-text-sm po-font-medium po-flex po-items-center po-space-x-1",
          { "po-text-red-500": b.hasError },
          { "po-text-slate-700": !b.hasError }
        ])
      }, [
        r("span", Uf, k(b.label), 1),
        b.required ? (p(), d("span", Wf, "*")) : C("", !0),
        S(He, { info: b.info }, null, 8, ["info"])
      ], 10, Yf),
      r("div", Zf, [
        r("div", {
          class: L([
            "po-border po-p-1 po-min-h-[2.38rem] po-flex po-flex-wrap po-items-center focus-within:po-border-mpao-lightblue po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white sm:po-text-sm",
            l()
          ])
        }, [
          r("div", Gf, [
            n.value.length > 0 ? (p(!0), d(F, { key: 0 }, X(n.value, ($, E) => (p(), d("span", Kf, [
              r("span", null, k($.name), 1),
              r("span", {
                onClick: () => i(E),
                role: "button",
                class: "po-cursor-pointer"
              }, [
                S(O(Zt), { class: "po-w-3 po-stroke-red-600 po-stroke-2" })
              ], 8, Xf)
            ]))), 256)) : C("", !0),
            Pe(r("input", {
              id: g.value,
              "onUpdate:modelValue": V[0] || (V[0] = ($) => s.value = $),
              onFocus: V[1] || (V[1] = () => {
                m.value = !0, a.value = !0;
              }),
              onBlur: V[2] || (V[2] = () => a.value = !1),
              class: "po-border-0 po-outline-none po-ring-0 po-grow"
            }, null, 40, Qf), [
              [Ot, s.value]
            ])
          ])
        ], 2),
        m.value ? (p(), d("ul", Jf, [
          (p(!0), d(F, null, X(f.value, ($) => (p(), d("li", {
            onClick: () => _($),
            key: $.id,
            value: $.id,
            class: L([
              "po-relative po-select-none po-py-2 hover:po-bg-mpao-lightblue hover:po-text-white po-cursor-pointer po-pl-3 po-pr-9"
            ])
          }, [
            r("span", t4, k($.name), 1)
          ], 8, e4))), 128))
        ])) : C("", !0)
      ]),
      S(Ae, { message: b.message }, null, 8, ["message"]),
      S(ze, { "error-message": b.errorMessage }, null, 8, ["error-message"])
    ], 2));
  }
}), l4 = { class: "po-flex po-pl-5" }, s4 = /* @__PURE__ */ r("div", { class: "po-shrink-0 po-flex po-flex-col" }, [
  /* @__PURE__ */ r("div", { class: "po-w-[2px] po-shrink-0 po-h-10" }),
  /* @__PURE__ */ r("div", { class: "po-bg-gradient-to-t po-from-orange-400 po-via-red-300 po-to-blue-500 po-w-[2px] po-grow" }),
  /* @__PURE__ */ r("div", { class: "po-w-[2px] po-shrink-0 po-h-12" })
], -1), n4 = { class: "po-grow po-pl-5 po-pt-5 po-space-y-3" }, a4 = ["onClick"], r4 = { class: "-po-mt-1 po-flex po-space-x-3 po-items-center" }, i4 = { class: "po-block po-text-xs po-text-slate-400" }, p4 = { class: "po-text-xs po-text-slate-500 po-pt-1" }, u4 = {
  name: "PoTimeline"
}, N2 = /* @__PURE__ */ D({
  ...u4,
  props: {
    timeline: { default: null },
    clickable: { type: Boolean, default: !1 }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, l) => (p(), d("div", l4, [
      s4,
      r("div", n4, [
        (p(!0), d(F, null, X(o.timeline, (s) => (p(), d("div", {
          class: L(["po-px-2 po-pt-2 po-pb-6 po-relative po-group", [{ "po-cursor-pointer": o.clickable }]]),
          onClick: (n) => o.$emit("button-click", s)
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
            r("div", r4, [
              r("h4", {
                class: L(["po-text-sm po-text-slate-600 po-font-medium", [{ "group-hover:po-text-mpao-lightblue": o.clickable }]])
              }, k(s.label), 3),
              r("span", i4, k(O(on)(s.date)), 1)
            ]),
            r("p", p4, k(s.description), 1)
          ])
        ], 10, a4))), 256))
      ])
    ]));
  }
}), d4 = {
  name: "PoTableCheckbox"
}, H2 = /* @__PURE__ */ D({
  ...d4,
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
      })) : C("", !0),
      o.disabled ? (p(), N(O(Pl), {
        key: 1,
        class: "po-w-6 po-fill-slate-400"
      })) : C("", !0),
      !o.isChecked && !o.disabled ? (p(), d("span", {
        key: 2,
        onClick: l[1] || (l[1] = le(() => o.$emit("checkboxClicked", o.itemId), ["prevent"])),
        class: "po-h-5 po-w-5 po-rounded-full po-border-2 po-ml-[2px] po-block po-border-slate-300 po-cursor-pointer"
      })) : C("", !0)
    ], 64));
  }
}), c4 = { class: "po-p-4" }, f4 = { class: "po-flex po-items-start po-space-x-3" }, v4 = /* @__PURE__ */ r("span", { class: "po-sr-only" }, "Action icon", -1), h4 = { class: "po-w-0 po-flex-1 po-text-sm po-font-medium po-text-gray-400" }, m4 = { class: "po-ml-4 po-flex po-flex-shrink-0" }, g4 = /* @__PURE__ */ r("span", { class: "po-sr-only" }, "Close", -1), b4 = {
  name: "PoToast"
}, q2 = /* @__PURE__ */ D({
  ...b4,
  props: {
    show: { type: Boolean, default: !1 },
    actionType: { default: "" },
    message: { default: "" },
    hideIn: { default: 2e3 },
    size: { default: "sm" }
  },
  emits: ["toast-closed"],
  setup(e, { emit: t }) {
    const o = e, { show: l } = Ie(o), s = x(!1);
    ee(l, () => {
      s.value = l.value;
    });
    function n() {
      s.value = !1, t("toast-closed", !0);
    }
    setTimeout(() => {
      n();
    }, o.hideIn);
    const a = B(() => o.message === "" && o.actionType !== "" ? o.actionType === "success" ? "Saved Successfully!" : o.actionType === "danger" ? "Item deleted!" : o.actionType === "warn" ? "Attention needed!" : "Wrong action" : o.message);
    return (i, u) => (p(), N(Mt, { to: "#po-notifications-alert" }, [
      S(Ze, {
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
            r("div", c4, [
              r("div", f4, [
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
                  i.actionType === "success" ? (p(), N(O(Ri), {
                    key: 0,
                    class: "po-w-4 po-h-4"
                  })) : C("", !0),
                  i.actionType === "danger" ? (p(), N(O(Yi), {
                    key: 1,
                    class: "po-w-4 po-h-4"
                  })) : C("", !0),
                  i.actionType === "warn" ? (p(), N(O(Ni), {
                    key: 2,
                    class: "po-w-4 po-h-4"
                  })) : C("", !0),
                  v4
                ], 2)) : C("", !0),
                r("p", h4, k(a.value), 1),
                r("div", m4, [
                  r("button", {
                    type: "button",
                    onClick: n,
                    class: "po-inline-flex po-rounded-md po-bg-gray-900 po-text-gray-400 hover:po-text-gray-300 hover:po-bg-gray-700 po-transition-colors po-duration-150 po-ease-out focus:po-outline-none focus:po-ring-2 focus:po-ring-indigo-500 focus:po-ring-offset-2"
                  }, [
                    g4,
                    S(O(Os), {
                      class: "po-h-5 po-w-5",
                      "aria-hidden": "true"
                    })
                  ])
                ])
              ])
            ])
          ], 2)) : C("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), y4 = ["for"], w4 = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, _4 = { class: "po-relative po-mt-1" }, $4 = {
  key: 1,
  class: "po-absolute po-top-0 po-left-0 po-right-0 po-bottom-0 po-overflow-hidden po-bg-white po-rounded-md po-border po-border-slate-300 po-flex po-items-center"
}, x4 = { class: "po-grow" }, V4 = ["id"], k4 = ["onMousedown"], C4 = ["onMousedown"], S4 = {
  key: 0,
  class: "po-text-sm po-text-slate-600 po-p-4 po-block"
}, P4 = {
  name: "PoSelectApi"
}, Y2 = /* @__PURE__ */ D({
  ...P4,
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
    const o = e, l = x(), s = x(!1), n = x(!1), a = x([]);
    ee(o, (V, $) => {
      a.value = o.options;
    });
    const i = x(null);
    Bt(i, () => {
      s.value = !!n.value;
    });
    function u() {
      n.value = !1, setTimeout(() => {
        s.value = !1;
      }, 100);
    }
    const { uniqueId: c, generateUniqueId: h } = Ne(), w = x(o.id);
    Z(() => {
      o.id === "" && (h(), w.value = c.value);
    });
    const y = x();
    function g() {
      t("search", y.value);
    }
    const m = x(null);
    function f(V) {
      m.value = V, t("selected", V), s.value = !!n.value;
    }
    function v() {
      t("loadmore", !0);
    }
    const _ = x();
    let b;
    return Z(() => {
      b = Et(l.value, _.value, {
        placement: "bottom-end",
        strategy: "fixed",
        modifiers: [
          {
            name: "sameWidth",
            enabled: !0,
            fn: ({ state: V }) => {
              V.styles.popper.width = `${V.rects.reference.width}px`;
            },
            phase: "beforeWrite",
            requires: ["computeStyles"]
          }
        ]
      });
    }), re(() => {
      b && b.destroy();
    }), (V, $) => (p(), d("div", {
      ref_key: "containerRef",
      ref: i,
      class: L(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": V.display === "horizontal" }]])
    }, [
      r("label", {
        for: w.value,
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700"
      }, [
        r("span", null, k(V.label), 1),
        V.required ? (p(), d("span", w4, "*")) : C("", !0),
        S(He, { info: V.info }, null, 8, ["info"])
      ], 8, y4),
      r("div", _4, [
        r("div", null, [
          V.loading ? (p(), N(no, {
            key: 0,
            class: "po-right-0 po-top-4",
            absolute: !0
          })) : C("", !0),
          m.value !== null && V.showSelected ? (p(), d("div", $4, [
            r("div", x4, [
              K(V.$slots, "selectedOption", ut(dt(m.value)), () => [
                J(k(m.value), 1)
              ])
            ]),
            r("span", {
              class: "po-shrink-0 po-p-1 po-cursor-pointer",
              onMousedown: $[0] || ($[0] = le((E) => {
                m.value = null, y.value = "";
              }, ["stop"]))
            }, [
              S(O(Zt), { class: "po-w-4 po-stroke-2 po-stroke-slate-400" })
            ], 32)
          ])) : C("", !0),
          Pe(r("input", {
            type: "text",
            name: "",
            id: w.value,
            ref_key: "selectBox",
            ref: l,
            "onUpdate:modelValue": $[1] || ($[1] = (E) => y.value = E),
            onInput: g,
            onFocus: $[2] || ($[2] = (E) => {
              n.value = !0, s.value = !0;
            }),
            onBlur: u,
            class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm"
          }, null, 40, V4), [
            [Ot, y.value]
          ])
        ]),
        Pe(r("div", {
          ref_key: "popper",
          ref: _,
          class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
        }, [
          a.value && a.value.length > 0 ? (p(), d(F, { key: 0 }, [
            (p(!0), d(F, null, X(a.value, (E) => (p(), d("div", {
              onMousedown: le((I) => f(E), ["stop"])
            }, [
              K(V.$slots, "option", ut(dt(E)), () => [
                J(k(E), 1)
              ])
            ], 40, k4))), 256)),
            V.showMoreBtn ? (p(), d("span", {
              key: 0,
              role: "button",
              onMousedown: le(v, ["stop"]),
              class: "po-text-sm po-text-semibold po-text-mpao-lightblue po-block po-text-center po-py-2 hover:po-bg-slate-50 po-transition-colors po-duration-150 po-ease-out"
            }, "More", 40, C4)) : C("", !0)
          ], 64)) : (p(), d(F, { key: 1 }, [
            V.emptyMessage ? (p(), d("span", S4, k(V.emptyMessage), 1)) : C("", !0)
          ], 64))
        ], 512), [
          [
            Lt,
            s.value && a.value.length > 0 || s.value && V.emptyMessage
          ]
        ]),
        S(Ae, { message: V.message }, null, 8, ["message"]),
        S(ze, { "error-message": V.errorMessage }, null, 8, ["error-message"])
      ])
    ], 2));
  }
}), O4 = { class: "po-bg-blue-300/20 po-border po-border-blue-200 po-p-3 po-mb-5 po-rounded-md po-text-sm sm:po-space-x-2 po-flex po-items-center po-flex-wrap" }, L4 = { class: "po-text-blue-500" }, M4 = {
  name: "PoMessage"
}, U2 = /* @__PURE__ */ D({
  ...M4,
  props: {
    msgType: { default: "info" },
    message: { default: "" },
    btnName: { default: "" },
    btnAction: { default: "" }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, l) => (p(), d("div", O4, [
      r("span", L4, k(o.message), 1),
      o.btnName !== "" ? (p(), d("span", {
        key: 0,
        role: "button",
        onClick: l[0] || (l[0] = (s) => o.$emit("button-click", o.btnAction)),
        class: "po-text-blue-600 po-underline po-font-medium po-text-xs"
      }, k(o.btnName), 1)) : C("", !0)
    ]));
  }
}), T4 = {
  key: 0,
  class: "po-flex md:po-justify-end"
}, D4 = ["onClick"], E4 = { class: "po-text-xl po-font-medium po-text-slate-600 po-flex po-items-center po-space-x-1" }, B4 = {
  name: "PoPageStats"
}, W2 = /* @__PURE__ */ D({
  ...B4,
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
    return (l, s) => l.stats !== null ? (p(), d("div", T4, [
      r("div", {
        class: L(["po-bg-slate-50 po-shadow-sm po-rounded-xl po-divide-x po-divide-slate-200 po-flex", l.padding])
      }, [
        (p(!0), d(F, null, X(l.stats, (n) => (p(), d("div", {
          class: L(["po-px-4 po-group", { "po-cursor-pointer": l.clickable }]),
          onClick: (a) => l.$emit("stat-click", n)
        }, [
          r("span", E4, [
            n.icon ? (p(), d("span", {
              key: 0,
              class: L(["po-w-5 po-h-5", o(n)])
            }, [
              (p(), N(he(n.icon)))
            ], 2)) : C("", !0),
            r("span", {
              class: L(["po-text-xl po-font-medium po-text-slate-600", { "group-hover:po-text-mpao-lightblue": l.clickable }])
            }, k(n.value), 3)
          ]),
          r("span", {
            class: L(["po-text-sm po-text-slate-500 po-block", { "group-hover:po-text-mpao-lightblue": l.clickable }])
          }, k(n.label), 3)
        ], 10, D4))), 256))
      ], 2)
    ])) : C("", !0);
  }
}), I4 = {
  name: "PoTooltip"
}, Ct = /* @__PURE__ */ D({
  ...I4,
  props: {
    text: { default: "" },
    placement: { default: "bottom" },
    strategy: { default: "absolute" }
  },
  setup(e) {
    const t = e, o = x(null), l = x(null), s = x(!1);
    let n = null;
    Z(() => {
      o.value && l.value && (n = Et(o.value, l.value, {
        placement: t.placement,
        strategy: t.strategy
      }));
    }), re(() => {
      n && (n.destroy(), n = null);
    });
    function a() {
      s.value = !0;
    }
    function i() {
      s.value = !1;
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
      K(u.$slots, "default", {}, () => [
        J("Tooltip")
      ]),
      (p(), N(Mt, { to: "body" }, [
        Pe(r("div", {
          ref_key: "popper",
          ref: l,
          class: L(["po-bg-slate-700 po-text-xs po-z-50 po-transition-opacity po-duration-100 po-ease-linear po-text-slate-50 po-rounded-md po-px-2 po-py-1 po-shadow-md", [{ "po-opacity-0": !s.value }, { "po-opacity-100": s.value }]])
        }, k(u.text), 3), [
          [Lt, u.text]
        ])
      ]))
    ], 544));
  }
}), z4 = ["for"], A4 = { class: "po-capitalize" }, j4 = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, R4 = ["name", "id", "value", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], F4 = {
  key: 0,
  class: "po-text-sm po-grow po-text-slate-500 lg:po-min-h-[40px] po-flex po-items-center"
}, N4 = { key: 0 }, H4 = { key: 1 }, q4 = ["for"], Y4 = {
  key: 2,
  class: "po-text-sm po-grow po-text-slate-500 lg:po-min-h-[40px] po-flex po-items-center"
}, U4 = /* @__PURE__ */ r("span", null, "Uploading...", -1), W4 = [
  U4
], Z4 = {
  key: 3,
  class: "po-shrink-0 po-relative po-top-[3px]"
}, G4 = {
  name: "PoUpload"
}, Z2 = /* @__PURE__ */ D({
  ...G4,
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
    const o = e, l = x("initial"), { uniqueId: s, generateUniqueId: n } = Ne(), a = x(o.id);
    Z(() => {
      o.id === "" && (n(), a.value = s.value);
    });
    const i = x(!1), u = (f) => {
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
        body: g(f)
      }).then((v) => {
        l.value = "initial", t("uploaded", v);
      });
    }
    function g(f) {
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
        for: `${a.value}-wheel`,
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700 po-mb-1"
      }, [
        r("span", A4, k(f.label), 1),
        f.required ? (p(), d("span", j4, "*")) : C("", !0),
        S(He, { info: f.info }, null, 8, ["info"])
      ], 8, z4),
      r("input", Te({
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
        onChange: w
      }), null, 16, R4),
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
          S(O(cn), { class: "po-w-5 po-stroke-current" })
        ], 2),
        l.value === "initial" ? (p(), d("span", F4, [
          i.value ? (p(), d("span", N4, k(f.dragOverText), 1)) : (p(), d("span", H4, k(f.dragAreaText), 1))
        ])) : C("", !0),
        l.value === "initial" ? (p(), d("label", {
          key: 1,
          for: a.value,
          class: "po-cursor-pointer po-transition-colors po-duration-150 po-ease-out po-shrink-0 po-text-sm po-text-mpao-lightblue po-font-meidum hover:po-text-purple-600 po-px-3 po-py-1"
        }, "Upload file", 8, q4)) : C("", !0),
        l.value === "uploading" ? (p(), d("span", Y4, W4)) : C("", !0),
        l.value === "uploading" ? (p(), d("div", Z4, [
          S(no)
        ])) : C("", !0)
      ], 34),
      S(Ae, { message: f.message }, null, 8, ["message"]),
      S(ze, { "error-message": f.errorMessage }, null, 8, ["error-message"])
    ], 2));
  }
}), K4 = {
  name: "PoWrap"
}, X4 = /* @__PURE__ */ r("div", {
  "aria-live": "assertive",
  class: "po-pointer-events-none po-fixed po-inset-0 po-flex po-items-start po-px-4 po-py-6 sm:po-p-6 po-z-[60]"
}, [
  /* @__PURE__ */ r("div", {
    class: "po-flex po-w-full po-flex-col po-items-end po-space-y-4 sm:po-items-end po-pt-[55px]",
    id: "po-notifications-alert"
  })
], -1), Q4 = { class: "po-h-full po-flex" };
function J4(e, t, o, l, s, n) {
  return p(), d(F, null, [
    X4,
    r("div", Q4, [
      K(e.$slots, "default")
    ])
  ], 64);
}
const G2 = /* @__PURE__ */ io(K4, [["render", J4]]), e2 = { class: "po-grid po-grid-cols-1 md:po-grid-cols-3 lg:po-grid-cols-4 po-gap-3" }, t2 = { class: "po-flex po-items-end" }, o2 = {
  name: "PoFilter"
}, K2 = /* @__PURE__ */ D({
  ...o2,
  props: {
    filters: { default: null },
    btnLabel: { default: "Filter" }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    const l = x(e.filters);
    function s() {
      const n = new URLSearchParams();
      for (const u in l.value)
        Object.prototype.hasOwnProperty.call(l.value, u) && n.append(u, String(l.value[u]));
      const i = `${window.location.href}?${n.toString()}`;
      history.pushState({}, "", i), t("button-click", l.value);
    }
    return (n, a) => (p(), d("div", e2, [
      K(n.$slots, "default"),
      r("div", t2, [
        S(O(ao), {
          label: n.btnLabel,
          onButtonClick: s
        }, null, 8, ["label"])
      ])
    ]));
  }
});
export {
  i2 as PoActionBar,
  S2 as PoAlert,
  Dn as PoAppIcon,
  Wr as PoAppTray,
  ao as PoButton,
  p2 as PoCard,
  u2 as PoCardSearch,
  E2 as PoCardTabs,
  x2 as PoChatLogItem,
  b2 as PoCheckbox,
  C2 as PoCommandPalette,
  D2 as PoConsent,
  M2 as PoContentArea,
  z2 as PoDRStatus,
  bd as PoDescriptionList,
  L2 as PoDownloadFileList,
  I2 as PoEmpty,
  K2 as PoFilter,
  y2 as PoFooter,
  w2 as PoFormStatusMessage,
  R2 as PoHeading,
  f2 as PoInputField,
  v2 as PoInputFile,
  T2 as PoLoading,
  P2 as PoLogs,
  O2 as PoMain,
  U2 as PoMessage,
  jt as PoModal,
  h2 as PoMonthYearPicker,
  F2 as PoMultiSelect,
  V2 as PoNotification,
  ni as PoNotificationHub,
  W2 as PoPageStats,
  d2 as PoPageTitle,
  Du as PoPagination,
  Mi as PoProfileSwitcher,
  _2 as PoRadioInput,
  Fa as PoSearchBar,
  g2 as PoSectionMenu,
  Y2 as PoSelectApi,
  Dp as PoSelectField,
  r2 as PoSidebarDrawer,
  k2 as PoSlideover,
  $2 as PoStatsBlock,
  c2 as PoTable,
  A2 as PoTableAction,
  H2 as PoTableCheckbox,
  B2 as PoTabs,
  Zp as PoTextarea,
  N2 as PoTimeline,
  q2 as PoToast,
  m2 as PoToggle,
  Ct as PoTooltip,
  n2 as PoTopBar,
  Z2 as PoUpload,
  G2 as PoWrap,
  j2 as Rufiyaa
};
