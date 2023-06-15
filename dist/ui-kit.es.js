import { openBlock as r, createElementBlock as u, createElementVNode as s, ref as k, toRefs as ye, watch as U, Fragment as B, createVNode as _, unref as b, withCtx as T, renderSlot as te, createBlock as A, resolveDynamicComponent as de, createCommentVNode as h, computed as S, toDisplayString as m, withDirectives as Ge, isRef as Zo, withKeys as Ko, vModelText as gt, cloneVNode as Qo, h as J, inject as se, provide as ie, onMounted as H, watchEffect as ne, defineComponent as W, toRaw as K, onUnmounted as ue, nextTick as Ve, Teleport as Ze, reactive as Yo, shallowRef as oo, normalizeClass as E, renderList as R, Transition as $e, withModifiers as re, onBeforeMount as Jo, onBeforeUpdate as Xo, onUpdated as yt, mergeProps as Ee, createTextVNode as X, normalizeProps as Me, guardReactiveProps as Ie, normalizeStyle as xt, vModelCheckbox as el, onBeforeUnmount as wt, createStaticVNode as tl } from "vue";
import { f as zt, a as ol } from "./FormatMoney-edf23aad.mjs";
function ll(e, t) {
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
function nl(e, t) {
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
function al(e, t) {
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
function sl(e, t) {
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
function rl(e, t) {
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
function il(e, t) {
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
function ul(e, t) {
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
function pl(e, t) {
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
function cl(e, t) {
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
function dl(e, t) {
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
function fl(e, t) {
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
function vl(e, t) {
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
function dt(e, t) {
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
function ml(e, t) {
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
function hl(e, t) {
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
function Vt(e, t) {
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
function lo(e, t) {
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
function bl(e, t) {
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
function gl(e, t) {
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
function yl(e, t) {
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
function Ht(e, t) {
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
function Ke(e, t) {
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
const xl = /* @__PURE__ */ s("div", {
  "aria-live": "assertive",
  class: "po-pointer-events-none po-fixed po-inset-0 po-flex po-items-start po-px-4 po-py-6 sm:po-p-6 po-z-[60]"
}, [
  /* @__PURE__ */ s("div", {
    class: "po-flex po-w-full po-flex-col po-items-end po-space-y-4 sm:po-items-end po-pt-[55px]",
    id: "po-notifications-alert"
  })
], -1), wl = { class: "po-bg-mpao-blue po-fixed po-top-0 po-w-full po-z-50 po-flex" }, Vl = { class: "po-shrink-0 po-px-3 po-pt-3" }, kl = {
  for: "sidebar-drawer-toggle",
  role: "button",
  class: "genie-effect po-flex po-items-center po-justify-center po-bg-[#2e5266] po-rounded-full po-w-10 po-h-10 po-select-none po-text-slate-100"
}, $l = { class: "po-mx-auto po-max-w-full po-pr-4 po-grow sm:po-pr-4" }, Cl = { class: "po-flex po-relative po-h-16 po-items-center po-justify-between po-space-x-12" }, _l = { class: "po-flex po-items-center po-space-x-3" }, Sl = {
  key: 0,
  class: "po-block po-w-6 po-text-slate-100 md:po-hidden",
  role: "button"
}, Pl = {
  name: "PoTopBar"
}, T1 = /* @__PURE__ */ Object.assign(Pl, {
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
    const l = e, n = k(""), o = k(""), { avatar: a, logo: i } = ye(l);
    U(a, () => {
      n.value = a.value;
    }), U(i, () => {
      o.value = i.value;
    });
    function p(d) {
      t("profileSwitcherClick", d);
    }
    function c(d) {
      t("query", d);
    }
    function f(d) {
      t("onSearchClear", d);
    }
    return (d, v) => (r(), u(B, null, [
      xl,
      s("nav", wl, [
        s("div", Vl, [
          s("label", kl, [
            _(b(sl), { class: "po-w-6 po-fill-current" })
          ])
        ]),
        s("div", $l, [
          s("div", Cl, [
            _(b(jl), { "app-name": e.appName }, {
              icon: T(() => [
                te(d.$slots, "appIcon", {}, () => [
                  e.appIcon ? (r(), A(de(e.appIcon), { key: 0 })) : h("", !0)
                ])
              ]),
              _: 3
            }, 8, ["app-name"]),
            e.hasSearch ? (r(), A(b(Rl), {
              key: 0,
              onQuery: c,
              onOnClear: f,
              "current-query": e.currentQuery
            }, null, 8, ["current-query"])) : h("", !0),
            s("div", _l, [
              e.hasSearch ? (r(), u("span", Sl, [
                _(b(Vt), { class: "po-stroke-current" })
              ])) : h("", !0),
              _(b(ga), {
                notifications: e.notifications,
                "has-new-notifications": e.hasNewNotifications
              }, null, 8, ["notifications", "has-new-notifications"]),
              _(b(sa), {
                "app-list": e.appList,
                "open-in-new-tab": !0
              }, null, 8, ["app-list"]),
              _(b(qa), {
                "user-object": e.userObject,
                avatar: n.value,
                logo: o.value,
                onButtonClick: p
              }, null, 8, ["user-object", "avatar", "logo"])
            ])
          ])
        ])
      ])
    ], 64));
  }
}), Ol = { class: "po-flex po-items-center po-justify-center po-space-x-3" }, El = { class: "po-w-8 po-text-slate-100 app-icon" }, Ll = { class: "po-font-light po-text-lg po-text-slate-100" }, Tl = { class: "po-hidden md:po-block" }, Bl = { class: "po-block md:po-hidden" }, Dl = {
  name: "PoAppIcon"
}, jl = /* @__PURE__ */ Object.assign(Dl, {
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
    const t = e, l = S(() => {
      let n = t.appName.match(/\b[A-Z]/g).join("");
      return n.length === 1 ? t.appName.substring(0, 3) : n;
    });
    return (n, o) => (r(), u("div", Ol, [
      s("div", El, [
        te(n.$slots, "icon")
      ]),
      s("span", Ll, [
        s("span", Tl, m(e.appName), 1),
        s("span", Bl, m(b(l)), 1)
      ])
    ]));
  }
}), Nl = { class: "po-flex-grow po-hidden po-relative md:po-block" }, Al = ["placeholder", "onKeyup"], Ml = { class: "po-absolute po-inset-y-0 po-left-0 po-flex po-items-center po-pl-3 po-pointer-events-none po-transition-all po-ease-linear po-duration-100 po-text-slate-400 po-origin-center peer-hover/search:po-scale-105 peer-focus/search:po-text-slate-100" }, Il = {
  name: "PoSearchBar"
}, Rl = /* @__PURE__ */ Object.assign(Il, {
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
    let l = k("");
    const n = (o) => {
      t("query", l.value);
    };
    return U(l, async (o, a) => {
      o === "" && t("onClear", !0);
    }), (o, a) => (r(), u("div", Nl, [
      Ge(s("input", {
        "onUpdate:modelValue": a[0] || (a[0] = (i) => Zo(l) ? l.value = i : l = i),
        type: "text",
        id: "main-search",
        placeholder: e.placeholder,
        onKeyup: Ko(n, ["enter"]),
        class: "peer/search po-bg-transparent po-border po-border-transparent po-text-slate-100 po-text-sm po-rounded-md po-ring-0 po-outline-none focus:po-outline-none focus:po-ring-0 po-transition-colors po-ease-linear po-duration-100 po-block po-w-full po-pl-10 po-p-2.5 po-appearance-none focus:po-border-slate-400 hover:po-border-slate-600"
      }, null, 40, Al), [
        [gt, b(l)]
      ]),
      s("div", Ml, [
        _(b(Vt), { class: "po-w-5 po-h-5 po-stroke-current" })
      ])
    ]));
  }
});
function Q(e, t, ...l) {
  if (e in t) {
    let o = t[e];
    return typeof o == "function" ? o(...l) : o;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((o) => `"${o}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, Q), n;
}
var fe = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(fe || {}), ke = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(ke || {});
function G({ visible: e = !0, features: t = 0, ourProps: l, theirProps: n, ...o }) {
  var a;
  let i = ao(n, l), p = Object.assign(o, { props: i });
  if (e || t & 2 && i.static)
    return rt(p);
  if (t & 1) {
    let c = (a = i.unmount) == null || a ? 0 : 1;
    return Q(c, { [0]() {
      return null;
    }, [1]() {
      return rt({ ...o, props: { ...i, hidden: !0, style: { display: "none" } } });
    } });
  }
  return rt(p);
}
function rt({ props: e, attrs: t, slots: l, slot: n, name: o }) {
  var a, i;
  let { as: p, ...c } = De(e, ["unmount", "static"]), f = (a = l.default) == null ? void 0 : a.call(l, n), d = {};
  if (n) {
    let v = !1, V = [];
    for (let [y, w] of Object.entries(n))
      typeof w == "boolean" && (v = !0), w === !0 && V.push(y);
    v && (d["data-headlessui-state"] = V.join(" "));
  }
  if (p === "template") {
    if (f = no(f ?? []), Object.keys(c).length > 0 || Object.keys(t).length > 0) {
      let [v, ...V] = f ?? [];
      if (!Fl(v) || V.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${o} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(c).concat(Object.keys(t)).map((g) => g.trim()).filter((g, x, $) => $.indexOf(g) === x).sort((g, x) => g.localeCompare(x)).map((g) => `  - ${g}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((g) => `  - ${g}`).join(`
`)].join(`
`));
      let y = ao((i = v.props) != null ? i : {}, c), w = Qo(v, y);
      for (let g in y)
        g.startsWith("on") && (w.props || (w.props = {}), w.props[g] = y[g]);
      return w;
    }
    return Array.isArray(f) && f.length === 1 ? f[0] : f;
  }
  return J(p, Object.assign({}, c, d), { default: () => f });
}
function no(e) {
  return e.flatMap((t) => t.type === B ? no(t.children) : [t]);
}
function ao(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, l = {};
  for (let n of e)
    for (let o in n)
      o.startsWith("on") && typeof n[o] == "function" ? (l[o] != null || (l[o] = []), l[o].push(n[o])) : t[o] = n[o];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(l).map((n) => [n, void 0])));
  for (let n in l)
    Object.assign(t, { [n](o, ...a) {
      let i = l[n];
      for (let p of i) {
        if (o instanceof Event && o.defaultPrevented)
          return;
        p(o, ...a);
      }
    } });
  return t;
}
function kt(e) {
  let t = Object.assign({}, e);
  for (let l in t)
    t[l] === void 0 && delete t[l];
  return t;
}
function De(e, t = []) {
  let l = Object.assign({}, e);
  for (let n of t)
    n in l && delete l[n];
  return l;
}
function Fl(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let zl = 0;
function Hl() {
  return ++zl;
}
function oe() {
  return Hl();
}
var z = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(z || {});
function ql(e) {
  throw new Error("Unexpected object: " + e);
}
var ce = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(ce || {});
function Ul(e, t) {
  let l = t.resolveItems();
  if (l.length <= 0)
    return null;
  let n = t.resolveActiveIndex(), o = n ?? -1, a = (() => {
    switch (e.focus) {
      case 0:
        return l.findIndex((i) => !t.resolveDisabled(i));
      case 1: {
        let i = l.slice().reverse().findIndex((p, c, f) => o !== -1 && f.length - c - 1 >= o ? !1 : !t.resolveDisabled(p));
        return i === -1 ? i : l.length - 1 - i;
      }
      case 2:
        return l.findIndex((i, p) => p <= o ? !1 : !t.resolveDisabled(i));
      case 3: {
        let i = l.slice().reverse().findIndex((p) => !t.resolveDisabled(p));
        return i === -1 ? i : l.length - 1 - i;
      }
      case 4:
        return l.findIndex((i) => t.resolveId(i) === e.id);
      case 5:
        return null;
      default:
        ql(e);
    }
  })();
  return a === -1 ? n : a;
}
function P(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let so = Symbol("Context");
var Y = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Y || {});
function Wl() {
  return Be() !== null;
}
function Be() {
  return se(so, null);
}
function Qe(e) {
  ie(so, e);
}
function qt(e, t) {
  if (e)
    return e;
  let l = t ?? "button";
  if (typeof l == "string" && l.toLowerCase() === "button")
    return "button";
}
function Ye(e, t) {
  let l = k(qt(e.value.type, e.value.as));
  return H(() => {
    l.value = qt(e.value.type, e.value.as);
  }), ne(() => {
    var n;
    l.value || P(t) && P(t) instanceof HTMLButtonElement && !((n = P(t)) != null && n.hasAttribute("type")) && (l.value = "button");
  }), l;
}
var Gl = Object.defineProperty, Zl = (e, t, l) => t in e ? Gl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l, Ut = (e, t, l) => (Zl(e, typeof t != "symbol" ? t + "" : t, l), l);
let Kl = class {
  constructor() {
    Ut(this, "current", this.detect()), Ut(this, "currentId", 0);
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
}, Re = new Kl();
function be(e) {
  if (Re.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = P(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
function ro({ container: e, accept: t, walk: l, enabled: n }) {
  ne(() => {
    let o = e.value;
    if (!o || n !== void 0 && !n.value)
      return;
    let a = be(e);
    if (!a)
      return;
    let i = Object.assign((c) => t(c), { acceptNode: t }), p = a.createTreeWalker(o, NodeFilter.SHOW_ELEMENT, i, !1);
    for (; p.nextNode(); )
      l(p.currentNode);
  });
}
let ft = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var ae = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ae || {}), Te = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Te || {}), Ql = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Ql || {});
function Je(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(ft)).sort((t, l) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (l.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var $t = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))($t || {});
function io(e, t = 0) {
  var l;
  return e === ((l = be(e)) == null ? void 0 : l.body) ? !1 : Q(t, { [0]() {
    return e.matches(ft);
  }, [1]() {
    let n = e;
    for (; n !== null; ) {
      if (n.matches(ft))
        return !0;
      n = n.parentElement;
    }
    return !1;
  } });
}
function Le(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Yl = ["textarea", "input"].join(",");
function Jl(e) {
  var t, l;
  return (l = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Yl)) != null ? l : !1;
}
function Ct(e, t = (l) => l) {
  return e.slice().sort((l, n) => {
    let o = t(l), a = t(n);
    if (o === null || a === null)
      return 0;
    let i = o.compareDocumentPosition(a);
    return i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function me(e, t, { sorted: l = !0, relativeTo: n = null, skipElements: o = [] } = {}) {
  var a;
  let i = (a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? a : document, p = Array.isArray(e) ? l ? Ct(e) : e : Je(e);
  o.length > 0 && p.length > 1 && (p = p.filter((w) => !o.includes(w))), n = n ?? i.activeElement;
  let c = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), f = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, p.indexOf(n)) - 1;
    if (t & 4)
      return Math.max(0, p.indexOf(n)) + 1;
    if (t & 8)
      return p.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), d = t & 32 ? { preventScroll: !0 } : {}, v = 0, V = p.length, y;
  do {
    if (v >= V || v + V <= 0)
      return 0;
    let w = f + v;
    if (t & 16)
      w = (w + V) % V;
    else {
      if (w < 0)
        return 3;
      if (w >= V)
        return 1;
    }
    y = p[w], y == null || y.focus(d), v += c;
  } while (y !== i.activeElement);
  return t & 6 && Jl(y) && y.select(), y.hasAttribute("tabindex") || y.setAttribute("tabindex", "0"), 2;
}
function it(e, t, l) {
  Re.isServer || ne((n) => {
    document.addEventListener(e, t, l), n(() => document.removeEventListener(e, t, l));
  });
}
function _t(e, t, l = S(() => !0)) {
  function n(a, i) {
    if (!l.value || a.defaultPrevented)
      return;
    let p = i(a);
    if (p === null || !p.getRootNode().contains(p))
      return;
    let c = function f(d) {
      return typeof d == "function" ? f(d()) : Array.isArray(d) || d instanceof Set ? d : [d];
    }(e);
    for (let f of c) {
      if (f === null)
        continue;
      let d = f instanceof HTMLElement ? f : P(f);
      if (d != null && d.contains(p) || a.composed && a.composedPath().includes(d))
        return;
    }
    return !io(p, $t.Loose) && p.tabIndex !== -1 && a.preventDefault(), t(a, p);
  }
  let o = k(null);
  it("mousedown", (a) => {
    var i, p;
    l.value && (o.value = ((p = (i = a.composedPath) == null ? void 0 : i.call(a)) == null ? void 0 : p[0]) || a.target);
  }, !0), it("click", (a) => {
    o.value && (n(a, () => o.value), o.value = null);
  }, !0), it("blur", (a) => n(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var xe = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(xe || {});
let we = W({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: l }) {
  return () => {
    let { features: n, ...o } = e, a = { "aria-hidden": (n & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
    return G({ ourProps: a, theirProps: o, slot: {}, attrs: l, slots: t, name: "Hidden" });
  };
} });
function St(e = {}, t = null, l = []) {
  for (let [n, o] of Object.entries(e))
    po(l, uo(t, n), o);
  return l;
}
function uo(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function po(e, t, l) {
  if (Array.isArray(l))
    for (let [n, o] of l.entries())
      po(e, uo(t, n.toString()), o);
  else
    l instanceof Date ? e.push([t, l.toISOString()]) : typeof l == "boolean" ? e.push([t, l ? "1" : "0"]) : typeof l == "string" ? e.push([t, l]) : typeof l == "number" ? e.push([t, `${l}`]) : l == null ? e.push([t, ""]) : St(l, t, e);
}
function co(e) {
  var t;
  let l = (t = e == null ? void 0 : e.form) != null ? t : e.closest("form");
  if (l) {
    for (let n of l.elements)
      if (n.tagName === "INPUT" && n.type === "submit" || n.tagName === "BUTTON" && n.type === "submit" || n.nodeName === "INPUT" && n.type === "image") {
        n.click();
        return;
      }
  }
}
function Pt(e, t, l) {
  let n = k(l == null ? void 0 : l.value), o = S(() => e.value !== void 0);
  return [S(() => o.value ? e.value : n.value), function(a) {
    return o.value || (n.value = a), t == null ? void 0 : t(a);
  }];
}
function Wt(e) {
  return [e.screenX, e.screenY];
}
function Xl() {
  let e = k([-1, -1]);
  return { wasMoved(t) {
    let l = Wt(t);
    return e.value[0] === l[0] && e.value[1] === l[1] ? !1 : (e.value = l, !0);
  }, update(t) {
    e.value = Wt(t);
  } };
}
function fo() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function en() {
  return /Android/gi.test(window.navigator.userAgent);
}
function tn() {
  return fo() || en();
}
function on(e, t) {
  return e === t;
}
var ln = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ln || {}), nn = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(nn || {}), an = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(an || {});
let vo = Symbol("ComboboxContext");
function je(e) {
  let t = se(vo, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, je), l;
  }
  return t;
}
let sn = W({ name: "Combobox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => on }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String }, nullable: { type: Boolean, default: !1 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: l, emit: n }) {
  let o = k(1), a = k(null), i = k(null), p = k(null), c = k(null), f = k({ static: !1, hold: !1 }), d = k([]), v = k(null), V = k(1), y = k(!1);
  function w(L = (M) => M) {
    let M = v.value !== null ? d.value[v.value] : null, N = Ct(L(d.value.slice()), (F) => P(F.dataRef.domRef)), D = M ? N.indexOf(M) : null;
    return D === -1 && (D = null), { options: N, activeOptionIndex: D };
  }
  let g = S(() => e.multiple ? 1 : 0), x = S(() => e.nullable), [$, C] = Pt(S(() => e.modelValue === void 0 ? Q(g.value, { [1]: [], [0]: void 0 }) : e.modelValue), (L) => n("update:modelValue", L), S(() => e.defaultValue)), O = { comboboxState: o, value: $, mode: g, compare(L, M) {
    if (typeof e.by == "string") {
      let N = e.by;
      return (L == null ? void 0 : L[N]) === (M == null ? void 0 : M[N]);
    }
    return e.by(L, M);
  }, defaultValue: S(() => e.defaultValue), nullable: x, inputRef: i, labelRef: a, buttonRef: p, optionsRef: c, disabled: S(() => e.disabled), options: d, change(L) {
    C(L);
  }, activeOptionIndex: S(() => {
    if (y.value && v.value === null && d.value.length > 0) {
      let L = d.value.findIndex((M) => !M.dataRef.disabled);
      if (L !== -1)
        return L;
    }
    return v.value;
  }), activationTrigger: V, optionsPropsRef: f, closeCombobox() {
    y.value = !1, !e.disabled && o.value !== 1 && (o.value = 1, v.value = null);
  }, openCombobox() {
    if (y.value = !0, e.disabled || o.value === 0)
      return;
    let L = d.value.findIndex((M) => {
      let N = K(M.dataRef.value);
      return Q(g.value, { [0]: () => O.compare(K(O.value.value), K(N)), [1]: () => K(O.value.value).some((D) => O.compare(K(D), K(N))) });
    });
    L !== -1 && (v.value = L), o.value = 0;
  }, goToOption(L, M, N) {
    if (y.value = !1, e.disabled || c.value && !f.value.static && o.value === 1)
      return;
    let D = w();
    if (D.activeOptionIndex === null) {
      let ee = D.options.findIndex((ge) => !ge.dataRef.disabled);
      ee !== -1 && (D.activeOptionIndex = ee);
    }
    let F = Ul(L === ce.Specific ? { focus: ce.Specific, id: M } : { focus: L }, { resolveItems: () => D.options, resolveActiveIndex: () => D.activeOptionIndex, resolveId: (ee) => ee.id, resolveDisabled: (ee) => ee.dataRef.disabled });
    v.value = F, V.value = N ?? 1, d.value = D.options;
  }, selectOption(L) {
    let M = d.value.find((D) => D.id === L);
    if (!M)
      return;
    let { dataRef: N } = M;
    C(Q(g.value, { [0]: () => N.value, [1]: () => {
      let D = K(O.value.value).slice(), F = K(N.value), ee = D.findIndex((ge) => O.compare(F, K(ge)));
      return ee === -1 ? D.push(F) : D.splice(ee, 1), D;
    } }));
  }, selectActiveOption() {
    if (O.activeOptionIndex.value === null)
      return;
    let { dataRef: L, id: M } = d.value[O.activeOptionIndex.value];
    C(Q(g.value, { [0]: () => L.value, [1]: () => {
      let N = K(O.value.value).slice(), D = K(L.value), F = N.findIndex((ee) => O.compare(D, K(ee)));
      return F === -1 ? N.push(D) : N.splice(F, 1), N;
    } })), O.goToOption(ce.Specific, M);
  }, registerOption(L, M) {
    let N = { id: L, dataRef: M }, D = w((F) => [...F, N]);
    if (v.value === null) {
      let F = M.value.value;
      Q(g.value, { [0]: () => O.compare(K(O.value.value), K(F)), [1]: () => K(O.value.value).some((ee) => O.compare(K(ee), K(F))) }) && (D.activeOptionIndex = D.options.indexOf(N));
    }
    d.value = D.options, v.value = D.activeOptionIndex, V.value = 1;
  }, unregisterOption(L) {
    var M;
    O.activeOptionIndex.value !== null && ((M = O.options.value[O.activeOptionIndex.value]) == null ? void 0 : M.id) === L && (y.value = !0);
    let N = w((D) => {
      let F = D.findIndex((ee) => ee.id === L);
      return F !== -1 && D.splice(F, 1), D;
    });
    d.value = N.options, v.value = N.activeOptionIndex, V.value = 1;
  } };
  _t([i, p, c], () => O.closeCombobox(), S(() => o.value === 0)), ie(vo, O), Qe(S(() => Q(o.value, { [0]: Y.Open, [1]: Y.Closed })));
  let j = S(() => O.activeOptionIndex.value === null ? null : d.value[O.activeOptionIndex.value].dataRef.value), I = S(() => {
    var L;
    return (L = P(i)) == null ? void 0 : L.closest("form");
  });
  return H(() => {
    U([I], () => {
      if (!I.value || e.defaultValue === void 0)
        return;
      function L() {
        O.change(e.defaultValue);
      }
      return I.value.addEventListener("reset", L), () => {
        var M;
        (M = I.value) == null || M.removeEventListener("reset", L);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: L, disabled: M, ...N } = e, D = { open: o.value === 0, disabled: M, activeIndex: O.activeOptionIndex.value, activeOption: j.value, value: $.value };
    return J(B, [...L != null && $.value != null ? St({ [L]: $.value }).map(([F, ee]) => J(we, kt({ features: xe.Hidden, key: F, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: F, value: ee }))) : [], G({ theirProps: { ...l, ...De(N, ["modelValue", "defaultValue", "nullable", "multiple", "onUpdate:modelValue", "by"]) }, ourProps: {}, slot: D, slots: t, attrs: l, name: "Combobox" })]);
  };
} }), rn = W({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-combobox-label-${oe()}` } }, setup(e, { attrs: t, slots: l }) {
  let n = je("ComboboxLabel");
  function o() {
    var a;
    (a = P(n.inputRef)) == null || a.focus({ preventScroll: !0 });
  }
  return () => {
    let a = { open: n.comboboxState.value === 0, disabled: n.disabled.value }, { id: i, ...p } = e, c = { id: i, ref: n.labelRef, onClick: o };
    return G({ ourProps: c, theirProps: p, slot: a, attrs: t, slots: l, name: "ComboboxLabel" });
  };
} }), un = W({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-combobox-button-${oe()}` } }, setup(e, { attrs: t, slots: l, expose: n }) {
  let o = je("ComboboxButton");
  n({ el: o.buttonRef, $el: o.buttonRef });
  function a(c) {
    o.disabled.value || (o.comboboxState.value === 0 ? o.closeCombobox() : (c.preventDefault(), o.openCombobox()), Ve(() => {
      var f;
      return (f = P(o.inputRef)) == null ? void 0 : f.focus({ preventScroll: !0 });
    }));
  }
  function i(c) {
    switch (c.key) {
      case z.ArrowDown:
        c.preventDefault(), c.stopPropagation(), o.comboboxState.value === 1 && o.openCombobox(), Ve(() => {
          var f;
          return (f = o.inputRef.value) == null ? void 0 : f.focus({ preventScroll: !0 });
        });
        return;
      case z.ArrowUp:
        c.preventDefault(), c.stopPropagation(), o.comboboxState.value === 1 && (o.openCombobox(), Ve(() => {
          o.value.value || o.goToOption(ce.Last);
        })), Ve(() => {
          var f;
          return (f = o.inputRef.value) == null ? void 0 : f.focus({ preventScroll: !0 });
        });
        return;
      case z.Escape:
        if (o.comboboxState.value !== 0)
          return;
        c.preventDefault(), o.optionsRef.value && !o.optionsPropsRef.value.static && c.stopPropagation(), o.closeCombobox(), Ve(() => {
          var f;
          return (f = o.inputRef.value) == null ? void 0 : f.focus({ preventScroll: !0 });
        });
        return;
    }
  }
  let p = Ye(S(() => ({ as: e.as, type: t.type })), o.buttonRef);
  return () => {
    var c, f;
    let d = { open: o.comboboxState.value === 0, disabled: o.disabled.value, value: o.value.value }, { id: v, ...V } = e, y = { ref: o.buttonRef, id: v, type: p.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (c = P(o.optionsRef)) == null ? void 0 : c.id, "aria-expanded": o.disabled.value ? void 0 : o.comboboxState.value === 0, "aria-labelledby": o.labelRef.value ? [(f = P(o.labelRef)) == null ? void 0 : f.id, v].join(" ") : void 0, disabled: o.disabled.value === !0 ? !0 : void 0, onKeydown: i, onClick: a };
    return G({ ourProps: y, theirProps: V, slot: d, attrs: t, slots: l, name: "ComboboxButton" });
  };
} }), pn = W({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: () => `headlessui-combobox-input-${oe()}` } }, emits: { change: (e) => !0 }, setup(e, { emit: t, attrs: l, slots: n, expose: o }) {
  let a = je("ComboboxInput"), i = { value: !1 };
  o({ el: a.inputRef, $el: a.inputRef });
  let p = S(() => {
    var g;
    let x = a.value.value;
    return P(a.inputRef) ? typeof e.displayValue < "u" && x !== void 0 ? (g = e.displayValue(x)) != null ? g : "" : typeof x == "string" ? x : "" : "";
  });
  H(() => {
    U([p, a.comboboxState], ([g, x], [$, C]) => {
      if (i.value)
        return;
      let O = P(a.inputRef);
      O && (C === 0 && x === 1 || g !== $) && (O.value = g);
    }, { immediate: !0 }), U([a.comboboxState], ([g], [x]) => {
      if (g === 0 && x === 1) {
        let $ = P(a.inputRef);
        if (!$)
          return;
        let C = $.value, { selectionStart: O, selectionEnd: j, selectionDirection: I } = $;
        $.value = "", $.value = C, I !== null ? $.setSelectionRange(O, j, I) : $.setSelectionRange(O, j);
      }
    });
  });
  let c = k(!1);
  function f() {
    c.value = !0;
  }
  function d() {
    setTimeout(() => {
      c.value = !1;
    });
  }
  function v(g) {
    switch (i.value = !0, g.key) {
      case z.Backspace:
      case z.Delete:
        if (a.mode.value !== 0 || !a.nullable.value)
          return;
        let x = g.currentTarget;
        requestAnimationFrame(() => {
          if (x.value === "") {
            a.change(null);
            let $ = P(a.optionsRef);
            $ && ($.scrollTop = 0), a.goToOption(ce.Nothing);
          }
        });
        break;
      case z.Enter:
        if (i.value = !1, a.comboboxState.value !== 0 || c.value)
          return;
        if (g.preventDefault(), g.stopPropagation(), a.activeOptionIndex.value === null) {
          a.closeCombobox();
          return;
        }
        a.selectActiveOption(), a.mode.value === 0 && a.closeCombobox();
        break;
      case z.ArrowDown:
        return i.value = !1, g.preventDefault(), g.stopPropagation(), Q(a.comboboxState.value, { [0]: () => a.goToOption(ce.Next), [1]: () => a.openCombobox() });
      case z.ArrowUp:
        return i.value = !1, g.preventDefault(), g.stopPropagation(), Q(a.comboboxState.value, { [0]: () => a.goToOption(ce.Previous), [1]: () => {
          a.openCombobox(), Ve(() => {
            a.value.value || a.goToOption(ce.Last);
          });
        } });
      case z.Home:
        if (g.shiftKey)
          break;
        return i.value = !1, g.preventDefault(), g.stopPropagation(), a.goToOption(ce.First);
      case z.PageUp:
        return i.value = !1, g.preventDefault(), g.stopPropagation(), a.goToOption(ce.First);
      case z.End:
        if (g.shiftKey)
          break;
        return i.value = !1, g.preventDefault(), g.stopPropagation(), a.goToOption(ce.Last);
      case z.PageDown:
        return i.value = !1, g.preventDefault(), g.stopPropagation(), a.goToOption(ce.Last);
      case z.Escape:
        if (i.value = !1, a.comboboxState.value !== 0)
          return;
        g.preventDefault(), a.optionsRef.value && !a.optionsPropsRef.value.static && g.stopPropagation(), a.closeCombobox();
        break;
      case z.Tab:
        if (i.value = !1, a.comboboxState.value !== 0)
          return;
        a.mode.value === 0 && a.selectActiveOption(), a.closeCombobox();
        break;
    }
  }
  function V(g) {
    a.openCombobox(), t("change", g);
  }
  function y() {
    i.value = !1;
  }
  let w = S(() => {
    var g, x, $, C;
    return (C = ($ = (x = e.defaultValue) != null ? x : a.defaultValue.value !== void 0 ? (g = e.displayValue) == null ? void 0 : g.call(e, a.defaultValue.value) : null) != null ? $ : a.defaultValue.value) != null ? C : "";
  });
  return () => {
    var g, x, $, C, O, j;
    let I = { open: a.comboboxState.value === 0 }, { id: L, displayValue: M, onChange: N, ...D } = e, F = { "aria-controls": (g = a.optionsRef.value) == null ? void 0 : g.id, "aria-expanded": a.disabled.value ? void 0 : a.comboboxState.value === 0, "aria-activedescendant": a.activeOptionIndex.value === null || (x = a.options.value[a.activeOptionIndex.value]) == null ? void 0 : x.id, "aria-labelledby": (O = ($ = P(a.labelRef)) == null ? void 0 : $.id) != null ? O : (C = P(a.buttonRef)) == null ? void 0 : C.id, "aria-autocomplete": "list", id: L, onCompositionstart: f, onCompositionend: d, onKeydown: v, onInput: V, onBlur: y, role: "combobox", type: (j = l.type) != null ? j : "text", tabIndex: 0, ref: a.inputRef, defaultValue: w.value };
    return G({ ourProps: F, theirProps: D, slot: I, attrs: l, slots: n, features: fe.RenderStrategy | fe.Static, name: "ComboboxInput" });
  };
} }), cn = W({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, hold: { type: [Boolean], default: !1 } }, setup(e, { attrs: t, slots: l, expose: n }) {
  let o = je("ComboboxOptions"), a = `headlessui-combobox-options-${oe()}`;
  n({ el: o.optionsRef, $el: o.optionsRef }), ne(() => {
    o.optionsPropsRef.value.static = e.static;
  }), ne(() => {
    o.optionsPropsRef.value.hold = e.hold;
  });
  let i = Be(), p = S(() => i !== null ? (i.value & Y.Open) === Y.Open : o.comboboxState.value === 0);
  return ro({ container: S(() => P(o.optionsRef)), enabled: S(() => o.comboboxState.value === 0), accept(c) {
    return c.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : c.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(c) {
    c.setAttribute("role", "none");
  } }), () => {
    var c, f, d;
    let v = { open: o.comboboxState.value === 0 }, V = { "aria-labelledby": (d = (c = P(o.labelRef)) == null ? void 0 : c.id) != null ? d : (f = P(o.buttonRef)) == null ? void 0 : f.id, id: a, ref: o.optionsRef, role: "listbox", "aria-multiselectable": o.mode.value === 1 ? !0 : void 0 }, y = De(e, ["hold"]);
    return G({ ourProps: V, theirProps: y, slot: v, attrs: t, slots: l, features: fe.RenderStrategy | fe.Static, visible: p.value, name: "ComboboxOptions" });
  };
} }), dn = W({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: l, expose: n }) {
  let o = je("ComboboxOption"), a = `headlessui-combobox-option-${oe()}`, i = k(null);
  n({ el: i, $el: i });
  let p = S(() => o.activeOptionIndex.value !== null ? o.options.value[o.activeOptionIndex.value].id === a : !1), c = S(() => Q(o.mode.value, { [0]: () => o.compare(K(o.value.value), K(e.value)), [1]: () => K(o.value.value).some((x) => o.compare(K(x), K(e.value))) })), f = S(() => ({ disabled: e.disabled, value: e.value, domRef: i }));
  H(() => o.registerOption(a, f)), ue(() => o.unregisterOption(a)), ne(() => {
    o.comboboxState.value === 0 && p.value && o.activationTrigger.value !== 0 && Ve(() => {
      var x, $;
      return ($ = (x = P(i)) == null ? void 0 : x.scrollIntoView) == null ? void 0 : $.call(x, { block: "nearest" });
    });
  });
  function d(x) {
    if (e.disabled)
      return x.preventDefault();
    o.selectOption(a), o.mode.value === 0 && o.closeCombobox(), tn() || requestAnimationFrame(() => {
      var $;
      return ($ = P(o.inputRef)) == null ? void 0 : $.focus();
    });
  }
  function v() {
    if (e.disabled)
      return o.goToOption(ce.Nothing);
    o.goToOption(ce.Specific, a);
  }
  let V = Xl();
  function y(x) {
    V.update(x);
  }
  function w(x) {
    V.wasMoved(x) && (e.disabled || p.value || o.goToOption(ce.Specific, a, 0));
  }
  function g(x) {
    V.wasMoved(x) && (e.disabled || p.value && (o.optionsPropsRef.value.hold || o.goToOption(ce.Nothing)));
  }
  return () => {
    let { disabled: x } = e, $ = { active: p.value, selected: c.value, disabled: x }, C = { id: a, ref: i, role: "option", tabIndex: x === !0 ? void 0 : -1, "aria-disabled": x === !0 ? !0 : void 0, "aria-selected": c.value, disabled: void 0, onClick: d, onFocus: v, onPointerenter: y, onMouseenter: y, onPointermove: w, onMousemove: w, onPointerleave: g, onMouseleave: g };
    return G({ ourProps: C, theirProps: e, slot: $, attrs: l, slots: t, name: "ComboboxOption" });
  };
} });
function fn(e, t, l) {
  Re.isServer || ne((n) => {
    window.addEventListener(e, t, l), n(() => window.removeEventListener(e, t, l));
  });
}
var he = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(he || {});
function Ot() {
  let e = k(0);
  return fn("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Et(e, t, l, n) {
  Re.isServer || ne((o) => {
    e = e ?? window, e.addEventListener(t, l, n), o(() => e.removeEventListener(t, l, n));
  });
}
function mo(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function ho(e) {
  if (!e)
    return /* @__PURE__ */ new Set();
  if (typeof e == "function")
    return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let l of e.value) {
    let n = P(l);
    n instanceof HTMLElement && t.add(n);
  }
  return t;
}
var bo = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(bo || {});
let Ne = Object.assign(W({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: k(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: l, expose: n }) {
  let o = k(null);
  n({ el: o, $el: o });
  let a = S(() => be(o)), i = k(!1);
  H(() => i.value = !0), ue(() => i.value = !1), mn({ ownerDocument: a }, S(() => i.value && Boolean(e.features & 16)));
  let p = hn({ ownerDocument: a, container: o, initialFocus: S(() => e.initialFocus) }, S(() => i.value && Boolean(e.features & 2)));
  bn({ ownerDocument: a, container: o, containers: e.containers, previousActiveElement: p }, S(() => i.value && Boolean(e.features & 8)));
  let c = Ot();
  function f(y) {
    let w = P(o);
    w && ((g) => g())(() => {
      Q(c.value, { [he.Forwards]: () => {
        me(w, ae.First, { skipElements: [y.relatedTarget] });
      }, [he.Backwards]: () => {
        me(w, ae.Last, { skipElements: [y.relatedTarget] });
      } });
    });
  }
  let d = k(!1);
  function v(y) {
    y.key === "Tab" && (d.value = !0, requestAnimationFrame(() => {
      d.value = !1;
    }));
  }
  function V(y) {
    if (!i.value)
      return;
    let w = ho(e.containers);
    P(o) instanceof HTMLElement && w.add(P(o));
    let g = y.relatedTarget;
    g instanceof HTMLElement && g.dataset.headlessuiFocusGuard !== "true" && (go(w, g) || (d.value ? me(P(o), Q(c.value, { [he.Forwards]: () => ae.Next, [he.Backwards]: () => ae.Previous }) | ae.WrapAround, { relativeTo: y.target }) : y.target instanceof HTMLElement && Le(y.target)));
  }
  return () => {
    let y = {}, w = { ref: o, onKeydown: v, onFocusout: V }, { features: g, initialFocus: x, containers: $, ...C } = e;
    return J(B, [Boolean(g & 4) && J(we, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: xe.Focusable }), G({ ourProps: w, theirProps: { ...t, ...C }, slot: y, attrs: t, slots: l, name: "FocusTrap" }), Boolean(g & 4) && J(we, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: xe.Focusable })]);
  };
} }), { features: bo }), Pe = [];
if (typeof window < "u" && typeof document < "u") {
  let e = function(t) {
    t.target instanceof HTMLElement && t.target !== document.body && Pe[0] !== t.target && (Pe.unshift(t.target), Pe = Pe.filter((l) => l != null && l.isConnected), Pe.splice(10));
  };
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
}
function vn(e) {
  let t = k(Pe.slice());
  return U([e], ([l], [n]) => {
    n === !0 && l === !1 ? mo(() => {
      t.value.splice(0);
    }) : n === !1 && l === !0 && (t.value = Pe.slice());
  }, { flush: "post" }), () => {
    var l;
    return (l = t.value.find((n) => n != null && n.isConnected)) != null ? l : null;
  };
}
function mn({ ownerDocument: e }, t) {
  let l = vn(t);
  H(() => {
    ne(() => {
      var n, o;
      t.value || ((n = e.value) == null ? void 0 : n.activeElement) === ((o = e.value) == null ? void 0 : o.body) && Le(l());
    }, { flush: "post" });
  }), ue(() => {
    Le(l());
  });
}
function hn({ ownerDocument: e, container: t, initialFocus: l }, n) {
  let o = k(null), a = k(!1);
  return H(() => a.value = !0), ue(() => a.value = !1), H(() => {
    U([t, l, n], (i, p) => {
      if (i.every((f, d) => (p == null ? void 0 : p[d]) === f) || !n.value)
        return;
      let c = P(t);
      c && mo(() => {
        var f, d;
        if (!a.value)
          return;
        let v = P(l), V = (f = e.value) == null ? void 0 : f.activeElement;
        if (v) {
          if (v === V) {
            o.value = V;
            return;
          }
        } else if (c.contains(V)) {
          o.value = V;
          return;
        }
        v ? Le(v) : me(c, ae.First | ae.NoScroll) === Te.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), o.value = (d = e.value) == null ? void 0 : d.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), o;
}
function bn({ ownerDocument: e, container: t, containers: l, previousActiveElement: n }, o) {
  var a;
  Et((a = e.value) == null ? void 0 : a.defaultView, "focus", (i) => {
    if (!o.value)
      return;
    let p = ho(l);
    P(t) instanceof HTMLElement && p.add(P(t));
    let c = n.value;
    if (!c)
      return;
    let f = i.target;
    f && f instanceof HTMLElement ? go(p, f) ? (n.value = f, Le(f)) : (i.preventDefault(), i.stopPropagation(), Le(c)) : Le(n.value);
  }, !0);
}
function go(e, t) {
  for (let l of e)
    if (l.contains(t))
      return !0;
  return !1;
}
let ut = /* @__PURE__ */ new Map(), Ae = /* @__PURE__ */ new Map();
function Gt(e, t = k(!0)) {
  ne((l) => {
    var n;
    if (!t.value)
      return;
    let o = P(e);
    if (!o)
      return;
    l(function() {
      var i;
      if (!o)
        return;
      let p = (i = Ae.get(o)) != null ? i : 1;
      if (p === 1 ? Ae.delete(o) : Ae.set(o, p - 1), p !== 1)
        return;
      let c = ut.get(o);
      c && (c["aria-hidden"] === null ? o.removeAttribute("aria-hidden") : o.setAttribute("aria-hidden", c["aria-hidden"]), o.inert = c.inert, ut.delete(o));
    });
    let a = (n = Ae.get(o)) != null ? n : 0;
    Ae.set(o, a + 1), a === 0 && (ut.set(o, { "aria-hidden": o.getAttribute("aria-hidden"), inert: o.inert }), o.setAttribute("aria-hidden", "true"), o.inert = !0);
  });
}
let yo = Symbol("ForcePortalRootContext");
function gn() {
  return se(yo, !1);
}
let vt = W({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: l }) {
  return ie(yo, e.force), () => {
    let { force: n, ...o } = e;
    return G({ theirProps: o, ourProps: {}, slot: {}, slots: t, attrs: l, name: "ForcePortalRoot" });
  };
} });
function yn(e) {
  let t = be(e);
  if (!t) {
    if (e === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let l = t.getElementById("headlessui-portal-root");
  if (l)
    return l;
  let n = t.createElement("div");
  return n.setAttribute("id", "headlessui-portal-root"), t.body.appendChild(n);
}
let xo = W({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: l }) {
  let n = k(null), o = S(() => be(n)), a = gn(), i = se(wo, null), p = k(a === !0 || i == null ? yn(n.value) : i.resolveTarget());
  return ne(() => {
    a || i != null && (p.value = i.resolveTarget());
  }), ue(() => {
    var c, f;
    let d = (c = o.value) == null ? void 0 : c.getElementById("headlessui-portal-root");
    d && p.value === d && p.value.children.length <= 0 && ((f = p.value.parentElement) == null || f.removeChild(p.value));
  }), () => {
    if (p.value === null)
      return null;
    let c = { ref: n, "data-headlessui-portal": "" };
    return J(Ze, { to: p.value }, G({ ourProps: c, theirProps: e, slot: {}, attrs: l, slots: t, name: "Portal" }));
  };
} }), wo = Symbol("PortalGroupContext"), xn = W({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: l }) {
  let n = Yo({ resolveTarget() {
    return e.target;
  } });
  return ie(wo, n), () => {
    let { target: o, ...a } = e;
    return G({ theirProps: a, ourProps: {}, slot: {}, attrs: t, slots: l, name: "PortalGroup" });
  };
} }), Vo = Symbol("StackContext");
var mt = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(mt || {});
function wn() {
  return se(Vo, () => {
  });
}
function Vn({ type: e, enabled: t, element: l, onUpdate: n }) {
  let o = wn();
  function a(...i) {
    n == null || n(...i), o(...i);
  }
  H(() => {
    U(t, (i, p) => {
      i ? a(0, e, l) : p === !0 && a(1, e, l);
    }, { immediate: !0, flush: "sync" });
  }), ue(() => {
    t.value && a(1, e, l);
  }), ie(Vo, a);
}
let ko = Symbol("DescriptionContext");
function kn() {
  let e = se(ko, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function Xe({ slot: e = k({}), name: t = "Description", props: l = {} } = {}) {
  let n = k([]);
  function o(a) {
    return n.value.push(a), () => {
      let i = n.value.indexOf(a);
      i !== -1 && n.value.splice(i, 1);
    };
  }
  return ie(ko, { register: o, slot: e, name: t, props: l }), S(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
let $n = W({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${oe()}` } }, setup(e, { attrs: t, slots: l }) {
  let n = kn();
  return H(() => ue(n.register(e.id))), () => {
    let { name: o = "Description", slot: a = k({}), props: i = {} } = n, { id: p, ...c } = e, f = { ...Object.entries(i).reduce((d, [v, V]) => Object.assign(d, { [v]: b(V) }), {}), id: p };
    return G({ ourProps: f, theirProps: c, slot: a.value, attrs: t, slots: l, name: o });
  };
} });
function Cn(e) {
  let t = oo(e.getSnapshot());
  return ue(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function et() {
  let e = [], t = { addEventListener(l, n, o, a) {
    return l.addEventListener(n, o, a), t.add(() => l.removeEventListener(n, o, a));
  }, requestAnimationFrame(...l) {
    let n = requestAnimationFrame(...l);
    t.add(() => cancelAnimationFrame(n));
  }, nextFrame(...l) {
    t.requestAnimationFrame(() => {
      t.requestAnimationFrame(...l);
    });
  }, setTimeout(...l) {
    let n = setTimeout(...l);
    t.add(() => clearTimeout(n));
  }, style(l, n, o) {
    let a = l.style.getPropertyValue(n);
    return Object.assign(l.style, { [n]: o }), this.add(() => {
      Object.assign(l.style, { [n]: a });
    });
  }, group(l) {
    let n = et();
    return l(n), this.add(() => n.dispose());
  }, add(l) {
    return e.push(l), () => {
      let n = e.indexOf(l);
      if (n >= 0)
        for (let o of e.splice(n, 1))
          o();
    };
  }, dispose() {
    for (let l of e.splice(0))
      l();
  } };
  return t;
}
function _n(e, t) {
  let l = e(), n = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return l;
  }, subscribe(o) {
    return n.add(o), () => n.delete(o);
  }, dispatch(o, ...a) {
    let i = t[o].call(l, ...a);
    i && (l = i, n.forEach((p) => p()));
  } };
}
function Sn() {
  let e;
  return { before({ doc: t }) {
    var l;
    let n = t.documentElement;
    e = ((l = t.defaultView) != null ? l : window).innerWidth - n.clientWidth;
  }, after({ doc: t, d: l }) {
    let n = t.documentElement, o = n.clientWidth - n.offsetWidth, a = e - o;
    l.style(n, "paddingRight", `${a}px`);
  } };
}
function Pn() {
  if (!fo())
    return {};
  let e;
  return { before() {
    e = window.pageYOffset;
  }, after({ doc: t, d: l, meta: n }) {
    function o(i) {
      return n.containers.flatMap((p) => p()).some((p) => p.contains(i));
    }
    l.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
    let a = null;
    l.addEventListener(t, "click", (i) => {
      if (i.target instanceof HTMLElement)
        try {
          let p = i.target.closest("a");
          if (!p)
            return;
          let { hash: c } = new URL(p.href), f = t.querySelector(c);
          f && !o(f) && (a = f);
        } catch {
        }
    }, !0), l.addEventListener(t, "touchmove", (i) => {
      i.target instanceof HTMLElement && !o(i.target) && i.preventDefault();
    }, { passive: !1 }), l.add(() => {
      window.scrollTo(0, window.pageYOffset + e), a && a.isConnected && (a.scrollIntoView({ block: "nearest" }), a = null);
    });
  } };
}
function On() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function En(e) {
  let t = {};
  for (let l of e)
    Object.assign(t, l(t));
  return t;
}
let Oe = _n(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var l;
  let n = (l = this.get(e)) != null ? l : { doc: e, count: 0, d: et(), meta: /* @__PURE__ */ new Set() };
  return n.count++, n.meta.add(t), this.set(e, n), this;
}, POP(e, t) {
  let l = this.get(e);
  return l && (l.count--, l.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: l }) {
  let n = { doc: e, d: t, meta: En(l) }, o = [Pn(), Sn(), On()];
  o.forEach(({ before: a }) => a == null ? void 0 : a(n)), o.forEach(({ after: a }) => a == null ? void 0 : a(n));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
Oe.subscribe(() => {
  let e = Oe.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [l] of e)
    t.set(l, l.documentElement.style.overflow);
  for (let l of e.values()) {
    let n = t.get(l.doc) === "hidden", o = l.count !== 0;
    (o && !n || !o && n) && Oe.dispatch(l.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", l), l.count === 0 && Oe.dispatch("TEARDOWN", l);
  }
});
function Ln(e, t, l) {
  let n = Cn(Oe), o = S(() => {
    let a = e.value ? n.value.get(e.value) : void 0;
    return a ? a.count > 0 : !1;
  });
  return U([e, t], ([a, i], [p], c) => {
    if (!a || !i)
      return;
    Oe.dispatch("PUSH", a, l);
    let f = !1;
    c(() => {
      f || (Oe.dispatch("POP", p ?? a, l), f = !0);
    });
  }, { immediate: !0 }), o;
}
var Tn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Tn || {});
let ht = Symbol("DialogContext");
function Fe(e) {
  let t = se(ht, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, Fe), l;
  }
  return t;
}
let Ue = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", tt = W({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Ue }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${oe()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: l, slots: n, expose: o }) {
  var a;
  let i = k(!1);
  H(() => {
    i.value = !0;
  });
  let p = k(0), c = Be(), f = S(() => e.open === Ue && c !== null ? (c.value & Y.Open) === Y.Open : e.open), d = k(null), v = k(null), V = S(() => be(d));
  if (o({ el: d, $el: d }), !(e.open !== Ue || c !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof f.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${f.value === Ue ? void 0 : e.open}`);
  let y = S(() => i.value && f.value ? 0 : 1), w = S(() => y.value === 0), g = S(() => p.value > 1), x = se(ht, null) !== null, $ = S(() => g.value ? "parent" : "leaf"), C = S(() => c !== null ? (c.value & Y.Closing) === Y.Closing : !1), O = S(() => x || C.value ? !1 : w.value), j = S(() => {
    var q, Z, le;
    return (le = Array.from((Z = (q = V.value) == null ? void 0 : q.querySelectorAll("body > *")) != null ? Z : []).find((pe) => pe.id === "headlessui-portal-root" ? !1 : pe.contains(P(v)) && pe instanceof HTMLElement)) != null ? le : null;
  });
  Gt(j, O);
  let I = S(() => g.value ? !0 : w.value), L = S(() => {
    var q, Z, le;
    return (le = Array.from((Z = (q = V.value) == null ? void 0 : q.querySelectorAll("[data-headlessui-portal]")) != null ? Z : []).find((pe) => pe.contains(P(v)) && pe instanceof HTMLElement)) != null ? le : null;
  });
  Gt(L, I), Vn({ type: "Dialog", enabled: S(() => y.value === 0), element: d, onUpdate: (q, Z) => {
    if (Z === "Dialog")
      return Q(q, { [mt.Add]: () => p.value += 1, [mt.Remove]: () => p.value -= 1 });
  } });
  let M = Xe({ name: "DialogDescription", slot: S(() => ({ open: f.value })) }), N = k(null), D = { titleId: N, panelRef: k(null), dialogState: y, setTitleId(q) {
    N.value !== q && (N.value = q);
  }, close() {
    t("close", !1);
  } };
  ie(ht, D);
  function F() {
    var q, Z, le;
    return [...Array.from((Z = (q = V.value) == null ? void 0 : q.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? Z : []).filter((pe) => !(pe === document.body || pe === document.head || !(pe instanceof HTMLElement) || pe.contains(P(v)) || D.panelRef.value && pe.contains(D.panelRef.value))), (le = D.panelRef.value) != null ? le : d.value];
  }
  let ee = S(() => !(!w.value || g.value));
  _t(() => F(), (q, Z) => {
    D.close(), Ve(() => Z == null ? void 0 : Z.focus());
  }, ee);
  let ge = S(() => !(g.value || y.value !== 0));
  Et((a = V.value) == null ? void 0 : a.defaultView, "keydown", (q) => {
    ge.value && (q.defaultPrevented || q.key === z.Escape && (q.preventDefault(), q.stopPropagation(), D.close()));
  });
  let ve = S(() => !(C.value || y.value !== 0 || x));
  return Ln(V, ve, (q) => {
    var Z;
    return { containers: [...(Z = q.containers) != null ? Z : [], F] };
  }), ne((q) => {
    if (y.value !== 0)
      return;
    let Z = P(d);
    if (!Z)
      return;
    let le = new ResizeObserver((pe) => {
      for (let qe of pe) {
        let _e = qe.target.getBoundingClientRect();
        _e.x === 0 && _e.y === 0 && _e.width === 0 && _e.height === 0 && D.close();
      }
    });
    le.observe(Z), q(() => le.disconnect());
  }), () => {
    let { id: q, open: Z, initialFocus: le, ...pe } = e, qe = { ...l, ref: d, id: q, role: "dialog", "aria-modal": y.value === 0 ? !0 : void 0, "aria-labelledby": N.value, "aria-describedby": M.value }, _e = { open: y.value === 0 };
    return J(vt, { force: !0 }, () => [J(xo, () => J(xn, { target: d.value }, () => J(vt, { force: !1 }, () => J(Ne, { initialFocus: le, containers: F, features: w.value ? Q($.value, { parent: Ne.features.RestoreFocus, leaf: Ne.features.All & ~Ne.features.FocusLock }) : Ne.features.None }, () => G({ ourProps: qe, theirProps: pe, slot: _e, attrs: l, slots: n, visible: y.value === 0, features: fe.RenderStrategy | fe.Static, name: "Dialog" }))))), J(we, { features: xe.Hidden, ref: v })]);
  };
} });
W({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${oe()}` } }, setup(e, { attrs: t, slots: l }) {
  let n = Fe("DialogOverlay");
  function o(a) {
    a.target === a.currentTarget && (a.preventDefault(), a.stopPropagation(), n.close());
  }
  return () => {
    let { id: a, ...i } = e;
    return G({ ourProps: { id: a, "aria-hidden": !0, onClick: o }, theirProps: i, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogOverlay" });
  };
} });
W({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${oe()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: l, expose: n }) {
  let o = Fe("DialogBackdrop"), a = k(null);
  return n({ el: a, $el: a }), H(() => {
    if (o.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: i, ...p } = e, c = { id: i, ref: a, "aria-hidden": !0 };
    return J(vt, { force: !0 }, () => J(xo, () => G({ ourProps: c, theirProps: { ...t, ...p }, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogBackdrop" })));
  };
} });
let ot = W({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${oe()}` } }, setup(e, { attrs: t, slots: l, expose: n }) {
  let o = Fe("DialogPanel");
  n({ el: o.panelRef, $el: o.panelRef });
  function a(i) {
    i.stopPropagation();
  }
  return () => {
    let { id: i, ...p } = e, c = { id: i, ref: o.panelRef, onClick: a };
    return G({ ourProps: c, theirProps: p, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogPanel" });
  };
} }), $o = W({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${oe()}` } }, setup(e, { attrs: t, slots: l }) {
  let n = Fe("DialogTitle");
  return H(() => {
    n.setTitleId(e.id), ue(() => n.setTitleId(null));
  }), () => {
    let { id: o, ...a } = e;
    return G({ ourProps: { id: o }, theirProps: a, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogTitle" });
  };
} });
var Bn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Bn || {});
let Co = Symbol("DisclosureContext");
function Lt(e) {
  let t = se(Co, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, Lt), l;
  }
  return t;
}
let _o = Symbol("DisclosurePanelContext");
function Dn() {
  return se(_o, null);
}
let Zt = W({ name: "Disclosure", props: { as: { type: [Object, String], default: "template" }, defaultOpen: { type: [Boolean], default: !1 } }, setup(e, { slots: t, attrs: l }) {
  let n = k(e.defaultOpen ? 0 : 1), o = k(null), a = k(null), i = { buttonId: k(null), panelId: k(null), disclosureState: n, panel: o, button: a, toggleDisclosure() {
    n.value = Q(n.value, { [0]: 1, [1]: 0 });
  }, closeDisclosure() {
    n.value !== 1 && (n.value = 1);
  }, close(p) {
    i.closeDisclosure();
    let c = (() => p ? p instanceof HTMLElement ? p : p.value instanceof HTMLElement ? P(p) : P(i.button) : P(i.button))();
    c == null || c.focus();
  } };
  return ie(Co, i), Qe(S(() => Q(n.value, { [0]: Y.Open, [1]: Y.Closed }))), () => {
    let { defaultOpen: p, ...c } = e, f = { open: n.value === 0, close: i.close };
    return G({ theirProps: c, ourProps: {}, slot: f, slots: t, attrs: l, name: "Disclosure" });
  };
} }), Kt = W({ name: "DisclosureButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-disclosure-button-${oe()}` } }, setup(e, { attrs: t, slots: l, expose: n }) {
  let o = Lt("DisclosureButton");
  H(() => {
    o.buttonId.value = e.id;
  }), ue(() => {
    o.buttonId.value = null;
  });
  let a = Dn(), i = S(() => a === null ? !1 : a.value === o.panelId.value), p = k(null);
  n({ el: p, $el: p }), i.value || ne(() => {
    o.button.value = p.value;
  });
  let c = Ye(S(() => ({ as: e.as, type: t.type })), p);
  function f() {
    var V;
    e.disabled || (i.value ? (o.toggleDisclosure(), (V = P(o.button)) == null || V.focus()) : o.toggleDisclosure());
  }
  function d(V) {
    var y;
    if (!e.disabled)
      if (i.value)
        switch (V.key) {
          case z.Space:
          case z.Enter:
            V.preventDefault(), V.stopPropagation(), o.toggleDisclosure(), (y = P(o.button)) == null || y.focus();
            break;
        }
      else
        switch (V.key) {
          case z.Space:
          case z.Enter:
            V.preventDefault(), V.stopPropagation(), o.toggleDisclosure();
            break;
        }
  }
  function v(V) {
    switch (V.key) {
      case z.Space:
        V.preventDefault();
        break;
    }
  }
  return () => {
    let V = { open: o.disclosureState.value === 0 }, { id: y, ...w } = e, g = i.value ? { ref: p, type: c.value, onClick: f, onKeydown: d } : { id: y, ref: p, type: c.value, "aria-expanded": e.disabled ? void 0 : o.disclosureState.value === 0, "aria-controls": P(o.panel) ? o.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onClick: f, onKeydown: d, onKeyup: v };
    return G({ ourProps: g, theirProps: w, slot: V, attrs: t, slots: l, name: "DisclosureButton" });
  };
} }), Qt = W({ name: "DisclosurePanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-disclosure-panel-${oe()}` } }, setup(e, { attrs: t, slots: l, expose: n }) {
  let o = Lt("DisclosurePanel");
  H(() => {
    o.panelId.value = e.id;
  }), ue(() => {
    o.panelId.value = null;
  }), n({ el: o.panel, $el: o.panel }), ie(_o, o.panelId);
  let a = Be(), i = S(() => a !== null ? (a.value & Y.Open) === Y.Open : o.disclosureState.value === 0);
  return () => {
    let p = { open: o.disclosureState.value === 0, close: o.close }, { id: c, ...f } = e, d = { id: c, ref: o.panel };
    return G({ ourProps: d, theirProps: f, slot: p, attrs: t, slots: l, features: fe.RenderStrategy | fe.Static, visible: i.value, name: "DisclosurePanel" });
  };
} });
var jn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(jn || {});
let So = Symbol("PopoverContext");
function lt(e) {
  let t = se(So, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <${nt.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, lt), l;
  }
  return t;
}
let Po = Symbol("PopoverGroupContext");
function Oo() {
  return se(Po, null);
}
let Eo = Symbol("PopoverPanelContext");
function Nn() {
  return se(Eo, null);
}
let nt = W({ name: "Popover", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: l, expose: n }) {
  var o;
  let a = k(null);
  n({ el: a, $el: a });
  let i = k(1), p = k(null), c = k(null), f = k(null), d = k(null), v = S(() => be(a)), V = S(() => {
    var C, O;
    if (!P(p) || !P(d))
      return !1;
    for (let F of document.querySelectorAll("body > *"))
      if (Number(F == null ? void 0 : F.contains(P(p))) ^ Number(F == null ? void 0 : F.contains(P(d))))
        return !0;
    let j = Je(), I = j.indexOf(P(p)), L = (I + j.length - 1) % j.length, M = (I + 1) % j.length, N = j[L], D = j[M];
    return !((C = P(d)) != null && C.contains(N)) && !((O = P(d)) != null && O.contains(D));
  }), y = { popoverState: i, buttonId: k(null), panelId: k(null), panel: d, button: p, isPortalled: V, beforePanelSentinel: c, afterPanelSentinel: f, togglePopover() {
    i.value = Q(i.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    i.value !== 1 && (i.value = 1);
  }, close(C) {
    y.closePopover();
    let O = (() => C ? C instanceof HTMLElement ? C : C.value instanceof HTMLElement ? P(C) : P(y.button) : P(y.button))();
    O == null || O.focus();
  } };
  ie(So, y), Qe(S(() => Q(i.value, { [0]: Y.Open, [1]: Y.Closed })));
  let w = { buttonId: y.buttonId, panelId: y.panelId, close() {
    y.closePopover();
  } }, g = Oo(), x = g == null ? void 0 : g.registerPopover;
  function $() {
    var C, O, j, I;
    return (I = g == null ? void 0 : g.isFocusWithinPopoverGroup()) != null ? I : ((C = v.value) == null ? void 0 : C.activeElement) && (((O = P(p)) == null ? void 0 : O.contains(v.value.activeElement)) || ((j = P(d)) == null ? void 0 : j.contains(v.value.activeElement)));
  }
  return ne(() => x == null ? void 0 : x(w)), Et((o = v.value) == null ? void 0 : o.defaultView, "focus", (C) => {
    var O, j;
    i.value === 0 && ($() || p && d && C.target !== window && ((O = P(y.beforePanelSentinel)) != null && O.contains(C.target) || (j = P(y.afterPanelSentinel)) != null && j.contains(C.target) || y.closePopover()));
  }, !0), _t([p, d], (C, O) => {
    var j;
    y.closePopover(), io(O, $t.Loose) || (C.preventDefault(), (j = P(p)) == null || j.focus());
  }, S(() => i.value === 0)), () => {
    let C = { open: i.value === 0, close: y.close };
    return G({ theirProps: e, ourProps: { ref: a }, slot: C, slots: t, attrs: l, name: "Popover" });
  };
} }), Tt = W({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-popover-button-${oe()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: l, expose: n }) {
  let o = lt("PopoverButton"), a = S(() => be(o.button));
  n({ el: o.button, $el: o.button }), H(() => {
    o.buttonId.value = e.id;
  }), ue(() => {
    o.buttonId.value = null;
  });
  let i = Oo(), p = i == null ? void 0 : i.closeOthers, c = Nn(), f = S(() => c === null ? !1 : c.value === o.panelId.value), d = k(null), v = `headlessui-focus-sentinel-${oe()}`;
  f.value || ne(() => {
    o.button.value = d.value;
  });
  let V = Ye(S(() => ({ as: e.as, type: t.type })), d);
  function y($) {
    var C, O, j, I, L;
    if (f.value) {
      if (o.popoverState.value === 1)
        return;
      switch ($.key) {
        case z.Space:
        case z.Enter:
          $.preventDefault(), (O = (C = $.target).click) == null || O.call(C), o.closePopover(), (j = P(o.button)) == null || j.focus();
          break;
      }
    } else
      switch ($.key) {
        case z.Space:
        case z.Enter:
          $.preventDefault(), $.stopPropagation(), o.popoverState.value === 1 && (p == null || p(o.buttonId.value)), o.togglePopover();
          break;
        case z.Escape:
          if (o.popoverState.value !== 0)
            return p == null ? void 0 : p(o.buttonId.value);
          if (!P(o.button) || (I = a.value) != null && I.activeElement && !((L = P(o.button)) != null && L.contains(a.value.activeElement)))
            return;
          $.preventDefault(), $.stopPropagation(), o.closePopover();
          break;
      }
  }
  function w($) {
    f.value || $.key === z.Space && $.preventDefault();
  }
  function g($) {
    var C, O;
    e.disabled || (f.value ? (o.closePopover(), (C = P(o.button)) == null || C.focus()) : ($.preventDefault(), $.stopPropagation(), o.popoverState.value === 1 && (p == null || p(o.buttonId.value)), o.togglePopover(), (O = P(o.button)) == null || O.focus()));
  }
  function x($) {
    $.preventDefault(), $.stopPropagation();
  }
  return () => {
    let $ = o.popoverState.value === 0, C = { open: $ }, { id: O, ...j } = e, I = f.value ? { ref: d, type: V.value, onKeydown: y, onClick: g } : { ref: d, id: O, type: V.value, "aria-expanded": e.disabled ? void 0 : o.popoverState.value === 0, "aria-controls": P(o.panel) ? o.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onKeydown: y, onKeyup: w, onClick: g, onMousedown: x }, L = Ot();
    function M() {
      let N = P(o.panel);
      if (!N)
        return;
      function D() {
        Q(L.value, { [he.Forwards]: () => me(N, ae.First), [he.Backwards]: () => me(N, ae.Last) }) === Te.Error && me(Je().filter((F) => F.dataset.headlessuiFocusGuard !== "true"), Q(L.value, { [he.Forwards]: ae.Next, [he.Backwards]: ae.Previous }), { relativeTo: P(o.button) });
      }
      D();
    }
    return J(B, [G({ ourProps: I, theirProps: { ...t, ...j }, slot: C, attrs: t, slots: l, name: "PopoverButton" }), $ && !f.value && o.isPortalled.value && J(we, { id: v, features: xe.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: M })]);
  };
} });
W({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(e, { attrs: t, slots: l }) {
  let n = lt("PopoverOverlay"), o = `headlessui-popover-overlay-${oe()}`, a = Be(), i = S(() => a !== null ? (a.value & Y.Open) === Y.Open : n.popoverState.value === 0);
  function p() {
    n.closePopover();
  }
  return () => {
    let c = { open: n.popoverState.value === 0 };
    return G({ ourProps: { id: o, "aria-hidden": !0, onClick: p }, theirProps: e, slot: c, attrs: t, slots: l, features: fe.RenderStrategy | fe.Static, visible: i.value, name: "PopoverOverlay" });
  };
} });
let Bt = W({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-popover-panel-${oe()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: l, expose: n }) {
  let { focus: o } = e, a = lt("PopoverPanel"), i = S(() => be(a.panel)), p = `headlessui-focus-sentinel-before-${oe()}`, c = `headlessui-focus-sentinel-after-${oe()}`;
  n({ el: a.panel, $el: a.panel }), H(() => {
    a.panelId.value = e.id;
  }), ue(() => {
    a.panelId.value = null;
  }), ie(Eo, a.panelId), ne(() => {
    var x, $;
    if (!o || a.popoverState.value !== 0 || !a.panel)
      return;
    let C = (x = i.value) == null ? void 0 : x.activeElement;
    ($ = P(a.panel)) != null && $.contains(C) || me(P(a.panel), ae.First);
  });
  let f = Be(), d = S(() => f !== null ? (f.value & Y.Open) === Y.Open : a.popoverState.value === 0);
  function v(x) {
    var $, C;
    switch (x.key) {
      case z.Escape:
        if (a.popoverState.value !== 0 || !P(a.panel) || i.value && !(($ = P(a.panel)) != null && $.contains(i.value.activeElement)))
          return;
        x.preventDefault(), x.stopPropagation(), a.closePopover(), (C = P(a.button)) == null || C.focus();
        break;
    }
  }
  function V(x) {
    var $, C, O, j, I;
    let L = x.relatedTarget;
    L && P(a.panel) && (($ = P(a.panel)) != null && $.contains(L) || (a.closePopover(), ((O = (C = P(a.beforePanelSentinel)) == null ? void 0 : C.contains) != null && O.call(C, L) || (I = (j = P(a.afterPanelSentinel)) == null ? void 0 : j.contains) != null && I.call(j, L)) && L.focus({ preventScroll: !0 })));
  }
  let y = Ot();
  function w() {
    let x = P(a.panel);
    if (!x)
      return;
    function $() {
      Q(y.value, { [he.Forwards]: () => {
        var C;
        me(x, ae.First) === Te.Error && ((C = P(a.afterPanelSentinel)) == null || C.focus());
      }, [he.Backwards]: () => {
        var C;
        (C = P(a.button)) == null || C.focus({ preventScroll: !0 });
      } });
    }
    $();
  }
  function g() {
    let x = P(a.panel);
    if (!x)
      return;
    function $() {
      Q(y.value, { [he.Forwards]: () => {
        let C = P(a.button), O = P(a.panel);
        if (!C)
          return;
        let j = Je(), I = j.indexOf(C), L = j.slice(0, I + 1), M = [...j.slice(I + 1), ...L];
        for (let N of M.slice())
          if (N.dataset.headlessuiFocusGuard === "true" || O != null && O.contains(N)) {
            let D = M.indexOf(N);
            D !== -1 && M.splice(D, 1);
          }
        me(M, ae.First, { sorted: !1 });
      }, [he.Backwards]: () => {
        var C;
        me(x, ae.Previous) === Te.Error && ((C = P(a.button)) == null || C.focus());
      } });
    }
    $();
  }
  return () => {
    let x = { open: a.popoverState.value === 0, close: a.close }, { id: $, focus: C, ...O } = e, j = { ref: a.panel, id: $, onKeydown: v, onFocusout: o && a.popoverState.value === 0 ? V : void 0, tabIndex: -1 };
    return G({ ourProps: j, theirProps: { ...t, ...O }, attrs: t, slot: x, slots: { ...l, default: (...I) => {
      var L;
      return [J(B, [d.value && a.isPortalled.value && J(we, { id: p, ref: a.beforePanelSentinel, features: xe.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: w }), (L = l.default) == null ? void 0 : L.call(l, ...I), d.value && a.isPortalled.value && J(we, { id: c, ref: a.afterPanelSentinel, features: xe.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: g })])];
    } }, features: fe.RenderStrategy | fe.Static, visible: d.value, name: "PopoverPanel" });
  };
} });
W({ name: "PopoverGroup", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: l, expose: n }) {
  let o = k(null), a = oo([]), i = S(() => be(o));
  n({ el: o, $el: o });
  function p(v) {
    let V = a.value.indexOf(v);
    V !== -1 && a.value.splice(V, 1);
  }
  function c(v) {
    return a.value.push(v), () => {
      p(v);
    };
  }
  function f() {
    var v;
    let V = i.value;
    if (!V)
      return !1;
    let y = V.activeElement;
    return (v = P(o)) != null && v.contains(y) ? !0 : a.value.some((w) => {
      var g, x;
      return ((g = V.getElementById(w.buttonId.value)) == null ? void 0 : g.contains(y)) || ((x = V.getElementById(w.panelId.value)) == null ? void 0 : x.contains(y));
    });
  }
  function d(v) {
    for (let V of a.value)
      V.buttonId.value !== v && V.close();
  }
  return ie(Po, { registerPopover: c, unregisterPopover: p, isFocusWithinPopoverGroup: f, closeOthers: d }), () => G({ ourProps: { ref: o }, theirProps: e, slot: {}, attrs: t, slots: l, name: "PopoverGroup" });
} });
let Lo = Symbol("LabelContext");
function To() {
  let e = se(Lo, null);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, To), t;
  }
  return e;
}
function Dt({ slot: e = {}, name: t = "Label", props: l = {} } = {}) {
  let n = k([]);
  function o(a) {
    return n.value.push(a), () => {
      let i = n.value.indexOf(a);
      i !== -1 && n.value.splice(i, 1);
    };
  }
  return ie(Lo, { register: o, slot: e, name: t, props: l }), S(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
let Bo = W({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-label-${oe()}` } }, setup(e, { slots: t, attrs: l }) {
  let n = To();
  return H(() => ue(n.register(e.id))), () => {
    let { name: o = "Label", slot: a = {}, props: i = {} } = n, { id: p, passive: c, ...f } = e, d = { ...Object.entries(i).reduce((v, [V, y]) => Object.assign(v, { [V]: b(y) }), {}), id: p };
    return c && (delete d.onClick, delete d.htmlFor, delete f.onClick), G({ ourProps: d, theirProps: f, slot: a, attrs: l, slots: t, name: o });
  };
} });
function An(e, t) {
  return e === t;
}
let Do = Symbol("RadioGroupContext");
function jo(e) {
  let t = se(Do, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, jo), l;
  }
  return t;
}
let Mn = W({ name: "RadioGroup", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "div" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => An }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-radiogroup-${oe()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: l, slots: n, expose: o }) {
  let a = k(null), i = k([]), p = Dt({ name: "RadioGroupLabel" }), c = Xe({ name: "RadioGroupDescription" });
  o({ el: a, $el: a });
  let [f, d] = Pt(S(() => e.modelValue), (w) => t("update:modelValue", w), S(() => e.defaultValue)), v = { options: i, value: f, disabled: S(() => e.disabled), firstOption: S(() => i.value.find((w) => !w.propsRef.disabled)), containsCheckedOption: S(() => i.value.some((w) => v.compare(K(w.propsRef.value), K(e.modelValue)))), compare(w, g) {
    if (typeof e.by == "string") {
      let x = e.by;
      return (w == null ? void 0 : w[x]) === (g == null ? void 0 : g[x]);
    }
    return e.by(w, g);
  }, change(w) {
    var g;
    if (e.disabled || v.compare(K(f.value), K(w)))
      return !1;
    let x = (g = i.value.find(($) => v.compare(K($.propsRef.value), K(w)))) == null ? void 0 : g.propsRef;
    return x != null && x.disabled ? !1 : (d(w), !0);
  }, registerOption(w) {
    i.value.push(w), i.value = Ct(i.value, (g) => g.element);
  }, unregisterOption(w) {
    let g = i.value.findIndex((x) => x.id === w);
    g !== -1 && i.value.splice(g, 1);
  } };
  ie(Do, v), ro({ container: S(() => P(a)), accept(w) {
    return w.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : w.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(w) {
    w.setAttribute("role", "none");
  } });
  function V(w) {
    if (!a.value || !a.value.contains(w.target))
      return;
    let g = i.value.filter((x) => x.propsRef.disabled === !1).map((x) => x.element);
    switch (w.key) {
      case z.Enter:
        co(w.currentTarget);
        break;
      case z.ArrowLeft:
      case z.ArrowUp:
        if (w.preventDefault(), w.stopPropagation(), me(g, ae.Previous | ae.WrapAround) === Te.Success) {
          let x = i.value.find(($) => {
            var C;
            return $.element === ((C = be(a)) == null ? void 0 : C.activeElement);
          });
          x && v.change(x.propsRef.value);
        }
        break;
      case z.ArrowRight:
      case z.ArrowDown:
        if (w.preventDefault(), w.stopPropagation(), me(g, ae.Next | ae.WrapAround) === Te.Success) {
          let x = i.value.find(($) => {
            var C;
            return $.element === ((C = be($.element)) == null ? void 0 : C.activeElement);
          });
          x && v.change(x.propsRef.value);
        }
        break;
      case z.Space:
        {
          w.preventDefault(), w.stopPropagation();
          let x = i.value.find(($) => {
            var C;
            return $.element === ((C = be($.element)) == null ? void 0 : C.activeElement);
          });
          x && v.change(x.propsRef.value);
        }
        break;
    }
  }
  let y = S(() => {
    var w;
    return (w = P(a)) == null ? void 0 : w.closest("form");
  });
  return H(() => {
    U([y], () => {
      if (!y.value || e.defaultValue === void 0)
        return;
      function w() {
        v.change(e.defaultValue);
      }
      return y.value.addEventListener("reset", w), () => {
        var g;
        (g = y.value) == null || g.removeEventListener("reset", w);
      };
    }, { immediate: !0 });
  }), () => {
    let { disabled: w, name: g, id: x, ...$ } = e, C = { ref: a, id: x, role: "radiogroup", "aria-labelledby": p.value, "aria-describedby": c.value, onKeydown: V };
    return J(B, [...g != null && f.value != null ? St({ [g]: f.value }).map(([O, j]) => J(we, kt({ features: xe.Hidden, key: O, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: O, value: j }))) : [], G({ ourProps: C, theirProps: { ...l, ...De($, ["modelValue", "defaultValue"]) }, slot: {}, attrs: l, slots: n, name: "RadioGroup" })]);
  };
} });
var In = ((e) => (e[e.Empty = 1] = "Empty", e[e.Active = 2] = "Active", e))(In || {});
let Rn = W({ name: "RadioGroupOption", props: { as: { type: [Object, String], default: "div" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-radiogroup-option-${oe()}` } }, setup(e, { attrs: t, slots: l, expose: n }) {
  let o = jo("RadioGroupOption"), a = Dt({ name: "RadioGroupLabel" }), i = Xe({ name: "RadioGroupDescription" }), p = k(null), c = S(() => ({ value: e.value, disabled: e.disabled })), f = k(1);
  n({ el: p, $el: p }), H(() => o.registerOption({ id: e.id, element: p, propsRef: c })), ue(() => o.unregisterOption(e.id));
  let d = S(() => {
    var $;
    return (($ = o.firstOption.value) == null ? void 0 : $.id) === e.id;
  }), v = S(() => o.disabled.value || e.disabled), V = S(() => o.compare(K(o.value.value), K(e.value))), y = S(() => v.value ? -1 : V.value || !o.containsCheckedOption.value && d.value ? 0 : -1);
  function w() {
    var $;
    o.change(e.value) && (f.value |= 2, ($ = p.value) == null || $.focus());
  }
  function g() {
    f.value |= 2;
  }
  function x() {
    f.value &= -3;
  }
  return () => {
    let { id: $, value: C, disabled: O, ...j } = e, I = { checked: V.value, disabled: v.value, active: Boolean(f.value & 2) }, L = { id: $, ref: p, role: "radio", "aria-checked": V.value ? "true" : "false", "aria-labelledby": a.value, "aria-describedby": i.value, "aria-disabled": v.value ? !0 : void 0, tabIndex: y.value, onClick: v.value ? void 0 : w, onFocus: v.value ? void 0 : g, onBlur: v.value ? void 0 : x };
    return G({ ourProps: L, theirProps: j, slot: I, attrs: t, slots: l, name: "RadioGroupOption" });
  };
} }), Yt = Bo, Fn = $n, No = Symbol("GroupContext"), zn = W({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: l }) {
  let n = k(null), o = Dt({ name: "SwitchLabel", props: { htmlFor: S(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.id;
  }), onClick(i) {
    n.value && (i.currentTarget.tagName === "LABEL" && i.preventDefault(), n.value.click(), n.value.focus({ preventScroll: !0 }));
  } } }), a = Xe({ name: "SwitchDescription" });
  return ie(No, { switchRef: n, labelledby: o, describedby: a }), () => G({ theirProps: e, ourProps: {}, slot: {}, slots: t, attrs: l, name: "SwitchGroup" });
} }), Hn = W({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: !0 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-switch-${oe()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: l, slots: n, expose: o }) {
  let a = se(No, null), [i, p] = Pt(S(() => e.modelValue), (x) => t("update:modelValue", x), S(() => e.defaultChecked));
  function c() {
    p(!i.value);
  }
  let f = k(null), d = a === null ? f : a.switchRef, v = Ye(S(() => ({ as: e.as, type: l.type })), d);
  o({ el: d, $el: d });
  function V(x) {
    x.preventDefault(), c();
  }
  function y(x) {
    x.key === z.Space ? (x.preventDefault(), c()) : x.key === z.Enter && co(x.currentTarget);
  }
  function w(x) {
    x.preventDefault();
  }
  let g = S(() => {
    var x, $;
    return ($ = (x = P(d)) == null ? void 0 : x.closest) == null ? void 0 : $.call(x, "form");
  });
  return H(() => {
    U([g], () => {
      if (!g.value || e.defaultChecked === void 0)
        return;
      function x() {
        p(e.defaultChecked);
      }
      return g.value.addEventListener("reset", x), () => {
        var $;
        ($ = g.value) == null || $.removeEventListener("reset", x);
      };
    }, { immediate: !0 });
  }), () => {
    let { id: x, name: $, value: C, ...O } = e, j = { checked: i.value }, I = { id: x, ref: d, role: "switch", type: v.value, tabIndex: 0, "aria-checked": i.value, "aria-labelledby": a == null ? void 0 : a.labelledby.value, "aria-describedby": a == null ? void 0 : a.describedby.value, onClick: V, onKeyup: y, onKeypress: w };
    return J(B, [$ != null && i.value != null ? J(we, kt({ features: xe.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: i.value, name: $, value: C })) : null, G({ ourProps: I, theirProps: { ...l, ...De(O, ["modelValue", "defaultChecked"]) }, slot: j, attrs: l, slots: n, name: "Switch" })]);
  };
} }), qn = Bo;
function Un(e) {
  let t = { called: !1 };
  return (...l) => {
    if (!t.called)
      return t.called = !0, e(...l);
  };
}
function pt(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function We(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var bt = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(bt || {});
function Wn(e, t) {
  let l = et();
  if (!e)
    return l.dispose;
  let { transitionDuration: n, transitionDelay: o } = getComputedStyle(e), [a, i] = [n, o].map((p) => {
    let [c = 0] = p.split(",").filter(Boolean).map((f) => f.includes("ms") ? parseFloat(f) : parseFloat(f) * 1e3).sort((f, d) => d - f);
    return c;
  });
  return a !== 0 ? l.setTimeout(() => t("finished"), a + i) : t("finished"), l.add(() => t("cancelled")), l.dispose;
}
function Jt(e, t, l, n, o, a) {
  let i = et(), p = a !== void 0 ? Un(a) : () => {
  };
  return We(e, ...o), pt(e, ...t, ...l), i.nextFrame(() => {
    We(e, ...l), pt(e, ...n), i.add(Wn(e, (c) => (We(e, ...n, ...t), pt(e, ...o), p(c))));
  }), i.add(() => We(e, ...t, ...l, ...n, ...o)), i.add(() => p("cancelled")), i.dispose;
}
function Se(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let jt = Symbol("TransitionContext");
var Gn = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Gn || {});
function Zn() {
  return se(jt, null) !== null;
}
function Kn() {
  let e = se(jt, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Qn() {
  let e = se(Nt, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let Nt = Symbol("NestingContext");
function at(e) {
  return "children" in e ? at(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Ao(e) {
  let t = k([]), l = k(!1);
  H(() => l.value = !0), ue(() => l.value = !1);
  function n(a, i = ke.Hidden) {
    let p = t.value.findIndex(({ id: c }) => c === a);
    p !== -1 && (Q(i, { [ke.Unmount]() {
      t.value.splice(p, 1);
    }, [ke.Hidden]() {
      t.value[p].state = "hidden";
    } }), !at(t) && l.value && (e == null || e()));
  }
  function o(a) {
    let i = t.value.find(({ id: p }) => p === a);
    return i ? i.state !== "visible" && (i.state = "visible") : t.value.push({ id: a, state: "visible" }), () => n(a, ke.Unmount);
  }
  return { children: t, register: o, unregister: n };
}
let Mo = fe.RenderStrategy, Ce = W({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: l, slots: n, expose: o }) {
  let a = k(0);
  function i() {
    a.value |= Y.Opening, t("beforeEnter");
  }
  function p() {
    a.value &= ~Y.Opening, t("afterEnter");
  }
  function c() {
    a.value |= Y.Closing, t("beforeLeave");
  }
  function f() {
    a.value &= ~Y.Closing, t("afterLeave");
  }
  if (!Zn() && Wl())
    return () => J(ze, { ...e, onBeforeEnter: i, onAfterEnter: p, onBeforeLeave: c, onAfterLeave: f }, n);
  let d = k(null), v = k("visible"), V = S(() => e.unmount ? ke.Unmount : ke.Hidden);
  o({ el: d, $el: d });
  let { show: y, appear: w } = Kn(), { register: g, unregister: x } = Qn(), $ = { value: !0 }, C = oe(), O = { value: !1 }, j = Ao(() => {
    !O.value && v.value !== "hidden" && (v.value = "hidden", x(C), f());
  });
  H(() => {
    let ve = g(C);
    ue(ve);
  }), ne(() => {
    if (V.value === ke.Hidden && C) {
      if (y && v.value !== "visible") {
        v.value = "visible";
        return;
      }
      Q(v.value, { hidden: () => x(C), visible: () => g(C) });
    }
  });
  let I = Se(e.enter), L = Se(e.enterFrom), M = Se(e.enterTo), N = Se(e.entered), D = Se(e.leave), F = Se(e.leaveFrom), ee = Se(e.leaveTo);
  H(() => {
    ne(() => {
      if (v.value === "visible") {
        let ve = P(d);
        if (ve instanceof Comment && ve.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function ge(ve) {
    let q = $.value && !w.value, Z = P(d);
    !Z || !(Z instanceof HTMLElement) || q || (O.value = !0, y.value && i(), y.value || c(), ve(y.value ? Jt(Z, I, L, M, N, (le) => {
      O.value = !1, le === bt.Finished && p();
    }) : Jt(Z, D, F, ee, N, (le) => {
      O.value = !1, le === bt.Finished && (at(j) || (v.value = "hidden", x(C), f()));
    })));
  }
  return H(() => {
    U([y], (ve, q, Z) => {
      ge(Z), $.value = !1;
    }, { immediate: !0 });
  }), ie(Nt, j), Qe(S(() => Q(v.value, { visible: Y.Open, hidden: Y.Closed }) | a.value)), () => {
    let { appear: ve, show: q, enter: Z, enterFrom: le, enterTo: pe, entered: qe, leave: _e, leaveFrom: P1, leaveTo: O1, ...Ft } = e, Wo = { ref: d }, Go = { ...Ft, ...w && y && Re.isServer ? { class: E([l.class, Ft.class, ...I, ...L]) } : {} };
    return G({ theirProps: Go, ourProps: Wo, slot: {}, slots: n, attrs: l, features: Mo, visible: v.value === "visible", name: "TransitionChild" });
  };
} }), Yn = Ce, ze = W({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: l, slots: n }) {
  let o = Be(), a = S(() => e.show === null && o !== null ? (o.value & Y.Open) === Y.Open : e.show);
  ne(() => {
    if (![!0, !1].includes(a.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let i = k(a.value ? "visible" : "hidden"), p = Ao(() => {
    i.value = "hidden";
  }), c = k(!0), f = { show: a, appear: S(() => e.appear || !c.value) };
  return H(() => {
    ne(() => {
      c.value = !1, a.value ? i.value = "visible" : at(p) || (i.value = "hidden");
    });
  }), ie(Nt, p), ie(jt, f), () => {
    let d = De(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), v = { unmount: e.unmount };
    return G({ ourProps: { ...v, as: "template" }, theirProps: {}, slot: {}, slots: { ...n, default: () => [J(Yn, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...l, ...v, ...d }, n.default)] }, attrs: {}, features: Mo, visible: i.value === "visible", name: "Transition" });
  };
} });
const Jn = {
  key: 0,
  class: "po-text-sm po-font-normal po-text-slate-400 po-select-none po-block po-text-left po-pt-5"
}, Xn = { class: "po-grid po-grid-cols-3" }, ea = { class: "po-bg-white hover:po-bg-slate-200 po-rounded-xl po-p-2 po-transition-colors po-duration-150 po-ease-in" }, ta = ["href", "target"], oa = { class: "po-flex po-w-14 po-h-14 po-items-center po-justify-center po-duration-100 po-ease-in-out po-overflow-hidden" }, la = ["innerHTML"], na = { class: "po-text-slate-500 po-font-normal po-text-sm po-text-center" }, Xt = {
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
    return (t, l) => (r(!0), u(B, null, R(e.list, (n) => (r(), u("div", null, [
      n.groupName.length > 0 ? (r(), u("span", Jn, m(n.groupName), 1)) : h("", !0),
      s("ul", Xn, [
        (r(!0), u(B, null, R(n.apps, (o) => (r(), u("li", ea, [
          s("a", {
            href: o.url,
            target: e.openInNewTab ? "_blank" : "_self",
            class: "po-flex po-flex-col po-group po-justify-center po-items-center"
          }, [
            s("span", oa, [
              s("span", {
                class: "po-w-9",
                innerHTML: o.icon
              }, null, 8, la)
            ]),
            s("span", na, m(o.name), 1)
          ], 8, ta)
        ]))), 256))
      ])
    ]))), 256));
  }
}, aa = {
  name: "PoAppTray"
}, sa = /* @__PURE__ */ Object.assign(aa, {
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
    const t = e, l = ["", "Internal"], n = S(() => {
      let o = [];
      return l.forEach((a) => {
        let i = t.appList.filter((p) => p.group == a);
        i.length > 0 && o.push({
          groupName: a,
          apps: i
        });
      }), o;
    });
    return (o, a) => e.justApps ? (r(), A(Xt, {
      key: 1,
      list: b(n),
      "open-in-new-tab": e.openInNewTab
    }, null, 8, ["list", "open-in-new-tab"])) : (r(), A(b(nt), { key: 0 }, {
      default: T(({ open: i }) => [
        _(b(Tt), {
          class: E([i ? "" : "po-text-opacity-90", "po-block po-w-6 po-text-slate-100 genie-effect po-z-50 po-outline-none"])
        }, {
          default: T(() => [
            _(b(gl))
          ]),
          _: 2
        }, 1032, ["class"]),
        _($e, {
          "enter-active-class": "po-transition po-duration-200 po-ease-out",
          "enter-from-class": "po-translate-y-1 po-opacity-0",
          "enter-to-class": "po-translate-y-0 po-opacity-100",
          "leave-active-class": "po-transition po-duration-150 po-ease-in",
          "leave-from-class": "po-translate-y-0 po-opacity-100",
          "leave-to-class": "po-translate-y-1 po-opacity-0"
        }, {
          default: T(() => [
            _(b(Bt), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
              default: T(() => [
                _(Xt, {
                  list: b(n),
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
}), ra = {
  key: 0,
  class: "po-absolute po-right-0 po-w-3 po-h-3 po-bg-mpao-orange po-rounded-full po-border-2 po-border-mpao-blue"
}, ia = {
  key: 0,
  class: "po-space-y-2"
}, ua = ["onClick"], pa = { class: "po-flex po-items-center po-justify-between" }, ca = { class: "po-text-sm po-text-left po-font-semibold po-text-slate-700 po-grow po-flex po-space-x-2 po-items-center" }, da = { class: "po-grow" }, fa = {
  key: 0,
  class: "po-w-[6px] po-h-[6px] po-rounded-full po-shrink-0 po-bg-mpao-orange po-animate-pulse"
}, va = { class: "po-text-xs po-font-normal po-text-slate-400 po-shrink-0" }, ma = { class: "po-block po-text-sm po-text-slate-500 po-pb-3 po-text-left" }, ha = {
  key: 1,
  class: "po-text-sm po-text-slate-500 po-py-10 po-text-center po-block"
}, ba = {
  name: "PoNotificationHub"
}, ga = /* @__PURE__ */ Object.assign(ba, {
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
    return (l, n) => (r(), A(b(nt), null, {
      default: T(({ open: o }) => [
        _(b(Tt), {
          class: E([o ? "" : "text-opacity-90", "po-block po-w-6 po-text-slate-100 genie-effect po-relative po-z-50 po-outline-none"])
        }, {
          default: T(() => [
            e.hasNewNotifications ? (r(), u("span", ra)) : h("", !0),
            _(b(rl), { class: "po-stroke-current" })
          ]),
          _: 2
        }, 1032, ["class"]),
        _($e, {
          "enter-active-class": "po-transition po-duration-200 po-ease-out",
          "enter-from-class": "po-translate-y-1 po-opacity-0",
          "enter-to-class": "po-translate-y-0 po-opacity-100",
          "leave-active-class": "po-transition po-duration-150 po-ease-in",
          "leave-from-class": "po-translate-y-0 po-opacity-100",
          "leave-to-class": "po-translate-y-1 po-opacity-0"
        }, {
          default: T(() => [
            _(b(Bt), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
              default: T(() => [
                e.notifications !== null && e.notifications.length > 0 ? (r(), u("ul", ia, [
                  (r(!0), u(B, null, R(e.notifications, (a) => (r(), u("li", {
                    role: "button",
                    class: "po-space-y-2 po-p-2 po-rounded-lg po-bg-white hover:po-bg-slate-100 po-border po-border-slate-100",
                    onClick: re((i) => l.$emit("button-click", a.name), ["prevent"])
                  }, [
                    s("span", pa, [
                      s("p", ca, [
                        s("span", da, m(a.name), 1),
                        a.seen ? h("", !0) : (r(), u("span", fa))
                      ]),
                      s("span", va, m(a.time), 1)
                    ]),
                    s("span", ma, m(a.text), 1)
                  ], 8, ua))), 256))
                ])) : (r(), u("span", ha, " No notifications to show at the moment. We'll keep you informed."))
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
}), ya = {
  key: 0,
  class: "po-hidden lg:po-block po-text-sky-50 po-text-sm po-shrink-0 po-pr-3 po-truncate po-max-w-[140px] po-overflow-hidden"
}, xa = {
  key: 1,
  class: "po-px-3 po-bg-gradient-to-br po-from-slate-50 po-to-blue-100 po-py-1 po-rounded-l-md po-w-[100px] po-flex po-items-center po-justify-center po-text-center"
}, wa = ["src"], Va = ["src", "alt"], ka = {
  key: 1,
  class: "po-text-xs po-text-white po-font-semibold"
}, $a = { class: "po-pb-5" }, Ca = ["src"], _a = {
  key: 2,
  class: "po-block po-text-sm po-text-slate-400 po-italic"
}, Sa = { key: 0 }, Pa = { key: 1 }, Oa = /* @__PURE__ */ s("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), Ea = { class: "po-space-y-2 po-py-2 po-max-h-[250px] po-overflow-y-auto" }, La = ["onClick"], Ta = { class: "po-w-5" }, Ba = { class: "" }, Da = { class: "po-block po-text-sm po-font-normal" }, ja = {
  key: 0,
  class: "po-text-left po-block po-text-xs po-text-slate-400"
}, Na = /* @__PURE__ */ s("div", { class: "po-h-[2px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), Aa = { class: "md:po-grid po-grid-cols-2 po-space-x-1 po-pt-2" }, Ma = { class: "po-w-5" }, Ia = /* @__PURE__ */ s("span", { class: "po-text-sm po-font-normal" }, "Profile", -1), Ra = { class: "po-w-5" }, Fa = /* @__PURE__ */ s("span", { class: "po-text-sm po-font-normal" }, "Logout", -1), za = /* @__PURE__ */ s("div", { class: "po-text-xs po-space-x-3 po-text-center po-pt-3" }, [
  /* @__PURE__ */ s("a", {
    href: "",
    class: "po-text-slate-500 hover:po-text-mpao-lightblue"
  }, "Privacy Policy"),
  /* @__PURE__ */ s("a", {
    href: "",
    class: "po-text-slate-500 hover:po-text-mpao-lightblue"
  }, "Terms of Service")
], -1), Ha = {
  name: "PoProfileSwitcher"
}, qa = /* @__PURE__ */ Object.assign(Ha, {
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
    const l = e;
    function n(v) {
      t("button-click", v);
    }
    const o = k({
      name: "",
      initials: "",
      image: ""
    });
    function a(v) {
      return v ? v.match(/\b[A-Z]/g).join("").substr(0, 2) : "";
    }
    const i = S(() => {
      var g, x, $, C, O, j, I, L, M, N, D, F, ee;
      let v = [], V = (g = l.userObject) != null && g.transacting_as_organisation && Object.keys((x = l.userObject) == null ? void 0 : x.transacting_as_organisation).length > 0 ? ($ = l.userObject) == null ? void 0 : $.transacting_as_organisation : null, y = V ? V.name : (C = l.userObject) == null ? void 0 : C.name, w = V ? V.logo ? V.logo : (O = l.userObject) == null ? void 0 : O.avatar : "";
      return o.value = {
        name: y,
        initials: a(y),
        image: w
      }, v = [], v.push({
        id: (j = l.userObject) == null ? void 0 : j.id,
        entity_id: (I = l.userObject) == null ? void 0 : I.entity_id,
        name: (L = l.userObject) == null ? void 0 : L.name,
        identifier: null,
        organisation_uuid: null
      }), ((N = (M = l.userObject) == null ? void 0 : M.organisations) == null ? void 0 : N.length) > 0 && ((F = (D = l.userObject) == null ? void 0 : D.organisations) == null || F.forEach((ge) => v.push(ge))), v.forEach((ge) => {
        var ve, q, Z, le;
        ge.current = ((ve = l.userObject) == null ? void 0 : ve.transacting_as_organisation) && Object.keys((q = l.userObject) == null ? void 0 : q.transacting_as_organisation).length > 0 && ge.entity_id === ((le = (Z = l.userObject) == null ? void 0 : Z.transacting_as_organisation) == null ? void 0 : le.entity_id);
      }), ((ee = l.userObject) == null ? void 0 : ee.transacting_as_organisation) === null && (v[0].current = !0), v;
    }), p = k(null), c = k(null), { avatar: f, logo: d } = ye(l);
    return U(f, () => {
      p.value = f.value;
    }), U(d, () => {
      c.value = d.value;
    }), Jo(() => {
      i.value;
    }), H(() => {
      i.value;
    }), Xo(() => {
      i.value;
    }), yt(() => {
      i.value;
    }), (v, V) => (r(), A(b(nt), { key: b(i) }, {
      default: T(({ open: y }) => [
        s("div", null, [
          _(b(Tt), { class: "po-flex po-items-center po-outline-none" }, {
            default: T(() => [
              c.value ? h("", !0) : (r(), u("span", ya, m(o.value.name), 1)),
              c.value ? (r(), u("span", xa, [
                s("img", {
                  class: "po-h-8",
                  src: c.value,
                  alt: ""
                }, null, 8, wa)
              ])) : h("", !0),
              s("div", {
                class: E([
                  {
                    "po-bg-gradient-to-br po-from-slate-50 po-to-blue-100 po-p-1 po-rounded-r-md": c.value
                  }
                ])
              }, [
                s("div", {
                  class: E([[
                    { "text-opacity-90": y },
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
                    alt: o.value.name
                  }, null, 8, Va)) : (r(), u("span", ka, m(o.value.initials), 1))
                ], 2)
              ], 2)
            ]),
            _: 2
          }, 1024),
          _($e, {
            "enter-active-class": "po-transition po-duration-200 po-ease-out",
            "enter-from-class": "po-translate-y-1 po-opacity-0",
            "enter-to-class": "po-translate-y-0 po-opacity-100",
            "leave-active-class": "po-transition po-duration-150 po-ease-in",
            "leave-from-class": "po-translate-y-0 po-opacity-100",
            "leave-to-class": "po-translate-y-1 po-opacity-0"
          }, {
            default: T(() => [
              _(b(Bt), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
                default: T(() => {
                  var w, g, x, $;
                  return [
                    s("div", $a, [
                      p.value ? (r(), u("img", {
                        key: 0,
                        class: "po-w-20 po-h-20 po-mx-auto po-rounded-full po-overflow-hidden",
                        src: p.value,
                        alt: ""
                      }, null, 8, Ca)) : h("", !0),
                      (w = e.userObject) != null && w.name ? (r(), u("span", {
                        key: 1,
                        class: E(["po-text-base po-text-slate-600 po-font-medium po-block", [{ "po-mt-4": p.value }]])
                      }, m((g = e.userObject) == null ? void 0 : g.name), 3)) : h("", !0),
                      (x = e.userObject) != null && x.name ? (r(), u("span", _a, [
                        o.value.name === (($ = e.userObject) == null ? void 0 : $.name) ? (r(), u("span", Sa, "Self")) : (r(), u("span", Pa, "User at " + m(o.value.name), 1))
                      ])) : h("", !0)
                    ]),
                    Oa,
                    s("div", Ea, [
                      (r(!0), u(B, null, R(b(i), (C, O) => (r(), u("a", {
                        href: "#",
                        onClick: re((j) => n(C), ["prevent"]),
                        class: E(["po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-shadow-sm po-transition-all po-duration-150 po-ease-out hover:po-bg-blue-50", [
                          {
                            " po-bg-white": !C.current
                          },
                          {
                            " po-bg-blue-50 po-shadow-sm": C.current
                          }
                        ]]),
                        role: "button",
                        key: O
                      }, [
                        s("span", Ta, [
                          C.isPersonal ? (r(), A(b(Ht), {
                            key: 0,
                            class: E([
                              "po-stroke-current",
                              { "po-stroke-mpao-lightblue": C.current }
                            ])
                          }, null, 8, ["class"])) : h("", !0),
                          C.isPersonal ? h("", !0) : (r(), A(b(ul), {
                            key: 1,
                            class: E([
                              "po-stroke-current",
                              { "po-stroke-mpao-lightblue": C.current }
                            ])
                          }, null, 8, ["class"]))
                        ]),
                        s("span", Ba, [
                          s("span", Da, m(C.name), 1),
                          C.identifier ? (r(), u("span", ja, m(C.identifier), 1)) : h("", !0)
                        ])
                      ], 10, La))), 128))
                    ]),
                    Na,
                    s("div", Aa, [
                      s("a", {
                        href: "#",
                        onClick: V[0] || (V[0] = re((C) => v.$emit("button-click", "current-profile"), ["prevent"])),
                        class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-slate-50 hover:po-bg-blue-50 po-transition-all po-duration-150 po-ease-out",
                        role: "button"
                      }, [
                        s("span", Ma, [
                          _(b(Ht), { class: "po-stroke-current" })
                        ]),
                        Ia
                      ]),
                      s("a", {
                        href: "#",
                        onClick: V[1] || (V[1] = re((C) => v.$emit("button-click", "logout"), ["prevent"])),
                        class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-slate-50 hover:po-bg-blue-50 po-transition-all po-duration-150 po-ease-out",
                        role: "button"
                      }, [
                        s("span", Ra, [
                          _(b(nl), { class: "po-stroke-current" })
                        ]),
                        Fa
                      ])
                    ]),
                    za
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
    return (t, l) => (r(), u("div", {
      class: E(["loading-dots po-inline-block po-w-[40px] po-h-[10px]", [{ "po-relative": !e.absolute }, { "po-absolute": e.absolute }]])
    }, [
      s("div", {
        class: E(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[8px]", e.dotColor])
      }, null, 2),
      s("div", {
        class: E(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[8px]", e.dotColor])
      }, null, 2),
      s("div", {
        class: E(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[17px]", e.dotColor])
      }, null, 2),
      s("div", {
        class: E(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[26px]", e.dotColor])
      }, null, 2)
    ], 2));
  }
}, Ua = ["disabled", "aria-disabled"], Wa = ["value", "disabled", "aria-disabled"], Ga = {
  name: "PoButton"
}, Mt = /* @__PURE__ */ Object.assign(Ga, {
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
    const l = e, n = "po-rounded-full po-transition-colors po-border po-duration-100 po-ease-in-out po-cursor-pointer disabled:po-bg-slate-400 disabled:po-border-slate-400 disabled:po-cursor-default disabled:po-hover:bg-slate-400", o = S(() => {
      switch (l.size) {
        case "sm":
          return "po-px-2 po-py-1 po-text-xs";
        case "md":
          return "po-px-4 po-py-2 po-text-sm";
        case "lg":
          return "po-px-5 po-py-3 po-text-normal";
      }
    }), a = S(() => {
      if (l.overrideColors)
        return "";
      switch (l.actionType) {
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
    return (i, p) => (r(), u(B, null, [
      e.isLoading ? (r(), u("span", {
        key: 0,
        class: E([[n, b(o)], "po-bg-slate-200 hover:po-bg-slate-200 focus:po-bg-slate-200"])
      }, [
        _(At, {
          "dot-color": "po-bg-slate-500",
          class: "po-relative -po-bottom-[0.2rem]"
        })
      ], 2)) : h("", !0),
      e.type == "button" && !e.isLoading ? (r(), u("button", Ee({
        key: 1,
        onClick: p[0] || (p[0] = re((c) => i.$emit("button-click", e.to), ["prevent"])),
        class: [n, b(o), b(a)],
        disabled: e.disabled,
        "aria-disabled": e.disabled
      }, i.$attrs), [
        te(i.$slots, "label", {}, () => [
          X(m(e.label), 1)
        ])
      ], 16, Ua)) : h("", !0),
      e.type == "submit" && !e.isLoading ? (r(), u("input", Ee({
        key: 2,
        type: "submit",
        class: [n, b(o), b(a)],
        value: e.label,
        disabled: e.disabled,
        "aria-disabled": e.disabled
      }, i.$attrs), null, 16, Wa)) : h("", !0),
      e.type == "link" && !e.isLoading ? (r(), u("a", Ee({
        key: 3,
        href: "#",
        onClick: p[1] || (p[1] = re((c) => i.$emit("button-click", e.to), ["prevent"])),
        class: [n, b(o), b(a)]
      }, i.$attrs), [
        te(i.$slots, "label", {}, () => [
          X(m(e.label), 1)
        ])
      ], 16)) : h("", !0),
      e.type == "simple" && !e.isLoading ? (r(), u("a", {
        key: 4,
        href: "#",
        onClick: p[2] || (p[2] = re((c) => i.$emit("button-click", e.to), ["prevent"])),
        class: E(["po-text-sm po-transition-colors po-duration-100 po-ease-in-out po-inline-flex po-items-center po-space-x-1", [
          { "po-text-mpao-lightblue hover:po-text-mpao-blue": !e.overrideColors }
        ]])
      }, [
        te(i.$slots, "label", {}, () => [
          X(m(e.label), 1)
        ])
      ], 2)) : h("", !0)
    ], 64));
  }
});
function Io(e, t) {
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
function Ro(e, t) {
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
function Fo(e, t) {
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
function zo(e, t) {
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
function eo(e, t) {
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
function Ho(e, t) {
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
function Za(e, t) {
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
function qo(e, t) {
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
function Ka(e, t) {
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
function Qa(e, t) {
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
function Rt(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
  ]);
}
const Ya = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Ja = ["title"], Xa = { class: "po-relative po-mt-1" }, es = { class: "po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-rounded-r-md po-px-2 focus:po-outline-none" }, ts = {
  key: 0,
  class: "po-block po-text-xs po-opacity-60"
}, os = {
  key: 0,
  class: "po-mt-2 po-text-sm po-text-slate-500",
  id: "-description"
}, ls = {
  key: 1,
  class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
  id: "-error"
}, ns = {
  name: "PoSelectField"
}, as = /* @__PURE__ */ Object.assign(ns, {
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
    const l = e, n = k(""), o = k(), a = S(
      () => n.value === "" ? l.list : l.list.filter((d) => d.name.toLowerCase().includes(n.value.toLowerCase()))
    );
    function i(d) {
      if (l.object)
        return d == null ? void 0 : d.name;
      if (a.value) {
        let v = a.value.find((V) => V.id === d);
        return v == null ? void 0 : v.name;
      } else if (placeholder)
        return placeholder;
    }
    o.value = l.modelValue, yt(() => {
      o.value = l.modelValue;
    }), U(o, () => {
      t("update:modelValue", o.value), t("selected", o.value);
    });
    const { errorMessage: p } = ye(l), c = k(p.value !== null);
    U(p, (d, v) => {
      c.value = p.value !== null && p.value !== "";
    });
    const f = k("");
    return H(() => {
      l.id === "" ? f.value = l.label.replace(/\s/g, "") + "-" + Date.now() + "-selectfield-" + Math.floor(Math.random() * 9e3) : f.value = l.id;
    }), (d, v) => (r(), A(b(sn), {
      as: "div",
      modelValue: o.value,
      "onUpdate:modelValue": v[1] || (v[1] = (V) => o.value = V),
      class: E([{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]),
      disabled: e.disabled
    }, {
      default: T(() => [
        _(b(rn), {
          class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700",
          id: f.value
        }, {
          default: T(() => [
            s("span", null, m(e.label), 1),
            e.required ? (r(), u("span", Ya, "*")) : h("", !0),
            e.info !== null ? (r(), u("abbr", {
              key: 1,
              title: e.info,
              class: "po-w-4 po-text-slate-500"
            }, [
              _(b(It), { class: "po-fill-current" })
            ], 8, Ja)) : h("", !0)
          ]),
          _: 1
        }, 8, ["id"]),
        s("div", Xa, [
          _(b(un), {
            as: "div",
            ref: "comboboxButton"
          }, {
            default: T(() => [
              _(b(pn), {
                class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm",
                placeholder: e.placeholder,
                onChange: v[0] || (v[0] = (V) => n.value = V.target.value),
                "display-value": i,
                disabled: e.disabled,
                id: f.value
              }, null, 8, ["placeholder", "disabled", "id"]),
              s("span", es, [
                _(b(Za), {
                  class: "po-h-5 po-w-5 po-text-slate-400",
                  "aria-hidden": "true"
                })
              ])
            ]),
            _: 1
          }, 512),
          b(a).length > 0 ? (r(), A(b(cn), {
            key: 0,
            class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
          }, {
            default: T(() => [
              (r(!0), u(B, null, R(b(a), (V) => (r(), A(b(dn), {
                key: V.id,
                value: e.object ? V : V.id,
                as: "template"
              }, {
                default: T(({ active: y, selected: w }) => [
                  s("li", {
                    class: E([
                      "po-relative po-cursor-default po-select-none po-py-2 po-pl-3 po-pr-9",
                      y ? "po-bg-mpao-lightblue po-text-white" : "po-text-slate-900"
                    ])
                  }, [
                    s("span", {
                      class: E(["po-block po-truncate", w && "po-font-semibold"])
                    }, [
                      X(m(V.name) + " ", 1),
                      V.subtitle ? (r(), u("span", ts, m(V.subtitle), 1)) : h("", !0)
                    ], 2),
                    w ? (r(), u("span", {
                      key: 0,
                      class: E([
                        "po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-pr-4",
                        y ? "po-text-white" : "po-text-mpao-lightblue"
                      ])
                    }, [
                      _(b(Ho), {
                        class: "po-h-5 po-w-5",
                        "aria-hidden": "true"
                      })
                    ], 2)) : h("", !0)
                  ], 2)
                ]),
                _: 2
              }, 1032, ["value"]))), 128))
            ]),
            _: 1
          })) : h("", !0)
        ]),
        e.message !== null ? (r(), u("p", os, m(e.message), 1)) : h("", !0),
        b(p) !== null ? (r(), u("p", ls, [
          s("span", null, m(b(p)), 1)
        ])) : h("", !0)
      ]),
      _: 1
    }, 8, ["modelValue", "class", "disabled"]));
  }
}), ss = /* @__PURE__ */ s("div", { class: "po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity" }, null, -1), rs = { class: "po-fixed po-z-10 po-inset-0" }, is = { class: "po-flex po-justify-center po-items-start po-min-h-screen po-px-4 po-pt-10 po-pb-20 po-text-center sm:po-block po-max-h-screen po-overflow-y-hidden" }, us = /* @__PURE__ */ s("span", {
  class: "po-hidden sm:po-inline-block sm:po-align-middle sm:po-h-screen",
  "aria-hidden": "true"
}, "​", -1), ps = { class: "po-flex po-items-center po-bg-white po-rounded-t-xl po-p-5" }, cs = { class: "po-grow po-text-md po-font-bold po-text-slate-600" }, ds = { class: "po-shrink-0" }, fs = /* @__PURE__ */ s("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), vs = { class: "po-p-5 po-h-[calc(100vh-230px)] po-max-h-[520px] po-overflow-y-auto" }, ms = {
  key: 0,
  class: "po-bg-slate-50 po-rounded-b-xl"
}, hs = {
  name: "PoModal"
}, He = /* @__PURE__ */ Object.assign(hs, {
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
    modalWidth: {
      type: String,
      default: "sm:po-max-w-xl"
    }
  },
  emits: ["modal-closed"],
  setup(e, { emit: t }) {
    const l = e, { show: n } = ye(l), o = k(!1);
    U(n, () => {
      o.value = n.value;
    });
    function a() {
      o.value = !1, t("modal-closed", !0);
    }
    return (i, p) => (r(), u("div", null, [
      e.openBtnLabel.length > 0 ? (r(), A(b(Mt), {
        key: 0,
        label: e.openBtnLabel,
        onClick: p[0] || (p[0] = (c) => o.value = !0)
      }, null, 8, ["label"])) : h("", !0),
      (r(), A(Ze, { to: "body" }, [
        _(b(ze), {
          as: "template",
          show: o.value
        }, {
          default: T(() => [
            _(b(tt), {
              as: "div",
              class: "po-relative po-z-50",
              onClose: a
            }, {
              default: T(() => [
                _(b(Ce), {
                  as: "template",
                  enter: "po-ease-out po-duration-300",
                  "enter-from": "po-opacity-0",
                  "enter-to": "po-opacity-100",
                  leave: "po-ease-in po-duration-200",
                  "leave-from": "po-opacity-100",
                  "leave-to": "po-opacity-0"
                }, {
                  default: T(() => [
                    ss
                  ]),
                  _: 1
                }),
                s("div", rs, [
                  s("div", is, [
                    us,
                    _(b(Ce), {
                      as: "template",
                      enter: "po-ease-out po-duration-300",
                      "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                      "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                      leave: "po-ease-in po-duration-200",
                      "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                      "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                    }, {
                      default: T(() => [
                        _(b(ot), {
                          class: E(["po-relative po-inline-block po-align-bottom po-bg-white po-rounded-xl po-text-left po-shadow-xl po-transform po-transition-all sm:po-align-top po-w-full", e.modalWidth])
                        }, {
                          default: T(() => [
                            s("div", ps, [
                              s("h3", cs, m(e.modalTitle), 1),
                              s("div", ds, [
                                s("span", {
                                  role: "button",
                                  class: "po-block",
                                  onClick: a
                                }, [
                                  _(b(Ke), { class: "po-w-5 po-stroke-slate-500 hover:po-stroke-mpao-orange po-transition-colors po-duration-150 po-ease-in-out" })
                                ])
                              ])
                            ]),
                            fs,
                            s("div", vs, [
                              te(i.$slots, "content")
                            ]),
                            i.$slots.footer ? (r(), u("div", ms, [
                              te(i.$slots, "footer")
                            ])) : h("", !0)
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
function bs(e, t) {
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
function gs(e, t) {
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
function ys(e, t) {
  return r(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", { d: "M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" })
  ]);
}
function Uo(e, t) {
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
function xs(e, t) {
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
const ws = ["for"], Vs = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, ks = ["title"], $s = ["name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], Cs = ["id"], _s = ["id"], Ss = {
  name: "PoTextarea"
}, Ps = /* @__PURE__ */ Object.assign(Ss, {
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
    return (t, l) => (r(), u("div", {
      class: E(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      s("label", {
        for: e.id,
        class: "po-text-sm po-font-medium po-text-slate-700 po-flex po-items-center po-space-x-1"
      }, [
        s("span", null, m(e.label), 1),
        e.required ? (r(), u("span", Vs, "*")) : h("", !0),
        e.info !== null ? (r(), u("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          _(b(Uo))
        ], 8, ks)) : h("", !0)
      ], 8, ws),
      s("textarea", Ee({
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
        onInput: l[0] || (l[0] = (n) => t.$emit("update:modelValue", n.target.value)),
        class: "po-mt-1 po-peer po-px-3 po-py-2 po-block po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-border-slate-300 po-bg-white focus:po-border-mpao-lightblue focus:po-ring-0 invalid:po-border-red-400 invalid:po-focus:border-red-600 invalid:focus:po-ring-red-600 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default"
      }), null, 16, $s),
      e.message !== null ? (r(), u("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, m(e.message), 9, Cs)) : h("", !0),
      e.errorMessage !== null ? (r(), u("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, m(e.errorMessage), 9, _s)) : h("", !0)
    ], 2));
  }
}), Os = { class: "shell-sidebar--icon" }, Es = /* @__PURE__ */ s("span", { class: "shell-sidebar--label po-font-medium" }, "Feedback", -1), Ls = { action: "" }, Ts = /* @__PURE__ */ s("br", null, null, -1), Bs = { class: "po-p-5" }, Ds = {
  __name: "feedbackForm",
  setup(e) {
    const t = k(!1), l = [
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
    ], n = k({
      type: 1,
      message: ""
    });
    return (o, a) => (r(), u(B, null, [
      s("button", {
        onClick: a[0] || (a[0] = re(() => t.value = !0, ["prevent"])),
        class: "shell-sidebar--item",
        title: "Go to feedback"
      }, [
        s("span", Os, [
          _(b(pl), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" })
        ]),
        Es
      ]),
      _(He, {
        show: t.value,
        onModalClosed: a[3] || (a[3] = () => t.value = !1),
        "modal-title": "Feedback"
      }, {
        content: T(() => [
          s("form", Ls, [
            _(as, {
              label: "Type",
              list: l,
              modelValue: n.value.type,
              "onUpdate:modelValue": a[1] || (a[1] = (i) => n.value.type = i)
            }, null, 8, ["modelValue"]),
            Ts,
            _(Ps, {
              cols: "6",
              rows: "6",
              label: "Description",
              modelValue: n.value.message,
              "onUpdate:modelValue": a[2] || (a[2] = (i) => n.value.message = i)
            }, null, 8, ["modelValue"])
          ])
        ]),
        footer: T(() => [
          s("div", Bs, [
            _(Mt, {
              label: "Send",
              type: "button"
            })
          ])
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}, js = { class: "shell-sidebar" }, Ns = { class: "po-grow" }, As = { class: "shell-sidebar--menu" }, Ms = ["onClick", "title"], Is = { class: "shell-sidebar--icon" }, Rs = { class: "shell-sidebar--label po-font-medium po-text-left" }, Fs = { key: 0 }, zs = { class: "shell-sidebar--menu sidebar-apps po-shrink-0 po-mb-0" }, Hs = ["onClick"], qs = { class: "shell-sidebar--icon" }, Us = ["innerHTML"], Ws = { class: "shell-sidebar--label po-font-medium po-text-left" }, Gs = {
  key: 0,
  class: "shell-sidebar--menu po-shrink-0 po-mb-0 po-border-t po-border-slate-200 po-pt-3"
}, Zs = {
  name: "PoSidebarDrawer"
}, D1 = /* @__PURE__ */ Object.assign(Zs, {
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
    const l = e, n = S(() => {
      let p = [];
      const c = l.apps.filter((f) => f.code == l.appCode)[0];
      return c && l.apps.filter(
        (d) => c.related.includes(d.code)
      ).forEach((d) => {
        p.push(d);
      }), p;
    }), o = k(null);
    function a() {
      window.innerWidth <= 1024 && (o.value.checked = !o.value.checked);
    }
    function i(p, c) {
      t(p, c), a();
    }
    return (p, c) => (r(), u(B, null, [
      s("input", {
        type: "checkbox",
        name: "",
        class: "po-hidden shell-sidebar--toggle",
        role: "none",
        id: "sidebar-drawer-toggle",
        checked: "",
        "aria-checked": "true",
        ref_key: "sidebarToggle",
        ref: o
      }, null, 512),
      s("aside", js, [
        s("div", Ns, [
          (r(!0), u(B, null, R(e.content, (f) => (r(), u("div", null, [
            _(b(Zt), { defaultOpen: !0 }, {
              default: T(({ open: d }) => [
                f.groupName ? (r(), A(b(Kt), {
                  key: 0,
                  class: E([d ? "" : "po-mb-3", "shell-sidebar--section po-w-full po-text-left"])
                }, {
                  default: T(() => [
                    X(m(f.groupName), 1)
                  ]),
                  _: 2
                }, 1032, ["class"])) : h("", !0),
                _($e, {
                  "enter-active-class": "po-transition po-duration-100 po-ease-out",
                  "enter-from-class": "po-transform po-scale-95 po-opacity-0",
                  "enter-to-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-active-class": "po-transition po-duration-75 po-ease-out",
                  "leave-from-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-to-class": "po-transform po-scale-95 po-opacity-0"
                }, {
                  default: T(() => [
                    _(b(Qt), null, {
                      default: T(() => [
                        s("ul", As, [
                          (r(!0), u(B, null, R(f.items, (v) => (r(), u("li", null, [
                            v.disabled ? h("", !0) : (r(), u("button", {
                              key: 0,
                              onClick: (V) => i("button-click", v.url),
                              class: E([
                                "shell-sidebar--item",
                                { active: v.url == e.currRoute }
                              ]),
                              title: `Go to ${v.label}`
                            }, [
                              s("span", Is, [
                                (r(), A(de(v.icon), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" }))
                              ]),
                              s("span", Rs, m(v.label), 1)
                            ], 10, Ms))
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
          b(n).length > 0 ? (r(), u("div", Fs, [
            _(b(Zt), { defaultOpen: !0 }, {
              default: T(({ open: f }) => [
                e.appsLabel ? (r(), A(b(Kt), {
                  key: 0,
                  class: E([f ? "" : "po-mb-3", "shell-sidebar--section po-w-full po-text-left"])
                }, {
                  default: T(() => [
                    X(m(e.appsLabel), 1)
                  ]),
                  _: 2
                }, 1032, ["class"])) : h("", !0),
                _($e, {
                  "enter-active-class": "po-transition po-duration-100 po-ease-out",
                  "enter-from-class": "po-transform po-scale-95 po-opacity-0",
                  "enter-to-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-active-class": "po-transition po-duration-75 po-ease-out",
                  "leave-from-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-to-class": "po-transform po-scale-95 po-opacity-0"
                }, {
                  default: T(() => [
                    _(b(Qt), null, {
                      default: T(() => [
                        s("ul", zs, [
                          (r(!0), u(B, null, R(b(n), (d, v) => (r(), u("li", null, [
                            s("button", {
                              onClick: (V) => i("app-click", d.name),
                              class: E(["shell-sidebar--item", [{ active: d.current }]]),
                              title: "Go to feedback"
                            }, [
                              s("span", qs, [
                                s("span", {
                                  innerHTML: d.icon,
                                  class: "po-text-slate-600 po-w-5"
                                }, null, 8, Us)
                              ]),
                              s("span", Ws, m(d.name), 1)
                            ], 10, Hs)
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
          ])) : h("", !0)
        ]),
        e.hasFeedback ? (r(), u("ul", Gs, [
          s("li", null, [
            _(Ds)
          ])
        ])) : h("", !0)
      ])
    ], 64));
  }
}), Ks = {
  key: 0,
  class: "shell-content--action-bar"
}, Qs = { class: "action-bar__nav" }, Ys = ["onClick"], Js = { class: "action-bar__nav_label po-font-medium" }, Xs = {
  key: 0,
  class: "po-shrink-0 po-flex po-space-x-1"
}, er = /* @__PURE__ */ s("span", { class: "action-bar__nav_label po-font-medium" }, "Go Back", -1), tr = {
  name: "PoActionBar"
}, j1 = /* @__PURE__ */ Object.assign(tr, {
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
    return (t, l) => e.items !== null && e.items.length > 0 || e.showBackButton ? (r(), u("section", Ks, [
      s("nav", Qs, [
        (r(!0), u(B, null, R(e.items, (n) => (r(), u("span", {
          onClick: (o) => t.$emit("button-click", n.label),
          class: E([[
            { "action-bar__nav_highlighted": n.highlighted },
            { "action-bar__nav_danger": n.danger }
          ], "action-bar__nav_link"])
        }, [
          (r(), A(de(n.icon), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" })),
          s("span", Js, m(n.label), 1)
        ], 10, Ys))), 256))
      ]),
      e.showBackButton ? (r(), u("nav", Xs, [
        s("span", {
          onClick: l[0] || (l[0] = (n) => t.$emit("button-click", "back")),
          class: "action-bar__nav_link"
        }, [
          er,
          (r(), A(de(b(al)), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" }))
        ])
      ])) : h("", !0)
    ])) : h("", !0);
  }
}), or = { class: "po-shadow-sm po-rounded-xl po-bg-white po-relative" }, lr = {
  key: 0,
  class: "po-absolute po-right-2 po-top-2 po-p-2 po-rounded-lg"
}, nr = {
  key: 0,
  class: "po-text-base po-font-medium po-text-slate-600"
}, ar = {
  key: 1,
  class: "lg:po-col-span-2 lg:po-flex lg:po-justify-end po-space-x-2"
}, sr = {
  name: "PoCard"
}, N1 = /* @__PURE__ */ Object.assign(sr, {
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
    return (t, l) => (r(), u("div", or, [
      e.isLoading ? (r(), u("div", lr, [
        _(At)
      ])) : h("", !0),
      s("div", {
        class: E([
          { "po-grid po-grid-cols-1 lg:po-grid-cols-3 po-gap-3": t.$slots.action }
        ])
      }, [
        e.title.length > 0 ? (r(), u("h3", nr, m(e.title), 1)) : h("", !0),
        t.$slots.action ? (r(), u("div", ar, [
          te(t.$slots, "action")
        ])) : h("", !0)
      ], 2),
      te(t.$slots, "content")
    ]));
  }
}), rr = { class: "po-py-3 po-px-5 po-border-b po-border-slate-200" }, ir = {
  class: "po-flex po-w-full md:po-ml-0",
  action: "#",
  method: "GET"
}, ur = {
  for: "search-field",
  class: "po-sr-only"
}, pr = { class: "po-relative po-w-full po-text-slate-400 focus-within:po-text-mpao-lightblue po-transition-colors po-duration-100 po-ease-in-out" }, cr = { class: "po-pointer-events-none po-absolute po-inset-y-0 po-left-0 po-flex po-items-center" }, dr = ["placeholder", "value"], fr = ["disabled"], vr = {
  name: "PoCardSearch"
}, A1 = /* @__PURE__ */ Object.assign(vr, {
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
    return (l, n) => (r(), u("div", rr, [
      s("form", ir, [
        s("label", ur, m(e.placeholder), 1),
        s("div", pr, [
          s("div", cr, [
            _(b(Vt), { class: "po-h-5 po-w-5 po-flex-shrink-0" })
          ]),
          s("input", {
            name: "search-field",
            id: "desktop-search-field",
            placeholder: e.placeholder,
            value: e.modelValue,
            onInput: n[0] || (n[0] = (o) => l.$emit("update:modelValue", o.target.value)),
            class: "po-h-full po-w-full po-border-transparent po-py-2 po-pl-8 po-pr-3 po-text-sm po-text-slate-700 po-placeholder-slate-500 focus:po-border-transparent focus:po-placeholder-slate-400 focus:po-outline-none focus:po-ring-0",
            type: "search"
          }, null, 40, dr),
          e.showBtn ? (r(), u("button", {
            key: 0,
            class: E(["po-absolute po-right-0 po-text-sm po-rounded-full po-px-3 po-py-2 po-transition-colors po-duration-150 po-ease-out", [
              { "po-bg-mpao-lightblue po-text-white": e.modelValue !== "" },
              { "po-bg-slate-100 po-text-slate-400": e.modelValue === "" }
            ]]),
            disabled: e.modelValue === "",
            onClick: n[1] || (n[1] = re((o) => l.$emit("button-click", e.modelValue), ["prevent"]))
          }, " Search ", 10, fr)) : h("", !0)
        ])
      ])
    ]));
  }
}), mr = { class: "po-flex po-items-center" }, hr = { class: "po-text-sm po-font-medium po-text-slate-500 po-pr-2" }, br = {
  name: "PoPagination"
}, gr = /* @__PURE__ */ Object.assign(br, {
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
    const l = e;
    function n() {
      t("button-click", "prev"), t("prev-click", !0);
    }
    function o() {
      t("button-click", "next"), t("next-click", !0);
    }
    const a = S(() => l.totalPages ? `Page ${l.currentPage} of ${l.totalPages}` : l.pagination ? l.pagination.label : "");
    return (i, p) => (r(), u("div", mr, [
      s("span", hr, m(b(a)), 1),
      s("button", {
        title: "Previous",
        onClick: n,
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        _(b(fl), { class: "po-w-4 po-stroke-current po-stroke-2" })
      ]),
      s("button", {
        title: "Next",
        onClick: o,
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        _(b(vl), { class: "po-w-4 po-stroke-current po-stroke-2" })
      ])
    ]));
  }
}), yr = { key: 0 }, xr = {
  class: "po-text-xl md:po-text-2xl po-font-semibold po-text-slate-800",
  id: "po-page-title"
}, wr = {
  key: 0,
  class: "po-text-base po-mt-2 po-max-w-md po-block po-text-slate-500"
}, Vr = { key: 1 }, kr = { class: "po-grid po-grid-cols-1 lg:po-grid-cols-2 po-gap-5" }, $r = {
  class: "po-text-xl md:po-text-2xl po-font-semibold po-text-slate-800",
  id: "po-page-title"
}, Cr = {
  key: 0,
  class: "po-text-base po-mt-4 po-max-w-md po-pb-5 po-block po-text-slate-500"
}, _r = { class: "po-flex po-items-end po-justify-end po-flex-col" }, Sr = {
  key: 0,
  class: "po-flex md:po-justify-end po-mb-5"
}, Pr = { class: "po-bg-slate-50 po-shadow-sm po-rounded-xl po-py-5 po-px-2 po-divide-x po-divide-slate-200 po-flex" }, Or = ["onClick"], Er = { class: "po-text-xl po-font-medium po-text-slate-600 po-flex po-items-center po-space-x-1" }, Lr = { class: "po-text-xl po-font-medium po-text-slate-600 group-hover:po-text-mpao-lightblue" }, Tr = { class: "po-text-sm po-text-slate-500 po-block group-hover:po-text-mpao-lightblue" }, Br = { class: "po-flex po-items-center po-space-x-1 md:po-justify-end" }, Dr = {
  key: 2,
  class: "po-border-l po-border-slate-400 po-h-3 po-w-3 po-ml-1"
}, jr = {
  key: 0,
  class: "po-bg-slate-50 po-p-5 po-mt-5 po-rounded-md po-grid po-grid-cols-1 md:po-grid-cols-3 po-gap-5"
}, Nr = /* @__PURE__ */ s("span", { class: "po-text-xs po-text-slate-500 po-py-5" }, "No filters available at the moment.", -1), Ar = {
  name: "PoPageTitle"
}, M1 = /* @__PURE__ */ Object.assign(Ar, {
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
    const n = e.filterOn ? k(!0) : k(!1);
    function o(i) {
      t("pagination-click", i);
    }
    function a(i) {
      return i.iconColor ? i.iconColor : "po-slate-600";
    }
    return (i, p) => e.standAlone ? (r(), u("div", yr, [
      s("h1", xr, m(e.label), 1),
      e.description !== "" ? (r(), u("span", wr, m(e.description), 1)) : h("", !0)
    ])) : (r(), u("div", Vr, [
      s("div", kr, [
        s("div", null, [
          s("h1", $r, m(e.label), 1),
          e.description !== "" ? (r(), u("span", Cr, m(e.description), 1)) : h("", !0)
        ]),
        s("div", _r, [
          e.stats !== null ? (r(), u("div", Sr, [
            s("div", Pr, [
              (r(!0), u(B, null, R(e.stats, (c) => (r(), u("div", {
                class: "po-px-5 po-cursor-pointer po-group genie-effect",
                onClick: (f) => i.$emit("stat-click", c)
              }, [
                s("span", Er, [
                  s("span", Lr, m(c.value), 1),
                  c.icon ? (r(), u("span", {
                    key: 0,
                    class: E(["po-w-5 po-h-5", a(c)])
                  }, [
                    (r(), A(de(c.icon)))
                  ], 2)) : h("", !0)
                ]),
                s("span", Tr, m(c.label), 1)
              ], 8, Or))), 256))
            ])
          ])) : h("", !0),
          s("div", Br, [
            e.showFilter ? (r(), u("button", {
              key: 0,
              title: "Filter",
              onClick: p[0] || (p[0] = (c) => {
                i.$emit("button-click", "filter"), n.value = !b(n);
              }),
              class: E([
                "po-p-2 po-rounded-md hover:po-bg-slate-200 po-transition-colors po-duration-75 po-ease-in-out",
                { "po-text-mpao-orange hover:po-text-mpao-orange": b(n) },
                { "tpo-ext-slate-600 hover:po-text-mpao-blue": !b(n) }
              ])
            }, [
              _(b(hl), { class: "po-w-4 po-stroke-current po-stroke-2" })
            ], 2)) : h("", !0),
            e.showDownload ? (r(), u("button", {
              key: 1,
              title: "Download",
              onClick: p[1] || (p[1] = (c) => i.$emit("button-click", "download")),
              class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
            }, [
              _(b(ll), { class: "po-w-4 po-stroke-current po-stroke-2" })
            ])) : h("", !0),
            e.showFilter && e.showPagination || e.showDownload && e.showPagination ? (r(), u("span", Dr, " ")) : h("", !0),
            e.showPagination ? (r(), A(gr, {
              key: 3,
              pagination: e.pagination,
              onButtonClick: o
            }, null, 8, ["pagination"])) : h("", !0)
          ])
        ])
      ]),
      _($e, {
        "enter-active-class": "po-transition po-duration-100 po-ease-out",
        "enter-from-class": "po-transform po-scale-95 po-opacity-0",
        "enter-to-class": "po-transform po-scale-100 po-opacity-100",
        "leave-active-class": "po-transition po-duration-75 po-ease-out",
        "leave-from-class": "po-transform po-scale-100 po-opacity-100",
        "leave-to-class": "po-transform po-scale-95 po-opacity-0"
      }, {
        default: T(() => [
          b(n) ? (r(), u("div", jr, [
            te(i.$slots, "filters", {}, () => [
              Nr
            ])
          ])) : h("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), Mr = {
  key: 0,
  class: "po-w-12"
}, Ir = {
  key: 0,
  class: "po-w-12"
}, Rr = ["onClick"], Fr = ["colspan"], zr = { key: 1 }, Hr = ["colspan"], qr = { class: "po-py-10 po-block po-normal-case" }, Ur = { class: "po-pr-5" }, Wr = { class: "po-py-1" }, Gr = { key: 0 }, Zr = {
  name: "PoTable",
  components: { ArrowRightCircleIcon: Ro }
}, I1 = /* @__PURE__ */ Object.assign(Zr, {
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
    const t = e, { isLoading: l, tbody: n } = ye(t), o = k(!1), a = k(null);
    U(l, () => {
      i();
    }), U(n, () => {
      i(), p();
    }), H(() => {
      i(), p();
    });
    function i() {
      o.value = l.value, a.value = n.value, l.value && (a.value = [{}, {}, {}, {}, {}]);
    }
    function p() {
      if (t.hasDetailsRow)
        for (let f = 0; f < t.tbody.length; f++)
          t.tbody[f].showDetails = !1;
    }
    function c() {
      return Math.floor(Math.random() * 41) + 40;
    }
    return (f, d) => (r(), u("table", {
      class: E(["table-responsive po-w-full", [{ lg: e.breakAtLg }]])
    }, [
      s("thead", null, [
        s("tr", null, [
          e.hasDetailsRow ? (r(), u("th", Mr)) : h("", !0),
          (r(!0), u(B, null, R(e.thead, (v) => (r(), u("th", null, [
            te(f.$slots, "th", Me(Ie(v)))
          ]))), 256))
        ])
      ]),
      s("tbody", null, [
        a.value !== null && !o.value || a.value !== null && a.value.length !== 0 && !o.value ? (r(!0), u(B, { key: 0 }, R(a.value, (v, V) => (r(), u(B, null, [
          s("tr", null, [
            e.hasDetailsRow ? (r(), u("td", Ir, [
              s("span", {
                onClick: (y) => v.showDetails = !v.showDetails
              }, [
                _(b(Ro), {
                  class: E(["po-w-5 po-fill-mpao-lightblue po-origin-center po-transition-transform po-duration-100 po-ease-out po-cursor-pointer", [{ "po-rotate-90": v.showDetails }]])
                }, null, 8, ["class"])
              ], 8, Rr)
            ])) : h("", !0),
            te(f.$slots, "td", Me(Ie({ ...v, index: V, item: v })))
          ]),
          e.hasDetailsRow ? (r(), u("tr", {
            key: 0,
            class: E(["po-table-details-row", [{ "po-hidden": !v.showDetails }]])
          }, [
            s("td", {
              colspan: e.thead.length + 1
            }, [
              te(f.$slots, "details", Me(Ie({ item: v })))
            ], 8, Fr)
          ], 2)) : h("", !0)
        ], 64))), 256)) : h("", !0),
        a.value == null && !o.value || a.value !== null && a.value.length == 0 && !o.value ? (r(), u("tr", zr, [
          s("td", {
            colspan: e.thead.length + 1,
            class: "po-text-center"
          }, [
            s("span", qr, m(e.emptyMessage), 1)
          ], 8, Hr)
        ])) : h("", !0),
        o.value ? (r(!0), u(B, { key: 2 }, R(a.value, (v) => (r(), u("tr", null, [
          (r(!0), u(B, null, R(e.thead, (V) => (r(), u("td", Ur, [
            s("div", Wr, [
              s("div", {
                class: "po-h-2 loading-placeholder po-rounded-full",
                style: xt({ width: c() + "%" })
              }, null, 4)
            ])
          ]))), 256))
        ]))), 256)) : h("", !0)
      ]),
      f.$slots.tfoot ? (r(), u("tfoot", Gr, [
        s("tr", null, [
          te(f.$slots, "tfoot")
        ])
      ])) : h("", !0)
    ], 2));
  }
}), Kr = ["onUpdate:modelValue", "id"], Qr = ["for"], Yr = { class: "table-responsive po-w-full" }, Jr = ["onClick"], Xr = { key: 0 }, ei = ["onClick"], ti = {
  name: "PoDynamicTable",
  components: { ArrowsUpDownIcon: zo, ArrowUpIcon: Fo, ArrowDownIcon: Io }
}, R1 = /* @__PURE__ */ Object.assign(ti, {
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
    const t = e, l = k(t.columns), n = k(null), o = k(null), a = (c) => {
      c.hidden = !c.hidden, l.value = t.columns.filter((f) => !f.hidden);
    }, i = (c) => {
      c.sortable && (c.sorted && o.value === "asc" ? o.value = "desc" : o.value = "asc", l.value.forEach((f) => {
        f.key === c.key ? (f.sorted = !0, f.sortDirection = o.value) : (f.sorted = !1, f.sortDirection = null);
      }), n.value = c);
    }, p = k([]);
    return ne(() => {
      n.value ? p.value = [...t.data].sort((c, f) => {
        let d = c[n.value.key], v = f[n.value.key];
        return typeof d == "string" && typeof v == "string" && (d = d.toLowerCase(), v = v.toLowerCase()), d < v ? o.value === "asc" ? -1 : 1 : d > v ? o.value === "asc" ? 1 : -1 : 0;
      }) : p.value = [...t.data];
    }), (c, f) => (r(), u("div", null, [
      (r(!0), u(B, null, R(l.value, (d) => (r(), u("div", null, [
        Ge(s("input", {
          type: "checkbox",
          name: "dynamic",
          "onUpdate:modelValue": (v) => d.hidden = v,
          id: `hide-table-col-${d.label}`
        }, null, 8, Kr), [
          [el, d.hidden]
        ]),
        s("label", {
          for: `hide-table-col-${d.label}`
        }, m(d.label), 9, Qr)
      ]))), 256)),
      s("table", Yr, [
        s("thead", null, [
          s("tr", null, [
            (r(!0), u(B, null, R(l.value, (d) => (r(), u("th", {
              key: d.key,
              onClick: (v) => i(d)
            }, [
              X(m(d.label) + " " + m(d.sorted) + " " + m(d.sortDirection) + " ", 1),
              d.sortable ? (r(), u("span", Xr, [
                d.sorted ? h("", !0) : (r(), A(b(zo), {
                  key: 0,
                  class: "po-w-4"
                })),
                d.sorted && d.sortDirection === "asc" ? (r(), A(b(Fo), {
                  key: 1,
                  class: "po-w-4"
                })) : h("", !0),
                d.sorted && d.sortDirection === "desc" ? (r(), A(b(Io), {
                  key: 2,
                  class: "po-w-4"
                })) : h("", !0)
              ])) : h("", !0),
              d.hidable ? (r(), u("button", {
                key: 1,
                onClick: (v) => a(d)
              }, m(d.hidden ? "Show" : "Hide"), 9, ei)) : h("", !0)
            ], 8, Jr))), 128))
          ])
        ]),
        s("tbody", null, [
          (r(!0), u(B, null, R(p.value, (d) => (r(), u("tr", {
            key: d.id
          }, [
            (r(!0), u(B, null, R(l.value, (v) => (r(), u("td", {
              key: v.key
            }, m(d[v.key]), 1))), 128))
          ]))), 128))
        ])
      ])
    ]));
  }
}), oi = { class: "" }, li = { class: "po-grow" }, ni = ["onClick"], ai = {
  name: "PoDescriptionList"
}, si = /* @__PURE__ */ Object.assign(ai, {
  props: {
    /**
     * Items to display in the list.
     */
    items: {
      type: Array,
      default: null
    },
    striped: !1
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (l, n) => (r(), u("div", null, [
      s("dl", {
        class: E([
          "po-description-list",
          { "po-divide-y po-divide-slate-200": !e.striped },
          { striped: e.striped }
        ])
      }, [
        te(l.$slots, "content", {}, () => [
          (r(!0), u(B, null, R(e.items, (o) => (r(), u("div", null, [
            s("dt", null, m(o.title), 1),
            s("dd", oi, [
              s("span", li, m(o.description), 1),
              o.action !== void 0 ? (r(), u("span", {
                key: 0,
                class: "po-shrink-0 po-text-mpao-lightblue hover:po-text-mpao-blue po-transition-colors po-duration-100 po-ease-in-out po-px-2 po-cursor-pointer",
                onClick: (a) => l.$emit("button-click", o.action)
              }, m(o.action), 9, ni)) : h("", !0)
            ])
          ]))), 256))
        ])
      ], 2)
    ]));
  }
}), ri = ["for"], ii = { class: "po-capitalize" }, ui = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, pi = ["title"], ci = ["type", "name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], di = ["id"], fi = ["id"], vi = {
  name: "PoInputField"
}, F1 = /* @__PURE__ */ Object.assign(vi, {
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
    const l = e;
    function n() {
      return l.hasError ? "po-border-red-400 focus:po-border-red-600 focus:po-ring-red-600" : l.borderColor;
    }
    const { errorMessage: o } = ye(l), a = k(o.value !== null);
    U(o, (V, y) => {
      a.value = o.value !== null && o.value !== "";
    }), U(o, (V, y) => {
      a.value = o.value !== null && o.value !== "";
    });
    let i = l.type === "currency" ? "text" : l.type;
    const p = k(null), c = (V) => {
      let y = V.target.value;
      p.value = y;
      let w = l.type === "currency" ? d(y) : y;
      t("update:modelValue", w);
    };
    U(l, (V, y) => {
      l.type === "currency" && p.value !== y.modelValue ? p.value = zt(l.modelValue) : p.value = l.modelValue;
    });
    const f = (V) => {
      let y = null;
      l.type === "currency" ? y = zt(d("" + V)) : y = V, p.value = y;
    }, d = (V) => {
      let y = V.replace(/,/g, "");
      const w = y.indexOf(".");
      return w !== -1 && y.substring(w + 1) === "00" && (y = y.substring(0, w)), y;
    };
    l.type === "currency" ? f(l.modelValue) : p.value = l.modelValue;
    const v = k("");
    return H(() => {
      l.id === "" ? v.value = l.label.replace(/\s/g, "") + "-" + Date.now() + "-inputfield-" + Math.floor(Math.random() * 9e3) : v.value = l.id;
    }), (V, y) => (r(), u("div", {
      class: E(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      s("label", {
        for: v.value,
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700"
      }, [
        s("span", ii, m(e.label), 1),
        e.required ? (r(), u("span", ui, "*")) : h("", !0),
        e.info !== null ? (r(), u("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          _(b(It), { class: "po-fill-current" })
        ], 8, pi)) : h("", !0)
      ], 8, ri),
      s("input", Ee({
        type: b(i),
        name: `${v.value}-field`,
        id: v.value,
        value: p.value,
        placeholder: e.placeholder,
        disabled: e.disabled,
        required: e.required,
        "aria-describedby": `${v.value}-description`,
        "aria-required": e.required,
        "aria-disabled": e.disabled
      }, V.$attrs, {
        onInput: c,
        onBlur: y[0] || (y[0] = (w) => f(w.target.value)),
        class: [
          "po-mt-1 peer po-block po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white focus:po-ring-0 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default",
          n()
        ]
      }), null, 16, ci),
      e.message !== null ? (r(), u("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, m(e.message), 9, di)) : h("", !0),
      a.value && b(o) !== null ? (r(), u("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
        id: `${e.id}-error`
      }, [
        s("span", null, m(b(o)), 1)
      ], 8, fi)) : h("", !0)
    ], 2));
  }
}), mi = { class: "po-text-sm po-font-medium po-text-slate-700 peer-focus:po-text-mpao-lightblue peer-invalid:po-text-red-500 peer-invalid:peer-focus:po-text-red-600 po-flex po-items-center po-space-x-1 po-capitalize" }, hi = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, bi = ["name", "id", "value"], gi = ["for"], yi = { class: "po-flex po-items-center po-space-x-1" }, xi = {
  key: 0,
  class: "po-text-sm"
}, wi = {
  key: 1,
  class: "po-text-sm"
}, Vi = {
  key: 0,
  class: "po-mt-3 po-flex po-w-full po-h-1.5 po-bg-gray-100 po-rounded-full po-overflow-hidden"
}, ki = ["aria-valuenow"], $i = ["id"], Ci = ["id"], _i = {
  name: "PoInputFile"
}, z1 = /* @__PURE__ */ Object.assign(_i, {
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
    const t = e, l = S(() => `width: ${t.progress}%`), n = S(() => t.progress), o = k(""), a = (i) => {
      const p = i.target.files[0];
      p ? o.value = p.name : o.value = "";
    };
    return (i, p) => (r(), u("div", {
      class: E(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      s("span", mi, [
        s("span", null, m(e.label), 1),
        e.required ? (r(), u("span", hi, "*")) : h("", !0)
      ]),
      s("input", {
        name: `${e.id}-upload`,
        id: `${e.id}-fileupload`,
        value: e.modelValue,
        type: "file",
        onInput: p[0] || (p[0] = (c) => i.$emit("update:modelValue", c.target.value)),
        onChange: p[1] || (p[1] = (c) => a(c)),
        class: "po-sr-only po-peer"
      }, null, 40, bi),
      s("label", {
        for: `${e.id}-fileupload`,
        class: "po-mt-1 po-block po-w-full po-border po-cursor-pointer po-rounded-md po-border-slate-300 po-bg-white peer-focus:po-border-mpao-lightblue invalid:po-border-red-400 invalid:focus:po-border-red-600 invalid:focus:po-ring-red-600 sm:po-text-sm po-p-2"
      }, [
        s("div", yi, [
          _(b(lo), { class: "po-w-4 po-stroke-slate-500" }),
          o.value ? (r(), u("span", xi, m(o.value), 1)) : (r(), u("span", wi, "Choose file"))
        ])
      ], 8, gi),
      b(n) !== null ? (r(), u("div", Vi, [
        s("div", {
          class: "po-flex po-flex-col po-justify-center po-overflow-hidden po-bg-mpao-lightblue",
          role: "progressbar",
          style: xt(b(l)),
          "aria-valuenow": b(n),
          "aria-valuemin": "0",
          "aria-valuemax": "100"
        }, null, 12, ki)
      ])) : h("", !0),
      e.message !== null ? (r(), u("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, m(e.message), 9, $i)) : h("", !0),
      e.errorMessage !== null ? (r(), u("p", {
        key: 2,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, m(e.errorMessage), 9, Ci)) : h("", !0)
    ], 2));
  }
}), Si = { class: "po-text-sm po-font-medium po-text-slate-700 po-cursor-pointer po-select-none po-flex po-items-center po-space-x-1" }, Pi = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Oi = {
  name: "PoToggle"
}, H1 = /* @__PURE__ */ Object.assign(Oi, {
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
    const l = k(e.modelValue);
    return (n, o) => (r(), A(b(zn), {
      as: "div",
      class: "po-flex po-items-center"
    }, {
      default: T(() => [
        _(b(Hn), {
          modelValue: l.value,
          "onUpdate:modelValue": o[0] || (o[0] = (a) => l.value = a),
          onClick: o[1] || (o[1] = (a) => n.$emit("update:modelValue", !l.value)),
          class: E([
            l.value ? "po-bg-mpao-lightblue" : "po-bg-slate-200",
            "po-relative po-inline-flex po-h-6 po-w-11 po-flex-shrink-0 po-cursor-pointer po-rounded-full po-border-2 po-border-transparent po-transition-colors po-duration-200 po-ease-in-out focus:po-outline-none focus:po-ring-2 focus:po-ring-mpao-lightblue focus:po-ring-offset-2"
          ])
        }, {
          default: T(() => [
            s("span", {
              "aria-hidden": "true",
              class: E([
                l.value ? "po-translate-x-5" : "po-translate-x-0",
                "po-pointer-events-none po-inline-block po-h-5 po-w-5 po-transform po-rounded-full po-bg-white po-shadow po-ring-0 po-transition po-duration-200 po-ease-in-out"
              ])
            }, null, 2)
          ]),
          _: 1
        }, 8, ["modelValue", "class"]),
        _(b(qn), {
          as: "span",
          class: "po-ml-3"
        }, {
          default: T(() => [
            s("span", Si, [
              s("span", null, m(e.label), 1),
              e.required ? (r(), u("span", Pi, "*")) : h("", !0)
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Ei = { class: "po-pt-1 po-space-y-1 po-border-r-2 po-border-slate-200 po-relative" }, Li = ["onClick"], Ti = {
  name: "PoSectionMenu"
}, q1 = /* @__PURE__ */ Object.assign(Ti, {
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
    return (t, l) => (r(), u("ul", Ei, [
      (r(!0), u(B, null, R(e.menuItems, (n) => (r(), u("li", null, [
        s("span", {
          onClick: (o) => t.$emit("link-click", n.link),
          role: "button",
          class: E([
            "po-relative po-cursor-pointer -po-right-[0.15rem] po-py-1 po-border-r-2 hover:po-border-mpao-lightblue po-transition-colors po-duration-200 po-ease-in-out po-flex po-items-center po-space-x-2",
            {
              "po-border-mpao-lightblue po-text-sm po-text-mpao-lightblue": n.link == e.currPageRoute
            },
            {
              "po-border-slate-200 po-text-sm po-text-slate-600": n.link !== e.currPageRoute
            }
          ])
        }, [
          (r(), A(de(n.icon), { class: "po-w-4 po-h-4 po-stroke-current" })),
          s("span", null, m(n.label), 1)
        ], 10, Li)
      ]))), 256))
    ]));
  }
}), Bi = { class: "po-relative po-flex po-items-start" }, Di = { class: "po-flex po-h-5 po-items-center" }, ji = ["name", "id", "checked", "disabled", "aria-describedby"], Ni = { class: "po-ml-3 po-text-sm" }, Ai = ["for"], Mi = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Ii = ["id"], Ri = { class: "po-sr-only" }, Fi = ["id"], zi = {
  name: "PoCheckbox"
}, U1 = /* @__PURE__ */ Object.assign(zi, {
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
    return (t, l) => (r(), u("div", null, [
      s("div", Bi, [
        s("div", Di, [
          s("input", Ee({
            name: `${e.id}-field`,
            id: e.id,
            checked: e.modelValue,
            disabled: e.disabled,
            "aria-describedby": `${e.id}-description`
          }, t.$attrs, {
            onInput: l[0] || (l[0] = (n) => t.$emit("update:modelValue", n.target.checked)),
            type: "checkbox",
            class: ["po-h-4 po-w-4 po-rounded po-border-slate-300 po-text-mpao-lightblue focus:po-ring-mpao-lightblue", [{ "po-bg-slate-200": e.disabled }]]
          }), null, 16, ji)
        ]),
        s("div", Ni, [
          s("label", {
            for: e.id,
            class: "po-font-medium po-text-slate-600 po-cursor-pointer po-select-none po-flex po-items-center po-space-x-1"
          }, [
            s("span", null, m(e.label), 1),
            e.required ? (r(), u("span", Mi, "*")) : h("", !0)
          ], 8, Ai),
          e.message ? (r(), u("span", {
            key: 0,
            id: `${e.id}-description`,
            class: "po-text-slate-500 po-cursor-default"
          }, [
            s("span", Ri, m(e.label), 1),
            X(" " + m(e.message), 1)
          ], 8, Ii)) : h("", !0)
        ])
      ]),
      e.errorMessage !== null ? (r(), u("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, m(e.errorMessage), 9, Fi)) : h("", !0)
    ]));
  }
}), Hi = /* @__PURE__ */ s("div", { class: "po-pb-5 po-max-w-xl" }, [
  /* @__PURE__ */ s("span", { class: "po-text-sm po-text-slate-600" }, "We're always working to improve our app, and we're excited to share the latest changes with you. We hope you enjoy these new features and improvements")
], -1), qi = { class: "po-flex po-space-x-2" }, Ui = ["onClick"], Wi = { class: "po-text-sm po-font-semibold po-slate-800" }, Gi = { class: "po-text-xs po-text-white po-px-1 po-py-0 po-rounded-md po-bg-mpao-lightblue" }, Zi = { class: "po-bg-gradient-to-t po-from-mpao-orange/20 po-via-mpao-lightblue/20 po-to-purple-500/10 -po-mb-5 -po-mx-5 po-p-5 po-pb-10" }, Ki = { key: 0 }, Qi = { class: "po-space-y-2 po-mt-5" }, Yi = { class: "po-border po-border-slate-200 po-rounded-lg po-p-3 po-bg-white" }, Ji = { class: "po-flex po-items-center po-space-x-2" }, Xi = { class: "po-text-mpao-lightblue po-grow po-text-lg" }, eu = { class: "po-font-semibold po-shrink-0 po-text-mpao-lightblue po-text-sm po-px-2 po-py-1 po-rounded-xl po-bg-mpao-lightblue/10" }, tu = ["innerHTML"], ou = {
  key: 0,
  class: "po-bg-white po-rounded-md po-px-4 po-py-3 po-block po-text-sm po-text-center po-text-mpao-lightblue hover:po-text-purple-600 po-cursor-pointer"
}, lu = {
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
    const t = k(!1), l = k(0);
    return (n, o) => (r(), u(B, null, [
      e.showBtn ? (r(), u("a", {
        key: 0,
        href: "#",
        onClick: o[0] || (o[0] = re((a) => t.value = !0, ["prevent"])),
        class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
      }, "Change logs")) : h("", !0),
      _(He, {
        show: t.value,
        onModalClosed: o[1] || (o[1] = (a) => t.value = !1),
        "modal-title": "Change Log",
        "modal-width": "sm:po-max-w-4xl",
        id: "change-log-modal"
      }, {
        content: T(() => [
          s("div", null, [
            Hi,
            s("div", qi, [
              (r(!0), u(B, null, R(e.changelog, (a, i) => (r(), u("span", {
                class: E(["po-flex po-items-center po-space-x-1 po-px-4 po-py-3 po-rounded-t-xl po-cursor-pointer", [{ "po-bg-purple-500/10": l.value === i }]]),
                onClick: (p) => l.value = i
              }, [
                s("span", Wi, m(a.label) + " Version", 1),
                s("span", Gi, m(a.latest_version), 1)
              ], 10, Ui))), 256))
            ]),
            s("div", Zi, [
              (r(!0), u(B, null, R(e.changelog, (a, i) => (r(), u("div", null, [
                l.value === i ? (r(), u("div", Ki, [
                  s("div", Qi, [
                    (r(!0), u(B, null, R(a.version_history, (p) => (r(), u("div", Yi, [
                      s("span", Ji, [
                        s("span", Xi, m(p.date), 1),
                        s("span", eu, m(p.version), 1)
                      ]),
                      s("div", {
                        class: "po-mt-3 po-prose-sm po-prose-slate",
                        innerHTML: p.note
                      }, null, 8, tu)
                    ]))), 256)),
                    a.hasMore ? (r(), u("span", ou, "More")) : h("", !0)
                  ])
                ])) : h("", !0)
              ]))), 256))
            ])
          ])
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}, st = (e, t) => {
  const l = e.__vccOpts || e;
  for (const [n, o] of t)
    l[n] = o;
  return l;
}, nu = {}, au = {
  class: "po-h-8",
  src: "https://pension.gov.mv/asset/image/en-ccc-2020-issa.png",
  alt: "issa Certificate"
};
function su(e, t) {
  return r(), u("img", au);
}
const ru = /* @__PURE__ */ st(nu, [["render", su]]), iu = {}, uu = {
  class: "po-h-8",
  src: "https://pension.gov.mv/asset/image/iso_logo.png",
  alt: "ISO 27001 Certificate"
};
function pu(e, t) {
  return r(), u("img", uu);
}
const cu = /* @__PURE__ */ st(iu, [["render", pu]]), du = { class: "-po-m-5" }, fu = ["src", "alt"], to = {
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
    return (l, n) => (r(), u(B, null, [
      (r(), A(de(e.logo), {
        onClick: n[0] || (n[0] = re((o) => t.value = !0, ["prevent"])),
        class: "po-cursor-pointer",
        role: "button"
      })),
      _(He, {
        show: t.value,
        onModalClosed: n[1] || (n[1] = (o) => t.value = !1),
        "modal-title": e.title,
        "modal-width": "sm:po-max-w-4xl",
        id: "change-log-modal"
      }, {
        content: T(() => [
          s("div", du, [
            s("img", {
              src: e.src,
              alt: e.title
            }, null, 8, fu)
          ])
        ]),
        _: 1
      }, 8, ["show", "modal-title"])
    ], 64));
  }
}, vu = /* @__PURE__ */ s("div", { class: "po-prose-sm po-prose-slate po-p-5 po-opacity-8" }, [
  /* @__PURE__ */ s("h2", { class: "po-text-red-500" }, "Sample Terms and Conditions"),
  /* @__PURE__ */ s("h3", null, "1. Acceptance of Terms"),
  /* @__PURE__ */ s("p", null, " By accessing and using this web app, you agree to be bound by these terms and conditions. "),
  /* @__PURE__ */ s("h3", null, "2. User Responsibilities"),
  /* @__PURE__ */ s("p", null, " Users are responsible for maintaining the confidentiality of their account information and complying with all applicable laws. "),
  /* @__PURE__ */ s("h3", null, "3. Privacy Policy"),
  /* @__PURE__ */ s("p", null, [
    /* @__PURE__ */ X(" Our privacy policy outlines how we collect, use, and protect your personal information. Please review our "),
    /* @__PURE__ */ s("a", { href: "privacy.html" }, "Privacy Policy"),
    /* @__PURE__ */ X(" for more details. ")
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
    /* @__PURE__ */ X(" If you have any questions or concerns about these terms and conditions, please contact us at "),
    /* @__PURE__ */ s("a", { href: "mailto:info@pension.gov.mv" }, "info@pension.gov.mv"),
    /* @__PURE__ */ X(". ")
  ])
], -1), mu = {
  __name: "ToCModel",
  setup(e) {
    const t = k(!1);
    return (l, n) => (r(), u(B, null, [
      s("a", {
        href: "#",
        onClick: n[0] || (n[0] = re((o) => t.value = !0, ["prevent"])),
        role: "button",
        class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
      }, "Terms & Conditions"),
      _(He, {
        show: t.value,
        onModalClosed: n[1] || (n[1] = (o) => t.value = !1),
        "modal-title": "Terms & Conditions",
        "modal-width": "sm:po-max-w-3xl",
        id: "change-log-modal"
      }, {
        content: T(() => [
          vu
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}, hu = /* @__PURE__ */ s("div", { class: "po-prose-sm po-prose-slate po-p-5 po-opacity-80" }, [
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
    /* @__PURE__ */ X(" If you have any questions or concerns about our privacy policy, please contact us at "),
    /* @__PURE__ */ s("a", { href: "mailto:info@pension.gov.mv" }, "info@pension.gov.mv"),
    /* @__PURE__ */ X(". ")
  ])
], -1), bu = {
  __name: "PrivacyPolicyModel",
  setup(e) {
    const t = k(!1);
    return (l, n) => (r(), u(B, null, [
      s("a", {
        href: "#",
        onClick: n[0] || (n[0] = re((o) => t.value = !0, ["prevent"])),
        role: "button",
        class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
      }, "Privacy Policy"),
      _(He, {
        show: t.value,
        onModalClosed: n[1] || (n[1] = (o) => t.value = !1),
        "modal-title": "Privacy Policy",
        "modal-width": "sm:po-max-w-3xl",
        id: "change-log-modal"
      }, {
        content: T(() => [
          hu
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}, gu = { class: "po-grid po-gap-5 po-grid-cols-1 lg:po-grid-cols-2 po-px-6 lg:po-px-8 po-mt-10 po-pb-10" }, yu = { class: "sm:po-flex po-items-start sm:po-space-x-5" }, xu = /* @__PURE__ */ s("svg", {
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
], -1), wu = { class: "po-mt-5 sm:po-mt-0" }, Vu = /* @__PURE__ */ s("p", { class: "-po-mt-1 po-text-xs po-text-slate-500" }, " 8th Floor, Allied Building , Chaandhanee Magu, Malé, 20156, Maldives ", -1), ku = { class: "po-mt-1 po-text-xs po-text-slate-500" }, $u = { class: "po-mt-1 po-text-xs po-text-slate-500 po-flex -po-mb-2 po-flex-wrap" }, Cu = {
  href: "https://www.pension.gov.mv",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, _u = /* @__PURE__ */ s("span", null, "www.pension.gov.mv", -1), Su = {
  href: "mailto:info@pension.gov.mv",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, Pu = /* @__PURE__ */ s("span", null, "info@pension.gov.mv", -1), Ou = {
  href: "tel:1441",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, Eu = /* @__PURE__ */ s("span", null, "1441", -1), Lu = { class: "po-flex lg:po-items-end po-flex-col" }, Tu = { class: "-po-mt-1 po-text-xs po-text-slate-500 po-flex -po-mb-2 po-flex-wrap" }, Bu = { class: "po-flex po-space-x-2 po-mt-3 lg:po-justify-end" }, Du = {
  name: "PoFooter"
}, W1 = /* @__PURE__ */ Object.assign(Du, {
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
    return (l, n) => (r(), u("div", null, [
      s("section", gu, [
        s("div", yu, [
          xu,
          s("div", wu, [
            Vu,
            s("p", ku, " © " + m(new Date().getFullYear()) + " Pension Office, All Rights Reserved. ", 1),
            s("p", $u, [
              s("a", Cu, [
                _(b(ys), { class: "po-w-3 po-h-3 po-fill-current" }),
                _u
              ]),
              s("a", Su, [
                _(b(bs), { class: "po-w-3 po-h-3 po-fill-current" }),
                Pu
              ]),
              s("a", Ou, [
                _(b(xs), { class: "po-w-3 po-h-3 po-fill-current" }),
                Eu
              ])
            ])
          ])
        ]),
        s("div", Lu, [
          s("nav", Tu, [
            _(lu, {
              "show-btn": e.changelog !== null,
              changelog: e.changelog
            }, null, 8, ["show-btn", "changelog"]),
            _(mu),
            _(bu)
          ]),
          s("div", Bu, [
            _(to, {
              logo: cu,
              title: "ISO/IEC 27001:2013 Certificate",
              src: ""
            }),
            _(to, {
              logo: ru,
              title: "issa Certificate",
              src: ""
            })
          ])
        ])
      ])
    ]));
  }
}), ju = { class: "po-text-sm po-text-red-700" }, Nu = {
  key: 0,
  class: "po-text-sm po-text-red-800 po-list-disc po-ml-5 po-mt-2"
}, Au = {
  key: 1,
  class: "po-flex po-items-start po-space-x-3 po-p-5 po-bg-green-50 po-rounded-md po-mt-5"
}, Mu = { class: "po-text-sm po-text-green-700" }, Iu = {
  name: "PoFormStatusMessage"
}, G1 = /* @__PURE__ */ Object.assign(Iu, {
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
    return (t, l) => e.isError ? (r(), u("div", {
      key: 0,
      class: E(["po-flex po-space-x-3 po-p-3 po-bg-red-50 po-rounded-md", [
        { "po-items-start": e.errorList !== null },
        { "po-items-center": e.errorList === null }
      ]])
    }, [
      _(b(dt), { class: "po-shrink-0 po-w-6 po-stroke-red-600" }),
      s("div", null, [
        s("span", ju, m(e.message), 1),
        e.errorList !== null ? (r(), u("ul", Nu, [
          (r(!0), u(B, null, R(e.errorList, (n) => (r(), u("li", null, m(n), 1))), 256))
        ])) : h("", !0)
      ])
    ], 2)) : (r(), u("div", Au, [
      _(b(cl), { class: "po-w-6 po-stroke-green-600" }),
      s("div", null, [
        s("span", Mu, m(e.message), 1)
      ])
    ]));
  }
}), Ru = {
  key: 0,
  class: "po-text-lg po-text-red-400 po-font-semibold"
}, Fu = {
  key: 0,
  class: "po-mt-1 po-flex -po-mb-3 po-flex-wrap"
}, zu = { class: "po-flex po-flex-1" }, Hu = { class: "po-flex po-flex-col" }, qu = ["id"], Uu = ["id"], Wu = {
  name: "PoRadioInput"
}, Z1 = /* @__PURE__ */ Object.assign(Wu, {
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
    const l = e, n = k();
    n.value = l.modelValue, yt(() => {
      n.value = l.modelValue;
    }), U(n, () => {
      t("update:modelValue", n.value), t("selected", n.value);
    });
    const { errorMessage: o } = ye(l), a = k();
    return U(o, (i, p) => {
      a.value = o.value !== null && o.value !== "";
    }), (i, p) => (r(), A(b(Mn), {
      modelValue: n.value,
      "onUpdate:modelValue": p[0] || (p[0] = (c) => n.value = c),
      class: E([{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }])
    }, {
      default: T(() => [
        _(b(Yt), { class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700" }, {
          default: T(() => [
            s("span", null, m(e.label), 1),
            e.required ? (r(), u("span", Ru, "*")) : h("", !0)
          ]),
          _: 1
        }),
        e.options !== null ? (r(), u("div", Fu, [
          (r(!0), u(B, null, R(e.options, (c) => (r(), A(b(Rn), {
            as: "template",
            key: c.id,
            value: c.id
          }, {
            default: T(({ checked: f, active: d }) => [
              s("div", {
                class: E([
                  "po-transition-colors po-duration-100 po-ease-out po-mr-3",
                  "",
                  "",
                  "po-mb-3 po-pt-[0.13rem] po-relative po-flex po-cursor-pointer focus:po-outline-none"
                ])
              }, [
                s("span", {
                  class: E(["po-w-5 po-h-5 po-rounded-full po-border po-mr-2 po-flex po-items-center po-justify-center", [
                    "",
                    f ? "po-border-mpao-lightblue" : "po-border-slate-400"
                  ]])
                }, [
                  s("span", {
                    class: E(["po-w-3 po-h-3 po-rounded-full", [
                      "",
                      f ? "po-bg-mpao-lightblue" : "po-bg-transparent"
                    ]])
                  }, null, 2)
                ], 2),
                s("span", zu, [
                  s("span", Hu, [
                    _(b(Yt), {
                      as: "span",
                      class: "po-block po-text-sm po-font-medium po-text-gray-900"
                    }, {
                      default: T(() => [
                        X(m(c.title), 1)
                      ]),
                      _: 2
                    }, 1024),
                    c.description ? (r(), A(b(Fn), {
                      key: 0,
                      as: "span",
                      class: "po-mt-1 po-flex po-items-center po-text-sm po-text-gray-500"
                    }, {
                      default: T(() => [
                        X(m(c.description), 1)
                      ]),
                      _: 2
                    }, 1024)) : h("", !0)
                  ])
                ])
              ], 2)
            ]),
            _: 2
          }, 1032, ["value"]))), 128))
        ])) : h("", !0),
        s("div", null, [
          e.message !== null ? (r(), u("p", {
            key: 0,
            class: "po-mt-2 po-text-sm po-text-slate-500",
            id: `${i.id}-description`
          }, m(e.message), 9, qu)) : h("", !0),
          a.value && b(o) !== null ? (r(), u("p", {
            key: 1,
            class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
            id: `${i.id}-error`
          }, [
            _(b(qo), { class: "po-fill-current po-w-4 po-mt-[0.2rem] po-shrink-0" }),
            s("span", null, m(b(o)), 1)
          ], 8, Uu)) : h("", !0)
        ])
      ]),
      _: 1
    }, 8, ["modelValue", "class"]));
  }
}), Gu = { class: "po-bg-white po-relative po-group po-rounded-xl focus-within:po-ring-2 focus-within:po-ring-inset focus-within:po-ring-indigo-500" }, Zu = { class: "po-block po-p-4 po-transition-colors po-duration-75 po-ease-linear" }, Ku = { class: "po-flex po-items-start po-space-x-2" }, Qu = { class: "po-flex po-items-start po-space-x-1" }, Yu = { class: "po-block po-text-2xl po-font-light po-text-slate-600" }, Ju = {
  key: 0,
  class: "po-text-sm po-text-green-500 po-font-medium po-pt-1"
}, Xu = { class: "po-text-sm po-tracking-wide po-text-slate-500" }, ep = {
  name: "PoStatsBlock"
}, K1 = /* @__PURE__ */ Object.assign(ep, {
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
    return (t, l) => (r(), u("div", {
      class: E(["po-grid po-gap-5", e.numberOfCols])
    }, [
      (r(!0), u(B, null, R(e.items, (n) => (r(), u("div", Gu, [
        s("span", Zu, [
          s("div", Ku, [
            s("div", null, [
              s("span", {
                class: E([
                  "po-inline-flex po-p-2 po-rounded-md",
                  n.bgColor,
                  n.iconColor
                ])
              }, [
                (r(), A(de(n.icon), { class: "po-w-4 po-h-4" }))
              ], 2)
            ]),
            s("div", null, [
              s("div", Qu, [
                s("span", Yu, m(n.value), 1),
                n.diff ? (r(), u("span", Ju, m(n.diff), 1)) : h("", !0)
              ]),
              s("h4", Xu, m(n.label), 1)
            ])
          ])
        ])
      ]))), 256))
    ], 2));
  }
}), tp = {
  key: 0,
  class: "po-flex po-space-x-3 po-items-start"
}, op = { class: "po-flex po-items-center po-space-x-2" }, lp = ["datetime"], np = { class: "po-text-sm po-font-medium po-text-slate-600" }, ap = ["datetime"], sp = { class: "flex" }, rp = { class: "po-flex po-pt-3 po-flex-wrap po-max-w-sm" }, ip = ["onClick"], up = {
  key: 1,
  class: "po-w-full po-text-center"
}, pp = { class: "po-inline-block po-text-sm po-italic po-text-slate-500" }, cp = /* @__PURE__ */ s("span", { class: "po-text-lg po-text-slate-300 po-px-3 po-inline-block" }, "—", -1), dp = ["datetime"], fp = {
  name: "PoChatLogItem"
}, Q1 = /* @__PURE__ */ Object.assign(fp, {
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
    return (t, l) => (r(), u("li", {
      class: E([
        "po-flex po-px-5",
        { "po-justify-end po-items-end po-flex-col": e.item.type === "first" }
      ])
    }, [
      e.item.type !== "message" ? (r(), u("div", tp, [
        e.item.type !== "first" && e.item.avatar !== "" ? (r(), u("div", {
          key: 0,
          class: "po-shrink-0 po-w-8 po-h-8 po-rounded-full po-p-1 po-bg-contain po-bg-slate-100",
          style: xt({ "background-image": `url(${e.item.avatar})` })
        }, null, 4)) : h("", !0),
        s("div", {
          class: E([
            { "po-pt-1": e.item.type !== "first" },
            {
              "po-flex po-justify-end po-items-end po-flex-col": e.item.type === "first"
            }
          ])
        }, [
          s("span", op, [
            e.item.type === "first" ? (r(), u("time", {
              key: 0,
              datetime: e.item.time,
              class: "po-text-xs po-text-slate-400"
            }, m(e.item.time_human), 9, lp)) : h("", !0),
            s("span", np, m(e.item.name), 1),
            e.item.type === "second" ? (r(), u("time", {
              key: 1,
              datetime: e.item.time,
              class: "po-text-xs po-text-slate-400"
            }, m(e.item.time_human), 9, ap)) : h("", !0)
          ]),
          s("div", {
            class: E([
              "po-mt-2 po-space-y-1",
              {
                "po-flex po-justify-end po-items-end po-flex-col": e.item.type === "first"
              }
            ])
          }, [
            te(t.$slots, "message", {}, () => [
              (r(!0), u(B, null, R(e.item.message, (n) => (r(), u("div", sp, [
                s("p", {
                  class: E([
                    "po-text-sm po-rounded-xl po-px-4 po-py-2",
                    {
                      "po-bg-slate-100 po-text-slate-600": e.item.type !== "first"
                    },
                    {
                      "po-bg-mpao-lightblue po-text-sky-50": e.item.type === "first"
                    }
                  ])
                }, m(n), 3)
              ]))), 256))
            ]),
            s("div", rp, [
              (r(!0), u(B, null, R(e.item.actions, (n) => (r(), u("button", {
                onClick: (o) => t.$emit("button-click", n.label),
                class: "po-appearance-none po-border po-border-mpao-lightblue po-bg-white hover:po-bg-mpao-lightblue po-px-3 po-py-1 po-mb-2 po-mr-2 po-rounded-lg po-text-slate-500 hover:po-text-sky-100 po-transition-colors po-duration-150 po-ease-in-out po-text-sm po-ring-0 po-outline-none"
              }, m(n.label), 9, ip))), 256))
            ])
          ], 2)
        ], 2)
      ])) : h("", !0),
      e.item.type === "message" ? (r(), u("div", up, [
        (r(!0), u(B, null, R(e.item.message, (n) => (r(), u("p", pp, [
          X(m(n) + " ", 1),
          cp,
          s("time", {
            datetime: e.item.time,
            class: "po-text-xs po-text-slate-400 po-inline-block"
          }, m(e.item.time_human), 9, dp)
        ]))), 256))
      ])) : h("", !0)
    ], 2));
  }
}), vp = {
  key: 0,
  class: "po-pointer-events-auto po-w-full po-max-w-sm po-overflow-hidden po-rounded-lg po-bg-mpao-lightblue po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5"
}, mp = { class: "po-p-4" }, hp = { class: "po-flex po-items-start" }, bp = { class: "po-flex-shrink-0" }, gp = { class: "po-ml-3 po-w-0 po-flex-1 po-pt-0.5" }, yp = { class: "po-text-sm po-font-medium po-text-sky-100" }, xp = { class: "po-mt-1 po-text-sm po-text-sky-300" }, wp = { class: "po-mt-3 po-flex po-space-x-4" }, Vp = { class: "po-ml-4 po-flex po-flex-shrink-0" }, kp = /* @__PURE__ */ s("span", { class: "po-sr-only" }, "Close", -1), $p = {
  name: "PoNotification"
}, Y1 = /* @__PURE__ */ Object.assign($p, {
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
    const l = e, { show: n } = ye(l), o = k(!1);
    U(n, () => {
      o.value = !1, setTimeout(() => {
        o.value = !0;
      }, 100);
    });
    const a = k(!1);
    return U(o, () => {
      a.value = !1, setTimeout(() => {
        a.value = !0;
      }, 200);
    }), (i, p) => o.value ? (r(), A(Ze, {
      key: 0,
      to: "#po-notifications-alert"
    }, [
      _($e, {
        "enter-active-class": "po-transform po-ease-out po-duration-300 po-transition",
        "enter-from-class": "po-translate-y-2 po-opacity-0 sm:po-translate-y-0 sm:po-translate-x-2",
        "enter-to-class": "po-translate-y-0 po-opacity-100 sm:po-translate-x-0",
        "leave-active-class": "po-transition po-ease-in po-duration-100",
        "leave-from-class": "po-opacity-100",
        "leave-to-class": "po-opacity-0"
      }, {
        default: T(() => [
          a.value ? (r(), u("div", vp, [
            s("div", mp, [
              s("div", hp, [
                s("div", bp, [
                  te(i.$slots, "icon")
                ]),
                s("div", gp, [
                  s("p", yp, m(e.label), 1),
                  s("p", xp, m(e.text), 1),
                  s("div", wp, [
                    s("button", {
                      onClick: p[0] || (p[0] = (c) => i.$emit("button-click", e.buttonLabel)),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-100 hover:po-text-sky-200 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, m(e.buttonLabel), 1),
                    s("button", {
                      onClick: p[1] || (p[1] = (c) => o.value = !1),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-300 hover:po-text-sky-500 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, " Dismiss ")
                  ])
                ]),
                s("div", Vp, [
                  s("button", {
                    type: "button",
                    onClick: p[2] || (p[2] = (c) => o.value = !1),
                    class: "po-inline-flex po-rounded-md po-bg-mpao-lightblue po-text-sky-500 hover:po-text-sky-300 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                  }, [
                    kp,
                    _(b(Rt), {
                      class: "po-h-5 po-w-5",
                      "aria-hidden": "true"
                    })
                  ])
                ])
              ])
            ])
          ])) : h("", !0)
        ]),
        _: 3
      })
    ])) : h("", !0);
  }
}), Cp = /* @__PURE__ */ s("div", { class: "po-fixed po-inset-0" }, null, -1), _p = { class: "po-absolute po-inset-0 po-overflow-hidden" }, Sp = { class: "po-pointer-events-none po-fixed po-inset-y-0 po-right-0 po-flex po-max-w-full po-pl-10" }, Pp = { class: "po-flex po-h-full po-flex-col po-overflow-y-auto po-bg-white po-shadow-xl" }, Op = { class: "po-bg-slate-50 po-py-6 po-px-4 sm:po-px-6" }, Ep = { class: "po-flex po-items-center po-justify-between" }, Lp = { class: "po-ml-3 po-flex po-h-7 po-items-center" }, Tp = /* @__PURE__ */ s("span", { class: "po-sr-only" }, "Close panel", -1), Bp = {
  key: 0,
  class: "po-mt-1"
}, Dp = { class: "po-text-sm po-text-slate-500" }, jp = {
  key: 0,
  class: "po-bg-slate-50 po-rounded-b-xl po-shrink-0"
}, Np = {
  name: "PoSlideover"
}, J1 = /* @__PURE__ */ Object.assign(Np, {
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
    const l = e, { show: n } = ye(l), o = k(!1);
    U(n, () => {
      o.value = n.value;
    });
    function a() {
      o.value = !1, t("slideover-closed", !0);
    }
    return (i, p) => (r(), A(b(ze), {
      as: "template",
      show: o.value
    }, {
      default: T(() => [
        _(b(tt), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: a
        }, {
          default: T(() => [
            Cp,
            s("div", {
              class: E(["po-fixed po-inset-0 po-overflow-hidden po-bg-black", e.screenOpacity])
            }, [
              s("div", _p, [
                s("div", Sp, [
                  _(b(Ce), {
                    as: "template",
                    enter: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "enter-from": "po-translate-x-full",
                    "enter-to": "po-translate-x-0",
                    leave: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "leave-from": "po-translate-x-0",
                    "leave-to": "po-translate-x-full"
                  }, {
                    default: T(() => [
                      _(b(ot), {
                        class: E([e.maxWidth, "po-pointer-events-auto po-w-screen"])
                      }, {
                        default: T(() => [
                          s("div", Pp, [
                            s("div", Op, [
                              s("div", Ep, [
                                _(b($o), { class: "po-text-lg po-font-medium po-text-slate-600" }, {
                                  default: T(() => [
                                    X(m(e.label), 1)
                                  ]),
                                  _: 1
                                }),
                                s("div", Lp, [
                                  s("button", {
                                    type: "button",
                                    class: "po-rounded-md po-text-slate-500 hover:po-text-mpao-lightblue focus:po-outline-none focus:po-ring-2 focus:po-ring-white",
                                    onClick: a
                                  }, [
                                    Tp,
                                    _(b(Ke), {
                                      class: "po-h-6 po-w-6",
                                      "aria-hidden": "true"
                                    })
                                  ])
                                ])
                              ]),
                              e.description ? (r(), u("div", Bp, [
                                s("p", Dp, m(e.description), 1)
                              ])) : h("", !0)
                            ]),
                            s("div", {
                              class: E([e.bgColor, "po-relative po-grow po-pt-6 po-px-4 sm:po-px-6"])
                            }, [
                              te(i.$slots, "content")
                            ], 2),
                            i.$slots.footer ? (r(), u("div", jp, [
                              te(i.$slots, "footer")
                            ])) : h("", !0)
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
}), Ap = /* @__PURE__ */ s("div", { class: "po-fixed po-inset-0 po-bg-gray-500 po-bg-opacity-25 po-transition-opacity" }, null, -1), Mp = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto po-p-4 sm:po-p-6 md:po-p-20" }, Ip = { class: "po-relative" }, Rp = {
  key: 0,
  class: "po-max-h-96 scroll-py-3 po-overflow-y-auto po-p-3"
}, Fp = {
  name: "PoCommandPalette"
}, X1 = /* @__PURE__ */ Object.assign(Fp, {
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
    const t = e, l = k(""), { show: n } = ye(t), o = k(!1);
    U(n, () => {
      o.value = !1, setTimeout(() => {
        o.value = !0;
      }, 100);
    });
    function a(i) {
      i.ctrlKey && i.key === "b" && (o.value = !0);
    }
    return H(() => {
      window.addEventListener("keyup", a);
    }), wt(() => {
      window.removeEventListener("keyup", a);
    }), (i, p) => (r(), A(b(ze), {
      show: o.value,
      as: "template",
      onAfterLeave: p[2] || (p[2] = (c) => l.value = ""),
      appear: ""
    }, {
      default: T(() => [
        _(b(tt), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: p[1] || (p[1] = (c) => o.value = !1)
        }, {
          default: T(() => [
            _(b(Ce), {
              as: "template",
              enter: "po-ease-out po-duration-300",
              "enter-from": "po-opacity-0",
              "enter-to": "po-opacity-100",
              leave: "po-ease-in po-duration-200",
              "leave-from": "po-opacity-100",
              "leave-to": "po-opacity-0"
            }, {
              default: T(() => [
                Ap
              ]),
              _: 1
            }),
            s("div", Mp, [
              _(b(Ce), {
                as: "template",
                enter: "po-ease-out po-duration-300",
                "enter-from": "po-opacity-0 po-scale-95",
                "enter-to": "po-opacity-100 po-scale-100",
                leave: "po-ease-in po-duration-200",
                "leave-from": "po-opacity-100 po-scale-100",
                "leave-to": "po-opacity-0 po-scale-95"
              }, {
                default: T(() => [
                  _(b(ot), { class: "po-mx-auto po-max-w-xl po-transform po-divide-y po-divide-gray-100 po-overflow-hidden po-rounded-xl po-bg-white po-shadow-2xl po-ring-1 po-ring-black po-ring-opacity-5 po-transition-all" }, {
                    default: T(() => [
                      s("div", Ip, [
                        _(b(Ka), {
                          class: "po-pointer-events-none po-absolute po-top-3.5 po-left-4 po-h-5 po-w-5 po-text-gray-400",
                          "aria-hidden": "true"
                        }),
                        s("input", {
                          type: "text",
                          name: "",
                          class: "po-h-12 po-w-full po-border-0 po-bg-transparent po-pl-11 po-pr-4 po-text-gray-800 po-placeholder-gray-400 focus:po-ring-0 sm:po-text-sm",
                          placeholder: "Search...",
                          onChange: p[0] || (p[0] = (c) => l.value = c.target.value)
                        }, null, 32)
                      ]),
                      e.showContent ? (r(), u("div", Rp, [
                        te(i.$slots, "content")
                      ])) : h("", !0)
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
}), zp = /* @__PURE__ */ s("div", { class: "po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity" }, null, -1), Hp = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto" }, qp = { class: "po-flex po-min-h-full po-items-start po-justify-center po-p-4 po-text-center sm:po-p-0" }, Up = { class: "po-p-5" }, Wp = { class: "po-text-center po-space-y-3" }, Gp = { key: 1 }, Zp = { class: "po-text-sm po-text-gray-600" }, Kp = { class: "po-border-t po-border-slate-200 po-flex po-divide-x po-divide-slate-200" }, Qp = {
  name: "PoAlert"
}, e0 = /* @__PURE__ */ Object.assign(Qp, {
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
  emits: ["alert-closed", "button-click"],
  setup(e, { emit: t }) {
    const l = e, { show: n } = ye(l), o = k(!1);
    U(n, () => {
      o.value = n.value;
    });
    function a() {
      o.value = !1, t("alert-closed", !0);
    }
    return (i, p) => (r(), A(b(ze), {
      as: "template",
      show: o.value
    }, {
      default: T(() => [
        _(b(tt), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: a
        }, {
          default: T(() => [
            _(b(Ce), {
              as: "template",
              enter: "po-ease-out po-duration-300",
              "enter-from": "po-opacity-0",
              "enter-to": "po-opacity-100",
              leave: "po-ease-in po-duration-200",
              "leave-from": "po-opacity-100",
              "leave-to": "po-opacity-0"
            }, {
              default: T(() => [
                zp
              ]),
              _: 1
            }),
            s("div", Hp, [
              s("div", qp, [
                _(b(Ce), {
                  as: "template",
                  enter: "po-ease-out po-duration-300",
                  "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                  "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                  leave: "po-ease-in po-duration-200",
                  "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                  "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                }, {
                  default: T(() => [
                    _(b(ot), { class: "po-relative po-transform po-overflow-hidden po-rounded-lg po-bg-white po-text-left po-shadow-xl po-transition-all sm:po-my-8 sm:po-w-full sm:po-max-w-sm" }, {
                      default: T(() => [
                        s("div", Up, [
                          s("div", Wp, [
                            e.alertTitle !== "" ? (r(), A(b($o), {
                              key: 0,
                              as: "h3",
                              class: "po-text-lg po-font-medium po-leading-6 po-text-gray-900"
                            }, {
                              default: T(() => [
                                X(m(e.alertTitle), 1)
                              ]),
                              _: 1
                            })) : h("", !0),
                            e.alertDescription !== "" ? (r(), u("div", Gp, [
                              s("p", Zp, m(e.alertDescription), 1)
                            ])) : h("", !0)
                          ])
                        ]),
                        s("div", Kp, [
                          s("button", {
                            onClick: a,
                            class: "po-text-sm po-bg-white po-text-slate-500 hover:po-bg-slate-50 po-transition-colors po-duration-100 po-ease-out po-font-medium po-py-3 po-px-5 po-w-1/2 focus:po-ring-0"
                          }, m(e.cancelBtnLabel), 1),
                          s("button", {
                            onClick: p[0] || (p[0] = (c) => {
                              i.$emit("button-click", "ok"), a();
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
}), Yp = {
  key: 0,
  class: "po-col-span-2 po-relative po-mt-5"
}, Jp = /* @__PURE__ */ s("span", {
  class: "po-absolute po-top-0 po-left-1 po--ml-px po-h-[calc(100%-7px)] po-w-0.5 po-bg-gray-200",
  "aria-hidden": "true"
}, null, -1), Xp = { class: "po-relative po-space-y-5" }, ec = { class: "po-flex po-space-x-2 po-items-start" }, tc = { class: "log-item" }, oc = { key: 0 }, lc = {
  key: 0,
  class: "po-text-slate-500 po-text-xs"
}, nc = {
  key: 1,
  class: "po-text-center po-py-10"
}, ac = { class: "po-text-sm po-text-slate-500" }, sc = {
  name: "PoLogs"
}, t0 = /* @__PURE__ */ Object.assign(sc, {
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
    return (t, l) => (r(), u("div", null, [
      e.items && e.items.length > 0 ? (r(), u("div", Yp, [
        Jp,
        s("div", Xp, [
          (r(!0), u(B, null, R(e.items, (n, o) => (r(), u("div", ec, [
            s("p", {
              class: E([
                "po-rounded-full po-w-2 po-h-2 border-1 po-border-white po-shrink-0",
                { "po-bg-orange-400": o !== e.items.length - 1 },
                ,
                { "po-bg-slate-300": o == e.items.length - 1 }
              ])
            }, null, 2),
            s("div", tc, [
              s("span", null, [
                X(m(n.label) + " on " + m(n.date) + " " + m(n.by && n.by !== "" ? "by" : "") + " ", 1),
                n.by && n.by !== "" ? (r(), u("span", oc, m(n.by), 1)) : h("", !0)
              ]),
              n.description && n.description !== "" ? (r(), u("blockquote", lc, ' "' + m(n.description) + '" ', 1)) : h("", !0)
            ])
          ]))), 256))
        ])
      ])) : (r(), u("div", nc, [
        s("span", ac, m(e.emptyLabel), 1)
      ]))
    ]));
  }
}), rc = {
  key: 0,
  role: "list",
  class: "po-divide-y po-divide-gray-200 po-rounded-md po-border po-border-gray-200 po-mt-5"
}, ic = { class: "po-flex po-items-center po-justify-between po-py-3 po-pl-3 po-pr-4 po-text-sm" }, uc = { class: "po-flex po-w-0 po-flex-1 po-items-center" }, pc = { class: "po-ml-2 po-w-0 po-flex-1 po-truncate" }, cc = { class: "po-ml-4 po-flex-shrink-0 po-space-x-4" }, dc = ["onClick"], fc = ["onClick"], vc = {
  key: 1,
  class: "po-py-10"
}, mc = { class: "po-text-sm po-text-slate-500" }, hc = {
  name: "PoDownloadFileList"
}, o0 = /* @__PURE__ */ Object.assign(hc, {
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
    return (l, n) => (r(), u("div", null, [
      e.files && e.files.length > 0 ? (r(), u("ul", rc, [
        (r(!0), u(B, null, R(e.files, (o) => (r(), u("li", ic, [
          s("div", uc, [
            _(b(lo), {
              class: "po-h-5 po-w-5 po-flex-shrink-0 po-text-gray-400",
              "aria-hidden": "true"
            }),
            s("span", pc, m(o.label), 1)
          ]),
          s("div", cc, [
            s("a", {
              href: "#",
              onClick: re((a) => l.$emit("button-click", o), ["prevent"]),
              class: "po-font-medium po-text-mpao-lightblue hover:po-text-indigo-500"
            }, m(e.linkLabel), 9, dc),
            e.showViewBtn ? (r(), u("a", {
              key: 0,
              href: "#",
              onClick: re((a) => l.$emit("view-click", o), ["prevent"]),
              class: "po-font-medium po-text-mpao-lightblue hover:po-text-indigo-500"
            }, m(e.viewBtnLabel), 9, fc)) : h("", !0)
          ])
        ]))), 256))
      ])) : (r(), u("div", vc, [
        s("span", mc, m(e.emptyLabel), 1)
      ]))
    ]));
  }
}), bc = {
  name: "PoContentArea"
}, gc = { class: "shell-content--area po-max-w-[1370px]" };
function yc(e, t, l, n, o, a) {
  return r(), u("section", gc, [
    te(e.$slots, "default")
  ]);
}
const l0 = /* @__PURE__ */ st(bc, [["render", yc]]), xc = {
  name: "AnimatedLogo"
}, wc = /* @__PURE__ */ tl('<div><svg class="po-stroke-mpao-blue po-w-16 animated-logo" viewBox="0 0 62 55" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.76292 17.8572L7.7 17.9704V18.0682C6.87397 19.526 6.23618 20.649 5.58241 21.4779C4.93472 22.299 4.30505 22.7864 3.51417 23.0053C3.46261 23.0112 3.41718 23.0206 3.39088 23.026C3.35663 23.0331 3.31491 23.0425 3.27694 23.0511C3.25988 23.055 3.24357 23.0587 3.22903 23.0619C3.1106 23.0882 3.03712 23.1 3 23.1H2.93844L2.89561 23.1107L15.9876 0.600006H19.1308C17.2397 1.92747 16.1556 3.83665 15.5371 5.73245C14.8359 7.88203 14.7198 10.0514 14.7027 11.4258C13.1737 11.6033 11.0729 12.4434 9.38038 15.128C8.77075 16.0431 8.26353 16.9561 7.76713 17.8496L7.76292 17.8572Z"></path><path d="M48.1818 11.3241C48.047 8.39742 47.5389 6.05982 46.5472 4.07639C45.8153 2.61266 44.8203 1.39271 43.5945 0.5H46.8113L59.8583 23.0959C59.8303 23.0912 59.7891 23.0819 59.7213 23.0649C59.7166 23.0638 59.7117 23.0625 59.7066 23.0612C59.6302 23.042 59.5099 23.0118 59.3765 23.0027C58.59 22.7825 57.9627 22.2958 57.3176 21.4779C56.6586 20.6423 56.0158 19.508 55.1801 18.0331L55.1413 17.9647C54.8861 17.4553 54.6068 16.973 54.3362 16.5054L54.3327 16.4995C54.0565 16.0225 53.7893 15.5605 53.5472 15.0764L53.5333 15.0485L53.516 15.0226C51.7283 12.3411 49.7115 11.4988 48.1818 11.3241Z"></path><path d="M9.28397 39.6773C11.0717 42.3589 13.0885 43.2011 14.6182 43.3759C14.753 46.3026 15.2611 48.6402 16.2528 50.6236C16.9991 52.1163 17.9653 53.2992 19.1863 54.2H15.7881L2.74125 31.699C2.76073 31.6996 2.78031 31.7 2.8 31.7C2.89335 31.7 2.97474 31.7149 3.07903 31.7381C3.08854 31.7402 3.09897 31.7426 3.11023 31.7452C3.18647 31.7626 3.30082 31.7888 3.42319 31.7972C4.20888 32.0178 4.86081 32.5271 5.52047 33.3603C6.20216 34.2214 6.85697 35.382 7.66164 36.8405C8.26116 37.9396 8.76739 38.8512 9.276 39.665L9.27989 39.6712L9.28397 39.6773Z"></path><path d="M55.124 36.865L55.1331 36.8504L55.1412 36.8353C55.9431 35.3316 56.5997 34.1683 57.2697 33.307C57.9146 32.4778 58.5471 31.9616 59.2949 31.6961C59.4179 31.6866 59.5418 31.6616 59.6287 31.6442C59.6354 31.6428 59.6418 31.6415 59.6481 31.6403C59.719 31.6261 59.772 31.616 59.8123 31.6095L46.8115 54.1H43.8753C45.7283 52.7465 46.7867 50.8277 47.3889 48.9394C48.064 46.8226 48.1795 44.7058 48.1971 43.3742C49.7262 43.1967 51.8271 42.3567 53.5196 39.6719C53.8327 39.2016 54.1164 38.6849 54.3777 38.1995C54.4112 38.1375 54.4442 38.076 54.4768 38.0152C54.7049 37.5906 54.9148 37.1996 55.124 36.865Z"></path><path d="M32.2763 51.5708L32.2653 51.5582L32.2536 51.5465C32.0661 51.359 31.7413 51.2 31.4 51.2C31.3949 51.2 31.3894 51.2 31.3835 51.2C31.2956 51.1998 31.1323 51.1993 30.9751 51.2442C30.7932 51.2962 30.6132 51.4082 30.4904 51.6086C29.1941 53.0706 27.544 53.8 25.5 53.8C22.8209 53.8 20.828 52.9218 19.4532 51.2005C18.1148 49.5247 17.3123 46.988 17.1201 43.5109C18.6883 43.1579 19.8601 42.2673 20.5004 41.6896C20.5136 44.8271 20.8579 46.8152 21.6737 48.0181C22.5558 49.319 23.9045 49.6 25.5 49.6C27.4335 49.6 28.5187 48.2893 29.0946 46.9901C29.6604 45.7138 29.7966 44.3347 29.7999 43.8193C29.8943 42.5846 30.6602 41.8 31.5 41.8H31.5778C32.4558 41.8842 33.2 42.7102 33.2 43.9C33.2 45.6119 33.5619 47.0065 34.2986 47.9982C35.0485 49.0077 36.1459 49.544 37.4792 49.5996L37.4896 49.6H37.5C39.2304 49.6 40.5973 49.3258 41.4454 48.0081C41.849 47.3811 42.1078 46.5565 42.2692 45.5056C42.4311 44.4518 42.5 43.1353 42.5 41.5V24.4455L45.9 21.8182V41.5C45.9 41.4958 45.8996 41.5001 45.8978 41.519C45.8959 41.5381 45.8927 41.5719 45.887 41.6267L45.8842 41.6541C45.8752 41.7406 45.8636 41.8524 45.8521 41.9797C45.8264 42.2614 45.8 42.6283 45.8 43V43.9V43.9029V43.9059V43.9088V43.9117V43.9146V43.9175V43.9205V43.9234V43.9263V43.9292V43.9321V43.935V43.9379V43.9408V43.9437V43.9466V43.9495V43.9524V43.9553V43.9581V43.961V43.9639V43.9668V43.9696V43.9725V43.9754V43.9783V43.9811V43.984V43.9868V43.9897V43.9926V43.9954V43.9983V44.0011V44.004V44.0068V44.0096V44.0125V44.0153V44.0181V44.021V44.0238V44.0266V44.0295V44.0323V44.0351V44.0379V44.0407V44.0435V44.0463V44.0492V44.052V44.0548V44.0576V44.0603V44.0631V44.0659V44.0687V44.0715V44.0743V44.0771V44.0798V44.0826V44.0854V44.0882V44.0909V44.0937V44.0965V44.0992V44.102V44.1047V44.1075V44.1102V44.113V44.1157V44.1185V44.1212V44.1239V44.1267V44.1294V44.1321V44.1349V44.1376V44.1403V44.143V44.1457V44.1484V44.1512V44.1539V44.1566V44.1593V44.162V44.1647V44.1674V44.17V44.1727V44.1754V44.1781V44.1808V44.1835V44.1861V44.1888V44.1915V44.1941V44.1968V44.1995V44.2021V44.2048V44.2074V44.2101V44.2127V44.2154V44.218V44.2207V44.2233V44.2259V44.2285V44.2312V44.2338V44.2364V44.239V44.2417V44.2443V44.2469V44.2495V44.2521V44.2547V44.2573V44.2599V44.2625V44.2651V44.2677V44.2702V44.2728V44.2754V44.278V44.2806V44.2831V44.2857V44.2882V44.2908V44.2934V44.2959V44.2985V44.301V44.3036V44.3061V44.3087V44.3112V44.3137V44.3163V44.3188V44.3213V44.3238V44.3264V44.3289V44.3314V44.3339V44.3364V44.3389V44.3414V44.3439V44.3464V44.3489V44.3514V44.3539V44.3564V44.3588V44.3613V44.3638V44.3663V44.3687V44.3712V44.3737V44.3761V44.3786V44.381V44.3835V44.3859V44.3884V44.3908V44.3932V44.3957V44.3981V44.4005V44.403V44.4054V44.4078V44.4102V44.4126V44.415V44.4174V44.4199V44.4223V44.4247V44.427V44.4294V44.4318V44.4342V44.4366V44.439V44.4413V44.4437V44.4461V44.4484V44.4508V44.4532V44.4555V44.4579V44.4602V44.4626V44.4649V44.4672V44.4696V44.4719V44.4742V44.4766V44.4789V44.4812V44.4835V44.4858V44.4882V44.4905V44.4928V44.4951V44.4974V44.4997V44.5019V44.5042V44.5065V44.5088V44.5111V44.5133V44.5156V44.5179V44.5201V44.5224V44.5247V44.5269V44.5292V44.5314V44.5337V44.5359V44.5381V44.5404V44.5426V44.5448V44.547V44.5493V44.5515V44.5537V44.5559V44.5581V44.5603V44.5625V44.5647V44.5669V44.5691V44.5713V44.5734V44.5756V44.5778V44.58V44.5821V44.5843V44.5865V44.5886V44.5908V44.5929V44.5951V44.5972V44.5994V44.6015V44.6036V44.6058V44.6079V44.61V44.6121V44.6142V44.6164V44.6185V44.6206V44.6227V44.6248V44.6269V44.6289V44.631V44.6331V44.6352V44.6373V44.6393V44.6414V44.6435V44.6455V44.6476V44.6497V44.6517V44.6538V44.6558V44.6578V44.6599V44.6619V44.6639V44.666V44.668V44.67V44.672V44.674V44.676V44.678V44.68V44.682V44.684V44.686V44.688V44.69V44.692V44.6939V44.6959V44.6979V44.6998V44.7018V44.7037V44.7057V44.7076V44.7096V44.7115V44.7135V44.7154V44.7173V44.7193V44.7212V44.7231V44.725V44.7269V44.7288V44.7307V44.7326V44.7345V44.7364V44.7383V44.7402V44.7421V44.7439V44.7458V44.7477V44.7495V44.7514V44.7533V44.7551V44.757V44.7588V44.7606V44.7625V44.7643V44.7661V44.768V44.7698V44.7716V44.7734V44.7752V44.777V44.7788V44.7806V44.7824V44.7842V44.786V44.7878V44.7896V44.7914V44.7931V44.7949V44.7967V44.7984V44.8002V44.8019V44.8037V44.8054V44.8071V44.8089V44.8106V44.8123V44.8141V44.8158V44.8175V44.8192V44.8209V44.8226V44.8243V44.826V44.8277V44.8294V44.8311V44.8328V44.8344V44.8361V44.8378V44.8394V44.8411V44.8427V44.8444V44.846V44.8477V44.8493V44.851V44.8526V44.8542V44.8558V44.8575V44.8591V44.8607V44.8623V44.8639V44.8655V44.8671V44.8687V44.8702V44.8718V44.8734V44.875V44.8765V44.8781V44.8797V44.8812V44.8828V44.8843V44.8859V44.8874V44.8889V44.8905V44.892V44.8935V44.895V44.8965V44.898V44.8996V44.9011V44.9025V44.904V44.9055V44.907V44.9085V44.91V44.9114V44.9129V44.9144V44.9158V44.9173V44.9187V44.9202V44.9216V44.923V44.9245V44.9259V44.9273V44.9288V44.9302V44.9316V44.933V44.9344V44.9358V44.9372V44.9386V44.9399V44.9413V44.9427V44.9441V44.9454V44.9468V44.9482V44.9495V44.9509V44.9522V44.9535V44.9549V44.9562V44.9575V44.9589V44.9602V44.9615V44.9628V44.9641V44.9654V44.9667V44.968V44.9693V44.9706V44.9718V44.9731V44.9744V44.9757V44.9769V44.9782V44.9794V44.9807V44.9819V44.9832V44.9844V44.9856V44.9868V44.9881V44.9893V44.9905V44.9917V44.9929V44.9941V44.9953V44.9965V44.9977V44.9988V45V45.1V45.1006V45.1012V45.1017V45.1023V45.1029V45.1035V45.104V45.1046V45.1052V45.1057V45.1063V45.1069V45.1074V45.108V45.1085V45.1091V45.1096V45.1102V45.1107V45.1113V45.1118V45.1123V45.1129V45.1134V45.1139V45.1145V45.115V45.1155V45.1161V45.1166V45.1171V45.1176V45.1181V45.1186V45.1191V45.1196V45.1202V45.1207V45.1212V45.1217V45.1222V45.1226V45.1231V45.1236V45.1241V45.1246V45.1251V45.1256V45.1261V45.1265V45.127V45.1275V45.128V45.1284V45.1289V45.1294V45.1298V45.1303V45.1307V45.1312V45.1317V45.1321V45.1326V45.133V45.1335V45.1339V45.1343V45.1348V45.1352V45.1357V45.1361V45.1365V45.137V45.1374V45.1378V45.1383V45.1387V45.1391V45.1395V45.1399V45.1404V45.1408V45.1412V45.1416V45.142V45.1424V45.1428V45.1432V45.1436V45.144V45.1444V45.1448V45.1452V45.1456V45.146V45.1464V45.1468V45.1471V45.1475V45.1479V45.1483V45.1487V45.149V45.1494V45.1498V45.1501V45.1505V45.1509V45.1512V45.1516V45.152V45.1523V45.1527V45.153V45.1534V45.1537V45.1541V45.1544V45.1548V45.1551V45.1555V45.1558V45.1561V45.1565V45.1568V45.1572V45.1575V45.1578V45.1581V45.1585V45.1588V45.1591V45.1594V45.1598V45.1601V45.1604V45.1607V45.161V45.1613V45.1616V45.162V45.1623V45.1626V45.1629V45.1632V45.1635V45.1638V45.1641V45.1644V45.1647V45.165V45.1652V45.1655V45.1658V45.1661V45.1664V45.1667V45.167V45.1672V45.1675V45.1678V45.1681V45.1683V45.1686V45.1689V45.1691V45.1694V45.1697V45.1699V45.1702V45.1705V45.1707V45.171V45.1712V45.1715V45.1717V45.172V45.1722V45.1725V45.1727V45.173V45.1732V45.1735V45.1737V45.174V45.1742V45.1744V45.1747V45.1749V45.1751V45.1753C45.5039 48.1507 44.6544 50.2924 43.3031 51.6899C41.9582 53.0807 40.0524 53.8 37.5 53.8C35.4235 53.8 33.5685 53.0476 32.2763 51.5708Z"></path><path d="M22.8 23.2538V18.2178L29.3909 23.307L26.1939 25.8645L22.8 23.2538Z"></path><path d="M16.7 20.2V19.7H16.5V18.8V10.858C16.5042 10.8478 16.5096 10.8348 16.5142 10.8232C16.5488 10.7368 16.5963 10.6012 16.5998 10.4209C16.8474 7.03069 17.6799 4.61275 19.0737 3.04468C20.4543 1.49155 22.4511 0.699997 25.2 0.699997C27.2568 0.699997 29.1263 1.53906 30.5352 3.04197L30.5407 3.04785L30.5464 3.05355C30.7614 3.26854 31.0508 3.35 31.3 3.35C31.5492 3.35 31.8386 3.26854 32.0536 3.05355L32.0646 3.04251L32.0749 3.03081C33.4779 1.4408 35.1402 0.699997 37.3 0.699997C40.0769 0.699997 42.1441 1.62655 43.5571 3.42174C44.934 5.17104 45.7393 7.80743 45.886 11.3874C44.0184 11.8028 42.6345 12.9721 42.1 13.4936V13.2C42.1 10.0544 41.7835 8.06299 40.9925 6.86242C40.1497 5.58316 38.8495 5.3 37.3 5.3C35.4114 5.3 34.3769 6.59229 33.8399 7.85422C33.3055 9.11015 33.2 10.457 33.2 10.9C33.2 12.2634 32.2859 13.1 31.3 13.1H31.2204C30.2388 13.0141 29.4 12.0845 29.4 10.8C29.4 9.19015 29.0639 7.84653 28.3661 6.89234C27.6525 5.91665 26.5974 5.4 25.3 5.4C23.6267 5.4 22.3017 5.64608 21.4896 6.93319C21.1052 7.5425 20.863 8.34586 20.7131 9.3714C20.5626 10.4004 20.5 11.6909 20.5 13.3V30.4541L16.7 33.3833V20.2Z"></path><path d="M40.1 31.5462V36.5799L33.4225 31.4049L36.6974 28.9288L40.1 31.5462Z"></path><mask id="path-9-inside-1" fill="white"><path d="M58.7 30.1C58.9 30 59.5 30 59.8 29.9C60.9 29.8 61.8 28.7 61.8 27.4C61.8 26.1 60.9 25 59.8 24.9C59.7 24.9 59.5 24.9 59.4 24.8C59.3 24.8 59.2 24.8 59.1 24.7C59.1 24.7 59.1 24.7 59 24.7C58.6 24.6 58.1 24.4 57.7 24.1C57.7 24.1 57.7 24.1 57.6 24C56.1 23.1 55 21.2 53.6 18.7C53.1 17.8 52.6 16.9 52 16C50.5 13.7 48.9 13.1 47.8 13C47.7 13 47.6 13 47.5 13H47.3C47.1 13 46.9 13 46.9 13C45.2 13.2 44 14.3 43.6 14.8L25.2 29.1C25.2 29.1 25.2 29.1 25.1 29.2L23 30.8L16.8 35.5L16.4 35.9C16.4 35.9 16.4 35.9 16.3 35.9C16 36.1 15.7 36.3 15.4 36.3C15.1 36.3 14.9 36.2 14.7 36.1C14.5 35.9 14.4 35.8 14.3 35.5C13.9 34.8 13.4 34.1 13 33.3V33.1C12.2 31.7 11.3 30 10.1 28.6C10.1 28.6 10.1 28.6 10.1 28.5L10 28.4C9.9 28.3 9.9 28.3 9.8 28.2C9.8 28.2 9.8 28.2 9.7 28.1L9.2 27.5C9.2 27.5 9.2 27.5 9.1 27.5C9 27.3 9 27.1 9.1 27L9.6 26.5C10.9 25 11.9 23.2 12.8 21.6V21.5C13.2 20.7 13.7 19.9 14.2 19.1C14.4 18.8 14.6 18.6 14.7 18.5V13.1C13.6 13.2 12 13.9 10.6 16C10 16.9 9.5 17.8 9 18.7C7.8 20.9 6.8 22.5 5.6 23.5C4.8 24.1 4 24.4 3.5 24.6C3.5 24.6 3.5 24.6 3.4 24.6C3.3 24.6 3.1 24.7 3 24.7C2.9 24.7 2.9 24.7 2.8 24.7C2.7 24.7 2.7 24.7 2.7 24.7H2.6H2.5C2.3 24.7 2.2 24.8 2.1 24.8C2 24.8 2 24.8 2 24.9C1.7 25.1 1.4 25.3 1.2 25.6C1.2 25.7 1.1 25.7 1.1 25.8V25.9L0.999997 26.1C0.999997 26.2 0.999997 26.2 0.899997 26.3C0.899997 26.4 0.899997 26.4 0.799997 26.5C0.799997 26.6 0.799997 26.7 0.699997 26.7C0.699997 26.8 0.699997 26.9 0.699997 26.9C0.699997 27 0.699997 27.1 0.699997 27.1C0.699997 27.2 0.699997 27.2 0.699997 27.3C0.699997 27.4 0.699997 27.5 0.699997 27.5C0.699997 27.6 0.699997 27.7 0.699997 27.7C0.699997 27.8 0.699997 27.9 0.799997 27.9V28V28.1C0.799997 28.2 0.799997 28.2 0.899997 28.2L0.999997 28.4C0.999997 28.5 1.1 28.5 1.1 28.5C1.1 28.5 1.1 28.5 1.1 28.6C1.2 28.7 1.3 28.9 1.5 29C1.6 29 1.6 29.1 1.7 29.1C1.7 29.1 1.8 29.1 1.8 29.2C1.8 29.2 1.8 29.2 1.9 29.2C2 29.3 2.2 29.3 2.3 29.4C2.4 29.4 2.4 29.4 2.4 29.4L2.9 29.5C3.1 29.5 3.2 29.6 3.4 29.6C4.2 29.8 4.7 30.2 4.8 30.2C6.4 31.2 7.5 33 8.9 35.5C9.5 36.6 10 37.4 10.5 38.2C11.9 40.3 13.4 41 14.4 41.1C14.5 41.1 14.5 41.1 14.6 41.1C14.7 41.1 14.8 41.1 14.8 41.1C15 41.1 15.2 41.1 15.5 41.1H15.6C17.2 40.8 18.5 39.8 18.9 39.3L19 39.2L19.8 38.6C19.8 38.6 19.9 38.5 20 38.5L30.2 30.6L41.3 22L46.5 18H46.6C46.7 18 46.9 17.9 47 17.9C47.4 17.9 47.8 18.1 48.1 18.6L48.5 19.2C48.8 19.7 49.2 20.3 49.5 20.9V21C50.1 22.1 50.8 23.4 51.7 24.6C51.7 24.6 51.7 24.7 51.8 24.7C52.1 25.1 52.4 25.5 52.7 25.8C52.7 25.8 52.8 25.8 52.8 25.9C53 26.1 53.1 26.3 53.3 26.4C53.4 26.5 53.4 26.7 53.3 26.9C52 28.5 50.4 31.1 49.6 32.4V32.5C49.2 33.2 48.7 34.1 48.2 34.9C48 35.2 47.8 35.4 47.7 35.5V40.9C48.8 40.8 50.4 40.1 51.8 37.9C52.4 37 52.9 36 53.4 35.2C53.5 35 53.7 34.7 53.8 34.5C55.2 33 56.4 30.9 58.7 30.1Z"></path></mask><path d="M58.7 30.1C58.9 30 59.5 30 59.8 29.9C60.9 29.8 61.8 28.7 61.8 27.4C61.8 26.1 60.9 25 59.8 24.9C59.7 24.9 59.5 24.9 59.4 24.8C59.3 24.8 59.2 24.8 59.1 24.7C59.1 24.7 59.1 24.7 59 24.7C58.6 24.6 58.1 24.4 57.7 24.1C57.7 24.1 57.7 24.1 57.6 24C56.1 23.1 55 21.2 53.6 18.7C53.1 17.8 52.6 16.9 52 16C50.5 13.7 48.9 13.1 47.8 13C47.7 13 47.6 13 47.5 13H47.3C47.1 13 46.9 13 46.9 13C45.2 13.2 44 14.3 43.6 14.8L25.2 29.1C25.2 29.1 25.2 29.1 25.1 29.2L23 30.8L16.8 35.5L16.4 35.9C16.4 35.9 16.4 35.9 16.3 35.9C16 36.1 15.7 36.3 15.4 36.3C15.1 36.3 14.9 36.2 14.7 36.1C14.5 35.9 14.4 35.8 14.3 35.5C13.9 34.8 13.4 34.1 13 33.3V33.1C12.2 31.7 11.3 30 10.1 28.6C10.1 28.6 10.1 28.6 10.1 28.5L10 28.4C9.9 28.3 9.9 28.3 9.8 28.2C9.8 28.2 9.8 28.2 9.7 28.1L9.2 27.5C9.2 27.5 9.2 27.5 9.1 27.5C9 27.3 9 27.1 9.1 27L9.6 26.5C10.9 25 11.9 23.2 12.8 21.6V21.5C13.2 20.7 13.7 19.9 14.2 19.1C14.4 18.8 14.6 18.6 14.7 18.5V13.1C13.6 13.2 12 13.9 10.6 16C10 16.9 9.5 17.8 9 18.7C7.8 20.9 6.8 22.5 5.6 23.5C4.8 24.1 4 24.4 3.5 24.6C3.5 24.6 3.5 24.6 3.4 24.6C3.3 24.6 3.1 24.7 3 24.7C2.9 24.7 2.9 24.7 2.8 24.7C2.7 24.7 2.7 24.7 2.7 24.7H2.6H2.5C2.3 24.7 2.2 24.8 2.1 24.8C2 24.8 2 24.8 2 24.9C1.7 25.1 1.4 25.3 1.2 25.6C1.2 25.7 1.1 25.7 1.1 25.8V25.9L0.999997 26.1C0.999997 26.2 0.999997 26.2 0.899997 26.3C0.899997 26.4 0.899997 26.4 0.799997 26.5C0.799997 26.6 0.799997 26.7 0.699997 26.7C0.699997 26.8 0.699997 26.9 0.699997 26.9C0.699997 27 0.699997 27.1 0.699997 27.1C0.699997 27.2 0.699997 27.2 0.699997 27.3C0.699997 27.4 0.699997 27.5 0.699997 27.5C0.699997 27.6 0.699997 27.7 0.699997 27.7C0.699997 27.8 0.699997 27.9 0.799997 27.9V28V28.1C0.799997 28.2 0.799997 28.2 0.899997 28.2L0.999997 28.4C0.999997 28.5 1.1 28.5 1.1 28.5C1.1 28.5 1.1 28.5 1.1 28.6C1.2 28.7 1.3 28.9 1.5 29C1.6 29 1.6 29.1 1.7 29.1C1.7 29.1 1.8 29.1 1.8 29.2C1.8 29.2 1.8 29.2 1.9 29.2C2 29.3 2.2 29.3 2.3 29.4C2.4 29.4 2.4 29.4 2.4 29.4L2.9 29.5C3.1 29.5 3.2 29.6 3.4 29.6C4.2 29.8 4.7 30.2 4.8 30.2C6.4 31.2 7.5 33 8.9 35.5C9.5 36.6 10 37.4 10.5 38.2C11.9 40.3 13.4 41 14.4 41.1C14.5 41.1 14.5 41.1 14.6 41.1C14.7 41.1 14.8 41.1 14.8 41.1C15 41.1 15.2 41.1 15.5 41.1H15.6C17.2 40.8 18.5 39.8 18.9 39.3L19 39.2L19.8 38.6C19.8 38.6 19.9 38.5 20 38.5L30.2 30.6L41.3 22L46.5 18H46.6C46.7 18 46.9 17.9 47 17.9C47.4 17.9 47.8 18.1 48.1 18.6L48.5 19.2C48.8 19.7 49.2 20.3 49.5 20.9V21C50.1 22.1 50.8 23.4 51.7 24.6C51.7 24.6 51.7 24.7 51.8 24.7C52.1 25.1 52.4 25.5 52.7 25.8C52.7 25.8 52.8 25.8 52.8 25.9C53 26.1 53.1 26.3 53.3 26.4C53.4 26.5 53.4 26.7 53.3 26.9C52 28.5 50.4 31.1 49.6 32.4V32.5C49.2 33.2 48.7 34.1 48.2 34.9C48 35.2 47.8 35.4 47.7 35.5V40.9C48.8 40.8 50.4 40.1 51.8 37.9C52.4 37 52.9 36 53.4 35.2C53.5 35 53.7 34.7 53.8 34.5C55.2 33 56.4 30.9 58.7 30.1Z"></path></svg></div>', 1), Vc = [
  wc
];
function kc(e, t, l, n, o, a) {
  return r(), u("div", null, Vc);
}
const $c = /* @__PURE__ */ st(xc, [["render", kc]]), Cc = {
  key: 0,
  class: "po-fixed po-z-[999] po-top-0 po-bottom-0 po-left-0 po-right-0 po-flex po-items-center po-justify-center"
}, _c = /* @__PURE__ */ s("div", { class: "po-absolute po-w-[6.2rem] po-h-[6.2rem] po-bg-transparent po-overflow-hidden po-rounded-xl" }, [
  /* @__PURE__ */ s("div", { class: "po-loading-rotate po-absolute -po-top-8 -po-left-8 po-w-[10rem] po-h-[10rem]" })
], -1), Sc = { class: "relative po-bg-white po-w-24 po-h-24 po-flex po-items-center po-justify-center po-rounded-xl po-bg-opacity-50 po-backdrop-blur po-backdrop-filter po-z-10 po-shadow-xl" }, Pc = {
  key: 0,
  class: "po-absolute po-left-1 po-right-1 po-text-center po-py-1 po-text-xs po-text-mpao-blue po-bg-white po-bg-opacity-50 po-backdrop-blur po-backdrop-filter"
}, Oc = {
  name: "PoLoading"
}, n0 = /* @__PURE__ */ Object.assign(Oc, {
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
    return (t, l) => e.show ? (r(), u("div", Cc, [
      _c,
      s("div", Sc, [
        e.label !== "" ? (r(), u("span", Pc, m(e.label), 1)) : h("", !0),
        _($c)
      ])
    ])) : h("", !0);
  }
}), Ec = { class: "po-py-5 po-flex po-items-start po-space-x-5" }, Lc = ["name", "id", "checked", "aria-describedby"], Tc = { class: "po-grow -po-mt-[0.26rem]" }, Bc = ["for"], Dc = { class: "po-mt-2 po-flex po-space-x-3" }, jc = ["href", "onClick"], Nc = {
  name: "PoConsent"
}, a0 = /* @__PURE__ */ Object.assign(Nc, {
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
    return (t, l) => (r(), u("div", Ec, [
      s("input", Ee({
        type: "checkbox",
        name: `${e.id}-field`,
        id: e.id,
        checked: e.modelValue,
        "aria-describedby": `${e.id}-description`
      }, t.$attrs, {
        onInput: l[0] || (l[0] = (n) => t.$emit("update:modelValue", n.target.checked)),
        class: "po-shrink-0 po-h-4 po-w-4 po-rounded border-slate-300 po-text-mpao-lightblue focus:po-ring-mpao-lightblue"
      }), null, 16, Lc),
      s("div", Tc, [
        s("label", {
          class: "po-block po-select-none po-text-sm po-text-slate-600 po-cursor-pointer",
          for: e.id
        }, m(e.label), 9, Bc),
        s("div", Dc, [
          (r(!0), u(B, null, R(e.links, (n) => (r(), u("a", {
            href: n.url,
            onClick: re((o) => t.$emit("button-click", n.url), ["prevent"]),
            class: "po-text-sm po-text-mpao-lightblue hover:po-text-mpao-blue"
          }, m(n.label), 9, jc))), 256))
        ])
      ])
    ]));
  }
}), Ac = {
  class: "po-flex po-bg-slate-50 po-rounded-t-xl po-justify-center lg:po-justify-start po-px-4 po-pt-4 xl:po-pt-2 po-flex-wrap po-overflow-hidden",
  "aria-label": "Tabs"
}, Mc = ["onClick", "aria-current"], Ic = { key: 0 }, Rc = {
  name: "PoCardTabs"
}, s0 = /* @__PURE__ */ Object.assign(Rc, {
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
    function l(n) {
      return n.iconColor ? n.iconColor : "po-fill-current";
    }
    return (n, o) => (r(), u("nav", Ac, [
      (r(!0), u(B, null, R(e.tabs, (a) => (r(), u("span", {
        role: "button",
        onClick: (i) => n.$emit("button-click", a),
        key: a.name,
        class: E([
          a.current ? "po-bg-white po-text-slate-600 po-shadow-lg" : "po-text-slate-600 hover:po-text-mpao-blue",
          "po-px-4 po-py-3 po-font-medium po-mr-4 po-mb-4 xl:po-mb-0 po-text-sm po-cursor-pointer po-rounded-xl xl:po-rounded-b-none genie-effect hover:po-text-slate-600 hover:po-bg-white hover:po-shadow-md po-flex po-items-center po-flex-shrink-0 po-space-x-2"
        ]),
        "aria-current": a.current ? "page" : void 0
      }, [
        a.icon ? (r(), A(de(a.icon), {
          key: 0,
          class: E(["po-w-5 po-h-5", [l(a)]])
        }, null, 8, ["class"])) : h("", !0),
        s("span", null, [
          X(m(a.name), 1),
          a.count ? (r(), u("span", Ic, " (" + m(a.count) + ")", 1)) : h("", !0)
        ])
      ], 10, Mc))), 128))
    ]));
  }
}), Fc = { class: "sm:po-hidden" }, zc = /* @__PURE__ */ s("label", {
  for: "tabs",
  class: "po-sr-only"
}, "Select a tab", -1), Hc = ["value", "selected"], qc = { class: "po-hidden sm:po-block" }, Uc = {
  class: "po-flex po-space-x-4 po-pt-2",
  "aria-label": "Tabs"
}, Wc = ["onClick", "aria-current"], Gc = {
  name: "PoTabs"
}, r0 = /* @__PURE__ */ Object.assign(Gc, {
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
    const l = e;
    function n(i) {
      return i.iconColor ? i.iconColor : "po-fill-current";
    }
    const o = S(() => l.tabs.map((i) => i.name === l.currentTab ? { ...i, current: !0 } : { ...i, current: !1 }));
    function a(i) {
      const p = i.target.value, c = l.tabs[p];
      t("button-click", c);
    }
    return (i, p) => (r(), u(B, null, [
      s("div", Fc, [
        zc,
        s("select", {
          id: "tabs",
          name: "tabs",
          class: "po-block po-w-full po-rounded-md po-border-gray-300 focus:po-border-indigo-500 focus:po-ring-indigo-500",
          onChange: a
        }, [
          (r(!0), u(B, null, R(e.tabs, (c, f) => (r(), u("option", {
            key: c.name,
            value: f,
            selected: c.current
          }, m(c.name), 9, Hc))), 128))
        ], 32)
      ]),
      s("div", qc, [
        s("nav", Uc, [
          (r(!0), u(B, null, R(b(o), (c) => (r(), u("span", {
            onClick: (f) => i.$emit("button-click", c),
            role: "button",
            key: c.name,
            class: E([
              c.current ? "po-bg-white po-text-slate-600 po-shadow-md" : "po-bg-slate-50 po-text-slate-600 hover:po-text-mpao-blue",
              "po-px-4 po-relative po-group po-py-3 po-font-medium po-text-sm po-cursor-pointer po-rounded-xl genie-effect hover:po-text-slate-600 hover:po-bg-white hover:po-shadow-md po-flex po-items-center po-space-x-2"
            ]),
            "aria-current": c.current ? "page" : void 0
          }, [
            c.icon ? (r(), A(de(c.icon), {
              key: 0,
              class: E(["po-w-5 po-h-5", [n(c)]])
            }, null, 8, ["class"])) : h("", !0),
            s("span", null, [
              s("span", null, m(c.name), 1),
              c.count && c.count > 0 ? (r(), u("span", {
                key: 0,
                class: E(["po-absolute po-py-1 po-px-2 po-rounded-full po-text-xs -po-top-3 -po-right-2 po-shadow-md po-flex po-items-center po-justify-center", [
                  c.current ? "po-bg-mpao-orange po-text-white" : "po-bg-slate-400 po-text-white group-hover:po-bg-mpao-orange group-hover:po-text-white"
                ]])
              }, [
                s("span", null, m(c.count), 1)
              ], 2)) : h("", !0)
            ])
          ], 10, Wc))), 128))
        ])
      ])
    ], 64));
  }
}), Zc = { class: "po-mt-5 po-flex po-flex-col po-items-center po-justify-center po-px-5 po-py-8" }, Kc = {
  key: 1,
  class: "po-text-base po-font-medium po-text-slate-600 po-text-center"
}, Qc = {
  key: 2,
  class: "po-text-sm po-text-slate-500 po-text-center po-max-w-lg po-block po-mx-auto"
}, Yc = {
  name: "PoEmpty"
}, i0 = /* @__PURE__ */ Object.assign(Yc, {
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
    return (t, l) => (r(), u("div", Zc, [
      s("div", {
        class: E(["po-space-y-2 po-flex po-items-center po-flex-col po-justify-center", [{ "po-mb-5": t.$slots.action }]])
      }, [
        e.icon ? (r(), A(de(e.icon), {
          key: 0,
          class: E(["po-w-10 po-h-10", e.iconColor])
        }, null, 8, ["class"])) : h("", !0),
        e.label !== "" ? (r(), u("span", Kc, m(e.label), 1)) : h("", !0),
        e.description !== "" ? (r(), u("span", Qc, m(e.description), 1)) : h("", !0)
      ], 2),
      te(t.$slots, "action")
    ]));
  }
});
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const ct = () => !1;
function Jc(e) {
  throw e;
}
function Xc(e) {
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
const ed = /&(gt|lt|amp|apos|quot);/g, td = {
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
const od = { class: "po-flex po-text-sm po-text-gray-700 po-flex-col po-space-y-5" }, ld = {
  key: 0,
  class: "po-text-base po-font-medium po-text-slate-700"
}, nd = {
  key: 1,
  class: "po-border po-border-orange-300 po-bg-orange-50 po-rounded-lg po-p-5 po-flex po-items-center po-space-x-3"
}, ad = { class: "po-grow po-text-sm po-text-slate-600" }, sd = {
  key: 2,
  class: "po-border po-border-red-300 po-bg-red-50 po-rounded-lg po-p-5 po-flex po-space-x-4"
}, rd = { class: "po-grow" }, id = { class: "po-text-base po-text-slate-700 po-font-medium" }, ud = { class: "po-text-sm po-text-slate-600" }, pd = { class: "po-font-medium" }, cd = { key: 0 }, dd = { key: 0 }, fd = /* @__PURE__ */ s("dt", null, "Name", -1), vd = { key: 1 }, md = /* @__PURE__ */ s("dt", null, "Identifer", -1), hd = { key: 2 }, bd = /* @__PURE__ */ s("dt", null, "Date of birth", -1), gd = { key: 3 }, yd = /* @__PURE__ */ s("dt", null, "Reported Date of death", -1), xd = {
  key: 3,
  class: "po-pt-5"
}, wd = { class: "po-flex po-items-center po-space-x-1" }, Vd = /* @__PURE__ */ s("span", null, "File a dispute.", -1), kd = {
  name: "PoDRStatus"
}, u0 = /* @__PURE__ */ Object.assign(kd, {
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
    function l() {
      t("dispute-click", "clicked");
    }
    return (n, o) => (r(), u("span", od, [
      e.record !== null ? (r(), u("h2", ld, " Death was reported by " + m(e.record.institution), 1)) : h("", !0),
      e.request !== null && e.request.type_id === 1 ? (r(), u("div", nd, [
        _(b(dt), { class: "po-shrink-0 po-w-6 po-stroke-orange-600" }),
        s("span", ad, " This is a " + m(e.request.type) + " request and is in " + m(e.request.state) + " state. ", 1)
      ])) : h("", !0),
      e.request !== null && e.request.type_id !== 1 ? (r(), u("div", sd, [
        _(b(dt), { class: "po-shrink-0 po-w-6 po-h-6 po-stroke-red-600 po-stroke-2" }),
        s("div", rd, [
          s("h3", id, m(e.request.type), 1),
          s("p", ud, [
            X(" The following " + m(e.request.type) + " was reported: ", 1),
            s("span", pd, [
              X(m(e.request.dispute_type), 1),
              e.request.date_of_death ? (r(), u("span", cd, " (New date: " + m(e.request.date_of_death) + ")", 1)) : h("", !0)
            ])
          ])
        ])
      ])) : h("", !0),
      _(si, null, {
        content: T(() => [
          e.member !== null ? (r(), u("div", dd, [
            fd,
            s("dd", null, m(e.member.name), 1)
          ])) : h("", !0),
          e.member !== null ? (r(), u("div", vd, [
            md,
            s("dd", null, m(e.member.identifier), 1)
          ])) : h("", !0),
          e.member !== null ? (r(), u("div", hd, [
            bd,
            s("dd", null, m(e.member.dob), 1)
          ])) : h("", !0),
          e.record !== null ? (r(), u("div", gd, [
            yd,
            s("dd", null, m(e.record.date_of_death), 1)
          ])) : h("", !0)
        ]),
        _: 1
      }),
      e.request === null ? (r(), u("span", xd, [
        _(Mt, {
          type: "simple",
          onButtonClick: l
        }, {
          label: T(() => [
            s("span", wd, [
              _(b(il), { class: "po-w-4 po-h-4 po-stroke-current" }),
              Vd
            ])
          ]),
          _: 1
        })
      ])) : h("", !0)
    ]));
  }
}), $d = {
  key: 0,
  role: "button",
  class: "po-w-6 po-h-6 po-rounded-lg po-bg-white genie-effect po-flex po-items-center po-justify-center hover:po-bg-slate-50 po-cursor-pointer"
}, Cd = {
  name: "PoTableAction"
}, p0 = /* @__PURE__ */ Object.assign(Cd, {
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
    const t = e, l = k(), n = k();
    return t.btnType === "view" ? l.value = ml : t.btnType === "edit" ? l.value = bl : t.btnType === "delete" ? l.value = yl : t.btnType === "icon" && t.btnIcon && (l.value = t.btnIcon), t.btnType === "view" ? n.value = "po-stroke-emerald-400" : t.btnType === "edit" ? n.value = "po-stroke-blue-400" : t.btnType === "delete" ? n.value = "po-stroke-red-400" : n.value = t.iconColor, (o, a) => (r(), u("span", null, [
      e.btnType === "icon" || e.btnType === "delete" || e.btnType === "edit" || e.btnType === "view" ? (r(), u("span", $d, [
        (r(), A(de(l.value), {
          class: E(["po-w-4 po-stroke-2", n.value])
        }, null, 8, ["class"]))
      ])) : (r(), u("span", {
        key: 1,
        role: "button",
        class: E(["po-block po-text-sm genie-effect", e.textColor])
      }, m(e.label), 3))
    ]));
  }
}), _d = { key: 0 }, Sd = {
  name: "Rufiyaa"
}, c0 = /* @__PURE__ */ Object.assign(Sd, {
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
    function t(l) {
      const n = typeof l == "string" ? parseFloat(l.replace(/,/g, "")) : l;
      return isNaN(n) ? "" : n.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    }
    return (l, n) => (r(), u("span", null, [
      e.amount !== null ? (r(), u("span", _d, m(t(e.amount)), 1)) : h("", !0)
    ]));
  }
}), Pd = {
  name: "PoHeading"
}, d0 = /* @__PURE__ */ Object.assign(Pd, {
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
    return (t, l) => (r(), A(de(e.type), { class: "po-text-base po-text-slate-600 po-font-semibold" }, {
      default: T(() => [
        X(m(e.text), 1)
      ]),
      _: 1
    }));
  }
});
function Od(e, t) {
  if (!e)
    return;
  const l = (n) => {
    n.target !== e.value && n.composedPath().includes(e.value) || typeof t == "function" && t();
  };
  return H(() => {
    window.addEventListener("click", l);
  }), wt(() => {
    window.removeEventListener("click", l);
  }), { listener: l };
}
const Ed = ["for"], Ld = { class: "po-capitalize" }, Td = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Bd = ["title"], Dd = { class: "po-relative po-mt-1" }, jd = {
  key: 0,
  class: "po-shrink-0 po-pr-1 po-inline-flex po-flex-wrap po-max-h-44"
}, Nd = { class: "po-px-2 po-py-1 po-mb-1 po-mr-1 po-rounded-md po-text-sm po-text-white po-flex po-space-x-2 po-items-center po-bg-mpao-lightblue" }, Ad = ["onClick"], Md = ["id"], Id = {
  key: 0,
  class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
}, Rd = ["onClick", "value"], Fd = {
  class: /* @__PURE__ */ E(["po-block po-truncate"])
}, zd = ["id"], Hd = ["id"], qd = {
  name: "PoMultiSelect",
  components: { CheckIcon: dl }
}, f0 = /* @__PURE__ */ Object.assign(qd, {
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
    const l = e;
    function n() {
      return l.hasError ? "po-border-red-400 focus:po-border-red-600 focus:po-ring-red-600" : l.borderColor;
    }
    const o = k(""), a = k([]);
    function i(w) {
      a.value.splice(w, 1), f();
    }
    function p(w) {
      let g = o.value.split(",");
      w.key === "Enter" && 0 < o.value.length && (w.preventDefault(), g.forEach((x) => {
        let $ = l.items.find(
          (C) => C.name.toLowerCase() === x.trim().toLowerCase()
        );
        $ && a.value.push($);
      }), o.value = ""), w.key === "Backspace" && o.value.length === 0 && a.value.pop(), f();
    }
    const c = k([]);
    function f() {
      c.value = a.value.map((w) => w.id);
    }
    H(() => {
      document.addEventListener("keydown", p);
    }), ue(() => {
      document.removeEventListener("keydown", p);
    });
    const d = k(!1), v = S(
      () => o.value === "" ? l.items : l.items.filter((w) => w.name.toLowerCase().includes(o.value.toLowerCase()))
    );
    let V = k();
    Od(V, () => {
      d.value = !1;
    });
    function y(w) {
      a.value.push(w), o.value = "", f();
    }
    return U(c, () => {
      t("update:modelValue", c.value);
    }), (w, g) => (r(), u("div", {
      ref_key: "multiSelectComponentRef",
      ref: V,
      class: E(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      s("label", {
        for: e.id,
        class: E([
          "po-text-sm po-font-medium po-flex po-items-center po-space-x-1",
          { "po-text-red-500": e.hasError },
          { "po-text-slate-700": !e.hasError }
        ])
      }, [
        s("span", Ld, m(e.label), 1),
        e.required ? (r(), u("span", Td, "*")) : h("", !0),
        e.info !== null ? (r(), u("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          _(b(Uo), { class: "po-fill-current" })
        ], 8, Bd)) : h("", !0)
      ], 10, Ed),
      s("div", Dd, [
        s("div", {
          class: E([
            "po-border po-p-1 po-min-h-[2.38rem] po-flex po-flex-wrap po-items-center focus-within:po-border-mpao-lightblue po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white sm:po-text-sm",
            n()
          ])
        }, [
          a.value.length > 0 ? (r(), u("div", jd, [
            (r(!0), u(B, null, R(a.value, (x, $) => (r(), u("span", Nd, [
              s("span", null, m(x.name), 1),
              s("span", {
                onClick: () => i($),
                class: "po-rounded-full po-bg-white po-flex po-items-center po-justify-center po-w-4 po-h-4 po-cursor-pointer"
              }, [
                _(b(Rt), { class: "po-w-3 po-fill-mpao-lightblue" })
              ], 8, Ad)
            ]))), 256))
          ])) : h("", !0),
          Ge(s("input", {
            id: e.id,
            "onUpdate:modelValue": g[0] || (g[0] = (x) => o.value = x),
            onFocus: g[1] || (g[1] = () => d.value = !0),
            class: "po-border-0 po-outline-none po-ring-0 po-grow"
          }, null, 40, Md), [
            [gt, o.value]
          ])
        ], 2),
        d.value ? (r(), u("ul", Id, [
          (r(!0), u(B, null, R(b(v), (x) => (r(), u("li", {
            onClick: () => y(x),
            key: x.id,
            value: x.id,
            class: E([
              "po-relative po-select-none po-py-2 hover:po-bg-mpao-lightblue hover:po-text-white po-cursor-pointer po-pl-3 po-pr-9"
            ])
          }, [
            s("span", Fd, m(x.name), 1)
          ], 8, Rd))), 128))
        ])) : h("", !0)
      ]),
      e.message !== null ? (r(), u("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, m(e.message), 9, zd)) : h("", !0),
      e.hasError && e.errorMessage !== null ? (r(), u("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-center po-space-x-1",
        id: `${e.id}-error`
      }, [
        _(b(gs), { class: "po-fill-current po-w-4" }),
        s("span", null, m(e.errorMessage), 1)
      ], 8, Hd)) : h("", !0)
    ], 2));
  }
}), Ud = { class: "po-flex po-pl-5" }, Wd = /* @__PURE__ */ s("div", { class: "po-shrink-0 po-flex po-flex-col" }, [
  /* @__PURE__ */ s("div", { class: "po-w-[2px] po-shrink-0 po-h-10" }),
  /* @__PURE__ */ s("div", { class: "po-bg-gradient-to-t po-from-orange-400 po-via-red-300 po-to-blue-500 po-w-[2px] po-grow" }),
  /* @__PURE__ */ s("div", { class: "po-w-[2px] po-shrink-0 po-h-12" })
], -1), Gd = { class: "po-grow po-pl-5 po-pt-5 po-space-y-3" }, Zd = ["onClick"], Kd = { class: "-po-mt-1 po-flex po-space-x-3 po-items-center" }, Qd = { class: "po-block po-text-xs po-text-slate-400" }, Yd = { class: "po-text-xs po-text-slate-500 po-pt-1" }, Jd = {
  name: "PoTimeline"
}, v0 = /* @__PURE__ */ Object.assign(Jd, {
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
    return (l, n) => (r(), u("div", Ud, [
      Wd,
      s("div", Gd, [
        (r(!0), u(B, null, R(e.timeline, (o) => (r(), u("div", {
          class: E(["po-px-2 po-pt-2 po-pb-6 po-relative po-group", [{ "po-cursor-pointer": e.clickable }]]),
          onClick: (a) => l.$emit("button-click", o)
        }, [
          s("span", {
            class: E(["po-rounded-full po-absolute po-flex po-items-center po-justify-center", [
              { "po-w-4 po-h-4 -po-left-[1.8rem] po-bg-blue-400": o.current },
              {
                "po-w-3 po-h-3 -po-left-[1.68rem] po-bg-green-400": !o.current
              }
            ]])
          }, [
            s("span", {
              class: E(["po-rounded-full po-bg-white", [
                { "po-w-2 po-h-2": o.current },
                { "po-w-1 po-h-1": !o.current }
              ]])
            }, null, 2)
          ], 2),
          s("div", null, [
            s("div", Kd, [
              s("h4", {
                class: E(["po-text-sm po-text-slate-600 po-font-medium", [{ "group-hover:po-text-mpao-lightblue": e.clickable }]])
              }, m(o.label), 3),
              s("span", Qd, m(b(ol)(o.date)), 1)
            ]),
            s("p", Yd, m(o.description), 1)
          ])
        ], 10, Zd))), 256))
      ])
    ]));
  }
}), Xd = {
  name: "PoTableCheckbox"
}, m0 = /* @__PURE__ */ Object.assign(Xd, {
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
    return (l, n) => (r(), u(B, null, [
      e.isChecked ? (r(), A(b(eo), {
        key: 0,
        onClick: n[0] || (n[0] = re(() => l.$emit("checkboxClicked", e.itemId), ["prevent"])),
        class: "po-w-6 po-fill-mpao-lightblue"
      })) : h("", !0),
      e.disabled ? (r(), A(b(eo), {
        key: 1,
        class: "po-w-6 po-fill-slate-400"
      })) : h("", !0),
      !e.isChecked && !e.disabled ? (r(), u("span", {
        key: 2,
        onClick: n[1] || (n[1] = re(() => l.$emit("checkboxClicked", e.itemId), ["prevent"])),
        class: "po-h-5 po-w-5 po-rounded-full po-border-2 po-ml-[2px] po-block po-border-slate-300"
      })) : h("", !0)
    ], 64));
  }
}), e1 = { class: "po-p-4" }, t1 = { class: "po-flex po-items-start po-space-x-3" }, o1 = /* @__PURE__ */ s("span", { class: "po-sr-only" }, "Action icon", -1), l1 = { class: "po-w-0 po-flex-1 po-text-sm po-font-medium po-text-gray-400" }, n1 = { class: "po-ml-4 po-flex po-flex-shrink-0" }, a1 = /* @__PURE__ */ s("span", { class: "po-sr-only" }, "Close", -1), s1 = {
  name: "PoToast"
}, h0 = /* @__PURE__ */ Object.assign(s1, {
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
    const l = e, { show: n } = ye(l), o = k(!1);
    U(n, () => {
      o.value = n.value;
    });
    function a() {
      o.value = !1, t("toast-closed", !0);
    }
    setTimeout(() => {
      a();
    }, l.hideIn);
    const i = S(() => l.message === "" && l.actionType !== "" ? l.actionType === "success" ? "Saved Successfully!" : l.actionType === "danger" ? "Item deleted!" : l.actionType === "warn" ? "Attention needed!" : "Wrong action" : l.message);
    return (p, c) => (r(), A(Ze, { to: "#po-notifications-alert" }, [
      _($e, {
        "enter-active-class": "po-transform po-ease-out po-duration-300 po-transition",
        "enter-from-class": "po-translate-y-2 po-opacity-0 sm:po-translate-y-0 sm:po-translate-x-2",
        "enter-to-class": "po-translate-y-0 po-opacity-100 sm:po-translate-x-0",
        "leave-active-class": "po-transition po-ease-in po-duration-100",
        "leave-from-class": "po-opacity-100",
        "leave-to-class": "po-opacity-0"
      }, {
        default: T(() => [
          o.value ? (r(), u("div", {
            key: 0,
            class: E(["po-pointer-events-auto po-w-full po-overflow-hidden po-rounded-lg po-bg-gray-900 po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5", [
              { "po-max-w-[260px]": e.size === "sm" },
              { "po-max-w-[360px]": e.size === "lg" },
              { "po-max-w-[560px]": e.size === "xl" }
            ]])
          }, [
            s("div", e1, [
              s("div", t1, [
                e.actionType !== "" ? (r(), u("div", {
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
                  e.actionType === "success" ? (r(), A(b(Ho), {
                    key: 0,
                    class: "po-w-4 po-h-4"
                  })) : h("", !0),
                  e.actionType === "danger" ? (r(), A(b(Qa), {
                    key: 1,
                    class: "po-w-4 po-h-4"
                  })) : h("", !0),
                  e.actionType === "warn" ? (r(), A(b(qo), {
                    key: 2,
                    class: "po-w-4 po-h-4"
                  })) : h("", !0),
                  o1
                ], 2)) : h("", !0),
                s("p", l1, m(b(i)), 1),
                s("div", n1, [
                  s("button", {
                    type: "button",
                    onClick: a,
                    class: "po-inline-flex po-rounded-md po-bg-gray-900 po-text-gray-400 hover:po-text-gray-300 hover:po-bg-gray-700 po-transition-colors po-duration-150 po-ease-out focus:po-outline-none focus:po-ring-2 focus:po-ring-indigo-500 focus:po-ring-offset-2"
                  }, [
                    a1,
                    _(b(Rt), {
                      class: "po-h-5 po-w-5",
                      "aria-hidden": "true"
                    })
                  ])
                ])
              ])
            ])
          ], 2)) : h("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), r1 = ["for"], i1 = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, u1 = ["title"], p1 = { class: "po-relative po-mt-1" }, c1 = {
  key: 1,
  class: "po-absolute po-top-0 po-left-0 po-right-0 po-bottom-0 po-overflow-hidden po-bg-white po-rounded-md po-border po-border-slate-300 po-flex po-items-center"
}, d1 = { class: "po-grow" }, f1 = ["id"], v1 = {
  key: 0,
  class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
}, m1 = ["onClick"], h1 = {
  key: 0,
  class: "po-text-sm po-text-slate-600 po-p-4 po-block"
}, b1 = {
  key: 1,
  class: "po-mt-2 po-text-sm po-text-slate-500",
  id: "-description"
}, g1 = {
  key: 2,
  class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
  id: "-error"
}, y1 = {
  name: "PoSelectApi",
  components: { XMarkIcon: Ke }
}, b0 = /* @__PURE__ */ Object.assign(y1, {
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
    const l = e, n = k(null), o = k(!1);
    S(() => {
      if (n.value) {
        const y = document.querySelector(".shell-content--area"), { top: w } = y.getBoundingClientRect(), g = y.scrollTop, { top: x, left: $, width: C } = n.value.getBoundingClientRect();
        return { relativeTop: x - w + g, left: $, width: C };
      }
    });
    const a = k(null);
    k(null);
    const i = (y) => {
      !a.value.contains(y.target) && !n.value.contains(y.target) && (o.value = !1);
    }, p = k("");
    H(() => {
      l.id === "" ? p.value = l.label.replace(/\s/g, "") + "-" + Date.now() + "-selectapi-" + Math.floor(Math.random() * 9e3) : p.value = l.id, document.addEventListener("click", i);
    }), wt(() => {
      document.removeEventListener("click", i);
    });
    const c = k();
    function f() {
      t("search", c.value);
    }
    const d = k(null);
    function v(y) {
      d.value = y, t("selected", y), o.value = !1;
    }
    function V() {
      t("loadmore", !0);
    }
    return (y, w) => (r(), u("div", {
      ref_key: "containerRef",
      ref: a,
      class: E(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      s("label", {
        for: p.value,
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700"
      }, [
        s("span", null, m(e.label), 1),
        e.required ? (r(), u("span", i1, "*")) : h("", !0),
        e.info !== null ? (r(), u("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          _(b(It), { class: "po-fill-current" })
        ], 8, u1)) : h("", !0)
      ], 8, r1),
      s("div", p1, [
        s("div", null, [
          e.loading ? (r(), A(At, {
            key: 0,
            class: "po-right-0 po-top-4",
            absolute: !0
          })) : h("", !0),
          d.value !== null ? (r(), u("div", c1, [
            s("div", d1, [
              te(y.$slots, "selectedOption", Me(Ie(d.value)), () => [
                X(m(d.value), 1)
              ])
            ]),
            s("span", {
              class: "po-shrink-0 po-p-1 po-cursor-pointer",
              onClick: w[0] || (w[0] = (g) => {
                d.value = null, c.value = "";
              })
            }, [
              _(b(Ke), { class: "po-w-4 po-stroke-2 po-stroke-slate-400" })
            ])
          ])) : h("", !0),
          Ge(s("input", {
            type: "text",
            name: "",
            id: p.value,
            ref_key: "selectBox",
            ref: n,
            "onUpdate:modelValue": w[1] || (w[1] = (g) => c.value = g),
            onInput: f,
            onFocus: w[2] || (w[2] = (g) => o.value = !0),
            class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm"
          }, null, 40, f1), [
            [gt, c.value]
          ])
        ]),
        o.value && e.options.length > 0 || o.value && e.emptyMessage ? (r(), u("div", v1, [
          e.options && e.options.length > 0 ? (r(), u(B, { key: 0 }, [
            (r(!0), u(B, null, R(e.options, (g) => (r(), u("div", {
              onClick: (x) => v(g)
            }, [
              te(y.$slots, "option", Me(Ie(g)), () => [
                X(m(g), 1)
              ])
            ], 8, m1))), 256)),
            e.showMoreBtn ? (r(), u("span", {
              key: 0,
              role: "button",
              onClick: V,
              class: "po-text-sm po-text-semibold po-text-mpao-lightblue po-block po-text-center po-py-2 hover:po-bg-slate-50 po-transition-colors po-duration-150 po-ease-out"
            }, "More")) : h("", !0)
          ], 64)) : (r(), u(B, { key: 1 }, [
            e.emptyMessage ? (r(), u("span", h1, m(e.emptyMessage), 1)) : h("", !0)
          ], 64))
        ])) : h("", !0),
        e.message !== null ? (r(), u("p", b1, m(e.message), 1)) : h("", !0),
        e.errorMessage !== null ? (r(), u("p", g1, [
          s("span", null, m(e.errorMessage), 1)
        ])) : h("", !0)
      ])
    ], 2));
  }
}), x1 = { class: "po-bg-blue-300/20 po-border po-border-blue-200 po-p-3 po-mb-5 po-rounded-md po-text-sm sm:po-space-x-2 po-flex po-items-center po-flex-wrap" }, w1 = { class: "po-text-blue-500" }, V1 = {
  name: "PoMessage"
}, g0 = /* @__PURE__ */ Object.assign(V1, {
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
    return (l, n) => (r(), u("div", x1, [
      s("span", w1, m(e.message), 1),
      e.btnName !== "" ? (r(), u("span", {
        key: 0,
        role: "button",
        onClick: n[0] || (n[0] = (o) => l.$emit("button-click", e.btnAction)),
        class: "po-text-blue-600 po-underline po-font-medium po-text-xs"
      }, m(e.btnName), 1)) : h("", !0)
    ]));
  }
}), k1 = {
  key: 0,
  class: "po-flex md:po-justify-end"
}, $1 = { class: "po-bg-slate-50 po-shadow-sm po-rounded-xl po-py-5 po-px-2 po-divide-x po-divide-slate-200 po-flex" }, C1 = ["onClick"], _1 = { class: "po-text-xl po-font-medium po-text-slate-600 po-flex po-items-center po-space-x-1" }, S1 = {
  name: "PoPageStats"
}, y0 = /* @__PURE__ */ Object.assign(S1, {
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
    }
  },
  emits: ["stat-click"],
  setup(e, { emit: t }) {
    function l(n) {
      return n.iconColor ? n.iconColor : "po-slate-600";
    }
    return (n, o) => e.stats !== null ? (r(), u("div", k1, [
      s("div", $1, [
        (r(!0), u(B, null, R(e.stats, (a) => (r(), u("div", {
          class: E(["po-px-4 po-group", { "genie-effect po-cursor-pointer": e.clickable }]),
          onClick: (i) => n.$emit("stat-click", a)
        }, [
          s("span", _1, [
            a.icon ? (r(), u("span", {
              key: 0,
              class: E(["po-w-5 po-h-5", l(a)])
            }, [
              (r(), A(de(a.icon)))
            ], 2)) : h("", !0),
            s("span", {
              class: E(["po-text-xl po-font-medium po-text-slate-600", { "group-hover:po-text-mpao-lightblue": e.clickable }])
            }, m(a.value), 3)
          ]),
          s("span", {
            class: E(["po-text-sm po-text-slate-500 po-block", { "group-hover:po-text-mpao-lightblue": e.clickable }])
          }, m(a.label), 3)
        ], 10, C1))), 256))
      ])
    ])) : h("", !0);
  }
});
export {
  j1 as PoActionBar,
  e0 as PoAlert,
  jl as PoAppIcon,
  sa as PoAppTray,
  Mt as PoButton,
  N1 as PoCard,
  A1 as PoCardSearch,
  s0 as PoCardTabs,
  Q1 as PoChatLogItem,
  U1 as PoCheckbox,
  X1 as PoCommandPalette,
  a0 as PoConsent,
  l0 as PoContentArea,
  u0 as PoDRStatus,
  si as PoDescriptionList,
  o0 as PoDownloadFileList,
  R1 as PoDynamicTable,
  i0 as PoEmpty,
  W1 as PoFooter,
  G1 as PoFormStatusMessage,
  d0 as PoHeading,
  F1 as PoInputField,
  z1 as PoInputFile,
  n0 as PoLoading,
  t0 as PoLogs,
  g0 as PoMessage,
  He as PoModal,
  f0 as PoMultiSelect,
  Y1 as PoNotification,
  ga as PoNotificationHub,
  y0 as PoPageStats,
  M1 as PoPageTitle,
  gr as PoPagination,
  qa as PoProfileSwitcher,
  Z1 as PoRadioInput,
  Rl as PoSearchBar,
  q1 as PoSectionMenu,
  b0 as PoSelectApi,
  as as PoSelectField,
  D1 as PoSidebarDrawer,
  J1 as PoSlideover,
  K1 as PoStatsBlock,
  I1 as PoTable,
  p0 as PoTableAction,
  m0 as PoTableCheckbox,
  r0 as PoTabs,
  Ps as PoTextarea,
  v0 as PoTimeline,
  h0 as PoToast,
  H1 as PoToggle,
  T1 as PoTopBar,
  c0 as Rufiyaa
};
