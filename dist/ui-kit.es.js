import { openBlock as i, createElementBlock as u, createElementVNode as s, createVNode as C, unref as h, withCtx as D, renderSlot as J, createBlock as R, resolveDynamicComponent as fe, createCommentVNode as x, computed as S, toDisplayString as b, ref as $, onMounted as K, onUnmounted as se, watch as X, withDirectives as $t, isRef as dl, vModelText as mo, cloneVNode as fl, h as Y, Fragment as I, inject as ee, provide as oe, watchEffect as Q, defineComponent as q, toRaw as G, nextTick as ke, Teleport as _t, reactive as vl, shallowRef as ml, normalizeClass as N, Transition as Pe, renderList as z, withModifiers as re, mergeProps as Ee, createTextVNode as ne, toRefs as Be, onUpdated as ho, normalizeProps as Ut, guardReactiveProps as Gt, vModelCheckbox as hl, normalizeStyle as bl, onBeforeUnmount as bo, createStaticVNode as gl } from "vue";
import { f as yl } from "./FormatDate-ac18ec36.mjs";
function xl(e, t) {
  return i(), u("svg", {
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
function Vl(e, t) {
  return i(), u("svg", {
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
function wl(e, t) {
  return i(), u("svg", {
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
function kl(e, t) {
  return i(), u("svg", {
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
function $l(e, t) {
  return i(), u("svg", {
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
function _l(e, t) {
  return i(), u("svg", {
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
function Cl(e, t) {
  return i(), u("svg", {
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
function Sl(e, t) {
  return i(), u("svg", {
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
function El(e, t) {
  return i(), u("svg", {
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
function Pl(e, t) {
  return i(), u("svg", {
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
function Ol(e, t) {
  return i(), u("svg", {
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
function Ll(e, t) {
  return i(), u("svg", {
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
function Nl(e, t) {
  return i(), u("svg", {
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
function Dl(e, t) {
  return i(), u("svg", {
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
function mt(e, t) {
  return i(), u("svg", {
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
function Tl(e, t) {
  return i(), u("svg", {
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
function Bl(e, t) {
  return i(), u("svg", {
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
  return i(), u("svg", {
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
function go(e, t) {
  return i(), u("svg", {
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
function Al(e, t) {
  return i(), u("svg", {
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
function jl(e, t) {
  return i(), u("svg", {
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
function Il(e, t) {
  return i(), u("svg", {
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
function Rl(e, t) {
  return i(), u("svg", {
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
function Ml(e, t) {
  return i(), u("svg", {
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
function Kt(e, t) {
  return i(), u("svg", {
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
function yo(e, t) {
  return i(), u("svg", {
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
const Fl = { class: "po-bg-mpao-blue po-fixed po-top-0 po-w-full po-z-50 po-flex" }, zl = { class: "po-shrink-0 po-px-3 po-pt-3" }, Hl = {
  for: "sidebar-drawer-toggle",
  role: "button",
  class: "genie-effect po-flex po-items-center po-justify-center po-bg-[#2e5266] po-rounded-full po-w-10 po-h-10 po-select-none po-text-slate-100"
}, ql = { class: "po-mx-auto po-max-w-full po-pr-4 po-grow sm:po-pr-4" }, Ul = { class: "po-flex po-relative po-h-16 po-items-center po-justify-between po-space-x-12" }, Gl = { class: "po-flex po-items-center po-space-x-3" }, Kl = {
  key: 0,
  class: "po-block po-w-6 po-text-slate-100 md:po-hidden",
  role: "button"
}, Wl = {
  name: "PoTopBar"
}, I1 = /* @__PURE__ */ Object.assign(Wl, {
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
  emits: ["query", "profileSwitcherClick", "onSearchClear"],
  setup(e, { emit: t }) {
    function n(a) {
      t("profileSwitcherClick", a);
    }
    function o(a) {
      t("query", a);
    }
    function l(a) {
      t("onSearchClear", a);
    }
    return (a, r) => (i(), u("nav", Fl, [
      s("div", zl, [
        s("label", Hl, [
          C(h(kl), { class: "po-w-6 po-fill-current" })
        ])
      ]),
      s("div", ql, [
        s("div", Ul, [
          C(h(tn), { "app-name": e.appName }, {
            icon: D(() => [
              J(a.$slots, "appIcon", {}, () => [
                e.appIcon ? (i(), R(fe(e.appIcon), { key: 0 })) : x("", !0)
              ])
            ]),
            _: 3
          }, 8, ["app-name"]),
          e.hasSearch ? (i(), R(h(sn), {
            key: 0,
            onQuery: o,
            onOnClear: l,
            "current-query": e.currentQuery
          }, null, 8, ["current-query"])) : x("", !0),
          s("div", Gl, [
            e.hasSearch ? (i(), u("span", Kl, [
              C(h(Ct), { class: "po-stroke-current" })
            ])) : x("", !0),
            C(h(Pa), {
              notifications: e.notifications,
              "has-new-notifications": e.hasNewNotifications
            }, null, 8, ["notifications", "has-new-notifications"]),
            C(h(ba), { "app-list": e.appList }, null, 8, ["app-list"]),
            C(h(ts), {
              "profile-switcher-data": e.profileSwitcherData,
              onButtonClick: n
            }, null, 8, ["profile-switcher-data"])
          ])
        ])
      ])
    ]));
  }
}), Yl = { class: "po-flex po-items-center po-justify-center po-space-x-3" }, Zl = { class: "po-w-8 po-text-slate-100 app-icon" }, Jl = { class: "po-font-light po-text-lg po-text-slate-100" }, Ql = { class: "po-hidden md:po-block" }, Xl = { class: "po-block md:po-hidden" }, en = {
  name: "PoAppIcon"
}, tn = /* @__PURE__ */ Object.assign(en, {
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
    const t = e, n = S(() => t.appName.match(/\b[A-Z]/g).join(""));
    return (o, l) => (i(), u("div", Yl, [
      s("div", Zl, [
        J(o.$slots, "icon")
      ]),
      s("span", Jl, [
        s("span", Ql, b(e.appName), 1),
        s("span", Xl, b(h(n)), 1)
      ])
    ]));
  }
}), on = { class: "po-flex-grow po-hidden po-relative md:po-block" }, ln = ["placeholder"], nn = { class: "po-absolute po-inset-y-0 po-left-0 po-flex po-items-center po-pl-3 po-pointer-events-none po-transition-all po-ease-linear po-duration-100 po-text-slate-400 po-origin-center peer-hover/search:po-scale-105 peer-focus/search:po-text-slate-100" }, an = {
  name: "PoSearchBar"
}, sn = /* @__PURE__ */ Object.assign(an, {
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
    const n = e;
    let o = $("");
    const l = (a) => {
      a.key === "Enter" && 0 < o.value.length && t("query", o.value);
    };
    return K(() => {
      document.addEventListener("keydown", l), o.value = n.currentQuery;
    }), se(() => {
      document.removeEventListener("keydown", l);
    }), X(o, async (a, r) => {
      a === "" && t("onClear", !0);
    }), (a, r) => (i(), u("div", on, [
      $t(s("input", {
        "onUpdate:modelValue": r[0] || (r[0] = (p) => dl(o) ? o.value = p : o = p),
        type: "text",
        id: "main-search",
        placeholder: e.placeholder,
        class: "peer/search po-bg-transparent po-border po-border-transparent po-text-slate-100 po-text-sm po-rounded-md po-ring-0 po-outline-none focus:po-outline-none focus:po-ring-0 po-transition-colors po-ease-linear po-duration-100 po-block po-w-full po-pl-10 po-p-2.5 po-appearance-none focus:po-border-slate-400 hover:po-border-slate-600"
      }, null, 8, ln), [
        [mo, h(o)]
      ]),
      s("div", nn, [
        C(h(Ct), { class: "po-w-5 po-h-5 po-stroke-current" })
      ])
    ]));
  }
});
function W(e, t, ...n) {
  if (e in t) {
    let l = t[e];
    return typeof l == "function" ? l(...n) : l;
  }
  let o = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((l) => `"${l}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(o, W), o;
}
var pe = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(pe || {}), $e = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))($e || {});
function U({ visible: e = !0, features: t = 0, ourProps: n, theirProps: o, ...l }) {
  var a;
  let r = rn(o, n), p = Object.assign(l, { props: r });
  if (e || t & 2 && r.static)
    return ut(p);
  if (t & 1) {
    let c = (a = r.unmount) == null || a ? 0 : 1;
    return W(c, { [0]() {
      return null;
    }, [1]() {
      return ut({ ...l, props: { ...r, hidden: !0, style: { display: "none" } } });
    } });
  }
  return ut(p);
}
function ut({ props: e, attrs: t, slots: n, slot: o, name: l }) {
  var a;
  let { as: r, ...p } = Ae(e, ["unmount", "static"]), c = (a = n.default) == null ? void 0 : a.call(n, o), d = {};
  if (o) {
    let f = !1, m = [];
    for (let [y, w] of Object.entries(o))
      typeof w == "boolean" && (f = !0), w === !0 && m.push(y);
    f && (d["data-headlessui-state"] = m.join(" "));
  }
  if (r === "template") {
    if (c = xo(c ?? []), Object.keys(p).length > 0 || Object.keys(t).length > 0) {
      let [f, ...m] = c ?? [];
      if (!pn(f) || m.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${l} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(p).concat(Object.keys(t)).sort((y, w) => y.localeCompare(w)).map((y) => `  - ${y}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((y) => `  - ${y}`).join(`
`)].join(`
`));
      return fl(f, Object.assign({}, p, d));
    }
    return Array.isArray(c) && c.length === 1 ? c[0] : c;
  }
  return Y(r, Object.assign({}, p, d), { default: () => c });
}
function xo(e) {
  return e.flatMap((t) => t.type === I ? xo(t.children) : [t]);
}
function rn(...e) {
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
      for (let p of r) {
        if (l instanceof Event && l.defaultPrevented)
          return;
        p(l, ...a);
      }
    } });
  return t;
}
function St(e) {
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
function pn(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let un = 0;
function cn() {
  return ++un;
}
function Z() {
  return cn();
}
var F = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(F || {});
function dn(e) {
  throw new Error("Unexpected object: " + e);
}
var le = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(le || {});
function fn(e, t) {
  let n = t.resolveItems();
  if (n.length <= 0)
    return null;
  let o = t.resolveActiveIndex(), l = o ?? -1, a = (() => {
    switch (e.focus) {
      case 0:
        return n.findIndex((r) => !t.resolveDisabled(r));
      case 1: {
        let r = n.slice().reverse().findIndex((p, c, d) => l !== -1 && d.length - c - 1 >= l ? !1 : !t.resolveDisabled(p));
        return r === -1 ? r : n.length - 1 - r;
      }
      case 2:
        return n.findIndex((r, p) => p <= l ? !1 : !t.resolveDisabled(r));
      case 3: {
        let r = n.slice().reverse().findIndex((p) => !t.resolveDisabled(p));
        return r === -1 ? r : n.length - 1 - r;
      }
      case 4:
        return n.findIndex((r) => t.resolveId(r) === e.id);
      case 5:
        return null;
      default:
        dn(e);
    }
  })();
  return a === -1 ? o : a;
}
function P(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Vo = Symbol("Context");
var ae = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ae || {});
function vn() {
  return Oe() !== null;
}
function Oe() {
  return ee(Vo, null);
}
function Qe(e) {
  oe(Vo, e);
}
function Wt(e, t) {
  if (e)
    return e;
  let n = t ?? "button";
  if (typeof n == "string" && n.toLowerCase() === "button")
    return "button";
}
function Xe(e, t) {
  let n = $(Wt(e.value.type, e.value.as));
  return K(() => {
    n.value = Wt(e.value.type, e.value.as);
  }), Q(() => {
    var o;
    n.value || !P(t) || P(t) instanceof HTMLButtonElement && !((o = P(t)) != null && o.hasAttribute("type")) && (n.value = "button");
  }), n;
}
const et = typeof window > "u" || typeof document > "u";
function ie(e) {
  if (et)
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
function wo({ container: e, accept: t, walk: n, enabled: o }) {
  Q(() => {
    let l = e.value;
    if (!l || o !== void 0 && !o.value)
      return;
    let a = ie(e);
    if (!a)
      return;
    let r = Object.assign((c) => t(c), { acceptNode: t }), p = a.createTreeWalker(l, NodeFilter.SHOW_ELEMENT, r, !1);
    for (; p.nextNode(); )
      n(p.currentNode);
  });
}
let ht = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var te = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(te || {}), Ue = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Ue || {}), mn = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(mn || {});
function Et(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(ht)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Pt = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Pt || {});
function ko(e, t = 0) {
  var n;
  return e === ((n = ie(e)) == null ? void 0 : n.body) ? !1 : W(t, { [0]() {
    return e.matches(ht);
  }, [1]() {
    let o = e;
    for (; o !== null; ) {
      if (o.matches(ht))
        return !0;
      o = o.parentElement;
    }
    return !1;
  } });
}
function Te(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let hn = ["textarea", "input"].join(",");
function bn(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, hn)) != null ? n : !1;
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
function de(e, t, { sorted: n = !0, relativeTo: o = null, skipElements: l = [] } = {}) {
  var a;
  let r = (a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? a : document, p = Array.isArray(e) ? n ? Ot(e) : e : Et(e);
  l.length > 0 && (p = p.filter((g) => !l.includes(g))), o = o ?? r.activeElement;
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
      return Math.max(0, p.indexOf(o)) - 1;
    if (t & 4)
      return Math.max(0, p.indexOf(o)) + 1;
    if (t & 8)
      return p.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), f = t & 32 ? { preventScroll: !0 } : {}, m = 0, y = p.length, w;
  do {
    if (m >= y || m + y <= 0)
      return 0;
    let g = d + m;
    if (t & 16)
      g = (g + y) % y;
    else {
      if (g < 0)
        return 3;
      if (g >= y)
        return 1;
    }
    w = p[g], w == null || w.focus(f), m += c;
  } while (w !== r.activeElement);
  return t & 6 && bn(w) && w.select(), w.hasAttribute("tabindex") || w.setAttribute("tabindex", "0"), 2;
}
function ct(e, t, n) {
  et || Q((o) => {
    document.addEventListener(e, t, n), o(() => document.removeEventListener(e, t, n));
  });
}
function Lt(e, t, n = S(() => !0)) {
  function o(a, r) {
    if (!n.value || a.defaultPrevented)
      return;
    let p = r(a);
    if (p === null || !p.getRootNode().contains(p))
      return;
    let c = function d(f) {
      return typeof f == "function" ? d(f()) : Array.isArray(f) || f instanceof Set ? f : [f];
    }(e);
    for (let d of c) {
      if (d === null)
        continue;
      let f = d instanceof HTMLElement ? d : P(d);
      if (f != null && f.contains(p) || a.composed && a.composedPath().includes(f))
        return;
    }
    return !ko(p, Pt.Loose) && p.tabIndex !== -1 && a.preventDefault(), t(a, p);
  }
  let l = $(null);
  ct("mousedown", (a) => {
    var r, p;
    n.value && (l.value = ((p = (r = a.composedPath) == null ? void 0 : r.call(a)) == null ? void 0 : p[0]) || a.target);
  }, !0), ct("click", (a) => {
    !l.value || (o(a, () => l.value), l.value = null);
  }, !0), ct("blur", (a) => o(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var be = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(be || {});
let xe = q({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: n }) {
  return () => {
    let { features: o, ...l } = e, a = { "aria-hidden": (o & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(o & 4) === 4 && (o & 2) !== 2 && { display: "none" } } };
    return U({ ourProps: a, theirProps: l, slot: {}, attrs: n, slots: t, name: "Hidden" });
  };
} });
function Nt(e = {}, t = null, n = []) {
  for (let [o, l] of Object.entries(e))
    _o(n, $o(t, o), l);
  return n;
}
function $o(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function _o(e, t, n) {
  if (Array.isArray(n))
    for (let [o, l] of n.entries())
      _o(e, $o(t, o.toString()), l);
  else
    n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : Nt(n, t, e);
}
function Co(e) {
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
function Dt(e, t, n) {
  let o = $(n == null ? void 0 : n.value), l = S(() => e.value !== void 0);
  return [S(() => l.value ? e.value : o.value), function(a) {
    return l.value || (o.value = a), t == null ? void 0 : t(a);
  }];
}
function Yt(e) {
  return [e.screenX, e.screenY];
}
function gn() {
  let e = $([-1, -1]);
  return { wasMoved(t) {
    let n = Yt(t);
    return e.value[0] === n[0] && e.value[1] === n[1] ? !1 : (e.value = n, !0);
  }, update(t) {
    e.value = Yt(t);
  } };
}
function yn(e, t) {
  return e === t;
}
var xn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(xn || {}), Vn = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(Vn || {}), wn = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(wn || {});
let So = Symbol("ComboboxContext");
function je(e) {
  let t = ee(So, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, je), n;
  }
  return t;
}
let kn = q({ name: "Combobox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => yn }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String }, nullable: { type: Boolean, default: !1 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: n, emit: o }) {
  let l = $(1), a = $(null), r = $(null), p = $(null), c = $(null), d = $({ static: !1, hold: !1 }), f = $([]), m = $(null), y = $(1), w = $(!1);
  function g(L = (T) => T) {
    let T = m.value !== null ? f.value[m.value] : null, B = Ot(L(f.value.slice()), (A) => P(A.dataRef.domRef)), O = T ? B.indexOf(T) : null;
    return O === -1 && (O = null), { options: B, activeOptionIndex: O };
  }
  let _ = S(() => e.multiple ? 1 : 0), v = S(() => e.nullable), [V, k] = Dt(S(() => e.modelValue === void 0 ? W(_.value, { [1]: [], [0]: void 0 }) : e.modelValue), (L) => o("update:modelValue", L), S(() => e.defaultValue)), E = { comboboxState: l, value: V, mode: _, compare(L, T) {
    if (typeof e.by == "string") {
      let B = e.by;
      return (L == null ? void 0 : L[B]) === (T == null ? void 0 : T[B]);
    }
    return e.by(L, T);
  }, defaultValue: S(() => e.defaultValue), nullable: v, inputRef: r, labelRef: a, buttonRef: p, optionsRef: c, disabled: S(() => e.disabled), options: f, change(L) {
    k(L);
  }, activeOptionIndex: S(() => {
    if (w.value && m.value === null && f.value.length > 0) {
      let L = f.value.findIndex((T) => !T.dataRef.disabled);
      if (L !== -1)
        return L;
    }
    return m.value;
  }), activationTrigger: y, optionsPropsRef: d, closeCombobox() {
    w.value = !1, !e.disabled && l.value !== 1 && (l.value = 1, m.value = null);
  }, openCombobox() {
    if (w.value = !0, e.disabled || l.value === 0)
      return;
    let L = f.value.findIndex((T) => {
      let B = G(T.dataRef.value);
      return W(_.value, { [0]: () => E.compare(G(E.value.value), G(B)), [1]: () => G(E.value.value).some((O) => E.compare(G(O), G(B))) });
    });
    L !== -1 && (m.value = L), l.value = 0;
  }, goToOption(L, T, B) {
    if (w.value = !1, e.disabled || c.value && !d.value.static && l.value === 1)
      return;
    let O = g();
    if (O.activeOptionIndex === null) {
      let H = O.options.findIndex((he) => !he.dataRef.disabled);
      H !== -1 && (O.activeOptionIndex = H);
    }
    let A = fn(L === le.Specific ? { focus: le.Specific, id: T } : { focus: L }, { resolveItems: () => O.options, resolveActiveIndex: () => O.activeOptionIndex, resolveId: (H) => H.id, resolveDisabled: (H) => H.dataRef.disabled });
    m.value = A, y.value = B ?? 1, f.value = O.options;
  }, selectOption(L) {
    let T = f.value.find((O) => O.id === L);
    if (!T)
      return;
    let { dataRef: B } = T;
    k(W(_.value, { [0]: () => B.value, [1]: () => {
      let O = G(E.value.value).slice(), A = G(B.value), H = O.findIndex((he) => E.compare(A, G(he)));
      return H === -1 ? O.push(A) : O.splice(H, 1), O;
    } }));
  }, selectActiveOption() {
    if (E.activeOptionIndex.value === null)
      return;
    let { dataRef: L, id: T } = f.value[E.activeOptionIndex.value];
    k(W(_.value, { [0]: () => L.value, [1]: () => {
      let B = G(E.value.value).slice(), O = G(L.value), A = B.findIndex((H) => E.compare(O, G(H)));
      return A === -1 ? B.push(O) : B.splice(A, 1), B;
    } })), E.goToOption(le.Specific, T);
  }, registerOption(L, T) {
    let B = { id: L, dataRef: T }, O = g((A) => [...A, B]);
    if (m.value === null) {
      let A = T.value.value;
      W(_.value, { [0]: () => E.compare(G(E.value.value), G(A)), [1]: () => G(E.value.value).some((H) => E.compare(G(H), G(A))) }) && (O.activeOptionIndex = O.options.indexOf(B));
    }
    f.value = O.options, m.value = O.activeOptionIndex, y.value = 1;
  }, unregisterOption(L) {
    let T = g((B) => {
      let O = B.findIndex((A) => A.id === L);
      return O !== -1 && B.splice(O, 1), B;
    });
    f.value = T.options, m.value = T.activeOptionIndex, y.value = 1;
  } };
  Lt([r, p, c], () => E.closeCombobox(), S(() => l.value === 0)), oe(So, E), Qe(S(() => W(l.value, { [0]: ae.Open, [1]: ae.Closed })));
  let j = S(() => E.activeOptionIndex.value === null ? null : f.value[E.activeOptionIndex.value].dataRef.value), M = S(() => {
    var L;
    return (L = P(r)) == null ? void 0 : L.closest("form");
  });
  return K(() => {
    X([M], () => {
      if (!M.value || e.defaultValue === void 0)
        return;
      function L() {
        E.change(e.defaultValue);
      }
      return M.value.addEventListener("reset", L), () => {
        var T;
        (T = M.value) == null || T.removeEventListener("reset", L);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: L, disabled: T, ...B } = e, O = { open: l.value === 0, disabled: T, activeIndex: E.activeOptionIndex.value, activeOption: j.value, value: V.value };
    return Y(I, [...L != null && V.value != null ? Nt({ [L]: V.value }).map(([A, H]) => Y(xe, St({ features: be.Hidden, key: A, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: A, value: H }))) : [], U({ theirProps: { ...n, ...Ae(B, ["modelValue", "defaultValue", "nullable", "multiple", "onUpdate:modelValue", "by"]) }, ourProps: {}, slot: O, slots: t, attrs: n, name: "Combobox" })]);
  };
} }), $n = q({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-combobox-label-${Z()}` } }, setup(e, { attrs: t, slots: n }) {
  let o = je("ComboboxLabel");
  function l() {
    var a;
    (a = P(o.inputRef)) == null || a.focus({ preventScroll: !0 });
  }
  return () => {
    let a = { open: o.comboboxState.value === 0, disabled: o.disabled.value }, { id: r, ...p } = e, c = { id: r, ref: o.labelRef, onClick: l };
    return U({ ourProps: c, theirProps: p, slot: a, attrs: t, slots: n, name: "ComboboxLabel" });
  };
} }), _n = q({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-combobox-button-${Z()}` } }, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = je("ComboboxButton");
  o({ el: l.buttonRef, $el: l.buttonRef });
  function a(c) {
    l.disabled.value || (l.comboboxState.value === 0 ? l.closeCombobox() : (c.preventDefault(), l.openCombobox()), ke(() => {
      var d;
      return (d = P(l.inputRef)) == null ? void 0 : d.focus({ preventScroll: !0 });
    }));
  }
  function r(c) {
    switch (c.key) {
      case F.ArrowDown:
        c.preventDefault(), c.stopPropagation(), l.comboboxState.value === 1 && l.openCombobox(), ke(() => {
          var d;
          return (d = l.inputRef.value) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        return;
      case F.ArrowUp:
        c.preventDefault(), c.stopPropagation(), l.comboboxState.value === 1 && (l.openCombobox(), ke(() => {
          l.value.value || l.goToOption(le.Last);
        })), ke(() => {
          var d;
          return (d = l.inputRef.value) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        return;
      case F.Escape:
        if (l.comboboxState.value !== 0)
          return;
        c.preventDefault(), l.optionsRef.value && !l.optionsPropsRef.value.static && c.stopPropagation(), l.closeCombobox(), ke(() => {
          var d;
          return (d = l.inputRef.value) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        return;
    }
  }
  let p = Xe(S(() => ({ as: e.as, type: t.type })), l.buttonRef);
  return () => {
    var c, d;
    let f = { open: l.comboboxState.value === 0, disabled: l.disabled.value, value: l.value.value }, { id: m, ...y } = e, w = { ref: l.buttonRef, id: m, type: p.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (c = P(l.optionsRef)) == null ? void 0 : c.id, "aria-expanded": l.disabled.value ? void 0 : l.comboboxState.value === 0, "aria-labelledby": l.labelRef.value ? [(d = P(l.labelRef)) == null ? void 0 : d.id, m].join(" ") : void 0, disabled: l.disabled.value === !0 ? !0 : void 0, onKeydown: r, onClick: a };
    return U({ ourProps: w, theirProps: y, slot: f, attrs: t, slots: n, name: "ComboboxButton" });
  };
} }), Cn = q({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: () => `headlessui-combobox-input-${Z()}` } }, emits: { change: (e) => !0 }, setup(e, { emit: t, attrs: n, slots: o, expose: l }) {
  let a = je("ComboboxInput"), r = { value: !1 };
  l({ el: a.inputRef, $el: a.inputRef });
  let p = S(() => {
    var v;
    let V = a.value.value;
    return P(a.inputRef) ? typeof e.displayValue < "u" && V !== void 0 ? (v = e.displayValue(V)) != null ? v : "" : typeof V == "string" ? V : "" : "";
  });
  K(() => {
    X([p, a.comboboxState], ([v, V], [k, E]) => {
      if (r.value)
        return;
      let j = P(a.inputRef);
      !j || (E === 0 && V === 1 || v !== k) && (j.value = v);
    }, { immediate: !0 });
  });
  let c = $(!1);
  function d() {
    c.value = !0;
  }
  function f() {
    setTimeout(() => {
      c.value = !1;
    });
  }
  function m(v) {
    switch (r.value = !0, v.key) {
      case F.Backspace:
      case F.Delete:
        if (a.mode.value !== 0 || !a.nullable.value)
          return;
        let V = v.currentTarget;
        requestAnimationFrame(() => {
          if (V.value === "") {
            a.change(null);
            let k = P(a.optionsRef);
            k && (k.scrollTop = 0), a.goToOption(le.Nothing);
          }
        });
        break;
      case F.Enter:
        if (r.value = !1, a.comboboxState.value !== 0 || c.value)
          return;
        if (v.preventDefault(), v.stopPropagation(), a.activeOptionIndex.value === null) {
          a.closeCombobox();
          return;
        }
        a.selectActiveOption(), a.mode.value === 0 && a.closeCombobox();
        break;
      case F.ArrowDown:
        return r.value = !1, v.preventDefault(), v.stopPropagation(), W(a.comboboxState.value, { [0]: () => a.goToOption(le.Next), [1]: () => a.openCombobox() });
      case F.ArrowUp:
        return r.value = !1, v.preventDefault(), v.stopPropagation(), W(a.comboboxState.value, { [0]: () => a.goToOption(le.Previous), [1]: () => {
          a.openCombobox(), ke(() => {
            a.value.value || a.goToOption(le.Last);
          });
        } });
      case F.Home:
        if (v.shiftKey)
          break;
        return r.value = !1, v.preventDefault(), v.stopPropagation(), a.goToOption(le.First);
      case F.PageUp:
        return r.value = !1, v.preventDefault(), v.stopPropagation(), a.goToOption(le.First);
      case F.End:
        if (v.shiftKey)
          break;
        return r.value = !1, v.preventDefault(), v.stopPropagation(), a.goToOption(le.Last);
      case F.PageDown:
        return r.value = !1, v.preventDefault(), v.stopPropagation(), a.goToOption(le.Last);
      case F.Escape:
        if (r.value = !1, a.comboboxState.value !== 0)
          return;
        v.preventDefault(), a.optionsRef.value && !a.optionsPropsRef.value.static && v.stopPropagation(), a.closeCombobox();
        break;
      case F.Tab:
        if (r.value = !1, a.comboboxState.value !== 0)
          return;
        a.mode.value === 0 && a.selectActiveOption(), a.closeCombobox();
        break;
    }
  }
  function y(v) {
    t("change", v);
  }
  function w(v) {
    a.openCombobox(), t("change", v);
  }
  function g() {
    r.value = !1;
  }
  let _ = S(() => {
    var v, V, k, E;
    return (E = (k = (V = e.defaultValue) != null ? V : a.defaultValue.value !== void 0 ? (v = e.displayValue) == null ? void 0 : v.call(e, a.defaultValue.value) : null) != null ? k : a.defaultValue.value) != null ? E : "";
  });
  return () => {
    var v, V, k, E, j, M;
    let L = { open: a.comboboxState.value === 0 }, { id: T, displayValue: B, ...O } = e, A = { "aria-controls": (v = a.optionsRef.value) == null ? void 0 : v.id, "aria-expanded": a.disabled.value ? void 0 : a.comboboxState.value === 0, "aria-activedescendant": a.activeOptionIndex.value === null || (V = a.options.value[a.activeOptionIndex.value]) == null ? void 0 : V.id, "aria-multiselectable": a.mode.value === 1 ? !0 : void 0, "aria-labelledby": (j = (k = P(a.labelRef)) == null ? void 0 : k.id) != null ? j : (E = P(a.buttonRef)) == null ? void 0 : E.id, id: T, onCompositionstart: d, onCompositionend: f, onKeydown: m, onChange: y, onInput: w, onBlur: g, role: "combobox", type: (M = n.type) != null ? M : "text", tabIndex: 0, ref: a.inputRef, defaultValue: _.value };
    return U({ ourProps: A, theirProps: O, slot: L, attrs: n, slots: o, features: pe.RenderStrategy | pe.Static, name: "ComboboxInput" });
  };
} }), Sn = q({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, hold: { type: [Boolean], default: !1 } }, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = je("ComboboxOptions"), a = `headlessui-combobox-options-${Z()}`;
  o({ el: l.optionsRef, $el: l.optionsRef }), Q(() => {
    l.optionsPropsRef.value.static = e.static;
  }), Q(() => {
    l.optionsPropsRef.value.hold = e.hold;
  });
  let r = Oe(), p = S(() => r !== null ? r.value === ae.Open : l.comboboxState.value === 0);
  return wo({ container: S(() => P(l.optionsRef)), enabled: S(() => l.comboboxState.value === 0), accept(c) {
    return c.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : c.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(c) {
    c.setAttribute("role", "none");
  } }), () => {
    var c, d, f, m;
    let y = { open: l.comboboxState.value === 0 }, w = { "aria-activedescendant": l.activeOptionIndex.value === null || (c = l.options.value[l.activeOptionIndex.value]) == null ? void 0 : c.id, "aria-labelledby": (m = (d = P(l.labelRef)) == null ? void 0 : d.id) != null ? m : (f = P(l.buttonRef)) == null ? void 0 : f.id, id: a, ref: l.optionsRef, role: "listbox" }, g = Ae(e, ["hold"]);
    return U({ ourProps: w, theirProps: g, slot: y, attrs: t, slots: n, features: pe.RenderStrategy | pe.Static, visible: p.value, name: "ComboboxOptions" });
  };
} }), En = q({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: n, expose: o }) {
  let l = je("ComboboxOption"), a = `headlessui-combobox-option-${Z()}`, r = $(null);
  o({ el: r, $el: r });
  let p = S(() => l.activeOptionIndex.value !== null ? l.options.value[l.activeOptionIndex.value].id === a : !1), c = S(() => W(l.mode.value, { [0]: () => l.compare(G(l.value.value), G(e.value)), [1]: () => G(l.value.value).some((v) => l.compare(G(v), G(e.value))) })), d = S(() => ({ disabled: e.disabled, value: e.value, domRef: r }));
  K(() => l.registerOption(a, d)), se(() => l.unregisterOption(a)), Q(() => {
    l.comboboxState.value === 0 && (!p.value || l.activationTrigger.value !== 0 && ke(() => {
      var v, V;
      return (V = (v = P(r)) == null ? void 0 : v.scrollIntoView) == null ? void 0 : V.call(v, { block: "nearest" });
    }));
  });
  function f(v) {
    if (e.disabled)
      return v.preventDefault();
    l.selectOption(a), l.mode.value === 0 && l.closeCombobox();
  }
  function m() {
    if (e.disabled)
      return l.goToOption(le.Nothing);
    l.goToOption(le.Specific, a);
  }
  let y = gn();
  function w(v) {
    y.update(v);
  }
  function g(v) {
    !y.wasMoved(v) || e.disabled || p.value || l.goToOption(le.Specific, a, 0);
  }
  function _(v) {
    !y.wasMoved(v) || e.disabled || !p.value || l.optionsPropsRef.value.hold || l.goToOption(le.Nothing);
  }
  return () => {
    let { disabled: v } = e, V = { active: p.value, selected: c.value, disabled: v }, k = { id: a, ref: r, role: "option", tabIndex: v === !0 ? void 0 : -1, "aria-disabled": v === !0 ? !0 : void 0, "aria-selected": c.value, disabled: void 0, onClick: f, onFocus: m, onPointerenter: w, onMouseenter: w, onPointermove: g, onMousemove: g, onPointerleave: _, onMouseleave: _ };
    return U({ ourProps: k, theirProps: e, slot: V, attrs: n, slots: t, name: "ComboboxOption" });
  };
} });
function Pn(e, t, n) {
  et || Q((o) => {
    window.addEventListener(e, t, n), o(() => window.removeEventListener(e, t, n));
  });
}
var me = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(me || {});
function Tt() {
  let e = $(0);
  return Pn("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Bt(e, t, n, o) {
  et || Q((l) => {
    e = e ?? window, e.addEventListener(t, n, o), l(() => e.removeEventListener(t, n, o));
  });
}
function On(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
var Eo = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Eo || {});
let Ie = Object.assign(q({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: Object, default: $(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = $(null);
  o({ el: l, $el: l });
  let a = S(() => ie(l));
  Ln({ ownerDocument: a }, S(() => Boolean(e.features & 16)));
  let r = Nn({ ownerDocument: a, container: l, initialFocus: S(() => e.initialFocus) }, S(() => Boolean(e.features & 2)));
  Dn({ ownerDocument: a, container: l, containers: e.containers, previousActiveElement: r }, S(() => Boolean(e.features & 8)));
  let p = Tt();
  function c(y) {
    let w = P(l);
    w && ((g) => g())(() => {
      W(p.value, { [me.Forwards]: () => de(w, te.First, { skipElements: [y.relatedTarget] }), [me.Backwards]: () => de(w, te.Last, { skipElements: [y.relatedTarget] }) });
    });
  }
  let d = $(!1);
  function f(y) {
    y.key === "Tab" && (d.value = !0, requestAnimationFrame(() => {
      d.value = !1;
    }));
  }
  function m(y) {
    var w;
    let g = new Set((w = e.containers) == null ? void 0 : w.value);
    g.add(l);
    let _ = y.relatedTarget;
    !_ || _.dataset.headlessuiFocusGuard !== "true" && (Po(g, _) || (d.value ? de(P(l), W(p.value, { [me.Forwards]: () => te.Next, [me.Backwards]: () => te.Previous }) | te.WrapAround, { relativeTo: y.target }) : y.target instanceof HTMLElement && Te(y.target)));
  }
  return () => {
    let y = {}, w = { ref: l, onKeydown: f, onFocusout: m }, { features: g, initialFocus: _, containers: v, ...V } = e;
    return Y(I, [Boolean(g & 4) && Y(xe, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: be.Focusable }), U({ ourProps: w, theirProps: { ...t, ...V }, slot: y, attrs: t, slots: n, name: "FocusTrap" }), Boolean(g & 4) && Y(xe, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: be.Focusable })]);
  };
} }), { features: Eo });
function Ln({ ownerDocument: e }, t) {
  let n = $(null);
  function o() {
    var a;
    n.value || (n.value = (a = e.value) == null ? void 0 : a.activeElement);
  }
  function l() {
    !n.value || (Te(n.value), n.value = null);
  }
  K(() => {
    X(t, (a, r) => {
      a !== r && (a ? o() : l());
    }, { immediate: !0 });
  }), se(l);
}
function Nn({ ownerDocument: e, container: t, initialFocus: n }, o) {
  let l = $(null), a = $(!1);
  return K(() => a.value = !0), se(() => a.value = !1), K(() => {
    X([t, n, o], (r, p) => {
      if (r.every((d, f) => (p == null ? void 0 : p[f]) === d) || !o.value)
        return;
      let c = P(t);
      !c || On(() => {
        var d, f;
        if (!a.value)
          return;
        let m = P(n), y = (d = e.value) == null ? void 0 : d.activeElement;
        if (m) {
          if (m === y) {
            l.value = y;
            return;
          }
        } else if (c.contains(y)) {
          l.value = y;
          return;
        }
        m ? Te(m) : de(c, te.First | te.NoScroll) === Ue.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), l.value = (f = e.value) == null ? void 0 : f.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), l;
}
function Dn({ ownerDocument: e, container: t, containers: n, previousActiveElement: o }, l) {
  var a;
  Bt((a = e.value) == null ? void 0 : a.defaultView, "focus", (r) => {
    if (!l.value)
      return;
    let p = new Set(n == null ? void 0 : n.value);
    p.add(t);
    let c = o.value;
    if (!c)
      return;
    let d = r.target;
    d && d instanceof HTMLElement ? Po(p, d) ? (o.value = d, Te(d)) : (r.preventDefault(), r.stopPropagation(), Te(c)) : Te(o.value);
  }, !0);
}
function Po(e, t) {
  var n;
  for (let o of e)
    if ((n = o.value) != null && n.contains(t))
      return !0;
  return !1;
}
let Zt = "body > *", Ne = /* @__PURE__ */ new Set(), we = /* @__PURE__ */ new Map();
function Jt(e) {
  e.setAttribute("aria-hidden", "true"), e.inert = !0;
}
function Qt(e) {
  let t = we.get(e);
  !t || (t["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert);
}
function Tn(e, t = $(!0)) {
  Q((n) => {
    if (!t.value || !e.value)
      return;
    let o = e.value, l = ie(o);
    if (l) {
      Ne.add(o);
      for (let a of we.keys())
        a.contains(o) && (Qt(a), we.delete(a));
      l.querySelectorAll(Zt).forEach((a) => {
        if (a instanceof HTMLElement) {
          for (let r of Ne)
            if (a.contains(r))
              return;
          Ne.size === 1 && (we.set(a, { "aria-hidden": a.getAttribute("aria-hidden"), inert: a.inert }), Jt(a));
        }
      }), n(() => {
        if (Ne.delete(o), Ne.size > 0)
          l.querySelectorAll(Zt).forEach((a) => {
            if (a instanceof HTMLElement && !we.has(a)) {
              for (let r of Ne)
                if (a.contains(r))
                  return;
              we.set(a, { "aria-hidden": a.getAttribute("aria-hidden"), inert: a.inert }), Jt(a);
            }
          });
        else
          for (let a of we.keys())
            Qt(a), we.delete(a);
      });
    }
  });
}
let Oo = Symbol("ForcePortalRootContext");
function Bn() {
  return ee(Oo, !1);
}
let bt = q({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: n }) {
  return oe(Oo, e.force), () => {
    let { force: o, ...l } = e;
    return U({ theirProps: l, ourProps: {}, slot: {}, slots: t, attrs: n, name: "ForcePortalRoot" });
  };
} });
function An(e) {
  let t = ie(e);
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
let Lo = q({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: n }) {
  let o = $(null), l = S(() => ie(o)), a = Bn(), r = ee(No, null), p = $(a === !0 || r == null ? An(o.value) : r.resolveTarget());
  return Q(() => {
    a || r != null && (p.value = r.resolveTarget());
  }), se(() => {
    var c, d;
    let f = (c = l.value) == null ? void 0 : c.getElementById("headlessui-portal-root");
    !f || p.value === f && p.value.children.length <= 0 && ((d = p.value.parentElement) == null || d.removeChild(p.value));
  }), () => {
    if (p.value === null)
      return null;
    let c = { ref: o, "data-headlessui-portal": "" };
    return Y(_t, { to: p.value }, U({ ourProps: c, theirProps: e, slot: {}, attrs: n, slots: t, name: "Portal" }));
  };
} }), No = Symbol("PortalGroupContext"), jn = q({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: n }) {
  let o = vl({ resolveTarget() {
    return e.target;
  } });
  return oe(No, o), () => {
    let { target: l, ...a } = e;
    return U({ theirProps: a, ourProps: {}, slot: {}, attrs: t, slots: n, name: "PortalGroup" });
  };
} }), Do = Symbol("StackContext");
var gt = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(gt || {});
function In() {
  return ee(Do, () => {
  });
}
function Rn({ type: e, enabled: t, element: n, onUpdate: o }) {
  let l = In();
  function a(...r) {
    o == null || o(...r), l(...r);
  }
  K(() => {
    X(t, (r, p) => {
      r ? a(0, e, n) : p === !0 && a(1, e, n);
    }, { immediate: !0, flush: "sync" });
  }), se(() => {
    t.value && a(1, e, n);
  }), oe(Do, a);
}
let To = Symbol("DescriptionContext");
function Mn() {
  let e = ee(To, null);
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
  return oe(To, { register: l, slot: e, name: t, props: n }), S(() => o.value.length > 0 ? o.value.join(" ") : void 0);
}
let Fn = q({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${Z()}` } }, setup(e, { attrs: t, slots: n }) {
  let o = Mn();
  return K(() => se(o.register(e.id))), () => {
    let { name: l = "Description", slot: a = $({}), props: r = {} } = o, { id: p, ...c } = e, d = { ...Object.entries(r).reduce((f, [m, y]) => Object.assign(f, { [m]: h(y) }), {}), id: p };
    return U({ ourProps: d, theirProps: c, slot: a.value, attrs: t, slots: n, name: l });
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
function zn() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
var Hn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Hn || {});
let yt = Symbol("DialogContext");
function Me(e) {
  let t = ee(yt, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Me), n;
  }
  return t;
}
let ze = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", ot = q({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: ze }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${Z()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: n, slots: o, expose: l }) {
  var a;
  let r = $(!1);
  K(() => {
    r.value = !0;
  });
  let p = $(0), c = Oe(), d = S(() => e.open === ze && c !== null ? W(c.value, { [ae.Open]: !0, [ae.Closed]: !1 }) : e.open), f = $(/* @__PURE__ */ new Set()), m = $(null), y = $(null), w = S(() => ie(m));
  if (l({ el: m, $el: m }), !(e.open !== ze || c !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof d.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${d.value === ze ? void 0 : e.open}`);
  let g = S(() => r.value && d.value ? 0 : 1), _ = S(() => g.value === 0), v = S(() => p.value > 1), V = ee(yt, null) !== null, k = S(() => v.value ? "parent" : "leaf");
  Tn(m, S(() => v.value ? _.value : !1)), Rn({ type: "Dialog", enabled: S(() => g.value === 0), element: m, onUpdate: (T, B, O) => {
    if (B === "Dialog")
      return W(T, { [gt.Add]() {
        f.value.add(O), p.value += 1;
      }, [gt.Remove]() {
        f.value.delete(O), p.value -= 1;
      } });
  } });
  let E = tt({ name: "DialogDescription", slot: S(() => ({ open: d.value })) }), j = $(null), M = { titleId: j, panelRef: $(null), dialogState: g, setTitleId(T) {
    j.value !== T && (j.value = T);
  }, close() {
    t("close", !1);
  } };
  oe(yt, M);
  function L() {
    var T, B, O;
    return [...Array.from((B = (T = w.value) == null ? void 0 : T.querySelectorAll("body > *, [data-headlessui-portal]")) != null ? B : []).filter((A) => !(!(A instanceof HTMLElement) || A.contains(P(y)) || M.panelRef.value && A.contains(M.panelRef.value))), (O = M.panelRef.value) != null ? O : m.value];
  }
  return Lt(() => L(), (T, B) => {
    M.close(), ke(() => B == null ? void 0 : B.focus());
  }, S(() => g.value === 0 && !v.value)), Bt((a = w.value) == null ? void 0 : a.defaultView, "keydown", (T) => {
    T.defaultPrevented || T.key === F.Escape && g.value === 0 && (v.value || (T.preventDefault(), T.stopPropagation(), M.close()));
  }), Q((T) => {
    var B;
    if (g.value !== 0 || V)
      return;
    let O = w.value;
    if (!O)
      return;
    let A = At(), H = window.pageYOffset;
    function he(ce, ue, Ve) {
      let it = ce.style.getPropertyValue(ue);
      return Object.assign(ce.style, { [ue]: Ve }), A.add(() => {
        Object.assign(ce.style, { [ue]: it });
      });
    }
    let Le = O == null ? void 0 : O.documentElement, rt = ((B = O.defaultView) != null ? B : window).innerWidth - Le.clientWidth;
    if (he(Le, "overflow", "hidden"), rt > 0) {
      let ce = Le.clientWidth - Le.offsetWidth, ue = rt - ce;
      he(Le, "paddingRight", `${ue}px`);
    }
    if (zn()) {
      he(O.body, "marginTop", `-${H}px`), window.scrollTo(0, 0);
      let ce = null;
      A.addEventListener(O, "click", (ue) => {
        if (ue.target instanceof HTMLElement)
          try {
            let Ve = ue.target.closest("a");
            if (!Ve)
              return;
            let { hash: it } = new URL(Ve.href), pt = O.querySelector(it);
            pt && !L().some((cl) => cl.contains(pt)) && (ce = pt);
          } catch {
          }
      }, !0), A.addEventListener(O, "touchmove", (ue) => {
        ue.target instanceof HTMLElement && !L().some((Ve) => Ve.contains(ue.target)) && ue.preventDefault();
      }, { passive: !1 }), A.add(() => {
        window.scrollTo(0, window.pageYOffset + H), ce && ce.isConnected && (ce.scrollIntoView({ block: "nearest" }), ce = null);
      });
    }
    T(A.dispose);
  }), Q((T) => {
    if (g.value !== 0)
      return;
    let B = P(m);
    if (!B)
      return;
    let O = new IntersectionObserver((A) => {
      for (let H of A)
        H.boundingClientRect.x === 0 && H.boundingClientRect.y === 0 && H.boundingClientRect.width === 0 && H.boundingClientRect.height === 0 && M.close();
    });
    O.observe(B), T(() => O.disconnect());
  }), () => {
    let { id: T, open: B, initialFocus: O, ...A } = e, H = { ...n, ref: m, id: T, role: "dialog", "aria-modal": g.value === 0 ? !0 : void 0, "aria-labelledby": j.value, "aria-describedby": E.value }, he = { open: g.value === 0 };
    return Y(bt, { force: !0 }, () => [Y(Lo, () => Y(jn, { target: m.value }, () => Y(bt, { force: !1 }, () => Y(Ie, { initialFocus: O, containers: f, features: _.value ? W(k.value, { parent: Ie.features.RestoreFocus, leaf: Ie.features.All & ~Ie.features.FocusLock }) : Ie.features.None }, () => U({ ourProps: H, theirProps: A, slot: he, attrs: n, slots: o, visible: g.value === 0, features: pe.RenderStrategy | pe.Static, name: "Dialog" }))))), Y(xe, { features: be.Hidden, ref: y })]);
  };
} });
q({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${Z()}` } }, setup(e, { attrs: t, slots: n }) {
  let o = Me("DialogOverlay");
  function l(a) {
    a.target === a.currentTarget && (a.preventDefault(), a.stopPropagation(), o.close());
  }
  return () => {
    let { id: a, ...r } = e;
    return U({ ourProps: { id: a, "aria-hidden": !0, onClick: l }, theirProps: r, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogOverlay" });
  };
} });
q({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${Z()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = Me("DialogBackdrop"), a = $(null);
  return o({ el: a, $el: a }), K(() => {
    if (l.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: r, ...p } = e, c = { id: r, ref: a, "aria-hidden": !0 };
    return Y(bt, { force: !0 }, () => Y(Lo, () => U({ ourProps: c, theirProps: { ...t, ...p }, slot: { open: l.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogBackdrop" })));
  };
} });
let lt = q({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${Z()}` } }, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = Me("DialogPanel");
  o({ el: l.panelRef, $el: l.panelRef });
  function a(r) {
    r.stopPropagation();
  }
  return () => {
    let { id: r, ...p } = e, c = { id: r, ref: l.panelRef, onClick: a };
    return U({ ourProps: c, theirProps: p, slot: { open: l.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogPanel" });
  };
} }), Bo = q({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${Z()}` } }, setup(e, { attrs: t, slots: n }) {
  let o = Me("DialogTitle");
  return K(() => {
    o.setTitleId(e.id), se(() => o.setTitleId(null));
  }), () => {
    let { id: l, ...a } = e;
    return U({ ourProps: { id: l }, theirProps: a, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: n, name: "DialogTitle" });
  };
} });
var qn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(qn || {});
let Ao = Symbol("DisclosureContext");
function jt(e) {
  let t = ee(Ao, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, jt), n;
  }
  return t;
}
let jo = Symbol("DisclosurePanelContext");
function Un() {
  return ee(jo, null);
}
let Xt = q({ name: "Disclosure", props: { as: { type: [Object, String], default: "template" }, defaultOpen: { type: [Boolean], default: !1 } }, setup(e, { slots: t, attrs: n }) {
  let o = $(e.defaultOpen ? 0 : 1), l = $(null), a = $(null), r = { buttonId: $(null), panelId: $(null), disclosureState: o, panel: l, button: a, toggleDisclosure() {
    o.value = W(o.value, { [0]: 1, [1]: 0 });
  }, closeDisclosure() {
    o.value !== 1 && (o.value = 1);
  }, close(p) {
    r.closeDisclosure();
    let c = (() => p ? p instanceof HTMLElement ? p : p.value instanceof HTMLElement ? P(p) : P(r.button) : P(r.button))();
    c == null || c.focus();
  } };
  return oe(Ao, r), Qe(S(() => W(o.value, { [0]: ae.Open, [1]: ae.Closed }))), () => {
    let { defaultOpen: p, ...c } = e, d = { open: o.value === 0, close: r.close };
    return U({ theirProps: c, ourProps: {}, slot: d, slots: t, attrs: n, name: "Disclosure" });
  };
} }), eo = q({ name: "DisclosureButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-disclosure-button-${Z()}` } }, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = jt("DisclosureButton");
  K(() => {
    l.buttonId.value = e.id;
  }), se(() => {
    l.buttonId.value = null;
  });
  let a = Un(), r = S(() => a === null ? !1 : a.value === l.panelId.value), p = $(null);
  o({ el: p, $el: p }), r.value || Q(() => {
    l.button.value = p.value;
  });
  let c = Xe(S(() => ({ as: e.as, type: t.type })), p);
  function d() {
    var y;
    e.disabled || (r.value ? (l.toggleDisclosure(), (y = P(l.button)) == null || y.focus()) : l.toggleDisclosure());
  }
  function f(y) {
    var w;
    if (!e.disabled)
      if (r.value)
        switch (y.key) {
          case F.Space:
          case F.Enter:
            y.preventDefault(), y.stopPropagation(), l.toggleDisclosure(), (w = P(l.button)) == null || w.focus();
            break;
        }
      else
        switch (y.key) {
          case F.Space:
          case F.Enter:
            y.preventDefault(), y.stopPropagation(), l.toggleDisclosure();
            break;
        }
  }
  function m(y) {
    switch (y.key) {
      case F.Space:
        y.preventDefault();
        break;
    }
  }
  return () => {
    let y = { open: l.disclosureState.value === 0 }, { id: w, ...g } = e, _ = r.value ? { ref: p, type: c.value, onClick: d, onKeydown: f } : { id: w, ref: p, type: c.value, "aria-expanded": e.disabled ? void 0 : l.disclosureState.value === 0, "aria-controls": P(l.panel) ? l.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onClick: d, onKeydown: f, onKeyup: m };
    return U({ ourProps: _, theirProps: g, slot: y, attrs: t, slots: n, name: "DisclosureButton" });
  };
} }), to = q({ name: "DisclosurePanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-disclosure-panel-${Z()}` } }, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = jt("DisclosurePanel");
  K(() => {
    l.panelId.value = e.id;
  }), se(() => {
    l.panelId.value = null;
  }), o({ el: l.panel, $el: l.panel }), oe(jo, l.panelId);
  let a = Oe(), r = S(() => a !== null ? a.value === ae.Open : l.disclosureState.value === 0);
  return () => {
    let p = { open: l.disclosureState.value === 0, close: l.close }, { id: c, ...d } = e, f = { id: c, ref: l.panel };
    return U({ ourProps: f, theirProps: d, slot: p, attrs: t, slots: n, features: pe.RenderStrategy | pe.Static, visible: r.value, name: "DisclosurePanel" });
  };
} });
var Gn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Gn || {});
let Io = Symbol("PopoverContext");
function nt(e) {
  let t = ee(Io, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <${at.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, nt), n;
  }
  return t;
}
let Ro = Symbol("PopoverGroupContext");
function Mo() {
  return ee(Ro, null);
}
let Fo = Symbol("PopoverPanelContext");
function Kn() {
  return ee(Fo, null);
}
let at = q({ name: "Popover", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: n, expose: o }) {
  var l;
  let a = $(null);
  o({ el: a, $el: a });
  let r = $(1), p = $(null), c = $(null), d = $(null), f = $(null), m = S(() => ie(a)), y = S(() => {
    var k, E;
    if (!P(p) || !P(f))
      return !1;
    for (let A of document.querySelectorAll("body > *"))
      if (Number(A == null ? void 0 : A.contains(P(p))) ^ Number(A == null ? void 0 : A.contains(P(f))))
        return !0;
    let j = Et(), M = j.indexOf(P(p)), L = (M + j.length - 1) % j.length, T = (M + 1) % j.length, B = j[L], O = j[T];
    return !((k = P(f)) != null && k.contains(B)) && !((E = P(f)) != null && E.contains(O));
  }), w = { popoverState: r, buttonId: $(null), panelId: $(null), panel: f, button: p, isPortalled: y, beforePanelSentinel: c, afterPanelSentinel: d, togglePopover() {
    r.value = W(r.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    r.value !== 1 && (r.value = 1);
  }, close(k) {
    w.closePopover();
    let E = (() => k ? k instanceof HTMLElement ? k : k.value instanceof HTMLElement ? P(k) : P(w.button) : P(w.button))();
    E == null || E.focus();
  } };
  oe(Io, w), Qe(S(() => W(r.value, { [0]: ae.Open, [1]: ae.Closed })));
  let g = { buttonId: w.buttonId, panelId: w.panelId, close() {
    w.closePopover();
  } }, _ = Mo(), v = _ == null ? void 0 : _.registerPopover;
  function V() {
    var k, E, j, M;
    return (M = _ == null ? void 0 : _.isFocusWithinPopoverGroup()) != null ? M : ((k = m.value) == null ? void 0 : k.activeElement) && (((E = P(p)) == null ? void 0 : E.contains(m.value.activeElement)) || ((j = P(f)) == null ? void 0 : j.contains(m.value.activeElement)));
  }
  return Q(() => v == null ? void 0 : v(g)), Bt((l = m.value) == null ? void 0 : l.defaultView, "focus", (k) => {
    var E, j;
    r.value === 0 && (V() || !p || !f || k.target !== window && ((E = P(w.beforePanelSentinel)) != null && E.contains(k.target) || (j = P(w.afterPanelSentinel)) != null && j.contains(k.target) || w.closePopover()));
  }, !0), Lt([p, f], (k, E) => {
    var j;
    w.closePopover(), ko(E, Pt.Loose) || (k.preventDefault(), (j = P(p)) == null || j.focus());
  }, S(() => r.value === 0)), () => {
    let k = { open: r.value === 0, close: w.close };
    return U({ theirProps: e, ourProps: { ref: a }, slot: k, slots: t, attrs: n, name: "Popover" });
  };
} }), It = q({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-popover-button-${Z()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = nt("PopoverButton"), a = S(() => ie(l.button));
  o({ el: l.button, $el: l.button }), K(() => {
    l.buttonId.value = e.id;
  }), se(() => {
    l.buttonId.value = null;
  });
  let r = Mo(), p = r == null ? void 0 : r.closeOthers, c = Kn(), d = S(() => c === null ? !1 : c.value === l.panelId.value), f = $(null), m = `headlessui-focus-sentinel-${Z()}`;
  d.value || Q(() => {
    l.button.value = f.value;
  });
  let y = Xe(S(() => ({ as: e.as, type: t.type })), f);
  function w(V) {
    var k, E, j, M, L;
    if (d.value) {
      if (l.popoverState.value === 1)
        return;
      switch (V.key) {
        case F.Space:
        case F.Enter:
          V.preventDefault(), (E = (k = V.target).click) == null || E.call(k), l.closePopover(), (j = P(l.button)) == null || j.focus();
          break;
      }
    } else
      switch (V.key) {
        case F.Space:
        case F.Enter:
          V.preventDefault(), V.stopPropagation(), l.popoverState.value === 1 && (p == null || p(l.buttonId.value)), l.togglePopover();
          break;
        case F.Escape:
          if (l.popoverState.value !== 0)
            return p == null ? void 0 : p(l.buttonId.value);
          if (!P(l.button) || (M = a.value) != null && M.activeElement && !((L = P(l.button)) != null && L.contains(a.value.activeElement)))
            return;
          V.preventDefault(), V.stopPropagation(), l.closePopover();
          break;
      }
  }
  function g(V) {
    d.value || V.key === F.Space && V.preventDefault();
  }
  function _(V) {
    var k, E;
    e.disabled || (d.value ? (l.closePopover(), (k = P(l.button)) == null || k.focus()) : (V.preventDefault(), V.stopPropagation(), l.popoverState.value === 1 && (p == null || p(l.buttonId.value)), l.togglePopover(), (E = P(l.button)) == null || E.focus()));
  }
  function v(V) {
    V.preventDefault(), V.stopPropagation();
  }
  return () => {
    let V = l.popoverState.value === 0, k = { open: V }, { id: E, ...j } = e, M = d.value ? { ref: f, type: y.value, onKeydown: w, onClick: _ } : { ref: f, id: E, type: y.value, "aria-expanded": e.disabled ? void 0 : l.popoverState.value === 0, "aria-controls": P(l.panel) ? l.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onKeydown: w, onKeyup: g, onClick: _, onMousedown: v }, L = Tt();
    function T() {
      let B = P(l.panel);
      if (!B)
        return;
      function O() {
        W(L.value, { [me.Forwards]: () => de(B, te.First), [me.Backwards]: () => de(B, te.Last) });
      }
      O();
    }
    return Y(I, [U({ ourProps: M, theirProps: { ...t, ...j }, slot: k, attrs: t, slots: n, name: "PopoverButton" }), V && !d.value && l.isPortalled.value && Y(xe, { id: m, features: be.Focusable, as: "button", type: "button", onFocus: T })]);
  };
} });
q({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(e, { attrs: t, slots: n }) {
  let o = nt("PopoverOverlay"), l = `headlessui-popover-overlay-${Z()}`, a = Oe(), r = S(() => a !== null ? a.value === ae.Open : o.popoverState.value === 0);
  function p() {
    o.closePopover();
  }
  return () => {
    let c = { open: o.popoverState.value === 0 };
    return U({ ourProps: { id: l, "aria-hidden": !0, onClick: p }, theirProps: e, slot: c, attrs: t, slots: n, features: pe.RenderStrategy | pe.Static, visible: r.value, name: "PopoverOverlay" });
  };
} });
let Rt = q({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-popover-panel-${Z()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: n, expose: o }) {
  let { focus: l } = e, a = nt("PopoverPanel"), r = S(() => ie(a.panel)), p = `headlessui-focus-sentinel-before-${Z()}`, c = `headlessui-focus-sentinel-after-${Z()}`;
  o({ el: a.panel, $el: a.panel }), K(() => {
    a.panelId.value = e.id;
  }), se(() => {
    a.panelId.value = null;
  }), oe(Fo, a.panelId), Q(() => {
    var v, V;
    if (!l || a.popoverState.value !== 0 || !a.panel)
      return;
    let k = (v = r.value) == null ? void 0 : v.activeElement;
    (V = P(a.panel)) != null && V.contains(k) || de(P(a.panel), te.First);
  });
  let d = Oe(), f = S(() => d !== null ? d.value === ae.Open : a.popoverState.value === 0);
  function m(v) {
    var V, k;
    switch (v.key) {
      case F.Escape:
        if (a.popoverState.value !== 0 || !P(a.panel) || r.value && !((V = P(a.panel)) != null && V.contains(r.value.activeElement)))
          return;
        v.preventDefault(), v.stopPropagation(), a.closePopover(), (k = P(a.button)) == null || k.focus();
        break;
    }
  }
  function y(v) {
    var V, k, E, j, M;
    let L = v.relatedTarget;
    !L || !P(a.panel) || (V = P(a.panel)) != null && V.contains(L) || (a.closePopover(), ((E = (k = P(a.beforePanelSentinel)) == null ? void 0 : k.contains) != null && E.call(k, L) || (M = (j = P(a.afterPanelSentinel)) == null ? void 0 : j.contains) != null && M.call(j, L)) && L.focus({ preventScroll: !0 }));
  }
  let w = Tt();
  function g() {
    let v = P(a.panel);
    if (!v)
      return;
    function V() {
      W(w.value, { [me.Forwards]: () => {
        de(v, te.Next);
      }, [me.Backwards]: () => {
        var k;
        (k = P(a.button)) == null || k.focus({ preventScroll: !0 });
      } });
    }
    V();
  }
  function _() {
    let v = P(a.panel);
    if (!v)
      return;
    function V() {
      W(w.value, { [me.Forwards]: () => {
        var k, E;
        let j = P(a.button), M = P(a.panel);
        if (!j)
          return;
        let L = Et(), T = L.indexOf(j), B = L.slice(0, T + 1), O = [...L.slice(T + 1), ...B];
        for (let A of O.slice())
          if ((E = (k = A == null ? void 0 : A.id) == null ? void 0 : k.startsWith) != null && E.call(k, "headlessui-focus-sentinel-") || M != null && M.contains(A)) {
            let H = O.indexOf(A);
            H !== -1 && O.splice(H, 1);
          }
        de(O, te.First, { sorted: !1 });
      }, [me.Backwards]: () => de(v, te.Previous) });
    }
    V();
  }
  return () => {
    let v = { open: a.popoverState.value === 0, close: a.close }, { id: V, focus: k, ...E } = e, j = { ref: a.panel, id: V, onKeydown: m, onFocusout: l && a.popoverState.value === 0 ? y : void 0, tabIndex: -1 };
    return U({ ourProps: j, theirProps: { ...t, ...E }, attrs: t, slot: v, slots: { ...n, default: (...M) => {
      var L;
      return [Y(I, [f.value && a.isPortalled.value && Y(xe, { id: p, ref: a.beforePanelSentinel, features: be.Focusable, as: "button", type: "button", onFocus: g }), (L = n.default) == null ? void 0 : L.call(n, ...M), f.value && a.isPortalled.value && Y(xe, { id: c, ref: a.afterPanelSentinel, features: be.Focusable, as: "button", type: "button", onFocus: _ })])];
    } }, features: pe.RenderStrategy | pe.Static, visible: f.value, name: "PopoverPanel" });
  };
} });
q({ name: "PopoverGroup", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = $(null), a = ml([]), r = S(() => ie(l));
  o({ el: l, $el: l });
  function p(m) {
    let y = a.value.indexOf(m);
    y !== -1 && a.value.splice(y, 1);
  }
  function c(m) {
    return a.value.push(m), () => {
      p(m);
    };
  }
  function d() {
    var m;
    let y = r.value;
    if (!y)
      return !1;
    let w = y.activeElement;
    return (m = P(l)) != null && m.contains(w) ? !0 : a.value.some((g) => {
      var _, v;
      return ((_ = y.getElementById(g.buttonId.value)) == null ? void 0 : _.contains(w)) || ((v = y.getElementById(g.panelId.value)) == null ? void 0 : v.contains(w));
    });
  }
  function f(m) {
    for (let y of a.value)
      y.buttonId.value !== m && y.close();
  }
  return oe(Ro, { registerPopover: c, unregisterPopover: p, isFocusWithinPopoverGroup: d, closeOthers: f }), () => U({ ourProps: { ref: l }, theirProps: e, slot: {}, attrs: t, slots: n, name: "PopoverGroup" });
} });
let zo = Symbol("LabelContext");
function Ho() {
  let e = ee(zo, null);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Ho), t;
  }
  return e;
}
function Mt({ slot: e = {}, name: t = "Label", props: n = {} } = {}) {
  let o = $([]);
  function l(a) {
    return o.value.push(a), () => {
      let r = o.value.indexOf(a);
      r !== -1 && o.value.splice(r, 1);
    };
  }
  return oe(zo, { register: l, slot: e, name: t, props: n }), S(() => o.value.length > 0 ? o.value.join(" ") : void 0);
}
let qo = q({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-label-${Z()}` } }, setup(e, { slots: t, attrs: n }) {
  let o = Ho();
  return K(() => se(o.register(e.id))), () => {
    let { name: l = "Label", slot: a = {}, props: r = {} } = o, { id: p, passive: c, ...d } = e, f = { ...Object.entries(r).reduce((m, [y, w]) => Object.assign(m, { [y]: h(w) }), {}), id: p };
    return c && (delete f.onClick, delete d.onClick), U({ ourProps: f, theirProps: d, slot: a, attrs: n, slots: t, name: l });
  };
} });
function Wn(e, t) {
  return e === t;
}
let Uo = Symbol("RadioGroupContext");
function Go(e) {
  let t = ee(Uo, null);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Go), n;
  }
  return t;
}
let Yn = q({ name: "RadioGroup", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "div" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => Wn }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-radiogroup-${Z()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: n, slots: o, expose: l }) {
  let a = $(null), r = $([]), p = Mt({ name: "RadioGroupLabel" }), c = tt({ name: "RadioGroupDescription" });
  l({ el: a, $el: a });
  let [d, f] = Dt(S(() => e.modelValue), (g) => t("update:modelValue", g), S(() => e.defaultValue)), m = { options: r, value: d, disabled: S(() => e.disabled), firstOption: S(() => r.value.find((g) => !g.propsRef.disabled)), containsCheckedOption: S(() => r.value.some((g) => m.compare(G(g.propsRef.value), G(e.modelValue)))), compare(g, _) {
    if (typeof e.by == "string") {
      let v = e.by;
      return (g == null ? void 0 : g[v]) === (_ == null ? void 0 : _[v]);
    }
    return e.by(g, _);
  }, change(g) {
    var _;
    if (e.disabled || m.compare(G(d.value), G(g)))
      return !1;
    let v = (_ = r.value.find((V) => m.compare(G(V.propsRef.value), G(g)))) == null ? void 0 : _.propsRef;
    return v != null && v.disabled ? !1 : (f(g), !0);
  }, registerOption(g) {
    r.value.push(g), r.value = Ot(r.value, (_) => _.element);
  }, unregisterOption(g) {
    let _ = r.value.findIndex((v) => v.id === g);
    _ !== -1 && r.value.splice(_, 1);
  } };
  oe(Uo, m), wo({ container: S(() => P(a)), accept(g) {
    return g.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : g.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(g) {
    g.setAttribute("role", "none");
  } });
  function y(g) {
    if (!a.value || !a.value.contains(g.target))
      return;
    let _ = r.value.filter((v) => v.propsRef.disabled === !1).map((v) => v.element);
    switch (g.key) {
      case F.Enter:
        Co(g.currentTarget);
        break;
      case F.ArrowLeft:
      case F.ArrowUp:
        if (g.preventDefault(), g.stopPropagation(), de(_, te.Previous | te.WrapAround) === Ue.Success) {
          let v = r.value.find((V) => {
            var k;
            return V.element === ((k = ie(a)) == null ? void 0 : k.activeElement);
          });
          v && m.change(v.propsRef.value);
        }
        break;
      case F.ArrowRight:
      case F.ArrowDown:
        if (g.preventDefault(), g.stopPropagation(), de(_, te.Next | te.WrapAround) === Ue.Success) {
          let v = r.value.find((V) => {
            var k;
            return V.element === ((k = ie(V.element)) == null ? void 0 : k.activeElement);
          });
          v && m.change(v.propsRef.value);
        }
        break;
      case F.Space:
        {
          g.preventDefault(), g.stopPropagation();
          let v = r.value.find((V) => {
            var k;
            return V.element === ((k = ie(V.element)) == null ? void 0 : k.activeElement);
          });
          v && m.change(v.propsRef.value);
        }
        break;
    }
  }
  let w = S(() => {
    var g;
    return (g = P(a)) == null ? void 0 : g.closest("form");
  });
  return K(() => {
    X([w], () => {
      if (!w.value || e.defaultValue === void 0)
        return;
      function g() {
        m.change(e.defaultValue);
      }
      return w.value.addEventListener("reset", g), () => {
        var _;
        (_ = w.value) == null || _.removeEventListener("reset", g);
      };
    }, { immediate: !0 });
  }), () => {
    let { disabled: g, name: _, id: v, ...V } = e, k = { ref: a, id: v, role: "radiogroup", "aria-labelledby": p.value, "aria-describedby": c.value, onKeydown: y };
    return Y(I, [..._ != null && d.value != null ? Nt({ [_]: d.value }).map(([E, j]) => Y(xe, St({ features: be.Hidden, key: E, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: E, value: j }))) : [], U({ ourProps: k, theirProps: { ...n, ...Ae(V, ["modelValue", "defaultValue"]) }, slot: {}, attrs: n, slots: o, name: "RadioGroup" })]);
  };
} });
var Zn = ((e) => (e[e.Empty = 1] = "Empty", e[e.Active = 2] = "Active", e))(Zn || {});
let Jn = q({ name: "RadioGroupOption", props: { as: { type: [Object, String], default: "div" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-radiogroup-option-${Z()}` } }, setup(e, { attrs: t, slots: n, expose: o }) {
  let l = Go("RadioGroupOption"), a = Mt({ name: "RadioGroupLabel" }), r = tt({ name: "RadioGroupDescription" }), p = $(null), c = S(() => ({ value: e.value, disabled: e.disabled })), d = $(1);
  o({ el: p, $el: p }), K(() => l.registerOption({ id: e.id, element: p, propsRef: c })), se(() => l.unregisterOption(e.id));
  let f = S(() => {
    var V;
    return ((V = l.firstOption.value) == null ? void 0 : V.id) === e.id;
  }), m = S(() => l.disabled.value || e.disabled), y = S(() => l.compare(G(l.value.value), G(e.value))), w = S(() => m.value ? -1 : y.value || !l.containsCheckedOption.value && f.value ? 0 : -1);
  function g() {
    var V;
    !l.change(e.value) || (d.value |= 2, (V = p.value) == null || V.focus());
  }
  function _() {
    d.value |= 2;
  }
  function v() {
    d.value &= -3;
  }
  return () => {
    let { id: V, value: k, disabled: E, ...j } = e, M = { checked: y.value, disabled: m.value, active: Boolean(d.value & 2) }, L = { id: V, ref: p, role: "radio", "aria-checked": y.value ? "true" : "false", "aria-labelledby": a.value, "aria-describedby": r.value, "aria-disabled": m.value ? !0 : void 0, tabIndex: w.value, onClick: m.value ? void 0 : g, onFocus: m.value ? void 0 : _, onBlur: m.value ? void 0 : v };
    return U({ ourProps: L, theirProps: j, slot: M, attrs: t, slots: n, name: "RadioGroupOption" });
  };
} }), oo = qo, Qn = Fn, Ko = Symbol("GroupContext"), Xn = q({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: n }) {
  let o = $(null), l = Mt({ name: "SwitchLabel", props: { onClick() {
    !o.value || (o.value.click(), o.value.focus({ preventScroll: !0 }));
  } } }), a = tt({ name: "SwitchDescription" });
  return oe(Ko, { switchRef: o, labelledby: l, describedby: a }), () => U({ theirProps: e, ourProps: {}, slot: {}, slots: t, attrs: n, name: "SwitchGroup" });
} }), ea = q({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: !0 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-switch-${Z()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: n, slots: o, expose: l }) {
  let a = ee(Ko, null), [r, p] = Dt(S(() => e.modelValue), (v) => t("update:modelValue", v), S(() => e.defaultChecked));
  function c() {
    p(!r.value);
  }
  let d = $(null), f = a === null ? d : a.switchRef, m = Xe(S(() => ({ as: e.as, type: n.type })), f);
  l({ el: f, $el: f });
  function y(v) {
    v.preventDefault(), c();
  }
  function w(v) {
    v.key === F.Space ? (v.preventDefault(), c()) : v.key === F.Enter && Co(v.currentTarget);
  }
  function g(v) {
    v.preventDefault();
  }
  let _ = S(() => {
    var v, V;
    return (V = (v = P(f)) == null ? void 0 : v.closest) == null ? void 0 : V.call(v, "form");
  });
  return K(() => {
    X([_], () => {
      if (!_.value || e.defaultChecked === void 0)
        return;
      function v() {
        p(e.defaultChecked);
      }
      return _.value.addEventListener("reset", v), () => {
        var V;
        (V = _.value) == null || V.removeEventListener("reset", v);
      };
    }, { immediate: !0 });
  }), () => {
    let { id: v, name: V, value: k, ...E } = e, j = { checked: r.value }, M = { id: v, ref: f, role: "switch", type: m.value, tabIndex: 0, "aria-checked": r.value, "aria-labelledby": a == null ? void 0 : a.labelledby.value, "aria-describedby": a == null ? void 0 : a.describedby.value, onClick: y, onKeyup: w, onKeypress: g };
    return Y(I, [V != null && r.value != null ? Y(xe, St({ features: be.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: r.value, name: V, value: k })) : null, U({ ourProps: M, theirProps: { ...n, ...Ae(E, ["modelValue", "defaultChecked"]) }, slot: j, attrs: n, slots: o, name: "Switch" })]);
  };
} }), ta = qo;
function oa(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called)
      return t.called = !0, e(...n);
  };
}
function dt(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function He(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var xt = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(xt || {});
function la(e, t) {
  let n = At();
  if (!e)
    return n.dispose;
  let { transitionDuration: o, transitionDelay: l } = getComputedStyle(e), [a, r] = [o, l].map((p) => {
    let [c = 0] = p.split(",").filter(Boolean).map((d) => d.includes("ms") ? parseFloat(d) : parseFloat(d) * 1e3).sort((d, f) => f - d);
    return c;
  });
  return a !== 0 ? n.setTimeout(() => t("finished"), a + r) : t("finished"), n.add(() => t("cancelled")), n.dispose;
}
function lo(e, t, n, o, l, a) {
  let r = At(), p = a !== void 0 ? oa(a) : () => {
  };
  return He(e, ...l), dt(e, ...t, ...n), r.nextFrame(() => {
    He(e, ...n), dt(e, ...o), r.add(la(e, (c) => (He(e, ...o, ...t), dt(e, ...l), p(c))));
  }), r.add(() => He(e, ...t, ...n, ...o, ...l)), r.add(() => p("cancelled")), r.dispose;
}
function Se(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Ft = Symbol("TransitionContext");
var na = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(na || {});
function aa() {
  return ee(Ft, null) !== null;
}
function sa() {
  let e = ee(Ft, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function ra() {
  let e = ee(zt, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let zt = Symbol("NestingContext");
function st(e) {
  return "children" in e ? st(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Wo(e) {
  let t = $([]), n = $(!1);
  K(() => n.value = !0), se(() => n.value = !1);
  function o(a, r = $e.Hidden) {
    let p = t.value.findIndex(({ id: c }) => c === a);
    p !== -1 && (W(r, { [$e.Unmount]() {
      t.value.splice(p, 1);
    }, [$e.Hidden]() {
      t.value[p].state = "hidden";
    } }), !st(t) && n.value && (e == null || e()));
  }
  function l(a) {
    let r = t.value.find(({ id: p }) => p === a);
    return r ? r.state !== "visible" && (r.state = "visible") : t.value.push({ id: a, state: "visible" }), () => o(a, $e.Unmount);
  }
  return { children: t, register: l, unregister: o };
}
let Yo = pe.RenderStrategy, Ce = q({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: n, slots: o, expose: l }) {
  if (!aa() && vn())
    return () => Y(Fe, { ...e, onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave") }, o);
  let a = $(null), r = $("visible"), p = S(() => e.unmount ? $e.Unmount : $e.Hidden);
  l({ el: a, $el: a });
  let { show: c, appear: d } = sa(), { register: f, unregister: m } = ra(), y = { value: !0 }, w = Z(), g = { value: !1 }, _ = Wo(() => {
    g.value || (r.value = "hidden", m(w), t("afterLeave"));
  });
  K(() => {
    let B = f(w);
    se(B);
  }), Q(() => {
    if (p.value === $e.Hidden && w) {
      if (c && r.value !== "visible") {
        r.value = "visible";
        return;
      }
      W(r.value, { hidden: () => m(w), visible: () => f(w) });
    }
  });
  let v = Se(e.enter), V = Se(e.enterFrom), k = Se(e.enterTo), E = Se(e.entered), j = Se(e.leave), M = Se(e.leaveFrom), L = Se(e.leaveTo);
  K(() => {
    Q(() => {
      if (r.value === "visible") {
        let B = P(a);
        if (B instanceof Comment && B.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function T(B) {
    let O = y.value && !d.value, A = P(a);
    !A || !(A instanceof HTMLElement) || O || (g.value = !0, c.value && t("beforeEnter"), c.value || t("beforeLeave"), B(c.value ? lo(A, v, V, k, E, (H) => {
      g.value = !1, H === xt.Finished && t("afterEnter");
    }) : lo(A, j, M, L, E, (H) => {
      g.value = !1, H === xt.Finished && (st(_) || (r.value = "hidden", m(w), t("afterLeave")));
    })));
  }
  return K(() => {
    X([c], (B, O, A) => {
      T(A), y.value = !1;
    }, { immediate: !0 });
  }), oe(zt, _), Qe(S(() => W(r.value, { visible: ae.Open, hidden: ae.Closed }))), () => {
    let { appear: B, show: O, enter: A, enterFrom: H, enterTo: he, entered: Le, leave: rt, leaveFrom: ce, leaveTo: ue, ...Ve } = e;
    return U({ theirProps: Ve, ourProps: { ref: a }, slot: {}, slots: o, attrs: n, features: Yo, visible: r.value === "visible", name: "TransitionChild" });
  };
} }), ia = Ce, Fe = q({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: n, slots: o }) {
  let l = Oe(), a = S(() => e.show === null && l !== null ? W(l.value, { [ae.Open]: !0, [ae.Closed]: !1 }) : e.show);
  Q(() => {
    if (![!0, !1].includes(a.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r = $(a.value ? "visible" : "hidden"), p = Wo(() => {
    r.value = "hidden";
  }), c = $(!0), d = { show: a, appear: S(() => e.appear || !c.value) };
  return K(() => {
    Q(() => {
      c.value = !1, a.value ? r.value = "visible" : st(p) || (r.value = "hidden");
    });
  }), oe(zt, p), oe(Ft, d), () => {
    let f = Ae(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), m = { unmount: e.unmount };
    return U({ ourProps: { ...m, as: "template" }, theirProps: {}, slot: {}, slots: { ...o, default: () => [Y(ia, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...n, ...m, ...f }, o.default)] }, attrs: {}, features: Yo, visible: r.value === "visible", name: "Transition" });
  };
} });
const pa = {
  key: 0,
  class: "po-text-sm po-font-normal po-text-slate-400 po-select-none"
}, ua = { class: "po-grid po-grid-cols-3 po-gap-2 po-py-2" }, ca = { class: "po-bg-white hover:po-bg-slate-200 po-rounded-xl po-p-2 po-transition-colors po-duration-150 po-ease-in" }, da = ["href"], fa = { class: "po-flex po-w-14 po-h-14 po-items-center po-justify-center po-duration-100 po-ease-in-out po-overflow-hidden" }, va = ["innerHTML"], ma = { class: "po-text-slate-500 po-font-normal po-text-sm po-text-center" }, ha = {
  name: "PoAppTray"
}, ba = /* @__PURE__ */ Object.assign(ha, {
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
    return (t, n) => (i(), R(h(at), null, {
      default: D(({ open: o }) => [
        C(h(It), {
          class: N([o ? "" : "po-text-opacity-90", "po-block po-w-6 po-text-slate-100 genie-effect po-z-50 po-outline-none"])
        }, {
          default: D(() => [
            C(h(Rl))
          ]),
          _: 2
        }, 1032, ["class"]),
        C(Pe, {
          "enter-active-class": "po-transition po-duration-200 po-ease-out",
          "enter-from-class": "po-translate-y-1 po-opacity-0",
          "enter-to-class": "po-translate-y-0 po-opacity-100",
          "leave-active-class": "po-transition po-duration-150 po-ease-in",
          "leave-from-class": "po-translate-y-0 po-opacity-100",
          "leave-to-class": "po-translate-y-1 po-opacity-0"
        }, {
          default: D(() => [
            C(h(Rt), { class: "po-z-10 po-absolute po-right-0 po-top-16 po-opacity-0 po-bg-white po-shadow-lg po-rounded-b-xl po-rounded-t-0 po-w-[366px] po-p-4 po-border po-border-t-0 po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-scroll po-text-center" }, {
              default: D(() => [
                (i(!0), u(I, null, z(e.appList, (l) => (i(), u("div", null, [
                  l.groupName.length > 0 ? (i(), u("span", pa, b(l.groupName), 1)) : x("", !0),
                  s("ul", ua, [
                    (i(!0), u(I, null, z(l.apps, (a) => (i(), u("li", ca, [
                      s("a", {
                        href: a.url,
                        class: "po-flex po-flex-col po-group po-justify-center po-items-center"
                      }, [
                        s("span", fa, [
                          s("span", {
                            class: "po-w-9",
                            innerHTML: a.icon
                          }, null, 8, va)
                        ]),
                        s("span", ma, b(a.name), 1)
                      ], 8, da)
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
}), ga = {
  key: 0,
  class: "po-absolute po-right-0 po-w-3 po-h-3 po-bg-mpao-orange po-rounded-full po-border-2 po-border-mpao-blue"
}, ya = {
  key: 0,
  class: "po-space-y-2"
}, xa = ["onClick"], Va = { class: "po-flex po-items-center po-justify-between" }, wa = { class: "po-text-sm po-font-semibold po-text-slate-700 po-grow po-flex po-space-x-2 po-items-center" }, ka = {
  key: 0,
  class: "po-w-2 po-h-2 po-rounded-full po-shrink-0 po-bg-mpao-orange"
}, $a = { class: "po-grow" }, _a = { class: "po-text-xs po-font-normal po-text-slate-400 po-shrink-0" }, Ca = { class: "po-block po-text-sm po-text-slate-500 po-pb-3" }, Sa = {
  key: 1,
  class: "po-text-sm po-text-slate-500 po-py-10 po-text-center po-block"
}, Ea = {
  name: "PoNotificationHub"
}, Pa = /* @__PURE__ */ Object.assign(Ea, {
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
    return (n, o) => (i(), R(h(at), null, {
      default: D(({ open: l }) => [
        C(h(It), {
          class: N([l ? "" : "text-opacity-90", "po-block po-w-6 po-text-slate-100 genie-effect po-relative po-z-50 po-outline-none"])
        }, {
          default: D(() => [
            e.hasNewNotifications ? (i(), u("span", ga)) : x("", !0),
            C(h($l), { class: "po-stroke-current" })
          ]),
          _: 2
        }, 1032, ["class"]),
        C(Pe, {
          "enter-active-class": "po-transition po-duration-200 po-ease-out",
          "enter-from-class": "po-translate-y-1 po-opacity-0",
          "enter-to-class": "po-translate-y-0 po-opacity-100",
          "leave-active-class": "po-transition po-duration-150 po-ease-in",
          "leave-from-class": "po-translate-y-0 po-opacity-100",
          "leave-to-class": "po-translate-y-1 po-opacity-0"
        }, {
          default: D(() => [
            C(h(Rt), { class: "po-z-10 po-absolute po-right-0 po-top-16 po-opacity-0 po-bg-white po-shadow-lg po-rounded-b-xl po-rounded-t-0 po-w-[366px] po-p-4 po-border po-border-t-0 po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-scroll po-text-center" }, {
              default: D(() => [
                e.notifications !== null && e.notifications.length > 0 ? (i(), u("ul", ya, [
                  (i(!0), u(I, null, z(e.notifications, (a) => (i(), u("li", {
                    role: "button",
                    class: "po-space-y-2 po-p-2 po-rounded-lg po-bg-white hover:po-bg-slate-100 po-border po-border-slate-100",
                    onClick: re((r) => n.$emit("button-click", a.name), ["prevent"])
                  }, [
                    s("span", Va, [
                      s("p", wa, [
                        a.seen ? x("", !0) : (i(), u("span", ka)),
                        s("span", $a, b(a.name), 1)
                      ]),
                      s("span", _a, b(a.time), 1)
                    ]),
                    s("span", Ca, b(a.text), 1)
                  ], 8, xa))), 256))
                ])) : (i(), u("span", Sa, " No notifications to show at the moment. We'll keep you informed."))
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
}), Oa = {
  key: 0,
  class: "po-hidden lg:po-block po-text-sky-50 po-text-sm po-shrink-0 po-pr-3 po-truncate po-max-w-[140px] po-overflow-hidden"
}, La = {
  key: 1,
  class: "po-px-3 po-bg-gradient-to-br po-from-slate-50 po-to-blue-100 po-py-1 po-rounded-l-md po-w-[100px] po-flex po-items-center po-justify-center po-text-center"
}, Na = ["src"], Da = ["src", "alt"], Ta = {
  key: 1,
  class: "po-text-xs po-text-white po-font-semibold"
}, Ba = { class: "po-pb-5" }, Aa = ["src"], ja = {
  key: 2,
  class: "po-block po-text-sm po-text-slate-400 po-italic"
}, Ia = { key: 0 }, Ra = { key: 1 }, Ma = /* @__PURE__ */ s("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), Fa = { class: "po-space-y-2 po-py-2 -po-mx-5 po-px-5 po-max-h-[250px] po-overflow-y-scroll" }, za = ["onClick"], Ha = { class: "po-w-5" }, qa = { class: "" }, Ua = { class: "po-block po-text-sm po-font-normal" }, Ga = {
  key: 0,
  class: "po-text-left po-block po-text-xs po-text-slate-400"
}, Ka = /* @__PURE__ */ s("div", { class: "po-h-[2px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), Wa = { class: "md:po-grid po-grid-cols-2 po-space-x-1 po-pt-2" }, Ya = { class: "po-w-5" }, Za = /* @__PURE__ */ s("span", { class: "po-text-sm po-font-normal" }, "Profile", -1), Ja = { class: "po-w-5" }, Qa = /* @__PURE__ */ s("span", { class: "po-text-sm po-font-normal" }, "Logout", -1), Xa = /* @__PURE__ */ s("div", { class: "po-text-xs po-space-x-3 po-text-center po-pt-3" }, [
  /* @__PURE__ */ s("a", {
    href: "",
    class: "po-text-slate-500 hover:po-text-mpao-lightblue"
  }, "Privacy Policy"),
  /* @__PURE__ */ s("a", {
    href: "",
    class: "po-text-slate-500 hover:po-text-mpao-lightblue"
  }, "Terms of Service")
], -1), es = {
  name: "PoProfileSwitcher"
}, ts = /* @__PURE__ */ Object.assign(es, {
  props: {
    profileSwitcherData: {
      type: Object,
      default: null
    }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    var d, f, m, y, w, g;
    const n = e, o = $(""), l = $(""), a = $(""), r = S(() => {
      const _ = n.profileSwitcherData.profiles.filter(
        (v) => v.current === !0
      )[0];
      return o.value = _ ? _.name : "", l.value = _ && _.logo ? _.logo : "", a.value = _ && _.userRole ? _.userRole : "User", _ ? _.name.match(/\b[A-Z]/g).join("").substr(0, 2) : "";
    }), p = ((m = (f = (d = n == null ? void 0 : n.profileSwitcherData) == null ? void 0 : d.profiles) == null ? void 0 : f[0]) == null ? void 0 : m.profilePic) ?? null, c = ((g = (w = (y = n == null ? void 0 : n.profileSwitcherData) == null ? void 0 : y.profiles) == null ? void 0 : w[0]) == null ? void 0 : g.name) ?? null;
    return (_, v) => (i(), R(h(at), null, {
      default: D(({ open: V }) => [
        C(h(It), { class: "po-flex po-items-center po-outline-none" }, {
          default: D(() => [
            l.value === "" ? (i(), u("span", Oa, b(o.value), 1)) : x("", !0),
            l.value !== "" ? (i(), u("span", La, [
              s("img", {
                class: "po-h-8",
                src: l.value,
                alt: ""
              }, null, 8, Na)
            ])) : x("", !0),
            s("div", {
              class: N([
                {
                  "po-bg-gradient-to-br po-from-slate-50 po-to-blue-100 po-p-1 po-rounded-r-md": l.value !== ""
                }
              ])
            }, [
              s("div", {
                class: N([[
                  { "text-opacity-90": V },
                  { "po-w-10 po-h-10": l.value === "" },
                  { "po-w-8 po-h-8": l.value !== "" }
                ], "po-shrink-0 po-select-none po-rounded-full po-bg-[#2e5266] po-flex po-items-center po-justify-center genie-effect po-z-50"])
              }, [
                h(p) ? (i(), u("img", {
                  key: 0,
                  class: "po-rounded-full po-border po-border-white",
                  src: h(p),
                  alt: h(r)
                }, null, 8, Da)) : (i(), u("span", Ta, b(h(r)), 1))
              ], 2)
            ], 2)
          ]),
          _: 2
        }, 1024),
        C(Pe, {
          "enter-active-class": "po-transition po-duration-200 po-ease-out",
          "enter-from-class": "po-translate-y-1 po-opacity-0",
          "enter-to-class": "po-translate-y-0 po-opacity-100",
          "leave-active-class": "po-transition po-duration-150 po-ease-in",
          "leave-from-class": "po-translate-y-0 po-opacity-100",
          "leave-to-class": "po-translate-y-1 po-opacity-0"
        }, {
          default: D(() => [
            C(h(Rt), { class: "po-z-10 po-absolute po-right-0 po-top-16 po-opacity-0 po-bg-white po-shadow-lg po-rounded-b-xl po-rounded-t-0 po-w-[366px] po-p-4 po-border po-border-t-0 po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-scroll po-text-center" }, {
              default: D(() => [
                s("div", Ba, [
                  h(p) ? (i(), u("img", {
                    key: 0,
                    class: "po-w-20 po-h-20 po-mx-auto po-rounded-full po-overflow-hidden",
                    src: h(p),
                    alt: ""
                  }, null, 8, Aa)) : x("", !0),
                  h(c) ? (i(), u("span", {
                    key: 1,
                    class: N(["po-text-base po-text-slate-600 po-font-medium po-block", [{ "po-mt-4": h(p) }]])
                  }, b(h(c)), 3)) : x("", !0),
                  h(c) ? (i(), u("span", ja, [
                    o.value === h(c) ? (i(), u("span", Ia, "Self")) : (i(), u("span", Ra, b(a.value) + " at " + b(o.value), 1))
                  ])) : x("", !0)
                ]),
                Ma,
                s("div", Fa, [
                  (i(!0), u(I, null, z(e.profileSwitcherData.profiles, (k) => (i(), u("a", {
                    href: "#",
                    onClick: re((E) => _.$emit("button-click", k), ["prevent"]),
                    class: N(["po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-shadow-sm po-transition-all po-duration-150 po-ease-out hover:po-bg-blue-50", [
                      {
                        " po-bg-white": !k.current
                      },
                      {
                        " po-bg-blue-50 po-shadow-sm": k.current
                      }
                    ]]),
                    role: "button"
                  }, [
                    s("span", Ha, [
                      k.isPersonal ? (i(), R(h(Kt), {
                        key: 0,
                        class: N([
                          "po-stroke-current",
                          { "po-stroke-mpao-lightblue": k.current }
                        ])
                      }, null, 8, ["class"])) : x("", !0),
                      k.isPersonal ? x("", !0) : (i(), R(h(Cl), {
                        key: 1,
                        class: N([
                          "po-stroke-current",
                          { "po-stroke-mpao-lightblue": k.current }
                        ])
                      }, null, 8, ["class"]))
                    ]),
                    s("span", qa, [
                      s("span", Ua, b(k.name), 1),
                      k.identifier.length !== 0 ? (i(), u("span", Ga, b(k.identifier), 1)) : x("", !0)
                    ])
                  ], 10, za))), 256))
                ]),
                Ka,
                s("div", Wa, [
                  s("a", {
                    href: "#",
                    onClick: v[0] || (v[0] = re((k) => _.$emit("button-click", "current-profile"), ["prevent"])),
                    class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-slate-50 hover:po-bg-blue-50 po-transition-all po-duration-150 po-ease-out",
                    role: "button"
                  }, [
                    s("span", Ya, [
                      C(h(Kt), { class: "po-stroke-current" })
                    ]),
                    Za
                  ]),
                  s("a", {
                    href: "#",
                    onClick: v[1] || (v[1] = re((k) => _.$emit("button-click", "logout"), ["prevent"])),
                    class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-slate-50 hover:po-bg-blue-50 po-transition-all po-duration-150 po-ease-out",
                    role: "button"
                  }, [
                    s("span", Ja, [
                      C(h(Vl), { class: "po-stroke-current" })
                    ]),
                    Qa
                  ])
                ]),
                Xa
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
}), os = { class: "loading-dots po-inline-block po-relative po-w-[40px] po-h-[10px]" }, Zo = {
  __name: "LoadingDots",
  props: {
    /**
     * dot colors
     */
    dotColor: {
      type: String,
      default: "po-bg-mpao-lightblue"
    }
  },
  setup(e) {
    return (t, n) => (i(), u("div", os, [
      s("div", {
        class: N(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[8px]", e.dotColor])
      }, null, 2),
      s("div", {
        class: N(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[8px]", e.dotColor])
      }, null, 2),
      s("div", {
        class: N(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[17px]", e.dotColor])
      }, null, 2),
      s("div", {
        class: N(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[26px]", e.dotColor])
      }, null, 2)
    ]));
  }
}, ls = ["disabled", "aria-disabled"], ns = ["value", "disabled", "aria-disabled"], as = {
  name: "PoButton"
}, Ht = /* @__PURE__ */ Object.assign(as, {
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
    const n = e, o = "po-rounded-full po-transition-colors po-border po-duration-100 po-ease-in-out po-cursor-pointer disabled:po-bg-slate-400 disabled:po-border-slate-400 disabled:po-cursor-default disabled:po-hover:bg-slate-400", l = S(() => {
      switch (n.size) {
        case "sm":
          return "po-px-2 po-py-1 po-text-xs";
        case "md":
          return "po-px-4 po-py-2 po-text-sm";
        case "lg":
          return "po-px-5 po-py-3 po-text-normal";
      }
    }), a = S(() => {
      if (n.overrideColors)
        return "";
      switch (n.actionType) {
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
    return (r, p) => (i(), u(I, null, [
      e.isLoading ? (i(), u("span", {
        key: 0,
        class: N([[o, h(l)], "po-bg-slate-200 hover:po-bg-slate-200 focus:po-bg-slate-200"])
      }, [
        C(Zo, {
          "dot-color": "po-bg-slate-500",
          class: "po-relative -po-bottom-[0.2rem]"
        })
      ], 2)) : x("", !0),
      e.type == "button" && !e.isLoading ? (i(), u("button", Ee({
        key: 1,
        onClick: p[0] || (p[0] = re((c) => r.$emit("button-click", e.to), ["prevent"])),
        class: [o, h(l), h(a)],
        disabled: e.disabled,
        "aria-disabled": e.disabled
      }, r.$attrs), [
        J(r.$slots, "label", {}, () => [
          ne(b(e.label), 1)
        ])
      ], 16, ls)) : x("", !0),
      e.type == "submit" && !e.isLoading ? (i(), u("input", Ee({
        key: 2,
        type: "submit",
        class: [o, h(l), h(a)],
        value: e.label,
        disabled: e.disabled,
        "aria-disabled": e.disabled
      }, r.$attrs), null, 16, ns)) : x("", !0),
      e.type == "link" && !e.isLoading ? (i(), u("a", Ee({
        key: 3,
        href: "#",
        onClick: p[1] || (p[1] = re((c) => r.$emit("button-click", e.to), ["prevent"])),
        class: [o, h(l), h(a)]
      }, r.$attrs), [
        J(r.$slots, "label", {}, () => [
          ne(b(e.label), 1)
        ])
      ], 16)) : x("", !0),
      e.type == "simple" && !e.isLoading ? (i(), u("a", {
        key: 4,
        href: "#",
        onClick: p[2] || (p[2] = re((c) => r.$emit("button-click", e.to), ["prevent"])),
        class: N(["po-text-sm po-transition-colors po-duration-100 po-ease-in-out po-inline-flex po-items-center po-space-x-1", [
          { "po-text-mpao-lightblue hover:po-text-mpao-blue": !e.overrideColors }
        ]])
      }, [
        J(r.$slots, "label", {}, () => [
          ne(b(e.label), 1)
        ])
      ], 2)) : x("", !0)
    ], 64));
  }
}), ss = /* @__PURE__ */ s("div", { class: "po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity" }, null, -1), rs = { class: "po-fixed po-z-10 po-inset-0" }, is = { class: "po-flex po-justify-center po-items-start po-min-h-screen po-px-4 po-pt-10 po-pb-20 po-text-center sm:po-block po-max-h-screen po-overflow-y-hidden" }, ps = /* @__PURE__ */ s("span", {
  class: "po-hidden sm:po-inline-block sm:po-align-middle sm:po-h-screen",
  "aria-hidden": "true"
}, "​", -1), us = { class: "po-flex po-items-center po-bg-white po-rounded-t-xl po-p-5" }, cs = { class: "po-grow po-text-md po-font-bold po-text-slate-600" }, ds = { class: "po-shrink-0" }, fs = /* @__PURE__ */ s("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), vs = { class: "po-p-5 po-max-h-[calc(100vh-230px)] po-overflow-y-scroll po-min-h-[250px]" }, ms = {
  key: 0,
  class: "po-bg-slate-50 po-rounded-b-xl"
}, hs = {
  name: "PoModal"
}, bs = /* @__PURE__ */ Object.assign(hs, {
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
    const n = e, { show: o } = Be(n), l = $(!1);
    X(o, () => {
      l.value = o.value;
    });
    function a() {
      l.value = !1, t("modal-closed", !0);
    }
    return (r, p) => (i(), u("div", null, [
      e.openBtnLabel.length > 0 ? (i(), R(h(Ht), {
        key: 0,
        label: e.openBtnLabel,
        onClick: p[0] || (p[0] = (c) => l.value = !0)
      }, null, 8, ["label"])) : x("", !0),
      (i(), R(_t, { to: "body" }, [
        C(h(Fe), {
          as: "template",
          show: l.value
        }, {
          default: D(() => [
            C(h(ot), {
              as: "div",
              class: "po-relative po-z-50",
              onClose: a
            }, {
              default: D(() => [
                C(h(Ce), {
                  as: "template",
                  enter: "po-ease-out po-duration-300",
                  "enter-from": "po-opacity-0",
                  "enter-to": "po-opacity-100",
                  leave: "po-ease-in po-duration-200",
                  "leave-from": "po-opacity-100",
                  "leave-to": "po-opacity-0"
                }, {
                  default: D(() => [
                    ss
                  ]),
                  _: 1
                }),
                s("div", rs, [
                  s("div", is, [
                    ps,
                    C(h(Ce), {
                      as: "template",
                      enter: "po-ease-out po-duration-300",
                      "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                      "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                      leave: "po-ease-in po-duration-200",
                      "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                      "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                    }, {
                      default: D(() => [
                        C(h(lt), {
                          class: N(["po-relative po-inline-block po-align-bottom po-bg-white po-rounded-xl po-text-left po-shadow-xl po-transform po-transition-all sm:po-align-top po-w-full", e.modalWidth])
                        }, {
                          default: D(() => [
                            s("div", us, [
                              s("h3", cs, b(e.modalTitle), 1),
                              s("div", ds, [
                                s("span", {
                                  role: "button",
                                  class: "po-block",
                                  onClick: a
                                }, [
                                  C(h(yo), { class: "po-w-5 po-stroke-slate-500 hover:po-stroke-mpao-orange po-transition-colors po-duration-150 po-ease-in-out" })
                                ])
                              ])
                            ]),
                            fs,
                            s("div", vs, [
                              J(r.$slots, "content")
                            ]),
                            r.$slots.footer ? (i(), u("div", ms, [
                              J(r.$slots, "footer")
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
}), gs = {
  key: 0,
  class: "po-text-lg po-text-red-400 po-font-semibold"
}, ys = {
  key: 0,
  class: "po-mt-1 po-flex -po-mb-3 po-flex-wrap"
}, xs = { class: "po-flex po-flex-1" }, Vs = { class: "po-flex po-flex-col" }, ws = {
  name: "PoRadioInput"
}, ks = /* @__PURE__ */ Object.assign(ws, {
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
    }
  },
  emits: ["selected", "unSelected", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = $();
    return o.value = n.modelValue, ho(() => {
      o.value = n.modelValue;
    }), X(o, () => {
      t("update:modelValue", o.value);
    }), (l, a) => (i(), R(h(Yn), {
      modelValue: o.value,
      "onUpdate:modelValue": a[0] || (a[0] = (r) => o.value = r),
      class: N([{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }])
    }, {
      default: D(() => [
        C(h(oo), { class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700" }, {
          default: D(() => [
            s("span", null, b(e.label), 1),
            e.required ? (i(), u("span", gs, "*")) : x("", !0)
          ]),
          _: 1
        }),
        e.options !== null ? (i(), u("div", ys, [
          (i(!0), u(I, null, z(e.options, (r) => (i(), R(h(Jn), {
            as: "template",
            key: r.id,
            value: r.id
          }, {
            default: D(({ checked: p, active: c }) => [
              s("div", {
                class: N([
                  "po-transition-colors po-duration-100 po-ease-out po-mr-3",
                  "",
                  "",
                  "po-mb-3 po-pt-[0.13rem] po-relative po-flex po-cursor-pointer focus:po-outline-none"
                ])
              }, [
                s("span", {
                  class: N(["po-w-5 po-h-5 po-rounded-full po-border po-mr-2 po-flex po-items-center po-justify-center", [
                    "",
                    p ? "po-border-mpao-lightblue" : "po-border-slate-400"
                  ]])
                }, [
                  s("span", {
                    class: N(["po-w-3 po-h-3 po-rounded-full", [
                      "",
                      p ? "po-bg-mpao-lightblue" : "po-bg-transparent"
                    ]])
                  }, null, 2)
                ], 2),
                s("span", xs, [
                  s("span", Vs, [
                    C(h(oo), {
                      as: "span",
                      class: "po-block po-text-sm po-font-medium po-text-gray-900"
                    }, {
                      default: D(() => [
                        ne(b(r.title), 1)
                      ]),
                      _: 2
                    }, 1024),
                    r.description ? (i(), R(h(Qn), {
                      key: 0,
                      as: "span",
                      class: "po-mt-1 po-flex po-items-center po-text-sm po-text-gray-500"
                    }, {
                      default: D(() => [
                        ne(b(r.description), 1)
                      ]),
                      _: 2
                    }, 1024)) : x("", !0)
                  ])
                ])
              ], 2)
            ]),
            _: 2
          }, 1032, ["value"]))), 128))
        ])) : x("", !0)
      ]),
      _: 1
    }, 8, ["modelValue", "class"]));
  }
});
function $s(e, t) {
  return i(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", { d: "M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" }),
    s("path", { d: "M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" })
  ]);
}
function _s(e, t) {
  return i(), u("svg", {
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
function Cs(e, t) {
  return i(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", { d: "M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" })
  ]);
}
function Jo(e, t) {
  return i(), u("svg", {
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
function Ss(e, t) {
  return i(), u("svg", {
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
const Es = ["for"], Ps = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Os = ["title"], Ls = ["name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], Ns = ["id"], Ds = ["id"], Ts = {
  name: "PoTextarea"
}, Bs = /* @__PURE__ */ Object.assign(Ts, {
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
    return (t, n) => (i(), u("div", {
      class: N(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      s("label", {
        for: e.id,
        class: "po-text-sm po-font-medium po-text-slate-700 po-flex po-items-center po-space-x-1"
      }, [
        s("span", null, b(e.label), 1),
        e.required ? (i(), u("span", Ps, "*")) : x("", !0),
        e.info !== null ? (i(), u("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          C(h(Jo))
        ], 8, Os)) : x("", !0)
      ], 8, Es),
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
      }), null, 16, Ls),
      e.message !== null ? (i(), u("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, b(e.message), 9, Ns)) : x("", !0),
      e.errorMessage !== null ? (i(), u("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, b(e.errorMessage), 9, Ds)) : x("", !0)
    ], 2));
  }
}), As = /* @__PURE__ */ s("input", {
  type: "checkbox",
  name: "",
  class: "po-hidden shell-sidebar--toggle",
  role: "none",
  id: "sidebar-drawer-toggle",
  checked: "",
  "aria-checked": "true"
}, null, -1), js = { class: "shell-sidebar" }, Is = { class: "po-grow" }, Rs = { class: "shell-sidebar--menu" }, Ms = ["onClick", "title"], Fs = { class: "shell-sidebar--icon" }, zs = { class: "shell-sidebar--label po-font-medium" }, Hs = { key: 0 }, qs = { class: "shell-sidebar--menu sidebar-apps po-shrink-0 po-mb-0" }, Us = ["onClick"], Gs = { class: "shell-sidebar--icon" }, Ks = ["innerHTML"], Ws = { class: "shell-sidebar--label po-font-medium" }, Ys = {
  key: 0,
  class: "shell-sidebar--menu po-shrink-0 po-mb-0 po-border-t po-border-slate-200 po-pt-3"
}, Zs = { class: "shell-sidebar--icon" }, Js = /* @__PURE__ */ s("span", { class: "shell-sidebar--label po-font-medium" }, "Feedback", -1), Qs = { action: "" }, Xs = /* @__PURE__ */ s("br", null, null, -1), er = { class: "po-p-5" }, tr = {
  name: "PoSidebarDrawer"
}, R1 = /* @__PURE__ */ Object.assign(tr, {
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
    function a(c) {
      for (let d = 0; d < o.value.length; d++)
        o.value[d].current && (o.value[d].current = !1);
      o.value[c].current = !0;
    }
    const r = [
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
    ], p = $(r[0]);
    return (c, d) => (i(), u(I, null, [
      As,
      s("aside", js, [
        s("div", Is, [
          (i(!0), u(I, null, z(e.content, (f) => (i(), u("div", null, [
            C(h(Xt), { defaultOpen: !0 }, {
              default: D(({ open: m }) => [
                f.groupName ? (i(), R(h(eo), {
                  key: 0,
                  class: N([m ? "" : "po-mb-3", "shell-sidebar--section po-w-full po-text-left"])
                }, {
                  default: D(() => [
                    ne(b(f.groupName), 1)
                  ]),
                  _: 2
                }, 1032, ["class"])) : x("", !0),
                C(Pe, {
                  "enter-active-class": "po-transition po-duration-100 po-ease-out",
                  "enter-from-class": "po-transform po-scale-95 po-opacity-0",
                  "enter-to-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-active-class": "po-transition po-duration-75 po-ease-out",
                  "leave-from-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-to-class": "po-transform po-scale-95 po-opacity-0"
                }, {
                  default: D(() => [
                    C(h(to), null, {
                      default: D(() => [
                        s("ul", Rs, [
                          (i(!0), u(I, null, z(f.items, (y) => (i(), u("li", null, [
                            y.disabled ? x("", !0) : (i(), u("button", {
                              key: 0,
                              onClick: (w) => c.$emit("button-click", y.url),
                              class: N([
                                "shell-sidebar--item",
                                { active: y.url == e.currRoute }
                              ]),
                              title: `Go to ${y.label}`
                            }, [
                              s("span", Fs, [
                                (i(), R(fe(y.icon), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" }))
                              ]),
                              s("span", zs, b(y.label), 1)
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
          e.apps !== null ? (i(), u("div", Hs, [
            C(h(Xt), { defaultOpen: !0 }, {
              default: D(({ open: f }) => [
                e.appsLabel ? (i(), R(h(eo), {
                  key: 0,
                  class: N([f ? "" : "po-mb-3", "shell-sidebar--section po-w-full po-text-left"])
                }, {
                  default: D(() => [
                    ne(b(e.appsLabel), 1)
                  ]),
                  _: 2
                }, 1032, ["class"])) : x("", !0),
                C(Pe, {
                  "enter-active-class": "po-transition po-duration-100 po-ease-out",
                  "enter-from-class": "po-transform po-scale-95 po-opacity-0",
                  "enter-to-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-active-class": "po-transition po-duration-75 po-ease-out",
                  "leave-from-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-to-class": "po-transform po-scale-95 po-opacity-0"
                }, {
                  default: D(() => [
                    C(h(to), null, {
                      default: D(() => [
                        s("ul", qs, [
                          (i(!0), u(I, null, z(o.value, (m, y) => (i(), u("li", null, [
                            s("button", {
                              onClick: (w) => {
                                c.$emit("app-click", m.name), a(y);
                              },
                              class: N(["shell-sidebar--item", [{ active: m.current }]]),
                              title: "Go to feedback"
                            }, [
                              s("span", Gs, [
                                s("span", {
                                  innerHTML: m.icon,
                                  class: "po-text-slate-600 po-w-5"
                                }, null, 8, Ks)
                              ]),
                              s("span", Ws, b(m.name), 1)
                            ], 10, Us)
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
        e.hasFeedback ? (i(), u("ul", Ys, [
          s("li", null, [
            s("button", {
              onClick: d[0] || (d[0] = re(() => l.value = !0, ["prevent"])),
              class: "shell-sidebar--item",
              title: "Go to feedback"
            }, [
              s("span", Zs, [
                C(h(Sl), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" })
              ]),
              Js
            ])
          ])
        ])) : x("", !0),
        C(bs, {
          show: l.value,
          onModalClosed: d[2] || (d[2] = () => l.value = !1),
          "modal-title": "Feedback"
        }, {
          content: D(() => [
            s("form", Qs, [
              C(ks, {
                label: "Type",
                options: r,
                "pre-selected": p.value,
                modelValue: p.value,
                "onUpdate:modelValue": d[1] || (d[1] = (f) => p.value = f)
              }, null, 8, ["pre-selected", "modelValue"]),
              Xs,
              C(Bs, {
                cols: "6",
                rows: "6",
                label: "Description",
                message: ""
              })
            ])
          ]),
          footer: D(() => [
            s("div", er, [
              C(Ht, {
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
}), or = {
  key: 0,
  class: "shell-content--action-bar"
}, lr = { class: "action-bar__nav" }, nr = ["onClick"], ar = { class: "action-bar__nav_label po-font-medium" }, sr = {
  key: 0,
  class: "po-shrink-0 po-flex po-space-x-1"
}, rr = /* @__PURE__ */ s("span", { class: "action-bar__nav_label po-font-medium" }, "Go Back", -1), ir = {
  name: "PoActionBar"
}, M1 = /* @__PURE__ */ Object.assign(ir, {
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
    return (t, n) => e.items !== null && e.items.length > 0 || e.showBackButton ? (i(), u("section", or, [
      s("nav", lr, [
        (i(!0), u(I, null, z(e.items, (o) => (i(), u("span", {
          onClick: (l) => t.$emit("button-click", o.label),
          class: N([[
            { "action-bar__nav_highlighted": o.highlighted },
            { "action-bar__nav_danger": o.danger }
          ], "action-bar__nav_link"])
        }, [
          (i(), R(fe(o.icon), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" })),
          s("span", ar, b(o.label), 1)
        ], 10, nr))), 256))
      ]),
      e.showBackButton ? (i(), u("nav", sr, [
        s("span", {
          onClick: n[0] || (n[0] = (o) => t.$emit("button-click", "back")),
          class: "action-bar__nav_link"
        }, [
          rr,
          (i(), R(fe(h(wl)), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" }))
        ])
      ])) : x("", !0)
    ])) : x("", !0);
  }
}), pr = { class: "po-shadow-sm po-rounded-xl po-bg-white po-relative" }, ur = {
  key: 0,
  class: "po-absolute po-right-2 po-top-2 po-p-2 po-rounded-lg"
}, cr = { class: "po-grid po-grid-cols-1 lg:po-grid-cols-3 po-gap-3" }, dr = {
  key: 0,
  class: "po-text-base po-font-medium po-text-slate-600"
}, fr = {
  key: 1,
  class: "lg:po-col-span-2 lg:po-flex lg:po-justify-end po-space-x-2"
}, vr = {
  name: "PoCard"
}, F1 = /* @__PURE__ */ Object.assign(vr, {
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
    return (t, n) => (i(), u("div", pr, [
      e.isLoading ? (i(), u("div", ur, [
        C(Zo)
      ])) : x("", !0),
      s("div", cr, [
        e.title.length > 0 ? (i(), u("h3", dr, b(e.title), 1)) : x("", !0),
        t.$slots.action ? (i(), u("div", fr, [
          J(t.$slots, "action")
        ])) : x("", !0)
      ]),
      J(t.$slots, "content")
    ]));
  }
}), mr = { class: "po-py-3 po-px-5 po-border-b po-border-slate-200" }, hr = {
  class: "po-flex po-w-full md:po-ml-0",
  action: "#",
  method: "GET"
}, br = {
  for: "search-field",
  class: "po-sr-only"
}, gr = { class: "po-relative po-w-full po-text-slate-400 focus-within:po-text-mpao-lightblue po-transition-colors po-duration-100 po-ease-in-out" }, yr = { class: "po-pointer-events-none po-absolute po-inset-y-0 po-left-0 po-flex po-items-center" }, xr = ["placeholder", "value"], Vr = {
  name: "PoCardSearch"
}, z1 = /* @__PURE__ */ Object.assign(Vr, {
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
    return (t, n) => (i(), u("div", mr, [
      s("form", hr, [
        s("label", br, b(e.placeholder), 1),
        s("div", gr, [
          s("div", yr, [
            C(h(Ct), { class: "po-h-5 po-w-5 po-flex-shrink-0" })
          ]),
          s("input", {
            name: "search-field",
            id: "desktop-search-field",
            placeholder: e.placeholder,
            value: e.modelValue,
            onInput: n[0] || (n[0] = (o) => t.$emit("update:modelValue", o.target.value)),
            class: "po-h-full po-w-full po-border-transparent po-py-2 po-pl-8 po-pr-3 po-text-sm po-text-slate-700 po-placeholder-slate-500 focus:po-border-transparent focus:po-placeholder-slate-400 focus:po-outline-none focus:po-ring-0",
            type: "search"
          }, null, 40, xr)
        ])
      ])
    ]));
  }
}), wr = { class: "po-flex po-items-center" }, kr = { class: "po-text-sm po-font-medium po-text-slate-500 po-pr-2" }, $r = {
  name: "PoPagination"
}, _r = /* @__PURE__ */ Object.assign($r, {
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
    const n = e;
    function o() {
      t("button-click", "prev"), t("prev-click", !0);
    }
    function l() {
      t("button-click", "next"), t("next-click", !0);
    }
    const a = S(() => n.totalPages ? `Page ${n.currentPage} of ${n.totalPages}` : n.pagination ? n.pagination.label : "");
    return (r, p) => (i(), u("div", wr, [
      s("span", kr, b(h(a)), 1),
      s("button", {
        title: "Previous",
        onClick: o,
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        C(h(Ll), { class: "po-w-4 po-stroke-current po-stroke-2" })
      ]),
      s("button", {
        title: "Next",
        onClick: l,
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        C(h(Nl), { class: "po-w-4 po-stroke-current po-stroke-2" })
      ])
    ]));
  }
}), Cr = { key: 0 }, Sr = {
  class: "po-text-xl md:po-text-2xl po-font-semibold po-text-slate-800",
  id: "po-page-title"
}, Er = {
  key: 0,
  class: "po-text-base po-mt-2 po-max-w-md po-block po-text-slate-500"
}, Pr = { key: 1 }, Or = { class: "po-grid po-grid-cols-1 lg:po-grid-cols-2 po-gap-5" }, Lr = {
  class: "po-text-xl md:po-text-2xl po-font-semibold po-text-slate-800",
  id: "po-page-title"
}, Nr = {
  key: 0,
  class: "po-text-base po-mt-4 po-max-w-md po-pb-5 po-block po-text-slate-500"
}, Dr = { class: "po-flex po-items-end po-justify-end po-flex-col" }, Tr = {
  key: 0,
  class: "po-flex md:po-justify-end po-mb-5"
}, Br = { class: "po-bg-slate-50 po-shadow-sm po-rounded-xl po-py-5 po-px-2 po-divide-x po-divide-slate-200 po-flex" }, Ar = ["onClick"], jr = { class: "po-text-xl po-font-medium po-text-slate-600 po-flex po-items-center po-space-x-1" }, Ir = { class: "po-text-xl po-font-medium po-text-slate-600 group-hover:po-text-mpao-lightblue" }, Rr = { class: "po-text-sm po-text-slate-500 po-block group-hover:po-text-mpao-lightblue" }, Mr = { class: "po-flex po-items-center po-space-x-1 md:po-justify-end" }, Fr = {
  key: 2,
  class: "po-border-l po-border-slate-400 po-h-3 po-w-3 po-ml-1"
}, zr = {
  key: 0,
  class: "po-bg-slate-50 po-p-5 po-mt-5 po-rounded-md po-grid po-grid-cols-1 md:po-grid-cols-3 po-gap-5"
}, Hr = /* @__PURE__ */ s("span", { class: "po-text-xs po-text-slate-500 po-py-5" }, "No filters available at the moment.", -1), qr = {
  name: "PoPageTitle"
}, H1 = /* @__PURE__ */ Object.assign(qr, {
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
    const o = e.filterOn ? $(!0) : $(!1);
    function l(r) {
      t("pagination-click", r);
    }
    function a(r) {
      return r.iconColor ? r.iconColor : "po-slate-600";
    }
    return (r, p) => e.standAlone ? (i(), u("div", Cr, [
      s("h1", Sr, b(e.label), 1),
      e.description !== "" ? (i(), u("span", Er, b(e.description), 1)) : x("", !0)
    ])) : (i(), u("div", Pr, [
      s("div", Or, [
        s("div", null, [
          s("h1", Lr, b(e.label), 1),
          e.description !== "" ? (i(), u("span", Nr, b(e.description), 1)) : x("", !0)
        ]),
        s("div", Dr, [
          e.stats !== null ? (i(), u("div", Tr, [
            s("div", Br, [
              (i(!0), u(I, null, z(e.stats, (c) => (i(), u("div", {
                class: "po-px-5 po-cursor-pointer po-group genie-effect",
                onClick: (d) => r.$emit("stat-click", c)
              }, [
                s("span", jr, [
                  s("span", Ir, b(c.value), 1),
                  c.icon ? (i(), u("span", {
                    key: 0,
                    class: N(["po-w-5 po-h-5", a(c)])
                  }, [
                    (i(), R(fe(c.icon)))
                  ], 2)) : x("", !0)
                ]),
                s("span", Rr, b(c.label), 1)
              ], 8, Ar))), 256))
            ])
          ])) : x("", !0),
          s("div", Mr, [
            e.showFilter ? (i(), u("button", {
              key: 0,
              title: "Filter",
              onClick: p[0] || (p[0] = (c) => {
                r.$emit("button-click", "filter"), o.value = !h(o);
              }),
              class: N([
                "po-p-2 po-rounded-md hover:po-bg-slate-200 po-transition-colors po-duration-75 po-ease-in-out",
                { "po-text-mpao-orange hover:po-text-mpao-orange": h(o) },
                { "tpo-ext-slate-600 hover:po-text-mpao-blue": !h(o) }
              ])
            }, [
              C(h(Bl), { class: "po-w-4 po-stroke-current po-stroke-2" })
            ], 2)) : x("", !0),
            e.showDownload ? (i(), u("button", {
              key: 1,
              title: "Download",
              onClick: p[1] || (p[1] = (c) => r.$emit("button-click", "download")),
              class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
            }, [
              C(h(xl), { class: "po-w-4 po-stroke-current po-stroke-2" })
            ])) : x("", !0),
            e.showFilter && e.showPagination || e.showDownload && e.showPagination ? (i(), u("span", Fr, " ")) : x("", !0),
            e.showPagination ? (i(), R(_r, {
              key: 3,
              pagination: e.pagination,
              onButtonClick: l
            }, null, 8, ["pagination"])) : x("", !0)
          ])
        ])
      ]),
      C(Pe, {
        "enter-active-class": "po-transition po-duration-100 po-ease-out",
        "enter-from-class": "po-transform po-scale-95 po-opacity-0",
        "enter-to-class": "po-transform po-scale-100 po-opacity-100",
        "leave-active-class": "po-transition po-duration-75 po-ease-out",
        "leave-from-class": "po-transform po-scale-100 po-opacity-100",
        "leave-to-class": "po-transform po-scale-95 po-opacity-0"
      }, {
        default: D(() => [
          h(o) ? (i(), u("div", zr, [
            J(r.$slots, "filters", {}, () => [
              Hr
            ])
          ])) : x("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), Ur = { class: "table-responsive po-w-full" }, Gr = { key: 1 }, Kr = ["colspan"], Wr = { class: "po-py-10 po-block po-normal-case" }, Yr = { key: 0 }, Zr = {
  name: "PoTable"
}, q1 = /* @__PURE__ */ Object.assign(Zr, {
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
    return (t, n) => (i(), u("table", Ur, [
      s("thead", null, [
        s("tr", null, [
          (i(!0), u(I, null, z(e.thead, (o) => (i(), u("th", null, [
            J(t.$slots, "th", Ut(Gt(o)))
          ]))), 256))
        ])
      ]),
      s("tbody", null, [
        e.tbody !== null || e.tbody !== null && e.tbody.length !== 0 ? (i(!0), u(I, { key: 0 }, z(e.tbody, (o) => (i(), u("tr", null, [
          J(t.$slots, "td", Ut(Gt(o)))
        ]))), 256)) : x("", !0),
        e.tbody == null || e.tbody !== null && e.tbody.length == 0 ? (i(), u("tr", Gr, [
          s("td", {
            colspan: e.thead.length + 1,
            class: "po-text-center"
          }, [
            s("span", Wr, b(e.emptyMessage), 1)
          ], 8, Kr)
        ])) : x("", !0)
      ]),
      t.$slots.tfoot ? (i(), u("tfoot", Yr, [
        s("tr", null, [
          J(t.$slots, "tfoot")
        ])
      ])) : x("", !0)
    ]));
  }
});
function Qo(e, t) {
  return i(), u("svg", {
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
function Xo(e, t) {
  return i(), u("svg", {
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
function el(e, t) {
  return i(), u("svg", {
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
function Jr(e, t) {
  return i(), u("svg", {
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
function Qr(e, t) {
  return i(), u("svg", {
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
function Xr(e, t) {
  return i(), u("svg", {
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
function ei(e, t) {
  return i(), u("svg", {
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
function tl(e, t) {
  return i(), u("svg", {
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
function ti(e, t) {
  return i(), u("svg", {
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
function ol(e, t) {
  return i(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
  ]);
}
const oi = ["onUpdate:modelValue", "id"], li = ["for"], ni = { class: "table-responsive po-w-full" }, ai = ["onClick"], si = { key: 0 }, ri = ["onClick"], ii = {
  name: "PoDynamicTable",
  components: { ArrowsUpDownIcon: el, ArrowUpIcon: Xo, ArrowDownIcon: Qo }
}, U1 = /* @__PURE__ */ Object.assign(ii, {
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
    const t = e, n = $(t.columns), o = $(null), l = $(null), a = (c) => {
      c.hidden = !c.hidden, n.value = t.columns.filter((d) => !d.hidden);
    }, r = (c) => {
      c.sortable && (c.sorted && l.value === "asc" ? l.value = "desc" : l.value = "asc", n.value.forEach((d) => {
        d.key === c.key ? (d.sorted = !0, d.sortDirection = l.value) : (d.sorted = !1, d.sortDirection = null);
      }), o.value = c);
    }, p = $([]);
    return Q(() => {
      o.value ? p.value = [...t.data].sort((c, d) => {
        let f = c[o.value.key], m = d[o.value.key];
        return typeof f == "string" && typeof m == "string" && (f = f.toLowerCase(), m = m.toLowerCase()), f < m ? l.value === "asc" ? -1 : 1 : f > m ? l.value === "asc" ? 1 : -1 : 0;
      }) : p.value = [...t.data];
    }), (c, d) => (i(), u("div", null, [
      (i(!0), u(I, null, z(n.value, (f) => (i(), u("div", null, [
        $t(s("input", {
          type: "checkbox",
          name: "",
          "onUpdate:modelValue": (m) => f.hidden = m,
          id: `hide-table-col-${f.label}`
        }, null, 8, oi), [
          [hl, f.hidden]
        ]),
        s("label", {
          for: `hide-table-col-${f.label}`
        }, b(f.label), 9, li)
      ]))), 256)),
      s("table", ni, [
        s("thead", null, [
          s("tr", null, [
            (i(!0), u(I, null, z(n.value, (f) => (i(), u("th", {
              key: f.key,
              onClick: (m) => r(f)
            }, [
              ne(b(f.label) + " " + b(f.sorted) + " " + b(f.sortDirection) + " ", 1),
              f.sortable ? (i(), u("span", si, [
                f.sorted ? x("", !0) : (i(), R(h(el), {
                  key: 0,
                  class: "po-w-4"
                })),
                f.sorted && f.sortDirection === "asc" ? (i(), R(h(Xo), {
                  key: 1,
                  class: "po-w-4"
                })) : x("", !0),
                f.sorted && f.sortDirection === "desc" ? (i(), R(h(Qo), {
                  key: 2,
                  class: "po-w-4"
                })) : x("", !0)
              ])) : x("", !0),
              f.hidable ? (i(), u("button", {
                key: 1,
                onClick: (m) => a(f)
              }, b(f.hidden ? "Show" : "Hide"), 9, ri)) : x("", !0)
            ], 8, ai))), 128))
          ])
        ]),
        s("tbody", null, [
          (i(!0), u(I, null, z(p.value, (f) => (i(), u("tr", {
            key: f.id
          }, [
            (i(!0), u(I, null, z(n.value, (m) => (i(), u("td", {
              key: m.key
            }, b(f[m.key]), 1))), 128))
          ]))), 128))
        ])
      ])
    ]));
  }
}), pi = { class: "" }, ui = { class: "po-grow" }, ci = ["onClick"], di = {
  name: "PoDescriptionList"
}, fi = /* @__PURE__ */ Object.assign(di, {
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
    return (t, n) => (i(), u("div", null, [
      s("dl", {
        class: N([
          "po-description-list",
          { "po-divide-y po-divide-slate-200": !e.striped },
          { striped: e.striped }
        ])
      }, [
        J(t.$slots, "content", {}, () => [
          (i(!0), u(I, null, z(e.items, (o) => (i(), u("div", null, [
            s("dt", null, b(o.title), 1),
            s("dd", pi, [
              s("span", ui, b(o.description), 1),
              o.action !== void 0 ? (i(), u("span", {
                key: 0,
                class: "po-shrink-0 po-text-mpao-lightblue hover:po-text-mpao-blue po-transition-colors po-duration-100 po-ease-in-out po-px-2 po-cursor-pointer",
                onClick: (l) => t.$emit("button-click", o.action)
              }, b(o.action), 9, ci)) : x("", !0)
            ])
          ]))), 256))
        ])
      ], 2)
    ]));
  }
}), vi = ["for"], mi = { class: "po-capitalize" }, hi = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, bi = ["title"], gi = ["type", "name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], yi = ["id"], xi = ["id"], Vi = {
  name: "PoInputField"
}, G1 = /* @__PURE__ */ Object.assign(Vi, {
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
  setup(e) {
    const t = e;
    function n() {
      return t.hasError ? "po-border-red-400 focus:po-border-red-600 focus:po-ring-red-600" : t.borderColor;
    }
    const { errorMessage: o } = Be(t), l = $(o.value !== null ? !0 : t.hasError);
    return X(o, (a, r) => {
      o.value !== null && (l.value = !0);
    }), (a, r) => (i(), u("div", {
      class: N(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      s("label", {
        for: e.id,
        class: N([
          "po-text-sm po-font-medium po-flex po-items-center po-space-x-1",
          { "po-text-red-500": l.value },
          { "po-text-slate-700": !l.value }
        ])
      }, [
        s("span", mi, b(e.label), 1),
        e.required ? (i(), u("span", hi, "*")) : x("", !0),
        e.info !== null ? (i(), u("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          C(h(tl), { class: "po-fill-current" })
        ], 8, bi)) : x("", !0)
      ], 10, vi),
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
      }, a.$attrs, {
        onInput: r[0] || (r[0] = (p) => a.$emit("update:modelValue", p.target.value)),
        class: [
          "po-mt-1 peer po-block po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white focus:po-ring-0 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default",
          n()
        ]
      }), null, 16, gi),
      e.message !== null ? (i(), u("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, b(e.message), 9, yi)) : x("", !0),
      l.value && h(o) !== null ? (i(), u("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
        id: `${e.id}-error`
      }, [
        C(h(ei), { class: "po-fill-current po-w-4 po-mt-[0.2rem] po-shrink-0" }),
        s("span", null, b(h(o)), 1)
      ], 8, xi)) : x("", !0)
    ], 2));
  }
}), wi = { class: "po-text-sm po-font-medium po-text-slate-700 peer-focus:po-text-mpao-lightblue peer-invalid:po-text-red-500 peer-invalid:peer-focus:po-text-red-600 po-flex po-items-center po-space-x-1 po-capitalize" }, ki = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, $i = ["name", "id", "value"], _i = ["for"], Ci = { class: "po-flex po-items-center po-space-x-1" }, Si = /* @__PURE__ */ s("span", { class: "po-text-sm" }, "Choose file", -1), Ei = ["id"], Pi = ["id"], Oi = {
  name: "PoInputFile"
}, K1 = /* @__PURE__ */ Object.assign(Oi, {
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
    }
  },
  setup(e) {
    return (t, n) => (i(), u("div", {
      class: N(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      s("span", wi, [
        s("span", null, b(e.label), 1),
        e.required ? (i(), u("span", ki, "*")) : x("", !0)
      ]),
      s("input", {
        name: `${e.id}-upload`,
        id: `${e.id}-fileupload`,
        value: e.modelValue,
        type: "file",
        onInput: n[0] || (n[0] = (o) => t.$emit("update:modelValue", o.target.value)),
        class: "po-sr-only po-peer"
      }, null, 40, $i),
      s("label", {
        for: `${e.id}-fileupload`,
        class: "po-mt-1 po-block po-w-full po-border po-cursor-pointer po-rounded-md po-border-slate-300 po-bg-white peer-focus:po-border-mpao-lightblue invalid:po-border-red-400 invalid:focus:po-border-red-600 invalid:focus:po-ring-red-600 sm:po-text-sm po-p-2"
      }, [
        s("div", Ci, [
          C(h(go), { class: "po-w-4 po-stroke-slate-500" }),
          Si
        ])
      ], 8, _i),
      e.message !== null ? (i(), u("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, b(e.message), 9, Ei)) : x("", !0),
      e.errorMessage !== null ? (i(), u("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, b(e.errorMessage), 9, Pi)) : x("", !0)
    ], 2));
  }
}), Li = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Ni = ["title"], Di = { class: "po-relative po-mt-1" }, Ti = {
  name: "PoSelectField"
}, W1 = /* @__PURE__ */ Object.assign(Ti, {
  props: {
    /**
     * Model value
     */
    modelValue: {
      type: [String, Number],
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
    },
    /**
     * True or false if required
     */
    required: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["selected", "unSelected", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = $(""), l = $(), a = S(
      () => o.value === "" ? n.list : n.list.filter((p) => p.name.toLowerCase().includes(o.value.toLowerCase()))
    );
    function r(p) {
      if (a.value) {
        let c = a.value.find((d) => d.id === p);
        return c == null ? void 0 : c.name;
      }
    }
    return l.value = n.modelValue, ho(() => {
      l.value = n.modelValue;
    }), X(l, () => {
      t("update:modelValue", l.value), t("selected", l.value);
    }), (p, c) => (i(), R(h(kn), {
      as: "div",
      modelValue: l.value,
      "onUpdate:modelValue": c[1] || (c[1] = (d) => l.value = d),
      class: N([{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }])
    }, {
      default: D(() => [
        C(h($n), { class: "po-text-sm po-font-medium po-text-slate-700 po-flex po-items-center po-space-x-1" }, {
          default: D(() => [
            s("span", null, b(e.label), 1),
            e.required ? (i(), u("span", Li, "*")) : x("", !0),
            e.info !== null ? (i(), u("abbr", {
              key: 1,
              title: e.info,
              class: "po-w-4 po-text-slate-500"
            }, [
              C(h(tl), { class: "po-fill-current" })
            ], 8, Ni)) : x("", !0)
          ]),
          _: 1
        }),
        s("div", Di, [
          C(h(Cn), {
            class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm",
            onChange: c[0] || (c[0] = (d) => o.value = d.target.value),
            "display-value": r
          }),
          C(h(_n), { class: "po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-rounded-r-md po-px-2 focus:po-outline-none" }, {
            default: D(() => [
              C(h(Xr), {
                class: "po-h-5 po-w-5 po-text-slate-400",
                "aria-hidden": "true"
              })
            ]),
            _: 1
          }),
          h(a).length > 0 ? (i(), R(h(Sn), {
            key: 0,
            class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
          }, {
            default: D(() => [
              (i(!0), u(I, null, z(h(a), (d) => (i(), R(h(En), {
                key: d.id,
                value: d.id,
                as: "template"
              }, {
                default: D(({ active: f, selected: m }) => [
                  s("li", {
                    class: N([
                      "po-relative po-cursor-default po-select-none po-py-2 po-pl-3 po-pr-9",
                      f ? "po-bg-mpao-lightblue po-text-white" : "po-text-slate-900"
                    ])
                  }, [
                    s("span", {
                      class: N(["po-block po-truncate", m && "po-font-semibold"])
                    }, b(d.name), 3),
                    m ? (i(), u("span", {
                      key: 0,
                      class: N([
                        "po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-pr-4",
                        f ? "po-text-white" : "po-text-mpao-lightblue"
                      ])
                    }, [
                      C(h(Qr), {
                        class: "po-h-5 po-w-5",
                        "aria-hidden": "true"
                      })
                    ], 2)) : x("", !0)
                  ], 2)
                ]),
                _: 2
              }, 1032, ["value"]))), 128))
            ]),
            _: 1
          })) : x("", !0)
        ])
      ]),
      _: 1
    }, 8, ["modelValue", "class"]));
  }
}), Bi = { class: "po-text-sm po-font-medium po-text-slate-700 po-cursor-pointer po-select-none po-flex po-items-center po-space-x-1" }, Ai = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, ji = {
  name: "PoToggle"
}, Y1 = /* @__PURE__ */ Object.assign(ji, {
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
    const n = $(e.modelValue);
    return (o, l) => (i(), R(h(Xn), {
      as: "div",
      class: "po-flex po-items-center"
    }, {
      default: D(() => [
        C(h(ea), {
          modelValue: n.value,
          "onUpdate:modelValue": l[0] || (l[0] = (a) => n.value = a),
          onClick: l[1] || (l[1] = (a) => o.$emit("update:modelValue", !n.value)),
          class: N([
            n.value ? "po-bg-mpao-lightblue" : "po-bg-slate-200",
            "po-relative po-inline-flex po-h-6 po-w-11 po-flex-shrink-0 po-cursor-pointer po-rounded-full po-border-2 po-border-transparent po-transition-colors po-duration-200 po-ease-in-out focus:po-outline-none focus:po-ring-2 focus:po-ring-mpao-lightblue focus:po-ring-offset-2"
          ])
        }, {
          default: D(() => [
            s("span", {
              "aria-hidden": "true",
              class: N([
                n.value ? "po-translate-x-5" : "po-translate-x-0",
                "po-pointer-events-none po-inline-block po-h-5 po-w-5 po-transform po-rounded-full po-bg-white po-shadow po-ring-0 po-transition po-duration-200 po-ease-in-out"
              ])
            }, null, 2)
          ]),
          _: 1
        }, 8, ["modelValue", "class"]),
        C(h(ta), {
          as: "span",
          class: "po-ml-3"
        }, {
          default: D(() => [
            s("span", Bi, [
              s("span", null, b(e.label), 1),
              e.required ? (i(), u("span", Ai, "*")) : x("", !0)
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Ii = { class: "po-pt-1 po-space-y-1 po-border-r-2 po-border-slate-200 po-relative" }, Ri = ["onClick"], Mi = {
  name: "PoSectionMenu"
}, Z1 = /* @__PURE__ */ Object.assign(Mi, {
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
    return (t, n) => (i(), u("ul", Ii, [
      (i(!0), u(I, null, z(e.menuItems, (o) => (i(), u("li", null, [
        s("span", {
          onClick: (l) => t.$emit("link-click", o.link),
          role: "button",
          class: N([
            "po-relative po-cursor-pointer -po-right-[0.15rem] po-py-1 po-border-r-2 hover:po-border-mpao-lightblue po-transition-colors po-duration-200 po-ease-in-out po-flex po-items-center po-space-x-2",
            {
              "po-border-mpao-lightblue po-text-sm po-text-mpao-lightblue": o.link == e.currPageRoute
            },
            {
              "po-border-slate-200 po-text-sm po-text-slate-600": o.link !== e.currPageRoute
            }
          ])
        }, [
          (i(), R(fe(o.icon), { class: "po-w-4 po-h-4 po-stroke-current" })),
          s("span", null, b(o.label), 1)
        ], 10, Ri)
      ]))), 256))
    ]));
  }
}), Fi = { class: "po-relative po-flex po-items-start" }, zi = { class: "po-flex po-h-5 po-items-center" }, Hi = ["name", "id", "checked", "disabled", "aria-describedby"], qi = { class: "po-ml-3 po-text-sm" }, Ui = ["for"], Gi = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Ki = ["id"], Wi = { class: "po-sr-only" }, Yi = ["id"], Zi = {
  name: "PoCheckbox"
}, J1 = /* @__PURE__ */ Object.assign(Zi, {
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
    return (t, n) => (i(), u("div", Fi, [
      s("div", zi, [
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
        }), null, 16, Hi)
      ]),
      s("div", qi, [
        s("label", {
          for: e.id,
          class: "po-font-medium po-text-slate-600 po-cursor-pointer po-select-none po-flex po-items-center po-space-x-1"
        }, [
          s("span", null, b(e.label), 1),
          e.required ? (i(), u("span", Gi, "*")) : x("", !0)
        ], 8, Ui),
        e.message ? (i(), u("span", {
          key: 0,
          id: `${e.id}-description`,
          class: "po-text-slate-500 po-cursor-default"
        }, [
          s("span", Wi, b(e.label), 1),
          ne(" " + b(e.message), 1)
        ], 8, Ki)) : x("", !0)
      ]),
      e.errorMessage !== null ? (i(), u("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, b(e.errorMessage), 9, Yi)) : x("", !0)
    ]));
  }
}), Ji = { class: "po-grid po-gap-5 po-grid-cols-1 lg:po-grid-cols-2 po-px-6 lg:po-px-8 po-mt-10 po-pb-10" }, Qi = { class: "po-flex po-items-start po-space-x-5" }, Xi = /* @__PURE__ */ s("img", {
  class: "po-h-10",
  src: "https://pension.gov.mv/asset/image/enlgish_website_logo.svg",
  alt: "Pension Office logo"
}, null, -1), ep = /* @__PURE__ */ s("p", { class: "-po-mt-1 po-text-xs po-text-slate-500" }, " 8th Floor, Allied Building , Chaandhanee Magu, Malé, 20156, Maldives ", -1), tp = { class: "po-mt-1 po-text-xs po-text-slate-500" }, op = { class: "po-mt-1 po-text-xs po-text-slate-500 po-flex po-space-x-4" }, lp = {
  href: "https://www.pension.gov.mv",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue"
}, np = /* @__PURE__ */ s("span", null, "www.pension.gov.mv", -1), ap = {
  href: "mailto:info@pension.gov.mv",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue"
}, sp = /* @__PURE__ */ s("span", null, "info@pension.gov.mv", -1), rp = {
  href: "tel:1441",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue"
}, ip = /* @__PURE__ */ s("span", null, "1441", -1), pp = { class: "po-flex lg:po-items-end po-flex-col" }, up = { class: "-po-mt-1 po-text-xs po-text-slate-500 po-flex po-space-x-4" }, cp = /* @__PURE__ */ s("a", {
  href: "",
  class: "hover:po-text-mpao-lightblue"
}, "Terms & Conditions", -1), dp = /* @__PURE__ */ s("a", {
  href: "",
  class: "hover:po-text-mpao-lightblue"
}, "Privacy Policy", -1), fp = /* @__PURE__ */ s("div", { class: "po-flex po-space-x-2 po-mt-3 lg:po-justify-end" }, [
  /* @__PURE__ */ s("img", {
    class: "po-h-8",
    src: "https://pension.gov.mv/asset/image/iso_logo.jpg",
    alt: ""
  }),
  /* @__PURE__ */ s("img", {
    class: "po-h-8",
    src: "https://pension.gov.mv/asset/image/en-ccc-2020-issa.png",
    alt: ""
  })
], -1), vp = /* @__PURE__ */ s("div", {
  "aria-live": "assertive",
  class: "po-pointer-events-none po-fixed po-inset-0 po-flex po-items-start po-px-4 po-py-6 sm:po-p-6 po-z-50"
}, [
  /* @__PURE__ */ s("div", {
    class: "po-flex po-w-full po-flex-col po-items-end po-space-y-4 sm:po-items-end po-pt-[55px]",
    id: "po-notifications-alert"
  })
], -1), mp = {
  name: "PoFooter"
}, Q1 = /* @__PURE__ */ Object.assign(mp, {
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (n, o) => (i(), u("div", null, [
      s("section", Ji, [
        s("div", Qi, [
          Xi,
          s("div", null, [
            ep,
            s("p", tp, " © " + b(new Date().getFullYear()) + " Pension Office, All Rights Reserved. ", 1),
            s("p", op, [
              s("a", lp, [
                C(h(Cs), { class: "po-w-3 po-h-3 po-fill-current" }),
                np
              ]),
              s("a", ap, [
                C(h($s), { class: "po-w-3 po-h-3 po-fill-current" }),
                sp
              ]),
              s("a", rp, [
                C(h(Ss), { class: "po-w-3 po-h-3 po-fill-current" }),
                ip
              ])
            ])
          ])
        ]),
        s("div", pp, [
          s("nav", up, [
            s("a", {
              href: "#",
              onClick: o[0] || (o[0] = re((l) => n.$emit("button-click", "changelog-button"), ["prevent"])),
              class: "hover:po-text-mpao-lightblue"
            }, "Change logs"),
            cp,
            dp
          ]),
          fp
        ])
      ]),
      vp
    ]));
  }
}), hp = {
  key: 0,
  class: "po-flex po-items-start po-space-x-4 po-p-5 po-bg-red-100 po-rounded-md po-mt-5"
}, bp = { class: "po-text-base po-font-medium po-text-red-700" }, gp = { class: "po-text-sm po-text-red-800 po-list-disc po-ml-5 po-mt-2" }, yp = {
  key: 1,
  class: "po-flex po-items-start po-space-x-4 po-p-5 po-bg-green-100 po-rounded-md po-mt-5"
}, xp = { class: "po-text-base po-font-medium po-text-green-700" }, Vp = {
  name: "PoFormStatusMessage"
}, X1 = /* @__PURE__ */ Object.assign(Vp, {
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
    return (t, n) => e.isError ? (i(), u("div", hp, [
      C(h(mt), { class: "po-w-8 po-stroke-red-600 po-stroke-2" }),
      s("div", null, [
        s("span", bp, b(e.message), 1),
        s("ul", gp, [
          (i(!0), u(I, null, z(e.errorList, (o) => (i(), u("li", null, b(o), 1))), 256))
        ])
      ])
    ])) : (i(), u("div", yp, [
      C(h(Pl), { class: "po-w-8 po-stroke-green-600 po-stroke-2" }),
      s("div", null, [
        s("span", xp, b(e.message), 1)
      ])
    ]));
  }
}), wp = { class: "po-bg-white po-relative po-group po-rounded-xl focus-within:po-ring-2 focus-within:po-ring-inset focus-within:po-ring-indigo-500" }, kp = { class: "po-block po-p-4 po-transition-colors po-duration-75 po-ease-linear" }, $p = { class: "po-flex po-items-start po-space-x-2" }, _p = { class: "po-flex po-items-start po-space-x-1" }, Cp = { class: "po-block po-text-2xl po-font-light po-text-slate-600" }, Sp = {
  key: 0,
  class: "po-text-sm po-text-green-500 po-font-medium po-pt-1"
}, Ep = { class: "po-text-sm po-tracking-wide po-text-slate-500" }, Pp = {
  name: "PoStatsBlock"
}, e0 = /* @__PURE__ */ Object.assign(Pp, {
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
    return (t, n) => (i(), u("div", {
      class: N(["po-grid po-gap-5", e.numberOfCols])
    }, [
      (i(!0), u(I, null, z(e.items, (o) => (i(), u("div", wp, [
        s("span", kp, [
          s("div", $p, [
            s("div", null, [
              s("span", {
                class: N([
                  "po-inline-flex po-p-2 po-rounded-md",
                  o.bgColor,
                  o.iconColor
                ])
              }, [
                (i(), R(fe(o.icon), { class: "po-w-4 po-h-4" }))
              ], 2)
            ]),
            s("div", null, [
              s("div", _p, [
                s("span", Cp, b(o.value), 1),
                o.diff ? (i(), u("span", Sp, b(o.diff), 1)) : x("", !0)
              ]),
              s("h4", Ep, b(o.label), 1)
            ])
          ])
        ])
      ]))), 256))
    ], 2));
  }
}), Op = {
  key: 0,
  class: "po-flex po-space-x-3 po-items-start"
}, Lp = { class: "po-flex po-items-center po-space-x-2" }, Np = ["datetime"], Dp = { class: "po-text-sm po-font-medium po-text-slate-600" }, Tp = ["datetime"], Bp = { class: "flex" }, Ap = { class: "po-flex po-pt-3 po-flex-wrap po-max-w-sm" }, jp = ["onClick"], Ip = {
  key: 1,
  class: "po-w-full po-text-center"
}, Rp = { class: "po-inline-block po-text-sm po-italic po-text-slate-500" }, Mp = /* @__PURE__ */ s("span", { class: "po-text-lg po-text-slate-300 po-px-3 po-inline-block" }, "—", -1), Fp = ["datetime"], zp = {
  name: "PoChatLogItem"
}, t0 = /* @__PURE__ */ Object.assign(zp, {
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
    return (t, n) => (i(), u("li", {
      class: N([
        "po-flex po-px-5",
        { "po-justify-end po-items-end po-flex-col": e.item.type === "first" }
      ])
    }, [
      e.item.type !== "message" ? (i(), u("div", Op, [
        e.item.type !== "first" && e.item.avatar !== "" ? (i(), u("div", {
          key: 0,
          class: "po-shrink-0 po-w-8 po-h-8 po-rounded-full po-p-1 po-bg-contain po-bg-slate-100",
          style: bl({ "background-image": `url(${e.item.avatar})` })
        }, null, 4)) : x("", !0),
        s("div", {
          class: N([
            { "po-pt-1": e.item.type !== "first" },
            {
              "po-flex po-justify-end po-items-end po-flex-col": e.item.type === "first"
            }
          ])
        }, [
          s("span", Lp, [
            e.item.type === "first" ? (i(), u("time", {
              key: 0,
              datetime: e.item.time,
              class: "po-text-xs po-text-slate-400"
            }, b(e.item.time_human), 9, Np)) : x("", !0),
            s("span", Dp, b(e.item.name), 1),
            e.item.type === "second" ? (i(), u("time", {
              key: 1,
              datetime: e.item.time,
              class: "po-text-xs po-text-slate-400"
            }, b(e.item.time_human), 9, Tp)) : x("", !0)
          ]),
          s("div", {
            class: N([
              "po-mt-2 po-space-y-1",
              {
                "po-flex po-justify-end po-items-end po-flex-col": e.item.type === "first"
              }
            ])
          }, [
            J(t.$slots, "message", {}, () => [
              (i(!0), u(I, null, z(e.item.message, (o) => (i(), u("div", Bp, [
                s("p", {
                  class: N([
                    "po-text-sm po-rounded-xl po-px-4 po-py-2",
                    {
                      "po-bg-slate-100 po-text-slate-600": e.item.type !== "first"
                    },
                    {
                      "po-bg-mpao-lightblue po-text-sky-50": e.item.type === "first"
                    }
                  ])
                }, b(o), 3)
              ]))), 256))
            ]),
            s("div", Ap, [
              (i(!0), u(I, null, z(e.item.actions, (o) => (i(), u("button", {
                onClick: (l) => t.$emit("button-click", o.label),
                class: "po-appearance-none po-border po-border-mpao-lightblue po-bg-white hover:po-bg-mpao-lightblue po-px-3 po-py-1 po-mb-2 po-mr-2 po-rounded-lg po-text-slate-500 hover:po-text-sky-100 po-transition-colors po-duration-150 po-ease-in-out po-text-sm po-ring-0 po-outline-none"
              }, b(o.label), 9, jp))), 256))
            ])
          ], 2)
        ], 2)
      ])) : x("", !0),
      e.item.type === "message" ? (i(), u("div", Ip, [
        (i(!0), u(I, null, z(e.item.message, (o) => (i(), u("p", Rp, [
          ne(b(o) + " ", 1),
          Mp,
          s("time", {
            datetime: e.item.time,
            class: "po-text-xs po-text-slate-400 po-inline-block"
          }, b(e.item.time_human), 9, Fp)
        ]))), 256))
      ])) : x("", !0)
    ], 2));
  }
}), Hp = {
  key: 0,
  class: "po-pointer-events-auto po-w-full po-max-w-sm po-overflow-hidden po-rounded-lg po-bg-mpao-lightblue po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5"
}, qp = { class: "po-p-4" }, Up = { class: "po-flex po-items-start" }, Gp = { class: "po-flex-shrink-0" }, Kp = { class: "po-ml-3 po-w-0 po-flex-1 po-pt-0.5" }, Wp = { class: "po-text-sm po-font-medium po-text-sky-100" }, Yp = { class: "po-mt-1 po-text-sm po-text-sky-300" }, Zp = { class: "po-mt-3 po-flex po-space-x-4" }, Jp = { class: "po-ml-4 po-flex po-flex-shrink-0" }, Qp = /* @__PURE__ */ s("span", { class: "po-sr-only" }, "Close", -1), Xp = {
  name: "PoNotification"
}, o0 = /* @__PURE__ */ Object.assign(Xp, {
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
    const n = e, { show: o } = Be(n), l = $(!1);
    X(o, () => {
      l.value = !1, setTimeout(() => {
        l.value = !0;
      }, 100);
    });
    const a = $(!1);
    return X(l, () => {
      a.value = !1, setTimeout(() => {
        a.value = !0;
      }, 200);
    }), (r, p) => l.value ? (i(), R(_t, {
      key: 0,
      to: "#po-notifications-alert"
    }, [
      C(Pe, {
        "enter-active-class": "po-transform po-ease-out po-duration-300 po-transition",
        "enter-from-class": "po-translate-y-2 po-opacity-0 sm:po-translate-y-0 sm:po-translate-x-2",
        "enter-to-class": "po-translate-y-0 po-opacity-100 sm:po-translate-x-0",
        "leave-active-class": "po-transition po-ease-in po-duration-100",
        "leave-from-class": "po-opacity-100",
        "leave-to-class": "po-opacity-0"
      }, {
        default: D(() => [
          a.value ? (i(), u("div", Hp, [
            s("div", qp, [
              s("div", Up, [
                s("div", Gp, [
                  J(r.$slots, "icon")
                ]),
                s("div", Kp, [
                  s("p", Wp, b(e.label), 1),
                  s("p", Yp, b(e.text), 1),
                  s("div", Zp, [
                    s("button", {
                      onClick: p[0] || (p[0] = (c) => r.$emit("button-click", e.buttonLabel)),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-100 hover:po-text-sky-200 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, b(e.buttonLabel), 1),
                    s("button", {
                      onClick: p[1] || (p[1] = (c) => l.value = !1),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-300 hover:po-text-sky-500 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, " Dismiss ")
                  ])
                ]),
                s("div", Jp, [
                  s("button", {
                    type: "button",
                    onClick: p[2] || (p[2] = (c) => l.value = !1),
                    class: "po-inline-flex po-rounded-md po-bg-mpao-lightblue po-text-sky-500 hover:po-text-sky-300 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                  }, [
                    Qp,
                    C(h(ol), {
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
}), eu = /* @__PURE__ */ s("div", { class: "po-fixed po-inset-0" }, null, -1), tu = { class: "po-absolute po-inset-0 po-overflow-hidden" }, ou = { class: "po-pointer-events-none po-fixed po-inset-y-0 po-right-0 po-flex po-max-w-full po-pl-10" }, lu = { class: "po-flex po-h-full po-flex-col po-overflow-y-scroll po-bg-white po-shadow-xl" }, nu = { class: "po-bg-slate-50 po-py-6 po-px-4 sm:po-px-6" }, au = { class: "po-flex po-items-center po-justify-between" }, su = { class: "po-ml-3 po-flex po-h-7 po-items-center" }, ru = /* @__PURE__ */ s("span", { class: "po-sr-only" }, "Close panel", -1), iu = {
  key: 0,
  class: "po-mt-1"
}, pu = { class: "po-text-sm po-text-slate-500" }, uu = {
  key: 0,
  class: "po-bg-slate-50 po-rounded-b-xl po-shrink-0"
}, cu = {
  name: "PoSlideover"
}, l0 = /* @__PURE__ */ Object.assign(cu, {
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
    const n = e, { show: o } = Be(n), l = $(!1);
    X(o, () => {
      l.value = o.value;
    });
    function a() {
      l.value = !1, t("slideover-closed", !0);
    }
    return (r, p) => (i(), R(h(Fe), {
      as: "template",
      show: l.value
    }, {
      default: D(() => [
        C(h(ot), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: a
        }, {
          default: D(() => [
            eu,
            s("div", {
              class: N(["po-fixed po-inset-0 po-overflow-hidden po-bg-black", e.screenOpacity])
            }, [
              s("div", tu, [
                s("div", ou, [
                  C(h(Ce), {
                    as: "template",
                    enter: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "enter-from": "po-translate-x-full",
                    "enter-to": "po-translate-x-0",
                    leave: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "leave-from": "po-translate-x-0",
                    "leave-to": "po-translate-x-full"
                  }, {
                    default: D(() => [
                      C(h(lt), {
                        class: N([e.maxWidth, "po-pointer-events-auto po-w-screen"])
                      }, {
                        default: D(() => [
                          s("div", lu, [
                            s("div", nu, [
                              s("div", au, [
                                C(h(Bo), { class: "po-text-lg po-font-medium po-text-slate-600" }, {
                                  default: D(() => [
                                    ne(b(e.label), 1)
                                  ]),
                                  _: 1
                                }),
                                s("div", su, [
                                  s("button", {
                                    type: "button",
                                    class: "po-rounded-md po-text-slate-500 hover:po-text-mpao-lightblue focus:po-outline-none focus:po-ring-2 focus:po-ring-white",
                                    onClick: a
                                  }, [
                                    ru,
                                    C(h(yo), {
                                      class: "po-h-6 po-w-6",
                                      "aria-hidden": "true"
                                    })
                                  ])
                                ])
                              ]),
                              e.description ? (i(), u("div", iu, [
                                s("p", pu, b(e.description), 1)
                              ])) : x("", !0)
                            ]),
                            s("div", {
                              class: N([e.bgColor, "po-relative po-grow po-pt-6 po-px-4 sm:po-px-6"])
                            }, [
                              J(r.$slots, "content")
                            ], 2),
                            r.$slots.footer ? (i(), u("div", uu, [
                              J(r.$slots, "footer")
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
}), du = /* @__PURE__ */ s("div", { class: "po-fixed po-inset-0 po-bg-gray-500 po-bg-opacity-25 po-transition-opacity" }, null, -1), fu = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto po-p-4 sm:po-p-6 md:po-p-20" }, vu = { class: "po-relative" }, mu = {
  key: 0,
  class: "po-max-h-96 scroll-py-3 po-overflow-y-auto po-p-3"
}, hu = {
  name: "PoCommandPalette"
}, n0 = /* @__PURE__ */ Object.assign(hu, {
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
    const t = e, n = $(""), { show: o } = Be(t), l = $(!1);
    X(o, () => {
      l.value = !1, setTimeout(() => {
        l.value = !0;
      }, 100);
    });
    function a(r) {
      r.ctrlKey && r.key === "b" && (l.value = !0);
    }
    return K(() => {
      window.addEventListener("keyup", a);
    }), bo(() => {
      window.removeEventListener("keyup", a);
    }), (r, p) => (i(), R(h(Fe), {
      show: l.value,
      as: "template",
      onAfterLeave: p[2] || (p[2] = (c) => n.value = ""),
      appear: ""
    }, {
      default: D(() => [
        C(h(ot), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: p[1] || (p[1] = (c) => l.value = !1)
        }, {
          default: D(() => [
            C(h(Ce), {
              as: "template",
              enter: "po-ease-out po-duration-300",
              "enter-from": "po-opacity-0",
              "enter-to": "po-opacity-100",
              leave: "po-ease-in po-duration-200",
              "leave-from": "po-opacity-100",
              "leave-to": "po-opacity-0"
            }, {
              default: D(() => [
                du
              ]),
              _: 1
            }),
            s("div", fu, [
              C(h(Ce), {
                as: "template",
                enter: "po-ease-out po-duration-300",
                "enter-from": "po-opacity-0 po-scale-95",
                "enter-to": "po-opacity-100 po-scale-100",
                leave: "po-ease-in po-duration-200",
                "leave-from": "po-opacity-100 po-scale-100",
                "leave-to": "po-opacity-0 po-scale-95"
              }, {
                default: D(() => [
                  C(h(lt), { class: "po-mx-auto po-max-w-xl po-transform po-divide-y po-divide-gray-100 po-overflow-hidden po-rounded-xl po-bg-white po-shadow-2xl po-ring-1 po-ring-black po-ring-opacity-5 po-transition-all" }, {
                    default: D(() => [
                      s("div", vu, [
                        C(h(ti), {
                          class: "po-pointer-events-none po-absolute po-top-3.5 po-left-4 po-h-5 po-w-5 po-text-gray-400",
                          "aria-hidden": "true"
                        }),
                        s("input", {
                          type: "text",
                          name: "",
                          class: "po-h-12 po-w-full po-border-0 po-bg-transparent po-pl-11 po-pr-4 po-text-gray-800 po-placeholder-gray-400 focus:po-ring-0 sm:po-text-sm",
                          placeholder: "Search...",
                          onChange: p[0] || (p[0] = (c) => n.value = c.target.value)
                        }, null, 32)
                      ]),
                      e.showContent ? (i(), u("div", mu, [
                        J(r.$slots, "content")
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
}), bu = /* @__PURE__ */ s("div", { class: "po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity" }, null, -1), gu = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto" }, yu = { class: "po-flex po-min-h-full po-items-start po-justify-center po-p-4 po-text-center sm:po-p-0" }, xu = { class: "po-p-5" }, Vu = { class: "po-text-center po-space-y-3" }, wu = { key: 1 }, ku = { class: "po-text-sm po-text-gray-600" }, $u = { class: "po-border-t po-border-slate-200 po-flex po-divide-x po-divide-slate-200" }, _u = {
  name: "PoAlert"
}, a0 = /* @__PURE__ */ Object.assign(_u, {
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
  emits: ["alert-closed"],
  setup(e, { emit: t }) {
    const n = e, { show: o } = Be(n), l = $(!1);
    X(o, () => {
      l.value = o.value;
    });
    function a() {
      l.value = !1, t("alert-closed", !0);
    }
    return (r, p) => (i(), R(h(Fe), {
      as: "template",
      show: l.value
    }, {
      default: D(() => [
        C(h(ot), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: a
        }, {
          default: D(() => [
            C(h(Ce), {
              as: "template",
              enter: "po-ease-out po-duration-300",
              "enter-from": "po-opacity-0",
              "enter-to": "po-opacity-100",
              leave: "po-ease-in po-duration-200",
              "leave-from": "po-opacity-100",
              "leave-to": "po-opacity-0"
            }, {
              default: D(() => [
                bu
              ]),
              _: 1
            }),
            s("div", gu, [
              s("div", yu, [
                C(h(Ce), {
                  as: "template",
                  enter: "po-ease-out po-duration-300",
                  "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                  "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                  leave: "po-ease-in po-duration-200",
                  "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                  "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                }, {
                  default: D(() => [
                    C(h(lt), { class: "po-relative po-transform po-overflow-hidden po-rounded-lg po-bg-white po-text-left po-shadow-xl po-transition-all sm:po-my-8 sm:po-w-full sm:po-max-w-sm" }, {
                      default: D(() => [
                        s("div", xu, [
                          s("div", Vu, [
                            e.alertTitle !== "" ? (i(), R(h(Bo), {
                              key: 0,
                              as: "h3",
                              class: "po-text-lg po-font-medium po-leading-6 po-text-gray-900"
                            }, {
                              default: D(() => [
                                ne(b(e.alertTitle), 1)
                              ]),
                              _: 1
                            })) : x("", !0),
                            e.alertDescription !== "" ? (i(), u("div", wu, [
                              s("p", ku, b(e.alertDescription), 1)
                            ])) : x("", !0)
                          ])
                        ]),
                        s("div", $u, [
                          s("button", {
                            onClick: a,
                            class: "po-text-sm po-bg-white po-text-slate-500 hover:po-bg-slate-50 po-transition-colors po-duration-100 po-ease-out po-font-medium po-py-3 po-px-5 po-w-1/2 focus:po-ring-0"
                          }, b(e.cancelBtnLabel), 1),
                          s("button", {
                            onClick: p[0] || (p[0] = (c) => {
                              r.$emit("button-click", "ok"), a();
                            }),
                            class: "po-text-sm po-bg-white po-text-mpao-lightblue hover:po-bg-slate-50 po-transition-colors po-duration-100 po-ease-out po-font-medium po-py-3 po-px-5 po-w-1/2 focus:po-ring-0"
                          }, b(e.okBtnLabel), 1)
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
}), Cu = {
  key: 0,
  class: "po-col-span-2 po-relative po-mt-5"
}, Su = /* @__PURE__ */ s("span", {
  class: "po-absolute po-top-0 po-left-1 po--ml-px po-h-[calc(100%-7px)] po-w-0.5 po-bg-gray-200",
  "aria-hidden": "true"
}, null, -1), Eu = { class: "po-relative po-space-y-5" }, Pu = { class: "po-flex po-space-x-2 po-items-start" }, Ou = { class: "log-item" }, Lu = { key: 0 }, Nu = {
  key: 0,
  class: "po-text-slate-500 po-text-xs"
}, Du = {
  key: 1,
  class: "po-text-center po-py-10"
}, Tu = { class: "po-text-sm po-text-slate-500" }, Bu = {
  name: "PoLogs"
}, s0 = /* @__PURE__ */ Object.assign(Bu, {
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
    return (t, n) => (i(), u("div", null, [
      e.items && e.items.length > 0 ? (i(), u("div", Cu, [
        Su,
        s("div", Eu, [
          (i(!0), u(I, null, z(e.items, (o, l) => (i(), u("div", Pu, [
            s("p", {
              class: N([
                "po-rounded-full po-w-2 po-h-2 border-1 po-border-white po-shrink-0",
                { "po-bg-mpao-orange": l !== e.items.length - 1 },
                ,
                { "po-bg-slate-400": l == e.items.length - 1 }
              ])
            }, null, 2),
            s("div", Ou, [
              s("span", null, [
                ne(b(o.label) + " on " + b(o.date) + " " + b(o.by && o.by !== "" ? "by" : "") + " ", 1),
                o.by && o.by !== "" ? (i(), u("span", Lu, b(o.by), 1)) : x("", !0)
              ]),
              o.description && o.description !== "" ? (i(), u("blockquote", Nu, ' "' + b(o.description) + '" ', 1)) : x("", !0)
            ])
          ]))), 256))
        ])
      ])) : (i(), u("div", Du, [
        s("span", Tu, b(e.emptyLabel), 1)
      ]))
    ]));
  }
}), Au = {
  key: 0,
  role: "list",
  class: "po-divide-y po-divide-gray-200 po-rounded-md po-border po-border-gray-200 po-mt-5"
}, ju = { class: "po-flex po-items-center po-justify-between po-py-3 po-pl-3 po-pr-4 po-text-sm" }, Iu = { class: "po-flex po-w-0 po-flex-1 po-items-center" }, Ru = { class: "po-ml-2 po-w-0 po-flex-1 po-truncate" }, Mu = { class: "po-ml-4 po-flex-shrink-0 po-space-x-4" }, Fu = ["onClick"], zu = ["onClick"], Hu = {
  key: 1,
  class: "po-py-10"
}, qu = { class: "po-text-sm po-text-slate-500" }, Uu = {
  name: "PoDownloadFileList"
}, r0 = /* @__PURE__ */ Object.assign(Uu, {
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
    return (n, o) => (i(), u("div", null, [
      e.files && e.files.length > 0 ? (i(), u("ul", Au, [
        (i(!0), u(I, null, z(e.files, (l) => (i(), u("li", ju, [
          s("div", Iu, [
            C(h(go), {
              class: "po-h-5 po-w-5 po-flex-shrink-0 po-text-gray-400",
              "aria-hidden": "true"
            }),
            s("span", Ru, b(l.label), 1)
          ]),
          s("div", Mu, [
            s("a", {
              href: "#",
              onClick: re((a) => n.$emit("button-click", l), ["prevent"]),
              class: "po-font-medium po-text-mpao-lightblue hover:po-text-indigo-500"
            }, b(e.linkLabel), 9, Fu),
            e.showViewBtn ? (i(), u("a", {
              key: 0,
              href: "#",
              onClick: re((a) => n.$emit("view-click", l), ["prevent"]),
              class: "po-font-medium po-text-mpao-lightblue hover:po-text-indigo-500"
            }, b(e.viewBtnLabel), 9, zu)) : x("", !0)
          ])
        ]))), 256))
      ])) : (i(), u("div", Hu, [
        s("span", qu, b(e.emptyLabel), 1)
      ]))
    ]));
  }
}), ll = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, l] of t)
    n[o] = l;
  return n;
}, Gu = {
  name: "PoContentArea"
}, Ku = { class: "shell-content--area po-max-w-[1370px]" };
function Wu(e, t, n, o, l, a) {
  return i(), u("section", Ku, [
    J(e.$slots, "default")
  ]);
}
const i0 = /* @__PURE__ */ ll(Gu, [["render", Wu]]), Yu = {
  name: "AnimatedLogo"
}, Zu = /* @__PURE__ */ gl('<div><svg class="po-stroke-mpao-blue po-w-16 animated-logo" viewBox="0 0 62 55" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.76292 17.8572L7.7 17.9704V18.0682C6.87397 19.526 6.23618 20.649 5.58241 21.4779C4.93472 22.299 4.30505 22.7864 3.51417 23.0053C3.46261 23.0112 3.41718 23.0206 3.39088 23.026C3.35663 23.0331 3.31491 23.0425 3.27694 23.0511C3.25988 23.055 3.24357 23.0587 3.22903 23.0619C3.1106 23.0882 3.03712 23.1 3 23.1H2.93844L2.89561 23.1107L15.9876 0.600006H19.1308C17.2397 1.92747 16.1556 3.83665 15.5371 5.73245C14.8359 7.88203 14.7198 10.0514 14.7027 11.4258C13.1737 11.6033 11.0729 12.4434 9.38038 15.128C8.77075 16.0431 8.26353 16.9561 7.76713 17.8496L7.76292 17.8572Z"></path><path d="M48.1818 11.3241C48.047 8.39742 47.5389 6.05982 46.5472 4.07639C45.8153 2.61266 44.8203 1.39271 43.5945 0.5H46.8113L59.8583 23.0959C59.8303 23.0912 59.7891 23.0819 59.7213 23.0649C59.7166 23.0638 59.7117 23.0625 59.7066 23.0612C59.6302 23.042 59.5099 23.0118 59.3765 23.0027C58.59 22.7825 57.9627 22.2958 57.3176 21.4779C56.6586 20.6423 56.0158 19.508 55.1801 18.0331L55.1413 17.9647C54.8861 17.4553 54.6068 16.973 54.3362 16.5054L54.3327 16.4995C54.0565 16.0225 53.7893 15.5605 53.5472 15.0764L53.5333 15.0485L53.516 15.0226C51.7283 12.3411 49.7115 11.4988 48.1818 11.3241Z"></path><path d="M9.28397 39.6773C11.0717 42.3589 13.0885 43.2011 14.6182 43.3759C14.753 46.3026 15.2611 48.6402 16.2528 50.6236C16.9991 52.1163 17.9653 53.2992 19.1863 54.2H15.7881L2.74125 31.699C2.76073 31.6996 2.78031 31.7 2.8 31.7C2.89335 31.7 2.97474 31.7149 3.07903 31.7381C3.08854 31.7402 3.09897 31.7426 3.11023 31.7452C3.18647 31.7626 3.30082 31.7888 3.42319 31.7972C4.20888 32.0178 4.86081 32.5271 5.52047 33.3603C6.20216 34.2214 6.85697 35.382 7.66164 36.8405C8.26116 37.9396 8.76739 38.8512 9.276 39.665L9.27989 39.6712L9.28397 39.6773Z"></path><path d="M55.124 36.865L55.1331 36.8504L55.1412 36.8353C55.9431 35.3316 56.5997 34.1683 57.2697 33.307C57.9146 32.4778 58.5471 31.9616 59.2949 31.6961C59.4179 31.6866 59.5418 31.6616 59.6287 31.6442C59.6354 31.6428 59.6418 31.6415 59.6481 31.6403C59.719 31.6261 59.772 31.616 59.8123 31.6095L46.8115 54.1H43.8753C45.7283 52.7465 46.7867 50.8277 47.3889 48.9394C48.064 46.8226 48.1795 44.7058 48.1971 43.3742C49.7262 43.1967 51.8271 42.3567 53.5196 39.6719C53.8327 39.2016 54.1164 38.6849 54.3777 38.1995C54.4112 38.1375 54.4442 38.076 54.4768 38.0152C54.7049 37.5906 54.9148 37.1996 55.124 36.865Z"></path><path d="M32.2763 51.5708L32.2653 51.5582L32.2536 51.5465C32.0661 51.359 31.7413 51.2 31.4 51.2C31.3949 51.2 31.3894 51.2 31.3835 51.2C31.2956 51.1998 31.1323 51.1993 30.9751 51.2442C30.7932 51.2962 30.6132 51.4082 30.4904 51.6086C29.1941 53.0706 27.544 53.8 25.5 53.8C22.8209 53.8 20.828 52.9218 19.4532 51.2005C18.1148 49.5247 17.3123 46.988 17.1201 43.5109C18.6883 43.1579 19.8601 42.2673 20.5004 41.6896C20.5136 44.8271 20.8579 46.8152 21.6737 48.0181C22.5558 49.319 23.9045 49.6 25.5 49.6C27.4335 49.6 28.5187 48.2893 29.0946 46.9901C29.6604 45.7138 29.7966 44.3347 29.7999 43.8193C29.8943 42.5846 30.6602 41.8 31.5 41.8H31.5778C32.4558 41.8842 33.2 42.7102 33.2 43.9C33.2 45.6119 33.5619 47.0065 34.2986 47.9982C35.0485 49.0077 36.1459 49.544 37.4792 49.5996L37.4896 49.6H37.5C39.2304 49.6 40.5973 49.3258 41.4454 48.0081C41.849 47.3811 42.1078 46.5565 42.2692 45.5056C42.4311 44.4518 42.5 43.1353 42.5 41.5V24.4455L45.9 21.8182V41.5C45.9 41.4958 45.8996 41.5001 45.8978 41.519C45.8959 41.5381 45.8927 41.5719 45.887 41.6267L45.8842 41.6541C45.8752 41.7406 45.8636 41.8524 45.8521 41.9797C45.8264 42.2614 45.8 42.6283 45.8 43V43.9V43.9029V43.9059V43.9088V43.9117V43.9146V43.9175V43.9205V43.9234V43.9263V43.9292V43.9321V43.935V43.9379V43.9408V43.9437V43.9466V43.9495V43.9524V43.9553V43.9581V43.961V43.9639V43.9668V43.9696V43.9725V43.9754V43.9783V43.9811V43.984V43.9868V43.9897V43.9926V43.9954V43.9983V44.0011V44.004V44.0068V44.0096V44.0125V44.0153V44.0181V44.021V44.0238V44.0266V44.0295V44.0323V44.0351V44.0379V44.0407V44.0435V44.0463V44.0492V44.052V44.0548V44.0576V44.0603V44.0631V44.0659V44.0687V44.0715V44.0743V44.0771V44.0798V44.0826V44.0854V44.0882V44.0909V44.0937V44.0965V44.0992V44.102V44.1047V44.1075V44.1102V44.113V44.1157V44.1185V44.1212V44.1239V44.1267V44.1294V44.1321V44.1349V44.1376V44.1403V44.143V44.1457V44.1484V44.1512V44.1539V44.1566V44.1593V44.162V44.1647V44.1674V44.17V44.1727V44.1754V44.1781V44.1808V44.1835V44.1861V44.1888V44.1915V44.1941V44.1968V44.1995V44.2021V44.2048V44.2074V44.2101V44.2127V44.2154V44.218V44.2207V44.2233V44.2259V44.2285V44.2312V44.2338V44.2364V44.239V44.2417V44.2443V44.2469V44.2495V44.2521V44.2547V44.2573V44.2599V44.2625V44.2651V44.2677V44.2702V44.2728V44.2754V44.278V44.2806V44.2831V44.2857V44.2882V44.2908V44.2934V44.2959V44.2985V44.301V44.3036V44.3061V44.3087V44.3112V44.3137V44.3163V44.3188V44.3213V44.3238V44.3264V44.3289V44.3314V44.3339V44.3364V44.3389V44.3414V44.3439V44.3464V44.3489V44.3514V44.3539V44.3564V44.3588V44.3613V44.3638V44.3663V44.3687V44.3712V44.3737V44.3761V44.3786V44.381V44.3835V44.3859V44.3884V44.3908V44.3932V44.3957V44.3981V44.4005V44.403V44.4054V44.4078V44.4102V44.4126V44.415V44.4174V44.4199V44.4223V44.4247V44.427V44.4294V44.4318V44.4342V44.4366V44.439V44.4413V44.4437V44.4461V44.4484V44.4508V44.4532V44.4555V44.4579V44.4602V44.4626V44.4649V44.4672V44.4696V44.4719V44.4742V44.4766V44.4789V44.4812V44.4835V44.4858V44.4882V44.4905V44.4928V44.4951V44.4974V44.4997V44.5019V44.5042V44.5065V44.5088V44.5111V44.5133V44.5156V44.5179V44.5201V44.5224V44.5247V44.5269V44.5292V44.5314V44.5337V44.5359V44.5381V44.5404V44.5426V44.5448V44.547V44.5493V44.5515V44.5537V44.5559V44.5581V44.5603V44.5625V44.5647V44.5669V44.5691V44.5713V44.5734V44.5756V44.5778V44.58V44.5821V44.5843V44.5865V44.5886V44.5908V44.5929V44.5951V44.5972V44.5994V44.6015V44.6036V44.6058V44.6079V44.61V44.6121V44.6142V44.6164V44.6185V44.6206V44.6227V44.6248V44.6269V44.6289V44.631V44.6331V44.6352V44.6373V44.6393V44.6414V44.6435V44.6455V44.6476V44.6497V44.6517V44.6538V44.6558V44.6578V44.6599V44.6619V44.6639V44.666V44.668V44.67V44.672V44.674V44.676V44.678V44.68V44.682V44.684V44.686V44.688V44.69V44.692V44.6939V44.6959V44.6979V44.6998V44.7018V44.7037V44.7057V44.7076V44.7096V44.7115V44.7135V44.7154V44.7173V44.7193V44.7212V44.7231V44.725V44.7269V44.7288V44.7307V44.7326V44.7345V44.7364V44.7383V44.7402V44.7421V44.7439V44.7458V44.7477V44.7495V44.7514V44.7533V44.7551V44.757V44.7588V44.7606V44.7625V44.7643V44.7661V44.768V44.7698V44.7716V44.7734V44.7752V44.777V44.7788V44.7806V44.7824V44.7842V44.786V44.7878V44.7896V44.7914V44.7931V44.7949V44.7967V44.7984V44.8002V44.8019V44.8037V44.8054V44.8071V44.8089V44.8106V44.8123V44.8141V44.8158V44.8175V44.8192V44.8209V44.8226V44.8243V44.826V44.8277V44.8294V44.8311V44.8328V44.8344V44.8361V44.8378V44.8394V44.8411V44.8427V44.8444V44.846V44.8477V44.8493V44.851V44.8526V44.8542V44.8558V44.8575V44.8591V44.8607V44.8623V44.8639V44.8655V44.8671V44.8687V44.8702V44.8718V44.8734V44.875V44.8765V44.8781V44.8797V44.8812V44.8828V44.8843V44.8859V44.8874V44.8889V44.8905V44.892V44.8935V44.895V44.8965V44.898V44.8996V44.9011V44.9025V44.904V44.9055V44.907V44.9085V44.91V44.9114V44.9129V44.9144V44.9158V44.9173V44.9187V44.9202V44.9216V44.923V44.9245V44.9259V44.9273V44.9288V44.9302V44.9316V44.933V44.9344V44.9358V44.9372V44.9386V44.9399V44.9413V44.9427V44.9441V44.9454V44.9468V44.9482V44.9495V44.9509V44.9522V44.9535V44.9549V44.9562V44.9575V44.9589V44.9602V44.9615V44.9628V44.9641V44.9654V44.9667V44.968V44.9693V44.9706V44.9718V44.9731V44.9744V44.9757V44.9769V44.9782V44.9794V44.9807V44.9819V44.9832V44.9844V44.9856V44.9868V44.9881V44.9893V44.9905V44.9917V44.9929V44.9941V44.9953V44.9965V44.9977V44.9988V45V45.1V45.1006V45.1012V45.1017V45.1023V45.1029V45.1035V45.104V45.1046V45.1052V45.1057V45.1063V45.1069V45.1074V45.108V45.1085V45.1091V45.1096V45.1102V45.1107V45.1113V45.1118V45.1123V45.1129V45.1134V45.1139V45.1145V45.115V45.1155V45.1161V45.1166V45.1171V45.1176V45.1181V45.1186V45.1191V45.1196V45.1202V45.1207V45.1212V45.1217V45.1222V45.1226V45.1231V45.1236V45.1241V45.1246V45.1251V45.1256V45.1261V45.1265V45.127V45.1275V45.128V45.1284V45.1289V45.1294V45.1298V45.1303V45.1307V45.1312V45.1317V45.1321V45.1326V45.133V45.1335V45.1339V45.1343V45.1348V45.1352V45.1357V45.1361V45.1365V45.137V45.1374V45.1378V45.1383V45.1387V45.1391V45.1395V45.1399V45.1404V45.1408V45.1412V45.1416V45.142V45.1424V45.1428V45.1432V45.1436V45.144V45.1444V45.1448V45.1452V45.1456V45.146V45.1464V45.1468V45.1471V45.1475V45.1479V45.1483V45.1487V45.149V45.1494V45.1498V45.1501V45.1505V45.1509V45.1512V45.1516V45.152V45.1523V45.1527V45.153V45.1534V45.1537V45.1541V45.1544V45.1548V45.1551V45.1555V45.1558V45.1561V45.1565V45.1568V45.1572V45.1575V45.1578V45.1581V45.1585V45.1588V45.1591V45.1594V45.1598V45.1601V45.1604V45.1607V45.161V45.1613V45.1616V45.162V45.1623V45.1626V45.1629V45.1632V45.1635V45.1638V45.1641V45.1644V45.1647V45.165V45.1652V45.1655V45.1658V45.1661V45.1664V45.1667V45.167V45.1672V45.1675V45.1678V45.1681V45.1683V45.1686V45.1689V45.1691V45.1694V45.1697V45.1699V45.1702V45.1705V45.1707V45.171V45.1712V45.1715V45.1717V45.172V45.1722V45.1725V45.1727V45.173V45.1732V45.1735V45.1737V45.174V45.1742V45.1744V45.1747V45.1749V45.1751V45.1753C45.5039 48.1507 44.6544 50.2924 43.3031 51.6899C41.9582 53.0807 40.0524 53.8 37.5 53.8C35.4235 53.8 33.5685 53.0476 32.2763 51.5708Z"></path><path d="M22.8 23.2538V18.2178L29.3909 23.307L26.1939 25.8645L22.8 23.2538Z"></path><path d="M16.7 20.2V19.7H16.5V18.8V10.858C16.5042 10.8478 16.5096 10.8348 16.5142 10.8232C16.5488 10.7368 16.5963 10.6012 16.5998 10.4209C16.8474 7.03069 17.6799 4.61275 19.0737 3.04468C20.4543 1.49155 22.4511 0.699997 25.2 0.699997C27.2568 0.699997 29.1263 1.53906 30.5352 3.04197L30.5407 3.04785L30.5464 3.05355C30.7614 3.26854 31.0508 3.35 31.3 3.35C31.5492 3.35 31.8386 3.26854 32.0536 3.05355L32.0646 3.04251L32.0749 3.03081C33.4779 1.4408 35.1402 0.699997 37.3 0.699997C40.0769 0.699997 42.1441 1.62655 43.5571 3.42174C44.934 5.17104 45.7393 7.80743 45.886 11.3874C44.0184 11.8028 42.6345 12.9721 42.1 13.4936V13.2C42.1 10.0544 41.7835 8.06299 40.9925 6.86242C40.1497 5.58316 38.8495 5.3 37.3 5.3C35.4114 5.3 34.3769 6.59229 33.8399 7.85422C33.3055 9.11015 33.2 10.457 33.2 10.9C33.2 12.2634 32.2859 13.1 31.3 13.1H31.2204C30.2388 13.0141 29.4 12.0845 29.4 10.8C29.4 9.19015 29.0639 7.84653 28.3661 6.89234C27.6525 5.91665 26.5974 5.4 25.3 5.4C23.6267 5.4 22.3017 5.64608 21.4896 6.93319C21.1052 7.5425 20.863 8.34586 20.7131 9.3714C20.5626 10.4004 20.5 11.6909 20.5 13.3V30.4541L16.7 33.3833V20.2Z"></path><path d="M40.1 31.5462V36.5799L33.4225 31.4049L36.6974 28.9288L40.1 31.5462Z"></path><mask id="path-9-inside-1" fill="white"><path d="M58.7 30.1C58.9 30 59.5 30 59.8 29.9C60.9 29.8 61.8 28.7 61.8 27.4C61.8 26.1 60.9 25 59.8 24.9C59.7 24.9 59.5 24.9 59.4 24.8C59.3 24.8 59.2 24.8 59.1 24.7C59.1 24.7 59.1 24.7 59 24.7C58.6 24.6 58.1 24.4 57.7 24.1C57.7 24.1 57.7 24.1 57.6 24C56.1 23.1 55 21.2 53.6 18.7C53.1 17.8 52.6 16.9 52 16C50.5 13.7 48.9 13.1 47.8 13C47.7 13 47.6 13 47.5 13H47.3C47.1 13 46.9 13 46.9 13C45.2 13.2 44 14.3 43.6 14.8L25.2 29.1C25.2 29.1 25.2 29.1 25.1 29.2L23 30.8L16.8 35.5L16.4 35.9C16.4 35.9 16.4 35.9 16.3 35.9C16 36.1 15.7 36.3 15.4 36.3C15.1 36.3 14.9 36.2 14.7 36.1C14.5 35.9 14.4 35.8 14.3 35.5C13.9 34.8 13.4 34.1 13 33.3V33.1C12.2 31.7 11.3 30 10.1 28.6C10.1 28.6 10.1 28.6 10.1 28.5L10 28.4C9.9 28.3 9.9 28.3 9.8 28.2C9.8 28.2 9.8 28.2 9.7 28.1L9.2 27.5C9.2 27.5 9.2 27.5 9.1 27.5C9 27.3 9 27.1 9.1 27L9.6 26.5C10.9 25 11.9 23.2 12.8 21.6V21.5C13.2 20.7 13.7 19.9 14.2 19.1C14.4 18.8 14.6 18.6 14.7 18.5V13.1C13.6 13.2 12 13.9 10.6 16C10 16.9 9.5 17.8 9 18.7C7.8 20.9 6.8 22.5 5.6 23.5C4.8 24.1 4 24.4 3.5 24.6C3.5 24.6 3.5 24.6 3.4 24.6C3.3 24.6 3.1 24.7 3 24.7C2.9 24.7 2.9 24.7 2.8 24.7C2.7 24.7 2.7 24.7 2.7 24.7H2.6H2.5C2.3 24.7 2.2 24.8 2.1 24.8C2 24.8 2 24.8 2 24.9C1.7 25.1 1.4 25.3 1.2 25.6C1.2 25.7 1.1 25.7 1.1 25.8V25.9L0.999997 26.1C0.999997 26.2 0.999997 26.2 0.899997 26.3C0.899997 26.4 0.899997 26.4 0.799997 26.5C0.799997 26.6 0.799997 26.7 0.699997 26.7C0.699997 26.8 0.699997 26.9 0.699997 26.9C0.699997 27 0.699997 27.1 0.699997 27.1C0.699997 27.2 0.699997 27.2 0.699997 27.3C0.699997 27.4 0.699997 27.5 0.699997 27.5C0.699997 27.6 0.699997 27.7 0.699997 27.7C0.699997 27.8 0.699997 27.9 0.799997 27.9V28V28.1C0.799997 28.2 0.799997 28.2 0.899997 28.2L0.999997 28.4C0.999997 28.5 1.1 28.5 1.1 28.5C1.1 28.5 1.1 28.5 1.1 28.6C1.2 28.7 1.3 28.9 1.5 29C1.6 29 1.6 29.1 1.7 29.1C1.7 29.1 1.8 29.1 1.8 29.2C1.8 29.2 1.8 29.2 1.9 29.2C2 29.3 2.2 29.3 2.3 29.4C2.4 29.4 2.4 29.4 2.4 29.4L2.9 29.5C3.1 29.5 3.2 29.6 3.4 29.6C4.2 29.8 4.7 30.2 4.8 30.2C6.4 31.2 7.5 33 8.9 35.5C9.5 36.6 10 37.4 10.5 38.2C11.9 40.3 13.4 41 14.4 41.1C14.5 41.1 14.5 41.1 14.6 41.1C14.7 41.1 14.8 41.1 14.8 41.1C15 41.1 15.2 41.1 15.5 41.1H15.6C17.2 40.8 18.5 39.8 18.9 39.3L19 39.2L19.8 38.6C19.8 38.6 19.9 38.5 20 38.5L30.2 30.6L41.3 22L46.5 18H46.6C46.7 18 46.9 17.9 47 17.9C47.4 17.9 47.8 18.1 48.1 18.6L48.5 19.2C48.8 19.7 49.2 20.3 49.5 20.9V21C50.1 22.1 50.8 23.4 51.7 24.6C51.7 24.6 51.7 24.7 51.8 24.7C52.1 25.1 52.4 25.5 52.7 25.8C52.7 25.8 52.8 25.8 52.8 25.9C53 26.1 53.1 26.3 53.3 26.4C53.4 26.5 53.4 26.7 53.3 26.9C52 28.5 50.4 31.1 49.6 32.4V32.5C49.2 33.2 48.7 34.1 48.2 34.9C48 35.2 47.8 35.4 47.7 35.5V40.9C48.8 40.8 50.4 40.1 51.8 37.9C52.4 37 52.9 36 53.4 35.2C53.5 35 53.7 34.7 53.8 34.5C55.2 33 56.4 30.9 58.7 30.1Z"></path></mask><path d="M58.7 30.1C58.9 30 59.5 30 59.8 29.9C60.9 29.8 61.8 28.7 61.8 27.4C61.8 26.1 60.9 25 59.8 24.9C59.7 24.9 59.5 24.9 59.4 24.8C59.3 24.8 59.2 24.8 59.1 24.7C59.1 24.7 59.1 24.7 59 24.7C58.6 24.6 58.1 24.4 57.7 24.1C57.7 24.1 57.7 24.1 57.6 24C56.1 23.1 55 21.2 53.6 18.7C53.1 17.8 52.6 16.9 52 16C50.5 13.7 48.9 13.1 47.8 13C47.7 13 47.6 13 47.5 13H47.3C47.1 13 46.9 13 46.9 13C45.2 13.2 44 14.3 43.6 14.8L25.2 29.1C25.2 29.1 25.2 29.1 25.1 29.2L23 30.8L16.8 35.5L16.4 35.9C16.4 35.9 16.4 35.9 16.3 35.9C16 36.1 15.7 36.3 15.4 36.3C15.1 36.3 14.9 36.2 14.7 36.1C14.5 35.9 14.4 35.8 14.3 35.5C13.9 34.8 13.4 34.1 13 33.3V33.1C12.2 31.7 11.3 30 10.1 28.6C10.1 28.6 10.1 28.6 10.1 28.5L10 28.4C9.9 28.3 9.9 28.3 9.8 28.2C9.8 28.2 9.8 28.2 9.7 28.1L9.2 27.5C9.2 27.5 9.2 27.5 9.1 27.5C9 27.3 9 27.1 9.1 27L9.6 26.5C10.9 25 11.9 23.2 12.8 21.6V21.5C13.2 20.7 13.7 19.9 14.2 19.1C14.4 18.8 14.6 18.6 14.7 18.5V13.1C13.6 13.2 12 13.9 10.6 16C10 16.9 9.5 17.8 9 18.7C7.8 20.9 6.8 22.5 5.6 23.5C4.8 24.1 4 24.4 3.5 24.6C3.5 24.6 3.5 24.6 3.4 24.6C3.3 24.6 3.1 24.7 3 24.7C2.9 24.7 2.9 24.7 2.8 24.7C2.7 24.7 2.7 24.7 2.7 24.7H2.6H2.5C2.3 24.7 2.2 24.8 2.1 24.8C2 24.8 2 24.8 2 24.9C1.7 25.1 1.4 25.3 1.2 25.6C1.2 25.7 1.1 25.7 1.1 25.8V25.9L0.999997 26.1C0.999997 26.2 0.999997 26.2 0.899997 26.3C0.899997 26.4 0.899997 26.4 0.799997 26.5C0.799997 26.6 0.799997 26.7 0.699997 26.7C0.699997 26.8 0.699997 26.9 0.699997 26.9C0.699997 27 0.699997 27.1 0.699997 27.1C0.699997 27.2 0.699997 27.2 0.699997 27.3C0.699997 27.4 0.699997 27.5 0.699997 27.5C0.699997 27.6 0.699997 27.7 0.699997 27.7C0.699997 27.8 0.699997 27.9 0.799997 27.9V28V28.1C0.799997 28.2 0.799997 28.2 0.899997 28.2L0.999997 28.4C0.999997 28.5 1.1 28.5 1.1 28.5C1.1 28.5 1.1 28.5 1.1 28.6C1.2 28.7 1.3 28.9 1.5 29C1.6 29 1.6 29.1 1.7 29.1C1.7 29.1 1.8 29.1 1.8 29.2C1.8 29.2 1.8 29.2 1.9 29.2C2 29.3 2.2 29.3 2.3 29.4C2.4 29.4 2.4 29.4 2.4 29.4L2.9 29.5C3.1 29.5 3.2 29.6 3.4 29.6C4.2 29.8 4.7 30.2 4.8 30.2C6.4 31.2 7.5 33 8.9 35.5C9.5 36.6 10 37.4 10.5 38.2C11.9 40.3 13.4 41 14.4 41.1C14.5 41.1 14.5 41.1 14.6 41.1C14.7 41.1 14.8 41.1 14.8 41.1C15 41.1 15.2 41.1 15.5 41.1H15.6C17.2 40.8 18.5 39.8 18.9 39.3L19 39.2L19.8 38.6C19.8 38.6 19.9 38.5 20 38.5L30.2 30.6L41.3 22L46.5 18H46.6C46.7 18 46.9 17.9 47 17.9C47.4 17.9 47.8 18.1 48.1 18.6L48.5 19.2C48.8 19.7 49.2 20.3 49.5 20.9V21C50.1 22.1 50.8 23.4 51.7 24.6C51.7 24.6 51.7 24.7 51.8 24.7C52.1 25.1 52.4 25.5 52.7 25.8C52.7 25.8 52.8 25.8 52.8 25.9C53 26.1 53.1 26.3 53.3 26.4C53.4 26.5 53.4 26.7 53.3 26.9C52 28.5 50.4 31.1 49.6 32.4V32.5C49.2 33.2 48.7 34.1 48.2 34.9C48 35.2 47.8 35.4 47.7 35.5V40.9C48.8 40.8 50.4 40.1 51.8 37.9C52.4 37 52.9 36 53.4 35.2C53.5 35 53.7 34.7 53.8 34.5C55.2 33 56.4 30.9 58.7 30.1Z"></path></svg></div>', 1), Ju = [
  Zu
];
function Qu(e, t, n, o, l, a) {
  return i(), u("div", null, Ju);
}
const Xu = /* @__PURE__ */ ll(Yu, [["render", Qu]]), ec = {
  key: 0,
  class: "po-fixed po-z-[999] po-top-0 po-bottom-0 po-left-0 po-right-0 po-flex po-items-center po-justify-center"
}, tc = /* @__PURE__ */ s("div", { class: "po-absolute po-w-[6.2rem] po-h-[6.2rem] po-bg-transparent po-overflow-hidden po-rounded-xl" }, [
  /* @__PURE__ */ s("div", { class: "po-loading-rotate po-absolute -po-top-8 -po-left-8 po-w-[10rem] po-h-[10rem]" })
], -1), oc = { class: "relative po-bg-white po-w-24 po-h-24 po-flex po-items-center po-justify-center po-rounded-xl po-bg-opacity-50 po-backdrop-blur po-backdrop-filter po-z-10 po-shadow-xl" }, lc = {
  key: 0,
  class: "po-absolute po-left-1 po-right-1 po-text-center po-py-1 po-text-xs po-text-mpao-blue po-bg-white po-bg-opacity-50 po-backdrop-blur po-backdrop-filter"
}, nc = {
  name: "PoLoading"
}, p0 = /* @__PURE__ */ Object.assign(nc, {
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
    return (t, n) => e.show ? (i(), u("div", ec, [
      tc,
      s("div", oc, [
        e.label !== "" ? (i(), u("span", lc, b(e.label), 1)) : x("", !0),
        C(Xu)
      ])
    ])) : x("", !0);
  }
}), ac = { class: "po-py-5 po-flex po-items-start po-space-x-5" }, sc = ["name", "id", "checked", "aria-describedby"], rc = { class: "po-grow -po-mt-[0.26rem]" }, ic = ["for"], pc = { class: "po-mt-2 po-flex po-space-x-3" }, uc = ["href", "onClick"], cc = {
  name: "PoConsent"
}, u0 = /* @__PURE__ */ Object.assign(cc, {
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
    return (t, n) => (i(), u("div", ac, [
      s("input", Ee({
        type: "checkbox",
        name: `${e.id}-field`,
        id: e.id,
        checked: e.modelValue,
        "aria-describedby": `${e.id}-description`
      }, t.$attrs, {
        onInput: n[0] || (n[0] = (o) => t.$emit("update:modelValue", o.target.checked)),
        class: "po-shrink-0 po-h-4 po-w-4 po-rounded border-slate-300 po-text-mpao-lightblue focus:po-ring-mpao-lightblue"
      }), null, 16, sc),
      s("div", rc, [
        s("label", {
          class: "po-block po-select-none po-text-sm po-text-slate-600 po-cursor-pointer",
          for: e.id
        }, b(e.label), 9, ic),
        s("div", pc, [
          (i(!0), u(I, null, z(e.links, (o) => (i(), u("a", {
            href: o.url,
            onClick: re((l) => t.$emit("button-click", o.url), ["prevent"]),
            class: "po-text-sm po-text-mpao-lightblue hover:po-text-mpao-blue"
          }, b(o.label), 9, uc))), 256))
        ])
      ])
    ]));
  }
}), dc = { class: "po-mt-5 po-bg-slate-50 -po-mx-5 po-px-4 po-py-3 po-space-y-3" }, fc = ["onClick"], vc = { class: "po-shrink-0 po-pr-3 po-flex po-items-center po-border-r po-border-dashed po-border-slate-300" }, mc = {
  key: 4,
  class: "po-w-5 po-h-5 po-fill-slate-400 po-shrink-0",
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  viewBox: "0 0 226.978 226.978"
}, hc = /* @__PURE__ */ s("path", { d: "M199.569 25.393C181.627 7.803 152.62-.72 113.339.048 73.731.827 47.255 7.779 30.018 21.927 13.352 35.605 5.59 55.62 5.59 84.915v29.898c0 34.584 18.532 72.605 53.951 78.358 4.089.669 7.941-2.111 8.605-6.201a7.5 7.5 0 0 0-6.201-8.605c-26.861-4.363-41.355-36-41.355-63.552V84.915c0-42.006 15.565-68.347 93.043-69.871 35.125-.696 60.477 6.395 75.433 21.059 11.655 11.429 17.321 27.395 17.321 48.812v29.898c0 45.274-20.321 65.243-72.441 71.123H96.988c-1.989 0-3.897.79-5.303 2.197l-26.041 26.041a7.5 7.5 0 0 0 10.606 10.607l23.845-23.845h34.27c.276 0 .553-.015.828-.046 29.828-3.313 50.254-11.076 64.279-24.432 14.747-14.044 21.916-34.208 21.916-61.646V84.915c0-25.299-7.341-45.325-21.819-59.522z" }, null, -1), bc = /* @__PURE__ */ s("path", { d: "M118.17 48.988h.003c12.085 0 23.447 4.707 31.993 13.253 8.547 8.547 13.254 19.911 13.253 31.998a7.5 7.5 0 0 0 7.499 7.5h.001a7.5 7.5 0 0 0 7.5-7.499c.001-16.094-6.266-31.225-17.646-42.605-11.379-11.38-26.507-17.646-42.6-17.646h-.005a7.5 7.5 0 1 0 .002 14.999z" }, null, -1), gc = /* @__PURE__ */ s("path", { d: "M118.168 75.362c10.408.002 18.877 8.47 18.878 18.877a7.5 7.5 0 0 0 7.501 7.499c4.143 0 7.5-3.359 7.499-7.501-.003-18.676-15.199-33.872-33.876-33.875h-.001a7.5 7.5 0 0 0-.001 15zM84.538 88.213a7.5 7.5 0 0 0 8.465 12.382c2.689-1.838 8.987-6.144 8.545-14.752-.28-5.152-4.927-12.508-8.776-17.772-5.63-7.702-10.482-12.341-14.391-13.779-3.65-1.359-7.467-1.388-11.353-.084-8.049 2.712-13.893 7.613-16.899 14.173-2.927 6.386-2.862 13.725.189 21.228 7.206 17.678 17.294 33.155 30.051 46.067 12.845 12.689 28.321 22.777 46.006 29.987 3.827 1.557 7.613 2.336 11.252 2.336 3.49 0 6.845-.716 9.971-2.149 6.56-3.007 11.46-8.85 14.175-16.909 1.3-3.877 1.271-7.692-.077-11.317-1.448-3.937-6.088-8.788-13.789-14.418-5.265-3.849-12.621-8.496-17.793-8.777-8.59-.432-12.892 5.855-14.73 8.544a7.5 7.5 0 0 0 12.381 8.469c.816-1.193 1.282-1.735 1.549-1.972 4.21 1.349 16.215 10.169 18.376 13.549.053.216.065.545-.135 1.144-.946 2.809-2.791 6.486-6.206 8.052-3.199 1.464-6.834.566-9.316-.443-15.847-6.461-29.682-15.466-41.058-26.703-11.301-11.439-20.306-25.274-26.763-41.115-1.012-2.488-1.911-6.125-.446-9.321 1.565-3.415 5.243-5.261 8.043-6.205.598-.2.927-.189 1.155-.134 3.381 2.165 12.196 14.163 13.546 18.374-.238.263-.779.73-1.972 1.545z" }, null, -1), yc = [
  hc,
  bc,
  gc
], xc = { class: "po-grow po-space-y-2 po-pl-3" }, Vc = { class: "po-text-base po-text-slate-600 po-font-medium" }, wc = { class: "po-flex po-space-x-5" }, kc = { class: "po-text-xs po-space-x-2" }, $c = /* @__PURE__ */ s("span", { class: "po-font-medium po-text-slate-500" }, "Status", -1), _c = { class: "po-text-xs po-space-x-2" }, Cc = /* @__PURE__ */ s("span", { class: "po-font-medium po-text-slate-500" }, [
  /* @__PURE__ */ s("span", null, "User")
], -1), Sc = { class: "po-text-slate-500" }, Ec = { class: "po-text-xs po-space-x-2" }, Pc = /* @__PURE__ */ s("span", { class: "po-font-medium po-text-slate-500" }, "Date", -1), Oc = { class: "po-text-slate-500" }, Lc = {
  name: "PoCallLog"
}, c0 = /* @__PURE__ */ Object.assign(Lc, {
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
    return (t, n) => (i(), u("ul", dc, [
      (i(!0), u(I, null, z(e.list, (o) => (i(), u("li", {
        onClick: (l) => t.$emit("button-click", o),
        class: "po-bg-white po-rounded-lg po-p-3 po-transition-shadow po-duration-100 po-ease-out po-shadow hover:po-shadow-lg po-cursor-pointer po-flex po-item-center"
      }, [
        s("div", vc, [
          o.type === "chat" ? (i(), R(h(El), {
            key: 0,
            class: "po-w-5 po-h-5 po-stroke-slate-400 po-shrink-0"
          })) : x("", !0),
          o.type === "email" ? (i(), R(h(Dl), {
            key: 1,
            class: "po-w-5 po-h-5 po-stroke-slate-400 po-shrink-0"
          })) : x("", !0),
          o.type === "in" ? (i(), R(h(jl), {
            key: 2,
            class: "po-w-5 po-h-5 po-stroke-slate-400 po-shrink-0"
          })) : x("", !0),
          o.type === "out" ? (i(), R(h(Il), {
            key: 3,
            class: "po-w-5 po-h-5 po-stroke-slate-400 po-shrink-0"
          })) : x("", !0),
          o.type === "viber" ? (i(), u("svg", mc, yc)) : x("", !0)
        ]),
        s("div", xc, [
          s("h3", Vc, b(o.subject), 1),
          s("div", wc, [
            s("p", kc, [
              $c,
              s("span", {
                class: N([
                  "po-rounded-md po-px-[0.2em] po-capitalize",
                  { "po-text-green-600 po-bg-green-100": o.status === "open" },
                  {
                    "po-text-slate-500 po-bg-slate-100": o.status === "closed"
                  }
                ])
              }, b(o.status), 3)
            ]),
            s("p", _c, [
              Cc,
              s("span", Sc, [
                s("span", null, b(o.user.name) + " (" + b(o.user.department) + ")", 1)
              ])
            ]),
            s("p", Ec, [
              Pc,
              s("span", Oc, b(o.date), 1)
            ])
          ])
        ])
      ], 8, fc))), 256))
    ]));
  }
}), Nc = {
  class: "po-flex po-bg-slate-50 po-rounded-t-xl po-justify-center lg:po-justify-start po-px-4 po-pt-4 xl:po-pt-2 po-flex-wrap po-overflow-hidden",
  "aria-label": "Tabs"
}, Dc = ["onClick", "aria-current"], Tc = { key: 0 }, Bc = {
  name: "PoCardTabs"
}, d0 = /* @__PURE__ */ Object.assign(Bc, {
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
    return (o, l) => (i(), u("nav", Nc, [
      (i(!0), u(I, null, z(e.tabs, (a) => (i(), u("span", {
        role: "button",
        onClick: (r) => o.$emit("button-click", a),
        key: a.name,
        class: N([
          a.current ? "po-bg-white po-text-slate-600 po-shadow-lg" : "po-text-slate-600 hover:po-text-mpao-blue",
          "po-px-4 po-py-3 po-font-medium po-mr-4 po-mb-4 xl:po-mb-0 po-text-sm po-cursor-pointer po-rounded-xl xl:po-rounded-b-none genie-effect hover:po-text-slate-600 hover:po-bg-white hover:po-shadow-md po-flex po-items-center po-flex-shrink-0 po-space-x-2"
        ]),
        "aria-current": a.current ? "page" : void 0
      }, [
        a.icon ? (i(), R(fe(a.icon), {
          key: 0,
          class: N(["po-w-5 po-h-5", [n(a)]])
        }, null, 8, ["class"])) : x("", !0),
        s("span", null, [
          ne(b(a.name), 1),
          a.count ? (i(), u("span", Tc, " (" + b(a.count) + ")", 1)) : x("", !0)
        ])
      ], 10, Dc))), 128))
    ]));
  }
}), Ac = { class: "sm:po-hidden" }, jc = /* @__PURE__ */ s("label", {
  for: "tabs",
  class: "po-sr-only"
}, "Select a tab", -1), Ic = {
  id: "tabs",
  name: "tabs",
  class: "po-block po-w-full po-rounded-md po-border-gray-300 focus:po-border-indigo-500 focus:po-ring-indigo-500"
}, Rc = ["selected"], Mc = { class: "po-hidden sm:po-block" }, Fc = {
  class: "po-flex po-space-x-4 po-pt-2",
  "aria-label": "Tabs"
}, zc = ["onClick", "aria-current"], Hc = {
  name: "PoTabs"
}, f0 = /* @__PURE__ */ Object.assign(Hc, {
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
    const n = e;
    function o(a) {
      return a.iconColor ? a.iconColor : "po-fill-current";
    }
    const l = S(() => n.tabs.forEach((a) => {
      a.name === n.currentTab && (a.current = !0);
    }));
    return (a, r) => (i(), u(I, null, [
      s("div", Ac, [
        jc,
        s("select", Ic, [
          (i(!0), u(I, null, z(h(l), (p) => (i(), u("option", {
            key: p.name,
            selected: p.current
          }, b(p.name), 9, Rc))), 128))
        ])
      ]),
      s("div", Mc, [
        s("nav", Fc, [
          (i(!0), u(I, null, z(e.tabs, (p) => (i(), u("span", {
            onClick: (c) => a.$emit("button-click", p),
            role: "button",
            key: p.name,
            class: N([
              p.current ? "po-bg-white po-text-slate-600 po-shadow-md" : "po-bg-slate-50 po-text-slate-600 hover:po-text-mpao-blue",
              "po-px-4 po-relative po-group po-py-3 po-font-medium po-text-sm po-cursor-pointer po-rounded-xl genie-effect hover:po-text-slate-600 hover:po-bg-white hover:po-shadow-md po-flex po-items-center po-space-x-2"
            ]),
            "aria-current": p.current ? "page" : void 0
          }, [
            p.icon ? (i(), R(fe(p.icon), {
              key: 0,
              class: N(["po-w-5 po-h-5", [o(p)]])
            }, null, 8, ["class"])) : x("", !0),
            s("span", null, [
              s("span", null, b(p.name), 1),
              p.count && p.count > 0 ? (i(), u("span", {
                key: 0,
                class: N(["po-absolute po-py-1 po-px-2 po-rounded-full po-text-xs -po-top-3 -po-right-2 po-shadow-md po-flex po-items-center po-justify-center", [
                  p.current ? "po-bg-mpao-orange po-text-white" : "po-bg-slate-400 po-text-white group-hover:po-bg-mpao-orange group-hover:po-text-white"
                ]])
              }, [
                s("span", null, b(p.count), 1)
              ], 2)) : x("", !0)
            ])
          ], 10, zc))), 128))
        ])
      ])
    ], 64));
  }
}), qc = { class: "po-mt-5 po-flex po-flex-col po-items-center po-justify-center po-px-5 po-py-8 po-space-y-3" }, Uc = {
  key: 1,
  class: "po-text-base po-font-medium po-text-slate-600 po-text-center"
}, Gc = {
  key: 2,
  class: "po-text-sm po-text-slate-500 po-text-center"
}, Kc = {
  name: "PoEmpty"
}, v0 = /* @__PURE__ */ Object.assign(Kc, {
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
    return (t, n) => (i(), u("div", qc, [
      e.icon ? (i(), R(fe(e.icon), {
        key: 0,
        class: "po-w-10 po-h-10 po-stroke-slate-300"
      })) : x("", !0),
      e.label !== "" ? (i(), u("span", Uc, b(e.label), 1)) : x("", !0),
      e.description !== "" ? (i(), u("span", Gc, b(e.description), 1)) : x("", !0),
      J(t.$slots, "action")
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
const ft = () => !1, Wc = Object.assign, Yc = Array.isArray, ye = (e) => typeof e == "string", Zc = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Jc = /\B([A-Z])/g, Qc = Zc((e) => e.replace(Jc, "-$1").toLowerCase());
function Xc(e) {
  throw e;
}
function ed(e) {
  process.env.NODE_ENV !== "production" && console.warn(`[Vue warn] ${e.message}`);
}
function _e(e, t, n, o) {
  const l = process.env.NODE_ENV !== "production" ? (n || td)[e] + (o || "") : e, a = new SyntaxError(String(l));
  return a.code = e, a.loc = t, a;
}
const td = {
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
}, Vt = Symbol(process.env.NODE_ENV !== "production" ? "Fragment" : "");
Symbol(process.env.NODE_ENV !== "production" ? "Teleport" : "");
Symbol(process.env.NODE_ENV !== "production" ? "Suspense" : "");
Symbol(process.env.NODE_ENV !== "production" ? "KeepAlive" : "");
Symbol(process.env.NODE_ENV !== "production" ? "BaseTransition" : "");
const Ke = Symbol(process.env.NODE_ENV !== "production" ? "openBlock" : ""), od = Symbol(process.env.NODE_ENV !== "production" ? "createBlock" : ""), ld = Symbol(process.env.NODE_ENV !== "production" ? "createElementBlock" : ""), nd = Symbol(process.env.NODE_ENV !== "production" ? "createVNode" : ""), ad = Symbol(process.env.NODE_ENV !== "production" ? "createElementVNode" : ""), nl = Symbol(process.env.NODE_ENV !== "production" ? "createCommentVNode" : "");
Symbol(process.env.NODE_ENV !== "production" ? "createTextVNode" : "");
Symbol(process.env.NODE_ENV !== "production" ? "createStaticVNode" : "");
Symbol(process.env.NODE_ENV !== "production" ? "resolveComponent" : "");
Symbol(process.env.NODE_ENV !== "production" ? "resolveDynamicComponent" : "");
Symbol(process.env.NODE_ENV !== "production" ? "resolveDirective" : "");
Symbol(process.env.NODE_ENV !== "production" ? "resolveFilter" : "");
const sd = Symbol(process.env.NODE_ENV !== "production" ? "withDirectives" : ""), rd = Symbol(process.env.NODE_ENV !== "production" ? "renderList" : "");
Symbol(process.env.NODE_ENV !== "production" ? "renderSlot" : "");
Symbol(process.env.NODE_ENV !== "production" ? "createSlots" : "");
const id = Symbol(process.env.NODE_ENV !== "production" ? "toDisplayString" : ""), no = Symbol(process.env.NODE_ENV !== "production" ? "mergeProps" : "");
Symbol(process.env.NODE_ENV !== "production" ? "normalizeClass" : "");
Symbol(process.env.NODE_ENV !== "production" ? "normalizeStyle" : "");
const pd = Symbol(process.env.NODE_ENV !== "production" ? "normalizeProps" : ""), al = Symbol(process.env.NODE_ENV !== "production" ? "guardReactiveProps" : ""), ud = Symbol(process.env.NODE_ENV !== "production" ? "toHandlers" : "");
Symbol(process.env.NODE_ENV !== "production" ? "camelize" : "");
Symbol(process.env.NODE_ENV !== "production" ? "capitalize" : "");
Symbol(process.env.NODE_ENV !== "production" ? "toHandlerKey" : "");
Symbol(process.env.NODE_ENV !== "production" ? "setBlockTracking" : "");
Symbol(process.env.NODE_ENV !== "production" ? "pushScopeId" : "");
Symbol(process.env.NODE_ENV !== "production" ? "popScopeId" : "");
Symbol(process.env.NODE_ENV !== "production" ? "withCtx" : "");
Symbol(process.env.NODE_ENV !== "production" ? "unref" : "");
Symbol(process.env.NODE_ENV !== "production" ? "isRef" : "");
const cd = Symbol(process.env.NODE_ENV !== "production" ? "withMemo" : ""), dd = Symbol(process.env.NODE_ENV !== "production" ? "isMemoSame" : ""), ge = {
  source: "",
  start: { line: 1, column: 1, offset: 0 },
  end: { line: 1, column: 1, offset: 0 }
};
function wt(e, t, n, o, l, a, r, p = !1, c = !1, d = !1, f = ge) {
  return e && (p ? (e.helper(Ke), e.helper(Ze(e.inSSR, d))) : e.helper(Ye(e.inSSR, d)), r && e.helper(sd)), {
    type: 13,
    tag: t,
    props: n,
    children: o,
    patchFlag: l,
    dynamicProps: a,
    directives: r,
    isBlock: p,
    disableTracking: c,
    isComponent: d,
    loc: f
  };
}
function De(e, t = ge) {
  return {
    type: 15,
    loc: t,
    properties: e
  };
}
function sl(e, t) {
  return {
    type: 16,
    loc: ge,
    key: ye(e) ? ve(e, !0) : e,
    value: t
  };
}
function ve(e, t = !1, n = ge, o = 0) {
  return {
    type: 4,
    loc: n,
    content: e,
    isStatic: t,
    constType: t ? 3 : o
  };
}
function vt(e, t = ge) {
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
function ao(e, t = void 0, n = !1, o = !1, l = ge) {
  return {
    type: 18,
    params: e,
    returns: t,
    newline: n,
    isSlot: o,
    loc: l
  };
}
function fd(e, t, n, o = !0) {
  return {
    type: 19,
    test: e,
    consequent: t,
    alternate: n,
    newline: o,
    loc: ge
  };
}
function vd(e) {
  return {
    type: 21,
    body: e,
    loc: ge
  };
}
const md = (e) => e.type === 4 && e.isStatic, hd = (e, t) => e === t || e === Qc(t);
function bd(e, t, n) {
  const l = {
    source: e.source.slice(t, t + n),
    start: so(e.start, e.source, t),
    end: e.end
  };
  return n != null && (l.end = so(e.start, e.source, t + n)), l;
}
function so(e, t, n = t.length) {
  return gd(Wc({}, e), t, n);
}
function gd(e, t, n = t.length) {
  let o = 0, l = -1;
  for (let a = 0; a < n; a++)
    t.charCodeAt(a) === 10 && (o++, l = a);
  return e.offset += n, e.line += o, e.column = l === -1 ? e.column + n : n - l, e;
}
function rl(e, t, n = !1) {
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
    } else if (a.name === "bind" && (a.exp || o) && yd(a.arg, t))
      return a;
  }
}
function yd(e, t) {
  return !!(e && md(e) && e.content === t);
}
function xd(e) {
  return e.type === 7 && e.name === "slot";
}
function il(e) {
  return e.type === 1 && e.tagType === 3;
}
function ro(e) {
  return e.type === 1 && e.tagType === 2;
}
function Ye(e, t) {
  return e || t ? nd : ad;
}
function Ze(e, t) {
  return e || t ? od : ld;
}
const Vd = /* @__PURE__ */ new Set([pd, al]);
function pl(e, t = []) {
  if (e && !ye(e) && e.type === 14) {
    const n = e.callee;
    if (!ye(n) && Vd.has(n))
      return pl(e.arguments[0], t.concat(e));
  }
  return [e, t];
}
function Je(e, t, n) {
  let o, l = e.type === 13 ? e.props : e.arguments[2], a = [], r;
  if (l && !ye(l) && l.type === 14) {
    const p = pl(l);
    l = p[0], a = p[1], r = a[a.length - 1];
  }
  if (l == null || ye(l))
    o = De([t]);
  else if (l.type === 14) {
    const p = l.arguments[0];
    !ye(p) && p.type === 15 ? io(t, p) || p.properties.unshift(t) : l.callee === ud ? o = We(n.helper(no), [
      De([t]),
      l
    ]) : l.arguments.unshift(De([t])), !o && (o = l);
  } else
    l.type === 15 ? (io(t, l) || l.properties.unshift(t), o = l) : (o = We(n.helper(no), [
      De([t]),
      l
    ]), r && r.callee === al && (r = a[a.length - 2]));
  e.type === 13 ? r ? r.arguments[0] = o : e.props = o : r ? r.arguments[0] = o : e.arguments[2] = o;
}
function io(e, t) {
  let n = !1;
  if (e.key.type === 4) {
    const o = e.key.content;
    n = t.properties.some((l) => l.key.type === 4 && l.key.content === o);
  }
  return n;
}
function wd(e) {
  return e.type === 14 && e.callee === cd ? e.arguments[1].returns : e;
}
function kd(e, { helper: t, removeHelper: n, inSSR: o }) {
  e.isBlock || (e.isBlock = !0, n(Ye(o, e.isComponent)), t(Ke), t(Ze(o, e.isComponent)));
}
const $d = /&(gt|lt|amp|apos|quot);/g, _d = {
  gt: ">",
  lt: "<",
  amp: "&",
  apos: "'",
  quot: '"'
};
process.env.NODE_ENV;
function Cd(e, t) {
  let n = 0;
  const o = () => {
    n--;
  };
  for (; n < e.children.length; n++) {
    const l = e.children[n];
    ye(l) || (t.parent = e, t.childIndex = n, t.onNodeRemoved = o, qt(l, t));
  }
}
function qt(e, t) {
  t.currentNode = e;
  const { nodeTransforms: n } = t, o = [];
  for (let a = 0; a < n.length; a++) {
    const r = n[a](e, t);
    if (r && (Yc(r) ? o.push(...r) : o.push(r)), t.currentNode)
      e = t.currentNode;
    else
      return;
  }
  switch (e.type) {
    case 3:
      t.ssr || t.helper(nl);
      break;
    case 5:
      t.ssr || t.helper(id);
      break;
    case 9:
      for (let a = 0; a < e.branches.length; a++)
        qt(e.branches[a], t);
      break;
    case 10:
    case 11:
    case 1:
    case 0:
      Cd(e, t);
      break;
  }
  t.currentNode = e;
  let l = o.length;
  for (; l--; )
    o[l]();
}
function ul(e, t) {
  const n = ye(e) ? (o) => o === e : (o) => e.test(o);
  return (o, l) => {
    if (o.type === 1) {
      const { props: a } = o;
      if (o.tagType === 3 && a.some(xd))
        return;
      const r = [];
      for (let p = 0; p < a.length; p++) {
        const c = a[p];
        if (c.type === 7 && n(c.name)) {
          a.splice(p, 1), p--;
          const d = t(o, c, l);
          d && r.push(d);
        }
      }
      return r;
    }
  };
}
const Sd = new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments,typeof,void".split(",").join("\\b|\\b") + "\\b"), Ed = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
function Re(e, t, n = !1, o = !1) {
  const l = e.content;
  if (l.trim())
    try {
      new Function(o ? ` ${l} ` : `return ${n ? `(${l}) => {}` : `(${l})`}`);
    } catch (a) {
      let r = a.message;
      const p = l.replace(Ed, "").match(Sd);
      p && (r = `avoid using JavaScript keyword as property name: "${p[0]}"`), t.onError(_e(45, e.loc, void 0, r));
    }
}
ul(/^(if|else|else-if)$/, (e, t, n) => Pd(e, t, n, (o, l, a) => {
  const r = n.parent.children;
  let p = r.indexOf(o), c = 0;
  for (; p-- >= 0; ) {
    const d = r[p];
    d && d.type === 9 && (c += d.branches.length);
  }
  return () => {
    if (a)
      o.codegenNode = uo(l, c, n);
    else {
      const d = Ld(o.codegenNode);
      d.alternate = uo(l, c + o.branches.length - 1, n);
    }
  };
}));
function Pd(e, t, n, o) {
  if (t.name !== "else" && (!t.exp || !t.exp.content.trim())) {
    const l = t.exp ? t.exp.loc : e.loc;
    n.onError(_e(28, t.loc)), t.exp = ve("true", !1, l);
  }
  if (process.env.NODE_ENV !== "production" && t.exp && Re(t.exp, n), t.name === "if") {
    const l = po(e, t), a = {
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
      const p = l[r];
      if (p && p.type === 3) {
        n.removeNode(p), process.env.NODE_ENV !== "production" && a.unshift(p);
        continue;
      }
      if (p && p.type === 2 && !p.content.trim().length) {
        n.removeNode(p);
        continue;
      }
      if (p && p.type === 9) {
        t.name === "else-if" && p.branches[p.branches.length - 1].condition === void 0 && n.onError(_e(30, e.loc)), n.removeNode();
        const c = po(e, t);
        if (process.env.NODE_ENV !== "production" && a.length && // #3619 ignore comments if the v-if is direct child of <transition>
        !(n.parent && n.parent.type === 1 && hd(n.parent.tag, "transition")) && (c.children = [...a, ...c.children]), process.env.NODE_ENV !== "production") {
          const f = c.userKey;
          f && p.branches.forEach(({ userKey: m }) => {
            Od(m, f) && n.onError(_e(29, c.userKey.loc));
          });
        }
        p.branches.push(c);
        const d = o && o(p, c, !1);
        qt(c, n), d && d(), n.currentNode = null;
      } else
        n.onError(_e(30, e.loc));
      break;
    }
  }
}
function po(e, t) {
  const n = e.tagType === 3;
  return {
    type: 10,
    loc: e.loc,
    condition: t.name === "else" ? void 0 : t.exp,
    children: n && !rl(e, "for") ? e.children : [e],
    userKey: kt(e, "key"),
    isTemplateIf: n
  };
}
function uo(e, t, n) {
  return e.condition ? fd(
    e.condition,
    co(e, t, n),
    // make sure to pass in asBlock: true so that the comment node call
    // closes the current block.
    We(n.helper(nl), [
      process.env.NODE_ENV !== "production" ? '"v-if"' : '""',
      "true"
    ])
  ) : co(e, t, n);
}
function co(e, t, n) {
  const { helper: o } = n, l = sl("key", ve(
    `${t}`,
    !1,
    ge,
    2
    /* ConstantTypes.CAN_HOIST */
  )), { children: a } = e, r = a[0];
  if (a.length !== 1 || r.type !== 1)
    if (a.length === 1 && r.type === 11) {
      const c = r.codegenNode;
      return Je(c, l, n), c;
    } else {
      let c = 64, d = Ge[
        64
        /* PatchFlags.STABLE_FRAGMENT */
      ];
      return process.env.NODE_ENV !== "production" && !e.isTemplateIf && a.filter(
        (f) => f.type !== 3
        /* NodeTypes.COMMENT */
      ).length === 1 && (c |= 2048, d += `, ${Ge[
        2048
        /* PatchFlags.DEV_ROOT_FRAGMENT */
      ]}`), wt(n, o(Vt), De([l]), a, c + (process.env.NODE_ENV !== "production" ? ` /* ${d} */` : ""), void 0, void 0, !0, !1, !1, e.loc);
    }
  else {
    const c = r.codegenNode, d = wd(c);
    return d.type === 13 && kd(d, n), Je(d, l, n), c;
  }
}
function Od(e, t) {
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
function Ld(e) {
  for (; ; )
    if (e.type === 19)
      if (e.alternate.type === 19)
        e = e.alternate;
      else
        return e;
    else
      e.type === 20 && (e = e.value);
}
ul("for", (e, t, n) => {
  const { helper: o, removeHelper: l } = n;
  return Nd(e, t, n, (a) => {
    const r = We(o(rd), [
      a.source
    ]), p = il(e), c = rl(e, "memo"), d = kt(e, "key"), f = d && (d.type === 6 ? ve(d.value.content, !0) : d.exp), m = d ? sl("key", f) : null, y = a.source.type === 4 && a.source.constType > 0, w = y ? 64 : d ? 128 : 256;
    return a.codegenNode = wt(n, o(Vt), void 0, r, w + (process.env.NODE_ENV !== "production" ? ` /* ${Ge[w]} */` : ""), void 0, void 0, !0, !y, !1, e.loc), () => {
      let g;
      const { children: _ } = a;
      process.env.NODE_ENV !== "production" && p && e.children.some((k) => {
        if (k.type === 1) {
          const E = kt(k, "key");
          if (E)
            return n.onError(_e(33, E.loc)), !0;
        }
      });
      const v = _.length !== 1 || _[0].type !== 1, V = ro(e) ? e : p && e.children.length === 1 && ro(e.children[0]) ? e.children[0] : null;
      if (V ? (g = V.codegenNode, p && m && Je(g, m, n)) : v ? g = wt(
        n,
        o(Vt),
        m ? De([m]) : void 0,
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
      ) : (g = _[0].codegenNode, p && m && Je(g, m, n), g.isBlock !== !y && (g.isBlock ? (l(Ke), l(Ze(n.inSSR, g.isComponent))) : l(Ye(n.inSSR, g.isComponent))), g.isBlock = !y, g.isBlock ? (o(Ke), o(Ze(n.inSSR, g.isComponent))) : o(Ye(n.inSSR, g.isComponent))), c) {
        const k = ao(vo(a.parseResult, [
          ve("_cached")
        ]));
        k.body = vd([
          vt(["const _memo = (", c.exp, ")"]),
          vt([
            "if (_cached",
            ...f ? [" && _cached.key === ", f] : [],
            ` && ${n.helperString(dd)}(_cached, _memo)) return _cached`
          ]),
          vt(["const _item = ", g]),
          ve("_item.memo = _memo"),
          ve("return _item")
        ]), r.arguments.push(k, ve("_cache"), ve(String(n.cached++)));
      } else
        r.arguments.push(ao(
          vo(a.parseResult),
          g,
          !0
          /* force newline */
        ));
    };
  });
});
function Nd(e, t, n, o) {
  if (!t.exp) {
    n.onError(_e(31, t.loc));
    return;
  }
  const l = Bd(
    // can only be simple expression because vFor transform is applied
    // before expression transform.
    t.exp,
    n
  );
  if (!l) {
    n.onError(_e(32, t.loc));
    return;
  }
  const { addIdentifiers: a, removeIdentifiers: r, scopes: p } = n, { source: c, value: d, key: f, index: m } = l, y = {
    type: 11,
    loc: t.loc,
    source: c,
    valueAlias: d,
    keyAlias: f,
    objectIndexAlias: m,
    parseResult: l,
    children: il(e) ? e.children : [e]
  };
  n.replaceNode(y), p.vFor++;
  const w = o && o(y);
  return () => {
    p.vFor--, w && w();
  };
}
const Dd = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/, fo = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, Td = /^\(|\)$/g;
function Bd(e, t) {
  const n = e.loc, o = e.content, l = o.match(Dd);
  if (!l)
    return;
  const [, a, r] = l, p = {
    source: qe(n, r.trim(), o.indexOf(r, a.length)),
    value: void 0,
    key: void 0,
    index: void 0
  };
  process.env.NODE_ENV !== "production" && Re(p.source, t);
  let c = a.trim().replace(Td, "").trim();
  const d = a.indexOf(c), f = c.match(fo);
  if (f) {
    c = c.replace(fo, "").trim();
    const m = f[1].trim();
    let y;
    if (m && (y = o.indexOf(m, d + c.length), p.key = qe(n, m, y), process.env.NODE_ENV !== "production" && Re(p.key, t, !0)), f[2]) {
      const w = f[2].trim();
      w && (p.index = qe(n, w, o.indexOf(w, p.key ? y + m.length : d + c.length)), process.env.NODE_ENV !== "production" && Re(p.index, t, !0));
    }
  }
  return c && (p.value = qe(n, c, d), process.env.NODE_ENV !== "production" && Re(p.value, t, !0)), p;
}
function qe(e, t, n) {
  return ve(t, !1, bd(e, n, t.length));
}
function vo({ value: e, key: t, index: n }, o = []) {
  return Ad([e, t, n, ...o]);
}
function Ad(e) {
  let t = e.length;
  for (; t-- && !e[t]; )
    ;
  return e.slice(0, t + 1).map((n, o) => n || ve("_".repeat(o + 1), !1));
}
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const jd = { class: "po-flex po-text-sm po-text-gray-700 po-flex-col po-space-y-5" }, Id = {
  key: 0,
  class: "po-text-base po-font-medium po-text-slate-700"
}, Rd = {
  key: 1,
  class: "po-border po-border-orange-300 po-bg-orange-50 po-rounded-lg po-p-5 po-flex po-items-center po-space-x-3"
}, Md = { class: "po-grow po-text-sm po-text-slate-600" }, Fd = {
  key: 2,
  class: "po-border po-border-red-300 po-bg-red-50 po-rounded-lg po-p-5 po-flex po-space-x-4"
}, zd = { class: "po-grow" }, Hd = { class: "po-text-base po-text-slate-700 po-font-medium" }, qd = { class: "po-text-sm po-text-slate-600" }, Ud = { class: "po-font-medium" }, Gd = { key: 0 }, Kd = { key: 0 }, Wd = /* @__PURE__ */ s("dt", null, "Name", -1), Yd = { key: 1 }, Zd = /* @__PURE__ */ s("dt", null, "Identifer", -1), Jd = { key: 2 }, Qd = /* @__PURE__ */ s("dt", null, "Date of birth", -1), Xd = { key: 3 }, e1 = /* @__PURE__ */ s("dt", null, "Reported Date of death", -1), t1 = {
  key: 3,
  class: "po-pt-5"
}, o1 = { class: "po-flex po-items-center po-space-x-1" }, l1 = /* @__PURE__ */ s("span", null, "File a dispute.", -1), n1 = {
  name: "PoDRStatus"
}, m0 = /* @__PURE__ */ Object.assign(n1, {
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
    return (o, l) => (i(), u("span", jd, [
      e.record !== null ? (i(), u("h2", Id, " Death was reported by " + b(e.record.institution), 1)) : x("", !0),
      e.request !== null && e.request.type_id === 1 ? (i(), u("div", Rd, [
        C(h(mt), { class: "po-shrink-0 po-w-6 po-stroke-orange-600" }),
        s("span", Md, " This is a " + b(e.request.type) + " request and is in " + b(e.request.state) + " state. ", 1)
      ])) : x("", !0),
      e.request !== null && e.request.type_id !== 1 ? (i(), u("div", Fd, [
        C(h(mt), { class: "po-shrink-0 po-w-6 po-h-6 po-stroke-red-600 po-stroke-2" }),
        s("div", zd, [
          s("h3", Hd, b(e.request.type), 1),
          s("p", qd, [
            ne(" The following " + b(e.request.type) + " was reported: ", 1),
            s("span", Ud, [
              ne(b(e.request.dispute_type), 1),
              e.request.date_of_death ? (i(), u("span", Gd, " (New date: " + b(e.request.date_of_death) + ")", 1)) : x("", !0)
            ])
          ])
        ])
      ])) : x("", !0),
      C(fi, null, {
        content: D(() => [
          e.member !== null ? (i(), u("div", Kd, [
            Wd,
            s("dd", null, b(e.member.name), 1)
          ])) : x("", !0),
          e.member !== null ? (i(), u("div", Yd, [
            Zd,
            s("dd", null, b(e.member.identifier), 1)
          ])) : x("", !0),
          e.member !== null ? (i(), u("div", Jd, [
            Qd,
            s("dd", null, b(e.member.dob), 1)
          ])) : x("", !0),
          e.record !== null ? (i(), u("div", Xd, [
            e1,
            s("dd", null, b(e.record.date_of_death), 1)
          ])) : x("", !0)
        ]),
        _: 1
      }),
      e.request === null ? (i(), u("span", t1, [
        C(Ht, {
          type: "simple",
          onButtonClick: n
        }, {
          label: D(() => [
            s("span", o1, [
              C(h(_l), { class: "po-w-4 po-h-4 po-stroke-current" }),
              l1
            ])
          ]),
          _: 1
        })
      ])) : x("", !0)
    ]));
  }
}), a1 = {
  key: 0,
  role: "button",
  class: "po-w-6 po-h-6 po-rounded-lg po-bg-white genie-effect po-flex po-items-center po-justify-center hover:po-bg-slate-50 po-cursor-pointer"
}, s1 = {
  name: "PoTableAction"
}, h0 = /* @__PURE__ */ Object.assign(s1, {
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
    return t.btnType === "view" ? n.value = Tl : t.btnType === "edit" ? n.value = Al : t.btnType === "delete" ? n.value = Ml : t.btnType === "icon" && t.btnIcon && (n.value = t.btnIcon), t.btnType === "view" ? o.value = "po-stroke-emerald-400" : t.btnType === "edit" ? o.value = "po-stroke-blue-400" : t.btnType === "delete" ? o.value = "po-stroke-red-400" : o.value = t.iconColor, (l, a) => (i(), u("span", null, [
      e.btnType === "icon" || e.btnType === "delete" || e.btnType === "edit" || e.btnType === "view" ? (i(), u("span", a1, [
        (i(), R(fe(n.value), {
          class: N(["po-w-4 po-stroke-2", o.value])
        }, null, 8, ["class"]))
      ])) : (i(), u("span", {
        key: 1,
        role: "button",
        class: N(["po-block po-text-sm genie-effect", e.textColor])
      }, b(e.label), 3))
    ]));
  }
}), r1 = { key: 0 }, i1 = {
  name: "Rufiyaa"
}, b0 = /* @__PURE__ */ Object.assign(i1, {
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
    function t(n) {
      const o = typeof n == "string" ? parseFloat(n.replace(/,/g, "")) : n;
      return isNaN(o) ? "" : o.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    }
    return (n, o) => (i(), u("span", null, [
      e.amount !== null ? (i(), u("span", r1, b(t(e.amount)), 1)) : x("", !0)
    ]));
  }
}), p1 = {
  name: "PoHeading"
}, g0 = /* @__PURE__ */ Object.assign(p1, {
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
    return (t, n) => (i(), R(fe(e.type), { class: "po-text-base po-text-slate-600 po-font-semibold" }, {
      default: D(() => [
        ne(b(e.text), 1)
      ]),
      _: 1
    }));
  }
});
function u1(e, t) {
  if (!e)
    return;
  const n = (o) => {
    o.target !== e.value && o.composedPath().includes(e.value) || typeof t == "function" && t();
  };
  return K(() => {
    window.addEventListener("click", n);
  }), bo(() => {
    window.removeEventListener("click", n);
  }), { listener: n };
}
const c1 = ["for"], d1 = { class: "po-capitalize" }, f1 = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, v1 = ["title"], m1 = { class: "po-relative po-mt-1" }, h1 = {
  key: 0,
  class: "po-shrink-0 po-pr-1 po-flex po-flex-wrap po-w-full -mt-2 po-max-h-44"
}, b1 = { class: "po-px-2 po-py-1 po-mb-1 po-mr-1 po-rounded-md po-text-sm po-text-white po-flex po-space-x-2 po-items-center po-bg-mpao-lightblue" }, g1 = ["onClick"], y1 = ["id"], x1 = {
  key: 0,
  class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
}, V1 = ["onClick", "value"], w1 = {
  class: /* @__PURE__ */ N(["po-block po-truncate"])
}, k1 = ["id"], $1 = ["id"], _1 = {
  name: "PoMultiSelect",
  components: { CheckIcon: Ol }
}, y0 = /* @__PURE__ */ Object.assign(_1, {
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
    const n = e;
    function o() {
      return n.hasError ? "po-border-red-400 focus:po-border-red-600 focus:po-ring-red-600" : n.borderColor;
    }
    const l = $(""), a = $([]);
    function r(g) {
      a.value.splice(g, 1), d();
    }
    function p(g) {
      let _ = l.value.split(",");
      g.key === "Enter" && 0 < l.value.length && (g.preventDefault(), _.forEach((v) => {
        let V = n.items.find(
          (k) => k.name.toLowerCase() === v.trim().toLowerCase()
        );
        V && a.value.push(V);
      }), l.value = ""), g.key === "Backspace" && l.value.length === 0 && a.value.pop(), d();
    }
    const c = $([]);
    function d() {
      c.value = a.value.map((g) => g.id);
    }
    K(() => {
      document.addEventListener("keydown", p);
    }), se(() => {
      document.removeEventListener("keydown", p);
    });
    const f = $(!1), m = S(
      () => l.value === "" ? n.items : n.items.filter((g) => g.name.toLowerCase().includes(l.value.toLowerCase()))
    );
    let y = $();
    u1(y, () => {
      f.value = !1;
    });
    function w(g) {
      a.value.push(g), l.value = "", d();
    }
    return X(c, () => {
      t("update:modelValue", c.value);
    }), (g, _) => (i(), u("div", {
      ref_key: "multiSelectComponentRef",
      ref: y,
      class: N(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      s("label", {
        for: e.id,
        class: N([
          "po-text-sm po-font-medium po-flex po-items-center po-space-x-1",
          { "po-text-red-500": e.hasError },
          { "po-text-slate-700": !e.hasError }
        ])
      }, [
        s("span", d1, b(e.label), 1),
        e.required ? (i(), u("span", f1, "*")) : x("", !0),
        e.info !== null ? (i(), u("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          C(h(Jo), { class: "po-fill-current" })
        ], 8, v1)) : x("", !0)
      ], 10, c1),
      s("div", m1, [
        s("div", {
          class: N([
            "po-border po-p-1 po-min-h-[2.38rem] po-flex po-flex-wrap po-items-center focus-within:po-border-mpao-lightblue po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white sm:po-text-sm",
            o()
          ])
        }, [
          a.value.length > 0 ? (i(), u("div", h1, [
            (i(!0), u(I, null, z(a.value, (v, V) => (i(), u("span", b1, [
              s("span", null, b(v.name), 1),
              s("span", {
                onClick: () => r(V),
                class: "po-rounded-full po-bg-white po-flex po-items-center po-justify-center po-w-4 po-h-4 po-cursor-pointer"
              }, [
                C(h(ol), { class: "po-w-3 po-fill-mpao-lightblue" })
              ], 8, g1)
            ]))), 256))
          ])) : x("", !0),
          $t(s("input", {
            id: e.id,
            "onUpdate:modelValue": _[0] || (_[0] = (v) => l.value = v),
            onFocus: _[1] || (_[1] = () => f.value = !0),
            class: "po-border-0 po-outline-none po-ring-0 po-grow"
          }, null, 40, y1), [
            [mo, l.value]
          ])
        ], 2),
        f.value ? (i(), u("ul", x1, [
          (i(!0), u(I, null, z(h(m), (v) => (i(), u("li", {
            onClick: () => w(v),
            key: v.id,
            value: v.id,
            class: N([
              "po-relative po-select-none po-py-2 hover:po-bg-mpao-lightblue hover:po-text-white po-cursor-pointer po-pl-3 po-pr-9"
            ])
          }, [
            s("span", w1, b(v.name), 1)
          ], 8, V1))), 128))
        ])) : x("", !0)
      ]),
      e.message !== null ? (i(), u("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, b(e.message), 9, k1)) : x("", !0),
      e.hasError && e.errorMessage !== null ? (i(), u("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-center po-space-x-1",
        id: `${e.id}-error`
      }, [
        C(h(_s), { class: "po-fill-current po-w-4" }),
        s("span", null, b(e.errorMessage), 1)
      ], 8, $1)) : x("", !0)
    ], 2));
  }
}), C1 = { class: "po-flex po-pl-5" }, S1 = /* @__PURE__ */ s("div", { class: "po-shrink-0 po-flex po-flex-col" }, [
  /* @__PURE__ */ s("div", { class: "po-w-[2px] po-shrink-0 po-h-10" }),
  /* @__PURE__ */ s("div", { class: "po-bg-gradient-to-t po-from-orange-400 po-via-red-300 po-to-blue-500 po-w-[2px] po-grow" }),
  /* @__PURE__ */ s("div", { class: "po-w-[2px] po-shrink-0 po-h-12" })
], -1), E1 = { class: "po-grow po-pl-5 po-pt-5 po-space-y-3" }, P1 = { class: "po-px-2 po-pt-2 po-pb-6 po-relative" }, O1 = { class: "-po-mt-1 po-flex po-space-x-3 po-items-center" }, L1 = { class: "po-text-sm po-text-slate-600 po-font-medium" }, N1 = { class: "po-block po-text-xs po-text-slate-400" }, D1 = { class: "po-text-xs po-text-slate-500 po-pt-1" }, T1 = {
  name: "PoTimeline"
}, x0 = /* @__PURE__ */ Object.assign(T1, {
  props: {
    /**
     * array of timeline items [{current:Boolean, label:String, date:String, description:String}]
     */
    timeline: {
      type: Array,
      default: null
    }
  },
  setup(e) {
    return (t, n) => (i(), u("div", C1, [
      S1,
      s("div", E1, [
        (i(!0), u(I, null, z(e.timeline, (o) => (i(), u("div", P1, [
          s("span", {
            class: N(["po-rounded-full po-absolute po-flex po-items-center po-justify-center", [
              { "po-w-4 po-h-4 -po-left-[1.8rem] po-bg-blue-400": o.current },
              {
                "po-w-3 po-h-3 -po-left-[1.68rem] po-bg-green-400": !o.current
              }
            ]])
          }, [
            s("span", {
              class: N(["po-rounded-full po-bg-white", [
                { "po-w-2 po-h-2": o.current },
                { "po-w-1 po-h-1": !o.current }
              ]])
            }, null, 2)
          ], 2),
          s("div", null, [
            s("div", O1, [
              s("h4", L1, b(o.label), 1),
              s("span", N1, b(h(yl)(o.date)), 1)
            ]),
            s("p", D1, b(o.description), 1)
          ])
        ]))), 256))
      ])
    ]));
  }
}), B1 = {
  name: "PoTableCheckbox"
}, V0 = /* @__PURE__ */ Object.assign(B1, {
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
    }
  },
  emits: ["checkboxClicked"],
  setup(e, { emit: t }) {
    return (n, o) => (i(), u(I, null, [
      e.isChecked ? (i(), R(h(Jr), {
        key: 0,
        onClick: o[0] || (o[0] = re(() => n.$emit("checkboxClicked", e.itemId), ["prevent"])),
        class: "po-w-6 po-fill-mpao-lightblue"
      })) : x("", !0),
      e.isChecked ? x("", !0) : (i(), u("span", {
        key: 1,
        onClick: o[1] || (o[1] = re(() => n.$emit("checkboxClicked", e.itemId), ["prevent"])),
        class: "po-h-5 po-w-5 po-rounded-full po-border-2 po-ml-[2px] po-block po-border-slate-300"
      }))
    ], 64));
  }
});
export {
  M1 as PoActionBar,
  a0 as PoAlert,
  tn as PoAppIcon,
  ba as PoAppTray,
  Ht as PoButton,
  c0 as PoCallLog,
  F1 as PoCard,
  z1 as PoCardSearch,
  d0 as PoCardTabs,
  t0 as PoChatLogItem,
  J1 as PoCheckbox,
  n0 as PoCommandPalette,
  u0 as PoConsent,
  i0 as PoContentArea,
  m0 as PoDRStatus,
  fi as PoDescriptionList,
  r0 as PoDownloadFileList,
  U1 as PoDynamicTable,
  v0 as PoEmpty,
  Q1 as PoFooter,
  X1 as PoFormStatusMessage,
  g0 as PoHeading,
  G1 as PoInputField,
  K1 as PoInputFile,
  p0 as PoLoading,
  s0 as PoLogs,
  bs as PoModal,
  y0 as PoMultiSelect,
  o0 as PoNotification,
  Pa as PoNotificationHub,
  H1 as PoPageTitle,
  _r as PoPagination,
  ts as PoProfileSwitcher,
  ks as PoRadioInput,
  sn as PoSearchBar,
  Z1 as PoSectionMenu,
  W1 as PoSelectField,
  R1 as PoSidebarDrawer,
  l0 as PoSlideover,
  e0 as PoStatsBlock,
  q1 as PoTable,
  h0 as PoTableAction,
  V0 as PoTableCheckbox,
  f0 as PoTabs,
  Bs as PoTextarea,
  x0 as PoTimeline,
  Y1 as PoToggle,
  I1 as PoTopBar,
  b0 as Rufiyaa
};
