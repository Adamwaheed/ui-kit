import { openBlock as i, createElementBlock as p, createElementVNode as r, createVNode as S, unref as m, withCtx as L, renderSlot as ne, createBlock as K, createCommentVNode as E, toDisplayString as g, ref as w, onMounted as z, onUnmounted as se, withDirectives as Qt, isRef as Jt, vModelText as Xt, Fragment as I, renderList as Y, normalizeClass as G, resolveDynamicComponent as Ee, normalizeProps as it, guardReactiveProps as ut, mergeProps as we, cloneVNode as Zt, h as q, inject as ee, provide as oe, watchEffect as J, computed as y, defineComponent as N, toRaw as F, watch as X, nextTick as fe, Teleport as gt, reactive as eo, createTextVNode as pe, toRefs as Ae, createStaticVNode as to, normalizeStyle as oo, Transition as lo, onBeforeUnmount as ao } from "vue";
function no(e, t) {
  return i(), p("svg", {
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
function so(e, t) {
  return i(), p("svg", {
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
function ro(e, t) {
  return i(), p("svg", {
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
function io(e, t) {
  return i(), p("svg", {
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
function uo(e, t) {
  return i(), p("svg", {
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
function po(e, t) {
  return i(), p("svg", {
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
function co(e, t) {
  return i(), p("svg", {
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
function fo(e, t) {
  return i(), p("svg", {
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
function vo(e, t) {
  return i(), p("svg", {
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
function mo(e, t) {
  return i(), p("svg", {
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
function bo(e, t) {
  return i(), p("svg", {
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
function Ze(e, t) {
  return i(), p("svg", {
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
function ho(e, t) {
  return i(), p("svg", {
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
function go(e, t) {
  return i(), p("svg", {
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
function pt(e, t) {
  return i(), p("svg", {
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
function yt(e, t) {
  return i(), p("svg", {
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
const yo = { class: "po-bg-mpao-blue po-fixed po-top-0 po-w-full po-z-50 po-flex" }, xo = { class: "po-shrink-0 po-px-3 po-pt-3" }, wo = {
  for: "sidebar-drawer-toggle",
  role: "button",
  class: "genie-effect po-flex po-items-center po-justify-center po-bg-[#2e5266] po-rounded-full po-w-10 po-h-10 po-select-none po-text-slate-100"
}, $o = { class: "po-mx-auto po-max-w-full po-px-4 po-grow sm:po-px-4" }, ko = { class: "po-flex po-h-16 po-items-center po-justify-between po-space-x-12" }, _o = { class: "po-flex po-items-center po-space-x-3" }, So = {
  key: 0,
  class: "po-block po-w-6 po-text-slate-100 sm:po-hidden",
  role: "button"
}, Po = {
  name: "PoTopBar"
}, Wr = /* @__PURE__ */ Object.assign(Po, {
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
    function l(o) {
      t("query", o);
    }
    return (o, a) => (i(), p("nav", yo, [
      r("div", xo, [
        r("label", wo, [
          S(m(io), { class: "po-w-6 po-fill-current" })
        ])
      ]),
      r("div", $o, [
        r("div", ko, [
          S(m(To), { "app-name": e.appName }, {
            icon: L(() => [
              ne(o.$slots, "appIcon")
            ]),
            _: 3
          }, 8, ["app-name"]),
          e.hasSearch ? (i(), K(m(Do), {
            key: 0,
            onQuery: l
          })) : E("", !0),
          r("div", _o, [
            e.hasSearch ? (i(), p("span", So, [
              S(m(Ze), { class: "po-stroke-current" })
            ])) : E("", !0),
            S(m(ul), {
              notifications: e.notifications,
              "has-new-notifications": e.hasNewNotifications
            }, null, 8, ["notifications", "has-new-notifications"]),
            S(m(Wo), { "app-list": e.appList }, null, 8, ["app-list"]),
            S(m(El), { "profile-switcher-data": e.profileSwitcherData }, null, 8, ["profile-switcher-data"])
          ])
        ])
      ])
    ]));
  }
}), Oo = { class: "po-flex po-items-center po-space-x-3" }, Co = { class: "po-w-7 po-text-slate-100" }, Eo = { class: "po-font-light po-text-lg po-text-slate-100" }, Ao = {
  name: "PoAppIcon"
}, To = /* @__PURE__ */ Object.assign(Ao, {
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
    return (t, l) => (i(), p("div", Oo, [
      r("div", Co, [
        ne(t.$slots, "icon")
      ]),
      r("span", Eo, g(e.appName), 1)
    ]));
  }
}), jo = { class: "po-flex-grow po-hidden po-relative sm:po-block" }, Lo = ["placeholder"], Ro = { class: "po-absolute po-inset-y-0 po-left-0 po-flex po-items-center po-pl-3 po-pointer-events-none po-transition-all po-ease-linear po-duration-100 po-text-slate-400 po-origin-center peer-hover/search:po-scale-105 peer-focus/search:po-text-slate-100" }, Bo = {
  name: "PoSearchBar"
}, Do = /* @__PURE__ */ Object.assign(Bo, {
  props: {
    placeholder: {
      type: String,
      default: "Search"
    }
  },
  emits: ["query"],
  setup(e, { emit: t }) {
    let l = w("");
    const o = (a) => {
      a.key === "Enter" && 0 < l.value.length && t("query", l.value);
    };
    return z(() => document.addEventListener("keydown", o)), se(() => {
      document.removeEventListener("keydown", o);
    }), (a, n) => (i(), p("div", jo, [
      Qt(r("input", {
        "onUpdate:modelValue": n[0] || (n[0] = (s) => Jt(l) ? l.value = s : l = s),
        type: "text",
        id: "main-search",
        placeholder: e.placeholder,
        class: "peer/search po-bg-transparent po-border po-border-transparent po-text-slate-100 po-text-sm po-rounded-md po-ring-0 po-outline-none focus:po-outline-none focus:po-ring-0 po-transition-colors po-ease-linear po-duration-100 po-block po-w-full po-pl-10 po-p-2.5 po-appearance-none focus:po-border-slate-400 hover:po-border-slate-600"
      }, null, 8, Lo), [
        [Xt, m(l)]
      ]),
      r("div", Ro, [
        S(m(Ze), { class: "po-w-5 po-h-5 po-stroke-current" })
      ])
    ]));
  }
}), Fo = { class: "po-relative" }, Io = {
  for: "apps-menu-toggle",
  class: "po-block po-w-6 po-text-slate-100 po-genie-effect po-z-50",
  role: "button"
}, Mo = /* @__PURE__ */ r("input", {
  type: "checkbox",
  name: "",
  class: "po-hidden peer/apps",
  role: "none",
  id: "apps-menu-toggle"
}, null, -1), No = { class: "po-invisible po-z-10 po-absolute -po-left-[19rem] po-top-[35px] po-opacity-0 po-bg-white po-shadow-lg po-rounded-md po-w-96 po-p-4 po-border po-border-slate-200 po-pt-5 po-space-y-5 po-transition-all po-duration-100 po-ease-linear sm:po-left-auto sm:po-right-0 peer-checked/apps:po-visible peer-checked/apps:po-top-[45px] peer-checked/apps:po-opacity-100" }, Vo = {
  key: 0,
  class: "po-text-sm po-font-normal po-text-slate-400 po-select-none"
}, zo = { class: "po-grid po-grid-cols-3 po-gap-3 po-py-3" }, Ho = ["href"], qo = { class: "po-block po-w-10 po-rounded-md po-transition-shadow po-duration-100 po-ease-in-out po-shadow-md group-hover:po-shadow-xl po-overflow-hidden" }, Uo = ["src", "alt"], Go = { class: "po-text-slate-600 po-font-normal po-text-sm" }, Ko = {
  name: "PoAppTray"
}, Wo = /* @__PURE__ */ Object.assign(Ko, {
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
    return (t, l) => (i(), p("div", Fo, [
      r("label", Io, [
        S(m(go))
      ]),
      Mo,
      r("div", No, [
        (i(!0), p(I, null, Y(e.appList, (o) => (i(), p("div", null, [
          o.groupName.length > 0 ? (i(), p("span", Vo, g(o.groupName), 1)) : E("", !0),
          r("ul", zo, [
            (i(!0), p(I, null, Y(o.apps, (a) => (i(), p("li", null, [
              r("a", {
                href: a.url,
                class: "po-flex po-flex-col po-group po-space-y-3 po-justify-center po-items-center po-py-2 genie-effect"
              }, [
                r("span", qo, [
                  r("img", {
                    src: a.icon,
                    alt: `${a.name} icon`
                  }, null, 8, Uo)
                ]),
                r("span", Go, g(a.name), 1)
              ], 8, Ho)
            ]))), 256))
          ])
        ]))), 256))
      ])
    ]));
  }
}), Yo = { class: "relative" }, Qo = {
  for: "notifications-menu-toggle",
  class: "po-block po-w-6 po-text-slate-100 genie-effect po-relative po-z-50",
  role: "button"
}, Jo = {
  key: 0,
  class: "po-absolute po-right-0 po-w-3 po-h-3 po-bg-mpao-orange po-rounded-full po-border-2 po-border-mpao-blue"
}, Xo = /* @__PURE__ */ r("input", {
  type: "checkbox",
  name: "",
  class: "po-hidden peer/apps",
  role: "none",
  id: "notifications-menu-toggle"
}, null, -1), Zo = { class: "po-invisible po-z-10 po-absolute -po-left-[19rem] po-top-[35px] po-opacity-0 po-bg-white po-shadow-lg po-rounded-md po-w-96 po-p-4 po-border po-border-slate-200 po-pt-5 po-transition-all po-duration-100 po-ease-linear sm:po-left-auto sm:po-right-0 peer-checked/apps:po-visible peer-checked/apps:po-top-[45px] peer-checked/apps:po-opacity-100" }, el = { class: "po-space-y-2 po-p-2" }, tl = { class: "po-space-y-2 po-p-2" }, ol = { class: "po-flex po-items-center po-justify-between" }, ll = { class: "po-text-sm po-font-semibold po-text-slate-700 po-grow po-flex po-space-x-2 po-items-center" }, al = {
  key: 0,
  class: "w-2 h-2 rounded-full shrink-0 bg-mpao-orange"
}, nl = { class: "grow" }, sl = { class: "po-text-xs po-font-normal po-text-slate-400 po-shrink-0" }, rl = { class: "po-block po-text-sm po-text-slate-500 po-pb-3 po-border-b po-border-slate-200" }, il = {
  name: "PoNotificationHub"
}, ul = /* @__PURE__ */ Object.assign(il, {
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
    return (t, l) => (i(), p("div", Yo, [
      r("label", Qo, [
        e.hasNewNotifications ? (i(), p("span", Jo)) : E("", !0),
        S(m(uo), { class: "po-stroke-current" })
      ]),
      Xo,
      r("div", Zo, [
        r("ul", el, [
          (i(!0), p(I, null, Y(e.notifications, (o) => (i(), p("li", tl, [
            r("span", ol, [
              r("p", ll, [
                o.seen ? E("", !0) : (i(), p("span", al)),
                r("span", nl, g(o.name), 1)
              ]),
              r("span", sl, g(o.time), 1)
            ]),
            r("span", rl, g(o.text), 1)
          ]))), 256))
        ])
      ])
    ]));
  }
}), pl = { class: "po-relative" }, dl = {
  for: "profile-toggle",
  class: "po-select-none po-rounded-full po-w-10 po-h-10 po-bg-[#2e5266] po-flex po-items-center po-justify-center genie-effect po-z-50",
  role: "button"
}, cl = { class: "po-text-xs po-text-white po-font-semibold" }, fl = /* @__PURE__ */ r("input", {
  type: "checkbox",
  name: "",
  class: "po-hidden peer/profile",
  role: "none",
  id: "profile-toggle"
}, null, -1), vl = { class: "po-invisible po-space-y-1 po-z-10 po-absolute po-right-0 po-top-[45px] po-opacity-0 po-bg-white po-shadow-lg po-rounded-md po-w-96 po-p-4 po-border po-border-slate-200 po-pt-5 po-transition-all po-duration-100 po-ease-linear peer-checked/profile:po-visible peer-checked/profile:po-top-[54px] peer-checked/profile:po-opacity-100" }, ml = ["href"], bl = { class: "po-w-5" }, hl = { class: "po-flex po-flex-col po-space-y-1" }, gl = { class: "po-text-sm po-font-normal" }, yl = {
  key: 0,
  class: "po-text-xs po-text-slate-400"
}, xl = /* @__PURE__ */ r("hr", { class: "po-border-slate-200" }, null, -1), wl = { class: "md:po-grid po-grid-cols-2" }, $l = ["href"], kl = { class: "po-w-5" }, _l = /* @__PURE__ */ r("span", { class: "po-text-sm po-font-normal" }, "Profile", -1), Sl = {
  href: "#",
  class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-white hover:po-bg-slate-100",
  role: "button"
}, Pl = { class: "po-w-5" }, Ol = /* @__PURE__ */ r("span", { class: "po-text-sm po-font-normal" }, "Logout", -1), Cl = {
  name: "PoProfileSwitcher"
}, El = /* @__PURE__ */ Object.assign(Cl, {
  props: {
    profileSwitcherData: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    return (t, l) => (i(), p("div", pl, [
      r("label", dl, [
        r("span", cl, g(e.profileSwitcherData.currProfileLabel), 1)
      ]),
      fl,
      r("div", vl, [
        (i(!0), p(I, null, Y(e.profileSwitcherData.profiles, (o) => (i(), p("a", {
          href: o.url,
          class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-white hover:po-bg-slate-100",
          role: "button"
        }, [
          r("span", bl, [
            o.isPersonal ? (i(), K(m(pt), {
              key: 0,
              class: G(["po-stroke-current", { "po-stroke-mpao-orange": o.current }])
            }, null, 8, ["class"])) : E("", !0),
            o.isPersonal ? E("", !0) : (i(), K(m(po), {
              key: 1,
              class: G(["po-stroke-current", { "po-stroke-mpao-orange": o.current }])
            }, null, 8, ["class"]))
          ]),
          r("span", hl, [
            r("span", gl, g(o.name), 1),
            o.identifier.length !== 0 ? (i(), p("span", yl, g(o.identifier), 1)) : E("", !0)
          ])
        ], 8, ml))), 256)),
        xl,
        r("div", wl, [
          r("a", {
            href: e.profileSwitcherData.currentProfileUrl,
            class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-white hover:po-bg-slate-100",
            role: "button"
          }, [
            r("span", kl, [
              S(m(pt), { class: "po-stroke-current" })
            ]),
            _l
          ], 8, $l),
          r("a", Sl, [
            r("span", Pl, [
              S(m(so), { class: "po-stroke-current" })
            ]),
            Ol
          ])
        ])
      ])
    ]));
  }
}), Al = /* @__PURE__ */ r("input", {
  type: "checkbox",
  name: "",
  class: "po-hidden shell-sidebar--toggle",
  role: "none",
  id: "sidebar-drawer-toggle",
  checked: "",
  "aria-checked": "true"
}, null, -1), Tl = { class: "shell-sidebar" }, jl = { class: "shell-sidebar--section" }, Ll = { class: "shell-sidebar--menu" }, Rl = ["onClick", "title"], Bl = { class: "shell-sidebar--icon" }, Dl = { class: "shell-sidebar--label" }, Fl = {
  name: "PoSidebarDrawer"
}, Yr = /* @__PURE__ */ Object.assign(Fl, {
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
    return (t, l) => (i(), p(I, null, [
      Al,
      r("aside", Tl, [
        (i(!0), p(I, null, Y(e.content, (o) => (i(), p("div", null, [
          r("span", jl, g(o.groupName), 1),
          r("ul", Ll, [
            (i(!0), p(I, null, Y(o.items, (a) => (i(), p("li", null, [
              r("button", {
                onClick: (n) => t.$emit("button-click", a.url),
                class: G(["shell-sidebar--item", { active: a.url == e.currRoute }]),
                title: `Go to ${a.label}`
              }, [
                r("span", Bl, [
                  (i(), K(Ee(a.icon), { class: "po-stroke-current po-w-4 po-h-4" }))
                ]),
                r("span", Dl, g(a.label), 1)
              ], 10, Rl)
            ]))), 256))
          ])
        ]))), 256))
      ])
    ], 64));
  }
}), Il = { class: "shell-content--action-bar" }, Ml = { class: "action-bar__nav" }, Nl = ["onClick"], Vl = { class: "action-bar__nav_label" }, zl = {
  key: 0,
  class: "po-shrink-0 po-flex po-space-x-1"
}, Hl = {
  name: "PoActionBar"
}, Qr = /* @__PURE__ */ Object.assign(Hl, {
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
    return (t, l) => (i(), p("section", Il, [
      r("nav", Ml, [
        (i(!0), p(I, null, Y(e.items, (o) => (i(), p("span", {
          onClick: (a) => t.$emit("button-click", o.label),
          class: "action-bar__nav_link"
        }, [
          (i(), K(Ee(o.icon), { class: "po-stroke-current po-w-5 po-h-5" })),
          r("span", Vl, g(o.label), 1)
        ], 8, Nl))), 256))
      ]),
      e.showBackButton ? (i(), p("nav", zl, [
        r("span", {
          onClick: l[0] || (l[0] = (o) => t.$emit("button-click", "back")),
          class: "action-bar__nav_link"
        }, [
          (i(), K(Ee(m(ro)), { class: "po-stroke-current po-w-5 po-h-5" }))
        ])
      ])) : E("", !0)
    ]));
  }
}), ql = { class: "po-shadow-md po-rounded-xl po-bg-white" }, Ul = {
  key: 0,
  class: "po-text-base po-font-medium po-text-slate-600"
}, Gl = {
  name: "PoCard"
}, Jr = /* @__PURE__ */ Object.assign(Gl, {
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
    return (t, l) => (i(), p("div", ql, [
      e.title.length > 0 ? (i(), p("h3", Ul, g(e.title), 1)) : E("", !0),
      ne(t.$slots, "content")
    ]));
  }
}), Kl = { class: "po-py-3 po-px-5 po-border-b po-border-slate-200" }, Wl = {
  class: "po-flex po-w-full md:po-ml-0",
  action: "#",
  method: "GET"
}, Yl = {
  for: "search-field",
  class: "po-sr-only"
}, Ql = { class: "po-relative po-w-full po-text-slate-400 focus-within:po-text-mpao-lightblue po-transition-colors po-duration-100 po-ease-in-out" }, Jl = { class: "po-pointer-events-none po-absolute po-inset-y-0 po-left-0 po-flex po-items-center" }, Xl = ["placeholder", "value"], Zl = {
  name: "PoCardSearch"
}, Xr = /* @__PURE__ */ Object.assign(Zl, {
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
    return (t, l) => (i(), p("div", Kl, [
      r("form", Wl, [
        r("label", Yl, g(e.placeholder), 1),
        r("div", Ql, [
          r("div", Jl, [
            S(m(Ze), { class: "po-h-5 po-w-5 po-flex-shrink-0" })
          ]),
          r("input", {
            name: "search-field",
            id: "desktop-search-field",
            placeholder: e.placeholder,
            value: e.modelValue,
            onInput: l[0] || (l[0] = (o) => t.$emit("update:modelValue", o.target.value)),
            class: "po-h-full po-w-full po-border-transparent po-py-2 po-pl-8 po-pr-3 po-text-sm po-text-slate-700 po-placeholder-slate-500 focus:po-border-transparent focus:po-placeholder-slate-400 focus:po-outline-none focus:po-ring-0",
            type: "search"
          }, null, 40, Xl)
        ])
      ])
    ]));
  }
}), ea = {
  key: 0,
  class: "po-flex po-items-center"
}, ta = { class: "po-text-xs po-font-normal po-text-slate-500 po-pr-2" }, oa = {
  name: "PoPagination"
}, la = /* @__PURE__ */ Object.assign(oa, {
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
    return (t, l) => e.pagination !== null ? (i(), p("div", ea, [
      r("span", ta, g(e.pagination.label), 1),
      e.pagination.nextLink !== null ? (i(), p("button", {
        key: 0,
        title: "Previous",
        onClick: l[0] || (l[0] = (o) => t.$emit("button-click", "prev")),
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        S(m(fo), { class: "po-w-4 po-stroke-current" })
      ])) : E("", !0),
      e.pagination.prevLink !== null ? (i(), p("button", {
        key: 1,
        title: "Next",
        onClick: l[1] || (l[1] = (o) => t.$emit("button-click", "next")),
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        S(m(vo), { class: "po-w-4 po-stroke-current" })
      ])) : E("", !0)
    ])) : E("", !0);
  }
}), aa = { class: "po-flex po-items-center po-space-x-1" }, na = { class: "po-text-xl po-font-semibold po-text-slate-800 po-grow" }, sa = {
  key: 2,
  class: "po-border-l po-border-slate-400 po-h-3 po-w-3 po-ml-1"
}, ra = {
  name: "PoPageTitle"
}, Zr = /* @__PURE__ */ Object.assign(ra, {
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
    return (l, o) => (i(), p("div", aa, [
      r("h1", na, g(e.label), 1),
      e.showFilter ? (i(), p("button", {
        key: 0,
        title: "Filter",
        onClick: o[0] || (o[0] = (a) => {
          l.$emit("button-click", "filter"), t.value = !t.value;
        }),
        class: G(["po-p-2 po-rounded-md hover:po-bg-slate-200 po-transition-colors po-duration-75 po-ease-in-out", { "po-text-mpao-orange hover:po-text-mpao-orange": t.value }, { "tpo-ext-slate-600 hover:po-text-mpao-blue": !t.value }])
      }, [
        S(m(bo), { class: "po-w-4 po-stroke-current" })
      ], 2)) : E("", !0),
      e.showDownload ? (i(), p("button", {
        key: 1,
        title: "Download",
        onClick: o[1] || (o[1] = (a) => l.$emit("button-click", "download")),
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        S(m(no), { class: "po-w-4 po-stroke-current" })
      ])) : E("", !0),
      e.showFilter && e.showPagination || e.showDownload && e.showPagination ? (i(), p("span", sa, " ")) : E("", !0),
      e.showPagination ? (i(), K(la, {
        key: 3,
        pagination: e.pagination
      }, null, 8, ["pagination"])) : E("", !0)
    ]));
  }
}), ia = { class: "table-responsive po-w-full" }, ua = { key: 1 }, pa = ["colspan"], da = { class: "po-py-10 po-block po-normal-case" }, ca = {
  name: "PoTable"
}, ei = /* @__PURE__ */ Object.assign(ca, {
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
    return (t, l) => (i(), p("table", ia, [
      r("thead", null, [
        r("tr", null, [
          (i(!0), p(I, null, Y(e.thead, (o) => (i(), p("th", null, [
            ne(t.$slots, "th", it(ut(o)))
          ]))), 256))
        ])
      ]),
      r("tbody", null, [
        e.tbody !== null || e.tbody !== null && e.tbody.length !== 0 ? (i(!0), p(I, { key: 0 }, Y(e.tbody, (o) => (i(), p("tr", null, [
          ne(t.$slots, "td", it(ut(o)))
        ]))), 256)) : E("", !0),
        e.tbody == null || e.tbody !== null && e.tbody.length == 0 ? (i(), p("tr", ua, [
          r("td", {
            colspan: e.thead.length + 1,
            class: "po-text-center"
          }, [
            r("span", da, g(e.emptyMessage), 1)
          ], 8, pa)
        ])) : E("", !0)
      ])
    ]));
  }
}), fa = { class: "" }, va = { class: "po-grow" }, ma = ["onClick"], ba = {
  name: "PoDescriptionList"
}, ti = /* @__PURE__ */ Object.assign(ba, {
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
    return (t, l) => (i(), p("dl", {
      class: G(["po-description-list", { "po-divide-y po-divide-slate-200": !e.striped }, { striped: e.striped }])
    }, [
      ne(t.$slots, "content", {}, () => [
        (i(!0), p(I, null, Y(e.items, (o) => (i(), p("div", null, [
          r("dt", null, g(o.title), 1),
          r("dd", fa, [
            r("span", va, g(o.description), 1),
            o.action !== void 0 ? (i(), p("span", {
              key: 0,
              class: "po-shrink-0 po-text-mpao-lightblue hover:po-text-mpao-blue po-transition-colors po-duration-100 po-ease-in-out po-px-2 po-cursor-pointer",
              onClick: (a) => t.$emit("button-click", o.action)
            }, g(o.action), 9, ma)) : E("", !0)
          ])
        ]))), 256))
      ])
    ], 2));
  }
});
function ha(e, t) {
  return i(), p("svg", {
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
function xt(e, t) {
  return i(), p("svg", {
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
const ga = { class: "po-relative po-pt-5" }, ya = ["type", "name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], xa = ["for"], wa = ["title"], $a = ["id"], ka = ["id"], _a = {
  name: "PoInputField"
}, oi = /* @__PURE__ */ Object.assign(_a, {
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
    return (t, l) => (i(), p("div", ga, [
      r("input", we({
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
        onInput: l[0] || (l[0] = (o) => t.$emit("update:modelValue", o.target.value)),
        class: ["po-mt-1 peer po-block po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white focus:po-ring-0 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default", { "po-border-red-400 focus:po-border-red-600 focus:po-ring-red-600": e.hasError }, { "po-border-slate-300 focus:po-border-mpao-lightblue": !e.hasError }]
      }), null, 16, ya),
      r("label", {
        for: e.id,
        class: G(["po-absolute po-top-0 po-text-sm po-font-medium po-flex po-items-center po-space-x-1", { "po-text-red-500 peer-focus:po-text-red-600": e.hasError }, { "po-text-slate-700 peer-focus:po-text-mpao-lightblue": !e.hasError }])
      }, [
        r("span", null, g(e.label), 1),
        e.info !== null ? (i(), p("abbr", {
          key: 0,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          S(m(xt), { class: "po-fill-current" })
        ], 8, wa)) : E("", !0)
      ], 10, xa),
      e.message !== null ? (i(), p("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, g(e.message), 9, $a)) : E("", !0),
      e.hasError && e.errorMessage !== null ? (i(), p("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-center po-space-x-1",
        id: `${e.id}-error`
      }, [
        S(m(ha), { class: "po-fill-current po-w-4" }),
        r("span", null, g(e.errorMessage), 1)
      ], 8, ka)) : E("", !0)
    ]));
  }
}), Sa = { class: "po-relative po-pt-5" }, Pa = { class: "po-text-sm po-font-medium po-text-slate-700 peer-focus:po-text-mpao-lightblue peer-invalid:po-text-red-500 peer-invalid:peer-focus:po-text-red-600 po-flex po-items-center po-space-x-1" }, Oa = ["name", "id", "value"], Ca = ["for"], Ea = { class: "po-flex po-items-center po-space-x-1" }, Aa = /* @__PURE__ */ r("span", { class: "po-text-sm" }, "Choose file", -1), Ta = ["id"], ja = ["id"], La = {
  name: "PoInputFile"
}, li = /* @__PURE__ */ Object.assign(La, {
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
    return (t, l) => (i(), p("div", Sa, [
      r("span", Pa, g(e.label), 1),
      r("input", {
        name: `${e.id}-upload`,
        id: `${e.id}-fileupload`,
        value: e.modelValue,
        type: "file",
        onInput: l[0] || (l[0] = (o) => t.$emit("update:modelValue", o.target.value)),
        class: "po-sr-only po-peer"
      }, null, 40, Oa),
      r("label", {
        for: `${e.id}-fileupload`,
        class: "po-mt-1 po-block po-w-full po-border po-cursor-pointer po-rounded-md po-border-slate-300 po-bg-white peer-focus:po-border-mpao-lightblue invalid:po-border-red-400 invalid:focus:po-border-red-600 invalid:focus:po-ring-red-600 sm:po-text-sm po-p-2"
      }, [
        r("div", Ea, [
          S(m(ho), { class: "po-w-4 po-stroke-slate-500" }),
          Aa
        ])
      ], 8, Ca),
      e.message !== null ? (i(), p("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, g(e.message), 9, Ta)) : E("", !0),
      e.errorMessage !== null ? (i(), p("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, g(e.errorMessage), 9, ja)) : E("", !0)
    ]));
  }
});
function Ra(e, t) {
  return i(), p("svg", {
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
function Ba(e, t) {
  return i(), p("svg", {
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
function Da(e, t) {
  return i(), p("svg", {
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
function Fa(e, t) {
  return i(), p("svg", {
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
function Ia(e, t) {
  return i(), p("svg", {
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
function Ma(e, t) {
  return i(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
  ]);
}
function U(e, t, ...l) {
  if (e in t) {
    let a = t[e];
    return typeof a == "function" ? a(...l) : a;
  }
  let o = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((a) => `"${a}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(o, U), o;
}
var me = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(me || {}), ve = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(ve || {});
function V({ visible: e = !0, features: t = 0, ourProps: l, theirProps: o, ...a }) {
  var n;
  let s = Na(o, l), u = Object.assign(a, { props: s });
  if (e || t & 2 && s.static)
    return Ue(u);
  if (t & 1) {
    let d = (n = s.unmount) == null || n ? 0 : 1;
    return U(d, { [0]() {
      return null;
    }, [1]() {
      return Ue({ ...a, props: { ...s, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Ue(u);
}
function Ue({ props: e, attrs: t, slots: l, slot: o, name: a }) {
  var n;
  let { as: s, ...u } = Se(e, ["unmount", "static"]), d = (n = l.default) == null ? void 0 : n.call(l, o), f = {};
  if (o) {
    let b = !1, h = [];
    for (let [x, k] of Object.entries(o))
      typeof k == "boolean" && (b = !0), k === !0 && h.push(x);
    b && (f["data-headlessui-state"] = h.join(" "));
  }
  if (s === "template") {
    if (d = wt(d ?? []), Object.keys(u).length > 0 || Object.keys(t).length > 0) {
      let [b, ...h] = d ?? [];
      if (!Va(b) || h.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${a} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(u).concat(Object.keys(t)).sort((x, k) => x.localeCompare(k)).map((x) => `  - ${x}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((x) => `  - ${x}`).join(`
`)].join(`
`));
      return Zt(b, Object.assign({}, u, f));
    }
    return Array.isArray(d) && d.length === 1 ? d[0] : d;
  }
  return q(s, Object.assign({}, u, f), { default: () => d });
}
function wt(e) {
  return e.flatMap((t) => t.type === I ? wt(t.children) : [t]);
}
function Na(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, l = {};
  for (let o of e)
    for (let a in o)
      a.startsWith("on") && typeof o[a] == "function" ? (l[a] != null || (l[a] = []), l[a].push(o[a])) : t[a] = o[a];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(l).map((o) => [o, void 0])));
  for (let o in l)
    Object.assign(t, { [o](a, ...n) {
      let s = l[o];
      for (let u of s) {
        if (a instanceof Event && a.defaultPrevented)
          return;
        u(a, ...n);
      }
    } });
  return t;
}
function et(e) {
  let t = Object.assign({}, e);
  for (let l in t)
    t[l] === void 0 && delete t[l];
  return t;
}
function Se(e, t = []) {
  let l = Object.assign({}, e);
  for (let o of t)
    o in l && delete l[o];
  return l;
}
function Va(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let za = 0;
function Ha() {
  return ++za;
}
function Z() {
  return Ha();
}
var M = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(M || {});
function qa(e) {
  throw new Error("Unexpected object: " + e);
}
var Q = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(Q || {});
function Ua(e, t) {
  let l = t.resolveItems();
  if (l.length <= 0)
    return null;
  let o = t.resolveActiveIndex(), a = o ?? -1, n = (() => {
    switch (e.focus) {
      case 0:
        return l.findIndex((s) => !t.resolveDisabled(s));
      case 1: {
        let s = l.slice().reverse().findIndex((u, d, f) => a !== -1 && f.length - d - 1 >= a ? !1 : !t.resolveDisabled(u));
        return s === -1 ? s : l.length - 1 - s;
      }
      case 2:
        return l.findIndex((s, u) => u <= a ? !1 : !t.resolveDisabled(s));
      case 3: {
        let s = l.slice().reverse().findIndex((u) => !t.resolveDisabled(u));
        return s === -1 ? s : l.length - 1 - s;
      }
      case 4:
        return l.findIndex((s) => t.resolveId(s) === e.id);
      case 5:
        return null;
      default:
        qa(e);
    }
  })();
  return n === -1 ? o : n;
}
function B(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let $t = Symbol("Context");
var ue = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ue || {});
function Ga() {
  return De() !== null;
}
function De() {
  return ee($t, null);
}
function kt(e) {
  oe($t, e);
}
function dt(e, t) {
  if (e)
    return e;
  let l = t ?? "button";
  if (typeof l == "string" && l.toLowerCase() === "button")
    return "button";
}
function _t(e, t) {
  let l = w(dt(e.value.type, e.value.as));
  return z(() => {
    l.value = dt(e.value.type, e.value.as);
  }), J(() => {
    var o;
    l.value || !B(t) || B(t) instanceof HTMLButtonElement && !((o = B(t)) != null && o.hasAttribute("type")) && (l.value = "button");
  }), l;
}
const Fe = typeof window > "u" || typeof document > "u";
function ie(e) {
  if (Fe)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = B(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
function St({ container: e, accept: t, walk: l, enabled: o }) {
  J(() => {
    let a = e.value;
    if (!a || o !== void 0 && !o.value)
      return;
    let n = ie(e);
    if (!n)
      return;
    let s = Object.assign((d) => t(d), { acceptNode: t }), u = n.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, s, !1);
    for (; u.nextNode(); )
      l(u.currentNode);
  });
}
let We = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var ae = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ae || {}), Be = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Be || {}), Ka = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Ka || {});
function Wa(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(We)).sort((t, l) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (l.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Pt = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Pt || {});
function Ya(e, t = 0) {
  var l;
  return e === ((l = ie(e)) == null ? void 0 : l.body) ? !1 : U(t, { [0]() {
    return e.matches(We);
  }, [1]() {
    let o = e;
    for (; o !== null; ) {
      if (o.matches(We))
        return !0;
      o = o.parentElement;
    }
    return !1;
  } });
}
function $e(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Qa = ["textarea", "input"].join(",");
function Ja(e) {
  var t, l;
  return (l = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Qa)) != null ? l : !1;
}
function tt(e, t = (l) => l) {
  return e.slice().sort((l, o) => {
    let a = t(l), n = t(o);
    if (a === null || n === null)
      return 0;
    let s = a.compareDocumentPosition(n);
    return s & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : s & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function ke(e, t, { sorted: l = !0, relativeTo: o = null, skipElements: a = [] } = {}) {
  var n;
  let s = (n = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? n : document, u = Array.isArray(e) ? l ? tt(e) : e : Wa(e);
  a.length > 0 && (u = u.filter((v) => !a.includes(v))), o = o ?? s.activeElement;
  let d = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), f = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, u.indexOf(o)) - 1;
    if (t & 4)
      return Math.max(0, u.indexOf(o)) + 1;
    if (t & 8)
      return u.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), b = t & 32 ? { preventScroll: !0 } : {}, h = 0, x = u.length, k;
  do {
    if (h >= x || h + x <= 0)
      return 0;
    let v = f + h;
    if (t & 16)
      v = (v + x) % x;
    else {
      if (v < 0)
        return 3;
      if (v >= x)
        return 1;
    }
    k = u[v], k == null || k.focus(b), h += d;
  } while (k !== s.activeElement);
  return t & 6 && Ja(k) && k.select(), k.hasAttribute("tabindex") || k.setAttribute("tabindex", "0"), 2;
}
function Ge(e, t, l) {
  Fe || J((o) => {
    document.addEventListener(e, t, l), o(() => document.removeEventListener(e, t, l));
  });
}
function Ot(e, t, l = y(() => !0)) {
  function o(n, s) {
    if (!l.value || n.defaultPrevented)
      return;
    let u = s(n);
    if (u === null || !u.getRootNode().contains(u))
      return;
    let d = function f(b) {
      return typeof b == "function" ? f(b()) : Array.isArray(b) || b instanceof Set ? b : [b];
    }(e);
    for (let f of d) {
      if (f === null)
        continue;
      let b = f instanceof HTMLElement ? f : B(f);
      if (b != null && b.contains(u) || n.composed && n.composedPath().includes(b))
        return;
    }
    return !Ya(u, Pt.Loose) && u.tabIndex !== -1 && n.preventDefault(), t(n, u);
  }
  let a = w(null);
  Ge("mousedown", (n) => {
    var s, u;
    l.value && (a.value = ((u = (s = n.composedPath) == null ? void 0 : s.call(n)) == null ? void 0 : u[0]) || n.target);
  }, !0), Ge("click", (n) => {
    !a.value || (o(n, () => a.value), a.value = null);
  }, !0), Ge("blur", (n) => o(n, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var ge = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(ge || {});
let _e = N({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: l }) {
  return () => {
    let { features: o, ...a } = e, n = { "aria-hidden": (o & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(o & 4) === 4 && (o & 2) !== 2 && { display: "none" } } };
    return V({ ourProps: n, theirProps: a, slot: {}, attrs: l, slots: t, name: "Hidden" });
  };
} });
function ot(e = {}, t = null, l = []) {
  for (let [o, a] of Object.entries(e))
    Et(l, Ct(t, o), a);
  return l;
}
function Ct(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Et(e, t, l) {
  if (Array.isArray(l))
    for (let [o, a] of l.entries())
      Et(e, Ct(t, o.toString()), a);
  else
    l instanceof Date ? e.push([t, l.toISOString()]) : typeof l == "boolean" ? e.push([t, l ? "1" : "0"]) : typeof l == "string" ? e.push([t, l]) : typeof l == "number" ? e.push([t, `${l}`]) : l == null ? e.push([t, ""]) : ot(l, t, e);
}
function At(e) {
  var t;
  let l = (t = e == null ? void 0 : e.form) != null ? t : e.closest("form");
  if (l) {
    for (let o of l.elements)
      if (o.tagName === "INPUT" && o.type === "submit" || o.tagName === "BUTTON" && o.type === "submit" || o.nodeName === "INPUT" && o.type === "image") {
        o.click();
        return;
      }
  }
}
function lt(e, t, l) {
  let o = w(l == null ? void 0 : l.value), a = y(() => e.value !== void 0);
  return [y(() => a.value ? e.value : o.value), function(n) {
    return a.value || (o.value = n), t == null ? void 0 : t(n);
  }];
}
function ct(e) {
  return [e.screenX, e.screenY];
}
function Xa() {
  let e = w([-1, -1]);
  return { wasMoved(t) {
    let l = ct(t);
    return e.value[0] === l[0] && e.value[1] === l[1] ? !1 : (e.value = l, !0);
  }, update(t) {
    e.value = ct(t);
  } };
}
function Za(e, t) {
  return e === t;
}
var en = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(en || {}), tn = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(tn || {}), on = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(on || {});
let Tt = Symbol("ComboboxContext");
function Pe(e) {
  let t = ee(Tt, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, Pe), l;
  }
  return t;
}
let ln = N({ name: "Combobox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => Za }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String }, nullable: { type: Boolean, default: !1 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: l, emit: o }) {
  let a = w(1), n = w(null), s = w(null), u = w(null), d = w(null), f = w({ static: !1, hold: !1 }), b = w([]), h = w(null), x = w(1), k = w(!1);
  function v(A = (P) => P) {
    let P = h.value !== null ? b.value[h.value] : null, O = tt(A(b.value.slice()), (T) => B(T.dataRef.domRef)), _ = P ? O.indexOf(P) : null;
    return _ === -1 && (_ = null), { options: O, activeOptionIndex: _ };
  }
  let C = y(() => e.multiple ? 1 : 0), c = y(() => e.nullable), [$, R] = lt(y(() => e.modelValue === void 0 ? U(C.value, { [1]: [], [0]: void 0 }) : e.modelValue), (A) => o("update:modelValue", A), y(() => e.defaultValue)), j = { comboboxState: a, value: $, mode: C, compare(A, P) {
    if (typeof e.by == "string") {
      let O = e.by;
      return (A == null ? void 0 : A[O]) === (P == null ? void 0 : P[O]);
    }
    return e.by(A, P);
  }, defaultValue: y(() => e.defaultValue), nullable: c, inputRef: s, labelRef: n, buttonRef: u, optionsRef: d, disabled: y(() => e.disabled), options: b, change(A) {
    R(A);
  }, activeOptionIndex: y(() => {
    if (k.value && h.value === null && b.value.length > 0) {
      let A = b.value.findIndex((P) => !P.dataRef.disabled);
      if (A !== -1)
        return A;
    }
    return h.value;
  }), activationTrigger: x, optionsPropsRef: f, closeCombobox() {
    k.value = !1, !e.disabled && a.value !== 1 && (a.value = 1, h.value = null);
  }, openCombobox() {
    if (k.value = !0, e.disabled || a.value === 0)
      return;
    let A = b.value.findIndex((P) => {
      let O = F(P.dataRef.value);
      return U(C.value, { [0]: () => j.compare(F(j.value.value), F(O)), [1]: () => F(j.value.value).some((_) => j.compare(F(_), F(O))) });
    });
    A !== -1 && (h.value = A), a.value = 0;
  }, goToOption(A, P, O) {
    if (k.value = !1, e.disabled || d.value && !f.value.static && a.value === 1)
      return;
    let _ = v();
    if (_.activeOptionIndex === null) {
      let D = _.options.findIndex((re) => !re.dataRef.disabled);
      D !== -1 && (_.activeOptionIndex = D);
    }
    let T = Ua(A === Q.Specific ? { focus: Q.Specific, id: P } : { focus: A }, { resolveItems: () => _.options, resolveActiveIndex: () => _.activeOptionIndex, resolveId: (D) => D.id, resolveDisabled: (D) => D.dataRef.disabled });
    h.value = T, x.value = O ?? 1, b.value = _.options;
  }, selectOption(A) {
    let P = b.value.find((_) => _.id === A);
    if (!P)
      return;
    let { dataRef: O } = P;
    R(U(C.value, { [0]: () => O.value, [1]: () => {
      let _ = F(j.value.value).slice(), T = F(O.value), D = _.findIndex((re) => j.compare(T, F(re)));
      return D === -1 ? _.push(T) : _.splice(D, 1), _;
    } }));
  }, selectActiveOption() {
    if (j.activeOptionIndex.value === null)
      return;
    let { dataRef: A, id: P } = b.value[j.activeOptionIndex.value];
    R(U(C.value, { [0]: () => A.value, [1]: () => {
      let O = F(j.value.value).slice(), _ = F(A.value), T = O.findIndex((D) => j.compare(_, F(D)));
      return T === -1 ? O.push(_) : O.splice(T, 1), O;
    } })), j.goToOption(Q.Specific, P);
  }, registerOption(A, P) {
    let O = { id: A, dataRef: P }, _ = v((T) => [...T, O]);
    if (h.value === null) {
      let T = P.value.value;
      U(C.value, { [0]: () => j.compare(F(j.value.value), F(T)), [1]: () => F(j.value.value).some((D) => j.compare(F(D), F(T))) }) && (_.activeOptionIndex = _.options.indexOf(O));
    }
    b.value = _.options, h.value = _.activeOptionIndex, x.value = 1;
  }, unregisterOption(A) {
    let P = v((O) => {
      let _ = O.findIndex((T) => T.id === A);
      return _ !== -1 && O.splice(_, 1), O;
    });
    b.value = P.options, h.value = P.activeOptionIndex, x.value = 1;
  } };
  Ot([s, u, d], () => j.closeCombobox(), y(() => a.value === 0)), oe(Tt, j), kt(y(() => U(a.value, { [0]: ue.Open, [1]: ue.Closed })));
  let W = y(() => j.activeOptionIndex.value === null ? null : b.value[j.activeOptionIndex.value].dataRef.value), H = y(() => {
    var A;
    return (A = B(s)) == null ? void 0 : A.closest("form");
  });
  return z(() => {
    X([H], () => {
      if (!H.value || e.defaultValue === void 0)
        return;
      function A() {
        j.change(e.defaultValue);
      }
      return H.value.addEventListener("reset", A), () => {
        var P;
        (P = H.value) == null || P.removeEventListener("reset", A);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: A, disabled: P, ...O } = e, _ = { open: a.value === 0, disabled: P, activeIndex: j.activeOptionIndex.value, activeOption: W.value, value: $.value };
    return q(I, [...A != null && $.value != null ? ot({ [A]: $.value }).map(([T, D]) => q(_e, et({ features: ge.Hidden, key: T, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: T, value: D }))) : [], V({ theirProps: { ...l, ...Se(O, ["modelValue", "defaultValue", "nullable", "multiple", "onUpdate:modelValue", "by"]) }, ourProps: {}, slot: _, slots: t, attrs: l, name: "Combobox" })]);
  };
} }), an = N({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-combobox-label-${Z()}` } }, setup(e, { attrs: t, slots: l }) {
  let o = Pe("ComboboxLabel");
  function a() {
    var n;
    (n = B(o.inputRef)) == null || n.focus({ preventScroll: !0 });
  }
  return () => {
    let n = { open: o.comboboxState.value === 0, disabled: o.disabled.value }, { id: s, ...u } = e, d = { id: s, ref: o.labelRef, onClick: a };
    return V({ ourProps: d, theirProps: u, slot: n, attrs: t, slots: l, name: "ComboboxLabel" });
  };
} }), nn = N({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-combobox-button-${Z()}` } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let a = Pe("ComboboxButton");
  o({ el: a.buttonRef, $el: a.buttonRef });
  function n(d) {
    a.disabled.value || (a.comboboxState.value === 0 ? a.closeCombobox() : (d.preventDefault(), a.openCombobox()), fe(() => {
      var f;
      return (f = B(a.inputRef)) == null ? void 0 : f.focus({ preventScroll: !0 });
    }));
  }
  function s(d) {
    switch (d.key) {
      case M.ArrowDown:
        d.preventDefault(), d.stopPropagation(), a.comboboxState.value === 1 && a.openCombobox(), fe(() => {
          var f;
          return (f = a.inputRef.value) == null ? void 0 : f.focus({ preventScroll: !0 });
        });
        return;
      case M.ArrowUp:
        d.preventDefault(), d.stopPropagation(), a.comboboxState.value === 1 && (a.openCombobox(), fe(() => {
          a.value.value || a.goToOption(Q.Last);
        })), fe(() => {
          var f;
          return (f = a.inputRef.value) == null ? void 0 : f.focus({ preventScroll: !0 });
        });
        return;
      case M.Escape:
        if (a.comboboxState.value !== 0)
          return;
        d.preventDefault(), a.optionsRef.value && !a.optionsPropsRef.value.static && d.stopPropagation(), a.closeCombobox(), fe(() => {
          var f;
          return (f = a.inputRef.value) == null ? void 0 : f.focus({ preventScroll: !0 });
        });
        return;
    }
  }
  let u = _t(y(() => ({ as: e.as, type: t.type })), a.buttonRef);
  return () => {
    var d, f;
    let b = { open: a.comboboxState.value === 0, disabled: a.disabled.value, value: a.value.value }, { id: h, ...x } = e, k = { ref: a.buttonRef, id: h, type: u.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (d = B(a.optionsRef)) == null ? void 0 : d.id, "aria-expanded": a.disabled.value ? void 0 : a.comboboxState.value === 0, "aria-labelledby": a.labelRef.value ? [(f = B(a.labelRef)) == null ? void 0 : f.id, h].join(" ") : void 0, disabled: a.disabled.value === !0 ? !0 : void 0, onKeydown: s, onClick: n };
    return V({ ourProps: k, theirProps: x, slot: b, attrs: t, slots: l, name: "ComboboxButton" });
  };
} }), sn = N({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: () => `headlessui-combobox-input-${Z()}` } }, emits: { change: (e) => !0 }, setup(e, { emit: t, attrs: l, slots: o, expose: a }) {
  let n = Pe("ComboboxInput"), s = { value: !1 };
  a({ el: n.inputRef, $el: n.inputRef });
  let u = y(() => {
    var c;
    let $ = n.value.value;
    return B(n.inputRef) ? typeof e.displayValue < "u" && $ !== void 0 ? (c = e.displayValue($)) != null ? c : "" : typeof $ == "string" ? $ : "" : "";
  });
  z(() => {
    X([u, n.comboboxState], ([c, $], [R, j]) => {
      if (s.value)
        return;
      let W = B(n.inputRef);
      !W || (j === 0 && $ === 1 || c !== R) && (W.value = c);
    }, { immediate: !0 });
  });
  let d = w(!1);
  function f() {
    d.value = !0;
  }
  function b() {
    setTimeout(() => {
      d.value = !1;
    });
  }
  function h(c) {
    switch (s.value = !0, c.key) {
      case M.Backspace:
      case M.Delete:
        if (n.mode.value !== 0 || !n.nullable.value)
          return;
        let $ = c.currentTarget;
        requestAnimationFrame(() => {
          if ($.value === "") {
            n.change(null);
            let R = B(n.optionsRef);
            R && (R.scrollTop = 0), n.goToOption(Q.Nothing);
          }
        });
        break;
      case M.Enter:
        if (s.value = !1, n.comboboxState.value !== 0 || d.value)
          return;
        if (c.preventDefault(), c.stopPropagation(), n.activeOptionIndex.value === null) {
          n.closeCombobox();
          return;
        }
        n.selectActiveOption(), n.mode.value === 0 && n.closeCombobox();
        break;
      case M.ArrowDown:
        return s.value = !1, c.preventDefault(), c.stopPropagation(), U(n.comboboxState.value, { [0]: () => n.goToOption(Q.Next), [1]: () => n.openCombobox() });
      case M.ArrowUp:
        return s.value = !1, c.preventDefault(), c.stopPropagation(), U(n.comboboxState.value, { [0]: () => n.goToOption(Q.Previous), [1]: () => {
          n.openCombobox(), fe(() => {
            n.value.value || n.goToOption(Q.Last);
          });
        } });
      case M.Home:
        if (c.shiftKey)
          break;
        return s.value = !1, c.preventDefault(), c.stopPropagation(), n.goToOption(Q.First);
      case M.PageUp:
        return s.value = !1, c.preventDefault(), c.stopPropagation(), n.goToOption(Q.First);
      case M.End:
        if (c.shiftKey)
          break;
        return s.value = !1, c.preventDefault(), c.stopPropagation(), n.goToOption(Q.Last);
      case M.PageDown:
        return s.value = !1, c.preventDefault(), c.stopPropagation(), n.goToOption(Q.Last);
      case M.Escape:
        if (s.value = !1, n.comboboxState.value !== 0)
          return;
        c.preventDefault(), n.optionsRef.value && !n.optionsPropsRef.value.static && c.stopPropagation(), n.closeCombobox();
        break;
      case M.Tab:
        if (s.value = !1, n.comboboxState.value !== 0)
          return;
        n.mode.value === 0 && n.selectActiveOption(), n.closeCombobox();
        break;
    }
  }
  function x(c) {
    t("change", c);
  }
  function k(c) {
    n.openCombobox(), t("change", c);
  }
  function v() {
    s.value = !1;
  }
  let C = y(() => {
    var c, $, R, j;
    return (j = (R = ($ = e.defaultValue) != null ? $ : n.defaultValue.value !== void 0 ? (c = e.displayValue) == null ? void 0 : c.call(e, n.defaultValue.value) : null) != null ? R : n.defaultValue.value) != null ? j : "";
  });
  return () => {
    var c, $, R, j, W, H;
    let A = { open: n.comboboxState.value === 0 }, { id: P, displayValue: O, ..._ } = e, T = { "aria-controls": (c = n.optionsRef.value) == null ? void 0 : c.id, "aria-expanded": n.disabled.value ? void 0 : n.comboboxState.value === 0, "aria-activedescendant": n.activeOptionIndex.value === null || ($ = n.options.value[n.activeOptionIndex.value]) == null ? void 0 : $.id, "aria-multiselectable": n.mode.value === 1 ? !0 : void 0, "aria-labelledby": (W = (R = B(n.labelRef)) == null ? void 0 : R.id) != null ? W : (j = B(n.buttonRef)) == null ? void 0 : j.id, id: P, onCompositionstart: f, onCompositionend: b, onKeydown: h, onChange: x, onInput: k, onBlur: v, role: "combobox", type: (H = l.type) != null ? H : "text", tabIndex: 0, ref: n.inputRef, defaultValue: C.value };
    return V({ ourProps: T, theirProps: _, slot: A, attrs: l, slots: o, features: me.RenderStrategy | me.Static, name: "ComboboxInput" });
  };
} }), rn = N({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, hold: { type: [Boolean], default: !1 } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let a = Pe("ComboboxOptions"), n = `headlessui-combobox-options-${Z()}`;
  o({ el: a.optionsRef, $el: a.optionsRef }), J(() => {
    a.optionsPropsRef.value.static = e.static;
  }), J(() => {
    a.optionsPropsRef.value.hold = e.hold;
  });
  let s = De(), u = y(() => s !== null ? s.value === ue.Open : a.comboboxState.value === 0);
  return St({ container: y(() => B(a.optionsRef)), enabled: y(() => a.comboboxState.value === 0), accept(d) {
    return d.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : d.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(d) {
    d.setAttribute("role", "none");
  } }), () => {
    var d, f, b, h;
    let x = { open: a.comboboxState.value === 0 }, k = { "aria-activedescendant": a.activeOptionIndex.value === null || (d = a.options.value[a.activeOptionIndex.value]) == null ? void 0 : d.id, "aria-labelledby": (h = (f = B(a.labelRef)) == null ? void 0 : f.id) != null ? h : (b = B(a.buttonRef)) == null ? void 0 : b.id, id: n, ref: a.optionsRef, role: "listbox" }, v = Se(e, ["hold"]);
    return V({ ourProps: k, theirProps: v, slot: x, attrs: t, slots: l, features: me.RenderStrategy | me.Static, visible: u.value, name: "ComboboxOptions" });
  };
} }), un = N({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: l, expose: o }) {
  let a = Pe("ComboboxOption"), n = `headlessui-combobox-option-${Z()}`, s = w(null);
  o({ el: s, $el: s });
  let u = y(() => a.activeOptionIndex.value !== null ? a.options.value[a.activeOptionIndex.value].id === n : !1), d = y(() => U(a.mode.value, { [0]: () => a.compare(F(a.value.value), F(e.value)), [1]: () => F(a.value.value).some((c) => a.compare(F(c), F(e.value))) })), f = y(() => ({ disabled: e.disabled, value: e.value, domRef: s }));
  z(() => a.registerOption(n, f)), se(() => a.unregisterOption(n)), J(() => {
    a.comboboxState.value === 0 && (!u.value || a.activationTrigger.value !== 0 && fe(() => {
      var c, $;
      return ($ = (c = B(s)) == null ? void 0 : c.scrollIntoView) == null ? void 0 : $.call(c, { block: "nearest" });
    }));
  });
  function b(c) {
    if (e.disabled)
      return c.preventDefault();
    a.selectOption(n), a.mode.value === 0 && a.closeCombobox();
  }
  function h() {
    if (e.disabled)
      return a.goToOption(Q.Nothing);
    a.goToOption(Q.Specific, n);
  }
  let x = Xa();
  function k(c) {
    x.update(c);
  }
  function v(c) {
    !x.wasMoved(c) || e.disabled || u.value || a.goToOption(Q.Specific, n, 0);
  }
  function C(c) {
    !x.wasMoved(c) || e.disabled || !u.value || a.optionsPropsRef.value.hold || a.goToOption(Q.Nothing);
  }
  return () => {
    let { disabled: c } = e, $ = { active: u.value, selected: d.value, disabled: c }, R = { id: n, ref: s, role: "option", tabIndex: c === !0 ? void 0 : -1, "aria-disabled": c === !0 ? !0 : void 0, "aria-selected": d.value, disabled: void 0, onClick: b, onFocus: h, onPointerenter: k, onMouseenter: k, onPointermove: v, onMousemove: v, onPointerleave: C, onMouseleave: C };
    return V({ ourProps: R, theirProps: e, slot: $, attrs: l, slots: t, name: "ComboboxOption" });
  };
} });
function pn(e, t, l) {
  Fe || J((o) => {
    window.addEventListener(e, t, l), o(() => window.removeEventListener(e, t, l));
  });
}
var Ce = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Ce || {});
function dn() {
  let e = w(0);
  return pn("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function jt(e, t, l, o) {
  Fe || J((a) => {
    e = e ?? window, e.addEventListener(t, l, o), a(() => e.removeEventListener(t, l, o));
  });
}
function cn(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
var Lt = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Lt || {});
let Oe = Object.assign(N({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: Object, default: w(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: l, expose: o }) {
  let a = w(null);
  o({ el: a, $el: a });
  let n = y(() => ie(a));
  fn({ ownerDocument: n }, y(() => Boolean(e.features & 16)));
  let s = vn({ ownerDocument: n, container: a, initialFocus: y(() => e.initialFocus) }, y(() => Boolean(e.features & 2)));
  mn({ ownerDocument: n, container: a, containers: e.containers, previousActiveElement: s }, y(() => Boolean(e.features & 8)));
  let u = dn();
  function d(x) {
    let k = B(a);
    k && ((v) => v())(() => {
      U(u.value, { [Ce.Forwards]: () => ke(k, ae.First, { skipElements: [x.relatedTarget] }), [Ce.Backwards]: () => ke(k, ae.Last, { skipElements: [x.relatedTarget] }) });
    });
  }
  let f = w(!1);
  function b(x) {
    x.key === "Tab" && (f.value = !0, requestAnimationFrame(() => {
      f.value = !1;
    }));
  }
  function h(x) {
    var k;
    let v = new Set((k = e.containers) == null ? void 0 : k.value);
    v.add(a);
    let C = x.relatedTarget;
    !C || C.dataset.headlessuiFocusGuard !== "true" && (Rt(v, C) || (f.value ? ke(B(a), U(u.value, { [Ce.Forwards]: () => ae.Next, [Ce.Backwards]: () => ae.Previous }) | ae.WrapAround, { relativeTo: x.target }) : x.target instanceof HTMLElement && $e(x.target)));
  }
  return () => {
    let x = {}, k = { ref: a, onKeydown: b, onFocusout: h }, { features: v, initialFocus: C, containers: c, ...$ } = e;
    return q(I, [Boolean(v & 4) && q(_e, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: d, features: ge.Focusable }), V({ ourProps: k, theirProps: { ...t, ...$ }, slot: x, attrs: t, slots: l, name: "FocusTrap" }), Boolean(v & 4) && q(_e, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: d, features: ge.Focusable })]);
  };
} }), { features: Lt });
function fn({ ownerDocument: e }, t) {
  let l = w(null);
  function o() {
    var n;
    l.value || (l.value = (n = e.value) == null ? void 0 : n.activeElement);
  }
  function a() {
    !l.value || ($e(l.value), l.value = null);
  }
  z(() => {
    X(t, (n, s) => {
      n !== s && (n ? o() : a());
    }, { immediate: !0 });
  }), se(a);
}
function vn({ ownerDocument: e, container: t, initialFocus: l }, o) {
  let a = w(null), n = w(!1);
  return z(() => n.value = !0), se(() => n.value = !1), z(() => {
    X([t, l, o], (s, u) => {
      if (s.every((f, b) => (u == null ? void 0 : u[b]) === f) || !o.value)
        return;
      let d = B(t);
      !d || cn(() => {
        var f, b;
        if (!n.value)
          return;
        let h = B(l), x = (f = e.value) == null ? void 0 : f.activeElement;
        if (h) {
          if (h === x) {
            a.value = x;
            return;
          }
        } else if (d.contains(x)) {
          a.value = x;
          return;
        }
        h ? $e(h) : ke(d, ae.First | ae.NoScroll) === Be.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), a.value = (b = e.value) == null ? void 0 : b.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), a;
}
function mn({ ownerDocument: e, container: t, containers: l, previousActiveElement: o }, a) {
  var n;
  jt((n = e.value) == null ? void 0 : n.defaultView, "focus", (s) => {
    if (!a.value)
      return;
    let u = new Set(l == null ? void 0 : l.value);
    u.add(t);
    let d = o.value;
    if (!d)
      return;
    let f = s.target;
    f && f instanceof HTMLElement ? Rt(u, f) ? (o.value = f, $e(f)) : (s.preventDefault(), s.stopPropagation(), $e(d)) : $e(o.value);
  }, !0);
}
function Rt(e, t) {
  var l;
  for (let o of e)
    if ((l = o.value) != null && l.contains(t))
      return !0;
  return !1;
}
let ft = "body > *", xe = /* @__PURE__ */ new Set(), ce = /* @__PURE__ */ new Map();
function vt(e) {
  e.setAttribute("aria-hidden", "true"), e.inert = !0;
}
function mt(e) {
  let t = ce.get(e);
  !t || (t["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert);
}
function bn(e, t = w(!0)) {
  J((l) => {
    if (!t.value || !e.value)
      return;
    let o = e.value, a = ie(o);
    if (a) {
      xe.add(o);
      for (let n of ce.keys())
        n.contains(o) && (mt(n), ce.delete(n));
      a.querySelectorAll(ft).forEach((n) => {
        if (n instanceof HTMLElement) {
          for (let s of xe)
            if (n.contains(s))
              return;
          xe.size === 1 && (ce.set(n, { "aria-hidden": n.getAttribute("aria-hidden"), inert: n.inert }), vt(n));
        }
      }), l(() => {
        if (xe.delete(o), xe.size > 0)
          a.querySelectorAll(ft).forEach((n) => {
            if (n instanceof HTMLElement && !ce.has(n)) {
              for (let s of xe)
                if (n.contains(s))
                  return;
              ce.set(n, { "aria-hidden": n.getAttribute("aria-hidden"), inert: n.inert }), vt(n);
            }
          });
        else
          for (let n of ce.keys())
            mt(n), ce.delete(n);
      });
    }
  });
}
let Bt = Symbol("ForcePortalRootContext");
function hn() {
  return ee(Bt, !1);
}
let Ye = N({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: l }) {
  return oe(Bt, e.force), () => {
    let { force: o, ...a } = e;
    return V({ theirProps: a, ourProps: {}, slot: {}, slots: t, attrs: l, name: "ForcePortalRoot" });
  };
} });
function gn(e) {
  let t = ie(e);
  if (!t) {
    if (e === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let l = t.getElementById("headlessui-portal-root");
  if (l)
    return l;
  let o = t.createElement("div");
  return o.setAttribute("id", "headlessui-portal-root"), t.body.appendChild(o);
}
let Dt = N({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: l }) {
  let o = w(null), a = y(() => ie(o)), n = hn(), s = ee(Ft, null), u = w(n === !0 || s == null ? gn(o.value) : s.resolveTarget());
  return J(() => {
    n || s != null && (u.value = s.resolveTarget());
  }), se(() => {
    var d, f;
    let b = (d = a.value) == null ? void 0 : d.getElementById("headlessui-portal-root");
    !b || u.value === b && u.value.children.length <= 0 && ((f = u.value.parentElement) == null || f.removeChild(u.value));
  }), () => {
    if (u.value === null)
      return null;
    let d = { ref: o, "data-headlessui-portal": "" };
    return q(gt, { to: u.value }, V({ ourProps: d, theirProps: e, slot: {}, attrs: l, slots: t, name: "Portal" }));
  };
} }), Ft = Symbol("PortalGroupContext"), yn = N({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: l }) {
  let o = eo({ resolveTarget() {
    return e.target;
  } });
  return oe(Ft, o), () => {
    let { target: a, ...n } = e;
    return V({ theirProps: n, ourProps: {}, slot: {}, attrs: t, slots: l, name: "PortalGroup" });
  };
} }), It = Symbol("StackContext");
var Qe = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Qe || {});
function xn() {
  return ee(It, () => {
  });
}
function wn({ type: e, enabled: t, element: l, onUpdate: o }) {
  let a = xn();
  function n(...s) {
    o == null || o(...s), a(...s);
  }
  z(() => {
    X(t, (s, u) => {
      s ? n(0, e, l) : u === !0 && n(1, e, l);
    }, { immediate: !0, flush: "sync" });
  }), se(() => {
    t.value && n(1, e, l);
  }), oe(It, n);
}
let Mt = Symbol("DescriptionContext");
function $n() {
  let e = ee(Mt, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function Ie({ slot: e = w({}), name: t = "Description", props: l = {} } = {}) {
  let o = w([]);
  function a(n) {
    return o.value.push(n), () => {
      let s = o.value.indexOf(n);
      s !== -1 && o.value.splice(s, 1);
    };
  }
  return oe(Mt, { register: a, slot: e, name: t, props: l }), y(() => o.value.length > 0 ? o.value.join(" ") : void 0);
}
let kn = N({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${Z()}` } }, setup(e, { attrs: t, slots: l }) {
  let o = $n();
  return z(() => se(o.register(e.id))), () => {
    let { name: a = "Description", slot: n = w({}), props: s = {} } = o, { id: u, ...d } = e, f = { ...Object.entries(s).reduce((b, [h, x]) => Object.assign(b, { [h]: m(x) }), {}), id: u };
    return V({ ourProps: f, theirProps: d, slot: n.value, attrs: t, slots: l, name: a });
  };
} });
function at() {
  let e = [], t = [], l = { enqueue(o) {
    t.push(o);
  }, addEventListener(o, a, n, s) {
    return o.addEventListener(a, n, s), l.add(() => o.removeEventListener(a, n, s));
  }, requestAnimationFrame(...o) {
    let a = requestAnimationFrame(...o);
    l.add(() => cancelAnimationFrame(a));
  }, nextFrame(...o) {
    l.requestAnimationFrame(() => {
      l.requestAnimationFrame(...o);
    });
  }, setTimeout(...o) {
    let a = setTimeout(...o);
    l.add(() => clearTimeout(a));
  }, add(o) {
    e.push(o);
  }, dispose() {
    for (let o of e.splice(0))
      o();
  }, async workQueue() {
    for (let o of t.splice(0))
      await o();
  } };
  return l;
}
function _n() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
var Sn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Sn || {});
let Je = Symbol("DialogContext");
function Te(e) {
  let t = ee(Je, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, Te), l;
  }
  return t;
}
let Le = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Me = N({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Le }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${Z()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: l, slots: o, expose: a }) {
  var n;
  let s = w(!1);
  z(() => {
    s.value = !0;
  });
  let u = w(0), d = De(), f = y(() => e.open === Le && d !== null ? U(d.value, { [ue.Open]: !0, [ue.Closed]: !1 }) : e.open), b = w(/* @__PURE__ */ new Set()), h = w(null), x = w(null), k = y(() => ie(h));
  if (a({ el: h, $el: h }), !(e.open !== Le || d !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof f.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${f.value === Le ? void 0 : e.open}`);
  let v = y(() => s.value && f.value ? 0 : 1), C = y(() => v.value === 0), c = y(() => u.value > 1), $ = ee(Je, null) !== null, R = y(() => c.value ? "parent" : "leaf");
  bn(h, y(() => c.value ? C.value : !1)), wn({ type: "Dialog", enabled: y(() => v.value === 0), element: h, onUpdate: (P, O, _) => {
    if (O === "Dialog")
      return U(P, { [Qe.Add]() {
        b.value.add(_), u.value += 1;
      }, [Qe.Remove]() {
        b.value.delete(_), u.value -= 1;
      } });
  } });
  let j = Ie({ name: "DialogDescription", slot: y(() => ({ open: f.value })) }), W = w(null), H = { titleId: W, panelRef: w(null), dialogState: v, setTitleId(P) {
    W.value !== P && (W.value = P);
  }, close() {
    t("close", !1);
  } };
  oe(Je, H);
  function A() {
    var P, O, _;
    return [...Array.from((O = (P = k.value) == null ? void 0 : P.querySelectorAll("body > *, [data-headlessui-portal]")) != null ? O : []).filter((T) => !(!(T instanceof HTMLElement) || T.contains(B(x)) || H.panelRef.value && T.contains(H.panelRef.value))), (_ = H.panelRef.value) != null ? _ : h.value];
  }
  return Ot(() => A(), (P, O) => {
    H.close(), fe(() => O == null ? void 0 : O.focus());
  }, y(() => v.value === 0 && !c.value)), jt((n = k.value) == null ? void 0 : n.defaultView, "keydown", (P) => {
    P.defaultPrevented || P.key === M.Escape && v.value === 0 && (c.value || (P.preventDefault(), P.stopPropagation(), H.close()));
  }), J((P) => {
    var O;
    if (v.value !== 0 || $)
      return;
    let _ = k.value;
    if (!_)
      return;
    let T = at(), D = window.pageYOffset;
    function re(le, te, de) {
      let He = le.style.getPropertyValue(te);
      return Object.assign(le.style, { [te]: de }), T.add(() => {
        Object.assign(le.style, { [te]: He });
      });
    }
    let ye = _ == null ? void 0 : _.documentElement, ze = ((O = _.defaultView) != null ? O : window).innerWidth - ye.clientWidth;
    if (re(ye, "overflow", "hidden"), ze > 0) {
      let le = ye.clientWidth - ye.offsetWidth, te = ze - le;
      re(ye, "paddingRight", `${te}px`);
    }
    if (_n()) {
      re(_.body, "marginTop", `-${D}px`), window.scrollTo(0, 0);
      let le = null;
      T.addEventListener(_, "click", (te) => {
        if (te.target instanceof HTMLElement)
          try {
            let de = te.target.closest("a");
            if (!de)
              return;
            let { hash: He } = new URL(de.href), qe = _.querySelector(He);
            qe && !A().some((Yt) => Yt.contains(qe)) && (le = qe);
          } catch {
          }
      }, !0), T.addEventListener(_, "touchmove", (te) => {
        te.target instanceof HTMLElement && !A().some((de) => de.contains(te.target)) && te.preventDefault();
      }, { passive: !1 }), T.add(() => {
        window.scrollTo(0, window.pageYOffset + D), le && le.isConnected && (le.scrollIntoView({ block: "nearest" }), le = null);
      });
    }
    P(T.dispose);
  }), J((P) => {
    if (v.value !== 0)
      return;
    let O = B(h);
    if (!O)
      return;
    let _ = new IntersectionObserver((T) => {
      for (let D of T)
        D.boundingClientRect.x === 0 && D.boundingClientRect.y === 0 && D.boundingClientRect.width === 0 && D.boundingClientRect.height === 0 && H.close();
    });
    _.observe(O), P(() => _.disconnect());
  }), () => {
    let { id: P, open: O, initialFocus: _, ...T } = e, D = { ...l, ref: h, id: P, role: "dialog", "aria-modal": v.value === 0 ? !0 : void 0, "aria-labelledby": W.value, "aria-describedby": j.value }, re = { open: v.value === 0 };
    return q(Ye, { force: !0 }, () => [q(Dt, () => q(yn, { target: h.value }, () => q(Ye, { force: !1 }, () => q(Oe, { initialFocus: _, containers: b, features: C.value ? U(R.value, { parent: Oe.features.RestoreFocus, leaf: Oe.features.All & ~Oe.features.FocusLock }) : Oe.features.None }, () => V({ ourProps: D, theirProps: T, slot: re, attrs: l, slots: o, visible: v.value === 0, features: me.RenderStrategy | me.Static, name: "Dialog" }))))), q(_e, { features: ge.Hidden, ref: x })]);
  };
} });
N({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${Z()}` } }, setup(e, { attrs: t, slots: l }) {
  let o = Te("DialogOverlay");
  function a(n) {
    n.target === n.currentTarget && (n.preventDefault(), n.stopPropagation(), o.close());
  }
  return () => {
    let { id: n, ...s } = e;
    return V({ ourProps: { id: n, "aria-hidden": !0, onClick: a }, theirProps: s, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogOverlay" });
  };
} });
N({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${Z()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: l, expose: o }) {
  let a = Te("DialogBackdrop"), n = w(null);
  return o({ el: n, $el: n }), z(() => {
    if (a.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: s, ...u } = e, d = { id: s, ref: n, "aria-hidden": !0 };
    return q(Ye, { force: !0 }, () => q(Dt, () => V({ ourProps: d, theirProps: { ...t, ...u }, slot: { open: a.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogBackdrop" })));
  };
} });
let Ne = N({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${Z()}` } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let a = Te("DialogPanel");
  o({ el: a.panelRef, $el: a.panelRef });
  function n(s) {
    s.stopPropagation();
  }
  return () => {
    let { id: s, ...u } = e, d = { id: s, ref: a.panelRef, onClick: n };
    return V({ ourProps: d, theirProps: u, slot: { open: a.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogPanel" });
  };
} }), Nt = N({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${Z()}` } }, setup(e, { attrs: t, slots: l }) {
  let o = Te("DialogTitle");
  return z(() => {
    o.setTitleId(e.id), se(() => o.setTitleId(null));
  }), () => {
    let { id: a, ...n } = e;
    return V({ ourProps: { id: a }, theirProps: n, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogTitle" });
  };
} }), Vt = Symbol("LabelContext");
function zt() {
  let e = ee(Vt, null);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, zt), t;
  }
  return e;
}
function nt({ slot: e = {}, name: t = "Label", props: l = {} } = {}) {
  let o = w([]);
  function a(n) {
    return o.value.push(n), () => {
      let s = o.value.indexOf(n);
      s !== -1 && o.value.splice(s, 1);
    };
  }
  return oe(Vt, { register: a, slot: e, name: t, props: l }), y(() => o.value.length > 0 ? o.value.join(" ") : void 0);
}
let Ht = N({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-label-${Z()}` } }, setup(e, { slots: t, attrs: l }) {
  let o = zt();
  return z(() => se(o.register(e.id))), () => {
    let { name: a = "Label", slot: n = {}, props: s = {} } = o, { id: u, passive: d, ...f } = e, b = { ...Object.entries(s).reduce((h, [x, k]) => Object.assign(h, { [x]: m(k) }), {}), id: u };
    return d && (delete b.onClick, delete f.onClick), V({ ourProps: b, theirProps: f, slot: n, attrs: l, slots: t, name: a });
  };
} });
function Pn(e, t) {
  return e === t;
}
let qt = Symbol("RadioGroupContext");
function Ut(e) {
  let t = ee(qt, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, Ut), l;
  }
  return t;
}
let On = N({ name: "RadioGroup", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "div" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => Pn }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-radiogroup-${Z()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: l, slots: o, expose: a }) {
  let n = w(null), s = w([]), u = nt({ name: "RadioGroupLabel" }), d = Ie({ name: "RadioGroupDescription" });
  a({ el: n, $el: n });
  let [f, b] = lt(y(() => e.modelValue), (v) => t("update:modelValue", v), y(() => e.defaultValue)), h = { options: s, value: f, disabled: y(() => e.disabled), firstOption: y(() => s.value.find((v) => !v.propsRef.disabled)), containsCheckedOption: y(() => s.value.some((v) => h.compare(F(v.propsRef.value), F(e.modelValue)))), compare(v, C) {
    if (typeof e.by == "string") {
      let c = e.by;
      return (v == null ? void 0 : v[c]) === (C == null ? void 0 : C[c]);
    }
    return e.by(v, C);
  }, change(v) {
    var C;
    if (e.disabled || h.compare(F(f.value), F(v)))
      return !1;
    let c = (C = s.value.find(($) => h.compare(F($.propsRef.value), F(v)))) == null ? void 0 : C.propsRef;
    return c != null && c.disabled ? !1 : (b(v), !0);
  }, registerOption(v) {
    s.value.push(v), s.value = tt(s.value, (C) => C.element);
  }, unregisterOption(v) {
    let C = s.value.findIndex((c) => c.id === v);
    C !== -1 && s.value.splice(C, 1);
  } };
  oe(qt, h), St({ container: y(() => B(n)), accept(v) {
    return v.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : v.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(v) {
    v.setAttribute("role", "none");
  } });
  function x(v) {
    if (!n.value || !n.value.contains(v.target))
      return;
    let C = s.value.filter((c) => c.propsRef.disabled === !1).map((c) => c.element);
    switch (v.key) {
      case M.Enter:
        At(v.currentTarget);
        break;
      case M.ArrowLeft:
      case M.ArrowUp:
        if (v.preventDefault(), v.stopPropagation(), ke(C, ae.Previous | ae.WrapAround) === Be.Success) {
          let c = s.value.find(($) => {
            var R;
            return $.element === ((R = ie(n)) == null ? void 0 : R.activeElement);
          });
          c && h.change(c.propsRef.value);
        }
        break;
      case M.ArrowRight:
      case M.ArrowDown:
        if (v.preventDefault(), v.stopPropagation(), ke(C, ae.Next | ae.WrapAround) === Be.Success) {
          let c = s.value.find(($) => {
            var R;
            return $.element === ((R = ie($.element)) == null ? void 0 : R.activeElement);
          });
          c && h.change(c.propsRef.value);
        }
        break;
      case M.Space:
        {
          v.preventDefault(), v.stopPropagation();
          let c = s.value.find(($) => {
            var R;
            return $.element === ((R = ie($.element)) == null ? void 0 : R.activeElement);
          });
          c && h.change(c.propsRef.value);
        }
        break;
    }
  }
  let k = y(() => {
    var v;
    return (v = B(n)) == null ? void 0 : v.closest("form");
  });
  return z(() => {
    X([k], () => {
      if (!k.value || e.defaultValue === void 0)
        return;
      function v() {
        h.change(e.defaultValue);
      }
      return k.value.addEventListener("reset", v), () => {
        var C;
        (C = k.value) == null || C.removeEventListener("reset", v);
      };
    }, { immediate: !0 });
  }), () => {
    let { disabled: v, name: C, id: c, ...$ } = e, R = { ref: n, id: c, role: "radiogroup", "aria-labelledby": u.value, "aria-describedby": d.value, onKeydown: x };
    return q(I, [...C != null && f.value != null ? ot({ [C]: f.value }).map(([j, W]) => q(_e, et({ features: ge.Hidden, key: j, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: j, value: W }))) : [], V({ ourProps: R, theirProps: { ...l, ...Se($, ["modelValue", "defaultValue"]) }, slot: {}, attrs: l, slots: o, name: "RadioGroup" })]);
  };
} });
var Cn = ((e) => (e[e.Empty = 1] = "Empty", e[e.Active = 2] = "Active", e))(Cn || {});
let En = N({ name: "RadioGroupOption", props: { as: { type: [Object, String], default: "div" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-radiogroup-option-${Z()}` } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let a = Ut("RadioGroupOption"), n = nt({ name: "RadioGroupLabel" }), s = Ie({ name: "RadioGroupDescription" }), u = w(null), d = y(() => ({ value: e.value, disabled: e.disabled })), f = w(1);
  o({ el: u, $el: u }), z(() => a.registerOption({ id: e.id, element: u, propsRef: d })), se(() => a.unregisterOption(e.id));
  let b = y(() => {
    var $;
    return (($ = a.firstOption.value) == null ? void 0 : $.id) === e.id;
  }), h = y(() => a.disabled.value || e.disabled), x = y(() => a.compare(F(a.value.value), F(e.value))), k = y(() => h.value ? -1 : x.value || !a.containsCheckedOption.value && b.value ? 0 : -1);
  function v() {
    var $;
    !a.change(e.value) || (f.value |= 2, ($ = u.value) == null || $.focus());
  }
  function C() {
    f.value |= 2;
  }
  function c() {
    f.value &= -3;
  }
  return () => {
    let { id: $, value: R, disabled: j, ...W } = e, H = { checked: x.value, disabled: h.value, active: Boolean(f.value & 2) }, A = { id: $, ref: u, role: "radio", "aria-checked": x.value ? "true" : "false", "aria-labelledby": n.value, "aria-describedby": s.value, "aria-disabled": h.value ? !0 : void 0, tabIndex: k.value, onClick: h.value ? void 0 : v, onFocus: h.value ? void 0 : C, onBlur: h.value ? void 0 : c };
    return V({ ourProps: A, theirProps: W, slot: H, attrs: t, slots: l, name: "RadioGroupOption" });
  };
} }), bt = Ht, An = kn, Gt = Symbol("GroupContext"), Tn = N({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: l }) {
  let o = w(null), a = nt({ name: "SwitchLabel", props: { onClick() {
    !o.value || (o.value.click(), o.value.focus({ preventScroll: !0 }));
  } } }), n = Ie({ name: "SwitchDescription" });
  return oe(Gt, { switchRef: o, labelledby: a, describedby: n }), () => V({ theirProps: e, ourProps: {}, slot: {}, slots: t, attrs: l, name: "SwitchGroup" });
} }), jn = N({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: !0 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-switch-${Z()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: l, slots: o, expose: a }) {
  let n = ee(Gt, null), [s, u] = lt(y(() => e.modelValue), (c) => t("update:modelValue", c), y(() => e.defaultChecked));
  function d() {
    u(!s.value);
  }
  let f = w(null), b = n === null ? f : n.switchRef, h = _t(y(() => ({ as: e.as, type: l.type })), b);
  a({ el: b, $el: b });
  function x(c) {
    c.preventDefault(), d();
  }
  function k(c) {
    c.key === M.Space ? (c.preventDefault(), d()) : c.key === M.Enter && At(c.currentTarget);
  }
  function v(c) {
    c.preventDefault();
  }
  let C = y(() => {
    var c, $;
    return ($ = (c = B(b)) == null ? void 0 : c.closest) == null ? void 0 : $.call(c, "form");
  });
  return z(() => {
    X([C], () => {
      if (!C.value || e.defaultChecked === void 0)
        return;
      function c() {
        u(e.defaultChecked);
      }
      return C.value.addEventListener("reset", c), () => {
        var $;
        ($ = C.value) == null || $.removeEventListener("reset", c);
      };
    }, { immediate: !0 });
  }), () => {
    let { id: c, name: $, value: R, ...j } = e, W = { checked: s.value }, H = { id: c, ref: b, role: "switch", type: h.value, tabIndex: 0, "aria-checked": s.value, "aria-labelledby": n == null ? void 0 : n.labelledby.value, "aria-describedby": n == null ? void 0 : n.describedby.value, onClick: x, onKeyup: k, onKeypress: v };
    return q(I, [$ != null && s.value != null ? q(_e, et({ features: ge.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: s.value, name: $, value: R })) : null, V({ ourProps: H, theirProps: { ...l, ...Se(j, ["modelValue", "defaultChecked"]) }, slot: W, attrs: l, slots: o, name: "Switch" })]);
  };
} }), Ln = Ht;
function Rn(e) {
  let t = { called: !1 };
  return (...l) => {
    if (!t.called)
      return t.called = !0, e(...l);
  };
}
function Ke(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Re(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var Xe = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(Xe || {});
function Bn(e, t) {
  let l = at();
  if (!e)
    return l.dispose;
  let { transitionDuration: o, transitionDelay: a } = getComputedStyle(e), [n, s] = [o, a].map((u) => {
    let [d = 0] = u.split(",").filter(Boolean).map((f) => f.includes("ms") ? parseFloat(f) : parseFloat(f) * 1e3).sort((f, b) => b - f);
    return d;
  });
  return n !== 0 ? l.setTimeout(() => t("finished"), n + s) : t("finished"), l.add(() => t("cancelled")), l.dispose;
}
function ht(e, t, l, o, a, n) {
  let s = at(), u = n !== void 0 ? Rn(n) : () => {
  };
  return Re(e, ...a), Ke(e, ...t, ...l), s.nextFrame(() => {
    Re(e, ...l), Ke(e, ...o), s.add(Bn(e, (d) => (Re(e, ...o, ...t), Ke(e, ...a), u(d))));
  }), s.add(() => Re(e, ...t, ...l, ...o, ...a)), s.add(() => u("cancelled")), s.dispose;
}
function he(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let st = Symbol("TransitionContext");
var Dn = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Dn || {});
function Fn() {
  return ee(st, null) !== null;
}
function In() {
  let e = ee(st, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Mn() {
  let e = ee(rt, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let rt = Symbol("NestingContext");
function Ve(e) {
  return "children" in e ? Ve(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Kt(e) {
  let t = w([]), l = w(!1);
  z(() => l.value = !0), se(() => l.value = !1);
  function o(n, s = ve.Hidden) {
    let u = t.value.findIndex(({ id: d }) => d === n);
    u !== -1 && (U(s, { [ve.Unmount]() {
      t.value.splice(u, 1);
    }, [ve.Hidden]() {
      t.value[u].state = "hidden";
    } }), !Ve(t) && l.value && (e == null || e()));
  }
  function a(n) {
    let s = t.value.find(({ id: u }) => u === n);
    return s ? s.state !== "visible" && (s.state = "visible") : t.value.push({ id: n, state: "visible" }), () => o(n, ve.Unmount);
  }
  return { children: t, register: a, unregister: o };
}
let Wt = me.RenderStrategy, be = N({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: l, slots: o, expose: a }) {
  if (!Fn() && Ga())
    return () => q(je, { ...e, onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave") }, o);
  let n = w(null), s = w("visible"), u = y(() => e.unmount ? ve.Unmount : ve.Hidden);
  a({ el: n, $el: n });
  let { show: d, appear: f } = In(), { register: b, unregister: h } = Mn(), x = { value: !0 }, k = Z(), v = { value: !1 }, C = Kt(() => {
    v.value || (s.value = "hidden", h(k), t("afterLeave"));
  });
  z(() => {
    let O = b(k);
    se(O);
  }), J(() => {
    if (u.value === ve.Hidden && k) {
      if (d && s.value !== "visible") {
        s.value = "visible";
        return;
      }
      U(s.value, { hidden: () => h(k), visible: () => b(k) });
    }
  });
  let c = he(e.enter), $ = he(e.enterFrom), R = he(e.enterTo), j = he(e.entered), W = he(e.leave), H = he(e.leaveFrom), A = he(e.leaveTo);
  z(() => {
    J(() => {
      if (s.value === "visible") {
        let O = B(n);
        if (O instanceof Comment && O.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function P(O) {
    let _ = x.value && !f.value, T = B(n);
    !T || !(T instanceof HTMLElement) || _ || (v.value = !0, d.value && t("beforeEnter"), d.value || t("beforeLeave"), O(d.value ? ht(T, c, $, R, j, (D) => {
      v.value = !1, D === Xe.Finished && t("afterEnter");
    }) : ht(T, W, H, A, j, (D) => {
      v.value = !1, D === Xe.Finished && (Ve(C) || (s.value = "hidden", h(k), t("afterLeave")));
    })));
  }
  return z(() => {
    X([d], (O, _, T) => {
      P(T), x.value = !1;
    }, { immediate: !0 });
  }), oe(rt, C), kt(y(() => U(s.value, { visible: ue.Open, hidden: ue.Closed }))), () => {
    let { appear: O, show: _, enter: T, enterFrom: D, enterTo: re, entered: ye, leave: ze, leaveFrom: le, leaveTo: te, ...de } = e;
    return V({ theirProps: de, ourProps: { ref: n }, slot: {}, slots: o, attrs: l, features: Wt, visible: s.value === "visible", name: "TransitionChild" });
  };
} }), Nn = be, je = N({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: l, slots: o }) {
  let a = De(), n = y(() => e.show === null && a !== null ? U(a.value, { [ue.Open]: !0, [ue.Closed]: !1 }) : e.show);
  J(() => {
    if (![!0, !1].includes(n.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let s = w(n.value ? "visible" : "hidden"), u = Kt(() => {
    s.value = "hidden";
  }), d = w(!0), f = { show: n, appear: y(() => e.appear || !d.value) };
  return z(() => {
    J(() => {
      d.value = !1, n.value ? s.value = "visible" : Ve(u) || (s.value = "hidden");
    });
  }), oe(rt, u), oe(st, f), () => {
    let b = Se(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), h = { unmount: e.unmount };
    return V({ ourProps: { ...h, as: "template" }, theirProps: {}, slot: {}, slots: { ...o, default: () => [q(Nn, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...l, ...h, ...b }, o.default)] }, attrs: {}, features: Wt, visible: s.value === "visible", name: "Transition" });
  };
} });
const Vn = ["title"], zn = { class: "po-relative po-mt-1" }, Hn = {
  name: "PoSelectField"
}, ai = /* @__PURE__ */ Object.assign(Hn, {
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
    const l = e, o = w(""), a = w(l.preSelected), n = y(
      () => o.value === "" ? l.list : l.list.filter((s) => s.name.toLowerCase().includes(o.value.toLowerCase()))
    );
    return X(a, () => {
      t("update:modelValue", a.value);
    }), (s, u) => (i(), K(m(ln), {
      as: "div",
      modelValue: a.value,
      "onUpdate:modelValue": u[1] || (u[1] = (d) => a.value = d)
    }, {
      default: L(() => [
        S(m(an), { class: "po-text-sm po-font-medium po-text-slate-700 po-flex po-items-center po-space-x-1" }, {
          default: L(() => [
            r("span", null, g(e.label), 1),
            e.info !== null ? (i(), p("abbr", {
              key: 0,
              title: e.info,
              class: "po-w-4 po-text-slate-500"
            }, [
              S(m(Fa), { class: "po-fill-current" })
            ], 8, Vn)) : E("", !0)
          ]),
          _: 1
        }),
        r("div", zn, [
          S(m(sn), {
            class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm",
            onChange: u[0] || (u[0] = (d) => o.value = d.target.value),
            "display-value": (d) => d == null ? void 0 : d.name
          }, null, 8, ["display-value"]),
          S(m(nn), { class: "po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-rounded-r-md po-px-2 focus:po-outline-none" }, {
            default: L(() => [
              S(m(Da), {
                class: "po-h-5 po-w-5 po-text-slate-400",
                "aria-hidden": "true"
              })
            ]),
            _: 1
          }),
          m(n).length > 0 ? (i(), K(m(rn), {
            key: 0,
            class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
          }, {
            default: L(() => [
              (i(!0), p(I, null, Y(m(n), (d) => (i(), K(m(un), {
                key: d.id,
                value: d,
                as: "template"
              }, {
                default: L(({ active: f, selected: b }) => [
                  r("li", {
                    class: G(["po-relative po-cursor-default po-select-none po-py-2 po-pl-3 po-pr-9", f ? "po-bg-mpao-lightblue po-text-white" : "po-text-slate-900"])
                  }, [
                    r("span", {
                      class: G(["po-block po-truncate", b && "po-font-semibold"])
                    }, g(d.name), 3),
                    b ? (i(), p("span", {
                      key: 0,
                      class: G(["po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-pr-4", f ? "po-text-white" : "po-text-mpao-lightblue"])
                    }, [
                      S(m(Ba), {
                        class: "po-h-5 po-w-5",
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
}), qn = ["disabled", "aria-disabled"], Un = ["value", "disabled", "aria-disabled"], Gn = ["href"], Kn = {
  name: "PoButton"
}, Wn = /* @__PURE__ */ Object.assign(Kn, {
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
    const t = e, l = "po-rounded-lg po-transition-colors po-duration-100 po-ease-in-out po-cursor-pointer disabled:po-bg-slate-400 disabled:po-cursor-default disabled:po-hover:bg-slate-400", o = y(() => {
      switch (t.size) {
        case "sm":
          return "po-px-2 po-py-1 po-text-xs";
        case "md":
          return "po-px-4 po-py-2 po-text-sm";
        case "lg":
          return "po-px-5 po-py-3 po-text-normal";
      }
    }), a = y(() => t.overrideColors ? "" : "po-bg-mpao-lightblue hover:po-bg-mpao-blue focus:po-bg-mpao-blue po-text-slate-50");
    return (n, s) => (i(), p(I, null, [
      e.type == "button" ? (i(), p("button", we({
        key: 0,
        class: [l, m(o), m(a)],
        disabled: e.disabled,
        "aria-disabled": e.disabled
      }, n.$attrs), [
        ne(n.$slots, "label", {}, () => [
          pe(g(e.label), 1)
        ])
      ], 16, qn)) : E("", !0),
      e.type == "submit" ? (i(), p("input", we({
        key: 1,
        type: "submit",
        class: [l, m(o), m(a)],
        value: e.label,
        disabled: e.disabled,
        "aria-disabled": e.disabled
      }, n.$attrs), null, 16, Un)) : E("", !0),
      e.type == "link" ? (i(), p("a", we({
        key: 2,
        href: e.to,
        class: [l, m(o), m(a)]
      }, n.$attrs), g(e.label), 17, Gn)) : E("", !0)
    ], 64));
  }
}), Yn = /* @__PURE__ */ r("div", { class: "po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity" }, null, -1), Qn = { class: "po-fixed po-z-10 po-inset-0 po-overflow-y-auto" }, Jn = { class: "po-flex po-items-center po-justify-center po-min-h-screen po-pt-4 po-px-4 po-pb-20 po-text-center sm:po-block sm:po-p-0" }, Xn = /* @__PURE__ */ r("span", {
  class: "po-hidden sm:po-inline-block sm:po-align-middle sm:po-h-screen",
  "aria-hidden": "true"
}, "​", -1), Zn = { class: "po-flex po-items-center po-bg-mpao-lightblue po-rounded-t-xl po-p-5" }, es = { class: "po-grow po-text-md po-font-bold po-text-sky-50" }, ts = { class: "po-shrink-0" }, os = { class: "po-p-5" }, ls = {
  name: "PoModal"
}, ni = /* @__PURE__ */ Object.assign(ls, {
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
    const t = e, { show: l } = Ae(t), o = w(!1);
    return X(l, () => {
      o.value = !1, setTimeout(() => {
        o.value = !0;
      }, 100);
    }), (a, n) => (i(), p("div", null, [
      e.openBtnLabel.length > 0 ? (i(), K(m(Wn), {
        key: 0,
        label: e.openBtnLabel,
        onClick: n[0] || (n[0] = (s) => o.value = !0)
      }, null, 8, ["label"])) : E("", !0),
      S(m(je), {
        as: "template",
        show: o.value
      }, {
        default: L(() => [
          S(m(Me), {
            as: "div",
            class: "po-relative po-z-50",
            onClose: n[2] || (n[2] = (s) => o.value = !1)
          }, {
            default: L(() => [
              S(m(be), {
                as: "template",
                enter: "po-ease-out po-duration-300",
                "enter-from": "po-opacity-0",
                "enter-to": "po-opacity-100",
                leave: "po-ease-in po-duration-200",
                "leave-from": "po-opacity-100",
                "leave-to": "po-opacity-0"
              }, {
                default: L(() => [
                  Yn
                ]),
                _: 1
              }),
              r("div", Qn, [
                r("div", Jn, [
                  Xn,
                  S(m(be), {
                    as: "template",
                    enter: "po-ease-out po-duration-300",
                    "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                    "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                    leave: "po-ease-in po-duration-200",
                    "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                    "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                  }, {
                    default: L(() => [
                      S(m(Ne), { class: "po-relative po-inline-block po-align-bottom po-bg-white po-rounded-xl po-text-left po-shadow-xl po-transform po-transition-all sm:po-align-middle sm:po-max-w-xl po-w-full" }, {
                        default: L(() => [
                          r("div", Zn, [
                            r("h3", es, g(e.modalTitle), 1),
                            r("div", ts, [
                              r("span", {
                                role: "button",
                                class: "po-block",
                                onClick: n[1] || (n[1] = (s) => o.value = !1)
                              }, [
                                S(m(yt), { class: "po-w-5 po-stroke-sky-200 hover:po-stroke-mpao-orange po-transition-colors po-duration-150 po-ease-in-out" })
                              ])
                            ])
                          ]),
                          r("div", os, [
                            ne(a.$slots, "content")
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
}), as = { class: "po-text-sm po-font-medium po-text-slate-700 po-cursor-pointer po-select-none" }, ns = {
  name: "PoToggle"
}, si = /* @__PURE__ */ Object.assign(ns, {
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
    const l = w(e.modelValue);
    return (o, a) => (i(), K(m(Tn), {
      as: "div",
      class: "po-flex po-items-center"
    }, {
      default: L(() => [
        S(m(jn), {
          modelValue: l.value,
          "onUpdate:modelValue": a[0] || (a[0] = (n) => l.value = n),
          onClick: a[1] || (a[1] = (n) => o.$emit("update:modelValue", !l.value)),
          class: G([l.value ? "po-bg-mpao-lightblue" : "po-bg-slate-200", "po-relative po-inline-flex po-h-6 po-w-11 po-flex-shrink-0 po-cursor-pointer po-rounded-full po-border-2 po-border-transparent po-transition-colors po-duration-200 po-ease-in-out focus:po-outline-none focus:po-ring-2 focus:po-ring-mpao-lightblue focus:po-ring-offset-2"])
        }, {
          default: L(() => [
            r("span", {
              "aria-hidden": "true",
              class: G([l.value ? "po-translate-x-5" : "po-translate-x-0", "po-pointer-events-none po-inline-block po-h-5 po-w-5 po-transform po-rounded-full po-bg-white po-shadow po-ring-0 po-transition po-duration-200 po-ease-in-out"])
            }, null, 2)
          ]),
          _: 1
        }, 8, ["modelValue", "class"]),
        S(m(Ln), {
          as: "span",
          class: "po-ml-3"
        }, {
          default: L(() => [
            r("span", as, g(e.label), 1)
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), ss = { class: "po-pt-1 po-space-y-1 po-border-r-2 po-border-slate-200 po-relative" }, rs = ["onClick"], is = {
  name: "PoSectionMenu"
}, ri = /* @__PURE__ */ Object.assign(is, {
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
    return (t, l) => (i(), p("ul", ss, [
      (i(!0), p(I, null, Y(e.menuItems, (o) => (i(), p("li", null, [
        r("span", {
          onClick: (a) => t.$emit("link-click", o.link),
          role: "button",
          class: G(["po-relative po-cursor-pointer -po-right-[0.15rem] po-py-1 po-border-r-2 hover:po-border-mpao-lightblue po-transition-colors po-duration-200 po-ease-in-out po-flex po-items-center po-space-x-2", { "po-border-mpao-lightblue po-text-sm po-text-mpao-lightblue": o.link == e.currPageRoute }, { "po-border-slate-200 po-text-sm po-text-slate-600": o.link !== e.currPageRoute }])
        }, [
          (i(), K(Ee(o.icon), { class: "po-w-4 po-h-4 po-stroke-current" })),
          r("span", null, g(o.label), 1)
        ], 10, rs)
      ]))), 256))
    ]));
  }
}), us = { class: "po-relative po-flex po-items-start" }, ps = { class: "po-flex po-h-5 po-items-center" }, ds = ["name", "id", "checked", "placeholder", "disabled", "required", "aria-describedby"], cs = { class: "po-ml-3 po-text-sm" }, fs = ["for"], vs = ["id"], ms = { class: "po-sr-only" }, bs = ["id"], hs = {
  name: "PoCheckbox"
}, ii = /* @__PURE__ */ Object.assign(hs, {
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
    return (t, l) => (i(), p("div", us, [
      r("div", ps, [
        r("input", we({
          name: `${e.id}-field`,
          id: e.id,
          checked: e.modelValue,
          placeholder: t.placeholder,
          disabled: t.disabled,
          required: t.required,
          "aria-describedby": `${e.id}-description`
        }, t.$attrs, {
          onInput: l[0] || (l[0] = (o) => t.$emit("update:modelValue", o.target.checked)),
          type: "checkbox",
          class: "po-h-4 po-w-4 po-rounded po-border-slate-300 po-text-mpao-lightblue focus:po-ring-mpao-lightblue"
        }), null, 16, ds)
      ]),
      r("div", cs, [
        r("label", {
          for: e.id,
          class: "po-font-medium po-text-slate-600 po-cursor-pointer po-select-none"
        }, g(e.label), 9, fs),
        e.message ? (i(), p("span", {
          key: 0,
          id: `${e.id}-description`,
          class: "po-text-slate-500 po-cursor-default"
        }, [
          r("span", ms, g(e.label), 1),
          pe(" " + g(e.message), 1)
        ], 8, vs)) : E("", !0)
      ]),
      e.errorMessage !== null ? (i(), p("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, g(e.errorMessage), 9, bs)) : E("", !0)
    ]));
  }
}), gs = { class: "po-relative po-pt-5" }, ys = ["name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], xs = ["for"], ws = ["title"], $s = ["id"], ks = ["id"], _s = {
  name: "PoTextarea"
}, ui = /* @__PURE__ */ Object.assign(_s, {
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
    return (t, l) => (i(), p("div", gs, [
      r("textarea", we({
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
        onInput: l[0] || (l[0] = (o) => t.$emit("update:modelValue", o.target.value)),
        class: "po-mt-1 po-peer po-px-3 po-py-2 po-block po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-border-slate-300 po-bg-white focus:po-border-mpao-lightblue focus:po-ring-0 invalid:po-border-red-400 invalid:po-focus:border-red-600 invalid:focus:po-ring-red-600 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default"
      }), null, 16, ys),
      r("label", {
        for: e.id,
        class: "po-absolute po-top-0 po-text-sm po-font-medium po-text-slate-700 peer-focus:po-text-mpao-lightblue peer-invalid:po-text-red-500 peer-invalid:po-peer-focus:text-red-600 po-flex po-items-center po-space-x-1"
      }, [
        r("span", null, g(e.label), 1),
        e.info !== null ? (i(), p("abbr", {
          key: 0,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          S(m(xt))
        ], 8, ws)) : E("", !0)
      ], 8, xs),
      e.message !== null ? (i(), p("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, g(e.message), 9, $s)) : E("", !0),
      e.errorMessage !== null ? (i(), p("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, g(e.errorMessage), 9, ks)) : E("", !0)
    ]));
  }
}), Ss = (e, t) => {
  const l = e.__vccOpts || e;
  for (const [o, a] of t)
    l[o] = a;
  return l;
}, Ps = {
  name: "PoFooter"
}, Os = /* @__PURE__ */ to('<div class="po-p-10 po-pb-5"><div class="po-flex po-space-x-2 po-mt-5 po-justify-end"><img class="po-opacity-30 hover:po-opacity-100 po-transition-opacity po-duration-200 po-ease-in-out po-h-10 po-mr-2" src="https://pension.gov.mv/asset/image/enlgish_website_logo.svg" alt="Pension Office logo"><img class="po-opacity-30 hover:po-opacity-100 po-transition-opacity po-duration-200 po-ease-in-out po-h-10" src="https://pension.gov.mv/asset/image/iso_logo.jpg" alt=""><img class="po-opacity-30 hover:po-opacity-100 po-transition-opacity po-duration-200 po-ease-in-out po-h-10" src="https://pension.gov.mv/asset/image/en-ccc-2020-issa.png" alt=""></div></div><div aria-live="assertive" class="po-pointer-events-none po-fixed po-inset-0 po-flex po-items-start po-px-4 po-py-6 sm:po-p-6 po-z-50"><div class="po-flex po-w-full po-flex-col po-items-end po-space-y-4 sm:po-items-end po-pt-[55px]" id="po-notifications-alert"></div></div>', 2), Cs = [
  Os
];
function Es(e, t, l, o, a, n) {
  return i(), p("div", null, Cs);
}
const pi = /* @__PURE__ */ Ss(Ps, [["render", Es]]), As = {
  key: 0,
  class: "po-flex po-items-start po-space-x-4 po-p-5 po-bg-red-100 po-rounded-md po-mt-5"
}, Ts = { class: "po-pt-1" }, js = { class: "po-text-base po-font-medium po-text-red-700" }, Ls = { class: "po-text-sm po-text-red-800 po-list-disc po-ml-5 po-mt-2" }, Rs = {
  key: 1,
  class: "po-flex po-items-start po-space-x-4 po-p-5 po-bg-green-100 po-rounded-md po-mt-5"
}, Bs = { class: "po-pt-1" }, Ds = { class: "po-text-base po-font-medium po-text-green-700" }, Fs = {
  name: "PoFormStatusMessage"
}, di = /* @__PURE__ */ Object.assign(Fs, {
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
    return (t, l) => e.isError ? (i(), p("div", As, [
      S(m(mo), { class: "po-w-8 po-stroke-red-600" }),
      r("div", Ts, [
        r("span", js, g(e.message), 1),
        r("ul", Ls, [
          (i(!0), p(I, null, Y(e.errorList, (o) => (i(), p("li", null, g(o), 1))), 256))
        ])
      ])
    ])) : (i(), p("div", Rs, [
      S(m(co), { class: "po-w-8 po-stroke-green-600" }),
      r("div", Bs, [
        r("span", Ds, g(e.message), 1)
      ])
    ]));
  }
}), Is = {
  key: 0,
  class: "po-mt-1 po-flex po-space-x-3 po-flex-wrap"
}, Ms = { class: "po-flex po-flex-1" }, Ns = { class: "po-flex po-flex-col" }, Vs = {
  name: "PoRadioInput"
}, ci = /* @__PURE__ */ Object.assign(Vs, {
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
    const o = w(e.preSelected);
    return X(o, () => {
      t("update:modelValue", o.value);
    }), (a, n) => (i(), K(m(On), {
      modelValue: o.value,
      "onUpdate:modelValue": n[0] || (n[0] = (s) => o.value = s)
    }, {
      default: L(() => [
        S(m(bt), { class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700" }, {
          default: L(() => [
            pe(g(e.label), 1)
          ]),
          _: 1
        }),
        e.options !== null ? (i(), p("div", Is, [
          (i(!0), p(I, null, Y(e.options, (s) => (i(), K(m(En), {
            as: "template",
            key: s.id,
            value: s
          }, {
            default: L(({ checked: u, active: d }) => [
              r("div", {
                class: G(["po-transition-colors po-duration-100 po-ease-out", u ? "po-border-transparent" : "po-border-gray-300 hover:po-border-mpao-lightblue", d ? "po-border-mpao-lightblue po-ring-1 po-ring-mpao-lightblue" : "", "po-mb-3 po-relative po-flex po-cursor-pointer po-rounded-lg po-border po-bg-white po-px-3 po-py-2 po-shadow-sm focus:po-outline-none"])
              }, [
                r("span", Ms, [
                  r("span", Ns, [
                    S(m(bt), {
                      as: "span",
                      class: "po-block po-text-sm po-font-medium po-text-gray-900"
                    }, {
                      default: L(() => [
                        pe(g(s.title), 1)
                      ]),
                      _: 2
                    }, 1024),
                    s.description ? (i(), K(m(An), {
                      key: 0,
                      as: "span",
                      class: "po-mt-1 po-flex po-items-center po-text-sm po-text-gray-500"
                    }, {
                      default: L(() => [
                        pe(g(s.description), 1)
                      ]),
                      _: 2
                    }, 1024)) : E("", !0)
                  ])
                ]),
                S(m(Ra), {
                  class: G([u ? "" : "po-invisible", "po-h-5 po-w-5 po-ml-2 po-text-mpao-lightblue"]),
                  "aria-hidden": "true"
                }, null, 8, ["class"]),
                r("span", {
                  class: G(["po-border", u ? "po-border-mpao-lightblue" : "po-border-transparent", "po-pointer-events-none po-absolute -po-inset-px po-rounded-lg"]),
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
}), zs = { class: "po-bg-white po-relative po-group focus-within:po-ring-2 focus-within:po-ring-inset focus-within:po-ring-indigo-500" }, Hs = { class: "po-block po-p-4 po-transition-colors po-duration-75 po-ease-linear" }, qs = { class: "po-flex po-items-start po-space-x-2" }, Us = { class: "po-flex po-items-start po-space-x-1" }, Gs = { class: "po-block po-text-2xl po-font-light po-text-slate-600" }, Ks = {
  key: 0,
  class: "po-text-sm po-text-green-500 po-font-medium po-pt-1"
}, Ws = { class: "po-text-sm po-tracking-wide po-text-slate-500" }, Ys = {
  name: "PoStatsBlock"
}, fi = /* @__PURE__ */ Object.assign(Ys, {
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
    return (t, l) => (i(), p("div", {
      class: G(["po-rounded-md po-bg-slate-200 po-overflow-hidden po-divide-y po-divide-slate-200 sm:po-divide-y-0 po-grid po-gap-px", e.numberOfCols])
    }, [
      (i(!0), p(I, null, Y(e.items, (o) => (i(), p("div", zs, [
        r("span", Hs, [
          r("div", qs, [
            r("div", null, [
              r("span", {
                class: G(["po-inline-flex po-p-2 po-rounded-md", o.bgColor, o.iconColor])
              }, [
                (i(), K(Ee(o.icon), { class: "po-w-4 po-h-4" }))
              ], 2)
            ]),
            r("div", null, [
              r("div", Us, [
                r("span", Gs, g(o.value), 1),
                o.diff ? (i(), p("span", Ks, g(o.diff), 1)) : E("", !0)
              ]),
              r("h4", Ws, g(o.label), 1)
            ])
          ])
        ])
      ]))), 256))
    ], 2));
  }
}), Qs = {
  key: 0,
  class: "po-flex po-space-x-3 po-items-start"
}, Js = { class: "po-flex po-items-center po-space-x-2" }, Xs = ["datetime"], Zs = { class: "po-text-sm po-font-medium po-text-slate-600" }, er = ["datetime"], tr = { class: "flex" }, or = { class: "po-flex po-pt-3 po-flex-wrap po-max-w-sm" }, lr = ["onClick"], ar = {
  key: 1,
  class: "po-w-full po-text-center"
}, nr = { class: "po-inline-block po-text-sm po-italic po-text-slate-500" }, sr = /* @__PURE__ */ r("span", { class: "po-text-lg po-text-slate-300 po-px-3 po-inline-block" }, "—", -1), rr = ["datetime"], ir = {
  name: "PoChatLogItem"
}, vi = /* @__PURE__ */ Object.assign(ir, {
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
    return (t, l) => (i(), p("li", {
      class: G(["po-flex po-px-5", { "po-justify-end po-items-end po-flex-col": e.item.type === "first" }])
    }, [
      e.item.type !== "message" ? (i(), p("div", Qs, [
        e.item.type !== "first" && e.item.avatar !== "" ? (i(), p("div", {
          key: 0,
          class: "po-shrink-0 po-w-8 po-h-8 po-rounded-full po-p-1 po-bg-contain po-bg-slate-100",
          style: oo({ "background-image": `url(${e.item.avatar})` })
        }, null, 4)) : E("", !0),
        r("div", {
          class: G([{ "po-pt-1": e.item.type !== "first" }, { "po-flex po-justify-end po-items-end po-flex-col": e.item.type === "first" }])
        }, [
          r("span", Js, [
            e.item.type === "first" ? (i(), p("time", {
              key: 0,
              datetime: e.item.time,
              class: "po-text-xs po-text-slate-400"
            }, g(e.item.time_human), 9, Xs)) : E("", !0),
            r("span", Zs, g(e.item.name), 1),
            e.item.type === "second" ? (i(), p("time", {
              key: 1,
              datetime: e.item.time,
              class: "po-text-xs po-text-slate-400"
            }, g(e.item.time_human), 9, er)) : E("", !0)
          ]),
          r("div", {
            class: G(["po-mt-2 po-space-y-1", { "po-flex po-justify-end po-items-end po-flex-col": e.item.type === "first" }])
          }, [
            ne(t.$slots, "message", {}, () => [
              (i(!0), p(I, null, Y(e.item.message, (o) => (i(), p("div", tr, [
                r("p", {
                  class: G(["po-text-sm po-rounded-xl po-px-4 po-py-2", { "po-bg-slate-100 po-text-slate-600": e.item.type !== "first" }, { "po-bg-mpao-lightblue po-text-sky-50": e.item.type === "first" }])
                }, g(o), 3)
              ]))), 256))
            ]),
            r("div", or, [
              (i(!0), p(I, null, Y(e.item.actions, (o) => (i(), p("button", {
                onClick: (a) => t.$emit("button-click", o.label),
                class: "po-appearance-none po-border po-border-mpao-lightblue po-bg-white hover:po-bg-mpao-lightblue po-px-3 po-py-1 po-mb-2 po-mr-2 po-rounded-lg po-text-slate-500 hover:po-text-sky-100 po-transition-colors po-duration-150 po-ease-in-out po-text-sm po-ring-0 po-outline-none"
              }, g(o.label), 9, lr))), 256))
            ])
          ], 2)
        ], 2)
      ])) : E("", !0),
      e.item.type === "message" ? (i(), p("div", ar, [
        (i(!0), p(I, null, Y(e.item.message, (o) => (i(), p("p", nr, [
          pe(g(o) + " ", 1),
          sr,
          pe(),
          r("time", {
            datetime: e.item.time,
            class: "po-text-xs po-text-slate-400 po-inline-block"
          }, g(e.item.time_human), 9, rr)
        ]))), 256))
      ])) : E("", !0)
    ], 2));
  }
}), ur = {
  key: 0,
  class: "po-pointer-events-auto po-w-full po-max-w-sm po-overflow-hidden po-rounded-lg po-bg-mpao-lightblue po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5"
}, pr = { class: "po-p-4" }, dr = { class: "po-flex po-items-start" }, cr = { class: "po-flex-shrink-0" }, fr = { class: "po-ml-3 po-w-0 po-flex-1 po-pt-0.5" }, vr = { class: "po-text-sm po-font-medium po-text-sky-100" }, mr = { class: "po-mt-1 po-text-sm po-text-sky-300" }, br = { class: "po-mt-3 po-flex po-space-x-4" }, hr = { class: "po-ml-4 po-flex po-flex-shrink-0" }, gr = /* @__PURE__ */ r("span", { class: "po-sr-only" }, "Close", -1), yr = {
  name: "PoNotification"
}, mi = /* @__PURE__ */ Object.assign(yr, {
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
    const t = e, { show: l } = Ae(t), o = w(!1);
    X(l, () => {
      o.value = !1, setTimeout(() => {
        o.value = !0;
      }, 100);
    });
    const a = w(!1);
    return X(o, () => {
      a.value = !1, setTimeout(() => {
        a.value = !0;
      }, 200);
    }), (n, s) => o.value ? (i(), K(gt, {
      key: 0,
      to: "#po-notifications-alert"
    }, [
      S(lo, {
        "enter-active-class": "po-transform po-ease-out po-duration-300 po-transition",
        "enter-from-class": "po-translate-y-2 po-opacity-0 sm:po-translate-y-0 sm:po-translate-x-2",
        "enter-to-class": "po-translate-y-0 po-opacity-100 sm:po-translate-x-0",
        "leave-active-class": "po-transition po-ease-in po-duration-100",
        "leave-from-class": "po-opacity-100",
        "leave-to-class": "po-opacity-0"
      }, {
        default: L(() => [
          a.value ? (i(), p("div", ur, [
            r("div", pr, [
              r("div", dr, [
                r("div", cr, [
                  ne(n.$slots, "icon")
                ]),
                r("div", fr, [
                  r("p", vr, g(e.label), 1),
                  r("p", mr, g(e.text), 1),
                  r("div", br, [
                    r("button", {
                      onClick: s[0] || (s[0] = (u) => n.$emit("button-click", e.buttonLabel)),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-100 hover:po-text-sky-200 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, g(e.buttonLabel), 1),
                    r("button", {
                      onClick: s[1] || (s[1] = (u) => o.value = !1),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-300 hover:po-text-sky-500 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, "Dismiss")
                  ])
                ]),
                r("div", hr, [
                  r("button", {
                    type: "button",
                    onClick: s[2] || (s[2] = (u) => o.value = !1),
                    class: "po-inline-flex po-rounded-md po-bg-mpao-lightblue po-text-sky-500 hover:po-text-sky-300 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                  }, [
                    gr,
                    S(m(Ma), {
                      class: "po-h-5 po-w-5",
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
}), xr = /* @__PURE__ */ r("div", { class: "po-fixed po-inset-0" }, null, -1), wr = { class: "po-fixed po-inset-0 po-overflow-hidden" }, $r = { class: "po-absolute po-inset-0 po-overflow-hidden" }, kr = { class: "po-pointer-events-none po-fixed po-inset-y-0 po-right-0 po-flex po-max-w-full po-pl-10" }, _r = { class: "po-flex po-h-full po-flex-col po-overflow-y-scroll po-bg-white po-shadow-xl" }, Sr = { class: "po-bg-slate-50 po-py-6 po-px-4 sm:po-px-6" }, Pr = { class: "po-flex po-items-center po-justify-between" }, Or = { class: "po-ml-3 po-flex po-h-7 po-items-center" }, Cr = /* @__PURE__ */ r("span", { class: "po-sr-only" }, "Close panel", -1), Er = {
  key: 0,
  class: "po-mt-1"
}, Ar = { class: "po-text-sm po-text-slate-500" }, Tr = { class: "po-relative po-flex-1 po-py-6 po-px-4 sm:po-px-6" }, jr = {
  name: "PoSlideover"
}, bi = /* @__PURE__ */ Object.assign(jr, {
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
    const t = e, { show: l } = Ae(t), o = w(!1);
    return X(l, () => {
      o.value = !1, setTimeout(() => {
        o.value = !0;
      }, 100);
    }), (a, n) => (i(), K(m(je), {
      as: "template",
      show: o.value
    }, {
      default: L(() => [
        S(m(Me), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: n[1] || (n[1] = (s) => o.value = !1)
        }, {
          default: L(() => [
            xr,
            r("div", wr, [
              r("div", $r, [
                r("div", kr, [
                  S(m(be), {
                    as: "template",
                    enter: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "enter-from": "po-translate-x-full",
                    "enter-to": "po-translate-x-0",
                    leave: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "leave-from": "po-translate-x-0",
                    "leave-to": "po-translate-x-full"
                  }, {
                    default: L(() => [
                      S(m(Ne), { class: "po-pointer-events-auto po-w-screen po-max-w-lg" }, {
                        default: L(() => [
                          r("div", _r, [
                            r("div", Sr, [
                              r("div", Pr, [
                                S(m(Nt), { class: "po-text-lg po-font-medium po-text-slate-600" }, {
                                  default: L(() => [
                                    pe(g(e.label), 1)
                                  ]),
                                  _: 1
                                }),
                                r("div", Or, [
                                  r("button", {
                                    type: "button",
                                    class: "po-rounded-md po-text-slate-500 hover:po-text-mpao-lightblue focus:po-outline-none focus:po-ring-2 focus:po-ring-white",
                                    onClick: n[0] || (n[0] = (s) => o.value = !1)
                                  }, [
                                    Cr,
                                    S(m(yt), {
                                      class: "po-h-6 po-w-6",
                                      "aria-hidden": "true"
                                    })
                                  ])
                                ])
                              ]),
                              e.description ? (i(), p("div", Er, [
                                r("p", Ar, g(e.description), 1)
                              ])) : E("", !0)
                            ]),
                            r("div", Tr, [
                              ne(a.$slots, "content")
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
}), Lr = /* @__PURE__ */ r("div", { class: "po-fixed po-inset-0 po-bg-gray-500 po-bg-opacity-25 po-transition-opacity" }, null, -1), Rr = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto po-p-4 sm:po-p-6 md:po-p-20" }, Br = { class: "po-relative" }, Dr = {
  key: 0,
  class: "po-max-h-96 scroll-py-3 po-overflow-y-auto po-p-3"
}, Fr = {
  name: "PoCommandPalette"
}, hi = /* @__PURE__ */ Object.assign(Fr, {
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
    const t = e, l = w(""), { show: o } = Ae(t), a = w(!1);
    X(o, () => {
      a.value = !1, setTimeout(() => {
        a.value = !0;
      }, 100);
    });
    function n(s) {
      s.ctrlKey && s.key === "b" && (a.value = !0);
    }
    return z(() => {
      window.addEventListener("keyup", n);
    }), ao(() => {
      window.removeEventListener("keyup", n);
    }), (s, u) => (i(), K(m(je), {
      show: a.value,
      as: "template",
      onAfterLeave: u[2] || (u[2] = (d) => l.value = ""),
      appear: ""
    }, {
      default: L(() => [
        S(m(Me), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: u[1] || (u[1] = (d) => a.value = !1)
        }, {
          default: L(() => [
            S(m(be), {
              as: "template",
              enter: "po-ease-out po-duration-300",
              "enter-from": "po-opacity-0",
              "enter-to": "po-opacity-100",
              leave: "po-ease-in po-duration-200",
              "leave-from": "po-opacity-100",
              "leave-to": "po-opacity-0"
            }, {
              default: L(() => [
                Lr
              ]),
              _: 1
            }),
            r("div", Rr, [
              S(m(be), {
                as: "template",
                enter: "po-ease-out po-duration-300",
                "enter-from": "po-opacity-0 po-scale-95",
                "enter-to": "po-opacity-100 po-scale-100",
                leave: "po-ease-in po-duration-200",
                "leave-from": "po-opacity-100 po-scale-100",
                "leave-to": "po-opacity-0 po-scale-95"
              }, {
                default: L(() => [
                  S(m(Ne), { class: "po-mx-auto po-max-w-xl po-transform po-divide-y po-divide-gray-100 po-overflow-hidden po-rounded-xl po-bg-white po-shadow-2xl po-ring-1 po-ring-black po-ring-opacity-5 po-transition-all" }, {
                    default: L(() => [
                      r("div", Br, [
                        S(m(Ia), {
                          class: "po-pointer-events-none po-absolute po-top-3.5 po-left-4 po-h-5 po-w-5 po-text-gray-400",
                          "aria-hidden": "true"
                        }),
                        r("input", {
                          type: "text",
                          name: "",
                          class: "po-h-12 po-w-full po-border-0 po-bg-transparent po-pl-11 po-pr-4 po-text-gray-800 po-placeholder-gray-400 focus:po-ring-0 sm:po-text-sm",
                          placeholder: "Search...",
                          onChange: u[0] || (u[0] = (d) => l.value = d.target.value)
                        }, null, 32)
                      ]),
                      e.showContent ? (i(), p("div", Dr, [
                        ne(s.$slots, "content")
                      ])) : E("", !0)
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
}), Ir = /* @__PURE__ */ r("div", { class: "po-fixed po-inset-0 po-bg-gray-500 po-bg-opacity-75 po-transition-opacity" }, null, -1), Mr = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto" }, Nr = { class: "po-flex po-min-h-full po-items-start po-justify-center po-p-4 po-text-center sm:po-p-0" }, Vr = { class: "po-p-5" }, zr = { class: "po-text-center" }, Hr = {
  key: 0,
  class: "po-mt-2"
}, qr = { class: "po-text-sm po-text-gray-500" }, Ur = { class: "po-border-t po-border-slate-200 po-flex po-divide-x po-divide-slate-200" }, Gr = {
  name: "PoAlert"
}, gi = /* @__PURE__ */ Object.assign(Gr, {
  props: {
    /**
     * Modal cancel button label
     */
    cancelBtnLabel: {
      type: String,
      default: "Cancel"
    },
    /**
     * Modal cancel button label
     */
    okBtnLabel: {
      type: String,
      default: "Ok"
    },
    /**
     * Modal Title
     */
    alertTitle: {
      type: String,
      default: "Alert"
    },
    /**
     * Modal Title
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
  setup(e) {
    const t = e, { show: l } = Ae(t), o = w(!1);
    return X(l, () => {
      o.value = !1, setTimeout(() => {
        o.value = !0;
      }, 100);
    }), (a, n) => (i(), K(m(je), {
      as: "template",
      show: o.value
    }, {
      default: L(() => [
        S(m(Me), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: n[2] || (n[2] = (s) => o.value = !1)
        }, {
          default: L(() => [
            S(m(be), {
              as: "template",
              enter: "po-ease-out po-duration-300",
              "enter-from": "po-opacity-0",
              "enter-to": "po-opacity-100",
              leave: "po-ease-in po-duration-200",
              "leave-from": "po-opacity-100",
              "leave-to": "po-opacity-0"
            }, {
              default: L(() => [
                Ir
              ]),
              _: 1
            }),
            r("div", Mr, [
              r("div", Nr, [
                S(m(be), {
                  as: "template",
                  enter: "po-ease-out po-duration-300",
                  "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                  "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                  leave: "po-ease-in po-duration-200",
                  "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                  "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                }, {
                  default: L(() => [
                    S(m(Ne), { class: "po-relative po-transform po-overflow-hidden po-rounded-lg po-bg-white po-text-left po-shadow-xl po-transition-all sm:po-my-8 sm:po-w-full sm:po-max-w-sm" }, {
                      default: L(() => [
                        r("div", Vr, [
                          r("div", zr, [
                            S(m(Nt), {
                              as: "h3",
                              class: "po-text-lg po-font-medium po-leading-6 po-text-gray-900"
                            }, {
                              default: L(() => [
                                pe(g(e.alertTitle), 1)
                              ]),
                              _: 1
                            }),
                            e.alertDescription !== "" ? (i(), p("div", Hr, [
                              r("p", qr, g(e.alertDescription), 1)
                            ])) : E("", !0)
                          ])
                        ]),
                        r("div", Ur, [
                          r("button", {
                            onClick: n[0] || (n[0] = (s) => o.value = !1),
                            class: "po-text-sm po-bg-white po-text-slate-500 hover:po-bg-slate-50 po-transition-colors po-duration-100 po-ease-out po-font-medium po-py-3 po-px-5 po-w-1/2 focus:po-ring-0"
                          }, g(e.cancelBtnLabel), 1),
                          r("button", {
                            onClick: n[1] || (n[1] = (s) => {
                              a.$emit("button-click", "ok"), o.value = !1;
                            }),
                            class: "po-text-sm po-bg-white po-text-mpao-lightblue hover:po-bg-slate-50 po-transition-colors po-duration-100 po-ease-out po-font-medium po-py-3 po-px-5 po-w-1/2 focus:po-ring-0"
                          }, g(e.okBtnLabel), 1)
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
});
export {
  Qr as PoActionBar,
  gi as PoAlert,
  To as PoAppIcon,
  Wo as PoAppTray,
  Wn as PoButton,
  Jr as PoCard,
  Xr as PoCardSearch,
  vi as PoChatLogItem,
  ii as PoCheckbox,
  hi as PoCommandPalette,
  ti as PoDescriptionList,
  pi as PoFooter,
  di as PoFormStatusMessage,
  oi as PoInputField,
  li as PoInputFile,
  ni as PoModal,
  mi as PoNotification,
  ul as PoNotificationHub,
  Zr as PoPageTitle,
  la as PoPagination,
  El as PoProfileSwitcher,
  ci as PoRadioInput,
  Do as PoSearchBar,
  ri as PoSectionMenu,
  ai as PoSelectField,
  Yr as PoSidebarDrawer,
  bi as PoSlideover,
  fi as PoStatsBlock,
  ei as PoTable,
  ui as PoTextarea,
  si as PoToggle,
  Wr as PoTopBar
};
