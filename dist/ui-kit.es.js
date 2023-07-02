import { openBlock as r, createElementBlock as u, createElementVNode as n, ref as k, toRefs as ve, watch as U, Fragment as z, createVNode as C, unref as b, withCtx as L, renderSlot as F, createBlock as D, resolveDynamicComponent as de, createCommentVNode as v, computed as O, toDisplayString as m, withDirectives as Me, isRef as il, withKeys as ul, vModelText as $t, cloneVNode as pl, h as Y, inject as ue, provide as pe, onMounted as H, watchEffect as re, defineComponent as K, onUnmounted as ce, Teleport as Ge, reactive as cl, shallowRef as ao, nextTick as kt, toRaw as xe, normalizeClass as S, renderList as M, Transition as Ve, withModifiers as ae, onBeforeMount as dl, onBeforeUpdate as fl, onUpdated as ro, mergeProps as be, createTextVNode as G, pushScopeId as hl, popScopeId as ml, withScopeId as vl, markRaw as gl, shallowReactive as bl, resolveComponent as io, resolveDirective as yl, normalizeStyle as Ze, toHandlers as xl, normalizeProps as Le, guardReactiveProps as Te, onBeforeUnmount as Ke, vModelCheckbox as wl, createStaticVNode as Vl } from "vue";
import { f as qt, a as $l } from "./FormatMoney-edf23aad.mjs";
function kl(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    n("path", {
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
    n("path", {
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
    n("path", {
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
    n("path", {
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
    n("path", {
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
    n("path", {
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
    n("path", {
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
    n("path", {
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
    n("path", {
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
    n("path", {
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
    n("path", {
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
    n("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 4.5l7.5 7.5-7.5 7.5"
    })
  ]);
}
function ft(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    n("path", {
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
    n("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
    }),
    n("path", {
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
    n("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
    })
  ]);
}
function _t(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    n("path", {
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
    n("path", {
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
    n("path", {
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
    n("path", {
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
    n("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
    })
  ]);
}
function Ut(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    n("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
    })
  ]);
}
function Ae(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    n("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6 18L18 6M6 6l12 12"
    })
  ]);
}
const Fl = /* @__PURE__ */ n("div", {
  "aria-live": "assertive",
  class: "po-pointer-events-none po-fixed po-inset-0 po-flex po-items-start po-px-4 po-py-6 sm:po-p-6 po-z-[60]"
}, [
  /* @__PURE__ */ n("div", {
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
}, v0 = /* @__PURE__ */ Object.assign(Kl, {
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
    const o = e, l = k(""), s = k(""), { avatar: a, logo: i } = ve(o);
    U(a, () => {
      l.value = a.value;
    }), U(i, () => {
      s.value = i.value;
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
      n("nav", Rl, [
        n("div", Hl, [
          n("label", ql, [
            C(b(Sl), { class: "po-w-6 po-fill-current" })
          ])
        ]),
        n("div", Ul, [
          n("div", Wl, [
            C(b(os), { "app-name": e.appName }, {
              icon: L(() => [
                F(f.$slots, "appIcon", {}, () => [
                  e.appIcon ? (r(), D(de(e.appIcon), { key: 0 })) : v("", !0)
                ])
              ]),
              _: 3
            }, 8, ["app-name"]),
            e.hasSearch ? (r(), D(b(rs), {
              key: 0,
              onQuery: c,
              onOnClear: d,
              "current-query": e.currentQuery
            }, null, 8, ["current-query"])) : v("", !0),
            n("div", Gl, [
              e.hasSearch ? (r(), u("span", Zl, [
                C(b(_t), { class: "po-stroke-current" })
              ])) : v("", !0),
              C(b(Cn), {
                notifications: e.notifications,
                "has-new-notifications": e.hasNewNotifications
              }, null, 8, ["notifications", "has-new-notifications"]),
              C(b(hn), {
                "app-list": e.appList,
                "open-in-new-tab": !0
              }, null, 8, ["app-list"]),
              C(b(Xn), {
                "user-object": e.userObject,
                avatar: l.value,
                logo: s.value,
                onButtonClick: p
              }, null, 8, ["user-object", "avatar", "logo"])
            ])
          ])
        ])
      ])
    ], 64));
  }
}), Ql = { class: "po-flex po-items-center po-justify-center po-space-x-3" }, Yl = { class: "po-w-8 po-text-slate-100 app-icon" }, Xl = { class: "po-font-light po-text-lg po-text-slate-100" }, Jl = { class: "po-hidden md:po-block" }, es = { class: "po-block md:po-hidden" }, ts = {
  name: "PoAppIcon"
}, os = /* @__PURE__ */ Object.assign(ts, {
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
    const t = e, o = O(() => {
      let l = t.appName.match(/\b[A-Z]/g).join("");
      return l.length === 1 ? t.appName.substring(0, 3) : l;
    });
    return (l, s) => (r(), u("div", Ql, [
      n("div", Yl, [
        F(l.$slots, "icon")
      ]),
      n("span", Xl, [
        n("span", Jl, m(e.appName), 1),
        n("span", es, m(b(o)), 1)
      ])
    ]));
  }
}), ls = { class: "po-flex-grow po-hidden po-relative md:po-block" }, ss = ["placeholder", "onKeyup"], ns = { class: "po-absolute po-inset-y-0 po-left-0 po-flex po-items-center po-pl-3 po-pointer-events-none po-transition-all po-ease-linear po-duration-100 po-text-slate-400 po-origin-center peer-hover/search:po-scale-105 peer-focus/search:po-text-slate-100" }, as = {
  name: "PoSearchBar"
}, rs = /* @__PURE__ */ Object.assign(as, {
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
    const l = (s) => {
      t("query", o.value);
    };
    return U(o, async (s, a) => {
      s === "" && t("onClear", !0);
    }), (s, a) => (r(), u("div", ls, [
      Me(n("input", {
        "onUpdate:modelValue": a[0] || (a[0] = (i) => il(o) ? o.value = i : o = i),
        type: "text",
        id: "main-search",
        placeholder: e.placeholder,
        onKeyup: ul(l, ["enter"]),
        class: "peer/search po-bg-transparent po-border po-border-transparent po-text-slate-100 po-text-sm po-rounded-md po-ring-0 po-outline-none focus:po-outline-none focus:po-ring-0 po-transition-colors po-ease-linear po-duration-100 po-block po-w-full po-pl-10 po-p-2.5 po-appearance-none focus:po-border-slate-400 hover:po-border-slate-600"
      }, null, 40, ss), [
        [$t, b(o)]
      ]),
      n("div", ns, [
        C(b(_t), { class: "po-w-5 po-h-5 po-stroke-current" })
      ])
    ]));
  }
});
function ie(e, t, ...o) {
  if (e in t) {
    let s = t[e];
    return typeof s == "function" ? s(...o) : s;
  }
  let l = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((s) => `"${s}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(l, ie), l;
}
var ge = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(ge || {}), we = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(we || {});
function Q({ visible: e = !0, features: t = 0, ourProps: o, theirProps: l, ...s }) {
  var a;
  let i = co(l, o), p = Object.assign(s, { props: i });
  if (e || t & 2 && i.static)
    return rt(p);
  if (t & 1) {
    let c = (a = i.unmount) == null || a ? 0 : 1;
    return ie(c, { [0]() {
      return null;
    }, [1]() {
      return rt({ ...s, props: { ...i, hidden: !0, style: { display: "none" } } });
    } });
  }
  return rt(p);
}
function rt({ props: e, attrs: t, slots: o, slot: l, name: s }) {
  var a, i;
  let { as: p, ...c } = Qe(e, ["unmount", "static"]), d = (a = o.default) == null ? void 0 : a.call(o, l), f = {};
  if (l) {
    let h = !1, V = [];
    for (let [w, y] of Object.entries(l))
      typeof y == "boolean" && (h = !0), y === !0 && V.push(w);
    h && (f["data-headlessui-state"] = V.join(" "));
  }
  if (p === "template") {
    if (d = po(d ?? []), Object.keys(c).length > 0 || Object.keys(t).length > 0) {
      let [h, ...V] = d ?? [];
      if (!is(h) || V.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${s} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(c).concat(Object.keys(t)).map((x) => x.trim()).filter((x, g, $) => $.indexOf(x) === g).sort((x, g) => x.localeCompare(g)).map((x) => `  - ${x}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((x) => `  - ${x}`).join(`
`)].join(`
`));
      let w = co((i = h.props) != null ? i : {}, c), y = pl(h, w);
      for (let x in w)
        x.startsWith("on") && (y.props || (y.props = {}), y.props[x] = w[x]);
      return y;
    }
    return Array.isArray(d) && d.length === 1 ? d[0] : d;
  }
  return Y(p, Object.assign({}, c, f), { default: () => d });
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
    for (let s in l)
      s.startsWith("on") && typeof l[s] == "function" ? (o[s] != null || (o[s] = []), o[s].push(l[s])) : t[s] = l[s];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(o).map((l) => [l, void 0])));
  for (let l in o)
    Object.assign(t, { [l](s, ...a) {
      let i = o[l];
      for (let p of i) {
        if (s instanceof Event && s.defaultPrevented)
          return;
        p(s, ...a);
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
function is(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let us = 0;
function ps() {
  return ++us;
}
function ne() {
  return ps();
}
var te = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(te || {});
function E(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let ho = Symbol("Context");
var ee = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(ee || {});
function cs() {
  return ze() !== null;
}
function ze() {
  return ue(ho, null);
}
function Ct(e) {
  pe(ho, e);
}
function Wt(e, t) {
  if (e)
    return e;
  let o = t ?? "button";
  if (typeof o == "string" && o.toLowerCase() === "button")
    return "button";
}
function St(e, t) {
  let o = k(Wt(e.value.type, e.value.as));
  return H(() => {
    o.value = Wt(e.value.type, e.value.as);
  }), re(() => {
    var l;
    o.value || E(t) && E(t) instanceof HTMLButtonElement && !((l = E(t)) != null && l.hasAttribute("type")) && (o.value = "button");
  }), o;
}
var ds = Object.defineProperty, fs = (e, t, o) => t in e ? ds(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, Gt = (e, t, o) => (fs(e, typeof t != "symbol" ? t + "" : t, o), o);
let hs = class {
  constructor() {
    Gt(this, "current", this.detect()), Gt(this, "currentId", 0);
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
}, je = new hs();
function me(e) {
  if (je.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = E(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
function ms({ container: e, accept: t, walk: o, enabled: l }) {
  re(() => {
    let s = e.value;
    if (!s || l !== void 0 && !l.value)
      return;
    let a = me(e);
    if (!a)
      return;
    let i = Object.assign((c) => t(c), { acceptNode: t }), p = a.createTreeWalker(s, NodeFilter.SHOW_ELEMENT, i, !1);
    for (; p.nextNode(); )
      o(p.currentNode);
  });
}
let ht = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var le = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(le || {}), Ee = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Ee || {}), vs = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(vs || {});
function Ye(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(ht)).sort((t, o) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (o.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Pt = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Pt || {});
function mo(e, t = 0) {
  var o;
  return e === ((o = me(e)) == null ? void 0 : o.body) ? !1 : ie(t, { [0]() {
    return e.matches(ht);
  }, [1]() {
    let l = e;
    for (; l !== null; ) {
      if (l.matches(ht))
        return !0;
      l = l.parentElement;
    }
    return !1;
  } });
}
function Oe(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let gs = ["textarea", "input"].join(",");
function bs(e) {
  var t, o;
  return (o = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, gs)) != null ? o : !1;
}
function vo(e, t = (o) => o) {
  return e.slice().sort((o, l) => {
    let s = t(o), a = t(l);
    if (s === null || a === null)
      return 0;
    let i = s.compareDocumentPosition(a);
    return i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function fe(e, t, { sorted: o = !0, relativeTo: l = null, skipElements: s = [] } = {}) {
  var a;
  let i = (a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? a : document, p = Array.isArray(e) ? o ? vo(e) : e : Ye(e);
  s.length > 0 && p.length > 1 && (p = p.filter((y) => !s.includes(y))), l = l ?? i.activeElement;
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
  })(), f = t & 32 ? { preventScroll: !0 } : {}, h = 0, V = p.length, w;
  do {
    if (h >= V || h + V <= 0)
      return 0;
    let y = d + h;
    if (t & 16)
      y = (y + V) % V;
    else {
      if (y < 0)
        return 3;
      if (y >= V)
        return 1;
    }
    w = p[y], w == null || w.focus(f), h += c;
  } while (w !== i.activeElement);
  return t & 6 && bs(w) && w.select(), w.hasAttribute("tabindex") || w.setAttribute("tabindex", "0"), 2;
}
function it(e, t, o) {
  je.isServer || re((l) => {
    document.addEventListener(e, t, o), l(() => document.removeEventListener(e, t, o));
  });
}
function go(e, t, o = O(() => !0)) {
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
      let f = d instanceof HTMLElement ? d : E(d);
      if (f != null && f.contains(p) || a.composed && a.composedPath().includes(f))
        return;
    }
    return !mo(p, Pt.Loose) && p.tabIndex !== -1 && a.preventDefault(), t(a, p);
  }
  let s = k(null);
  it("mousedown", (a) => {
    var i, p;
    o.value && (s.value = ((p = (i = a.composedPath) == null ? void 0 : i.call(a)) == null ? void 0 : p[0]) || a.target);
  }, !0), it("click", (a) => {
    s.value && (l(a, () => s.value), s.value = null);
  }, !0), it("blur", (a) => l(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var ye = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(ye || {});
let $e = K({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: o }) {
  return () => {
    let { features: l, ...s } = e, a = { "aria-hidden": (l & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(l & 4) === 4 && (l & 2) !== 2 && { display: "none" } } };
    return Q({ ourProps: a, theirProps: s, slot: {}, attrs: o, slots: t, name: "Hidden" });
  };
} });
function bo(e = {}, t = null, o = []) {
  for (let [l, s] of Object.entries(e))
    xo(o, yo(t, l), s);
  return o;
}
function yo(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function xo(e, t, o) {
  if (Array.isArray(o))
    for (let [l, s] of o.entries())
      xo(e, yo(t, l.toString()), s);
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
  let l = k(o == null ? void 0 : o.value), s = O(() => e.value !== void 0);
  return [O(() => s.value ? e.value : l.value), function(a) {
    return s.value || (l.value = a), t == null ? void 0 : t(a);
  }];
}
function ys() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function xs(e, t, o) {
  je.isServer || re((l) => {
    window.addEventListener(e, t, o), l(() => window.removeEventListener(e, t, o));
  });
}
var he = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(he || {});
function Ot() {
  let e = k(0);
  return xs("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Et(e, t, o, l) {
  je.isServer || re((s) => {
    e = e ?? window, e.addEventListener(t, o, l), s(() => e.removeEventListener(t, o, l));
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
    let l = E(o);
    l instanceof HTMLElement && t.add(l);
  }
  return t;
}
var _o = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(_o || {});
let De = Object.assign(K({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: k(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: l }) {
  let s = k(null);
  l({ el: s, $el: s });
  let a = O(() => me(s)), i = k(!1);
  H(() => i.value = !0), ce(() => i.value = !1), Vs({ ownerDocument: a }, O(() => i.value && Boolean(e.features & 16)));
  let p = $s({ ownerDocument: a, container: s, initialFocus: O(() => e.initialFocus) }, O(() => i.value && Boolean(e.features & 2)));
  ks({ ownerDocument: a, container: s, containers: e.containers, previousActiveElement: p }, O(() => i.value && Boolean(e.features & 8)));
  let c = Ot();
  function d(w) {
    let y = E(s);
    y && ((x) => x())(() => {
      ie(c.value, { [he.Forwards]: () => {
        fe(y, le.First, { skipElements: [w.relatedTarget] });
      }, [he.Backwards]: () => {
        fe(y, le.Last, { skipElements: [w.relatedTarget] });
      } });
    });
  }
  let f = k(!1);
  function h(w) {
    w.key === "Tab" && (f.value = !0, requestAnimationFrame(() => {
      f.value = !1;
    }));
  }
  function V(w) {
    if (!i.value)
      return;
    let y = ko(e.containers);
    E(s) instanceof HTMLElement && y.add(E(s));
    let x = w.relatedTarget;
    x instanceof HTMLElement && x.dataset.headlessuiFocusGuard !== "true" && (Co(y, x) || (f.value ? fe(E(s), ie(c.value, { [he.Forwards]: () => le.Next, [he.Backwards]: () => le.Previous }) | le.WrapAround, { relativeTo: w.target }) : w.target instanceof HTMLElement && Oe(w.target)));
  }
  return () => {
    let w = {}, y = { ref: s, onKeydown: h, onFocusout: V }, { features: x, initialFocus: g, containers: $, ..._ } = e;
    return Y(z, [Boolean(x & 4) && Y($e, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: d, features: ye.Focusable }), Q({ ourProps: y, theirProps: { ...t, ..._ }, slot: w, attrs: t, slots: o, name: "FocusTrap" }), Boolean(x & 4) && Y($e, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: d, features: ye.Focusable })]);
  };
} }), { features: _o }), Se = [];
if (typeof window < "u" && typeof document < "u") {
  let e = function(t) {
    t.target instanceof HTMLElement && t.target !== document.body && Se[0] !== t.target && (Se.unshift(t.target), Se = Se.filter((o) => o != null && o.isConnected), Se.splice(10));
  };
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
}
function ws(e) {
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
function Vs({ ownerDocument: e }, t) {
  let o = ws(t);
  H(() => {
    re(() => {
      var l, s;
      t.value || ((l = e.value) == null ? void 0 : l.activeElement) === ((s = e.value) == null ? void 0 : s.body) && Oe(o());
    }, { flush: "post" });
  }), ce(() => {
    Oe(o());
  });
}
function $s({ ownerDocument: e, container: t, initialFocus: o }, l) {
  let s = k(null), a = k(!1);
  return H(() => a.value = !0), ce(() => a.value = !1), H(() => {
    U([t, o, l], (i, p) => {
      if (i.every((d, f) => (p == null ? void 0 : p[f]) === d) || !l.value)
        return;
      let c = E(t);
      c && $o(() => {
        var d, f;
        if (!a.value)
          return;
        let h = E(o), V = (d = e.value) == null ? void 0 : d.activeElement;
        if (h) {
          if (h === V) {
            s.value = V;
            return;
          }
        } else if (c.contains(V)) {
          s.value = V;
          return;
        }
        h ? Oe(h) : fe(c, le.First | le.NoScroll) === Ee.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), s.value = (f = e.value) == null ? void 0 : f.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), s;
}
function ks({ ownerDocument: e, container: t, containers: o, previousActiveElement: l }, s) {
  var a;
  Et((a = e.value) == null ? void 0 : a.defaultView, "focus", (i) => {
    if (!s.value)
      return;
    let p = ko(o);
    E(t) instanceof HTMLElement && p.add(E(t));
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
let ut = /* @__PURE__ */ new Map(), Be = /* @__PURE__ */ new Map();
function Zt(e, t = k(!0)) {
  re((o) => {
    var l;
    if (!t.value)
      return;
    let s = E(e);
    if (!s)
      return;
    o(function() {
      var i;
      if (!s)
        return;
      let p = (i = Be.get(s)) != null ? i : 1;
      if (p === 1 ? Be.delete(s) : Be.set(s, p - 1), p !== 1)
        return;
      let c = ut.get(s);
      c && (c["aria-hidden"] === null ? s.removeAttribute("aria-hidden") : s.setAttribute("aria-hidden", c["aria-hidden"]), s.inert = c.inert, ut.delete(s));
    });
    let a = (l = Be.get(s)) != null ? l : 0;
    Be.set(s, a + 1), a === 0 && (ut.set(s, { "aria-hidden": s.getAttribute("aria-hidden"), inert: s.inert }), s.setAttribute("aria-hidden", "true"), s.inert = !0);
  });
}
let So = Symbol("ForcePortalRootContext");
function _s() {
  return ue(So, !1);
}
let mt = K({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: o }) {
  return pe(So, e.force), () => {
    let { force: l, ...s } = e;
    return Q({ theirProps: s, ourProps: {}, slot: {}, slots: t, attrs: o, name: "ForcePortalRoot" });
  };
} });
function Cs(e) {
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
  let l = k(null), s = O(() => me(l)), a = _s(), i = ue(Oo, null), p = k(a === !0 || i == null ? Cs(l.value) : i.resolveTarget());
  return re(() => {
    a || i != null && (p.value = i.resolveTarget());
  }), ce(() => {
    var c, d;
    let f = (c = s.value) == null ? void 0 : c.getElementById("headlessui-portal-root");
    f && p.value === f && p.value.children.length <= 0 && ((d = p.value.parentElement) == null || d.removeChild(p.value));
  }), () => {
    if (p.value === null)
      return null;
    let c = { ref: l, "data-headlessui-portal": "" };
    return Y(Ge, { to: p.value }, Q({ ourProps: c, theirProps: e, slot: {}, attrs: o, slots: t, name: "Portal" }));
  };
} }), Oo = Symbol("PortalGroupContext"), Ss = K({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: o }) {
  let l = cl({ resolveTarget() {
    return e.target;
  } });
  return pe(Oo, l), () => {
    let { target: s, ...a } = e;
    return Q({ theirProps: a, ourProps: {}, slot: {}, attrs: t, slots: o, name: "PortalGroup" });
  };
} }), Eo = Symbol("StackContext");
var vt = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(vt || {});
function Ps() {
  return ue(Eo, () => {
  });
}
function Os({ type: e, enabled: t, element: o, onUpdate: l }) {
  let s = Ps();
  function a(...i) {
    l == null || l(...i), s(...i);
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
function Es() {
  let e = ue(Lo, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function Xe({ slot: e = k({}), name: t = "Description", props: o = {} } = {}) {
  let l = k([]);
  function s(a) {
    return l.value.push(a), () => {
      let i = l.value.indexOf(a);
      i !== -1 && l.value.splice(i, 1);
    };
  }
  return pe(Lo, { register: s, slot: e, name: t, props: o }), O(() => l.value.length > 0 ? l.value.join(" ") : void 0);
}
let Ls = K({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${ne()}` } }, setup(e, { attrs: t, slots: o }) {
  let l = Es();
  return H(() => ce(l.register(e.id))), () => {
    let { name: s = "Description", slot: a = k({}), props: i = {} } = l, { id: p, ...c } = e, d = { ...Object.entries(i).reduce((f, [h, V]) => Object.assign(f, { [h]: b(V) }), {}), id: p };
    return Q({ ourProps: d, theirProps: c, slot: a.value, attrs: t, slots: o, name: s });
  };
} });
function Ts(e) {
  let t = ao(e.getSnapshot());
  return ce(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function Je() {
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
    let l = Je();
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
function zs(e, t) {
  let o = e(), l = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return o;
  }, subscribe(s) {
    return l.add(s), () => l.delete(s);
  }, dispatch(s, ...a) {
    let i = t[s].call(o, ...a);
    i && (o = i, l.forEach((p) => p()));
  } };
}
function Ds() {
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
function Bs() {
  if (!ys())
    return {};
  let e;
  return { before() {
    e = window.pageYOffset;
  }, after({ doc: t, d: o, meta: l }) {
    function s(i) {
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
          d && !s(d) && (a = d);
        } catch {
        }
    }, !0), o.addEventListener(t, "touchmove", (i) => {
      i.target instanceof HTMLElement && !s(i.target) && i.preventDefault();
    }, { passive: !1 }), o.add(() => {
      window.scrollTo(0, window.pageYOffset + e), a && a.isConnected && (a.scrollIntoView({ block: "nearest" }), a = null);
    });
  } };
}
function Ms() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function As(e) {
  let t = {};
  for (let o of e)
    Object.assign(t, o(t));
  return t;
}
let Pe = zs(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var o;
  let l = (o = this.get(e)) != null ? o : { doc: e, count: 0, d: Je(), meta: /* @__PURE__ */ new Set() };
  return l.count++, l.meta.add(t), this.set(e, l), this;
}, POP(e, t) {
  let o = this.get(e);
  return o && (o.count--, o.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: o }) {
  let l = { doc: e, d: t, meta: As(o) }, s = [Bs(), Ds(), Ms()];
  s.forEach(({ before: a }) => a == null ? void 0 : a(l)), s.forEach(({ after: a }) => a == null ? void 0 : a(l));
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
    let l = t.get(o.doc) === "hidden", s = o.count !== 0;
    (s && !l || !s && l) && Pe.dispatch(o.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", o), o.count === 0 && Pe.dispatch("TEARDOWN", o);
  }
});
function js(e, t, o) {
  let l = Ts(Pe), s = O(() => {
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
  }, { immediate: !0 }), s;
}
var Ns = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Ns || {});
let gt = Symbol("DialogContext");
function Ne(e) {
  let t = ue(gt, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, Ne), o;
  }
  return t;
}
let He = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", et = K({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: He }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${ne()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: o, slots: l, expose: s }) {
  var a;
  let i = k(!1);
  H(() => {
    i.value = !0;
  });
  let p = k(0), c = ze(), d = O(() => e.open === He && c !== null ? (c.value & ee.Open) === ee.Open : e.open), f = k(null), h = k(null), V = O(() => me(f));
  if (s({ el: f, $el: f }), !(e.open !== He || c !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof d.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${d.value === He ? void 0 : e.open}`);
  let w = O(() => i.value && d.value ? 0 : 1), y = O(() => w.value === 0), x = O(() => p.value > 1), g = ue(gt, null) !== null, $ = O(() => x.value ? "parent" : "leaf"), _ = O(() => c !== null ? (c.value & ee.Closing) === ee.Closing : !1), T = O(() => g || _.value ? !1 : y.value), P = O(() => {
    var A, N, I;
    return (I = Array.from((N = (A = V.value) == null ? void 0 : A.querySelectorAll("body > *")) != null ? N : []).find((oe) => oe.id === "headlessui-portal-root" ? !1 : oe.contains(E(h)) && oe instanceof HTMLElement)) != null ? I : null;
  });
  Zt(P, T);
  let j = O(() => x.value ? !0 : y.value), R = O(() => {
    var A, N, I;
    return (I = Array.from((N = (A = V.value) == null ? void 0 : A.querySelectorAll("[data-headlessui-portal]")) != null ? N : []).find((oe) => oe.contains(E(h)) && oe instanceof HTMLElement)) != null ? I : null;
  });
  Zt(R, j), Os({ type: "Dialog", enabled: O(() => w.value === 0), element: f, onUpdate: (A, N) => {
    if (N === "Dialog")
      return ie(A, { [vt.Add]: () => p.value += 1, [vt.Remove]: () => p.value -= 1 });
  } });
  let J = Xe({ name: "DialogDescription", slot: O(() => ({ open: d.value })) }), W = k(null), X = { titleId: W, panelRef: k(null), dialogState: w, setTitleId(A) {
    W.value !== A && (W.value = A);
  }, close() {
    t("close", !1);
  } };
  pe(gt, X);
  function B() {
    var A, N, I;
    return [...Array.from((N = (A = V.value) == null ? void 0 : A.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? N : []).filter((oe) => !(oe === document.body || oe === document.head || !(oe instanceof HTMLElement) || oe.contains(E(h)) || X.panelRef.value && oe.contains(X.panelRef.value))), (I = X.panelRef.value) != null ? I : f.value];
  }
  let se = O(() => !(!y.value || x.value));
  go(() => B(), (A, N) => {
    X.close(), kt(() => N == null ? void 0 : N.focus());
  }, se);
  let Z = O(() => !(x.value || w.value !== 0));
  Et((a = V.value) == null ? void 0 : a.defaultView, "keydown", (A) => {
    Z.value && (A.defaultPrevented || A.key === te.Escape && (A.preventDefault(), A.stopPropagation(), X.close()));
  });
  let q = O(() => !(_.value || w.value !== 0 || g));
  return js(V, q, (A) => {
    var N;
    return { containers: [...(N = A.containers) != null ? N : [], B] };
  }), re((A) => {
    if (w.value !== 0)
      return;
    let N = E(f);
    if (!N)
      return;
    let I = new ResizeObserver((oe) => {
      for (let Re of oe) {
        let _e = Re.target.getBoundingClientRect();
        _e.x === 0 && _e.y === 0 && _e.width === 0 && _e.height === 0 && X.close();
      }
    });
    I.observe(N), A(() => I.disconnect());
  }), () => {
    let { id: A, open: N, initialFocus: I, ...oe } = e, Re = { ...o, ref: f, id: A, role: "dialog", "aria-modal": w.value === 0 ? !0 : void 0, "aria-labelledby": W.value, "aria-describedby": J.value }, _e = { open: w.value === 0 };
    return Y(mt, { force: !0 }, () => [Y(Po, () => Y(Ss, { target: f.value }, () => Y(mt, { force: !1 }, () => Y(De, { initialFocus: I, containers: B, features: y.value ? ie($.value, { parent: De.features.RestoreFocus, leaf: De.features.All & ~De.features.FocusLock }) : De.features.None }, () => Q({ ourProps: Re, theirProps: oe, slot: _e, attrs: o, slots: l, visible: w.value === 0, features: ge.RenderStrategy | ge.Static, name: "Dialog" }))))), Y($e, { features: ye.Hidden, ref: h })]);
  };
} });
K({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${ne()}` } }, setup(e, { attrs: t, slots: o }) {
  let l = Ne("DialogOverlay");
  function s(a) {
    a.target === a.currentTarget && (a.preventDefault(), a.stopPropagation(), l.close());
  }
  return () => {
    let { id: a, ...i } = e;
    return Q({ ourProps: { id: a, "aria-hidden": !0, onClick: s }, theirProps: i, slot: { open: l.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogOverlay" });
  };
} });
K({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${ne()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: l }) {
  let s = Ne("DialogBackdrop"), a = k(null);
  return l({ el: a, $el: a }), H(() => {
    if (s.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: i, ...p } = e, c = { id: i, ref: a, "aria-hidden": !0 };
    return Y(mt, { force: !0 }, () => Y(Po, () => Q({ ourProps: c, theirProps: { ...t, ...p }, slot: { open: s.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogBackdrop" })));
  };
} });
let tt = K({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${ne()}` } }, setup(e, { attrs: t, slots: o, expose: l }) {
  let s = Ne("DialogPanel");
  l({ el: s.panelRef, $el: s.panelRef });
  function a(i) {
    i.stopPropagation();
  }
  return () => {
    let { id: i, ...p } = e, c = { id: i, ref: s.panelRef, onClick: a };
    return Q({ ourProps: c, theirProps: p, slot: { open: s.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogPanel" });
  };
} }), To = K({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${ne()}` } }, setup(e, { attrs: t, slots: o }) {
  let l = Ne("DialogTitle");
  return H(() => {
    l.setTitleId(e.id), ce(() => l.setTitleId(null));
  }), () => {
    let { id: s, ...a } = e;
    return Q({ ourProps: { id: s }, theirProps: a, slot: { open: l.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogTitle" });
  };
} });
var Is = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Is || {});
let zo = Symbol("DisclosureContext");
function Lt(e) {
  let t = ue(zo, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, Lt), o;
  }
  return t;
}
let Do = Symbol("DisclosurePanelContext");
function Fs() {
  return ue(Do, null);
}
let Kt = K({ name: "Disclosure", props: { as: { type: [Object, String], default: "template" }, defaultOpen: { type: [Boolean], default: !1 } }, setup(e, { slots: t, attrs: o }) {
  let l = k(e.defaultOpen ? 0 : 1), s = k(null), a = k(null), i = { buttonId: k(null), panelId: k(null), disclosureState: l, panel: s, button: a, toggleDisclosure() {
    l.value = ie(l.value, { [0]: 1, [1]: 0 });
  }, closeDisclosure() {
    l.value !== 1 && (l.value = 1);
  }, close(p) {
    i.closeDisclosure();
    let c = (() => p ? p instanceof HTMLElement ? p : p.value instanceof HTMLElement ? E(p) : E(i.button) : E(i.button))();
    c == null || c.focus();
  } };
  return pe(zo, i), Ct(O(() => ie(l.value, { [0]: ee.Open, [1]: ee.Closed }))), () => {
    let { defaultOpen: p, ...c } = e, d = { open: l.value === 0, close: i.close };
    return Q({ theirProps: c, ourProps: {}, slot: d, slots: t, attrs: o, name: "Disclosure" });
  };
} }), Qt = K({ name: "DisclosureButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-disclosure-button-${ne()}` } }, setup(e, { attrs: t, slots: o, expose: l }) {
  let s = Lt("DisclosureButton");
  H(() => {
    s.buttonId.value = e.id;
  }), ce(() => {
    s.buttonId.value = null;
  });
  let a = Fs(), i = O(() => a === null ? !1 : a.value === s.panelId.value), p = k(null);
  l({ el: p, $el: p }), i.value || re(() => {
    s.button.value = p.value;
  });
  let c = St(O(() => ({ as: e.as, type: t.type })), p);
  function d() {
    var V;
    e.disabled || (i.value ? (s.toggleDisclosure(), (V = E(s.button)) == null || V.focus()) : s.toggleDisclosure());
  }
  function f(V) {
    var w;
    if (!e.disabled)
      if (i.value)
        switch (V.key) {
          case te.Space:
          case te.Enter:
            V.preventDefault(), V.stopPropagation(), s.toggleDisclosure(), (w = E(s.button)) == null || w.focus();
            break;
        }
      else
        switch (V.key) {
          case te.Space:
          case te.Enter:
            V.preventDefault(), V.stopPropagation(), s.toggleDisclosure();
            break;
        }
  }
  function h(V) {
    switch (V.key) {
      case te.Space:
        V.preventDefault();
        break;
    }
  }
  return () => {
    let V = { open: s.disclosureState.value === 0 }, { id: w, ...y } = e, x = i.value ? { ref: p, type: c.value, onClick: d, onKeydown: f } : { id: w, ref: p, type: c.value, "aria-expanded": e.disabled ? void 0 : s.disclosureState.value === 0, "aria-controls": E(s.panel) ? s.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onClick: d, onKeydown: f, onKeyup: h };
    return Q({ ourProps: x, theirProps: y, slot: V, attrs: t, slots: o, name: "DisclosureButton" });
  };
} }), Yt = K({ name: "DisclosurePanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-disclosure-panel-${ne()}` } }, setup(e, { attrs: t, slots: o, expose: l }) {
  let s = Lt("DisclosurePanel");
  H(() => {
    s.panelId.value = e.id;
  }), ce(() => {
    s.panelId.value = null;
  }), l({ el: s.panel, $el: s.panel }), pe(Do, s.panelId);
  let a = ze(), i = O(() => a !== null ? (a.value & ee.Open) === ee.Open : s.disclosureState.value === 0);
  return () => {
    let p = { open: s.disclosureState.value === 0, close: s.close }, { id: c, ...d } = e, f = { id: c, ref: s.panel };
    return Q({ ourProps: f, theirProps: d, slot: p, attrs: t, slots: o, features: ge.RenderStrategy | ge.Static, visible: i.value, name: "DisclosurePanel" });
  };
} });
var Rs = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Rs || {});
let Bo = Symbol("PopoverContext");
function ot(e) {
  let t = ue(Bo, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <${lt.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, ot), o;
  }
  return t;
}
let Mo = Symbol("PopoverGroupContext");
function Ao() {
  return ue(Mo, null);
}
let jo = Symbol("PopoverPanelContext");
function Hs() {
  return ue(jo, null);
}
let lt = K({ name: "Popover", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: o, expose: l }) {
  var s;
  let a = k(null);
  l({ el: a, $el: a });
  let i = k(1), p = k(null), c = k(null), d = k(null), f = k(null), h = O(() => me(a)), V = O(() => {
    var _, T;
    if (!E(p) || !E(f))
      return !1;
    for (let B of document.querySelectorAll("body > *"))
      if (Number(B == null ? void 0 : B.contains(E(p))) ^ Number(B == null ? void 0 : B.contains(E(f))))
        return !0;
    let P = Ye(), j = P.indexOf(E(p)), R = (j + P.length - 1) % P.length, J = (j + 1) % P.length, W = P[R], X = P[J];
    return !((_ = E(f)) != null && _.contains(W)) && !((T = E(f)) != null && T.contains(X));
  }), w = { popoverState: i, buttonId: k(null), panelId: k(null), panel: f, button: p, isPortalled: V, beforePanelSentinel: c, afterPanelSentinel: d, togglePopover() {
    i.value = ie(i.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    i.value !== 1 && (i.value = 1);
  }, close(_) {
    w.closePopover();
    let T = (() => _ ? _ instanceof HTMLElement ? _ : _.value instanceof HTMLElement ? E(_) : E(w.button) : E(w.button))();
    T == null || T.focus();
  } };
  pe(Bo, w), Ct(O(() => ie(i.value, { [0]: ee.Open, [1]: ee.Closed })));
  let y = { buttonId: w.buttonId, panelId: w.panelId, close() {
    w.closePopover();
  } }, x = Ao(), g = x == null ? void 0 : x.registerPopover;
  function $() {
    var _, T, P, j;
    return (j = x == null ? void 0 : x.isFocusWithinPopoverGroup()) != null ? j : ((_ = h.value) == null ? void 0 : _.activeElement) && (((T = E(p)) == null ? void 0 : T.contains(h.value.activeElement)) || ((P = E(f)) == null ? void 0 : P.contains(h.value.activeElement)));
  }
  return re(() => g == null ? void 0 : g(y)), Et((s = h.value) == null ? void 0 : s.defaultView, "focus", (_) => {
    var T, P;
    i.value === 0 && ($() || p && f && _.target !== window && ((T = E(w.beforePanelSentinel)) != null && T.contains(_.target) || (P = E(w.afterPanelSentinel)) != null && P.contains(_.target) || w.closePopover()));
  }, !0), go([p, f], (_, T) => {
    var P;
    w.closePopover(), mo(T, Pt.Loose) || (_.preventDefault(), (P = E(p)) == null || P.focus());
  }, O(() => i.value === 0)), () => {
    let _ = { open: i.value === 0, close: w.close };
    return Q({ theirProps: e, ourProps: { ref: a }, slot: _, slots: t, attrs: o, name: "Popover" });
  };
} }), Tt = K({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-popover-button-${ne()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: l }) {
  let s = ot("PopoverButton"), a = O(() => me(s.button));
  l({ el: s.button, $el: s.button }), H(() => {
    s.buttonId.value = e.id;
  }), ce(() => {
    s.buttonId.value = null;
  });
  let i = Ao(), p = i == null ? void 0 : i.closeOthers, c = Hs(), d = O(() => c === null ? !1 : c.value === s.panelId.value), f = k(null), h = `headlessui-focus-sentinel-${ne()}`;
  d.value || re(() => {
    s.button.value = f.value;
  });
  let V = St(O(() => ({ as: e.as, type: t.type })), f);
  function w($) {
    var _, T, P, j, R;
    if (d.value) {
      if (s.popoverState.value === 1)
        return;
      switch ($.key) {
        case te.Space:
        case te.Enter:
          $.preventDefault(), (T = (_ = $.target).click) == null || T.call(_), s.closePopover(), (P = E(s.button)) == null || P.focus();
          break;
      }
    } else
      switch ($.key) {
        case te.Space:
        case te.Enter:
          $.preventDefault(), $.stopPropagation(), s.popoverState.value === 1 && (p == null || p(s.buttonId.value)), s.togglePopover();
          break;
        case te.Escape:
          if (s.popoverState.value !== 0)
            return p == null ? void 0 : p(s.buttonId.value);
          if (!E(s.button) || (j = a.value) != null && j.activeElement && !((R = E(s.button)) != null && R.contains(a.value.activeElement)))
            return;
          $.preventDefault(), $.stopPropagation(), s.closePopover();
          break;
      }
  }
  function y($) {
    d.value || $.key === te.Space && $.preventDefault();
  }
  function x($) {
    var _, T;
    e.disabled || (d.value ? (s.closePopover(), (_ = E(s.button)) == null || _.focus()) : ($.preventDefault(), $.stopPropagation(), s.popoverState.value === 1 && (p == null || p(s.buttonId.value)), s.togglePopover(), (T = E(s.button)) == null || T.focus()));
  }
  function g($) {
    $.preventDefault(), $.stopPropagation();
  }
  return () => {
    let $ = s.popoverState.value === 0, _ = { open: $ }, { id: T, ...P } = e, j = d.value ? { ref: f, type: V.value, onKeydown: w, onClick: x } : { ref: f, id: T, type: V.value, "aria-expanded": e.disabled ? void 0 : s.popoverState.value === 0, "aria-controls": E(s.panel) ? s.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onKeydown: w, onKeyup: y, onClick: x, onMousedown: g }, R = Ot();
    function J() {
      let W = E(s.panel);
      if (!W)
        return;
      function X() {
        ie(R.value, { [he.Forwards]: () => fe(W, le.First), [he.Backwards]: () => fe(W, le.Last) }) === Ee.Error && fe(Ye().filter((B) => B.dataset.headlessuiFocusGuard !== "true"), ie(R.value, { [he.Forwards]: le.Next, [he.Backwards]: le.Previous }), { relativeTo: E(s.button) });
      }
      X();
    }
    return Y(z, [Q({ ourProps: j, theirProps: { ...t, ...P }, slot: _, attrs: t, slots: o, name: "PopoverButton" }), $ && !d.value && s.isPortalled.value && Y($e, { id: h, features: ye.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: J })]);
  };
} });
K({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(e, { attrs: t, slots: o }) {
  let l = ot("PopoverOverlay"), s = `headlessui-popover-overlay-${ne()}`, a = ze(), i = O(() => a !== null ? (a.value & ee.Open) === ee.Open : l.popoverState.value === 0);
  function p() {
    l.closePopover();
  }
  return () => {
    let c = { open: l.popoverState.value === 0 };
    return Q({ ourProps: { id: s, "aria-hidden": !0, onClick: p }, theirProps: e, slot: c, attrs: t, slots: o, features: ge.RenderStrategy | ge.Static, visible: i.value, name: "PopoverOverlay" });
  };
} });
let zt = K({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-popover-panel-${ne()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: l }) {
  let { focus: s } = e, a = ot("PopoverPanel"), i = O(() => me(a.panel)), p = `headlessui-focus-sentinel-before-${ne()}`, c = `headlessui-focus-sentinel-after-${ne()}`;
  l({ el: a.panel, $el: a.panel }), H(() => {
    a.panelId.value = e.id;
  }), ce(() => {
    a.panelId.value = null;
  }), pe(jo, a.panelId), re(() => {
    var g, $;
    if (!s || a.popoverState.value !== 0 || !a.panel)
      return;
    let _ = (g = i.value) == null ? void 0 : g.activeElement;
    ($ = E(a.panel)) != null && $.contains(_) || fe(E(a.panel), le.First);
  });
  let d = ze(), f = O(() => d !== null ? (d.value & ee.Open) === ee.Open : a.popoverState.value === 0);
  function h(g) {
    var $, _;
    switch (g.key) {
      case te.Escape:
        if (a.popoverState.value !== 0 || !E(a.panel) || i.value && !(($ = E(a.panel)) != null && $.contains(i.value.activeElement)))
          return;
        g.preventDefault(), g.stopPropagation(), a.closePopover(), (_ = E(a.button)) == null || _.focus();
        break;
    }
  }
  function V(g) {
    var $, _, T, P, j;
    let R = g.relatedTarget;
    R && E(a.panel) && (($ = E(a.panel)) != null && $.contains(R) || (a.closePopover(), ((T = (_ = E(a.beforePanelSentinel)) == null ? void 0 : _.contains) != null && T.call(_, R) || (j = (P = E(a.afterPanelSentinel)) == null ? void 0 : P.contains) != null && j.call(P, R)) && R.focus({ preventScroll: !0 })));
  }
  let w = Ot();
  function y() {
    let g = E(a.panel);
    if (!g)
      return;
    function $() {
      ie(w.value, { [he.Forwards]: () => {
        var _;
        fe(g, le.First) === Ee.Error && ((_ = E(a.afterPanelSentinel)) == null || _.focus());
      }, [he.Backwards]: () => {
        var _;
        (_ = E(a.button)) == null || _.focus({ preventScroll: !0 });
      } });
    }
    $();
  }
  function x() {
    let g = E(a.panel);
    if (!g)
      return;
    function $() {
      ie(w.value, { [he.Forwards]: () => {
        let _ = E(a.button), T = E(a.panel);
        if (!_)
          return;
        let P = Ye(), j = P.indexOf(_), R = P.slice(0, j + 1), J = [...P.slice(j + 1), ...R];
        for (let W of J.slice())
          if (W.dataset.headlessuiFocusGuard === "true" || T != null && T.contains(W)) {
            let X = J.indexOf(W);
            X !== -1 && J.splice(X, 1);
          }
        fe(J, le.First, { sorted: !1 });
      }, [he.Backwards]: () => {
        var _;
        fe(g, le.Previous) === Ee.Error && ((_ = E(a.button)) == null || _.focus());
      } });
    }
    $();
  }
  return () => {
    let g = { open: a.popoverState.value === 0, close: a.close }, { id: $, focus: _, ...T } = e, P = { ref: a.panel, id: $, onKeydown: h, onFocusout: s && a.popoverState.value === 0 ? V : void 0, tabIndex: -1 };
    return Q({ ourProps: P, theirProps: { ...t, ...T }, attrs: t, slot: g, slots: { ...o, default: (...j) => {
      var R;
      return [Y(z, [f.value && a.isPortalled.value && Y($e, { id: p, ref: a.beforePanelSentinel, features: ye.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: y }), (R = o.default) == null ? void 0 : R.call(o, ...j), f.value && a.isPortalled.value && Y($e, { id: c, ref: a.afterPanelSentinel, features: ye.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: x })])];
    } }, features: ge.RenderStrategy | ge.Static, visible: f.value, name: "PopoverPanel" });
  };
} });
K({ name: "PopoverGroup", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: o, expose: l }) {
  let s = k(null), a = ao([]), i = O(() => me(s));
  l({ el: s, $el: s });
  function p(h) {
    let V = a.value.indexOf(h);
    V !== -1 && a.value.splice(V, 1);
  }
  function c(h) {
    return a.value.push(h), () => {
      p(h);
    };
  }
  function d() {
    var h;
    let V = i.value;
    if (!V)
      return !1;
    let w = V.activeElement;
    return (h = E(s)) != null && h.contains(w) ? !0 : a.value.some((y) => {
      var x, g;
      return ((x = V.getElementById(y.buttonId.value)) == null ? void 0 : x.contains(w)) || ((g = V.getElementById(y.panelId.value)) == null ? void 0 : g.contains(w));
    });
  }
  function f(h) {
    for (let V of a.value)
      V.buttonId.value !== h && V.close();
  }
  return pe(Mo, { registerPopover: c, unregisterPopover: p, isFocusWithinPopoverGroup: d, closeOthers: f }), () => Q({ ourProps: { ref: s }, theirProps: e, slot: {}, attrs: t, slots: o, name: "PopoverGroup" });
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
function Dt({ slot: e = {}, name: t = "Label", props: o = {} } = {}) {
  let l = k([]);
  function s(a) {
    return l.value.push(a), () => {
      let i = l.value.indexOf(a);
      i !== -1 && l.value.splice(i, 1);
    };
  }
  return pe(No, { register: s, slot: e, name: t, props: o }), O(() => l.value.length > 0 ? l.value.join(" ") : void 0);
}
let Fo = K({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-label-${ne()}` } }, setup(e, { slots: t, attrs: o }) {
  let l = Io();
  return H(() => ce(l.register(e.id))), () => {
    let { name: s = "Label", slot: a = {}, props: i = {} } = l, { id: p, passive: c, ...d } = e, f = { ...Object.entries(i).reduce((h, [V, w]) => Object.assign(h, { [V]: b(w) }), {}), id: p };
    return c && (delete f.onClick, delete f.htmlFor, delete d.onClick), Q({ ourProps: f, theirProps: d, slot: a, attrs: o, slots: t, name: s });
  };
} });
function qs(e, t) {
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
let Us = K({ name: "RadioGroup", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "div" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => qs }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-radiogroup-${ne()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: o, slots: l, expose: s }) {
  let a = k(null), i = k([]), p = Dt({ name: "RadioGroupLabel" }), c = Xe({ name: "RadioGroupDescription" });
  s({ el: a, $el: a });
  let [d, f] = Vo(O(() => e.modelValue), (y) => t("update:modelValue", y), O(() => e.defaultValue)), h = { options: i, value: d, disabled: O(() => e.disabled), firstOption: O(() => i.value.find((y) => !y.propsRef.disabled)), containsCheckedOption: O(() => i.value.some((y) => h.compare(xe(y.propsRef.value), xe(e.modelValue)))), compare(y, x) {
    if (typeof e.by == "string") {
      let g = e.by;
      return (y == null ? void 0 : y[g]) === (x == null ? void 0 : x[g]);
    }
    return e.by(y, x);
  }, change(y) {
    var x;
    if (e.disabled || h.compare(xe(d.value), xe(y)))
      return !1;
    let g = (x = i.value.find(($) => h.compare(xe($.propsRef.value), xe(y)))) == null ? void 0 : x.propsRef;
    return g != null && g.disabled ? !1 : (f(y), !0);
  }, registerOption(y) {
    i.value.push(y), i.value = vo(i.value, (x) => x.element);
  }, unregisterOption(y) {
    let x = i.value.findIndex((g) => g.id === y);
    x !== -1 && i.value.splice(x, 1);
  } };
  pe(Ro, h), ms({ container: O(() => E(a)), accept(y) {
    return y.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : y.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(y) {
    y.setAttribute("role", "none");
  } });
  function V(y) {
    if (!a.value || !a.value.contains(y.target))
      return;
    let x = i.value.filter((g) => g.propsRef.disabled === !1).map((g) => g.element);
    switch (y.key) {
      case te.Enter:
        wo(y.currentTarget);
        break;
      case te.ArrowLeft:
      case te.ArrowUp:
        if (y.preventDefault(), y.stopPropagation(), fe(x, le.Previous | le.WrapAround) === Ee.Success) {
          let g = i.value.find(($) => {
            var _;
            return $.element === ((_ = me(a)) == null ? void 0 : _.activeElement);
          });
          g && h.change(g.propsRef.value);
        }
        break;
      case te.ArrowRight:
      case te.ArrowDown:
        if (y.preventDefault(), y.stopPropagation(), fe(x, le.Next | le.WrapAround) === Ee.Success) {
          let g = i.value.find(($) => {
            var _;
            return $.element === ((_ = me($.element)) == null ? void 0 : _.activeElement);
          });
          g && h.change(g.propsRef.value);
        }
        break;
      case te.Space:
        {
          y.preventDefault(), y.stopPropagation();
          let g = i.value.find(($) => {
            var _;
            return $.element === ((_ = me($.element)) == null ? void 0 : _.activeElement);
          });
          g && h.change(g.propsRef.value);
        }
        break;
    }
  }
  let w = O(() => {
    var y;
    return (y = E(a)) == null ? void 0 : y.closest("form");
  });
  return H(() => {
    U([w], () => {
      if (!w.value || e.defaultValue === void 0)
        return;
      function y() {
        h.change(e.defaultValue);
      }
      return w.value.addEventListener("reset", y), () => {
        var x;
        (x = w.value) == null || x.removeEventListener("reset", y);
      };
    }, { immediate: !0 });
  }), () => {
    let { disabled: y, name: x, id: g, ...$ } = e, _ = { ref: a, id: g, role: "radiogroup", "aria-labelledby": p.value, "aria-describedby": c.value, onKeydown: V };
    return Y(z, [...x != null && d.value != null ? bo({ [x]: d.value }).map(([T, P]) => Y($e, fo({ features: ye.Hidden, key: T, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: T, value: P }))) : [], Q({ ourProps: _, theirProps: { ...o, ...Qe($, ["modelValue", "defaultValue"]) }, slot: {}, attrs: o, slots: l, name: "RadioGroup" })]);
  };
} });
var Ws = ((e) => (e[e.Empty = 1] = "Empty", e[e.Active = 2] = "Active", e))(Ws || {});
let Gs = K({ name: "RadioGroupOption", props: { as: { type: [Object, String], default: "div" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-radiogroup-option-${ne()}` } }, setup(e, { attrs: t, slots: o, expose: l }) {
  let s = Ho("RadioGroupOption"), a = Dt({ name: "RadioGroupLabel" }), i = Xe({ name: "RadioGroupDescription" }), p = k(null), c = O(() => ({ value: e.value, disabled: e.disabled })), d = k(1);
  l({ el: p, $el: p }), H(() => s.registerOption({ id: e.id, element: p, propsRef: c })), ce(() => s.unregisterOption(e.id));
  let f = O(() => {
    var $;
    return (($ = s.firstOption.value) == null ? void 0 : $.id) === e.id;
  }), h = O(() => s.disabled.value || e.disabled), V = O(() => s.compare(xe(s.value.value), xe(e.value))), w = O(() => h.value ? -1 : V.value || !s.containsCheckedOption.value && f.value ? 0 : -1);
  function y() {
    var $;
    s.change(e.value) && (d.value |= 2, ($ = p.value) == null || $.focus());
  }
  function x() {
    d.value |= 2;
  }
  function g() {
    d.value &= -3;
  }
  return () => {
    let { id: $, value: _, disabled: T, ...P } = e, j = { checked: V.value, disabled: h.value, active: Boolean(d.value & 2) }, R = { id: $, ref: p, role: "radio", "aria-checked": V.value ? "true" : "false", "aria-labelledby": a.value, "aria-describedby": i.value, "aria-disabled": h.value ? !0 : void 0, tabIndex: w.value, onClick: h.value ? void 0 : y, onFocus: h.value ? void 0 : x, onBlur: h.value ? void 0 : g };
    return Q({ ourProps: R, theirProps: P, slot: j, attrs: t, slots: o, name: "RadioGroupOption" });
  };
} }), Xt = Fo, Zs = Ls, qo = Symbol("GroupContext"), Ks = K({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: o }) {
  let l = k(null), s = Dt({ name: "SwitchLabel", props: { htmlFor: O(() => {
    var i;
    return (i = l.value) == null ? void 0 : i.id;
  }), onClick(i) {
    l.value && (i.currentTarget.tagName === "LABEL" && i.preventDefault(), l.value.click(), l.value.focus({ preventScroll: !0 }));
  } } }), a = Xe({ name: "SwitchDescription" });
  return pe(qo, { switchRef: l, labelledby: s, describedby: a }), () => Q({ theirProps: e, ourProps: {}, slot: {}, slots: t, attrs: o, name: "SwitchGroup" });
} }), Qs = K({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: !0 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-switch-${ne()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: o, slots: l, expose: s }) {
  let a = ue(qo, null), [i, p] = Vo(O(() => e.modelValue), (g) => t("update:modelValue", g), O(() => e.defaultChecked));
  function c() {
    p(!i.value);
  }
  let d = k(null), f = a === null ? d : a.switchRef, h = St(O(() => ({ as: e.as, type: o.type })), f);
  s({ el: f, $el: f });
  function V(g) {
    g.preventDefault(), c();
  }
  function w(g) {
    g.key === te.Space ? (g.preventDefault(), c()) : g.key === te.Enter && wo(g.currentTarget);
  }
  function y(g) {
    g.preventDefault();
  }
  let x = O(() => {
    var g, $;
    return ($ = (g = E(f)) == null ? void 0 : g.closest) == null ? void 0 : $.call(g, "form");
  });
  return H(() => {
    U([x], () => {
      if (!x.value || e.defaultChecked === void 0)
        return;
      function g() {
        p(e.defaultChecked);
      }
      return x.value.addEventListener("reset", g), () => {
        var $;
        ($ = x.value) == null || $.removeEventListener("reset", g);
      };
    }, { immediate: !0 });
  }), () => {
    let { id: g, name: $, value: _, ...T } = e, P = { checked: i.value }, j = { id: g, ref: f, role: "switch", type: h.value, tabIndex: 0, "aria-checked": i.value, "aria-labelledby": a == null ? void 0 : a.labelledby.value, "aria-describedby": a == null ? void 0 : a.describedby.value, onClick: V, onKeyup: w, onKeypress: y };
    return Y(z, [$ != null && i.value != null ? Y($e, fo({ features: ye.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: i.value, name: $, value: _ })) : null, Q({ ourProps: j, theirProps: { ...o, ...Qe(T, ["modelValue", "defaultChecked"]) }, slot: P, attrs: o, slots: l, name: "Switch" })]);
  };
} }), Ys = Fo;
function Xs(e) {
  let t = { called: !1 };
  return (...o) => {
    if (!t.called)
      return t.called = !0, e(...o);
  };
}
function pt(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function qe(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var bt = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(bt || {});
function Js(e, t) {
  let o = Je();
  if (!e)
    return o.dispose;
  let { transitionDuration: l, transitionDelay: s } = getComputedStyle(e), [a, i] = [l, s].map((p) => {
    let [c = 0] = p.split(",").filter(Boolean).map((d) => d.includes("ms") ? parseFloat(d) : parseFloat(d) * 1e3).sort((d, f) => f - d);
    return c;
  });
  return a !== 0 ? o.setTimeout(() => t("finished"), a + i) : t("finished"), o.add(() => t("cancelled")), o.dispose;
}
function Jt(e, t, o, l, s, a) {
  let i = Je(), p = a !== void 0 ? Xs(a) : () => {
  };
  return qe(e, ...s), pt(e, ...t, ...o), i.nextFrame(() => {
    qe(e, ...o), pt(e, ...l), i.add(Js(e, (c) => (qe(e, ...l, ...t), pt(e, ...s), p(c))));
  }), i.add(() => qe(e, ...t, ...o, ...l, ...s)), i.add(() => p("cancelled")), i.dispose;
}
function Ce(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Bt = Symbol("TransitionContext");
var en = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(en || {});
function tn() {
  return ue(Bt, null) !== null;
}
function on() {
  let e = ue(Bt, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function ln() {
  let e = ue(Mt, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let Mt = Symbol("NestingContext");
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
  function s(a) {
    let i = t.value.find(({ id: p }) => p === a);
    return i ? i.state !== "visible" && (i.state = "visible") : t.value.push({ id: a, state: "visible" }), () => l(a, we.Unmount);
  }
  return { children: t, register: s, unregister: l };
}
let Wo = ge.RenderStrategy, ke = K({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: o, slots: l, expose: s }) {
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
  if (!tn() && cs())
    return () => Y(Ie, { ...e, onBeforeEnter: i, onAfterEnter: p, onBeforeLeave: c, onAfterLeave: d }, l);
  let f = k(null), h = k("visible"), V = O(() => e.unmount ? we.Unmount : we.Hidden);
  s({ el: f, $el: f });
  let { show: w, appear: y } = on(), { register: x, unregister: g } = ln(), $ = { value: !0 }, _ = ne(), T = { value: !1 }, P = Uo(() => {
    !T.value && h.value !== "hidden" && (h.value = "hidden", g(_), d());
  });
  H(() => {
    let q = x(_);
    ce(q);
  }), re(() => {
    if (V.value === we.Hidden && _) {
      if (w && h.value !== "visible") {
        h.value = "visible";
        return;
      }
      ie(h.value, { hidden: () => g(_), visible: () => x(_) });
    }
  });
  let j = Ce(e.enter), R = Ce(e.enterFrom), J = Ce(e.enterTo), W = Ce(e.entered), X = Ce(e.leave), B = Ce(e.leaveFrom), se = Ce(e.leaveTo);
  H(() => {
    re(() => {
      if (h.value === "visible") {
        let q = E(f);
        if (q instanceof Comment && q.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function Z(q) {
    let A = $.value && !y.value, N = E(f);
    !N || !(N instanceof HTMLElement) || A || (T.value = !0, w.value && i(), w.value || c(), q(w.value ? Jt(N, j, R, J, W, (I) => {
      T.value = !1, I === bt.Finished && p();
    }) : Jt(N, X, B, se, W, (I) => {
      T.value = !1, I === bt.Finished && (st(P) || (h.value = "hidden", g(_), d()));
    })));
  }
  return H(() => {
    U([w], (q, A, N) => {
      Z(N), $.value = !1;
    }, { immediate: !0 });
  }), pe(Mt, P), Ct(O(() => ie(h.value, { visible: ee.Open, hidden: ee.Closed }) | a.value)), () => {
    let { appear: q, show: A, enter: N, enterFrom: I, enterTo: oe, entered: Re, leave: _e, leaveFrom: d0, leaveTo: f0, ...Ht } = e, al = { ref: f }, rl = { ...Ht, ...y && w && je.isServer ? { class: S([o.class, Ht.class, ...j, ...R]) } : {} };
    return Q({ theirProps: rl, ourProps: al, slot: {}, slots: l, attrs: o, features: Wo, visible: h.value === "visible", name: "TransitionChild" });
  };
} }), sn = ke, Ie = K({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: o, slots: l }) {
  let s = ze(), a = O(() => e.show === null && s !== null ? (s.value & ee.Open) === ee.Open : e.show);
  re(() => {
    if (![!0, !1].includes(a.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let i = k(a.value ? "visible" : "hidden"), p = Uo(() => {
    i.value = "hidden";
  }), c = k(!0), d = { show: a, appear: O(() => e.appear || !c.value) };
  return H(() => {
    re(() => {
      c.value = !1, a.value ? i.value = "visible" : st(p) || (i.value = "hidden");
    });
  }), pe(Mt, p), pe(Bt, d), () => {
    let f = Qe(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), h = { unmount: e.unmount };
    return Q({ ourProps: { ...h, as: "template" }, theirProps: {}, slot: {}, slots: { ...l, default: () => [Y(sn, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...o, ...h, ...f }, l.default)] }, attrs: {}, features: Wo, visible: i.value === "visible", name: "Transition" });
  };
} });
const nn = {
  key: 0,
  class: "po-text-sm po-font-normal po-text-slate-400 po-select-none po-block po-text-left po-pt-5"
}, an = { class: "po-grid po-grid-cols-3" }, rn = { class: "po-bg-white hover:po-bg-slate-200 po-rounded-xl po-p-2 po-transition-colors po-duration-150 po-ease-in" }, un = ["href", "target"], pn = { class: "po-flex po-w-14 po-h-14 po-items-center po-justify-center po-duration-100 po-ease-in-out po-overflow-hidden" }, cn = ["innerHTML"], dn = { class: "po-text-slate-500 po-font-normal po-text-sm po-text-center" }, eo = {
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
      l.groupName.length > 0 ? (r(), u("span", nn, m(l.groupName), 1)) : v("", !0),
      n("ul", an, [
        (r(!0), u(z, null, M(l.apps, (s) => (r(), u("li", rn, [
          n("a", {
            href: s.url,
            target: e.openInNewTab ? "_blank" : "_self",
            class: "po-flex po-flex-col po-group po-justify-center po-items-center"
          }, [
            n("span", pn, [
              n("span", {
                class: "po-w-9",
                innerHTML: s.icon
              }, null, 8, cn)
            ]),
            n("span", dn, m(s.name), 1)
          ], 8, un)
        ]))), 256))
      ])
    ]))), 256));
  }
}, fn = {
  name: "PoAppTray"
}, hn = /* @__PURE__ */ Object.assign(fn, {
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
    const t = e, o = ["", "Internal"], l = O(() => {
      let s = [];
      return o.forEach((a) => {
        let i = t.appList.filter((p) => p.group == a);
        i.length > 0 && s.push({
          groupName: a,
          apps: i
        });
      }), s;
    });
    return (s, a) => e.justApps ? (r(), D(eo, {
      key: 1,
      list: b(l),
      "open-in-new-tab": e.openInNewTab
    }, null, 8, ["list", "open-in-new-tab"])) : (r(), D(b(lt), { key: 0 }, {
      default: L(({ open: i }) => [
        C(b(Tt), {
          class: S([i ? "" : "po-text-opacity-90", "po-block po-w-6 po-text-slate-100 genie-effect po-z-50 po-outline-none"])
        }, {
          default: L(() => [
            C(b(Nl))
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
          default: L(() => [
            C(b(zt), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
              default: L(() => [
                C(eo, {
                  list: b(l),
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
}), mn = {
  key: 0,
  class: "po-absolute po-right-0 po-w-3 po-h-3 po-bg-mpao-orange po-rounded-full po-border-2 po-border-mpao-blue"
}, vn = {
  key: 0,
  class: "po-space-y-2"
}, gn = ["onClick"], bn = { class: "po-flex po-items-center po-justify-between" }, yn = { class: "po-text-sm po-text-left po-font-semibold po-text-slate-700 po-grow po-flex po-space-x-2 po-items-center" }, xn = { class: "po-grow" }, wn = {
  key: 0,
  class: "po-w-[6px] po-h-[6px] po-rounded-full po-shrink-0 po-bg-mpao-orange po-animate-pulse"
}, Vn = { class: "po-text-xs po-font-normal po-text-slate-400 po-shrink-0" }, $n = { class: "po-block po-text-sm po-text-slate-500 po-pb-3 po-text-left" }, kn = {
  key: 1,
  class: "po-text-sm po-text-slate-500 po-py-10 po-text-center po-block"
}, _n = {
  name: "PoNotificationHub"
}, Cn = /* @__PURE__ */ Object.assign(_n, {
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
    return (o, l) => (r(), D(b(lt), null, {
      default: L(({ open: s }) => [
        C(b(Tt), {
          class: S([s ? "" : "text-opacity-90", "po-block po-w-6 po-text-slate-100 genie-effect po-relative po-z-50 po-outline-none"])
        }, {
          default: L(() => [
            e.hasNewNotifications ? (r(), u("span", mn)) : v("", !0),
            C(b(Pl), { class: "po-stroke-current" })
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
          default: L(() => [
            C(b(zt), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
              default: L(() => [
                e.notifications !== null && e.notifications.length > 0 ? (r(), u("ul", vn, [
                  (r(!0), u(z, null, M(e.notifications, (a) => (r(), u("li", {
                    role: "button",
                    class: "po-space-y-2 po-p-2 po-rounded-lg po-bg-white hover:po-bg-slate-100 po-border po-border-slate-100",
                    onClick: ae((i) => o.$emit("button-click", a.name), ["prevent"])
                  }, [
                    n("span", bn, [
                      n("p", yn, [
                        n("span", xn, m(a.name), 1),
                        a.seen ? v("", !0) : (r(), u("span", wn))
                      ]),
                      n("span", Vn, m(a.time), 1)
                    ]),
                    n("span", $n, m(a.text), 1)
                  ], 8, gn))), 256))
                ])) : (r(), u("span", kn, " No notifications to show at the moment. We'll keep you informed."))
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
}), Sn = {
  key: 0,
  class: "po-hidden lg:po-block po-text-sky-50 po-text-sm po-shrink-0 po-pr-3 po-truncate po-max-w-[140px] po-overflow-hidden"
}, Pn = {
  key: 1,
  class: "po-px-3 po-bg-gradient-to-br po-from-slate-50 po-to-blue-100 po-py-1 po-rounded-l-md po-w-[100px] po-flex po-items-center po-justify-center po-text-center"
}, On = ["src"], En = ["src", "alt"], Ln = {
  key: 1,
  class: "po-text-xs po-text-white po-font-semibold"
}, Tn = { class: "po-pb-5" }, zn = ["src"], Dn = {
  key: 2,
  class: "po-block po-text-sm po-text-slate-400 po-italic"
}, Bn = { key: 0 }, Mn = { key: 1 }, An = /* @__PURE__ */ n("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), jn = { class: "po-space-y-2 po-py-2 po-max-h-[250px] po-overflow-y-auto" }, Nn = ["onClick"], In = { class: "po-w-5" }, Fn = { class: "" }, Rn = { class: "po-block po-text-sm po-font-normal" }, Hn = {
  key: 0,
  class: "po-text-left po-block po-text-xs po-text-slate-400"
}, qn = /* @__PURE__ */ n("div", { class: "po-h-[2px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), Un = { class: "md:po-grid po-grid-cols-2 po-space-x-1 po-pt-2" }, Wn = { class: "po-w-5" }, Gn = /* @__PURE__ */ n("span", { class: "po-text-sm po-font-normal" }, "Profile", -1), Zn = { class: "po-w-5" }, Kn = /* @__PURE__ */ n("span", { class: "po-text-sm po-font-normal" }, "Logout", -1), Qn = /* @__PURE__ */ n("div", { class: "po-text-xs po-space-x-3 po-text-center po-pt-3" }, [
  /* @__PURE__ */ n("a", {
    href: "",
    class: "po-text-slate-500 hover:po-text-mpao-lightblue"
  }, "Privacy Policy"),
  /* @__PURE__ */ n("a", {
    href: "",
    class: "po-text-slate-500 hover:po-text-mpao-lightblue"
  }, "Terms of Service")
], -1), Yn = {
  name: "PoProfileSwitcher"
}, Xn = /* @__PURE__ */ Object.assign(Yn, {
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
    const s = k({
      name: "",
      initials: "",
      image: ""
    });
    function a(h) {
      return h ? h.match(/\b[A-Z]/g).join("").substr(0, 2) : "";
    }
    const i = O(() => {
      var x, g, $, _, T, P, j, R, J, W, X, B, se;
      let h = [], V = (x = o.userObject) != null && x.transacting_as_organisation && Object.keys((g = o.userObject) == null ? void 0 : g.transacting_as_organisation).length > 0 ? ($ = o.userObject) == null ? void 0 : $.transacting_as_organisation : null, w = V ? V.name : (_ = o.userObject) == null ? void 0 : _.name, y = V ? V.logo ? V.logo : (T = o.userObject) == null ? void 0 : T.avatar : "";
      return s.value = {
        name: w,
        initials: a(w),
        image: y
      }, h = [], h.push({
        id: (P = o.userObject) == null ? void 0 : P.id,
        entity_id: (j = o.userObject) == null ? void 0 : j.entity_id,
        name: (R = o.userObject) == null ? void 0 : R.name,
        identifier: null,
        organisation_uuid: null
      }), ((W = (J = o.userObject) == null ? void 0 : J.organisations) == null ? void 0 : W.length) > 0 && ((B = (X = o.userObject) == null ? void 0 : X.organisations) == null || B.forEach((Z) => h.push(Z))), h.forEach((Z) => {
        var q, A, N, I;
        Z.current = ((q = o.userObject) == null ? void 0 : q.transacting_as_organisation) && Object.keys((A = o.userObject) == null ? void 0 : A.transacting_as_organisation).length > 0 && Z.entity_id === ((I = (N = o.userObject) == null ? void 0 : N.transacting_as_organisation) == null ? void 0 : I.entity_id);
      }), ((se = o.userObject) == null ? void 0 : se.transacting_as_organisation) === null && (h[0].current = !0), h;
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
    }), ro(() => {
      i.value;
    }), (h, V) => (r(), D(b(lt), { key: b(i) }, {
      default: L(({ open: w }) => [
        n("div", null, [
          C(b(Tt), { class: "po-flex po-items-center po-outline-none" }, {
            default: L(() => [
              c.value ? v("", !0) : (r(), u("span", Sn, m(s.value.name), 1)),
              c.value ? (r(), u("span", Pn, [
                n("img", {
                  class: "po-h-8",
                  src: c.value,
                  alt: ""
                }, null, 8, On)
              ])) : v("", !0),
              n("div", {
                class: S([
                  {
                    "po-bg-gradient-to-br po-from-slate-50 po-to-blue-100 po-p-1 po-rounded-r-md": c.value
                  }
                ])
              }, [
                n("div", {
                  class: S([[
                    { "text-opacity-90": w },
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
                    alt: s.value.name
                  }, null, 8, En)) : (r(), u("span", Ln, m(s.value.initials), 1))
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
            default: L(() => [
              C(b(zt), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
                default: L(() => {
                  var y, x, g, $;
                  return [
                    n("div", Tn, [
                      p.value ? (r(), u("img", {
                        key: 0,
                        class: "po-w-20 po-h-20 po-mx-auto po-rounded-full po-overflow-hidden",
                        src: p.value,
                        alt: ""
                      }, null, 8, zn)) : v("", !0),
                      (y = e.userObject) != null && y.name ? (r(), u("span", {
                        key: 1,
                        class: S(["po-text-base po-text-slate-600 po-font-medium po-block", [{ "po-mt-4": p.value }]])
                      }, m((x = e.userObject) == null ? void 0 : x.name), 3)) : v("", !0),
                      (g = e.userObject) != null && g.name ? (r(), u("span", Dn, [
                        s.value.name === (($ = e.userObject) == null ? void 0 : $.name) ? (r(), u("span", Bn, "Self")) : (r(), u("span", Mn, "User at " + m(s.value.name), 1))
                      ])) : v("", !0)
                    ]),
                    An,
                    n("div", jn, [
                      (r(!0), u(z, null, M(b(i), (_, T) => (r(), u("a", {
                        href: "#",
                        onClick: ae((P) => l(_), ["prevent"]),
                        class: S(["po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-shadow-sm po-transition-all po-duration-150 po-ease-out hover:po-bg-blue-50", [
                          {
                            " po-bg-white": !_.current
                          },
                          {
                            " po-bg-blue-50 po-shadow-sm": _.current
                          }
                        ]]),
                        role: "button",
                        key: T
                      }, [
                        n("span", In, [
                          _.isPersonal ? (r(), D(b(Ut), {
                            key: 0,
                            class: S([
                              "po-stroke-current",
                              { "po-stroke-mpao-lightblue": _.current }
                            ])
                          }, null, 8, ["class"])) : v("", !0),
                          _.isPersonal ? v("", !0) : (r(), D(b(El), {
                            key: 1,
                            class: S([
                              "po-stroke-current",
                              { "po-stroke-mpao-lightblue": _.current }
                            ])
                          }, null, 8, ["class"]))
                        ]),
                        n("span", Fn, [
                          n("span", Rn, m(_.name), 1),
                          _.identifier ? (r(), u("span", Hn, m(_.identifier), 1)) : v("", !0)
                        ])
                      ], 10, Nn))), 128))
                    ]),
                    qn,
                    n("div", Un, [
                      n("a", {
                        href: "#",
                        onClick: V[0] || (V[0] = ae((_) => h.$emit("button-click", "current-profile"), ["prevent"])),
                        class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-slate-50 hover:po-bg-blue-50 po-transition-all po-duration-150 po-ease-out",
                        role: "button"
                      }, [
                        n("span", Wn, [
                          C(b(Ut), { class: "po-stroke-current" })
                        ]),
                        Gn
                      ]),
                      n("a", {
                        href: "#",
                        onClick: V[1] || (V[1] = ae((_) => h.$emit("button-click", "logout"), ["prevent"])),
                        class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-slate-50 hover:po-bg-blue-50 po-transition-all po-duration-150 po-ease-out",
                        role: "button"
                      }, [
                        n("span", Zn, [
                          C(b(_l), { class: "po-stroke-current" })
                        ]),
                        Kn
                      ])
                    ]),
                    Qn
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
}), At = {
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
      n("div", {
        class: S(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[8px]", e.dotColor])
      }, null, 2),
      n("div", {
        class: S(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[8px]", e.dotColor])
      }, null, 2),
      n("div", {
        class: S(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[17px]", e.dotColor])
      }, null, 2),
      n("div", {
        class: S(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[26px]", e.dotColor])
      }, null, 2)
    ], 2));
  }
}, Jn = ["disabled", "aria-disabled"], ea = ["value", "disabled", "aria-disabled"], ta = {
  name: "PoButton"
}, jt = /* @__PURE__ */ Object.assign(ta, {
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
    const o = e, l = "po-rounded-full po-transition-colors po-border po-duration-100 po-ease-in-out po-cursor-pointer disabled:po-bg-slate-400 disabled:po-border-slate-400 disabled:po-cursor-default disabled:po-hover:bg-slate-400", s = O(() => {
      switch (o.size) {
        case "sm":
          return "po-px-2 po-py-1 po-text-xs";
        case "md":
          return "po-px-4 po-py-2 po-text-sm";
        case "lg":
          return "po-px-5 po-py-3 po-text-normal";
      }
    }), a = O(() => {
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
        class: S([[l, b(s)], "po-bg-slate-200 hover:po-bg-slate-200 focus:po-bg-slate-200"])
      }, [
        C(At, {
          "dot-color": "po-bg-slate-500",
          class: "po-relative -po-bottom-[0.2rem]"
        })
      ], 2)) : v("", !0),
      e.type == "button" && !e.isLoading ? (r(), u("button", be({
        key: 1,
        onClick: p[0] || (p[0] = ae((c) => i.$emit("button-click", e.to), ["prevent"])),
        class: [l, b(s), b(a)],
        disabled: e.disabled,
        "aria-disabled": e.disabled
      }, i.$attrs), [
        F(i.$slots, "label", {}, () => [
          G(m(e.label), 1)
        ])
      ], 16, Jn)) : v("", !0),
      e.type == "submit" && !e.isLoading ? (r(), u("input", be({
        key: 2,
        type: "submit",
        class: [l, b(s), b(a)],
        value: e.label,
        disabled: e.disabled,
        "aria-disabled": e.disabled
      }, i.$attrs), null, 16, ea)) : v("", !0),
      e.type == "link" && !e.isLoading ? (r(), u("a", be({
        key: 3,
        href: "#",
        onClick: p[1] || (p[1] = ae((c) => i.$emit("button-click", e.to), ["prevent"])),
        class: [l, b(s), b(a)]
      }, i.$attrs), [
        F(i.$slots, "label", {}, () => [
          G(m(e.label), 1)
        ])
      ], 16)) : v("", !0),
      e.type == "simple" && !e.isLoading ? (r(), u("a", {
        key: 4,
        href: "#",
        onClick: p[2] || (p[2] = ae((c) => i.$emit("button-click", e.to), ["prevent"])),
        class: S(["po-text-sm po-transition-colors po-duration-100 po-ease-in-out po-inline-flex po-items-center po-space-x-1", [
          { "po-text-mpao-lightblue hover:po-text-mpao-blue": !e.overrideColors }
        ]])
      }, [
        F(i.$slots, "label", {}, () => [
          G(m(e.label), 1)
        ])
      ], 2)) : v("", !0)
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
    n("path", {
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
    n("path", {
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
    n("path", {
      "fill-rule": "evenodd",
      d: "M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z",
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
    n("path", {
      "fill-rule": "evenodd",
      d: "M2.24 6.8a.75.75 0 001.06-.04l1.95-2.1v8.59a.75.75 0 001.5 0V4.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L2.2 5.74a.75.75 0 00.04 1.06zm8 6.4a.75.75 0 00-.04 1.06l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V6.75a.75.75 0 00-1.5 0v8.59l-1.95-2.1a.75.75 0 00-1.06-.04z",
      "clip-rule": "evenodd"
    })
  ]);
}
function to(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    n("path", {
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
    n("path", {
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
    n("path", {
      "fill-rule": "evenodd",
      d: "M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z",
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
    n("path", {
      "fill-rule": "evenodd",
      d: "M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Nt(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    n("path", {
      "fill-rule": "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
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
    n("path", {
      "fill-rule": "evenodd",
      d: "M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z",
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
    n("path", {
      "fill-rule": "evenodd",
      d: "M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z",
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
    n("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
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
  var s = e.indexOf("Edge/");
  return s > 0 ? parseInt(e.substring(s + 5, e.indexOf(".", s)), 10) : -1;
}
let Ue;
function yt() {
  yt.init || (yt.init = !0, Ue = aa() !== -1);
}
var nt = {
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
    yt(), kt(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", Ue && this.$el.appendChild(e), e.data = "about:blank", Ue || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!Ue && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
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
const ua = /* @__PURE__ */ ra((e, t, o, l, s, a) => (r(), D("div", ia)));
nt.render = ua;
nt.__scopeId = "data-v-b329ee4c";
nt.__file = "src/components/ResizeObserver.vue";
function We(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? We = function(t) {
    return typeof t;
  } : We = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, We(e);
}
function pa(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function oo(e, t) {
  for (var o = 0; o < t.length; o++) {
    var l = t[o];
    l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(e, l.key, l);
  }
}
function ca(e, t, o) {
  return t && oo(e.prototype, t), o && oo(e, o), e;
}
function lo(e) {
  return da(e) || fa(e) || ha(e) || ma();
}
function da(e) {
  if (Array.isArray(e))
    return xt(e);
}
function fa(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function ha(e, t) {
  if (e) {
    if (typeof e == "string")
      return xt(e, t);
    var o = Object.prototype.toString.call(e).slice(8, -1);
    if (o === "Object" && e.constructor && (o = e.constructor.name), o === "Map" || o === "Set")
      return Array.from(e);
    if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
      return xt(e, t);
  }
}
function xt(e, t) {
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
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l, s, a, i = function(c) {
    for (var d = arguments.length, f = new Array(d > 1 ? d - 1 : 0), h = 1; h < d; h++)
      f[h - 1] = arguments[h];
    if (a = f, !(l && c === s)) {
      var V = o.leading;
      typeof V == "function" && (V = V(c, s)), (!l || c !== s) && V && e.apply(void 0, [c].concat(lo(a))), s = c, clearTimeout(l), l = setTimeout(function() {
        e.apply(void 0, [c].concat(lo(a))), l = 0;
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
  if (We(e) === "object") {
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
      var s = this;
      if (this.observer && this.destroyObserver(), !this.frozen) {
        if (this.options = va(o), this.callback = function(p, c) {
          s.options.callback(p, c), p && s.options.once && (s.frozen = !0, s.destroyObserver());
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
          if (s.callback) {
            var f = c.isIntersecting && c.intersectionRatio >= s.threshold;
            if (f === s.oldResult)
              return;
            s.oldResult = f, s.callback(f, c);
          }
        }, this.options.intersection), kt(function() {
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
function Jo(e, t, o) {
  var l = t.value;
  if (l)
    if (typeof IntersectionObserver > "u")
      console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");
    else {
      var s = new ba(e, l, o);
      e._vue_visibilityState = s;
    }
}
function ya(e, t, o) {
  var l = t.value, s = t.oldValue;
  if (!Xo(l, s)) {
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
var ct = function(t, o) {
  return getComputedStyle(t, null).getPropertyValue(o);
}, ka = function(t) {
  return ct(t, "overflow") + ct(t, "overflow-y") + ct(t, "overflow-x");
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
function wt(e) {
  return wt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, wt(e);
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
  return this.items.length && wt(this.items[0]) !== "object";
}
var Vt = !1;
if (typeof window < "u") {
  Vt = !1;
  try {
    var Ca = Object.defineProperty({}, "passive", {
      get: function() {
        Vt = !0;
      }
    });
    window.addEventListener("test", null, Ca);
  } catch {
  }
}
let Sa = 0;
var Ft = {
  name: "RecycleScroller",
  components: {
    ResizeObserver: nt
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
        let s = 1e4, a = 0, i;
        for (let p = 0, c = t.length; p < c; p++)
          i = t[p][o] || l, i < s && (s = i), a += i, e[p] = { accumulator: a, size: i };
        return this.$_computedMinItemSize = s, e;
      }
      return [];
    },
    simpleArray: ll,
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
      const a = gl({
        id: Sa++,
        index: t,
        used: !0,
        key: l,
        type: s
      }), i = bl({
        item: o,
        position: 0,
        nr: a
      });
      return e.push(i), i;
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
      const o = this.itemSize, l = this.gridItems || 1, s = this.itemSecondarySize || o, a = this.$_computedMinItemSize, i = this.typeField, p = this.simpleArray ? null : this.keyField, c = this.items, d = c.length, f = this.sizes, h = this.$_views, V = this.$_unusedViews, w = this.pool, y = this.itemIndexByKey;
      let x, g, $, _, T;
      if (!d)
        x = g = _ = T = $ = 0;
      else if (this.$_prerender)
        x = _ = 0, g = T = Math.min(this.prerender, c.length), $ = null;
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
        const se = this.buffer;
        B.start -= se, B.end += se;
        let Z = 0;
        if (this.$refs.before && (Z = this.$refs.before.scrollHeight, B.start -= Z), this.$refs.after) {
          const q = this.$refs.after.scrollHeight;
          B.end += q;
        }
        if (o === null) {
          let q, A = 0, N = d - 1, I = ~~(d / 2), oe;
          do
            oe = I, q = f[I].accumulator, q < B.start ? A = I : I < d - 1 && f[I + 1].accumulator > B.start && (N = I), I = ~~((A + N) / 2);
          while (I !== oe);
          for (I < 0 && (I = 0), x = I, $ = f[d - 1].accumulator, g = I; g < d && f[g].accumulator < B.end; g++)
            ;
          for (g === -1 ? g = c.length - 1 : (g++, g > d && (g = d)), _ = x; _ < d && Z + f[_].accumulator < B.start; _++)
            ;
          for (T = _; T < d && Z + f[T].accumulator < B.end; T++)
            ;
        } else {
          x = ~~(B.start / o * l);
          const q = x % l;
          x -= q, g = Math.ceil(B.end / o * l), _ = Math.max(0, Math.floor((B.start - Z) / o * l)), T = Math.floor((B.end - Z) / o * l), x < 0 && (x = 0), g > d && (g = d), _ < 0 && (_ = 0), T > d && (T = d), $ = Math.ceil(d / l) * o;
        }
      }
      g - x > Va.itemsLimit && this.itemsLimitError(), this.totalSize = $;
      let P;
      const j = x <= this.$_endIndex && g >= this.$_startIndex;
      if (j)
        for (let B = 0, se = w.length; B < se; B++)
          P = w[B], P.nr.used && (e && (P.nr.index = y[P.item[p]]), (P.nr.index == null || P.nr.index < x || P.nr.index >= g) && this.unuseView(P));
      const R = j ? null : /* @__PURE__ */ new Map();
      let J, W, X;
      for (let B = x; B < g; B++) {
        J = c[B];
        const se = p ? J[p] : J;
        if (se == null)
          throw new Error(`Key is ${se} on item (keyField is '${p}')`);
        if (P = h.get(se), !o && !f[B].size) {
          P && this.unuseView(P);
          continue;
        }
        W = J[i];
        let Z = V.get(W), q = !1;
        if (!P)
          j ? Z && Z.length ? P = Z.pop() : P = this.addView(w, B, J, se, W) : (X = R.get(W) || 0, (!Z || X >= Z.length) && (P = this.addView(w, B, J, se, W), this.unuseView(P, !0), Z = V.get(W)), P = Z[X], R.set(W, X + 1)), h.delete(P.nr.key), P.nr.used = !0, P.nr.index = B, P.nr.key = se, P.nr.type = W, h.set(se, P), q = !0;
        else if (!P.nr.used && (P.nr.used = !0, q = !0, Z)) {
          const A = Z.indexOf(P);
          A !== -1 && Z.splice(A, 1);
        }
        P.item = J, q && (B === c.length - 1 && this.$emit("scroll-end"), B === 0 && this.$emit("scroll-start")), o === null ? (P.position = f[B - 1].accumulator, P.offset = 0) : (P.position = Math.floor(B / l) * o, P.offset = B % l * s);
      }
      return this.$_startIndex = x, this.$_endIndex = g, this.emitUpdate && this.$emit("update", x, g, _, T), clearTimeout(this.$_sortTimer), this.$_sortTimer = setTimeout(this.sortViews, this.updateInterval + 300), {
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
        const s = e.getBoundingClientRect(), a = o ? s.height : s.width;
        let i = -(o ? s.top : s.left), p = o ? window.innerHeight : window.innerWidth;
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
      this.listenerTarget = this.getListenerTarget(), this.listenerTarget.addEventListener("scroll", this.handleScroll, Vt ? {
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
        const a = so(this.$el), i = a.tagName === "HTML" ? 0 : a[t.scroll], p = a.getBoundingClientRect(), d = this.$el.getBoundingClientRect()[t.start] - p[t.start];
        o = a, l = t.scroll, s = e + i + d;
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
const Pa = {
  key: 0,
  ref: "before",
  class: "vue-recycle-scroller__slot"
}, Oa = {
  key: 1,
  ref: "after",
  class: "vue-recycle-scroller__slot"
};
function Ea(e, t, o, l, s, a) {
  const i = io("ResizeObserver"), p = yl("observe-visibility");
  return Me((r(), u(
    "div",
    {
      class: S(["vue-recycle-scroller", {
        ready: s.ready,
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
          F(e.$slots, "before")
        ],
        512
        /* NEED_PATCH */
      )) : v("v-if", !0),
      (r(), D(de(o.listTag), {
        ref: "wrapper",
        style: Ze({ [e.direction === "vertical" ? "minHeight" : "minWidth"]: s.totalSize + "px" }),
        class: S(["vue-recycle-scroller__item-wrapper", o.listClass])
      }, {
        default: L(() => [
          (r(!0), u(
            z,
            null,
            M(s.pool, (c) => (r(), D(de(o.itemTag), be({
              key: c.nr.id,
              style: s.ready ? {
                transform: `translate${e.direction === "vertical" ? "Y" : "X"}(${c.position}px) translate${e.direction === "vertical" ? "X" : "Y"}(${c.offset}px)`,
                width: o.gridItems ? `${e.direction === "vertical" && o.itemSecondarySize || o.itemSize}px` : void 0,
                height: o.gridItems ? `${e.direction === "horizontal" && o.itemSecondarySize || o.itemSize}px` : void 0
              } : null,
              class: ["vue-recycle-scroller__item-view", [
                o.itemClass,
                {
                  hover: !o.skipHover && s.hoverKey === c.nr.key
                }
              ]]
            }, xl(o.skipHover ? {} : {
              mouseenter: () => {
                s.hoverKey = c.nr.key;
              },
              mouseleave: () => {
                s.hoverKey = null;
              }
            })), {
              default: L(() => [
                F(e.$slots, "default", {
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
          F(e.$slots, "empty")
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["style", "class"])),
      e.$slots.after ? (r(), u(
        "div",
        Oa,
        [
          F(e.$slots, "after")
        ],
        512
        /* NEED_PATCH */
      )) : v("v-if", !0),
      C(i, { onNotify: a.handleResize }, null, 8, ["onNotify"])
    ],
    34
    /* CLASS, HYDRATE_EVENTS */
  )), [
    [p, a.handleVisibilityChange]
  ]);
}
Ft.render = Ea;
Ft.__file = "src/components/RecycleScroller.vue";
var Rt = {
  name: "DynamicScroller",
  components: {
    RecycleScroller: Ft
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
      const e = [], { items: t, keyField: o, simpleArray: l } = this, s = this.vscrollData.sizes, a = t.length;
      for (let i = 0; i < a; i++) {
        const p = t[i], c = l ? i : p[o];
        let d = s[c];
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
      let l = 0, s = 0;
      const a = Math.min(e.length, t.length);
      for (let p = 0; p < a && !(l >= o); p++)
        l += t[p].size || this.minItemSize, s += e[p].size || this.minItemSize;
      const i = s - l;
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
function La(e, t, o, l, s, a) {
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
    default: L(({ item: p, index: c, active: d }) => [
      F(e.$slots, "default", Le(Te({
        item: p.item,
        index: c,
        active: d,
        itemWithSize: p
      })))
    ]),
    before: L(() => [
      F(e.$slots, "before")
    ]),
    after: L(() => [
      F(e.$slots, "after")
    ]),
    empty: L(() => [
      F(e.$slots, "empty")
    ]),
    _: 3
    /* FORWARDED */
  }, 16, ["items", "min-item-size", "direction", "list-tag", "item-tag", "onResize", "onVisible"]);
}
Rt.render = La;
Rt.__file = "src/components/DynamicScroller.vue";
var sl = {
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
    return Y(this.tag, this.$slots.default());
  }
};
sl.__file = "src/components/DynamicScrollerItem.vue";
const Ta = ["for"], za = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Da = ["title"], Ba = { class: "po-relative po-mt-1" }, Ma = { class: "po-grow po-text-sm po-pl-2" }, Aa = {
  role: "button",
  ref: "comboboxButton"
}, ja = ["placeholder", "disabled", "id"], Na = {
  key: 1,
  class: "po-absolute po-z-10 po-mt-1 po-w-full po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
}, Ia = {
  class: /* @__PURE__ */ S(["group-hover:po-text-white po-block po-truncate"])
}, Fa = {
  key: 0,
  class: "po-block po-text-xs po-opacity-60"
}, Ra = {
  key: 0,
  class: "po-mt-2 po-text-sm po-text-slate-500",
  id: "-description"
}, Ha = {
  key: 1,
  class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
  id: "-error"
}, qa = {
  name: "PoSelectField"
}, Ua = /* @__PURE__ */ Object.assign(qa, {
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
    const o = e, l = k(""), s = k(), a = k(!1), i = k(null), p = k(null), c = O(() => {
      const x = l.value.toLowerCase();
      return x === "" ? o.list : o.list.filter((g) => g.name.toLowerCase().includes(x));
    });
    s.value = o.modelValue, U(s, () => {
    });
    const { errorMessage: d } = ve(o), f = k(d.value !== null);
    U(d, (x, g) => {
      f.value = d.value !== null && d.value !== "";
    });
    const h = k("");
    H(() => {
      o.id === "" ? h.value = o.label.replace(/\s/g, "") + "-" + Date.now() + "-selectfield-" + Math.floor(Math.random() * 9e3) : h.value = o.id, document.addEventListener("click", V);
    }), Ke(() => {
      document.removeEventListener("click", V);
    });
    const V = (x) => {
      !p.value.contains(x.target) && !i.value.contains(x.target) && (console.log("waab this"), a.value = !1);
    };
    function w(x) {
      s.value = x, t("selected", o.object ? x : x.id), t("update:modelValue", o.object ? x : x.id), a.value = !1;
    }
    function y() {
      s.value = null, a.value = !0, console.log("this shit is really happening", a.value);
    }
    return (x, g) => (r(), u("div", {
      class: S([{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]),
      ref_key: "containerRef",
      ref: p
    }, [
      n("label", {
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700",
        for: h.value
      }, [
        n("span", null, m(e.label) + " " + m(l.value), 1),
        e.required ? (r(), u("span", za, "*")) : v("", !0),
        e.info !== null ? (r(), u("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          C(b(Nt), { class: "po-fill-current" })
        ], 8, Da)) : v("", !0)
      ], 8, Ta),
      G(" show drop " + m(a.value) + " ", 1),
      n("div", Ba, [
        s.value !== null ? (r(), u("div", {
          key: 0,
          onClick: g[1] || (g[1] = ($) => {
            var _;
            this.$refs.selectBox.value = (_ = s.value) == null ? void 0 : _.name, this.$refs.selectBox.focus(), y();
          }),
          class: "po-absolute po-top-0 po-left-0 po-right-0 po-bottom-0 po-overflow-hidden po-bg-white po-rounded-md po-border po-border-slate-300 po-flex po-items-center"
        }, [
          n("div", Ma, m(s.value.name), 1),
          n("span", {
            class: "po-shrink-0 po-z-10 po-px-2 po-py-2 po-cursor-pointer po-bg-white",
            onClick: g[0] || (g[0] = ($) => {
              s.value = null, x.searchQuery = "";
            })
          }, [
            C(b(Ae), { class: "po-w-4 po-stroke-2 po-stroke-slate-400" })
          ])
        ])) : v("", !0),
        n("div", Aa, [
          n("input", {
            type: "text",
            ref_key: "selectBox",
            ref: i,
            class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm",
            placeholder: e.placeholder,
            disabled: e.disabled,
            onInput: g[2] || (g[2] = ($) => l.value = $.target.value),
            onFocus: g[3] || (g[3] = ($) => a.value = !0),
            id: h.value
          }, null, 40, ja),
          n("span", {
            class: "po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-rounded-r-md po-px-2 focus:po-outline-none",
            role: "button",
            onClick: g[4] || (g[4] = ($) => a.value = !a.value)
          }, [
            C(b(la), {
              class: "po-h-5 po-w-5 po-text-slate-400",
              "aria-hidden": "true"
            })
          ])
        ], 512),
        a.value && b(c).length > 0 ? (r(), u("div", Na, [
          C(b(Rt), {
            items: b(c),
            "min-item-size": 32,
            "key-field": "id",
            class: "scroller po-max-h-60 po-h-full po-overflow-y-auto"
          }, {
            default: L(({ item: $, index: _, active: T }) => [
              C(b(sl), {
                item: $,
                active: T,
                "size-dependencies": [$.name, $.subtitle],
                onClick: (P) => w($),
                "data-index": _,
                class: S([
                  "po-relative po-group po-select-none po-py-2 po-pl-3 po-pr-9 po-cursor-pointer hover:po-bg-mpao-lightblue"
                ])
              }, {
                default: L(() => [
                  n("span", Ia, [
                    G(m(($ == null ? void 0 : $.name) ?? "") + " ", 1),
                    $ != null && $.subtitle ? (r(), u("span", Fa, m($ == null ? void 0 : $.subtitle), 1)) : v("", !0)
                  ])
                ]),
                _: 2
              }, 1032, ["item", "active", "size-dependencies", "onClick", "data-index"])
            ]),
            _: 1
          }, 8, ["items"])
        ])) : v("", !0)
      ]),
      e.message !== null ? (r(), u("p", Ra, m(e.message), 1)) : v("", !0),
      b(d) !== null ? (r(), u("p", Ha, [
        n("span", null, m(b(d)), 1)
      ])) : v("", !0)
    ], 2));
  }
}), Wa = /* @__PURE__ */ n("div", { class: "po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity" }, null, -1), Ga = { class: "po-fixed po-z-10 po-inset-0" }, Za = { class: "po-flex po-justify-center po-items-start po-min-h-screen sm:po-px-4 sm:po-pt-10 sm:po-pb-20 po-text-center sm:po-block po-max-h-screen po-overflow-y-hidden" }, Ka = /* @__PURE__ */ n("span", {
  class: "po-hidden sm:po-inline-block sm:po-align-middle sm:po-h-screen",
  "aria-hidden": "true"
}, "​", -1), Qa = { class: "po-flex po-items-center po-bg-white po-rounded-t-xl po-p-5" }, Ya = { class: "po-grow po-text-md po-font-bold po-text-slate-600" }, Xa = { class: "po-shrink-0" }, Ja = /* @__PURE__ */ n("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), er = {
  key: 0,
  class: "po-bg-slate-50 po-rounded-b-xl"
}, tr = {
  name: "PoModal"
}, Fe = /* @__PURE__ */ Object.assign(tr, {
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
    const o = e, { show: l } = ve(o), s = k(!1);
    U(l, () => {
      s.value = l.value;
    });
    function a() {
      s.value = !1, t("modal-closed", !0);
    }
    const i = o.modalTitle.toLowerCase().replace(/\s+/g, "-"), p = new URLSearchParams(window.location.search);
    return s.value = p.get("modal") !== void 0 && p.get("modal") === i, (c, d) => (r(), u("div", null, [
      e.openBtnLabel.length > 0 ? (r(), D(b(jt), {
        key: 0,
        label: e.openBtnLabel,
        onClick: d[0] || (d[0] = (f) => s.value = !0)
      }, null, 8, ["label"])) : v("", !0),
      (r(), D(Ge, { to: "body" }, [
        C(b(Ie), {
          as: "template",
          show: s.value
        }, {
          default: L(() => [
            C(b(et), {
              as: "div",
              class: "po-relative po-z-50",
              onClose: a
            }, {
              default: L(() => [
                C(b(ke), {
                  as: "template",
                  enter: "po-ease-out po-duration-300",
                  "enter-from": "po-opacity-0",
                  "enter-to": "po-opacity-100",
                  leave: "po-ease-in po-duration-200",
                  "leave-from": "po-opacity-100",
                  "leave-to": "po-opacity-0"
                }, {
                  default: L(() => [
                    Wa
                  ]),
                  _: 1
                }),
                n("div", Ga, [
                  n("div", Za, [
                    Ka,
                    C(b(ke), {
                      as: "template",
                      enter: "po-ease-out po-duration-300",
                      "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                      "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                      leave: "po-ease-in po-duration-200",
                      "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                      "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                    }, {
                      default: L(() => [
                        C(b(tt), {
                          class: S(["po-relative po-inline-block po-align-bottom po-bg-white sm:po-rounded-xl po-text-left po-shadow-xl po-transform po-transition-all sm:po-align-top po-w-full", e.modalWidth])
                        }, {
                          default: L(() => [
                            n("div", Qa, [
                              n("h3", Ya, m(e.modalTitle), 1),
                              n("div", Xa, [
                                n("span", {
                                  role: "button",
                                  class: "po-block",
                                  onClick: a
                                }, [
                                  C(b(Ae), { class: "po-w-5 po-stroke-slate-500 hover:po-stroke-mpao-orange po-transition-colors po-duration-150 po-ease-in-out" })
                                ])
                              ])
                            ]),
                            Ja,
                            n("div", {
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
                              F(c.$slots, "content")
                            ], 2),
                            c.$slots.footer ? (r(), u("div", er, [
                              F(c.$slots, "footer")
                            ])) : v("", !0)
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
function or(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    n("path", { d: "M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" }),
    n("path", { d: "M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" })
  ]);
}
function lr(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    n("path", {
      "fill-rule": "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      "clip-rule": "evenodd"
    })
  ]);
}
function sr(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    n("path", { d: "M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" })
  ]);
}
function nl(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    n("path", {
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
    n("path", {
      "fill-rule": "evenodd",
      d: "M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z",
      "clip-rule": "evenodd"
    })
  ]);
}
const ar = ["for"], rr = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, ir = ["title"], ur = ["name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], pr = ["id"], cr = ["id"], dr = {
  name: "PoTextarea"
}, fr = /* @__PURE__ */ Object.assign(dr, {
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
      n("label", {
        for: e.id,
        class: "po-text-sm po-font-medium po-text-slate-700 po-flex po-items-center po-space-x-1"
      }, [
        n("span", null, m(e.label), 1),
        e.required ? (r(), u("span", rr, "*")) : v("", !0),
        e.info !== null ? (r(), u("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          C(b(nl))
        ], 8, ir)) : v("", !0)
      ], 8, ar),
      n("textarea", be({
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
      }), null, 16, ur),
      e.message !== null ? (r(), u("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, m(e.message), 9, pr)) : v("", !0),
      e.errorMessage !== null ? (r(), u("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, m(e.errorMessage), 9, cr)) : v("", !0)
    ], 2));
  }
}), hr = { class: "shell-sidebar--icon" }, mr = /* @__PURE__ */ n("span", { class: "shell-sidebar--label po-font-medium" }, "Feedback", -1), vr = { action: "" }, gr = /* @__PURE__ */ n("br", null, null, -1), br = { class: "po-p-5" }, yr = {
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
    return (s, a) => (r(), u(z, null, [
      n("button", {
        onClick: a[0] || (a[0] = ae(() => t.value = !0, ["prevent"])),
        class: "shell-sidebar--item",
        title: "Go to feedback"
      }, [
        n("span", hr, [
          C(b(Ll), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" })
        ]),
        mr
      ]),
      C(Fe, {
        show: t.value,
        onModalClosed: a[3] || (a[3] = () => t.value = !1),
        "modal-title": "Feedback"
      }, {
        content: L(() => [
          n("form", vr, [
            C(Ua, {
              label: "Type",
              list: o,
              modelValue: l.value.type,
              "onUpdate:modelValue": a[1] || (a[1] = (i) => l.value.type = i)
            }, null, 8, ["modelValue"]),
            gr,
            C(fr, {
              cols: "6",
              rows: "6",
              label: "Description",
              modelValue: l.value.message,
              "onUpdate:modelValue": a[2] || (a[2] = (i) => l.value.message = i)
            }, null, 8, ["modelValue"])
          ])
        ]),
        footer: L(() => [
          n("div", br, [
            C(jt, {
              label: "Send",
              type: "button"
            })
          ])
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}, xr = { class: "shell-sidebar" }, wr = { class: "po-grow" }, Vr = { class: "shell-sidebar--menu" }, $r = ["onClick", "title"], kr = { class: "shell-sidebar--icon" }, _r = { class: "shell-sidebar--label po-font-medium po-text-left" }, Cr = { key: 0 }, Sr = { class: "shell-sidebar--menu sidebar-apps po-shrink-0 po-mb-0" }, Pr = ["onClick"], Or = { class: "shell-sidebar--icon" }, Er = ["innerHTML"], Lr = { class: "shell-sidebar--label po-font-medium po-text-left" }, Tr = {
  key: 0,
  class: "shell-sidebar--menu po-shrink-0 po-mb-0 po-border-t po-border-slate-200 po-pt-3"
}, zr = {
  name: "PoSidebarDrawer"
}, b0 = /* @__PURE__ */ Object.assign(zr, {
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
    const o = e, l = O(() => {
      let c = [];
      const d = o.apps.filter((f) => f.code == o.appCode)[0];
      return d && o.apps.filter(
        (h) => d.related.includes(h.code)
      ).forEach((h) => {
        c.push(h);
      }), c;
    }), s = k(null);
    function a() {
      window.innerWidth <= 1024 && (s.value.checked = !s.value.checked);
    }
    function i(c, d) {
      t(c, d), a();
    }
    function p() {
    }
    return (c, d) => (r(), u(z, null, [
      n("input", {
        type: "checkbox",
        name: "",
        class: "po-hidden shell-sidebar--toggle",
        role: "none",
        id: "sidebar-drawer-toggle",
        checked: "",
        "aria-checked": "true",
        ref_key: "sidebarToggle",
        ref: s,
        onClick: p
      }, null, 512),
      n("aside", xr, [
        n("div", wr, [
          (r(!0), u(z, null, M(e.content, (f) => (r(), u("div", null, [
            C(b(Kt), { defaultOpen: !0 }, {
              default: L(({ open: h }) => [
                f.groupName ? (r(), D(b(Qt), {
                  key: 0,
                  class: S([h ? "" : "po-mb-3", "shell-sidebar--section po-w-full po-text-left"])
                }, {
                  default: L(() => [
                    G(m(f.groupName), 1)
                  ]),
                  _: 2
                }, 1032, ["class"])) : v("", !0),
                C(Ve, {
                  "enter-active-class": "po-transition po-duration-100 po-ease-out",
                  "enter-from-class": "po-transform po-scale-95 po-opacity-0",
                  "enter-to-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-active-class": "po-transition po-duration-75 po-ease-out",
                  "leave-from-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-to-class": "po-transform po-scale-95 po-opacity-0"
                }, {
                  default: L(() => [
                    C(b(Yt), null, {
                      default: L(() => [
                        n("ul", Vr, [
                          (r(!0), u(z, null, M(f.items, (V) => (r(), u("li", null, [
                            V.disabled ? v("", !0) : (r(), u("button", {
                              key: 0,
                              onClick: (w) => i("button-click", V.url),
                              class: S([
                                "shell-sidebar--item",
                                { active: V.url == e.currRoute }
                              ]),
                              title: `Go to ${V.label}`
                            }, [
                              n("span", kr, [
                                (r(), D(de(V.icon), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" }))
                              ]),
                              n("span", _r, m(V.label), 1)
                            ], 10, $r))
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
          b(l).length > 0 ? (r(), u("div", Cr, [
            C(b(Kt), { defaultOpen: !0 }, {
              default: L(({ open: f }) => [
                e.appsLabel ? (r(), D(b(Qt), {
                  key: 0,
                  class: S([f ? "" : "po-mb-3", "shell-sidebar--section po-w-full po-text-left"])
                }, {
                  default: L(() => [
                    G(m(e.appsLabel), 1)
                  ]),
                  _: 2
                }, 1032, ["class"])) : v("", !0),
                C(Ve, {
                  "enter-active-class": "po-transition po-duration-100 po-ease-out",
                  "enter-from-class": "po-transform po-scale-95 po-opacity-0",
                  "enter-to-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-active-class": "po-transition po-duration-75 po-ease-out",
                  "leave-from-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-to-class": "po-transform po-scale-95 po-opacity-0"
                }, {
                  default: L(() => [
                    C(b(Yt), null, {
                      default: L(() => [
                        n("ul", Sr, [
                          (r(!0), u(z, null, M(b(l), (h, V) => (r(), u("li", null, [
                            n("button", {
                              onClick: (w) => i("app-click", h.name),
                              class: S(["shell-sidebar--item", [{ active: h.current }]]),
                              title: "Go to feedback"
                            }, [
                              n("span", Or, [
                                n("span", {
                                  innerHTML: h.icon,
                                  class: "po-text-slate-600 po-w-5"
                                }, null, 8, Er)
                              ]),
                              n("span", Lr, m(h.name), 1)
                            ], 10, Pr)
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
          ])) : v("", !0)
        ]),
        e.hasFeedback ? (r(), u("ul", Tr, [
          n("li", null, [
            C(yr)
          ])
        ])) : v("", !0)
      ])
    ], 64));
  }
}), Dr = {
  key: 0,
  class: "shell-content--action-bar"
}, Br = { class: "action-bar__nav" }, Mr = ["onClick"], Ar = { class: "action-bar__nav_label po-font-medium" }, jr = {
  key: 0,
  class: "po-shrink-0 po-flex po-space-x-1"
}, Nr = /* @__PURE__ */ n("span", { class: "action-bar__nav_label po-font-medium" }, "Go Back", -1), Ir = {
  name: "PoActionBar"
}, y0 = /* @__PURE__ */ Object.assign(Ir, {
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
    return (t, o) => e.items !== null && e.items.length > 0 || e.showBackButton ? (r(), u("section", Dr, [
      n("nav", Br, [
        (r(!0), u(z, null, M(e.items, (l) => (r(), u("span", {
          onClick: (s) => t.$emit("button-click", l.label),
          class: S([[
            { "action-bar__nav_highlighted": l.highlighted },
            { "action-bar__nav_danger": l.danger }
          ], "action-bar__nav_link"])
        }, [
          (r(), D(de(l.icon), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" })),
          n("span", Ar, m(l.label), 1)
        ], 10, Mr))), 256))
      ]),
      e.showBackButton ? (r(), u("nav", jr, [
        n("span", {
          onClick: o[0] || (o[0] = (l) => t.$emit("button-click", "back")),
          class: "action-bar__nav_link"
        }, [
          Nr,
          (r(), D(de(b(Cl)), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" }))
        ])
      ])) : v("", !0)
    ])) : v("", !0);
  }
}), Fr = { class: "po-shadow-sm po-rounded-xl po-bg-white po-relative" }, Rr = {
  key: 0,
  class: "po-absolute po-right-2 po-top-2 po-p-2 po-rounded-lg"
}, Hr = {
  key: 0,
  class: "po-text-base po-font-medium po-text-slate-600"
}, qr = {
  key: 1,
  class: "lg:po-col-span-2 lg:po-flex lg:po-justify-end po-space-x-2"
}, Ur = {
  name: "PoCard"
}, x0 = /* @__PURE__ */ Object.assign(Ur, {
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
    return (t, o) => (r(), u("div", Fr, [
      e.isLoading ? (r(), u("div", Rr, [
        C(At)
      ])) : v("", !0),
      n("div", {
        class: S([
          { "po-grid po-grid-cols-1 lg:po-grid-cols-3 po-gap-3": t.$slots.action }
        ])
      }, [
        e.title.length > 0 ? (r(), u("h3", Hr, m(e.title), 1)) : v("", !0),
        t.$slots.action ? (r(), u("div", qr, [
          F(t.$slots, "action")
        ])) : v("", !0)
      ], 2),
      F(t.$slots, "content")
    ]));
  }
}), Wr = { class: "po-py-3 po-px-5 po-border-b po-border-slate-200" }, Gr = {
  class: "po-flex po-w-full md:po-ml-0",
  action: "#",
  method: "GET"
}, Zr = {
  for: "search-field",
  class: "po-sr-only"
}, Kr = { class: "po-relative po-w-full po-text-slate-400 focus-within:po-text-mpao-lightblue po-transition-colors po-duration-100 po-ease-in-out" }, Qr = { class: "po-pointer-events-none po-absolute po-inset-y-0 po-left-0 po-flex po-items-center" }, Yr = ["placeholder", "value"], Xr = ["disabled"], Jr = {
  name: "PoCardSearch"
}, w0 = /* @__PURE__ */ Object.assign(Jr, {
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
    return (o, l) => (r(), u("div", Wr, [
      n("form", Gr, [
        n("label", Zr, m(e.placeholder), 1),
        n("div", Kr, [
          n("div", Qr, [
            C(b(_t), { class: "po-h-5 po-w-5 po-flex-shrink-0" })
          ]),
          n("input", {
            name: "search-field",
            id: "desktop-search-field",
            placeholder: e.placeholder,
            value: e.modelValue,
            onInput: l[0] || (l[0] = (s) => o.$emit("update:modelValue", s.target.value)),
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
            onClick: l[1] || (l[1] = ae((s) => o.$emit("button-click", e.modelValue), ["prevent"]))
          }, " Search ", 10, Xr)) : v("", !0)
        ])
      ])
    ]));
  }
}), ei = { class: "po-flex po-items-center" }, ti = { class: "po-text-sm po-font-medium po-text-slate-500 po-pr-2" }, oi = {
  name: "PoPagination"
}, li = /* @__PURE__ */ Object.assign(oi, {
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
    function s() {
      t("button-click", "next"), t("next-click", !0);
    }
    const a = O(() => o.totalPages ? `Page ${o.currentPage} of ${o.totalPages}` : o.pagination ? o.pagination.label : "");
    return (i, p) => (r(), u("div", ei, [
      n("span", ti, m(b(a)), 1),
      n("button", {
        title: "Previous",
        onClick: l,
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        C(b(Dl), { class: "po-w-4 po-stroke-current po-stroke-2" })
      ]),
      n("button", {
        title: "Next",
        onClick: s,
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        C(b(Bl), { class: "po-w-4 po-stroke-current po-stroke-2" })
      ])
    ]));
  }
}), si = { key: 0 }, ni = {
  class: "po-text-xl md:po-text-2xl po-font-semibold po-text-slate-800",
  id: "po-page-title"
}, ai = {
  key: 0,
  class: "po-text-base po-mt-2 po-max-w-md po-block po-text-slate-500"
}, ri = { key: 1 }, ii = { class: "po-grid po-grid-cols-1 lg:po-grid-cols-2 po-gap-5" }, ui = {
  class: "po-text-xl md:po-text-2xl po-font-semibold po-text-slate-800",
  id: "po-page-title"
}, pi = {
  key: 0,
  class: "po-text-base po-mt-4 po-max-w-md po-pb-5 po-block po-text-slate-500"
}, ci = { class: "po-flex po-items-end po-justify-end po-flex-col" }, di = {
  key: 0,
  class: "po-flex md:po-justify-end po-mb-5"
}, fi = { class: "po-bg-slate-50 po-shadow-sm po-rounded-xl po-py-5 po-px-2 po-divide-x po-divide-slate-200 po-flex" }, hi = ["onClick"], mi = { class: "po-text-xl po-font-medium po-text-slate-600 po-flex po-items-center po-space-x-1" }, vi = { class: "po-text-xl po-font-medium po-text-slate-600 group-hover:po-text-mpao-lightblue" }, gi = { class: "po-text-sm po-text-slate-500 po-block group-hover:po-text-mpao-lightblue" }, bi = { class: "po-flex po-items-center po-space-x-1 md:po-justify-end" }, yi = {
  key: 2,
  class: "po-border-l po-border-slate-400 po-h-3 po-w-3 po-ml-1"
}, xi = {
  key: 0,
  class: "po-bg-slate-50 po-p-5 po-mt-5 po-rounded-md po-grid po-grid-cols-1 md:po-grid-cols-3 po-gap-5"
}, wi = /* @__PURE__ */ n("span", { class: "po-text-xs po-text-slate-500 po-py-5" }, "No filters available at the moment.", -1), Vi = {
  name: "PoPageTitle"
}, V0 = /* @__PURE__ */ Object.assign(Vi, {
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
    function s(i) {
      t("pagination-click", i);
    }
    function a(i) {
      return i.iconColor ? i.iconColor : "po-slate-600";
    }
    return (i, p) => e.standAlone ? (r(), u("div", si, [
      n("h1", ni, m(e.label), 1),
      e.description !== "" ? (r(), u("span", ai, m(e.description), 1)) : v("", !0)
    ])) : (r(), u("div", ri, [
      n("div", ii, [
        n("div", null, [
          n("h1", ui, m(e.label), 1),
          e.description !== "" ? (r(), u("span", pi, m(e.description), 1)) : v("", !0)
        ]),
        n("div", ci, [
          e.stats !== null ? (r(), u("div", di, [
            n("div", fi, [
              (r(!0), u(z, null, M(e.stats, (c) => (r(), u("div", {
                class: "po-px-5 po-cursor-pointer po-group genie-effect",
                onClick: (d) => i.$emit("stat-click", c)
              }, [
                n("span", mi, [
                  n("span", vi, m(c.value), 1),
                  c.icon ? (r(), u("span", {
                    key: 0,
                    class: S(["po-w-5 po-h-5", a(c)])
                  }, [
                    (r(), D(de(c.icon)))
                  ], 2)) : v("", !0)
                ]),
                n("span", gi, m(c.label), 1)
              ], 8, hi))), 256))
            ])
          ])) : v("", !0),
          n("div", bi, [
            e.showFilter ? (r(), u("button", {
              key: 0,
              title: "Filter",
              onClick: p[0] || (p[0] = (c) => {
                i.$emit("button-click", "filter"), l.value = !b(l);
              }),
              class: S([
                "po-p-2 po-rounded-md hover:po-bg-slate-200 po-transition-colors po-duration-75 po-ease-in-out",
                { "po-text-mpao-orange hover:po-text-mpao-orange": b(l) },
                { "tpo-ext-slate-600 hover:po-text-mpao-blue": !b(l) }
              ])
            }, [
              C(b(Al), { class: "po-w-4 po-stroke-current po-stroke-2" })
            ], 2)) : v("", !0),
            e.showDownload ? (r(), u("button", {
              key: 1,
              title: "Download",
              onClick: p[1] || (p[1] = (c) => i.$emit("button-click", "download")),
              class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
            }, [
              C(b(kl), { class: "po-w-4 po-stroke-current po-stroke-2" })
            ])) : v("", !0),
            e.showFilter && e.showPagination || e.showDownload && e.showPagination ? (r(), u("span", yi, " ")) : v("", !0),
            e.showPagination ? (r(), D(li, {
              key: 3,
              pagination: e.pagination,
              onButtonClick: s
            }, null, 8, ["pagination"])) : v("", !0)
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
        default: L(() => [
          b(l) ? (r(), u("div", xi, [
            F(i.$slots, "filters", {}, () => [
              wi
            ])
          ])) : v("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), $i = {
  key: 0,
  class: "po-w-12"
}, ki = {
  key: 0,
  class: "po-w-12"
}, _i = ["onClick"], Ci = ["colspan"], Si = { key: 1 }, Pi = ["colspan"], Oi = { class: "po-py-10 po-block po-normal-case" }, Ei = { class: "po-pr-5" }, Li = { class: "po-py-1" }, Ti = { key: 0 }, zi = {
  name: "PoTable",
  components: { ArrowRightCircleIcon: Zo }
}, $0 = /* @__PURE__ */ Object.assign(zi, {
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
    const t = e, { isLoading: o, tbody: l } = ve(t), s = k(!1), a = k(null);
    U(o, () => {
      i();
    }), U(l, () => {
      i(), p();
    }), H(() => {
      i(), p();
    });
    function i() {
      s.value = o.value, a.value = l.value, o.value && (a.value = [{}, {}, {}, {}, {}]);
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
      n("thead", null, [
        n("tr", null, [
          e.hasDetailsRow ? (r(), u("th", $i)) : v("", !0),
          (r(!0), u(z, null, M(e.thead, (h) => (r(), u("th", null, [
            F(d.$slots, "th", Le(Te(h)))
          ]))), 256))
        ])
      ]),
      n("tbody", null, [
        a.value !== null && !s.value || a.value !== null && a.value.length !== 0 && !s.value ? (r(!0), u(z, { key: 0 }, M(a.value, (h, V) => (r(), u(z, null, [
          n("tr", null, [
            e.hasDetailsRow ? (r(), u("td", ki, [
              n("span", {
                onClick: (w) => h.showDetails = !h.showDetails
              }, [
                C(b(Zo), {
                  class: S(["po-w-5 po-fill-mpao-lightblue po-origin-center po-transition-transform po-duration-100 po-ease-out po-cursor-pointer", [{ "po-rotate-90": h.showDetails }]])
                }, null, 8, ["class"])
              ], 8, _i)
            ])) : v("", !0),
            F(d.$slots, "td", Le(Te({ ...h, index: V, item: h })))
          ]),
          e.hasDetailsRow ? (r(), u("tr", {
            key: 0,
            class: S(["po-table-details-row", [{ "po-hidden": !h.showDetails }]])
          }, [
            n("td", {
              colspan: e.thead.length + 1
            }, [
              F(d.$slots, "details", Le(Te({ item: h })))
            ], 8, Ci)
          ], 2)) : v("", !0)
        ], 64))), 256)) : v("", !0),
        a.value == null && !s.value || a.value !== null && a.value.length == 0 && !s.value ? (r(), u("tr", Si, [
          n("td", {
            colspan: e.thead.length + 1,
            class: "po-text-center"
          }, [
            n("span", Oi, m(e.emptyMessage), 1)
          ], 8, Pi)
        ])) : v("", !0),
        s.value ? (r(!0), u(z, { key: 2 }, M(a.value, (h) => (r(), u("tr", null, [
          (r(!0), u(z, null, M(e.thead, (V) => (r(), u("td", Ei, [
            n("div", Li, [
              n("div", {
                class: "po-h-2 loading-placeholder po-rounded-full",
                style: Ze({ width: c() + "%" })
              }, null, 4)
            ])
          ]))), 256))
        ]))), 256)) : v("", !0)
      ]),
      d.$slots.tfoot ? (r(), u("tfoot", Ti, [
        n("tr", null, [
          F(d.$slots, "tfoot")
        ])
      ])) : v("", !0)
    ], 2));
  }
}), Di = ["onUpdate:modelValue", "id"], Bi = ["for"], Mi = { class: "table-responsive po-w-full" }, Ai = ["onClick"], ji = { key: 0 }, Ni = ["onClick"], Ii = {
  name: "PoDynamicTable",
  components: { ArrowsUpDownIcon: Qo, ArrowUpIcon: Ko, ArrowDownIcon: Go }
}, k0 = /* @__PURE__ */ Object.assign(Ii, {
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
    const t = e, o = k(t.columns), l = k(null), s = k(null), a = (c) => {
      c.hidden = !c.hidden, o.value = t.columns.filter((d) => !d.hidden);
    }, i = (c) => {
      c.sortable && (c.sorted && s.value === "asc" ? s.value = "desc" : s.value = "asc", o.value.forEach((d) => {
        d.key === c.key ? (d.sorted = !0, d.sortDirection = s.value) : (d.sorted = !1, d.sortDirection = null);
      }), l.value = c);
    }, p = k([]);
    return re(() => {
      l.value ? p.value = [...t.data].sort((c, d) => {
        let f = c[l.value.key], h = d[l.value.key];
        return typeof f == "string" && typeof h == "string" && (f = f.toLowerCase(), h = h.toLowerCase()), f < h ? s.value === "asc" ? -1 : 1 : f > h ? s.value === "asc" ? 1 : -1 : 0;
      }) : p.value = [...t.data];
    }), (c, d) => (r(), u("div", null, [
      (r(!0), u(z, null, M(o.value, (f) => (r(), u("div", null, [
        Me(n("input", {
          type: "checkbox",
          name: "dynamic",
          "onUpdate:modelValue": (h) => f.hidden = h,
          id: `hide-table-col-${f.label}`
        }, null, 8, Di), [
          [wl, f.hidden]
        ]),
        n("label", {
          for: `hide-table-col-${f.label}`
        }, m(f.label), 9, Bi)
      ]))), 256)),
      n("table", Mi, [
        n("thead", null, [
          n("tr", null, [
            (r(!0), u(z, null, M(o.value, (f) => (r(), u("th", {
              key: f.key,
              onClick: (h) => i(f)
            }, [
              G(m(f.label) + " " + m(f.sorted) + " " + m(f.sortDirection) + " ", 1),
              f.sortable ? (r(), u("span", ji, [
                f.sorted ? v("", !0) : (r(), D(b(Qo), {
                  key: 0,
                  class: "po-w-4"
                })),
                f.sorted && f.sortDirection === "asc" ? (r(), D(b(Ko), {
                  key: 1,
                  class: "po-w-4"
                })) : v("", !0),
                f.sorted && f.sortDirection === "desc" ? (r(), D(b(Go), {
                  key: 2,
                  class: "po-w-4"
                })) : v("", !0)
              ])) : v("", !0),
              f.hidable ? (r(), u("button", {
                key: 1,
                onClick: (h) => a(f)
              }, m(f.hidden ? "Show" : "Hide"), 9, Ni)) : v("", !0)
            ], 8, Ai))), 128))
          ])
        ]),
        n("tbody", null, [
          (r(!0), u(z, null, M(p.value, (f) => (r(), u("tr", {
            key: f.id
          }, [
            (r(!0), u(z, null, M(o.value, (h) => (r(), u("td", {
              key: h.key
            }, m(f[h.key]), 1))), 128))
          ]))), 128))
        ])
      ])
    ]));
  }
}), Fi = { class: "" }, Ri = { class: "po-grow" }, Hi = ["onClick"], qi = {
  name: "PoDescriptionList"
}, Ui = /* @__PURE__ */ Object.assign(qi, {
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
      n("dl", {
        class: S([
          "po-description-list",
          { "po-divide-y po-divide-slate-200": !e.striped },
          { striped: e.striped },
          { "no-col": !e.columns }
        ])
      }, [
        F(o.$slots, "content", {}, () => [
          (r(!0), u(z, null, M(e.items, (s) => (r(), u("div", null, [
            n("dt", null, m(s.title), 1),
            n("dd", Fi, [
              n("span", Ri, m(s.description), 1),
              s.action !== void 0 ? (r(), u("span", {
                key: 0,
                class: "po-shrink-0 po-text-mpao-lightblue hover:po-text-mpao-blue po-transition-colors po-duration-100 po-ease-in-out po-px-2 po-cursor-pointer",
                onClick: (a) => o.$emit("button-click", s.action)
              }, m(s.action), 9, Hi)) : v("", !0)
            ])
          ]))), 256))
        ])
      ], 2)
    ]));
  }
}), Wi = ["for"], Gi = { class: "po-capitalize" }, Zi = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Ki = ["title"], Qi = ["type", "name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], Yi = ["id"], Xi = ["id"], Ji = {
  name: "PoInputField"
}, _0 = /* @__PURE__ */ Object.assign(Ji, {
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
    const { errorMessage: s } = ve(o), a = k(s.value !== null);
    U(s, (V, w) => {
      a.value = s.value !== null && s.value !== "";
    }), U(s, (V, w) => {
      a.value = s.value !== null && s.value !== "";
    });
    let i = o.type === "currency" ? "text" : o.type;
    const p = k(null), c = (V) => {
      let w = V.target.value;
      p.value = w;
      let y = o.type === "currency" ? f(w) : w;
      t("update:modelValue", y);
    };
    U(o, (V, w) => {
      o.type === "currency" && p.value !== w.modelValue ? p.value = qt(o.modelValue) : p.value = o.modelValue;
    });
    const d = (V) => {
      let w = null;
      o.type === "currency" ? w = qt(f("" + V)) : w = V, p.value = w;
    }, f = (V) => {
      let w = V.replace(/,/g, "");
      const y = w.indexOf(".");
      return y !== -1 && w.substring(y + 1) === "00" && (w = w.substring(0, y)), w;
    };
    o.type === "currency" ? d(o.modelValue) : p.value = o.modelValue;
    const h = k("");
    return H(() => {
      o.id === "" ? h.value = o.label.replace(/\s/g, "") + "-" + Date.now() + "-inputfield-" + Math.floor(Math.random() * 9e3) : h.value = o.id;
    }), (V, w) => (r(), u("div", {
      class: S(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      n("label", {
        for: h.value,
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700"
      }, [
        n("span", Gi, m(e.label), 1),
        e.required ? (r(), u("span", Zi, "*")) : v("", !0),
        e.info !== null ? (r(), u("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          C(b(Nt), { class: "po-fill-current" })
        ], 8, Ki)) : v("", !0)
      ], 8, Wi),
      n("input", be({
        type: b(i),
        name: `${h.value}-field`,
        id: h.value,
        value: p.value,
        placeholder: e.placeholder,
        disabled: e.disabled,
        required: e.required,
        "aria-describedby": `${h.value}-description`,
        "aria-required": e.required,
        "aria-disabled": e.disabled
      }, V.$attrs, {
        onInput: c,
        onBlur: w[0] || (w[0] = (y) => d(y.target.value)),
        class: [
          "po-mt-1 peer po-block po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white focus:po-ring-0 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default",
          l()
        ]
      }), null, 16, Qi),
      e.message !== null ? (r(), u("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, m(e.message), 9, Yi)) : v("", !0),
      a.value && b(s) !== null ? (r(), u("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
        id: `${e.id}-error`
      }, [
        n("span", null, m(b(s)), 1)
      ], 8, Xi)) : v("", !0)
    ], 2));
  }
}), eu = { class: "po-text-sm po-font-medium po-text-slate-700 peer-focus:po-text-mpao-lightblue peer-invalid:po-text-red-500 peer-invalid:peer-focus:po-text-red-600 po-flex po-items-center po-space-x-1 po-capitalize" }, tu = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, ou = ["name", "id", "value"], lu = ["for"], su = { class: "po-flex po-items-center po-space-x-1" }, nu = {
  key: 0,
  class: "po-text-sm"
}, au = {
  key: 1,
  class: "po-text-sm"
}, ru = {
  key: 0,
  class: "po-mt-3 po-flex po-w-full po-h-1.5 po-bg-gray-100 po-rounded-full po-overflow-hidden"
}, iu = ["aria-valuenow"], uu = ["id"], pu = ["id"], cu = {
  name: "PoInputFile"
}, C0 = /* @__PURE__ */ Object.assign(cu, {
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
    const t = e, o = O(() => `width: ${t.progress}%`), l = O(() => t.progress), s = k(""), a = (i) => {
      const p = i.target.files[0];
      p ? s.value = p.name : s.value = "";
    };
    return (i, p) => (r(), u("div", {
      class: S(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      n("span", eu, [
        n("span", null, m(e.label), 1),
        e.required ? (r(), u("span", tu, "*")) : v("", !0)
      ]),
      n("input", {
        name: `${e.id}-upload`,
        id: `${e.id}-fileupload`,
        value: e.modelValue,
        type: "file",
        onInput: p[0] || (p[0] = (c) => i.$emit("update:modelValue", c.target.value)),
        onChange: p[1] || (p[1] = (c) => a(c)),
        class: "po-sr-only po-peer"
      }, null, 40, ou),
      n("label", {
        for: `${e.id}-fileupload`,
        class: "po-mt-1 po-block po-w-full po-border po-cursor-pointer po-rounded-md po-border-slate-300 po-bg-white peer-focus:po-border-mpao-lightblue invalid:po-border-red-400 invalid:focus:po-border-red-600 invalid:focus:po-ring-red-600 sm:po-text-sm po-p-2"
      }, [
        n("div", su, [
          C(b(uo), { class: "po-w-4 po-stroke-slate-500" }),
          s.value ? (r(), u("span", nu, m(s.value), 1)) : (r(), u("span", au, "Choose file"))
        ])
      ], 8, lu),
      b(l) !== null ? (r(), u("div", ru, [
        n("div", {
          class: "po-flex po-flex-col po-justify-center po-overflow-hidden po-bg-mpao-lightblue",
          role: "progressbar",
          style: Ze(b(o)),
          "aria-valuenow": b(l),
          "aria-valuemin": "0",
          "aria-valuemax": "100"
        }, null, 12, iu)
      ])) : v("", !0),
      e.message !== null ? (r(), u("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, m(e.message), 9, uu)) : v("", !0),
      e.errorMessage !== null ? (r(), u("p", {
        key: 2,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, m(e.errorMessage), 9, pu)) : v("", !0)
    ], 2));
  }
}), du = { class: "po-text-sm po-font-medium po-text-slate-700 po-cursor-pointer po-select-none po-flex po-items-center po-space-x-1" }, fu = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, hu = {
  name: "PoToggle"
}, S0 = /* @__PURE__ */ Object.assign(hu, {
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
    return (l, s) => (r(), D(b(Ks), {
      as: "div",
      class: "po-flex po-items-center"
    }, {
      default: L(() => [
        C(b(Qs), {
          modelValue: o.value,
          "onUpdate:modelValue": s[0] || (s[0] = (a) => o.value = a),
          onClick: s[1] || (s[1] = (a) => l.$emit("update:modelValue", !o.value)),
          class: S([
            o.value ? "po-bg-mpao-lightblue" : "po-bg-slate-200",
            "po-relative po-inline-flex po-h-6 po-w-11 po-flex-shrink-0 po-cursor-pointer po-rounded-full po-border-2 po-border-transparent po-transition-colors po-duration-200 po-ease-in-out focus:po-outline-none focus:po-ring-2 focus:po-ring-mpao-lightblue focus:po-ring-offset-2"
          ])
        }, {
          default: L(() => [
            n("span", {
              "aria-hidden": "true",
              class: S([
                o.value ? "po-translate-x-5" : "po-translate-x-0",
                "po-pointer-events-none po-inline-block po-h-5 po-w-5 po-transform po-rounded-full po-bg-white po-shadow po-ring-0 po-transition po-duration-200 po-ease-in-out"
              ])
            }, null, 2)
          ]),
          _: 1
        }, 8, ["modelValue", "class"]),
        C(b(Ys), {
          as: "span",
          class: "po-ml-3"
        }, {
          default: L(() => [
            n("span", du, [
              n("span", null, m(e.label), 1),
              e.required ? (r(), u("span", fu, "*")) : v("", !0)
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), mu = { class: "po-pt-1 po-space-y-1 po-border-r-2 po-border-slate-200 po-relative" }, vu = ["onClick"], gu = {
  name: "PoSectionMenu"
}, P0 = /* @__PURE__ */ Object.assign(gu, {
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
    return (t, o) => (r(), u("ul", mu, [
      (r(!0), u(z, null, M(e.menuItems, (l) => (r(), u("li", null, [
        n("span", {
          onClick: (s) => t.$emit("link-click", l.link),
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
          n("span", null, m(l.label), 1)
        ], 10, vu)
      ]))), 256))
    ]));
  }
}), bu = { class: "po-relative po-flex po-items-start" }, yu = { class: "po-flex po-h-5 po-items-center" }, xu = ["name", "id", "checked", "disabled", "aria-describedby"], wu = { class: "po-ml-3 po-text-sm" }, Vu = ["for"], $u = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, ku = ["id"], _u = { class: "po-sr-only" }, Cu = ["id"], Su = {
  name: "PoCheckbox"
}, O0 = /* @__PURE__ */ Object.assign(Su, {
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
      n("div", bu, [
        n("div", yu, [
          n("input", be({
            name: `${e.id}-field`,
            id: e.id,
            checked: e.modelValue,
            disabled: e.disabled,
            "aria-describedby": `${e.id}-description`
          }, t.$attrs, {
            onInput: o[0] || (o[0] = (l) => t.$emit("update:modelValue", l.target.checked)),
            type: "checkbox",
            class: ["po-h-4 po-w-4 po-rounded po-border-slate-300 po-text-mpao-lightblue focus:po-ring-mpao-lightblue", [{ "po-bg-slate-200": e.disabled }]]
          }), null, 16, xu)
        ]),
        n("div", wu, [
          n("label", {
            for: e.id,
            class: "po-font-medium po-text-slate-600 po-cursor-pointer po-select-none po-flex po-items-center po-space-x-1"
          }, [
            n("span", null, m(e.label), 1),
            e.required ? (r(), u("span", $u, "*")) : v("", !0)
          ], 8, Vu),
          e.message ? (r(), u("span", {
            key: 0,
            id: `${e.id}-description`,
            class: "po-text-slate-500 po-cursor-default"
          }, [
            n("span", _u, m(e.label), 1),
            G(" " + m(e.message), 1)
          ], 8, ku)) : v("", !0)
        ])
      ]),
      e.errorMessage !== null ? (r(), u("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, m(e.errorMessage), 9, Cu)) : v("", !0)
    ]));
  }
}), Pu = /* @__PURE__ */ n("div", { class: "po-pb-5 po-max-w-xl" }, [
  /* @__PURE__ */ n("span", { class: "po-text-sm po-text-slate-600" }, "We're always working to improve our app, and we're excited to share the latest changes with you. We hope you enjoy these new features and improvements")
], -1), Ou = { class: "po-flex po-space-x-2" }, Eu = ["onClick"], Lu = { class: "po-text-sm po-font-semibold po-slate-800" }, Tu = { class: "po-text-xs po-text-white po-px-1 po-py-0 po-rounded-md po-bg-mpao-lightblue" }, zu = { class: "po-bg-gradient-to-t po-from-mpao-orange/20 po-via-mpao-lightblue/20 po-to-purple-500/10 -po-mb-5 -po-mx-5 po-p-5 po-pb-10" }, Du = { key: 0 }, Bu = { class: "po-space-y-2 po-mt-5" }, Mu = { class: "po-border po-border-slate-200 po-rounded-lg po-p-3 po-bg-white" }, Au = { class: "po-flex po-items-center po-space-x-2" }, ju = { class: "po-text-mpao-lightblue po-grow po-text-lg" }, Nu = { class: "po-font-semibold po-shrink-0 po-text-mpao-lightblue po-text-sm po-px-2 po-py-1 po-rounded-xl po-bg-mpao-lightblue/10" }, Iu = ["innerHTML"], Fu = {
  key: 0,
  class: "po-bg-white po-rounded-md po-px-4 po-py-3 po-block po-text-sm po-text-center po-text-mpao-lightblue hover:po-text-purple-600 po-cursor-pointer"
}, Ru = {
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
    return (l, s) => (r(), u(z, null, [
      e.showBtn ? (r(), u("a", {
        key: 0,
        href: "#",
        onClick: s[0] || (s[0] = ae((a) => t.value = !0, ["prevent"])),
        class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
      }, "Change logs")) : v("", !0),
      C(Fe, {
        show: t.value,
        onModalClosed: s[1] || (s[1] = (a) => t.value = !1),
        "modal-title": "Change Log",
        "modal-width": "sm:po-max-w-4xl",
        id: "change-log-modal"
      }, {
        content: L(() => [
          n("div", null, [
            Pu,
            n("div", Ou, [
              (r(!0), u(z, null, M(e.changelog, (a, i) => (r(), u("span", {
                class: S(["po-flex po-items-center po-space-x-1 po-px-4 po-py-3 po-rounded-t-xl po-cursor-pointer", [{ "po-bg-purple-500/10": o.value === i }]]),
                onClick: (p) => o.value = i
              }, [
                n("span", Lu, m(a.label) + " Version", 1),
                n("span", Tu, m(a.latest_version), 1)
              ], 10, Eu))), 256))
            ]),
            n("div", zu, [
              (r(!0), u(z, null, M(e.changelog, (a, i) => (r(), u("div", null, [
                o.value === i ? (r(), u("div", Du, [
                  n("div", Bu, [
                    (r(!0), u(z, null, M(a.version_history, (p) => (r(), u("div", Mu, [
                      n("span", Au, [
                        n("span", ju, m(p.date), 1),
                        n("span", Nu, m(p.version), 1)
                      ]),
                      n("div", {
                        class: "po-mt-3 po-prose-sm po-prose-slate",
                        innerHTML: p.note
                      }, null, 8, Iu)
                    ]))), 256)),
                    a.hasMore ? (r(), u("span", Fu, "More")) : v("", !0)
                  ])
                ])) : v("", !0)
              ]))), 256))
            ])
          ])
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}, at = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [l, s] of t)
    o[l] = s;
  return o;
}, Hu = {}, qu = {
  class: "po-h-8",
  src: "https://pension.gov.mv/asset/image/en-ccc-2020-issa.png",
  alt: "issa Certificate"
};
function Uu(e, t) {
  return r(), u("img", qu);
}
const Wu = /* @__PURE__ */ at(Hu, [["render", Uu]]), Gu = {}, Zu = {
  class: "po-h-8",
  src: "https://pension.gov.mv/asset/image/iso_logo.png",
  alt: "ISO 27001 Certificate"
};
function Ku(e, t) {
  return r(), u("img", Zu);
}
const Qu = /* @__PURE__ */ at(Gu, [["render", Ku]]), Yu = { class: "-po-m-5" }, Xu = ["src", "alt"], no = {
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
        onClick: l[0] || (l[0] = ae((s) => t.value = !0, ["prevent"])),
        class: "po-cursor-pointer",
        role: "button"
      })),
      C(Fe, {
        show: t.value,
        onModalClosed: l[1] || (l[1] = (s) => t.value = !1),
        "modal-title": e.title,
        "modal-width": "sm:po-max-w-4xl",
        id: "change-log-modal"
      }, {
        content: L(() => [
          n("div", Yu, [
            n("img", {
              src: e.src,
              alt: e.title
            }, null, 8, Xu)
          ])
        ]),
        _: 1
      }, 8, ["show", "modal-title"])
    ], 64));
  }
}, Ju = /* @__PURE__ */ n("div", { class: "po-prose-sm po-prose-slate po-p-5 po-opacity-8" }, [
  /* @__PURE__ */ n("h2", { class: "po-text-red-500" }, "Sample Terms and Conditions"),
  /* @__PURE__ */ n("h3", null, "1. Acceptance of Terms"),
  /* @__PURE__ */ n("p", null, " By accessing and using this web app, you agree to be bound by these terms and conditions. "),
  /* @__PURE__ */ n("h3", null, "2. User Responsibilities"),
  /* @__PURE__ */ n("p", null, " Users are responsible for maintaining the confidentiality of their account information and complying with all applicable laws. "),
  /* @__PURE__ */ n("h3", null, "3. Privacy Policy"),
  /* @__PURE__ */ n("p", null, [
    /* @__PURE__ */ G(" Our privacy policy outlines how we collect, use, and protect your personal information. Please review our "),
    /* @__PURE__ */ n("a", { href: "privacy.html" }, "Privacy Policy"),
    /* @__PURE__ */ G(" for more details. ")
  ]),
  /* @__PURE__ */ n("h3", null, "4. Intellectual Property"),
  /* @__PURE__ */ n("p", null, " All content and materials provided on this web app are protected by intellectual property laws. Unauthorized use is prohibited. "),
  /* @__PURE__ */ n("h3", null, "5. Limitation of Liability"),
  /* @__PURE__ */ n("p", null, " We are not liable for any damages or losses incurred from the use of this web app, including but not limited to, errors, omissions, or interruptions. "),
  /* @__PURE__ */ n("h3", null, "6. Modification of Terms"),
  /* @__PURE__ */ n("p", null, " We reserve the right to modify or update these terms and conditions at any time without prior notice. It is your responsibility to review them periodically. "),
  /* @__PURE__ */ n("h3", null, "7. Governing Law"),
  /* @__PURE__ */ n("p", null, " These terms and conditions shall be governed by and construed in accordance with the laws of your jurisdiction. "),
  /* @__PURE__ */ n("h3", null, "8. Contact Us"),
  /* @__PURE__ */ n("p", null, [
    /* @__PURE__ */ G(" If you have any questions or concerns about these terms and conditions, please contact us at "),
    /* @__PURE__ */ n("a", { href: "mailto:info@pension.gov.mv" }, "info@pension.gov.mv"),
    /* @__PURE__ */ G(". ")
  ])
], -1), ep = {
  __name: "ToCModel",
  setup(e) {
    const t = k(!1);
    return (o, l) => (r(), u(z, null, [
      n("a", {
        href: "#",
        onClick: l[0] || (l[0] = ae((s) => t.value = !0, ["prevent"])),
        role: "button",
        class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
      }, "Terms & Conditions"),
      C(Fe, {
        show: t.value,
        onModalClosed: l[1] || (l[1] = (s) => t.value = !1),
        "modal-title": "Terms & Conditions",
        "modal-width": "sm:po-max-w-3xl",
        id: "change-log-modal"
      }, {
        content: L(() => [
          Ju
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}, tp = /* @__PURE__ */ n("div", { class: "po-prose-sm po-prose-slate po-p-5 po-opacity-80" }, [
  /* @__PURE__ */ n("h2", { class: "po-text-red-500" }, "Sample Privacy Policy"),
  /* @__PURE__ */ n("h3", null, "1. Information Collection"),
  /* @__PURE__ */ n("p", null, " We may collect personal information such as name, contact details, and pension-related data necessary for providing our services. "),
  /* @__PURE__ */ n("h3", null, "2. Use of Information"),
  /* @__PURE__ */ n("p", null, " The collected information is used for the purpose of administering pensions, processing applications, and communicating with users. "),
  /* @__PURE__ */ n("h3", null, "3. Data Security"),
  /* @__PURE__ */ n("p", null, " We implement appropriate security measures to protect personal information from unauthorized access, alteration, or disclosure. "),
  /* @__PURE__ */ n("h3", null, "4. Third-Party Disclosure"),
  /* @__PURE__ */ n("p", null, " We may share personal information with trusted third parties only to the extent necessary for pension administration purposes. "),
  /* @__PURE__ */ n("h3", null, "5. Cookies and Tracking"),
  /* @__PURE__ */ n("p", null, " We use cookies and similar technologies to enhance user experience and collect non-personal information about website usage. "),
  /* @__PURE__ */ n("h3", null, "6. Data Retention"),
  /* @__PURE__ */ n("p", null, " We retain personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law. "),
  /* @__PURE__ */ n("h3", null, "7. User Rights"),
  /* @__PURE__ */ n("p", null, " Users have the right to access, update, and delete their personal information. Please contact us to exercise these rights. "),
  /* @__PURE__ */ n("h3", null, "8. Children's Privacy"),
  /* @__PURE__ */ n("p", null, " This web app is not intended for children under the age of 13. We do not knowingly collect or store personal information from children. "),
  /* @__PURE__ */ n("h3", null, "9. Changes to Privacy Policy"),
  /* @__PURE__ */ n("p", null, " We reserve the right to modify or update this privacy policy at any time. Users will be notified of any significant changes. "),
  /* @__PURE__ */ n("h3", null, "8. Contact Us"),
  /* @__PURE__ */ n("p", null, [
    /* @__PURE__ */ G(" If you have any questions or concerns about our privacy policy, please contact us at "),
    /* @__PURE__ */ n("a", { href: "mailto:info@pension.gov.mv" }, "info@pension.gov.mv"),
    /* @__PURE__ */ G(". ")
  ])
], -1), op = {
  __name: "PrivacyPolicyModel",
  setup(e) {
    const t = k(!1);
    return (o, l) => (r(), u(z, null, [
      n("a", {
        href: "#",
        onClick: l[0] || (l[0] = ae((s) => t.value = !0, ["prevent"])),
        role: "button",
        class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
      }, "Privacy Policy"),
      C(Fe, {
        show: t.value,
        onModalClosed: l[1] || (l[1] = (s) => t.value = !1),
        "modal-title": "Privacy Policy",
        "modal-width": "sm:po-max-w-3xl",
        id: "change-log-modal"
      }, {
        content: L(() => [
          tp
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}, lp = { class: "po-grid po-gap-5 po-grid-cols-1 lg:po-grid-cols-2 po-px-6 lg:po-px-8 po-mt-10 po-pb-10" }, sp = { class: "sm:po-flex po-items-start sm:po-space-x-5" }, np = /* @__PURE__ */ n("svg", {
  class: "po-h-10",
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  "fill-rule": "evenodd",
  "stroke-linejoin": "round",
  "stroke-miterlimit": "2",
  "clip-rule": "evenodd",
  viewBox: "0 0 343 287"
}, [
  /* @__PURE__ */ n("path", {
    fill: "#203057",
    d: "M61.305 92.088a16.74 16.74 0 0 1-2.583.542 12.086 12.086 0 0 0-4.604 1.425L108.41 0h21.308c-22.054 9.263-22.871 36.388-23.021 46.463-.237.008-.467.017-.708.042-5.509.462-13.509 3.245-20.296 13.904-2.267 3.512-4.392 7.341-6.263 10.721l-.125.204c-6.429 11.579-10.725 18.766-18 20.754ZM261.87 71.267c0-.013-.079-.142-.092-.159-1.987-3.575-4.045-7.279-6.225-10.683-6.82-10.675-14.795-13.458-20.295-13.908a6.116 6.116 0 0 0-.755-.063c-.358-12.162-2.37-21.821-6.12-29.492C224.449 8.912 218.67 3.233 211.17 0h21.104l54.109 93.708a12.134 12.134 0 0 0-3.884-1.05c-.875-.104-1.7-.3-2.408-.487-.063-.029-.167-.067-.167-.067-7.271-1.979-11.575-9.175-18.054-20.837ZM112.871 197.965c3.809 7.767 9.363 13.342 16.538 16.588h-21L54.384 120.99c1.371.692 2.837 1.146 4.337 1.292 1.034.112 1.979.362 2.592.529 7.267 1.971 11.575 9.179 18 20.754 2.412 4.329 4.275 7.65 6.379 10.938 6.8 10.65 14.783 13.445 20.288 13.9.266.02.512.029.754.029.358 12.166 2.362 21.829 6.137 29.533Zm149.045-54.381c6.442-11.571 10.738-18.767 18.009-20.759.745-.2 1.641-.425 2.575-.529 1.25-.121 2.45-.446 3.608-.933l-53.829 93.204h-20.063c21.375-9.537 22.175-36.212 22.313-46.104.229-.013.462-.021.716-.042 5.513-.462 13.505-3.246 20.309-13.908 2.304-3.625 4.558-7.667 6.362-10.929Zm-82.546 28.807v.208c.037 12.463 5.654 19.896 15.033 19.896 13.329 0 17.767-4.317 17.767-29.808V94.903l17.433-13.47v81.254c0 .241-.108 3.041-.217 5.746l-.158 3.7c-.071 1.975-.142 3.687-.167 4.458a1.689 1.689 0 0 0-.079.383c0 .104.021.196.033.3-2.454 24.05-13.783 35.746-34.612 35.746-8.758 0-16.329-3.292-21.925-9.542a2.922 2.922 0 0 0-2.15-.945c-.825 0-1.613.358-2.15.975-5.567 6.308-12.746 9.512-21.35 9.512-22.246 0-34.05-14.842-35.104-44.121 7.871-1.337 13.466-6.258 15.471-8.325l1.87-1.433v3.546c0 25.341 5.725 29.808 17.763 29.808 13.312 0 14.921-17.183 15.117-20.629.3-5.413 4.116-9.663 8.691-9.663h.325c4.709.2 8.409 4.68 8.409 10.188Zm-68.52-37.313V42.615c0-.104.088-.579.284-1.396 1.737-27.029 13.429-40.171 35.696-40.171 8.962 0 16.75 3.405 22.512 9.821.754.871 2.3.892 3.121-.012 5.712-6.509 13.1-9.809 21.937-9.809 22.938 0 35.021 15.355 35.93 45.638-7.934 1.075-13.717 6.146-15.817 8.275l-3.125 2.408v-5.171c0-24.833-5.25-29.012-16.988-29.012-12.616 0-14.129 16.55-14.325 19.875-.304 5.937-4.437 10.417-9.608 10.417h-.221c-5.137-.23-9.162-5.055-9.162-11.009v-.183c-.034-11.971-5.371-19.1-14.254-19.1-12.946 0-16.963 4.004-16.963 29.012v68.192l-19.017 14.688Z"
  }),
  /* @__PURE__ */ n("path", {
    fill: "#ec6e25",
    d: "m165.883 91.539-15.875 12.271-15.171-11.733V67.535l31.046 24.004Zm9.441 31.844 15.884-12.288 15.195 11.763-.004 24.529-31.075-24.004Zm-64.934 39.882c-.042.014-.031.008-.014.001l-.286.016c-1.067.113-2 .171-2.784.175h-.075c-.241-.017-.462-.004-.858-.004a24.05 24.05 0 0 1-.829-.104c-.038-.013-.075-.013-.117-.013 0 0-.012 0-.054-.016 0 0-.046-.009-.088-.009-4.07-.633-10.07-3.125-15.408-11.5-1.967-3.083-3.737-6.225-6.212-10.666-5.534-9.946-9.913-17.255-16.088-21.005-.092-.045-2.221-1.379-5.375-2.245a23.775 23.775 0 0 0-1.771-.392l-1.858-.292c-.121 0-.233-.016-.554-.15-.684-.196-1.275-.433-1.713-.679a1.038 1.038 0 0 0-.25-.146l-.133-.091c-.117-.075-.233-.138-.346-.234-.208-.141-.404-.296-.604-.45-.008-.029-.042-.062-.042-.062-.571-.488-1.133-1.084-1.508-1.609-.05-.087-.1-.191-.15-.25-.129-.187-.233-.362-.367-.562l-.346-.675c-.054-.104-.116-.217-.225-.458l-.162-.392a4.5 4.5 0 0 1-.121-.308 9.748 9.748 0 0 0-.042-.092.188.188 0 0 0-.033-.1 10.976 10.976 0 0 1-.237-.817 10.23 10.23 0 0 1-.196-.85c-.038-.3-.088-.587-.125-.983a17.836 17.836 0 0 1-.054-.771c.008-.292.037-.587.066-.975.025-.308.075-.604.125-.954.063-.279.117-.546.217-.917.058-.25.129-.475.204-.7.025-.046.042-.121.042-.121.008-.025.016-.058.033-.075.067-.191.133-.366.254-.654l.463-.966.162-.25c.109-.188.225-.367.367-.596.829-1.188 1.829-2.129 3.083-2.834.188-.1.363-.2.579-.295.375-.184.863-.334 1.596-.484l.317-.071c.121-.025.233-.054.337-.054.117-.016.238-.025.438-.071.275-.029.533-.075.783-.129.404-.058 1.117-.2 1.609-.346a.998.998 0 0 0 .291-.062c1.975-.575 5.017-1.796 8.134-4.283 4.77-4.059 8.512-10.446 13.283-19.025 1.946-3.53 3.958-7.171 6.129-10.563 5.446-8.529 11.558-11.029 15.992-11.575l-.009 21.342c-.67.612-1.37 1.483-2.05 2.541-1.933 3.021-3.795 6.392-5.45 9.363l-.15.267c-3.458 6.22-7.383 13.27-12.491 19.187l-2.142 2a1.423 1.423 0 0 0-.129 1.983c.092.088.208.175.208.175l1.946 2.238c.067.062.15.125.242.204.221.246.421.517.641.771l.309.35c.012.042.121.183.137.217 4.659 5.762 8.363 12.42 11.325 17.75l.571 1.033c1.583 2.846 3.229 5.787 4.983 8.529a14.943 14.943 0 0 0 1.667 2.171c.504.429 1.35.967 2.563.967 1.166 0 2.375-.534 3.483-1.488.062-.037.225-.158.258-.187l1.592-1.538 24.154-18.529 8.271-6.479c.083-.063.154-.134.237-.229l71.888-55.605c1.787-1.808 6.662-6.125 13.142-6.958.25 0 .991-.029 1.766-.075l.671-.017c.583-.033 1.1-.054 1.317-.054 4.387.371 10.812 2.684 16.541 11.634 2.184 3.45 4.317 7.27 6.205 10.662 5.458 9.846 9.791 17.096 15.758 20.796.079.087.179.154.258.221 1.663 1.021 3.404 1.787 5.159 2.246.133.041.258.041.295.02.35.084.73.175 1.121.271.054.009.129.042.179.042.013 0 .15.021.159.021.475.087.958.162 1.491.225 4.367.454 7.767 4.712 7.884 9.871-.15 5.179-3.55 9.42-7.896 9.883-.854.096-3.233.417-4.15.654-9.354 3.158-13.879 11.442-18.667 20.229-.529.954-1.046 1.917-1.591 2.896-1.884 3.383-4 7.208-6.2 10.663-5.45 8.512-11.546 11.041-15.988 11.587v-21.337c.658-.584 1.358-1.459 2.054-2.542 1.967-3.092 3.804-6.417 5.425-9.35l.125-.196c3.029-5.454 9.467-15.325 14.596-21.762a1.419 1.419 0 0 0-.05-1.855c-.521-.558-1.146-1.283-1.829-2.07a1.192 1.192 0 0 0-.488-.346 60.342 60.342 0 0 1-3.341-4.304c-.113-.146-.204-.275-.275-.371 0 0-.067-.138-.088-.167-3.329-4.721-6.208-9.908-8.546-14.104l-.15-.279c-1.266-2.284-2.625-4.584-3.895-6.738l-1.463-2.487c-1.104-1.854-2.487-2.813-4.129-2.813-.596 0-1.138.142-1.604.296l-.392.154-20.537 15.563-43.45 33.587-39.988 31.125a1.463 1.463 0 0 0-.683.304l-3.113 2.417s-.146.125-.262.229c-1.692 1.717-6.554 5.909-12.904 6.929Z"
  }),
  /* @__PURE__ */ n("path", {
    fill: "#203057",
    d: "M9.142 250.096c8.762 0 12.862 3.154 12.862 10.838v3.341c0 7.492-4.242 10.98-12.862 10.98H6.646v11.116H0v-36.275h9.142Zm0 18.892c4.708 0 6.262-1.604 6.262-5.042v-2.683c0-3.442-1.129-5.233-6.171-5.233H6.596v12.958h2.546Zm39.011-18.892v5.654h-14.37v9.325h12.25v5.842h-12.25v9.567h15.033v5.937H27.283v-36.325h20.87Zm28.511 36.277h-6.313l-10.65-22.992.567 13.758v9.234h-6.454v-36.23h6.454l10.646 23.888-.704-15.313v-8.575h6.454v36.23Zm17.293-30.764c-3.579 0-5.042 1.129-5.042 4.571 0 4.566 3.63 4.191 9.142 5.041 4.192.654 8.196 2.354 8.196 9.609 0 8.383-3.629 11.92-12.342 11.92-9.046 0-11.921-4.383-11.921-10.225h6.546c.146 2.78 1.371 4.288 5.513 4.288 3.912 0 5.704-1.65 5.704-5.746 0-4.287-5.088-4.287-8.954-4.808-4.096-.517-8.429-2.542-8.429-10.034 0-6.783 4.141-10.316 11.587-10.316 6.55 0 10.883 2.4 11.496 9.654h-6.55c-.188-3.063-1.792-3.954-4.946-3.954Zm17.716-5.465h6.55v36.275h-6.55v-36.275Zm12.631 25.722v-15.358c0-7.68 3.346-10.838 12.108-10.838 8.763 0 12.392 3.158 12.392 10.838v15.358c0 7.492-3.771 10.837-12.392 10.837-8.621 0-12.108-3.345-12.108-10.837Zm18-.329v-14.7c0-3.296-.85-5.417-5.892-5.417-4.712 0-5.608 2.121-5.608 5.417v14.7c0 3.441.896 5.416 5.608 5.416 4.713 0 5.892-1.975 5.892-5.416Zm35.526 10.836h-6.313l-10.65-22.992.567 13.758v9.234h-6.454v-36.23h6.454l10.646 23.888-.704-15.313v-8.575h6.454v36.23Zm17.861-10.507v-15.358c0-7.68 3.346-10.838 12.108-10.838 8.763 0 12.392 3.158 12.392 10.838v15.358c0 7.492-3.771 10.837-12.392 10.837-8.621 0-12.108-3.345-12.108-10.837Zm18-.329v-14.7c0-3.296-.85-5.417-5.892-5.417-4.712 0-5.608 2.121-5.608 5.417v14.7c0 3.441.896 5.416 5.608 5.416 4.713 0 5.892-1.975 5.892-5.416Zm33.925-19.506H232.82v9.046h12.533v5.891H232.82v15.45h-6.454v-36.32h21.25v5.933Zm26.007 0h-14.791v9.046h12.533v5.891h-12.533v15.45h-6.455v-36.32h21.246v5.933Zm4.809-5.887h6.55v36.275h-6.55v-36.275Zm37.133 25.015c0 7.962-3.771 11.308-12.392 11.308-8.62 0-12.108-3.346-12.108-10.837v-14.746c0-7.679 3.346-10.838 12.108-10.838 8.763 0 12.392 3.204 12.392 11.263h-6.5c0-3.534-.85-5.513-5.892-5.513-4.712 0-5.608 1.979-5.608 5.417V275.3c0 3.442.896 5.421 5.608 5.421 4.713 0 5.892-1.979 5.892-5.562h6.5Zm26.243-25.063v5.654h-14.37v9.325h12.25v5.842h-12.25v9.567h15.033v5.937h-21.533v-36.325h20.87Z"
  })
], -1), ap = { class: "po-mt-5 sm:po-mt-0" }, rp = /* @__PURE__ */ n("p", { class: "-po-mt-1 po-text-xs po-text-slate-500" }, " 8th Floor, Allied Building , Chaandhanee Magu, Malé, 20156, Maldives ", -1), ip = { class: "po-mt-1 po-text-xs po-text-slate-500" }, up = { class: "po-mt-1 po-text-xs po-text-slate-500 po-flex -po-mb-2 po-flex-wrap" }, pp = {
  href: "https://www.pension.gov.mv",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, cp = /* @__PURE__ */ n("span", null, "www.pension.gov.mv", -1), dp = {
  href: "mailto:info@pension.gov.mv",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, fp = /* @__PURE__ */ n("span", null, "info@pension.gov.mv", -1), hp = {
  href: "tel:1441",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, mp = /* @__PURE__ */ n("span", null, "1441", -1), vp = { class: "po-flex lg:po-items-end po-flex-col" }, gp = { class: "-po-mt-1 po-text-xs po-text-slate-500 po-flex -po-mb-2 po-flex-wrap" }, bp = { class: "po-flex po-space-x-2 po-mt-3 lg:po-justify-end" }, yp = {
  name: "PoFooter"
}, E0 = /* @__PURE__ */ Object.assign(yp, {
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
      n("section", lp, [
        n("div", sp, [
          np,
          n("div", ap, [
            rp,
            n("p", ip, " © " + m(new Date().getFullYear()) + " Pension Office, All Rights Reserved. ", 1),
            n("p", up, [
              n("a", pp, [
                C(b(sr), { class: "po-w-3 po-h-3 po-fill-current" }),
                cp
              ]),
              n("a", dp, [
                C(b(or), { class: "po-w-3 po-h-3 po-fill-current" }),
                fp
              ]),
              n("a", hp, [
                C(b(nr), { class: "po-w-3 po-h-3 po-fill-current" }),
                mp
              ])
            ])
          ])
        ]),
        n("div", vp, [
          n("nav", gp, [
            C(Ru, {
              "show-btn": e.changelog !== null,
              changelog: e.changelog
            }, null, 8, ["show-btn", "changelog"]),
            C(ep),
            C(op)
          ]),
          n("div", bp, [
            C(no, {
              logo: Qu,
              title: "ISO/IEC 27001:2013 Certificate",
              src: ""
            }),
            C(no, {
              logo: Wu,
              title: "issa Certificate",
              src: ""
            })
          ])
        ])
      ])
    ]));
  }
}), xp = { class: "po-text-sm po-text-red-700" }, wp = {
  key: 0,
  class: "po-text-sm po-text-red-800 po-list-disc po-ml-5 po-mt-2"
}, Vp = {
  key: 1,
  class: "po-flex po-items-start po-space-x-3 po-p-5 po-bg-green-50 po-rounded-md po-mt-5"
}, $p = { class: "po-text-sm po-text-green-700" }, kp = {
  name: "PoFormStatusMessage"
}, L0 = /* @__PURE__ */ Object.assign(kp, {
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
      C(b(ft), { class: "po-shrink-0 po-w-6 po-stroke-red-600" }),
      n("div", null, [
        n("span", xp, m(e.message), 1),
        e.errorList !== null ? (r(), u("ul", wp, [
          (r(!0), u(z, null, M(e.errorList, (l) => (r(), u("li", null, m(l), 1))), 256))
        ])) : v("", !0)
      ])
    ], 2)) : (r(), u("div", Vp, [
      C(b(Tl), { class: "po-w-6 po-stroke-green-600" }),
      n("div", null, [
        n("span", $p, m(e.message), 1)
      ])
    ]));
  }
}), _p = {
  key: 0,
  class: "po-text-lg po-text-red-400 po-font-semibold"
}, Cp = {
  key: 0,
  class: "po-mt-1 po-flex -po-mb-3 po-flex-wrap"
}, Sp = { class: "po-flex po-flex-1" }, Pp = { class: "po-flex po-flex-col" }, Op = ["id"], Ep = ["id"], Lp = {
  name: "PoRadioInput"
}, T0 = /* @__PURE__ */ Object.assign(Lp, {
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
    l.value = o.modelValue, ro(() => {
      l.value = o.modelValue;
    }), U(l, () => {
      t("update:modelValue", l.value), t("selected", l.value);
    });
    const { errorMessage: s } = ve(o), a = k();
    return U(s, (i, p) => {
      a.value = s.value !== null && s.value !== "";
    }), (i, p) => (r(), D(b(Us), {
      modelValue: l.value,
      "onUpdate:modelValue": p[0] || (p[0] = (c) => l.value = c),
      class: S([{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }])
    }, {
      default: L(() => [
        C(b(Xt), { class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700" }, {
          default: L(() => [
            n("span", null, m(e.label), 1),
            e.required ? (r(), u("span", _p, "*")) : v("", !0)
          ]),
          _: 1
        }),
        e.options !== null ? (r(), u("div", Cp, [
          (r(!0), u(z, null, M(e.options, (c) => (r(), D(b(Gs), {
            as: "template",
            key: c.id,
            value: c.id
          }, {
            default: L(({ checked: d, active: f }) => [
              n("div", {
                class: S([
                  "po-transition-colors po-duration-100 po-ease-out po-mr-3",
                  "",
                  "",
                  "po-mb-3 po-pt-[0.13rem] po-relative po-flex po-cursor-pointer focus:po-outline-none"
                ])
              }, [
                n("span", {
                  class: S(["po-w-5 po-h-5 po-rounded-full po-border po-mr-2 po-flex po-items-center po-justify-center", [
                    "",
                    d ? "po-border-mpao-lightblue" : "po-border-slate-400"
                  ]])
                }, [
                  n("span", {
                    class: S(["po-w-3 po-h-3 po-rounded-full", [
                      "",
                      d ? "po-bg-mpao-lightblue" : "po-bg-transparent"
                    ]])
                  }, null, 2)
                ], 2),
                n("span", Sp, [
                  n("span", Pp, [
                    C(b(Xt), {
                      as: "span",
                      class: "po-block po-text-sm po-font-medium po-text-gray-900"
                    }, {
                      default: L(() => [
                        G(m(c.title), 1)
                      ]),
                      _: 2
                    }, 1024),
                    c.description ? (r(), D(b(Zs), {
                      key: 0,
                      as: "span",
                      class: "po-mt-1 po-flex po-items-center po-text-sm po-text-gray-500"
                    }, {
                      default: L(() => [
                        G(m(c.description), 1)
                      ]),
                      _: 2
                    }, 1024)) : v("", !0)
                  ])
                ])
              ], 2)
            ]),
            _: 2
          }, 1032, ["value"]))), 128))
        ])) : v("", !0),
        n("div", null, [
          e.message !== null ? (r(), u("p", {
            key: 0,
            class: "po-mt-2 po-text-sm po-text-slate-500",
            id: `${i.id}-description`
          }, m(e.message), 9, Op)) : v("", !0),
          a.value && b(s) !== null ? (r(), u("p", {
            key: 1,
            class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
            id: `${i.id}-error`
          }, [
            C(b(Yo), { class: "po-fill-current po-w-4 po-mt-[0.2rem] po-shrink-0" }),
            n("span", null, m(b(s)), 1)
          ], 8, Ep)) : v("", !0)
        ])
      ]),
      _: 1
    }, 8, ["modelValue", "class"]));
  }
}), Tp = { class: "po-bg-white po-relative po-group po-rounded-xl focus-within:po-ring-2 focus-within:po-ring-inset focus-within:po-ring-indigo-500" }, zp = { class: "po-block po-p-4 po-transition-colors po-duration-75 po-ease-linear" }, Dp = { class: "po-flex po-items-start po-space-x-2" }, Bp = { class: "po-flex po-items-start po-space-x-1" }, Mp = { class: "po-block po-text-2xl po-font-light po-text-slate-600" }, Ap = {
  key: 0,
  class: "po-text-sm po-text-green-500 po-font-medium po-pt-1"
}, jp = { class: "po-text-sm po-tracking-wide po-text-slate-500" }, Np = {
  name: "PoStatsBlock"
}, z0 = /* @__PURE__ */ Object.assign(Np, {
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
      (r(!0), u(z, null, M(e.items, (l) => (r(), u("div", Tp, [
        n("span", zp, [
          n("div", Dp, [
            n("div", null, [
              n("span", {
                class: S([
                  "po-inline-flex po-p-2 po-rounded-md",
                  l.bgColor,
                  l.iconColor
                ])
              }, [
                (r(), D(de(l.icon), { class: "po-w-4 po-h-4" }))
              ], 2)
            ]),
            n("div", null, [
              n("div", Bp, [
                n("span", Mp, m(l.value), 1),
                l.diff ? (r(), u("span", Ap, m(l.diff), 1)) : v("", !0)
              ]),
              n("h4", jp, m(l.label), 1)
            ])
          ])
        ])
      ]))), 256))
    ], 2));
  }
}), Ip = {
  key: 0,
  class: "po-flex po-space-x-3 po-items-start"
}, Fp = { class: "po-flex po-items-center po-space-x-2" }, Rp = ["datetime"], Hp = { class: "po-text-sm po-font-medium po-text-slate-600" }, qp = ["datetime"], Up = { class: "flex" }, Wp = { class: "po-flex po-pt-3 po-flex-wrap po-max-w-sm" }, Gp = ["onClick"], Zp = {
  key: 1,
  class: "po-w-full po-text-center"
}, Kp = { class: "po-inline-block po-text-sm po-italic po-text-slate-500" }, Qp = /* @__PURE__ */ n("span", { class: "po-text-lg po-text-slate-300 po-px-3 po-inline-block" }, "—", -1), Yp = ["datetime"], Xp = {
  name: "PoChatLogItem"
}, D0 = /* @__PURE__ */ Object.assign(Xp, {
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
      e.item.type !== "message" ? (r(), u("div", Ip, [
        e.item.type !== "first" && e.item.avatar !== "" ? (r(), u("div", {
          key: 0,
          class: "po-shrink-0 po-w-8 po-h-8 po-rounded-full po-p-1 po-bg-contain po-bg-slate-100",
          style: Ze({ "background-image": `url(${e.item.avatar})` })
        }, null, 4)) : v("", !0),
        n("div", {
          class: S([
            { "po-pt-1": e.item.type !== "first" },
            {
              "po-flex po-justify-end po-items-end po-flex-col": e.item.type === "first"
            }
          ])
        }, [
          n("span", Fp, [
            e.item.type === "first" ? (r(), u("time", {
              key: 0,
              datetime: e.item.time,
              class: "po-text-xs po-text-slate-400"
            }, m(e.item.time_human), 9, Rp)) : v("", !0),
            n("span", Hp, m(e.item.name), 1),
            e.item.type === "second" ? (r(), u("time", {
              key: 1,
              datetime: e.item.time,
              class: "po-text-xs po-text-slate-400"
            }, m(e.item.time_human), 9, qp)) : v("", !0)
          ]),
          n("div", {
            class: S([
              "po-mt-2 po-space-y-1",
              {
                "po-flex po-justify-end po-items-end po-flex-col": e.item.type === "first"
              }
            ])
          }, [
            F(t.$slots, "message", {}, () => [
              (r(!0), u(z, null, M(e.item.message, (l) => (r(), u("div", Up, [
                n("p", {
                  class: S([
                    "po-text-sm po-rounded-xl po-px-4 po-py-2",
                    {
                      "po-bg-slate-100 po-text-slate-600": e.item.type !== "first"
                    },
                    {
                      "po-bg-mpao-lightblue po-text-sky-50": e.item.type === "first"
                    }
                  ])
                }, m(l), 3)
              ]))), 256))
            ]),
            n("div", Wp, [
              (r(!0), u(z, null, M(e.item.actions, (l) => (r(), u("button", {
                onClick: (s) => t.$emit("button-click", l.label),
                class: "po-appearance-none po-border po-border-mpao-lightblue po-bg-white hover:po-bg-mpao-lightblue po-px-3 po-py-1 po-mb-2 po-mr-2 po-rounded-lg po-text-slate-500 hover:po-text-sky-100 po-transition-colors po-duration-150 po-ease-in-out po-text-sm po-ring-0 po-outline-none"
              }, m(l.label), 9, Gp))), 256))
            ])
          ], 2)
        ], 2)
      ])) : v("", !0),
      e.item.type === "message" ? (r(), u("div", Zp, [
        (r(!0), u(z, null, M(e.item.message, (l) => (r(), u("p", Kp, [
          G(m(l) + " ", 1),
          Qp,
          n("time", {
            datetime: e.item.time,
            class: "po-text-xs po-text-slate-400 po-inline-block"
          }, m(e.item.time_human), 9, Yp)
        ]))), 256))
      ])) : v("", !0)
    ], 2));
  }
}), Jp = {
  key: 0,
  class: "po-pointer-events-auto po-w-full po-max-w-sm po-overflow-hidden po-rounded-lg po-bg-mpao-lightblue po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5"
}, ec = { class: "po-p-4" }, tc = { class: "po-flex po-items-start" }, oc = { class: "po-flex-shrink-0" }, lc = { class: "po-ml-3 po-w-0 po-flex-1 po-pt-0.5" }, sc = { class: "po-text-sm po-font-medium po-text-sky-100" }, nc = { class: "po-mt-1 po-text-sm po-text-sky-300" }, ac = { class: "po-mt-3 po-flex po-space-x-4" }, rc = { class: "po-ml-4 po-flex po-flex-shrink-0" }, ic = /* @__PURE__ */ n("span", { class: "po-sr-only" }, "Close", -1), uc = {
  name: "PoNotification"
}, B0 = /* @__PURE__ */ Object.assign(uc, {
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
    const o = e, { show: l } = ve(o), s = k(!1);
    U(l, () => {
      s.value = !1, setTimeout(() => {
        s.value = !0;
      }, 100);
    });
    const a = k(!1);
    return U(s, () => {
      a.value = !1, setTimeout(() => {
        a.value = !0;
      }, 200);
    }), (i, p) => s.value ? (r(), D(Ge, {
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
        default: L(() => [
          a.value ? (r(), u("div", Jp, [
            n("div", ec, [
              n("div", tc, [
                n("div", oc, [
                  F(i.$slots, "icon")
                ]),
                n("div", lc, [
                  n("p", sc, m(e.label), 1),
                  n("p", nc, m(e.text), 1),
                  n("div", ac, [
                    n("button", {
                      onClick: p[0] || (p[0] = (c) => i.$emit("button-click", e.buttonLabel)),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-100 hover:po-text-sky-200 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, m(e.buttonLabel), 1),
                    n("button", {
                      onClick: p[1] || (p[1] = (c) => s.value = !1),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-300 hover:po-text-sky-500 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, " Dismiss ")
                  ])
                ]),
                n("div", rc, [
                  n("button", {
                    type: "button",
                    onClick: p[2] || (p[2] = (c) => s.value = !1),
                    class: "po-inline-flex po-rounded-md po-bg-mpao-lightblue po-text-sky-500 hover:po-text-sky-300 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                  }, [
                    ic,
                    C(b(It), {
                      class: "po-h-5 po-w-5",
                      "aria-hidden": "true"
                    })
                  ])
                ])
              ])
            ])
          ])) : v("", !0)
        ]),
        _: 3
      })
    ])) : v("", !0);
  }
}), pc = /* @__PURE__ */ n("div", { class: "po-fixed po-inset-0" }, null, -1), cc = { class: "po-absolute po-inset-0 po-overflow-hidden" }, dc = { class: "po-pointer-events-none po-fixed po-inset-y-0 po-right-0 po-flex po-max-w-full po-pl-10" }, fc = { class: "po-flex po-h-full po-flex-col po-overflow-y-auto po-bg-white po-shadow-xl" }, hc = { class: "po-bg-slate-50 po-py-6 po-px-4 sm:po-px-6" }, mc = { class: "po-flex po-items-center po-justify-between" }, vc = { class: "po-ml-3 po-flex po-h-7 po-items-center" }, gc = /* @__PURE__ */ n("span", { class: "po-sr-only" }, "Close panel", -1), bc = {
  key: 0,
  class: "po-mt-1"
}, yc = { class: "po-text-sm po-text-slate-500" }, xc = {
  key: 0,
  class: "po-bg-slate-50 po-rounded-b-xl po-shrink-0"
}, wc = {
  name: "PoSlideover"
}, M0 = /* @__PURE__ */ Object.assign(wc, {
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
    const o = e, { show: l } = ve(o), s = k(!1);
    U(l, () => {
      s.value = l.value;
    });
    function a() {
      s.value = !1, t("slideover-closed", !0);
    }
    return (i, p) => (r(), D(b(Ie), {
      as: "template",
      show: s.value
    }, {
      default: L(() => [
        C(b(et), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: a
        }, {
          default: L(() => [
            pc,
            n("div", {
              class: S(["po-fixed po-inset-0 po-overflow-hidden po-bg-black", e.screenOpacity])
            }, [
              n("div", cc, [
                n("div", dc, [
                  C(b(ke), {
                    as: "template",
                    enter: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "enter-from": "po-translate-x-full",
                    "enter-to": "po-translate-x-0",
                    leave: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "leave-from": "po-translate-x-0",
                    "leave-to": "po-translate-x-full"
                  }, {
                    default: L(() => [
                      C(b(tt), {
                        class: S([e.maxWidth, "po-pointer-events-auto po-w-screen"])
                      }, {
                        default: L(() => [
                          n("div", fc, [
                            n("div", hc, [
                              n("div", mc, [
                                C(b(To), { class: "po-text-lg po-font-medium po-text-slate-600" }, {
                                  default: L(() => [
                                    G(m(e.label), 1)
                                  ]),
                                  _: 1
                                }),
                                n("div", vc, [
                                  n("button", {
                                    type: "button",
                                    class: "po-rounded-md po-text-slate-500 hover:po-text-mpao-lightblue focus:po-outline-none focus:po-ring-2 focus:po-ring-white",
                                    onClick: a
                                  }, [
                                    gc,
                                    C(b(Ae), {
                                      class: "po-h-6 po-w-6",
                                      "aria-hidden": "true"
                                    })
                                  ])
                                ])
                              ]),
                              e.description ? (r(), u("div", bc, [
                                n("p", yc, m(e.description), 1)
                              ])) : v("", !0)
                            ]),
                            n("div", {
                              class: S([e.bgColor, "po-relative po-grow po-pt-6 po-px-4 sm:po-px-6"])
                            }, [
                              F(i.$slots, "content")
                            ], 2),
                            i.$slots.footer ? (r(), u("div", xc, [
                              F(i.$slots, "footer")
                            ])) : v("", !0)
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
}), Vc = /* @__PURE__ */ n("div", { class: "po-fixed po-inset-0 po-bg-gray-500 po-bg-opacity-25 po-transition-opacity" }, null, -1), $c = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto po-p-4 sm:po-p-6 md:po-p-20" }, kc = { class: "po-relative" }, _c = {
  key: 0,
  class: "po-max-h-96 scroll-py-3 po-overflow-y-auto po-p-3"
}, Cc = {
  name: "PoCommandPalette"
}, A0 = /* @__PURE__ */ Object.assign(Cc, {
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
    const t = e, o = k(""), { show: l } = ve(t), s = k(!1);
    U(l, () => {
      s.value = !1, setTimeout(() => {
        s.value = !0;
      }, 100);
    });
    function a(i) {
      i.ctrlKey && i.key === "b" && (s.value = !0);
    }
    return H(() => {
      window.addEventListener("keyup", a);
    }), Ke(() => {
      window.removeEventListener("keyup", a);
    }), (i, p) => (r(), D(b(Ie), {
      show: s.value,
      as: "template",
      onAfterLeave: p[2] || (p[2] = (c) => o.value = ""),
      appear: ""
    }, {
      default: L(() => [
        C(b(et), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: p[1] || (p[1] = (c) => s.value = !1)
        }, {
          default: L(() => [
            C(b(ke), {
              as: "template",
              enter: "po-ease-out po-duration-300",
              "enter-from": "po-opacity-0",
              "enter-to": "po-opacity-100",
              leave: "po-ease-in po-duration-200",
              "leave-from": "po-opacity-100",
              "leave-to": "po-opacity-0"
            }, {
              default: L(() => [
                Vc
              ]),
              _: 1
            }),
            n("div", $c, [
              C(b(ke), {
                as: "template",
                enter: "po-ease-out po-duration-300",
                "enter-from": "po-opacity-0 po-scale-95",
                "enter-to": "po-opacity-100 po-scale-100",
                leave: "po-ease-in po-duration-200",
                "leave-from": "po-opacity-100 po-scale-100",
                "leave-to": "po-opacity-0 po-scale-95"
              }, {
                default: L(() => [
                  C(b(tt), { class: "po-mx-auto po-max-w-xl po-transform po-divide-y po-divide-gray-100 po-overflow-hidden po-rounded-xl po-bg-white po-shadow-2xl po-ring-1 po-ring-black po-ring-opacity-5 po-transition-all" }, {
                    default: L(() => [
                      n("div", kc, [
                        C(b(sa), {
                          class: "po-pointer-events-none po-absolute po-top-3.5 po-left-4 po-h-5 po-w-5 po-text-gray-400",
                          "aria-hidden": "true"
                        }),
                        n("input", {
                          type: "text",
                          name: "",
                          class: "po-h-12 po-w-full po-border-0 po-bg-transparent po-pl-11 po-pr-4 po-text-gray-800 po-placeholder-gray-400 focus:po-ring-0 sm:po-text-sm",
                          placeholder: "Search...",
                          onChange: p[0] || (p[0] = (c) => o.value = c.target.value)
                        }, null, 32)
                      ]),
                      e.showContent ? (r(), u("div", _c, [
                        F(i.$slots, "content")
                      ])) : v("", !0)
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
}), Sc = /* @__PURE__ */ n("div", { class: "po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity" }, null, -1), Pc = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto" }, Oc = { class: "po-flex po-min-h-full po-items-start po-justify-center po-p-4 po-text-center sm:po-p-0" }, Ec = { class: "po-p-5" }, Lc = { class: "po-text-center po-space-y-3" }, Tc = { key: 1 }, zc = { class: "po-text-sm po-text-gray-600" }, Dc = { class: "po-border-t po-border-slate-200 po-flex po-divide-x po-divide-slate-200" }, Bc = {
  name: "PoAlert"
}, j0 = /* @__PURE__ */ Object.assign(Bc, {
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
    const o = e, { show: l } = ve(o), s = k(!1);
    U(l, () => {
      s.value = l.value;
    });
    function a() {
      s.value = !1, t("alert-closed", !0);
    }
    return (i, p) => (r(), D(b(Ie), {
      as: "template",
      show: s.value
    }, {
      default: L(() => [
        C(b(et), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: a
        }, {
          default: L(() => [
            C(b(ke), {
              as: "template",
              enter: "po-ease-out po-duration-300",
              "enter-from": "po-opacity-0",
              "enter-to": "po-opacity-100",
              leave: "po-ease-in po-duration-200",
              "leave-from": "po-opacity-100",
              "leave-to": "po-opacity-0"
            }, {
              default: L(() => [
                Sc
              ]),
              _: 1
            }),
            n("div", Pc, [
              n("div", Oc, [
                C(b(ke), {
                  as: "template",
                  enter: "po-ease-out po-duration-300",
                  "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                  "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                  leave: "po-ease-in po-duration-200",
                  "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                  "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                }, {
                  default: L(() => [
                    C(b(tt), { class: "po-relative po-transform po-overflow-hidden po-rounded-lg po-bg-white po-text-left po-shadow-xl po-transition-all sm:po-my-8 sm:po-w-full sm:po-max-w-sm" }, {
                      default: L(() => [
                        n("div", Ec, [
                          n("div", Lc, [
                            e.alertTitle !== "" ? (r(), D(b(To), {
                              key: 0,
                              as: "h3",
                              class: "po-text-lg po-font-medium po-leading-6 po-text-gray-900"
                            }, {
                              default: L(() => [
                                G(m(e.alertTitle), 1)
                              ]),
                              _: 1
                            })) : v("", !0),
                            e.alertDescription !== "" ? (r(), u("div", Tc, [
                              n("p", zc, m(e.alertDescription), 1)
                            ])) : v("", !0)
                          ])
                        ]),
                        n("div", Dc, [
                          n("button", {
                            onClick: p[0] || (p[0] = (c) => {
                              i.$emit("cancel", !0), a();
                            }),
                            class: "po-text-sm po-bg-white po-text-slate-500 hover:po-bg-slate-50 po-transition-colors po-duration-100 po-ease-out po-font-medium po-py-3 po-px-5 po-w-1/2 focus:po-ring-0"
                          }, m(e.cancelBtnLabel), 1),
                          n("button", {
                            onClick: p[1] || (p[1] = (c) => {
                              i.$emit("confirm", !0), i.$emit("button-click", "ok"), a();
                            }),
                            class: "po-text-sm po-bg-white po-text-mpao-lightblue hover:po-bg-slate-50 po-transition-colors po-duration-100 po-ease-out po-font-medium po-py-3 po-px-5 po-w-1/2 focus:po-ring-0"
                          }, m(e.okBtnLabel), 1)
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
}), Mc = {
  key: 0,
  class: "po-col-span-2 po-relative po-mt-5"
}, Ac = /* @__PURE__ */ n("span", {
  class: "po-absolute po-top-0 po-left-1 po--ml-px po-h-[calc(100%-7px)] po-w-0.5 po-bg-gray-200",
  "aria-hidden": "true"
}, null, -1), jc = { class: "po-relative po-space-y-5" }, Nc = { class: "po-flex po-space-x-2 po-items-start" }, Ic = { class: "log-item" }, Fc = { key: 0 }, Rc = {
  key: 0,
  class: "po-text-slate-500 po-text-xs"
}, Hc = {
  key: 1,
  class: "po-text-center po-py-10"
}, qc = { class: "po-text-sm po-text-slate-500" }, Uc = {
  name: "PoLogs"
}, N0 = /* @__PURE__ */ Object.assign(Uc, {
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
      e.items && e.items.length > 0 ? (r(), u("div", Mc, [
        Ac,
        n("div", jc, [
          (r(!0), u(z, null, M(e.items, (l, s) => (r(), u("div", Nc, [
            n("p", {
              class: S([
                "po-rounded-full po-w-2 po-h-2 border-1 po-border-white po-shrink-0",
                { "po-bg-orange-400": s !== e.items.length - 1 },
                ,
                { "po-bg-slate-300": s == e.items.length - 1 }
              ])
            }, null, 2),
            n("div", Ic, [
              n("span", null, [
                G(m(l.label) + " on " + m(l.date) + " " + m(l.by && l.by !== "" ? "by" : "") + " ", 1),
                l.by && l.by !== "" ? (r(), u("span", Fc, m(l.by), 1)) : v("", !0)
              ]),
              l.description && l.description !== "" ? (r(), u("blockquote", Rc, ' "' + m(l.description) + '" ', 1)) : v("", !0)
            ])
          ]))), 256))
        ])
      ])) : (r(), u("div", Hc, [
        n("span", qc, m(e.emptyLabel), 1)
      ]))
    ]));
  }
}), Wc = {
  key: 0,
  role: "list",
  class: "po-divide-y po-divide-gray-200 po-rounded-md po-border po-border-gray-200 po-mt-5"
}, Gc = { class: "po-flex po-items-center po-justify-between po-py-3 po-pl-3 po-pr-4 po-text-sm" }, Zc = { class: "po-flex po-w-0 po-flex-1 po-items-center" }, Kc = { class: "po-ml-2 po-w-0 po-flex-1 po-truncate" }, Qc = { class: "po-ml-4 po-flex-shrink-0 po-space-x-4" }, Yc = ["onClick"], Xc = ["onClick"], Jc = {
  key: 1,
  class: "po-py-10"
}, ed = { class: "po-text-sm po-text-slate-500" }, td = {
  name: "PoDownloadFileList"
}, I0 = /* @__PURE__ */ Object.assign(td, {
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
      e.files && e.files.length > 0 ? (r(), u("ul", Wc, [
        (r(!0), u(z, null, M(e.files, (s) => (r(), u("li", Gc, [
          n("div", Zc, [
            C(b(uo), {
              class: "po-h-5 po-w-5 po-flex-shrink-0 po-text-gray-400",
              "aria-hidden": "true"
            }),
            n("span", Kc, m(s.label), 1)
          ]),
          n("div", Qc, [
            n("a", {
              href: "#",
              onClick: ae((a) => o.$emit("button-click", s), ["prevent"]),
              class: "po-font-medium po-text-mpao-lightblue hover:po-text-indigo-500"
            }, m(e.linkLabel), 9, Yc),
            e.showViewBtn ? (r(), u("a", {
              key: 0,
              href: "#",
              onClick: ae((a) => o.$emit("view-click", s), ["prevent"]),
              class: "po-font-medium po-text-mpao-lightblue hover:po-text-indigo-500"
            }, m(e.viewBtnLabel), 9, Xc)) : v("", !0)
          ])
        ]))), 256))
      ])) : (r(), u("div", Jc, [
        n("span", ed, m(e.emptyLabel), 1)
      ]))
    ]));
  }
}), od = {
  name: "PoContentArea"
}, ld = { class: "shell-content--area po-max-w-[1370px]" };
function sd(e, t, o, l, s, a) {
  return r(), u("section", ld, [
    F(e.$slots, "default")
  ]);
}
const F0 = /* @__PURE__ */ at(od, [["render", sd]]), nd = {
  name: "AnimatedLogo"
}, ad = /* @__PURE__ */ Vl('<div><svg class="po-stroke-mpao-blue po-w-16 animated-logo" viewBox="0 0 62 55" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.76292 17.8572L7.7 17.9704V18.0682C6.87397 19.526 6.23618 20.649 5.58241 21.4779C4.93472 22.299 4.30505 22.7864 3.51417 23.0053C3.46261 23.0112 3.41718 23.0206 3.39088 23.026C3.35663 23.0331 3.31491 23.0425 3.27694 23.0511C3.25988 23.055 3.24357 23.0587 3.22903 23.0619C3.1106 23.0882 3.03712 23.1 3 23.1H2.93844L2.89561 23.1107L15.9876 0.600006H19.1308C17.2397 1.92747 16.1556 3.83665 15.5371 5.73245C14.8359 7.88203 14.7198 10.0514 14.7027 11.4258C13.1737 11.6033 11.0729 12.4434 9.38038 15.128C8.77075 16.0431 8.26353 16.9561 7.76713 17.8496L7.76292 17.8572Z"></path><path d="M48.1818 11.3241C48.047 8.39742 47.5389 6.05982 46.5472 4.07639C45.8153 2.61266 44.8203 1.39271 43.5945 0.5H46.8113L59.8583 23.0959C59.8303 23.0912 59.7891 23.0819 59.7213 23.0649C59.7166 23.0638 59.7117 23.0625 59.7066 23.0612C59.6302 23.042 59.5099 23.0118 59.3765 23.0027C58.59 22.7825 57.9627 22.2958 57.3176 21.4779C56.6586 20.6423 56.0158 19.508 55.1801 18.0331L55.1413 17.9647C54.8861 17.4553 54.6068 16.973 54.3362 16.5054L54.3327 16.4995C54.0565 16.0225 53.7893 15.5605 53.5472 15.0764L53.5333 15.0485L53.516 15.0226C51.7283 12.3411 49.7115 11.4988 48.1818 11.3241Z"></path><path d="M9.28397 39.6773C11.0717 42.3589 13.0885 43.2011 14.6182 43.3759C14.753 46.3026 15.2611 48.6402 16.2528 50.6236C16.9991 52.1163 17.9653 53.2992 19.1863 54.2H15.7881L2.74125 31.699C2.76073 31.6996 2.78031 31.7 2.8 31.7C2.89335 31.7 2.97474 31.7149 3.07903 31.7381C3.08854 31.7402 3.09897 31.7426 3.11023 31.7452C3.18647 31.7626 3.30082 31.7888 3.42319 31.7972C4.20888 32.0178 4.86081 32.5271 5.52047 33.3603C6.20216 34.2214 6.85697 35.382 7.66164 36.8405C8.26116 37.9396 8.76739 38.8512 9.276 39.665L9.27989 39.6712L9.28397 39.6773Z"></path><path d="M55.124 36.865L55.1331 36.8504L55.1412 36.8353C55.9431 35.3316 56.5997 34.1683 57.2697 33.307C57.9146 32.4778 58.5471 31.9616 59.2949 31.6961C59.4179 31.6866 59.5418 31.6616 59.6287 31.6442C59.6354 31.6428 59.6418 31.6415 59.6481 31.6403C59.719 31.6261 59.772 31.616 59.8123 31.6095L46.8115 54.1H43.8753C45.7283 52.7465 46.7867 50.8277 47.3889 48.9394C48.064 46.8226 48.1795 44.7058 48.1971 43.3742C49.7262 43.1967 51.8271 42.3567 53.5196 39.6719C53.8327 39.2016 54.1164 38.6849 54.3777 38.1995C54.4112 38.1375 54.4442 38.076 54.4768 38.0152C54.7049 37.5906 54.9148 37.1996 55.124 36.865Z"></path><path d="M32.2763 51.5708L32.2653 51.5582L32.2536 51.5465C32.0661 51.359 31.7413 51.2 31.4 51.2C31.3949 51.2 31.3894 51.2 31.3835 51.2C31.2956 51.1998 31.1323 51.1993 30.9751 51.2442C30.7932 51.2962 30.6132 51.4082 30.4904 51.6086C29.1941 53.0706 27.544 53.8 25.5 53.8C22.8209 53.8 20.828 52.9218 19.4532 51.2005C18.1148 49.5247 17.3123 46.988 17.1201 43.5109C18.6883 43.1579 19.8601 42.2673 20.5004 41.6896C20.5136 44.8271 20.8579 46.8152 21.6737 48.0181C22.5558 49.319 23.9045 49.6 25.5 49.6C27.4335 49.6 28.5187 48.2893 29.0946 46.9901C29.6604 45.7138 29.7966 44.3347 29.7999 43.8193C29.8943 42.5846 30.6602 41.8 31.5 41.8H31.5778C32.4558 41.8842 33.2 42.7102 33.2 43.9C33.2 45.6119 33.5619 47.0065 34.2986 47.9982C35.0485 49.0077 36.1459 49.544 37.4792 49.5996L37.4896 49.6H37.5C39.2304 49.6 40.5973 49.3258 41.4454 48.0081C41.849 47.3811 42.1078 46.5565 42.2692 45.5056C42.4311 44.4518 42.5 43.1353 42.5 41.5V24.4455L45.9 21.8182V41.5C45.9 41.4958 45.8996 41.5001 45.8978 41.519C45.8959 41.5381 45.8927 41.5719 45.887 41.6267L45.8842 41.6541C45.8752 41.7406 45.8636 41.8524 45.8521 41.9797C45.8264 42.2614 45.8 42.6283 45.8 43V43.9V43.9029V43.9059V43.9088V43.9117V43.9146V43.9175V43.9205V43.9234V43.9263V43.9292V43.9321V43.935V43.9379V43.9408V43.9437V43.9466V43.9495V43.9524V43.9553V43.9581V43.961V43.9639V43.9668V43.9696V43.9725V43.9754V43.9783V43.9811V43.984V43.9868V43.9897V43.9926V43.9954V43.9983V44.0011V44.004V44.0068V44.0096V44.0125V44.0153V44.0181V44.021V44.0238V44.0266V44.0295V44.0323V44.0351V44.0379V44.0407V44.0435V44.0463V44.0492V44.052V44.0548V44.0576V44.0603V44.0631V44.0659V44.0687V44.0715V44.0743V44.0771V44.0798V44.0826V44.0854V44.0882V44.0909V44.0937V44.0965V44.0992V44.102V44.1047V44.1075V44.1102V44.113V44.1157V44.1185V44.1212V44.1239V44.1267V44.1294V44.1321V44.1349V44.1376V44.1403V44.143V44.1457V44.1484V44.1512V44.1539V44.1566V44.1593V44.162V44.1647V44.1674V44.17V44.1727V44.1754V44.1781V44.1808V44.1835V44.1861V44.1888V44.1915V44.1941V44.1968V44.1995V44.2021V44.2048V44.2074V44.2101V44.2127V44.2154V44.218V44.2207V44.2233V44.2259V44.2285V44.2312V44.2338V44.2364V44.239V44.2417V44.2443V44.2469V44.2495V44.2521V44.2547V44.2573V44.2599V44.2625V44.2651V44.2677V44.2702V44.2728V44.2754V44.278V44.2806V44.2831V44.2857V44.2882V44.2908V44.2934V44.2959V44.2985V44.301V44.3036V44.3061V44.3087V44.3112V44.3137V44.3163V44.3188V44.3213V44.3238V44.3264V44.3289V44.3314V44.3339V44.3364V44.3389V44.3414V44.3439V44.3464V44.3489V44.3514V44.3539V44.3564V44.3588V44.3613V44.3638V44.3663V44.3687V44.3712V44.3737V44.3761V44.3786V44.381V44.3835V44.3859V44.3884V44.3908V44.3932V44.3957V44.3981V44.4005V44.403V44.4054V44.4078V44.4102V44.4126V44.415V44.4174V44.4199V44.4223V44.4247V44.427V44.4294V44.4318V44.4342V44.4366V44.439V44.4413V44.4437V44.4461V44.4484V44.4508V44.4532V44.4555V44.4579V44.4602V44.4626V44.4649V44.4672V44.4696V44.4719V44.4742V44.4766V44.4789V44.4812V44.4835V44.4858V44.4882V44.4905V44.4928V44.4951V44.4974V44.4997V44.5019V44.5042V44.5065V44.5088V44.5111V44.5133V44.5156V44.5179V44.5201V44.5224V44.5247V44.5269V44.5292V44.5314V44.5337V44.5359V44.5381V44.5404V44.5426V44.5448V44.547V44.5493V44.5515V44.5537V44.5559V44.5581V44.5603V44.5625V44.5647V44.5669V44.5691V44.5713V44.5734V44.5756V44.5778V44.58V44.5821V44.5843V44.5865V44.5886V44.5908V44.5929V44.5951V44.5972V44.5994V44.6015V44.6036V44.6058V44.6079V44.61V44.6121V44.6142V44.6164V44.6185V44.6206V44.6227V44.6248V44.6269V44.6289V44.631V44.6331V44.6352V44.6373V44.6393V44.6414V44.6435V44.6455V44.6476V44.6497V44.6517V44.6538V44.6558V44.6578V44.6599V44.6619V44.6639V44.666V44.668V44.67V44.672V44.674V44.676V44.678V44.68V44.682V44.684V44.686V44.688V44.69V44.692V44.6939V44.6959V44.6979V44.6998V44.7018V44.7037V44.7057V44.7076V44.7096V44.7115V44.7135V44.7154V44.7173V44.7193V44.7212V44.7231V44.725V44.7269V44.7288V44.7307V44.7326V44.7345V44.7364V44.7383V44.7402V44.7421V44.7439V44.7458V44.7477V44.7495V44.7514V44.7533V44.7551V44.757V44.7588V44.7606V44.7625V44.7643V44.7661V44.768V44.7698V44.7716V44.7734V44.7752V44.777V44.7788V44.7806V44.7824V44.7842V44.786V44.7878V44.7896V44.7914V44.7931V44.7949V44.7967V44.7984V44.8002V44.8019V44.8037V44.8054V44.8071V44.8089V44.8106V44.8123V44.8141V44.8158V44.8175V44.8192V44.8209V44.8226V44.8243V44.826V44.8277V44.8294V44.8311V44.8328V44.8344V44.8361V44.8378V44.8394V44.8411V44.8427V44.8444V44.846V44.8477V44.8493V44.851V44.8526V44.8542V44.8558V44.8575V44.8591V44.8607V44.8623V44.8639V44.8655V44.8671V44.8687V44.8702V44.8718V44.8734V44.875V44.8765V44.8781V44.8797V44.8812V44.8828V44.8843V44.8859V44.8874V44.8889V44.8905V44.892V44.8935V44.895V44.8965V44.898V44.8996V44.9011V44.9025V44.904V44.9055V44.907V44.9085V44.91V44.9114V44.9129V44.9144V44.9158V44.9173V44.9187V44.9202V44.9216V44.923V44.9245V44.9259V44.9273V44.9288V44.9302V44.9316V44.933V44.9344V44.9358V44.9372V44.9386V44.9399V44.9413V44.9427V44.9441V44.9454V44.9468V44.9482V44.9495V44.9509V44.9522V44.9535V44.9549V44.9562V44.9575V44.9589V44.9602V44.9615V44.9628V44.9641V44.9654V44.9667V44.968V44.9693V44.9706V44.9718V44.9731V44.9744V44.9757V44.9769V44.9782V44.9794V44.9807V44.9819V44.9832V44.9844V44.9856V44.9868V44.9881V44.9893V44.9905V44.9917V44.9929V44.9941V44.9953V44.9965V44.9977V44.9988V45V45.1V45.1006V45.1012V45.1017V45.1023V45.1029V45.1035V45.104V45.1046V45.1052V45.1057V45.1063V45.1069V45.1074V45.108V45.1085V45.1091V45.1096V45.1102V45.1107V45.1113V45.1118V45.1123V45.1129V45.1134V45.1139V45.1145V45.115V45.1155V45.1161V45.1166V45.1171V45.1176V45.1181V45.1186V45.1191V45.1196V45.1202V45.1207V45.1212V45.1217V45.1222V45.1226V45.1231V45.1236V45.1241V45.1246V45.1251V45.1256V45.1261V45.1265V45.127V45.1275V45.128V45.1284V45.1289V45.1294V45.1298V45.1303V45.1307V45.1312V45.1317V45.1321V45.1326V45.133V45.1335V45.1339V45.1343V45.1348V45.1352V45.1357V45.1361V45.1365V45.137V45.1374V45.1378V45.1383V45.1387V45.1391V45.1395V45.1399V45.1404V45.1408V45.1412V45.1416V45.142V45.1424V45.1428V45.1432V45.1436V45.144V45.1444V45.1448V45.1452V45.1456V45.146V45.1464V45.1468V45.1471V45.1475V45.1479V45.1483V45.1487V45.149V45.1494V45.1498V45.1501V45.1505V45.1509V45.1512V45.1516V45.152V45.1523V45.1527V45.153V45.1534V45.1537V45.1541V45.1544V45.1548V45.1551V45.1555V45.1558V45.1561V45.1565V45.1568V45.1572V45.1575V45.1578V45.1581V45.1585V45.1588V45.1591V45.1594V45.1598V45.1601V45.1604V45.1607V45.161V45.1613V45.1616V45.162V45.1623V45.1626V45.1629V45.1632V45.1635V45.1638V45.1641V45.1644V45.1647V45.165V45.1652V45.1655V45.1658V45.1661V45.1664V45.1667V45.167V45.1672V45.1675V45.1678V45.1681V45.1683V45.1686V45.1689V45.1691V45.1694V45.1697V45.1699V45.1702V45.1705V45.1707V45.171V45.1712V45.1715V45.1717V45.172V45.1722V45.1725V45.1727V45.173V45.1732V45.1735V45.1737V45.174V45.1742V45.1744V45.1747V45.1749V45.1751V45.1753C45.5039 48.1507 44.6544 50.2924 43.3031 51.6899C41.9582 53.0807 40.0524 53.8 37.5 53.8C35.4235 53.8 33.5685 53.0476 32.2763 51.5708Z"></path><path d="M22.8 23.2538V18.2178L29.3909 23.307L26.1939 25.8645L22.8 23.2538Z"></path><path d="M16.7 20.2V19.7H16.5V18.8V10.858C16.5042 10.8478 16.5096 10.8348 16.5142 10.8232C16.5488 10.7368 16.5963 10.6012 16.5998 10.4209C16.8474 7.03069 17.6799 4.61275 19.0737 3.04468C20.4543 1.49155 22.4511 0.699997 25.2 0.699997C27.2568 0.699997 29.1263 1.53906 30.5352 3.04197L30.5407 3.04785L30.5464 3.05355C30.7614 3.26854 31.0508 3.35 31.3 3.35C31.5492 3.35 31.8386 3.26854 32.0536 3.05355L32.0646 3.04251L32.0749 3.03081C33.4779 1.4408 35.1402 0.699997 37.3 0.699997C40.0769 0.699997 42.1441 1.62655 43.5571 3.42174C44.934 5.17104 45.7393 7.80743 45.886 11.3874C44.0184 11.8028 42.6345 12.9721 42.1 13.4936V13.2C42.1 10.0544 41.7835 8.06299 40.9925 6.86242C40.1497 5.58316 38.8495 5.3 37.3 5.3C35.4114 5.3 34.3769 6.59229 33.8399 7.85422C33.3055 9.11015 33.2 10.457 33.2 10.9C33.2 12.2634 32.2859 13.1 31.3 13.1H31.2204C30.2388 13.0141 29.4 12.0845 29.4 10.8C29.4 9.19015 29.0639 7.84653 28.3661 6.89234C27.6525 5.91665 26.5974 5.4 25.3 5.4C23.6267 5.4 22.3017 5.64608 21.4896 6.93319C21.1052 7.5425 20.863 8.34586 20.7131 9.3714C20.5626 10.4004 20.5 11.6909 20.5 13.3V30.4541L16.7 33.3833V20.2Z"></path><path d="M40.1 31.5462V36.5799L33.4225 31.4049L36.6974 28.9288L40.1 31.5462Z"></path><mask id="path-9-inside-1" fill="white"><path d="M58.7 30.1C58.9 30 59.5 30 59.8 29.9C60.9 29.8 61.8 28.7 61.8 27.4C61.8 26.1 60.9 25 59.8 24.9C59.7 24.9 59.5 24.9 59.4 24.8C59.3 24.8 59.2 24.8 59.1 24.7C59.1 24.7 59.1 24.7 59 24.7C58.6 24.6 58.1 24.4 57.7 24.1C57.7 24.1 57.7 24.1 57.6 24C56.1 23.1 55 21.2 53.6 18.7C53.1 17.8 52.6 16.9 52 16C50.5 13.7 48.9 13.1 47.8 13C47.7 13 47.6 13 47.5 13H47.3C47.1 13 46.9 13 46.9 13C45.2 13.2 44 14.3 43.6 14.8L25.2 29.1C25.2 29.1 25.2 29.1 25.1 29.2L23 30.8L16.8 35.5L16.4 35.9C16.4 35.9 16.4 35.9 16.3 35.9C16 36.1 15.7 36.3 15.4 36.3C15.1 36.3 14.9 36.2 14.7 36.1C14.5 35.9 14.4 35.8 14.3 35.5C13.9 34.8 13.4 34.1 13 33.3V33.1C12.2 31.7 11.3 30 10.1 28.6C10.1 28.6 10.1 28.6 10.1 28.5L10 28.4C9.9 28.3 9.9 28.3 9.8 28.2C9.8 28.2 9.8 28.2 9.7 28.1L9.2 27.5C9.2 27.5 9.2 27.5 9.1 27.5C9 27.3 9 27.1 9.1 27L9.6 26.5C10.9 25 11.9 23.2 12.8 21.6V21.5C13.2 20.7 13.7 19.9 14.2 19.1C14.4 18.8 14.6 18.6 14.7 18.5V13.1C13.6 13.2 12 13.9 10.6 16C10 16.9 9.5 17.8 9 18.7C7.8 20.9 6.8 22.5 5.6 23.5C4.8 24.1 4 24.4 3.5 24.6C3.5 24.6 3.5 24.6 3.4 24.6C3.3 24.6 3.1 24.7 3 24.7C2.9 24.7 2.9 24.7 2.8 24.7C2.7 24.7 2.7 24.7 2.7 24.7H2.6H2.5C2.3 24.7 2.2 24.8 2.1 24.8C2 24.8 2 24.8 2 24.9C1.7 25.1 1.4 25.3 1.2 25.6C1.2 25.7 1.1 25.7 1.1 25.8V25.9L0.999997 26.1C0.999997 26.2 0.999997 26.2 0.899997 26.3C0.899997 26.4 0.899997 26.4 0.799997 26.5C0.799997 26.6 0.799997 26.7 0.699997 26.7C0.699997 26.8 0.699997 26.9 0.699997 26.9C0.699997 27 0.699997 27.1 0.699997 27.1C0.699997 27.2 0.699997 27.2 0.699997 27.3C0.699997 27.4 0.699997 27.5 0.699997 27.5C0.699997 27.6 0.699997 27.7 0.699997 27.7C0.699997 27.8 0.699997 27.9 0.799997 27.9V28V28.1C0.799997 28.2 0.799997 28.2 0.899997 28.2L0.999997 28.4C0.999997 28.5 1.1 28.5 1.1 28.5C1.1 28.5 1.1 28.5 1.1 28.6C1.2 28.7 1.3 28.9 1.5 29C1.6 29 1.6 29.1 1.7 29.1C1.7 29.1 1.8 29.1 1.8 29.2C1.8 29.2 1.8 29.2 1.9 29.2C2 29.3 2.2 29.3 2.3 29.4C2.4 29.4 2.4 29.4 2.4 29.4L2.9 29.5C3.1 29.5 3.2 29.6 3.4 29.6C4.2 29.8 4.7 30.2 4.8 30.2C6.4 31.2 7.5 33 8.9 35.5C9.5 36.6 10 37.4 10.5 38.2C11.9 40.3 13.4 41 14.4 41.1C14.5 41.1 14.5 41.1 14.6 41.1C14.7 41.1 14.8 41.1 14.8 41.1C15 41.1 15.2 41.1 15.5 41.1H15.6C17.2 40.8 18.5 39.8 18.9 39.3L19 39.2L19.8 38.6C19.8 38.6 19.9 38.5 20 38.5L30.2 30.6L41.3 22L46.5 18H46.6C46.7 18 46.9 17.9 47 17.9C47.4 17.9 47.8 18.1 48.1 18.6L48.5 19.2C48.8 19.7 49.2 20.3 49.5 20.9V21C50.1 22.1 50.8 23.4 51.7 24.6C51.7 24.6 51.7 24.7 51.8 24.7C52.1 25.1 52.4 25.5 52.7 25.8C52.7 25.8 52.8 25.8 52.8 25.9C53 26.1 53.1 26.3 53.3 26.4C53.4 26.5 53.4 26.7 53.3 26.9C52 28.5 50.4 31.1 49.6 32.4V32.5C49.2 33.2 48.7 34.1 48.2 34.9C48 35.2 47.8 35.4 47.7 35.5V40.9C48.8 40.8 50.4 40.1 51.8 37.9C52.4 37 52.9 36 53.4 35.2C53.5 35 53.7 34.7 53.8 34.5C55.2 33 56.4 30.9 58.7 30.1Z"></path></mask><path d="M58.7 30.1C58.9 30 59.5 30 59.8 29.9C60.9 29.8 61.8 28.7 61.8 27.4C61.8 26.1 60.9 25 59.8 24.9C59.7 24.9 59.5 24.9 59.4 24.8C59.3 24.8 59.2 24.8 59.1 24.7C59.1 24.7 59.1 24.7 59 24.7C58.6 24.6 58.1 24.4 57.7 24.1C57.7 24.1 57.7 24.1 57.6 24C56.1 23.1 55 21.2 53.6 18.7C53.1 17.8 52.6 16.9 52 16C50.5 13.7 48.9 13.1 47.8 13C47.7 13 47.6 13 47.5 13H47.3C47.1 13 46.9 13 46.9 13C45.2 13.2 44 14.3 43.6 14.8L25.2 29.1C25.2 29.1 25.2 29.1 25.1 29.2L23 30.8L16.8 35.5L16.4 35.9C16.4 35.9 16.4 35.9 16.3 35.9C16 36.1 15.7 36.3 15.4 36.3C15.1 36.3 14.9 36.2 14.7 36.1C14.5 35.9 14.4 35.8 14.3 35.5C13.9 34.8 13.4 34.1 13 33.3V33.1C12.2 31.7 11.3 30 10.1 28.6C10.1 28.6 10.1 28.6 10.1 28.5L10 28.4C9.9 28.3 9.9 28.3 9.8 28.2C9.8 28.2 9.8 28.2 9.7 28.1L9.2 27.5C9.2 27.5 9.2 27.5 9.1 27.5C9 27.3 9 27.1 9.1 27L9.6 26.5C10.9 25 11.9 23.2 12.8 21.6V21.5C13.2 20.7 13.7 19.9 14.2 19.1C14.4 18.8 14.6 18.6 14.7 18.5V13.1C13.6 13.2 12 13.9 10.6 16C10 16.9 9.5 17.8 9 18.7C7.8 20.9 6.8 22.5 5.6 23.5C4.8 24.1 4 24.4 3.5 24.6C3.5 24.6 3.5 24.6 3.4 24.6C3.3 24.6 3.1 24.7 3 24.7C2.9 24.7 2.9 24.7 2.8 24.7C2.7 24.7 2.7 24.7 2.7 24.7H2.6H2.5C2.3 24.7 2.2 24.8 2.1 24.8C2 24.8 2 24.8 2 24.9C1.7 25.1 1.4 25.3 1.2 25.6C1.2 25.7 1.1 25.7 1.1 25.8V25.9L0.999997 26.1C0.999997 26.2 0.999997 26.2 0.899997 26.3C0.899997 26.4 0.899997 26.4 0.799997 26.5C0.799997 26.6 0.799997 26.7 0.699997 26.7C0.699997 26.8 0.699997 26.9 0.699997 26.9C0.699997 27 0.699997 27.1 0.699997 27.1C0.699997 27.2 0.699997 27.2 0.699997 27.3C0.699997 27.4 0.699997 27.5 0.699997 27.5C0.699997 27.6 0.699997 27.7 0.699997 27.7C0.699997 27.8 0.699997 27.9 0.799997 27.9V28V28.1C0.799997 28.2 0.799997 28.2 0.899997 28.2L0.999997 28.4C0.999997 28.5 1.1 28.5 1.1 28.5C1.1 28.5 1.1 28.5 1.1 28.6C1.2 28.7 1.3 28.9 1.5 29C1.6 29 1.6 29.1 1.7 29.1C1.7 29.1 1.8 29.1 1.8 29.2C1.8 29.2 1.8 29.2 1.9 29.2C2 29.3 2.2 29.3 2.3 29.4C2.4 29.4 2.4 29.4 2.4 29.4L2.9 29.5C3.1 29.5 3.2 29.6 3.4 29.6C4.2 29.8 4.7 30.2 4.8 30.2C6.4 31.2 7.5 33 8.9 35.5C9.5 36.6 10 37.4 10.5 38.2C11.9 40.3 13.4 41 14.4 41.1C14.5 41.1 14.5 41.1 14.6 41.1C14.7 41.1 14.8 41.1 14.8 41.1C15 41.1 15.2 41.1 15.5 41.1H15.6C17.2 40.8 18.5 39.8 18.9 39.3L19 39.2L19.8 38.6C19.8 38.6 19.9 38.5 20 38.5L30.2 30.6L41.3 22L46.5 18H46.6C46.7 18 46.9 17.9 47 17.9C47.4 17.9 47.8 18.1 48.1 18.6L48.5 19.2C48.8 19.7 49.2 20.3 49.5 20.9V21C50.1 22.1 50.8 23.4 51.7 24.6C51.7 24.6 51.7 24.7 51.8 24.7C52.1 25.1 52.4 25.5 52.7 25.8C52.7 25.8 52.8 25.8 52.8 25.9C53 26.1 53.1 26.3 53.3 26.4C53.4 26.5 53.4 26.7 53.3 26.9C52 28.5 50.4 31.1 49.6 32.4V32.5C49.2 33.2 48.7 34.1 48.2 34.9C48 35.2 47.8 35.4 47.7 35.5V40.9C48.8 40.8 50.4 40.1 51.8 37.9C52.4 37 52.9 36 53.4 35.2C53.5 35 53.7 34.7 53.8 34.5C55.2 33 56.4 30.9 58.7 30.1Z"></path></svg></div>', 1), rd = [
  ad
];
function id(e, t, o, l, s, a) {
  return r(), u("div", null, rd);
}
const ud = /* @__PURE__ */ at(nd, [["render", id]]), pd = {
  key: 0,
  class: "po-fixed po-z-[999] po-top-0 po-bottom-0 po-left-0 po-right-0 po-flex po-items-center po-justify-center"
}, cd = /* @__PURE__ */ n("div", { class: "po-absolute po-w-[6.2rem] po-h-[6.2rem] po-bg-transparent po-overflow-hidden po-rounded-xl" }, [
  /* @__PURE__ */ n("div", { class: "po-loading-rotate po-absolute -po-top-8 -po-left-8 po-w-[10rem] po-h-[10rem]" })
], -1), dd = { class: "relative po-bg-white po-w-24 po-h-24 po-flex po-items-center po-justify-center po-rounded-xl po-bg-opacity-50 po-backdrop-blur po-backdrop-filter po-z-10 po-shadow-xl" }, fd = {
  key: 0,
  class: "po-absolute po-left-1 po-right-1 po-text-center po-py-1 po-text-xs po-text-mpao-blue po-bg-white po-bg-opacity-50 po-backdrop-blur po-backdrop-filter"
}, hd = {
  name: "PoLoading"
}, R0 = /* @__PURE__ */ Object.assign(hd, {
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
    return (t, o) => e.show ? (r(), u("div", pd, [
      cd,
      n("div", dd, [
        e.label !== "" ? (r(), u("span", fd, m(e.label), 1)) : v("", !0),
        C(ud)
      ])
    ])) : v("", !0);
  }
}), md = { class: "po-py-5 po-flex po-items-start po-space-x-5" }, vd = ["name", "id", "checked", "aria-describedby"], gd = { class: "po-grow -po-mt-[0.26rem]" }, bd = ["for"], yd = { class: "po-mt-2 po-flex po-space-x-3" }, xd = ["href", "onClick"], wd = {
  name: "PoConsent"
}, H0 = /* @__PURE__ */ Object.assign(wd, {
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
    return (t, o) => (r(), u("div", md, [
      n("input", be({
        type: "checkbox",
        name: `${e.id}-field`,
        id: e.id,
        checked: e.modelValue,
        "aria-describedby": `${e.id}-description`
      }, t.$attrs, {
        onInput: o[0] || (o[0] = (l) => t.$emit("update:modelValue", l.target.checked)),
        class: "po-shrink-0 po-h-4 po-w-4 po-rounded border-slate-300 po-text-mpao-lightblue focus:po-ring-mpao-lightblue"
      }), null, 16, vd),
      n("div", gd, [
        n("label", {
          class: "po-block po-select-none po-text-sm po-text-slate-600 po-cursor-pointer",
          for: e.id
        }, m(e.label), 9, bd),
        n("div", yd, [
          (r(!0), u(z, null, M(e.links, (l) => (r(), u("a", {
            href: l.url,
            onClick: ae((s) => t.$emit("button-click", l.url), ["prevent"]),
            class: "po-text-sm po-text-mpao-lightblue hover:po-text-mpao-blue"
          }, m(l.label), 9, xd))), 256))
        ])
      ])
    ]));
  }
}), Vd = {
  class: "po-flex po-bg-slate-50 po-rounded-t-xl po-justify-center lg:po-justify-start po-px-4 po-pt-4 xl:po-pt-2 po-flex-wrap po-overflow-hidden",
  "aria-label": "Tabs"
}, $d = ["onClick", "aria-current"], kd = { key: 0 }, _d = {
  name: "PoCardTabs"
}, q0 = /* @__PURE__ */ Object.assign(_d, {
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
    return (l, s) => (r(), u("nav", Vd, [
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
        }, null, 8, ["class"])) : v("", !0),
        n("span", null, [
          G(m(a.name), 1),
          a.count ? (r(), u("span", kd, " (" + m(a.count) + ")", 1)) : v("", !0)
        ])
      ], 10, $d))), 128))
    ]));
  }
}), Cd = { class: "sm:po-hidden" }, Sd = /* @__PURE__ */ n("label", {
  for: "tabs",
  class: "po-sr-only"
}, "Select a tab", -1), Pd = ["value", "selected"], Od = { class: "po-hidden sm:po-block" }, Ed = {
  class: "po-flex po-space-x-4 po-pt-2",
  "aria-label": "Tabs"
}, Ld = ["onClick", "aria-current"], Td = {
  name: "PoTabs"
}, U0 = /* @__PURE__ */ Object.assign(Td, {
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
    const s = O(() => o.tabs.map((i) => i.name === o.currentTab ? { ...i, current: !0 } : { ...i, current: !1 }));
    function a(i) {
      const p = i.target.value, c = o.tabs[p];
      t("button-click", c);
    }
    return (i, p) => (r(), u(z, null, [
      n("div", Cd, [
        Sd,
        n("select", {
          id: "tabs",
          name: "tabs",
          class: "po-block po-w-full po-rounded-md po-border-gray-300 focus:po-border-indigo-500 focus:po-ring-indigo-500",
          onChange: a
        }, [
          (r(!0), u(z, null, M(e.tabs, (c, d) => (r(), u("option", {
            key: c.name,
            value: d,
            selected: c.current
          }, m(c.name), 9, Pd))), 128))
        ], 32)
      ]),
      n("div", Od, [
        n("nav", Ed, [
          (r(!0), u(z, null, M(b(s), (c) => (r(), u("span", {
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
            }, null, 8, ["class"])) : v("", !0),
            n("span", null, [
              n("span", null, m(c.name), 1),
              c.count && c.count > 0 ? (r(), u("span", {
                key: 0,
                class: S(["po-absolute po-py-1 po-px-2 po-rounded-full po-text-xs -po-top-3 -po-right-2 po-shadow-md po-flex po-items-center po-justify-center", [
                  c.current ? "po-bg-mpao-orange po-text-white" : "po-bg-slate-400 po-text-white group-hover:po-bg-mpao-orange group-hover:po-text-white"
                ]])
              }, [
                n("span", null, m(c.count), 1)
              ], 2)) : v("", !0)
            ])
          ], 10, Ld))), 128))
        ])
      ])
    ], 64));
  }
}), zd = { class: "po-mt-5 po-flex po-flex-col po-items-center po-justify-center po-px-5 po-py-8" }, Dd = {
  key: 1,
  class: "po-text-base po-font-medium po-text-slate-600 po-text-center"
}, Bd = {
  key: 2,
  class: "po-text-sm po-text-slate-500 po-text-center po-max-w-lg po-block po-mx-auto"
}, Md = {
  name: "PoEmpty"
}, W0 = /* @__PURE__ */ Object.assign(Md, {
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
    return (t, o) => (r(), u("div", zd, [
      n("div", {
        class: S(["po-space-y-2 po-flex po-items-center po-flex-col po-justify-center", [{ "po-mb-5": t.$slots.action }]])
      }, [
        e.icon ? (r(), D(de(e.icon), {
          key: 0,
          class: S(["po-w-10 po-h-10", e.iconColor])
        }, null, 8, ["class"])) : v("", !0),
        e.label !== "" ? (r(), u("span", Dd, m(e.label), 1)) : v("", !0),
        e.description !== "" ? (r(), u("span", Bd, m(e.description), 1)) : v("", !0)
      ], 2),
      F(t.$slots, "action")
    ]));
  }
});
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const dt = () => !1;
function Ad(e) {
  throw e;
}
function jd(e) {
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
const Nd = /&(gt|lt|amp|apos|quot);/g, Id = {
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
const Fd = { class: "po-flex po-text-sm po-text-gray-700 po-flex-col po-space-y-5" }, Rd = {
  key: 0,
  class: "po-text-base po-font-medium po-text-slate-700"
}, Hd = {
  key: 1,
  class: "po-border po-border-orange-300 po-bg-orange-50 po-rounded-lg po-p-5 po-flex po-items-center po-space-x-3"
}, qd = { class: "po-grow po-text-sm po-text-slate-600" }, Ud = {
  key: 2,
  class: "po-border po-border-red-300 po-bg-red-50 po-rounded-lg po-p-5 po-flex po-space-x-4"
}, Wd = { class: "po-grow" }, Gd = { class: "po-text-base po-text-slate-700 po-font-medium" }, Zd = { class: "po-text-sm po-text-slate-600" }, Kd = { class: "po-font-medium" }, Qd = { key: 0 }, Yd = { key: 0 }, Xd = /* @__PURE__ */ n("dt", null, "Name", -1), Jd = { key: 1 }, e1 = /* @__PURE__ */ n("dt", null, "Identifer", -1), t1 = { key: 2 }, o1 = /* @__PURE__ */ n("dt", null, "Date of birth", -1), l1 = { key: 3 }, s1 = /* @__PURE__ */ n("dt", null, "Reported Date of death", -1), n1 = {
  key: 3,
  class: "po-pt-5"
}, a1 = { class: "po-flex po-items-center po-space-x-1" }, r1 = /* @__PURE__ */ n("span", null, "File a dispute.", -1), i1 = {
  name: "PoDRStatus"
}, G0 = /* @__PURE__ */ Object.assign(i1, {
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
    return (l, s) => (r(), u("span", Fd, [
      e.record !== null ? (r(), u("h2", Rd, " Death was reported by " + m(e.record.institution), 1)) : v("", !0),
      e.request !== null && e.request.type_id === 1 ? (r(), u("div", Hd, [
        C(b(ft), { class: "po-shrink-0 po-w-6 po-stroke-orange-600" }),
        n("span", qd, " This is a " + m(e.request.type) + " request and is in " + m(e.request.state) + " state. ", 1)
      ])) : v("", !0),
      e.request !== null && e.request.type_id !== 1 ? (r(), u("div", Ud, [
        C(b(ft), { class: "po-shrink-0 po-w-6 po-h-6 po-stroke-red-600 po-stroke-2" }),
        n("div", Wd, [
          n("h3", Gd, m(e.request.type), 1),
          n("p", Zd, [
            G(" The following " + m(e.request.type) + " was reported: ", 1),
            n("span", Kd, [
              G(m(e.request.dispute_type), 1),
              e.request.date_of_death ? (r(), u("span", Qd, " (New date: " + m(e.request.date_of_death) + ")", 1)) : v("", !0)
            ])
          ])
        ])
      ])) : v("", !0),
      C(Ui, null, {
        content: L(() => [
          e.member !== null ? (r(), u("div", Yd, [
            Xd,
            n("dd", null, m(e.member.name), 1)
          ])) : v("", !0),
          e.member !== null ? (r(), u("div", Jd, [
            e1,
            n("dd", null, m(e.member.identifier), 1)
          ])) : v("", !0),
          e.member !== null ? (r(), u("div", t1, [
            o1,
            n("dd", null, m(e.member.dob), 1)
          ])) : v("", !0),
          e.record !== null ? (r(), u("div", l1, [
            s1,
            n("dd", null, m(e.record.date_of_death), 1)
          ])) : v("", !0)
        ]),
        _: 1
      }),
      e.request === null ? (r(), u("span", n1, [
        C(jt, {
          type: "simple",
          onButtonClick: o
        }, {
          label: L(() => [
            n("span", a1, [
              C(b(Ol), { class: "po-w-4 po-h-4 po-stroke-current" }),
              r1
            ])
          ]),
          _: 1
        })
      ])) : v("", !0)
    ]));
  }
}), u1 = {
  key: 0,
  role: "button",
  class: "po-w-6 po-h-6 po-rounded-lg po-bg-white genie-effect po-flex po-items-center po-justify-center hover:po-bg-slate-50 po-cursor-pointer"
}, p1 = {
  name: "PoTableAction"
}, Z0 = /* @__PURE__ */ Object.assign(p1, {
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
    return t.btnType === "view" ? o.value = Ml : t.btnType === "edit" ? o.value = jl : t.btnType === "delete" ? o.value = Il : t.btnType === "icon" && t.btnIcon && (o.value = t.btnIcon), t.btnType === "view" ? l.value = "po-stroke-emerald-400" : t.btnType === "edit" ? l.value = "po-stroke-blue-400" : t.btnType === "delete" ? l.value = "po-stroke-red-400" : l.value = t.iconColor, (s, a) => (r(), u("span", null, [
      e.btnType === "icon" || e.btnType === "delete" || e.btnType === "edit" || e.btnType === "view" ? (r(), u("span", u1, [
        (r(), D(de(o.value), {
          class: S(["po-w-4 po-stroke-2", l.value])
        }, null, 8, ["class"]))
      ])) : (r(), u("span", {
        key: 1,
        role: "button",
        class: S(["po-block po-text-sm genie-effect", e.textColor])
      }, m(e.label), 3))
    ]));
  }
}), c1 = { key: 0 }, d1 = {
  name: "Rufiyaa"
}, K0 = /* @__PURE__ */ Object.assign(d1, {
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
      e.amount !== null ? (r(), u("span", c1, m(t(e.amount)), 1)) : v("", !0)
    ]));
  }
}), f1 = {
  name: "PoHeading"
}, Q0 = /* @__PURE__ */ Object.assign(f1, {
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
      default: L(() => [
        G(m(e.text), 1)
      ]),
      _: 1
    }));
  }
});
function h1(e, t) {
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
const m1 = ["for"], v1 = { class: "po-capitalize" }, g1 = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, b1 = ["title"], y1 = { class: "po-relative po-mt-1" }, x1 = {
  key: 0,
  class: "po-shrink-0 po-pr-1 po-inline-flex po-flex-wrap po-max-h-44"
}, w1 = { class: "po-px-2 po-py-1 po-mb-1 po-mr-1 po-rounded-md po-text-sm po-text-white po-flex po-space-x-2 po-items-center po-bg-mpao-lightblue" }, V1 = ["onClick"], $1 = ["id"], k1 = {
  key: 0,
  class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
}, _1 = ["onClick", "value"], C1 = {
  class: /* @__PURE__ */ S(["po-block po-truncate"])
}, S1 = ["id"], P1 = ["id"], O1 = {
  name: "PoMultiSelect",
  components: { CheckIcon: zl }
}, Y0 = /* @__PURE__ */ Object.assign(O1, {
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
    const s = k(""), a = k([]);
    function i(y) {
      a.value.splice(y, 1), d();
    }
    function p(y) {
      let x = s.value.split(",");
      y.key === "Enter" && 0 < s.value.length && (y.preventDefault(), x.forEach((g) => {
        let $ = o.items.find(
          (_) => _.name.toLowerCase() === g.trim().toLowerCase()
        );
        $ && a.value.push($);
      }), s.value = ""), y.key === "Backspace" && s.value.length === 0 && a.value.pop(), d();
    }
    const c = k([]);
    function d() {
      c.value = a.value.map((y) => y.id);
    }
    H(() => {
      document.addEventListener("keydown", p);
    }), ce(() => {
      document.removeEventListener("keydown", p);
    });
    const f = k(!1), h = O(
      () => s.value === "" ? o.items : o.items.filter((y) => y.name.toLowerCase().includes(s.value.toLowerCase()))
    );
    let V = k();
    h1(V, () => {
      f.value = !1;
    });
    function w(y) {
      a.value.push(y), s.value = "", d();
    }
    return U(c, () => {
      t("update:modelValue", c.value);
    }), (y, x) => (r(), u("div", {
      ref_key: "multiSelectComponentRef",
      ref: V,
      class: S(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      n("label", {
        for: e.id,
        class: S([
          "po-text-sm po-font-medium po-flex po-items-center po-space-x-1",
          { "po-text-red-500": e.hasError },
          { "po-text-slate-700": !e.hasError }
        ])
      }, [
        n("span", v1, m(e.label), 1),
        e.required ? (r(), u("span", g1, "*")) : v("", !0),
        e.info !== null ? (r(), u("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          C(b(nl), { class: "po-fill-current" })
        ], 8, b1)) : v("", !0)
      ], 10, m1),
      n("div", y1, [
        n("div", {
          class: S([
            "po-border po-p-1 po-min-h-[2.38rem] po-flex po-flex-wrap po-items-center focus-within:po-border-mpao-lightblue po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white sm:po-text-sm",
            l()
          ])
        }, [
          a.value.length > 0 ? (r(), u("div", x1, [
            (r(!0), u(z, null, M(a.value, (g, $) => (r(), u("span", w1, [
              n("span", null, m(g.name), 1),
              n("span", {
                onClick: () => i($),
                class: "po-rounded-full po-bg-white po-flex po-items-center po-justify-center po-w-4 po-h-4 po-cursor-pointer"
              }, [
                C(b(It), { class: "po-w-3 po-fill-mpao-lightblue" })
              ], 8, V1)
            ]))), 256))
          ])) : v("", !0),
          Me(n("input", {
            id: e.id,
            "onUpdate:modelValue": x[0] || (x[0] = (g) => s.value = g),
            onFocus: x[1] || (x[1] = () => f.value = !0),
            class: "po-border-0 po-outline-none po-ring-0 po-grow"
          }, null, 40, $1), [
            [$t, s.value]
          ])
        ], 2),
        f.value ? (r(), u("ul", k1, [
          (r(!0), u(z, null, M(b(h), (g) => (r(), u("li", {
            onClick: () => w(g),
            key: g.id,
            value: g.id,
            class: S([
              "po-relative po-select-none po-py-2 hover:po-bg-mpao-lightblue hover:po-text-white po-cursor-pointer po-pl-3 po-pr-9"
            ])
          }, [
            n("span", C1, m(g.name), 1)
          ], 8, _1))), 128))
        ])) : v("", !0)
      ]),
      e.message !== null ? (r(), u("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, m(e.message), 9, S1)) : v("", !0),
      e.hasError && e.errorMessage !== null ? (r(), u("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-center po-space-x-1",
        id: `${e.id}-error`
      }, [
        C(b(lr), { class: "po-fill-current po-w-4" }),
        n("span", null, m(e.errorMessage), 1)
      ], 8, P1)) : v("", !0)
    ], 2));
  }
}), E1 = { class: "po-flex po-pl-5" }, L1 = /* @__PURE__ */ n("div", { class: "po-shrink-0 po-flex po-flex-col" }, [
  /* @__PURE__ */ n("div", { class: "po-w-[2px] po-shrink-0 po-h-10" }),
  /* @__PURE__ */ n("div", { class: "po-bg-gradient-to-t po-from-orange-400 po-via-red-300 po-to-blue-500 po-w-[2px] po-grow" }),
  /* @__PURE__ */ n("div", { class: "po-w-[2px] po-shrink-0 po-h-12" })
], -1), T1 = { class: "po-grow po-pl-5 po-pt-5 po-space-y-3" }, z1 = ["onClick"], D1 = { class: "-po-mt-1 po-flex po-space-x-3 po-items-center" }, B1 = { class: "po-block po-text-xs po-text-slate-400" }, M1 = { class: "po-text-xs po-text-slate-500 po-pt-1" }, A1 = {
  name: "PoTimeline"
}, X0 = /* @__PURE__ */ Object.assign(A1, {
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
    return (o, l) => (r(), u("div", E1, [
      L1,
      n("div", T1, [
        (r(!0), u(z, null, M(e.timeline, (s) => (r(), u("div", {
          class: S(["po-px-2 po-pt-2 po-pb-6 po-relative po-group", [{ "po-cursor-pointer": e.clickable }]]),
          onClick: (a) => o.$emit("button-click", s)
        }, [
          n("span", {
            class: S(["po-rounded-full po-absolute po-flex po-items-center po-justify-center", [
              { "po-w-4 po-h-4 -po-left-[1.8rem] po-bg-blue-400": s.current },
              {
                "po-w-3 po-h-3 -po-left-[1.68rem] po-bg-green-400": !s.current
              }
            ]])
          }, [
            n("span", {
              class: S(["po-rounded-full po-bg-white", [
                { "po-w-2 po-h-2": s.current },
                { "po-w-1 po-h-1": !s.current }
              ]])
            }, null, 2)
          ], 2),
          n("div", null, [
            n("div", D1, [
              n("h4", {
                class: S(["po-text-sm po-text-slate-600 po-font-medium", [{ "group-hover:po-text-mpao-lightblue": e.clickable }]])
              }, m(s.label), 3),
              n("span", B1, m(b($l)(s.date)), 1)
            ]),
            n("p", M1, m(s.description), 1)
          ])
        ], 10, z1))), 256))
      ])
    ]));
  }
}), j1 = {
  name: "PoTableCheckbox"
}, J0 = /* @__PURE__ */ Object.assign(j1, {
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
      e.isChecked ? (r(), D(b(to), {
        key: 0,
        onClick: l[0] || (l[0] = ae(() => o.$emit("checkboxClicked", e.itemId), ["prevent"])),
        class: "po-w-6 po-fill-mpao-lightblue"
      })) : v("", !0),
      e.disabled ? (r(), D(b(to), {
        key: 1,
        class: "po-w-6 po-fill-slate-400"
      })) : v("", !0),
      !e.isChecked && !e.disabled ? (r(), u("span", {
        key: 2,
        onClick: l[1] || (l[1] = ae(() => o.$emit("checkboxClicked", e.itemId), ["prevent"])),
        class: "po-h-5 po-w-5 po-rounded-full po-border-2 po-ml-[2px] po-block po-border-slate-300"
      })) : v("", !0)
    ], 64));
  }
}), N1 = { class: "po-p-4" }, I1 = { class: "po-flex po-items-start po-space-x-3" }, F1 = /* @__PURE__ */ n("span", { class: "po-sr-only" }, "Action icon", -1), R1 = { class: "po-w-0 po-flex-1 po-text-sm po-font-medium po-text-gray-400" }, H1 = { class: "po-ml-4 po-flex po-flex-shrink-0" }, q1 = /* @__PURE__ */ n("span", { class: "po-sr-only" }, "Close", -1), U1 = {
  name: "PoToast"
}, e4 = /* @__PURE__ */ Object.assign(U1, {
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
    const o = e, { show: l } = ve(o), s = k(!1);
    U(l, () => {
      s.value = l.value;
    });
    function a() {
      s.value = !1, t("toast-closed", !0);
    }
    setTimeout(() => {
      a();
    }, o.hideIn);
    const i = O(() => o.message === "" && o.actionType !== "" ? o.actionType === "success" ? "Saved Successfully!" : o.actionType === "danger" ? "Item deleted!" : o.actionType === "warn" ? "Attention needed!" : "Wrong action" : o.message);
    return (p, c) => (r(), D(Ge, { to: "#po-notifications-alert" }, [
      C(Ve, {
        "enter-active-class": "po-transform po-ease-out po-duration-300 po-transition",
        "enter-from-class": "po-translate-y-2 po-opacity-0 sm:po-translate-y-0 sm:po-translate-x-2",
        "enter-to-class": "po-translate-y-0 po-opacity-100 sm:po-translate-x-0",
        "leave-active-class": "po-transition po-ease-in po-duration-100",
        "leave-from-class": "po-opacity-100",
        "leave-to-class": "po-opacity-0"
      }, {
        default: L(() => [
          s.value ? (r(), u("div", {
            key: 0,
            class: S(["po-pointer-events-auto po-w-full po-overflow-hidden po-rounded-lg po-bg-gray-900 po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5", [
              { "po-max-w-[260px]": e.size === "sm" },
              { "po-max-w-[360px]": e.size === "lg" },
              { "po-max-w-[560px]": e.size === "xl" }
            ]])
          }, [
            n("div", N1, [
              n("div", I1, [
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
                  e.actionType === "success" ? (r(), D(b(oa), {
                    key: 0,
                    class: "po-w-4 po-h-4"
                  })) : v("", !0),
                  e.actionType === "danger" ? (r(), D(b(na), {
                    key: 1,
                    class: "po-w-4 po-h-4"
                  })) : v("", !0),
                  e.actionType === "warn" ? (r(), D(b(Yo), {
                    key: 2,
                    class: "po-w-4 po-h-4"
                  })) : v("", !0),
                  F1
                ], 2)) : v("", !0),
                n("p", R1, m(b(i)), 1),
                n("div", H1, [
                  n("button", {
                    type: "button",
                    onClick: a,
                    class: "po-inline-flex po-rounded-md po-bg-gray-900 po-text-gray-400 hover:po-text-gray-300 hover:po-bg-gray-700 po-transition-colors po-duration-150 po-ease-out focus:po-outline-none focus:po-ring-2 focus:po-ring-indigo-500 focus:po-ring-offset-2"
                  }, [
                    q1,
                    C(b(It), {
                      class: "po-h-5 po-w-5",
                      "aria-hidden": "true"
                    })
                  ])
                ])
              ])
            ])
          ], 2)) : v("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), W1 = ["for"], G1 = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Z1 = ["title"], K1 = { class: "po-relative po-mt-1" }, Q1 = {
  key: 1,
  class: "po-absolute po-top-0 po-left-0 po-right-0 po-bottom-0 po-overflow-hidden po-bg-white po-rounded-md po-border po-border-slate-300 po-flex po-items-center"
}, Y1 = { class: "po-grow" }, X1 = ["id"], J1 = {
  key: 0,
  class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
}, e0 = ["onClick"], t0 = {
  key: 0,
  class: "po-text-sm po-text-slate-600 po-p-4 po-block"
}, o0 = {
  key: 1,
  class: "po-mt-2 po-text-sm po-text-slate-500",
  id: "-description"
}, l0 = {
  key: 2,
  class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
  id: "-error"
}, s0 = {
  name: "PoSelectApi",
  components: { XMarkIcon: Ae }
}, t4 = /* @__PURE__ */ Object.assign(s0, {
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
    const o = e, l = k(null), s = k(!1), a = k([]);
    U(o, (y, x) => {
      a.value = o.options;
    }), O(() => {
      if (l.value) {
        const y = document.querySelector(".shell-content--area"), { top: x } = y.getBoundingClientRect(), g = y.scrollTop, { top: $, left: _, width: T } = l.value.getBoundingClientRect();
        return { relativeTop: $ - x + g, left: _, width: T };
      }
    });
    const i = k(null);
    k(null);
    const p = (y) => {
      !i.value.contains(y.target) && !l.value.contains(y.target) && (s.value = !1);
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
    function V(y) {
      h.value = y, t("selected", y), s.value = !1;
    }
    function w() {
      t("loadmore", !0);
    }
    return (y, x) => (r(), u("div", {
      ref_key: "containerRef",
      ref: i,
      class: S(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      n("label", {
        for: c.value,
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700"
      }, [
        n("span", null, m(e.label), 1),
        e.required ? (r(), u("span", G1, "*")) : v("", !0),
        e.info !== null ? (r(), u("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          C(b(Nt), { class: "po-fill-current" })
        ], 8, Z1)) : v("", !0)
      ], 8, W1),
      n("div", K1, [
        n("div", null, [
          e.loading ? (r(), D(At, {
            key: 0,
            class: "po-right-0 po-top-4",
            absolute: !0
          })) : v("", !0),
          h.value !== null ? (r(), u("div", Q1, [
            n("div", Y1, [
              F(y.$slots, "selectedOption", Le(Te(h.value)), () => [
                G(m(h.value), 1)
              ])
            ]),
            n("span", {
              class: "po-shrink-0 po-p-1 po-cursor-pointer",
              onClick: x[0] || (x[0] = (g) => {
                h.value = null, d.value = "";
              })
            }, [
              C(b(Ae), { class: "po-w-4 po-stroke-2 po-stroke-slate-400" })
            ])
          ])) : v("", !0),
          Me(n("input", {
            type: "text",
            name: "",
            id: c.value,
            ref_key: "selectBox",
            ref: l,
            "onUpdate:modelValue": x[1] || (x[1] = (g) => d.value = g),
            onInput: f,
            onFocus: x[2] || (x[2] = (g) => s.value = !0),
            class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm"
          }, null, 40, X1), [
            [$t, d.value]
          ])
        ]),
        s.value && a.value.length > 0 || s.value && e.emptyMessage ? (r(), u("div", J1, [
          a.value && a.value.length > 0 ? (r(), u(z, { key: 0 }, [
            (r(!0), u(z, null, M(a.value, (g) => (r(), u("div", {
              onClick: ($) => V(g)
            }, [
              F(y.$slots, "option", Le(Te(g)), () => [
                G(m(g), 1)
              ])
            ], 8, e0))), 256)),
            e.showMoreBtn ? (r(), u("span", {
              key: 0,
              role: "button",
              onClick: w,
              class: "po-text-sm po-text-semibold po-text-mpao-lightblue po-block po-text-center po-py-2 hover:po-bg-slate-50 po-transition-colors po-duration-150 po-ease-out"
            }, "More")) : v("", !0)
          ], 64)) : (r(), u(z, { key: 1 }, [
            e.emptyMessage ? (r(), u("span", t0, m(e.emptyMessage), 1)) : v("", !0)
          ], 64))
        ])) : v("", !0),
        e.message !== null ? (r(), u("p", o0, m(e.message), 1)) : v("", !0),
        e.errorMessage !== null ? (r(), u("p", l0, [
          n("span", null, m(e.errorMessage), 1)
        ])) : v("", !0)
      ])
    ], 2));
  }
}), n0 = { class: "po-bg-blue-300/20 po-border po-border-blue-200 po-p-3 po-mb-5 po-rounded-md po-text-sm sm:po-space-x-2 po-flex po-items-center po-flex-wrap" }, a0 = { class: "po-text-blue-500" }, r0 = {
  name: "PoMessage"
}, o4 = /* @__PURE__ */ Object.assign(r0, {
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
      n("span", a0, m(e.message), 1),
      e.btnName !== "" ? (r(), u("span", {
        key: 0,
        role: "button",
        onClick: l[0] || (l[0] = (s) => o.$emit("button-click", e.btnAction)),
        class: "po-text-blue-600 po-underline po-font-medium po-text-xs"
      }, m(e.btnName), 1)) : v("", !0)
    ]));
  }
}), i0 = {
  key: 0,
  class: "po-flex md:po-justify-end"
}, u0 = ["onClick"], p0 = { class: "po-text-xl po-font-medium po-text-slate-600 po-flex po-items-center po-space-x-1" }, c0 = {
  name: "PoPageStats"
}, l4 = /* @__PURE__ */ Object.assign(c0, {
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
    return (l, s) => e.stats !== null ? (r(), u("div", i0, [
      n("div", {
        class: S(["po-bg-slate-50 po-shadow-sm po-rounded-xl po-divide-x po-divide-slate-200 po-flex", e.padding])
      }, [
        (r(!0), u(z, null, M(e.stats, (a) => (r(), u("div", {
          class: S(["po-px-4 po-group", { "po-cursor-pointer": e.clickable }]),
          onClick: (i) => l.$emit("stat-click", a)
        }, [
          n("span", p0, [
            a.icon ? (r(), u("span", {
              key: 0,
              class: S(["po-w-5 po-h-5", o(a)])
            }, [
              (r(), D(de(a.icon)))
            ], 2)) : v("", !0),
            n("span", {
              class: S(["po-text-xl po-font-medium po-text-slate-600", { "group-hover:po-text-mpao-lightblue": e.clickable }])
            }, m(a.value), 3)
          ]),
          n("span", {
            class: S(["po-text-sm po-text-slate-500 po-block", { "group-hover:po-text-mpao-lightblue": e.clickable }])
          }, m(a.label), 3)
        ], 10, u0))), 256))
      ], 2)
    ])) : v("", !0);
  }
});
export {
  y0 as PoActionBar,
  j0 as PoAlert,
  os as PoAppIcon,
  hn as PoAppTray,
  jt as PoButton,
  x0 as PoCard,
  w0 as PoCardSearch,
  q0 as PoCardTabs,
  D0 as PoChatLogItem,
  O0 as PoCheckbox,
  A0 as PoCommandPalette,
  H0 as PoConsent,
  F0 as PoContentArea,
  G0 as PoDRStatus,
  Ui as PoDescriptionList,
  I0 as PoDownloadFileList,
  k0 as PoDynamicTable,
  W0 as PoEmpty,
  E0 as PoFooter,
  L0 as PoFormStatusMessage,
  Q0 as PoHeading,
  _0 as PoInputField,
  C0 as PoInputFile,
  R0 as PoLoading,
  N0 as PoLogs,
  o4 as PoMessage,
  Fe as PoModal,
  Y0 as PoMultiSelect,
  B0 as PoNotification,
  Cn as PoNotificationHub,
  l4 as PoPageStats,
  V0 as PoPageTitle,
  li as PoPagination,
  Xn as PoProfileSwitcher,
  T0 as PoRadioInput,
  rs as PoSearchBar,
  P0 as PoSectionMenu,
  t4 as PoSelectApi,
  Ua as PoSelectField,
  b0 as PoSidebarDrawer,
  M0 as PoSlideover,
  z0 as PoStatsBlock,
  $0 as PoTable,
  Z0 as PoTableAction,
  J0 as PoTableCheckbox,
  U0 as PoTabs,
  fr as PoTextarea,
  X0 as PoTimeline,
  e4 as PoToast,
  S0 as PoToggle,
  v0 as PoTopBar,
  K0 as Rufiyaa
};
