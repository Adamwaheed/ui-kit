import { openBlock as i, createElementBlock as p, createElementVNode as s, createVNode as k, unref as m, withCtx as L, renderSlot as ne, createBlock as K, createCommentVNode as E, toDisplayString as g, ref as w, onMounted as z, onUnmounted as se, withDirectives as Qt, isRef as Jt, vModelText as Xt, Fragment as M, renderList as Y, normalizeClass as G, resolveDynamicComponent as Ee, normalizeProps as it, guardReactiveProps as ut, mergeProps as we, cloneVNode as Zt, h as q, inject as ee, provide as oe, watchEffect as J, computed as x, defineComponent as V, toRaw as F, watch as X, nextTick as fe, Teleport as gt, reactive as eo, createTextVNode as pe, toRefs as Ae, createStaticVNode as to, normalizeStyle as oo, Transition as lo, onBeforeUnmount as ao } from "vue";
function no(e, t) {
  return i(), p("svg", {
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
function so(e, t) {
  return i(), p("svg", {
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
function ro(e, t) {
  return i(), p("svg", {
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
function io(e, t) {
  return i(), p("svg", {
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
function uo(e, t) {
  return i(), p("svg", {
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
function po(e, t) {
  return i(), p("svg", {
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
function co(e, t) {
  return i(), p("svg", {
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
function fo(e, t) {
  return i(), p("svg", {
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
function vo(e, t) {
  return i(), p("svg", {
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
function mo(e, t) {
  return i(), p("svg", {
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
function ho(e, t) {
  return i(), p("svg", {
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
function Ze(e, t) {
  return i(), p("svg", {
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
function bo(e, t) {
  return i(), p("svg", {
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
function go(e, t) {
  return i(), p("svg", {
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
function pt(e, t) {
  return i(), p("svg", {
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
function xt(e, t) {
  return i(), p("svg", {
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
const xo = { class: "po-bg-mpao-blue po-fixed po-top-0 po-w-full po-z-50 po-flex" }, yo = { class: "po-shrink-0 po-px-3 po-pt-3" }, wo = {
  for: "sidebar-drawer-toggle",
  role: "button",
  class: "genie-effect po-flex po-items-center po-justify-center po-bg-[#2e5266] po-rounded-full po-w-10 po-h-10 po-select-none po-text-slate-100"
}, $o = { class: "po-mx-auto po-max-w-full po-px-4 po-grow sm:po-px-4" }, ko = { class: "po-flex po-h-16 po-items-center po-justify-between po-space-x-12" }, _o = { class: "po-flex po-items-center po-space-x-3" }, So = {
  key: 0,
  class: "po-block po-w-6 po-text-slate-100 sm:po-hidden",
  role: "button"
}, Po = {
  name: "PoTopBar"
}, ni = /* @__PURE__ */ Object.assign(Po, {
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
    return (o, n) => (i(), p("nav", xo, [
      s("div", yo, [
        s("label", wo, [
          k(m(io), { class: "po-w-6 po-fill-current" })
        ])
      ]),
      s("div", $o, [
        s("div", ko, [
          k(m(To), { "app-name": e.appName }, {
            icon: L(() => [
              ne(o.$slots, "appIcon")
            ]),
            _: 3
          }, 8, ["app-name"]),
          e.hasSearch ? (i(), K(m(Do), {
            key: 0,
            onQuery: l
          })) : E("", !0),
          s("div", _o, [
            e.hasSearch ? (i(), p("span", So, [
              k(m(Ze), { class: "po-stroke-current" })
            ])) : E("", !0),
            k(m(ul), {
              notifications: e.notifications,
              "has-new-notifications": e.hasNewNotifications
            }, null, 8, ["notifications", "has-new-notifications"]),
            k(m(Wo), { "app-list": e.appList }, null, 8, ["app-list"]),
            k(m(El), { "profile-switcher-data": e.profileSwitcherData }, null, 8, ["profile-switcher-data"])
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
      s("div", Co, [
        ne(t.$slots, "icon")
      ]),
      s("span", Eo, g(e.appName), 1)
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
    const o = (n) => {
      n.key === "Enter" && 0 < l.value.length && t("query", l.value);
    };
    return z(() => document.addEventListener("keydown", o)), se(() => {
      document.removeEventListener("keydown", o);
    }), (n, a) => (i(), p("div", jo, [
      Qt(s("input", {
        "onUpdate:modelValue": a[0] || (a[0] = (r) => Jt(l) ? l.value = r : l = r),
        type: "text",
        id: "main-search",
        placeholder: e.placeholder,
        class: "peer/search po-bg-transparent po-border po-border-transparent po-text-slate-100 po-text-sm po-rounded-md po-ring-0 po-outline-none focus:po-outline-none focus:po-ring-0 po-transition-colors po-ease-linear po-duration-100 po-block po-w-full po-pl-10 po-p-2.5 po-appearance-none focus:po-border-slate-400 hover:po-border-slate-600"
      }, null, 8, Lo), [
        [Xt, m(l)]
      ]),
      s("div", Ro, [
        k(m(Ze), { class: "po-w-5 po-h-5 po-stroke-current" })
      ])
    ]));
  }
}), Fo = { class: "po-relative" }, Mo = {
  for: "apps-menu-toggle",
  class: "po-block po-w-6 po-text-slate-100 po-genie-effect po-z-50",
  role: "button"
}, Io = /* @__PURE__ */ s("input", {
  type: "checkbox",
  name: "",
  class: "po-hidden po-peer/apps",
  role: "none",
  id: "apps-menu-toggle"
}, null, -1), Vo = { class: "po-invisible po-z-10 po-absolute -po-left-[19rem] po-top-[35px] po-opacity-0 po-bg-white po-shadow-lg po-rounded-md po-w-96 po-p-4 po-border po-border-slate-200 po-pt-5 po-space-y-5 po-transition-all po-duration-100 po-ease-linear sm:po-left-auto sm:po-right-0 peer-checked/apps:po-visible peer-checked/apps:po-top-[45px] peer-checked/apps:po-opacity-100" }, No = {
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
      s("label", Mo, [
        k(m(go))
      ]),
      Io,
      s("div", Vo, [
        (i(!0), p(M, null, Y(e.appList, (o) => (i(), p("div", null, [
          o.groupName.length > 0 ? (i(), p("span", No, g(o.groupName), 1)) : E("", !0),
          s("ul", zo, [
            (i(!0), p(M, null, Y(o.apps, (n) => (i(), p("li", null, [
              s("a", {
                href: n.url,
                class: "po-flex po-flex-col po-group po-space-y-3 po-justify-center po-items-center po-py-2 genie-effect"
              }, [
                s("span", qo, [
                  s("img", {
                    src: n.icon,
                    alt: `${n.name} icon`
                  }, null, 8, Uo)
                ]),
                s("span", Go, g(n.name), 1)
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
}, Xo = /* @__PURE__ */ s("input", {
  type: "checkbox",
  name: "",
  class: "po-hidden po-peer/apps",
  role: "none",
  id: "notifications-menu-toggle"
}, null, -1), Zo = { class: "po-invisible po-z-10 po-absolute -po-left-[19rem] po-top-[55px] po-opacity-0 po-bg-white po-shadow-lg po-rounded-md po-w-96 po-p-4 po-border po-border-slate-200 po-pt-5 po-transition-all po-duration-100 po-ease-linear sm:po-left-auto sm:po-right-[6rem] peer-checked/apps:po-visible peer-checked/apps:po-top-[64px] peer-checked/apps:po-opacity-100" }, el = { class: "po-space-y-2 po-p-2" }, tl = { class: "po-space-y-2 po-p-2" }, ol = { class: "po-flex po-items-center po-justify-between" }, ll = { class: "po-text-sm po-font-semibold po-text-slate-700 po-grow po-flex po-space-x-2 po-items-center" }, al = {
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
      s("label", Qo, [
        e.hasNewNotifications ? (i(), p("span", Jo)) : E("", !0),
        k(m(uo), { class: "po-stroke-current" })
      ]),
      Xo,
      s("div", Zo, [
        s("ul", el, [
          (i(!0), p(M, null, Y(e.notifications, (o) => (i(), p("li", tl, [
            s("span", ol, [
              s("p", ll, [
                o.seen ? E("", !0) : (i(), p("span", al)),
                s("span", nl, g(o.name), 1)
              ]),
              s("span", sl, g(o.time), 1)
            ]),
            s("span", rl, g(o.text), 1)
          ]))), 256))
        ])
      ])
    ]));
  }
}), pl = { class: "po-relative" }, dl = {
  for: "profile-toggle",
  class: "po-select-none po-rounded-full po-w-10 po-h-10 po-bg-[#2e5266] po-flex po-items-center po-justify-center genie-effect po-z-50",
  role: "button"
}, cl = { class: "po-text-xs po-text-white po-font-semibold" }, fl = /* @__PURE__ */ s("input", {
  type: "checkbox",
  name: "",
  class: "po-hidden po-peer/profile",
  role: "none",
  id: "profile-toggle"
}, null, -1), vl = { class: "po-invisible po-space-y-1 po-z-10 po-absolute po-right-0 po-top-[45px] po-opacity-0 po-bg-white po-shadow-lg po-rounded-md po-w-96 po-p-4 po-border po-border-slate-200 po-pt-5 po-transition-all po-duration-100 po-ease-linear peer-checked/profile:po-visible peer-checked/profile:po-top-[54px] peer-checked/profile:po-opacity-100" }, ml = ["href"], hl = { class: "po-w-5" }, bl = { class: "po-flex po-flex-col po-space-y-1" }, gl = { class: "po-text-sm po-font-normal" }, xl = {
  key: 0,
  class: "po-text-xs po-text-slate-400"
}, yl = /* @__PURE__ */ s("hr", { class: "po-border-slate-200" }, null, -1), wl = { class: "md:po-grid po-grid-cols-2" }, $l = ["href"], kl = { class: "po-w-5" }, _l = /* @__PURE__ */ s("span", { class: "po-text-sm po-font-normal" }, "Profile", -1), Sl = {
  href: "#",
  class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-white hover:po-bg-slate-100",
  role: "button"
}, Pl = { class: "po-w-5" }, Ol = /* @__PURE__ */ s("span", { class: "po-text-sm po-font-normal" }, "Logout", -1), Cl = {
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
      s("label", dl, [
        s("span", cl, g(e.profileSwitcherData.currProfileLabel), 1)
      ]),
      fl,
      s("div", vl, [
        (i(!0), p(M, null, Y(e.profileSwitcherData.profiles, (o) => (i(), p("a", {
          href: o.url,
          class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-white hover:po-bg-slate-100",
          role: "button"
        }, [
          s("span", hl, [
            o.isPersonal ? (i(), K(m(pt), {
              key: 0,
              class: G(["po-stroke-current", { "po-stroke-mpao-orange": o.current }])
            }, null, 8, ["class"])) : E("", !0),
            o.isPersonal ? E("", !0) : (i(), K(m(po), {
              key: 1,
              class: G(["po-stroke-current", { "po-stroke-mpao-orange": o.current }])
            }, null, 8, ["class"]))
          ]),
          s("span", bl, [
            s("span", gl, g(o.name), 1),
            o.identifier.length !== 0 ? (i(), p("span", xl, g(o.identifier), 1)) : E("", !0)
          ])
        ], 8, ml))), 256)),
        yl,
        s("div", wl, [
          s("a", {
            href: e.profileSwitcherData.currentProfileUrl,
            class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-white hover:po-bg-slate-100",
            role: "button"
          }, [
            s("span", kl, [
              k(m(pt), { class: "po-stroke-current" })
            ]),
            _l
          ], 8, $l),
          s("a", Sl, [
            s("span", Pl, [
              k(m(so), { class: "po-stroke-current" })
            ]),
            Ol
          ])
        ])
      ])
    ]));
  }
}), Al = /* @__PURE__ */ s("input", {
  type: "checkbox",
  name: "",
  class: "po-hidden shell-sidebar--toggle",
  role: "none",
  id: "sidebar-drawer-toggle",
  checked: "",
  "aria-checked": "true"
}, null, -1), Tl = { class: "shell-sidebar" }, jl = { class: "shell-sidebar--section" }, Ll = { class: "shell-sidebar--menu" }, Rl = ["onClick", "title"], Bl = { class: "shell-sidebar--icon" }, Dl = { class: "shell-sidebar--label" }, Fl = {
  name: "PoSidebarDrawer"
}, si = /* @__PURE__ */ Object.assign(Fl, {
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
    return (t, l) => (i(), p(M, null, [
      Al,
      s("aside", Tl, [
        (i(!0), p(M, null, Y(e.content, (o) => (i(), p("div", null, [
          s("span", jl, g(o.groupName), 1),
          s("ul", Ll, [
            (i(!0), p(M, null, Y(o.items, (n) => (i(), p("li", null, [
              s("button", {
                onClick: (a) => t.$emit("button-click", n.url),
                class: G(["shell-sidebar--item", { active: n.url == e.currRoute }]),
                title: `Go to ${n.label}`
              }, [
                s("span", Bl, [
                  (i(), K(Ee(n.icon), { class: "po-stroke-current po-w-4 po-h-4" }))
                ]),
                s("span", Dl, g(n.label), 1)
              ], 10, Rl)
            ]))), 256))
          ])
        ]))), 256))
      ])
    ], 64));
  }
}), Ml = { class: "shell-content--action-bar" }, Il = { class: "action-bar__nav" }, Vl = ["onClick"], Nl = { class: "action-bar__nav_label" }, zl = {
  key: 0,
  class: "po-shrink-0 po-flex po-space-x-1"
}, Hl = {
  name: "PoActionBar"
}, ri = /* @__PURE__ */ Object.assign(Hl, {
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
    return (t, l) => (i(), p("section", Ml, [
      s("nav", Il, [
        (i(!0), p(M, null, Y(e.items, (o) => (i(), p("span", {
          onClick: (n) => t.$emit("button-click", o.label),
          class: "action-bar__nav_link"
        }, [
          (i(), K(Ee(o.icon), { class: "po-stroke-current po-w-5 po-h-5" })),
          s("span", Nl, g(o.label), 1)
        ], 8, Vl))), 256))
      ]),
      e.showBackButton ? (i(), p("nav", zl, [
        s("span", {
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
}, ii = /* @__PURE__ */ Object.assign(Gl, {
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
}, ui = /* @__PURE__ */ Object.assign(Zl, {
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
      s("form", Wl, [
        s("label", Yl, g(e.placeholder), 1),
        s("div", Ql, [
          s("div", Jl, [
            k(m(Ze), { class: "po-h-5 po-w-5 po-flex-shrink-0" })
          ]),
          s("input", {
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
      s("span", ta, g(e.pagination.label), 1),
      e.pagination.nextLink !== null ? (i(), p("button", {
        key: 0,
        title: "Previous",
        onClick: l[0] || (l[0] = (o) => t.$emit("button-click", "prev")),
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        k(m(fo), { class: "po-w-4 po-stroke-current" })
      ])) : E("", !0),
      e.pagination.prevLink !== null ? (i(), p("button", {
        key: 1,
        title: "Next",
        onClick: l[1] || (l[1] = (o) => t.$emit("button-click", "next")),
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        k(m(vo), { class: "po-w-4 po-stroke-current" })
      ])) : E("", !0)
    ])) : E("", !0);
  }
}), aa = { class: "po-flex po-items-center po-space-x-1" }, na = { class: "po-text-xl po-font-semibold po-text-slate-800 po-grow" }, sa = {
  key: 2,
  class: "po-border-l po-border-slate-400 po-h-3 po-w-3 po-ml-1"
}, ra = {
  name: "PoPageTitle"
}, pi = /* @__PURE__ */ Object.assign(ra, {
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
      s("h1", na, g(e.label), 1),
      e.showFilter ? (i(), p("button", {
        key: 0,
        title: "Filter",
        onClick: o[0] || (o[0] = (n) => {
          l.$emit("button-click", "filter"), t.value = !t.value;
        }),
        class: G(["po-p-2 po-rounded-md hover:po-bg-slate-200 po-transition-colors po-duration-75 po-ease-in-out", { "po-text-mpao-orange hover:po-text-mpao-orange": t.value }, { "tpo-ext-slate-600 hover:po-text-mpao-blue": !t.value }])
      }, [
        k(m(ho), { class: "po-w-4 po-stroke-current" })
      ], 2)) : E("", !0),
      e.showDownload ? (i(), p("button", {
        key: 1,
        title: "Download",
        onClick: o[1] || (o[1] = (n) => l.$emit("button-click", "download")),
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        k(m(no), { class: "po-w-4 po-stroke-current" })
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
}, di = /* @__PURE__ */ Object.assign(ca, {
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
      s("thead", null, [
        s("tr", null, [
          (i(!0), p(M, null, Y(e.thead, (o) => (i(), p("th", null, [
            ne(t.$slots, "th", it(ut(o)))
          ]))), 256))
        ])
      ]),
      s("tbody", null, [
        e.tbody !== null || e.tbody !== null && e.tbody.length !== 0 ? (i(!0), p(M, { key: 0 }, Y(e.tbody, (o) => (i(), p("tr", null, [
          ne(t.$slots, "td", it(ut(o)))
        ]))), 256)) : E("", !0),
        e.tbody == null || e.tbody !== null && e.tbody.length == 0 ? (i(), p("tr", ua, [
          s("td", {
            colspan: e.thead.length + 1,
            class: "po-text-center"
          }, [
            s("span", da, g(e.emptyMessage), 1)
          ], 8, pa)
        ])) : E("", !0)
      ])
    ]));
  }
}), fa = { class: "" }, va = { class: "po-grow" }, ma = ["onClick"], ha = {
  name: "PoDescriptionList"
}, ci = /* @__PURE__ */ Object.assign(ha, {
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
        (i(!0), p(M, null, Y(e.items, (o) => (i(), p("div", null, [
          s("dt", null, g(o.title), 1),
          s("dd", fa, [
            s("span", va, g(o.description), 1),
            o.action !== void 0 ? (i(), p("span", {
              key: 0,
              class: "po-shrink-0 po-text-mpao-lightblue hover:po-text-mpao-blue po-transition-colors po-duration-100 po-ease-in-out po-px-2 po-cursor-pointer",
              onClick: (n) => t.$emit("button-click", o.action)
            }, g(o.action), 9, ma)) : E("", !0)
          ])
        ]))), 256))
      ])
    ], 2));
  }
});
function ba(e, t) {
  return i(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", { d: "M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" }),
    s("path", { d: "M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" })
  ]);
}
function ga(e, t) {
  return i(), p("svg", {
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
function xa(e, t) {
  return i(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", { d: "M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" })
  ]);
}
function yt(e, t) {
  return i(), p("svg", {
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
function ya(e, t) {
  return i(), p("svg", {
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
const wa = { class: "po-relative po-pt-5" }, $a = ["type", "name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], ka = ["for"], _a = ["title"], Sa = ["id"], Pa = ["id"], Oa = {
  name: "PoInputField"
}, fi = /* @__PURE__ */ Object.assign(Oa, {
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
    return (t, l) => (i(), p("div", wa, [
      s("input", we({
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
      }), null, 16, $a),
      s("label", {
        for: e.id,
        class: G(["po-absolute po-top-0 po-text-sm po-font-medium po-flex po-items-center po-space-x-1", { "po-text-red-500 peer-focus:po-text-red-600": e.hasError }, { "po-text-slate-700 peer-focus:po-text-mpao-lightblue": !e.hasError }])
      }, [
        s("span", null, g(e.label), 1),
        e.info !== null ? (i(), p("abbr", {
          key: 0,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          k(m(yt), { class: "po-fill-current" })
        ], 8, _a)) : E("", !0)
      ], 10, ka),
      e.message !== null ? (i(), p("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, g(e.message), 9, Sa)) : E("", !0),
      e.hasError && e.errorMessage !== null ? (i(), p("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-center po-space-x-1",
        id: `${e.id}-error`
      }, [
        k(m(ga), { class: "po-fill-current po-w-4" }),
        s("span", null, g(e.errorMessage), 1)
      ], 8, Pa)) : E("", !0)
    ]));
  }
}), Ca = { class: "po-relative po-pt-5" }, Ea = { class: "po-text-sm po-font-medium po-text-slate-700 peer-focus:po-text-mpao-lightblue peer-invalid:po-text-red-500 peer-invalid:peer-focus:po-text-red-600 po-flex po-items-center po-space-x-1" }, Aa = ["name", "id", "value"], Ta = ["for"], ja = { class: "po-flex po-items-center po-space-x-1" }, La = /* @__PURE__ */ s("span", { class: "po-text-sm" }, "Choose file", -1), Ra = ["id"], Ba = ["id"], Da = {
  name: "PoInputFile"
}, vi = /* @__PURE__ */ Object.assign(Da, {
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
    return (t, l) => (i(), p("div", Ca, [
      s("span", Ea, g(e.label), 1),
      s("input", {
        name: `${e.id}-upload`,
        id: `${e.id}-fileupload`,
        value: e.modelValue,
        type: "file",
        onInput: l[0] || (l[0] = (o) => t.$emit("update:modelValue", o.target.value)),
        class: "po-sr-only po-peer"
      }, null, 40, Aa),
      s("label", {
        for: `${e.id}-fileupload`,
        class: "po-mt-1 po-block po-w-full po-border po-cursor-pointer po-rounded-md po-border-slate-300 po-bg-white peer-focus:po-border-mpao-lightblue invalid:po-border-red-400 invalid:focus:po-border-red-600 invalid:focus:po-ring-red-600 sm:po-text-sm po-p-2"
      }, [
        s("div", ja, [
          k(m(bo), { class: "po-w-4 po-stroke-slate-500" }),
          La
        ])
      ], 8, Ta),
      e.message !== null ? (i(), p("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, g(e.message), 9, Ra)) : E("", !0),
      e.errorMessage !== null ? (i(), p("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, g(e.errorMessage), 9, Ba)) : E("", !0)
    ]));
  }
});
function Fa(e, t) {
  return i(), p("svg", {
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
function Ma(e, t) {
  return i(), p("svg", {
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
function Ia(e, t) {
  return i(), p("svg", {
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
function Va(e, t) {
  return i(), p("svg", {
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
function Na(e, t) {
  return i(), p("svg", {
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
function za(e, t) {
  return i(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
  ]);
}
function U(e, t, ...l) {
  if (e in t) {
    let n = t[e];
    return typeof n == "function" ? n(...l) : n;
  }
  let o = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((n) => `"${n}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(o, U), o;
}
var me = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(me || {}), ve = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(ve || {});
function N({ visible: e = !0, features: t = 0, ourProps: l, theirProps: o, ...n }) {
  var a;
  let r = Ha(o, l), u = Object.assign(n, { props: r });
  if (e || t & 2 && r.static)
    return Ue(u);
  if (t & 1) {
    let d = (a = r.unmount) == null || a ? 0 : 1;
    return U(d, { [0]() {
      return null;
    }, [1]() {
      return Ue({ ...n, props: { ...r, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Ue(u);
}
function Ue({ props: e, attrs: t, slots: l, slot: o, name: n }) {
  var a;
  let { as: r, ...u } = Se(e, ["unmount", "static"]), d = (a = l.default) == null ? void 0 : a.call(l, o), f = {};
  if (o) {
    let h = !1, b = [];
    for (let [y, _] of Object.entries(o))
      typeof _ == "boolean" && (h = !0), _ === !0 && b.push(y);
    h && (f["data-headlessui-state"] = b.join(" "));
  }
  if (r === "template") {
    if (d = wt(d ?? []), Object.keys(u).length > 0 || Object.keys(t).length > 0) {
      let [h, ...b] = d ?? [];
      if (!qa(h) || b.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${n} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(u).concat(Object.keys(t)).sort((y, _) => y.localeCompare(_)).map((y) => `  - ${y}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((y) => `  - ${y}`).join(`
`)].join(`
`));
      return Zt(h, Object.assign({}, u, f));
    }
    return Array.isArray(d) && d.length === 1 ? d[0] : d;
  }
  return q(r, Object.assign({}, u, f), { default: () => d });
}
function wt(e) {
  return e.flatMap((t) => t.type === M ? wt(t.children) : [t]);
}
function Ha(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, l = {};
  for (let o of e)
    for (let n in o)
      n.startsWith("on") && typeof o[n] == "function" ? (l[n] != null || (l[n] = []), l[n].push(o[n])) : t[n] = o[n];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(l).map((o) => [o, void 0])));
  for (let o in l)
    Object.assign(t, { [o](n, ...a) {
      let r = l[o];
      for (let u of r) {
        if (n instanceof Event && n.defaultPrevented)
          return;
        u(n, ...a);
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
function qa(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Ua = 0;
function Ga() {
  return ++Ua;
}
function Z() {
  return Ga();
}
var I = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(I || {});
function Ka(e) {
  throw new Error("Unexpected object: " + e);
}
var Q = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(Q || {});
function Wa(e, t) {
  let l = t.resolveItems();
  if (l.length <= 0)
    return null;
  let o = t.resolveActiveIndex(), n = o ?? -1, a = (() => {
    switch (e.focus) {
      case 0:
        return l.findIndex((r) => !t.resolveDisabled(r));
      case 1: {
        let r = l.slice().reverse().findIndex((u, d, f) => n !== -1 && f.length - d - 1 >= n ? !1 : !t.resolveDisabled(u));
        return r === -1 ? r : l.length - 1 - r;
      }
      case 2:
        return l.findIndex((r, u) => u <= n ? !1 : !t.resolveDisabled(r));
      case 3: {
        let r = l.slice().reverse().findIndex((u) => !t.resolveDisabled(u));
        return r === -1 ? r : l.length - 1 - r;
      }
      case 4:
        return l.findIndex((r) => t.resolveId(r) === e.id);
      case 5:
        return null;
      default:
        Ka(e);
    }
  })();
  return a === -1 ? o : a;
}
function B(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let $t = Symbol("Context");
var ue = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ue || {});
function Ya() {
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
    let n = e.value;
    if (!n || o !== void 0 && !o.value)
      return;
    let a = ie(e);
    if (!a)
      return;
    let r = Object.assign((d) => t(d), { acceptNode: t }), u = a.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, r, !1);
    for (; u.nextNode(); )
      l(u.currentNode);
  });
}
let We = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var ae = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ae || {}), Be = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Be || {}), Qa = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Qa || {});
function Ja(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(We)).sort((t, l) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (l.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Pt = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Pt || {});
function Xa(e, t = 0) {
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
let Za = ["textarea", "input"].join(",");
function en(e) {
  var t, l;
  return (l = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Za)) != null ? l : !1;
}
function tt(e, t = (l) => l) {
  return e.slice().sort((l, o) => {
    let n = t(l), a = t(o);
    if (n === null || a === null)
      return 0;
    let r = n.compareDocumentPosition(a);
    return r & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : r & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function ke(e, t, { sorted: l = !0, relativeTo: o = null, skipElements: n = [] } = {}) {
  var a;
  let r = (a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? a : document, u = Array.isArray(e) ? l ? tt(e) : e : Ja(e);
  n.length > 0 && (u = u.filter((v) => !n.includes(v))), o = o ?? r.activeElement;
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
  })(), h = t & 32 ? { preventScroll: !0 } : {}, b = 0, y = u.length, _;
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
    _ = u[v], _ == null || _.focus(h), b += d;
  } while (_ !== r.activeElement);
  return t & 6 && en(_) && _.select(), _.hasAttribute("tabindex") || _.setAttribute("tabindex", "0"), 2;
}
function Ge(e, t, l) {
  Fe || J((o) => {
    document.addEventListener(e, t, l), o(() => document.removeEventListener(e, t, l));
  });
}
function Ot(e, t, l = x(() => !0)) {
  function o(a, r) {
    if (!l.value || a.defaultPrevented)
      return;
    let u = r(a);
    if (u === null || !u.getRootNode().contains(u))
      return;
    let d = function f(h) {
      return typeof h == "function" ? f(h()) : Array.isArray(h) || h instanceof Set ? h : [h];
    }(e);
    for (let f of d) {
      if (f === null)
        continue;
      let h = f instanceof HTMLElement ? f : B(f);
      if (h != null && h.contains(u) || a.composed && a.composedPath().includes(h))
        return;
    }
    return !Xa(u, Pt.Loose) && u.tabIndex !== -1 && a.preventDefault(), t(a, u);
  }
  let n = w(null);
  Ge("mousedown", (a) => {
    var r, u;
    l.value && (n.value = ((u = (r = a.composedPath) == null ? void 0 : r.call(a)) == null ? void 0 : u[0]) || a.target);
  }, !0), Ge("click", (a) => {
    !n.value || (o(a, () => n.value), n.value = null);
  }, !0), Ge("blur", (a) => o(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var ge = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(ge || {});
let _e = V({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: l }) {
  return () => {
    let { features: o, ...n } = e, a = { "aria-hidden": (o & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(o & 4) === 4 && (o & 2) !== 2 && { display: "none" } } };
    return N({ ourProps: a, theirProps: n, slot: {}, attrs: l, slots: t, name: "Hidden" });
  };
} });
function ot(e = {}, t = null, l = []) {
  for (let [o, n] of Object.entries(e))
    Et(l, Ct(t, o), n);
  return l;
}
function Ct(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Et(e, t, l) {
  if (Array.isArray(l))
    for (let [o, n] of l.entries())
      Et(e, Ct(t, o.toString()), n);
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
  let o = w(l == null ? void 0 : l.value), n = x(() => e.value !== void 0);
  return [x(() => n.value ? e.value : o.value), function(a) {
    return n.value || (o.value = a), t == null ? void 0 : t(a);
  }];
}
function ct(e) {
  return [e.screenX, e.screenY];
}
function tn() {
  let e = w([-1, -1]);
  return { wasMoved(t) {
    let l = ct(t);
    return e.value[0] === l[0] && e.value[1] === l[1] ? !1 : (e.value = l, !0);
  }, update(t) {
    e.value = ct(t);
  } };
}
function on(e, t) {
  return e === t;
}
var ln = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ln || {}), an = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(an || {}), nn = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(nn || {});
let Tt = Symbol("ComboboxContext");
function Pe(e) {
  let t = ee(Tt, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, Pe), l;
  }
  return t;
}
let sn = V({ name: "Combobox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => on }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String }, nullable: { type: Boolean, default: !1 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: l, emit: o }) {
  let n = w(1), a = w(null), r = w(null), u = w(null), d = w(null), f = w({ static: !1, hold: !1 }), h = w([]), b = w(null), y = w(1), _ = w(!1);
  function v(A = (P) => P) {
    let P = b.value !== null ? h.value[b.value] : null, O = tt(A(h.value.slice()), (T) => B(T.dataRef.domRef)), S = P ? O.indexOf(P) : null;
    return S === -1 && (S = null), { options: O, activeOptionIndex: S };
  }
  let C = x(() => e.multiple ? 1 : 0), c = x(() => e.nullable), [$, R] = lt(x(() => e.modelValue === void 0 ? U(C.value, { [1]: [], [0]: void 0 }) : e.modelValue), (A) => o("update:modelValue", A), x(() => e.defaultValue)), j = { comboboxState: n, value: $, mode: C, compare(A, P) {
    if (typeof e.by == "string") {
      let O = e.by;
      return (A == null ? void 0 : A[O]) === (P == null ? void 0 : P[O]);
    }
    return e.by(A, P);
  }, defaultValue: x(() => e.defaultValue), nullable: c, inputRef: r, labelRef: a, buttonRef: u, optionsRef: d, disabled: x(() => e.disabled), options: h, change(A) {
    R(A);
  }, activeOptionIndex: x(() => {
    if (_.value && b.value === null && h.value.length > 0) {
      let A = h.value.findIndex((P) => !P.dataRef.disabled);
      if (A !== -1)
        return A;
    }
    return b.value;
  }), activationTrigger: y, optionsPropsRef: f, closeCombobox() {
    _.value = !1, !e.disabled && n.value !== 1 && (n.value = 1, b.value = null);
  }, openCombobox() {
    if (_.value = !0, e.disabled || n.value === 0)
      return;
    let A = h.value.findIndex((P) => {
      let O = F(P.dataRef.value);
      return U(C.value, { [0]: () => j.compare(F(j.value.value), F(O)), [1]: () => F(j.value.value).some((S) => j.compare(F(S), F(O))) });
    });
    A !== -1 && (b.value = A), n.value = 0;
  }, goToOption(A, P, O) {
    if (_.value = !1, e.disabled || d.value && !f.value.static && n.value === 1)
      return;
    let S = v();
    if (S.activeOptionIndex === null) {
      let D = S.options.findIndex((re) => !re.dataRef.disabled);
      D !== -1 && (S.activeOptionIndex = D);
    }
    let T = Wa(A === Q.Specific ? { focus: Q.Specific, id: P } : { focus: A }, { resolveItems: () => S.options, resolveActiveIndex: () => S.activeOptionIndex, resolveId: (D) => D.id, resolveDisabled: (D) => D.dataRef.disabled });
    b.value = T, y.value = O ?? 1, h.value = S.options;
  }, selectOption(A) {
    let P = h.value.find((S) => S.id === A);
    if (!P)
      return;
    let { dataRef: O } = P;
    R(U(C.value, { [0]: () => O.value, [1]: () => {
      let S = F(j.value.value).slice(), T = F(O.value), D = S.findIndex((re) => j.compare(T, F(re)));
      return D === -1 ? S.push(T) : S.splice(D, 1), S;
    } }));
  }, selectActiveOption() {
    if (j.activeOptionIndex.value === null)
      return;
    let { dataRef: A, id: P } = h.value[j.activeOptionIndex.value];
    R(U(C.value, { [0]: () => A.value, [1]: () => {
      let O = F(j.value.value).slice(), S = F(A.value), T = O.findIndex((D) => j.compare(S, F(D)));
      return T === -1 ? O.push(S) : O.splice(T, 1), O;
    } })), j.goToOption(Q.Specific, P);
  }, registerOption(A, P) {
    let O = { id: A, dataRef: P }, S = v((T) => [...T, O]);
    if (b.value === null) {
      let T = P.value.value;
      U(C.value, { [0]: () => j.compare(F(j.value.value), F(T)), [1]: () => F(j.value.value).some((D) => j.compare(F(D), F(T))) }) && (S.activeOptionIndex = S.options.indexOf(O));
    }
    h.value = S.options, b.value = S.activeOptionIndex, y.value = 1;
  }, unregisterOption(A) {
    let P = v((O) => {
      let S = O.findIndex((T) => T.id === A);
      return S !== -1 && O.splice(S, 1), O;
    });
    h.value = P.options, b.value = P.activeOptionIndex, y.value = 1;
  } };
  Ot([r, u, d], () => j.closeCombobox(), x(() => n.value === 0)), oe(Tt, j), kt(x(() => U(n.value, { [0]: ue.Open, [1]: ue.Closed })));
  let W = x(() => j.activeOptionIndex.value === null ? null : h.value[j.activeOptionIndex.value].dataRef.value), H = x(() => {
    var A;
    return (A = B(r)) == null ? void 0 : A.closest("form");
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
    let { name: A, disabled: P, ...O } = e, S = { open: n.value === 0, disabled: P, activeIndex: j.activeOptionIndex.value, activeOption: W.value, value: $.value };
    return q(M, [...A != null && $.value != null ? ot({ [A]: $.value }).map(([T, D]) => q(_e, et({ features: ge.Hidden, key: T, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: T, value: D }))) : [], N({ theirProps: { ...l, ...Se(O, ["modelValue", "defaultValue", "nullable", "multiple", "onUpdate:modelValue", "by"]) }, ourProps: {}, slot: S, slots: t, attrs: l, name: "Combobox" })]);
  };
} }), rn = V({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-combobox-label-${Z()}` } }, setup(e, { attrs: t, slots: l }) {
  let o = Pe("ComboboxLabel");
  function n() {
    var a;
    (a = B(o.inputRef)) == null || a.focus({ preventScroll: !0 });
  }
  return () => {
    let a = { open: o.comboboxState.value === 0, disabled: o.disabled.value }, { id: r, ...u } = e, d = { id: r, ref: o.labelRef, onClick: n };
    return N({ ourProps: d, theirProps: u, slot: a, attrs: t, slots: l, name: "ComboboxLabel" });
  };
} }), un = V({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-combobox-button-${Z()}` } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = Pe("ComboboxButton");
  o({ el: n.buttonRef, $el: n.buttonRef });
  function a(d) {
    n.disabled.value || (n.comboboxState.value === 0 ? n.closeCombobox() : (d.preventDefault(), n.openCombobox()), fe(() => {
      var f;
      return (f = B(n.inputRef)) == null ? void 0 : f.focus({ preventScroll: !0 });
    }));
  }
  function r(d) {
    switch (d.key) {
      case I.ArrowDown:
        d.preventDefault(), d.stopPropagation(), n.comboboxState.value === 1 && n.openCombobox(), fe(() => {
          var f;
          return (f = n.inputRef.value) == null ? void 0 : f.focus({ preventScroll: !0 });
        });
        return;
      case I.ArrowUp:
        d.preventDefault(), d.stopPropagation(), n.comboboxState.value === 1 && (n.openCombobox(), fe(() => {
          n.value.value || n.goToOption(Q.Last);
        })), fe(() => {
          var f;
          return (f = n.inputRef.value) == null ? void 0 : f.focus({ preventScroll: !0 });
        });
        return;
      case I.Escape:
        if (n.comboboxState.value !== 0)
          return;
        d.preventDefault(), n.optionsRef.value && !n.optionsPropsRef.value.static && d.stopPropagation(), n.closeCombobox(), fe(() => {
          var f;
          return (f = n.inputRef.value) == null ? void 0 : f.focus({ preventScroll: !0 });
        });
        return;
    }
  }
  let u = _t(x(() => ({ as: e.as, type: t.type })), n.buttonRef);
  return () => {
    var d, f;
    let h = { open: n.comboboxState.value === 0, disabled: n.disabled.value, value: n.value.value }, { id: b, ...y } = e, _ = { ref: n.buttonRef, id: b, type: u.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (d = B(n.optionsRef)) == null ? void 0 : d.id, "aria-expanded": n.disabled.value ? void 0 : n.comboboxState.value === 0, "aria-labelledby": n.labelRef.value ? [(f = B(n.labelRef)) == null ? void 0 : f.id, b].join(" ") : void 0, disabled: n.disabled.value === !0 ? !0 : void 0, onKeydown: r, onClick: a };
    return N({ ourProps: _, theirProps: y, slot: h, attrs: t, slots: l, name: "ComboboxButton" });
  };
} }), pn = V({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: () => `headlessui-combobox-input-${Z()}` } }, emits: { change: (e) => !0 }, setup(e, { emit: t, attrs: l, slots: o, expose: n }) {
  let a = Pe("ComboboxInput"), r = { value: !1 };
  n({ el: a.inputRef, $el: a.inputRef });
  let u = x(() => {
    var c;
    let $ = a.value.value;
    return B(a.inputRef) ? typeof e.displayValue < "u" && $ !== void 0 ? (c = e.displayValue($)) != null ? c : "" : typeof $ == "string" ? $ : "" : "";
  });
  z(() => {
    X([u, a.comboboxState], ([c, $], [R, j]) => {
      if (r.value)
        return;
      let W = B(a.inputRef);
      !W || (j === 0 && $ === 1 || c !== R) && (W.value = c);
    }, { immediate: !0 });
  });
  let d = w(!1);
  function f() {
    d.value = !0;
  }
  function h() {
    setTimeout(() => {
      d.value = !1;
    });
  }
  function b(c) {
    switch (r.value = !0, c.key) {
      case I.Backspace:
      case I.Delete:
        if (a.mode.value !== 0 || !a.nullable.value)
          return;
        let $ = c.currentTarget;
        requestAnimationFrame(() => {
          if ($.value === "") {
            a.change(null);
            let R = B(a.optionsRef);
            R && (R.scrollTop = 0), a.goToOption(Q.Nothing);
          }
        });
        break;
      case I.Enter:
        if (r.value = !1, a.comboboxState.value !== 0 || d.value)
          return;
        if (c.preventDefault(), c.stopPropagation(), a.activeOptionIndex.value === null) {
          a.closeCombobox();
          return;
        }
        a.selectActiveOption(), a.mode.value === 0 && a.closeCombobox();
        break;
      case I.ArrowDown:
        return r.value = !1, c.preventDefault(), c.stopPropagation(), U(a.comboboxState.value, { [0]: () => a.goToOption(Q.Next), [1]: () => a.openCombobox() });
      case I.ArrowUp:
        return r.value = !1, c.preventDefault(), c.stopPropagation(), U(a.comboboxState.value, { [0]: () => a.goToOption(Q.Previous), [1]: () => {
          a.openCombobox(), fe(() => {
            a.value.value || a.goToOption(Q.Last);
          });
        } });
      case I.Home:
        if (c.shiftKey)
          break;
        return r.value = !1, c.preventDefault(), c.stopPropagation(), a.goToOption(Q.First);
      case I.PageUp:
        return r.value = !1, c.preventDefault(), c.stopPropagation(), a.goToOption(Q.First);
      case I.End:
        if (c.shiftKey)
          break;
        return r.value = !1, c.preventDefault(), c.stopPropagation(), a.goToOption(Q.Last);
      case I.PageDown:
        return r.value = !1, c.preventDefault(), c.stopPropagation(), a.goToOption(Q.Last);
      case I.Escape:
        if (r.value = !1, a.comboboxState.value !== 0)
          return;
        c.preventDefault(), a.optionsRef.value && !a.optionsPropsRef.value.static && c.stopPropagation(), a.closeCombobox();
        break;
      case I.Tab:
        if (r.value = !1, a.comboboxState.value !== 0)
          return;
        a.mode.value === 0 && a.selectActiveOption(), a.closeCombobox();
        break;
    }
  }
  function y(c) {
    t("change", c);
  }
  function _(c) {
    a.openCombobox(), t("change", c);
  }
  function v() {
    r.value = !1;
  }
  let C = x(() => {
    var c, $, R, j;
    return (j = (R = ($ = e.defaultValue) != null ? $ : a.defaultValue.value !== void 0 ? (c = e.displayValue) == null ? void 0 : c.call(e, a.defaultValue.value) : null) != null ? R : a.defaultValue.value) != null ? j : "";
  });
  return () => {
    var c, $, R, j, W, H;
    let A = { open: a.comboboxState.value === 0 }, { id: P, displayValue: O, ...S } = e, T = { "aria-controls": (c = a.optionsRef.value) == null ? void 0 : c.id, "aria-expanded": a.disabled.value ? void 0 : a.comboboxState.value === 0, "aria-activedescendant": a.activeOptionIndex.value === null || ($ = a.options.value[a.activeOptionIndex.value]) == null ? void 0 : $.id, "aria-multiselectable": a.mode.value === 1 ? !0 : void 0, "aria-labelledby": (W = (R = B(a.labelRef)) == null ? void 0 : R.id) != null ? W : (j = B(a.buttonRef)) == null ? void 0 : j.id, id: P, onCompositionstart: f, onCompositionend: h, onKeydown: b, onChange: y, onInput: _, onBlur: v, role: "combobox", type: (H = l.type) != null ? H : "text", tabIndex: 0, ref: a.inputRef, defaultValue: C.value };
    return N({ ourProps: T, theirProps: S, slot: A, attrs: l, slots: o, features: me.RenderStrategy | me.Static, name: "ComboboxInput" });
  };
} }), dn = V({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, hold: { type: [Boolean], default: !1 } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = Pe("ComboboxOptions"), a = `headlessui-combobox-options-${Z()}`;
  o({ el: n.optionsRef, $el: n.optionsRef }), J(() => {
    n.optionsPropsRef.value.static = e.static;
  }), J(() => {
    n.optionsPropsRef.value.hold = e.hold;
  });
  let r = De(), u = x(() => r !== null ? r.value === ue.Open : n.comboboxState.value === 0);
  return St({ container: x(() => B(n.optionsRef)), enabled: x(() => n.comboboxState.value === 0), accept(d) {
    return d.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : d.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(d) {
    d.setAttribute("role", "none");
  } }), () => {
    var d, f, h, b;
    let y = { open: n.comboboxState.value === 0 }, _ = { "aria-activedescendant": n.activeOptionIndex.value === null || (d = n.options.value[n.activeOptionIndex.value]) == null ? void 0 : d.id, "aria-labelledby": (b = (f = B(n.labelRef)) == null ? void 0 : f.id) != null ? b : (h = B(n.buttonRef)) == null ? void 0 : h.id, id: a, ref: n.optionsRef, role: "listbox" }, v = Se(e, ["hold"]);
    return N({ ourProps: _, theirProps: v, slot: y, attrs: t, slots: l, features: me.RenderStrategy | me.Static, visible: u.value, name: "ComboboxOptions" });
  };
} }), cn = V({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: l, expose: o }) {
  let n = Pe("ComboboxOption"), a = `headlessui-combobox-option-${Z()}`, r = w(null);
  o({ el: r, $el: r });
  let u = x(() => n.activeOptionIndex.value !== null ? n.options.value[n.activeOptionIndex.value].id === a : !1), d = x(() => U(n.mode.value, { [0]: () => n.compare(F(n.value.value), F(e.value)), [1]: () => F(n.value.value).some((c) => n.compare(F(c), F(e.value))) })), f = x(() => ({ disabled: e.disabled, value: e.value, domRef: r }));
  z(() => n.registerOption(a, f)), se(() => n.unregisterOption(a)), J(() => {
    n.comboboxState.value === 0 && (!u.value || n.activationTrigger.value !== 0 && fe(() => {
      var c, $;
      return ($ = (c = B(r)) == null ? void 0 : c.scrollIntoView) == null ? void 0 : $.call(c, { block: "nearest" });
    }));
  });
  function h(c) {
    if (e.disabled)
      return c.preventDefault();
    n.selectOption(a), n.mode.value === 0 && n.closeCombobox();
  }
  function b() {
    if (e.disabled)
      return n.goToOption(Q.Nothing);
    n.goToOption(Q.Specific, a);
  }
  let y = tn();
  function _(c) {
    y.update(c);
  }
  function v(c) {
    !y.wasMoved(c) || e.disabled || u.value || n.goToOption(Q.Specific, a, 0);
  }
  function C(c) {
    !y.wasMoved(c) || e.disabled || !u.value || n.optionsPropsRef.value.hold || n.goToOption(Q.Nothing);
  }
  return () => {
    let { disabled: c } = e, $ = { active: u.value, selected: d.value, disabled: c }, R = { id: a, ref: r, role: "option", tabIndex: c === !0 ? void 0 : -1, "aria-disabled": c === !0 ? !0 : void 0, "aria-selected": d.value, disabled: void 0, onClick: h, onFocus: b, onPointerenter: _, onMouseenter: _, onPointermove: v, onMousemove: v, onPointerleave: C, onMouseleave: C };
    return N({ ourProps: R, theirProps: e, slot: $, attrs: l, slots: t, name: "ComboboxOption" });
  };
} });
function fn(e, t, l) {
  Fe || J((o) => {
    window.addEventListener(e, t, l), o(() => window.removeEventListener(e, t, l));
  });
}
var Ce = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Ce || {});
function vn() {
  let e = w(0);
  return fn("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function jt(e, t, l, o) {
  Fe || J((n) => {
    e = e ?? window, e.addEventListener(t, l, o), n(() => e.removeEventListener(t, l, o));
  });
}
function mn(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
var Lt = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Lt || {});
let Oe = Object.assign(V({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: Object, default: w(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = w(null);
  o({ el: n, $el: n });
  let a = x(() => ie(n));
  hn({ ownerDocument: a }, x(() => Boolean(e.features & 16)));
  let r = bn({ ownerDocument: a, container: n, initialFocus: x(() => e.initialFocus) }, x(() => Boolean(e.features & 2)));
  gn({ ownerDocument: a, container: n, containers: e.containers, previousActiveElement: r }, x(() => Boolean(e.features & 8)));
  let u = vn();
  function d(y) {
    let _ = B(n);
    _ && ((v) => v())(() => {
      U(u.value, { [Ce.Forwards]: () => ke(_, ae.First, { skipElements: [y.relatedTarget] }), [Ce.Backwards]: () => ke(_, ae.Last, { skipElements: [y.relatedTarget] }) });
    });
  }
  let f = w(!1);
  function h(y) {
    y.key === "Tab" && (f.value = !0, requestAnimationFrame(() => {
      f.value = !1;
    }));
  }
  function b(y) {
    var _;
    let v = new Set((_ = e.containers) == null ? void 0 : _.value);
    v.add(n);
    let C = y.relatedTarget;
    !C || C.dataset.headlessuiFocusGuard !== "true" && (Rt(v, C) || (f.value ? ke(B(n), U(u.value, { [Ce.Forwards]: () => ae.Next, [Ce.Backwards]: () => ae.Previous }) | ae.WrapAround, { relativeTo: y.target }) : y.target instanceof HTMLElement && $e(y.target)));
  }
  return () => {
    let y = {}, _ = { ref: n, onKeydown: h, onFocusout: b }, { features: v, initialFocus: C, containers: c, ...$ } = e;
    return q(M, [Boolean(v & 4) && q(_e, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: d, features: ge.Focusable }), N({ ourProps: _, theirProps: { ...t, ...$ }, slot: y, attrs: t, slots: l, name: "FocusTrap" }), Boolean(v & 4) && q(_e, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: d, features: ge.Focusable })]);
  };
} }), { features: Lt });
function hn({ ownerDocument: e }, t) {
  let l = w(null);
  function o() {
    var a;
    l.value || (l.value = (a = e.value) == null ? void 0 : a.activeElement);
  }
  function n() {
    !l.value || ($e(l.value), l.value = null);
  }
  z(() => {
    X(t, (a, r) => {
      a !== r && (a ? o() : n());
    }, { immediate: !0 });
  }), se(n);
}
function bn({ ownerDocument: e, container: t, initialFocus: l }, o) {
  let n = w(null), a = w(!1);
  return z(() => a.value = !0), se(() => a.value = !1), z(() => {
    X([t, l, o], (r, u) => {
      if (r.every((f, h) => (u == null ? void 0 : u[h]) === f) || !o.value)
        return;
      let d = B(t);
      !d || mn(() => {
        var f, h;
        if (!a.value)
          return;
        let b = B(l), y = (f = e.value) == null ? void 0 : f.activeElement;
        if (b) {
          if (b === y) {
            n.value = y;
            return;
          }
        } else if (d.contains(y)) {
          n.value = y;
          return;
        }
        b ? $e(b) : ke(d, ae.First | ae.NoScroll) === Be.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), n.value = (h = e.value) == null ? void 0 : h.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), n;
}
function gn({ ownerDocument: e, container: t, containers: l, previousActiveElement: o }, n) {
  var a;
  jt((a = e.value) == null ? void 0 : a.defaultView, "focus", (r) => {
    if (!n.value)
      return;
    let u = new Set(l == null ? void 0 : l.value);
    u.add(t);
    let d = o.value;
    if (!d)
      return;
    let f = r.target;
    f && f instanceof HTMLElement ? Rt(u, f) ? (o.value = f, $e(f)) : (r.preventDefault(), r.stopPropagation(), $e(d)) : $e(o.value);
  }, !0);
}
function Rt(e, t) {
  var l;
  for (let o of e)
    if ((l = o.value) != null && l.contains(t))
      return !0;
  return !1;
}
let ft = "body > *", ye = /* @__PURE__ */ new Set(), ce = /* @__PURE__ */ new Map();
function vt(e) {
  e.setAttribute("aria-hidden", "true"), e.inert = !0;
}
function mt(e) {
  let t = ce.get(e);
  !t || (t["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert);
}
function xn(e, t = w(!0)) {
  J((l) => {
    if (!t.value || !e.value)
      return;
    let o = e.value, n = ie(o);
    if (n) {
      ye.add(o);
      for (let a of ce.keys())
        a.contains(o) && (mt(a), ce.delete(a));
      n.querySelectorAll(ft).forEach((a) => {
        if (a instanceof HTMLElement) {
          for (let r of ye)
            if (a.contains(r))
              return;
          ye.size === 1 && (ce.set(a, { "aria-hidden": a.getAttribute("aria-hidden"), inert: a.inert }), vt(a));
        }
      }), l(() => {
        if (ye.delete(o), ye.size > 0)
          n.querySelectorAll(ft).forEach((a) => {
            if (a instanceof HTMLElement && !ce.has(a)) {
              for (let r of ye)
                if (a.contains(r))
                  return;
              ce.set(a, { "aria-hidden": a.getAttribute("aria-hidden"), inert: a.inert }), vt(a);
            }
          });
        else
          for (let a of ce.keys())
            mt(a), ce.delete(a);
      });
    }
  });
}
let Bt = Symbol("ForcePortalRootContext");
function yn() {
  return ee(Bt, !1);
}
let Ye = V({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: l }) {
  return oe(Bt, e.force), () => {
    let { force: o, ...n } = e;
    return N({ theirProps: n, ourProps: {}, slot: {}, slots: t, attrs: l, name: "ForcePortalRoot" });
  };
} });
function wn(e) {
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
let Dt = V({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: l }) {
  let o = w(null), n = x(() => ie(o)), a = yn(), r = ee(Ft, null), u = w(a === !0 || r == null ? wn(o.value) : r.resolveTarget());
  return J(() => {
    a || r != null && (u.value = r.resolveTarget());
  }), se(() => {
    var d, f;
    let h = (d = n.value) == null ? void 0 : d.getElementById("headlessui-portal-root");
    !h || u.value === h && u.value.children.length <= 0 && ((f = u.value.parentElement) == null || f.removeChild(u.value));
  }), () => {
    if (u.value === null)
      return null;
    let d = { ref: o, "data-headlessui-portal": "" };
    return q(gt, { to: u.value }, N({ ourProps: d, theirProps: e, slot: {}, attrs: l, slots: t, name: "Portal" }));
  };
} }), Ft = Symbol("PortalGroupContext"), $n = V({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: l }) {
  let o = eo({ resolveTarget() {
    return e.target;
  } });
  return oe(Ft, o), () => {
    let { target: n, ...a } = e;
    return N({ theirProps: a, ourProps: {}, slot: {}, attrs: t, slots: l, name: "PortalGroup" });
  };
} }), Mt = Symbol("StackContext");
var Qe = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Qe || {});
function kn() {
  return ee(Mt, () => {
  });
}
function _n({ type: e, enabled: t, element: l, onUpdate: o }) {
  let n = kn();
  function a(...r) {
    o == null || o(...r), n(...r);
  }
  z(() => {
    X(t, (r, u) => {
      r ? a(0, e, l) : u === !0 && a(1, e, l);
    }, { immediate: !0, flush: "sync" });
  }), se(() => {
    t.value && a(1, e, l);
  }), oe(Mt, a);
}
let It = Symbol("DescriptionContext");
function Sn() {
  let e = ee(It, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function Me({ slot: e = w({}), name: t = "Description", props: l = {} } = {}) {
  let o = w([]);
  function n(a) {
    return o.value.push(a), () => {
      let r = o.value.indexOf(a);
      r !== -1 && o.value.splice(r, 1);
    };
  }
  return oe(It, { register: n, slot: e, name: t, props: l }), x(() => o.value.length > 0 ? o.value.join(" ") : void 0);
}
let Pn = V({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${Z()}` } }, setup(e, { attrs: t, slots: l }) {
  let o = Sn();
  return z(() => se(o.register(e.id))), () => {
    let { name: n = "Description", slot: a = w({}), props: r = {} } = o, { id: u, ...d } = e, f = { ...Object.entries(r).reduce((h, [b, y]) => Object.assign(h, { [b]: m(y) }), {}), id: u };
    return N({ ourProps: f, theirProps: d, slot: a.value, attrs: t, slots: l, name: n });
  };
} });
function at() {
  let e = [], t = [], l = { enqueue(o) {
    t.push(o);
  }, addEventListener(o, n, a, r) {
    return o.addEventListener(n, a, r), l.add(() => o.removeEventListener(n, a, r));
  }, requestAnimationFrame(...o) {
    let n = requestAnimationFrame(...o);
    l.add(() => cancelAnimationFrame(n));
  }, nextFrame(...o) {
    l.requestAnimationFrame(() => {
      l.requestAnimationFrame(...o);
    });
  }, setTimeout(...o) {
    let n = setTimeout(...o);
    l.add(() => clearTimeout(n));
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
function On() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
var Cn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Cn || {});
let Je = Symbol("DialogContext");
function Te(e) {
  let t = ee(Je, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, Te), l;
  }
  return t;
}
let Le = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Ie = V({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Le }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${Z()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: l, slots: o, expose: n }) {
  var a;
  let r = w(!1);
  z(() => {
    r.value = !0;
  });
  let u = w(0), d = De(), f = x(() => e.open === Le && d !== null ? U(d.value, { [ue.Open]: !0, [ue.Closed]: !1 }) : e.open), h = w(/* @__PURE__ */ new Set()), b = w(null), y = w(null), _ = x(() => ie(b));
  if (n({ el: b, $el: b }), !(e.open !== Le || d !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof f.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${f.value === Le ? void 0 : e.open}`);
  let v = x(() => r.value && f.value ? 0 : 1), C = x(() => v.value === 0), c = x(() => u.value > 1), $ = ee(Je, null) !== null, R = x(() => c.value ? "parent" : "leaf");
  xn(b, x(() => c.value ? C.value : !1)), _n({ type: "Dialog", enabled: x(() => v.value === 0), element: b, onUpdate: (P, O, S) => {
    if (O === "Dialog")
      return U(P, { [Qe.Add]() {
        h.value.add(S), u.value += 1;
      }, [Qe.Remove]() {
        h.value.delete(S), u.value -= 1;
      } });
  } });
  let j = Me({ name: "DialogDescription", slot: x(() => ({ open: f.value })) }), W = w(null), H = { titleId: W, panelRef: w(null), dialogState: v, setTitleId(P) {
    W.value !== P && (W.value = P);
  }, close() {
    t("close", !1);
  } };
  oe(Je, H);
  function A() {
    var P, O, S;
    return [...Array.from((O = (P = _.value) == null ? void 0 : P.querySelectorAll("body > *, [data-headlessui-portal]")) != null ? O : []).filter((T) => !(!(T instanceof HTMLElement) || T.contains(B(y)) || H.panelRef.value && T.contains(H.panelRef.value))), (S = H.panelRef.value) != null ? S : b.value];
  }
  return Ot(() => A(), (P, O) => {
    H.close(), fe(() => O == null ? void 0 : O.focus());
  }, x(() => v.value === 0 && !c.value)), jt((a = _.value) == null ? void 0 : a.defaultView, "keydown", (P) => {
    P.defaultPrevented || P.key === I.Escape && v.value === 0 && (c.value || (P.preventDefault(), P.stopPropagation(), H.close()));
  }), J((P) => {
    var O;
    if (v.value !== 0 || $)
      return;
    let S = _.value;
    if (!S)
      return;
    let T = at(), D = window.pageYOffset;
    function re(le, te, de) {
      let He = le.style.getPropertyValue(te);
      return Object.assign(le.style, { [te]: de }), T.add(() => {
        Object.assign(le.style, { [te]: He });
      });
    }
    let xe = S == null ? void 0 : S.documentElement, ze = ((O = S.defaultView) != null ? O : window).innerWidth - xe.clientWidth;
    if (re(xe, "overflow", "hidden"), ze > 0) {
      let le = xe.clientWidth - xe.offsetWidth, te = ze - le;
      re(xe, "paddingRight", `${te}px`);
    }
    if (On()) {
      re(S.body, "marginTop", `-${D}px`), window.scrollTo(0, 0);
      let le = null;
      T.addEventListener(S, "click", (te) => {
        if (te.target instanceof HTMLElement)
          try {
            let de = te.target.closest("a");
            if (!de)
              return;
            let { hash: He } = new URL(de.href), qe = S.querySelector(He);
            qe && !A().some((Yt) => Yt.contains(qe)) && (le = qe);
          } catch {
          }
      }, !0), T.addEventListener(S, "touchmove", (te) => {
        te.target instanceof HTMLElement && !A().some((de) => de.contains(te.target)) && te.preventDefault();
      }, { passive: !1 }), T.add(() => {
        window.scrollTo(0, window.pageYOffset + D), le && le.isConnected && (le.scrollIntoView({ block: "nearest" }), le = null);
      });
    }
    P(T.dispose);
  }), J((P) => {
    if (v.value !== 0)
      return;
    let O = B(b);
    if (!O)
      return;
    let S = new IntersectionObserver((T) => {
      for (let D of T)
        D.boundingClientRect.x === 0 && D.boundingClientRect.y === 0 && D.boundingClientRect.width === 0 && D.boundingClientRect.height === 0 && H.close();
    });
    S.observe(O), P(() => S.disconnect());
  }), () => {
    let { id: P, open: O, initialFocus: S, ...T } = e, D = { ...l, ref: b, id: P, role: "dialog", "aria-modal": v.value === 0 ? !0 : void 0, "aria-labelledby": W.value, "aria-describedby": j.value }, re = { open: v.value === 0 };
    return q(Ye, { force: !0 }, () => [q(Dt, () => q($n, { target: b.value }, () => q(Ye, { force: !1 }, () => q(Oe, { initialFocus: S, containers: h, features: C.value ? U(R.value, { parent: Oe.features.RestoreFocus, leaf: Oe.features.All & ~Oe.features.FocusLock }) : Oe.features.None }, () => N({ ourProps: D, theirProps: T, slot: re, attrs: l, slots: o, visible: v.value === 0, features: me.RenderStrategy | me.Static, name: "Dialog" }))))), q(_e, { features: ge.Hidden, ref: y })]);
  };
} });
V({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${Z()}` } }, setup(e, { attrs: t, slots: l }) {
  let o = Te("DialogOverlay");
  function n(a) {
    a.target === a.currentTarget && (a.preventDefault(), a.stopPropagation(), o.close());
  }
  return () => {
    let { id: a, ...r } = e;
    return N({ ourProps: { id: a, "aria-hidden": !0, onClick: n }, theirProps: r, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogOverlay" });
  };
} });
V({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${Z()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = Te("DialogBackdrop"), a = w(null);
  return o({ el: a, $el: a }), z(() => {
    if (n.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: r, ...u } = e, d = { id: r, ref: a, "aria-hidden": !0 };
    return q(Ye, { force: !0 }, () => q(Dt, () => N({ ourProps: d, theirProps: { ...t, ...u }, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogBackdrop" })));
  };
} });
let Ve = V({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${Z()}` } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = Te("DialogPanel");
  o({ el: n.panelRef, $el: n.panelRef });
  function a(r) {
    r.stopPropagation();
  }
  return () => {
    let { id: r, ...u } = e, d = { id: r, ref: n.panelRef, onClick: a };
    return N({ ourProps: d, theirProps: u, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogPanel" });
  };
} }), Vt = V({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${Z()}` } }, setup(e, { attrs: t, slots: l }) {
  let o = Te("DialogTitle");
  return z(() => {
    o.setTitleId(e.id), se(() => o.setTitleId(null));
  }), () => {
    let { id: n, ...a } = e;
    return N({ ourProps: { id: n }, theirProps: a, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogTitle" });
  };
} }), Nt = Symbol("LabelContext");
function zt() {
  let e = ee(Nt, null);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, zt), t;
  }
  return e;
}
function nt({ slot: e = {}, name: t = "Label", props: l = {} } = {}) {
  let o = w([]);
  function n(a) {
    return o.value.push(a), () => {
      let r = o.value.indexOf(a);
      r !== -1 && o.value.splice(r, 1);
    };
  }
  return oe(Nt, { register: n, slot: e, name: t, props: l }), x(() => o.value.length > 0 ? o.value.join(" ") : void 0);
}
let Ht = V({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-label-${Z()}` } }, setup(e, { slots: t, attrs: l }) {
  let o = zt();
  return z(() => se(o.register(e.id))), () => {
    let { name: n = "Label", slot: a = {}, props: r = {} } = o, { id: u, passive: d, ...f } = e, h = { ...Object.entries(r).reduce((b, [y, _]) => Object.assign(b, { [y]: m(_) }), {}), id: u };
    return d && (delete h.onClick, delete f.onClick), N({ ourProps: h, theirProps: f, slot: a, attrs: l, slots: t, name: n });
  };
} });
function En(e, t) {
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
let An = V({ name: "RadioGroup", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "div" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => En }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-radiogroup-${Z()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: l, slots: o, expose: n }) {
  let a = w(null), r = w([]), u = nt({ name: "RadioGroupLabel" }), d = Me({ name: "RadioGroupDescription" });
  n({ el: a, $el: a });
  let [f, h] = lt(x(() => e.modelValue), (v) => t("update:modelValue", v), x(() => e.defaultValue)), b = { options: r, value: f, disabled: x(() => e.disabled), firstOption: x(() => r.value.find((v) => !v.propsRef.disabled)), containsCheckedOption: x(() => r.value.some((v) => b.compare(F(v.propsRef.value), F(e.modelValue)))), compare(v, C) {
    if (typeof e.by == "string") {
      let c = e.by;
      return (v == null ? void 0 : v[c]) === (C == null ? void 0 : C[c]);
    }
    return e.by(v, C);
  }, change(v) {
    var C;
    if (e.disabled || b.compare(F(f.value), F(v)))
      return !1;
    let c = (C = r.value.find(($) => b.compare(F($.propsRef.value), F(v)))) == null ? void 0 : C.propsRef;
    return c != null && c.disabled ? !1 : (h(v), !0);
  }, registerOption(v) {
    r.value.push(v), r.value = tt(r.value, (C) => C.element);
  }, unregisterOption(v) {
    let C = r.value.findIndex((c) => c.id === v);
    C !== -1 && r.value.splice(C, 1);
  } };
  oe(qt, b), St({ container: x(() => B(a)), accept(v) {
    return v.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : v.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(v) {
    v.setAttribute("role", "none");
  } });
  function y(v) {
    if (!a.value || !a.value.contains(v.target))
      return;
    let C = r.value.filter((c) => c.propsRef.disabled === !1).map((c) => c.element);
    switch (v.key) {
      case I.Enter:
        At(v.currentTarget);
        break;
      case I.ArrowLeft:
      case I.ArrowUp:
        if (v.preventDefault(), v.stopPropagation(), ke(C, ae.Previous | ae.WrapAround) === Be.Success) {
          let c = r.value.find(($) => {
            var R;
            return $.element === ((R = ie(a)) == null ? void 0 : R.activeElement);
          });
          c && b.change(c.propsRef.value);
        }
        break;
      case I.ArrowRight:
      case I.ArrowDown:
        if (v.preventDefault(), v.stopPropagation(), ke(C, ae.Next | ae.WrapAround) === Be.Success) {
          let c = r.value.find(($) => {
            var R;
            return $.element === ((R = ie($.element)) == null ? void 0 : R.activeElement);
          });
          c && b.change(c.propsRef.value);
        }
        break;
      case I.Space:
        {
          v.preventDefault(), v.stopPropagation();
          let c = r.value.find(($) => {
            var R;
            return $.element === ((R = ie($.element)) == null ? void 0 : R.activeElement);
          });
          c && b.change(c.propsRef.value);
        }
        break;
    }
  }
  let _ = x(() => {
    var v;
    return (v = B(a)) == null ? void 0 : v.closest("form");
  });
  return z(() => {
    X([_], () => {
      if (!_.value || e.defaultValue === void 0)
        return;
      function v() {
        b.change(e.defaultValue);
      }
      return _.value.addEventListener("reset", v), () => {
        var C;
        (C = _.value) == null || C.removeEventListener("reset", v);
      };
    }, { immediate: !0 });
  }), () => {
    let { disabled: v, name: C, id: c, ...$ } = e, R = { ref: a, id: c, role: "radiogroup", "aria-labelledby": u.value, "aria-describedby": d.value, onKeydown: y };
    return q(M, [...C != null && f.value != null ? ot({ [C]: f.value }).map(([j, W]) => q(_e, et({ features: ge.Hidden, key: j, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: j, value: W }))) : [], N({ ourProps: R, theirProps: { ...l, ...Se($, ["modelValue", "defaultValue"]) }, slot: {}, attrs: l, slots: o, name: "RadioGroup" })]);
  };
} });
var Tn = ((e) => (e[e.Empty = 1] = "Empty", e[e.Active = 2] = "Active", e))(Tn || {});
let jn = V({ name: "RadioGroupOption", props: { as: { type: [Object, String], default: "div" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-radiogroup-option-${Z()}` } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = Ut("RadioGroupOption"), a = nt({ name: "RadioGroupLabel" }), r = Me({ name: "RadioGroupDescription" }), u = w(null), d = x(() => ({ value: e.value, disabled: e.disabled })), f = w(1);
  o({ el: u, $el: u }), z(() => n.registerOption({ id: e.id, element: u, propsRef: d })), se(() => n.unregisterOption(e.id));
  let h = x(() => {
    var $;
    return (($ = n.firstOption.value) == null ? void 0 : $.id) === e.id;
  }), b = x(() => n.disabled.value || e.disabled), y = x(() => n.compare(F(n.value.value), F(e.value))), _ = x(() => b.value ? -1 : y.value || !n.containsCheckedOption.value && h.value ? 0 : -1);
  function v() {
    var $;
    !n.change(e.value) || (f.value |= 2, ($ = u.value) == null || $.focus());
  }
  function C() {
    f.value |= 2;
  }
  function c() {
    f.value &= -3;
  }
  return () => {
    let { id: $, value: R, disabled: j, ...W } = e, H = { checked: y.value, disabled: b.value, active: Boolean(f.value & 2) }, A = { id: $, ref: u, role: "radio", "aria-checked": y.value ? "true" : "false", "aria-labelledby": a.value, "aria-describedby": r.value, "aria-disabled": b.value ? !0 : void 0, tabIndex: _.value, onClick: b.value ? void 0 : v, onFocus: b.value ? void 0 : C, onBlur: b.value ? void 0 : c };
    return N({ ourProps: A, theirProps: W, slot: H, attrs: t, slots: l, name: "RadioGroupOption" });
  };
} }), ht = Ht, Ln = Pn, Gt = Symbol("GroupContext"), Rn = V({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: l }) {
  let o = w(null), n = nt({ name: "SwitchLabel", props: { onClick() {
    !o.value || (o.value.click(), o.value.focus({ preventScroll: !0 }));
  } } }), a = Me({ name: "SwitchDescription" });
  return oe(Gt, { switchRef: o, labelledby: n, describedby: a }), () => N({ theirProps: e, ourProps: {}, slot: {}, slots: t, attrs: l, name: "SwitchGroup" });
} }), Bn = V({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: !0 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-switch-${Z()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: l, slots: o, expose: n }) {
  let a = ee(Gt, null), [r, u] = lt(x(() => e.modelValue), (c) => t("update:modelValue", c), x(() => e.defaultChecked));
  function d() {
    u(!r.value);
  }
  let f = w(null), h = a === null ? f : a.switchRef, b = _t(x(() => ({ as: e.as, type: l.type })), h);
  n({ el: h, $el: h });
  function y(c) {
    c.preventDefault(), d();
  }
  function _(c) {
    c.key === I.Space ? (c.preventDefault(), d()) : c.key === I.Enter && At(c.currentTarget);
  }
  function v(c) {
    c.preventDefault();
  }
  let C = x(() => {
    var c, $;
    return ($ = (c = B(h)) == null ? void 0 : c.closest) == null ? void 0 : $.call(c, "form");
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
    let { id: c, name: $, value: R, ...j } = e, W = { checked: r.value }, H = { id: c, ref: h, role: "switch", type: b.value, tabIndex: 0, "aria-checked": r.value, "aria-labelledby": a == null ? void 0 : a.labelledby.value, "aria-describedby": a == null ? void 0 : a.describedby.value, onClick: y, onKeyup: _, onKeypress: v };
    return q(M, [$ != null && r.value != null ? q(_e, et({ features: ge.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: r.value, name: $, value: R })) : null, N({ ourProps: H, theirProps: { ...l, ...Se(j, ["modelValue", "defaultChecked"]) }, slot: W, attrs: l, slots: o, name: "Switch" })]);
  };
} }), Dn = Ht;
function Fn(e) {
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
function Mn(e, t) {
  let l = at();
  if (!e)
    return l.dispose;
  let { transitionDuration: o, transitionDelay: n } = getComputedStyle(e), [a, r] = [o, n].map((u) => {
    let [d = 0] = u.split(",").filter(Boolean).map((f) => f.includes("ms") ? parseFloat(f) : parseFloat(f) * 1e3).sort((f, h) => h - f);
    return d;
  });
  return a !== 0 ? l.setTimeout(() => t("finished"), a + r) : t("finished"), l.add(() => t("cancelled")), l.dispose;
}
function bt(e, t, l, o, n, a) {
  let r = at(), u = a !== void 0 ? Fn(a) : () => {
  };
  return Re(e, ...n), Ke(e, ...t, ...l), r.nextFrame(() => {
    Re(e, ...l), Ke(e, ...o), r.add(Mn(e, (d) => (Re(e, ...o, ...t), Ke(e, ...n), u(d))));
  }), r.add(() => Re(e, ...t, ...l, ...o, ...n)), r.add(() => u("cancelled")), r.dispose;
}
function be(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let st = Symbol("TransitionContext");
var In = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(In || {});
function Vn() {
  return ee(st, null) !== null;
}
function Nn() {
  let e = ee(st, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function zn() {
  let e = ee(rt, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let rt = Symbol("NestingContext");
function Ne(e) {
  return "children" in e ? Ne(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Kt(e) {
  let t = w([]), l = w(!1);
  z(() => l.value = !0), se(() => l.value = !1);
  function o(a, r = ve.Hidden) {
    let u = t.value.findIndex(({ id: d }) => d === a);
    u !== -1 && (U(r, { [ve.Unmount]() {
      t.value.splice(u, 1);
    }, [ve.Hidden]() {
      t.value[u].state = "hidden";
    } }), !Ne(t) && l.value && (e == null || e()));
  }
  function n(a) {
    let r = t.value.find(({ id: u }) => u === a);
    return r ? r.state !== "visible" && (r.state = "visible") : t.value.push({ id: a, state: "visible" }), () => o(a, ve.Unmount);
  }
  return { children: t, register: n, unregister: o };
}
let Wt = me.RenderStrategy, he = V({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: l, slots: o, expose: n }) {
  if (!Vn() && Ya())
    return () => q(je, { ...e, onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave") }, o);
  let a = w(null), r = w("visible"), u = x(() => e.unmount ? ve.Unmount : ve.Hidden);
  n({ el: a, $el: a });
  let { show: d, appear: f } = Nn(), { register: h, unregister: b } = zn(), y = { value: !0 }, _ = Z(), v = { value: !1 }, C = Kt(() => {
    v.value || (r.value = "hidden", b(_), t("afterLeave"));
  });
  z(() => {
    let O = h(_);
    se(O);
  }), J(() => {
    if (u.value === ve.Hidden && _) {
      if (d && r.value !== "visible") {
        r.value = "visible";
        return;
      }
      U(r.value, { hidden: () => b(_), visible: () => h(_) });
    }
  });
  let c = be(e.enter), $ = be(e.enterFrom), R = be(e.enterTo), j = be(e.entered), W = be(e.leave), H = be(e.leaveFrom), A = be(e.leaveTo);
  z(() => {
    J(() => {
      if (r.value === "visible") {
        let O = B(a);
        if (O instanceof Comment && O.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function P(O) {
    let S = y.value && !f.value, T = B(a);
    !T || !(T instanceof HTMLElement) || S || (v.value = !0, d.value && t("beforeEnter"), d.value || t("beforeLeave"), O(d.value ? bt(T, c, $, R, j, (D) => {
      v.value = !1, D === Xe.Finished && t("afterEnter");
    }) : bt(T, W, H, A, j, (D) => {
      v.value = !1, D === Xe.Finished && (Ne(C) || (r.value = "hidden", b(_), t("afterLeave")));
    })));
  }
  return z(() => {
    X([d], (O, S, T) => {
      P(T), y.value = !1;
    }, { immediate: !0 });
  }), oe(rt, C), kt(x(() => U(r.value, { visible: ue.Open, hidden: ue.Closed }))), () => {
    let { appear: O, show: S, enter: T, enterFrom: D, enterTo: re, entered: xe, leave: ze, leaveFrom: le, leaveTo: te, ...de } = e;
    return N({ theirProps: de, ourProps: { ref: a }, slot: {}, slots: o, attrs: l, features: Wt, visible: r.value === "visible", name: "TransitionChild" });
  };
} }), Hn = he, je = V({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: l, slots: o }) {
  let n = De(), a = x(() => e.show === null && n !== null ? U(n.value, { [ue.Open]: !0, [ue.Closed]: !1 }) : e.show);
  J(() => {
    if (![!0, !1].includes(a.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r = w(a.value ? "visible" : "hidden"), u = Kt(() => {
    r.value = "hidden";
  }), d = w(!0), f = { show: a, appear: x(() => e.appear || !d.value) };
  return z(() => {
    J(() => {
      d.value = !1, a.value ? r.value = "visible" : Ne(u) || (r.value = "hidden");
    });
  }), oe(rt, u), oe(st, f), () => {
    let h = Se(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), b = { unmount: e.unmount };
    return N({ ourProps: { ...b, as: "template" }, theirProps: {}, slot: {}, slots: { ...o, default: () => [q(Hn, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...l, ...b, ...h }, o.default)] }, attrs: {}, features: Wt, visible: r.value === "visible", name: "Transition" });
  };
} });
const qn = ["title"], Un = { class: "po-relative po-mt-1" }, Gn = {
  name: "PoSelectField"
}, mi = /* @__PURE__ */ Object.assign(Gn, {
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
    const l = e, o = w(""), n = w(l.preSelected), a = x(
      () => o.value === "" ? l.list : l.list.filter((r) => r.name.toLowerCase().includes(o.value.toLowerCase()))
    );
    return X(n, () => {
      t("update:modelValue", n.value);
    }), (r, u) => (i(), K(m(sn), {
      as: "div",
      modelValue: n.value,
      "onUpdate:modelValue": u[1] || (u[1] = (d) => n.value = d)
    }, {
      default: L(() => [
        k(m(rn), { class: "po-text-sm po-font-medium po-text-slate-700 po-flex po-items-center po-space-x-1" }, {
          default: L(() => [
            s("span", null, g(e.label), 1),
            e.info !== null ? (i(), p("abbr", {
              key: 0,
              title: e.info,
              class: "po-w-4 po-text-slate-500"
            }, [
              k(m(Va), { class: "po-fill-current" })
            ], 8, qn)) : E("", !0)
          ]),
          _: 1
        }),
        s("div", Un, [
          k(m(pn), {
            class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm",
            onChange: u[0] || (u[0] = (d) => o.value = d.target.value),
            "display-value": (d) => d == null ? void 0 : d.name
          }, null, 8, ["display-value"]),
          k(m(un), { class: "po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-rounded-r-md po-px-2 focus:po-outline-none" }, {
            default: L(() => [
              k(m(Ia), {
                class: "po-h-5 po-w-5 po-text-slate-400",
                "aria-hidden": "true"
              })
            ]),
            _: 1
          }),
          m(a).length > 0 ? (i(), K(m(dn), {
            key: 0,
            class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
          }, {
            default: L(() => [
              (i(!0), p(M, null, Y(m(a), (d) => (i(), K(m(cn), {
                key: d.id,
                value: d,
                as: "template"
              }, {
                default: L(({ active: f, selected: h }) => [
                  s("li", {
                    class: G(["po-relative po-cursor-default po-select-none po-py-2 po-pl-3 po-pr-9", f ? "po-bg-mpao-lightblue po-text-white" : "po-text-slate-900"])
                  }, [
                    s("span", {
                      class: G(["po-block po-truncate", h && "po-font-semibold"])
                    }, g(d.name), 3),
                    h ? (i(), p("span", {
                      key: 0,
                      class: G(["po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-pr-4", f ? "po-text-white" : "po-text-mpao-lightblue"])
                    }, [
                      k(m(Ma), {
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
}), Kn = ["disabled", "aria-disabled"], Wn = ["value", "disabled", "aria-disabled"], Yn = ["href"], Qn = {
  name: "PoButton"
}, Jn = /* @__PURE__ */ Object.assign(Qn, {
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
    const t = e, l = "po-rounded-lg po-transition-colors po-duration-100 po-ease-in-out po-cursor-pointer disabled:po-bg-slate-400 disabled:po-cursor-default disabled:po-hover:bg-slate-400", o = x(() => {
      switch (t.size) {
        case "sm":
          return "po-px-2 po-py-1 po-text-xs";
        case "md":
          return "po-px-4 po-py-2 po-text-sm";
        case "lg":
          return "po-px-5 po-py-3 po-text-normal";
      }
    }), n = x(() => t.overrideColors ? "" : "po-bg-mpao-lightblue hover:po-bg-mpao-blue focus:po-bg-mpao-blue po-text-slate-50");
    return (a, r) => (i(), p(M, null, [
      e.type == "button" ? (i(), p("button", we({
        key: 0,
        class: [l, m(o), m(n)],
        disabled: e.disabled,
        "aria-disabled": e.disabled
      }, a.$attrs), [
        ne(a.$slots, "label", {}, () => [
          pe(g(e.label), 1)
        ])
      ], 16, Kn)) : E("", !0),
      e.type == "submit" ? (i(), p("input", we({
        key: 1,
        type: "submit",
        class: [l, m(o), m(n)],
        value: e.label,
        disabled: e.disabled,
        "aria-disabled": e.disabled
      }, a.$attrs), null, 16, Wn)) : E("", !0),
      e.type == "link" ? (i(), p("a", we({
        key: 2,
        href: e.to,
        class: [l, m(o), m(n)]
      }, a.$attrs), g(e.label), 17, Yn)) : E("", !0)
    ], 64));
  }
}), Xn = /* @__PURE__ */ s("div", { class: "po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity" }, null, -1), Zn = { class: "po-fixed po-z-10 po-inset-0 po-overflow-y-auto" }, es = { class: "po-flex po-items-center po-justify-center po-min-h-screen po-pt-4 po-px-4 po-pb-20 po-text-center sm:po-block sm:po-p-0" }, ts = /* @__PURE__ */ s("span", {
  class: "po-hidden sm:po-inline-block sm:po-align-middle sm:po-h-screen",
  "aria-hidden": "true"
}, "​", -1), os = { class: "po-flex po-items-center po-bg-mpao-lightblue po-rounded-t-xl po-p-5" }, ls = { class: "po-grow po-text-md po-font-bold po-text-sky-50" }, as = { class: "po-shrink-0" }, ns = { class: "po-p-5" }, ss = {
  name: "PoModal"
}, hi = /* @__PURE__ */ Object.assign(ss, {
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
    }), (n, a) => (i(), p("div", null, [
      e.openBtnLabel.length > 0 ? (i(), K(m(Jn), {
        key: 0,
        label: e.openBtnLabel,
        onClick: a[0] || (a[0] = (r) => o.value = !0)
      }, null, 8, ["label"])) : E("", !0),
      k(m(je), {
        as: "template",
        show: o.value
      }, {
        default: L(() => [
          k(m(Ie), {
            as: "div",
            class: "po-relative po-z-50",
            onClose: a[2] || (a[2] = (r) => o.value = !1)
          }, {
            default: L(() => [
              k(m(he), {
                as: "template",
                enter: "po-ease-out po-duration-300",
                "enter-from": "po-opacity-0",
                "enter-to": "po-opacity-100",
                leave: "po-ease-in po-duration-200",
                "leave-from": "po-opacity-100",
                "leave-to": "po-opacity-0"
              }, {
                default: L(() => [
                  Xn
                ]),
                _: 1
              }),
              s("div", Zn, [
                s("div", es, [
                  ts,
                  k(m(he), {
                    as: "template",
                    enter: "po-ease-out po-duration-300",
                    "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                    "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                    leave: "po-ease-in po-duration-200",
                    "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                    "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                  }, {
                    default: L(() => [
                      k(m(Ve), { class: "po-relative po-inline-block po-align-bottom po-bg-white po-rounded-xl po-text-left po-shadow-xl po-transform po-transition-all sm:po-align-middle sm:po-max-w-xl po-w-full" }, {
                        default: L(() => [
                          s("div", os, [
                            s("h3", ls, g(e.modalTitle), 1),
                            s("div", as, [
                              s("span", {
                                role: "button",
                                class: "po-block",
                                onClick: a[1] || (a[1] = (r) => o.value = !1)
                              }, [
                                k(m(xt), { class: "po-w-5 po-stroke-sky-200 hover:po-stroke-mpao-orange po-transition-colors po-duration-150 po-ease-in-out" })
                              ])
                            ])
                          ]),
                          s("div", ns, [
                            ne(n.$slots, "content")
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
}), rs = { class: "po-text-sm po-font-medium po-text-slate-700 po-cursor-pointer po-select-none" }, is = {
  name: "PoToggle"
}, bi = /* @__PURE__ */ Object.assign(is, {
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
    return (o, n) => (i(), K(m(Rn), {
      as: "div",
      class: "po-flex po-items-center"
    }, {
      default: L(() => [
        k(m(Bn), {
          modelValue: l.value,
          "onUpdate:modelValue": n[0] || (n[0] = (a) => l.value = a),
          onClick: n[1] || (n[1] = (a) => o.$emit("update:modelValue", !l.value)),
          class: G([l.value ? "po-bg-mpao-lightblue" : "po-bg-slate-200", "po-relative po-inline-flex po-h-6 po-w-11 po-flex-shrink-0 po-cursor-pointer po-rounded-full po-border-2 po-border-transparent po-transition-colors po-duration-200 po-ease-in-out focus:po-outline-none focus:po-ring-2 focus:po-ring-mpao-lightblue focus:po-ring-offset-2"])
        }, {
          default: L(() => [
            s("span", {
              "aria-hidden": "true",
              class: G([l.value ? "po-translate-x-5" : "po-translate-x-0", "po-pointer-events-none po-inline-block po-h-5 po-w-5 po-transform po-rounded-full po-bg-white po-shadow po-ring-0 po-transition po-duration-200 po-ease-in-out"])
            }, null, 2)
          ]),
          _: 1
        }, 8, ["modelValue", "class"]),
        k(m(Dn), {
          as: "span",
          class: "po-ml-3"
        }, {
          default: L(() => [
            s("span", rs, g(e.label), 1)
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), us = { class: "po-pt-1 po-space-y-1 po-border-r-2 po-border-slate-200 po-relative" }, ps = ["onClick"], ds = {
  name: "PoSectionMenu"
}, gi = /* @__PURE__ */ Object.assign(ds, {
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
    return (t, l) => (i(), p("ul", us, [
      (i(!0), p(M, null, Y(e.menuItems, (o) => (i(), p("li", null, [
        s("span", {
          onClick: (n) => t.$emit("link-click", o.link),
          role: "button",
          class: G(["po-relative po-cursor-pointer -po-right-[0.15rem] po-py-1 po-border-r-2 hover:po-border-mpao-lightblue po-transition-colors po-duration-200 po-ease-in-out po-flex po-items-center po-space-x-2", { "po-border-mpao-lightblue po-text-sm po-text-mpao-lightblue": o.link == e.currPageRoute }, { "po-border-slate-200 po-text-sm po-text-slate-600": o.link !== e.currPageRoute }])
        }, [
          (i(), K(Ee(o.icon), { class: "po-w-4 po-h-4 po-stroke-current" })),
          s("span", null, g(o.label), 1)
        ], 10, ps)
      ]))), 256))
    ]));
  }
}), cs = { class: "po-relative po-flex po-items-start" }, fs = { class: "po-flex po-h-5 po-items-center" }, vs = ["name", "id", "checked", "placeholder", "disabled", "required", "aria-describedby"], ms = { class: "po-ml-3 po-text-sm" }, hs = ["for"], bs = ["id"], gs = { class: "po-sr-only" }, xs = ["id"], ys = {
  name: "PoCheckbox"
}, xi = /* @__PURE__ */ Object.assign(ys, {
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
    return (t, l) => (i(), p("div", cs, [
      s("div", fs, [
        s("input", we({
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
        }), null, 16, vs)
      ]),
      s("div", ms, [
        s("label", {
          for: e.id,
          class: "po-font-medium po-text-slate-600 po-cursor-pointer po-select-none"
        }, g(e.label), 9, hs),
        e.message ? (i(), p("span", {
          key: 0,
          id: `${e.id}-description`,
          class: "po-text-slate-500 po-cursor-default"
        }, [
          s("span", gs, g(e.label), 1),
          pe(" " + g(e.message), 1)
        ], 8, bs)) : E("", !0)
      ]),
      e.errorMessage !== null ? (i(), p("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, g(e.errorMessage), 9, xs)) : E("", !0)
    ]));
  }
}), ws = { class: "po-relative po-pt-5" }, $s = ["name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], ks = ["for"], _s = ["title"], Ss = ["id"], Ps = ["id"], Os = {
  name: "PoTextarea"
}, yi = /* @__PURE__ */ Object.assign(Os, {
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
    return (t, l) => (i(), p("div", ws, [
      s("textarea", we({
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
      }), null, 16, $s),
      s("label", {
        for: e.id,
        class: "po-absolute po-top-0 po-text-sm po-font-medium po-text-slate-700 peer-focus:po-text-mpao-lightblue peer-invalid:po-text-red-500 peer-invalid:po-peer-focus:text-red-600 po-flex po-items-center po-space-x-1"
      }, [
        s("span", null, g(e.label), 1),
        e.info !== null ? (i(), p("abbr", {
          key: 0,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          k(m(yt))
        ], 8, _s)) : E("", !0)
      ], 8, ks),
      e.message !== null ? (i(), p("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, g(e.message), 9, Ss)) : E("", !0),
      e.errorMessage !== null ? (i(), p("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, g(e.errorMessage), 9, Ps)) : E("", !0)
    ]));
  }
}), Cs = { class: "po-grid po-gap-5 po-grid-cols-1 md:po-grid-cols-2 po-px-6 lg:po-px-8 po-mt-10 po-pb-10 po-opacity-60 hover:po-opacity-100 po-transition-opacity po-duration-150 po-ease-out" }, Es = /* @__PURE__ */ s("img", {
  class: "po-h-10 po-mr-2",
  src: "https://pension.gov.mv/asset/image/enlgish_website_logo.svg",
  alt: "Pension Office logo"
}, null, -1), As = /* @__PURE__ */ s("p", { class: "po-mt-3 po-text-xs po-text-slate-500" }, "8th Floor, Allied Building , Chaandhanee Magu, Malé, 20156, Maldives", -1), Ts = /* @__PURE__ */ s("p", { class: "po-mt-1 po-text-xs po-text-slate-500" }, "© Pension Office, All Rights Reserved.", -1), js = { class: "po-mt-1 po-text-xs po-text-slate-500 po-flex po-space-x-4" }, Ls = {
  href: "https://www.pension.gov.mv",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue"
}, Rs = /* @__PURE__ */ s("span", null, "www.pension.gov.mv", -1), Bs = {
  href: "mailto:info@pension.gov.mv",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue"
}, Ds = /* @__PURE__ */ s("span", null, "info@pension.gov.mv", -1), Fs = {
  href: "tel:1441",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue"
}, Ms = /* @__PURE__ */ s("span", null, "1441", -1), Is = /* @__PURE__ */ to('<div class="po-flex po-justify-end po-items-end po-flex-col"><nav class="po-mt-1 po-text-xs po-text-slate-500 po-flex po-space-x-4"><a href="" class="hover:po-text-mpao-lightblue">Terms &amp; Conditions</a><a href="" class="hover:po-text-mpao-lightblue">Privacy Policy</a><a href="" class="hover:po-text-mpao-lightblue">Cookie Policy</a></nav><div class="po-flex po-space-x-2 po-mt-5 po-justify-end"><img class="po-h-6" src="https://pension.gov.mv/asset/image/iso_logo.jpg" alt=""><img class="po-h-6" src="https://pension.gov.mv/asset/image/en-ccc-2020-issa.png" alt=""></div></div>', 1), Vs = {
  name: "PoFooter"
}, wi = /* @__PURE__ */ Object.assign(Vs, {
  setup(e) {
    return (t, l) => (i(), p("section", Cs, [
      s("div", null, [
        Es,
        As,
        Ts,
        s("p", js, [
          s("a", Ls, [
            k(m(xa), { class: "po-w-3 po-h-3 po-fill-current" }),
            Rs
          ]),
          s("a", Bs, [
            k(m(ba), { class: "po-w-3 po-h-3 po-fill-current" }),
            Ds
          ]),
          s("a", Fs, [
            k(m(ya), { class: "po-w-3 po-h-3 po-fill-current" }),
            Ms
          ])
        ])
      ]),
      Is
    ]));
  }
}), Ns = {
  key: 0,
  class: "po-flex po-items-start po-space-x-4 po-p-5 po-bg-red-100 po-rounded-md po-mt-5"
}, zs = { class: "po-pt-1" }, Hs = { class: "po-text-base po-font-medium po-text-red-700" }, qs = { class: "po-text-sm po-text-red-800 po-list-disc po-ml-5 po-mt-2" }, Us = {
  key: 1,
  class: "po-flex po-items-start po-space-x-4 po-p-5 po-bg-green-100 po-rounded-md po-mt-5"
}, Gs = { class: "po-pt-1" }, Ks = { class: "po-text-base po-font-medium po-text-green-700" }, Ws = {
  name: "PoFormStatusMessage"
}, $i = /* @__PURE__ */ Object.assign(Ws, {
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
    return (t, l) => e.isError ? (i(), p("div", Ns, [
      k(m(mo), { class: "po-w-8 po-stroke-red-600" }),
      s("div", zs, [
        s("span", Hs, g(e.message), 1),
        s("ul", qs, [
          (i(!0), p(M, null, Y(e.errorList, (o) => (i(), p("li", null, g(o), 1))), 256))
        ])
      ])
    ])) : (i(), p("div", Us, [
      k(m(co), { class: "po-w-8 po-stroke-green-600" }),
      s("div", Gs, [
        s("span", Ks, g(e.message), 1)
      ])
    ]));
  }
}), Ys = {
  key: 0,
  class: "po-mt-1 po-flex po-space-x-3 po-flex-wrap"
}, Qs = { class: "po-flex po-flex-1" }, Js = { class: "po-flex po-flex-col" }, Xs = {
  name: "PoRadioInput"
}, ki = /* @__PURE__ */ Object.assign(Xs, {
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
    }), (n, a) => (i(), K(m(An), {
      modelValue: o.value,
      "onUpdate:modelValue": a[0] || (a[0] = (r) => o.value = r)
    }, {
      default: L(() => [
        k(m(ht), { class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700" }, {
          default: L(() => [
            pe(g(e.label), 1)
          ]),
          _: 1
        }),
        e.options !== null ? (i(), p("div", Ys, [
          (i(!0), p(M, null, Y(e.options, (r) => (i(), K(m(jn), {
            as: "template",
            key: r.id,
            value: r
          }, {
            default: L(({ checked: u, active: d }) => [
              s("div", {
                class: G(["po-transition-colors po-duration-100 po-ease-out", u ? "po-border-transparent" : "po-border-gray-300 hover:po-border-mpao-lightblue", d ? "po-border-mpao-lightblue po-ring-1 po-ring-mpao-lightblue" : "", "po-mb-3 po-relative po-flex po-cursor-pointer po-rounded-lg po-border po-bg-white po-px-3 po-py-2 po-shadow-sm focus:po-outline-none"])
              }, [
                s("span", Qs, [
                  s("span", Js, [
                    k(m(ht), {
                      as: "span",
                      class: "po-block po-text-sm po-font-medium po-text-gray-900"
                    }, {
                      default: L(() => [
                        pe(g(r.title), 1)
                      ]),
                      _: 2
                    }, 1024),
                    r.description ? (i(), K(m(Ln), {
                      key: 0,
                      as: "span",
                      class: "po-mt-1 po-flex po-items-center po-text-sm po-text-gray-500"
                    }, {
                      default: L(() => [
                        pe(g(r.description), 1)
                      ]),
                      _: 2
                    }, 1024)) : E("", !0)
                  ])
                ]),
                k(m(Fa), {
                  class: G([u ? "" : "po-invisible", "po-h-5 po-w-5 po-ml-2 po-text-mpao-lightblue"]),
                  "aria-hidden": "true"
                }, null, 8, ["class"]),
                s("span", {
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
}), Zs = { class: "po-bg-white po-relative po-group focus-within:po-ring-2 focus-within:po-ring-inset focus-within:po-ring-indigo-500" }, er = { class: "po-block po-p-4 po-transition-colors po-duration-75 po-ease-linear" }, tr = { class: "po-flex po-items-start po-space-x-2" }, or = { class: "po-flex po-items-start po-space-x-1" }, lr = { class: "po-block po-text-2xl po-font-light po-text-slate-600" }, ar = {
  key: 0,
  class: "po-text-sm po-text-green-500 po-font-medium po-pt-1"
}, nr = { class: "po-text-sm po-tracking-wide po-text-slate-500" }, sr = {
  name: "PoStatsBlock"
}, _i = /* @__PURE__ */ Object.assign(sr, {
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
      class: G(["po-rounded-lg po-bg-slate-200 po-overflow-hidden po-divide-y po-divide-slate-200 sm:po-divide-y-0 po-grid po-gap-px", e.numberOfCols])
    }, [
      (i(!0), p(M, null, Y(e.items, (o) => (i(), p("div", Zs, [
        s("span", er, [
          s("div", tr, [
            s("div", null, [
              s("span", {
                class: G(["po-inline-flex po-p-2 po-rounded-md", o.bgColor, o.iconColor])
              }, [
                (i(), K(Ee(o.icon), { class: "po-w-4 po-h-4" }))
              ], 2)
            ]),
            s("div", null, [
              s("div", or, [
                s("span", lr, g(o.value), 1),
                o.diff ? (i(), p("span", ar, g(o.diff), 1)) : E("", !0)
              ]),
              s("h4", nr, g(o.label), 1)
            ])
          ])
        ])
      ]))), 256))
    ], 2));
  }
}), rr = {
  key: 0,
  class: "po-flex po-space-x-3 po-items-start"
}, ir = { class: "po-flex po-items-center po-space-x-2" }, ur = ["datetime"], pr = { class: "po-text-sm po-font-medium po-text-slate-600" }, dr = ["datetime"], cr = { class: "flex" }, fr = { class: "po-flex po-pt-3 po-flex-wrap po-max-w-sm" }, vr = ["onClick"], mr = {
  key: 1,
  class: "po-w-full po-text-center"
}, hr = { class: "po-inline-block po-text-sm po-italic po-text-slate-500" }, br = /* @__PURE__ */ s("span", { class: "po-text-lg po-text-slate-300 po-px-3 po-inline-block" }, "—", -1), gr = ["datetime"], xr = {
  name: "PoChatLogItem"
}, Si = /* @__PURE__ */ Object.assign(xr, {
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
      e.item.type !== "message" ? (i(), p("div", rr, [
        e.item.type !== "first" && e.item.avatar !== "" ? (i(), p("div", {
          key: 0,
          class: "po-shrink-0 po-w-8 po-h-8 po-rounded-full po-p-1 po-bg-contain po-bg-slate-100",
          style: oo({ "background-image": `url(${e.item.avatar})` })
        }, null, 4)) : E("", !0),
        s("div", {
          class: G([{ "po-pt-1": e.item.type !== "first" }, { "po-flex po-justify-end po-items-end po-flex-col": e.item.type === "first" }])
        }, [
          s("span", ir, [
            e.item.type === "first" ? (i(), p("time", {
              key: 0,
              datetime: e.item.time,
              class: "po-text-xs po-text-slate-400"
            }, g(e.item.time_human), 9, ur)) : E("", !0),
            s("span", pr, g(e.item.name), 1),
            e.item.type === "second" ? (i(), p("time", {
              key: 1,
              datetime: e.item.time,
              class: "po-text-xs po-text-slate-400"
            }, g(e.item.time_human), 9, dr)) : E("", !0)
          ]),
          s("div", {
            class: G(["po-mt-2 po-space-y-1", { "po-flex po-justify-end po-items-end po-flex-col": e.item.type === "first" }])
          }, [
            ne(t.$slots, "message", {}, () => [
              (i(!0), p(M, null, Y(e.item.message, (o) => (i(), p("div", cr, [
                s("p", {
                  class: G(["po-text-sm po-rounded-xl po-px-4 po-py-2", { "po-bg-slate-100 po-text-slate-600": e.item.type !== "first" }, { "po-bg-mpao-lightblue po-text-sky-50": e.item.type === "first" }])
                }, g(o), 3)
              ]))), 256))
            ]),
            s("div", fr, [
              (i(!0), p(M, null, Y(e.item.actions, (o) => (i(), p("button", {
                onClick: (n) => t.$emit("button-click", o.label),
                class: "po-appearance-none po-border po-border-mpao-lightblue po-bg-white hover:po-bg-mpao-lightblue po-px-3 po-py-1 po-mb-2 po-mr-2 po-rounded-lg po-text-slate-500 hover:po-text-sky-100 po-transition-colors po-duration-150 po-ease-in-out po-text-sm po-ring-0 po-outline-none"
              }, g(o.label), 9, vr))), 256))
            ])
          ], 2)
        ], 2)
      ])) : E("", !0),
      e.item.type === "message" ? (i(), p("div", mr, [
        (i(!0), p(M, null, Y(e.item.message, (o) => (i(), p("p", hr, [
          pe(g(o) + " ", 1),
          br,
          pe(),
          s("time", {
            datetime: e.item.time,
            class: "po-text-xs po-text-slate-400 po-inline-block"
          }, g(e.item.time_human), 9, gr)
        ]))), 256))
      ])) : E("", !0)
    ], 2));
  }
}), yr = {
  key: 0,
  class: "po-pointer-events-auto po-w-full po-max-w-sm po-overflow-hidden po-rounded-lg po-bg-mpao-lightblue po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5"
}, wr = { class: "po-p-4" }, $r = { class: "po-flex po-items-start" }, kr = { class: "po-flex-shrink-0" }, _r = { class: "po-ml-3 po-w-0 po-flex-1 po-pt-0.5" }, Sr = { class: "po-text-sm po-font-medium po-text-sky-100" }, Pr = { class: "po-mt-1 po-text-sm po-text-sky-300" }, Or = { class: "po-mt-3 po-flex po-space-x-4" }, Cr = { class: "po-ml-4 po-flex po-flex-shrink-0" }, Er = /* @__PURE__ */ s("span", { class: "po-sr-only" }, "Close", -1), Ar = {
  name: "PoNotification"
}, Pi = /* @__PURE__ */ Object.assign(Ar, {
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
    const n = w(!1);
    return X(o, () => {
      n.value = !1, setTimeout(() => {
        n.value = !0;
      }, 200);
    }), (a, r) => o.value ? (i(), K(gt, {
      key: 0,
      to: "#po-notifications-alert"
    }, [
      k(lo, {
        "enter-active-class": "po-transform po-ease-out po-duration-300 po-transition",
        "enter-from-class": "po-translate-y-2 po-opacity-0 sm:po-translate-y-0 sm:po-translate-x-2",
        "enter-to-class": "po-translate-y-0 po-opacity-100 sm:po-translate-x-0",
        "leave-active-class": "po-transition po-ease-in po-duration-100",
        "leave-from-class": "po-opacity-100",
        "leave-to-class": "po-opacity-0"
      }, {
        default: L(() => [
          n.value ? (i(), p("div", yr, [
            s("div", wr, [
              s("div", $r, [
                s("div", kr, [
                  ne(a.$slots, "icon")
                ]),
                s("div", _r, [
                  s("p", Sr, g(e.label), 1),
                  s("p", Pr, g(e.text), 1),
                  s("div", Or, [
                    s("button", {
                      onClick: r[0] || (r[0] = (u) => a.$emit("button-click", e.buttonLabel)),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-100 hover:po-text-sky-200 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, g(e.buttonLabel), 1),
                    s("button", {
                      onClick: r[1] || (r[1] = (u) => o.value = !1),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-300 hover:po-text-sky-500 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, "Dismiss")
                  ])
                ]),
                s("div", Cr, [
                  s("button", {
                    type: "button",
                    onClick: r[2] || (r[2] = (u) => o.value = !1),
                    class: "po-inline-flex po-rounded-md po-bg-mpao-lightblue po-text-sky-500 hover:po-text-sky-300 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                  }, [
                    Er,
                    k(m(za), {
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
}), Tr = /* @__PURE__ */ s("div", { class: "po-fixed po-inset-0" }, null, -1), jr = { class: "po-fixed po-inset-0 po-overflow-hidden" }, Lr = { class: "po-absolute po-inset-0 po-overflow-hidden" }, Rr = { class: "po-pointer-events-none po-fixed po-inset-y-0 po-right-0 po-flex po-max-w-full po-pl-10" }, Br = { class: "po-flex po-h-full po-flex-col po-overflow-y-scroll po-bg-white po-shadow-xl" }, Dr = { class: "po-bg-slate-50 po-py-6 po-px-4 sm:po-px-6" }, Fr = { class: "po-flex po-items-center po-justify-between" }, Mr = { class: "po-ml-3 po-flex po-h-7 po-items-center" }, Ir = /* @__PURE__ */ s("span", { class: "po-sr-only" }, "Close panel", -1), Vr = {
  key: 0,
  class: "po-mt-1"
}, Nr = { class: "po-text-sm po-text-slate-500" }, zr = { class: "po-relative po-flex-1 po-py-6 po-px-4 sm:po-px-6" }, Hr = {
  name: "PoSlideover"
}, Oi = /* @__PURE__ */ Object.assign(Hr, {
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
    }), (n, a) => (i(), K(m(je), {
      as: "template",
      show: o.value
    }, {
      default: L(() => [
        k(m(Ie), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: a[1] || (a[1] = (r) => o.value = !1)
        }, {
          default: L(() => [
            Tr,
            s("div", jr, [
              s("div", Lr, [
                s("div", Rr, [
                  k(m(he), {
                    as: "template",
                    enter: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "enter-from": "po-translate-x-full",
                    "enter-to": "po-translate-x-0",
                    leave: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "leave-from": "po-translate-x-0",
                    "leave-to": "po-translate-x-full"
                  }, {
                    default: L(() => [
                      k(m(Ve), { class: "po-pointer-events-auto po-w-screen po-max-w-lg" }, {
                        default: L(() => [
                          s("div", Br, [
                            s("div", Dr, [
                              s("div", Fr, [
                                k(m(Vt), { class: "po-text-lg po-font-medium po-text-slate-600" }, {
                                  default: L(() => [
                                    pe(g(e.label), 1)
                                  ]),
                                  _: 1
                                }),
                                s("div", Mr, [
                                  s("button", {
                                    type: "button",
                                    class: "po-rounded-md po-text-slate-500 hover:po-text-mpao-lightblue focus:po-outline-none focus:po-ring-2 focus:po-ring-white",
                                    onClick: a[0] || (a[0] = (r) => o.value = !1)
                                  }, [
                                    Ir,
                                    k(m(xt), {
                                      class: "po-h-6 po-w-6",
                                      "aria-hidden": "true"
                                    })
                                  ])
                                ])
                              ]),
                              e.description ? (i(), p("div", Vr, [
                                s("p", Nr, g(e.description), 1)
                              ])) : E("", !0)
                            ]),
                            s("div", zr, [
                              ne(n.$slots, "content")
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
}), qr = /* @__PURE__ */ s("div", { class: "po-fixed po-inset-0 po-bg-gray-500 po-bg-opacity-25 po-transition-opacity" }, null, -1), Ur = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto po-p-4 sm:po-p-6 md:po-p-20" }, Gr = { class: "po-relative" }, Kr = {
  key: 0,
  class: "po-max-h-96 scroll-py-3 po-overflow-y-auto po-p-3"
}, Wr = {
  name: "PoCommandPalette"
}, Ci = /* @__PURE__ */ Object.assign(Wr, {
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
    const t = e, l = w(""), { show: o } = Ae(t), n = w(!1);
    X(o, () => {
      n.value = !1, setTimeout(() => {
        n.value = !0;
      }, 100);
    });
    function a(r) {
      r.ctrlKey && r.key === "b" && (n.value = !0);
    }
    return z(() => {
      window.addEventListener("keyup", a);
    }), ao(() => {
      window.removeEventListener("keyup", a);
    }), (r, u) => (i(), K(m(je), {
      show: n.value,
      as: "template",
      onAfterLeave: u[2] || (u[2] = (d) => l.value = ""),
      appear: ""
    }, {
      default: L(() => [
        k(m(Ie), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: u[1] || (u[1] = (d) => n.value = !1)
        }, {
          default: L(() => [
            k(m(he), {
              as: "template",
              enter: "po-ease-out po-duration-300",
              "enter-from": "po-opacity-0",
              "enter-to": "po-opacity-100",
              leave: "po-ease-in po-duration-200",
              "leave-from": "po-opacity-100",
              "leave-to": "po-opacity-0"
            }, {
              default: L(() => [
                qr
              ]),
              _: 1
            }),
            s("div", Ur, [
              k(m(he), {
                as: "template",
                enter: "po-ease-out po-duration-300",
                "enter-from": "po-opacity-0 po-scale-95",
                "enter-to": "po-opacity-100 po-scale-100",
                leave: "po-ease-in po-duration-200",
                "leave-from": "po-opacity-100 po-scale-100",
                "leave-to": "po-opacity-0 po-scale-95"
              }, {
                default: L(() => [
                  k(m(Ve), { class: "po-mx-auto po-max-w-xl po-transform po-divide-y po-divide-gray-100 po-overflow-hidden po-rounded-xl po-bg-white po-shadow-2xl po-ring-1 po-ring-black po-ring-opacity-5 po-transition-all" }, {
                    default: L(() => [
                      s("div", Gr, [
                        k(m(Na), {
                          class: "po-pointer-events-none po-absolute po-top-3.5 po-left-4 po-h-5 po-w-5 po-text-gray-400",
                          "aria-hidden": "true"
                        }),
                        s("input", {
                          type: "text",
                          name: "",
                          class: "po-h-12 po-w-full po-border-0 po-bg-transparent po-pl-11 po-pr-4 po-text-gray-800 po-placeholder-gray-400 focus:po-ring-0 sm:po-text-sm",
                          placeholder: "Search...",
                          onChange: u[0] || (u[0] = (d) => l.value = d.target.value)
                        }, null, 32)
                      ]),
                      e.showContent ? (i(), p("div", Kr, [
                        ne(r.$slots, "content")
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
}), Yr = /* @__PURE__ */ s("div", { class: "po-fixed po-inset-0 po-bg-gray-500 po-bg-opacity-75 po-transition-opacity" }, null, -1), Qr = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto" }, Jr = { class: "po-flex po-min-h-full po-items-start po-justify-center po-p-4 po-text-center sm:po-p-0" }, Xr = { class: "po-p-5" }, Zr = { class: "po-text-center" }, ei = {
  key: 0,
  class: "po-mt-2"
}, ti = { class: "po-text-sm po-text-gray-500" }, oi = { class: "po-border-t po-border-slate-200 po-flex po-divide-x po-divide-slate-200" }, li = {
  name: "PoAlert"
}, Ei = /* @__PURE__ */ Object.assign(li, {
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
    }), (n, a) => (i(), K(m(je), {
      as: "template",
      show: o.value
    }, {
      default: L(() => [
        k(m(Ie), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: a[2] || (a[2] = (r) => o.value = !1)
        }, {
          default: L(() => [
            k(m(he), {
              as: "template",
              enter: "po-ease-out po-duration-300",
              "enter-from": "po-opacity-0",
              "enter-to": "po-opacity-100",
              leave: "po-ease-in po-duration-200",
              "leave-from": "po-opacity-100",
              "leave-to": "po-opacity-0"
            }, {
              default: L(() => [
                Yr
              ]),
              _: 1
            }),
            s("div", Qr, [
              s("div", Jr, [
                k(m(he), {
                  as: "template",
                  enter: "po-ease-out po-duration-300",
                  "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                  "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                  leave: "po-ease-in po-duration-200",
                  "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                  "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                }, {
                  default: L(() => [
                    k(m(Ve), { class: "po-relative po-transform po-overflow-hidden po-rounded-lg po-bg-white po-text-left po-shadow-xl po-transition-all sm:po-my-8 sm:po-w-full sm:po-max-w-sm" }, {
                      default: L(() => [
                        s("div", Xr, [
                          s("div", Zr, [
                            k(m(Vt), {
                              as: "h3",
                              class: "po-text-lg po-font-medium po-leading-6 po-text-gray-900"
                            }, {
                              default: L(() => [
                                pe(g(e.alertTitle), 1)
                              ]),
                              _: 1
                            }),
                            e.alertDescription !== "" ? (i(), p("div", ei, [
                              s("p", ti, g(e.alertDescription), 1)
                            ])) : E("", !0)
                          ])
                        ]),
                        s("div", oi, [
                          s("button", {
                            onClick: a[0] || (a[0] = (r) => o.value = !1),
                            class: "po-text-sm po-bg-white po-text-slate-500 hover:po-bg-slate-50 po-transition-colors po-duration-100 po-ease-out po-font-medium po-py-3 po-px-5 po-w-1/2 focus:po-ring-0"
                          }, g(e.cancelBtnLabel), 1),
                          s("button", {
                            onClick: a[1] || (a[1] = (r) => {
                              n.$emit("button-click", "ok"), o.value = !1;
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
  ri as PoActionBar,
  Ei as PoAlert,
  To as PoAppIcon,
  Wo as PoAppTray,
  Jn as PoButton,
  ii as PoCard,
  ui as PoCardSearch,
  Si as PoChatLogItem,
  xi as PoCheckbox,
  Ci as PoCommandPalette,
  ci as PoDescriptionList,
  wi as PoFooter,
  $i as PoFormStatusMessage,
  fi as PoInputField,
  vi as PoInputFile,
  hi as PoModal,
  Pi as PoNotification,
  ul as PoNotificationHub,
  pi as PoPageTitle,
  la as PoPagination,
  El as PoProfileSwitcher,
  ki as PoRadioInput,
  Do as PoSearchBar,
  gi as PoSectionMenu,
  mi as PoSelectField,
  si as PoSidebarDrawer,
  Oi as PoSlideover,
  _i as PoStatsBlock,
  di as PoTable,
  yi as PoTextarea,
  bi as PoToggle,
  ni as PoTopBar
};
