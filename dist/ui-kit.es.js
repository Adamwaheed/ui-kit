import { openBlock as i, createElementBlock as u, createElementVNode as s, createVNode as _, unref as h, withCtx as A, renderSlot as J, createBlock as M, resolveDynamicComponent as ve, createCommentVNode as x, computed as C, toDisplayString as g, ref as $, onMounted as K, onUnmounted as se, watch as Q, withDirectives as $t, isRef as ml, vModelText as bo, cloneVNode as hl, h as Y, Fragment as R, inject as ee, provide as oe, watchEffect as X, defineComponent as q, toRaw as G, nextTick as _e, Teleport as _t, reactive as bl, shallowRef as gl, renderList as H, normalizeClass as T, Transition as Ee, withModifiers as re, toRefs as we, mergeProps as Le, createTextVNode as ne, onUpdated as go, normalizeProps as Gt, guardReactiveProps as Kt, vModelCheckbox as yl, normalizeStyle as xl, onBeforeUnmount as yo, createStaticVNode as Vl } from "vue";
import { f as wl } from "./FormatDate-ac18ec36.mjs";
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
      d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
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
      d: "M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
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
      d: "M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
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
      d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
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
      d: "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
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
      d: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
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
      d: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
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
      d: "M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
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
      d: "M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
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
      d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
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
      d: "M4.5 12.75l6 6 9-13.5"
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
      d: "M15.75 19.5L8.25 12l7.5-7.5"
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
      d: "M8.25 4.5l7.5 7.5-7.5 7.5"
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
      d: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
    }),
    s("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
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
function xo(e, t) {
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
      d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
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
      d: "M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
    })
  ]);
}
function Fl(e, t) {
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
function zl(e, t) {
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
function Hl(e, t) {
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
function Wt(e, t) {
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
function Vo(e, t) {
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
const ql = { class: "po-bg-mpao-blue po-fixed po-top-0 po-w-full po-z-50 po-flex" }, Ul = { class: "po-shrink-0 po-px-3 po-pt-3" }, Gl = {
  for: "sidebar-drawer-toggle",
  role: "button",
  class: "genie-effect po-flex po-items-center po-justify-center po-bg-[#2e5266] po-rounded-full po-w-10 po-h-10 po-select-none po-text-slate-100"
}, Kl = { class: "po-mx-auto po-max-w-full po-pr-4 po-grow sm:po-pr-4" }, Wl = { class: "po-flex po-relative po-h-16 po-items-center po-justify-between po-space-x-12" }, Yl = { class: "po-flex po-items-center po-space-x-3" }, Zl = {
  key: 0,
  class: "po-block po-w-6 po-text-slate-100 md:po-hidden",
  role: "button"
}, Jl = {
  name: "PoTopBar"
}, I1 = /* @__PURE__ */ Object.assign(Jl, {
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
     * App Icon
     */
    appIcon: null
  },
  emits: ["query", "profileSwitcherClick", "onSearchClear"],
  setup(e, { emit: t }) {
    function l(a) {
      t("profileSwitcherClick", a);
    }
    function o(a) {
      t("query", a);
    }
    function n(a) {
      t("onSearchClear", a);
    }
    return (a, r) => (i(), u("nav", ql, [
      s("div", Ul, [
        s("label", Gl, [
          _(h(Cl), { class: "po-w-6 po-fill-current" })
        ])
      ]),
      s("div", Kl, [
        s("div", Wl, [
          _(h(nn), { "app-name": e.appName }, {
            icon: A(() => [
              J(a.$slots, "appIcon", {}, () => [
                e.appIcon ? (i(), M(ve(e.appIcon), { key: 0 })) : x("", !0)
              ])
            ]),
            _: 3
          }, 8, ["app-name"]),
          e.hasSearch ? (i(), M(h(un), {
            key: 0,
            onQuery: o,
            onOnClear: n,
            "current-query": e.currentQuery
          }, null, 8, ["current-query"])) : x("", !0),
          s("div", Yl, [
            e.hasSearch ? (i(), u("span", Zl, [
              _(h(Ct), { class: "po-stroke-current" })
            ])) : x("", !0),
            _(h(Na), {
              notifications: e.notifications,
              "has-new-notifications": e.hasNewNotifications
            }, null, 8, ["notifications", "has-new-notifications"]),
            _(h(xa), { "app-list": e.appList }, null, 8, ["app-list"]),
            _(h(ns), {
              "user-object": e.userObject,
              onButtonClick: l
            }, null, 8, ["user-object"])
          ])
        ])
      ])
    ]));
  }
}), Ql = { class: "po-flex po-items-center po-justify-center po-space-x-3" }, Xl = { class: "po-w-8 po-text-slate-100 app-icon" }, en = { class: "po-font-light po-text-lg po-text-slate-100" }, tn = { class: "po-hidden md:po-block" }, on = { class: "po-block md:po-hidden" }, ln = {
  name: "PoAppIcon"
}, nn = /* @__PURE__ */ Object.assign(ln, {
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
    const t = e, l = C(() => t.appName.match(/\b[A-Z]/g).join(""));
    return (o, n) => (i(), u("div", Ql, [
      s("div", Xl, [
        J(o.$slots, "icon")
      ]),
      s("span", en, [
        s("span", tn, g(e.appName), 1),
        s("span", on, g(h(l)), 1)
      ])
    ]));
  }
}), an = { class: "po-flex-grow po-hidden po-relative md:po-block" }, sn = ["placeholder"], rn = { class: "po-absolute po-inset-y-0 po-left-0 po-flex po-items-center po-pl-3 po-pointer-events-none po-transition-all po-ease-linear po-duration-100 po-text-slate-400 po-origin-center peer-hover/search:po-scale-105 peer-focus/search:po-text-slate-100" }, pn = {
  name: "PoSearchBar"
}, un = /* @__PURE__ */ Object.assign(pn, {
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
    const l = e;
    let o = $("");
    const n = (a) => {
      a.key === "Enter" && 0 < o.value.length && t("query", o.value);
    };
    return K(() => {
      document.addEventListener("keydown", n), o.value = l.currentQuery;
    }), se(() => {
      document.removeEventListener("keydown", n);
    }), Q(o, async (a, r) => {
      a === "" && t("onClear", !0);
    }), (a, r) => (i(), u("div", an, [
      $t(s("input", {
        "onUpdate:modelValue": r[0] || (r[0] = (p) => ml(o) ? o.value = p : o = p),
        type: "text",
        id: "main-search",
        placeholder: e.placeholder,
        class: "peer/search po-bg-transparent po-border po-border-transparent po-text-slate-100 po-text-sm po-rounded-md po-ring-0 po-outline-none focus:po-outline-none focus:po-ring-0 po-transition-colors po-ease-linear po-duration-100 po-block po-w-full po-pl-10 po-p-2.5 po-appearance-none focus:po-border-slate-400 hover:po-border-slate-600"
      }, null, 8, sn), [
        [bo, h(o)]
      ]),
      s("div", rn, [
        _(h(Ct), { class: "po-w-5 po-h-5 po-stroke-current" })
      ])
    ]));
  }
});
function W(e, t, ...l) {
  if (e in t) {
    let n = t[e];
    return typeof n == "function" ? n(...l) : n;
  }
  let o = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((n) => `"${n}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(o, W), o;
}
var pe = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(pe || {}), Ce = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Ce || {});
function U({ visible: e = !0, features: t = 0, ourProps: l, theirProps: o, ...n }) {
  var a;
  let r = cn(o, l), p = Object.assign(n, { props: r });
  if (e || t & 2 && r.static)
    return ut(p);
  if (t & 1) {
    let c = (a = r.unmount) == null || a ? 0 : 1;
    return W(c, { [0]() {
      return null;
    }, [1]() {
      return ut({ ...n, props: { ...r, hidden: !0, style: { display: "none" } } });
    } });
  }
  return ut(p);
}
function ut({ props: e, attrs: t, slots: l, slot: o, name: n }) {
  var a;
  let { as: r, ...p } = je(e, ["unmount", "static"]), c = (a = l.default) == null ? void 0 : a.call(l, o), d = {};
  if (o) {
    let f = !1, m = [];
    for (let [y, w] of Object.entries(o))
      typeof w == "boolean" && (f = !0), w === !0 && m.push(y);
    f && (d["data-headlessui-state"] = m.join(" "));
  }
  if (r === "template") {
    if (c = wo(c ?? []), Object.keys(p).length > 0 || Object.keys(t).length > 0) {
      let [f, ...m] = c ?? [];
      if (!dn(f) || m.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${n} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(p).concat(Object.keys(t)).sort((y, w) => y.localeCompare(w)).map((y) => `  - ${y}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((y) => `  - ${y}`).join(`
`)].join(`
`));
      return hl(f, Object.assign({}, p, d));
    }
    return Array.isArray(c) && c.length === 1 ? c[0] : c;
  }
  return Y(r, Object.assign({}, p, d), { default: () => c });
}
function wo(e) {
  return e.flatMap((t) => t.type === R ? wo(t.children) : [t]);
}
function cn(...e) {
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
      for (let p of r) {
        if (n instanceof Event && n.defaultPrevented)
          return;
        p(n, ...a);
      }
    } });
  return t;
}
function St(e) {
  let t = Object.assign({}, e);
  for (let l in t)
    t[l] === void 0 && delete t[l];
  return t;
}
function je(e, t = []) {
  let l = Object.assign({}, e);
  for (let o of t)
    o in l && delete l[o];
  return l;
}
function dn(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let fn = 0;
function vn() {
  return ++fn;
}
function Z() {
  return vn();
}
var z = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(z || {});
function mn(e) {
  throw new Error("Unexpected object: " + e);
}
var le = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(le || {});
function hn(e, t) {
  let l = t.resolveItems();
  if (l.length <= 0)
    return null;
  let o = t.resolveActiveIndex(), n = o ?? -1, a = (() => {
    switch (e.focus) {
      case 0:
        return l.findIndex((r) => !t.resolveDisabled(r));
      case 1: {
        let r = l.slice().reverse().findIndex((p, c, d) => n !== -1 && d.length - c - 1 >= n ? !1 : !t.resolveDisabled(p));
        return r === -1 ? r : l.length - 1 - r;
      }
      case 2:
        return l.findIndex((r, p) => p <= n ? !1 : !t.resolveDisabled(r));
      case 3: {
        let r = l.slice().reverse().findIndex((p) => !t.resolveDisabled(p));
        return r === -1 ? r : l.length - 1 - r;
      }
      case 4:
        return l.findIndex((r) => t.resolveId(r) === e.id);
      case 5:
        return null;
      default:
        mn(e);
    }
  })();
  return a === -1 ? o : a;
}
function O(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let ko = Symbol("Context");
var ae = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ae || {});
function bn() {
  return Ne() !== null;
}
function Ne() {
  return ee(ko, null);
}
function Qe(e) {
  oe(ko, e);
}
function Yt(e, t) {
  if (e)
    return e;
  let l = t ?? "button";
  if (typeof l == "string" && l.toLowerCase() === "button")
    return "button";
}
function Xe(e, t) {
  let l = $(Yt(e.value.type, e.value.as));
  return K(() => {
    l.value = Yt(e.value.type, e.value.as);
  }), X(() => {
    var o;
    l.value || !O(t) || O(t) instanceof HTMLButtonElement && !((o = O(t)) != null && o.hasAttribute("type")) && (l.value = "button");
  }), l;
}
const et = typeof window > "u" || typeof document > "u";
function ie(e) {
  if (et)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = O(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
function $o({ container: e, accept: t, walk: l, enabled: o }) {
  X(() => {
    let n = e.value;
    if (!n || o !== void 0 && !o.value)
      return;
    let a = ie(e);
    if (!a)
      return;
    let r = Object.assign((c) => t(c), { acceptNode: t }), p = a.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, r, !1);
    for (; p.nextNode(); )
      l(p.currentNode);
  });
}
let ht = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var te = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(te || {}), Ue = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Ue || {}), gn = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(gn || {});
function Et(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(ht)).sort((t, l) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (l.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Ot = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Ot || {});
function _o(e, t = 0) {
  var l;
  return e === ((l = ie(e)) == null ? void 0 : l.body) ? !1 : W(t, { [0]() {
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
function Ae(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let yn = ["textarea", "input"].join(",");
function xn(e) {
  var t, l;
  return (l = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, yn)) != null ? l : !1;
}
function Pt(e, t = (l) => l) {
  return e.slice().sort((l, o) => {
    let n = t(l), a = t(o);
    if (n === null || a === null)
      return 0;
    let r = n.compareDocumentPosition(a);
    return r & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : r & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function fe(e, t, { sorted: l = !0, relativeTo: o = null, skipElements: n = [] } = {}) {
  var a;
  let r = (a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? a : document, p = Array.isArray(e) ? l ? Pt(e) : e : Et(e);
  n.length > 0 && (p = p.filter((b) => !n.includes(b))), o = o ?? r.activeElement;
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
    let b = d + m;
    if (t & 16)
      b = (b + y) % y;
    else {
      if (b < 0)
        return 3;
      if (b >= y)
        return 1;
    }
    w = p[b], w == null || w.focus(f), m += c;
  } while (w !== r.activeElement);
  return t & 6 && xn(w) && w.select(), w.hasAttribute("tabindex") || w.setAttribute("tabindex", "0"), 2;
}
function ct(e, t, l) {
  et || X((o) => {
    document.addEventListener(e, t, l), o(() => document.removeEventListener(e, t, l));
  });
}
function Lt(e, t, l = C(() => !0)) {
  function o(a, r) {
    if (!l.value || a.defaultPrevented)
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
      let f = d instanceof HTMLElement ? d : O(d);
      if (f != null && f.contains(p) || a.composed && a.composedPath().includes(f))
        return;
    }
    return !_o(p, Ot.Loose) && p.tabIndex !== -1 && a.preventDefault(), t(a, p);
  }
  let n = $(null);
  ct("mousedown", (a) => {
    var r, p;
    l.value && (n.value = ((p = (r = a.composedPath) == null ? void 0 : r.call(a)) == null ? void 0 : p[0]) || a.target);
  }, !0), ct("click", (a) => {
    !n.value || (o(a, () => n.value), n.value = null);
  }, !0), ct("blur", (a) => o(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var be = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(be || {});
let Ve = q({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: l }) {
  return () => {
    let { features: o, ...n } = e, a = { "aria-hidden": (o & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(o & 4) === 4 && (o & 2) !== 2 && { display: "none" } } };
    return U({ ourProps: a, theirProps: n, slot: {}, attrs: l, slots: t, name: "Hidden" });
  };
} });
function Nt(e = {}, t = null, l = []) {
  for (let [o, n] of Object.entries(e))
    So(l, Co(t, o), n);
  return l;
}
function Co(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function So(e, t, l) {
  if (Array.isArray(l))
    for (let [o, n] of l.entries())
      So(e, Co(t, o.toString()), n);
  else
    l instanceof Date ? e.push([t, l.toISOString()]) : typeof l == "boolean" ? e.push([t, l ? "1" : "0"]) : typeof l == "string" ? e.push([t, l]) : typeof l == "number" ? e.push([t, `${l}`]) : l == null ? e.push([t, ""]) : Nt(l, t, e);
}
function Eo(e) {
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
function Dt(e, t, l) {
  let o = $(l == null ? void 0 : l.value), n = C(() => e.value !== void 0);
  return [C(() => n.value ? e.value : o.value), function(a) {
    return n.value || (o.value = a), t == null ? void 0 : t(a);
  }];
}
function Zt(e) {
  return [e.screenX, e.screenY];
}
function Vn() {
  let e = $([-1, -1]);
  return { wasMoved(t) {
    let l = Zt(t);
    return e.value[0] === l[0] && e.value[1] === l[1] ? !1 : (e.value = l, !0);
  }, update(t) {
    e.value = Zt(t);
  } };
}
function wn(e, t) {
  return e === t;
}
var kn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(kn || {}), $n = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))($n || {}), _n = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(_n || {});
let Oo = Symbol("ComboboxContext");
function Be(e) {
  let t = ee(Oo, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, Be), l;
  }
  return t;
}
let Cn = q({ name: "Combobox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => wn }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String }, nullable: { type: Boolean, default: !1 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: l, emit: o }) {
  let n = $(1), a = $(null), r = $(null), p = $(null), c = $(null), d = $({ static: !1, hold: !1 }), f = $([]), m = $(null), y = $(1), w = $(!1);
  function b(P = (N) => N) {
    let N = m.value !== null ? f.value[m.value] : null, D = Pt(P(f.value.slice()), (B) => O(B.dataRef.domRef)), L = N ? D.indexOf(N) : null;
    return L === -1 && (L = null), { options: D, activeOptionIndex: L };
  }
  let S = C(() => e.multiple ? 1 : 0), v = C(() => e.nullable), [V, k] = Dt(C(() => e.modelValue === void 0 ? W(S.value, { [1]: [], [0]: void 0 }) : e.modelValue), (P) => o("update:modelValue", P), C(() => e.defaultValue)), E = { comboboxState: n, value: V, mode: S, compare(P, N) {
    if (typeof e.by == "string") {
      let D = e.by;
      return (P == null ? void 0 : P[D]) === (N == null ? void 0 : N[D]);
    }
    return e.by(P, N);
  }, defaultValue: C(() => e.defaultValue), nullable: v, inputRef: r, labelRef: a, buttonRef: p, optionsRef: c, disabled: C(() => e.disabled), options: f, change(P) {
    k(P);
  }, activeOptionIndex: C(() => {
    if (w.value && m.value === null && f.value.length > 0) {
      let P = f.value.findIndex((N) => !N.dataRef.disabled);
      if (P !== -1)
        return P;
    }
    return m.value;
  }), activationTrigger: y, optionsPropsRef: d, closeCombobox() {
    w.value = !1, !e.disabled && n.value !== 1 && (n.value = 1, m.value = null);
  }, openCombobox() {
    if (w.value = !0, e.disabled || n.value === 0)
      return;
    let P = f.value.findIndex((N) => {
      let D = G(N.dataRef.value);
      return W(S.value, { [0]: () => E.compare(G(E.value.value), G(D)), [1]: () => G(E.value.value).some((L) => E.compare(G(L), G(D))) });
    });
    P !== -1 && (m.value = P), n.value = 0;
  }, goToOption(P, N, D) {
    if (w.value = !1, e.disabled || c.value && !d.value.static && n.value === 1)
      return;
    let L = b();
    if (L.activeOptionIndex === null) {
      let F = L.options.findIndex((ue) => !ue.dataRef.disabled);
      F !== -1 && (L.activeOptionIndex = F);
    }
    let B = hn(P === le.Specific ? { focus: le.Specific, id: N } : { focus: P }, { resolveItems: () => L.options, resolveActiveIndex: () => L.activeOptionIndex, resolveId: (F) => F.id, resolveDisabled: (F) => F.dataRef.disabled });
    m.value = B, y.value = D ?? 1, f.value = L.options;
  }, selectOption(P) {
    let N = f.value.find((L) => L.id === P);
    if (!N)
      return;
    let { dataRef: D } = N;
    k(W(S.value, { [0]: () => D.value, [1]: () => {
      let L = G(E.value.value).slice(), B = G(D.value), F = L.findIndex((ue) => E.compare(B, G(ue)));
      return F === -1 ? L.push(B) : L.splice(F, 1), L;
    } }));
  }, selectActiveOption() {
    if (E.activeOptionIndex.value === null)
      return;
    let { dataRef: P, id: N } = f.value[E.activeOptionIndex.value];
    k(W(S.value, { [0]: () => P.value, [1]: () => {
      let D = G(E.value.value).slice(), L = G(P.value), B = D.findIndex((F) => E.compare(L, G(F)));
      return B === -1 ? D.push(L) : D.splice(B, 1), D;
    } })), E.goToOption(le.Specific, N);
  }, registerOption(P, N) {
    let D = { id: P, dataRef: N }, L = b((B) => [...B, D]);
    if (m.value === null) {
      let B = N.value.value;
      W(S.value, { [0]: () => E.compare(G(E.value.value), G(B)), [1]: () => G(E.value.value).some((F) => E.compare(G(F), G(B))) }) && (L.activeOptionIndex = L.options.indexOf(D));
    }
    f.value = L.options, m.value = L.activeOptionIndex, y.value = 1;
  }, unregisterOption(P) {
    let N = b((D) => {
      let L = D.findIndex((B) => B.id === P);
      return L !== -1 && D.splice(L, 1), D;
    });
    f.value = N.options, m.value = N.activeOptionIndex, y.value = 1;
  } };
  Lt([r, p, c], () => E.closeCombobox(), C(() => n.value === 0)), oe(Oo, E), Qe(C(() => W(n.value, { [0]: ae.Open, [1]: ae.Closed })));
  let j = C(() => E.activeOptionIndex.value === null ? null : f.value[E.activeOptionIndex.value].dataRef.value), I = C(() => {
    var P;
    return (P = O(r)) == null ? void 0 : P.closest("form");
  });
  return K(() => {
    Q([I], () => {
      if (!I.value || e.defaultValue === void 0)
        return;
      function P() {
        E.change(e.defaultValue);
      }
      return I.value.addEventListener("reset", P), () => {
        var N;
        (N = I.value) == null || N.removeEventListener("reset", P);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: P, disabled: N, ...D } = e, L = { open: n.value === 0, disabled: N, activeIndex: E.activeOptionIndex.value, activeOption: j.value, value: V.value };
    return Y(R, [...P != null && V.value != null ? Nt({ [P]: V.value }).map(([B, F]) => Y(Ve, St({ features: be.Hidden, key: B, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: B, value: F }))) : [], U({ theirProps: { ...l, ...je(D, ["modelValue", "defaultValue", "nullable", "multiple", "onUpdate:modelValue", "by"]) }, ourProps: {}, slot: L, slots: t, attrs: l, name: "Combobox" })]);
  };
} }), Sn = q({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-combobox-label-${Z()}` } }, setup(e, { attrs: t, slots: l }) {
  let o = Be("ComboboxLabel");
  function n() {
    var a;
    (a = O(o.inputRef)) == null || a.focus({ preventScroll: !0 });
  }
  return () => {
    let a = { open: o.comboboxState.value === 0, disabled: o.disabled.value }, { id: r, ...p } = e, c = { id: r, ref: o.labelRef, onClick: n };
    return U({ ourProps: c, theirProps: p, slot: a, attrs: t, slots: l, name: "ComboboxLabel" });
  };
} }), En = q({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-combobox-button-${Z()}` } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = Be("ComboboxButton");
  o({ el: n.buttonRef, $el: n.buttonRef });
  function a(c) {
    n.disabled.value || (n.comboboxState.value === 0 ? n.closeCombobox() : (c.preventDefault(), n.openCombobox()), _e(() => {
      var d;
      return (d = O(n.inputRef)) == null ? void 0 : d.focus({ preventScroll: !0 });
    }));
  }
  function r(c) {
    switch (c.key) {
      case z.ArrowDown:
        c.preventDefault(), c.stopPropagation(), n.comboboxState.value === 1 && n.openCombobox(), _e(() => {
          var d;
          return (d = n.inputRef.value) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        return;
      case z.ArrowUp:
        c.preventDefault(), c.stopPropagation(), n.comboboxState.value === 1 && (n.openCombobox(), _e(() => {
          n.value.value || n.goToOption(le.Last);
        })), _e(() => {
          var d;
          return (d = n.inputRef.value) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        return;
      case z.Escape:
        if (n.comboboxState.value !== 0)
          return;
        c.preventDefault(), n.optionsRef.value && !n.optionsPropsRef.value.static && c.stopPropagation(), n.closeCombobox(), _e(() => {
          var d;
          return (d = n.inputRef.value) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        return;
    }
  }
  let p = Xe(C(() => ({ as: e.as, type: t.type })), n.buttonRef);
  return () => {
    var c, d;
    let f = { open: n.comboboxState.value === 0, disabled: n.disabled.value, value: n.value.value }, { id: m, ...y } = e, w = { ref: n.buttonRef, id: m, type: p.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (c = O(n.optionsRef)) == null ? void 0 : c.id, "aria-expanded": n.disabled.value ? void 0 : n.comboboxState.value === 0, "aria-labelledby": n.labelRef.value ? [(d = O(n.labelRef)) == null ? void 0 : d.id, m].join(" ") : void 0, disabled: n.disabled.value === !0 ? !0 : void 0, onKeydown: r, onClick: a };
    return U({ ourProps: w, theirProps: y, slot: f, attrs: t, slots: l, name: "ComboboxButton" });
  };
} }), On = q({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: () => `headlessui-combobox-input-${Z()}` } }, emits: { change: (e) => !0 }, setup(e, { emit: t, attrs: l, slots: o, expose: n }) {
  let a = Be("ComboboxInput"), r = { value: !1 };
  n({ el: a.inputRef, $el: a.inputRef });
  let p = C(() => {
    var v;
    let V = a.value.value;
    return O(a.inputRef) ? typeof e.displayValue < "u" && V !== void 0 ? (v = e.displayValue(V)) != null ? v : "" : typeof V == "string" ? V : "" : "";
  });
  K(() => {
    Q([p, a.comboboxState], ([v, V], [k, E]) => {
      if (r.value)
        return;
      let j = O(a.inputRef);
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
      case z.Backspace:
      case z.Delete:
        if (a.mode.value !== 0 || !a.nullable.value)
          return;
        let V = v.currentTarget;
        requestAnimationFrame(() => {
          if (V.value === "") {
            a.change(null);
            let k = O(a.optionsRef);
            k && (k.scrollTop = 0), a.goToOption(le.Nothing);
          }
        });
        break;
      case z.Enter:
        if (r.value = !1, a.comboboxState.value !== 0 || c.value)
          return;
        if (v.preventDefault(), v.stopPropagation(), a.activeOptionIndex.value === null) {
          a.closeCombobox();
          return;
        }
        a.selectActiveOption(), a.mode.value === 0 && a.closeCombobox();
        break;
      case z.ArrowDown:
        return r.value = !1, v.preventDefault(), v.stopPropagation(), W(a.comboboxState.value, { [0]: () => a.goToOption(le.Next), [1]: () => a.openCombobox() });
      case z.ArrowUp:
        return r.value = !1, v.preventDefault(), v.stopPropagation(), W(a.comboboxState.value, { [0]: () => a.goToOption(le.Previous), [1]: () => {
          a.openCombobox(), _e(() => {
            a.value.value || a.goToOption(le.Last);
          });
        } });
      case z.Home:
        if (v.shiftKey)
          break;
        return r.value = !1, v.preventDefault(), v.stopPropagation(), a.goToOption(le.First);
      case z.PageUp:
        return r.value = !1, v.preventDefault(), v.stopPropagation(), a.goToOption(le.First);
      case z.End:
        if (v.shiftKey)
          break;
        return r.value = !1, v.preventDefault(), v.stopPropagation(), a.goToOption(le.Last);
      case z.PageDown:
        return r.value = !1, v.preventDefault(), v.stopPropagation(), a.goToOption(le.Last);
      case z.Escape:
        if (r.value = !1, a.comboboxState.value !== 0)
          return;
        v.preventDefault(), a.optionsRef.value && !a.optionsPropsRef.value.static && v.stopPropagation(), a.closeCombobox();
        break;
      case z.Tab:
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
  function b() {
    r.value = !1;
  }
  let S = C(() => {
    var v, V, k, E;
    return (E = (k = (V = e.defaultValue) != null ? V : a.defaultValue.value !== void 0 ? (v = e.displayValue) == null ? void 0 : v.call(e, a.defaultValue.value) : null) != null ? k : a.defaultValue.value) != null ? E : "";
  });
  return () => {
    var v, V, k, E, j, I;
    let P = { open: a.comboboxState.value === 0 }, { id: N, displayValue: D, ...L } = e, B = { "aria-controls": (v = a.optionsRef.value) == null ? void 0 : v.id, "aria-expanded": a.disabled.value ? void 0 : a.comboboxState.value === 0, "aria-activedescendant": a.activeOptionIndex.value === null || (V = a.options.value[a.activeOptionIndex.value]) == null ? void 0 : V.id, "aria-multiselectable": a.mode.value === 1 ? !0 : void 0, "aria-labelledby": (j = (k = O(a.labelRef)) == null ? void 0 : k.id) != null ? j : (E = O(a.buttonRef)) == null ? void 0 : E.id, id: N, onCompositionstart: d, onCompositionend: f, onKeydown: m, onChange: y, onInput: w, onBlur: b, role: "combobox", type: (I = l.type) != null ? I : "text", tabIndex: 0, ref: a.inputRef, defaultValue: S.value };
    return U({ ourProps: B, theirProps: L, slot: P, attrs: l, slots: o, features: pe.RenderStrategy | pe.Static, name: "ComboboxInput" });
  };
} }), Pn = q({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, hold: { type: [Boolean], default: !1 } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = Be("ComboboxOptions"), a = `headlessui-combobox-options-${Z()}`;
  o({ el: n.optionsRef, $el: n.optionsRef }), X(() => {
    n.optionsPropsRef.value.static = e.static;
  }), X(() => {
    n.optionsPropsRef.value.hold = e.hold;
  });
  let r = Ne(), p = C(() => r !== null ? r.value === ae.Open : n.comboboxState.value === 0);
  return $o({ container: C(() => O(n.optionsRef)), enabled: C(() => n.comboboxState.value === 0), accept(c) {
    return c.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : c.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(c) {
    c.setAttribute("role", "none");
  } }), () => {
    var c, d, f, m;
    let y = { open: n.comboboxState.value === 0 }, w = { "aria-activedescendant": n.activeOptionIndex.value === null || (c = n.options.value[n.activeOptionIndex.value]) == null ? void 0 : c.id, "aria-labelledby": (m = (d = O(n.labelRef)) == null ? void 0 : d.id) != null ? m : (f = O(n.buttonRef)) == null ? void 0 : f.id, id: a, ref: n.optionsRef, role: "listbox" }, b = je(e, ["hold"]);
    return U({ ourProps: w, theirProps: b, slot: y, attrs: t, slots: l, features: pe.RenderStrategy | pe.Static, visible: p.value, name: "ComboboxOptions" });
  };
} }), Ln = q({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: l, expose: o }) {
  let n = Be("ComboboxOption"), a = `headlessui-combobox-option-${Z()}`, r = $(null);
  o({ el: r, $el: r });
  let p = C(() => n.activeOptionIndex.value !== null ? n.options.value[n.activeOptionIndex.value].id === a : !1), c = C(() => W(n.mode.value, { [0]: () => n.compare(G(n.value.value), G(e.value)), [1]: () => G(n.value.value).some((v) => n.compare(G(v), G(e.value))) })), d = C(() => ({ disabled: e.disabled, value: e.value, domRef: r }));
  K(() => n.registerOption(a, d)), se(() => n.unregisterOption(a)), X(() => {
    n.comboboxState.value === 0 && (!p.value || n.activationTrigger.value !== 0 && _e(() => {
      var v, V;
      return (V = (v = O(r)) == null ? void 0 : v.scrollIntoView) == null ? void 0 : V.call(v, { block: "nearest" });
    }));
  });
  function f(v) {
    if (e.disabled)
      return v.preventDefault();
    n.selectOption(a), n.mode.value === 0 && n.closeCombobox();
  }
  function m() {
    if (e.disabled)
      return n.goToOption(le.Nothing);
    n.goToOption(le.Specific, a);
  }
  let y = Vn();
  function w(v) {
    y.update(v);
  }
  function b(v) {
    !y.wasMoved(v) || e.disabled || p.value || n.goToOption(le.Specific, a, 0);
  }
  function S(v) {
    !y.wasMoved(v) || e.disabled || !p.value || n.optionsPropsRef.value.hold || n.goToOption(le.Nothing);
  }
  return () => {
    let { disabled: v } = e, V = { active: p.value, selected: c.value, disabled: v }, k = { id: a, ref: r, role: "option", tabIndex: v === !0 ? void 0 : -1, "aria-disabled": v === !0 ? !0 : void 0, "aria-selected": c.value, disabled: void 0, onClick: f, onFocus: m, onPointerenter: w, onMouseenter: w, onPointermove: b, onMousemove: b, onPointerleave: S, onMouseleave: S };
    return U({ ourProps: k, theirProps: e, slot: V, attrs: l, slots: t, name: "ComboboxOption" });
  };
} });
function Nn(e, t, l) {
  et || X((o) => {
    window.addEventListener(e, t, l), o(() => window.removeEventListener(e, t, l));
  });
}
var he = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(he || {});
function Tt() {
  let e = $(0);
  return Nn("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function At(e, t, l, o) {
  et || X((n) => {
    e = e ?? window, e.addEventListener(t, l, o), n(() => e.removeEventListener(t, l, o));
  });
}
function Dn(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
var Po = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Po || {});
let Ie = Object.assign(q({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: Object, default: $(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = $(null);
  o({ el: n, $el: n });
  let a = C(() => ie(n));
  Tn({ ownerDocument: a }, C(() => Boolean(e.features & 16)));
  let r = An({ ownerDocument: a, container: n, initialFocus: C(() => e.initialFocus) }, C(() => Boolean(e.features & 2)));
  jn({ ownerDocument: a, container: n, containers: e.containers, previousActiveElement: r }, C(() => Boolean(e.features & 8)));
  let p = Tt();
  function c(y) {
    let w = O(n);
    w && ((b) => b())(() => {
      W(p.value, { [he.Forwards]: () => fe(w, te.First, { skipElements: [y.relatedTarget] }), [he.Backwards]: () => fe(w, te.Last, { skipElements: [y.relatedTarget] }) });
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
    let b = new Set((w = e.containers) == null ? void 0 : w.value);
    b.add(n);
    let S = y.relatedTarget;
    !S || S.dataset.headlessuiFocusGuard !== "true" && (Lo(b, S) || (d.value ? fe(O(n), W(p.value, { [he.Forwards]: () => te.Next, [he.Backwards]: () => te.Previous }) | te.WrapAround, { relativeTo: y.target }) : y.target instanceof HTMLElement && Ae(y.target)));
  }
  return () => {
    let y = {}, w = { ref: n, onKeydown: f, onFocusout: m }, { features: b, initialFocus: S, containers: v, ...V } = e;
    return Y(R, [Boolean(b & 4) && Y(Ve, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: be.Focusable }), U({ ourProps: w, theirProps: { ...t, ...V }, slot: y, attrs: t, slots: l, name: "FocusTrap" }), Boolean(b & 4) && Y(Ve, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: be.Focusable })]);
  };
} }), { features: Po });
function Tn({ ownerDocument: e }, t) {
  let l = $(null);
  function o() {
    var a;
    l.value || (l.value = (a = e.value) == null ? void 0 : a.activeElement);
  }
  function n() {
    !l.value || (Ae(l.value), l.value = null);
  }
  K(() => {
    Q(t, (a, r) => {
      a !== r && (a ? o() : n());
    }, { immediate: !0 });
  }), se(n);
}
function An({ ownerDocument: e, container: t, initialFocus: l }, o) {
  let n = $(null), a = $(!1);
  return K(() => a.value = !0), se(() => a.value = !1), K(() => {
    Q([t, l, o], (r, p) => {
      if (r.every((d, f) => (p == null ? void 0 : p[f]) === d) || !o.value)
        return;
      let c = O(t);
      !c || Dn(() => {
        var d, f;
        if (!a.value)
          return;
        let m = O(l), y = (d = e.value) == null ? void 0 : d.activeElement;
        if (m) {
          if (m === y) {
            n.value = y;
            return;
          }
        } else if (c.contains(y)) {
          n.value = y;
          return;
        }
        m ? Ae(m) : fe(c, te.First | te.NoScroll) === Ue.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), n.value = (f = e.value) == null ? void 0 : f.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), n;
}
function jn({ ownerDocument: e, container: t, containers: l, previousActiveElement: o }, n) {
  var a;
  At((a = e.value) == null ? void 0 : a.defaultView, "focus", (r) => {
    if (!n.value)
      return;
    let p = new Set(l == null ? void 0 : l.value);
    p.add(t);
    let c = o.value;
    if (!c)
      return;
    let d = r.target;
    d && d instanceof HTMLElement ? Lo(p, d) ? (o.value = d, Ae(d)) : (r.preventDefault(), r.stopPropagation(), Ae(c)) : Ae(o.value);
  }, !0);
}
function Lo(e, t) {
  var l;
  for (let o of e)
    if ((l = o.value) != null && l.contains(t))
      return !0;
  return !1;
}
let Jt = "body > *", De = /* @__PURE__ */ new Set(), $e = /* @__PURE__ */ new Map();
function Qt(e) {
  e.setAttribute("aria-hidden", "true"), e.inert = !0;
}
function Xt(e) {
  let t = $e.get(e);
  !t || (t["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert);
}
function Bn(e, t = $(!0)) {
  X((l) => {
    if (!t.value || !e.value)
      return;
    let o = e.value, n = ie(o);
    if (n) {
      De.add(o);
      for (let a of $e.keys())
        a.contains(o) && (Xt(a), $e.delete(a));
      n.querySelectorAll(Jt).forEach((a) => {
        if (a instanceof HTMLElement) {
          for (let r of De)
            if (a.contains(r))
              return;
          De.size === 1 && ($e.set(a, { "aria-hidden": a.getAttribute("aria-hidden"), inert: a.inert }), Qt(a));
        }
      }), l(() => {
        if (De.delete(o), De.size > 0)
          n.querySelectorAll(Jt).forEach((a) => {
            if (a instanceof HTMLElement && !$e.has(a)) {
              for (let r of De)
                if (a.contains(r))
                  return;
              $e.set(a, { "aria-hidden": a.getAttribute("aria-hidden"), inert: a.inert }), Qt(a);
            }
          });
        else
          for (let a of $e.keys())
            Xt(a), $e.delete(a);
      });
    }
  });
}
let No = Symbol("ForcePortalRootContext");
function In() {
  return ee(No, !1);
}
let bt = q({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: l }) {
  return oe(No, e.force), () => {
    let { force: o, ...n } = e;
    return U({ theirProps: n, ourProps: {}, slot: {}, slots: t, attrs: l, name: "ForcePortalRoot" });
  };
} });
function Rn(e) {
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
let Do = q({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: l }) {
  let o = $(null), n = C(() => ie(o)), a = In(), r = ee(To, null), p = $(a === !0 || r == null ? Rn(o.value) : r.resolveTarget());
  return X(() => {
    a || r != null && (p.value = r.resolveTarget());
  }), se(() => {
    var c, d;
    let f = (c = n.value) == null ? void 0 : c.getElementById("headlessui-portal-root");
    !f || p.value === f && p.value.children.length <= 0 && ((d = p.value.parentElement) == null || d.removeChild(p.value));
  }), () => {
    if (p.value === null)
      return null;
    let c = { ref: o, "data-headlessui-portal": "" };
    return Y(_t, { to: p.value }, U({ ourProps: c, theirProps: e, slot: {}, attrs: l, slots: t, name: "Portal" }));
  };
} }), To = Symbol("PortalGroupContext"), Mn = q({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: l }) {
  let o = bl({ resolveTarget() {
    return e.target;
  } });
  return oe(To, o), () => {
    let { target: n, ...a } = e;
    return U({ theirProps: a, ourProps: {}, slot: {}, attrs: t, slots: l, name: "PortalGroup" });
  };
} }), Ao = Symbol("StackContext");
var gt = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(gt || {});
function Fn() {
  return ee(Ao, () => {
  });
}
function zn({ type: e, enabled: t, element: l, onUpdate: o }) {
  let n = Fn();
  function a(...r) {
    o == null || o(...r), n(...r);
  }
  K(() => {
    Q(t, (r, p) => {
      r ? a(0, e, l) : p === !0 && a(1, e, l);
    }, { immediate: !0, flush: "sync" });
  }), se(() => {
    t.value && a(1, e, l);
  }), oe(Ao, a);
}
let jo = Symbol("DescriptionContext");
function Hn() {
  let e = ee(jo, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function tt({ slot: e = $({}), name: t = "Description", props: l = {} } = {}) {
  let o = $([]);
  function n(a) {
    return o.value.push(a), () => {
      let r = o.value.indexOf(a);
      r !== -1 && o.value.splice(r, 1);
    };
  }
  return oe(jo, { register: n, slot: e, name: t, props: l }), C(() => o.value.length > 0 ? o.value.join(" ") : void 0);
}
let qn = q({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${Z()}` } }, setup(e, { attrs: t, slots: l }) {
  let o = Hn();
  return K(() => se(o.register(e.id))), () => {
    let { name: n = "Description", slot: a = $({}), props: r = {} } = o, { id: p, ...c } = e, d = { ...Object.entries(r).reduce((f, [m, y]) => Object.assign(f, { [m]: h(y) }), {}), id: p };
    return U({ ourProps: d, theirProps: c, slot: a.value, attrs: t, slots: l, name: n });
  };
} });
function jt() {
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
function Un() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
var Gn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Gn || {});
let yt = Symbol("DialogContext");
function Me(e) {
  let t = ee(yt, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, Me), l;
  }
  return t;
}
let ze = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", ot = q({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: ze }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${Z()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: l, slots: o, expose: n }) {
  var a;
  let r = $(!1);
  K(() => {
    r.value = !0;
  });
  let p = $(0), c = Ne(), d = C(() => e.open === ze && c !== null ? W(c.value, { [ae.Open]: !0, [ae.Closed]: !1 }) : e.open), f = $(/* @__PURE__ */ new Set()), m = $(null), y = $(null), w = C(() => ie(m));
  if (n({ el: m, $el: m }), !(e.open !== ze || c !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof d.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${d.value === ze ? void 0 : e.open}`);
  let b = C(() => r.value && d.value ? 0 : 1), S = C(() => b.value === 0), v = C(() => p.value > 1), V = ee(yt, null) !== null, k = C(() => v.value ? "parent" : "leaf");
  Bn(m, C(() => v.value ? S.value : !1)), zn({ type: "Dialog", enabled: C(() => b.value === 0), element: m, onUpdate: (N, D, L) => {
    if (D === "Dialog")
      return W(N, { [gt.Add]() {
        f.value.add(L), p.value += 1;
      }, [gt.Remove]() {
        f.value.delete(L), p.value -= 1;
      } });
  } });
  let E = tt({ name: "DialogDescription", slot: C(() => ({ open: d.value })) }), j = $(null), I = { titleId: j, panelRef: $(null), dialogState: b, setTitleId(N) {
    j.value !== N && (j.value = N);
  }, close() {
    t("close", !1);
  } };
  oe(yt, I);
  function P() {
    var N, D, L;
    return [...Array.from((D = (N = w.value) == null ? void 0 : N.querySelectorAll("body > *, [data-headlessui-portal]")) != null ? D : []).filter((B) => !(!(B instanceof HTMLElement) || B.contains(O(y)) || I.panelRef.value && B.contains(I.panelRef.value))), (L = I.panelRef.value) != null ? L : m.value];
  }
  return Lt(() => P(), (N, D) => {
    I.close(), _e(() => D == null ? void 0 : D.focus());
  }, C(() => b.value === 0 && !v.value)), At((a = w.value) == null ? void 0 : a.defaultView, "keydown", (N) => {
    N.defaultPrevented || N.key === z.Escape && b.value === 0 && (v.value || (N.preventDefault(), N.stopPropagation(), I.close()));
  }), X((N) => {
    var D;
    if (b.value !== 0 || V)
      return;
    let L = w.value;
    if (!L)
      return;
    let B = jt(), F = window.pageYOffset;
    function ue(de, ce, ke) {
      let it = de.style.getPropertyValue(ce);
      return Object.assign(de.style, { [ce]: ke }), B.add(() => {
        Object.assign(de.style, { [ce]: it });
      });
    }
    let ye = L == null ? void 0 : L.documentElement, rt = ((D = L.defaultView) != null ? D : window).innerWidth - ye.clientWidth;
    if (ue(ye, "overflow", "hidden"), rt > 0) {
      let de = ye.clientWidth - ye.offsetWidth, ce = rt - de;
      ue(ye, "paddingRight", `${ce}px`);
    }
    if (Un()) {
      ue(L.body, "marginTop", `-${F}px`), window.scrollTo(0, 0);
      let de = null;
      B.addEventListener(L, "click", (ce) => {
        if (ce.target instanceof HTMLElement)
          try {
            let ke = ce.target.closest("a");
            if (!ke)
              return;
            let { hash: it } = new URL(ke.href), pt = L.querySelector(it);
            pt && !P().some((vl) => vl.contains(pt)) && (de = pt);
          } catch {
          }
      }, !0), B.addEventListener(L, "touchmove", (ce) => {
        ce.target instanceof HTMLElement && !P().some((ke) => ke.contains(ce.target)) && ce.preventDefault();
      }, { passive: !1 }), B.add(() => {
        window.scrollTo(0, window.pageYOffset + F), de && de.isConnected && (de.scrollIntoView({ block: "nearest" }), de = null);
      });
    }
    N(B.dispose);
  }), X((N) => {
    if (b.value !== 0)
      return;
    let D = O(m);
    if (!D)
      return;
    let L = new IntersectionObserver((B) => {
      for (let F of B)
        F.boundingClientRect.x === 0 && F.boundingClientRect.y === 0 && F.boundingClientRect.width === 0 && F.boundingClientRect.height === 0 && I.close();
    });
    L.observe(D), N(() => L.disconnect());
  }), () => {
    let { id: N, open: D, initialFocus: L, ...B } = e, F = { ...l, ref: m, id: N, role: "dialog", "aria-modal": b.value === 0 ? !0 : void 0, "aria-labelledby": j.value, "aria-describedby": E.value }, ue = { open: b.value === 0 };
    return Y(bt, { force: !0 }, () => [Y(Do, () => Y(Mn, { target: m.value }, () => Y(bt, { force: !1 }, () => Y(Ie, { initialFocus: L, containers: f, features: S.value ? W(k.value, { parent: Ie.features.RestoreFocus, leaf: Ie.features.All & ~Ie.features.FocusLock }) : Ie.features.None }, () => U({ ourProps: F, theirProps: B, slot: ue, attrs: l, slots: o, visible: b.value === 0, features: pe.RenderStrategy | pe.Static, name: "Dialog" }))))), Y(Ve, { features: be.Hidden, ref: y })]);
  };
} });
q({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${Z()}` } }, setup(e, { attrs: t, slots: l }) {
  let o = Me("DialogOverlay");
  function n(a) {
    a.target === a.currentTarget && (a.preventDefault(), a.stopPropagation(), o.close());
  }
  return () => {
    let { id: a, ...r } = e;
    return U({ ourProps: { id: a, "aria-hidden": !0, onClick: n }, theirProps: r, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogOverlay" });
  };
} });
q({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${Z()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = Me("DialogBackdrop"), a = $(null);
  return o({ el: a, $el: a }), K(() => {
    if (n.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: r, ...p } = e, c = { id: r, ref: a, "aria-hidden": !0 };
    return Y(bt, { force: !0 }, () => Y(Do, () => U({ ourProps: c, theirProps: { ...t, ...p }, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogBackdrop" })));
  };
} });
let lt = q({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${Z()}` } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = Me("DialogPanel");
  o({ el: n.panelRef, $el: n.panelRef });
  function a(r) {
    r.stopPropagation();
  }
  return () => {
    let { id: r, ...p } = e, c = { id: r, ref: n.panelRef, onClick: a };
    return U({ ourProps: c, theirProps: p, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogPanel" });
  };
} }), Bo = q({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${Z()}` } }, setup(e, { attrs: t, slots: l }) {
  let o = Me("DialogTitle");
  return K(() => {
    o.setTitleId(e.id), se(() => o.setTitleId(null));
  }), () => {
    let { id: n, ...a } = e;
    return U({ ourProps: { id: n }, theirProps: a, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogTitle" });
  };
} });
var Kn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Kn || {});
let Io = Symbol("DisclosureContext");
function Bt(e) {
  let t = ee(Io, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, Bt), l;
  }
  return t;
}
let Ro = Symbol("DisclosurePanelContext");
function Wn() {
  return ee(Ro, null);
}
let eo = q({ name: "Disclosure", props: { as: { type: [Object, String], default: "template" }, defaultOpen: { type: [Boolean], default: !1 } }, setup(e, { slots: t, attrs: l }) {
  let o = $(e.defaultOpen ? 0 : 1), n = $(null), a = $(null), r = { buttonId: $(null), panelId: $(null), disclosureState: o, panel: n, button: a, toggleDisclosure() {
    o.value = W(o.value, { [0]: 1, [1]: 0 });
  }, closeDisclosure() {
    o.value !== 1 && (o.value = 1);
  }, close(p) {
    r.closeDisclosure();
    let c = (() => p ? p instanceof HTMLElement ? p : p.value instanceof HTMLElement ? O(p) : O(r.button) : O(r.button))();
    c == null || c.focus();
  } };
  return oe(Io, r), Qe(C(() => W(o.value, { [0]: ae.Open, [1]: ae.Closed }))), () => {
    let { defaultOpen: p, ...c } = e, d = { open: o.value === 0, close: r.close };
    return U({ theirProps: c, ourProps: {}, slot: d, slots: t, attrs: l, name: "Disclosure" });
  };
} }), to = q({ name: "DisclosureButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-disclosure-button-${Z()}` } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = Bt("DisclosureButton");
  K(() => {
    n.buttonId.value = e.id;
  }), se(() => {
    n.buttonId.value = null;
  });
  let a = Wn(), r = C(() => a === null ? !1 : a.value === n.panelId.value), p = $(null);
  o({ el: p, $el: p }), r.value || X(() => {
    n.button.value = p.value;
  });
  let c = Xe(C(() => ({ as: e.as, type: t.type })), p);
  function d() {
    var y;
    e.disabled || (r.value ? (n.toggleDisclosure(), (y = O(n.button)) == null || y.focus()) : n.toggleDisclosure());
  }
  function f(y) {
    var w;
    if (!e.disabled)
      if (r.value)
        switch (y.key) {
          case z.Space:
          case z.Enter:
            y.preventDefault(), y.stopPropagation(), n.toggleDisclosure(), (w = O(n.button)) == null || w.focus();
            break;
        }
      else
        switch (y.key) {
          case z.Space:
          case z.Enter:
            y.preventDefault(), y.stopPropagation(), n.toggleDisclosure();
            break;
        }
  }
  function m(y) {
    switch (y.key) {
      case z.Space:
        y.preventDefault();
        break;
    }
  }
  return () => {
    let y = { open: n.disclosureState.value === 0 }, { id: w, ...b } = e, S = r.value ? { ref: p, type: c.value, onClick: d, onKeydown: f } : { id: w, ref: p, type: c.value, "aria-expanded": e.disabled ? void 0 : n.disclosureState.value === 0, "aria-controls": O(n.panel) ? n.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onClick: d, onKeydown: f, onKeyup: m };
    return U({ ourProps: S, theirProps: b, slot: y, attrs: t, slots: l, name: "DisclosureButton" });
  };
} }), oo = q({ name: "DisclosurePanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-disclosure-panel-${Z()}` } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = Bt("DisclosurePanel");
  K(() => {
    n.panelId.value = e.id;
  }), se(() => {
    n.panelId.value = null;
  }), o({ el: n.panel, $el: n.panel }), oe(Ro, n.panelId);
  let a = Ne(), r = C(() => a !== null ? a.value === ae.Open : n.disclosureState.value === 0);
  return () => {
    let p = { open: n.disclosureState.value === 0, close: n.close }, { id: c, ...d } = e, f = { id: c, ref: n.panel };
    return U({ ourProps: f, theirProps: d, slot: p, attrs: t, slots: l, features: pe.RenderStrategy | pe.Static, visible: r.value, name: "DisclosurePanel" });
  };
} });
var Yn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Yn || {});
let Mo = Symbol("PopoverContext");
function nt(e) {
  let t = ee(Mo, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <${at.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, nt), l;
  }
  return t;
}
let Fo = Symbol("PopoverGroupContext");
function zo() {
  return ee(Fo, null);
}
let Ho = Symbol("PopoverPanelContext");
function Zn() {
  return ee(Ho, null);
}
let at = q({ name: "Popover", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: l, expose: o }) {
  var n;
  let a = $(null);
  o({ el: a, $el: a });
  let r = $(1), p = $(null), c = $(null), d = $(null), f = $(null), m = C(() => ie(a)), y = C(() => {
    var k, E;
    if (!O(p) || !O(f))
      return !1;
    for (let B of document.querySelectorAll("body > *"))
      if (Number(B == null ? void 0 : B.contains(O(p))) ^ Number(B == null ? void 0 : B.contains(O(f))))
        return !0;
    let j = Et(), I = j.indexOf(O(p)), P = (I + j.length - 1) % j.length, N = (I + 1) % j.length, D = j[P], L = j[N];
    return !((k = O(f)) != null && k.contains(D)) && !((E = O(f)) != null && E.contains(L));
  }), w = { popoverState: r, buttonId: $(null), panelId: $(null), panel: f, button: p, isPortalled: y, beforePanelSentinel: c, afterPanelSentinel: d, togglePopover() {
    r.value = W(r.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    r.value !== 1 && (r.value = 1);
  }, close(k) {
    w.closePopover();
    let E = (() => k ? k instanceof HTMLElement ? k : k.value instanceof HTMLElement ? O(k) : O(w.button) : O(w.button))();
    E == null || E.focus();
  } };
  oe(Mo, w), Qe(C(() => W(r.value, { [0]: ae.Open, [1]: ae.Closed })));
  let b = { buttonId: w.buttonId, panelId: w.panelId, close() {
    w.closePopover();
  } }, S = zo(), v = S == null ? void 0 : S.registerPopover;
  function V() {
    var k, E, j, I;
    return (I = S == null ? void 0 : S.isFocusWithinPopoverGroup()) != null ? I : ((k = m.value) == null ? void 0 : k.activeElement) && (((E = O(p)) == null ? void 0 : E.contains(m.value.activeElement)) || ((j = O(f)) == null ? void 0 : j.contains(m.value.activeElement)));
  }
  return X(() => v == null ? void 0 : v(b)), At((n = m.value) == null ? void 0 : n.defaultView, "focus", (k) => {
    var E, j;
    r.value === 0 && (V() || !p || !f || k.target !== window && ((E = O(w.beforePanelSentinel)) != null && E.contains(k.target) || (j = O(w.afterPanelSentinel)) != null && j.contains(k.target) || w.closePopover()));
  }, !0), Lt([p, f], (k, E) => {
    var j;
    w.closePopover(), _o(E, Ot.Loose) || (k.preventDefault(), (j = O(p)) == null || j.focus());
  }, C(() => r.value === 0)), () => {
    let k = { open: r.value === 0, close: w.close };
    return U({ theirProps: e, ourProps: { ref: a }, slot: k, slots: t, attrs: l, name: "Popover" });
  };
} }), It = q({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-popover-button-${Z()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = nt("PopoverButton"), a = C(() => ie(n.button));
  o({ el: n.button, $el: n.button }), K(() => {
    n.buttonId.value = e.id;
  }), se(() => {
    n.buttonId.value = null;
  });
  let r = zo(), p = r == null ? void 0 : r.closeOthers, c = Zn(), d = C(() => c === null ? !1 : c.value === n.panelId.value), f = $(null), m = `headlessui-focus-sentinel-${Z()}`;
  d.value || X(() => {
    n.button.value = f.value;
  });
  let y = Xe(C(() => ({ as: e.as, type: t.type })), f);
  function w(V) {
    var k, E, j, I, P;
    if (d.value) {
      if (n.popoverState.value === 1)
        return;
      switch (V.key) {
        case z.Space:
        case z.Enter:
          V.preventDefault(), (E = (k = V.target).click) == null || E.call(k), n.closePopover(), (j = O(n.button)) == null || j.focus();
          break;
      }
    } else
      switch (V.key) {
        case z.Space:
        case z.Enter:
          V.preventDefault(), V.stopPropagation(), n.popoverState.value === 1 && (p == null || p(n.buttonId.value)), n.togglePopover();
          break;
        case z.Escape:
          if (n.popoverState.value !== 0)
            return p == null ? void 0 : p(n.buttonId.value);
          if (!O(n.button) || (I = a.value) != null && I.activeElement && !((P = O(n.button)) != null && P.contains(a.value.activeElement)))
            return;
          V.preventDefault(), V.stopPropagation(), n.closePopover();
          break;
      }
  }
  function b(V) {
    d.value || V.key === z.Space && V.preventDefault();
  }
  function S(V) {
    var k, E;
    e.disabled || (d.value ? (n.closePopover(), (k = O(n.button)) == null || k.focus()) : (V.preventDefault(), V.stopPropagation(), n.popoverState.value === 1 && (p == null || p(n.buttonId.value)), n.togglePopover(), (E = O(n.button)) == null || E.focus()));
  }
  function v(V) {
    V.preventDefault(), V.stopPropagation();
  }
  return () => {
    let V = n.popoverState.value === 0, k = { open: V }, { id: E, ...j } = e, I = d.value ? { ref: f, type: y.value, onKeydown: w, onClick: S } : { ref: f, id: E, type: y.value, "aria-expanded": e.disabled ? void 0 : n.popoverState.value === 0, "aria-controls": O(n.panel) ? n.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onKeydown: w, onKeyup: b, onClick: S, onMousedown: v }, P = Tt();
    function N() {
      let D = O(n.panel);
      if (!D)
        return;
      function L() {
        W(P.value, { [he.Forwards]: () => fe(D, te.First), [he.Backwards]: () => fe(D, te.Last) });
      }
      L();
    }
    return Y(R, [U({ ourProps: I, theirProps: { ...t, ...j }, slot: k, attrs: t, slots: l, name: "PopoverButton" }), V && !d.value && n.isPortalled.value && Y(Ve, { id: m, features: be.Focusable, as: "button", type: "button", onFocus: N })]);
  };
} });
q({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(e, { attrs: t, slots: l }) {
  let o = nt("PopoverOverlay"), n = `headlessui-popover-overlay-${Z()}`, a = Ne(), r = C(() => a !== null ? a.value === ae.Open : o.popoverState.value === 0);
  function p() {
    o.closePopover();
  }
  return () => {
    let c = { open: o.popoverState.value === 0 };
    return U({ ourProps: { id: n, "aria-hidden": !0, onClick: p }, theirProps: e, slot: c, attrs: t, slots: l, features: pe.RenderStrategy | pe.Static, visible: r.value, name: "PopoverOverlay" });
  };
} });
let Rt = q({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-popover-panel-${Z()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: l, expose: o }) {
  let { focus: n } = e, a = nt("PopoverPanel"), r = C(() => ie(a.panel)), p = `headlessui-focus-sentinel-before-${Z()}`, c = `headlessui-focus-sentinel-after-${Z()}`;
  o({ el: a.panel, $el: a.panel }), K(() => {
    a.panelId.value = e.id;
  }), se(() => {
    a.panelId.value = null;
  }), oe(Ho, a.panelId), X(() => {
    var v, V;
    if (!n || a.popoverState.value !== 0 || !a.panel)
      return;
    let k = (v = r.value) == null ? void 0 : v.activeElement;
    (V = O(a.panel)) != null && V.contains(k) || fe(O(a.panel), te.First);
  });
  let d = Ne(), f = C(() => d !== null ? d.value === ae.Open : a.popoverState.value === 0);
  function m(v) {
    var V, k;
    switch (v.key) {
      case z.Escape:
        if (a.popoverState.value !== 0 || !O(a.panel) || r.value && !((V = O(a.panel)) != null && V.contains(r.value.activeElement)))
          return;
        v.preventDefault(), v.stopPropagation(), a.closePopover(), (k = O(a.button)) == null || k.focus();
        break;
    }
  }
  function y(v) {
    var V, k, E, j, I;
    let P = v.relatedTarget;
    !P || !O(a.panel) || (V = O(a.panel)) != null && V.contains(P) || (a.closePopover(), ((E = (k = O(a.beforePanelSentinel)) == null ? void 0 : k.contains) != null && E.call(k, P) || (I = (j = O(a.afterPanelSentinel)) == null ? void 0 : j.contains) != null && I.call(j, P)) && P.focus({ preventScroll: !0 }));
  }
  let w = Tt();
  function b() {
    let v = O(a.panel);
    if (!v)
      return;
    function V() {
      W(w.value, { [he.Forwards]: () => {
        fe(v, te.Next);
      }, [he.Backwards]: () => {
        var k;
        (k = O(a.button)) == null || k.focus({ preventScroll: !0 });
      } });
    }
    V();
  }
  function S() {
    let v = O(a.panel);
    if (!v)
      return;
    function V() {
      W(w.value, { [he.Forwards]: () => {
        var k, E;
        let j = O(a.button), I = O(a.panel);
        if (!j)
          return;
        let P = Et(), N = P.indexOf(j), D = P.slice(0, N + 1), L = [...P.slice(N + 1), ...D];
        for (let B of L.slice())
          if ((E = (k = B == null ? void 0 : B.id) == null ? void 0 : k.startsWith) != null && E.call(k, "headlessui-focus-sentinel-") || I != null && I.contains(B)) {
            let F = L.indexOf(B);
            F !== -1 && L.splice(F, 1);
          }
        fe(L, te.First, { sorted: !1 });
      }, [he.Backwards]: () => fe(v, te.Previous) });
    }
    V();
  }
  return () => {
    let v = { open: a.popoverState.value === 0, close: a.close }, { id: V, focus: k, ...E } = e, j = { ref: a.panel, id: V, onKeydown: m, onFocusout: n && a.popoverState.value === 0 ? y : void 0, tabIndex: -1 };
    return U({ ourProps: j, theirProps: { ...t, ...E }, attrs: t, slot: v, slots: { ...l, default: (...I) => {
      var P;
      return [Y(R, [f.value && a.isPortalled.value && Y(Ve, { id: p, ref: a.beforePanelSentinel, features: be.Focusable, as: "button", type: "button", onFocus: b }), (P = l.default) == null ? void 0 : P.call(l, ...I), f.value && a.isPortalled.value && Y(Ve, { id: c, ref: a.afterPanelSentinel, features: be.Focusable, as: "button", type: "button", onFocus: S })])];
    } }, features: pe.RenderStrategy | pe.Static, visible: f.value, name: "PopoverPanel" });
  };
} });
q({ name: "PopoverGroup", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = $(null), a = gl([]), r = C(() => ie(n));
  o({ el: n, $el: n });
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
    return (m = O(n)) != null && m.contains(w) ? !0 : a.value.some((b) => {
      var S, v;
      return ((S = y.getElementById(b.buttonId.value)) == null ? void 0 : S.contains(w)) || ((v = y.getElementById(b.panelId.value)) == null ? void 0 : v.contains(w));
    });
  }
  function f(m) {
    for (let y of a.value)
      y.buttonId.value !== m && y.close();
  }
  return oe(Fo, { registerPopover: c, unregisterPopover: p, isFocusWithinPopoverGroup: d, closeOthers: f }), () => U({ ourProps: { ref: n }, theirProps: e, slot: {}, attrs: t, slots: l, name: "PopoverGroup" });
} });
let qo = Symbol("LabelContext");
function Uo() {
  let e = ee(qo, null);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Uo), t;
  }
  return e;
}
function Mt({ slot: e = {}, name: t = "Label", props: l = {} } = {}) {
  let o = $([]);
  function n(a) {
    return o.value.push(a), () => {
      let r = o.value.indexOf(a);
      r !== -1 && o.value.splice(r, 1);
    };
  }
  return oe(qo, { register: n, slot: e, name: t, props: l }), C(() => o.value.length > 0 ? o.value.join(" ") : void 0);
}
let Go = q({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-label-${Z()}` } }, setup(e, { slots: t, attrs: l }) {
  let o = Uo();
  return K(() => se(o.register(e.id))), () => {
    let { name: n = "Label", slot: a = {}, props: r = {} } = o, { id: p, passive: c, ...d } = e, f = { ...Object.entries(r).reduce((m, [y, w]) => Object.assign(m, { [y]: h(w) }), {}), id: p };
    return c && (delete f.onClick, delete d.onClick), U({ ourProps: f, theirProps: d, slot: a, attrs: l, slots: t, name: n });
  };
} });
function Jn(e, t) {
  return e === t;
}
let Ko = Symbol("RadioGroupContext");
function Wo(e) {
  let t = ee(Ko, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, Wo), l;
  }
  return t;
}
let Qn = q({ name: "RadioGroup", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "div" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => Jn }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-radiogroup-${Z()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: l, slots: o, expose: n }) {
  let a = $(null), r = $([]), p = Mt({ name: "RadioGroupLabel" }), c = tt({ name: "RadioGroupDescription" });
  n({ el: a, $el: a });
  let [d, f] = Dt(C(() => e.modelValue), (b) => t("update:modelValue", b), C(() => e.defaultValue)), m = { options: r, value: d, disabled: C(() => e.disabled), firstOption: C(() => r.value.find((b) => !b.propsRef.disabled)), containsCheckedOption: C(() => r.value.some((b) => m.compare(G(b.propsRef.value), G(e.modelValue)))), compare(b, S) {
    if (typeof e.by == "string") {
      let v = e.by;
      return (b == null ? void 0 : b[v]) === (S == null ? void 0 : S[v]);
    }
    return e.by(b, S);
  }, change(b) {
    var S;
    if (e.disabled || m.compare(G(d.value), G(b)))
      return !1;
    let v = (S = r.value.find((V) => m.compare(G(V.propsRef.value), G(b)))) == null ? void 0 : S.propsRef;
    return v != null && v.disabled ? !1 : (f(b), !0);
  }, registerOption(b) {
    r.value.push(b), r.value = Pt(r.value, (S) => S.element);
  }, unregisterOption(b) {
    let S = r.value.findIndex((v) => v.id === b);
    S !== -1 && r.value.splice(S, 1);
  } };
  oe(Ko, m), $o({ container: C(() => O(a)), accept(b) {
    return b.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : b.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(b) {
    b.setAttribute("role", "none");
  } });
  function y(b) {
    if (!a.value || !a.value.contains(b.target))
      return;
    let S = r.value.filter((v) => v.propsRef.disabled === !1).map((v) => v.element);
    switch (b.key) {
      case z.Enter:
        Eo(b.currentTarget);
        break;
      case z.ArrowLeft:
      case z.ArrowUp:
        if (b.preventDefault(), b.stopPropagation(), fe(S, te.Previous | te.WrapAround) === Ue.Success) {
          let v = r.value.find((V) => {
            var k;
            return V.element === ((k = ie(a)) == null ? void 0 : k.activeElement);
          });
          v && m.change(v.propsRef.value);
        }
        break;
      case z.ArrowRight:
      case z.ArrowDown:
        if (b.preventDefault(), b.stopPropagation(), fe(S, te.Next | te.WrapAround) === Ue.Success) {
          let v = r.value.find((V) => {
            var k;
            return V.element === ((k = ie(V.element)) == null ? void 0 : k.activeElement);
          });
          v && m.change(v.propsRef.value);
        }
        break;
      case z.Space:
        {
          b.preventDefault(), b.stopPropagation();
          let v = r.value.find((V) => {
            var k;
            return V.element === ((k = ie(V.element)) == null ? void 0 : k.activeElement);
          });
          v && m.change(v.propsRef.value);
        }
        break;
    }
  }
  let w = C(() => {
    var b;
    return (b = O(a)) == null ? void 0 : b.closest("form");
  });
  return K(() => {
    Q([w], () => {
      if (!w.value || e.defaultValue === void 0)
        return;
      function b() {
        m.change(e.defaultValue);
      }
      return w.value.addEventListener("reset", b), () => {
        var S;
        (S = w.value) == null || S.removeEventListener("reset", b);
      };
    }, { immediate: !0 });
  }), () => {
    let { disabled: b, name: S, id: v, ...V } = e, k = { ref: a, id: v, role: "radiogroup", "aria-labelledby": p.value, "aria-describedby": c.value, onKeydown: y };
    return Y(R, [...S != null && d.value != null ? Nt({ [S]: d.value }).map(([E, j]) => Y(Ve, St({ features: be.Hidden, key: E, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: E, value: j }))) : [], U({ ourProps: k, theirProps: { ...l, ...je(V, ["modelValue", "defaultValue"]) }, slot: {}, attrs: l, slots: o, name: "RadioGroup" })]);
  };
} });
var Xn = ((e) => (e[e.Empty = 1] = "Empty", e[e.Active = 2] = "Active", e))(Xn || {});
let ea = q({ name: "RadioGroupOption", props: { as: { type: [Object, String], default: "div" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-radiogroup-option-${Z()}` } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = Wo("RadioGroupOption"), a = Mt({ name: "RadioGroupLabel" }), r = tt({ name: "RadioGroupDescription" }), p = $(null), c = C(() => ({ value: e.value, disabled: e.disabled })), d = $(1);
  o({ el: p, $el: p }), K(() => n.registerOption({ id: e.id, element: p, propsRef: c })), se(() => n.unregisterOption(e.id));
  let f = C(() => {
    var V;
    return ((V = n.firstOption.value) == null ? void 0 : V.id) === e.id;
  }), m = C(() => n.disabled.value || e.disabled), y = C(() => n.compare(G(n.value.value), G(e.value))), w = C(() => m.value ? -1 : y.value || !n.containsCheckedOption.value && f.value ? 0 : -1);
  function b() {
    var V;
    !n.change(e.value) || (d.value |= 2, (V = p.value) == null || V.focus());
  }
  function S() {
    d.value |= 2;
  }
  function v() {
    d.value &= -3;
  }
  return () => {
    let { id: V, value: k, disabled: E, ...j } = e, I = { checked: y.value, disabled: m.value, active: Boolean(d.value & 2) }, P = { id: V, ref: p, role: "radio", "aria-checked": y.value ? "true" : "false", "aria-labelledby": a.value, "aria-describedby": r.value, "aria-disabled": m.value ? !0 : void 0, tabIndex: w.value, onClick: m.value ? void 0 : b, onFocus: m.value ? void 0 : S, onBlur: m.value ? void 0 : v };
    return U({ ourProps: P, theirProps: j, slot: I, attrs: t, slots: l, name: "RadioGroupOption" });
  };
} }), lo = Go, ta = qn, Yo = Symbol("GroupContext"), oa = q({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: l }) {
  let o = $(null), n = Mt({ name: "SwitchLabel", props: { onClick() {
    !o.value || (o.value.click(), o.value.focus({ preventScroll: !0 }));
  } } }), a = tt({ name: "SwitchDescription" });
  return oe(Yo, { switchRef: o, labelledby: n, describedby: a }), () => U({ theirProps: e, ourProps: {}, slot: {}, slots: t, attrs: l, name: "SwitchGroup" });
} }), la = q({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: !0 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-switch-${Z()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: l, slots: o, expose: n }) {
  let a = ee(Yo, null), [r, p] = Dt(C(() => e.modelValue), (v) => t("update:modelValue", v), C(() => e.defaultChecked));
  function c() {
    p(!r.value);
  }
  let d = $(null), f = a === null ? d : a.switchRef, m = Xe(C(() => ({ as: e.as, type: l.type })), f);
  n({ el: f, $el: f });
  function y(v) {
    v.preventDefault(), c();
  }
  function w(v) {
    v.key === z.Space ? (v.preventDefault(), c()) : v.key === z.Enter && Eo(v.currentTarget);
  }
  function b(v) {
    v.preventDefault();
  }
  let S = C(() => {
    var v, V;
    return (V = (v = O(f)) == null ? void 0 : v.closest) == null ? void 0 : V.call(v, "form");
  });
  return K(() => {
    Q([S], () => {
      if (!S.value || e.defaultChecked === void 0)
        return;
      function v() {
        p(e.defaultChecked);
      }
      return S.value.addEventListener("reset", v), () => {
        var V;
        (V = S.value) == null || V.removeEventListener("reset", v);
      };
    }, { immediate: !0 });
  }), () => {
    let { id: v, name: V, value: k, ...E } = e, j = { checked: r.value }, I = { id: v, ref: f, role: "switch", type: m.value, tabIndex: 0, "aria-checked": r.value, "aria-labelledby": a == null ? void 0 : a.labelledby.value, "aria-describedby": a == null ? void 0 : a.describedby.value, onClick: y, onKeyup: w, onKeypress: b };
    return Y(R, [V != null && r.value != null ? Y(Ve, St({ features: be.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: r.value, name: V, value: k })) : null, U({ ourProps: I, theirProps: { ...l, ...je(E, ["modelValue", "defaultChecked"]) }, slot: j, attrs: l, slots: o, name: "Switch" })]);
  };
} }), na = Go;
function aa(e) {
  let t = { called: !1 };
  return (...l) => {
    if (!t.called)
      return t.called = !0, e(...l);
  };
}
function dt(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function He(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var xt = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(xt || {});
function sa(e, t) {
  let l = jt();
  if (!e)
    return l.dispose;
  let { transitionDuration: o, transitionDelay: n } = getComputedStyle(e), [a, r] = [o, n].map((p) => {
    let [c = 0] = p.split(",").filter(Boolean).map((d) => d.includes("ms") ? parseFloat(d) : parseFloat(d) * 1e3).sort((d, f) => f - d);
    return c;
  });
  return a !== 0 ? l.setTimeout(() => t("finished"), a + r) : t("finished"), l.add(() => t("cancelled")), l.dispose;
}
function no(e, t, l, o, n, a) {
  let r = jt(), p = a !== void 0 ? aa(a) : () => {
  };
  return He(e, ...n), dt(e, ...t, ...l), r.nextFrame(() => {
    He(e, ...l), dt(e, ...o), r.add(sa(e, (c) => (He(e, ...o, ...t), dt(e, ...n), p(c))));
  }), r.add(() => He(e, ...t, ...l, ...o, ...n)), r.add(() => p("cancelled")), r.dispose;
}
function Pe(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Ft = Symbol("TransitionContext");
var ra = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(ra || {});
function ia() {
  return ee(Ft, null) !== null;
}
function pa() {
  let e = ee(Ft, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function ua() {
  let e = ee(zt, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let zt = Symbol("NestingContext");
function st(e) {
  return "children" in e ? st(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Zo(e) {
  let t = $([]), l = $(!1);
  K(() => l.value = !0), se(() => l.value = !1);
  function o(a, r = Ce.Hidden) {
    let p = t.value.findIndex(({ id: c }) => c === a);
    p !== -1 && (W(r, { [Ce.Unmount]() {
      t.value.splice(p, 1);
    }, [Ce.Hidden]() {
      t.value[p].state = "hidden";
    } }), !st(t) && l.value && (e == null || e()));
  }
  function n(a) {
    let r = t.value.find(({ id: p }) => p === a);
    return r ? r.state !== "visible" && (r.state = "visible") : t.value.push({ id: a, state: "visible" }), () => o(a, Ce.Unmount);
  }
  return { children: t, register: n, unregister: o };
}
let Jo = pe.RenderStrategy, Oe = q({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: l, slots: o, expose: n }) {
  if (!ia() && bn())
    return () => Y(Fe, { ...e, onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave") }, o);
  let a = $(null), r = $("visible"), p = C(() => e.unmount ? Ce.Unmount : Ce.Hidden);
  n({ el: a, $el: a });
  let { show: c, appear: d } = pa(), { register: f, unregister: m } = ua(), y = { value: !0 }, w = Z(), b = { value: !1 }, S = Zo(() => {
    b.value || (r.value = "hidden", m(w), t("afterLeave"));
  });
  K(() => {
    let D = f(w);
    se(D);
  }), X(() => {
    if (p.value === Ce.Hidden && w) {
      if (c && r.value !== "visible") {
        r.value = "visible";
        return;
      }
      W(r.value, { hidden: () => m(w), visible: () => f(w) });
    }
  });
  let v = Pe(e.enter), V = Pe(e.enterFrom), k = Pe(e.enterTo), E = Pe(e.entered), j = Pe(e.leave), I = Pe(e.leaveFrom), P = Pe(e.leaveTo);
  K(() => {
    X(() => {
      if (r.value === "visible") {
        let D = O(a);
        if (D instanceof Comment && D.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function N(D) {
    let L = y.value && !d.value, B = O(a);
    !B || !(B instanceof HTMLElement) || L || (b.value = !0, c.value && t("beforeEnter"), c.value || t("beforeLeave"), D(c.value ? no(B, v, V, k, E, (F) => {
      b.value = !1, F === xt.Finished && t("afterEnter");
    }) : no(B, j, I, P, E, (F) => {
      b.value = !1, F === xt.Finished && (st(S) || (r.value = "hidden", m(w), t("afterLeave")));
    })));
  }
  return K(() => {
    Q([c], (D, L, B) => {
      N(B), y.value = !1;
    }, { immediate: !0 });
  }), oe(zt, S), Qe(C(() => W(r.value, { visible: ae.Open, hidden: ae.Closed }))), () => {
    let { appear: D, show: L, enter: B, enterFrom: F, enterTo: ue, entered: ye, leave: rt, leaveFrom: de, leaveTo: ce, ...ke } = e;
    return U({ theirProps: ke, ourProps: { ref: a }, slot: {}, slots: o, attrs: l, features: Jo, visible: r.value === "visible", name: "TransitionChild" });
  };
} }), ca = Oe, Fe = q({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: l, slots: o }) {
  let n = Ne(), a = C(() => e.show === null && n !== null ? W(n.value, { [ae.Open]: !0, [ae.Closed]: !1 }) : e.show);
  X(() => {
    if (![!0, !1].includes(a.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r = $(a.value ? "visible" : "hidden"), p = Zo(() => {
    r.value = "hidden";
  }), c = $(!0), d = { show: a, appear: C(() => e.appear || !c.value) };
  return K(() => {
    X(() => {
      c.value = !1, a.value ? r.value = "visible" : st(p) || (r.value = "hidden");
    });
  }), oe(zt, p), oe(Ft, d), () => {
    let f = je(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), m = { unmount: e.unmount };
    return U({ ourProps: { ...m, as: "template" }, theirProps: {}, slot: {}, slots: { ...o, default: () => [Y(ca, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...l, ...m, ...f }, o.default)] }, attrs: {}, features: Jo, visible: r.value === "visible", name: "Transition" });
  };
} });
const da = {
  key: 0,
  class: "po-text-sm po-font-normal po-text-slate-400 po-select-none po-block po-text-left po-pt-5"
}, fa = { class: "po-grid po-grid-cols-3 po-gap-2 po-py-2" }, va = { class: "po-bg-white hover:po-bg-slate-200 po-rounded-xl po-p-2 po-transition-colors po-duration-150 po-ease-in" }, ma = ["href"], ha = { class: "po-flex po-w-14 po-h-14 po-items-center po-justify-center po-duration-100 po-ease-in-out po-overflow-hidden" }, ba = ["innerHTML"], ga = { class: "po-text-slate-500 po-font-normal po-text-sm po-text-center" }, ao = {
  __name: "appList",
  props: {
    /**
     * Array of grouped apps. When the group name field is left blank, it will appear as a single list when displayed.
     */
    list: {
      type: Array,
      default: null
    }
  },
  setup(e) {
    return (t, l) => (i(!0), u(R, null, H(e.list, (o) => (i(), u("div", null, [
      o.groupName.length > 0 ? (i(), u("span", da, g(o.groupName), 1)) : x("", !0),
      s("ul", fa, [
        (i(!0), u(R, null, H(o.apps, (n) => (i(), u("li", va, [
          s("a", {
            href: n.url,
            class: "po-flex po-flex-col po-group po-justify-center po-items-center"
          }, [
            s("span", ha, [
              s("span", {
                class: "po-w-9",
                innerHTML: n.icon
              }, null, 8, ba)
            ]),
            s("span", ga, g(n.name), 1)
          ], 8, ma)
        ]))), 256))
      ])
    ]))), 256));
  }
}, ya = {
  name: "PoAppTray"
}, xa = /* @__PURE__ */ Object.assign(ya, {
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
    }
  },
  setup(e) {
    const t = e, l = ["", "Internal"], o = C(() => {
      let n = [];
      return l.forEach((a) => {
        let r = t.appList.filter((p) => p.group == a);
        r.length > 0 && n.push({
          groupName: a,
          apps: r
        });
      }), n;
    });
    return (n, a) => e.justApps ? (i(), M(ao, {
      key: 1,
      list: h(o)
    }, null, 8, ["list"])) : (i(), M(h(at), { key: 0 }, {
      default: A(({ open: r }) => [
        _(h(It), {
          class: T([r ? "" : "po-text-opacity-90", "po-block po-w-6 po-text-slate-100 genie-effect po-z-50 po-outline-none"])
        }, {
          default: A(() => [
            _(h(zl))
          ]),
          _: 2
        }, 1032, ["class"]),
        _(Ee, {
          "enter-active-class": "po-transition po-duration-200 po-ease-out",
          "enter-from-class": "po-translate-y-1 po-opacity-0",
          "enter-to-class": "po-translate-y-0 po-opacity-100",
          "leave-active-class": "po-transition po-duration-150 po-ease-in",
          "leave-from-class": "po-translate-y-0 po-opacity-100",
          "leave-to-class": "po-translate-y-1 po-opacity-0"
        }, {
          default: A(() => [
            _(h(Rt), { class: "po-z-10 po-absolute po-right-0 po-top-16 po-opacity-0 po-bg-white po-shadow-lg po-rounded-b-xl po-rounded-t-0 po-w-[366px] po-p-4 po-border po-border-t-0 po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-scroll po-text-center" }, {
              default: A(() => [
                _(ao, { list: h(o) }, null, 8, ["list"])
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
}), Va = {
  key: 0,
  class: "po-absolute po-right-0 po-w-3 po-h-3 po-bg-mpao-orange po-rounded-full po-border-2 po-border-mpao-blue"
}, wa = {
  key: 0,
  class: "po-space-y-2"
}, ka = ["onClick"], $a = { class: "po-flex po-items-center po-justify-between" }, _a = { class: "po-text-sm po-font-semibold po-text-slate-700 po-grow po-flex po-space-x-2 po-items-center" }, Ca = {
  key: 0,
  class: "po-w-2 po-h-2 po-rounded-full po-shrink-0 po-bg-mpao-orange"
}, Sa = { class: "po-grow" }, Ea = { class: "po-text-xs po-font-normal po-text-slate-400 po-shrink-0" }, Oa = { class: "po-block po-text-sm po-text-slate-500 po-pb-3" }, Pa = {
  key: 1,
  class: "po-text-sm po-text-slate-500 po-py-10 po-text-center po-block"
}, La = {
  name: "PoNotificationHub"
}, Na = /* @__PURE__ */ Object.assign(La, {
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
    return (l, o) => (i(), M(h(at), null, {
      default: A(({ open: n }) => [
        _(h(It), {
          class: T([n ? "" : "text-opacity-90", "po-block po-w-6 po-text-slate-100 genie-effect po-relative po-z-50 po-outline-none"])
        }, {
          default: A(() => [
            e.hasNewNotifications ? (i(), u("span", Va)) : x("", !0),
            _(h(Sl), { class: "po-stroke-current" })
          ]),
          _: 2
        }, 1032, ["class"]),
        _(Ee, {
          "enter-active-class": "po-transition po-duration-200 po-ease-out",
          "enter-from-class": "po-translate-y-1 po-opacity-0",
          "enter-to-class": "po-translate-y-0 po-opacity-100",
          "leave-active-class": "po-transition po-duration-150 po-ease-in",
          "leave-from-class": "po-translate-y-0 po-opacity-100",
          "leave-to-class": "po-translate-y-1 po-opacity-0"
        }, {
          default: A(() => [
            _(h(Rt), { class: "po-z-10 po-absolute po-right-0 po-top-16 po-opacity-0 po-bg-white po-shadow-lg po-rounded-b-xl po-rounded-t-0 po-w-[366px] po-p-4 po-border po-border-t-0 po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-scroll po-text-center" }, {
              default: A(() => [
                e.notifications !== null && e.notifications.length > 0 ? (i(), u("ul", wa, [
                  (i(!0), u(R, null, H(e.notifications, (a) => (i(), u("li", {
                    role: "button",
                    class: "po-space-y-2 po-p-2 po-rounded-lg po-bg-white hover:po-bg-slate-100 po-border po-border-slate-100",
                    onClick: re((r) => l.$emit("button-click", a.name), ["prevent"])
                  }, [
                    s("span", $a, [
                      s("p", _a, [
                        a.seen ? x("", !0) : (i(), u("span", Ca)),
                        s("span", Sa, g(a.name), 1)
                      ]),
                      s("span", Ea, g(a.time), 1)
                    ]),
                    s("span", Oa, g(a.text), 1)
                  ], 8, ka))), 256))
                ])) : (i(), u("span", Pa, " No notifications to show at the moment. We'll keep you informed."))
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
}), Da = {
  key: 0,
  class: "po-hidden lg:po-block po-text-sky-50 po-text-sm po-shrink-0 po-pr-3 po-truncate po-max-w-[140px] po-overflow-hidden"
}, Ta = {
  key: 1,
  class: "po-px-3 po-bg-gradient-to-br po-from-slate-50 po-to-blue-100 po-py-1 po-rounded-l-md po-w-[100px] po-flex po-items-center po-justify-center po-text-center"
}, Aa = ["src"], ja = ["src", "alt"], Ba = {
  key: 1,
  class: "po-text-xs po-text-white po-font-semibold"
}, Ia = { class: "po-pb-5" }, Ra = ["src"], Ma = {
  key: 2,
  class: "po-block po-text-sm po-text-slate-400 po-italic"
}, Fa = { key: 0 }, za = { key: 1 }, Ha = /* @__PURE__ */ s("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), qa = { class: "po-space-y-2 po-py-2 -po-mx-5 po-px-5 po-max-h-[250px] po-overflow-y-scroll" }, Ua = ["onClick"], Ga = { class: "po-w-5" }, Ka = { class: "" }, Wa = { class: "po-block po-text-sm po-font-normal" }, Ya = {
  key: 0,
  class: "po-text-left po-block po-text-xs po-text-slate-400"
}, Za = /* @__PURE__ */ s("div", { class: "po-h-[2px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), Ja = { class: "md:po-grid po-grid-cols-2 po-space-x-1 po-pt-2" }, Qa = { class: "po-w-5" }, Xa = /* @__PURE__ */ s("span", { class: "po-text-sm po-font-normal" }, "Profile", -1), es = { class: "po-w-5" }, ts = /* @__PURE__ */ s("span", { class: "po-text-sm po-font-normal" }, "Logout", -1), os = /* @__PURE__ */ s("div", { class: "po-text-xs po-space-x-3 po-text-center po-pt-3" }, [
  /* @__PURE__ */ s("a", {
    href: "",
    class: "po-text-slate-500 hover:po-text-mpao-lightblue"
  }, "Privacy Policy"),
  /* @__PURE__ */ s("a", {
    href: "",
    class: "po-text-slate-500 hover:po-text-mpao-lightblue"
  }, "Terms of Service")
], -1), ls = {
  name: "PoProfileSwitcher"
}, ns = /* @__PURE__ */ Object.assign(ls, {
  props: {
    userObject: {
      type: Object,
      default: null
    }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    const l = e, { userObject: o } = we(l);
    function n(c) {
      t("button-click", c);
    }
    const a = $({
      name: "",
      initials: "",
      image: ""
    });
    function r(c) {
      return c ? c.match(/\b[A-Z]/g).join("").substr(0, 2) : "";
    }
    const p = C(() => {
      var y, w, b, S, v, V, k, E, j, I, P, N, D;
      let c = [], d = (y = l.userObject) != null && y.transacting_as_organisation && Object.keys((w = l.userObject) == null ? void 0 : w.transacting_as_organisation).length > 0 ? (b = l.userObject) == null ? void 0 : b.transacting_as_organisation : null, f = d ? d.name : (S = l.userObject) == null ? void 0 : S.name, m = d ? d.logo ? d.logo : (v = l.userObject) == null ? void 0 : v.avatar : "";
      return a.value = {
        name: f,
        initials: r(f),
        image: m
      }, c = [], c.push({
        id: (V = l.userObject) == null ? void 0 : V.id,
        entity_id: (k = l.userObject) == null ? void 0 : k.entity_id,
        name: (E = l.userObject) == null ? void 0 : E.name,
        identifier: null,
        organisation_uuid: null
      }), ((I = (j = l.userObject) == null ? void 0 : j.organisations) == null ? void 0 : I.length) > 0 && ((N = (P = l.userObject) == null ? void 0 : P.organisations) == null || N.forEach((L) => c.push(L))), c.forEach((L) => {
        var B, F, ue, ye;
        L.current = ((B = l.userObject) == null ? void 0 : B.transacting_as_organisation) && Object.keys((F = l.userObject) == null ? void 0 : F.transacting_as_organisation).length > 0 && L.entity_id === ((ye = (ue = l.userObject) == null ? void 0 : ue.transacting_as_organisation) == null ? void 0 : ye.entity_id);
      }), ((D = l.userObject) == null ? void 0 : D.transacting_as_organisation) === null && (c[0].current = !0), c;
    });
    return (c, d) => (i(), M(h(at), null, {
      default: A(({ open: f }) => [
        _(h(It), { class: "po-flex po-items-center po-outline-none" }, {
          default: A(() => {
            var m, y, w, b, S, v, V, k, E, j, I, P, N, D;
            return [
              (y = (m = h(o)) == null ? void 0 : m.transacting_as_organisation) != null && y.logo ? x("", !0) : (i(), u("span", Da, g(a.value.name), 1)),
              (b = (w = h(o)) == null ? void 0 : w.transacting_as_organisation) != null && b.logo ? (i(), u("span", Ta, [
                s("img", {
                  class: "po-h-8",
                  src: (v = (S = h(o)) == null ? void 0 : S.transacting_as_organisation) == null ? void 0 : v.logo,
                  alt: ""
                }, null, 8, Aa)
              ])) : x("", !0),
              s("div", {
                class: T([
                  {
                    "po-bg-gradient-to-br po-from-slate-50 po-to-blue-100 po-p-1 po-rounded-r-md": (k = (V = h(o)) == null ? void 0 : V.transacting_as_organisation) == null ? void 0 : k.logo
                  }
                ])
              }, [
                s("div", {
                  class: T([[
                    { "text-opacity-90": f },
                    {
                      "po-w-10 po-h-10": !((j = (E = h(o)) == null ? void 0 : E.transacting_as_organisation) != null && j.logo)
                    },
                    { "po-w-8 po-h-8": (P = (I = h(o)) == null ? void 0 : I.transacting_as_organisation) == null ? void 0 : P.logo }
                  ], "po-shrink-0 po-select-none po-rounded-full po-bg-[#2e5266] po-flex po-items-center po-justify-center genie-effect po-z-50"])
                }, [
                  (N = h(o)) != null && N.avatar ? (i(), u("img", {
                    key: 0,
                    class: "po-rounded-full po-border po-border-white",
                    src: (D = h(o)) == null ? void 0 : D.avatar,
                    alt: a.value.name
                  }, null, 8, ja)) : (i(), u("span", Ba, g(a.value.initials), 1))
                ], 2)
              ], 2)
            ];
          }),
          _: 2
        }, 1024),
        _(Ee, {
          "enter-active-class": "po-transition po-duration-200 po-ease-out",
          "enter-from-class": "po-translate-y-1 po-opacity-0",
          "enter-to-class": "po-translate-y-0 po-opacity-100",
          "leave-active-class": "po-transition po-duration-150 po-ease-in",
          "leave-from-class": "po-translate-y-0 po-opacity-100",
          "leave-to-class": "po-translate-y-1 po-opacity-0"
        }, {
          default: A(() => [
            _(h(Rt), { class: "po-z-10 po-absolute po-right-0 po-top-16 po-opacity-0 po-bg-white po-shadow-lg po-rounded-b-xl po-rounded-t-0 po-w-[366px] po-p-4 po-border po-border-t-0 po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-scroll po-text-center" }, {
              default: A(() => {
                var m, y, w, b, S, v, V;
                return [
                  s("div", Ia, [
                    (m = h(o)) != null && m.avatar ? (i(), u("img", {
                      key: 0,
                      class: "po-w-20 po-h-20 po-mx-auto po-rounded-full po-overflow-hidden",
                      src: (y = h(o)) == null ? void 0 : y.avatar,
                      alt: ""
                    }, null, 8, Ra)) : x("", !0),
                    (w = h(o)) != null && w.name ? (i(), u("span", {
                      key: 1,
                      class: T(["po-text-base po-text-slate-600 po-font-medium po-block", [{ "po-mt-4": (b = h(o)) == null ? void 0 : b.avatar }]])
                    }, g((S = h(o)) == null ? void 0 : S.name), 3)) : x("", !0),
                    (v = h(o)) != null && v.name ? (i(), u("span", Ma, [
                      a.value.name === ((V = h(o)) == null ? void 0 : V.name) ? (i(), u("span", Fa, "Self")) : (i(), u("span", za, "User at " + g(a.value.name), 1))
                    ])) : x("", !0)
                  ]),
                  Ha,
                  s("div", qa, [
                    (i(!0), u(R, null, H(h(p), (k) => (i(), u("a", {
                      href: "#",
                      onClick: re((E) => n(k), ["prevent"]),
                      class: T(["po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-shadow-sm po-transition-all po-duration-150 po-ease-out hover:po-bg-blue-50", [
                        {
                          " po-bg-white": !k.current
                        },
                        {
                          " po-bg-blue-50 po-shadow-sm": k.current
                        }
                      ]]),
                      role: "button"
                    }, [
                      s("span", Ga, [
                        k.isPersonal ? (i(), M(h(Wt), {
                          key: 0,
                          class: T([
                            "po-stroke-current",
                            { "po-stroke-mpao-lightblue": k.current }
                          ])
                        }, null, 8, ["class"])) : x("", !0),
                        k.isPersonal ? x("", !0) : (i(), M(h(Ol), {
                          key: 1,
                          class: T([
                            "po-stroke-current",
                            { "po-stroke-mpao-lightblue": k.current }
                          ])
                        }, null, 8, ["class"]))
                      ]),
                      s("span", Ka, [
                        s("span", Wa, g(k.name), 1),
                        k.identifier ? (i(), u("span", Ya, g(k.identifier), 1)) : x("", !0)
                      ])
                    ], 10, Ua))), 256))
                  ]),
                  Za,
                  s("div", Ja, [
                    s("a", {
                      href: "#",
                      onClick: d[0] || (d[0] = re((k) => c.$emit("button-click", "current-profile"), ["prevent"])),
                      class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-slate-50 hover:po-bg-blue-50 po-transition-all po-duration-150 po-ease-out",
                      role: "button"
                    }, [
                      s("span", Qa, [
                        _(h(Wt), { class: "po-stroke-current" })
                      ]),
                      Xa
                    ]),
                    s("a", {
                      href: "#",
                      onClick: d[1] || (d[1] = re((k) => c.$emit("button-click", "logout"), ["prevent"])),
                      class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-slate-50 hover:po-bg-blue-50 po-transition-all po-duration-150 po-ease-out",
                      role: "button"
                    }, [
                      s("span", es, [
                        _(h($l), { class: "po-stroke-current" })
                      ]),
                      ts
                    ])
                  ]),
                  os
                ];
              }),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), as = { class: "loading-dots po-inline-block po-relative po-w-[40px] po-h-[10px]" }, Qo = {
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
    return (t, l) => (i(), u("div", as, [
      s("div", {
        class: T(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[8px]", e.dotColor])
      }, null, 2),
      s("div", {
        class: T(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[8px]", e.dotColor])
      }, null, 2),
      s("div", {
        class: T(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[17px]", e.dotColor])
      }, null, 2),
      s("div", {
        class: T(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[26px]", e.dotColor])
      }, null, 2)
    ]));
  }
}, ss = ["disabled", "aria-disabled"], rs = ["value", "disabled", "aria-disabled"], is = {
  name: "PoButton"
}, Ht = /* @__PURE__ */ Object.assign(is, {
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
    const l = e, o = "po-rounded-full po-transition-colors po-border po-duration-100 po-ease-in-out po-cursor-pointer disabled:po-bg-slate-400 disabled:po-border-slate-400 disabled:po-cursor-default disabled:po-hover:bg-slate-400", n = C(() => {
      switch (l.size) {
        case "sm":
          return "po-px-2 po-py-1 po-text-xs";
        case "md":
          return "po-px-4 po-py-2 po-text-sm";
        case "lg":
          return "po-px-5 po-py-3 po-text-normal";
      }
    }), a = C(() => {
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
    return (r, p) => (i(), u(R, null, [
      e.isLoading ? (i(), u("span", {
        key: 0,
        class: T([[o, h(n)], "po-bg-slate-200 hover:po-bg-slate-200 focus:po-bg-slate-200"])
      }, [
        _(Qo, {
          "dot-color": "po-bg-slate-500",
          class: "po-relative -po-bottom-[0.2rem]"
        })
      ], 2)) : x("", !0),
      e.type == "button" && !e.isLoading ? (i(), u("button", Le({
        key: 1,
        onClick: p[0] || (p[0] = re((c) => r.$emit("button-click", e.to), ["prevent"])),
        class: [o, h(n), h(a)],
        disabled: e.disabled,
        "aria-disabled": e.disabled
      }, r.$attrs), [
        J(r.$slots, "label", {}, () => [
          ne(g(e.label), 1)
        ])
      ], 16, ss)) : x("", !0),
      e.type == "submit" && !e.isLoading ? (i(), u("input", Le({
        key: 2,
        type: "submit",
        class: [o, h(n), h(a)],
        value: e.label,
        disabled: e.disabled,
        "aria-disabled": e.disabled
      }, r.$attrs), null, 16, rs)) : x("", !0),
      e.type == "link" && !e.isLoading ? (i(), u("a", Le({
        key: 3,
        href: "#",
        onClick: p[1] || (p[1] = re((c) => r.$emit("button-click", e.to), ["prevent"])),
        class: [o, h(n), h(a)]
      }, r.$attrs), [
        J(r.$slots, "label", {}, () => [
          ne(g(e.label), 1)
        ])
      ], 16)) : x("", !0),
      e.type == "simple" && !e.isLoading ? (i(), u("a", {
        key: 4,
        href: "#",
        onClick: p[2] || (p[2] = re((c) => r.$emit("button-click", e.to), ["prevent"])),
        class: T(["po-text-sm po-transition-colors po-duration-100 po-ease-in-out po-inline-flex po-items-center po-space-x-1", [
          { "po-text-mpao-lightblue hover:po-text-mpao-blue": !e.overrideColors }
        ]])
      }, [
        J(r.$slots, "label", {}, () => [
          ne(g(e.label), 1)
        ])
      ], 2)) : x("", !0)
    ], 64));
  }
}), ps = /* @__PURE__ */ s("div", { class: "po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity" }, null, -1), us = { class: "po-fixed po-z-10 po-inset-0" }, cs = { class: "po-flex po-justify-center po-items-start po-min-h-screen po-px-4 po-pt-10 po-pb-20 po-text-center sm:po-block po-max-h-screen po-overflow-y-hidden" }, ds = /* @__PURE__ */ s("span", {
  class: "po-hidden sm:po-inline-block sm:po-align-middle sm:po-h-screen",
  "aria-hidden": "true"
}, "​", -1), fs = { class: "po-flex po-items-center po-bg-white po-rounded-t-xl po-p-5" }, vs = { class: "po-grow po-text-md po-font-bold po-text-slate-600" }, ms = { class: "po-shrink-0" }, hs = /* @__PURE__ */ s("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), bs = { class: "po-p-5 po-max-h-[calc(100vh-230px)] po-overflow-y-scroll po-min-h-[250px]" }, gs = {
  key: 0,
  class: "po-bg-slate-50 po-rounded-b-xl"
}, ys = {
  name: "PoModal"
}, xs = /* @__PURE__ */ Object.assign(ys, {
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
    const l = e, { show: o } = we(l), n = $(!1);
    Q(o, () => {
      n.value = o.value;
    });
    function a() {
      n.value = !1, t("modal-closed", !0);
    }
    return (r, p) => (i(), u("div", null, [
      e.openBtnLabel.length > 0 ? (i(), M(h(Ht), {
        key: 0,
        label: e.openBtnLabel,
        onClick: p[0] || (p[0] = (c) => n.value = !0)
      }, null, 8, ["label"])) : x("", !0),
      (i(), M(_t, { to: "body" }, [
        _(h(Fe), {
          as: "template",
          show: n.value
        }, {
          default: A(() => [
            _(h(ot), {
              as: "div",
              class: "po-relative po-z-50",
              onClose: a
            }, {
              default: A(() => [
                _(h(Oe), {
                  as: "template",
                  enter: "po-ease-out po-duration-300",
                  "enter-from": "po-opacity-0",
                  "enter-to": "po-opacity-100",
                  leave: "po-ease-in po-duration-200",
                  "leave-from": "po-opacity-100",
                  "leave-to": "po-opacity-0"
                }, {
                  default: A(() => [
                    ps
                  ]),
                  _: 1
                }),
                s("div", us, [
                  s("div", cs, [
                    ds,
                    _(h(Oe), {
                      as: "template",
                      enter: "po-ease-out po-duration-300",
                      "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                      "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                      leave: "po-ease-in po-duration-200",
                      "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                      "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                    }, {
                      default: A(() => [
                        _(h(lt), {
                          class: T(["po-relative po-inline-block po-align-bottom po-bg-white po-rounded-xl po-text-left po-shadow-xl po-transform po-transition-all sm:po-align-top po-w-full", e.modalWidth])
                        }, {
                          default: A(() => [
                            s("div", fs, [
                              s("h3", vs, g(e.modalTitle), 1),
                              s("div", ms, [
                                s("span", {
                                  role: "button",
                                  class: "po-block",
                                  onClick: a
                                }, [
                                  _(h(Vo), { class: "po-w-5 po-stroke-slate-500 hover:po-stroke-mpao-orange po-transition-colors po-duration-150 po-ease-in-out" })
                                ])
                              ])
                            ]),
                            hs,
                            s("div", bs, [
                              J(r.$slots, "content")
                            ]),
                            r.$slots.footer ? (i(), u("div", gs, [
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
});
function Xo(e, t) {
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
function el(e, t) {
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
function tl(e, t) {
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
function Vs(e, t) {
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
function ws(e, t) {
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
function ks(e, t) {
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
function qt(e, t) {
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
function ol(e, t) {
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
function $s(e, t) {
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
function ll(e, t) {
  return i(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
  ]);
}
const _s = {
  key: 0,
  class: "po-text-lg po-text-red-400 po-font-semibold"
}, Cs = {
  key: 0,
  class: "po-mt-1 po-flex -po-mb-3 po-flex-wrap"
}, Ss = { class: "po-flex po-flex-1" }, Es = { class: "po-flex po-flex-col" }, Os = ["id"], Ps = ["id"], Ls = {
  name: "PoRadioInput"
}, Ns = /* @__PURE__ */ Object.assign(Ls, {
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
    const l = e, o = $();
    o.value = l.modelValue, go(() => {
      o.value = l.modelValue;
    }), Q(o, () => {
      t("update:modelValue", o.value);
    });
    const { errorMessage: n } = we(l), a = $();
    return Q(n, (r, p) => {
      a.value = n.value !== null && n.value !== "";
    }), (r, p) => (i(), M(h(Qn), {
      modelValue: o.value,
      "onUpdate:modelValue": p[0] || (p[0] = (c) => o.value = c),
      class: T([{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }])
    }, {
      default: A(() => [
        _(h(lo), {
          class: T([
            "po-text-sm po-font-medium po-flex po-items-center po-space-x-1",
            { "po-text-red-500": a.value },
            { "po-text-slate-700": !a.value }
          ])
        }, {
          default: A(() => [
            s("span", null, g(e.label), 1),
            e.required ? (i(), u("span", _s, "*")) : x("", !0)
          ]),
          _: 1
        }, 8, ["class"]),
        e.options !== null ? (i(), u("div", Cs, [
          (i(!0), u(R, null, H(e.options, (c) => (i(), M(h(ea), {
            as: "template",
            key: c.id,
            value: c.id
          }, {
            default: A(({ checked: d, active: f }) => [
              s("div", {
                class: T([
                  "po-transition-colors po-duration-100 po-ease-out po-mr-3",
                  "",
                  "",
                  "po-mb-3 po-pt-[0.13rem] po-relative po-flex po-cursor-pointer focus:po-outline-none"
                ])
              }, [
                s("span", {
                  class: T(["po-w-5 po-h-5 po-rounded-full po-border po-mr-2 po-flex po-items-center po-justify-center", [
                    "",
                    d ? "po-border-mpao-lightblue" : "po-border-slate-400"
                  ]])
                }, [
                  s("span", {
                    class: T(["po-w-3 po-h-3 po-rounded-full", [
                      "",
                      d ? "po-bg-mpao-lightblue" : "po-bg-transparent"
                    ]])
                  }, null, 2)
                ], 2),
                s("span", Ss, [
                  s("span", Es, [
                    _(h(lo), {
                      as: "span",
                      class: "po-block po-text-sm po-font-medium po-text-gray-900"
                    }, {
                      default: A(() => [
                        ne(g(c.title), 1)
                      ]),
                      _: 2
                    }, 1024),
                    c.description ? (i(), M(h(ta), {
                      key: 0,
                      as: "span",
                      class: "po-mt-1 po-flex po-items-center po-text-sm po-text-gray-500"
                    }, {
                      default: A(() => [
                        ne(g(c.description), 1)
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
        s("div", null, [
          e.message !== null ? (i(), u("p", {
            key: 0,
            class: "po-mt-2 po-text-sm po-text-slate-500",
            id: `${r.id}-description`
          }, g(e.message), 9, Os)) : x("", !0),
          a.value && h(n) !== null ? (i(), u("p", {
            key: 1,
            class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
            id: `${r.id}-error`
          }, [
            _(h(qt), { class: "po-fill-current po-w-4 po-mt-[0.2rem] po-shrink-0" }),
            s("span", null, g(h(n)), 1)
          ], 8, Ps)) : x("", !0)
        ])
      ]),
      _: 1
    }, 8, ["modelValue", "class"]));
  }
});
function Ds(e, t) {
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
function Ts(e, t) {
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
function As(e, t) {
  return i(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", { d: "M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" })
  ]);
}
function nl(e, t) {
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
function js(e, t) {
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
const Bs = ["for"], Is = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Rs = ["title"], Ms = ["name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], Fs = ["id"], zs = ["id"], Hs = {
  name: "PoTextarea"
}, qs = /* @__PURE__ */ Object.assign(Hs, {
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
    return (t, l) => (i(), u("div", {
      class: T(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      s("label", {
        for: e.id,
        class: "po-text-sm po-font-medium po-text-slate-700 po-flex po-items-center po-space-x-1"
      }, [
        s("span", null, g(e.label), 1),
        e.required ? (i(), u("span", Is, "*")) : x("", !0),
        e.info !== null ? (i(), u("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          _(h(nl))
        ], 8, Rs)) : x("", !0)
      ], 8, Bs),
      s("textarea", Le({
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
      }), null, 16, Ms),
      e.message !== null ? (i(), u("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, g(e.message), 9, Fs)) : x("", !0),
      e.errorMessage !== null ? (i(), u("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, g(e.errorMessage), 9, zs)) : x("", !0)
    ], 2));
  }
}), Us = /* @__PURE__ */ s("input", {
  type: "checkbox",
  name: "",
  class: "po-hidden shell-sidebar--toggle",
  role: "none",
  id: "sidebar-drawer-toggle",
  checked: "",
  "aria-checked": "true"
}, null, -1), Gs = { class: "shell-sidebar" }, Ks = { class: "po-grow" }, Ws = { class: "shell-sidebar--menu" }, Ys = ["onClick", "title"], Zs = { class: "shell-sidebar--icon" }, Js = { class: "shell-sidebar--label po-font-medium po-text-left" }, Qs = { key: 0 }, Xs = { class: "shell-sidebar--menu sidebar-apps po-shrink-0 po-mb-0" }, er = ["onClick"], tr = { class: "shell-sidebar--icon" }, or = ["innerHTML"], lr = { class: "shell-sidebar--label po-font-medium po-text-left" }, nr = {
  key: 0,
  class: "shell-sidebar--menu po-shrink-0 po-mb-0 po-border-t po-border-slate-200 po-pt-3"
}, ar = { class: "shell-sidebar--icon" }, sr = /* @__PURE__ */ s("span", { class: "shell-sidebar--label po-font-medium" }, "Feedback", -1), rr = { action: "" }, ir = /* @__PURE__ */ s("br", null, null, -1), pr = { class: "po-p-5" }, ur = {
  name: "PoSidebarDrawer"
}, R1 = /* @__PURE__ */ Object.assign(ur, {
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
    const l = e, o = $(!1), n = [
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
    ], a = $(n[0]), r = C(() => {
      let p = [];
      const c = l.apps.filter((d) => d.code == l.appCode)[0];
      return c && l.apps.filter(
        (f) => c.related.includes(f.code)
      ).forEach((f) => {
        p.push(f);
      }), p;
    });
    return (p, c) => (i(), u(R, null, [
      Us,
      s("aside", Gs, [
        s("div", Ks, [
          (i(!0), u(R, null, H(e.content, (d) => (i(), u("div", null, [
            _(h(eo), { defaultOpen: !0 }, {
              default: A(({ open: f }) => [
                d.groupName ? (i(), M(h(to), {
                  key: 0,
                  class: T([f ? "" : "po-mb-3", "shell-sidebar--section po-w-full po-text-left"])
                }, {
                  default: A(() => [
                    ne(g(d.groupName), 1)
                  ]),
                  _: 2
                }, 1032, ["class"])) : x("", !0),
                _(Ee, {
                  "enter-active-class": "po-transition po-duration-100 po-ease-out",
                  "enter-from-class": "po-transform po-scale-95 po-opacity-0",
                  "enter-to-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-active-class": "po-transition po-duration-75 po-ease-out",
                  "leave-from-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-to-class": "po-transform po-scale-95 po-opacity-0"
                }, {
                  default: A(() => [
                    _(h(oo), null, {
                      default: A(() => [
                        s("ul", Ws, [
                          (i(!0), u(R, null, H(d.items, (m) => (i(), u("li", null, [
                            m.disabled ? x("", !0) : (i(), u("button", {
                              key: 0,
                              onClick: (y) => p.$emit("button-click", m.url),
                              class: T([
                                "shell-sidebar--item",
                                { active: m.url == e.currRoute }
                              ]),
                              title: `Go to ${m.label}`
                            }, [
                              s("span", Zs, [
                                (i(), M(ve(m.icon), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" }))
                              ]),
                              s("span", Js, g(m.label), 1)
                            ], 10, Ys))
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
          e.apps !== null ? (i(), u("div", Qs, [
            _(h(eo), { defaultOpen: !0 }, {
              default: A(({ open: d }) => [
                e.appsLabel ? (i(), M(h(to), {
                  key: 0,
                  class: T([d ? "" : "po-mb-3", "shell-sidebar--section po-w-full po-text-left"])
                }, {
                  default: A(() => [
                    ne(g(e.appsLabel), 1)
                  ]),
                  _: 2
                }, 1032, ["class"])) : x("", !0),
                _(Ee, {
                  "enter-active-class": "po-transition po-duration-100 po-ease-out",
                  "enter-from-class": "po-transform po-scale-95 po-opacity-0",
                  "enter-to-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-active-class": "po-transition po-duration-75 po-ease-out",
                  "leave-from-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-to-class": "po-transform po-scale-95 po-opacity-0"
                }, {
                  default: A(() => [
                    _(h(oo), null, {
                      default: A(() => [
                        s("ul", Xs, [
                          (i(!0), u(R, null, H(h(r), (f, m) => (i(), u("li", null, [
                            s("button", {
                              onClick: (y) => {
                                p.$emit("app-click", f.name), p.setCurrent(m);
                              },
                              class: T(["shell-sidebar--item", [{ active: f.current }]]),
                              title: "Go to feedback"
                            }, [
                              s("span", tr, [
                                s("span", {
                                  innerHTML: f.icon,
                                  class: "po-text-slate-600 po-w-5"
                                }, null, 8, or)
                              ]),
                              s("span", lr, g(f.name), 1)
                            ], 10, er)
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
        e.hasFeedback ? (i(), u("ul", nr, [
          s("li", null, [
            s("button", {
              onClick: c[0] || (c[0] = re(() => o.value = !0, ["prevent"])),
              class: "shell-sidebar--item",
              title: "Go to feedback"
            }, [
              s("span", ar, [
                _(h(Pl), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" })
              ]),
              sr
            ])
          ])
        ])) : x("", !0),
        _(xs, {
          show: o.value,
          onModalClosed: c[2] || (c[2] = () => o.value = !1),
          "modal-title": "Feedback"
        }, {
          content: A(() => [
            s("form", rr, [
              _(Ns, {
                label: "Type",
                options: n,
                "pre-selected": a.value,
                modelValue: a.value,
                "onUpdate:modelValue": c[1] || (c[1] = (d) => a.value = d)
              }, null, 8, ["pre-selected", "modelValue"]),
              ir,
              _(qs, {
                cols: "6",
                rows: "6",
                label: "Description",
                message: ""
              })
            ])
          ]),
          footer: A(() => [
            s("div", pr, [
              _(Ht, {
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
}), cr = {
  key: 0,
  class: "shell-content--action-bar"
}, dr = { class: "action-bar__nav" }, fr = ["onClick"], vr = { class: "action-bar__nav_label po-font-medium" }, mr = {
  key: 0,
  class: "po-shrink-0 po-flex po-space-x-1"
}, hr = /* @__PURE__ */ s("span", { class: "action-bar__nav_label po-font-medium" }, "Go Back", -1), br = {
  name: "PoActionBar"
}, M1 = /* @__PURE__ */ Object.assign(br, {
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
    return (t, l) => e.items !== null && e.items.length > 0 || e.showBackButton ? (i(), u("section", cr, [
      s("nav", dr, [
        (i(!0), u(R, null, H(e.items, (o) => (i(), u("span", {
          onClick: (n) => t.$emit("button-click", o.label),
          class: T([[
            { "action-bar__nav_highlighted": o.highlighted },
            { "action-bar__nav_danger": o.danger }
          ], "action-bar__nav_link"])
        }, [
          (i(), M(ve(o.icon), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" })),
          s("span", vr, g(o.label), 1)
        ], 10, fr))), 256))
      ]),
      e.showBackButton ? (i(), u("nav", mr, [
        s("span", {
          onClick: l[0] || (l[0] = (o) => t.$emit("button-click", "back")),
          class: "action-bar__nav_link"
        }, [
          hr,
          (i(), M(ve(h(_l)), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" }))
        ])
      ])) : x("", !0)
    ])) : x("", !0);
  }
}), gr = { class: "po-shadow-sm po-rounded-xl po-bg-white po-relative" }, yr = {
  key: 0,
  class: "po-absolute po-right-2 po-top-2 po-p-2 po-rounded-lg"
}, xr = { class: "po-grid po-grid-cols-1 lg:po-grid-cols-3 po-gap-3" }, Vr = {
  key: 0,
  class: "po-text-base po-font-medium po-text-slate-600"
}, wr = {
  key: 1,
  class: "lg:po-col-span-2 lg:po-flex lg:po-justify-end po-space-x-2"
}, kr = {
  name: "PoCard"
}, F1 = /* @__PURE__ */ Object.assign(kr, {
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
    return (t, l) => (i(), u("div", gr, [
      e.isLoading ? (i(), u("div", yr, [
        _(Qo)
      ])) : x("", !0),
      s("div", xr, [
        e.title.length > 0 ? (i(), u("h3", Vr, g(e.title), 1)) : x("", !0),
        t.$slots.action ? (i(), u("div", wr, [
          J(t.$slots, "action")
        ])) : x("", !0)
      ]),
      J(t.$slots, "content")
    ]));
  }
}), $r = { class: "po-py-3 po-px-5 po-border-b po-border-slate-200" }, _r = {
  class: "po-flex po-w-full md:po-ml-0",
  action: "#",
  method: "GET"
}, Cr = {
  for: "search-field",
  class: "po-sr-only"
}, Sr = { class: "po-relative po-w-full po-text-slate-400 focus-within:po-text-mpao-lightblue po-transition-colors po-duration-100 po-ease-in-out" }, Er = { class: "po-pointer-events-none po-absolute po-inset-y-0 po-left-0 po-flex po-items-center" }, Or = ["placeholder", "value"], Pr = {
  name: "PoCardSearch"
}, z1 = /* @__PURE__ */ Object.assign(Pr, {
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
    return (t, l) => (i(), u("div", $r, [
      s("form", _r, [
        s("label", Cr, g(e.placeholder), 1),
        s("div", Sr, [
          s("div", Er, [
            _(h(Ct), { class: "po-h-5 po-w-5 po-flex-shrink-0" })
          ]),
          s("input", {
            name: "search-field",
            id: "desktop-search-field",
            placeholder: e.placeholder,
            value: e.modelValue,
            onInput: l[0] || (l[0] = (o) => t.$emit("update:modelValue", o.target.value)),
            class: "po-h-full po-w-full po-border-transparent po-py-2 po-pl-8 po-pr-3 po-text-sm po-text-slate-700 po-placeholder-slate-500 focus:po-border-transparent focus:po-placeholder-slate-400 focus:po-outline-none focus:po-ring-0",
            type: "search"
          }, null, 40, Or)
        ])
      ])
    ]));
  }
}), Lr = { class: "po-flex po-items-center" }, Nr = { class: "po-text-sm po-font-medium po-text-slate-500 po-pr-2" }, Dr = {
  name: "PoPagination"
}, Tr = /* @__PURE__ */ Object.assign(Dr, {
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
    function o() {
      t("button-click", "prev"), t("prev-click", !0);
    }
    function n() {
      t("button-click", "next"), t("next-click", !0);
    }
    const a = C(() => l.totalPages ? `Page ${l.currentPage} of ${l.totalPages}` : l.pagination ? l.pagination.label : "");
    return (r, p) => (i(), u("div", Lr, [
      s("span", Nr, g(h(a)), 1),
      s("button", {
        title: "Previous",
        onClick: o,
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        _(h(Tl), { class: "po-w-4 po-stroke-current po-stroke-2" })
      ]),
      s("button", {
        title: "Next",
        onClick: n,
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        _(h(Al), { class: "po-w-4 po-stroke-current po-stroke-2" })
      ])
    ]));
  }
}), Ar = { key: 0 }, jr = {
  class: "po-text-xl md:po-text-2xl po-font-semibold po-text-slate-800",
  id: "po-page-title"
}, Br = {
  key: 0,
  class: "po-text-base po-mt-2 po-max-w-md po-block po-text-slate-500"
}, Ir = { key: 1 }, Rr = { class: "po-grid po-grid-cols-1 lg:po-grid-cols-2 po-gap-5" }, Mr = {
  class: "po-text-xl md:po-text-2xl po-font-semibold po-text-slate-800",
  id: "po-page-title"
}, Fr = {
  key: 0,
  class: "po-text-base po-mt-4 po-max-w-md po-pb-5 po-block po-text-slate-500"
}, zr = { class: "po-flex po-items-end po-justify-end po-flex-col" }, Hr = {
  key: 0,
  class: "po-flex md:po-justify-end po-mb-5"
}, qr = { class: "po-bg-slate-50 po-shadow-sm po-rounded-xl po-py-5 po-px-2 po-divide-x po-divide-slate-200 po-flex" }, Ur = ["onClick"], Gr = { class: "po-text-xl po-font-medium po-text-slate-600 po-flex po-items-center po-space-x-1" }, Kr = { class: "po-text-xl po-font-medium po-text-slate-600 group-hover:po-text-mpao-lightblue" }, Wr = { class: "po-text-sm po-text-slate-500 po-block group-hover:po-text-mpao-lightblue" }, Yr = { class: "po-flex po-items-center po-space-x-1 md:po-justify-end" }, Zr = {
  key: 2,
  class: "po-border-l po-border-slate-400 po-h-3 po-w-3 po-ml-1"
}, Jr = {
  key: 0,
  class: "po-bg-slate-50 po-p-5 po-mt-5 po-rounded-md po-grid po-grid-cols-1 md:po-grid-cols-3 po-gap-5"
}, Qr = /* @__PURE__ */ s("span", { class: "po-text-xs po-text-slate-500 po-py-5" }, "No filters available at the moment.", -1), Xr = {
  name: "PoPageTitle"
}, H1 = /* @__PURE__ */ Object.assign(Xr, {
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
    function n(r) {
      t("pagination-click", r);
    }
    function a(r) {
      return r.iconColor ? r.iconColor : "po-slate-600";
    }
    return (r, p) => e.standAlone ? (i(), u("div", Ar, [
      s("h1", jr, g(e.label), 1),
      e.description !== "" ? (i(), u("span", Br, g(e.description), 1)) : x("", !0)
    ])) : (i(), u("div", Ir, [
      s("div", Rr, [
        s("div", null, [
          s("h1", Mr, g(e.label), 1),
          e.description !== "" ? (i(), u("span", Fr, g(e.description), 1)) : x("", !0)
        ]),
        s("div", zr, [
          e.stats !== null ? (i(), u("div", Hr, [
            s("div", qr, [
              (i(!0), u(R, null, H(e.stats, (c) => (i(), u("div", {
                class: "po-px-5 po-cursor-pointer po-group genie-effect",
                onClick: (d) => r.$emit("stat-click", c)
              }, [
                s("span", Gr, [
                  s("span", Kr, g(c.value), 1),
                  c.icon ? (i(), u("span", {
                    key: 0,
                    class: T(["po-w-5 po-h-5", a(c)])
                  }, [
                    (i(), M(ve(c.icon)))
                  ], 2)) : x("", !0)
                ]),
                s("span", Wr, g(c.label), 1)
              ], 8, Ur))), 256))
            ])
          ])) : x("", !0),
          s("div", Yr, [
            e.showFilter ? (i(), u("button", {
              key: 0,
              title: "Filter",
              onClick: p[0] || (p[0] = (c) => {
                r.$emit("button-click", "filter"), o.value = !h(o);
              }),
              class: T([
                "po-p-2 po-rounded-md hover:po-bg-slate-200 po-transition-colors po-duration-75 po-ease-in-out",
                { "po-text-mpao-orange hover:po-text-mpao-orange": h(o) },
                { "tpo-ext-slate-600 hover:po-text-mpao-blue": !h(o) }
              ])
            }, [
              _(h(Il), { class: "po-w-4 po-stroke-current po-stroke-2" })
            ], 2)) : x("", !0),
            e.showDownload ? (i(), u("button", {
              key: 1,
              title: "Download",
              onClick: p[1] || (p[1] = (c) => r.$emit("button-click", "download")),
              class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
            }, [
              _(h(kl), { class: "po-w-4 po-stroke-current po-stroke-2" })
            ])) : x("", !0),
            e.showFilter && e.showPagination || e.showDownload && e.showPagination ? (i(), u("span", Zr, " ")) : x("", !0),
            e.showPagination ? (i(), M(Tr, {
              key: 3,
              pagination: e.pagination,
              onButtonClick: n
            }, null, 8, ["pagination"])) : x("", !0)
          ])
        ])
      ]),
      _(Ee, {
        "enter-active-class": "po-transition po-duration-100 po-ease-out",
        "enter-from-class": "po-transform po-scale-95 po-opacity-0",
        "enter-to-class": "po-transform po-scale-100 po-opacity-100",
        "leave-active-class": "po-transition po-duration-75 po-ease-out",
        "leave-from-class": "po-transform po-scale-100 po-opacity-100",
        "leave-to-class": "po-transform po-scale-95 po-opacity-0"
      }, {
        default: A(() => [
          h(o) ? (i(), u("div", Jr, [
            J(r.$slots, "filters", {}, () => [
              Qr
            ])
          ])) : x("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), ei = { class: "table-responsive po-w-full" }, ti = { key: 1 }, oi = ["colspan"], li = { class: "po-py-10 po-block po-normal-case" }, ni = { key: 0 }, ai = {
  name: "PoTable"
}, q1 = /* @__PURE__ */ Object.assign(ai, {
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
    return (t, l) => (i(), u("table", ei, [
      s("thead", null, [
        s("tr", null, [
          (i(!0), u(R, null, H(e.thead, (o) => (i(), u("th", null, [
            J(t.$slots, "th", Gt(Kt(o)))
          ]))), 256))
        ])
      ]),
      s("tbody", null, [
        e.tbody !== null || e.tbody !== null && e.tbody.length !== 0 ? (i(!0), u(R, { key: 0 }, H(e.tbody, (o, n) => (i(), u("tr", null, [
          J(t.$slots, "td", Gt(Kt({ ...o, index: n, item: o })))
        ]))), 256)) : x("", !0),
        e.tbody == null || e.tbody !== null && e.tbody.length == 0 ? (i(), u("tr", ti, [
          s("td", {
            colspan: e.thead.length + 1,
            class: "po-text-center"
          }, [
            s("span", li, g(e.emptyMessage), 1)
          ], 8, oi)
        ])) : x("", !0)
      ]),
      t.$slots.tfoot ? (i(), u("tfoot", ni, [
        s("tr", null, [
          J(t.$slots, "tfoot")
        ])
      ])) : x("", !0)
    ]));
  }
}), si = ["onUpdate:modelValue", "id"], ri = ["for"], ii = { class: "table-responsive po-w-full" }, pi = ["onClick"], ui = { key: 0 }, ci = ["onClick"], di = {
  name: "PoDynamicTable",
  components: { ArrowsUpDownIcon: tl, ArrowUpIcon: el, ArrowDownIcon: Xo }
}, U1 = /* @__PURE__ */ Object.assign(di, {
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
    const t = e, l = $(t.columns), o = $(null), n = $(null), a = (c) => {
      c.hidden = !c.hidden, l.value = t.columns.filter((d) => !d.hidden);
    }, r = (c) => {
      c.sortable && (c.sorted && n.value === "asc" ? n.value = "desc" : n.value = "asc", l.value.forEach((d) => {
        d.key === c.key ? (d.sorted = !0, d.sortDirection = n.value) : (d.sorted = !1, d.sortDirection = null);
      }), o.value = c);
    }, p = $([]);
    return X(() => {
      o.value ? p.value = [...t.data].sort((c, d) => {
        let f = c[o.value.key], m = d[o.value.key];
        return typeof f == "string" && typeof m == "string" && (f = f.toLowerCase(), m = m.toLowerCase()), f < m ? n.value === "asc" ? -1 : 1 : f > m ? n.value === "asc" ? 1 : -1 : 0;
      }) : p.value = [...t.data];
    }), (c, d) => (i(), u("div", null, [
      (i(!0), u(R, null, H(l.value, (f) => (i(), u("div", null, [
        $t(s("input", {
          type: "checkbox",
          name: "",
          "onUpdate:modelValue": (m) => f.hidden = m,
          id: `hide-table-col-${f.label}`
        }, null, 8, si), [
          [yl, f.hidden]
        ]),
        s("label", {
          for: `hide-table-col-${f.label}`
        }, g(f.label), 9, ri)
      ]))), 256)),
      s("table", ii, [
        s("thead", null, [
          s("tr", null, [
            (i(!0), u(R, null, H(l.value, (f) => (i(), u("th", {
              key: f.key,
              onClick: (m) => r(f)
            }, [
              ne(g(f.label) + " " + g(f.sorted) + " " + g(f.sortDirection) + " ", 1),
              f.sortable ? (i(), u("span", ui, [
                f.sorted ? x("", !0) : (i(), M(h(tl), {
                  key: 0,
                  class: "po-w-4"
                })),
                f.sorted && f.sortDirection === "asc" ? (i(), M(h(el), {
                  key: 1,
                  class: "po-w-4"
                })) : x("", !0),
                f.sorted && f.sortDirection === "desc" ? (i(), M(h(Xo), {
                  key: 2,
                  class: "po-w-4"
                })) : x("", !0)
              ])) : x("", !0),
              f.hidable ? (i(), u("button", {
                key: 1,
                onClick: (m) => a(f)
              }, g(f.hidden ? "Show" : "Hide"), 9, ci)) : x("", !0)
            ], 8, pi))), 128))
          ])
        ]),
        s("tbody", null, [
          (i(!0), u(R, null, H(p.value, (f) => (i(), u("tr", {
            key: f.id
          }, [
            (i(!0), u(R, null, H(l.value, (m) => (i(), u("td", {
              key: m.key
            }, g(f[m.key]), 1))), 128))
          ]))), 128))
        ])
      ])
    ]));
  }
}), fi = { class: "" }, vi = { class: "po-grow" }, mi = ["onClick"], hi = {
  name: "PoDescriptionList"
}, al = /* @__PURE__ */ Object.assign(hi, {
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
    return (t, l) => (i(), u("div", null, [
      s("dl", {
        class: T([
          "po-description-list",
          { "po-divide-y po-divide-slate-200": !e.striped },
          { striped: e.striped }
        ])
      }, [
        J(t.$slots, "content", {}, () => [
          (i(!0), u(R, null, H(e.items, (o) => (i(), u("div", null, [
            s("dt", null, g(o.title), 1),
            s("dd", fi, [
              s("span", vi, g(o.description), 1),
              o.action !== void 0 ? (i(), u("span", {
                key: 0,
                class: "po-shrink-0 po-text-mpao-lightblue hover:po-text-mpao-blue po-transition-colors po-duration-100 po-ease-in-out po-px-2 po-cursor-pointer",
                onClick: (n) => t.$emit("button-click", o.action)
              }, g(o.action), 9, mi)) : x("", !0)
            ])
          ]))), 256))
        ])
      ], 2)
    ]));
  }
}), bi = ["for"], gi = { class: "po-capitalize" }, yi = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, xi = ["title"], Vi = ["type", "name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], wi = ["id"], ki = ["id"], $i = {
  name: "PoInputField"
}, G1 = /* @__PURE__ */ Object.assign($i, {
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
    function l() {
      return t.hasError ? "po-border-red-400 focus:po-border-red-600 focus:po-ring-red-600" : t.borderColor;
    }
    const { errorMessage: o } = we(t), n = $(o.value !== null);
    return Q(o, (a, r) => {
      n.value = o.value !== null && o.value !== "";
    }), (a, r) => (i(), u("div", {
      class: T(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      s("label", {
        for: e.id,
        class: T([
          "po-text-sm po-font-medium po-flex po-items-center po-space-x-1",
          { "po-text-red-500": n.value },
          { "po-text-slate-700": !n.value }
        ])
      }, [
        s("span", gi, g(e.label), 1),
        e.required ? (i(), u("span", yi, "*")) : x("", !0),
        e.info !== null ? (i(), u("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          _(h(ol), { class: "po-fill-current" })
        ], 8, xi)) : x("", !0)
      ], 10, bi),
      s("input", Le({
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
          l()
        ]
      }), null, 16, Vi),
      e.message !== null ? (i(), u("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, g(e.message), 9, wi)) : x("", !0),
      n.value && h(o) !== null ? (i(), u("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
        id: `${e.id}-error`
      }, [
        _(h(qt), { class: "po-fill-current po-w-4 po-mt-[0.2rem] po-shrink-0" }),
        s("span", null, g(h(o)), 1)
      ], 8, ki)) : x("", !0)
    ], 2));
  }
}), _i = { class: "po-text-sm po-font-medium po-text-slate-700 peer-focus:po-text-mpao-lightblue peer-invalid:po-text-red-500 peer-invalid:peer-focus:po-text-red-600 po-flex po-items-center po-space-x-1 po-capitalize" }, Ci = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Si = ["name", "id", "value"], Ei = ["for"], Oi = { class: "po-flex po-items-center po-space-x-1" }, Pi = /* @__PURE__ */ s("span", { class: "po-text-sm" }, "Choose file", -1), Li = ["id"], Ni = ["id"], Di = {
  name: "PoInputFile"
}, K1 = /* @__PURE__ */ Object.assign(Di, {
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
    return (t, l) => (i(), u("div", {
      class: T(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      s("span", _i, [
        s("span", null, g(e.label), 1),
        e.required ? (i(), u("span", Ci, "*")) : x("", !0)
      ]),
      s("input", {
        name: `${e.id}-upload`,
        id: `${e.id}-fileupload`,
        value: e.modelValue,
        type: "file",
        onInput: l[0] || (l[0] = (o) => t.$emit("update:modelValue", o.target.value)),
        class: "po-sr-only po-peer"
      }, null, 40, Si),
      s("label", {
        for: `${e.id}-fileupload`,
        class: "po-mt-1 po-block po-w-full po-border po-cursor-pointer po-rounded-md po-border-slate-300 po-bg-white peer-focus:po-border-mpao-lightblue invalid:po-border-red-400 invalid:focus:po-border-red-600 invalid:focus:po-ring-red-600 sm:po-text-sm po-p-2"
      }, [
        s("div", Oi, [
          _(h(xo), { class: "po-w-4 po-stroke-slate-500" }),
          Pi
        ])
      ], 8, Ei),
      e.message !== null ? (i(), u("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, g(e.message), 9, Li)) : x("", !0),
      e.errorMessage !== null ? (i(), u("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, g(e.errorMessage), 9, Ni)) : x("", !0)
    ], 2));
  }
}), Ti = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Ai = ["title"], ji = { class: "po-relative po-mt-1" }, Bi = ["id"], Ii = ["id"], Ri = {
  name: "PoSelectField"
}, W1 = /* @__PURE__ */ Object.assign(Ri, {
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
    const l = e, o = $(""), n = $(), a = C(
      () => o.value === "" ? l.list : l.list.filter((d) => d.name.toLowerCase().includes(o.value.toLowerCase()))
    );
    function r(d) {
      if (a.value) {
        let f = a.value.find((m) => m.id === d);
        return f == null ? void 0 : f.name;
      }
    }
    n.value = l.modelValue, go(() => {
      n.value = l.modelValue;
    }), Q(n, () => {
      t("update:modelValue", n.value), t("selected", n.value);
    });
    const { errorMessage: p } = we(l), c = $(p.value !== null);
    return Q(p, (d, f) => {
      c.value = p.value !== null && p.value !== "";
    }), (d, f) => (i(), M(h(Cn), {
      as: "div",
      modelValue: n.value,
      "onUpdate:modelValue": f[1] || (f[1] = (m) => n.value = m),
      class: T([{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }])
    }, {
      default: A(() => [
        _(h(Sn), {
          class: T([
            "po-text-sm po-font-medium po-flex po-items-center po-space-x-1",
            { "po-text-red-500": c.value },
            { "po-text-slate-700": !c.value }
          ])
        }, {
          default: A(() => [
            s("span", null, g(e.label), 1),
            e.required ? (i(), u("span", Ti, "*")) : x("", !0),
            e.info !== null ? (i(), u("abbr", {
              key: 1,
              title: e.info,
              class: "po-w-4 po-text-slate-500"
            }, [
              _(h(ol), { class: "po-fill-current" })
            ], 8, Ai)) : x("", !0)
          ]),
          _: 1
        }, 8, ["class"]),
        s("div", ji, [
          _(h(On), {
            class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm",
            onChange: f[0] || (f[0] = (m) => o.value = m.target.value),
            "display-value": r
          }),
          _(h(En), { class: "po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-rounded-r-md po-px-2 focus:po-outline-none" }, {
            default: A(() => [
              _(h(ks), {
                class: "po-h-5 po-w-5 po-text-slate-400",
                "aria-hidden": "true"
              })
            ]),
            _: 1
          }),
          h(a).length > 0 ? (i(), M(h(Pn), {
            key: 0,
            class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
          }, {
            default: A(() => [
              (i(!0), u(R, null, H(h(a), (m) => (i(), M(h(Ln), {
                key: m.id,
                value: m.id,
                as: "template"
              }, {
                default: A(({ active: y, selected: w }) => [
                  s("li", {
                    class: T([
                      "po-relative po-cursor-default po-select-none po-py-2 po-pl-3 po-pr-9",
                      y ? "po-bg-mpao-lightblue po-text-white" : "po-text-slate-900"
                    ])
                  }, [
                    s("span", {
                      class: T(["po-block po-truncate", w && "po-font-semibold"])
                    }, g(m.name), 3),
                    w ? (i(), u("span", {
                      key: 0,
                      class: T([
                        "po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-pr-4",
                        y ? "po-text-white" : "po-text-mpao-lightblue"
                      ])
                    }, [
                      _(h(ws), {
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
        ]),
        e.message !== null ? (i(), u("p", {
          key: 0,
          class: "po-mt-2 po-text-sm po-text-slate-500",
          id: `${d.id}-description`
        }, g(e.message), 9, Bi)) : x("", !0),
        c.value && h(p) !== null ? (i(), u("p", {
          key: 1,
          class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
          id: `${d.id}-error`
        }, [
          _(h(qt), { class: "po-fill-current po-w-4 po-mt-[0.2rem] po-shrink-0" }),
          s("span", null, g(h(p)), 1)
        ], 8, Ii)) : x("", !0)
      ]),
      _: 1
    }, 8, ["modelValue", "class"]));
  }
}), Mi = { class: "po-text-sm po-font-medium po-text-slate-700 po-cursor-pointer po-select-none po-flex po-items-center po-space-x-1" }, Fi = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, zi = {
  name: "PoToggle"
}, Y1 = /* @__PURE__ */ Object.assign(zi, {
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
    const l = $(e.modelValue);
    return (o, n) => (i(), M(h(oa), {
      as: "div",
      class: "po-flex po-items-center"
    }, {
      default: A(() => [
        _(h(la), {
          modelValue: l.value,
          "onUpdate:modelValue": n[0] || (n[0] = (a) => l.value = a),
          onClick: n[1] || (n[1] = (a) => o.$emit("update:modelValue", !l.value)),
          class: T([
            l.value ? "po-bg-mpao-lightblue" : "po-bg-slate-200",
            "po-relative po-inline-flex po-h-6 po-w-11 po-flex-shrink-0 po-cursor-pointer po-rounded-full po-border-2 po-border-transparent po-transition-colors po-duration-200 po-ease-in-out focus:po-outline-none focus:po-ring-2 focus:po-ring-mpao-lightblue focus:po-ring-offset-2"
          ])
        }, {
          default: A(() => [
            s("span", {
              "aria-hidden": "true",
              class: T([
                l.value ? "po-translate-x-5" : "po-translate-x-0",
                "po-pointer-events-none po-inline-block po-h-5 po-w-5 po-transform po-rounded-full po-bg-white po-shadow po-ring-0 po-transition po-duration-200 po-ease-in-out"
              ])
            }, null, 2)
          ]),
          _: 1
        }, 8, ["modelValue", "class"]),
        _(h(na), {
          as: "span",
          class: "po-ml-3"
        }, {
          default: A(() => [
            s("span", Mi, [
              s("span", null, g(e.label), 1),
              e.required ? (i(), u("span", Fi, "*")) : x("", !0)
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Hi = { class: "po-pt-1 po-space-y-1 po-border-r-2 po-border-slate-200 po-relative" }, qi = ["onClick"], Ui = {
  name: "PoSectionMenu"
}, Z1 = /* @__PURE__ */ Object.assign(Ui, {
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
    return (t, l) => (i(), u("ul", Hi, [
      (i(!0), u(R, null, H(e.menuItems, (o) => (i(), u("li", null, [
        s("span", {
          onClick: (n) => t.$emit("link-click", o.link),
          role: "button",
          class: T([
            "po-relative po-cursor-pointer -po-right-[0.15rem] po-py-1 po-border-r-2 hover:po-border-mpao-lightblue po-transition-colors po-duration-200 po-ease-in-out po-flex po-items-center po-space-x-2",
            {
              "po-border-mpao-lightblue po-text-sm po-text-mpao-lightblue": o.link == e.currPageRoute
            },
            {
              "po-border-slate-200 po-text-sm po-text-slate-600": o.link !== e.currPageRoute
            }
          ])
        }, [
          (i(), M(ve(o.icon), { class: "po-w-4 po-h-4 po-stroke-current" })),
          s("span", null, g(o.label), 1)
        ], 10, qi)
      ]))), 256))
    ]));
  }
}), Gi = { class: "po-relative po-flex po-items-start" }, Ki = { class: "po-flex po-h-5 po-items-center" }, Wi = ["name", "id", "checked", "disabled", "aria-describedby"], Yi = { class: "po-ml-3 po-text-sm" }, Zi = ["for"], Ji = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Qi = ["id"], Xi = { class: "po-sr-only" }, ep = ["id"], tp = {
  name: "PoCheckbox"
}, J1 = /* @__PURE__ */ Object.assign(tp, {
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
    return (t, l) => (i(), u("div", Gi, [
      s("div", Ki, [
        s("input", Le({
          name: `${e.id}-field`,
          id: e.id,
          checked: e.modelValue,
          disabled: e.disabled,
          "aria-describedby": `${e.id}-description`
        }, t.$attrs, {
          onInput: l[0] || (l[0] = (o) => t.$emit("update:modelValue", o.target.checked)),
          type: "checkbox",
          class: "po-h-4 po-w-4 po-rounded po-border-slate-300 po-text-mpao-lightblue focus:po-ring-mpao-lightblue"
        }), null, 16, Wi)
      ]),
      s("div", Yi, [
        s("label", {
          for: e.id,
          class: "po-font-medium po-text-slate-600 po-cursor-pointer po-select-none po-flex po-items-center po-space-x-1"
        }, [
          s("span", null, g(e.label), 1),
          e.required ? (i(), u("span", Ji, "*")) : x("", !0)
        ], 8, Zi),
        e.message ? (i(), u("span", {
          key: 0,
          id: `${e.id}-description`,
          class: "po-text-slate-500 po-cursor-default"
        }, [
          s("span", Xi, g(e.label), 1),
          ne(" " + g(e.message), 1)
        ], 8, Qi)) : x("", !0)
      ]),
      e.errorMessage !== null ? (i(), u("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, g(e.errorMessage), 9, ep)) : x("", !0)
    ]));
  }
}), op = { class: "po-grid po-gap-5 po-grid-cols-1 lg:po-grid-cols-2 po-px-6 lg:po-px-8 po-mt-10 po-pb-10" }, lp = { class: "po-flex po-items-start po-space-x-5" }, np = /* @__PURE__ */ s("img", {
  class: "po-h-10",
  src: "https://pension.gov.mv/asset/image/enlgish_website_logo.svg",
  alt: "Pension Office logo"
}, null, -1), ap = /* @__PURE__ */ s("p", { class: "-po-mt-1 po-text-xs po-text-slate-500" }, " 8th Floor, Allied Building , Chaandhanee Magu, Malé, 20156, Maldives ", -1), sp = { class: "po-mt-1 po-text-xs po-text-slate-500" }, rp = { class: "po-mt-1 po-text-xs po-text-slate-500 po-flex po-space-x-4" }, ip = {
  href: "https://www.pension.gov.mv",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue"
}, pp = /* @__PURE__ */ s("span", null, "www.pension.gov.mv", -1), up = {
  href: "mailto:info@pension.gov.mv",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue"
}, cp = /* @__PURE__ */ s("span", null, "info@pension.gov.mv", -1), dp = {
  href: "tel:1441",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue"
}, fp = /* @__PURE__ */ s("span", null, "1441", -1), vp = { class: "po-flex lg:po-items-end po-flex-col" }, mp = { class: "-po-mt-1 po-text-xs po-text-slate-500 po-flex po-space-x-4" }, hp = /* @__PURE__ */ s("a", {
  href: "",
  class: "hover:po-text-mpao-lightblue"
}, "Terms & Conditions", -1), bp = /* @__PURE__ */ s("a", {
  href: "",
  class: "hover:po-text-mpao-lightblue"
}, "Privacy Policy", -1), gp = /* @__PURE__ */ s("div", { class: "po-flex po-space-x-2 po-mt-3 lg:po-justify-end" }, [
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
], -1), yp = /* @__PURE__ */ s("div", {
  "aria-live": "assertive",
  class: "po-pointer-events-none po-fixed po-inset-0 po-flex po-items-start po-px-4 po-py-6 sm:po-p-6 po-z-50"
}, [
  /* @__PURE__ */ s("div", {
    class: "po-flex po-w-full po-flex-col po-items-end po-space-y-4 sm:po-items-end po-pt-[55px]",
    id: "po-notifications-alert"
  })
], -1), xp = {
  name: "PoFooter"
}, Q1 = /* @__PURE__ */ Object.assign(xp, {
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (l, o) => (i(), u("div", null, [
      s("section", op, [
        s("div", lp, [
          np,
          s("div", null, [
            ap,
            s("p", sp, " © " + g(new Date().getFullYear()) + " Pension Office, All Rights Reserved. ", 1),
            s("p", rp, [
              s("a", ip, [
                _(h(As), { class: "po-w-3 po-h-3 po-fill-current" }),
                pp
              ]),
              s("a", up, [
                _(h(Ds), { class: "po-w-3 po-h-3 po-fill-current" }),
                cp
              ]),
              s("a", dp, [
                _(h(js), { class: "po-w-3 po-h-3 po-fill-current" }),
                fp
              ])
            ])
          ])
        ]),
        s("div", vp, [
          s("nav", mp, [
            s("a", {
              href: "#",
              onClick: o[0] || (o[0] = re((n) => l.$emit("button-click", "changelog-button"), ["prevent"])),
              class: "hover:po-text-mpao-lightblue"
            }, "Change logs"),
            hp,
            bp
          ]),
          gp
        ])
      ]),
      yp
    ]));
  }
}), Vp = {
  key: 0,
  class: "po-flex po-items-start po-space-x-4 po-p-5 po-bg-red-100 po-rounded-md po-mt-5"
}, wp = { class: "po-text-base po-font-medium po-text-red-700" }, kp = { class: "po-text-sm po-text-red-800 po-list-disc po-ml-5 po-mt-2" }, $p = {
  key: 1,
  class: "po-flex po-items-start po-space-x-4 po-p-5 po-bg-green-100 po-rounded-md po-mt-5"
}, _p = { class: "po-text-base po-font-medium po-text-green-700" }, Cp = {
  name: "PoFormStatusMessage"
}, X1 = /* @__PURE__ */ Object.assign(Cp, {
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
    return (t, l) => e.isError ? (i(), u("div", Vp, [
      _(h(mt), { class: "po-w-8 po-stroke-red-600 po-stroke-2" }),
      s("div", null, [
        s("span", wp, g(e.message), 1),
        s("ul", kp, [
          (i(!0), u(R, null, H(e.errorList, (o) => (i(), u("li", null, g(o), 1))), 256))
        ])
      ])
    ])) : (i(), u("div", $p, [
      _(h(Nl), { class: "po-w-8 po-stroke-green-600 po-stroke-2" }),
      s("div", null, [
        s("span", _p, g(e.message), 1)
      ])
    ]));
  }
}), Sp = { class: "po-bg-white po-relative po-group po-rounded-xl focus-within:po-ring-2 focus-within:po-ring-inset focus-within:po-ring-indigo-500" }, Ep = { class: "po-block po-p-4 po-transition-colors po-duration-75 po-ease-linear" }, Op = { class: "po-flex po-items-start po-space-x-2" }, Pp = { class: "po-flex po-items-start po-space-x-1" }, Lp = { class: "po-block po-text-2xl po-font-light po-text-slate-600" }, Np = {
  key: 0,
  class: "po-text-sm po-text-green-500 po-font-medium po-pt-1"
}, Dp = { class: "po-text-sm po-tracking-wide po-text-slate-500" }, Tp = {
  name: "PoStatsBlock"
}, e0 = /* @__PURE__ */ Object.assign(Tp, {
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
    return (t, l) => (i(), u("div", {
      class: T(["po-grid po-gap-5", e.numberOfCols])
    }, [
      (i(!0), u(R, null, H(e.items, (o) => (i(), u("div", Sp, [
        s("span", Ep, [
          s("div", Op, [
            s("div", null, [
              s("span", {
                class: T([
                  "po-inline-flex po-p-2 po-rounded-md",
                  o.bgColor,
                  o.iconColor
                ])
              }, [
                (i(), M(ve(o.icon), { class: "po-w-4 po-h-4" }))
              ], 2)
            ]),
            s("div", null, [
              s("div", Pp, [
                s("span", Lp, g(o.value), 1),
                o.diff ? (i(), u("span", Np, g(o.diff), 1)) : x("", !0)
              ]),
              s("h4", Dp, g(o.label), 1)
            ])
          ])
        ])
      ]))), 256))
    ], 2));
  }
}), Ap = {
  key: 0,
  class: "po-flex po-space-x-3 po-items-start"
}, jp = { class: "po-flex po-items-center po-space-x-2" }, Bp = ["datetime"], Ip = { class: "po-text-sm po-font-medium po-text-slate-600" }, Rp = ["datetime"], Mp = { class: "flex" }, Fp = { class: "po-flex po-pt-3 po-flex-wrap po-max-w-sm" }, zp = ["onClick"], Hp = {
  key: 1,
  class: "po-w-full po-text-center"
}, qp = { class: "po-inline-block po-text-sm po-italic po-text-slate-500" }, Up = /* @__PURE__ */ s("span", { class: "po-text-lg po-text-slate-300 po-px-3 po-inline-block" }, "—", -1), Gp = ["datetime"], Kp = {
  name: "PoChatLogItem"
}, t0 = /* @__PURE__ */ Object.assign(Kp, {
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
    return (t, l) => (i(), u("li", {
      class: T([
        "po-flex po-px-5",
        { "po-justify-end po-items-end po-flex-col": e.item.type === "first" }
      ])
    }, [
      e.item.type !== "message" ? (i(), u("div", Ap, [
        e.item.type !== "first" && e.item.avatar !== "" ? (i(), u("div", {
          key: 0,
          class: "po-shrink-0 po-w-8 po-h-8 po-rounded-full po-p-1 po-bg-contain po-bg-slate-100",
          style: xl({ "background-image": `url(${e.item.avatar})` })
        }, null, 4)) : x("", !0),
        s("div", {
          class: T([
            { "po-pt-1": e.item.type !== "first" },
            {
              "po-flex po-justify-end po-items-end po-flex-col": e.item.type === "first"
            }
          ])
        }, [
          s("span", jp, [
            e.item.type === "first" ? (i(), u("time", {
              key: 0,
              datetime: e.item.time,
              class: "po-text-xs po-text-slate-400"
            }, g(e.item.time_human), 9, Bp)) : x("", !0),
            s("span", Ip, g(e.item.name), 1),
            e.item.type === "second" ? (i(), u("time", {
              key: 1,
              datetime: e.item.time,
              class: "po-text-xs po-text-slate-400"
            }, g(e.item.time_human), 9, Rp)) : x("", !0)
          ]),
          s("div", {
            class: T([
              "po-mt-2 po-space-y-1",
              {
                "po-flex po-justify-end po-items-end po-flex-col": e.item.type === "first"
              }
            ])
          }, [
            J(t.$slots, "message", {}, () => [
              (i(!0), u(R, null, H(e.item.message, (o) => (i(), u("div", Mp, [
                s("p", {
                  class: T([
                    "po-text-sm po-rounded-xl po-px-4 po-py-2",
                    {
                      "po-bg-slate-100 po-text-slate-600": e.item.type !== "first"
                    },
                    {
                      "po-bg-mpao-lightblue po-text-sky-50": e.item.type === "first"
                    }
                  ])
                }, g(o), 3)
              ]))), 256))
            ]),
            s("div", Fp, [
              (i(!0), u(R, null, H(e.item.actions, (o) => (i(), u("button", {
                onClick: (n) => t.$emit("button-click", o.label),
                class: "po-appearance-none po-border po-border-mpao-lightblue po-bg-white hover:po-bg-mpao-lightblue po-px-3 po-py-1 po-mb-2 po-mr-2 po-rounded-lg po-text-slate-500 hover:po-text-sky-100 po-transition-colors po-duration-150 po-ease-in-out po-text-sm po-ring-0 po-outline-none"
              }, g(o.label), 9, zp))), 256))
            ])
          ], 2)
        ], 2)
      ])) : x("", !0),
      e.item.type === "message" ? (i(), u("div", Hp, [
        (i(!0), u(R, null, H(e.item.message, (o) => (i(), u("p", qp, [
          ne(g(o) + " ", 1),
          Up,
          s("time", {
            datetime: e.item.time,
            class: "po-text-xs po-text-slate-400 po-inline-block"
          }, g(e.item.time_human), 9, Gp)
        ]))), 256))
      ])) : x("", !0)
    ], 2));
  }
}), Wp = {
  key: 0,
  class: "po-pointer-events-auto po-w-full po-max-w-sm po-overflow-hidden po-rounded-lg po-bg-mpao-lightblue po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5"
}, Yp = { class: "po-p-4" }, Zp = { class: "po-flex po-items-start" }, Jp = { class: "po-flex-shrink-0" }, Qp = { class: "po-ml-3 po-w-0 po-flex-1 po-pt-0.5" }, Xp = { class: "po-text-sm po-font-medium po-text-sky-100" }, eu = { class: "po-mt-1 po-text-sm po-text-sky-300" }, tu = { class: "po-mt-3 po-flex po-space-x-4" }, ou = { class: "po-ml-4 po-flex po-flex-shrink-0" }, lu = /* @__PURE__ */ s("span", { class: "po-sr-only" }, "Close", -1), nu = {
  name: "PoNotification"
}, o0 = /* @__PURE__ */ Object.assign(nu, {
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
    const l = e, { show: o } = we(l), n = $(!1);
    Q(o, () => {
      n.value = !1, setTimeout(() => {
        n.value = !0;
      }, 100);
    });
    const a = $(!1);
    return Q(n, () => {
      a.value = !1, setTimeout(() => {
        a.value = !0;
      }, 200);
    }), (r, p) => n.value ? (i(), M(_t, {
      key: 0,
      to: "#po-notifications-alert"
    }, [
      _(Ee, {
        "enter-active-class": "po-transform po-ease-out po-duration-300 po-transition",
        "enter-from-class": "po-translate-y-2 po-opacity-0 sm:po-translate-y-0 sm:po-translate-x-2",
        "enter-to-class": "po-translate-y-0 po-opacity-100 sm:po-translate-x-0",
        "leave-active-class": "po-transition po-ease-in po-duration-100",
        "leave-from-class": "po-opacity-100",
        "leave-to-class": "po-opacity-0"
      }, {
        default: A(() => [
          a.value ? (i(), u("div", Wp, [
            s("div", Yp, [
              s("div", Zp, [
                s("div", Jp, [
                  J(r.$slots, "icon")
                ]),
                s("div", Qp, [
                  s("p", Xp, g(e.label), 1),
                  s("p", eu, g(e.text), 1),
                  s("div", tu, [
                    s("button", {
                      onClick: p[0] || (p[0] = (c) => r.$emit("button-click", e.buttonLabel)),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-100 hover:po-text-sky-200 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, g(e.buttonLabel), 1),
                    s("button", {
                      onClick: p[1] || (p[1] = (c) => n.value = !1),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-300 hover:po-text-sky-500 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, " Dismiss ")
                  ])
                ]),
                s("div", ou, [
                  s("button", {
                    type: "button",
                    onClick: p[2] || (p[2] = (c) => n.value = !1),
                    class: "po-inline-flex po-rounded-md po-bg-mpao-lightblue po-text-sky-500 hover:po-text-sky-300 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                  }, [
                    lu,
                    _(h(ll), {
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
}), au = /* @__PURE__ */ s("div", { class: "po-fixed po-inset-0" }, null, -1), su = { class: "po-absolute po-inset-0 po-overflow-hidden" }, ru = { class: "po-pointer-events-none po-fixed po-inset-y-0 po-right-0 po-flex po-max-w-full po-pl-10" }, iu = { class: "po-flex po-h-full po-flex-col po-overflow-y-scroll po-bg-white po-shadow-xl" }, pu = { class: "po-bg-slate-50 po-py-6 po-px-4 sm:po-px-6" }, uu = { class: "po-flex po-items-center po-justify-between" }, cu = { class: "po-ml-3 po-flex po-h-7 po-items-center" }, du = /* @__PURE__ */ s("span", { class: "po-sr-only" }, "Close panel", -1), fu = {
  key: 0,
  class: "po-mt-1"
}, vu = { class: "po-text-sm po-text-slate-500" }, mu = {
  key: 0,
  class: "po-bg-slate-50 po-rounded-b-xl po-shrink-0"
}, hu = {
  name: "PoSlideover"
}, l0 = /* @__PURE__ */ Object.assign(hu, {
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
    const l = e, { show: o } = we(l), n = $(!1);
    Q(o, () => {
      n.value = o.value;
    });
    function a() {
      n.value = !1, t("slideover-closed", !0);
    }
    return (r, p) => (i(), M(h(Fe), {
      as: "template",
      show: n.value
    }, {
      default: A(() => [
        _(h(ot), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: a
        }, {
          default: A(() => [
            au,
            s("div", {
              class: T(["po-fixed po-inset-0 po-overflow-hidden po-bg-black", e.screenOpacity])
            }, [
              s("div", su, [
                s("div", ru, [
                  _(h(Oe), {
                    as: "template",
                    enter: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "enter-from": "po-translate-x-full",
                    "enter-to": "po-translate-x-0",
                    leave: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "leave-from": "po-translate-x-0",
                    "leave-to": "po-translate-x-full"
                  }, {
                    default: A(() => [
                      _(h(lt), {
                        class: T([e.maxWidth, "po-pointer-events-auto po-w-screen"])
                      }, {
                        default: A(() => [
                          s("div", iu, [
                            s("div", pu, [
                              s("div", uu, [
                                _(h(Bo), { class: "po-text-lg po-font-medium po-text-slate-600" }, {
                                  default: A(() => [
                                    ne(g(e.label), 1)
                                  ]),
                                  _: 1
                                }),
                                s("div", cu, [
                                  s("button", {
                                    type: "button",
                                    class: "po-rounded-md po-text-slate-500 hover:po-text-mpao-lightblue focus:po-outline-none focus:po-ring-2 focus:po-ring-white",
                                    onClick: a
                                  }, [
                                    du,
                                    _(h(Vo), {
                                      class: "po-h-6 po-w-6",
                                      "aria-hidden": "true"
                                    })
                                  ])
                                ])
                              ]),
                              e.description ? (i(), u("div", fu, [
                                s("p", vu, g(e.description), 1)
                              ])) : x("", !0)
                            ]),
                            s("div", {
                              class: T([e.bgColor, "po-relative po-grow po-pt-6 po-px-4 sm:po-px-6"])
                            }, [
                              J(r.$slots, "content")
                            ], 2),
                            r.$slots.footer ? (i(), u("div", mu, [
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
}), bu = /* @__PURE__ */ s("div", { class: "po-fixed po-inset-0 po-bg-gray-500 po-bg-opacity-25 po-transition-opacity" }, null, -1), gu = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto po-p-4 sm:po-p-6 md:po-p-20" }, yu = { class: "po-relative" }, xu = {
  key: 0,
  class: "po-max-h-96 scroll-py-3 po-overflow-y-auto po-p-3"
}, Vu = {
  name: "PoCommandPalette"
}, n0 = /* @__PURE__ */ Object.assign(Vu, {
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
    const t = e, l = $(""), { show: o } = we(t), n = $(!1);
    Q(o, () => {
      n.value = !1, setTimeout(() => {
        n.value = !0;
      }, 100);
    });
    function a(r) {
      r.ctrlKey && r.key === "b" && (n.value = !0);
    }
    return K(() => {
      window.addEventListener("keyup", a);
    }), yo(() => {
      window.removeEventListener("keyup", a);
    }), (r, p) => (i(), M(h(Fe), {
      show: n.value,
      as: "template",
      onAfterLeave: p[2] || (p[2] = (c) => l.value = ""),
      appear: ""
    }, {
      default: A(() => [
        _(h(ot), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: p[1] || (p[1] = (c) => n.value = !1)
        }, {
          default: A(() => [
            _(h(Oe), {
              as: "template",
              enter: "po-ease-out po-duration-300",
              "enter-from": "po-opacity-0",
              "enter-to": "po-opacity-100",
              leave: "po-ease-in po-duration-200",
              "leave-from": "po-opacity-100",
              "leave-to": "po-opacity-0"
            }, {
              default: A(() => [
                bu
              ]),
              _: 1
            }),
            s("div", gu, [
              _(h(Oe), {
                as: "template",
                enter: "po-ease-out po-duration-300",
                "enter-from": "po-opacity-0 po-scale-95",
                "enter-to": "po-opacity-100 po-scale-100",
                leave: "po-ease-in po-duration-200",
                "leave-from": "po-opacity-100 po-scale-100",
                "leave-to": "po-opacity-0 po-scale-95"
              }, {
                default: A(() => [
                  _(h(lt), { class: "po-mx-auto po-max-w-xl po-transform po-divide-y po-divide-gray-100 po-overflow-hidden po-rounded-xl po-bg-white po-shadow-2xl po-ring-1 po-ring-black po-ring-opacity-5 po-transition-all" }, {
                    default: A(() => [
                      s("div", yu, [
                        _(h($s), {
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
                      e.showContent ? (i(), u("div", xu, [
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
}), wu = /* @__PURE__ */ s("div", { class: "po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity" }, null, -1), ku = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto" }, $u = { class: "po-flex po-min-h-full po-items-start po-justify-center po-p-4 po-text-center sm:po-p-0" }, _u = { class: "po-p-5" }, Cu = { class: "po-text-center po-space-y-3" }, Su = { key: 1 }, Eu = { class: "po-text-sm po-text-gray-600" }, Ou = { class: "po-border-t po-border-slate-200 po-flex po-divide-x po-divide-slate-200" }, Pu = {
  name: "PoAlert"
}, a0 = /* @__PURE__ */ Object.assign(Pu, {
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
    const l = e, { show: o } = we(l), n = $(!1);
    Q(o, () => {
      n.value = o.value;
    });
    function a() {
      n.value = !1, t("alert-closed", !0);
    }
    return (r, p) => (i(), M(h(Fe), {
      as: "template",
      show: n.value
    }, {
      default: A(() => [
        _(h(ot), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: a
        }, {
          default: A(() => [
            _(h(Oe), {
              as: "template",
              enter: "po-ease-out po-duration-300",
              "enter-from": "po-opacity-0",
              "enter-to": "po-opacity-100",
              leave: "po-ease-in po-duration-200",
              "leave-from": "po-opacity-100",
              "leave-to": "po-opacity-0"
            }, {
              default: A(() => [
                wu
              ]),
              _: 1
            }),
            s("div", ku, [
              s("div", $u, [
                _(h(Oe), {
                  as: "template",
                  enter: "po-ease-out po-duration-300",
                  "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                  "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                  leave: "po-ease-in po-duration-200",
                  "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                  "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                }, {
                  default: A(() => [
                    _(h(lt), { class: "po-relative po-transform po-overflow-hidden po-rounded-lg po-bg-white po-text-left po-shadow-xl po-transition-all sm:po-my-8 sm:po-w-full sm:po-max-w-sm" }, {
                      default: A(() => [
                        s("div", _u, [
                          s("div", Cu, [
                            e.alertTitle !== "" ? (i(), M(h(Bo), {
                              key: 0,
                              as: "h3",
                              class: "po-text-lg po-font-medium po-leading-6 po-text-gray-900"
                            }, {
                              default: A(() => [
                                ne(g(e.alertTitle), 1)
                              ]),
                              _: 1
                            })) : x("", !0),
                            e.alertDescription !== "" ? (i(), u("div", Su, [
                              s("p", Eu, g(e.alertDescription), 1)
                            ])) : x("", !0)
                          ])
                        ]),
                        s("div", Ou, [
                          s("button", {
                            onClick: a,
                            class: "po-text-sm po-bg-white po-text-slate-500 hover:po-bg-slate-50 po-transition-colors po-duration-100 po-ease-out po-font-medium po-py-3 po-px-5 po-w-1/2 focus:po-ring-0"
                          }, g(e.cancelBtnLabel), 1),
                          s("button", {
                            onClick: p[0] || (p[0] = (c) => {
                              r.$emit("button-click", "ok"), a();
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
}), Lu = {
  key: 0,
  class: "po-col-span-2 po-relative po-mt-5"
}, Nu = /* @__PURE__ */ s("span", {
  class: "po-absolute po-top-0 po-left-1 po--ml-px po-h-[calc(100%-7px)] po-w-0.5 po-bg-gray-200",
  "aria-hidden": "true"
}, null, -1), Du = { class: "po-relative po-space-y-5" }, Tu = { class: "po-flex po-space-x-2 po-items-start" }, Au = { class: "log-item" }, ju = { key: 0 }, Bu = {
  key: 0,
  class: "po-text-slate-500 po-text-xs"
}, Iu = {
  key: 1,
  class: "po-text-center po-py-10"
}, Ru = { class: "po-text-sm po-text-slate-500" }, Mu = {
  name: "PoLogs"
}, s0 = /* @__PURE__ */ Object.assign(Mu, {
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
    return (t, l) => (i(), u("div", null, [
      e.items && e.items.length > 0 ? (i(), u("div", Lu, [
        Nu,
        s("div", Du, [
          (i(!0), u(R, null, H(e.items, (o, n) => (i(), u("div", Tu, [
            s("p", {
              class: T([
                "po-rounded-full po-w-2 po-h-2 border-1 po-border-white po-shrink-0",
                { "po-bg-mpao-orange": n !== e.items.length - 1 },
                ,
                { "po-bg-slate-400": n == e.items.length - 1 }
              ])
            }, null, 2),
            s("div", Au, [
              s("span", null, [
                ne(g(o.label) + " on " + g(o.date) + " " + g(o.by && o.by !== "" ? "by" : "") + " ", 1),
                o.by && o.by !== "" ? (i(), u("span", ju, g(o.by), 1)) : x("", !0)
              ]),
              o.description && o.description !== "" ? (i(), u("blockquote", Bu, ' "' + g(o.description) + '" ', 1)) : x("", !0)
            ])
          ]))), 256))
        ])
      ])) : (i(), u("div", Iu, [
        s("span", Ru, g(e.emptyLabel), 1)
      ]))
    ]));
  }
}), Fu = {
  key: 0,
  role: "list",
  class: "po-divide-y po-divide-gray-200 po-rounded-md po-border po-border-gray-200 po-mt-5"
}, zu = { class: "po-flex po-items-center po-justify-between po-py-3 po-pl-3 po-pr-4 po-text-sm" }, Hu = { class: "po-flex po-w-0 po-flex-1 po-items-center" }, qu = { class: "po-ml-2 po-w-0 po-flex-1 po-truncate" }, Uu = { class: "po-ml-4 po-flex-shrink-0 po-space-x-4" }, Gu = ["onClick"], Ku = ["onClick"], Wu = {
  key: 1,
  class: "po-py-10"
}, Yu = { class: "po-text-sm po-text-slate-500" }, Zu = {
  name: "PoDownloadFileList"
}, r0 = /* @__PURE__ */ Object.assign(Zu, {
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
    return (l, o) => (i(), u("div", null, [
      e.files && e.files.length > 0 ? (i(), u("ul", Fu, [
        (i(!0), u(R, null, H(e.files, (n) => (i(), u("li", zu, [
          s("div", Hu, [
            _(h(xo), {
              class: "po-h-5 po-w-5 po-flex-shrink-0 po-text-gray-400",
              "aria-hidden": "true"
            }),
            s("span", qu, g(n.label), 1)
          ]),
          s("div", Uu, [
            s("a", {
              href: "#",
              onClick: re((a) => l.$emit("button-click", n), ["prevent"]),
              class: "po-font-medium po-text-mpao-lightblue hover:po-text-indigo-500"
            }, g(e.linkLabel), 9, Gu),
            e.showViewBtn ? (i(), u("a", {
              key: 0,
              href: "#",
              onClick: re((a) => l.$emit("view-click", n), ["prevent"]),
              class: "po-font-medium po-text-mpao-lightblue hover:po-text-indigo-500"
            }, g(e.viewBtnLabel), 9, Ku)) : x("", !0)
          ])
        ]))), 256))
      ])) : (i(), u("div", Wu, [
        s("span", Yu, g(e.emptyLabel), 1)
      ]))
    ]));
  }
}), sl = (e, t) => {
  const l = e.__vccOpts || e;
  for (const [o, n] of t)
    l[o] = n;
  return l;
}, Ju = {
  name: "PoContentArea"
}, Qu = { class: "shell-content--area po-max-w-[1370px]" };
function Xu(e, t, l, o, n, a) {
  return i(), u("section", Qu, [
    J(e.$slots, "default")
  ]);
}
const i0 = /* @__PURE__ */ sl(Ju, [["render", Xu]]), ec = {
  name: "AnimatedLogo"
}, tc = /* @__PURE__ */ Vl('<div><svg class="po-stroke-mpao-blue po-w-16 animated-logo" viewBox="0 0 62 55" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.76292 17.8572L7.7 17.9704V18.0682C6.87397 19.526 6.23618 20.649 5.58241 21.4779C4.93472 22.299 4.30505 22.7864 3.51417 23.0053C3.46261 23.0112 3.41718 23.0206 3.39088 23.026C3.35663 23.0331 3.31491 23.0425 3.27694 23.0511C3.25988 23.055 3.24357 23.0587 3.22903 23.0619C3.1106 23.0882 3.03712 23.1 3 23.1H2.93844L2.89561 23.1107L15.9876 0.600006H19.1308C17.2397 1.92747 16.1556 3.83665 15.5371 5.73245C14.8359 7.88203 14.7198 10.0514 14.7027 11.4258C13.1737 11.6033 11.0729 12.4434 9.38038 15.128C8.77075 16.0431 8.26353 16.9561 7.76713 17.8496L7.76292 17.8572Z"></path><path d="M48.1818 11.3241C48.047 8.39742 47.5389 6.05982 46.5472 4.07639C45.8153 2.61266 44.8203 1.39271 43.5945 0.5H46.8113L59.8583 23.0959C59.8303 23.0912 59.7891 23.0819 59.7213 23.0649C59.7166 23.0638 59.7117 23.0625 59.7066 23.0612C59.6302 23.042 59.5099 23.0118 59.3765 23.0027C58.59 22.7825 57.9627 22.2958 57.3176 21.4779C56.6586 20.6423 56.0158 19.508 55.1801 18.0331L55.1413 17.9647C54.8861 17.4553 54.6068 16.973 54.3362 16.5054L54.3327 16.4995C54.0565 16.0225 53.7893 15.5605 53.5472 15.0764L53.5333 15.0485L53.516 15.0226C51.7283 12.3411 49.7115 11.4988 48.1818 11.3241Z"></path><path d="M9.28397 39.6773C11.0717 42.3589 13.0885 43.2011 14.6182 43.3759C14.753 46.3026 15.2611 48.6402 16.2528 50.6236C16.9991 52.1163 17.9653 53.2992 19.1863 54.2H15.7881L2.74125 31.699C2.76073 31.6996 2.78031 31.7 2.8 31.7C2.89335 31.7 2.97474 31.7149 3.07903 31.7381C3.08854 31.7402 3.09897 31.7426 3.11023 31.7452C3.18647 31.7626 3.30082 31.7888 3.42319 31.7972C4.20888 32.0178 4.86081 32.5271 5.52047 33.3603C6.20216 34.2214 6.85697 35.382 7.66164 36.8405C8.26116 37.9396 8.76739 38.8512 9.276 39.665L9.27989 39.6712L9.28397 39.6773Z"></path><path d="M55.124 36.865L55.1331 36.8504L55.1412 36.8353C55.9431 35.3316 56.5997 34.1683 57.2697 33.307C57.9146 32.4778 58.5471 31.9616 59.2949 31.6961C59.4179 31.6866 59.5418 31.6616 59.6287 31.6442C59.6354 31.6428 59.6418 31.6415 59.6481 31.6403C59.719 31.6261 59.772 31.616 59.8123 31.6095L46.8115 54.1H43.8753C45.7283 52.7465 46.7867 50.8277 47.3889 48.9394C48.064 46.8226 48.1795 44.7058 48.1971 43.3742C49.7262 43.1967 51.8271 42.3567 53.5196 39.6719C53.8327 39.2016 54.1164 38.6849 54.3777 38.1995C54.4112 38.1375 54.4442 38.076 54.4768 38.0152C54.7049 37.5906 54.9148 37.1996 55.124 36.865Z"></path><path d="M32.2763 51.5708L32.2653 51.5582L32.2536 51.5465C32.0661 51.359 31.7413 51.2 31.4 51.2C31.3949 51.2 31.3894 51.2 31.3835 51.2C31.2956 51.1998 31.1323 51.1993 30.9751 51.2442C30.7932 51.2962 30.6132 51.4082 30.4904 51.6086C29.1941 53.0706 27.544 53.8 25.5 53.8C22.8209 53.8 20.828 52.9218 19.4532 51.2005C18.1148 49.5247 17.3123 46.988 17.1201 43.5109C18.6883 43.1579 19.8601 42.2673 20.5004 41.6896C20.5136 44.8271 20.8579 46.8152 21.6737 48.0181C22.5558 49.319 23.9045 49.6 25.5 49.6C27.4335 49.6 28.5187 48.2893 29.0946 46.9901C29.6604 45.7138 29.7966 44.3347 29.7999 43.8193C29.8943 42.5846 30.6602 41.8 31.5 41.8H31.5778C32.4558 41.8842 33.2 42.7102 33.2 43.9C33.2 45.6119 33.5619 47.0065 34.2986 47.9982C35.0485 49.0077 36.1459 49.544 37.4792 49.5996L37.4896 49.6H37.5C39.2304 49.6 40.5973 49.3258 41.4454 48.0081C41.849 47.3811 42.1078 46.5565 42.2692 45.5056C42.4311 44.4518 42.5 43.1353 42.5 41.5V24.4455L45.9 21.8182V41.5C45.9 41.4958 45.8996 41.5001 45.8978 41.519C45.8959 41.5381 45.8927 41.5719 45.887 41.6267L45.8842 41.6541C45.8752 41.7406 45.8636 41.8524 45.8521 41.9797C45.8264 42.2614 45.8 42.6283 45.8 43V43.9V43.9029V43.9059V43.9088V43.9117V43.9146V43.9175V43.9205V43.9234V43.9263V43.9292V43.9321V43.935V43.9379V43.9408V43.9437V43.9466V43.9495V43.9524V43.9553V43.9581V43.961V43.9639V43.9668V43.9696V43.9725V43.9754V43.9783V43.9811V43.984V43.9868V43.9897V43.9926V43.9954V43.9983V44.0011V44.004V44.0068V44.0096V44.0125V44.0153V44.0181V44.021V44.0238V44.0266V44.0295V44.0323V44.0351V44.0379V44.0407V44.0435V44.0463V44.0492V44.052V44.0548V44.0576V44.0603V44.0631V44.0659V44.0687V44.0715V44.0743V44.0771V44.0798V44.0826V44.0854V44.0882V44.0909V44.0937V44.0965V44.0992V44.102V44.1047V44.1075V44.1102V44.113V44.1157V44.1185V44.1212V44.1239V44.1267V44.1294V44.1321V44.1349V44.1376V44.1403V44.143V44.1457V44.1484V44.1512V44.1539V44.1566V44.1593V44.162V44.1647V44.1674V44.17V44.1727V44.1754V44.1781V44.1808V44.1835V44.1861V44.1888V44.1915V44.1941V44.1968V44.1995V44.2021V44.2048V44.2074V44.2101V44.2127V44.2154V44.218V44.2207V44.2233V44.2259V44.2285V44.2312V44.2338V44.2364V44.239V44.2417V44.2443V44.2469V44.2495V44.2521V44.2547V44.2573V44.2599V44.2625V44.2651V44.2677V44.2702V44.2728V44.2754V44.278V44.2806V44.2831V44.2857V44.2882V44.2908V44.2934V44.2959V44.2985V44.301V44.3036V44.3061V44.3087V44.3112V44.3137V44.3163V44.3188V44.3213V44.3238V44.3264V44.3289V44.3314V44.3339V44.3364V44.3389V44.3414V44.3439V44.3464V44.3489V44.3514V44.3539V44.3564V44.3588V44.3613V44.3638V44.3663V44.3687V44.3712V44.3737V44.3761V44.3786V44.381V44.3835V44.3859V44.3884V44.3908V44.3932V44.3957V44.3981V44.4005V44.403V44.4054V44.4078V44.4102V44.4126V44.415V44.4174V44.4199V44.4223V44.4247V44.427V44.4294V44.4318V44.4342V44.4366V44.439V44.4413V44.4437V44.4461V44.4484V44.4508V44.4532V44.4555V44.4579V44.4602V44.4626V44.4649V44.4672V44.4696V44.4719V44.4742V44.4766V44.4789V44.4812V44.4835V44.4858V44.4882V44.4905V44.4928V44.4951V44.4974V44.4997V44.5019V44.5042V44.5065V44.5088V44.5111V44.5133V44.5156V44.5179V44.5201V44.5224V44.5247V44.5269V44.5292V44.5314V44.5337V44.5359V44.5381V44.5404V44.5426V44.5448V44.547V44.5493V44.5515V44.5537V44.5559V44.5581V44.5603V44.5625V44.5647V44.5669V44.5691V44.5713V44.5734V44.5756V44.5778V44.58V44.5821V44.5843V44.5865V44.5886V44.5908V44.5929V44.5951V44.5972V44.5994V44.6015V44.6036V44.6058V44.6079V44.61V44.6121V44.6142V44.6164V44.6185V44.6206V44.6227V44.6248V44.6269V44.6289V44.631V44.6331V44.6352V44.6373V44.6393V44.6414V44.6435V44.6455V44.6476V44.6497V44.6517V44.6538V44.6558V44.6578V44.6599V44.6619V44.6639V44.666V44.668V44.67V44.672V44.674V44.676V44.678V44.68V44.682V44.684V44.686V44.688V44.69V44.692V44.6939V44.6959V44.6979V44.6998V44.7018V44.7037V44.7057V44.7076V44.7096V44.7115V44.7135V44.7154V44.7173V44.7193V44.7212V44.7231V44.725V44.7269V44.7288V44.7307V44.7326V44.7345V44.7364V44.7383V44.7402V44.7421V44.7439V44.7458V44.7477V44.7495V44.7514V44.7533V44.7551V44.757V44.7588V44.7606V44.7625V44.7643V44.7661V44.768V44.7698V44.7716V44.7734V44.7752V44.777V44.7788V44.7806V44.7824V44.7842V44.786V44.7878V44.7896V44.7914V44.7931V44.7949V44.7967V44.7984V44.8002V44.8019V44.8037V44.8054V44.8071V44.8089V44.8106V44.8123V44.8141V44.8158V44.8175V44.8192V44.8209V44.8226V44.8243V44.826V44.8277V44.8294V44.8311V44.8328V44.8344V44.8361V44.8378V44.8394V44.8411V44.8427V44.8444V44.846V44.8477V44.8493V44.851V44.8526V44.8542V44.8558V44.8575V44.8591V44.8607V44.8623V44.8639V44.8655V44.8671V44.8687V44.8702V44.8718V44.8734V44.875V44.8765V44.8781V44.8797V44.8812V44.8828V44.8843V44.8859V44.8874V44.8889V44.8905V44.892V44.8935V44.895V44.8965V44.898V44.8996V44.9011V44.9025V44.904V44.9055V44.907V44.9085V44.91V44.9114V44.9129V44.9144V44.9158V44.9173V44.9187V44.9202V44.9216V44.923V44.9245V44.9259V44.9273V44.9288V44.9302V44.9316V44.933V44.9344V44.9358V44.9372V44.9386V44.9399V44.9413V44.9427V44.9441V44.9454V44.9468V44.9482V44.9495V44.9509V44.9522V44.9535V44.9549V44.9562V44.9575V44.9589V44.9602V44.9615V44.9628V44.9641V44.9654V44.9667V44.968V44.9693V44.9706V44.9718V44.9731V44.9744V44.9757V44.9769V44.9782V44.9794V44.9807V44.9819V44.9832V44.9844V44.9856V44.9868V44.9881V44.9893V44.9905V44.9917V44.9929V44.9941V44.9953V44.9965V44.9977V44.9988V45V45.1V45.1006V45.1012V45.1017V45.1023V45.1029V45.1035V45.104V45.1046V45.1052V45.1057V45.1063V45.1069V45.1074V45.108V45.1085V45.1091V45.1096V45.1102V45.1107V45.1113V45.1118V45.1123V45.1129V45.1134V45.1139V45.1145V45.115V45.1155V45.1161V45.1166V45.1171V45.1176V45.1181V45.1186V45.1191V45.1196V45.1202V45.1207V45.1212V45.1217V45.1222V45.1226V45.1231V45.1236V45.1241V45.1246V45.1251V45.1256V45.1261V45.1265V45.127V45.1275V45.128V45.1284V45.1289V45.1294V45.1298V45.1303V45.1307V45.1312V45.1317V45.1321V45.1326V45.133V45.1335V45.1339V45.1343V45.1348V45.1352V45.1357V45.1361V45.1365V45.137V45.1374V45.1378V45.1383V45.1387V45.1391V45.1395V45.1399V45.1404V45.1408V45.1412V45.1416V45.142V45.1424V45.1428V45.1432V45.1436V45.144V45.1444V45.1448V45.1452V45.1456V45.146V45.1464V45.1468V45.1471V45.1475V45.1479V45.1483V45.1487V45.149V45.1494V45.1498V45.1501V45.1505V45.1509V45.1512V45.1516V45.152V45.1523V45.1527V45.153V45.1534V45.1537V45.1541V45.1544V45.1548V45.1551V45.1555V45.1558V45.1561V45.1565V45.1568V45.1572V45.1575V45.1578V45.1581V45.1585V45.1588V45.1591V45.1594V45.1598V45.1601V45.1604V45.1607V45.161V45.1613V45.1616V45.162V45.1623V45.1626V45.1629V45.1632V45.1635V45.1638V45.1641V45.1644V45.1647V45.165V45.1652V45.1655V45.1658V45.1661V45.1664V45.1667V45.167V45.1672V45.1675V45.1678V45.1681V45.1683V45.1686V45.1689V45.1691V45.1694V45.1697V45.1699V45.1702V45.1705V45.1707V45.171V45.1712V45.1715V45.1717V45.172V45.1722V45.1725V45.1727V45.173V45.1732V45.1735V45.1737V45.174V45.1742V45.1744V45.1747V45.1749V45.1751V45.1753C45.5039 48.1507 44.6544 50.2924 43.3031 51.6899C41.9582 53.0807 40.0524 53.8 37.5 53.8C35.4235 53.8 33.5685 53.0476 32.2763 51.5708Z"></path><path d="M22.8 23.2538V18.2178L29.3909 23.307L26.1939 25.8645L22.8 23.2538Z"></path><path d="M16.7 20.2V19.7H16.5V18.8V10.858C16.5042 10.8478 16.5096 10.8348 16.5142 10.8232C16.5488 10.7368 16.5963 10.6012 16.5998 10.4209C16.8474 7.03069 17.6799 4.61275 19.0737 3.04468C20.4543 1.49155 22.4511 0.699997 25.2 0.699997C27.2568 0.699997 29.1263 1.53906 30.5352 3.04197L30.5407 3.04785L30.5464 3.05355C30.7614 3.26854 31.0508 3.35 31.3 3.35C31.5492 3.35 31.8386 3.26854 32.0536 3.05355L32.0646 3.04251L32.0749 3.03081C33.4779 1.4408 35.1402 0.699997 37.3 0.699997C40.0769 0.699997 42.1441 1.62655 43.5571 3.42174C44.934 5.17104 45.7393 7.80743 45.886 11.3874C44.0184 11.8028 42.6345 12.9721 42.1 13.4936V13.2C42.1 10.0544 41.7835 8.06299 40.9925 6.86242C40.1497 5.58316 38.8495 5.3 37.3 5.3C35.4114 5.3 34.3769 6.59229 33.8399 7.85422C33.3055 9.11015 33.2 10.457 33.2 10.9C33.2 12.2634 32.2859 13.1 31.3 13.1H31.2204C30.2388 13.0141 29.4 12.0845 29.4 10.8C29.4 9.19015 29.0639 7.84653 28.3661 6.89234C27.6525 5.91665 26.5974 5.4 25.3 5.4C23.6267 5.4 22.3017 5.64608 21.4896 6.93319C21.1052 7.5425 20.863 8.34586 20.7131 9.3714C20.5626 10.4004 20.5 11.6909 20.5 13.3V30.4541L16.7 33.3833V20.2Z"></path><path d="M40.1 31.5462V36.5799L33.4225 31.4049L36.6974 28.9288L40.1 31.5462Z"></path><mask id="path-9-inside-1" fill="white"><path d="M58.7 30.1C58.9 30 59.5 30 59.8 29.9C60.9 29.8 61.8 28.7 61.8 27.4C61.8 26.1 60.9 25 59.8 24.9C59.7 24.9 59.5 24.9 59.4 24.8C59.3 24.8 59.2 24.8 59.1 24.7C59.1 24.7 59.1 24.7 59 24.7C58.6 24.6 58.1 24.4 57.7 24.1C57.7 24.1 57.7 24.1 57.6 24C56.1 23.1 55 21.2 53.6 18.7C53.1 17.8 52.6 16.9 52 16C50.5 13.7 48.9 13.1 47.8 13C47.7 13 47.6 13 47.5 13H47.3C47.1 13 46.9 13 46.9 13C45.2 13.2 44 14.3 43.6 14.8L25.2 29.1C25.2 29.1 25.2 29.1 25.1 29.2L23 30.8L16.8 35.5L16.4 35.9C16.4 35.9 16.4 35.9 16.3 35.9C16 36.1 15.7 36.3 15.4 36.3C15.1 36.3 14.9 36.2 14.7 36.1C14.5 35.9 14.4 35.8 14.3 35.5C13.9 34.8 13.4 34.1 13 33.3V33.1C12.2 31.7 11.3 30 10.1 28.6C10.1 28.6 10.1 28.6 10.1 28.5L10 28.4C9.9 28.3 9.9 28.3 9.8 28.2C9.8 28.2 9.8 28.2 9.7 28.1L9.2 27.5C9.2 27.5 9.2 27.5 9.1 27.5C9 27.3 9 27.1 9.1 27L9.6 26.5C10.9 25 11.9 23.2 12.8 21.6V21.5C13.2 20.7 13.7 19.9 14.2 19.1C14.4 18.8 14.6 18.6 14.7 18.5V13.1C13.6 13.2 12 13.9 10.6 16C10 16.9 9.5 17.8 9 18.7C7.8 20.9 6.8 22.5 5.6 23.5C4.8 24.1 4 24.4 3.5 24.6C3.5 24.6 3.5 24.6 3.4 24.6C3.3 24.6 3.1 24.7 3 24.7C2.9 24.7 2.9 24.7 2.8 24.7C2.7 24.7 2.7 24.7 2.7 24.7H2.6H2.5C2.3 24.7 2.2 24.8 2.1 24.8C2 24.8 2 24.8 2 24.9C1.7 25.1 1.4 25.3 1.2 25.6C1.2 25.7 1.1 25.7 1.1 25.8V25.9L0.999997 26.1C0.999997 26.2 0.999997 26.2 0.899997 26.3C0.899997 26.4 0.899997 26.4 0.799997 26.5C0.799997 26.6 0.799997 26.7 0.699997 26.7C0.699997 26.8 0.699997 26.9 0.699997 26.9C0.699997 27 0.699997 27.1 0.699997 27.1C0.699997 27.2 0.699997 27.2 0.699997 27.3C0.699997 27.4 0.699997 27.5 0.699997 27.5C0.699997 27.6 0.699997 27.7 0.699997 27.7C0.699997 27.8 0.699997 27.9 0.799997 27.9V28V28.1C0.799997 28.2 0.799997 28.2 0.899997 28.2L0.999997 28.4C0.999997 28.5 1.1 28.5 1.1 28.5C1.1 28.5 1.1 28.5 1.1 28.6C1.2 28.7 1.3 28.9 1.5 29C1.6 29 1.6 29.1 1.7 29.1C1.7 29.1 1.8 29.1 1.8 29.2C1.8 29.2 1.8 29.2 1.9 29.2C2 29.3 2.2 29.3 2.3 29.4C2.4 29.4 2.4 29.4 2.4 29.4L2.9 29.5C3.1 29.5 3.2 29.6 3.4 29.6C4.2 29.8 4.7 30.2 4.8 30.2C6.4 31.2 7.5 33 8.9 35.5C9.5 36.6 10 37.4 10.5 38.2C11.9 40.3 13.4 41 14.4 41.1C14.5 41.1 14.5 41.1 14.6 41.1C14.7 41.1 14.8 41.1 14.8 41.1C15 41.1 15.2 41.1 15.5 41.1H15.6C17.2 40.8 18.5 39.8 18.9 39.3L19 39.2L19.8 38.6C19.8 38.6 19.9 38.5 20 38.5L30.2 30.6L41.3 22L46.5 18H46.6C46.7 18 46.9 17.9 47 17.9C47.4 17.9 47.8 18.1 48.1 18.6L48.5 19.2C48.8 19.7 49.2 20.3 49.5 20.9V21C50.1 22.1 50.8 23.4 51.7 24.6C51.7 24.6 51.7 24.7 51.8 24.7C52.1 25.1 52.4 25.5 52.7 25.8C52.7 25.8 52.8 25.8 52.8 25.9C53 26.1 53.1 26.3 53.3 26.4C53.4 26.5 53.4 26.7 53.3 26.9C52 28.5 50.4 31.1 49.6 32.4V32.5C49.2 33.2 48.7 34.1 48.2 34.9C48 35.2 47.8 35.4 47.7 35.5V40.9C48.8 40.8 50.4 40.1 51.8 37.9C52.4 37 52.9 36 53.4 35.2C53.5 35 53.7 34.7 53.8 34.5C55.2 33 56.4 30.9 58.7 30.1Z"></path></mask><path d="M58.7 30.1C58.9 30 59.5 30 59.8 29.9C60.9 29.8 61.8 28.7 61.8 27.4C61.8 26.1 60.9 25 59.8 24.9C59.7 24.9 59.5 24.9 59.4 24.8C59.3 24.8 59.2 24.8 59.1 24.7C59.1 24.7 59.1 24.7 59 24.7C58.6 24.6 58.1 24.4 57.7 24.1C57.7 24.1 57.7 24.1 57.6 24C56.1 23.1 55 21.2 53.6 18.7C53.1 17.8 52.6 16.9 52 16C50.5 13.7 48.9 13.1 47.8 13C47.7 13 47.6 13 47.5 13H47.3C47.1 13 46.9 13 46.9 13C45.2 13.2 44 14.3 43.6 14.8L25.2 29.1C25.2 29.1 25.2 29.1 25.1 29.2L23 30.8L16.8 35.5L16.4 35.9C16.4 35.9 16.4 35.9 16.3 35.9C16 36.1 15.7 36.3 15.4 36.3C15.1 36.3 14.9 36.2 14.7 36.1C14.5 35.9 14.4 35.8 14.3 35.5C13.9 34.8 13.4 34.1 13 33.3V33.1C12.2 31.7 11.3 30 10.1 28.6C10.1 28.6 10.1 28.6 10.1 28.5L10 28.4C9.9 28.3 9.9 28.3 9.8 28.2C9.8 28.2 9.8 28.2 9.7 28.1L9.2 27.5C9.2 27.5 9.2 27.5 9.1 27.5C9 27.3 9 27.1 9.1 27L9.6 26.5C10.9 25 11.9 23.2 12.8 21.6V21.5C13.2 20.7 13.7 19.9 14.2 19.1C14.4 18.8 14.6 18.6 14.7 18.5V13.1C13.6 13.2 12 13.9 10.6 16C10 16.9 9.5 17.8 9 18.7C7.8 20.9 6.8 22.5 5.6 23.5C4.8 24.1 4 24.4 3.5 24.6C3.5 24.6 3.5 24.6 3.4 24.6C3.3 24.6 3.1 24.7 3 24.7C2.9 24.7 2.9 24.7 2.8 24.7C2.7 24.7 2.7 24.7 2.7 24.7H2.6H2.5C2.3 24.7 2.2 24.8 2.1 24.8C2 24.8 2 24.8 2 24.9C1.7 25.1 1.4 25.3 1.2 25.6C1.2 25.7 1.1 25.7 1.1 25.8V25.9L0.999997 26.1C0.999997 26.2 0.999997 26.2 0.899997 26.3C0.899997 26.4 0.899997 26.4 0.799997 26.5C0.799997 26.6 0.799997 26.7 0.699997 26.7C0.699997 26.8 0.699997 26.9 0.699997 26.9C0.699997 27 0.699997 27.1 0.699997 27.1C0.699997 27.2 0.699997 27.2 0.699997 27.3C0.699997 27.4 0.699997 27.5 0.699997 27.5C0.699997 27.6 0.699997 27.7 0.699997 27.7C0.699997 27.8 0.699997 27.9 0.799997 27.9V28V28.1C0.799997 28.2 0.799997 28.2 0.899997 28.2L0.999997 28.4C0.999997 28.5 1.1 28.5 1.1 28.5C1.1 28.5 1.1 28.5 1.1 28.6C1.2 28.7 1.3 28.9 1.5 29C1.6 29 1.6 29.1 1.7 29.1C1.7 29.1 1.8 29.1 1.8 29.2C1.8 29.2 1.8 29.2 1.9 29.2C2 29.3 2.2 29.3 2.3 29.4C2.4 29.4 2.4 29.4 2.4 29.4L2.9 29.5C3.1 29.5 3.2 29.6 3.4 29.6C4.2 29.8 4.7 30.2 4.8 30.2C6.4 31.2 7.5 33 8.9 35.5C9.5 36.6 10 37.4 10.5 38.2C11.9 40.3 13.4 41 14.4 41.1C14.5 41.1 14.5 41.1 14.6 41.1C14.7 41.1 14.8 41.1 14.8 41.1C15 41.1 15.2 41.1 15.5 41.1H15.6C17.2 40.8 18.5 39.8 18.9 39.3L19 39.2L19.8 38.6C19.8 38.6 19.9 38.5 20 38.5L30.2 30.6L41.3 22L46.5 18H46.6C46.7 18 46.9 17.9 47 17.9C47.4 17.9 47.8 18.1 48.1 18.6L48.5 19.2C48.8 19.7 49.2 20.3 49.5 20.9V21C50.1 22.1 50.8 23.4 51.7 24.6C51.7 24.6 51.7 24.7 51.8 24.7C52.1 25.1 52.4 25.5 52.7 25.8C52.7 25.8 52.8 25.8 52.8 25.9C53 26.1 53.1 26.3 53.3 26.4C53.4 26.5 53.4 26.7 53.3 26.9C52 28.5 50.4 31.1 49.6 32.4V32.5C49.2 33.2 48.7 34.1 48.2 34.9C48 35.2 47.8 35.4 47.7 35.5V40.9C48.8 40.8 50.4 40.1 51.8 37.9C52.4 37 52.9 36 53.4 35.2C53.5 35 53.7 34.7 53.8 34.5C55.2 33 56.4 30.9 58.7 30.1Z"></path></svg></div>', 1), oc = [
  tc
];
function lc(e, t, l, o, n, a) {
  return i(), u("div", null, oc);
}
const nc = /* @__PURE__ */ sl(ec, [["render", lc]]), ac = {
  key: 0,
  class: "po-fixed po-z-[999] po-top-0 po-bottom-0 po-left-0 po-right-0 po-flex po-items-center po-justify-center"
}, sc = /* @__PURE__ */ s("div", { class: "po-absolute po-w-[6.2rem] po-h-[6.2rem] po-bg-transparent po-overflow-hidden po-rounded-xl" }, [
  /* @__PURE__ */ s("div", { class: "po-loading-rotate po-absolute -po-top-8 -po-left-8 po-w-[10rem] po-h-[10rem]" })
], -1), rc = { class: "relative po-bg-white po-w-24 po-h-24 po-flex po-items-center po-justify-center po-rounded-xl po-bg-opacity-50 po-backdrop-blur po-backdrop-filter po-z-10 po-shadow-xl" }, ic = {
  key: 0,
  class: "po-absolute po-left-1 po-right-1 po-text-center po-py-1 po-text-xs po-text-mpao-blue po-bg-white po-bg-opacity-50 po-backdrop-blur po-backdrop-filter"
}, pc = {
  name: "PoLoading"
}, p0 = /* @__PURE__ */ Object.assign(pc, {
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
    return (t, l) => e.show ? (i(), u("div", ac, [
      sc,
      s("div", rc, [
        e.label !== "" ? (i(), u("span", ic, g(e.label), 1)) : x("", !0),
        _(nc)
      ])
    ])) : x("", !0);
  }
}), uc = { class: "po-py-5 po-flex po-items-start po-space-x-5" }, cc = ["name", "id", "checked", "aria-describedby"], dc = { class: "po-grow -po-mt-[0.26rem]" }, fc = ["for"], vc = { class: "po-mt-2 po-flex po-space-x-3" }, mc = ["href", "onClick"], hc = {
  name: "PoConsent"
}, u0 = /* @__PURE__ */ Object.assign(hc, {
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
    return (t, l) => (i(), u("div", uc, [
      s("input", Le({
        type: "checkbox",
        name: `${e.id}-field`,
        id: e.id,
        checked: e.modelValue,
        "aria-describedby": `${e.id}-description`
      }, t.$attrs, {
        onInput: l[0] || (l[0] = (o) => t.$emit("update:modelValue", o.target.checked)),
        class: "po-shrink-0 po-h-4 po-w-4 po-rounded border-slate-300 po-text-mpao-lightblue focus:po-ring-mpao-lightblue"
      }), null, 16, cc),
      s("div", dc, [
        s("label", {
          class: "po-block po-select-none po-text-sm po-text-slate-600 po-cursor-pointer",
          for: e.id
        }, g(e.label), 9, fc),
        s("div", vc, [
          (i(!0), u(R, null, H(e.links, (o) => (i(), u("a", {
            href: o.url,
            onClick: re((n) => t.$emit("button-click", o.url), ["prevent"]),
            class: "po-text-sm po-text-mpao-lightblue hover:po-text-mpao-blue"
          }, g(o.label), 9, mc))), 256))
        ])
      ])
    ]));
  }
}), bc = { class: "po-mt-5 po-bg-slate-50 -po-mx-5 po-px-4 po-py-3 po-space-y-3" }, gc = ["onClick"], yc = { class: "po-absolute po-bg-white po-top-4 po-right-4 po-z-10 po-text-xs po-text-slate-600" }, xc = { class: "po-shrink-0 po-pr-3 po-flex po-items-center po-border-r po-border-dashed po-border-slate-300" }, Vc = {
  key: 4,
  class: "po-w-5 po-h-5 po-fill-slate-400 po-shrink-0",
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  viewBox: "0 0 226.978 226.978"
}, wc = /* @__PURE__ */ s("path", { d: "M199.569 25.393C181.627 7.803 152.62-.72 113.339.048 73.731.827 47.255 7.779 30.018 21.927 13.352 35.605 5.59 55.62 5.59 84.915v29.898c0 34.584 18.532 72.605 53.951 78.358 4.089.669 7.941-2.111 8.605-6.201a7.5 7.5 0 0 0-6.201-8.605c-26.861-4.363-41.355-36-41.355-63.552V84.915c0-42.006 15.565-68.347 93.043-69.871 35.125-.696 60.477 6.395 75.433 21.059 11.655 11.429 17.321 27.395 17.321 48.812v29.898c0 45.274-20.321 65.243-72.441 71.123H96.988c-1.989 0-3.897.79-5.303 2.197l-26.041 26.041a7.5 7.5 0 0 0 10.606 10.607l23.845-23.845h34.27c.276 0 .553-.015.828-.046 29.828-3.313 50.254-11.076 64.279-24.432 14.747-14.044 21.916-34.208 21.916-61.646V84.915c0-25.299-7.341-45.325-21.819-59.522z" }, null, -1), kc = /* @__PURE__ */ s("path", { d: "M118.17 48.988h.003c12.085 0 23.447 4.707 31.993 13.253 8.547 8.547 13.254 19.911 13.253 31.998a7.5 7.5 0 0 0 7.499 7.5h.001a7.5 7.5 0 0 0 7.5-7.499c.001-16.094-6.266-31.225-17.646-42.605-11.379-11.38-26.507-17.646-42.6-17.646h-.005a7.5 7.5 0 1 0 .002 14.999z" }, null, -1), $c = /* @__PURE__ */ s("path", { d: "M118.168 75.362c10.408.002 18.877 8.47 18.878 18.877a7.5 7.5 0 0 0 7.501 7.499c4.143 0 7.5-3.359 7.499-7.501-.003-18.676-15.199-33.872-33.876-33.875h-.001a7.5 7.5 0 0 0-.001 15zM84.538 88.213a7.5 7.5 0 0 0 8.465 12.382c2.689-1.838 8.987-6.144 8.545-14.752-.28-5.152-4.927-12.508-8.776-17.772-5.63-7.702-10.482-12.341-14.391-13.779-3.65-1.359-7.467-1.388-11.353-.084-8.049 2.712-13.893 7.613-16.899 14.173-2.927 6.386-2.862 13.725.189 21.228 7.206 17.678 17.294 33.155 30.051 46.067 12.845 12.689 28.321 22.777 46.006 29.987 3.827 1.557 7.613 2.336 11.252 2.336 3.49 0 6.845-.716 9.971-2.149 6.56-3.007 11.46-8.85 14.175-16.909 1.3-3.877 1.271-7.692-.077-11.317-1.448-3.937-6.088-8.788-13.789-14.418-5.265-3.849-12.621-8.496-17.793-8.777-8.59-.432-12.892 5.855-14.73 8.544a7.5 7.5 0 0 0 12.381 8.469c.816-1.193 1.282-1.735 1.549-1.972 4.21 1.349 16.215 10.169 18.376 13.549.053.216.065.545-.135 1.144-.946 2.809-2.791 6.486-6.206 8.052-3.199 1.464-6.834.566-9.316-.443-15.847-6.461-29.682-15.466-41.058-26.703-11.301-11.439-20.306-25.274-26.763-41.115-1.012-2.488-1.911-6.125-.446-9.321 1.565-3.415 5.243-5.261 8.043-6.205.598-.2.927-.189 1.155-.134 3.381 2.165 12.196 14.163 13.546 18.374-.238.263-.779.73-1.972 1.545z" }, null, -1), _c = [
  wc,
  kc,
  $c
], Cc = { class: "po-grow po-space-y-2 po-pl-3 -po-mb-2" }, Sc = { class: "po-text-base po-text-slate-600 po-font-medium" }, Ec = {
  key: 0,
  class: ""
}, Oc = {
  key: 0,
  class: "po-flex po-flex-wrap"
}, Pc = { class: "po-font-medium po-text-slate-500 po-capitalize" }, Lc = {
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
    const t = $(null);
    function l(o, n) {
      n.details && (t.value = t.value === o ? null : o);
    }
    return (o, n) => (i(), u("ul", bc, [
      (i(!0), u(R, null, H(e.list, (a, r) => (i(), u("li", {
        onClick: (p) => {
          o.$emit("button-click", a), l(r, a);
        },
        class: T(["po-bg-white po-rounded-lg po-p-3 po-transition-shadow po-duration-100 po-ease-out po-shadow hover:po-shadow-lg po-cursor-pointer po-flex po-item-center po-border-l-4 po-relative", a.highlightColor])
      }, [
        s("span", yc, g(a.topRightLabel), 1),
        s("div", xc, [
          a.type === "chat" ? (i(), M(h(Ll), {
            key: 0,
            class: "po-w-5 po-h-5 po-stroke-slate-400 po-shrink-0"
          })) : x("", !0),
          a.type === "email" ? (i(), M(h(jl), {
            key: 1,
            class: "po-w-5 po-h-5 po-stroke-slate-400 po-shrink-0"
          })) : x("", !0),
          a.type === "in" ? (i(), M(h(Ml), {
            key: 2,
            class: "po-w-5 po-h-5 po-stroke-slate-400 po-shrink-0"
          })) : x("", !0),
          a.type === "out" ? (i(), M(h(Fl), {
            key: 3,
            class: "po-w-5 po-h-5 po-stroke-slate-400 po-shrink-0"
          })) : x("", !0),
          a.type === "viber" ? (i(), u("svg", Vc, _c)) : x("", !0)
        ]),
        s("div", Cc, [
          s("h3", Sc, g(a.subject), 1),
          _(Ee, {
            "enter-active-class": "po-transition po-duration-100 po-ease-out",
            "enter-from-class": "po-transform po-scale-95 po-opacity-0",
            "enter-to-class": "po-transform po-scale-100 po-opacity-100",
            "leave-active-class": "po-transition po-duration-75 po-ease-out",
            "leave-from-class": "po-transform po-scale-100 po-opacity-100",
            "leave-to-class": "po-transform po-scale-95 po-opacity-0"
          }, {
            default: A(() => [
              t.value === r ? (i(), u("div", Ec, [
                _(al, {
                  items: a.details
                }, null, 8, ["items"])
              ])) : x("", !0)
            ]),
            _: 2
          }, 1024),
          t.value !== r ? (i(), u("div", Oc, [
            (i(!0), u(R, null, H(a.meta, (p, c) => (i(), u("p", {
              class: "po-text-xs po-space-x-2 po-mr-5 po-mb-2",
              key: c
            }, [
              s("span", Pc, g(p.label), 1),
              s("span", {
                class: T(["po-text-slate-500 po-px-[0.2em] po-rounded-md", p.color])
              }, g(p.description), 3)
            ]))), 128))
          ])) : x("", !0)
        ])
      ], 10, gc))), 256))
    ]));
  }
}), Nc = {
  class: "po-flex po-bg-slate-50 po-rounded-t-xl po-justify-center lg:po-justify-start po-px-4 po-pt-4 xl:po-pt-2 po-flex-wrap po-overflow-hidden",
  "aria-label": "Tabs"
}, Dc = ["onClick", "aria-current"], Tc = { key: 0 }, Ac = {
  name: "PoCardTabs"
}, d0 = /* @__PURE__ */ Object.assign(Ac, {
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
    function l(o) {
      return o.iconColor ? o.iconColor : "po-fill-current";
    }
    return (o, n) => (i(), u("nav", Nc, [
      (i(!0), u(R, null, H(e.tabs, (a) => (i(), u("span", {
        role: "button",
        onClick: (r) => o.$emit("button-click", a),
        key: a.name,
        class: T([
          a.current ? "po-bg-white po-text-slate-600 po-shadow-lg" : "po-text-slate-600 hover:po-text-mpao-blue",
          "po-px-4 po-py-3 po-font-medium po-mr-4 po-mb-4 xl:po-mb-0 po-text-sm po-cursor-pointer po-rounded-xl xl:po-rounded-b-none genie-effect hover:po-text-slate-600 hover:po-bg-white hover:po-shadow-md po-flex po-items-center po-flex-shrink-0 po-space-x-2"
        ]),
        "aria-current": a.current ? "page" : void 0
      }, [
        a.icon ? (i(), M(ve(a.icon), {
          key: 0,
          class: T(["po-w-5 po-h-5", [l(a)]])
        }, null, 8, ["class"])) : x("", !0),
        s("span", null, [
          ne(g(a.name), 1),
          a.count ? (i(), u("span", Tc, " (" + g(a.count) + ")", 1)) : x("", !0)
        ])
      ], 10, Dc))), 128))
    ]));
  }
}), jc = { class: "sm:po-hidden" }, Bc = /* @__PURE__ */ s("label", {
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
    const l = e;
    function o(a) {
      return a.iconColor ? a.iconColor : "po-fill-current";
    }
    const n = C(() => l.tabs.forEach((a) => {
      a.name === l.currentTab && (a.current = !0);
    }));
    return (a, r) => (i(), u(R, null, [
      s("div", jc, [
        Bc,
        s("select", Ic, [
          (i(!0), u(R, null, H(h(n), (p) => (i(), u("option", {
            key: p.name,
            selected: p.current
          }, g(p.name), 9, Rc))), 128))
        ])
      ]),
      s("div", Mc, [
        s("nav", Fc, [
          (i(!0), u(R, null, H(e.tabs, (p) => (i(), u("span", {
            onClick: (c) => a.$emit("button-click", p),
            role: "button",
            key: p.name,
            class: T([
              p.current ? "po-bg-white po-text-slate-600 po-shadow-md" : "po-bg-slate-50 po-text-slate-600 hover:po-text-mpao-blue",
              "po-px-4 po-relative po-group po-py-3 po-font-medium po-text-sm po-cursor-pointer po-rounded-xl genie-effect hover:po-text-slate-600 hover:po-bg-white hover:po-shadow-md po-flex po-items-center po-space-x-2"
            ]),
            "aria-current": p.current ? "page" : void 0
          }, [
            p.icon ? (i(), M(ve(p.icon), {
              key: 0,
              class: T(["po-w-5 po-h-5", [o(p)]])
            }, null, 8, ["class"])) : x("", !0),
            s("span", null, [
              s("span", null, g(p.name), 1),
              p.count && p.count > 0 ? (i(), u("span", {
                key: 0,
                class: T(["po-absolute po-py-1 po-px-2 po-rounded-full po-text-xs -po-top-3 -po-right-2 po-shadow-md po-flex po-items-center po-justify-center", [
                  p.current ? "po-bg-mpao-orange po-text-white" : "po-bg-slate-400 po-text-white group-hover:po-bg-mpao-orange group-hover:po-text-white"
                ]])
              }, [
                s("span", null, g(p.count), 1)
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
    return (t, l) => (i(), u("div", qc, [
      e.icon ? (i(), M(ve(e.icon), {
        key: 0,
        class: "po-w-10 po-h-10 po-stroke-slate-300"
      })) : x("", !0),
      e.label !== "" ? (i(), u("span", Uc, g(e.label), 1)) : x("", !0),
      e.description !== "" ? (i(), u("span", Gc, g(e.description), 1)) : x("", !0),
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
const ft = () => !1, Wc = Object.assign, Yc = Array.isArray, xe = (e) => typeof e == "string", Zc = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (l) => t[l] || (t[l] = e(l));
}, Jc = /\B([A-Z])/g, Qc = Zc((e) => e.replace(Jc, "-$1").toLowerCase());
function Xc(e) {
  throw e;
}
function ed(e) {
  process.env.NODE_ENV !== "production" && console.warn(`[Vue warn] ${e.message}`);
}
function Se(e, t, l, o) {
  const n = process.env.NODE_ENV !== "production" ? (l || td)[e] + (o || "") : e, a = new SyntaxError(String(n));
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
const Ke = Symbol(process.env.NODE_ENV !== "production" ? "openBlock" : ""), od = Symbol(process.env.NODE_ENV !== "production" ? "createBlock" : ""), ld = Symbol(process.env.NODE_ENV !== "production" ? "createElementBlock" : ""), nd = Symbol(process.env.NODE_ENV !== "production" ? "createVNode" : ""), ad = Symbol(process.env.NODE_ENV !== "production" ? "createElementVNode" : ""), rl = Symbol(process.env.NODE_ENV !== "production" ? "createCommentVNode" : "");
Symbol(process.env.NODE_ENV !== "production" ? "createTextVNode" : "");
Symbol(process.env.NODE_ENV !== "production" ? "createStaticVNode" : "");
Symbol(process.env.NODE_ENV !== "production" ? "resolveComponent" : "");
Symbol(process.env.NODE_ENV !== "production" ? "resolveDynamicComponent" : "");
Symbol(process.env.NODE_ENV !== "production" ? "resolveDirective" : "");
Symbol(process.env.NODE_ENV !== "production" ? "resolveFilter" : "");
const sd = Symbol(process.env.NODE_ENV !== "production" ? "withDirectives" : ""), rd = Symbol(process.env.NODE_ENV !== "production" ? "renderList" : "");
Symbol(process.env.NODE_ENV !== "production" ? "renderSlot" : "");
Symbol(process.env.NODE_ENV !== "production" ? "createSlots" : "");
const id = Symbol(process.env.NODE_ENV !== "production" ? "toDisplayString" : ""), so = Symbol(process.env.NODE_ENV !== "production" ? "mergeProps" : "");
Symbol(process.env.NODE_ENV !== "production" ? "normalizeClass" : "");
Symbol(process.env.NODE_ENV !== "production" ? "normalizeStyle" : "");
const pd = Symbol(process.env.NODE_ENV !== "production" ? "normalizeProps" : ""), il = Symbol(process.env.NODE_ENV !== "production" ? "guardReactiveProps" : ""), ud = Symbol(process.env.NODE_ENV !== "production" ? "toHandlers" : "");
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
function wt(e, t, l, o, n, a, r, p = !1, c = !1, d = !1, f = ge) {
  return e && (p ? (e.helper(Ke), e.helper(Ze(e.inSSR, d))) : e.helper(Ye(e.inSSR, d)), r && e.helper(sd)), {
    type: 13,
    tag: t,
    props: l,
    children: o,
    patchFlag: n,
    dynamicProps: a,
    directives: r,
    isBlock: p,
    disableTracking: c,
    isComponent: d,
    loc: f
  };
}
function Te(e, t = ge) {
  return {
    type: 15,
    loc: t,
    properties: e
  };
}
function pl(e, t) {
  return {
    type: 16,
    loc: ge,
    key: xe(e) ? me(e, !0) : e,
    value: t
  };
}
function me(e, t = !1, l = ge, o = 0) {
  return {
    type: 4,
    loc: l,
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
function We(e, t = [], l = ge) {
  return {
    type: 14,
    loc: l,
    callee: e,
    arguments: t
  };
}
function ro(e, t = void 0, l = !1, o = !1, n = ge) {
  return {
    type: 18,
    params: e,
    returns: t,
    newline: l,
    isSlot: o,
    loc: n
  };
}
function fd(e, t, l, o = !0) {
  return {
    type: 19,
    test: e,
    consequent: t,
    alternate: l,
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
function bd(e, t, l) {
  const n = {
    source: e.source.slice(t, t + l),
    start: io(e.start, e.source, t),
    end: e.end
  };
  return l != null && (n.end = io(e.start, e.source, t + l)), n;
}
function io(e, t, l = t.length) {
  return gd(Wc({}, e), t, l);
}
function gd(e, t, l = t.length) {
  let o = 0, n = -1;
  for (let a = 0; a < l; a++)
    t.charCodeAt(a) === 10 && (o++, n = a);
  return e.offset += l, e.line += o, e.column = n === -1 ? e.column + l : l - n, e;
}
function ul(e, t, l = !1) {
  for (let o = 0; o < e.props.length; o++) {
    const n = e.props[o];
    if (n.type === 7 && (l || n.exp) && (xe(t) ? n.name === t : t.test(n.name)))
      return n;
  }
}
function kt(e, t, l = !1, o = !1) {
  for (let n = 0; n < e.props.length; n++) {
    const a = e.props[n];
    if (a.type === 6) {
      if (l)
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
function cl(e) {
  return e.type === 1 && e.tagType === 3;
}
function po(e) {
  return e.type === 1 && e.tagType === 2;
}
function Ye(e, t) {
  return e || t ? nd : ad;
}
function Ze(e, t) {
  return e || t ? od : ld;
}
const Vd = /* @__PURE__ */ new Set([pd, il]);
function dl(e, t = []) {
  if (e && !xe(e) && e.type === 14) {
    const l = e.callee;
    if (!xe(l) && Vd.has(l))
      return dl(e.arguments[0], t.concat(e));
  }
  return [e, t];
}
function Je(e, t, l) {
  let o, n = e.type === 13 ? e.props : e.arguments[2], a = [], r;
  if (n && !xe(n) && n.type === 14) {
    const p = dl(n);
    n = p[0], a = p[1], r = a[a.length - 1];
  }
  if (n == null || xe(n))
    o = Te([t]);
  else if (n.type === 14) {
    const p = n.arguments[0];
    !xe(p) && p.type === 15 ? uo(t, p) || p.properties.unshift(t) : n.callee === ud ? o = We(l.helper(so), [
      Te([t]),
      n
    ]) : n.arguments.unshift(Te([t])), !o && (o = n);
  } else
    n.type === 15 ? (uo(t, n) || n.properties.unshift(t), o = n) : (o = We(l.helper(so), [
      Te([t]),
      n
    ]), r && r.callee === il && (r = a[a.length - 2]));
  e.type === 13 ? r ? r.arguments[0] = o : e.props = o : r ? r.arguments[0] = o : e.arguments[2] = o;
}
function uo(e, t) {
  let l = !1;
  if (e.key.type === 4) {
    const o = e.key.content;
    l = t.properties.some((n) => n.key.type === 4 && n.key.content === o);
  }
  return l;
}
function wd(e) {
  return e.type === 14 && e.callee === cd ? e.arguments[1].returns : e;
}
function kd(e, { helper: t, removeHelper: l, inSSR: o }) {
  e.isBlock || (e.isBlock = !0, l(Ye(o, e.isComponent)), t(Ke), t(Ze(o, e.isComponent)));
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
  let l = 0;
  const o = () => {
    l--;
  };
  for (; l < e.children.length; l++) {
    const n = e.children[l];
    xe(n) || (t.parent = e, t.childIndex = l, t.onNodeRemoved = o, Ut(n, t));
  }
}
function Ut(e, t) {
  t.currentNode = e;
  const { nodeTransforms: l } = t, o = [];
  for (let a = 0; a < l.length; a++) {
    const r = l[a](e, t);
    if (r && (Yc(r) ? o.push(...r) : o.push(r)), t.currentNode)
      e = t.currentNode;
    else
      return;
  }
  switch (e.type) {
    case 3:
      t.ssr || t.helper(rl);
      break;
    case 5:
      t.ssr || t.helper(id);
      break;
    case 9:
      for (let a = 0; a < e.branches.length; a++)
        Ut(e.branches[a], t);
      break;
    case 10:
    case 11:
    case 1:
    case 0:
      Cd(e, t);
      break;
  }
  t.currentNode = e;
  let n = o.length;
  for (; n--; )
    o[n]();
}
function fl(e, t) {
  const l = xe(e) ? (o) => o === e : (o) => e.test(o);
  return (o, n) => {
    if (o.type === 1) {
      const { props: a } = o;
      if (o.tagType === 3 && a.some(xd))
        return;
      const r = [];
      for (let p = 0; p < a.length; p++) {
        const c = a[p];
        if (c.type === 7 && l(c.name)) {
          a.splice(p, 1), p--;
          const d = t(o, c, n);
          d && r.push(d);
        }
      }
      return r;
    }
  };
}
const Sd = new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments,typeof,void".split(",").join("\\b|\\b") + "\\b"), Ed = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
function Re(e, t, l = !1, o = !1) {
  const n = e.content;
  if (n.trim())
    try {
      new Function(o ? ` ${n} ` : `return ${l ? `(${n}) => {}` : `(${n})`}`);
    } catch (a) {
      let r = a.message;
      const p = n.replace(Ed, "").match(Sd);
      p && (r = `avoid using JavaScript keyword as property name: "${p[0]}"`), t.onError(Se(45, e.loc, void 0, r));
    }
}
fl(/^(if|else|else-if)$/, (e, t, l) => Od(e, t, l, (o, n, a) => {
  const r = l.parent.children;
  let p = r.indexOf(o), c = 0;
  for (; p-- >= 0; ) {
    const d = r[p];
    d && d.type === 9 && (c += d.branches.length);
  }
  return () => {
    if (a)
      o.codegenNode = fo(n, c, l);
    else {
      const d = Ld(o.codegenNode);
      d.alternate = fo(n, c + o.branches.length - 1, l);
    }
  };
}));
function Od(e, t, l, o) {
  if (t.name !== "else" && (!t.exp || !t.exp.content.trim())) {
    const n = t.exp ? t.exp.loc : e.loc;
    l.onError(Se(28, t.loc)), t.exp = me("true", !1, n);
  }
  if (process.env.NODE_ENV !== "production" && t.exp && Re(t.exp, l), t.name === "if") {
    const n = co(e, t), a = {
      type: 9,
      loc: e.loc,
      branches: [n]
    };
    if (l.replaceNode(a), o)
      return o(a, n, !0);
  } else {
    const n = l.parent.children, a = [];
    let r = n.indexOf(e);
    for (; r-- >= -1; ) {
      const p = n[r];
      if (p && p.type === 3) {
        l.removeNode(p), process.env.NODE_ENV !== "production" && a.unshift(p);
        continue;
      }
      if (p && p.type === 2 && !p.content.trim().length) {
        l.removeNode(p);
        continue;
      }
      if (p && p.type === 9) {
        t.name === "else-if" && p.branches[p.branches.length - 1].condition === void 0 && l.onError(Se(30, e.loc)), l.removeNode();
        const c = co(e, t);
        if (process.env.NODE_ENV !== "production" && a.length && // #3619 ignore comments if the v-if is direct child of <transition>
        !(l.parent && l.parent.type === 1 && hd(l.parent.tag, "transition")) && (c.children = [...a, ...c.children]), process.env.NODE_ENV !== "production") {
          const f = c.userKey;
          f && p.branches.forEach(({ userKey: m }) => {
            Pd(m, f) && l.onError(Se(29, c.userKey.loc));
          });
        }
        p.branches.push(c);
        const d = o && o(p, c, !1);
        Ut(c, l), d && d(), l.currentNode = null;
      } else
        l.onError(Se(30, e.loc));
      break;
    }
  }
}
function co(e, t) {
  const l = e.tagType === 3;
  return {
    type: 10,
    loc: e.loc,
    condition: t.name === "else" ? void 0 : t.exp,
    children: l && !ul(e, "for") ? e.children : [e],
    userKey: kt(e, "key"),
    isTemplateIf: l
  };
}
function fo(e, t, l) {
  return e.condition ? fd(
    e.condition,
    vo(e, t, l),
    // make sure to pass in asBlock: true so that the comment node call
    // closes the current block.
    We(l.helper(rl), [
      process.env.NODE_ENV !== "production" ? '"v-if"' : '""',
      "true"
    ])
  ) : vo(e, t, l);
}
function vo(e, t, l) {
  const { helper: o } = l, n = pl("key", me(
    `${t}`,
    !1,
    ge,
    2
    /* ConstantTypes.CAN_HOIST */
  )), { children: a } = e, r = a[0];
  if (a.length !== 1 || r.type !== 1)
    if (a.length === 1 && r.type === 11) {
      const c = r.codegenNode;
      return Je(c, n, l), c;
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
      ]}`), wt(l, o(Vt), Te([n]), a, c + (process.env.NODE_ENV !== "production" ? ` /* ${d} */` : ""), void 0, void 0, !0, !1, !1, e.loc);
    }
  else {
    const c = r.codegenNode, d = wd(c);
    return d.type === 13 && kd(d, l), Je(d, n, l), c;
  }
}
function Pd(e, t) {
  if (!e || e.type !== t.type)
    return !1;
  if (e.type === 6) {
    if (e.value.content !== t.value.content)
      return !1;
  } else {
    const l = e.exp, o = t.exp;
    if (l.type !== o.type || l.type !== 4 || l.isStatic !== o.isStatic || l.content !== o.content)
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
fl("for", (e, t, l) => {
  const { helper: o, removeHelper: n } = l;
  return Nd(e, t, l, (a) => {
    const r = We(o(rd), [
      a.source
    ]), p = cl(e), c = ul(e, "memo"), d = kt(e, "key"), f = d && (d.type === 6 ? me(d.value.content, !0) : d.exp), m = d ? pl("key", f) : null, y = a.source.type === 4 && a.source.constType > 0, w = y ? 64 : d ? 128 : 256;
    return a.codegenNode = wt(l, o(Vt), void 0, r, w + (process.env.NODE_ENV !== "production" ? ` /* ${Ge[w]} */` : ""), void 0, void 0, !0, !y, !1, e.loc), () => {
      let b;
      const { children: S } = a;
      process.env.NODE_ENV !== "production" && p && e.children.some((k) => {
        if (k.type === 1) {
          const E = kt(k, "key");
          if (E)
            return l.onError(Se(33, E.loc)), !0;
        }
      });
      const v = S.length !== 1 || S[0].type !== 1, V = po(e) ? e : p && e.children.length === 1 && po(e.children[0]) ? e.children[0] : null;
      if (V ? (b = V.codegenNode, p && m && Je(b, m, l)) : v ? b = wt(
        l,
        o(Vt),
        m ? Te([m]) : void 0,
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
      ) : (b = S[0].codegenNode, p && m && Je(b, m, l), b.isBlock !== !y && (b.isBlock ? (n(Ke), n(Ze(l.inSSR, b.isComponent))) : n(Ye(l.inSSR, b.isComponent))), b.isBlock = !y, b.isBlock ? (o(Ke), o(Ze(l.inSSR, b.isComponent))) : o(Ye(l.inSSR, b.isComponent))), c) {
        const k = ro(ho(a.parseResult, [
          me("_cached")
        ]));
        k.body = vd([
          vt(["const _memo = (", c.exp, ")"]),
          vt([
            "if (_cached",
            ...f ? [" && _cached.key === ", f] : [],
            ` && ${l.helperString(dd)}(_cached, _memo)) return _cached`
          ]),
          vt(["const _item = ", b]),
          me("_item.memo = _memo"),
          me("return _item")
        ]), r.arguments.push(k, me("_cache"), me(String(l.cached++)));
      } else
        r.arguments.push(ro(
          ho(a.parseResult),
          b,
          !0
          /* force newline */
        ));
    };
  });
});
function Nd(e, t, l, o) {
  if (!t.exp) {
    l.onError(Se(31, t.loc));
    return;
  }
  const n = Ad(
    // can only be simple expression because vFor transform is applied
    // before expression transform.
    t.exp,
    l
  );
  if (!n) {
    l.onError(Se(32, t.loc));
    return;
  }
  const { addIdentifiers: a, removeIdentifiers: r, scopes: p } = l, { source: c, value: d, key: f, index: m } = n, y = {
    type: 11,
    loc: t.loc,
    source: c,
    valueAlias: d,
    keyAlias: f,
    objectIndexAlias: m,
    parseResult: n,
    children: cl(e) ? e.children : [e]
  };
  l.replaceNode(y), p.vFor++;
  const w = o && o(y);
  return () => {
    p.vFor--, w && w();
  };
}
const Dd = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/, mo = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, Td = /^\(|\)$/g;
function Ad(e, t) {
  const l = e.loc, o = e.content, n = o.match(Dd);
  if (!n)
    return;
  const [, a, r] = n, p = {
    source: qe(l, r.trim(), o.indexOf(r, a.length)),
    value: void 0,
    key: void 0,
    index: void 0
  };
  process.env.NODE_ENV !== "production" && Re(p.source, t);
  let c = a.trim().replace(Td, "").trim();
  const d = a.indexOf(c), f = c.match(mo);
  if (f) {
    c = c.replace(mo, "").trim();
    const m = f[1].trim();
    let y;
    if (m && (y = o.indexOf(m, d + c.length), p.key = qe(l, m, y), process.env.NODE_ENV !== "production" && Re(p.key, t, !0)), f[2]) {
      const w = f[2].trim();
      w && (p.index = qe(l, w, o.indexOf(w, p.key ? y + m.length : d + c.length)), process.env.NODE_ENV !== "production" && Re(p.index, t, !0));
    }
  }
  return c && (p.value = qe(l, c, d), process.env.NODE_ENV !== "production" && Re(p.value, t, !0)), p;
}
function qe(e, t, l) {
  return me(t, !1, bd(e, l, t.length));
}
function ho({ value: e, key: t, index: l }, o = []) {
  return jd([e, t, l, ...o]);
}
function jd(e) {
  let t = e.length;
  for (; t-- && !e[t]; )
    ;
  return e.slice(0, t + 1).map((l, o) => l || me("_".repeat(o + 1), !1));
}
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const Bd = { class: "po-flex po-text-sm po-text-gray-700 po-flex-col po-space-y-5" }, Id = {
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
    function l() {
      t("dispute-click", "clicked");
    }
    return (o, n) => (i(), u("span", Bd, [
      e.record !== null ? (i(), u("h2", Id, " Death was reported by " + g(e.record.institution), 1)) : x("", !0),
      e.request !== null && e.request.type_id === 1 ? (i(), u("div", Rd, [
        _(h(mt), { class: "po-shrink-0 po-w-6 po-stroke-orange-600" }),
        s("span", Md, " This is a " + g(e.request.type) + " request and is in " + g(e.request.state) + " state. ", 1)
      ])) : x("", !0),
      e.request !== null && e.request.type_id !== 1 ? (i(), u("div", Fd, [
        _(h(mt), { class: "po-shrink-0 po-w-6 po-h-6 po-stroke-red-600 po-stroke-2" }),
        s("div", zd, [
          s("h3", Hd, g(e.request.type), 1),
          s("p", qd, [
            ne(" The following " + g(e.request.type) + " was reported: ", 1),
            s("span", Ud, [
              ne(g(e.request.dispute_type), 1),
              e.request.date_of_death ? (i(), u("span", Gd, " (New date: " + g(e.request.date_of_death) + ")", 1)) : x("", !0)
            ])
          ])
        ])
      ])) : x("", !0),
      _(al, null, {
        content: A(() => [
          e.member !== null ? (i(), u("div", Kd, [
            Wd,
            s("dd", null, g(e.member.name), 1)
          ])) : x("", !0),
          e.member !== null ? (i(), u("div", Yd, [
            Zd,
            s("dd", null, g(e.member.identifier), 1)
          ])) : x("", !0),
          e.member !== null ? (i(), u("div", Jd, [
            Qd,
            s("dd", null, g(e.member.dob), 1)
          ])) : x("", !0),
          e.record !== null ? (i(), u("div", Xd, [
            e1,
            s("dd", null, g(e.record.date_of_death), 1)
          ])) : x("", !0)
        ]),
        _: 1
      }),
      e.request === null ? (i(), u("span", t1, [
        _(Ht, {
          type: "simple",
          onButtonClick: l
        }, {
          label: A(() => [
            s("span", o1, [
              _(h(El), { class: "po-w-4 po-h-4 po-stroke-current" }),
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
    const t = e, l = $(), o = $();
    return t.btnType === "view" ? l.value = Bl : t.btnType === "edit" ? l.value = Rl : t.btnType === "delete" ? l.value = Hl : t.btnType === "icon" && t.btnIcon && (l.value = t.btnIcon), t.btnType === "view" ? o.value = "po-stroke-emerald-400" : t.btnType === "edit" ? o.value = "po-stroke-blue-400" : t.btnType === "delete" ? o.value = "po-stroke-red-400" : o.value = t.iconColor, (n, a) => (i(), u("span", null, [
      e.btnType === "icon" || e.btnType === "delete" || e.btnType === "edit" || e.btnType === "view" ? (i(), u("span", a1, [
        (i(), M(ve(l.value), {
          class: T(["po-w-4 po-stroke-2", o.value])
        }, null, 8, ["class"]))
      ])) : (i(), u("span", {
        key: 1,
        role: "button",
        class: T(["po-block po-text-sm genie-effect", e.textColor])
      }, g(e.label), 3))
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
    function t(l) {
      const o = typeof l == "string" ? parseFloat(l.replace(/,/g, "")) : l;
      return isNaN(o) ? "" : o.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    }
    return (l, o) => (i(), u("span", null, [
      e.amount !== null ? (i(), u("span", r1, g(t(e.amount)), 1)) : x("", !0)
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
    return (t, l) => (i(), M(ve(e.type), { class: "po-text-base po-text-slate-600 po-font-semibold" }, {
      default: A(() => [
        ne(g(e.text), 1)
      ]),
      _: 1
    }));
  }
});
function u1(e, t) {
  if (!e)
    return;
  const l = (o) => {
    o.target !== e.value && o.composedPath().includes(e.value) || typeof t == "function" && t();
  };
  return K(() => {
    window.addEventListener("click", l);
  }), yo(() => {
    window.removeEventListener("click", l);
  }), { listener: l };
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
  class: /* @__PURE__ */ T(["po-block po-truncate"])
}, k1 = ["id"], $1 = ["id"], _1 = {
  name: "PoMultiSelect",
  components: { CheckIcon: Dl }
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
    const l = e;
    function o() {
      return l.hasError ? "po-border-red-400 focus:po-border-red-600 focus:po-ring-red-600" : l.borderColor;
    }
    const n = $(""), a = $([]);
    function r(b) {
      a.value.splice(b, 1), d();
    }
    function p(b) {
      let S = n.value.split(",");
      b.key === "Enter" && 0 < n.value.length && (b.preventDefault(), S.forEach((v) => {
        let V = l.items.find(
          (k) => k.name.toLowerCase() === v.trim().toLowerCase()
        );
        V && a.value.push(V);
      }), n.value = ""), b.key === "Backspace" && n.value.length === 0 && a.value.pop(), d();
    }
    const c = $([]);
    function d() {
      c.value = a.value.map((b) => b.id);
    }
    K(() => {
      document.addEventListener("keydown", p);
    }), se(() => {
      document.removeEventListener("keydown", p);
    });
    const f = $(!1), m = C(
      () => n.value === "" ? l.items : l.items.filter((b) => b.name.toLowerCase().includes(n.value.toLowerCase()))
    );
    let y = $();
    u1(y, () => {
      f.value = !1;
    });
    function w(b) {
      a.value.push(b), n.value = "", d();
    }
    return Q(c, () => {
      t("update:modelValue", c.value);
    }), (b, S) => (i(), u("div", {
      ref_key: "multiSelectComponentRef",
      ref: y,
      class: T(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      s("label", {
        for: e.id,
        class: T([
          "po-text-sm po-font-medium po-flex po-items-center po-space-x-1",
          { "po-text-red-500": e.hasError },
          { "po-text-slate-700": !e.hasError }
        ])
      }, [
        s("span", d1, g(e.label), 1),
        e.required ? (i(), u("span", f1, "*")) : x("", !0),
        e.info !== null ? (i(), u("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          _(h(nl), { class: "po-fill-current" })
        ], 8, v1)) : x("", !0)
      ], 10, c1),
      s("div", m1, [
        s("div", {
          class: T([
            "po-border po-p-1 po-min-h-[2.38rem] po-flex po-flex-wrap po-items-center focus-within:po-border-mpao-lightblue po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white sm:po-text-sm",
            o()
          ])
        }, [
          a.value.length > 0 ? (i(), u("div", h1, [
            (i(!0), u(R, null, H(a.value, (v, V) => (i(), u("span", b1, [
              s("span", null, g(v.name), 1),
              s("span", {
                onClick: () => r(V),
                class: "po-rounded-full po-bg-white po-flex po-items-center po-justify-center po-w-4 po-h-4 po-cursor-pointer"
              }, [
                _(h(ll), { class: "po-w-3 po-fill-mpao-lightblue" })
              ], 8, g1)
            ]))), 256))
          ])) : x("", !0),
          $t(s("input", {
            id: e.id,
            "onUpdate:modelValue": S[0] || (S[0] = (v) => n.value = v),
            onFocus: S[1] || (S[1] = () => f.value = !0),
            class: "po-border-0 po-outline-none po-ring-0 po-grow"
          }, null, 40, y1), [
            [bo, n.value]
          ])
        ], 2),
        f.value ? (i(), u("ul", x1, [
          (i(!0), u(R, null, H(h(m), (v) => (i(), u("li", {
            onClick: () => w(v),
            key: v.id,
            value: v.id,
            class: T([
              "po-relative po-select-none po-py-2 hover:po-bg-mpao-lightblue hover:po-text-white po-cursor-pointer po-pl-3 po-pr-9"
            ])
          }, [
            s("span", w1, g(v.name), 1)
          ], 8, V1))), 128))
        ])) : x("", !0)
      ]),
      e.message !== null ? (i(), u("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, g(e.message), 9, k1)) : x("", !0),
      e.hasError && e.errorMessage !== null ? (i(), u("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-center po-space-x-1",
        id: `${e.id}-error`
      }, [
        _(h(Ts), { class: "po-fill-current po-w-4" }),
        s("span", null, g(e.errorMessage), 1)
      ], 8, $1)) : x("", !0)
    ], 2));
  }
}), C1 = { class: "po-flex po-pl-5" }, S1 = /* @__PURE__ */ s("div", { class: "po-shrink-0 po-flex po-flex-col" }, [
  /* @__PURE__ */ s("div", { class: "po-w-[2px] po-shrink-0 po-h-10" }),
  /* @__PURE__ */ s("div", { class: "po-bg-gradient-to-t po-from-orange-400 po-via-red-300 po-to-blue-500 po-w-[2px] po-grow" }),
  /* @__PURE__ */ s("div", { class: "po-w-[2px] po-shrink-0 po-h-12" })
], -1), E1 = { class: "po-grow po-pl-5 po-pt-5 po-space-y-3" }, O1 = { class: "po-px-2 po-pt-2 po-pb-6 po-relative" }, P1 = { class: "-po-mt-1 po-flex po-space-x-3 po-items-center" }, L1 = { class: "po-text-sm po-text-slate-600 po-font-medium" }, N1 = { class: "po-block po-text-xs po-text-slate-400" }, D1 = { class: "po-text-xs po-text-slate-500 po-pt-1" }, T1 = {
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
    return (t, l) => (i(), u("div", C1, [
      S1,
      s("div", E1, [
        (i(!0), u(R, null, H(e.timeline, (o) => (i(), u("div", O1, [
          s("span", {
            class: T(["po-rounded-full po-absolute po-flex po-items-center po-justify-center", [
              { "po-w-4 po-h-4 -po-left-[1.8rem] po-bg-blue-400": o.current },
              {
                "po-w-3 po-h-3 -po-left-[1.68rem] po-bg-green-400": !o.current
              }
            ]])
          }, [
            s("span", {
              class: T(["po-rounded-full po-bg-white", [
                { "po-w-2 po-h-2": o.current },
                { "po-w-1 po-h-1": !o.current }
              ]])
            }, null, 2)
          ], 2),
          s("div", null, [
            s("div", P1, [
              s("h4", L1, g(o.label), 1),
              s("span", N1, g(h(wl)(o.date)), 1)
            ]),
            s("p", D1, g(o.description), 1)
          ])
        ]))), 256))
      ])
    ]));
  }
}), A1 = {
  name: "PoTableCheckbox"
}, V0 = /* @__PURE__ */ Object.assign(A1, {
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
    return (l, o) => (i(), u(R, null, [
      e.isChecked ? (i(), M(h(Vs), {
        key: 0,
        onClick: o[0] || (o[0] = re(() => l.$emit("checkboxClicked", e.itemId), ["prevent"])),
        class: "po-w-6 po-fill-mpao-lightblue"
      })) : x("", !0),
      e.isChecked ? x("", !0) : (i(), u("span", {
        key: 1,
        onClick: o[1] || (o[1] = re(() => l.$emit("checkboxClicked", e.itemId), ["prevent"])),
        class: "po-h-5 po-w-5 po-rounded-full po-border-2 po-ml-[2px] po-block po-border-slate-300"
      }))
    ], 64));
  }
});
export {
  M1 as PoActionBar,
  a0 as PoAlert,
  nn as PoAppIcon,
  xa as PoAppTray,
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
  al as PoDescriptionList,
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
  xs as PoModal,
  y0 as PoMultiSelect,
  o0 as PoNotification,
  Na as PoNotificationHub,
  H1 as PoPageTitle,
  Tr as PoPagination,
  ns as PoProfileSwitcher,
  Ns as PoRadioInput,
  un as PoSearchBar,
  Z1 as PoSectionMenu,
  W1 as PoSelectField,
  R1 as PoSidebarDrawer,
  l0 as PoSlideover,
  e0 as PoStatsBlock,
  q1 as PoTable,
  h0 as PoTableAction,
  V0 as PoTableCheckbox,
  f0 as PoTabs,
  qs as PoTextarea,
  x0 as PoTimeline,
  Y1 as PoToggle,
  I1 as PoTopBar,
  b0 as Rufiyaa
};
