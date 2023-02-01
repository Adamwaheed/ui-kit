import { openBlock as i, createElementBlock as d, createElementVNode as s, createVNode as T, unref as y, withCtx as G, renderSlot as ue, createBlock as K, createCommentVNode as E, toDisplayString as S, ref as w, onMounted as M, onUnmounted as oe, withDirectives as Gt, isRef as Wt, vModelText as Kt, Fragment as F, renderList as Y, normalizeClass as W, resolveDynamicComponent as Ce, normalizeProps as nt, guardReactiveProps as ot, mergeProps as ye, cloneVNode as Yt, h as z, inject as Z, provide as te, watchEffect as J, computed as h, defineComponent as N, toRaw as D, watch as le, nextTick as pe, Teleport as vt, reactive as Qt, toRefs as mt, createTextVNode as xe, createStaticVNode as Jt, normalizeStyle as Xt, Transition as Zt } from "vue";
function el(e, t) {
  return i(), d("svg", {
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
function tl(e, t) {
  return i(), d("svg", {
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
function ll(e, t) {
  return i(), d("svg", {
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
function al(e, t) {
  return i(), d("svg", {
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
function nl(e, t) {
  return i(), d("svg", {
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
function ol(e, t) {
  return i(), d("svg", {
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
function rl(e, t) {
  return i(), d("svg", {
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
function sl(e, t) {
  return i(), d("svg", {
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
function il(e, t) {
  return i(), d("svg", {
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
function ul(e, t) {
  return i(), d("svg", {
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
function dl(e, t) {
  return i(), d("svg", {
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
function Ye(e, t) {
  return i(), d("svg", {
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
function cl(e, t) {
  return i(), d("svg", {
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
function pl(e, t) {
  return i(), d("svg", {
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
function rt(e, t) {
  return i(), d("svg", {
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
function fl(e, t) {
  return i(), d("svg", {
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
const vl = { class: "bg-mpao-blue fixed top-0 w-full z-50 flex" }, ml = { class: "shrink-0 px-3 pt-3" }, bl = {
  for: "sidebar-drawer-toggle",
  role: "button",
  class: "genie-effect flex items-center justify-center bg-[#2e5266] rounded-full w-10 h-10 select-none text-slate-100"
}, hl = { class: "mx-auto max-w-full px-4 grow sm:px-4" }, gl = { class: "flex h-16 items-center justify-between space-x-12" }, yl = { class: "flex items-center space-x-3" }, xl = {
  key: 0,
  class: "block w-6 text-slate-100 sm:hidden",
  role: "button"
}, wl = {
  name: "PoTopBar"
}, gs = /* @__PURE__ */ Object.assign(wl, {
  props: {
    /**
     * Search Query
     */
    searchQuery: String,
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
     * Profile switcher object
     */
    profileSwitcherData: {
      type: Object,
      default: null
    },
    /**
     * SVG Icon
     */
    svgIcon: {
      type: String,
      default: ""
    }
  },
  emits: ["query"],
  setup(e, { emit: t }) {
    function a(l) {
      t("query", l);
    }
    return (l, n) => (i(), d("nav", vl, [
      s("div", ml, [
        s("label", bl, [
          T(y(al), { class: "w-6 fill-current" })
        ])
      ]),
      s("div", hl, [
        s("div", gl, [
          T(y(Pl), { "app-name": e.appName }, {
            icon: G(() => [
              ue(l.$slots, "appIcon")
            ]),
            _: 3
          }, 8, ["app-name"]),
          e.hasSearch ? (i(), K(y(Tl), {
            key: 0,
            onQuery: a
          })) : E("", !0),
          s("div", yl, [
            e.hasSearch ? (i(), d("span", xl, [
              T(y(Ye), { class: "stroke-current" })
            ])) : E("", !0),
            T(y(na), {
              notifications: e.notifications,
              "has-new-notifications": e.hasNewNotifications
            }, null, 8, ["notifications", "has-new-notifications"]),
            T(y(zl), { "app-list": e.appList }, null, 8, ["app-list"]),
            T(y(Sa), { "profile-switcher-data": e.profileSwitcherData }, null, 8, ["profile-switcher-data"])
          ])
        ])
      ])
    ]));
  }
}), $l = { class: "flex items-center space-x-3" }, kl = { class: "w-7 text-slate-100" }, Sl = { class: "font-light text-lg text-slate-100" }, _l = {
  name: "PoAppIcon"
}, Pl = /* @__PURE__ */ Object.assign(_l, {
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
    return (t, a) => (i(), d("div", $l, [
      s("div", kl, [
        ue(t.$slots, "icon")
      ]),
      s("span", Sl, S(e.appName), 1)
    ]));
  }
}), Ol = { class: "flex-grow hidden relative sm:block" }, Cl = ["placeholder"], El = { class: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none transition-all ease-linear duration-100 text-slate-400 origin-center peer-hover/search:scale-105 peer-focus/search:text-slate-100" }, Al = {
  name: "PoSearchBar"
}, Tl = /* @__PURE__ */ Object.assign(Al, {
  props: {
    placeholder: {
      type: String,
      default: "Search"
    }
  },
  emits: ["query"],
  setup(e, { emit: t }) {
    let a = w("");
    const l = (n) => {
      n.key === "Enter" && 0 < a.value.length && t("query", a.value);
    };
    return M(() => document.addEventListener("keydown", l)), oe(() => {
      document.removeEventListener("keydown", l);
    }), (n, o) => (i(), d("div", Ol, [
      Gt(s("input", {
        "onUpdate:modelValue": o[0] || (o[0] = (r) => Wt(a) ? a.value = r : a = r),
        type: "text",
        id: "main-search",
        placeholder: e.placeholder,
        class: "peer/search bg-transparent border border-transparent text-slate-100 text-sm rounded-md ring-0 outline-none focus:outline-none focus:ring-0 transition-colors ease-linear duration-100 block w-full pl-10 p-2.5 appearance-none focus:border-slate-400 hover:border-slate-600"
      }, null, 8, Cl), [
        [Kt, y(a)]
      ]),
      s("div", El, [
        T(y(Ye), { class: "w-5 h-5 stroke-current" })
      ])
    ]));
  }
}), Rl = { class: "relative" }, Ll = {
  for: "apps-menu-toggle",
  class: "block w-6 text-slate-100 genie-effect z-50",
  role: "button"
}, jl = /* @__PURE__ */ s("input", {
  type: "checkbox",
  name: "",
  class: "hidden peer/apps",
  role: "none",
  id: "apps-menu-toggle"
}, null, -1), Bl = { class: "invisible z-10 absolute -left-[19rem] top-[35px] opacity-0 bg-white shadow-lg rounded-md w-96 p-4 border border-slate-200 pt-5 space-y-5 transition-all duration-100 ease-linear sm:left-auto sm:right-0 peer-checked/apps:visible peer-checked/apps:top-[45px] peer-checked/apps:opacity-100" }, Dl = {
  key: 0,
  class: "text-sm font-normal text-slate-400 select-none"
}, Fl = { class: "grid grid-cols-3 gap-3 py-3" }, Il = ["href"], Nl = { class: "block w-10 rounded-md transition-shadow duration-100 ease-in-out shadow-md group-hover:shadow-xl overflow-hidden" }, Vl = ["src", "alt"], Ml = { class: "text-slate-600 font-normal text-sm" }, Hl = {
  name: "PoAppTray"
}, zl = /* @__PURE__ */ Object.assign(Hl, {
  props: {
    /**
     * Array of grouped apps. When the group name field is left blank, it will appear as a single list when displayed.
     */
    appList: {
      type: Array,
      default: null
    }
  },
  setup(e) {
    return (t, a) => (i(), d("div", Rl, [
      s("label", Ll, [
        T(y(pl))
      ]),
      jl,
      s("div", Bl, [
        (i(!0), d(F, null, Y(e.appList, (l) => (i(), d("div", null, [
          l.groupName.length > 0 ? (i(), d("span", Dl, S(l.groupName), 1)) : E("", !0),
          s("ul", Fl, [
            (i(!0), d(F, null, Y(l.apps, (n) => (i(), d("li", null, [
              s("a", {
                href: n.url,
                class: "flex flex-col group space-y-3 justify-center items-center py-2 genie-effect"
              }, [
                s("span", Nl, [
                  s("img", {
                    src: n.icon,
                    alt: `${n.name} icon`
                  }, null, 8, Vl)
                ]),
                s("span", Ml, S(n.name), 1)
              ], 8, Il)
            ]))), 256))
          ])
        ]))), 256))
      ])
    ]));
  }
}), ql = { class: "relative" }, Ul = {
  for: "notifications-menu-toggle",
  class: "block w-6 text-slate-100 genie-effect relative z-50",
  role: "button"
}, Gl = {
  key: 0,
  class: "absolute right-0 w-3 h-3 bg-mpao-orange rounded-full border-2 border-mpao-blue"
}, Wl = /* @__PURE__ */ s("input", {
  type: "checkbox",
  name: "",
  class: "hidden peer/apps",
  role: "none",
  id: "notifications-menu-toggle"
}, null, -1), Kl = { class: "invisible z-10 absolute -left-[19rem] top-[35px] opacity-0 bg-white shadow-lg rounded-md w-96 p-4 border border-slate-200 pt-5 transition-all duration-100 ease-linear sm:left-auto sm:right-0 peer-checked/apps:visible peer-checked/apps:top-[45px] peer-checked/apps:opacity-100" }, Yl = { class: "space-y-2 p-2" }, Ql = { class: "space-y-2 p-2" }, Jl = { class: "flex items-center justify-between" }, Xl = { class: "text-sm font-semibold text-slate-700 grow flex space-x-2 items-center" }, Zl = {
  key: 0,
  class: "w-2 h-2 rounded-full shrink-0 bg-mpao-orange"
}, ea = { class: "grow" }, ta = { class: "text-xs font-normal text-slate-400 shrink-0" }, la = { class: "block text-sm text-slate-500 pb-3 border-b border-slate-200" }, aa = {
  name: "PoNotificationHub"
}, na = /* @__PURE__ */ Object.assign(aa, {
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
  setup(e) {
    return (t, a) => (i(), d("div", ql, [
      s("label", Ul, [
        e.hasNewNotifications ? (i(), d("span", Gl)) : E("", !0),
        T(y(nl), { class: "stroke-current" })
      ]),
      Wl,
      s("div", Kl, [
        s("ul", Yl, [
          (i(!0), d(F, null, Y(e.notifications, (l) => (i(), d("li", Ql, [
            s("span", Jl, [
              s("p", Xl, [
                l.seen ? E("", !0) : (i(), d("span", Zl)),
                s("span", ea, S(l.name), 1)
              ]),
              s("span", ta, S(l.time), 1)
            ]),
            s("span", la, S(l.text), 1)
          ]))), 256))
        ])
      ])
    ]));
  }
}), oa = { class: "relative" }, ra = {
  for: "profile-toggle",
  class: "select-none rounded-full w-10 h-10 bg-[#2e5266] flex items-center justify-center genie-effect z-50",
  role: "button"
}, sa = { class: "text-xs text-white font-semibold" }, ia = /* @__PURE__ */ s("input", {
  type: "checkbox",
  name: "",
  class: "hidden peer/profile",
  role: "none",
  id: "profile-toggle"
}, null, -1), ua = { class: "invisible space-y-1 z-10 absolute right-0 top-[45px] opacity-0 bg-white shadow-lg rounded-md w-96 p-4 border border-slate-200 pt-5 transition-all duration-100 ease-linear peer-checked/profile:visible peer-checked/profile:top-[54px] peer-checked/profile:opacity-100" }, da = ["href"], ca = { class: "w-5" }, pa = { class: "flex flex-col space-y-1" }, fa = { class: "text-sm font-normal" }, va = {
  key: 0,
  class: "text-xs text-slate-400"
}, ma = /* @__PURE__ */ s("hr", { class: "border-slate-200" }, null, -1), ba = { class: "md:grid grid-cols-2" }, ha = ["href"], ga = { class: "w-5" }, ya = /* @__PURE__ */ s("span", { class: "text-sm font-normal" }, "Profile", -1), xa = {
  href: "#",
  class: "flex items-center space-x-3 p-3 text-slate-600 rounded-lg bg-white hover:bg-slate-100",
  role: "button"
}, wa = { class: "w-5" }, $a = /* @__PURE__ */ s("span", { class: "text-sm font-normal" }, "Logout", -1), ka = {
  name: "PoProfileSwitcher"
}, Sa = /* @__PURE__ */ Object.assign(ka, {
  props: {
    profileSwitcherData: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    return (t, a) => (i(), d("div", oa, [
      s("label", ra, [
        s("span", sa, S(e.profileSwitcherData.currProfileLabel), 1)
      ]),
      ia,
      s("div", ua, [
        (i(!0), d(F, null, Y(e.profileSwitcherData.profiles, (l) => (i(), d("a", {
          href: l.url,
          class: "flex items-center space-x-3 p-3 text-slate-600 rounded-lg bg-white hover:bg-slate-100",
          role: "button"
        }, [
          s("span", ca, [
            l.isPersonal ? (i(), K(y(rt), {
              key: 0,
              class: W(["stroke-current", { "stroke-mpao-orange": l.current }])
            }, null, 8, ["class"])) : E("", !0),
            l.isPersonal ? E("", !0) : (i(), K(y(ol), {
              key: 1,
              class: W(["stroke-current", { "stroke-mpao-orange": l.current }])
            }, null, 8, ["class"]))
          ]),
          s("span", pa, [
            s("span", fa, S(l.name), 1),
            l.identifier.length !== 0 ? (i(), d("span", va, S(l.identifier), 1)) : E("", !0)
          ])
        ], 8, da))), 256)),
        ma,
        s("div", ba, [
          s("a", {
            href: e.profileSwitcherData.currentProfileUrl,
            class: "flex items-center space-x-3 p-3 text-slate-600 rounded-lg bg-white hover:bg-slate-100",
            role: "button"
          }, [
            s("span", ga, [
              T(y(rt), { class: "stroke-current" })
            ]),
            ya
          ], 8, ha),
          s("a", xa, [
            s("span", wa, [
              T(y(tl), { class: "stroke-current" })
            ]),
            $a
          ])
        ])
      ])
    ]));
  }
}), _a = /* @__PURE__ */ s("input", {
  type: "checkbox",
  name: "",
  class: "hidden shell-sidebar--toggle",
  role: "none",
  id: "sidebar-drawer-toggle",
  checked: "",
  "aria-checked": "true"
}, null, -1), Pa = { class: "shell-sidebar" }, Oa = { class: "shell-sidebar--section" }, Ca = { class: "shell-sidebar--menu" }, Ea = ["onClick", "title"], Aa = { class: "shell-sidebar--icon" }, Ta = { class: "shell-sidebar--label" }, Ra = {
  name: "PoSidebarDrawer"
}, ys = /* @__PURE__ */ Object.assign(Ra, {
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
    }
  },
  setup(e) {
    return (t, a) => (i(), d(F, null, [
      _a,
      s("aside", Pa, [
        (i(!0), d(F, null, Y(e.content, (l) => (i(), d("div", null, [
          s("span", Oa, S(l.groupName), 1),
          s("ul", Ca, [
            (i(!0), d(F, null, Y(l.items, (n) => (i(), d("li", null, [
              s("button", {
                onClick: (o) => t.$emit("button-click", n.url),
                class: W(["shell-sidebar--item", { active: n.url == e.currRoute }]),
                title: `Go to ${n.label}`
              }, [
                s("span", Aa, [
                  (i(), K(Ce(n.icon), { class: "stroke-current w-4 h-4" }))
                ]),
                s("span", Ta, S(n.label), 1)
              ], 10, Ea)
            ]))), 256))
          ])
        ]))), 256))
      ])
    ], 64));
  }
}), La = { class: "shell-content--action-bar" }, ja = { class: "action-bar__nav" }, Ba = ["onClick"], Da = { class: "action-bar__nav_label" }, Fa = {
  key: 0,
  class: "shrink-0 flex space-x-1"
}, Ia = {
  name: "PoActionBar"
}, xs = /* @__PURE__ */ Object.assign(Ia, {
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
      default: !0
    }
  },
  setup(e) {
    return (t, a) => (i(), d("section", La, [
      s("nav", ja, [
        (i(!0), d(F, null, Y(e.items, (l) => (i(), d("span", {
          onClick: (n) => t.$emit("button-click", l.label),
          class: "action-bar__nav_link cursor-pointer"
        }, [
          (i(), K(Ce(l.icon), { class: "stroke-current w-5 h-5" })),
          s("span", Da, S(l.label), 1)
        ], 8, Ba))), 256))
      ]),
      e.showBackButton ? (i(), d("nav", Fa, [
        s("span", {
          onClick: a[0] || (a[0] = (l) => t.$emit("button-click", "back")),
          class: "action-bar__nav_link cursor-pointer"
        }, [
          (i(), K(Ce(y(ll)), { class: "stroke-current w-5 h-5" }))
        ])
      ])) : E("", !0)
    ]));
  }
}), Na = { class: "shadow-md rounded-xl bg-white" }, Va = {
  key: 0,
  class: "text-base font-medium text-slate-600"
}, Ma = {
  name: "PoCard"
}, ws = /* @__PURE__ */ Object.assign(Ma, {
  props: {
    /**
     * Card title
     */
    title: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    return (t, a) => (i(), d("div", Na, [
      e.title.length > 0 ? (i(), d("h3", Va, S(e.title), 1)) : E("", !0),
      ue(t.$slots, "content")
    ]));
  }
}), Ha = { class: "py-3 px-5 border-b border-slate-200" }, za = {
  class: "flex w-full md:ml-0",
  action: "#",
  method: "GET"
}, qa = {
  for: "search-field",
  class: "sr-only"
}, Ua = { class: "relative w-full text-slate-400 focus-within:text-mpao-lightblue transition-colors duration-100 ease-in-out" }, Ga = { class: "pointer-events-none absolute inset-y-0 left-0 flex items-center" }, Wa = ["placeholder", "value"], Ka = {
  name: "PoCardSearch"
}, $s = /* @__PURE__ */ Object.assign(Ka, {
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
    }
  },
  setup(e) {
    return (t, a) => (i(), d("div", Ha, [
      s("form", za, [
        s("label", qa, S(e.placeholder), 1),
        s("div", Ua, [
          s("div", Ga, [
            T(y(Ye), { class: "h-5 w-5 flex-shrink-0" })
          ]),
          s("input", {
            name: "search-field",
            id: "desktop-search-field",
            placeholder: e.placeholder,
            value: e.modelValue,
            onInput: a[0] || (a[0] = (l) => t.$emit("update:modelValue", l.target.value)),
            class: "h-full w-full border-transparent py-2 pl-8 pr-3 text-sm text-slate-700 placeholder-slate-500 focus:border-transparent focus:placeholder-slate-400 focus:outline-none focus:ring-0",
            type: "search"
          }, null, 40, Wa)
        ])
      ])
    ]));
  }
}), Ya = {
  key: 0,
  class: "flex items-center"
}, Qa = { class: "text-xs font-normal text-slate-500 pr-2" }, Ja = ["href"], Xa = ["href"], Za = {
  name: "PoPagination"
}, en = /* @__PURE__ */ Object.assign(Za, {
  props: {
    /**
     * Pagination Object { label: 'Page 1 of 2', nextLink: './next', prevLink: './prev' }
     */
    pagination: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    return (t, a) => e.pagination !== null ? (i(), d("div", Ya, [
      s("span", Qa, S(e.pagination.label), 1),
      e.pagination.nextLink !== null ? (i(), d("a", {
        key: 0,
        href: e.pagination.nextLink,
        title: "Previous",
        onClick: a[0] || (a[0] = (l) => t.$emit("button-click", "prev")),
        class: "text-slate-600 p-2 rounded-md hover:bg-slate-200 hover:text-mpao-blue transition-colors duration-75 ease-in-out"
      }, [
        T(y(sl), { class: "w-4 stroke-current" })
      ], 8, Ja)) : E("", !0),
      e.pagination.prevLink !== null ? (i(), d("a", {
        key: 1,
        href: e.pagination.prevLink,
        title: "Next",
        onClick: a[1] || (a[1] = (l) => t.$emit("button-click", "next")),
        class: "text-slate-600 p-2 rounded-md hover:bg-slate-200 hover:text-mpao-blue transition-colors duration-75 ease-in-out"
      }, [
        T(y(il), { class: "w-4 stroke-current" })
      ], 8, Xa)) : E("", !0)
    ])) : E("", !0);
  }
}), tn = { class: "flex items-center space-x-1" }, ln = { class: "text-xl font-semibold text-slate-800 grow" }, an = {
  key: 2,
  class: "border-l border-slate-400 h-3 w-3 ml-1"
}, nn = {
  name: "PoPageTitle"
}, ks = /* @__PURE__ */ Object.assign(nn, {
  props: {
    /**
     * Page title
     */
    label: {
      type: String,
      default: ""
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
    }
  },
  setup(e) {
    const t = w(!1);
    return (a, l) => (i(), d("div", tn, [
      s("h1", ln, S(e.label), 1),
      e.showFilter ? (i(), d("button", {
        key: 0,
        title: "Filter",
        onClick: l[0] || (l[0] = (n) => {
          a.$emit("button-click", "filter"), t.value = !t.value;
        }),
        class: W([" p-2 rounded-md hover:bg-slate-200 transition-colors duration-75 ease-in-out", { "text-mpao-orange hover:text-mpao-orange": t.value }, { "text-slate-600 hover:text-mpao-blue": !t.value }])
      }, [
        T(y(dl), { class: "w-4 stroke-current" })
      ], 2)) : E("", !0),
      e.showDownload ? (i(), d("button", {
        key: 1,
        title: "Download",
        onClick: l[1] || (l[1] = (n) => a.$emit("button-click", "download")),
        class: "text-slate-600 p-2 rounded-md hover:bg-slate-200 hover:text-mpao-blue transition-colors duration-75 ease-in-out"
      }, [
        T(y(el), { class: "w-4 stroke-current" })
      ])) : E("", !0),
      e.showFilter && e.showPagination || e.showDownload && e.showPagination ? (i(), d("span", an, " ")) : E("", !0),
      e.showPagination ? (i(), K(en, {
        key: 3,
        pagination: e.pagination
      }, null, 8, ["pagination"])) : E("", !0)
    ]));
  }
}), on = { class: "table-responsive w-full" }, rn = { key: 1 }, sn = ["colspan"], un = { class: "py-10 block normal-case" }, dn = {
  name: "PoTable"
}, Ss = /* @__PURE__ */ Object.assign(dn, {
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
    }
  },
  setup(e) {
    return (t, a) => (i(), d("table", on, [
      s("thead", null, [
        s("tr", null, [
          (i(!0), d(F, null, Y(e.thead, (l) => (i(), d("th", null, [
            ue(t.$slots, "th", nt(ot(l)))
          ]))), 256))
        ])
      ]),
      s("tbody", null, [
        e.tbody !== null || e.tbody !== null && e.tbody.length !== 0 ? (i(!0), d(F, { key: 0 }, Y(e.tbody, (l) => (i(), d("tr", null, [
          ue(t.$slots, "td", nt(ot(l)))
        ]))), 256)) : E("", !0),
        e.tbody == null || e.tbody !== null && e.tbody.length == 0 ? (i(), d("tr", rn, [
          s("td", {
            colspan: e.thead.length + 1,
            class: "text-center"
          }, [
            s("span", un, S(e.emptyMessage), 1)
          ], 8, sn)
        ])) : E("", !0)
      ])
    ]));
  }
}), cn = { class: "" }, pn = { class: "grow" }, fn = ["onClick"], vn = {
  name: "PoDescriptionList"
}, _s = /* @__PURE__ */ Object.assign(vn, {
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
  setup(e) {
    return (t, a) => (i(), d("dl", {
      class: W(["po-description-list", { "divide-y divide-slate-200": !e.striped }, { striped: e.striped }])
    }, [
      ue(t.$slots, "content", {}, () => [
        (i(!0), d(F, null, Y(e.items, (l) => (i(), d("div", null, [
          s("dt", null, S(l.title), 1),
          s("dd", cn, [
            s("span", pn, S(l.description), 1),
            l.action !== void 0 ? (i(), d("span", {
              key: 0,
              class: "shrink-0 text-mpao-lightblue hover:text-mpao-blue transition-colors duration-100 ease-in-out px-2 cursor-pointer",
              onClick: (n) => t.$emit("button-click", l.action)
            }, S(l.action), 9, fn)) : E("", !0)
          ])
        ]))), 256))
      ])
    ], 2));
  }
});
function mn(e, t) {
  return i(), d("svg", {
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
function bt(e, t) {
  return i(), d("svg", {
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
const bn = { class: "relative pt-5" }, hn = ["type", "name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], gn = ["for"], yn = ["title"], xn = ["id"], wn = ["id"], $n = {
  name: "PoInputField"
}, Ps = /* @__PURE__ */ Object.assign($n, {
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
    }
  },
  setup(e) {
    return (t, a) => (i(), d("div", bn, [
      s("input", ye({
        type: e.type,
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
        onInput: a[0] || (a[0] = (l) => t.$emit("update:modelValue", l.target.value)),
        class: ["mt-1 peer block w-full transition-colors duration-100 ease-in-out rounded-md bg-white focus:ring-0 sm:text-sm disabled:bg-slate-50 disabled:border-slate-300 disabled:focus:border-slate-300 disabled:hover:border-slate-300 disabled:cursor-default", { "border-red-400 focus:border-red-600 focus:ring-red-600": e.hasError }, { "border-slate-300 focus:border-mpao-lightblue": !e.hasError }]
      }), null, 16, hn),
      s("label", {
        for: e.id,
        class: W(["absolute top-0 text-sm font-medium flex items-center space-x-1", { "text-red-500 peer-focus:text-red-600": e.hasError }, { "text-slate-700 peer-focus:text-mpao-lightblue": !e.hasError }])
      }, [
        s("span", null, S(e.label), 1),
        e.info !== null ? (i(), d("abbr", {
          key: 0,
          title: e.info,
          class: "w-4 text-slate-500"
        }, [
          T(y(bt), { class: "fill-current" })
        ], 8, yn)) : E("", !0)
      ], 10, gn),
      e.message !== null ? (i(), d("p", {
        key: 0,
        class: "mt-2 text-sm text-slate-500",
        id: `${e.id}-description`
      }, S(e.message), 9, xn)) : E("", !0),
      e.hasError && e.errorMessage !== null ? (i(), d("p", {
        key: 1,
        class: "mt-2 text-sm text-red-600 flex items-center space-x-1",
        id: `${e.id}-error`
      }, [
        T(y(mn), { class: "fill-current w-4" }),
        s("span", null, S(e.errorMessage), 1)
      ], 8, wn)) : E("", !0)
    ]));
  }
}), kn = { class: "relative pt-5" }, Sn = { class: "text-sm font-medium text-slate-700 peer-focus:text-mpao-lightblue peer-invalid:text-red-500 peer-invalid:peer-focus:text-red-600 flex items-center space-x-1" }, _n = ["name", "id", "value"], Pn = ["for"], On = { class: "flex items-center space-x-1" }, Cn = /* @__PURE__ */ s("span", { class: "text-sm" }, "Choose file", -1), En = ["id"], An = ["id"], Tn = {
  name: "PoInputFile"
}, Os = /* @__PURE__ */ Object.assign(Tn, {
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
    }
  },
  setup(e) {
    return (t, a) => (i(), d("div", kn, [
      s("span", Sn, S(e.label), 1),
      s("input", {
        name: `${e.id}-upload`,
        id: `${e.id}-fileupload`,
        value: e.modelValue,
        type: "file",
        onInput: a[0] || (a[0] = (l) => t.$emit("update:modelValue", l.target.value)),
        class: "sr-only peer"
      }, null, 40, _n),
      s("label", {
        for: `${e.id}-fileupload`,
        class: "mt-1 block w-full border cursor-pointer rounded-md border-slate-300 bg-white peer-focus:border-mpao-lightblue invalid:border-red-400 invalid:focus:border-red-600 invalid:focus:ring-red-600 sm:text-sm p-2"
      }, [
        s("div", On, [
          T(y(cl), { class: "w-4 stroke-slate-500" }),
          Cn
        ])
      ], 8, Pn),
      e.message !== null ? (i(), d("p", {
        key: 0,
        class: "mt-2 text-sm text-slate-500",
        id: `${e.id}-description`
      }, S(e.message), 9, En)) : E("", !0),
      e.errorMessage !== null ? (i(), d("p", {
        key: 1,
        class: "mt-2 text-sm text-red-600",
        id: `${e.id}-error`
      }, S(e.errorMessage), 9, An)) : E("", !0)
    ]));
  }
});
function Rn(e, t) {
  return i(), d("svg", {
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
function Ln(e, t) {
  return i(), d("svg", {
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
function jn(e, t) {
  return i(), d("svg", {
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
function Bn(e, t) {
  return i(), d("svg", {
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
function Dn(e, t) {
  return i(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
  ]);
}
function q(e, t, ...a) {
  if (e in t) {
    let n = t[e];
    return typeof n == "function" ? n(...a) : n;
  }
  let l = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((n) => `"${n}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(l, q), l;
}
var ve = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(ve || {}), fe = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(fe || {});
function V({ visible: e = !0, features: t = 0, ourProps: a, theirProps: l, ...n }) {
  var o;
  let r = Fn(l, a), u = Object.assign(n, { props: r });
  if (e || t & 2 && r.static)
    return Ve(u);
  if (t & 1) {
    let c = (o = r.unmount) == null || o ? 0 : 1;
    return q(c, { [0]() {
      return null;
    }, [1]() {
      return Ve({ ...n, props: { ...r, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Ve(u);
}
function Ve({ props: e, attrs: t, slots: a, slot: l, name: n }) {
  var o;
  let { as: r, ...u } = Se(e, ["unmount", "static"]), c = (o = a.default) == null ? void 0 : o.call(a, l), f = {};
  if (l) {
    let m = !1, b = [];
    for (let [g, $] of Object.entries(l))
      typeof $ == "boolean" && (m = !0), $ === !0 && b.push(g);
    m && (f["data-headlessui-state"] = b.join(" "));
  }
  if (r === "template") {
    if (c = ht(c ?? []), Object.keys(u).length > 0 || Object.keys(t).length > 0) {
      let [m, ...b] = c ?? [];
      if (!In(m) || b.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${n} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(u).concat(Object.keys(t)).sort((g, $) => g.localeCompare($)).map((g) => `  - ${g}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((g) => `  - ${g}`).join(`
`)].join(`
`));
      return Yt(m, Object.assign({}, u, f));
    }
    return Array.isArray(c) && c.length === 1 ? c[0] : c;
  }
  return z(r, Object.assign({}, u, f), { default: () => c });
}
function ht(e) {
  return e.flatMap((t) => t.type === F ? ht(t.children) : [t]);
}
function Fn(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, a = {};
  for (let l of e)
    for (let n in l)
      n.startsWith("on") && typeof l[n] == "function" ? (a[n] != null || (a[n] = []), a[n].push(l[n])) : t[n] = l[n];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(a).map((l) => [l, void 0])));
  for (let l in a)
    Object.assign(t, { [l](n, ...o) {
      let r = a[l];
      for (let u of r) {
        if (n instanceof Event && n.defaultPrevented)
          return;
        u(n, ...o);
      }
    } });
  return t;
}
function Qe(e) {
  let t = Object.assign({}, e);
  for (let a in t)
    t[a] === void 0 && delete t[a];
  return t;
}
function Se(e, t = []) {
  let a = Object.assign({}, e);
  for (let l of t)
    l in a && delete a[l];
  return a;
}
function In(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Nn = 0;
function Vn() {
  return ++Nn;
}
function X() {
  return Vn();
}
var I = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(I || {});
function Mn(e) {
  throw new Error("Unexpected object: " + e);
}
var Q = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(Q || {});
function Hn(e, t) {
  let a = t.resolveItems();
  if (a.length <= 0)
    return null;
  let l = t.resolveActiveIndex(), n = l ?? -1, o = (() => {
    switch (e.focus) {
      case 0:
        return a.findIndex((r) => !t.resolveDisabled(r));
      case 1: {
        let r = a.slice().reverse().findIndex((u, c, f) => n !== -1 && f.length - c - 1 >= n ? !1 : !t.resolveDisabled(u));
        return r === -1 ? r : a.length - 1 - r;
      }
      case 2:
        return a.findIndex((r, u) => u <= n ? !1 : !t.resolveDisabled(r));
      case 3: {
        let r = a.slice().reverse().findIndex((u) => !t.resolveDisabled(u));
        return r === -1 ? r : a.length - 1 - r;
      }
      case 4:
        return a.findIndex((r) => t.resolveId(r) === e.id);
      case 5:
        return null;
      default:
        Mn(e);
    }
  })();
  return o === -1 ? l : o;
}
function j(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let gt = Symbol("Context");
var ie = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ie || {});
function zn() {
  return Le() !== null;
}
function Le() {
  return Z(gt, null);
}
function yt(e) {
  te(gt, e);
}
function st(e, t) {
  if (e)
    return e;
  let a = t ?? "button";
  if (typeof a == "string" && a.toLowerCase() === "button")
    return "button";
}
function xt(e, t) {
  let a = w(st(e.value.type, e.value.as));
  return M(() => {
    a.value = st(e.value.type, e.value.as);
  }), J(() => {
    var l;
    a.value || !j(t) || j(t) instanceof HTMLButtonElement && !((l = j(t)) != null && l.hasAttribute("type")) && (a.value = "button");
  }), a;
}
const je = typeof window > "u" || typeof document > "u";
function se(e) {
  if (je)
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
function wt({ container: e, accept: t, walk: a, enabled: l }) {
  J(() => {
    let n = e.value;
    if (!n || l !== void 0 && !l.value)
      return;
    let o = se(e);
    if (!o)
      return;
    let r = Object.assign((c) => t(c), { acceptNode: t }), u = o.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, r, !1);
    for (; u.nextNode(); )
      a(u.currentNode);
  });
}
let ze = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var ne = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ne || {}), Re = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Re || {}), qn = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(qn || {});
function Un(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(ze)).sort((t, a) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (a.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var $t = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))($t || {});
function Gn(e, t = 0) {
  var a;
  return e === ((a = se(e)) == null ? void 0 : a.body) ? !1 : q(t, { [0]() {
    return e.matches(ze);
  }, [1]() {
    let l = e;
    for (; l !== null; ) {
      if (l.matches(ze))
        return !0;
      l = l.parentElement;
    }
    return !1;
  } });
}
function we(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Wn = ["textarea", "input"].join(",");
function Kn(e) {
  var t, a;
  return (a = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Wn)) != null ? a : !1;
}
function Je(e, t = (a) => a) {
  return e.slice().sort((a, l) => {
    let n = t(a), o = t(l);
    if (n === null || o === null)
      return 0;
    let r = n.compareDocumentPosition(o);
    return r & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : r & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function $e(e, t, { sorted: a = !0, relativeTo: l = null, skipElements: n = [] } = {}) {
  var o;
  let r = (o = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? o : document, u = Array.isArray(e) ? a ? Je(e) : e : Un(e);
  n.length > 0 && (u = u.filter((v) => !n.includes(v))), l = l ?? r.activeElement;
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
      return Math.max(0, u.indexOf(l)) - 1;
    if (t & 4)
      return Math.max(0, u.indexOf(l)) + 1;
    if (t & 8)
      return u.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), m = t & 32 ? { preventScroll: !0 } : {}, b = 0, g = u.length, $;
  do {
    if (b >= g || b + g <= 0)
      return 0;
    let v = f + b;
    if (t & 16)
      v = (v + g) % g;
    else {
      if (v < 0)
        return 3;
      if (v >= g)
        return 1;
    }
    $ = u[v], $ == null || $.focus(m), b += c;
  } while ($ !== r.activeElement);
  return t & 6 && Kn($) && $.select(), $.hasAttribute("tabindex") || $.setAttribute("tabindex", "0"), 2;
}
function Me(e, t, a) {
  je || J((l) => {
    document.addEventListener(e, t, a), l(() => document.removeEventListener(e, t, a));
  });
}
function kt(e, t, a = h(() => !0)) {
  function l(o, r) {
    if (!a.value || o.defaultPrevented)
      return;
    let u = r(o);
    if (u === null || !u.getRootNode().contains(u))
      return;
    let c = function f(m) {
      return typeof m == "function" ? f(m()) : Array.isArray(m) || m instanceof Set ? m : [m];
    }(e);
    for (let f of c) {
      if (f === null)
        continue;
      let m = f instanceof HTMLElement ? f : j(f);
      if (m != null && m.contains(u) || o.composed && o.composedPath().includes(m))
        return;
    }
    return !Gn(u, $t.Loose) && u.tabIndex !== -1 && o.preventDefault(), t(o, u);
  }
  let n = w(null);
  Me("mousedown", (o) => {
    var r, u;
    a.value && (n.value = ((u = (r = o.composedPath) == null ? void 0 : r.call(o)) == null ? void 0 : u[0]) || o.target);
  }, !0), Me("click", (o) => {
    !n.value || (l(o, () => n.value), n.value = null);
  }, !0), Me("blur", (o) => l(o, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var be = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(be || {});
let ke = N({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: a }) {
  return () => {
    let { features: l, ...n } = e, o = { "aria-hidden": (l & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(l & 4) === 4 && (l & 2) !== 2 && { display: "none" } } };
    return V({ ourProps: o, theirProps: n, slot: {}, attrs: a, slots: t, name: "Hidden" });
  };
} });
function Xe(e = {}, t = null, a = []) {
  for (let [l, n] of Object.entries(e))
    _t(a, St(t, l), n);
  return a;
}
function St(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function _t(e, t, a) {
  if (Array.isArray(a))
    for (let [l, n] of a.entries())
      _t(e, St(t, l.toString()), n);
  else
    a instanceof Date ? e.push([t, a.toISOString()]) : typeof a == "boolean" ? e.push([t, a ? "1" : "0"]) : typeof a == "string" ? e.push([t, a]) : typeof a == "number" ? e.push([t, `${a}`]) : a == null ? e.push([t, ""]) : Xe(a, t, e);
}
function Pt(e) {
  var t;
  let a = (t = e == null ? void 0 : e.form) != null ? t : e.closest("form");
  if (a) {
    for (let l of a.elements)
      if (l.tagName === "INPUT" && l.type === "submit" || l.tagName === "BUTTON" && l.type === "submit" || l.nodeName === "INPUT" && l.type === "image") {
        l.click();
        return;
      }
  }
}
function Ze(e, t, a) {
  let l = w(a == null ? void 0 : a.value), n = h(() => e.value !== void 0);
  return [h(() => n.value ? e.value : l.value), function(o) {
    return n.value || (l.value = o), t == null ? void 0 : t(o);
  }];
}
function it(e) {
  return [e.screenX, e.screenY];
}
function Yn() {
  let e = w([-1, -1]);
  return { wasMoved(t) {
    let a = it(t);
    return e.value[0] === a[0] && e.value[1] === a[1] ? !1 : (e.value = a, !0);
  }, update(t) {
    e.value = it(t);
  } };
}
function Qn(e, t) {
  return e === t;
}
var Jn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Jn || {}), Xn = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(Xn || {}), Zn = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Zn || {});
let Ot = Symbol("ComboboxContext");
function _e(e) {
  let t = Z(Ot, null);
  if (t === null) {
    let a = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(a, _e), a;
  }
  return t;
}
let eo = N({ name: "Combobox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => Qn }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String }, nullable: { type: Boolean, default: !1 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: a, emit: l }) {
  let n = w(1), o = w(null), r = w(null), u = w(null), c = w(null), f = w({ static: !1, hold: !1 }), m = w([]), b = w(null), g = w(1), $ = w(!1);
  function v(C = (_) => _) {
    let _ = b.value !== null ? m.value[b.value] : null, P = Je(C(m.value.slice()), (A) => j(A.dataRef.domRef)), k = _ ? P.indexOf(_) : null;
    return k === -1 && (k = null), { options: P, activeOptionIndex: k };
  }
  let O = h(() => e.multiple ? 1 : 0), p = h(() => e.nullable), [x, L] = Ze(h(() => e.modelValue === void 0 ? q(O.value, { [1]: [], [0]: void 0 }) : e.modelValue), (C) => l("update:modelValue", C), h(() => e.defaultValue)), R = { comboboxState: n, value: x, mode: O, compare(C, _) {
    if (typeof e.by == "string") {
      let P = e.by;
      return (C == null ? void 0 : C[P]) === (_ == null ? void 0 : _[P]);
    }
    return e.by(C, _);
  }, defaultValue: h(() => e.defaultValue), nullable: p, inputRef: r, labelRef: o, buttonRef: u, optionsRef: c, disabled: h(() => e.disabled), options: m, change(C) {
    L(C);
  }, activeOptionIndex: h(() => {
    if ($.value && b.value === null && m.value.length > 0) {
      let C = m.value.findIndex((_) => !_.dataRef.disabled);
      if (C !== -1)
        return C;
    }
    return b.value;
  }), activationTrigger: g, optionsPropsRef: f, closeCombobox() {
    $.value = !1, !e.disabled && n.value !== 1 && (n.value = 1, b.value = null);
  }, openCombobox() {
    if ($.value = !0, e.disabled || n.value === 0)
      return;
    let C = m.value.findIndex((_) => {
      let P = D(_.dataRef.value);
      return q(O.value, { [0]: () => R.compare(D(R.value.value), D(P)), [1]: () => D(R.value.value).some((k) => R.compare(D(k), D(P))) });
    });
    C !== -1 && (b.value = C), n.value = 0;
  }, goToOption(C, _, P) {
    if ($.value = !1, e.disabled || c.value && !f.value.static && n.value === 1)
      return;
    let k = v();
    if (k.activeOptionIndex === null) {
      let B = k.options.findIndex((re) => !re.dataRef.disabled);
      B !== -1 && (k.activeOptionIndex = B);
    }
    let A = Hn(C === Q.Specific ? { focus: Q.Specific, id: _ } : { focus: C }, { resolveItems: () => k.options, resolveActiveIndex: () => k.activeOptionIndex, resolveId: (B) => B.id, resolveDisabled: (B) => B.dataRef.disabled });
    b.value = A, g.value = P ?? 1, m.value = k.options;
  }, selectOption(C) {
    let _ = m.value.find((k) => k.id === C);
    if (!_)
      return;
    let { dataRef: P } = _;
    L(q(O.value, { [0]: () => P.value, [1]: () => {
      let k = D(R.value.value).slice(), A = D(P.value), B = k.findIndex((re) => R.compare(A, D(re)));
      return B === -1 ? k.push(A) : k.splice(B, 1), k;
    } }));
  }, selectActiveOption() {
    if (R.activeOptionIndex.value === null)
      return;
    let { dataRef: C, id: _ } = m.value[R.activeOptionIndex.value];
    L(q(O.value, { [0]: () => C.value, [1]: () => {
      let P = D(R.value.value).slice(), k = D(C.value), A = P.findIndex((B) => R.compare(k, D(B)));
      return A === -1 ? P.push(k) : P.splice(A, 1), P;
    } })), R.goToOption(Q.Specific, _);
  }, registerOption(C, _) {
    let P = { id: C, dataRef: _ }, k = v((A) => [...A, P]);
    if (b.value === null) {
      let A = _.value.value;
      q(O.value, { [0]: () => R.compare(D(R.value.value), D(A)), [1]: () => D(R.value.value).some((B) => R.compare(D(B), D(A))) }) && (k.activeOptionIndex = k.options.indexOf(P));
    }
    m.value = k.options, b.value = k.activeOptionIndex, g.value = 1;
  }, unregisterOption(C) {
    let _ = v((P) => {
      let k = P.findIndex((A) => A.id === C);
      return k !== -1 && P.splice(k, 1), P;
    });
    m.value = _.options, b.value = _.activeOptionIndex, g.value = 1;
  } };
  kt([r, u, c], () => R.closeCombobox(), h(() => n.value === 0)), te(Ot, R), yt(h(() => q(n.value, { [0]: ie.Open, [1]: ie.Closed })));
  let U = h(() => R.activeOptionIndex.value === null ? null : m.value[R.activeOptionIndex.value].dataRef.value), H = h(() => {
    var C;
    return (C = j(r)) == null ? void 0 : C.closest("form");
  });
  return M(() => {
    le([H], () => {
      if (!H.value || e.defaultValue === void 0)
        return;
      function C() {
        R.change(e.defaultValue);
      }
      return H.value.addEventListener("reset", C), () => {
        var _;
        (_ = H.value) == null || _.removeEventListener("reset", C);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: C, disabled: _, ...P } = e, k = { open: n.value === 0, disabled: _, activeIndex: R.activeOptionIndex.value, activeOption: U.value, value: x.value };
    return z(F, [...C != null && x.value != null ? Xe({ [C]: x.value }).map(([A, B]) => z(ke, Qe({ features: be.Hidden, key: A, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: A, value: B }))) : [], V({ theirProps: { ...a, ...Se(P, ["modelValue", "defaultValue", "nullable", "multiple", "onUpdate:modelValue", "by"]) }, ourProps: {}, slot: k, slots: t, attrs: a, name: "Combobox" })]);
  };
} }), to = N({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-combobox-label-${X()}` } }, setup(e, { attrs: t, slots: a }) {
  let l = _e("ComboboxLabel");
  function n() {
    var o;
    (o = j(l.inputRef)) == null || o.focus({ preventScroll: !0 });
  }
  return () => {
    let o = { open: l.comboboxState.value === 0, disabled: l.disabled.value }, { id: r, ...u } = e, c = { id: r, ref: l.labelRef, onClick: n };
    return V({ ourProps: c, theirProps: u, slot: o, attrs: t, slots: a, name: "ComboboxLabel" });
  };
} }), lo = N({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-combobox-button-${X()}` } }, setup(e, { attrs: t, slots: a, expose: l }) {
  let n = _e("ComboboxButton");
  l({ el: n.buttonRef, $el: n.buttonRef });
  function o(c) {
    n.disabled.value || (n.comboboxState.value === 0 ? n.closeCombobox() : (c.preventDefault(), n.openCombobox()), pe(() => {
      var f;
      return (f = j(n.inputRef)) == null ? void 0 : f.focus({ preventScroll: !0 });
    }));
  }
  function r(c) {
    switch (c.key) {
      case I.ArrowDown:
        c.preventDefault(), c.stopPropagation(), n.comboboxState.value === 1 && n.openCombobox(), pe(() => {
          var f;
          return (f = n.inputRef.value) == null ? void 0 : f.focus({ preventScroll: !0 });
        });
        return;
      case I.ArrowUp:
        c.preventDefault(), c.stopPropagation(), n.comboboxState.value === 1 && (n.openCombobox(), pe(() => {
          n.value.value || n.goToOption(Q.Last);
        })), pe(() => {
          var f;
          return (f = n.inputRef.value) == null ? void 0 : f.focus({ preventScroll: !0 });
        });
        return;
      case I.Escape:
        if (n.comboboxState.value !== 0)
          return;
        c.preventDefault(), n.optionsRef.value && !n.optionsPropsRef.value.static && c.stopPropagation(), n.closeCombobox(), pe(() => {
          var f;
          return (f = n.inputRef.value) == null ? void 0 : f.focus({ preventScroll: !0 });
        });
        return;
    }
  }
  let u = xt(h(() => ({ as: e.as, type: t.type })), n.buttonRef);
  return () => {
    var c, f;
    let m = { open: n.comboboxState.value === 0, disabled: n.disabled.value, value: n.value.value }, { id: b, ...g } = e, $ = { ref: n.buttonRef, id: b, type: u.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (c = j(n.optionsRef)) == null ? void 0 : c.id, "aria-expanded": n.disabled.value ? void 0 : n.comboboxState.value === 0, "aria-labelledby": n.labelRef.value ? [(f = j(n.labelRef)) == null ? void 0 : f.id, b].join(" ") : void 0, disabled: n.disabled.value === !0 ? !0 : void 0, onKeydown: r, onClick: o };
    return V({ ourProps: $, theirProps: g, slot: m, attrs: t, slots: a, name: "ComboboxButton" });
  };
} }), ao = N({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: () => `headlessui-combobox-input-${X()}` } }, emits: { change: (e) => !0 }, setup(e, { emit: t, attrs: a, slots: l, expose: n }) {
  let o = _e("ComboboxInput"), r = { value: !1 };
  n({ el: o.inputRef, $el: o.inputRef });
  let u = h(() => {
    var p;
    let x = o.value.value;
    return j(o.inputRef) ? typeof e.displayValue < "u" && x !== void 0 ? (p = e.displayValue(x)) != null ? p : "" : typeof x == "string" ? x : "" : "";
  });
  M(() => {
    le([u, o.comboboxState], ([p, x], [L, R]) => {
      if (r.value)
        return;
      let U = j(o.inputRef);
      !U || (R === 0 && x === 1 || p !== L) && (U.value = p);
    }, { immediate: !0 });
  });
  let c = w(!1);
  function f() {
    c.value = !0;
  }
  function m() {
    setTimeout(() => {
      c.value = !1;
    });
  }
  function b(p) {
    switch (r.value = !0, p.key) {
      case I.Backspace:
      case I.Delete:
        if (o.mode.value !== 0 || !o.nullable.value)
          return;
        let x = p.currentTarget;
        requestAnimationFrame(() => {
          if (x.value === "") {
            o.change(null);
            let L = j(o.optionsRef);
            L && (L.scrollTop = 0), o.goToOption(Q.Nothing);
          }
        });
        break;
      case I.Enter:
        if (r.value = !1, o.comboboxState.value !== 0 || c.value)
          return;
        if (p.preventDefault(), p.stopPropagation(), o.activeOptionIndex.value === null) {
          o.closeCombobox();
          return;
        }
        o.selectActiveOption(), o.mode.value === 0 && o.closeCombobox();
        break;
      case I.ArrowDown:
        return r.value = !1, p.preventDefault(), p.stopPropagation(), q(o.comboboxState.value, { [0]: () => o.goToOption(Q.Next), [1]: () => o.openCombobox() });
      case I.ArrowUp:
        return r.value = !1, p.preventDefault(), p.stopPropagation(), q(o.comboboxState.value, { [0]: () => o.goToOption(Q.Previous), [1]: () => {
          o.openCombobox(), pe(() => {
            o.value.value || o.goToOption(Q.Last);
          });
        } });
      case I.Home:
        if (p.shiftKey)
          break;
        return r.value = !1, p.preventDefault(), p.stopPropagation(), o.goToOption(Q.First);
      case I.PageUp:
        return r.value = !1, p.preventDefault(), p.stopPropagation(), o.goToOption(Q.First);
      case I.End:
        if (p.shiftKey)
          break;
        return r.value = !1, p.preventDefault(), p.stopPropagation(), o.goToOption(Q.Last);
      case I.PageDown:
        return r.value = !1, p.preventDefault(), p.stopPropagation(), o.goToOption(Q.Last);
      case I.Escape:
        if (r.value = !1, o.comboboxState.value !== 0)
          return;
        p.preventDefault(), o.optionsRef.value && !o.optionsPropsRef.value.static && p.stopPropagation(), o.closeCombobox();
        break;
      case I.Tab:
        if (r.value = !1, o.comboboxState.value !== 0)
          return;
        o.mode.value === 0 && o.selectActiveOption(), o.closeCombobox();
        break;
    }
  }
  function g(p) {
    t("change", p);
  }
  function $(p) {
    o.openCombobox(), t("change", p);
  }
  function v() {
    r.value = !1;
  }
  let O = h(() => {
    var p, x, L, R;
    return (R = (L = (x = e.defaultValue) != null ? x : o.defaultValue.value !== void 0 ? (p = e.displayValue) == null ? void 0 : p.call(e, o.defaultValue.value) : null) != null ? L : o.defaultValue.value) != null ? R : "";
  });
  return () => {
    var p, x, L, R, U, H;
    let C = { open: o.comboboxState.value === 0 }, { id: _, displayValue: P, ...k } = e, A = { "aria-controls": (p = o.optionsRef.value) == null ? void 0 : p.id, "aria-expanded": o.disabled.value ? void 0 : o.comboboxState.value === 0, "aria-activedescendant": o.activeOptionIndex.value === null || (x = o.options.value[o.activeOptionIndex.value]) == null ? void 0 : x.id, "aria-multiselectable": o.mode.value === 1 ? !0 : void 0, "aria-labelledby": (U = (L = j(o.labelRef)) == null ? void 0 : L.id) != null ? U : (R = j(o.buttonRef)) == null ? void 0 : R.id, id: _, onCompositionstart: f, onCompositionend: m, onKeydown: b, onChange: g, onInput: $, onBlur: v, role: "combobox", type: (H = a.type) != null ? H : "text", tabIndex: 0, ref: o.inputRef, defaultValue: O.value };
    return V({ ourProps: A, theirProps: k, slot: C, attrs: a, slots: l, features: ve.RenderStrategy | ve.Static, name: "ComboboxInput" });
  };
} }), no = N({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, hold: { type: [Boolean], default: !1 } }, setup(e, { attrs: t, slots: a, expose: l }) {
  let n = _e("ComboboxOptions"), o = `headlessui-combobox-options-${X()}`;
  l({ el: n.optionsRef, $el: n.optionsRef }), J(() => {
    n.optionsPropsRef.value.static = e.static;
  }), J(() => {
    n.optionsPropsRef.value.hold = e.hold;
  });
  let r = Le(), u = h(() => r !== null ? r.value === ie.Open : n.comboboxState.value === 0);
  return wt({ container: h(() => j(n.optionsRef)), enabled: h(() => n.comboboxState.value === 0), accept(c) {
    return c.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : c.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(c) {
    c.setAttribute("role", "none");
  } }), () => {
    var c, f, m, b;
    let g = { open: n.comboboxState.value === 0 }, $ = { "aria-activedescendant": n.activeOptionIndex.value === null || (c = n.options.value[n.activeOptionIndex.value]) == null ? void 0 : c.id, "aria-labelledby": (b = (f = j(n.labelRef)) == null ? void 0 : f.id) != null ? b : (m = j(n.buttonRef)) == null ? void 0 : m.id, id: o, ref: n.optionsRef, role: "listbox" }, v = Se(e, ["hold"]);
    return V({ ourProps: $, theirProps: v, slot: g, attrs: t, slots: a, features: ve.RenderStrategy | ve.Static, visible: u.value, name: "ComboboxOptions" });
  };
} }), oo = N({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: a, expose: l }) {
  let n = _e("ComboboxOption"), o = `headlessui-combobox-option-${X()}`, r = w(null);
  l({ el: r, $el: r });
  let u = h(() => n.activeOptionIndex.value !== null ? n.options.value[n.activeOptionIndex.value].id === o : !1), c = h(() => q(n.mode.value, { [0]: () => n.compare(D(n.value.value), D(e.value)), [1]: () => D(n.value.value).some((p) => n.compare(D(p), D(e.value))) })), f = h(() => ({ disabled: e.disabled, value: e.value, domRef: r }));
  M(() => n.registerOption(o, f)), oe(() => n.unregisterOption(o)), J(() => {
    n.comboboxState.value === 0 && (!u.value || n.activationTrigger.value !== 0 && pe(() => {
      var p, x;
      return (x = (p = j(r)) == null ? void 0 : p.scrollIntoView) == null ? void 0 : x.call(p, { block: "nearest" });
    }));
  });
  function m(p) {
    if (e.disabled)
      return p.preventDefault();
    n.selectOption(o), n.mode.value === 0 && n.closeCombobox();
  }
  function b() {
    if (e.disabled)
      return n.goToOption(Q.Nothing);
    n.goToOption(Q.Specific, o);
  }
  let g = Yn();
  function $(p) {
    g.update(p);
  }
  function v(p) {
    !g.wasMoved(p) || e.disabled || u.value || n.goToOption(Q.Specific, o, 0);
  }
  function O(p) {
    !g.wasMoved(p) || e.disabled || !u.value || n.optionsPropsRef.value.hold || n.goToOption(Q.Nothing);
  }
  return () => {
    let { disabled: p } = e, x = { active: u.value, selected: c.value, disabled: p }, L = { id: o, ref: r, role: "option", tabIndex: p === !0 ? void 0 : -1, "aria-disabled": p === !0 ? !0 : void 0, "aria-selected": c.value, disabled: void 0, onClick: m, onFocus: b, onPointerenter: $, onMouseenter: $, onPointermove: v, onMousemove: v, onPointerleave: O, onMouseleave: O };
    return V({ ourProps: L, theirProps: e, slot: x, attrs: a, slots: t, name: "ComboboxOption" });
  };
} });
function ro(e, t, a) {
  je || J((l) => {
    window.addEventListener(e, t, a), l(() => window.removeEventListener(e, t, a));
  });
}
var Oe = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Oe || {});
function so() {
  let e = w(0);
  return ro("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Ct(e, t, a, l) {
  je || J((n) => {
    e = e ?? window, e.addEventListener(t, a, l), n(() => e.removeEventListener(t, a, l));
  });
}
function io(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
var Et = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Et || {});
let Pe = Object.assign(N({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: Object, default: w(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: a, expose: l }) {
  let n = w(null);
  l({ el: n, $el: n });
  let o = h(() => se(n));
  uo({ ownerDocument: o }, h(() => Boolean(e.features & 16)));
  let r = co({ ownerDocument: o, container: n, initialFocus: h(() => e.initialFocus) }, h(() => Boolean(e.features & 2)));
  po({ ownerDocument: o, container: n, containers: e.containers, previousActiveElement: r }, h(() => Boolean(e.features & 8)));
  let u = so();
  function c(g) {
    let $ = j(n);
    $ && ((v) => v())(() => {
      q(u.value, { [Oe.Forwards]: () => $e($, ne.First, { skipElements: [g.relatedTarget] }), [Oe.Backwards]: () => $e($, ne.Last, { skipElements: [g.relatedTarget] }) });
    });
  }
  let f = w(!1);
  function m(g) {
    g.key === "Tab" && (f.value = !0, requestAnimationFrame(() => {
      f.value = !1;
    }));
  }
  function b(g) {
    var $;
    let v = new Set(($ = e.containers) == null ? void 0 : $.value);
    v.add(n);
    let O = g.relatedTarget;
    !O || O.dataset.headlessuiFocusGuard !== "true" && (At(v, O) || (f.value ? $e(j(n), q(u.value, { [Oe.Forwards]: () => ne.Next, [Oe.Backwards]: () => ne.Previous }) | ne.WrapAround, { relativeTo: g.target }) : g.target instanceof HTMLElement && we(g.target)));
  }
  return () => {
    let g = {}, $ = { ref: n, onKeydown: m, onFocusout: b }, { features: v, initialFocus: O, containers: p, ...x } = e;
    return z(F, [Boolean(v & 4) && z(ke, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: be.Focusable }), V({ ourProps: $, theirProps: { ...t, ...x }, slot: g, attrs: t, slots: a, name: "FocusTrap" }), Boolean(v & 4) && z(ke, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: be.Focusable })]);
  };
} }), { features: Et });
function uo({ ownerDocument: e }, t) {
  let a = w(null);
  function l() {
    var o;
    a.value || (a.value = (o = e.value) == null ? void 0 : o.activeElement);
  }
  function n() {
    !a.value || (we(a.value), a.value = null);
  }
  M(() => {
    le(t, (o, r) => {
      o !== r && (o ? l() : n());
    }, { immediate: !0 });
  }), oe(n);
}
function co({ ownerDocument: e, container: t, initialFocus: a }, l) {
  let n = w(null), o = w(!1);
  return M(() => o.value = !0), oe(() => o.value = !1), M(() => {
    le([t, a, l], (r, u) => {
      if (r.every((f, m) => (u == null ? void 0 : u[m]) === f) || !l.value)
        return;
      let c = j(t);
      !c || io(() => {
        var f, m;
        if (!o.value)
          return;
        let b = j(a), g = (f = e.value) == null ? void 0 : f.activeElement;
        if (b) {
          if (b === g) {
            n.value = g;
            return;
          }
        } else if (c.contains(g)) {
          n.value = g;
          return;
        }
        b ? we(b) : $e(c, ne.First | ne.NoScroll) === Re.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), n.value = (m = e.value) == null ? void 0 : m.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), n;
}
function po({ ownerDocument: e, container: t, containers: a, previousActiveElement: l }, n) {
  var o;
  Ct((o = e.value) == null ? void 0 : o.defaultView, "focus", (r) => {
    if (!n.value)
      return;
    let u = new Set(a == null ? void 0 : a.value);
    u.add(t);
    let c = l.value;
    if (!c)
      return;
    let f = r.target;
    f && f instanceof HTMLElement ? At(u, f) ? (l.value = f, we(f)) : (r.preventDefault(), r.stopPropagation(), we(c)) : we(l.value);
  }, !0);
}
function At(e, t) {
  var a;
  for (let l of e)
    if ((a = l.value) != null && a.contains(t))
      return !0;
  return !1;
}
let ut = "body > *", ge = /* @__PURE__ */ new Set(), ce = /* @__PURE__ */ new Map();
function dt(e) {
  e.setAttribute("aria-hidden", "true"), e.inert = !0;
}
function ct(e) {
  let t = ce.get(e);
  !t || (t["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert);
}
function fo(e, t = w(!0)) {
  J((a) => {
    if (!t.value || !e.value)
      return;
    let l = e.value, n = se(l);
    if (n) {
      ge.add(l);
      for (let o of ce.keys())
        o.contains(l) && (ct(o), ce.delete(o));
      n.querySelectorAll(ut).forEach((o) => {
        if (o instanceof HTMLElement) {
          for (let r of ge)
            if (o.contains(r))
              return;
          ge.size === 1 && (ce.set(o, { "aria-hidden": o.getAttribute("aria-hidden"), inert: o.inert }), dt(o));
        }
      }), a(() => {
        if (ge.delete(l), ge.size > 0)
          n.querySelectorAll(ut).forEach((o) => {
            if (o instanceof HTMLElement && !ce.has(o)) {
              for (let r of ge)
                if (o.contains(r))
                  return;
              ce.set(o, { "aria-hidden": o.getAttribute("aria-hidden"), inert: o.inert }), dt(o);
            }
          });
        else
          for (let o of ce.keys())
            ct(o), ce.delete(o);
      });
    }
  });
}
let Tt = Symbol("ForcePortalRootContext");
function vo() {
  return Z(Tt, !1);
}
let qe = N({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: a }) {
  return te(Tt, e.force), () => {
    let { force: l, ...n } = e;
    return V({ theirProps: n, ourProps: {}, slot: {}, slots: t, attrs: a, name: "ForcePortalRoot" });
  };
} });
function mo(e) {
  let t = se(e);
  if (!t) {
    if (e === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let a = t.getElementById("headlessui-portal-root");
  if (a)
    return a;
  let l = t.createElement("div");
  return l.setAttribute("id", "headlessui-portal-root"), t.body.appendChild(l);
}
let Rt = N({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: a }) {
  let l = w(null), n = h(() => se(l)), o = vo(), r = Z(Lt, null), u = w(o === !0 || r == null ? mo(l.value) : r.resolveTarget());
  return J(() => {
    o || r != null && (u.value = r.resolveTarget());
  }), oe(() => {
    var c, f;
    let m = (c = n.value) == null ? void 0 : c.getElementById("headlessui-portal-root");
    !m || u.value === m && u.value.children.length <= 0 && ((f = u.value.parentElement) == null || f.removeChild(u.value));
  }), () => {
    if (u.value === null)
      return null;
    let c = { ref: l, "data-headlessui-portal": "" };
    return z(vt, { to: u.value }, V({ ourProps: c, theirProps: e, slot: {}, attrs: a, slots: t, name: "Portal" }));
  };
} }), Lt = Symbol("PortalGroupContext"), bo = N({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: a }) {
  let l = Qt({ resolveTarget() {
    return e.target;
  } });
  return te(Lt, l), () => {
    let { target: n, ...o } = e;
    return V({ theirProps: o, ourProps: {}, slot: {}, attrs: t, slots: a, name: "PortalGroup" });
  };
} }), jt = Symbol("StackContext");
var Ue = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Ue || {});
function ho() {
  return Z(jt, () => {
  });
}
function go({ type: e, enabled: t, element: a, onUpdate: l }) {
  let n = ho();
  function o(...r) {
    l == null || l(...r), n(...r);
  }
  M(() => {
    le(t, (r, u) => {
      r ? o(0, e, a) : u === !0 && o(1, e, a);
    }, { immediate: !0, flush: "sync" });
  }), oe(() => {
    t.value && o(1, e, a);
  }), te(jt, o);
}
let Bt = Symbol("DescriptionContext");
function yo() {
  let e = Z(Bt, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function Be({ slot: e = w({}), name: t = "Description", props: a = {} } = {}) {
  let l = w([]);
  function n(o) {
    return l.value.push(o), () => {
      let r = l.value.indexOf(o);
      r !== -1 && l.value.splice(r, 1);
    };
  }
  return te(Bt, { register: n, slot: e, name: t, props: a }), h(() => l.value.length > 0 ? l.value.join(" ") : void 0);
}
let xo = N({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${X()}` } }, setup(e, { attrs: t, slots: a }) {
  let l = yo();
  return M(() => oe(l.register(e.id))), () => {
    let { name: n = "Description", slot: o = w({}), props: r = {} } = l, { id: u, ...c } = e, f = { ...Object.entries(r).reduce((m, [b, g]) => Object.assign(m, { [b]: y(g) }), {}), id: u };
    return V({ ourProps: f, theirProps: c, slot: o.value, attrs: t, slots: a, name: n });
  };
} });
function et() {
  let e = [], t = [], a = { enqueue(l) {
    t.push(l);
  }, addEventListener(l, n, o, r) {
    return l.addEventListener(n, o, r), a.add(() => l.removeEventListener(n, o, r));
  }, requestAnimationFrame(...l) {
    let n = requestAnimationFrame(...l);
    a.add(() => cancelAnimationFrame(n));
  }, nextFrame(...l) {
    a.requestAnimationFrame(() => {
      a.requestAnimationFrame(...l);
    });
  }, setTimeout(...l) {
    let n = setTimeout(...l);
    a.add(() => clearTimeout(n));
  }, add(l) {
    e.push(l);
  }, dispose() {
    for (let l of e.splice(0))
      l();
  }, async workQueue() {
    for (let l of t.splice(0))
      await l();
  } };
  return a;
}
function wo() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
var $o = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))($o || {});
let Ge = Symbol("DialogContext");
function Ee(e) {
  let t = Z(Ge, null);
  if (t === null) {
    let a = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(a, Ee), a;
  }
  return t;
}
let Ae = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", ko = N({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Ae }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${X()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: a, slots: l, expose: n }) {
  var o;
  let r = w(!1);
  M(() => {
    r.value = !0;
  });
  let u = w(0), c = Le(), f = h(() => e.open === Ae && c !== null ? q(c.value, { [ie.Open]: !0, [ie.Closed]: !1 }) : e.open), m = w(/* @__PURE__ */ new Set()), b = w(null), g = w(null), $ = h(() => se(b));
  if (n({ el: b, $el: b }), !(e.open !== Ae || c !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof f.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${f.value === Ae ? void 0 : e.open}`);
  let v = h(() => r.value && f.value ? 0 : 1), O = h(() => v.value === 0), p = h(() => u.value > 1), x = Z(Ge, null) !== null, L = h(() => p.value ? "parent" : "leaf");
  fo(b, h(() => p.value ? O.value : !1)), go({ type: "Dialog", enabled: h(() => v.value === 0), element: b, onUpdate: (_, P, k) => {
    if (P === "Dialog")
      return q(_, { [Ue.Add]() {
        m.value.add(k), u.value += 1;
      }, [Ue.Remove]() {
        m.value.delete(k), u.value -= 1;
      } });
  } });
  let R = Be({ name: "DialogDescription", slot: h(() => ({ open: f.value })) }), U = w(null), H = { titleId: U, panelRef: w(null), dialogState: v, setTitleId(_) {
    U.value !== _ && (U.value = _);
  }, close() {
    t("close", !1);
  } };
  te(Ge, H);
  function C() {
    var _, P, k;
    return [...Array.from((P = (_ = $.value) == null ? void 0 : _.querySelectorAll("body > *, [data-headlessui-portal]")) != null ? P : []).filter((A) => !(!(A instanceof HTMLElement) || A.contains(j(g)) || H.panelRef.value && A.contains(H.panelRef.value))), (k = H.panelRef.value) != null ? k : b.value];
  }
  return kt(() => C(), (_, P) => {
    H.close(), pe(() => P == null ? void 0 : P.focus());
  }, h(() => v.value === 0 && !p.value)), Ct((o = $.value) == null ? void 0 : o.defaultView, "keydown", (_) => {
    _.defaultPrevented || _.key === I.Escape && v.value === 0 && (p.value || (_.preventDefault(), _.stopPropagation(), H.close()));
  }), J((_) => {
    var P;
    if (v.value !== 0 || x)
      return;
    let k = $.value;
    if (!k)
      return;
    let A = et(), B = window.pageYOffset;
    function re(ae, ee, de) {
      let Ie = ae.style.getPropertyValue(ee);
      return Object.assign(ae.style, { [ee]: de }), A.add(() => {
        Object.assign(ae.style, { [ee]: Ie });
      });
    }
    let he = k == null ? void 0 : k.documentElement, Fe = ((P = k.defaultView) != null ? P : window).innerWidth - he.clientWidth;
    if (re(he, "overflow", "hidden"), Fe > 0) {
      let ae = he.clientWidth - he.offsetWidth, ee = Fe - ae;
      re(he, "paddingRight", `${ee}px`);
    }
    if (wo()) {
      re(k.body, "marginTop", `-${B}px`), window.scrollTo(0, 0);
      let ae = null;
      A.addEventListener(k, "click", (ee) => {
        if (ee.target instanceof HTMLElement)
          try {
            let de = ee.target.closest("a");
            if (!de)
              return;
            let { hash: Ie } = new URL(de.href), Ne = k.querySelector(Ie);
            Ne && !C().some((Ut) => Ut.contains(Ne)) && (ae = Ne);
          } catch {
          }
      }, !0), A.addEventListener(k, "touchmove", (ee) => {
        ee.target instanceof HTMLElement && !C().some((de) => de.contains(ee.target)) && ee.preventDefault();
      }, { passive: !1 }), A.add(() => {
        window.scrollTo(0, window.pageYOffset + B), ae && ae.isConnected && (ae.scrollIntoView({ block: "nearest" }), ae = null);
      });
    }
    _(A.dispose);
  }), J((_) => {
    if (v.value !== 0)
      return;
    let P = j(b);
    if (!P)
      return;
    let k = new IntersectionObserver((A) => {
      for (let B of A)
        B.boundingClientRect.x === 0 && B.boundingClientRect.y === 0 && B.boundingClientRect.width === 0 && B.boundingClientRect.height === 0 && H.close();
    });
    k.observe(P), _(() => k.disconnect());
  }), () => {
    let { id: _, open: P, initialFocus: k, ...A } = e, B = { ...a, ref: b, id: _, role: "dialog", "aria-modal": v.value === 0 ? !0 : void 0, "aria-labelledby": U.value, "aria-describedby": R.value }, re = { open: v.value === 0 };
    return z(qe, { force: !0 }, () => [z(Rt, () => z(bo, { target: b.value }, () => z(qe, { force: !1 }, () => z(Pe, { initialFocus: k, containers: m, features: O.value ? q(L.value, { parent: Pe.features.RestoreFocus, leaf: Pe.features.All & ~Pe.features.FocusLock }) : Pe.features.None }, () => V({ ourProps: B, theirProps: A, slot: re, attrs: a, slots: l, visible: v.value === 0, features: ve.RenderStrategy | ve.Static, name: "Dialog" }))))), z(ke, { features: be.Hidden, ref: g })]);
  };
} });
N({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${X()}` } }, setup(e, { attrs: t, slots: a }) {
  let l = Ee("DialogOverlay");
  function n(o) {
    o.target === o.currentTarget && (o.preventDefault(), o.stopPropagation(), l.close());
  }
  return () => {
    let { id: o, ...r } = e;
    return V({ ourProps: { id: o, "aria-hidden": !0, onClick: n }, theirProps: r, slot: { open: l.dialogState.value === 0 }, attrs: t, slots: a, name: "DialogOverlay" });
  };
} });
N({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${X()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: a, expose: l }) {
  let n = Ee("DialogBackdrop"), o = w(null);
  return l({ el: o, $el: o }), M(() => {
    if (n.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: r, ...u } = e, c = { id: r, ref: o, "aria-hidden": !0 };
    return z(qe, { force: !0 }, () => z(Rt, () => V({ ourProps: c, theirProps: { ...t, ...u }, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: a, name: "DialogBackdrop" })));
  };
} });
let So = N({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${X()}` } }, setup(e, { attrs: t, slots: a, expose: l }) {
  let n = Ee("DialogPanel");
  l({ el: n.panelRef, $el: n.panelRef });
  function o(r) {
    r.stopPropagation();
  }
  return () => {
    let { id: r, ...u } = e, c = { id: r, ref: n.panelRef, onClick: o };
    return V({ ourProps: c, theirProps: u, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: a, name: "DialogPanel" });
  };
} });
N({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${X()}` } }, setup(e, { attrs: t, slots: a }) {
  let l = Ee("DialogTitle");
  return M(() => {
    l.setTitleId(e.id), oe(() => l.setTitleId(null));
  }), () => {
    let { id: n, ...o } = e;
    return V({ ourProps: { id: n }, theirProps: o, slot: { open: l.dialogState.value === 0 }, attrs: t, slots: a, name: "DialogTitle" });
  };
} });
let Dt = Symbol("LabelContext");
function Ft() {
  let e = Z(Dt, null);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Ft), t;
  }
  return e;
}
function tt({ slot: e = {}, name: t = "Label", props: a = {} } = {}) {
  let l = w([]);
  function n(o) {
    return l.value.push(o), () => {
      let r = l.value.indexOf(o);
      r !== -1 && l.value.splice(r, 1);
    };
  }
  return te(Dt, { register: n, slot: e, name: t, props: a }), h(() => l.value.length > 0 ? l.value.join(" ") : void 0);
}
let It = N({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-label-${X()}` } }, setup(e, { slots: t, attrs: a }) {
  let l = Ft();
  return M(() => oe(l.register(e.id))), () => {
    let { name: n = "Label", slot: o = {}, props: r = {} } = l, { id: u, passive: c, ...f } = e, m = { ...Object.entries(r).reduce((b, [g, $]) => Object.assign(b, { [g]: y($) }), {}), id: u };
    return c && (delete m.onClick, delete f.onClick), V({ ourProps: m, theirProps: f, slot: o, attrs: a, slots: t, name: n });
  };
} });
function _o(e, t) {
  return e === t;
}
let Nt = Symbol("RadioGroupContext");
function Vt(e) {
  let t = Z(Nt, null);
  if (t === null) {
    let a = new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(a, Vt), a;
  }
  return t;
}
let Po = N({ name: "RadioGroup", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "div" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => _o }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-radiogroup-${X()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: a, slots: l, expose: n }) {
  let o = w(null), r = w([]), u = tt({ name: "RadioGroupLabel" }), c = Be({ name: "RadioGroupDescription" });
  n({ el: o, $el: o });
  let [f, m] = Ze(h(() => e.modelValue), (v) => t("update:modelValue", v), h(() => e.defaultValue)), b = { options: r, value: f, disabled: h(() => e.disabled), firstOption: h(() => r.value.find((v) => !v.propsRef.disabled)), containsCheckedOption: h(() => r.value.some((v) => b.compare(D(v.propsRef.value), D(e.modelValue)))), compare(v, O) {
    if (typeof e.by == "string") {
      let p = e.by;
      return (v == null ? void 0 : v[p]) === (O == null ? void 0 : O[p]);
    }
    return e.by(v, O);
  }, change(v) {
    var O;
    if (e.disabled || b.compare(D(f.value), D(v)))
      return !1;
    let p = (O = r.value.find((x) => b.compare(D(x.propsRef.value), D(v)))) == null ? void 0 : O.propsRef;
    return p != null && p.disabled ? !1 : (m(v), !0);
  }, registerOption(v) {
    r.value.push(v), r.value = Je(r.value, (O) => O.element);
  }, unregisterOption(v) {
    let O = r.value.findIndex((p) => p.id === v);
    O !== -1 && r.value.splice(O, 1);
  } };
  te(Nt, b), wt({ container: h(() => j(o)), accept(v) {
    return v.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : v.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(v) {
    v.setAttribute("role", "none");
  } });
  function g(v) {
    if (!o.value || !o.value.contains(v.target))
      return;
    let O = r.value.filter((p) => p.propsRef.disabled === !1).map((p) => p.element);
    switch (v.key) {
      case I.Enter:
        Pt(v.currentTarget);
        break;
      case I.ArrowLeft:
      case I.ArrowUp:
        if (v.preventDefault(), v.stopPropagation(), $e(O, ne.Previous | ne.WrapAround) === Re.Success) {
          let p = r.value.find((x) => {
            var L;
            return x.element === ((L = se(o)) == null ? void 0 : L.activeElement);
          });
          p && b.change(p.propsRef.value);
        }
        break;
      case I.ArrowRight:
      case I.ArrowDown:
        if (v.preventDefault(), v.stopPropagation(), $e(O, ne.Next | ne.WrapAround) === Re.Success) {
          let p = r.value.find((x) => {
            var L;
            return x.element === ((L = se(x.element)) == null ? void 0 : L.activeElement);
          });
          p && b.change(p.propsRef.value);
        }
        break;
      case I.Space:
        {
          v.preventDefault(), v.stopPropagation();
          let p = r.value.find((x) => {
            var L;
            return x.element === ((L = se(x.element)) == null ? void 0 : L.activeElement);
          });
          p && b.change(p.propsRef.value);
        }
        break;
    }
  }
  let $ = h(() => {
    var v;
    return (v = j(o)) == null ? void 0 : v.closest("form");
  });
  return M(() => {
    le([$], () => {
      if (!$.value || e.defaultValue === void 0)
        return;
      function v() {
        b.change(e.defaultValue);
      }
      return $.value.addEventListener("reset", v), () => {
        var O;
        (O = $.value) == null || O.removeEventListener("reset", v);
      };
    }, { immediate: !0 });
  }), () => {
    let { disabled: v, name: O, id: p, ...x } = e, L = { ref: o, id: p, role: "radiogroup", "aria-labelledby": u.value, "aria-describedby": c.value, onKeydown: g };
    return z(F, [...O != null && f.value != null ? Xe({ [O]: f.value }).map(([R, U]) => z(ke, Qe({ features: be.Hidden, key: R, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: R, value: U }))) : [], V({ ourProps: L, theirProps: { ...a, ...Se(x, ["modelValue", "defaultValue"]) }, slot: {}, attrs: a, slots: l, name: "RadioGroup" })]);
  };
} });
var Oo = ((e) => (e[e.Empty = 1] = "Empty", e[e.Active = 2] = "Active", e))(Oo || {});
let Co = N({ name: "RadioGroupOption", props: { as: { type: [Object, String], default: "div" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-radiogroup-option-${X()}` } }, setup(e, { attrs: t, slots: a, expose: l }) {
  let n = Vt("RadioGroupOption"), o = tt({ name: "RadioGroupLabel" }), r = Be({ name: "RadioGroupDescription" }), u = w(null), c = h(() => ({ value: e.value, disabled: e.disabled })), f = w(1);
  l({ el: u, $el: u }), M(() => n.registerOption({ id: e.id, element: u, propsRef: c })), oe(() => n.unregisterOption(e.id));
  let m = h(() => {
    var x;
    return ((x = n.firstOption.value) == null ? void 0 : x.id) === e.id;
  }), b = h(() => n.disabled.value || e.disabled), g = h(() => n.compare(D(n.value.value), D(e.value))), $ = h(() => b.value ? -1 : g.value || !n.containsCheckedOption.value && m.value ? 0 : -1);
  function v() {
    var x;
    !n.change(e.value) || (f.value |= 2, (x = u.value) == null || x.focus());
  }
  function O() {
    f.value |= 2;
  }
  function p() {
    f.value &= -3;
  }
  return () => {
    let { id: x, value: L, disabled: R, ...U } = e, H = { checked: g.value, disabled: b.value, active: Boolean(f.value & 2) }, C = { id: x, ref: u, role: "radio", "aria-checked": g.value ? "true" : "false", "aria-labelledby": o.value, "aria-describedby": r.value, "aria-disabled": b.value ? !0 : void 0, tabIndex: $.value, onClick: b.value ? void 0 : v, onFocus: b.value ? void 0 : O, onBlur: b.value ? void 0 : p };
    return V({ ourProps: C, theirProps: U, slot: H, attrs: t, slots: a, name: "RadioGroupOption" });
  };
} }), pt = It, Eo = xo, Mt = Symbol("GroupContext"), Ao = N({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: a }) {
  let l = w(null), n = tt({ name: "SwitchLabel", props: { onClick() {
    !l.value || (l.value.click(), l.value.focus({ preventScroll: !0 }));
  } } }), o = Be({ name: "SwitchDescription" });
  return te(Mt, { switchRef: l, labelledby: n, describedby: o }), () => V({ theirProps: e, ourProps: {}, slot: {}, slots: t, attrs: a, name: "SwitchGroup" });
} }), To = N({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: !0 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-switch-${X()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: a, slots: l, expose: n }) {
  let o = Z(Mt, null), [r, u] = Ze(h(() => e.modelValue), (p) => t("update:modelValue", p), h(() => e.defaultChecked));
  function c() {
    u(!r.value);
  }
  let f = w(null), m = o === null ? f : o.switchRef, b = xt(h(() => ({ as: e.as, type: a.type })), m);
  n({ el: m, $el: m });
  function g(p) {
    p.preventDefault(), c();
  }
  function $(p) {
    p.key === I.Space ? (p.preventDefault(), c()) : p.key === I.Enter && Pt(p.currentTarget);
  }
  function v(p) {
    p.preventDefault();
  }
  let O = h(() => {
    var p, x;
    return (x = (p = j(m)) == null ? void 0 : p.closest) == null ? void 0 : x.call(p, "form");
  });
  return M(() => {
    le([O], () => {
      if (!O.value || e.defaultChecked === void 0)
        return;
      function p() {
        u(e.defaultChecked);
      }
      return O.value.addEventListener("reset", p), () => {
        var x;
        (x = O.value) == null || x.removeEventListener("reset", p);
      };
    }, { immediate: !0 });
  }), () => {
    let { id: p, name: x, value: L, ...R } = e, U = { checked: r.value }, H = { id: p, ref: m, role: "switch", type: b.value, tabIndex: 0, "aria-checked": r.value, "aria-labelledby": o == null ? void 0 : o.labelledby.value, "aria-describedby": o == null ? void 0 : o.describedby.value, onClick: g, onKeyup: $, onKeypress: v };
    return z(F, [x != null && r.value != null ? z(ke, Qe({ features: be.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: r.value, name: x, value: L })) : null, V({ ourProps: H, theirProps: { ...a, ...Se(R, ["modelValue", "defaultChecked"]) }, slot: U, attrs: a, slots: l, name: "Switch" })]);
  };
} }), Ro = It;
function Lo(e) {
  let t = { called: !1 };
  return (...a) => {
    if (!t.called)
      return t.called = !0, e(...a);
  };
}
function He(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Te(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var We = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(We || {});
function jo(e, t) {
  let a = et();
  if (!e)
    return a.dispose;
  let { transitionDuration: l, transitionDelay: n } = getComputedStyle(e), [o, r] = [l, n].map((u) => {
    let [c = 0] = u.split(",").filter(Boolean).map((f) => f.includes("ms") ? parseFloat(f) : parseFloat(f) * 1e3).sort((f, m) => m - f);
    return c;
  });
  return o !== 0 ? a.setTimeout(() => t("finished"), o + r) : t("finished"), a.add(() => t("cancelled")), a.dispose;
}
function ft(e, t, a, l, n, o) {
  let r = et(), u = o !== void 0 ? Lo(o) : () => {
  };
  return Te(e, ...n), He(e, ...t, ...a), r.nextFrame(() => {
    Te(e, ...a), He(e, ...l), r.add(jo(e, (c) => (Te(e, ...l, ...t), He(e, ...n), u(c))));
  }), r.add(() => Te(e, ...t, ...a, ...l, ...n)), r.add(() => u("cancelled")), r.dispose;
}
function me(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let lt = Symbol("TransitionContext");
var Bo = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Bo || {});
function Do() {
  return Z(lt, null) !== null;
}
function Fo() {
  let e = Z(lt, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Io() {
  let e = Z(at, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let at = Symbol("NestingContext");
function De(e) {
  return "children" in e ? De(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Ht(e) {
  let t = w([]), a = w(!1);
  M(() => a.value = !0), oe(() => a.value = !1);
  function l(o, r = fe.Hidden) {
    let u = t.value.findIndex(({ id: c }) => c === o);
    u !== -1 && (q(r, { [fe.Unmount]() {
      t.value.splice(u, 1);
    }, [fe.Hidden]() {
      t.value[u].state = "hidden";
    } }), !De(t) && a.value && (e == null || e()));
  }
  function n(o) {
    let r = t.value.find(({ id: u }) => u === o);
    return r ? r.state !== "visible" && (r.state = "visible") : t.value.push({ id: o, state: "visible" }), () => l(o, fe.Unmount);
  }
  return { children: t, register: n, unregister: l };
}
let zt = ve.RenderStrategy, Ke = N({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: a, slots: l, expose: n }) {
  if (!Do() && zn())
    return () => z(qt, { ...e, onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave") }, l);
  let o = w(null), r = w("visible"), u = h(() => e.unmount ? fe.Unmount : fe.Hidden);
  n({ el: o, $el: o });
  let { show: c, appear: f } = Fo(), { register: m, unregister: b } = Io(), g = { value: !0 }, $ = X(), v = { value: !1 }, O = Ht(() => {
    v.value || (r.value = "hidden", b($), t("afterLeave"));
  });
  M(() => {
    let P = m($);
    oe(P);
  }), J(() => {
    if (u.value === fe.Hidden && $) {
      if (c && r.value !== "visible") {
        r.value = "visible";
        return;
      }
      q(r.value, { hidden: () => b($), visible: () => m($) });
    }
  });
  let p = me(e.enter), x = me(e.enterFrom), L = me(e.enterTo), R = me(e.entered), U = me(e.leave), H = me(e.leaveFrom), C = me(e.leaveTo);
  M(() => {
    J(() => {
      if (r.value === "visible") {
        let P = j(o);
        if (P instanceof Comment && P.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function _(P) {
    let k = g.value && !f.value, A = j(o);
    !A || !(A instanceof HTMLElement) || k || (v.value = !0, c.value && t("beforeEnter"), c.value || t("beforeLeave"), P(c.value ? ft(A, p, x, L, R, (B) => {
      v.value = !1, B === We.Finished && t("afterEnter");
    }) : ft(A, U, H, C, R, (B) => {
      v.value = !1, B === We.Finished && (De(O) || (r.value = "hidden", b($), t("afterLeave")));
    })));
  }
  return M(() => {
    le([c], (P, k, A) => {
      _(A), g.value = !1;
    }, { immediate: !0 });
  }), te(at, O), yt(h(() => q(r.value, { visible: ie.Open, hidden: ie.Closed }))), () => {
    let { appear: P, show: k, enter: A, enterFrom: B, enterTo: re, entered: he, leave: Fe, leaveFrom: ae, leaveTo: ee, ...de } = e;
    return V({ theirProps: de, ourProps: { ref: o }, slot: {}, slots: l, attrs: a, features: zt, visible: r.value === "visible", name: "TransitionChild" });
  };
} }), No = Ke, qt = N({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: a, slots: l }) {
  let n = Le(), o = h(() => e.show === null && n !== null ? q(n.value, { [ie.Open]: !0, [ie.Closed]: !1 }) : e.show);
  J(() => {
    if (![!0, !1].includes(o.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r = w(o.value ? "visible" : "hidden"), u = Ht(() => {
    r.value = "hidden";
  }), c = w(!0), f = { show: o, appear: h(() => e.appear || !c.value) };
  return M(() => {
    J(() => {
      c.value = !1, o.value ? r.value = "visible" : De(u) || (r.value = "hidden");
    });
  }), te(at, u), te(lt, f), () => {
    let m = Se(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), b = { unmount: e.unmount };
    return V({ ourProps: { ...b, as: "template" }, theirProps: {}, slot: {}, slots: { ...l, default: () => [z(No, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...a, ...b, ...m }, l.default)] }, attrs: {}, features: zt, visible: r.value === "visible", name: "Transition" });
  };
} });
const Vo = ["title"], Mo = { class: "relative mt-1" }, Ho = {
  name: "PoSelectField"
}, Cs = /* @__PURE__ */ Object.assign(Ho, {
  props: {
    /**
     * Model value
     */
    modelValue: {
      type: [String, Number],
      default: ""
    },
    /**
     * Pre selected value if any
     */
    preSelected: {
      type: Object,
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
    }
  },
  emits: ["selected", "unSelected"],
  setup(e, { emit: t }) {
    const a = e, l = w(""), n = w(a.preSelected), o = h(
      () => l.value === "" ? a.list : a.list.filter((r) => r.name.toLowerCase().includes(l.value.toLowerCase()))
    );
    return le(n, () => {
      t("update:modelValue", n.value);
    }), (r, u) => (i(), K(y(eo), {
      as: "div",
      modelValue: n.value,
      "onUpdate:modelValue": u[1] || (u[1] = (c) => n.value = c)
    }, {
      default: G(() => [
        T(y(to), { class: "text-sm font-medium text-slate-700 flex items-center space-x-1" }, {
          default: G(() => [
            s("span", null, S(e.label), 1),
            e.info !== null ? (i(), d("abbr", {
              key: 0,
              title: e.info,
              class: "w-4 text-slate-500"
            }, [
              T(y(Bn), { class: "fill-current" })
            ], 8, Vo)) : E("", !0)
          ]),
          _: 1
        }),
        s("div", Mo, [
          T(y(ao), {
            class: "w-full rounded-md border border-slate-300 bg-white py-2 pl-3 pr-10 focus:border-mpao-lightblue focus:outline-none focus:ring-0 sm:text-sm",
            onChange: u[0] || (u[0] = (c) => l.value = c.target.value),
            "display-value": (c) => c == null ? void 0 : c.name
          }, null, 8, ["display-value"]),
          T(y(lo), { class: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none" }, {
            default: G(() => [
              T(y(jn), {
                class: "h-5 w-5 text-slate-400",
                "aria-hidden": "true"
              })
            ]),
            _: 1
          }),
          y(o).length > 0 ? (i(), K(y(no), {
            key: 0,
            class: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          }, {
            default: G(() => [
              (i(!0), d(F, null, Y(y(o), (c) => (i(), K(y(oo), {
                key: c.id,
                value: c,
                as: "template"
              }, {
                default: G(({ active: f, selected: m }) => [
                  s("li", {
                    class: W(["relative cursor-default select-none py-2 pl-3 pr-9", f ? "bg-mpao-lightblue text-white" : "text-slate-900"])
                  }, [
                    s("span", {
                      class: W(["block truncate", m && "font-semibold"])
                    }, S(c.name), 3),
                    m ? (i(), d("span", {
                      key: 0,
                      class: W(["absolute inset-y-0 right-0 flex items-center pr-4", f ? "text-white" : "text-mpao-lightblue"])
                    }, [
                      T(y(Ln), {
                        class: "h-5 w-5",
                        "aria-hidden": "true"
                      })
                    ], 2)) : E("", !0)
                  ], 2)
                ]),
                _: 2
              }, 1032, ["value"]))), 128))
            ]),
            _: 1
          })) : E("", !0)
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), zo = ["disabled", "aria-disabled"], qo = ["value", "disabled", "aria-disabled"], Uo = ["href"], Go = {
  name: "PoButton"
}, Wo = /* @__PURE__ */ Object.assign(Go, {
  props: {
    /**
     * Type of button. It can be 'button', 'submit', or 'link'.
     */
    type: {
      type: String,
      default: "button"
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
    }
  },
  setup(e) {
    const t = e, a = "rounded-lg transition-colors duration-100 ease-in-out cursor-pointer disabled:bg-slate-400 disabled:cursor-default disabled:hover:bg-slate-400", l = h(() => {
      switch (t.size) {
        case "sm":
          return "px-2 py-1 text-xs";
        case "md":
          return "px-4 py-2 text-sm";
        case "lg":
          return "px-5 py-3 text-normal";
      }
    }), n = h(() => t.overrideColors ? "" : "bg-mpao-lightblue hover:bg-mpao-blue focus:bg-mpao-blue text-slate-50");
    return (o, r) => (i(), d(F, null, [
      e.type == "button" ? (i(), d("button", ye({
        key: 0,
        class: [a, y(l), y(n)],
        disabled: e.disabled,
        "aria-disabled": e.disabled
      }, o.$attrs), S(e.label), 17, zo)) : E("", !0),
      e.type == "submit" ? (i(), d("input", ye({
        key: 1,
        type: "submit",
        class: [a, y(l), y(n)],
        value: e.label,
        disabled: e.disabled,
        "aria-disabled": e.disabled
      }, o.$attrs), null, 16, qo)) : E("", !0),
      e.type == "link" ? (i(), d("a", ye({
        key: 2,
        href: e.to,
        class: [a, y(l), y(n)]
      }, o.$attrs), S(e.label), 17, Uo)) : E("", !0)
    ], 64));
  }
}), Ko = /* @__PURE__ */ s("div", { class: "fixed inset-0 bg-gradient-to-br from-mpao-orange via-mpao-lightblue to-mpao-blue opacity-60 transition-opacity" }, null, -1), Yo = { class: "fixed z-10 inset-0 overflow-y-auto" }, Qo = { class: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" }, Jo = /* @__PURE__ */ s("span", {
  class: "hidden sm:inline-block sm:align-middle sm:h-screen",
  "aria-hidden": "true"
}, "​", -1), Xo = { class: "flex items-center bg-mpao-lightblue rounded-t-xl p-5" }, Zo = { class: "grow text-md font-bold text-sky-50" }, er = { class: "shrink-0" }, tr = { class: "p-5" }, lr = {
  name: "PoModal"
}, Es = /* @__PURE__ */ Object.assign(lr, {
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
    }
  },
  setup(e) {
    const t = e, { show: a } = mt(t), l = w(!1);
    return le(a, () => {
      l.value = !1, setTimeout(() => {
        l.value = !0;
      }, 100);
    }), (n, o) => (i(), d("div", null, [
      e.openBtnLabel.length > 0 ? (i(), K(y(Wo), {
        key: 0,
        label: e.openBtnLabel,
        onClick: o[0] || (o[0] = (r) => l.value = !0)
      }, null, 8, ["label"])) : E("", !0),
      T(y(qt), {
        as: "template",
        show: l.value
      }, {
        default: G(() => [
          T(y(ko), {
            as: "div",
            class: "relative z-50",
            onClose: o[2] || (o[2] = (r) => l.value = !1)
          }, {
            default: G(() => [
              T(y(Ke), {
                as: "template",
                enter: "ease-out duration-300",
                "enter-from": "opacity-0",
                "enter-to": "opacity-100",
                leave: "ease-in duration-200",
                "leave-from": "opacity-100",
                "leave-to": "opacity-0"
              }, {
                default: G(() => [
                  Ko
                ]),
                _: 1
              }),
              s("div", Yo, [
                s("div", Qo, [
                  Jo,
                  T(y(Ke), {
                    as: "template",
                    enter: "ease-out duration-300",
                    "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                    "enter-to": "opacity-100 translate-y-0 sm:scale-100",
                    leave: "ease-in duration-200",
                    "leave-from": "opacity-100 translate-y-0 sm:scale-100",
                    "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  }, {
                    default: G(() => [
                      T(y(So), { class: "relative inline-block align-bottom bg-white rounded-xl text-left shadow-xl transform transition-all sm:align-middle sm:max-w-xl w-full" }, {
                        default: G(() => [
                          s("div", Xo, [
                            s("h3", Zo, S(e.modalTitle), 1),
                            s("div", er, [
                              s("span", {
                                role: "button",
                                class: "block",
                                onClick: o[1] || (o[1] = (r) => l.value = !1)
                              }, [
                                T(y(fl), { class: "w-5 stroke-sky-200 hover:stroke-mpao-orange transition-colors duration-150 ease-in-out" })
                              ])
                            ])
                          ]),
                          s("div", tr, [
                            ue(n.$slots, "content")
                          ])
                        ]),
                        _: 3
                      })
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
    ]));
  }
}), ar = { class: "text-sm font-medium text-slate-700 cursor-pointer select-none" }, nr = {
  name: "PoToggle"
}, As = /* @__PURE__ */ Object.assign(nr, {
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
    }
  },
  setup(e) {
    const a = w(e.modelValue);
    return (l, n) => (i(), K(y(Ao), {
      as: "div",
      class: "flex items-center"
    }, {
      default: G(() => [
        T(y(To), {
          modelValue: a.value,
          "onUpdate:modelValue": n[0] || (n[0] = (o) => a.value = o),
          onClick: n[1] || (n[1] = (o) => l.$emit("update:modelValue", !a.value)),
          class: W([a.value ? "bg-mpao-lightblue" : "bg-slate-200", "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-mpao-lightblue focus:ring-offset-2"])
        }, {
          default: G(() => [
            s("span", {
              "aria-hidden": "true",
              class: W([a.value ? "translate-x-5" : "translate-x-0", "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"])
            }, null, 2)
          ]),
          _: 1
        }, 8, ["modelValue", "class"]),
        T(y(Ro), {
          as: "span",
          class: "ml-3"
        }, {
          default: G(() => [
            s("span", ar, S(e.label), 1)
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), or = { class: "pt-1 space-y-1 border-r-2 border-slate-200 relative" }, rr = ["onClick"], sr = {
  name: "PoSectionMenu"
}, Ts = /* @__PURE__ */ Object.assign(sr, {
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
    return (t, a) => (i(), d("ul", or, [
      (i(!0), d(F, null, Y(e.menuItems, (l) => (i(), d("li", null, [
        s("span", {
          onClick: (n) => t.$emit("link-click", l.link),
          role: "button",
          class: W(["relative cursor-pointer -right-[0.15rem] py-1 border-r-2 hover:border-mpao-lightblue transition-colors duration-200 ease-in-out flex items-center space-x-2", { "border-mpao-lightblue text-sm text-mpao-lightblue": l.link == e.currPageRoute }, { "border-slate-200 text-sm text-slate-600": l.link !== e.currPageRoute }])
        }, [
          (i(), K(Ce(l.icon), { class: "w-4 h-4 stroke-current" })),
          s("span", null, S(l.label), 1)
        ], 10, rr)
      ]))), 256))
    ]));
  }
}), ir = { class: "relative flex items-start" }, ur = { class: "flex h-5 items-center" }, dr = ["name", "id", "checked", "placeholder", "disabled", "required", "aria-describedby"], cr = { class: "ml-3 text-sm" }, pr = ["for"], fr = ["id"], vr = { class: "sr-only" }, mr = ["id"], br = {
  name: "PoCheckbox"
}, Rs = /* @__PURE__ */ Object.assign(br, {
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
    }
  },
  setup(e) {
    return (t, a) => (i(), d("div", ir, [
      s("div", ur, [
        s("input", ye({
          name: `${e.id}-field`,
          id: e.id,
          checked: e.modelValue,
          placeholder: t.placeholder,
          disabled: t.disabled,
          required: t.required,
          "aria-describedby": `${e.id}-description`
        }, t.$attrs, {
          onInput: a[0] || (a[0] = (l) => t.$emit("update:modelValue", l.target.checked)),
          type: "checkbox",
          class: "h-4 w-4 rounded border-slate-300 text-mpao-lightblue focus:ring-mpao-lightblue"
        }), null, 16, dr)
      ]),
      s("div", cr, [
        s("label", {
          for: e.id,
          class: "font-medium text-slate-600 cursor-pointer select-none"
        }, S(e.label), 9, pr),
        e.message ? (i(), d("span", {
          key: 0,
          id: `${e.id}-description`,
          class: "text-slate-500 cursor-default"
        }, [
          s("span", vr, S(e.label), 1),
          xe(" " + S(e.message), 1)
        ], 8, fr)) : E("", !0)
      ]),
      e.errorMessage !== null ? (i(), d("p", {
        key: 0,
        class: "mt-2 text-sm text-red-600",
        id: `${e.id}-error`
      }, S(e.errorMessage), 9, mr)) : E("", !0)
    ]));
  }
}), hr = { class: "relative pt-5" }, gr = ["name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], yr = ["for"], xr = ["title"], wr = ["id"], $r = ["id"], kr = {
  name: "PoTextarea"
}, Ls = /* @__PURE__ */ Object.assign(kr, {
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
    }
  },
  setup(e) {
    return (t, a) => (i(), d("div", hr, [
      s("textarea", ye({
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
        onInput: a[0] || (a[0] = (l) => t.$emit("update:modelValue", l.target.value)),
        class: "mt-1 peer block w-full transition-colors duration-100 ease-in-out rounded-md border-slate-300 bg-white focus:border-mpao-lightblue focus:ring-0 invalid:border-red-400 invalid:focus:border-red-600 invalid:focus:ring-red-600 sm:text-sm disabled:bg-slate-50 disabled:border-slate-300 disabled:focus:border-slate-300 disabled:hover:border-slate-300 disabled:cursor-default"
      }), null, 16, gr),
      s("label", {
        for: e.id,
        class: "absolute top-0 text-sm font-medium text-slate-700 peer-focus:text-mpao-lightblue peer-invalid:text-red-500 peer-invalid:peer-focus:text-red-600 flex items-center space-x-1"
      }, [
        s("span", null, S(e.label), 1),
        e.info !== null ? (i(), d("abbr", {
          key: 0,
          title: e.info,
          class: "w-4 text-slate-500"
        }, [
          T(y(bt))
        ], 8, xr)) : E("", !0)
      ], 8, yr),
      e.message !== null ? (i(), d("p", {
        key: 0,
        class: "mt-2 text-sm text-slate-500",
        id: `${e.id}-description`
      }, S(e.message), 9, wr)) : E("", !0),
      e.errorMessage !== null ? (i(), d("p", {
        key: 1,
        class: "mt-2 text-sm text-red-600",
        id: `${e.id}-error`
      }, S(e.errorMessage), 9, $r)) : E("", !0)
    ]));
  }
}), Sr = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [l, n] of t)
    a[l] = n;
  return a;
}, _r = {
  name: "PoFooter"
}, Pr = /* @__PURE__ */ Jt('<div class="p-10 pb-5"><div class="flex space-x-2 mt-5 justify-end"><img class="opacity-30 hover:opacity-100 transition-opacity duration-200 ease-in-out h-10 mr-2" src="https://pension.gov.mv/asset/image/enlgish_website_logo.svg" alt="Pension Office logo"><img class="opacity-30 hover:opacity-100 transition-opacity duration-200 ease-in-out h-10" src="https://pension.gov.mv/asset/image/iso_logo.jpg" alt=""><img class="opacity-30 hover:opacity-100 transition-opacity duration-200 ease-in-out h-10" src="https://pension.gov.mv/asset/image/en-ccc-2020-issa.png" alt=""></div></div><div aria-live="assertive" class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 z-50"><div class="flex w-full flex-col items-center space-y-4 sm:items-end pt-[55px]" id="po-notifications-alert"></div></div>', 2), Or = [
  Pr
];
function Cr(e, t, a, l, n, o) {
  return i(), d("div", null, Or);
}
const js = /* @__PURE__ */ Sr(_r, [["render", Cr]]), Er = {
  key: 0,
  class: "flex items-start space-x-4 p-5 bg-red-100 rounded-md mt-5"
}, Ar = { class: "pt-1" }, Tr = { class: "text-base font-medium text-red-700" }, Rr = { class: "text-sm text-red-800 list-disc ml-5 mt-2" }, Lr = {
  key: 1,
  class: "flex items-start space-x-4 p-5 bg-green-100 rounded-md mt-5"
}, jr = { class: "pt-1" }, Br = { class: "text-base font-medium text-green-700" }, Dr = {
  name: "PoFormStatusMessage"
}, Bs = /* @__PURE__ */ Object.assign(Dr, {
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
    return (t, a) => e.isError ? (i(), d("div", Er, [
      T(y(ul), { class: "w-8 stroke-red-600" }),
      s("div", Ar, [
        s("span", Tr, S(e.message), 1),
        s("ul", Rr, [
          (i(!0), d(F, null, Y(e.errorList, (l) => (i(), d("li", null, S(l), 1))), 256))
        ])
      ])
    ])) : (i(), d("div", Lr, [
      T(y(rl), { class: "w-8 stroke-green-600" }),
      s("div", jr, [
        s("span", Br, S(e.message), 1)
      ])
    ]));
  }
}), Fr = {
  key: 0,
  class: "mt-1 flex space-x-3 flex-wrap"
}, Ir = { class: "flex flex-1" }, Nr = { class: "flex flex-col" }, Vr = {
  name: "PoRadioInput"
}, Ds = /* @__PURE__ */ Object.assign(Vr, {
  props: {
    /**
     * Model value
     */
    modelValue: {
      type: [String, Number],
      default: ""
    },
    /**
     * List of options for raido
     */
    options: {
      type: Array,
      default: null
    },
    /**
     * Pre selected value if any
     */
    preSelected: {
      type: Object,
      default: null
    },
    /**
     * Label text
     */
    label: {
      type: String,
      default: ""
    }
  },
  emits: ["selected", "unSelected"],
  setup(e, { emit: t }) {
    const l = w(e.preSelected);
    return le(l, () => {
      t("update:modelValue", l.value);
    }), (n, o) => (i(), K(y(Po), {
      modelValue: l.value,
      "onUpdate:modelValue": o[0] || (o[0] = (r) => l.value = r)
    }, {
      default: G(() => [
        T(y(pt), { class: "text-sm font-medium flex items-center space-x-1 text-slate-700" }, {
          default: G(() => [
            xe(S(e.label), 1)
          ]),
          _: 1
        }),
        e.options !== null ? (i(), d("div", Fr, [
          (i(!0), d(F, null, Y(e.options, (r) => (i(), K(y(Co), {
            as: "template",
            key: r.id,
            value: r
          }, {
            default: G(({ checked: u, active: c }) => [
              s("div", {
                class: W([u ? "border-transparent" : "border-gray-300", c ? "border-mpao-lightblue ring-1 ring-mpao-lightblue" : "", "mb-3 relative flex cursor-pointer rounded-lg border bg-white px-3 py-2 shadow-sm focus:outline-none"])
              }, [
                s("span", Ir, [
                  s("span", Nr, [
                    T(y(pt), {
                      as: "span",
                      class: "block text-sm font-medium text-gray-900"
                    }, {
                      default: G(() => [
                        xe(S(r.title), 1)
                      ]),
                      _: 2
                    }, 1024),
                    r.description ? (i(), K(y(Eo), {
                      key: 0,
                      as: "span",
                      class: "mt-1 flex items-center text-sm text-gray-500"
                    }, {
                      default: G(() => [
                        xe(S(r.description), 1)
                      ]),
                      _: 2
                    }, 1024)) : E("", !0)
                  ])
                ]),
                T(y(Rn), {
                  class: W([u ? "" : "invisible", "h-5 w-5 ml-2 text-mpao-lightblue"]),
                  "aria-hidden": "true"
                }, null, 8, ["class"]),
                s("span", {
                  class: W(["border", u ? "border-mpao-lightblue" : "border-transparent", "pointer-events-none absolute -inset-px rounded-lg"]),
                  "aria-hidden": "true"
                }, null, 2)
              ], 2)
            ]),
            _: 2
          }, 1032, ["value"]))), 128))
        ])) : E("", !0)
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), Mr = { class: "rounded-md bg-slate-200 overflow-hidden divide-y divide-slate-200 sm:divide-y-0 grid sm:grid-cols-1 lg:grid-cols-3 gap-px" }, Hr = { class: "bg-white relative group focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500" }, zr = { class: "block p-4 transition-colors duration-75 ease-linear" }, qr = { class: "flex items-start space-x-2" }, Ur = { class: "block text-2xl font-light text-slate-600" }, Gr = { class: "text-sm tracking-wide text-slate-500" }, Fs = {
  __name: "PoStatsBlock",
  props: {
    /**
     * Items
     */
    items: {
      type: Array,
      default: null
    }
  },
  setup(e) {
    return (t, a) => (i(), d("div", Mr, [
      (i(!0), d(F, null, Y(e.items, (l) => (i(), d("div", Hr, [
        s("span", zr, [
          s("div", qr, [
            s("div", null, [
              s("span", {
                class: W(["inline-flex p-2 rounded-md", l.bgColor, l.iconColor])
              }, [
                (i(), K(Ce(l.icon), { class: "w-4 h-4" }))
              ], 2)
            ]),
            s("div", null, [
              s("span", Ur, S(l.value), 1),
              s("h4", Gr, S(l.label), 1)
            ])
          ])
        ])
      ]))), 256))
    ]));
  }
}, Wr = {
  key: 0,
  class: "flex space-x-3 items-start"
}, Kr = { class: "flex items-center space-x-2" }, Yr = ["datetime"], Qr = { class: "text-sm font-medium text-slate-600" }, Jr = ["datetime"], Xr = { class: "flex" }, Zr = { class: "flex pt-3 flex-wrap max-w-sm" }, es = ["onClick"], ts = {
  key: 1,
  class: "w-full text-center"
}, ls = { class: "inline-block text-sm italic text-slate-500" }, as = /* @__PURE__ */ s("span", { class: "text-lg text-slate-300 px-3inline-block" }, "—", -1), ns = ["datetime"], os = {
  name: "PoChatLogItem"
}, Is = /* @__PURE__ */ Object.assign(os, {
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
    return (t, a) => (i(), d("li", {
      class: W(["flex px-5", { "justify-end items-end flex-col": e.item.type === "first" }])
    }, [
      e.item.type !== "message" ? (i(), d("div", Wr, [
        e.item.type !== "first" && e.item.avatar !== "" ? (i(), d("div", {
          key: 0,
          class: "shrink-0 w-8 h-8 rounded-full p-1 bg-contain bg-slate-100",
          style: Xt({ "background-image": `url(${e.item.avatar})` })
        }, null, 4)) : E("", !0),
        s("div", {
          class: W([{ "pt-1": e.item.type !== "first" }, { "flex justify-end items-end flex-col": e.item.type === "first" }])
        }, [
          s("span", Kr, [
            e.item.type === "first" ? (i(), d("time", {
              key: 0,
              datetime: e.item.time,
              class: "text-xs text-slate-400"
            }, S(e.item.time_human), 9, Yr)) : E("", !0),
            s("span", Qr, S(e.item.name), 1),
            e.item.type === "second" ? (i(), d("time", {
              key: 1,
              datetime: e.item.time,
              class: "text-xs text-slate-400"
            }, S(e.item.time_human), 9, Jr)) : E("", !0)
          ]),
          s("div", {
            class: W(["mt-2 space-y-1", { "flex justify-end items-end flex-col": e.item.type === "first" }])
          }, [
            ue(t.$slots, "message", {}, () => [
              (i(!0), d(F, null, Y(e.item.message, (l) => (i(), d("div", Xr, [
                s("p", {
                  class: W(["text-sm rounded-xl px-4 py-2", { "bg-slate-100 text-slate-600": e.item.type !== "first" }, { "bg-mpao-lightblue text-sky-50": e.item.type === "first" }])
                }, S(l), 3)
              ]))), 256))
            ]),
            s("div", Zr, [
              (i(!0), d(F, null, Y(e.item.actions, (l) => (i(), d("button", {
                onClick: (n) => t.$emit("button-click", l.label),
                class: "appearance-none border border-mpao-lightblue bg-white hover:bg-mpao-lightblue px-3 py-1 mb-2 mr-2 rounded-lg text-slate-500 hover:text-sky-100 transition-colors duration-150 ease-in-out text-sm ring-0 outline-none"
              }, S(l.label), 9, es))), 256))
            ])
          ], 2)
        ], 2)
      ])) : E("", !0),
      e.item.type === "message" ? (i(), d("div", ts, [
        (i(!0), d(F, null, Y(e.item.message, (l) => (i(), d("p", ls, [
          xe(S(l) + " ", 1),
          as,
          xe(),
          s("time", {
            datetime: e.item.time,
            class: "text-xs text-slate-400 inline-block"
          }, S(e.item.time_human), 9, ns)
        ]))), 256))
      ])) : E("", !0)
    ], 2));
  }
}), rs = {
  key: 0,
  class: "pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-mpao-lightblue shadow-lg ring-1 ring-black ring-opacity-5"
}, ss = { class: "p-4" }, is = { class: "flex items-start" }, us = { class: "flex-shrink-0" }, ds = { class: "ml-3 w-0 flex-1 pt-0.5" }, cs = { class: "text-sm font-medium text-sky-100" }, ps = { class: "mt-1 text-sm text-sky-300" }, fs = { class: "mt-3 flex space-x-4" }, vs = { class: "ml-4 flex flex-shrink-0" }, ms = /* @__PURE__ */ s("span", { class: "sr-only" }, "Close", -1), bs = {
  name: "PoNotification"
}, Ns = /* @__PURE__ */ Object.assign(bs, {
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
  setup(e) {
    const t = e, { show: a } = mt(t), l = w(!1);
    le(a, () => {
      l.value = !1, setTimeout(() => {
        l.value = !0;
      }, 100);
    });
    const n = w(!1);
    return le(l, () => {
      n.value = !1, setTimeout(() => {
        n.value = !0;
      }, 200);
    }), (o, r) => l.value ? (i(), K(vt, {
      key: 0,
      to: "#po-notifications-alert"
    }, [
      T(Zt, {
        "enter-active-class": "transform ease-out duration-300 transition",
        "enter-from-class": "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",
        "enter-to-class": "translate-y-0 opacity-100 sm:translate-x-0",
        "leave-active-class": "transition ease-in duration-100",
        "leave-from-class": "opacity-100",
        "leave-to-class": "opacity-0"
      }, {
        default: G(() => [
          n.value ? (i(), d("div", rs, [
            s("div", ss, [
              s("div", is, [
                s("div", us, [
                  ue(o.$slots, "icon")
                ]),
                s("div", ds, [
                  s("p", cs, S(e.label), 1),
                  s("p", ps, S(e.text), 1),
                  s("div", fs, [
                    s("button", {
                      onClick: r[0] || (r[0] = (u) => o.$emit("button-click", e.buttonLabel)),
                      type: "button",
                      class: "rounded-md bg-mpao-lightblue text-sm font-medium text-sky-100 hover:text-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:ring-offset-2"
                    }, S(e.buttonLabel), 1),
                    s("button", {
                      onClick: r[1] || (r[1] = (u) => l.value = !1),
                      type: "button",
                      class: "rounded-md bg-mpao-lightblue text-sm font-medium text-sky-300 hover:text-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:ring-offset-2"
                    }, "Dismiss")
                  ])
                ]),
                s("div", vs, [
                  s("button", {
                    type: "button",
                    onClick: r[2] || (r[2] = (u) => l.value = !1),
                    class: "inline-flex rounded-md bg-mpao-lightblue text-sky-500 hover:text-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:ring-offset-2"
                  }, [
                    ms,
                    T(y(Dn), {
                      class: "h-5 w-5",
                      "aria-hidden": "true"
                    })
                  ])
                ])
              ])
            ])
          ])) : E("", !0)
        ]),
        _: 3
      })
    ])) : E("", !0);
  }
});
export {
  xs as PoActionBar,
  Pl as PoAppIcon,
  zl as PoAppTray,
  Wo as PoButton,
  ws as PoCard,
  $s as PoCardSearch,
  Is as PoChatLogItem,
  Rs as PoCheckbox,
  _s as PoDescriptionList,
  js as PoFooter,
  Bs as PoFormStatusMessage,
  Ps as PoInputField,
  Os as PoInputFile,
  Es as PoModal,
  Ns as PoNotification,
  na as PoNotificationHub,
  ks as PoPageTitle,
  en as PoPagination,
  Sa as PoProfileSwitcher,
  Ds as PoRadioInput,
  Tl as PoSearchBar,
  Ts as PoSectionMenu,
  Cs as PoSelectField,
  ys as PoSidebarDrawer,
  Fs as PoStatsBlock,
  Ss as PoTable,
  Ls as PoTextarea,
  As as PoToggle,
  gs as PoTopBar
};
