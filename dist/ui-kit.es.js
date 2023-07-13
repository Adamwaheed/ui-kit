import { openBlock as i, createElementBlock as c, createElementVNode as a, ref as C, toRefs as xe, watch as X, Fragment as B, createVNode as S, unref as w, withCtx as D, renderSlot as K, createBlock as M, resolveDynamicComponent as de, createCommentVNode as y, computed as T, toDisplayString as $, withDirectives as Pe, isRef as jn, withKeys as Nn, vModelText as Tt, cloneVNode as In, h as te, inject as pe, provide as ce, onMounted as U, watchEffect as ie, defineComponent as Q, onUnmounted as se, Teleport as ft, reactive as Rn, shallowRef as Sl, nextTick as bo, toRaw as ze, normalizeClass as E, renderList as q, Transition as Me, withModifiers as re, onBeforeMount as Fn, onBeforeUpdate as Hn, onUpdated as yo, mergeProps as ke, createTextVNode as J, pushScopeId as qn, popScopeId as Wn, withScopeId as Un, markRaw as Gn, shallowReactive as Zn, resolveComponent as Ol, resolveDirective as Kn, normalizeStyle as Dt, toHandlers as Yn, normalizeProps as Xe, guardReactiveProps as Qe, onBeforeUnmount as At, vShow as xo, vModelCheckbox as Xn, createStaticVNode as Qn } from "vue";
import { f as ol, a as Jn } from "./FormatMoney-edf23aad.mjs";
function es(e, t) {
  return i(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
    })
  ]);
}
function ts(e, t) {
  return i(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
    })
  ]);
}
function os(e, t) {
  return i(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
    })
  ]);
}
function ls(e, t) {
  return i(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    })
  ]);
}
function ns(e, t) {
  return i(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
    })
  ]);
}
function ss(e, t) {
  return i(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
    })
  ]);
}
function as(e, t) {
  return i(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
    })
  ]);
}
function rs(e, t) {
  return i(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
    })
  ]);
}
function is(e, t) {
  return i(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  ]);
}
function us(e, t) {
  return i(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4.5 12.75l6 6 9-13.5"
    })
  ]);
}
function ps(e, t) {
  return i(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 19.5L8.25 12l7.5-7.5"
    })
  ]);
}
function cs(e, t) {
  return i(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 4.5l7.5 7.5-7.5 7.5"
    })
  ]);
}
function no(e, t) {
  return i(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
    })
  ]);
}
function ds(e, t) {
  return i(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
    }),
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    })
  ]);
}
function fs(e, t) {
  return i(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
    })
  ]);
}
function wo(e, t) {
  return i(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    })
  ]);
}
function Et(e, t) {
  return i(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
    })
  ]);
}
function vs(e, t) {
  return i(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
    })
  ]);
}
function hs(e, t) {
  return i(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
    })
  ]);
}
function ms(e, t) {
  return i(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
    })
  ]);
}
function ll(e, t) {
  return i(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
    })
  ]);
}
function vt(e, t) {
  return i(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6 18L18 6M6 6l12 12"
    })
  ]);
}
const gs = /* @__PURE__ */ a("div", {
  "aria-live": "assertive",
  class: "po-pointer-events-none po-fixed po-inset-0 po-flex po-items-start po-px-4 po-py-6 sm:po-p-6 po-z-[60]"
}, [
  /* @__PURE__ */ a("div", {
    class: "po-flex po-w-full po-flex-col po-items-end po-space-y-4 sm:po-items-end po-pt-[55px]",
    id: "po-notifications-alert"
  })
], -1), bs = { class: "po-bg-mpao-blue po-fixed po-top-0 po-w-full po-z-50 po-flex" }, ys = { class: "po-shrink-0 po-px-3 po-pt-3" }, xs = {
  for: "sidebar-drawer-toggle",
  role: "button",
  class: "genie-effect po-flex po-items-center po-justify-center po-bg-[#2e5266] po-rounded-full po-w-10 po-h-10 po-select-none po-text-slate-100"
}, ws = { class: "po-mx-auto po-max-w-full po-pr-4 po-grow sm:po-pr-4" }, $s = { class: "po-flex po-relative po-h-16 po-items-center po-justify-between po-space-x-12" }, Vs = { class: "po-flex po-items-center po-space-x-3" }, ks = {
  key: 0,
  class: "po-block po-w-6 po-text-slate-100 md:po-hidden",
  role: "button"
}, _s = {
  name: "PoTopBar"
}, p2 = /* @__PURE__ */ Object.assign(_s, {
  props: {
    /**
     * Search Query
     */
    currentQuery: {
      type: String,
      default: ""
    },
    /**
     * Name of the app
     */
    appName: {
      type: String,
      default: "Pension App"
    },
    /**
     * If topbar has
     */
    hasSearch: {
      type: Boolean,
      default: !0
    },
    /**
     * List of apps for app tray
     */
    appList: {
      type: Array,
      default: null
    },
    /**
     * List of notifications for notifications hub
     */
    notifications: {
      type: Array,
      default: null
    },
    /**
     * Toggle new notification indicator
     */
    hasNewNotifications: {
      type: Boolean,
      default: !1
    },
    /**
     * User object
     */
    userObject: {
      type: Object,
      default: null
    },
    /**
     * Avatar
     */
    avatar: {
      type: String,
      default: ""
    },
    /**
     * Organisation logo
     */
    logo: {
      type: String,
      default: ""
    },
    /**
     * App Icon
     */
    appIcon: null
  },
  emits: ["query", "profileSwitcherClick", "onSearchClear"],
  setup(e, { emit: t }) {
    const o = e, l = C(""), n = C(""), { avatar: s, logo: r } = xe(o);
    X(s, () => {
      l.value = s.value;
    }), X(r, () => {
      n.value = r.value;
    });
    function u(d) {
      t("profileSwitcherClick", d);
    }
    function p(d) {
      t("query", d);
    }
    function f(d) {
      t("onSearchClear", d);
    }
    return (d, h) => (i(), c(B, null, [
      gs,
      a("nav", bs, [
        a("div", ys, [
          a("label", xs, [
            S(w(ls), { class: "po-w-6 po-fill-current" })
          ])
        ]),
        a("div", ws, [
          a("div", $s, [
            S(w(Ts), { "app-name": e.appName }, {
              icon: D(() => [
                K(d.$slots, "appIcon", {}, () => [
                  e.appIcon ? (i(), M(de(e.appIcon), { key: 0 })) : y("", !0)
                ])
              ]),
              _: 3
            }, 8, ["app-name"]),
            e.hasSearch ? (i(), M(w(Ms), {
              key: 0,
              onQuery: p,
              onOnClear: f,
              "current-query": e.currentQuery
            }, null, 8, ["current-query"])) : y("", !0),
            a("div", Vs, [
              e.hasSearch ? (i(), c("span", ks, [
                S(w(wo), { class: "po-stroke-current" })
              ])) : y("", !0),
              S(w(tr), {
                notifications: e.notifications,
                "has-new-notifications": e.hasNewNotifications
              }, null, 8, ["notifications", "has-new-notifications"]),
              S(w(Ha), {
                "app-list": e.appList,
                "open-in-new-tab": !0
              }, null, 8, ["app-list"]),
              S(w(Sr), {
                "user-object": e.userObject,
                avatar: l.value,
                logo: n.value,
                onButtonClick: u
              }, null, 8, ["user-object", "avatar", "logo"])
            ])
          ])
        ])
      ])
    ], 64));
  }
}), Cs = { class: "po-flex po-items-center po-justify-center po-space-x-3" }, Ss = { class: "po-w-8 po-text-slate-100 app-icon" }, Os = { class: "po-font-light po-text-lg po-text-slate-100" }, Ps = { class: "po-hidden md:po-block" }, Es = { class: "po-block md:po-hidden" }, Ls = {
  name: "PoAppIcon"
}, Ts = /* @__PURE__ */ Object.assign(Ls, {
  props: {
    /**
     * Name of the app
     */
    appName: {
      type: String,
      default: "App Name"
    }
  },
  setup(e) {
    const t = e, o = T(() => {
      let l = t.appName.match(/\b[A-Z]/g).join("");
      return l.length === 1 ? t.appName.substring(0, 3) : l;
    });
    return (l, n) => (i(), c("div", Cs, [
      a("div", Ss, [
        K(l.$slots, "icon")
      ]),
      a("span", Os, [
        a("span", Ps, $(e.appName), 1),
        a("span", Es, $(w(o)), 1)
      ])
    ]));
  }
}), Ds = { class: "po-flex-grow po-hidden po-relative md:po-block" }, As = ["placeholder", "onKeyup"], zs = { class: "po-absolute po-inset-y-0 po-left-0 po-flex po-items-center po-pl-3 po-pointer-events-none po-transition-all po-ease-linear po-duration-100 po-text-slate-400 po-origin-center peer-hover/search:po-scale-105 peer-focus/search:po-text-slate-100" }, Bs = {
  name: "PoSearchBar"
}, Ms = /* @__PURE__ */ Object.assign(Bs, {
  props: {
    /**
     * Placeholder text
     */
    placeholder: {
      type: String,
      default: "Search"
    },
    /**
     * Search Query
     */
    currentQuery: {
      type: String,
      default: ""
    }
  },
  emits: ["query", "onClear"],
  setup(e, { emit: t }) {
    let o = C("");
    const l = (n) => {
      t("query", o.value);
    };
    return X(o, async (n, s) => {
      n === "" && t("onClear", !0);
    }), (n, s) => (i(), c("div", Ds, [
      Pe(a("input", {
        "onUpdate:modelValue": s[0] || (s[0] = (r) => jn(o) ? o.value = r : o = r),
        type: "text",
        id: "main-search",
        placeholder: e.placeholder,
        onKeyup: Nn(l, ["enter"]),
        class: "peer/search po-bg-transparent po-border po-border-transparent po-text-slate-100 po-text-sm po-rounded-md po-ring-0 po-outline-none focus:po-outline-none focus:po-ring-0 po-transition-colors po-ease-linear po-duration-100 po-block po-w-full po-pl-10 po-p-2.5 po-appearance-none focus:po-border-slate-400 hover:po-border-slate-600"
      }, null, 40, As), [
        [Tt, w(o)]
      ]),
      a("div", zs, [
        S(w(wo), { class: "po-w-5 po-h-5 po-stroke-current" })
      ])
    ]));
  }
});
function ue(e, t, ...o) {
  if (e in t) {
    let n = t[e];
    return typeof n == "function" ? n(...o) : n;
  }
  let l = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((n) => `"${n}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(l, ue), l;
}
var Ce = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Ce || {}), Be = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Be || {});
function ee({ visible: e = !0, features: t = 0, ourProps: o, theirProps: l, ...n }) {
  var s;
  let r = El(l, o), u = Object.assign(n, { props: r });
  if (e || t & 2 && r.static)
    return Qt(u);
  if (t & 1) {
    let p = (s = r.unmount) == null || s ? 0 : 1;
    return ue(p, { [0]() {
      return null;
    }, [1]() {
      return Qt({ ...n, props: { ...r, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Qt(u);
}
function Qt({ props: e, attrs: t, slots: o, slot: l, name: n }) {
  var s, r;
  let { as: u, ...p } = zt(e, ["unmount", "static"]), f = (s = o.default) == null ? void 0 : s.call(o, l), d = {};
  if (l) {
    let h = !1, b = [];
    for (let [m, g] of Object.entries(l))
      typeof g == "boolean" && (h = !0), g === !0 && b.push(m);
    h && (d["data-headlessui-state"] = b.join(" "));
  }
  if (u === "template") {
    if (f = Pl(f ?? []), Object.keys(p).length > 0 || Object.keys(t).length > 0) {
      let [h, ...b] = f ?? [];
      if (!js(h) || b.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${n} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(p).concat(Object.keys(t)).map((x) => x.trim()).filter((x, v, k) => k.indexOf(x) === v).sort((x, v) => x.localeCompare(v)).map((x) => `  - ${x}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((x) => `  - ${x}`).join(`
`)].join(`
`));
      let m = El((r = h.props) != null ? r : {}, p), g = In(h, m);
      for (let x in m)
        x.startsWith("on") && (g.props || (g.props = {}), g.props[x] = m[x]);
      return g;
    }
    return Array.isArray(f) && f.length === 1 ? f[0] : f;
  }
  return te(u, Object.assign({}, p, d), { default: () => f });
}
function Pl(e) {
  return e.flatMap((t) => t.type === B ? Pl(t.children) : [t]);
}
function El(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, o = {};
  for (let l of e)
    for (let n in l)
      n.startsWith("on") && typeof l[n] == "function" ? (o[n] != null || (o[n] = []), o[n].push(l[n])) : t[n] = l[n];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(o).map((l) => [l, void 0])));
  for (let l in o)
    Object.assign(t, { [l](n, ...s) {
      let r = o[l];
      for (let u of r) {
        if (n instanceof Event && n.defaultPrevented)
          return;
        u(n, ...s);
      }
    } });
  return t;
}
function Ll(e) {
  let t = Object.assign({}, e);
  for (let o in t)
    t[o] === void 0 && delete t[o];
  return t;
}
function zt(e, t = []) {
  let o = Object.assign({}, e);
  for (let l of t)
    l in o && delete o[l];
  return o;
}
function js(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Ns = 0;
function Is() {
  return ++Ns;
}
function ae() {
  return Is();
}
var le = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(le || {});
function A(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Tl = Symbol("Context");
var oe = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(oe || {});
function Rs() {
  return lt() !== null;
}
function lt() {
  return pe(Tl, null);
}
function $o(e) {
  ce(Tl, e);
}
function nl(e, t) {
  if (e)
    return e;
  let o = t ?? "button";
  if (typeof o == "string" && o.toLowerCase() === "button")
    return "button";
}
function Vo(e, t) {
  let o = C(nl(e.value.type, e.value.as));
  return U(() => {
    o.value = nl(e.value.type, e.value.as);
  }), ie(() => {
    var l;
    o.value || A(t) && A(t) instanceof HTMLButtonElement && !((l = A(t)) != null && l.hasAttribute("type")) && (o.value = "button");
  }), o;
}
var Fs = Object.defineProperty, Hs = (e, t, o) => t in e ? Fs(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, sl = (e, t, o) => (Hs(e, typeof t != "symbol" ? t + "" : t, o), o);
let qs = class {
  constructor() {
    sl(this, "current", this.detect()), sl(this, "currentId", 0);
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
}, ht = new qs();
function be(e) {
  if (ht.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = A(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
function Ws({ container: e, accept: t, walk: o, enabled: l }) {
  ie(() => {
    let n = e.value;
    if (!n || l !== void 0 && !l.value)
      return;
    let s = be(e);
    if (!s)
      return;
    let r = Object.assign((p) => t(p), { acceptNode: t }), u = s.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, r, !1);
    for (; u.nextNode(); )
      o(u.currentNode);
  });
}
let so = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var ne = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ne || {}), Ze = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Ze || {}), Us = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Us || {});
function Bt(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(so)).sort((t, o) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (o.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var ko = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(ko || {});
function Dl(e, t = 0) {
  var o;
  return e === ((o = be(e)) == null ? void 0 : o.body) ? !1 : ue(t, { [0]() {
    return e.matches(so);
  }, [1]() {
    let l = e;
    for (; l !== null; ) {
      if (l.matches(so))
        return !0;
      l = l.parentElement;
    }
    return !1;
  } });
}
function Ue(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Gs = ["textarea", "input"].join(",");
function Zs(e) {
  var t, o;
  return (o = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Gs)) != null ? o : !1;
}
function Al(e, t = (o) => o) {
  return e.slice().sort((o, l) => {
    let n = t(o), s = t(l);
    if (n === null || s === null)
      return 0;
    let r = n.compareDocumentPosition(s);
    return r & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : r & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function me(e, t, { sorted: o = !0, relativeTo: l = null, skipElements: n = [] } = {}) {
  var s;
  let r = (s = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? s : document, u = Array.isArray(e) ? o ? Al(e) : e : Bt(e);
  n.length > 0 && u.length > 1 && (u = u.filter((g) => !n.includes(g))), l = l ?? r.activeElement;
  let p = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), f = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, u.indexOf(l)) - 1;
    if (t & 4)
      return Math.max(0, u.indexOf(l)) + 1;
    if (t & 8)
      return u.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), d = t & 32 ? { preventScroll: !0 } : {}, h = 0, b = u.length, m;
  do {
    if (h >= b || h + b <= 0)
      return 0;
    let g = f + h;
    if (t & 16)
      g = (g + b) % b;
    else {
      if (g < 0)
        return 3;
      if (g >= b)
        return 1;
    }
    m = u[g], m == null || m.focus(d), h += p;
  } while (m !== r.activeElement);
  return t & 6 && Zs(m) && m.select(), m.hasAttribute("tabindex") || m.setAttribute("tabindex", "0"), 2;
}
function Jt(e, t, o) {
  ht.isServer || ie((l) => {
    document.addEventListener(e, t, o), l(() => document.removeEventListener(e, t, o));
  });
}
function zl(e, t, o = T(() => !0)) {
  function l(s, r) {
    if (!o.value || s.defaultPrevented)
      return;
    let u = r(s);
    if (u === null || !u.getRootNode().contains(u))
      return;
    let p = function f(d) {
      return typeof d == "function" ? f(d()) : Array.isArray(d) || d instanceof Set ? d : [d];
    }(e);
    for (let f of p) {
      if (f === null)
        continue;
      let d = f instanceof HTMLElement ? f : A(f);
      if (d != null && d.contains(u) || s.composed && s.composedPath().includes(d))
        return;
    }
    return !Dl(u, ko.Loose) && u.tabIndex !== -1 && s.preventDefault(), t(s, u);
  }
  let n = C(null);
  Jt("mousedown", (s) => {
    var r, u;
    o.value && (n.value = ((u = (r = s.composedPath) == null ? void 0 : r.call(s)) == null ? void 0 : u[0]) || s.target);
  }, !0), Jt("click", (s) => {
    n.value && (l(s, () => n.value), n.value = null);
  }, !0), Jt("blur", (s) => l(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Ee = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Ee || {});
let je = Q({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: o }) {
  return () => {
    let { features: l, ...n } = e, s = { "aria-hidden": (l & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(l & 4) === 4 && (l & 2) !== 2 && { display: "none" } } };
    return ee({ ourProps: s, theirProps: n, slot: {}, attrs: o, slots: t, name: "Hidden" });
  };
} });
function Bl(e = {}, t = null, o = []) {
  for (let [l, n] of Object.entries(e))
    jl(o, Ml(t, l), n);
  return o;
}
function Ml(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function jl(e, t, o) {
  if (Array.isArray(o))
    for (let [l, n] of o.entries())
      jl(e, Ml(t, l.toString()), n);
  else
    o instanceof Date ? e.push([t, o.toISOString()]) : typeof o == "boolean" ? e.push([t, o ? "1" : "0"]) : typeof o == "string" ? e.push([t, o]) : typeof o == "number" ? e.push([t, `${o}`]) : o == null ? e.push([t, ""]) : Bl(o, t, e);
}
function Nl(e) {
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
function Il(e, t, o) {
  let l = C(o == null ? void 0 : o.value), n = T(() => e.value !== void 0);
  return [T(() => n.value ? e.value : l.value), function(s) {
    return n.value || (l.value = s), t == null ? void 0 : t(s);
  }];
}
function Ks() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Ys(e, t, o) {
  ht.isServer || ie((l) => {
    window.addEventListener(e, t, o), l(() => window.removeEventListener(e, t, o));
  });
}
var ge = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(ge || {});
function _o() {
  let e = C(0);
  return Ys("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Co(e, t, o, l) {
  ht.isServer || ie((n) => {
    e = e ?? window, e.addEventListener(t, o, l), n(() => e.removeEventListener(t, o, l));
  });
}
function Rl(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function Fl(e) {
  if (!e)
    return /* @__PURE__ */ new Set();
  if (typeof e == "function")
    return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let o of e.value) {
    let l = A(o);
    l instanceof HTMLElement && t.add(l);
  }
  return t;
}
var Hl = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Hl || {});
let at = Object.assign(Q({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: C(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: l }) {
  let n = C(null);
  l({ el: n, $el: n });
  let s = T(() => be(n)), r = C(!1);
  U(() => r.value = !0), se(() => r.value = !1), Qs({ ownerDocument: s }, T(() => r.value && Boolean(e.features & 16)));
  let u = Js({ ownerDocument: s, container: n, initialFocus: T(() => e.initialFocus) }, T(() => r.value && Boolean(e.features & 2)));
  ea({ ownerDocument: s, container: n, containers: e.containers, previousActiveElement: u }, T(() => r.value && Boolean(e.features & 8)));
  let p = _o();
  function f(m) {
    let g = A(n);
    g && ((x) => x())(() => {
      ue(p.value, { [ge.Forwards]: () => {
        me(g, ne.First, { skipElements: [m.relatedTarget] });
      }, [ge.Backwards]: () => {
        me(g, ne.Last, { skipElements: [m.relatedTarget] });
      } });
    });
  }
  let d = C(!1);
  function h(m) {
    m.key === "Tab" && (d.value = !0, requestAnimationFrame(() => {
      d.value = !1;
    }));
  }
  function b(m) {
    if (!r.value)
      return;
    let g = Fl(e.containers);
    A(n) instanceof HTMLElement && g.add(A(n));
    let x = m.relatedTarget;
    x instanceof HTMLElement && x.dataset.headlessuiFocusGuard !== "true" && (ql(g, x) || (d.value ? me(A(n), ue(p.value, { [ge.Forwards]: () => ne.Next, [ge.Backwards]: () => ne.Previous }) | ne.WrapAround, { relativeTo: m.target }) : m.target instanceof HTMLElement && Ue(m.target)));
  }
  return () => {
    let m = {}, g = { ref: n, onKeydown: h, onFocusout: b }, { features: x, initialFocus: v, containers: k, ...V } = e;
    return te(B, [Boolean(x & 4) && te(je, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: Ee.Focusable }), ee({ ourProps: g, theirProps: { ...t, ...V }, slot: m, attrs: t, slots: o, name: "FocusTrap" }), Boolean(x & 4) && te(je, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: Ee.Focusable })]);
  };
} }), { features: Hl }), qe = [];
if (typeof window < "u" && typeof document < "u") {
  let e = function(t) {
    t.target instanceof HTMLElement && t.target !== document.body && qe[0] !== t.target && (qe.unshift(t.target), qe = qe.filter((o) => o != null && o.isConnected), qe.splice(10));
  };
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
}
function Xs(e) {
  let t = C(qe.slice());
  return X([e], ([o], [l]) => {
    l === !0 && o === !1 ? Rl(() => {
      t.value.splice(0);
    }) : l === !1 && o === !0 && (t.value = qe.slice());
  }, { flush: "post" }), () => {
    var o;
    return (o = t.value.find((l) => l != null && l.isConnected)) != null ? o : null;
  };
}
function Qs({ ownerDocument: e }, t) {
  let o = Xs(t);
  U(() => {
    ie(() => {
      var l, n;
      t.value || ((l = e.value) == null ? void 0 : l.activeElement) === ((n = e.value) == null ? void 0 : n.body) && Ue(o());
    }, { flush: "post" });
  }), se(() => {
    Ue(o());
  });
}
function Js({ ownerDocument: e, container: t, initialFocus: o }, l) {
  let n = C(null), s = C(!1);
  return U(() => s.value = !0), se(() => s.value = !1), U(() => {
    X([t, o, l], (r, u) => {
      if (r.every((f, d) => (u == null ? void 0 : u[d]) === f) || !l.value)
        return;
      let p = A(t);
      p && Rl(() => {
        var f, d;
        if (!s.value)
          return;
        let h = A(o), b = (f = e.value) == null ? void 0 : f.activeElement;
        if (h) {
          if (h === b) {
            n.value = b;
            return;
          }
        } else if (p.contains(b)) {
          n.value = b;
          return;
        }
        h ? Ue(h) : me(p, ne.First | ne.NoScroll) === Ze.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), n.value = (d = e.value) == null ? void 0 : d.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), n;
}
function ea({ ownerDocument: e, container: t, containers: o, previousActiveElement: l }, n) {
  var s;
  Co((s = e.value) == null ? void 0 : s.defaultView, "focus", (r) => {
    if (!n.value)
      return;
    let u = Fl(o);
    A(t) instanceof HTMLElement && u.add(A(t));
    let p = l.value;
    if (!p)
      return;
    let f = r.target;
    f && f instanceof HTMLElement ? ql(u, f) ? (l.value = f, Ue(f)) : (r.preventDefault(), r.stopPropagation(), Ue(p)) : Ue(l.value);
  }, !0);
}
function ql(e, t) {
  for (let o of e)
    if (o.contains(t))
      return !0;
  return !1;
}
let eo = /* @__PURE__ */ new Map(), rt = /* @__PURE__ */ new Map();
function al(e, t = C(!0)) {
  ie((o) => {
    var l;
    if (!t.value)
      return;
    let n = A(e);
    if (!n)
      return;
    o(function() {
      var r;
      if (!n)
        return;
      let u = (r = rt.get(n)) != null ? r : 1;
      if (u === 1 ? rt.delete(n) : rt.set(n, u - 1), u !== 1)
        return;
      let p = eo.get(n);
      p && (p["aria-hidden"] === null ? n.removeAttribute("aria-hidden") : n.setAttribute("aria-hidden", p["aria-hidden"]), n.inert = p.inert, eo.delete(n));
    });
    let s = (l = rt.get(n)) != null ? l : 0;
    rt.set(n, s + 1), s === 0 && (eo.set(n, { "aria-hidden": n.getAttribute("aria-hidden"), inert: n.inert }), n.setAttribute("aria-hidden", "true"), n.inert = !0);
  });
}
let Wl = Symbol("ForcePortalRootContext");
function ta() {
  return pe(Wl, !1);
}
let ao = Q({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: o }) {
  return ce(Wl, e.force), () => {
    let { force: l, ...n } = e;
    return ee({ theirProps: n, ourProps: {}, slot: {}, slots: t, attrs: o, name: "ForcePortalRoot" });
  };
} });
function oa(e) {
  let t = be(e);
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
let Ul = Q({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: o }) {
  let l = C(null), n = T(() => be(l)), s = ta(), r = pe(Gl, null), u = C(s === !0 || r == null ? oa(l.value) : r.resolveTarget());
  return ie(() => {
    s || r != null && (u.value = r.resolveTarget());
  }), se(() => {
    var p, f;
    let d = (p = n.value) == null ? void 0 : p.getElementById("headlessui-portal-root");
    d && u.value === d && u.value.children.length <= 0 && ((f = u.value.parentElement) == null || f.removeChild(u.value));
  }), () => {
    if (u.value === null)
      return null;
    let p = { ref: l, "data-headlessui-portal": "" };
    return te(ft, { to: u.value }, ee({ ourProps: p, theirProps: e, slot: {}, attrs: o, slots: t, name: "Portal" }));
  };
} }), Gl = Symbol("PortalGroupContext"), la = Q({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: o }) {
  let l = Rn({ resolveTarget() {
    return e.target;
  } });
  return ce(Gl, l), () => {
    let { target: n, ...s } = e;
    return ee({ theirProps: s, ourProps: {}, slot: {}, attrs: t, slots: o, name: "PortalGroup" });
  };
} }), Zl = Symbol("StackContext");
var ro = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(ro || {});
function na() {
  return pe(Zl, () => {
  });
}
function sa({ type: e, enabled: t, element: o, onUpdate: l }) {
  let n = na();
  function s(...r) {
    l == null || l(...r), n(...r);
  }
  U(() => {
    X(t, (r, u) => {
      r ? s(0, e, o) : u === !0 && s(1, e, o);
    }, { immediate: !0, flush: "sync" });
  }), se(() => {
    t.value && s(1, e, o);
  }), ce(Zl, s);
}
let Kl = Symbol("DescriptionContext");
function aa() {
  let e = pe(Kl, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function Mt({ slot: e = C({}), name: t = "Description", props: o = {} } = {}) {
  let l = C([]);
  function n(s) {
    return l.value.push(s), () => {
      let r = l.value.indexOf(s);
      r !== -1 && l.value.splice(r, 1);
    };
  }
  return ce(Kl, { register: n, slot: e, name: t, props: o }), T(() => l.value.length > 0 ? l.value.join(" ") : void 0);
}
let ra = Q({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${ae()}` } }, setup(e, { attrs: t, slots: o }) {
  let l = aa();
  return U(() => se(l.register(e.id))), () => {
    let { name: n = "Description", slot: s = C({}), props: r = {} } = l, { id: u, ...p } = e, f = { ...Object.entries(r).reduce((d, [h, b]) => Object.assign(d, { [h]: w(b) }), {}), id: u };
    return ee({ ourProps: f, theirProps: p, slot: s.value, attrs: t, slots: o, name: n });
  };
} });
function ia(e) {
  let t = Sl(e.getSnapshot());
  return se(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function jt() {
  let e = [], t = { addEventListener(o, l, n, s) {
    return o.addEventListener(l, n, s), t.add(() => o.removeEventListener(l, n, s));
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
  }, style(o, l, n) {
    let s = o.style.getPropertyValue(l);
    return Object.assign(o.style, { [l]: n }), this.add(() => {
      Object.assign(o.style, { [l]: s });
    });
  }, group(o) {
    let l = jt();
    return o(l), this.add(() => l.dispose());
  }, add(o) {
    return e.push(o), () => {
      let l = e.indexOf(o);
      if (l >= 0)
        for (let n of e.splice(l, 1))
          n();
    };
  }, dispose() {
    for (let o of e.splice(0))
      o();
  } };
  return t;
}
function ua(e, t) {
  let o = e(), l = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return o;
  }, subscribe(n) {
    return l.add(n), () => l.delete(n);
  }, dispatch(n, ...s) {
    let r = t[n].call(o, ...s);
    r && (o = r, l.forEach((u) => u()));
  } };
}
function pa() {
  let e;
  return { before({ doc: t }) {
    var o;
    let l = t.documentElement;
    e = ((o = t.defaultView) != null ? o : window).innerWidth - l.clientWidth;
  }, after({ doc: t, d: o }) {
    let l = t.documentElement, n = l.clientWidth - l.offsetWidth, s = e - n;
    o.style(l, "paddingRight", `${s}px`);
  } };
}
function ca() {
  if (!Ks())
    return {};
  let e;
  return { before() {
    e = window.pageYOffset;
  }, after({ doc: t, d: o, meta: l }) {
    function n(r) {
      return l.containers.flatMap((u) => u()).some((u) => u.contains(r));
    }
    o.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
    let s = null;
    o.addEventListener(t, "click", (r) => {
      if (r.target instanceof HTMLElement)
        try {
          let u = r.target.closest("a");
          if (!u)
            return;
          let { hash: p } = new URL(u.href), f = t.querySelector(p);
          f && !n(f) && (s = f);
        } catch {
        }
    }, !0), o.addEventListener(t, "touchmove", (r) => {
      r.target instanceof HTMLElement && !n(r.target) && r.preventDefault();
    }, { passive: !1 }), o.add(() => {
      window.scrollTo(0, window.pageYOffset + e), s && s.isConnected && (s.scrollIntoView({ block: "nearest" }), s = null);
    });
  } };
}
function da() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function fa(e) {
  let t = {};
  for (let o of e)
    Object.assign(t, o(t));
  return t;
}
let We = ua(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var o;
  let l = (o = this.get(e)) != null ? o : { doc: e, count: 0, d: jt(), meta: /* @__PURE__ */ new Set() };
  return l.count++, l.meta.add(t), this.set(e, l), this;
}, POP(e, t) {
  let o = this.get(e);
  return o && (o.count--, o.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: o }) {
  let l = { doc: e, d: t, meta: fa(o) }, n = [ca(), pa(), da()];
  n.forEach(({ before: s }) => s == null ? void 0 : s(l)), n.forEach(({ after: s }) => s == null ? void 0 : s(l));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
We.subscribe(() => {
  let e = We.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [o] of e)
    t.set(o, o.documentElement.style.overflow);
  for (let o of e.values()) {
    let l = t.get(o.doc) === "hidden", n = o.count !== 0;
    (n && !l || !n && l) && We.dispatch(o.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", o), o.count === 0 && We.dispatch("TEARDOWN", o);
  }
});
function va(e, t, o) {
  let l = ia(We), n = T(() => {
    let s = e.value ? l.value.get(e.value) : void 0;
    return s ? s.count > 0 : !1;
  });
  return X([e, t], ([s, r], [u], p) => {
    if (!s || !r)
      return;
    We.dispatch("PUSH", s, o);
    let f = !1;
    p(() => {
      f || (We.dispatch("POP", u ?? s, o), f = !0);
    });
  }, { immediate: !0 }), n;
}
var ha = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ha || {});
let io = Symbol("DialogContext");
function mt(e) {
  let t = pe(io, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, mt), o;
  }
  return t;
}
let kt = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Nt = Q({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: kt }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${ae()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: o, slots: l, expose: n }) {
  var s;
  let r = C(!1);
  U(() => {
    r.value = !0;
  });
  let u = C(0), p = lt(), f = T(() => e.open === kt && p !== null ? (p.value & oe.Open) === oe.Open : e.open), d = C(null), h = C(null), b = T(() => be(d));
  if (n({ el: d, $el: d }), !(e.open !== kt || p !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof f.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${f.value === kt ? void 0 : e.open}`);
  let m = T(() => r.value && f.value ? 0 : 1), g = T(() => m.value === 0), x = T(() => u.value > 1), v = pe(io, null) !== null, k = T(() => x.value ? "parent" : "leaf"), V = T(() => p !== null ? (p.value & oe.Closing) === oe.Closing : !1), P = T(() => v || V.value ? !1 : g.value), _ = T(() => {
    var F, W, I;
    return (I = Array.from((W = (F = b.value) == null ? void 0 : F.querySelectorAll("body > *")) != null ? W : []).find((Y) => Y.id === "headlessui-portal-root" ? !1 : Y.contains(A(h)) && Y instanceof HTMLElement)) != null ? I : null;
  });
  al(_, P);
  let O = T(() => x.value ? !0 : g.value), L = T(() => {
    var F, W, I;
    return (I = Array.from((W = (F = b.value) == null ? void 0 : F.querySelectorAll("[data-headlessui-portal]")) != null ? W : []).find((Y) => Y.contains(A(h)) && Y instanceof HTMLElement)) != null ? I : null;
  });
  al(L, O), sa({ type: "Dialog", enabled: T(() => m.value === 0), element: d, onUpdate: (F, W) => {
    if (W === "Dialog")
      return ue(F, { [ro.Add]: () => u.value += 1, [ro.Remove]: () => u.value -= 1 });
  } });
  let N = Mt({ name: "DialogDescription", slot: T(() => ({ open: f.value })) }), j = C(null), H = { titleId: j, panelRef: C(null), dialogState: m, setTitleId(F) {
    j.value !== F && (j.value = F);
  }, close() {
    t("close", !1);
  } };
  ce(io, H);
  function z() {
    var F, W, I;
    return [...Array.from((W = (F = b.value) == null ? void 0 : F.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? W : []).filter((Y) => !(Y === document.body || Y === document.head || !(Y instanceof HTMLElement) || Y.contains(A(h)) || H.panelRef.value && Y.contains(H.panelRef.value))), (I = H.panelRef.value) != null ? I : d.value];
  }
  let G = T(() => !(!g.value || x.value));
  zl(() => z(), (F, W) => {
    H.close(), bo(() => W == null ? void 0 : W.focus());
  }, G);
  let Z = T(() => !(x.value || m.value !== 0));
  Co((s = b.value) == null ? void 0 : s.defaultView, "keydown", (F) => {
    Z.value && (F.defaultPrevented || F.key === le.Escape && (F.preventDefault(), F.stopPropagation(), H.close()));
  });
  let R = T(() => !(V.value || m.value !== 0 || v));
  return va(b, R, (F) => {
    var W;
    return { containers: [...(W = F.containers) != null ? W : [], z] };
  }), ie((F) => {
    if (m.value !== 0)
      return;
    let W = A(d);
    if (!W)
      return;
    let I = new ResizeObserver((Y) => {
      for (let Oe of Y) {
        let fe = Oe.target.getBoundingClientRect();
        fe.x === 0 && fe.y === 0 && fe.width === 0 && fe.height === 0 && H.close();
      }
    });
    I.observe(W), F(() => I.disconnect());
  }), () => {
    let { id: F, open: W, initialFocus: I, ...Y } = e, Oe = { ...o, ref: d, id: F, role: "dialog", "aria-modal": m.value === 0 ? !0 : void 0, "aria-labelledby": j.value, "aria-describedby": N.value }, fe = { open: m.value === 0 };
    return te(ao, { force: !0 }, () => [te(Ul, () => te(la, { target: d.value }, () => te(ao, { force: !1 }, () => te(at, { initialFocus: I, containers: z, features: g.value ? ue(k.value, { parent: at.features.RestoreFocus, leaf: at.features.All & ~at.features.FocusLock }) : at.features.None }, () => ee({ ourProps: Oe, theirProps: Y, slot: fe, attrs: o, slots: l, visible: m.value === 0, features: Ce.RenderStrategy | Ce.Static, name: "Dialog" }))))), te(je, { features: Ee.Hidden, ref: h })]);
  };
} });
Q({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${ae()}` } }, setup(e, { attrs: t, slots: o }) {
  let l = mt("DialogOverlay");
  function n(s) {
    s.target === s.currentTarget && (s.preventDefault(), s.stopPropagation(), l.close());
  }
  return () => {
    let { id: s, ...r } = e;
    return ee({ ourProps: { id: s, "aria-hidden": !0, onClick: n }, theirProps: r, slot: { open: l.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogOverlay" });
  };
} });
Q({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${ae()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: l }) {
  let n = mt("DialogBackdrop"), s = C(null);
  return l({ el: s, $el: s }), U(() => {
    if (n.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: r, ...u } = e, p = { id: r, ref: s, "aria-hidden": !0 };
    return te(ao, { force: !0 }, () => te(Ul, () => ee({ ourProps: p, theirProps: { ...t, ...u }, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogBackdrop" })));
  };
} });
let It = Q({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${ae()}` } }, setup(e, { attrs: t, slots: o, expose: l }) {
  let n = mt("DialogPanel");
  l({ el: n.panelRef, $el: n.panelRef });
  function s(r) {
    r.stopPropagation();
  }
  return () => {
    let { id: r, ...u } = e, p = { id: r, ref: n.panelRef, onClick: s };
    return ee({ ourProps: p, theirProps: u, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogPanel" });
  };
} }), Yl = Q({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${ae()}` } }, setup(e, { attrs: t, slots: o }) {
  let l = mt("DialogTitle");
  return U(() => {
    l.setTitleId(e.id), se(() => l.setTitleId(null));
  }), () => {
    let { id: n, ...s } = e;
    return ee({ ourProps: { id: n }, theirProps: s, slot: { open: l.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogTitle" });
  };
} });
var ma = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ma || {});
let Xl = Symbol("DisclosureContext");
function So(e) {
  let t = pe(Xl, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, So), o;
  }
  return t;
}
let Ql = Symbol("DisclosurePanelContext");
function ga() {
  return pe(Ql, null);
}
let rl = Q({ name: "Disclosure", props: { as: { type: [Object, String], default: "template" }, defaultOpen: { type: [Boolean], default: !1 } }, setup(e, { slots: t, attrs: o }) {
  let l = C(e.defaultOpen ? 0 : 1), n = C(null), s = C(null), r = { buttonId: C(null), panelId: C(null), disclosureState: l, panel: n, button: s, toggleDisclosure() {
    l.value = ue(l.value, { [0]: 1, [1]: 0 });
  }, closeDisclosure() {
    l.value !== 1 && (l.value = 1);
  }, close(u) {
    r.closeDisclosure();
    let p = (() => u ? u instanceof HTMLElement ? u : u.value instanceof HTMLElement ? A(u) : A(r.button) : A(r.button))();
    p == null || p.focus();
  } };
  return ce(Xl, r), $o(T(() => ue(l.value, { [0]: oe.Open, [1]: oe.Closed }))), () => {
    let { defaultOpen: u, ...p } = e, f = { open: l.value === 0, close: r.close };
    return ee({ theirProps: p, ourProps: {}, slot: f, slots: t, attrs: o, name: "Disclosure" });
  };
} }), il = Q({ name: "DisclosureButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-disclosure-button-${ae()}` } }, setup(e, { attrs: t, slots: o, expose: l }) {
  let n = So("DisclosureButton");
  U(() => {
    n.buttonId.value = e.id;
  }), se(() => {
    n.buttonId.value = null;
  });
  let s = ga(), r = T(() => s === null ? !1 : s.value === n.panelId.value), u = C(null);
  l({ el: u, $el: u }), r.value || ie(() => {
    n.button.value = u.value;
  });
  let p = Vo(T(() => ({ as: e.as, type: t.type })), u);
  function f() {
    var b;
    e.disabled || (r.value ? (n.toggleDisclosure(), (b = A(n.button)) == null || b.focus()) : n.toggleDisclosure());
  }
  function d(b) {
    var m;
    if (!e.disabled)
      if (r.value)
        switch (b.key) {
          case le.Space:
          case le.Enter:
            b.preventDefault(), b.stopPropagation(), n.toggleDisclosure(), (m = A(n.button)) == null || m.focus();
            break;
        }
      else
        switch (b.key) {
          case le.Space:
          case le.Enter:
            b.preventDefault(), b.stopPropagation(), n.toggleDisclosure();
            break;
        }
  }
  function h(b) {
    switch (b.key) {
      case le.Space:
        b.preventDefault();
        break;
    }
  }
  return () => {
    let b = { open: n.disclosureState.value === 0 }, { id: m, ...g } = e, x = r.value ? { ref: u, type: p.value, onClick: f, onKeydown: d } : { id: m, ref: u, type: p.value, "aria-expanded": e.disabled ? void 0 : n.disclosureState.value === 0, "aria-controls": A(n.panel) ? n.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onClick: f, onKeydown: d, onKeyup: h };
    return ee({ ourProps: x, theirProps: g, slot: b, attrs: t, slots: o, name: "DisclosureButton" });
  };
} }), ul = Q({ name: "DisclosurePanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-disclosure-panel-${ae()}` } }, setup(e, { attrs: t, slots: o, expose: l }) {
  let n = So("DisclosurePanel");
  U(() => {
    n.panelId.value = e.id;
  }), se(() => {
    n.panelId.value = null;
  }), l({ el: n.panel, $el: n.panel }), ce(Ql, n.panelId);
  let s = lt(), r = T(() => s !== null ? (s.value & oe.Open) === oe.Open : n.disclosureState.value === 0);
  return () => {
    let u = { open: n.disclosureState.value === 0, close: n.close }, { id: p, ...f } = e, d = { id: p, ref: n.panel };
    return ee({ ourProps: d, theirProps: f, slot: u, attrs: t, slots: o, features: Ce.RenderStrategy | Ce.Static, visible: r.value, name: "DisclosurePanel" });
  };
} });
var ba = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ba || {});
let Jl = Symbol("PopoverContext");
function Rt(e) {
  let t = pe(Jl, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <${Ft.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, Rt), o;
  }
  return t;
}
let en = Symbol("PopoverGroupContext");
function tn() {
  return pe(en, null);
}
let on = Symbol("PopoverPanelContext");
function ya() {
  return pe(on, null);
}
let Ft = Q({ name: "Popover", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: o, expose: l }) {
  var n;
  let s = C(null);
  l({ el: s, $el: s });
  let r = C(1), u = C(null), p = C(null), f = C(null), d = C(null), h = T(() => be(s)), b = T(() => {
    var V, P;
    if (!A(u) || !A(d))
      return !1;
    for (let z of document.querySelectorAll("body > *"))
      if (Number(z == null ? void 0 : z.contains(A(u))) ^ Number(z == null ? void 0 : z.contains(A(d))))
        return !0;
    let _ = Bt(), O = _.indexOf(A(u)), L = (O + _.length - 1) % _.length, N = (O + 1) % _.length, j = _[L], H = _[N];
    return !((V = A(d)) != null && V.contains(j)) && !((P = A(d)) != null && P.contains(H));
  }), m = { popoverState: r, buttonId: C(null), panelId: C(null), panel: d, button: u, isPortalled: b, beforePanelSentinel: p, afterPanelSentinel: f, togglePopover() {
    r.value = ue(r.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    r.value !== 1 && (r.value = 1);
  }, close(V) {
    m.closePopover();
    let P = (() => V ? V instanceof HTMLElement ? V : V.value instanceof HTMLElement ? A(V) : A(m.button) : A(m.button))();
    P == null || P.focus();
  } };
  ce(Jl, m), $o(T(() => ue(r.value, { [0]: oe.Open, [1]: oe.Closed })));
  let g = { buttonId: m.buttonId, panelId: m.panelId, close() {
    m.closePopover();
  } }, x = tn(), v = x == null ? void 0 : x.registerPopover;
  function k() {
    var V, P, _, O;
    return (O = x == null ? void 0 : x.isFocusWithinPopoverGroup()) != null ? O : ((V = h.value) == null ? void 0 : V.activeElement) && (((P = A(u)) == null ? void 0 : P.contains(h.value.activeElement)) || ((_ = A(d)) == null ? void 0 : _.contains(h.value.activeElement)));
  }
  return ie(() => v == null ? void 0 : v(g)), Co((n = h.value) == null ? void 0 : n.defaultView, "focus", (V) => {
    var P, _;
    r.value === 0 && (k() || u && d && V.target !== window && ((P = A(m.beforePanelSentinel)) != null && P.contains(V.target) || (_ = A(m.afterPanelSentinel)) != null && _.contains(V.target) || m.closePopover()));
  }, !0), zl([u, d], (V, P) => {
    var _;
    m.closePopover(), Dl(P, ko.Loose) || (V.preventDefault(), (_ = A(u)) == null || _.focus());
  }, T(() => r.value === 0)), () => {
    let V = { open: r.value === 0, close: m.close };
    return ee({ theirProps: e, ourProps: { ref: s }, slot: V, slots: t, attrs: o, name: "Popover" });
  };
} }), Oo = Q({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-popover-button-${ae()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: l }) {
  let n = Rt("PopoverButton"), s = T(() => be(n.button));
  l({ el: n.button, $el: n.button }), U(() => {
    n.buttonId.value = e.id;
  }), se(() => {
    n.buttonId.value = null;
  });
  let r = tn(), u = r == null ? void 0 : r.closeOthers, p = ya(), f = T(() => p === null ? !1 : p.value === n.panelId.value), d = C(null), h = `headlessui-focus-sentinel-${ae()}`;
  f.value || ie(() => {
    n.button.value = d.value;
  });
  let b = Vo(T(() => ({ as: e.as, type: t.type })), d);
  function m(k) {
    var V, P, _, O, L;
    if (f.value) {
      if (n.popoverState.value === 1)
        return;
      switch (k.key) {
        case le.Space:
        case le.Enter:
          k.preventDefault(), (P = (V = k.target).click) == null || P.call(V), n.closePopover(), (_ = A(n.button)) == null || _.focus();
          break;
      }
    } else
      switch (k.key) {
        case le.Space:
        case le.Enter:
          k.preventDefault(), k.stopPropagation(), n.popoverState.value === 1 && (u == null || u(n.buttonId.value)), n.togglePopover();
          break;
        case le.Escape:
          if (n.popoverState.value !== 0)
            return u == null ? void 0 : u(n.buttonId.value);
          if (!A(n.button) || (O = s.value) != null && O.activeElement && !((L = A(n.button)) != null && L.contains(s.value.activeElement)))
            return;
          k.preventDefault(), k.stopPropagation(), n.closePopover();
          break;
      }
  }
  function g(k) {
    f.value || k.key === le.Space && k.preventDefault();
  }
  function x(k) {
    var V, P;
    e.disabled || (f.value ? (n.closePopover(), (V = A(n.button)) == null || V.focus()) : (k.preventDefault(), k.stopPropagation(), n.popoverState.value === 1 && (u == null || u(n.buttonId.value)), n.togglePopover(), (P = A(n.button)) == null || P.focus()));
  }
  function v(k) {
    k.preventDefault(), k.stopPropagation();
  }
  return () => {
    let k = n.popoverState.value === 0, V = { open: k }, { id: P, ..._ } = e, O = f.value ? { ref: d, type: b.value, onKeydown: m, onClick: x } : { ref: d, id: P, type: b.value, "aria-expanded": e.disabled ? void 0 : n.popoverState.value === 0, "aria-controls": A(n.panel) ? n.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onKeydown: m, onKeyup: g, onClick: x, onMousedown: v }, L = _o();
    function N() {
      let j = A(n.panel);
      if (!j)
        return;
      function H() {
        ue(L.value, { [ge.Forwards]: () => me(j, ne.First), [ge.Backwards]: () => me(j, ne.Last) }) === Ze.Error && me(Bt().filter((z) => z.dataset.headlessuiFocusGuard !== "true"), ue(L.value, { [ge.Forwards]: ne.Next, [ge.Backwards]: ne.Previous }), { relativeTo: A(n.button) });
      }
      H();
    }
    return te(B, [ee({ ourProps: O, theirProps: { ...t, ..._ }, slot: V, attrs: t, slots: o, name: "PopoverButton" }), k && !f.value && n.isPortalled.value && te(je, { id: h, features: Ee.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: N })]);
  };
} });
Q({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(e, { attrs: t, slots: o }) {
  let l = Rt("PopoverOverlay"), n = `headlessui-popover-overlay-${ae()}`, s = lt(), r = T(() => s !== null ? (s.value & oe.Open) === oe.Open : l.popoverState.value === 0);
  function u() {
    l.closePopover();
  }
  return () => {
    let p = { open: l.popoverState.value === 0 };
    return ee({ ourProps: { id: n, "aria-hidden": !0, onClick: u }, theirProps: e, slot: p, attrs: t, slots: o, features: Ce.RenderStrategy | Ce.Static, visible: r.value, name: "PopoverOverlay" });
  };
} });
let Po = Q({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-popover-panel-${ae()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: l }) {
  let { focus: n } = e, s = Rt("PopoverPanel"), r = T(() => be(s.panel)), u = `headlessui-focus-sentinel-before-${ae()}`, p = `headlessui-focus-sentinel-after-${ae()}`;
  l({ el: s.panel, $el: s.panel }), U(() => {
    s.panelId.value = e.id;
  }), se(() => {
    s.panelId.value = null;
  }), ce(on, s.panelId), ie(() => {
    var v, k;
    if (!n || s.popoverState.value !== 0 || !s.panel)
      return;
    let V = (v = r.value) == null ? void 0 : v.activeElement;
    (k = A(s.panel)) != null && k.contains(V) || me(A(s.panel), ne.First);
  });
  let f = lt(), d = T(() => f !== null ? (f.value & oe.Open) === oe.Open : s.popoverState.value === 0);
  function h(v) {
    var k, V;
    switch (v.key) {
      case le.Escape:
        if (s.popoverState.value !== 0 || !A(s.panel) || r.value && !((k = A(s.panel)) != null && k.contains(r.value.activeElement)))
          return;
        v.preventDefault(), v.stopPropagation(), s.closePopover(), (V = A(s.button)) == null || V.focus();
        break;
    }
  }
  function b(v) {
    var k, V, P, _, O;
    let L = v.relatedTarget;
    L && A(s.panel) && ((k = A(s.panel)) != null && k.contains(L) || (s.closePopover(), ((P = (V = A(s.beforePanelSentinel)) == null ? void 0 : V.contains) != null && P.call(V, L) || (O = (_ = A(s.afterPanelSentinel)) == null ? void 0 : _.contains) != null && O.call(_, L)) && L.focus({ preventScroll: !0 })));
  }
  let m = _o();
  function g() {
    let v = A(s.panel);
    if (!v)
      return;
    function k() {
      ue(m.value, { [ge.Forwards]: () => {
        var V;
        me(v, ne.First) === Ze.Error && ((V = A(s.afterPanelSentinel)) == null || V.focus());
      }, [ge.Backwards]: () => {
        var V;
        (V = A(s.button)) == null || V.focus({ preventScroll: !0 });
      } });
    }
    k();
  }
  function x() {
    let v = A(s.panel);
    if (!v)
      return;
    function k() {
      ue(m.value, { [ge.Forwards]: () => {
        let V = A(s.button), P = A(s.panel);
        if (!V)
          return;
        let _ = Bt(), O = _.indexOf(V), L = _.slice(0, O + 1), N = [..._.slice(O + 1), ...L];
        for (let j of N.slice())
          if (j.dataset.headlessuiFocusGuard === "true" || P != null && P.contains(j)) {
            let H = N.indexOf(j);
            H !== -1 && N.splice(H, 1);
          }
        me(N, ne.First, { sorted: !1 });
      }, [ge.Backwards]: () => {
        var V;
        me(v, ne.Previous) === Ze.Error && ((V = A(s.button)) == null || V.focus());
      } });
    }
    k();
  }
  return () => {
    let v = { open: s.popoverState.value === 0, close: s.close }, { id: k, focus: V, ...P } = e, _ = { ref: s.panel, id: k, onKeydown: h, onFocusout: n && s.popoverState.value === 0 ? b : void 0, tabIndex: -1 };
    return ee({ ourProps: _, theirProps: { ...t, ...P }, attrs: t, slot: v, slots: { ...o, default: (...O) => {
      var L;
      return [te(B, [d.value && s.isPortalled.value && te(je, { id: u, ref: s.beforePanelSentinel, features: Ee.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: g }), (L = o.default) == null ? void 0 : L.call(o, ...O), d.value && s.isPortalled.value && te(je, { id: p, ref: s.afterPanelSentinel, features: Ee.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: x })])];
    } }, features: Ce.RenderStrategy | Ce.Static, visible: d.value, name: "PopoverPanel" });
  };
} });
Q({ name: "PopoverGroup", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: o, expose: l }) {
  let n = C(null), s = Sl([]), r = T(() => be(n));
  l({ el: n, $el: n });
  function u(h) {
    let b = s.value.indexOf(h);
    b !== -1 && s.value.splice(b, 1);
  }
  function p(h) {
    return s.value.push(h), () => {
      u(h);
    };
  }
  function f() {
    var h;
    let b = r.value;
    if (!b)
      return !1;
    let m = b.activeElement;
    return (h = A(n)) != null && h.contains(m) ? !0 : s.value.some((g) => {
      var x, v;
      return ((x = b.getElementById(g.buttonId.value)) == null ? void 0 : x.contains(m)) || ((v = b.getElementById(g.panelId.value)) == null ? void 0 : v.contains(m));
    });
  }
  function d(h) {
    for (let b of s.value)
      b.buttonId.value !== h && b.close();
  }
  return ce(en, { registerPopover: p, unregisterPopover: u, isFocusWithinPopoverGroup: f, closeOthers: d }), () => ee({ ourProps: { ref: n }, theirProps: e, slot: {}, attrs: t, slots: o, name: "PopoverGroup" });
} });
let ln = Symbol("LabelContext");
function nn() {
  let e = pe(ln, null);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, nn), t;
  }
  return e;
}
function Eo({ slot: e = {}, name: t = "Label", props: o = {} } = {}) {
  let l = C([]);
  function n(s) {
    return l.value.push(s), () => {
      let r = l.value.indexOf(s);
      r !== -1 && l.value.splice(r, 1);
    };
  }
  return ce(ln, { register: n, slot: e, name: t, props: o }), T(() => l.value.length > 0 ? l.value.join(" ") : void 0);
}
let sn = Q({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-label-${ae()}` } }, setup(e, { slots: t, attrs: o }) {
  let l = nn();
  return U(() => se(l.register(e.id))), () => {
    let { name: n = "Label", slot: s = {}, props: r = {} } = l, { id: u, passive: p, ...f } = e, d = { ...Object.entries(r).reduce((h, [b, m]) => Object.assign(h, { [b]: w(m) }), {}), id: u };
    return p && (delete d.onClick, delete d.htmlFor, delete f.onClick), ee({ ourProps: d, theirProps: f, slot: s, attrs: o, slots: t, name: n });
  };
} });
function xa(e, t) {
  return e === t;
}
let an = Symbol("RadioGroupContext");
function rn(e) {
  let t = pe(an, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, rn), o;
  }
  return t;
}
let wa = Q({ name: "RadioGroup", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "div" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => xa }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-radiogroup-${ae()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: o, slots: l, expose: n }) {
  let s = C(null), r = C([]), u = Eo({ name: "RadioGroupLabel" }), p = Mt({ name: "RadioGroupDescription" });
  n({ el: s, $el: s });
  let [f, d] = Il(T(() => e.modelValue), (g) => t("update:modelValue", g), T(() => e.defaultValue)), h = { options: r, value: f, disabled: T(() => e.disabled), firstOption: T(() => r.value.find((g) => !g.propsRef.disabled)), containsCheckedOption: T(() => r.value.some((g) => h.compare(ze(g.propsRef.value), ze(e.modelValue)))), compare(g, x) {
    if (typeof e.by == "string") {
      let v = e.by;
      return (g == null ? void 0 : g[v]) === (x == null ? void 0 : x[v]);
    }
    return e.by(g, x);
  }, change(g) {
    var x;
    if (e.disabled || h.compare(ze(f.value), ze(g)))
      return !1;
    let v = (x = r.value.find((k) => h.compare(ze(k.propsRef.value), ze(g)))) == null ? void 0 : x.propsRef;
    return v != null && v.disabled ? !1 : (d(g), !0);
  }, registerOption(g) {
    r.value.push(g), r.value = Al(r.value, (x) => x.element);
  }, unregisterOption(g) {
    let x = r.value.findIndex((v) => v.id === g);
    x !== -1 && r.value.splice(x, 1);
  } };
  ce(an, h), Ws({ container: T(() => A(s)), accept(g) {
    return g.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : g.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(g) {
    g.setAttribute("role", "none");
  } });
  function b(g) {
    if (!s.value || !s.value.contains(g.target))
      return;
    let x = r.value.filter((v) => v.propsRef.disabled === !1).map((v) => v.element);
    switch (g.key) {
      case le.Enter:
        Nl(g.currentTarget);
        break;
      case le.ArrowLeft:
      case le.ArrowUp:
        if (g.preventDefault(), g.stopPropagation(), me(x, ne.Previous | ne.WrapAround) === Ze.Success) {
          let v = r.value.find((k) => {
            var V;
            return k.element === ((V = be(s)) == null ? void 0 : V.activeElement);
          });
          v && h.change(v.propsRef.value);
        }
        break;
      case le.ArrowRight:
      case le.ArrowDown:
        if (g.preventDefault(), g.stopPropagation(), me(x, ne.Next | ne.WrapAround) === Ze.Success) {
          let v = r.value.find((k) => {
            var V;
            return k.element === ((V = be(k.element)) == null ? void 0 : V.activeElement);
          });
          v && h.change(v.propsRef.value);
        }
        break;
      case le.Space:
        {
          g.preventDefault(), g.stopPropagation();
          let v = r.value.find((k) => {
            var V;
            return k.element === ((V = be(k.element)) == null ? void 0 : V.activeElement);
          });
          v && h.change(v.propsRef.value);
        }
        break;
    }
  }
  let m = T(() => {
    var g;
    return (g = A(s)) == null ? void 0 : g.closest("form");
  });
  return U(() => {
    X([m], () => {
      if (!m.value || e.defaultValue === void 0)
        return;
      function g() {
        h.change(e.defaultValue);
      }
      return m.value.addEventListener("reset", g), () => {
        var x;
        (x = m.value) == null || x.removeEventListener("reset", g);
      };
    }, { immediate: !0 });
  }), () => {
    let { disabled: g, name: x, id: v, ...k } = e, V = { ref: s, id: v, role: "radiogroup", "aria-labelledby": u.value, "aria-describedby": p.value, onKeydown: b };
    return te(B, [...x != null && f.value != null ? Bl({ [x]: f.value }).map(([P, _]) => te(je, Ll({ features: Ee.Hidden, key: P, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: P, value: _ }))) : [], ee({ ourProps: V, theirProps: { ...o, ...zt(k, ["modelValue", "defaultValue"]) }, slot: {}, attrs: o, slots: l, name: "RadioGroup" })]);
  };
} });
var $a = ((e) => (e[e.Empty = 1] = "Empty", e[e.Active = 2] = "Active", e))($a || {});
let Va = Q({ name: "RadioGroupOption", props: { as: { type: [Object, String], default: "div" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-radiogroup-option-${ae()}` } }, setup(e, { attrs: t, slots: o, expose: l }) {
  let n = rn("RadioGroupOption"), s = Eo({ name: "RadioGroupLabel" }), r = Mt({ name: "RadioGroupDescription" }), u = C(null), p = T(() => ({ value: e.value, disabled: e.disabled })), f = C(1);
  l({ el: u, $el: u }), U(() => n.registerOption({ id: e.id, element: u, propsRef: p })), se(() => n.unregisterOption(e.id));
  let d = T(() => {
    var k;
    return ((k = n.firstOption.value) == null ? void 0 : k.id) === e.id;
  }), h = T(() => n.disabled.value || e.disabled), b = T(() => n.compare(ze(n.value.value), ze(e.value))), m = T(() => h.value ? -1 : b.value || !n.containsCheckedOption.value && d.value ? 0 : -1);
  function g() {
    var k;
    n.change(e.value) && (f.value |= 2, (k = u.value) == null || k.focus());
  }
  function x() {
    f.value |= 2;
  }
  function v() {
    f.value &= -3;
  }
  return () => {
    let { id: k, value: V, disabled: P, ..._ } = e, O = { checked: b.value, disabled: h.value, active: Boolean(f.value & 2) }, L = { id: k, ref: u, role: "radio", "aria-checked": b.value ? "true" : "false", "aria-labelledby": s.value, "aria-describedby": r.value, "aria-disabled": h.value ? !0 : void 0, tabIndex: m.value, onClick: h.value ? void 0 : g, onFocus: h.value ? void 0 : x, onBlur: h.value ? void 0 : v };
    return ee({ ourProps: L, theirProps: _, slot: O, attrs: t, slots: o, name: "RadioGroupOption" });
  };
} }), pl = sn, ka = ra, un = Symbol("GroupContext"), _a = Q({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: o }) {
  let l = C(null), n = Eo({ name: "SwitchLabel", props: { htmlFor: T(() => {
    var r;
    return (r = l.value) == null ? void 0 : r.id;
  }), onClick(r) {
    l.value && (r.currentTarget.tagName === "LABEL" && r.preventDefault(), l.value.click(), l.value.focus({ preventScroll: !0 }));
  } } }), s = Mt({ name: "SwitchDescription" });
  return ce(un, { switchRef: l, labelledby: n, describedby: s }), () => ee({ theirProps: e, ourProps: {}, slot: {}, slots: t, attrs: o, name: "SwitchGroup" });
} }), Ca = Q({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: !0 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-switch-${ae()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: o, slots: l, expose: n }) {
  let s = pe(un, null), [r, u] = Il(T(() => e.modelValue), (v) => t("update:modelValue", v), T(() => e.defaultChecked));
  function p() {
    u(!r.value);
  }
  let f = C(null), d = s === null ? f : s.switchRef, h = Vo(T(() => ({ as: e.as, type: o.type })), d);
  n({ el: d, $el: d });
  function b(v) {
    v.preventDefault(), p();
  }
  function m(v) {
    v.key === le.Space ? (v.preventDefault(), p()) : v.key === le.Enter && Nl(v.currentTarget);
  }
  function g(v) {
    v.preventDefault();
  }
  let x = T(() => {
    var v, k;
    return (k = (v = A(d)) == null ? void 0 : v.closest) == null ? void 0 : k.call(v, "form");
  });
  return U(() => {
    X([x], () => {
      if (!x.value || e.defaultChecked === void 0)
        return;
      function v() {
        u(e.defaultChecked);
      }
      return x.value.addEventListener("reset", v), () => {
        var k;
        (k = x.value) == null || k.removeEventListener("reset", v);
      };
    }, { immediate: !0 });
  }), () => {
    let { id: v, name: k, value: V, ...P } = e, _ = { checked: r.value }, O = { id: v, ref: d, role: "switch", type: h.value, tabIndex: 0, "aria-checked": r.value, "aria-labelledby": s == null ? void 0 : s.labelledby.value, "aria-describedby": s == null ? void 0 : s.describedby.value, onClick: b, onKeyup: m, onKeypress: g };
    return te(B, [k != null && r.value != null ? te(je, Ll({ features: Ee.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: r.value, name: k, value: V })) : null, ee({ ourProps: O, theirProps: { ...o, ...zt(P, ["modelValue", "defaultChecked"]) }, slot: _, attrs: o, slots: l, name: "Switch" })]);
  };
} }), Sa = sn;
function Oa(e) {
  let t = { called: !1 };
  return (...o) => {
    if (!t.called)
      return t.called = !0, e(...o);
  };
}
function to(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function _t(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var uo = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(uo || {});
function Pa(e, t) {
  let o = jt();
  if (!e)
    return o.dispose;
  let { transitionDuration: l, transitionDelay: n } = getComputedStyle(e), [s, r] = [l, n].map((u) => {
    let [p = 0] = u.split(",").filter(Boolean).map((f) => f.includes("ms") ? parseFloat(f) : parseFloat(f) * 1e3).sort((f, d) => d - f);
    return p;
  });
  return s !== 0 ? o.setTimeout(() => t("finished"), s + r) : t("finished"), o.add(() => t("cancelled")), o.dispose;
}
function cl(e, t, o, l, n, s) {
  let r = jt(), u = s !== void 0 ? Oa(s) : () => {
  };
  return _t(e, ...n), to(e, ...t, ...o), r.nextFrame(() => {
    _t(e, ...o), to(e, ...l), r.add(Pa(e, (p) => (_t(e, ...l, ...t), to(e, ...n), u(p))));
  }), r.add(() => _t(e, ...t, ...o, ...l, ...n)), r.add(() => u("cancelled")), r.dispose;
}
function He(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Lo = Symbol("TransitionContext");
var Ea = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Ea || {});
function La() {
  return pe(Lo, null) !== null;
}
function Ta() {
  let e = pe(Lo, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Da() {
  let e = pe(To, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let To = Symbol("NestingContext");
function Ht(e) {
  return "children" in e ? Ht(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function pn(e) {
  let t = C([]), o = C(!1);
  U(() => o.value = !0), se(() => o.value = !1);
  function l(s, r = Be.Hidden) {
    let u = t.value.findIndex(({ id: p }) => p === s);
    u !== -1 && (ue(r, { [Be.Unmount]() {
      t.value.splice(u, 1);
    }, [Be.Hidden]() {
      t.value[u].state = "hidden";
    } }), !Ht(t) && o.value && (e == null || e()));
  }
  function n(s) {
    let r = t.value.find(({ id: u }) => u === s);
    return r ? r.state !== "visible" && (r.state = "visible") : t.value.push({ id: s, state: "visible" }), () => l(s, Be.Unmount);
  }
  return { children: t, register: n, unregister: l };
}
let cn = Ce.RenderStrategy, Ne = Q({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: o, slots: l, expose: n }) {
  let s = C(0);
  function r() {
    s.value |= oe.Opening, t("beforeEnter");
  }
  function u() {
    s.value &= ~oe.Opening, t("afterEnter");
  }
  function p() {
    s.value |= oe.Closing, t("beforeLeave");
  }
  function f() {
    s.value &= ~oe.Closing, t("afterLeave");
  }
  if (!La() && Rs())
    return () => te(gt, { ...e, onBeforeEnter: r, onAfterEnter: u, onBeforeLeave: p, onAfterLeave: f }, l);
  let d = C(null), h = C("visible"), b = T(() => e.unmount ? Be.Unmount : Be.Hidden);
  n({ el: d, $el: d });
  let { show: m, appear: g } = Ta(), { register: x, unregister: v } = Da(), k = { value: !0 }, V = ae(), P = { value: !1 }, _ = pn(() => {
    !P.value && h.value !== "hidden" && (h.value = "hidden", v(V), f());
  });
  U(() => {
    let R = x(V);
    se(R);
  }), ie(() => {
    if (b.value === Be.Hidden && V) {
      if (m && h.value !== "visible") {
        h.value = "visible";
        return;
      }
      ue(h.value, { hidden: () => v(V), visible: () => x(V) });
    }
  });
  let O = He(e.enter), L = He(e.enterFrom), N = He(e.enterTo), j = He(e.entered), H = He(e.leave), z = He(e.leaveFrom), G = He(e.leaveTo);
  U(() => {
    ie(() => {
      if (h.value === "visible") {
        let R = A(d);
        if (R instanceof Comment && R.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function Z(R) {
    let F = k.value && !g.value, W = A(d);
    !W || !(W instanceof HTMLElement) || F || (P.value = !0, m.value && r(), m.value || p(), R(m.value ? cl(W, O, L, N, j, (I) => {
      P.value = !1, I === uo.Finished && u();
    }) : cl(W, H, z, G, j, (I) => {
      P.value = !1, I === uo.Finished && (Ht(_) || (h.value = "hidden", v(V), f()));
    })));
  }
  return U(() => {
    X([m], (R, F, W) => {
      Z(W), k.value = !1;
    }, { immediate: !0 });
  }), ce(To, _), $o(T(() => ue(h.value, { visible: oe.Open, hidden: oe.Closed }) | s.value)), () => {
    let { appear: R, show: F, enter: W, enterFrom: I, enterTo: Y, entered: Oe, leave: fe, leaveFrom: nt, leaveTo: wt, ...Te } = e, Ye = { ref: d }, De = { ...Te, ...g && m && ht.isServer ? { class: E([o.class, Te.class, ...O, ...L]) } : {} };
    return ee({ theirProps: De, ourProps: Ye, slot: {}, slots: l, attrs: o, features: cn, visible: h.value === "visible", name: "TransitionChild" });
  };
} }), Aa = Ne, gt = Q({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: o, slots: l }) {
  let n = lt(), s = T(() => e.show === null && n !== null ? (n.value & oe.Open) === oe.Open : e.show);
  ie(() => {
    if (![!0, !1].includes(s.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r = C(s.value ? "visible" : "hidden"), u = pn(() => {
    r.value = "hidden";
  }), p = C(!0), f = { show: s, appear: T(() => e.appear || !p.value) };
  return U(() => {
    ie(() => {
      p.value = !1, s.value ? r.value = "visible" : Ht(u) || (r.value = "hidden");
    });
  }), ce(To, u), ce(Lo, f), () => {
    let d = zt(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), h = { unmount: e.unmount };
    return ee({ ourProps: { ...h, as: "template" }, theirProps: {}, slot: {}, slots: { ...l, default: () => [te(Aa, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...o, ...h, ...d }, l.default)] }, attrs: {}, features: cn, visible: r.value === "visible", name: "Transition" });
  };
} });
const za = {
  key: 0,
  class: "po-text-sm po-font-normal po-text-slate-400 po-select-none po-block po-text-left po-pt-5"
}, Ba = { class: "po-grid po-grid-cols-3" }, Ma = { class: "po-bg-white hover:po-bg-slate-200 po-rounded-xl po-p-2 po-transition-colors po-duration-150 po-ease-in" }, ja = ["href", "target"], Na = { class: "po-flex po-w-14 po-h-14 po-items-center po-justify-center po-duration-100 po-ease-in-out po-overflow-hidden" }, Ia = ["innerHTML"], Ra = { class: "po-text-slate-500 po-font-normal po-text-sm po-text-center" }, dl = {
  __name: "appList",
  props: {
    /**
     * Array of grouped apps. When the group name field is left blank, it will appear as a single list when displayed.
     */
    list: {
      type: Array,
      default: null
    },
    openInNewTab: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (t, o) => (i(!0), c(B, null, q(e.list, (l) => (i(), c("div", null, [
      l.groupName.length > 0 ? (i(), c("span", za, $(l.groupName), 1)) : y("", !0),
      a("ul", Ba, [
        (i(!0), c(B, null, q(l.apps, (n) => (i(), c("li", Ma, [
          a("a", {
            href: n.url,
            target: e.openInNewTab ? "_blank" : "_self",
            class: "po-flex po-flex-col po-group po-justify-center po-items-center"
          }, [
            a("span", Na, [
              a("span", {
                class: "po-w-9",
                innerHTML: n.icon
              }, null, 8, Ia)
            ]),
            a("span", Ra, $(n.name), 1)
          ], 8, ja)
        ]))), 256))
      ])
    ]))), 256));
  }
}, Fa = {
  name: "PoAppTray"
}, Ha = /* @__PURE__ */ Object.assign(Fa, {
  props: {
    /**
     * Array of grouped apps. When the group name field is left blank, it will appear as a single list when displayed.
     */
    appList: {
      type: Array,
      default: null
    },
    /**
     * if true, it shows just the apps list, no popover menu
     */
    justApps: {
      type: Boolean,
      default: !1
    },
    openInNewTab: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = e, o = ["", "Internal"], l = T(() => {
      let n = [];
      return o.forEach((s) => {
        let r = t.appList.filter((u) => u.group == s);
        r.length > 0 && n.push({
          groupName: s,
          apps: r
        });
      }), n;
    });
    return (n, s) => e.justApps ? (i(), M(dl, {
      key: 1,
      list: w(l),
      "open-in-new-tab": e.openInNewTab
    }, null, 8, ["list", "open-in-new-tab"])) : (i(), M(w(Ft), { key: 0 }, {
      default: D(({ open: r }) => [
        S(w(Oo), {
          class: E([r ? "" : "po-text-opacity-90", "po-block po-w-6 po-text-slate-100 genie-effect po-z-50 po-outline-none"])
        }, {
          default: D(() => [
            S(w(hs))
          ]),
          _: 2
        }, 1032, ["class"]),
        S(Me, {
          "enter-active-class": "po-transition po-duration-200 po-ease-out",
          "enter-from-class": "po-translate-y-1 po-opacity-0",
          "enter-to-class": "po-translate-y-0 po-opacity-100",
          "leave-active-class": "po-transition po-duration-150 po-ease-in",
          "leave-from-class": "po-translate-y-0 po-opacity-100",
          "leave-to-class": "po-translate-y-1 po-opacity-0"
        }, {
          default: D(() => [
            S(w(Po), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
              default: D(() => [
                S(dl, {
                  list: w(l),
                  "open-in-new-tab": e.openInNewTab
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
}), qa = {
  key: 0,
  class: "po-absolute po-right-0 po-w-3 po-h-3 po-bg-mpao-orange po-rounded-full po-border-2 po-border-mpao-blue"
}, Wa = {
  key: 0,
  class: "po-space-y-2"
}, Ua = ["onClick"], Ga = { class: "po-flex po-items-center po-justify-between" }, Za = { class: "po-text-sm po-text-left po-font-semibold po-text-slate-700 po-grow po-flex po-space-x-2 po-items-center" }, Ka = { class: "po-grow" }, Ya = {
  key: 0,
  class: "po-w-[6px] po-h-[6px] po-rounded-full po-shrink-0 po-bg-mpao-orange po-animate-pulse"
}, Xa = { class: "po-text-xs po-font-normal po-text-slate-400 po-shrink-0" }, Qa = { class: "po-block po-text-sm po-text-slate-500 po-pb-3 po-text-left" }, Ja = {
  key: 1,
  class: "po-text-sm po-text-slate-500 po-py-10 po-text-center po-block"
}, er = {
  name: "PoNotificationHub"
}, tr = /* @__PURE__ */ Object.assign(er, {
  props: {
    /**
     * List of notifications to display
     */
    notifications: {
      type: Array,
      default: null
    },
    /**
     * True or False if there is/are a new notification/s
     */
    hasNewNotifications: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, l) => (i(), M(w(Ft), null, {
      default: D(({ open: n }) => [
        S(w(Oo), {
          class: E([n ? "" : "text-opacity-90", "po-block po-w-6 po-text-slate-100 genie-effect po-relative po-z-50 po-outline-none"])
        }, {
          default: D(() => [
            e.hasNewNotifications ? (i(), c("span", qa)) : y("", !0),
            S(w(ns), { class: "po-stroke-current" })
          ]),
          _: 2
        }, 1032, ["class"]),
        S(Me, {
          "enter-active-class": "po-transition po-duration-200 po-ease-out",
          "enter-from-class": "po-translate-y-1 po-opacity-0",
          "enter-to-class": "po-translate-y-0 po-opacity-100",
          "leave-active-class": "po-transition po-duration-150 po-ease-in",
          "leave-from-class": "po-translate-y-0 po-opacity-100",
          "leave-to-class": "po-translate-y-1 po-opacity-0"
        }, {
          default: D(() => [
            S(w(Po), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
              default: D(() => [
                e.notifications !== null && e.notifications.length > 0 ? (i(), c("ul", Wa, [
                  (i(!0), c(B, null, q(e.notifications, (s) => (i(), c("li", {
                    role: "button",
                    class: "po-space-y-2 po-p-2 po-rounded-lg po-bg-white hover:po-bg-slate-100 po-border po-border-slate-100",
                    onClick: re((r) => o.$emit("button-click", s.name), ["prevent"])
                  }, [
                    a("span", Ga, [
                      a("p", Za, [
                        a("span", Ka, $(s.name), 1),
                        s.seen ? y("", !0) : (i(), c("span", Ya))
                      ]),
                      a("span", Xa, $(s.time), 1)
                    ]),
                    a("span", Qa, $(s.text), 1)
                  ], 8, Ua))), 256))
                ])) : (i(), c("span", Ja, " No notifications to show at the moment. We'll keep you informed."))
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
}), or = {
  key: 0,
  class: "po-hidden lg:po-block po-text-sky-50 po-text-sm po-shrink-0 po-pr-3 po-truncate po-max-w-[140px] po-overflow-hidden"
}, lr = {
  key: 1,
  class: "po-px-3 po-bg-gradient-to-br po-from-slate-50 po-to-blue-100 po-py-1 po-rounded-l-md po-w-[100px] po-flex po-items-center po-justify-center po-text-center"
}, nr = ["src"], sr = ["src", "alt"], ar = {
  key: 1,
  class: "po-text-xs po-text-white po-font-semibold"
}, rr = { class: "po-pb-5" }, ir = ["src"], ur = {
  key: 2,
  class: "po-block po-text-sm po-text-slate-400 po-italic"
}, pr = { key: 0 }, cr = { key: 1 }, dr = /* @__PURE__ */ a("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), fr = { class: "po-space-y-2 po-py-2 po-max-h-[250px] po-overflow-y-auto" }, vr = ["onClick"], hr = { class: "po-w-5" }, mr = { class: "" }, gr = { class: "po-block po-text-sm po-font-normal" }, br = {
  key: 0,
  class: "po-text-left po-block po-text-xs po-text-slate-400"
}, yr = /* @__PURE__ */ a("div", { class: "po-h-[2px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), xr = { class: "md:po-grid po-grid-cols-2 po-space-x-1 po-pt-2" }, wr = { class: "po-w-5" }, $r = /* @__PURE__ */ a("span", { class: "po-text-sm po-font-normal" }, "Profile", -1), Vr = { class: "po-w-5" }, kr = /* @__PURE__ */ a("span", { class: "po-text-sm po-font-normal" }, "Logout", -1), _r = /* @__PURE__ */ a("div", { class: "po-text-xs po-space-x-3 po-text-center po-pt-3" }, [
  /* @__PURE__ */ a("a", {
    href: "",
    class: "po-text-slate-500 hover:po-text-mpao-lightblue"
  }, "Privacy Policy"),
  /* @__PURE__ */ a("a", {
    href: "",
    class: "po-text-slate-500 hover:po-text-mpao-lightblue"
  }, "Terms of Service")
], -1), Cr = {
  name: "PoProfileSwitcher"
}, Sr = /* @__PURE__ */ Object.assign(Cr, {
  props: {
    userObject: {
      type: [Object, String],
      default: null
    },
    avatar: {
      type: String,
      default: ""
    },
    logo: {
      type: String,
      default: ""
    }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    const o = e;
    function l(h) {
      t("button-click", h);
    }
    const n = C({
      name: "",
      initials: "",
      image: ""
    });
    function s(h) {
      return h ? h.match(/\b[A-Z]/g).join("").substr(0, 2) : "";
    }
    const r = T(() => {
      var x, v, k, V, P, _, O, L, N;
      const h = [], b = (x = o.userObject) == null ? void 0 : x.transacting_as_organisation, m = (b == null ? void 0 : b.name) || ((v = o.userObject) == null ? void 0 : v.name), g = (b == null ? void 0 : b.logo) || ((k = o.userObject) == null ? void 0 : k.avatar);
      return n.value = {
        name: m,
        initials: s(m),
        image: g
      }, h.push({
        id: (V = o.userObject) == null ? void 0 : V.id,
        entity_id: (P = o.userObject) == null ? void 0 : P.entity_id,
        name: (_ = o.userObject) == null ? void 0 : _.name,
        identifier: null,
        organisation_uuid: null
      }), ((L = (O = o.userObject) == null ? void 0 : O.organisations) == null ? void 0 : L.length) > 0 && h.push(...o.userObject.organisations), h.forEach((j) => {
        j.current = b && Object.keys(b).length > 0 && j.entity_id === b.entity_id;
      }), ((N = o.userObject) == null ? void 0 : N.transacting_as_organisation) === null && (h[0].current = !0), h;
    }), u = C(null), p = C(null), { avatar: f, logo: d } = xe(o);
    return X(f, () => {
      u.value = f.value;
    }), X(d, () => {
      p.value = d.value;
    }), Fn(() => {
      r.value;
    }), U(() => {
      r.value;
    }), Hn(() => {
      r.value;
    }), yo(() => {
      r.value;
    }), (h, b) => (i(), M(w(Ft), { key: w(r) }, {
      default: D(({ open: m }) => [
        a("div", null, [
          S(w(Oo), { class: "po-flex po-items-center po-outline-none" }, {
            default: D(() => [
              p.value ? y("", !0) : (i(), c("span", or, $(n.value.name), 1)),
              p.value ? (i(), c("span", lr, [
                a("img", {
                  class: "po-h-8",
                  src: p.value,
                  alt: ""
                }, null, 8, nr)
              ])) : y("", !0),
              a("div", {
                class: E([
                  {
                    "po-bg-gradient-to-br po-from-slate-50 po-to-blue-100 po-p-1 po-rounded-r-md": p.value
                  }
                ])
              }, [
                a("div", {
                  class: E([[
                    { "text-opacity-90": m },
                    {
                      "po-w-10 po-h-10": !p.value
                    },
                    { "po-w-8 po-h-8": p.value }
                  ], "po-shrink-0 po-select-none po-rounded-full po-bg-[#2e5266] po-flex po-items-center po-justify-center genie-effect po-z-50"])
                }, [
                  u.value ? (i(), c("img", {
                    key: 0,
                    class: "po-rounded-full po-border po-border-white",
                    src: u.value,
                    alt: n.value.name
                  }, null, 8, sr)) : (i(), c("span", ar, $(n.value.initials), 1))
                ], 2)
              ], 2)
            ]),
            _: 2
          }, 1024),
          S(Me, {
            "enter-active-class": "po-transition po-duration-200 po-ease-out",
            "enter-from-class": "po-translate-y-1 po-opacity-0",
            "enter-to-class": "po-translate-y-0 po-opacity-100",
            "leave-active-class": "po-transition po-duration-150 po-ease-in",
            "leave-from-class": "po-translate-y-0 po-opacity-100",
            "leave-to-class": "po-translate-y-1 po-opacity-0"
          }, {
            default: D(() => [
              S(w(Po), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
                default: D(() => {
                  var g, x, v, k;
                  return [
                    a("div", rr, [
                      u.value ? (i(), c("img", {
                        key: 0,
                        class: "po-w-20 po-h-20 po-mx-auto po-rounded-full po-overflow-hidden",
                        src: u.value,
                        alt: ""
                      }, null, 8, ir)) : y("", !0),
                      (g = e.userObject) != null && g.name ? (i(), c("span", {
                        key: 1,
                        class: E(["po-text-base po-text-slate-600 po-font-medium po-block", [{ "po-mt-4": u.value }]])
                      }, $((x = e.userObject) == null ? void 0 : x.name), 3)) : y("", !0),
                      (v = e.userObject) != null && v.name ? (i(), c("span", ur, [
                        n.value.name === ((k = e.userObject) == null ? void 0 : k.name) ? (i(), c("span", pr, "Self")) : (i(), c("span", cr, "User at " + $(n.value.name), 1))
                      ])) : y("", !0)
                    ]),
                    dr,
                    a("div", fr, [
                      (i(!0), c(B, null, q(w(r), (V, P) => (i(), c("a", {
                        href: "#",
                        onClick: re((_) => l(V), ["prevent"]),
                        class: E(["po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-shadow-sm po-transition-all po-duration-150 po-ease-out hover:po-bg-blue-50", [
                          {
                            " po-bg-white": !V.current
                          },
                          {
                            " po-bg-blue-50 po-shadow-sm": V.current
                          }
                        ]]),
                        role: "button",
                        key: P
                      }, [
                        a("span", hr, [
                          V.isPersonal ? (i(), M(w(ll), {
                            key: 0,
                            class: E([
                              "po-stroke-current",
                              { "po-stroke-mpao-lightblue": V.current }
                            ])
                          }, null, 8, ["class"])) : y("", !0),
                          V.isPersonal ? y("", !0) : (i(), M(w(as), {
                            key: 1,
                            class: E([
                              "po-stroke-current",
                              { "po-stroke-mpao-lightblue": V.current }
                            ])
                          }, null, 8, ["class"]))
                        ]),
                        a("span", mr, [
                          a("span", gr, $(V.name), 1),
                          V.identifier ? (i(), c("span", br, $(V.identifier), 1)) : y("", !0)
                        ])
                      ], 10, vr))), 128))
                    ]),
                    yr,
                    a("div", xr, [
                      a("a", {
                        href: "#",
                        onClick: b[0] || (b[0] = re((V) => h.$emit("button-click", "current-profile"), ["prevent"])),
                        class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-slate-50 hover:po-bg-blue-50 po-transition-all po-duration-150 po-ease-out",
                        role: "button"
                      }, [
                        a("span", wr, [
                          S(w(ll), { class: "po-stroke-current" })
                        ]),
                        $r
                      ]),
                      a("a", {
                        href: "#",
                        onClick: b[1] || (b[1] = re((V) => h.$emit("button-click", "logout"), ["prevent"])),
                        class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-slate-50 hover:po-bg-blue-50 po-transition-all po-duration-150 po-ease-out",
                        role: "button"
                      }, [
                        a("span", Vr, [
                          S(w(ts), { class: "po-stroke-current" })
                        ]),
                        kr
                      ])
                    ]),
                    _r
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
}), qt = {
  __name: "LoadingDots",
  props: {
    /**
     * dot colors
     */
    dotColor: {
      type: String,
      default: "po-bg-mpao-lightblue"
    },
    absolute: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (t, o) => (i(), c("div", {
      class: E(["loading-dots po-inline-block po-w-[40px] po-h-[10px]", [{ "po-relative": !e.absolute }, { "po-absolute": e.absolute }]])
    }, [
      a("div", {
        class: E(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[8px]", e.dotColor])
      }, null, 2),
      a("div", {
        class: E(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[8px]", e.dotColor])
      }, null, 2),
      a("div", {
        class: E(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[17px]", e.dotColor])
      }, null, 2),
      a("div", {
        class: E(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[26px]", e.dotColor])
      }, null, 2)
    ], 2));
  }
}, Or = ["disabled", "aria-disabled"], Pr = ["value", "disabled", "aria-disabled"], Er = {
  name: "PoButton"
}, Do = /* @__PURE__ */ Object.assign(Er, {
  props: {
    /**
     * Type of button. It can be 'button', 'submit', or 'link'.
     */
    type: {
      type: String,
      default: "button"
    },
    /**
     * Action type of button. It can be 'default', 'danger', or 'ghost'.
     */
    actionType: {
      type: String,
      default: "default"
    },
    /**
     * Label of the button
     */
    label: {
      type: String,
      default: "Button"
    },
    /**
     * True or False if disabled
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * Route for links
     */
    to: {
      type: String,
      default: "#"
    },
    /**
     * Override colors. Mark this true and add tailwind bg-color, hover:bg-color and text-color classes to component
     */
    overrideColors: {
      type: Boolean,
      default: !1
    },
    /**
     * Button has three sizes. sm, md, and lg
     */
    size: {
      type: String,
      default: "md"
    },
    /**
     * Button is loading
     */
    isLoading: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    const o = e, l = "po-rounded-full po-transition-colors po-border po-duration-100 po-ease-in-out po-cursor-pointer disabled:po-bg-slate-400 disabled:po-border-slate-400 disabled:po-cursor-default disabled:po-hover:bg-slate-400", n = T(() => {
      switch (o.size) {
        case "sm":
          return "po-px-2 po-py-1 po-text-xs";
        case "md":
          return "po-px-4 po-py-2 po-text-sm";
        case "lg":
          return "po-px-5 po-py-3 po-text-normal";
      }
    }), s = T(() => {
      if (o.overrideColors)
        return "";
      switch (o.actionType) {
        case "default":
          return "po-bg-mpao-lightblue hover:po-bg-mpao-blue focus:po-bg-mpao-blue po-text-slate-50 po-border-mpao-lightblue hover:po-border-mpao-blue focus:border-mpao-blue";
        case "danger":
          return "po-bg-mpao-red hover:po-bg-rose-600 focus:po-bg-mpao-red po-text-white po-border-mpao-red hover:po-border-rose-600 focus:po-border-rose-600";
        case "success":
          return "po-bg-mpao-green hover:po-bg-green-500 focus:po-bg-mpao-green po-text-white po-border-mpao-green hover:po-border-green-500 focus:po-border-green-500";
        case "ghost":
          return "po-bg-white hover:po-bg-slate-100 focus:po-bg-slate-100 po-text-slate-600 po-border-slate-300 hover:po-border-slate-400 focus:po-border-slate-400";
      }
    });
    return (r, u) => (i(), c(B, null, [
      e.isLoading ? (i(), c("span", {
        key: 0,
        class: E([[l, w(n)], "po-bg-slate-200 hover:po-bg-slate-200 focus:po-bg-slate-200"])
      }, [
        S(qt, {
          "dot-color": "po-bg-slate-500",
          class: "po-relative -po-bottom-[0.2rem]"
        })
      ], 2)) : y("", !0),
      e.type == "button" && !e.isLoading ? (i(), c("button", ke({
        key: 1,
        onClick: u[0] || (u[0] = re((p) => r.$emit("button-click", e.to), ["prevent"])),
        class: [l, w(n), w(s)],
        disabled: e.disabled,
        "aria-disabled": e.disabled
      }, r.$attrs), [
        K(r.$slots, "label", {}, () => [
          J($(e.label), 1)
        ])
      ], 16, Or)) : y("", !0),
      e.type == "submit" && !e.isLoading ? (i(), c("input", ke({
        key: 2,
        type: "submit",
        class: [l, w(n), w(s)],
        value: e.label,
        disabled: e.disabled,
        "aria-disabled": e.disabled
      }, r.$attrs), null, 16, Pr)) : y("", !0),
      e.type == "link" && !e.isLoading ? (i(), c("a", ke({
        key: 3,
        href: "#",
        onClick: u[1] || (u[1] = re((p) => r.$emit("button-click", e.to), ["prevent"])),
        class: [l, w(n), w(s)]
      }, r.$attrs), [
        K(r.$slots, "label", {}, () => [
          J($(e.label), 1)
        ])
      ], 16)) : y("", !0),
      e.type == "simple" && !e.isLoading ? (i(), c("a", {
        key: 4,
        href: "#",
        onClick: u[2] || (u[2] = re((p) => r.$emit("button-click", e.to), ["prevent"])),
        class: E(["po-text-sm po-transition-colors po-duration-100 po-ease-in-out po-inline-flex po-items-center po-space-x-1", [
          { "po-text-mpao-lightblue hover:po-text-mpao-blue": !e.overrideColors }
        ]])
      }, [
        K(r.$slots, "label", {}, () => [
          J($(e.label), 1)
        ])
      ], 2)) : y("", !0)
    ], 64));
  }
});
function Ao(e, t) {
  return i(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "fill-rule": "evenodd",
      d: "M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z",
      "clip-rule": "evenodd"
    })
  ]);
}
function dn(e, t) {
  return i(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "fill-rule": "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h4.59l-2.1 1.95a.75.75 0 001.02 1.1l3.5-3.25a.75.75 0 000-1.1l-3.5-3.25a.75.75 0 10-1.02 1.1l2.1 1.95H6.75z",
      "clip-rule": "evenodd"
    })
  ]);
}
function zo(e, t) {
  return i(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "fill-rule": "evenodd",
      d: "M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Bo(e, t) {
  return i(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "fill-rule": "evenodd",
      d: "M2.24 6.8a.75.75 0 001.06-.04l1.95-2.1v8.59a.75.75 0 001.5 0V4.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L2.2 5.74a.75.75 0 00.04 1.06zm8 6.4a.75.75 0 00-.04 1.06l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V6.75a.75.75 0 00-1.5 0v8.59l-1.95-2.1a.75.75 0 00-1.06-.04z",
      "clip-rule": "evenodd"
    })
  ]);
}
function fl(e, t) {
  return i(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "fill-rule": "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Lr(e, t) {
  return i(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "fill-rule": "evenodd",
      d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Tr(e, t) {
  return i(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "fill-rule": "evenodd",
      d: "M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z",
      "clip-rule": "evenodd"
    })
  ]);
}
function fn(e, t) {
  return i(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "fill-rule": "evenodd",
      d: "M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Wt(e, t) {
  return i(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "fill-rule": "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Dr(e, t) {
  return i(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "fill-rule": "evenodd",
      d: "M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Ar(e, t) {
  return i(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "fill-rule": "evenodd",
      d: "M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z",
      "clip-rule": "evenodd"
    })
  ]);
}
function vn(e, t) {
  return i(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
  ]);
}
var ve = "top", $e = "bottom", Ve = "right", he = "left", Mo = "auto", bt = [ve, $e, Ve, he], Je = "start", ct = "end", zr = "clippingParents", hn = "viewport", it = "popper", Br = "reference", vl = /* @__PURE__ */ bt.reduce(function(e, t) {
  return e.concat([t + "-" + Je, t + "-" + ct]);
}, []), mn = /* @__PURE__ */ [].concat(bt, [Mo]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Je, t + "-" + ct]);
}, []), Mr = "beforeRead", jr = "read", Nr = "afterRead", Ir = "beforeMain", Rr = "main", Fr = "afterMain", Hr = "beforeWrite", qr = "write", Wr = "afterWrite", Ur = [Mr, jr, Nr, Ir, Rr, Fr, Hr, qr, Wr];
function Se(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ye(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Ke(e) {
  var t = ye(e).Element;
  return e instanceof t || e instanceof Element;
}
function we(e) {
  var t = ye(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function jo(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = ye(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Gr(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(o) {
    var l = t.styles[o] || {}, n = t.attributes[o] || {}, s = t.elements[o];
    !we(s) || !Se(s) || (Object.assign(s.style, l), Object.keys(n).forEach(function(r) {
      var u = n[r];
      u === !1 ? s.removeAttribute(r) : s.setAttribute(r, u === !0 ? "" : u);
    }));
  });
}
function Zr(e) {
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
      var n = t.elements[l], s = t.attributes[l] || {}, r = Object.keys(t.styles.hasOwnProperty(l) ? t.styles[l] : o[l]), u = r.reduce(function(p, f) {
        return p[f] = "", p;
      }, {});
      !we(n) || !Se(n) || (Object.assign(n.style, u), Object.keys(s).forEach(function(p) {
        n.removeAttribute(p);
      }));
    });
  };
}
const Kr = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Gr,
  effect: Zr,
  requires: ["computeStyles"]
};
function _e(e) {
  return e.split("-")[0];
}
var Ge = Math.max, Lt = Math.min, et = Math.round;
function po() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function gn() {
  return !/^((?!chrome|android).)*safari/i.test(po());
}
function tt(e, t, o) {
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  var l = e.getBoundingClientRect(), n = 1, s = 1;
  t && we(e) && (n = e.offsetWidth > 0 && et(l.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && et(l.height) / e.offsetHeight || 1);
  var r = Ke(e) ? ye(e) : window, u = r.visualViewport, p = !gn() && o, f = (l.left + (p && u ? u.offsetLeft : 0)) / n, d = (l.top + (p && u ? u.offsetTop : 0)) / s, h = l.width / n, b = l.height / s;
  return {
    width: h,
    height: b,
    top: d,
    right: f + h,
    bottom: d + b,
    left: f,
    x: f,
    y: d
  };
}
function No(e) {
  var t = tt(e), o = e.offsetWidth, l = e.offsetHeight;
  return Math.abs(t.width - o) <= 1 && (o = t.width), Math.abs(t.height - l) <= 1 && (l = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: o,
    height: l
  };
}
function bn(e, t) {
  var o = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (o && jo(o)) {
    var l = t;
    do {
      if (l && e.isSameNode(l))
        return !0;
      l = l.parentNode || l.host;
    } while (l);
  }
  return !1;
}
function Le(e) {
  return ye(e).getComputedStyle(e);
}
function Yr(e) {
  return ["table", "td", "th"].indexOf(Se(e)) >= 0;
}
function Ie(e) {
  return ((Ke(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Ut(e) {
  return Se(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (jo(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Ie(e)
  );
}
function hl(e) {
  return !we(e) || // https://github.com/popperjs/popper-core/issues/837
  Le(e).position === "fixed" ? null : e.offsetParent;
}
function Xr(e) {
  var t = /firefox/i.test(po()), o = /Trident/i.test(po());
  if (o && we(e)) {
    var l = Le(e);
    if (l.position === "fixed")
      return null;
  }
  var n = Ut(e);
  for (jo(n) && (n = n.host); we(n) && ["html", "body"].indexOf(Se(n)) < 0; ) {
    var s = Le(n);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return n;
    n = n.parentNode;
  }
  return null;
}
function yt(e) {
  for (var t = ye(e), o = hl(e); o && Yr(o) && Le(o).position === "static"; )
    o = hl(o);
  return o && (Se(o) === "html" || Se(o) === "body" && Le(o).position === "static") ? t : o || Xr(e) || t;
}
function Io(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ut(e, t, o) {
  return Ge(e, Lt(t, o));
}
function Qr(e, t, o) {
  var l = ut(e, t, o);
  return l > o ? o : l;
}
function yn() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function xn(e) {
  return Object.assign({}, yn(), e);
}
function wn(e, t) {
  return t.reduce(function(o, l) {
    return o[l] = e, o;
  }, {});
}
var Jr = function(t, o) {
  return t = typeof t == "function" ? t(Object.assign({}, o.rects, {
    placement: o.placement
  })) : t, xn(typeof t != "number" ? t : wn(t, bt));
};
function ei(e) {
  var t, o = e.state, l = e.name, n = e.options, s = o.elements.arrow, r = o.modifiersData.popperOffsets, u = _e(o.placement), p = Io(u), f = [he, Ve].indexOf(u) >= 0, d = f ? "height" : "width";
  if (!(!s || !r)) {
    var h = Jr(n.padding, o), b = No(s), m = p === "y" ? ve : he, g = p === "y" ? $e : Ve, x = o.rects.reference[d] + o.rects.reference[p] - r[p] - o.rects.popper[d], v = r[p] - o.rects.reference[p], k = yt(s), V = k ? p === "y" ? k.clientHeight || 0 : k.clientWidth || 0 : 0, P = x / 2 - v / 2, _ = h[m], O = V - b[d] - h[g], L = V / 2 - b[d] / 2 + P, N = ut(_, L, O), j = p;
    o.modifiersData[l] = (t = {}, t[j] = N, t.centerOffset = N - L, t);
  }
}
function ti(e) {
  var t = e.state, o = e.options, l = o.element, n = l === void 0 ? "[data-popper-arrow]" : l;
  n != null && (typeof n == "string" && (n = t.elements.popper.querySelector(n), !n) || bn(t.elements.popper, n) && (t.elements.arrow = n));
}
const oi = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: ei,
  effect: ti,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ot(e) {
  return e.split("-")[1];
}
var li = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function ni(e, t) {
  var o = e.x, l = e.y, n = t.devicePixelRatio || 1;
  return {
    x: et(o * n) / n || 0,
    y: et(l * n) / n || 0
  };
}
function ml(e) {
  var t, o = e.popper, l = e.popperRect, n = e.placement, s = e.variation, r = e.offsets, u = e.position, p = e.gpuAcceleration, f = e.adaptive, d = e.roundOffsets, h = e.isFixed, b = r.x, m = b === void 0 ? 0 : b, g = r.y, x = g === void 0 ? 0 : g, v = typeof d == "function" ? d({
    x: m,
    y: x
  }) : {
    x: m,
    y: x
  };
  m = v.x, x = v.y;
  var k = r.hasOwnProperty("x"), V = r.hasOwnProperty("y"), P = he, _ = ve, O = window;
  if (f) {
    var L = yt(o), N = "clientHeight", j = "clientWidth";
    if (L === ye(o) && (L = Ie(o), Le(L).position !== "static" && u === "absolute" && (N = "scrollHeight", j = "scrollWidth")), L = L, n === ve || (n === he || n === Ve) && s === ct) {
      _ = $e;
      var H = h && L === O && O.visualViewport ? O.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        L[N]
      );
      x -= H - l.height, x *= p ? 1 : -1;
    }
    if (n === he || (n === ve || n === $e) && s === ct) {
      P = Ve;
      var z = h && L === O && O.visualViewport ? O.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        L[j]
      );
      m -= z - l.width, m *= p ? 1 : -1;
    }
  }
  var G = Object.assign({
    position: u
  }, f && li), Z = d === !0 ? ni({
    x: m,
    y: x
  }, ye(o)) : {
    x: m,
    y: x
  };
  if (m = Z.x, x = Z.y, p) {
    var R;
    return Object.assign({}, G, (R = {}, R[_] = V ? "0" : "", R[P] = k ? "0" : "", R.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + x + "px)" : "translate3d(" + m + "px, " + x + "px, 0)", R));
  }
  return Object.assign({}, G, (t = {}, t[_] = V ? x + "px" : "", t[P] = k ? m + "px" : "", t.transform = "", t));
}
function si(e) {
  var t = e.state, o = e.options, l = o.gpuAcceleration, n = l === void 0 ? !0 : l, s = o.adaptive, r = s === void 0 ? !0 : s, u = o.roundOffsets, p = u === void 0 ? !0 : u, f = {
    placement: _e(t.placement),
    variation: ot(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: n,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, ml(Object.assign({}, f, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: r,
    roundOffsets: p
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, ml(Object.assign({}, f, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: p
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const ai = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: si,
  data: {}
};
var Ct = {
  passive: !0
};
function ri(e) {
  var t = e.state, o = e.instance, l = e.options, n = l.scroll, s = n === void 0 ? !0 : n, r = l.resize, u = r === void 0 ? !0 : r, p = ye(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && f.forEach(function(d) {
    d.addEventListener("scroll", o.update, Ct);
  }), u && p.addEventListener("resize", o.update, Ct), function() {
    s && f.forEach(function(d) {
      d.removeEventListener("scroll", o.update, Ct);
    }), u && p.removeEventListener("resize", o.update, Ct);
  };
}
const ii = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: ri,
  data: {}
};
var ui = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function St(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return ui[t];
  });
}
var pi = {
  start: "end",
  end: "start"
};
function gl(e) {
  return e.replace(/start|end/g, function(t) {
    return pi[t];
  });
}
function Ro(e) {
  var t = ye(e), o = t.pageXOffset, l = t.pageYOffset;
  return {
    scrollLeft: o,
    scrollTop: l
  };
}
function Fo(e) {
  return tt(Ie(e)).left + Ro(e).scrollLeft;
}
function ci(e, t) {
  var o = ye(e), l = Ie(e), n = o.visualViewport, s = l.clientWidth, r = l.clientHeight, u = 0, p = 0;
  if (n) {
    s = n.width, r = n.height;
    var f = gn();
    (f || !f && t === "fixed") && (u = n.offsetLeft, p = n.offsetTop);
  }
  return {
    width: s,
    height: r,
    x: u + Fo(e),
    y: p
  };
}
function di(e) {
  var t, o = Ie(e), l = Ro(e), n = (t = e.ownerDocument) == null ? void 0 : t.body, s = Ge(o.scrollWidth, o.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0), r = Ge(o.scrollHeight, o.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0), u = -l.scrollLeft + Fo(e), p = -l.scrollTop;
  return Le(n || o).direction === "rtl" && (u += Ge(o.clientWidth, n ? n.clientWidth : 0) - s), {
    width: s,
    height: r,
    x: u,
    y: p
  };
}
function Ho(e) {
  var t = Le(e), o = t.overflow, l = t.overflowX, n = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + n + l);
}
function $n(e) {
  return ["html", "body", "#document"].indexOf(Se(e)) >= 0 ? e.ownerDocument.body : we(e) && Ho(e) ? e : $n(Ut(e));
}
function pt(e, t) {
  var o;
  t === void 0 && (t = []);
  var l = $n(e), n = l === ((o = e.ownerDocument) == null ? void 0 : o.body), s = ye(l), r = n ? [s].concat(s.visualViewport || [], Ho(l) ? l : []) : l, u = t.concat(r);
  return n ? u : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    u.concat(pt(Ut(r)))
  );
}
function co(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function fi(e, t) {
  var o = tt(e, !1, t === "fixed");
  return o.top = o.top + e.clientTop, o.left = o.left + e.clientLeft, o.bottom = o.top + e.clientHeight, o.right = o.left + e.clientWidth, o.width = e.clientWidth, o.height = e.clientHeight, o.x = o.left, o.y = o.top, o;
}
function bl(e, t, o) {
  return t === hn ? co(ci(e, o)) : Ke(t) ? fi(t, o) : co(di(Ie(e)));
}
function vi(e) {
  var t = pt(Ut(e)), o = ["absolute", "fixed"].indexOf(Le(e).position) >= 0, l = o && we(e) ? yt(e) : e;
  return Ke(l) ? t.filter(function(n) {
    return Ke(n) && bn(n, l) && Se(n) !== "body";
  }) : [];
}
function hi(e, t, o, l) {
  var n = t === "clippingParents" ? vi(e) : [].concat(t), s = [].concat(n, [o]), r = s[0], u = s.reduce(function(p, f) {
    var d = bl(e, f, l);
    return p.top = Ge(d.top, p.top), p.right = Lt(d.right, p.right), p.bottom = Lt(d.bottom, p.bottom), p.left = Ge(d.left, p.left), p;
  }, bl(e, r, l));
  return u.width = u.right - u.left, u.height = u.bottom - u.top, u.x = u.left, u.y = u.top, u;
}
function Vn(e) {
  var t = e.reference, o = e.element, l = e.placement, n = l ? _e(l) : null, s = l ? ot(l) : null, r = t.x + t.width / 2 - o.width / 2, u = t.y + t.height / 2 - o.height / 2, p;
  switch (n) {
    case ve:
      p = {
        x: r,
        y: t.y - o.height
      };
      break;
    case $e:
      p = {
        x: r,
        y: t.y + t.height
      };
      break;
    case Ve:
      p = {
        x: t.x + t.width,
        y: u
      };
      break;
    case he:
      p = {
        x: t.x - o.width,
        y: u
      };
      break;
    default:
      p = {
        x: t.x,
        y: t.y
      };
  }
  var f = n ? Io(n) : null;
  if (f != null) {
    var d = f === "y" ? "height" : "width";
    switch (s) {
      case Je:
        p[f] = p[f] - (t[d] / 2 - o[d] / 2);
        break;
      case ct:
        p[f] = p[f] + (t[d] / 2 - o[d] / 2);
        break;
    }
  }
  return p;
}
function dt(e, t) {
  t === void 0 && (t = {});
  var o = t, l = o.placement, n = l === void 0 ? e.placement : l, s = o.strategy, r = s === void 0 ? e.strategy : s, u = o.boundary, p = u === void 0 ? zr : u, f = o.rootBoundary, d = f === void 0 ? hn : f, h = o.elementContext, b = h === void 0 ? it : h, m = o.altBoundary, g = m === void 0 ? !1 : m, x = o.padding, v = x === void 0 ? 0 : x, k = xn(typeof v != "number" ? v : wn(v, bt)), V = b === it ? Br : it, P = e.rects.popper, _ = e.elements[g ? V : b], O = hi(Ke(_) ? _ : _.contextElement || Ie(e.elements.popper), p, d, r), L = tt(e.elements.reference), N = Vn({
    reference: L,
    element: P,
    strategy: "absolute",
    placement: n
  }), j = co(Object.assign({}, P, N)), H = b === it ? j : L, z = {
    top: O.top - H.top + k.top,
    bottom: H.bottom - O.bottom + k.bottom,
    left: O.left - H.left + k.left,
    right: H.right - O.right + k.right
  }, G = e.modifiersData.offset;
  if (b === it && G) {
    var Z = G[n];
    Object.keys(z).forEach(function(R) {
      var F = [Ve, $e].indexOf(R) >= 0 ? 1 : -1, W = [ve, $e].indexOf(R) >= 0 ? "y" : "x";
      z[R] += Z[W] * F;
    });
  }
  return z;
}
function mi(e, t) {
  t === void 0 && (t = {});
  var o = t, l = o.placement, n = o.boundary, s = o.rootBoundary, r = o.padding, u = o.flipVariations, p = o.allowedAutoPlacements, f = p === void 0 ? mn : p, d = ot(l), h = d ? u ? vl : vl.filter(function(g) {
    return ot(g) === d;
  }) : bt, b = h.filter(function(g) {
    return f.indexOf(g) >= 0;
  });
  b.length === 0 && (b = h);
  var m = b.reduce(function(g, x) {
    return g[x] = dt(e, {
      placement: x,
      boundary: n,
      rootBoundary: s,
      padding: r
    })[_e(x)], g;
  }, {});
  return Object.keys(m).sort(function(g, x) {
    return m[g] - m[x];
  });
}
function gi(e) {
  if (_e(e) === Mo)
    return [];
  var t = St(e);
  return [gl(e), t, gl(t)];
}
function bi(e) {
  var t = e.state, o = e.options, l = e.name;
  if (!t.modifiersData[l]._skip) {
    for (var n = o.mainAxis, s = n === void 0 ? !0 : n, r = o.altAxis, u = r === void 0 ? !0 : r, p = o.fallbackPlacements, f = o.padding, d = o.boundary, h = o.rootBoundary, b = o.altBoundary, m = o.flipVariations, g = m === void 0 ? !0 : m, x = o.allowedAutoPlacements, v = t.options.placement, k = _e(v), V = k === v, P = p || (V || !g ? [St(v)] : gi(v)), _ = [v].concat(P).reduce(function(De, Ae) {
      return De.concat(_e(Ae) === Mo ? mi(t, {
        placement: Ae,
        boundary: d,
        rootBoundary: h,
        padding: f,
        flipVariations: g,
        allowedAutoPlacements: x
      }) : Ae);
    }, []), O = t.rects.reference, L = t.rects.popper, N = /* @__PURE__ */ new Map(), j = !0, H = _[0], z = 0; z < _.length; z++) {
      var G = _[z], Z = _e(G), R = ot(G) === Je, F = [ve, $e].indexOf(Z) >= 0, W = F ? "width" : "height", I = dt(t, {
        placement: G,
        boundary: d,
        rootBoundary: h,
        altBoundary: b,
        padding: f
      }), Y = F ? R ? Ve : he : R ? $e : ve;
      O[W] > L[W] && (Y = St(Y));
      var Oe = St(Y), fe = [];
      if (s && fe.push(I[Z] <= 0), u && fe.push(I[Y] <= 0, I[Oe] <= 0), fe.every(function(De) {
        return De;
      })) {
        H = G, j = !1;
        break;
      }
      N.set(G, fe);
    }
    if (j)
      for (var nt = g ? 3 : 1, wt = function(Ae) {
        var st = _.find(function($t) {
          var Re = N.get($t);
          if (Re)
            return Re.slice(0, Ae).every(function(Kt) {
              return Kt;
            });
        });
        if (st)
          return H = st, "break";
      }, Te = nt; Te > 0; Te--) {
        var Ye = wt(Te);
        if (Ye === "break")
          break;
      }
    t.placement !== H && (t.modifiersData[l]._skip = !0, t.placement = H, t.reset = !0);
  }
}
const yi = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: bi,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function yl(e, t, o) {
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
function xl(e) {
  return [ve, Ve, $e, he].some(function(t) {
    return e[t] >= 0;
  });
}
function xi(e) {
  var t = e.state, o = e.name, l = t.rects.reference, n = t.rects.popper, s = t.modifiersData.preventOverflow, r = dt(t, {
    elementContext: "reference"
  }), u = dt(t, {
    altBoundary: !0
  }), p = yl(r, l), f = yl(u, n, s), d = xl(p), h = xl(f);
  t.modifiersData[o] = {
    referenceClippingOffsets: p,
    popperEscapeOffsets: f,
    isReferenceHidden: d,
    hasPopperEscaped: h
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": h
  });
}
const wi = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: xi
};
function $i(e, t, o) {
  var l = _e(e), n = [he, ve].indexOf(l) >= 0 ? -1 : 1, s = typeof o == "function" ? o(Object.assign({}, t, {
    placement: e
  })) : o, r = s[0], u = s[1];
  return r = r || 0, u = (u || 0) * n, [he, Ve].indexOf(l) >= 0 ? {
    x: u,
    y: r
  } : {
    x: r,
    y: u
  };
}
function Vi(e) {
  var t = e.state, o = e.options, l = e.name, n = o.offset, s = n === void 0 ? [0, 0] : n, r = mn.reduce(function(d, h) {
    return d[h] = $i(h, t.rects, s), d;
  }, {}), u = r[t.placement], p = u.x, f = u.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += p, t.modifiersData.popperOffsets.y += f), t.modifiersData[l] = r;
}
const ki = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Vi
};
function _i(e) {
  var t = e.state, o = e.name;
  t.modifiersData[o] = Vn({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Ci = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: _i,
  data: {}
};
function Si(e) {
  return e === "x" ? "y" : "x";
}
function Oi(e) {
  var t = e.state, o = e.options, l = e.name, n = o.mainAxis, s = n === void 0 ? !0 : n, r = o.altAxis, u = r === void 0 ? !1 : r, p = o.boundary, f = o.rootBoundary, d = o.altBoundary, h = o.padding, b = o.tether, m = b === void 0 ? !0 : b, g = o.tetherOffset, x = g === void 0 ? 0 : g, v = dt(t, {
    boundary: p,
    rootBoundary: f,
    padding: h,
    altBoundary: d
  }), k = _e(t.placement), V = ot(t.placement), P = !V, _ = Io(k), O = Si(_), L = t.modifiersData.popperOffsets, N = t.rects.reference, j = t.rects.popper, H = typeof x == "function" ? x(Object.assign({}, t.rects, {
    placement: t.placement
  })) : x, z = typeof H == "number" ? {
    mainAxis: H,
    altAxis: H
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, H), G = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, Z = {
    x: 0,
    y: 0
  };
  if (L) {
    if (s) {
      var R, F = _ === "y" ? ve : he, W = _ === "y" ? $e : Ve, I = _ === "y" ? "height" : "width", Y = L[_], Oe = Y + v[F], fe = Y - v[W], nt = m ? -j[I] / 2 : 0, wt = V === Je ? N[I] : j[I], Te = V === Je ? -j[I] : -N[I], Ye = t.elements.arrow, De = m && Ye ? No(Ye) : {
        width: 0,
        height: 0
      }, Ae = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : yn(), st = Ae[F], $t = Ae[W], Re = ut(0, N[I], De[I]), Kt = P ? N[I] / 2 - nt - Re - st - z.mainAxis : wt - Re - st - z.mainAxis, Tn = P ? -N[I] / 2 + nt + Re + $t + z.mainAxis : Te + Re + $t + z.mainAxis, Yt = t.elements.arrow && yt(t.elements.arrow), Dn = Yt ? _ === "y" ? Yt.clientTop || 0 : Yt.clientLeft || 0 : 0, Go = (R = G == null ? void 0 : G[_]) != null ? R : 0, An = Y + Kt - Go - Dn, zn = Y + Tn - Go, Zo = ut(m ? Lt(Oe, An) : Oe, Y, m ? Ge(fe, zn) : fe);
      L[_] = Zo, Z[_] = Zo - Y;
    }
    if (u) {
      var Ko, Bn = _ === "x" ? ve : he, Mn = _ === "x" ? $e : Ve, Fe = L[O], Vt = O === "y" ? "height" : "width", Yo = Fe + v[Bn], Xo = Fe - v[Mn], Xt = [ve, he].indexOf(k) !== -1, Qo = (Ko = G == null ? void 0 : G[O]) != null ? Ko : 0, Jo = Xt ? Yo : Fe - N[Vt] - j[Vt] - Qo + z.altAxis, el = Xt ? Fe + N[Vt] + j[Vt] - Qo - z.altAxis : Xo, tl = m && Xt ? Qr(Jo, Fe, el) : ut(m ? Jo : Yo, Fe, m ? el : Xo);
      L[O] = tl, Z[O] = tl - Fe;
    }
    t.modifiersData[l] = Z;
  }
}
const Pi = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Oi,
  requiresIfExists: ["offset"]
};
function Ei(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Li(e) {
  return e === ye(e) || !we(e) ? Ro(e) : Ei(e);
}
function Ti(e) {
  var t = e.getBoundingClientRect(), o = et(t.width) / e.offsetWidth || 1, l = et(t.height) / e.offsetHeight || 1;
  return o !== 1 || l !== 1;
}
function Di(e, t, o) {
  o === void 0 && (o = !1);
  var l = we(t), n = we(t) && Ti(t), s = Ie(t), r = tt(e, n, o), u = {
    scrollLeft: 0,
    scrollTop: 0
  }, p = {
    x: 0,
    y: 0
  };
  return (l || !l && !o) && ((Se(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Ho(s)) && (u = Li(t)), we(t) ? (p = tt(t, !0), p.x += t.clientLeft, p.y += t.clientTop) : s && (p.x = Fo(s))), {
    x: r.left + u.scrollLeft - p.x,
    y: r.top + u.scrollTop - p.y,
    width: r.width,
    height: r.height
  };
}
function Ai(e) {
  var t = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), l = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function n(s) {
    o.add(s.name);
    var r = [].concat(s.requires || [], s.requiresIfExists || []);
    r.forEach(function(u) {
      if (!o.has(u)) {
        var p = t.get(u);
        p && n(p);
      }
    }), l.push(s);
  }
  return e.forEach(function(s) {
    o.has(s.name) || n(s);
  }), l;
}
function zi(e) {
  var t = Ai(e);
  return Ur.reduce(function(o, l) {
    return o.concat(t.filter(function(n) {
      return n.phase === l;
    }));
  }, []);
}
function Bi(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(o) {
      Promise.resolve().then(function() {
        t = void 0, o(e());
      });
    })), t;
  };
}
function Mi(e) {
  var t = e.reduce(function(o, l) {
    var n = o[l.name];
    return o[l.name] = n ? Object.assign({}, n, l, {
      options: Object.assign({}, n.options, l.options),
      data: Object.assign({}, n.data, l.data)
    }) : l, o;
  }, {});
  return Object.keys(t).map(function(o) {
    return t[o];
  });
}
var wl = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function $l() {
  for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
    t[o] = arguments[o];
  return !t.some(function(l) {
    return !(l && typeof l.getBoundingClientRect == "function");
  });
}
function ji(e) {
  e === void 0 && (e = {});
  var t = e, o = t.defaultModifiers, l = o === void 0 ? [] : o, n = t.defaultOptions, s = n === void 0 ? wl : n;
  return function(u, p, f) {
    f === void 0 && (f = s);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, wl, s),
      modifiersData: {},
      elements: {
        reference: u,
        popper: p
      },
      attributes: {},
      styles: {}
    }, h = [], b = !1, m = {
      state: d,
      setOptions: function(k) {
        var V = typeof k == "function" ? k(d.options) : k;
        x(), d.options = Object.assign({}, s, d.options, V), d.scrollParents = {
          reference: Ke(u) ? pt(u) : u.contextElement ? pt(u.contextElement) : [],
          popper: pt(p)
        };
        var P = zi(Mi([].concat(l, d.options.modifiers)));
        return d.orderedModifiers = P.filter(function(_) {
          return _.enabled;
        }), g(), m.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!b) {
          var k = d.elements, V = k.reference, P = k.popper;
          if ($l(V, P)) {
            d.rects = {
              reference: Di(V, yt(P), d.options.strategy === "fixed"),
              popper: No(P)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(z) {
              return d.modifiersData[z.name] = Object.assign({}, z.data);
            });
            for (var _ = 0; _ < d.orderedModifiers.length; _++) {
              if (d.reset === !0) {
                d.reset = !1, _ = -1;
                continue;
              }
              var O = d.orderedModifiers[_], L = O.fn, N = O.options, j = N === void 0 ? {} : N, H = O.name;
              typeof L == "function" && (d = L({
                state: d,
                options: j,
                name: H,
                instance: m
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Bi(function() {
        return new Promise(function(v) {
          m.forceUpdate(), v(d);
        });
      }),
      destroy: function() {
        x(), b = !0;
      }
    };
    if (!$l(u, p))
      return m;
    m.setOptions(f).then(function(v) {
      !b && f.onFirstUpdate && f.onFirstUpdate(v);
    });
    function g() {
      d.orderedModifiers.forEach(function(v) {
        var k = v.name, V = v.options, P = V === void 0 ? {} : V, _ = v.effect;
        if (typeof _ == "function") {
          var O = _({
            state: d,
            name: k,
            instance: m,
            options: P
          }), L = function() {
          };
          h.push(O || L);
        }
      });
    }
    function x() {
      h.forEach(function(v) {
        return v();
      }), h = [];
    }
    return m;
  };
}
var Ni = [ii, Ci, ai, Kr, ki, yi, Pi, oi, wi], qo = /* @__PURE__ */ ji({
  defaultModifiers: Ni
});
function Ii() {
  var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
  if (t > 0)
    return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
  var o = e.indexOf("Trident/");
  if (o > 0) {
    var l = e.indexOf("rv:");
    return parseInt(e.substring(l + 3, e.indexOf(".", l)), 10);
  }
  var n = e.indexOf("Edge/");
  return n > 0 ? parseInt(e.substring(n + 5, e.indexOf(".", n)), 10) : -1;
}
let Ot;
function fo() {
  fo.init || (fo.init = !0, Ot = Ii() !== -1);
}
var Gt = {
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
    fo(), bo(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", Ot && this.$el.appendChild(e), e.data = "about:blank", Ot || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!Ot && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const Ri = /* @__PURE__ */ Un("data-v-b329ee4c");
qn("data-v-b329ee4c");
const Fi = {
  class: "resize-observer",
  tabindex: "-1"
};
Wn();
const Hi = /* @__PURE__ */ Ri((e, t, o, l, n, s) => (i(), M("div", Fi)));
Gt.render = Hi;
Gt.__scopeId = "data-v-b329ee4c";
Gt.__file = "src/components/ResizeObserver.vue";
function Pt(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Pt = function(t) {
    return typeof t;
  } : Pt = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pt(e);
}
function qi(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Vl(e, t) {
  for (var o = 0; o < t.length; o++) {
    var l = t[o];
    l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(e, l.key, l);
  }
}
function Wi(e, t, o) {
  return t && Vl(e.prototype, t), o && Vl(e, o), e;
}
function kl(e) {
  return Ui(e) || Gi(e) || Zi(e) || Ki();
}
function Ui(e) {
  if (Array.isArray(e))
    return vo(e);
}
function Gi(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function Zi(e, t) {
  if (e) {
    if (typeof e == "string")
      return vo(e, t);
    var o = Object.prototype.toString.call(e).slice(8, -1);
    if (o === "Object" && e.constructor && (o = e.constructor.name), o === "Map" || o === "Set")
      return Array.from(e);
    if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
      return vo(e, t);
  }
}
function vo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var o = 0, l = new Array(t); o < t; o++)
    l[o] = e[o];
  return l;
}
function Ki() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Yi(e) {
  var t;
  return typeof e == "function" ? t = {
    callback: e
  } : t = e, t;
}
function Xi(e, t) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l, n, s, r = function(p) {
    for (var f = arguments.length, d = new Array(f > 1 ? f - 1 : 0), h = 1; h < f; h++)
      d[h - 1] = arguments[h];
    if (s = d, !(l && p === n)) {
      var b = o.leading;
      typeof b == "function" && (b = b(p, n)), (!l || p !== n) && b && e.apply(void 0, [p].concat(kl(s))), n = p, clearTimeout(l), l = setTimeout(function() {
        e.apply(void 0, [p].concat(kl(s))), l = 0;
      }, t);
    }
  };
  return r._clear = function() {
    clearTimeout(l), l = null;
  }, r;
}
function kn(e, t) {
  if (e === t)
    return !0;
  if (Pt(e) === "object") {
    for (var o in e)
      if (!kn(e[o], t[o]))
        return !1;
    return !0;
  }
  return !1;
}
var Qi = /* @__PURE__ */ function() {
  function e(t, o, l) {
    qi(this, e), this.el = t, this.observer = null, this.frozen = !1, this.createObserver(o, l);
  }
  return Wi(e, [{
    key: "createObserver",
    value: function(o, l) {
      var n = this;
      if (this.observer && this.destroyObserver(), !this.frozen) {
        if (this.options = Yi(o), this.callback = function(u, p) {
          n.options.callback(u, p), u && n.options.once && (n.frozen = !0, n.destroyObserver());
        }, this.callback && this.options.throttle) {
          var s = this.options.throttleOptions || {}, r = s.leading;
          this.callback = Xi(this.callback, this.options.throttle, {
            leading: function(p) {
              return r === "both" || r === "visible" && p || r === "hidden" && !p;
            }
          });
        }
        this.oldResult = void 0, this.observer = new IntersectionObserver(function(u) {
          var p = u[0];
          if (u.length > 1) {
            var f = u.find(function(h) {
              return h.isIntersecting;
            });
            f && (p = f);
          }
          if (n.callback) {
            var d = p.isIntersecting && p.intersectionRatio >= n.threshold;
            if (d === n.oldResult)
              return;
            n.oldResult = d, n.callback(d, p);
          }
        }, this.options.intersection), bo(function() {
          n.observer && n.observer.observe(n.el);
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
function _n(e, t, o) {
  var l = t.value;
  if (l)
    if (typeof IntersectionObserver > "u")
      console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");
    else {
      var n = new Qi(e, l, o);
      e._vue_visibilityState = n;
    }
}
function Ji(e, t, o) {
  var l = t.value, n = t.oldValue;
  if (!kn(l, n)) {
    var s = e._vue_visibilityState;
    if (!l) {
      Cn(e);
      return;
    }
    s ? s.createObserver(l, o) : _n(e, {
      value: l
    }, o);
  }
}
function Cn(e) {
  var t = e._vue_visibilityState;
  t && (t.destroyObserver(), delete e._vue_visibilityState);
}
var eu = {
  beforeMount: _n,
  updated: Ji,
  unmounted: Cn
};
function tu(e) {
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
var ou = {
  itemsLimit: 1e3
}, lu = /(auto|scroll)/;
function Sn(e, t) {
  return e.parentNode === null ? t : Sn(e.parentNode, t.concat([e]));
}
var oo = function(t, o) {
  return getComputedStyle(t, null).getPropertyValue(o);
}, nu = function(t) {
  return oo(t, "overflow") + oo(t, "overflow-y") + oo(t, "overflow-x");
}, su = function(t) {
  return lu.test(nu(t));
};
function _l(e) {
  if (e instanceof HTMLElement || e instanceof SVGElement) {
    for (var t = Sn(e.parentNode, []), o = 0; o < t.length; o += 1)
      if (su(t[o]))
        return t[o];
    return document.scrollingElement || document.documentElement;
  }
}
function ho(e) {
  return ho = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ho(e);
}
var On = {
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
function Pn() {
  return this.items.length && ho(this.items[0]) !== "object";
}
var mo = !1;
if (typeof window < "u") {
  mo = !1;
  try {
    var au = Object.defineProperty({}, "passive", {
      get: function() {
        mo = !0;
      }
    });
    window.addEventListener("test", null, au);
  } catch {
  }
}
let ru = 0;
var Wo = {
  name: "RecycleScroller",
  components: {
    ResizeObserver: Gt
  },
  directives: {
    ObserveVisibility: eu
  },
  props: {
    ...On,
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
        let n = 1e4, s = 0, r;
        for (let u = 0, p = t.length; u < p; u++)
          r = t[u][o] || l, r < n && (n = r), s += r, e[u] = { accumulator: s, size: r };
        return this.$_computedMinItemSize = n, e;
      }
      return [];
    },
    simpleArray: Pn,
    itemIndexByKey() {
      const { keyField: e, items: t } = this, o = {};
      for (let l = 0, n = t.length; l < n; l++)
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
    addView(e, t, o, l, n) {
      const s = Gn({
        id: ru++,
        index: t,
        used: !0,
        key: l,
        type: n
      }), r = Zn({
        item: o,
        position: 0,
        nr: s
      });
      return e.push(r), r;
    },
    unuseView(e, t = !1) {
      const o = this.$_unusedViews, l = e.nr.type;
      let n = o.get(l);
      n || (n = [], o.set(l, n)), n.push(e), t || (e.nr.used = !1, e.position = -9999);
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
      const o = this.itemSize, l = this.gridItems || 1, n = this.itemSecondarySize || o, s = this.$_computedMinItemSize, r = this.typeField, u = this.simpleArray ? null : this.keyField, p = this.items, f = p.length, d = this.sizes, h = this.$_views, b = this.$_unusedViews, m = this.pool, g = this.itemIndexByKey;
      let x, v, k, V, P;
      if (!f)
        x = v = V = P = k = 0;
      else if (this.$_prerender)
        x = V = 0, v = P = Math.min(this.prerender, p.length), k = null;
      else {
        const z = this.getScroll();
        if (t) {
          let R = z.start - this.$_lastUpdateScrollPosition;
          if (R < 0 && (R = -R), o === null && R < s || R < o)
            return {
              continuous: !0
            };
        }
        this.$_lastUpdateScrollPosition = z.start;
        const G = this.buffer;
        z.start -= G, z.end += G;
        let Z = 0;
        if (this.$refs.before && (Z = this.$refs.before.scrollHeight, z.start -= Z), this.$refs.after) {
          const R = this.$refs.after.scrollHeight;
          z.end += R;
        }
        if (o === null) {
          let R, F = 0, W = f - 1, I = ~~(f / 2), Y;
          do
            Y = I, R = d[I].accumulator, R < z.start ? F = I : I < f - 1 && d[I + 1].accumulator > z.start && (W = I), I = ~~((F + W) / 2);
          while (I !== Y);
          for (I < 0 && (I = 0), x = I, k = d[f - 1].accumulator, v = I; v < f && d[v].accumulator < z.end; v++)
            ;
          for (v === -1 ? v = p.length - 1 : (v++, v > f && (v = f)), V = x; V < f && Z + d[V].accumulator < z.start; V++)
            ;
          for (P = V; P < f && Z + d[P].accumulator < z.end; P++)
            ;
        } else {
          x = ~~(z.start / o * l);
          const R = x % l;
          x -= R, v = Math.ceil(z.end / o * l), V = Math.max(0, Math.floor((z.start - Z) / o * l)), P = Math.floor((z.end - Z) / o * l), x < 0 && (x = 0), v > f && (v = f), V < 0 && (V = 0), P > f && (P = f), k = Math.ceil(f / l) * o;
        }
      }
      v - x > ou.itemsLimit && this.itemsLimitError(), this.totalSize = k;
      let _;
      const O = x <= this.$_endIndex && v >= this.$_startIndex;
      if (O)
        for (let z = 0, G = m.length; z < G; z++)
          _ = m[z], _.nr.used && (e && (_.nr.index = g[_.item[u]]), (_.nr.index == null || _.nr.index < x || _.nr.index >= v) && this.unuseView(_));
      const L = O ? null : /* @__PURE__ */ new Map();
      let N, j, H;
      for (let z = x; z < v; z++) {
        N = p[z];
        const G = u ? N[u] : N;
        if (G == null)
          throw new Error(`Key is ${G} on item (keyField is '${u}')`);
        if (_ = h.get(G), !o && !d[z].size) {
          _ && this.unuseView(_);
          continue;
        }
        j = N[r];
        let Z = b.get(j), R = !1;
        if (!_)
          O ? Z && Z.length ? _ = Z.pop() : _ = this.addView(m, z, N, G, j) : (H = L.get(j) || 0, (!Z || H >= Z.length) && (_ = this.addView(m, z, N, G, j), this.unuseView(_, !0), Z = b.get(j)), _ = Z[H], L.set(j, H + 1)), h.delete(_.nr.key), _.nr.used = !0, _.nr.index = z, _.nr.key = G, _.nr.type = j, h.set(G, _), R = !0;
        else if (!_.nr.used && (_.nr.used = !0, R = !0, Z)) {
          const F = Z.indexOf(_);
          F !== -1 && Z.splice(F, 1);
        }
        _.item = N, R && (z === p.length - 1 && this.$emit("scroll-end"), z === 0 && this.$emit("scroll-start")), o === null ? (_.position = d[z - 1].accumulator, _.offset = 0) : (_.position = Math.floor(z / l) * o, _.offset = z % l * n);
      }
      return this.$_startIndex = x, this.$_endIndex = v, this.emitUpdate && this.$emit("update", x, v, V, P), clearTimeout(this.$_sortTimer), this.$_sortTimer = setTimeout(this.sortViews, this.updateInterval + 300), {
        continuous: O
      };
    },
    getListenerTarget() {
      let e = _l(this.$el);
      return window.document && (e === window.document.documentElement || e === window.document.body) && (e = window), e;
    },
    getScroll() {
      const { $el: e, direction: t } = this, o = t === "vertical";
      let l;
      if (this.pageMode) {
        const n = e.getBoundingClientRect(), s = o ? n.height : n.width;
        let r = -(o ? n.top : n.left), u = o ? window.innerHeight : window.innerWidth;
        r < 0 && (u += r, r = 0), r + u > s && (u = s - r), l = {
          start: r,
          end: r + u
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
      this.listenerTarget = this.getListenerTarget(), this.listenerTarget.addEventListener("scroll", this.handleScroll, mo ? {
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
      let o, l, n;
      if (this.pageMode) {
        const s = _l(this.$el), r = s.tagName === "HTML" ? 0 : s[t.scroll], u = s.getBoundingClientRect(), f = this.$el.getBoundingClientRect()[t.start] - u[t.start];
        o = s, l = t.scroll, n = e + r + f;
      } else
        o = this.$el, l = t.scroll, n = e;
      o[l] = n;
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
const iu = {
  key: 0,
  ref: "before",
  class: "vue-recycle-scroller__slot"
}, uu = {
  key: 1,
  ref: "after",
  class: "vue-recycle-scroller__slot"
};
function pu(e, t, o, l, n, s) {
  const r = Ol("ResizeObserver"), u = Kn("observe-visibility");
  return Pe((i(), c(
    "div",
    {
      class: E(["vue-recycle-scroller", {
        ready: n.ready,
        "page-mode": o.pageMode,
        [`direction-${e.direction}`]: !0
      }]),
      onScrollPassive: t[0] || (t[0] = (...p) => s.handleScroll && s.handleScroll(...p))
    },
    [
      e.$slots.before ? (i(), c(
        "div",
        iu,
        [
          K(e.$slots, "before")
        ],
        512
        /* NEED_PATCH */
      )) : y("v-if", !0),
      (i(), M(de(o.listTag), {
        ref: "wrapper",
        style: Dt({ [e.direction === "vertical" ? "minHeight" : "minWidth"]: n.totalSize + "px" }),
        class: E(["vue-recycle-scroller__item-wrapper", o.listClass])
      }, {
        default: D(() => [
          (i(!0), c(
            B,
            null,
            q(n.pool, (p) => (i(), M(de(o.itemTag), ke({
              key: p.nr.id,
              style: n.ready ? {
                transform: `translate${e.direction === "vertical" ? "Y" : "X"}(${p.position}px) translate${e.direction === "vertical" ? "X" : "Y"}(${p.offset}px)`,
                width: o.gridItems ? `${e.direction === "vertical" && o.itemSecondarySize || o.itemSize}px` : void 0,
                height: o.gridItems ? `${e.direction === "horizontal" && o.itemSecondarySize || o.itemSize}px` : void 0
              } : null,
              class: ["vue-recycle-scroller__item-view", [
                o.itemClass,
                {
                  hover: !o.skipHover && n.hoverKey === p.nr.key
                }
              ]]
            }, Yn(o.skipHover ? {} : {
              mouseenter: () => {
                n.hoverKey = p.nr.key;
              },
              mouseleave: () => {
                n.hoverKey = null;
              }
            })), {
              default: D(() => [
                K(e.$slots, "default", {
                  item: p.item,
                  index: p.nr.index,
                  active: p.nr.used
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
      e.$slots.after ? (i(), c(
        "div",
        uu,
        [
          K(e.$slots, "after")
        ],
        512
        /* NEED_PATCH */
      )) : y("v-if", !0),
      S(r, { onNotify: s.handleResize }, null, 8, ["onNotify"])
    ],
    34
    /* CLASS, HYDRATE_EVENTS */
  )), [
    [u, s.handleVisibilityChange]
  ]);
}
Wo.render = pu;
Wo.__file = "src/components/RecycleScroller.vue";
var Uo = {
  name: "DynamicScroller",
  components: {
    RecycleScroller: Wo
  },
  provide() {
    return typeof ResizeObserver < "u" && (this.$_resizeObserver = new ResizeObserver((e) => {
      requestAnimationFrame(() => {
        if (Array.isArray(e)) {
          for (const t of e)
            if (t.target && t.target.$_vs_onResize) {
              let o, l;
              if (t.borderBoxSize) {
                const n = t.borderBoxSize[0];
                o = n.inlineSize, l = n.blockSize;
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
    ...On,
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
    simpleArray: Pn,
    itemsWithSize() {
      const e = [], { items: t, keyField: o, simpleArray: l } = this, n = this.vscrollData.sizes, s = t.length;
      for (let r = 0; r < s; r++) {
        const u = t[r], p = l ? r : u[o];
        let f = n[p];
        typeof f > "u" && !this.$_undefinedMap[p] && (f = 0), e.push({
          item: u,
          id: p,
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
      let l = 0, n = 0;
      const s = Math.min(e.length, t.length);
      for (let u = 0; u < s && !(l >= o); u++)
        l += t[u].size || this.minItemSize, n += e[u].size || this.minItemSize;
      const r = n - l;
      r !== 0 && (this.$el.scrollTop += r);
    }
  },
  beforeCreate() {
    this.$_updates = [], this.$_undefinedSizes = 0, this.$_undefinedMap = {}, this.$_events = tu();
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
function cu(e, t, o, l, n, s) {
  const r = Ol("RecycleScroller");
  return i(), M(r, ke({
    ref: "scroller",
    items: s.itemsWithSize,
    "min-item-size": o.minItemSize,
    direction: e.direction,
    "key-field": "id",
    "list-tag": e.listTag,
    "item-tag": e.itemTag
  }, e.$attrs, {
    onResize: s.onScrollerResize,
    onVisible: s.onScrollerVisible
  }), {
    default: D(({ item: u, index: p, active: f }) => [
      K(e.$slots, "default", Xe(Qe({
        item: u.item,
        index: p,
        active: f,
        itemWithSize: u
      })))
    ]),
    before: D(() => [
      K(e.$slots, "before")
    ]),
    after: D(() => [
      K(e.$slots, "after")
    ]),
    empty: D(() => [
      K(e.$slots, "empty")
    ]),
    _: 3
    /* FORWARDED */
  }, 16, ["items", "min-item-size", "direction", "list-tag", "item-tag", "onResize", "onVisible"]);
}
Uo.render = cu;
Uo.__file = "src/components/DynamicScroller.vue";
var En = {
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
    return te(this.tag, this.$slots.default());
  }
};
En.__file = "src/components/DynamicScrollerItem.vue";
const du = ["for"], fu = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, vu = ["title"], hu = { class: "po-relative po-mt-1" }, mu = {
  role: "button",
  ref: "comboboxButton"
}, gu = ["placeholder", "disabled", "id"], bu = {
  class: /* @__PURE__ */ E(["group-hover:po-text-white po-block po-truncate"])
}, yu = {
  key: 0,
  class: "po-block po-text-xs po-opacity-60"
}, xu = {
  key: 0,
  class: "po-mt-2 po-text-sm po-text-slate-500",
  id: "-description"
}, wu = {
  key: 1,
  class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
  id: "-error"
}, $u = {
  name: "PoSelectField"
}, Vu = /* @__PURE__ */ Object.assign($u, {
  props: {
    /**
     * Model value
     */
    modelValue: {
      type: [String, Number, Object],
      default: null
    },
    /**
     * Label text
     */
    label: {
      type: String,
      default: ""
    },
    /**
     * Input id text
     */
    id: {
      type: String,
      default: ""
    },
    /**
     * A tool tip, helper information
     */
    info: {
      type: String,
      default: null
    },
    /**
     * List of options
     */
    list: {
      type: Array,
      default: null
    },
    /**
     * Input display vertifal (default) or horizontal
     */
    display: {
      type: String,
      default: "vertical"
    },
    /**
     * True or false if required
     */
    required: {
      type: Boolean,
      default: !1
    },
    /**
     * Error message
     */
    errorMessage: {
      type: String,
      default: null
    },
    /**
     * Tip, description, information for the input
     */
    message: {
      type: String,
      default: null
    },
    /**
     * True or false if disabled
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * True if you want it to return an object when clicked
     */
    object: {
      type: Boolean,
      default: !1
    },
    /**
     * Placeholer
     */
    placeholder: {
      type: String,
      default: null
    }
  },
  emits: ["selected", "unSelected", "update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, l = C(""), n = C(""), s = C(), r = C(!1), u = C(!1), p = C(null), f = C(null), d = T(() => {
      const _ = l.value.toLowerCase();
      return _ === "" ? o.list.map((O) => ({
        ...O,
        active: s.value === O.id
      })) : o.list.filter((O) => O.name.toLowerCase().includes(_)).map((O) => ({
        ...O,
        active: s.value === O.id
      }));
    });
    function h(_) {
      if (o.object)
        return _ == null ? void 0 : _.name;
      if (d.value) {
        let O = d.value.find((L) => L.id === _);
        return O == null ? void 0 : O.name;
      } else if (placeholder)
        return placeholder;
    }
    s.value = o.modelValue, yo(() => {
      s.value = o.modelValue;
    }), X(s, () => {
      n.value = h(s.value);
    });
    const { errorMessage: b } = xe(o), m = C(b.value !== null);
    X(b, (_, O) => {
      m.value = b.value !== null && b.value !== "";
    });
    const g = C("");
    At(() => {
      document.removeEventListener("click", x);
    });
    const x = (_) => {
      !f.value.contains(_.target) && !p.value.contains(_.target) && (r.value = !!u.value);
    };
    function v(_) {
      s.value = _, n.value = _.name, l.value = "", t("selected", o.object ? _ : _.id), t("update:modelValue", o.object ? _ : _.id), r.value = !!u.value;
    }
    const k = C(null);
    let V;
    U(() => {
      o.id === "" ? g.value = o.id ? o.id : `${o.label.replace(
        /\s/g,
        ""
      )}-${Date.now()}-selectfield-${Math.floor(Math.random() * 9e3)}` : g.value = o.id, document.addEventListener("click", x), n.value = h(o.modelValue), V = qo(p.value, k.value, {
        placement: "bottom-end",
        strategy: "fixed",
        modifiers: [
          {
            name: "sameWidth",
            enabled: !0,
            fn: ({ state: _ }) => {
              _.styles.popper.width = `${_.rects.reference.width}px`;
            },
            phase: "beforeWrite",
            requires: ["computeStyles"]
          }
        ]
      });
    }), se(() => {
      V && V.destroy();
    });
    function P() {
      u.value = !1, setTimeout(() => {
        r.value = !1;
      }, 100);
    }
    return (_, O) => (i(), c("div", {
      class: E([{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]),
      ref_key: "containerRef",
      ref: f
    }, [
      a("label", {
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700",
        for: g.value
      }, [
        a("span", null, $(e.label), 1),
        e.required ? (i(), c("span", fu, "*")) : y("", !0),
        e.info !== null ? (i(), c("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          S(w(Wt), { class: "po-fill-current" })
        ], 8, vu)) : y("", !0)
      ], 8, du),
      a("div", hu, [
        a("div", mu, [
          Pe(a("input", {
            type: "text",
            ref_key: "selectBox",
            ref: p,
            class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm",
            placeholder: e.placeholder,
            disabled: e.disabled,
            "onUpdate:modelValue": O[0] || (O[0] = (L) => n.value = L),
            onInput: O[1] || (O[1] = (L) => l.value = L.target.value),
            onFocus: O[2] || (O[2] = (L) => {
              u.value = !0, r.value = !0;
            }),
            onBlur: P,
            id: g.value
          }, null, 40, gu), [
            [Tt, n.value]
          ]),
          a("span", {
            class: "po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-rounded-r-md po-px-2 focus:po-outline-none",
            role: "button",
            onClick: O[3] || (O[3] = (L) => r.value = !r.value)
          }, [
            S(w(Tr), {
              class: "po-h-5 po-w-5 po-text-slate-400",
              "aria-hidden": "true"
            })
          ])
        ], 512),
        Pe(a("div", {
          ref_key: "popper",
          ref: k,
          class: "po-absolute po-z-10 po-mt-1 po-w-full po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
        }, [
          S(w(Uo), {
            items: w(d),
            "min-item-size": 32,
            "key-field": "id",
            class: "scroller po-max-h-60 po-h-full po-overflow-y-auto"
          }, {
            default: D(({ item: L, index: N, active: j }) => [
              S(w(En), {
                item: L,
                active: j,
                "size-dependencies": [L.name],
                onClick: (H) => v(L),
                "data-index": N,
                class: E([
                  "po-relative po-group po-select-none po-py-2 po-pl-3 po-pr-9 po-cursor-pointer hover:po-bg-mpao-lightblue",
                  L.active ? "po-bg-mpao-lightblue po-text-white" : "po-text-slate-900"
                ])
              }, {
                default: D(() => [
                  a("span", bu, [
                    J($((L == null ? void 0 : L.name) ?? "") + " ", 1),
                    L != null && L.subtitle ? (i(), c("span", yu, $(L == null ? void 0 : L.subtitle), 1)) : y("", !0)
                  ])
                ]),
                _: 2
              }, 1032, ["item", "active", "size-dependencies", "onClick", "data-index", "class"])
            ]),
            _: 1
          }, 8, ["items"])
        ], 512), [
          [xo, r.value && w(d).length > 0]
        ])
      ]),
      e.message !== null ? (i(), c("p", xu, $(e.message), 1)) : y("", !0),
      w(b) !== null ? (i(), c("p", wu, [
        a("span", null, $(w(b)), 1)
      ])) : y("", !0)
    ], 2));
  }
}), ku = /* @__PURE__ */ a("div", { class: "po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity" }, null, -1), _u = { class: "po-fixed po-z-10 po-inset-0" }, Cu = { class: "po-flex po-justify-center po-items-start po-min-h-screen sm:po-px-4 sm:po-pt-10 sm:po-pb-20 po-text-center sm:po-block po-max-h-screen po-overflow-y-hidden" }, Su = /* @__PURE__ */ a("span", {
  class: "po-hidden sm:po-inline-block sm:po-align-middle sm:po-h-screen",
  "aria-hidden": "true"
}, "​", -1), Ou = { class: "po-flex po-items-center po-bg-white po-rounded-t-xl po-p-5" }, Pu = { class: "po-grow po-text-md po-font-bold po-text-slate-600" }, Eu = { class: "po-shrink-0" }, Lu = /* @__PURE__ */ a("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), Tu = {
  key: 0,
  class: "po-bg-slate-50 po-rounded-b-xl"
}, Du = {
  name: "PoModal"
}, xt = /* @__PURE__ */ Object.assign(Du, {
  props: {
    /**
     * Modal open button label
     */
    openBtnLabel: {
      type: String,
      default: ""
    },
    /**
     * Modal Title
     */
    modalTitle: {
      type: String,
      default: "Modal windows"
    },
    /**
     * Pass model Open/Close to the component
     */
    show: {
      type: Boolean,
      default: !1
    },
    /**
     * Set a custom width to the modal windod
     */
    modalWidth: {
      type: String,
      default: "sm:po-max-w-xl"
    },
    /**
     * Set a fixed height for the modal. Default is auto. You should use tailwind classes here.
     */
    modalHeight: {
      type: String,
      default: ""
    }
  },
  emits: ["modal-closed"],
  setup(e, { emit: t }) {
    const o = e, { show: l } = xe(o), n = C(!1);
    X(l, () => {
      n.value = l.value;
    });
    function s() {
      n.value = !1, t("modal-closed", !0);
    }
    const r = o.modalTitle.toLowerCase().replace(/\s+/g, "-"), u = new URLSearchParams(window.location.search);
    return n.value = u.get("modal") !== void 0 && u.get("modal") === r, (p, f) => (i(), c("div", null, [
      e.openBtnLabel.length > 0 ? (i(), M(w(Do), {
        key: 0,
        label: e.openBtnLabel,
        onClick: f[0] || (f[0] = (d) => n.value = !0)
      }, null, 8, ["label"])) : y("", !0),
      (i(), M(ft, { to: "body" }, [
        S(w(gt), {
          as: "template",
          show: n.value
        }, {
          default: D(() => [
            S(w(Nt), {
              as: "div",
              class: "po-relative po-z-50",
              onClose: s
            }, {
              default: D(() => [
                S(w(Ne), {
                  as: "template",
                  enter: "po-ease-out po-duration-300",
                  "enter-from": "po-opacity-0",
                  "enter-to": "po-opacity-100",
                  leave: "po-ease-in po-duration-200",
                  "leave-from": "po-opacity-100",
                  "leave-to": "po-opacity-0"
                }, {
                  default: D(() => [
                    ku
                  ]),
                  _: 1
                }),
                a("div", _u, [
                  a("div", Cu, [
                    Su,
                    S(w(Ne), {
                      as: "template",
                      enter: "po-ease-out po-duration-300",
                      "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                      "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                      leave: "po-ease-in po-duration-200",
                      "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                      "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                    }, {
                      default: D(() => [
                        S(w(It), {
                          class: E(["po-relative po-inline-block po-align-bottom po-bg-white sm:po-rounded-xl po-text-left po-shadow-xl po-transform po-transition-all sm:po-align-top po-w-full", e.modalWidth])
                        }, {
                          default: D(() => [
                            a("div", Ou, [
                              a("h3", Pu, $(e.modalTitle), 1),
                              a("div", Eu, [
                                a("span", {
                                  role: "button",
                                  class: "po-block",
                                  onClick: s
                                }, [
                                  S(w(vt), { class: "po-w-5 po-stroke-slate-500 hover:po-stroke-mpao-orange po-transition-colors po-duration-150 po-ease-in-out" })
                                ])
                              ])
                            ]),
                            Lu,
                            a("div", {
                              class: E(["po-p-5 po-overflow-y-auto", [
                                {
                                  "po-max-h-[calc(100vh-220px)]": p.$slots.footer
                                },
                                {
                                  "po-max-h-[calc(100vh-145px)]": !p.$slots.footer
                                },
                                e.modalHeight
                              ]])
                            }, [
                              K(p.$slots, "content")
                            ], 2),
                            p.$slots.footer ? (i(), c("div", Tu, [
                              K(p.$slots, "footer")
                            ])) : y("", !0)
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
function Au(e, t) {
  return i(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", { d: "M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" }),
    a("path", { d: "M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" })
  ]);
}
function zu(e, t) {
  return i(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "fill-rule": "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Bu(e, t) {
  return i(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", { d: "M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" })
  ]);
}
function Ln(e, t) {
  return i(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "fill-rule": "evenodd",
      d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Mu(e, t) {
  return i(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "fill-rule": "evenodd",
      d: "M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z",
      "clip-rule": "evenodd"
    })
  ]);
}
const ju = ["for"], Nu = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Iu = ["title"], Ru = ["name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], Fu = ["id"], Hu = ["id"], qu = {
  name: "PoTextarea"
}, Wu = /* @__PURE__ */ Object.assign(qu, {
  props: {
    /**
     * Model value
     */
    modelValue: {
      type: [String, Number],
      default: ""
    },
    /**
     * Input label text
     */
    label: {
      type: String,
      default: ""
    },
    /**
     * Input type
     */
    type: {
      type: String,
      default: "text"
    },
    /**
     * Input id text
     */
    id: {
      type: String,
      default: ""
    },
    /**
     * A tool tip, helper information
     */
    info: {
      type: String,
      default: null
    },
    /**
     * Tip, description, information for the input
     */
    message: {
      type: String,
      default: null
    },
    /**
     * Error message
     */
    errorMessage: {
      type: String,
      default: null
    },
    /**
     * True or false if required
     */
    required: {
      type: Boolean,
      default: !1
    },
    /**
     * True or false if disabled
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * True or false if required
     */
    placeholder: {
      type: String,
      default: null
    },
    /**
     * Input display vertifal (default) or horizontal
     */
    display: {
      type: String,
      default: "vertical"
    }
  },
  setup(e) {
    return (t, o) => (i(), c("div", {
      class: E(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      a("label", {
        for: e.id,
        class: "po-text-sm po-font-medium po-text-slate-700 po-flex po-items-center po-space-x-1"
      }, [
        a("span", null, $(e.label), 1),
        e.required ? (i(), c("span", Nu, "*")) : y("", !0),
        e.info !== null ? (i(), c("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          S(w(Ln))
        ], 8, Iu)) : y("", !0)
      ], 8, ju),
      a("textarea", ke({
        name: `${e.id}-field`,
        id: e.id,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        required: e.required,
        "aria-describedby": `${e.id}-description`,
        "aria-required": e.required,
        "aria-disabled": e.disabled
      }, t.$attrs, {
        onInput: o[0] || (o[0] = (l) => t.$emit("update:modelValue", l.target.value)),
        class: "po-mt-1 po-peer po-px-3 po-py-2 po-block po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-border-slate-300 po-bg-white focus:po-border-mpao-lightblue focus:po-ring-0 invalid:po-border-red-400 invalid:po-focus:border-red-600 invalid:focus:po-ring-red-600 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default"
      }), null, 16, Ru),
      e.message !== null ? (i(), c("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, $(e.message), 9, Fu)) : y("", !0),
      e.errorMessage !== null ? (i(), c("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, $(e.errorMessage), 9, Hu)) : y("", !0)
    ], 2));
  }
}), Uu = { class: "shell-sidebar--icon" }, Gu = /* @__PURE__ */ a("span", { class: "shell-sidebar--label po-font-medium" }, "Feedback", -1), Zu = { action: "" }, Ku = /* @__PURE__ */ a("br", null, null, -1), Yu = { class: "po-p-5" }, Xu = {
  __name: "feedbackForm",
  setup(e) {
    const t = C(!1), o = [
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
    ], l = C({
      type: 1,
      message: ""
    });
    return (n, s) => (i(), c(B, null, [
      a("button", {
        onClick: s[0] || (s[0] = re(() => t.value = !0, ["prevent"])),
        class: "shell-sidebar--item",
        title: "Go to feedback"
      }, [
        a("span", Uu, [
          S(w(rs), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" })
        ]),
        Gu
      ]),
      S(xt, {
        show: t.value,
        onModalClosed: s[3] || (s[3] = () => t.value = !1),
        "modal-title": "Feedback"
      }, {
        content: D(() => [
          a("form", Zu, [
            S(Vu, {
              label: "Type",
              list: o,
              modelValue: l.value.type,
              "onUpdate:modelValue": s[1] || (s[1] = (r) => l.value.type = r)
            }, null, 8, ["modelValue"]),
            Ku,
            S(Wu, {
              cols: "6",
              rows: "6",
              label: "Description",
              modelValue: l.value.message,
              "onUpdate:modelValue": s[2] || (s[2] = (r) => l.value.message = r)
            }, null, 8, ["modelValue"])
          ])
        ]),
        footer: D(() => [
          a("div", Yu, [
            S(Do, {
              label: "Send",
              type: "button"
            })
          ])
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}, Qu = { class: "po-grow" }, Ju = { class: "shell-sidebar--menu" }, ep = ["onClick"], tp = { class: "shell-sidebar--icon" }, op = { class: "shell-sidebar--label po-font-medium po-text-left" }, lp = { key: 0 }, np = { class: "shell-sidebar--menu sidebar-apps po-shrink-0 po-mb-0" }, sp = ["onClick"], ap = { class: "shell-sidebar--icon" }, rp = ["innerHTML"], ip = { class: "shell-sidebar--label po-font-medium po-text-left" }, up = {
  key: 0,
  class: "shell-sidebar--menu po-shrink-0 po-mb-0 po-border-t po-border-slate-200 po-pt-3"
}, pp = {
  name: "PoSidebarDrawer"
}, d2 = /* @__PURE__ */ Object.assign(pp, {
  props: {
    /**
     * Array of  sidebar menu items
     */
    content: {
      type: Array,
      default: null
    },
    /**
     * Current route path
     */
    currRoute: {
      type: String,
      default: "/"
    },
    /**
     * Show/hide feedback button
     */
    hasFeedback: {
      type: Boolean,
      default: !1
    },
    /**
     * Related apps label. default Related apps
     */
    appsLabel: {
      type: String,
      default: "Related apps"
    },
    /**
     * List of related apps
     */
    apps: {
      type: Array,
      default: null
    },
    /**
     * App API code
     */
    appCode: {
      type: String,
      default: ""
    }
  },
  emits: ["button-click", "app-click"],
  setup(e, { emit: t }) {
    const o = e, l = T(() => {
      let d = [];
      const h = o.apps.filter((b) => b.code == o.appCode)[0];
      return h && o.apps.filter(
        (m) => h.related.includes(m.code)
      ).forEach((m) => {
        d.push(m);
      }), d;
    }), n = C(null), s = C(null);
    function r() {
      window.innerWidth <= 1024 && (n.value.checked = !n.value.checked, s.value = n.value.checked);
    }
    U(() => {
      var d;
      s.value = (d = n.value) == null ? void 0 : d.checked;
    });
    function u(d, h) {
      t(d, h), r();
    }
    function p() {
      s.value = n.value.checked;
    }
    function f(d) {
      return s.value ? "" : d;
    }
    return (d, h) => {
      var b;
      return i(), c(B, null, [
        a("input", {
          type: "checkbox",
          name: "",
          class: "po-hidden shell-sidebar--toggle",
          role: "none",
          id: "sidebar-drawer-toggle",
          checked: "",
          "aria-checked": "true",
          ref_key: "sidebarToggle",
          ref: n,
          onClick: p
        }, null, 512),
        (i(), c("aside", {
          class: "shell-sidebar",
          key: s.value
        }, [
          a("div", Qu, [
            (i(!0), c(B, null, q(e.content, (m, g) => (i(), c("div", {
              key: `sidebar-group-${g}`
            }, [
              S(w(rl), { defaultOpen: !0 }, {
                default: D(({ open: x }) => [
                  m.groupName ? (i(), M(w(il), {
                    key: 0,
                    class: E([x ? "" : "po-mb-3", "shell-sidebar--section po-w-full po-text-left"])
                  }, {
                    default: D(() => [
                      J($(m.groupName), 1)
                    ]),
                    _: 2
                  }, 1032, ["class"])) : y("", !0),
                  S(Me, {
                    "enter-active-class": "po-transition po-duration-100 po-ease-out",
                    "enter-from-class": "po-transform po-scale-95 po-opacity-0",
                    "enter-to-class": "po-transform po-scale-100 po-opacity-100",
                    "leave-active-class": "po-transition po-duration-75 po-ease-out",
                    "leave-from-class": "po-transform po-scale-100 po-opacity-100",
                    "leave-to-class": "po-transform po-scale-95 po-opacity-0"
                  }, {
                    default: D(() => [
                      S(w(ul), null, {
                        default: D(() => [
                          a("ul", Ju, [
                            (i(!0), c(B, null, q(m.items, (v) => (i(), c("li", {
                              key: v.label
                            }, [
                              a("span", null, [
                                S(w(go), {
                                  text: f(v.label),
                                  placement: "right",
                                  strategy: "fixed"
                                }, {
                                  default: D(() => [
                                    v.disabled ? y("", !0) : (i(), c("button", {
                                      key: 0,
                                      onClick: (k) => u("button-click", v.url),
                                      class: E([
                                        "shell-sidebar--item",
                                        { active: v.url == e.currRoute }
                                      ])
                                    }, [
                                      a("span", tp, [
                                        (i(), M(de(v.icon), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" }))
                                      ]),
                                      a("span", op, $(v.label), 1)
                                    ], 10, ep))
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
              }, 1024)
            ]))), 128)),
            ((b = w(l)) == null ? void 0 : b.length) > 0 ? (i(), c("div", lp, [
              S(w(rl), { defaultOpen: !0 }, {
                default: D(({ open: m }) => [
                  e.appsLabel ? (i(), M(w(il), {
                    key: 0,
                    class: E([m ? "" : "po-mb-3", "shell-sidebar--section po-w-full po-text-left"])
                  }, {
                    default: D(() => [
                      J($(e.appsLabel), 1)
                    ]),
                    _: 2
                  }, 1032, ["class"])) : y("", !0),
                  S(Me, {
                    "enter-active-class": "po-transition po-duration-100 po-ease-out",
                    "enter-from-class": "po-transform po-scale-95 po-opacity-0",
                    "enter-to-class": "po-transform po-scale-100 po-opacity-100",
                    "leave-active-class": "po-transition po-duration-75 po-ease-out",
                    "leave-from-class": "po-transform po-scale-100 po-opacity-100",
                    "leave-to-class": "po-transform po-scale-95 po-opacity-0"
                  }, {
                    default: D(() => [
                      S(w(ul), null, {
                        default: D(() => [
                          a("ul", np, [
                            (i(!0), c(B, null, q(w(l), (g, x) => (i(), c("li", null, [
                              S(w(go), {
                                text: f(g.name),
                                placement: "right",
                                strategy: "fixed"
                              }, {
                                default: D(() => [
                                  a("button", {
                                    onClick: (v) => u("app-click", g.name),
                                    class: E(["shell-sidebar--item", [{ active: g.current }]]),
                                    title: "Go to feedback"
                                  }, [
                                    a("span", ap, [
                                      a("span", {
                                        innerHTML: g.icon,
                                        class: "po-text-slate-600 po-w-5"
                                      }, null, 8, rp)
                                    ]),
                                    a("span", ip, $(g.name), 1)
                                  ], 10, sp)
                                ]),
                                _: 2
                              }, 1032, ["text"])
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
              })
            ])) : y("", !0)
          ]),
          e.hasFeedback ? (i(), c("ul", up, [
            a("li", null, [
              S(Xu)
            ])
          ])) : y("", !0)
        ]))
      ], 64);
    };
  }
}), cp = {
  key: 0,
  class: "shell-content--action-bar"
}, dp = { class: "action-bar__nav" }, fp = ["onClick"], vp = { class: "action-bar__nav_label po-font-medium" }, hp = {
  key: 0,
  class: "po-shrink-0 po-flex po-space-x-1"
}, mp = /* @__PURE__ */ a("span", { class: "action-bar__nav_label po-font-medium" }, "Go Back", -1), gp = {
  name: "PoActionBar"
}, f2 = /* @__PURE__ */ Q({
  ...gp,
  props: {
    /**
     * List of Buttons to display on the Action Bar.
     * As an icon, you should pass the name of a HeroIcon
     */
    items: {
      type: Array,
      default: null
    },
    /**
     * The backbutton is optional. So you can either show or hide it.
     */
    showBackButton: {
      type: Boolean,
      default: !1
    },
    /**
     * Current route name to highlight current page when used as tabs.
     */
    currPageRoute: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    return (t, o) => e.items !== null && e.items.length > 0 || e.showBackButton ? (i(), c("section", cp, [
      a("nav", dp, [
        (i(!0), c(B, null, q(e.items, (l) => (i(), c("span", {
          onClick: (n) => t.$emit("button-click", l.label),
          class: E([[
            { "action-bar__nav_highlighted": l.highlighted },
            { "action-bar__nav_danger": l.danger }
          ], "action-bar__nav_link"])
        }, [
          (i(), M(de(l.icon), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" })),
          a("span", vp, $(l.label), 1)
        ], 10, fp))), 256))
      ]),
      e.showBackButton ? (i(), c("nav", hp, [
        a("span", {
          onClick: o[0] || (o[0] = (l) => t.$emit("button-click", "back")),
          class: "action-bar__nav_link"
        }, [
          mp,
          (i(), M(de(w(os)), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" }))
        ])
      ])) : y("", !0)
    ])) : y("", !0);
  }
}), bp = { class: "po-shadow-sm po-rounded-xl po-bg-white po-relative" }, yp = {
  key: 0,
  class: "po-absolute po-right-2 po-top-2 po-p-2 po-rounded-lg"
}, xp = {
  key: 0,
  class: "po-text-base po-font-medium po-text-slate-600"
}, wp = {
  key: 1,
  class: "lg:po-col-span-2 lg:po-flex lg:po-justify-end po-space-x-2"
}, $p = {
  name: "PoCard"
}, v2 = /* @__PURE__ */ Object.assign($p, {
  props: {
    /**
     * Card title
     */
    title: {
      type: String,
      default: ""
    },
    /**
     * Show card loading
     */
    isLoading: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (t, o) => (i(), c("div", bp, [
      e.isLoading ? (i(), c("div", yp, [
        S(qt)
      ])) : y("", !0),
      a("div", {
        class: E([
          { "po-grid po-grid-cols-1 lg:po-grid-cols-3 po-gap-3": t.$slots.action }
        ])
      }, [
        e.title.length > 0 ? (i(), c("h3", xp, $(e.title), 1)) : y("", !0),
        t.$slots.action ? (i(), c("div", wp, [
          K(t.$slots, "action")
        ])) : y("", !0)
      ], 2),
      K(t.$slots, "content")
    ]));
  }
}), Vp = { class: "po-py-3 po-px-5 po-border-b po-border-slate-200" }, kp = {
  class: "po-flex po-w-full md:po-ml-0",
  action: "#",
  method: "GET"
}, _p = {
  for: "search-field",
  class: "po-sr-only"
}, Cp = { class: "po-relative po-w-full po-text-slate-400 focus-within:po-text-mpao-lightblue po-transition-colors po-duration-100 po-ease-in-out" }, Sp = { class: "po-pointer-events-none po-absolute po-inset-y-0 po-left-0 po-flex po-items-center" }, Op = ["placeholder", "value"], Pp = ["disabled"], Ep = {
  name: "PoCardSearch"
}, h2 = /* @__PURE__ */ Object.assign(Ep, {
  props: {
    /**
     * Model value
     */
    modelValue: {
      type: [String, Number],
      default: ""
    },
    /**
     * Placeholder, screen reader label
     */
    placeholder: {
      type: String,
      default: "Search"
    },
    /**
     * Show hide card search button
     */
    showBtn: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["update:modelValue", "button-click"],
  setup(e, { emit: t }) {
    return (o, l) => (i(), c("div", Vp, [
      a("form", kp, [
        a("label", _p, $(e.placeholder), 1),
        a("div", Cp, [
          a("div", Sp, [
            S(w(wo), { class: "po-h-5 po-w-5 po-flex-shrink-0" })
          ]),
          a("input", {
            name: "search-field",
            id: "desktop-search-field",
            placeholder: e.placeholder,
            value: e.modelValue,
            onInput: l[0] || (l[0] = (n) => o.$emit("update:modelValue", n.target.value)),
            class: "po-h-full po-w-full po-border-transparent po-py-2 po-pl-8 po-pr-3 po-text-sm po-text-slate-700 po-placeholder-slate-500 focus:po-border-transparent focus:po-placeholder-slate-400 focus:po-outline-none focus:po-ring-0",
            type: "search"
          }, null, 40, Op),
          e.showBtn ? (i(), c("button", {
            key: 0,
            class: E(["po-absolute po-right-0 po-text-sm po-rounded-full po-px-3 po-py-2 po-transition-colors po-duration-150 po-ease-out", [
              { "po-bg-mpao-lightblue po-text-white": e.modelValue !== "" },
              { "po-bg-slate-100 po-text-slate-400": e.modelValue === "" }
            ]]),
            disabled: e.modelValue === "",
            onClick: l[1] || (l[1] = re((n) => o.$emit("button-click", e.modelValue), ["prevent"]))
          }, " Search ", 10, Pp)) : y("", !0)
        ])
      ])
    ]));
  }
}), Lp = { class: "po-flex po-items-center" }, Tp = { class: "po-text-sm po-font-medium po-text-slate-500 po-pr-2" }, Dp = {
  name: "PoPagination"
}, Ap = /* @__PURE__ */ Object.assign(Dp, {
  props: {
    /**
     * Pagination Object { label: 'Page 1 of 2' } ... NO LONGER RECOMMENDED
     */
    pagination: {
      type: Object,
      default: null
    },
    /**
     * Total number of pages
     */
    totalPages: {
      type: [String, Number],
      default: null
    },
    /**
     * Current page
     */
    currentPage: {
      type: [String, Number],
      default: null
    }
  },
  emits: ["button-click", "next-click", "prev-click"],
  setup(e, { emit: t }) {
    const o = e;
    function l() {
      t("button-click", "prev"), t("prev-click", !0);
    }
    function n() {
      t("button-click", "next"), t("next-click", !0);
    }
    const s = T(() => o.totalPages ? `Page ${o.currentPage} of ${o.totalPages}` : o.pagination ? o.pagination.label : "");
    return (r, u) => (i(), c("div", Lp, [
      a("span", Tp, $(w(s)), 1),
      a("button", {
        title: "Previous",
        onClick: l,
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        S(w(ps), { class: "po-w-4 po-stroke-current po-stroke-2" })
      ]),
      a("button", {
        title: "Next",
        onClick: n,
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        S(w(cs), { class: "po-w-4 po-stroke-current po-stroke-2" })
      ])
    ]));
  }
}), zp = { key: 0 }, Bp = {
  class: "po-text-xl md:po-text-2xl po-font-semibold po-text-slate-800",
  id: "po-page-title"
}, Mp = {
  key: 0,
  class: "po-text-base po-mt-2 po-max-w-md po-block po-text-slate-500"
}, jp = { key: 1 }, Np = { class: "po-grid po-grid-cols-1 lg:po-grid-cols-2 po-gap-5" }, Ip = {
  class: "po-text-xl md:po-text-2xl po-font-semibold po-text-slate-800",
  id: "po-page-title"
}, Rp = {
  key: 0,
  class: "po-text-base po-mt-4 po-max-w-md po-pb-5 po-block po-text-slate-500"
}, Fp = { class: "po-flex po-items-end po-justify-end po-flex-col" }, Hp = {
  key: 0,
  class: "po-flex md:po-justify-end po-mb-5"
}, qp = { class: "po-bg-slate-50 po-shadow-sm po-rounded-xl po-py-5 po-px-2 po-divide-x po-divide-slate-200 po-flex" }, Wp = ["onClick"], Up = { class: "po-text-xl po-font-medium po-text-slate-600 po-flex po-items-center po-space-x-1" }, Gp = { class: "po-text-xl po-font-medium po-text-slate-600 group-hover:po-text-mpao-lightblue" }, Zp = { class: "po-text-sm po-text-slate-500 po-block group-hover:po-text-mpao-lightblue" }, Kp = { class: "po-flex po-items-center po-space-x-1 md:po-justify-end" }, Yp = {
  key: 2,
  class: "po-border-l po-border-slate-400 po-h-3 po-w-3 po-ml-1"
}, Xp = {
  key: 0,
  class: "po-bg-slate-50 po-p-5 po-mt-5 po-rounded-md po-grid po-grid-cols-1 md:po-grid-cols-3 po-gap-5"
}, Qp = /* @__PURE__ */ a("span", { class: "po-text-xs po-text-slate-500 po-py-5" }, "No filters available at the moment.", -1), Jp = {
  name: "PoPageTitle"
}, m2 = /* @__PURE__ */ Object.assign(Jp, {
  props: {
    /**
     * Page title
     */
    label: {
      type: String,
      default: ""
    },
    /**
     * Page description
     */
    description: {
      type: String,
      default: ""
    },
    /**
     * Page stats
     */
    stats: {
      type: Array,
      default: null
    },
    /**
     * True or False show pagination
     */
    showPagination: {
      type: Boolean,
      default: !1
    },
    /**
     * True or False show filter button
     */
    showFilter: {
      type: Boolean,
      default: !1
    },
    /**
     * True or False show download button
     */
    showDownload: {
      type: Boolean,
      default: !1
    },
    /**
     * Pagination Object { label: 'Page 1 of 2', nextLink: './next', prevLink: './prev' }
     */
    pagination: {
      type: Object,
      default: null
    },
    /**
     * Turn on and off filters ... show on load
     */
    filterOn: {
      type: Boolean,
      default: !1
    },
    /**
     *
     */
    standAlone: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["button-click", "pagination-click", "stat-click"],
  setup(e, { emit: t }) {
    const l = e.filterOn ? C(!0) : C(!1);
    function n(r) {
      t("pagination-click", r);
    }
    function s(r) {
      return r.iconColor ? r.iconColor : "po-slate-600";
    }
    return (r, u) => e.standAlone ? (i(), c("div", zp, [
      a("h1", Bp, $(e.label), 1),
      e.description !== "" ? (i(), c("span", Mp, $(e.description), 1)) : y("", !0)
    ])) : (i(), c("div", jp, [
      a("div", Np, [
        a("div", null, [
          a("h1", Ip, $(e.label), 1),
          e.description !== "" ? (i(), c("span", Rp, $(e.description), 1)) : y("", !0)
        ]),
        a("div", Fp, [
          e.stats !== null ? (i(), c("div", Hp, [
            a("div", qp, [
              (i(!0), c(B, null, q(e.stats, (p) => (i(), c("div", {
                class: "po-px-5 po-cursor-pointer po-group genie-effect",
                onClick: (f) => r.$emit("stat-click", p)
              }, [
                a("span", Up, [
                  a("span", Gp, $(p.value), 1),
                  p.icon ? (i(), c("span", {
                    key: 0,
                    class: E(["po-w-5 po-h-5", s(p)])
                  }, [
                    (i(), M(de(p.icon)))
                  ], 2)) : y("", !0)
                ]),
                a("span", Zp, $(p.label), 1)
              ], 8, Wp))), 256))
            ])
          ])) : y("", !0),
          a("div", Kp, [
            e.showFilter ? (i(), c("button", {
              key: 0,
              title: "Filter",
              onClick: u[0] || (u[0] = (p) => {
                r.$emit("button-click", "filter"), l.value = !w(l);
              }),
              class: E([
                "po-p-2 po-rounded-md hover:po-bg-slate-200 po-transition-colors po-duration-75 po-ease-in-out",
                { "po-text-mpao-orange hover:po-text-mpao-orange": w(l) },
                { "tpo-ext-slate-600 hover:po-text-mpao-blue": !w(l) }
              ])
            }, [
              S(w(fs), { class: "po-w-4 po-stroke-current po-stroke-2" })
            ], 2)) : y("", !0),
            e.showDownload ? (i(), c("button", {
              key: 1,
              title: "Download",
              onClick: u[1] || (u[1] = (p) => r.$emit("button-click", "download")),
              class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
            }, [
              S(w(es), { class: "po-w-4 po-stroke-current po-stroke-2" })
            ])) : y("", !0),
            e.showFilter && e.showPagination || e.showDownload && e.showPagination ? (i(), c("span", Yp, " ")) : y("", !0),
            e.showPagination ? (i(), M(Ap, {
              key: 3,
              pagination: e.pagination,
              onButtonClick: n
            }, null, 8, ["pagination"])) : y("", !0)
          ])
        ])
      ]),
      S(Me, {
        "enter-active-class": "po-transition po-duration-100 po-ease-out",
        "enter-from-class": "po-transform po-scale-95 po-opacity-0",
        "enter-to-class": "po-transform po-scale-100 po-opacity-100",
        "leave-active-class": "po-transition po-duration-75 po-ease-out",
        "leave-from-class": "po-transform po-scale-100 po-opacity-100",
        "leave-to-class": "po-transform po-scale-95 po-opacity-0"
      }, {
        default: D(() => [
          w(l) ? (i(), c("div", Xp, [
            K(r.$slots, "filters", {}, () => [
              Qp
            ])
          ])) : y("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), ec = {
  key: 0,
  class: "po-w-12"
}, tc = ["onClick"], oc = { class: "po-flex po-space-x-1 po-pr-2 po-items-center" }, lc = { class: "po-grow" }, nc = {
  key: 0,
  class: "po-shrink-0 po-select-none po-bg-slate-100 po-rounded-md po-w-4 po-h-4 po-flex po-items-center po-justify-center po-cursor-pointer",
  role: "button"
}, sc = {
  key: 0,
  class: "po-w-12"
}, ac = ["onClick"], rc = ["colspan"], ic = { key: 1 }, uc = ["colspan"], pc = { class: "po-py-10 po-block po-normal-case" }, cc = { class: "po-pr-5" }, dc = { class: "po-py-1" }, fc = { key: 0 }, vc = {
  name: "PoTable",
  components: { ArrowRightCircleIcon: dn }
}, g2 = /* @__PURE__ */ Object.assign(vc, {
  props: {
    /**
     * Table head items array
     */
    thead: {
      type: Array,
      default: null
    },
    /**
     * Table body items array
     */
    tbody: {
      type: Array,
      default: null
    },
    /**
     * Message to display when the table is empty
     */
    emptyMessage: {
      type: String,
      default: "We couldn't find any content to display."
    },
    /**
     * Adds breakpoint at lg to switch to mobile styles
     */
    breakAtLg: {
      type: Boolean,
      default: !1
    },
    /**
     * If set true, displays placeholder loading animation
     */
    isLoading: {
      type: Boolean,
      default: !1
    },
    /**
     * If set true, displays placeholder loading animation
     */
    hasDetailsRow: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["column-click"],
  setup(e, { emit: t }) {
    const o = e, { isLoading: l, tbody: n, thead: s } = xe(o), r = C(!1), u = C(null), p = C(null), f = C(null);
    X(l, () => {
      d();
    }), X(n, () => {
      d(), h();
    }), U(() => {
      d(), h(), u.value = s.value;
    });
    function d() {
      r.value = l.value, p.value = n.value, l.value && (p.value = [{}, {}, {}, {}, {}]);
    }
    function h() {
      if (o.hasDetailsRow)
        for (let g = 0; g < o.tbody.length; g++)
          o.tbody[g].showDetails = !1;
    }
    function b() {
      return Math.floor(Math.random() * 41) + 40;
    }
    const m = (g, x) => {
      g.sortable && (g.sorted && f.value === "asc" ? f.value = "desc" : f.value = "asc", u.value.forEach((v) => {
        v.label === g.label ? (v.sorted = !0, v.sortDirection = f.value, v.index = x) : (v.sorted = !1, v.sortDirection = null);
      }), t("column-click", g));
    };
    return (g, x) => (i(), c("table", {
      class: E(["table-responsive po-w-full", [{ lg: e.breakAtLg }]])
    }, [
      a("thead", null, [
        a("tr", null, [
          e.hasDetailsRow ? (i(), c("th", ec)) : y("", !0),
          (i(!0), c(B, null, q(u.value, (v, k) => (i(), c("th", {
            onClick: (V) => m(v, k)
          }, [
            a("span", oc, [
              a("span", lc, [
                K(g.$slots, "th", Xe(Qe(v)))
              ]),
              v.sortable ? (i(), c("span", nc, [
                v.sorted ? y("", !0) : (i(), M(w(Bo), {
                  key: 0,
                  class: "po-w-3 po-h-3"
                })),
                v.sorted && v.sortDirection === "asc" ? (i(), M(w(zo), {
                  key: 1,
                  class: "po-w-3 po-h-3"
                })) : y("", !0),
                v.sorted && v.sortDirection === "desc" ? (i(), M(w(Ao), {
                  key: 2,
                  class: "po-w-3 po-h-3"
                })) : y("", !0)
              ])) : y("", !0)
            ])
          ], 8, tc))), 256))
        ])
      ]),
      a("tbody", null, [
        p.value !== null && !r.value || p.value !== null && p.value.length !== 0 && !r.value ? (i(!0), c(B, { key: 0 }, q(p.value, (v, k) => (i(), c(B, null, [
          a("tr", null, [
            e.hasDetailsRow ? (i(), c("td", sc, [
              a("span", {
                onClick: (V) => v.showDetails = !v.showDetails
              }, [
                S(w(dn), {
                  class: E(["po-w-5 po-fill-mpao-lightblue po-origin-center po-transition-transform po-duration-100 po-ease-out po-cursor-pointer", [{ "po-rotate-90": v.showDetails }]])
                }, null, 8, ["class"])
              ], 8, ac)
            ])) : y("", !0),
            K(g.$slots, "td", Xe(Qe({ ...v, index: k, item: v })))
          ]),
          e.hasDetailsRow ? (i(), c("tr", {
            key: 0,
            class: E(["po-table-details-row", [{ "po-hidden": !v.showDetails }]])
          }, [
            a("td", {
              colspan: w(s).length + 1
            }, [
              K(g.$slots, "details", Xe(Qe({ item: v })))
            ], 8, rc)
          ], 2)) : y("", !0)
        ], 64))), 256)) : y("", !0),
        p.value == null && !r.value || p.value !== null && p.value.length == 0 && !r.value ? (i(), c("tr", ic, [
          a("td", {
            colspan: w(s).length + 1,
            class: "po-text-center"
          }, [
            a("span", pc, $(e.emptyMessage), 1)
          ], 8, uc)
        ])) : y("", !0),
        r.value ? (i(!0), c(B, { key: 2 }, q(p.value, (v) => (i(), c("tr", null, [
          (i(!0), c(B, null, q(w(s), (k) => (i(), c("td", cc, [
            a("div", dc, [
              a("div", {
                class: "po-h-2 loading-placeholder po-rounded-full",
                style: Dt({ width: b() + "%" })
              }, null, 4)
            ])
          ]))), 256))
        ]))), 256)) : y("", !0)
      ]),
      g.$slots.tfoot ? (i(), c("tfoot", fc, [
        a("tr", null, [
          K(g.$slots, "tfoot")
        ])
      ])) : y("", !0)
    ], 2));
  }
}), hc = ["onUpdate:modelValue", "id"], mc = ["for"], gc = { class: "table-responsive po-w-full" }, bc = ["onClick"], yc = { key: 0 }, xc = ["onClick"], wc = {
  name: "PoDynamicTable",
  components: { ArrowsUpDownIcon: Bo, ArrowUpIcon: zo, ArrowDownIcon: Ao }
}, b2 = /* @__PURE__ */ Object.assign(wc, {
  props: {
    data: {
      type: Array,
      required: !0
    },
    columns: {
      type: Array,
      required: !0
    }
  },
  setup(e) {
    const t = e, o = C(t.columns), l = C(null), n = C(null), s = (p) => {
      p.hidden = !p.hidden, o.value = t.columns.filter((f) => !f.hidden);
    }, r = (p) => {
      p.sortable && (p.sorted && n.value === "asc" ? n.value = "desc" : n.value = "asc", o.value.forEach((f) => {
        f.key === p.key ? (f.sorted = !0, f.sortDirection = n.value) : (f.sorted = !1, f.sortDirection = null);
      }), l.value = p);
    }, u = C([]);
    return ie(() => {
      l.value ? u.value = [...t.data].sort((p, f) => {
        let d = p[l.value.key], h = f[l.value.key];
        return typeof d == "string" && typeof h == "string" && (d = d.toLowerCase(), h = h.toLowerCase()), d < h ? n.value === "asc" ? -1 : 1 : d > h ? n.value === "asc" ? 1 : -1 : 0;
      }) : u.value = [...t.data];
    }), (p, f) => (i(), c("div", null, [
      (i(!0), c(B, null, q(o.value, (d) => (i(), c("div", null, [
        Pe(a("input", {
          type: "checkbox",
          name: "dynamic",
          "onUpdate:modelValue": (h) => d.hidden = h,
          id: `hide-table-col-${d.label}`
        }, null, 8, hc), [
          [Xn, d.hidden]
        ]),
        a("label", {
          for: `hide-table-col-${d.label}`
        }, $(d.label), 9, mc)
      ]))), 256)),
      a("table", gc, [
        a("thead", null, [
          a("tr", null, [
            (i(!0), c(B, null, q(o.value, (d) => (i(), c("th", {
              key: d.key,
              onClick: (h) => r(d)
            }, [
              J($(d.label) + " " + $(d.sorted) + " " + $(d.sortDirection) + " ", 1),
              d.sortable ? (i(), c("span", yc, [
                d.sorted ? y("", !0) : (i(), M(w(Bo), {
                  key: 0,
                  class: "po-w-4"
                })),
                d.sorted && d.sortDirection === "asc" ? (i(), M(w(zo), {
                  key: 1,
                  class: "po-w-4"
                })) : y("", !0),
                d.sorted && d.sortDirection === "desc" ? (i(), M(w(Ao), {
                  key: 2,
                  class: "po-w-4"
                })) : y("", !0)
              ])) : y("", !0),
              d.hidable ? (i(), c("button", {
                key: 1,
                onClick: (h) => s(d)
              }, $(d.hidden ? "Show" : "Hide"), 9, xc)) : y("", !0)
            ], 8, bc))), 128))
          ])
        ]),
        a("tbody", null, [
          (i(!0), c(B, null, q(u.value, (d) => (i(), c("tr", {
            key: d.id
          }, [
            (i(!0), c(B, null, q(o.value, (h) => (i(), c("td", {
              key: h.key
            }, $(d[h.key]), 1))), 128))
          ]))), 128))
        ])
      ])
    ]));
  }
}), $c = { class: "" }, Vc = { class: "po-grow" }, kc = ["onClick"], _c = {
  name: "PoDescriptionList"
}, Cc = /* @__PURE__ */ Object.assign(_c, {
  props: {
    /**
     * Items to display in the list.
     */
    items: {
      type: Array,
      default: null
    },
    striped: {
      type: Boolean,
      default: !1
    },
    columns: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, l) => (i(), c("div", null, [
      a("dl", {
        class: E([
          "po-description-list",
          { "po-divide-y po-divide-slate-200": !e.striped },
          { striped: e.striped },
          { "no-col": !e.columns }
        ])
      }, [
        K(o.$slots, "content", {}, () => [
          (i(!0), c(B, null, q(e.items, (n) => (i(), c("div", null, [
            a("dt", null, $(n.title), 1),
            a("dd", $c, [
              a("span", Vc, $(n.description), 1),
              n.action !== void 0 ? (i(), c("span", {
                key: 0,
                class: "po-shrink-0 po-text-mpao-lightblue hover:po-text-mpao-blue po-transition-colors po-duration-100 po-ease-in-out po-px-2 po-cursor-pointer",
                onClick: (s) => o.$emit("button-click", n.action)
              }, $(typeof n.action == "string" ? n.action : n.action.label), 9, kc)) : y("", !0)
            ])
          ]))), 256))
        ])
      ], 2)
    ]));
  }
}), Sc = ["for"], Oc = { class: "po-capitalize" }, Pc = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Ec = ["title"], Lc = ["type", "name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], Tc = ["id"], Dc = ["id"], Ac = {
  name: "PoInputField"
}, y2 = /* @__PURE__ */ Object.assign(Ac, {
  props: {
    /**
     * Model value
     */
    modelValue: {
      type: [String, Number],
      default: ""
    },
    /**
     * Input label text
     */
    label: {
      type: String,
      default: ""
    },
    /**
     * Input type
     */
    type: {
      type: String,
      default: "text"
    },
    /**
     * Input display vertifal (default) or horizontal
     */
    display: {
      type: String,
      default: "vertical"
    },
    /**
     * Input id text
     */
    id: {
      type: String,
      default: ""
    },
    /**
     * A tool tip, helper information
     */
    info: {
      type: String,
      default: null
    },
    /**
     * Tip, description, information for the input
     */
    message: {
      type: String,
      default: null
    },
    /**
     * Error message
     */
    errorMessage: {
      type: String,
      default: null
    },
    /**
     * True or False has error.. NO LONGER HAVE TO USE THIS. JUST PASS AN errorMessage.
     */
    hasError: {
      type: Boolean,
      default: !1
    },
    /**
     * True or false if required
     */
    required: {
      type: Boolean,
      default: !1
    },
    /**
     * True or false if disabled
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * True or false if required
     */
    placeholder: {
      type: String,
      default: null
    },
    /**
     * True or false if required
     */
    borderColor: {
      type: String,
      default: "po-border-slate-300 focus:po-border-mpao-lightblue"
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e;
    function l() {
      return o.hasError ? "po-border-red-400 focus:po-border-red-600 focus:po-ring-red-600" : o.borderColor;
    }
    const { errorMessage: n } = xe(o), s = C(n.value !== null);
    X(n, (b, m) => {
      s.value = n.value !== null && n.value !== "";
    }), X(n, (b, m) => {
      s.value = n.value !== null && n.value !== "";
    });
    let r = o.type === "currency" ? "text" : o.type;
    const u = C(null), p = (b) => {
      let m = b.target.value;
      u.value = m;
      let g = o.type === "currency" ? d(m) : m;
      t("update:modelValue", g);
    };
    X(o, (b, m) => {
      o.type === "currency" && u.value !== m.modelValue ? u.value = ol(o.modelValue) : u.value = o.modelValue;
    });
    const f = (b) => {
      let m = null;
      o.type === "currency" ? m = ol(d("" + b)) : m = b, u.value = m;
    }, d = (b) => {
      let m = b.replace(/,/g, "");
      const g = m.indexOf(".");
      return g !== -1 && m.substring(g + 1) === "00" && (m = m.substring(0, g)), m;
    };
    o.type === "currency" ? f(o.modelValue) : u.value = o.modelValue;
    const h = C("");
    return U(() => {
      o.id === "" ? h.value = o.id ? o.id : `${o.label.replace(
        /\s/g,
        ""
      )}-${Date.now()}-inputfield-${Math.floor(Math.random() * 9e3)}` : h.value = o.id;
    }), (b, m) => (i(), c("div", {
      class: E(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      a("label", {
        for: h.value,
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700"
      }, [
        a("span", Oc, $(e.label), 1),
        e.required ? (i(), c("span", Pc, "*")) : y("", !0),
        e.info !== null ? (i(), c("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          S(w(Wt), { class: "po-fill-current" })
        ], 8, Ec)) : y("", !0)
      ], 8, Sc),
      a("input", ke({
        type: w(r),
        name: `${h.value}-field`,
        id: h.value,
        value: u.value,
        placeholder: e.placeholder,
        disabled: e.disabled,
        required: e.required,
        "aria-describedby": `${h.value}-description`,
        "aria-required": e.required,
        "aria-disabled": e.disabled
      }, b.$attrs, {
        onInput: p,
        onBlur: m[0] || (m[0] = (g) => f(g.target.value)),
        class: [
          "po-mt-1 peer po-block po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white focus:po-ring-0 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default",
          l()
        ]
      }), null, 16, Lc),
      e.message !== null ? (i(), c("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, $(e.message), 9, Tc)) : y("", !0),
      s.value && w(n) !== null ? (i(), c("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
        id: `${e.id}-error`
      }, [
        a("span", null, $(w(n)), 1)
      ], 8, Dc)) : y("", !0)
    ], 2));
  }
}), zc = { class: "po-text-sm po-font-medium po-text-slate-700 peer-focus:po-text-mpao-lightblue peer-invalid:po-text-red-500 peer-invalid:peer-focus:po-text-red-600 po-flex po-items-center po-space-x-1 po-capitalize" }, Bc = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Mc = ["name", "id", "value"], jc = ["for"], Nc = { class: "po-flex po-items-center po-space-x-1" }, Ic = {
  key: 0,
  class: "po-text-sm"
}, Rc = {
  key: 1,
  class: "po-text-sm"
}, Fc = {
  key: 0,
  class: "po-mt-3 po-flex po-w-full po-h-1.5 po-bg-gray-100 po-rounded-full po-overflow-hidden"
}, Hc = ["aria-valuenow"], qc = ["id"], Wc = ["id"], Uc = {
  name: "PoInputFile"
}, x2 = /* @__PURE__ */ Object.assign(Uc, {
  props: {
    /**
     * Model value
     */
    modelValue: {
      type: [String, Number],
      default: ""
    },
    /**
     * Input label text
     */
    label: {
      type: String,
      default: ""
    },
    /**
     * Input id text
     */
    id: {
      type: String,
      default: ""
    },
    /**
     * A tool tip, helper information
     */
    info: {
      type: String,
      default: null
    },
    /**
     * Tip, description, information for the input
     */
    message: {
      type: String,
      default: null
    },
    /**
     * Error message
     */
    errorMessage: {
      type: String,
      default: null
    },
    /**
     * Input display vertifal (default) or horizontal
     */
    display: {
      type: String,
      default: "vertical"
    },
    /**
     * True or false if required
     */
    required: {
      type: Boolean,
      default: !1
    },
    /**
     * File upload progress
     */
    progress: {
      type: Number,
      default: null
    }
  },
  setup(e) {
    const t = e, o = T(() => `width: ${t.progress}%`), l = T(() => t.progress), n = C(""), s = (r) => {
      const u = r.target.files[0];
      u ? n.value = u.name : n.value = "";
    };
    return (r, u) => (i(), c("div", {
      class: E(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      a("span", zc, [
        a("span", null, $(e.label), 1),
        e.required ? (i(), c("span", Bc, "*")) : y("", !0)
      ]),
      a("input", {
        name: `${e.id}-upload`,
        id: `${e.id}-fileupload`,
        value: e.modelValue,
        type: "file",
        onInput: u[0] || (u[0] = (p) => r.$emit("update:modelValue", p.target.value)),
        onChange: u[1] || (u[1] = (p) => s(p)),
        class: "po-sr-only po-peer"
      }, null, 40, Mc),
      a("label", {
        for: `${e.id}-fileupload`,
        class: "po-mt-1 po-block po-w-full po-border po-cursor-pointer po-rounded-md po-border-slate-300 po-bg-white peer-focus:po-border-mpao-lightblue invalid:po-border-red-400 invalid:focus:po-border-red-600 invalid:focus:po-ring-red-600 sm:po-text-sm po-p-2"
      }, [
        a("div", Nc, [
          S(w(Et), { class: "po-w-4 po-stroke-slate-500" }),
          n.value ? (i(), c("span", Ic, $(n.value), 1)) : (i(), c("span", Rc, "Choose file"))
        ])
      ], 8, jc),
      w(l) !== null ? (i(), c("div", Fc, [
        a("div", {
          class: "po-flex po-flex-col po-justify-center po-overflow-hidden po-bg-mpao-lightblue",
          role: "progressbar",
          style: Dt(w(o)),
          "aria-valuenow": w(l),
          "aria-valuemin": "0",
          "aria-valuemax": "100"
        }, null, 12, Hc)
      ])) : y("", !0),
      e.message !== null ? (i(), c("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, $(e.message), 9, qc)) : y("", !0),
      e.errorMessage !== null ? (i(), c("p", {
        key: 2,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, $(e.errorMessage), 9, Wc)) : y("", !0)
    ], 2));
  }
}), Gc = { class: "po-text-sm po-font-medium po-text-slate-700 po-cursor-pointer po-select-none po-flex po-items-center po-space-x-1" }, Zc = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Kc = {
  name: "PoToggle"
}, w2 = /* @__PURE__ */ Object.assign(Kc, {
  props: {
    /**
     * Model value
     */
    modelValue: {
      type: Boolean,
      default: !1
    },
    /**
     * Label text
     */
    label: {
      type: String,
      default: ""
    },
    /**
     * True or false if required
     */
    required: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const o = C(e.modelValue);
    return (l, n) => (i(), M(w(_a), {
      as: "div",
      class: "po-flex po-items-center"
    }, {
      default: D(() => [
        S(w(Ca), {
          modelValue: o.value,
          "onUpdate:modelValue": n[0] || (n[0] = (s) => o.value = s),
          onClick: n[1] || (n[1] = (s) => l.$emit("update:modelValue", !o.value)),
          class: E([
            o.value ? "po-bg-mpao-lightblue" : "po-bg-slate-200",
            "po-relative po-inline-flex po-h-6 po-w-11 po-flex-shrink-0 po-cursor-pointer po-rounded-full po-border-2 po-border-transparent po-transition-colors po-duration-200 po-ease-in-out focus:po-outline-none focus:po-ring-2 focus:po-ring-mpao-lightblue focus:po-ring-offset-2"
          ])
        }, {
          default: D(() => [
            a("span", {
              "aria-hidden": "true",
              class: E([
                o.value ? "po-translate-x-5" : "po-translate-x-0",
                "po-pointer-events-none po-inline-block po-h-5 po-w-5 po-transform po-rounded-full po-bg-white po-shadow po-ring-0 po-transition po-duration-200 po-ease-in-out"
              ])
            }, null, 2)
          ]),
          _: 1
        }, 8, ["modelValue", "class"]),
        S(w(Sa), {
          as: "span",
          class: "po-ml-3"
        }, {
          default: D(() => [
            a("span", Gc, [
              a("span", null, $(e.label), 1),
              e.required ? (i(), c("span", Zc, "*")) : y("", !0)
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Yc = { class: "po-pt-1 po-space-y-1 po-border-r-2 po-border-slate-200 po-relative" }, Xc = ["onClick"], Qc = {
  name: "PoSectionMenu"
}, $2 = /* @__PURE__ */ Object.assign(Qc, {
  props: {
    /**
     * Current route name to highlight
     */
    currPageRoute: {
      type: String,
      default: ""
    },
    /**
     * list of menu items
     */
    menuItems: {
      type: Array,
      default: null
    }
  },
  setup(e) {
    return (t, o) => (i(), c("ul", Yc, [
      (i(!0), c(B, null, q(e.menuItems, (l) => (i(), c("li", null, [
        a("span", {
          onClick: (n) => t.$emit("link-click", l.link),
          role: "button",
          class: E([
            "po-relative po-cursor-pointer -po-right-[0.15rem] po-py-1 po-border-r-2 hover:po-border-mpao-lightblue po-transition-colors po-duration-200 po-ease-in-out po-flex po-items-center po-space-x-2",
            {
              "po-border-mpao-lightblue po-text-sm po-text-mpao-lightblue": l.link == e.currPageRoute
            },
            {
              "po-border-slate-200 po-text-sm po-text-slate-600": l.link !== e.currPageRoute
            }
          ])
        }, [
          (i(), M(de(l.icon), { class: "po-w-4 po-h-4 po-stroke-current" })),
          a("span", null, $(l.label), 1)
        ], 10, Xc)
      ]))), 256))
    ]));
  }
}), Jc = { class: "po-relative po-flex po-items-start" }, ed = { class: "po-flex po-h-5 po-items-center" }, td = ["name", "id", "checked", "disabled", "aria-describedby"], od = { class: "po-ml-3 po-text-sm" }, ld = ["for"], nd = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, sd = ["id"], ad = { class: "po-sr-only" }, rd = ["id"], id = {
  name: "PoCheckbox"
}, V2 = /* @__PURE__ */ Object.assign(id, {
  props: {
    /**
     * Model value
     */
    modelValue: {
      type: Boolean,
      default: !1
    },
    /**
     * Input label text
     */
    label: {
      type: String,
      default: ""
    },
    /**
     * Input id text
     */
    id: {
      type: String,
      default: "checkbox-0"
    },
    /**
     * Tip, description, information for the input
     */
    message: {
      type: String,
      default: null
    },
    /**
     * Error message
     */
    errorMessage: {
      type: String,
      default: null
    },
    /**
     * True or false if disabled
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * True or false if required
     */
    required: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (t, o) => (i(), c("div", null, [
      a("div", Jc, [
        a("div", ed, [
          a("input", ke({
            name: `${e.id}-field`,
            id: e.id,
            checked: e.modelValue,
            disabled: e.disabled,
            "aria-describedby": `${e.id}-description`
          }, t.$attrs, {
            onInput: o[0] || (o[0] = (l) => t.$emit("update:modelValue", l.target.checked)),
            type: "checkbox",
            class: ["po-h-4 po-w-4 po-rounded po-border-slate-300 po-text-mpao-lightblue focus:po-ring-mpao-lightblue", [{ "po-bg-slate-200": e.disabled }]]
          }), null, 16, td)
        ]),
        a("div", od, [
          a("label", {
            for: e.id,
            class: "po-font-medium po-text-slate-600 po-cursor-pointer po-select-none po-flex po-items-center po-space-x-1"
          }, [
            a("span", null, $(e.label), 1),
            e.required ? (i(), c("span", nd, "*")) : y("", !0)
          ], 8, ld),
          e.message ? (i(), c("span", {
            key: 0,
            id: `${e.id}-description`,
            class: "po-text-slate-500 po-cursor-default"
          }, [
            a("span", ad, $(e.label), 1),
            J(" " + $(e.message), 1)
          ], 8, sd)) : y("", !0)
        ])
      ]),
      e.errorMessage !== null ? (i(), c("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, $(e.errorMessage), 9, rd)) : y("", !0)
    ]));
  }
}), ud = /* @__PURE__ */ a("div", { class: "po-pb-5 po-max-w-xl" }, [
  /* @__PURE__ */ a("span", { class: "po-text-sm po-text-slate-600" }, "We're always working to improve our app, and we're excited to share the latest changes with you. We hope you enjoy these new features and improvements")
], -1), pd = { class: "po-flex po-space-x-2" }, cd = ["onClick"], dd = { class: "po-text-sm po-font-semibold po-slate-800" }, fd = { class: "po-text-xs po-text-white po-px-1 po-py-0 po-rounded-md po-bg-mpao-lightblue" }, vd = { class: "po-bg-gradient-to-t po-from-mpao-orange/20 po-via-mpao-lightblue/20 po-to-purple-500/10 -po-mb-5 -po-mx-5 po-p-5 po-pb-10" }, hd = { key: 0 }, md = { class: "po-space-y-2 po-mt-5" }, gd = { class: "po-border po-border-slate-200 po-rounded-lg po-p-3 po-bg-white" }, bd = { class: "po-flex po-items-center po-space-x-2" }, yd = { class: "po-text-mpao-lightblue po-grow po-text-lg" }, xd = { class: "po-font-semibold po-shrink-0 po-text-mpao-lightblue po-text-sm po-px-2 po-py-1 po-rounded-xl po-bg-mpao-lightblue/10" }, wd = ["innerHTML"], $d = {
  key: 0,
  class: "po-bg-white po-rounded-md po-px-4 po-py-3 po-block po-text-sm po-text-center po-text-mpao-lightblue hover:po-text-purple-600 po-cursor-pointer"
}, Vd = {
  __name: "ChangeLogModel",
  props: {
    /**
     * Chnagelog
     */
    changelog: {
      type: Array,
      default: null
    },
    showBtn: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = C(!1), o = C(0);
    return (l, n) => (i(), c(B, null, [
      e.showBtn ? (i(), c("a", {
        key: 0,
        href: "#",
        onClick: n[0] || (n[0] = re((s) => t.value = !0, ["prevent"])),
        class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
      }, "Change logs")) : y("", !0),
      S(xt, {
        show: t.value,
        onModalClosed: n[1] || (n[1] = (s) => t.value = !1),
        "modal-title": "Change Log",
        "modal-width": "sm:po-max-w-4xl",
        id: "change-log-modal"
      }, {
        content: D(() => [
          a("div", null, [
            ud,
            a("div", pd, [
              (i(!0), c(B, null, q(e.changelog, (s, r) => (i(), c("span", {
                class: E(["po-flex po-items-center po-space-x-1 po-px-4 po-py-3 po-rounded-t-xl po-cursor-pointer", [{ "po-bg-purple-500/10": o.value === r }]]),
                onClick: (u) => o.value = r
              }, [
                a("span", dd, $(s.label) + " Version", 1),
                a("span", fd, $(s.latest_version), 1)
              ], 10, cd))), 256))
            ]),
            a("div", vd, [
              (i(!0), c(B, null, q(e.changelog, (s, r) => (i(), c("div", null, [
                o.value === r ? (i(), c("div", hd, [
                  a("div", md, [
                    (i(!0), c(B, null, q(s.version_history, (u) => (i(), c("div", gd, [
                      a("span", bd, [
                        a("span", yd, $(u.date), 1),
                        a("span", xd, $(u.version), 1)
                      ]),
                      a("div", {
                        class: "po-mt-3 po-prose-sm po-prose-slate",
                        innerHTML: u.note
                      }, null, 8, wd)
                    ]))), 256)),
                    s.hasMore ? (i(), c("span", $d, "More")) : y("", !0)
                  ])
                ])) : y("", !0)
              ]))), 256))
            ])
          ])
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}, Zt = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [l, n] of t)
    o[l] = n;
  return o;
}, kd = {}, _d = {
  class: "po-h-8",
  src: "https://pension.gov.mv/asset/image/en-ccc-2020-issa.png",
  alt: "issa Certificate"
};
function Cd(e, t) {
  return i(), c("img", _d);
}
const Sd = /* @__PURE__ */ Zt(kd, [["render", Cd]]), Od = {}, Pd = {
  class: "po-h-8",
  src: "https://pension.gov.mv/asset/image/iso_logo.png",
  alt: "ISO 27001 Certificate"
};
function Ed(e, t) {
  return i(), c("img", Pd);
}
const Ld = /* @__PURE__ */ Zt(Od, [["render", Ed]]), Td = { class: "-po-m-5" }, Dd = ["src", "alt"], Cl = {
  __name: "CertificateModel",
  props: {
    src: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    logo: null
  },
  setup(e) {
    const t = C(!1);
    return (o, l) => (i(), c(B, null, [
      (i(), M(de(e.logo), {
        onClick: l[0] || (l[0] = re((n) => t.value = !0, ["prevent"])),
        class: "po-cursor-pointer",
        role: "button"
      })),
      S(xt, {
        show: t.value,
        onModalClosed: l[1] || (l[1] = (n) => t.value = !1),
        "modal-title": e.title,
        "modal-width": "sm:po-max-w-4xl",
        id: "change-log-modal"
      }, {
        content: D(() => [
          a("div", Td, [
            a("img", {
              src: e.src,
              alt: e.title
            }, null, 8, Dd)
          ])
        ]),
        _: 1
      }, 8, ["show", "modal-title"])
    ], 64));
  }
}, Ad = /* @__PURE__ */ a("div", { class: "po-prose-sm po-prose-slate po-p-5 po-opacity-8" }, [
  /* @__PURE__ */ a("h2", { class: "po-text-red-500" }, "Sample Terms and Conditions"),
  /* @__PURE__ */ a("h3", null, "1. Acceptance of Terms"),
  /* @__PURE__ */ a("p", null, " By accessing and using this web app, you agree to be bound by these terms and conditions. "),
  /* @__PURE__ */ a("h3", null, "2. User Responsibilities"),
  /* @__PURE__ */ a("p", null, " Users are responsible for maintaining the confidentiality of their account information and complying with all applicable laws. "),
  /* @__PURE__ */ a("h3", null, "3. Privacy Policy"),
  /* @__PURE__ */ a("p", null, [
    /* @__PURE__ */ J(" Our privacy policy outlines how we collect, use, and protect your personal information. Please review our "),
    /* @__PURE__ */ a("a", { href: "privacy.html" }, "Privacy Policy"),
    /* @__PURE__ */ J(" for more details. ")
  ]),
  /* @__PURE__ */ a("h3", null, "4. Intellectual Property"),
  /* @__PURE__ */ a("p", null, " All content and materials provided on this web app are protected by intellectual property laws. Unauthorized use is prohibited. "),
  /* @__PURE__ */ a("h3", null, "5. Limitation of Liability"),
  /* @__PURE__ */ a("p", null, " We are not liable for any damages or losses incurred from the use of this web app, including but not limited to, errors, omissions, or interruptions. "),
  /* @__PURE__ */ a("h3", null, "6. Modification of Terms"),
  /* @__PURE__ */ a("p", null, " We reserve the right to modify or update these terms and conditions at any time without prior notice. It is your responsibility to review them periodically. "),
  /* @__PURE__ */ a("h3", null, "7. Governing Law"),
  /* @__PURE__ */ a("p", null, " These terms and conditions shall be governed by and construed in accordance with the laws of your jurisdiction. "),
  /* @__PURE__ */ a("h3", null, "8. Contact Us"),
  /* @__PURE__ */ a("p", null, [
    /* @__PURE__ */ J(" If you have any questions or concerns about these terms and conditions, please contact us at "),
    /* @__PURE__ */ a("a", { href: "mailto:info@pension.gov.mv" }, "info@pension.gov.mv"),
    /* @__PURE__ */ J(". ")
  ])
], -1), zd = {
  __name: "ToCModel",
  setup(e) {
    const t = C(!1);
    return (o, l) => (i(), c(B, null, [
      a("a", {
        href: "#",
        onClick: l[0] || (l[0] = re((n) => t.value = !0, ["prevent"])),
        role: "button",
        class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
      }, "Terms & Conditions"),
      S(xt, {
        show: t.value,
        onModalClosed: l[1] || (l[1] = (n) => t.value = !1),
        "modal-title": "Terms & Conditions",
        "modal-width": "sm:po-max-w-3xl",
        id: "change-log-modal"
      }, {
        content: D(() => [
          Ad
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}, Bd = /* @__PURE__ */ a("div", { class: "po-prose-sm po-prose-slate po-p-5 po-opacity-80" }, [
  /* @__PURE__ */ a("h2", { class: "po-text-red-500" }, "Sample Privacy Policy"),
  /* @__PURE__ */ a("h3", null, "1. Information Collection"),
  /* @__PURE__ */ a("p", null, " We may collect personal information such as name, contact details, and pension-related data necessary for providing our services. "),
  /* @__PURE__ */ a("h3", null, "2. Use of Information"),
  /* @__PURE__ */ a("p", null, " The collected information is used for the purpose of administering pensions, processing applications, and communicating with users. "),
  /* @__PURE__ */ a("h3", null, "3. Data Security"),
  /* @__PURE__ */ a("p", null, " We implement appropriate security measures to protect personal information from unauthorized access, alteration, or disclosure. "),
  /* @__PURE__ */ a("h3", null, "4. Third-Party Disclosure"),
  /* @__PURE__ */ a("p", null, " We may share personal information with trusted third parties only to the extent necessary for pension administration purposes. "),
  /* @__PURE__ */ a("h3", null, "5. Cookies and Tracking"),
  /* @__PURE__ */ a("p", null, " We use cookies and similar technologies to enhance user experience and collect non-personal information about website usage. "),
  /* @__PURE__ */ a("h3", null, "6. Data Retention"),
  /* @__PURE__ */ a("p", null, " We retain personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law. "),
  /* @__PURE__ */ a("h3", null, "7. User Rights"),
  /* @__PURE__ */ a("p", null, " Users have the right to access, update, and delete their personal information. Please contact us to exercise these rights. "),
  /* @__PURE__ */ a("h3", null, "8. Children's Privacy"),
  /* @__PURE__ */ a("p", null, " This web app is not intended for children under the age of 13. We do not knowingly collect or store personal information from children. "),
  /* @__PURE__ */ a("h3", null, "9. Changes to Privacy Policy"),
  /* @__PURE__ */ a("p", null, " We reserve the right to modify or update this privacy policy at any time. Users will be notified of any significant changes. "),
  /* @__PURE__ */ a("h3", null, "8. Contact Us"),
  /* @__PURE__ */ a("p", null, [
    /* @__PURE__ */ J(" If you have any questions or concerns about our privacy policy, please contact us at "),
    /* @__PURE__ */ a("a", { href: "mailto:info@pension.gov.mv" }, "info@pension.gov.mv"),
    /* @__PURE__ */ J(". ")
  ])
], -1), Md = {
  __name: "PrivacyPolicyModel",
  setup(e) {
    const t = C(!1);
    return (o, l) => (i(), c(B, null, [
      a("a", {
        href: "#",
        onClick: l[0] || (l[0] = re((n) => t.value = !0, ["prevent"])),
        role: "button",
        class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
      }, "Privacy Policy"),
      S(xt, {
        show: t.value,
        onModalClosed: l[1] || (l[1] = (n) => t.value = !1),
        "modal-title": "Privacy Policy",
        "modal-width": "sm:po-max-w-3xl",
        id: "change-log-modal"
      }, {
        content: D(() => [
          Bd
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}, jd = { class: "po-grid po-gap-5 po-grid-cols-1 lg:po-grid-cols-2 po-px-6 lg:po-px-8 po-mt-10 po-pb-10" }, Nd = { class: "sm:po-flex po-items-start sm:po-space-x-5" }, Id = /* @__PURE__ */ a("svg", {
  class: "po-h-10",
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  "fill-rule": "evenodd",
  "stroke-linejoin": "round",
  "stroke-miterlimit": "2",
  "clip-rule": "evenodd",
  viewBox: "0 0 343 287"
}, [
  /* @__PURE__ */ a("path", {
    fill: "#203057",
    d: "M61.305 92.088a16.74 16.74 0 0 1-2.583.542 12.086 12.086 0 0 0-4.604 1.425L108.41 0h21.308c-22.054 9.263-22.871 36.388-23.021 46.463-.237.008-.467.017-.708.042-5.509.462-13.509 3.245-20.296 13.904-2.267 3.512-4.392 7.341-6.263 10.721l-.125.204c-6.429 11.579-10.725 18.766-18 20.754ZM261.87 71.267c0-.013-.079-.142-.092-.159-1.987-3.575-4.045-7.279-6.225-10.683-6.82-10.675-14.795-13.458-20.295-13.908a6.116 6.116 0 0 0-.755-.063c-.358-12.162-2.37-21.821-6.12-29.492C224.449 8.912 218.67 3.233 211.17 0h21.104l54.109 93.708a12.134 12.134 0 0 0-3.884-1.05c-.875-.104-1.7-.3-2.408-.487-.063-.029-.167-.067-.167-.067-7.271-1.979-11.575-9.175-18.054-20.837ZM112.871 197.965c3.809 7.767 9.363 13.342 16.538 16.588h-21L54.384 120.99c1.371.692 2.837 1.146 4.337 1.292 1.034.112 1.979.362 2.592.529 7.267 1.971 11.575 9.179 18 20.754 2.412 4.329 4.275 7.65 6.379 10.938 6.8 10.65 14.783 13.445 20.288 13.9.266.02.512.029.754.029.358 12.166 2.362 21.829 6.137 29.533Zm149.045-54.381c6.442-11.571 10.738-18.767 18.009-20.759.745-.2 1.641-.425 2.575-.529 1.25-.121 2.45-.446 3.608-.933l-53.829 93.204h-20.063c21.375-9.537 22.175-36.212 22.313-46.104.229-.013.462-.021.716-.042 5.513-.462 13.505-3.246 20.309-13.908 2.304-3.625 4.558-7.667 6.362-10.929Zm-82.546 28.807v.208c.037 12.463 5.654 19.896 15.033 19.896 13.329 0 17.767-4.317 17.767-29.808V94.903l17.433-13.47v81.254c0 .241-.108 3.041-.217 5.746l-.158 3.7c-.071 1.975-.142 3.687-.167 4.458a1.689 1.689 0 0 0-.079.383c0 .104.021.196.033.3-2.454 24.05-13.783 35.746-34.612 35.746-8.758 0-16.329-3.292-21.925-9.542a2.922 2.922 0 0 0-2.15-.945c-.825 0-1.613.358-2.15.975-5.567 6.308-12.746 9.512-21.35 9.512-22.246 0-34.05-14.842-35.104-44.121 7.871-1.337 13.466-6.258 15.471-8.325l1.87-1.433v3.546c0 25.341 5.725 29.808 17.763 29.808 13.312 0 14.921-17.183 15.117-20.629.3-5.413 4.116-9.663 8.691-9.663h.325c4.709.2 8.409 4.68 8.409 10.188Zm-68.52-37.313V42.615c0-.104.088-.579.284-1.396 1.737-27.029 13.429-40.171 35.696-40.171 8.962 0 16.75 3.405 22.512 9.821.754.871 2.3.892 3.121-.012 5.712-6.509 13.1-9.809 21.937-9.809 22.938 0 35.021 15.355 35.93 45.638-7.934 1.075-13.717 6.146-15.817 8.275l-3.125 2.408v-5.171c0-24.833-5.25-29.012-16.988-29.012-12.616 0-14.129 16.55-14.325 19.875-.304 5.937-4.437 10.417-9.608 10.417h-.221c-5.137-.23-9.162-5.055-9.162-11.009v-.183c-.034-11.971-5.371-19.1-14.254-19.1-12.946 0-16.963 4.004-16.963 29.012v68.192l-19.017 14.688Z"
  }),
  /* @__PURE__ */ a("path", {
    fill: "#ec6e25",
    d: "m165.883 91.539-15.875 12.271-15.171-11.733V67.535l31.046 24.004Zm9.441 31.844 15.884-12.288 15.195 11.763-.004 24.529-31.075-24.004Zm-64.934 39.882c-.042.014-.031.008-.014.001l-.286.016c-1.067.113-2 .171-2.784.175h-.075c-.241-.017-.462-.004-.858-.004a24.05 24.05 0 0 1-.829-.104c-.038-.013-.075-.013-.117-.013 0 0-.012 0-.054-.016 0 0-.046-.009-.088-.009-4.07-.633-10.07-3.125-15.408-11.5-1.967-3.083-3.737-6.225-6.212-10.666-5.534-9.946-9.913-17.255-16.088-21.005-.092-.045-2.221-1.379-5.375-2.245a23.775 23.775 0 0 0-1.771-.392l-1.858-.292c-.121 0-.233-.016-.554-.15-.684-.196-1.275-.433-1.713-.679a1.038 1.038 0 0 0-.25-.146l-.133-.091c-.117-.075-.233-.138-.346-.234-.208-.141-.404-.296-.604-.45-.008-.029-.042-.062-.042-.062-.571-.488-1.133-1.084-1.508-1.609-.05-.087-.1-.191-.15-.25-.129-.187-.233-.362-.367-.562l-.346-.675c-.054-.104-.116-.217-.225-.458l-.162-.392a4.5 4.5 0 0 1-.121-.308 9.748 9.748 0 0 0-.042-.092.188.188 0 0 0-.033-.1 10.976 10.976 0 0 1-.237-.817 10.23 10.23 0 0 1-.196-.85c-.038-.3-.088-.587-.125-.983a17.836 17.836 0 0 1-.054-.771c.008-.292.037-.587.066-.975.025-.308.075-.604.125-.954.063-.279.117-.546.217-.917.058-.25.129-.475.204-.7.025-.046.042-.121.042-.121.008-.025.016-.058.033-.075.067-.191.133-.366.254-.654l.463-.966.162-.25c.109-.188.225-.367.367-.596.829-1.188 1.829-2.129 3.083-2.834.188-.1.363-.2.579-.295.375-.184.863-.334 1.596-.484l.317-.071c.121-.025.233-.054.337-.054.117-.016.238-.025.438-.071.275-.029.533-.075.783-.129.404-.058 1.117-.2 1.609-.346a.998.998 0 0 0 .291-.062c1.975-.575 5.017-1.796 8.134-4.283 4.77-4.059 8.512-10.446 13.283-19.025 1.946-3.53 3.958-7.171 6.129-10.563 5.446-8.529 11.558-11.029 15.992-11.575l-.009 21.342c-.67.612-1.37 1.483-2.05 2.541-1.933 3.021-3.795 6.392-5.45 9.363l-.15.267c-3.458 6.22-7.383 13.27-12.491 19.187l-2.142 2a1.423 1.423 0 0 0-.129 1.983c.092.088.208.175.208.175l1.946 2.238c.067.062.15.125.242.204.221.246.421.517.641.771l.309.35c.012.042.121.183.137.217 4.659 5.762 8.363 12.42 11.325 17.75l.571 1.033c1.583 2.846 3.229 5.787 4.983 8.529a14.943 14.943 0 0 0 1.667 2.171c.504.429 1.35.967 2.563.967 1.166 0 2.375-.534 3.483-1.488.062-.037.225-.158.258-.187l1.592-1.538 24.154-18.529 8.271-6.479c.083-.063.154-.134.237-.229l71.888-55.605c1.787-1.808 6.662-6.125 13.142-6.958.25 0 .991-.029 1.766-.075l.671-.017c.583-.033 1.1-.054 1.317-.054 4.387.371 10.812 2.684 16.541 11.634 2.184 3.45 4.317 7.27 6.205 10.662 5.458 9.846 9.791 17.096 15.758 20.796.079.087.179.154.258.221 1.663 1.021 3.404 1.787 5.159 2.246.133.041.258.041.295.02.35.084.73.175 1.121.271.054.009.129.042.179.042.013 0 .15.021.159.021.475.087.958.162 1.491.225 4.367.454 7.767 4.712 7.884 9.871-.15 5.179-3.55 9.42-7.896 9.883-.854.096-3.233.417-4.15.654-9.354 3.158-13.879 11.442-18.667 20.229-.529.954-1.046 1.917-1.591 2.896-1.884 3.383-4 7.208-6.2 10.663-5.45 8.512-11.546 11.041-15.988 11.587v-21.337c.658-.584 1.358-1.459 2.054-2.542 1.967-3.092 3.804-6.417 5.425-9.35l.125-.196c3.029-5.454 9.467-15.325 14.596-21.762a1.419 1.419 0 0 0-.05-1.855c-.521-.558-1.146-1.283-1.829-2.07a1.192 1.192 0 0 0-.488-.346 60.342 60.342 0 0 1-3.341-4.304c-.113-.146-.204-.275-.275-.371 0 0-.067-.138-.088-.167-3.329-4.721-6.208-9.908-8.546-14.104l-.15-.279c-1.266-2.284-2.625-4.584-3.895-6.738l-1.463-2.487c-1.104-1.854-2.487-2.813-4.129-2.813-.596 0-1.138.142-1.604.296l-.392.154-20.537 15.563-43.45 33.587-39.988 31.125a1.463 1.463 0 0 0-.683.304l-3.113 2.417s-.146.125-.262.229c-1.692 1.717-6.554 5.909-12.904 6.929Z"
  }),
  /* @__PURE__ */ a("path", {
    fill: "#203057",
    d: "M9.142 250.096c8.762 0 12.862 3.154 12.862 10.838v3.341c0 7.492-4.242 10.98-12.862 10.98H6.646v11.116H0v-36.275h9.142Zm0 18.892c4.708 0 6.262-1.604 6.262-5.042v-2.683c0-3.442-1.129-5.233-6.171-5.233H6.596v12.958h2.546Zm39.011-18.892v5.654h-14.37v9.325h12.25v5.842h-12.25v9.567h15.033v5.937H27.283v-36.325h20.87Zm28.511 36.277h-6.313l-10.65-22.992.567 13.758v9.234h-6.454v-36.23h6.454l10.646 23.888-.704-15.313v-8.575h6.454v36.23Zm17.293-30.764c-3.579 0-5.042 1.129-5.042 4.571 0 4.566 3.63 4.191 9.142 5.041 4.192.654 8.196 2.354 8.196 9.609 0 8.383-3.629 11.92-12.342 11.92-9.046 0-11.921-4.383-11.921-10.225h6.546c.146 2.78 1.371 4.288 5.513 4.288 3.912 0 5.704-1.65 5.704-5.746 0-4.287-5.088-4.287-8.954-4.808-4.096-.517-8.429-2.542-8.429-10.034 0-6.783 4.141-10.316 11.587-10.316 6.55 0 10.883 2.4 11.496 9.654h-6.55c-.188-3.063-1.792-3.954-4.946-3.954Zm17.716-5.465h6.55v36.275h-6.55v-36.275Zm12.631 25.722v-15.358c0-7.68 3.346-10.838 12.108-10.838 8.763 0 12.392 3.158 12.392 10.838v15.358c0 7.492-3.771 10.837-12.392 10.837-8.621 0-12.108-3.345-12.108-10.837Zm18-.329v-14.7c0-3.296-.85-5.417-5.892-5.417-4.712 0-5.608 2.121-5.608 5.417v14.7c0 3.441.896 5.416 5.608 5.416 4.713 0 5.892-1.975 5.892-5.416Zm35.526 10.836h-6.313l-10.65-22.992.567 13.758v9.234h-6.454v-36.23h6.454l10.646 23.888-.704-15.313v-8.575h6.454v36.23Zm17.861-10.507v-15.358c0-7.68 3.346-10.838 12.108-10.838 8.763 0 12.392 3.158 12.392 10.838v15.358c0 7.492-3.771 10.837-12.392 10.837-8.621 0-12.108-3.345-12.108-10.837Zm18-.329v-14.7c0-3.296-.85-5.417-5.892-5.417-4.712 0-5.608 2.121-5.608 5.417v14.7c0 3.441.896 5.416 5.608 5.416 4.713 0 5.892-1.975 5.892-5.416Zm33.925-19.506H232.82v9.046h12.533v5.891H232.82v15.45h-6.454v-36.32h21.25v5.933Zm26.007 0h-14.791v9.046h12.533v5.891h-12.533v15.45h-6.455v-36.32h21.246v5.933Zm4.809-5.887h6.55v36.275h-6.55v-36.275Zm37.133 25.015c0 7.962-3.771 11.308-12.392 11.308-8.62 0-12.108-3.346-12.108-10.837v-14.746c0-7.679 3.346-10.838 12.108-10.838 8.763 0 12.392 3.204 12.392 11.263h-6.5c0-3.534-.85-5.513-5.892-5.513-4.712 0-5.608 1.979-5.608 5.417V275.3c0 3.442.896 5.421 5.608 5.421 4.713 0 5.892-1.979 5.892-5.562h6.5Zm26.243-25.063v5.654h-14.37v9.325h12.25v5.842h-12.25v9.567h15.033v5.937h-21.533v-36.325h20.87Z"
  })
], -1), Rd = { class: "po-mt-5 sm:po-mt-0" }, Fd = /* @__PURE__ */ a("p", { class: "-po-mt-1 po-text-xs po-text-slate-500" }, " 8th Floor, Allied Building , Chaandhanee Magu, Malé, 20156, Maldives ", -1), Hd = { class: "po-mt-1 po-text-xs po-text-slate-500" }, qd = { class: "po-mt-1 po-text-xs po-text-slate-500 po-flex -po-mb-2 po-flex-wrap" }, Wd = {
  href: "https://www.pension.gov.mv",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, Ud = /* @__PURE__ */ a("span", null, "www.pension.gov.mv", -1), Gd = {
  href: "mailto:info@pension.gov.mv",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, Zd = /* @__PURE__ */ a("span", null, "info@pension.gov.mv", -1), Kd = {
  href: "tel:1441",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, Yd = /* @__PURE__ */ a("span", null, "1441", -1), Xd = { class: "po-flex lg:po-items-end po-flex-col" }, Qd = { class: "-po-mt-1 po-text-xs po-text-slate-500 po-flex -po-mb-2 po-flex-wrap" }, Jd = { class: "po-flex po-space-x-2 po-mt-3 lg:po-justify-end" }, e1 = {
  name: "PoFooter"
}, k2 = /* @__PURE__ */ Object.assign(e1, {
  props: {
    /**
     * Chnagelog
     */
    changelog: {
      type: Array,
      default: null
    }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, l) => (i(), c("div", null, [
      a("section", jd, [
        a("div", Nd, [
          Id,
          a("div", Rd, [
            Fd,
            a("p", Hd, " © " + $(new Date().getFullYear()) + " Pension Office, All Rights Reserved. ", 1),
            a("p", qd, [
              a("a", Wd, [
                S(w(Bu), { class: "po-w-3 po-h-3 po-fill-current" }),
                Ud
              ]),
              a("a", Gd, [
                S(w(Au), { class: "po-w-3 po-h-3 po-fill-current" }),
                Zd
              ]),
              a("a", Kd, [
                S(w(Mu), { class: "po-w-3 po-h-3 po-fill-current" }),
                Yd
              ])
            ])
          ])
        ]),
        a("div", Xd, [
          a("nav", Qd, [
            S(Vd, {
              "show-btn": e.changelog !== null,
              changelog: e.changelog
            }, null, 8, ["show-btn", "changelog"]),
            S(zd),
            S(Md)
          ]),
          a("div", Jd, [
            S(Cl, {
              logo: Ld,
              title: "ISO/IEC 27001:2013 Certificate",
              src: ""
            }),
            S(Cl, {
              logo: Sd,
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
}, n1 = { class: "po-text-sm po-text-green-700" }, s1 = {
  name: "PoFormStatusMessage"
}, _2 = /* @__PURE__ */ Object.assign(s1, {
  props: {
    /**
     * If it's an error message, by default it's a success message
     */
    isError: {
      type: Boolean,
      default: !1
    },
    /**
     * The message to display
     */
    message: {
      type: String,
      default: "This is a form status"
    },
    /**
     * A list of errors
     */
    errorList: {
      type: Array,
      default: null
    }
  },
  setup(e) {
    return (t, o) => e.isError ? (i(), c("div", {
      key: 0,
      class: E(["po-flex po-space-x-3 po-p-3 po-bg-red-50 po-rounded-md", [
        { "po-items-start": e.errorList !== null },
        { "po-items-center": e.errorList === null }
      ]])
    }, [
      S(w(no), { class: "po-shrink-0 po-w-6 po-stroke-red-600" }),
      a("div", null, [
        a("span", t1, $(e.message), 1),
        e.errorList !== null ? (i(), c("ul", o1, [
          (i(!0), c(B, null, q(e.errorList, (l) => (i(), c("li", null, $(l), 1))), 256))
        ])) : y("", !0)
      ])
    ], 2)) : (i(), c("div", l1, [
      S(w(is), { class: "po-w-6 po-stroke-green-600" }),
      a("div", null, [
        a("span", n1, $(e.message), 1)
      ])
    ]));
  }
}), a1 = {
  key: 0,
  class: "po-text-lg po-text-red-400 po-font-semibold"
}, r1 = {
  key: 0,
  class: "po-mt-1 po-flex -po-mb-3 po-flex-wrap"
}, i1 = { class: "po-flex po-flex-1" }, u1 = { class: "po-flex po-flex-col" }, p1 = ["id"], c1 = ["id"], d1 = {
  name: "PoRadioInput"
}, C2 = /* @__PURE__ */ Object.assign(d1, {
  props: {
    /**
     * Model value
     */
    modelValue: {
      type: [String, Number],
      requred: !0
    },
    /**
     * List of options for raido
     */
    options: {
      type: Array,
      default: null
    },
    /**
     * Label text
     */
    label: {
      type: String,
      default: ""
    },
    /**
     * Input display vertifal (default) or horizontal
     */
    display: {
      type: String,
      default: "vertical"
    },
    /**
     * True or false if required
     */
    required: {
      type: Boolean,
      default: !1
    },
    /**
     * Error message
     */
    errorMessage: {
      type: String,
      default: null
    },
    /**
     * Tip, description, information for the input
     */
    message: {
      type: String,
      default: null
    }
  },
  emits: ["selected", "unSelected", "update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, l = C();
    l.value = o.modelValue, yo(() => {
      l.value = o.modelValue;
    }), X(l, () => {
      t("update:modelValue", l.value), t("selected", l.value);
    });
    const { errorMessage: n } = xe(o), s = C();
    return X(n, (r, u) => {
      s.value = n.value !== null && n.value !== "";
    }), (r, u) => (i(), M(w(wa), {
      modelValue: l.value,
      "onUpdate:modelValue": u[0] || (u[0] = (p) => l.value = p),
      class: E([{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }])
    }, {
      default: D(() => [
        S(w(pl), { class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700" }, {
          default: D(() => [
            a("span", null, $(e.label), 1),
            e.required ? (i(), c("span", a1, "*")) : y("", !0)
          ]),
          _: 1
        }),
        e.options !== null ? (i(), c("div", r1, [
          (i(!0), c(B, null, q(e.options, (p) => (i(), M(w(Va), {
            as: "template",
            key: p.id,
            value: p.id
          }, {
            default: D(({ checked: f, active: d }) => [
              a("div", {
                class: E([
                  "po-transition-colors po-duration-100 po-ease-out po-mr-3",
                  "",
                  "",
                  "po-mb-3 po-pt-[0.13rem] po-relative po-flex po-cursor-pointer focus:po-outline-none"
                ])
              }, [
                a("span", {
                  class: E(["po-w-5 po-h-5 po-rounded-full po-border po-mr-2 po-flex po-items-center po-justify-center", [
                    "",
                    f ? "po-border-mpao-lightblue" : "po-border-slate-400"
                  ]])
                }, [
                  a("span", {
                    class: E(["po-w-3 po-h-3 po-rounded-full", [
                      "",
                      f ? "po-bg-mpao-lightblue" : "po-bg-transparent"
                    ]])
                  }, null, 2)
                ], 2),
                a("span", i1, [
                  a("span", u1, [
                    S(w(pl), {
                      as: "span",
                      class: "po-block po-text-sm po-font-medium po-text-gray-900"
                    }, {
                      default: D(() => [
                        J($(p.title), 1)
                      ]),
                      _: 2
                    }, 1024),
                    p.description ? (i(), M(w(ka), {
                      key: 0,
                      as: "span",
                      class: "po-mt-1 po-flex po-items-center po-text-sm po-text-gray-500"
                    }, {
                      default: D(() => [
                        J($(p.description), 1)
                      ]),
                      _: 2
                    }, 1024)) : y("", !0)
                  ])
                ])
              ], 2)
            ]),
            _: 2
          }, 1032, ["value"]))), 128))
        ])) : y("", !0),
        a("div", null, [
          e.message !== null ? (i(), c("p", {
            key: 0,
            class: "po-mt-2 po-text-sm po-text-slate-500",
            id: `${r.id}-description`
          }, $(e.message), 9, p1)) : y("", !0),
          s.value && w(n) !== null ? (i(), c("p", {
            key: 1,
            class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
            id: `${r.id}-error`
          }, [
            S(w(fn), { class: "po-fill-current po-w-4 po-mt-[0.2rem] po-shrink-0" }),
            a("span", null, $(w(n)), 1)
          ], 8, c1)) : y("", !0)
        ])
      ]),
      _: 1
    }, 8, ["modelValue", "class"]));
  }
}), f1 = { class: "po-bg-white po-relative po-group po-rounded-xl focus-within:po-ring-2 focus-within:po-ring-inset focus-within:po-ring-indigo-500" }, v1 = { class: "po-block po-p-4 po-transition-colors po-duration-75 po-ease-linear" }, h1 = { class: "po-flex po-items-start po-space-x-2" }, m1 = { class: "po-flex po-items-start po-space-x-1" }, g1 = { class: "po-block po-text-2xl po-font-light po-text-slate-600" }, b1 = {
  key: 0,
  class: "po-text-sm po-text-green-500 po-font-medium po-pt-1"
}, y1 = { class: "po-text-sm po-tracking-wide po-text-slate-500" }, x1 = {
  name: "PoStatsBlock"
}, S2 = /* @__PURE__ */ Object.assign(x1, {
  props: {
    /**
     * Items
     */
    items: {
      type: Array,
      default: null
    },
    /**
     * tailwind grid cols default: grid-cols-1 lg:grid-cols-3
     */
    numberOfCols: {
      type: String,
      default: "po-grid-cols-1 lg:po-grid-cols-3"
    }
  },
  setup(e) {
    return (t, o) => (i(), c("div", {
      class: E(["po-grid po-gap-5", e.numberOfCols])
    }, [
      (i(!0), c(B, null, q(e.items, (l) => (i(), c("div", f1, [
        a("span", v1, [
          a("div", h1, [
            a("div", null, [
              a("span", {
                class: E([
                  "po-inline-flex po-p-2 po-rounded-md",
                  l.bgColor,
                  l.iconColor
                ])
              }, [
                (i(), M(de(l.icon), { class: "po-w-4 po-h-4" }))
              ], 2)
            ]),
            a("div", null, [
              a("div", m1, [
                a("span", g1, $(l.value), 1),
                l.diff ? (i(), c("span", b1, $(l.diff), 1)) : y("", !0)
              ]),
              a("h4", y1, $(l.label), 1)
            ])
          ])
        ])
      ]))), 256))
    ], 2));
  }
}), w1 = {
  key: 0,
  class: "po-flex po-space-x-3 po-items-start"
}, $1 = { class: "po-flex po-items-center po-space-x-2" }, V1 = ["datetime"], k1 = { class: "po-text-sm po-font-medium po-text-slate-600" }, _1 = ["datetime"], C1 = { class: "flex" }, S1 = { class: "po-flex po-pt-3 po-flex-wrap po-max-w-sm" }, O1 = ["onClick"], P1 = {
  key: 1,
  class: "po-w-full po-text-center"
}, E1 = { class: "po-inline-block po-text-sm po-italic po-text-slate-500" }, L1 = /* @__PURE__ */ a("span", { class: "po-text-lg po-text-slate-300 po-px-3 po-inline-block" }, "—", -1), T1 = ["datetime"], D1 = {
  name: "PoChatLogItem"
}, O2 = /* @__PURE__ */ Object.assign(D1, {
  props: {
    /**
     * Model value
     */
    item: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    return (t, o) => (i(), c("li", {
      class: E([
        "po-flex po-px-5",
        { "po-justify-end po-items-end po-flex-col": e.item.type === "first" }
      ])
    }, [
      e.item.type !== "message" ? (i(), c("div", w1, [
        e.item.type !== "first" && e.item.avatar !== "" ? (i(), c("div", {
          key: 0,
          class: "po-shrink-0 po-w-8 po-h-8 po-rounded-full po-p-1 po-bg-contain po-bg-slate-100",
          style: Dt({ "background-image": `url(${e.item.avatar})` })
        }, null, 4)) : y("", !0),
        a("div", {
          class: E([
            { "po-pt-1": e.item.type !== "first" },
            {
              "po-flex po-justify-end po-items-end po-flex-col": e.item.type === "first"
            }
          ])
        }, [
          a("span", $1, [
            e.item.type === "first" ? (i(), c("time", {
              key: 0,
              datetime: e.item.time,
              class: "po-text-xs po-text-slate-400"
            }, $(e.item.time_human), 9, V1)) : y("", !0),
            a("span", k1, $(e.item.name), 1),
            e.item.type === "second" ? (i(), c("time", {
              key: 1,
              datetime: e.item.time,
              class: "po-text-xs po-text-slate-400"
            }, $(e.item.time_human), 9, _1)) : y("", !0)
          ]),
          a("div", {
            class: E([
              "po-mt-2 po-space-y-1",
              {
                "po-flex po-justify-end po-items-end po-flex-col": e.item.type === "first"
              }
            ])
          }, [
            K(t.$slots, "message", {}, () => [
              (i(!0), c(B, null, q(e.item.message, (l) => (i(), c("div", C1, [
                a("p", {
                  class: E([
                    "po-text-sm po-rounded-xl po-px-4 po-py-2",
                    {
                      "po-bg-slate-100 po-text-slate-600": e.item.type !== "first"
                    },
                    {
                      "po-bg-mpao-lightblue po-text-sky-50": e.item.type === "first"
                    }
                  ])
                }, $(l), 3)
              ]))), 256))
            ]),
            a("div", S1, [
              (i(!0), c(B, null, q(e.item.actions, (l) => (i(), c("button", {
                onClick: (n) => t.$emit("button-click", l.label),
                class: "po-appearance-none po-border po-border-mpao-lightblue po-bg-white hover:po-bg-mpao-lightblue po-px-3 po-py-1 po-mb-2 po-mr-2 po-rounded-lg po-text-slate-500 hover:po-text-sky-100 po-transition-colors po-duration-150 po-ease-in-out po-text-sm po-ring-0 po-outline-none"
              }, $(l.label), 9, O1))), 256))
            ])
          ], 2)
        ], 2)
      ])) : y("", !0),
      e.item.type === "message" ? (i(), c("div", P1, [
        (i(!0), c(B, null, q(e.item.message, (l) => (i(), c("p", E1, [
          J($(l) + " ", 1),
          L1,
          a("time", {
            datetime: e.item.time,
            class: "po-text-xs po-text-slate-400 po-inline-block"
          }, $(e.item.time_human), 9, T1)
        ]))), 256))
      ])) : y("", !0)
    ], 2));
  }
}), A1 = {
  key: 0,
  class: "po-pointer-events-auto po-w-full po-max-w-sm po-overflow-hidden po-rounded-lg po-bg-mpao-lightblue po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5"
}, z1 = { class: "po-p-4" }, B1 = { class: "po-flex po-items-start" }, M1 = { class: "po-flex-shrink-0" }, j1 = { class: "po-ml-3 po-w-0 po-flex-1 po-pt-0.5" }, N1 = { class: "po-text-sm po-font-medium po-text-sky-100" }, I1 = { class: "po-mt-1 po-text-sm po-text-sky-300" }, R1 = { class: "po-mt-3 po-flex po-space-x-4" }, F1 = { class: "po-ml-4 po-flex po-flex-shrink-0" }, H1 = /* @__PURE__ */ a("span", { class: "po-sr-only" }, "Close", -1), q1 = {
  name: "PoNotification"
}, P2 = /* @__PURE__ */ Object.assign(q1, {
  props: {
    /**
     * Show hide notification
     */
    show: {
      type: Boolean,
      default: !1
    },
    /**
     * Notification label
     */
    label: {
      type: String,
      default: ""
    },
    /**
     * Notification text
     */
    text: {
      type: String,
      default: ""
    },
    /**
     * Notification text
     */
    buttonLabel: {
      type: String,
      default: "Ok"
    }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    const o = e, { show: l } = xe(o), n = C(!1);
    X(l, () => {
      n.value = !1, setTimeout(() => {
        n.value = !0;
      }, 100);
    });
    const s = C(!1);
    return X(n, () => {
      s.value = !1, setTimeout(() => {
        s.value = !0;
      }, 200);
    }), (r, u) => n.value ? (i(), M(ft, {
      key: 0,
      to: "#po-notifications-alert"
    }, [
      S(Me, {
        "enter-active-class": "po-transform po-ease-out po-duration-300 po-transition",
        "enter-from-class": "po-translate-y-2 po-opacity-0 sm:po-translate-y-0 sm:po-translate-x-2",
        "enter-to-class": "po-translate-y-0 po-opacity-100 sm:po-translate-x-0",
        "leave-active-class": "po-transition po-ease-in po-duration-100",
        "leave-from-class": "po-opacity-100",
        "leave-to-class": "po-opacity-0"
      }, {
        default: D(() => [
          s.value ? (i(), c("div", A1, [
            a("div", z1, [
              a("div", B1, [
                a("div", M1, [
                  K(r.$slots, "icon")
                ]),
                a("div", j1, [
                  a("p", N1, $(e.label), 1),
                  a("p", I1, $(e.text), 1),
                  a("div", R1, [
                    a("button", {
                      onClick: u[0] || (u[0] = (p) => r.$emit("button-click", e.buttonLabel)),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-100 hover:po-text-sky-200 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, $(e.buttonLabel), 1),
                    a("button", {
                      onClick: u[1] || (u[1] = (p) => n.value = !1),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-300 hover:po-text-sky-500 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, " Dismiss ")
                  ])
                ]),
                a("div", F1, [
                  a("button", {
                    type: "button",
                    onClick: u[2] || (u[2] = (p) => n.value = !1),
                    class: "po-inline-flex po-rounded-md po-bg-mpao-lightblue po-text-sky-500 hover:po-text-sky-300 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                  }, [
                    H1,
                    S(w(vn), {
                      class: "po-h-5 po-w-5",
                      "aria-hidden": "true"
                    })
                  ])
                ])
              ])
            ])
          ])) : y("", !0)
        ]),
        _: 3
      })
    ])) : y("", !0);
  }
}), W1 = /* @__PURE__ */ a("div", { class: "po-fixed po-inset-0" }, null, -1), U1 = { class: "po-absolute po-inset-0 po-overflow-hidden" }, G1 = { class: "po-pointer-events-none po-fixed po-inset-y-0 po-right-0 po-flex po-max-w-full po-pl-10" }, Z1 = { class: "po-flex po-h-full po-flex-col po-overflow-y-auto po-bg-white po-shadow-xl" }, K1 = { class: "po-bg-slate-50 po-py-6 po-px-4 sm:po-px-6" }, Y1 = { class: "po-flex po-items-center po-justify-between" }, X1 = { class: "po-ml-3 po-flex po-h-7 po-items-center" }, Q1 = /* @__PURE__ */ a("span", { class: "po-sr-only" }, "Close panel", -1), J1 = {
  key: 0,
  class: "po-mt-1"
}, e0 = { class: "po-text-sm po-text-slate-500" }, t0 = {
  key: 0,
  class: "po-bg-slate-50 po-rounded-b-xl po-shrink-0"
}, o0 = {
  name: "PoSlideover"
}, E2 = /* @__PURE__ */ Object.assign(o0, {
  props: {
    /**
     * Slideover label/title
     */
    label: {
      type: String,
      default: null
    },
    /**
     * Slideover description. Optional
     */
    description: {
      type: String,
      default: null
    },
    /**
     * Pass model Open/Close to the component
     */
    show: {
      type: Boolean,
      default: !1
    },
    /**
     * Set width of the slideover. default:max-w-lg
     */
    maxWidth: {
      type: String,
      default: "po-max-w-lg"
    },
    /**
     * Add custom backgorund color to panel
     */
    bgColor: {
      type: String,
      default: ""
    },
    /**
     * screen opcaity. default is bg-opacity-10
     */
    screenOpacity: {
      type: String,
      default: "po-bg-opacity-10"
    }
  },
  emits: ["slideover-closed"],
  setup(e, { emit: t }) {
    const o = e, { show: l } = xe(o), n = C(!1);
    X(l, () => {
      n.value = l.value;
    });
    function s() {
      n.value = !1, t("slideover-closed", !0);
    }
    return (r, u) => (i(), M(w(gt), {
      as: "template",
      show: n.value
    }, {
      default: D(() => [
        S(w(Nt), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: s
        }, {
          default: D(() => [
            W1,
            a("div", {
              class: E(["po-fixed po-inset-0 po-overflow-hidden po-bg-black", e.screenOpacity])
            }, [
              a("div", U1, [
                a("div", G1, [
                  S(w(Ne), {
                    as: "template",
                    enter: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "enter-from": "po-translate-x-full",
                    "enter-to": "po-translate-x-0",
                    leave: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "leave-from": "po-translate-x-0",
                    "leave-to": "po-translate-x-full"
                  }, {
                    default: D(() => [
                      S(w(It), {
                        class: E([e.maxWidth, "po-pointer-events-auto po-w-screen"])
                      }, {
                        default: D(() => [
                          a("div", Z1, [
                            a("div", K1, [
                              a("div", Y1, [
                                S(w(Yl), { class: "po-text-lg po-font-medium po-text-slate-600" }, {
                                  default: D(() => [
                                    J($(e.label), 1)
                                  ]),
                                  _: 1
                                }),
                                a("div", X1, [
                                  a("button", {
                                    type: "button",
                                    class: "po-rounded-md po-text-slate-500 hover:po-text-mpao-lightblue focus:po-outline-none focus:po-ring-2 focus:po-ring-white",
                                    onClick: s
                                  }, [
                                    Q1,
                                    S(w(vt), {
                                      class: "po-h-6 po-w-6",
                                      "aria-hidden": "true"
                                    })
                                  ])
                                ])
                              ]),
                              e.description ? (i(), c("div", J1, [
                                a("p", e0, $(e.description), 1)
                              ])) : y("", !0)
                            ]),
                            a("div", {
                              class: E([e.bgColor, "po-relative po-grow po-pt-6 po-px-4 sm:po-px-6"])
                            }, [
                              K(r.$slots, "content")
                            ], 2),
                            r.$slots.footer ? (i(), c("div", t0, [
                              K(r.$slots, "footer")
                            ])) : y("", !0)
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
}), l0 = /* @__PURE__ */ a("div", { class: "po-fixed po-inset-0 po-bg-gray-500 po-bg-opacity-25 po-transition-opacity" }, null, -1), n0 = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto po-p-4 sm:po-p-6 md:po-p-20" }, s0 = { class: "po-relative" }, a0 = {
  key: 0,
  class: "po-max-h-96 scroll-py-3 po-overflow-y-auto po-p-3"
}, r0 = {
  name: "PoCommandPalette"
}, L2 = /* @__PURE__ */ Object.assign(r0, {
  props: {
    /**
     * Pass model Open/Close to the component
     */
    show: {
      type: Boolean,
      default: !1
    },
    /**
     * Show / hide content
     */
    showContent: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    const t = e, o = C(""), { show: l } = xe(t), n = C(!1);
    X(l, () => {
      n.value = !1, setTimeout(() => {
        n.value = !0;
      }, 100);
    });
    function s(r) {
      r.ctrlKey && r.key === "b" && (n.value = !0);
    }
    return U(() => {
      window.addEventListener("keyup", s);
    }), At(() => {
      window.removeEventListener("keyup", s);
    }), (r, u) => (i(), M(w(gt), {
      show: n.value,
      as: "template",
      onAfterLeave: u[2] || (u[2] = (p) => o.value = ""),
      appear: ""
    }, {
      default: D(() => [
        S(w(Nt), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: u[1] || (u[1] = (p) => n.value = !1)
        }, {
          default: D(() => [
            S(w(Ne), {
              as: "template",
              enter: "po-ease-out po-duration-300",
              "enter-from": "po-opacity-0",
              "enter-to": "po-opacity-100",
              leave: "po-ease-in po-duration-200",
              "leave-from": "po-opacity-100",
              "leave-to": "po-opacity-0"
            }, {
              default: D(() => [
                l0
              ]),
              _: 1
            }),
            a("div", n0, [
              S(w(Ne), {
                as: "template",
                enter: "po-ease-out po-duration-300",
                "enter-from": "po-opacity-0 po-scale-95",
                "enter-to": "po-opacity-100 po-scale-100",
                leave: "po-ease-in po-duration-200",
                "leave-from": "po-opacity-100 po-scale-100",
                "leave-to": "po-opacity-0 po-scale-95"
              }, {
                default: D(() => [
                  S(w(It), { class: "po-mx-auto po-max-w-xl po-transform po-divide-y po-divide-gray-100 po-overflow-hidden po-rounded-xl po-bg-white po-shadow-2xl po-ring-1 po-ring-black po-ring-opacity-5 po-transition-all" }, {
                    default: D(() => [
                      a("div", s0, [
                        S(w(Dr), {
                          class: "po-pointer-events-none po-absolute po-top-3.5 po-left-4 po-h-5 po-w-5 po-text-gray-400",
                          "aria-hidden": "true"
                        }),
                        a("input", {
                          type: "text",
                          name: "",
                          class: "po-h-12 po-w-full po-border-0 po-bg-transparent po-pl-11 po-pr-4 po-text-gray-800 po-placeholder-gray-400 focus:po-ring-0 sm:po-text-sm",
                          placeholder: "Search...",
                          onChange: u[0] || (u[0] = (p) => o.value = p.target.value)
                        }, null, 32)
                      ]),
                      e.showContent ? (i(), c("div", a0, [
                        K(r.$slots, "content")
                      ])) : y("", !0)
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
}), i0 = /* @__PURE__ */ a("div", { class: "po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity" }, null, -1), u0 = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto" }, p0 = { class: "po-flex po-min-h-full po-items-start po-justify-center po-p-4 po-text-center sm:po-p-0" }, c0 = { class: "po-p-5" }, d0 = { class: "po-text-center po-space-y-3" }, f0 = { key: 1 }, v0 = { class: "po-text-sm po-text-gray-600" }, h0 = { class: "po-border-t po-border-slate-200 po-flex po-divide-x po-divide-slate-200" }, m0 = {
  name: "PoAlert"
}, T2 = /* @__PURE__ */ Object.assign(m0, {
  props: {
    /**
     * Alert cancel button label
     */
    cancelBtnLabel: {
      type: String,
      default: "Cancel"
    },
    /**
     * Alert ok button label
     */
    okBtnLabel: {
      type: String,
      default: "Ok"
    },
    /**
     * Alert Title
     */
    alertTitle: {
      type: String,
      default: ""
    },
    /**
     * Alert description text
     */
    alertDescription: {
      type: String,
      default: ""
    },
    /**
     * Pass model Open/Close to the component
     */
    show: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["alert-closed", "button-click", "confirm", "cancel"],
  setup(e, { emit: t }) {
    const o = e, { show: l } = xe(o), n = C(!1);
    X(l, () => {
      n.value = l.value;
    });
    function s() {
      n.value = !1, t("alert-closed", !0);
    }
    return (r, u) => (i(), M(w(gt), {
      as: "template",
      show: n.value
    }, {
      default: D(() => [
        S(w(Nt), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: s
        }, {
          default: D(() => [
            S(w(Ne), {
              as: "template",
              enter: "po-ease-out po-duration-300",
              "enter-from": "po-opacity-0",
              "enter-to": "po-opacity-100",
              leave: "po-ease-in po-duration-200",
              "leave-from": "po-opacity-100",
              "leave-to": "po-opacity-0"
            }, {
              default: D(() => [
                i0
              ]),
              _: 1
            }),
            a("div", u0, [
              a("div", p0, [
                S(w(Ne), {
                  as: "template",
                  enter: "po-ease-out po-duration-300",
                  "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                  "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                  leave: "po-ease-in po-duration-200",
                  "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                  "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                }, {
                  default: D(() => [
                    S(w(It), { class: "po-relative po-transform po-overflow-hidden po-rounded-lg po-bg-white po-text-left po-shadow-xl po-transition-all sm:po-my-8 sm:po-w-full sm:po-max-w-sm" }, {
                      default: D(() => [
                        a("div", c0, [
                          a("div", d0, [
                            e.alertTitle !== "" ? (i(), M(w(Yl), {
                              key: 0,
                              as: "h3",
                              class: "po-text-lg po-font-medium po-leading-6 po-text-gray-900"
                            }, {
                              default: D(() => [
                                J($(e.alertTitle), 1)
                              ]),
                              _: 1
                            })) : y("", !0),
                            e.alertDescription !== "" ? (i(), c("div", f0, [
                              a("p", v0, $(e.alertDescription), 1)
                            ])) : y("", !0)
                          ])
                        ]),
                        a("div", h0, [
                          a("button", {
                            onClick: u[0] || (u[0] = (p) => {
                              r.$emit("cancel", !0), s();
                            }),
                            class: "po-text-sm po-bg-white po-text-slate-500 hover:po-bg-slate-50 po-transition-colors po-duration-100 po-ease-out po-font-medium po-py-3 po-px-5 po-w-1/2 focus:po-ring-0"
                          }, $(e.cancelBtnLabel), 1),
                          a("button", {
                            onClick: u[1] || (u[1] = (p) => {
                              r.$emit("confirm", !0), r.$emit("button-click", "ok"), s();
                            }),
                            class: "po-text-sm po-bg-white po-text-mpao-lightblue hover:po-bg-slate-50 po-transition-colors po-duration-100 po-ease-out po-font-medium po-py-3 po-px-5 po-w-1/2 focus:po-ring-0"
                          }, $(e.okBtnLabel), 1)
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
}, b0 = /* @__PURE__ */ a("span", {
  class: "po-absolute po-top-0 po-left-1 po--ml-px po-h-[calc(100%-7px)] po-w-0.5 po-bg-gray-200",
  "aria-hidden": "true"
}, null, -1), y0 = { class: "po-relative po-space-y-5" }, x0 = { class: "po-flex po-space-x-2 po-items-start" }, w0 = { class: "log-item" }, $0 = { key: 0 }, V0 = {
  key: 0,
  class: "po-text-slate-500 po-text-xs"
}, k0 = {
  key: 1,
  class: "po-text-center po-py-10"
}, _0 = { class: "po-text-sm po-text-slate-500" }, C0 = {
  name: "PoLogs"
}, D2 = /* @__PURE__ */ Object.assign(C0, {
  props: {
    /**
     * list of items
     */
    items: {
      type: Array,
      default: null
    },
    /**
     * list of items
     */
    emptyLabel: {
      type: String,
      default: "No logs to display."
    }
  },
  setup(e) {
    return (t, o) => (i(), c("div", null, [
      e.items && e.items.length > 0 ? (i(), c("div", g0, [
        b0,
        a("div", y0, [
          (i(!0), c(B, null, q(e.items, (l, n) => (i(), c("div", x0, [
            a("p", {
              class: E([
                "po-rounded-full po-w-2 po-h-2 border-1 po-border-white po-shrink-0",
                { "po-bg-orange-400": n !== e.items.length - 1 },
                ,
                { "po-bg-slate-300": n == e.items.length - 1 }
              ])
            }, null, 2),
            a("div", w0, [
              a("span", null, [
                J($(l.label) + " on " + $(l.date) + " " + $(l.by && l.by !== "" ? "by" : "") + " ", 1),
                l.by && l.by !== "" ? (i(), c("span", $0, $(l.by), 1)) : y("", !0)
              ]),
              l.description && l.description !== "" ? (i(), c("blockquote", V0, ' "' + $(l.description) + '" ', 1)) : y("", !0)
            ])
          ]))), 256))
        ])
      ])) : (i(), c("div", k0, [
        a("span", _0, $(e.emptyLabel), 1)
      ]))
    ]));
  }
}), S0 = {
  key: 0,
  role: "list",
  class: "po-divide-y po-divide-gray-200 po-rounded-md po-border po-border-gray-200"
}, O0 = { class: "po-flex po-items-center po-justify-between po-py-3 po-pl-3 po-pr-4 po-text-sm" }, P0 = { class: "po-flex po-w-0 po-flex-1 po-items-center" }, E0 = { class: "po-ml-2 po-w-0 po-flex-1 po-truncate" }, L0 = { class: "po-ml-4 po-flex-shrink-0 po-space-x-4" }, T0 = ["onClick"], D0 = ["onClick"], A0 = {
  key: 1,
  class: "po-py-10"
}, z0 = { class: "po-text-sm po-text-slate-500" }, B0 = {
  name: "PoDownloadFileList"
}, A2 = /* @__PURE__ */ Object.assign(B0, {
  props: {
    /**
     * List of files
     */
    files: {
      type: Object,
      default: null
    },
    /**
     * Label of the download link, by default it is "Download"
     */
    linkLabel: {
      type: String,
      default: "Download"
    },
    /**
     * list of items
     */
    emptyLabel: {
      type: String,
      default: "No files to download."
    },
    /**
     * show view btn
     */
    showViewBtn: {
      type: Boolean,
      default: !1
    },
    /**
     * Label of the view btn link, by default it is "View"
     */
    viewBtnLabel: {
      type: String,
      default: "View"
    }
  },
  emits: ["button-click", "view-click"],
  setup(e, { emit: t }) {
    return (o, l) => (i(), c("div", null, [
      e.files && e.files.length > 0 ? (i(), c("ul", S0, [
        (i(!0), c(B, null, q(e.files, (n) => (i(), c("li", O0, [
          a("div", P0, [
            S(w(Et), {
              class: "po-h-5 po-w-5 po-flex-shrink-0 po-text-gray-400",
              "aria-hidden": "true"
            }),
            a("span", E0, $(n.label), 1)
          ]),
          a("div", L0, [
            a("a", {
              href: "#",
              onClick: re((s) => o.$emit("button-click", n), ["prevent"]),
              class: "po-font-medium po-text-mpao-lightblue hover:po-text-indigo-500"
            }, $(e.linkLabel), 9, T0),
            e.showViewBtn ? (i(), c("a", {
              key: 0,
              href: "#",
              onClick: re((s) => o.$emit("view-click", n), ["prevent"]),
              class: "po-font-medium po-text-mpao-lightblue hover:po-text-indigo-500"
            }, $(e.viewBtnLabel), 9, D0)) : y("", !0)
          ])
        ]))), 256))
      ])) : (i(), c("div", A0, [
        a("span", z0, $(e.emptyLabel), 1)
      ]))
    ]));
  }
}), M0 = {
  name: "PoContentArea"
}, j0 = { class: "shell-content--area po-max-w-[1370px]" };
function N0(e, t, o, l, n, s) {
  return i(), c("section", j0, [
    K(e.$slots, "default")
  ]);
}
const z2 = /* @__PURE__ */ Zt(M0, [["render", N0]]), I0 = {
  name: "AnimatedLogo"
}, R0 = /* @__PURE__ */ Qn('<div><svg class="po-stroke-mpao-blue po-w-16 animated-logo" viewBox="0 0 62 55" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.76292 17.8572L7.7 17.9704V18.0682C6.87397 19.526 6.23618 20.649 5.58241 21.4779C4.93472 22.299 4.30505 22.7864 3.51417 23.0053C3.46261 23.0112 3.41718 23.0206 3.39088 23.026C3.35663 23.0331 3.31491 23.0425 3.27694 23.0511C3.25988 23.055 3.24357 23.0587 3.22903 23.0619C3.1106 23.0882 3.03712 23.1 3 23.1H2.93844L2.89561 23.1107L15.9876 0.600006H19.1308C17.2397 1.92747 16.1556 3.83665 15.5371 5.73245C14.8359 7.88203 14.7198 10.0514 14.7027 11.4258C13.1737 11.6033 11.0729 12.4434 9.38038 15.128C8.77075 16.0431 8.26353 16.9561 7.76713 17.8496L7.76292 17.8572Z"></path><path d="M48.1818 11.3241C48.047 8.39742 47.5389 6.05982 46.5472 4.07639C45.8153 2.61266 44.8203 1.39271 43.5945 0.5H46.8113L59.8583 23.0959C59.8303 23.0912 59.7891 23.0819 59.7213 23.0649C59.7166 23.0638 59.7117 23.0625 59.7066 23.0612C59.6302 23.042 59.5099 23.0118 59.3765 23.0027C58.59 22.7825 57.9627 22.2958 57.3176 21.4779C56.6586 20.6423 56.0158 19.508 55.1801 18.0331L55.1413 17.9647C54.8861 17.4553 54.6068 16.973 54.3362 16.5054L54.3327 16.4995C54.0565 16.0225 53.7893 15.5605 53.5472 15.0764L53.5333 15.0485L53.516 15.0226C51.7283 12.3411 49.7115 11.4988 48.1818 11.3241Z"></path><path d="M9.28397 39.6773C11.0717 42.3589 13.0885 43.2011 14.6182 43.3759C14.753 46.3026 15.2611 48.6402 16.2528 50.6236C16.9991 52.1163 17.9653 53.2992 19.1863 54.2H15.7881L2.74125 31.699C2.76073 31.6996 2.78031 31.7 2.8 31.7C2.89335 31.7 2.97474 31.7149 3.07903 31.7381C3.08854 31.7402 3.09897 31.7426 3.11023 31.7452C3.18647 31.7626 3.30082 31.7888 3.42319 31.7972C4.20888 32.0178 4.86081 32.5271 5.52047 33.3603C6.20216 34.2214 6.85697 35.382 7.66164 36.8405C8.26116 37.9396 8.76739 38.8512 9.276 39.665L9.27989 39.6712L9.28397 39.6773Z"></path><path d="M55.124 36.865L55.1331 36.8504L55.1412 36.8353C55.9431 35.3316 56.5997 34.1683 57.2697 33.307C57.9146 32.4778 58.5471 31.9616 59.2949 31.6961C59.4179 31.6866 59.5418 31.6616 59.6287 31.6442C59.6354 31.6428 59.6418 31.6415 59.6481 31.6403C59.719 31.6261 59.772 31.616 59.8123 31.6095L46.8115 54.1H43.8753C45.7283 52.7465 46.7867 50.8277 47.3889 48.9394C48.064 46.8226 48.1795 44.7058 48.1971 43.3742C49.7262 43.1967 51.8271 42.3567 53.5196 39.6719C53.8327 39.2016 54.1164 38.6849 54.3777 38.1995C54.4112 38.1375 54.4442 38.076 54.4768 38.0152C54.7049 37.5906 54.9148 37.1996 55.124 36.865Z"></path><path d="M32.2763 51.5708L32.2653 51.5582L32.2536 51.5465C32.0661 51.359 31.7413 51.2 31.4 51.2C31.3949 51.2 31.3894 51.2 31.3835 51.2C31.2956 51.1998 31.1323 51.1993 30.9751 51.2442C30.7932 51.2962 30.6132 51.4082 30.4904 51.6086C29.1941 53.0706 27.544 53.8 25.5 53.8C22.8209 53.8 20.828 52.9218 19.4532 51.2005C18.1148 49.5247 17.3123 46.988 17.1201 43.5109C18.6883 43.1579 19.8601 42.2673 20.5004 41.6896C20.5136 44.8271 20.8579 46.8152 21.6737 48.0181C22.5558 49.319 23.9045 49.6 25.5 49.6C27.4335 49.6 28.5187 48.2893 29.0946 46.9901C29.6604 45.7138 29.7966 44.3347 29.7999 43.8193C29.8943 42.5846 30.6602 41.8 31.5 41.8H31.5778C32.4558 41.8842 33.2 42.7102 33.2 43.9C33.2 45.6119 33.5619 47.0065 34.2986 47.9982C35.0485 49.0077 36.1459 49.544 37.4792 49.5996L37.4896 49.6H37.5C39.2304 49.6 40.5973 49.3258 41.4454 48.0081C41.849 47.3811 42.1078 46.5565 42.2692 45.5056C42.4311 44.4518 42.5 43.1353 42.5 41.5V24.4455L45.9 21.8182V41.5C45.9 41.4958 45.8996 41.5001 45.8978 41.519C45.8959 41.5381 45.8927 41.5719 45.887 41.6267L45.8842 41.6541C45.8752 41.7406 45.8636 41.8524 45.8521 41.9797C45.8264 42.2614 45.8 42.6283 45.8 43V43.9V43.9029V43.9059V43.9088V43.9117V43.9146V43.9175V43.9205V43.9234V43.9263V43.9292V43.9321V43.935V43.9379V43.9408V43.9437V43.9466V43.9495V43.9524V43.9553V43.9581V43.961V43.9639V43.9668V43.9696V43.9725V43.9754V43.9783V43.9811V43.984V43.9868V43.9897V43.9926V43.9954V43.9983V44.0011V44.004V44.0068V44.0096V44.0125V44.0153V44.0181V44.021V44.0238V44.0266V44.0295V44.0323V44.0351V44.0379V44.0407V44.0435V44.0463V44.0492V44.052V44.0548V44.0576V44.0603V44.0631V44.0659V44.0687V44.0715V44.0743V44.0771V44.0798V44.0826V44.0854V44.0882V44.0909V44.0937V44.0965V44.0992V44.102V44.1047V44.1075V44.1102V44.113V44.1157V44.1185V44.1212V44.1239V44.1267V44.1294V44.1321V44.1349V44.1376V44.1403V44.143V44.1457V44.1484V44.1512V44.1539V44.1566V44.1593V44.162V44.1647V44.1674V44.17V44.1727V44.1754V44.1781V44.1808V44.1835V44.1861V44.1888V44.1915V44.1941V44.1968V44.1995V44.2021V44.2048V44.2074V44.2101V44.2127V44.2154V44.218V44.2207V44.2233V44.2259V44.2285V44.2312V44.2338V44.2364V44.239V44.2417V44.2443V44.2469V44.2495V44.2521V44.2547V44.2573V44.2599V44.2625V44.2651V44.2677V44.2702V44.2728V44.2754V44.278V44.2806V44.2831V44.2857V44.2882V44.2908V44.2934V44.2959V44.2985V44.301V44.3036V44.3061V44.3087V44.3112V44.3137V44.3163V44.3188V44.3213V44.3238V44.3264V44.3289V44.3314V44.3339V44.3364V44.3389V44.3414V44.3439V44.3464V44.3489V44.3514V44.3539V44.3564V44.3588V44.3613V44.3638V44.3663V44.3687V44.3712V44.3737V44.3761V44.3786V44.381V44.3835V44.3859V44.3884V44.3908V44.3932V44.3957V44.3981V44.4005V44.403V44.4054V44.4078V44.4102V44.4126V44.415V44.4174V44.4199V44.4223V44.4247V44.427V44.4294V44.4318V44.4342V44.4366V44.439V44.4413V44.4437V44.4461V44.4484V44.4508V44.4532V44.4555V44.4579V44.4602V44.4626V44.4649V44.4672V44.4696V44.4719V44.4742V44.4766V44.4789V44.4812V44.4835V44.4858V44.4882V44.4905V44.4928V44.4951V44.4974V44.4997V44.5019V44.5042V44.5065V44.5088V44.5111V44.5133V44.5156V44.5179V44.5201V44.5224V44.5247V44.5269V44.5292V44.5314V44.5337V44.5359V44.5381V44.5404V44.5426V44.5448V44.547V44.5493V44.5515V44.5537V44.5559V44.5581V44.5603V44.5625V44.5647V44.5669V44.5691V44.5713V44.5734V44.5756V44.5778V44.58V44.5821V44.5843V44.5865V44.5886V44.5908V44.5929V44.5951V44.5972V44.5994V44.6015V44.6036V44.6058V44.6079V44.61V44.6121V44.6142V44.6164V44.6185V44.6206V44.6227V44.6248V44.6269V44.6289V44.631V44.6331V44.6352V44.6373V44.6393V44.6414V44.6435V44.6455V44.6476V44.6497V44.6517V44.6538V44.6558V44.6578V44.6599V44.6619V44.6639V44.666V44.668V44.67V44.672V44.674V44.676V44.678V44.68V44.682V44.684V44.686V44.688V44.69V44.692V44.6939V44.6959V44.6979V44.6998V44.7018V44.7037V44.7057V44.7076V44.7096V44.7115V44.7135V44.7154V44.7173V44.7193V44.7212V44.7231V44.725V44.7269V44.7288V44.7307V44.7326V44.7345V44.7364V44.7383V44.7402V44.7421V44.7439V44.7458V44.7477V44.7495V44.7514V44.7533V44.7551V44.757V44.7588V44.7606V44.7625V44.7643V44.7661V44.768V44.7698V44.7716V44.7734V44.7752V44.777V44.7788V44.7806V44.7824V44.7842V44.786V44.7878V44.7896V44.7914V44.7931V44.7949V44.7967V44.7984V44.8002V44.8019V44.8037V44.8054V44.8071V44.8089V44.8106V44.8123V44.8141V44.8158V44.8175V44.8192V44.8209V44.8226V44.8243V44.826V44.8277V44.8294V44.8311V44.8328V44.8344V44.8361V44.8378V44.8394V44.8411V44.8427V44.8444V44.846V44.8477V44.8493V44.851V44.8526V44.8542V44.8558V44.8575V44.8591V44.8607V44.8623V44.8639V44.8655V44.8671V44.8687V44.8702V44.8718V44.8734V44.875V44.8765V44.8781V44.8797V44.8812V44.8828V44.8843V44.8859V44.8874V44.8889V44.8905V44.892V44.8935V44.895V44.8965V44.898V44.8996V44.9011V44.9025V44.904V44.9055V44.907V44.9085V44.91V44.9114V44.9129V44.9144V44.9158V44.9173V44.9187V44.9202V44.9216V44.923V44.9245V44.9259V44.9273V44.9288V44.9302V44.9316V44.933V44.9344V44.9358V44.9372V44.9386V44.9399V44.9413V44.9427V44.9441V44.9454V44.9468V44.9482V44.9495V44.9509V44.9522V44.9535V44.9549V44.9562V44.9575V44.9589V44.9602V44.9615V44.9628V44.9641V44.9654V44.9667V44.968V44.9693V44.9706V44.9718V44.9731V44.9744V44.9757V44.9769V44.9782V44.9794V44.9807V44.9819V44.9832V44.9844V44.9856V44.9868V44.9881V44.9893V44.9905V44.9917V44.9929V44.9941V44.9953V44.9965V44.9977V44.9988V45V45.1V45.1006V45.1012V45.1017V45.1023V45.1029V45.1035V45.104V45.1046V45.1052V45.1057V45.1063V45.1069V45.1074V45.108V45.1085V45.1091V45.1096V45.1102V45.1107V45.1113V45.1118V45.1123V45.1129V45.1134V45.1139V45.1145V45.115V45.1155V45.1161V45.1166V45.1171V45.1176V45.1181V45.1186V45.1191V45.1196V45.1202V45.1207V45.1212V45.1217V45.1222V45.1226V45.1231V45.1236V45.1241V45.1246V45.1251V45.1256V45.1261V45.1265V45.127V45.1275V45.128V45.1284V45.1289V45.1294V45.1298V45.1303V45.1307V45.1312V45.1317V45.1321V45.1326V45.133V45.1335V45.1339V45.1343V45.1348V45.1352V45.1357V45.1361V45.1365V45.137V45.1374V45.1378V45.1383V45.1387V45.1391V45.1395V45.1399V45.1404V45.1408V45.1412V45.1416V45.142V45.1424V45.1428V45.1432V45.1436V45.144V45.1444V45.1448V45.1452V45.1456V45.146V45.1464V45.1468V45.1471V45.1475V45.1479V45.1483V45.1487V45.149V45.1494V45.1498V45.1501V45.1505V45.1509V45.1512V45.1516V45.152V45.1523V45.1527V45.153V45.1534V45.1537V45.1541V45.1544V45.1548V45.1551V45.1555V45.1558V45.1561V45.1565V45.1568V45.1572V45.1575V45.1578V45.1581V45.1585V45.1588V45.1591V45.1594V45.1598V45.1601V45.1604V45.1607V45.161V45.1613V45.1616V45.162V45.1623V45.1626V45.1629V45.1632V45.1635V45.1638V45.1641V45.1644V45.1647V45.165V45.1652V45.1655V45.1658V45.1661V45.1664V45.1667V45.167V45.1672V45.1675V45.1678V45.1681V45.1683V45.1686V45.1689V45.1691V45.1694V45.1697V45.1699V45.1702V45.1705V45.1707V45.171V45.1712V45.1715V45.1717V45.172V45.1722V45.1725V45.1727V45.173V45.1732V45.1735V45.1737V45.174V45.1742V45.1744V45.1747V45.1749V45.1751V45.1753C45.5039 48.1507 44.6544 50.2924 43.3031 51.6899C41.9582 53.0807 40.0524 53.8 37.5 53.8C35.4235 53.8 33.5685 53.0476 32.2763 51.5708Z"></path><path d="M22.8 23.2538V18.2178L29.3909 23.307L26.1939 25.8645L22.8 23.2538Z"></path><path d="M16.7 20.2V19.7H16.5V18.8V10.858C16.5042 10.8478 16.5096 10.8348 16.5142 10.8232C16.5488 10.7368 16.5963 10.6012 16.5998 10.4209C16.8474 7.03069 17.6799 4.61275 19.0737 3.04468C20.4543 1.49155 22.4511 0.699997 25.2 0.699997C27.2568 0.699997 29.1263 1.53906 30.5352 3.04197L30.5407 3.04785L30.5464 3.05355C30.7614 3.26854 31.0508 3.35 31.3 3.35C31.5492 3.35 31.8386 3.26854 32.0536 3.05355L32.0646 3.04251L32.0749 3.03081C33.4779 1.4408 35.1402 0.699997 37.3 0.699997C40.0769 0.699997 42.1441 1.62655 43.5571 3.42174C44.934 5.17104 45.7393 7.80743 45.886 11.3874C44.0184 11.8028 42.6345 12.9721 42.1 13.4936V13.2C42.1 10.0544 41.7835 8.06299 40.9925 6.86242C40.1497 5.58316 38.8495 5.3 37.3 5.3C35.4114 5.3 34.3769 6.59229 33.8399 7.85422C33.3055 9.11015 33.2 10.457 33.2 10.9C33.2 12.2634 32.2859 13.1 31.3 13.1H31.2204C30.2388 13.0141 29.4 12.0845 29.4 10.8C29.4 9.19015 29.0639 7.84653 28.3661 6.89234C27.6525 5.91665 26.5974 5.4 25.3 5.4C23.6267 5.4 22.3017 5.64608 21.4896 6.93319C21.1052 7.5425 20.863 8.34586 20.7131 9.3714C20.5626 10.4004 20.5 11.6909 20.5 13.3V30.4541L16.7 33.3833V20.2Z"></path><path d="M40.1 31.5462V36.5799L33.4225 31.4049L36.6974 28.9288L40.1 31.5462Z"></path><mask id="path-9-inside-1" fill="white"><path d="M58.7 30.1C58.9 30 59.5 30 59.8 29.9C60.9 29.8 61.8 28.7 61.8 27.4C61.8 26.1 60.9 25 59.8 24.9C59.7 24.9 59.5 24.9 59.4 24.8C59.3 24.8 59.2 24.8 59.1 24.7C59.1 24.7 59.1 24.7 59 24.7C58.6 24.6 58.1 24.4 57.7 24.1C57.7 24.1 57.7 24.1 57.6 24C56.1 23.1 55 21.2 53.6 18.7C53.1 17.8 52.6 16.9 52 16C50.5 13.7 48.9 13.1 47.8 13C47.7 13 47.6 13 47.5 13H47.3C47.1 13 46.9 13 46.9 13C45.2 13.2 44 14.3 43.6 14.8L25.2 29.1C25.2 29.1 25.2 29.1 25.1 29.2L23 30.8L16.8 35.5L16.4 35.9C16.4 35.9 16.4 35.9 16.3 35.9C16 36.1 15.7 36.3 15.4 36.3C15.1 36.3 14.9 36.2 14.7 36.1C14.5 35.9 14.4 35.8 14.3 35.5C13.9 34.8 13.4 34.1 13 33.3V33.1C12.2 31.7 11.3 30 10.1 28.6C10.1 28.6 10.1 28.6 10.1 28.5L10 28.4C9.9 28.3 9.9 28.3 9.8 28.2C9.8 28.2 9.8 28.2 9.7 28.1L9.2 27.5C9.2 27.5 9.2 27.5 9.1 27.5C9 27.3 9 27.1 9.1 27L9.6 26.5C10.9 25 11.9 23.2 12.8 21.6V21.5C13.2 20.7 13.7 19.9 14.2 19.1C14.4 18.8 14.6 18.6 14.7 18.5V13.1C13.6 13.2 12 13.9 10.6 16C10 16.9 9.5 17.8 9 18.7C7.8 20.9 6.8 22.5 5.6 23.5C4.8 24.1 4 24.4 3.5 24.6C3.5 24.6 3.5 24.6 3.4 24.6C3.3 24.6 3.1 24.7 3 24.7C2.9 24.7 2.9 24.7 2.8 24.7C2.7 24.7 2.7 24.7 2.7 24.7H2.6H2.5C2.3 24.7 2.2 24.8 2.1 24.8C2 24.8 2 24.8 2 24.9C1.7 25.1 1.4 25.3 1.2 25.6C1.2 25.7 1.1 25.7 1.1 25.8V25.9L0.999997 26.1C0.999997 26.2 0.999997 26.2 0.899997 26.3C0.899997 26.4 0.899997 26.4 0.799997 26.5C0.799997 26.6 0.799997 26.7 0.699997 26.7C0.699997 26.8 0.699997 26.9 0.699997 26.9C0.699997 27 0.699997 27.1 0.699997 27.1C0.699997 27.2 0.699997 27.2 0.699997 27.3C0.699997 27.4 0.699997 27.5 0.699997 27.5C0.699997 27.6 0.699997 27.7 0.699997 27.7C0.699997 27.8 0.699997 27.9 0.799997 27.9V28V28.1C0.799997 28.2 0.799997 28.2 0.899997 28.2L0.999997 28.4C0.999997 28.5 1.1 28.5 1.1 28.5C1.1 28.5 1.1 28.5 1.1 28.6C1.2 28.7 1.3 28.9 1.5 29C1.6 29 1.6 29.1 1.7 29.1C1.7 29.1 1.8 29.1 1.8 29.2C1.8 29.2 1.8 29.2 1.9 29.2C2 29.3 2.2 29.3 2.3 29.4C2.4 29.4 2.4 29.4 2.4 29.4L2.9 29.5C3.1 29.5 3.2 29.6 3.4 29.6C4.2 29.8 4.7 30.2 4.8 30.2C6.4 31.2 7.5 33 8.9 35.5C9.5 36.6 10 37.4 10.5 38.2C11.9 40.3 13.4 41 14.4 41.1C14.5 41.1 14.5 41.1 14.6 41.1C14.7 41.1 14.8 41.1 14.8 41.1C15 41.1 15.2 41.1 15.5 41.1H15.6C17.2 40.8 18.5 39.8 18.9 39.3L19 39.2L19.8 38.6C19.8 38.6 19.9 38.5 20 38.5L30.2 30.6L41.3 22L46.5 18H46.6C46.7 18 46.9 17.9 47 17.9C47.4 17.9 47.8 18.1 48.1 18.6L48.5 19.2C48.8 19.7 49.2 20.3 49.5 20.9V21C50.1 22.1 50.8 23.4 51.7 24.6C51.7 24.6 51.7 24.7 51.8 24.7C52.1 25.1 52.4 25.5 52.7 25.8C52.7 25.8 52.8 25.8 52.8 25.9C53 26.1 53.1 26.3 53.3 26.4C53.4 26.5 53.4 26.7 53.3 26.9C52 28.5 50.4 31.1 49.6 32.4V32.5C49.2 33.2 48.7 34.1 48.2 34.9C48 35.2 47.8 35.4 47.7 35.5V40.9C48.8 40.8 50.4 40.1 51.8 37.9C52.4 37 52.9 36 53.4 35.2C53.5 35 53.7 34.7 53.8 34.5C55.2 33 56.4 30.9 58.7 30.1Z"></path></mask><path d="M58.7 30.1C58.9 30 59.5 30 59.8 29.9C60.9 29.8 61.8 28.7 61.8 27.4C61.8 26.1 60.9 25 59.8 24.9C59.7 24.9 59.5 24.9 59.4 24.8C59.3 24.8 59.2 24.8 59.1 24.7C59.1 24.7 59.1 24.7 59 24.7C58.6 24.6 58.1 24.4 57.7 24.1C57.7 24.1 57.7 24.1 57.6 24C56.1 23.1 55 21.2 53.6 18.7C53.1 17.8 52.6 16.9 52 16C50.5 13.7 48.9 13.1 47.8 13C47.7 13 47.6 13 47.5 13H47.3C47.1 13 46.9 13 46.9 13C45.2 13.2 44 14.3 43.6 14.8L25.2 29.1C25.2 29.1 25.2 29.1 25.1 29.2L23 30.8L16.8 35.5L16.4 35.9C16.4 35.9 16.4 35.9 16.3 35.9C16 36.1 15.7 36.3 15.4 36.3C15.1 36.3 14.9 36.2 14.7 36.1C14.5 35.9 14.4 35.8 14.3 35.5C13.9 34.8 13.4 34.1 13 33.3V33.1C12.2 31.7 11.3 30 10.1 28.6C10.1 28.6 10.1 28.6 10.1 28.5L10 28.4C9.9 28.3 9.9 28.3 9.8 28.2C9.8 28.2 9.8 28.2 9.7 28.1L9.2 27.5C9.2 27.5 9.2 27.5 9.1 27.5C9 27.3 9 27.1 9.1 27L9.6 26.5C10.9 25 11.9 23.2 12.8 21.6V21.5C13.2 20.7 13.7 19.9 14.2 19.1C14.4 18.8 14.6 18.6 14.7 18.5V13.1C13.6 13.2 12 13.9 10.6 16C10 16.9 9.5 17.8 9 18.7C7.8 20.9 6.8 22.5 5.6 23.5C4.8 24.1 4 24.4 3.5 24.6C3.5 24.6 3.5 24.6 3.4 24.6C3.3 24.6 3.1 24.7 3 24.7C2.9 24.7 2.9 24.7 2.8 24.7C2.7 24.7 2.7 24.7 2.7 24.7H2.6H2.5C2.3 24.7 2.2 24.8 2.1 24.8C2 24.8 2 24.8 2 24.9C1.7 25.1 1.4 25.3 1.2 25.6C1.2 25.7 1.1 25.7 1.1 25.8V25.9L0.999997 26.1C0.999997 26.2 0.999997 26.2 0.899997 26.3C0.899997 26.4 0.899997 26.4 0.799997 26.5C0.799997 26.6 0.799997 26.7 0.699997 26.7C0.699997 26.8 0.699997 26.9 0.699997 26.9C0.699997 27 0.699997 27.1 0.699997 27.1C0.699997 27.2 0.699997 27.2 0.699997 27.3C0.699997 27.4 0.699997 27.5 0.699997 27.5C0.699997 27.6 0.699997 27.7 0.699997 27.7C0.699997 27.8 0.699997 27.9 0.799997 27.9V28V28.1C0.799997 28.2 0.799997 28.2 0.899997 28.2L0.999997 28.4C0.999997 28.5 1.1 28.5 1.1 28.5C1.1 28.5 1.1 28.5 1.1 28.6C1.2 28.7 1.3 28.9 1.5 29C1.6 29 1.6 29.1 1.7 29.1C1.7 29.1 1.8 29.1 1.8 29.2C1.8 29.2 1.8 29.2 1.9 29.2C2 29.3 2.2 29.3 2.3 29.4C2.4 29.4 2.4 29.4 2.4 29.4L2.9 29.5C3.1 29.5 3.2 29.6 3.4 29.6C4.2 29.8 4.7 30.2 4.8 30.2C6.4 31.2 7.5 33 8.9 35.5C9.5 36.6 10 37.4 10.5 38.2C11.9 40.3 13.4 41 14.4 41.1C14.5 41.1 14.5 41.1 14.6 41.1C14.7 41.1 14.8 41.1 14.8 41.1C15 41.1 15.2 41.1 15.5 41.1H15.6C17.2 40.8 18.5 39.8 18.9 39.3L19 39.2L19.8 38.6C19.8 38.6 19.9 38.5 20 38.5L30.2 30.6L41.3 22L46.5 18H46.6C46.7 18 46.9 17.9 47 17.9C47.4 17.9 47.8 18.1 48.1 18.6L48.5 19.2C48.8 19.7 49.2 20.3 49.5 20.9V21C50.1 22.1 50.8 23.4 51.7 24.6C51.7 24.6 51.7 24.7 51.8 24.7C52.1 25.1 52.4 25.5 52.7 25.8C52.7 25.8 52.8 25.8 52.8 25.9C53 26.1 53.1 26.3 53.3 26.4C53.4 26.5 53.4 26.7 53.3 26.9C52 28.5 50.4 31.1 49.6 32.4V32.5C49.2 33.2 48.7 34.1 48.2 34.9C48 35.2 47.8 35.4 47.7 35.5V40.9C48.8 40.8 50.4 40.1 51.8 37.9C52.4 37 52.9 36 53.4 35.2C53.5 35 53.7 34.7 53.8 34.5C55.2 33 56.4 30.9 58.7 30.1Z"></path></svg></div>', 1), F0 = [
  R0
];
function H0(e, t, o, l, n, s) {
  return i(), c("div", null, F0);
}
const q0 = /* @__PURE__ */ Zt(I0, [["render", H0]]), W0 = {
  key: 0,
  class: "po-fixed po-z-[999] po-top-0 po-bottom-0 po-left-0 po-right-0 po-flex po-items-center po-justify-center"
}, U0 = /* @__PURE__ */ a("div", { class: "po-absolute po-w-[6.2rem] po-h-[6.2rem] po-bg-transparent po-overflow-hidden po-rounded-xl" }, [
  /* @__PURE__ */ a("div", { class: "po-loading-rotate po-absolute -po-top-8 -po-left-8 po-w-[10rem] po-h-[10rem]" })
], -1), G0 = { class: "relative po-bg-white po-w-24 po-h-24 po-flex po-items-center po-justify-center po-rounded-xl po-bg-opacity-50 po-backdrop-blur po-backdrop-filter po-z-10 po-shadow-xl" }, Z0 = {
  key: 0,
  class: "po-absolute po-left-1 po-right-1 po-text-center po-py-1 po-text-xs po-text-mpao-blue po-bg-white po-bg-opacity-50 po-backdrop-blur po-backdrop-filter"
}, K0 = {
  name: "PoLoading"
}, B2 = /* @__PURE__ */ Object.assign(K0, {
  props: {
    show: {
      type: Boolean,
      default: !1
    },
    label: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    return (t, o) => e.show ? (i(), c("div", W0, [
      U0,
      a("div", G0, [
        e.label !== "" ? (i(), c("span", Z0, $(e.label), 1)) : y("", !0),
        S(q0)
      ])
    ])) : y("", !0);
  }
}), Y0 = { class: "po-py-5 po-flex po-items-start po-space-x-5" }, X0 = ["name", "id", "checked", "aria-describedby"], Q0 = { class: "po-grow -po-mt-[0.26rem]" }, J0 = ["for"], ef = { class: "po-mt-2 po-flex po-space-x-3" }, tf = ["href", "onClick"], of = {
  name: "PoConsent"
}, M2 = /* @__PURE__ */ Object.assign(of, {
  props: {
    /**
     * Model value
     */
    modelValue: {
      type: Boolean,
      default: !1
    },
    /**
     * Input label text
     */
    label: {
      type: String,
      default: ""
    },
    /**
     * Input id text
     */
    id: {
      type: String,
      default: "consent-checkbox"
    },
    links: {
      type: Array,
      default: null
    }
  },
  setup(e) {
    return (t, o) => (i(), c("div", Y0, [
      a("input", ke({
        type: "checkbox",
        name: `${e.id}-field`,
        id: e.id,
        checked: e.modelValue,
        "aria-describedby": `${e.id}-description`
      }, t.$attrs, {
        onInput: o[0] || (o[0] = (l) => t.$emit("update:modelValue", l.target.checked)),
        class: "po-shrink-0 po-h-4 po-w-4 po-rounded border-slate-300 po-text-mpao-lightblue focus:po-ring-mpao-lightblue"
      }), null, 16, X0),
      a("div", Q0, [
        a("label", {
          class: "po-block po-select-none po-text-sm po-text-slate-600 po-cursor-pointer",
          for: e.id
        }, $(e.label), 9, J0),
        a("div", ef, [
          (i(!0), c(B, null, q(e.links, (l) => (i(), c("a", {
            href: l.url,
            onClick: re((n) => t.$emit("button-click", l.url), ["prevent"]),
            class: "po-text-sm po-text-mpao-lightblue hover:po-text-mpao-blue"
          }, $(l.label), 9, tf))), 256))
        ])
      ])
    ]));
  }
}), lf = {
  class: "po-flex po-bg-slate-50 po-rounded-t-xl po-justify-center lg:po-justify-start po-px-4 po-pt-4 xl:po-pt-2 po-flex-wrap po-overflow-hidden",
  "aria-label": "Tabs"
}, nf = ["onClick", "aria-current"], sf = { key: 0 }, af = {
  name: "PoCardTabs"
}, j2 = /* @__PURE__ */ Object.assign(af, {
  props: {
    /**
     * Page title
     */
    tabs: {
      type: Array,
      default: null
    }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    function o(l) {
      return l.iconColor ? l.iconColor : "po-fill-current";
    }
    return (l, n) => (i(), c("nav", lf, [
      (i(!0), c(B, null, q(e.tabs, (s) => (i(), c("span", {
        role: "button",
        onClick: (r) => l.$emit("button-click", s),
        key: s.name,
        class: E([
          s.current ? "po-bg-white po-text-slate-600 po-shadow-lg" : "po-text-slate-600 hover:po-text-mpao-blue",
          "po-px-4 po-py-3 po-font-medium po-mr-4 po-mb-4 xl:po-mb-0 po-text-sm po-cursor-pointer po-rounded-xl xl:po-rounded-b-none genie-effect hover:po-text-slate-600 hover:po-bg-white hover:po-shadow-md po-flex po-items-center po-flex-shrink-0 po-space-x-2"
        ]),
        "aria-current": s.current ? "page" : void 0
      }, [
        s.icon ? (i(), M(de(s.icon), {
          key: 0,
          class: E(["po-w-5 po-h-5", [o(s)]])
        }, null, 8, ["class"])) : y("", !0),
        a("span", null, [
          J($(s.name), 1),
          s.count ? (i(), c("span", sf, " (" + $(s.count) + ")", 1)) : y("", !0)
        ])
      ], 10, nf))), 128))
    ]));
  }
}), rf = { class: "sm:po-hidden" }, uf = /* @__PURE__ */ a("label", {
  for: "tabs",
  class: "po-sr-only"
}, "Select a tab", -1), pf = ["value", "selected"], cf = { class: "po-hidden sm:po-block" }, df = {
  class: "po-flex po-space-x-4 po-pt-2",
  "aria-label": "Tabs"
}, ff = ["onClick", "aria-current"], vf = {
  name: "PoTabs"
}, N2 = /* @__PURE__ */ Object.assign(vf, {
  props: {
    /**
     * Page title
     */
    tabs: {
      type: Array,
      default: null
    },
    /**
     * Current Tab name
     */
    currentTab: {
      type: String,
      default: ""
    }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    const o = e;
    function l(r) {
      return r.iconColor ? r.iconColor : "po-fill-current";
    }
    const n = T(() => o.tabs.map((r) => r.name === o.currentTab ? { ...r, current: !0 } : { ...r, current: !1 }));
    function s(r) {
      const u = r.target.value, p = o.tabs[u];
      t("button-click", p);
    }
    return (r, u) => (i(), c(B, null, [
      a("div", rf, [
        uf,
        a("select", {
          id: "tabs",
          name: "tabs",
          class: "po-block po-w-full po-rounded-md po-border-gray-300 focus:po-border-indigo-500 focus:po-ring-indigo-500",
          onChange: s
        }, [
          (i(!0), c(B, null, q(e.tabs, (p, f) => (i(), c("option", {
            key: p.name,
            value: f,
            selected: p.current
          }, $(p.name), 9, pf))), 128))
        ], 32)
      ]),
      a("div", cf, [
        a("nav", df, [
          (i(!0), c(B, null, q(w(n), (p) => (i(), c("span", {
            onClick: (f) => r.$emit("button-click", p),
            role: "button",
            key: p.name,
            class: E([
              p.current ? " po-text-slate-600 po-shadow-md po-border po-border-sky-200" : " po-text-slate-600 po-shadow-sm hover:po-text-mpao-blue",
              "po-bg-white po-px-4 po-relative po-group po-py-3 po-font-medium po-text-sm po-cursor-pointer po-rounded-xl genie-effect hover:po-text-slate-600 hover:po-bg-white hover:po-shadow-md po-flex po-items-center po-space-x-2"
            ]),
            "aria-current": p.current ? "page" : void 0
          }, [
            p.icon ? (i(), M(de(p.icon), {
              key: 0,
              class: E(["po-w-5 po-h-5", [l(p)]])
            }, null, 8, ["class"])) : y("", !0),
            a("span", null, [
              a("span", null, $(p.name), 1),
              p.count && p.count > 0 ? (i(), c("span", {
                key: 0,
                class: E(["po-absolute po-py-1 po-px-2 po-rounded-full po-text-xs -po-top-3 -po-right-2 po-shadow-md po-flex po-items-center po-justify-center", [
                  p.current ? "po-bg-mpao-orange po-text-white" : "po-bg-slate-400 po-text-white group-hover:po-bg-mpao-orange group-hover:po-text-white"
                ]])
              }, [
                a("span", null, $(p.count), 1)
              ], 2)) : y("", !0)
            ])
          ], 10, ff))), 128))
        ])
      ])
    ], 64));
  }
}), hf = { class: "po-mt-5 po-flex po-flex-col po-items-center po-justify-center po-px-5 po-py-8" }, mf = {
  key: 1,
  class: "po-text-base po-font-medium po-text-slate-600 po-text-center"
}, gf = {
  key: 2,
  class: "po-text-sm po-text-slate-500 po-text-center po-max-w-lg po-block po-mx-auto"
}, bf = {
  name: "PoEmpty"
}, I2 = /* @__PURE__ */ Object.assign(bf, {
  props: {
    /**
     * State label
     */
    label: {
      type: String,
      default: ""
    },
    /**
     * State description
     */
    description: {
      type: String,
      default: ""
    },
    /**
     * Heroicon
     */
    icon: null,
    /**
     * Icon color
     */
    iconColor: {
      type: String,
      default: "po-stroke-slate-300"
    }
  },
  setup(e) {
    return (t, o) => (i(), c("div", hf, [
      a("div", {
        class: E(["po-space-y-2 po-flex po-items-center po-flex-col po-justify-center", [{ "po-mb-5": t.$slots.action }]])
      }, [
        e.icon ? (i(), M(de(e.icon), {
          key: 0,
          class: E(["po-w-10 po-h-10", e.iconColor])
        }, null, 8, ["class"])) : y("", !0),
        e.label !== "" ? (i(), c("span", mf, $(e.label), 1)) : y("", !0),
        e.description !== "" ? (i(), c("span", gf, $(e.description), 1)) : y("", !0)
      ], 2),
      K(t.$slots, "action")
    ]));
  }
});
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const lo = () => !1;
function yf(e) {
  throw e;
}
function xf(e) {
  process.env.NODE_ENV !== "production" && console.warn(`[Vue warn] ${e.message}`);
}
Symbol(process.env.NODE_ENV !== "production" ? "Fragment" : "");
Symbol(process.env.NODE_ENV !== "production" ? "Teleport" : "");
Symbol(process.env.NODE_ENV !== "production" ? "Suspense" : "");
Symbol(process.env.NODE_ENV !== "production" ? "KeepAlive" : "");
Symbol(process.env.NODE_ENV !== "production" ? "BaseTransition" : "");
Symbol(process.env.NODE_ENV !== "production" ? "openBlock" : "");
Symbol(process.env.NODE_ENV !== "production" ? "createBlock" : "");
Symbol(process.env.NODE_ENV !== "production" ? "createElementBlock" : "");
Symbol(process.env.NODE_ENV !== "production" ? "createVNode" : "");
Symbol(process.env.NODE_ENV !== "production" ? "createElementVNode" : "");
Symbol(process.env.NODE_ENV !== "production" ? "createCommentVNode" : "");
Symbol(process.env.NODE_ENV !== "production" ? "createTextVNode" : "");
Symbol(process.env.NODE_ENV !== "production" ? "createStaticVNode" : "");
Symbol(process.env.NODE_ENV !== "production" ? "resolveComponent" : "");
Symbol(process.env.NODE_ENV !== "production" ? "resolveDynamicComponent" : "");
Symbol(process.env.NODE_ENV !== "production" ? "resolveDirective" : "");
Symbol(process.env.NODE_ENV !== "production" ? "resolveFilter" : "");
Symbol(process.env.NODE_ENV !== "production" ? "withDirectives" : "");
Symbol(process.env.NODE_ENV !== "production" ? "renderList" : "");
Symbol(process.env.NODE_ENV !== "production" ? "renderSlot" : "");
Symbol(process.env.NODE_ENV !== "production" ? "createSlots" : "");
Symbol(process.env.NODE_ENV !== "production" ? "toDisplayString" : "");
Symbol(process.env.NODE_ENV !== "production" ? "mergeProps" : "");
const R2 = Symbol(process.env.NODE_ENV !== "production" ? "normalizeClass" : ""), F2 = Symbol(process.env.NODE_ENV !== "production" ? "normalizeStyle" : ""), H2 = Symbol(process.env.NODE_ENV !== "production" ? "normalizeProps" : ""), q2 = Symbol(process.env.NODE_ENV !== "production" ? "guardReactiveProps" : "");
Symbol(process.env.NODE_ENV !== "production" ? "toHandlers" : "");
Symbol(process.env.NODE_ENV !== "production" ? "camelize" : "");
Symbol(process.env.NODE_ENV !== "production" ? "capitalize" : "");
Symbol(process.env.NODE_ENV !== "production" ? "toHandlerKey" : "");
Symbol(process.env.NODE_ENV !== "production" ? "setBlockTracking" : "");
Symbol(process.env.NODE_ENV !== "production" ? "pushScopeId" : "");
Symbol(process.env.NODE_ENV !== "production" ? "popScopeId" : "");
Symbol(process.env.NODE_ENV !== "production" ? "withCtx" : "");
Symbol(process.env.NODE_ENV !== "production" ? "unref" : "");
Symbol(process.env.NODE_ENV !== "production" ? "isRef" : "");
Symbol(process.env.NODE_ENV !== "production" ? "withMemo" : "");
Symbol(process.env.NODE_ENV !== "production" ? "isMemoSame" : "");
const wf = /&(gt|lt|amp|apos|quot);/g, $f = {
  gt: ">",
  lt: "<",
  amp: "&",
  apos: "'",
  quot: '"'
};
process.env.NODE_ENV;
new RegExp("\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b");
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const Vf = { class: "po-flex po-text-sm po-text-gray-700 po-flex-col po-space-y-5" }, kf = {
  key: 0,
  class: "po-text-base po-font-medium po-text-slate-700"
}, _f = {
  key: 1,
  class: "po-border po-border-orange-300 po-bg-orange-50 po-rounded-lg po-p-5 po-flex po-items-center po-space-x-3"
}, Cf = { class: "po-grow po-text-sm po-text-slate-600" }, Sf = {
  key: 2,
  class: "po-border po-border-red-300 po-bg-red-50 po-rounded-lg po-p-5 po-flex po-space-x-4"
}, Of = { class: "po-grow" }, Pf = { class: "po-text-base po-text-slate-700 po-font-medium" }, Ef = { class: "po-text-sm po-text-slate-600" }, Lf = { class: "po-font-medium" }, Tf = { key: 0 }, Df = { key: 0 }, Af = /* @__PURE__ */ a("dt", null, "Name", -1), zf = { key: 1 }, Bf = /* @__PURE__ */ a("dt", null, "Identifer", -1), Mf = { key: 2 }, jf = /* @__PURE__ */ a("dt", null, "Date of birth", -1), Nf = { key: 3 }, If = /* @__PURE__ */ a("dt", null, "Reported Date of death", -1), Rf = {
  key: 3,
  class: "po-pt-5"
}, Ff = { class: "po-flex po-items-center po-space-x-1" }, Hf = /* @__PURE__ */ a("span", null, "File a dispute.", -1), qf = {
  name: "PoDRStatus"
}, W2 = /* @__PURE__ */ Object.assign(qf, {
  props: {
    /**
     * Member Object { name, identifier, dob }
     */
    member: {
      type: Object,
      default: null
    },
    /**
     * Record Object { id, institution, date_of_death }
     */
    record: {
      type: Object,
      default: null
    },
    /**
     * Request Object { id, type, state, dispute_type, institution, date_of_death }
     */
    request: {
      type: Object,
      default: null
    }
  },
  emits: ["dispute-click"],
  setup(e, { emit: t }) {
    function o() {
      t("dispute-click", "clicked");
    }
    return (l, n) => (i(), c("span", Vf, [
      e.record !== null ? (i(), c("h2", kf, " Death was reported by " + $(e.record.institution), 1)) : y("", !0),
      e.request !== null && e.request.type_id === 1 ? (i(), c("div", _f, [
        S(w(no), { class: "po-shrink-0 po-w-6 po-stroke-orange-600" }),
        a("span", Cf, " This is a " + $(e.request.type) + " request and is in " + $(e.request.state) + " state. ", 1)
      ])) : y("", !0),
      e.request !== null && e.request.type_id !== 1 ? (i(), c("div", Sf, [
        S(w(no), { class: "po-shrink-0 po-w-6 po-h-6 po-stroke-red-600 po-stroke-2" }),
        a("div", Of, [
          a("h3", Pf, $(e.request.type), 1),
          a("p", Ef, [
            J(" The following " + $(e.request.type) + " was reported: ", 1),
            a("span", Lf, [
              J($(e.request.dispute_type), 1),
              e.request.date_of_death ? (i(), c("span", Tf, " (New date: " + $(e.request.date_of_death) + ")", 1)) : y("", !0)
            ])
          ])
        ])
      ])) : y("", !0),
      S(Cc, null, {
        content: D(() => [
          e.member !== null ? (i(), c("div", Df, [
            Af,
            a("dd", null, $(e.member.name), 1)
          ])) : y("", !0),
          e.member !== null ? (i(), c("div", zf, [
            Bf,
            a("dd", null, $(e.member.identifier), 1)
          ])) : y("", !0),
          e.member !== null ? (i(), c("div", Mf, [
            jf,
            a("dd", null, $(e.member.dob), 1)
          ])) : y("", !0),
          e.record !== null ? (i(), c("div", Nf, [
            If,
            a("dd", null, $(e.record.date_of_death), 1)
          ])) : y("", !0)
        ]),
        _: 1
      }),
      e.request === null ? (i(), c("span", Rf, [
        S(Do, {
          type: "simple",
          onButtonClick: o
        }, {
          label: D(() => [
            a("span", Ff, [
              S(w(ss), { class: "po-w-4 po-h-4 po-stroke-current" }),
              Hf
            ])
          ]),
          _: 1
        })
      ])) : y("", !0)
    ]));
  }
}), Wf = {
  role: "button",
  class: "po-w-6 po-h-6 po-rounded-lg po-bg-white genie-effect po-flex po-items-center po-justify-center hover:po-bg-slate-50 po-cursor-pointer"
}, Uf = {
  name: "PoTableAction"
}, U2 = /* @__PURE__ */ Object.assign(Uf, {
  props: {
    /**
     * Heroicon outline 24. Not needed for 'text', 'view', 'edit', or 'delete' types.
     */
    btnIcon: Function,
    /**
     * Button type. By default it's set to 'text'. You can have 'text', 'icon', 'view', 'edit', or 'delete' types.
     */
    btnType: {
      type: String,
      default: "text"
    },
    /**
     * For text buttons a label is needed. Not needed for 'icon', 'view', 'edit', or 'delete' types.
     */
    label: {
      type: String,
      default: ""
    },
    /**
     * Label color for text icons. Not needed for 'icon', 'view', 'edit', or 'delete' types.
     */
    textColor: {
      type: String,
      default: "po-slate-500"
    },
    /**
     * Icon stroke color. Not needed for 'text', 'view', 'edit', or 'delete' types.
     */
    iconColor: {
      type: String,
      default: "po-stroke-slate-500"
    }
  },
  setup(e) {
    const t = e, o = C(), l = C(), n = C(t.label);
    return t.btnType === "view" ? (o.value = ds, n.value = t.label === "" ? "View" : t.label) : t.btnType === "edit" ? (o.value = vs, n.value = t.label === "" ? "Edit" : t.label) : t.btnType === "delete" ? (o.value = ms, n.value = t.label === "" ? "Delete" : t.label) : t.btnType === "icon" && t.btnIcon && (o.value = t.btnIcon), t.btnType === "view" ? l.value = "po-stroke-emerald-400" : t.btnType === "edit" ? l.value = "po-stroke-blue-400" : t.btnType === "delete" ? l.value = "po-stroke-red-400" : l.value = t.iconColor, (s, r) => (i(), c("span", null, [
      e.btnType === "icon" || e.btnType === "delete" || e.btnType === "edit" || e.btnType === "view" ? (i(), M(w(go), {
        key: 0,
        text: n.value,
        placement: "bottom",
        strategy: "fixed"
      }, {
        default: D(() => [
          a("span", Wf, [
            (i(), M(de(o.value), {
              class: E(["po-w-4 po-stroke-2", l.value])
            }, null, 8, ["class"]))
          ])
        ]),
        _: 1
      }, 8, ["text"])) : (i(), c("span", {
        key: 1,
        role: "button",
        class: E(["po-block po-text-sm genie-effect", e.textColor])
      }, $(e.label), 3))
    ]));
  }
}), Gf = { key: 0 }, Zf = {
  name: "Rufiyaa"
}, G2 = /* @__PURE__ */ Object.assign(Zf, {
  props: {
    /**
     * Rufiyaa symbol width in tailwind w-[x] default w-3
     */
    symbolWidth: {
      type: String,
      default: "po-w-3"
    },
    /**
     * Rufiyaa symbol fill-color
     */
    symbolFillColor: {
      type: String,
      default: "po-fill-current"
    },
    /**
     * Amount
     */
    amount: {
      type: [Number, String],
      default: null
    }
  },
  setup(e) {
    function t(o) {
      const l = typeof o == "string" ? parseFloat(o.replace(/,/g, "")) : o;
      return isNaN(l) ? "" : l.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    }
    return (o, l) => (i(), c("span", null, [
      e.amount !== null ? (i(), c("span", Gf, $(t(e.amount)), 1)) : y("", !0)
    ]));
  }
}), Kf = {
  name: "PoHeading"
}, Z2 = /* @__PURE__ */ Object.assign(Kf, {
  props: {
    /**
     * Heading text
     */
    text: {
      type: String,
      default: ""
    },
    /**
     * Heading type h1 h2 h3, default h3
     */
    type: {
      type: String,
      default: "h3"
    }
  },
  setup(e) {
    return (t, o) => (i(), M(de(e.type), { class: "po-text-base po-text-slate-600 po-font-semibold" }, {
      default: D(() => [
        J($(e.text), 1)
      ]),
      _: 1
    }));
  }
});
function Yf(e, t) {
  if (!e)
    return;
  const o = (l) => {
    l.target !== e.value && l.composedPath().includes(e.value) || typeof t == "function" && t();
  };
  return U(() => {
    window.addEventListener("click", o);
  }), At(() => {
    window.removeEventListener("click", o);
  }), { listener: o };
}
const Xf = ["for"], Qf = { class: "po-capitalize" }, Jf = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, e4 = ["title"], t4 = { class: "po-relative po-mt-1" }, o4 = { class: "po-shrink-0 po-pr-1 po-inline-flex po-flex-wrap po-w-full po-gap-1 po-max-h-44" }, l4 = { class: "po-px-2 po-py-1 po-rounded-md po-text-sm po-text-slate-600 po-flex po-space-x-2 po-items-center po-bg-gradient-to-l po-from-slate-50 po-via-cyan-50 po-to-cyan-100/60 po-border po-border-cyan-200" }, n4 = ["onClick"], s4 = ["id"], a4 = {
  key: 0,
  class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
}, r4 = ["onClick", "value"], i4 = {
  class: /* @__PURE__ */ E(["po-block po-truncate"])
}, u4 = ["id"], p4 = ["id"], c4 = {
  name: "PoMultiSelect",
  components: { CheckIcon: us }
}, K2 = /* @__PURE__ */ Object.assign(c4, {
  props: {
    /**
     * Model value
     */
    modelValue: {
      type: Array,
      default: null
    },
    /**
     * Input label text
     */
    label: {
      type: String,
      default: ""
    },
    /**
     * Input type
     */
    type: {
      type: String,
      default: "text"
    },
    /**
     * Input display vertifal (default) or horizontal
     */
    display: {
      type: String,
      default: "vertical"
    },
    /**
     * Input id text
     */
    id: {
      type: String,
      default: ""
    },
    /**
     * A tool tip, helper information
     */
    info: {
      type: String,
      default: null
    },
    /**
     * Tip, description, information for the input
     */
    message: {
      type: String,
      default: null
    },
    /**
     * Error message
     */
    errorMessage: {
      type: String,
      default: null
    },
    /**
     * True or False has error
     */
    hasError: {
      type: Boolean,
      default: !1
    },
    /**
     * True or false if required
     */
    required: {
      type: Boolean,
      default: !1
    },
    /**
     * True or false if disabled
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * True or false if required
     */
    placeholder: {
      type: String,
      default: null
    },
    /**
     * True or false if required
     */
    borderColor: {
      type: String,
      default: "po-border-slate-300 focus:po-border-mpao-lightblue"
    },
    items: {
      type: Array,
      default: null
    }
  },
  emits: ["selected", "unSelected", "update:modelValue"],
  setup(e, { emit: t }) {
    const o = e;
    function l() {
      return o.hasError ? "po-border-red-400 focus:po-border-red-600 focus:po-ring-red-600" : o.borderColor;
    }
    const n = C(""), s = C([]), r = C(!1);
    function u(x) {
      s.value.splice(x, 1), d();
    }
    function p(x) {
      let v = n.value.split(",");
      x.key === "Enter" && 0 < n.value.length && (x.preventDefault(), v.forEach((k) => {
        let V = o.items.find(
          (P) => P.name.toLowerCase() === k.trim().toLowerCase()
        );
        V && s.value.push(V);
      }), n.value = ""), x.key === "Backspace" && n.value.length === 0 && r.value && s.value.pop(), d();
    }
    const f = C([]);
    function d() {
      f.value = s.value.map((x) => x.id);
    }
    U(() => {
      document.addEventListener("keydown", p);
    }), se(() => {
      document.removeEventListener("keydown", p);
    });
    const h = C(!1), b = T(
      () => n.value === "" ? o.items : o.items.filter((x) => x.name.toLowerCase().includes(n.value.toLowerCase()))
    );
    let m = C();
    Yf(m, () => {
      h.value = !1;
    });
    function g(x) {
      s.value.push(x), n.value = "", d();
    }
    return X(f, () => {
      t("update:modelValue", f.value);
    }), (x, v) => (i(), c("div", {
      ref_key: "multiSelectComponentRef",
      ref: m,
      class: E(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      a("label", {
        for: e.id,
        class: E([
          "po-text-sm po-font-medium po-flex po-items-center po-space-x-1",
          { "po-text-red-500": e.hasError },
          { "po-text-slate-700": !e.hasError }
        ])
      }, [
        a("span", Qf, $(e.label), 1),
        e.required ? (i(), c("span", Jf, "*")) : y("", !0),
        e.info !== null ? (i(), c("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          S(w(Ln), { class: "po-fill-current" })
        ], 8, e4)) : y("", !0)
      ], 10, Xf),
      a("div", t4, [
        a("div", {
          class: E([
            "po-border po-p-1 po-min-h-[2.38rem] po-flex po-flex-wrap po-items-center focus-within:po-border-mpao-lightblue po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white sm:po-text-sm",
            l()
          ])
        }, [
          a("div", o4, [
            s.value.length > 0 ? (i(!0), c(B, { key: 0 }, q(s.value, (k, V) => (i(), c("span", l4, [
              a("span", null, $(k.name), 1),
              a("span", {
                onClick: () => u(V),
                role: "button",
                class: "po-cursor-pointer"
              }, [
                S(w(vt), { class: "po-w-3 po-stroke-red-600 po-stroke-2" })
              ], 8, n4)
            ]))), 256)) : y("", !0),
            Pe(a("input", {
              id: e.id,
              "onUpdate:modelValue": v[0] || (v[0] = (k) => n.value = k),
              onFocus: v[1] || (v[1] = () => {
                h.value = !0, r.value = !0;
              }),
              onBlur: v[2] || (v[2] = () => r.value = !1),
              class: "po-border-0 po-outline-none po-ring-0 po-grow"
            }, null, 40, s4), [
              [Tt, n.value]
            ])
          ])
        ], 2),
        h.value ? (i(), c("ul", a4, [
          (i(!0), c(B, null, q(w(b), (k) => (i(), c("li", {
            onClick: () => g(k),
            key: k.id,
            value: k.id,
            class: E([
              "po-relative po-select-none po-py-2 hover:po-bg-mpao-lightblue hover:po-text-white po-cursor-pointer po-pl-3 po-pr-9"
            ])
          }, [
            a("span", i4, $(k.name), 1)
          ], 8, r4))), 128))
        ])) : y("", !0)
      ]),
      e.message !== null ? (i(), c("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, $(e.message), 9, u4)) : y("", !0),
      e.hasError && e.errorMessage !== null ? (i(), c("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-center po-space-x-1",
        id: `${e.id}-error`
      }, [
        S(w(zu), { class: "po-fill-current po-w-4" }),
        a("span", null, $(e.errorMessage), 1)
      ], 8, p4)) : y("", !0)
    ], 2));
  }
}), d4 = { class: "po-flex po-pl-5" }, f4 = /* @__PURE__ */ a("div", { class: "po-shrink-0 po-flex po-flex-col" }, [
  /* @__PURE__ */ a("div", { class: "po-w-[2px] po-shrink-0 po-h-10" }),
  /* @__PURE__ */ a("div", { class: "po-bg-gradient-to-t po-from-orange-400 po-via-red-300 po-to-blue-500 po-w-[2px] po-grow" }),
  /* @__PURE__ */ a("div", { class: "po-w-[2px] po-shrink-0 po-h-12" })
], -1), v4 = { class: "po-grow po-pl-5 po-pt-5 po-space-y-3" }, h4 = ["onClick"], m4 = { class: "-po-mt-1 po-flex po-space-x-3 po-items-center" }, g4 = { class: "po-block po-text-xs po-text-slate-400" }, b4 = { class: "po-text-xs po-text-slate-500 po-pt-1" }, y4 = {
  name: "PoTimeline"
}, Y2 = /* @__PURE__ */ Object.assign(y4, {
  props: {
    /**
     * array of timeline items [{current:Boolean, label:String, date:String, description:String}]
     */
    timeline: {
      type: Array,
      default: null
    },
    clickable: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, l) => (i(), c("div", d4, [
      f4,
      a("div", v4, [
        (i(!0), c(B, null, q(e.timeline, (n) => (i(), c("div", {
          class: E(["po-px-2 po-pt-2 po-pb-6 po-relative po-group", [{ "po-cursor-pointer": e.clickable }]]),
          onClick: (s) => o.$emit("button-click", n)
        }, [
          a("span", {
            class: E(["po-rounded-full po-absolute po-flex po-items-center po-justify-center", [
              { "po-w-4 po-h-4 -po-left-[1.8rem] po-bg-blue-400": n.current },
              {
                "po-w-3 po-h-3 -po-left-[1.68rem] po-bg-green-400": !n.current
              }
            ]])
          }, [
            a("span", {
              class: E(["po-rounded-full po-bg-white", [
                { "po-w-2 po-h-2": n.current },
                { "po-w-1 po-h-1": !n.current }
              ]])
            }, null, 2)
          ], 2),
          a("div", null, [
            a("div", m4, [
              a("h4", {
                class: E(["po-text-sm po-text-slate-600 po-font-medium", [{ "group-hover:po-text-mpao-lightblue": e.clickable }]])
              }, $(n.label), 3),
              a("span", g4, $(w(Jn)(n.date)), 1)
            ]),
            a("p", b4, $(n.description), 1)
          ])
        ], 10, h4))), 256))
      ])
    ]));
  }
}), x4 = {
  name: "PoTableCheckbox"
}, X2 = /* @__PURE__ */ Object.assign(x4, {
  props: {
    /**
     * Model value this is a Boolean of checked/unchecked state
     */
    itemId: {
      type: Number,
      requred: !0
    },
    /**
     * Model value this is a Boolean of checked/unchecked state
     */
    isChecked: {
      type: Boolean,
      requred: !0
    },
    /**
     * Disable check... shows a checkmark in disabled state
     */
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["checkboxClicked"],
  setup(e, { emit: t }) {
    return (o, l) => (i(), c(B, null, [
      e.isChecked ? (i(), M(w(fl), {
        key: 0,
        onClick: l[0] || (l[0] = re(() => o.$emit("checkboxClicked", e.itemId), ["prevent"])),
        class: "po-w-6 po-fill-mpao-lightblue po-cursor-pointer"
      })) : y("", !0),
      e.disabled ? (i(), M(w(fl), {
        key: 1,
        class: "po-w-6 po-fill-slate-400"
      })) : y("", !0),
      !e.isChecked && !e.disabled ? (i(), c("span", {
        key: 2,
        onClick: l[1] || (l[1] = re(() => o.$emit("checkboxClicked", e.itemId), ["prevent"])),
        class: "po-h-5 po-w-5 po-rounded-full po-border-2 po-ml-[2px] po-block po-border-slate-300 po-cursor-pointer"
      })) : y("", !0)
    ], 64));
  }
}), w4 = { class: "po-p-4" }, $4 = { class: "po-flex po-items-start po-space-x-3" }, V4 = /* @__PURE__ */ a("span", { class: "po-sr-only" }, "Action icon", -1), k4 = { class: "po-w-0 po-flex-1 po-text-sm po-font-medium po-text-gray-400" }, _4 = { class: "po-ml-4 po-flex po-flex-shrink-0" }, C4 = /* @__PURE__ */ a("span", { class: "po-sr-only" }, "Close", -1), S4 = {
  name: "PoToast"
}, Q2 = /* @__PURE__ */ Object.assign(S4, {
  props: {
    /**
     * Pass model Open/Close to the component
     */
    show: {
      type: Boolean,
      default: !1
    },
    /**
     * Toast action types. Default ''. Options 'success', 'danger', 'warn'
     */
    actionType: {
      type: String,
      default: ""
    },
    /**
     * Toast message. Default '', keeping it empty and setting an actionType will show default messages for the action type. Keep this short like Saved Successfully!
     */
    message: {
      type: String,
      default: ""
    },
    /**
     * Number of miliseconds to hide the toast in. By default it's 2000
     */
    hideIn: {
      type: Number,
      default: 2e3
    },
    /**
     * Toast size default: sm... other options: lg, xl
     */
    size: {
      type: String,
      default: "sm"
    }
  },
  emits: ["toast-closed"],
  setup(e, { emit: t }) {
    const o = e, { show: l } = xe(o), n = C(!1);
    X(l, () => {
      n.value = l.value;
    });
    function s() {
      n.value = !1, t("toast-closed", !0);
    }
    setTimeout(() => {
      s();
    }, o.hideIn);
    const r = T(() => o.message === "" && o.actionType !== "" ? o.actionType === "success" ? "Saved Successfully!" : o.actionType === "danger" ? "Item deleted!" : o.actionType === "warn" ? "Attention needed!" : "Wrong action" : o.message);
    return (u, p) => (i(), M(ft, { to: "#po-notifications-alert" }, [
      S(Me, {
        "enter-active-class": "po-transform po-ease-out po-duration-300 po-transition",
        "enter-from-class": "po-translate-y-2 po-opacity-0 sm:po-translate-y-0 sm:po-translate-x-2",
        "enter-to-class": "po-translate-y-0 po-opacity-100 sm:po-translate-x-0",
        "leave-active-class": "po-transition po-ease-in po-duration-100",
        "leave-from-class": "po-opacity-100",
        "leave-to-class": "po-opacity-0"
      }, {
        default: D(() => [
          n.value ? (i(), c("div", {
            key: 0,
            class: E(["po-pointer-events-auto po-w-full po-overflow-hidden po-rounded-lg po-bg-gray-900 po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5", [
              { "po-max-w-[260px]": e.size === "sm" },
              { "po-max-w-[360px]": e.size === "lg" },
              { "po-max-w-[560px]": e.size === "xl" }
            ]])
          }, [
            a("div", w4, [
              a("div", $4, [
                e.actionType !== "" ? (i(), c("div", {
                  key: 0,
                  class: E(["po-inline-flex po-items-center po-justify-center po-flex-shrink-0 po-w-6 po-h-6 po-rounded-lg", [
                    {
                      "po-bg-mpao-green po-text-green-100": e.actionType === "success"
                    },
                    { "po-bg-mpao-red po-text-red-100": e.actionType === "danger" },
                    {
                      "po-bg-mpao-orange po-text-orange-100": e.actionType === "warn"
                    }
                  ]])
                }, [
                  e.actionType === "success" ? (i(), M(w(Lr), {
                    key: 0,
                    class: "po-w-4 po-h-4"
                  })) : y("", !0),
                  e.actionType === "danger" ? (i(), M(w(Ar), {
                    key: 1,
                    class: "po-w-4 po-h-4"
                  })) : y("", !0),
                  e.actionType === "warn" ? (i(), M(w(fn), {
                    key: 2,
                    class: "po-w-4 po-h-4"
                  })) : y("", !0),
                  V4
                ], 2)) : y("", !0),
                a("p", k4, $(w(r)), 1),
                a("div", _4, [
                  a("button", {
                    type: "button",
                    onClick: s,
                    class: "po-inline-flex po-rounded-md po-bg-gray-900 po-text-gray-400 hover:po-text-gray-300 hover:po-bg-gray-700 po-transition-colors po-duration-150 po-ease-out focus:po-outline-none focus:po-ring-2 focus:po-ring-indigo-500 focus:po-ring-offset-2"
                  }, [
                    C4,
                    S(w(vn), {
                      class: "po-h-5 po-w-5",
                      "aria-hidden": "true"
                    })
                  ])
                ])
              ])
            ])
          ], 2)) : y("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), O4 = ["for"], P4 = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, E4 = ["title"], L4 = { class: "po-relative po-mt-1" }, T4 = {
  key: 1,
  class: "po-absolute po-top-0 po-left-0 po-right-0 po-bottom-0 po-overflow-hidden po-bg-white po-rounded-md po-border po-border-slate-300 po-flex po-items-center"
}, D4 = { class: "po-grow" }, A4 = ["id"], z4 = ["onClick"], B4 = {
  key: 0,
  class: "po-text-sm po-text-slate-600 po-p-4 po-block"
}, M4 = {
  key: 0,
  class: "po-mt-2 po-text-sm po-text-slate-500",
  id: "-description"
}, j4 = {
  key: 1,
  class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
  id: "-error"
}, N4 = {
  name: "PoSelectApi",
  components: { XMarkIcon: vt }
}, J2 = /* @__PURE__ */ Object.assign(N4, {
  props: {
    /**
     * Options list
     */
    options: {
      type: Array,
      default: null
    },
    /**
     * Input id text
     */
    id: {
      type: String,
      default: ""
    },
    /**
     * Show loading true/false default false
     */
    loading: {
      type: Boolean,
      default: !1
    },
    /**
     * Show show/hide more button
     */
    showMoreBtn: {
      type: Boolean,
      default: !1
    },
    /**
     * Label text
     */
    label: {
      type: String,
      default: ""
    },
    /**
     * A tool tip, helper information
     */
    info: {
      type: String,
      default: null
    },
    /**
     * Input display vertifal (default) or horizontal
     */
    display: {
      type: String,
      default: "vertical"
    },
    /**
     * True or false if required
     */
    required: {
      type: Boolean,
      default: !1
    },
    /**
     * Error message
     */
    errorMessage: {
      type: String,
      default: null
    },
    /**
     * Tip, description, information for the input
     */
    message: {
      type: String,
      default: null
    },
    /**
     * True or false if disabled
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * Shown when user clicks on the input.
     */
    emptyMessage: {
      type: String,
      default: null
    },
    /**
     * By default, selected option is shown, incase you don't want this behavior, you can set this prop to false.
     */
    showSelected: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["search", "selected", "loadmore"],
  setup(e, { emit: t }) {
    const o = e, l = C(null), n = C(!1), s = C([]);
    X(o, (v, k) => {
      s.value = o.options;
    }), T(() => {
      if (l.value) {
        const v = document.querySelector(".shell-content--area"), { top: k } = v.getBoundingClientRect(), V = v.scrollTop, { top: P, left: _, width: O } = l.value.getBoundingClientRect();
        return { relativeTop: P - k + V, left: _, width: O };
      }
    });
    const r = C(null);
    C(null);
    const u = (v) => {
      !r.value.contains(v.target) && !l.value.contains(v.target) && (n.value = !1);
    }, p = C("");
    U(() => {
      o.id === "" ? p.value = o.label.replace(/\s/g, "") + "-" + Date.now() + "-selectapi-" + Math.floor(Math.random() * 9e3) : p.value = o.id, document.addEventListener("click", u), setTimeout(() => {
        document.activeElement === l.value ? n.value = !0 : n.value = !1;
      }, 100);
    }), At(() => {
      document.removeEventListener("click", u);
    });
    const f = C();
    function d() {
      t("search", f.value);
    }
    const h = C(null);
    function b(v) {
      h.value = v, t("selected", v), n.value = !1;
    }
    function m() {
      t("loadmore", !0);
    }
    const g = C(null);
    let x;
    return U(() => {
      x = qo(l.value, g.value, {
        placement: "bottom-end",
        strategy: "fixed",
        modifiers: [
          {
            name: "sameWidth",
            enabled: !0,
            fn: ({ state: v }) => {
              v.styles.popper.width = `${v.rects.reference.width}px`;
            },
            phase: "beforeWrite",
            requires: ["computeStyles"]
          }
        ]
      });
    }), se(() => {
      x && x.destroy();
    }), (v, k) => (i(), c("div", {
      ref_key: "containerRef",
      ref: r,
      class: E(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      a("label", {
        for: p.value,
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700"
      }, [
        a("span", null, $(e.label), 1),
        e.required ? (i(), c("span", P4, "*")) : y("", !0),
        e.info !== null ? (i(), c("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          S(w(Wt), { class: "po-fill-current" })
        ], 8, E4)) : y("", !0)
      ], 8, O4),
      a("div", L4, [
        a("div", null, [
          e.loading ? (i(), M(qt, {
            key: 0,
            class: "po-right-0 po-top-4",
            absolute: !0
          })) : y("", !0),
          h.value !== null && e.showSelected ? (i(), c("div", T4, [
            a("div", D4, [
              K(v.$slots, "selectedOption", Xe(Qe(h.value)), () => [
                J($(h.value), 1)
              ])
            ]),
            a("span", {
              class: "po-shrink-0 po-p-1 po-cursor-pointer",
              onClick: k[0] || (k[0] = (V) => {
                h.value = null, f.value = "";
              })
            }, [
              S(w(vt), { class: "po-w-4 po-stroke-2 po-stroke-slate-400" })
            ])
          ])) : y("", !0),
          Pe(a("input", {
            type: "text",
            name: "",
            id: p.value,
            ref_key: "selectBox",
            ref: l,
            "onUpdate:modelValue": k[1] || (k[1] = (V) => f.value = V),
            onInput: d,
            onFocus: k[2] || (k[2] = (V) => n.value = !0),
            class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm"
          }, null, 40, A4), [
            [Tt, f.value]
          ])
        ]),
        Pe(a("div", {
          ref_key: "popper",
          ref: g,
          class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
        }, [
          s.value && s.value.length > 0 ? (i(), c(B, { key: 0 }, [
            (i(!0), c(B, null, q(s.value, (V) => (i(), c("div", {
              onClick: (P) => b(V)
            }, [
              K(v.$slots, "option", Xe(Qe(V)), () => [
                J($(V), 1)
              ])
            ], 8, z4))), 256)),
            e.showMoreBtn ? (i(), c("span", {
              key: 0,
              role: "button",
              onClick: m,
              class: "po-text-sm po-text-semibold po-text-mpao-lightblue po-block po-text-center po-py-2 hover:po-bg-slate-50 po-transition-colors po-duration-150 po-ease-out"
            }, "More")) : y("", !0)
          ], 64)) : (i(), c(B, { key: 1 }, [
            e.emptyMessage ? (i(), c("span", B4, $(e.emptyMessage), 1)) : y("", !0)
          ], 64))
        ], 512), [
          [
            xo,
            n.value && s.value.length > 0 || n.value && e.emptyMessage
          ]
        ]),
        e.message !== null ? (i(), c("p", M4, $(e.message), 1)) : y("", !0),
        e.errorMessage !== null ? (i(), c("p", j4, [
          a("span", null, $(e.errorMessage), 1)
        ])) : y("", !0)
      ])
    ], 2));
  }
}), I4 = { class: "po-bg-blue-300/20 po-border po-border-blue-200 po-p-3 po-mb-5 po-rounded-md po-text-sm sm:po-space-x-2 po-flex po-items-center po-flex-wrap" }, R4 = { class: "po-text-blue-500" }, F4 = {
  name: "PoMessage"
}, e5 = /* @__PURE__ */ Object.assign(F4, {
  props: {
    /**
     * Message type. Default: info
     */
    msgType: {
      type: String,
      default: "info"
    },
    /**
     * The message body
     */
    message: {
      type: String,
      default: ""
    },
    /**
     * Name of the link
     */
    btnName: {
      type: String,
      default: ""
    },
    /**
     * URL of the link. This can be a string or an object. Emitted when button is clicked
     */
    btnAction: {
      type: [String, Object],
      default: ""
    }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, l) => (i(), c("div", I4, [
      a("span", R4, $(e.message), 1),
      e.btnName !== "" ? (i(), c("span", {
        key: 0,
        role: "button",
        onClick: l[0] || (l[0] = (n) => o.$emit("button-click", e.btnAction)),
        class: "po-text-blue-600 po-underline po-font-medium po-text-xs"
      }, $(e.btnName), 1)) : y("", !0)
    ]));
  }
}), H4 = {
  key: 0,
  class: "po-flex md:po-justify-end"
}, q4 = ["onClick"], W4 = { class: "po-text-xl po-font-medium po-text-slate-600 po-flex po-items-center po-space-x-1" }, U4 = {
  name: "PoPageStats"
}, t5 = /* @__PURE__ */ Object.assign(U4, {
  props: {
    /**
     * Page stats
     */
    stats: {
      type: Array,
      default: null
    },
    /**
     * True or false if it's clickable
     */
    clickable: {
      type: Boolean,
      default: !0
    },
    /**
     * Block padding. default: py-5 px-2
     */
    padding: {
      type: String,
      default: "po-py-5 po-px-2"
    }
  },
  emits: ["stat-click"],
  setup(e, { emit: t }) {
    function o(l) {
      return l.iconColor ? l.iconColor : "po-slate-600";
    }
    return (l, n) => e.stats !== null ? (i(), c("div", H4, [
      a("div", {
        class: E(["po-bg-slate-50 po-shadow-sm po-rounded-xl po-divide-x po-divide-slate-200 po-flex", e.padding])
      }, [
        (i(!0), c(B, null, q(e.stats, (s) => (i(), c("div", {
          class: E(["po-px-4 po-group", { "po-cursor-pointer": e.clickable }]),
          onClick: (r) => l.$emit("stat-click", s)
        }, [
          a("span", W4, [
            s.icon ? (i(), c("span", {
              key: 0,
              class: E(["po-w-5 po-h-5", o(s)])
            }, [
              (i(), M(de(s.icon)))
            ], 2)) : y("", !0),
            a("span", {
              class: E(["po-text-xl po-font-medium po-text-slate-600", { "group-hover:po-text-mpao-lightblue": e.clickable }])
            }, $(s.value), 3)
          ]),
          a("span", {
            class: E(["po-text-sm po-text-slate-500 po-block", { "group-hover:po-text-mpao-lightblue": e.clickable }])
          }, $(s.label), 3)
        ], 10, q4))), 256))
      ], 2)
    ])) : y("", !0);
  }
}), G4 = {
  name: "PoTooltip"
}, go = /* @__PURE__ */ Q({
  ...G4,
  props: {
    text: { default: "" },
    placement: { default: "bottom" },
    strategy: { default: "absolute" }
  },
  setup(e) {
    const t = e, o = C(null), l = C(null), n = C(!1);
    let s = null;
    U(() => {
      o.value && l.value && (s = qo(o.value, l.value, {
        placement: t.placement,
        strategy: t.strategy
      }));
    }), se(() => {
      s && (s.destroy(), s = null);
    });
    function r() {
      n.value = !0;
    }
    function u() {
      n.value = !1;
    }
    return (p, f) => (i(), c("span", {
      ref_key: "trigger",
      ref: o,
      onMouseover: r,
      onMouseleave: u
    }, [
      K(p.$slots, "default", {}, () => [
        J("Tooltip")
      ]),
      (i(), M(ft, { to: "body" }, [
        Pe(a("div", {
          ref_key: "popper",
          ref: l,
          class: E(["po-bg-slate-700 po-text-xs po-z-50 po-transition-opacity po-duration-100 po-ease-linear po-text-slate-50 po-rounded-md po-px-2 po-py-1 po-shadow-md", [{ "po-opacity-0": !n.value }, { "po-opacity-100": n.value }]])
        }, $(e.text), 3), [
          [xo, e.text]
        ])
      ]))
    ], 544));
  }
}), Z4 = ["for"], K4 = { class: "po-capitalize" }, Y4 = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, X4 = ["title"], Q4 = ["for"], J4 = {
  key: 0,
  class: "po-flex po-items-center po-space-x-2"
}, e2 = {
  key: 1,
  class: "po-flex po-items-center po-space-x-2"
}, t2 = { class: "po-grow po-text-sm po-text-slate-600" }, o2 = /* @__PURE__ */ a("span", null, "Uploading... ", -1), l2 = { class: "po-shrink-0 po-relative po-top-[3px]" }, n2 = ["name", "id", "value", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], s2 = ["id"], a2 = ["id"], r2 = {
  name: "PoUpload"
}, o5 = /* @__PURE__ */ Object.assign(r2, {
  props: {
    /**
     * Model value
     */
    payload: {
      type: Object,
      default: () => ({})
    },
    /**
     * Model value
     */
    url: {
      type: [String],
      default: ""
    },
    /**
     * Model value
     */
    modelValue: {
      type: [String, Number],
      default: ""
    },
    /**
     * Input label text
     */
    label: {
      type: String,
      default: ""
    },
    /**
     * Input display vertifal (default) or horizontal
     */
    display: {
      type: String,
      default: "vertical"
    },
    /**
     * Input id text
     */
    id: {
      type: String,
      default: "fileupload"
    },
    /**
     * A tool tip, helper information
     */
    info: {
      type: String,
      default: null
    },
    /**
     * Tip, description, information for the input
     */
    message: {
      type: String,
      default: null
    },
    /**
     * Error message
     */
    errorMessage: {
      type: String,
      default: null
    },
    /**
     * True or False has error.. NO LONGER HAVE TO USE THIS. JUST PASS AN errorMessage.
     */
    hasError: {
      type: Boolean,
      default: !1
    },
    /**
     * True or false if required
     */
    required: {
      type: Boolean,
      default: !1
    },
    /**
     * True or false if disabled
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * True or false if required
     */
    borderColor: {
      type: String,
      default: "border-slate-300 focus:border-mpao-lightblue"
    },
    /**
     * True or false if disabled
     */
    inputLabel: {
      type: String,
      default: "Choose File"
    }
  },
  emits: [
    "selected",
    "unSelected",
    "update:modelValue",
    "uploaded"
  ],
  setup(e, { emit: t }) {
    const o = e, { errorMessage: l } = xe(o), n = C(l.value !== null);
    X(l, (h, b) => {
      n.value = l.value !== null && l.value !== "";
    });
    const s = C([]), r = C("initial");
    function u(h) {
      r.value = "uploading";
      const b = useCookie("auth_token");
      fetch(`${f()}`, {
        method: "POST",
        headers: {
          // Set the authorization header with the auth token from 'auth_token' cookie
          Authorization: `Bearer ${b.value}`
        },
        body: p(h)
      }).then(
        function(m) {
          m.status != 201 ? this.fetchError = m.status : m.json().then(function(g) {
          }.bind(this)), r.value = "initial", t("uploaded", m);
        }.bind(this)
      );
    }
    function p(h) {
      let b = new FormData();
      for (const m of h.target.files)
        b.append("files", m);
      return b.append("payload", JSON.stringify(o.payload)), b;
    }
    function f() {
      const h = o == null ? void 0 : o.url;
      return h.includes("http") ? o == null ? void 0 : o.url : `${useRuntimeConfig().public.api}/${h}`;
    }
    function d() {
      return o.hasError ? "po-border-red-400 focus:po-border-red-600 focus:po-ring-red-600" : o.borderColor;
    }
    return (h, b) => (i(), c("div", {
      class: E(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      a("label", {
        disabled: !0,
        for: `${e.id}-upload-field`,
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700 po-mb-1"
      }, [
        a("span", K4, $(e.label), 1),
        e.required ? (i(), c("span", Y4, "*")) : y("", !0),
        e.info !== null ? (i(), c("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          S(w(Wt), { class: "po-fill-current" })
        ], 8, X4)) : y("", !0)
      ], 8, Z4),
      a("label", {
        for: e.id,
        class: E([
          "po-border po-block po-p-2 po-text-sm po-text-slate-600 po-cursor-pointer po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white focus:po-ring-0 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default",
          d()
        ])
      }, [
        r.value === "initial" ? (i(), c("span", J4, [
          S(w(Et), { class: "po-w-4 po-stroke-slate-500" }),
          a("span", null, $(e.inputLabel), 1)
        ])) : y("", !0),
        r.value === "uploading" ? (i(), c("span", e2, [
          S(w(Et), { class: "po-w-4 po-stroke-slate-500" }),
          a("div", t2, [
            o2,
            a("span", null, "(" + $(s.value.length) + ")", 1)
          ]),
          a("div", l2, [
            S(qt)
          ])
        ])) : y("", !0)
      ], 10, Q4),
      a("input", ke({
        type: "file",
        name: `${e.id}-upload-field`,
        id: e.id,
        value: e.modelValue,
        disabled: e.disabled,
        required: e.required,
        "aria-describedby": `${e.id}-description`,
        "aria-required": e.required,
        "aria-disabled": e.disabled
      }, h.$attrs, {
        onChange: u,
        class: "po-hidden",
        multiple: ""
      }), null, 16, n2),
      e.message !== null ? (i(), c("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, $(e.message), 9, s2)) : y("", !0),
      n.value && w(l) !== null ? (i(), c("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
        id: `${e.id}-error`
      }, [
        a("span", null, $(w(l)), 1)
      ], 8, a2)) : y("", !0)
    ], 2));
  }
});
export {
  f2 as PoActionBar,
  T2 as PoAlert,
  Ts as PoAppIcon,
  Ha as PoAppTray,
  Do as PoButton,
  v2 as PoCard,
  h2 as PoCardSearch,
  j2 as PoCardTabs,
  O2 as PoChatLogItem,
  V2 as PoCheckbox,
  L2 as PoCommandPalette,
  M2 as PoConsent,
  z2 as PoContentArea,
  W2 as PoDRStatus,
  Cc as PoDescriptionList,
  A2 as PoDownloadFileList,
  b2 as PoDynamicTable,
  I2 as PoEmpty,
  k2 as PoFooter,
  _2 as PoFormStatusMessage,
  Z2 as PoHeading,
  y2 as PoInputField,
  x2 as PoInputFile,
  B2 as PoLoading,
  D2 as PoLogs,
  e5 as PoMessage,
  xt as PoModal,
  K2 as PoMultiSelect,
  P2 as PoNotification,
  tr as PoNotificationHub,
  t5 as PoPageStats,
  m2 as PoPageTitle,
  Ap as PoPagination,
  Sr as PoProfileSwitcher,
  C2 as PoRadioInput,
  Ms as PoSearchBar,
  $2 as PoSectionMenu,
  J2 as PoSelectApi,
  Vu as PoSelectField,
  d2 as PoSidebarDrawer,
  E2 as PoSlideover,
  S2 as PoStatsBlock,
  g2 as PoTable,
  U2 as PoTableAction,
  X2 as PoTableCheckbox,
  N2 as PoTabs,
  Wu as PoTextarea,
  Y2 as PoTimeline,
  Q2 as PoToast,
  w2 as PoToggle,
  go as PoTooltip,
  p2 as PoTopBar,
  o5 as PoUpload,
  G2 as Rufiyaa
};
