import { openBlock as r, createElementBlock as u, createElementVNode as s, ref as k, toRefs as ve, watch as U, Fragment as z, createVNode as C, unref as g, withCtx as T, renderSlot as R, createBlock as D, resolveDynamicComponent as de, createCommentVNode as m, computed as E, toDisplayString as v, withDirectives as ze, isRef as il, withKeys as ul, vModelText as We, cloneVNode as pl, h as Q, inject as ue, provide as pe, onMounted as H, watchEffect as re, defineComponent as K, onUnmounted as ce, Teleport as Ge, reactive as cl, shallowRef as ro, nextTick as kt, toRaw as xe, normalizeClass as S, renderList as M, Transition as Ve, withModifiers as ae, onBeforeMount as dl, onBeforeUpdate as fl, onUpdated as _t, mergeProps as be, createTextVNode as Z, pushScopeId as hl, popScopeId as ml, withScopeId as vl, markRaw as gl, shallowReactive as bl, resolveComponent as io, resolveDirective as yl, normalizeStyle as Ze, toHandlers as xl, normalizeProps as Le, guardReactiveProps as Te, onBeforeUnmount as Ke, vModelCheckbox as wl, createStaticVNode as Vl } from "vue";
import { f as Ut, a as $l } from "./FormatMoney-edf23aad.mjs";
function kl(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
    })
  ]);
}
function _l(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
    })
  ]);
}
function Cl(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
    })
  ]);
}
function Sl(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    })
  ]);
}
function Pl(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
    })
  ]);
}
function Ol(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
    })
  ]);
}
function El(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
    })
  ]);
}
function Ll(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
    })
  ]);
}
function Tl(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  ]);
}
function zl(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4.5 12.75l6 6 9-13.5"
    })
  ]);
}
function Dl(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 19.5L8.25 12l7.5-7.5"
    })
  ]);
}
function Bl(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 4.5l7.5 7.5-7.5 7.5"
    })
  ]);
}
function ht(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
    })
  ]);
}
function Ml(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
    }),
    s("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    })
  ]);
}
function Al(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
    })
  ]);
}
function Ct(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    })
  ]);
}
function uo(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
    })
  ]);
}
function jl(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
    })
  ]);
}
function Nl(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
    })
  ]);
}
function Il(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
    })
  ]);
}
function Wt(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
    })
  ]);
}
function Ye(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6 18L18 6M6 6l12 12"
    })
  ]);
}
const Fl = /* @__PURE__ */ s("div", {
  "aria-live": "assertive",
  class: "po-pointer-events-none po-fixed po-inset-0 po-flex po-items-start po-px-4 po-py-6 sm:po-p-6 po-z-[60]"
}, [
  /* @__PURE__ */ s("div", {
    class: "po-flex po-w-full po-flex-col po-items-end po-space-y-4 sm:po-items-end po-pt-[55px]",
    id: "po-notifications-alert"
  })
], -1), Rl = { class: "po-bg-mpao-blue po-fixed po-top-0 po-w-full po-z-50 po-flex" }, Hl = { class: "po-shrink-0 po-px-3 po-pt-3" }, ql = {
  for: "sidebar-drawer-toggle",
  role: "button",
  class: "genie-effect po-flex po-items-center po-justify-center po-bg-[#2e5266] po-rounded-full po-w-10 po-h-10 po-select-none po-text-slate-100"
}, Ul = { class: "po-mx-auto po-max-w-full po-pr-4 po-grow sm:po-pr-4" }, Wl = { class: "po-flex po-relative po-h-16 po-items-center po-justify-between po-space-x-12" }, Gl = { class: "po-flex po-items-center po-space-x-3" }, Zl = {
  key: 0,
  class: "po-block po-w-6 po-text-slate-100 md:po-hidden",
  role: "button"
}, Kl = {
  name: "PoTopBar"
}, m0 = /* @__PURE__ */ Object.assign(Kl, {
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
    const o = e, l = k(""), n = k(""), { avatar: a, logo: i } = ve(o);
    U(a, () => {
      l.value = a.value;
    }), U(i, () => {
      n.value = i.value;
    });
    function p(f) {
      t("profileSwitcherClick", f);
    }
    function c(f) {
      t("query", f);
    }
    function d(f) {
      t("onSearchClear", f);
    }
    return (f, h) => (r(), u(z, null, [
      Fl,
      s("nav", Rl, [
        s("div", Hl, [
          s("label", ql, [
            C(g(Sl), { class: "po-w-6 po-fill-current" })
          ])
        ]),
        s("div", Ul, [
          s("div", Wl, [
            C(g(on), { "app-name": e.appName }, {
              icon: T(() => [
                R(f.$slots, "appIcon", {}, () => [
                  e.appIcon ? (r(), D(de(e.appIcon), { key: 0 })) : m("", !0)
                ])
              ]),
              _: 3
            }, 8, ["app-name"]),
            e.hasSearch ? (r(), D(g(rn), {
              key: 0,
              onQuery: c,
              onOnClear: d,
              "current-query": e.currentQuery
            }, null, 8, ["current-query"])) : m("", !0),
            s("div", Gl, [
              e.hasSearch ? (r(), u("span", Zl, [
                C(g(Ct), { class: "po-stroke-current" })
              ])) : m("", !0),
              C(g(Cs), {
                notifications: e.notifications,
                "has-new-notifications": e.hasNewNotifications
              }, null, 8, ["notifications", "has-new-notifications"]),
              C(g(hs), {
                "app-list": e.appList,
                "open-in-new-tab": !0
              }, null, 8, ["app-list"]),
              C(g(Xs), {
                "user-object": e.userObject,
                avatar: l.value,
                logo: n.value,
                onButtonClick: p
              }, null, 8, ["user-object", "avatar", "logo"])
            ])
          ])
        ])
      ])
    ], 64));
  }
}), Yl = { class: "po-flex po-items-center po-justify-center po-space-x-3" }, Ql = { class: "po-w-8 po-text-slate-100 app-icon" }, Xl = { class: "po-font-light po-text-lg po-text-slate-100" }, Jl = { class: "po-hidden md:po-block" }, en = { class: "po-block md:po-hidden" }, tn = {
  name: "PoAppIcon"
}, on = /* @__PURE__ */ Object.assign(tn, {
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
    const t = e, o = E(() => {
      let l = t.appName.match(/\b[A-Z]/g).join("");
      return l.length === 1 ? t.appName.substring(0, 3) : l;
    });
    return (l, n) => (r(), u("div", Yl, [
      s("div", Ql, [
        R(l.$slots, "icon")
      ]),
      s("span", Xl, [
        s("span", Jl, v(e.appName), 1),
        s("span", en, v(g(o)), 1)
      ])
    ]));
  }
}), ln = { class: "po-flex-grow po-hidden po-relative md:po-block" }, nn = ["placeholder", "onKeyup"], sn = { class: "po-absolute po-inset-y-0 po-left-0 po-flex po-items-center po-pl-3 po-pointer-events-none po-transition-all po-ease-linear po-duration-100 po-text-slate-400 po-origin-center peer-hover/search:po-scale-105 peer-focus/search:po-text-slate-100" }, an = {
  name: "PoSearchBar"
}, rn = /* @__PURE__ */ Object.assign(an, {
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
    let o = k("");
    const l = (n) => {
      t("query", o.value);
    };
    return U(o, async (n, a) => {
      n === "" && t("onClear", !0);
    }), (n, a) => (r(), u("div", ln, [
      ze(s("input", {
        "onUpdate:modelValue": a[0] || (a[0] = (i) => il(o) ? o.value = i : o = i),
        type: "text",
        id: "main-search",
        placeholder: e.placeholder,
        onKeyup: ul(l, ["enter"]),
        class: "peer/search po-bg-transparent po-border po-border-transparent po-text-slate-100 po-text-sm po-rounded-md po-ring-0 po-outline-none focus:po-outline-none focus:po-ring-0 po-transition-colors po-ease-linear po-duration-100 po-block po-w-full po-pl-10 po-p-2.5 po-appearance-none focus:po-border-slate-400 hover:po-border-slate-600"
      }, null, 40, nn), [
        [We, g(o)]
      ]),
      s("div", sn, [
        C(g(Ct), { class: "po-w-5 po-h-5 po-stroke-current" })
      ])
    ]));
  }
});
function ie(e, t, ...o) {
  if (e in t) {
    let n = t[e];
    return typeof n == "function" ? n(...o) : n;
  }
  let l = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((n) => `"${n}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(l, ie), l;
}
var ge = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(ge || {}), we = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(we || {});
function Y({ visible: e = !0, features: t = 0, ourProps: o, theirProps: l, ...n }) {
  var a;
  let i = co(l, o), p = Object.assign(n, { props: i });
  if (e || t & 2 && i.static)
    return it(p);
  if (t & 1) {
    let c = (a = i.unmount) == null || a ? 0 : 1;
    return ie(c, { [0]() {
      return null;
    }, [1]() {
      return it({ ...n, props: { ...i, hidden: !0, style: { display: "none" } } });
    } });
  }
  return it(p);
}
function it({ props: e, attrs: t, slots: o, slot: l, name: n }) {
  var a, i;
  let { as: p, ...c } = Qe(e, ["unmount", "static"]), d = (a = o.default) == null ? void 0 : a.call(o, l), f = {};
  if (l) {
    let h = !1, w = [];
    for (let [V, b] of Object.entries(l))
      typeof b == "boolean" && (h = !0), b === !0 && w.push(V);
    h && (f["data-headlessui-state"] = w.join(" "));
  }
  if (p === "template") {
    if (d = po(d ?? []), Object.keys(c).length > 0 || Object.keys(t).length > 0) {
      let [h, ...w] = d ?? [];
      if (!un(h) || w.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${n} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(c).concat(Object.keys(t)).map(($) => $.trim()).filter(($, y, _) => _.indexOf($) === y).sort(($, y) => $.localeCompare(y)).map(($) => `  - ${$}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map(($) => `  - ${$}`).join(`
`)].join(`
`));
      let V = co((i = h.props) != null ? i : {}, c), b = pl(h, V);
      for (let $ in V)
        $.startsWith("on") && (b.props || (b.props = {}), b.props[$] = V[$]);
      return b;
    }
    return Array.isArray(d) && d.length === 1 ? d[0] : d;
  }
  return Q(p, Object.assign({}, c, f), { default: () => d });
}
function po(e) {
  return e.flatMap((t) => t.type === z ? po(t.children) : [t]);
}
function co(...e) {
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
    Object.assign(t, { [l](n, ...a) {
      let i = o[l];
      for (let p of i) {
        if (n instanceof Event && n.defaultPrevented)
          return;
        p(n, ...a);
      }
    } });
  return t;
}
function fo(e) {
  let t = Object.assign({}, e);
  for (let o in t)
    t[o] === void 0 && delete t[o];
  return t;
}
function Qe(e, t = []) {
  let o = Object.assign({}, e);
  for (let l of t)
    l in o && delete o[l];
  return o;
}
function un(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let pn = 0;
function cn() {
  return ++pn;
}
function se() {
  return cn();
}
var te = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(te || {});
function L(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let ho = Symbol("Context");
var ee = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(ee || {});
function dn() {
  return De() !== null;
}
function De() {
  return ue(ho, null);
}
function St(e) {
  pe(ho, e);
}
function Gt(e, t) {
  if (e)
    return e;
  let o = t ?? "button";
  if (typeof o == "string" && o.toLowerCase() === "button")
    return "button";
}
function Pt(e, t) {
  let o = k(Gt(e.value.type, e.value.as));
  return H(() => {
    o.value = Gt(e.value.type, e.value.as);
  }), re(() => {
    var l;
    o.value || L(t) && L(t) instanceof HTMLButtonElement && !((l = L(t)) != null && l.hasAttribute("type")) && (o.value = "button");
  }), o;
}
var fn = Object.defineProperty, hn = (e, t, o) => t in e ? fn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, Zt = (e, t, o) => (hn(e, typeof t != "symbol" ? t + "" : t, o), o);
let mn = class {
  constructor() {
    Zt(this, "current", this.detect()), Zt(this, "currentId", 0);
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
}, Ae = new mn();
function me(e) {
  if (Ae.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = L(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
function vn({ container: e, accept: t, walk: o, enabled: l }) {
  re(() => {
    let n = e.value;
    if (!n || l !== void 0 && !l.value)
      return;
    let a = me(e);
    if (!a)
      return;
    let i = Object.assign((c) => t(c), { acceptNode: t }), p = a.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, i, !1);
    for (; p.nextNode(); )
      o(p.currentNode);
  });
}
let mt = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var le = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(le || {}), Ee = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Ee || {}), gn = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(gn || {});
function Xe(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(mt)).sort((t, o) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (o.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Ot = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Ot || {});
function mo(e, t = 0) {
  var o;
  return e === ((o = me(e)) == null ? void 0 : o.body) ? !1 : ie(t, { [0]() {
    return e.matches(mt);
  }, [1]() {
    let l = e;
    for (; l !== null; ) {
      if (l.matches(mt))
        return !0;
      l = l.parentElement;
    }
    return !1;
  } });
}
function Oe(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let bn = ["textarea", "input"].join(",");
function yn(e) {
  var t, o;
  return (o = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, bn)) != null ? o : !1;
}
function vo(e, t = (o) => o) {
  return e.slice().sort((o, l) => {
    let n = t(o), a = t(l);
    if (n === null || a === null)
      return 0;
    let i = n.compareDocumentPosition(a);
    return i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function fe(e, t, { sorted: o = !0, relativeTo: l = null, skipElements: n = [] } = {}) {
  var a;
  let i = (a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? a : document, p = Array.isArray(e) ? o ? vo(e) : e : Xe(e);
  n.length > 0 && p.length > 1 && (p = p.filter((b) => !n.includes(b))), l = l ?? i.activeElement;
  let c = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), d = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, p.indexOf(l)) - 1;
    if (t & 4)
      return Math.max(0, p.indexOf(l)) + 1;
    if (t & 8)
      return p.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), f = t & 32 ? { preventScroll: !0 } : {}, h = 0, w = p.length, V;
  do {
    if (h >= w || h + w <= 0)
      return 0;
    let b = d + h;
    if (t & 16)
      b = (b + w) % w;
    else {
      if (b < 0)
        return 3;
      if (b >= w)
        return 1;
    }
    V = p[b], V == null || V.focus(f), h += c;
  } while (V !== i.activeElement);
  return t & 6 && yn(V) && V.select(), V.hasAttribute("tabindex") || V.setAttribute("tabindex", "0"), 2;
}
function ut(e, t, o) {
  Ae.isServer || re((l) => {
    document.addEventListener(e, t, o), l(() => document.removeEventListener(e, t, o));
  });
}
function go(e, t, o = E(() => !0)) {
  function l(a, i) {
    if (!o.value || a.defaultPrevented)
      return;
    let p = i(a);
    if (p === null || !p.getRootNode().contains(p))
      return;
    let c = function d(f) {
      return typeof f == "function" ? d(f()) : Array.isArray(f) || f instanceof Set ? f : [f];
    }(e);
    for (let d of c) {
      if (d === null)
        continue;
      let f = d instanceof HTMLElement ? d : L(d);
      if (f != null && f.contains(p) || a.composed && a.composedPath().includes(f))
        return;
    }
    return !mo(p, Ot.Loose) && p.tabIndex !== -1 && a.preventDefault(), t(a, p);
  }
  let n = k(null);
  ut("mousedown", (a) => {
    var i, p;
    o.value && (n.value = ((p = (i = a.composedPath) == null ? void 0 : i.call(a)) == null ? void 0 : p[0]) || a.target);
  }, !0), ut("click", (a) => {
    n.value && (l(a, () => n.value), n.value = null);
  }, !0), ut("blur", (a) => l(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var ye = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(ye || {});
let $e = K({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: o }) {
  return () => {
    let { features: l, ...n } = e, a = { "aria-hidden": (l & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(l & 4) === 4 && (l & 2) !== 2 && { display: "none" } } };
    return Y({ ourProps: a, theirProps: n, slot: {}, attrs: o, slots: t, name: "Hidden" });
  };
} });
function bo(e = {}, t = null, o = []) {
  for (let [l, n] of Object.entries(e))
    xo(o, yo(t, l), n);
  return o;
}
function yo(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function xo(e, t, o) {
  if (Array.isArray(o))
    for (let [l, n] of o.entries())
      xo(e, yo(t, l.toString()), n);
  else
    o instanceof Date ? e.push([t, o.toISOString()]) : typeof o == "boolean" ? e.push([t, o ? "1" : "0"]) : typeof o == "string" ? e.push([t, o]) : typeof o == "number" ? e.push([t, `${o}`]) : o == null ? e.push([t, ""]) : bo(o, t, e);
}
function wo(e) {
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
function Vo(e, t, o) {
  let l = k(o == null ? void 0 : o.value), n = E(() => e.value !== void 0);
  return [E(() => n.value ? e.value : l.value), function(a) {
    return n.value || (l.value = a), t == null ? void 0 : t(a);
  }];
}
function xn() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function wn(e, t, o) {
  Ae.isServer || re((l) => {
    window.addEventListener(e, t, o), l(() => window.removeEventListener(e, t, o));
  });
}
var he = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(he || {});
function Et() {
  let e = k(0);
  return wn("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Lt(e, t, o, l) {
  Ae.isServer || re((n) => {
    e = e ?? window, e.addEventListener(t, o, l), n(() => e.removeEventListener(t, o, l));
  });
}
function $o(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function ko(e) {
  if (!e)
    return /* @__PURE__ */ new Set();
  if (typeof e == "function")
    return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let o of e.value) {
    let l = L(o);
    l instanceof HTMLElement && t.add(l);
  }
  return t;
}
var _o = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(_o || {});
let Be = Object.assign(K({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: k(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: l }) {
  let n = k(null);
  l({ el: n, $el: n });
  let a = E(() => me(n)), i = k(!1);
  H(() => i.value = !0), ce(() => i.value = !1), $n({ ownerDocument: a }, E(() => i.value && Boolean(e.features & 16)));
  let p = kn({ ownerDocument: a, container: n, initialFocus: E(() => e.initialFocus) }, E(() => i.value && Boolean(e.features & 2)));
  _n({ ownerDocument: a, container: n, containers: e.containers, previousActiveElement: p }, E(() => i.value && Boolean(e.features & 8)));
  let c = Et();
  function d(V) {
    let b = L(n);
    b && (($) => $())(() => {
      ie(c.value, { [he.Forwards]: () => {
        fe(b, le.First, { skipElements: [V.relatedTarget] });
      }, [he.Backwards]: () => {
        fe(b, le.Last, { skipElements: [V.relatedTarget] });
      } });
    });
  }
  let f = k(!1);
  function h(V) {
    V.key === "Tab" && (f.value = !0, requestAnimationFrame(() => {
      f.value = !1;
    }));
  }
  function w(V) {
    if (!i.value)
      return;
    let b = ko(e.containers);
    L(n) instanceof HTMLElement && b.add(L(n));
    let $ = V.relatedTarget;
    $ instanceof HTMLElement && $.dataset.headlessuiFocusGuard !== "true" && (Co(b, $) || (f.value ? fe(L(n), ie(c.value, { [he.Forwards]: () => le.Next, [he.Backwards]: () => le.Previous }) | le.WrapAround, { relativeTo: V.target }) : V.target instanceof HTMLElement && Oe(V.target)));
  }
  return () => {
    let V = {}, b = { ref: n, onKeydown: h, onFocusout: w }, { features: $, initialFocus: y, containers: _, ...x } = e;
    return Q(z, [Boolean($ & 4) && Q($e, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: d, features: ye.Focusable }), Y({ ourProps: b, theirProps: { ...t, ...x }, slot: V, attrs: t, slots: o, name: "FocusTrap" }), Boolean($ & 4) && Q($e, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: d, features: ye.Focusable })]);
  };
} }), { features: _o }), Se = [];
if (typeof window < "u" && typeof document < "u") {
  let e = function(t) {
    t.target instanceof HTMLElement && t.target !== document.body && Se[0] !== t.target && (Se.unshift(t.target), Se = Se.filter((o) => o != null && o.isConnected), Se.splice(10));
  };
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
}
function Vn(e) {
  let t = k(Se.slice());
  return U([e], ([o], [l]) => {
    l === !0 && o === !1 ? $o(() => {
      t.value.splice(0);
    }) : l === !1 && o === !0 && (t.value = Se.slice());
  }, { flush: "post" }), () => {
    var o;
    return (o = t.value.find((l) => l != null && l.isConnected)) != null ? o : null;
  };
}
function $n({ ownerDocument: e }, t) {
  let o = Vn(t);
  H(() => {
    re(() => {
      var l, n;
      t.value || ((l = e.value) == null ? void 0 : l.activeElement) === ((n = e.value) == null ? void 0 : n.body) && Oe(o());
    }, { flush: "post" });
  }), ce(() => {
    Oe(o());
  });
}
function kn({ ownerDocument: e, container: t, initialFocus: o }, l) {
  let n = k(null), a = k(!1);
  return H(() => a.value = !0), ce(() => a.value = !1), H(() => {
    U([t, o, l], (i, p) => {
      if (i.every((d, f) => (p == null ? void 0 : p[f]) === d) || !l.value)
        return;
      let c = L(t);
      c && $o(() => {
        var d, f;
        if (!a.value)
          return;
        let h = L(o), w = (d = e.value) == null ? void 0 : d.activeElement;
        if (h) {
          if (h === w) {
            n.value = w;
            return;
          }
        } else if (c.contains(w)) {
          n.value = w;
          return;
        }
        h ? Oe(h) : fe(c, le.First | le.NoScroll) === Ee.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), n.value = (f = e.value) == null ? void 0 : f.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), n;
}
function _n({ ownerDocument: e, container: t, containers: o, previousActiveElement: l }, n) {
  var a;
  Lt((a = e.value) == null ? void 0 : a.defaultView, "focus", (i) => {
    if (!n.value)
      return;
    let p = ko(o);
    L(t) instanceof HTMLElement && p.add(L(t));
    let c = l.value;
    if (!c)
      return;
    let d = i.target;
    d && d instanceof HTMLElement ? Co(p, d) ? (l.value = d, Oe(d)) : (i.preventDefault(), i.stopPropagation(), Oe(c)) : Oe(l.value);
  }, !0);
}
function Co(e, t) {
  for (let o of e)
    if (o.contains(t))
      return !0;
  return !1;
}
let pt = /* @__PURE__ */ new Map(), Me = /* @__PURE__ */ new Map();
function Kt(e, t = k(!0)) {
  re((o) => {
    var l;
    if (!t.value)
      return;
    let n = L(e);
    if (!n)
      return;
    o(function() {
      var i;
      if (!n)
        return;
      let p = (i = Me.get(n)) != null ? i : 1;
      if (p === 1 ? Me.delete(n) : Me.set(n, p - 1), p !== 1)
        return;
      let c = pt.get(n);
      c && (c["aria-hidden"] === null ? n.removeAttribute("aria-hidden") : n.setAttribute("aria-hidden", c["aria-hidden"]), n.inert = c.inert, pt.delete(n));
    });
    let a = (l = Me.get(n)) != null ? l : 0;
    Me.set(n, a + 1), a === 0 && (pt.set(n, { "aria-hidden": n.getAttribute("aria-hidden"), inert: n.inert }), n.setAttribute("aria-hidden", "true"), n.inert = !0);
  });
}
let So = Symbol("ForcePortalRootContext");
function Cn() {
  return ue(So, !1);
}
let vt = K({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: o }) {
  return pe(So, e.force), () => {
    let { force: l, ...n } = e;
    return Y({ theirProps: n, ourProps: {}, slot: {}, slots: t, attrs: o, name: "ForcePortalRoot" });
  };
} });
function Sn(e) {
  let t = me(e);
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
let Po = K({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: o }) {
  let l = k(null), n = E(() => me(l)), a = Cn(), i = ue(Oo, null), p = k(a === !0 || i == null ? Sn(l.value) : i.resolveTarget());
  return re(() => {
    a || i != null && (p.value = i.resolveTarget());
  }), ce(() => {
    var c, d;
    let f = (c = n.value) == null ? void 0 : c.getElementById("headlessui-portal-root");
    f && p.value === f && p.value.children.length <= 0 && ((d = p.value.parentElement) == null || d.removeChild(p.value));
  }), () => {
    if (p.value === null)
      return null;
    let c = { ref: l, "data-headlessui-portal": "" };
    return Q(Ge, { to: p.value }, Y({ ourProps: c, theirProps: e, slot: {}, attrs: o, slots: t, name: "Portal" }));
  };
} }), Oo = Symbol("PortalGroupContext"), Pn = K({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: o }) {
  let l = cl({ resolveTarget() {
    return e.target;
  } });
  return pe(Oo, l), () => {
    let { target: n, ...a } = e;
    return Y({ theirProps: a, ourProps: {}, slot: {}, attrs: t, slots: o, name: "PortalGroup" });
  };
} }), Eo = Symbol("StackContext");
var gt = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(gt || {});
function On() {
  return ue(Eo, () => {
  });
}
function En({ type: e, enabled: t, element: o, onUpdate: l }) {
  let n = On();
  function a(...i) {
    l == null || l(...i), n(...i);
  }
  H(() => {
    U(t, (i, p) => {
      i ? a(0, e, o) : p === !0 && a(1, e, o);
    }, { immediate: !0, flush: "sync" });
  }), ce(() => {
    t.value && a(1, e, o);
  }), pe(Eo, a);
}
let Lo = Symbol("DescriptionContext");
function Ln() {
  let e = ue(Lo, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function Je({ slot: e = k({}), name: t = "Description", props: o = {} } = {}) {
  let l = k([]);
  function n(a) {
    return l.value.push(a), () => {
      let i = l.value.indexOf(a);
      i !== -1 && l.value.splice(i, 1);
    };
  }
  return pe(Lo, { register: n, slot: e, name: t, props: o }), E(() => l.value.length > 0 ? l.value.join(" ") : void 0);
}
let Tn = K({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${se()}` } }, setup(e, { attrs: t, slots: o }) {
  let l = Ln();
  return H(() => ce(l.register(e.id))), () => {
    let { name: n = "Description", slot: a = k({}), props: i = {} } = l, { id: p, ...c } = e, d = { ...Object.entries(i).reduce((f, [h, w]) => Object.assign(f, { [h]: g(w) }), {}), id: p };
    return Y({ ourProps: d, theirProps: c, slot: a.value, attrs: t, slots: o, name: n });
  };
} });
function zn(e) {
  let t = ro(e.getSnapshot());
  return ce(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function et() {
  let e = [], t = { addEventListener(o, l, n, a) {
    return o.addEventListener(l, n, a), t.add(() => o.removeEventListener(l, n, a));
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
    let a = o.style.getPropertyValue(l);
    return Object.assign(o.style, { [l]: n }), this.add(() => {
      Object.assign(o.style, { [l]: a });
    });
  }, group(o) {
    let l = et();
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
function Dn(e, t) {
  let o = e(), l = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return o;
  }, subscribe(n) {
    return l.add(n), () => l.delete(n);
  }, dispatch(n, ...a) {
    let i = t[n].call(o, ...a);
    i && (o = i, l.forEach((p) => p()));
  } };
}
function Bn() {
  let e;
  return { before({ doc: t }) {
    var o;
    let l = t.documentElement;
    e = ((o = t.defaultView) != null ? o : window).innerWidth - l.clientWidth;
  }, after({ doc: t, d: o }) {
    let l = t.documentElement, n = l.clientWidth - l.offsetWidth, a = e - n;
    o.style(l, "paddingRight", `${a}px`);
  } };
}
function Mn() {
  if (!xn())
    return {};
  let e;
  return { before() {
    e = window.pageYOffset;
  }, after({ doc: t, d: o, meta: l }) {
    function n(i) {
      return l.containers.flatMap((p) => p()).some((p) => p.contains(i));
    }
    o.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
    let a = null;
    o.addEventListener(t, "click", (i) => {
      if (i.target instanceof HTMLElement)
        try {
          let p = i.target.closest("a");
          if (!p)
            return;
          let { hash: c } = new URL(p.href), d = t.querySelector(c);
          d && !n(d) && (a = d);
        } catch {
        }
    }, !0), o.addEventListener(t, "touchmove", (i) => {
      i.target instanceof HTMLElement && !n(i.target) && i.preventDefault();
    }, { passive: !1 }), o.add(() => {
      window.scrollTo(0, window.pageYOffset + e), a && a.isConnected && (a.scrollIntoView({ block: "nearest" }), a = null);
    });
  } };
}
function An() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function jn(e) {
  let t = {};
  for (let o of e)
    Object.assign(t, o(t));
  return t;
}
let Pe = Dn(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var o;
  let l = (o = this.get(e)) != null ? o : { doc: e, count: 0, d: et(), meta: /* @__PURE__ */ new Set() };
  return l.count++, l.meta.add(t), this.set(e, l), this;
}, POP(e, t) {
  let o = this.get(e);
  return o && (o.count--, o.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: o }) {
  let l = { doc: e, d: t, meta: jn(o) }, n = [Mn(), Bn(), An()];
  n.forEach(({ before: a }) => a == null ? void 0 : a(l)), n.forEach(({ after: a }) => a == null ? void 0 : a(l));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
Pe.subscribe(() => {
  let e = Pe.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [o] of e)
    t.set(o, o.documentElement.style.overflow);
  for (let o of e.values()) {
    let l = t.get(o.doc) === "hidden", n = o.count !== 0;
    (n && !l || !n && l) && Pe.dispatch(o.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", o), o.count === 0 && Pe.dispatch("TEARDOWN", o);
  }
});
function Nn(e, t, o) {
  let l = zn(Pe), n = E(() => {
    let a = e.value ? l.value.get(e.value) : void 0;
    return a ? a.count > 0 : !1;
  });
  return U([e, t], ([a, i], [p], c) => {
    if (!a || !i)
      return;
    Pe.dispatch("PUSH", a, o);
    let d = !1;
    c(() => {
      d || (Pe.dispatch("POP", p ?? a, o), d = !0);
    });
  }, { immediate: !0 }), n;
}
var In = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(In || {});
let bt = Symbol("DialogContext");
function je(e) {
  let t = ue(bt, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, je), o;
  }
  return t;
}
let Re = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", tt = K({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Re }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${se()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: o, slots: l, expose: n }) {
  var a;
  let i = k(!1);
  H(() => {
    i.value = !0;
  });
  let p = k(0), c = De(), d = E(() => e.open === Re && c !== null ? (c.value & ee.Open) === ee.Open : e.open), f = k(null), h = k(null), w = E(() => me(f));
  if (n({ el: f, $el: f }), !(e.open !== Re || c !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof d.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${d.value === Re ? void 0 : e.open}`);
  let V = E(() => i.value && d.value ? 0 : 1), b = E(() => V.value === 0), $ = E(() => p.value > 1), y = ue(bt, null) !== null, _ = E(() => $.value ? "parent" : "leaf"), x = E(() => c !== null ? (c.value & ee.Closing) === ee.Closing : !1), P = E(() => y || x.value ? !1 : b.value), O = E(() => {
    var A, N, I;
    return (I = Array.from((N = (A = w.value) == null ? void 0 : A.querySelectorAll("body > *")) != null ? N : []).find((oe) => oe.id === "headlessui-portal-root" ? !1 : oe.contains(L(h)) && oe instanceof HTMLElement)) != null ? I : null;
  });
  Kt(O, P);
  let j = E(() => $.value ? !0 : b.value), F = E(() => {
    var A, N, I;
    return (I = Array.from((N = (A = w.value) == null ? void 0 : A.querySelectorAll("[data-headlessui-portal]")) != null ? N : []).find((oe) => oe.contains(L(h)) && oe instanceof HTMLElement)) != null ? I : null;
  });
  Kt(F, j), En({ type: "Dialog", enabled: E(() => V.value === 0), element: f, onUpdate: (A, N) => {
    if (N === "Dialog")
      return ie(A, { [gt.Add]: () => p.value += 1, [gt.Remove]: () => p.value -= 1 });
  } });
  let J = Je({ name: "DialogDescription", slot: E(() => ({ open: d.value })) }), W = k(null), X = { titleId: W, panelRef: k(null), dialogState: V, setTitleId(A) {
    W.value !== A && (W.value = A);
  }, close() {
    t("close", !1);
  } };
  pe(bt, X);
  function B() {
    var A, N, I;
    return [...Array.from((N = (A = w.value) == null ? void 0 : A.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? N : []).filter((oe) => !(oe === document.body || oe === document.head || !(oe instanceof HTMLElement) || oe.contains(L(h)) || X.panelRef.value && oe.contains(X.panelRef.value))), (I = X.panelRef.value) != null ? I : f.value];
  }
  let ne = E(() => !(!b.value || $.value));
  go(() => B(), (A, N) => {
    X.close(), kt(() => N == null ? void 0 : N.focus());
  }, ne);
  let G = E(() => !($.value || V.value !== 0));
  Lt((a = w.value) == null ? void 0 : a.defaultView, "keydown", (A) => {
    G.value && (A.defaultPrevented || A.key === te.Escape && (A.preventDefault(), A.stopPropagation(), X.close()));
  });
  let q = E(() => !(x.value || V.value !== 0 || y));
  return Nn(w, q, (A) => {
    var N;
    return { containers: [...(N = A.containers) != null ? N : [], B] };
  }), re((A) => {
    if (V.value !== 0)
      return;
    let N = L(f);
    if (!N)
      return;
    let I = new ResizeObserver((oe) => {
      for (let Fe of oe) {
        let _e = Fe.target.getBoundingClientRect();
        _e.x === 0 && _e.y === 0 && _e.width === 0 && _e.height === 0 && X.close();
      }
    });
    I.observe(N), A(() => I.disconnect());
  }), () => {
    let { id: A, open: N, initialFocus: I, ...oe } = e, Fe = { ...o, ref: f, id: A, role: "dialog", "aria-modal": V.value === 0 ? !0 : void 0, "aria-labelledby": W.value, "aria-describedby": J.value }, _e = { open: V.value === 0 };
    return Q(vt, { force: !0 }, () => [Q(Po, () => Q(Pn, { target: f.value }, () => Q(vt, { force: !1 }, () => Q(Be, { initialFocus: I, containers: B, features: b.value ? ie(_.value, { parent: Be.features.RestoreFocus, leaf: Be.features.All & ~Be.features.FocusLock }) : Be.features.None }, () => Y({ ourProps: Fe, theirProps: oe, slot: _e, attrs: o, slots: l, visible: V.value === 0, features: ge.RenderStrategy | ge.Static, name: "Dialog" }))))), Q($e, { features: ye.Hidden, ref: h })]);
  };
} });
K({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${se()}` } }, setup(e, { attrs: t, slots: o }) {
  let l = je("DialogOverlay");
  function n(a) {
    a.target === a.currentTarget && (a.preventDefault(), a.stopPropagation(), l.close());
  }
  return () => {
    let { id: a, ...i } = e;
    return Y({ ourProps: { id: a, "aria-hidden": !0, onClick: n }, theirProps: i, slot: { open: l.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogOverlay" });
  };
} });
K({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${se()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: l }) {
  let n = je("DialogBackdrop"), a = k(null);
  return l({ el: a, $el: a }), H(() => {
    if (n.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: i, ...p } = e, c = { id: i, ref: a, "aria-hidden": !0 };
    return Q(vt, { force: !0 }, () => Q(Po, () => Y({ ourProps: c, theirProps: { ...t, ...p }, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogBackdrop" })));
  };
} });
let ot = K({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${se()}` } }, setup(e, { attrs: t, slots: o, expose: l }) {
  let n = je("DialogPanel");
  l({ el: n.panelRef, $el: n.panelRef });
  function a(i) {
    i.stopPropagation();
  }
  return () => {
    let { id: i, ...p } = e, c = { id: i, ref: n.panelRef, onClick: a };
    return Y({ ourProps: c, theirProps: p, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogPanel" });
  };
} }), To = K({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${se()}` } }, setup(e, { attrs: t, slots: o }) {
  let l = je("DialogTitle");
  return H(() => {
    l.setTitleId(e.id), ce(() => l.setTitleId(null));
  }), () => {
    let { id: n, ...a } = e;
    return Y({ ourProps: { id: n }, theirProps: a, slot: { open: l.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogTitle" });
  };
} });
var Fn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Fn || {});
let zo = Symbol("DisclosureContext");
function Tt(e) {
  let t = ue(zo, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, Tt), o;
  }
  return t;
}
let Do = Symbol("DisclosurePanelContext");
function Rn() {
  return ue(Do, null);
}
let Yt = K({ name: "Disclosure", props: { as: { type: [Object, String], default: "template" }, defaultOpen: { type: [Boolean], default: !1 } }, setup(e, { slots: t, attrs: o }) {
  let l = k(e.defaultOpen ? 0 : 1), n = k(null), a = k(null), i = { buttonId: k(null), panelId: k(null), disclosureState: l, panel: n, button: a, toggleDisclosure() {
    l.value = ie(l.value, { [0]: 1, [1]: 0 });
  }, closeDisclosure() {
    l.value !== 1 && (l.value = 1);
  }, close(p) {
    i.closeDisclosure();
    let c = (() => p ? p instanceof HTMLElement ? p : p.value instanceof HTMLElement ? L(p) : L(i.button) : L(i.button))();
    c == null || c.focus();
  } };
  return pe(zo, i), St(E(() => ie(l.value, { [0]: ee.Open, [1]: ee.Closed }))), () => {
    let { defaultOpen: p, ...c } = e, d = { open: l.value === 0, close: i.close };
    return Y({ theirProps: c, ourProps: {}, slot: d, slots: t, attrs: o, name: "Disclosure" });
  };
} }), Qt = K({ name: "DisclosureButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-disclosure-button-${se()}` } }, setup(e, { attrs: t, slots: o, expose: l }) {
  let n = Tt("DisclosureButton");
  H(() => {
    n.buttonId.value = e.id;
  }), ce(() => {
    n.buttonId.value = null;
  });
  let a = Rn(), i = E(() => a === null ? !1 : a.value === n.panelId.value), p = k(null);
  l({ el: p, $el: p }), i.value || re(() => {
    n.button.value = p.value;
  });
  let c = Pt(E(() => ({ as: e.as, type: t.type })), p);
  function d() {
    var w;
    e.disabled || (i.value ? (n.toggleDisclosure(), (w = L(n.button)) == null || w.focus()) : n.toggleDisclosure());
  }
  function f(w) {
    var V;
    if (!e.disabled)
      if (i.value)
        switch (w.key) {
          case te.Space:
          case te.Enter:
            w.preventDefault(), w.stopPropagation(), n.toggleDisclosure(), (V = L(n.button)) == null || V.focus();
            break;
        }
      else
        switch (w.key) {
          case te.Space:
          case te.Enter:
            w.preventDefault(), w.stopPropagation(), n.toggleDisclosure();
            break;
        }
  }
  function h(w) {
    switch (w.key) {
      case te.Space:
        w.preventDefault();
        break;
    }
  }
  return () => {
    let w = { open: n.disclosureState.value === 0 }, { id: V, ...b } = e, $ = i.value ? { ref: p, type: c.value, onClick: d, onKeydown: f } : { id: V, ref: p, type: c.value, "aria-expanded": e.disabled ? void 0 : n.disclosureState.value === 0, "aria-controls": L(n.panel) ? n.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onClick: d, onKeydown: f, onKeyup: h };
    return Y({ ourProps: $, theirProps: b, slot: w, attrs: t, slots: o, name: "DisclosureButton" });
  };
} }), Xt = K({ name: "DisclosurePanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-disclosure-panel-${se()}` } }, setup(e, { attrs: t, slots: o, expose: l }) {
  let n = Tt("DisclosurePanel");
  H(() => {
    n.panelId.value = e.id;
  }), ce(() => {
    n.panelId.value = null;
  }), l({ el: n.panel, $el: n.panel }), pe(Do, n.panelId);
  let a = De(), i = E(() => a !== null ? (a.value & ee.Open) === ee.Open : n.disclosureState.value === 0);
  return () => {
    let p = { open: n.disclosureState.value === 0, close: n.close }, { id: c, ...d } = e, f = { id: c, ref: n.panel };
    return Y({ ourProps: f, theirProps: d, slot: p, attrs: t, slots: o, features: ge.RenderStrategy | ge.Static, visible: i.value, name: "DisclosurePanel" });
  };
} });
var Hn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Hn || {});
let Bo = Symbol("PopoverContext");
function lt(e) {
  let t = ue(Bo, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <${nt.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, lt), o;
  }
  return t;
}
let Mo = Symbol("PopoverGroupContext");
function Ao() {
  return ue(Mo, null);
}
let jo = Symbol("PopoverPanelContext");
function qn() {
  return ue(jo, null);
}
let nt = K({ name: "Popover", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: o, expose: l }) {
  var n;
  let a = k(null);
  l({ el: a, $el: a });
  let i = k(1), p = k(null), c = k(null), d = k(null), f = k(null), h = E(() => me(a)), w = E(() => {
    var x, P;
    if (!L(p) || !L(f))
      return !1;
    for (let B of document.querySelectorAll("body > *"))
      if (Number(B == null ? void 0 : B.contains(L(p))) ^ Number(B == null ? void 0 : B.contains(L(f))))
        return !0;
    let O = Xe(), j = O.indexOf(L(p)), F = (j + O.length - 1) % O.length, J = (j + 1) % O.length, W = O[F], X = O[J];
    return !((x = L(f)) != null && x.contains(W)) && !((P = L(f)) != null && P.contains(X));
  }), V = { popoverState: i, buttonId: k(null), panelId: k(null), panel: f, button: p, isPortalled: w, beforePanelSentinel: c, afterPanelSentinel: d, togglePopover() {
    i.value = ie(i.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    i.value !== 1 && (i.value = 1);
  }, close(x) {
    V.closePopover();
    let P = (() => x ? x instanceof HTMLElement ? x : x.value instanceof HTMLElement ? L(x) : L(V.button) : L(V.button))();
    P == null || P.focus();
  } };
  pe(Bo, V), St(E(() => ie(i.value, { [0]: ee.Open, [1]: ee.Closed })));
  let b = { buttonId: V.buttonId, panelId: V.panelId, close() {
    V.closePopover();
  } }, $ = Ao(), y = $ == null ? void 0 : $.registerPopover;
  function _() {
    var x, P, O, j;
    return (j = $ == null ? void 0 : $.isFocusWithinPopoverGroup()) != null ? j : ((x = h.value) == null ? void 0 : x.activeElement) && (((P = L(p)) == null ? void 0 : P.contains(h.value.activeElement)) || ((O = L(f)) == null ? void 0 : O.contains(h.value.activeElement)));
  }
  return re(() => y == null ? void 0 : y(b)), Lt((n = h.value) == null ? void 0 : n.defaultView, "focus", (x) => {
    var P, O;
    i.value === 0 && (_() || p && f && x.target !== window && ((P = L(V.beforePanelSentinel)) != null && P.contains(x.target) || (O = L(V.afterPanelSentinel)) != null && O.contains(x.target) || V.closePopover()));
  }, !0), go([p, f], (x, P) => {
    var O;
    V.closePopover(), mo(P, Ot.Loose) || (x.preventDefault(), (O = L(p)) == null || O.focus());
  }, E(() => i.value === 0)), () => {
    let x = { open: i.value === 0, close: V.close };
    return Y({ theirProps: e, ourProps: { ref: a }, slot: x, slots: t, attrs: o, name: "Popover" });
  };
} }), zt = K({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-popover-button-${se()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: l }) {
  let n = lt("PopoverButton"), a = E(() => me(n.button));
  l({ el: n.button, $el: n.button }), H(() => {
    n.buttonId.value = e.id;
  }), ce(() => {
    n.buttonId.value = null;
  });
  let i = Ao(), p = i == null ? void 0 : i.closeOthers, c = qn(), d = E(() => c === null ? !1 : c.value === n.panelId.value), f = k(null), h = `headlessui-focus-sentinel-${se()}`;
  d.value || re(() => {
    n.button.value = f.value;
  });
  let w = Pt(E(() => ({ as: e.as, type: t.type })), f);
  function V(_) {
    var x, P, O, j, F;
    if (d.value) {
      if (n.popoverState.value === 1)
        return;
      switch (_.key) {
        case te.Space:
        case te.Enter:
          _.preventDefault(), (P = (x = _.target).click) == null || P.call(x), n.closePopover(), (O = L(n.button)) == null || O.focus();
          break;
      }
    } else
      switch (_.key) {
        case te.Space:
        case te.Enter:
          _.preventDefault(), _.stopPropagation(), n.popoverState.value === 1 && (p == null || p(n.buttonId.value)), n.togglePopover();
          break;
        case te.Escape:
          if (n.popoverState.value !== 0)
            return p == null ? void 0 : p(n.buttonId.value);
          if (!L(n.button) || (j = a.value) != null && j.activeElement && !((F = L(n.button)) != null && F.contains(a.value.activeElement)))
            return;
          _.preventDefault(), _.stopPropagation(), n.closePopover();
          break;
      }
  }
  function b(_) {
    d.value || _.key === te.Space && _.preventDefault();
  }
  function $(_) {
    var x, P;
    e.disabled || (d.value ? (n.closePopover(), (x = L(n.button)) == null || x.focus()) : (_.preventDefault(), _.stopPropagation(), n.popoverState.value === 1 && (p == null || p(n.buttonId.value)), n.togglePopover(), (P = L(n.button)) == null || P.focus()));
  }
  function y(_) {
    _.preventDefault(), _.stopPropagation();
  }
  return () => {
    let _ = n.popoverState.value === 0, x = { open: _ }, { id: P, ...O } = e, j = d.value ? { ref: f, type: w.value, onKeydown: V, onClick: $ } : { ref: f, id: P, type: w.value, "aria-expanded": e.disabled ? void 0 : n.popoverState.value === 0, "aria-controls": L(n.panel) ? n.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onKeydown: V, onKeyup: b, onClick: $, onMousedown: y }, F = Et();
    function J() {
      let W = L(n.panel);
      if (!W)
        return;
      function X() {
        ie(F.value, { [he.Forwards]: () => fe(W, le.First), [he.Backwards]: () => fe(W, le.Last) }) === Ee.Error && fe(Xe().filter((B) => B.dataset.headlessuiFocusGuard !== "true"), ie(F.value, { [he.Forwards]: le.Next, [he.Backwards]: le.Previous }), { relativeTo: L(n.button) });
      }
      X();
    }
    return Q(z, [Y({ ourProps: j, theirProps: { ...t, ...O }, slot: x, attrs: t, slots: o, name: "PopoverButton" }), _ && !d.value && n.isPortalled.value && Q($e, { id: h, features: ye.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: J })]);
  };
} });
K({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(e, { attrs: t, slots: o }) {
  let l = lt("PopoverOverlay"), n = `headlessui-popover-overlay-${se()}`, a = De(), i = E(() => a !== null ? (a.value & ee.Open) === ee.Open : l.popoverState.value === 0);
  function p() {
    l.closePopover();
  }
  return () => {
    let c = { open: l.popoverState.value === 0 };
    return Y({ ourProps: { id: n, "aria-hidden": !0, onClick: p }, theirProps: e, slot: c, attrs: t, slots: o, features: ge.RenderStrategy | ge.Static, visible: i.value, name: "PopoverOverlay" });
  };
} });
let Dt = K({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-popover-panel-${se()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: l }) {
  let { focus: n } = e, a = lt("PopoverPanel"), i = E(() => me(a.panel)), p = `headlessui-focus-sentinel-before-${se()}`, c = `headlessui-focus-sentinel-after-${se()}`;
  l({ el: a.panel, $el: a.panel }), H(() => {
    a.panelId.value = e.id;
  }), ce(() => {
    a.panelId.value = null;
  }), pe(jo, a.panelId), re(() => {
    var y, _;
    if (!n || a.popoverState.value !== 0 || !a.panel)
      return;
    let x = (y = i.value) == null ? void 0 : y.activeElement;
    (_ = L(a.panel)) != null && _.contains(x) || fe(L(a.panel), le.First);
  });
  let d = De(), f = E(() => d !== null ? (d.value & ee.Open) === ee.Open : a.popoverState.value === 0);
  function h(y) {
    var _, x;
    switch (y.key) {
      case te.Escape:
        if (a.popoverState.value !== 0 || !L(a.panel) || i.value && !((_ = L(a.panel)) != null && _.contains(i.value.activeElement)))
          return;
        y.preventDefault(), y.stopPropagation(), a.closePopover(), (x = L(a.button)) == null || x.focus();
        break;
    }
  }
  function w(y) {
    var _, x, P, O, j;
    let F = y.relatedTarget;
    F && L(a.panel) && ((_ = L(a.panel)) != null && _.contains(F) || (a.closePopover(), ((P = (x = L(a.beforePanelSentinel)) == null ? void 0 : x.contains) != null && P.call(x, F) || (j = (O = L(a.afterPanelSentinel)) == null ? void 0 : O.contains) != null && j.call(O, F)) && F.focus({ preventScroll: !0 })));
  }
  let V = Et();
  function b() {
    let y = L(a.panel);
    if (!y)
      return;
    function _() {
      ie(V.value, { [he.Forwards]: () => {
        var x;
        fe(y, le.First) === Ee.Error && ((x = L(a.afterPanelSentinel)) == null || x.focus());
      }, [he.Backwards]: () => {
        var x;
        (x = L(a.button)) == null || x.focus({ preventScroll: !0 });
      } });
    }
    _();
  }
  function $() {
    let y = L(a.panel);
    if (!y)
      return;
    function _() {
      ie(V.value, { [he.Forwards]: () => {
        let x = L(a.button), P = L(a.panel);
        if (!x)
          return;
        let O = Xe(), j = O.indexOf(x), F = O.slice(0, j + 1), J = [...O.slice(j + 1), ...F];
        for (let W of J.slice())
          if (W.dataset.headlessuiFocusGuard === "true" || P != null && P.contains(W)) {
            let X = J.indexOf(W);
            X !== -1 && J.splice(X, 1);
          }
        fe(J, le.First, { sorted: !1 });
      }, [he.Backwards]: () => {
        var x;
        fe(y, le.Previous) === Ee.Error && ((x = L(a.button)) == null || x.focus());
      } });
    }
    _();
  }
  return () => {
    let y = { open: a.popoverState.value === 0, close: a.close }, { id: _, focus: x, ...P } = e, O = { ref: a.panel, id: _, onKeydown: h, onFocusout: n && a.popoverState.value === 0 ? w : void 0, tabIndex: -1 };
    return Y({ ourProps: O, theirProps: { ...t, ...P }, attrs: t, slot: y, slots: { ...o, default: (...j) => {
      var F;
      return [Q(z, [f.value && a.isPortalled.value && Q($e, { id: p, ref: a.beforePanelSentinel, features: ye.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: b }), (F = o.default) == null ? void 0 : F.call(o, ...j), f.value && a.isPortalled.value && Q($e, { id: c, ref: a.afterPanelSentinel, features: ye.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: $ })])];
    } }, features: ge.RenderStrategy | ge.Static, visible: f.value, name: "PopoverPanel" });
  };
} });
K({ name: "PopoverGroup", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: o, expose: l }) {
  let n = k(null), a = ro([]), i = E(() => me(n));
  l({ el: n, $el: n });
  function p(h) {
    let w = a.value.indexOf(h);
    w !== -1 && a.value.splice(w, 1);
  }
  function c(h) {
    return a.value.push(h), () => {
      p(h);
    };
  }
  function d() {
    var h;
    let w = i.value;
    if (!w)
      return !1;
    let V = w.activeElement;
    return (h = L(n)) != null && h.contains(V) ? !0 : a.value.some((b) => {
      var $, y;
      return (($ = w.getElementById(b.buttonId.value)) == null ? void 0 : $.contains(V)) || ((y = w.getElementById(b.panelId.value)) == null ? void 0 : y.contains(V));
    });
  }
  function f(h) {
    for (let w of a.value)
      w.buttonId.value !== h && w.close();
  }
  return pe(Mo, { registerPopover: c, unregisterPopover: p, isFocusWithinPopoverGroup: d, closeOthers: f }), () => Y({ ourProps: { ref: n }, theirProps: e, slot: {}, attrs: t, slots: o, name: "PopoverGroup" });
} });
let No = Symbol("LabelContext");
function Io() {
  let e = ue(No, null);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Io), t;
  }
  return e;
}
function Bt({ slot: e = {}, name: t = "Label", props: o = {} } = {}) {
  let l = k([]);
  function n(a) {
    return l.value.push(a), () => {
      let i = l.value.indexOf(a);
      i !== -1 && l.value.splice(i, 1);
    };
  }
  return pe(No, { register: n, slot: e, name: t, props: o }), E(() => l.value.length > 0 ? l.value.join(" ") : void 0);
}
let Fo = K({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-label-${se()}` } }, setup(e, { slots: t, attrs: o }) {
  let l = Io();
  return H(() => ce(l.register(e.id))), () => {
    let { name: n = "Label", slot: a = {}, props: i = {} } = l, { id: p, passive: c, ...d } = e, f = { ...Object.entries(i).reduce((h, [w, V]) => Object.assign(h, { [w]: g(V) }), {}), id: p };
    return c && (delete f.onClick, delete f.htmlFor, delete d.onClick), Y({ ourProps: f, theirProps: d, slot: a, attrs: o, slots: t, name: n });
  };
} });
function Un(e, t) {
  return e === t;
}
let Ro = Symbol("RadioGroupContext");
function Ho(e) {
  let t = ue(Ro, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, Ho), o;
  }
  return t;
}
let Wn = K({ name: "RadioGroup", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "div" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => Un }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-radiogroup-${se()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: o, slots: l, expose: n }) {
  let a = k(null), i = k([]), p = Bt({ name: "RadioGroupLabel" }), c = Je({ name: "RadioGroupDescription" });
  n({ el: a, $el: a });
  let [d, f] = Vo(E(() => e.modelValue), (b) => t("update:modelValue", b), E(() => e.defaultValue)), h = { options: i, value: d, disabled: E(() => e.disabled), firstOption: E(() => i.value.find((b) => !b.propsRef.disabled)), containsCheckedOption: E(() => i.value.some((b) => h.compare(xe(b.propsRef.value), xe(e.modelValue)))), compare(b, $) {
    if (typeof e.by == "string") {
      let y = e.by;
      return (b == null ? void 0 : b[y]) === ($ == null ? void 0 : $[y]);
    }
    return e.by(b, $);
  }, change(b) {
    var $;
    if (e.disabled || h.compare(xe(d.value), xe(b)))
      return !1;
    let y = ($ = i.value.find((_) => h.compare(xe(_.propsRef.value), xe(b)))) == null ? void 0 : $.propsRef;
    return y != null && y.disabled ? !1 : (f(b), !0);
  }, registerOption(b) {
    i.value.push(b), i.value = vo(i.value, ($) => $.element);
  }, unregisterOption(b) {
    let $ = i.value.findIndex((y) => y.id === b);
    $ !== -1 && i.value.splice($, 1);
  } };
  pe(Ro, h), vn({ container: E(() => L(a)), accept(b) {
    return b.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : b.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(b) {
    b.setAttribute("role", "none");
  } });
  function w(b) {
    if (!a.value || !a.value.contains(b.target))
      return;
    let $ = i.value.filter((y) => y.propsRef.disabled === !1).map((y) => y.element);
    switch (b.key) {
      case te.Enter:
        wo(b.currentTarget);
        break;
      case te.ArrowLeft:
      case te.ArrowUp:
        if (b.preventDefault(), b.stopPropagation(), fe($, le.Previous | le.WrapAround) === Ee.Success) {
          let y = i.value.find((_) => {
            var x;
            return _.element === ((x = me(a)) == null ? void 0 : x.activeElement);
          });
          y && h.change(y.propsRef.value);
        }
        break;
      case te.ArrowRight:
      case te.ArrowDown:
        if (b.preventDefault(), b.stopPropagation(), fe($, le.Next | le.WrapAround) === Ee.Success) {
          let y = i.value.find((_) => {
            var x;
            return _.element === ((x = me(_.element)) == null ? void 0 : x.activeElement);
          });
          y && h.change(y.propsRef.value);
        }
        break;
      case te.Space:
        {
          b.preventDefault(), b.stopPropagation();
          let y = i.value.find((_) => {
            var x;
            return _.element === ((x = me(_.element)) == null ? void 0 : x.activeElement);
          });
          y && h.change(y.propsRef.value);
        }
        break;
    }
  }
  let V = E(() => {
    var b;
    return (b = L(a)) == null ? void 0 : b.closest("form");
  });
  return H(() => {
    U([V], () => {
      if (!V.value || e.defaultValue === void 0)
        return;
      function b() {
        h.change(e.defaultValue);
      }
      return V.value.addEventListener("reset", b), () => {
        var $;
        ($ = V.value) == null || $.removeEventListener("reset", b);
      };
    }, { immediate: !0 });
  }), () => {
    let { disabled: b, name: $, id: y, ..._ } = e, x = { ref: a, id: y, role: "radiogroup", "aria-labelledby": p.value, "aria-describedby": c.value, onKeydown: w };
    return Q(z, [...$ != null && d.value != null ? bo({ [$]: d.value }).map(([P, O]) => Q($e, fo({ features: ye.Hidden, key: P, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: P, value: O }))) : [], Y({ ourProps: x, theirProps: { ...o, ...Qe(_, ["modelValue", "defaultValue"]) }, slot: {}, attrs: o, slots: l, name: "RadioGroup" })]);
  };
} });
var Gn = ((e) => (e[e.Empty = 1] = "Empty", e[e.Active = 2] = "Active", e))(Gn || {});
let Zn = K({ name: "RadioGroupOption", props: { as: { type: [Object, String], default: "div" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-radiogroup-option-${se()}` } }, setup(e, { attrs: t, slots: o, expose: l }) {
  let n = Ho("RadioGroupOption"), a = Bt({ name: "RadioGroupLabel" }), i = Je({ name: "RadioGroupDescription" }), p = k(null), c = E(() => ({ value: e.value, disabled: e.disabled })), d = k(1);
  l({ el: p, $el: p }), H(() => n.registerOption({ id: e.id, element: p, propsRef: c })), ce(() => n.unregisterOption(e.id));
  let f = E(() => {
    var _;
    return ((_ = n.firstOption.value) == null ? void 0 : _.id) === e.id;
  }), h = E(() => n.disabled.value || e.disabled), w = E(() => n.compare(xe(n.value.value), xe(e.value))), V = E(() => h.value ? -1 : w.value || !n.containsCheckedOption.value && f.value ? 0 : -1);
  function b() {
    var _;
    n.change(e.value) && (d.value |= 2, (_ = p.value) == null || _.focus());
  }
  function $() {
    d.value |= 2;
  }
  function y() {
    d.value &= -3;
  }
  return () => {
    let { id: _, value: x, disabled: P, ...O } = e, j = { checked: w.value, disabled: h.value, active: Boolean(d.value & 2) }, F = { id: _, ref: p, role: "radio", "aria-checked": w.value ? "true" : "false", "aria-labelledby": a.value, "aria-describedby": i.value, "aria-disabled": h.value ? !0 : void 0, tabIndex: V.value, onClick: h.value ? void 0 : b, onFocus: h.value ? void 0 : $, onBlur: h.value ? void 0 : y };
    return Y({ ourProps: F, theirProps: O, slot: j, attrs: t, slots: o, name: "RadioGroupOption" });
  };
} }), Jt = Fo, Kn = Tn, qo = Symbol("GroupContext"), Yn = K({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: o }) {
  let l = k(null), n = Bt({ name: "SwitchLabel", props: { htmlFor: E(() => {
    var i;
    return (i = l.value) == null ? void 0 : i.id;
  }), onClick(i) {
    l.value && (i.currentTarget.tagName === "LABEL" && i.preventDefault(), l.value.click(), l.value.focus({ preventScroll: !0 }));
  } } }), a = Je({ name: "SwitchDescription" });
  return pe(qo, { switchRef: l, labelledby: n, describedby: a }), () => Y({ theirProps: e, ourProps: {}, slot: {}, slots: t, attrs: o, name: "SwitchGroup" });
} }), Qn = K({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: !0 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-switch-${se()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: o, slots: l, expose: n }) {
  let a = ue(qo, null), [i, p] = Vo(E(() => e.modelValue), (y) => t("update:modelValue", y), E(() => e.defaultChecked));
  function c() {
    p(!i.value);
  }
  let d = k(null), f = a === null ? d : a.switchRef, h = Pt(E(() => ({ as: e.as, type: o.type })), f);
  n({ el: f, $el: f });
  function w(y) {
    y.preventDefault(), c();
  }
  function V(y) {
    y.key === te.Space ? (y.preventDefault(), c()) : y.key === te.Enter && wo(y.currentTarget);
  }
  function b(y) {
    y.preventDefault();
  }
  let $ = E(() => {
    var y, _;
    return (_ = (y = L(f)) == null ? void 0 : y.closest) == null ? void 0 : _.call(y, "form");
  });
  return H(() => {
    U([$], () => {
      if (!$.value || e.defaultChecked === void 0)
        return;
      function y() {
        p(e.defaultChecked);
      }
      return $.value.addEventListener("reset", y), () => {
        var _;
        (_ = $.value) == null || _.removeEventListener("reset", y);
      };
    }, { immediate: !0 });
  }), () => {
    let { id: y, name: _, value: x, ...P } = e, O = { checked: i.value }, j = { id: y, ref: f, role: "switch", type: h.value, tabIndex: 0, "aria-checked": i.value, "aria-labelledby": a == null ? void 0 : a.labelledby.value, "aria-describedby": a == null ? void 0 : a.describedby.value, onClick: w, onKeyup: V, onKeypress: b };
    return Q(z, [_ != null && i.value != null ? Q($e, fo({ features: ye.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: i.value, name: _, value: x })) : null, Y({ ourProps: j, theirProps: { ...o, ...Qe(P, ["modelValue", "defaultChecked"]) }, slot: O, attrs: o, slots: l, name: "Switch" })]);
  };
} }), Xn = Fo;
function Jn(e) {
  let t = { called: !1 };
  return (...o) => {
    if (!t.called)
      return t.called = !0, e(...o);
  };
}
function ct(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function He(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var yt = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(yt || {});
function es(e, t) {
  let o = et();
  if (!e)
    return o.dispose;
  let { transitionDuration: l, transitionDelay: n } = getComputedStyle(e), [a, i] = [l, n].map((p) => {
    let [c = 0] = p.split(",").filter(Boolean).map((d) => d.includes("ms") ? parseFloat(d) : parseFloat(d) * 1e3).sort((d, f) => f - d);
    return c;
  });
  return a !== 0 ? o.setTimeout(() => t("finished"), a + i) : t("finished"), o.add(() => t("cancelled")), o.dispose;
}
function eo(e, t, o, l, n, a) {
  let i = et(), p = a !== void 0 ? Jn(a) : () => {
  };
  return He(e, ...n), ct(e, ...t, ...o), i.nextFrame(() => {
    He(e, ...o), ct(e, ...l), i.add(es(e, (c) => (He(e, ...l, ...t), ct(e, ...n), p(c))));
  }), i.add(() => He(e, ...t, ...o, ...l, ...n)), i.add(() => p("cancelled")), i.dispose;
}
function Ce(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Mt = Symbol("TransitionContext");
var ts = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(ts || {});
function os() {
  return ue(Mt, null) !== null;
}
function ls() {
  let e = ue(Mt, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function ns() {
  let e = ue(At, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let At = Symbol("NestingContext");
function st(e) {
  return "children" in e ? st(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Uo(e) {
  let t = k([]), o = k(!1);
  H(() => o.value = !0), ce(() => o.value = !1);
  function l(a, i = we.Hidden) {
    let p = t.value.findIndex(({ id: c }) => c === a);
    p !== -1 && (ie(i, { [we.Unmount]() {
      t.value.splice(p, 1);
    }, [we.Hidden]() {
      t.value[p].state = "hidden";
    } }), !st(t) && o.value && (e == null || e()));
  }
  function n(a) {
    let i = t.value.find(({ id: p }) => p === a);
    return i ? i.state !== "visible" && (i.state = "visible") : t.value.push({ id: a, state: "visible" }), () => l(a, we.Unmount);
  }
  return { children: t, register: n, unregister: l };
}
let Wo = ge.RenderStrategy, ke = K({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: o, slots: l, expose: n }) {
  let a = k(0);
  function i() {
    a.value |= ee.Opening, t("beforeEnter");
  }
  function p() {
    a.value &= ~ee.Opening, t("afterEnter");
  }
  function c() {
    a.value |= ee.Closing, t("beforeLeave");
  }
  function d() {
    a.value &= ~ee.Closing, t("afterLeave");
  }
  if (!os() && dn())
    return () => Q(Ne, { ...e, onBeforeEnter: i, onAfterEnter: p, onBeforeLeave: c, onAfterLeave: d }, l);
  let f = k(null), h = k("visible"), w = E(() => e.unmount ? we.Unmount : we.Hidden);
  n({ el: f, $el: f });
  let { show: V, appear: b } = ls(), { register: $, unregister: y } = ns(), _ = { value: !0 }, x = se(), P = { value: !1 }, O = Uo(() => {
    !P.value && h.value !== "hidden" && (h.value = "hidden", y(x), d());
  });
  H(() => {
    let q = $(x);
    ce(q);
  }), re(() => {
    if (w.value === we.Hidden && x) {
      if (V && h.value !== "visible") {
        h.value = "visible";
        return;
      }
      ie(h.value, { hidden: () => y(x), visible: () => $(x) });
    }
  });
  let j = Ce(e.enter), F = Ce(e.enterFrom), J = Ce(e.enterTo), W = Ce(e.entered), X = Ce(e.leave), B = Ce(e.leaveFrom), ne = Ce(e.leaveTo);
  H(() => {
    re(() => {
      if (h.value === "visible") {
        let q = L(f);
        if (q instanceof Comment && q.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function G(q) {
    let A = _.value && !b.value, N = L(f);
    !N || !(N instanceof HTMLElement) || A || (P.value = !0, V.value && i(), V.value || c(), q(V.value ? eo(N, j, F, J, W, (I) => {
      P.value = !1, I === yt.Finished && p();
    }) : eo(N, X, B, ne, W, (I) => {
      P.value = !1, I === yt.Finished && (st(O) || (h.value = "hidden", y(x), d()));
    })));
  }
  return H(() => {
    U([V], (q, A, N) => {
      G(N), _.value = !1;
    }, { immediate: !0 });
  }), pe(At, O), St(E(() => ie(h.value, { visible: ee.Open, hidden: ee.Closed }) | a.value)), () => {
    let { appear: q, show: A, enter: N, enterFrom: I, enterTo: oe, entered: Fe, leave: _e, leaveFrom: c0, leaveTo: d0, ...qt } = e, al = { ref: f }, rl = { ...qt, ...b && V && Ae.isServer ? { class: S([o.class, qt.class, ...j, ...F]) } : {} };
    return Y({ theirProps: rl, ourProps: al, slot: {}, slots: l, attrs: o, features: Wo, visible: h.value === "visible", name: "TransitionChild" });
  };
} }), ss = ke, Ne = K({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: o, slots: l }) {
  let n = De(), a = E(() => e.show === null && n !== null ? (n.value & ee.Open) === ee.Open : e.show);
  re(() => {
    if (![!0, !1].includes(a.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let i = k(a.value ? "visible" : "hidden"), p = Uo(() => {
    i.value = "hidden";
  }), c = k(!0), d = { show: a, appear: E(() => e.appear || !c.value) };
  return H(() => {
    re(() => {
      c.value = !1, a.value ? i.value = "visible" : st(p) || (i.value = "hidden");
    });
  }), pe(At, p), pe(Mt, d), () => {
    let f = Qe(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), h = { unmount: e.unmount };
    return Y({ ourProps: { ...h, as: "template" }, theirProps: {}, slot: {}, slots: { ...l, default: () => [Q(ss, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...o, ...h, ...f }, l.default)] }, attrs: {}, features: Wo, visible: i.value === "visible", name: "Transition" });
  };
} });
const as = {
  key: 0,
  class: "po-text-sm po-font-normal po-text-slate-400 po-select-none po-block po-text-left po-pt-5"
}, rs = { class: "po-grid po-grid-cols-3" }, is = { class: "po-bg-white hover:po-bg-slate-200 po-rounded-xl po-p-2 po-transition-colors po-duration-150 po-ease-in" }, us = ["href", "target"], ps = { class: "po-flex po-w-14 po-h-14 po-items-center po-justify-center po-duration-100 po-ease-in-out po-overflow-hidden" }, cs = ["innerHTML"], ds = { class: "po-text-slate-500 po-font-normal po-text-sm po-text-center" }, to = {
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
    return (t, o) => (r(!0), u(z, null, M(e.list, (l) => (r(), u("div", null, [
      l.groupName.length > 0 ? (r(), u("span", as, v(l.groupName), 1)) : m("", !0),
      s("ul", rs, [
        (r(!0), u(z, null, M(l.apps, (n) => (r(), u("li", is, [
          s("a", {
            href: n.url,
            target: e.openInNewTab ? "_blank" : "_self",
            class: "po-flex po-flex-col po-group po-justify-center po-items-center"
          }, [
            s("span", ps, [
              s("span", {
                class: "po-w-9",
                innerHTML: n.icon
              }, null, 8, cs)
            ]),
            s("span", ds, v(n.name), 1)
          ], 8, us)
        ]))), 256))
      ])
    ]))), 256));
  }
}, fs = {
  name: "PoAppTray"
}, hs = /* @__PURE__ */ Object.assign(fs, {
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
    const t = e, o = ["", "Internal"], l = E(() => {
      let n = [];
      return o.forEach((a) => {
        let i = t.appList.filter((p) => p.group == a);
        i.length > 0 && n.push({
          groupName: a,
          apps: i
        });
      }), n;
    });
    return (n, a) => e.justApps ? (r(), D(to, {
      key: 1,
      list: g(l),
      "open-in-new-tab": e.openInNewTab
    }, null, 8, ["list", "open-in-new-tab"])) : (r(), D(g(nt), { key: 0 }, {
      default: T(({ open: i }) => [
        C(g(zt), {
          class: S([i ? "" : "po-text-opacity-90", "po-block po-w-6 po-text-slate-100 genie-effect po-z-50 po-outline-none"])
        }, {
          default: T(() => [
            C(g(Nl))
          ]),
          _: 2
        }, 1032, ["class"]),
        C(Ve, {
          "enter-active-class": "po-transition po-duration-200 po-ease-out",
          "enter-from-class": "po-translate-y-1 po-opacity-0",
          "enter-to-class": "po-translate-y-0 po-opacity-100",
          "leave-active-class": "po-transition po-duration-150 po-ease-in",
          "leave-from-class": "po-translate-y-0 po-opacity-100",
          "leave-to-class": "po-translate-y-1 po-opacity-0"
        }, {
          default: T(() => [
            C(g(Dt), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
              default: T(() => [
                C(to, {
                  list: g(l),
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
}), ms = {
  key: 0,
  class: "po-absolute po-right-0 po-w-3 po-h-3 po-bg-mpao-orange po-rounded-full po-border-2 po-border-mpao-blue"
}, vs = {
  key: 0,
  class: "po-space-y-2"
}, gs = ["onClick"], bs = { class: "po-flex po-items-center po-justify-between" }, ys = { class: "po-text-sm po-text-left po-font-semibold po-text-slate-700 po-grow po-flex po-space-x-2 po-items-center" }, xs = { class: "po-grow" }, ws = {
  key: 0,
  class: "po-w-[6px] po-h-[6px] po-rounded-full po-shrink-0 po-bg-mpao-orange po-animate-pulse"
}, Vs = { class: "po-text-xs po-font-normal po-text-slate-400 po-shrink-0" }, $s = { class: "po-block po-text-sm po-text-slate-500 po-pb-3 po-text-left" }, ks = {
  key: 1,
  class: "po-text-sm po-text-slate-500 po-py-10 po-text-center po-block"
}, _s = {
  name: "PoNotificationHub"
}, Cs = /* @__PURE__ */ Object.assign(_s, {
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
    return (o, l) => (r(), D(g(nt), null, {
      default: T(({ open: n }) => [
        C(g(zt), {
          class: S([n ? "" : "text-opacity-90", "po-block po-w-6 po-text-slate-100 genie-effect po-relative po-z-50 po-outline-none"])
        }, {
          default: T(() => [
            e.hasNewNotifications ? (r(), u("span", ms)) : m("", !0),
            C(g(Pl), { class: "po-stroke-current" })
          ]),
          _: 2
        }, 1032, ["class"]),
        C(Ve, {
          "enter-active-class": "po-transition po-duration-200 po-ease-out",
          "enter-from-class": "po-translate-y-1 po-opacity-0",
          "enter-to-class": "po-translate-y-0 po-opacity-100",
          "leave-active-class": "po-transition po-duration-150 po-ease-in",
          "leave-from-class": "po-translate-y-0 po-opacity-100",
          "leave-to-class": "po-translate-y-1 po-opacity-0"
        }, {
          default: T(() => [
            C(g(Dt), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
              default: T(() => [
                e.notifications !== null && e.notifications.length > 0 ? (r(), u("ul", vs, [
                  (r(!0), u(z, null, M(e.notifications, (a) => (r(), u("li", {
                    role: "button",
                    class: "po-space-y-2 po-p-2 po-rounded-lg po-bg-white hover:po-bg-slate-100 po-border po-border-slate-100",
                    onClick: ae((i) => o.$emit("button-click", a.name), ["prevent"])
                  }, [
                    s("span", bs, [
                      s("p", ys, [
                        s("span", xs, v(a.name), 1),
                        a.seen ? m("", !0) : (r(), u("span", ws))
                      ]),
                      s("span", Vs, v(a.time), 1)
                    ]),
                    s("span", $s, v(a.text), 1)
                  ], 8, gs))), 256))
                ])) : (r(), u("span", ks, " No notifications to show at the moment. We'll keep you informed."))
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
}), Ss = {
  key: 0,
  class: "po-hidden lg:po-block po-text-sky-50 po-text-sm po-shrink-0 po-pr-3 po-truncate po-max-w-[140px] po-overflow-hidden"
}, Ps = {
  key: 1,
  class: "po-px-3 po-bg-gradient-to-br po-from-slate-50 po-to-blue-100 po-py-1 po-rounded-l-md po-w-[100px] po-flex po-items-center po-justify-center po-text-center"
}, Os = ["src"], Es = ["src", "alt"], Ls = {
  key: 1,
  class: "po-text-xs po-text-white po-font-semibold"
}, Ts = { class: "po-pb-5" }, zs = ["src"], Ds = {
  key: 2,
  class: "po-block po-text-sm po-text-slate-400 po-italic"
}, Bs = { key: 0 }, Ms = { key: 1 }, As = /* @__PURE__ */ s("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), js = { class: "po-space-y-2 po-py-2 po-max-h-[250px] po-overflow-y-auto" }, Ns = ["onClick"], Is = { class: "po-w-5" }, Fs = { class: "" }, Rs = { class: "po-block po-text-sm po-font-normal" }, Hs = {
  key: 0,
  class: "po-text-left po-block po-text-xs po-text-slate-400"
}, qs = /* @__PURE__ */ s("div", { class: "po-h-[2px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), Us = { class: "md:po-grid po-grid-cols-2 po-space-x-1 po-pt-2" }, Ws = { class: "po-w-5" }, Gs = /* @__PURE__ */ s("span", { class: "po-text-sm po-font-normal" }, "Profile", -1), Zs = { class: "po-w-5" }, Ks = /* @__PURE__ */ s("span", { class: "po-text-sm po-font-normal" }, "Logout", -1), Ys = /* @__PURE__ */ s("div", { class: "po-text-xs po-space-x-3 po-text-center po-pt-3" }, [
  /* @__PURE__ */ s("a", {
    href: "",
    class: "po-text-slate-500 hover:po-text-mpao-lightblue"
  }, "Privacy Policy"),
  /* @__PURE__ */ s("a", {
    href: "",
    class: "po-text-slate-500 hover:po-text-mpao-lightblue"
  }, "Terms of Service")
], -1), Qs = {
  name: "PoProfileSwitcher"
}, Xs = /* @__PURE__ */ Object.assign(Qs, {
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
    const n = k({
      name: "",
      initials: "",
      image: ""
    });
    function a(h) {
      return h ? h.match(/\b[A-Z]/g).join("").substr(0, 2) : "";
    }
    const i = E(() => {
      var $, y, _, x, P, O, j, F, J, W, X, B, ne;
      let h = [], w = ($ = o.userObject) != null && $.transacting_as_organisation && Object.keys((y = o.userObject) == null ? void 0 : y.transacting_as_organisation).length > 0 ? (_ = o.userObject) == null ? void 0 : _.transacting_as_organisation : null, V = w ? w.name : (x = o.userObject) == null ? void 0 : x.name, b = w ? w.logo ? w.logo : (P = o.userObject) == null ? void 0 : P.avatar : "";
      return n.value = {
        name: V,
        initials: a(V),
        image: b
      }, h = [], h.push({
        id: (O = o.userObject) == null ? void 0 : O.id,
        entity_id: (j = o.userObject) == null ? void 0 : j.entity_id,
        name: (F = o.userObject) == null ? void 0 : F.name,
        identifier: null,
        organisation_uuid: null
      }), ((W = (J = o.userObject) == null ? void 0 : J.organisations) == null ? void 0 : W.length) > 0 && ((B = (X = o.userObject) == null ? void 0 : X.organisations) == null || B.forEach((G) => h.push(G))), h.forEach((G) => {
        var q, A, N, I;
        G.current = ((q = o.userObject) == null ? void 0 : q.transacting_as_organisation) && Object.keys((A = o.userObject) == null ? void 0 : A.transacting_as_organisation).length > 0 && G.entity_id === ((I = (N = o.userObject) == null ? void 0 : N.transacting_as_organisation) == null ? void 0 : I.entity_id);
      }), ((ne = o.userObject) == null ? void 0 : ne.transacting_as_organisation) === null && (h[0].current = !0), h;
    }), p = k(null), c = k(null), { avatar: d, logo: f } = ve(o);
    return U(d, () => {
      p.value = d.value;
    }), U(f, () => {
      c.value = f.value;
    }), dl(() => {
      i.value;
    }), H(() => {
      i.value;
    }), fl(() => {
      i.value;
    }), _t(() => {
      i.value;
    }), (h, w) => (r(), D(g(nt), { key: g(i) }, {
      default: T(({ open: V }) => [
        s("div", null, [
          C(g(zt), { class: "po-flex po-items-center po-outline-none" }, {
            default: T(() => [
              c.value ? m("", !0) : (r(), u("span", Ss, v(n.value.name), 1)),
              c.value ? (r(), u("span", Ps, [
                s("img", {
                  class: "po-h-8",
                  src: c.value,
                  alt: ""
                }, null, 8, Os)
              ])) : m("", !0),
              s("div", {
                class: S([
                  {
                    "po-bg-gradient-to-br po-from-slate-50 po-to-blue-100 po-p-1 po-rounded-r-md": c.value
                  }
                ])
              }, [
                s("div", {
                  class: S([[
                    { "text-opacity-90": V },
                    {
                      "po-w-10 po-h-10": !c.value
                    },
                    { "po-w-8 po-h-8": c.value }
                  ], "po-shrink-0 po-select-none po-rounded-full po-bg-[#2e5266] po-flex po-items-center po-justify-center genie-effect po-z-50"])
                }, [
                  p.value ? (r(), u("img", {
                    key: 0,
                    class: "po-rounded-full po-border po-border-white",
                    src: p.value,
                    alt: n.value.name
                  }, null, 8, Es)) : (r(), u("span", Ls, v(n.value.initials), 1))
                ], 2)
              ], 2)
            ]),
            _: 2
          }, 1024),
          C(Ve, {
            "enter-active-class": "po-transition po-duration-200 po-ease-out",
            "enter-from-class": "po-translate-y-1 po-opacity-0",
            "enter-to-class": "po-translate-y-0 po-opacity-100",
            "leave-active-class": "po-transition po-duration-150 po-ease-in",
            "leave-from-class": "po-translate-y-0 po-opacity-100",
            "leave-to-class": "po-translate-y-1 po-opacity-0"
          }, {
            default: T(() => [
              C(g(Dt), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
                default: T(() => {
                  var b, $, y, _;
                  return [
                    s("div", Ts, [
                      p.value ? (r(), u("img", {
                        key: 0,
                        class: "po-w-20 po-h-20 po-mx-auto po-rounded-full po-overflow-hidden",
                        src: p.value,
                        alt: ""
                      }, null, 8, zs)) : m("", !0),
                      (b = e.userObject) != null && b.name ? (r(), u("span", {
                        key: 1,
                        class: S(["po-text-base po-text-slate-600 po-font-medium po-block", [{ "po-mt-4": p.value }]])
                      }, v(($ = e.userObject) == null ? void 0 : $.name), 3)) : m("", !0),
                      (y = e.userObject) != null && y.name ? (r(), u("span", Ds, [
                        n.value.name === ((_ = e.userObject) == null ? void 0 : _.name) ? (r(), u("span", Bs, "Self")) : (r(), u("span", Ms, "User at " + v(n.value.name), 1))
                      ])) : m("", !0)
                    ]),
                    As,
                    s("div", js, [
                      (r(!0), u(z, null, M(g(i), (x, P) => (r(), u("a", {
                        href: "#",
                        onClick: ae((O) => l(x), ["prevent"]),
                        class: S(["po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-shadow-sm po-transition-all po-duration-150 po-ease-out hover:po-bg-blue-50", [
                          {
                            " po-bg-white": !x.current
                          },
                          {
                            " po-bg-blue-50 po-shadow-sm": x.current
                          }
                        ]]),
                        role: "button",
                        key: P
                      }, [
                        s("span", Is, [
                          x.isPersonal ? (r(), D(g(Wt), {
                            key: 0,
                            class: S([
                              "po-stroke-current",
                              { "po-stroke-mpao-lightblue": x.current }
                            ])
                          }, null, 8, ["class"])) : m("", !0),
                          x.isPersonal ? m("", !0) : (r(), D(g(El), {
                            key: 1,
                            class: S([
                              "po-stroke-current",
                              { "po-stroke-mpao-lightblue": x.current }
                            ])
                          }, null, 8, ["class"]))
                        ]),
                        s("span", Fs, [
                          s("span", Rs, v(x.name), 1),
                          x.identifier ? (r(), u("span", Hs, v(x.identifier), 1)) : m("", !0)
                        ])
                      ], 10, Ns))), 128))
                    ]),
                    qs,
                    s("div", Us, [
                      s("a", {
                        href: "#",
                        onClick: w[0] || (w[0] = ae((x) => h.$emit("button-click", "current-profile"), ["prevent"])),
                        class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-slate-50 hover:po-bg-blue-50 po-transition-all po-duration-150 po-ease-out",
                        role: "button"
                      }, [
                        s("span", Ws, [
                          C(g(Wt), { class: "po-stroke-current" })
                        ]),
                        Gs
                      ]),
                      s("a", {
                        href: "#",
                        onClick: w[1] || (w[1] = ae((x) => h.$emit("button-click", "logout"), ["prevent"])),
                        class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-slate-50 hover:po-bg-blue-50 po-transition-all po-duration-150 po-ease-out",
                        role: "button"
                      }, [
                        s("span", Zs, [
                          C(g(_l), { class: "po-stroke-current" })
                        ]),
                        Ks
                      ])
                    ]),
                    Ys
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
}), jt = {
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
    return (t, o) => (r(), u("div", {
      class: S(["loading-dots po-inline-block po-w-[40px] po-h-[10px]", [{ "po-relative": !e.absolute }, { "po-absolute": e.absolute }]])
    }, [
      s("div", {
        class: S(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[8px]", e.dotColor])
      }, null, 2),
      s("div", {
        class: S(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[8px]", e.dotColor])
      }, null, 2),
      s("div", {
        class: S(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[17px]", e.dotColor])
      }, null, 2),
      s("div", {
        class: S(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[26px]", e.dotColor])
      }, null, 2)
    ], 2));
  }
}, Js = ["disabled", "aria-disabled"], ea = ["value", "disabled", "aria-disabled"], ta = {
  name: "PoButton"
}, Nt = /* @__PURE__ */ Object.assign(ta, {
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
    const o = e, l = "po-rounded-full po-transition-colors po-border po-duration-100 po-ease-in-out po-cursor-pointer disabled:po-bg-slate-400 disabled:po-border-slate-400 disabled:po-cursor-default disabled:po-hover:bg-slate-400", n = E(() => {
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
          return "po-bg-mpao-lightblue hover:po-bg-mpao-blue focus:po-bg-mpao-blue po-text-slate-50 po-border-mpao-lightblue hover:po-border-mpao-blue focus:border-mpao-blue";
        case "danger":
          return "po-bg-mpao-red hover:po-bg-rose-600 focus:po-bg-mpao-red po-text-white po-border-mpao-red hover:po-border-rose-600 focus:po-border-rose-600";
        case "success":
          return "po-bg-mpao-green hover:po-bg-green-500 focus:po-bg-mpao-green po-text-white po-border-mpao-green hover:po-border-green-500 focus:po-border-green-500";
        case "ghost":
          return "po-bg-white hover:po-bg-slate-100 focus:po-bg-slate-100 po-text-slate-600 po-border-slate-300 hover:po-border-slate-400 focus:po-border-slate-400";
      }
    });
    return (i, p) => (r(), u(z, null, [
      e.isLoading ? (r(), u("span", {
        key: 0,
        class: S([[l, g(n)], "po-bg-slate-200 hover:po-bg-slate-200 focus:po-bg-slate-200"])
      }, [
        C(jt, {
          "dot-color": "po-bg-slate-500",
          class: "po-relative -po-bottom-[0.2rem]"
        })
      ], 2)) : m("", !0),
      e.type == "button" && !e.isLoading ? (r(), u("button", be({
        key: 1,
        onClick: p[0] || (p[0] = ae((c) => i.$emit("button-click", e.to), ["prevent"])),
        class: [l, g(n), g(a)],
        disabled: e.disabled,
        "aria-disabled": e.disabled
      }, i.$attrs), [
        R(i.$slots, "label", {}, () => [
          Z(v(e.label), 1)
        ])
      ], 16, Js)) : m("", !0),
      e.type == "submit" && !e.isLoading ? (r(), u("input", be({
        key: 2,
        type: "submit",
        class: [l, g(n), g(a)],
        value: e.label,
        disabled: e.disabled,
        "aria-disabled": e.disabled
      }, i.$attrs), null, 16, ea)) : m("", !0),
      e.type == "link" && !e.isLoading ? (r(), u("a", be({
        key: 3,
        href: "#",
        onClick: p[1] || (p[1] = ae((c) => i.$emit("button-click", e.to), ["prevent"])),
        class: [l, g(n), g(a)]
      }, i.$attrs), [
        R(i.$slots, "label", {}, () => [
          Z(v(e.label), 1)
        ])
      ], 16)) : m("", !0),
      e.type == "simple" && !e.isLoading ? (r(), u("a", {
        key: 4,
        href: "#",
        onClick: p[2] || (p[2] = ae((c) => i.$emit("button-click", e.to), ["prevent"])),
        class: S(["po-text-sm po-transition-colors po-duration-100 po-ease-in-out po-inline-flex po-items-center po-space-x-1", [
          { "po-text-mpao-lightblue hover:po-text-mpao-blue": !e.overrideColors }
        ]])
      }, [
        R(i.$slots, "label", {}, () => [
          Z(v(e.label), 1)
        ])
      ], 2)) : m("", !0)
    ], 64));
  }
});
function Go(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", {
      "fill-rule": "evenodd",
      d: "M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Zo(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", {
      "fill-rule": "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h4.59l-2.1 1.95a.75.75 0 001.02 1.1l3.5-3.25a.75.75 0 000-1.1l-3.5-3.25a.75.75 0 10-1.02 1.1l2.1 1.95H6.75z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Ko(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", {
      "fill-rule": "evenodd",
      d: "M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Yo(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", {
      "fill-rule": "evenodd",
      d: "M2.24 6.8a.75.75 0 001.06-.04l1.95-2.1v8.59a.75.75 0 001.5 0V4.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L2.2 5.74a.75.75 0 00.04 1.06zm8 6.4a.75.75 0 00-.04 1.06l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V6.75a.75.75 0 00-1.5 0v8.59l-1.95-2.1a.75.75 0 00-1.06-.04z",
      "clip-rule": "evenodd"
    })
  ]);
}
function oo(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", {
      "fill-rule": "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      "clip-rule": "evenodd"
    })
  ]);
}
function oa(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", {
      "fill-rule": "evenodd",
      d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",
      "clip-rule": "evenodd"
    })
  ]);
}
function la(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", {
      "fill-rule": "evenodd",
      d: "M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Qo(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", {
      "fill-rule": "evenodd",
      d: "M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z",
      "clip-rule": "evenodd"
    })
  ]);
}
function It(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", {
      "fill-rule": "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      "clip-rule": "evenodd"
    })
  ]);
}
function na(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", {
      "fill-rule": "evenodd",
      d: "M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z",
      "clip-rule": "evenodd"
    })
  ]);
}
function sa(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", {
      "fill-rule": "evenodd",
      d: "M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Ft(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
  ]);
}
function aa() {
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
let qe;
function xt() {
  xt.init || (xt.init = !0, qe = aa() !== -1);
}
var at = {
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
    xt(), kt(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", qe && this.$el.appendChild(e), e.data = "about:blank", qe || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!qe && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const ra = /* @__PURE__ */ vl("data-v-b329ee4c");
hl("data-v-b329ee4c");
const ia = {
  class: "resize-observer",
  tabindex: "-1"
};
ml();
const ua = /* @__PURE__ */ ra((e, t, o, l, n, a) => (r(), D("div", ia)));
at.render = ua;
at.__scopeId = "data-v-b329ee4c";
at.__file = "src/components/ResizeObserver.vue";
function Ue(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ue = function(t) {
    return typeof t;
  } : Ue = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ue(e);
}
function pa(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function lo(e, t) {
  for (var o = 0; o < t.length; o++) {
    var l = t[o];
    l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(e, l.key, l);
  }
}
function ca(e, t, o) {
  return t && lo(e.prototype, t), o && lo(e, o), e;
}
function no(e) {
  return da(e) || fa(e) || ha(e) || ma();
}
function da(e) {
  if (Array.isArray(e))
    return wt(e);
}
function fa(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function ha(e, t) {
  if (e) {
    if (typeof e == "string")
      return wt(e, t);
    var o = Object.prototype.toString.call(e).slice(8, -1);
    if (o === "Object" && e.constructor && (o = e.constructor.name), o === "Map" || o === "Set")
      return Array.from(e);
    if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
      return wt(e, t);
  }
}
function wt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var o = 0, l = new Array(t); o < t; o++)
    l[o] = e[o];
  return l;
}
function ma() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function va(e) {
  var t;
  return typeof e == "function" ? t = {
    callback: e
  } : t = e, t;
}
function ga(e, t) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l, n, a, i = function(c) {
    for (var d = arguments.length, f = new Array(d > 1 ? d - 1 : 0), h = 1; h < d; h++)
      f[h - 1] = arguments[h];
    if (a = f, !(l && c === n)) {
      var w = o.leading;
      typeof w == "function" && (w = w(c, n)), (!l || c !== n) && w && e.apply(void 0, [c].concat(no(a))), n = c, clearTimeout(l), l = setTimeout(function() {
        e.apply(void 0, [c].concat(no(a))), l = 0;
      }, t);
    }
  };
  return i._clear = function() {
    clearTimeout(l), l = null;
  }, i;
}
function Xo(e, t) {
  if (e === t)
    return !0;
  if (Ue(e) === "object") {
    for (var o in e)
      if (!Xo(e[o], t[o]))
        return !1;
    return !0;
  }
  return !1;
}
var ba = /* @__PURE__ */ function() {
  function e(t, o, l) {
    pa(this, e), this.el = t, this.observer = null, this.frozen = !1, this.createObserver(o, l);
  }
  return ca(e, [{
    key: "createObserver",
    value: function(o, l) {
      var n = this;
      if (this.observer && this.destroyObserver(), !this.frozen) {
        if (this.options = va(o), this.callback = function(p, c) {
          n.options.callback(p, c), p && n.options.once && (n.frozen = !0, n.destroyObserver());
        }, this.callback && this.options.throttle) {
          var a = this.options.throttleOptions || {}, i = a.leading;
          this.callback = ga(this.callback, this.options.throttle, {
            leading: function(c) {
              return i === "both" || i === "visible" && c || i === "hidden" && !c;
            }
          });
        }
        this.oldResult = void 0, this.observer = new IntersectionObserver(function(p) {
          var c = p[0];
          if (p.length > 1) {
            var d = p.find(function(h) {
              return h.isIntersecting;
            });
            d && (c = d);
          }
          if (n.callback) {
            var f = c.isIntersecting && c.intersectionRatio >= n.threshold;
            if (f === n.oldResult)
              return;
            n.oldResult = f, n.callback(f, c);
          }
        }, this.options.intersection), kt(function() {
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
function Jo(e, t, o) {
  var l = t.value;
  if (l)
    if (typeof IntersectionObserver > "u")
      console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");
    else {
      var n = new ba(e, l, o);
      e._vue_visibilityState = n;
    }
}
function ya(e, t, o) {
  var l = t.value, n = t.oldValue;
  if (!Xo(l, n)) {
    var a = e._vue_visibilityState;
    if (!l) {
      el(e);
      return;
    }
    a ? a.createObserver(l, o) : Jo(e, {
      value: l
    }, o);
  }
}
function el(e) {
  var t = e._vue_visibilityState;
  t && (t.destroyObserver(), delete e._vue_visibilityState);
}
var xa = {
  beforeMount: Jo,
  updated: ya,
  unmounted: el
};
function wa(e) {
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
var Va = {
  itemsLimit: 1e3
}, $a = /(auto|scroll)/;
function tl(e, t) {
  return e.parentNode === null ? t : tl(e.parentNode, t.concat([e]));
}
var dt = function(t, o) {
  return getComputedStyle(t, null).getPropertyValue(o);
}, ka = function(t) {
  return dt(t, "overflow") + dt(t, "overflow-y") + dt(t, "overflow-x");
}, _a = function(t) {
  return $a.test(ka(t));
};
function so(e) {
  if (e instanceof HTMLElement || e instanceof SVGElement) {
    for (var t = tl(e.parentNode, []), o = 0; o < t.length; o += 1)
      if (_a(t[o]))
        return t[o];
    return document.scrollingElement || document.documentElement;
  }
}
function Vt(e) {
  return Vt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Vt(e);
}
var ol = {
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
function ll() {
  return this.items.length && Vt(this.items[0]) !== "object";
}
var $t = !1;
if (typeof window < "u") {
  $t = !1;
  try {
    var Ca = Object.defineProperty({}, "passive", {
      get: function() {
        $t = !0;
      }
    });
    window.addEventListener("test", null, Ca);
  } catch {
  }
}
let Sa = 0;
var Rt = {
  name: "RecycleScroller",
  components: {
    ResizeObserver: at
  },
  directives: {
    ObserveVisibility: xa
  },
  props: {
    ...ol,
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
        let n = 1e4, a = 0, i;
        for (let p = 0, c = t.length; p < c; p++)
          i = t[p][o] || l, i < n && (n = i), a += i, e[p] = { accumulator: a, size: i };
        return this.$_computedMinItemSize = n, e;
      }
      return [];
    },
    simpleArray: ll,
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
      const a = gl({
        id: Sa++,
        index: t,
        used: !0,
        key: l,
        type: n
      }), i = bl({
        item: o,
        position: 0,
        nr: a
      });
      return e.push(i), i;
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
      const o = this.itemSize, l = this.gridItems || 1, n = this.itemSecondarySize || o, a = this.$_computedMinItemSize, i = this.typeField, p = this.simpleArray ? null : this.keyField, c = this.items, d = c.length, f = this.sizes, h = this.$_views, w = this.$_unusedViews, V = this.pool, b = this.itemIndexByKey;
      let $, y, _, x, P;
      if (!d)
        $ = y = x = P = _ = 0;
      else if (this.$_prerender)
        $ = x = 0, y = P = Math.min(this.prerender, c.length), _ = null;
      else {
        const B = this.getScroll();
        if (t) {
          let q = B.start - this.$_lastUpdateScrollPosition;
          if (q < 0 && (q = -q), o === null && q < a || q < o)
            return {
              continuous: !0
            };
        }
        this.$_lastUpdateScrollPosition = B.start;
        const ne = this.buffer;
        B.start -= ne, B.end += ne;
        let G = 0;
        if (this.$refs.before && (G = this.$refs.before.scrollHeight, B.start -= G), this.$refs.after) {
          const q = this.$refs.after.scrollHeight;
          B.end += q;
        }
        if (o === null) {
          let q, A = 0, N = d - 1, I = ~~(d / 2), oe;
          do
            oe = I, q = f[I].accumulator, q < B.start ? A = I : I < d - 1 && f[I + 1].accumulator > B.start && (N = I), I = ~~((A + N) / 2);
          while (I !== oe);
          for (I < 0 && (I = 0), $ = I, _ = f[d - 1].accumulator, y = I; y < d && f[y].accumulator < B.end; y++)
            ;
          for (y === -1 ? y = c.length - 1 : (y++, y > d && (y = d)), x = $; x < d && G + f[x].accumulator < B.start; x++)
            ;
          for (P = x; P < d && G + f[P].accumulator < B.end; P++)
            ;
        } else {
          $ = ~~(B.start / o * l);
          const q = $ % l;
          $ -= q, y = Math.ceil(B.end / o * l), x = Math.max(0, Math.floor((B.start - G) / o * l)), P = Math.floor((B.end - G) / o * l), $ < 0 && ($ = 0), y > d && (y = d), x < 0 && (x = 0), P > d && (P = d), _ = Math.ceil(d / l) * o;
        }
      }
      y - $ > Va.itemsLimit && this.itemsLimitError(), this.totalSize = _;
      let O;
      const j = $ <= this.$_endIndex && y >= this.$_startIndex;
      if (j)
        for (let B = 0, ne = V.length; B < ne; B++)
          O = V[B], O.nr.used && (e && (O.nr.index = b[O.item[p]]), (O.nr.index == null || O.nr.index < $ || O.nr.index >= y) && this.unuseView(O));
      const F = j ? null : /* @__PURE__ */ new Map();
      let J, W, X;
      for (let B = $; B < y; B++) {
        J = c[B];
        const ne = p ? J[p] : J;
        if (ne == null)
          throw new Error(`Key is ${ne} on item (keyField is '${p}')`);
        if (O = h.get(ne), !o && !f[B].size) {
          O && this.unuseView(O);
          continue;
        }
        W = J[i];
        let G = w.get(W), q = !1;
        if (!O)
          j ? G && G.length ? O = G.pop() : O = this.addView(V, B, J, ne, W) : (X = F.get(W) || 0, (!G || X >= G.length) && (O = this.addView(V, B, J, ne, W), this.unuseView(O, !0), G = w.get(W)), O = G[X], F.set(W, X + 1)), h.delete(O.nr.key), O.nr.used = !0, O.nr.index = B, O.nr.key = ne, O.nr.type = W, h.set(ne, O), q = !0;
        else if (!O.nr.used && (O.nr.used = !0, q = !0, G)) {
          const A = G.indexOf(O);
          A !== -1 && G.splice(A, 1);
        }
        O.item = J, q && (B === c.length - 1 && this.$emit("scroll-end"), B === 0 && this.$emit("scroll-start")), o === null ? (O.position = f[B - 1].accumulator, O.offset = 0) : (O.position = Math.floor(B / l) * o, O.offset = B % l * n);
      }
      return this.$_startIndex = $, this.$_endIndex = y, this.emitUpdate && this.$emit("update", $, y, x, P), clearTimeout(this.$_sortTimer), this.$_sortTimer = setTimeout(this.sortViews, this.updateInterval + 300), {
        continuous: j
      };
    },
    getListenerTarget() {
      let e = so(this.$el);
      return window.document && (e === window.document.documentElement || e === window.document.body) && (e = window), e;
    },
    getScroll() {
      const { $el: e, direction: t } = this, o = t === "vertical";
      let l;
      if (this.pageMode) {
        const n = e.getBoundingClientRect(), a = o ? n.height : n.width;
        let i = -(o ? n.top : n.left), p = o ? window.innerHeight : window.innerWidth;
        i < 0 && (p += i, i = 0), i + p > a && (p = a - i), l = {
          start: i,
          end: i + p
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
      this.listenerTarget = this.getListenerTarget(), this.listenerTarget.addEventListener("scroll", this.handleScroll, $t ? {
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
        const a = so(this.$el), i = a.tagName === "HTML" ? 0 : a[t.scroll], p = a.getBoundingClientRect(), d = this.$el.getBoundingClientRect()[t.start] - p[t.start];
        o = a, l = t.scroll, n = e + i + d;
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
const Pa = {
  key: 0,
  ref: "before",
  class: "vue-recycle-scroller__slot"
}, Oa = {
  key: 1,
  ref: "after",
  class: "vue-recycle-scroller__slot"
};
function Ea(e, t, o, l, n, a) {
  const i = io("ResizeObserver"), p = yl("observe-visibility");
  return ze((r(), u(
    "div",
    {
      class: S(["vue-recycle-scroller", {
        ready: n.ready,
        "page-mode": o.pageMode,
        [`direction-${e.direction}`]: !0
      }]),
      onScrollPassive: t[0] || (t[0] = (...c) => a.handleScroll && a.handleScroll(...c))
    },
    [
      e.$slots.before ? (r(), u(
        "div",
        Pa,
        [
          R(e.$slots, "before")
        ],
        512
        /* NEED_PATCH */
      )) : m("v-if", !0),
      (r(), D(de(o.listTag), {
        ref: "wrapper",
        style: Ze({ [e.direction === "vertical" ? "minHeight" : "minWidth"]: n.totalSize + "px" }),
        class: S(["vue-recycle-scroller__item-wrapper", o.listClass])
      }, {
        default: T(() => [
          (r(!0), u(
            z,
            null,
            M(n.pool, (c) => (r(), D(de(o.itemTag), be({
              key: c.nr.id,
              style: n.ready ? {
                transform: `translate${e.direction === "vertical" ? "Y" : "X"}(${c.position}px) translate${e.direction === "vertical" ? "X" : "Y"}(${c.offset}px)`,
                width: o.gridItems ? `${e.direction === "vertical" && o.itemSecondarySize || o.itemSize}px` : void 0,
                height: o.gridItems ? `${e.direction === "horizontal" && o.itemSecondarySize || o.itemSize}px` : void 0
              } : null,
              class: ["vue-recycle-scroller__item-view", [
                o.itemClass,
                {
                  hover: !o.skipHover && n.hoverKey === c.nr.key
                }
              ]]
            }, xl(o.skipHover ? {} : {
              mouseenter: () => {
                n.hoverKey = c.nr.key;
              },
              mouseleave: () => {
                n.hoverKey = null;
              }
            })), {
              default: T(() => [
                R(e.$slots, "default", {
                  item: c.item,
                  index: c.nr.index,
                  active: c.nr.used
                })
              ]),
              _: 2
              /* DYNAMIC */
            }, 1040, ["style", "class"]))),
            128
            /* KEYED_FRAGMENT */
          )),
          R(e.$slots, "empty")
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["style", "class"])),
      e.$slots.after ? (r(), u(
        "div",
        Oa,
        [
          R(e.$slots, "after")
        ],
        512
        /* NEED_PATCH */
      )) : m("v-if", !0),
      C(i, { onNotify: a.handleResize }, null, 8, ["onNotify"])
    ],
    34
    /* CLASS, HYDRATE_EVENTS */
  )), [
    [p, a.handleVisibilityChange]
  ]);
}
Rt.render = Ea;
Rt.__file = "src/components/RecycleScroller.vue";
var Ht = {
  name: "DynamicScroller",
  components: {
    RecycleScroller: Rt
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
    ...ol,
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
    simpleArray: ll,
    itemsWithSize() {
      const e = [], { items: t, keyField: o, simpleArray: l } = this, n = this.vscrollData.sizes, a = t.length;
      for (let i = 0; i < a; i++) {
        const p = t[i], c = l ? i : p[o];
        let d = n[c];
        typeof d > "u" && !this.$_undefinedMap[c] && (d = 0), e.push({
          item: p,
          id: c,
          size: d
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
      const a = Math.min(e.length, t.length);
      for (let p = 0; p < a && !(l >= o); p++)
        l += t[p].size || this.minItemSize, n += e[p].size || this.minItemSize;
      const i = n - l;
      i !== 0 && (this.$el.scrollTop += i);
    }
  },
  beforeCreate() {
    this.$_updates = [], this.$_undefinedSizes = 0, this.$_undefinedMap = {}, this.$_events = wa();
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
function La(e, t, o, l, n, a) {
  const i = io("RecycleScroller");
  return r(), D(i, be({
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
    default: T(({ item: p, index: c, active: d }) => [
      R(e.$slots, "default", Le(Te({
        item: p.item,
        index: c,
        active: d,
        itemWithSize: p
      })))
    ]),
    before: T(() => [
      R(e.$slots, "before")
    ]),
    after: T(() => [
      R(e.$slots, "after")
    ]),
    empty: T(() => [
      R(e.$slots, "empty")
    ]),
    _: 3
    /* FORWARDED */
  }, 16, ["items", "min-item-size", "direction", "list-tag", "item-tag", "onResize", "onVisible"]);
}
Ht.render = La;
Ht.__file = "src/components/DynamicScroller.vue";
var nl = {
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
    return Q(this.tag, this.$slots.default());
  }
};
nl.__file = "src/components/DynamicScrollerItem.vue";
const Ta = ["for"], za = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Da = ["title"], Ba = { class: "po-relative po-mt-1" }, Ma = {
  role: "button",
  ref: "comboboxButton"
}, Aa = ["placeholder", "disabled", "id"], ja = {
  key: 0,
  class: "po-absolute po-z-10 po-mt-1 po-w-full po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
}, Na = {
  class: /* @__PURE__ */ S(["group-hover:po-text-white po-block po-truncate"])
}, Ia = {
  key: 0,
  class: "po-block po-text-xs po-opacity-60"
}, Fa = {
  key: 0,
  class: "po-mt-2 po-text-sm po-text-slate-500",
  id: "-description"
}, Ra = {
  key: 1,
  class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
  id: "-error"
}, Ha = {
  name: "PoSelectField"
}, qa = /* @__PURE__ */ Object.assign(Ha, {
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
    const o = e, l = k(""), n = k(""), a = k(), i = k(!1), p = k(!1), c = k(null), d = k(null), f = E(() => {
      const _ = l.value.toLowerCase();
      return _ === "" ? o.list.map((x) => ({
        ...x,
        active: a.value === x.id
      })) : o.list.filter((x) => x.name.toLowerCase().includes(_)).map((x) => ({
        ...x,
        active: a.value === x.id
      }));
    });
    function h(_) {
      if (o.object)
        return _ == null ? void 0 : _.name;
      if (f.value) {
        let x = f.value.find((P) => P.id === _);
        return x == null ? void 0 : x.name;
      } else if (placeholder)
        return placeholder;
    }
    a.value = o.modelValue, _t(() => {
      a.value = o.modelValue;
    }), U(a, () => {
      n.value = h(a.value);
    });
    const { errorMessage: w } = ve(o), V = k(w.value !== null);
    U(w, (_, x) => {
      V.value = w.value !== null && w.value !== "";
    });
    const b = k("");
    H(() => {
      o.id === "" ? b.value = o.id ? o.id : `${o.label.replace(
        /\s/g,
        ""
      )}-${Date.now()}-selectfield-${Math.floor(Math.random() * 9e3)}` : b.value = o.id, document.addEventListener("click", $), n.value = h(o.modelValue);
    }), Ke(() => {
      document.removeEventListener("click", $);
    });
    const $ = (_) => {
      !d.value.contains(_.target) && !c.value.contains(_.target) && (i.value = !!p.value);
    };
    function y(_) {
      a.value = _, n.value = _.name, l.value = "", t("selected", o.object ? _ : _.id), t("update:modelValue", o.object ? _ : _.id), i.value = !!p.value;
    }
    return (_, x) => (r(), u("div", {
      class: S([{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]),
      ref_key: "containerRef",
      ref: d
    }, [
      s("label", {
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700",
        for: b.value
      }, [
        s("span", null, v(e.label), 1),
        e.required ? (r(), u("span", za, "*")) : m("", !0),
        e.info !== null ? (r(), u("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          C(g(It), { class: "po-fill-current" })
        ], 8, Da)) : m("", !0)
      ], 8, Ta),
      s("div", Ba, [
        s("div", Ma, [
          ze(s("input", {
            type: "text",
            ref_key: "selectBox",
            ref: c,
            class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm",
            placeholder: e.placeholder,
            disabled: e.disabled,
            "onUpdate:modelValue": x[0] || (x[0] = (P) => n.value = P),
            onInput: x[1] || (x[1] = (P) => l.value = P.target.value),
            onFocus: x[2] || (x[2] = (P) => {
              p.value = !0, i.value = !0;
            }),
            onBlur: x[3] || (x[3] = (P) => p.value = !1),
            id: b.value
          }, null, 40, Aa), [
            [We, n.value]
          ]),
          s("span", {
            class: "po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-rounded-r-md po-px-2 focus:po-outline-none",
            role: "button",
            onClick: x[4] || (x[4] = (P) => i.value = !i.value)
          }, [
            C(g(la), {
              class: "po-h-5 po-w-5 po-text-slate-400",
              "aria-hidden": "true"
            })
          ])
        ], 512),
        i.value && g(f).length > 0 ? (r(), u("div", ja, [
          C(g(Ht), {
            items: g(f),
            "min-item-size": 32,
            "key-field": "id",
            class: "scroller po-max-h-60 po-h-full po-overflow-y-auto"
          }, {
            default: T(({ item: P, index: O, active: j }) => [
              C(g(nl), {
                item: P,
                active: j,
                "size-dependencies": [P.name],
                onClick: (F) => y(P),
                "data-index": O,
                class: S([
                  "po-relative po-group po-select-none po-py-2 po-pl-3 po-pr-9 po-cursor-pointer hover:po-bg-mpao-lightblue",
                  P.active ? "po-bg-mpao-lightblue po-text-white" : "po-text-slate-900"
                ])
              }, {
                default: T(() => [
                  s("span", Na, [
                    Z(v((P == null ? void 0 : P.name) ?? "") + " ", 1),
                    P != null && P.subtitle ? (r(), u("span", Ia, v(P == null ? void 0 : P.subtitle), 1)) : m("", !0)
                  ])
                ]),
                _: 2
              }, 1032, ["item", "active", "size-dependencies", "onClick", "data-index", "class"])
            ]),
            _: 1
          }, 8, ["items"])
        ])) : m("", !0)
      ]),
      e.message !== null ? (r(), u("p", Fa, v(e.message), 1)) : m("", !0),
      g(w) !== null ? (r(), u("p", Ra, [
        s("span", null, v(g(w)), 1)
      ])) : m("", !0)
    ], 2));
  }
}), Ua = /* @__PURE__ */ s("div", { class: "po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity" }, null, -1), Wa = { class: "po-fixed po-z-10 po-inset-0" }, Ga = { class: "po-flex po-justify-center po-items-start po-min-h-screen sm:po-px-4 sm:po-pt-10 sm:po-pb-20 po-text-center sm:po-block po-max-h-screen po-overflow-y-hidden" }, Za = /* @__PURE__ */ s("span", {
  class: "po-hidden sm:po-inline-block sm:po-align-middle sm:po-h-screen",
  "aria-hidden": "true"
}, "​", -1), Ka = { class: "po-flex po-items-center po-bg-white po-rounded-t-xl po-p-5" }, Ya = { class: "po-grow po-text-md po-font-bold po-text-slate-600" }, Qa = { class: "po-shrink-0" }, Xa = /* @__PURE__ */ s("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), Ja = {
  key: 0,
  class: "po-bg-slate-50 po-rounded-b-xl"
}, er = {
  name: "PoModal"
}, Ie = /* @__PURE__ */ Object.assign(er, {
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
    const o = e, { show: l } = ve(o), n = k(!1);
    U(l, () => {
      n.value = l.value;
    });
    function a() {
      n.value = !1, t("modal-closed", !0);
    }
    const i = o.modalTitle.toLowerCase().replace(/\s+/g, "-"), p = new URLSearchParams(window.location.search);
    return n.value = p.get("modal") !== void 0 && p.get("modal") === i, (c, d) => (r(), u("div", null, [
      e.openBtnLabel.length > 0 ? (r(), D(g(Nt), {
        key: 0,
        label: e.openBtnLabel,
        onClick: d[0] || (d[0] = (f) => n.value = !0)
      }, null, 8, ["label"])) : m("", !0),
      (r(), D(Ge, { to: "body" }, [
        C(g(Ne), {
          as: "template",
          show: n.value
        }, {
          default: T(() => [
            C(g(tt), {
              as: "div",
              class: "po-relative po-z-50",
              onClose: a
            }, {
              default: T(() => [
                C(g(ke), {
                  as: "template",
                  enter: "po-ease-out po-duration-300",
                  "enter-from": "po-opacity-0",
                  "enter-to": "po-opacity-100",
                  leave: "po-ease-in po-duration-200",
                  "leave-from": "po-opacity-100",
                  "leave-to": "po-opacity-0"
                }, {
                  default: T(() => [
                    Ua
                  ]),
                  _: 1
                }),
                s("div", Wa, [
                  s("div", Ga, [
                    Za,
                    C(g(ke), {
                      as: "template",
                      enter: "po-ease-out po-duration-300",
                      "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                      "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                      leave: "po-ease-in po-duration-200",
                      "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                      "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                    }, {
                      default: T(() => [
                        C(g(ot), {
                          class: S(["po-relative po-inline-block po-align-bottom po-bg-white sm:po-rounded-xl po-text-left po-shadow-xl po-transform po-transition-all sm:po-align-top po-w-full", e.modalWidth])
                        }, {
                          default: T(() => [
                            s("div", Ka, [
                              s("h3", Ya, v(e.modalTitle), 1),
                              s("div", Qa, [
                                s("span", {
                                  role: "button",
                                  class: "po-block",
                                  onClick: a
                                }, [
                                  C(g(Ye), { class: "po-w-5 po-stroke-slate-500 hover:po-stroke-mpao-orange po-transition-colors po-duration-150 po-ease-in-out" })
                                ])
                              ])
                            ]),
                            Xa,
                            s("div", {
                              class: S(["po-p-5 po-overflow-y-auto", [
                                {
                                  "po-max-h-[calc(100vh-220px)]": c.$slots.footer
                                },
                                {
                                  "po-max-h-[calc(100vh-145px)]": !c.$slots.footer
                                },
                                e.modalHeight
                              ]])
                            }, [
                              R(c.$slots, "content")
                            ], 2),
                            c.$slots.footer ? (r(), u("div", Ja, [
                              R(c.$slots, "footer")
                            ])) : m("", !0)
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
function tr(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", { d: "M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" }),
    s("path", { d: "M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" })
  ]);
}
function or(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", {
      "fill-rule": "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      "clip-rule": "evenodd"
    })
  ]);
}
function lr(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", { d: "M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" })
  ]);
}
function sl(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", {
      "fill-rule": "evenodd",
      d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z",
      "clip-rule": "evenodd"
    })
  ]);
}
function nr(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", {
      "fill-rule": "evenodd",
      d: "M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z",
      "clip-rule": "evenodd"
    })
  ]);
}
const sr = ["for"], ar = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, rr = ["title"], ir = ["name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], ur = ["id"], pr = ["id"], cr = {
  name: "PoTextarea"
}, dr = /* @__PURE__ */ Object.assign(cr, {
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
    return (t, o) => (r(), u("div", {
      class: S(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      s("label", {
        for: e.id,
        class: "po-text-sm po-font-medium po-text-slate-700 po-flex po-items-center po-space-x-1"
      }, [
        s("span", null, v(e.label), 1),
        e.required ? (r(), u("span", ar, "*")) : m("", !0),
        e.info !== null ? (r(), u("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          C(g(sl))
        ], 8, rr)) : m("", !0)
      ], 8, sr),
      s("textarea", be({
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
      }), null, 16, ir),
      e.message !== null ? (r(), u("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, v(e.message), 9, ur)) : m("", !0),
      e.errorMessage !== null ? (r(), u("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, v(e.errorMessage), 9, pr)) : m("", !0)
    ], 2));
  }
}), fr = { class: "shell-sidebar--icon" }, hr = /* @__PURE__ */ s("span", { class: "shell-sidebar--label po-font-medium" }, "Feedback", -1), mr = { action: "" }, vr = /* @__PURE__ */ s("br", null, null, -1), gr = { class: "po-p-5" }, br = {
  __name: "feedbackForm",
  setup(e) {
    const t = k(!1), o = [
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
    ], l = k({
      type: 1,
      message: ""
    });
    return (n, a) => (r(), u(z, null, [
      s("button", {
        onClick: a[0] || (a[0] = ae(() => t.value = !0, ["prevent"])),
        class: "shell-sidebar--item",
        title: "Go to feedback"
      }, [
        s("span", fr, [
          C(g(Ll), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" })
        ]),
        hr
      ]),
      C(Ie, {
        show: t.value,
        onModalClosed: a[3] || (a[3] = () => t.value = !1),
        "modal-title": "Feedback"
      }, {
        content: T(() => [
          s("form", mr, [
            C(qa, {
              label: "Type",
              list: o,
              modelValue: l.value.type,
              "onUpdate:modelValue": a[1] || (a[1] = (i) => l.value.type = i)
            }, null, 8, ["modelValue"]),
            vr,
            C(dr, {
              cols: "6",
              rows: "6",
              label: "Description",
              modelValue: l.value.message,
              "onUpdate:modelValue": a[2] || (a[2] = (i) => l.value.message = i)
            }, null, 8, ["modelValue"])
          ])
        ]),
        footer: T(() => [
          s("div", gr, [
            C(Nt, {
              label: "Send",
              type: "button"
            })
          ])
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}, yr = { class: "shell-sidebar" }, xr = { class: "po-grow" }, wr = { class: "shell-sidebar--menu" }, Vr = ["onClick", "title"], $r = { class: "shell-sidebar--icon" }, kr = { class: "shell-sidebar--label po-font-medium po-text-left" }, _r = { key: 0 }, Cr = { class: "shell-sidebar--menu sidebar-apps po-shrink-0 po-mb-0" }, Sr = ["onClick"], Pr = { class: "shell-sidebar--icon" }, Or = ["innerHTML"], Er = { class: "shell-sidebar--label po-font-medium po-text-left" }, Lr = {
  key: 0,
  class: "shell-sidebar--menu po-shrink-0 po-mb-0 po-border-t po-border-slate-200 po-pt-3"
}, Tr = {
  name: "PoSidebarDrawer"
}, g0 = /* @__PURE__ */ Object.assign(Tr, {
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
    const o = e, l = E(() => {
      let c = [];
      const d = o.apps.filter((f) => f.code == o.appCode)[0];
      return d && o.apps.filter(
        (h) => d.related.includes(h.code)
      ).forEach((h) => {
        c.push(h);
      }), c;
    }), n = k(null);
    function a() {
      window.innerWidth <= 1024 && (n.value.checked = !n.value.checked);
    }
    function i(c, d) {
      t(c, d), a();
    }
    function p() {
    }
    return (c, d) => (r(), u(z, null, [
      s("input", {
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
      s("aside", yr, [
        s("div", xr, [
          (r(!0), u(z, null, M(e.content, (f) => (r(), u("div", null, [
            C(g(Yt), { defaultOpen: !0 }, {
              default: T(({ open: h }) => [
                f.groupName ? (r(), D(g(Qt), {
                  key: 0,
                  class: S([h ? "" : "po-mb-3", "shell-sidebar--section po-w-full po-text-left"])
                }, {
                  default: T(() => [
                    Z(v(f.groupName), 1)
                  ]),
                  _: 2
                }, 1032, ["class"])) : m("", !0),
                C(Ve, {
                  "enter-active-class": "po-transition po-duration-100 po-ease-out",
                  "enter-from-class": "po-transform po-scale-95 po-opacity-0",
                  "enter-to-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-active-class": "po-transition po-duration-75 po-ease-out",
                  "leave-from-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-to-class": "po-transform po-scale-95 po-opacity-0"
                }, {
                  default: T(() => [
                    C(g(Xt), null, {
                      default: T(() => [
                        s("ul", wr, [
                          (r(!0), u(z, null, M(f.items, (w) => (r(), u("li", null, [
                            w.disabled ? m("", !0) : (r(), u("button", {
                              key: 0,
                              onClick: (V) => i("button-click", w.url),
                              class: S([
                                "shell-sidebar--item",
                                { active: w.url == e.currRoute }
                              ]),
                              title: `Go to ${w.label}`
                            }, [
                              s("span", $r, [
                                (r(), D(de(w.icon), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" }))
                              ]),
                              s("span", kr, v(w.label), 1)
                            ], 10, Vr))
                          ]))), 256))
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
          ]))), 256)),
          g(l).length > 0 ? (r(), u("div", _r, [
            C(g(Yt), { defaultOpen: !0 }, {
              default: T(({ open: f }) => [
                e.appsLabel ? (r(), D(g(Qt), {
                  key: 0,
                  class: S([f ? "" : "po-mb-3", "shell-sidebar--section po-w-full po-text-left"])
                }, {
                  default: T(() => [
                    Z(v(e.appsLabel), 1)
                  ]),
                  _: 2
                }, 1032, ["class"])) : m("", !0),
                C(Ve, {
                  "enter-active-class": "po-transition po-duration-100 po-ease-out",
                  "enter-from-class": "po-transform po-scale-95 po-opacity-0",
                  "enter-to-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-active-class": "po-transition po-duration-75 po-ease-out",
                  "leave-from-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-to-class": "po-transform po-scale-95 po-opacity-0"
                }, {
                  default: T(() => [
                    C(g(Xt), null, {
                      default: T(() => [
                        s("ul", Cr, [
                          (r(!0), u(z, null, M(g(l), (h, w) => (r(), u("li", null, [
                            s("button", {
                              onClick: (V) => i("app-click", h.name),
                              class: S(["shell-sidebar--item", [{ active: h.current }]]),
                              title: "Go to feedback"
                            }, [
                              s("span", Pr, [
                                s("span", {
                                  innerHTML: h.icon,
                                  class: "po-text-slate-600 po-w-5"
                                }, null, 8, Or)
                              ]),
                              s("span", Er, v(h.name), 1)
                            ], 10, Sr)
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
          ])) : m("", !0)
        ]),
        e.hasFeedback ? (r(), u("ul", Lr, [
          s("li", null, [
            C(br)
          ])
        ])) : m("", !0)
      ])
    ], 64));
  }
}), zr = {
  key: 0,
  class: "shell-content--action-bar"
}, Dr = { class: "action-bar__nav" }, Br = ["onClick"], Mr = { class: "action-bar__nav_label po-font-medium" }, Ar = {
  key: 0,
  class: "po-shrink-0 po-flex po-space-x-1"
}, jr = /* @__PURE__ */ s("span", { class: "action-bar__nav_label po-font-medium" }, "Go Back", -1), Nr = {
  name: "PoActionBar"
}, b0 = /* @__PURE__ */ Object.assign(Nr, {
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
    return (t, o) => e.items !== null && e.items.length > 0 || e.showBackButton ? (r(), u("section", zr, [
      s("nav", Dr, [
        (r(!0), u(z, null, M(e.items, (l) => (r(), u("span", {
          onClick: (n) => t.$emit("button-click", l.label),
          class: S([[
            { "action-bar__nav_highlighted": l.highlighted },
            { "action-bar__nav_danger": l.danger }
          ], "action-bar__nav_link"])
        }, [
          (r(), D(de(l.icon), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" })),
          s("span", Mr, v(l.label), 1)
        ], 10, Br))), 256))
      ]),
      e.showBackButton ? (r(), u("nav", Ar, [
        s("span", {
          onClick: o[0] || (o[0] = (l) => t.$emit("button-click", "back")),
          class: "action-bar__nav_link"
        }, [
          jr,
          (r(), D(de(g(Cl)), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" }))
        ])
      ])) : m("", !0)
    ])) : m("", !0);
  }
}), Ir = { class: "po-shadow-sm po-rounded-xl po-bg-white po-relative" }, Fr = {
  key: 0,
  class: "po-absolute po-right-2 po-top-2 po-p-2 po-rounded-lg"
}, Rr = {
  key: 0,
  class: "po-text-base po-font-medium po-text-slate-600"
}, Hr = {
  key: 1,
  class: "lg:po-col-span-2 lg:po-flex lg:po-justify-end po-space-x-2"
}, qr = {
  name: "PoCard"
}, y0 = /* @__PURE__ */ Object.assign(qr, {
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
    return (t, o) => (r(), u("div", Ir, [
      e.isLoading ? (r(), u("div", Fr, [
        C(jt)
      ])) : m("", !0),
      s("div", {
        class: S([
          { "po-grid po-grid-cols-1 lg:po-grid-cols-3 po-gap-3": t.$slots.action }
        ])
      }, [
        e.title.length > 0 ? (r(), u("h3", Rr, v(e.title), 1)) : m("", !0),
        t.$slots.action ? (r(), u("div", Hr, [
          R(t.$slots, "action")
        ])) : m("", !0)
      ], 2),
      R(t.$slots, "content")
    ]));
  }
}), Ur = { class: "po-py-3 po-px-5 po-border-b po-border-slate-200" }, Wr = {
  class: "po-flex po-w-full md:po-ml-0",
  action: "#",
  method: "GET"
}, Gr = {
  for: "search-field",
  class: "po-sr-only"
}, Zr = { class: "po-relative po-w-full po-text-slate-400 focus-within:po-text-mpao-lightblue po-transition-colors po-duration-100 po-ease-in-out" }, Kr = { class: "po-pointer-events-none po-absolute po-inset-y-0 po-left-0 po-flex po-items-center" }, Yr = ["placeholder", "value"], Qr = ["disabled"], Xr = {
  name: "PoCardSearch"
}, x0 = /* @__PURE__ */ Object.assign(Xr, {
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
    return (o, l) => (r(), u("div", Ur, [
      s("form", Wr, [
        s("label", Gr, v(e.placeholder), 1),
        s("div", Zr, [
          s("div", Kr, [
            C(g(Ct), { class: "po-h-5 po-w-5 po-flex-shrink-0" })
          ]),
          s("input", {
            name: "search-field",
            id: "desktop-search-field",
            placeholder: e.placeholder,
            value: e.modelValue,
            onInput: l[0] || (l[0] = (n) => o.$emit("update:modelValue", n.target.value)),
            class: "po-h-full po-w-full po-border-transparent po-py-2 po-pl-8 po-pr-3 po-text-sm po-text-slate-700 po-placeholder-slate-500 focus:po-border-transparent focus:po-placeholder-slate-400 focus:po-outline-none focus:po-ring-0",
            type: "search"
          }, null, 40, Yr),
          e.showBtn ? (r(), u("button", {
            key: 0,
            class: S(["po-absolute po-right-0 po-text-sm po-rounded-full po-px-3 po-py-2 po-transition-colors po-duration-150 po-ease-out", [
              { "po-bg-mpao-lightblue po-text-white": e.modelValue !== "" },
              { "po-bg-slate-100 po-text-slate-400": e.modelValue === "" }
            ]]),
            disabled: e.modelValue === "",
            onClick: l[1] || (l[1] = ae((n) => o.$emit("button-click", e.modelValue), ["prevent"]))
          }, " Search ", 10, Qr)) : m("", !0)
        ])
      ])
    ]));
  }
}), Jr = { class: "po-flex po-items-center" }, ei = { class: "po-text-sm po-font-medium po-text-slate-500 po-pr-2" }, ti = {
  name: "PoPagination"
}, oi = /* @__PURE__ */ Object.assign(ti, {
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
    const a = E(() => o.totalPages ? `Page ${o.currentPage} of ${o.totalPages}` : o.pagination ? o.pagination.label : "");
    return (i, p) => (r(), u("div", Jr, [
      s("span", ei, v(g(a)), 1),
      s("button", {
        title: "Previous",
        onClick: l,
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        C(g(Dl), { class: "po-w-4 po-stroke-current po-stroke-2" })
      ]),
      s("button", {
        title: "Next",
        onClick: n,
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        C(g(Bl), { class: "po-w-4 po-stroke-current po-stroke-2" })
      ])
    ]));
  }
}), li = { key: 0 }, ni = {
  class: "po-text-xl md:po-text-2xl po-font-semibold po-text-slate-800",
  id: "po-page-title"
}, si = {
  key: 0,
  class: "po-text-base po-mt-2 po-max-w-md po-block po-text-slate-500"
}, ai = { key: 1 }, ri = { class: "po-grid po-grid-cols-1 lg:po-grid-cols-2 po-gap-5" }, ii = {
  class: "po-text-xl md:po-text-2xl po-font-semibold po-text-slate-800",
  id: "po-page-title"
}, ui = {
  key: 0,
  class: "po-text-base po-mt-4 po-max-w-md po-pb-5 po-block po-text-slate-500"
}, pi = { class: "po-flex po-items-end po-justify-end po-flex-col" }, ci = {
  key: 0,
  class: "po-flex md:po-justify-end po-mb-5"
}, di = { class: "po-bg-slate-50 po-shadow-sm po-rounded-xl po-py-5 po-px-2 po-divide-x po-divide-slate-200 po-flex" }, fi = ["onClick"], hi = { class: "po-text-xl po-font-medium po-text-slate-600 po-flex po-items-center po-space-x-1" }, mi = { class: "po-text-xl po-font-medium po-text-slate-600 group-hover:po-text-mpao-lightblue" }, vi = { class: "po-text-sm po-text-slate-500 po-block group-hover:po-text-mpao-lightblue" }, gi = { class: "po-flex po-items-center po-space-x-1 md:po-justify-end" }, bi = {
  key: 2,
  class: "po-border-l po-border-slate-400 po-h-3 po-w-3 po-ml-1"
}, yi = {
  key: 0,
  class: "po-bg-slate-50 po-p-5 po-mt-5 po-rounded-md po-grid po-grid-cols-1 md:po-grid-cols-3 po-gap-5"
}, xi = /* @__PURE__ */ s("span", { class: "po-text-xs po-text-slate-500 po-py-5" }, "No filters available at the moment.", -1), wi = {
  name: "PoPageTitle"
}, w0 = /* @__PURE__ */ Object.assign(wi, {
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
    const l = e.filterOn ? k(!0) : k(!1);
    function n(i) {
      t("pagination-click", i);
    }
    function a(i) {
      return i.iconColor ? i.iconColor : "po-slate-600";
    }
    return (i, p) => e.standAlone ? (r(), u("div", li, [
      s("h1", ni, v(e.label), 1),
      e.description !== "" ? (r(), u("span", si, v(e.description), 1)) : m("", !0)
    ])) : (r(), u("div", ai, [
      s("div", ri, [
        s("div", null, [
          s("h1", ii, v(e.label), 1),
          e.description !== "" ? (r(), u("span", ui, v(e.description), 1)) : m("", !0)
        ]),
        s("div", pi, [
          e.stats !== null ? (r(), u("div", ci, [
            s("div", di, [
              (r(!0), u(z, null, M(e.stats, (c) => (r(), u("div", {
                class: "po-px-5 po-cursor-pointer po-group genie-effect",
                onClick: (d) => i.$emit("stat-click", c)
              }, [
                s("span", hi, [
                  s("span", mi, v(c.value), 1),
                  c.icon ? (r(), u("span", {
                    key: 0,
                    class: S(["po-w-5 po-h-5", a(c)])
                  }, [
                    (r(), D(de(c.icon)))
                  ], 2)) : m("", !0)
                ]),
                s("span", vi, v(c.label), 1)
              ], 8, fi))), 256))
            ])
          ])) : m("", !0),
          s("div", gi, [
            e.showFilter ? (r(), u("button", {
              key: 0,
              title: "Filter",
              onClick: p[0] || (p[0] = (c) => {
                i.$emit("button-click", "filter"), l.value = !g(l);
              }),
              class: S([
                "po-p-2 po-rounded-md hover:po-bg-slate-200 po-transition-colors po-duration-75 po-ease-in-out",
                { "po-text-mpao-orange hover:po-text-mpao-orange": g(l) },
                { "tpo-ext-slate-600 hover:po-text-mpao-blue": !g(l) }
              ])
            }, [
              C(g(Al), { class: "po-w-4 po-stroke-current po-stroke-2" })
            ], 2)) : m("", !0),
            e.showDownload ? (r(), u("button", {
              key: 1,
              title: "Download",
              onClick: p[1] || (p[1] = (c) => i.$emit("button-click", "download")),
              class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
            }, [
              C(g(kl), { class: "po-w-4 po-stroke-current po-stroke-2" })
            ])) : m("", !0),
            e.showFilter && e.showPagination || e.showDownload && e.showPagination ? (r(), u("span", bi, " ")) : m("", !0),
            e.showPagination ? (r(), D(oi, {
              key: 3,
              pagination: e.pagination,
              onButtonClick: n
            }, null, 8, ["pagination"])) : m("", !0)
          ])
        ])
      ]),
      C(Ve, {
        "enter-active-class": "po-transition po-duration-100 po-ease-out",
        "enter-from-class": "po-transform po-scale-95 po-opacity-0",
        "enter-to-class": "po-transform po-scale-100 po-opacity-100",
        "leave-active-class": "po-transition po-duration-75 po-ease-out",
        "leave-from-class": "po-transform po-scale-100 po-opacity-100",
        "leave-to-class": "po-transform po-scale-95 po-opacity-0"
      }, {
        default: T(() => [
          g(l) ? (r(), u("div", yi, [
            R(i.$slots, "filters", {}, () => [
              xi
            ])
          ])) : m("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), Vi = {
  key: 0,
  class: "po-w-12"
}, $i = {
  key: 0,
  class: "po-w-12"
}, ki = ["onClick"], _i = ["colspan"], Ci = { key: 1 }, Si = ["colspan"], Pi = { class: "po-py-10 po-block po-normal-case" }, Oi = { class: "po-pr-5" }, Ei = { class: "po-py-1" }, Li = { key: 0 }, Ti = {
  name: "PoTable",
  components: { ArrowRightCircleIcon: Zo }
}, V0 = /* @__PURE__ */ Object.assign(Ti, {
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
  setup(e) {
    const t = e, { isLoading: o, tbody: l } = ve(t), n = k(!1), a = k(null);
    U(o, () => {
      i();
    }), U(l, () => {
      i(), p();
    }), H(() => {
      i(), p();
    });
    function i() {
      n.value = o.value, a.value = l.value, o.value && (a.value = [{}, {}, {}, {}, {}]);
    }
    function p() {
      if (t.hasDetailsRow)
        for (let d = 0; d < t.tbody.length; d++)
          t.tbody[d].showDetails = !1;
    }
    function c() {
      return Math.floor(Math.random() * 41) + 40;
    }
    return (d, f) => (r(), u("table", {
      class: S(["table-responsive po-w-full", [{ lg: e.breakAtLg }]])
    }, [
      s("thead", null, [
        s("tr", null, [
          e.hasDetailsRow ? (r(), u("th", Vi)) : m("", !0),
          (r(!0), u(z, null, M(e.thead, (h) => (r(), u("th", null, [
            R(d.$slots, "th", Le(Te(h)))
          ]))), 256))
        ])
      ]),
      s("tbody", null, [
        a.value !== null && !n.value || a.value !== null && a.value.length !== 0 && !n.value ? (r(!0), u(z, { key: 0 }, M(a.value, (h, w) => (r(), u(z, null, [
          s("tr", null, [
            e.hasDetailsRow ? (r(), u("td", $i, [
              s("span", {
                onClick: (V) => h.showDetails = !h.showDetails
              }, [
                C(g(Zo), {
                  class: S(["po-w-5 po-fill-mpao-lightblue po-origin-center po-transition-transform po-duration-100 po-ease-out po-cursor-pointer", [{ "po-rotate-90": h.showDetails }]])
                }, null, 8, ["class"])
              ], 8, ki)
            ])) : m("", !0),
            R(d.$slots, "td", Le(Te({ ...h, index: w, item: h })))
          ]),
          e.hasDetailsRow ? (r(), u("tr", {
            key: 0,
            class: S(["po-table-details-row", [{ "po-hidden": !h.showDetails }]])
          }, [
            s("td", {
              colspan: e.thead.length + 1
            }, [
              R(d.$slots, "details", Le(Te({ item: h })))
            ], 8, _i)
          ], 2)) : m("", !0)
        ], 64))), 256)) : m("", !0),
        a.value == null && !n.value || a.value !== null && a.value.length == 0 && !n.value ? (r(), u("tr", Ci, [
          s("td", {
            colspan: e.thead.length + 1,
            class: "po-text-center"
          }, [
            s("span", Pi, v(e.emptyMessage), 1)
          ], 8, Si)
        ])) : m("", !0),
        n.value ? (r(!0), u(z, { key: 2 }, M(a.value, (h) => (r(), u("tr", null, [
          (r(!0), u(z, null, M(e.thead, (w) => (r(), u("td", Oi, [
            s("div", Ei, [
              s("div", {
                class: "po-h-2 loading-placeholder po-rounded-full",
                style: Ze({ width: c() + "%" })
              }, null, 4)
            ])
          ]))), 256))
        ]))), 256)) : m("", !0)
      ]),
      d.$slots.tfoot ? (r(), u("tfoot", Li, [
        s("tr", null, [
          R(d.$slots, "tfoot")
        ])
      ])) : m("", !0)
    ], 2));
  }
}), zi = ["onUpdate:modelValue", "id"], Di = ["for"], Bi = { class: "table-responsive po-w-full" }, Mi = ["onClick"], Ai = { key: 0 }, ji = ["onClick"], Ni = {
  name: "PoDynamicTable",
  components: { ArrowsUpDownIcon: Yo, ArrowUpIcon: Ko, ArrowDownIcon: Go }
}, $0 = /* @__PURE__ */ Object.assign(Ni, {
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
    const t = e, o = k(t.columns), l = k(null), n = k(null), a = (c) => {
      c.hidden = !c.hidden, o.value = t.columns.filter((d) => !d.hidden);
    }, i = (c) => {
      c.sortable && (c.sorted && n.value === "asc" ? n.value = "desc" : n.value = "asc", o.value.forEach((d) => {
        d.key === c.key ? (d.sorted = !0, d.sortDirection = n.value) : (d.sorted = !1, d.sortDirection = null);
      }), l.value = c);
    }, p = k([]);
    return re(() => {
      l.value ? p.value = [...t.data].sort((c, d) => {
        let f = c[l.value.key], h = d[l.value.key];
        return typeof f == "string" && typeof h == "string" && (f = f.toLowerCase(), h = h.toLowerCase()), f < h ? n.value === "asc" ? -1 : 1 : f > h ? n.value === "asc" ? 1 : -1 : 0;
      }) : p.value = [...t.data];
    }), (c, d) => (r(), u("div", null, [
      (r(!0), u(z, null, M(o.value, (f) => (r(), u("div", null, [
        ze(s("input", {
          type: "checkbox",
          name: "dynamic",
          "onUpdate:modelValue": (h) => f.hidden = h,
          id: `hide-table-col-${f.label}`
        }, null, 8, zi), [
          [wl, f.hidden]
        ]),
        s("label", {
          for: `hide-table-col-${f.label}`
        }, v(f.label), 9, Di)
      ]))), 256)),
      s("table", Bi, [
        s("thead", null, [
          s("tr", null, [
            (r(!0), u(z, null, M(o.value, (f) => (r(), u("th", {
              key: f.key,
              onClick: (h) => i(f)
            }, [
              Z(v(f.label) + " " + v(f.sorted) + " " + v(f.sortDirection) + " ", 1),
              f.sortable ? (r(), u("span", Ai, [
                f.sorted ? m("", !0) : (r(), D(g(Yo), {
                  key: 0,
                  class: "po-w-4"
                })),
                f.sorted && f.sortDirection === "asc" ? (r(), D(g(Ko), {
                  key: 1,
                  class: "po-w-4"
                })) : m("", !0),
                f.sorted && f.sortDirection === "desc" ? (r(), D(g(Go), {
                  key: 2,
                  class: "po-w-4"
                })) : m("", !0)
              ])) : m("", !0),
              f.hidable ? (r(), u("button", {
                key: 1,
                onClick: (h) => a(f)
              }, v(f.hidden ? "Show" : "Hide"), 9, ji)) : m("", !0)
            ], 8, Mi))), 128))
          ])
        ]),
        s("tbody", null, [
          (r(!0), u(z, null, M(p.value, (f) => (r(), u("tr", {
            key: f.id
          }, [
            (r(!0), u(z, null, M(o.value, (h) => (r(), u("td", {
              key: h.key
            }, v(f[h.key]), 1))), 128))
          ]))), 128))
        ])
      ])
    ]));
  }
}), Ii = { class: "" }, Fi = { class: "po-grow" }, Ri = ["onClick"], Hi = {
  name: "PoDescriptionList"
}, qi = /* @__PURE__ */ Object.assign(Hi, {
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
    return (o, l) => (r(), u("div", null, [
      s("dl", {
        class: S([
          "po-description-list",
          { "po-divide-y po-divide-slate-200": !e.striped },
          { striped: e.striped },
          { "no-col": !e.columns }
        ])
      }, [
        R(o.$slots, "content", {}, () => [
          (r(!0), u(z, null, M(e.items, (n) => (r(), u("div", null, [
            s("dt", null, v(n.title), 1),
            s("dd", Ii, [
              s("span", Fi, v(n.description), 1),
              n.action !== void 0 ? (r(), u("span", {
                key: 0,
                class: "po-shrink-0 po-text-mpao-lightblue hover:po-text-mpao-blue po-transition-colors po-duration-100 po-ease-in-out po-px-2 po-cursor-pointer",
                onClick: (a) => o.$emit("button-click", n.action)
              }, v(n.action), 9, Ri)) : m("", !0)
            ])
          ]))), 256))
        ])
      ], 2)
    ]));
  }
}), Ui = ["for"], Wi = { class: "po-capitalize" }, Gi = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Zi = ["title"], Ki = ["type", "name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], Yi = ["id"], Qi = ["id"], Xi = {
  name: "PoInputField"
}, k0 = /* @__PURE__ */ Object.assign(Xi, {
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
    const { errorMessage: n } = ve(o), a = k(n.value !== null);
    U(n, (w, V) => {
      a.value = n.value !== null && n.value !== "";
    }), U(n, (w, V) => {
      a.value = n.value !== null && n.value !== "";
    });
    let i = o.type === "currency" ? "text" : o.type;
    const p = k(null), c = (w) => {
      let V = w.target.value;
      p.value = V;
      let b = o.type === "currency" ? f(V) : V;
      t("update:modelValue", b);
    };
    U(o, (w, V) => {
      o.type === "currency" && p.value !== V.modelValue ? p.value = Ut(o.modelValue) : p.value = o.modelValue;
    });
    const d = (w) => {
      let V = null;
      o.type === "currency" ? V = Ut(f("" + w)) : V = w, p.value = V;
    }, f = (w) => {
      let V = w.replace(/,/g, "");
      const b = V.indexOf(".");
      return b !== -1 && V.substring(b + 1) === "00" && (V = V.substring(0, b)), V;
    };
    o.type === "currency" ? d(o.modelValue) : p.value = o.modelValue;
    const h = k("");
    return H(() => {
      o.id === "" ? h.value = o.id ? o.id : `${o.label.replace(
        /\s/g,
        ""
      )}-${Date.now()}-inputfield-${Math.floor(Math.random() * 9e3)}` : h.value = o.id;
    }), (w, V) => (r(), u("div", {
      class: S(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      s("label", {
        for: h.value,
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700"
      }, [
        s("span", Wi, v(e.label), 1),
        e.required ? (r(), u("span", Gi, "*")) : m("", !0),
        e.info !== null ? (r(), u("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          C(g(It), { class: "po-fill-current" })
        ], 8, Zi)) : m("", !0)
      ], 8, Ui),
      s("input", be({
        type: g(i),
        name: `${h.value}-field`,
        id: h.value,
        value: p.value,
        placeholder: e.placeholder,
        disabled: e.disabled,
        required: e.required,
        "aria-describedby": `${h.value}-description`,
        "aria-required": e.required,
        "aria-disabled": e.disabled
      }, w.$attrs, {
        onInput: c,
        onBlur: V[0] || (V[0] = (b) => d(b.target.value)),
        class: [
          "po-mt-1 peer po-block po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white focus:po-ring-0 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default",
          l()
        ]
      }), null, 16, Ki),
      e.message !== null ? (r(), u("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, v(e.message), 9, Yi)) : m("", !0),
      a.value && g(n) !== null ? (r(), u("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
        id: `${e.id}-error`
      }, [
        s("span", null, v(g(n)), 1)
      ], 8, Qi)) : m("", !0)
    ], 2));
  }
}), Ji = { class: "po-text-sm po-font-medium po-text-slate-700 peer-focus:po-text-mpao-lightblue peer-invalid:po-text-red-500 peer-invalid:peer-focus:po-text-red-600 po-flex po-items-center po-space-x-1 po-capitalize" }, eu = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, tu = ["name", "id", "value"], ou = ["for"], lu = { class: "po-flex po-items-center po-space-x-1" }, nu = {
  key: 0,
  class: "po-text-sm"
}, su = {
  key: 1,
  class: "po-text-sm"
}, au = {
  key: 0,
  class: "po-mt-3 po-flex po-w-full po-h-1.5 po-bg-gray-100 po-rounded-full po-overflow-hidden"
}, ru = ["aria-valuenow"], iu = ["id"], uu = ["id"], pu = {
  name: "PoInputFile"
}, _0 = /* @__PURE__ */ Object.assign(pu, {
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
    const t = e, o = E(() => `width: ${t.progress}%`), l = E(() => t.progress), n = k(""), a = (i) => {
      const p = i.target.files[0];
      p ? n.value = p.name : n.value = "";
    };
    return (i, p) => (r(), u("div", {
      class: S(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      s("span", Ji, [
        s("span", null, v(e.label), 1),
        e.required ? (r(), u("span", eu, "*")) : m("", !0)
      ]),
      s("input", {
        name: `${e.id}-upload`,
        id: `${e.id}-fileupload`,
        value: e.modelValue,
        type: "file",
        onInput: p[0] || (p[0] = (c) => i.$emit("update:modelValue", c.target.value)),
        onChange: p[1] || (p[1] = (c) => a(c)),
        class: "po-sr-only po-peer"
      }, null, 40, tu),
      s("label", {
        for: `${e.id}-fileupload`,
        class: "po-mt-1 po-block po-w-full po-border po-cursor-pointer po-rounded-md po-border-slate-300 po-bg-white peer-focus:po-border-mpao-lightblue invalid:po-border-red-400 invalid:focus:po-border-red-600 invalid:focus:po-ring-red-600 sm:po-text-sm po-p-2"
      }, [
        s("div", lu, [
          C(g(uo), { class: "po-w-4 po-stroke-slate-500" }),
          n.value ? (r(), u("span", nu, v(n.value), 1)) : (r(), u("span", su, "Choose file"))
        ])
      ], 8, ou),
      g(l) !== null ? (r(), u("div", au, [
        s("div", {
          class: "po-flex po-flex-col po-justify-center po-overflow-hidden po-bg-mpao-lightblue",
          role: "progressbar",
          style: Ze(g(o)),
          "aria-valuenow": g(l),
          "aria-valuemin": "0",
          "aria-valuemax": "100"
        }, null, 12, ru)
      ])) : m("", !0),
      e.message !== null ? (r(), u("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, v(e.message), 9, iu)) : m("", !0),
      e.errorMessage !== null ? (r(), u("p", {
        key: 2,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, v(e.errorMessage), 9, uu)) : m("", !0)
    ], 2));
  }
}), cu = { class: "po-text-sm po-font-medium po-text-slate-700 po-cursor-pointer po-select-none po-flex po-items-center po-space-x-1" }, du = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, fu = {
  name: "PoToggle"
}, C0 = /* @__PURE__ */ Object.assign(fu, {
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
    const o = k(e.modelValue);
    return (l, n) => (r(), D(g(Yn), {
      as: "div",
      class: "po-flex po-items-center"
    }, {
      default: T(() => [
        C(g(Qn), {
          modelValue: o.value,
          "onUpdate:modelValue": n[0] || (n[0] = (a) => o.value = a),
          onClick: n[1] || (n[1] = (a) => l.$emit("update:modelValue", !o.value)),
          class: S([
            o.value ? "po-bg-mpao-lightblue" : "po-bg-slate-200",
            "po-relative po-inline-flex po-h-6 po-w-11 po-flex-shrink-0 po-cursor-pointer po-rounded-full po-border-2 po-border-transparent po-transition-colors po-duration-200 po-ease-in-out focus:po-outline-none focus:po-ring-2 focus:po-ring-mpao-lightblue focus:po-ring-offset-2"
          ])
        }, {
          default: T(() => [
            s("span", {
              "aria-hidden": "true",
              class: S([
                o.value ? "po-translate-x-5" : "po-translate-x-0",
                "po-pointer-events-none po-inline-block po-h-5 po-w-5 po-transform po-rounded-full po-bg-white po-shadow po-ring-0 po-transition po-duration-200 po-ease-in-out"
              ])
            }, null, 2)
          ]),
          _: 1
        }, 8, ["modelValue", "class"]),
        C(g(Xn), {
          as: "span",
          class: "po-ml-3"
        }, {
          default: T(() => [
            s("span", cu, [
              s("span", null, v(e.label), 1),
              e.required ? (r(), u("span", du, "*")) : m("", !0)
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), hu = { class: "po-pt-1 po-space-y-1 po-border-r-2 po-border-slate-200 po-relative" }, mu = ["onClick"], vu = {
  name: "PoSectionMenu"
}, S0 = /* @__PURE__ */ Object.assign(vu, {
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
    return (t, o) => (r(), u("ul", hu, [
      (r(!0), u(z, null, M(e.menuItems, (l) => (r(), u("li", null, [
        s("span", {
          onClick: (n) => t.$emit("link-click", l.link),
          role: "button",
          class: S([
            "po-relative po-cursor-pointer -po-right-[0.15rem] po-py-1 po-border-r-2 hover:po-border-mpao-lightblue po-transition-colors po-duration-200 po-ease-in-out po-flex po-items-center po-space-x-2",
            {
              "po-border-mpao-lightblue po-text-sm po-text-mpao-lightblue": l.link == e.currPageRoute
            },
            {
              "po-border-slate-200 po-text-sm po-text-slate-600": l.link !== e.currPageRoute
            }
          ])
        }, [
          (r(), D(de(l.icon), { class: "po-w-4 po-h-4 po-stroke-current" })),
          s("span", null, v(l.label), 1)
        ], 10, mu)
      ]))), 256))
    ]));
  }
}), gu = { class: "po-relative po-flex po-items-start" }, bu = { class: "po-flex po-h-5 po-items-center" }, yu = ["name", "id", "checked", "disabled", "aria-describedby"], xu = { class: "po-ml-3 po-text-sm" }, wu = ["for"], Vu = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, $u = ["id"], ku = { class: "po-sr-only" }, _u = ["id"], Cu = {
  name: "PoCheckbox"
}, P0 = /* @__PURE__ */ Object.assign(Cu, {
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
    return (t, o) => (r(), u("div", null, [
      s("div", gu, [
        s("div", bu, [
          s("input", be({
            name: `${e.id}-field`,
            id: e.id,
            checked: e.modelValue,
            disabled: e.disabled,
            "aria-describedby": `${e.id}-description`
          }, t.$attrs, {
            onInput: o[0] || (o[0] = (l) => t.$emit("update:modelValue", l.target.checked)),
            type: "checkbox",
            class: ["po-h-4 po-w-4 po-rounded po-border-slate-300 po-text-mpao-lightblue focus:po-ring-mpao-lightblue", [{ "po-bg-slate-200": e.disabled }]]
          }), null, 16, yu)
        ]),
        s("div", xu, [
          s("label", {
            for: e.id,
            class: "po-font-medium po-text-slate-600 po-cursor-pointer po-select-none po-flex po-items-center po-space-x-1"
          }, [
            s("span", null, v(e.label), 1),
            e.required ? (r(), u("span", Vu, "*")) : m("", !0)
          ], 8, wu),
          e.message ? (r(), u("span", {
            key: 0,
            id: `${e.id}-description`,
            class: "po-text-slate-500 po-cursor-default"
          }, [
            s("span", ku, v(e.label), 1),
            Z(" " + v(e.message), 1)
          ], 8, $u)) : m("", !0)
        ])
      ]),
      e.errorMessage !== null ? (r(), u("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, v(e.errorMessage), 9, _u)) : m("", !0)
    ]));
  }
}), Su = /* @__PURE__ */ s("div", { class: "po-pb-5 po-max-w-xl" }, [
  /* @__PURE__ */ s("span", { class: "po-text-sm po-text-slate-600" }, "We're always working to improve our app, and we're excited to share the latest changes with you. We hope you enjoy these new features and improvements")
], -1), Pu = { class: "po-flex po-space-x-2" }, Ou = ["onClick"], Eu = { class: "po-text-sm po-font-semibold po-slate-800" }, Lu = { class: "po-text-xs po-text-white po-px-1 po-py-0 po-rounded-md po-bg-mpao-lightblue" }, Tu = { class: "po-bg-gradient-to-t po-from-mpao-orange/20 po-via-mpao-lightblue/20 po-to-purple-500/10 -po-mb-5 -po-mx-5 po-p-5 po-pb-10" }, zu = { key: 0 }, Du = { class: "po-space-y-2 po-mt-5" }, Bu = { class: "po-border po-border-slate-200 po-rounded-lg po-p-3 po-bg-white" }, Mu = { class: "po-flex po-items-center po-space-x-2" }, Au = { class: "po-text-mpao-lightblue po-grow po-text-lg" }, ju = { class: "po-font-semibold po-shrink-0 po-text-mpao-lightblue po-text-sm po-px-2 po-py-1 po-rounded-xl po-bg-mpao-lightblue/10" }, Nu = ["innerHTML"], Iu = {
  key: 0,
  class: "po-bg-white po-rounded-md po-px-4 po-py-3 po-block po-text-sm po-text-center po-text-mpao-lightblue hover:po-text-purple-600 po-cursor-pointer"
}, Fu = {
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
    const t = k(!1), o = k(0);
    return (l, n) => (r(), u(z, null, [
      e.showBtn ? (r(), u("a", {
        key: 0,
        href: "#",
        onClick: n[0] || (n[0] = ae((a) => t.value = !0, ["prevent"])),
        class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
      }, "Change logs")) : m("", !0),
      C(Ie, {
        show: t.value,
        onModalClosed: n[1] || (n[1] = (a) => t.value = !1),
        "modal-title": "Change Log",
        "modal-width": "sm:po-max-w-4xl",
        id: "change-log-modal"
      }, {
        content: T(() => [
          s("div", null, [
            Su,
            s("div", Pu, [
              (r(!0), u(z, null, M(e.changelog, (a, i) => (r(), u("span", {
                class: S(["po-flex po-items-center po-space-x-1 po-px-4 po-py-3 po-rounded-t-xl po-cursor-pointer", [{ "po-bg-purple-500/10": o.value === i }]]),
                onClick: (p) => o.value = i
              }, [
                s("span", Eu, v(a.label) + " Version", 1),
                s("span", Lu, v(a.latest_version), 1)
              ], 10, Ou))), 256))
            ]),
            s("div", Tu, [
              (r(!0), u(z, null, M(e.changelog, (a, i) => (r(), u("div", null, [
                o.value === i ? (r(), u("div", zu, [
                  s("div", Du, [
                    (r(!0), u(z, null, M(a.version_history, (p) => (r(), u("div", Bu, [
                      s("span", Mu, [
                        s("span", Au, v(p.date), 1),
                        s("span", ju, v(p.version), 1)
                      ]),
                      s("div", {
                        class: "po-mt-3 po-prose-sm po-prose-slate",
                        innerHTML: p.note
                      }, null, 8, Nu)
                    ]))), 256)),
                    a.hasMore ? (r(), u("span", Iu, "More")) : m("", !0)
                  ])
                ])) : m("", !0)
              ]))), 256))
            ])
          ])
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}, rt = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [l, n] of t)
    o[l] = n;
  return o;
}, Ru = {}, Hu = {
  class: "po-h-8",
  src: "https://pension.gov.mv/asset/image/en-ccc-2020-issa.png",
  alt: "issa Certificate"
};
function qu(e, t) {
  return r(), u("img", Hu);
}
const Uu = /* @__PURE__ */ rt(Ru, [["render", qu]]), Wu = {}, Gu = {
  class: "po-h-8",
  src: "https://pension.gov.mv/asset/image/iso_logo.png",
  alt: "ISO 27001 Certificate"
};
function Zu(e, t) {
  return r(), u("img", Gu);
}
const Ku = /* @__PURE__ */ rt(Wu, [["render", Zu]]), Yu = { class: "-po-m-5" }, Qu = ["src", "alt"], ao = {
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
    const t = k(!1);
    return (o, l) => (r(), u(z, null, [
      (r(), D(de(e.logo), {
        onClick: l[0] || (l[0] = ae((n) => t.value = !0, ["prevent"])),
        class: "po-cursor-pointer",
        role: "button"
      })),
      C(Ie, {
        show: t.value,
        onModalClosed: l[1] || (l[1] = (n) => t.value = !1),
        "modal-title": e.title,
        "modal-width": "sm:po-max-w-4xl",
        id: "change-log-modal"
      }, {
        content: T(() => [
          s("div", Yu, [
            s("img", {
              src: e.src,
              alt: e.title
            }, null, 8, Qu)
          ])
        ]),
        _: 1
      }, 8, ["show", "modal-title"])
    ], 64));
  }
}, Xu = /* @__PURE__ */ s("div", { class: "po-prose-sm po-prose-slate po-p-5 po-opacity-8" }, [
  /* @__PURE__ */ s("h2", { class: "po-text-red-500" }, "Sample Terms and Conditions"),
  /* @__PURE__ */ s("h3", null, "1. Acceptance of Terms"),
  /* @__PURE__ */ s("p", null, " By accessing and using this web app, you agree to be bound by these terms and conditions. "),
  /* @__PURE__ */ s("h3", null, "2. User Responsibilities"),
  /* @__PURE__ */ s("p", null, " Users are responsible for maintaining the confidentiality of their account information and complying with all applicable laws. "),
  /* @__PURE__ */ s("h3", null, "3. Privacy Policy"),
  /* @__PURE__ */ s("p", null, [
    /* @__PURE__ */ Z(" Our privacy policy outlines how we collect, use, and protect your personal information. Please review our "),
    /* @__PURE__ */ s("a", { href: "privacy.html" }, "Privacy Policy"),
    /* @__PURE__ */ Z(" for more details. ")
  ]),
  /* @__PURE__ */ s("h3", null, "4. Intellectual Property"),
  /* @__PURE__ */ s("p", null, " All content and materials provided on this web app are protected by intellectual property laws. Unauthorized use is prohibited. "),
  /* @__PURE__ */ s("h3", null, "5. Limitation of Liability"),
  /* @__PURE__ */ s("p", null, " We are not liable for any damages or losses incurred from the use of this web app, including but not limited to, errors, omissions, or interruptions. "),
  /* @__PURE__ */ s("h3", null, "6. Modification of Terms"),
  /* @__PURE__ */ s("p", null, " We reserve the right to modify or update these terms and conditions at any time without prior notice. It is your responsibility to review them periodically. "),
  /* @__PURE__ */ s("h3", null, "7. Governing Law"),
  /* @__PURE__ */ s("p", null, " These terms and conditions shall be governed by and construed in accordance with the laws of your jurisdiction. "),
  /* @__PURE__ */ s("h3", null, "8. Contact Us"),
  /* @__PURE__ */ s("p", null, [
    /* @__PURE__ */ Z(" If you have any questions or concerns about these terms and conditions, please contact us at "),
    /* @__PURE__ */ s("a", { href: "mailto:info@pension.gov.mv" }, "info@pension.gov.mv"),
    /* @__PURE__ */ Z(". ")
  ])
], -1), Ju = {
  __name: "ToCModel",
  setup(e) {
    const t = k(!1);
    return (o, l) => (r(), u(z, null, [
      s("a", {
        href: "#",
        onClick: l[0] || (l[0] = ae((n) => t.value = !0, ["prevent"])),
        role: "button",
        class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
      }, "Terms & Conditions"),
      C(Ie, {
        show: t.value,
        onModalClosed: l[1] || (l[1] = (n) => t.value = !1),
        "modal-title": "Terms & Conditions",
        "modal-width": "sm:po-max-w-3xl",
        id: "change-log-modal"
      }, {
        content: T(() => [
          Xu
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}, ep = /* @__PURE__ */ s("div", { class: "po-prose-sm po-prose-slate po-p-5 po-opacity-80" }, [
  /* @__PURE__ */ s("h2", { class: "po-text-red-500" }, "Sample Privacy Policy"),
  /* @__PURE__ */ s("h3", null, "1. Information Collection"),
  /* @__PURE__ */ s("p", null, " We may collect personal information such as name, contact details, and pension-related data necessary for providing our services. "),
  /* @__PURE__ */ s("h3", null, "2. Use of Information"),
  /* @__PURE__ */ s("p", null, " The collected information is used for the purpose of administering pensions, processing applications, and communicating with users. "),
  /* @__PURE__ */ s("h3", null, "3. Data Security"),
  /* @__PURE__ */ s("p", null, " We implement appropriate security measures to protect personal information from unauthorized access, alteration, or disclosure. "),
  /* @__PURE__ */ s("h3", null, "4. Third-Party Disclosure"),
  /* @__PURE__ */ s("p", null, " We may share personal information with trusted third parties only to the extent necessary for pension administration purposes. "),
  /* @__PURE__ */ s("h3", null, "5. Cookies and Tracking"),
  /* @__PURE__ */ s("p", null, " We use cookies and similar technologies to enhance user experience and collect non-personal information about website usage. "),
  /* @__PURE__ */ s("h3", null, "6. Data Retention"),
  /* @__PURE__ */ s("p", null, " We retain personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law. "),
  /* @__PURE__ */ s("h3", null, "7. User Rights"),
  /* @__PURE__ */ s("p", null, " Users have the right to access, update, and delete their personal information. Please contact us to exercise these rights. "),
  /* @__PURE__ */ s("h3", null, "8. Children's Privacy"),
  /* @__PURE__ */ s("p", null, " This web app is not intended for children under the age of 13. We do not knowingly collect or store personal information from children. "),
  /* @__PURE__ */ s("h3", null, "9. Changes to Privacy Policy"),
  /* @__PURE__ */ s("p", null, " We reserve the right to modify or update this privacy policy at any time. Users will be notified of any significant changes. "),
  /* @__PURE__ */ s("h3", null, "8. Contact Us"),
  /* @__PURE__ */ s("p", null, [
    /* @__PURE__ */ Z(" If you have any questions or concerns about our privacy policy, please contact us at "),
    /* @__PURE__ */ s("a", { href: "mailto:info@pension.gov.mv" }, "info@pension.gov.mv"),
    /* @__PURE__ */ Z(". ")
  ])
], -1), tp = {
  __name: "PrivacyPolicyModel",
  setup(e) {
    const t = k(!1);
    return (o, l) => (r(), u(z, null, [
      s("a", {
        href: "#",
        onClick: l[0] || (l[0] = ae((n) => t.value = !0, ["prevent"])),
        role: "button",
        class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
      }, "Privacy Policy"),
      C(Ie, {
        show: t.value,
        onModalClosed: l[1] || (l[1] = (n) => t.value = !1),
        "modal-title": "Privacy Policy",
        "modal-width": "sm:po-max-w-3xl",
        id: "change-log-modal"
      }, {
        content: T(() => [
          ep
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}, op = { class: "po-grid po-gap-5 po-grid-cols-1 lg:po-grid-cols-2 po-px-6 lg:po-px-8 po-mt-10 po-pb-10" }, lp = { class: "sm:po-flex po-items-start sm:po-space-x-5" }, np = /* @__PURE__ */ s("svg", {
  class: "po-h-10",
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  "fill-rule": "evenodd",
  "stroke-linejoin": "round",
  "stroke-miterlimit": "2",
  "clip-rule": "evenodd",
  viewBox: "0 0 343 287"
}, [
  /* @__PURE__ */ s("path", {
    fill: "#203057",
    d: "M61.305 92.088a16.74 16.74 0 0 1-2.583.542 12.086 12.086 0 0 0-4.604 1.425L108.41 0h21.308c-22.054 9.263-22.871 36.388-23.021 46.463-.237.008-.467.017-.708.042-5.509.462-13.509 3.245-20.296 13.904-2.267 3.512-4.392 7.341-6.263 10.721l-.125.204c-6.429 11.579-10.725 18.766-18 20.754ZM261.87 71.267c0-.013-.079-.142-.092-.159-1.987-3.575-4.045-7.279-6.225-10.683-6.82-10.675-14.795-13.458-20.295-13.908a6.116 6.116 0 0 0-.755-.063c-.358-12.162-2.37-21.821-6.12-29.492C224.449 8.912 218.67 3.233 211.17 0h21.104l54.109 93.708a12.134 12.134 0 0 0-3.884-1.05c-.875-.104-1.7-.3-2.408-.487-.063-.029-.167-.067-.167-.067-7.271-1.979-11.575-9.175-18.054-20.837ZM112.871 197.965c3.809 7.767 9.363 13.342 16.538 16.588h-21L54.384 120.99c1.371.692 2.837 1.146 4.337 1.292 1.034.112 1.979.362 2.592.529 7.267 1.971 11.575 9.179 18 20.754 2.412 4.329 4.275 7.65 6.379 10.938 6.8 10.65 14.783 13.445 20.288 13.9.266.02.512.029.754.029.358 12.166 2.362 21.829 6.137 29.533Zm149.045-54.381c6.442-11.571 10.738-18.767 18.009-20.759.745-.2 1.641-.425 2.575-.529 1.25-.121 2.45-.446 3.608-.933l-53.829 93.204h-20.063c21.375-9.537 22.175-36.212 22.313-46.104.229-.013.462-.021.716-.042 5.513-.462 13.505-3.246 20.309-13.908 2.304-3.625 4.558-7.667 6.362-10.929Zm-82.546 28.807v.208c.037 12.463 5.654 19.896 15.033 19.896 13.329 0 17.767-4.317 17.767-29.808V94.903l17.433-13.47v81.254c0 .241-.108 3.041-.217 5.746l-.158 3.7c-.071 1.975-.142 3.687-.167 4.458a1.689 1.689 0 0 0-.079.383c0 .104.021.196.033.3-2.454 24.05-13.783 35.746-34.612 35.746-8.758 0-16.329-3.292-21.925-9.542a2.922 2.922 0 0 0-2.15-.945c-.825 0-1.613.358-2.15.975-5.567 6.308-12.746 9.512-21.35 9.512-22.246 0-34.05-14.842-35.104-44.121 7.871-1.337 13.466-6.258 15.471-8.325l1.87-1.433v3.546c0 25.341 5.725 29.808 17.763 29.808 13.312 0 14.921-17.183 15.117-20.629.3-5.413 4.116-9.663 8.691-9.663h.325c4.709.2 8.409 4.68 8.409 10.188Zm-68.52-37.313V42.615c0-.104.088-.579.284-1.396 1.737-27.029 13.429-40.171 35.696-40.171 8.962 0 16.75 3.405 22.512 9.821.754.871 2.3.892 3.121-.012 5.712-6.509 13.1-9.809 21.937-9.809 22.938 0 35.021 15.355 35.93 45.638-7.934 1.075-13.717 6.146-15.817 8.275l-3.125 2.408v-5.171c0-24.833-5.25-29.012-16.988-29.012-12.616 0-14.129 16.55-14.325 19.875-.304 5.937-4.437 10.417-9.608 10.417h-.221c-5.137-.23-9.162-5.055-9.162-11.009v-.183c-.034-11.971-5.371-19.1-14.254-19.1-12.946 0-16.963 4.004-16.963 29.012v68.192l-19.017 14.688Z"
  }),
  /* @__PURE__ */ s("path", {
    fill: "#ec6e25",
    d: "m165.883 91.539-15.875 12.271-15.171-11.733V67.535l31.046 24.004Zm9.441 31.844 15.884-12.288 15.195 11.763-.004 24.529-31.075-24.004Zm-64.934 39.882c-.042.014-.031.008-.014.001l-.286.016c-1.067.113-2 .171-2.784.175h-.075c-.241-.017-.462-.004-.858-.004a24.05 24.05 0 0 1-.829-.104c-.038-.013-.075-.013-.117-.013 0 0-.012 0-.054-.016 0 0-.046-.009-.088-.009-4.07-.633-10.07-3.125-15.408-11.5-1.967-3.083-3.737-6.225-6.212-10.666-5.534-9.946-9.913-17.255-16.088-21.005-.092-.045-2.221-1.379-5.375-2.245a23.775 23.775 0 0 0-1.771-.392l-1.858-.292c-.121 0-.233-.016-.554-.15-.684-.196-1.275-.433-1.713-.679a1.038 1.038 0 0 0-.25-.146l-.133-.091c-.117-.075-.233-.138-.346-.234-.208-.141-.404-.296-.604-.45-.008-.029-.042-.062-.042-.062-.571-.488-1.133-1.084-1.508-1.609-.05-.087-.1-.191-.15-.25-.129-.187-.233-.362-.367-.562l-.346-.675c-.054-.104-.116-.217-.225-.458l-.162-.392a4.5 4.5 0 0 1-.121-.308 9.748 9.748 0 0 0-.042-.092.188.188 0 0 0-.033-.1 10.976 10.976 0 0 1-.237-.817 10.23 10.23 0 0 1-.196-.85c-.038-.3-.088-.587-.125-.983a17.836 17.836 0 0 1-.054-.771c.008-.292.037-.587.066-.975.025-.308.075-.604.125-.954.063-.279.117-.546.217-.917.058-.25.129-.475.204-.7.025-.046.042-.121.042-.121.008-.025.016-.058.033-.075.067-.191.133-.366.254-.654l.463-.966.162-.25c.109-.188.225-.367.367-.596.829-1.188 1.829-2.129 3.083-2.834.188-.1.363-.2.579-.295.375-.184.863-.334 1.596-.484l.317-.071c.121-.025.233-.054.337-.054.117-.016.238-.025.438-.071.275-.029.533-.075.783-.129.404-.058 1.117-.2 1.609-.346a.998.998 0 0 0 .291-.062c1.975-.575 5.017-1.796 8.134-4.283 4.77-4.059 8.512-10.446 13.283-19.025 1.946-3.53 3.958-7.171 6.129-10.563 5.446-8.529 11.558-11.029 15.992-11.575l-.009 21.342c-.67.612-1.37 1.483-2.05 2.541-1.933 3.021-3.795 6.392-5.45 9.363l-.15.267c-3.458 6.22-7.383 13.27-12.491 19.187l-2.142 2a1.423 1.423 0 0 0-.129 1.983c.092.088.208.175.208.175l1.946 2.238c.067.062.15.125.242.204.221.246.421.517.641.771l.309.35c.012.042.121.183.137.217 4.659 5.762 8.363 12.42 11.325 17.75l.571 1.033c1.583 2.846 3.229 5.787 4.983 8.529a14.943 14.943 0 0 0 1.667 2.171c.504.429 1.35.967 2.563.967 1.166 0 2.375-.534 3.483-1.488.062-.037.225-.158.258-.187l1.592-1.538 24.154-18.529 8.271-6.479c.083-.063.154-.134.237-.229l71.888-55.605c1.787-1.808 6.662-6.125 13.142-6.958.25 0 .991-.029 1.766-.075l.671-.017c.583-.033 1.1-.054 1.317-.054 4.387.371 10.812 2.684 16.541 11.634 2.184 3.45 4.317 7.27 6.205 10.662 5.458 9.846 9.791 17.096 15.758 20.796.079.087.179.154.258.221 1.663 1.021 3.404 1.787 5.159 2.246.133.041.258.041.295.02.35.084.73.175 1.121.271.054.009.129.042.179.042.013 0 .15.021.159.021.475.087.958.162 1.491.225 4.367.454 7.767 4.712 7.884 9.871-.15 5.179-3.55 9.42-7.896 9.883-.854.096-3.233.417-4.15.654-9.354 3.158-13.879 11.442-18.667 20.229-.529.954-1.046 1.917-1.591 2.896-1.884 3.383-4 7.208-6.2 10.663-5.45 8.512-11.546 11.041-15.988 11.587v-21.337c.658-.584 1.358-1.459 2.054-2.542 1.967-3.092 3.804-6.417 5.425-9.35l.125-.196c3.029-5.454 9.467-15.325 14.596-21.762a1.419 1.419 0 0 0-.05-1.855c-.521-.558-1.146-1.283-1.829-2.07a1.192 1.192 0 0 0-.488-.346 60.342 60.342 0 0 1-3.341-4.304c-.113-.146-.204-.275-.275-.371 0 0-.067-.138-.088-.167-3.329-4.721-6.208-9.908-8.546-14.104l-.15-.279c-1.266-2.284-2.625-4.584-3.895-6.738l-1.463-2.487c-1.104-1.854-2.487-2.813-4.129-2.813-.596 0-1.138.142-1.604.296l-.392.154-20.537 15.563-43.45 33.587-39.988 31.125a1.463 1.463 0 0 0-.683.304l-3.113 2.417s-.146.125-.262.229c-1.692 1.717-6.554 5.909-12.904 6.929Z"
  }),
  /* @__PURE__ */ s("path", {
    fill: "#203057",
    d: "M9.142 250.096c8.762 0 12.862 3.154 12.862 10.838v3.341c0 7.492-4.242 10.98-12.862 10.98H6.646v11.116H0v-36.275h9.142Zm0 18.892c4.708 0 6.262-1.604 6.262-5.042v-2.683c0-3.442-1.129-5.233-6.171-5.233H6.596v12.958h2.546Zm39.011-18.892v5.654h-14.37v9.325h12.25v5.842h-12.25v9.567h15.033v5.937H27.283v-36.325h20.87Zm28.511 36.277h-6.313l-10.65-22.992.567 13.758v9.234h-6.454v-36.23h6.454l10.646 23.888-.704-15.313v-8.575h6.454v36.23Zm17.293-30.764c-3.579 0-5.042 1.129-5.042 4.571 0 4.566 3.63 4.191 9.142 5.041 4.192.654 8.196 2.354 8.196 9.609 0 8.383-3.629 11.92-12.342 11.92-9.046 0-11.921-4.383-11.921-10.225h6.546c.146 2.78 1.371 4.288 5.513 4.288 3.912 0 5.704-1.65 5.704-5.746 0-4.287-5.088-4.287-8.954-4.808-4.096-.517-8.429-2.542-8.429-10.034 0-6.783 4.141-10.316 11.587-10.316 6.55 0 10.883 2.4 11.496 9.654h-6.55c-.188-3.063-1.792-3.954-4.946-3.954Zm17.716-5.465h6.55v36.275h-6.55v-36.275Zm12.631 25.722v-15.358c0-7.68 3.346-10.838 12.108-10.838 8.763 0 12.392 3.158 12.392 10.838v15.358c0 7.492-3.771 10.837-12.392 10.837-8.621 0-12.108-3.345-12.108-10.837Zm18-.329v-14.7c0-3.296-.85-5.417-5.892-5.417-4.712 0-5.608 2.121-5.608 5.417v14.7c0 3.441.896 5.416 5.608 5.416 4.713 0 5.892-1.975 5.892-5.416Zm35.526 10.836h-6.313l-10.65-22.992.567 13.758v9.234h-6.454v-36.23h6.454l10.646 23.888-.704-15.313v-8.575h6.454v36.23Zm17.861-10.507v-15.358c0-7.68 3.346-10.838 12.108-10.838 8.763 0 12.392 3.158 12.392 10.838v15.358c0 7.492-3.771 10.837-12.392 10.837-8.621 0-12.108-3.345-12.108-10.837Zm18-.329v-14.7c0-3.296-.85-5.417-5.892-5.417-4.712 0-5.608 2.121-5.608 5.417v14.7c0 3.441.896 5.416 5.608 5.416 4.713 0 5.892-1.975 5.892-5.416Zm33.925-19.506H232.82v9.046h12.533v5.891H232.82v15.45h-6.454v-36.32h21.25v5.933Zm26.007 0h-14.791v9.046h12.533v5.891h-12.533v15.45h-6.455v-36.32h21.246v5.933Zm4.809-5.887h6.55v36.275h-6.55v-36.275Zm37.133 25.015c0 7.962-3.771 11.308-12.392 11.308-8.62 0-12.108-3.346-12.108-10.837v-14.746c0-7.679 3.346-10.838 12.108-10.838 8.763 0 12.392 3.204 12.392 11.263h-6.5c0-3.534-.85-5.513-5.892-5.513-4.712 0-5.608 1.979-5.608 5.417V275.3c0 3.442.896 5.421 5.608 5.421 4.713 0 5.892-1.979 5.892-5.562h6.5Zm26.243-25.063v5.654h-14.37v9.325h12.25v5.842h-12.25v9.567h15.033v5.937h-21.533v-36.325h20.87Z"
  })
], -1), sp = { class: "po-mt-5 sm:po-mt-0" }, ap = /* @__PURE__ */ s("p", { class: "-po-mt-1 po-text-xs po-text-slate-500" }, " 8th Floor, Allied Building , Chaandhanee Magu, Malé, 20156, Maldives ", -1), rp = { class: "po-mt-1 po-text-xs po-text-slate-500" }, ip = { class: "po-mt-1 po-text-xs po-text-slate-500 po-flex -po-mb-2 po-flex-wrap" }, up = {
  href: "https://www.pension.gov.mv",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, pp = /* @__PURE__ */ s("span", null, "www.pension.gov.mv", -1), cp = {
  href: "mailto:info@pension.gov.mv",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, dp = /* @__PURE__ */ s("span", null, "info@pension.gov.mv", -1), fp = {
  href: "tel:1441",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, hp = /* @__PURE__ */ s("span", null, "1441", -1), mp = { class: "po-flex lg:po-items-end po-flex-col" }, vp = { class: "-po-mt-1 po-text-xs po-text-slate-500 po-flex -po-mb-2 po-flex-wrap" }, gp = { class: "po-flex po-space-x-2 po-mt-3 lg:po-justify-end" }, bp = {
  name: "PoFooter"
}, O0 = /* @__PURE__ */ Object.assign(bp, {
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
    return (o, l) => (r(), u("div", null, [
      s("section", op, [
        s("div", lp, [
          np,
          s("div", sp, [
            ap,
            s("p", rp, " © " + v(new Date().getFullYear()) + " Pension Office, All Rights Reserved. ", 1),
            s("p", ip, [
              s("a", up, [
                C(g(lr), { class: "po-w-3 po-h-3 po-fill-current" }),
                pp
              ]),
              s("a", cp, [
                C(g(tr), { class: "po-w-3 po-h-3 po-fill-current" }),
                dp
              ]),
              s("a", fp, [
                C(g(nr), { class: "po-w-3 po-h-3 po-fill-current" }),
                hp
              ])
            ])
          ])
        ]),
        s("div", mp, [
          s("nav", vp, [
            C(Fu, {
              "show-btn": e.changelog !== null,
              changelog: e.changelog
            }, null, 8, ["show-btn", "changelog"]),
            C(Ju),
            C(tp)
          ]),
          s("div", gp, [
            C(ao, {
              logo: Ku,
              title: "ISO/IEC 27001:2013 Certificate",
              src: ""
            }),
            C(ao, {
              logo: Uu,
              title: "issa Certificate",
              src: ""
            })
          ])
        ])
      ])
    ]));
  }
}), yp = { class: "po-text-sm po-text-red-700" }, xp = {
  key: 0,
  class: "po-text-sm po-text-red-800 po-list-disc po-ml-5 po-mt-2"
}, wp = {
  key: 1,
  class: "po-flex po-items-start po-space-x-3 po-p-5 po-bg-green-50 po-rounded-md po-mt-5"
}, Vp = { class: "po-text-sm po-text-green-700" }, $p = {
  name: "PoFormStatusMessage"
}, E0 = /* @__PURE__ */ Object.assign($p, {
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
    return (t, o) => e.isError ? (r(), u("div", {
      key: 0,
      class: S(["po-flex po-space-x-3 po-p-3 po-bg-red-50 po-rounded-md", [
        { "po-items-start": e.errorList !== null },
        { "po-items-center": e.errorList === null }
      ]])
    }, [
      C(g(ht), { class: "po-shrink-0 po-w-6 po-stroke-red-600" }),
      s("div", null, [
        s("span", yp, v(e.message), 1),
        e.errorList !== null ? (r(), u("ul", xp, [
          (r(!0), u(z, null, M(e.errorList, (l) => (r(), u("li", null, v(l), 1))), 256))
        ])) : m("", !0)
      ])
    ], 2)) : (r(), u("div", wp, [
      C(g(Tl), { class: "po-w-6 po-stroke-green-600" }),
      s("div", null, [
        s("span", Vp, v(e.message), 1)
      ])
    ]));
  }
}), kp = {
  key: 0,
  class: "po-text-lg po-text-red-400 po-font-semibold"
}, _p = {
  key: 0,
  class: "po-mt-1 po-flex -po-mb-3 po-flex-wrap"
}, Cp = { class: "po-flex po-flex-1" }, Sp = { class: "po-flex po-flex-col" }, Pp = ["id"], Op = ["id"], Ep = {
  name: "PoRadioInput"
}, L0 = /* @__PURE__ */ Object.assign(Ep, {
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
    const o = e, l = k();
    l.value = o.modelValue, _t(() => {
      l.value = o.modelValue;
    }), U(l, () => {
      t("update:modelValue", l.value), t("selected", l.value);
    });
    const { errorMessage: n } = ve(o), a = k();
    return U(n, (i, p) => {
      a.value = n.value !== null && n.value !== "";
    }), (i, p) => (r(), D(g(Wn), {
      modelValue: l.value,
      "onUpdate:modelValue": p[0] || (p[0] = (c) => l.value = c),
      class: S([{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }])
    }, {
      default: T(() => [
        C(g(Jt), { class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700" }, {
          default: T(() => [
            s("span", null, v(e.label), 1),
            e.required ? (r(), u("span", kp, "*")) : m("", !0)
          ]),
          _: 1
        }),
        e.options !== null ? (r(), u("div", _p, [
          (r(!0), u(z, null, M(e.options, (c) => (r(), D(g(Zn), {
            as: "template",
            key: c.id,
            value: c.id
          }, {
            default: T(({ checked: d, active: f }) => [
              s("div", {
                class: S([
                  "po-transition-colors po-duration-100 po-ease-out po-mr-3",
                  "",
                  "",
                  "po-mb-3 po-pt-[0.13rem] po-relative po-flex po-cursor-pointer focus:po-outline-none"
                ])
              }, [
                s("span", {
                  class: S(["po-w-5 po-h-5 po-rounded-full po-border po-mr-2 po-flex po-items-center po-justify-center", [
                    "",
                    d ? "po-border-mpao-lightblue" : "po-border-slate-400"
                  ]])
                }, [
                  s("span", {
                    class: S(["po-w-3 po-h-3 po-rounded-full", [
                      "",
                      d ? "po-bg-mpao-lightblue" : "po-bg-transparent"
                    ]])
                  }, null, 2)
                ], 2),
                s("span", Cp, [
                  s("span", Sp, [
                    C(g(Jt), {
                      as: "span",
                      class: "po-block po-text-sm po-font-medium po-text-gray-900"
                    }, {
                      default: T(() => [
                        Z(v(c.title), 1)
                      ]),
                      _: 2
                    }, 1024),
                    c.description ? (r(), D(g(Kn), {
                      key: 0,
                      as: "span",
                      class: "po-mt-1 po-flex po-items-center po-text-sm po-text-gray-500"
                    }, {
                      default: T(() => [
                        Z(v(c.description), 1)
                      ]),
                      _: 2
                    }, 1024)) : m("", !0)
                  ])
                ])
              ], 2)
            ]),
            _: 2
          }, 1032, ["value"]))), 128))
        ])) : m("", !0),
        s("div", null, [
          e.message !== null ? (r(), u("p", {
            key: 0,
            class: "po-mt-2 po-text-sm po-text-slate-500",
            id: `${i.id}-description`
          }, v(e.message), 9, Pp)) : m("", !0),
          a.value && g(n) !== null ? (r(), u("p", {
            key: 1,
            class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
            id: `${i.id}-error`
          }, [
            C(g(Qo), { class: "po-fill-current po-w-4 po-mt-[0.2rem] po-shrink-0" }),
            s("span", null, v(g(n)), 1)
          ], 8, Op)) : m("", !0)
        ])
      ]),
      _: 1
    }, 8, ["modelValue", "class"]));
  }
}), Lp = { class: "po-bg-white po-relative po-group po-rounded-xl focus-within:po-ring-2 focus-within:po-ring-inset focus-within:po-ring-indigo-500" }, Tp = { class: "po-block po-p-4 po-transition-colors po-duration-75 po-ease-linear" }, zp = { class: "po-flex po-items-start po-space-x-2" }, Dp = { class: "po-flex po-items-start po-space-x-1" }, Bp = { class: "po-block po-text-2xl po-font-light po-text-slate-600" }, Mp = {
  key: 0,
  class: "po-text-sm po-text-green-500 po-font-medium po-pt-1"
}, Ap = { class: "po-text-sm po-tracking-wide po-text-slate-500" }, jp = {
  name: "PoStatsBlock"
}, T0 = /* @__PURE__ */ Object.assign(jp, {
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
    return (t, o) => (r(), u("div", {
      class: S(["po-grid po-gap-5", e.numberOfCols])
    }, [
      (r(!0), u(z, null, M(e.items, (l) => (r(), u("div", Lp, [
        s("span", Tp, [
          s("div", zp, [
            s("div", null, [
              s("span", {
                class: S([
                  "po-inline-flex po-p-2 po-rounded-md",
                  l.bgColor,
                  l.iconColor
                ])
              }, [
                (r(), D(de(l.icon), { class: "po-w-4 po-h-4" }))
              ], 2)
            ]),
            s("div", null, [
              s("div", Dp, [
                s("span", Bp, v(l.value), 1),
                l.diff ? (r(), u("span", Mp, v(l.diff), 1)) : m("", !0)
              ]),
              s("h4", Ap, v(l.label), 1)
            ])
          ])
        ])
      ]))), 256))
    ], 2));
  }
}), Np = {
  key: 0,
  class: "po-flex po-space-x-3 po-items-start"
}, Ip = { class: "po-flex po-items-center po-space-x-2" }, Fp = ["datetime"], Rp = { class: "po-text-sm po-font-medium po-text-slate-600" }, Hp = ["datetime"], qp = { class: "flex" }, Up = { class: "po-flex po-pt-3 po-flex-wrap po-max-w-sm" }, Wp = ["onClick"], Gp = {
  key: 1,
  class: "po-w-full po-text-center"
}, Zp = { class: "po-inline-block po-text-sm po-italic po-text-slate-500" }, Kp = /* @__PURE__ */ s("span", { class: "po-text-lg po-text-slate-300 po-px-3 po-inline-block" }, "—", -1), Yp = ["datetime"], Qp = {
  name: "PoChatLogItem"
}, z0 = /* @__PURE__ */ Object.assign(Qp, {
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
    return (t, o) => (r(), u("li", {
      class: S([
        "po-flex po-px-5",
        { "po-justify-end po-items-end po-flex-col": e.item.type === "first" }
      ])
    }, [
      e.item.type !== "message" ? (r(), u("div", Np, [
        e.item.type !== "first" && e.item.avatar !== "" ? (r(), u("div", {
          key: 0,
          class: "po-shrink-0 po-w-8 po-h-8 po-rounded-full po-p-1 po-bg-contain po-bg-slate-100",
          style: Ze({ "background-image": `url(${e.item.avatar})` })
        }, null, 4)) : m("", !0),
        s("div", {
          class: S([
            { "po-pt-1": e.item.type !== "first" },
            {
              "po-flex po-justify-end po-items-end po-flex-col": e.item.type === "first"
            }
          ])
        }, [
          s("span", Ip, [
            e.item.type === "first" ? (r(), u("time", {
              key: 0,
              datetime: e.item.time,
              class: "po-text-xs po-text-slate-400"
            }, v(e.item.time_human), 9, Fp)) : m("", !0),
            s("span", Rp, v(e.item.name), 1),
            e.item.type === "second" ? (r(), u("time", {
              key: 1,
              datetime: e.item.time,
              class: "po-text-xs po-text-slate-400"
            }, v(e.item.time_human), 9, Hp)) : m("", !0)
          ]),
          s("div", {
            class: S([
              "po-mt-2 po-space-y-1",
              {
                "po-flex po-justify-end po-items-end po-flex-col": e.item.type === "first"
              }
            ])
          }, [
            R(t.$slots, "message", {}, () => [
              (r(!0), u(z, null, M(e.item.message, (l) => (r(), u("div", qp, [
                s("p", {
                  class: S([
                    "po-text-sm po-rounded-xl po-px-4 po-py-2",
                    {
                      "po-bg-slate-100 po-text-slate-600": e.item.type !== "first"
                    },
                    {
                      "po-bg-mpao-lightblue po-text-sky-50": e.item.type === "first"
                    }
                  ])
                }, v(l), 3)
              ]))), 256))
            ]),
            s("div", Up, [
              (r(!0), u(z, null, M(e.item.actions, (l) => (r(), u("button", {
                onClick: (n) => t.$emit("button-click", l.label),
                class: "po-appearance-none po-border po-border-mpao-lightblue po-bg-white hover:po-bg-mpao-lightblue po-px-3 po-py-1 po-mb-2 po-mr-2 po-rounded-lg po-text-slate-500 hover:po-text-sky-100 po-transition-colors po-duration-150 po-ease-in-out po-text-sm po-ring-0 po-outline-none"
              }, v(l.label), 9, Wp))), 256))
            ])
          ], 2)
        ], 2)
      ])) : m("", !0),
      e.item.type === "message" ? (r(), u("div", Gp, [
        (r(!0), u(z, null, M(e.item.message, (l) => (r(), u("p", Zp, [
          Z(v(l) + " ", 1),
          Kp,
          s("time", {
            datetime: e.item.time,
            class: "po-text-xs po-text-slate-400 po-inline-block"
          }, v(e.item.time_human), 9, Yp)
        ]))), 256))
      ])) : m("", !0)
    ], 2));
  }
}), Xp = {
  key: 0,
  class: "po-pointer-events-auto po-w-full po-max-w-sm po-overflow-hidden po-rounded-lg po-bg-mpao-lightblue po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5"
}, Jp = { class: "po-p-4" }, ec = { class: "po-flex po-items-start" }, tc = { class: "po-flex-shrink-0" }, oc = { class: "po-ml-3 po-w-0 po-flex-1 po-pt-0.5" }, lc = { class: "po-text-sm po-font-medium po-text-sky-100" }, nc = { class: "po-mt-1 po-text-sm po-text-sky-300" }, sc = { class: "po-mt-3 po-flex po-space-x-4" }, ac = { class: "po-ml-4 po-flex po-flex-shrink-0" }, rc = /* @__PURE__ */ s("span", { class: "po-sr-only" }, "Close", -1), ic = {
  name: "PoNotification"
}, D0 = /* @__PURE__ */ Object.assign(ic, {
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
    const o = e, { show: l } = ve(o), n = k(!1);
    U(l, () => {
      n.value = !1, setTimeout(() => {
        n.value = !0;
      }, 100);
    });
    const a = k(!1);
    return U(n, () => {
      a.value = !1, setTimeout(() => {
        a.value = !0;
      }, 200);
    }), (i, p) => n.value ? (r(), D(Ge, {
      key: 0,
      to: "#po-notifications-alert"
    }, [
      C(Ve, {
        "enter-active-class": "po-transform po-ease-out po-duration-300 po-transition",
        "enter-from-class": "po-translate-y-2 po-opacity-0 sm:po-translate-y-0 sm:po-translate-x-2",
        "enter-to-class": "po-translate-y-0 po-opacity-100 sm:po-translate-x-0",
        "leave-active-class": "po-transition po-ease-in po-duration-100",
        "leave-from-class": "po-opacity-100",
        "leave-to-class": "po-opacity-0"
      }, {
        default: T(() => [
          a.value ? (r(), u("div", Xp, [
            s("div", Jp, [
              s("div", ec, [
                s("div", tc, [
                  R(i.$slots, "icon")
                ]),
                s("div", oc, [
                  s("p", lc, v(e.label), 1),
                  s("p", nc, v(e.text), 1),
                  s("div", sc, [
                    s("button", {
                      onClick: p[0] || (p[0] = (c) => i.$emit("button-click", e.buttonLabel)),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-100 hover:po-text-sky-200 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, v(e.buttonLabel), 1),
                    s("button", {
                      onClick: p[1] || (p[1] = (c) => n.value = !1),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-300 hover:po-text-sky-500 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, " Dismiss ")
                  ])
                ]),
                s("div", ac, [
                  s("button", {
                    type: "button",
                    onClick: p[2] || (p[2] = (c) => n.value = !1),
                    class: "po-inline-flex po-rounded-md po-bg-mpao-lightblue po-text-sky-500 hover:po-text-sky-300 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                  }, [
                    rc,
                    C(g(Ft), {
                      class: "po-h-5 po-w-5",
                      "aria-hidden": "true"
                    })
                  ])
                ])
              ])
            ])
          ])) : m("", !0)
        ]),
        _: 3
      })
    ])) : m("", !0);
  }
}), uc = /* @__PURE__ */ s("div", { class: "po-fixed po-inset-0" }, null, -1), pc = { class: "po-absolute po-inset-0 po-overflow-hidden" }, cc = { class: "po-pointer-events-none po-fixed po-inset-y-0 po-right-0 po-flex po-max-w-full po-pl-10" }, dc = { class: "po-flex po-h-full po-flex-col po-overflow-y-auto po-bg-white po-shadow-xl" }, fc = { class: "po-bg-slate-50 po-py-6 po-px-4 sm:po-px-6" }, hc = { class: "po-flex po-items-center po-justify-between" }, mc = { class: "po-ml-3 po-flex po-h-7 po-items-center" }, vc = /* @__PURE__ */ s("span", { class: "po-sr-only" }, "Close panel", -1), gc = {
  key: 0,
  class: "po-mt-1"
}, bc = { class: "po-text-sm po-text-slate-500" }, yc = {
  key: 0,
  class: "po-bg-slate-50 po-rounded-b-xl po-shrink-0"
}, xc = {
  name: "PoSlideover"
}, B0 = /* @__PURE__ */ Object.assign(xc, {
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
    const o = e, { show: l } = ve(o), n = k(!1);
    U(l, () => {
      n.value = l.value;
    });
    function a() {
      n.value = !1, t("slideover-closed", !0);
    }
    return (i, p) => (r(), D(g(Ne), {
      as: "template",
      show: n.value
    }, {
      default: T(() => [
        C(g(tt), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: a
        }, {
          default: T(() => [
            uc,
            s("div", {
              class: S(["po-fixed po-inset-0 po-overflow-hidden po-bg-black", e.screenOpacity])
            }, [
              s("div", pc, [
                s("div", cc, [
                  C(g(ke), {
                    as: "template",
                    enter: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "enter-from": "po-translate-x-full",
                    "enter-to": "po-translate-x-0",
                    leave: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "leave-from": "po-translate-x-0",
                    "leave-to": "po-translate-x-full"
                  }, {
                    default: T(() => [
                      C(g(ot), {
                        class: S([e.maxWidth, "po-pointer-events-auto po-w-screen"])
                      }, {
                        default: T(() => [
                          s("div", dc, [
                            s("div", fc, [
                              s("div", hc, [
                                C(g(To), { class: "po-text-lg po-font-medium po-text-slate-600" }, {
                                  default: T(() => [
                                    Z(v(e.label), 1)
                                  ]),
                                  _: 1
                                }),
                                s("div", mc, [
                                  s("button", {
                                    type: "button",
                                    class: "po-rounded-md po-text-slate-500 hover:po-text-mpao-lightblue focus:po-outline-none focus:po-ring-2 focus:po-ring-white",
                                    onClick: a
                                  }, [
                                    vc,
                                    C(g(Ye), {
                                      class: "po-h-6 po-w-6",
                                      "aria-hidden": "true"
                                    })
                                  ])
                                ])
                              ]),
                              e.description ? (r(), u("div", gc, [
                                s("p", bc, v(e.description), 1)
                              ])) : m("", !0)
                            ]),
                            s("div", {
                              class: S([e.bgColor, "po-relative po-grow po-pt-6 po-px-4 sm:po-px-6"])
                            }, [
                              R(i.$slots, "content")
                            ], 2),
                            i.$slots.footer ? (r(), u("div", yc, [
                              R(i.$slots, "footer")
                            ])) : m("", !0)
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
}), wc = /* @__PURE__ */ s("div", { class: "po-fixed po-inset-0 po-bg-gray-500 po-bg-opacity-25 po-transition-opacity" }, null, -1), Vc = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto po-p-4 sm:po-p-6 md:po-p-20" }, $c = { class: "po-relative" }, kc = {
  key: 0,
  class: "po-max-h-96 scroll-py-3 po-overflow-y-auto po-p-3"
}, _c = {
  name: "PoCommandPalette"
}, M0 = /* @__PURE__ */ Object.assign(_c, {
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
    const t = e, o = k(""), { show: l } = ve(t), n = k(!1);
    U(l, () => {
      n.value = !1, setTimeout(() => {
        n.value = !0;
      }, 100);
    });
    function a(i) {
      i.ctrlKey && i.key === "b" && (n.value = !0);
    }
    return H(() => {
      window.addEventListener("keyup", a);
    }), Ke(() => {
      window.removeEventListener("keyup", a);
    }), (i, p) => (r(), D(g(Ne), {
      show: n.value,
      as: "template",
      onAfterLeave: p[2] || (p[2] = (c) => o.value = ""),
      appear: ""
    }, {
      default: T(() => [
        C(g(tt), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: p[1] || (p[1] = (c) => n.value = !1)
        }, {
          default: T(() => [
            C(g(ke), {
              as: "template",
              enter: "po-ease-out po-duration-300",
              "enter-from": "po-opacity-0",
              "enter-to": "po-opacity-100",
              leave: "po-ease-in po-duration-200",
              "leave-from": "po-opacity-100",
              "leave-to": "po-opacity-0"
            }, {
              default: T(() => [
                wc
              ]),
              _: 1
            }),
            s("div", Vc, [
              C(g(ke), {
                as: "template",
                enter: "po-ease-out po-duration-300",
                "enter-from": "po-opacity-0 po-scale-95",
                "enter-to": "po-opacity-100 po-scale-100",
                leave: "po-ease-in po-duration-200",
                "leave-from": "po-opacity-100 po-scale-100",
                "leave-to": "po-opacity-0 po-scale-95"
              }, {
                default: T(() => [
                  C(g(ot), { class: "po-mx-auto po-max-w-xl po-transform po-divide-y po-divide-gray-100 po-overflow-hidden po-rounded-xl po-bg-white po-shadow-2xl po-ring-1 po-ring-black po-ring-opacity-5 po-transition-all" }, {
                    default: T(() => [
                      s("div", $c, [
                        C(g(na), {
                          class: "po-pointer-events-none po-absolute po-top-3.5 po-left-4 po-h-5 po-w-5 po-text-gray-400",
                          "aria-hidden": "true"
                        }),
                        s("input", {
                          type: "text",
                          name: "",
                          class: "po-h-12 po-w-full po-border-0 po-bg-transparent po-pl-11 po-pr-4 po-text-gray-800 po-placeholder-gray-400 focus:po-ring-0 sm:po-text-sm",
                          placeholder: "Search...",
                          onChange: p[0] || (p[0] = (c) => o.value = c.target.value)
                        }, null, 32)
                      ]),
                      e.showContent ? (r(), u("div", kc, [
                        R(i.$slots, "content")
                      ])) : m("", !0)
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
}), Cc = /* @__PURE__ */ s("div", { class: "po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity" }, null, -1), Sc = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto" }, Pc = { class: "po-flex po-min-h-full po-items-start po-justify-center po-p-4 po-text-center sm:po-p-0" }, Oc = { class: "po-p-5" }, Ec = { class: "po-text-center po-space-y-3" }, Lc = { key: 1 }, Tc = { class: "po-text-sm po-text-gray-600" }, zc = { class: "po-border-t po-border-slate-200 po-flex po-divide-x po-divide-slate-200" }, Dc = {
  name: "PoAlert"
}, A0 = /* @__PURE__ */ Object.assign(Dc, {
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
    const o = e, { show: l } = ve(o), n = k(!1);
    U(l, () => {
      n.value = l.value;
    });
    function a() {
      n.value = !1, t("alert-closed", !0);
    }
    return (i, p) => (r(), D(g(Ne), {
      as: "template",
      show: n.value
    }, {
      default: T(() => [
        C(g(tt), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: a
        }, {
          default: T(() => [
            C(g(ke), {
              as: "template",
              enter: "po-ease-out po-duration-300",
              "enter-from": "po-opacity-0",
              "enter-to": "po-opacity-100",
              leave: "po-ease-in po-duration-200",
              "leave-from": "po-opacity-100",
              "leave-to": "po-opacity-0"
            }, {
              default: T(() => [
                Cc
              ]),
              _: 1
            }),
            s("div", Sc, [
              s("div", Pc, [
                C(g(ke), {
                  as: "template",
                  enter: "po-ease-out po-duration-300",
                  "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                  "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                  leave: "po-ease-in po-duration-200",
                  "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                  "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                }, {
                  default: T(() => [
                    C(g(ot), { class: "po-relative po-transform po-overflow-hidden po-rounded-lg po-bg-white po-text-left po-shadow-xl po-transition-all sm:po-my-8 sm:po-w-full sm:po-max-w-sm" }, {
                      default: T(() => [
                        s("div", Oc, [
                          s("div", Ec, [
                            e.alertTitle !== "" ? (r(), D(g(To), {
                              key: 0,
                              as: "h3",
                              class: "po-text-lg po-font-medium po-leading-6 po-text-gray-900"
                            }, {
                              default: T(() => [
                                Z(v(e.alertTitle), 1)
                              ]),
                              _: 1
                            })) : m("", !0),
                            e.alertDescription !== "" ? (r(), u("div", Lc, [
                              s("p", Tc, v(e.alertDescription), 1)
                            ])) : m("", !0)
                          ])
                        ]),
                        s("div", zc, [
                          s("button", {
                            onClick: p[0] || (p[0] = (c) => {
                              i.$emit("cancel", !0), a();
                            }),
                            class: "po-text-sm po-bg-white po-text-slate-500 hover:po-bg-slate-50 po-transition-colors po-duration-100 po-ease-out po-font-medium po-py-3 po-px-5 po-w-1/2 focus:po-ring-0"
                          }, v(e.cancelBtnLabel), 1),
                          s("button", {
                            onClick: p[1] || (p[1] = (c) => {
                              i.$emit("confirm", !0), i.$emit("button-click", "ok"), a();
                            }),
                            class: "po-text-sm po-bg-white po-text-mpao-lightblue hover:po-bg-slate-50 po-transition-colors po-duration-100 po-ease-out po-font-medium po-py-3 po-px-5 po-w-1/2 focus:po-ring-0"
                          }, v(e.okBtnLabel), 1)
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
}), Bc = {
  key: 0,
  class: "po-col-span-2 po-relative po-mt-5"
}, Mc = /* @__PURE__ */ s("span", {
  class: "po-absolute po-top-0 po-left-1 po--ml-px po-h-[calc(100%-7px)] po-w-0.5 po-bg-gray-200",
  "aria-hidden": "true"
}, null, -1), Ac = { class: "po-relative po-space-y-5" }, jc = { class: "po-flex po-space-x-2 po-items-start" }, Nc = { class: "log-item" }, Ic = { key: 0 }, Fc = {
  key: 0,
  class: "po-text-slate-500 po-text-xs"
}, Rc = {
  key: 1,
  class: "po-text-center po-py-10"
}, Hc = { class: "po-text-sm po-text-slate-500" }, qc = {
  name: "PoLogs"
}, j0 = /* @__PURE__ */ Object.assign(qc, {
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
    return (t, o) => (r(), u("div", null, [
      e.items && e.items.length > 0 ? (r(), u("div", Bc, [
        Mc,
        s("div", Ac, [
          (r(!0), u(z, null, M(e.items, (l, n) => (r(), u("div", jc, [
            s("p", {
              class: S([
                "po-rounded-full po-w-2 po-h-2 border-1 po-border-white po-shrink-0",
                { "po-bg-orange-400": n !== e.items.length - 1 },
                ,
                { "po-bg-slate-300": n == e.items.length - 1 }
              ])
            }, null, 2),
            s("div", Nc, [
              s("span", null, [
                Z(v(l.label) + " on " + v(l.date) + " " + v(l.by && l.by !== "" ? "by" : "") + " ", 1),
                l.by && l.by !== "" ? (r(), u("span", Ic, v(l.by), 1)) : m("", !0)
              ]),
              l.description && l.description !== "" ? (r(), u("blockquote", Fc, ' "' + v(l.description) + '" ', 1)) : m("", !0)
            ])
          ]))), 256))
        ])
      ])) : (r(), u("div", Rc, [
        s("span", Hc, v(e.emptyLabel), 1)
      ]))
    ]));
  }
}), Uc = {
  key: 0,
  role: "list",
  class: "po-divide-y po-divide-gray-200 po-rounded-md po-border po-border-gray-200 po-mt-5"
}, Wc = { class: "po-flex po-items-center po-justify-between po-py-3 po-pl-3 po-pr-4 po-text-sm" }, Gc = { class: "po-flex po-w-0 po-flex-1 po-items-center" }, Zc = { class: "po-ml-2 po-w-0 po-flex-1 po-truncate" }, Kc = { class: "po-ml-4 po-flex-shrink-0 po-space-x-4" }, Yc = ["onClick"], Qc = ["onClick"], Xc = {
  key: 1,
  class: "po-py-10"
}, Jc = { class: "po-text-sm po-text-slate-500" }, ed = {
  name: "PoDownloadFileList"
}, N0 = /* @__PURE__ */ Object.assign(ed, {
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
    return (o, l) => (r(), u("div", null, [
      e.files && e.files.length > 0 ? (r(), u("ul", Uc, [
        (r(!0), u(z, null, M(e.files, (n) => (r(), u("li", Wc, [
          s("div", Gc, [
            C(g(uo), {
              class: "po-h-5 po-w-5 po-flex-shrink-0 po-text-gray-400",
              "aria-hidden": "true"
            }),
            s("span", Zc, v(n.label), 1)
          ]),
          s("div", Kc, [
            s("a", {
              href: "#",
              onClick: ae((a) => o.$emit("button-click", n), ["prevent"]),
              class: "po-font-medium po-text-mpao-lightblue hover:po-text-indigo-500"
            }, v(e.linkLabel), 9, Yc),
            e.showViewBtn ? (r(), u("a", {
              key: 0,
              href: "#",
              onClick: ae((a) => o.$emit("view-click", n), ["prevent"]),
              class: "po-font-medium po-text-mpao-lightblue hover:po-text-indigo-500"
            }, v(e.viewBtnLabel), 9, Qc)) : m("", !0)
          ])
        ]))), 256))
      ])) : (r(), u("div", Xc, [
        s("span", Jc, v(e.emptyLabel), 1)
      ]))
    ]));
  }
}), td = {
  name: "PoContentArea"
}, od = { class: "shell-content--area po-max-w-[1370px]" };
function ld(e, t, o, l, n, a) {
  return r(), u("section", od, [
    R(e.$slots, "default")
  ]);
}
const I0 = /* @__PURE__ */ rt(td, [["render", ld]]), nd = {
  name: "AnimatedLogo"
}, sd = /* @__PURE__ */ Vl('<div><svg class="po-stroke-mpao-blue po-w-16 animated-logo" viewBox="0 0 62 55" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.76292 17.8572L7.7 17.9704V18.0682C6.87397 19.526 6.23618 20.649 5.58241 21.4779C4.93472 22.299 4.30505 22.7864 3.51417 23.0053C3.46261 23.0112 3.41718 23.0206 3.39088 23.026C3.35663 23.0331 3.31491 23.0425 3.27694 23.0511C3.25988 23.055 3.24357 23.0587 3.22903 23.0619C3.1106 23.0882 3.03712 23.1 3 23.1H2.93844L2.89561 23.1107L15.9876 0.600006H19.1308C17.2397 1.92747 16.1556 3.83665 15.5371 5.73245C14.8359 7.88203 14.7198 10.0514 14.7027 11.4258C13.1737 11.6033 11.0729 12.4434 9.38038 15.128C8.77075 16.0431 8.26353 16.9561 7.76713 17.8496L7.76292 17.8572Z"></path><path d="M48.1818 11.3241C48.047 8.39742 47.5389 6.05982 46.5472 4.07639C45.8153 2.61266 44.8203 1.39271 43.5945 0.5H46.8113L59.8583 23.0959C59.8303 23.0912 59.7891 23.0819 59.7213 23.0649C59.7166 23.0638 59.7117 23.0625 59.7066 23.0612C59.6302 23.042 59.5099 23.0118 59.3765 23.0027C58.59 22.7825 57.9627 22.2958 57.3176 21.4779C56.6586 20.6423 56.0158 19.508 55.1801 18.0331L55.1413 17.9647C54.8861 17.4553 54.6068 16.973 54.3362 16.5054L54.3327 16.4995C54.0565 16.0225 53.7893 15.5605 53.5472 15.0764L53.5333 15.0485L53.516 15.0226C51.7283 12.3411 49.7115 11.4988 48.1818 11.3241Z"></path><path d="M9.28397 39.6773C11.0717 42.3589 13.0885 43.2011 14.6182 43.3759C14.753 46.3026 15.2611 48.6402 16.2528 50.6236C16.9991 52.1163 17.9653 53.2992 19.1863 54.2H15.7881L2.74125 31.699C2.76073 31.6996 2.78031 31.7 2.8 31.7C2.89335 31.7 2.97474 31.7149 3.07903 31.7381C3.08854 31.7402 3.09897 31.7426 3.11023 31.7452C3.18647 31.7626 3.30082 31.7888 3.42319 31.7972C4.20888 32.0178 4.86081 32.5271 5.52047 33.3603C6.20216 34.2214 6.85697 35.382 7.66164 36.8405C8.26116 37.9396 8.76739 38.8512 9.276 39.665L9.27989 39.6712L9.28397 39.6773Z"></path><path d="M55.124 36.865L55.1331 36.8504L55.1412 36.8353C55.9431 35.3316 56.5997 34.1683 57.2697 33.307C57.9146 32.4778 58.5471 31.9616 59.2949 31.6961C59.4179 31.6866 59.5418 31.6616 59.6287 31.6442C59.6354 31.6428 59.6418 31.6415 59.6481 31.6403C59.719 31.6261 59.772 31.616 59.8123 31.6095L46.8115 54.1H43.8753C45.7283 52.7465 46.7867 50.8277 47.3889 48.9394C48.064 46.8226 48.1795 44.7058 48.1971 43.3742C49.7262 43.1967 51.8271 42.3567 53.5196 39.6719C53.8327 39.2016 54.1164 38.6849 54.3777 38.1995C54.4112 38.1375 54.4442 38.076 54.4768 38.0152C54.7049 37.5906 54.9148 37.1996 55.124 36.865Z"></path><path d="M32.2763 51.5708L32.2653 51.5582L32.2536 51.5465C32.0661 51.359 31.7413 51.2 31.4 51.2C31.3949 51.2 31.3894 51.2 31.3835 51.2C31.2956 51.1998 31.1323 51.1993 30.9751 51.2442C30.7932 51.2962 30.6132 51.4082 30.4904 51.6086C29.1941 53.0706 27.544 53.8 25.5 53.8C22.8209 53.8 20.828 52.9218 19.4532 51.2005C18.1148 49.5247 17.3123 46.988 17.1201 43.5109C18.6883 43.1579 19.8601 42.2673 20.5004 41.6896C20.5136 44.8271 20.8579 46.8152 21.6737 48.0181C22.5558 49.319 23.9045 49.6 25.5 49.6C27.4335 49.6 28.5187 48.2893 29.0946 46.9901C29.6604 45.7138 29.7966 44.3347 29.7999 43.8193C29.8943 42.5846 30.6602 41.8 31.5 41.8H31.5778C32.4558 41.8842 33.2 42.7102 33.2 43.9C33.2 45.6119 33.5619 47.0065 34.2986 47.9982C35.0485 49.0077 36.1459 49.544 37.4792 49.5996L37.4896 49.6H37.5C39.2304 49.6 40.5973 49.3258 41.4454 48.0081C41.849 47.3811 42.1078 46.5565 42.2692 45.5056C42.4311 44.4518 42.5 43.1353 42.5 41.5V24.4455L45.9 21.8182V41.5C45.9 41.4958 45.8996 41.5001 45.8978 41.519C45.8959 41.5381 45.8927 41.5719 45.887 41.6267L45.8842 41.6541C45.8752 41.7406 45.8636 41.8524 45.8521 41.9797C45.8264 42.2614 45.8 42.6283 45.8 43V43.9V43.9029V43.9059V43.9088V43.9117V43.9146V43.9175V43.9205V43.9234V43.9263V43.9292V43.9321V43.935V43.9379V43.9408V43.9437V43.9466V43.9495V43.9524V43.9553V43.9581V43.961V43.9639V43.9668V43.9696V43.9725V43.9754V43.9783V43.9811V43.984V43.9868V43.9897V43.9926V43.9954V43.9983V44.0011V44.004V44.0068V44.0096V44.0125V44.0153V44.0181V44.021V44.0238V44.0266V44.0295V44.0323V44.0351V44.0379V44.0407V44.0435V44.0463V44.0492V44.052V44.0548V44.0576V44.0603V44.0631V44.0659V44.0687V44.0715V44.0743V44.0771V44.0798V44.0826V44.0854V44.0882V44.0909V44.0937V44.0965V44.0992V44.102V44.1047V44.1075V44.1102V44.113V44.1157V44.1185V44.1212V44.1239V44.1267V44.1294V44.1321V44.1349V44.1376V44.1403V44.143V44.1457V44.1484V44.1512V44.1539V44.1566V44.1593V44.162V44.1647V44.1674V44.17V44.1727V44.1754V44.1781V44.1808V44.1835V44.1861V44.1888V44.1915V44.1941V44.1968V44.1995V44.2021V44.2048V44.2074V44.2101V44.2127V44.2154V44.218V44.2207V44.2233V44.2259V44.2285V44.2312V44.2338V44.2364V44.239V44.2417V44.2443V44.2469V44.2495V44.2521V44.2547V44.2573V44.2599V44.2625V44.2651V44.2677V44.2702V44.2728V44.2754V44.278V44.2806V44.2831V44.2857V44.2882V44.2908V44.2934V44.2959V44.2985V44.301V44.3036V44.3061V44.3087V44.3112V44.3137V44.3163V44.3188V44.3213V44.3238V44.3264V44.3289V44.3314V44.3339V44.3364V44.3389V44.3414V44.3439V44.3464V44.3489V44.3514V44.3539V44.3564V44.3588V44.3613V44.3638V44.3663V44.3687V44.3712V44.3737V44.3761V44.3786V44.381V44.3835V44.3859V44.3884V44.3908V44.3932V44.3957V44.3981V44.4005V44.403V44.4054V44.4078V44.4102V44.4126V44.415V44.4174V44.4199V44.4223V44.4247V44.427V44.4294V44.4318V44.4342V44.4366V44.439V44.4413V44.4437V44.4461V44.4484V44.4508V44.4532V44.4555V44.4579V44.4602V44.4626V44.4649V44.4672V44.4696V44.4719V44.4742V44.4766V44.4789V44.4812V44.4835V44.4858V44.4882V44.4905V44.4928V44.4951V44.4974V44.4997V44.5019V44.5042V44.5065V44.5088V44.5111V44.5133V44.5156V44.5179V44.5201V44.5224V44.5247V44.5269V44.5292V44.5314V44.5337V44.5359V44.5381V44.5404V44.5426V44.5448V44.547V44.5493V44.5515V44.5537V44.5559V44.5581V44.5603V44.5625V44.5647V44.5669V44.5691V44.5713V44.5734V44.5756V44.5778V44.58V44.5821V44.5843V44.5865V44.5886V44.5908V44.5929V44.5951V44.5972V44.5994V44.6015V44.6036V44.6058V44.6079V44.61V44.6121V44.6142V44.6164V44.6185V44.6206V44.6227V44.6248V44.6269V44.6289V44.631V44.6331V44.6352V44.6373V44.6393V44.6414V44.6435V44.6455V44.6476V44.6497V44.6517V44.6538V44.6558V44.6578V44.6599V44.6619V44.6639V44.666V44.668V44.67V44.672V44.674V44.676V44.678V44.68V44.682V44.684V44.686V44.688V44.69V44.692V44.6939V44.6959V44.6979V44.6998V44.7018V44.7037V44.7057V44.7076V44.7096V44.7115V44.7135V44.7154V44.7173V44.7193V44.7212V44.7231V44.725V44.7269V44.7288V44.7307V44.7326V44.7345V44.7364V44.7383V44.7402V44.7421V44.7439V44.7458V44.7477V44.7495V44.7514V44.7533V44.7551V44.757V44.7588V44.7606V44.7625V44.7643V44.7661V44.768V44.7698V44.7716V44.7734V44.7752V44.777V44.7788V44.7806V44.7824V44.7842V44.786V44.7878V44.7896V44.7914V44.7931V44.7949V44.7967V44.7984V44.8002V44.8019V44.8037V44.8054V44.8071V44.8089V44.8106V44.8123V44.8141V44.8158V44.8175V44.8192V44.8209V44.8226V44.8243V44.826V44.8277V44.8294V44.8311V44.8328V44.8344V44.8361V44.8378V44.8394V44.8411V44.8427V44.8444V44.846V44.8477V44.8493V44.851V44.8526V44.8542V44.8558V44.8575V44.8591V44.8607V44.8623V44.8639V44.8655V44.8671V44.8687V44.8702V44.8718V44.8734V44.875V44.8765V44.8781V44.8797V44.8812V44.8828V44.8843V44.8859V44.8874V44.8889V44.8905V44.892V44.8935V44.895V44.8965V44.898V44.8996V44.9011V44.9025V44.904V44.9055V44.907V44.9085V44.91V44.9114V44.9129V44.9144V44.9158V44.9173V44.9187V44.9202V44.9216V44.923V44.9245V44.9259V44.9273V44.9288V44.9302V44.9316V44.933V44.9344V44.9358V44.9372V44.9386V44.9399V44.9413V44.9427V44.9441V44.9454V44.9468V44.9482V44.9495V44.9509V44.9522V44.9535V44.9549V44.9562V44.9575V44.9589V44.9602V44.9615V44.9628V44.9641V44.9654V44.9667V44.968V44.9693V44.9706V44.9718V44.9731V44.9744V44.9757V44.9769V44.9782V44.9794V44.9807V44.9819V44.9832V44.9844V44.9856V44.9868V44.9881V44.9893V44.9905V44.9917V44.9929V44.9941V44.9953V44.9965V44.9977V44.9988V45V45.1V45.1006V45.1012V45.1017V45.1023V45.1029V45.1035V45.104V45.1046V45.1052V45.1057V45.1063V45.1069V45.1074V45.108V45.1085V45.1091V45.1096V45.1102V45.1107V45.1113V45.1118V45.1123V45.1129V45.1134V45.1139V45.1145V45.115V45.1155V45.1161V45.1166V45.1171V45.1176V45.1181V45.1186V45.1191V45.1196V45.1202V45.1207V45.1212V45.1217V45.1222V45.1226V45.1231V45.1236V45.1241V45.1246V45.1251V45.1256V45.1261V45.1265V45.127V45.1275V45.128V45.1284V45.1289V45.1294V45.1298V45.1303V45.1307V45.1312V45.1317V45.1321V45.1326V45.133V45.1335V45.1339V45.1343V45.1348V45.1352V45.1357V45.1361V45.1365V45.137V45.1374V45.1378V45.1383V45.1387V45.1391V45.1395V45.1399V45.1404V45.1408V45.1412V45.1416V45.142V45.1424V45.1428V45.1432V45.1436V45.144V45.1444V45.1448V45.1452V45.1456V45.146V45.1464V45.1468V45.1471V45.1475V45.1479V45.1483V45.1487V45.149V45.1494V45.1498V45.1501V45.1505V45.1509V45.1512V45.1516V45.152V45.1523V45.1527V45.153V45.1534V45.1537V45.1541V45.1544V45.1548V45.1551V45.1555V45.1558V45.1561V45.1565V45.1568V45.1572V45.1575V45.1578V45.1581V45.1585V45.1588V45.1591V45.1594V45.1598V45.1601V45.1604V45.1607V45.161V45.1613V45.1616V45.162V45.1623V45.1626V45.1629V45.1632V45.1635V45.1638V45.1641V45.1644V45.1647V45.165V45.1652V45.1655V45.1658V45.1661V45.1664V45.1667V45.167V45.1672V45.1675V45.1678V45.1681V45.1683V45.1686V45.1689V45.1691V45.1694V45.1697V45.1699V45.1702V45.1705V45.1707V45.171V45.1712V45.1715V45.1717V45.172V45.1722V45.1725V45.1727V45.173V45.1732V45.1735V45.1737V45.174V45.1742V45.1744V45.1747V45.1749V45.1751V45.1753C45.5039 48.1507 44.6544 50.2924 43.3031 51.6899C41.9582 53.0807 40.0524 53.8 37.5 53.8C35.4235 53.8 33.5685 53.0476 32.2763 51.5708Z"></path><path d="M22.8 23.2538V18.2178L29.3909 23.307L26.1939 25.8645L22.8 23.2538Z"></path><path d="M16.7 20.2V19.7H16.5V18.8V10.858C16.5042 10.8478 16.5096 10.8348 16.5142 10.8232C16.5488 10.7368 16.5963 10.6012 16.5998 10.4209C16.8474 7.03069 17.6799 4.61275 19.0737 3.04468C20.4543 1.49155 22.4511 0.699997 25.2 0.699997C27.2568 0.699997 29.1263 1.53906 30.5352 3.04197L30.5407 3.04785L30.5464 3.05355C30.7614 3.26854 31.0508 3.35 31.3 3.35C31.5492 3.35 31.8386 3.26854 32.0536 3.05355L32.0646 3.04251L32.0749 3.03081C33.4779 1.4408 35.1402 0.699997 37.3 0.699997C40.0769 0.699997 42.1441 1.62655 43.5571 3.42174C44.934 5.17104 45.7393 7.80743 45.886 11.3874C44.0184 11.8028 42.6345 12.9721 42.1 13.4936V13.2C42.1 10.0544 41.7835 8.06299 40.9925 6.86242C40.1497 5.58316 38.8495 5.3 37.3 5.3C35.4114 5.3 34.3769 6.59229 33.8399 7.85422C33.3055 9.11015 33.2 10.457 33.2 10.9C33.2 12.2634 32.2859 13.1 31.3 13.1H31.2204C30.2388 13.0141 29.4 12.0845 29.4 10.8C29.4 9.19015 29.0639 7.84653 28.3661 6.89234C27.6525 5.91665 26.5974 5.4 25.3 5.4C23.6267 5.4 22.3017 5.64608 21.4896 6.93319C21.1052 7.5425 20.863 8.34586 20.7131 9.3714C20.5626 10.4004 20.5 11.6909 20.5 13.3V30.4541L16.7 33.3833V20.2Z"></path><path d="M40.1 31.5462V36.5799L33.4225 31.4049L36.6974 28.9288L40.1 31.5462Z"></path><mask id="path-9-inside-1" fill="white"><path d="M58.7 30.1C58.9 30 59.5 30 59.8 29.9C60.9 29.8 61.8 28.7 61.8 27.4C61.8 26.1 60.9 25 59.8 24.9C59.7 24.9 59.5 24.9 59.4 24.8C59.3 24.8 59.2 24.8 59.1 24.7C59.1 24.7 59.1 24.7 59 24.7C58.6 24.6 58.1 24.4 57.7 24.1C57.7 24.1 57.7 24.1 57.6 24C56.1 23.1 55 21.2 53.6 18.7C53.1 17.8 52.6 16.9 52 16C50.5 13.7 48.9 13.1 47.8 13C47.7 13 47.6 13 47.5 13H47.3C47.1 13 46.9 13 46.9 13C45.2 13.2 44 14.3 43.6 14.8L25.2 29.1C25.2 29.1 25.2 29.1 25.1 29.2L23 30.8L16.8 35.5L16.4 35.9C16.4 35.9 16.4 35.9 16.3 35.9C16 36.1 15.7 36.3 15.4 36.3C15.1 36.3 14.9 36.2 14.7 36.1C14.5 35.9 14.4 35.8 14.3 35.5C13.9 34.8 13.4 34.1 13 33.3V33.1C12.2 31.7 11.3 30 10.1 28.6C10.1 28.6 10.1 28.6 10.1 28.5L10 28.4C9.9 28.3 9.9 28.3 9.8 28.2C9.8 28.2 9.8 28.2 9.7 28.1L9.2 27.5C9.2 27.5 9.2 27.5 9.1 27.5C9 27.3 9 27.1 9.1 27L9.6 26.5C10.9 25 11.9 23.2 12.8 21.6V21.5C13.2 20.7 13.7 19.9 14.2 19.1C14.4 18.8 14.6 18.6 14.7 18.5V13.1C13.6 13.2 12 13.9 10.6 16C10 16.9 9.5 17.8 9 18.7C7.8 20.9 6.8 22.5 5.6 23.5C4.8 24.1 4 24.4 3.5 24.6C3.5 24.6 3.5 24.6 3.4 24.6C3.3 24.6 3.1 24.7 3 24.7C2.9 24.7 2.9 24.7 2.8 24.7C2.7 24.7 2.7 24.7 2.7 24.7H2.6H2.5C2.3 24.7 2.2 24.8 2.1 24.8C2 24.8 2 24.8 2 24.9C1.7 25.1 1.4 25.3 1.2 25.6C1.2 25.7 1.1 25.7 1.1 25.8V25.9L0.999997 26.1C0.999997 26.2 0.999997 26.2 0.899997 26.3C0.899997 26.4 0.899997 26.4 0.799997 26.5C0.799997 26.6 0.799997 26.7 0.699997 26.7C0.699997 26.8 0.699997 26.9 0.699997 26.9C0.699997 27 0.699997 27.1 0.699997 27.1C0.699997 27.2 0.699997 27.2 0.699997 27.3C0.699997 27.4 0.699997 27.5 0.699997 27.5C0.699997 27.6 0.699997 27.7 0.699997 27.7C0.699997 27.8 0.699997 27.9 0.799997 27.9V28V28.1C0.799997 28.2 0.799997 28.2 0.899997 28.2L0.999997 28.4C0.999997 28.5 1.1 28.5 1.1 28.5C1.1 28.5 1.1 28.5 1.1 28.6C1.2 28.7 1.3 28.9 1.5 29C1.6 29 1.6 29.1 1.7 29.1C1.7 29.1 1.8 29.1 1.8 29.2C1.8 29.2 1.8 29.2 1.9 29.2C2 29.3 2.2 29.3 2.3 29.4C2.4 29.4 2.4 29.4 2.4 29.4L2.9 29.5C3.1 29.5 3.2 29.6 3.4 29.6C4.2 29.8 4.7 30.2 4.8 30.2C6.4 31.2 7.5 33 8.9 35.5C9.5 36.6 10 37.4 10.5 38.2C11.9 40.3 13.4 41 14.4 41.1C14.5 41.1 14.5 41.1 14.6 41.1C14.7 41.1 14.8 41.1 14.8 41.1C15 41.1 15.2 41.1 15.5 41.1H15.6C17.2 40.8 18.5 39.8 18.9 39.3L19 39.2L19.8 38.6C19.8 38.6 19.9 38.5 20 38.5L30.2 30.6L41.3 22L46.5 18H46.6C46.7 18 46.9 17.9 47 17.9C47.4 17.9 47.8 18.1 48.1 18.6L48.5 19.2C48.8 19.7 49.2 20.3 49.5 20.9V21C50.1 22.1 50.8 23.4 51.7 24.6C51.7 24.6 51.7 24.7 51.8 24.7C52.1 25.1 52.4 25.5 52.7 25.8C52.7 25.8 52.8 25.8 52.8 25.9C53 26.1 53.1 26.3 53.3 26.4C53.4 26.5 53.4 26.7 53.3 26.9C52 28.5 50.4 31.1 49.6 32.4V32.5C49.2 33.2 48.7 34.1 48.2 34.9C48 35.2 47.8 35.4 47.7 35.5V40.9C48.8 40.8 50.4 40.1 51.8 37.9C52.4 37 52.9 36 53.4 35.2C53.5 35 53.7 34.7 53.8 34.5C55.2 33 56.4 30.9 58.7 30.1Z"></path></mask><path d="M58.7 30.1C58.9 30 59.5 30 59.8 29.9C60.9 29.8 61.8 28.7 61.8 27.4C61.8 26.1 60.9 25 59.8 24.9C59.7 24.9 59.5 24.9 59.4 24.8C59.3 24.8 59.2 24.8 59.1 24.7C59.1 24.7 59.1 24.7 59 24.7C58.6 24.6 58.1 24.4 57.7 24.1C57.7 24.1 57.7 24.1 57.6 24C56.1 23.1 55 21.2 53.6 18.7C53.1 17.8 52.6 16.9 52 16C50.5 13.7 48.9 13.1 47.8 13C47.7 13 47.6 13 47.5 13H47.3C47.1 13 46.9 13 46.9 13C45.2 13.2 44 14.3 43.6 14.8L25.2 29.1C25.2 29.1 25.2 29.1 25.1 29.2L23 30.8L16.8 35.5L16.4 35.9C16.4 35.9 16.4 35.9 16.3 35.9C16 36.1 15.7 36.3 15.4 36.3C15.1 36.3 14.9 36.2 14.7 36.1C14.5 35.9 14.4 35.8 14.3 35.5C13.9 34.8 13.4 34.1 13 33.3V33.1C12.2 31.7 11.3 30 10.1 28.6C10.1 28.6 10.1 28.6 10.1 28.5L10 28.4C9.9 28.3 9.9 28.3 9.8 28.2C9.8 28.2 9.8 28.2 9.7 28.1L9.2 27.5C9.2 27.5 9.2 27.5 9.1 27.5C9 27.3 9 27.1 9.1 27L9.6 26.5C10.9 25 11.9 23.2 12.8 21.6V21.5C13.2 20.7 13.7 19.9 14.2 19.1C14.4 18.8 14.6 18.6 14.7 18.5V13.1C13.6 13.2 12 13.9 10.6 16C10 16.9 9.5 17.8 9 18.7C7.8 20.9 6.8 22.5 5.6 23.5C4.8 24.1 4 24.4 3.5 24.6C3.5 24.6 3.5 24.6 3.4 24.6C3.3 24.6 3.1 24.7 3 24.7C2.9 24.7 2.9 24.7 2.8 24.7C2.7 24.7 2.7 24.7 2.7 24.7H2.6H2.5C2.3 24.7 2.2 24.8 2.1 24.8C2 24.8 2 24.8 2 24.9C1.7 25.1 1.4 25.3 1.2 25.6C1.2 25.7 1.1 25.7 1.1 25.8V25.9L0.999997 26.1C0.999997 26.2 0.999997 26.2 0.899997 26.3C0.899997 26.4 0.899997 26.4 0.799997 26.5C0.799997 26.6 0.799997 26.7 0.699997 26.7C0.699997 26.8 0.699997 26.9 0.699997 26.9C0.699997 27 0.699997 27.1 0.699997 27.1C0.699997 27.2 0.699997 27.2 0.699997 27.3C0.699997 27.4 0.699997 27.5 0.699997 27.5C0.699997 27.6 0.699997 27.7 0.699997 27.7C0.699997 27.8 0.699997 27.9 0.799997 27.9V28V28.1C0.799997 28.2 0.799997 28.2 0.899997 28.2L0.999997 28.4C0.999997 28.5 1.1 28.5 1.1 28.5C1.1 28.5 1.1 28.5 1.1 28.6C1.2 28.7 1.3 28.9 1.5 29C1.6 29 1.6 29.1 1.7 29.1C1.7 29.1 1.8 29.1 1.8 29.2C1.8 29.2 1.8 29.2 1.9 29.2C2 29.3 2.2 29.3 2.3 29.4C2.4 29.4 2.4 29.4 2.4 29.4L2.9 29.5C3.1 29.5 3.2 29.6 3.4 29.6C4.2 29.8 4.7 30.2 4.8 30.2C6.4 31.2 7.5 33 8.9 35.5C9.5 36.6 10 37.4 10.5 38.2C11.9 40.3 13.4 41 14.4 41.1C14.5 41.1 14.5 41.1 14.6 41.1C14.7 41.1 14.8 41.1 14.8 41.1C15 41.1 15.2 41.1 15.5 41.1H15.6C17.2 40.8 18.5 39.8 18.9 39.3L19 39.2L19.8 38.6C19.8 38.6 19.9 38.5 20 38.5L30.2 30.6L41.3 22L46.5 18H46.6C46.7 18 46.9 17.9 47 17.9C47.4 17.9 47.8 18.1 48.1 18.6L48.5 19.2C48.8 19.7 49.2 20.3 49.5 20.9V21C50.1 22.1 50.8 23.4 51.7 24.6C51.7 24.6 51.7 24.7 51.8 24.7C52.1 25.1 52.4 25.5 52.7 25.8C52.7 25.8 52.8 25.8 52.8 25.9C53 26.1 53.1 26.3 53.3 26.4C53.4 26.5 53.4 26.7 53.3 26.9C52 28.5 50.4 31.1 49.6 32.4V32.5C49.2 33.2 48.7 34.1 48.2 34.9C48 35.2 47.8 35.4 47.7 35.5V40.9C48.8 40.8 50.4 40.1 51.8 37.9C52.4 37 52.9 36 53.4 35.2C53.5 35 53.7 34.7 53.8 34.5C55.2 33 56.4 30.9 58.7 30.1Z"></path></svg></div>', 1), ad = [
  sd
];
function rd(e, t, o, l, n, a) {
  return r(), u("div", null, ad);
}
const id = /* @__PURE__ */ rt(nd, [["render", rd]]), ud = {
  key: 0,
  class: "po-fixed po-z-[999] po-top-0 po-bottom-0 po-left-0 po-right-0 po-flex po-items-center po-justify-center"
}, pd = /* @__PURE__ */ s("div", { class: "po-absolute po-w-[6.2rem] po-h-[6.2rem] po-bg-transparent po-overflow-hidden po-rounded-xl" }, [
  /* @__PURE__ */ s("div", { class: "po-loading-rotate po-absolute -po-top-8 -po-left-8 po-w-[10rem] po-h-[10rem]" })
], -1), cd = { class: "relative po-bg-white po-w-24 po-h-24 po-flex po-items-center po-justify-center po-rounded-xl po-bg-opacity-50 po-backdrop-blur po-backdrop-filter po-z-10 po-shadow-xl" }, dd = {
  key: 0,
  class: "po-absolute po-left-1 po-right-1 po-text-center po-py-1 po-text-xs po-text-mpao-blue po-bg-white po-bg-opacity-50 po-backdrop-blur po-backdrop-filter"
}, fd = {
  name: "PoLoading"
}, F0 = /* @__PURE__ */ Object.assign(fd, {
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
    return (t, o) => e.show ? (r(), u("div", ud, [
      pd,
      s("div", cd, [
        e.label !== "" ? (r(), u("span", dd, v(e.label), 1)) : m("", !0),
        C(id)
      ])
    ])) : m("", !0);
  }
}), hd = { class: "po-py-5 po-flex po-items-start po-space-x-5" }, md = ["name", "id", "checked", "aria-describedby"], vd = { class: "po-grow -po-mt-[0.26rem]" }, gd = ["for"], bd = { class: "po-mt-2 po-flex po-space-x-3" }, yd = ["href", "onClick"], xd = {
  name: "PoConsent"
}, R0 = /* @__PURE__ */ Object.assign(xd, {
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
    return (t, o) => (r(), u("div", hd, [
      s("input", be({
        type: "checkbox",
        name: `${e.id}-field`,
        id: e.id,
        checked: e.modelValue,
        "aria-describedby": `${e.id}-description`
      }, t.$attrs, {
        onInput: o[0] || (o[0] = (l) => t.$emit("update:modelValue", l.target.checked)),
        class: "po-shrink-0 po-h-4 po-w-4 po-rounded border-slate-300 po-text-mpao-lightblue focus:po-ring-mpao-lightblue"
      }), null, 16, md),
      s("div", vd, [
        s("label", {
          class: "po-block po-select-none po-text-sm po-text-slate-600 po-cursor-pointer",
          for: e.id
        }, v(e.label), 9, gd),
        s("div", bd, [
          (r(!0), u(z, null, M(e.links, (l) => (r(), u("a", {
            href: l.url,
            onClick: ae((n) => t.$emit("button-click", l.url), ["prevent"]),
            class: "po-text-sm po-text-mpao-lightblue hover:po-text-mpao-blue"
          }, v(l.label), 9, yd))), 256))
        ])
      ])
    ]));
  }
}), wd = {
  class: "po-flex po-bg-slate-50 po-rounded-t-xl po-justify-center lg:po-justify-start po-px-4 po-pt-4 xl:po-pt-2 po-flex-wrap po-overflow-hidden",
  "aria-label": "Tabs"
}, Vd = ["onClick", "aria-current"], $d = { key: 0 }, kd = {
  name: "PoCardTabs"
}, H0 = /* @__PURE__ */ Object.assign(kd, {
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
    return (l, n) => (r(), u("nav", wd, [
      (r(!0), u(z, null, M(e.tabs, (a) => (r(), u("span", {
        role: "button",
        onClick: (i) => l.$emit("button-click", a),
        key: a.name,
        class: S([
          a.current ? "po-bg-white po-text-slate-600 po-shadow-lg" : "po-text-slate-600 hover:po-text-mpao-blue",
          "po-px-4 po-py-3 po-font-medium po-mr-4 po-mb-4 xl:po-mb-0 po-text-sm po-cursor-pointer po-rounded-xl xl:po-rounded-b-none genie-effect hover:po-text-slate-600 hover:po-bg-white hover:po-shadow-md po-flex po-items-center po-flex-shrink-0 po-space-x-2"
        ]),
        "aria-current": a.current ? "page" : void 0
      }, [
        a.icon ? (r(), D(de(a.icon), {
          key: 0,
          class: S(["po-w-5 po-h-5", [o(a)]])
        }, null, 8, ["class"])) : m("", !0),
        s("span", null, [
          Z(v(a.name), 1),
          a.count ? (r(), u("span", $d, " (" + v(a.count) + ")", 1)) : m("", !0)
        ])
      ], 10, Vd))), 128))
    ]));
  }
}), _d = { class: "sm:po-hidden" }, Cd = /* @__PURE__ */ s("label", {
  for: "tabs",
  class: "po-sr-only"
}, "Select a tab", -1), Sd = ["value", "selected"], Pd = { class: "po-hidden sm:po-block" }, Od = {
  class: "po-flex po-space-x-4 po-pt-2",
  "aria-label": "Tabs"
}, Ed = ["onClick", "aria-current"], Ld = {
  name: "PoTabs"
}, q0 = /* @__PURE__ */ Object.assign(Ld, {
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
    function l(i) {
      return i.iconColor ? i.iconColor : "po-fill-current";
    }
    const n = E(() => o.tabs.map((i) => i.name === o.currentTab ? { ...i, current: !0 } : { ...i, current: !1 }));
    function a(i) {
      const p = i.target.value, c = o.tabs[p];
      t("button-click", c);
    }
    return (i, p) => (r(), u(z, null, [
      s("div", _d, [
        Cd,
        s("select", {
          id: "tabs",
          name: "tabs",
          class: "po-block po-w-full po-rounded-md po-border-gray-300 focus:po-border-indigo-500 focus:po-ring-indigo-500",
          onChange: a
        }, [
          (r(!0), u(z, null, M(e.tabs, (c, d) => (r(), u("option", {
            key: c.name,
            value: d,
            selected: c.current
          }, v(c.name), 9, Sd))), 128))
        ], 32)
      ]),
      s("div", Pd, [
        s("nav", Od, [
          (r(!0), u(z, null, M(g(n), (c) => (r(), u("span", {
            onClick: (d) => i.$emit("button-click", c),
            role: "button",
            key: c.name,
            class: S([
              c.current ? "po-bg-white po-text-slate-600 po-shadow-md" : "po-bg-slate-50 po-text-slate-600 hover:po-text-mpao-blue",
              "po-px-4 po-relative po-group po-py-3 po-font-medium po-text-sm po-cursor-pointer po-rounded-xl genie-effect hover:po-text-slate-600 hover:po-bg-white hover:po-shadow-md po-flex po-items-center po-space-x-2"
            ]),
            "aria-current": c.current ? "page" : void 0
          }, [
            c.icon ? (r(), D(de(c.icon), {
              key: 0,
              class: S(["po-w-5 po-h-5", [l(c)]])
            }, null, 8, ["class"])) : m("", !0),
            s("span", null, [
              s("span", null, v(c.name), 1),
              c.count && c.count > 0 ? (r(), u("span", {
                key: 0,
                class: S(["po-absolute po-py-1 po-px-2 po-rounded-full po-text-xs -po-top-3 -po-right-2 po-shadow-md po-flex po-items-center po-justify-center", [
                  c.current ? "po-bg-mpao-orange po-text-white" : "po-bg-slate-400 po-text-white group-hover:po-bg-mpao-orange group-hover:po-text-white"
                ]])
              }, [
                s("span", null, v(c.count), 1)
              ], 2)) : m("", !0)
            ])
          ], 10, Ed))), 128))
        ])
      ])
    ], 64));
  }
}), Td = { class: "po-mt-5 po-flex po-flex-col po-items-center po-justify-center po-px-5 po-py-8" }, zd = {
  key: 1,
  class: "po-text-base po-font-medium po-text-slate-600 po-text-center"
}, Dd = {
  key: 2,
  class: "po-text-sm po-text-slate-500 po-text-center po-max-w-lg po-block po-mx-auto"
}, Bd = {
  name: "PoEmpty"
}, U0 = /* @__PURE__ */ Object.assign(Bd, {
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
    return (t, o) => (r(), u("div", Td, [
      s("div", {
        class: S(["po-space-y-2 po-flex po-items-center po-flex-col po-justify-center", [{ "po-mb-5": t.$slots.action }]])
      }, [
        e.icon ? (r(), D(de(e.icon), {
          key: 0,
          class: S(["po-w-10 po-h-10", e.iconColor])
        }, null, 8, ["class"])) : m("", !0),
        e.label !== "" ? (r(), u("span", zd, v(e.label), 1)) : m("", !0),
        e.description !== "" ? (r(), u("span", Dd, v(e.description), 1)) : m("", !0)
      ], 2),
      R(t.$slots, "action")
    ]));
  }
});
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const ft = () => !1;
function Md(e) {
  throw e;
}
function Ad(e) {
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
Symbol(process.env.NODE_ENV !== "production" ? "normalizeClass" : "");
Symbol(process.env.NODE_ENV !== "production" ? "normalizeStyle" : "");
Symbol(process.env.NODE_ENV !== "production" ? "normalizeProps" : "");
Symbol(process.env.NODE_ENV !== "production" ? "guardReactiveProps" : "");
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
const jd = /&(gt|lt|amp|apos|quot);/g, Nd = {
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
const Id = { class: "po-flex po-text-sm po-text-gray-700 po-flex-col po-space-y-5" }, Fd = {
  key: 0,
  class: "po-text-base po-font-medium po-text-slate-700"
}, Rd = {
  key: 1,
  class: "po-border po-border-orange-300 po-bg-orange-50 po-rounded-lg po-p-5 po-flex po-items-center po-space-x-3"
}, Hd = { class: "po-grow po-text-sm po-text-slate-600" }, qd = {
  key: 2,
  class: "po-border po-border-red-300 po-bg-red-50 po-rounded-lg po-p-5 po-flex po-space-x-4"
}, Ud = { class: "po-grow" }, Wd = { class: "po-text-base po-text-slate-700 po-font-medium" }, Gd = { class: "po-text-sm po-text-slate-600" }, Zd = { class: "po-font-medium" }, Kd = { key: 0 }, Yd = { key: 0 }, Qd = /* @__PURE__ */ s("dt", null, "Name", -1), Xd = { key: 1 }, Jd = /* @__PURE__ */ s("dt", null, "Identifer", -1), e1 = { key: 2 }, t1 = /* @__PURE__ */ s("dt", null, "Date of birth", -1), o1 = { key: 3 }, l1 = /* @__PURE__ */ s("dt", null, "Reported Date of death", -1), n1 = {
  key: 3,
  class: "po-pt-5"
}, s1 = { class: "po-flex po-items-center po-space-x-1" }, a1 = /* @__PURE__ */ s("span", null, "File a dispute.", -1), r1 = {
  name: "PoDRStatus"
}, W0 = /* @__PURE__ */ Object.assign(r1, {
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
    return (l, n) => (r(), u("span", Id, [
      e.record !== null ? (r(), u("h2", Fd, " Death was reported by " + v(e.record.institution), 1)) : m("", !0),
      e.request !== null && e.request.type_id === 1 ? (r(), u("div", Rd, [
        C(g(ht), { class: "po-shrink-0 po-w-6 po-stroke-orange-600" }),
        s("span", Hd, " This is a " + v(e.request.type) + " request and is in " + v(e.request.state) + " state. ", 1)
      ])) : m("", !0),
      e.request !== null && e.request.type_id !== 1 ? (r(), u("div", qd, [
        C(g(ht), { class: "po-shrink-0 po-w-6 po-h-6 po-stroke-red-600 po-stroke-2" }),
        s("div", Ud, [
          s("h3", Wd, v(e.request.type), 1),
          s("p", Gd, [
            Z(" The following " + v(e.request.type) + " was reported: ", 1),
            s("span", Zd, [
              Z(v(e.request.dispute_type), 1),
              e.request.date_of_death ? (r(), u("span", Kd, " (New date: " + v(e.request.date_of_death) + ")", 1)) : m("", !0)
            ])
          ])
        ])
      ])) : m("", !0),
      C(qi, null, {
        content: T(() => [
          e.member !== null ? (r(), u("div", Yd, [
            Qd,
            s("dd", null, v(e.member.name), 1)
          ])) : m("", !0),
          e.member !== null ? (r(), u("div", Xd, [
            Jd,
            s("dd", null, v(e.member.identifier), 1)
          ])) : m("", !0),
          e.member !== null ? (r(), u("div", e1, [
            t1,
            s("dd", null, v(e.member.dob), 1)
          ])) : m("", !0),
          e.record !== null ? (r(), u("div", o1, [
            l1,
            s("dd", null, v(e.record.date_of_death), 1)
          ])) : m("", !0)
        ]),
        _: 1
      }),
      e.request === null ? (r(), u("span", n1, [
        C(Nt, {
          type: "simple",
          onButtonClick: o
        }, {
          label: T(() => [
            s("span", s1, [
              C(g(Ol), { class: "po-w-4 po-h-4 po-stroke-current" }),
              a1
            ])
          ]),
          _: 1
        })
      ])) : m("", !0)
    ]));
  }
}), i1 = {
  key: 0,
  role: "button",
  class: "po-w-6 po-h-6 po-rounded-lg po-bg-white genie-effect po-flex po-items-center po-justify-center hover:po-bg-slate-50 po-cursor-pointer"
}, u1 = {
  name: "PoTableAction"
}, G0 = /* @__PURE__ */ Object.assign(u1, {
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
    const t = e, o = k(), l = k();
    return t.btnType === "view" ? o.value = Ml : t.btnType === "edit" ? o.value = jl : t.btnType === "delete" ? o.value = Il : t.btnType === "icon" && t.btnIcon && (o.value = t.btnIcon), t.btnType === "view" ? l.value = "po-stroke-emerald-400" : t.btnType === "edit" ? l.value = "po-stroke-blue-400" : t.btnType === "delete" ? l.value = "po-stroke-red-400" : l.value = t.iconColor, (n, a) => (r(), u("span", null, [
      e.btnType === "icon" || e.btnType === "delete" || e.btnType === "edit" || e.btnType === "view" ? (r(), u("span", i1, [
        (r(), D(de(o.value), {
          class: S(["po-w-4 po-stroke-2", l.value])
        }, null, 8, ["class"]))
      ])) : (r(), u("span", {
        key: 1,
        role: "button",
        class: S(["po-block po-text-sm genie-effect", e.textColor])
      }, v(e.label), 3))
    ]));
  }
}), p1 = { key: 0 }, c1 = {
  name: "Rufiyaa"
}, Z0 = /* @__PURE__ */ Object.assign(c1, {
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
    return (o, l) => (r(), u("span", null, [
      e.amount !== null ? (r(), u("span", p1, v(t(e.amount)), 1)) : m("", !0)
    ]));
  }
}), d1 = {
  name: "PoHeading"
}, K0 = /* @__PURE__ */ Object.assign(d1, {
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
    return (t, o) => (r(), D(de(e.type), { class: "po-text-base po-text-slate-600 po-font-semibold" }, {
      default: T(() => [
        Z(v(e.text), 1)
      ]),
      _: 1
    }));
  }
});
function f1(e, t) {
  if (!e)
    return;
  const o = (l) => {
    l.target !== e.value && l.composedPath().includes(e.value) || typeof t == "function" && t();
  };
  return H(() => {
    window.addEventListener("click", o);
  }), Ke(() => {
    window.removeEventListener("click", o);
  }), { listener: o };
}
const h1 = ["for"], m1 = { class: "po-capitalize" }, v1 = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, g1 = ["title"], b1 = { class: "po-relative po-mt-1" }, y1 = {
  key: 0,
  class: "po-shrink-0 po-pr-1 po-inline-flex po-flex-wrap po-max-h-44"
}, x1 = { class: "po-px-2 po-py-1 po-mb-1 po-mr-1 po-rounded-md po-text-sm po-text-white po-flex po-space-x-2 po-items-center po-bg-mpao-lightblue" }, w1 = ["onClick"], V1 = ["id"], $1 = {
  key: 0,
  class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
}, k1 = ["onClick", "value"], _1 = {
  class: /* @__PURE__ */ S(["po-block po-truncate"])
}, C1 = ["id"], S1 = ["id"], P1 = {
  name: "PoMultiSelect",
  components: { CheckIcon: zl }
}, Y0 = /* @__PURE__ */ Object.assign(P1, {
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
    const n = k(""), a = k([]);
    function i(b) {
      a.value.splice(b, 1), d();
    }
    function p(b) {
      let $ = n.value.split(",");
      b.key === "Enter" && 0 < n.value.length && (b.preventDefault(), $.forEach((y) => {
        let _ = o.items.find(
          (x) => x.name.toLowerCase() === y.trim().toLowerCase()
        );
        _ && a.value.push(_);
      }), n.value = ""), b.key === "Backspace" && n.value.length === 0 && a.value.pop(), d();
    }
    const c = k([]);
    function d() {
      c.value = a.value.map((b) => b.id);
    }
    H(() => {
      document.addEventListener("keydown", p);
    }), ce(() => {
      document.removeEventListener("keydown", p);
    });
    const f = k(!1), h = E(
      () => n.value === "" ? o.items : o.items.filter((b) => b.name.toLowerCase().includes(n.value.toLowerCase()))
    );
    let w = k();
    f1(w, () => {
      f.value = !1;
    });
    function V(b) {
      a.value.push(b), n.value = "", d();
    }
    return U(c, () => {
      t("update:modelValue", c.value);
    }), (b, $) => (r(), u("div", {
      ref_key: "multiSelectComponentRef",
      ref: w,
      class: S(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      s("label", {
        for: e.id,
        class: S([
          "po-text-sm po-font-medium po-flex po-items-center po-space-x-1",
          { "po-text-red-500": e.hasError },
          { "po-text-slate-700": !e.hasError }
        ])
      }, [
        s("span", m1, v(e.label), 1),
        e.required ? (r(), u("span", v1, "*")) : m("", !0),
        e.info !== null ? (r(), u("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          C(g(sl), { class: "po-fill-current" })
        ], 8, g1)) : m("", !0)
      ], 10, h1),
      s("div", b1, [
        s("div", {
          class: S([
            "po-border po-p-1 po-min-h-[2.38rem] po-flex po-flex-wrap po-items-center focus-within:po-border-mpao-lightblue po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white sm:po-text-sm",
            l()
          ])
        }, [
          a.value.length > 0 ? (r(), u("div", y1, [
            (r(!0), u(z, null, M(a.value, (y, _) => (r(), u("span", x1, [
              s("span", null, v(y.name), 1),
              s("span", {
                onClick: () => i(_),
                class: "po-rounded-full po-bg-white po-flex po-items-center po-justify-center po-w-4 po-h-4 po-cursor-pointer"
              }, [
                C(g(Ft), { class: "po-w-3 po-fill-mpao-lightblue" })
              ], 8, w1)
            ]))), 256))
          ])) : m("", !0),
          ze(s("input", {
            id: e.id,
            "onUpdate:modelValue": $[0] || ($[0] = (y) => n.value = y),
            onFocus: $[1] || ($[1] = () => f.value = !0),
            class: "po-border-0 po-outline-none po-ring-0 po-grow"
          }, null, 40, V1), [
            [We, n.value]
          ])
        ], 2),
        f.value ? (r(), u("ul", $1, [
          (r(!0), u(z, null, M(g(h), (y) => (r(), u("li", {
            onClick: () => V(y),
            key: y.id,
            value: y.id,
            class: S([
              "po-relative po-select-none po-py-2 hover:po-bg-mpao-lightblue hover:po-text-white po-cursor-pointer po-pl-3 po-pr-9"
            ])
          }, [
            s("span", _1, v(y.name), 1)
          ], 8, k1))), 128))
        ])) : m("", !0)
      ]),
      e.message !== null ? (r(), u("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, v(e.message), 9, C1)) : m("", !0),
      e.hasError && e.errorMessage !== null ? (r(), u("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-center po-space-x-1",
        id: `${e.id}-error`
      }, [
        C(g(or), { class: "po-fill-current po-w-4" }),
        s("span", null, v(e.errorMessage), 1)
      ], 8, S1)) : m("", !0)
    ], 2));
  }
}), O1 = { class: "po-flex po-pl-5" }, E1 = /* @__PURE__ */ s("div", { class: "po-shrink-0 po-flex po-flex-col" }, [
  /* @__PURE__ */ s("div", { class: "po-w-[2px] po-shrink-0 po-h-10" }),
  /* @__PURE__ */ s("div", { class: "po-bg-gradient-to-t po-from-orange-400 po-via-red-300 po-to-blue-500 po-w-[2px] po-grow" }),
  /* @__PURE__ */ s("div", { class: "po-w-[2px] po-shrink-0 po-h-12" })
], -1), L1 = { class: "po-grow po-pl-5 po-pt-5 po-space-y-3" }, T1 = ["onClick"], z1 = { class: "-po-mt-1 po-flex po-space-x-3 po-items-center" }, D1 = { class: "po-block po-text-xs po-text-slate-400" }, B1 = { class: "po-text-xs po-text-slate-500 po-pt-1" }, M1 = {
  name: "PoTimeline"
}, Q0 = /* @__PURE__ */ Object.assign(M1, {
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
    return (o, l) => (r(), u("div", O1, [
      E1,
      s("div", L1, [
        (r(!0), u(z, null, M(e.timeline, (n) => (r(), u("div", {
          class: S(["po-px-2 po-pt-2 po-pb-6 po-relative po-group", [{ "po-cursor-pointer": e.clickable }]]),
          onClick: (a) => o.$emit("button-click", n)
        }, [
          s("span", {
            class: S(["po-rounded-full po-absolute po-flex po-items-center po-justify-center", [
              { "po-w-4 po-h-4 -po-left-[1.8rem] po-bg-blue-400": n.current },
              {
                "po-w-3 po-h-3 -po-left-[1.68rem] po-bg-green-400": !n.current
              }
            ]])
          }, [
            s("span", {
              class: S(["po-rounded-full po-bg-white", [
                { "po-w-2 po-h-2": n.current },
                { "po-w-1 po-h-1": !n.current }
              ]])
            }, null, 2)
          ], 2),
          s("div", null, [
            s("div", z1, [
              s("h4", {
                class: S(["po-text-sm po-text-slate-600 po-font-medium", [{ "group-hover:po-text-mpao-lightblue": e.clickable }]])
              }, v(n.label), 3),
              s("span", D1, v(g($l)(n.date)), 1)
            ]),
            s("p", B1, v(n.description), 1)
          ])
        ], 10, T1))), 256))
      ])
    ]));
  }
}), A1 = {
  name: "PoTableCheckbox"
}, X0 = /* @__PURE__ */ Object.assign(A1, {
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
    return (o, l) => (r(), u(z, null, [
      e.isChecked ? (r(), D(g(oo), {
        key: 0,
        onClick: l[0] || (l[0] = ae(() => o.$emit("checkboxClicked", e.itemId), ["prevent"])),
        class: "po-w-6 po-fill-mpao-lightblue"
      })) : m("", !0),
      e.disabled ? (r(), D(g(oo), {
        key: 1,
        class: "po-w-6 po-fill-slate-400"
      })) : m("", !0),
      !e.isChecked && !e.disabled ? (r(), u("span", {
        key: 2,
        onClick: l[1] || (l[1] = ae(() => o.$emit("checkboxClicked", e.itemId), ["prevent"])),
        class: "po-h-5 po-w-5 po-rounded-full po-border-2 po-ml-[2px] po-block po-border-slate-300"
      })) : m("", !0)
    ], 64));
  }
}), j1 = { class: "po-p-4" }, N1 = { class: "po-flex po-items-start po-space-x-3" }, I1 = /* @__PURE__ */ s("span", { class: "po-sr-only" }, "Action icon", -1), F1 = { class: "po-w-0 po-flex-1 po-text-sm po-font-medium po-text-gray-400" }, R1 = { class: "po-ml-4 po-flex po-flex-shrink-0" }, H1 = /* @__PURE__ */ s("span", { class: "po-sr-only" }, "Close", -1), q1 = {
  name: "PoToast"
}, J0 = /* @__PURE__ */ Object.assign(q1, {
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
    const o = e, { show: l } = ve(o), n = k(!1);
    U(l, () => {
      n.value = l.value;
    });
    function a() {
      n.value = !1, t("toast-closed", !0);
    }
    setTimeout(() => {
      a();
    }, o.hideIn);
    const i = E(() => o.message === "" && o.actionType !== "" ? o.actionType === "success" ? "Saved Successfully!" : o.actionType === "danger" ? "Item deleted!" : o.actionType === "warn" ? "Attention needed!" : "Wrong action" : o.message);
    return (p, c) => (r(), D(Ge, { to: "#po-notifications-alert" }, [
      C(Ve, {
        "enter-active-class": "po-transform po-ease-out po-duration-300 po-transition",
        "enter-from-class": "po-translate-y-2 po-opacity-0 sm:po-translate-y-0 sm:po-translate-x-2",
        "enter-to-class": "po-translate-y-0 po-opacity-100 sm:po-translate-x-0",
        "leave-active-class": "po-transition po-ease-in po-duration-100",
        "leave-from-class": "po-opacity-100",
        "leave-to-class": "po-opacity-0"
      }, {
        default: T(() => [
          n.value ? (r(), u("div", {
            key: 0,
            class: S(["po-pointer-events-auto po-w-full po-overflow-hidden po-rounded-lg po-bg-gray-900 po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5", [
              { "po-max-w-[260px]": e.size === "sm" },
              { "po-max-w-[360px]": e.size === "lg" },
              { "po-max-w-[560px]": e.size === "xl" }
            ]])
          }, [
            s("div", j1, [
              s("div", N1, [
                e.actionType !== "" ? (r(), u("div", {
                  key: 0,
                  class: S(["po-inline-flex po-items-center po-justify-center po-flex-shrink-0 po-w-6 po-h-6 po-rounded-lg", [
                    {
                      "po-bg-mpao-green po-text-green-100": e.actionType === "success"
                    },
                    { "po-bg-mpao-red po-text-red-100": e.actionType === "danger" },
                    {
                      "po-bg-mpao-orange po-text-orange-100": e.actionType === "warn"
                    }
                  ]])
                }, [
                  e.actionType === "success" ? (r(), D(g(oa), {
                    key: 0,
                    class: "po-w-4 po-h-4"
                  })) : m("", !0),
                  e.actionType === "danger" ? (r(), D(g(sa), {
                    key: 1,
                    class: "po-w-4 po-h-4"
                  })) : m("", !0),
                  e.actionType === "warn" ? (r(), D(g(Qo), {
                    key: 2,
                    class: "po-w-4 po-h-4"
                  })) : m("", !0),
                  I1
                ], 2)) : m("", !0),
                s("p", F1, v(g(i)), 1),
                s("div", R1, [
                  s("button", {
                    type: "button",
                    onClick: a,
                    class: "po-inline-flex po-rounded-md po-bg-gray-900 po-text-gray-400 hover:po-text-gray-300 hover:po-bg-gray-700 po-transition-colors po-duration-150 po-ease-out focus:po-outline-none focus:po-ring-2 focus:po-ring-indigo-500 focus:po-ring-offset-2"
                  }, [
                    H1,
                    C(g(Ft), {
                      class: "po-h-5 po-w-5",
                      "aria-hidden": "true"
                    })
                  ])
                ])
              ])
            ])
          ], 2)) : m("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), U1 = ["for"], W1 = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, G1 = ["title"], Z1 = { class: "po-relative po-mt-1" }, K1 = {
  key: 1,
  class: "po-absolute po-top-0 po-left-0 po-right-0 po-bottom-0 po-overflow-hidden po-bg-white po-rounded-md po-border po-border-slate-300 po-flex po-items-center"
}, Y1 = { class: "po-grow" }, Q1 = ["id"], X1 = {
  key: 0,
  class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
}, J1 = ["onClick"], e0 = {
  key: 0,
  class: "po-text-sm po-text-slate-600 po-p-4 po-block"
}, t0 = {
  key: 1,
  class: "po-mt-2 po-text-sm po-text-slate-500",
  id: "-description"
}, o0 = {
  key: 2,
  class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
  id: "-error"
}, l0 = {
  name: "PoSelectApi",
  components: { XMarkIcon: Ye }
}, e4 = /* @__PURE__ */ Object.assign(l0, {
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
    }
  },
  emits: ["search", "selected", "loadmore"],
  setup(e, { emit: t }) {
    const o = e, l = k(null), n = k(!1), a = k([]);
    U(o, (b, $) => {
      a.value = o.options;
    }), E(() => {
      if (l.value) {
        const b = document.querySelector(".shell-content--area"), { top: $ } = b.getBoundingClientRect(), y = b.scrollTop, { top: _, left: x, width: P } = l.value.getBoundingClientRect();
        return { relativeTop: _ - $ + y, left: x, width: P };
      }
    });
    const i = k(null);
    k(null);
    const p = (b) => {
      !i.value.contains(b.target) && !l.value.contains(b.target) && (n.value = !1);
    }, c = k("");
    H(() => {
      o.id === "" ? c.value = o.label.replace(/\s/g, "") + "-" + Date.now() + "-selectapi-" + Math.floor(Math.random() * 9e3) : c.value = o.id, document.addEventListener("click", p);
    }), Ke(() => {
      document.removeEventListener("click", p);
    });
    const d = k();
    function f() {
      t("search", d.value);
    }
    const h = k(null);
    function w(b) {
      h.value = b, t("selected", b), n.value = !1;
    }
    function V() {
      t("loadmore", !0);
    }
    return (b, $) => (r(), u("div", {
      ref_key: "containerRef",
      ref: i,
      class: S(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      s("label", {
        for: c.value,
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700"
      }, [
        s("span", null, v(e.label), 1),
        e.required ? (r(), u("span", W1, "*")) : m("", !0),
        e.info !== null ? (r(), u("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          C(g(It), { class: "po-fill-current" })
        ], 8, G1)) : m("", !0)
      ], 8, U1),
      s("div", Z1, [
        s("div", null, [
          e.loading ? (r(), D(jt, {
            key: 0,
            class: "po-right-0 po-top-4",
            absolute: !0
          })) : m("", !0),
          h.value !== null ? (r(), u("div", K1, [
            s("div", Y1, [
              R(b.$slots, "selectedOption", Le(Te(h.value)), () => [
                Z(v(h.value), 1)
              ])
            ]),
            s("span", {
              class: "po-shrink-0 po-p-1 po-cursor-pointer",
              onClick: $[0] || ($[0] = (y) => {
                h.value = null, d.value = "";
              })
            }, [
              C(g(Ye), { class: "po-w-4 po-stroke-2 po-stroke-slate-400" })
            ])
          ])) : m("", !0),
          ze(s("input", {
            type: "text",
            name: "",
            id: c.value,
            ref_key: "selectBox",
            ref: l,
            "onUpdate:modelValue": $[1] || ($[1] = (y) => d.value = y),
            onInput: f,
            onFocus: $[2] || ($[2] = (y) => n.value = !0),
            class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm"
          }, null, 40, Q1), [
            [We, d.value]
          ])
        ]),
        n.value && a.value.length > 0 || n.value && e.emptyMessage ? (r(), u("div", X1, [
          a.value && a.value.length > 0 ? (r(), u(z, { key: 0 }, [
            (r(!0), u(z, null, M(a.value, (y) => (r(), u("div", {
              onClick: (_) => w(y)
            }, [
              R(b.$slots, "option", Le(Te(y)), () => [
                Z(v(y), 1)
              ])
            ], 8, J1))), 256)),
            e.showMoreBtn ? (r(), u("span", {
              key: 0,
              role: "button",
              onClick: V,
              class: "po-text-sm po-text-semibold po-text-mpao-lightblue po-block po-text-center po-py-2 hover:po-bg-slate-50 po-transition-colors po-duration-150 po-ease-out"
            }, "More")) : m("", !0)
          ], 64)) : (r(), u(z, { key: 1 }, [
            e.emptyMessage ? (r(), u("span", e0, v(e.emptyMessage), 1)) : m("", !0)
          ], 64))
        ])) : m("", !0),
        e.message !== null ? (r(), u("p", t0, v(e.message), 1)) : m("", !0),
        e.errorMessage !== null ? (r(), u("p", o0, [
          s("span", null, v(e.errorMessage), 1)
        ])) : m("", !0)
      ])
    ], 2));
  }
}), n0 = { class: "po-bg-blue-300/20 po-border po-border-blue-200 po-p-3 po-mb-5 po-rounded-md po-text-sm sm:po-space-x-2 po-flex po-items-center po-flex-wrap" }, s0 = { class: "po-text-blue-500" }, a0 = {
  name: "PoMessage"
}, t4 = /* @__PURE__ */ Object.assign(a0, {
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
    return (o, l) => (r(), u("div", n0, [
      s("span", s0, v(e.message), 1),
      e.btnName !== "" ? (r(), u("span", {
        key: 0,
        role: "button",
        onClick: l[0] || (l[0] = (n) => o.$emit("button-click", e.btnAction)),
        class: "po-text-blue-600 po-underline po-font-medium po-text-xs"
      }, v(e.btnName), 1)) : m("", !0)
    ]));
  }
}), r0 = {
  key: 0,
  class: "po-flex md:po-justify-end"
}, i0 = ["onClick"], u0 = { class: "po-text-xl po-font-medium po-text-slate-600 po-flex po-items-center po-space-x-1" }, p0 = {
  name: "PoPageStats"
}, o4 = /* @__PURE__ */ Object.assign(p0, {
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
    return (l, n) => e.stats !== null ? (r(), u("div", r0, [
      s("div", {
        class: S(["po-bg-slate-50 po-shadow-sm po-rounded-xl po-divide-x po-divide-slate-200 po-flex", e.padding])
      }, [
        (r(!0), u(z, null, M(e.stats, (a) => (r(), u("div", {
          class: S(["po-px-4 po-group", { "po-cursor-pointer": e.clickable }]),
          onClick: (i) => l.$emit("stat-click", a)
        }, [
          s("span", u0, [
            a.icon ? (r(), u("span", {
              key: 0,
              class: S(["po-w-5 po-h-5", o(a)])
            }, [
              (r(), D(de(a.icon)))
            ], 2)) : m("", !0),
            s("span", {
              class: S(["po-text-xl po-font-medium po-text-slate-600", { "group-hover:po-text-mpao-lightblue": e.clickable }])
            }, v(a.value), 3)
          ]),
          s("span", {
            class: S(["po-text-sm po-text-slate-500 po-block", { "group-hover:po-text-mpao-lightblue": e.clickable }])
          }, v(a.label), 3)
        ], 10, i0))), 256))
      ], 2)
    ])) : m("", !0);
  }
});
export {
  b0 as PoActionBar,
  A0 as PoAlert,
  on as PoAppIcon,
  hs as PoAppTray,
  Nt as PoButton,
  y0 as PoCard,
  x0 as PoCardSearch,
  H0 as PoCardTabs,
  z0 as PoChatLogItem,
  P0 as PoCheckbox,
  M0 as PoCommandPalette,
  R0 as PoConsent,
  I0 as PoContentArea,
  W0 as PoDRStatus,
  qi as PoDescriptionList,
  N0 as PoDownloadFileList,
  $0 as PoDynamicTable,
  U0 as PoEmpty,
  O0 as PoFooter,
  E0 as PoFormStatusMessage,
  K0 as PoHeading,
  k0 as PoInputField,
  _0 as PoInputFile,
  F0 as PoLoading,
  j0 as PoLogs,
  t4 as PoMessage,
  Ie as PoModal,
  Y0 as PoMultiSelect,
  D0 as PoNotification,
  Cs as PoNotificationHub,
  o4 as PoPageStats,
  w0 as PoPageTitle,
  oi as PoPagination,
  Xs as PoProfileSwitcher,
  L0 as PoRadioInput,
  rn as PoSearchBar,
  S0 as PoSectionMenu,
  e4 as PoSelectApi,
  qa as PoSelectField,
  g0 as PoSidebarDrawer,
  B0 as PoSlideover,
  T0 as PoStatsBlock,
  V0 as PoTable,
  G0 as PoTableAction,
  X0 as PoTableCheckbox,
  q0 as PoTabs,
  dr as PoTextarea,
  Q0 as PoTimeline,
  J0 as PoToast,
  C0 as PoToggle,
  m0 as PoTopBar,
  Z0 as Rufiyaa
};
