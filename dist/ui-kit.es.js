import { openBlock as i, createElementBlock as p, createElementVNode as r, createVNode as A, unref as h, withCtx as F, renderSlot as se, createBlock as K, createCommentVNode as C, toDisplayString as x, ref as w, onMounted as z, onUnmounted as ne, withDirectives as Yt, isRef as Qt, vModelText as Jt, Fragment as I, renderList as Y, normalizeClass as G, resolveDynamicComponent as Ce, normalizeProps as st, guardReactiveProps as rt, mergeProps as xe, cloneVNode as Xt, h as q, inject as ee, provide as oe, watchEffect as J, computed as g, defineComponent as V, toRaw as D, watch as Z, nextTick as ce, Teleport as bt, reactive as Zt, createTextVNode as ve, toRefs as Ye, createStaticVNode as eo, normalizeStyle as to, Transition as oo } from "vue";
function lo(e, t) {
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
function ao(e, t) {
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
      d: "M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
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
      d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
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
      d: "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
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
      d: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
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
      d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
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
      d: "M15.75 19.5L8.25 12l7.5-7.5"
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
      d: "M8.25 4.5l7.5 7.5-7.5 7.5"
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
      d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
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
      d: "M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
    })
  ]);
}
function Qe(e, t) {
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
      d: "M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
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
      d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
    })
  ]);
}
function it(e, t) {
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
function ht(e, t) {
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
const ho = { class: "po-bg-mpao-blue po-fixed po-top-0 po-w-full po-z-50 po-flex" }, go = { class: "po-shrink-0 po-px-3 po-pt-3" }, yo = {
  for: "sidebar-drawer-toggle",
  role: "button",
  class: "genie-effect po-flex po-items-center po-justify-center po-bg-[#2e5266] po-rounded-full po-w-10 po-h-10 po-select-none po-text-slate-100"
}, xo = { class: "po-mx-auto po-max-w-full po-px-4 po-grow sm:po-px-4" }, wo = { class: "po-flex po-h-16 po-items-center po-justify-between po-space-x-12" }, $o = { class: "po-flex po-items-center po-space-x-3" }, ko = {
  key: 0,
  class: "po-block po-w-6 po-text-slate-100 sm:po-hidden",
  role: "button"
}, _o = {
  name: "PoTopBar"
}, Lr = /* @__PURE__ */ Object.assign(_o, {
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
    return (o, a) => (i(), p("nav", ho, [
      r("div", go, [
        r("label", yo, [
          A(h(so), { class: "po-w-6 po-fill-current" })
        ])
      ]),
      r("div", xo, [
        r("div", wo, [
          A(h(Eo), { "app-name": e.appName }, {
            icon: F(() => [
              se(o.$slots, "appIcon")
            ]),
            _: 3
          }, 8, ["app-name"]),
          e.hasSearch ? (i(), K(h(Lo), {
            key: 0,
            onQuery: l
          })) : C("", !0),
          r("div", $o, [
            e.hasSearch ? (i(), p("span", ko, [
              A(h(Qe), { class: "po-stroke-current" })
            ])) : C("", !0),
            A(h(rl), {
              notifications: e.notifications,
              "has-new-notifications": e.hasNewNotifications
            }, null, 8, ["notifications", "has-new-notifications"]),
            A(h(Go), { "app-list": e.appList }, null, 8, ["app-list"]),
            A(h(Ol), { "profile-switcher-data": e.profileSwitcherData }, null, 8, ["profile-switcher-data"])
          ])
        ])
      ])
    ]));
  }
}), So = { class: "po-flex po-items-center po-space-x-3" }, Po = { class: "po-w-7 po-text-slate-100" }, Oo = { class: "po-font-light po-text-lg po-text-slate-100" }, Co = {
  name: "PoAppIcon"
}, Eo = /* @__PURE__ */ Object.assign(Co, {
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
    return (t, l) => (i(), p("div", So, [
      r("div", Po, [
        se(t.$slots, "icon")
      ]),
      r("span", Oo, x(e.appName), 1)
    ]));
  }
}), Ao = { class: "po-flex-grow po-hidden po-relative sm:po-block" }, To = ["placeholder"], Ro = { class: "po-absolute po-inset-y-0 po-left-0 po-flex po-items-center po-pl-3 po-pointer-events-none po-transition-all po-ease-linear po-duration-100 po-text-slate-400 po-origin-center peer-hover/search:po-scale-105 peer-focus/search:po-text-slate-100" }, jo = {
  name: "PoSearchBar"
}, Lo = /* @__PURE__ */ Object.assign(jo, {
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
    return z(() => document.addEventListener("keydown", o)), ne(() => {
      document.removeEventListener("keydown", o);
    }), (a, n) => (i(), p("div", Ao, [
      Yt(r("input", {
        "onUpdate:modelValue": n[0] || (n[0] = (s) => Qt(l) ? l.value = s : l = s),
        type: "text",
        id: "main-search",
        placeholder: e.placeholder,
        class: "peer/search po-bg-transparent po-border po-border-transparent po-text-slate-100 po-text-sm po-rounded-md po-ring-0 po-outline-none focus:po-outline-none focus:po-ring-0 po-transition-colors po-ease-linear po-duration-100 po-block po-w-full po-pl-10 po-p-2.5 po-appearance-none focus:po-border-slate-400 hover:po-border-slate-600"
      }, null, 8, To), [
        [Jt, h(l)]
      ]),
      r("div", Ro, [
        A(h(Qe), { class: "po-w-5 po-h-5 po-stroke-current" })
      ])
    ]));
  }
}), Bo = { class: "po-relative" }, Do = {
  for: "apps-menu-toggle",
  class: "po-block po-w-6 po-text-slate-100 po-genie-effect po-z-50",
  role: "button"
}, Fo = /* @__PURE__ */ r("input", {
  type: "checkbox",
  name: "",
  class: "po-hidden peer/apps",
  role: "none",
  id: "apps-menu-toggle"
}, null, -1), Io = { class: "po-invisible po-z-10 po-absolute -po-left-[19rem] po-top-[35px] po-opacity-0 po-bg-white po-shadow-lg po-rounded-md po-w-96 po-p-4 po-border po-border-slate-200 po-pt-5 po-space-y-5 po-transition-all po-duration-100 po-ease-linear sm:po-left-auto sm:po-right-0 peer-checked/apps:po-visible peer-checked/apps:po-top-[45px] peer-checked/apps:po-opacity-100" }, No = {
  key: 0,
  class: "po-text-sm po-font-normal po-text-slate-400 po-select-none"
}, Vo = { class: "po-grid po-grid-cols-3 po-gap-3 po-py-3" }, Mo = ["href"], zo = { class: "po-block po-w-10 po-rounded-md po-transition-shadow po-duration-100 po-ease-in-out po-shadow-md group-hover:po-shadow-xl po-overflow-hidden" }, Ho = ["src", "alt"], qo = { class: "po-text-slate-600 po-font-normal po-text-sm" }, Uo = {
  name: "PoAppTray"
}, Go = /* @__PURE__ */ Object.assign(Uo, {
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
    return (t, l) => (i(), p("div", Bo, [
      r("label", Do, [
        A(h(bo))
      ]),
      Fo,
      r("div", Io, [
        (i(!0), p(I, null, Y(e.appList, (o) => (i(), p("div", null, [
          o.groupName.length > 0 ? (i(), p("span", No, x(o.groupName), 1)) : C("", !0),
          r("ul", Vo, [
            (i(!0), p(I, null, Y(o.apps, (a) => (i(), p("li", null, [
              r("a", {
                href: a.url,
                class: "po-flex po-flex-col po-group po-space-y-3 po-justify-center po-items-center po-py-2 genie-effect"
              }, [
                r("span", zo, [
                  r("img", {
                    src: a.icon,
                    alt: `${a.name} icon`
                  }, null, 8, Ho)
                ]),
                r("span", qo, x(a.name), 1)
              ], 8, Mo)
            ]))), 256))
          ])
        ]))), 256))
      ])
    ]));
  }
}), Wo = { class: "relative" }, Ko = {
  for: "notifications-menu-toggle",
  class: "po-block po-w-6 po-text-slate-100 genie-effect po-relative po-z-50",
  role: "button"
}, Yo = {
  key: 0,
  class: "po-absolute po-right-0 po-w-3 po-h-3 po-bg-mpao-orange po-rounded-full po-border-2 po-border-mpao-blue"
}, Qo = /* @__PURE__ */ r("input", {
  type: "checkbox",
  name: "",
  class: "po-hidden peer/apps",
  role: "none",
  id: "notifications-menu-toggle"
}, null, -1), Jo = { class: "po-invisible po-z-10 po-absolute -po-left-[19rem] po-top-[35px] po-opacity-0 po-bg-white po-shadow-lg po-rounded-md po-w-96 po-p-4 po-border po-border-slate-200 po-pt-5 po-transition-all po-duration-100 po-ease-linear sm:po-left-auto sm:po-right-0 peer-checked/apps:po-visible peer-checked/apps:po-top-[45px] peer-checked/apps:po-opacity-100" }, Xo = { class: "po-space-y-2 po-p-2" }, Zo = { class: "po-space-y-2 po-p-2" }, el = { class: "po-flex po-items-center po-justify-between" }, tl = { class: "po-text-sm po-font-semibold po-text-slate-700 po-grow po-flex po-space-x-2 po-items-center" }, ol = {
  key: 0,
  class: "w-2 h-2 rounded-full shrink-0 bg-mpao-orange"
}, ll = { class: "grow" }, al = { class: "po-text-xs po-font-normal po-text-slate-400 po-shrink-0" }, nl = { class: "po-block po-text-sm po-text-slate-500 po-pb-3 po-border-b po-border-slate-200" }, sl = {
  name: "PoNotificationHub"
}, rl = /* @__PURE__ */ Object.assign(sl, {
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
    return (t, l) => (i(), p("div", Wo, [
      r("label", Ko, [
        e.hasNewNotifications ? (i(), p("span", Yo)) : C("", !0),
        A(h(ro), { class: "po-stroke-current" })
      ]),
      Qo,
      r("div", Jo, [
        r("ul", Xo, [
          (i(!0), p(I, null, Y(e.notifications, (o) => (i(), p("li", Zo, [
            r("span", el, [
              r("p", tl, [
                o.seen ? C("", !0) : (i(), p("span", ol)),
                r("span", ll, x(o.name), 1)
              ]),
              r("span", al, x(o.time), 1)
            ]),
            r("span", nl, x(o.text), 1)
          ]))), 256))
        ])
      ])
    ]));
  }
}), il = { class: "po-relative" }, ul = {
  for: "profile-toggle",
  class: "po-select-none po-rounded-full po-w-10 po-h-10 po-bg-[#2e5266] po-flex po-items-center po-justify-center genie-effect po-z-50",
  role: "button"
}, pl = { class: "po-text-xs po-text-white po-font-semibold" }, dl = /* @__PURE__ */ r("input", {
  type: "checkbox",
  name: "",
  class: "po-hidden peer/profile",
  role: "none",
  id: "profile-toggle"
}, null, -1), cl = { class: "po-invisible po-space-y-1 po-z-10 po-absolute po-right-0 po-top-[45px] po-opacity-0 po-bg-white po-shadow-lg po-rounded-md po-w-96 po-p-4 po-border po-border-slate-200 po-pt-5 po-transition-all po-duration-100 po-ease-linear peer-checked/profile:po-visible peer-checked/profile:po-top-[54px] peer-checked/profile:po-opacity-100" }, fl = ["href"], vl = { class: "po-w-5" }, ml = { class: "po-flex po-flex-col po-space-y-1" }, bl = { class: "po-text-sm po-font-normal" }, hl = {
  key: 0,
  class: "po-text-xs po-text-slate-400"
}, gl = /* @__PURE__ */ r("hr", { class: "po-border-slate-200" }, null, -1), yl = { class: "md:po-grid po-grid-cols-2" }, xl = ["href"], wl = { class: "po-w-5" }, $l = /* @__PURE__ */ r("span", { class: "po-text-sm po-font-normal" }, "Profile", -1), kl = {
  href: "#",
  class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-white hover:po-bg-slate-100",
  role: "button"
}, _l = { class: "po-w-5" }, Sl = /* @__PURE__ */ r("span", { class: "po-text-sm po-font-normal" }, "Logout", -1), Pl = {
  name: "PoProfileSwitcher"
}, Ol = /* @__PURE__ */ Object.assign(Pl, {
  props: {
    profileSwitcherData: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    return (t, l) => (i(), p("div", il, [
      r("label", ul, [
        r("span", pl, x(e.profileSwitcherData.currProfileLabel), 1)
      ]),
      dl,
      r("div", cl, [
        (i(!0), p(I, null, Y(e.profileSwitcherData.profiles, (o) => (i(), p("a", {
          href: o.url,
          class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-white hover:po-bg-slate-100",
          role: "button"
        }, [
          r("span", vl, [
            o.isPersonal ? (i(), K(h(it), {
              key: 0,
              class: G(["po-stroke-current", { "po-stroke-mpao-orange": o.current }])
            }, null, 8, ["class"])) : C("", !0),
            o.isPersonal ? C("", !0) : (i(), K(h(io), {
              key: 1,
              class: G(["po-stroke-current", { "po-stroke-mpao-orange": o.current }])
            }, null, 8, ["class"]))
          ]),
          r("span", ml, [
            r("span", bl, x(o.name), 1),
            o.identifier.length !== 0 ? (i(), p("span", hl, x(o.identifier), 1)) : C("", !0)
          ])
        ], 8, fl))), 256)),
        gl,
        r("div", yl, [
          r("a", {
            href: e.profileSwitcherData.currentProfileUrl,
            class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-white hover:po-bg-slate-100",
            role: "button"
          }, [
            r("span", wl, [
              A(h(it), { class: "po-stroke-current" })
            ]),
            $l
          ], 8, xl),
          r("a", kl, [
            r("span", _l, [
              A(h(ao), { class: "po-stroke-current" })
            ]),
            Sl
          ])
        ])
      ])
    ]));
  }
}), Cl = /* @__PURE__ */ r("input", {
  type: "checkbox",
  name: "",
  class: "po-hidden shell-sidebar--toggle",
  role: "none",
  id: "sidebar-drawer-toggle",
  checked: "",
  "aria-checked": "true"
}, null, -1), El = { class: "shell-sidebar" }, Al = { class: "shell-sidebar--section" }, Tl = { class: "shell-sidebar--menu" }, Rl = ["onClick", "title"], jl = { class: "shell-sidebar--icon" }, Ll = { class: "shell-sidebar--label" }, Bl = {
  name: "PoSidebarDrawer"
}, Br = /* @__PURE__ */ Object.assign(Bl, {
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
      Cl,
      r("aside", El, [
        (i(!0), p(I, null, Y(e.content, (o) => (i(), p("div", null, [
          r("span", Al, x(o.groupName), 1),
          r("ul", Tl, [
            (i(!0), p(I, null, Y(o.items, (a) => (i(), p("li", null, [
              r("button", {
                onClick: (n) => t.$emit("button-click", a.url),
                class: G(["shell-sidebar--item", { active: a.url == e.currRoute }]),
                title: `Go to ${a.label}`
              }, [
                r("span", jl, [
                  (i(), K(Ce(a.icon), { class: "po-stroke-current po-w-4 po-h-4" }))
                ]),
                r("span", Ll, x(a.label), 1)
              ], 10, Rl)
            ]))), 256))
          ])
        ]))), 256))
      ])
    ], 64));
  }
}), Dl = { class: "shell-content--action-bar" }, Fl = { class: "action-bar__nav" }, Il = ["onClick"], Nl = { class: "action-bar__nav_label" }, Vl = {
  key: 0,
  class: "po-shrink-0 po-flex po-space-x-1"
}, Ml = {
  name: "PoActionBar"
}, Dr = /* @__PURE__ */ Object.assign(Ml, {
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
    return (t, l) => (i(), p("section", Dl, [
      r("nav", Fl, [
        (i(!0), p(I, null, Y(e.items, (o) => (i(), p("span", {
          onClick: (a) => t.$emit("button-click", o.label),
          class: "action-bar__nav_link"
        }, [
          (i(), K(Ce(o.icon), { class: "po-stroke-current po-w-5 po-h-5" })),
          r("span", Nl, x(o.label), 1)
        ], 8, Il))), 256))
      ]),
      e.showBackButton ? (i(), p("nav", Vl, [
        r("span", {
          onClick: l[0] || (l[0] = (o) => t.$emit("button-click", "back")),
          class: "action-bar__nav_link"
        }, [
          (i(), K(Ce(h(no)), { class: "po-stroke-current po-w-5 po-h-5" }))
        ])
      ])) : C("", !0)
    ]));
  }
}), zl = { class: "po-shadow-md po-rounded-xl po-bg-white" }, Hl = {
  key: 0,
  class: "po-text-base po-font-medium po-text-slate-600"
}, ql = {
  name: "PoCard"
}, Fr = /* @__PURE__ */ Object.assign(ql, {
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
    return (t, l) => (i(), p("div", zl, [
      e.title.length > 0 ? (i(), p("h3", Hl, x(e.title), 1)) : C("", !0),
      se(t.$slots, "content")
    ]));
  }
}), Ul = { class: "po-py-3 po-px-5 po-border-b po-border-slate-200" }, Gl = {
  class: "po-flex po-w-full md:po-ml-0",
  action: "#",
  method: "GET"
}, Wl = {
  for: "search-field",
  class: "po-sr-only"
}, Kl = { class: "po-relative po-w-full po-text-slate-400 focus-within:po-text-mpao-lightblue po-transition-colors po-duration-100 po-ease-in-out" }, Yl = { class: "po-pointer-events-none po-absolute po-inset-y-0 po-left-0 po-flex po-items-center" }, Ql = ["placeholder", "value"], Jl = {
  name: "PoCardSearch"
}, Ir = /* @__PURE__ */ Object.assign(Jl, {
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
    return (t, l) => (i(), p("div", Ul, [
      r("form", Gl, [
        r("label", Wl, x(e.placeholder), 1),
        r("div", Kl, [
          r("div", Yl, [
            A(h(Qe), { class: "po-h-5 po-w-5 po-flex-shrink-0" })
          ]),
          r("input", {
            name: "search-field",
            id: "desktop-search-field",
            placeholder: e.placeholder,
            value: e.modelValue,
            onInput: l[0] || (l[0] = (o) => t.$emit("update:modelValue", o.target.value)),
            class: "po-h-full po-w-full po-border-transparent po-py-2 po-pl-8 po-pr-3 po-text-sm po-text-slate-700 po-placeholder-slate-500 focus:po-border-transparent focus:po-placeholder-slate-400 focus:po-outline-none focus:po-ring-0",
            type: "search"
          }, null, 40, Ql)
        ])
      ])
    ]));
  }
}), Xl = {
  key: 0,
  class: "po-flex po-items-center"
}, Zl = { class: "po-text-xs po-font-normal po-text-slate-500 po-pr-2" }, ea = ["href"], ta = ["href"], oa = {
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
    return (t, l) => e.pagination !== null ? (i(), p("div", Xl, [
      r("span", Zl, x(e.pagination.label), 1),
      e.pagination.nextLink !== null ? (i(), p("a", {
        key: 0,
        href: e.pagination.nextLink,
        title: "Previous",
        onClick: l[0] || (l[0] = (o) => t.$emit("button-click", "prev")),
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        A(h(po), { class: "po-w-4 po-stroke-current" })
      ], 8, ea)) : C("", !0),
      e.pagination.prevLink !== null ? (i(), p("a", {
        key: 1,
        href: e.pagination.prevLink,
        title: "Next",
        onClick: l[1] || (l[1] = (o) => t.$emit("button-click", "next")),
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        A(h(co), { class: "po-w-4 po-stroke-current" })
      ], 8, ta)) : C("", !0)
    ])) : C("", !0);
  }
}), aa = { class: "po-flex po-items-center po-space-x-1" }, na = { class: "po-text-xl po-font-semibold po-text-slate-800 po-grow" }, sa = {
  key: 2,
  class: "po-border-l po-border-slate-400 po-h-3 po-w-3 po-ml-1"
}, ra = {
  name: "PoPageTitle"
}, Nr = /* @__PURE__ */ Object.assign(ra, {
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
      r("h1", na, x(e.label), 1),
      e.showFilter ? (i(), p("button", {
        key: 0,
        title: "Filter",
        onClick: o[0] || (o[0] = (a) => {
          l.$emit("button-click", "filter"), t.value = !t.value;
        }),
        class: G(["po-p-2 po-rounded-md hover:po-bg-slate-200 po-transition-colors po-duration-75 po-ease-in-out", { "po-text-mpao-orange hover:po-text-mpao-orange": t.value }, { "tpo-ext-slate-600 hover:po-text-mpao-blue": !t.value }])
      }, [
        A(h(vo), { class: "po-w-4 po-stroke-current" })
      ], 2)) : C("", !0),
      e.showDownload ? (i(), p("button", {
        key: 1,
        title: "Download",
        onClick: o[1] || (o[1] = (a) => l.$emit("button-click", "download")),
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        A(h(lo), { class: "po-w-4 po-stroke-current" })
      ])) : C("", !0),
      e.showFilter && e.showPagination || e.showDownload && e.showPagination ? (i(), p("span", sa, " ")) : C("", !0),
      e.showPagination ? (i(), K(la, {
        key: 3,
        pagination: e.pagination
      }, null, 8, ["pagination"])) : C("", !0)
    ]));
  }
}), ia = { class: "table-responsive po-w-full" }, ua = { key: 1 }, pa = ["colspan"], da = { class: "po-py-10 po-block po-normal-case" }, ca = {
  name: "PoTable"
}, Vr = /* @__PURE__ */ Object.assign(ca, {
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
            se(t.$slots, "th", st(rt(o)))
          ]))), 256))
        ])
      ]),
      r("tbody", null, [
        e.tbody !== null || e.tbody !== null && e.tbody.length !== 0 ? (i(!0), p(I, { key: 0 }, Y(e.tbody, (o) => (i(), p("tr", null, [
          se(t.$slots, "td", st(rt(o)))
        ]))), 256)) : C("", !0),
        e.tbody == null || e.tbody !== null && e.tbody.length == 0 ? (i(), p("tr", ua, [
          r("td", {
            colspan: e.thead.length + 1,
            class: "po-text-center"
          }, [
            r("span", da, x(e.emptyMessage), 1)
          ], 8, pa)
        ])) : C("", !0)
      ])
    ]));
  }
}), fa = { class: "" }, va = { class: "po-grow" }, ma = ["onClick"], ba = {
  name: "PoDescriptionList"
}, Mr = /* @__PURE__ */ Object.assign(ba, {
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
      se(t.$slots, "content", {}, () => [
        (i(!0), p(I, null, Y(e.items, (o) => (i(), p("div", null, [
          r("dt", null, x(o.title), 1),
          r("dd", fa, [
            r("span", va, x(o.description), 1),
            o.action !== void 0 ? (i(), p("span", {
              key: 0,
              class: "po-shrink-0 po-text-mpao-lightblue hover:po-text-mpao-blue po-transition-colors po-duration-100 po-ease-in-out po-px-2 po-cursor-pointer",
              onClick: (a) => t.$emit("button-click", o.action)
            }, x(o.action), 9, ma)) : C("", !0)
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
function gt(e, t) {
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
}, zr = /* @__PURE__ */ Object.assign(_a, {
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
        onInput: l[0] || (l[0] = (o) => t.$emit("update:modelValue", o.target.value)),
        class: ["po-mt-1 peer po-block po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white focus:po-ring-0 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default", { "po-border-red-400 focus:po-border-red-600 focus:po-ring-red-600": e.hasError }, { "po-border-slate-300 focus:po-border-mpao-lightblue": !e.hasError }]
      }), null, 16, ya),
      r("label", {
        for: e.id,
        class: G(["po-absolute po-top-0 po-text-sm po-font-medium po-flex po-items-center po-space-x-1", { "po-text-red-500 peer-focus:po-text-red-600": e.hasError }, { "po-text-slate-700 peer-focus:po-text-mpao-lightblue": !e.hasError }])
      }, [
        r("span", null, x(e.label), 1),
        e.info !== null ? (i(), p("abbr", {
          key: 0,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          A(h(gt), { class: "po-fill-current" })
        ], 8, wa)) : C("", !0)
      ], 10, xa),
      e.message !== null ? (i(), p("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, x(e.message), 9, $a)) : C("", !0),
      e.hasError && e.errorMessage !== null ? (i(), p("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-center po-space-x-1",
        id: `${e.id}-error`
      }, [
        A(h(ha), { class: "po-fill-current po-w-4" }),
        r("span", null, x(e.errorMessage), 1)
      ], 8, ka)) : C("", !0)
    ]));
  }
}), Sa = { class: "po-relative po-pt-5" }, Pa = { class: "po-text-sm po-font-medium po-text-slate-700 peer-focus:po-text-mpao-lightblue peer-invalid:po-text-red-500 peer-invalid:peer-focus:po-text-red-600 po-flex po-items-center po-space-x-1" }, Oa = ["name", "id", "value"], Ca = ["for"], Ea = { class: "po-flex po-items-center po-space-x-1" }, Aa = /* @__PURE__ */ r("span", { class: "po-text-sm" }, "Choose file", -1), Ta = ["id"], Ra = ["id"], ja = {
  name: "PoInputFile"
}, Hr = /* @__PURE__ */ Object.assign(ja, {
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
      r("span", Pa, x(e.label), 1),
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
          A(h(mo), { class: "po-w-4 po-stroke-slate-500" }),
          Aa
        ])
      ], 8, Ca),
      e.message !== null ? (i(), p("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, x(e.message), 9, Ta)) : C("", !0),
      e.errorMessage !== null ? (i(), p("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, x(e.errorMessage), 9, Ra)) : C("", !0)
    ]));
  }
});
function La(e, t) {
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
var me = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(me || {}), fe = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(fe || {});
function M({ visible: e = !0, features: t = 0, ourProps: l, theirProps: o, ...a }) {
  var n;
  let s = Na(o, l), u = Object.assign(a, { props: s });
  if (e || t & 2 && s.static)
    return Me(u);
  if (t & 1) {
    let d = (n = s.unmount) == null || n ? 0 : 1;
    return U(d, { [0]() {
      return null;
    }, [1]() {
      return Me({ ...a, props: { ...s, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Me(u);
}
function Me({ props: e, attrs: t, slots: l, slot: o, name: a }) {
  var n;
  let { as: s, ...u } = _e(e, ["unmount", "static"]), d = (n = l.default) == null ? void 0 : n.call(l, o), f = {};
  if (o) {
    let m = !1, b = [];
    for (let [y, k] of Object.entries(o))
      typeof k == "boolean" && (m = !0), k === !0 && b.push(y);
    m && (f["data-headlessui-state"] = b.join(" "));
  }
  if (s === "template") {
    if (d = yt(d ?? []), Object.keys(u).length > 0 || Object.keys(t).length > 0) {
      let [m, ...b] = d ?? [];
      if (!Va(m) || b.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${a} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(u).concat(Object.keys(t)).sort((y, k) => y.localeCompare(k)).map((y) => `  - ${y}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((y) => `  - ${y}`).join(`
`)].join(`
`));
      return Xt(m, Object.assign({}, u, f));
    }
    return Array.isArray(d) && d.length === 1 ? d[0] : d;
  }
  return q(s, Object.assign({}, u, f), { default: () => d });
}
function yt(e) {
  return e.flatMap((t) => t.type === I ? yt(t.children) : [t]);
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
function Je(e) {
  let t = Object.assign({}, e);
  for (let l in t)
    t[l] === void 0 && delete t[l];
  return t;
}
function _e(e, t = []) {
  let l = Object.assign({}, e);
  for (let o of t)
    o in l && delete l[o];
  return l;
}
function Va(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Ma = 0;
function za() {
  return ++Ma;
}
function X() {
  return za();
}
var N = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(N || {});
function Ha(e) {
  throw new Error("Unexpected object: " + e);
}
var Q = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(Q || {});
function qa(e, t) {
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
        Ha(e);
    }
  })();
  return n === -1 ? o : n;
}
function L(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let xt = Symbol("Context");
var ue = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ue || {});
function Ua() {
  return Le() !== null;
}
function Le() {
  return ee(xt, null);
}
function wt(e) {
  oe(xt, e);
}
function ut(e, t) {
  if (e)
    return e;
  let l = t ?? "button";
  if (typeof l == "string" && l.toLowerCase() === "button")
    return "button";
}
function $t(e, t) {
  let l = w(ut(e.value.type, e.value.as));
  return z(() => {
    l.value = ut(e.value.type, e.value.as);
  }), J(() => {
    var o;
    l.value || !L(t) || L(t) instanceof HTMLButtonElement && !((o = L(t)) != null && o.hasAttribute("type")) && (l.value = "button");
  }), l;
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
function kt({ container: e, accept: t, walk: l, enabled: o }) {
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
let qe = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var ae = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ae || {}), Re = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Re || {}), Ga = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Ga || {});
function Wa(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(qe)).sort((t, l) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (l.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var _t = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(_t || {});
function Ka(e, t = 0) {
  var l;
  return e === ((l = ie(e)) == null ? void 0 : l.body) ? !1 : U(t, { [0]() {
    return e.matches(qe);
  }, [1]() {
    let o = e;
    for (; o !== null; ) {
      if (o.matches(qe))
        return !0;
      o = o.parentElement;
    }
    return !1;
  } });
}
function we(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Ya = ["textarea", "input"].join(",");
function Qa(e) {
  var t, l;
  return (l = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Ya)) != null ? l : !1;
}
function Xe(e, t = (l) => l) {
  return e.slice().sort((l, o) => {
    let a = t(l), n = t(o);
    if (a === null || n === null)
      return 0;
    let s = a.compareDocumentPosition(n);
    return s & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : s & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function $e(e, t, { sorted: l = !0, relativeTo: o = null, skipElements: a = [] } = {}) {
  var n;
  let s = (n = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? n : document, u = Array.isArray(e) ? l ? Xe(e) : e : Wa(e);
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
    k = u[v], k == null || k.focus(m), b += d;
  } while (k !== s.activeElement);
  return t & 6 && Qa(k) && k.select(), k.hasAttribute("tabindex") || k.setAttribute("tabindex", "0"), 2;
}
function ze(e, t, l) {
  Be || J((o) => {
    document.addEventListener(e, t, l), o(() => document.removeEventListener(e, t, l));
  });
}
function St(e, t, l = g(() => !0)) {
  function o(n, s) {
    if (!l.value || n.defaultPrevented)
      return;
    let u = s(n);
    if (u === null || !u.getRootNode().contains(u))
      return;
    let d = function f(m) {
      return typeof m == "function" ? f(m()) : Array.isArray(m) || m instanceof Set ? m : [m];
    }(e);
    for (let f of d) {
      if (f === null)
        continue;
      let m = f instanceof HTMLElement ? f : L(f);
      if (m != null && m.contains(u) || n.composed && n.composedPath().includes(m))
        return;
    }
    return !Ka(u, _t.Loose) && u.tabIndex !== -1 && n.preventDefault(), t(n, u);
  }
  let a = w(null);
  ze("mousedown", (n) => {
    var s, u;
    l.value && (a.value = ((u = (s = n.composedPath) == null ? void 0 : s.call(n)) == null ? void 0 : u[0]) || n.target);
  }, !0), ze("click", (n) => {
    !a.value || (o(n, () => a.value), a.value = null);
  }, !0), ze("blur", (n) => o(n, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var he = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(he || {});
let ke = V({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: l }) {
  return () => {
    let { features: o, ...a } = e, n = { "aria-hidden": (o & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(o & 4) === 4 && (o & 2) !== 2 && { display: "none" } } };
    return M({ ourProps: n, theirProps: a, slot: {}, attrs: l, slots: t, name: "Hidden" });
  };
} });
function Ze(e = {}, t = null, l = []) {
  for (let [o, a] of Object.entries(e))
    Ot(l, Pt(t, o), a);
  return l;
}
function Pt(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Ot(e, t, l) {
  if (Array.isArray(l))
    for (let [o, a] of l.entries())
      Ot(e, Pt(t, o.toString()), a);
  else
    l instanceof Date ? e.push([t, l.toISOString()]) : typeof l == "boolean" ? e.push([t, l ? "1" : "0"]) : typeof l == "string" ? e.push([t, l]) : typeof l == "number" ? e.push([t, `${l}`]) : l == null ? e.push([t, ""]) : Ze(l, t, e);
}
function Ct(e) {
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
function et(e, t, l) {
  let o = w(l == null ? void 0 : l.value), a = g(() => e.value !== void 0);
  return [g(() => a.value ? e.value : o.value), function(n) {
    return a.value || (o.value = n), t == null ? void 0 : t(n);
  }];
}
function pt(e) {
  return [e.screenX, e.screenY];
}
function Ja() {
  let e = w([-1, -1]);
  return { wasMoved(t) {
    let l = pt(t);
    return e.value[0] === l[0] && e.value[1] === l[1] ? !1 : (e.value = l, !0);
  }, update(t) {
    e.value = pt(t);
  } };
}
function Xa(e, t) {
  return e === t;
}
var Za = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Za || {}), en = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(en || {}), tn = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(tn || {});
let Et = Symbol("ComboboxContext");
function Se(e) {
  let t = ee(Et, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, Se), l;
  }
  return t;
}
let on = V({ name: "Combobox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => Xa }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String }, nullable: { type: Boolean, default: !1 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: l, emit: o }) {
  let a = w(1), n = w(null), s = w(null), u = w(null), d = w(null), f = w({ static: !1, hold: !1 }), m = w([]), b = w(null), y = w(1), k = w(!1);
  function v(E = (S) => S) {
    let S = b.value !== null ? m.value[b.value] : null, P = Xe(E(m.value.slice()), (T) => L(T.dataRef.domRef)), _ = S ? P.indexOf(S) : null;
    return _ === -1 && (_ = null), { options: P, activeOptionIndex: _ };
  }
  let O = g(() => e.multiple ? 1 : 0), c = g(() => e.nullable), [$, j] = et(g(() => e.modelValue === void 0 ? U(O.value, { [1]: [], [0]: void 0 }) : e.modelValue), (E) => o("update:modelValue", E), g(() => e.defaultValue)), R = { comboboxState: a, value: $, mode: O, compare(E, S) {
    if (typeof e.by == "string") {
      let P = e.by;
      return (E == null ? void 0 : E[P]) === (S == null ? void 0 : S[P]);
    }
    return e.by(E, S);
  }, defaultValue: g(() => e.defaultValue), nullable: c, inputRef: s, labelRef: n, buttonRef: u, optionsRef: d, disabled: g(() => e.disabled), options: m, change(E) {
    j(E);
  }, activeOptionIndex: g(() => {
    if (k.value && b.value === null && m.value.length > 0) {
      let E = m.value.findIndex((S) => !S.dataRef.disabled);
      if (E !== -1)
        return E;
    }
    return b.value;
  }), activationTrigger: y, optionsPropsRef: f, closeCombobox() {
    k.value = !1, !e.disabled && a.value !== 1 && (a.value = 1, b.value = null);
  }, openCombobox() {
    if (k.value = !0, e.disabled || a.value === 0)
      return;
    let E = m.value.findIndex((S) => {
      let P = D(S.dataRef.value);
      return U(O.value, { [0]: () => R.compare(D(R.value.value), D(P)), [1]: () => D(R.value.value).some((_) => R.compare(D(_), D(P))) });
    });
    E !== -1 && (b.value = E), a.value = 0;
  }, goToOption(E, S, P) {
    if (k.value = !1, e.disabled || d.value && !f.value.static && a.value === 1)
      return;
    let _ = v();
    if (_.activeOptionIndex === null) {
      let B = _.options.findIndex((re) => !re.dataRef.disabled);
      B !== -1 && (_.activeOptionIndex = B);
    }
    let T = qa(E === Q.Specific ? { focus: Q.Specific, id: S } : { focus: E }, { resolveItems: () => _.options, resolveActiveIndex: () => _.activeOptionIndex, resolveId: (B) => B.id, resolveDisabled: (B) => B.dataRef.disabled });
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
  St([s, u, d], () => R.closeCombobox(), g(() => a.value === 0)), oe(Et, R), wt(g(() => U(a.value, { [0]: ue.Open, [1]: ue.Closed })));
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
    let { name: E, disabled: S, ...P } = e, _ = { open: a.value === 0, disabled: S, activeIndex: R.activeOptionIndex.value, activeOption: W.value, value: $.value };
    return q(I, [...E != null && $.value != null ? Ze({ [E]: $.value }).map(([T, B]) => q(ke, Je({ features: he.Hidden, key: T, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: T, value: B }))) : [], M({ theirProps: { ...l, ..._e(P, ["modelValue", "defaultValue", "nullable", "multiple", "onUpdate:modelValue", "by"]) }, ourProps: {}, slot: _, slots: t, attrs: l, name: "Combobox" })]);
  };
} }), ln = V({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-combobox-label-${X()}` } }, setup(e, { attrs: t, slots: l }) {
  let o = Se("ComboboxLabel");
  function a() {
    var n;
    (n = L(o.inputRef)) == null || n.focus({ preventScroll: !0 });
  }
  return () => {
    let n = { open: o.comboboxState.value === 0, disabled: o.disabled.value }, { id: s, ...u } = e, d = { id: s, ref: o.labelRef, onClick: a };
    return M({ ourProps: d, theirProps: u, slot: n, attrs: t, slots: l, name: "ComboboxLabel" });
  };
} }), an = V({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-combobox-button-${X()}` } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let a = Se("ComboboxButton");
  o({ el: a.buttonRef, $el: a.buttonRef });
  function n(d) {
    a.disabled.value || (a.comboboxState.value === 0 ? a.closeCombobox() : (d.preventDefault(), a.openCombobox()), ce(() => {
      var f;
      return (f = L(a.inputRef)) == null ? void 0 : f.focus({ preventScroll: !0 });
    }));
  }
  function s(d) {
    switch (d.key) {
      case N.ArrowDown:
        d.preventDefault(), d.stopPropagation(), a.comboboxState.value === 1 && a.openCombobox(), ce(() => {
          var f;
          return (f = a.inputRef.value) == null ? void 0 : f.focus({ preventScroll: !0 });
        });
        return;
      case N.ArrowUp:
        d.preventDefault(), d.stopPropagation(), a.comboboxState.value === 1 && (a.openCombobox(), ce(() => {
          a.value.value || a.goToOption(Q.Last);
        })), ce(() => {
          var f;
          return (f = a.inputRef.value) == null ? void 0 : f.focus({ preventScroll: !0 });
        });
        return;
      case N.Escape:
        if (a.comboboxState.value !== 0)
          return;
        d.preventDefault(), a.optionsRef.value && !a.optionsPropsRef.value.static && d.stopPropagation(), a.closeCombobox(), ce(() => {
          var f;
          return (f = a.inputRef.value) == null ? void 0 : f.focus({ preventScroll: !0 });
        });
        return;
    }
  }
  let u = $t(g(() => ({ as: e.as, type: t.type })), a.buttonRef);
  return () => {
    var d, f;
    let m = { open: a.comboboxState.value === 0, disabled: a.disabled.value, value: a.value.value }, { id: b, ...y } = e, k = { ref: a.buttonRef, id: b, type: u.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (d = L(a.optionsRef)) == null ? void 0 : d.id, "aria-expanded": a.disabled.value ? void 0 : a.comboboxState.value === 0, "aria-labelledby": a.labelRef.value ? [(f = L(a.labelRef)) == null ? void 0 : f.id, b].join(" ") : void 0, disabled: a.disabled.value === !0 ? !0 : void 0, onKeydown: s, onClick: n };
    return M({ ourProps: k, theirProps: y, slot: m, attrs: t, slots: l, name: "ComboboxButton" });
  };
} }), nn = V({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: () => `headlessui-combobox-input-${X()}` } }, emits: { change: (e) => !0 }, setup(e, { emit: t, attrs: l, slots: o, expose: a }) {
  let n = Se("ComboboxInput"), s = { value: !1 };
  a({ el: n.inputRef, $el: n.inputRef });
  let u = g(() => {
    var c;
    let $ = n.value.value;
    return L(n.inputRef) ? typeof e.displayValue < "u" && $ !== void 0 ? (c = e.displayValue($)) != null ? c : "" : typeof $ == "string" ? $ : "" : "";
  });
  z(() => {
    Z([u, n.comboboxState], ([c, $], [j, R]) => {
      if (s.value)
        return;
      let W = L(n.inputRef);
      !W || (R === 0 && $ === 1 || c !== j) && (W.value = c);
    }, { immediate: !0 });
  });
  let d = w(!1);
  function f() {
    d.value = !0;
  }
  function m() {
    setTimeout(() => {
      d.value = !1;
    });
  }
  function b(c) {
    switch (s.value = !0, c.key) {
      case N.Backspace:
      case N.Delete:
        if (n.mode.value !== 0 || !n.nullable.value)
          return;
        let $ = c.currentTarget;
        requestAnimationFrame(() => {
          if ($.value === "") {
            n.change(null);
            let j = L(n.optionsRef);
            j && (j.scrollTop = 0), n.goToOption(Q.Nothing);
          }
        });
        break;
      case N.Enter:
        if (s.value = !1, n.comboboxState.value !== 0 || d.value)
          return;
        if (c.preventDefault(), c.stopPropagation(), n.activeOptionIndex.value === null) {
          n.closeCombobox();
          return;
        }
        n.selectActiveOption(), n.mode.value === 0 && n.closeCombobox();
        break;
      case N.ArrowDown:
        return s.value = !1, c.preventDefault(), c.stopPropagation(), U(n.comboboxState.value, { [0]: () => n.goToOption(Q.Next), [1]: () => n.openCombobox() });
      case N.ArrowUp:
        return s.value = !1, c.preventDefault(), c.stopPropagation(), U(n.comboboxState.value, { [0]: () => n.goToOption(Q.Previous), [1]: () => {
          n.openCombobox(), ce(() => {
            n.value.value || n.goToOption(Q.Last);
          });
        } });
      case N.Home:
        if (c.shiftKey)
          break;
        return s.value = !1, c.preventDefault(), c.stopPropagation(), n.goToOption(Q.First);
      case N.PageUp:
        return s.value = !1, c.preventDefault(), c.stopPropagation(), n.goToOption(Q.First);
      case N.End:
        if (c.shiftKey)
          break;
        return s.value = !1, c.preventDefault(), c.stopPropagation(), n.goToOption(Q.Last);
      case N.PageDown:
        return s.value = !1, c.preventDefault(), c.stopPropagation(), n.goToOption(Q.Last);
      case N.Escape:
        if (s.value = !1, n.comboboxState.value !== 0)
          return;
        c.preventDefault(), n.optionsRef.value && !n.optionsPropsRef.value.static && c.stopPropagation(), n.closeCombobox();
        break;
      case N.Tab:
        if (s.value = !1, n.comboboxState.value !== 0)
          return;
        n.mode.value === 0 && n.selectActiveOption(), n.closeCombobox();
        break;
    }
  }
  function y(c) {
    t("change", c);
  }
  function k(c) {
    n.openCombobox(), t("change", c);
  }
  function v() {
    s.value = !1;
  }
  let O = g(() => {
    var c, $, j, R;
    return (R = (j = ($ = e.defaultValue) != null ? $ : n.defaultValue.value !== void 0 ? (c = e.displayValue) == null ? void 0 : c.call(e, n.defaultValue.value) : null) != null ? j : n.defaultValue.value) != null ? R : "";
  });
  return () => {
    var c, $, j, R, W, H;
    let E = { open: n.comboboxState.value === 0 }, { id: S, displayValue: P, ..._ } = e, T = { "aria-controls": (c = n.optionsRef.value) == null ? void 0 : c.id, "aria-expanded": n.disabled.value ? void 0 : n.comboboxState.value === 0, "aria-activedescendant": n.activeOptionIndex.value === null || ($ = n.options.value[n.activeOptionIndex.value]) == null ? void 0 : $.id, "aria-multiselectable": n.mode.value === 1 ? !0 : void 0, "aria-labelledby": (W = (j = L(n.labelRef)) == null ? void 0 : j.id) != null ? W : (R = L(n.buttonRef)) == null ? void 0 : R.id, id: S, onCompositionstart: f, onCompositionend: m, onKeydown: b, onChange: y, onInput: k, onBlur: v, role: "combobox", type: (H = l.type) != null ? H : "text", tabIndex: 0, ref: n.inputRef, defaultValue: O.value };
    return M({ ourProps: T, theirProps: _, slot: E, attrs: l, slots: o, features: me.RenderStrategy | me.Static, name: "ComboboxInput" });
  };
} }), sn = V({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, hold: { type: [Boolean], default: !1 } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let a = Se("ComboboxOptions"), n = `headlessui-combobox-options-${X()}`;
  o({ el: a.optionsRef, $el: a.optionsRef }), J(() => {
    a.optionsPropsRef.value.static = e.static;
  }), J(() => {
    a.optionsPropsRef.value.hold = e.hold;
  });
  let s = Le(), u = g(() => s !== null ? s.value === ue.Open : a.comboboxState.value === 0);
  return kt({ container: g(() => L(a.optionsRef)), enabled: g(() => a.comboboxState.value === 0), accept(d) {
    return d.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : d.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(d) {
    d.setAttribute("role", "none");
  } }), () => {
    var d, f, m, b;
    let y = { open: a.comboboxState.value === 0 }, k = { "aria-activedescendant": a.activeOptionIndex.value === null || (d = a.options.value[a.activeOptionIndex.value]) == null ? void 0 : d.id, "aria-labelledby": (b = (f = L(a.labelRef)) == null ? void 0 : f.id) != null ? b : (m = L(a.buttonRef)) == null ? void 0 : m.id, id: n, ref: a.optionsRef, role: "listbox" }, v = _e(e, ["hold"]);
    return M({ ourProps: k, theirProps: v, slot: y, attrs: t, slots: l, features: me.RenderStrategy | me.Static, visible: u.value, name: "ComboboxOptions" });
  };
} }), rn = V({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: l, expose: o }) {
  let a = Se("ComboboxOption"), n = `headlessui-combobox-option-${X()}`, s = w(null);
  o({ el: s, $el: s });
  let u = g(() => a.activeOptionIndex.value !== null ? a.options.value[a.activeOptionIndex.value].id === n : !1), d = g(() => U(a.mode.value, { [0]: () => a.compare(D(a.value.value), D(e.value)), [1]: () => D(a.value.value).some((c) => a.compare(D(c), D(e.value))) })), f = g(() => ({ disabled: e.disabled, value: e.value, domRef: s }));
  z(() => a.registerOption(n, f)), ne(() => a.unregisterOption(n)), J(() => {
    a.comboboxState.value === 0 && (!u.value || a.activationTrigger.value !== 0 && ce(() => {
      var c, $;
      return ($ = (c = L(s)) == null ? void 0 : c.scrollIntoView) == null ? void 0 : $.call(c, { block: "nearest" });
    }));
  });
  function m(c) {
    if (e.disabled)
      return c.preventDefault();
    a.selectOption(n), a.mode.value === 0 && a.closeCombobox();
  }
  function b() {
    if (e.disabled)
      return a.goToOption(Q.Nothing);
    a.goToOption(Q.Specific, n);
  }
  let y = Ja();
  function k(c) {
    y.update(c);
  }
  function v(c) {
    !y.wasMoved(c) || e.disabled || u.value || a.goToOption(Q.Specific, n, 0);
  }
  function O(c) {
    !y.wasMoved(c) || e.disabled || !u.value || a.optionsPropsRef.value.hold || a.goToOption(Q.Nothing);
  }
  return () => {
    let { disabled: c } = e, $ = { active: u.value, selected: d.value, disabled: c }, j = { id: n, ref: s, role: "option", tabIndex: c === !0 ? void 0 : -1, "aria-disabled": c === !0 ? !0 : void 0, "aria-selected": d.value, disabled: void 0, onClick: m, onFocus: b, onPointerenter: k, onMouseenter: k, onPointermove: v, onMousemove: v, onPointerleave: O, onMouseleave: O };
    return M({ ourProps: j, theirProps: e, slot: $, attrs: l, slots: t, name: "ComboboxOption" });
  };
} });
function un(e, t, l) {
  Be || J((o) => {
    window.addEventListener(e, t, l), o(() => window.removeEventListener(e, t, l));
  });
}
var Oe = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(Oe || {});
function pn() {
  let e = w(0);
  return un("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function At(e, t, l, o) {
  Be || J((a) => {
    e = e ?? window, e.addEventListener(t, l, o), a(() => e.removeEventListener(t, l, o));
  });
}
function dn(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
var Tt = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Tt || {});
let Pe = Object.assign(V({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: Object, default: w(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: l, expose: o }) {
  let a = w(null);
  o({ el: a, $el: a });
  let n = g(() => ie(a));
  cn({ ownerDocument: n }, g(() => Boolean(e.features & 16)));
  let s = fn({ ownerDocument: n, container: a, initialFocus: g(() => e.initialFocus) }, g(() => Boolean(e.features & 2)));
  vn({ ownerDocument: n, container: a, containers: e.containers, previousActiveElement: s }, g(() => Boolean(e.features & 8)));
  let u = pn();
  function d(y) {
    let k = L(a);
    k && ((v) => v())(() => {
      U(u.value, { [Oe.Forwards]: () => $e(k, ae.First, { skipElements: [y.relatedTarget] }), [Oe.Backwards]: () => $e(k, ae.Last, { skipElements: [y.relatedTarget] }) });
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
    v.add(a);
    let O = y.relatedTarget;
    !O || O.dataset.headlessuiFocusGuard !== "true" && (Rt(v, O) || (f.value ? $e(L(a), U(u.value, { [Oe.Forwards]: () => ae.Next, [Oe.Backwards]: () => ae.Previous }) | ae.WrapAround, { relativeTo: y.target }) : y.target instanceof HTMLElement && we(y.target)));
  }
  return () => {
    let y = {}, k = { ref: a, onKeydown: m, onFocusout: b }, { features: v, initialFocus: O, containers: c, ...$ } = e;
    return q(I, [Boolean(v & 4) && q(ke, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: d, features: he.Focusable }), M({ ourProps: k, theirProps: { ...t, ...$ }, slot: y, attrs: t, slots: l, name: "FocusTrap" }), Boolean(v & 4) && q(ke, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: d, features: he.Focusable })]);
  };
} }), { features: Tt });
function cn({ ownerDocument: e }, t) {
  let l = w(null);
  function o() {
    var n;
    l.value || (l.value = (n = e.value) == null ? void 0 : n.activeElement);
  }
  function a() {
    !l.value || (we(l.value), l.value = null);
  }
  z(() => {
    Z(t, (n, s) => {
      n !== s && (n ? o() : a());
    }, { immediate: !0 });
  }), ne(a);
}
function fn({ ownerDocument: e, container: t, initialFocus: l }, o) {
  let a = w(null), n = w(!1);
  return z(() => n.value = !0), ne(() => n.value = !1), z(() => {
    Z([t, l, o], (s, u) => {
      if (s.every((f, m) => (u == null ? void 0 : u[m]) === f) || !o.value)
        return;
      let d = L(t);
      !d || dn(() => {
        var f, m;
        if (!n.value)
          return;
        let b = L(l), y = (f = e.value) == null ? void 0 : f.activeElement;
        if (b) {
          if (b === y) {
            a.value = y;
            return;
          }
        } else if (d.contains(y)) {
          a.value = y;
          return;
        }
        b ? we(b) : $e(d, ae.First | ae.NoScroll) === Re.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), a.value = (m = e.value) == null ? void 0 : m.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), a;
}
function vn({ ownerDocument: e, container: t, containers: l, previousActiveElement: o }, a) {
  var n;
  At((n = e.value) == null ? void 0 : n.defaultView, "focus", (s) => {
    if (!a.value)
      return;
    let u = new Set(l == null ? void 0 : l.value);
    u.add(t);
    let d = o.value;
    if (!d)
      return;
    let f = s.target;
    f && f instanceof HTMLElement ? Rt(u, f) ? (o.value = f, we(f)) : (s.preventDefault(), s.stopPropagation(), we(d)) : we(o.value);
  }, !0);
}
function Rt(e, t) {
  var l;
  for (let o of e)
    if ((l = o.value) != null && l.contains(t))
      return !0;
  return !1;
}
let dt = "body > *", ye = /* @__PURE__ */ new Set(), de = /* @__PURE__ */ new Map();
function ct(e) {
  e.setAttribute("aria-hidden", "true"), e.inert = !0;
}
function ft(e) {
  let t = de.get(e);
  !t || (t["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert);
}
function mn(e, t = w(!0)) {
  J((l) => {
    if (!t.value || !e.value)
      return;
    let o = e.value, a = ie(o);
    if (a) {
      ye.add(o);
      for (let n of de.keys())
        n.contains(o) && (ft(n), de.delete(n));
      a.querySelectorAll(dt).forEach((n) => {
        if (n instanceof HTMLElement) {
          for (let s of ye)
            if (n.contains(s))
              return;
          ye.size === 1 && (de.set(n, { "aria-hidden": n.getAttribute("aria-hidden"), inert: n.inert }), ct(n));
        }
      }), l(() => {
        if (ye.delete(o), ye.size > 0)
          a.querySelectorAll(dt).forEach((n) => {
            if (n instanceof HTMLElement && !de.has(n)) {
              for (let s of ye)
                if (n.contains(s))
                  return;
              de.set(n, { "aria-hidden": n.getAttribute("aria-hidden"), inert: n.inert }), ct(n);
            }
          });
        else
          for (let n of de.keys())
            ft(n), de.delete(n);
      });
    }
  });
}
let jt = Symbol("ForcePortalRootContext");
function bn() {
  return ee(jt, !1);
}
let Ue = V({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: l }) {
  return oe(jt, e.force), () => {
    let { force: o, ...a } = e;
    return M({ theirProps: a, ourProps: {}, slot: {}, slots: t, attrs: l, name: "ForcePortalRoot" });
  };
} });
function hn(e) {
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
let Lt = V({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: l }) {
  let o = w(null), a = g(() => ie(o)), n = bn(), s = ee(Bt, null), u = w(n === !0 || s == null ? hn(o.value) : s.resolveTarget());
  return J(() => {
    n || s != null && (u.value = s.resolveTarget());
  }), ne(() => {
    var d, f;
    let m = (d = a.value) == null ? void 0 : d.getElementById("headlessui-portal-root");
    !m || u.value === m && u.value.children.length <= 0 && ((f = u.value.parentElement) == null || f.removeChild(u.value));
  }), () => {
    if (u.value === null)
      return null;
    let d = { ref: o, "data-headlessui-portal": "" };
    return q(bt, { to: u.value }, M({ ourProps: d, theirProps: e, slot: {}, attrs: l, slots: t, name: "Portal" }));
  };
} }), Bt = Symbol("PortalGroupContext"), gn = V({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: l }) {
  let o = Zt({ resolveTarget() {
    return e.target;
  } });
  return oe(Bt, o), () => {
    let { target: a, ...n } = e;
    return M({ theirProps: n, ourProps: {}, slot: {}, attrs: t, slots: l, name: "PortalGroup" });
  };
} }), Dt = Symbol("StackContext");
var Ge = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(Ge || {});
function yn() {
  return ee(Dt, () => {
  });
}
function xn({ type: e, enabled: t, element: l, onUpdate: o }) {
  let a = yn();
  function n(...s) {
    o == null || o(...s), a(...s);
  }
  z(() => {
    Z(t, (s, u) => {
      s ? n(0, e, l) : u === !0 && n(1, e, l);
    }, { immediate: !0, flush: "sync" });
  }), ne(() => {
    t.value && n(1, e, l);
  }), oe(Dt, n);
}
let Ft = Symbol("DescriptionContext");
function wn() {
  let e = ee(Ft, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function De({ slot: e = w({}), name: t = "Description", props: l = {} } = {}) {
  let o = w([]);
  function a(n) {
    return o.value.push(n), () => {
      let s = o.value.indexOf(n);
      s !== -1 && o.value.splice(s, 1);
    };
  }
  return oe(Ft, { register: a, slot: e, name: t, props: l }), g(() => o.value.length > 0 ? o.value.join(" ") : void 0);
}
let $n = V({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${X()}` } }, setup(e, { attrs: t, slots: l }) {
  let o = wn();
  return z(() => ne(o.register(e.id))), () => {
    let { name: a = "Description", slot: n = w({}), props: s = {} } = o, { id: u, ...d } = e, f = { ...Object.entries(s).reduce((m, [b, y]) => Object.assign(m, { [b]: h(y) }), {}), id: u };
    return M({ ourProps: f, theirProps: d, slot: n.value, attrs: t, slots: l, name: a });
  };
} });
function tt() {
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
function kn() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
var _n = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(_n || {});
let We = Symbol("DialogContext");
function Ee(e) {
  let t = ee(We, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, Ee), l;
  }
  return t;
}
let Ae = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", It = V({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Ae }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${X()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: l, slots: o, expose: a }) {
  var n;
  let s = w(!1);
  z(() => {
    s.value = !0;
  });
  let u = w(0), d = Le(), f = g(() => e.open === Ae && d !== null ? U(d.value, { [ue.Open]: !0, [ue.Closed]: !1 }) : e.open), m = w(/* @__PURE__ */ new Set()), b = w(null), y = w(null), k = g(() => ie(b));
  if (a({ el: b, $el: b }), !(e.open !== Ae || d !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof f.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${f.value === Ae ? void 0 : e.open}`);
  let v = g(() => s.value && f.value ? 0 : 1), O = g(() => v.value === 0), c = g(() => u.value > 1), $ = ee(We, null) !== null, j = g(() => c.value ? "parent" : "leaf");
  mn(b, g(() => c.value ? O.value : !1)), xn({ type: "Dialog", enabled: g(() => v.value === 0), element: b, onUpdate: (S, P, _) => {
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
  oe(We, H);
  function E() {
    var S, P, _;
    return [...Array.from((P = (S = k.value) == null ? void 0 : S.querySelectorAll("body > *, [data-headlessui-portal]")) != null ? P : []).filter((T) => !(!(T instanceof HTMLElement) || T.contains(L(y)) || H.panelRef.value && T.contains(H.panelRef.value))), (_ = H.panelRef.value) != null ? _ : b.value];
  }
  return St(() => E(), (S, P) => {
    H.close(), ce(() => P == null ? void 0 : P.focus());
  }, g(() => v.value === 0 && !c.value)), At((n = k.value) == null ? void 0 : n.defaultView, "keydown", (S) => {
    S.defaultPrevented || S.key === N.Escape && v.value === 0 && (c.value || (S.preventDefault(), S.stopPropagation(), H.close()));
  }), J((S) => {
    var P;
    if (v.value !== 0 || $)
      return;
    let _ = k.value;
    if (!_)
      return;
    let T = tt(), B = window.pageYOffset;
    function re(le, te, pe) {
      let Ne = le.style.getPropertyValue(te);
      return Object.assign(le.style, { [te]: pe }), T.add(() => {
        Object.assign(le.style, { [te]: Ne });
      });
    }
    let ge = _ == null ? void 0 : _.documentElement, Ie = ((P = _.defaultView) != null ? P : window).innerWidth - ge.clientWidth;
    if (re(ge, "overflow", "hidden"), Ie > 0) {
      let le = ge.clientWidth - ge.offsetWidth, te = Ie - le;
      re(ge, "paddingRight", `${te}px`);
    }
    if (kn()) {
      re(_.body, "marginTop", `-${B}px`), window.scrollTo(0, 0);
      let le = null;
      T.addEventListener(_, "click", (te) => {
        if (te.target instanceof HTMLElement)
          try {
            let pe = te.target.closest("a");
            if (!pe)
              return;
            let { hash: Ne } = new URL(pe.href), Ve = _.querySelector(Ne);
            Ve && !E().some((Kt) => Kt.contains(Ve)) && (le = Ve);
          } catch {
          }
      }, !0), T.addEventListener(_, "touchmove", (te) => {
        te.target instanceof HTMLElement && !E().some((pe) => pe.contains(te.target)) && te.preventDefault();
      }, { passive: !1 }), T.add(() => {
        window.scrollTo(0, window.pageYOffset + B), le && le.isConnected && (le.scrollIntoView({ block: "nearest" }), le = null);
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
    let { id: S, open: P, initialFocus: _, ...T } = e, B = { ...l, ref: b, id: S, role: "dialog", "aria-modal": v.value === 0 ? !0 : void 0, "aria-labelledby": W.value, "aria-describedby": R.value }, re = { open: v.value === 0 };
    return q(Ue, { force: !0 }, () => [q(Lt, () => q(gn, { target: b.value }, () => q(Ue, { force: !1 }, () => q(Pe, { initialFocus: _, containers: m, features: O.value ? U(j.value, { parent: Pe.features.RestoreFocus, leaf: Pe.features.All & ~Pe.features.FocusLock }) : Pe.features.None }, () => M({ ourProps: B, theirProps: T, slot: re, attrs: l, slots: o, visible: v.value === 0, features: me.RenderStrategy | me.Static, name: "Dialog" }))))), q(ke, { features: he.Hidden, ref: y })]);
  };
} });
V({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${X()}` } }, setup(e, { attrs: t, slots: l }) {
  let o = Ee("DialogOverlay");
  function a(n) {
    n.target === n.currentTarget && (n.preventDefault(), n.stopPropagation(), o.close());
  }
  return () => {
    let { id: n, ...s } = e;
    return M({ ourProps: { id: n, "aria-hidden": !0, onClick: a }, theirProps: s, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogOverlay" });
  };
} });
V({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${X()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: l, expose: o }) {
  let a = Ee("DialogBackdrop"), n = w(null);
  return o({ el: n, $el: n }), z(() => {
    if (a.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: s, ...u } = e, d = { id: s, ref: n, "aria-hidden": !0 };
    return q(Ue, { force: !0 }, () => q(Lt, () => M({ ourProps: d, theirProps: { ...t, ...u }, slot: { open: a.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogBackdrop" })));
  };
} });
let Nt = V({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${X()}` } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let a = Ee("DialogPanel");
  o({ el: a.panelRef, $el: a.panelRef });
  function n(s) {
    s.stopPropagation();
  }
  return () => {
    let { id: s, ...u } = e, d = { id: s, ref: a.panelRef, onClick: n };
    return M({ ourProps: d, theirProps: u, slot: { open: a.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogPanel" });
  };
} }), Sn = V({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${X()}` } }, setup(e, { attrs: t, slots: l }) {
  let o = Ee("DialogTitle");
  return z(() => {
    o.setTitleId(e.id), ne(() => o.setTitleId(null));
  }), () => {
    let { id: a, ...n } = e;
    return M({ ourProps: { id: a }, theirProps: n, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogTitle" });
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
function ot({ slot: e = {}, name: t = "Label", props: l = {} } = {}) {
  let o = w([]);
  function a(n) {
    return o.value.push(n), () => {
      let s = o.value.indexOf(n);
      s !== -1 && o.value.splice(s, 1);
    };
  }
  return oe(Vt, { register: a, slot: e, name: t, props: l }), g(() => o.value.length > 0 ? o.value.join(" ") : void 0);
}
let zt = V({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-label-${X()}` } }, setup(e, { slots: t, attrs: l }) {
  let o = Mt();
  return z(() => ne(o.register(e.id))), () => {
    let { name: a = "Label", slot: n = {}, props: s = {} } = o, { id: u, passive: d, ...f } = e, m = { ...Object.entries(s).reduce((b, [y, k]) => Object.assign(b, { [y]: h(k) }), {}), id: u };
    return d && (delete m.onClick, delete f.onClick), M({ ourProps: m, theirProps: f, slot: n, attrs: l, slots: t, name: a });
  };
} });
function Pn(e, t) {
  return e === t;
}
let Ht = Symbol("RadioGroupContext");
function qt(e) {
  let t = ee(Ht, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, qt), l;
  }
  return t;
}
let On = V({ name: "RadioGroup", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "div" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => Pn }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-radiogroup-${X()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: l, slots: o, expose: a }) {
  let n = w(null), s = w([]), u = ot({ name: "RadioGroupLabel" }), d = De({ name: "RadioGroupDescription" });
  a({ el: n, $el: n });
  let [f, m] = et(g(() => e.modelValue), (v) => t("update:modelValue", v), g(() => e.defaultValue)), b = { options: s, value: f, disabled: g(() => e.disabled), firstOption: g(() => s.value.find((v) => !v.propsRef.disabled)), containsCheckedOption: g(() => s.value.some((v) => b.compare(D(v.propsRef.value), D(e.modelValue)))), compare(v, O) {
    if (typeof e.by == "string") {
      let c = e.by;
      return (v == null ? void 0 : v[c]) === (O == null ? void 0 : O[c]);
    }
    return e.by(v, O);
  }, change(v) {
    var O;
    if (e.disabled || b.compare(D(f.value), D(v)))
      return !1;
    let c = (O = s.value.find(($) => b.compare(D($.propsRef.value), D(v)))) == null ? void 0 : O.propsRef;
    return c != null && c.disabled ? !1 : (m(v), !0);
  }, registerOption(v) {
    s.value.push(v), s.value = Xe(s.value, (O) => O.element);
  }, unregisterOption(v) {
    let O = s.value.findIndex((c) => c.id === v);
    O !== -1 && s.value.splice(O, 1);
  } };
  oe(Ht, b), kt({ container: g(() => L(n)), accept(v) {
    return v.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : v.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(v) {
    v.setAttribute("role", "none");
  } });
  function y(v) {
    if (!n.value || !n.value.contains(v.target))
      return;
    let O = s.value.filter((c) => c.propsRef.disabled === !1).map((c) => c.element);
    switch (v.key) {
      case N.Enter:
        Ct(v.currentTarget);
        break;
      case N.ArrowLeft:
      case N.ArrowUp:
        if (v.preventDefault(), v.stopPropagation(), $e(O, ae.Previous | ae.WrapAround) === Re.Success) {
          let c = s.value.find(($) => {
            var j;
            return $.element === ((j = ie(n)) == null ? void 0 : j.activeElement);
          });
          c && b.change(c.propsRef.value);
        }
        break;
      case N.ArrowRight:
      case N.ArrowDown:
        if (v.preventDefault(), v.stopPropagation(), $e(O, ae.Next | ae.WrapAround) === Re.Success) {
          let c = s.value.find(($) => {
            var j;
            return $.element === ((j = ie($.element)) == null ? void 0 : j.activeElement);
          });
          c && b.change(c.propsRef.value);
        }
        break;
      case N.Space:
        {
          v.preventDefault(), v.stopPropagation();
          let c = s.value.find(($) => {
            var j;
            return $.element === ((j = ie($.element)) == null ? void 0 : j.activeElement);
          });
          c && b.change(c.propsRef.value);
        }
        break;
    }
  }
  let k = g(() => {
    var v;
    return (v = L(n)) == null ? void 0 : v.closest("form");
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
    let { disabled: v, name: O, id: c, ...$ } = e, j = { ref: n, id: c, role: "radiogroup", "aria-labelledby": u.value, "aria-describedby": d.value, onKeydown: y };
    return q(I, [...O != null && f.value != null ? Ze({ [O]: f.value }).map(([R, W]) => q(ke, Je({ features: he.Hidden, key: R, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: R, value: W }))) : [], M({ ourProps: j, theirProps: { ...l, ..._e($, ["modelValue", "defaultValue"]) }, slot: {}, attrs: l, slots: o, name: "RadioGroup" })]);
  };
} });
var Cn = ((e) => (e[e.Empty = 1] = "Empty", e[e.Active = 2] = "Active", e))(Cn || {});
let En = V({ name: "RadioGroupOption", props: { as: { type: [Object, String], default: "div" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-radiogroup-option-${X()}` } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let a = qt("RadioGroupOption"), n = ot({ name: "RadioGroupLabel" }), s = De({ name: "RadioGroupDescription" }), u = w(null), d = g(() => ({ value: e.value, disabled: e.disabled })), f = w(1);
  o({ el: u, $el: u }), z(() => a.registerOption({ id: e.id, element: u, propsRef: d })), ne(() => a.unregisterOption(e.id));
  let m = g(() => {
    var $;
    return (($ = a.firstOption.value) == null ? void 0 : $.id) === e.id;
  }), b = g(() => a.disabled.value || e.disabled), y = g(() => a.compare(D(a.value.value), D(e.value))), k = g(() => b.value ? -1 : y.value || !a.containsCheckedOption.value && m.value ? 0 : -1);
  function v() {
    var $;
    !a.change(e.value) || (f.value |= 2, ($ = u.value) == null || $.focus());
  }
  function O() {
    f.value |= 2;
  }
  function c() {
    f.value &= -3;
  }
  return () => {
    let { id: $, value: j, disabled: R, ...W } = e, H = { checked: y.value, disabled: b.value, active: Boolean(f.value & 2) }, E = { id: $, ref: u, role: "radio", "aria-checked": y.value ? "true" : "false", "aria-labelledby": n.value, "aria-describedby": s.value, "aria-disabled": b.value ? !0 : void 0, tabIndex: k.value, onClick: b.value ? void 0 : v, onFocus: b.value ? void 0 : O, onBlur: b.value ? void 0 : c };
    return M({ ourProps: E, theirProps: W, slot: H, attrs: t, slots: l, name: "RadioGroupOption" });
  };
} }), vt = zt, An = $n, Ut = Symbol("GroupContext"), Tn = V({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: l }) {
  let o = w(null), a = ot({ name: "SwitchLabel", props: { onClick() {
    !o.value || (o.value.click(), o.value.focus({ preventScroll: !0 }));
  } } }), n = De({ name: "SwitchDescription" });
  return oe(Ut, { switchRef: o, labelledby: a, describedby: n }), () => M({ theirProps: e, ourProps: {}, slot: {}, slots: t, attrs: l, name: "SwitchGroup" });
} }), Rn = V({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: !0 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-switch-${X()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: l, slots: o, expose: a }) {
  let n = ee(Ut, null), [s, u] = et(g(() => e.modelValue), (c) => t("update:modelValue", c), g(() => e.defaultChecked));
  function d() {
    u(!s.value);
  }
  let f = w(null), m = n === null ? f : n.switchRef, b = $t(g(() => ({ as: e.as, type: l.type })), m);
  a({ el: m, $el: m });
  function y(c) {
    c.preventDefault(), d();
  }
  function k(c) {
    c.key === N.Space ? (c.preventDefault(), d()) : c.key === N.Enter && Ct(c.currentTarget);
  }
  function v(c) {
    c.preventDefault();
  }
  let O = g(() => {
    var c, $;
    return ($ = (c = L(m)) == null ? void 0 : c.closest) == null ? void 0 : $.call(c, "form");
  });
  return z(() => {
    Z([O], () => {
      if (!O.value || e.defaultChecked === void 0)
        return;
      function c() {
        u(e.defaultChecked);
      }
      return O.value.addEventListener("reset", c), () => {
        var $;
        ($ = O.value) == null || $.removeEventListener("reset", c);
      };
    }, { immediate: !0 });
  }), () => {
    let { id: c, name: $, value: j, ...R } = e, W = { checked: s.value }, H = { id: c, ref: m, role: "switch", type: b.value, tabIndex: 0, "aria-checked": s.value, "aria-labelledby": n == null ? void 0 : n.labelledby.value, "aria-describedby": n == null ? void 0 : n.describedby.value, onClick: y, onKeyup: k, onKeypress: v };
    return q(I, [$ != null && s.value != null ? q(ke, Je({ features: he.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: s.value, name: $, value: j })) : null, M({ ourProps: H, theirProps: { ...l, ..._e(R, ["modelValue", "defaultChecked"]) }, slot: W, attrs: l, slots: o, name: "Switch" })]);
  };
} }), jn = zt;
function Ln(e) {
  let t = { called: !1 };
  return (...l) => {
    if (!t.called)
      return t.called = !0, e(...l);
  };
}
function He(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Te(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var Ke = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(Ke || {});
function Bn(e, t) {
  let l = tt();
  if (!e)
    return l.dispose;
  let { transitionDuration: o, transitionDelay: a } = getComputedStyle(e), [n, s] = [o, a].map((u) => {
    let [d = 0] = u.split(",").filter(Boolean).map((f) => f.includes("ms") ? parseFloat(f) : parseFloat(f) * 1e3).sort((f, m) => m - f);
    return d;
  });
  return n !== 0 ? l.setTimeout(() => t("finished"), n + s) : t("finished"), l.add(() => t("cancelled")), l.dispose;
}
function mt(e, t, l, o, a, n) {
  let s = tt(), u = n !== void 0 ? Ln(n) : () => {
  };
  return Te(e, ...a), He(e, ...t, ...l), s.nextFrame(() => {
    Te(e, ...l), He(e, ...o), s.add(Bn(e, (d) => (Te(e, ...o, ...t), He(e, ...a), u(d))));
  }), s.add(() => Te(e, ...t, ...l, ...o, ...a)), s.add(() => u("cancelled")), s.dispose;
}
function be(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let lt = Symbol("TransitionContext");
var Dn = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Dn || {});
function Fn() {
  return ee(lt, null) !== null;
}
function In() {
  let e = ee(lt, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Nn() {
  let e = ee(at, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let at = Symbol("NestingContext");
function Fe(e) {
  return "children" in e ? Fe(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Gt(e) {
  let t = w([]), l = w(!1);
  z(() => l.value = !0), ne(() => l.value = !1);
  function o(n, s = fe.Hidden) {
    let u = t.value.findIndex(({ id: d }) => d === n);
    u !== -1 && (U(s, { [fe.Unmount]() {
      t.value.splice(u, 1);
    }, [fe.Hidden]() {
      t.value[u].state = "hidden";
    } }), !Fe(t) && l.value && (e == null || e()));
  }
  function a(n) {
    let s = t.value.find(({ id: u }) => u === n);
    return s ? s.state !== "visible" && (s.state = "visible") : t.value.push({ id: n, state: "visible" }), () => o(n, fe.Unmount);
  }
  return { children: t, register: a, unregister: o };
}
let Wt = me.RenderStrategy, je = V({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: l, slots: o, expose: a }) {
  if (!Fn() && Ua())
    return () => q(nt, { ...e, onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave") }, o);
  let n = w(null), s = w("visible"), u = g(() => e.unmount ? fe.Unmount : fe.Hidden);
  a({ el: n, $el: n });
  let { show: d, appear: f } = In(), { register: m, unregister: b } = Nn(), y = { value: !0 }, k = X(), v = { value: !1 }, O = Gt(() => {
    v.value || (s.value = "hidden", b(k), t("afterLeave"));
  });
  z(() => {
    let P = m(k);
    ne(P);
  }), J(() => {
    if (u.value === fe.Hidden && k) {
      if (d && s.value !== "visible") {
        s.value = "visible";
        return;
      }
      U(s.value, { hidden: () => b(k), visible: () => m(k) });
    }
  });
  let c = be(e.enter), $ = be(e.enterFrom), j = be(e.enterTo), R = be(e.entered), W = be(e.leave), H = be(e.leaveFrom), E = be(e.leaveTo);
  z(() => {
    J(() => {
      if (s.value === "visible") {
        let P = L(n);
        if (P instanceof Comment && P.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function S(P) {
    let _ = y.value && !f.value, T = L(n);
    !T || !(T instanceof HTMLElement) || _ || (v.value = !0, d.value && t("beforeEnter"), d.value || t("beforeLeave"), P(d.value ? mt(T, c, $, j, R, (B) => {
      v.value = !1, B === Ke.Finished && t("afterEnter");
    }) : mt(T, W, H, E, R, (B) => {
      v.value = !1, B === Ke.Finished && (Fe(O) || (s.value = "hidden", b(k), t("afterLeave")));
    })));
  }
  return z(() => {
    Z([d], (P, _, T) => {
      S(T), y.value = !1;
    }, { immediate: !0 });
  }), oe(at, O), wt(g(() => U(s.value, { visible: ue.Open, hidden: ue.Closed }))), () => {
    let { appear: P, show: _, enter: T, enterFrom: B, enterTo: re, entered: ge, leave: Ie, leaveFrom: le, leaveTo: te, ...pe } = e;
    return M({ theirProps: pe, ourProps: { ref: n }, slot: {}, slots: o, attrs: l, features: Wt, visible: s.value === "visible", name: "TransitionChild" });
  };
} }), Vn = je, nt = V({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: l, slots: o }) {
  let a = Le(), n = g(() => e.show === null && a !== null ? U(a.value, { [ue.Open]: !0, [ue.Closed]: !1 }) : e.show);
  J(() => {
    if (![!0, !1].includes(n.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let s = w(n.value ? "visible" : "hidden"), u = Gt(() => {
    s.value = "hidden";
  }), d = w(!0), f = { show: n, appear: g(() => e.appear || !d.value) };
  return z(() => {
    J(() => {
      d.value = !1, n.value ? s.value = "visible" : Fe(u) || (s.value = "hidden");
    });
  }), oe(at, u), oe(lt, f), () => {
    let m = _e(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), b = { unmount: e.unmount };
    return M({ ourProps: { ...b, as: "template" }, theirProps: {}, slot: {}, slots: { ...o, default: () => [q(Vn, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...l, ...b, ...m }, o.default)] }, attrs: {}, features: Wt, visible: s.value === "visible", name: "Transition" });
  };
} });
const Mn = ["title"], zn = { class: "po-relative po-mt-1" }, Hn = {
  name: "PoSelectField"
}, qr = /* @__PURE__ */ Object.assign(Hn, {
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
    const l = e, o = w(""), a = w(l.preSelected), n = g(
      () => o.value === "" ? l.list : l.list.filter((s) => s.name.toLowerCase().includes(o.value.toLowerCase()))
    );
    return Z(a, () => {
      t("update:modelValue", a.value);
    }), (s, u) => (i(), K(h(on), {
      as: "div",
      modelValue: a.value,
      "onUpdate:modelValue": u[1] || (u[1] = (d) => a.value = d)
    }, {
      default: F(() => [
        A(h(ln), { class: "po-text-sm po-font-medium po-text-slate-700 po-flex po-items-center po-space-x-1" }, {
          default: F(() => [
            r("span", null, x(e.label), 1),
            e.info !== null ? (i(), p("abbr", {
              key: 0,
              title: e.info,
              class: "po-w-4 po-text-slate-500"
            }, [
              A(h(Fa), { class: "po-fill-current" })
            ], 8, Mn)) : C("", !0)
          ]),
          _: 1
        }),
        r("div", zn, [
          A(h(nn), {
            class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm",
            onChange: u[0] || (u[0] = (d) => o.value = d.target.value),
            "display-value": (d) => d == null ? void 0 : d.name
          }, null, 8, ["display-value"]),
          A(h(an), { class: "po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-rounded-r-md po-px-2 focus:po-outline-none" }, {
            default: F(() => [
              A(h(Da), {
                class: "po-h-5 po-w-5 po-text-slate-400",
                "aria-hidden": "true"
              })
            ]),
            _: 1
          }),
          h(n).length > 0 ? (i(), K(h(sn), {
            key: 0,
            class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
          }, {
            default: F(() => [
              (i(!0), p(I, null, Y(h(n), (d) => (i(), K(h(rn), {
                key: d.id,
                value: d,
                as: "template"
              }, {
                default: F(({ active: f, selected: m }) => [
                  r("li", {
                    class: G(["po-relative po-cursor-default po-select-none po-py-2 po-pl-3 po-pr-9", f ? "po-bg-mpao-lightblue po-text-white" : "po-text-slate-900"])
                  }, [
                    r("span", {
                      class: G(["po-block po-truncate", m && "po-font-semibold"])
                    }, x(d.name), 3),
                    m ? (i(), p("span", {
                      key: 0,
                      class: G(["po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-pr-4", f ? "po-text-white" : "po-text-mpao-lightblue"])
                    }, [
                      A(h(Ba), {
                        class: "po-h-5 po-w-5",
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
}), qn = ["disabled", "aria-disabled"], Un = ["value", "disabled", "aria-disabled"], Gn = ["href"], Wn = {
  name: "PoButton"
}, Kn = /* @__PURE__ */ Object.assign(Wn, {
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
    const t = e, l = "po-rounded-lg po-transition-colors po-duration-100 po-ease-in-out po-cursor-pointer disabled:po-bg-slate-400 disabled:po-cursor-default disabled:po-hover:bg-slate-400", o = g(() => {
      switch (t.size) {
        case "sm":
          return "po-px-2 po-py-1 po-text-xs";
        case "md":
          return "po-px-4 po-py-2 po-text-sm";
        case "lg":
          return "po-px-5 po-py-3 po-text-normal";
      }
    }), a = g(() => t.overrideColors ? "" : "po-bg-mpao-lightblue hover:po-bg-mpao-blue focus:po-bg-mpao-blue po-text-slate-50");
    return (n, s) => (i(), p(I, null, [
      e.type == "button" ? (i(), p("button", xe({
        key: 0,
        class: [l, h(o), h(a)],
        disabled: e.disabled,
        "aria-disabled": e.disabled
      }, n.$attrs), [
        se(n.$slots, "label", {}, () => [
          ve(x(e.label), 1)
        ])
      ], 16, qn)) : C("", !0),
      e.type == "submit" ? (i(), p("input", xe({
        key: 1,
        type: "submit",
        class: [l, h(o), h(a)],
        value: e.label,
        disabled: e.disabled,
        "aria-disabled": e.disabled
      }, n.$attrs), null, 16, Un)) : C("", !0),
      e.type == "link" ? (i(), p("a", xe({
        key: 2,
        href: e.to,
        class: [l, h(o), h(a)]
      }, n.$attrs), x(e.label), 17, Gn)) : C("", !0)
    ], 64));
  }
}), Yn = /* @__PURE__ */ r("div", { class: "po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity" }, null, -1), Qn = { class: "po-fixed po-z-10 po-inset-0 po-overflow-y-auto" }, Jn = { class: "po-flex po-items-center po-justify-center po-min-h-screen po-pt-4 po-px-4 po-pb-20 po-text-center sm:po-block sm:po-p-0" }, Xn = /* @__PURE__ */ r("span", {
  class: "po-hidden sm:po-inline-block sm:po-align-middle sm:po-h-screen",
  "aria-hidden": "true"
}, "​", -1), Zn = { class: "po-flex po-items-center po-bg-mpao-lightblue po-rounded-t-xl po-p-5" }, es = { class: "po-grow po-text-md po-font-bold po-text-sky-50" }, ts = { class: "po-shrink-0" }, os = { class: "po-p-5" }, ls = {
  name: "PoModal"
}, Ur = /* @__PURE__ */ Object.assign(ls, {
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
    const t = e, { show: l } = Ye(t), o = w(!1);
    return Z(l, () => {
      o.value = !1, setTimeout(() => {
        o.value = !0;
      }, 100);
    }), (a, n) => (i(), p("div", null, [
      e.openBtnLabel.length > 0 ? (i(), K(h(Kn), {
        key: 0,
        label: e.openBtnLabel,
        onClick: n[0] || (n[0] = (s) => o.value = !0)
      }, null, 8, ["label"])) : C("", !0),
      A(h(nt), {
        as: "template",
        show: o.value
      }, {
        default: F(() => [
          A(h(It), {
            as: "div",
            class: "po-relative po-z-50",
            onClose: n[2] || (n[2] = (s) => o.value = !1)
          }, {
            default: F(() => [
              A(h(je), {
                as: "template",
                enter: "po-ease-out po-duration-300",
                "enter-from": "po-opacity-0",
                "enter-to": "po-opacity-100",
                leave: "po-ease-in po-duration-200",
                "leave-from": "po-opacity-100",
                "leave-to": "po-opacity-0"
              }, {
                default: F(() => [
                  Yn
                ]),
                _: 1
              }),
              r("div", Qn, [
                r("div", Jn, [
                  Xn,
                  A(h(je), {
                    as: "template",
                    enter: "po-ease-out po-duration-300",
                    "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                    "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                    leave: "po-ease-in po-duration-200",
                    "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                    "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                  }, {
                    default: F(() => [
                      A(h(Nt), { class: "po-relative po-inline-block po-align-bottom po-bg-white po-rounded-xl po-text-left po-shadow-xl po-transform po-transition-all sm:po-align-middle sm:po-max-w-xl po-w-full" }, {
                        default: F(() => [
                          r("div", Zn, [
                            r("h3", es, x(e.modalTitle), 1),
                            r("div", ts, [
                              r("span", {
                                role: "button",
                                class: "po-block",
                                onClick: n[1] || (n[1] = (s) => o.value = !1)
                              }, [
                                A(h(ht), { class: "po-w-5 po-stroke-sky-200 hover:po-stroke-mpao-orange po-transition-colors po-duration-150 po-ease-in-out" })
                              ])
                            ])
                          ]),
                          r("div", os, [
                            se(a.$slots, "content")
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
}, Gr = /* @__PURE__ */ Object.assign(ns, {
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
    return (o, a) => (i(), K(h(Tn), {
      as: "div",
      class: "po-flex po-items-center"
    }, {
      default: F(() => [
        A(h(Rn), {
          modelValue: l.value,
          "onUpdate:modelValue": a[0] || (a[0] = (n) => l.value = n),
          onClick: a[1] || (a[1] = (n) => o.$emit("update:modelValue", !l.value)),
          class: G([l.value ? "po-bg-mpao-lightblue" : "po-bg-slate-200", "po-relative po-inline-flex po-h-6 po-w-11 po-flex-shrink-0 po-cursor-pointer po-rounded-full po-border-2 po-border-transparent po-transition-colors po-duration-200 po-ease-in-out focus:po-outline-none focus:po-ring-2 focus:po-ring-mpao-lightblue focus:po-ring-offset-2"])
        }, {
          default: F(() => [
            r("span", {
              "aria-hidden": "true",
              class: G([l.value ? "po-translate-x-5" : "po-translate-x-0", "po-pointer-events-none po-inline-block po-h-5 po-w-5 po-transform po-rounded-full po-bg-white po-shadow po-ring-0 po-transition po-duration-200 po-ease-in-out"])
            }, null, 2)
          ]),
          _: 1
        }, 8, ["modelValue", "class"]),
        A(h(jn), {
          as: "span",
          class: "po-ml-3"
        }, {
          default: F(() => [
            r("span", as, x(e.label), 1)
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), ss = { class: "po-pt-1 po-space-y-1 po-border-r-2 po-border-slate-200 po-relative" }, rs = ["onClick"], is = {
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
    return (t, l) => (i(), p("ul", ss, [
      (i(!0), p(I, null, Y(e.menuItems, (o) => (i(), p("li", null, [
        r("span", {
          onClick: (a) => t.$emit("link-click", o.link),
          role: "button",
          class: G(["po-relative po-cursor-pointer -po-right-[0.15rem] po-py-1 po-border-r-2 hover:po-border-mpao-lightblue po-transition-colors po-duration-200 po-ease-in-out po-flex po-items-center po-space-x-2", { "po-border-mpao-lightblue po-text-sm po-text-mpao-lightblue": o.link == e.currPageRoute }, { "po-border-slate-200 po-text-sm po-text-slate-600": o.link !== e.currPageRoute }])
        }, [
          (i(), K(Ce(o.icon), { class: "po-w-4 po-h-4 po-stroke-current" })),
          r("span", null, x(o.label), 1)
        ], 10, rs)
      ]))), 256))
    ]));
  }
}), us = { class: "po-relative po-flex po-items-start" }, ps = { class: "po-flex po-h-5 po-items-center" }, ds = ["name", "id", "checked", "placeholder", "disabled", "required", "aria-describedby"], cs = { class: "po-ml-3 po-text-sm" }, fs = ["for"], vs = ["id"], ms = { class: "po-sr-only" }, bs = ["id"], hs = {
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
    return (t, l) => (i(), p("div", us, [
      r("div", ps, [
        r("input", xe({
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
        }, x(e.label), 9, fs),
        e.message ? (i(), p("span", {
          key: 0,
          id: `${e.id}-description`,
          class: "po-text-slate-500 po-cursor-default"
        }, [
          r("span", ms, x(e.label), 1),
          ve(" " + x(e.message), 1)
        ], 8, vs)) : C("", !0)
      ]),
      e.errorMessage !== null ? (i(), p("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, x(e.errorMessage), 9, bs)) : C("", !0)
    ]));
  }
}), gs = { class: "po-relative po-pt-5" }, ys = ["name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], xs = ["for"], ws = ["title"], $s = ["id"], ks = ["id"], _s = {
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
    return (t, l) => (i(), p("div", gs, [
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
        onInput: l[0] || (l[0] = (o) => t.$emit("update:modelValue", o.target.value)),
        class: "po-mt-1 po-peer po-px-3 po-py-2 po-block po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-border-slate-300 po-bg-white focus:po-border-mpao-lightblue focus:po-ring-0 invalid:po-border-red-400 invalid:po-focus:border-red-600 invalid:focus:po-ring-red-600 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default"
      }), null, 16, ys),
      r("label", {
        for: e.id,
        class: "po-absolute po-top-0 po-text-sm po-font-medium po-text-slate-700 peer-focus:po-text-mpao-lightblue peer-invalid:po-text-red-500 peer-invalid:po-peer-focus:text-red-600 po-flex po-items-center po-space-x-1"
      }, [
        r("span", null, x(e.label), 1),
        e.info !== null ? (i(), p("abbr", {
          key: 0,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          A(h(gt))
        ], 8, ws)) : C("", !0)
      ], 8, xs),
      e.message !== null ? (i(), p("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, x(e.message), 9, $s)) : C("", !0),
      e.errorMessage !== null ? (i(), p("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, x(e.errorMessage), 9, ks)) : C("", !0)
    ]));
  }
}), Ss = (e, t) => {
  const l = e.__vccOpts || e;
  for (const [o, a] of t)
    l[o] = a;
  return l;
}, Ps = {
  name: "PoFooter"
}, Os = /* @__PURE__ */ eo('<div class="po-p-10 po-pb-5"><div class="po-flex po-space-x-2 po-mt-5 po-justify-end"><img class="po-opacity-30 hover:po-opacity-100 po-transition-opacity po-duration-200 po-ease-in-out po-h-10 po-mr-2" src="https://pension.gov.mv/asset/image/enlgish_website_logo.svg" alt="Pension Office logo"><img class="po-opacity-30 hover:po-opacity-100 po-transition-opacity po-duration-200 po-ease-in-out po-h-10" src="https://pension.gov.mv/asset/image/iso_logo.jpg" alt=""><img class="po-opacity-30 hover:po-opacity-100 po-transition-opacity po-duration-200 po-ease-in-out po-h-10" src="https://pension.gov.mv/asset/image/en-ccc-2020-issa.png" alt=""></div></div><div aria-live="assertive" class="po-pointer-events-none po-fixed po-inset-0 po-flex po-items-start po-px-4 po-py-6 sm:po-p-6 po-z-50"><div class="po-flex po-w-full po-flex-col po-items-end po-space-y-4 sm:po-items-end po-pt-[55px]" id="po-notifications-alert"></div></div>', 2), Cs = [
  Os
];
function Es(e, t, l, o, a, n) {
  return i(), p("div", null, Cs);
}
const Qr = /* @__PURE__ */ Ss(Ps, [["render", Es]]), As = {
  key: 0,
  class: "po-flex po-items-start po-space-x-4 po-p-5 po-bg-red-100 po-rounded-md po-mt-5"
}, Ts = { class: "po-pt-1" }, Rs = { class: "po-text-base po-font-medium po-text-red-700" }, js = { class: "po-text-sm po-text-red-800 po-list-disc po-ml-5 po-mt-2" }, Ls = {
  key: 1,
  class: "po-flex po-items-start po-space-x-4 po-p-5 po-bg-green-100 po-rounded-md po-mt-5"
}, Bs = { class: "po-pt-1" }, Ds = { class: "po-text-base po-font-medium po-text-green-700" }, Fs = {
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
    return (t, l) => e.isError ? (i(), p("div", As, [
      A(h(fo), { class: "po-w-8 po-stroke-red-600" }),
      r("div", Ts, [
        r("span", Rs, x(e.message), 1),
        r("ul", js, [
          (i(!0), p(I, null, Y(e.errorList, (o) => (i(), p("li", null, x(o), 1))), 256))
        ])
      ])
    ])) : (i(), p("div", Ls, [
      A(h(uo), { class: "po-w-8 po-stroke-green-600" }),
      r("div", Bs, [
        r("span", Ds, x(e.message), 1)
      ])
    ]));
  }
}), Is = {
  key: 0,
  class: "po-mt-1 po-flex po-space-x-3 po-flex-wrap"
}, Ns = { class: "po-flex po-flex-1" }, Vs = { class: "po-flex po-flex-col" }, Ms = {
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
    const o = w(e.preSelected);
    return Z(o, () => {
      t("update:modelValue", o.value);
    }), (a, n) => (i(), K(h(On), {
      modelValue: o.value,
      "onUpdate:modelValue": n[0] || (n[0] = (s) => o.value = s)
    }, {
      default: F(() => [
        A(h(vt), { class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700" }, {
          default: F(() => [
            ve(x(e.label), 1)
          ]),
          _: 1
        }),
        e.options !== null ? (i(), p("div", Is, [
          (i(!0), p(I, null, Y(e.options, (s) => (i(), K(h(En), {
            as: "template",
            key: s.id,
            value: s
          }, {
            default: F(({ checked: u, active: d }) => [
              r("div", {
                class: G(["po-transition-colors po-duration-100 po-ease-out", u ? "po-border-transparent" : "po-border-gray-300 hover:po-border-mpao-lightblue", d ? "po-border-mpao-lightblue po-ring-1 po-ring-mpao-lightblue" : "", "po-mb-3 po-relative po-flex po-cursor-pointer po-rounded-lg po-border po-bg-white po-px-3 po-py-2 po-shadow-sm focus:po-outline-none"])
              }, [
                r("span", Ns, [
                  r("span", Vs, [
                    A(h(vt), {
                      as: "span",
                      class: "po-block po-text-sm po-font-medium po-text-gray-900"
                    }, {
                      default: F(() => [
                        ve(x(s.title), 1)
                      ]),
                      _: 2
                    }, 1024),
                    s.description ? (i(), K(h(An), {
                      key: 0,
                      as: "span",
                      class: "po-mt-1 po-flex po-items-center po-text-sm po-text-gray-500"
                    }, {
                      default: F(() => [
                        ve(x(s.description), 1)
                      ]),
                      _: 2
                    }, 1024)) : C("", !0)
                  ])
                ]),
                A(h(La), {
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
        ])) : C("", !0)
      ]),
      _: 1
    }, 8, ["modelValue"]));
  }
}), zs = { class: "po-bg-white po-relative po-group focus-within:po-ring-2 focus-within:po-ring-inset focus-within:po-ring-indigo-500" }, Hs = { class: "po-block po-p-4 po-transition-colors po-duration-75 po-ease-linear" }, qs = { class: "po-flex po-items-start po-space-x-2" }, Us = { class: "po-flex po-items-start po-space-x-1" }, Gs = { class: "po-block po-text-2xl po-font-light po-text-slate-600" }, Ws = {
  key: 0,
  class: "po-text-sm po-text-green-500 po-font-medium po-pt-1"
}, Ks = { class: "po-text-sm po-tracking-wide po-text-slate-500" }, Ys = {
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
                (i(), K(Ce(o.icon), { class: "po-w-4 po-h-4" }))
              ], 2)
            ]),
            r("div", null, [
              r("div", Us, [
                r("span", Gs, x(o.value), 1),
                o.diff ? (i(), p("span", Ws, x(o.diff), 1)) : C("", !0)
              ]),
              r("h4", Ks, x(o.label), 1)
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
    return (t, l) => (i(), p("li", {
      class: G(["po-flex po-px-5", { "po-justify-end po-items-end po-flex-col": e.item.type === "first" }])
    }, [
      e.item.type !== "message" ? (i(), p("div", Qs, [
        e.item.type !== "first" && e.item.avatar !== "" ? (i(), p("div", {
          key: 0,
          class: "po-shrink-0 po-w-8 po-h-8 po-rounded-full po-p-1 po-bg-contain po-bg-slate-100",
          style: to({ "background-image": `url(${e.item.avatar})` })
        }, null, 4)) : C("", !0),
        r("div", {
          class: G([{ "po-pt-1": e.item.type !== "first" }, { "po-flex po-justify-end po-items-end po-flex-col": e.item.type === "first" }])
        }, [
          r("span", Js, [
            e.item.type === "first" ? (i(), p("time", {
              key: 0,
              datetime: e.item.time,
              class: "po-text-xs po-text-slate-400"
            }, x(e.item.time_human), 9, Xs)) : C("", !0),
            r("span", Zs, x(e.item.name), 1),
            e.item.type === "second" ? (i(), p("time", {
              key: 1,
              datetime: e.item.time,
              class: "po-text-xs po-text-slate-400"
            }, x(e.item.time_human), 9, er)) : C("", !0)
          ]),
          r("div", {
            class: G(["po-mt-2 po-space-y-1", { "po-flex po-justify-end po-items-end po-flex-col": e.item.type === "first" }])
          }, [
            se(t.$slots, "message", {}, () => [
              (i(!0), p(I, null, Y(e.item.message, (o) => (i(), p("div", tr, [
                r("p", {
                  class: G(["po-text-sm po-rounded-xl po-px-4 po-py-2", { "po-bg-slate-100 po-text-slate-600": e.item.type !== "first" }, { "po-bg-mpao-lightblue po-text-sky-50": e.item.type === "first" }])
                }, x(o), 3)
              ]))), 256))
            ]),
            r("div", or, [
              (i(!0), p(I, null, Y(e.item.actions, (o) => (i(), p("button", {
                onClick: (a) => t.$emit("button-click", o.label),
                class: "po-appearance-none po-border po-border-mpao-lightblue po-bg-white hover:po-bg-mpao-lightblue po-px-3 po-py-1 po-mb-2 po-mr-2 po-rounded-lg po-text-slate-500 hover:po-text-sky-100 po-transition-colors po-duration-150 po-ease-in-out po-text-sm po-ring-0 po-outline-none"
              }, x(o.label), 9, lr))), 256))
            ])
          ], 2)
        ], 2)
      ])) : C("", !0),
      e.item.type === "message" ? (i(), p("div", ar, [
        (i(!0), p(I, null, Y(e.item.message, (o) => (i(), p("p", nr, [
          ve(x(o) + " ", 1),
          sr,
          ve(),
          r("time", {
            datetime: e.item.time,
            class: "po-text-xs po-text-slate-400 po-inline-block"
          }, x(e.item.time_human), 9, rr)
        ]))), 256))
      ])) : C("", !0)
    ], 2));
  }
}), ur = {
  key: 0,
  class: "po-pointer-events-auto po-w-full po-max-w-sm po-overflow-hidden po-rounded-lg po-bg-mpao-lightblue po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5"
}, pr = { class: "po-p-4" }, dr = { class: "po-flex po-items-start" }, cr = { class: "po-flex-shrink-0" }, fr = { class: "po-ml-3 po-w-0 po-flex-1 po-pt-0.5" }, vr = { class: "po-text-sm po-font-medium po-text-sky-100" }, mr = { class: "po-mt-1 po-text-sm po-text-sky-300" }, br = { class: "po-mt-3 po-flex po-space-x-4" }, hr = { class: "po-ml-4 po-flex po-flex-shrink-0" }, gr = /* @__PURE__ */ r("span", { class: "po-sr-only" }, "Close", -1), yr = {
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
    const t = e, { show: l } = Ye(t), o = w(!1);
    Z(l, () => {
      o.value = !1, setTimeout(() => {
        o.value = !0;
      }, 100);
    });
    const a = w(!1);
    return Z(o, () => {
      a.value = !1, setTimeout(() => {
        a.value = !0;
      }, 200);
    }), (n, s) => o.value ? (i(), K(bt, {
      key: 0,
      to: "#po-notifications-alert"
    }, [
      A(oo, {
        "enter-active-class": "po-transform po-ease-out po-duration-300 po-transition",
        "enter-from-class": "po-translate-y-2 po-opacity-0 sm:po-translate-y-0 sm:po-translate-x-2",
        "enter-to-class": "po-translate-y-0 po-opacity-100 sm:po-translate-x-0",
        "leave-active-class": "po-transition po-ease-in po-duration-100",
        "leave-from-class": "po-opacity-100",
        "leave-to-class": "po-opacity-0"
      }, {
        default: F(() => [
          a.value ? (i(), p("div", ur, [
            r("div", pr, [
              r("div", dr, [
                r("div", cr, [
                  se(n.$slots, "icon")
                ]),
                r("div", fr, [
                  r("p", vr, x(e.label), 1),
                  r("p", mr, x(e.text), 1),
                  r("div", br, [
                    r("button", {
                      onClick: s[0] || (s[0] = (u) => n.$emit("button-click", e.buttonLabel)),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-100 hover:po-text-sky-200 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, x(e.buttonLabel), 1),
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
                    A(h(Ia), {
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
}), xr = /* @__PURE__ */ r("div", { class: "po-fixed po-inset-0" }, null, -1), wr = { class: "po-fixed po-inset-0 po-overflow-hidden" }, $r = { class: "po-absolute po-inset-0 po-overflow-hidden" }, kr = { class: "po-pointer-events-none po-fixed po-inset-y-0 po-right-0 po-flex po-max-w-full po-pl-10" }, _r = { class: "po-flex po-h-full po-flex-col po-overflow-y-scroll po-bg-white po-shadow-xl" }, Sr = { class: "po-bg-slate-50 po-py-6 po-px-4 sm:po-px-6" }, Pr = { class: "po-flex po-items-center po-justify-between" }, Or = { class: "po-ml-3 po-flex po-h-7 po-items-center" }, Cr = /* @__PURE__ */ r("span", { class: "po-sr-only" }, "Close panel", -1), Er = {
  key: 0,
  class: "po-mt-1"
}, Ar = { class: "po-text-sm po-text-slate-500" }, Tr = { class: "po-relative po-flex-1 po-py-6 po-px-4 sm:po-px-6" }, Rr = {
  name: "PoSlideover"
}, oi = /* @__PURE__ */ Object.assign(Rr, {
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
    const t = e, { show: l } = Ye(t), o = w(!1);
    return Z(l, () => {
      o.value = !1, setTimeout(() => {
        o.value = !0;
      }, 100);
    }), (a, n) => (i(), K(h(nt), {
      as: "template",
      show: o.value
    }, {
      default: F(() => [
        A(h(It), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: n[1] || (n[1] = (s) => o.value = !1)
        }, {
          default: F(() => [
            xr,
            r("div", wr, [
              r("div", $r, [
                r("div", kr, [
                  A(h(je), {
                    as: "template",
                    enter: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "enter-from": "po-translate-x-full",
                    "enter-to": "po-translate-x-0",
                    leave: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "leave-from": "po-translate-x-0",
                    "leave-to": "po-translate-x-full"
                  }, {
                    default: F(() => [
                      A(h(Nt), { class: "po-pointer-events-auto po-w-screen po-max-w-lg" }, {
                        default: F(() => [
                          r("div", _r, [
                            r("div", Sr, [
                              r("div", Pr, [
                                A(h(Sn), { class: "po-text-lg po-font-medium po-text-slate-600" }, {
                                  default: F(() => [
                                    ve(x(e.label), 1)
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
                                    A(h(ht), {
                                      class: "po-h-6 po-w-6",
                                      "aria-hidden": "true"
                                    })
                                  ])
                                ])
                              ]),
                              e.description ? (i(), p("div", Er, [
                                r("p", Ar, x(e.description), 1)
                              ])) : C("", !0)
                            ]),
                            r("div", Tr, [
                              se(a.$slots, "content")
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
  Eo as PoAppIcon,
  Go as PoAppTray,
  Kn as PoButton,
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
  rl as PoNotificationHub,
  Nr as PoPageTitle,
  la as PoPagination,
  Ol as PoProfileSwitcher,
  Xr as PoRadioInput,
  Lo as PoSearchBar,
  Wr as PoSectionMenu,
  qr as PoSelectField,
  Br as PoSidebarDrawer,
  oi as PoSlideover,
  Zr as PoStatsBlock,
  Vr as PoTable,
  Yr as PoTextarea,
  Gr as PoToggle,
  Lr as PoTopBar
};
