import { openBlock as i, createElementBlock as d, createElementVNode as r, createVNode as A, unref as h, withCtx as F, renderSlot as se, createBlock as K, createCommentVNode as C, toDisplayString as x, ref as w, onMounted as z, onUnmounted as oe, withDirectives as Yt, isRef as Qt, vModelText as Jt, Fragment as I, renderList as Y, normalizeClass as G, resolveDynamicComponent as Ce, normalizeProps as st, guardReactiveProps as rt, mergeProps as xe, cloneVNode as Xt, h as q, inject as ee, provide as le, watchEffect as J, computed as g, defineComponent as V, toRaw as D, watch as Z, nextTick as pe, Teleport as bt, reactive as Zt, createTextVNode as ve, toRefs as Ye, createStaticVNode as el, normalizeStyle as tl, Transition as ll } from "vue";
function al(e, t) {
  return i(), d("svg", {
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
function nl(e, t) {
  return i(), d("svg", {
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
function ol(e, t) {
  return i(), d("svg", {
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
function sl(e, t) {
  return i(), d("svg", {
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
      d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
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
    r("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
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
    r("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
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
    r("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
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
    r("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 19.5L8.25 12l7.5-7.5"
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
    r("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 4.5l7.5 7.5-7.5 7.5"
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
    r("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
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
    r("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
    })
  ]);
}
function Qe(e, t) {
  return i(), d("svg", {
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
function vl(e, t) {
  return i(), d("svg", {
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
function ml(e, t) {
  return i(), d("svg", {
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
function it(e, t) {
  return i(), d("svg", {
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
function ht(e, t) {
  return i(), d("svg", {
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
const bl = { class: "bg-mpao-blue fixed top-0 w-full z-50 flex" }, hl = { class: "shrink-0 px-3 pt-3" }, gl = {
  for: "sidebar-drawer-toggle",
  role: "button",
  class: "genie-effect flex items-center justify-center bg-[#2e5266] rounded-full w-10 h-10 select-none text-slate-100"
}, yl = { class: "mx-auto max-w-full px-4 grow sm:px-4" }, xl = { class: "flex h-16 items-center justify-between space-x-12" }, wl = { class: "flex items-center space-x-3" }, $l = {
  key: 0,
  class: "block w-6 text-slate-100 sm:hidden",
  role: "button"
}, kl = {
  name: "PoTopBar"
}, Lr = /* @__PURE__ */ Object.assign(kl, {
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
    return (l, n) => (i(), d("nav", bl, [
      r("div", hl, [
        r("label", gl, [
          A(h(sl), { class: "w-6 fill-current" })
        ])
      ]),
      r("div", yl, [
        r("div", xl, [
          A(h(Cl), { "app-name": e.appName }, {
            icon: F(() => [
              se(l.$slots, "appIcon")
            ]),
            _: 3
          }, 8, ["app-name"]),
          e.hasSearch ? (i(), K(h(jl), {
            key: 0,
            onQuery: a
          })) : C("", !0),
          r("div", wl, [
            e.hasSearch ? (i(), d("span", $l, [
              A(h(Qe), { class: "stroke-current" })
            ])) : C("", !0),
            A(h(sa), {
              notifications: e.notifications,
              "has-new-notifications": e.hasNewNotifications
            }, null, 8, ["notifications", "has-new-notifications"]),
            A(h(Ul), { "app-list": e.appList }, null, 8, ["app-list"]),
            A(h(Pa), { "profile-switcher-data": e.profileSwitcherData }, null, 8, ["profile-switcher-data"])
          ])
        ])
      ])
    ]));
  }
}), _l = { class: "flex items-center space-x-3" }, Sl = { class: "w-7 text-slate-100" }, Pl = { class: "font-light text-lg text-slate-100" }, Ol = {
  name: "PoAppIcon"
}, Cl = /* @__PURE__ */ Object.assign(Ol, {
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
    return (t, a) => (i(), d("div", _l, [
      r("div", Sl, [
        se(t.$slots, "icon")
      ]),
      r("span", Pl, x(e.appName), 1)
    ]));
  }
}), El = { class: "flex-grow hidden relative sm:block" }, Al = ["placeholder"], Tl = { class: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none transition-all ease-linear duration-100 text-slate-400 origin-center peer-hover/search:scale-105 peer-focus/search:text-slate-100" }, Rl = {
  name: "PoSearchBar"
}, jl = /* @__PURE__ */ Object.assign(Rl, {
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
    return z(() => document.addEventListener("keydown", l)), oe(() => {
      document.removeEventListener("keydown", l);
    }), (n, o) => (i(), d("div", El, [
      Yt(r("input", {
        "onUpdate:modelValue": o[0] || (o[0] = (s) => Qt(a) ? a.value = s : a = s),
        type: "text",
        id: "main-search",
        placeholder: e.placeholder,
        class: "peer/search bg-transparent border border-transparent text-slate-100 text-sm rounded-md ring-0 outline-none focus:outline-none focus:ring-0 transition-colors ease-linear duration-100 block w-full pl-10 p-2.5 appearance-none focus:border-slate-400 hover:border-slate-600"
      }, null, 8, Al), [
        [Jt, h(a)]
      ]),
      r("div", Tl, [
        A(h(Qe), { class: "w-5 h-5 stroke-current" })
      ])
    ]));
  }
}), Ll = { class: "relative" }, Bl = {
  for: "apps-menu-toggle",
  class: "block w-6 text-slate-100 genie-effect z-50",
  role: "button"
}, Dl = /* @__PURE__ */ r("input", {
  type: "checkbox",
  name: "",
  class: "hidden peer/apps",
  role: "none",
  id: "apps-menu-toggle"
}, null, -1), Fl = { class: "invisible z-10 absolute -left-[19rem] top-[35px] opacity-0 bg-white shadow-lg rounded-md w-96 p-4 border border-slate-200 pt-5 space-y-5 transition-all duration-100 ease-linear sm:left-auto sm:right-0 peer-checked/apps:visible peer-checked/apps:top-[45px] peer-checked/apps:opacity-100" }, Il = {
  key: 0,
  class: "text-sm font-normal text-slate-400 select-none"
}, Nl = { class: "grid grid-cols-3 gap-3 py-3" }, Vl = ["href"], Ml = { class: "block w-10 rounded-md transition-shadow duration-100 ease-in-out shadow-md group-hover:shadow-xl overflow-hidden" }, zl = ["src", "alt"], Hl = { class: "text-slate-600 font-normal text-sm" }, ql = {
  name: "PoAppTray"
}, Ul = /* @__PURE__ */ Object.assign(ql, {
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
    return (t, a) => (i(), d("div", Ll, [
      r("label", Bl, [
        A(h(ml))
      ]),
      Dl,
      r("div", Fl, [
        (i(!0), d(I, null, Y(e.appList, (l) => (i(), d("div", null, [
          l.groupName.length > 0 ? (i(), d("span", Il, x(l.groupName), 1)) : C("", !0),
          r("ul", Nl, [
            (i(!0), d(I, null, Y(l.apps, (n) => (i(), d("li", null, [
              r("a", {
                href: n.url,
                class: "flex flex-col group space-y-3 justify-center items-center py-2 genie-effect"
              }, [
                r("span", Ml, [
                  r("img", {
                    src: n.icon,
                    alt: `${n.name} icon`
                  }, null, 8, zl)
                ]),
                r("span", Hl, x(n.name), 1)
              ], 8, Vl)
            ]))), 256))
          ])
        ]))), 256))
      ])
    ]));
  }
}), Gl = { class: "relative" }, Wl = {
  for: "notifications-menu-toggle",
  class: "block w-6 text-slate-100 genie-effect relative z-50",
  role: "button"
}, Kl = {
  key: 0,
  class: "absolute right-0 w-3 h-3 bg-mpao-orange rounded-full border-2 border-mpao-blue"
}, Yl = /* @__PURE__ */ r("input", {
  type: "checkbox",
  name: "",
  class: "hidden peer/apps",
  role: "none",
  id: "notifications-menu-toggle"
}, null, -1), Ql = { class: "invisible z-10 absolute -left-[19rem] top-[35px] opacity-0 bg-white shadow-lg rounded-md w-96 p-4 border border-slate-200 pt-5 transition-all duration-100 ease-linear sm:left-auto sm:right-0 peer-checked/apps:visible peer-checked/apps:top-[45px] peer-checked/apps:opacity-100" }, Jl = { class: "space-y-2 p-2" }, Xl = { class: "space-y-2 p-2" }, Zl = { class: "flex items-center justify-between" }, ea = { class: "text-sm font-semibold text-slate-700 grow flex space-x-2 items-center" }, ta = {
  key: 0,
  class: "w-2 h-2 rounded-full shrink-0 bg-mpao-orange"
}, la = { class: "grow" }, aa = { class: "text-xs font-normal text-slate-400 shrink-0" }, na = { class: "block text-sm text-slate-500 pb-3 border-b border-slate-200" }, oa = {
  name: "PoNotificationHub"
}, sa = /* @__PURE__ */ Object.assign(oa, {
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
    return (t, a) => (i(), d("div", Gl, [
      r("label", Wl, [
        e.hasNewNotifications ? (i(), d("span", Kl)) : C("", !0),
        A(h(rl), { class: "stroke-current" })
      ]),
      Yl,
      r("div", Ql, [
        r("ul", Jl, [
          (i(!0), d(I, null, Y(e.notifications, (l) => (i(), d("li", Xl, [
            r("span", Zl, [
              r("p", ea, [
                l.seen ? C("", !0) : (i(), d("span", ta)),
                r("span", la, x(l.name), 1)
              ]),
              r("span", aa, x(l.time), 1)
            ]),
            r("span", na, x(l.text), 1)
          ]))), 256))
        ])
      ])
    ]));
  }
}), ra = { class: "relative" }, ia = {
  for: "profile-toggle",
  class: "select-none rounded-full w-10 h-10 bg-[#2e5266] flex items-center justify-center genie-effect z-50",
  role: "button"
}, ua = { class: "text-xs text-white font-semibold" }, da = /* @__PURE__ */ r("input", {
  type: "checkbox",
  name: "",
  class: "hidden peer/profile",
  role: "none",
  id: "profile-toggle"
}, null, -1), ca = { class: "invisible space-y-1 z-10 absolute right-0 top-[45px] opacity-0 bg-white shadow-lg rounded-md w-96 p-4 border border-slate-200 pt-5 transition-all duration-100 ease-linear peer-checked/profile:visible peer-checked/profile:top-[54px] peer-checked/profile:opacity-100" }, pa = ["href"], fa = { class: "w-5" }, va = { class: "flex flex-col space-y-1" }, ma = { class: "text-sm font-normal" }, ba = {
  key: 0,
  class: "text-xs text-slate-400"
}, ha = /* @__PURE__ */ r("hr", { class: "border-slate-200" }, null, -1), ga = { class: "md:grid grid-cols-2" }, ya = ["href"], xa = { class: "w-5" }, wa = /* @__PURE__ */ r("span", { class: "text-sm font-normal" }, "Profile", -1), $a = {
  href: "#",
  class: "flex items-center space-x-3 p-3 text-slate-600 rounded-lg bg-white hover:bg-slate-100",
  role: "button"
}, ka = { class: "w-5" }, _a = /* @__PURE__ */ r("span", { class: "text-sm font-normal" }, "Logout", -1), Sa = {
  name: "PoProfileSwitcher"
}, Pa = /* @__PURE__ */ Object.assign(Sa, {
  props: {
    profileSwitcherData: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    return (t, a) => (i(), d("div", ra, [
      r("label", ia, [
        r("span", ua, x(e.profileSwitcherData.currProfileLabel), 1)
      ]),
      da,
      r("div", ca, [
        (i(!0), d(I, null, Y(e.profileSwitcherData.profiles, (l) => (i(), d("a", {
          href: l.url,
          class: "flex items-center space-x-3 p-3 text-slate-600 rounded-lg bg-white hover:bg-slate-100",
          role: "button"
        }, [
          r("span", fa, [
            l.isPersonal ? (i(), K(h(it), {
              key: 0,
              class: G(["stroke-current", { "stroke-mpao-orange": l.current }])
            }, null, 8, ["class"])) : C("", !0),
            l.isPersonal ? C("", !0) : (i(), K(h(il), {
              key: 1,
              class: G(["stroke-current", { "stroke-mpao-orange": l.current }])
            }, null, 8, ["class"]))
          ]),
          r("span", va, [
            r("span", ma, x(l.name), 1),
            l.identifier.length !== 0 ? (i(), d("span", ba, x(l.identifier), 1)) : C("", !0)
          ])
        ], 8, pa))), 256)),
        ha,
        r("div", ga, [
          r("a", {
            href: e.profileSwitcherData.currentProfileUrl,
            class: "flex items-center space-x-3 p-3 text-slate-600 rounded-lg bg-white hover:bg-slate-100",
            role: "button"
          }, [
            r("span", xa, [
              A(h(it), { class: "stroke-current" })
            ]),
            wa
          ], 8, ya),
          r("a", $a, [
            r("span", ka, [
              A(h(nl), { class: "stroke-current" })
            ]),
            _a
          ])
        ])
      ])
    ]));
  }
}), Oa = /* @__PURE__ */ r("input", {
  type: "checkbox",
  name: "",
  class: "hidden shell-sidebar--toggle",
  role: "none",
  id: "sidebar-drawer-toggle",
  checked: "",
  "aria-checked": "true"
}, null, -1), Ca = { class: "shell-sidebar" }, Ea = { class: "shell-sidebar--section" }, Aa = { class: "shell-sidebar--menu" }, Ta = ["onClick", "title"], Ra = { class: "shell-sidebar--icon" }, ja = { class: "shell-sidebar--label" }, La = {
  name: "PoSidebarDrawer"
}, Br = /* @__PURE__ */ Object.assign(La, {
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
    return (t, a) => (i(), d(I, null, [
      Oa,
      r("aside", Ca, [
        (i(!0), d(I, null, Y(e.content, (l) => (i(), d("div", null, [
          r("span", Ea, x(l.groupName), 1),
          r("ul", Aa, [
            (i(!0), d(I, null, Y(l.items, (n) => (i(), d("li", null, [
              r("button", {
                onClick: (o) => t.$emit("button-click", n.url),
                class: G(["shell-sidebar--item", { active: n.url == e.currRoute }]),
                title: `Go to ${n.label}`
              }, [
                r("span", Ra, [
                  (i(), K(Ce(n.icon), { class: "stroke-current w-4 h-4" }))
                ]),
                r("span", ja, x(n.label), 1)
              ], 10, Ta)
            ]))), 256))
          ])
        ]))), 256))
      ])
    ], 64));
  }
}), Ba = { class: "shell-content--action-bar" }, Da = { class: "action-bar__nav" }, Fa = ["onClick"], Ia = { class: "action-bar__nav_label" }, Na = {
  key: 0,
  class: "shrink-0 flex space-x-1"
}, Va = {
  name: "PoActionBar"
}, Dr = /* @__PURE__ */ Object.assign(Va, {
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
    return (t, a) => (i(), d("section", Ba, [
      r("nav", Da, [
        (i(!0), d(I, null, Y(e.items, (l) => (i(), d("span", {
          onClick: (n) => t.$emit("button-click", l.label),
          class: "action-bar__nav_link"
        }, [
          (i(), K(Ce(l.icon), { class: "stroke-current w-5 h-5" })),
          r("span", Ia, x(l.label), 1)
        ], 8, Fa))), 256))
      ]),
      e.showBackButton ? (i(), d("nav", Na, [
        r("span", {
          onClick: a[0] || (a[0] = (l) => t.$emit("button-click", "back")),
          class: "action-bar__nav_link"
        }, [
          (i(), K(Ce(h(ol)), { class: "stroke-current w-5 h-5" }))
        ])
      ])) : C("", !0)
    ]));
  }
}), Ma = { class: "shadow-md rounded-xl bg-white" }, za = {
  key: 0,
  class: "text-base font-medium text-slate-600"
}, Ha = {
  name: "PoCard"
}, Fr = /* @__PURE__ */ Object.assign(Ha, {
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
    return (t, a) => (i(), d("div", Ma, [
      e.title.length > 0 ? (i(), d("h3", za, x(e.title), 1)) : C("", !0),
      se(t.$slots, "content")
    ]));
  }
}), qa = { class: "py-3 px-5 border-b border-slate-200" }, Ua = {
  class: "flex w-full md:ml-0",
  action: "#",
  method: "GET"
}, Ga = {
  for: "search-field",
  class: "sr-only"
}, Wa = { class: "relative w-full text-slate-400 focus-within:text-mpao-lightblue transition-colors duration-100 ease-in-out" }, Ka = { class: "pointer-events-none absolute inset-y-0 left-0 flex items-center" }, Ya = ["placeholder", "value"], Qa = {
  name: "PoCardSearch"
}, Ir = /* @__PURE__ */ Object.assign(Qa, {
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
    return (t, a) => (i(), d("div", qa, [
      r("form", Ua, [
        r("label", Ga, x(e.placeholder), 1),
        r("div", Wa, [
          r("div", Ka, [
            A(h(Qe), { class: "h-5 w-5 flex-shrink-0" })
          ]),
          r("input", {
            name: "search-field",
            id: "desktop-search-field",
            placeholder: e.placeholder,
            value: e.modelValue,
            onInput: a[0] || (a[0] = (l) => t.$emit("update:modelValue", l.target.value)),
            class: "h-full w-full border-transparent py-2 pl-8 pr-3 text-sm text-slate-700 placeholder-slate-500 focus:border-transparent focus:placeholder-slate-400 focus:outline-none focus:ring-0",
            type: "search"
          }, null, 40, Ya)
        ])
      ])
    ]));
  }
}), Ja = {
  key: 0,
  class: "flex items-center"
}, Xa = { class: "text-xs font-normal text-slate-500 pr-2" }, Za = ["href"], en = ["href"], tn = {
  name: "PoPagination"
}, ln = /* @__PURE__ */ Object.assign(tn, {
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
    return (t, a) => e.pagination !== null ? (i(), d("div", Ja, [
      r("span", Xa, x(e.pagination.label), 1),
      e.pagination.nextLink !== null ? (i(), d("a", {
        key: 0,
        href: e.pagination.nextLink,
        title: "Previous",
        onClick: a[0] || (a[0] = (l) => t.$emit("button-click", "prev")),
        class: "text-slate-600 p-2 rounded-md hover:bg-slate-200 hover:text-mpao-blue transition-colors duration-75 ease-in-out"
      }, [
        A(h(dl), { class: "w-4 stroke-current" })
      ], 8, Za)) : C("", !0),
      e.pagination.prevLink !== null ? (i(), d("a", {
        key: 1,
        href: e.pagination.prevLink,
        title: "Next",
        onClick: a[1] || (a[1] = (l) => t.$emit("button-click", "next")),
        class: "text-slate-600 p-2 rounded-md hover:bg-slate-200 hover:text-mpao-blue transition-colors duration-75 ease-in-out"
      }, [
        A(h(cl), { class: "w-4 stroke-current" })
      ], 8, en)) : C("", !0)
    ])) : C("", !0);
  }
}), an = { class: "flex items-center space-x-1" }, nn = { class: "text-xl font-semibold text-slate-800 grow" }, on = {
  key: 2,
  class: "border-l border-slate-400 h-3 w-3 ml-1"
}, sn = {
  name: "PoPageTitle"
}, Nr = /* @__PURE__ */ Object.assign(sn, {
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
    return (a, l) => (i(), d("div", an, [
      r("h1", nn, x(e.label), 1),
      e.showFilter ? (i(), d("button", {
        key: 0,
        title: "Filter",
        onClick: l[0] || (l[0] = (n) => {
          a.$emit("button-click", "filter"), t.value = !t.value;
        }),
        class: G([" p-2 rounded-md hover:bg-slate-200 transition-colors duration-75 ease-in-out", { "text-mpao-orange hover:text-mpao-orange": t.value }, { "text-slate-600 hover:text-mpao-blue": !t.value }])
      }, [
        A(h(fl), { class: "w-4 stroke-current" })
      ], 2)) : C("", !0),
      e.showDownload ? (i(), d("button", {
        key: 1,
        title: "Download",
        onClick: l[1] || (l[1] = (n) => a.$emit("button-click", "download")),
        class: "text-slate-600 p-2 rounded-md hover:bg-slate-200 hover:text-mpao-blue transition-colors duration-75 ease-in-out"
      }, [
        A(h(al), { class: "w-4 stroke-current" })
      ])) : C("", !0),
      e.showFilter && e.showPagination || e.showDownload && e.showPagination ? (i(), d("span", on, " ")) : C("", !0),
      e.showPagination ? (i(), K(ln, {
        key: 3,
        pagination: e.pagination
      }, null, 8, ["pagination"])) : C("", !0)
    ]));
  }
}), rn = { class: "table-responsive w-full" }, un = { key: 1 }, dn = ["colspan"], cn = { class: "py-10 block normal-case" }, pn = {
  name: "PoTable"
}, Vr = /* @__PURE__ */ Object.assign(pn, {
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
    return (t, a) => (i(), d("table", rn, [
      r("thead", null, [
        r("tr", null, [
          (i(!0), d(I, null, Y(e.thead, (l) => (i(), d("th", null, [
            se(t.$slots, "th", st(rt(l)))
          ]))), 256))
        ])
      ]),
      r("tbody", null, [
        e.tbody !== null || e.tbody !== null && e.tbody.length !== 0 ? (i(!0), d(I, { key: 0 }, Y(e.tbody, (l) => (i(), d("tr", null, [
          se(t.$slots, "td", st(rt(l)))
        ]))), 256)) : C("", !0),
        e.tbody == null || e.tbody !== null && e.tbody.length == 0 ? (i(), d("tr", un, [
          r("td", {
            colspan: e.thead.length + 1,
            class: "text-center"
          }, [
            r("span", cn, x(e.emptyMessage), 1)
          ], 8, dn)
        ])) : C("", !0)
      ])
    ]));
  }
}), fn = { class: "" }, vn = { class: "grow" }, mn = ["onClick"], bn = {
  name: "PoDescriptionList"
}, Mr = /* @__PURE__ */ Object.assign(bn, {
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
      class: G(["po-description-list", { "divide-y divide-slate-200": !e.striped }, { striped: e.striped }])
    }, [
      se(t.$slots, "content", {}, () => [
        (i(!0), d(I, null, Y(e.items, (l) => (i(), d("div", null, [
          r("dt", null, x(l.title), 1),
          r("dd", fn, [
            r("span", vn, x(l.description), 1),
            l.action !== void 0 ? (i(), d("span", {
              key: 0,
              class: "shrink-0 text-mpao-lightblue hover:text-mpao-blue transition-colors duration-100 ease-in-out px-2 cursor-pointer",
              onClick: (n) => t.$emit("button-click", l.action)
            }, x(l.action), 9, mn)) : C("", !0)
          ])
        ]))), 256))
      ])
    ], 2));
  }
});
function hn(e, t) {
  return i(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "fill-rule": "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      "clip-rule": "evenodd"
    })
  ]);
}
function gt(e, t) {
  return i(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "fill-rule": "evenodd",
      d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z",
      "clip-rule": "evenodd"
    })
  ]);
}
const gn = { class: "relative pt-5" }, yn = ["type", "name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], xn = ["for"], wn = ["title"], $n = ["id"], kn = ["id"], _n = {
  name: "PoInputField"
}, zr = /* @__PURE__ */ Object.assign(_n, {
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
    return (t, a) => (i(), d("div", gn, [
      r("input", xe({
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
      }), null, 16, yn),
      r("label", {
        for: e.id,
        class: G(["absolute top-0 text-sm font-medium flex items-center space-x-1", { "text-red-500 peer-focus:text-red-600": e.hasError }, { "text-slate-700 peer-focus:text-mpao-lightblue": !e.hasError }])
      }, [
        r("span", null, x(e.label), 1),
        e.info !== null ? (i(), d("abbr", {
          key: 0,
          title: e.info,
          class: "w-4 text-slate-500"
        }, [
          A(h(gt), { class: "fill-current" })
        ], 8, wn)) : C("", !0)
      ], 10, xn),
      e.message !== null ? (i(), d("p", {
        key: 0,
        class: "mt-2 text-sm text-slate-500",
        id: `${e.id}-description`
      }, x(e.message), 9, $n)) : C("", !0),
      e.hasError && e.errorMessage !== null ? (i(), d("p", {
        key: 1,
        class: "mt-2 text-sm text-red-600 flex items-center space-x-1",
        id: `${e.id}-error`
      }, [
        A(h(hn), { class: "fill-current w-4" }),
        r("span", null, x(e.errorMessage), 1)
      ], 8, kn)) : C("", !0)
    ]));
  }
}), Sn = { class: "relative pt-5" }, Pn = { class: "text-sm font-medium text-slate-700 peer-focus:text-mpao-lightblue peer-invalid:text-red-500 peer-invalid:peer-focus:text-red-600 flex items-center space-x-1" }, On = ["name", "id", "value"], Cn = ["for"], En = { class: "flex items-center space-x-1" }, An = /* @__PURE__ */ r("span", { class: "text-sm" }, "Choose file", -1), Tn = ["id"], Rn = ["id"], jn = {
  name: "PoInputFile"
}, Hr = /* @__PURE__ */ Object.assign(jn, {
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
    return (t, a) => (i(), d("div", Sn, [
      r("span", Pn, x(e.label), 1),
      r("input", {
        name: `${e.id}-upload`,
        id: `${e.id}-fileupload`,
        value: e.modelValue,
        type: "file",
        onInput: a[0] || (a[0] = (l) => t.$emit("update:modelValue", l.target.value)),
        class: "sr-only peer"
      }, null, 40, On),
      r("label", {
        for: `${e.id}-fileupload`,
        class: "mt-1 block w-full border cursor-pointer rounded-md border-slate-300 bg-white peer-focus:border-mpao-lightblue invalid:border-red-400 invalid:focus:border-red-600 invalid:focus:ring-red-600 sm:text-sm p-2"
      }, [
        r("div", En, [
          A(h(vl), { class: "w-4 stroke-slate-500" }),
          An
        ])
      ], 8, Cn),
      e.message !== null ? (i(), d("p", {
        key: 0,
        class: "mt-2 text-sm text-slate-500",
        id: `${e.id}-description`
      }, x(e.message), 9, Tn)) : C("", !0),
      e.errorMessage !== null ? (i(), d("p", {
        key: 1,
        class: "mt-2 text-sm text-red-600",
        id: `${e.id}-error`
      }, x(e.errorMessage), 9, Rn)) : C("", !0)
    ]));
  }
});
function Ln(e, t) {
  return i(), d("svg", {
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
function Bn(e, t) {
  return i(), d("svg", {
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
function Dn(e, t) {
  return i(), d("svg", {
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
function Fn(e, t) {
  return i(), d("svg", {
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
function In(e, t) {
  return i(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
  ]);
}
function U(e, t, ...a) {
  if (e in t) {
    let n = t[e];
    return typeof n == "function" ? n(...a) : n;
  }
  let l = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((n) => `"${n}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(l, U), l;
}
var me = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(me || {}), fe = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(fe || {});
function M({ visible: e = !0, features: t = 0, ourProps: a, theirProps: l, ...n }) {
  var o;
  let s = Nn(l, a), u = Object.assign(n, { props: s });
  if (e || t & 2 && s.static)
    return Me(u);
  if (t & 1) {
    let c = (o = s.unmount) == null || o ? 0 : 1;
    return U(c, { [0]() {
      return null;
    }, [1]() {
      return Me({ ...n, props: { ...s, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Me(u);
}
function Me({ props: e, attrs: t, slots: a, slot: l, name: n }) {
  var o;
  let { as: s, ...u } = _e(e, ["unmount", "static"]), c = (o = a.default) == null ? void 0 : o.call(a, l), f = {};
  if (l) {
    let m = !1, b = [];
    for (let [y, k] of Object.entries(l))
      typeof k == "boolean" && (m = !0), k === !0 && b.push(y);
    m && (f["data-headlessui-state"] = b.join(" "));
  }
  if (s === "template") {
    if (c = yt(c ?? []), Object.keys(u).length > 0 || Object.keys(t).length > 0) {
      let [m, ...b] = c ?? [];
      if (!Vn(m) || b.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${n} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(u).concat(Object.keys(t)).sort((y, k) => y.localeCompare(k)).map((y) => `  - ${y}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((y) => `  - ${y}`).join(`
`)].join(`
`));
      return Xt(m, Object.assign({}, u, f));
    }
    return Array.isArray(c) && c.length === 1 ? c[0] : c;
  }
  return q(s, Object.assign({}, u, f), { default: () => c });
}
function yt(e) {
  return e.flatMap((t) => t.type === I ? yt(t.children) : [t]);
}
function Nn(...e) {
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
      let s = a[l];
      for (let u of s) {
        if (n instanceof Event && n.defaultPrevented)
          return;
        u(n, ...o);
      }
    } });
  return t;
}
function Je(e) {
  let t = Object.assign({}, e);
  for (let a in t)
    t[a] === void 0 && delete t[a];
  return t;
}
function _e(e, t = []) {
  let a = Object.assign({}, e);
  for (let l of t)
    l in a && delete a[l];
  return a;
}
function Vn(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Mn = 0;
function zn() {
  return ++Mn;
}
function X() {
  return zn();
}
var N = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(N || {});
function Hn(e) {
  throw new Error("Unexpected object: " + e);
}
var Q = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(Q || {});
function qn(e, t) {
  let a = t.resolveItems();
  if (a.length <= 0)
    return null;
  let l = t.resolveActiveIndex(), n = l ?? -1, o = (() => {
    switch (e.focus) {
      case 0:
        return a.findIndex((s) => !t.resolveDisabled(s));
      case 1: {
        let s = a.slice().reverse().findIndex((u, c, f) => n !== -1 && f.length - c - 1 >= n ? !1 : !t.resolveDisabled(u));
        return s === -1 ? s : a.length - 1 - s;
      }
      case 2:
        return a.findIndex((s, u) => u <= n ? !1 : !t.resolveDisabled(s));
      case 3: {
        let s = a.slice().reverse().findIndex((u) => !t.resolveDisabled(u));
        return s === -1 ? s : a.length - 1 - s;
      }
      case 4:
        return a.findIndex((s) => t.resolveId(s) === e.id);
      case 5:
        return null;
      default:
        Hn(e);
    }
  })();
  return o === -1 ? l : o;
}
function L(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let xt = Symbol("Context");
var ue = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ue || {});
function Un() {
  return Le() !== null;
}
function Le() {
  return ee(xt, null);
}
function wt(e) {
  le(xt, e);
}
function ut(e, t) {
  if (e)
    return e;
  let a = t ?? "button";
  if (typeof a == "string" && a.toLowerCase() === "button")
    return "button";
}
function $t(e, t) {
  let a = w(ut(e.value.type, e.value.as));
  return z(() => {
    a.value = ut(e.value.type, e.value.as);
  }), J(() => {
    var l;
    a.value || !L(t) || L(t) instanceof HTMLButtonElement && !((l = L(t)) != null && l.hasAttribute("type")) && (a.value = "button");
  }), a;
}
const Be = typeof window > "u" || typeof document > "u";
function ie(e) {
  if (Be)
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
function kt({ container: e, accept: t, walk: a, enabled: l }) {
  J(() => {
    let n = e.value;
    if (!n || l !== void 0 && !l.value)
      return;
    let o = ie(e);
    if (!o)
      return;
    let s = Object.assign((c) => t(c), { acceptNode: t }), u = o.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, s, !1);
    for (; u.nextNode(); )
      a(u.currentNode);
  });
}
let qe = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var ne = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ne || {}), Re = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Re || {}), Gn = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Gn || {});
function Wn(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(qe)).sort((t, a) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (a.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var _t = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(_t || {});
function Kn(e, t = 0) {
  var a;
  return e === ((a = ie(e)) == null ? void 0 : a.body) ? !1 : U(t, { [0]() {
    return e.matches(qe);
  }, [1]() {
    let l = e;
    for (; l !== null; ) {
      if (l.matches(qe))
        return !0;
      l = l.parentElement;
    }
    return !1;
  } });
}
function we(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Yn = ["textarea", "input"].join(",");
function Qn(e) {
  var t, a;
  return (a = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Yn)) != null ? a : !1;
}
function Xe(e, t = (a) => a) {
  return e.slice().sort((a, l) => {
    let n = t(a), o = t(l);
    if (n === null || o === null)
      return 0;
    let s = n.compareDocumentPosition(o);
    return s & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : s & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function $e(e, t, { sorted: a = !0, relativeTo: l = null, skipElements: n = [] } = {}) {
  var o;
  let s = (o = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? o : document, u = Array.isArray(e) ? a ? Xe(e) : e : Wn(e);
  n.length > 0 && (u = u.filter((v) => !n.includes(v))), l = l ?? s.activeElement;
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
  })(), m = t & 32 ? { preventScroll: !0 } : {}, b = 0, y = u.length, k;
  do {
    if (b >= y || b + y <= 0)
      return 0;
    let v = f + b;
    if (t & 16)
      v = (v + y) % y;
    else {
      if (v < 0)
        return 3;
      if (v >= y)
        return 1;
    }
    k = u[v], k == null || k.focus(m), b += c;
  } while (k !== s.activeElement);
  return t & 6 && Qn(k) && k.select(), k.hasAttribute("tabindex") || k.setAttribute("tabindex", "0"), 2;
}
function ze(e, t, a) {
  Be || J((l) => {
    document.addEventListener(e, t, a), l(() => document.removeEventListener(e, t, a));
  });
}
function St(e, t, a = g(() => !0)) {
  function l(o, s) {
    if (!a.value || o.defaultPrevented)
      return;
    let u = s(o);
    if (u === null || !u.getRootNode().contains(u))
      return;
    let c = function f(m) {
      return typeof m == "function" ? f(m()) : Array.isArray(m) || m instanceof Set ? m : [m];
    }(e);
    for (let f of c) {
      if (f === null)
        continue;
      let m = f instanceof HTMLElement ? f : L(f);
      if (m != null && m.contains(u) || o.composed && o.composedPath().includes(m))
        return;
    }
    return !Kn(u, _t.Loose) && u.tabIndex !== -1 && o.preventDefault(), t(o, u);
  }
  let n = w(null);
  ze("mousedown", (o) => {
    var s, u;
    a.value && (n.value = ((u = (s = o.composedPath) == null ? void 0 : s.call(o)) == null ? void 0 : u[0]) || o.target);
  }, !0), ze("click", (o) => {
    !n.value || (l(o, () => n.value), n.value = null);
  }, !0), ze("blur", (o) => l(o, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var he = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(he || {});
let ke = V({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: a }) {
  return () => {
    let { features: l, ...n } = e, o = { "aria-hidden": (l & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(l & 4) === 4 && (l & 2) !== 2 && { display: "none" } } };
    return M({ ourProps: o, theirProps: n, slot: {}, attrs: a, slots: t, name: "Hidden" });
  };
} });
function Ze(e = {}, t = null, a = []) {
  for (let [l, n] of Object.entries(e))
    Ot(a, Pt(t, l), n);
  return a;
}
function Pt(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Ot(e, t, a) {
  if (Array.isArray(a))
    for (let [l, n] of a.entries())
      Ot(e, Pt(t, l.toString()), n);
  else
    a instanceof Date ? e.push([t, a.toISOString()]) : typeof a == "boolean" ? e.push([t, a ? "1" : "0"]) : typeof a == "string" ? e.push([t, a]) : typeof a == "number" ? e.push([t, `${a}`]) : a == null ? e.push([t, ""]) : Ze(a, t, e);
}
function Ct(e) {
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
function et(e, t, a) {
  let l = w(a == null ? void 0 : a.value), n = g(() => e.value !== void 0);
  return [g(() => n.value ? e.value : l.value), function(o) {
    return n.value || (l.value = o), t == null ? void 0 : t(o);
  }];
}
function dt(e) {
  return [e.screenX, e.screenY];
}
function Jn() {
  let e = w([-1, -1]);
  return { wasMoved(t) {
    let a = dt(t);
    return e.value[0] === a[0] && e.value[1] === a[1] ? !1 : (e.value = a, !0);
  }, update(t) {
    e.value = dt(t);
  } };
}
function Xn(e, t) {
  return e === t;
}
var Zn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Zn || {}), eo = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(eo || {}), to = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(to || {});
let Et = Symbol("ComboboxContext");
function Se(e) {
  let t = ee(Et, null);
  if (t === null) {
    let a = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(a, Se), a;
  }
  return t;
}
let lo = V({ name: "Combobox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => Xn }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String }, nullable: { type: Boolean, default: !1 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: a, emit: l }) {
  let n = w(1), o = w(null), s = w(null), u = w(null), c = w(null), f = w({ static: !1, hold: !1 }), m = w([]), b = w(null), y = w(1), k = w(!1);
  function v(E = (S) => S) {
    let S = b.value !== null ? m.value[b.value] : null, P = Xe(E(m.value.slice()), (T) => L(T.dataRef.domRef)), _ = S ? P.indexOf(S) : null;
    return _ === -1 && (_ = null), { options: P, activeOptionIndex: _ };
  }
  let O = g(() => e.multiple ? 1 : 0), p = g(() => e.nullable), [$, j] = et(g(() => e.modelValue === void 0 ? U(O.value, { [1]: [], [0]: void 0 }) : e.modelValue), (E) => l("update:modelValue", E), g(() => e.defaultValue)), R = { comboboxState: n, value: $, mode: O, compare(E, S) {
    if (typeof e.by == "string") {
      let P = e.by;
      return (E == null ? void 0 : E[P]) === (S == null ? void 0 : S[P]);
    }
    return e.by(E, S);
  }, defaultValue: g(() => e.defaultValue), nullable: p, inputRef: s, labelRef: o, buttonRef: u, optionsRef: c, disabled: g(() => e.disabled), options: m, change(E) {
    j(E);
  }, activeOptionIndex: g(() => {
    if (k.value && b.value === null && m.value.length > 0) {
      let E = m.value.findIndex((S) => !S.dataRef.disabled);
      if (E !== -1)
        return E;
    }
    return b.value;
  }), activationTrigger: y, optionsPropsRef: f, closeCombobox() {
    k.value = !1, !e.disabled && n.value !== 1 && (n.value = 1, b.value = null);
  }, openCombobox() {
    if (k.value = !0, e.disabled || n.value === 0)
      return;
    let E = m.value.findIndex((S) => {
      let P = D(S.dataRef.value);
      return U(O.value, { [0]: () => R.compare(D(R.value.value), D(P)), [1]: () => D(R.value.value).some((_) => R.compare(D(_), D(P))) });
    });
    E !== -1 && (b.value = E), n.value = 0;
  }, goToOption(E, S, P) {
    if (k.value = !1, e.disabled || c.value && !f.value.static && n.value === 1)
      return;
    let _ = v();
    if (_.activeOptionIndex === null) {
      let B = _.options.findIndex((re) => !re.dataRef.disabled);
      B !== -1 && (_.activeOptionIndex = B);
    }
    let T = qn(E === Q.Specific ? { focus: Q.Specific, id: S } : { focus: E }, { resolveItems: () => _.options, resolveActiveIndex: () => _.activeOptionIndex, resolveId: (B) => B.id, resolveDisabled: (B) => B.dataRef.disabled });
    b.value = T, y.value = P ?? 1, m.value = _.options;
  }, selectOption(E) {
    let S = m.value.find((_) => _.id === E);
    if (!S)
      return;
    let { dataRef: P } = S;
    j(U(O.value, { [0]: () => P.value, [1]: () => {
      let _ = D(R.value.value).slice(), T = D(P.value), B = _.findIndex((re) => R.compare(T, D(re)));
      return B === -1 ? _.push(T) : _.splice(B, 1), _;
    } }));
  }, selectActiveOption() {
    if (R.activeOptionIndex.value === null)
      return;
    let { dataRef: E, id: S } = m.value[R.activeOptionIndex.value];
    j(U(O.value, { [0]: () => E.value, [1]: () => {
      let P = D(R.value.value).slice(), _ = D(E.value), T = P.findIndex((B) => R.compare(_, D(B)));
      return T === -1 ? P.push(_) : P.splice(T, 1), P;
    } })), R.goToOption(Q.Specific, S);
  }, registerOption(E, S) {
    let P = { id: E, dataRef: S }, _ = v((T) => [...T, P]);
    if (b.value === null) {
      let T = S.value.value;
      U(O.value, { [0]: () => R.compare(D(R.value.value), D(T)), [1]: () => D(R.value.value).some((B) => R.compare(D(B), D(T))) }) && (_.activeOptionIndex = _.options.indexOf(P));
    }
    m.value = _.options, b.value = _.activeOptionIndex, y.value = 1;
  }, unregisterOption(E) {
    let S = v((P) => {
      let _ = P.findIndex((T) => T.id === E);
      return _ !== -1 && P.splice(_, 1), P;
    });
    m.value = S.options, b.value = S.activeOptionIndex, y.value = 1;
  } };
  St([s, u, c], () => R.closeCombobox(), g(() => n.value === 0)), le(Et, R), wt(g(() => U(n.value, { [0]: ue.Open, [1]: ue.Closed })));
  let W = g(() => R.activeOptionIndex.value === null ? null : m.value[R.activeOptionIndex.value].dataRef.value), H = g(() => {
    var E;
    return (E = L(s)) == null ? void 0 : E.closest("form");
  });
  return z(() => {
    Z([H], () => {
      if (!H.value || e.defaultValue === void 0)
        return;
      function E() {
        R.change(e.defaultValue);
      }
      return H.value.addEventListener("reset", E), () => {
        var S;
        (S = H.value) == null || S.removeEventListener("reset", E);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: E, disabled: S, ...P } = e, _ = { open: n.value === 0, disabled: S, activeIndex: R.activeOptionIndex.value, activeOption: W.value, value: $.value };
    return q(I, [...E != null && $.value != null ? Ze({ [E]: $.value }).map(([T, B]) => q(ke, Je({ features: he.Hidden, key: T, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: T, value: B }))) : [], M({ theirProps: { ...a, ..._e(P, ["modelValue", "defaultValue", "nullable", "multiple", "onUpdate:modelValue", "by"]) }, ourProps: {}, slot: _, slots: t, attrs: a, name: "Combobox" })]);
  };
} }), ao = V({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-combobox-label-${X()}` } }, setup(e, { attrs: t, slots: a }) {
  let l = Se("ComboboxLabel");
  function n() {
    var o;
    (o = L(l.inputRef)) == null || o.focus({ preventScroll: !0 });
  }
  return () => {
    let o = { open: l.comboboxState.value === 0, disabled: l.disabled.value }, { id: s, ...u } = e, c = { id: s, ref: l.labelRef, onClick: n };
    return M({ ourProps: c, theirProps: u, slot: o, attrs: t, slots: a, name: "ComboboxLabel" });
  };
} }), no = V({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-combobox-button-${X()}` } }, setup(e, { attrs: t, slots: a, expose: l }) {
  let n = Se("ComboboxButton");
  l({ el: n.buttonRef, $el: n.buttonRef });
  function o(c) {
    n.disabled.value || (n.comboboxState.value === 0 ? n.closeCombobox() : (c.preventDefault(), n.openCombobox()), pe(() => {
      var f;
      return (f = L(n.inputRef)) == null ? void 0 : f.focus({ preventScroll: !0 });
    }));
  }
  function s(c) {
    switch (c.key) {
      case N.ArrowDown:
        c.preventDefault(), c.stopPropagation(), n.comboboxState.value === 1 && n.openCombobox(), pe(() => {
          var f;
          return (f = n.inputRef.value) == null ? void 0 : f.focus({ preventScroll: !0 });
        });
        return;
      case N.ArrowUp:
        c.preventDefault(), c.stopPropagation(), n.comboboxState.value === 1 && (n.openCombobox(), pe(() => {
          n.value.value || n.goToOption(Q.Last);
        })), pe(() => {
          var f;
          return (f = n.inputRef.value) == null ? void 0 : f.focus({ preventScroll: !0 });
        });
        return;
      case N.Escape:
        if (n.comboboxState.value !== 0)
          return;
        c.preventDefault(), n.optionsRef.value && !n.optionsPropsRef.value.static && c.stopPropagation(), n.closeCombobox(), pe(() => {
          var f;
          return (f = n.inputRef.value) == null ? void 0 : f.focus({ preventScroll: !0 });
        });
        return;
    }
  }
  let u = $t(g(() => ({ as: e.as, type: t.type })), n.buttonRef);
  return () => {
    var c, f;
    let m = { open: n.comboboxState.value === 0, disabled: n.disabled.value, value: n.value.value }, { id: b, ...y } = e, k = { ref: n.buttonRef, id: b, type: u.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (c = L(n.optionsRef)) == null ? void 0 : c.id, "aria-expanded": n.disabled.value ? void 0 : n.comboboxState.value === 0, "aria-labelledby": n.labelRef.value ? [(f = L(n.labelRef)) == null ? void 0 : f.id, b].join(" ") : void 0, disabled: n.disabled.value === !0 ? !0 : void 0, onKeydown: s, onClick: o };
    return M({ ourProps: k, theirProps: y, slot: m, attrs: t, slots: a, name: "ComboboxButton" });
  };
} }), oo = V({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: () => `headlessui-combobox-input-${X()}` } }, emits: { change: (e) => !0 }, setup(e, { emit: t, attrs: a, slots: l, expose: n }) {
  let o = Se("ComboboxInput"), s = { value: !1 };
  n({ el: o.inputRef, $el: o.inputRef });
  let u = g(() => {
    var p;
    let $ = o.value.value;
    return L(o.inputRef) ? typeof e.displayValue < "u" && $ !== void 0 ? (p = e.displayValue($)) != null ? p : "" : typeof $ == "string" ? $ : "" : "";
  });
  z(() => {
    Z([u, o.comboboxState], ([p, $], [j, R]) => {
      if (s.value)
        return;
      let W = L(o.inputRef);
      !W || (R === 0 && $ === 1 || p !== j) && (W.value = p);
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
    switch (s.value = !0, p.key) {
      case N.Backspace:
      case N.Delete:
        if (o.mode.value !== 0 || !o.nullable.value)
          return;
        let $ = p.currentTarget;
        requestAnimationFrame(() => {
          if ($.value === "") {
            o.change(null);
            let j = L(o.optionsRef);
            j && (j.scrollTop = 0), o.goToOption(Q.Nothing);
          }
        });
        break;
      case N.Enter:
        if (s.value = !1, o.comboboxState.value !== 0 || c.value)
          return;
        if (p.preventDefault(), p.stopPropagation(), o.activeOptionIndex.value === null) {
          o.closeCombobox();
          return;
        }
        o.selectActiveOption(), o.mode.value === 0 && o.closeCombobox();
        break;
      case N.ArrowDown:
        return s.value = !1, p.preventDefault(), p.stopPropagation(), U(o.comboboxState.value, { [0]: () => o.goToOption(Q.Next), [1]: () => o.openCombobox() });
      case N.ArrowUp:
        return s.value = !1, p.preventDefault(), p.stopPropagation(), U(o.comboboxState.value, { [0]: () => o.goToOption(Q.Previous), [1]: () => {
          o.openCombobox(), pe(() => {
            o.value.value || o.goToOption(Q.Last);
          });
        } });
      case N.Home:
        if (p.shiftKey)
          break;
        return s.value = !1, p.preventDefault(), p.stopPropagation(), o.goToOption(Q.First);
      case N.PageUp:
        return s.value = !1, p.preventDefault(), p.stopPropagation(), o.goToOption(Q.First);
      case N.End:
        if (p.shiftKey)
          break;
        return s.value = !1, p.preventDefault(), p.stopPropagation(), o.goToOption(Q.Last);
      case N.PageDown:
        return s.value = !1, p.preventDefault(), p.stopPropagation(), o.goToOption(Q.Last);
      case N.Escape:
        if (s.value = !1, o.comboboxState.value !== 0)
          return;
        p.preventDefault(), o.optionsRef.value && !o.optionsPropsRef.value.static && p.stopPropagation(), o.closeCombobox();
        break;
      case N.Tab:
        if (s.value = !1, o.comboboxState.value !== 0)
          return;
        o.mode.value === 0 && o.selectActiveOption(), o.closeCombobox();
        break;
    }
  }
  function y(p) {
    t("change", p);
  }
  function k(p) {
    o.openCombobox(), t("change", p);
  }
  function v() {
    s.value = !1;
  }
  let O = g(() => {
    var p, $, j, R;
    return (R = (j = ($ = e.defaultValue) != null ? $ : o.defaultValue.value !== void 0 ? (p = e.displayValue) == null ? void 0 : p.call(e, o.defaultValue.value) : null) != null ? j : o.defaultValue.value) != null ? R : "";
  });
  return () => {
    var p, $, j, R, W, H;
    let E = { open: o.comboboxState.value === 0 }, { id: S, displayValue: P, ..._ } = e, T = { "aria-controls": (p = o.optionsRef.value) == null ? void 0 : p.id, "aria-expanded": o.disabled.value ? void 0 : o.comboboxState.value === 0, "aria-activedescendant": o.activeOptionIndex.value === null || ($ = o.options.value[o.activeOptionIndex.value]) == null ? void 0 : $.id, "aria-multiselectable": o.mode.value === 1 ? !0 : void 0, "aria-labelledby": (W = (j = L(o.labelRef)) == null ? void 0 : j.id) != null ? W : (R = L(o.buttonRef)) == null ? void 0 : R.id, id: S, onCompositionstart: f, onCompositionend: m, onKeydown: b, onChange: y, onInput: k, onBlur: v, role: "combobox", type: (H = a.type) != null ? H : "text", tabIndex: 0, ref: o.inputRef, defaultValue: O.value };
    return M({ ourProps: T, theirProps: _, slot: E, attrs: a, slots: l, features: me.RenderStrategy | me.Static, name: "ComboboxInput" });
  };
} }), so = V({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, hold: { type: [Boolean], default: !1 } }, setup(e, { attrs: t, slots: a, expose: l }) {
  let n = Se("ComboboxOptions"), o = `headlessui-combobox-options-${X()}`;
  l({ el: n.optionsRef, $el: n.optionsRef }), J(() => {
    n.optionsPropsRef.value.static = e.static;
  }), J(() => {
    n.optionsPropsRef.value.hold = e.hold;
  });
  let s = Le(), u = g(() => s !== null ? s.value === ue.Open : n.comboboxState.value === 0);
  return kt({ container: g(() => L(n.optionsRef)), enabled: g(() => n.comboboxState.value === 0), accept(c) {
    return c.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : c.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(c) {
    c.setAttribute("role", "none");
  } }), () => {
    var c, f, m, b;
    let y = { open: n.comboboxState.value === 0 }, k = { "aria-activedescendant": n.activeOptionIndex.value === null || (c = n.options.value[n.activeOptionIndex.value]) == null ? void 0 : c.id, "aria-labelledby": (b = (f = L(n.labelRef)) == null ? void 0 : f.id) != null ? b : (m = L(n.buttonRef)) == null ? void 0 : m.id, id: o, ref: n.optionsRef, role: "listbox" }, v = _e(e, ["hold"]);
    return M({ ourProps: k, theirProps: v, slot: y, attrs: t, slots: a, features: me.RenderStrategy | me.Static, visible: u.value, name: "ComboboxOptions" });
  };
} }), ro = V({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: a, expose: l }) {
  let n = Se("ComboboxOption"), o = `headlessui-combobox-option-${X()}`, s = w(null);
  l({ el: s, $el: s });
  let u = g(() => n.activeOptionIndex.value !== null ? n.options.value[n.activeOptionIndex.value].id === o : !1), c = g(() => U(n.mode.value, { [0]: () => n.compare(D(n.value.value), D(e.value)), [1]: () => D(n.value.value).some((p) => n.compare(D(p), D(e.value))) })), f = g(() => ({ disabled: e.disabled, value: e.value, domRef: s }));
  z(() => n.registerOption(o, f)), oe(() => n.unregisterOption(o)), J(() => {
    n.comboboxState.value === 0 && (!u.value || n.activationTrigger.value !== 0 && pe(() => {
      var p, $;
      return ($ = (p = L(s)) == null ? void 0 : p.scrollIntoView) == null ? void 0 : $.call(p, { block: "nearest" });
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
  let y = Jn();
  function k(p) {
    y.update(p);
  }
  function v(p) {
    !y.wasMoved(p) || e.disabled || u.value || n.goToOption(Q.Specific, o, 0);
  }
  function O(p) {
    !y.wasMoved(p) || e.disabled || !u.value || n.optionsPropsRef.value.hold || n.goToOption(Q.Nothing);
  }
  return () => {
    let { disabled: p } = e, $ = { active: u.value, selected: c.value, disabled: p }, j = { id: o, ref: s, role: "option", tabIndex: p === !0 ? void 0 : -1, "aria-disabled": p === !0 ? !0 : void 0, "aria-selected": c.value, disabled: void 0, onClick: m, onFocus: b, onPointerenter: k, onMouseenter: k, onPointermove: v, onMousemove: v, onPointerleave: O, onMouseleave: O };
    return M({ ourProps: j, theirProps: e, slot: $, attrs: a, slots: t, name: "ComboboxOption" });
  };
} });
function io(e, t, a) {
  Be || J((l) => {
    window.addEventListener(e, t, a), l(() => window.removeEventListener(e, t, a));
  });
}
var Oe = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Oe || {});
function uo() {
  let e = w(0);
  return io("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function At(e, t, a, l) {
  Be || J((n) => {
    e = e ?? window, e.addEventListener(t, a, l), n(() => e.removeEventListener(t, a, l));
  });
}
function co(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
var Tt = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Tt || {});
let Pe = Object.assign(V({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: Object, default: w(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: a, expose: l }) {
  let n = w(null);
  l({ el: n, $el: n });
  let o = g(() => ie(n));
  po({ ownerDocument: o }, g(() => Boolean(e.features & 16)));
  let s = fo({ ownerDocument: o, container: n, initialFocus: g(() => e.initialFocus) }, g(() => Boolean(e.features & 2)));
  vo({ ownerDocument: o, container: n, containers: e.containers, previousActiveElement: s }, g(() => Boolean(e.features & 8)));
  let u = uo();
  function c(y) {
    let k = L(n);
    k && ((v) => v())(() => {
      U(u.value, { [Oe.Forwards]: () => $e(k, ne.First, { skipElements: [y.relatedTarget] }), [Oe.Backwards]: () => $e(k, ne.Last, { skipElements: [y.relatedTarget] }) });
    });
  }
  let f = w(!1);
  function m(y) {
    y.key === "Tab" && (f.value = !0, requestAnimationFrame(() => {
      f.value = !1;
    }));
  }
  function b(y) {
    var k;
    let v = new Set((k = e.containers) == null ? void 0 : k.value);
    v.add(n);
    let O = y.relatedTarget;
    !O || O.dataset.headlessuiFocusGuard !== "true" && (Rt(v, O) || (f.value ? $e(L(n), U(u.value, { [Oe.Forwards]: () => ne.Next, [Oe.Backwards]: () => ne.Previous }) | ne.WrapAround, { relativeTo: y.target }) : y.target instanceof HTMLElement && we(y.target)));
  }
  return () => {
    let y = {}, k = { ref: n, onKeydown: m, onFocusout: b }, { features: v, initialFocus: O, containers: p, ...$ } = e;
    return q(I, [Boolean(v & 4) && q(ke, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: he.Focusable }), M({ ourProps: k, theirProps: { ...t, ...$ }, slot: y, attrs: t, slots: a, name: "FocusTrap" }), Boolean(v & 4) && q(ke, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: he.Focusable })]);
  };
} }), { features: Tt });
function po({ ownerDocument: e }, t) {
  let a = w(null);
  function l() {
    var o;
    a.value || (a.value = (o = e.value) == null ? void 0 : o.activeElement);
  }
  function n() {
    !a.value || (we(a.value), a.value = null);
  }
  z(() => {
    Z(t, (o, s) => {
      o !== s && (o ? l() : n());
    }, { immediate: !0 });
  }), oe(n);
}
function fo({ ownerDocument: e, container: t, initialFocus: a }, l) {
  let n = w(null), o = w(!1);
  return z(() => o.value = !0), oe(() => o.value = !1), z(() => {
    Z([t, a, l], (s, u) => {
      if (s.every((f, m) => (u == null ? void 0 : u[m]) === f) || !l.value)
        return;
      let c = L(t);
      !c || co(() => {
        var f, m;
        if (!o.value)
          return;
        let b = L(a), y = (f = e.value) == null ? void 0 : f.activeElement;
        if (b) {
          if (b === y) {
            n.value = y;
            return;
          }
        } else if (c.contains(y)) {
          n.value = y;
          return;
        }
        b ? we(b) : $e(c, ne.First | ne.NoScroll) === Re.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), n.value = (m = e.value) == null ? void 0 : m.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), n;
}
function vo({ ownerDocument: e, container: t, containers: a, previousActiveElement: l }, n) {
  var o;
  At((o = e.value) == null ? void 0 : o.defaultView, "focus", (s) => {
    if (!n.value)
      return;
    let u = new Set(a == null ? void 0 : a.value);
    u.add(t);
    let c = l.value;
    if (!c)
      return;
    let f = s.target;
    f && f instanceof HTMLElement ? Rt(u, f) ? (l.value = f, we(f)) : (s.preventDefault(), s.stopPropagation(), we(c)) : we(l.value);
  }, !0);
}
function Rt(e, t) {
  var a;
  for (let l of e)
    if ((a = l.value) != null && a.contains(t))
      return !0;
  return !1;
}
let ct = "body > *", ye = /* @__PURE__ */ new Set(), ce = /* @__PURE__ */ new Map();
function pt(e) {
  e.setAttribute("aria-hidden", "true"), e.inert = !0;
}
function ft(e) {
  let t = ce.get(e);
  !t || (t["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert);
}
function mo(e, t = w(!0)) {
  J((a) => {
    if (!t.value || !e.value)
      return;
    let l = e.value, n = ie(l);
    if (n) {
      ye.add(l);
      for (let o of ce.keys())
        o.contains(l) && (ft(o), ce.delete(o));
      n.querySelectorAll(ct).forEach((o) => {
        if (o instanceof HTMLElement) {
          for (let s of ye)
            if (o.contains(s))
              return;
          ye.size === 1 && (ce.set(o, { "aria-hidden": o.getAttribute("aria-hidden"), inert: o.inert }), pt(o));
        }
      }), a(() => {
        if (ye.delete(l), ye.size > 0)
          n.querySelectorAll(ct).forEach((o) => {
            if (o instanceof HTMLElement && !ce.has(o)) {
              for (let s of ye)
                if (o.contains(s))
                  return;
              ce.set(o, { "aria-hidden": o.getAttribute("aria-hidden"), inert: o.inert }), pt(o);
            }
          });
        else
          for (let o of ce.keys())
            ft(o), ce.delete(o);
      });
    }
  });
}
let jt = Symbol("ForcePortalRootContext");
function bo() {
  return ee(jt, !1);
}
let Ue = V({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: a }) {
  return le(jt, e.force), () => {
    let { force: l, ...n } = e;
    return M({ theirProps: n, ourProps: {}, slot: {}, slots: t, attrs: a, name: "ForcePortalRoot" });
  };
} });
function ho(e) {
  let t = ie(e);
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
let Lt = V({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: a }) {
  let l = w(null), n = g(() => ie(l)), o = bo(), s = ee(Bt, null), u = w(o === !0 || s == null ? ho(l.value) : s.resolveTarget());
  return J(() => {
    o || s != null && (u.value = s.resolveTarget());
  }), oe(() => {
    var c, f;
    let m = (c = n.value) == null ? void 0 : c.getElementById("headlessui-portal-root");
    !m || u.value === m && u.value.children.length <= 0 && ((f = u.value.parentElement) == null || f.removeChild(u.value));
  }), () => {
    if (u.value === null)
      return null;
    let c = { ref: l, "data-headlessui-portal": "" };
    return q(bt, { to: u.value }, M({ ourProps: c, theirProps: e, slot: {}, attrs: a, slots: t, name: "Portal" }));
  };
} }), Bt = Symbol("PortalGroupContext"), go = V({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: a }) {
  let l = Zt({ resolveTarget() {
    return e.target;
  } });
  return le(Bt, l), () => {
    let { target: n, ...o } = e;
    return M({ theirProps: o, ourProps: {}, slot: {}, attrs: t, slots: a, name: "PortalGroup" });
  };
} }), Dt = Symbol("StackContext");
var Ge = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Ge || {});
function yo() {
  return ee(Dt, () => {
  });
}
function xo({ type: e, enabled: t, element: a, onUpdate: l }) {
  let n = yo();
  function o(...s) {
    l == null || l(...s), n(...s);
  }
  z(() => {
    Z(t, (s, u) => {
      s ? o(0, e, a) : u === !0 && o(1, e, a);
    }, { immediate: !0, flush: "sync" });
  }), oe(() => {
    t.value && o(1, e, a);
  }), le(Dt, o);
}
let Ft = Symbol("DescriptionContext");
function wo() {
  let e = ee(Ft, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function De({ slot: e = w({}), name: t = "Description", props: a = {} } = {}) {
  let l = w([]);
  function n(o) {
    return l.value.push(o), () => {
      let s = l.value.indexOf(o);
      s !== -1 && l.value.splice(s, 1);
    };
  }
  return le(Ft, { register: n, slot: e, name: t, props: a }), g(() => l.value.length > 0 ? l.value.join(" ") : void 0);
}
let $o = V({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${X()}` } }, setup(e, { attrs: t, slots: a }) {
  let l = wo();
  return z(() => oe(l.register(e.id))), () => {
    let { name: n = "Description", slot: o = w({}), props: s = {} } = l, { id: u, ...c } = e, f = { ...Object.entries(s).reduce((m, [b, y]) => Object.assign(m, { [b]: h(y) }), {}), id: u };
    return M({ ourProps: f, theirProps: c, slot: o.value, attrs: t, slots: a, name: n });
  };
} });
function tt() {
  let e = [], t = [], a = { enqueue(l) {
    t.push(l);
  }, addEventListener(l, n, o, s) {
    return l.addEventListener(n, o, s), a.add(() => l.removeEventListener(n, o, s));
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
function ko() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
var _o = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(_o || {});
let We = Symbol("DialogContext");
function Ee(e) {
  let t = ee(We, null);
  if (t === null) {
    let a = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(a, Ee), a;
  }
  return t;
}
let Ae = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", It = V({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Ae }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${X()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: a, slots: l, expose: n }) {
  var o;
  let s = w(!1);
  z(() => {
    s.value = !0;
  });
  let u = w(0), c = Le(), f = g(() => e.open === Ae && c !== null ? U(c.value, { [ue.Open]: !0, [ue.Closed]: !1 }) : e.open), m = w(/* @__PURE__ */ new Set()), b = w(null), y = w(null), k = g(() => ie(b));
  if (n({ el: b, $el: b }), !(e.open !== Ae || c !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof f.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${f.value === Ae ? void 0 : e.open}`);
  let v = g(() => s.value && f.value ? 0 : 1), O = g(() => v.value === 0), p = g(() => u.value > 1), $ = ee(We, null) !== null, j = g(() => p.value ? "parent" : "leaf");
  mo(b, g(() => p.value ? O.value : !1)), xo({ type: "Dialog", enabled: g(() => v.value === 0), element: b, onUpdate: (S, P, _) => {
    if (P === "Dialog")
      return U(S, { [Ge.Add]() {
        m.value.add(_), u.value += 1;
      }, [Ge.Remove]() {
        m.value.delete(_), u.value -= 1;
      } });
  } });
  let R = De({ name: "DialogDescription", slot: g(() => ({ open: f.value })) }), W = w(null), H = { titleId: W, panelRef: w(null), dialogState: v, setTitleId(S) {
    W.value !== S && (W.value = S);
  }, close() {
    t("close", !1);
  } };
  le(We, H);
  function E() {
    var S, P, _;
    return [...Array.from((P = (S = k.value) == null ? void 0 : S.querySelectorAll("body > *, [data-headlessui-portal]")) != null ? P : []).filter((T) => !(!(T instanceof HTMLElement) || T.contains(L(y)) || H.panelRef.value && T.contains(H.panelRef.value))), (_ = H.panelRef.value) != null ? _ : b.value];
  }
  return St(() => E(), (S, P) => {
    H.close(), pe(() => P == null ? void 0 : P.focus());
  }, g(() => v.value === 0 && !p.value)), At((o = k.value) == null ? void 0 : o.defaultView, "keydown", (S) => {
    S.defaultPrevented || S.key === N.Escape && v.value === 0 && (p.value || (S.preventDefault(), S.stopPropagation(), H.close()));
  }), J((S) => {
    var P;
    if (v.value !== 0 || $)
      return;
    let _ = k.value;
    if (!_)
      return;
    let T = tt(), B = window.pageYOffset;
    function re(ae, te, de) {
      let Ne = ae.style.getPropertyValue(te);
      return Object.assign(ae.style, { [te]: de }), T.add(() => {
        Object.assign(ae.style, { [te]: Ne });
      });
    }
    let ge = _ == null ? void 0 : _.documentElement, Ie = ((P = _.defaultView) != null ? P : window).innerWidth - ge.clientWidth;
    if (re(ge, "overflow", "hidden"), Ie > 0) {
      let ae = ge.clientWidth - ge.offsetWidth, te = Ie - ae;
      re(ge, "paddingRight", `${te}px`);
    }
    if (ko()) {
      re(_.body, "marginTop", `-${B}px`), window.scrollTo(0, 0);
      let ae = null;
      T.addEventListener(_, "click", (te) => {
        if (te.target instanceof HTMLElement)
          try {
            let de = te.target.closest("a");
            if (!de)
              return;
            let { hash: Ne } = new URL(de.href), Ve = _.querySelector(Ne);
            Ve && !E().some((Kt) => Kt.contains(Ve)) && (ae = Ve);
          } catch {
          }
      }, !0), T.addEventListener(_, "touchmove", (te) => {
        te.target instanceof HTMLElement && !E().some((de) => de.contains(te.target)) && te.preventDefault();
      }, { passive: !1 }), T.add(() => {
        window.scrollTo(0, window.pageYOffset + B), ae && ae.isConnected && (ae.scrollIntoView({ block: "nearest" }), ae = null);
      });
    }
    S(T.dispose);
  }), J((S) => {
    if (v.value !== 0)
      return;
    let P = L(b);
    if (!P)
      return;
    let _ = new IntersectionObserver((T) => {
      for (let B of T)
        B.boundingClientRect.x === 0 && B.boundingClientRect.y === 0 && B.boundingClientRect.width === 0 && B.boundingClientRect.height === 0 && H.close();
    });
    _.observe(P), S(() => _.disconnect());
  }), () => {
    let { id: S, open: P, initialFocus: _, ...T } = e, B = { ...a, ref: b, id: S, role: "dialog", "aria-modal": v.value === 0 ? !0 : void 0, "aria-labelledby": W.value, "aria-describedby": R.value }, re = { open: v.value === 0 };
    return q(Ue, { force: !0 }, () => [q(Lt, () => q(go, { target: b.value }, () => q(Ue, { force: !1 }, () => q(Pe, { initialFocus: _, containers: m, features: O.value ? U(j.value, { parent: Pe.features.RestoreFocus, leaf: Pe.features.All & ~Pe.features.FocusLock }) : Pe.features.None }, () => M({ ourProps: B, theirProps: T, slot: re, attrs: a, slots: l, visible: v.value === 0, features: me.RenderStrategy | me.Static, name: "Dialog" }))))), q(ke, { features: he.Hidden, ref: y })]);
  };
} });
V({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${X()}` } }, setup(e, { attrs: t, slots: a }) {
  let l = Ee("DialogOverlay");
  function n(o) {
    o.target === o.currentTarget && (o.preventDefault(), o.stopPropagation(), l.close());
  }
  return () => {
    let { id: o, ...s } = e;
    return M({ ourProps: { id: o, "aria-hidden": !0, onClick: n }, theirProps: s, slot: { open: l.dialogState.value === 0 }, attrs: t, slots: a, name: "DialogOverlay" });
  };
} });
V({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${X()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: a, expose: l }) {
  let n = Ee("DialogBackdrop"), o = w(null);
  return l({ el: o, $el: o }), z(() => {
    if (n.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: s, ...u } = e, c = { id: s, ref: o, "aria-hidden": !0 };
    return q(Ue, { force: !0 }, () => q(Lt, () => M({ ourProps: c, theirProps: { ...t, ...u }, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: a, name: "DialogBackdrop" })));
  };
} });
let Nt = V({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${X()}` } }, setup(e, { attrs: t, slots: a, expose: l }) {
  let n = Ee("DialogPanel");
  l({ el: n.panelRef, $el: n.panelRef });
  function o(s) {
    s.stopPropagation();
  }
  return () => {
    let { id: s, ...u } = e, c = { id: s, ref: n.panelRef, onClick: o };
    return M({ ourProps: c, theirProps: u, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: a, name: "DialogPanel" });
  };
} }), So = V({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${X()}` } }, setup(e, { attrs: t, slots: a }) {
  let l = Ee("DialogTitle");
  return z(() => {
    l.setTitleId(e.id), oe(() => l.setTitleId(null));
  }), () => {
    let { id: n, ...o } = e;
    return M({ ourProps: { id: n }, theirProps: o, slot: { open: l.dialogState.value === 0 }, attrs: t, slots: a, name: "DialogTitle" });
  };
} }), Vt = Symbol("LabelContext");
function Mt() {
  let e = ee(Vt, null);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Mt), t;
  }
  return e;
}
function lt({ slot: e = {}, name: t = "Label", props: a = {} } = {}) {
  let l = w([]);
  function n(o) {
    return l.value.push(o), () => {
      let s = l.value.indexOf(o);
      s !== -1 && l.value.splice(s, 1);
    };
  }
  return le(Vt, { register: n, slot: e, name: t, props: a }), g(() => l.value.length > 0 ? l.value.join(" ") : void 0);
}
let zt = V({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-label-${X()}` } }, setup(e, { slots: t, attrs: a }) {
  let l = Mt();
  return z(() => oe(l.register(e.id))), () => {
    let { name: n = "Label", slot: o = {}, props: s = {} } = l, { id: u, passive: c, ...f } = e, m = { ...Object.entries(s).reduce((b, [y, k]) => Object.assign(b, { [y]: h(k) }), {}), id: u };
    return c && (delete m.onClick, delete f.onClick), M({ ourProps: m, theirProps: f, slot: o, attrs: a, slots: t, name: n });
  };
} });
function Po(e, t) {
  return e === t;
}
let Ht = Symbol("RadioGroupContext");
function qt(e) {
  let t = ee(Ht, null);
  if (t === null) {
    let a = new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(a, qt), a;
  }
  return t;
}
let Oo = V({ name: "RadioGroup", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "div" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => Po }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-radiogroup-${X()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: a, slots: l, expose: n }) {
  let o = w(null), s = w([]), u = lt({ name: "RadioGroupLabel" }), c = De({ name: "RadioGroupDescription" });
  n({ el: o, $el: o });
  let [f, m] = et(g(() => e.modelValue), (v) => t("update:modelValue", v), g(() => e.defaultValue)), b = { options: s, value: f, disabled: g(() => e.disabled), firstOption: g(() => s.value.find((v) => !v.propsRef.disabled)), containsCheckedOption: g(() => s.value.some((v) => b.compare(D(v.propsRef.value), D(e.modelValue)))), compare(v, O) {
    if (typeof e.by == "string") {
      let p = e.by;
      return (v == null ? void 0 : v[p]) === (O == null ? void 0 : O[p]);
    }
    return e.by(v, O);
  }, change(v) {
    var O;
    if (e.disabled || b.compare(D(f.value), D(v)))
      return !1;
    let p = (O = s.value.find(($) => b.compare(D($.propsRef.value), D(v)))) == null ? void 0 : O.propsRef;
    return p != null && p.disabled ? !1 : (m(v), !0);
  }, registerOption(v) {
    s.value.push(v), s.value = Xe(s.value, (O) => O.element);
  }, unregisterOption(v) {
    let O = s.value.findIndex((p) => p.id === v);
    O !== -1 && s.value.splice(O, 1);
  } };
  le(Ht, b), kt({ container: g(() => L(o)), accept(v) {
    return v.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : v.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(v) {
    v.setAttribute("role", "none");
  } });
  function y(v) {
    if (!o.value || !o.value.contains(v.target))
      return;
    let O = s.value.filter((p) => p.propsRef.disabled === !1).map((p) => p.element);
    switch (v.key) {
      case N.Enter:
        Ct(v.currentTarget);
        break;
      case N.ArrowLeft:
      case N.ArrowUp:
        if (v.preventDefault(), v.stopPropagation(), $e(O, ne.Previous | ne.WrapAround) === Re.Success) {
          let p = s.value.find(($) => {
            var j;
            return $.element === ((j = ie(o)) == null ? void 0 : j.activeElement);
          });
          p && b.change(p.propsRef.value);
        }
        break;
      case N.ArrowRight:
      case N.ArrowDown:
        if (v.preventDefault(), v.stopPropagation(), $e(O, ne.Next | ne.WrapAround) === Re.Success) {
          let p = s.value.find(($) => {
            var j;
            return $.element === ((j = ie($.element)) == null ? void 0 : j.activeElement);
          });
          p && b.change(p.propsRef.value);
        }
        break;
      case N.Space:
        {
          v.preventDefault(), v.stopPropagation();
          let p = s.value.find(($) => {
            var j;
            return $.element === ((j = ie($.element)) == null ? void 0 : j.activeElement);
          });
          p && b.change(p.propsRef.value);
        }
        break;
    }
  }
  let k = g(() => {
    var v;
    return (v = L(o)) == null ? void 0 : v.closest("form");
  });
  return z(() => {
    Z([k], () => {
      if (!k.value || e.defaultValue === void 0)
        return;
      function v() {
        b.change(e.defaultValue);
      }
      return k.value.addEventListener("reset", v), () => {
        var O;
        (O = k.value) == null || O.removeEventListener("reset", v);
      };
    }, { immediate: !0 });
  }), () => {
    let { disabled: v, name: O, id: p, ...$ } = e, j = { ref: o, id: p, role: "radiogroup", "aria-labelledby": u.value, "aria-describedby": c.value, onKeydown: y };
    return q(I, [...O != null && f.value != null ? Ze({ [O]: f.value }).map(([R, W]) => q(ke, Je({ features: he.Hidden, key: R, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: R, value: W }))) : [], M({ ourProps: j, theirProps: { ...a, ..._e($, ["modelValue", "defaultValue"]) }, slot: {}, attrs: a, slots: l, name: "RadioGroup" })]);
  };
} });
var Co = ((e) => (e[e.Empty = 1] = "Empty", e[e.Active = 2] = "Active", e))(Co || {});
let Eo = V({ name: "RadioGroupOption", props: { as: { type: [Object, String], default: "div" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-radiogroup-option-${X()}` } }, setup(e, { attrs: t, slots: a, expose: l }) {
  let n = qt("RadioGroupOption"), o = lt({ name: "RadioGroupLabel" }), s = De({ name: "RadioGroupDescription" }), u = w(null), c = g(() => ({ value: e.value, disabled: e.disabled })), f = w(1);
  l({ el: u, $el: u }), z(() => n.registerOption({ id: e.id, element: u, propsRef: c })), oe(() => n.unregisterOption(e.id));
  let m = g(() => {
    var $;
    return (($ = n.firstOption.value) == null ? void 0 : $.id) === e.id;
  }), b = g(() => n.disabled.value || e.disabled), y = g(() => n.compare(D(n.value.value), D(e.value))), k = g(() => b.value ? -1 : y.value || !n.containsCheckedOption.value && m.value ? 0 : -1);
  function v() {
    var $;
    !n.change(e.value) || (f.value |= 2, ($ = u.value) == null || $.focus());
  }
  function O() {
    f.value |= 2;
  }
  function p() {
    f.value &= -3;
  }
  return () => {
    let { id: $, value: j, disabled: R, ...W } = e, H = { checked: y.value, disabled: b.value, active: Boolean(f.value & 2) }, E = { id: $, ref: u, role: "radio", "aria-checked": y.value ? "true" : "false", "aria-labelledby": o.value, "aria-describedby": s.value, "aria-disabled": b.value ? !0 : void 0, tabIndex: k.value, onClick: b.value ? void 0 : v, onFocus: b.value ? void 0 : O, onBlur: b.value ? void 0 : p };
    return M({ ourProps: E, theirProps: W, slot: H, attrs: t, slots: a, name: "RadioGroupOption" });
  };
} }), vt = zt, Ao = $o, Ut = Symbol("GroupContext"), To = V({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: a }) {
  let l = w(null), n = lt({ name: "SwitchLabel", props: { onClick() {
    !l.value || (l.value.click(), l.value.focus({ preventScroll: !0 }));
  } } }), o = De({ name: "SwitchDescription" });
  return le(Ut, { switchRef: l, labelledby: n, describedby: o }), () => M({ theirProps: e, ourProps: {}, slot: {}, slots: t, attrs: a, name: "SwitchGroup" });
} }), Ro = V({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: !0 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-switch-${X()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: a, slots: l, expose: n }) {
  let o = ee(Ut, null), [s, u] = et(g(() => e.modelValue), (p) => t("update:modelValue", p), g(() => e.defaultChecked));
  function c() {
    u(!s.value);
  }
  let f = w(null), m = o === null ? f : o.switchRef, b = $t(g(() => ({ as: e.as, type: a.type })), m);
  n({ el: m, $el: m });
  function y(p) {
    p.preventDefault(), c();
  }
  function k(p) {
    p.key === N.Space ? (p.preventDefault(), c()) : p.key === N.Enter && Ct(p.currentTarget);
  }
  function v(p) {
    p.preventDefault();
  }
  let O = g(() => {
    var p, $;
    return ($ = (p = L(m)) == null ? void 0 : p.closest) == null ? void 0 : $.call(p, "form");
  });
  return z(() => {
    Z([O], () => {
      if (!O.value || e.defaultChecked === void 0)
        return;
      function p() {
        u(e.defaultChecked);
      }
      return O.value.addEventListener("reset", p), () => {
        var $;
        ($ = O.value) == null || $.removeEventListener("reset", p);
      };
    }, { immediate: !0 });
  }), () => {
    let { id: p, name: $, value: j, ...R } = e, W = { checked: s.value }, H = { id: p, ref: m, role: "switch", type: b.value, tabIndex: 0, "aria-checked": s.value, "aria-labelledby": o == null ? void 0 : o.labelledby.value, "aria-describedby": o == null ? void 0 : o.describedby.value, onClick: y, onKeyup: k, onKeypress: v };
    return q(I, [$ != null && s.value != null ? q(ke, Je({ features: he.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: s.value, name: $, value: j })) : null, M({ ourProps: H, theirProps: { ...a, ..._e(R, ["modelValue", "defaultChecked"]) }, slot: W, attrs: a, slots: l, name: "Switch" })]);
  };
} }), jo = zt;
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
var Ke = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(Ke || {});
function Bo(e, t) {
  let a = tt();
  if (!e)
    return a.dispose;
  let { transitionDuration: l, transitionDelay: n } = getComputedStyle(e), [o, s] = [l, n].map((u) => {
    let [c = 0] = u.split(",").filter(Boolean).map((f) => f.includes("ms") ? parseFloat(f) : parseFloat(f) * 1e3).sort((f, m) => m - f);
    return c;
  });
  return o !== 0 ? a.setTimeout(() => t("finished"), o + s) : t("finished"), a.add(() => t("cancelled")), a.dispose;
}
function mt(e, t, a, l, n, o) {
  let s = tt(), u = o !== void 0 ? Lo(o) : () => {
  };
  return Te(e, ...n), He(e, ...t, ...a), s.nextFrame(() => {
    Te(e, ...a), He(e, ...l), s.add(Bo(e, (c) => (Te(e, ...l, ...t), He(e, ...n), u(c))));
  }), s.add(() => Te(e, ...t, ...a, ...l, ...n)), s.add(() => u("cancelled")), s.dispose;
}
function be(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let at = Symbol("TransitionContext");
var Do = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Do || {});
function Fo() {
  return ee(at, null) !== null;
}
function Io() {
  let e = ee(at, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function No() {
  let e = ee(nt, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let nt = Symbol("NestingContext");
function Fe(e) {
  return "children" in e ? Fe(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Gt(e) {
  let t = w([]), a = w(!1);
  z(() => a.value = !0), oe(() => a.value = !1);
  function l(o, s = fe.Hidden) {
    let u = t.value.findIndex(({ id: c }) => c === o);
    u !== -1 && (U(s, { [fe.Unmount]() {
      t.value.splice(u, 1);
    }, [fe.Hidden]() {
      t.value[u].state = "hidden";
    } }), !Fe(t) && a.value && (e == null || e()));
  }
  function n(o) {
    let s = t.value.find(({ id: u }) => u === o);
    return s ? s.state !== "visible" && (s.state = "visible") : t.value.push({ id: o, state: "visible" }), () => l(o, fe.Unmount);
  }
  return { children: t, register: n, unregister: l };
}
let Wt = me.RenderStrategy, je = V({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: a, slots: l, expose: n }) {
  if (!Fo() && Un())
    return () => q(ot, { ...e, onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave") }, l);
  let o = w(null), s = w("visible"), u = g(() => e.unmount ? fe.Unmount : fe.Hidden);
  n({ el: o, $el: o });
  let { show: c, appear: f } = Io(), { register: m, unregister: b } = No(), y = { value: !0 }, k = X(), v = { value: !1 }, O = Gt(() => {
    v.value || (s.value = "hidden", b(k), t("afterLeave"));
  });
  z(() => {
    let P = m(k);
    oe(P);
  }), J(() => {
    if (u.value === fe.Hidden && k) {
      if (c && s.value !== "visible") {
        s.value = "visible";
        return;
      }
      U(s.value, { hidden: () => b(k), visible: () => m(k) });
    }
  });
  let p = be(e.enter), $ = be(e.enterFrom), j = be(e.enterTo), R = be(e.entered), W = be(e.leave), H = be(e.leaveFrom), E = be(e.leaveTo);
  z(() => {
    J(() => {
      if (s.value === "visible") {
        let P = L(o);
        if (P instanceof Comment && P.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function S(P) {
    let _ = y.value && !f.value, T = L(o);
    !T || !(T instanceof HTMLElement) || _ || (v.value = !0, c.value && t("beforeEnter"), c.value || t("beforeLeave"), P(c.value ? mt(T, p, $, j, R, (B) => {
      v.value = !1, B === Ke.Finished && t("afterEnter");
    }) : mt(T, W, H, E, R, (B) => {
      v.value = !1, B === Ke.Finished && (Fe(O) || (s.value = "hidden", b(k), t("afterLeave")));
    })));
  }
  return z(() => {
    Z([c], (P, _, T) => {
      S(T), y.value = !1;
    }, { immediate: !0 });
  }), le(nt, O), wt(g(() => U(s.value, { visible: ue.Open, hidden: ue.Closed }))), () => {
    let { appear: P, show: _, enter: T, enterFrom: B, enterTo: re, entered: ge, leave: Ie, leaveFrom: ae, leaveTo: te, ...de } = e;
    return M({ theirProps: de, ourProps: { ref: o }, slot: {}, slots: l, attrs: a, features: Wt, visible: s.value === "visible", name: "TransitionChild" });
  };
} }), Vo = je, ot = V({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: a, slots: l }) {
  let n = Le(), o = g(() => e.show === null && n !== null ? U(n.value, { [ue.Open]: !0, [ue.Closed]: !1 }) : e.show);
  J(() => {
    if (![!0, !1].includes(o.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let s = w(o.value ? "visible" : "hidden"), u = Gt(() => {
    s.value = "hidden";
  }), c = w(!0), f = { show: o, appear: g(() => e.appear || !c.value) };
  return z(() => {
    J(() => {
      c.value = !1, o.value ? s.value = "visible" : Fe(u) || (s.value = "hidden");
    });
  }), le(nt, u), le(at, f), () => {
    let m = _e(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), b = { unmount: e.unmount };
    return M({ ourProps: { ...b, as: "template" }, theirProps: {}, slot: {}, slots: { ...l, default: () => [q(Vo, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...a, ...b, ...m }, l.default)] }, attrs: {}, features: Wt, visible: s.value === "visible", name: "Transition" });
  };
} });
const Mo = ["title"], zo = { class: "relative mt-1" }, Ho = {
  name: "PoSelectField"
}, qr = /* @__PURE__ */ Object.assign(Ho, {
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
    const a = e, l = w(""), n = w(a.preSelected), o = g(
      () => l.value === "" ? a.list : a.list.filter((s) => s.name.toLowerCase().includes(l.value.toLowerCase()))
    );
    return Z(n, () => {
      t("update:modelValue", n.value);
    }), (s, u) => (i(), K(h(lo), {
      as: "div",
      modelValue: n.value,
      "onUpdate:modelValue": u[1] || (u[1] = (c) => n.value = c)
    }, {
      default: F(() => [
        A(h(ao), { class: "text-sm font-medium text-slate-700 flex items-center space-x-1" }, {
          default: F(() => [
            r("span", null, x(e.label), 1),
            e.info !== null ? (i(), d("abbr", {
              key: 0,
              title: e.info,
              class: "w-4 text-slate-500"
            }, [
              A(h(Fn), { class: "fill-current" })
            ], 8, Mo)) : C("", !0)
          ]),
          _: 1
        }),
        r("div", zo, [
          A(h(oo), {
            class: "w-full rounded-md border border-slate-300 bg-white py-2 pl-3 pr-10 focus:border-mpao-lightblue focus:outline-none focus:ring-0 sm:text-sm",
            onChange: u[0] || (u[0] = (c) => l.value = c.target.value),
            "display-value": (c) => c == null ? void 0 : c.name
          }, null, 8, ["display-value"]),
          A(h(no), { class: "absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none" }, {
            default: F(() => [
              A(h(Dn), {
                class: "h-5 w-5 text-slate-400",
                "aria-hidden": "true"
              })
            ]),
            _: 1
          }),
          h(o).length > 0 ? (i(), K(h(so), {
            key: 0,
            class: "absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          }, {
            default: F(() => [
              (i(!0), d(I, null, Y(h(o), (c) => (i(), K(h(ro), {
                key: c.id,
                value: c,
                as: "template"
              }, {
                default: F(({ active: f, selected: m }) => [
                  r("li", {
                    class: G(["relative cursor-default select-none py-2 pl-3 pr-9", f ? "bg-mpao-lightblue text-white" : "text-slate-900"])
                  }, [
                    r("span", {
                      class: G(["block truncate", m && "font-semibold"])
                    }, x(c.name), 3),
                    m ? (i(), d("span", {
                      key: 0,
                      class: G(["absolute inset-y-0 right-0 flex items-center pr-4", f ? "text-white" : "text-mpao-lightblue"])
                    }, [
                      A(h(Bn), {
                        class: "h-5 w-5",
                        "aria-hidden": "true"
                      })
                    ], 2)) : C("", !0)
                  ], 2)
                ]),
                _: 2
              }, 1032, ["value"]))), 128))
            ]),
            _: 1
          })) : C("", !0)
        ])
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), qo = ["disabled", "aria-disabled"], Uo = ["value", "disabled", "aria-disabled"], Go = ["href"], Wo = {
  name: "PoButton"
}, Ko = /* @__PURE__ */ Object.assign(Wo, {
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
    const t = e, a = "rounded-lg transition-colors duration-100 ease-in-out cursor-pointer disabled:bg-slate-400 disabled:cursor-default disabled:hover:bg-slate-400", l = g(() => {
      switch (t.size) {
        case "sm":
          return "px-2 py-1 text-xs";
        case "md":
          return "px-4 py-2 text-sm";
        case "lg":
          return "px-5 py-3 text-normal";
      }
    }), n = g(() => t.overrideColors ? "" : "bg-mpao-lightblue hover:bg-mpao-blue focus:bg-mpao-blue text-slate-50");
    return (o, s) => (i(), d(I, null, [
      e.type == "button" ? (i(), d("button", xe({
        key: 0,
        class: [a, h(l), h(n)],
        disabled: e.disabled,
        "aria-disabled": e.disabled
      }, o.$attrs), [
        se(o.$slots, "label", {}, () => [
          ve(x(e.label), 1)
        ])
      ], 16, qo)) : C("", !0),
      e.type == "submit" ? (i(), d("input", xe({
        key: 1,
        type: "submit",
        class: [a, h(l), h(n)],
        value: e.label,
        disabled: e.disabled,
        "aria-disabled": e.disabled
      }, o.$attrs), null, 16, Uo)) : C("", !0),
      e.type == "link" ? (i(), d("a", xe({
        key: 2,
        href: e.to,
        class: [a, h(l), h(n)]
      }, o.$attrs), x(e.label), 17, Go)) : C("", !0)
    ], 64));
  }
}), Yo = /* @__PURE__ */ r("div", { class: "fixed inset-0 bg-gradient-to-br from-mpao-orange via-mpao-lightblue to-mpao-blue opacity-60 transition-opacity" }, null, -1), Qo = { class: "fixed z-10 inset-0 overflow-y-auto" }, Jo = { class: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0" }, Xo = /* @__PURE__ */ r("span", {
  class: "hidden sm:inline-block sm:align-middle sm:h-screen",
  "aria-hidden": "true"
}, "​", -1), Zo = { class: "flex items-center bg-mpao-lightblue rounded-t-xl p-5" }, es = { class: "grow text-md font-bold text-sky-50" }, ts = { class: "shrink-0" }, ls = { class: "p-5" }, as = {
  name: "PoModal"
}, Ur = /* @__PURE__ */ Object.assign(as, {
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
    const t = e, { show: a } = Ye(t), l = w(!1);
    return Z(a, () => {
      l.value = !1, setTimeout(() => {
        l.value = !0;
      }, 100);
    }), (n, o) => (i(), d("div", null, [
      e.openBtnLabel.length > 0 ? (i(), K(h(Ko), {
        key: 0,
        label: e.openBtnLabel,
        onClick: o[0] || (o[0] = (s) => l.value = !0)
      }, null, 8, ["label"])) : C("", !0),
      A(h(ot), {
        as: "template",
        show: l.value
      }, {
        default: F(() => [
          A(h(It), {
            as: "div",
            class: "relative z-50",
            onClose: o[2] || (o[2] = (s) => l.value = !1)
          }, {
            default: F(() => [
              A(h(je), {
                as: "template",
                enter: "ease-out duration-300",
                "enter-from": "opacity-0",
                "enter-to": "opacity-100",
                leave: "ease-in duration-200",
                "leave-from": "opacity-100",
                "leave-to": "opacity-0"
              }, {
                default: F(() => [
                  Yo
                ]),
                _: 1
              }),
              r("div", Qo, [
                r("div", Jo, [
                  Xo,
                  A(h(je), {
                    as: "template",
                    enter: "ease-out duration-300",
                    "enter-from": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                    "enter-to": "opacity-100 translate-y-0 sm:scale-100",
                    leave: "ease-in duration-200",
                    "leave-from": "opacity-100 translate-y-0 sm:scale-100",
                    "leave-to": "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  }, {
                    default: F(() => [
                      A(h(Nt), { class: "relative inline-block align-bottom bg-white rounded-xl text-left shadow-xl transform transition-all sm:align-middle sm:max-w-xl w-full" }, {
                        default: F(() => [
                          r("div", Zo, [
                            r("h3", es, x(e.modalTitle), 1),
                            r("div", ts, [
                              r("span", {
                                role: "button",
                                class: "block",
                                onClick: o[1] || (o[1] = (s) => l.value = !1)
                              }, [
                                A(h(ht), { class: "w-5 stroke-sky-200 hover:stroke-mpao-orange transition-colors duration-150 ease-in-out" })
                              ])
                            ])
                          ]),
                          r("div", ls, [
                            se(n.$slots, "content")
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
}), ns = { class: "text-sm font-medium text-slate-700 cursor-pointer select-none" }, os = {
  name: "PoToggle"
}, Gr = /* @__PURE__ */ Object.assign(os, {
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
    return (l, n) => (i(), K(h(To), {
      as: "div",
      class: "flex items-center"
    }, {
      default: F(() => [
        A(h(Ro), {
          modelValue: a.value,
          "onUpdate:modelValue": n[0] || (n[0] = (o) => a.value = o),
          onClick: n[1] || (n[1] = (o) => l.$emit("update:modelValue", !a.value)),
          class: G([a.value ? "bg-mpao-lightblue" : "bg-slate-200", "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-mpao-lightblue focus:ring-offset-2"])
        }, {
          default: F(() => [
            r("span", {
              "aria-hidden": "true",
              class: G([a.value ? "translate-x-5" : "translate-x-0", "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"])
            }, null, 2)
          ]),
          _: 1
        }, 8, ["modelValue", "class"]),
        A(h(jo), {
          as: "span",
          class: "ml-3"
        }, {
          default: F(() => [
            r("span", ns, x(e.label), 1)
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), ss = { class: "pt-1 space-y-1 border-r-2 border-slate-200 relative" }, rs = ["onClick"], is = {
  name: "PoSectionMenu"
}, Wr = /* @__PURE__ */ Object.assign(is, {
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
    return (t, a) => (i(), d("ul", ss, [
      (i(!0), d(I, null, Y(e.menuItems, (l) => (i(), d("li", null, [
        r("span", {
          onClick: (n) => t.$emit("link-click", l.link),
          role: "button",
          class: G(["relative cursor-pointer -right-[0.15rem] py-1 border-r-2 hover:border-mpao-lightblue transition-colors duration-200 ease-in-out flex items-center space-x-2", { "border-mpao-lightblue text-sm text-mpao-lightblue": l.link == e.currPageRoute }, { "border-slate-200 text-sm text-slate-600": l.link !== e.currPageRoute }])
        }, [
          (i(), K(Ce(l.icon), { class: "w-4 h-4 stroke-current" })),
          r("span", null, x(l.label), 1)
        ], 10, rs)
      ]))), 256))
    ]));
  }
}), us = { class: "relative flex items-start" }, ds = { class: "flex h-5 items-center" }, cs = ["name", "id", "checked", "placeholder", "disabled", "required", "aria-describedby"], ps = { class: "ml-3 text-sm" }, fs = ["for"], vs = ["id"], ms = { class: "sr-only" }, bs = ["id"], hs = {
  name: "PoCheckbox"
}, Kr = /* @__PURE__ */ Object.assign(hs, {
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
    return (t, a) => (i(), d("div", us, [
      r("div", ds, [
        r("input", xe({
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
        }), null, 16, cs)
      ]),
      r("div", ps, [
        r("label", {
          for: e.id,
          class: "font-medium text-slate-600 cursor-pointer select-none"
        }, x(e.label), 9, fs),
        e.message ? (i(), d("span", {
          key: 0,
          id: `${e.id}-description`,
          class: "text-slate-500 cursor-default"
        }, [
          r("span", ms, x(e.label), 1),
          ve(" " + x(e.message), 1)
        ], 8, vs)) : C("", !0)
      ]),
      e.errorMessage !== null ? (i(), d("p", {
        key: 0,
        class: "mt-2 text-sm text-red-600",
        id: `${e.id}-error`
      }, x(e.errorMessage), 9, bs)) : C("", !0)
    ]));
  }
}), gs = { class: "relative pt-5" }, ys = ["name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], xs = ["for"], ws = ["title"], $s = ["id"], ks = ["id"], _s = {
  name: "PoTextarea"
}, Yr = /* @__PURE__ */ Object.assign(_s, {
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
    return (t, a) => (i(), d("div", gs, [
      r("textarea", xe({
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
        class: "mt-1 peer px-3 py-2 block w-full transition-colors duration-100 ease-in-out rounded-md border-slate-300 bg-white focus:border-mpao-lightblue focus:ring-0 invalid:border-red-400 invalid:focus:border-red-600 invalid:focus:ring-red-600 sm:text-sm disabled:bg-slate-50 disabled:border-slate-300 disabled:focus:border-slate-300 disabled:hover:border-slate-300 disabled:cursor-default"
      }), null, 16, ys),
      r("label", {
        for: e.id,
        class: "absolute top-0 text-sm font-medium text-slate-700 peer-focus:text-mpao-lightblue peer-invalid:text-red-500 peer-invalid:peer-focus:text-red-600 flex items-center space-x-1"
      }, [
        r("span", null, x(e.label), 1),
        e.info !== null ? (i(), d("abbr", {
          key: 0,
          title: e.info,
          class: "w-4 text-slate-500"
        }, [
          A(h(gt))
        ], 8, ws)) : C("", !0)
      ], 8, xs),
      e.message !== null ? (i(), d("p", {
        key: 0,
        class: "mt-2 text-sm text-slate-500",
        id: `${e.id}-description`
      }, x(e.message), 9, $s)) : C("", !0),
      e.errorMessage !== null ? (i(), d("p", {
        key: 1,
        class: "mt-2 text-sm text-red-600",
        id: `${e.id}-error`
      }, x(e.errorMessage), 9, ks)) : C("", !0)
    ]));
  }
}), Ss = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [l, n] of t)
    a[l] = n;
  return a;
}, Ps = {
  name: "PoFooter"
}, Os = /* @__PURE__ */ el('<div class="p-10 pb-5"><div class="flex space-x-2 mt-5 justify-end"><img class="opacity-30 hover:opacity-100 transition-opacity duration-200 ease-in-out h-10 mr-2" src="https://pension.gov.mv/asset/image/enlgish_website_logo.svg" alt="Pension Office logo"><img class="opacity-30 hover:opacity-100 transition-opacity duration-200 ease-in-out h-10" src="https://pension.gov.mv/asset/image/iso_logo.jpg" alt=""><img class="opacity-30 hover:opacity-100 transition-opacity duration-200 ease-in-out h-10" src="https://pension.gov.mv/asset/image/en-ccc-2020-issa.png" alt=""></div></div><div aria-live="assertive" class="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 z-50"><div class="flex w-full flex-col items-center space-y-4 sm:items-end pt-[55px]" id="po-notifications-alert"></div></div>', 2), Cs = [
  Os
];
function Es(e, t, a, l, n, o) {
  return i(), d("div", null, Cs);
}
const Qr = /* @__PURE__ */ Ss(Ps, [["render", Es]]), As = {
  key: 0,
  class: "flex items-start space-x-4 p-5 bg-red-100 rounded-md mt-5"
}, Ts = { class: "pt-1" }, Rs = { class: "text-base font-medium text-red-700" }, js = { class: "text-sm text-red-800 list-disc ml-5 mt-2" }, Ls = {
  key: 1,
  class: "flex items-start space-x-4 p-5 bg-green-100 rounded-md mt-5"
}, Bs = { class: "pt-1" }, Ds = { class: "text-base font-medium text-green-700" }, Fs = {
  name: "PoFormStatusMessage"
}, Jr = /* @__PURE__ */ Object.assign(Fs, {
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
    return (t, a) => e.isError ? (i(), d("div", As, [
      A(h(pl), { class: "w-8 stroke-red-600" }),
      r("div", Ts, [
        r("span", Rs, x(e.message), 1),
        r("ul", js, [
          (i(!0), d(I, null, Y(e.errorList, (l) => (i(), d("li", null, x(l), 1))), 256))
        ])
      ])
    ])) : (i(), d("div", Ls, [
      A(h(ul), { class: "w-8 stroke-green-600" }),
      r("div", Bs, [
        r("span", Ds, x(e.message), 1)
      ])
    ]));
  }
}), Is = {
  key: 0,
  class: "mt-1 flex space-x-3 flex-wrap"
}, Ns = { class: "flex flex-1" }, Vs = { class: "flex flex-col" }, Ms = {
  name: "PoRadioInput"
}, Xr = /* @__PURE__ */ Object.assign(Ms, {
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
    return Z(l, () => {
      t("update:modelValue", l.value);
    }), (n, o) => (i(), K(h(Oo), {
      modelValue: l.value,
      "onUpdate:modelValue": o[0] || (o[0] = (s) => l.value = s)
    }, {
      default: F(() => [
        A(h(vt), { class: "text-sm font-medium flex items-center space-x-1 text-slate-700" }, {
          default: F(() => [
            ve(x(e.label), 1)
          ]),
          _: 1
        }),
        e.options !== null ? (i(), d("div", Is, [
          (i(!0), d(I, null, Y(e.options, (s) => (i(), K(h(Eo), {
            as: "template",
            key: s.id,
            value: s
          }, {
            default: F(({ checked: u, active: c }) => [
              r("div", {
                class: G([" transition-colors duration-100 ease-out", u ? "border-transparent" : "border-gray-300 hover:border-mpao-lightblue", c ? "border-mpao-lightblue ring-1 ring-mpao-lightblue" : "", "mb-3 relative flex cursor-pointer rounded-lg border bg-white px-3 py-2 shadow-sm focus:outline-none"])
              }, [
                r("span", Ns, [
                  r("span", Vs, [
                    A(h(vt), {
                      as: "span",
                      class: "block text-sm font-medium text-gray-900"
                    }, {
                      default: F(() => [
                        ve(x(s.title), 1)
                      ]),
                      _: 2
                    }, 1024),
                    s.description ? (i(), K(h(Ao), {
                      key: 0,
                      as: "span",
                      class: "mt-1 flex items-center text-sm text-gray-500"
                    }, {
                      default: F(() => [
                        ve(x(s.description), 1)
                      ]),
                      _: 2
                    }, 1024)) : C("", !0)
                  ])
                ]),
                A(h(Ln), {
                  class: G([u ? "" : "invisible", "h-5 w-5 ml-2 text-mpao-lightblue"]),
                  "aria-hidden": "true"
                }, null, 8, ["class"]),
                r("span", {
                  class: G(["border", u ? "border-mpao-lightblue" : "border-transparent", "pointer-events-none absolute -inset-px rounded-lg"]),
                  "aria-hidden": "true"
                }, null, 2)
              ], 2)
            ]),
            _: 2
          }, 1032, ["value"]))), 128))
        ])) : C("", !0)
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), zs = { class: "bg-white relative group focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500" }, Hs = { class: "block p-4 transition-colors duration-75 ease-linear" }, qs = { class: "flex items-start space-x-2" }, Us = { class: "flex items-start space-x-1" }, Gs = { class: "block text-2xl font-light text-slate-600" }, Ws = {
  key: 0,
  class: "text-sm text-green-500 font-medium pt-1"
}, Ks = { class: "text-sm tracking-wide text-slate-500" }, Ys = {
  name: "PoStatsBlock"
}, Zr = /* @__PURE__ */ Object.assign(Ys, {
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
      default: "grid-cols-1 lg:grid-cols-3"
    }
  },
  setup(e) {
    return (t, a) => (i(), d("div", {
      class: G(["rounded-md bg-slate-200 overflow-hidden divide-y divide-slate-200 sm:divide-y-0 grid gap-px", e.numberOfCols])
    }, [
      (i(!0), d(I, null, Y(e.items, (l) => (i(), d("div", zs, [
        r("span", Hs, [
          r("div", qs, [
            r("div", null, [
              r("span", {
                class: G(["inline-flex p-2 rounded-md", l.bgColor, l.iconColor])
              }, [
                (i(), K(Ce(l.icon), { class: "w-4 h-4" }))
              ], 2)
            ]),
            r("div", null, [
              r("div", Us, [
                r("span", Gs, x(l.value), 1),
                l.diff ? (i(), d("span", Ws, x(l.diff), 1)) : C("", !0)
              ]),
              r("h4", Ks, x(l.label), 1)
            ])
          ])
        ])
      ]))), 256))
    ], 2));
  }
}), Qs = {
  key: 0,
  class: "flex space-x-3 items-start"
}, Js = { class: "flex items-center space-x-2" }, Xs = ["datetime"], Zs = { class: "text-sm font-medium text-slate-600" }, er = ["datetime"], tr = { class: "flex" }, lr = { class: "flex pt-3 flex-wrap max-w-sm" }, ar = ["onClick"], nr = {
  key: 1,
  class: "w-full text-center"
}, or = { class: "inline-block text-sm italic text-slate-500" }, sr = /* @__PURE__ */ r("span", { class: "text-lg text-slate-300 px-3inline-block" }, "—", -1), rr = ["datetime"], ir = {
  name: "PoChatLogItem"
}, ei = /* @__PURE__ */ Object.assign(ir, {
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
      class: G(["flex px-5", { "justify-end items-end flex-col": e.item.type === "first" }])
    }, [
      e.item.type !== "message" ? (i(), d("div", Qs, [
        e.item.type !== "first" && e.item.avatar !== "" ? (i(), d("div", {
          key: 0,
          class: "shrink-0 w-8 h-8 rounded-full p-1 bg-contain bg-slate-100",
          style: tl({ "background-image": `url(${e.item.avatar})` })
        }, null, 4)) : C("", !0),
        r("div", {
          class: G([{ "pt-1": e.item.type !== "first" }, { "flex justify-end items-end flex-col": e.item.type === "first" }])
        }, [
          r("span", Js, [
            e.item.type === "first" ? (i(), d("time", {
              key: 0,
              datetime: e.item.time,
              class: "text-xs text-slate-400"
            }, x(e.item.time_human), 9, Xs)) : C("", !0),
            r("span", Zs, x(e.item.name), 1),
            e.item.type === "second" ? (i(), d("time", {
              key: 1,
              datetime: e.item.time,
              class: "text-xs text-slate-400"
            }, x(e.item.time_human), 9, er)) : C("", !0)
          ]),
          r("div", {
            class: G(["mt-2 space-y-1", { "flex justify-end items-end flex-col": e.item.type === "first" }])
          }, [
            se(t.$slots, "message", {}, () => [
              (i(!0), d(I, null, Y(e.item.message, (l) => (i(), d("div", tr, [
                r("p", {
                  class: G(["text-sm rounded-xl px-4 py-2", { "bg-slate-100 text-slate-600": e.item.type !== "first" }, { "bg-mpao-lightblue text-sky-50": e.item.type === "first" }])
                }, x(l), 3)
              ]))), 256))
            ]),
            r("div", lr, [
              (i(!0), d(I, null, Y(e.item.actions, (l) => (i(), d("button", {
                onClick: (n) => t.$emit("button-click", l.label),
                class: "appearance-none border border-mpao-lightblue bg-white hover:bg-mpao-lightblue px-3 py-1 mb-2 mr-2 rounded-lg text-slate-500 hover:text-sky-100 transition-colors duration-150 ease-in-out text-sm ring-0 outline-none"
              }, x(l.label), 9, ar))), 256))
            ])
          ], 2)
        ], 2)
      ])) : C("", !0),
      e.item.type === "message" ? (i(), d("div", nr, [
        (i(!0), d(I, null, Y(e.item.message, (l) => (i(), d("p", or, [
          ve(x(l) + " ", 1),
          sr,
          ve(),
          r("time", {
            datetime: e.item.time,
            class: "text-xs text-slate-400 inline-block"
          }, x(e.item.time_human), 9, rr)
        ]))), 256))
      ])) : C("", !0)
    ], 2));
  }
}), ur = {
  key: 0,
  class: "pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-mpao-lightblue shadow-lg ring-1 ring-black ring-opacity-5"
}, dr = { class: "p-4" }, cr = { class: "flex items-start" }, pr = { class: "flex-shrink-0" }, fr = { class: "ml-3 w-0 flex-1 pt-0.5" }, vr = { class: "text-sm font-medium text-sky-100" }, mr = { class: "mt-1 text-sm text-sky-300" }, br = { class: "mt-3 flex space-x-4" }, hr = { class: "ml-4 flex flex-shrink-0" }, gr = /* @__PURE__ */ r("span", { class: "sr-only" }, "Close", -1), yr = {
  name: "PoNotification"
}, ti = /* @__PURE__ */ Object.assign(yr, {
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
    const t = e, { show: a } = Ye(t), l = w(!1);
    Z(a, () => {
      l.value = !1, setTimeout(() => {
        l.value = !0;
      }, 100);
    });
    const n = w(!1);
    return Z(l, () => {
      n.value = !1, setTimeout(() => {
        n.value = !0;
      }, 200);
    }), (o, s) => l.value ? (i(), K(bt, {
      key: 0,
      to: "#po-notifications-alert"
    }, [
      A(ll, {
        "enter-active-class": "transform ease-out duration-300 transition",
        "enter-from-class": "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2",
        "enter-to-class": "translate-y-0 opacity-100 sm:translate-x-0",
        "leave-active-class": "transition ease-in duration-100",
        "leave-from-class": "opacity-100",
        "leave-to-class": "opacity-0"
      }, {
        default: F(() => [
          n.value ? (i(), d("div", ur, [
            r("div", dr, [
              r("div", cr, [
                r("div", pr, [
                  se(o.$slots, "icon")
                ]),
                r("div", fr, [
                  r("p", vr, x(e.label), 1),
                  r("p", mr, x(e.text), 1),
                  r("div", br, [
                    r("button", {
                      onClick: s[0] || (s[0] = (u) => o.$emit("button-click", e.buttonLabel)),
                      type: "button",
                      class: "rounded-md bg-mpao-lightblue text-sm font-medium text-sky-100 hover:text-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:ring-offset-2"
                    }, x(e.buttonLabel), 1),
                    r("button", {
                      onClick: s[1] || (s[1] = (u) => l.value = !1),
                      type: "button",
                      class: "rounded-md bg-mpao-lightblue text-sm font-medium text-sky-300 hover:text-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:ring-offset-2"
                    }, "Dismiss")
                  ])
                ]),
                r("div", hr, [
                  r("button", {
                    type: "button",
                    onClick: s[2] || (s[2] = (u) => l.value = !1),
                    class: "inline-flex rounded-md bg-mpao-lightblue text-sky-500 hover:text-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:ring-offset-2"
                  }, [
                    gr,
                    A(h(In), {
                      class: "h-5 w-5",
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
}), xr = /* @__PURE__ */ r("div", { class: "fixed inset-0" }, null, -1), wr = { class: "fixed inset-0 overflow-hidden" }, $r = { class: "absolute inset-0 overflow-hidden" }, kr = { class: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10" }, _r = { class: "flex h-full flex-col overflow-y-scroll bg-white shadow-xl" }, Sr = { class: "bg-slate-50 py-6 px-4 sm:px-6" }, Pr = { class: "flex items-center justify-between" }, Or = { class: "ml-3 flex h-7 items-center" }, Cr = /* @__PURE__ */ r("span", { class: "sr-only" }, "Close panel", -1), Er = {
  key: 0,
  class: "mt-1"
}, Ar = { class: "text-sm text-slate-500" }, Tr = { class: "relative flex-1 py-6 px-4 sm:px-6" }, Rr = {
  name: "PoSlideover"
}, li = /* @__PURE__ */ Object.assign(Rr, {
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
    }
  },
  setup(e) {
    const t = e, { show: a } = Ye(t), l = w(!1);
    return Z(a, () => {
      l.value = !1, setTimeout(() => {
        l.value = !0;
      }, 100);
    }), (n, o) => (i(), K(h(ot), {
      as: "template",
      show: l.value
    }, {
      default: F(() => [
        A(h(It), {
          as: "div",
          class: "relative z-50",
          onClose: o[1] || (o[1] = (s) => l.value = !1)
        }, {
          default: F(() => [
            xr,
            r("div", wr, [
              r("div", $r, [
                r("div", kr, [
                  A(h(je), {
                    as: "template",
                    enter: "transform transition ease-in-out duration-500 sm:duration-700",
                    "enter-from": "translate-x-full",
                    "enter-to": "translate-x-0",
                    leave: "transform transition ease-in-out duration-500 sm:duration-700",
                    "leave-from": "translate-x-0",
                    "leave-to": "translate-x-full"
                  }, {
                    default: F(() => [
                      A(h(Nt), { class: "pointer-events-auto w-screen max-w-lg" }, {
                        default: F(() => [
                          r("div", _r, [
                            r("div", Sr, [
                              r("div", Pr, [
                                A(h(So), { class: "text-lg font-medium text-slate-600" }, {
                                  default: F(() => [
                                    ve(x(e.label), 1)
                                  ]),
                                  _: 1
                                }),
                                r("div", Or, [
                                  r("button", {
                                    type: "button",
                                    class: "rounded-md text-slate-500 hover:text-mpao-lightblue focus:outline-none focus:ring-2 focus:ring-white",
                                    onClick: o[0] || (o[0] = (s) => l.value = !1)
                                  }, [
                                    Cr,
                                    A(h(ht), {
                                      class: "h-6 w-6",
                                      "aria-hidden": "true"
                                    })
                                  ])
                                ])
                              ]),
                              e.description ? (i(), d("div", Er, [
                                r("p", Ar, x(e.description), 1)
                              ])) : C("", !0)
                            ]),
                            r("div", Tr, [
                              se(n.$slots, "content")
                            ])
                          ])
                        ]),
                        _: 3
                      })
                    ]),
                    _: 3
                  })
                ])
              ])
            ])
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["show"]));
  }
});
export {
  Dr as PoActionBar,
  Cl as PoAppIcon,
  Ul as PoAppTray,
  Ko as PoButton,
  Fr as PoCard,
  Ir as PoCardSearch,
  ei as PoChatLogItem,
  Kr as PoCheckbox,
  Mr as PoDescriptionList,
  Qr as PoFooter,
  Jr as PoFormStatusMessage,
  zr as PoInputField,
  Hr as PoInputFile,
  Ur as PoModal,
  ti as PoNotification,
  sa as PoNotificationHub,
  Nr as PoPageTitle,
  ln as PoPagination,
  Pa as PoProfileSwitcher,
  Xr as PoRadioInput,
  jl as PoSearchBar,
  Wr as PoSectionMenu,
  qr as PoSelectField,
  Br as PoSidebarDrawer,
  li as PoSlideover,
  Zr as PoStatsBlock,
  Vr as PoTable,
  Yr as PoTextarea,
  Gr as PoToggle,
  Lr as PoTopBar
};
