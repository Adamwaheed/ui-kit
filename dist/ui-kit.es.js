import { openBlock as u, createElementBlock as c, createElementVNode as a, ref as _, toRefs as Ve, watch as X, Fragment as B, createVNode as O, unref as k, withCtx as T, renderSlot as Z, createBlock as j, resolveDynamicComponent as de, createCommentVNode as x, computed as E, toDisplayString as V, withDirectives as ot, isRef as zl, withKeys as Bl, vModelText as Et, cloneVNode as jl, h as te, inject as ue, provide as ce, onMounted as Y, watchEffect as re, defineComponent as J, onUnmounted as pe, Teleport as Lt, reactive as Ml, shallowRef as kn, nextTick as vo, toRaw as Ae, normalizeClass as P, renderList as W, Transition as Be, withModifiers as ae, onBeforeMount as Nl, onBeforeUpdate as Il, onUpdated as ho, mergeProps as Oe, createTextVNode as Q, pushScopeId as Rl, popScopeId as Fl, withScopeId as Hl, markRaw as ql, shallowReactive as Wl, resolveComponent as _n, resolveDirective as Ul, normalizeStyle as Tt, toHandlers as Gl, normalizeProps as Ye, guardReactiveProps as Xe, onBeforeUnmount as Dt, vModelCheckbox as Zl, createStaticVNode as Kl } from "vue";
import { f as Qo, a as Yl } from "./FormatMoney-edf23aad.mjs";
function Xl(e, t) {
  return u(), c("svg", {
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
function Ql(e, t) {
  return u(), c("svg", {
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
function Jl(e, t) {
  return u(), c("svg", {
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
function es(e, t) {
  return u(), c("svg", {
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
function ts(e, t) {
  return u(), c("svg", {
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
function os(e, t) {
  return u(), c("svg", {
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
function ns(e, t) {
  return u(), c("svg", {
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
function ls(e, t) {
  return u(), c("svg", {
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
function ss(e, t) {
  return u(), c("svg", {
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
function as(e, t) {
  return u(), c("svg", {
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
function rs(e, t) {
  return u(), c("svg", {
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
function is(e, t) {
  return u(), c("svg", {
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
function to(e, t) {
  return u(), c("svg", {
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
function us(e, t) {
  return u(), c("svg", {
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
function ps(e, t) {
  return u(), c("svg", {
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
function mo(e, t) {
  return u(), c("svg", {
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
function Cn(e, t) {
  return u(), c("svg", {
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
function cs(e, t) {
  return u(), c("svg", {
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
function ds(e, t) {
  return u(), c("svg", {
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
function fs(e, t) {
  return u(), c("svg", {
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
function Jo(e, t) {
  return u(), c("svg", {
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
function ft(e, t) {
  return u(), c("svg", {
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
const vs = /* @__PURE__ */ a("div", {
  "aria-live": "assertive",
  class: "po-pointer-events-none po-fixed po-inset-0 po-flex po-items-start po-px-4 po-py-6 sm:po-p-6 po-z-[60]"
}, [
  /* @__PURE__ */ a("div", {
    class: "po-flex po-w-full po-flex-col po-items-end po-space-y-4 sm:po-items-end po-pt-[55px]",
    id: "po-notifications-alert"
  })
], -1), hs = { class: "po-bg-mpao-blue po-fixed po-top-0 po-w-full po-z-50 po-flex" }, ms = { class: "po-shrink-0 po-px-3 po-pt-3" }, gs = {
  for: "sidebar-drawer-toggle",
  role: "button",
  class: "genie-effect po-flex po-items-center po-justify-center po-bg-[#2e5266] po-rounded-full po-w-10 po-h-10 po-select-none po-text-slate-100"
}, bs = { class: "po-mx-auto po-max-w-full po-pr-4 po-grow sm:po-pr-4" }, ys = { class: "po-flex po-relative po-h-16 po-items-center po-justify-between po-space-x-12" }, xs = { class: "po-flex po-items-center po-space-x-3" }, ws = {
  key: 0,
  class: "po-block po-w-6 po-text-slate-100 md:po-hidden",
  role: "button"
}, $s = {
  name: "PoTopBar"
}, X4 = /* @__PURE__ */ Object.assign($s, {
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
    const o = e, n = _(""), l = _(""), { avatar: s, logo: r } = Ve(o);
    X(s, () => {
      n.value = s.value;
    }), X(r, () => {
      l.value = r.value;
    });
    function i(d) {
      t("profileSwitcherClick", d);
    }
    function p(d) {
      t("query", d);
    }
    function f(d) {
      t("onSearchClear", d);
    }
    return (d, h) => (u(), c(B, null, [
      vs,
      a("nav", hs, [
        a("div", ms, [
          a("label", gs, [
            O(k(es), { class: "po-w-6 po-fill-current" })
          ])
        ]),
        a("div", bs, [
          a("div", ys, [
            O(k(Ps), { "app-name": e.appName }, {
              icon: T(() => [
                Z(d.$slots, "appIcon", {}, () => [
                  e.appIcon ? (u(), j(de(e.appIcon), { key: 0 })) : x("", !0)
                ])
              ]),
              _: 3
            }, 8, ["app-name"]),
            e.hasSearch ? (u(), j(k(As), {
              key: 0,
              onQuery: p,
              onOnClear: f,
              "current-query": e.currentQuery
            }, null, 8, ["current-query"])) : x("", !0),
            a("div", xs, [
              e.hasSearch ? (u(), c("span", ws, [
                O(k(mo), { class: "po-stroke-current" })
              ])) : x("", !0),
              O(k(Qa), {
                notifications: e.notifications,
                "has-new-notifications": e.hasNewNotifications
              }, null, 8, ["notifications", "has-new-notifications"]),
              O(k(Ia), {
                "app-list": e.appList,
                "open-in-new-tab": !0
              }, null, 8, ["app-list"]),
              O(k(kr), {
                "user-object": e.userObject,
                avatar: n.value,
                logo: l.value,
                onButtonClick: i
              }, null, 8, ["user-object", "avatar", "logo"])
            ])
          ])
        ])
      ])
    ], 64));
  }
}), Vs = { class: "po-flex po-items-center po-justify-center po-space-x-3" }, ks = { class: "po-w-8 po-text-slate-100 app-icon" }, _s = { class: "po-font-light po-text-lg po-text-slate-100" }, Cs = { class: "po-hidden md:po-block" }, Ss = { class: "po-block md:po-hidden" }, Os = {
  name: "PoAppIcon"
}, Ps = /* @__PURE__ */ Object.assign(Os, {
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
      let n = t.appName.match(/\b[A-Z]/g).join("");
      return n.length === 1 ? t.appName.substring(0, 3) : n;
    });
    return (n, l) => (u(), c("div", Vs, [
      a("div", ks, [
        Z(n.$slots, "icon")
      ]),
      a("span", _s, [
        a("span", Cs, V(e.appName), 1),
        a("span", Ss, V(k(o)), 1)
      ])
    ]));
  }
}), Es = { class: "po-flex-grow po-hidden po-relative md:po-block" }, Ls = ["placeholder", "onKeyup"], Ts = { class: "po-absolute po-inset-y-0 po-left-0 po-flex po-items-center po-pl-3 po-pointer-events-none po-transition-all po-ease-linear po-duration-100 po-text-slate-400 po-origin-center peer-hover/search:po-scale-105 peer-focus/search:po-text-slate-100" }, Ds = {
  name: "PoSearchBar"
}, As = /* @__PURE__ */ Object.assign(Ds, {
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
    let o = _("");
    const n = (l) => {
      t("query", o.value);
    };
    return X(o, async (l, s) => {
      l === "" && t("onClear", !0);
    }), (l, s) => (u(), c("div", Es, [
      ot(a("input", {
        "onUpdate:modelValue": s[0] || (s[0] = (r) => zl(o) ? o.value = r : o = r),
        type: "text",
        id: "main-search",
        placeholder: e.placeholder,
        onKeyup: Bl(n, ["enter"]),
        class: "peer/search po-bg-transparent po-border po-border-transparent po-text-slate-100 po-text-sm po-rounded-md po-ring-0 po-outline-none focus:po-outline-none focus:po-ring-0 po-transition-colors po-ease-linear po-duration-100 po-block po-w-full po-pl-10 po-p-2.5 po-appearance-none focus:po-border-slate-400 hover:po-border-slate-600"
      }, null, 40, Ls), [
        [Et, k(o)]
      ]),
      a("div", Ts, [
        O(k(mo), { class: "po-w-5 po-h-5 po-stroke-current" })
      ])
    ]));
  }
});
function ie(e, t, ...o) {
  if (e in t) {
    let l = t[e];
    return typeof l == "function" ? l(...o) : l;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((l) => `"${l}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, ie), n;
}
var _e = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(_e || {}), ze = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(ze || {});
function ee({ visible: e = !0, features: t = 0, ourProps: o, theirProps: n, ...l }) {
  var s;
  let r = On(n, o), i = Object.assign(l, { props: r });
  if (e || t & 2 && r.static)
    return Kt(i);
  if (t & 1) {
    let p = (s = r.unmount) == null || s ? 0 : 1;
    return ie(p, { [0]() {
      return null;
    }, [1]() {
      return Kt({ ...l, props: { ...r, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Kt(i);
}
function Kt({ props: e, attrs: t, slots: o, slot: n, name: l }) {
  var s, r;
  let { as: i, ...p } = At(e, ["unmount", "static"]), f = (s = o.default) == null ? void 0 : s.call(o, n), d = {};
  if (n) {
    let h = !1, $ = [];
    for (let [m, g] of Object.entries(n))
      typeof g == "boolean" && (h = !0), g === !0 && $.push(m);
    h && (d["data-headlessui-state"] = $.join(" "));
  }
  if (i === "template") {
    if (f = Sn(f ?? []), Object.keys(p).length > 0 || Object.keys(t).length > 0) {
      let [h, ...$] = f ?? [];
      if (!zs(h) || $.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${l} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(p).concat(Object.keys(t)).map((y) => y.trim()).filter((y, v, w) => w.indexOf(y) === v).sort((y, v) => y.localeCompare(v)).map((y) => `  - ${y}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((y) => `  - ${y}`).join(`
`)].join(`
`));
      let m = On((r = h.props) != null ? r : {}, p), g = jl(h, m);
      for (let y in m)
        y.startsWith("on") && (g.props || (g.props = {}), g.props[y] = m[y]);
      return g;
    }
    return Array.isArray(f) && f.length === 1 ? f[0] : f;
  }
  return te(i, Object.assign({}, p, d), { default: () => f });
}
function Sn(e) {
  return e.flatMap((t) => t.type === B ? Sn(t.children) : [t]);
}
function On(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, o = {};
  for (let n of e)
    for (let l in n)
      l.startsWith("on") && typeof n[l] == "function" ? (o[l] != null || (o[l] = []), o[l].push(n[l])) : t[l] = n[l];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(o).map((n) => [n, void 0])));
  for (let n in o)
    Object.assign(t, { [n](l, ...s) {
      let r = o[n];
      for (let i of r) {
        if (l instanceof Event && l.defaultPrevented)
          return;
        i(l, ...s);
      }
    } });
  return t;
}
function Pn(e) {
  let t = Object.assign({}, e);
  for (let o in t)
    t[o] === void 0 && delete t[o];
  return t;
}
function At(e, t = []) {
  let o = Object.assign({}, e);
  for (let n of t)
    n in o && delete o[n];
  return o;
}
function zs(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Bs = 0;
function js() {
  return ++Bs;
}
function se() {
  return js();
}
var ne = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(ne || {});
function L(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let En = Symbol("Context");
var oe = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(oe || {});
function Ms() {
  return nt() !== null;
}
function nt() {
  return ue(En, null);
}
function go(e) {
  ce(En, e);
}
function en(e, t) {
  if (e)
    return e;
  let o = t ?? "button";
  if (typeof o == "string" && o.toLowerCase() === "button")
    return "button";
}
function bo(e, t) {
  let o = _(en(e.value.type, e.value.as));
  return Y(() => {
    o.value = en(e.value.type, e.value.as);
  }), re(() => {
    var n;
    o.value || L(t) && L(t) instanceof HTMLButtonElement && !((n = L(t)) != null && n.hasAttribute("type")) && (o.value = "button");
  }), o;
}
var Ns = Object.defineProperty, Is = (e, t, o) => t in e ? Ns(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, tn = (e, t, o) => (Is(e, typeof t != "symbol" ? t + "" : t, o), o);
let Rs = class {
  constructor() {
    tn(this, "current", this.detect()), tn(this, "currentId", 0);
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
}, vt = new Rs();
function be(e) {
  if (vt.isServer)
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
function Fs({ container: e, accept: t, walk: o, enabled: n }) {
  re(() => {
    let l = e.value;
    if (!l || n !== void 0 && !n.value)
      return;
    let s = be(e);
    if (!s)
      return;
    let r = Object.assign((p) => t(p), { acceptNode: t }), i = s.createTreeWalker(l, NodeFilter.SHOW_ELEMENT, r, !1);
    for (; i.nextNode(); )
      o(i.currentNode);
  });
}
let oo = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var le = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(le || {}), Ge = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Ge || {}), Hs = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Hs || {});
function zt(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(oo)).sort((t, o) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (o.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var yo = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(yo || {});
function Ln(e, t = 0) {
  var o;
  return e === ((o = be(e)) == null ? void 0 : o.body) ? !1 : ie(t, { [0]() {
    return e.matches(oo);
  }, [1]() {
    let n = e;
    for (; n !== null; ) {
      if (n.matches(oo))
        return !0;
      n = n.parentElement;
    }
    return !1;
  } });
}
function We(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let qs = ["textarea", "input"].join(",");
function Ws(e) {
  var t, o;
  return (o = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, qs)) != null ? o : !1;
}
function Tn(e, t = (o) => o) {
  return e.slice().sort((o, n) => {
    let l = t(o), s = t(n);
    if (l === null || s === null)
      return 0;
    let r = l.compareDocumentPosition(s);
    return r & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : r & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function me(e, t, { sorted: o = !0, relativeTo: n = null, skipElements: l = [] } = {}) {
  var s;
  let r = (s = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? s : document, i = Array.isArray(e) ? o ? Tn(e) : e : zt(e);
  l.length > 0 && i.length > 1 && (i = i.filter((g) => !l.includes(g))), n = n ?? r.activeElement;
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
      return Math.max(0, i.indexOf(n)) - 1;
    if (t & 4)
      return Math.max(0, i.indexOf(n)) + 1;
    if (t & 8)
      return i.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), d = t & 32 ? { preventScroll: !0 } : {}, h = 0, $ = i.length, m;
  do {
    if (h >= $ || h + $ <= 0)
      return 0;
    let g = f + h;
    if (t & 16)
      g = (g + $) % $;
    else {
      if (g < 0)
        return 3;
      if (g >= $)
        return 1;
    }
    m = i[g], m == null || m.focus(d), h += p;
  } while (m !== r.activeElement);
  return t & 6 && Ws(m) && m.select(), m.hasAttribute("tabindex") || m.setAttribute("tabindex", "0"), 2;
}
function Yt(e, t, o) {
  vt.isServer || re((n) => {
    document.addEventListener(e, t, o), n(() => document.removeEventListener(e, t, o));
  });
}
function Dn(e, t, o = E(() => !0)) {
  function n(s, r) {
    if (!o.value || s.defaultPrevented)
      return;
    let i = r(s);
    if (i === null || !i.getRootNode().contains(i))
      return;
    let p = function f(d) {
      return typeof d == "function" ? f(d()) : Array.isArray(d) || d instanceof Set ? d : [d];
    }(e);
    for (let f of p) {
      if (f === null)
        continue;
      let d = f instanceof HTMLElement ? f : L(f);
      if (d != null && d.contains(i) || s.composed && s.composedPath().includes(d))
        return;
    }
    return !Ln(i, yo.Loose) && i.tabIndex !== -1 && s.preventDefault(), t(s, i);
  }
  let l = _(null);
  Yt("mousedown", (s) => {
    var r, i;
    o.value && (l.value = ((i = (r = s.composedPath) == null ? void 0 : r.call(s)) == null ? void 0 : i[0]) || s.target);
  }, !0), Yt("click", (s) => {
    l.value && (n(s, () => l.value), l.value = null);
  }, !0), Yt("blur", (s) => n(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Pe = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Pe || {});
let je = J({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: o }) {
  return () => {
    let { features: n, ...l } = e, s = { "aria-hidden": (n & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
    return ee({ ourProps: s, theirProps: l, slot: {}, attrs: o, slots: t, name: "Hidden" });
  };
} });
function An(e = {}, t = null, o = []) {
  for (let [n, l] of Object.entries(e))
    Bn(o, zn(t, n), l);
  return o;
}
function zn(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Bn(e, t, o) {
  if (Array.isArray(o))
    for (let [n, l] of o.entries())
      Bn(e, zn(t, n.toString()), l);
  else
    o instanceof Date ? e.push([t, o.toISOString()]) : typeof o == "boolean" ? e.push([t, o ? "1" : "0"]) : typeof o == "string" ? e.push([t, o]) : typeof o == "number" ? e.push([t, `${o}`]) : o == null ? e.push([t, ""]) : An(o, t, e);
}
function jn(e) {
  var t;
  let o = (t = e == null ? void 0 : e.form) != null ? t : e.closest("form");
  if (o) {
    for (let n of o.elements)
      if (n.tagName === "INPUT" && n.type === "submit" || n.tagName === "BUTTON" && n.type === "submit" || n.nodeName === "INPUT" && n.type === "image") {
        n.click();
        return;
      }
  }
}
function Mn(e, t, o) {
  let n = _(o == null ? void 0 : o.value), l = E(() => e.value !== void 0);
  return [E(() => l.value ? e.value : n.value), function(s) {
    return l.value || (n.value = s), t == null ? void 0 : t(s);
  }];
}
function Us() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Gs(e, t, o) {
  vt.isServer || re((n) => {
    window.addEventListener(e, t, o), n(() => window.removeEventListener(e, t, o));
  });
}
var ge = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(ge || {});
function xo() {
  let e = _(0);
  return Gs("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function wo(e, t, o, n) {
  vt.isServer || re((l) => {
    e = e ?? window, e.addEventListener(t, o, n), l(() => e.removeEventListener(t, o, n));
  });
}
function Nn(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function In(e) {
  if (!e)
    return /* @__PURE__ */ new Set();
  if (typeof e == "function")
    return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let o of e.value) {
    let n = L(o);
    n instanceof HTMLElement && t.add(n);
  }
  return t;
}
var Rn = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Rn || {});
let at = Object.assign(J({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: _(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: n }) {
  let l = _(null);
  n({ el: l, $el: l });
  let s = E(() => be(l)), r = _(!1);
  Y(() => r.value = !0), pe(() => r.value = !1), Ks({ ownerDocument: s }, E(() => r.value && Boolean(e.features & 16)));
  let i = Ys({ ownerDocument: s, container: l, initialFocus: E(() => e.initialFocus) }, E(() => r.value && Boolean(e.features & 2)));
  Xs({ ownerDocument: s, container: l, containers: e.containers, previousActiveElement: i }, E(() => r.value && Boolean(e.features & 8)));
  let p = xo();
  function f(m) {
    let g = L(l);
    g && ((y) => y())(() => {
      ie(p.value, { [ge.Forwards]: () => {
        me(g, le.First, { skipElements: [m.relatedTarget] });
      }, [ge.Backwards]: () => {
        me(g, le.Last, { skipElements: [m.relatedTarget] });
      } });
    });
  }
  let d = _(!1);
  function h(m) {
    m.key === "Tab" && (d.value = !0, requestAnimationFrame(() => {
      d.value = !1;
    }));
  }
  function $(m) {
    if (!r.value)
      return;
    let g = In(e.containers);
    L(l) instanceof HTMLElement && g.add(L(l));
    let y = m.relatedTarget;
    y instanceof HTMLElement && y.dataset.headlessuiFocusGuard !== "true" && (Fn(g, y) || (d.value ? me(L(l), ie(p.value, { [ge.Forwards]: () => le.Next, [ge.Backwards]: () => le.Previous }) | le.WrapAround, { relativeTo: m.target }) : m.target instanceof HTMLElement && We(m.target)));
  }
  return () => {
    let m = {}, g = { ref: l, onKeydown: h, onFocusout: $ }, { features: y, initialFocus: v, containers: w, ...b } = e;
    return te(B, [Boolean(y & 4) && te(je, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: Pe.Focusable }), ee({ ourProps: g, theirProps: { ...t, ...b }, slot: m, attrs: t, slots: o, name: "FocusTrap" }), Boolean(y & 4) && te(je, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: Pe.Focusable })]);
  };
} }), { features: Rn }), He = [];
if (typeof window < "u" && typeof document < "u") {
  let e = function(t) {
    t.target instanceof HTMLElement && t.target !== document.body && He[0] !== t.target && (He.unshift(t.target), He = He.filter((o) => o != null && o.isConnected), He.splice(10));
  };
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
}
function Zs(e) {
  let t = _(He.slice());
  return X([e], ([o], [n]) => {
    n === !0 && o === !1 ? Nn(() => {
      t.value.splice(0);
    }) : n === !1 && o === !0 && (t.value = He.slice());
  }, { flush: "post" }), () => {
    var o;
    return (o = t.value.find((n) => n != null && n.isConnected)) != null ? o : null;
  };
}
function Ks({ ownerDocument: e }, t) {
  let o = Zs(t);
  Y(() => {
    re(() => {
      var n, l;
      t.value || ((n = e.value) == null ? void 0 : n.activeElement) === ((l = e.value) == null ? void 0 : l.body) && We(o());
    }, { flush: "post" });
  }), pe(() => {
    We(o());
  });
}
function Ys({ ownerDocument: e, container: t, initialFocus: o }, n) {
  let l = _(null), s = _(!1);
  return Y(() => s.value = !0), pe(() => s.value = !1), Y(() => {
    X([t, o, n], (r, i) => {
      if (r.every((f, d) => (i == null ? void 0 : i[d]) === f) || !n.value)
        return;
      let p = L(t);
      p && Nn(() => {
        var f, d;
        if (!s.value)
          return;
        let h = L(o), $ = (f = e.value) == null ? void 0 : f.activeElement;
        if (h) {
          if (h === $) {
            l.value = $;
            return;
          }
        } else if (p.contains($)) {
          l.value = $;
          return;
        }
        h ? We(h) : me(p, le.First | le.NoScroll) === Ge.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), l.value = (d = e.value) == null ? void 0 : d.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), l;
}
function Xs({ ownerDocument: e, container: t, containers: o, previousActiveElement: n }, l) {
  var s;
  wo((s = e.value) == null ? void 0 : s.defaultView, "focus", (r) => {
    if (!l.value)
      return;
    let i = In(o);
    L(t) instanceof HTMLElement && i.add(L(t));
    let p = n.value;
    if (!p)
      return;
    let f = r.target;
    f && f instanceof HTMLElement ? Fn(i, f) ? (n.value = f, We(f)) : (r.preventDefault(), r.stopPropagation(), We(p)) : We(n.value);
  }, !0);
}
function Fn(e, t) {
  for (let o of e)
    if (o.contains(t))
      return !0;
  return !1;
}
let Xt = /* @__PURE__ */ new Map(), rt = /* @__PURE__ */ new Map();
function on(e, t = _(!0)) {
  re((o) => {
    var n;
    if (!t.value)
      return;
    let l = L(e);
    if (!l)
      return;
    o(function() {
      var r;
      if (!l)
        return;
      let i = (r = rt.get(l)) != null ? r : 1;
      if (i === 1 ? rt.delete(l) : rt.set(l, i - 1), i !== 1)
        return;
      let p = Xt.get(l);
      p && (p["aria-hidden"] === null ? l.removeAttribute("aria-hidden") : l.setAttribute("aria-hidden", p["aria-hidden"]), l.inert = p.inert, Xt.delete(l));
    });
    let s = (n = rt.get(l)) != null ? n : 0;
    rt.set(l, s + 1), s === 0 && (Xt.set(l, { "aria-hidden": l.getAttribute("aria-hidden"), inert: l.inert }), l.setAttribute("aria-hidden", "true"), l.inert = !0);
  });
}
let Hn = Symbol("ForcePortalRootContext");
function Qs() {
  return ue(Hn, !1);
}
let no = J({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: o }) {
  return ce(Hn, e.force), () => {
    let { force: n, ...l } = e;
    return ee({ theirProps: l, ourProps: {}, slot: {}, slots: t, attrs: o, name: "ForcePortalRoot" });
  };
} });
function Js(e) {
  let t = be(e);
  if (!t) {
    if (e === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let o = t.getElementById("headlessui-portal-root");
  if (o)
    return o;
  let n = t.createElement("div");
  return n.setAttribute("id", "headlessui-portal-root"), t.body.appendChild(n);
}
let qn = J({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: o }) {
  let n = _(null), l = E(() => be(n)), s = Qs(), r = ue(Wn, null), i = _(s === !0 || r == null ? Js(n.value) : r.resolveTarget());
  return re(() => {
    s || r != null && (i.value = r.resolveTarget());
  }), pe(() => {
    var p, f;
    let d = (p = l.value) == null ? void 0 : p.getElementById("headlessui-portal-root");
    d && i.value === d && i.value.children.length <= 0 && ((f = i.value.parentElement) == null || f.removeChild(i.value));
  }), () => {
    if (i.value === null)
      return null;
    let p = { ref: n, "data-headlessui-portal": "" };
    return te(Lt, { to: i.value }, ee({ ourProps: p, theirProps: e, slot: {}, attrs: o, slots: t, name: "Portal" }));
  };
} }), Wn = Symbol("PortalGroupContext"), ea = J({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: o }) {
  let n = Ml({ resolveTarget() {
    return e.target;
  } });
  return ce(Wn, n), () => {
    let { target: l, ...s } = e;
    return ee({ theirProps: s, ourProps: {}, slot: {}, attrs: t, slots: o, name: "PortalGroup" });
  };
} }), Un = Symbol("StackContext");
var lo = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(lo || {});
function ta() {
  return ue(Un, () => {
  });
}
function oa({ type: e, enabled: t, element: o, onUpdate: n }) {
  let l = ta();
  function s(...r) {
    n == null || n(...r), l(...r);
  }
  Y(() => {
    X(t, (r, i) => {
      r ? s(0, e, o) : i === !0 && s(1, e, o);
    }, { immediate: !0, flush: "sync" });
  }), pe(() => {
    t.value && s(1, e, o);
  }), ce(Un, s);
}
let Gn = Symbol("DescriptionContext");
function na() {
  let e = ue(Gn, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function Bt({ slot: e = _({}), name: t = "Description", props: o = {} } = {}) {
  let n = _([]);
  function l(s) {
    return n.value.push(s), () => {
      let r = n.value.indexOf(s);
      r !== -1 && n.value.splice(r, 1);
    };
  }
  return ce(Gn, { register: l, slot: e, name: t, props: o }), E(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
let la = J({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${se()}` } }, setup(e, { attrs: t, slots: o }) {
  let n = na();
  return Y(() => pe(n.register(e.id))), () => {
    let { name: l = "Description", slot: s = _({}), props: r = {} } = n, { id: i, ...p } = e, f = { ...Object.entries(r).reduce((d, [h, $]) => Object.assign(d, { [h]: k($) }), {}), id: i };
    return ee({ ourProps: f, theirProps: p, slot: s.value, attrs: t, slots: o, name: l });
  };
} });
function sa(e) {
  let t = kn(e.getSnapshot());
  return pe(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function jt() {
  let e = [], t = { addEventListener(o, n, l, s) {
    return o.addEventListener(n, l, s), t.add(() => o.removeEventListener(n, l, s));
  }, requestAnimationFrame(...o) {
    let n = requestAnimationFrame(...o);
    t.add(() => cancelAnimationFrame(n));
  }, nextFrame(...o) {
    t.requestAnimationFrame(() => {
      t.requestAnimationFrame(...o);
    });
  }, setTimeout(...o) {
    let n = setTimeout(...o);
    t.add(() => clearTimeout(n));
  }, style(o, n, l) {
    let s = o.style.getPropertyValue(n);
    return Object.assign(o.style, { [n]: l }), this.add(() => {
      Object.assign(o.style, { [n]: s });
    });
  }, group(o) {
    let n = jt();
    return o(n), this.add(() => n.dispose());
  }, add(o) {
    return e.push(o), () => {
      let n = e.indexOf(o);
      if (n >= 0)
        for (let l of e.splice(n, 1))
          l();
    };
  }, dispose() {
    for (let o of e.splice(0))
      o();
  } };
  return t;
}
function aa(e, t) {
  let o = e(), n = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return o;
  }, subscribe(l) {
    return n.add(l), () => n.delete(l);
  }, dispatch(l, ...s) {
    let r = t[l].call(o, ...s);
    r && (o = r, n.forEach((i) => i()));
  } };
}
function ra() {
  let e;
  return { before({ doc: t }) {
    var o;
    let n = t.documentElement;
    e = ((o = t.defaultView) != null ? o : window).innerWidth - n.clientWidth;
  }, after({ doc: t, d: o }) {
    let n = t.documentElement, l = n.clientWidth - n.offsetWidth, s = e - l;
    o.style(n, "paddingRight", `${s}px`);
  } };
}
function ia() {
  if (!Us())
    return {};
  let e;
  return { before() {
    e = window.pageYOffset;
  }, after({ doc: t, d: o, meta: n }) {
    function l(r) {
      return n.containers.flatMap((i) => i()).some((i) => i.contains(r));
    }
    o.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
    let s = null;
    o.addEventListener(t, "click", (r) => {
      if (r.target instanceof HTMLElement)
        try {
          let i = r.target.closest("a");
          if (!i)
            return;
          let { hash: p } = new URL(i.href), f = t.querySelector(p);
          f && !l(f) && (s = f);
        } catch {
        }
    }, !0), o.addEventListener(t, "touchmove", (r) => {
      r.target instanceof HTMLElement && !l(r.target) && r.preventDefault();
    }, { passive: !1 }), o.add(() => {
      window.scrollTo(0, window.pageYOffset + e), s && s.isConnected && (s.scrollIntoView({ block: "nearest" }), s = null);
    });
  } };
}
function ua() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function pa(e) {
  let t = {};
  for (let o of e)
    Object.assign(t, o(t));
  return t;
}
let qe = aa(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var o;
  let n = (o = this.get(e)) != null ? o : { doc: e, count: 0, d: jt(), meta: /* @__PURE__ */ new Set() };
  return n.count++, n.meta.add(t), this.set(e, n), this;
}, POP(e, t) {
  let o = this.get(e);
  return o && (o.count--, o.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: o }) {
  let n = { doc: e, d: t, meta: pa(o) }, l = [ia(), ra(), ua()];
  l.forEach(({ before: s }) => s == null ? void 0 : s(n)), l.forEach(({ after: s }) => s == null ? void 0 : s(n));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
qe.subscribe(() => {
  let e = qe.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [o] of e)
    t.set(o, o.documentElement.style.overflow);
  for (let o of e.values()) {
    let n = t.get(o.doc) === "hidden", l = o.count !== 0;
    (l && !n || !l && n) && qe.dispatch(o.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", o), o.count === 0 && qe.dispatch("TEARDOWN", o);
  }
});
function ca(e, t, o) {
  let n = sa(qe), l = E(() => {
    let s = e.value ? n.value.get(e.value) : void 0;
    return s ? s.count > 0 : !1;
  });
  return X([e, t], ([s, r], [i], p) => {
    if (!s || !r)
      return;
    qe.dispatch("PUSH", s, o);
    let f = !1;
    p(() => {
      f || (qe.dispatch("POP", i ?? s, o), f = !0);
    });
  }, { immediate: !0 }), l;
}
var da = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(da || {});
let so = Symbol("DialogContext");
function ht(e) {
  let t = ue(so, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, ht), o;
  }
  return t;
}
let Vt = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Mt = J({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Vt }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${se()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: o, slots: n, expose: l }) {
  var s;
  let r = _(!1);
  Y(() => {
    r.value = !0;
  });
  let i = _(0), p = nt(), f = E(() => e.open === Vt && p !== null ? (p.value & oe.Open) === oe.Open : e.open), d = _(null), h = _(null), $ = E(() => be(d));
  if (l({ el: d, $el: d }), !(e.open !== Vt || p !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof f.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${f.value === Vt ? void 0 : e.open}`);
  let m = E(() => r.value && f.value ? 0 : 1), g = E(() => m.value === 0), y = E(() => i.value > 1), v = ue(so, null) !== null, w = E(() => y.value ? "parent" : "leaf"), b = E(() => p !== null ? (p.value & oe.Closing) === oe.Closing : !1), S = E(() => v || b.value ? !1 : g.value), C = E(() => {
    var F, q, M;
    return (M = Array.from((q = (F = $.value) == null ? void 0 : F.querySelectorAll("body > *")) != null ? q : []).find((K) => K.id === "headlessui-portal-root" ? !1 : K.contains(L(h)) && K instanceof HTMLElement)) != null ? M : null;
  });
  on(C, S);
  let A = E(() => y.value ? !0 : g.value), z = E(() => {
    var F, q, M;
    return (M = Array.from((q = (F = $.value) == null ? void 0 : F.querySelectorAll("[data-headlessui-portal]")) != null ? q : []).find((K) => K.contains(L(h)) && K instanceof HTMLElement)) != null ? M : null;
  });
  on(z, A), oa({ type: "Dialog", enabled: E(() => m.value === 0), element: d, onUpdate: (F, q) => {
    if (q === "Dialog")
      return ie(F, { [lo.Add]: () => i.value += 1, [lo.Remove]: () => i.value -= 1 });
  } });
  let I = Bt({ name: "DialogDescription", slot: E(() => ({ open: f.value })) }), N = _(null), H = { titleId: N, panelRef: _(null), dialogState: m, setTitleId(F) {
    N.value !== F && (N.value = F);
  }, close() {
    t("close", !1);
  } };
  ce(so, H);
  function D() {
    var F, q, M;
    return [...Array.from((q = (F = $.value) == null ? void 0 : F.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? q : []).filter((K) => !(K === document.body || K === document.head || !(K instanceof HTMLElement) || K.contains(L(h)) || H.panelRef.value && K.contains(H.panelRef.value))), (M = H.panelRef.value) != null ? M : d.value];
  }
  let G = E(() => !(!g.value || y.value));
  Dn(() => D(), (F, q) => {
    H.close(), vo(() => q == null ? void 0 : q.focus());
  }, G);
  let U = E(() => !(y.value || m.value !== 0));
  wo((s = $.value) == null ? void 0 : s.defaultView, "keydown", (F) => {
    U.value && (F.defaultPrevented || F.key === ne.Escape && (F.preventDefault(), F.stopPropagation(), H.close()));
  });
  let R = E(() => !(b.value || m.value !== 0 || v));
  return ca($, R, (F) => {
    var q;
    return { containers: [...(q = F.containers) != null ? q : [], D] };
  }), re((F) => {
    if (m.value !== 0)
      return;
    let q = L(d);
    if (!q)
      return;
    let M = new ResizeObserver((K) => {
      for (let Se of K) {
        let fe = Se.target.getBoundingClientRect();
        fe.x === 0 && fe.y === 0 && fe.width === 0 && fe.height === 0 && H.close();
      }
    });
    M.observe(q), F(() => M.disconnect());
  }), () => {
    let { id: F, open: q, initialFocus: M, ...K } = e, Se = { ...o, ref: d, id: F, role: "dialog", "aria-modal": m.value === 0 ? !0 : void 0, "aria-labelledby": N.value, "aria-describedby": I.value }, fe = { open: m.value === 0 };
    return te(no, { force: !0 }, () => [te(qn, () => te(ea, { target: d.value }, () => te(no, { force: !1 }, () => te(at, { initialFocus: M, containers: D, features: g.value ? ie(w.value, { parent: at.features.RestoreFocus, leaf: at.features.All & ~at.features.FocusLock }) : at.features.None }, () => ee({ ourProps: Se, theirProps: K, slot: fe, attrs: o, slots: n, visible: m.value === 0, features: _e.RenderStrategy | _e.Static, name: "Dialog" }))))), te(je, { features: Pe.Hidden, ref: h })]);
  };
} });
J({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${se()}` } }, setup(e, { attrs: t, slots: o }) {
  let n = ht("DialogOverlay");
  function l(s) {
    s.target === s.currentTarget && (s.preventDefault(), s.stopPropagation(), n.close());
  }
  return () => {
    let { id: s, ...r } = e;
    return ee({ ourProps: { id: s, "aria-hidden": !0, onClick: l }, theirProps: r, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogOverlay" });
  };
} });
J({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${se()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: n }) {
  let l = ht("DialogBackdrop"), s = _(null);
  return n({ el: s, $el: s }), Y(() => {
    if (l.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: r, ...i } = e, p = { id: r, ref: s, "aria-hidden": !0 };
    return te(no, { force: !0 }, () => te(qn, () => ee({ ourProps: p, theirProps: { ...t, ...i }, slot: { open: l.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogBackdrop" })));
  };
} });
let Nt = J({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${se()}` } }, setup(e, { attrs: t, slots: o, expose: n }) {
  let l = ht("DialogPanel");
  n({ el: l.panelRef, $el: l.panelRef });
  function s(r) {
    r.stopPropagation();
  }
  return () => {
    let { id: r, ...i } = e, p = { id: r, ref: l.panelRef, onClick: s };
    return ee({ ourProps: p, theirProps: i, slot: { open: l.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogPanel" });
  };
} }), Zn = J({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${se()}` } }, setup(e, { attrs: t, slots: o }) {
  let n = ht("DialogTitle");
  return Y(() => {
    n.setTitleId(e.id), pe(() => n.setTitleId(null));
  }), () => {
    let { id: l, ...s } = e;
    return ee({ ourProps: { id: l }, theirProps: s, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogTitle" });
  };
} });
var fa = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(fa || {});
let Kn = Symbol("DisclosureContext");
function $o(e) {
  let t = ue(Kn, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, $o), o;
  }
  return t;
}
let Yn = Symbol("DisclosurePanelContext");
function va() {
  return ue(Yn, null);
}
let nn = J({ name: "Disclosure", props: { as: { type: [Object, String], default: "template" }, defaultOpen: { type: [Boolean], default: !1 } }, setup(e, { slots: t, attrs: o }) {
  let n = _(e.defaultOpen ? 0 : 1), l = _(null), s = _(null), r = { buttonId: _(null), panelId: _(null), disclosureState: n, panel: l, button: s, toggleDisclosure() {
    n.value = ie(n.value, { [0]: 1, [1]: 0 });
  }, closeDisclosure() {
    n.value !== 1 && (n.value = 1);
  }, close(i) {
    r.closeDisclosure();
    let p = (() => i ? i instanceof HTMLElement ? i : i.value instanceof HTMLElement ? L(i) : L(r.button) : L(r.button))();
    p == null || p.focus();
  } };
  return ce(Kn, r), go(E(() => ie(n.value, { [0]: oe.Open, [1]: oe.Closed }))), () => {
    let { defaultOpen: i, ...p } = e, f = { open: n.value === 0, close: r.close };
    return ee({ theirProps: p, ourProps: {}, slot: f, slots: t, attrs: o, name: "Disclosure" });
  };
} }), ln = J({ name: "DisclosureButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-disclosure-button-${se()}` } }, setup(e, { attrs: t, slots: o, expose: n }) {
  let l = $o("DisclosureButton");
  Y(() => {
    l.buttonId.value = e.id;
  }), pe(() => {
    l.buttonId.value = null;
  });
  let s = va(), r = E(() => s === null ? !1 : s.value === l.panelId.value), i = _(null);
  n({ el: i, $el: i }), r.value || re(() => {
    l.button.value = i.value;
  });
  let p = bo(E(() => ({ as: e.as, type: t.type })), i);
  function f() {
    var $;
    e.disabled || (r.value ? (l.toggleDisclosure(), ($ = L(l.button)) == null || $.focus()) : l.toggleDisclosure());
  }
  function d($) {
    var m;
    if (!e.disabled)
      if (r.value)
        switch ($.key) {
          case ne.Space:
          case ne.Enter:
            $.preventDefault(), $.stopPropagation(), l.toggleDisclosure(), (m = L(l.button)) == null || m.focus();
            break;
        }
      else
        switch ($.key) {
          case ne.Space:
          case ne.Enter:
            $.preventDefault(), $.stopPropagation(), l.toggleDisclosure();
            break;
        }
  }
  function h($) {
    switch ($.key) {
      case ne.Space:
        $.preventDefault();
        break;
    }
  }
  return () => {
    let $ = { open: l.disclosureState.value === 0 }, { id: m, ...g } = e, y = r.value ? { ref: i, type: p.value, onClick: f, onKeydown: d } : { id: m, ref: i, type: p.value, "aria-expanded": e.disabled ? void 0 : l.disclosureState.value === 0, "aria-controls": L(l.panel) ? l.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onClick: f, onKeydown: d, onKeyup: h };
    return ee({ ourProps: y, theirProps: g, slot: $, attrs: t, slots: o, name: "DisclosureButton" });
  };
} }), sn = J({ name: "DisclosurePanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-disclosure-panel-${se()}` } }, setup(e, { attrs: t, slots: o, expose: n }) {
  let l = $o("DisclosurePanel");
  Y(() => {
    l.panelId.value = e.id;
  }), pe(() => {
    l.panelId.value = null;
  }), n({ el: l.panel, $el: l.panel }), ce(Yn, l.panelId);
  let s = nt(), r = E(() => s !== null ? (s.value & oe.Open) === oe.Open : l.disclosureState.value === 0);
  return () => {
    let i = { open: l.disclosureState.value === 0, close: l.close }, { id: p, ...f } = e, d = { id: p, ref: l.panel };
    return ee({ ourProps: d, theirProps: f, slot: i, attrs: t, slots: o, features: _e.RenderStrategy | _e.Static, visible: r.value, name: "DisclosurePanel" });
  };
} });
var ha = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ha || {});
let Xn = Symbol("PopoverContext");
function It(e) {
  let t = ue(Xn, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <${Rt.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, It), o;
  }
  return t;
}
let Qn = Symbol("PopoverGroupContext");
function Jn() {
  return ue(Qn, null);
}
let el = Symbol("PopoverPanelContext");
function ma() {
  return ue(el, null);
}
let Rt = J({ name: "Popover", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: o, expose: n }) {
  var l;
  let s = _(null);
  n({ el: s, $el: s });
  let r = _(1), i = _(null), p = _(null), f = _(null), d = _(null), h = E(() => be(s)), $ = E(() => {
    var b, S;
    if (!L(i) || !L(d))
      return !1;
    for (let D of document.querySelectorAll("body > *"))
      if (Number(D == null ? void 0 : D.contains(L(i))) ^ Number(D == null ? void 0 : D.contains(L(d))))
        return !0;
    let C = zt(), A = C.indexOf(L(i)), z = (A + C.length - 1) % C.length, I = (A + 1) % C.length, N = C[z], H = C[I];
    return !((b = L(d)) != null && b.contains(N)) && !((S = L(d)) != null && S.contains(H));
  }), m = { popoverState: r, buttonId: _(null), panelId: _(null), panel: d, button: i, isPortalled: $, beforePanelSentinel: p, afterPanelSentinel: f, togglePopover() {
    r.value = ie(r.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    r.value !== 1 && (r.value = 1);
  }, close(b) {
    m.closePopover();
    let S = (() => b ? b instanceof HTMLElement ? b : b.value instanceof HTMLElement ? L(b) : L(m.button) : L(m.button))();
    S == null || S.focus();
  } };
  ce(Xn, m), go(E(() => ie(r.value, { [0]: oe.Open, [1]: oe.Closed })));
  let g = { buttonId: m.buttonId, panelId: m.panelId, close() {
    m.closePopover();
  } }, y = Jn(), v = y == null ? void 0 : y.registerPopover;
  function w() {
    var b, S, C, A;
    return (A = y == null ? void 0 : y.isFocusWithinPopoverGroup()) != null ? A : ((b = h.value) == null ? void 0 : b.activeElement) && (((S = L(i)) == null ? void 0 : S.contains(h.value.activeElement)) || ((C = L(d)) == null ? void 0 : C.contains(h.value.activeElement)));
  }
  return re(() => v == null ? void 0 : v(g)), wo((l = h.value) == null ? void 0 : l.defaultView, "focus", (b) => {
    var S, C;
    r.value === 0 && (w() || i && d && b.target !== window && ((S = L(m.beforePanelSentinel)) != null && S.contains(b.target) || (C = L(m.afterPanelSentinel)) != null && C.contains(b.target) || m.closePopover()));
  }, !0), Dn([i, d], (b, S) => {
    var C;
    m.closePopover(), Ln(S, yo.Loose) || (b.preventDefault(), (C = L(i)) == null || C.focus());
  }, E(() => r.value === 0)), () => {
    let b = { open: r.value === 0, close: m.close };
    return ee({ theirProps: e, ourProps: { ref: s }, slot: b, slots: t, attrs: o, name: "Popover" });
  };
} }), Vo = J({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-popover-button-${se()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: n }) {
  let l = It("PopoverButton"), s = E(() => be(l.button));
  n({ el: l.button, $el: l.button }), Y(() => {
    l.buttonId.value = e.id;
  }), pe(() => {
    l.buttonId.value = null;
  });
  let r = Jn(), i = r == null ? void 0 : r.closeOthers, p = ma(), f = E(() => p === null ? !1 : p.value === l.panelId.value), d = _(null), h = `headlessui-focus-sentinel-${se()}`;
  f.value || re(() => {
    l.button.value = d.value;
  });
  let $ = bo(E(() => ({ as: e.as, type: t.type })), d);
  function m(w) {
    var b, S, C, A, z;
    if (f.value) {
      if (l.popoverState.value === 1)
        return;
      switch (w.key) {
        case ne.Space:
        case ne.Enter:
          w.preventDefault(), (S = (b = w.target).click) == null || S.call(b), l.closePopover(), (C = L(l.button)) == null || C.focus();
          break;
      }
    } else
      switch (w.key) {
        case ne.Space:
        case ne.Enter:
          w.preventDefault(), w.stopPropagation(), l.popoverState.value === 1 && (i == null || i(l.buttonId.value)), l.togglePopover();
          break;
        case ne.Escape:
          if (l.popoverState.value !== 0)
            return i == null ? void 0 : i(l.buttonId.value);
          if (!L(l.button) || (A = s.value) != null && A.activeElement && !((z = L(l.button)) != null && z.contains(s.value.activeElement)))
            return;
          w.preventDefault(), w.stopPropagation(), l.closePopover();
          break;
      }
  }
  function g(w) {
    f.value || w.key === ne.Space && w.preventDefault();
  }
  function y(w) {
    var b, S;
    e.disabled || (f.value ? (l.closePopover(), (b = L(l.button)) == null || b.focus()) : (w.preventDefault(), w.stopPropagation(), l.popoverState.value === 1 && (i == null || i(l.buttonId.value)), l.togglePopover(), (S = L(l.button)) == null || S.focus()));
  }
  function v(w) {
    w.preventDefault(), w.stopPropagation();
  }
  return () => {
    let w = l.popoverState.value === 0, b = { open: w }, { id: S, ...C } = e, A = f.value ? { ref: d, type: $.value, onKeydown: m, onClick: y } : { ref: d, id: S, type: $.value, "aria-expanded": e.disabled ? void 0 : l.popoverState.value === 0, "aria-controls": L(l.panel) ? l.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onKeydown: m, onKeyup: g, onClick: y, onMousedown: v }, z = xo();
    function I() {
      let N = L(l.panel);
      if (!N)
        return;
      function H() {
        ie(z.value, { [ge.Forwards]: () => me(N, le.First), [ge.Backwards]: () => me(N, le.Last) }) === Ge.Error && me(zt().filter((D) => D.dataset.headlessuiFocusGuard !== "true"), ie(z.value, { [ge.Forwards]: le.Next, [ge.Backwards]: le.Previous }), { relativeTo: L(l.button) });
      }
      H();
    }
    return te(B, [ee({ ourProps: A, theirProps: { ...t, ...C }, slot: b, attrs: t, slots: o, name: "PopoverButton" }), w && !f.value && l.isPortalled.value && te(je, { id: h, features: Pe.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: I })]);
  };
} });
J({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(e, { attrs: t, slots: o }) {
  let n = It("PopoverOverlay"), l = `headlessui-popover-overlay-${se()}`, s = nt(), r = E(() => s !== null ? (s.value & oe.Open) === oe.Open : n.popoverState.value === 0);
  function i() {
    n.closePopover();
  }
  return () => {
    let p = { open: n.popoverState.value === 0 };
    return ee({ ourProps: { id: l, "aria-hidden": !0, onClick: i }, theirProps: e, slot: p, attrs: t, slots: o, features: _e.RenderStrategy | _e.Static, visible: r.value, name: "PopoverOverlay" });
  };
} });
let ko = J({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-popover-panel-${se()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: n }) {
  let { focus: l } = e, s = It("PopoverPanel"), r = E(() => be(s.panel)), i = `headlessui-focus-sentinel-before-${se()}`, p = `headlessui-focus-sentinel-after-${se()}`;
  n({ el: s.panel, $el: s.panel }), Y(() => {
    s.panelId.value = e.id;
  }), pe(() => {
    s.panelId.value = null;
  }), ce(el, s.panelId), re(() => {
    var v, w;
    if (!l || s.popoverState.value !== 0 || !s.panel)
      return;
    let b = (v = r.value) == null ? void 0 : v.activeElement;
    (w = L(s.panel)) != null && w.contains(b) || me(L(s.panel), le.First);
  });
  let f = nt(), d = E(() => f !== null ? (f.value & oe.Open) === oe.Open : s.popoverState.value === 0);
  function h(v) {
    var w, b;
    switch (v.key) {
      case ne.Escape:
        if (s.popoverState.value !== 0 || !L(s.panel) || r.value && !((w = L(s.panel)) != null && w.contains(r.value.activeElement)))
          return;
        v.preventDefault(), v.stopPropagation(), s.closePopover(), (b = L(s.button)) == null || b.focus();
        break;
    }
  }
  function $(v) {
    var w, b, S, C, A;
    let z = v.relatedTarget;
    z && L(s.panel) && ((w = L(s.panel)) != null && w.contains(z) || (s.closePopover(), ((S = (b = L(s.beforePanelSentinel)) == null ? void 0 : b.contains) != null && S.call(b, z) || (A = (C = L(s.afterPanelSentinel)) == null ? void 0 : C.contains) != null && A.call(C, z)) && z.focus({ preventScroll: !0 })));
  }
  let m = xo();
  function g() {
    let v = L(s.panel);
    if (!v)
      return;
    function w() {
      ie(m.value, { [ge.Forwards]: () => {
        var b;
        me(v, le.First) === Ge.Error && ((b = L(s.afterPanelSentinel)) == null || b.focus());
      }, [ge.Backwards]: () => {
        var b;
        (b = L(s.button)) == null || b.focus({ preventScroll: !0 });
      } });
    }
    w();
  }
  function y() {
    let v = L(s.panel);
    if (!v)
      return;
    function w() {
      ie(m.value, { [ge.Forwards]: () => {
        let b = L(s.button), S = L(s.panel);
        if (!b)
          return;
        let C = zt(), A = C.indexOf(b), z = C.slice(0, A + 1), I = [...C.slice(A + 1), ...z];
        for (let N of I.slice())
          if (N.dataset.headlessuiFocusGuard === "true" || S != null && S.contains(N)) {
            let H = I.indexOf(N);
            H !== -1 && I.splice(H, 1);
          }
        me(I, le.First, { sorted: !1 });
      }, [ge.Backwards]: () => {
        var b;
        me(v, le.Previous) === Ge.Error && ((b = L(s.button)) == null || b.focus());
      } });
    }
    w();
  }
  return () => {
    let v = { open: s.popoverState.value === 0, close: s.close }, { id: w, focus: b, ...S } = e, C = { ref: s.panel, id: w, onKeydown: h, onFocusout: l && s.popoverState.value === 0 ? $ : void 0, tabIndex: -1 };
    return ee({ ourProps: C, theirProps: { ...t, ...S }, attrs: t, slot: v, slots: { ...o, default: (...A) => {
      var z;
      return [te(B, [d.value && s.isPortalled.value && te(je, { id: i, ref: s.beforePanelSentinel, features: Pe.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: g }), (z = o.default) == null ? void 0 : z.call(o, ...A), d.value && s.isPortalled.value && te(je, { id: p, ref: s.afterPanelSentinel, features: Pe.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: y })])];
    } }, features: _e.RenderStrategy | _e.Static, visible: d.value, name: "PopoverPanel" });
  };
} });
J({ name: "PopoverGroup", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: o, expose: n }) {
  let l = _(null), s = kn([]), r = E(() => be(l));
  n({ el: l, $el: l });
  function i(h) {
    let $ = s.value.indexOf(h);
    $ !== -1 && s.value.splice($, 1);
  }
  function p(h) {
    return s.value.push(h), () => {
      i(h);
    };
  }
  function f() {
    var h;
    let $ = r.value;
    if (!$)
      return !1;
    let m = $.activeElement;
    return (h = L(l)) != null && h.contains(m) ? !0 : s.value.some((g) => {
      var y, v;
      return ((y = $.getElementById(g.buttonId.value)) == null ? void 0 : y.contains(m)) || ((v = $.getElementById(g.panelId.value)) == null ? void 0 : v.contains(m));
    });
  }
  function d(h) {
    for (let $ of s.value)
      $.buttonId.value !== h && $.close();
  }
  return ce(Qn, { registerPopover: p, unregisterPopover: i, isFocusWithinPopoverGroup: f, closeOthers: d }), () => ee({ ourProps: { ref: l }, theirProps: e, slot: {}, attrs: t, slots: o, name: "PopoverGroup" });
} });
let tl = Symbol("LabelContext");
function ol() {
  let e = ue(tl, null);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, ol), t;
  }
  return e;
}
function _o({ slot: e = {}, name: t = "Label", props: o = {} } = {}) {
  let n = _([]);
  function l(s) {
    return n.value.push(s), () => {
      let r = n.value.indexOf(s);
      r !== -1 && n.value.splice(r, 1);
    };
  }
  return ce(tl, { register: l, slot: e, name: t, props: o }), E(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
let nl = J({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-label-${se()}` } }, setup(e, { slots: t, attrs: o }) {
  let n = ol();
  return Y(() => pe(n.register(e.id))), () => {
    let { name: l = "Label", slot: s = {}, props: r = {} } = n, { id: i, passive: p, ...f } = e, d = { ...Object.entries(r).reduce((h, [$, m]) => Object.assign(h, { [$]: k(m) }), {}), id: i };
    return p && (delete d.onClick, delete d.htmlFor, delete f.onClick), ee({ ourProps: d, theirProps: f, slot: s, attrs: o, slots: t, name: l });
  };
} });
function ga(e, t) {
  return e === t;
}
let ll = Symbol("RadioGroupContext");
function sl(e) {
  let t = ue(ll, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, sl), o;
  }
  return t;
}
let ba = J({ name: "RadioGroup", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "div" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => ga }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-radiogroup-${se()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: o, slots: n, expose: l }) {
  let s = _(null), r = _([]), i = _o({ name: "RadioGroupLabel" }), p = Bt({ name: "RadioGroupDescription" });
  l({ el: s, $el: s });
  let [f, d] = Mn(E(() => e.modelValue), (g) => t("update:modelValue", g), E(() => e.defaultValue)), h = { options: r, value: f, disabled: E(() => e.disabled), firstOption: E(() => r.value.find((g) => !g.propsRef.disabled)), containsCheckedOption: E(() => r.value.some((g) => h.compare(Ae(g.propsRef.value), Ae(e.modelValue)))), compare(g, y) {
    if (typeof e.by == "string") {
      let v = e.by;
      return (g == null ? void 0 : g[v]) === (y == null ? void 0 : y[v]);
    }
    return e.by(g, y);
  }, change(g) {
    var y;
    if (e.disabled || h.compare(Ae(f.value), Ae(g)))
      return !1;
    let v = (y = r.value.find((w) => h.compare(Ae(w.propsRef.value), Ae(g)))) == null ? void 0 : y.propsRef;
    return v != null && v.disabled ? !1 : (d(g), !0);
  }, registerOption(g) {
    r.value.push(g), r.value = Tn(r.value, (y) => y.element);
  }, unregisterOption(g) {
    let y = r.value.findIndex((v) => v.id === g);
    y !== -1 && r.value.splice(y, 1);
  } };
  ce(ll, h), Fs({ container: E(() => L(s)), accept(g) {
    return g.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : g.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(g) {
    g.setAttribute("role", "none");
  } });
  function $(g) {
    if (!s.value || !s.value.contains(g.target))
      return;
    let y = r.value.filter((v) => v.propsRef.disabled === !1).map((v) => v.element);
    switch (g.key) {
      case ne.Enter:
        jn(g.currentTarget);
        break;
      case ne.ArrowLeft:
      case ne.ArrowUp:
        if (g.preventDefault(), g.stopPropagation(), me(y, le.Previous | le.WrapAround) === Ge.Success) {
          let v = r.value.find((w) => {
            var b;
            return w.element === ((b = be(s)) == null ? void 0 : b.activeElement);
          });
          v && h.change(v.propsRef.value);
        }
        break;
      case ne.ArrowRight:
      case ne.ArrowDown:
        if (g.preventDefault(), g.stopPropagation(), me(y, le.Next | le.WrapAround) === Ge.Success) {
          let v = r.value.find((w) => {
            var b;
            return w.element === ((b = be(w.element)) == null ? void 0 : b.activeElement);
          });
          v && h.change(v.propsRef.value);
        }
        break;
      case ne.Space:
        {
          g.preventDefault(), g.stopPropagation();
          let v = r.value.find((w) => {
            var b;
            return w.element === ((b = be(w.element)) == null ? void 0 : b.activeElement);
          });
          v && h.change(v.propsRef.value);
        }
        break;
    }
  }
  let m = E(() => {
    var g;
    return (g = L(s)) == null ? void 0 : g.closest("form");
  });
  return Y(() => {
    X([m], () => {
      if (!m.value || e.defaultValue === void 0)
        return;
      function g() {
        h.change(e.defaultValue);
      }
      return m.value.addEventListener("reset", g), () => {
        var y;
        (y = m.value) == null || y.removeEventListener("reset", g);
      };
    }, { immediate: !0 });
  }), () => {
    let { disabled: g, name: y, id: v, ...w } = e, b = { ref: s, id: v, role: "radiogroup", "aria-labelledby": i.value, "aria-describedby": p.value, onKeydown: $ };
    return te(B, [...y != null && f.value != null ? An({ [y]: f.value }).map(([S, C]) => te(je, Pn({ features: Pe.Hidden, key: S, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: S, value: C }))) : [], ee({ ourProps: b, theirProps: { ...o, ...At(w, ["modelValue", "defaultValue"]) }, slot: {}, attrs: o, slots: n, name: "RadioGroup" })]);
  };
} });
var ya = ((e) => (e[e.Empty = 1] = "Empty", e[e.Active = 2] = "Active", e))(ya || {});
let xa = J({ name: "RadioGroupOption", props: { as: { type: [Object, String], default: "div" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-radiogroup-option-${se()}` } }, setup(e, { attrs: t, slots: o, expose: n }) {
  let l = sl("RadioGroupOption"), s = _o({ name: "RadioGroupLabel" }), r = Bt({ name: "RadioGroupDescription" }), i = _(null), p = E(() => ({ value: e.value, disabled: e.disabled })), f = _(1);
  n({ el: i, $el: i }), Y(() => l.registerOption({ id: e.id, element: i, propsRef: p })), pe(() => l.unregisterOption(e.id));
  let d = E(() => {
    var w;
    return ((w = l.firstOption.value) == null ? void 0 : w.id) === e.id;
  }), h = E(() => l.disabled.value || e.disabled), $ = E(() => l.compare(Ae(l.value.value), Ae(e.value))), m = E(() => h.value ? -1 : $.value || !l.containsCheckedOption.value && d.value ? 0 : -1);
  function g() {
    var w;
    l.change(e.value) && (f.value |= 2, (w = i.value) == null || w.focus());
  }
  function y() {
    f.value |= 2;
  }
  function v() {
    f.value &= -3;
  }
  return () => {
    let { id: w, value: b, disabled: S, ...C } = e, A = { checked: $.value, disabled: h.value, active: Boolean(f.value & 2) }, z = { id: w, ref: i, role: "radio", "aria-checked": $.value ? "true" : "false", "aria-labelledby": s.value, "aria-describedby": r.value, "aria-disabled": h.value ? !0 : void 0, tabIndex: m.value, onClick: h.value ? void 0 : g, onFocus: h.value ? void 0 : y, onBlur: h.value ? void 0 : v };
    return ee({ ourProps: z, theirProps: C, slot: A, attrs: t, slots: o, name: "RadioGroupOption" });
  };
} }), an = nl, wa = la, al = Symbol("GroupContext"), $a = J({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: o }) {
  let n = _(null), l = _o({ name: "SwitchLabel", props: { htmlFor: E(() => {
    var r;
    return (r = n.value) == null ? void 0 : r.id;
  }), onClick(r) {
    n.value && (r.currentTarget.tagName === "LABEL" && r.preventDefault(), n.value.click(), n.value.focus({ preventScroll: !0 }));
  } } }), s = Bt({ name: "SwitchDescription" });
  return ce(al, { switchRef: n, labelledby: l, describedby: s }), () => ee({ theirProps: e, ourProps: {}, slot: {}, slots: t, attrs: o, name: "SwitchGroup" });
} }), Va = J({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: !0 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-switch-${se()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: o, slots: n, expose: l }) {
  let s = ue(al, null), [r, i] = Mn(E(() => e.modelValue), (v) => t("update:modelValue", v), E(() => e.defaultChecked));
  function p() {
    i(!r.value);
  }
  let f = _(null), d = s === null ? f : s.switchRef, h = bo(E(() => ({ as: e.as, type: o.type })), d);
  l({ el: d, $el: d });
  function $(v) {
    v.preventDefault(), p();
  }
  function m(v) {
    v.key === ne.Space ? (v.preventDefault(), p()) : v.key === ne.Enter && jn(v.currentTarget);
  }
  function g(v) {
    v.preventDefault();
  }
  let y = E(() => {
    var v, w;
    return (w = (v = L(d)) == null ? void 0 : v.closest) == null ? void 0 : w.call(v, "form");
  });
  return Y(() => {
    X([y], () => {
      if (!y.value || e.defaultChecked === void 0)
        return;
      function v() {
        i(e.defaultChecked);
      }
      return y.value.addEventListener("reset", v), () => {
        var w;
        (w = y.value) == null || w.removeEventListener("reset", v);
      };
    }, { immediate: !0 });
  }), () => {
    let { id: v, name: w, value: b, ...S } = e, C = { checked: r.value }, A = { id: v, ref: d, role: "switch", type: h.value, tabIndex: 0, "aria-checked": r.value, "aria-labelledby": s == null ? void 0 : s.labelledby.value, "aria-describedby": s == null ? void 0 : s.describedby.value, onClick: $, onKeyup: m, onKeypress: g };
    return te(B, [w != null && r.value != null ? te(je, Pn({ features: Pe.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: r.value, name: w, value: b })) : null, ee({ ourProps: A, theirProps: { ...o, ...At(S, ["modelValue", "defaultChecked"]) }, slot: C, attrs: o, slots: n, name: "Switch" })]);
  };
} }), ka = nl;
function _a(e) {
  let t = { called: !1 };
  return (...o) => {
    if (!t.called)
      return t.called = !0, e(...o);
  };
}
function Qt(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function kt(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var ao = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(ao || {});
function Ca(e, t) {
  let o = jt();
  if (!e)
    return o.dispose;
  let { transitionDuration: n, transitionDelay: l } = getComputedStyle(e), [s, r] = [n, l].map((i) => {
    let [p = 0] = i.split(",").filter(Boolean).map((f) => f.includes("ms") ? parseFloat(f) : parseFloat(f) * 1e3).sort((f, d) => d - f);
    return p;
  });
  return s !== 0 ? o.setTimeout(() => t("finished"), s + r) : t("finished"), o.add(() => t("cancelled")), o.dispose;
}
function rn(e, t, o, n, l, s) {
  let r = jt(), i = s !== void 0 ? _a(s) : () => {
  };
  return kt(e, ...l), Qt(e, ...t, ...o), r.nextFrame(() => {
    kt(e, ...o), Qt(e, ...n), r.add(Ca(e, (p) => (kt(e, ...n, ...t), Qt(e, ...l), i(p))));
  }), r.add(() => kt(e, ...t, ...o, ...n, ...l)), r.add(() => i("cancelled")), r.dispose;
}
function Fe(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Co = Symbol("TransitionContext");
var Sa = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Sa || {});
function Oa() {
  return ue(Co, null) !== null;
}
function Pa() {
  let e = ue(Co, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Ea() {
  let e = ue(So, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let So = Symbol("NestingContext");
function Ft(e) {
  return "children" in e ? Ft(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function rl(e) {
  let t = _([]), o = _(!1);
  Y(() => o.value = !0), pe(() => o.value = !1);
  function n(s, r = ze.Hidden) {
    let i = t.value.findIndex(({ id: p }) => p === s);
    i !== -1 && (ie(r, { [ze.Unmount]() {
      t.value.splice(i, 1);
    }, [ze.Hidden]() {
      t.value[i].state = "hidden";
    } }), !Ft(t) && o.value && (e == null || e()));
  }
  function l(s) {
    let r = t.value.find(({ id: i }) => i === s);
    return r ? r.state !== "visible" && (r.state = "visible") : t.value.push({ id: s, state: "visible" }), () => n(s, ze.Unmount);
  }
  return { children: t, register: l, unregister: n };
}
let il = _e.RenderStrategy, Me = J({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: o, slots: n, expose: l }) {
  let s = _(0);
  function r() {
    s.value |= oe.Opening, t("beforeEnter");
  }
  function i() {
    s.value &= ~oe.Opening, t("afterEnter");
  }
  function p() {
    s.value |= oe.Closing, t("beforeLeave");
  }
  function f() {
    s.value &= ~oe.Closing, t("afterLeave");
  }
  if (!Oa() && Ms())
    return () => te(mt, { ...e, onBeforeEnter: r, onAfterEnter: i, onBeforeLeave: p, onAfterLeave: f }, n);
  let d = _(null), h = _("visible"), $ = E(() => e.unmount ? ze.Unmount : ze.Hidden);
  l({ el: d, $el: d });
  let { show: m, appear: g } = Pa(), { register: y, unregister: v } = Ea(), w = { value: !0 }, b = se(), S = { value: !1 }, C = rl(() => {
    !S.value && h.value !== "hidden" && (h.value = "hidden", v(b), f());
  });
  Y(() => {
    let R = y(b);
    pe(R);
  }), re(() => {
    if ($.value === ze.Hidden && b) {
      if (m && h.value !== "visible") {
        h.value = "visible";
        return;
      }
      ie(h.value, { hidden: () => v(b), visible: () => y(b) });
    }
  });
  let A = Fe(e.enter), z = Fe(e.enterFrom), I = Fe(e.enterTo), N = Fe(e.entered), H = Fe(e.leave), D = Fe(e.leaveFrom), G = Fe(e.leaveTo);
  Y(() => {
    re(() => {
      if (h.value === "visible") {
        let R = L(d);
        if (R instanceof Comment && R.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function U(R) {
    let F = w.value && !g.value, q = L(d);
    !q || !(q instanceof HTMLElement) || F || (S.value = !0, m.value && r(), m.value || p(), R(m.value ? rn(q, A, z, I, N, (M) => {
      S.value = !1, M === ao.Finished && i();
    }) : rn(q, H, D, G, N, (M) => {
      S.value = !1, M === ao.Finished && (Ft(C) || (h.value = "hidden", v(b), f()));
    })));
  }
  return Y(() => {
    X([m], (R, F, q) => {
      U(q), w.value = !1;
    }, { immediate: !0 });
  }), ce(So, C), go(E(() => ie(h.value, { visible: oe.Open, hidden: oe.Closed }) | s.value)), () => {
    let { appear: R, show: F, enter: q, enterFrom: M, enterTo: K, entered: Se, leave: fe, leaveFrom: lt, leaveTo: xt, ...Le } = e, Ke = { ref: d }, Te = { ...Le, ...g && m && vt.isServer ? { class: P([o.class, Le.class, ...A, ...z]) } : {} };
    return ee({ theirProps: Te, ourProps: Ke, slot: {}, slots: n, attrs: o, features: il, visible: h.value === "visible", name: "TransitionChild" });
  };
} }), La = Me, mt = J({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: o, slots: n }) {
  let l = nt(), s = E(() => e.show === null && l !== null ? (l.value & oe.Open) === oe.Open : e.show);
  re(() => {
    if (![!0, !1].includes(s.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r = _(s.value ? "visible" : "hidden"), i = rl(() => {
    r.value = "hidden";
  }), p = _(!0), f = { show: s, appear: E(() => e.appear || !p.value) };
  return Y(() => {
    re(() => {
      p.value = !1, s.value ? r.value = "visible" : Ft(i) || (r.value = "hidden");
    });
  }), ce(So, i), ce(Co, f), () => {
    let d = At(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), h = { unmount: e.unmount };
    return ee({ ourProps: { ...h, as: "template" }, theirProps: {}, slot: {}, slots: { ...n, default: () => [te(La, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...o, ...h, ...d }, n.default)] }, attrs: {}, features: il, visible: r.value === "visible", name: "Transition" });
  };
} });
const Ta = {
  key: 0,
  class: "po-text-sm po-font-normal po-text-slate-400 po-select-none po-block po-text-left po-pt-5"
}, Da = { class: "po-grid po-grid-cols-3" }, Aa = { class: "po-bg-white hover:po-bg-slate-200 po-rounded-xl po-p-2 po-transition-colors po-duration-150 po-ease-in" }, za = ["href", "target"], Ba = { class: "po-flex po-w-14 po-h-14 po-items-center po-justify-center po-duration-100 po-ease-in-out po-overflow-hidden" }, ja = ["innerHTML"], Ma = { class: "po-text-slate-500 po-font-normal po-text-sm po-text-center" }, un = {
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
    return (t, o) => (u(!0), c(B, null, W(e.list, (n) => (u(), c("div", null, [
      n.groupName.length > 0 ? (u(), c("span", Ta, V(n.groupName), 1)) : x("", !0),
      a("ul", Da, [
        (u(!0), c(B, null, W(n.apps, (l) => (u(), c("li", Aa, [
          a("a", {
            href: l.url,
            target: e.openInNewTab ? "_blank" : "_self",
            class: "po-flex po-flex-col po-group po-justify-center po-items-center"
          }, [
            a("span", Ba, [
              a("span", {
                class: "po-w-9",
                innerHTML: l.icon
              }, null, 8, ja)
            ]),
            a("span", Ma, V(l.name), 1)
          ], 8, za)
        ]))), 256))
      ])
    ]))), 256));
  }
}, Na = {
  name: "PoAppTray"
}, Ia = /* @__PURE__ */ Object.assign(Na, {
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
    const t = e, o = ["", "Internal"], n = E(() => {
      let l = [];
      return o.forEach((s) => {
        let r = t.appList.filter((i) => i.group == s);
        r.length > 0 && l.push({
          groupName: s,
          apps: r
        });
      }), l;
    });
    return (l, s) => e.justApps ? (u(), j(un, {
      key: 1,
      list: k(n),
      "open-in-new-tab": e.openInNewTab
    }, null, 8, ["list", "open-in-new-tab"])) : (u(), j(k(Rt), { key: 0 }, {
      default: T(({ open: r }) => [
        O(k(Vo), {
          class: P([r ? "" : "po-text-opacity-90", "po-block po-w-6 po-text-slate-100 genie-effect po-z-50 po-outline-none"])
        }, {
          default: T(() => [
            O(k(ds))
          ]),
          _: 2
        }, 1032, ["class"]),
        O(Be, {
          "enter-active-class": "po-transition po-duration-200 po-ease-out",
          "enter-from-class": "po-translate-y-1 po-opacity-0",
          "enter-to-class": "po-translate-y-0 po-opacity-100",
          "leave-active-class": "po-transition po-duration-150 po-ease-in",
          "leave-from-class": "po-translate-y-0 po-opacity-100",
          "leave-to-class": "po-translate-y-1 po-opacity-0"
        }, {
          default: T(() => [
            O(k(ko), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
              default: T(() => [
                O(un, {
                  list: k(n),
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
}), Ra = {
  key: 0,
  class: "po-absolute po-right-0 po-w-3 po-h-3 po-bg-mpao-orange po-rounded-full po-border-2 po-border-mpao-blue"
}, Fa = {
  key: 0,
  class: "po-space-y-2"
}, Ha = ["onClick"], qa = { class: "po-flex po-items-center po-justify-between" }, Wa = { class: "po-text-sm po-text-left po-font-semibold po-text-slate-700 po-grow po-flex po-space-x-2 po-items-center" }, Ua = { class: "po-grow" }, Ga = {
  key: 0,
  class: "po-w-[6px] po-h-[6px] po-rounded-full po-shrink-0 po-bg-mpao-orange po-animate-pulse"
}, Za = { class: "po-text-xs po-font-normal po-text-slate-400 po-shrink-0" }, Ka = { class: "po-block po-text-sm po-text-slate-500 po-pb-3 po-text-left" }, Ya = {
  key: 1,
  class: "po-text-sm po-text-slate-500 po-py-10 po-text-center po-block"
}, Xa = {
  name: "PoNotificationHub"
}, Qa = /* @__PURE__ */ Object.assign(Xa, {
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
    return (o, n) => (u(), j(k(Rt), null, {
      default: T(({ open: l }) => [
        O(k(Vo), {
          class: P([l ? "" : "text-opacity-90", "po-block po-w-6 po-text-slate-100 genie-effect po-relative po-z-50 po-outline-none"])
        }, {
          default: T(() => [
            e.hasNewNotifications ? (u(), c("span", Ra)) : x("", !0),
            O(k(ts), { class: "po-stroke-current" })
          ]),
          _: 2
        }, 1032, ["class"]),
        O(Be, {
          "enter-active-class": "po-transition po-duration-200 po-ease-out",
          "enter-from-class": "po-translate-y-1 po-opacity-0",
          "enter-to-class": "po-translate-y-0 po-opacity-100",
          "leave-active-class": "po-transition po-duration-150 po-ease-in",
          "leave-from-class": "po-translate-y-0 po-opacity-100",
          "leave-to-class": "po-translate-y-1 po-opacity-0"
        }, {
          default: T(() => [
            O(k(ko), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
              default: T(() => [
                e.notifications !== null && e.notifications.length > 0 ? (u(), c("ul", Fa, [
                  (u(!0), c(B, null, W(e.notifications, (s) => (u(), c("li", {
                    role: "button",
                    class: "po-space-y-2 po-p-2 po-rounded-lg po-bg-white hover:po-bg-slate-100 po-border po-border-slate-100",
                    onClick: ae((r) => o.$emit("button-click", s.name), ["prevent"])
                  }, [
                    a("span", qa, [
                      a("p", Wa, [
                        a("span", Ua, V(s.name), 1),
                        s.seen ? x("", !0) : (u(), c("span", Ga))
                      ]),
                      a("span", Za, V(s.time), 1)
                    ]),
                    a("span", Ka, V(s.text), 1)
                  ], 8, Ha))), 256))
                ])) : (u(), c("span", Ya, " No notifications to show at the moment. We'll keep you informed."))
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
}), Ja = {
  key: 0,
  class: "po-hidden lg:po-block po-text-sky-50 po-text-sm po-shrink-0 po-pr-3 po-truncate po-max-w-[140px] po-overflow-hidden"
}, er = {
  key: 1,
  class: "po-px-3 po-bg-gradient-to-br po-from-slate-50 po-to-blue-100 po-py-1 po-rounded-l-md po-w-[100px] po-flex po-items-center po-justify-center po-text-center"
}, tr = ["src"], or = ["src", "alt"], nr = {
  key: 1,
  class: "po-text-xs po-text-white po-font-semibold"
}, lr = { class: "po-pb-5" }, sr = ["src"], ar = {
  key: 2,
  class: "po-block po-text-sm po-text-slate-400 po-italic"
}, rr = { key: 0 }, ir = { key: 1 }, ur = /* @__PURE__ */ a("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), pr = { class: "po-space-y-2 po-py-2 po-max-h-[250px] po-overflow-y-auto" }, cr = ["onClick"], dr = { class: "po-w-5" }, fr = { class: "" }, vr = { class: "po-block po-text-sm po-font-normal" }, hr = {
  key: 0,
  class: "po-text-left po-block po-text-xs po-text-slate-400"
}, mr = /* @__PURE__ */ a("div", { class: "po-h-[2px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), gr = { class: "md:po-grid po-grid-cols-2 po-space-x-1 po-pt-2" }, br = { class: "po-w-5" }, yr = /* @__PURE__ */ a("span", { class: "po-text-sm po-font-normal" }, "Profile", -1), xr = { class: "po-w-5" }, wr = /* @__PURE__ */ a("span", { class: "po-text-sm po-font-normal" }, "Logout", -1), $r = /* @__PURE__ */ a("div", { class: "po-text-xs po-space-x-3 po-text-center po-pt-3" }, [
  /* @__PURE__ */ a("a", {
    href: "",
    class: "po-text-slate-500 hover:po-text-mpao-lightblue"
  }, "Privacy Policy"),
  /* @__PURE__ */ a("a", {
    href: "",
    class: "po-text-slate-500 hover:po-text-mpao-lightblue"
  }, "Terms of Service")
], -1), Vr = {
  name: "PoProfileSwitcher"
}, kr = /* @__PURE__ */ Object.assign(Vr, {
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
    function n(h) {
      t("button-click", h);
    }
    const l = _({
      name: "",
      initials: "",
      image: ""
    });
    function s(h) {
      return h ? h.match(/\b[A-Z]/g).join("").substr(0, 2) : "";
    }
    const r = E(() => {
      var y, v, w, b, S, C, A, z, I, N, H, D, G;
      let h = [], $ = (y = o.userObject) != null && y.transacting_as_organisation && Object.keys((v = o.userObject) == null ? void 0 : v.transacting_as_organisation).length > 0 ? (w = o.userObject) == null ? void 0 : w.transacting_as_organisation : null, m = $ ? $.name : (b = o.userObject) == null ? void 0 : b.name, g = $ ? $.logo ? $.logo : (S = o.userObject) == null ? void 0 : S.avatar : "";
      return l.value = {
        name: m,
        initials: s(m),
        image: g
      }, h = [], h.push({
        id: (C = o.userObject) == null ? void 0 : C.id,
        entity_id: (A = o.userObject) == null ? void 0 : A.entity_id,
        name: (z = o.userObject) == null ? void 0 : z.name,
        identifier: null,
        organisation_uuid: null
      }), ((N = (I = o.userObject) == null ? void 0 : I.organisations) == null ? void 0 : N.length) > 0 && ((D = (H = o.userObject) == null ? void 0 : H.organisations) == null || D.forEach((U) => h.push(U))), h.forEach((U) => {
        var R, F, q, M;
        U.current = ((R = o.userObject) == null ? void 0 : R.transacting_as_organisation) && Object.keys((F = o.userObject) == null ? void 0 : F.transacting_as_organisation).length > 0 && U.entity_id === ((M = (q = o.userObject) == null ? void 0 : q.transacting_as_organisation) == null ? void 0 : M.entity_id);
      }), ((G = o.userObject) == null ? void 0 : G.transacting_as_organisation) === null && (h[0].current = !0), h;
    }), i = _(null), p = _(null), { avatar: f, logo: d } = Ve(o);
    return X(f, () => {
      i.value = f.value;
    }), X(d, () => {
      p.value = d.value;
    }), Nl(() => {
      r.value;
    }), Y(() => {
      r.value;
    }), Il(() => {
      r.value;
    }), ho(() => {
      r.value;
    }), (h, $) => (u(), j(k(Rt), { key: k(r) }, {
      default: T(({ open: m }) => [
        a("div", null, [
          O(k(Vo), { class: "po-flex po-items-center po-outline-none" }, {
            default: T(() => [
              p.value ? x("", !0) : (u(), c("span", Ja, V(l.value.name), 1)),
              p.value ? (u(), c("span", er, [
                a("img", {
                  class: "po-h-8",
                  src: p.value,
                  alt: ""
                }, null, 8, tr)
              ])) : x("", !0),
              a("div", {
                class: P([
                  {
                    "po-bg-gradient-to-br po-from-slate-50 po-to-blue-100 po-p-1 po-rounded-r-md": p.value
                  }
                ])
              }, [
                a("div", {
                  class: P([[
                    { "text-opacity-90": m },
                    {
                      "po-w-10 po-h-10": !p.value
                    },
                    { "po-w-8 po-h-8": p.value }
                  ], "po-shrink-0 po-select-none po-rounded-full po-bg-[#2e5266] po-flex po-items-center po-justify-center genie-effect po-z-50"])
                }, [
                  i.value ? (u(), c("img", {
                    key: 0,
                    class: "po-rounded-full po-border po-border-white",
                    src: i.value,
                    alt: l.value.name
                  }, null, 8, or)) : (u(), c("span", nr, V(l.value.initials), 1))
                ], 2)
              ], 2)
            ]),
            _: 2
          }, 1024),
          O(Be, {
            "enter-active-class": "po-transition po-duration-200 po-ease-out",
            "enter-from-class": "po-translate-y-1 po-opacity-0",
            "enter-to-class": "po-translate-y-0 po-opacity-100",
            "leave-active-class": "po-transition po-duration-150 po-ease-in",
            "leave-from-class": "po-translate-y-0 po-opacity-100",
            "leave-to-class": "po-translate-y-1 po-opacity-0"
          }, {
            default: T(() => [
              O(k(ko), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
                default: T(() => {
                  var g, y, v, w;
                  return [
                    a("div", lr, [
                      i.value ? (u(), c("img", {
                        key: 0,
                        class: "po-w-20 po-h-20 po-mx-auto po-rounded-full po-overflow-hidden",
                        src: i.value,
                        alt: ""
                      }, null, 8, sr)) : x("", !0),
                      (g = e.userObject) != null && g.name ? (u(), c("span", {
                        key: 1,
                        class: P(["po-text-base po-text-slate-600 po-font-medium po-block", [{ "po-mt-4": i.value }]])
                      }, V((y = e.userObject) == null ? void 0 : y.name), 3)) : x("", !0),
                      (v = e.userObject) != null && v.name ? (u(), c("span", ar, [
                        l.value.name === ((w = e.userObject) == null ? void 0 : w.name) ? (u(), c("span", rr, "Self")) : (u(), c("span", ir, "User at " + V(l.value.name), 1))
                      ])) : x("", !0)
                    ]),
                    ur,
                    a("div", pr, [
                      (u(!0), c(B, null, W(k(r), (b, S) => (u(), c("a", {
                        href: "#",
                        onClick: ae((C) => n(b), ["prevent"]),
                        class: P(["po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-shadow-sm po-transition-all po-duration-150 po-ease-out hover:po-bg-blue-50", [
                          {
                            " po-bg-white": !b.current
                          },
                          {
                            " po-bg-blue-50 po-shadow-sm": b.current
                          }
                        ]]),
                        role: "button",
                        key: S
                      }, [
                        a("span", dr, [
                          b.isPersonal ? (u(), j(k(Jo), {
                            key: 0,
                            class: P([
                              "po-stroke-current",
                              { "po-stroke-mpao-lightblue": b.current }
                            ])
                          }, null, 8, ["class"])) : x("", !0),
                          b.isPersonal ? x("", !0) : (u(), j(k(ns), {
                            key: 1,
                            class: P([
                              "po-stroke-current",
                              { "po-stroke-mpao-lightblue": b.current }
                            ])
                          }, null, 8, ["class"]))
                        ]),
                        a("span", fr, [
                          a("span", vr, V(b.name), 1),
                          b.identifier ? (u(), c("span", hr, V(b.identifier), 1)) : x("", !0)
                        ])
                      ], 10, cr))), 128))
                    ]),
                    mr,
                    a("div", gr, [
                      a("a", {
                        href: "#",
                        onClick: $[0] || ($[0] = ae((b) => h.$emit("button-click", "current-profile"), ["prevent"])),
                        class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-slate-50 hover:po-bg-blue-50 po-transition-all po-duration-150 po-ease-out",
                        role: "button"
                      }, [
                        a("span", br, [
                          O(k(Jo), { class: "po-stroke-current" })
                        ]),
                        yr
                      ]),
                      a("a", {
                        href: "#",
                        onClick: $[1] || ($[1] = ae((b) => h.$emit("button-click", "logout"), ["prevent"])),
                        class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-slate-50 hover:po-bg-blue-50 po-transition-all po-duration-150 po-ease-out",
                        role: "button"
                      }, [
                        a("span", xr, [
                          O(k(Ql), { class: "po-stroke-current" })
                        ]),
                        wr
                      ])
                    ]),
                    $r
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
}), Oo = {
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
    return (t, o) => (u(), c("div", {
      class: P(["loading-dots po-inline-block po-w-[40px] po-h-[10px]", [{ "po-relative": !e.absolute }, { "po-absolute": e.absolute }]])
    }, [
      a("div", {
        class: P(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[8px]", e.dotColor])
      }, null, 2),
      a("div", {
        class: P(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[8px]", e.dotColor])
      }, null, 2),
      a("div", {
        class: P(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[17px]", e.dotColor])
      }, null, 2),
      a("div", {
        class: P(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[26px]", e.dotColor])
      }, null, 2)
    ], 2));
  }
}, _r = ["disabled", "aria-disabled"], Cr = ["value", "disabled", "aria-disabled"], Sr = {
  name: "PoButton"
}, Po = /* @__PURE__ */ Object.assign(Sr, {
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
    const o = e, n = "po-rounded-full po-transition-colors po-border po-duration-100 po-ease-in-out po-cursor-pointer disabled:po-bg-slate-400 disabled:po-border-slate-400 disabled:po-cursor-default disabled:po-hover:bg-slate-400", l = E(() => {
      switch (o.size) {
        case "sm":
          return "po-px-2 po-py-1 po-text-xs";
        case "md":
          return "po-px-4 po-py-2 po-text-sm";
        case "lg":
          return "po-px-5 po-py-3 po-text-normal";
      }
    }), s = E(() => {
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
    return (r, i) => (u(), c(B, null, [
      e.isLoading ? (u(), c("span", {
        key: 0,
        class: P([[n, k(l)], "po-bg-slate-200 hover:po-bg-slate-200 focus:po-bg-slate-200"])
      }, [
        O(Oo, {
          "dot-color": "po-bg-slate-500",
          class: "po-relative -po-bottom-[0.2rem]"
        })
      ], 2)) : x("", !0),
      e.type == "button" && !e.isLoading ? (u(), c("button", Oe({
        key: 1,
        onClick: i[0] || (i[0] = ae((p) => r.$emit("button-click", e.to), ["prevent"])),
        class: [n, k(l), k(s)],
        disabled: e.disabled,
        "aria-disabled": e.disabled
      }, r.$attrs), [
        Z(r.$slots, "label", {}, () => [
          Q(V(e.label), 1)
        ])
      ], 16, _r)) : x("", !0),
      e.type == "submit" && !e.isLoading ? (u(), c("input", Oe({
        key: 2,
        type: "submit",
        class: [n, k(l), k(s)],
        value: e.label,
        disabled: e.disabled,
        "aria-disabled": e.disabled
      }, r.$attrs), null, 16, Cr)) : x("", !0),
      e.type == "link" && !e.isLoading ? (u(), c("a", Oe({
        key: 3,
        href: "#",
        onClick: i[1] || (i[1] = ae((p) => r.$emit("button-click", e.to), ["prevent"])),
        class: [n, k(l), k(s)]
      }, r.$attrs), [
        Z(r.$slots, "label", {}, () => [
          Q(V(e.label), 1)
        ])
      ], 16)) : x("", !0),
      e.type == "simple" && !e.isLoading ? (u(), c("a", {
        key: 4,
        href: "#",
        onClick: i[2] || (i[2] = ae((p) => r.$emit("button-click", e.to), ["prevent"])),
        class: P(["po-text-sm po-transition-colors po-duration-100 po-ease-in-out po-inline-flex po-items-center po-space-x-1", [
          { "po-text-mpao-lightblue hover:po-text-mpao-blue": !e.overrideColors }
        ]])
      }, [
        Z(r.$slots, "label", {}, () => [
          Q(V(e.label), 1)
        ])
      ], 2)) : x("", !0)
    ], 64));
  }
});
function Eo(e, t) {
  return u(), c("svg", {
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
function ul(e, t) {
  return u(), c("svg", {
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
function Lo(e, t) {
  return u(), c("svg", {
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
function To(e, t) {
  return u(), c("svg", {
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
function pn(e, t) {
  return u(), c("svg", {
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
function Or(e, t) {
  return u(), c("svg", {
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
function Pr(e, t) {
  return u(), c("svg", {
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
function pl(e, t) {
  return u(), c("svg", {
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
function Do(e, t) {
  return u(), c("svg", {
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
function Er(e, t) {
  return u(), c("svg", {
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
function Lr(e, t) {
  return u(), c("svg", {
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
function cl(e, t) {
  return u(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
  ]);
}
function Tr() {
  var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
  if (t > 0)
    return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
  var o = e.indexOf("Trident/");
  if (o > 0) {
    var n = e.indexOf("rv:");
    return parseInt(e.substring(n + 3, e.indexOf(".", n)), 10);
  }
  var l = e.indexOf("Edge/");
  return l > 0 ? parseInt(e.substring(l + 5, e.indexOf(".", l)), 10) : -1;
}
let Ct;
function ro() {
  ro.init || (ro.init = !0, Ct = Tr() !== -1);
}
var Ht = {
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
    ro(), vo(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", Ct && this.$el.appendChild(e), e.data = "about:blank", Ct || this.$el.appendChild(e);
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
      this._resizeObject && this._resizeObject.onload && (!Ct && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const Dr = /* @__PURE__ */ Hl("data-v-b329ee4c");
Rl("data-v-b329ee4c");
const Ar = {
  class: "resize-observer",
  tabindex: "-1"
};
Fl();
const zr = /* @__PURE__ */ Dr((e, t, o, n, l, s) => (u(), j("div", Ar)));
Ht.render = zr;
Ht.__scopeId = "data-v-b329ee4c";
Ht.__file = "src/components/ResizeObserver.vue";
function St(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? St = function(t) {
    return typeof t;
  } : St = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, St(e);
}
function Br(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function cn(e, t) {
  for (var o = 0; o < t.length; o++) {
    var n = t[o];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function jr(e, t, o) {
  return t && cn(e.prototype, t), o && cn(e, o), e;
}
function dn(e) {
  return Mr(e) || Nr(e) || Ir(e) || Rr();
}
function Mr(e) {
  if (Array.isArray(e))
    return io(e);
}
function Nr(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function Ir(e, t) {
  if (e) {
    if (typeof e == "string")
      return io(e, t);
    var o = Object.prototype.toString.call(e).slice(8, -1);
    if (o === "Object" && e.constructor && (o = e.constructor.name), o === "Map" || o === "Set")
      return Array.from(e);
    if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
      return io(e, t);
  }
}
function io(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var o = 0, n = new Array(t); o < t; o++)
    n[o] = e[o];
  return n;
}
function Rr() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Fr(e) {
  var t;
  return typeof e == "function" ? t = {
    callback: e
  } : t = e, t;
}
function Hr(e, t) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n, l, s, r = function(p) {
    for (var f = arguments.length, d = new Array(f > 1 ? f - 1 : 0), h = 1; h < f; h++)
      d[h - 1] = arguments[h];
    if (s = d, !(n && p === l)) {
      var $ = o.leading;
      typeof $ == "function" && ($ = $(p, l)), (!n || p !== l) && $ && e.apply(void 0, [p].concat(dn(s))), l = p, clearTimeout(n), n = setTimeout(function() {
        e.apply(void 0, [p].concat(dn(s))), n = 0;
      }, t);
    }
  };
  return r._clear = function() {
    clearTimeout(n), n = null;
  }, r;
}
function dl(e, t) {
  if (e === t)
    return !0;
  if (St(e) === "object") {
    for (var o in e)
      if (!dl(e[o], t[o]))
        return !1;
    return !0;
  }
  return !1;
}
var qr = /* @__PURE__ */ function() {
  function e(t, o, n) {
    Br(this, e), this.el = t, this.observer = null, this.frozen = !1, this.createObserver(o, n);
  }
  return jr(e, [{
    key: "createObserver",
    value: function(o, n) {
      var l = this;
      if (this.observer && this.destroyObserver(), !this.frozen) {
        if (this.options = Fr(o), this.callback = function(i, p) {
          l.options.callback(i, p), i && l.options.once && (l.frozen = !0, l.destroyObserver());
        }, this.callback && this.options.throttle) {
          var s = this.options.throttleOptions || {}, r = s.leading;
          this.callback = Hr(this.callback, this.options.throttle, {
            leading: function(p) {
              return r === "both" || r === "visible" && p || r === "hidden" && !p;
            }
          });
        }
        this.oldResult = void 0, this.observer = new IntersectionObserver(function(i) {
          var p = i[0];
          if (i.length > 1) {
            var f = i.find(function(h) {
              return h.isIntersecting;
            });
            f && (p = f);
          }
          if (l.callback) {
            var d = p.isIntersecting && p.intersectionRatio >= l.threshold;
            if (d === l.oldResult)
              return;
            l.oldResult = d, l.callback(d, p);
          }
        }, this.options.intersection), vo(function() {
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
function fl(e, t, o) {
  var n = t.value;
  if (n)
    if (typeof IntersectionObserver > "u")
      console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");
    else {
      var l = new qr(e, n, o);
      e._vue_visibilityState = l;
    }
}
function Wr(e, t, o) {
  var n = t.value, l = t.oldValue;
  if (!dl(n, l)) {
    var s = e._vue_visibilityState;
    if (!n) {
      vl(e);
      return;
    }
    s ? s.createObserver(n, o) : fl(e, {
      value: n
    }, o);
  }
}
function vl(e) {
  var t = e._vue_visibilityState;
  t && (t.destroyObserver(), delete e._vue_visibilityState);
}
var Ur = {
  beforeMount: fl,
  updated: Wr,
  unmounted: vl
};
function Gr(e) {
  return { all: e = e || /* @__PURE__ */ new Map(), on: function(t, o) {
    var n = e.get(t);
    n && n.push(o) || e.set(t, [o]);
  }, off: function(t, o) {
    var n = e.get(t);
    n && n.splice(n.indexOf(o) >>> 0, 1);
  }, emit: function(t, o) {
    (e.get(t) || []).slice().map(function(n) {
      n(o);
    }), (e.get("*") || []).slice().map(function(n) {
      n(t, o);
    });
  } };
}
var Zr = {
  itemsLimit: 1e3
}, Kr = /(auto|scroll)/;
function hl(e, t) {
  return e.parentNode === null ? t : hl(e.parentNode, t.concat([e]));
}
var Jt = function(t, o) {
  return getComputedStyle(t, null).getPropertyValue(o);
}, Yr = function(t) {
  return Jt(t, "overflow") + Jt(t, "overflow-y") + Jt(t, "overflow-x");
}, Xr = function(t) {
  return Kr.test(Yr(t));
};
function fn(e) {
  if (e instanceof HTMLElement || e instanceof SVGElement) {
    for (var t = hl(e.parentNode, []), o = 0; o < t.length; o += 1)
      if (Xr(t[o]))
        return t[o];
    return document.scrollingElement || document.documentElement;
  }
}
function uo(e) {
  return uo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, uo(e);
}
var ml = {
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
function gl() {
  return this.items.length && uo(this.items[0]) !== "object";
}
var po = !1;
if (typeof window < "u") {
  po = !1;
  try {
    var Qr = Object.defineProperty({}, "passive", {
      get: function() {
        po = !0;
      }
    });
    window.addEventListener("test", null, Qr);
  } catch {
  }
}
let Jr = 0;
var Ao = {
  name: "RecycleScroller",
  components: {
    ResizeObserver: Ht
  },
  directives: {
    ObserveVisibility: Ur
  },
  props: {
    ...ml,
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
        }, t = this.items, o = this.sizeField, n = this.minItemSize;
        let l = 1e4, s = 0, r;
        for (let i = 0, p = t.length; i < p; i++)
          r = t[i][o] || n, r < l && (l = r), s += r, e[i] = { accumulator: s, size: r };
        return this.$_computedMinItemSize = l, e;
      }
      return [];
    },
    simpleArray: gl,
    itemIndexByKey() {
      const { keyField: e, items: t } = this, o = {};
      for (let n = 0, l = t.length; n < l; n++)
        o[t[n][e]] = n;
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
    addView(e, t, o, n, l) {
      const s = ql({
        id: Jr++,
        index: t,
        used: !0,
        key: n,
        type: l
      }), r = Wl({
        item: o,
        position: 0,
        nr: s
      });
      return e.push(r), r;
    },
    unuseView(e, t = !1) {
      const o = this.$_unusedViews, n = e.nr.type;
      let l = o.get(n);
      l || (l = [], o.set(n, l)), l.push(e), t || (e.nr.used = !1, e.position = -9999);
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
      const o = this.itemSize, n = this.gridItems || 1, l = this.itemSecondarySize || o, s = this.$_computedMinItemSize, r = this.typeField, i = this.simpleArray ? null : this.keyField, p = this.items, f = p.length, d = this.sizes, h = this.$_views, $ = this.$_unusedViews, m = this.pool, g = this.itemIndexByKey;
      let y, v, w, b, S;
      if (!f)
        y = v = b = S = w = 0;
      else if (this.$_prerender)
        y = b = 0, v = S = Math.min(this.prerender, p.length), w = null;
      else {
        const D = this.getScroll();
        if (t) {
          let R = D.start - this.$_lastUpdateScrollPosition;
          if (R < 0 && (R = -R), o === null && R < s || R < o)
            return {
              continuous: !0
            };
        }
        this.$_lastUpdateScrollPosition = D.start;
        const G = this.buffer;
        D.start -= G, D.end += G;
        let U = 0;
        if (this.$refs.before && (U = this.$refs.before.scrollHeight, D.start -= U), this.$refs.after) {
          const R = this.$refs.after.scrollHeight;
          D.end += R;
        }
        if (o === null) {
          let R, F = 0, q = f - 1, M = ~~(f / 2), K;
          do
            K = M, R = d[M].accumulator, R < D.start ? F = M : M < f - 1 && d[M + 1].accumulator > D.start && (q = M), M = ~~((F + q) / 2);
          while (M !== K);
          for (M < 0 && (M = 0), y = M, w = d[f - 1].accumulator, v = M; v < f && d[v].accumulator < D.end; v++)
            ;
          for (v === -1 ? v = p.length - 1 : (v++, v > f && (v = f)), b = y; b < f && U + d[b].accumulator < D.start; b++)
            ;
          for (S = b; S < f && U + d[S].accumulator < D.end; S++)
            ;
        } else {
          y = ~~(D.start / o * n);
          const R = y % n;
          y -= R, v = Math.ceil(D.end / o * n), b = Math.max(0, Math.floor((D.start - U) / o * n)), S = Math.floor((D.end - U) / o * n), y < 0 && (y = 0), v > f && (v = f), b < 0 && (b = 0), S > f && (S = f), w = Math.ceil(f / n) * o;
        }
      }
      v - y > Zr.itemsLimit && this.itemsLimitError(), this.totalSize = w;
      let C;
      const A = y <= this.$_endIndex && v >= this.$_startIndex;
      if (A)
        for (let D = 0, G = m.length; D < G; D++)
          C = m[D], C.nr.used && (e && (C.nr.index = g[C.item[i]]), (C.nr.index == null || C.nr.index < y || C.nr.index >= v) && this.unuseView(C));
      const z = A ? null : /* @__PURE__ */ new Map();
      let I, N, H;
      for (let D = y; D < v; D++) {
        I = p[D];
        const G = i ? I[i] : I;
        if (G == null)
          throw new Error(`Key is ${G} on item (keyField is '${i}')`);
        if (C = h.get(G), !o && !d[D].size) {
          C && this.unuseView(C);
          continue;
        }
        N = I[r];
        let U = $.get(N), R = !1;
        if (!C)
          A ? U && U.length ? C = U.pop() : C = this.addView(m, D, I, G, N) : (H = z.get(N) || 0, (!U || H >= U.length) && (C = this.addView(m, D, I, G, N), this.unuseView(C, !0), U = $.get(N)), C = U[H], z.set(N, H + 1)), h.delete(C.nr.key), C.nr.used = !0, C.nr.index = D, C.nr.key = G, C.nr.type = N, h.set(G, C), R = !0;
        else if (!C.nr.used && (C.nr.used = !0, R = !0, U)) {
          const F = U.indexOf(C);
          F !== -1 && U.splice(F, 1);
        }
        C.item = I, R && (D === p.length - 1 && this.$emit("scroll-end"), D === 0 && this.$emit("scroll-start")), o === null ? (C.position = d[D - 1].accumulator, C.offset = 0) : (C.position = Math.floor(D / n) * o, C.offset = D % n * l);
      }
      return this.$_startIndex = y, this.$_endIndex = v, this.emitUpdate && this.$emit("update", y, v, b, S), clearTimeout(this.$_sortTimer), this.$_sortTimer = setTimeout(this.sortViews, this.updateInterval + 300), {
        continuous: A
      };
    },
    getListenerTarget() {
      let e = fn(this.$el);
      return window.document && (e === window.document.documentElement || e === window.document.body) && (e = window), e;
    },
    getScroll() {
      const { $el: e, direction: t } = this, o = t === "vertical";
      let n;
      if (this.pageMode) {
        const l = e.getBoundingClientRect(), s = o ? l.height : l.width;
        let r = -(o ? l.top : l.left), i = o ? window.innerHeight : window.innerWidth;
        r < 0 && (i += r, r = 0), r + i > s && (i = s - r), n = {
          start: r,
          end: r + i
        };
      } else
        o ? n = {
          start: e.scrollTop,
          end: e.scrollTop + e.clientHeight
        } : n = {
          start: e.scrollLeft,
          end: e.scrollLeft + e.clientWidth
        };
      return n;
    },
    applyPageMode() {
      this.pageMode ? this.addListeners() : this.removeListeners();
    },
    addListeners() {
      this.listenerTarget = this.getListenerTarget(), this.listenerTarget.addEventListener("scroll", this.handleScroll, po ? {
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
      let o, n, l;
      if (this.pageMode) {
        const s = fn(this.$el), r = s.tagName === "HTML" ? 0 : s[t.scroll], i = s.getBoundingClientRect(), f = this.$el.getBoundingClientRect()[t.start] - i[t.start];
        o = s, n = t.scroll, l = e + r + f;
      } else
        o = this.$el, n = t.scroll, l = e;
      o[n] = l;
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
const ei = {
  key: 0,
  ref: "before",
  class: "vue-recycle-scroller__slot"
}, ti = {
  key: 1,
  ref: "after",
  class: "vue-recycle-scroller__slot"
};
function oi(e, t, o, n, l, s) {
  const r = _n("ResizeObserver"), i = Ul("observe-visibility");
  return ot((u(), c(
    "div",
    {
      class: P(["vue-recycle-scroller", {
        ready: l.ready,
        "page-mode": o.pageMode,
        [`direction-${e.direction}`]: !0
      }]),
      onScrollPassive: t[0] || (t[0] = (...p) => s.handleScroll && s.handleScroll(...p))
    },
    [
      e.$slots.before ? (u(), c(
        "div",
        ei,
        [
          Z(e.$slots, "before")
        ],
        512
        /* NEED_PATCH */
      )) : x("v-if", !0),
      (u(), j(de(o.listTag), {
        ref: "wrapper",
        style: Tt({ [e.direction === "vertical" ? "minHeight" : "minWidth"]: l.totalSize + "px" }),
        class: P(["vue-recycle-scroller__item-wrapper", o.listClass])
      }, {
        default: T(() => [
          (u(!0), c(
            B,
            null,
            W(l.pool, (p) => (u(), j(de(o.itemTag), Oe({
              key: p.nr.id,
              style: l.ready ? {
                transform: `translate${e.direction === "vertical" ? "Y" : "X"}(${p.position}px) translate${e.direction === "vertical" ? "X" : "Y"}(${p.offset}px)`,
                width: o.gridItems ? `${e.direction === "vertical" && o.itemSecondarySize || o.itemSize}px` : void 0,
                height: o.gridItems ? `${e.direction === "horizontal" && o.itemSecondarySize || o.itemSize}px` : void 0
              } : null,
              class: ["vue-recycle-scroller__item-view", [
                o.itemClass,
                {
                  hover: !o.skipHover && l.hoverKey === p.nr.key
                }
              ]]
            }, Gl(o.skipHover ? {} : {
              mouseenter: () => {
                l.hoverKey = p.nr.key;
              },
              mouseleave: () => {
                l.hoverKey = null;
              }
            })), {
              default: T(() => [
                Z(e.$slots, "default", {
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
          Z(e.$slots, "empty")
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["style", "class"])),
      e.$slots.after ? (u(), c(
        "div",
        ti,
        [
          Z(e.$slots, "after")
        ],
        512
        /* NEED_PATCH */
      )) : x("v-if", !0),
      O(r, { onNotify: s.handleResize }, null, 8, ["onNotify"])
    ],
    34
    /* CLASS, HYDRATE_EVENTS */
  )), [
    [i, s.handleVisibilityChange]
  ]);
}
Ao.render = oi;
Ao.__file = "src/components/RecycleScroller.vue";
var zo = {
  name: "DynamicScroller",
  components: {
    RecycleScroller: Ao
  },
  provide() {
    return typeof ResizeObserver < "u" && (this.$_resizeObserver = new ResizeObserver((e) => {
      requestAnimationFrame(() => {
        if (Array.isArray(e)) {
          for (const t of e)
            if (t.target && t.target.$_vs_onResize) {
              let o, n;
              if (t.borderBoxSize) {
                const l = t.borderBoxSize[0];
                o = l.inlineSize, n = l.blockSize;
              } else
                o = t.contentRect.width, n = t.contentRect.height;
              t.target.$_vs_onResize(t.target.$_vs_id, o, n);
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
    ...ml,
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
    simpleArray: gl,
    itemsWithSize() {
      const e = [], { items: t, keyField: o, simpleArray: n } = this, l = this.vscrollData.sizes, s = t.length;
      for (let r = 0; r < s; r++) {
        const i = t[r], p = n ? r : i[o];
        let f = l[p];
        typeof f > "u" && !this.$_undefinedMap[p] && (f = 0), e.push({
          item: i,
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
      let n = 0, l = 0;
      const s = Math.min(e.length, t.length);
      for (let i = 0; i < s && !(n >= o); i++)
        n += t[i].size || this.minItemSize, l += e[i].size || this.minItemSize;
      const r = l - n;
      r !== 0 && (this.$el.scrollTop += r);
    }
  },
  beforeCreate() {
    this.$_updates = [], this.$_undefinedSizes = 0, this.$_undefinedMap = {}, this.$_events = Gr();
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
function ni(e, t, o, n, l, s) {
  const r = _n("RecycleScroller");
  return u(), j(r, Oe({
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
    default: T(({ item: i, index: p, active: f }) => [
      Z(e.$slots, "default", Ye(Xe({
        item: i.item,
        index: p,
        active: f,
        itemWithSize: i
      })))
    ]),
    before: T(() => [
      Z(e.$slots, "before")
    ]),
    after: T(() => [
      Z(e.$slots, "after")
    ]),
    empty: T(() => [
      Z(e.$slots, "empty")
    ]),
    _: 3
    /* FORWARDED */
  }, 16, ["items", "min-item-size", "direction", "list-tag", "item-tag", "onResize", "onVisible"]);
}
zo.render = ni;
zo.__file = "src/components/DynamicScroller.vue";
var bl = {
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
        const o = this.vscrollData.sizes[t], n = this.vscrollData.sizes[e];
        o != null && o !== n && this.applySize(o);
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
bl.__file = "src/components/DynamicScrollerItem.vue";
const li = ["for"], si = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, ai = ["title"], ri = { class: "po-relative po-mt-1" }, ii = {
  role: "button",
  ref: "comboboxButton"
}, ui = ["placeholder", "disabled", "id"], pi = {
  key: 0,
  class: "po-absolute po-z-10 po-mt-1 po-w-full po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
}, ci = {
  class: /* @__PURE__ */ P(["group-hover:po-text-white po-block po-truncate"])
}, di = {
  key: 0,
  class: "po-block po-text-xs po-opacity-60"
}, fi = {
  key: 0,
  class: "po-mt-2 po-text-sm po-text-slate-500",
  id: "-description"
}, vi = {
  key: 1,
  class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
  id: "-error"
}, hi = {
  name: "PoSelectField"
}, mi = /* @__PURE__ */ Object.assign(hi, {
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
    const o = e, n = _(""), l = _(""), s = _(), r = _(!1), i = _(!1), p = _(null), f = _(null), d = E(() => {
      const w = n.value.toLowerCase();
      return w === "" ? o.list.map((b) => ({
        ...b,
        active: s.value === b.id
      })) : o.list.filter((b) => b.name.toLowerCase().includes(w)).map((b) => ({
        ...b,
        active: s.value === b.id
      }));
    });
    function h(w) {
      if (o.object)
        return w == null ? void 0 : w.name;
      if (d.value) {
        let b = d.value.find((S) => S.id === w);
        return b == null ? void 0 : b.name;
      } else if (placeholder)
        return placeholder;
    }
    s.value = o.modelValue, ho(() => {
      s.value = o.modelValue;
    }), X(s, () => {
      l.value = h(s.value);
    });
    const { errorMessage: $ } = Ve(o), m = _($.value !== null);
    X($, (w, b) => {
      m.value = $.value !== null && $.value !== "";
    });
    const g = _("");
    Y(() => {
      o.id === "" ? g.value = o.id ? o.id : `${o.label.replace(
        /\s/g,
        ""
      )}-${Date.now()}-selectfield-${Math.floor(Math.random() * 9e3)}` : g.value = o.id, document.addEventListener("click", y), l.value = h(o.modelValue);
    }), Dt(() => {
      document.removeEventListener("click", y);
    });
    const y = (w) => {
      !f.value.contains(w.target) && !p.value.contains(w.target) && (r.value = !!i.value);
    };
    function v(w) {
      s.value = w, l.value = w.name, n.value = "", t("selected", o.object ? w : w.id), t("update:modelValue", o.object ? w : w.id), r.value = !!i.value;
    }
    return (w, b) => (u(), c("div", {
      class: P([{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]),
      ref_key: "containerRef",
      ref: f
    }, [
      a("label", {
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700",
        for: g.value
      }, [
        a("span", null, V(e.label), 1),
        e.required ? (u(), c("span", si, "*")) : x("", !0),
        e.info !== null ? (u(), c("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          O(k(Do), { class: "po-fill-current" })
        ], 8, ai)) : x("", !0)
      ], 8, li),
      a("div", ri, [
        a("div", ii, [
          ot(a("input", {
            type: "text",
            ref_key: "selectBox",
            ref: p,
            class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm",
            placeholder: e.placeholder,
            disabled: e.disabled,
            "onUpdate:modelValue": b[0] || (b[0] = (S) => l.value = S),
            onInput: b[1] || (b[1] = (S) => n.value = S.target.value),
            onFocus: b[2] || (b[2] = (S) => {
              i.value = !0, r.value = !0;
            }),
            onBlur: b[3] || (b[3] = (S) => i.value = !1),
            id: g.value
          }, null, 40, ui), [
            [Et, l.value]
          ]),
          a("span", {
            class: "po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-rounded-r-md po-px-2 focus:po-outline-none",
            role: "button",
            onClick: b[4] || (b[4] = (S) => r.value = !r.value)
          }, [
            O(k(Pr), {
              class: "po-h-5 po-w-5 po-text-slate-400",
              "aria-hidden": "true"
            })
          ])
        ], 512),
        r.value && k(d).length > 0 ? (u(), c("div", pi, [
          O(k(zo), {
            items: k(d),
            "min-item-size": 32,
            "key-field": "id",
            class: "scroller po-max-h-60 po-h-full po-overflow-y-auto"
          }, {
            default: T(({ item: S, index: C, active: A }) => [
              O(k(bl), {
                item: S,
                active: A,
                "size-dependencies": [S.name],
                onClick: (z) => v(S),
                "data-index": C,
                class: P([
                  "po-relative po-group po-select-none po-py-2 po-pl-3 po-pr-9 po-cursor-pointer hover:po-bg-mpao-lightblue",
                  S.active ? "po-bg-mpao-lightblue po-text-white" : "po-text-slate-900"
                ])
              }, {
                default: T(() => [
                  a("span", ci, [
                    Q(V((S == null ? void 0 : S.name) ?? "") + " ", 1),
                    S != null && S.subtitle ? (u(), c("span", di, V(S == null ? void 0 : S.subtitle), 1)) : x("", !0)
                  ])
                ]),
                _: 2
              }, 1032, ["item", "active", "size-dependencies", "onClick", "data-index", "class"])
            ]),
            _: 1
          }, 8, ["items"])
        ])) : x("", !0)
      ]),
      e.message !== null ? (u(), c("p", fi, V(e.message), 1)) : x("", !0),
      k($) !== null ? (u(), c("p", vi, [
        a("span", null, V(k($)), 1)
      ])) : x("", !0)
    ], 2));
  }
}), gi = /* @__PURE__ */ a("div", { class: "po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity" }, null, -1), bi = { class: "po-fixed po-z-10 po-inset-0" }, yi = { class: "po-flex po-justify-center po-items-start po-min-h-screen sm:po-px-4 sm:po-pt-10 sm:po-pb-20 po-text-center sm:po-block po-max-h-screen po-overflow-y-hidden" }, xi = /* @__PURE__ */ a("span", {
  class: "po-hidden sm:po-inline-block sm:po-align-middle sm:po-h-screen",
  "aria-hidden": "true"
}, "​", -1), wi = { class: "po-flex po-items-center po-bg-white po-rounded-t-xl po-p-5" }, $i = { class: "po-grow po-text-md po-font-bold po-text-slate-600" }, Vi = { class: "po-shrink-0" }, ki = /* @__PURE__ */ a("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), _i = {
  key: 0,
  class: "po-bg-slate-50 po-rounded-b-xl"
}, Ci = {
  name: "PoModal"
}, gt = /* @__PURE__ */ Object.assign(Ci, {
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
    const o = e, { show: n } = Ve(o), l = _(!1);
    X(n, () => {
      l.value = n.value;
    });
    function s() {
      l.value = !1, t("modal-closed", !0);
    }
    const r = o.modalTitle.toLowerCase().replace(/\s+/g, "-"), i = new URLSearchParams(window.location.search);
    return l.value = i.get("modal") !== void 0 && i.get("modal") === r, (p, f) => (u(), c("div", null, [
      e.openBtnLabel.length > 0 ? (u(), j(k(Po), {
        key: 0,
        label: e.openBtnLabel,
        onClick: f[0] || (f[0] = (d) => l.value = !0)
      }, null, 8, ["label"])) : x("", !0),
      (u(), j(Lt, { to: "body" }, [
        O(k(mt), {
          as: "template",
          show: l.value
        }, {
          default: T(() => [
            O(k(Mt), {
              as: "div",
              class: "po-relative po-z-50",
              onClose: s
            }, {
              default: T(() => [
                O(k(Me), {
                  as: "template",
                  enter: "po-ease-out po-duration-300",
                  "enter-from": "po-opacity-0",
                  "enter-to": "po-opacity-100",
                  leave: "po-ease-in po-duration-200",
                  "leave-from": "po-opacity-100",
                  "leave-to": "po-opacity-0"
                }, {
                  default: T(() => [
                    gi
                  ]),
                  _: 1
                }),
                a("div", bi, [
                  a("div", yi, [
                    xi,
                    O(k(Me), {
                      as: "template",
                      enter: "po-ease-out po-duration-300",
                      "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                      "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                      leave: "po-ease-in po-duration-200",
                      "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                      "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                    }, {
                      default: T(() => [
                        O(k(Nt), {
                          class: P(["po-relative po-inline-block po-align-bottom po-bg-white sm:po-rounded-xl po-text-left po-shadow-xl po-transform po-transition-all sm:po-align-top po-w-full", e.modalWidth])
                        }, {
                          default: T(() => [
                            a("div", wi, [
                              a("h3", $i, V(e.modalTitle), 1),
                              a("div", Vi, [
                                a("span", {
                                  role: "button",
                                  class: "po-block",
                                  onClick: s
                                }, [
                                  O(k(ft), { class: "po-w-5 po-stroke-slate-500 hover:po-stroke-mpao-orange po-transition-colors po-duration-150 po-ease-in-out" })
                                ])
                              ])
                            ]),
                            ki,
                            a("div", {
                              class: P(["po-p-5 po-overflow-y-auto", [
                                {
                                  "po-max-h-[calc(100vh-220px)]": p.$slots.footer
                                },
                                {
                                  "po-max-h-[calc(100vh-145px)]": !p.$slots.footer
                                },
                                e.modalHeight
                              ]])
                            }, [
                              Z(p.$slots, "content")
                            ], 2),
                            p.$slots.footer ? (u(), c("div", _i, [
                              Z(p.$slots, "footer")
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
});
function Si(e, t) {
  return u(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", { d: "M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" }),
    a("path", { d: "M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" })
  ]);
}
function Oi(e, t) {
  return u(), c("svg", {
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
function Pi(e, t) {
  return u(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", { d: "M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" })
  ]);
}
function yl(e, t) {
  return u(), c("svg", {
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
function Ei(e, t) {
  return u(), c("svg", {
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
const Li = ["for"], Ti = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Di = ["title"], Ai = ["name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], zi = ["id"], Bi = ["id"], ji = {
  name: "PoTextarea"
}, Mi = /* @__PURE__ */ Object.assign(ji, {
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
    return (t, o) => (u(), c("div", {
      class: P(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      a("label", {
        for: e.id,
        class: "po-text-sm po-font-medium po-text-slate-700 po-flex po-items-center po-space-x-1"
      }, [
        a("span", null, V(e.label), 1),
        e.required ? (u(), c("span", Ti, "*")) : x("", !0),
        e.info !== null ? (u(), c("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          O(k(yl))
        ], 8, Di)) : x("", !0)
      ], 8, Li),
      a("textarea", Oe({
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
        onInput: o[0] || (o[0] = (n) => t.$emit("update:modelValue", n.target.value)),
        class: "po-mt-1 po-peer po-px-3 po-py-2 po-block po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-border-slate-300 po-bg-white focus:po-border-mpao-lightblue focus:po-ring-0 invalid:po-border-red-400 invalid:po-focus:border-red-600 invalid:focus:po-ring-red-600 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default"
      }), null, 16, Ai),
      e.message !== null ? (u(), c("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, V(e.message), 9, zi)) : x("", !0),
      e.errorMessage !== null ? (u(), c("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, V(e.errorMessage), 9, Bi)) : x("", !0)
    ], 2));
  }
}), Ni = { class: "shell-sidebar--icon" }, Ii = /* @__PURE__ */ a("span", { class: "shell-sidebar--label po-font-medium" }, "Feedback", -1), Ri = { action: "" }, Fi = /* @__PURE__ */ a("br", null, null, -1), Hi = { class: "po-p-5" }, qi = {
  __name: "feedbackForm",
  setup(e) {
    const t = _(!1), o = [
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
    ], n = _({
      type: 1,
      message: ""
    });
    return (l, s) => (u(), c(B, null, [
      a("button", {
        onClick: s[0] || (s[0] = ae(() => t.value = !0, ["prevent"])),
        class: "shell-sidebar--item",
        title: "Go to feedback"
      }, [
        a("span", Ni, [
          O(k(ls), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" })
        ]),
        Ii
      ]),
      O(gt, {
        show: t.value,
        onModalClosed: s[3] || (s[3] = () => t.value = !1),
        "modal-title": "Feedback"
      }, {
        content: T(() => [
          a("form", Ri, [
            O(mi, {
              label: "Type",
              list: o,
              modelValue: n.value.type,
              "onUpdate:modelValue": s[1] || (s[1] = (r) => n.value.type = r)
            }, null, 8, ["modelValue"]),
            Fi,
            O(Mi, {
              cols: "6",
              rows: "6",
              label: "Description",
              modelValue: n.value.message,
              "onUpdate:modelValue": s[2] || (s[2] = (r) => n.value.message = r)
            }, null, 8, ["modelValue"])
          ])
        ]),
        footer: T(() => [
          a("div", Hi, [
            O(Po, {
              label: "Send",
              type: "button"
            })
          ])
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}, Wi = { class: "shell-sidebar" }, Ui = { class: "po-grow" }, Gi = { class: "shell-sidebar--menu" }, Zi = ["onClick", "title"], Ki = { class: "shell-sidebar--icon" }, Yi = { class: "shell-sidebar--label po-font-medium po-text-left" }, Xi = { key: 0 }, Qi = { class: "shell-sidebar--menu sidebar-apps po-shrink-0 po-mb-0" }, Ji = ["onClick"], eu = { class: "shell-sidebar--icon" }, tu = ["innerHTML"], ou = { class: "shell-sidebar--label po-font-medium po-text-left" }, nu = {
  key: 0,
  class: "shell-sidebar--menu po-shrink-0 po-mb-0 po-border-t po-border-slate-200 po-pt-3"
}, lu = {
  name: "PoSidebarDrawer"
}, J4 = /* @__PURE__ */ Object.assign(lu, {
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
    const o = e, n = E(() => {
      let p = [];
      const f = o.apps.filter((d) => d.code == o.appCode)[0];
      return f && o.apps.filter(
        (h) => f.related.includes(h.code)
      ).forEach((h) => {
        p.push(h);
      }), p;
    }), l = _(null);
    function s() {
      window.innerWidth <= 1024 && (l.value.checked = !l.value.checked);
    }
    function r(p, f) {
      t(p, f), s();
    }
    function i() {
    }
    return (p, f) => (u(), c(B, null, [
      a("input", {
        type: "checkbox",
        name: "",
        class: "po-hidden shell-sidebar--toggle",
        role: "none",
        id: "sidebar-drawer-toggle",
        checked: "",
        "aria-checked": "true",
        ref_key: "sidebarToggle",
        ref: l,
        onClick: i
      }, null, 512),
      a("aside", Wi, [
        a("div", Ui, [
          (u(!0), c(B, null, W(e.content, (d) => (u(), c("div", null, [
            O(k(nn), { defaultOpen: !0 }, {
              default: T(({ open: h }) => [
                d.groupName ? (u(), j(k(ln), {
                  key: 0,
                  class: P([h ? "" : "po-mb-3", "shell-sidebar--section po-w-full po-text-left"])
                }, {
                  default: T(() => [
                    Q(V(d.groupName), 1)
                  ]),
                  _: 2
                }, 1032, ["class"])) : x("", !0),
                O(Be, {
                  "enter-active-class": "po-transition po-duration-100 po-ease-out",
                  "enter-from-class": "po-transform po-scale-95 po-opacity-0",
                  "enter-to-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-active-class": "po-transition po-duration-75 po-ease-out",
                  "leave-from-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-to-class": "po-transform po-scale-95 po-opacity-0"
                }, {
                  default: T(() => [
                    O(k(sn), null, {
                      default: T(() => [
                        a("ul", Gi, [
                          (u(!0), c(B, null, W(d.items, ($) => (u(), c("li", null, [
                            $.disabled ? x("", !0) : (u(), c("button", {
                              key: 0,
                              onClick: (m) => r("button-click", $.url),
                              class: P([
                                "shell-sidebar--item",
                                { active: $.url == e.currRoute }
                              ]),
                              title: `Go to ${$.label}`
                            }, [
                              a("span", Ki, [
                                (u(), j(de($.icon), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" }))
                              ]),
                              a("span", Yi, V($.label), 1)
                            ], 10, Zi))
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
          k(n).length > 0 ? (u(), c("div", Xi, [
            O(k(nn), { defaultOpen: !0 }, {
              default: T(({ open: d }) => [
                e.appsLabel ? (u(), j(k(ln), {
                  key: 0,
                  class: P([d ? "" : "po-mb-3", "shell-sidebar--section po-w-full po-text-left"])
                }, {
                  default: T(() => [
                    Q(V(e.appsLabel), 1)
                  ]),
                  _: 2
                }, 1032, ["class"])) : x("", !0),
                O(Be, {
                  "enter-active-class": "po-transition po-duration-100 po-ease-out",
                  "enter-from-class": "po-transform po-scale-95 po-opacity-0",
                  "enter-to-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-active-class": "po-transition po-duration-75 po-ease-out",
                  "leave-from-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-to-class": "po-transform po-scale-95 po-opacity-0"
                }, {
                  default: T(() => [
                    O(k(sn), null, {
                      default: T(() => [
                        a("ul", Qi, [
                          (u(!0), c(B, null, W(k(n), (h, $) => (u(), c("li", null, [
                            a("button", {
                              onClick: (m) => r("app-click", h.name),
                              class: P(["shell-sidebar--item", [{ active: h.current }]]),
                              title: "Go to feedback"
                            }, [
                              a("span", eu, [
                                a("span", {
                                  innerHTML: h.icon,
                                  class: "po-text-slate-600 po-w-5"
                                }, null, 8, tu)
                              ]),
                              a("span", ou, V(h.name), 1)
                            ], 10, Ji)
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
          ])) : x("", !0)
        ]),
        e.hasFeedback ? (u(), c("ul", nu, [
          a("li", null, [
            O(qi)
          ])
        ])) : x("", !0)
      ])
    ], 64));
  }
}), su = {
  key: 0,
  class: "shell-content--action-bar"
}, au = { class: "action-bar__nav" }, ru = ["onClick"], iu = { class: "action-bar__nav_label po-font-medium" }, uu = {
  key: 0,
  class: "po-shrink-0 po-flex po-space-x-1"
}, pu = /* @__PURE__ */ a("span", { class: "action-bar__nav_label po-font-medium" }, "Go Back", -1), cu = {
  name: "PoActionBar"
}, e2 = /* @__PURE__ */ Object.assign(cu, {
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
    return (t, o) => e.items !== null && e.items.length > 0 || e.showBackButton ? (u(), c("section", su, [
      a("nav", au, [
        (u(!0), c(B, null, W(e.items, (n) => (u(), c("span", {
          onClick: (l) => t.$emit("button-click", n.label),
          class: P([[
            { "action-bar__nav_highlighted": n.highlighted },
            { "action-bar__nav_danger": n.danger }
          ], "action-bar__nav_link"])
        }, [
          (u(), j(de(n.icon), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" })),
          a("span", iu, V(n.label), 1)
        ], 10, ru))), 256))
      ]),
      e.showBackButton ? (u(), c("nav", uu, [
        a("span", {
          onClick: o[0] || (o[0] = (n) => t.$emit("button-click", "back")),
          class: "action-bar__nav_link"
        }, [
          pu,
          (u(), j(de(k(Jl)), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" }))
        ])
      ])) : x("", !0)
    ])) : x("", !0);
  }
}), du = { class: "po-shadow-sm po-rounded-xl po-bg-white po-relative" }, fu = {
  key: 0,
  class: "po-absolute po-right-2 po-top-2 po-p-2 po-rounded-lg"
}, vu = {
  key: 0,
  class: "po-text-base po-font-medium po-text-slate-600"
}, hu = {
  key: 1,
  class: "lg:po-col-span-2 lg:po-flex lg:po-justify-end po-space-x-2"
}, mu = {
  name: "PoCard"
}, t2 = /* @__PURE__ */ Object.assign(mu, {
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
    return (t, o) => (u(), c("div", du, [
      e.isLoading ? (u(), c("div", fu, [
        O(Oo)
      ])) : x("", !0),
      a("div", {
        class: P([
          { "po-grid po-grid-cols-1 lg:po-grid-cols-3 po-gap-3": t.$slots.action }
        ])
      }, [
        e.title.length > 0 ? (u(), c("h3", vu, V(e.title), 1)) : x("", !0),
        t.$slots.action ? (u(), c("div", hu, [
          Z(t.$slots, "action")
        ])) : x("", !0)
      ], 2),
      Z(t.$slots, "content")
    ]));
  }
}), gu = { class: "po-py-3 po-px-5 po-border-b po-border-slate-200" }, bu = {
  class: "po-flex po-w-full md:po-ml-0",
  action: "#",
  method: "GET"
}, yu = {
  for: "search-field",
  class: "po-sr-only"
}, xu = { class: "po-relative po-w-full po-text-slate-400 focus-within:po-text-mpao-lightblue po-transition-colors po-duration-100 po-ease-in-out" }, wu = { class: "po-pointer-events-none po-absolute po-inset-y-0 po-left-0 po-flex po-items-center" }, $u = ["placeholder", "value"], Vu = ["disabled"], ku = {
  name: "PoCardSearch"
}, o2 = /* @__PURE__ */ Object.assign(ku, {
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
    return (o, n) => (u(), c("div", gu, [
      a("form", bu, [
        a("label", yu, V(e.placeholder), 1),
        a("div", xu, [
          a("div", wu, [
            O(k(mo), { class: "po-h-5 po-w-5 po-flex-shrink-0" })
          ]),
          a("input", {
            name: "search-field",
            id: "desktop-search-field",
            placeholder: e.placeholder,
            value: e.modelValue,
            onInput: n[0] || (n[0] = (l) => o.$emit("update:modelValue", l.target.value)),
            class: "po-h-full po-w-full po-border-transparent po-py-2 po-pl-8 po-pr-3 po-text-sm po-text-slate-700 po-placeholder-slate-500 focus:po-border-transparent focus:po-placeholder-slate-400 focus:po-outline-none focus:po-ring-0",
            type: "search"
          }, null, 40, $u),
          e.showBtn ? (u(), c("button", {
            key: 0,
            class: P(["po-absolute po-right-0 po-text-sm po-rounded-full po-px-3 po-py-2 po-transition-colors po-duration-150 po-ease-out", [
              { "po-bg-mpao-lightblue po-text-white": e.modelValue !== "" },
              { "po-bg-slate-100 po-text-slate-400": e.modelValue === "" }
            ]]),
            disabled: e.modelValue === "",
            onClick: n[1] || (n[1] = ae((l) => o.$emit("button-click", e.modelValue), ["prevent"]))
          }, " Search ", 10, Vu)) : x("", !0)
        ])
      ])
    ]));
  }
}), _u = { class: "po-flex po-items-center" }, Cu = { class: "po-text-sm po-font-medium po-text-slate-500 po-pr-2" }, Su = {
  name: "PoPagination"
}, Ou = /* @__PURE__ */ Object.assign(Su, {
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
    function n() {
      t("button-click", "prev"), t("prev-click", !0);
    }
    function l() {
      t("button-click", "next"), t("next-click", !0);
    }
    const s = E(() => o.totalPages ? `Page ${o.currentPage} of ${o.totalPages}` : o.pagination ? o.pagination.label : "");
    return (r, i) => (u(), c("div", _u, [
      a("span", Cu, V(k(s)), 1),
      a("button", {
        title: "Previous",
        onClick: n,
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        O(k(rs), { class: "po-w-4 po-stroke-current po-stroke-2" })
      ]),
      a("button", {
        title: "Next",
        onClick: l,
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        O(k(is), { class: "po-w-4 po-stroke-current po-stroke-2" })
      ])
    ]));
  }
}), Pu = { key: 0 }, Eu = {
  class: "po-text-xl md:po-text-2xl po-font-semibold po-text-slate-800",
  id: "po-page-title"
}, Lu = {
  key: 0,
  class: "po-text-base po-mt-2 po-max-w-md po-block po-text-slate-500"
}, Tu = { key: 1 }, Du = { class: "po-grid po-grid-cols-1 lg:po-grid-cols-2 po-gap-5" }, Au = {
  class: "po-text-xl md:po-text-2xl po-font-semibold po-text-slate-800",
  id: "po-page-title"
}, zu = {
  key: 0,
  class: "po-text-base po-mt-4 po-max-w-md po-pb-5 po-block po-text-slate-500"
}, Bu = { class: "po-flex po-items-end po-justify-end po-flex-col" }, ju = {
  key: 0,
  class: "po-flex md:po-justify-end po-mb-5"
}, Mu = { class: "po-bg-slate-50 po-shadow-sm po-rounded-xl po-py-5 po-px-2 po-divide-x po-divide-slate-200 po-flex" }, Nu = ["onClick"], Iu = { class: "po-text-xl po-font-medium po-text-slate-600 po-flex po-items-center po-space-x-1" }, Ru = { class: "po-text-xl po-font-medium po-text-slate-600 group-hover:po-text-mpao-lightblue" }, Fu = { class: "po-text-sm po-text-slate-500 po-block group-hover:po-text-mpao-lightblue" }, Hu = { class: "po-flex po-items-center po-space-x-1 md:po-justify-end" }, qu = {
  key: 2,
  class: "po-border-l po-border-slate-400 po-h-3 po-w-3 po-ml-1"
}, Wu = {
  key: 0,
  class: "po-bg-slate-50 po-p-5 po-mt-5 po-rounded-md po-grid po-grid-cols-1 md:po-grid-cols-3 po-gap-5"
}, Uu = /* @__PURE__ */ a("span", { class: "po-text-xs po-text-slate-500 po-py-5" }, "No filters available at the moment.", -1), Gu = {
  name: "PoPageTitle"
}, n2 = /* @__PURE__ */ Object.assign(Gu, {
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
    const n = e.filterOn ? _(!0) : _(!1);
    function l(r) {
      t("pagination-click", r);
    }
    function s(r) {
      return r.iconColor ? r.iconColor : "po-slate-600";
    }
    return (r, i) => e.standAlone ? (u(), c("div", Pu, [
      a("h1", Eu, V(e.label), 1),
      e.description !== "" ? (u(), c("span", Lu, V(e.description), 1)) : x("", !0)
    ])) : (u(), c("div", Tu, [
      a("div", Du, [
        a("div", null, [
          a("h1", Au, V(e.label), 1),
          e.description !== "" ? (u(), c("span", zu, V(e.description), 1)) : x("", !0)
        ]),
        a("div", Bu, [
          e.stats !== null ? (u(), c("div", ju, [
            a("div", Mu, [
              (u(!0), c(B, null, W(e.stats, (p) => (u(), c("div", {
                class: "po-px-5 po-cursor-pointer po-group genie-effect",
                onClick: (f) => r.$emit("stat-click", p)
              }, [
                a("span", Iu, [
                  a("span", Ru, V(p.value), 1),
                  p.icon ? (u(), c("span", {
                    key: 0,
                    class: P(["po-w-5 po-h-5", s(p)])
                  }, [
                    (u(), j(de(p.icon)))
                  ], 2)) : x("", !0)
                ]),
                a("span", Fu, V(p.label), 1)
              ], 8, Nu))), 256))
            ])
          ])) : x("", !0),
          a("div", Hu, [
            e.showFilter ? (u(), c("button", {
              key: 0,
              title: "Filter",
              onClick: i[0] || (i[0] = (p) => {
                r.$emit("button-click", "filter"), n.value = !k(n);
              }),
              class: P([
                "po-p-2 po-rounded-md hover:po-bg-slate-200 po-transition-colors po-duration-75 po-ease-in-out",
                { "po-text-mpao-orange hover:po-text-mpao-orange": k(n) },
                { "tpo-ext-slate-600 hover:po-text-mpao-blue": !k(n) }
              ])
            }, [
              O(k(ps), { class: "po-w-4 po-stroke-current po-stroke-2" })
            ], 2)) : x("", !0),
            e.showDownload ? (u(), c("button", {
              key: 1,
              title: "Download",
              onClick: i[1] || (i[1] = (p) => r.$emit("button-click", "download")),
              class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
            }, [
              O(k(Xl), { class: "po-w-4 po-stroke-current po-stroke-2" })
            ])) : x("", !0),
            e.showFilter && e.showPagination || e.showDownload && e.showPagination ? (u(), c("span", qu, " ")) : x("", !0),
            e.showPagination ? (u(), j(Ou, {
              key: 3,
              pagination: e.pagination,
              onButtonClick: l
            }, null, 8, ["pagination"])) : x("", !0)
          ])
        ])
      ]),
      O(Be, {
        "enter-active-class": "po-transition po-duration-100 po-ease-out",
        "enter-from-class": "po-transform po-scale-95 po-opacity-0",
        "enter-to-class": "po-transform po-scale-100 po-opacity-100",
        "leave-active-class": "po-transition po-duration-75 po-ease-out",
        "leave-from-class": "po-transform po-scale-100 po-opacity-100",
        "leave-to-class": "po-transform po-scale-95 po-opacity-0"
      }, {
        default: T(() => [
          k(n) ? (u(), c("div", Wu, [
            Z(r.$slots, "filters", {}, () => [
              Uu
            ])
          ])) : x("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), Zu = {
  key: 0,
  class: "po-w-12"
}, Ku = ["onClick"], Yu = { class: "po-flex po-space-x-1 po-pr-2 po-items-center" }, Xu = { class: "po-grow" }, Qu = {
  key: 0,
  class: "po-shrink-0 po-select-none po-bg-slate-100 po-rounded-md po-w-4 po-h-4 po-flex po-items-center po-justify-center po-cursor-pointer",
  role: "button"
}, Ju = {
  key: 0,
  class: "po-w-12"
}, ep = ["onClick"], tp = ["colspan"], op = { key: 1 }, np = ["colspan"], lp = { class: "po-py-10 po-block po-normal-case" }, sp = { class: "po-pr-5" }, ap = { class: "po-py-1" }, rp = { key: 0 }, ip = {
  name: "PoTable",
  components: { ArrowRightCircleIcon: ul }
}, l2 = /* @__PURE__ */ Object.assign(ip, {
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
    const o = e, { isLoading: n, tbody: l, thead: s } = Ve(o), r = _(!1), i = _(null), p = _(null), f = _(null);
    X(n, () => {
      d();
    }), X(l, () => {
      d(), h();
    }), Y(() => {
      d(), h(), i.value = s.value;
    });
    function d() {
      r.value = n.value, p.value = l.value, n.value && (p.value = [{}, {}, {}, {}, {}]);
    }
    function h() {
      if (o.hasDetailsRow)
        for (let g = 0; g < o.tbody.length; g++)
          o.tbody[g].showDetails = !1;
    }
    function $() {
      return Math.floor(Math.random() * 41) + 40;
    }
    const m = (g, y) => {
      g.sortable && (g.sorted && f.value === "asc" ? f.value = "desc" : f.value = "asc", i.value.forEach((v) => {
        v.label === g.label ? (v.sorted = !0, v.sortDirection = f.value, v.index = y) : (v.sorted = !1, v.sortDirection = null);
      }), t("column-click", g));
    };
    return (g, y) => (u(), c("table", {
      class: P(["table-responsive po-w-full", [{ lg: e.breakAtLg }]])
    }, [
      a("thead", null, [
        a("tr", null, [
          e.hasDetailsRow ? (u(), c("th", Zu)) : x("", !0),
          (u(!0), c(B, null, W(i.value, (v, w) => (u(), c("th", {
            onClick: (b) => m(v, w)
          }, [
            a("span", Yu, [
              a("span", Xu, [
                Z(g.$slots, "th", Ye(Xe(v)))
              ]),
              v.sortable ? (u(), c("span", Qu, [
                v.sorted ? x("", !0) : (u(), j(k(To), {
                  key: 0,
                  class: "po-w-3 po-h-3"
                })),
                v.sorted && v.sortDirection === "asc" ? (u(), j(k(Lo), {
                  key: 1,
                  class: "po-w-3 po-h-3"
                })) : x("", !0),
                v.sorted && v.sortDirection === "desc" ? (u(), j(k(Eo), {
                  key: 2,
                  class: "po-w-3 po-h-3"
                })) : x("", !0)
              ])) : x("", !0)
            ])
          ], 8, Ku))), 256))
        ])
      ]),
      a("tbody", null, [
        p.value !== null && !r.value || p.value !== null && p.value.length !== 0 && !r.value ? (u(!0), c(B, { key: 0 }, W(p.value, (v, w) => (u(), c(B, null, [
          a("tr", null, [
            e.hasDetailsRow ? (u(), c("td", Ju, [
              a("span", {
                onClick: (b) => v.showDetails = !v.showDetails
              }, [
                O(k(ul), {
                  class: P(["po-w-5 po-fill-mpao-lightblue po-origin-center po-transition-transform po-duration-100 po-ease-out po-cursor-pointer", [{ "po-rotate-90": v.showDetails }]])
                }, null, 8, ["class"])
              ], 8, ep)
            ])) : x("", !0),
            Z(g.$slots, "td", Ye(Xe({ ...v, index: w, item: v })))
          ]),
          e.hasDetailsRow ? (u(), c("tr", {
            key: 0,
            class: P(["po-table-details-row", [{ "po-hidden": !v.showDetails }]])
          }, [
            a("td", {
              colspan: k(s).length + 1
            }, [
              Z(g.$slots, "details", Ye(Xe({ item: v })))
            ], 8, tp)
          ], 2)) : x("", !0)
        ], 64))), 256)) : x("", !0),
        p.value == null && !r.value || p.value !== null && p.value.length == 0 && !r.value ? (u(), c("tr", op, [
          a("td", {
            colspan: k(s).length + 1,
            class: "po-text-center"
          }, [
            a("span", lp, V(e.emptyMessage), 1)
          ], 8, np)
        ])) : x("", !0),
        r.value ? (u(!0), c(B, { key: 2 }, W(p.value, (v) => (u(), c("tr", null, [
          (u(!0), c(B, null, W(k(s), (w) => (u(), c("td", sp, [
            a("div", ap, [
              a("div", {
                class: "po-h-2 loading-placeholder po-rounded-full",
                style: Tt({ width: $() + "%" })
              }, null, 4)
            ])
          ]))), 256))
        ]))), 256)) : x("", !0)
      ]),
      g.$slots.tfoot ? (u(), c("tfoot", rp, [
        a("tr", null, [
          Z(g.$slots, "tfoot")
        ])
      ])) : x("", !0)
    ], 2));
  }
}), up = ["onUpdate:modelValue", "id"], pp = ["for"], cp = { class: "table-responsive po-w-full" }, dp = ["onClick"], fp = { key: 0 }, vp = ["onClick"], hp = {
  name: "PoDynamicTable",
  components: { ArrowsUpDownIcon: To, ArrowUpIcon: Lo, ArrowDownIcon: Eo }
}, s2 = /* @__PURE__ */ Object.assign(hp, {
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
    const t = e, o = _(t.columns), n = _(null), l = _(null), s = (p) => {
      p.hidden = !p.hidden, o.value = t.columns.filter((f) => !f.hidden);
    }, r = (p) => {
      p.sortable && (p.sorted && l.value === "asc" ? l.value = "desc" : l.value = "asc", o.value.forEach((f) => {
        f.key === p.key ? (f.sorted = !0, f.sortDirection = l.value) : (f.sorted = !1, f.sortDirection = null);
      }), n.value = p);
    }, i = _([]);
    return re(() => {
      n.value ? i.value = [...t.data].sort((p, f) => {
        let d = p[n.value.key], h = f[n.value.key];
        return typeof d == "string" && typeof h == "string" && (d = d.toLowerCase(), h = h.toLowerCase()), d < h ? l.value === "asc" ? -1 : 1 : d > h ? l.value === "asc" ? 1 : -1 : 0;
      }) : i.value = [...t.data];
    }), (p, f) => (u(), c("div", null, [
      (u(!0), c(B, null, W(o.value, (d) => (u(), c("div", null, [
        ot(a("input", {
          type: "checkbox",
          name: "dynamic",
          "onUpdate:modelValue": (h) => d.hidden = h,
          id: `hide-table-col-${d.label}`
        }, null, 8, up), [
          [Zl, d.hidden]
        ]),
        a("label", {
          for: `hide-table-col-${d.label}`
        }, V(d.label), 9, pp)
      ]))), 256)),
      a("table", cp, [
        a("thead", null, [
          a("tr", null, [
            (u(!0), c(B, null, W(o.value, (d) => (u(), c("th", {
              key: d.key,
              onClick: (h) => r(d)
            }, [
              Q(V(d.label) + " " + V(d.sorted) + " " + V(d.sortDirection) + " ", 1),
              d.sortable ? (u(), c("span", fp, [
                d.sorted ? x("", !0) : (u(), j(k(To), {
                  key: 0,
                  class: "po-w-4"
                })),
                d.sorted && d.sortDirection === "asc" ? (u(), j(k(Lo), {
                  key: 1,
                  class: "po-w-4"
                })) : x("", !0),
                d.sorted && d.sortDirection === "desc" ? (u(), j(k(Eo), {
                  key: 2,
                  class: "po-w-4"
                })) : x("", !0)
              ])) : x("", !0),
              d.hidable ? (u(), c("button", {
                key: 1,
                onClick: (h) => s(d)
              }, V(d.hidden ? "Show" : "Hide"), 9, vp)) : x("", !0)
            ], 8, dp))), 128))
          ])
        ]),
        a("tbody", null, [
          (u(!0), c(B, null, W(i.value, (d) => (u(), c("tr", {
            key: d.id
          }, [
            (u(!0), c(B, null, W(o.value, (h) => (u(), c("td", {
              key: h.key
            }, V(d[h.key]), 1))), 128))
          ]))), 128))
        ])
      ])
    ]));
  }
}), mp = { class: "" }, gp = { class: "po-grow" }, bp = ["onClick"], yp = {
  name: "PoDescriptionList"
}, xp = /* @__PURE__ */ Object.assign(yp, {
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
    return (o, n) => (u(), c("div", null, [
      a("dl", {
        class: P([
          "po-description-list",
          { "po-divide-y po-divide-slate-200": !e.striped },
          { striped: e.striped },
          { "no-col": !e.columns }
        ])
      }, [
        Z(o.$slots, "content", {}, () => [
          (u(!0), c(B, null, W(e.items, (l) => (u(), c("div", null, [
            a("dt", null, V(l.title), 1),
            a("dd", mp, [
              a("span", gp, V(l.description), 1),
              l.action !== void 0 ? (u(), c("span", {
                key: 0,
                class: "po-shrink-0 po-text-mpao-lightblue hover:po-text-mpao-blue po-transition-colors po-duration-100 po-ease-in-out po-px-2 po-cursor-pointer",
                onClick: (s) => o.$emit("button-click", l.action)
              }, V(typeof l.action == "string" ? l.action : l.action.label), 9, bp)) : x("", !0)
            ])
          ]))), 256))
        ])
      ], 2)
    ]));
  }
}), wp = ["for"], $p = { class: "po-capitalize" }, Vp = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, kp = ["title"], _p = ["type", "name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], Cp = ["id"], Sp = ["id"], Op = {
  name: "PoInputField"
}, a2 = /* @__PURE__ */ Object.assign(Op, {
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
    function n() {
      return o.hasError ? "po-border-red-400 focus:po-border-red-600 focus:po-ring-red-600" : o.borderColor;
    }
    const { errorMessage: l } = Ve(o), s = _(l.value !== null);
    X(l, ($, m) => {
      s.value = l.value !== null && l.value !== "";
    }), X(l, ($, m) => {
      s.value = l.value !== null && l.value !== "";
    });
    let r = o.type === "currency" ? "text" : o.type;
    const i = _(null), p = ($) => {
      let m = $.target.value;
      i.value = m;
      let g = o.type === "currency" ? d(m) : m;
      t("update:modelValue", g);
    };
    X(o, ($, m) => {
      o.type === "currency" && i.value !== m.modelValue ? i.value = Qo(o.modelValue) : i.value = o.modelValue;
    });
    const f = ($) => {
      let m = null;
      o.type === "currency" ? m = Qo(d("" + $)) : m = $, i.value = m;
    }, d = ($) => {
      let m = $.replace(/,/g, "");
      const g = m.indexOf(".");
      return g !== -1 && m.substring(g + 1) === "00" && (m = m.substring(0, g)), m;
    };
    o.type === "currency" ? f(o.modelValue) : i.value = o.modelValue;
    const h = _("");
    return Y(() => {
      o.id === "" ? h.value = o.id ? o.id : `${o.label.replace(
        /\s/g,
        ""
      )}-${Date.now()}-inputfield-${Math.floor(Math.random() * 9e3)}` : h.value = o.id;
    }), ($, m) => (u(), c("div", {
      class: P(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      a("label", {
        for: h.value,
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700"
      }, [
        a("span", $p, V(e.label), 1),
        e.required ? (u(), c("span", Vp, "*")) : x("", !0),
        e.info !== null ? (u(), c("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          O(k(Do), { class: "po-fill-current" })
        ], 8, kp)) : x("", !0)
      ], 8, wp),
      a("input", Oe({
        type: k(r),
        name: `${h.value}-field`,
        id: h.value,
        value: i.value,
        placeholder: e.placeholder,
        disabled: e.disabled,
        required: e.required,
        "aria-describedby": `${h.value}-description`,
        "aria-required": e.required,
        "aria-disabled": e.disabled
      }, $.$attrs, {
        onInput: p,
        onBlur: m[0] || (m[0] = (g) => f(g.target.value)),
        class: [
          "po-mt-1 peer po-block po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white focus:po-ring-0 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default",
          n()
        ]
      }), null, 16, _p),
      e.message !== null ? (u(), c("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, V(e.message), 9, Cp)) : x("", !0),
      s.value && k(l) !== null ? (u(), c("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
        id: `${e.id}-error`
      }, [
        a("span", null, V(k(l)), 1)
      ], 8, Sp)) : x("", !0)
    ], 2));
  }
}), Pp = { class: "po-text-sm po-font-medium po-text-slate-700 peer-focus:po-text-mpao-lightblue peer-invalid:po-text-red-500 peer-invalid:peer-focus:po-text-red-600 po-flex po-items-center po-space-x-1 po-capitalize" }, Ep = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Lp = ["name", "id", "value"], Tp = ["for"], Dp = { class: "po-flex po-items-center po-space-x-1" }, Ap = {
  key: 0,
  class: "po-text-sm"
}, zp = {
  key: 1,
  class: "po-text-sm"
}, Bp = {
  key: 0,
  class: "po-mt-3 po-flex po-w-full po-h-1.5 po-bg-gray-100 po-rounded-full po-overflow-hidden"
}, jp = ["aria-valuenow"], Mp = ["id"], Np = ["id"], Ip = {
  name: "PoInputFile"
}, r2 = /* @__PURE__ */ Object.assign(Ip, {
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
    const t = e, o = E(() => `width: ${t.progress}%`), n = E(() => t.progress), l = _(""), s = (r) => {
      const i = r.target.files[0];
      i ? l.value = i.name : l.value = "";
    };
    return (r, i) => (u(), c("div", {
      class: P(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      a("span", Pp, [
        a("span", null, V(e.label), 1),
        e.required ? (u(), c("span", Ep, "*")) : x("", !0)
      ]),
      a("input", {
        name: `${e.id}-upload`,
        id: `${e.id}-fileupload`,
        value: e.modelValue,
        type: "file",
        onInput: i[0] || (i[0] = (p) => r.$emit("update:modelValue", p.target.value)),
        onChange: i[1] || (i[1] = (p) => s(p)),
        class: "po-sr-only po-peer"
      }, null, 40, Lp),
      a("label", {
        for: `${e.id}-fileupload`,
        class: "po-mt-1 po-block po-w-full po-border po-cursor-pointer po-rounded-md po-border-slate-300 po-bg-white peer-focus:po-border-mpao-lightblue invalid:po-border-red-400 invalid:focus:po-border-red-600 invalid:focus:po-ring-red-600 sm:po-text-sm po-p-2"
      }, [
        a("div", Dp, [
          O(k(Cn), { class: "po-w-4 po-stroke-slate-500" }),
          l.value ? (u(), c("span", Ap, V(l.value), 1)) : (u(), c("span", zp, "Choose file"))
        ])
      ], 8, Tp),
      k(n) !== null ? (u(), c("div", Bp, [
        a("div", {
          class: "po-flex po-flex-col po-justify-center po-overflow-hidden po-bg-mpao-lightblue",
          role: "progressbar",
          style: Tt(k(o)),
          "aria-valuenow": k(n),
          "aria-valuemin": "0",
          "aria-valuemax": "100"
        }, null, 12, jp)
      ])) : x("", !0),
      e.message !== null ? (u(), c("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, V(e.message), 9, Mp)) : x("", !0),
      e.errorMessage !== null ? (u(), c("p", {
        key: 2,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, V(e.errorMessage), 9, Np)) : x("", !0)
    ], 2));
  }
}), Rp = { class: "po-text-sm po-font-medium po-text-slate-700 po-cursor-pointer po-select-none po-flex po-items-center po-space-x-1" }, Fp = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Hp = {
  name: "PoToggle"
}, i2 = /* @__PURE__ */ Object.assign(Hp, {
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
    const o = _(e.modelValue);
    return (n, l) => (u(), j(k($a), {
      as: "div",
      class: "po-flex po-items-center"
    }, {
      default: T(() => [
        O(k(Va), {
          modelValue: o.value,
          "onUpdate:modelValue": l[0] || (l[0] = (s) => o.value = s),
          onClick: l[1] || (l[1] = (s) => n.$emit("update:modelValue", !o.value)),
          class: P([
            o.value ? "po-bg-mpao-lightblue" : "po-bg-slate-200",
            "po-relative po-inline-flex po-h-6 po-w-11 po-flex-shrink-0 po-cursor-pointer po-rounded-full po-border-2 po-border-transparent po-transition-colors po-duration-200 po-ease-in-out focus:po-outline-none focus:po-ring-2 focus:po-ring-mpao-lightblue focus:po-ring-offset-2"
          ])
        }, {
          default: T(() => [
            a("span", {
              "aria-hidden": "true",
              class: P([
                o.value ? "po-translate-x-5" : "po-translate-x-0",
                "po-pointer-events-none po-inline-block po-h-5 po-w-5 po-transform po-rounded-full po-bg-white po-shadow po-ring-0 po-transition po-duration-200 po-ease-in-out"
              ])
            }, null, 2)
          ]),
          _: 1
        }, 8, ["modelValue", "class"]),
        O(k(ka), {
          as: "span",
          class: "po-ml-3"
        }, {
          default: T(() => [
            a("span", Rp, [
              a("span", null, V(e.label), 1),
              e.required ? (u(), c("span", Fp, "*")) : x("", !0)
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), qp = { class: "po-pt-1 po-space-y-1 po-border-r-2 po-border-slate-200 po-relative" }, Wp = ["onClick"], Up = {
  name: "PoSectionMenu"
}, u2 = /* @__PURE__ */ Object.assign(Up, {
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
    return (t, o) => (u(), c("ul", qp, [
      (u(!0), c(B, null, W(e.menuItems, (n) => (u(), c("li", null, [
        a("span", {
          onClick: (l) => t.$emit("link-click", n.link),
          role: "button",
          class: P([
            "po-relative po-cursor-pointer -po-right-[0.15rem] po-py-1 po-border-r-2 hover:po-border-mpao-lightblue po-transition-colors po-duration-200 po-ease-in-out po-flex po-items-center po-space-x-2",
            {
              "po-border-mpao-lightblue po-text-sm po-text-mpao-lightblue": n.link == e.currPageRoute
            },
            {
              "po-border-slate-200 po-text-sm po-text-slate-600": n.link !== e.currPageRoute
            }
          ])
        }, [
          (u(), j(de(n.icon), { class: "po-w-4 po-h-4 po-stroke-current" })),
          a("span", null, V(n.label), 1)
        ], 10, Wp)
      ]))), 256))
    ]));
  }
}), Gp = { class: "po-relative po-flex po-items-start" }, Zp = { class: "po-flex po-h-5 po-items-center" }, Kp = ["name", "id", "checked", "disabled", "aria-describedby"], Yp = { class: "po-ml-3 po-text-sm" }, Xp = ["for"], Qp = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Jp = ["id"], ec = { class: "po-sr-only" }, tc = ["id"], oc = {
  name: "PoCheckbox"
}, p2 = /* @__PURE__ */ Object.assign(oc, {
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
    return (t, o) => (u(), c("div", null, [
      a("div", Gp, [
        a("div", Zp, [
          a("input", Oe({
            name: `${e.id}-field`,
            id: e.id,
            checked: e.modelValue,
            disabled: e.disabled,
            "aria-describedby": `${e.id}-description`
          }, t.$attrs, {
            onInput: o[0] || (o[0] = (n) => t.$emit("update:modelValue", n.target.checked)),
            type: "checkbox",
            class: ["po-h-4 po-w-4 po-rounded po-border-slate-300 po-text-mpao-lightblue focus:po-ring-mpao-lightblue", [{ "po-bg-slate-200": e.disabled }]]
          }), null, 16, Kp)
        ]),
        a("div", Yp, [
          a("label", {
            for: e.id,
            class: "po-font-medium po-text-slate-600 po-cursor-pointer po-select-none po-flex po-items-center po-space-x-1"
          }, [
            a("span", null, V(e.label), 1),
            e.required ? (u(), c("span", Qp, "*")) : x("", !0)
          ], 8, Xp),
          e.message ? (u(), c("span", {
            key: 0,
            id: `${e.id}-description`,
            class: "po-text-slate-500 po-cursor-default"
          }, [
            a("span", ec, V(e.label), 1),
            Q(" " + V(e.message), 1)
          ], 8, Jp)) : x("", !0)
        ])
      ]),
      e.errorMessage !== null ? (u(), c("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, V(e.errorMessage), 9, tc)) : x("", !0)
    ]));
  }
}), nc = /* @__PURE__ */ a("div", { class: "po-pb-5 po-max-w-xl" }, [
  /* @__PURE__ */ a("span", { class: "po-text-sm po-text-slate-600" }, "We're always working to improve our app, and we're excited to share the latest changes with you. We hope you enjoy these new features and improvements")
], -1), lc = { class: "po-flex po-space-x-2" }, sc = ["onClick"], ac = { class: "po-text-sm po-font-semibold po-slate-800" }, rc = { class: "po-text-xs po-text-white po-px-1 po-py-0 po-rounded-md po-bg-mpao-lightblue" }, ic = { class: "po-bg-gradient-to-t po-from-mpao-orange/20 po-via-mpao-lightblue/20 po-to-purple-500/10 -po-mb-5 -po-mx-5 po-p-5 po-pb-10" }, uc = { key: 0 }, pc = { class: "po-space-y-2 po-mt-5" }, cc = { class: "po-border po-border-slate-200 po-rounded-lg po-p-3 po-bg-white" }, dc = { class: "po-flex po-items-center po-space-x-2" }, fc = { class: "po-text-mpao-lightblue po-grow po-text-lg" }, vc = { class: "po-font-semibold po-shrink-0 po-text-mpao-lightblue po-text-sm po-px-2 po-py-1 po-rounded-xl po-bg-mpao-lightblue/10" }, hc = ["innerHTML"], mc = {
  key: 0,
  class: "po-bg-white po-rounded-md po-px-4 po-py-3 po-block po-text-sm po-text-center po-text-mpao-lightblue hover:po-text-purple-600 po-cursor-pointer"
}, gc = {
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
    const t = _(!1), o = _(0);
    return (n, l) => (u(), c(B, null, [
      e.showBtn ? (u(), c("a", {
        key: 0,
        href: "#",
        onClick: l[0] || (l[0] = ae((s) => t.value = !0, ["prevent"])),
        class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
      }, "Change logs")) : x("", !0),
      O(gt, {
        show: t.value,
        onModalClosed: l[1] || (l[1] = (s) => t.value = !1),
        "modal-title": "Change Log",
        "modal-width": "sm:po-max-w-4xl",
        id: "change-log-modal"
      }, {
        content: T(() => [
          a("div", null, [
            nc,
            a("div", lc, [
              (u(!0), c(B, null, W(e.changelog, (s, r) => (u(), c("span", {
                class: P(["po-flex po-items-center po-space-x-1 po-px-4 po-py-3 po-rounded-t-xl po-cursor-pointer", [{ "po-bg-purple-500/10": o.value === r }]]),
                onClick: (i) => o.value = r
              }, [
                a("span", ac, V(s.label) + " Version", 1),
                a("span", rc, V(s.latest_version), 1)
              ], 10, sc))), 256))
            ]),
            a("div", ic, [
              (u(!0), c(B, null, W(e.changelog, (s, r) => (u(), c("div", null, [
                o.value === r ? (u(), c("div", uc, [
                  a("div", pc, [
                    (u(!0), c(B, null, W(s.version_history, (i) => (u(), c("div", cc, [
                      a("span", dc, [
                        a("span", fc, V(i.date), 1),
                        a("span", vc, V(i.version), 1)
                      ]),
                      a("div", {
                        class: "po-mt-3 po-prose-sm po-prose-slate",
                        innerHTML: i.note
                      }, null, 8, hc)
                    ]))), 256)),
                    s.hasMore ? (u(), c("span", mc, "More")) : x("", !0)
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
}, qt = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, l] of t)
    o[n] = l;
  return o;
}, bc = {}, yc = {
  class: "po-h-8",
  src: "https://pension.gov.mv/asset/image/en-ccc-2020-issa.png",
  alt: "issa Certificate"
};
function xc(e, t) {
  return u(), c("img", yc);
}
const wc = /* @__PURE__ */ qt(bc, [["render", xc]]), $c = {}, Vc = {
  class: "po-h-8",
  src: "https://pension.gov.mv/asset/image/iso_logo.png",
  alt: "ISO 27001 Certificate"
};
function kc(e, t) {
  return u(), c("img", Vc);
}
const _c = /* @__PURE__ */ qt($c, [["render", kc]]), Cc = { class: "-po-m-5" }, Sc = ["src", "alt"], vn = {
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
    const t = _(!1);
    return (o, n) => (u(), c(B, null, [
      (u(), j(de(e.logo), {
        onClick: n[0] || (n[0] = ae((l) => t.value = !0, ["prevent"])),
        class: "po-cursor-pointer",
        role: "button"
      })),
      O(gt, {
        show: t.value,
        onModalClosed: n[1] || (n[1] = (l) => t.value = !1),
        "modal-title": e.title,
        "modal-width": "sm:po-max-w-4xl",
        id: "change-log-modal"
      }, {
        content: T(() => [
          a("div", Cc, [
            a("img", {
              src: e.src,
              alt: e.title
            }, null, 8, Sc)
          ])
        ]),
        _: 1
      }, 8, ["show", "modal-title"])
    ], 64));
  }
}, Oc = /* @__PURE__ */ a("div", { class: "po-prose-sm po-prose-slate po-p-5 po-opacity-8" }, [
  /* @__PURE__ */ a("h2", { class: "po-text-red-500" }, "Sample Terms and Conditions"),
  /* @__PURE__ */ a("h3", null, "1. Acceptance of Terms"),
  /* @__PURE__ */ a("p", null, " By accessing and using this web app, you agree to be bound by these terms and conditions. "),
  /* @__PURE__ */ a("h3", null, "2. User Responsibilities"),
  /* @__PURE__ */ a("p", null, " Users are responsible for maintaining the confidentiality of their account information and complying with all applicable laws. "),
  /* @__PURE__ */ a("h3", null, "3. Privacy Policy"),
  /* @__PURE__ */ a("p", null, [
    /* @__PURE__ */ Q(" Our privacy policy outlines how we collect, use, and protect your personal information. Please review our "),
    /* @__PURE__ */ a("a", { href: "privacy.html" }, "Privacy Policy"),
    /* @__PURE__ */ Q(" for more details. ")
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
    /* @__PURE__ */ Q(" If you have any questions or concerns about these terms and conditions, please contact us at "),
    /* @__PURE__ */ a("a", { href: "mailto:info@pension.gov.mv" }, "info@pension.gov.mv"),
    /* @__PURE__ */ Q(". ")
  ])
], -1), Pc = {
  __name: "ToCModel",
  setup(e) {
    const t = _(!1);
    return (o, n) => (u(), c(B, null, [
      a("a", {
        href: "#",
        onClick: n[0] || (n[0] = ae((l) => t.value = !0, ["prevent"])),
        role: "button",
        class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
      }, "Terms & Conditions"),
      O(gt, {
        show: t.value,
        onModalClosed: n[1] || (n[1] = (l) => t.value = !1),
        "modal-title": "Terms & Conditions",
        "modal-width": "sm:po-max-w-3xl",
        id: "change-log-modal"
      }, {
        content: T(() => [
          Oc
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}, Ec = /* @__PURE__ */ a("div", { class: "po-prose-sm po-prose-slate po-p-5 po-opacity-80" }, [
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
    /* @__PURE__ */ Q(" If you have any questions or concerns about our privacy policy, please contact us at "),
    /* @__PURE__ */ a("a", { href: "mailto:info@pension.gov.mv" }, "info@pension.gov.mv"),
    /* @__PURE__ */ Q(". ")
  ])
], -1), Lc = {
  __name: "PrivacyPolicyModel",
  setup(e) {
    const t = _(!1);
    return (o, n) => (u(), c(B, null, [
      a("a", {
        href: "#",
        onClick: n[0] || (n[0] = ae((l) => t.value = !0, ["prevent"])),
        role: "button",
        class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
      }, "Privacy Policy"),
      O(gt, {
        show: t.value,
        onModalClosed: n[1] || (n[1] = (l) => t.value = !1),
        "modal-title": "Privacy Policy",
        "modal-width": "sm:po-max-w-3xl",
        id: "change-log-modal"
      }, {
        content: T(() => [
          Ec
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}, Tc = { class: "po-grid po-gap-5 po-grid-cols-1 lg:po-grid-cols-2 po-px-6 lg:po-px-8 po-mt-10 po-pb-10" }, Dc = { class: "sm:po-flex po-items-start sm:po-space-x-5" }, Ac = /* @__PURE__ */ a("svg", {
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
], -1), zc = { class: "po-mt-5 sm:po-mt-0" }, Bc = /* @__PURE__ */ a("p", { class: "-po-mt-1 po-text-xs po-text-slate-500" }, " 8th Floor, Allied Building , Chaandhanee Magu, Malé, 20156, Maldives ", -1), jc = { class: "po-mt-1 po-text-xs po-text-slate-500" }, Mc = { class: "po-mt-1 po-text-xs po-text-slate-500 po-flex -po-mb-2 po-flex-wrap" }, Nc = {
  href: "https://www.pension.gov.mv",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, Ic = /* @__PURE__ */ a("span", null, "www.pension.gov.mv", -1), Rc = {
  href: "mailto:info@pension.gov.mv",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, Fc = /* @__PURE__ */ a("span", null, "info@pension.gov.mv", -1), Hc = {
  href: "tel:1441",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, qc = /* @__PURE__ */ a("span", null, "1441", -1), Wc = { class: "po-flex lg:po-items-end po-flex-col" }, Uc = { class: "-po-mt-1 po-text-xs po-text-slate-500 po-flex -po-mb-2 po-flex-wrap" }, Gc = { class: "po-flex po-space-x-2 po-mt-3 lg:po-justify-end" }, Zc = {
  name: "PoFooter"
}, c2 = /* @__PURE__ */ Object.assign(Zc, {
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
    return (o, n) => (u(), c("div", null, [
      a("section", Tc, [
        a("div", Dc, [
          Ac,
          a("div", zc, [
            Bc,
            a("p", jc, " © " + V(new Date().getFullYear()) + " Pension Office, All Rights Reserved. ", 1),
            a("p", Mc, [
              a("a", Nc, [
                O(k(Pi), { class: "po-w-3 po-h-3 po-fill-current" }),
                Ic
              ]),
              a("a", Rc, [
                O(k(Si), { class: "po-w-3 po-h-3 po-fill-current" }),
                Fc
              ]),
              a("a", Hc, [
                O(k(Ei), { class: "po-w-3 po-h-3 po-fill-current" }),
                qc
              ])
            ])
          ])
        ]),
        a("div", Wc, [
          a("nav", Uc, [
            O(gc, {
              "show-btn": e.changelog !== null,
              changelog: e.changelog
            }, null, 8, ["show-btn", "changelog"]),
            O(Pc),
            O(Lc)
          ]),
          a("div", Gc, [
            O(vn, {
              logo: _c,
              title: "ISO/IEC 27001:2013 Certificate",
              src: ""
            }),
            O(vn, {
              logo: wc,
              title: "issa Certificate",
              src: ""
            })
          ])
        ])
      ])
    ]));
  }
}), Kc = { class: "po-text-sm po-text-red-700" }, Yc = {
  key: 0,
  class: "po-text-sm po-text-red-800 po-list-disc po-ml-5 po-mt-2"
}, Xc = {
  key: 1,
  class: "po-flex po-items-start po-space-x-3 po-p-5 po-bg-green-50 po-rounded-md po-mt-5"
}, Qc = { class: "po-text-sm po-text-green-700" }, Jc = {
  name: "PoFormStatusMessage"
}, d2 = /* @__PURE__ */ Object.assign(Jc, {
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
    return (t, o) => e.isError ? (u(), c("div", {
      key: 0,
      class: P(["po-flex po-space-x-3 po-p-3 po-bg-red-50 po-rounded-md", [
        { "po-items-start": e.errorList !== null },
        { "po-items-center": e.errorList === null }
      ]])
    }, [
      O(k(to), { class: "po-shrink-0 po-w-6 po-stroke-red-600" }),
      a("div", null, [
        a("span", Kc, V(e.message), 1),
        e.errorList !== null ? (u(), c("ul", Yc, [
          (u(!0), c(B, null, W(e.errorList, (n) => (u(), c("li", null, V(n), 1))), 256))
        ])) : x("", !0)
      ])
    ], 2)) : (u(), c("div", Xc, [
      O(k(ss), { class: "po-w-6 po-stroke-green-600" }),
      a("div", null, [
        a("span", Qc, V(e.message), 1)
      ])
    ]));
  }
}), ed = {
  key: 0,
  class: "po-text-lg po-text-red-400 po-font-semibold"
}, td = {
  key: 0,
  class: "po-mt-1 po-flex -po-mb-3 po-flex-wrap"
}, od = { class: "po-flex po-flex-1" }, nd = { class: "po-flex po-flex-col" }, ld = ["id"], sd = ["id"], ad = {
  name: "PoRadioInput"
}, f2 = /* @__PURE__ */ Object.assign(ad, {
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
    const o = e, n = _();
    n.value = o.modelValue, ho(() => {
      n.value = o.modelValue;
    }), X(n, () => {
      t("update:modelValue", n.value), t("selected", n.value);
    });
    const { errorMessage: l } = Ve(o), s = _();
    return X(l, (r, i) => {
      s.value = l.value !== null && l.value !== "";
    }), (r, i) => (u(), j(k(ba), {
      modelValue: n.value,
      "onUpdate:modelValue": i[0] || (i[0] = (p) => n.value = p),
      class: P([{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }])
    }, {
      default: T(() => [
        O(k(an), { class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700" }, {
          default: T(() => [
            a("span", null, V(e.label), 1),
            e.required ? (u(), c("span", ed, "*")) : x("", !0)
          ]),
          _: 1
        }),
        e.options !== null ? (u(), c("div", td, [
          (u(!0), c(B, null, W(e.options, (p) => (u(), j(k(xa), {
            as: "template",
            key: p.id,
            value: p.id
          }, {
            default: T(({ checked: f, active: d }) => [
              a("div", {
                class: P([
                  "po-transition-colors po-duration-100 po-ease-out po-mr-3",
                  "",
                  "",
                  "po-mb-3 po-pt-[0.13rem] po-relative po-flex po-cursor-pointer focus:po-outline-none"
                ])
              }, [
                a("span", {
                  class: P(["po-w-5 po-h-5 po-rounded-full po-border po-mr-2 po-flex po-items-center po-justify-center", [
                    "",
                    f ? "po-border-mpao-lightblue" : "po-border-slate-400"
                  ]])
                }, [
                  a("span", {
                    class: P(["po-w-3 po-h-3 po-rounded-full", [
                      "",
                      f ? "po-bg-mpao-lightblue" : "po-bg-transparent"
                    ]])
                  }, null, 2)
                ], 2),
                a("span", od, [
                  a("span", nd, [
                    O(k(an), {
                      as: "span",
                      class: "po-block po-text-sm po-font-medium po-text-gray-900"
                    }, {
                      default: T(() => [
                        Q(V(p.title), 1)
                      ]),
                      _: 2
                    }, 1024),
                    p.description ? (u(), j(k(wa), {
                      key: 0,
                      as: "span",
                      class: "po-mt-1 po-flex po-items-center po-text-sm po-text-gray-500"
                    }, {
                      default: T(() => [
                        Q(V(p.description), 1)
                      ]),
                      _: 2
                    }, 1024)) : x("", !0)
                  ])
                ])
              ], 2)
            ]),
            _: 2
          }, 1032, ["value"]))), 128))
        ])) : x("", !0),
        a("div", null, [
          e.message !== null ? (u(), c("p", {
            key: 0,
            class: "po-mt-2 po-text-sm po-text-slate-500",
            id: `${r.id}-description`
          }, V(e.message), 9, ld)) : x("", !0),
          s.value && k(l) !== null ? (u(), c("p", {
            key: 1,
            class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
            id: `${r.id}-error`
          }, [
            O(k(pl), { class: "po-fill-current po-w-4 po-mt-[0.2rem] po-shrink-0" }),
            a("span", null, V(k(l)), 1)
          ], 8, sd)) : x("", !0)
        ])
      ]),
      _: 1
    }, 8, ["modelValue", "class"]));
  }
}), rd = { class: "po-bg-white po-relative po-group po-rounded-xl focus-within:po-ring-2 focus-within:po-ring-inset focus-within:po-ring-indigo-500" }, id = { class: "po-block po-p-4 po-transition-colors po-duration-75 po-ease-linear" }, ud = { class: "po-flex po-items-start po-space-x-2" }, pd = { class: "po-flex po-items-start po-space-x-1" }, cd = { class: "po-block po-text-2xl po-font-light po-text-slate-600" }, dd = {
  key: 0,
  class: "po-text-sm po-text-green-500 po-font-medium po-pt-1"
}, fd = { class: "po-text-sm po-tracking-wide po-text-slate-500" }, vd = {
  name: "PoStatsBlock"
}, v2 = /* @__PURE__ */ Object.assign(vd, {
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
    return (t, o) => (u(), c("div", {
      class: P(["po-grid po-gap-5", e.numberOfCols])
    }, [
      (u(!0), c(B, null, W(e.items, (n) => (u(), c("div", rd, [
        a("span", id, [
          a("div", ud, [
            a("div", null, [
              a("span", {
                class: P([
                  "po-inline-flex po-p-2 po-rounded-md",
                  n.bgColor,
                  n.iconColor
                ])
              }, [
                (u(), j(de(n.icon), { class: "po-w-4 po-h-4" }))
              ], 2)
            ]),
            a("div", null, [
              a("div", pd, [
                a("span", cd, V(n.value), 1),
                n.diff ? (u(), c("span", dd, V(n.diff), 1)) : x("", !0)
              ]),
              a("h4", fd, V(n.label), 1)
            ])
          ])
        ])
      ]))), 256))
    ], 2));
  }
}), hd = {
  key: 0,
  class: "po-flex po-space-x-3 po-items-start"
}, md = { class: "po-flex po-items-center po-space-x-2" }, gd = ["datetime"], bd = { class: "po-text-sm po-font-medium po-text-slate-600" }, yd = ["datetime"], xd = { class: "flex" }, wd = { class: "po-flex po-pt-3 po-flex-wrap po-max-w-sm" }, $d = ["onClick"], Vd = {
  key: 1,
  class: "po-w-full po-text-center"
}, kd = { class: "po-inline-block po-text-sm po-italic po-text-slate-500" }, _d = /* @__PURE__ */ a("span", { class: "po-text-lg po-text-slate-300 po-px-3 po-inline-block" }, "—", -1), Cd = ["datetime"], Sd = {
  name: "PoChatLogItem"
}, h2 = /* @__PURE__ */ Object.assign(Sd, {
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
    return (t, o) => (u(), c("li", {
      class: P([
        "po-flex po-px-5",
        { "po-justify-end po-items-end po-flex-col": e.item.type === "first" }
      ])
    }, [
      e.item.type !== "message" ? (u(), c("div", hd, [
        e.item.type !== "first" && e.item.avatar !== "" ? (u(), c("div", {
          key: 0,
          class: "po-shrink-0 po-w-8 po-h-8 po-rounded-full po-p-1 po-bg-contain po-bg-slate-100",
          style: Tt({ "background-image": `url(${e.item.avatar})` })
        }, null, 4)) : x("", !0),
        a("div", {
          class: P([
            { "po-pt-1": e.item.type !== "first" },
            {
              "po-flex po-justify-end po-items-end po-flex-col": e.item.type === "first"
            }
          ])
        }, [
          a("span", md, [
            e.item.type === "first" ? (u(), c("time", {
              key: 0,
              datetime: e.item.time,
              class: "po-text-xs po-text-slate-400"
            }, V(e.item.time_human), 9, gd)) : x("", !0),
            a("span", bd, V(e.item.name), 1),
            e.item.type === "second" ? (u(), c("time", {
              key: 1,
              datetime: e.item.time,
              class: "po-text-xs po-text-slate-400"
            }, V(e.item.time_human), 9, yd)) : x("", !0)
          ]),
          a("div", {
            class: P([
              "po-mt-2 po-space-y-1",
              {
                "po-flex po-justify-end po-items-end po-flex-col": e.item.type === "first"
              }
            ])
          }, [
            Z(t.$slots, "message", {}, () => [
              (u(!0), c(B, null, W(e.item.message, (n) => (u(), c("div", xd, [
                a("p", {
                  class: P([
                    "po-text-sm po-rounded-xl po-px-4 po-py-2",
                    {
                      "po-bg-slate-100 po-text-slate-600": e.item.type !== "first"
                    },
                    {
                      "po-bg-mpao-lightblue po-text-sky-50": e.item.type === "first"
                    }
                  ])
                }, V(n), 3)
              ]))), 256))
            ]),
            a("div", wd, [
              (u(!0), c(B, null, W(e.item.actions, (n) => (u(), c("button", {
                onClick: (l) => t.$emit("button-click", n.label),
                class: "po-appearance-none po-border po-border-mpao-lightblue po-bg-white hover:po-bg-mpao-lightblue po-px-3 po-py-1 po-mb-2 po-mr-2 po-rounded-lg po-text-slate-500 hover:po-text-sky-100 po-transition-colors po-duration-150 po-ease-in-out po-text-sm po-ring-0 po-outline-none"
              }, V(n.label), 9, $d))), 256))
            ])
          ], 2)
        ], 2)
      ])) : x("", !0),
      e.item.type === "message" ? (u(), c("div", Vd, [
        (u(!0), c(B, null, W(e.item.message, (n) => (u(), c("p", kd, [
          Q(V(n) + " ", 1),
          _d,
          a("time", {
            datetime: e.item.time,
            class: "po-text-xs po-text-slate-400 po-inline-block"
          }, V(e.item.time_human), 9, Cd)
        ]))), 256))
      ])) : x("", !0)
    ], 2));
  }
}), Od = {
  key: 0,
  class: "po-pointer-events-auto po-w-full po-max-w-sm po-overflow-hidden po-rounded-lg po-bg-mpao-lightblue po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5"
}, Pd = { class: "po-p-4" }, Ed = { class: "po-flex po-items-start" }, Ld = { class: "po-flex-shrink-0" }, Td = { class: "po-ml-3 po-w-0 po-flex-1 po-pt-0.5" }, Dd = { class: "po-text-sm po-font-medium po-text-sky-100" }, Ad = { class: "po-mt-1 po-text-sm po-text-sky-300" }, zd = { class: "po-mt-3 po-flex po-space-x-4" }, Bd = { class: "po-ml-4 po-flex po-flex-shrink-0" }, jd = /* @__PURE__ */ a("span", { class: "po-sr-only" }, "Close", -1), Md = {
  name: "PoNotification"
}, m2 = /* @__PURE__ */ Object.assign(Md, {
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
    const o = e, { show: n } = Ve(o), l = _(!1);
    X(n, () => {
      l.value = !1, setTimeout(() => {
        l.value = !0;
      }, 100);
    });
    const s = _(!1);
    return X(l, () => {
      s.value = !1, setTimeout(() => {
        s.value = !0;
      }, 200);
    }), (r, i) => l.value ? (u(), j(Lt, {
      key: 0,
      to: "#po-notifications-alert"
    }, [
      O(Be, {
        "enter-active-class": "po-transform po-ease-out po-duration-300 po-transition",
        "enter-from-class": "po-translate-y-2 po-opacity-0 sm:po-translate-y-0 sm:po-translate-x-2",
        "enter-to-class": "po-translate-y-0 po-opacity-100 sm:po-translate-x-0",
        "leave-active-class": "po-transition po-ease-in po-duration-100",
        "leave-from-class": "po-opacity-100",
        "leave-to-class": "po-opacity-0"
      }, {
        default: T(() => [
          s.value ? (u(), c("div", Od, [
            a("div", Pd, [
              a("div", Ed, [
                a("div", Ld, [
                  Z(r.$slots, "icon")
                ]),
                a("div", Td, [
                  a("p", Dd, V(e.label), 1),
                  a("p", Ad, V(e.text), 1),
                  a("div", zd, [
                    a("button", {
                      onClick: i[0] || (i[0] = (p) => r.$emit("button-click", e.buttonLabel)),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-100 hover:po-text-sky-200 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, V(e.buttonLabel), 1),
                    a("button", {
                      onClick: i[1] || (i[1] = (p) => l.value = !1),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-300 hover:po-text-sky-500 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, " Dismiss ")
                  ])
                ]),
                a("div", Bd, [
                  a("button", {
                    type: "button",
                    onClick: i[2] || (i[2] = (p) => l.value = !1),
                    class: "po-inline-flex po-rounded-md po-bg-mpao-lightblue po-text-sky-500 hover:po-text-sky-300 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                  }, [
                    jd,
                    O(k(cl), {
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
}), Nd = /* @__PURE__ */ a("div", { class: "po-fixed po-inset-0" }, null, -1), Id = { class: "po-absolute po-inset-0 po-overflow-hidden" }, Rd = { class: "po-pointer-events-none po-fixed po-inset-y-0 po-right-0 po-flex po-max-w-full po-pl-10" }, Fd = { class: "po-flex po-h-full po-flex-col po-overflow-y-auto po-bg-white po-shadow-xl" }, Hd = { class: "po-bg-slate-50 po-py-6 po-px-4 sm:po-px-6" }, qd = { class: "po-flex po-items-center po-justify-between" }, Wd = { class: "po-ml-3 po-flex po-h-7 po-items-center" }, Ud = /* @__PURE__ */ a("span", { class: "po-sr-only" }, "Close panel", -1), Gd = {
  key: 0,
  class: "po-mt-1"
}, Zd = { class: "po-text-sm po-text-slate-500" }, Kd = {
  key: 0,
  class: "po-bg-slate-50 po-rounded-b-xl po-shrink-0"
}, Yd = {
  name: "PoSlideover"
}, g2 = /* @__PURE__ */ Object.assign(Yd, {
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
    const o = e, { show: n } = Ve(o), l = _(!1);
    X(n, () => {
      l.value = n.value;
    });
    function s() {
      l.value = !1, t("slideover-closed", !0);
    }
    return (r, i) => (u(), j(k(mt), {
      as: "template",
      show: l.value
    }, {
      default: T(() => [
        O(k(Mt), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: s
        }, {
          default: T(() => [
            Nd,
            a("div", {
              class: P(["po-fixed po-inset-0 po-overflow-hidden po-bg-black", e.screenOpacity])
            }, [
              a("div", Id, [
                a("div", Rd, [
                  O(k(Me), {
                    as: "template",
                    enter: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "enter-from": "po-translate-x-full",
                    "enter-to": "po-translate-x-0",
                    leave: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "leave-from": "po-translate-x-0",
                    "leave-to": "po-translate-x-full"
                  }, {
                    default: T(() => [
                      O(k(Nt), {
                        class: P([e.maxWidth, "po-pointer-events-auto po-w-screen"])
                      }, {
                        default: T(() => [
                          a("div", Fd, [
                            a("div", Hd, [
                              a("div", qd, [
                                O(k(Zn), { class: "po-text-lg po-font-medium po-text-slate-600" }, {
                                  default: T(() => [
                                    Q(V(e.label), 1)
                                  ]),
                                  _: 1
                                }),
                                a("div", Wd, [
                                  a("button", {
                                    type: "button",
                                    class: "po-rounded-md po-text-slate-500 hover:po-text-mpao-lightblue focus:po-outline-none focus:po-ring-2 focus:po-ring-white",
                                    onClick: s
                                  }, [
                                    Ud,
                                    O(k(ft), {
                                      class: "po-h-6 po-w-6",
                                      "aria-hidden": "true"
                                    })
                                  ])
                                ])
                              ]),
                              e.description ? (u(), c("div", Gd, [
                                a("p", Zd, V(e.description), 1)
                              ])) : x("", !0)
                            ]),
                            a("div", {
                              class: P([e.bgColor, "po-relative po-grow po-pt-6 po-px-4 sm:po-px-6"])
                            }, [
                              Z(r.$slots, "content")
                            ], 2),
                            r.$slots.footer ? (u(), c("div", Kd, [
                              Z(r.$slots, "footer")
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
}), Xd = /* @__PURE__ */ a("div", { class: "po-fixed po-inset-0 po-bg-gray-500 po-bg-opacity-25 po-transition-opacity" }, null, -1), Qd = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto po-p-4 sm:po-p-6 md:po-p-20" }, Jd = { class: "po-relative" }, e1 = {
  key: 0,
  class: "po-max-h-96 scroll-py-3 po-overflow-y-auto po-p-3"
}, t1 = {
  name: "PoCommandPalette"
}, b2 = /* @__PURE__ */ Object.assign(t1, {
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
    const t = e, o = _(""), { show: n } = Ve(t), l = _(!1);
    X(n, () => {
      l.value = !1, setTimeout(() => {
        l.value = !0;
      }, 100);
    });
    function s(r) {
      r.ctrlKey && r.key === "b" && (l.value = !0);
    }
    return Y(() => {
      window.addEventListener("keyup", s);
    }), Dt(() => {
      window.removeEventListener("keyup", s);
    }), (r, i) => (u(), j(k(mt), {
      show: l.value,
      as: "template",
      onAfterLeave: i[2] || (i[2] = (p) => o.value = ""),
      appear: ""
    }, {
      default: T(() => [
        O(k(Mt), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: i[1] || (i[1] = (p) => l.value = !1)
        }, {
          default: T(() => [
            O(k(Me), {
              as: "template",
              enter: "po-ease-out po-duration-300",
              "enter-from": "po-opacity-0",
              "enter-to": "po-opacity-100",
              leave: "po-ease-in po-duration-200",
              "leave-from": "po-opacity-100",
              "leave-to": "po-opacity-0"
            }, {
              default: T(() => [
                Xd
              ]),
              _: 1
            }),
            a("div", Qd, [
              O(k(Me), {
                as: "template",
                enter: "po-ease-out po-duration-300",
                "enter-from": "po-opacity-0 po-scale-95",
                "enter-to": "po-opacity-100 po-scale-100",
                leave: "po-ease-in po-duration-200",
                "leave-from": "po-opacity-100 po-scale-100",
                "leave-to": "po-opacity-0 po-scale-95"
              }, {
                default: T(() => [
                  O(k(Nt), { class: "po-mx-auto po-max-w-xl po-transform po-divide-y po-divide-gray-100 po-overflow-hidden po-rounded-xl po-bg-white po-shadow-2xl po-ring-1 po-ring-black po-ring-opacity-5 po-transition-all" }, {
                    default: T(() => [
                      a("div", Jd, [
                        O(k(Er), {
                          class: "po-pointer-events-none po-absolute po-top-3.5 po-left-4 po-h-5 po-w-5 po-text-gray-400",
                          "aria-hidden": "true"
                        }),
                        a("input", {
                          type: "text",
                          name: "",
                          class: "po-h-12 po-w-full po-border-0 po-bg-transparent po-pl-11 po-pr-4 po-text-gray-800 po-placeholder-gray-400 focus:po-ring-0 sm:po-text-sm",
                          placeholder: "Search...",
                          onChange: i[0] || (i[0] = (p) => o.value = p.target.value)
                        }, null, 32)
                      ]),
                      e.showContent ? (u(), c("div", e1, [
                        Z(r.$slots, "content")
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
}), o1 = /* @__PURE__ */ a("div", { class: "po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity" }, null, -1), n1 = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto" }, l1 = { class: "po-flex po-min-h-full po-items-start po-justify-center po-p-4 po-text-center sm:po-p-0" }, s1 = { class: "po-p-5" }, a1 = { class: "po-text-center po-space-y-3" }, r1 = { key: 1 }, i1 = { class: "po-text-sm po-text-gray-600" }, u1 = { class: "po-border-t po-border-slate-200 po-flex po-divide-x po-divide-slate-200" }, p1 = {
  name: "PoAlert"
}, y2 = /* @__PURE__ */ Object.assign(p1, {
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
    const o = e, { show: n } = Ve(o), l = _(!1);
    X(n, () => {
      l.value = n.value;
    });
    function s() {
      l.value = !1, t("alert-closed", !0);
    }
    return (r, i) => (u(), j(k(mt), {
      as: "template",
      show: l.value
    }, {
      default: T(() => [
        O(k(Mt), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: s
        }, {
          default: T(() => [
            O(k(Me), {
              as: "template",
              enter: "po-ease-out po-duration-300",
              "enter-from": "po-opacity-0",
              "enter-to": "po-opacity-100",
              leave: "po-ease-in po-duration-200",
              "leave-from": "po-opacity-100",
              "leave-to": "po-opacity-0"
            }, {
              default: T(() => [
                o1
              ]),
              _: 1
            }),
            a("div", n1, [
              a("div", l1, [
                O(k(Me), {
                  as: "template",
                  enter: "po-ease-out po-duration-300",
                  "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                  "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                  leave: "po-ease-in po-duration-200",
                  "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                  "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                }, {
                  default: T(() => [
                    O(k(Nt), { class: "po-relative po-transform po-overflow-hidden po-rounded-lg po-bg-white po-text-left po-shadow-xl po-transition-all sm:po-my-8 sm:po-w-full sm:po-max-w-sm" }, {
                      default: T(() => [
                        a("div", s1, [
                          a("div", a1, [
                            e.alertTitle !== "" ? (u(), j(k(Zn), {
                              key: 0,
                              as: "h3",
                              class: "po-text-lg po-font-medium po-leading-6 po-text-gray-900"
                            }, {
                              default: T(() => [
                                Q(V(e.alertTitle), 1)
                              ]),
                              _: 1
                            })) : x("", !0),
                            e.alertDescription !== "" ? (u(), c("div", r1, [
                              a("p", i1, V(e.alertDescription), 1)
                            ])) : x("", !0)
                          ])
                        ]),
                        a("div", u1, [
                          a("button", {
                            onClick: i[0] || (i[0] = (p) => {
                              r.$emit("cancel", !0), s();
                            }),
                            class: "po-text-sm po-bg-white po-text-slate-500 hover:po-bg-slate-50 po-transition-colors po-duration-100 po-ease-out po-font-medium po-py-3 po-px-5 po-w-1/2 focus:po-ring-0"
                          }, V(e.cancelBtnLabel), 1),
                          a("button", {
                            onClick: i[1] || (i[1] = (p) => {
                              r.$emit("confirm", !0), r.$emit("button-click", "ok"), s();
                            }),
                            class: "po-text-sm po-bg-white po-text-mpao-lightblue hover:po-bg-slate-50 po-transition-colors po-duration-100 po-ease-out po-font-medium po-py-3 po-px-5 po-w-1/2 focus:po-ring-0"
                          }, V(e.okBtnLabel), 1)
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
}), c1 = {
  key: 0,
  class: "po-col-span-2 po-relative po-mt-5"
}, d1 = /* @__PURE__ */ a("span", {
  class: "po-absolute po-top-0 po-left-1 po--ml-px po-h-[calc(100%-7px)] po-w-0.5 po-bg-gray-200",
  "aria-hidden": "true"
}, null, -1), f1 = { class: "po-relative po-space-y-5" }, v1 = { class: "po-flex po-space-x-2 po-items-start" }, h1 = { class: "log-item" }, m1 = { key: 0 }, g1 = {
  key: 0,
  class: "po-text-slate-500 po-text-xs"
}, b1 = {
  key: 1,
  class: "po-text-center po-py-10"
}, y1 = { class: "po-text-sm po-text-slate-500" }, x1 = {
  name: "PoLogs"
}, x2 = /* @__PURE__ */ Object.assign(x1, {
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
    return (t, o) => (u(), c("div", null, [
      e.items && e.items.length > 0 ? (u(), c("div", c1, [
        d1,
        a("div", f1, [
          (u(!0), c(B, null, W(e.items, (n, l) => (u(), c("div", v1, [
            a("p", {
              class: P([
                "po-rounded-full po-w-2 po-h-2 border-1 po-border-white po-shrink-0",
                { "po-bg-orange-400": l !== e.items.length - 1 },
                ,
                { "po-bg-slate-300": l == e.items.length - 1 }
              ])
            }, null, 2),
            a("div", h1, [
              a("span", null, [
                Q(V(n.label) + " on " + V(n.date) + " " + V(n.by && n.by !== "" ? "by" : "") + " ", 1),
                n.by && n.by !== "" ? (u(), c("span", m1, V(n.by), 1)) : x("", !0)
              ]),
              n.description && n.description !== "" ? (u(), c("blockquote", g1, ' "' + V(n.description) + '" ', 1)) : x("", !0)
            ])
          ]))), 256))
        ])
      ])) : (u(), c("div", b1, [
        a("span", y1, V(e.emptyLabel), 1)
      ]))
    ]));
  }
}), w1 = {
  key: 0,
  role: "list",
  class: "po-divide-y po-divide-gray-200 po-rounded-md po-border po-border-gray-200"
}, $1 = { class: "po-flex po-items-center po-justify-between po-py-3 po-pl-3 po-pr-4 po-text-sm" }, V1 = { class: "po-flex po-w-0 po-flex-1 po-items-center" }, k1 = { class: "po-ml-2 po-w-0 po-flex-1 po-truncate" }, _1 = { class: "po-ml-4 po-flex-shrink-0 po-space-x-4" }, C1 = ["onClick"], S1 = ["onClick"], O1 = {
  key: 1,
  class: "po-py-10"
}, P1 = { class: "po-text-sm po-text-slate-500" }, E1 = {
  name: "PoDownloadFileList"
}, w2 = /* @__PURE__ */ Object.assign(E1, {
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
    return (o, n) => (u(), c("div", null, [
      e.files && e.files.length > 0 ? (u(), c("ul", w1, [
        (u(!0), c(B, null, W(e.files, (l) => (u(), c("li", $1, [
          a("div", V1, [
            O(k(Cn), {
              class: "po-h-5 po-w-5 po-flex-shrink-0 po-text-gray-400",
              "aria-hidden": "true"
            }),
            a("span", k1, V(l.label), 1)
          ]),
          a("div", _1, [
            a("a", {
              href: "#",
              onClick: ae((s) => o.$emit("button-click", l), ["prevent"]),
              class: "po-font-medium po-text-mpao-lightblue hover:po-text-indigo-500"
            }, V(e.linkLabel), 9, C1),
            e.showViewBtn ? (u(), c("a", {
              key: 0,
              href: "#",
              onClick: ae((s) => o.$emit("view-click", l), ["prevent"]),
              class: "po-font-medium po-text-mpao-lightblue hover:po-text-indigo-500"
            }, V(e.viewBtnLabel), 9, S1)) : x("", !0)
          ])
        ]))), 256))
      ])) : (u(), c("div", O1, [
        a("span", P1, V(e.emptyLabel), 1)
      ]))
    ]));
  }
}), L1 = {
  name: "PoContentArea"
}, T1 = { class: "shell-content--area po-max-w-[1370px]" };
function D1(e, t, o, n, l, s) {
  return u(), c("section", T1, [
    Z(e.$slots, "default")
  ]);
}
const $2 = /* @__PURE__ */ qt(L1, [["render", D1]]), A1 = {
  name: "AnimatedLogo"
}, z1 = /* @__PURE__ */ Kl('<div><svg class="po-stroke-mpao-blue po-w-16 animated-logo" viewBox="0 0 62 55" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.76292 17.8572L7.7 17.9704V18.0682C6.87397 19.526 6.23618 20.649 5.58241 21.4779C4.93472 22.299 4.30505 22.7864 3.51417 23.0053C3.46261 23.0112 3.41718 23.0206 3.39088 23.026C3.35663 23.0331 3.31491 23.0425 3.27694 23.0511C3.25988 23.055 3.24357 23.0587 3.22903 23.0619C3.1106 23.0882 3.03712 23.1 3 23.1H2.93844L2.89561 23.1107L15.9876 0.600006H19.1308C17.2397 1.92747 16.1556 3.83665 15.5371 5.73245C14.8359 7.88203 14.7198 10.0514 14.7027 11.4258C13.1737 11.6033 11.0729 12.4434 9.38038 15.128C8.77075 16.0431 8.26353 16.9561 7.76713 17.8496L7.76292 17.8572Z"></path><path d="M48.1818 11.3241C48.047 8.39742 47.5389 6.05982 46.5472 4.07639C45.8153 2.61266 44.8203 1.39271 43.5945 0.5H46.8113L59.8583 23.0959C59.8303 23.0912 59.7891 23.0819 59.7213 23.0649C59.7166 23.0638 59.7117 23.0625 59.7066 23.0612C59.6302 23.042 59.5099 23.0118 59.3765 23.0027C58.59 22.7825 57.9627 22.2958 57.3176 21.4779C56.6586 20.6423 56.0158 19.508 55.1801 18.0331L55.1413 17.9647C54.8861 17.4553 54.6068 16.973 54.3362 16.5054L54.3327 16.4995C54.0565 16.0225 53.7893 15.5605 53.5472 15.0764L53.5333 15.0485L53.516 15.0226C51.7283 12.3411 49.7115 11.4988 48.1818 11.3241Z"></path><path d="M9.28397 39.6773C11.0717 42.3589 13.0885 43.2011 14.6182 43.3759C14.753 46.3026 15.2611 48.6402 16.2528 50.6236C16.9991 52.1163 17.9653 53.2992 19.1863 54.2H15.7881L2.74125 31.699C2.76073 31.6996 2.78031 31.7 2.8 31.7C2.89335 31.7 2.97474 31.7149 3.07903 31.7381C3.08854 31.7402 3.09897 31.7426 3.11023 31.7452C3.18647 31.7626 3.30082 31.7888 3.42319 31.7972C4.20888 32.0178 4.86081 32.5271 5.52047 33.3603C6.20216 34.2214 6.85697 35.382 7.66164 36.8405C8.26116 37.9396 8.76739 38.8512 9.276 39.665L9.27989 39.6712L9.28397 39.6773Z"></path><path d="M55.124 36.865L55.1331 36.8504L55.1412 36.8353C55.9431 35.3316 56.5997 34.1683 57.2697 33.307C57.9146 32.4778 58.5471 31.9616 59.2949 31.6961C59.4179 31.6866 59.5418 31.6616 59.6287 31.6442C59.6354 31.6428 59.6418 31.6415 59.6481 31.6403C59.719 31.6261 59.772 31.616 59.8123 31.6095L46.8115 54.1H43.8753C45.7283 52.7465 46.7867 50.8277 47.3889 48.9394C48.064 46.8226 48.1795 44.7058 48.1971 43.3742C49.7262 43.1967 51.8271 42.3567 53.5196 39.6719C53.8327 39.2016 54.1164 38.6849 54.3777 38.1995C54.4112 38.1375 54.4442 38.076 54.4768 38.0152C54.7049 37.5906 54.9148 37.1996 55.124 36.865Z"></path><path d="M32.2763 51.5708L32.2653 51.5582L32.2536 51.5465C32.0661 51.359 31.7413 51.2 31.4 51.2C31.3949 51.2 31.3894 51.2 31.3835 51.2C31.2956 51.1998 31.1323 51.1993 30.9751 51.2442C30.7932 51.2962 30.6132 51.4082 30.4904 51.6086C29.1941 53.0706 27.544 53.8 25.5 53.8C22.8209 53.8 20.828 52.9218 19.4532 51.2005C18.1148 49.5247 17.3123 46.988 17.1201 43.5109C18.6883 43.1579 19.8601 42.2673 20.5004 41.6896C20.5136 44.8271 20.8579 46.8152 21.6737 48.0181C22.5558 49.319 23.9045 49.6 25.5 49.6C27.4335 49.6 28.5187 48.2893 29.0946 46.9901C29.6604 45.7138 29.7966 44.3347 29.7999 43.8193C29.8943 42.5846 30.6602 41.8 31.5 41.8H31.5778C32.4558 41.8842 33.2 42.7102 33.2 43.9C33.2 45.6119 33.5619 47.0065 34.2986 47.9982C35.0485 49.0077 36.1459 49.544 37.4792 49.5996L37.4896 49.6H37.5C39.2304 49.6 40.5973 49.3258 41.4454 48.0081C41.849 47.3811 42.1078 46.5565 42.2692 45.5056C42.4311 44.4518 42.5 43.1353 42.5 41.5V24.4455L45.9 21.8182V41.5C45.9 41.4958 45.8996 41.5001 45.8978 41.519C45.8959 41.5381 45.8927 41.5719 45.887 41.6267L45.8842 41.6541C45.8752 41.7406 45.8636 41.8524 45.8521 41.9797C45.8264 42.2614 45.8 42.6283 45.8 43V43.9V43.9029V43.9059V43.9088V43.9117V43.9146V43.9175V43.9205V43.9234V43.9263V43.9292V43.9321V43.935V43.9379V43.9408V43.9437V43.9466V43.9495V43.9524V43.9553V43.9581V43.961V43.9639V43.9668V43.9696V43.9725V43.9754V43.9783V43.9811V43.984V43.9868V43.9897V43.9926V43.9954V43.9983V44.0011V44.004V44.0068V44.0096V44.0125V44.0153V44.0181V44.021V44.0238V44.0266V44.0295V44.0323V44.0351V44.0379V44.0407V44.0435V44.0463V44.0492V44.052V44.0548V44.0576V44.0603V44.0631V44.0659V44.0687V44.0715V44.0743V44.0771V44.0798V44.0826V44.0854V44.0882V44.0909V44.0937V44.0965V44.0992V44.102V44.1047V44.1075V44.1102V44.113V44.1157V44.1185V44.1212V44.1239V44.1267V44.1294V44.1321V44.1349V44.1376V44.1403V44.143V44.1457V44.1484V44.1512V44.1539V44.1566V44.1593V44.162V44.1647V44.1674V44.17V44.1727V44.1754V44.1781V44.1808V44.1835V44.1861V44.1888V44.1915V44.1941V44.1968V44.1995V44.2021V44.2048V44.2074V44.2101V44.2127V44.2154V44.218V44.2207V44.2233V44.2259V44.2285V44.2312V44.2338V44.2364V44.239V44.2417V44.2443V44.2469V44.2495V44.2521V44.2547V44.2573V44.2599V44.2625V44.2651V44.2677V44.2702V44.2728V44.2754V44.278V44.2806V44.2831V44.2857V44.2882V44.2908V44.2934V44.2959V44.2985V44.301V44.3036V44.3061V44.3087V44.3112V44.3137V44.3163V44.3188V44.3213V44.3238V44.3264V44.3289V44.3314V44.3339V44.3364V44.3389V44.3414V44.3439V44.3464V44.3489V44.3514V44.3539V44.3564V44.3588V44.3613V44.3638V44.3663V44.3687V44.3712V44.3737V44.3761V44.3786V44.381V44.3835V44.3859V44.3884V44.3908V44.3932V44.3957V44.3981V44.4005V44.403V44.4054V44.4078V44.4102V44.4126V44.415V44.4174V44.4199V44.4223V44.4247V44.427V44.4294V44.4318V44.4342V44.4366V44.439V44.4413V44.4437V44.4461V44.4484V44.4508V44.4532V44.4555V44.4579V44.4602V44.4626V44.4649V44.4672V44.4696V44.4719V44.4742V44.4766V44.4789V44.4812V44.4835V44.4858V44.4882V44.4905V44.4928V44.4951V44.4974V44.4997V44.5019V44.5042V44.5065V44.5088V44.5111V44.5133V44.5156V44.5179V44.5201V44.5224V44.5247V44.5269V44.5292V44.5314V44.5337V44.5359V44.5381V44.5404V44.5426V44.5448V44.547V44.5493V44.5515V44.5537V44.5559V44.5581V44.5603V44.5625V44.5647V44.5669V44.5691V44.5713V44.5734V44.5756V44.5778V44.58V44.5821V44.5843V44.5865V44.5886V44.5908V44.5929V44.5951V44.5972V44.5994V44.6015V44.6036V44.6058V44.6079V44.61V44.6121V44.6142V44.6164V44.6185V44.6206V44.6227V44.6248V44.6269V44.6289V44.631V44.6331V44.6352V44.6373V44.6393V44.6414V44.6435V44.6455V44.6476V44.6497V44.6517V44.6538V44.6558V44.6578V44.6599V44.6619V44.6639V44.666V44.668V44.67V44.672V44.674V44.676V44.678V44.68V44.682V44.684V44.686V44.688V44.69V44.692V44.6939V44.6959V44.6979V44.6998V44.7018V44.7037V44.7057V44.7076V44.7096V44.7115V44.7135V44.7154V44.7173V44.7193V44.7212V44.7231V44.725V44.7269V44.7288V44.7307V44.7326V44.7345V44.7364V44.7383V44.7402V44.7421V44.7439V44.7458V44.7477V44.7495V44.7514V44.7533V44.7551V44.757V44.7588V44.7606V44.7625V44.7643V44.7661V44.768V44.7698V44.7716V44.7734V44.7752V44.777V44.7788V44.7806V44.7824V44.7842V44.786V44.7878V44.7896V44.7914V44.7931V44.7949V44.7967V44.7984V44.8002V44.8019V44.8037V44.8054V44.8071V44.8089V44.8106V44.8123V44.8141V44.8158V44.8175V44.8192V44.8209V44.8226V44.8243V44.826V44.8277V44.8294V44.8311V44.8328V44.8344V44.8361V44.8378V44.8394V44.8411V44.8427V44.8444V44.846V44.8477V44.8493V44.851V44.8526V44.8542V44.8558V44.8575V44.8591V44.8607V44.8623V44.8639V44.8655V44.8671V44.8687V44.8702V44.8718V44.8734V44.875V44.8765V44.8781V44.8797V44.8812V44.8828V44.8843V44.8859V44.8874V44.8889V44.8905V44.892V44.8935V44.895V44.8965V44.898V44.8996V44.9011V44.9025V44.904V44.9055V44.907V44.9085V44.91V44.9114V44.9129V44.9144V44.9158V44.9173V44.9187V44.9202V44.9216V44.923V44.9245V44.9259V44.9273V44.9288V44.9302V44.9316V44.933V44.9344V44.9358V44.9372V44.9386V44.9399V44.9413V44.9427V44.9441V44.9454V44.9468V44.9482V44.9495V44.9509V44.9522V44.9535V44.9549V44.9562V44.9575V44.9589V44.9602V44.9615V44.9628V44.9641V44.9654V44.9667V44.968V44.9693V44.9706V44.9718V44.9731V44.9744V44.9757V44.9769V44.9782V44.9794V44.9807V44.9819V44.9832V44.9844V44.9856V44.9868V44.9881V44.9893V44.9905V44.9917V44.9929V44.9941V44.9953V44.9965V44.9977V44.9988V45V45.1V45.1006V45.1012V45.1017V45.1023V45.1029V45.1035V45.104V45.1046V45.1052V45.1057V45.1063V45.1069V45.1074V45.108V45.1085V45.1091V45.1096V45.1102V45.1107V45.1113V45.1118V45.1123V45.1129V45.1134V45.1139V45.1145V45.115V45.1155V45.1161V45.1166V45.1171V45.1176V45.1181V45.1186V45.1191V45.1196V45.1202V45.1207V45.1212V45.1217V45.1222V45.1226V45.1231V45.1236V45.1241V45.1246V45.1251V45.1256V45.1261V45.1265V45.127V45.1275V45.128V45.1284V45.1289V45.1294V45.1298V45.1303V45.1307V45.1312V45.1317V45.1321V45.1326V45.133V45.1335V45.1339V45.1343V45.1348V45.1352V45.1357V45.1361V45.1365V45.137V45.1374V45.1378V45.1383V45.1387V45.1391V45.1395V45.1399V45.1404V45.1408V45.1412V45.1416V45.142V45.1424V45.1428V45.1432V45.1436V45.144V45.1444V45.1448V45.1452V45.1456V45.146V45.1464V45.1468V45.1471V45.1475V45.1479V45.1483V45.1487V45.149V45.1494V45.1498V45.1501V45.1505V45.1509V45.1512V45.1516V45.152V45.1523V45.1527V45.153V45.1534V45.1537V45.1541V45.1544V45.1548V45.1551V45.1555V45.1558V45.1561V45.1565V45.1568V45.1572V45.1575V45.1578V45.1581V45.1585V45.1588V45.1591V45.1594V45.1598V45.1601V45.1604V45.1607V45.161V45.1613V45.1616V45.162V45.1623V45.1626V45.1629V45.1632V45.1635V45.1638V45.1641V45.1644V45.1647V45.165V45.1652V45.1655V45.1658V45.1661V45.1664V45.1667V45.167V45.1672V45.1675V45.1678V45.1681V45.1683V45.1686V45.1689V45.1691V45.1694V45.1697V45.1699V45.1702V45.1705V45.1707V45.171V45.1712V45.1715V45.1717V45.172V45.1722V45.1725V45.1727V45.173V45.1732V45.1735V45.1737V45.174V45.1742V45.1744V45.1747V45.1749V45.1751V45.1753C45.5039 48.1507 44.6544 50.2924 43.3031 51.6899C41.9582 53.0807 40.0524 53.8 37.5 53.8C35.4235 53.8 33.5685 53.0476 32.2763 51.5708Z"></path><path d="M22.8 23.2538V18.2178L29.3909 23.307L26.1939 25.8645L22.8 23.2538Z"></path><path d="M16.7 20.2V19.7H16.5V18.8V10.858C16.5042 10.8478 16.5096 10.8348 16.5142 10.8232C16.5488 10.7368 16.5963 10.6012 16.5998 10.4209C16.8474 7.03069 17.6799 4.61275 19.0737 3.04468C20.4543 1.49155 22.4511 0.699997 25.2 0.699997C27.2568 0.699997 29.1263 1.53906 30.5352 3.04197L30.5407 3.04785L30.5464 3.05355C30.7614 3.26854 31.0508 3.35 31.3 3.35C31.5492 3.35 31.8386 3.26854 32.0536 3.05355L32.0646 3.04251L32.0749 3.03081C33.4779 1.4408 35.1402 0.699997 37.3 0.699997C40.0769 0.699997 42.1441 1.62655 43.5571 3.42174C44.934 5.17104 45.7393 7.80743 45.886 11.3874C44.0184 11.8028 42.6345 12.9721 42.1 13.4936V13.2C42.1 10.0544 41.7835 8.06299 40.9925 6.86242C40.1497 5.58316 38.8495 5.3 37.3 5.3C35.4114 5.3 34.3769 6.59229 33.8399 7.85422C33.3055 9.11015 33.2 10.457 33.2 10.9C33.2 12.2634 32.2859 13.1 31.3 13.1H31.2204C30.2388 13.0141 29.4 12.0845 29.4 10.8C29.4 9.19015 29.0639 7.84653 28.3661 6.89234C27.6525 5.91665 26.5974 5.4 25.3 5.4C23.6267 5.4 22.3017 5.64608 21.4896 6.93319C21.1052 7.5425 20.863 8.34586 20.7131 9.3714C20.5626 10.4004 20.5 11.6909 20.5 13.3V30.4541L16.7 33.3833V20.2Z"></path><path d="M40.1 31.5462V36.5799L33.4225 31.4049L36.6974 28.9288L40.1 31.5462Z"></path><mask id="path-9-inside-1" fill="white"><path d="M58.7 30.1C58.9 30 59.5 30 59.8 29.9C60.9 29.8 61.8 28.7 61.8 27.4C61.8 26.1 60.9 25 59.8 24.9C59.7 24.9 59.5 24.9 59.4 24.8C59.3 24.8 59.2 24.8 59.1 24.7C59.1 24.7 59.1 24.7 59 24.7C58.6 24.6 58.1 24.4 57.7 24.1C57.7 24.1 57.7 24.1 57.6 24C56.1 23.1 55 21.2 53.6 18.7C53.1 17.8 52.6 16.9 52 16C50.5 13.7 48.9 13.1 47.8 13C47.7 13 47.6 13 47.5 13H47.3C47.1 13 46.9 13 46.9 13C45.2 13.2 44 14.3 43.6 14.8L25.2 29.1C25.2 29.1 25.2 29.1 25.1 29.2L23 30.8L16.8 35.5L16.4 35.9C16.4 35.9 16.4 35.9 16.3 35.9C16 36.1 15.7 36.3 15.4 36.3C15.1 36.3 14.9 36.2 14.7 36.1C14.5 35.9 14.4 35.8 14.3 35.5C13.9 34.8 13.4 34.1 13 33.3V33.1C12.2 31.7 11.3 30 10.1 28.6C10.1 28.6 10.1 28.6 10.1 28.5L10 28.4C9.9 28.3 9.9 28.3 9.8 28.2C9.8 28.2 9.8 28.2 9.7 28.1L9.2 27.5C9.2 27.5 9.2 27.5 9.1 27.5C9 27.3 9 27.1 9.1 27L9.6 26.5C10.9 25 11.9 23.2 12.8 21.6V21.5C13.2 20.7 13.7 19.9 14.2 19.1C14.4 18.8 14.6 18.6 14.7 18.5V13.1C13.6 13.2 12 13.9 10.6 16C10 16.9 9.5 17.8 9 18.7C7.8 20.9 6.8 22.5 5.6 23.5C4.8 24.1 4 24.4 3.5 24.6C3.5 24.6 3.5 24.6 3.4 24.6C3.3 24.6 3.1 24.7 3 24.7C2.9 24.7 2.9 24.7 2.8 24.7C2.7 24.7 2.7 24.7 2.7 24.7H2.6H2.5C2.3 24.7 2.2 24.8 2.1 24.8C2 24.8 2 24.8 2 24.9C1.7 25.1 1.4 25.3 1.2 25.6C1.2 25.7 1.1 25.7 1.1 25.8V25.9L0.999997 26.1C0.999997 26.2 0.999997 26.2 0.899997 26.3C0.899997 26.4 0.899997 26.4 0.799997 26.5C0.799997 26.6 0.799997 26.7 0.699997 26.7C0.699997 26.8 0.699997 26.9 0.699997 26.9C0.699997 27 0.699997 27.1 0.699997 27.1C0.699997 27.2 0.699997 27.2 0.699997 27.3C0.699997 27.4 0.699997 27.5 0.699997 27.5C0.699997 27.6 0.699997 27.7 0.699997 27.7C0.699997 27.8 0.699997 27.9 0.799997 27.9V28V28.1C0.799997 28.2 0.799997 28.2 0.899997 28.2L0.999997 28.4C0.999997 28.5 1.1 28.5 1.1 28.5C1.1 28.5 1.1 28.5 1.1 28.6C1.2 28.7 1.3 28.9 1.5 29C1.6 29 1.6 29.1 1.7 29.1C1.7 29.1 1.8 29.1 1.8 29.2C1.8 29.2 1.8 29.2 1.9 29.2C2 29.3 2.2 29.3 2.3 29.4C2.4 29.4 2.4 29.4 2.4 29.4L2.9 29.5C3.1 29.5 3.2 29.6 3.4 29.6C4.2 29.8 4.7 30.2 4.8 30.2C6.4 31.2 7.5 33 8.9 35.5C9.5 36.6 10 37.4 10.5 38.2C11.9 40.3 13.4 41 14.4 41.1C14.5 41.1 14.5 41.1 14.6 41.1C14.7 41.1 14.8 41.1 14.8 41.1C15 41.1 15.2 41.1 15.5 41.1H15.6C17.2 40.8 18.5 39.8 18.9 39.3L19 39.2L19.8 38.6C19.8 38.6 19.9 38.5 20 38.5L30.2 30.6L41.3 22L46.5 18H46.6C46.7 18 46.9 17.9 47 17.9C47.4 17.9 47.8 18.1 48.1 18.6L48.5 19.2C48.8 19.7 49.2 20.3 49.5 20.9V21C50.1 22.1 50.8 23.4 51.7 24.6C51.7 24.6 51.7 24.7 51.8 24.7C52.1 25.1 52.4 25.5 52.7 25.8C52.7 25.8 52.8 25.8 52.8 25.9C53 26.1 53.1 26.3 53.3 26.4C53.4 26.5 53.4 26.7 53.3 26.9C52 28.5 50.4 31.1 49.6 32.4V32.5C49.2 33.2 48.7 34.1 48.2 34.9C48 35.2 47.8 35.4 47.7 35.5V40.9C48.8 40.8 50.4 40.1 51.8 37.9C52.4 37 52.9 36 53.4 35.2C53.5 35 53.7 34.7 53.8 34.5C55.2 33 56.4 30.9 58.7 30.1Z"></path></mask><path d="M58.7 30.1C58.9 30 59.5 30 59.8 29.9C60.9 29.8 61.8 28.7 61.8 27.4C61.8 26.1 60.9 25 59.8 24.9C59.7 24.9 59.5 24.9 59.4 24.8C59.3 24.8 59.2 24.8 59.1 24.7C59.1 24.7 59.1 24.7 59 24.7C58.6 24.6 58.1 24.4 57.7 24.1C57.7 24.1 57.7 24.1 57.6 24C56.1 23.1 55 21.2 53.6 18.7C53.1 17.8 52.6 16.9 52 16C50.5 13.7 48.9 13.1 47.8 13C47.7 13 47.6 13 47.5 13H47.3C47.1 13 46.9 13 46.9 13C45.2 13.2 44 14.3 43.6 14.8L25.2 29.1C25.2 29.1 25.2 29.1 25.1 29.2L23 30.8L16.8 35.5L16.4 35.9C16.4 35.9 16.4 35.9 16.3 35.9C16 36.1 15.7 36.3 15.4 36.3C15.1 36.3 14.9 36.2 14.7 36.1C14.5 35.9 14.4 35.8 14.3 35.5C13.9 34.8 13.4 34.1 13 33.3V33.1C12.2 31.7 11.3 30 10.1 28.6C10.1 28.6 10.1 28.6 10.1 28.5L10 28.4C9.9 28.3 9.9 28.3 9.8 28.2C9.8 28.2 9.8 28.2 9.7 28.1L9.2 27.5C9.2 27.5 9.2 27.5 9.1 27.5C9 27.3 9 27.1 9.1 27L9.6 26.5C10.9 25 11.9 23.2 12.8 21.6V21.5C13.2 20.7 13.7 19.9 14.2 19.1C14.4 18.8 14.6 18.6 14.7 18.5V13.1C13.6 13.2 12 13.9 10.6 16C10 16.9 9.5 17.8 9 18.7C7.8 20.9 6.8 22.5 5.6 23.5C4.8 24.1 4 24.4 3.5 24.6C3.5 24.6 3.5 24.6 3.4 24.6C3.3 24.6 3.1 24.7 3 24.7C2.9 24.7 2.9 24.7 2.8 24.7C2.7 24.7 2.7 24.7 2.7 24.7H2.6H2.5C2.3 24.7 2.2 24.8 2.1 24.8C2 24.8 2 24.8 2 24.9C1.7 25.1 1.4 25.3 1.2 25.6C1.2 25.7 1.1 25.7 1.1 25.8V25.9L0.999997 26.1C0.999997 26.2 0.999997 26.2 0.899997 26.3C0.899997 26.4 0.899997 26.4 0.799997 26.5C0.799997 26.6 0.799997 26.7 0.699997 26.7C0.699997 26.8 0.699997 26.9 0.699997 26.9C0.699997 27 0.699997 27.1 0.699997 27.1C0.699997 27.2 0.699997 27.2 0.699997 27.3C0.699997 27.4 0.699997 27.5 0.699997 27.5C0.699997 27.6 0.699997 27.7 0.699997 27.7C0.699997 27.8 0.699997 27.9 0.799997 27.9V28V28.1C0.799997 28.2 0.799997 28.2 0.899997 28.2L0.999997 28.4C0.999997 28.5 1.1 28.5 1.1 28.5C1.1 28.5 1.1 28.5 1.1 28.6C1.2 28.7 1.3 28.9 1.5 29C1.6 29 1.6 29.1 1.7 29.1C1.7 29.1 1.8 29.1 1.8 29.2C1.8 29.2 1.8 29.2 1.9 29.2C2 29.3 2.2 29.3 2.3 29.4C2.4 29.4 2.4 29.4 2.4 29.4L2.9 29.5C3.1 29.5 3.2 29.6 3.4 29.6C4.2 29.8 4.7 30.2 4.8 30.2C6.4 31.2 7.5 33 8.9 35.5C9.5 36.6 10 37.4 10.5 38.2C11.9 40.3 13.4 41 14.4 41.1C14.5 41.1 14.5 41.1 14.6 41.1C14.7 41.1 14.8 41.1 14.8 41.1C15 41.1 15.2 41.1 15.5 41.1H15.6C17.2 40.8 18.5 39.8 18.9 39.3L19 39.2L19.8 38.6C19.8 38.6 19.9 38.5 20 38.5L30.2 30.6L41.3 22L46.5 18H46.6C46.7 18 46.9 17.9 47 17.9C47.4 17.9 47.8 18.1 48.1 18.6L48.5 19.2C48.8 19.7 49.2 20.3 49.5 20.9V21C50.1 22.1 50.8 23.4 51.7 24.6C51.7 24.6 51.7 24.7 51.8 24.7C52.1 25.1 52.4 25.5 52.7 25.8C52.7 25.8 52.8 25.8 52.8 25.9C53 26.1 53.1 26.3 53.3 26.4C53.4 26.5 53.4 26.7 53.3 26.9C52 28.5 50.4 31.1 49.6 32.4V32.5C49.2 33.2 48.7 34.1 48.2 34.9C48 35.2 47.8 35.4 47.7 35.5V40.9C48.8 40.8 50.4 40.1 51.8 37.9C52.4 37 52.9 36 53.4 35.2C53.5 35 53.7 34.7 53.8 34.5C55.2 33 56.4 30.9 58.7 30.1Z"></path></svg></div>', 1), B1 = [
  z1
];
function j1(e, t, o, n, l, s) {
  return u(), c("div", null, B1);
}
const M1 = /* @__PURE__ */ qt(A1, [["render", j1]]), N1 = {
  key: 0,
  class: "po-fixed po-z-[999] po-top-0 po-bottom-0 po-left-0 po-right-0 po-flex po-items-center po-justify-center"
}, I1 = /* @__PURE__ */ a("div", { class: "po-absolute po-w-[6.2rem] po-h-[6.2rem] po-bg-transparent po-overflow-hidden po-rounded-xl" }, [
  /* @__PURE__ */ a("div", { class: "po-loading-rotate po-absolute -po-top-8 -po-left-8 po-w-[10rem] po-h-[10rem]" })
], -1), R1 = { class: "relative po-bg-white po-w-24 po-h-24 po-flex po-items-center po-justify-center po-rounded-xl po-bg-opacity-50 po-backdrop-blur po-backdrop-filter po-z-10 po-shadow-xl" }, F1 = {
  key: 0,
  class: "po-absolute po-left-1 po-right-1 po-text-center po-py-1 po-text-xs po-text-mpao-blue po-bg-white po-bg-opacity-50 po-backdrop-blur po-backdrop-filter"
}, H1 = {
  name: "PoLoading"
}, V2 = /* @__PURE__ */ Object.assign(H1, {
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
    return (t, o) => e.show ? (u(), c("div", N1, [
      I1,
      a("div", R1, [
        e.label !== "" ? (u(), c("span", F1, V(e.label), 1)) : x("", !0),
        O(M1)
      ])
    ])) : x("", !0);
  }
}), q1 = { class: "po-py-5 po-flex po-items-start po-space-x-5" }, W1 = ["name", "id", "checked", "aria-describedby"], U1 = { class: "po-grow -po-mt-[0.26rem]" }, G1 = ["for"], Z1 = { class: "po-mt-2 po-flex po-space-x-3" }, K1 = ["href", "onClick"], Y1 = {
  name: "PoConsent"
}, k2 = /* @__PURE__ */ Object.assign(Y1, {
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
    return (t, o) => (u(), c("div", q1, [
      a("input", Oe({
        type: "checkbox",
        name: `${e.id}-field`,
        id: e.id,
        checked: e.modelValue,
        "aria-describedby": `${e.id}-description`
      }, t.$attrs, {
        onInput: o[0] || (o[0] = (n) => t.$emit("update:modelValue", n.target.checked)),
        class: "po-shrink-0 po-h-4 po-w-4 po-rounded border-slate-300 po-text-mpao-lightblue focus:po-ring-mpao-lightblue"
      }), null, 16, W1),
      a("div", U1, [
        a("label", {
          class: "po-block po-select-none po-text-sm po-text-slate-600 po-cursor-pointer",
          for: e.id
        }, V(e.label), 9, G1),
        a("div", Z1, [
          (u(!0), c(B, null, W(e.links, (n) => (u(), c("a", {
            href: n.url,
            onClick: ae((l) => t.$emit("button-click", n.url), ["prevent"]),
            class: "po-text-sm po-text-mpao-lightblue hover:po-text-mpao-blue"
          }, V(n.label), 9, K1))), 256))
        ])
      ])
    ]));
  }
}), X1 = {
  class: "po-flex po-bg-slate-50 po-rounded-t-xl po-justify-center lg:po-justify-start po-px-4 po-pt-4 xl:po-pt-2 po-flex-wrap po-overflow-hidden",
  "aria-label": "Tabs"
}, Q1 = ["onClick", "aria-current"], J1 = { key: 0 }, e0 = {
  name: "PoCardTabs"
}, _2 = /* @__PURE__ */ Object.assign(e0, {
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
    function o(n) {
      return n.iconColor ? n.iconColor : "po-fill-current";
    }
    return (n, l) => (u(), c("nav", X1, [
      (u(!0), c(B, null, W(e.tabs, (s) => (u(), c("span", {
        role: "button",
        onClick: (r) => n.$emit("button-click", s),
        key: s.name,
        class: P([
          s.current ? "po-bg-white po-text-slate-600 po-shadow-lg" : "po-text-slate-600 hover:po-text-mpao-blue",
          "po-px-4 po-py-3 po-font-medium po-mr-4 po-mb-4 xl:po-mb-0 po-text-sm po-cursor-pointer po-rounded-xl xl:po-rounded-b-none genie-effect hover:po-text-slate-600 hover:po-bg-white hover:po-shadow-md po-flex po-items-center po-flex-shrink-0 po-space-x-2"
        ]),
        "aria-current": s.current ? "page" : void 0
      }, [
        s.icon ? (u(), j(de(s.icon), {
          key: 0,
          class: P(["po-w-5 po-h-5", [o(s)]])
        }, null, 8, ["class"])) : x("", !0),
        a("span", null, [
          Q(V(s.name), 1),
          s.count ? (u(), c("span", J1, " (" + V(s.count) + ")", 1)) : x("", !0)
        ])
      ], 10, Q1))), 128))
    ]));
  }
}), t0 = { class: "sm:po-hidden" }, o0 = /* @__PURE__ */ a("label", {
  for: "tabs",
  class: "po-sr-only"
}, "Select a tab", -1), n0 = ["value", "selected"], l0 = { class: "po-hidden sm:po-block" }, s0 = {
  class: "po-flex po-space-x-4 po-pt-2",
  "aria-label": "Tabs"
}, a0 = ["onClick", "aria-current"], r0 = {
  name: "PoTabs"
}, C2 = /* @__PURE__ */ Object.assign(r0, {
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
    function n(r) {
      return r.iconColor ? r.iconColor : "po-fill-current";
    }
    const l = E(() => o.tabs.map((r) => r.name === o.currentTab ? { ...r, current: !0 } : { ...r, current: !1 }));
    function s(r) {
      const i = r.target.value, p = o.tabs[i];
      t("button-click", p);
    }
    return (r, i) => (u(), c(B, null, [
      a("div", t0, [
        o0,
        a("select", {
          id: "tabs",
          name: "tabs",
          class: "po-block po-w-full po-rounded-md po-border-gray-300 focus:po-border-indigo-500 focus:po-ring-indigo-500",
          onChange: s
        }, [
          (u(!0), c(B, null, W(e.tabs, (p, f) => (u(), c("option", {
            key: p.name,
            value: f,
            selected: p.current
          }, V(p.name), 9, n0))), 128))
        ], 32)
      ]),
      a("div", l0, [
        a("nav", s0, [
          (u(!0), c(B, null, W(k(l), (p) => (u(), c("span", {
            onClick: (f) => r.$emit("button-click", p),
            role: "button",
            key: p.name,
            class: P([
              p.current ? " po-text-slate-600 po-shadow-md po-border po-border-sky-200" : " po-text-slate-600 po-shadow-sm hover:po-text-mpao-blue",
              "po-bg-white po-px-4 po-relative po-group po-py-3 po-font-medium po-text-sm po-cursor-pointer po-rounded-xl genie-effect hover:po-text-slate-600 hover:po-bg-white hover:po-shadow-md po-flex po-items-center po-space-x-2"
            ]),
            "aria-current": p.current ? "page" : void 0
          }, [
            p.icon ? (u(), j(de(p.icon), {
              key: 0,
              class: P(["po-w-5 po-h-5", [n(p)]])
            }, null, 8, ["class"])) : x("", !0),
            a("span", null, [
              a("span", null, V(p.name), 1),
              p.count && p.count > 0 ? (u(), c("span", {
                key: 0,
                class: P(["po-absolute po-py-1 po-px-2 po-rounded-full po-text-xs -po-top-3 -po-right-2 po-shadow-md po-flex po-items-center po-justify-center", [
                  p.current ? "po-bg-mpao-orange po-text-white" : "po-bg-slate-400 po-text-white group-hover:po-bg-mpao-orange group-hover:po-text-white"
                ]])
              }, [
                a("span", null, V(p.count), 1)
              ], 2)) : x("", !0)
            ])
          ], 10, a0))), 128))
        ])
      ])
    ], 64));
  }
}), i0 = { class: "po-mt-5 po-flex po-flex-col po-items-center po-justify-center po-px-5 po-py-8" }, u0 = {
  key: 1,
  class: "po-text-base po-font-medium po-text-slate-600 po-text-center"
}, p0 = {
  key: 2,
  class: "po-text-sm po-text-slate-500 po-text-center po-max-w-lg po-block po-mx-auto"
}, c0 = {
  name: "PoEmpty"
}, S2 = /* @__PURE__ */ Object.assign(c0, {
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
    return (t, o) => (u(), c("div", i0, [
      a("div", {
        class: P(["po-space-y-2 po-flex po-items-center po-flex-col po-justify-center", [{ "po-mb-5": t.$slots.action }]])
      }, [
        e.icon ? (u(), j(de(e.icon), {
          key: 0,
          class: P(["po-w-10 po-h-10", e.iconColor])
        }, null, 8, ["class"])) : x("", !0),
        e.label !== "" ? (u(), c("span", u0, V(e.label), 1)) : x("", !0),
        e.description !== "" ? (u(), c("span", p0, V(e.description), 1)) : x("", !0)
      ], 2),
      Z(t.$slots, "action")
    ]));
  }
});
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const eo = () => !1;
function d0(e) {
  throw e;
}
function f0(e) {
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
const O2 = Symbol(process.env.NODE_ENV !== "production" ? "normalizeClass" : ""), P2 = Symbol(process.env.NODE_ENV !== "production" ? "normalizeStyle" : ""), E2 = Symbol(process.env.NODE_ENV !== "production" ? "normalizeProps" : ""), L2 = Symbol(process.env.NODE_ENV !== "production" ? "guardReactiveProps" : "");
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
const v0 = /&(gt|lt|amp|apos|quot);/g, h0 = {
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
const m0 = { class: "po-flex po-text-sm po-text-gray-700 po-flex-col po-space-y-5" }, g0 = {
  key: 0,
  class: "po-text-base po-font-medium po-text-slate-700"
}, b0 = {
  key: 1,
  class: "po-border po-border-orange-300 po-bg-orange-50 po-rounded-lg po-p-5 po-flex po-items-center po-space-x-3"
}, y0 = { class: "po-grow po-text-sm po-text-slate-600" }, x0 = {
  key: 2,
  class: "po-border po-border-red-300 po-bg-red-50 po-rounded-lg po-p-5 po-flex po-space-x-4"
}, w0 = { class: "po-grow" }, $0 = { class: "po-text-base po-text-slate-700 po-font-medium" }, V0 = { class: "po-text-sm po-text-slate-600" }, k0 = { class: "po-font-medium" }, _0 = { key: 0 }, C0 = { key: 0 }, S0 = /* @__PURE__ */ a("dt", null, "Name", -1), O0 = { key: 1 }, P0 = /* @__PURE__ */ a("dt", null, "Identifer", -1), E0 = { key: 2 }, L0 = /* @__PURE__ */ a("dt", null, "Date of birth", -1), T0 = { key: 3 }, D0 = /* @__PURE__ */ a("dt", null, "Reported Date of death", -1), A0 = {
  key: 3,
  class: "po-pt-5"
}, z0 = { class: "po-flex po-items-center po-space-x-1" }, B0 = /* @__PURE__ */ a("span", null, "File a dispute.", -1), j0 = {
  name: "PoDRStatus"
}, T2 = /* @__PURE__ */ Object.assign(j0, {
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
    return (n, l) => (u(), c("span", m0, [
      e.record !== null ? (u(), c("h2", g0, " Death was reported by " + V(e.record.institution), 1)) : x("", !0),
      e.request !== null && e.request.type_id === 1 ? (u(), c("div", b0, [
        O(k(to), { class: "po-shrink-0 po-w-6 po-stroke-orange-600" }),
        a("span", y0, " This is a " + V(e.request.type) + " request and is in " + V(e.request.state) + " state. ", 1)
      ])) : x("", !0),
      e.request !== null && e.request.type_id !== 1 ? (u(), c("div", x0, [
        O(k(to), { class: "po-shrink-0 po-w-6 po-h-6 po-stroke-red-600 po-stroke-2" }),
        a("div", w0, [
          a("h3", $0, V(e.request.type), 1),
          a("p", V0, [
            Q(" The following " + V(e.request.type) + " was reported: ", 1),
            a("span", k0, [
              Q(V(e.request.dispute_type), 1),
              e.request.date_of_death ? (u(), c("span", _0, " (New date: " + V(e.request.date_of_death) + ")", 1)) : x("", !0)
            ])
          ])
        ])
      ])) : x("", !0),
      O(xp, null, {
        content: T(() => [
          e.member !== null ? (u(), c("div", C0, [
            S0,
            a("dd", null, V(e.member.name), 1)
          ])) : x("", !0),
          e.member !== null ? (u(), c("div", O0, [
            P0,
            a("dd", null, V(e.member.identifier), 1)
          ])) : x("", !0),
          e.member !== null ? (u(), c("div", E0, [
            L0,
            a("dd", null, V(e.member.dob), 1)
          ])) : x("", !0),
          e.record !== null ? (u(), c("div", T0, [
            D0,
            a("dd", null, V(e.record.date_of_death), 1)
          ])) : x("", !0)
        ]),
        _: 1
      }),
      e.request === null ? (u(), c("span", A0, [
        O(Po, {
          type: "simple",
          onButtonClick: o
        }, {
          label: T(() => [
            a("span", z0, [
              O(k(os), { class: "po-w-4 po-h-4 po-stroke-current" }),
              B0
            ])
          ]),
          _: 1
        })
      ])) : x("", !0)
    ]));
  }
}), M0 = {
  key: 0,
  role: "button",
  class: "po-w-6 po-h-6 po-rounded-lg po-bg-white genie-effect po-flex po-items-center po-justify-center hover:po-bg-slate-50 po-cursor-pointer"
}, N0 = {
  name: "PoTableAction"
}, D2 = /* @__PURE__ */ Object.assign(N0, {
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
    const t = e, o = _(), n = _();
    return t.btnType === "view" ? o.value = us : t.btnType === "edit" ? o.value = cs : t.btnType === "delete" ? o.value = fs : t.btnType === "icon" && t.btnIcon && (o.value = t.btnIcon), t.btnType === "view" ? n.value = "po-stroke-emerald-400" : t.btnType === "edit" ? n.value = "po-stroke-blue-400" : t.btnType === "delete" ? n.value = "po-stroke-red-400" : n.value = t.iconColor, (l, s) => (u(), c("span", null, [
      e.btnType === "icon" || e.btnType === "delete" || e.btnType === "edit" || e.btnType === "view" ? (u(), c("span", M0, [
        (u(), j(de(o.value), {
          class: P(["po-w-4 po-stroke-2", n.value])
        }, null, 8, ["class"]))
      ])) : (u(), c("span", {
        key: 1,
        role: "button",
        class: P(["po-block po-text-sm genie-effect", e.textColor])
      }, V(e.label), 3))
    ]));
  }
}), I0 = { key: 0 }, R0 = {
  name: "Rufiyaa"
}, A2 = /* @__PURE__ */ Object.assign(R0, {
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
      const n = typeof o == "string" ? parseFloat(o.replace(/,/g, "")) : o;
      return isNaN(n) ? "" : n.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    }
    return (o, n) => (u(), c("span", null, [
      e.amount !== null ? (u(), c("span", I0, V(t(e.amount)), 1)) : x("", !0)
    ]));
  }
}), F0 = {
  name: "PoHeading"
}, z2 = /* @__PURE__ */ Object.assign(F0, {
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
    return (t, o) => (u(), j(de(e.type), { class: "po-text-base po-text-slate-600 po-font-semibold" }, {
      default: T(() => [
        Q(V(e.text), 1)
      ]),
      _: 1
    }));
  }
});
function H0(e, t) {
  if (!e)
    return;
  const o = (n) => {
    n.target !== e.value && n.composedPath().includes(e.value) || typeof t == "function" && t();
  };
  return Y(() => {
    window.addEventListener("click", o);
  }), Dt(() => {
    window.removeEventListener("click", o);
  }), { listener: o };
}
const q0 = ["for"], W0 = { class: "po-capitalize" }, U0 = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, G0 = ["title"], Z0 = { class: "po-relative po-mt-1" }, K0 = { class: "po-shrink-0 po-pr-1 po-inline-flex po-flex-wrap po-w-full po-gap-1 po-max-h-44" }, Y0 = { class: "po-px-2 po-py-1 po-rounded-md po-text-sm po-text-slate-600 po-flex po-space-x-2 po-items-center po-bg-gradient-to-l po-from-slate-50 po-via-cyan-50 po-to-cyan-100/60 po-border po-border-cyan-200" }, X0 = ["onClick"], Q0 = ["id"], J0 = {
  key: 0,
  class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
}, ef = ["onClick", "value"], tf = {
  class: /* @__PURE__ */ P(["po-block po-truncate"])
}, of = ["id"], nf = ["id"], lf = {
  name: "PoMultiSelect",
  components: { CheckIcon: as }
}, B2 = /* @__PURE__ */ Object.assign(lf, {
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
    function n() {
      return o.hasError ? "po-border-red-400 focus:po-border-red-600 focus:po-ring-red-600" : o.borderColor;
    }
    const l = _(""), s = _([]), r = _(!1);
    function i(y) {
      s.value.splice(y, 1), d();
    }
    function p(y) {
      let v = l.value.split(",");
      y.key === "Enter" && 0 < l.value.length && (y.preventDefault(), v.forEach((w) => {
        let b = o.items.find(
          (S) => S.name.toLowerCase() === w.trim().toLowerCase()
        );
        b && s.value.push(b);
      }), l.value = ""), y.key === "Backspace" && l.value.length === 0 && r.value && s.value.pop(), d();
    }
    const f = _([]);
    function d() {
      f.value = s.value.map((y) => y.id);
    }
    Y(() => {
      document.addEventListener("keydown", p);
    }), pe(() => {
      document.removeEventListener("keydown", p);
    });
    const h = _(!1), $ = E(
      () => l.value === "" ? o.items : o.items.filter((y) => y.name.toLowerCase().includes(l.value.toLowerCase()))
    );
    let m = _();
    H0(m, () => {
      h.value = !1;
    });
    function g(y) {
      s.value.push(y), l.value = "", d();
    }
    return X(f, () => {
      t("update:modelValue", f.value);
    }), (y, v) => (u(), c("div", {
      ref_key: "multiSelectComponentRef",
      ref: m,
      class: P(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      a("label", {
        for: e.id,
        class: P([
          "po-text-sm po-font-medium po-flex po-items-center po-space-x-1",
          { "po-text-red-500": e.hasError },
          { "po-text-slate-700": !e.hasError }
        ])
      }, [
        a("span", W0, V(e.label), 1),
        e.required ? (u(), c("span", U0, "*")) : x("", !0),
        e.info !== null ? (u(), c("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          O(k(yl), { class: "po-fill-current" })
        ], 8, G0)) : x("", !0)
      ], 10, q0),
      a("div", Z0, [
        a("div", {
          class: P([
            "po-border po-p-1 po-min-h-[2.38rem] po-flex po-flex-wrap po-items-center focus-within:po-border-mpao-lightblue po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white sm:po-text-sm",
            n()
          ])
        }, [
          a("div", K0, [
            s.value.length > 0 ? (u(!0), c(B, { key: 0 }, W(s.value, (w, b) => (u(), c("span", Y0, [
              a("span", null, V(w.name), 1),
              a("span", {
                onClick: () => i(b),
                role: "button",
                class: "po-cursor-pointer"
              }, [
                O(k(ft), { class: "po-w-3 po-stroke-red-600 po-stroke-2" })
              ], 8, X0)
            ]))), 256)) : x("", !0),
            ot(a("input", {
              id: e.id,
              "onUpdate:modelValue": v[0] || (v[0] = (w) => l.value = w),
              onFocus: v[1] || (v[1] = () => {
                h.value = !0, r.value = !0;
              }),
              onBlur: v[2] || (v[2] = () => r.value = !1),
              class: "po-border-0 po-outline-none po-ring-0 po-grow"
            }, null, 40, Q0), [
              [Et, l.value]
            ])
          ])
        ], 2),
        h.value ? (u(), c("ul", J0, [
          (u(!0), c(B, null, W(k($), (w) => (u(), c("li", {
            onClick: () => g(w),
            key: w.id,
            value: w.id,
            class: P([
              "po-relative po-select-none po-py-2 hover:po-bg-mpao-lightblue hover:po-text-white po-cursor-pointer po-pl-3 po-pr-9"
            ])
          }, [
            a("span", tf, V(w.name), 1)
          ], 8, ef))), 128))
        ])) : x("", !0)
      ]),
      e.message !== null ? (u(), c("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, V(e.message), 9, of)) : x("", !0),
      e.hasError && e.errorMessage !== null ? (u(), c("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-center po-space-x-1",
        id: `${e.id}-error`
      }, [
        O(k(Oi), { class: "po-fill-current po-w-4" }),
        a("span", null, V(e.errorMessage), 1)
      ], 8, nf)) : x("", !0)
    ], 2));
  }
}), sf = { class: "po-flex po-pl-5" }, af = /* @__PURE__ */ a("div", { class: "po-shrink-0 po-flex po-flex-col" }, [
  /* @__PURE__ */ a("div", { class: "po-w-[2px] po-shrink-0 po-h-10" }),
  /* @__PURE__ */ a("div", { class: "po-bg-gradient-to-t po-from-orange-400 po-via-red-300 po-to-blue-500 po-w-[2px] po-grow" }),
  /* @__PURE__ */ a("div", { class: "po-w-[2px] po-shrink-0 po-h-12" })
], -1), rf = { class: "po-grow po-pl-5 po-pt-5 po-space-y-3" }, uf = ["onClick"], pf = { class: "-po-mt-1 po-flex po-space-x-3 po-items-center" }, cf = { class: "po-block po-text-xs po-text-slate-400" }, df = { class: "po-text-xs po-text-slate-500 po-pt-1" }, ff = {
  name: "PoTimeline"
}, j2 = /* @__PURE__ */ Object.assign(ff, {
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
    return (o, n) => (u(), c("div", sf, [
      af,
      a("div", rf, [
        (u(!0), c(B, null, W(e.timeline, (l) => (u(), c("div", {
          class: P(["po-px-2 po-pt-2 po-pb-6 po-relative po-group", [{ "po-cursor-pointer": e.clickable }]]),
          onClick: (s) => o.$emit("button-click", l)
        }, [
          a("span", {
            class: P(["po-rounded-full po-absolute po-flex po-items-center po-justify-center", [
              { "po-w-4 po-h-4 -po-left-[1.8rem] po-bg-blue-400": l.current },
              {
                "po-w-3 po-h-3 -po-left-[1.68rem] po-bg-green-400": !l.current
              }
            ]])
          }, [
            a("span", {
              class: P(["po-rounded-full po-bg-white", [
                { "po-w-2 po-h-2": l.current },
                { "po-w-1 po-h-1": !l.current }
              ]])
            }, null, 2)
          ], 2),
          a("div", null, [
            a("div", pf, [
              a("h4", {
                class: P(["po-text-sm po-text-slate-600 po-font-medium", [{ "group-hover:po-text-mpao-lightblue": e.clickable }]])
              }, V(l.label), 3),
              a("span", cf, V(k(Yl)(l.date)), 1)
            ]),
            a("p", df, V(l.description), 1)
          ])
        ], 10, uf))), 256))
      ])
    ]));
  }
}), vf = {
  name: "PoTableCheckbox"
}, M2 = /* @__PURE__ */ Object.assign(vf, {
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
    return (o, n) => (u(), c(B, null, [
      e.isChecked ? (u(), j(k(pn), {
        key: 0,
        onClick: n[0] || (n[0] = ae(() => o.$emit("checkboxClicked", e.itemId), ["prevent"])),
        class: "po-w-6 po-fill-mpao-lightblue"
      })) : x("", !0),
      e.disabled ? (u(), j(k(pn), {
        key: 1,
        class: "po-w-6 po-fill-slate-400"
      })) : x("", !0),
      !e.isChecked && !e.disabled ? (u(), c("span", {
        key: 2,
        onClick: n[1] || (n[1] = ae(() => o.$emit("checkboxClicked", e.itemId), ["prevent"])),
        class: "po-h-5 po-w-5 po-rounded-full po-border-2 po-ml-[2px] po-block po-border-slate-300"
      })) : x("", !0)
    ], 64));
  }
}), hf = { class: "po-p-4" }, mf = { class: "po-flex po-items-start po-space-x-3" }, gf = /* @__PURE__ */ a("span", { class: "po-sr-only" }, "Action icon", -1), bf = { class: "po-w-0 po-flex-1 po-text-sm po-font-medium po-text-gray-400" }, yf = { class: "po-ml-4 po-flex po-flex-shrink-0" }, xf = /* @__PURE__ */ a("span", { class: "po-sr-only" }, "Close", -1), wf = {
  name: "PoToast"
}, N2 = /* @__PURE__ */ Object.assign(wf, {
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
    const o = e, { show: n } = Ve(o), l = _(!1);
    X(n, () => {
      l.value = n.value;
    });
    function s() {
      l.value = !1, t("toast-closed", !0);
    }
    setTimeout(() => {
      s();
    }, o.hideIn);
    const r = E(() => o.message === "" && o.actionType !== "" ? o.actionType === "success" ? "Saved Successfully!" : o.actionType === "danger" ? "Item deleted!" : o.actionType === "warn" ? "Attention needed!" : "Wrong action" : o.message);
    return (i, p) => (u(), j(Lt, { to: "#po-notifications-alert" }, [
      O(Be, {
        "enter-active-class": "po-transform po-ease-out po-duration-300 po-transition",
        "enter-from-class": "po-translate-y-2 po-opacity-0 sm:po-translate-y-0 sm:po-translate-x-2",
        "enter-to-class": "po-translate-y-0 po-opacity-100 sm:po-translate-x-0",
        "leave-active-class": "po-transition po-ease-in po-duration-100",
        "leave-from-class": "po-opacity-100",
        "leave-to-class": "po-opacity-0"
      }, {
        default: T(() => [
          l.value ? (u(), c("div", {
            key: 0,
            class: P(["po-pointer-events-auto po-w-full po-overflow-hidden po-rounded-lg po-bg-gray-900 po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5", [
              { "po-max-w-[260px]": e.size === "sm" },
              { "po-max-w-[360px]": e.size === "lg" },
              { "po-max-w-[560px]": e.size === "xl" }
            ]])
          }, [
            a("div", hf, [
              a("div", mf, [
                e.actionType !== "" ? (u(), c("div", {
                  key: 0,
                  class: P(["po-inline-flex po-items-center po-justify-center po-flex-shrink-0 po-w-6 po-h-6 po-rounded-lg", [
                    {
                      "po-bg-mpao-green po-text-green-100": e.actionType === "success"
                    },
                    { "po-bg-mpao-red po-text-red-100": e.actionType === "danger" },
                    {
                      "po-bg-mpao-orange po-text-orange-100": e.actionType === "warn"
                    }
                  ]])
                }, [
                  e.actionType === "success" ? (u(), j(k(Or), {
                    key: 0,
                    class: "po-w-4 po-h-4"
                  })) : x("", !0),
                  e.actionType === "danger" ? (u(), j(k(Lr), {
                    key: 1,
                    class: "po-w-4 po-h-4"
                  })) : x("", !0),
                  e.actionType === "warn" ? (u(), j(k(pl), {
                    key: 2,
                    class: "po-w-4 po-h-4"
                  })) : x("", !0),
                  gf
                ], 2)) : x("", !0),
                a("p", bf, V(k(r)), 1),
                a("div", yf, [
                  a("button", {
                    type: "button",
                    onClick: s,
                    class: "po-inline-flex po-rounded-md po-bg-gray-900 po-text-gray-400 hover:po-text-gray-300 hover:po-bg-gray-700 po-transition-colors po-duration-150 po-ease-out focus:po-outline-none focus:po-ring-2 focus:po-ring-indigo-500 focus:po-ring-offset-2"
                  }, [
                    xf,
                    O(k(cl), {
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
}), $f = ["for"], Vf = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, kf = ["title"], _f = { class: "po-relative po-mt-1" }, Cf = {
  key: 1,
  class: "po-absolute po-top-0 po-left-0 po-right-0 po-bottom-0 po-overflow-hidden po-bg-white po-rounded-md po-border po-border-slate-300 po-flex po-items-center"
}, Sf = { class: "po-grow" }, Of = ["id"], Pf = {
  key: 0,
  class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
}, Ef = ["onClick"], Lf = {
  key: 0,
  class: "po-text-sm po-text-slate-600 po-p-4 po-block"
}, Tf = {
  key: 1,
  class: "po-mt-2 po-text-sm po-text-slate-500",
  id: "-description"
}, Df = {
  key: 2,
  class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
  id: "-error"
}, Af = {
  name: "PoSelectApi",
  components: { XMarkIcon: ft }
}, I2 = /* @__PURE__ */ Object.assign(Af, {
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
    const o = e, n = _(null), l = _(!1), s = _([]);
    X(o, (g, y) => {
      s.value = o.options;
    }), E(() => {
      if (n.value) {
        const g = document.querySelector(".shell-content--area"), { top: y } = g.getBoundingClientRect(), v = g.scrollTop, { top: w, left: b, width: S } = n.value.getBoundingClientRect();
        return { relativeTop: w - y + v, left: b, width: S };
      }
    });
    const r = _(null);
    _(null);
    const i = (g) => {
      !r.value.contains(g.target) && !n.value.contains(g.target) && (l.value = !1);
    }, p = _("");
    Y(() => {
      o.id === "" ? p.value = o.label.replace(/\s/g, "") + "-" + Date.now() + "-selectapi-" + Math.floor(Math.random() * 9e3) : p.value = o.id, document.addEventListener("click", i);
    }), Dt(() => {
      document.removeEventListener("click", i);
    });
    const f = _();
    function d() {
      t("search", f.value);
    }
    const h = _(null);
    function $(g) {
      h.value = g, t("selected", g), l.value = !1;
    }
    function m() {
      t("loadmore", !0);
    }
    return (g, y) => (u(), c("div", {
      ref_key: "containerRef",
      ref: r,
      class: P(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      a("label", {
        for: p.value,
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700"
      }, [
        a("span", null, V(e.label), 1),
        e.required ? (u(), c("span", Vf, "*")) : x("", !0),
        e.info !== null ? (u(), c("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          O(k(Do), { class: "po-fill-current" })
        ], 8, kf)) : x("", !0)
      ], 8, $f),
      a("div", _f, [
        a("div", null, [
          e.loading ? (u(), j(Oo, {
            key: 0,
            class: "po-right-0 po-top-4",
            absolute: !0
          })) : x("", !0),
          h.value !== null && e.showSelected ? (u(), c("div", Cf, [
            a("div", Sf, [
              Z(g.$slots, "selectedOption", Ye(Xe(h.value)), () => [
                Q(V(h.value), 1)
              ])
            ]),
            a("span", {
              class: "po-shrink-0 po-p-1 po-cursor-pointer",
              onClick: y[0] || (y[0] = (v) => {
                h.value = null, f.value = "";
              })
            }, [
              O(k(ft), { class: "po-w-4 po-stroke-2 po-stroke-slate-400" })
            ])
          ])) : x("", !0),
          ot(a("input", {
            type: "text",
            name: "",
            id: p.value,
            ref_key: "selectBox",
            ref: n,
            "onUpdate:modelValue": y[1] || (y[1] = (v) => f.value = v),
            onInput: d,
            onFocus: y[2] || (y[2] = (v) => l.value = !0),
            class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm"
          }, null, 40, Of), [
            [Et, f.value]
          ])
        ]),
        l.value && s.value.length > 0 || l.value && e.emptyMessage ? (u(), c("div", Pf, [
          s.value && s.value.length > 0 ? (u(), c(B, { key: 0 }, [
            (u(!0), c(B, null, W(s.value, (v) => (u(), c("div", {
              onClick: (w) => $(v)
            }, [
              Z(g.$slots, "option", Ye(Xe(v)), () => [
                Q(V(v), 1)
              ])
            ], 8, Ef))), 256)),
            e.showMoreBtn ? (u(), c("span", {
              key: 0,
              role: "button",
              onClick: m,
              class: "po-text-sm po-text-semibold po-text-mpao-lightblue po-block po-text-center po-py-2 hover:po-bg-slate-50 po-transition-colors po-duration-150 po-ease-out"
            }, "More")) : x("", !0)
          ], 64)) : (u(), c(B, { key: 1 }, [
            e.emptyMessage ? (u(), c("span", Lf, V(e.emptyMessage), 1)) : x("", !0)
          ], 64))
        ])) : x("", !0),
        e.message !== null ? (u(), c("p", Tf, V(e.message), 1)) : x("", !0),
        e.errorMessage !== null ? (u(), c("p", Df, [
          a("span", null, V(e.errorMessage), 1)
        ])) : x("", !0)
      ])
    ], 2));
  }
}), zf = { class: "po-bg-blue-300/20 po-border po-border-blue-200 po-p-3 po-mb-5 po-rounded-md po-text-sm sm:po-space-x-2 po-flex po-items-center po-flex-wrap" }, Bf = { class: "po-text-blue-500" }, jf = {
  name: "PoMessage"
}, R2 = /* @__PURE__ */ Object.assign(jf, {
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
    return (o, n) => (u(), c("div", zf, [
      a("span", Bf, V(e.message), 1),
      e.btnName !== "" ? (u(), c("span", {
        key: 0,
        role: "button",
        onClick: n[0] || (n[0] = (l) => o.$emit("button-click", e.btnAction)),
        class: "po-text-blue-600 po-underline po-font-medium po-text-xs"
      }, V(e.btnName), 1)) : x("", !0)
    ]));
  }
}), Mf = {
  key: 0,
  class: "po-flex md:po-justify-end"
}, Nf = ["onClick"], If = { class: "po-text-xl po-font-medium po-text-slate-600 po-flex po-items-center po-space-x-1" }, Rf = {
  name: "PoPageStats"
}, F2 = /* @__PURE__ */ Object.assign(Rf, {
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
    function o(n) {
      return n.iconColor ? n.iconColor : "po-slate-600";
    }
    return (n, l) => e.stats !== null ? (u(), c("div", Mf, [
      a("div", {
        class: P(["po-bg-slate-50 po-shadow-sm po-rounded-xl po-divide-x po-divide-slate-200 po-flex", e.padding])
      }, [
        (u(!0), c(B, null, W(e.stats, (s) => (u(), c("div", {
          class: P(["po-px-4 po-group", { "po-cursor-pointer": e.clickable }]),
          onClick: (r) => n.$emit("stat-click", s)
        }, [
          a("span", If, [
            s.icon ? (u(), c("span", {
              key: 0,
              class: P(["po-w-5 po-h-5", o(s)])
            }, [
              (u(), j(de(s.icon)))
            ], 2)) : x("", !0),
            a("span", {
              class: P(["po-text-xl po-font-medium po-text-slate-600", { "group-hover:po-text-mpao-lightblue": e.clickable }])
            }, V(s.value), 3)
          ]),
          a("span", {
            class: P(["po-text-sm po-text-slate-500 po-block", { "group-hover:po-text-mpao-lightblue": e.clickable }])
          }, V(s.label), 3)
        ], 10, Nf))), 256))
      ], 2)
    ])) : x("", !0);
  }
});
var ve = "top", we = "bottom", $e = "right", he = "left", Bo = "auto", bt = [ve, we, $e, he], Qe = "start", ct = "end", Ff = "clippingParents", xl = "viewport", it = "popper", Hf = "reference", hn = /* @__PURE__ */ bt.reduce(function(e, t) {
  return e.concat([t + "-" + Qe, t + "-" + ct]);
}, []), wl = /* @__PURE__ */ [].concat(bt, [Bo]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Qe, t + "-" + ct]);
}, []), qf = "beforeRead", Wf = "read", Uf = "afterRead", Gf = "beforeMain", Zf = "main", Kf = "afterMain", Yf = "beforeWrite", Xf = "write", Qf = "afterWrite", Jf = [qf, Wf, Uf, Gf, Zf, Kf, Yf, Xf, Qf];
function Ce(e) {
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
function Ze(e) {
  var t = ye(e).Element;
  return e instanceof t || e instanceof Element;
}
function xe(e) {
  var t = ye(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function jo(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = ye(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function e4(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(o) {
    var n = t.styles[o] || {}, l = t.attributes[o] || {}, s = t.elements[o];
    !xe(s) || !Ce(s) || (Object.assign(s.style, n), Object.keys(l).forEach(function(r) {
      var i = l[r];
      i === !1 ? s.removeAttribute(r) : s.setAttribute(r, i === !0 ? "" : i);
    }));
  });
}
function t4(e) {
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
    Object.keys(t.elements).forEach(function(n) {
      var l = t.elements[n], s = t.attributes[n] || {}, r = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : o[n]), i = r.reduce(function(p, f) {
        return p[f] = "", p;
      }, {});
      !xe(l) || !Ce(l) || (Object.assign(l.style, i), Object.keys(s).forEach(function(p) {
        l.removeAttribute(p);
      }));
    });
  };
}
const o4 = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: e4,
  effect: t4,
  requires: ["computeStyles"]
};
function ke(e) {
  return e.split("-")[0];
}
var Ue = Math.max, Pt = Math.min, Je = Math.round;
function co() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function $l() {
  return !/^((?!chrome|android).)*safari/i.test(co());
}
function et(e, t, o) {
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  var n = e.getBoundingClientRect(), l = 1, s = 1;
  t && xe(e) && (l = e.offsetWidth > 0 && Je(n.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && Je(n.height) / e.offsetHeight || 1);
  var r = Ze(e) ? ye(e) : window, i = r.visualViewport, p = !$l() && o, f = (n.left + (p && i ? i.offsetLeft : 0)) / l, d = (n.top + (p && i ? i.offsetTop : 0)) / s, h = n.width / l, $ = n.height / s;
  return {
    width: h,
    height: $,
    top: d,
    right: f + h,
    bottom: d + $,
    left: f,
    x: f,
    y: d
  };
}
function Mo(e) {
  var t = et(e), o = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - o) <= 1 && (o = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: o,
    height: n
  };
}
function Vl(e, t) {
  var o = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (o && jo(o)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function Ee(e) {
  return ye(e).getComputedStyle(e);
}
function n4(e) {
  return ["table", "td", "th"].indexOf(Ce(e)) >= 0;
}
function Ne(e) {
  return ((Ze(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Wt(e) {
  return Ce(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (jo(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Ne(e)
  );
}
function mn(e) {
  return !xe(e) || // https://github.com/popperjs/popper-core/issues/837
  Ee(e).position === "fixed" ? null : e.offsetParent;
}
function l4(e) {
  var t = /firefox/i.test(co()), o = /Trident/i.test(co());
  if (o && xe(e)) {
    var n = Ee(e);
    if (n.position === "fixed")
      return null;
  }
  var l = Wt(e);
  for (jo(l) && (l = l.host); xe(l) && ["html", "body"].indexOf(Ce(l)) < 0; ) {
    var s = Ee(l);
    if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none")
      return l;
    l = l.parentNode;
  }
  return null;
}
function yt(e) {
  for (var t = ye(e), o = mn(e); o && n4(o) && Ee(o).position === "static"; )
    o = mn(o);
  return o && (Ce(o) === "html" || Ce(o) === "body" && Ee(o).position === "static") ? t : o || l4(e) || t;
}
function No(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ut(e, t, o) {
  return Ue(e, Pt(t, o));
}
function s4(e, t, o) {
  var n = ut(e, t, o);
  return n > o ? o : n;
}
function kl() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function _l(e) {
  return Object.assign({}, kl(), e);
}
function Cl(e, t) {
  return t.reduce(function(o, n) {
    return o[n] = e, o;
  }, {});
}
var a4 = function(t, o) {
  return t = typeof t == "function" ? t(Object.assign({}, o.rects, {
    placement: o.placement
  })) : t, _l(typeof t != "number" ? t : Cl(t, bt));
};
function r4(e) {
  var t, o = e.state, n = e.name, l = e.options, s = o.elements.arrow, r = o.modifiersData.popperOffsets, i = ke(o.placement), p = No(i), f = [he, $e].indexOf(i) >= 0, d = f ? "height" : "width";
  if (!(!s || !r)) {
    var h = a4(l.padding, o), $ = Mo(s), m = p === "y" ? ve : he, g = p === "y" ? we : $e, y = o.rects.reference[d] + o.rects.reference[p] - r[p] - o.rects.popper[d], v = r[p] - o.rects.reference[p], w = yt(s), b = w ? p === "y" ? w.clientHeight || 0 : w.clientWidth || 0 : 0, S = y / 2 - v / 2, C = h[m], A = b - $[d] - h[g], z = b / 2 - $[d] / 2 + S, I = ut(C, z, A), N = p;
    o.modifiersData[n] = (t = {}, t[N] = I, t.centerOffset = I - z, t);
  }
}
function i4(e) {
  var t = e.state, o = e.options, n = o.element, l = n === void 0 ? "[data-popper-arrow]" : n;
  l != null && (typeof l == "string" && (l = t.elements.popper.querySelector(l), !l) || Vl(t.elements.popper, l) && (t.elements.arrow = l));
}
const u4 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: r4,
  effect: i4,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function tt(e) {
  return e.split("-")[1];
}
var p4 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function c4(e, t) {
  var o = e.x, n = e.y, l = t.devicePixelRatio || 1;
  return {
    x: Je(o * l) / l || 0,
    y: Je(n * l) / l || 0
  };
}
function gn(e) {
  var t, o = e.popper, n = e.popperRect, l = e.placement, s = e.variation, r = e.offsets, i = e.position, p = e.gpuAcceleration, f = e.adaptive, d = e.roundOffsets, h = e.isFixed, $ = r.x, m = $ === void 0 ? 0 : $, g = r.y, y = g === void 0 ? 0 : g, v = typeof d == "function" ? d({
    x: m,
    y
  }) : {
    x: m,
    y
  };
  m = v.x, y = v.y;
  var w = r.hasOwnProperty("x"), b = r.hasOwnProperty("y"), S = he, C = ve, A = window;
  if (f) {
    var z = yt(o), I = "clientHeight", N = "clientWidth";
    if (z === ye(o) && (z = Ne(o), Ee(z).position !== "static" && i === "absolute" && (I = "scrollHeight", N = "scrollWidth")), z = z, l === ve || (l === he || l === $e) && s === ct) {
      C = we;
      var H = h && z === A && A.visualViewport ? A.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        z[I]
      );
      y -= H - n.height, y *= p ? 1 : -1;
    }
    if (l === he || (l === ve || l === we) && s === ct) {
      S = $e;
      var D = h && z === A && A.visualViewport ? A.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        z[N]
      );
      m -= D - n.width, m *= p ? 1 : -1;
    }
  }
  var G = Object.assign({
    position: i
  }, f && p4), U = d === !0 ? c4({
    x: m,
    y
  }, ye(o)) : {
    x: m,
    y
  };
  if (m = U.x, y = U.y, p) {
    var R;
    return Object.assign({}, G, (R = {}, R[C] = b ? "0" : "", R[S] = w ? "0" : "", R.transform = (A.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + y + "px)" : "translate3d(" + m + "px, " + y + "px, 0)", R));
  }
  return Object.assign({}, G, (t = {}, t[C] = b ? y + "px" : "", t[S] = w ? m + "px" : "", t.transform = "", t));
}
function d4(e) {
  var t = e.state, o = e.options, n = o.gpuAcceleration, l = n === void 0 ? !0 : n, s = o.adaptive, r = s === void 0 ? !0 : s, i = o.roundOffsets, p = i === void 0 ? !0 : i, f = {
    placement: ke(t.placement),
    variation: tt(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: l,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, gn(Object.assign({}, f, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: r,
    roundOffsets: p
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, gn(Object.assign({}, f, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: p
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const f4 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: d4,
  data: {}
};
var _t = {
  passive: !0
};
function v4(e) {
  var t = e.state, o = e.instance, n = e.options, l = n.scroll, s = l === void 0 ? !0 : l, r = n.resize, i = r === void 0 ? !0 : r, p = ye(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return s && f.forEach(function(d) {
    d.addEventListener("scroll", o.update, _t);
  }), i && p.addEventListener("resize", o.update, _t), function() {
    s && f.forEach(function(d) {
      d.removeEventListener("scroll", o.update, _t);
    }), i && p.removeEventListener("resize", o.update, _t);
  };
}
const h4 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: v4,
  data: {}
};
var m4 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Ot(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return m4[t];
  });
}
var g4 = {
  start: "end",
  end: "start"
};
function bn(e) {
  return e.replace(/start|end/g, function(t) {
    return g4[t];
  });
}
function Io(e) {
  var t = ye(e), o = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: o,
    scrollTop: n
  };
}
function Ro(e) {
  return et(Ne(e)).left + Io(e).scrollLeft;
}
function b4(e, t) {
  var o = ye(e), n = Ne(e), l = o.visualViewport, s = n.clientWidth, r = n.clientHeight, i = 0, p = 0;
  if (l) {
    s = l.width, r = l.height;
    var f = $l();
    (f || !f && t === "fixed") && (i = l.offsetLeft, p = l.offsetTop);
  }
  return {
    width: s,
    height: r,
    x: i + Ro(e),
    y: p
  };
}
function y4(e) {
  var t, o = Ne(e), n = Io(e), l = (t = e.ownerDocument) == null ? void 0 : t.body, s = Ue(o.scrollWidth, o.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0), r = Ue(o.scrollHeight, o.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0), i = -n.scrollLeft + Ro(e), p = -n.scrollTop;
  return Ee(l || o).direction === "rtl" && (i += Ue(o.clientWidth, l ? l.clientWidth : 0) - s), {
    width: s,
    height: r,
    x: i,
    y: p
  };
}
function Fo(e) {
  var t = Ee(e), o = t.overflow, n = t.overflowX, l = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + l + n);
}
function Sl(e) {
  return ["html", "body", "#document"].indexOf(Ce(e)) >= 0 ? e.ownerDocument.body : xe(e) && Fo(e) ? e : Sl(Wt(e));
}
function pt(e, t) {
  var o;
  t === void 0 && (t = []);
  var n = Sl(e), l = n === ((o = e.ownerDocument) == null ? void 0 : o.body), s = ye(n), r = l ? [s].concat(s.visualViewport || [], Fo(n) ? n : []) : n, i = t.concat(r);
  return l ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(pt(Wt(r)))
  );
}
function fo(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function x4(e, t) {
  var o = et(e, !1, t === "fixed");
  return o.top = o.top + e.clientTop, o.left = o.left + e.clientLeft, o.bottom = o.top + e.clientHeight, o.right = o.left + e.clientWidth, o.width = e.clientWidth, o.height = e.clientHeight, o.x = o.left, o.y = o.top, o;
}
function yn(e, t, o) {
  return t === xl ? fo(b4(e, o)) : Ze(t) ? x4(t, o) : fo(y4(Ne(e)));
}
function w4(e) {
  var t = pt(Wt(e)), o = ["absolute", "fixed"].indexOf(Ee(e).position) >= 0, n = o && xe(e) ? yt(e) : e;
  return Ze(n) ? t.filter(function(l) {
    return Ze(l) && Vl(l, n) && Ce(l) !== "body";
  }) : [];
}
function $4(e, t, o, n) {
  var l = t === "clippingParents" ? w4(e) : [].concat(t), s = [].concat(l, [o]), r = s[0], i = s.reduce(function(p, f) {
    var d = yn(e, f, n);
    return p.top = Ue(d.top, p.top), p.right = Pt(d.right, p.right), p.bottom = Pt(d.bottom, p.bottom), p.left = Ue(d.left, p.left), p;
  }, yn(e, r, n));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function Ol(e) {
  var t = e.reference, o = e.element, n = e.placement, l = n ? ke(n) : null, s = n ? tt(n) : null, r = t.x + t.width / 2 - o.width / 2, i = t.y + t.height / 2 - o.height / 2, p;
  switch (l) {
    case ve:
      p = {
        x: r,
        y: t.y - o.height
      };
      break;
    case we:
      p = {
        x: r,
        y: t.y + t.height
      };
      break;
    case $e:
      p = {
        x: t.x + t.width,
        y: i
      };
      break;
    case he:
      p = {
        x: t.x - o.width,
        y: i
      };
      break;
    default:
      p = {
        x: t.x,
        y: t.y
      };
  }
  var f = l ? No(l) : null;
  if (f != null) {
    var d = f === "y" ? "height" : "width";
    switch (s) {
      case Qe:
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
  var o = t, n = o.placement, l = n === void 0 ? e.placement : n, s = o.strategy, r = s === void 0 ? e.strategy : s, i = o.boundary, p = i === void 0 ? Ff : i, f = o.rootBoundary, d = f === void 0 ? xl : f, h = o.elementContext, $ = h === void 0 ? it : h, m = o.altBoundary, g = m === void 0 ? !1 : m, y = o.padding, v = y === void 0 ? 0 : y, w = _l(typeof v != "number" ? v : Cl(v, bt)), b = $ === it ? Hf : it, S = e.rects.popper, C = e.elements[g ? b : $], A = $4(Ze(C) ? C : C.contextElement || Ne(e.elements.popper), p, d, r), z = et(e.elements.reference), I = Ol({
    reference: z,
    element: S,
    strategy: "absolute",
    placement: l
  }), N = fo(Object.assign({}, S, I)), H = $ === it ? N : z, D = {
    top: A.top - H.top + w.top,
    bottom: H.bottom - A.bottom + w.bottom,
    left: A.left - H.left + w.left,
    right: H.right - A.right + w.right
  }, G = e.modifiersData.offset;
  if ($ === it && G) {
    var U = G[l];
    Object.keys(D).forEach(function(R) {
      var F = [$e, we].indexOf(R) >= 0 ? 1 : -1, q = [ve, we].indexOf(R) >= 0 ? "y" : "x";
      D[R] += U[q] * F;
    });
  }
  return D;
}
function V4(e, t) {
  t === void 0 && (t = {});
  var o = t, n = o.placement, l = o.boundary, s = o.rootBoundary, r = o.padding, i = o.flipVariations, p = o.allowedAutoPlacements, f = p === void 0 ? wl : p, d = tt(n), h = d ? i ? hn : hn.filter(function(g) {
    return tt(g) === d;
  }) : bt, $ = h.filter(function(g) {
    return f.indexOf(g) >= 0;
  });
  $.length === 0 && ($ = h);
  var m = $.reduce(function(g, y) {
    return g[y] = dt(e, {
      placement: y,
      boundary: l,
      rootBoundary: s,
      padding: r
    })[ke(y)], g;
  }, {});
  return Object.keys(m).sort(function(g, y) {
    return m[g] - m[y];
  });
}
function k4(e) {
  if (ke(e) === Bo)
    return [];
  var t = Ot(e);
  return [bn(e), t, bn(t)];
}
function _4(e) {
  var t = e.state, o = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var l = o.mainAxis, s = l === void 0 ? !0 : l, r = o.altAxis, i = r === void 0 ? !0 : r, p = o.fallbackPlacements, f = o.padding, d = o.boundary, h = o.rootBoundary, $ = o.altBoundary, m = o.flipVariations, g = m === void 0 ? !0 : m, y = o.allowedAutoPlacements, v = t.options.placement, w = ke(v), b = w === v, S = p || (b || !g ? [Ot(v)] : k4(v)), C = [v].concat(S).reduce(function(Te, De) {
      return Te.concat(ke(De) === Bo ? V4(t, {
        placement: De,
        boundary: d,
        rootBoundary: h,
        padding: f,
        flipVariations: g,
        allowedAutoPlacements: y
      }) : De);
    }, []), A = t.rects.reference, z = t.rects.popper, I = /* @__PURE__ */ new Map(), N = !0, H = C[0], D = 0; D < C.length; D++) {
      var G = C[D], U = ke(G), R = tt(G) === Qe, F = [ve, we].indexOf(U) >= 0, q = F ? "width" : "height", M = dt(t, {
        placement: G,
        boundary: d,
        rootBoundary: h,
        altBoundary: $,
        padding: f
      }), K = F ? R ? $e : he : R ? we : ve;
      A[q] > z[q] && (K = Ot(K));
      var Se = Ot(K), fe = [];
      if (s && fe.push(M[U] <= 0), i && fe.push(M[K] <= 0, M[Se] <= 0), fe.every(function(Te) {
        return Te;
      })) {
        H = G, N = !1;
        break;
      }
      I.set(G, fe);
    }
    if (N)
      for (var lt = g ? 3 : 1, xt = function(De) {
        var st = C.find(function(wt) {
          var Ie = I.get(wt);
          if (Ie)
            return Ie.slice(0, De).every(function(Ut) {
              return Ut;
            });
        });
        if (st)
          return H = st, "break";
      }, Le = lt; Le > 0; Le--) {
        var Ke = xt(Le);
        if (Ke === "break")
          break;
      }
    t.placement !== H && (t.modifiersData[n]._skip = !0, t.placement = H, t.reset = !0);
  }
}
const C4 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: _4,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function xn(e, t, o) {
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
function wn(e) {
  return [ve, $e, we, he].some(function(t) {
    return e[t] >= 0;
  });
}
function S4(e) {
  var t = e.state, o = e.name, n = t.rects.reference, l = t.rects.popper, s = t.modifiersData.preventOverflow, r = dt(t, {
    elementContext: "reference"
  }), i = dt(t, {
    altBoundary: !0
  }), p = xn(r, n), f = xn(i, l, s), d = wn(p), h = wn(f);
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
const O4 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: S4
};
function P4(e, t, o) {
  var n = ke(e), l = [he, ve].indexOf(n) >= 0 ? -1 : 1, s = typeof o == "function" ? o(Object.assign({}, t, {
    placement: e
  })) : o, r = s[0], i = s[1];
  return r = r || 0, i = (i || 0) * l, [he, $e].indexOf(n) >= 0 ? {
    x: i,
    y: r
  } : {
    x: r,
    y: i
  };
}
function E4(e) {
  var t = e.state, o = e.options, n = e.name, l = o.offset, s = l === void 0 ? [0, 0] : l, r = wl.reduce(function(d, h) {
    return d[h] = P4(h, t.rects, s), d;
  }, {}), i = r[t.placement], p = i.x, f = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += p, t.modifiersData.popperOffsets.y += f), t.modifiersData[n] = r;
}
const L4 = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: E4
};
function T4(e) {
  var t = e.state, o = e.name;
  t.modifiersData[o] = Ol({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const D4 = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: T4,
  data: {}
};
function A4(e) {
  return e === "x" ? "y" : "x";
}
function z4(e) {
  var t = e.state, o = e.options, n = e.name, l = o.mainAxis, s = l === void 0 ? !0 : l, r = o.altAxis, i = r === void 0 ? !1 : r, p = o.boundary, f = o.rootBoundary, d = o.altBoundary, h = o.padding, $ = o.tether, m = $ === void 0 ? !0 : $, g = o.tetherOffset, y = g === void 0 ? 0 : g, v = dt(t, {
    boundary: p,
    rootBoundary: f,
    padding: h,
    altBoundary: d
  }), w = ke(t.placement), b = tt(t.placement), S = !b, C = No(w), A = A4(C), z = t.modifiersData.popperOffsets, I = t.rects.reference, N = t.rects.popper, H = typeof y == "function" ? y(Object.assign({}, t.rects, {
    placement: t.placement
  })) : y, D = typeof H == "number" ? {
    mainAxis: H,
    altAxis: H
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, H), G = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, U = {
    x: 0,
    y: 0
  };
  if (z) {
    if (s) {
      var R, F = C === "y" ? ve : he, q = C === "y" ? we : $e, M = C === "y" ? "height" : "width", K = z[C], Se = K + v[F], fe = K - v[q], lt = m ? -N[M] / 2 : 0, xt = b === Qe ? I[M] : N[M], Le = b === Qe ? -N[M] : -I[M], Ke = t.elements.arrow, Te = m && Ke ? Mo(Ke) : {
        width: 0,
        height: 0
      }, De = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : kl(), st = De[F], wt = De[q], Ie = ut(0, I[M], Te[M]), Ut = S ? I[M] / 2 - lt - Ie - st - D.mainAxis : xt - Ie - st - D.mainAxis, Pl = S ? -I[M] / 2 + lt + Ie + wt + D.mainAxis : Le + Ie + wt + D.mainAxis, Gt = t.elements.arrow && yt(t.elements.arrow), El = Gt ? C === "y" ? Gt.clientTop || 0 : Gt.clientLeft || 0 : 0, Ho = (R = G == null ? void 0 : G[C]) != null ? R : 0, Ll = K + Ut - Ho - El, Tl = K + Pl - Ho, qo = ut(m ? Pt(Se, Ll) : Se, K, m ? Ue(fe, Tl) : fe);
      z[C] = qo, U[C] = qo - K;
    }
    if (i) {
      var Wo, Dl = C === "x" ? ve : he, Al = C === "x" ? we : $e, Re = z[A], $t = A === "y" ? "height" : "width", Uo = Re + v[Dl], Go = Re - v[Al], Zt = [ve, he].indexOf(w) !== -1, Zo = (Wo = G == null ? void 0 : G[A]) != null ? Wo : 0, Ko = Zt ? Uo : Re - I[$t] - N[$t] - Zo + D.altAxis, Yo = Zt ? Re + I[$t] + N[$t] - Zo - D.altAxis : Go, Xo = m && Zt ? s4(Ko, Re, Yo) : ut(m ? Ko : Uo, Re, m ? Yo : Go);
      z[A] = Xo, U[A] = Xo - Re;
    }
    t.modifiersData[n] = U;
  }
}
const B4 = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: z4,
  requiresIfExists: ["offset"]
};
function j4(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function M4(e) {
  return e === ye(e) || !xe(e) ? Io(e) : j4(e);
}
function N4(e) {
  var t = e.getBoundingClientRect(), o = Je(t.width) / e.offsetWidth || 1, n = Je(t.height) / e.offsetHeight || 1;
  return o !== 1 || n !== 1;
}
function I4(e, t, o) {
  o === void 0 && (o = !1);
  var n = xe(t), l = xe(t) && N4(t), s = Ne(t), r = et(e, l, o), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, p = {
    x: 0,
    y: 0
  };
  return (n || !n && !o) && ((Ce(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Fo(s)) && (i = M4(t)), xe(t) ? (p = et(t, !0), p.x += t.clientLeft, p.y += t.clientTop) : s && (p.x = Ro(s))), {
    x: r.left + i.scrollLeft - p.x,
    y: r.top + i.scrollTop - p.y,
    width: r.width,
    height: r.height
  };
}
function R4(e) {
  var t = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(s) {
    t.set(s.name, s);
  });
  function l(s) {
    o.add(s.name);
    var r = [].concat(s.requires || [], s.requiresIfExists || []);
    r.forEach(function(i) {
      if (!o.has(i)) {
        var p = t.get(i);
        p && l(p);
      }
    }), n.push(s);
  }
  return e.forEach(function(s) {
    o.has(s.name) || l(s);
  }), n;
}
function F4(e) {
  var t = R4(e);
  return Jf.reduce(function(o, n) {
    return o.concat(t.filter(function(l) {
      return l.phase === n;
    }));
  }, []);
}
function H4(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(o) {
      Promise.resolve().then(function() {
        t = void 0, o(e());
      });
    })), t;
  };
}
function q4(e) {
  var t = e.reduce(function(o, n) {
    var l = o[n.name];
    return o[n.name] = l ? Object.assign({}, l, n, {
      options: Object.assign({}, l.options, n.options),
      data: Object.assign({}, l.data, n.data)
    }) : n, o;
  }, {});
  return Object.keys(t).map(function(o) {
    return t[o];
  });
}
var $n = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Vn() {
  for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
    t[o] = arguments[o];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function W4(e) {
  e === void 0 && (e = {});
  var t = e, o = t.defaultModifiers, n = o === void 0 ? [] : o, l = t.defaultOptions, s = l === void 0 ? $n : l;
  return function(i, p, f) {
    f === void 0 && (f = s);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, $n, s),
      modifiersData: {},
      elements: {
        reference: i,
        popper: p
      },
      attributes: {},
      styles: {}
    }, h = [], $ = !1, m = {
      state: d,
      setOptions: function(w) {
        var b = typeof w == "function" ? w(d.options) : w;
        y(), d.options = Object.assign({}, s, d.options, b), d.scrollParents = {
          reference: Ze(i) ? pt(i) : i.contextElement ? pt(i.contextElement) : [],
          popper: pt(p)
        };
        var S = F4(q4([].concat(n, d.options.modifiers)));
        return d.orderedModifiers = S.filter(function(C) {
          return C.enabled;
        }), g(), m.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!$) {
          var w = d.elements, b = w.reference, S = w.popper;
          if (Vn(b, S)) {
            d.rects = {
              reference: I4(b, yt(S), d.options.strategy === "fixed"),
              popper: Mo(S)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(D) {
              return d.modifiersData[D.name] = Object.assign({}, D.data);
            });
            for (var C = 0; C < d.orderedModifiers.length; C++) {
              if (d.reset === !0) {
                d.reset = !1, C = -1;
                continue;
              }
              var A = d.orderedModifiers[C], z = A.fn, I = A.options, N = I === void 0 ? {} : I, H = A.name;
              typeof z == "function" && (d = z({
                state: d,
                options: N,
                name: H,
                instance: m
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: H4(function() {
        return new Promise(function(v) {
          m.forceUpdate(), v(d);
        });
      }),
      destroy: function() {
        y(), $ = !0;
      }
    };
    if (!Vn(i, p))
      return m;
    m.setOptions(f).then(function(v) {
      !$ && f.onFirstUpdate && f.onFirstUpdate(v);
    });
    function g() {
      d.orderedModifiers.forEach(function(v) {
        var w = v.name, b = v.options, S = b === void 0 ? {} : b, C = v.effect;
        if (typeof C == "function") {
          var A = C({
            state: d,
            name: w,
            instance: m,
            options: S
          }), z = function() {
          };
          h.push(A || z);
        }
      });
    }
    function y() {
      h.forEach(function(v) {
        return v();
      }), h = [];
    }
    return m;
  };
}
var U4 = [h4, D4, f4, o4, L4, C4, B4, u4, O4], G4 = /* @__PURE__ */ W4({
  defaultModifiers: U4
});
const Z4 = {
  name: "PoTooltip"
}, H2 = /* @__PURE__ */ Object.assign(Z4, {
  props: {
    /**
     * Text
     */
    text: {
      type: String,
      default: "This is a tooltip"
    },
    /**
     * Placement
     * Default: bottom. | 'auto' | 'auto-start' | 'auto-end' | 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end'
     */
    placement: {
      type: String,
      default: "bottom"
    },
    /**
     * Popper strategy
     * Default: absolute. 'absolute' | 'fixed'
     */
    strategy: {
      type: String,
      default: "absolute"
    }
  },
  setup(e) {
    const t = e, o = _(null), n = _(null), l = _(!1);
    let s;
    Y(() => {
      s = G4(o.value, n.value, {
        placement: t.placement,
        strategy: t.strategy
      });
    }), pe(() => {
      s && s.destroy();
    });
    function r() {
      l.value = !0;
    }
    function i() {
      l.value = !1;
    }
    return (p, f) => (u(), c("span", {
      ref_key: "trigger",
      ref: o,
      onMouseover: r,
      onMouseleave: i
    }, [
      Z(p.$slots, "default", {}, () => [
        Q("Tooltip")
      ]),
      a("div", {
        ref_key: "popper",
        ref: n,
        class: P(["po-bg-slate-700 po-text-xs po-transition-opacity po-duration-100 po-ease-linear po-text-slate-50 po-rounded-md po-px-2 po-py-1 po-shadow-md", [{ "po-opacity-0": !l.value }, { "po-opacity-100": l.value }]])
      }, V(e.text), 3)
    ], 544));
  }
});
export {
  e2 as PoActionBar,
  y2 as PoAlert,
  Ps as PoAppIcon,
  Ia as PoAppTray,
  Po as PoButton,
  t2 as PoCard,
  o2 as PoCardSearch,
  _2 as PoCardTabs,
  h2 as PoChatLogItem,
  p2 as PoCheckbox,
  b2 as PoCommandPalette,
  k2 as PoConsent,
  $2 as PoContentArea,
  T2 as PoDRStatus,
  xp as PoDescriptionList,
  w2 as PoDownloadFileList,
  s2 as PoDynamicTable,
  S2 as PoEmpty,
  c2 as PoFooter,
  d2 as PoFormStatusMessage,
  z2 as PoHeading,
  a2 as PoInputField,
  r2 as PoInputFile,
  V2 as PoLoading,
  x2 as PoLogs,
  R2 as PoMessage,
  gt as PoModal,
  B2 as PoMultiSelect,
  m2 as PoNotification,
  Qa as PoNotificationHub,
  F2 as PoPageStats,
  n2 as PoPageTitle,
  Ou as PoPagination,
  kr as PoProfileSwitcher,
  f2 as PoRadioInput,
  As as PoSearchBar,
  u2 as PoSectionMenu,
  I2 as PoSelectApi,
  mi as PoSelectField,
  J4 as PoSidebarDrawer,
  g2 as PoSlideover,
  v2 as PoStatsBlock,
  l2 as PoTable,
  D2 as PoTableAction,
  M2 as PoTableCheckbox,
  C2 as PoTabs,
  Mi as PoTextarea,
  j2 as PoTimeline,
  N2 as PoToast,
  i2 as PoToggle,
  H2 as PoTooltip,
  X4 as PoTopBar,
  A2 as Rufiyaa
};
