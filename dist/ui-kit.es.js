import { openBlock as p, createElementBlock as c, createElementVNode as s, createVNode as _, unref as g, withCtx as T, renderSlot as X, createBlock as F, resolveDynamicComponent as de, createCommentVNode as w, computed as C, toDisplayString as y, ref as $, onMounted as K, onUnmounted as ae, withDirectives as Qo, isRef as el, vModelText as tl, cloneVNode as ol, h as Z, Fragment as I, inject as Q, provide as te, watchEffect as J, defineComponent as H, toRaw as U, watch as ne, nextTick as $e, Teleport as uo, reactive as ll, shallowRef as nl, normalizeClass as j, Transition as Te, renderList as W, withModifiers as me, mergeProps as Ee, createTextVNode as se, toRefs as Ie, normalizeProps as qt, guardReactiveProps as Ut, normalizeStyle as al, onBeforeUnmount as sl, createStaticVNode as rl } from "vue";
function il(e, t) {
  return p(), c("svg", {
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
function pl(e, t) {
  return p(), c("svg", {
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
function ul(e, t) {
  return p(), c("svg", {
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
function cl(e, t) {
  return p(), c("svg", {
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
function dl(e, t) {
  return p(), c("svg", {
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
function fl(e, t) {
  return p(), c("svg", {
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
function vl(e, t) {
  return p(), c("svg", {
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
function ml(e, t) {
  return p(), c("svg", {
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
function hl(e, t) {
  return p(), c("svg", {
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
      d: "M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
    })
  ]);
}
function bl(e, t) {
  return p(), c("svg", {
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
function gl(e, t) {
  return p(), c("svg", {
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
function yl(e, t) {
  return p(), c("svg", {
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
function xl(e, t) {
  return p(), c("svg", {
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
      d: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
    })
  ]);
}
function ht(e, t) {
  return p(), c("svg", {
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
function Vl(e, t) {
  return p(), c("svg", {
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
function wl(e, t) {
  return p(), c("svg", {
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
function _t(e, t) {
  return p(), c("svg", {
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
function co(e, t) {
  return p(), c("svg", {
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
function $l(e, t) {
  return p(), c("svg", {
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
function kl(e, t) {
  return p(), c("svg", {
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
      d: "M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
    })
  ]);
}
function _l(e, t) {
  return p(), c("svg", {
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
      d: "M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
    })
  ]);
}
function Cl(e, t) {
  return p(), c("svg", {
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
function Sl(e, t) {
  return p(), c("svg", {
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
function Gt(e, t) {
  return p(), c("svg", {
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
function fo(e, t) {
  return p(), c("svg", {
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
const El = { class: "po-bg-mpao-blue po-fixed po-top-0 po-w-full po-z-50 po-flex" }, Ol = { class: "po-shrink-0 po-px-3 po-pt-3" }, Pl = {
  for: "sidebar-drawer-toggle",
  role: "button",
  class: "genie-effect po-flex po-items-center po-justify-center po-bg-[#2e5266] po-rounded-full po-w-10 po-h-10 po-select-none po-text-slate-100"
}, Nl = { class: "po-mx-auto po-max-w-full po-pr-4 po-grow sm:po-pr-4" }, Ll = { class: "po-flex po-h-16 po-items-center po-justify-between po-space-x-12" }, Dl = { class: "po-flex po-items-center po-space-x-3" }, Tl = {
  key: 0,
  class: "po-block po-w-6 po-text-slate-100 md:po-hidden",
  role: "button"
}, Al = {
  name: "PoTopBar"
}, Td = /* @__PURE__ */ Object.assign(Al, {
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
     * App Icon
     */
    appIcon: null
  },
  emits: ["query", "profileSwitcherClick"],
  setup(e, { emit: t }) {
    function n(l) {
      t("profileSwitcherClick", l);
    }
    function o(l) {
      t("query", l);
    }
    return (l, a) => (p(), c("nav", El, [
      s("div", Ol, [
        s("label", Pl, [
          _(g(cl), { class: "po-w-6 po-fill-current" })
        ])
      ]),
      s("div", Nl, [
        s("div", Ll, [
          _(g(zl), { "app-name": e.appName }, {
            icon: T(() => [
              X(l.$slots, "appIcon", {}, () => [
                e.appIcon ? (p(), F(de(e.appIcon), { key: 0 })) : w("", !0)
              ])
            ]),
            _: 3
          }, 8, ["app-name"]),
          e.hasSearch ? (p(), F(g(Kl), {
            key: 0,
            onQuery: o
          })) : w("", !0),
          s("div", Dl, [
            e.hasSearch ? (p(), c("span", Tl, [
              _(g(_t), { class: "po-stroke-current" })
            ])) : w("", !0),
            _(g(ga), {
              notifications: e.notifications,
              "has-new-notifications": e.hasNewNotifications
            }, null, 8, ["notifications", "has-new-notifications"]),
            _(g(sa), { "app-list": e.appList }, null, 8, ["app-list"]),
            _(g(La), {
              "profile-switcher-data": e.profileSwitcherData,
              onButtonClick: n
            }, null, 8, ["profile-switcher-data"])
          ])
        ])
      ])
    ]));
  }
}), Bl = { class: "po-flex po-items-center po-justify-center po-space-x-3" }, jl = { class: "po-w-8 po-text-slate-100 app-icon" }, Rl = { class: "po-font-light po-text-lg po-text-slate-100" }, Il = { class: "po-hidden md:po-block" }, Ml = { class: "po-block md:po-hidden" }, Fl = {
  name: "PoAppIcon"
}, zl = /* @__PURE__ */ Object.assign(Fl, {
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
    const t = e, n = C(() => t.appName.match(/\b[A-Z]/g).join(""));
    return (o, l) => (p(), c("div", Bl, [
      s("div", jl, [
        X(o.$slots, "icon")
      ]),
      s("span", Rl, [
        s("span", Il, y(e.appName), 1),
        s("span", Ml, y(g(n)), 1)
      ])
    ]));
  }
}), Hl = { class: "po-flex-grow po-hidden po-relative md:po-block" }, ql = ["placeholder"], Ul = { class: "po-absolute po-inset-y-0 po-left-0 po-flex po-items-center po-pl-3 po-pointer-events-none po-transition-all po-ease-linear po-duration-100 po-text-slate-400 po-origin-center peer-hover/search:po-scale-105 peer-focus/search:po-text-slate-100" }, Gl = {
  name: "PoSearchBar"
}, Kl = /* @__PURE__ */ Object.assign(Gl, {
  props: {
    placeholder: {
      type: String,
      default: "Search"
    }
  },
  emits: ["query"],
  setup(e, { emit: t }) {
    let n = $("");
    const o = (l) => {
      l.key === "Enter" && 0 < n.value.length && t("query", n.value);
    };
    return K(() => document.addEventListener("keydown", o)), ae(() => {
      document.removeEventListener("keydown", o);
    }), (l, a) => (p(), c("div", Hl, [
      Qo(s("input", {
        "onUpdate:modelValue": a[0] || (a[0] = (r) => el(n) ? n.value = r : n = r),
        type: "text",
        id: "main-search",
        placeholder: e.placeholder,
        class: "peer/search po-bg-transparent po-border po-border-transparent po-text-slate-100 po-text-sm po-rounded-md po-ring-0 po-outline-none focus:po-outline-none focus:po-ring-0 po-transition-colors po-ease-linear po-duration-100 po-block po-w-full po-pl-10 po-p-2.5 po-appearance-none focus:po-border-slate-400 hover:po-border-slate-600"
      }, null, 8, ql), [
        [tl, g(n)]
      ]),
      s("div", Ul, [
        _(g(_t), { class: "po-w-5 po-h-5 po-stroke-current" })
      ])
    ]));
  }
});
function G(e, t, ...n) {
  if (e in t) {
    let l = t[e];
    return typeof l == "function" ? l(...n) : l;
  }
  let o = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((l) => `"${l}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(o, G), o;
}
var ie = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(ie || {}), ke = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(ke || {});
function q({ visible: e = !0, features: t = 0, ourProps: n, theirProps: o, ...l }) {
  var a;
  let r = Wl(o, n), i = Object.assign(l, { props: r });
  if (e || t & 2 && r.static)
    return ct(i);
  if (t & 1) {
    let u = (a = r.unmount) == null || a ? 0 : 1;
    return G(u, { [0]() {
      return null;
    }, [1]() {
      return ct({ ...l, props: { ...r, hidden: !0, style: { display: "none" } } });
    } });
  }
  return ct(i);
}
function ct({ props: e, attrs: t, slots: n, slot: o, name: l }) {
  var a;
  let { as: r, ...i } = Ae(e, ["unmount", "static"]), u = (a = n.default) == null ? void 0 : a.call(n, o), d = {};
  if (o) {
    let v = !1, m = [];
    for (let [b, x] of Object.entries(o))
      typeof x == "boolean" && (v = !0), x === !0 && m.push(b);
    v && (d["data-headlessui-state"] = m.join(" "));
  }
  if (r === "template") {
    if (u = vo(u ?? []), Object.keys(i).length > 0 || Object.keys(t).length > 0) {
      let [v, ...m] = u ?? [];
      if (!Zl(v) || m.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${l} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(i).concat(Object.keys(t)).sort((b, x) => b.localeCompare(x)).map((b) => `  - ${b}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((b) => `  - ${b}`).join(`
`)].join(`
`));
      return ol(v, Object.assign({}, i, d));
    }
    return Array.isArray(u) && u.length === 1 ? u[0] : u;
  }
  return Z(r, Object.assign({}, i, d), { default: () => u });
}
function vo(e) {
  return e.flatMap((t) => t.type === I ? vo(t.children) : [t]);
}
function Wl(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, n = {};
  for (let o of e)
    for (let l in o)
      l.startsWith("on") && typeof o[l] == "function" ? (n[l] != null || (n[l] = []), n[l].push(o[l])) : t[l] = o[l];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(n).map((o) => [o, void 0])));
  for (let o in n)
    Object.assign(t, { [o](l, ...a) {
      let r = n[o];
      for (let i of r) {
        if (l instanceof Event && l.defaultPrevented)
          return;
        i(l, ...a);
      }
    } });
  return t;
}
function Ct(e) {
  let t = Object.assign({}, e);
  for (let n in t)
    t[n] === void 0 && delete t[n];
  return t;
}
function Ae(e, t = []) {
  let n = Object.assign({}, e);
  for (let o of t)
    o in n && delete n[o];
  return n;
}
function Zl(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Yl = 0;
function Jl() {
  return ++Yl;
}
function Y() {
  return Jl();
}
var M = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(M || {});
function Xl(e) {
  throw new Error("Unexpected object: " + e);
}
var oe = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(oe || {});
function Ql(e, t) {
  let n = t.resolveItems();
  if (n.length <= 0)
    return null;
  let o = t.resolveActiveIndex(), l = o ?? -1, a = (() => {
    switch (e.focus) {
      case 0:
        return n.findIndex((r) => !t.resolveDisabled(r));
      case 1: {
        let r = n.slice().reverse().findIndex((i, u, d) => l !== -1 && d.length - u - 1 >= l ? !1 : !t.resolveDisabled(i));
        return r === -1 ? r : n.length - 1 - r;
      }
      case 2:
        return n.findIndex((r, i) => i <= l ? !1 : !t.resolveDisabled(r));
      case 3: {
        let r = n.slice().reverse().findIndex((i) => !t.resolveDisabled(i));
        return r === -1 ? r : n.length - 1 - r;
      }
      case 4:
        return n.findIndex((r) => t.resolveId(r) === e.id);
      case 5:
        return null;
      default:
        Xl(e);
    }
  })();
  return a === -1 ? o : a;
}
function S(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let mo = Symbol("Context");
var le = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(le || {});
function en() {
  return Oe() !== null;
}
function Oe() {
  return Q(mo, null);
}
function Xe(e) {
  te(mo, e);
}
function Kt(e, t) {
  if (e)
    return e;
  let n = t ?? "button";
  if (typeof n == "string" && n.toLowerCase() === "button")
    return "button";
}
function Qe(e, t) {
  let n = $(Kt(e.value.type, e.value.as));
  return K(() => {
    n.value = Kt(e.value.type, e.value.as);
  }), J(() => {
    var o;
    n.value || !S(t) || S(t) instanceof HTMLButtonElement && !((o = S(t)) != null && o.hasAttribute("type")) && (n.value = "button");
  }), n;
}
const et = typeof window > "u" || typeof document > "u";
function re(e) {
  if (et)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = S(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
function ho({ container: e, accept: t, walk: n, enabled: o }) {
  J(() => {
    let l = e.value;
    if (!l || o !== void 0 && !o.value)
      return;
    let a = re(e);
    if (!a)
      return;
    let r = Object.assign((u) => t(u), { acceptNode: t }), i = a.createTreeWalker(l, NodeFilter.SHOW_ELEMENT, r, !1);
    for (; i.nextNode(); )
      n(i.currentNode);
  });
}
let bt = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var ee = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ee || {}), Ue = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Ue || {}), tn = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(tn || {});
function St(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(bt)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Et = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Et || {});
function bo(e, t = 0) {
  var n;
  return e === ((n = re(e)) == null ? void 0 : n.body) ? !1 : G(t, { [0]() {
    return e.matches(bt);
  }, [1]() {
    let o = e;
    for (; o !== null; ) {
      if (o.matches(bt))
        return !0;
      o = o.parentElement;
    }
    return !1;
  } });
}
function De(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let on = ["textarea", "input"].join(",");
function ln(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, on)) != null ? n : !1;
}
function Ot(e, t = (n) => n) {
  return e.slice().sort((n, o) => {
    let l = t(n), a = t(o);
    if (l === null || a === null)
      return 0;
    let r = l.compareDocumentPosition(a);
    return r & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : r & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function ce(e, t, { sorted: n = !0, relativeTo: o = null, skipElements: l = [] } = {}) {
  var a;
  let r = (a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? a : document, i = Array.isArray(e) ? n ? Ot(e) : e : St(e);
  l.length > 0 && (i = i.filter((h) => !l.includes(h))), o = o ?? r.activeElement;
  let u = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), d = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, i.indexOf(o)) - 1;
    if (t & 4)
      return Math.max(0, i.indexOf(o)) + 1;
    if (t & 8)
      return i.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), v = t & 32 ? { preventScroll: !0 } : {}, m = 0, b = i.length, x;
  do {
    if (m >= b || m + b <= 0)
      return 0;
    let h = d + m;
    if (t & 16)
      h = (h + b) % b;
    else {
      if (h < 0)
        return 3;
      if (h >= b)
        return 1;
    }
    x = i[h], x == null || x.focus(v), m += u;
  } while (x !== r.activeElement);
  return t & 6 && ln(x) && x.select(), x.hasAttribute("tabindex") || x.setAttribute("tabindex", "0"), 2;
}
function dt(e, t, n) {
  et || J((o) => {
    document.addEventListener(e, t, n), o(() => document.removeEventListener(e, t, n));
  });
}
function Pt(e, t, n = C(() => !0)) {
  function o(a, r) {
    if (!n.value || a.defaultPrevented)
      return;
    let i = r(a);
    if (i === null || !i.getRootNode().contains(i))
      return;
    let u = function d(v) {
      return typeof v == "function" ? d(v()) : Array.isArray(v) || v instanceof Set ? v : [v];
    }(e);
    for (let d of u) {
      if (d === null)
        continue;
      let v = d instanceof HTMLElement ? d : S(d);
      if (v != null && v.contains(i) || a.composed && a.composedPath().includes(v))
        return;
    }
    return !bo(i, Et.Loose) && i.tabIndex !== -1 && a.preventDefault(), t(a, i);
  }
  let l = $(null);
  dt("mousedown", (a) => {
    var r, i;
    n.value && (l.value = ((i = (r = a.composedPath) == null ? void 0 : r.call(a)) == null ? void 0 : i[0]) || a.target);
  }, !0), dt("click", (a) => {
    !l.value || (o(a, () => l.value), l.value = null);
  }, !0), dt("blur", (a) => o(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var be = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(be || {});
let xe = H({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: n }) {
  return () => {
    let { features: o, ...l } = e, a = { "aria-hidden": (o & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(o & 4) === 4 && (o & 2) !== 2 && { display: "none" } } };
    return q({ ourProps: a, theirProps: l, slot: {}, attrs: n, slots: t, name: "Hidden" });
  };
} });
function Nt(e = {}, t = null, n = []) {
  for (let [o, l] of Object.entries(e))
    yo(n, go(t, o), l);
  return n;
}
function go(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function yo(e, t, n) {
  if (Array.isArray(n))
    for (let [o, l] of n.entries())
      yo(e, go(t, o.toString()), l);
  else
    n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : Nt(n, t, e);
}
function xo(e) {
  var t;
  let n = (t = e == null ? void 0 : e.form) != null ? t : e.closest("form");
  if (n) {
    for (let o of n.elements)
      if (o.tagName === "INPUT" && o.type === "submit" || o.tagName === "BUTTON" && o.type === "submit" || o.nodeName === "INPUT" && o.type === "image") {
        o.click();
        return;
      }
  }
}
function Lt(e, t, n) {
  let o = $(n == null ? void 0 : n.value), l = C(() => e.value !== void 0);
  return [C(() => l.value ? e.value : o.value), function(a) {
    return l.value || (o.value = a), t == null ? void 0 : t(a);
  }];
}
function Wt(e) {
  return [e.screenX, e.screenY];
}
function nn() {
  let e = $([-1, -1]);
  return { wasMoved(t) {
    let n = Wt(t);
    return e.value[0] === n[0] && e.value[1] === n[1] ? !1 : (e.value = n, !0);
  }, update(t) {
    e.value = Wt(t);
  } };
}
function an(e, t) {
  return e === t;
}
var sn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(sn || {}), rn = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(rn || {}), pn = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(pn || {});
let Vo = Symbol("ComboboxContext");
function Be(e) {
  let t = Q(Vo, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Be), n;
  }
  return t;
}
let un = H({ name: "Combobox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => an }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String }, nullable: { type: Boolean, default: !1 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: n, emit: o }) {
  let l = $(1), a = $(null), r = $(null), i = $(null), u = $(null), d = $({ static: !1, hold: !1 }), v = $([]), m = $(null), b = $(1), x = $(!1);
  function h(N = (L) => L) {
    let L = m.value !== null ? v.value[m.value] : null, D = Ot(N(v.value.slice()), (A) => S(A.dataRef.domRef)), P = L ? D.indexOf(L) : null;
    return P === -1 && (P = null), { options: D, activeOptionIndex: P };
  }
  let O = C(() => e.multiple ? 1 : 0), f = C(() => e.nullable), [V, k] = Lt(C(() => e.modelValue === void 0 ? G(O.value, { [1]: [], [0]: void 0 }) : e.modelValue), (N) => o("update:modelValue", N), C(() => e.defaultValue)), E = { comboboxState: l, value: V, mode: O, compare(N, L) {
    if (typeof e.by == "string") {
      let D = e.by;
      return (N == null ? void 0 : N[D]) === (L == null ? void 0 : L[D]);
    }
    return e.by(N, L);
  }, defaultValue: C(() => e.defaultValue), nullable: f, inputRef: r, labelRef: a, buttonRef: i, optionsRef: u, disabled: C(() => e.disabled), options: v, change(N) {
    k(N);
  }, activeOptionIndex: C(() => {
    if (x.value && m.value === null && v.value.length > 0) {
      let N = v.value.findIndex((L) => !L.dataRef.disabled);
      if (N !== -1)
        return N;
    }
    return m.value;
  }), activationTrigger: b, optionsPropsRef: d, closeCombobox() {
    x.value = !1, !e.disabled && l.value !== 1 && (l.value = 1, m.value = null);
  }, openCombobox() {
    if (x.value = !0, e.disabled || l.value === 0)
      return;
    let N = v.value.findIndex((L) => {
      let D = U(L.dataRef.value);
      return G(O.value, { [0]: () => E.compare(U(E.value.value), U(D)), [1]: () => U(E.value.value).some((P) => E.compare(U(P), U(D))) });
    });
    N !== -1 && (m.value = N), l.value = 0;
  }, goToOption(N, L, D) {
    if (x.value = !1, e.disabled || u.value && !d.value.static && l.value === 1)
      return;
    let P = h();
    if (P.activeOptionIndex === null) {
      let z = P.options.findIndex((he) => !he.dataRef.disabled);
      z !== -1 && (P.activeOptionIndex = z);
    }
    let A = Ql(N === oe.Specific ? { focus: oe.Specific, id: L } : { focus: N }, { resolveItems: () => P.options, resolveActiveIndex: () => P.activeOptionIndex, resolveId: (z) => z.id, resolveDisabled: (z) => z.dataRef.disabled });
    m.value = A, b.value = D ?? 1, v.value = P.options;
  }, selectOption(N) {
    let L = v.value.find((P) => P.id === N);
    if (!L)
      return;
    let { dataRef: D } = L;
    k(G(O.value, { [0]: () => D.value, [1]: () => {
      let P = U(E.value.value).slice(), A = U(D.value), z = P.findIndex((he) => E.compare(A, U(he)));
      return z === -1 ? P.push(A) : P.splice(z, 1), P;
    } }));
  }, selectActiveOption() {
    if (E.activeOptionIndex.value === null)
      return;
    let { dataRef: N, id: L } = v.value[E.activeOptionIndex.value];
    k(G(O.value, { [0]: () => N.value, [1]: () => {
      let D = U(E.value.value).slice(), P = U(N.value), A = D.findIndex((z) => E.compare(P, U(z)));
      return A === -1 ? D.push(P) : D.splice(A, 1), D;
    } })), E.goToOption(oe.Specific, L);
  }, registerOption(N, L) {
    let D = { id: N, dataRef: L }, P = h((A) => [...A, D]);
    if (m.value === null) {
      let A = L.value.value;
      G(O.value, { [0]: () => E.compare(U(E.value.value), U(A)), [1]: () => U(E.value.value).some((z) => E.compare(U(z), U(A))) }) && (P.activeOptionIndex = P.options.indexOf(D));
    }
    v.value = P.options, m.value = P.activeOptionIndex, b.value = 1;
  }, unregisterOption(N) {
    let L = h((D) => {
      let P = D.findIndex((A) => A.id === N);
      return P !== -1 && D.splice(P, 1), D;
    });
    v.value = L.options, m.value = L.activeOptionIndex, b.value = 1;
  } };
  Pt([r, i, u], () => E.closeCombobox(), C(() => l.value === 0)), te(Vo, E), Xe(C(() => G(l.value, { [0]: le.Open, [1]: le.Closed })));
  let B = C(() => E.activeOptionIndex.value === null ? null : v.value[E.activeOptionIndex.value].dataRef.value), R = C(() => {
    var N;
    return (N = S(r)) == null ? void 0 : N.closest("form");
  });
  return K(() => {
    ne([R], () => {
      if (!R.value || e.defaultValue === void 0)
        return;
      function N() {
        E.change(e.defaultValue);
      }
      return R.value.addEventListener("reset", N), () => {
        var L;
        (L = R.value) == null || L.removeEventListener("reset", N);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: N, disabled: L, ...D } = e, P = { open: l.value === 0, disabled: L, activeIndex: E.activeOptionIndex.value, activeOption: B.value, value: V.value };
    return Z(I, [...N != null && V.value != null ? Nt({ [N]: V.value }).map(([A, z]) => Z(xe, Ct({ features: be.Hidden, key: A, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: A, value: z }))) : [], q({ theirProps: { ...n, ...Ae(D, ["modelValue", "defaultValue", "nullable", "multiple", "onUpdate:modelValue", "by"]) }, ourProps: {}, slot: P, slots: t, attrs: n, name: "Combobox" })]);
  };
} }), cn = H({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-combobox-label-${Y()}` } }, setup(e, { attrs: t, slots: n }) {
  let o = Be("ComboboxLabel");
  function l() {
    var a;
    (a = S(o.inputRef)) == null || a.focus({ preventScroll: !0 });
  }
  return () => {
    let a = { open: o.comboboxState.value === 0, disabled: o.disabled.value }, { id: r, ...i } = e, u = { id: r, ref: o.labelRef, onClick: l };
    return q({ ourProps: u, theirProps: i, slot: a, attrs: t, slots: n, name: "ComboboxLabel" });
  };
} }), dn = H({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-combobox-button-${Y()}` } }, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = Be("ComboboxButton");
  o({ el: l.buttonRef, $el: l.buttonRef });
  function a(u) {
    l.disabled.value || (l.comboboxState.value === 0 ? l.closeCombobox() : (u.preventDefault(), l.openCombobox()), $e(() => {
      var d;
      return (d = S(l.inputRef)) == null ? void 0 : d.focus({ preventScroll: !0 });
    }));
  }
  function r(u) {
    switch (u.key) {
      case M.ArrowDown:
        u.preventDefault(), u.stopPropagation(), l.comboboxState.value === 1 && l.openCombobox(), $e(() => {
          var d;
          return (d = l.inputRef.value) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        return;
      case M.ArrowUp:
        u.preventDefault(), u.stopPropagation(), l.comboboxState.value === 1 && (l.openCombobox(), $e(() => {
          l.value.value || l.goToOption(oe.Last);
        })), $e(() => {
          var d;
          return (d = l.inputRef.value) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        return;
      case M.Escape:
        if (l.comboboxState.value !== 0)
          return;
        u.preventDefault(), l.optionsRef.value && !l.optionsPropsRef.value.static && u.stopPropagation(), l.closeCombobox(), $e(() => {
          var d;
          return (d = l.inputRef.value) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        return;
    }
  }
  let i = Qe(C(() => ({ as: e.as, type: t.type })), l.buttonRef);
  return () => {
    var u, d;
    let v = { open: l.comboboxState.value === 0, disabled: l.disabled.value, value: l.value.value }, { id: m, ...b } = e, x = { ref: l.buttonRef, id: m, type: i.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (u = S(l.optionsRef)) == null ? void 0 : u.id, "aria-expanded": l.disabled.value ? void 0 : l.comboboxState.value === 0, "aria-labelledby": l.labelRef.value ? [(d = S(l.labelRef)) == null ? void 0 : d.id, m].join(" ") : void 0, disabled: l.disabled.value === !0 ? !0 : void 0, onKeydown: r, onClick: a };
    return q({ ourProps: x, theirProps: b, slot: v, attrs: t, slots: n, name: "ComboboxButton" });
  };
} }), fn = H({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: () => `headlessui-combobox-input-${Y()}` } }, emits: { change: (e) => !0 }, setup(e, { emit: t, attrs: n, slots: o, expose: l }) {
  let a = Be("ComboboxInput"), r = { value: !1 };
  l({ el: a.inputRef, $el: a.inputRef });
  let i = C(() => {
    var f;
    let V = a.value.value;
    return S(a.inputRef) ? typeof e.displayValue < "u" && V !== void 0 ? (f = e.displayValue(V)) != null ? f : "" : typeof V == "string" ? V : "" : "";
  });
  K(() => {
    ne([i, a.comboboxState], ([f, V], [k, E]) => {
      if (r.value)
        return;
      let B = S(a.inputRef);
      !B || (E === 0 && V === 1 || f !== k) && (B.value = f);
    }, { immediate: !0 });
  });
  let u = $(!1);
  function d() {
    u.value = !0;
  }
  function v() {
    setTimeout(() => {
      u.value = !1;
    });
  }
  function m(f) {
    switch (r.value = !0, f.key) {
      case M.Backspace:
      case M.Delete:
        if (a.mode.value !== 0 || !a.nullable.value)
          return;
        let V = f.currentTarget;
        requestAnimationFrame(() => {
          if (V.value === "") {
            a.change(null);
            let k = S(a.optionsRef);
            k && (k.scrollTop = 0), a.goToOption(oe.Nothing);
          }
        });
        break;
      case M.Enter:
        if (r.value = !1, a.comboboxState.value !== 0 || u.value)
          return;
        if (f.preventDefault(), f.stopPropagation(), a.activeOptionIndex.value === null) {
          a.closeCombobox();
          return;
        }
        a.selectActiveOption(), a.mode.value === 0 && a.closeCombobox();
        break;
      case M.ArrowDown:
        return r.value = !1, f.preventDefault(), f.stopPropagation(), G(a.comboboxState.value, { [0]: () => a.goToOption(oe.Next), [1]: () => a.openCombobox() });
      case M.ArrowUp:
        return r.value = !1, f.preventDefault(), f.stopPropagation(), G(a.comboboxState.value, { [0]: () => a.goToOption(oe.Previous), [1]: () => {
          a.openCombobox(), $e(() => {
            a.value.value || a.goToOption(oe.Last);
          });
        } });
      case M.Home:
        if (f.shiftKey)
          break;
        return r.value = !1, f.preventDefault(), f.stopPropagation(), a.goToOption(oe.First);
      case M.PageUp:
        return r.value = !1, f.preventDefault(), f.stopPropagation(), a.goToOption(oe.First);
      case M.End:
        if (f.shiftKey)
          break;
        return r.value = !1, f.preventDefault(), f.stopPropagation(), a.goToOption(oe.Last);
      case M.PageDown:
        return r.value = !1, f.preventDefault(), f.stopPropagation(), a.goToOption(oe.Last);
      case M.Escape:
        if (r.value = !1, a.comboboxState.value !== 0)
          return;
        f.preventDefault(), a.optionsRef.value && !a.optionsPropsRef.value.static && f.stopPropagation(), a.closeCombobox();
        break;
      case M.Tab:
        if (r.value = !1, a.comboboxState.value !== 0)
          return;
        a.mode.value === 0 && a.selectActiveOption(), a.closeCombobox();
        break;
    }
  }
  function b(f) {
    t("change", f);
  }
  function x(f) {
    a.openCombobox(), t("change", f);
  }
  function h() {
    r.value = !1;
  }
  let O = C(() => {
    var f, V, k, E;
    return (E = (k = (V = e.defaultValue) != null ? V : a.defaultValue.value !== void 0 ? (f = e.displayValue) == null ? void 0 : f.call(e, a.defaultValue.value) : null) != null ? k : a.defaultValue.value) != null ? E : "";
  });
  return () => {
    var f, V, k, E, B, R;
    let N = { open: a.comboboxState.value === 0 }, { id: L, displayValue: D, ...P } = e, A = { "aria-controls": (f = a.optionsRef.value) == null ? void 0 : f.id, "aria-expanded": a.disabled.value ? void 0 : a.comboboxState.value === 0, "aria-activedescendant": a.activeOptionIndex.value === null || (V = a.options.value[a.activeOptionIndex.value]) == null ? void 0 : V.id, "aria-multiselectable": a.mode.value === 1 ? !0 : void 0, "aria-labelledby": (B = (k = S(a.labelRef)) == null ? void 0 : k.id) != null ? B : (E = S(a.buttonRef)) == null ? void 0 : E.id, id: L, onCompositionstart: d, onCompositionend: v, onKeydown: m, onChange: b, onInput: x, onBlur: h, role: "combobox", type: (R = n.type) != null ? R : "text", tabIndex: 0, ref: a.inputRef, defaultValue: O.value };
    return q({ ourProps: A, theirProps: P, slot: N, attrs: n, slots: o, features: ie.RenderStrategy | ie.Static, name: "ComboboxInput" });
  };
} }), vn = H({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, hold: { type: [Boolean], default: !1 } }, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = Be("ComboboxOptions"), a = `headlessui-combobox-options-${Y()}`;
  o({ el: l.optionsRef, $el: l.optionsRef }), J(() => {
    l.optionsPropsRef.value.static = e.static;
  }), J(() => {
    l.optionsPropsRef.value.hold = e.hold;
  });
  let r = Oe(), i = C(() => r !== null ? r.value === le.Open : l.comboboxState.value === 0);
  return ho({ container: C(() => S(l.optionsRef)), enabled: C(() => l.comboboxState.value === 0), accept(u) {
    return u.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : u.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(u) {
    u.setAttribute("role", "none");
  } }), () => {
    var u, d, v, m;
    let b = { open: l.comboboxState.value === 0 }, x = { "aria-activedescendant": l.activeOptionIndex.value === null || (u = l.options.value[l.activeOptionIndex.value]) == null ? void 0 : u.id, "aria-labelledby": (m = (d = S(l.labelRef)) == null ? void 0 : d.id) != null ? m : (v = S(l.buttonRef)) == null ? void 0 : v.id, id: a, ref: l.optionsRef, role: "listbox" }, h = Ae(e, ["hold"]);
    return q({ ourProps: x, theirProps: h, slot: b, attrs: t, slots: n, features: ie.RenderStrategy | ie.Static, visible: i.value, name: "ComboboxOptions" });
  };
} }), mn = H({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: n, expose: o }) {
  let l = Be("ComboboxOption"), a = `headlessui-combobox-option-${Y()}`, r = $(null);
  o({ el: r, $el: r });
  let i = C(() => l.activeOptionIndex.value !== null ? l.options.value[l.activeOptionIndex.value].id === a : !1), u = C(() => G(l.mode.value, { [0]: () => l.compare(U(l.value.value), U(e.value)), [1]: () => U(l.value.value).some((f) => l.compare(U(f), U(e.value))) })), d = C(() => ({ disabled: e.disabled, value: e.value, domRef: r }));
  K(() => l.registerOption(a, d)), ae(() => l.unregisterOption(a)), J(() => {
    l.comboboxState.value === 0 && (!i.value || l.activationTrigger.value !== 0 && $e(() => {
      var f, V;
      return (V = (f = S(r)) == null ? void 0 : f.scrollIntoView) == null ? void 0 : V.call(f, { block: "nearest" });
    }));
  });
  function v(f) {
    if (e.disabled)
      return f.preventDefault();
    l.selectOption(a), l.mode.value === 0 && l.closeCombobox();
  }
  function m() {
    if (e.disabled)
      return l.goToOption(oe.Nothing);
    l.goToOption(oe.Specific, a);
  }
  let b = nn();
  function x(f) {
    b.update(f);
  }
  function h(f) {
    !b.wasMoved(f) || e.disabled || i.value || l.goToOption(oe.Specific, a, 0);
  }
  function O(f) {
    !b.wasMoved(f) || e.disabled || !i.value || l.optionsPropsRef.value.hold || l.goToOption(oe.Nothing);
  }
  return () => {
    let { disabled: f } = e, V = { active: i.value, selected: u.value, disabled: f }, k = { id: a, ref: r, role: "option", tabIndex: f === !0 ? void 0 : -1, "aria-disabled": f === !0 ? !0 : void 0, "aria-selected": u.value, disabled: void 0, onClick: v, onFocus: m, onPointerenter: x, onMouseenter: x, onPointermove: h, onMousemove: h, onPointerleave: O, onMouseleave: O };
    return q({ ourProps: k, theirProps: e, slot: V, attrs: n, slots: t, name: "ComboboxOption" });
  };
} });
function hn(e, t, n) {
  et || J((o) => {
    window.addEventListener(e, t, n), o(() => window.removeEventListener(e, t, n));
  });
}
var ve = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(ve || {});
function Dt() {
  let e = $(0);
  return hn("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Tt(e, t, n, o) {
  et || J((l) => {
    e = e ?? window, e.addEventListener(t, n, o), l(() => e.removeEventListener(t, n, o));
  });
}
function bn(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
var wo = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(wo || {});
let je = Object.assign(H({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: Object, default: $(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = $(null);
  o({ el: l, $el: l });
  let a = C(() => re(l));
  gn({ ownerDocument: a }, C(() => Boolean(e.features & 16)));
  let r = yn({ ownerDocument: a, container: l, initialFocus: C(() => e.initialFocus) }, C(() => Boolean(e.features & 2)));
  xn({ ownerDocument: a, container: l, containers: e.containers, previousActiveElement: r }, C(() => Boolean(e.features & 8)));
  let i = Dt();
  function u(b) {
    let x = S(l);
    x && ((h) => h())(() => {
      G(i.value, { [ve.Forwards]: () => ce(x, ee.First, { skipElements: [b.relatedTarget] }), [ve.Backwards]: () => ce(x, ee.Last, { skipElements: [b.relatedTarget] }) });
    });
  }
  let d = $(!1);
  function v(b) {
    b.key === "Tab" && (d.value = !0, requestAnimationFrame(() => {
      d.value = !1;
    }));
  }
  function m(b) {
    var x;
    let h = new Set((x = e.containers) == null ? void 0 : x.value);
    h.add(l);
    let O = b.relatedTarget;
    !O || O.dataset.headlessuiFocusGuard !== "true" && ($o(h, O) || (d.value ? ce(S(l), G(i.value, { [ve.Forwards]: () => ee.Next, [ve.Backwards]: () => ee.Previous }) | ee.WrapAround, { relativeTo: b.target }) : b.target instanceof HTMLElement && De(b.target)));
  }
  return () => {
    let b = {}, x = { ref: l, onKeydown: v, onFocusout: m }, { features: h, initialFocus: O, containers: f, ...V } = e;
    return Z(I, [Boolean(h & 4) && Z(xe, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: u, features: be.Focusable }), q({ ourProps: x, theirProps: { ...t, ...V }, slot: b, attrs: t, slots: n, name: "FocusTrap" }), Boolean(h & 4) && Z(xe, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: u, features: be.Focusable })]);
  };
} }), { features: wo });
function gn({ ownerDocument: e }, t) {
  let n = $(null);
  function o() {
    var a;
    n.value || (n.value = (a = e.value) == null ? void 0 : a.activeElement);
  }
  function l() {
    !n.value || (De(n.value), n.value = null);
  }
  K(() => {
    ne(t, (a, r) => {
      a !== r && (a ? o() : l());
    }, { immediate: !0 });
  }), ae(l);
}
function yn({ ownerDocument: e, container: t, initialFocus: n }, o) {
  let l = $(null), a = $(!1);
  return K(() => a.value = !0), ae(() => a.value = !1), K(() => {
    ne([t, n, o], (r, i) => {
      if (r.every((d, v) => (i == null ? void 0 : i[v]) === d) || !o.value)
        return;
      let u = S(t);
      !u || bn(() => {
        var d, v;
        if (!a.value)
          return;
        let m = S(n), b = (d = e.value) == null ? void 0 : d.activeElement;
        if (m) {
          if (m === b) {
            l.value = b;
            return;
          }
        } else if (u.contains(b)) {
          l.value = b;
          return;
        }
        m ? De(m) : ce(u, ee.First | ee.NoScroll) === Ue.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), l.value = (v = e.value) == null ? void 0 : v.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), l;
}
function xn({ ownerDocument: e, container: t, containers: n, previousActiveElement: o }, l) {
  var a;
  Tt((a = e.value) == null ? void 0 : a.defaultView, "focus", (r) => {
    if (!l.value)
      return;
    let i = new Set(n == null ? void 0 : n.value);
    i.add(t);
    let u = o.value;
    if (!u)
      return;
    let d = r.target;
    d && d instanceof HTMLElement ? $o(i, d) ? (o.value = d, De(d)) : (r.preventDefault(), r.stopPropagation(), De(u)) : De(o.value);
  }, !0);
}
function $o(e, t) {
  var n;
  for (let o of e)
    if ((n = o.value) != null && n.contains(t))
      return !0;
  return !1;
}
let Zt = "body > *", Ne = /* @__PURE__ */ new Set(), we = /* @__PURE__ */ new Map();
function Yt(e) {
  e.setAttribute("aria-hidden", "true"), e.inert = !0;
}
function Jt(e) {
  let t = we.get(e);
  !t || (t["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert);
}
function Vn(e, t = $(!0)) {
  J((n) => {
    if (!t.value || !e.value)
      return;
    let o = e.value, l = re(o);
    if (l) {
      Ne.add(o);
      for (let a of we.keys())
        a.contains(o) && (Jt(a), we.delete(a));
      l.querySelectorAll(Zt).forEach((a) => {
        if (a instanceof HTMLElement) {
          for (let r of Ne)
            if (a.contains(r))
              return;
          Ne.size === 1 && (we.set(a, { "aria-hidden": a.getAttribute("aria-hidden"), inert: a.inert }), Yt(a));
        }
      }), n(() => {
        if (Ne.delete(o), Ne.size > 0)
          l.querySelectorAll(Zt).forEach((a) => {
            if (a instanceof HTMLElement && !we.has(a)) {
              for (let r of Ne)
                if (a.contains(r))
                  return;
              we.set(a, { "aria-hidden": a.getAttribute("aria-hidden"), inert: a.inert }), Yt(a);
            }
          });
        else
          for (let a of we.keys())
            Jt(a), we.delete(a);
      });
    }
  });
}
let ko = Symbol("ForcePortalRootContext");
function wn() {
  return Q(ko, !1);
}
let gt = H({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: n }) {
  return te(ko, e.force), () => {
    let { force: o, ...l } = e;
    return q({ theirProps: l, ourProps: {}, slot: {}, slots: t, attrs: n, name: "ForcePortalRoot" });
  };
} });
function $n(e) {
  let t = re(e);
  if (!t) {
    if (e === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let n = t.getElementById("headlessui-portal-root");
  if (n)
    return n;
  let o = t.createElement("div");
  return o.setAttribute("id", "headlessui-portal-root"), t.body.appendChild(o);
}
let _o = H({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: n }) {
  let o = $(null), l = C(() => re(o)), a = wn(), r = Q(Co, null), i = $(a === !0 || r == null ? $n(o.value) : r.resolveTarget());
  return J(() => {
    a || r != null && (i.value = r.resolveTarget());
  }), ae(() => {
    var u, d;
    let v = (u = l.value) == null ? void 0 : u.getElementById("headlessui-portal-root");
    !v || i.value === v && i.value.children.length <= 0 && ((d = i.value.parentElement) == null || d.removeChild(i.value));
  }), () => {
    if (i.value === null)
      return null;
    let u = { ref: o, "data-headlessui-portal": "" };
    return Z(uo, { to: i.value }, q({ ourProps: u, theirProps: e, slot: {}, attrs: n, slots: t, name: "Portal" }));
  };
} }), Co = Symbol("PortalGroupContext"), kn = H({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: n }) {
  let o = ll({ resolveTarget() {
    return e.target;
  } });
  return te(Co, o), () => {
    let { target: l, ...a } = e;
    return q({ theirProps: a, ourProps: {}, slot: {}, attrs: t, slots: n, name: "PortalGroup" });
  };
} }), So = Symbol("StackContext");
var yt = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(yt || {});
function _n() {
  return Q(So, () => {
  });
}
function Cn({ type: e, enabled: t, element: n, onUpdate: o }) {
  let l = _n();
  function a(...r) {
    o == null || o(...r), l(...r);
  }
  K(() => {
    ne(t, (r, i) => {
      r ? a(0, e, n) : i === !0 && a(1, e, n);
    }, { immediate: !0, flush: "sync" });
  }), ae(() => {
    t.value && a(1, e, n);
  }), te(So, a);
}
let Eo = Symbol("DescriptionContext");
function Sn() {
  let e = Q(Eo, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function tt({ slot: e = $({}), name: t = "Description", props: n = {} } = {}) {
  let o = $([]);
  function l(a) {
    return o.value.push(a), () => {
      let r = o.value.indexOf(a);
      r !== -1 && o.value.splice(r, 1);
    };
  }
  return te(Eo, { register: l, slot: e, name: t, props: n }), C(() => o.value.length > 0 ? o.value.join(" ") : void 0);
}
let En = H({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${Y()}` } }, setup(e, { attrs: t, slots: n }) {
  let o = Sn();
  return K(() => ae(o.register(e.id))), () => {
    let { name: l = "Description", slot: a = $({}), props: r = {} } = o, { id: i, ...u } = e, d = { ...Object.entries(r).reduce((v, [m, b]) => Object.assign(v, { [m]: g(b) }), {}), id: i };
    return q({ ourProps: d, theirProps: u, slot: a.value, attrs: t, slots: n, name: l });
  };
} });
function At() {
  let e = [], t = [], n = { enqueue(o) {
    t.push(o);
  }, addEventListener(o, l, a, r) {
    return o.addEventListener(l, a, r), n.add(() => o.removeEventListener(l, a, r));
  }, requestAnimationFrame(...o) {
    let l = requestAnimationFrame(...o);
    n.add(() => cancelAnimationFrame(l));
  }, nextFrame(...o) {
    n.requestAnimationFrame(() => {
      n.requestAnimationFrame(...o);
    });
  }, setTimeout(...o) {
    let l = setTimeout(...o);
    n.add(() => clearTimeout(l));
  }, add(o) {
    e.push(o);
  }, dispose() {
    for (let o of e.splice(0))
      o();
  }, async workQueue() {
    for (let o of t.splice(0))
      await o();
  } };
  return n;
}
function On() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
var Pn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Pn || {});
let xt = Symbol("DialogContext");
function Me(e) {
  let t = Q(xt, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Me), n;
  }
  return t;
}
let ze = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", ot = H({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: ze }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${Y()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: n, slots: o, expose: l }) {
  var a;
  let r = $(!1);
  K(() => {
    r.value = !0;
  });
  let i = $(0), u = Oe(), d = C(() => e.open === ze && u !== null ? G(u.value, { [le.Open]: !0, [le.Closed]: !1 }) : e.open), v = $(/* @__PURE__ */ new Set()), m = $(null), b = $(null), x = C(() => re(m));
  if (l({ el: m, $el: m }), !(e.open !== ze || u !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof d.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${d.value === ze ? void 0 : e.open}`);
  let h = C(() => r.value && d.value ? 0 : 1), O = C(() => h.value === 0), f = C(() => i.value > 1), V = Q(xt, null) !== null, k = C(() => f.value ? "parent" : "leaf");
  Vn(m, C(() => f.value ? O.value : !1)), Cn({ type: "Dialog", enabled: C(() => h.value === 0), element: m, onUpdate: (L, D, P) => {
    if (D === "Dialog")
      return G(L, { [yt.Add]() {
        v.value.add(P), i.value += 1;
      }, [yt.Remove]() {
        v.value.delete(P), i.value -= 1;
      } });
  } });
  let E = tt({ name: "DialogDescription", slot: C(() => ({ open: d.value })) }), B = $(null), R = { titleId: B, panelRef: $(null), dialogState: h, setTitleId(L) {
    B.value !== L && (B.value = L);
  }, close() {
    t("close", !1);
  } };
  te(xt, R);
  function N() {
    var L, D, P;
    return [...Array.from((D = (L = x.value) == null ? void 0 : L.querySelectorAll("body > *, [data-headlessui-portal]")) != null ? D : []).filter((A) => !(!(A instanceof HTMLElement) || A.contains(S(b)) || R.panelRef.value && A.contains(R.panelRef.value))), (P = R.panelRef.value) != null ? P : m.value];
  }
  return Pt(() => N(), (L, D) => {
    R.close(), $e(() => D == null ? void 0 : D.focus());
  }, C(() => h.value === 0 && !f.value)), Tt((a = x.value) == null ? void 0 : a.defaultView, "keydown", (L) => {
    L.defaultPrevented || L.key === M.Escape && h.value === 0 && (f.value || (L.preventDefault(), L.stopPropagation(), R.close()));
  }), J((L) => {
    var D;
    if (h.value !== 0 || V)
      return;
    let P = x.value;
    if (!P)
      return;
    let A = At(), z = window.pageYOffset;
    function he(ue, pe, Ve) {
      let pt = ue.style.getPropertyValue(pe);
      return Object.assign(ue.style, { [pe]: Ve }), A.add(() => {
        Object.assign(ue.style, { [pe]: pt });
      });
    }
    let Pe = P == null ? void 0 : P.documentElement, it = ((D = P.defaultView) != null ? D : window).innerWidth - Pe.clientWidth;
    if (he(Pe, "overflow", "hidden"), it > 0) {
      let ue = Pe.clientWidth - Pe.offsetWidth, pe = it - ue;
      he(Pe, "paddingRight", `${pe}px`);
    }
    if (On()) {
      he(P.body, "marginTop", `-${z}px`), window.scrollTo(0, 0);
      let ue = null;
      A.addEventListener(P, "click", (pe) => {
        if (pe.target instanceof HTMLElement)
          try {
            let Ve = pe.target.closest("a");
            if (!Ve)
              return;
            let { hash: pt } = new URL(Ve.href), ut = P.querySelector(pt);
            ut && !N().some((Xo) => Xo.contains(ut)) && (ue = ut);
          } catch {
          }
      }, !0), A.addEventListener(P, "touchmove", (pe) => {
        pe.target instanceof HTMLElement && !N().some((Ve) => Ve.contains(pe.target)) && pe.preventDefault();
      }, { passive: !1 }), A.add(() => {
        window.scrollTo(0, window.pageYOffset + z), ue && ue.isConnected && (ue.scrollIntoView({ block: "nearest" }), ue = null);
      });
    }
    L(A.dispose);
  }), J((L) => {
    if (h.value !== 0)
      return;
    let D = S(m);
    if (!D)
      return;
    let P = new IntersectionObserver((A) => {
      for (let z of A)
        z.boundingClientRect.x === 0 && z.boundingClientRect.y === 0 && z.boundingClientRect.width === 0 && z.boundingClientRect.height === 0 && R.close();
    });
    P.observe(D), L(() => P.disconnect());
  }), () => {
    let { id: L, open: D, initialFocus: P, ...A } = e, z = { ...n, ref: m, id: L, role: "dialog", "aria-modal": h.value === 0 ? !0 : void 0, "aria-labelledby": B.value, "aria-describedby": E.value }, he = { open: h.value === 0 };
    return Z(gt, { force: !0 }, () => [Z(_o, () => Z(kn, { target: m.value }, () => Z(gt, { force: !1 }, () => Z(je, { initialFocus: P, containers: v, features: O.value ? G(k.value, { parent: je.features.RestoreFocus, leaf: je.features.All & ~je.features.FocusLock }) : je.features.None }, () => q({ ourProps: z, theirProps: A, slot: he, attrs: n, slots: o, visible: h.value === 0, features: ie.RenderStrategy | ie.Static, name: "Dialog" }))))), Z(xe, { features: be.Hidden, ref: b })]);
  };
} });
H({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${Y()}` } }, setup(e, { attrs: t, slots: n }) {
  let o = Me("DialogOverlay");
  function l(a) {
    a.target === a.currentTarget && (a.preventDefault(), a.stopPropagation(), o.close());
  }
  return () => {
    let { id: a, ...r } = e;
    return q({ ourProps: { id: a, "aria-hidden": !0, onClick: l }, theirProps: r, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogOverlay" });
  };
} });
H({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${Y()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = Me("DialogBackdrop"), a = $(null);
  return o({ el: a, $el: a }), K(() => {
    if (l.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: r, ...i } = e, u = { id: r, ref: a, "aria-hidden": !0 };
    return Z(gt, { force: !0 }, () => Z(_o, () => q({ ourProps: u, theirProps: { ...t, ...i }, slot: { open: l.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogBackdrop" })));
  };
} });
let lt = H({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${Y()}` } }, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = Me("DialogPanel");
  o({ el: l.panelRef, $el: l.panelRef });
  function a(r) {
    r.stopPropagation();
  }
  return () => {
    let { id: r, ...i } = e, u = { id: r, ref: l.panelRef, onClick: a };
    return q({ ourProps: u, theirProps: i, slot: { open: l.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogPanel" });
  };
} }), Oo = H({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${Y()}` } }, setup(e, { attrs: t, slots: n }) {
  let o = Me("DialogTitle");
  return K(() => {
    o.setTitleId(e.id), ae(() => o.setTitleId(null));
  }), () => {
    let { id: l, ...a } = e;
    return q({ ourProps: { id: l }, theirProps: a, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogTitle" });
  };
} });
var Nn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Nn || {});
let Po = Symbol("DisclosureContext");
function Bt(e) {
  let t = Q(Po, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Bt), n;
  }
  return t;
}
let No = Symbol("DisclosurePanelContext");
function Ln() {
  return Q(No, null);
}
let Dn = H({ name: "Disclosure", props: { as: { type: [Object, String], default: "template" }, defaultOpen: { type: [Boolean], default: !1 } }, setup(e, { slots: t, attrs: n }) {
  let o = $(e.defaultOpen ? 0 : 1), l = $(null), a = $(null), r = { buttonId: $(null), panelId: $(null), disclosureState: o, panel: l, button: a, toggleDisclosure() {
    o.value = G(o.value, { [0]: 1, [1]: 0 });
  }, closeDisclosure() {
    o.value !== 1 && (o.value = 1);
  }, close(i) {
    r.closeDisclosure();
    let u = (() => i ? i instanceof HTMLElement ? i : i.value instanceof HTMLElement ? S(i) : S(r.button) : S(r.button))();
    u == null || u.focus();
  } };
  return te(Po, r), Xe(C(() => G(o.value, { [0]: le.Open, [1]: le.Closed }))), () => {
    let { defaultOpen: i, ...u } = e, d = { open: o.value === 0, close: r.close };
    return q({ theirProps: u, ourProps: {}, slot: d, slots: t, attrs: n, name: "Disclosure" });
  };
} }), Tn = H({ name: "DisclosureButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-disclosure-button-${Y()}` } }, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = Bt("DisclosureButton");
  K(() => {
    l.buttonId.value = e.id;
  }), ae(() => {
    l.buttonId.value = null;
  });
  let a = Ln(), r = C(() => a === null ? !1 : a.value === l.panelId.value), i = $(null);
  o({ el: i, $el: i }), r.value || J(() => {
    l.button.value = i.value;
  });
  let u = Qe(C(() => ({ as: e.as, type: t.type })), i);
  function d() {
    var b;
    e.disabled || (r.value ? (l.toggleDisclosure(), (b = S(l.button)) == null || b.focus()) : l.toggleDisclosure());
  }
  function v(b) {
    var x;
    if (!e.disabled)
      if (r.value)
        switch (b.key) {
          case M.Space:
          case M.Enter:
            b.preventDefault(), b.stopPropagation(), l.toggleDisclosure(), (x = S(l.button)) == null || x.focus();
            break;
        }
      else
        switch (b.key) {
          case M.Space:
          case M.Enter:
            b.preventDefault(), b.stopPropagation(), l.toggleDisclosure();
            break;
        }
  }
  function m(b) {
    switch (b.key) {
      case M.Space:
        b.preventDefault();
        break;
    }
  }
  return () => {
    let b = { open: l.disclosureState.value === 0 }, { id: x, ...h } = e, O = r.value ? { ref: i, type: u.value, onClick: d, onKeydown: v } : { id: x, ref: i, type: u.value, "aria-expanded": e.disabled ? void 0 : l.disclosureState.value === 0, "aria-controls": S(l.panel) ? l.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onClick: d, onKeydown: v, onKeyup: m };
    return q({ ourProps: O, theirProps: h, slot: b, attrs: t, slots: n, name: "DisclosureButton" });
  };
} }), An = H({ name: "DisclosurePanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-disclosure-panel-${Y()}` } }, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = Bt("DisclosurePanel");
  K(() => {
    l.panelId.value = e.id;
  }), ae(() => {
    l.panelId.value = null;
  }), o({ el: l.panel, $el: l.panel }), te(No, l.panelId);
  let a = Oe(), r = C(() => a !== null ? a.value === le.Open : l.disclosureState.value === 0);
  return () => {
    let i = { open: l.disclosureState.value === 0, close: l.close }, { id: u, ...d } = e, v = { id: u, ref: l.panel };
    return q({ ourProps: v, theirProps: d, slot: i, attrs: t, slots: n, features: ie.RenderStrategy | ie.Static, visible: r.value, name: "DisclosurePanel" });
  };
} });
var Bn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Bn || {});
let Lo = Symbol("PopoverContext");
function nt(e) {
  let t = Q(Lo, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <${at.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, nt), n;
  }
  return t;
}
let Do = Symbol("PopoverGroupContext");
function To() {
  return Q(Do, null);
}
let Ao = Symbol("PopoverPanelContext");
function jn() {
  return Q(Ao, null);
}
let at = H({ name: "Popover", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: n, expose: o }) {
  var l;
  let a = $(null);
  o({ el: a, $el: a });
  let r = $(1), i = $(null), u = $(null), d = $(null), v = $(null), m = C(() => re(a)), b = C(() => {
    var k, E;
    if (!S(i) || !S(v))
      return !1;
    for (let A of document.querySelectorAll("body > *"))
      if (Number(A == null ? void 0 : A.contains(S(i))) ^ Number(A == null ? void 0 : A.contains(S(v))))
        return !0;
    let B = St(), R = B.indexOf(S(i)), N = (R + B.length - 1) % B.length, L = (R + 1) % B.length, D = B[N], P = B[L];
    return !((k = S(v)) != null && k.contains(D)) && !((E = S(v)) != null && E.contains(P));
  }), x = { popoverState: r, buttonId: $(null), panelId: $(null), panel: v, button: i, isPortalled: b, beforePanelSentinel: u, afterPanelSentinel: d, togglePopover() {
    r.value = G(r.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    r.value !== 1 && (r.value = 1);
  }, close(k) {
    x.closePopover();
    let E = (() => k ? k instanceof HTMLElement ? k : k.value instanceof HTMLElement ? S(k) : S(x.button) : S(x.button))();
    E == null || E.focus();
  } };
  te(Lo, x), Xe(C(() => G(r.value, { [0]: le.Open, [1]: le.Closed })));
  let h = { buttonId: x.buttonId, panelId: x.panelId, close() {
    x.closePopover();
  } }, O = To(), f = O == null ? void 0 : O.registerPopover;
  function V() {
    var k, E, B, R;
    return (R = O == null ? void 0 : O.isFocusWithinPopoverGroup()) != null ? R : ((k = m.value) == null ? void 0 : k.activeElement) && (((E = S(i)) == null ? void 0 : E.contains(m.value.activeElement)) || ((B = S(v)) == null ? void 0 : B.contains(m.value.activeElement)));
  }
  return J(() => f == null ? void 0 : f(h)), Tt((l = m.value) == null ? void 0 : l.defaultView, "focus", (k) => {
    var E, B;
    r.value === 0 && (V() || !i || !v || k.target !== window && ((E = S(x.beforePanelSentinel)) != null && E.contains(k.target) || (B = S(x.afterPanelSentinel)) != null && B.contains(k.target) || x.closePopover()));
  }, !0), Pt([i, v], (k, E) => {
    var B;
    x.closePopover(), bo(E, Et.Loose) || (k.preventDefault(), (B = S(i)) == null || B.focus());
  }, C(() => r.value === 0)), () => {
    let k = { open: r.value === 0, close: x.close };
    return q({ theirProps: e, ourProps: { ref: a }, slot: k, slots: t, attrs: n, name: "Popover" });
  };
} }), jt = H({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-popover-button-${Y()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = nt("PopoverButton"), a = C(() => re(l.button));
  o({ el: l.button, $el: l.button }), K(() => {
    l.buttonId.value = e.id;
  }), ae(() => {
    l.buttonId.value = null;
  });
  let r = To(), i = r == null ? void 0 : r.closeOthers, u = jn(), d = C(() => u === null ? !1 : u.value === l.panelId.value), v = $(null), m = `headlessui-focus-sentinel-${Y()}`;
  d.value || J(() => {
    l.button.value = v.value;
  });
  let b = Qe(C(() => ({ as: e.as, type: t.type })), v);
  function x(V) {
    var k, E, B, R, N;
    if (d.value) {
      if (l.popoverState.value === 1)
        return;
      switch (V.key) {
        case M.Space:
        case M.Enter:
          V.preventDefault(), (E = (k = V.target).click) == null || E.call(k), l.closePopover(), (B = S(l.button)) == null || B.focus();
          break;
      }
    } else
      switch (V.key) {
        case M.Space:
        case M.Enter:
          V.preventDefault(), V.stopPropagation(), l.popoverState.value === 1 && (i == null || i(l.buttonId.value)), l.togglePopover();
          break;
        case M.Escape:
          if (l.popoverState.value !== 0)
            return i == null ? void 0 : i(l.buttonId.value);
          if (!S(l.button) || (R = a.value) != null && R.activeElement && !((N = S(l.button)) != null && N.contains(a.value.activeElement)))
            return;
          V.preventDefault(), V.stopPropagation(), l.closePopover();
          break;
      }
  }
  function h(V) {
    d.value || V.key === M.Space && V.preventDefault();
  }
  function O(V) {
    var k, E;
    e.disabled || (d.value ? (l.closePopover(), (k = S(l.button)) == null || k.focus()) : (V.preventDefault(), V.stopPropagation(), l.popoverState.value === 1 && (i == null || i(l.buttonId.value)), l.togglePopover(), (E = S(l.button)) == null || E.focus()));
  }
  function f(V) {
    V.preventDefault(), V.stopPropagation();
  }
  return () => {
    let V = l.popoverState.value === 0, k = { open: V }, { id: E, ...B } = e, R = d.value ? { ref: v, type: b.value, onKeydown: x, onClick: O } : { ref: v, id: E, type: b.value, "aria-expanded": e.disabled ? void 0 : l.popoverState.value === 0, "aria-controls": S(l.panel) ? l.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onKeydown: x, onKeyup: h, onClick: O, onMousedown: f }, N = Dt();
    function L() {
      let D = S(l.panel);
      if (!D)
        return;
      function P() {
        G(N.value, { [ve.Forwards]: () => ce(D, ee.First), [ve.Backwards]: () => ce(D, ee.Last) });
      }
      P();
    }
    return Z(I, [q({ ourProps: R, theirProps: { ...t, ...B }, slot: k, attrs: t, slots: n, name: "PopoverButton" }), V && !d.value && l.isPortalled.value && Z(xe, { id: m, features: be.Focusable, as: "button", type: "button", onFocus: L })]);
  };
} });
H({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(e, { attrs: t, slots: n }) {
  let o = nt("PopoverOverlay"), l = `headlessui-popover-overlay-${Y()}`, a = Oe(), r = C(() => a !== null ? a.value === le.Open : o.popoverState.value === 0);
  function i() {
    o.closePopover();
  }
  return () => {
    let u = { open: o.popoverState.value === 0 };
    return q({ ourProps: { id: l, "aria-hidden": !0, onClick: i }, theirProps: e, slot: u, attrs: t, slots: n, features: ie.RenderStrategy | ie.Static, visible: r.value, name: "PopoverOverlay" });
  };
} });
let Rt = H({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-popover-panel-${Y()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: n, expose: o }) {
  let { focus: l } = e, a = nt("PopoverPanel"), r = C(() => re(a.panel)), i = `headlessui-focus-sentinel-before-${Y()}`, u = `headlessui-focus-sentinel-after-${Y()}`;
  o({ el: a.panel, $el: a.panel }), K(() => {
    a.panelId.value = e.id;
  }), ae(() => {
    a.panelId.value = null;
  }), te(Ao, a.panelId), J(() => {
    var f, V;
    if (!l || a.popoverState.value !== 0 || !a.panel)
      return;
    let k = (f = r.value) == null ? void 0 : f.activeElement;
    (V = S(a.panel)) != null && V.contains(k) || ce(S(a.panel), ee.First);
  });
  let d = Oe(), v = C(() => d !== null ? d.value === le.Open : a.popoverState.value === 0);
  function m(f) {
    var V, k;
    switch (f.key) {
      case M.Escape:
        if (a.popoverState.value !== 0 || !S(a.panel) || r.value && !((V = S(a.panel)) != null && V.contains(r.value.activeElement)))
          return;
        f.preventDefault(), f.stopPropagation(), a.closePopover(), (k = S(a.button)) == null || k.focus();
        break;
    }
  }
  function b(f) {
    var V, k, E, B, R;
    let N = f.relatedTarget;
    !N || !S(a.panel) || (V = S(a.panel)) != null && V.contains(N) || (a.closePopover(), ((E = (k = S(a.beforePanelSentinel)) == null ? void 0 : k.contains) != null && E.call(k, N) || (R = (B = S(a.afterPanelSentinel)) == null ? void 0 : B.contains) != null && R.call(B, N)) && N.focus({ preventScroll: !0 }));
  }
  let x = Dt();
  function h() {
    let f = S(a.panel);
    if (!f)
      return;
    function V() {
      G(x.value, { [ve.Forwards]: () => {
        ce(f, ee.Next);
      }, [ve.Backwards]: () => {
        var k;
        (k = S(a.button)) == null || k.focus({ preventScroll: !0 });
      } });
    }
    V();
  }
  function O() {
    let f = S(a.panel);
    if (!f)
      return;
    function V() {
      G(x.value, { [ve.Forwards]: () => {
        var k, E;
        let B = S(a.button), R = S(a.panel);
        if (!B)
          return;
        let N = St(), L = N.indexOf(B), D = N.slice(0, L + 1), P = [...N.slice(L + 1), ...D];
        for (let A of P.slice())
          if ((E = (k = A == null ? void 0 : A.id) == null ? void 0 : k.startsWith) != null && E.call(k, "headlessui-focus-sentinel-") || R != null && R.contains(A)) {
            let z = P.indexOf(A);
            z !== -1 && P.splice(z, 1);
          }
        ce(P, ee.First, { sorted: !1 });
      }, [ve.Backwards]: () => ce(f, ee.Previous) });
    }
    V();
  }
  return () => {
    let f = { open: a.popoverState.value === 0, close: a.close }, { id: V, focus: k, ...E } = e, B = { ref: a.panel, id: V, onKeydown: m, onFocusout: l && a.popoverState.value === 0 ? b : void 0, tabIndex: -1 };
    return q({ ourProps: B, theirProps: { ...t, ...E }, attrs: t, slot: f, slots: { ...n, default: (...R) => {
      var N;
      return [Z(I, [v.value && a.isPortalled.value && Z(xe, { id: i, ref: a.beforePanelSentinel, features: be.Focusable, as: "button", type: "button", onFocus: h }), (N = n.default) == null ? void 0 : N.call(n, ...R), v.value && a.isPortalled.value && Z(xe, { id: u, ref: a.afterPanelSentinel, features: be.Focusable, as: "button", type: "button", onFocus: O })])];
    } }, features: ie.RenderStrategy | ie.Static, visible: v.value, name: "PopoverPanel" });
  };
} });
H({ name: "PopoverGroup", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = $(null), a = nl([]), r = C(() => re(l));
  o({ el: l, $el: l });
  function i(m) {
    let b = a.value.indexOf(m);
    b !== -1 && a.value.splice(b, 1);
  }
  function u(m) {
    return a.value.push(m), () => {
      i(m);
    };
  }
  function d() {
    var m;
    let b = r.value;
    if (!b)
      return !1;
    let x = b.activeElement;
    return (m = S(l)) != null && m.contains(x) ? !0 : a.value.some((h) => {
      var O, f;
      return ((O = b.getElementById(h.buttonId.value)) == null ? void 0 : O.contains(x)) || ((f = b.getElementById(h.panelId.value)) == null ? void 0 : f.contains(x));
    });
  }
  function v(m) {
    for (let b of a.value)
      b.buttonId.value !== m && b.close();
  }
  return te(Do, { registerPopover: u, unregisterPopover: i, isFocusWithinPopoverGroup: d, closeOthers: v }), () => q({ ourProps: { ref: l }, theirProps: e, slot: {}, attrs: t, slots: n, name: "PopoverGroup" });
} });
let Bo = Symbol("LabelContext");
function jo() {
  let e = Q(Bo, null);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, jo), t;
  }
  return e;
}
function It({ slot: e = {}, name: t = "Label", props: n = {} } = {}) {
  let o = $([]);
  function l(a) {
    return o.value.push(a), () => {
      let r = o.value.indexOf(a);
      r !== -1 && o.value.splice(r, 1);
    };
  }
  return te(Bo, { register: l, slot: e, name: t, props: n }), C(() => o.value.length > 0 ? o.value.join(" ") : void 0);
}
let Ro = H({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-label-${Y()}` } }, setup(e, { slots: t, attrs: n }) {
  let o = jo();
  return K(() => ae(o.register(e.id))), () => {
    let { name: l = "Label", slot: a = {}, props: r = {} } = o, { id: i, passive: u, ...d } = e, v = { ...Object.entries(r).reduce((m, [b, x]) => Object.assign(m, { [b]: g(x) }), {}), id: i };
    return u && (delete v.onClick, delete d.onClick), q({ ourProps: v, theirProps: d, slot: a, attrs: n, slots: t, name: l });
  };
} });
function Rn(e, t) {
  return e === t;
}
let Io = Symbol("RadioGroupContext");
function Mo(e) {
  let t = Q(Io, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Mo), n;
  }
  return t;
}
let In = H({ name: "RadioGroup", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "div" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => Rn }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-radiogroup-${Y()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: n, slots: o, expose: l }) {
  let a = $(null), r = $([]), i = It({ name: "RadioGroupLabel" }), u = tt({ name: "RadioGroupDescription" });
  l({ el: a, $el: a });
  let [d, v] = Lt(C(() => e.modelValue), (h) => t("update:modelValue", h), C(() => e.defaultValue)), m = { options: r, value: d, disabled: C(() => e.disabled), firstOption: C(() => r.value.find((h) => !h.propsRef.disabled)), containsCheckedOption: C(() => r.value.some((h) => m.compare(U(h.propsRef.value), U(e.modelValue)))), compare(h, O) {
    if (typeof e.by == "string") {
      let f = e.by;
      return (h == null ? void 0 : h[f]) === (O == null ? void 0 : O[f]);
    }
    return e.by(h, O);
  }, change(h) {
    var O;
    if (e.disabled || m.compare(U(d.value), U(h)))
      return !1;
    let f = (O = r.value.find((V) => m.compare(U(V.propsRef.value), U(h)))) == null ? void 0 : O.propsRef;
    return f != null && f.disabled ? !1 : (v(h), !0);
  }, registerOption(h) {
    r.value.push(h), r.value = Ot(r.value, (O) => O.element);
  }, unregisterOption(h) {
    let O = r.value.findIndex((f) => f.id === h);
    O !== -1 && r.value.splice(O, 1);
  } };
  te(Io, m), ho({ container: C(() => S(a)), accept(h) {
    return h.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : h.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(h) {
    h.setAttribute("role", "none");
  } });
  function b(h) {
    if (!a.value || !a.value.contains(h.target))
      return;
    let O = r.value.filter((f) => f.propsRef.disabled === !1).map((f) => f.element);
    switch (h.key) {
      case M.Enter:
        xo(h.currentTarget);
        break;
      case M.ArrowLeft:
      case M.ArrowUp:
        if (h.preventDefault(), h.stopPropagation(), ce(O, ee.Previous | ee.WrapAround) === Ue.Success) {
          let f = r.value.find((V) => {
            var k;
            return V.element === ((k = re(a)) == null ? void 0 : k.activeElement);
          });
          f && m.change(f.propsRef.value);
        }
        break;
      case M.ArrowRight:
      case M.ArrowDown:
        if (h.preventDefault(), h.stopPropagation(), ce(O, ee.Next | ee.WrapAround) === Ue.Success) {
          let f = r.value.find((V) => {
            var k;
            return V.element === ((k = re(V.element)) == null ? void 0 : k.activeElement);
          });
          f && m.change(f.propsRef.value);
        }
        break;
      case M.Space:
        {
          h.preventDefault(), h.stopPropagation();
          let f = r.value.find((V) => {
            var k;
            return V.element === ((k = re(V.element)) == null ? void 0 : k.activeElement);
          });
          f && m.change(f.propsRef.value);
        }
        break;
    }
  }
  let x = C(() => {
    var h;
    return (h = S(a)) == null ? void 0 : h.closest("form");
  });
  return K(() => {
    ne([x], () => {
      if (!x.value || e.defaultValue === void 0)
        return;
      function h() {
        m.change(e.defaultValue);
      }
      return x.value.addEventListener("reset", h), () => {
        var O;
        (O = x.value) == null || O.removeEventListener("reset", h);
      };
    }, { immediate: !0 });
  }), () => {
    let { disabled: h, name: O, id: f, ...V } = e, k = { ref: a, id: f, role: "radiogroup", "aria-labelledby": i.value, "aria-describedby": u.value, onKeydown: b };
    return Z(I, [...O != null && d.value != null ? Nt({ [O]: d.value }).map(([E, B]) => Z(xe, Ct({ features: be.Hidden, key: E, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: E, value: B }))) : [], q({ ourProps: k, theirProps: { ...n, ...Ae(V, ["modelValue", "defaultValue"]) }, slot: {}, attrs: n, slots: o, name: "RadioGroup" })]);
  };
} });
var Mn = ((e) => (e[e.Empty = 1] = "Empty", e[e.Active = 2] = "Active", e))(Mn || {});
let Fn = H({ name: "RadioGroupOption", props: { as: { type: [Object, String], default: "div" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-radiogroup-option-${Y()}` } }, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = Mo("RadioGroupOption"), a = It({ name: "RadioGroupLabel" }), r = tt({ name: "RadioGroupDescription" }), i = $(null), u = C(() => ({ value: e.value, disabled: e.disabled })), d = $(1);
  o({ el: i, $el: i }), K(() => l.registerOption({ id: e.id, element: i, propsRef: u })), ae(() => l.unregisterOption(e.id));
  let v = C(() => {
    var V;
    return ((V = l.firstOption.value) == null ? void 0 : V.id) === e.id;
  }), m = C(() => l.disabled.value || e.disabled), b = C(() => l.compare(U(l.value.value), U(e.value))), x = C(() => m.value ? -1 : b.value || !l.containsCheckedOption.value && v.value ? 0 : -1);
  function h() {
    var V;
    !l.change(e.value) || (d.value |= 2, (V = i.value) == null || V.focus());
  }
  function O() {
    d.value |= 2;
  }
  function f() {
    d.value &= -3;
  }
  return () => {
    let { id: V, value: k, disabled: E, ...B } = e, R = { checked: b.value, disabled: m.value, active: Boolean(d.value & 2) }, N = { id: V, ref: i, role: "radio", "aria-checked": b.value ? "true" : "false", "aria-labelledby": a.value, "aria-describedby": r.value, "aria-disabled": m.value ? !0 : void 0, tabIndex: x.value, onClick: m.value ? void 0 : h, onFocus: m.value ? void 0 : O, onBlur: m.value ? void 0 : f };
    return q({ ourProps: N, theirProps: B, slot: R, attrs: t, slots: n, name: "RadioGroupOption" });
  };
} }), Xt = Ro, zn = En, Fo = Symbol("GroupContext"), Hn = H({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: n }) {
  let o = $(null), l = It({ name: "SwitchLabel", props: { onClick() {
    !o.value || (o.value.click(), o.value.focus({ preventScroll: !0 }));
  } } }), a = tt({ name: "SwitchDescription" });
  return te(Fo, { switchRef: o, labelledby: l, describedby: a }), () => q({ theirProps: e, ourProps: {}, slot: {}, slots: t, attrs: n, name: "SwitchGroup" });
} }), qn = H({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: !0 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-switch-${Y()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: n, slots: o, expose: l }) {
  let a = Q(Fo, null), [r, i] = Lt(C(() => e.modelValue), (f) => t("update:modelValue", f), C(() => e.defaultChecked));
  function u() {
    i(!r.value);
  }
  let d = $(null), v = a === null ? d : a.switchRef, m = Qe(C(() => ({ as: e.as, type: n.type })), v);
  l({ el: v, $el: v });
  function b(f) {
    f.preventDefault(), u();
  }
  function x(f) {
    f.key === M.Space ? (f.preventDefault(), u()) : f.key === M.Enter && xo(f.currentTarget);
  }
  function h(f) {
    f.preventDefault();
  }
  let O = C(() => {
    var f, V;
    return (V = (f = S(v)) == null ? void 0 : f.closest) == null ? void 0 : V.call(f, "form");
  });
  return K(() => {
    ne([O], () => {
      if (!O.value || e.defaultChecked === void 0)
        return;
      function f() {
        i(e.defaultChecked);
      }
      return O.value.addEventListener("reset", f), () => {
        var V;
        (V = O.value) == null || V.removeEventListener("reset", f);
      };
    }, { immediate: !0 });
  }), () => {
    let { id: f, name: V, value: k, ...E } = e, B = { checked: r.value }, R = { id: f, ref: v, role: "switch", type: m.value, tabIndex: 0, "aria-checked": r.value, "aria-labelledby": a == null ? void 0 : a.labelledby.value, "aria-describedby": a == null ? void 0 : a.describedby.value, onClick: b, onKeyup: x, onKeypress: h };
    return Z(I, [V != null && r.value != null ? Z(xe, Ct({ features: be.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: r.value, name: V, value: k })) : null, q({ ourProps: R, theirProps: { ...n, ...Ae(E, ["modelValue", "defaultChecked"]) }, slot: B, attrs: n, slots: o, name: "Switch" })]);
  };
} }), Un = Ro;
function Gn(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called)
      return t.called = !0, e(...n);
  };
}
function ft(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function He(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var Vt = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(Vt || {});
function Kn(e, t) {
  let n = At();
  if (!e)
    return n.dispose;
  let { transitionDuration: o, transitionDelay: l } = getComputedStyle(e), [a, r] = [o, l].map((i) => {
    let [u = 0] = i.split(",").filter(Boolean).map((d) => d.includes("ms") ? parseFloat(d) : parseFloat(d) * 1e3).sort((d, v) => v - d);
    return u;
  });
  return a !== 0 ? n.setTimeout(() => t("finished"), a + r) : t("finished"), n.add(() => t("cancelled")), n.dispose;
}
function Qt(e, t, n, o, l, a) {
  let r = At(), i = a !== void 0 ? Gn(a) : () => {
  };
  return He(e, ...l), ft(e, ...t, ...n), r.nextFrame(() => {
    He(e, ...n), ft(e, ...o), r.add(Kn(e, (u) => (He(e, ...o, ...t), ft(e, ...l), i(u))));
  }), r.add(() => He(e, ...t, ...n, ...o, ...l)), r.add(() => i("cancelled")), r.dispose;
}
function Se(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Mt = Symbol("TransitionContext");
var Wn = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Wn || {});
function Zn() {
  return Q(Mt, null) !== null;
}
function Yn() {
  let e = Q(Mt, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Jn() {
  let e = Q(Ft, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let Ft = Symbol("NestingContext");
function st(e) {
  return "children" in e ? st(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function zo(e) {
  let t = $([]), n = $(!1);
  K(() => n.value = !0), ae(() => n.value = !1);
  function o(a, r = ke.Hidden) {
    let i = t.value.findIndex(({ id: u }) => u === a);
    i !== -1 && (G(r, { [ke.Unmount]() {
      t.value.splice(i, 1);
    }, [ke.Hidden]() {
      t.value[i].state = "hidden";
    } }), !st(t) && n.value && (e == null || e()));
  }
  function l(a) {
    let r = t.value.find(({ id: i }) => i === a);
    return r ? r.state !== "visible" && (r.state = "visible") : t.value.push({ id: a, state: "visible" }), () => o(a, ke.Unmount);
  }
  return { children: t, register: l, unregister: o };
}
let Ho = ie.RenderStrategy, Ce = H({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: n, slots: o, expose: l }) {
  if (!Zn() && en())
    return () => Z(Fe, { ...e, onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave") }, o);
  let a = $(null), r = $("visible"), i = C(() => e.unmount ? ke.Unmount : ke.Hidden);
  l({ el: a, $el: a });
  let { show: u, appear: d } = Yn(), { register: v, unregister: m } = Jn(), b = { value: !0 }, x = Y(), h = { value: !1 }, O = zo(() => {
    h.value || (r.value = "hidden", m(x), t("afterLeave"));
  });
  K(() => {
    let D = v(x);
    ae(D);
  }), J(() => {
    if (i.value === ke.Hidden && x) {
      if (u && r.value !== "visible") {
        r.value = "visible";
        return;
      }
      G(r.value, { hidden: () => m(x), visible: () => v(x) });
    }
  });
  let f = Se(e.enter), V = Se(e.enterFrom), k = Se(e.enterTo), E = Se(e.entered), B = Se(e.leave), R = Se(e.leaveFrom), N = Se(e.leaveTo);
  K(() => {
    J(() => {
      if (r.value === "visible") {
        let D = S(a);
        if (D instanceof Comment && D.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function L(D) {
    let P = b.value && !d.value, A = S(a);
    !A || !(A instanceof HTMLElement) || P || (h.value = !0, u.value && t("beforeEnter"), u.value || t("beforeLeave"), D(u.value ? Qt(A, f, V, k, E, (z) => {
      h.value = !1, z === Vt.Finished && t("afterEnter");
    }) : Qt(A, B, R, N, E, (z) => {
      h.value = !1, z === Vt.Finished && (st(O) || (r.value = "hidden", m(x), t("afterLeave")));
    })));
  }
  return K(() => {
    ne([u], (D, P, A) => {
      L(A), b.value = !1;
    }, { immediate: !0 });
  }), te(Ft, O), Xe(C(() => G(r.value, { visible: le.Open, hidden: le.Closed }))), () => {
    let { appear: D, show: P, enter: A, enterFrom: z, enterTo: he, entered: Pe, leave: it, leaveFrom: ue, leaveTo: pe, ...Ve } = e;
    return q({ theirProps: Ve, ourProps: { ref: a }, slot: {}, slots: o, attrs: n, features: Ho, visible: r.value === "visible", name: "TransitionChild" });
  };
} }), Xn = Ce, Fe = H({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: n, slots: o }) {
  let l = Oe(), a = C(() => e.show === null && l !== null ? G(l.value, { [le.Open]: !0, [le.Closed]: !1 }) : e.show);
  J(() => {
    if (![!0, !1].includes(a.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r = $(a.value ? "visible" : "hidden"), i = zo(() => {
    r.value = "hidden";
  }), u = $(!0), d = { show: a, appear: C(() => e.appear || !u.value) };
  return K(() => {
    J(() => {
      u.value = !1, a.value ? r.value = "visible" : st(i) || (r.value = "hidden");
    });
  }), te(Ft, i), te(Mt, d), () => {
    let v = Ae(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), m = { unmount: e.unmount };
    return q({ ourProps: { ...m, as: "template" }, theirProps: {}, slot: {}, slots: { ...o, default: () => [Z(Xn, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...n, ...m, ...v }, o.default)] }, attrs: {}, features: Ho, visible: r.value === "visible", name: "Transition" });
  };
} });
const Qn = {
  key: 0,
  class: "po-text-sm po-font-normal po-text-slate-400 po-select-none"
}, ea = { class: "po-grid po-grid-cols-3 po-gap-3 po-py-3" }, ta = ["href"], oa = { class: "po-block po-w-10 po-rounded-md po-transition-shadow po-duration-100 po-ease-in-out po-shadow-md group-hover:po-shadow-xl po-overflow-hidden" }, la = ["src", "alt"], na = { class: "po-text-slate-600 po-font-normal po-text-sm" }, aa = {
  name: "PoAppTray"
}, sa = /* @__PURE__ */ Object.assign(aa, {
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
    return (t, n) => (p(), F(g(at), { class: "po-relative" }, {
      default: T(({ open: o }) => [
        _(g(jt), {
          class: j([o ? "" : "po-text-opacity-90", "po-block po-w-6 po-text-slate-100 genie-effect po-z-50 po-outline-none"])
        }, {
          default: T(() => [
            _(g(Cl))
          ]),
          _: 2
        }, 1032, ["class"]),
        _(Te, {
          "enter-active-class": "po-transition po-duration-200 po-ease-out",
          "enter-from-class": "po-translate-y-1 po-opacity-0",
          "enter-to-class": "po-translate-y-0 po-opacity-100",
          "leave-active-class": "po-transition po-duration-150 po-ease-in",
          "leave-from-class": "po-translate-y-0 po-opacity-100",
          "leave-to-class": "po-translate-y-1 po-opacity-0"
        }, {
          default: T(() => [
            _(g(Rt), { class: "po-space-y-1 po-z-10 po-absolute po-right-0 po-top-[47px] po-opacity-0 po-bg-white po-bg-opacity-50 po-backdrop-blur po-backdrop-filter po-shadow-lg po-rounded-md po-w-96 po-p-4 po-border po-border-slate-200 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-scroll" }, {
              default: T(() => [
                (p(!0), c(I, null, W(e.appList, (l) => (p(), c("div", null, [
                  l.groupName.length > 0 ? (p(), c("span", Qn, y(l.groupName), 1)) : w("", !0),
                  s("ul", ea, [
                    (p(!0), c(I, null, W(l.apps, (a) => (p(), c("li", null, [
                      s("a", {
                        href: a.url,
                        class: "po-flex po-flex-col po-group po-space-y-3 po-justify-center po-items-center po-py-2 genie-effect"
                      }, [
                        s("span", oa, [
                          s("img", {
                            src: a.icon,
                            alt: `${a.name} icon`
                          }, null, 8, la)
                        ]),
                        s("span", na, y(a.name), 1)
                      ], 8, ta)
                    ]))), 256))
                  ])
                ]))), 256))
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
}, pa = ["onClick"], ua = { class: "po-flex po-items-center po-justify-between" }, ca = { class: "po-text-sm po-font-semibold po-text-slate-700 po-grow po-flex po-space-x-2 po-items-center" }, da = {
  key: 0,
  class: "po-w-2 po-h-2 po-rounded-full po-shrink-0 po-bg-mpao-orange"
}, fa = { class: "po-grow" }, va = { class: "po-text-xs po-font-normal po-text-slate-400 po-shrink-0" }, ma = { class: "po-block po-text-sm po-text-slate-500 po-pb-3" }, ha = {
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
    return (n, o) => (p(), F(g(at), { class: "po-relative" }, {
      default: T(({ open: l }) => [
        _(g(jt), {
          class: j([l ? "" : "text-opacity-90", "po-block po-w-6 po-text-slate-100 genie-effect po-relative po-z-50 po-outline-none"])
        }, {
          default: T(() => [
            e.hasNewNotifications ? (p(), c("span", ra)) : w("", !0),
            _(g(dl), { class: "po-stroke-current" })
          ]),
          _: 2
        }, 1032, ["class"]),
        _(Te, {
          "enter-active-class": "po-transition po-duration-200 po-ease-out",
          "enter-from-class": "po-translate-y-1 po-opacity-0",
          "enter-to-class": "po-translate-y-0 po-opacity-100",
          "leave-active-class": "po-transition po-duration-150 po-ease-in",
          "leave-from-class": "po-translate-y-0 po-opacity-100",
          "leave-to-class": "po-translate-y-1 po-opacity-0"
        }, {
          default: T(() => [
            _(g(Rt), { class: "po-space-y-1 po-z-10 po-absolute po-right-0 po-top-[47px] po-opacity-0 po-bg-white po-bg-opacity-50 po-backdrop-blur po-backdrop-filter po-shadow-lg po-rounded-md po-w-96 po-p-4 po-border po-border-slate-200 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-scroll" }, {
              default: T(() => [
                e.notifications !== null && e.notifications.length > 0 ? (p(), c("ul", ia, [
                  (p(!0), c(I, null, W(e.notifications, (a) => (p(), c("li", {
                    role: "button",
                    class: "po-space-y-2 po-p-2 po-rounded-lg po-bg-white hover:po-bg-slate-100 po-border po-border-slate-100",
                    onClick: me((r) => n.$emit("button-click", a.name), ["prevent"])
                  }, [
                    s("span", ua, [
                      s("p", ca, [
                        a.seen ? w("", !0) : (p(), c("span", da)),
                        s("span", fa, y(a.name), 1)
                      ]),
                      s("span", va, y(a.time), 1)
                    ]),
                    s("span", ma, y(a.text), 1)
                  ], 8, pa))), 256))
                ])) : (p(), c("span", ha, " No notifications to show at the moment. We'll keep you informed."))
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
}), ya = { class: "po-hidden lg:po-block po-text-sky-50 po-text-sm po-shrink-0 po-pr-3 po-truncate po-max-w-[140px] po-overflow-hidden" }, xa = { class: "po-text-xs po-text-white po-font-semibold" }, Va = ["onClick"], wa = { class: "po-w-5" }, $a = { class: "po-flex po-flex-col po-space-y-1" }, ka = { class: "po-text-sm po-font-normal" }, _a = {
  key: 0,
  class: "po-text-xs po-text-slate-400"
}, Ca = { class: "md:po-grid po-grid-cols-2 po-space-x-1" }, Sa = { class: "po-w-5" }, Ea = /* @__PURE__ */ s("span", { class: "po-text-sm po-font-normal" }, "Profile", -1), Oa = { class: "po-w-5" }, Pa = /* @__PURE__ */ s("span", { class: "po-text-sm po-font-normal" }, "Logout", -1), Na = {
  name: "PoProfileSwitcher"
}, La = /* @__PURE__ */ Object.assign(Na, {
  props: {
    profileSwitcherData: {
      type: Object,
      default: null
    }
  },
  setup(e) {
    const t = e, n = $(""), o = C(() => {
      const l = t.profileSwitcherData.profiles.filter(
        (a) => a.current === !0
      )[0];
      return n.value = l ? l.name : "", l ? l.name.match(/\b[A-Z]/g).join("").substr(0, 2) : "";
    });
    return (l, a) => (p(), F(g(at), { class: "po-relative" }, {
      default: T(({ open: r }) => [
        _(g(jt), { class: "po-flex po-items-center po-outline-none" }, {
          default: T(() => [
            s("span", ya, y(n.value), 1),
            s("div", {
              class: j([r ? "" : "text-opacity-90", "po-select-none po-rounded-full po-w-10 po-h-10 po-bg-[#2e5266] po-flex po-items-center po-justify-center genie-effect po-z-50"])
            }, [
              s("span", xa, y(g(o)), 1)
            ], 2)
          ]),
          _: 2
        }, 1024),
        _(Te, {
          "enter-active-class": "po-transition po-duration-200 po-ease-out",
          "enter-from-class": "po-translate-y-1 po-opacity-0",
          "enter-to-class": "po-translate-y-0 po-opacity-100",
          "leave-active-class": "po-transition po-duration-150 po-ease-in",
          "leave-from-class": "po-translate-y-0 po-opacity-100",
          "leave-to-class": "po-translate-y-1 po-opacity-0"
        }, {
          default: T(() => [
            _(g(Rt), { class: "po-space-y-1 po-z-10 po-absolute po-right-0 po-top-[55px] po-opacity-0 po-bg-white po-bg-opacity-50 po-backdrop-blur po-backdrop-filter po-shadow-lg po-rounded-md po-w-96 po-p-4 po-border po-border-slate-200 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-scroll" }, {
              default: T(() => [
                (p(!0), c(I, null, W(e.profileSwitcherData.profiles, (i) => (p(), c("a", {
                  href: "#",
                  onClick: me((u) => l.$emit("button-click", i), ["prevent"]),
                  class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-white hover:po-bg-slate-100 po-border po-border-slate-100",
                  role: "button"
                }, [
                  s("span", wa, [
                    i.isPersonal ? (p(), F(g(Gt), {
                      key: 0,
                      class: j([
                        "po-stroke-current",
                        { "po-stroke-mpao-orange": i.current }
                      ])
                    }, null, 8, ["class"])) : w("", !0),
                    i.isPersonal ? w("", !0) : (p(), F(g(vl), {
                      key: 1,
                      class: j([
                        "po-stroke-current",
                        { "po-stroke-mpao-orange": i.current }
                      ])
                    }, null, 8, ["class"]))
                  ]),
                  s("span", $a, [
                    s("span", ka, y(i.name), 1),
                    i.identifier.length !== 0 ? (p(), c("span", _a, y(i.identifier), 1)) : w("", !0)
                  ])
                ], 8, Va))), 256)),
                s("div", Ca, [
                  s("a", {
                    href: "#",
                    onClick: a[0] || (a[0] = me((i) => l.$emit("button-click", "current-profile"), ["prevent"])),
                    class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-white hover:po-bg-slate-100 po-border po-border-slate-100",
                    role: "button"
                  }, [
                    s("span", Sa, [
                      _(g(Gt), { class: "po-stroke-current" })
                    ]),
                    Ea
                  ]),
                  s("a", {
                    href: "#",
                    onClick: a[1] || (a[1] = me((i) => l.$emit("button-click", "logout"), ["prevent"])),
                    class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-white hover:po-bg-slate-100 po-border po-border-slate-100",
                    role: "button"
                  }, [
                    s("span", Oa, [
                      _(g(pl), { class: "po-stroke-current" })
                    ]),
                    Pa
                  ])
                ])
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
}), Da = ["disabled", "aria-disabled"], Ta = ["value", "disabled", "aria-disabled"], Aa = {
  name: "PoButton"
}, zt = /* @__PURE__ */ Object.assign(Aa, {
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
  emits: ["button-click"],
  setup(e, { emit: t }) {
    const n = e, o = "po-rounded-lg po-transition-colors po-duration-100 po-ease-in-out po-cursor-pointer disabled:po-bg-slate-400 disabled:po-cursor-default disabled:po-hover:bg-slate-400", l = C(() => {
      switch (n.size) {
        case "sm":
          return "po-px-2 po-py-1 po-text-xs";
        case "md":
          return "po-px-4 po-py-2 po-text-sm";
        case "lg":
          return "po-px-5 po-py-3 po-text-normal";
      }
    }), a = C(() => n.overrideColors ? "" : "po-bg-mpao-lightblue hover:po-bg-mpao-blue focus:po-bg-mpao-blue po-text-slate-50");
    return (r, i) => (p(), c(I, null, [
      e.type == "button" ? (p(), c("button", Ee({
        key: 0,
        onClick: i[0] || (i[0] = me((u) => r.$emit("button-click", e.to), ["prevent"])),
        class: [o, g(l), g(a)],
        disabled: e.disabled,
        "aria-disabled": e.disabled
      }, r.$attrs), [
        X(r.$slots, "label", {}, () => [
          se(y(e.label), 1)
        ])
      ], 16, Da)) : w("", !0),
      e.type == "submit" ? (p(), c("input", Ee({
        key: 1,
        type: "submit",
        class: [o, g(l), g(a)],
        value: e.label,
        disabled: e.disabled,
        "aria-disabled": e.disabled
      }, r.$attrs), null, 16, Ta)) : w("", !0),
      e.type == "link" ? (p(), c("a", Ee({
        key: 2,
        href: "#",
        onClick: i[1] || (i[1] = me((u) => r.$emit("button-click", e.to), ["prevent"])),
        class: [o, g(l), g(a)]
      }, r.$attrs), [
        X(r.$slots, "label", {}, () => [
          se(y(e.label), 1)
        ])
      ], 16)) : w("", !0),
      e.type == "simple" ? (p(), c("a", {
        key: 3,
        href: "#",
        onClick: i[2] || (i[2] = me((u) => r.$emit("button-click", e.to), ["prevent"])),
        class: j(["po-text-sm po-transition-colors po-duration-100 po-ease-in-out po-inline-flex po-items-center po-space-x-1", [
          { "po-text-mpao-lightblue hover:po-text-mpao-blue": !e.overrideColors }
        ]])
      }, [
        X(r.$slots, "label", {}, () => [
          se(y(e.label), 1)
        ])
      ], 2)) : w("", !0)
    ], 64));
  }
}), Ba = /* @__PURE__ */ s("div", { class: "po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity" }, null, -1), ja = { class: "po-fixed po-z-10 po-inset-0 po-overflow-y-auto" }, Ra = { class: "po-flex po-justify-center po-items-start po-min-h-screen po-px-4 po-pt-10 po-pb-20 po-text-center sm:po-block" }, Ia = /* @__PURE__ */ s("span", {
  class: "po-hidden sm:po-inline-block sm:po-align-middle sm:po-h-screen",
  "aria-hidden": "true"
}, "​", -1), Ma = { class: "po-flex po-items-center po-bg-white po-rounded-t-xl po-p-5" }, Fa = { class: "po-grow po-text-md po-font-bold po-text-slate-600" }, za = { class: "po-shrink-0" }, Ha = { class: "po-p-5" }, qa = {
  key: 0,
  class: "po-bg-slate-50 po-rounded-b-xl"
}, Ua = {
  name: "PoModal"
}, Ga = /* @__PURE__ */ Object.assign(Ua, {
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
    const t = e, { show: n } = Ie(t), o = $(!1);
    return ne(n, () => {
      o.value = !1, setTimeout(() => {
        o.value = !0;
      }, 100);
    }), (l, a) => (p(), c("div", null, [
      e.openBtnLabel.length > 0 ? (p(), F(g(zt), {
        key: 0,
        label: e.openBtnLabel,
        onClick: a[0] || (a[0] = (r) => o.value = !0)
      }, null, 8, ["label"])) : w("", !0),
      _(g(Fe), {
        as: "template",
        show: o.value
      }, {
        default: T(() => [
          _(g(ot), {
            as: "div",
            class: "po-relative po-z-50",
            onClose: a[2] || (a[2] = (r) => o.value = !1)
          }, {
            default: T(() => [
              _(g(Ce), {
                as: "template",
                enter: "po-ease-out po-duration-300",
                "enter-from": "po-opacity-0",
                "enter-to": "po-opacity-100",
                leave: "po-ease-in po-duration-200",
                "leave-from": "po-opacity-100",
                "leave-to": "po-opacity-0"
              }, {
                default: T(() => [
                  Ba
                ]),
                _: 1
              }),
              s("div", ja, [
                s("div", Ra, [
                  Ia,
                  _(g(Ce), {
                    as: "template",
                    enter: "po-ease-out po-duration-300",
                    "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                    "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                    leave: "po-ease-in po-duration-200",
                    "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                    "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                  }, {
                    default: T(() => [
                      _(g(lt), { class: "po-relative po-inline-block po-align-bottom po-bg-white po-rounded-xl po-text-left po-shadow-xl po-transform po-transition-all sm:po-align-top sm:po-max-w-xl po-w-full" }, {
                        default: T(() => [
                          s("div", Ma, [
                            s("h3", Fa, y(e.modalTitle), 1),
                            s("div", za, [
                              s("span", {
                                role: "button",
                                class: "po-block",
                                onClick: a[1] || (a[1] = (r) => o.value = !1)
                              }, [
                                _(g(fo), { class: "po-w-5 po-stroke-slate-500 hover:po-stroke-mpao-orange po-transition-colors po-duration-150 po-ease-in-out" })
                              ])
                            ])
                          ]),
                          s("div", Ha, [
                            X(l.$slots, "content")
                          ]),
                          l.$slots.footer ? (p(), c("div", qa, [
                            X(l.$slots, "footer")
                          ])) : w("", !0)
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
});
function Ka(e, t) {
  return p(), c("svg", {
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
function Wa(e, t) {
  return p(), c("svg", {
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
  return p(), c("svg", {
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
function Ya(e, t) {
  return p(), c("svg", {
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
function Ja(e, t) {
  return p(), c("svg", {
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
function Xa(e, t) {
  return p(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
  ]);
}
const Qa = {
  key: 0,
  class: "po-mt-1 po-flex -po-mb-3 po-flex-wrap"
}, es = { class: "po-flex po-flex-1" }, ts = { class: "po-flex po-flex-col" }, os = {
  name: "PoRadioInput"
}, ls = /* @__PURE__ */ Object.assign(os, {
  props: {
    /**
     * Model value
     */
    modelValue: {
      type: Object,
      default: null
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
    },
    /**
     * Input display vertifal (default) or horizontal
     */
    display: {
      type: String,
      default: "vertical"
    }
  },
  emits: ["selected", "unSelected", "update:modelValue"],
  setup(e, { emit: t }) {
    const o = $(e.preSelected);
    return ne(o, () => {
      t("update:modelValue", o.value);
    }), (l, a) => (p(), F(g(In), {
      modelValue: o.value,
      "onUpdate:modelValue": a[0] || (a[0] = (r) => o.value = r),
      class: j([{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }])
    }, {
      default: T(() => [
        _(g(Xt), { class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700" }, {
          default: T(() => [
            se(y(e.label), 1)
          ]),
          _: 1
        }),
        e.options !== null ? (p(), c("div", Qa, [
          (p(!0), c(I, null, W(e.options, (r) => (p(), F(g(Fn), {
            as: "template",
            key: r.id,
            value: r
          }, {
            default: T(({ checked: i, active: u }) => [
              s("div", {
                class: j([
                  "po-transition-colors po-duration-100 po-ease-out po-mr-3",
                  i ? "po-border-transparent" : "po-border-gray-300 hover:po-border-mpao-lightblue",
                  u ? "po-border-mpao-lightblue po-ring-1 po-ring-mpao-lightblue" : "",
                  "po-mb-3 po-relative po-flex po-cursor-pointer po-rounded-lg po-border po-bg-white po-px-3 po-py-2 po-shadow-sm focus:po-outline-none"
                ])
              }, [
                s("span", es, [
                  s("span", ts, [
                    _(g(Xt), {
                      as: "span",
                      class: "po-block po-text-sm po-font-medium po-text-gray-900"
                    }, {
                      default: T(() => [
                        se(y(r.title), 1)
                      ]),
                      _: 2
                    }, 1024),
                    r.description ? (p(), F(g(zn), {
                      key: 0,
                      as: "span",
                      class: "po-mt-1 po-flex po-items-center po-text-sm po-text-gray-500"
                    }, {
                      default: T(() => [
                        se(y(r.description), 1)
                      ]),
                      _: 2
                    }, 1024)) : w("", !0)
                  ])
                ]),
                _(g(Ka), {
                  class: j([
                    i ? "" : "po-invisible",
                    "po-h-5 po-w-5 po-ml-2 po-text-mpao-lightblue"
                  ]),
                  "aria-hidden": "true"
                }, null, 8, ["class"]),
                s("span", {
                  class: j([
                    "po-border",
                    i ? "po-border-mpao-lightblue" : "po-border-transparent",
                    "po-pointer-events-none po-absolute -po-inset-px po-rounded-lg"
                  ]),
                  "aria-hidden": "true"
                }, null, 2)
              ], 2)
            ]),
            _: 2
          }, 1032, ["value"]))), 128))
        ])) : w("", !0)
      ]),
      _: 1
    }, 8, ["modelValue", "class"]));
  }
});
function ns(e, t) {
  return p(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", { d: "M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" }),
    s("path", { d: "M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" })
  ]);
}
function as(e, t) {
  return p(), c("svg", {
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
function ss(e, t) {
  return p(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", { d: "M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" })
  ]);
}
function qo(e, t) {
  return p(), c("svg", {
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
function rs(e, t) {
  return p(), c("svg", {
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
const is = ["for"], ps = ["title"], us = ["name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], cs = ["id"], ds = ["id"], fs = {
  name: "PoTextarea"
}, vs = /* @__PURE__ */ Object.assign(fs, {
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
    return (t, n) => (p(), c("div", {
      class: j(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      s("label", {
        for: e.id,
        class: "po-text-sm po-font-medium po-text-slate-700 po-flex po-items-center po-space-x-1"
      }, [
        s("span", null, y(e.label), 1),
        e.info !== null ? (p(), c("abbr", {
          key: 0,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          _(g(qo))
        ], 8, ps)) : w("", !0)
      ], 8, is),
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
        onInput: n[0] || (n[0] = (o) => t.$emit("update:modelValue", o.target.value)),
        class: "po-mt-1 po-peer po-px-3 po-py-2 po-block po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-border-slate-300 po-bg-white focus:po-border-mpao-lightblue focus:po-ring-0 invalid:po-border-red-400 invalid:po-focus:border-red-600 invalid:focus:po-ring-red-600 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default"
      }), null, 16, us),
      e.message !== null ? (p(), c("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, y(e.message), 9, cs)) : w("", !0),
      e.errorMessage !== null ? (p(), c("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, y(e.errorMessage), 9, ds)) : w("", !0)
    ], 2));
  }
}), ms = /* @__PURE__ */ s("input", {
  type: "checkbox",
  name: "",
  class: "po-hidden shell-sidebar--toggle",
  role: "none",
  id: "sidebar-drawer-toggle",
  checked: "",
  "aria-checked": "true"
}, null, -1), hs = { class: "shell-sidebar" }, bs = { class: "po-grow" }, gs = { class: "shell-sidebar--menu" }, ys = ["onClick", "title"], xs = { class: "shell-sidebar--icon" }, Vs = { class: "shell-sidebar--label po-font-medium" }, ws = { key: 0 }, $s = { class: "shell-sidebar--section po-w-full po-text-left" }, ks = { class: "shell-sidebar--menu sidebar-apps po-shrink-0 po-mb-0 po-border-b po-border-slate-200 po-pb-3" }, _s = ["onClick"], Cs = { class: "shell-sidebar--icon" }, Ss = ["innerHTML"], Es = { class: "shell-sidebar--label po-font-medium" }, Os = {
  key: 1,
  class: "shell-sidebar--menu po-shrink-0 po-mb-0"
}, Ps = ["onClick"], Ns = { class: "shell-sidebar--icon" }, Ls = /* @__PURE__ */ s("span", { class: "shell-sidebar--label po-font-medium" }, "Feedback", -1), Ds = { action: "" }, Ts = /* @__PURE__ */ s("br", null, null, -1), As = { class: "po-p-5" }, Bs = {
  name: "PoSidebarDrawer"
}, Ad = /* @__PURE__ */ Object.assign(Bs, {
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
    }
  },
  emits: ["button-click", "app-click"],
  setup(e, { emit: t }) {
    const o = $(e.apps), l = $(!1);
    function a(d) {
      for (let v = 0; v < o.value.length; v++)
        o.value[v].current && (o.value[v].current = !1);
      o.value[d].current = !0;
    }
    function r() {
      l.value = !0, setTimeout(() => {
        l.value = !1;
      }, 100);
    }
    const i = [
      {
        id: 1,
        title: "Suggestion"
      },
      {
        id: 2,
        title: "Feature request"
      },
      {
        id: 2,
        title: "Other"
      }
    ], u = $(i[0]);
    return (d, v) => (p(), c(I, null, [
      ms,
      s("aside", hs, [
        s("div", bs, [
          (p(!0), c(I, null, W(e.content, (m) => (p(), c("div", null, [
            _(g(Dn), { defaultOpen: !0 }, {
              default: T(({ open: b }) => [
                m.groupName ? (p(), F(g(Tn), {
                  key: 0,
                  class: j([b ? "" : "po-mb-3", "shell-sidebar--section po-w-full po-text-left"])
                }, {
                  default: T(() => [
                    se(y(m.groupName), 1)
                  ]),
                  _: 2
                }, 1032, ["class"])) : w("", !0),
                _(Te, {
                  "enter-active-class": "po-transition po-duration-100 po-ease-out",
                  "enter-from-class": "po-transform po-scale-95 po-opacity-0",
                  "enter-to-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-active-class": "po-transition po-duration-75 po-ease-out",
                  "leave-from-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-to-class": "po-transform po-scale-95 po-opacity-0"
                }, {
                  default: T(() => [
                    _(g(An), null, {
                      default: T(() => [
                        s("ul", gs, [
                          (p(!0), c(I, null, W(m.items, (x) => (p(), c("li", null, [
                            x.disabled ? w("", !0) : (p(), c("button", {
                              key: 0,
                              onClick: (h) => d.$emit("button-click", x.url),
                              class: j([
                                "shell-sidebar--item",
                                { active: x.url == e.currRoute }
                              ]),
                              title: `Go to ${x.label}`
                            }, [
                              s("span", xs, [
                                (p(), F(de(x.icon), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" }))
                              ]),
                              s("span", Vs, y(x.label), 1)
                            ], 10, ys))
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
          ]))), 256))
        ]),
        e.apps !== null ? (p(), c("div", ws, [
          s("h3", $s, y(e.appsLabel), 1),
          s("ul", ks, [
            (p(!0), c(I, null, W(o.value, (m, b) => (p(), c("li", null, [
              s("button", {
                onClick: (x) => {
                  d.$emit("app-click", m.name), a(b);
                },
                class: j(["shell-sidebar--item", [{ active: m.current }]]),
                title: "Go to feedback"
              }, [
                s("span", Cs, [
                  s("span", {
                    innerHTML: m.icon,
                    class: "po-text-slate-600 po-w-5"
                  }, null, 8, Ss)
                ]),
                s("span", Es, y(m.name), 1)
              ], 10, _s)
            ]))), 256))
          ])
        ])) : w("", !0),
        e.hasFeedback ? (p(), c("ul", Os, [
          s("li", null, [
            s("button", {
              onClick: me(r, ["prevent"]),
              class: "shell-sidebar--item",
              title: "Go to feedback"
            }, [
              s("span", Ns, [
                _(g(ml), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" })
              ]),
              Ls
            ], 8, Ps)
          ])
        ])) : w("", !0),
        _(Ga, {
          show: l.value,
          "modal-title": "Feedback"
        }, {
          content: T(() => [
            s("form", Ds, [
              _(ls, {
                label: "Type",
                options: i,
                "pre-selected": u.value,
                modelValue: u.value,
                "onUpdate:modelValue": v[0] || (v[0] = (m) => u.value = m)
              }, null, 8, ["pre-selected", "modelValue"]),
              Ts,
              _(vs, {
                cols: "6",
                rows: "6",
                label: "Description",
                message: ""
              })
            ])
          ]),
          footer: T(() => [
            s("div", As, [
              _(zt, {
                label: "Send",
                type: "button"
              })
            ])
          ]),
          _: 1
        }, 8, ["show"])
      ])
    ], 64));
  }
}), js = {
  key: 0,
  class: "shell-content--action-bar"
}, Rs = { class: "action-bar__nav" }, Is = ["onClick"], Ms = { class: "action-bar__nav_label po-font-medium" }, Fs = {
  key: 0,
  class: "po-shrink-0 po-flex po-space-x-1"
}, zs = /* @__PURE__ */ s("span", { class: "action-bar__nav_label po-font-medium" }, "Go Back", -1), Hs = {
  name: "PoActionBar"
}, Bd = /* @__PURE__ */ Object.assign(Hs, {
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
    return (t, n) => e.items !== null && e.items.length > 0 || e.showBackButton ? (p(), c("section", js, [
      s("nav", Rs, [
        (p(!0), c(I, null, W(e.items, (o) => (p(), c("span", {
          onClick: (l) => t.$emit("button-click", o.label),
          class: j([[
            { "action-bar__nav_highlighted": o.highlighted },
            { "action-bar__nav_danger": o.danger }
          ], "action-bar__nav_link"])
        }, [
          (p(), F(de(o.icon), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" })),
          s("span", Ms, y(o.label), 1)
        ], 10, Is))), 256))
      ]),
      e.showBackButton ? (p(), c("nav", Fs, [
        s("span", {
          onClick: n[0] || (n[0] = (o) => t.$emit("button-click", "back")),
          class: "action-bar__nav_link"
        }, [
          zs,
          (p(), F(de(g(ul)), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" }))
        ])
      ])) : w("", !0)
    ])) : w("", !0);
  }
}), rt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, l] of t)
    n[o] = l;
  return n;
}, qs = {}, Us = { class: "loading-dots po-inline-block po-relative po-w-[40px] po-h-[10px]" }, Gs = /* @__PURE__ */ s("div", { class: "po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-bg-mpao-lightblue po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[8px]" }, null, -1), Ks = /* @__PURE__ */ s("div", { class: "po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-bg-mpao-lightblue po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[8px]" }, null, -1), Ws = /* @__PURE__ */ s("div", { class: "po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-bg-mpao-lightblue po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[17px]" }, null, -1), Zs = /* @__PURE__ */ s("div", { class: "po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-bg-mpao-lightblue po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[26px]" }, null, -1), Ys = [
  Gs,
  Ks,
  Ws,
  Zs
];
function Js(e, t) {
  return p(), c("div", Us, Ys);
}
const Xs = /* @__PURE__ */ rt(qs, [["render", Js]]), Qs = { class: "po-shadow-sm po-rounded-xl po-bg-white po-relative" }, er = {
  key: 0,
  class: "po-absolute po-right-2 po-top-2 po-p-2 po-rounded-lg"
}, tr = {
  key: 1,
  class: "po-text-base po-font-medium po-text-slate-600"
}, or = {
  name: "PoCard"
}, jd = /* @__PURE__ */ Object.assign(or, {
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
    return (t, n) => (p(), c("div", Qs, [
      e.isLoading ? (p(), c("div", er, [
        _(Xs)
      ])) : w("", !0),
      e.title.length > 0 ? (p(), c("h3", tr, y(e.title), 1)) : w("", !0),
      X(t.$slots, "content")
    ]));
  }
}), lr = { class: "po-py-3 po-px-5 po-border-b po-border-slate-200" }, nr = {
  class: "po-flex po-w-full md:po-ml-0",
  action: "#",
  method: "GET"
}, ar = {
  for: "search-field",
  class: "po-sr-only"
}, sr = { class: "po-relative po-w-full po-text-slate-400 focus-within:po-text-mpao-lightblue po-transition-colors po-duration-100 po-ease-in-out" }, rr = { class: "po-pointer-events-none po-absolute po-inset-y-0 po-left-0 po-flex po-items-center" }, ir = ["placeholder", "value"], pr = {
  name: "PoCardSearch"
}, Rd = /* @__PURE__ */ Object.assign(pr, {
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
    return (t, n) => (p(), c("div", lr, [
      s("form", nr, [
        s("label", ar, y(e.placeholder), 1),
        s("div", sr, [
          s("div", rr, [
            _(g(_t), { class: "po-h-5 po-w-5 po-flex-shrink-0" })
          ]),
          s("input", {
            name: "search-field",
            id: "desktop-search-field",
            placeholder: e.placeholder,
            value: e.modelValue,
            onInput: n[0] || (n[0] = (o) => t.$emit("update:modelValue", o.target.value)),
            class: "po-h-full po-w-full po-border-transparent po-py-2 po-pl-8 po-pr-3 po-text-sm po-text-slate-700 po-placeholder-slate-500 focus:po-border-transparent focus:po-placeholder-slate-400 focus:po-outline-none focus:po-ring-0",
            type: "search"
          }, null, 40, ir)
        ])
      ])
    ]));
  }
}), ur = {
  key: 0,
  class: "po-flex po-items-center"
}, cr = { class: "po-text-sm po-font-medium po-text-slate-500 po-pr-2" }, dr = {
  name: "PoPagination"
}, fr = /* @__PURE__ */ Object.assign(dr, {
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
    return (t, n) => e.pagination !== null ? (p(), c("div", ur, [
      s("span", cr, y(e.pagination.label), 1),
      e.pagination.nextLink !== null ? (p(), c("button", {
        key: 0,
        title: "Previous",
        onClick: n[0] || (n[0] = (o) => t.$emit("button-click", "prev")),
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        _(g(gl), { class: "po-w-4 po-stroke-current po-stroke-2" })
      ])) : w("", !0),
      e.pagination.prevLink !== null ? (p(), c("button", {
        key: 1,
        title: "Next",
        onClick: n[1] || (n[1] = (o) => t.$emit("button-click", "next")),
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        _(g(yl), { class: "po-w-4 po-stroke-current po-stroke-2" })
      ])) : w("", !0)
    ])) : w("", !0);
  }
}), vr = { class: "po-grid po-grid-cols-1 lg:po-grid-cols-2 po-gap-5" }, mr = { class: "po-text-xl md:po-text-2xl po-font-semibold po-text-slate-800" }, hr = {
  key: 0,
  class: "po-text-base po-mt-4 po-max-w-md po-pb-5 po-block po-text-slate-500"
}, br = { class: "po-flex po-items-end po-justify-end po-flex-col" }, gr = {
  key: 0,
  class: "po-flex md:po-justify-end po-mb-5"
}, yr = { class: "po-bg-slate-50 po-shadow-sm po-rounded-xl po-py-5 po-px-2 po-divide-x po-divide-slate-200 po-flex" }, xr = ["onClick"], Vr = { class: "po-text-xl po-font-medium po-text-slate-600 po-flex po-items-center po-space-x-1" }, wr = { class: "po-text-xl po-font-medium po-text-slate-600 group-hover:po-text-mpao-lightblue" }, $r = { class: "po-text-sm po-text-slate-500 po-block group-hover:po-text-mpao-lightblue" }, kr = { class: "po-flex po-items-center po-space-x-1 md:po-justify-end" }, _r = {
  key: 2,
  class: "po-border-l po-border-slate-400 po-h-3 po-w-3 po-ml-1"
}, Cr = {
  key: 0,
  class: "po-bg-slate-50 po-p-5 po-mt-5 po-rounded-md po-grid po-grid-cols-1 md:po-grid-cols-3 po-gap-5"
}, Sr = /* @__PURE__ */ s("span", { class: "po-text-xs po-text-slate-500 po-py-5" }, "No filters available at the moment.", -1), Er = {
  name: "PoPageTitle"
}, Id = /* @__PURE__ */ Object.assign(Er, {
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
     *
     */
    filterOn: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["button-click", "pagination-click", "stat-click"],
  setup(e, { emit: t }) {
    const o = e.filterOn ? $(!0) : $(!1);
    function l(r) {
      t("pagination-click", r);
    }
    function a(r) {
      return r.iconColor ? r.iconColor : "po-slate-600";
    }
    return (r, i) => (p(), c("div", null, [
      s("div", vr, [
        s("div", null, [
          s("h1", mr, y(e.label), 1),
          e.description !== "" ? (p(), c("span", hr, y(e.description), 1)) : w("", !0)
        ]),
        s("div", br, [
          e.stats !== null ? (p(), c("div", gr, [
            s("div", yr, [
              (p(!0), c(I, null, W(e.stats, (u) => (p(), c("div", {
                class: "po-px-5 po-cursor-pointer po-group genie-effect",
                onClick: (d) => r.$emit("stat-click", u)
              }, [
                s("span", Vr, [
                  s("span", wr, y(u.value), 1),
                  u.icon ? (p(), c("span", {
                    key: 0,
                    class: j(["po-w-5 po-h-5", a(u)])
                  }, [
                    (p(), F(de(u.icon)))
                  ], 2)) : w("", !0)
                ]),
                s("span", $r, y(u.label), 1)
              ], 8, xr))), 256))
            ])
          ])) : w("", !0),
          s("div", kr, [
            e.showFilter ? (p(), c("button", {
              key: 0,
              title: "Filter",
              onClick: i[0] || (i[0] = (u) => {
                r.$emit("button-click", "filter"), o.value = !g(o);
              }),
              class: j([
                "po-p-2 po-rounded-md hover:po-bg-slate-200 po-transition-colors po-duration-75 po-ease-in-out",
                { "po-text-mpao-orange hover:po-text-mpao-orange": g(o) },
                { "tpo-ext-slate-600 hover:po-text-mpao-blue": !g(o) }
              ])
            }, [
              _(g(wl), { class: "po-w-4 po-stroke-current po-stroke-2" })
            ], 2)) : w("", !0),
            e.showDownload ? (p(), c("button", {
              key: 1,
              title: "Download",
              onClick: i[1] || (i[1] = (u) => r.$emit("button-click", "download")),
              class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
            }, [
              _(g(il), { class: "po-w-4 po-stroke-current po-stroke-2" })
            ])) : w("", !0),
            e.showFilter && e.showPagination || e.showDownload && e.showPagination ? (p(), c("span", _r, " ")) : w("", !0),
            e.showPagination ? (p(), F(fr, {
              key: 3,
              pagination: e.pagination,
              onButtonClick: l
            }, null, 8, ["pagination"])) : w("", !0)
          ])
        ])
      ]),
      _(Te, {
        "enter-active-class": "po-transition po-duration-100 po-ease-out",
        "enter-from-class": "po-transform po-scale-95 po-opacity-0",
        "enter-to-class": "po-transform po-scale-100 po-opacity-100",
        "leave-active-class": "po-transition po-duration-75 po-ease-out",
        "leave-from-class": "po-transform po-scale-100 po-opacity-100",
        "leave-to-class": "po-transform po-scale-95 po-opacity-0"
      }, {
        default: T(() => [
          g(o) ? (p(), c("div", Cr, [
            X(r.$slots, "filters", {}, () => [
              Sr
            ])
          ])) : w("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), Or = { class: "table-responsive po-w-full" }, Pr = { key: 1 }, Nr = ["colspan"], Lr = { class: "po-py-10 po-block po-normal-case" }, Dr = { key: 0 }, Tr = {
  name: "PoTable"
}, Md = /* @__PURE__ */ Object.assign(Tr, {
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
    return (t, n) => (p(), c("table", Or, [
      s("thead", null, [
        s("tr", null, [
          (p(!0), c(I, null, W(e.thead, (o) => (p(), c("th", null, [
            X(t.$slots, "th", qt(Ut(o)))
          ]))), 256))
        ])
      ]),
      s("tbody", null, [
        e.tbody !== null || e.tbody !== null && e.tbody.length !== 0 ? (p(!0), c(I, { key: 0 }, W(e.tbody, (o) => (p(), c("tr", null, [
          X(t.$slots, "td", qt(Ut(o)))
        ]))), 256)) : w("", !0),
        e.tbody == null || e.tbody !== null && e.tbody.length == 0 ? (p(), c("tr", Pr, [
          s("td", {
            colspan: e.thead.length + 1,
            class: "po-text-center"
          }, [
            s("span", Lr, y(e.emptyMessage), 1)
          ], 8, Nr)
        ])) : w("", !0)
      ]),
      t.$slots.tfoot ? (p(), c("tfoot", Dr, [
        s("tr", null, [
          X(t.$slots, "tfoot")
        ])
      ])) : w("", !0)
    ]));
  }
}), Ar = { class: "" }, Br = { class: "po-grow" }, jr = ["onClick"], Rr = {
  name: "PoDescriptionList"
}, Ir = /* @__PURE__ */ Object.assign(Rr, {
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
    return (t, n) => (p(), c("div", null, [
      s("dl", {
        class: j([
          "po-description-list",
          { "po-divide-y po-divide-slate-200": !e.striped },
          { striped: e.striped }
        ])
      }, [
        X(t.$slots, "content", {}, () => [
          (p(!0), c(I, null, W(e.items, (o) => (p(), c("div", null, [
            s("dt", null, y(o.title), 1),
            s("dd", Ar, [
              s("span", Br, y(o.description), 1),
              o.action !== void 0 ? (p(), c("span", {
                key: 0,
                class: "po-shrink-0 po-text-mpao-lightblue hover:po-text-mpao-blue po-transition-colors po-duration-100 po-ease-in-out po-px-2 po-cursor-pointer",
                onClick: (l) => t.$emit("button-click", o.action)
              }, y(o.action), 9, jr)) : w("", !0)
            ])
          ]))), 256))
        ])
      ], 2)
    ]));
  }
}), Mr = ["for"], Fr = ["title"], zr = ["type", "name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], Hr = ["id"], qr = ["id"], Ur = {
  name: "PoInputField"
}, Fd = /* @__PURE__ */ Object.assign(Ur, {
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
    }
  },
  setup(e) {
    const t = e;
    function n() {
      return t.hasError ? "po-border-red-400 focus:po-border-red-600 focus:po-ring-red-600" : t.borderColor;
    }
    return (o, l) => (p(), c("div", {
      class: j(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      s("label", {
        for: e.id,
        class: j([
          "po-text-sm po-font-medium po-flex po-items-center po-space-x-1",
          { "po-text-red-500": e.hasError },
          { "po-text-slate-700": !e.hasError }
        ])
      }, [
        s("span", null, y(e.label), 1),
        e.info !== null ? (p(), c("abbr", {
          key: 0,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          _(g(qo), { class: "po-fill-current" })
        ], 8, Fr)) : w("", !0)
      ], 10, Mr),
      s("input", Ee({
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
      }, o.$attrs, {
        onInput: l[0] || (l[0] = (a) => o.$emit("update:modelValue", a.target.value)),
        class: [
          "po-mt-1 peer po-block po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white focus:po-ring-0 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default",
          n()
        ]
      }), null, 16, zr),
      e.message !== null ? (p(), c("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, y(e.message), 9, Hr)) : w("", !0),
      e.hasError && e.errorMessage !== null ? (p(), c("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-center po-space-x-1",
        id: `${e.id}-error`
      }, [
        _(g(as), { class: "po-fill-current po-w-4" }),
        s("span", null, y(e.errorMessage), 1)
      ], 8, qr)) : w("", !0)
    ], 2));
  }
}), Gr = { class: "po-text-sm po-font-medium po-text-slate-700 peer-focus:po-text-mpao-lightblue peer-invalid:po-text-red-500 peer-invalid:peer-focus:po-text-red-600 po-flex po-items-center po-space-x-1" }, Kr = ["name", "id", "value"], Wr = ["for"], Zr = { class: "po-flex po-items-center po-space-x-1" }, Yr = /* @__PURE__ */ s("span", { class: "po-text-sm" }, "Choose file", -1), Jr = ["id"], Xr = ["id"], Qr = {
  name: "PoInputFile"
}, zd = /* @__PURE__ */ Object.assign(Qr, {
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
    }
  },
  setup(e) {
    return (t, n) => (p(), c("div", {
      class: j(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      s("span", Gr, y(e.label), 1),
      s("input", {
        name: `${e.id}-upload`,
        id: `${e.id}-fileupload`,
        value: e.modelValue,
        type: "file",
        onInput: n[0] || (n[0] = (o) => t.$emit("update:modelValue", o.target.value)),
        class: "po-sr-only po-peer"
      }, null, 40, Kr),
      s("label", {
        for: `${e.id}-fileupload`,
        class: "po-mt-1 po-block po-w-full po-border po-cursor-pointer po-rounded-md po-border-slate-300 po-bg-white peer-focus:po-border-mpao-lightblue invalid:po-border-red-400 invalid:focus:po-border-red-600 invalid:focus:po-ring-red-600 sm:po-text-sm po-p-2"
      }, [
        s("div", Zr, [
          _(g(co), { class: "po-w-4 po-stroke-slate-500" }),
          Yr
        ])
      ], 8, Wr),
      e.message !== null ? (p(), c("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, y(e.message), 9, Jr)) : w("", !0),
      e.errorMessage !== null ? (p(), c("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, y(e.errorMessage), 9, Xr)) : w("", !0)
    ], 2));
  }
}), ei = ["title"], ti = { class: "po-relative po-mt-1" }, oi = {
  name: "PoSelectField"
}, Hd = /* @__PURE__ */ Object.assign(oi, {
  props: {
    /**
     * Model value
     */
    modelValue: {
      type: [Object],
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
    }
  },
  emits: ["update:modelValue", "selected"],
  setup(e, { emit: t }) {
    const n = e, o = $(""), l = $(n.preSelected), a = C(
      () => o.value === "" ? n.list : n.list.filter((r) => r.name.toLowerCase().includes(o.value.toLowerCase()))
    );
    return ne(l, () => {
      t("update:modelValue", l.value);
    }), (r, i) => (p(), F(g(un), {
      as: "div",
      modelValue: l.value,
      "onUpdate:modelValue": i[2] || (i[2] = (u) => l.value = u),
      class: j([{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }])
    }, {
      default: T(() => [
        _(g(cn), { class: "po-text-sm po-font-medium po-text-slate-700 po-flex po-items-center po-space-x-1" }, {
          default: T(() => [
            s("span", null, y(e.label), 1),
            e.info !== null ? (p(), c("abbr", {
              key: 0,
              title: e.info,
              class: "po-w-4 po-text-slate-500"
            }, [
              _(g(Ya), { class: "po-fill-current" })
            ], 8, ei)) : w("", !0)
          ]),
          _: 1
        }),
        s("div", ti, [
          _(g(fn), {
            class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm",
            onChange: i[0] || (i[0] = (u) => o.value = u.target.value),
            "display-value": (u) => u == null ? void 0 : u.name
          }, null, 8, ["display-value"]),
          _(g(dn), { class: "po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-rounded-r-md po-px-2 focus:po-outline-none" }, {
            default: T(() => [
              _(g(Za), {
                class: "po-h-5 po-w-5 po-text-slate-400",
                "aria-hidden": "true"
              })
            ]),
            _: 1
          }),
          g(a).length > 0 ? (p(), F(g(vn), {
            key: 0,
            class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
          }, {
            default: T(() => [
              (p(!0), c(I, null, W(g(a), (u) => (p(), F(g(mn), {
                key: u.id,
                value: u,
                onClick: i[1] || (i[1] = (d) => r.$emit("selected", l.value)),
                as: "template"
              }, {
                default: T(({ active: d, selected: v }) => [
                  s("li", {
                    class: j([
                      "po-relative po-cursor-default po-select-none po-py-2 po-pl-3 po-pr-9",
                      d ? "po-bg-mpao-lightblue po-text-white" : "po-text-slate-900"
                    ])
                  }, [
                    s("span", {
                      class: j(["po-block po-truncate", v && "po-font-semibold"])
                    }, y(u.name), 3),
                    v ? (p(), c("span", {
                      key: 0,
                      class: j([
                        "po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-pr-4",
                        d ? "po-text-white" : "po-text-mpao-lightblue"
                      ])
                    }, [
                      _(g(Wa), {
                        class: "po-h-5 po-w-5",
                        "aria-hidden": "true"
                      })
                    ], 2)) : w("", !0)
                  ], 2)
                ]),
                _: 2
              }, 1032, ["value"]))), 128))
            ]),
            _: 1
          })) : w("", !0)
        ])
      ]),
      _: 1
    }, 8, ["modelValue", "class"]));
  }
}), li = { class: "po-text-sm po-font-medium po-text-slate-700 po-cursor-pointer po-select-none" }, ni = {
  name: "PoToggle"
}, qd = /* @__PURE__ */ Object.assign(ni, {
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
    const n = $(e.modelValue);
    return (o, l) => (p(), F(g(Hn), {
      as: "div",
      class: "po-flex po-items-center"
    }, {
      default: T(() => [
        _(g(qn), {
          modelValue: n.value,
          "onUpdate:modelValue": l[0] || (l[0] = (a) => n.value = a),
          onClick: l[1] || (l[1] = (a) => o.$emit("update:modelValue", !n.value)),
          class: j([
            n.value ? "po-bg-mpao-lightblue" : "po-bg-slate-200",
            "po-relative po-inline-flex po-h-6 po-w-11 po-flex-shrink-0 po-cursor-pointer po-rounded-full po-border-2 po-border-transparent po-transition-colors po-duration-200 po-ease-in-out focus:po-outline-none focus:po-ring-2 focus:po-ring-mpao-lightblue focus:po-ring-offset-2"
          ])
        }, {
          default: T(() => [
            s("span", {
              "aria-hidden": "true",
              class: j([
                n.value ? "po-translate-x-5" : "po-translate-x-0",
                "po-pointer-events-none po-inline-block po-h-5 po-w-5 po-transform po-rounded-full po-bg-white po-shadow po-ring-0 po-transition po-duration-200 po-ease-in-out"
              ])
            }, null, 2)
          ]),
          _: 1
        }, 8, ["modelValue", "class"]),
        _(g(Un), {
          as: "span",
          class: "po-ml-3"
        }, {
          default: T(() => [
            s("span", li, y(e.label), 1)
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), ai = { class: "po-pt-1 po-space-y-1 po-border-r-2 po-border-slate-200 po-relative" }, si = ["onClick"], ri = {
  name: "PoSectionMenu"
}, Ud = /* @__PURE__ */ Object.assign(ri, {
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
    return (t, n) => (p(), c("ul", ai, [
      (p(!0), c(I, null, W(e.menuItems, (o) => (p(), c("li", null, [
        s("span", {
          onClick: (l) => t.$emit("link-click", o.link),
          role: "button",
          class: j([
            "po-relative po-cursor-pointer -po-right-[0.15rem] po-py-1 po-border-r-2 hover:po-border-mpao-lightblue po-transition-colors po-duration-200 po-ease-in-out po-flex po-items-center po-space-x-2",
            {
              "po-border-mpao-lightblue po-text-sm po-text-mpao-lightblue": o.link == e.currPageRoute
            },
            {
              "po-border-slate-200 po-text-sm po-text-slate-600": o.link !== e.currPageRoute
            }
          ])
        }, [
          (p(), F(de(o.icon), { class: "po-w-4 po-h-4 po-stroke-current" })),
          s("span", null, y(o.label), 1)
        ], 10, si)
      ]))), 256))
    ]));
  }
}), ii = { class: "po-relative po-flex po-items-start" }, pi = { class: "po-flex po-h-5 po-items-center" }, ui = ["name", "id", "checked", "disabled", "aria-describedby"], ci = { class: "po-ml-3 po-text-sm" }, di = ["for"], fi = ["id"], vi = { class: "po-sr-only" }, mi = ["id"], hi = {
  name: "PoCheckbox"
}, Gd = /* @__PURE__ */ Object.assign(hi, {
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
    },
    /**
     * True or false if disabled
     */
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(e) {
    return (t, n) => (p(), c("div", ii, [
      s("div", pi, [
        s("input", Ee({
          name: `${e.id}-field`,
          id: e.id,
          checked: e.modelValue,
          disabled: e.disabled,
          "aria-describedby": `${e.id}-description`
        }, t.$attrs, {
          onInput: n[0] || (n[0] = (o) => t.$emit("update:modelValue", o.target.checked)),
          type: "checkbox",
          class: "po-h-4 po-w-4 po-rounded po-border-slate-300 po-text-mpao-lightblue focus:po-ring-mpao-lightblue"
        }), null, 16, ui)
      ]),
      s("div", ci, [
        s("label", {
          for: e.id,
          class: "po-font-medium po-text-slate-600 po-cursor-pointer po-select-none"
        }, y(e.label), 9, di),
        e.message ? (p(), c("span", {
          key: 0,
          id: `${e.id}-description`,
          class: "po-text-slate-500 po-cursor-default"
        }, [
          s("span", vi, y(e.label), 1),
          se(" " + y(e.message), 1)
        ], 8, fi)) : w("", !0)
      ]),
      e.errorMessage !== null ? (p(), c("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, y(e.errorMessage), 9, mi)) : w("", !0)
    ]));
  }
}), bi = { class: "po-grid po-gap-5 po-grid-cols-1 lg:po-grid-cols-2 po-px-6 lg:po-px-8 po-mt-10 po-pb-10" }, gi = { class: "po-flex po-items-start po-space-x-5" }, yi = /* @__PURE__ */ s("img", {
  class: "po-h-10",
  src: "https://pension.gov.mv/asset/image/enlgish_website_logo.svg",
  alt: "Pension Office logo"
}, null, -1), xi = /* @__PURE__ */ s("p", { class: "-po-mt-1 po-text-xs po-text-slate-500" }, " 8th Floor, Allied Building , Chaandhanee Magu, Malé, 20156, Maldives ", -1), Vi = { class: "po-mt-1 po-text-xs po-text-slate-500" }, wi = { class: "po-mt-1 po-text-xs po-text-slate-500 po-flex po-space-x-4" }, $i = {
  href: "https://www.pension.gov.mv",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue"
}, ki = /* @__PURE__ */ s("span", null, "www.pension.gov.mv", -1), _i = {
  href: "mailto:info@pension.gov.mv",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue"
}, Ci = /* @__PURE__ */ s("span", null, "info@pension.gov.mv", -1), Si = {
  href: "tel:1441",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue"
}, Ei = /* @__PURE__ */ s("span", null, "1441", -1), Oi = { class: "po-flex lg:po-items-end po-flex-col" }, Pi = { class: "-po-mt-1 po-text-xs po-text-slate-500 po-flex po-space-x-4" }, Ni = /* @__PURE__ */ s("a", {
  href: "",
  class: "hover:po-text-mpao-lightblue"
}, "Terms & Conditions", -1), Li = /* @__PURE__ */ s("a", {
  href: "",
  class: "hover:po-text-mpao-lightblue"
}, "Privacy Policy", -1), Di = /* @__PURE__ */ s("div", { class: "po-flex po-space-x-2 po-mt-3 lg:po-justify-end" }, [
  /* @__PURE__ */ s("img", {
    class: "po-h-6",
    src: "https://pension.gov.mv/asset/image/iso_logo.jpg",
    alt: ""
  }),
  /* @__PURE__ */ s("img", {
    class: "po-h-6",
    src: "https://pension.gov.mv/asset/image/en-ccc-2020-issa.png",
    alt: ""
  })
], -1), Ti = /* @__PURE__ */ s("div", {
  "aria-live": "assertive",
  class: "po-pointer-events-none po-fixed po-inset-0 po-flex po-items-start po-px-4 po-py-6 sm:po-p-6 po-z-50"
}, [
  /* @__PURE__ */ s("div", {
    class: "po-flex po-w-full po-flex-col po-items-end po-space-y-4 sm:po-items-end po-pt-[55px]",
    id: "po-notifications-alert"
  })
], -1), Ai = {
  name: "PoFooter"
}, Kd = /* @__PURE__ */ Object.assign(Ai, {
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (n, o) => (p(), c("div", null, [
      s("section", bi, [
        s("div", gi, [
          yi,
          s("div", null, [
            xi,
            s("p", Vi, " © " + y(new Date().getFullYear()) + " Pension Office, All Rights Reserved. ", 1),
            s("p", wi, [
              s("a", $i, [
                _(g(ss), { class: "po-w-3 po-h-3 po-fill-current" }),
                ki
              ]),
              s("a", _i, [
                _(g(ns), { class: "po-w-3 po-h-3 po-fill-current" }),
                Ci
              ]),
              s("a", Si, [
                _(g(rs), { class: "po-w-3 po-h-3 po-fill-current" }),
                Ei
              ])
            ])
          ])
        ]),
        s("div", Oi, [
          s("nav", Pi, [
            s("a", {
              href: "#",
              onClick: o[0] || (o[0] = me((l) => n.$emit("button-click", "changelog-button"), ["prevent"])),
              class: "hover:po-text-mpao-lightblue"
            }, "Change logs"),
            Ni,
            Li
          ]),
          Di
        ])
      ]),
      Ti
    ]));
  }
}), Bi = {
  key: 0,
  class: "po-flex po-items-start po-space-x-4 po-p-5 po-bg-red-100 po-rounded-md po-mt-5"
}, ji = { class: "po-pt-1" }, Ri = { class: "po-text-base po-font-medium po-text-red-700" }, Ii = { class: "po-text-sm po-text-red-800 po-list-disc po-ml-5 po-mt-2" }, Mi = {
  key: 1,
  class: "po-flex po-items-start po-space-x-4 po-p-5 po-bg-green-100 po-rounded-md po-mt-5"
}, Fi = { class: "po-pt-1" }, zi = { class: "po-text-base po-font-medium po-text-green-700" }, Hi = {
  name: "PoFormStatusMessage"
}, Wd = /* @__PURE__ */ Object.assign(Hi, {
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
    return (t, n) => e.isError ? (p(), c("div", Bi, [
      _(g(ht), { class: "po-w-8 po-stroke-red-600" }),
      s("div", ji, [
        s("span", Ri, y(e.message), 1),
        s("ul", Ii, [
          (p(!0), c(I, null, W(e.errorList, (o) => (p(), c("li", null, y(o), 1))), 256))
        ])
      ])
    ])) : (p(), c("div", Mi, [
      _(g(bl), { class: "po-w-8 po-stroke-green-600" }),
      s("div", Fi, [
        s("span", zi, y(e.message), 1)
      ])
    ]));
  }
}), qi = { class: "po-bg-white po-relative po-group focus-within:po-ring-2 focus-within:po-ring-inset focus-within:po-ring-indigo-500" }, Ui = { class: "po-block po-p-4 po-transition-colors po-duration-75 po-ease-linear" }, Gi = { class: "po-flex po-items-start po-space-x-2" }, Ki = { class: "po-flex po-items-start po-space-x-1" }, Wi = { class: "po-block po-text-2xl po-font-light po-text-slate-600" }, Zi = {
  key: 0,
  class: "po-text-sm po-text-green-500 po-font-medium po-pt-1"
}, Yi = { class: "po-text-sm po-tracking-wide po-text-slate-500" }, Ji = {
  name: "PoStatsBlock"
}, Zd = /* @__PURE__ */ Object.assign(Ji, {
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
    return (t, n) => (p(), c("div", {
      class: j([
        "po-rounded-lg po-bg-slate-200 po-overflow-hidden po-divide-y po-divide-slate-200 sm:po-divide-y-0 po-grid po-gap-px",
        e.numberOfCols
      ])
    }, [
      (p(!0), c(I, null, W(e.items, (o) => (p(), c("div", qi, [
        s("span", Ui, [
          s("div", Gi, [
            s("div", null, [
              s("span", {
                class: j([
                  "po-inline-flex po-p-2 po-rounded-md",
                  o.bgColor,
                  o.iconColor
                ])
              }, [
                (p(), F(de(o.icon), { class: "po-w-4 po-h-4" }))
              ], 2)
            ]),
            s("div", null, [
              s("div", Ki, [
                s("span", Wi, y(o.value), 1),
                o.diff ? (p(), c("span", Zi, y(o.diff), 1)) : w("", !0)
              ]),
              s("h4", Yi, y(o.label), 1)
            ])
          ])
        ])
      ]))), 256))
    ], 2));
  }
}), Xi = {
  key: 0,
  class: "po-flex po-space-x-3 po-items-start"
}, Qi = { class: "po-flex po-items-center po-space-x-2" }, ep = ["datetime"], tp = { class: "po-text-sm po-font-medium po-text-slate-600" }, op = ["datetime"], lp = { class: "flex" }, np = { class: "po-flex po-pt-3 po-flex-wrap po-max-w-sm" }, ap = ["onClick"], sp = {
  key: 1,
  class: "po-w-full po-text-center"
}, rp = { class: "po-inline-block po-text-sm po-italic po-text-slate-500" }, ip = /* @__PURE__ */ s("span", { class: "po-text-lg po-text-slate-300 po-px-3 po-inline-block" }, "—", -1), pp = ["datetime"], up = {
  name: "PoChatLogItem"
}, Yd = /* @__PURE__ */ Object.assign(up, {
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
    return (t, n) => (p(), c("li", {
      class: j([
        "po-flex po-px-5",
        { "po-justify-end po-items-end po-flex-col": e.item.type === "first" }
      ])
    }, [
      e.item.type !== "message" ? (p(), c("div", Xi, [
        e.item.type !== "first" && e.item.avatar !== "" ? (p(), c("div", {
          key: 0,
          class: "po-shrink-0 po-w-8 po-h-8 po-rounded-full po-p-1 po-bg-contain po-bg-slate-100",
          style: al({ "background-image": `url(${e.item.avatar})` })
        }, null, 4)) : w("", !0),
        s("div", {
          class: j([
            { "po-pt-1": e.item.type !== "first" },
            {
              "po-flex po-justify-end po-items-end po-flex-col": e.item.type === "first"
            }
          ])
        }, [
          s("span", Qi, [
            e.item.type === "first" ? (p(), c("time", {
              key: 0,
              datetime: e.item.time,
              class: "po-text-xs po-text-slate-400"
            }, y(e.item.time_human), 9, ep)) : w("", !0),
            s("span", tp, y(e.item.name), 1),
            e.item.type === "second" ? (p(), c("time", {
              key: 1,
              datetime: e.item.time,
              class: "po-text-xs po-text-slate-400"
            }, y(e.item.time_human), 9, op)) : w("", !0)
          ]),
          s("div", {
            class: j([
              "po-mt-2 po-space-y-1",
              {
                "po-flex po-justify-end po-items-end po-flex-col": e.item.type === "first"
              }
            ])
          }, [
            X(t.$slots, "message", {}, () => [
              (p(!0), c(I, null, W(e.item.message, (o) => (p(), c("div", lp, [
                s("p", {
                  class: j([
                    "po-text-sm po-rounded-xl po-px-4 po-py-2",
                    {
                      "po-bg-slate-100 po-text-slate-600": e.item.type !== "first"
                    },
                    {
                      "po-bg-mpao-lightblue po-text-sky-50": e.item.type === "first"
                    }
                  ])
                }, y(o), 3)
              ]))), 256))
            ]),
            s("div", np, [
              (p(!0), c(I, null, W(e.item.actions, (o) => (p(), c("button", {
                onClick: (l) => t.$emit("button-click", o.label),
                class: "po-appearance-none po-border po-border-mpao-lightblue po-bg-white hover:po-bg-mpao-lightblue po-px-3 po-py-1 po-mb-2 po-mr-2 po-rounded-lg po-text-slate-500 hover:po-text-sky-100 po-transition-colors po-duration-150 po-ease-in-out po-text-sm po-ring-0 po-outline-none"
              }, y(o.label), 9, ap))), 256))
            ])
          ], 2)
        ], 2)
      ])) : w("", !0),
      e.item.type === "message" ? (p(), c("div", sp, [
        (p(!0), c(I, null, W(e.item.message, (o) => (p(), c("p", rp, [
          se(y(o) + " ", 1),
          ip,
          s("time", {
            datetime: e.item.time,
            class: "po-text-xs po-text-slate-400 po-inline-block"
          }, y(e.item.time_human), 9, pp)
        ]))), 256))
      ])) : w("", !0)
    ], 2));
  }
}), cp = {
  key: 0,
  class: "po-pointer-events-auto po-w-full po-max-w-sm po-overflow-hidden po-rounded-lg po-bg-mpao-lightblue po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5"
}, dp = { class: "po-p-4" }, fp = { class: "po-flex po-items-start" }, vp = { class: "po-flex-shrink-0" }, mp = { class: "po-ml-3 po-w-0 po-flex-1 po-pt-0.5" }, hp = { class: "po-text-sm po-font-medium po-text-sky-100" }, bp = { class: "po-mt-1 po-text-sm po-text-sky-300" }, gp = { class: "po-mt-3 po-flex po-space-x-4" }, yp = { class: "po-ml-4 po-flex po-flex-shrink-0" }, xp = /* @__PURE__ */ s("span", { class: "po-sr-only" }, "Close", -1), Vp = {
  name: "PoNotification"
}, Jd = /* @__PURE__ */ Object.assign(Vp, {
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
    const n = e, { show: o } = Ie(n), l = $(!1);
    ne(o, () => {
      l.value = !1, setTimeout(() => {
        l.value = !0;
      }, 100);
    });
    const a = $(!1);
    return ne(l, () => {
      a.value = !1, setTimeout(() => {
        a.value = !0;
      }, 200);
    }), (r, i) => l.value ? (p(), F(uo, {
      key: 0,
      to: "#po-notifications-alert"
    }, [
      _(Te, {
        "enter-active-class": "po-transform po-ease-out po-duration-300 po-transition",
        "enter-from-class": "po-translate-y-2 po-opacity-0 sm:po-translate-y-0 sm:po-translate-x-2",
        "enter-to-class": "po-translate-y-0 po-opacity-100 sm:po-translate-x-0",
        "leave-active-class": "po-transition po-ease-in po-duration-100",
        "leave-from-class": "po-opacity-100",
        "leave-to-class": "po-opacity-0"
      }, {
        default: T(() => [
          a.value ? (p(), c("div", cp, [
            s("div", dp, [
              s("div", fp, [
                s("div", vp, [
                  X(r.$slots, "icon")
                ]),
                s("div", mp, [
                  s("p", hp, y(e.label), 1),
                  s("p", bp, y(e.text), 1),
                  s("div", gp, [
                    s("button", {
                      onClick: i[0] || (i[0] = (u) => r.$emit("button-click", e.buttonLabel)),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-100 hover:po-text-sky-200 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, y(e.buttonLabel), 1),
                    s("button", {
                      onClick: i[1] || (i[1] = (u) => l.value = !1),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-300 hover:po-text-sky-500 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, " Dismiss ")
                  ])
                ]),
                s("div", yp, [
                  s("button", {
                    type: "button",
                    onClick: i[2] || (i[2] = (u) => l.value = !1),
                    class: "po-inline-flex po-rounded-md po-bg-mpao-lightblue po-text-sky-500 hover:po-text-sky-300 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                  }, [
                    xp,
                    _(g(Xa), {
                      class: "po-h-5 po-w-5",
                      "aria-hidden": "true"
                    })
                  ])
                ])
              ])
            ])
          ])) : w("", !0)
        ]),
        _: 3
      })
    ])) : w("", !0);
  }
}), wp = /* @__PURE__ */ s("div", { class: "po-fixed po-inset-0" }, null, -1), $p = { class: "po-fixed po-inset-0 po-overflow-hidden" }, kp = { class: "po-absolute po-inset-0 po-overflow-hidden" }, _p = { class: "po-pointer-events-none po-fixed po-inset-y-0 po-right-0 po-flex po-max-w-full po-pl-10" }, Cp = { class: "po-flex po-h-full po-flex-col po-overflow-y-scroll po-bg-white po-shadow-xl" }, Sp = { class: "po-bg-slate-50 po-py-6 po-px-4 sm:po-px-6" }, Ep = { class: "po-flex po-items-center po-justify-between" }, Op = { class: "po-ml-3 po-flex po-h-7 po-items-center" }, Pp = /* @__PURE__ */ s("span", { class: "po-sr-only" }, "Close panel", -1), Np = {
  key: 0,
  class: "po-mt-1"
}, Lp = { class: "po-text-sm po-text-slate-500" }, Dp = {
  name: "PoSlideover"
}, Xd = /* @__PURE__ */ Object.assign(Dp, {
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
    }
  },
  setup(e) {
    const t = e, { show: n } = Ie(t), o = $(!1);
    return ne(n, () => {
      o.value = !1, setTimeout(() => {
        o.value = !0;
      }, 100);
    }), (l, a) => (p(), F(g(Fe), {
      as: "template",
      show: o.value
    }, {
      default: T(() => [
        _(g(ot), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: a[1] || (a[1] = (r) => o.value = !1)
        }, {
          default: T(() => [
            wp,
            s("div", $p, [
              s("div", kp, [
                s("div", _p, [
                  _(g(Ce), {
                    as: "template",
                    enter: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "enter-from": "po-translate-x-full",
                    "enter-to": "po-translate-x-0",
                    leave: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "leave-from": "po-translate-x-0",
                    "leave-to": "po-translate-x-full"
                  }, {
                    default: T(() => [
                      _(g(lt), {
                        class: j([e.maxWidth, "po-pointer-events-auto po-w-screen"])
                      }, {
                        default: T(() => [
                          s("div", Cp, [
                            s("div", Sp, [
                              s("div", Ep, [
                                _(g(Oo), { class: "po-text-lg po-font-medium po-text-slate-600" }, {
                                  default: T(() => [
                                    se(y(e.label), 1)
                                  ]),
                                  _: 1
                                }),
                                s("div", Op, [
                                  s("button", {
                                    type: "button",
                                    class: "po-rounded-md po-text-slate-500 hover:po-text-mpao-lightblue focus:po-outline-none focus:po-ring-2 focus:po-ring-white",
                                    onClick: a[0] || (a[0] = (r) => o.value = !1)
                                  }, [
                                    Pp,
                                    _(g(fo), {
                                      class: "po-h-6 po-w-6",
                                      "aria-hidden": "true"
                                    })
                                  ])
                                ])
                              ]),
                              e.description ? (p(), c("div", Np, [
                                s("p", Lp, y(e.description), 1)
                              ])) : w("", !0)
                            ]),
                            s("div", {
                              class: j([e.bgColor, "po-relative po-flex-1 po-py-6 po-px-4 sm:po-px-6"])
                            }, [
                              X(l.$slots, "content")
                            ], 2)
                          ])
                        ]),
                        _: 3
                      }, 8, ["class"])
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
}), Tp = /* @__PURE__ */ s("div", { class: "po-fixed po-inset-0 po-bg-gray-500 po-bg-opacity-25 po-transition-opacity" }, null, -1), Ap = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto po-p-4 sm:po-p-6 md:po-p-20" }, Bp = { class: "po-relative" }, jp = {
  key: 0,
  class: "po-max-h-96 scroll-py-3 po-overflow-y-auto po-p-3"
}, Rp = {
  name: "PoCommandPalette"
}, Qd = /* @__PURE__ */ Object.assign(Rp, {
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
    const t = e, n = $(""), { show: o } = Ie(t), l = $(!1);
    ne(o, () => {
      l.value = !1, setTimeout(() => {
        l.value = !0;
      }, 100);
    });
    function a(r) {
      r.ctrlKey && r.key === "b" && (l.value = !0);
    }
    return K(() => {
      window.addEventListener("keyup", a);
    }), sl(() => {
      window.removeEventListener("keyup", a);
    }), (r, i) => (p(), F(g(Fe), {
      show: l.value,
      as: "template",
      onAfterLeave: i[2] || (i[2] = (u) => n.value = ""),
      appear: ""
    }, {
      default: T(() => [
        _(g(ot), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: i[1] || (i[1] = (u) => l.value = !1)
        }, {
          default: T(() => [
            _(g(Ce), {
              as: "template",
              enter: "po-ease-out po-duration-300",
              "enter-from": "po-opacity-0",
              "enter-to": "po-opacity-100",
              leave: "po-ease-in po-duration-200",
              "leave-from": "po-opacity-100",
              "leave-to": "po-opacity-0"
            }, {
              default: T(() => [
                Tp
              ]),
              _: 1
            }),
            s("div", Ap, [
              _(g(Ce), {
                as: "template",
                enter: "po-ease-out po-duration-300",
                "enter-from": "po-opacity-0 po-scale-95",
                "enter-to": "po-opacity-100 po-scale-100",
                leave: "po-ease-in po-duration-200",
                "leave-from": "po-opacity-100 po-scale-100",
                "leave-to": "po-opacity-0 po-scale-95"
              }, {
                default: T(() => [
                  _(g(lt), { class: "po-mx-auto po-max-w-xl po-transform po-divide-y po-divide-gray-100 po-overflow-hidden po-rounded-xl po-bg-white po-shadow-2xl po-ring-1 po-ring-black po-ring-opacity-5 po-transition-all" }, {
                    default: T(() => [
                      s("div", Bp, [
                        _(g(Ja), {
                          class: "po-pointer-events-none po-absolute po-top-3.5 po-left-4 po-h-5 po-w-5 po-text-gray-400",
                          "aria-hidden": "true"
                        }),
                        s("input", {
                          type: "text",
                          name: "",
                          class: "po-h-12 po-w-full po-border-0 po-bg-transparent po-pl-11 po-pr-4 po-text-gray-800 po-placeholder-gray-400 focus:po-ring-0 sm:po-text-sm",
                          placeholder: "Search...",
                          onChange: i[0] || (i[0] = (u) => n.value = u.target.value)
                        }, null, 32)
                      ]),
                      e.showContent ? (p(), c("div", jp, [
                        X(r.$slots, "content")
                      ])) : w("", !0)
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
}), Ip = /* @__PURE__ */ s("div", { class: "po-fixed po-inset-0 po-bg-gray-500 po-bg-opacity-75 po-transition-opacity" }, null, -1), Mp = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto" }, Fp = { class: "po-flex po-min-h-full po-items-start po-justify-center po-p-4 po-text-center sm:po-p-0" }, zp = { class: "po-p-5" }, Hp = { class: "po-text-center" }, qp = {
  key: 0,
  class: "po-mt-2"
}, Up = { class: "po-text-sm po-text-gray-500" }, Gp = { class: "po-border-t po-border-slate-200 po-flex po-divide-x po-divide-slate-200" }, Kp = {
  name: "PoAlert"
}, e1 = /* @__PURE__ */ Object.assign(Kp, {
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
    const t = e, { show: n } = Ie(t), o = $(!1);
    return ne(n, () => {
      o.value = !1, setTimeout(() => {
        o.value = !0;
      }, 100);
    }), (l, a) => (p(), F(g(Fe), {
      as: "template",
      show: o.value
    }, {
      default: T(() => [
        _(g(ot), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: a[2] || (a[2] = (r) => o.value = !1)
        }, {
          default: T(() => [
            _(g(Ce), {
              as: "template",
              enter: "po-ease-out po-duration-300",
              "enter-from": "po-opacity-0",
              "enter-to": "po-opacity-100",
              leave: "po-ease-in po-duration-200",
              "leave-from": "po-opacity-100",
              "leave-to": "po-opacity-0"
            }, {
              default: T(() => [
                Ip
              ]),
              _: 1
            }),
            s("div", Mp, [
              s("div", Fp, [
                _(g(Ce), {
                  as: "template",
                  enter: "po-ease-out po-duration-300",
                  "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                  "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                  leave: "po-ease-in po-duration-200",
                  "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                  "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                }, {
                  default: T(() => [
                    _(g(lt), { class: "po-relative po-transform po-overflow-hidden po-rounded-lg po-bg-white po-text-left po-shadow-xl po-transition-all sm:po-my-8 sm:po-w-full sm:po-max-w-sm" }, {
                      default: T(() => [
                        s("div", zp, [
                          s("div", Hp, [
                            _(g(Oo), {
                              as: "h3",
                              class: "po-text-lg po-font-medium po-leading-6 po-text-gray-900"
                            }, {
                              default: T(() => [
                                se(y(e.alertTitle), 1)
                              ]),
                              _: 1
                            }),
                            e.alertDescription !== "" ? (p(), c("div", qp, [
                              s("p", Up, y(e.alertDescription), 1)
                            ])) : w("", !0)
                          ])
                        ]),
                        s("div", Gp, [
                          s("button", {
                            onClick: a[0] || (a[0] = (r) => o.value = !1),
                            class: "po-text-sm po-bg-white po-text-slate-500 hover:po-bg-slate-50 po-transition-colors po-duration-100 po-ease-out po-font-medium po-py-3 po-px-5 po-w-1/2 focus:po-ring-0"
                          }, y(e.cancelBtnLabel), 1),
                          s("button", {
                            onClick: a[1] || (a[1] = (r) => {
                              l.$emit("button-click", "ok"), o.value = !1;
                            }),
                            class: "po-text-sm po-bg-white po-text-mpao-lightblue hover:po-bg-slate-50 po-transition-colors po-duration-100 po-ease-out po-font-medium po-py-3 po-px-5 po-w-1/2 focus:po-ring-0"
                          }, y(e.okBtnLabel), 1)
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
}), Wp = {
  key: 0,
  class: "po-col-span-2 po-relative po-mt-5"
}, Zp = /* @__PURE__ */ s("span", {
  class: "po-absolute po-top-0 po-left-1 po--ml-px po-h-[calc(100%-7px)] po-w-0.5 po-bg-gray-200",
  "aria-hidden": "true"
}, null, -1), Yp = { class: "po-relative po-space-y-5" }, Jp = { class: "po-flex po-space-x-2 po-items-start" }, Xp = { class: "log-item" }, Qp = { key: 0 }, eu = {
  key: 0,
  class: "po-text-slate-500 po-text-xs"
}, tu = {
  key: 1,
  class: "po-text-center po-py-10"
}, ou = { class: "po-text-sm po-text-slate-500" }, lu = {
  name: "PoLogs"
}, t1 = /* @__PURE__ */ Object.assign(lu, {
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
    return (t, n) => (p(), c("div", null, [
      e.items && e.items.length > 0 ? (p(), c("div", Wp, [
        Zp,
        s("div", Yp, [
          (p(!0), c(I, null, W(e.items, (o, l) => (p(), c("div", Jp, [
            s("p", {
              class: j([
                "po-rounded-full po-w-2 po-h-2 border-1 po-border-white po-shrink-0",
                { "po-bg-mpao-orange": l !== e.items.length - 1 },
                ,
                { "po-bg-slate-400": l == e.items.length - 1 }
              ])
            }, null, 2),
            s("div", Xp, [
              s("span", null, [
                se(y(o.label) + " on " + y(o.date) + " " + y(o.by && o.by !== "" ? "by" : "") + " ", 1),
                o.by && o.by !== "" ? (p(), c("span", Qp, y(o.by), 1)) : w("", !0)
              ]),
              o.description && o.description !== "" ? (p(), c("blockquote", eu, ' "' + y(o.description) + '" ', 1)) : w("", !0)
            ])
          ]))), 256))
        ])
      ])) : (p(), c("div", tu, [
        s("span", ou, y(e.emptyLabel), 1)
      ]))
    ]));
  }
}), nu = {
  key: 0,
  role: "list",
  class: "po-divide-y po-divide-gray-200 po-rounded-md po-border po-border-gray-200 po-mt-5"
}, au = { class: "po-flex po-items-center po-justify-between po-py-3 po-pl-3 po-pr-4 po-text-sm" }, su = { class: "po-flex po-w-0 po-flex-1 po-items-center" }, ru = { class: "po-ml-2 po-w-0 po-flex-1 po-truncate" }, iu = { class: "po-ml-4 po-flex-shrink-0" }, pu = ["onClick"], uu = {
  key: 1,
  class: "po-py-10"
}, cu = { class: "po-text-sm po-text-slate-500" }, du = {
  name: "PoDownloadFileList"
}, o1 = /* @__PURE__ */ Object.assign(du, {
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
    }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (n, o) => (p(), c("div", null, [
      e.files && e.files.length > 0 ? (p(), c("ul", nu, [
        (p(!0), c(I, null, W(e.files, (l) => (p(), c("li", au, [
          s("div", su, [
            _(g(co), {
              class: "po-h-5 po-w-5 po-flex-shrink-0 po-text-gray-400",
              "aria-hidden": "true"
            }),
            s("span", ru, y(l.label), 1)
          ]),
          s("div", iu, [
            s("a", {
              href: "#",
              onClick: me((a) => n.$emit("button-click", l.label), ["prevent"]),
              class: "po-font-medium po-text-mpao-lightblue hover:po-text-indigo-500"
            }, y(e.linkLabel), 9, pu)
          ])
        ]))), 256))
      ])) : (p(), c("div", uu, [
        s("span", cu, y(e.emptyLabel), 1)
      ]))
    ]));
  }
}), fu = {
  name: "PoContentArea"
}, vu = { class: "shell-content--area" };
function mu(e, t, n, o, l, a) {
  return p(), c("section", vu, [
    X(e.$slots, "default")
  ]);
}
const l1 = /* @__PURE__ */ rt(fu, [["render", mu]]), hu = {
  name: "AnimatedLogo"
}, bu = /* @__PURE__ */ rl('<div><svg class="po-stroke-mpao-blue po-w-16 animated-logo" viewBox="0 0 62 55" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.76292 17.8572L7.7 17.9704V18.0682C6.87397 19.526 6.23618 20.649 5.58241 21.4779C4.93472 22.299 4.30505 22.7864 3.51417 23.0053C3.46261 23.0112 3.41718 23.0206 3.39088 23.026C3.35663 23.0331 3.31491 23.0425 3.27694 23.0511C3.25988 23.055 3.24357 23.0587 3.22903 23.0619C3.1106 23.0882 3.03712 23.1 3 23.1H2.93844L2.89561 23.1107L15.9876 0.600006H19.1308C17.2397 1.92747 16.1556 3.83665 15.5371 5.73245C14.8359 7.88203 14.7198 10.0514 14.7027 11.4258C13.1737 11.6033 11.0729 12.4434 9.38038 15.128C8.77075 16.0431 8.26353 16.9561 7.76713 17.8496L7.76292 17.8572Z"></path><path d="M48.1818 11.3241C48.047 8.39742 47.5389 6.05982 46.5472 4.07639C45.8153 2.61266 44.8203 1.39271 43.5945 0.5H46.8113L59.8583 23.0959C59.8303 23.0912 59.7891 23.0819 59.7213 23.0649C59.7166 23.0638 59.7117 23.0625 59.7066 23.0612C59.6302 23.042 59.5099 23.0118 59.3765 23.0027C58.59 22.7825 57.9627 22.2958 57.3176 21.4779C56.6586 20.6423 56.0158 19.508 55.1801 18.0331L55.1413 17.9647C54.8861 17.4553 54.6068 16.973 54.3362 16.5054L54.3327 16.4995C54.0565 16.0225 53.7893 15.5605 53.5472 15.0764L53.5333 15.0485L53.516 15.0226C51.7283 12.3411 49.7115 11.4988 48.1818 11.3241Z"></path><path d="M9.28397 39.6773C11.0717 42.3589 13.0885 43.2011 14.6182 43.3759C14.753 46.3026 15.2611 48.6402 16.2528 50.6236C16.9991 52.1163 17.9653 53.2992 19.1863 54.2H15.7881L2.74125 31.699C2.76073 31.6996 2.78031 31.7 2.8 31.7C2.89335 31.7 2.97474 31.7149 3.07903 31.7381C3.08854 31.7402 3.09897 31.7426 3.11023 31.7452C3.18647 31.7626 3.30082 31.7888 3.42319 31.7972C4.20888 32.0178 4.86081 32.5271 5.52047 33.3603C6.20216 34.2214 6.85697 35.382 7.66164 36.8405C8.26116 37.9396 8.76739 38.8512 9.276 39.665L9.27989 39.6712L9.28397 39.6773Z"></path><path d="M55.124 36.865L55.1331 36.8504L55.1412 36.8353C55.9431 35.3316 56.5997 34.1683 57.2697 33.307C57.9146 32.4778 58.5471 31.9616 59.2949 31.6961C59.4179 31.6866 59.5418 31.6616 59.6287 31.6442C59.6354 31.6428 59.6418 31.6415 59.6481 31.6403C59.719 31.6261 59.772 31.616 59.8123 31.6095L46.8115 54.1H43.8753C45.7283 52.7465 46.7867 50.8277 47.3889 48.9394C48.064 46.8226 48.1795 44.7058 48.1971 43.3742C49.7262 43.1967 51.8271 42.3567 53.5196 39.6719C53.8327 39.2016 54.1164 38.6849 54.3777 38.1995C54.4112 38.1375 54.4442 38.076 54.4768 38.0152C54.7049 37.5906 54.9148 37.1996 55.124 36.865Z"></path><path d="M32.2763 51.5708L32.2653 51.5582L32.2536 51.5465C32.0661 51.359 31.7413 51.2 31.4 51.2C31.3949 51.2 31.3894 51.2 31.3835 51.2C31.2956 51.1998 31.1323 51.1993 30.9751 51.2442C30.7932 51.2962 30.6132 51.4082 30.4904 51.6086C29.1941 53.0706 27.544 53.8 25.5 53.8C22.8209 53.8 20.828 52.9218 19.4532 51.2005C18.1148 49.5247 17.3123 46.988 17.1201 43.5109C18.6883 43.1579 19.8601 42.2673 20.5004 41.6896C20.5136 44.8271 20.8579 46.8152 21.6737 48.0181C22.5558 49.319 23.9045 49.6 25.5 49.6C27.4335 49.6 28.5187 48.2893 29.0946 46.9901C29.6604 45.7138 29.7966 44.3347 29.7999 43.8193C29.8943 42.5846 30.6602 41.8 31.5 41.8H31.5778C32.4558 41.8842 33.2 42.7102 33.2 43.9C33.2 45.6119 33.5619 47.0065 34.2986 47.9982C35.0485 49.0077 36.1459 49.544 37.4792 49.5996L37.4896 49.6H37.5C39.2304 49.6 40.5973 49.3258 41.4454 48.0081C41.849 47.3811 42.1078 46.5565 42.2692 45.5056C42.4311 44.4518 42.5 43.1353 42.5 41.5V24.4455L45.9 21.8182V41.5C45.9 41.4958 45.8996 41.5001 45.8978 41.519C45.8959 41.5381 45.8927 41.5719 45.887 41.6267L45.8842 41.6541C45.8752 41.7406 45.8636 41.8524 45.8521 41.9797C45.8264 42.2614 45.8 42.6283 45.8 43V43.9V43.9029V43.9059V43.9088V43.9117V43.9146V43.9175V43.9205V43.9234V43.9263V43.9292V43.9321V43.935V43.9379V43.9408V43.9437V43.9466V43.9495V43.9524V43.9553V43.9581V43.961V43.9639V43.9668V43.9696V43.9725V43.9754V43.9783V43.9811V43.984V43.9868V43.9897V43.9926V43.9954V43.9983V44.0011V44.004V44.0068V44.0096V44.0125V44.0153V44.0181V44.021V44.0238V44.0266V44.0295V44.0323V44.0351V44.0379V44.0407V44.0435V44.0463V44.0492V44.052V44.0548V44.0576V44.0603V44.0631V44.0659V44.0687V44.0715V44.0743V44.0771V44.0798V44.0826V44.0854V44.0882V44.0909V44.0937V44.0965V44.0992V44.102V44.1047V44.1075V44.1102V44.113V44.1157V44.1185V44.1212V44.1239V44.1267V44.1294V44.1321V44.1349V44.1376V44.1403V44.143V44.1457V44.1484V44.1512V44.1539V44.1566V44.1593V44.162V44.1647V44.1674V44.17V44.1727V44.1754V44.1781V44.1808V44.1835V44.1861V44.1888V44.1915V44.1941V44.1968V44.1995V44.2021V44.2048V44.2074V44.2101V44.2127V44.2154V44.218V44.2207V44.2233V44.2259V44.2285V44.2312V44.2338V44.2364V44.239V44.2417V44.2443V44.2469V44.2495V44.2521V44.2547V44.2573V44.2599V44.2625V44.2651V44.2677V44.2702V44.2728V44.2754V44.278V44.2806V44.2831V44.2857V44.2882V44.2908V44.2934V44.2959V44.2985V44.301V44.3036V44.3061V44.3087V44.3112V44.3137V44.3163V44.3188V44.3213V44.3238V44.3264V44.3289V44.3314V44.3339V44.3364V44.3389V44.3414V44.3439V44.3464V44.3489V44.3514V44.3539V44.3564V44.3588V44.3613V44.3638V44.3663V44.3687V44.3712V44.3737V44.3761V44.3786V44.381V44.3835V44.3859V44.3884V44.3908V44.3932V44.3957V44.3981V44.4005V44.403V44.4054V44.4078V44.4102V44.4126V44.415V44.4174V44.4199V44.4223V44.4247V44.427V44.4294V44.4318V44.4342V44.4366V44.439V44.4413V44.4437V44.4461V44.4484V44.4508V44.4532V44.4555V44.4579V44.4602V44.4626V44.4649V44.4672V44.4696V44.4719V44.4742V44.4766V44.4789V44.4812V44.4835V44.4858V44.4882V44.4905V44.4928V44.4951V44.4974V44.4997V44.5019V44.5042V44.5065V44.5088V44.5111V44.5133V44.5156V44.5179V44.5201V44.5224V44.5247V44.5269V44.5292V44.5314V44.5337V44.5359V44.5381V44.5404V44.5426V44.5448V44.547V44.5493V44.5515V44.5537V44.5559V44.5581V44.5603V44.5625V44.5647V44.5669V44.5691V44.5713V44.5734V44.5756V44.5778V44.58V44.5821V44.5843V44.5865V44.5886V44.5908V44.5929V44.5951V44.5972V44.5994V44.6015V44.6036V44.6058V44.6079V44.61V44.6121V44.6142V44.6164V44.6185V44.6206V44.6227V44.6248V44.6269V44.6289V44.631V44.6331V44.6352V44.6373V44.6393V44.6414V44.6435V44.6455V44.6476V44.6497V44.6517V44.6538V44.6558V44.6578V44.6599V44.6619V44.6639V44.666V44.668V44.67V44.672V44.674V44.676V44.678V44.68V44.682V44.684V44.686V44.688V44.69V44.692V44.6939V44.6959V44.6979V44.6998V44.7018V44.7037V44.7057V44.7076V44.7096V44.7115V44.7135V44.7154V44.7173V44.7193V44.7212V44.7231V44.725V44.7269V44.7288V44.7307V44.7326V44.7345V44.7364V44.7383V44.7402V44.7421V44.7439V44.7458V44.7477V44.7495V44.7514V44.7533V44.7551V44.757V44.7588V44.7606V44.7625V44.7643V44.7661V44.768V44.7698V44.7716V44.7734V44.7752V44.777V44.7788V44.7806V44.7824V44.7842V44.786V44.7878V44.7896V44.7914V44.7931V44.7949V44.7967V44.7984V44.8002V44.8019V44.8037V44.8054V44.8071V44.8089V44.8106V44.8123V44.8141V44.8158V44.8175V44.8192V44.8209V44.8226V44.8243V44.826V44.8277V44.8294V44.8311V44.8328V44.8344V44.8361V44.8378V44.8394V44.8411V44.8427V44.8444V44.846V44.8477V44.8493V44.851V44.8526V44.8542V44.8558V44.8575V44.8591V44.8607V44.8623V44.8639V44.8655V44.8671V44.8687V44.8702V44.8718V44.8734V44.875V44.8765V44.8781V44.8797V44.8812V44.8828V44.8843V44.8859V44.8874V44.8889V44.8905V44.892V44.8935V44.895V44.8965V44.898V44.8996V44.9011V44.9025V44.904V44.9055V44.907V44.9085V44.91V44.9114V44.9129V44.9144V44.9158V44.9173V44.9187V44.9202V44.9216V44.923V44.9245V44.9259V44.9273V44.9288V44.9302V44.9316V44.933V44.9344V44.9358V44.9372V44.9386V44.9399V44.9413V44.9427V44.9441V44.9454V44.9468V44.9482V44.9495V44.9509V44.9522V44.9535V44.9549V44.9562V44.9575V44.9589V44.9602V44.9615V44.9628V44.9641V44.9654V44.9667V44.968V44.9693V44.9706V44.9718V44.9731V44.9744V44.9757V44.9769V44.9782V44.9794V44.9807V44.9819V44.9832V44.9844V44.9856V44.9868V44.9881V44.9893V44.9905V44.9917V44.9929V44.9941V44.9953V44.9965V44.9977V44.9988V45V45.1V45.1006V45.1012V45.1017V45.1023V45.1029V45.1035V45.104V45.1046V45.1052V45.1057V45.1063V45.1069V45.1074V45.108V45.1085V45.1091V45.1096V45.1102V45.1107V45.1113V45.1118V45.1123V45.1129V45.1134V45.1139V45.1145V45.115V45.1155V45.1161V45.1166V45.1171V45.1176V45.1181V45.1186V45.1191V45.1196V45.1202V45.1207V45.1212V45.1217V45.1222V45.1226V45.1231V45.1236V45.1241V45.1246V45.1251V45.1256V45.1261V45.1265V45.127V45.1275V45.128V45.1284V45.1289V45.1294V45.1298V45.1303V45.1307V45.1312V45.1317V45.1321V45.1326V45.133V45.1335V45.1339V45.1343V45.1348V45.1352V45.1357V45.1361V45.1365V45.137V45.1374V45.1378V45.1383V45.1387V45.1391V45.1395V45.1399V45.1404V45.1408V45.1412V45.1416V45.142V45.1424V45.1428V45.1432V45.1436V45.144V45.1444V45.1448V45.1452V45.1456V45.146V45.1464V45.1468V45.1471V45.1475V45.1479V45.1483V45.1487V45.149V45.1494V45.1498V45.1501V45.1505V45.1509V45.1512V45.1516V45.152V45.1523V45.1527V45.153V45.1534V45.1537V45.1541V45.1544V45.1548V45.1551V45.1555V45.1558V45.1561V45.1565V45.1568V45.1572V45.1575V45.1578V45.1581V45.1585V45.1588V45.1591V45.1594V45.1598V45.1601V45.1604V45.1607V45.161V45.1613V45.1616V45.162V45.1623V45.1626V45.1629V45.1632V45.1635V45.1638V45.1641V45.1644V45.1647V45.165V45.1652V45.1655V45.1658V45.1661V45.1664V45.1667V45.167V45.1672V45.1675V45.1678V45.1681V45.1683V45.1686V45.1689V45.1691V45.1694V45.1697V45.1699V45.1702V45.1705V45.1707V45.171V45.1712V45.1715V45.1717V45.172V45.1722V45.1725V45.1727V45.173V45.1732V45.1735V45.1737V45.174V45.1742V45.1744V45.1747V45.1749V45.1751V45.1753C45.5039 48.1507 44.6544 50.2924 43.3031 51.6899C41.9582 53.0807 40.0524 53.8 37.5 53.8C35.4235 53.8 33.5685 53.0476 32.2763 51.5708Z"></path><path d="M22.8 23.2538V18.2178L29.3909 23.307L26.1939 25.8645L22.8 23.2538Z"></path><path d="M16.7 20.2V19.7H16.5V18.8V10.858C16.5042 10.8478 16.5096 10.8348 16.5142 10.8232C16.5488 10.7368 16.5963 10.6012 16.5998 10.4209C16.8474 7.03069 17.6799 4.61275 19.0737 3.04468C20.4543 1.49155 22.4511 0.699997 25.2 0.699997C27.2568 0.699997 29.1263 1.53906 30.5352 3.04197L30.5407 3.04785L30.5464 3.05355C30.7614 3.26854 31.0508 3.35 31.3 3.35C31.5492 3.35 31.8386 3.26854 32.0536 3.05355L32.0646 3.04251L32.0749 3.03081C33.4779 1.4408 35.1402 0.699997 37.3 0.699997C40.0769 0.699997 42.1441 1.62655 43.5571 3.42174C44.934 5.17104 45.7393 7.80743 45.886 11.3874C44.0184 11.8028 42.6345 12.9721 42.1 13.4936V13.2C42.1 10.0544 41.7835 8.06299 40.9925 6.86242C40.1497 5.58316 38.8495 5.3 37.3 5.3C35.4114 5.3 34.3769 6.59229 33.8399 7.85422C33.3055 9.11015 33.2 10.457 33.2 10.9C33.2 12.2634 32.2859 13.1 31.3 13.1H31.2204C30.2388 13.0141 29.4 12.0845 29.4 10.8C29.4 9.19015 29.0639 7.84653 28.3661 6.89234C27.6525 5.91665 26.5974 5.4 25.3 5.4C23.6267 5.4 22.3017 5.64608 21.4896 6.93319C21.1052 7.5425 20.863 8.34586 20.7131 9.3714C20.5626 10.4004 20.5 11.6909 20.5 13.3V30.4541L16.7 33.3833V20.2Z"></path><path d="M40.1 31.5462V36.5799L33.4225 31.4049L36.6974 28.9288L40.1 31.5462Z"></path><mask id="path-9-inside-1" fill="white"><path d="M58.7 30.1C58.9 30 59.5 30 59.8 29.9C60.9 29.8 61.8 28.7 61.8 27.4C61.8 26.1 60.9 25 59.8 24.9C59.7 24.9 59.5 24.9 59.4 24.8C59.3 24.8 59.2 24.8 59.1 24.7C59.1 24.7 59.1 24.7 59 24.7C58.6 24.6 58.1 24.4 57.7 24.1C57.7 24.1 57.7 24.1 57.6 24C56.1 23.1 55 21.2 53.6 18.7C53.1 17.8 52.6 16.9 52 16C50.5 13.7 48.9 13.1 47.8 13C47.7 13 47.6 13 47.5 13H47.3C47.1 13 46.9 13 46.9 13C45.2 13.2 44 14.3 43.6 14.8L25.2 29.1C25.2 29.1 25.2 29.1 25.1 29.2L23 30.8L16.8 35.5L16.4 35.9C16.4 35.9 16.4 35.9 16.3 35.9C16 36.1 15.7 36.3 15.4 36.3C15.1 36.3 14.9 36.2 14.7 36.1C14.5 35.9 14.4 35.8 14.3 35.5C13.9 34.8 13.4 34.1 13 33.3V33.1C12.2 31.7 11.3 30 10.1 28.6C10.1 28.6 10.1 28.6 10.1 28.5L10 28.4C9.9 28.3 9.9 28.3 9.8 28.2C9.8 28.2 9.8 28.2 9.7 28.1L9.2 27.5C9.2 27.5 9.2 27.5 9.1 27.5C9 27.3 9 27.1 9.1 27L9.6 26.5C10.9 25 11.9 23.2 12.8 21.6V21.5C13.2 20.7 13.7 19.9 14.2 19.1C14.4 18.8 14.6 18.6 14.7 18.5V13.1C13.6 13.2 12 13.9 10.6 16C10 16.9 9.5 17.8 9 18.7C7.8 20.9 6.8 22.5 5.6 23.5C4.8 24.1 4 24.4 3.5 24.6C3.5 24.6 3.5 24.6 3.4 24.6C3.3 24.6 3.1 24.7 3 24.7C2.9 24.7 2.9 24.7 2.8 24.7C2.7 24.7 2.7 24.7 2.7 24.7H2.6H2.5C2.3 24.7 2.2 24.8 2.1 24.8C2 24.8 2 24.8 2 24.9C1.7 25.1 1.4 25.3 1.2 25.6C1.2 25.7 1.1 25.7 1.1 25.8V25.9L0.999997 26.1C0.999997 26.2 0.999997 26.2 0.899997 26.3C0.899997 26.4 0.899997 26.4 0.799997 26.5C0.799997 26.6 0.799997 26.7 0.699997 26.7C0.699997 26.8 0.699997 26.9 0.699997 26.9C0.699997 27 0.699997 27.1 0.699997 27.1C0.699997 27.2 0.699997 27.2 0.699997 27.3C0.699997 27.4 0.699997 27.5 0.699997 27.5C0.699997 27.6 0.699997 27.7 0.699997 27.7C0.699997 27.8 0.699997 27.9 0.799997 27.9V28V28.1C0.799997 28.2 0.799997 28.2 0.899997 28.2L0.999997 28.4C0.999997 28.5 1.1 28.5 1.1 28.5C1.1 28.5 1.1 28.5 1.1 28.6C1.2 28.7 1.3 28.9 1.5 29C1.6 29 1.6 29.1 1.7 29.1C1.7 29.1 1.8 29.1 1.8 29.2C1.8 29.2 1.8 29.2 1.9 29.2C2 29.3 2.2 29.3 2.3 29.4C2.4 29.4 2.4 29.4 2.4 29.4L2.9 29.5C3.1 29.5 3.2 29.6 3.4 29.6C4.2 29.8 4.7 30.2 4.8 30.2C6.4 31.2 7.5 33 8.9 35.5C9.5 36.6 10 37.4 10.5 38.2C11.9 40.3 13.4 41 14.4 41.1C14.5 41.1 14.5 41.1 14.6 41.1C14.7 41.1 14.8 41.1 14.8 41.1C15 41.1 15.2 41.1 15.5 41.1H15.6C17.2 40.8 18.5 39.8 18.9 39.3L19 39.2L19.8 38.6C19.8 38.6 19.9 38.5 20 38.5L30.2 30.6L41.3 22L46.5 18H46.6C46.7 18 46.9 17.9 47 17.9C47.4 17.9 47.8 18.1 48.1 18.6L48.5 19.2C48.8 19.7 49.2 20.3 49.5 20.9V21C50.1 22.1 50.8 23.4 51.7 24.6C51.7 24.6 51.7 24.7 51.8 24.7C52.1 25.1 52.4 25.5 52.7 25.8C52.7 25.8 52.8 25.8 52.8 25.9C53 26.1 53.1 26.3 53.3 26.4C53.4 26.5 53.4 26.7 53.3 26.9C52 28.5 50.4 31.1 49.6 32.4V32.5C49.2 33.2 48.7 34.1 48.2 34.9C48 35.2 47.8 35.4 47.7 35.5V40.9C48.8 40.8 50.4 40.1 51.8 37.9C52.4 37 52.9 36 53.4 35.2C53.5 35 53.7 34.7 53.8 34.5C55.2 33 56.4 30.9 58.7 30.1Z"></path></mask><path d="M58.7 30.1C58.9 30 59.5 30 59.8 29.9C60.9 29.8 61.8 28.7 61.8 27.4C61.8 26.1 60.9 25 59.8 24.9C59.7 24.9 59.5 24.9 59.4 24.8C59.3 24.8 59.2 24.8 59.1 24.7C59.1 24.7 59.1 24.7 59 24.7C58.6 24.6 58.1 24.4 57.7 24.1C57.7 24.1 57.7 24.1 57.6 24C56.1 23.1 55 21.2 53.6 18.7C53.1 17.8 52.6 16.9 52 16C50.5 13.7 48.9 13.1 47.8 13C47.7 13 47.6 13 47.5 13H47.3C47.1 13 46.9 13 46.9 13C45.2 13.2 44 14.3 43.6 14.8L25.2 29.1C25.2 29.1 25.2 29.1 25.1 29.2L23 30.8L16.8 35.5L16.4 35.9C16.4 35.9 16.4 35.9 16.3 35.9C16 36.1 15.7 36.3 15.4 36.3C15.1 36.3 14.9 36.2 14.7 36.1C14.5 35.9 14.4 35.8 14.3 35.5C13.9 34.8 13.4 34.1 13 33.3V33.1C12.2 31.7 11.3 30 10.1 28.6C10.1 28.6 10.1 28.6 10.1 28.5L10 28.4C9.9 28.3 9.9 28.3 9.8 28.2C9.8 28.2 9.8 28.2 9.7 28.1L9.2 27.5C9.2 27.5 9.2 27.5 9.1 27.5C9 27.3 9 27.1 9.1 27L9.6 26.5C10.9 25 11.9 23.2 12.8 21.6V21.5C13.2 20.7 13.7 19.9 14.2 19.1C14.4 18.8 14.6 18.6 14.7 18.5V13.1C13.6 13.2 12 13.9 10.6 16C10 16.9 9.5 17.8 9 18.7C7.8 20.9 6.8 22.5 5.6 23.5C4.8 24.1 4 24.4 3.5 24.6C3.5 24.6 3.5 24.6 3.4 24.6C3.3 24.6 3.1 24.7 3 24.7C2.9 24.7 2.9 24.7 2.8 24.7C2.7 24.7 2.7 24.7 2.7 24.7H2.6H2.5C2.3 24.7 2.2 24.8 2.1 24.8C2 24.8 2 24.8 2 24.9C1.7 25.1 1.4 25.3 1.2 25.6C1.2 25.7 1.1 25.7 1.1 25.8V25.9L0.999997 26.1C0.999997 26.2 0.999997 26.2 0.899997 26.3C0.899997 26.4 0.899997 26.4 0.799997 26.5C0.799997 26.6 0.799997 26.7 0.699997 26.7C0.699997 26.8 0.699997 26.9 0.699997 26.9C0.699997 27 0.699997 27.1 0.699997 27.1C0.699997 27.2 0.699997 27.2 0.699997 27.3C0.699997 27.4 0.699997 27.5 0.699997 27.5C0.699997 27.6 0.699997 27.7 0.699997 27.7C0.699997 27.8 0.699997 27.9 0.799997 27.9V28V28.1C0.799997 28.2 0.799997 28.2 0.899997 28.2L0.999997 28.4C0.999997 28.5 1.1 28.5 1.1 28.5C1.1 28.5 1.1 28.5 1.1 28.6C1.2 28.7 1.3 28.9 1.5 29C1.6 29 1.6 29.1 1.7 29.1C1.7 29.1 1.8 29.1 1.8 29.2C1.8 29.2 1.8 29.2 1.9 29.2C2 29.3 2.2 29.3 2.3 29.4C2.4 29.4 2.4 29.4 2.4 29.4L2.9 29.5C3.1 29.5 3.2 29.6 3.4 29.6C4.2 29.8 4.7 30.2 4.8 30.2C6.4 31.2 7.5 33 8.9 35.5C9.5 36.6 10 37.4 10.5 38.2C11.9 40.3 13.4 41 14.4 41.1C14.5 41.1 14.5 41.1 14.6 41.1C14.7 41.1 14.8 41.1 14.8 41.1C15 41.1 15.2 41.1 15.5 41.1H15.6C17.2 40.8 18.5 39.8 18.9 39.3L19 39.2L19.8 38.6C19.8 38.6 19.9 38.5 20 38.5L30.2 30.6L41.3 22L46.5 18H46.6C46.7 18 46.9 17.9 47 17.9C47.4 17.9 47.8 18.1 48.1 18.6L48.5 19.2C48.8 19.7 49.2 20.3 49.5 20.9V21C50.1 22.1 50.8 23.4 51.7 24.6C51.7 24.6 51.7 24.7 51.8 24.7C52.1 25.1 52.4 25.5 52.7 25.8C52.7 25.8 52.8 25.8 52.8 25.9C53 26.1 53.1 26.3 53.3 26.4C53.4 26.5 53.4 26.7 53.3 26.9C52 28.5 50.4 31.1 49.6 32.4V32.5C49.2 33.2 48.7 34.1 48.2 34.9C48 35.2 47.8 35.4 47.7 35.5V40.9C48.8 40.8 50.4 40.1 51.8 37.9C52.4 37 52.9 36 53.4 35.2C53.5 35 53.7 34.7 53.8 34.5C55.2 33 56.4 30.9 58.7 30.1Z"></path></svg></div>', 1), gu = [
  bu
];
function yu(e, t, n, o, l, a) {
  return p(), c("div", null, gu);
}
const xu = /* @__PURE__ */ rt(hu, [["render", yu]]), Vu = {
  key: 0,
  class: "po-fixed po-z-[999] po-top-0 po-bottom-0 po-left-0 po-right-0 po-flex po-items-center po-justify-center"
}, wu = /* @__PURE__ */ s("div", { class: "po-absolute po-w-[6.2rem] po-h-[6.2rem] po-bg-transparent po-overflow-hidden po-rounded-xl" }, [
  /* @__PURE__ */ s("div", { class: "po-loading-rotate po-absolute -po-top-8 -po-left-8 po-w-[10rem] po-h-[10rem]" })
], -1), $u = { class: "relative po-bg-white po-w-24 po-h-24 po-flex po-items-center po-justify-center po-rounded-xl po-bg-opacity-50 po-backdrop-blur po-backdrop-filter po-z-10 po-shadow-xl" }, ku = {
  key: 0,
  class: "po-absolute po-left-1 po-right-1 po-text-center po-py-1 po-text-xs po-text-mpao-blue po-bg-white po-bg-opacity-50 po-backdrop-blur po-backdrop-filter"
}, _u = {
  name: "PoLoading"
}, n1 = /* @__PURE__ */ Object.assign(_u, {
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
    return (t, n) => e.show ? (p(), c("div", Vu, [
      wu,
      s("div", $u, [
        e.label !== "" ? (p(), c("span", ku, y(e.label), 1)) : w("", !0),
        _(xu)
      ])
    ])) : w("", !0);
  }
}), Cu = { class: "po-py-5 po-flex po-items-start po-space-x-5" }, Su = ["name", "id", "checked", "aria-describedby"], Eu = { class: "po-grow -po-mt-[0.26rem]" }, Ou = ["for"], Pu = { class: "po-mt-2 po-flex po-space-x-3" }, Nu = ["href", "onClick"], Lu = {
  name: "PoConsent"
}, a1 = /* @__PURE__ */ Object.assign(Lu, {
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
    return (t, n) => (p(), c("div", Cu, [
      s("input", Ee({
        type: "checkbox",
        name: `${e.id}-field`,
        id: e.id,
        checked: e.modelValue,
        "aria-describedby": `${e.id}-description`
      }, t.$attrs, {
        onInput: n[0] || (n[0] = (o) => t.$emit("update:modelValue", o.target.checked)),
        class: "po-shrink-0 po-h-4 po-w-4 po-rounded border-slate-300 po-text-mpao-lightblue focus:po-ring-mpao-lightblue"
      }), null, 16, Su),
      s("div", Eu, [
        s("label", {
          class: "po-block po-select-none po-text-sm po-text-slate-600 po-cursor-pointer",
          for: e.id
        }, y(e.label), 9, Ou),
        s("div", Pu, [
          (p(!0), c(I, null, W(e.links, (o) => (p(), c("a", {
            href: o.url,
            onClick: me((l) => t.$emit("button-click", o.url), ["prevent"]),
            class: "po-text-sm po-text-mpao-lightblue hover:po-text-mpao-blue"
          }, y(o.label), 9, Nu))), 256))
        ])
      ])
    ]));
  }
}), Du = { class: "po-mt-5 po-bg-slate-50 -po-mx-5 po-px-4 po-py-3 po-space-y-3" }, Tu = ["onClick"], Au = { class: "po-shrink-0 po-pr-3 po-flex po-items-center po-border-r po-border-dashed po-border-slate-300" }, Bu = {
  key: 4,
  class: "po-w-5 po-h-5 po-fill-slate-400 po-shrink-0",
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  viewBox: "0 0 226.978 226.978"
}, ju = /* @__PURE__ */ s("path", { d: "M199.569 25.393C181.627 7.803 152.62-.72 113.339.048 73.731.827 47.255 7.779 30.018 21.927 13.352 35.605 5.59 55.62 5.59 84.915v29.898c0 34.584 18.532 72.605 53.951 78.358 4.089.669 7.941-2.111 8.605-6.201a7.5 7.5 0 0 0-6.201-8.605c-26.861-4.363-41.355-36-41.355-63.552V84.915c0-42.006 15.565-68.347 93.043-69.871 35.125-.696 60.477 6.395 75.433 21.059 11.655 11.429 17.321 27.395 17.321 48.812v29.898c0 45.274-20.321 65.243-72.441 71.123H96.988c-1.989 0-3.897.79-5.303 2.197l-26.041 26.041a7.5 7.5 0 0 0 10.606 10.607l23.845-23.845h34.27c.276 0 .553-.015.828-.046 29.828-3.313 50.254-11.076 64.279-24.432 14.747-14.044 21.916-34.208 21.916-61.646V84.915c0-25.299-7.341-45.325-21.819-59.522z" }, null, -1), Ru = /* @__PURE__ */ s("path", { d: "M118.17 48.988h.003c12.085 0 23.447 4.707 31.993 13.253 8.547 8.547 13.254 19.911 13.253 31.998a7.5 7.5 0 0 0 7.499 7.5h.001a7.5 7.5 0 0 0 7.5-7.499c.001-16.094-6.266-31.225-17.646-42.605-11.379-11.38-26.507-17.646-42.6-17.646h-.005a7.5 7.5 0 1 0 .002 14.999z" }, null, -1), Iu = /* @__PURE__ */ s("path", { d: "M118.168 75.362c10.408.002 18.877 8.47 18.878 18.877a7.5 7.5 0 0 0 7.501 7.499c4.143 0 7.5-3.359 7.499-7.501-.003-18.676-15.199-33.872-33.876-33.875h-.001a7.5 7.5 0 0 0-.001 15zM84.538 88.213a7.5 7.5 0 0 0 8.465 12.382c2.689-1.838 8.987-6.144 8.545-14.752-.28-5.152-4.927-12.508-8.776-17.772-5.63-7.702-10.482-12.341-14.391-13.779-3.65-1.359-7.467-1.388-11.353-.084-8.049 2.712-13.893 7.613-16.899 14.173-2.927 6.386-2.862 13.725.189 21.228 7.206 17.678 17.294 33.155 30.051 46.067 12.845 12.689 28.321 22.777 46.006 29.987 3.827 1.557 7.613 2.336 11.252 2.336 3.49 0 6.845-.716 9.971-2.149 6.56-3.007 11.46-8.85 14.175-16.909 1.3-3.877 1.271-7.692-.077-11.317-1.448-3.937-6.088-8.788-13.789-14.418-5.265-3.849-12.621-8.496-17.793-8.777-8.59-.432-12.892 5.855-14.73 8.544a7.5 7.5 0 0 0 12.381 8.469c.816-1.193 1.282-1.735 1.549-1.972 4.21 1.349 16.215 10.169 18.376 13.549.053.216.065.545-.135 1.144-.946 2.809-2.791 6.486-6.206 8.052-3.199 1.464-6.834.566-9.316-.443-15.847-6.461-29.682-15.466-41.058-26.703-11.301-11.439-20.306-25.274-26.763-41.115-1.012-2.488-1.911-6.125-.446-9.321 1.565-3.415 5.243-5.261 8.043-6.205.598-.2.927-.189 1.155-.134 3.381 2.165 12.196 14.163 13.546 18.374-.238.263-.779.73-1.972 1.545z" }, null, -1), Mu = [
  ju,
  Ru,
  Iu
], Fu = { class: "po-grow po-space-y-2 po-pl-3" }, zu = { class: "po-text-base po-text-slate-600 po-font-medium" }, Hu = { class: "po-flex po-space-x-5" }, qu = { class: "po-text-xs po-space-x-2" }, Uu = /* @__PURE__ */ s("span", { class: "po-font-medium po-text-slate-500" }, "Status", -1), Gu = { class: "po-text-xs po-space-x-2" }, Ku = /* @__PURE__ */ s("span", { class: "po-font-medium po-text-slate-500" }, [
  /* @__PURE__ */ s("span", null, "User")
], -1), Wu = { class: "po-text-slate-500" }, Zu = { class: "po-text-xs po-space-x-2" }, Yu = /* @__PURE__ */ s("span", { class: "po-font-medium po-text-slate-500" }, "Date", -1), Ju = { class: "po-text-slate-500" }, Xu = {
  name: "PoCallLog"
}, s1 = /* @__PURE__ */ Object.assign(Xu, {
  props: {
    /**
     * List of items
     */
    list: {
      type: Array,
      default: null
    }
  },
  setup(e) {
    return (t, n) => (p(), c("ul", Du, [
      (p(!0), c(I, null, W(e.list, (o) => (p(), c("li", {
        onClick: (l) => t.$emit("button-click", o),
        class: "po-bg-white po-rounded-lg po-p-3 po-transition-shadow po-duration-100 po-ease-out po-shadow hover:po-shadow-lg po-cursor-pointer po-flex po-item-center"
      }, [
        s("div", Au, [
          o.type === "chat" ? (p(), F(g(hl), {
            key: 0,
            class: "po-w-5 po-h-5 po-stroke-slate-400 po-shrink-0"
          })) : w("", !0),
          o.type === "email" ? (p(), F(g(xl), {
            key: 1,
            class: "po-w-5 po-h-5 po-stroke-slate-400 po-shrink-0"
          })) : w("", !0),
          o.type === "in" ? (p(), F(g(kl), {
            key: 2,
            class: "po-w-5 po-h-5 po-stroke-slate-400 po-shrink-0"
          })) : w("", !0),
          o.type === "out" ? (p(), F(g(_l), {
            key: 3,
            class: "po-w-5 po-h-5 po-stroke-slate-400 po-shrink-0"
          })) : w("", !0),
          o.type === "viber" ? (p(), c("svg", Bu, Mu)) : w("", !0)
        ]),
        s("div", Fu, [
          s("h3", zu, y(o.subject), 1),
          s("div", Hu, [
            s("p", qu, [
              Uu,
              s("span", {
                class: j([
                  "po-rounded-md po-px-[0.2em] po-capitalize",
                  { "po-text-green-600 po-bg-green-100": o.status === "open" },
                  {
                    "po-text-slate-500 po-bg-slate-100": o.status === "closed"
                  }
                ])
              }, y(o.status), 3)
            ]),
            s("p", Gu, [
              Ku,
              s("span", Wu, [
                s("span", null, y(o.user.name) + " (" + y(o.user.department) + ")", 1)
              ])
            ]),
            s("p", Zu, [
              Yu,
              s("span", Ju, y(o.date), 1)
            ])
          ])
        ])
      ], 8, Tu))), 256))
    ]));
  }
}), Qu = {
  class: "po-flex po-bg-slate-50 po-rounded-t-xl po-justify-center lg:po-justify-start po-px-4 po-pt-4 xl:po-pt-2 po-flex-wrap po-overflow-hidden",
  "aria-label": "Tabs"
}, ec = ["onClick", "aria-current"], tc = {
  name: "PoCardTabs"
}, r1 = /* @__PURE__ */ Object.assign(tc, {
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
    function n(o) {
      return o.iconColor ? o.iconColor : "po-fill-current";
    }
    return (o, l) => (p(), c("nav", Qu, [
      (p(!0), c(I, null, W(e.tabs, (a) => (p(), c("span", {
        role: "button",
        onClick: (r) => o.$emit("button-click", a),
        key: a.name,
        class: j([
          a.current ? "po-bg-white po-text-slate-600 po-shadow-lg" : "po-text-slate-600 hover:po-text-mpao-blue",
          "po-px-4 po-py-3 po-font-medium po-mr-4 po-mb-4 xl:po-mb-0 po-text-sm po-cursor-pointer po-rounded-xl xl:po-rounded-b-none genie-effect hover:po-text-slate-600 hover:po-bg-white hover:po-shadow-md po-flex po-items-center po-flex-shrink-0 po-space-x-2"
        ]),
        "aria-current": a.current ? "page" : void 0
      }, [
        a.icon ? (p(), F(de(a.icon), {
          key: 0,
          class: j(["po-w-5 po-h-5", [n(a)]])
        }, null, 8, ["class"])) : w("", !0),
        s("span", null, y(a.name), 1)
      ], 10, ec))), 128))
    ]));
  }
}), oc = { class: "sm:po-hidden" }, lc = /* @__PURE__ */ s("label", {
  for: "tabs",
  class: "po-sr-only"
}, "Select a tab", -1), nc = {
  id: "tabs",
  name: "tabs",
  class: "po-block po-w-full po-rounded-md po-border-gray-300 focus:po-border-indigo-500 focus:po-ring-indigo-500"
}, ac = ["selected"], sc = { class: "po-hidden sm:po-block" }, rc = {
  class: "po-flex po-space-x-4 po-pt-2",
  "aria-label": "Tabs"
}, ic = ["onClick", "aria-current"], pc = {
  name: "PoTabs"
}, i1 = /* @__PURE__ */ Object.assign(pc, {
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
    function n(o) {
      return o.iconColor ? o.iconColor : "po-fill-current";
    }
    return (o, l) => (p(), c(I, null, [
      s("div", oc, [
        lc,
        s("select", nc, [
          (p(!0), c(I, null, W(e.tabs, (a) => (p(), c("option", {
            key: a.name,
            selected: a.current
          }, y(a.name), 9, ac))), 128))
        ])
      ]),
      s("div", sc, [
        s("nav", rc, [
          (p(!0), c(I, null, W(e.tabs, (a) => (p(), c("span", {
            onClick: (r) => o.$emit("button-click", a),
            role: "button",
            key: a.name,
            class: j([
              a.current ? "po-bg-white po-text-slate-600 po-shadow-md" : "po-text-slate-600 hover:po-text-mpao-blue",
              "po-px-4 po-py-3 po-font-medium po-text-sm po-cursor-pointer po-rounded-xl genie-effect hover:po-text-slate-600 hover:po-bg-white hover:po-shadow-md po-flex po-items-center po-space-x-2"
            ]),
            "aria-current": a.current ? "page" : void 0
          }, [
            a.icon ? (p(), F(de(a.icon), {
              key: 0,
              class: j(["po-w-5 po-h-5", [n(a)]])
            }, null, 8, ["class"])) : w("", !0),
            s("span", null, y(a.name), 1)
          ], 10, ic))), 128))
        ])
      ])
    ], 64));
  }
}), uc = { class: "po-mt-5 po-flex po-flex-col po-items-center po-justify-center po-px-5 po-py-8 po-space-y-3" }, cc = {
  key: 1,
  class: "po-text-base po-font-medium po-text-slate-600 po-text-center"
}, dc = {
  key: 2,
  class: "po-text-sm po-text-slate-500 po-text-center"
}, fc = {
  name: "PoEmpty"
}, p1 = /* @__PURE__ */ Object.assign(fc, {
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
    icon: null
  },
  setup(e) {
    return (t, n) => (p(), c("div", uc, [
      e.icon ? (p(), F(de(e.icon), {
        key: 0,
        class: "po-w-10 po-h-10 po-stroke-slate-300"
      })) : w("", !0),
      e.label !== "" ? (p(), c("span", cc, y(e.label), 1)) : w("", !0),
      e.description !== "" ? (p(), c("span", dc, y(e.description), 1)) : w("", !0),
      X(t.$slots, "action")
    ]));
  }
}), Ge = {
  [
    1
    /* PatchFlags.TEXT */
  ]: "TEXT",
  [
    2
    /* PatchFlags.CLASS */
  ]: "CLASS",
  [
    4
    /* PatchFlags.STYLE */
  ]: "STYLE",
  [
    8
    /* PatchFlags.PROPS */
  ]: "PROPS",
  [
    16
    /* PatchFlags.FULL_PROPS */
  ]: "FULL_PROPS",
  [
    32
    /* PatchFlags.HYDRATE_EVENTS */
  ]: "HYDRATE_EVENTS",
  [
    64
    /* PatchFlags.STABLE_FRAGMENT */
  ]: "STABLE_FRAGMENT",
  [
    128
    /* PatchFlags.KEYED_FRAGMENT */
  ]: "KEYED_FRAGMENT",
  [
    256
    /* PatchFlags.UNKEYED_FRAGMENT */
  ]: "UNKEYED_FRAGMENT",
  [
    512
    /* PatchFlags.NEED_PATCH */
  ]: "NEED_PATCH",
  [
    1024
    /* PatchFlags.DYNAMIC_SLOTS */
  ]: "DYNAMIC_SLOTS",
  [
    2048
    /* PatchFlags.DEV_ROOT_FRAGMENT */
  ]: "DEV_ROOT_FRAGMENT",
  [
    -1
    /* PatchFlags.HOISTED */
  ]: "HOISTED",
  [
    -2
    /* PatchFlags.BAIL */
  ]: "BAIL"
};
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const vt = () => !1, vc = Object.assign, mc = Array.isArray, ye = (e) => typeof e == "string", hc = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, bc = /\B([A-Z])/g, gc = hc((e) => e.replace(bc, "-$1").toLowerCase());
function yc(e) {
  throw e;
}
function xc(e) {
  process.env.NODE_ENV !== "production" && console.warn(`[Vue warn] ${e.message}`);
}
function _e(e, t, n, o) {
  const l = process.env.NODE_ENV !== "production" ? (n || Vc)[e] + (o || "") : e, a = new SyntaxError(String(l));
  return a.code = e, a.loc = t, a;
}
const Vc = {
  // parse errors
  [
    0
    /* ErrorCodes.ABRUPT_CLOSING_OF_EMPTY_COMMENT */
  ]: "Illegal comment.",
  [
    1
    /* ErrorCodes.CDATA_IN_HTML_CONTENT */
  ]: "CDATA section is allowed only in XML context.",
  [
    2
    /* ErrorCodes.DUPLICATE_ATTRIBUTE */
  ]: "Duplicate attribute.",
  [
    3
    /* ErrorCodes.END_TAG_WITH_ATTRIBUTES */
  ]: "End tag cannot have attributes.",
  [
    4
    /* ErrorCodes.END_TAG_WITH_TRAILING_SOLIDUS */
  ]: "Illegal '/' in tags.",
  [
    5
    /* ErrorCodes.EOF_BEFORE_TAG_NAME */
  ]: "Unexpected EOF in tag.",
  [
    6
    /* ErrorCodes.EOF_IN_CDATA */
  ]: "Unexpected EOF in CDATA section.",
  [
    7
    /* ErrorCodes.EOF_IN_COMMENT */
  ]: "Unexpected EOF in comment.",
  [
    8
    /* ErrorCodes.EOF_IN_SCRIPT_HTML_COMMENT_LIKE_TEXT */
  ]: "Unexpected EOF in script.",
  [
    9
    /* ErrorCodes.EOF_IN_TAG */
  ]: "Unexpected EOF in tag.",
  [
    10
    /* ErrorCodes.INCORRECTLY_CLOSED_COMMENT */
  ]: "Incorrectly closed comment.",
  [
    11
    /* ErrorCodes.INCORRECTLY_OPENED_COMMENT */
  ]: "Incorrectly opened comment.",
  [
    12
    /* ErrorCodes.INVALID_FIRST_CHARACTER_OF_TAG_NAME */
  ]: "Illegal tag name. Use '&lt;' to print '<'.",
  [
    13
    /* ErrorCodes.MISSING_ATTRIBUTE_VALUE */
  ]: "Attribute value was expected.",
  [
    14
    /* ErrorCodes.MISSING_END_TAG_NAME */
  ]: "End tag name was expected.",
  [
    15
    /* ErrorCodes.MISSING_WHITESPACE_BETWEEN_ATTRIBUTES */
  ]: "Whitespace was expected.",
  [
    16
    /* ErrorCodes.NESTED_COMMENT */
  ]: "Unexpected '<!--' in comment.",
  [
    17
    /* ErrorCodes.UNEXPECTED_CHARACTER_IN_ATTRIBUTE_NAME */
  ]: `Attribute name cannot contain U+0022 ("), U+0027 ('), and U+003C (<).`,
  [
    18
    /* ErrorCodes.UNEXPECTED_CHARACTER_IN_UNQUOTED_ATTRIBUTE_VALUE */
  ]: "Unquoted attribute value cannot contain U+0022 (\"), U+0027 ('), U+003C (<), U+003D (=), and U+0060 (`).",
  [
    19
    /* ErrorCodes.UNEXPECTED_EQUALS_SIGN_BEFORE_ATTRIBUTE_NAME */
  ]: "Attribute name cannot start with '='.",
  [
    21
    /* ErrorCodes.UNEXPECTED_QUESTION_MARK_INSTEAD_OF_TAG_NAME */
  ]: "'<?' is allowed only in XML context.",
  [
    20
    /* ErrorCodes.UNEXPECTED_NULL_CHARACTER */
  ]: "Unexpected null character.",
  [
    22
    /* ErrorCodes.UNEXPECTED_SOLIDUS_IN_TAG */
  ]: "Illegal '/' in tags.",
  // Vue-specific parse errors
  [
    23
    /* ErrorCodes.X_INVALID_END_TAG */
  ]: "Invalid end tag.",
  [
    24
    /* ErrorCodes.X_MISSING_END_TAG */
  ]: "Element is missing end tag.",
  [
    25
    /* ErrorCodes.X_MISSING_INTERPOLATION_END */
  ]: "Interpolation end sign was not found.",
  [
    27
    /* ErrorCodes.X_MISSING_DYNAMIC_DIRECTIVE_ARGUMENT_END */
  ]: "End bracket for dynamic directive argument was not found. Note that dynamic directive argument cannot contain spaces.",
  [
    26
    /* ErrorCodes.X_MISSING_DIRECTIVE_NAME */
  ]: "Legal directive name was expected.",
  // transform errors
  [
    28
    /* ErrorCodes.X_V_IF_NO_EXPRESSION */
  ]: "v-if/v-else-if is missing expression.",
  [
    29
    /* ErrorCodes.X_V_IF_SAME_KEY */
  ]: "v-if/else branches must use unique keys.",
  [
    30
    /* ErrorCodes.X_V_ELSE_NO_ADJACENT_IF */
  ]: "v-else/v-else-if has no adjacent v-if or v-else-if.",
  [
    31
    /* ErrorCodes.X_V_FOR_NO_EXPRESSION */
  ]: "v-for is missing expression.",
  [
    32
    /* ErrorCodes.X_V_FOR_MALFORMED_EXPRESSION */
  ]: "v-for has invalid expression.",
  [
    33
    /* ErrorCodes.X_V_FOR_TEMPLATE_KEY_PLACEMENT */
  ]: "<template v-for> key should be placed on the <template> tag.",
  [
    34
    /* ErrorCodes.X_V_BIND_NO_EXPRESSION */
  ]: "v-bind is missing expression.",
  [
    35
    /* ErrorCodes.X_V_ON_NO_EXPRESSION */
  ]: "v-on is missing expression.",
  [
    36
    /* ErrorCodes.X_V_SLOT_UNEXPECTED_DIRECTIVE_ON_SLOT_OUTLET */
  ]: "Unexpected custom directive on <slot> outlet.",
  [
    37
    /* ErrorCodes.X_V_SLOT_MIXED_SLOT_USAGE */
  ]: "Mixed v-slot usage on both the component and nested <template>.When there are multiple named slots, all slots should use <template> syntax to avoid scope ambiguity.",
  [
    38
    /* ErrorCodes.X_V_SLOT_DUPLICATE_SLOT_NAMES */
  ]: "Duplicate slot names found. ",
  [
    39
    /* ErrorCodes.X_V_SLOT_EXTRANEOUS_DEFAULT_SLOT_CHILDREN */
  ]: "Extraneous children found when component already has explicitly named default slot. These children will be ignored.",
  [
    40
    /* ErrorCodes.X_V_SLOT_MISPLACED */
  ]: "v-slot can only be used on components or <template> tags.",
  [
    41
    /* ErrorCodes.X_V_MODEL_NO_EXPRESSION */
  ]: "v-model is missing expression.",
  [
    42
    /* ErrorCodes.X_V_MODEL_MALFORMED_EXPRESSION */
  ]: "v-model value must be a valid JavaScript member expression.",
  [
    43
    /* ErrorCodes.X_V_MODEL_ON_SCOPE_VARIABLE */
  ]: "v-model cannot be used on v-for or v-slot scope variables because they are not writable.",
  [
    44
    /* ErrorCodes.X_V_MODEL_ON_PROPS */
  ]: `v-model cannot be used on a prop, because local prop bindings are not writable.
Use a v-bind binding combined with a v-on listener that emits update:x event instead.`,
  [
    45
    /* ErrorCodes.X_INVALID_EXPRESSION */
  ]: "Error parsing JavaScript expression: ",
  [
    46
    /* ErrorCodes.X_KEEP_ALIVE_INVALID_CHILDREN */
  ]: "<KeepAlive> expects exactly one child component.",
  // generic errors
  [
    47
    /* ErrorCodes.X_PREFIX_ID_NOT_SUPPORTED */
  ]: '"prefixIdentifiers" option is not supported in this build of compiler.',
  [
    48
    /* ErrorCodes.X_MODULE_MODE_NOT_SUPPORTED */
  ]: "ES module mode is not supported in this build of compiler.",
  [
    49
    /* ErrorCodes.X_CACHE_HANDLER_NOT_SUPPORTED */
  ]: '"cacheHandlers" option is only supported when the "prefixIdentifiers" option is enabled.',
  [
    50
    /* ErrorCodes.X_SCOPE_ID_NOT_SUPPORTED */
  ]: '"scopeId" option is only supported in module mode.',
  // just to fulfill types
  [
    51
    /* ErrorCodes.__EXTEND_POINT__ */
  ]: ""
}, wt = Symbol(process.env.NODE_ENV !== "production" ? "Fragment" : "");
Symbol(process.env.NODE_ENV !== "production" ? "Teleport" : "");
Symbol(process.env.NODE_ENV !== "production" ? "Suspense" : "");
Symbol(process.env.NODE_ENV !== "production" ? "KeepAlive" : "");
Symbol(process.env.NODE_ENV !== "production" ? "BaseTransition" : "");
const Ke = Symbol(process.env.NODE_ENV !== "production" ? "openBlock" : ""), wc = Symbol(process.env.NODE_ENV !== "production" ? "createBlock" : ""), $c = Symbol(process.env.NODE_ENV !== "production" ? "createElementBlock" : ""), kc = Symbol(process.env.NODE_ENV !== "production" ? "createVNode" : ""), _c = Symbol(process.env.NODE_ENV !== "production" ? "createElementVNode" : ""), Uo = Symbol(process.env.NODE_ENV !== "production" ? "createCommentVNode" : "");
Symbol(process.env.NODE_ENV !== "production" ? "createTextVNode" : "");
Symbol(process.env.NODE_ENV !== "production" ? "createStaticVNode" : "");
Symbol(process.env.NODE_ENV !== "production" ? "resolveComponent" : "");
Symbol(process.env.NODE_ENV !== "production" ? "resolveDynamicComponent" : "");
Symbol(process.env.NODE_ENV !== "production" ? "resolveDirective" : "");
Symbol(process.env.NODE_ENV !== "production" ? "resolveFilter" : "");
const Cc = Symbol(process.env.NODE_ENV !== "production" ? "withDirectives" : ""), Sc = Symbol(process.env.NODE_ENV !== "production" ? "renderList" : "");
Symbol(process.env.NODE_ENV !== "production" ? "renderSlot" : "");
Symbol(process.env.NODE_ENV !== "production" ? "createSlots" : "");
const Ec = Symbol(process.env.NODE_ENV !== "production" ? "toDisplayString" : ""), eo = Symbol(process.env.NODE_ENV !== "production" ? "mergeProps" : "");
Symbol(process.env.NODE_ENV !== "production" ? "normalizeClass" : "");
Symbol(process.env.NODE_ENV !== "production" ? "normalizeStyle" : "");
const Oc = Symbol(process.env.NODE_ENV !== "production" ? "normalizeProps" : ""), Go = Symbol(process.env.NODE_ENV !== "production" ? "guardReactiveProps" : ""), Pc = Symbol(process.env.NODE_ENV !== "production" ? "toHandlers" : "");
Symbol(process.env.NODE_ENV !== "production" ? "camelize" : "");
Symbol(process.env.NODE_ENV !== "production" ? "capitalize" : "");
Symbol(process.env.NODE_ENV !== "production" ? "toHandlerKey" : "");
Symbol(process.env.NODE_ENV !== "production" ? "setBlockTracking" : "");
Symbol(process.env.NODE_ENV !== "production" ? "pushScopeId" : "");
Symbol(process.env.NODE_ENV !== "production" ? "popScopeId" : "");
Symbol(process.env.NODE_ENV !== "production" ? "withCtx" : "");
Symbol(process.env.NODE_ENV !== "production" ? "unref" : "");
Symbol(process.env.NODE_ENV !== "production" ? "isRef" : "");
const Nc = Symbol(process.env.NODE_ENV !== "production" ? "withMemo" : ""), Lc = Symbol(process.env.NODE_ENV !== "production" ? "isMemoSame" : ""), ge = {
  source: "",
  start: { line: 1, column: 1, offset: 0 },
  end: { line: 1, column: 1, offset: 0 }
};
function $t(e, t, n, o, l, a, r, i = !1, u = !1, d = !1, v = ge) {
  return e && (i ? (e.helper(Ke), e.helper(Ye(e.inSSR, d))) : e.helper(Ze(e.inSSR, d)), r && e.helper(Cc)), {
    type: 13,
    tag: t,
    props: n,
    children: o,
    patchFlag: l,
    dynamicProps: a,
    directives: r,
    isBlock: i,
    disableTracking: u,
    isComponent: d,
    loc: v
  };
}
function Le(e, t = ge) {
  return {
    type: 15,
    loc: t,
    properties: e
  };
}
function Ko(e, t) {
  return {
    type: 16,
    loc: ge,
    key: ye(e) ? fe(e, !0) : e,
    value: t
  };
}
function fe(e, t = !1, n = ge, o = 0) {
  return {
    type: 4,
    loc: n,
    content: e,
    isStatic: t,
    constType: t ? 3 : o
  };
}
function mt(e, t = ge) {
  return {
    type: 8,
    loc: t,
    children: e
  };
}
function We(e, t = [], n = ge) {
  return {
    type: 14,
    loc: n,
    callee: e,
    arguments: t
  };
}
function to(e, t = void 0, n = !1, o = !1, l = ge) {
  return {
    type: 18,
    params: e,
    returns: t,
    newline: n,
    isSlot: o,
    loc: l
  };
}
function Dc(e, t, n, o = !0) {
  return {
    type: 19,
    test: e,
    consequent: t,
    alternate: n,
    newline: o,
    loc: ge
  };
}
function Tc(e) {
  return {
    type: 21,
    body: e,
    loc: ge
  };
}
const Ac = (e) => e.type === 4 && e.isStatic, Bc = (e, t) => e === t || e === gc(t);
function jc(e, t, n) {
  const l = {
    source: e.source.slice(t, t + n),
    start: oo(e.start, e.source, t),
    end: e.end
  };
  return n != null && (l.end = oo(e.start, e.source, t + n)), l;
}
function oo(e, t, n = t.length) {
  return Rc(vc({}, e), t, n);
}
function Rc(e, t, n = t.length) {
  let o = 0, l = -1;
  for (let a = 0; a < n; a++)
    t.charCodeAt(a) === 10 && (o++, l = a);
  return e.offset += n, e.line += o, e.column = l === -1 ? e.column + n : n - l, e;
}
function Wo(e, t, n = !1) {
  for (let o = 0; o < e.props.length; o++) {
    const l = e.props[o];
    if (l.type === 7 && (n || l.exp) && (ye(t) ? l.name === t : t.test(l.name)))
      return l;
  }
}
function kt(e, t, n = !1, o = !1) {
  for (let l = 0; l < e.props.length; l++) {
    const a = e.props[l];
    if (a.type === 6) {
      if (n)
        continue;
      if (a.name === t && (a.value || o))
        return a;
    } else if (a.name === "bind" && (a.exp || o) && Ic(a.arg, t))
      return a;
  }
}
function Ic(e, t) {
  return !!(e && Ac(e) && e.content === t);
}
function Mc(e) {
  return e.type === 7 && e.name === "slot";
}
function Zo(e) {
  return e.type === 1 && e.tagType === 3;
}
function lo(e) {
  return e.type === 1 && e.tagType === 2;
}
function Ze(e, t) {
  return e || t ? kc : _c;
}
function Ye(e, t) {
  return e || t ? wc : $c;
}
const Fc = /* @__PURE__ */ new Set([Oc, Go]);
function Yo(e, t = []) {
  if (e && !ye(e) && e.type === 14) {
    const n = e.callee;
    if (!ye(n) && Fc.has(n))
      return Yo(e.arguments[0], t.concat(e));
  }
  return [e, t];
}
function Je(e, t, n) {
  let o, l = e.type === 13 ? e.props : e.arguments[2], a = [], r;
  if (l && !ye(l) && l.type === 14) {
    const i = Yo(l);
    l = i[0], a = i[1], r = a[a.length - 1];
  }
  if (l == null || ye(l))
    o = Le([t]);
  else if (l.type === 14) {
    const i = l.arguments[0];
    !ye(i) && i.type === 15 ? no(t, i) || i.properties.unshift(t) : l.callee === Pc ? o = We(n.helper(eo), [
      Le([t]),
      l
    ]) : l.arguments.unshift(Le([t])), !o && (o = l);
  } else
    l.type === 15 ? (no(t, l) || l.properties.unshift(t), o = l) : (o = We(n.helper(eo), [
      Le([t]),
      l
    ]), r && r.callee === Go && (r = a[a.length - 2]));
  e.type === 13 ? r ? r.arguments[0] = o : e.props = o : r ? r.arguments[0] = o : e.arguments[2] = o;
}
function no(e, t) {
  let n = !1;
  if (e.key.type === 4) {
    const o = e.key.content;
    n = t.properties.some((l) => l.key.type === 4 && l.key.content === o);
  }
  return n;
}
function zc(e) {
  return e.type === 14 && e.callee === Nc ? e.arguments[1].returns : e;
}
function Hc(e, { helper: t, removeHelper: n, inSSR: o }) {
  e.isBlock || (e.isBlock = !0, n(Ze(o, e.isComponent)), t(Ke), t(Ye(o, e.isComponent)));
}
const qc = /&(gt|lt|amp|apos|quot);/g, Uc = {
  gt: ">",
  lt: "<",
  amp: "&",
  apos: "'",
  quot: '"'
};
process.env.NODE_ENV;
function Gc(e, t) {
  let n = 0;
  const o = () => {
    n--;
  };
  for (; n < e.children.length; n++) {
    const l = e.children[n];
    ye(l) || (t.parent = e, t.childIndex = n, t.onNodeRemoved = o, Ht(l, t));
  }
}
function Ht(e, t) {
  t.currentNode = e;
  const { nodeTransforms: n } = t, o = [];
  for (let a = 0; a < n.length; a++) {
    const r = n[a](e, t);
    if (r && (mc(r) ? o.push(...r) : o.push(r)), t.currentNode)
      e = t.currentNode;
    else
      return;
  }
  switch (e.type) {
    case 3:
      t.ssr || t.helper(Uo);
      break;
    case 5:
      t.ssr || t.helper(Ec);
      break;
    case 9:
      for (let a = 0; a < e.branches.length; a++)
        Ht(e.branches[a], t);
      break;
    case 10:
    case 11:
    case 1:
    case 0:
      Gc(e, t);
      break;
  }
  t.currentNode = e;
  let l = o.length;
  for (; l--; )
    o[l]();
}
function Jo(e, t) {
  const n = ye(e) ? (o) => o === e : (o) => e.test(o);
  return (o, l) => {
    if (o.type === 1) {
      const { props: a } = o;
      if (o.tagType === 3 && a.some(Mc))
        return;
      const r = [];
      for (let i = 0; i < a.length; i++) {
        const u = a[i];
        if (u.type === 7 && n(u.name)) {
          a.splice(i, 1), i--;
          const d = t(o, u, l);
          d && r.push(d);
        }
      }
      return r;
    }
  };
}
const Kc = new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments,typeof,void".split(",").join("\\b|\\b") + "\\b"), Wc = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
function Re(e, t, n = !1, o = !1) {
  const l = e.content;
  if (l.trim())
    try {
      new Function(o ? ` ${l} ` : `return ${n ? `(${l}) => {}` : `(${l})`}`);
    } catch (a) {
      let r = a.message;
      const i = l.replace(Wc, "").match(Kc);
      i && (r = `avoid using JavaScript keyword as property name: "${i[0]}"`), t.onError(_e(45, e.loc, void 0, r));
    }
}
Jo(/^(if|else|else-if)$/, (e, t, n) => Zc(e, t, n, (o, l, a) => {
  const r = n.parent.children;
  let i = r.indexOf(o), u = 0;
  for (; i-- >= 0; ) {
    const d = r[i];
    d && d.type === 9 && (u += d.branches.length);
  }
  return () => {
    if (a)
      o.codegenNode = so(l, u, n);
    else {
      const d = Jc(o.codegenNode);
      d.alternate = so(l, u + o.branches.length - 1, n);
    }
  };
}));
function Zc(e, t, n, o) {
  if (t.name !== "else" && (!t.exp || !t.exp.content.trim())) {
    const l = t.exp ? t.exp.loc : e.loc;
    n.onError(_e(28, t.loc)), t.exp = fe("true", !1, l);
  }
  if (process.env.NODE_ENV !== "production" && t.exp && Re(t.exp, n), t.name === "if") {
    const l = ao(e, t), a = {
      type: 9,
      loc: e.loc,
      branches: [l]
    };
    if (n.replaceNode(a), o)
      return o(a, l, !0);
  } else {
    const l = n.parent.children, a = [];
    let r = l.indexOf(e);
    for (; r-- >= -1; ) {
      const i = l[r];
      if (i && i.type === 3) {
        n.removeNode(i), process.env.NODE_ENV !== "production" && a.unshift(i);
        continue;
      }
      if (i && i.type === 2 && !i.content.trim().length) {
        n.removeNode(i);
        continue;
      }
      if (i && i.type === 9) {
        t.name === "else-if" && i.branches[i.branches.length - 1].condition === void 0 && n.onError(_e(30, e.loc)), n.removeNode();
        const u = ao(e, t);
        if (process.env.NODE_ENV !== "production" && a.length && // #3619 ignore comments if the v-if is direct child of <transition>
        !(n.parent && n.parent.type === 1 && Bc(n.parent.tag, "transition")) && (u.children = [...a, ...u.children]), process.env.NODE_ENV !== "production") {
          const v = u.userKey;
          v && i.branches.forEach(({ userKey: m }) => {
            Yc(m, v) && n.onError(_e(29, u.userKey.loc));
          });
        }
        i.branches.push(u);
        const d = o && o(i, u, !1);
        Ht(u, n), d && d(), n.currentNode = null;
      } else
        n.onError(_e(30, e.loc));
      break;
    }
  }
}
function ao(e, t) {
  const n = e.tagType === 3;
  return {
    type: 10,
    loc: e.loc,
    condition: t.name === "else" ? void 0 : t.exp,
    children: n && !Wo(e, "for") ? e.children : [e],
    userKey: kt(e, "key"),
    isTemplateIf: n
  };
}
function so(e, t, n) {
  return e.condition ? Dc(
    e.condition,
    ro(e, t, n),
    // make sure to pass in asBlock: true so that the comment node call
    // closes the current block.
    We(n.helper(Uo), [
      process.env.NODE_ENV !== "production" ? '"v-if"' : '""',
      "true"
    ])
  ) : ro(e, t, n);
}
function ro(e, t, n) {
  const { helper: o } = n, l = Ko("key", fe(
    `${t}`,
    !1,
    ge,
    2
    /* ConstantTypes.CAN_HOIST */
  )), { children: a } = e, r = a[0];
  if (a.length !== 1 || r.type !== 1)
    if (a.length === 1 && r.type === 11) {
      const u = r.codegenNode;
      return Je(u, l, n), u;
    } else {
      let u = 64, d = Ge[
        64
        /* PatchFlags.STABLE_FRAGMENT */
      ];
      return process.env.NODE_ENV !== "production" && !e.isTemplateIf && a.filter(
        (v) => v.type !== 3
        /* NodeTypes.COMMENT */
      ).length === 1 && (u |= 2048, d += `, ${Ge[
        2048
        /* PatchFlags.DEV_ROOT_FRAGMENT */
      ]}`), $t(n, o(wt), Le([l]), a, u + (process.env.NODE_ENV !== "production" ? ` /* ${d} */` : ""), void 0, void 0, !0, !1, !1, e.loc);
    }
  else {
    const u = r.codegenNode, d = zc(u);
    return d.type === 13 && Hc(d, n), Je(d, l, n), u;
  }
}
function Yc(e, t) {
  if (!e || e.type !== t.type)
    return !1;
  if (e.type === 6) {
    if (e.value.content !== t.value.content)
      return !1;
  } else {
    const n = e.exp, o = t.exp;
    if (n.type !== o.type || n.type !== 4 || n.isStatic !== o.isStatic || n.content !== o.content)
      return !1;
  }
  return !0;
}
function Jc(e) {
  for (; ; )
    if (e.type === 19)
      if (e.alternate.type === 19)
        e = e.alternate;
      else
        return e;
    else
      e.type === 20 && (e = e.value);
}
Jo("for", (e, t, n) => {
  const { helper: o, removeHelper: l } = n;
  return Xc(e, t, n, (a) => {
    const r = We(o(Sc), [
      a.source
    ]), i = Zo(e), u = Wo(e, "memo"), d = kt(e, "key"), v = d && (d.type === 6 ? fe(d.value.content, !0) : d.exp), m = d ? Ko("key", v) : null, b = a.source.type === 4 && a.source.constType > 0, x = b ? 64 : d ? 128 : 256;
    return a.codegenNode = $t(n, o(wt), void 0, r, x + (process.env.NODE_ENV !== "production" ? ` /* ${Ge[x]} */` : ""), void 0, void 0, !0, !b, !1, e.loc), () => {
      let h;
      const { children: O } = a;
      process.env.NODE_ENV !== "production" && i && e.children.some((k) => {
        if (k.type === 1) {
          const E = kt(k, "key");
          if (E)
            return n.onError(_e(33, E.loc)), !0;
        }
      });
      const f = O.length !== 1 || O[0].type !== 1, V = lo(e) ? e : i && e.children.length === 1 && lo(e.children[0]) ? e.children[0] : null;
      if (V ? (h = V.codegenNode, i && m && Je(h, m, n)) : f ? h = $t(
        n,
        o(wt),
        m ? Le([m]) : void 0,
        e.children,
        64 + (process.env.NODE_ENV !== "production" ? ` /* ${Ge[
          64
          /* PatchFlags.STABLE_FRAGMENT */
        ]} */` : ""),
        void 0,
        void 0,
        !0,
        void 0,
        !1
        /* isComponent */
      ) : (h = O[0].codegenNode, i && m && Je(h, m, n), h.isBlock !== !b && (h.isBlock ? (l(Ke), l(Ye(n.inSSR, h.isComponent))) : l(Ze(n.inSSR, h.isComponent))), h.isBlock = !b, h.isBlock ? (o(Ke), o(Ye(n.inSSR, h.isComponent))) : o(Ze(n.inSSR, h.isComponent))), u) {
        const k = to(po(a.parseResult, [
          fe("_cached")
        ]));
        k.body = Tc([
          mt(["const _memo = (", u.exp, ")"]),
          mt([
            "if (_cached",
            ...v ? [" && _cached.key === ", v] : [],
            ` && ${n.helperString(Lc)}(_cached, _memo)) return _cached`
          ]),
          mt(["const _item = ", h]),
          fe("_item.memo = _memo"),
          fe("return _item")
        ]), r.arguments.push(k, fe("_cache"), fe(String(n.cached++)));
      } else
        r.arguments.push(to(
          po(a.parseResult),
          h,
          !0
          /* force newline */
        ));
    };
  });
});
function Xc(e, t, n, o) {
  if (!t.exp) {
    n.onError(_e(31, t.loc));
    return;
  }
  const l = td(
    // can only be simple expression because vFor transform is applied
    // before expression transform.
    t.exp,
    n
  );
  if (!l) {
    n.onError(_e(32, t.loc));
    return;
  }
  const { addIdentifiers: a, removeIdentifiers: r, scopes: i } = n, { source: u, value: d, key: v, index: m } = l, b = {
    type: 11,
    loc: t.loc,
    source: u,
    valueAlias: d,
    keyAlias: v,
    objectIndexAlias: m,
    parseResult: l,
    children: Zo(e) ? e.children : [e]
  };
  n.replaceNode(b), i.vFor++;
  const x = o && o(b);
  return () => {
    i.vFor--, x && x();
  };
}
const Qc = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/, io = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, ed = /^\(|\)$/g;
function td(e, t) {
  const n = e.loc, o = e.content, l = o.match(Qc);
  if (!l)
    return;
  const [, a, r] = l, i = {
    source: qe(n, r.trim(), o.indexOf(r, a.length)),
    value: void 0,
    key: void 0,
    index: void 0
  };
  process.env.NODE_ENV !== "production" && Re(i.source, t);
  let u = a.trim().replace(ed, "").trim();
  const d = a.indexOf(u), v = u.match(io);
  if (v) {
    u = u.replace(io, "").trim();
    const m = v[1].trim();
    let b;
    if (m && (b = o.indexOf(m, d + u.length), i.key = qe(n, m, b), process.env.NODE_ENV !== "production" && Re(i.key, t, !0)), v[2]) {
      const x = v[2].trim();
      x && (i.index = qe(n, x, o.indexOf(x, i.key ? b + m.length : d + u.length)), process.env.NODE_ENV !== "production" && Re(i.index, t, !0));
    }
  }
  return u && (i.value = qe(n, u, d), process.env.NODE_ENV !== "production" && Re(i.value, t, !0)), i;
}
function qe(e, t, n) {
  return fe(t, !1, jc(e, n, t.length));
}
function po({ value: e, key: t, index: n }, o = []) {
  return od([e, t, n, ...o]);
}
function od(e) {
  let t = e.length;
  for (; t-- && !e[t]; )
    ;
  return e.slice(0, t + 1).map((n, o) => n || fe("_".repeat(o + 1), !1));
}
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const ld = { class: "po-flex po-text-sm po-text-gray-700 po-flex-col po-space-y-5" }, nd = {
  key: 0,
  class: "po-text-base po-font-medium po-text-slate-700"
}, ad = {
  key: 1,
  class: "po-border po-border-orange-300 po-bg-orange-50 po-rounded-lg po-p-5 po-flex po-items-center po-space-x-3"
}, sd = { class: "po-grow po-text-sm po-text-slate-600" }, rd = {
  key: 2,
  class: "po-border po-border-red-300 po-bg-red-50 po-rounded-lg po-p-5 po-flex po-space-x-4"
}, id = { class: "po-grow" }, pd = { class: "po-text-base po-text-slate-700 po-font-medium" }, ud = { class: "po-text-sm po-text-slate-600" }, cd = { class: "po-font-medium" }, dd = { key: 0 }, fd = { key: 0 }, vd = /* @__PURE__ */ s("dt", null, "Name", -1), md = { key: 1 }, hd = /* @__PURE__ */ s("dt", null, "Identifer", -1), bd = { key: 2 }, gd = /* @__PURE__ */ s("dt", null, "Date of birth", -1), yd = { key: 3 }, xd = /* @__PURE__ */ s("dt", null, "Reported Date of death", -1), Vd = {
  key: 3,
  class: "po-pt-5"
}, wd = { class: "po-flex po-items-center po-space-x-1" }, $d = /* @__PURE__ */ s("span", null, "File a dispute.", -1), kd = {
  name: "PoDRStatus"
}, u1 = /* @__PURE__ */ Object.assign(kd, {
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
    function n() {
      t("dispute-click", "clicked");
    }
    return (o, l) => (p(), c("span", ld, [
      e.record !== null ? (p(), c("h2", nd, " Death was reported by " + y(e.record.institution), 1)) : w("", !0),
      e.request !== null && e.request.type_id === 1 ? (p(), c("div", ad, [
        _(g(ht), { class: "po-shrink-0 po-w-6 po-stroke-orange-600" }),
        s("span", sd, " This is a " + y(e.request.type) + " request and is in " + y(e.request.state) + " state. ", 1)
      ])) : w("", !0),
      e.request !== null && e.request.type_id !== 1 ? (p(), c("div", rd, [
        _(g(ht), { class: "po-shrink-0 po-w-6 po-h-6 po-stroke-red-600 po-stroke-2" }),
        s("div", id, [
          s("h3", pd, y(e.request.type), 1),
          s("p", ud, [
            se(" The following " + y(e.request.type) + " was reported: ", 1),
            s("span", cd, [
              se(y(e.request.dispute_type), 1),
              e.request.date_of_death ? (p(), c("span", dd, " (New date: " + y(e.request.date_of_death) + ")", 1)) : w("", !0)
            ])
          ])
        ])
      ])) : w("", !0),
      _(Ir, null, {
        content: T(() => [
          e.member !== null ? (p(), c("div", fd, [
            vd,
            s("dd", null, y(e.member.name), 1)
          ])) : w("", !0),
          e.member !== null ? (p(), c("div", md, [
            hd,
            s("dd", null, y(e.member.identifier), 1)
          ])) : w("", !0),
          e.member !== null ? (p(), c("div", bd, [
            gd,
            s("dd", null, y(e.member.dob), 1)
          ])) : w("", !0),
          e.record !== null ? (p(), c("div", yd, [
            xd,
            s("dd", null, y(e.record.date_of_death), 1)
          ])) : w("", !0)
        ]),
        _: 1
      }),
      e.request === null ? (p(), c("span", Vd, [
        _(zt, {
          type: "simple",
          onButtonClick: n
        }, {
          label: T(() => [
            s("span", wd, [
              _(g(fl), { class: "po-w-4 po-h-4 po-stroke-current" }),
              $d
            ])
          ]),
          _: 1
        })
      ])) : w("", !0)
    ]));
  }
}), _d = {
  key: 0,
  role: "button",
  class: "po-w-6 po-h-6 po-rounded-lg po-bg-white genie-effect po-flex po-items-center po-justify-center hover:po-bg-slate-50 po-cursor-pointer"
}, Cd = {
  name: "PoTableAction"
}, c1 = /* @__PURE__ */ Object.assign(Cd, {
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
    const t = e, n = $(), o = $();
    return t.btnType === "view" ? n.value = Vl : t.btnType === "edit" ? n.value = $l : t.btnType === "delete" ? n.value = Sl : t.btnType === "icon" && t.btnIcon && (n.value = t.btnIcon), t.btnType === "view" ? o.value = "po-stroke-emerald-400" : t.btnType === "edit" ? o.value = "po-stroke-blue-400" : t.btnType === "delete" ? o.value = "po-stroke-red-400" : o.value = t.iconColor, (l, a) => (p(), c("span", null, [
      e.btnType === "icon" || e.btnType === "delete" || e.btnType === "edit" || e.btnType === "view" ? (p(), c("span", _d, [
        (p(), F(de(n.value), {
          class: j(["po-w-4 po-stroke-2", o.value])
        }, null, 8, ["class"]))
      ])) : (p(), c("span", {
        key: 1,
        role: "button",
        class: j(["po-block po-text-sm genie-effect", e.textColor])
      }, y(e.label), 3))
    ]));
  }
}), Sd = {
  name: "Rufiyaa"
}, Ed = {
  class: "po-fill-current po-inline-block po-relative -po-bottom-1",
  viewBox: "0 0 855 545",
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  style: { "fill-rule": "evenodd", "clip-rule": "evenodd", "stroke-linejoin": "round", "stroke-miterlimit": "2" }
}, Od = /* @__PURE__ */ s("path", {
  d: "M0-39.06c-5.735-2.868-7.581-5.385-7.581-11.833 0-7.073 4.094-12.315 11.368-12.315 3.46 0 10.057 1.753 19.883 5.259l26.895-14.024a20832.52 20832.52 0 0 0 22.282-11.626c1.2-.922 2.538-1.383 4.06-1.383 5.352 0 8.488 3.044 9.457 9.088.185 1.061.277 2.029.277 2.814 0 2.168-2.261 4.659-6.735 7.427-17.484 8.027-28.833 13.609-34.092 16.792 8.027 1.891 14.163 4.613 18.406 8.212 2.888 4.377 4.056 12.251.212 16.282-3.333 3.495-7.883 4.452-13.655 2.952-9.848-2.558-19.273-5.071-28.948-8.345-.689.453-5.449 4.494-9.747 7.41 6.186 1.889 11.595 3.912 15.447 7.832 4.031 4.104 3.888 12.169.012 16.226-3.336 3.492-7.888 4.475-13.655 2.953C7.935 3.138 3.968 2.077 2.03 1.57-2.952.186-8.488-1.521-14.623-3.597-33.999 9.689-50.855 20.568-61.477 26.867c-19.64 11.646-33.676 17.902-42.073 18.776-2.675.279-5.582-1.107-8.627-4.151-4.243-4.245-6.366-10.104-6.366-17.577 0-4.798 3.137-7.196 9.319-7.196 4.146 0 8.313.83 12.456.83 2.86 0 5.48-.15 7.566-1.061 9.645-4.215 16.852-8.05 21.912-10.98C-58.004.134-46.446-7.49-37.681-12.897c-2.722-1.799-4.954-3.863-5.453-5.001-2.91-6.648-.787-14.936 6.663-17.815 2.255-.871 5.607-1.144 7.994-.696 3.977.748 10.364 3.195 17.57 5.767L0-39.06Z",
  transform: "translate(493.929 354.092) scale(4.16667)"
}, null, -1), Pd = [
  Od
];
function Nd(e, t, n, o, l, a) {
  return p(), c("svg", Ed, Pd);
}
const d1 = /* @__PURE__ */ rt(Sd, [["render", Nd]]), Ld = {
  name: "PoHeading"
}, f1 = /* @__PURE__ */ Object.assign(Ld, {
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
    return (t, n) => (p(), F(de(e.type), { class: "po-text-base po-text-slate-600 po-font-semibold" }, {
      default: T(() => [
        se(y(e.text), 1)
      ]),
      _: 1
    }));
  }
});
export {
  Bd as PoActionBar,
  e1 as PoAlert,
  zl as PoAppIcon,
  sa as PoAppTray,
  zt as PoButton,
  s1 as PoCallLog,
  jd as PoCard,
  Rd as PoCardSearch,
  r1 as PoCardTabs,
  Yd as PoChatLogItem,
  Gd as PoCheckbox,
  Qd as PoCommandPalette,
  a1 as PoConsent,
  l1 as PoContentArea,
  u1 as PoDRStatus,
  Ir as PoDescriptionList,
  o1 as PoDownloadFileList,
  p1 as PoEmpty,
  Kd as PoFooter,
  Wd as PoFormStatusMessage,
  f1 as PoHeading,
  Fd as PoInputField,
  zd as PoInputFile,
  n1 as PoLoading,
  t1 as PoLogs,
  Ga as PoModal,
  Jd as PoNotification,
  ga as PoNotificationHub,
  Id as PoPageTitle,
  fr as PoPagination,
  La as PoProfileSwitcher,
  ls as PoRadioInput,
  Kl as PoSearchBar,
  Ud as PoSectionMenu,
  Hd as PoSelectField,
  Ad as PoSidebarDrawer,
  Xd as PoSlideover,
  Zd as PoStatsBlock,
  Md as PoTable,
  c1 as PoTableAction,
  i1 as PoTabs,
  vs as PoTextarea,
  qd as PoToggle,
  Td as PoTopBar,
  d1 as Rufiyaa
};
