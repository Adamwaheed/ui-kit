import { openBlock as i, createElementBlock as u, createElementVNode as s, createVNode as _, unref as h, withCtx as j, renderSlot as Q, createBlock as M, resolveDynamicComponent as fe, createCommentVNode as x, computed as S, toDisplayString as y, ref as k, onMounted as K, onUnmounted as se, watch as J, withDirectives as $t, isRef as vl, vModelText as ho, cloneVNode as ml, h as Y, Fragment as R, inject as ee, provide as oe, watchEffect as X, defineComponent as q, toRaw as G, nextTick as $e, Teleport as _t, reactive as hl, shallowRef as bl, normalizeClass as N, Transition as Se, renderList as H, withModifiers as re, toRefs as Ve, mergeProps as Pe, createTextVNode as ne, onUpdated as bo, normalizeProps as Gt, guardReactiveProps as Kt, vModelCheckbox as gl, normalizeStyle as yl, onBeforeUnmount as go, createStaticVNode as xl } from "vue";
import { f as Vl } from "./FormatDate-ac18ec36.mjs";
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
      d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
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
      d: "M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
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
      d: "M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
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
      d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
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
      d: "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
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
      d: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
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
      d: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
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
      d: "M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
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
      d: "M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
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
      d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
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
      d: "M4.5 12.75l6 6 9-13.5"
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
      d: "M15.75 19.5L8.25 12l7.5-7.5"
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
      d: "M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
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
      d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
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
      d: "M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
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
      d: "M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
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
      d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
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
      d: "M6 18L18 6M6 6l12 12"
    })
  ]);
}
const Hl = { class: "po-bg-mpao-blue po-fixed po-top-0 po-w-full po-z-50 po-flex" }, ql = { class: "po-shrink-0 po-px-3 po-pt-3" }, Ul = {
  for: "sidebar-drawer-toggle",
  role: "button",
  class: "genie-effect po-flex po-items-center po-justify-center po-bg-[#2e5266] po-rounded-full po-w-10 po-h-10 po-select-none po-text-slate-100"
}, Gl = { class: "po-mx-auto po-max-w-full po-pr-4 po-grow sm:po-pr-4" }, Kl = { class: "po-flex po-relative po-h-16 po-items-center po-justify-between po-space-x-12" }, Wl = { class: "po-flex po-items-center po-space-x-3" }, Yl = {
  key: 0,
  class: "po-block po-w-6 po-text-slate-100 md:po-hidden",
  role: "button"
}, Zl = {
  name: "PoTopBar"
}, A1 = /* @__PURE__ */ Object.assign(Zl, {
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
    return (a, r) => (i(), u("nav", Hl, [
      s("div", ql, [
        s("label", Ul, [
          _(h(_l), { class: "po-w-6 po-fill-current" })
        ])
      ]),
      s("div", Gl, [
        s("div", Kl, [
          _(h(ln), { "app-name": e.appName }, {
            icon: j(() => [
              Q(a.$slots, "appIcon", {}, () => [
                e.appIcon ? (i(), M(fe(e.appIcon), { key: 0 })) : x("", !0)
              ])
            ]),
            _: 3
          }, 8, ["app-name"]),
          e.hasSearch ? (i(), M(h(pn), {
            key: 0,
            onQuery: o,
            onOnClear: n,
            "current-query": e.currentQuery
          }, null, 8, ["current-query"])) : x("", !0),
          s("div", Wl, [
            e.hasSearch ? (i(), u("span", Yl, [
              _(h(Ct), { class: "po-stroke-current" })
            ])) : x("", !0),
            _(h(La), {
              notifications: e.notifications,
              "has-new-notifications": e.hasNewNotifications
            }, null, 8, ["notifications", "has-new-notifications"]),
            _(h(ya), { "app-list": e.appList }, null, 8, ["app-list"]),
            _(h(ls), {
              "user-object": e.userObject,
              onButtonClick: l
            }, null, 8, ["user-object"])
          ])
        ])
      ])
    ]));
  }
}), Jl = { class: "po-flex po-items-center po-justify-center po-space-x-3" }, Ql = { class: "po-w-8 po-text-slate-100 app-icon" }, Xl = { class: "po-font-light po-text-lg po-text-slate-100" }, en = { class: "po-hidden md:po-block" }, tn = { class: "po-block md:po-hidden" }, on = {
  name: "PoAppIcon"
}, ln = /* @__PURE__ */ Object.assign(on, {
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
    const t = e, l = S(() => t.appName.match(/\b[A-Z]/g).join(""));
    return (o, n) => (i(), u("div", Jl, [
      s("div", Ql, [
        Q(o.$slots, "icon")
      ]),
      s("span", Xl, [
        s("span", en, y(e.appName), 1),
        s("span", tn, y(h(l)), 1)
      ])
    ]));
  }
}), nn = { class: "po-flex-grow po-hidden po-relative md:po-block" }, an = ["placeholder"], sn = { class: "po-absolute po-inset-y-0 po-left-0 po-flex po-items-center po-pl-3 po-pointer-events-none po-transition-all po-ease-linear po-duration-100 po-text-slate-400 po-origin-center peer-hover/search:po-scale-105 peer-focus/search:po-text-slate-100" }, rn = {
  name: "PoSearchBar"
}, pn = /* @__PURE__ */ Object.assign(rn, {
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
    let o = k("");
    const n = (a) => {
      a.key === "Enter" && 0 < o.value.length && t("query", o.value);
    };
    return K(() => {
      document.addEventListener("keydown", n), o.value = l.currentQuery;
    }), se(() => {
      document.removeEventListener("keydown", n);
    }), J(o, async (a, r) => {
      a === "" && t("onClear", !0);
    }), (a, r) => (i(), u("div", nn, [
      $t(s("input", {
        "onUpdate:modelValue": r[0] || (r[0] = (p) => vl(o) ? o.value = p : o = p),
        type: "text",
        id: "main-search",
        placeholder: e.placeholder,
        class: "peer/search po-bg-transparent po-border po-border-transparent po-text-slate-100 po-text-sm po-rounded-md po-ring-0 po-outline-none focus:po-outline-none focus:po-ring-0 po-transition-colors po-ease-linear po-duration-100 po-block po-w-full po-pl-10 po-p-2.5 po-appearance-none focus:po-border-slate-400 hover:po-border-slate-600"
      }, null, 8, an), [
        [ho, h(o)]
      ]),
      s("div", sn, [
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
var pe = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(pe || {}), _e = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(_e || {});
function U({ visible: e = !0, features: t = 0, ourProps: l, theirProps: o, ...n }) {
  var a;
  let r = un(o, l), p = Object.assign(n, { props: r });
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
  let { as: r, ...p } = Be(e, ["unmount", "static"]), c = (a = l.default) == null ? void 0 : a.call(l, o), d = {};
  if (o) {
    let f = !1, v = [];
    for (let [g, w] of Object.entries(o))
      typeof w == "boolean" && (f = !0), w === !0 && v.push(g);
    f && (d["data-headlessui-state"] = v.join(" "));
  }
  if (r === "template") {
    if (c = Vo(c ?? []), Object.keys(p).length > 0 || Object.keys(t).length > 0) {
      let [f, ...v] = c ?? [];
      if (!cn(f) || v.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${n} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(p).concat(Object.keys(t)).sort((g, w) => g.localeCompare(w)).map((g) => `  - ${g}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((g) => `  - ${g}`).join(`
`)].join(`
`));
      return ml(f, Object.assign({}, p, d));
    }
    return Array.isArray(c) && c.length === 1 ? c[0] : c;
  }
  return Y(r, Object.assign({}, p, d), { default: () => c });
}
function Vo(e) {
  return e.flatMap((t) => t.type === R ? Vo(t.children) : [t]);
}
function un(...e) {
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
function Be(e, t = []) {
  let l = Object.assign({}, e);
  for (let o of t)
    o in l && delete l[o];
  return l;
}
function cn(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let dn = 0;
function fn() {
  return ++dn;
}
function Z() {
  return fn();
}
var z = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(z || {});
function vn(e) {
  throw new Error("Unexpected object: " + e);
}
var le = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(le || {});
function mn(e, t) {
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
        vn(e);
    }
  })();
  return a === -1 ? o : a;
}
function O(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let wo = Symbol("Context");
var ae = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ae || {});
function hn() {
  return Le() !== null;
}
function Le() {
  return ee(wo, null);
}
function Qe(e) {
  oe(wo, e);
}
function Yt(e, t) {
  if (e)
    return e;
  let l = t ?? "button";
  if (typeof l == "string" && l.toLowerCase() === "button")
    return "button";
}
function Xe(e, t) {
  let l = k(Yt(e.value.type, e.value.as));
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
function ko({ container: e, accept: t, walk: l, enabled: o }) {
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
var te = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(te || {}), Ue = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Ue || {}), bn = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(bn || {});
function Et(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(ht)).sort((t, l) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (l.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Ot = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Ot || {});
function $o(e, t = 0) {
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
function je(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let gn = ["textarea", "input"].join(",");
function yn(e) {
  var t, l;
  return (l = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, gn)) != null ? l : !1;
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
function de(e, t, { sorted: l = !0, relativeTo: o = null, skipElements: n = [] } = {}) {
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
  })(), f = t & 32 ? { preventScroll: !0 } : {}, v = 0, g = p.length, w;
  do {
    if (v >= g || v + g <= 0)
      return 0;
    let b = d + v;
    if (t & 16)
      b = (b + g) % g;
    else {
      if (b < 0)
        return 3;
      if (b >= g)
        return 1;
    }
    w = p[b], w == null || w.focus(f), v += c;
  } while (w !== r.activeElement);
  return t & 6 && yn(w) && w.select(), w.hasAttribute("tabindex") || w.setAttribute("tabindex", "0"), 2;
}
function ct(e, t, l) {
  et || X((o) => {
    document.addEventListener(e, t, l), o(() => document.removeEventListener(e, t, l));
  });
}
function Lt(e, t, l = S(() => !0)) {
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
    return !$o(p, Ot.Loose) && p.tabIndex !== -1 && a.preventDefault(), t(a, p);
  }
  let n = k(null);
  ct("mousedown", (a) => {
    var r, p;
    l.value && (n.value = ((p = (r = a.composedPath) == null ? void 0 : r.call(a)) == null ? void 0 : p[0]) || a.target);
  }, !0), ct("click", (a) => {
    !n.value || (o(a, () => n.value), n.value = null);
  }, !0), ct("blur", (a) => o(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var be = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(be || {});
let xe = q({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: l }) {
  return () => {
    let { features: o, ...n } = e, a = { "aria-hidden": (o & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(o & 4) === 4 && (o & 2) !== 2 && { display: "none" } } };
    return U({ ourProps: a, theirProps: n, slot: {}, attrs: l, slots: t, name: "Hidden" });
  };
} });
function Nt(e = {}, t = null, l = []) {
  for (let [o, n] of Object.entries(e))
    Co(l, _o(t, o), n);
  return l;
}
function _o(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Co(e, t, l) {
  if (Array.isArray(l))
    for (let [o, n] of l.entries())
      Co(e, _o(t, o.toString()), n);
  else
    l instanceof Date ? e.push([t, l.toISOString()]) : typeof l == "boolean" ? e.push([t, l ? "1" : "0"]) : typeof l == "string" ? e.push([t, l]) : typeof l == "number" ? e.push([t, `${l}`]) : l == null ? e.push([t, ""]) : Nt(l, t, e);
}
function So(e) {
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
  let o = k(l == null ? void 0 : l.value), n = S(() => e.value !== void 0);
  return [S(() => n.value ? e.value : o.value), function(a) {
    return n.value || (o.value = a), t == null ? void 0 : t(a);
  }];
}
function Zt(e) {
  return [e.screenX, e.screenY];
}
function xn() {
  let e = k([-1, -1]);
  return { wasMoved(t) {
    let l = Zt(t);
    return e.value[0] === l[0] && e.value[1] === l[1] ? !1 : (e.value = l, !0);
  }, update(t) {
    e.value = Zt(t);
  } };
}
function Vn(e, t) {
  return e === t;
}
var wn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(wn || {}), kn = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(kn || {}), $n = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))($n || {});
let Eo = Symbol("ComboboxContext");
function Ae(e) {
  let t = ee(Eo, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, Ae), l;
  }
  return t;
}
let _n = q({ name: "Combobox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => Vn }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String }, nullable: { type: Boolean, default: !1 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: l, emit: o }) {
  let n = k(1), a = k(null), r = k(null), p = k(null), c = k(null), d = k({ static: !1, hold: !1 }), f = k([]), v = k(null), g = k(1), w = k(!1);
  function b(P = (D) => D) {
    let D = v.value !== null ? f.value[v.value] : null, T = Pt(P(f.value.slice()), (I) => O(I.dataRef.domRef)), L = D ? T.indexOf(D) : null;
    return L === -1 && (L = null), { options: T, activeOptionIndex: L };
  }
  let C = S(() => e.multiple ? 1 : 0), m = S(() => e.nullable), [V, $] = Dt(S(() => e.modelValue === void 0 ? W(C.value, { [1]: [], [0]: void 0 }) : e.modelValue), (P) => o("update:modelValue", P), S(() => e.defaultValue)), E = { comboboxState: n, value: V, mode: C, compare(P, D) {
    if (typeof e.by == "string") {
      let T = e.by;
      return (P == null ? void 0 : P[T]) === (D == null ? void 0 : D[T]);
    }
    return e.by(P, D);
  }, defaultValue: S(() => e.defaultValue), nullable: m, inputRef: r, labelRef: a, buttonRef: p, optionsRef: c, disabled: S(() => e.disabled), options: f, change(P) {
    $(P);
  }, activeOptionIndex: S(() => {
    if (w.value && v.value === null && f.value.length > 0) {
      let P = f.value.findIndex((D) => !D.dataRef.disabled);
      if (P !== -1)
        return P;
    }
    return v.value;
  }), activationTrigger: g, optionsPropsRef: d, closeCombobox() {
    w.value = !1, !e.disabled && n.value !== 1 && (n.value = 1, v.value = null);
  }, openCombobox() {
    if (w.value = !0, e.disabled || n.value === 0)
      return;
    let P = f.value.findIndex((D) => {
      let T = G(D.dataRef.value);
      return W(C.value, { [0]: () => E.compare(G(E.value.value), G(T)), [1]: () => G(E.value.value).some((L) => E.compare(G(L), G(T))) });
    });
    P !== -1 && (v.value = P), n.value = 0;
  }, goToOption(P, D, T) {
    if (w.value = !1, e.disabled || c.value && !d.value.static && n.value === 1)
      return;
    let L = b();
    if (L.activeOptionIndex === null) {
      let F = L.options.findIndex((he) => !he.dataRef.disabled);
      F !== -1 && (L.activeOptionIndex = F);
    }
    let I = mn(P === le.Specific ? { focus: le.Specific, id: D } : { focus: P }, { resolveItems: () => L.options, resolveActiveIndex: () => L.activeOptionIndex, resolveId: (F) => F.id, resolveDisabled: (F) => F.dataRef.disabled });
    v.value = I, g.value = T ?? 1, f.value = L.options;
  }, selectOption(P) {
    let D = f.value.find((L) => L.id === P);
    if (!D)
      return;
    let { dataRef: T } = D;
    $(W(C.value, { [0]: () => T.value, [1]: () => {
      let L = G(E.value.value).slice(), I = G(T.value), F = L.findIndex((he) => E.compare(I, G(he)));
      return F === -1 ? L.push(I) : L.splice(F, 1), L;
    } }));
  }, selectActiveOption() {
    if (E.activeOptionIndex.value === null)
      return;
    let { dataRef: P, id: D } = f.value[E.activeOptionIndex.value];
    $(W(C.value, { [0]: () => P.value, [1]: () => {
      let T = G(E.value.value).slice(), L = G(P.value), I = T.findIndex((F) => E.compare(L, G(F)));
      return I === -1 ? T.push(L) : T.splice(I, 1), T;
    } })), E.goToOption(le.Specific, D);
  }, registerOption(P, D) {
    let T = { id: P, dataRef: D }, L = b((I) => [...I, T]);
    if (v.value === null) {
      let I = D.value.value;
      W(C.value, { [0]: () => E.compare(G(E.value.value), G(I)), [1]: () => G(E.value.value).some((F) => E.compare(G(F), G(I))) }) && (L.activeOptionIndex = L.options.indexOf(T));
    }
    f.value = L.options, v.value = L.activeOptionIndex, g.value = 1;
  }, unregisterOption(P) {
    let D = b((T) => {
      let L = T.findIndex((I) => I.id === P);
      return L !== -1 && T.splice(L, 1), T;
    });
    f.value = D.options, v.value = D.activeOptionIndex, g.value = 1;
  } };
  Lt([r, p, c], () => E.closeCombobox(), S(() => n.value === 0)), oe(Eo, E), Qe(S(() => W(n.value, { [0]: ae.Open, [1]: ae.Closed })));
  let B = S(() => E.activeOptionIndex.value === null ? null : f.value[E.activeOptionIndex.value].dataRef.value), A = S(() => {
    var P;
    return (P = O(r)) == null ? void 0 : P.closest("form");
  });
  return K(() => {
    J([A], () => {
      if (!A.value || e.defaultValue === void 0)
        return;
      function P() {
        E.change(e.defaultValue);
      }
      return A.value.addEventListener("reset", P), () => {
        var D;
        (D = A.value) == null || D.removeEventListener("reset", P);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: P, disabled: D, ...T } = e, L = { open: n.value === 0, disabled: D, activeIndex: E.activeOptionIndex.value, activeOption: B.value, value: V.value };
    return Y(R, [...P != null && V.value != null ? Nt({ [P]: V.value }).map(([I, F]) => Y(xe, St({ features: be.Hidden, key: I, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: I, value: F }))) : [], U({ theirProps: { ...l, ...Be(T, ["modelValue", "defaultValue", "nullable", "multiple", "onUpdate:modelValue", "by"]) }, ourProps: {}, slot: L, slots: t, attrs: l, name: "Combobox" })]);
  };
} }), Cn = q({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-combobox-label-${Z()}` } }, setup(e, { attrs: t, slots: l }) {
  let o = Ae("ComboboxLabel");
  function n() {
    var a;
    (a = O(o.inputRef)) == null || a.focus({ preventScroll: !0 });
  }
  return () => {
    let a = { open: o.comboboxState.value === 0, disabled: o.disabled.value }, { id: r, ...p } = e, c = { id: r, ref: o.labelRef, onClick: n };
    return U({ ourProps: c, theirProps: p, slot: a, attrs: t, slots: l, name: "ComboboxLabel" });
  };
} }), Sn = q({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-combobox-button-${Z()}` } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = Ae("ComboboxButton");
  o({ el: n.buttonRef, $el: n.buttonRef });
  function a(c) {
    n.disabled.value || (n.comboboxState.value === 0 ? n.closeCombobox() : (c.preventDefault(), n.openCombobox()), $e(() => {
      var d;
      return (d = O(n.inputRef)) == null ? void 0 : d.focus({ preventScroll: !0 });
    }));
  }
  function r(c) {
    switch (c.key) {
      case z.ArrowDown:
        c.preventDefault(), c.stopPropagation(), n.comboboxState.value === 1 && n.openCombobox(), $e(() => {
          var d;
          return (d = n.inputRef.value) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        return;
      case z.ArrowUp:
        c.preventDefault(), c.stopPropagation(), n.comboboxState.value === 1 && (n.openCombobox(), $e(() => {
          n.value.value || n.goToOption(le.Last);
        })), $e(() => {
          var d;
          return (d = n.inputRef.value) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        return;
      case z.Escape:
        if (n.comboboxState.value !== 0)
          return;
        c.preventDefault(), n.optionsRef.value && !n.optionsPropsRef.value.static && c.stopPropagation(), n.closeCombobox(), $e(() => {
          var d;
          return (d = n.inputRef.value) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        return;
    }
  }
  let p = Xe(S(() => ({ as: e.as, type: t.type })), n.buttonRef);
  return () => {
    var c, d;
    let f = { open: n.comboboxState.value === 0, disabled: n.disabled.value, value: n.value.value }, { id: v, ...g } = e, w = { ref: n.buttonRef, id: v, type: p.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (c = O(n.optionsRef)) == null ? void 0 : c.id, "aria-expanded": n.disabled.value ? void 0 : n.comboboxState.value === 0, "aria-labelledby": n.labelRef.value ? [(d = O(n.labelRef)) == null ? void 0 : d.id, v].join(" ") : void 0, disabled: n.disabled.value === !0 ? !0 : void 0, onKeydown: r, onClick: a };
    return U({ ourProps: w, theirProps: g, slot: f, attrs: t, slots: l, name: "ComboboxButton" });
  };
} }), En = q({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: () => `headlessui-combobox-input-${Z()}` } }, emits: { change: (e) => !0 }, setup(e, { emit: t, attrs: l, slots: o, expose: n }) {
  let a = Ae("ComboboxInput"), r = { value: !1 };
  n({ el: a.inputRef, $el: a.inputRef });
  let p = S(() => {
    var m;
    let V = a.value.value;
    return O(a.inputRef) ? typeof e.displayValue < "u" && V !== void 0 ? (m = e.displayValue(V)) != null ? m : "" : typeof V == "string" ? V : "" : "";
  });
  K(() => {
    J([p, a.comboboxState], ([m, V], [$, E]) => {
      if (r.value)
        return;
      let B = O(a.inputRef);
      !B || (E === 0 && V === 1 || m !== $) && (B.value = m);
    }, { immediate: !0 });
  });
  let c = k(!1);
  function d() {
    c.value = !0;
  }
  function f() {
    setTimeout(() => {
      c.value = !1;
    });
  }
  function v(m) {
    switch (r.value = !0, m.key) {
      case z.Backspace:
      case z.Delete:
        if (a.mode.value !== 0 || !a.nullable.value)
          return;
        let V = m.currentTarget;
        requestAnimationFrame(() => {
          if (V.value === "") {
            a.change(null);
            let $ = O(a.optionsRef);
            $ && ($.scrollTop = 0), a.goToOption(le.Nothing);
          }
        });
        break;
      case z.Enter:
        if (r.value = !1, a.comboboxState.value !== 0 || c.value)
          return;
        if (m.preventDefault(), m.stopPropagation(), a.activeOptionIndex.value === null) {
          a.closeCombobox();
          return;
        }
        a.selectActiveOption(), a.mode.value === 0 && a.closeCombobox();
        break;
      case z.ArrowDown:
        return r.value = !1, m.preventDefault(), m.stopPropagation(), W(a.comboboxState.value, { [0]: () => a.goToOption(le.Next), [1]: () => a.openCombobox() });
      case z.ArrowUp:
        return r.value = !1, m.preventDefault(), m.stopPropagation(), W(a.comboboxState.value, { [0]: () => a.goToOption(le.Previous), [1]: () => {
          a.openCombobox(), $e(() => {
            a.value.value || a.goToOption(le.Last);
          });
        } });
      case z.Home:
        if (m.shiftKey)
          break;
        return r.value = !1, m.preventDefault(), m.stopPropagation(), a.goToOption(le.First);
      case z.PageUp:
        return r.value = !1, m.preventDefault(), m.stopPropagation(), a.goToOption(le.First);
      case z.End:
        if (m.shiftKey)
          break;
        return r.value = !1, m.preventDefault(), m.stopPropagation(), a.goToOption(le.Last);
      case z.PageDown:
        return r.value = !1, m.preventDefault(), m.stopPropagation(), a.goToOption(le.Last);
      case z.Escape:
        if (r.value = !1, a.comboboxState.value !== 0)
          return;
        m.preventDefault(), a.optionsRef.value && !a.optionsPropsRef.value.static && m.stopPropagation(), a.closeCombobox();
        break;
      case z.Tab:
        if (r.value = !1, a.comboboxState.value !== 0)
          return;
        a.mode.value === 0 && a.selectActiveOption(), a.closeCombobox();
        break;
    }
  }
  function g(m) {
    t("change", m);
  }
  function w(m) {
    a.openCombobox(), t("change", m);
  }
  function b() {
    r.value = !1;
  }
  let C = S(() => {
    var m, V, $, E;
    return (E = ($ = (V = e.defaultValue) != null ? V : a.defaultValue.value !== void 0 ? (m = e.displayValue) == null ? void 0 : m.call(e, a.defaultValue.value) : null) != null ? $ : a.defaultValue.value) != null ? E : "";
  });
  return () => {
    var m, V, $, E, B, A;
    let P = { open: a.comboboxState.value === 0 }, { id: D, displayValue: T, ...L } = e, I = { "aria-controls": (m = a.optionsRef.value) == null ? void 0 : m.id, "aria-expanded": a.disabled.value ? void 0 : a.comboboxState.value === 0, "aria-activedescendant": a.activeOptionIndex.value === null || (V = a.options.value[a.activeOptionIndex.value]) == null ? void 0 : V.id, "aria-multiselectable": a.mode.value === 1 ? !0 : void 0, "aria-labelledby": (B = ($ = O(a.labelRef)) == null ? void 0 : $.id) != null ? B : (E = O(a.buttonRef)) == null ? void 0 : E.id, id: D, onCompositionstart: d, onCompositionend: f, onKeydown: v, onChange: g, onInput: w, onBlur: b, role: "combobox", type: (A = l.type) != null ? A : "text", tabIndex: 0, ref: a.inputRef, defaultValue: C.value };
    return U({ ourProps: I, theirProps: L, slot: P, attrs: l, slots: o, features: pe.RenderStrategy | pe.Static, name: "ComboboxInput" });
  };
} }), On = q({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, hold: { type: [Boolean], default: !1 } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = Ae("ComboboxOptions"), a = `headlessui-combobox-options-${Z()}`;
  o({ el: n.optionsRef, $el: n.optionsRef }), X(() => {
    n.optionsPropsRef.value.static = e.static;
  }), X(() => {
    n.optionsPropsRef.value.hold = e.hold;
  });
  let r = Le(), p = S(() => r !== null ? r.value === ae.Open : n.comboboxState.value === 0);
  return ko({ container: S(() => O(n.optionsRef)), enabled: S(() => n.comboboxState.value === 0), accept(c) {
    return c.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : c.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(c) {
    c.setAttribute("role", "none");
  } }), () => {
    var c, d, f, v;
    let g = { open: n.comboboxState.value === 0 }, w = { "aria-activedescendant": n.activeOptionIndex.value === null || (c = n.options.value[n.activeOptionIndex.value]) == null ? void 0 : c.id, "aria-labelledby": (v = (d = O(n.labelRef)) == null ? void 0 : d.id) != null ? v : (f = O(n.buttonRef)) == null ? void 0 : f.id, id: a, ref: n.optionsRef, role: "listbox" }, b = Be(e, ["hold"]);
    return U({ ourProps: w, theirProps: b, slot: g, attrs: t, slots: l, features: pe.RenderStrategy | pe.Static, visible: p.value, name: "ComboboxOptions" });
  };
} }), Pn = q({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: l, expose: o }) {
  let n = Ae("ComboboxOption"), a = `headlessui-combobox-option-${Z()}`, r = k(null);
  o({ el: r, $el: r });
  let p = S(() => n.activeOptionIndex.value !== null ? n.options.value[n.activeOptionIndex.value].id === a : !1), c = S(() => W(n.mode.value, { [0]: () => n.compare(G(n.value.value), G(e.value)), [1]: () => G(n.value.value).some((m) => n.compare(G(m), G(e.value))) })), d = S(() => ({ disabled: e.disabled, value: e.value, domRef: r }));
  K(() => n.registerOption(a, d)), se(() => n.unregisterOption(a)), X(() => {
    n.comboboxState.value === 0 && (!p.value || n.activationTrigger.value !== 0 && $e(() => {
      var m, V;
      return (V = (m = O(r)) == null ? void 0 : m.scrollIntoView) == null ? void 0 : V.call(m, { block: "nearest" });
    }));
  });
  function f(m) {
    if (e.disabled)
      return m.preventDefault();
    n.selectOption(a), n.mode.value === 0 && n.closeCombobox();
  }
  function v() {
    if (e.disabled)
      return n.goToOption(le.Nothing);
    n.goToOption(le.Specific, a);
  }
  let g = xn();
  function w(m) {
    g.update(m);
  }
  function b(m) {
    !g.wasMoved(m) || e.disabled || p.value || n.goToOption(le.Specific, a, 0);
  }
  function C(m) {
    !g.wasMoved(m) || e.disabled || !p.value || n.optionsPropsRef.value.hold || n.goToOption(le.Nothing);
  }
  return () => {
    let { disabled: m } = e, V = { active: p.value, selected: c.value, disabled: m }, $ = { id: a, ref: r, role: "option", tabIndex: m === !0 ? void 0 : -1, "aria-disabled": m === !0 ? !0 : void 0, "aria-selected": c.value, disabled: void 0, onClick: f, onFocus: v, onPointerenter: w, onMouseenter: w, onPointermove: b, onMousemove: b, onPointerleave: C, onMouseleave: C };
    return U({ ourProps: $, theirProps: e, slot: V, attrs: l, slots: t, name: "ComboboxOption" });
  };
} });
function Ln(e, t, l) {
  et || X((o) => {
    window.addEventListener(e, t, l), o(() => window.removeEventListener(e, t, l));
  });
}
var me = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(me || {});
function Tt() {
  let e = k(0);
  return Ln("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function jt(e, t, l, o) {
  et || X((n) => {
    e = e ?? window, e.addEventListener(t, l, o), n(() => e.removeEventListener(t, l, o));
  });
}
function Nn(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
var Oo = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Oo || {});
let Ie = Object.assign(q({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: Object, default: k(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = k(null);
  o({ el: n, $el: n });
  let a = S(() => ie(n));
  Dn({ ownerDocument: a }, S(() => Boolean(e.features & 16)));
  let r = Tn({ ownerDocument: a, container: n, initialFocus: S(() => e.initialFocus) }, S(() => Boolean(e.features & 2)));
  jn({ ownerDocument: a, container: n, containers: e.containers, previousActiveElement: r }, S(() => Boolean(e.features & 8)));
  let p = Tt();
  function c(g) {
    let w = O(n);
    w && ((b) => b())(() => {
      W(p.value, { [me.Forwards]: () => de(w, te.First, { skipElements: [g.relatedTarget] }), [me.Backwards]: () => de(w, te.Last, { skipElements: [g.relatedTarget] }) });
    });
  }
  let d = k(!1);
  function f(g) {
    g.key === "Tab" && (d.value = !0, requestAnimationFrame(() => {
      d.value = !1;
    }));
  }
  function v(g) {
    var w;
    let b = new Set((w = e.containers) == null ? void 0 : w.value);
    b.add(n);
    let C = g.relatedTarget;
    !C || C.dataset.headlessuiFocusGuard !== "true" && (Po(b, C) || (d.value ? de(O(n), W(p.value, { [me.Forwards]: () => te.Next, [me.Backwards]: () => te.Previous }) | te.WrapAround, { relativeTo: g.target }) : g.target instanceof HTMLElement && je(g.target)));
  }
  return () => {
    let g = {}, w = { ref: n, onKeydown: f, onFocusout: v }, { features: b, initialFocus: C, containers: m, ...V } = e;
    return Y(R, [Boolean(b & 4) && Y(xe, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: be.Focusable }), U({ ourProps: w, theirProps: { ...t, ...V }, slot: g, attrs: t, slots: l, name: "FocusTrap" }), Boolean(b & 4) && Y(xe, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: c, features: be.Focusable })]);
  };
} }), { features: Oo });
function Dn({ ownerDocument: e }, t) {
  let l = k(null);
  function o() {
    var a;
    l.value || (l.value = (a = e.value) == null ? void 0 : a.activeElement);
  }
  function n() {
    !l.value || (je(l.value), l.value = null);
  }
  K(() => {
    J(t, (a, r) => {
      a !== r && (a ? o() : n());
    }, { immediate: !0 });
  }), se(n);
}
function Tn({ ownerDocument: e, container: t, initialFocus: l }, o) {
  let n = k(null), a = k(!1);
  return K(() => a.value = !0), se(() => a.value = !1), K(() => {
    J([t, l, o], (r, p) => {
      if (r.every((d, f) => (p == null ? void 0 : p[f]) === d) || !o.value)
        return;
      let c = O(t);
      !c || Nn(() => {
        var d, f;
        if (!a.value)
          return;
        let v = O(l), g = (d = e.value) == null ? void 0 : d.activeElement;
        if (v) {
          if (v === g) {
            n.value = g;
            return;
          }
        } else if (c.contains(g)) {
          n.value = g;
          return;
        }
        v ? je(v) : de(c, te.First | te.NoScroll) === Ue.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), n.value = (f = e.value) == null ? void 0 : f.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), n;
}
function jn({ ownerDocument: e, container: t, containers: l, previousActiveElement: o }, n) {
  var a;
  jt((a = e.value) == null ? void 0 : a.defaultView, "focus", (r) => {
    if (!n.value)
      return;
    let p = new Set(l == null ? void 0 : l.value);
    p.add(t);
    let c = o.value;
    if (!c)
      return;
    let d = r.target;
    d && d instanceof HTMLElement ? Po(p, d) ? (o.value = d, je(d)) : (r.preventDefault(), r.stopPropagation(), je(c)) : je(o.value);
  }, !0);
}
function Po(e, t) {
  var l;
  for (let o of e)
    if ((l = o.value) != null && l.contains(t))
      return !0;
  return !1;
}
let Jt = "body > *", De = /* @__PURE__ */ new Set(), ke = /* @__PURE__ */ new Map();
function Qt(e) {
  e.setAttribute("aria-hidden", "true"), e.inert = !0;
}
function Xt(e) {
  let t = ke.get(e);
  !t || (t["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert);
}
function Bn(e, t = k(!0)) {
  X((l) => {
    if (!t.value || !e.value)
      return;
    let o = e.value, n = ie(o);
    if (n) {
      De.add(o);
      for (let a of ke.keys())
        a.contains(o) && (Xt(a), ke.delete(a));
      n.querySelectorAll(Jt).forEach((a) => {
        if (a instanceof HTMLElement) {
          for (let r of De)
            if (a.contains(r))
              return;
          De.size === 1 && (ke.set(a, { "aria-hidden": a.getAttribute("aria-hidden"), inert: a.inert }), Qt(a));
        }
      }), l(() => {
        if (De.delete(o), De.size > 0)
          n.querySelectorAll(Jt).forEach((a) => {
            if (a instanceof HTMLElement && !ke.has(a)) {
              for (let r of De)
                if (a.contains(r))
                  return;
              ke.set(a, { "aria-hidden": a.getAttribute("aria-hidden"), inert: a.inert }), Qt(a);
            }
          });
        else
          for (let a of ke.keys())
            Xt(a), ke.delete(a);
      });
    }
  });
}
let Lo = Symbol("ForcePortalRootContext");
function An() {
  return ee(Lo, !1);
}
let bt = q({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: l }) {
  return oe(Lo, e.force), () => {
    let { force: o, ...n } = e;
    return U({ theirProps: n, ourProps: {}, slot: {}, slots: t, attrs: l, name: "ForcePortalRoot" });
  };
} });
function In(e) {
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
let No = q({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: l }) {
  let o = k(null), n = S(() => ie(o)), a = An(), r = ee(Do, null), p = k(a === !0 || r == null ? In(o.value) : r.resolveTarget());
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
} }), Do = Symbol("PortalGroupContext"), Rn = q({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: l }) {
  let o = hl({ resolveTarget() {
    return e.target;
  } });
  return oe(Do, o), () => {
    let { target: n, ...a } = e;
    return U({ theirProps: a, ourProps: {}, slot: {}, attrs: t, slots: l, name: "PortalGroup" });
  };
} }), To = Symbol("StackContext");
var gt = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(gt || {});
function Mn() {
  return ee(To, () => {
  });
}
function Fn({ type: e, enabled: t, element: l, onUpdate: o }) {
  let n = Mn();
  function a(...r) {
    o == null || o(...r), n(...r);
  }
  K(() => {
    J(t, (r, p) => {
      r ? a(0, e, l) : p === !0 && a(1, e, l);
    }, { immediate: !0, flush: "sync" });
  }), se(() => {
    t.value && a(1, e, l);
  }), oe(To, a);
}
let jo = Symbol("DescriptionContext");
function zn() {
  let e = ee(jo, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function tt({ slot: e = k({}), name: t = "Description", props: l = {} } = {}) {
  let o = k([]);
  function n(a) {
    return o.value.push(a), () => {
      let r = o.value.indexOf(a);
      r !== -1 && o.value.splice(r, 1);
    };
  }
  return oe(jo, { register: n, slot: e, name: t, props: l }), S(() => o.value.length > 0 ? o.value.join(" ") : void 0);
}
let Hn = q({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${Z()}` } }, setup(e, { attrs: t, slots: l }) {
  let o = zn();
  return K(() => se(o.register(e.id))), () => {
    let { name: n = "Description", slot: a = k({}), props: r = {} } = o, { id: p, ...c } = e, d = { ...Object.entries(r).reduce((f, [v, g]) => Object.assign(f, { [v]: h(g) }), {}), id: p };
    return U({ ourProps: d, theirProps: c, slot: a.value, attrs: t, slots: l, name: n });
  };
} });
function Bt() {
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
function qn() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
var Un = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Un || {});
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
  let r = k(!1);
  K(() => {
    r.value = !0;
  });
  let p = k(0), c = Le(), d = S(() => e.open === ze && c !== null ? W(c.value, { [ae.Open]: !0, [ae.Closed]: !1 }) : e.open), f = k(/* @__PURE__ */ new Set()), v = k(null), g = k(null), w = S(() => ie(v));
  if (n({ el: v, $el: v }), !(e.open !== ze || c !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof d.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${d.value === ze ? void 0 : e.open}`);
  let b = S(() => r.value && d.value ? 0 : 1), C = S(() => b.value === 0), m = S(() => p.value > 1), V = ee(yt, null) !== null, $ = S(() => m.value ? "parent" : "leaf");
  Bn(v, S(() => m.value ? C.value : !1)), Fn({ type: "Dialog", enabled: S(() => b.value === 0), element: v, onUpdate: (D, T, L) => {
    if (T === "Dialog")
      return W(D, { [gt.Add]() {
        f.value.add(L), p.value += 1;
      }, [gt.Remove]() {
        f.value.delete(L), p.value -= 1;
      } });
  } });
  let E = tt({ name: "DialogDescription", slot: S(() => ({ open: d.value })) }), B = k(null), A = { titleId: B, panelRef: k(null), dialogState: b, setTitleId(D) {
    B.value !== D && (B.value = D);
  }, close() {
    t("close", !1);
  } };
  oe(yt, A);
  function P() {
    var D, T, L;
    return [...Array.from((T = (D = w.value) == null ? void 0 : D.querySelectorAll("body > *, [data-headlessui-portal]")) != null ? T : []).filter((I) => !(!(I instanceof HTMLElement) || I.contains(O(g)) || A.panelRef.value && I.contains(A.panelRef.value))), (L = A.panelRef.value) != null ? L : v.value];
  }
  return Lt(() => P(), (D, T) => {
    A.close(), $e(() => T == null ? void 0 : T.focus());
  }, S(() => b.value === 0 && !m.value)), jt((a = w.value) == null ? void 0 : a.defaultView, "keydown", (D) => {
    D.defaultPrevented || D.key === z.Escape && b.value === 0 && (m.value || (D.preventDefault(), D.stopPropagation(), A.close()));
  }), X((D) => {
    var T;
    if (b.value !== 0 || V)
      return;
    let L = w.value;
    if (!L)
      return;
    let I = Bt(), F = window.pageYOffset;
    function he(ce, ue, we) {
      let it = ce.style.getPropertyValue(ue);
      return Object.assign(ce.style, { [ue]: we }), I.add(() => {
        Object.assign(ce.style, { [ue]: it });
      });
    }
    let Ne = L == null ? void 0 : L.documentElement, rt = ((T = L.defaultView) != null ? T : window).innerWidth - Ne.clientWidth;
    if (he(Ne, "overflow", "hidden"), rt > 0) {
      let ce = Ne.clientWidth - Ne.offsetWidth, ue = rt - ce;
      he(Ne, "paddingRight", `${ue}px`);
    }
    if (qn()) {
      he(L.body, "marginTop", `-${F}px`), window.scrollTo(0, 0);
      let ce = null;
      I.addEventListener(L, "click", (ue) => {
        if (ue.target instanceof HTMLElement)
          try {
            let we = ue.target.closest("a");
            if (!we)
              return;
            let { hash: it } = new URL(we.href), pt = L.querySelector(it);
            pt && !P().some((fl) => fl.contains(pt)) && (ce = pt);
          } catch {
          }
      }, !0), I.addEventListener(L, "touchmove", (ue) => {
        ue.target instanceof HTMLElement && !P().some((we) => we.contains(ue.target)) && ue.preventDefault();
      }, { passive: !1 }), I.add(() => {
        window.scrollTo(0, window.pageYOffset + F), ce && ce.isConnected && (ce.scrollIntoView({ block: "nearest" }), ce = null);
      });
    }
    D(I.dispose);
  }), X((D) => {
    if (b.value !== 0)
      return;
    let T = O(v);
    if (!T)
      return;
    let L = new IntersectionObserver((I) => {
      for (let F of I)
        F.boundingClientRect.x === 0 && F.boundingClientRect.y === 0 && F.boundingClientRect.width === 0 && F.boundingClientRect.height === 0 && A.close();
    });
    L.observe(T), D(() => L.disconnect());
  }), () => {
    let { id: D, open: T, initialFocus: L, ...I } = e, F = { ...l, ref: v, id: D, role: "dialog", "aria-modal": b.value === 0 ? !0 : void 0, "aria-labelledby": B.value, "aria-describedby": E.value }, he = { open: b.value === 0 };
    return Y(bt, { force: !0 }, () => [Y(No, () => Y(Rn, { target: v.value }, () => Y(bt, { force: !1 }, () => Y(Ie, { initialFocus: L, containers: f, features: C.value ? W($.value, { parent: Ie.features.RestoreFocus, leaf: Ie.features.All & ~Ie.features.FocusLock }) : Ie.features.None }, () => U({ ourProps: F, theirProps: I, slot: he, attrs: l, slots: o, visible: b.value === 0, features: pe.RenderStrategy | pe.Static, name: "Dialog" }))))), Y(xe, { features: be.Hidden, ref: g })]);
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
  let n = Me("DialogBackdrop"), a = k(null);
  return o({ el: a, $el: a }), K(() => {
    if (n.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: r, ...p } = e, c = { id: r, ref: a, "aria-hidden": !0 };
    return Y(bt, { force: !0 }, () => Y(No, () => U({ ourProps: c, theirProps: { ...t, ...p }, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogBackdrop" })));
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
var Gn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Gn || {});
let Ao = Symbol("DisclosureContext");
function At(e) {
  let t = ee(Ao, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, At), l;
  }
  return t;
}
let Io = Symbol("DisclosurePanelContext");
function Kn() {
  return ee(Io, null);
}
let eo = q({ name: "Disclosure", props: { as: { type: [Object, String], default: "template" }, defaultOpen: { type: [Boolean], default: !1 } }, setup(e, { slots: t, attrs: l }) {
  let o = k(e.defaultOpen ? 0 : 1), n = k(null), a = k(null), r = { buttonId: k(null), panelId: k(null), disclosureState: o, panel: n, button: a, toggleDisclosure() {
    o.value = W(o.value, { [0]: 1, [1]: 0 });
  }, closeDisclosure() {
    o.value !== 1 && (o.value = 1);
  }, close(p) {
    r.closeDisclosure();
    let c = (() => p ? p instanceof HTMLElement ? p : p.value instanceof HTMLElement ? O(p) : O(r.button) : O(r.button))();
    c == null || c.focus();
  } };
  return oe(Ao, r), Qe(S(() => W(o.value, { [0]: ae.Open, [1]: ae.Closed }))), () => {
    let { defaultOpen: p, ...c } = e, d = { open: o.value === 0, close: r.close };
    return U({ theirProps: c, ourProps: {}, slot: d, slots: t, attrs: l, name: "Disclosure" });
  };
} }), to = q({ name: "DisclosureButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-disclosure-button-${Z()}` } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = At("DisclosureButton");
  K(() => {
    n.buttonId.value = e.id;
  }), se(() => {
    n.buttonId.value = null;
  });
  let a = Kn(), r = S(() => a === null ? !1 : a.value === n.panelId.value), p = k(null);
  o({ el: p, $el: p }), r.value || X(() => {
    n.button.value = p.value;
  });
  let c = Xe(S(() => ({ as: e.as, type: t.type })), p);
  function d() {
    var g;
    e.disabled || (r.value ? (n.toggleDisclosure(), (g = O(n.button)) == null || g.focus()) : n.toggleDisclosure());
  }
  function f(g) {
    var w;
    if (!e.disabled)
      if (r.value)
        switch (g.key) {
          case z.Space:
          case z.Enter:
            g.preventDefault(), g.stopPropagation(), n.toggleDisclosure(), (w = O(n.button)) == null || w.focus();
            break;
        }
      else
        switch (g.key) {
          case z.Space:
          case z.Enter:
            g.preventDefault(), g.stopPropagation(), n.toggleDisclosure();
            break;
        }
  }
  function v(g) {
    switch (g.key) {
      case z.Space:
        g.preventDefault();
        break;
    }
  }
  return () => {
    let g = { open: n.disclosureState.value === 0 }, { id: w, ...b } = e, C = r.value ? { ref: p, type: c.value, onClick: d, onKeydown: f } : { id: w, ref: p, type: c.value, "aria-expanded": e.disabled ? void 0 : n.disclosureState.value === 0, "aria-controls": O(n.panel) ? n.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onClick: d, onKeydown: f, onKeyup: v };
    return U({ ourProps: C, theirProps: b, slot: g, attrs: t, slots: l, name: "DisclosureButton" });
  };
} }), oo = q({ name: "DisclosurePanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-disclosure-panel-${Z()}` } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = At("DisclosurePanel");
  K(() => {
    n.panelId.value = e.id;
  }), se(() => {
    n.panelId.value = null;
  }), o({ el: n.panel, $el: n.panel }), oe(Io, n.panelId);
  let a = Le(), r = S(() => a !== null ? a.value === ae.Open : n.disclosureState.value === 0);
  return () => {
    let p = { open: n.disclosureState.value === 0, close: n.close }, { id: c, ...d } = e, f = { id: c, ref: n.panel };
    return U({ ourProps: f, theirProps: d, slot: p, attrs: t, slots: l, features: pe.RenderStrategy | pe.Static, visible: r.value, name: "DisclosurePanel" });
  };
} });
var Wn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Wn || {});
let Ro = Symbol("PopoverContext");
function nt(e) {
  let t = ee(Ro, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <${at.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, nt), l;
  }
  return t;
}
let Mo = Symbol("PopoverGroupContext");
function Fo() {
  return ee(Mo, null);
}
let zo = Symbol("PopoverPanelContext");
function Yn() {
  return ee(zo, null);
}
let at = q({ name: "Popover", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: l, expose: o }) {
  var n;
  let a = k(null);
  o({ el: a, $el: a });
  let r = k(1), p = k(null), c = k(null), d = k(null), f = k(null), v = S(() => ie(a)), g = S(() => {
    var $, E;
    if (!O(p) || !O(f))
      return !1;
    for (let I of document.querySelectorAll("body > *"))
      if (Number(I == null ? void 0 : I.contains(O(p))) ^ Number(I == null ? void 0 : I.contains(O(f))))
        return !0;
    let B = Et(), A = B.indexOf(O(p)), P = (A + B.length - 1) % B.length, D = (A + 1) % B.length, T = B[P], L = B[D];
    return !(($ = O(f)) != null && $.contains(T)) && !((E = O(f)) != null && E.contains(L));
  }), w = { popoverState: r, buttonId: k(null), panelId: k(null), panel: f, button: p, isPortalled: g, beforePanelSentinel: c, afterPanelSentinel: d, togglePopover() {
    r.value = W(r.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    r.value !== 1 && (r.value = 1);
  }, close($) {
    w.closePopover();
    let E = (() => $ ? $ instanceof HTMLElement ? $ : $.value instanceof HTMLElement ? O($) : O(w.button) : O(w.button))();
    E == null || E.focus();
  } };
  oe(Ro, w), Qe(S(() => W(r.value, { [0]: ae.Open, [1]: ae.Closed })));
  let b = { buttonId: w.buttonId, panelId: w.panelId, close() {
    w.closePopover();
  } }, C = Fo(), m = C == null ? void 0 : C.registerPopover;
  function V() {
    var $, E, B, A;
    return (A = C == null ? void 0 : C.isFocusWithinPopoverGroup()) != null ? A : (($ = v.value) == null ? void 0 : $.activeElement) && (((E = O(p)) == null ? void 0 : E.contains(v.value.activeElement)) || ((B = O(f)) == null ? void 0 : B.contains(v.value.activeElement)));
  }
  return X(() => m == null ? void 0 : m(b)), jt((n = v.value) == null ? void 0 : n.defaultView, "focus", ($) => {
    var E, B;
    r.value === 0 && (V() || !p || !f || $.target !== window && ((E = O(w.beforePanelSentinel)) != null && E.contains($.target) || (B = O(w.afterPanelSentinel)) != null && B.contains($.target) || w.closePopover()));
  }, !0), Lt([p, f], ($, E) => {
    var B;
    w.closePopover(), $o(E, Ot.Loose) || ($.preventDefault(), (B = O(p)) == null || B.focus());
  }, S(() => r.value === 0)), () => {
    let $ = { open: r.value === 0, close: w.close };
    return U({ theirProps: e, ourProps: { ref: a }, slot: $, slots: t, attrs: l, name: "Popover" });
  };
} }), It = q({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-popover-button-${Z()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = nt("PopoverButton"), a = S(() => ie(n.button));
  o({ el: n.button, $el: n.button }), K(() => {
    n.buttonId.value = e.id;
  }), se(() => {
    n.buttonId.value = null;
  });
  let r = Fo(), p = r == null ? void 0 : r.closeOthers, c = Yn(), d = S(() => c === null ? !1 : c.value === n.panelId.value), f = k(null), v = `headlessui-focus-sentinel-${Z()}`;
  d.value || X(() => {
    n.button.value = f.value;
  });
  let g = Xe(S(() => ({ as: e.as, type: t.type })), f);
  function w(V) {
    var $, E, B, A, P;
    if (d.value) {
      if (n.popoverState.value === 1)
        return;
      switch (V.key) {
        case z.Space:
        case z.Enter:
          V.preventDefault(), (E = ($ = V.target).click) == null || E.call($), n.closePopover(), (B = O(n.button)) == null || B.focus();
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
          if (!O(n.button) || (A = a.value) != null && A.activeElement && !((P = O(n.button)) != null && P.contains(a.value.activeElement)))
            return;
          V.preventDefault(), V.stopPropagation(), n.closePopover();
          break;
      }
  }
  function b(V) {
    d.value || V.key === z.Space && V.preventDefault();
  }
  function C(V) {
    var $, E;
    e.disabled || (d.value ? (n.closePopover(), ($ = O(n.button)) == null || $.focus()) : (V.preventDefault(), V.stopPropagation(), n.popoverState.value === 1 && (p == null || p(n.buttonId.value)), n.togglePopover(), (E = O(n.button)) == null || E.focus()));
  }
  function m(V) {
    V.preventDefault(), V.stopPropagation();
  }
  return () => {
    let V = n.popoverState.value === 0, $ = { open: V }, { id: E, ...B } = e, A = d.value ? { ref: f, type: g.value, onKeydown: w, onClick: C } : { ref: f, id: E, type: g.value, "aria-expanded": e.disabled ? void 0 : n.popoverState.value === 0, "aria-controls": O(n.panel) ? n.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onKeydown: w, onKeyup: b, onClick: C, onMousedown: m }, P = Tt();
    function D() {
      let T = O(n.panel);
      if (!T)
        return;
      function L() {
        W(P.value, { [me.Forwards]: () => de(T, te.First), [me.Backwards]: () => de(T, te.Last) });
      }
      L();
    }
    return Y(R, [U({ ourProps: A, theirProps: { ...t, ...B }, slot: $, attrs: t, slots: l, name: "PopoverButton" }), V && !d.value && n.isPortalled.value && Y(xe, { id: v, features: be.Focusable, as: "button", type: "button", onFocus: D })]);
  };
} });
q({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(e, { attrs: t, slots: l }) {
  let o = nt("PopoverOverlay"), n = `headlessui-popover-overlay-${Z()}`, a = Le(), r = S(() => a !== null ? a.value === ae.Open : o.popoverState.value === 0);
  function p() {
    o.closePopover();
  }
  return () => {
    let c = { open: o.popoverState.value === 0 };
    return U({ ourProps: { id: n, "aria-hidden": !0, onClick: p }, theirProps: e, slot: c, attrs: t, slots: l, features: pe.RenderStrategy | pe.Static, visible: r.value, name: "PopoverOverlay" });
  };
} });
let Rt = q({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-popover-panel-${Z()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: l, expose: o }) {
  let { focus: n } = e, a = nt("PopoverPanel"), r = S(() => ie(a.panel)), p = `headlessui-focus-sentinel-before-${Z()}`, c = `headlessui-focus-sentinel-after-${Z()}`;
  o({ el: a.panel, $el: a.panel }), K(() => {
    a.panelId.value = e.id;
  }), se(() => {
    a.panelId.value = null;
  }), oe(zo, a.panelId), X(() => {
    var m, V;
    if (!n || a.popoverState.value !== 0 || !a.panel)
      return;
    let $ = (m = r.value) == null ? void 0 : m.activeElement;
    (V = O(a.panel)) != null && V.contains($) || de(O(a.panel), te.First);
  });
  let d = Le(), f = S(() => d !== null ? d.value === ae.Open : a.popoverState.value === 0);
  function v(m) {
    var V, $;
    switch (m.key) {
      case z.Escape:
        if (a.popoverState.value !== 0 || !O(a.panel) || r.value && !((V = O(a.panel)) != null && V.contains(r.value.activeElement)))
          return;
        m.preventDefault(), m.stopPropagation(), a.closePopover(), ($ = O(a.button)) == null || $.focus();
        break;
    }
  }
  function g(m) {
    var V, $, E, B, A;
    let P = m.relatedTarget;
    !P || !O(a.panel) || (V = O(a.panel)) != null && V.contains(P) || (a.closePopover(), ((E = ($ = O(a.beforePanelSentinel)) == null ? void 0 : $.contains) != null && E.call($, P) || (A = (B = O(a.afterPanelSentinel)) == null ? void 0 : B.contains) != null && A.call(B, P)) && P.focus({ preventScroll: !0 }));
  }
  let w = Tt();
  function b() {
    let m = O(a.panel);
    if (!m)
      return;
    function V() {
      W(w.value, { [me.Forwards]: () => {
        de(m, te.Next);
      }, [me.Backwards]: () => {
        var $;
        ($ = O(a.button)) == null || $.focus({ preventScroll: !0 });
      } });
    }
    V();
  }
  function C() {
    let m = O(a.panel);
    if (!m)
      return;
    function V() {
      W(w.value, { [me.Forwards]: () => {
        var $, E;
        let B = O(a.button), A = O(a.panel);
        if (!B)
          return;
        let P = Et(), D = P.indexOf(B), T = P.slice(0, D + 1), L = [...P.slice(D + 1), ...T];
        for (let I of L.slice())
          if ((E = ($ = I == null ? void 0 : I.id) == null ? void 0 : $.startsWith) != null && E.call($, "headlessui-focus-sentinel-") || A != null && A.contains(I)) {
            let F = L.indexOf(I);
            F !== -1 && L.splice(F, 1);
          }
        de(L, te.First, { sorted: !1 });
      }, [me.Backwards]: () => de(m, te.Previous) });
    }
    V();
  }
  return () => {
    let m = { open: a.popoverState.value === 0, close: a.close }, { id: V, focus: $, ...E } = e, B = { ref: a.panel, id: V, onKeydown: v, onFocusout: n && a.popoverState.value === 0 ? g : void 0, tabIndex: -1 };
    return U({ ourProps: B, theirProps: { ...t, ...E }, attrs: t, slot: m, slots: { ...l, default: (...A) => {
      var P;
      return [Y(R, [f.value && a.isPortalled.value && Y(xe, { id: p, ref: a.beforePanelSentinel, features: be.Focusable, as: "button", type: "button", onFocus: b }), (P = l.default) == null ? void 0 : P.call(l, ...A), f.value && a.isPortalled.value && Y(xe, { id: c, ref: a.afterPanelSentinel, features: be.Focusable, as: "button", type: "button", onFocus: C })])];
    } }, features: pe.RenderStrategy | pe.Static, visible: f.value, name: "PopoverPanel" });
  };
} });
q({ name: "PopoverGroup", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = k(null), a = bl([]), r = S(() => ie(n));
  o({ el: n, $el: n });
  function p(v) {
    let g = a.value.indexOf(v);
    g !== -1 && a.value.splice(g, 1);
  }
  function c(v) {
    return a.value.push(v), () => {
      p(v);
    };
  }
  function d() {
    var v;
    let g = r.value;
    if (!g)
      return !1;
    let w = g.activeElement;
    return (v = O(n)) != null && v.contains(w) ? !0 : a.value.some((b) => {
      var C, m;
      return ((C = g.getElementById(b.buttonId.value)) == null ? void 0 : C.contains(w)) || ((m = g.getElementById(b.panelId.value)) == null ? void 0 : m.contains(w));
    });
  }
  function f(v) {
    for (let g of a.value)
      g.buttonId.value !== v && g.close();
  }
  return oe(Mo, { registerPopover: c, unregisterPopover: p, isFocusWithinPopoverGroup: d, closeOthers: f }), () => U({ ourProps: { ref: n }, theirProps: e, slot: {}, attrs: t, slots: l, name: "PopoverGroup" });
} });
let Ho = Symbol("LabelContext");
function qo() {
  let e = ee(Ho, null);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, qo), t;
  }
  return e;
}
function Mt({ slot: e = {}, name: t = "Label", props: l = {} } = {}) {
  let o = k([]);
  function n(a) {
    return o.value.push(a), () => {
      let r = o.value.indexOf(a);
      r !== -1 && o.value.splice(r, 1);
    };
  }
  return oe(Ho, { register: n, slot: e, name: t, props: l }), S(() => o.value.length > 0 ? o.value.join(" ") : void 0);
}
let Uo = q({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-label-${Z()}` } }, setup(e, { slots: t, attrs: l }) {
  let o = qo();
  return K(() => se(o.register(e.id))), () => {
    let { name: n = "Label", slot: a = {}, props: r = {} } = o, { id: p, passive: c, ...d } = e, f = { ...Object.entries(r).reduce((v, [g, w]) => Object.assign(v, { [g]: h(w) }), {}), id: p };
    return c && (delete f.onClick, delete d.onClick), U({ ourProps: f, theirProps: d, slot: a, attrs: l, slots: t, name: n });
  };
} });
function Zn(e, t) {
  return e === t;
}
let Go = Symbol("RadioGroupContext");
function Ko(e) {
  let t = ee(Go, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, Ko), l;
  }
  return t;
}
let Jn = q({ name: "RadioGroup", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "div" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => Zn }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-radiogroup-${Z()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: l, slots: o, expose: n }) {
  let a = k(null), r = k([]), p = Mt({ name: "RadioGroupLabel" }), c = tt({ name: "RadioGroupDescription" });
  n({ el: a, $el: a });
  let [d, f] = Dt(S(() => e.modelValue), (b) => t("update:modelValue", b), S(() => e.defaultValue)), v = { options: r, value: d, disabled: S(() => e.disabled), firstOption: S(() => r.value.find((b) => !b.propsRef.disabled)), containsCheckedOption: S(() => r.value.some((b) => v.compare(G(b.propsRef.value), G(e.modelValue)))), compare(b, C) {
    if (typeof e.by == "string") {
      let m = e.by;
      return (b == null ? void 0 : b[m]) === (C == null ? void 0 : C[m]);
    }
    return e.by(b, C);
  }, change(b) {
    var C;
    if (e.disabled || v.compare(G(d.value), G(b)))
      return !1;
    let m = (C = r.value.find((V) => v.compare(G(V.propsRef.value), G(b)))) == null ? void 0 : C.propsRef;
    return m != null && m.disabled ? !1 : (f(b), !0);
  }, registerOption(b) {
    r.value.push(b), r.value = Pt(r.value, (C) => C.element);
  }, unregisterOption(b) {
    let C = r.value.findIndex((m) => m.id === b);
    C !== -1 && r.value.splice(C, 1);
  } };
  oe(Go, v), ko({ container: S(() => O(a)), accept(b) {
    return b.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : b.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(b) {
    b.setAttribute("role", "none");
  } });
  function g(b) {
    if (!a.value || !a.value.contains(b.target))
      return;
    let C = r.value.filter((m) => m.propsRef.disabled === !1).map((m) => m.element);
    switch (b.key) {
      case z.Enter:
        So(b.currentTarget);
        break;
      case z.ArrowLeft:
      case z.ArrowUp:
        if (b.preventDefault(), b.stopPropagation(), de(C, te.Previous | te.WrapAround) === Ue.Success) {
          let m = r.value.find((V) => {
            var $;
            return V.element === (($ = ie(a)) == null ? void 0 : $.activeElement);
          });
          m && v.change(m.propsRef.value);
        }
        break;
      case z.ArrowRight:
      case z.ArrowDown:
        if (b.preventDefault(), b.stopPropagation(), de(C, te.Next | te.WrapAround) === Ue.Success) {
          let m = r.value.find((V) => {
            var $;
            return V.element === (($ = ie(V.element)) == null ? void 0 : $.activeElement);
          });
          m && v.change(m.propsRef.value);
        }
        break;
      case z.Space:
        {
          b.preventDefault(), b.stopPropagation();
          let m = r.value.find((V) => {
            var $;
            return V.element === (($ = ie(V.element)) == null ? void 0 : $.activeElement);
          });
          m && v.change(m.propsRef.value);
        }
        break;
    }
  }
  let w = S(() => {
    var b;
    return (b = O(a)) == null ? void 0 : b.closest("form");
  });
  return K(() => {
    J([w], () => {
      if (!w.value || e.defaultValue === void 0)
        return;
      function b() {
        v.change(e.defaultValue);
      }
      return w.value.addEventListener("reset", b), () => {
        var C;
        (C = w.value) == null || C.removeEventListener("reset", b);
      };
    }, { immediate: !0 });
  }), () => {
    let { disabled: b, name: C, id: m, ...V } = e, $ = { ref: a, id: m, role: "radiogroup", "aria-labelledby": p.value, "aria-describedby": c.value, onKeydown: g };
    return Y(R, [...C != null && d.value != null ? Nt({ [C]: d.value }).map(([E, B]) => Y(xe, St({ features: be.Hidden, key: E, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: E, value: B }))) : [], U({ ourProps: $, theirProps: { ...l, ...Be(V, ["modelValue", "defaultValue"]) }, slot: {}, attrs: l, slots: o, name: "RadioGroup" })]);
  };
} });
var Qn = ((e) => (e[e.Empty = 1] = "Empty", e[e.Active = 2] = "Active", e))(Qn || {});
let Xn = q({ name: "RadioGroupOption", props: { as: { type: [Object, String], default: "div" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-radiogroup-option-${Z()}` } }, setup(e, { attrs: t, slots: l, expose: o }) {
  let n = Ko("RadioGroupOption"), a = Mt({ name: "RadioGroupLabel" }), r = tt({ name: "RadioGroupDescription" }), p = k(null), c = S(() => ({ value: e.value, disabled: e.disabled })), d = k(1);
  o({ el: p, $el: p }), K(() => n.registerOption({ id: e.id, element: p, propsRef: c })), se(() => n.unregisterOption(e.id));
  let f = S(() => {
    var V;
    return ((V = n.firstOption.value) == null ? void 0 : V.id) === e.id;
  }), v = S(() => n.disabled.value || e.disabled), g = S(() => n.compare(G(n.value.value), G(e.value))), w = S(() => v.value ? -1 : g.value || !n.containsCheckedOption.value && f.value ? 0 : -1);
  function b() {
    var V;
    !n.change(e.value) || (d.value |= 2, (V = p.value) == null || V.focus());
  }
  function C() {
    d.value |= 2;
  }
  function m() {
    d.value &= -3;
  }
  return () => {
    let { id: V, value: $, disabled: E, ...B } = e, A = { checked: g.value, disabled: v.value, active: Boolean(d.value & 2) }, P = { id: V, ref: p, role: "radio", "aria-checked": g.value ? "true" : "false", "aria-labelledby": a.value, "aria-describedby": r.value, "aria-disabled": v.value ? !0 : void 0, tabIndex: w.value, onClick: v.value ? void 0 : b, onFocus: v.value ? void 0 : C, onBlur: v.value ? void 0 : m };
    return U({ ourProps: P, theirProps: B, slot: A, attrs: t, slots: l, name: "RadioGroupOption" });
  };
} }), lo = Uo, ea = Hn, Wo = Symbol("GroupContext"), ta = q({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: l }) {
  let o = k(null), n = Mt({ name: "SwitchLabel", props: { onClick() {
    !o.value || (o.value.click(), o.value.focus({ preventScroll: !0 }));
  } } }), a = tt({ name: "SwitchDescription" });
  return oe(Wo, { switchRef: o, labelledby: n, describedby: a }), () => U({ theirProps: e, ourProps: {}, slot: {}, slots: t, attrs: l, name: "SwitchGroup" });
} }), oa = q({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: !0 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-switch-${Z()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: l, slots: o, expose: n }) {
  let a = ee(Wo, null), [r, p] = Dt(S(() => e.modelValue), (m) => t("update:modelValue", m), S(() => e.defaultChecked));
  function c() {
    p(!r.value);
  }
  let d = k(null), f = a === null ? d : a.switchRef, v = Xe(S(() => ({ as: e.as, type: l.type })), f);
  n({ el: f, $el: f });
  function g(m) {
    m.preventDefault(), c();
  }
  function w(m) {
    m.key === z.Space ? (m.preventDefault(), c()) : m.key === z.Enter && So(m.currentTarget);
  }
  function b(m) {
    m.preventDefault();
  }
  let C = S(() => {
    var m, V;
    return (V = (m = O(f)) == null ? void 0 : m.closest) == null ? void 0 : V.call(m, "form");
  });
  return K(() => {
    J([C], () => {
      if (!C.value || e.defaultChecked === void 0)
        return;
      function m() {
        p(e.defaultChecked);
      }
      return C.value.addEventListener("reset", m), () => {
        var V;
        (V = C.value) == null || V.removeEventListener("reset", m);
      };
    }, { immediate: !0 });
  }), () => {
    let { id: m, name: V, value: $, ...E } = e, B = { checked: r.value }, A = { id: m, ref: f, role: "switch", type: v.value, tabIndex: 0, "aria-checked": r.value, "aria-labelledby": a == null ? void 0 : a.labelledby.value, "aria-describedby": a == null ? void 0 : a.describedby.value, onClick: g, onKeyup: w, onKeypress: b };
    return Y(R, [V != null && r.value != null ? Y(xe, St({ features: be.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: r.value, name: V, value: $ })) : null, U({ ourProps: A, theirProps: { ...l, ...Be(E, ["modelValue", "defaultChecked"]) }, slot: B, attrs: l, slots: o, name: "Switch" })]);
  };
} }), la = Uo;
function na(e) {
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
function aa(e, t) {
  let l = Bt();
  if (!e)
    return l.dispose;
  let { transitionDuration: o, transitionDelay: n } = getComputedStyle(e), [a, r] = [o, n].map((p) => {
    let [c = 0] = p.split(",").filter(Boolean).map((d) => d.includes("ms") ? parseFloat(d) : parseFloat(d) * 1e3).sort((d, f) => f - d);
    return c;
  });
  return a !== 0 ? l.setTimeout(() => t("finished"), a + r) : t("finished"), l.add(() => t("cancelled")), l.dispose;
}
function no(e, t, l, o, n, a) {
  let r = Bt(), p = a !== void 0 ? na(a) : () => {
  };
  return He(e, ...n), dt(e, ...t, ...l), r.nextFrame(() => {
    He(e, ...l), dt(e, ...o), r.add(aa(e, (c) => (He(e, ...o, ...t), dt(e, ...n), p(c))));
  }), r.add(() => He(e, ...t, ...l, ...o, ...n)), r.add(() => p("cancelled")), r.dispose;
}
function Oe(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Ft = Symbol("TransitionContext");
var sa = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(sa || {});
function ra() {
  return ee(Ft, null) !== null;
}
function ia() {
  let e = ee(Ft, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function pa() {
  let e = ee(zt, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let zt = Symbol("NestingContext");
function st(e) {
  return "children" in e ? st(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Yo(e) {
  let t = k([]), l = k(!1);
  K(() => l.value = !0), se(() => l.value = !1);
  function o(a, r = _e.Hidden) {
    let p = t.value.findIndex(({ id: c }) => c === a);
    p !== -1 && (W(r, { [_e.Unmount]() {
      t.value.splice(p, 1);
    }, [_e.Hidden]() {
      t.value[p].state = "hidden";
    } }), !st(t) && l.value && (e == null || e()));
  }
  function n(a) {
    let r = t.value.find(({ id: p }) => p === a);
    return r ? r.state !== "visible" && (r.state = "visible") : t.value.push({ id: a, state: "visible" }), () => o(a, _e.Unmount);
  }
  return { children: t, register: n, unregister: o };
}
let Zo = pe.RenderStrategy, Ee = q({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: l, slots: o, expose: n }) {
  if (!ra() && hn())
    return () => Y(Fe, { ...e, onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave") }, o);
  let a = k(null), r = k("visible"), p = S(() => e.unmount ? _e.Unmount : _e.Hidden);
  n({ el: a, $el: a });
  let { show: c, appear: d } = ia(), { register: f, unregister: v } = pa(), g = { value: !0 }, w = Z(), b = { value: !1 }, C = Yo(() => {
    b.value || (r.value = "hidden", v(w), t("afterLeave"));
  });
  K(() => {
    let T = f(w);
    se(T);
  }), X(() => {
    if (p.value === _e.Hidden && w) {
      if (c && r.value !== "visible") {
        r.value = "visible";
        return;
      }
      W(r.value, { hidden: () => v(w), visible: () => f(w) });
    }
  });
  let m = Oe(e.enter), V = Oe(e.enterFrom), $ = Oe(e.enterTo), E = Oe(e.entered), B = Oe(e.leave), A = Oe(e.leaveFrom), P = Oe(e.leaveTo);
  K(() => {
    X(() => {
      if (r.value === "visible") {
        let T = O(a);
        if (T instanceof Comment && T.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function D(T) {
    let L = g.value && !d.value, I = O(a);
    !I || !(I instanceof HTMLElement) || L || (b.value = !0, c.value && t("beforeEnter"), c.value || t("beforeLeave"), T(c.value ? no(I, m, V, $, E, (F) => {
      b.value = !1, F === xt.Finished && t("afterEnter");
    }) : no(I, B, A, P, E, (F) => {
      b.value = !1, F === xt.Finished && (st(C) || (r.value = "hidden", v(w), t("afterLeave")));
    })));
  }
  return K(() => {
    J([c], (T, L, I) => {
      D(I), g.value = !1;
    }, { immediate: !0 });
  }), oe(zt, C), Qe(S(() => W(r.value, { visible: ae.Open, hidden: ae.Closed }))), () => {
    let { appear: T, show: L, enter: I, enterFrom: F, enterTo: he, entered: Ne, leave: rt, leaveFrom: ce, leaveTo: ue, ...we } = e;
    return U({ theirProps: we, ourProps: { ref: a }, slot: {}, slots: o, attrs: l, features: Zo, visible: r.value === "visible", name: "TransitionChild" });
  };
} }), ua = Ee, Fe = q({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: l, slots: o }) {
  let n = Le(), a = S(() => e.show === null && n !== null ? W(n.value, { [ae.Open]: !0, [ae.Closed]: !1 }) : e.show);
  X(() => {
    if (![!0, !1].includes(a.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r = k(a.value ? "visible" : "hidden"), p = Yo(() => {
    r.value = "hidden";
  }), c = k(!0), d = { show: a, appear: S(() => e.appear || !c.value) };
  return K(() => {
    X(() => {
      c.value = !1, a.value ? r.value = "visible" : st(p) || (r.value = "hidden");
    });
  }), oe(zt, p), oe(Ft, d), () => {
    let f = Be(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), v = { unmount: e.unmount };
    return U({ ourProps: { ...v, as: "template" }, theirProps: {}, slot: {}, slots: { ...o, default: () => [Y(ua, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...l, ...v, ...f }, o.default)] }, attrs: {}, features: Zo, visible: r.value === "visible", name: "Transition" });
  };
} });
const ca = {
  key: 0,
  class: "po-text-sm po-font-normal po-text-slate-400 po-select-none"
}, da = { class: "po-grid po-grid-cols-3 po-gap-2 po-py-2" }, fa = { class: "po-bg-white hover:po-bg-slate-200 po-rounded-xl po-p-2 po-transition-colors po-duration-150 po-ease-in" }, va = ["href"], ma = { class: "po-flex po-w-14 po-h-14 po-items-center po-justify-center po-duration-100 po-ease-in-out po-overflow-hidden" }, ha = ["innerHTML"], ba = { class: "po-text-slate-500 po-font-normal po-text-sm po-text-center" }, ga = {
  name: "PoAppTray"
}, ya = /* @__PURE__ */ Object.assign(ga, {
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
    return (t, l) => (i(), M(h(at), null, {
      default: j(({ open: o }) => [
        _(h(It), {
          class: N([o ? "" : "po-text-opacity-90", "po-block po-w-6 po-text-slate-100 genie-effect po-z-50 po-outline-none"])
        }, {
          default: j(() => [
            _(h(Fl))
          ]),
          _: 2
        }, 1032, ["class"]),
        _(Se, {
          "enter-active-class": "po-transition po-duration-200 po-ease-out",
          "enter-from-class": "po-translate-y-1 po-opacity-0",
          "enter-to-class": "po-translate-y-0 po-opacity-100",
          "leave-active-class": "po-transition po-duration-150 po-ease-in",
          "leave-from-class": "po-translate-y-0 po-opacity-100",
          "leave-to-class": "po-translate-y-1 po-opacity-0"
        }, {
          default: j(() => [
            _(h(Rt), { class: "po-z-10 po-absolute po-right-0 po-top-16 po-opacity-0 po-bg-white po-shadow-lg po-rounded-b-xl po-rounded-t-0 po-w-[366px] po-p-4 po-border po-border-t-0 po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-scroll po-text-center" }, {
              default: j(() => [
                (i(!0), u(R, null, H(e.appList, (n) => (i(), u("div", null, [
                  n.groupName.length > 0 ? (i(), u("span", ca, y(n.groupName), 1)) : x("", !0),
                  s("ul", da, [
                    (i(!0), u(R, null, H(n.apps, (a) => (i(), u("li", fa, [
                      s("a", {
                        href: a.url,
                        class: "po-flex po-flex-col po-group po-justify-center po-items-center"
                      }, [
                        s("span", ma, [
                          s("span", {
                            class: "po-w-9",
                            innerHTML: a.icon
                          }, null, 8, ha)
                        ]),
                        s("span", ba, y(a.name), 1)
                      ], 8, va)
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
}), xa = {
  key: 0,
  class: "po-absolute po-right-0 po-w-3 po-h-3 po-bg-mpao-orange po-rounded-full po-border-2 po-border-mpao-blue"
}, Va = {
  key: 0,
  class: "po-space-y-2"
}, wa = ["onClick"], ka = { class: "po-flex po-items-center po-justify-between" }, $a = { class: "po-text-sm po-font-semibold po-text-slate-700 po-grow po-flex po-space-x-2 po-items-center" }, _a = {
  key: 0,
  class: "po-w-2 po-h-2 po-rounded-full po-shrink-0 po-bg-mpao-orange"
}, Ca = { class: "po-grow" }, Sa = { class: "po-text-xs po-font-normal po-text-slate-400 po-shrink-0" }, Ea = { class: "po-block po-text-sm po-text-slate-500 po-pb-3" }, Oa = {
  key: 1,
  class: "po-text-sm po-text-slate-500 po-py-10 po-text-center po-block"
}, Pa = {
  name: "PoNotificationHub"
}, La = /* @__PURE__ */ Object.assign(Pa, {
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
      default: j(({ open: n }) => [
        _(h(It), {
          class: N([n ? "" : "text-opacity-90", "po-block po-w-6 po-text-slate-100 genie-effect po-relative po-z-50 po-outline-none"])
        }, {
          default: j(() => [
            e.hasNewNotifications ? (i(), u("span", xa)) : x("", !0),
            _(h(Cl), { class: "po-stroke-current" })
          ]),
          _: 2
        }, 1032, ["class"]),
        _(Se, {
          "enter-active-class": "po-transition po-duration-200 po-ease-out",
          "enter-from-class": "po-translate-y-1 po-opacity-0",
          "enter-to-class": "po-translate-y-0 po-opacity-100",
          "leave-active-class": "po-transition po-duration-150 po-ease-in",
          "leave-from-class": "po-translate-y-0 po-opacity-100",
          "leave-to-class": "po-translate-y-1 po-opacity-0"
        }, {
          default: j(() => [
            _(h(Rt), { class: "po-z-10 po-absolute po-right-0 po-top-16 po-opacity-0 po-bg-white po-shadow-lg po-rounded-b-xl po-rounded-t-0 po-w-[366px] po-p-4 po-border po-border-t-0 po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-scroll po-text-center" }, {
              default: j(() => [
                e.notifications !== null && e.notifications.length > 0 ? (i(), u("ul", Va, [
                  (i(!0), u(R, null, H(e.notifications, (a) => (i(), u("li", {
                    role: "button",
                    class: "po-space-y-2 po-p-2 po-rounded-lg po-bg-white hover:po-bg-slate-100 po-border po-border-slate-100",
                    onClick: re((r) => l.$emit("button-click", a.name), ["prevent"])
                  }, [
                    s("span", ka, [
                      s("p", $a, [
                        a.seen ? x("", !0) : (i(), u("span", _a)),
                        s("span", Ca, y(a.name), 1)
                      ]),
                      s("span", Sa, y(a.time), 1)
                    ]),
                    s("span", Ea, y(a.text), 1)
                  ], 8, wa))), 256))
                ])) : (i(), u("span", Oa, " No notifications to show at the moment. We'll keep you informed."))
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
}), Na = {
  key: 0,
  class: "po-hidden lg:po-block po-text-sky-50 po-text-sm po-shrink-0 po-pr-3 po-truncate po-max-w-[140px] po-overflow-hidden"
}, Da = {
  key: 1,
  class: "po-px-3 po-bg-gradient-to-br po-from-slate-50 po-to-blue-100 po-py-1 po-rounded-l-md po-w-[100px] po-flex po-items-center po-justify-center po-text-center"
}, Ta = ["src"], ja = ["src", "alt"], Ba = {
  key: 1,
  class: "po-text-xs po-text-white po-font-semibold"
}, Aa = { class: "po-pb-5" }, Ia = ["src"], Ra = {
  key: 2,
  class: "po-block po-text-sm po-text-slate-400 po-italic"
}, Ma = { key: 0 }, Fa = { key: 1 }, za = /* @__PURE__ */ s("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), Ha = { class: "po-space-y-2 po-py-2 -po-mx-5 po-px-5 po-max-h-[250px] po-overflow-y-scroll" }, qa = ["onClick"], Ua = { class: "po-w-5" }, Ga = { class: "" }, Ka = { class: "po-block po-text-sm po-font-normal" }, Wa = {
  key: 0,
  class: "po-text-left po-block po-text-xs po-text-slate-400"
}, Ya = /* @__PURE__ */ s("div", { class: "po-h-[2px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), Za = { class: "md:po-grid po-grid-cols-2 po-space-x-1 po-pt-2" }, Ja = { class: "po-w-5" }, Qa = /* @__PURE__ */ s("span", { class: "po-text-sm po-font-normal" }, "Profile", -1), Xa = { class: "po-w-5" }, es = /* @__PURE__ */ s("span", { class: "po-text-sm po-font-normal" }, "Logout", -1), ts = /* @__PURE__ */ s("div", { class: "po-text-xs po-space-x-3 po-text-center po-pt-3" }, [
  /* @__PURE__ */ s("a", {
    href: "",
    class: "po-text-slate-500 hover:po-text-mpao-lightblue"
  }, "Privacy Policy"),
  /* @__PURE__ */ s("a", {
    href: "",
    class: "po-text-slate-500 hover:po-text-mpao-lightblue"
  }, "Terms of Service")
], -1), os = {
  name: "PoProfileSwitcher"
}, ls = /* @__PURE__ */ Object.assign(os, {
  props: {
    userObject: {
      type: Object,
      default: null
    }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    const l = e, { userObject: o } = Ve(l);
    function n(v) {
      t("button-click", v);
    }
    const a = k({
      name: "",
      initials: "",
      image: ""
    }), r = k([]);
    function p(v) {
      return v ? v.match(/\b[A-Z]/g).join("").substr(0, 2) : "";
    }
    function c() {
      var b, C, m, V, $;
      let v = (b = l.userObject) != null && b.transacting_as_organisation && Object.keys((C = l.userObject) == null ? void 0 : C.transacting_as_organisation).length > 0 ? (m = l.userObject) == null ? void 0 : m.transacting_as_organisation : null, g = v ? v.name : (V = l.userObject) == null ? void 0 : V.name, w = v ? v.logo ? v.logo : ($ = l.userObject) == null ? void 0 : $.avatar : "";
      a.value = {
        name: g,
        initials: p(g),
        image: w
      };
    }
    function d() {
      var v, g, w, b, C, m, V;
      r.value = [], r.value.push({
        id: (v = l.userObject) == null ? void 0 : v.id,
        entity_id: (g = l.userObject) == null ? void 0 : g.entity_id,
        name: (w = l.userObject) == null ? void 0 : w.name,
        identifier: null,
        organisation_uuid: null
      }), ((C = (b = l.userObject) == null ? void 0 : b.organisations) == null ? void 0 : C.length) > 0 && ((V = (m = l.userObject) == null ? void 0 : m.organisations) == null || V.forEach(($) => r.value.push($)));
    }
    function f() {
      var v, g;
      r.value.forEach((w) => {
        var b, C, m, V;
        w.current = ((b = l.userObject) == null ? void 0 : b.transacting_as_organisation) && Object.keys((C = l.userObject) == null ? void 0 : C.transacting_as_organisation).length > 0 && w.entity_id === ((V = (m = l.userObject) == null ? void 0 : m.transacting_as_organisation) == null ? void 0 : V.entity_id);
      }), (v = l.userObject) != null && v.transacting_as_organisation && Object.keys((g = l.userObject) == null ? void 0 : g.transacting_as_organisation).length === 0 && (r.value[0].current = !0);
    }
    return c(), d(), f(), J(l.userObject, (v, g) => {
      c(), d(), f();
    }), (v, g) => (i(), M(h(at), null, {
      default: j(({ open: w }) => [
        _(h(It), { class: "po-flex po-items-center po-outline-none" }, {
          default: j(() => {
            var b, C, m, V, $, E, B, A, P, D, T, L, I, F;
            return [
              (C = (b = h(o)) == null ? void 0 : b.transacting_as_organisation) != null && C.logo ? x("", !0) : (i(), u("span", Na, y(a.value.name), 1)),
              (V = (m = h(o)) == null ? void 0 : m.transacting_as_organisation) != null && V.logo ? (i(), u("span", Da, [
                s("img", {
                  class: "po-h-8",
                  src: (E = ($ = h(o)) == null ? void 0 : $.transacting_as_organisation) == null ? void 0 : E.logo,
                  alt: ""
                }, null, 8, Ta)
              ])) : x("", !0),
              s("div", {
                class: N([
                  {
                    "po-bg-gradient-to-br po-from-slate-50 po-to-blue-100 po-p-1 po-rounded-r-md": (A = (B = h(o)) == null ? void 0 : B.transacting_as_organisation) == null ? void 0 : A.logo
                  }
                ])
              }, [
                s("div", {
                  class: N([[
                    { "text-opacity-90": w },
                    {
                      "po-w-10 po-h-10": !((D = (P = h(o)) == null ? void 0 : P.transacting_as_organisation) != null && D.logo)
                    },
                    { "po-w-8 po-h-8": (L = (T = h(o)) == null ? void 0 : T.transacting_as_organisation) == null ? void 0 : L.logo }
                  ], "po-shrink-0 po-select-none po-rounded-full po-bg-[#2e5266] po-flex po-items-center po-justify-center genie-effect po-z-50"])
                }, [
                  (I = h(o)) != null && I.avatar ? (i(), u("img", {
                    key: 0,
                    class: "po-rounded-full po-border po-border-white",
                    src: (F = h(o)) == null ? void 0 : F.avatar,
                    alt: a.value.name
                  }, null, 8, ja)) : (i(), u("span", Ba, y(a.value.initials), 1))
                ], 2)
              ], 2)
            ];
          }),
          _: 2
        }, 1024),
        _(Se, {
          "enter-active-class": "po-transition po-duration-200 po-ease-out",
          "enter-from-class": "po-translate-y-1 po-opacity-0",
          "enter-to-class": "po-translate-y-0 po-opacity-100",
          "leave-active-class": "po-transition po-duration-150 po-ease-in",
          "leave-from-class": "po-translate-y-0 po-opacity-100",
          "leave-to-class": "po-translate-y-1 po-opacity-0"
        }, {
          default: j(() => [
            _(h(Rt), { class: "po-z-10 po-absolute po-right-0 po-top-16 po-opacity-0 po-bg-white po-shadow-lg po-rounded-b-xl po-rounded-t-0 po-w-[366px] po-p-4 po-border po-border-t-0 po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-scroll po-text-center" }, {
              default: j(() => {
                var b, C, m, V, $, E, B;
                return [
                  s("div", Aa, [
                    (b = h(o)) != null && b.avatar ? (i(), u("img", {
                      key: 0,
                      class: "po-w-20 po-h-20 po-mx-auto po-rounded-full po-overflow-hidden",
                      src: (C = h(o)) == null ? void 0 : C.avatar,
                      alt: ""
                    }, null, 8, Ia)) : x("", !0),
                    (m = h(o)) != null && m.name ? (i(), u("span", {
                      key: 1,
                      class: N(["po-text-base po-text-slate-600 po-font-medium po-block", [{ "po-mt-4": (V = h(o)) == null ? void 0 : V.avatar }]])
                    }, y(($ = h(o)) == null ? void 0 : $.name), 3)) : x("", !0),
                    (E = h(o)) != null && E.name ? (i(), u("span", Ra, [
                      a.value.name === ((B = h(o)) == null ? void 0 : B.name) ? (i(), u("span", Ma, "Self")) : (i(), u("span", Fa, "User at " + y(a.value.name), 1))
                    ])) : x("", !0)
                  ]),
                  za,
                  s("div", Ha, [
                    (i(!0), u(R, null, H(r.value, (A) => (i(), u("a", {
                      href: "#",
                      onClick: re((P) => n(A), ["prevent"]),
                      class: N(["po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-shadow-sm po-transition-all po-duration-150 po-ease-out hover:po-bg-blue-50", [
                        {
                          " po-bg-white": !A.current
                        },
                        {
                          " po-bg-blue-50 po-shadow-sm": A.current
                        }
                      ]]),
                      role: "button"
                    }, [
                      s("span", Ua, [
                        A.isPersonal ? (i(), M(h(Wt), {
                          key: 0,
                          class: N([
                            "po-stroke-current",
                            { "po-stroke-mpao-lightblue": A.current }
                          ])
                        }, null, 8, ["class"])) : x("", !0),
                        A.isPersonal ? x("", !0) : (i(), M(h(El), {
                          key: 1,
                          class: N([
                            "po-stroke-current",
                            { "po-stroke-mpao-lightblue": A.current }
                          ])
                        }, null, 8, ["class"]))
                      ]),
                      s("span", Ga, [
                        s("span", Ka, y(A.name), 1),
                        A.identifier ? (i(), u("span", Wa, y(A.identifier), 1)) : x("", !0)
                      ])
                    ], 10, qa))), 256))
                  ]),
                  Ya,
                  s("div", Za, [
                    s("a", {
                      href: "#",
                      onClick: g[0] || (g[0] = re((A) => v.$emit("button-click", "current-profile"), ["prevent"])),
                      class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-slate-50 hover:po-bg-blue-50 po-transition-all po-duration-150 po-ease-out",
                      role: "button"
                    }, [
                      s("span", Ja, [
                        _(h(Wt), { class: "po-stroke-current" })
                      ]),
                      Qa
                    ]),
                    s("a", {
                      href: "#",
                      onClick: g[1] || (g[1] = re((A) => v.$emit("button-click", "logout"), ["prevent"])),
                      class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-slate-50 hover:po-bg-blue-50 po-transition-all po-duration-150 po-ease-out",
                      role: "button"
                    }, [
                      s("span", Xa, [
                        _(h(kl), { class: "po-stroke-current" })
                      ]),
                      es
                    ])
                  ]),
                  ts
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
}), ns = { class: "loading-dots po-inline-block po-relative po-w-[40px] po-h-[10px]" }, Jo = {
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
    return (t, l) => (i(), u("div", ns, [
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
}, as = ["disabled", "aria-disabled"], ss = ["value", "disabled", "aria-disabled"], rs = {
  name: "PoButton"
}, Ht = /* @__PURE__ */ Object.assign(rs, {
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
    const l = e, o = "po-rounded-full po-transition-colors po-border po-duration-100 po-ease-in-out po-cursor-pointer disabled:po-bg-slate-400 disabled:po-border-slate-400 disabled:po-cursor-default disabled:po-hover:bg-slate-400", n = S(() => {
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
    return (r, p) => (i(), u(R, null, [
      e.isLoading ? (i(), u("span", {
        key: 0,
        class: N([[o, h(n)], "po-bg-slate-200 hover:po-bg-slate-200 focus:po-bg-slate-200"])
      }, [
        _(Jo, {
          "dot-color": "po-bg-slate-500",
          class: "po-relative -po-bottom-[0.2rem]"
        })
      ], 2)) : x("", !0),
      e.type == "button" && !e.isLoading ? (i(), u("button", Pe({
        key: 1,
        onClick: p[0] || (p[0] = re((c) => r.$emit("button-click", e.to), ["prevent"])),
        class: [o, h(n), h(a)],
        disabled: e.disabled,
        "aria-disabled": e.disabled
      }, r.$attrs), [
        Q(r.$slots, "label", {}, () => [
          ne(y(e.label), 1)
        ])
      ], 16, as)) : x("", !0),
      e.type == "submit" && !e.isLoading ? (i(), u("input", Pe({
        key: 2,
        type: "submit",
        class: [o, h(n), h(a)],
        value: e.label,
        disabled: e.disabled,
        "aria-disabled": e.disabled
      }, r.$attrs), null, 16, ss)) : x("", !0),
      e.type == "link" && !e.isLoading ? (i(), u("a", Pe({
        key: 3,
        href: "#",
        onClick: p[1] || (p[1] = re((c) => r.$emit("button-click", e.to), ["prevent"])),
        class: [o, h(n), h(a)]
      }, r.$attrs), [
        Q(r.$slots, "label", {}, () => [
          ne(y(e.label), 1)
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
        Q(r.$slots, "label", {}, () => [
          ne(y(e.label), 1)
        ])
      ], 2)) : x("", !0)
    ], 64));
  }
}), is = /* @__PURE__ */ s("div", { class: "po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity" }, null, -1), ps = { class: "po-fixed po-z-10 po-inset-0" }, us = { class: "po-flex po-justify-center po-items-start po-min-h-screen po-px-4 po-pt-10 po-pb-20 po-text-center sm:po-block po-max-h-screen po-overflow-y-hidden" }, cs = /* @__PURE__ */ s("span", {
  class: "po-hidden sm:po-inline-block sm:po-align-middle sm:po-h-screen",
  "aria-hidden": "true"
}, "​", -1), ds = { class: "po-flex po-items-center po-bg-white po-rounded-t-xl po-p-5" }, fs = { class: "po-grow po-text-md po-font-bold po-text-slate-600" }, vs = { class: "po-shrink-0" }, ms = /* @__PURE__ */ s("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), hs = { class: "po-p-5 po-max-h-[calc(100vh-230px)] po-overflow-y-scroll po-min-h-[250px]" }, bs = {
  key: 0,
  class: "po-bg-slate-50 po-rounded-b-xl"
}, gs = {
  name: "PoModal"
}, ys = /* @__PURE__ */ Object.assign(gs, {
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
    const l = e, { show: o } = Ve(l), n = k(!1);
    J(o, () => {
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
          default: j(() => [
            _(h(ot), {
              as: "div",
              class: "po-relative po-z-50",
              onClose: a
            }, {
              default: j(() => [
                _(h(Ee), {
                  as: "template",
                  enter: "po-ease-out po-duration-300",
                  "enter-from": "po-opacity-0",
                  "enter-to": "po-opacity-100",
                  leave: "po-ease-in po-duration-200",
                  "leave-from": "po-opacity-100",
                  "leave-to": "po-opacity-0"
                }, {
                  default: j(() => [
                    is
                  ]),
                  _: 1
                }),
                s("div", ps, [
                  s("div", us, [
                    cs,
                    _(h(Ee), {
                      as: "template",
                      enter: "po-ease-out po-duration-300",
                      "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                      "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                      leave: "po-ease-in po-duration-200",
                      "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                      "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                    }, {
                      default: j(() => [
                        _(h(lt), {
                          class: N(["po-relative po-inline-block po-align-bottom po-bg-white po-rounded-xl po-text-left po-shadow-xl po-transform po-transition-all sm:po-align-top po-w-full", e.modalWidth])
                        }, {
                          default: j(() => [
                            s("div", ds, [
                              s("h3", fs, y(e.modalTitle), 1),
                              s("div", vs, [
                                s("span", {
                                  role: "button",
                                  class: "po-block",
                                  onClick: a
                                }, [
                                  _(h(xo), { class: "po-w-5 po-stroke-slate-500 hover:po-stroke-mpao-orange po-transition-colors po-duration-150 po-ease-in-out" })
                                ])
                              ])
                            ]),
                            ms,
                            s("div", hs, [
                              Q(r.$slots, "content")
                            ]),
                            r.$slots.footer ? (i(), u("div", bs, [
                              Q(r.$slots, "footer")
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
function xs(e, t) {
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
function Vs(e, t) {
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
function ws(e, t) {
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
function ks(e, t) {
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
const $s = {
  key: 0,
  class: "po-text-lg po-text-red-400 po-font-semibold"
}, _s = {
  key: 0,
  class: "po-mt-1 po-flex -po-mb-3 po-flex-wrap"
}, Cs = { class: "po-flex po-flex-1" }, Ss = { class: "po-flex po-flex-col" }, Es = ["id"], Os = ["id"], Ps = {
  name: "PoRadioInput"
}, Ls = /* @__PURE__ */ Object.assign(Ps, {
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
    const l = e, o = k();
    o.value = l.modelValue, bo(() => {
      o.value = l.modelValue;
    }), J(o, () => {
      t("update:modelValue", o.value);
    });
    const { errorMessage: n } = Ve(l), a = k();
    return J(n, (r, p) => {
      a.value = n.value !== null && n.value !== "";
    }), (r, p) => (i(), M(h(Jn), {
      modelValue: o.value,
      "onUpdate:modelValue": p[0] || (p[0] = (c) => o.value = c),
      class: N([{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }])
    }, {
      default: j(() => [
        _(h(lo), {
          class: N([
            "po-text-sm po-font-medium po-flex po-items-center po-space-x-1",
            { "po-text-red-500": a.value },
            { "po-text-slate-700": !a.value }
          ])
        }, {
          default: j(() => [
            s("span", null, y(e.label), 1),
            e.required ? (i(), u("span", $s, "*")) : x("", !0)
          ]),
          _: 1
        }, 8, ["class"]),
        e.options !== null ? (i(), u("div", _s, [
          (i(!0), u(R, null, H(e.options, (c) => (i(), M(h(Xn), {
            as: "template",
            key: c.id,
            value: c.id
          }, {
            default: j(({ checked: d, active: f }) => [
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
                    d ? "po-border-mpao-lightblue" : "po-border-slate-400"
                  ]])
                }, [
                  s("span", {
                    class: N(["po-w-3 po-h-3 po-rounded-full", [
                      "",
                      d ? "po-bg-mpao-lightblue" : "po-bg-transparent"
                    ]])
                  }, null, 2)
                ], 2),
                s("span", Cs, [
                  s("span", Ss, [
                    _(h(lo), {
                      as: "span",
                      class: "po-block po-text-sm po-font-medium po-text-gray-900"
                    }, {
                      default: j(() => [
                        ne(y(c.title), 1)
                      ]),
                      _: 2
                    }, 1024),
                    c.description ? (i(), M(h(ea), {
                      key: 0,
                      as: "span",
                      class: "po-mt-1 po-flex po-items-center po-text-sm po-text-gray-500"
                    }, {
                      default: j(() => [
                        ne(y(c.description), 1)
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
          }, y(e.message), 9, Es)) : x("", !0),
          a.value && h(n) !== null ? (i(), u("p", {
            key: 1,
            class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
            id: `${r.id}-error`
          }, [
            _(h(qt), { class: "po-fill-current po-w-4 po-mt-[0.2rem] po-shrink-0" }),
            s("span", null, y(h(n)), 1)
          ], 8, Os)) : x("", !0)
        ])
      ]),
      _: 1
    }, 8, ["modelValue", "class"]));
  }
});
function Ns(e, t) {
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
function Ds(e, t) {
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
function Ts(e, t) {
  return i(), u("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", { d: "M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" })
  ]);
}
function ll(e, t) {
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
const Bs = ["for"], As = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Is = ["title"], Rs = ["name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], Ms = ["id"], Fs = ["id"], zs = {
  name: "PoTextarea"
}, Hs = /* @__PURE__ */ Object.assign(zs, {
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
      class: N(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      s("label", {
        for: e.id,
        class: "po-text-sm po-font-medium po-text-slate-700 po-flex po-items-center po-space-x-1"
      }, [
        s("span", null, y(e.label), 1),
        e.required ? (i(), u("span", As, "*")) : x("", !0),
        e.info !== null ? (i(), u("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          _(h(ll))
        ], 8, Is)) : x("", !0)
      ], 8, Bs),
      s("textarea", Pe({
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
      }), null, 16, Rs),
      e.message !== null ? (i(), u("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, y(e.message), 9, Ms)) : x("", !0),
      e.errorMessage !== null ? (i(), u("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, y(e.errorMessage), 9, Fs)) : x("", !0)
    ], 2));
  }
}), qs = /* @__PURE__ */ s("input", {
  type: "checkbox",
  name: "",
  class: "po-hidden shell-sidebar--toggle",
  role: "none",
  id: "sidebar-drawer-toggle",
  checked: "",
  "aria-checked": "true"
}, null, -1), Us = { class: "shell-sidebar" }, Gs = { class: "po-grow" }, Ks = { class: "shell-sidebar--menu" }, Ws = ["onClick", "title"], Ys = { class: "shell-sidebar--icon" }, Zs = { class: "shell-sidebar--label po-font-medium" }, Js = { key: 0 }, Qs = { class: "shell-sidebar--menu sidebar-apps po-shrink-0 po-mb-0" }, Xs = ["onClick"], er = { class: "shell-sidebar--icon" }, tr = ["innerHTML"], or = { class: "shell-sidebar--label po-font-medium" }, lr = {
  key: 0,
  class: "shell-sidebar--menu po-shrink-0 po-mb-0 po-border-t po-border-slate-200 po-pt-3"
}, nr = { class: "shell-sidebar--icon" }, ar = /* @__PURE__ */ s("span", { class: "shell-sidebar--label po-font-medium" }, "Feedback", -1), sr = { action: "" }, rr = /* @__PURE__ */ s("br", null, null, -1), ir = { class: "po-p-5" }, pr = {
  name: "PoSidebarDrawer"
}, I1 = /* @__PURE__ */ Object.assign(pr, {
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
    const o = k(e.apps), n = k(!1);
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
    ], p = k(r[0]);
    return (c, d) => (i(), u(R, null, [
      qs,
      s("aside", Us, [
        s("div", Gs, [
          (i(!0), u(R, null, H(e.content, (f) => (i(), u("div", null, [
            _(h(eo), { defaultOpen: !0 }, {
              default: j(({ open: v }) => [
                f.groupName ? (i(), M(h(to), {
                  key: 0,
                  class: N([v ? "" : "po-mb-3", "shell-sidebar--section po-w-full po-text-left"])
                }, {
                  default: j(() => [
                    ne(y(f.groupName), 1)
                  ]),
                  _: 2
                }, 1032, ["class"])) : x("", !0),
                _(Se, {
                  "enter-active-class": "po-transition po-duration-100 po-ease-out",
                  "enter-from-class": "po-transform po-scale-95 po-opacity-0",
                  "enter-to-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-active-class": "po-transition po-duration-75 po-ease-out",
                  "leave-from-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-to-class": "po-transform po-scale-95 po-opacity-0"
                }, {
                  default: j(() => [
                    _(h(oo), null, {
                      default: j(() => [
                        s("ul", Ks, [
                          (i(!0), u(R, null, H(f.items, (g) => (i(), u("li", null, [
                            g.disabled ? x("", !0) : (i(), u("button", {
                              key: 0,
                              onClick: (w) => c.$emit("button-click", g.url),
                              class: N([
                                "shell-sidebar--item",
                                { active: g.url == e.currRoute }
                              ]),
                              title: `Go to ${g.label}`
                            }, [
                              s("span", Ys, [
                                (i(), M(fe(g.icon), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" }))
                              ]),
                              s("span", Zs, y(g.label), 1)
                            ], 10, Ws))
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
          e.apps !== null ? (i(), u("div", Js, [
            _(h(eo), { defaultOpen: !0 }, {
              default: j(({ open: f }) => [
                e.appsLabel ? (i(), M(h(to), {
                  key: 0,
                  class: N([f ? "" : "po-mb-3", "shell-sidebar--section po-w-full po-text-left"])
                }, {
                  default: j(() => [
                    ne(y(e.appsLabel), 1)
                  ]),
                  _: 2
                }, 1032, ["class"])) : x("", !0),
                _(Se, {
                  "enter-active-class": "po-transition po-duration-100 po-ease-out",
                  "enter-from-class": "po-transform po-scale-95 po-opacity-0",
                  "enter-to-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-active-class": "po-transition po-duration-75 po-ease-out",
                  "leave-from-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-to-class": "po-transform po-scale-95 po-opacity-0"
                }, {
                  default: j(() => [
                    _(h(oo), null, {
                      default: j(() => [
                        s("ul", Qs, [
                          (i(!0), u(R, null, H(o.value, (v, g) => (i(), u("li", null, [
                            s("button", {
                              onClick: (w) => {
                                c.$emit("app-click", v.name), a(g);
                              },
                              class: N(["shell-sidebar--item", [{ active: v.current }]]),
                              title: "Go to feedback"
                            }, [
                              s("span", er, [
                                s("span", {
                                  innerHTML: v.icon,
                                  class: "po-text-slate-600 po-w-5"
                                }, null, 8, tr)
                              ]),
                              s("span", or, y(v.name), 1)
                            ], 10, Xs)
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
        e.hasFeedback ? (i(), u("ul", lr, [
          s("li", null, [
            s("button", {
              onClick: d[0] || (d[0] = re(() => n.value = !0, ["prevent"])),
              class: "shell-sidebar--item",
              title: "Go to feedback"
            }, [
              s("span", nr, [
                _(h(Ol), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" })
              ]),
              ar
            ])
          ])
        ])) : x("", !0),
        _(ys, {
          show: n.value,
          onModalClosed: d[2] || (d[2] = () => n.value = !1),
          "modal-title": "Feedback"
        }, {
          content: j(() => [
            s("form", sr, [
              _(Ls, {
                label: "Type",
                options: r,
                "pre-selected": p.value,
                modelValue: p.value,
                "onUpdate:modelValue": d[1] || (d[1] = (f) => p.value = f)
              }, null, 8, ["pre-selected", "modelValue"]),
              rr,
              _(Hs, {
                cols: "6",
                rows: "6",
                label: "Description",
                message: ""
              })
            ])
          ]),
          footer: j(() => [
            s("div", ir, [
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
}), ur = {
  key: 0,
  class: "shell-content--action-bar"
}, cr = { class: "action-bar__nav" }, dr = ["onClick"], fr = { class: "action-bar__nav_label po-font-medium" }, vr = {
  key: 0,
  class: "po-shrink-0 po-flex po-space-x-1"
}, mr = /* @__PURE__ */ s("span", { class: "action-bar__nav_label po-font-medium" }, "Go Back", -1), hr = {
  name: "PoActionBar"
}, R1 = /* @__PURE__ */ Object.assign(hr, {
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
    return (t, l) => e.items !== null && e.items.length > 0 || e.showBackButton ? (i(), u("section", ur, [
      s("nav", cr, [
        (i(!0), u(R, null, H(e.items, (o) => (i(), u("span", {
          onClick: (n) => t.$emit("button-click", o.label),
          class: N([[
            { "action-bar__nav_highlighted": o.highlighted },
            { "action-bar__nav_danger": o.danger }
          ], "action-bar__nav_link"])
        }, [
          (i(), M(fe(o.icon), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" })),
          s("span", fr, y(o.label), 1)
        ], 10, dr))), 256))
      ]),
      e.showBackButton ? (i(), u("nav", vr, [
        s("span", {
          onClick: l[0] || (l[0] = (o) => t.$emit("button-click", "back")),
          class: "action-bar__nav_link"
        }, [
          mr,
          (i(), M(fe(h($l)), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" }))
        ])
      ])) : x("", !0)
    ])) : x("", !0);
  }
}), br = { class: "po-shadow-sm po-rounded-xl po-bg-white po-relative" }, gr = {
  key: 0,
  class: "po-absolute po-right-2 po-top-2 po-p-2 po-rounded-lg"
}, yr = { class: "po-grid po-grid-cols-1 lg:po-grid-cols-3 po-gap-3" }, xr = {
  key: 0,
  class: "po-text-base po-font-medium po-text-slate-600"
}, Vr = {
  key: 1,
  class: "lg:po-col-span-2 lg:po-flex lg:po-justify-end po-space-x-2"
}, wr = {
  name: "PoCard"
}, M1 = /* @__PURE__ */ Object.assign(wr, {
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
    return (t, l) => (i(), u("div", br, [
      e.isLoading ? (i(), u("div", gr, [
        _(Jo)
      ])) : x("", !0),
      s("div", yr, [
        e.title.length > 0 ? (i(), u("h3", xr, y(e.title), 1)) : x("", !0),
        t.$slots.action ? (i(), u("div", Vr, [
          Q(t.$slots, "action")
        ])) : x("", !0)
      ]),
      Q(t.$slots, "content")
    ]));
  }
}), kr = { class: "po-py-3 po-px-5 po-border-b po-border-slate-200" }, $r = {
  class: "po-flex po-w-full md:po-ml-0",
  action: "#",
  method: "GET"
}, _r = {
  for: "search-field",
  class: "po-sr-only"
}, Cr = { class: "po-relative po-w-full po-text-slate-400 focus-within:po-text-mpao-lightblue po-transition-colors po-duration-100 po-ease-in-out" }, Sr = { class: "po-pointer-events-none po-absolute po-inset-y-0 po-left-0 po-flex po-items-center" }, Er = ["placeholder", "value"], Or = {
  name: "PoCardSearch"
}, F1 = /* @__PURE__ */ Object.assign(Or, {
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
    return (t, l) => (i(), u("div", kr, [
      s("form", $r, [
        s("label", _r, y(e.placeholder), 1),
        s("div", Cr, [
          s("div", Sr, [
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
          }, null, 40, Er)
        ])
      ])
    ]));
  }
}), Pr = { class: "po-flex po-items-center" }, Lr = { class: "po-text-sm po-font-medium po-text-slate-500 po-pr-2" }, Nr = {
  name: "PoPagination"
}, Dr = /* @__PURE__ */ Object.assign(Nr, {
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
    const a = S(() => l.totalPages ? `Page ${l.currentPage} of ${l.totalPages}` : l.pagination ? l.pagination.label : "");
    return (r, p) => (i(), u("div", Pr, [
      s("span", Lr, y(h(a)), 1),
      s("button", {
        title: "Previous",
        onClick: o,
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        _(h(Dl), { class: "po-w-4 po-stroke-current po-stroke-2" })
      ]),
      s("button", {
        title: "Next",
        onClick: n,
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        _(h(Tl), { class: "po-w-4 po-stroke-current po-stroke-2" })
      ])
    ]));
  }
}), Tr = { key: 0 }, jr = {
  class: "po-text-xl md:po-text-2xl po-font-semibold po-text-slate-800",
  id: "po-page-title"
}, Br = {
  key: 0,
  class: "po-text-base po-mt-2 po-max-w-md po-block po-text-slate-500"
}, Ar = { key: 1 }, Ir = { class: "po-grid po-grid-cols-1 lg:po-grid-cols-2 po-gap-5" }, Rr = {
  class: "po-text-xl md:po-text-2xl po-font-semibold po-text-slate-800",
  id: "po-page-title"
}, Mr = {
  key: 0,
  class: "po-text-base po-mt-4 po-max-w-md po-pb-5 po-block po-text-slate-500"
}, Fr = { class: "po-flex po-items-end po-justify-end po-flex-col" }, zr = {
  key: 0,
  class: "po-flex md:po-justify-end po-mb-5"
}, Hr = { class: "po-bg-slate-50 po-shadow-sm po-rounded-xl po-py-5 po-px-2 po-divide-x po-divide-slate-200 po-flex" }, qr = ["onClick"], Ur = { class: "po-text-xl po-font-medium po-text-slate-600 po-flex po-items-center po-space-x-1" }, Gr = { class: "po-text-xl po-font-medium po-text-slate-600 group-hover:po-text-mpao-lightblue" }, Kr = { class: "po-text-sm po-text-slate-500 po-block group-hover:po-text-mpao-lightblue" }, Wr = { class: "po-flex po-items-center po-space-x-1 md:po-justify-end" }, Yr = {
  key: 2,
  class: "po-border-l po-border-slate-400 po-h-3 po-w-3 po-ml-1"
}, Zr = {
  key: 0,
  class: "po-bg-slate-50 po-p-5 po-mt-5 po-rounded-md po-grid po-grid-cols-1 md:po-grid-cols-3 po-gap-5"
}, Jr = /* @__PURE__ */ s("span", { class: "po-text-xs po-text-slate-500 po-py-5" }, "No filters available at the moment.", -1), Qr = {
  name: "PoPageTitle"
}, z1 = /* @__PURE__ */ Object.assign(Qr, {
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
    const o = e.filterOn ? k(!0) : k(!1);
    function n(r) {
      t("pagination-click", r);
    }
    function a(r) {
      return r.iconColor ? r.iconColor : "po-slate-600";
    }
    return (r, p) => e.standAlone ? (i(), u("div", Tr, [
      s("h1", jr, y(e.label), 1),
      e.description !== "" ? (i(), u("span", Br, y(e.description), 1)) : x("", !0)
    ])) : (i(), u("div", Ar, [
      s("div", Ir, [
        s("div", null, [
          s("h1", Rr, y(e.label), 1),
          e.description !== "" ? (i(), u("span", Mr, y(e.description), 1)) : x("", !0)
        ]),
        s("div", Fr, [
          e.stats !== null ? (i(), u("div", zr, [
            s("div", Hr, [
              (i(!0), u(R, null, H(e.stats, (c) => (i(), u("div", {
                class: "po-px-5 po-cursor-pointer po-group genie-effect",
                onClick: (d) => r.$emit("stat-click", c)
              }, [
                s("span", Ur, [
                  s("span", Gr, y(c.value), 1),
                  c.icon ? (i(), u("span", {
                    key: 0,
                    class: N(["po-w-5 po-h-5", a(c)])
                  }, [
                    (i(), M(fe(c.icon)))
                  ], 2)) : x("", !0)
                ]),
                s("span", Kr, y(c.label), 1)
              ], 8, qr))), 256))
            ])
          ])) : x("", !0),
          s("div", Wr, [
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
              _(h(Al), { class: "po-w-4 po-stroke-current po-stroke-2" })
            ], 2)) : x("", !0),
            e.showDownload ? (i(), u("button", {
              key: 1,
              title: "Download",
              onClick: p[1] || (p[1] = (c) => r.$emit("button-click", "download")),
              class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
            }, [
              _(h(wl), { class: "po-w-4 po-stroke-current po-stroke-2" })
            ])) : x("", !0),
            e.showFilter && e.showPagination || e.showDownload && e.showPagination ? (i(), u("span", Yr, " ")) : x("", !0),
            e.showPagination ? (i(), M(Dr, {
              key: 3,
              pagination: e.pagination,
              onButtonClick: n
            }, null, 8, ["pagination"])) : x("", !0)
          ])
        ])
      ]),
      _(Se, {
        "enter-active-class": "po-transition po-duration-100 po-ease-out",
        "enter-from-class": "po-transform po-scale-95 po-opacity-0",
        "enter-to-class": "po-transform po-scale-100 po-opacity-100",
        "leave-active-class": "po-transition po-duration-75 po-ease-out",
        "leave-from-class": "po-transform po-scale-100 po-opacity-100",
        "leave-to-class": "po-transform po-scale-95 po-opacity-0"
      }, {
        default: j(() => [
          h(o) ? (i(), u("div", Zr, [
            Q(r.$slots, "filters", {}, () => [
              Jr
            ])
          ])) : x("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), Xr = { class: "table-responsive po-w-full" }, ei = { key: 1 }, ti = ["colspan"], oi = { class: "po-py-10 po-block po-normal-case" }, li = { key: 0 }, ni = {
  name: "PoTable"
}, H1 = /* @__PURE__ */ Object.assign(ni, {
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
    return (t, l) => (i(), u("table", Xr, [
      s("thead", null, [
        s("tr", null, [
          (i(!0), u(R, null, H(e.thead, (o) => (i(), u("th", null, [
            Q(t.$slots, "th", Gt(Kt(o)))
          ]))), 256))
        ])
      ]),
      s("tbody", null, [
        e.tbody !== null || e.tbody !== null && e.tbody.length !== 0 ? (i(!0), u(R, { key: 0 }, H(e.tbody, (o, n) => (i(), u("tr", null, [
          Q(t.$slots, "td", Gt(Kt({ ...o, index: n, item: o })))
        ]))), 256)) : x("", !0),
        e.tbody == null || e.tbody !== null && e.tbody.length == 0 ? (i(), u("tr", ei, [
          s("td", {
            colspan: e.thead.length + 1,
            class: "po-text-center"
          }, [
            s("span", oi, y(e.emptyMessage), 1)
          ], 8, ti)
        ])) : x("", !0)
      ]),
      t.$slots.tfoot ? (i(), u("tfoot", li, [
        s("tr", null, [
          Q(t.$slots, "tfoot")
        ])
      ])) : x("", !0)
    ]));
  }
}), ai = ["onUpdate:modelValue", "id"], si = ["for"], ri = { class: "table-responsive po-w-full" }, ii = ["onClick"], pi = { key: 0 }, ui = ["onClick"], ci = {
  name: "PoDynamicTable",
  components: { ArrowsUpDownIcon: el, ArrowUpIcon: Xo, ArrowDownIcon: Qo }
}, q1 = /* @__PURE__ */ Object.assign(ci, {
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
    const t = e, l = k(t.columns), o = k(null), n = k(null), a = (c) => {
      c.hidden = !c.hidden, l.value = t.columns.filter((d) => !d.hidden);
    }, r = (c) => {
      c.sortable && (c.sorted && n.value === "asc" ? n.value = "desc" : n.value = "asc", l.value.forEach((d) => {
        d.key === c.key ? (d.sorted = !0, d.sortDirection = n.value) : (d.sorted = !1, d.sortDirection = null);
      }), o.value = c);
    }, p = k([]);
    return X(() => {
      o.value ? p.value = [...t.data].sort((c, d) => {
        let f = c[o.value.key], v = d[o.value.key];
        return typeof f == "string" && typeof v == "string" && (f = f.toLowerCase(), v = v.toLowerCase()), f < v ? n.value === "asc" ? -1 : 1 : f > v ? n.value === "asc" ? 1 : -1 : 0;
      }) : p.value = [...t.data];
    }), (c, d) => (i(), u("div", null, [
      (i(!0), u(R, null, H(l.value, (f) => (i(), u("div", null, [
        $t(s("input", {
          type: "checkbox",
          name: "",
          "onUpdate:modelValue": (v) => f.hidden = v,
          id: `hide-table-col-${f.label}`
        }, null, 8, ai), [
          [gl, f.hidden]
        ]),
        s("label", {
          for: `hide-table-col-${f.label}`
        }, y(f.label), 9, si)
      ]))), 256)),
      s("table", ri, [
        s("thead", null, [
          s("tr", null, [
            (i(!0), u(R, null, H(l.value, (f) => (i(), u("th", {
              key: f.key,
              onClick: (v) => r(f)
            }, [
              ne(y(f.label) + " " + y(f.sorted) + " " + y(f.sortDirection) + " ", 1),
              f.sortable ? (i(), u("span", pi, [
                f.sorted ? x("", !0) : (i(), M(h(el), {
                  key: 0,
                  class: "po-w-4"
                })),
                f.sorted && f.sortDirection === "asc" ? (i(), M(h(Xo), {
                  key: 1,
                  class: "po-w-4"
                })) : x("", !0),
                f.sorted && f.sortDirection === "desc" ? (i(), M(h(Qo), {
                  key: 2,
                  class: "po-w-4"
                })) : x("", !0)
              ])) : x("", !0),
              f.hidable ? (i(), u("button", {
                key: 1,
                onClick: (v) => a(f)
              }, y(f.hidden ? "Show" : "Hide"), 9, ui)) : x("", !0)
            ], 8, ii))), 128))
          ])
        ]),
        s("tbody", null, [
          (i(!0), u(R, null, H(p.value, (f) => (i(), u("tr", {
            key: f.id
          }, [
            (i(!0), u(R, null, H(l.value, (v) => (i(), u("td", {
              key: v.key
            }, y(f[v.key]), 1))), 128))
          ]))), 128))
        ])
      ])
    ]));
  }
}), di = { class: "" }, fi = { class: "po-grow" }, vi = ["onClick"], mi = {
  name: "PoDescriptionList"
}, nl = /* @__PURE__ */ Object.assign(mi, {
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
        class: N([
          "po-description-list",
          { "po-divide-y po-divide-slate-200": !e.striped },
          { striped: e.striped }
        ])
      }, [
        Q(t.$slots, "content", {}, () => [
          (i(!0), u(R, null, H(e.items, (o) => (i(), u("div", null, [
            s("dt", null, y(o.title), 1),
            s("dd", di, [
              s("span", fi, y(o.description), 1),
              o.action !== void 0 ? (i(), u("span", {
                key: 0,
                class: "po-shrink-0 po-text-mpao-lightblue hover:po-text-mpao-blue po-transition-colors po-duration-100 po-ease-in-out po-px-2 po-cursor-pointer",
                onClick: (n) => t.$emit("button-click", o.action)
              }, y(o.action), 9, vi)) : x("", !0)
            ])
          ]))), 256))
        ])
      ], 2)
    ]));
  }
}), hi = ["for"], bi = { class: "po-capitalize" }, gi = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, yi = ["title"], xi = ["type", "name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], Vi = ["id"], wi = ["id"], ki = {
  name: "PoInputField"
}, U1 = /* @__PURE__ */ Object.assign(ki, {
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
    const { errorMessage: o } = Ve(t), n = k(o.value !== null);
    return J(o, (a, r) => {
      n.value = o.value !== null && o.value !== "";
    }), (a, r) => (i(), u("div", {
      class: N(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      s("label", {
        for: e.id,
        class: N([
          "po-text-sm po-font-medium po-flex po-items-center po-space-x-1",
          { "po-text-red-500": n.value },
          { "po-text-slate-700": !n.value }
        ])
      }, [
        s("span", bi, y(e.label), 1),
        e.required ? (i(), u("span", gi, "*")) : x("", !0),
        e.info !== null ? (i(), u("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          _(h(tl), { class: "po-fill-current" })
        ], 8, yi)) : x("", !0)
      ], 10, hi),
      s("input", Pe({
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
      }), null, 16, xi),
      e.message !== null ? (i(), u("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, y(e.message), 9, Vi)) : x("", !0),
      n.value && h(o) !== null ? (i(), u("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
        id: `${e.id}-error`
      }, [
        _(h(qt), { class: "po-fill-current po-w-4 po-mt-[0.2rem] po-shrink-0" }),
        s("span", null, y(h(o)), 1)
      ], 8, wi)) : x("", !0)
    ], 2));
  }
}), $i = { class: "po-text-sm po-font-medium po-text-slate-700 peer-focus:po-text-mpao-lightblue peer-invalid:po-text-red-500 peer-invalid:peer-focus:po-text-red-600 po-flex po-items-center po-space-x-1 po-capitalize" }, _i = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Ci = ["name", "id", "value"], Si = ["for"], Ei = { class: "po-flex po-items-center po-space-x-1" }, Oi = /* @__PURE__ */ s("span", { class: "po-text-sm" }, "Choose file", -1), Pi = ["id"], Li = ["id"], Ni = {
  name: "PoInputFile"
}, G1 = /* @__PURE__ */ Object.assign(Ni, {
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
      class: N(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      s("span", $i, [
        s("span", null, y(e.label), 1),
        e.required ? (i(), u("span", _i, "*")) : x("", !0)
      ]),
      s("input", {
        name: `${e.id}-upload`,
        id: `${e.id}-fileupload`,
        value: e.modelValue,
        type: "file",
        onInput: l[0] || (l[0] = (o) => t.$emit("update:modelValue", o.target.value)),
        class: "po-sr-only po-peer"
      }, null, 40, Ci),
      s("label", {
        for: `${e.id}-fileupload`,
        class: "po-mt-1 po-block po-w-full po-border po-cursor-pointer po-rounded-md po-border-slate-300 po-bg-white peer-focus:po-border-mpao-lightblue invalid:po-border-red-400 invalid:focus:po-border-red-600 invalid:focus:po-ring-red-600 sm:po-text-sm po-p-2"
      }, [
        s("div", Ei, [
          _(h(yo), { class: "po-w-4 po-stroke-slate-500" }),
          Oi
        ])
      ], 8, Si),
      e.message !== null ? (i(), u("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, y(e.message), 9, Pi)) : x("", !0),
      e.errorMessage !== null ? (i(), u("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, y(e.errorMessage), 9, Li)) : x("", !0)
    ], 2));
  }
}), Di = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Ti = ["title"], ji = { class: "po-relative po-mt-1" }, Bi = ["id"], Ai = ["id"], Ii = {
  name: "PoSelectField"
}, K1 = /* @__PURE__ */ Object.assign(Ii, {
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
    const l = e, o = k(""), n = k(), a = S(
      () => o.value === "" ? l.list : l.list.filter((d) => d.name.toLowerCase().includes(o.value.toLowerCase()))
    );
    function r(d) {
      if (a.value) {
        let f = a.value.find((v) => v.id === d);
        return f == null ? void 0 : f.name;
      }
    }
    n.value = l.modelValue, bo(() => {
      n.value = l.modelValue;
    }), J(n, () => {
      t("update:modelValue", n.value), t("selected", n.value);
    });
    const { errorMessage: p } = Ve(l), c = k(p.value !== null);
    return J(p, (d, f) => {
      c.value = p.value !== null && p.value !== "";
    }), (d, f) => (i(), M(h(_n), {
      as: "div",
      modelValue: n.value,
      "onUpdate:modelValue": f[1] || (f[1] = (v) => n.value = v),
      class: N([{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }])
    }, {
      default: j(() => [
        _(h(Cn), {
          class: N([
            "po-text-sm po-font-medium po-flex po-items-center po-space-x-1",
            { "po-text-red-500": c.value },
            { "po-text-slate-700": !c.value }
          ])
        }, {
          default: j(() => [
            s("span", null, y(e.label), 1),
            e.required ? (i(), u("span", Di, "*")) : x("", !0),
            e.info !== null ? (i(), u("abbr", {
              key: 1,
              title: e.info,
              class: "po-w-4 po-text-slate-500"
            }, [
              _(h(tl), { class: "po-fill-current" })
            ], 8, Ti)) : x("", !0)
          ]),
          _: 1
        }, 8, ["class"]),
        s("div", ji, [
          _(h(En), {
            class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm",
            onChange: f[0] || (f[0] = (v) => o.value = v.target.value),
            "display-value": r
          }),
          _(h(Sn), { class: "po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-rounded-r-md po-px-2 focus:po-outline-none" }, {
            default: j(() => [
              _(h(ws), {
                class: "po-h-5 po-w-5 po-text-slate-400",
                "aria-hidden": "true"
              })
            ]),
            _: 1
          }),
          h(a).length > 0 ? (i(), M(h(On), {
            key: 0,
            class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
          }, {
            default: j(() => [
              (i(!0), u(R, null, H(h(a), (v) => (i(), M(h(Pn), {
                key: v.id,
                value: v.id,
                as: "template"
              }, {
                default: j(({ active: g, selected: w }) => [
                  s("li", {
                    class: N([
                      "po-relative po-cursor-default po-select-none po-py-2 po-pl-3 po-pr-9",
                      g ? "po-bg-mpao-lightblue po-text-white" : "po-text-slate-900"
                    ])
                  }, [
                    s("span", {
                      class: N(["po-block po-truncate", w && "po-font-semibold"])
                    }, y(v.name), 3),
                    w ? (i(), u("span", {
                      key: 0,
                      class: N([
                        "po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-pr-4",
                        g ? "po-text-white" : "po-text-mpao-lightblue"
                      ])
                    }, [
                      _(h(Vs), {
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
        }, y(e.message), 9, Bi)) : x("", !0),
        c.value && h(p) !== null ? (i(), u("p", {
          key: 1,
          class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
          id: `${d.id}-error`
        }, [
          _(h(qt), { class: "po-fill-current po-w-4 po-mt-[0.2rem] po-shrink-0" }),
          s("span", null, y(h(p)), 1)
        ], 8, Ai)) : x("", !0)
      ]),
      _: 1
    }, 8, ["modelValue", "class"]));
  }
}), Ri = { class: "po-text-sm po-font-medium po-text-slate-700 po-cursor-pointer po-select-none po-flex po-items-center po-space-x-1" }, Mi = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Fi = {
  name: "PoToggle"
}, W1 = /* @__PURE__ */ Object.assign(Fi, {
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
    return (o, n) => (i(), M(h(ta), {
      as: "div",
      class: "po-flex po-items-center"
    }, {
      default: j(() => [
        _(h(oa), {
          modelValue: l.value,
          "onUpdate:modelValue": n[0] || (n[0] = (a) => l.value = a),
          onClick: n[1] || (n[1] = (a) => o.$emit("update:modelValue", !l.value)),
          class: N([
            l.value ? "po-bg-mpao-lightblue" : "po-bg-slate-200",
            "po-relative po-inline-flex po-h-6 po-w-11 po-flex-shrink-0 po-cursor-pointer po-rounded-full po-border-2 po-border-transparent po-transition-colors po-duration-200 po-ease-in-out focus:po-outline-none focus:po-ring-2 focus:po-ring-mpao-lightblue focus:po-ring-offset-2"
          ])
        }, {
          default: j(() => [
            s("span", {
              "aria-hidden": "true",
              class: N([
                l.value ? "po-translate-x-5" : "po-translate-x-0",
                "po-pointer-events-none po-inline-block po-h-5 po-w-5 po-transform po-rounded-full po-bg-white po-shadow po-ring-0 po-transition po-duration-200 po-ease-in-out"
              ])
            }, null, 2)
          ]),
          _: 1
        }, 8, ["modelValue", "class"]),
        _(h(la), {
          as: "span",
          class: "po-ml-3"
        }, {
          default: j(() => [
            s("span", Ri, [
              s("span", null, y(e.label), 1),
              e.required ? (i(), u("span", Mi, "*")) : x("", !0)
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), zi = { class: "po-pt-1 po-space-y-1 po-border-r-2 po-border-slate-200 po-relative" }, Hi = ["onClick"], qi = {
  name: "PoSectionMenu"
}, Y1 = /* @__PURE__ */ Object.assign(qi, {
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
    return (t, l) => (i(), u("ul", zi, [
      (i(!0), u(R, null, H(e.menuItems, (o) => (i(), u("li", null, [
        s("span", {
          onClick: (n) => t.$emit("link-click", o.link),
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
          (i(), M(fe(o.icon), { class: "po-w-4 po-h-4 po-stroke-current" })),
          s("span", null, y(o.label), 1)
        ], 10, Hi)
      ]))), 256))
    ]));
  }
}), Ui = { class: "po-relative po-flex po-items-start" }, Gi = { class: "po-flex po-h-5 po-items-center" }, Ki = ["name", "id", "checked", "disabled", "aria-describedby"], Wi = { class: "po-ml-3 po-text-sm" }, Yi = ["for"], Zi = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Ji = ["id"], Qi = { class: "po-sr-only" }, Xi = ["id"], ep = {
  name: "PoCheckbox"
}, Z1 = /* @__PURE__ */ Object.assign(ep, {
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
    return (t, l) => (i(), u("div", Ui, [
      s("div", Gi, [
        s("input", Pe({
          name: `${e.id}-field`,
          id: e.id,
          checked: e.modelValue,
          disabled: e.disabled,
          "aria-describedby": `${e.id}-description`
        }, t.$attrs, {
          onInput: l[0] || (l[0] = (o) => t.$emit("update:modelValue", o.target.checked)),
          type: "checkbox",
          class: "po-h-4 po-w-4 po-rounded po-border-slate-300 po-text-mpao-lightblue focus:po-ring-mpao-lightblue"
        }), null, 16, Ki)
      ]),
      s("div", Wi, [
        s("label", {
          for: e.id,
          class: "po-font-medium po-text-slate-600 po-cursor-pointer po-select-none po-flex po-items-center po-space-x-1"
        }, [
          s("span", null, y(e.label), 1),
          e.required ? (i(), u("span", Zi, "*")) : x("", !0)
        ], 8, Yi),
        e.message ? (i(), u("span", {
          key: 0,
          id: `${e.id}-description`,
          class: "po-text-slate-500 po-cursor-default"
        }, [
          s("span", Qi, y(e.label), 1),
          ne(" " + y(e.message), 1)
        ], 8, Ji)) : x("", !0)
      ]),
      e.errorMessage !== null ? (i(), u("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, y(e.errorMessage), 9, Xi)) : x("", !0)
    ]));
  }
}), tp = { class: "po-grid po-gap-5 po-grid-cols-1 lg:po-grid-cols-2 po-px-6 lg:po-px-8 po-mt-10 po-pb-10" }, op = { class: "po-flex po-items-start po-space-x-5" }, lp = /* @__PURE__ */ s("img", {
  class: "po-h-10",
  src: "https://pension.gov.mv/asset/image/enlgish_website_logo.svg",
  alt: "Pension Office logo"
}, null, -1), np = /* @__PURE__ */ s("p", { class: "-po-mt-1 po-text-xs po-text-slate-500" }, " 8th Floor, Allied Building , Chaandhanee Magu, Malé, 20156, Maldives ", -1), ap = { class: "po-mt-1 po-text-xs po-text-slate-500" }, sp = { class: "po-mt-1 po-text-xs po-text-slate-500 po-flex po-space-x-4" }, rp = {
  href: "https://www.pension.gov.mv",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue"
}, ip = /* @__PURE__ */ s("span", null, "www.pension.gov.mv", -1), pp = {
  href: "mailto:info@pension.gov.mv",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue"
}, up = /* @__PURE__ */ s("span", null, "info@pension.gov.mv", -1), cp = {
  href: "tel:1441",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue"
}, dp = /* @__PURE__ */ s("span", null, "1441", -1), fp = { class: "po-flex lg:po-items-end po-flex-col" }, vp = { class: "-po-mt-1 po-text-xs po-text-slate-500 po-flex po-space-x-4" }, mp = /* @__PURE__ */ s("a", {
  href: "",
  class: "hover:po-text-mpao-lightblue"
}, "Terms & Conditions", -1), hp = /* @__PURE__ */ s("a", {
  href: "",
  class: "hover:po-text-mpao-lightblue"
}, "Privacy Policy", -1), bp = /* @__PURE__ */ s("div", { class: "po-flex po-space-x-2 po-mt-3 lg:po-justify-end" }, [
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
], -1), gp = /* @__PURE__ */ s("div", {
  "aria-live": "assertive",
  class: "po-pointer-events-none po-fixed po-inset-0 po-flex po-items-start po-px-4 po-py-6 sm:po-p-6 po-z-50"
}, [
  /* @__PURE__ */ s("div", {
    class: "po-flex po-w-full po-flex-col po-items-end po-space-y-4 sm:po-items-end po-pt-[55px]",
    id: "po-notifications-alert"
  })
], -1), yp = {
  name: "PoFooter"
}, J1 = /* @__PURE__ */ Object.assign(yp, {
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (l, o) => (i(), u("div", null, [
      s("section", tp, [
        s("div", op, [
          lp,
          s("div", null, [
            np,
            s("p", ap, " © " + y(new Date().getFullYear()) + " Pension Office, All Rights Reserved. ", 1),
            s("p", sp, [
              s("a", rp, [
                _(h(Ts), { class: "po-w-3 po-h-3 po-fill-current" }),
                ip
              ]),
              s("a", pp, [
                _(h(Ns), { class: "po-w-3 po-h-3 po-fill-current" }),
                up
              ]),
              s("a", cp, [
                _(h(js), { class: "po-w-3 po-h-3 po-fill-current" }),
                dp
              ])
            ])
          ])
        ]),
        s("div", fp, [
          s("nav", vp, [
            s("a", {
              href: "#",
              onClick: o[0] || (o[0] = re((n) => l.$emit("button-click", "changelog-button"), ["prevent"])),
              class: "hover:po-text-mpao-lightblue"
            }, "Change logs"),
            mp,
            hp
          ]),
          bp
        ])
      ]),
      gp
    ]));
  }
}), xp = {
  key: 0,
  class: "po-flex po-items-start po-space-x-4 po-p-5 po-bg-red-100 po-rounded-md po-mt-5"
}, Vp = { class: "po-text-base po-font-medium po-text-red-700" }, wp = { class: "po-text-sm po-text-red-800 po-list-disc po-ml-5 po-mt-2" }, kp = {
  key: 1,
  class: "po-flex po-items-start po-space-x-4 po-p-5 po-bg-green-100 po-rounded-md po-mt-5"
}, $p = { class: "po-text-base po-font-medium po-text-green-700" }, _p = {
  name: "PoFormStatusMessage"
}, Q1 = /* @__PURE__ */ Object.assign(_p, {
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
    return (t, l) => e.isError ? (i(), u("div", xp, [
      _(h(mt), { class: "po-w-8 po-stroke-red-600 po-stroke-2" }),
      s("div", null, [
        s("span", Vp, y(e.message), 1),
        s("ul", wp, [
          (i(!0), u(R, null, H(e.errorList, (o) => (i(), u("li", null, y(o), 1))), 256))
        ])
      ])
    ])) : (i(), u("div", kp, [
      _(h(Ll), { class: "po-w-8 po-stroke-green-600 po-stroke-2" }),
      s("div", null, [
        s("span", $p, y(e.message), 1)
      ])
    ]));
  }
}), Cp = { class: "po-bg-white po-relative po-group po-rounded-xl focus-within:po-ring-2 focus-within:po-ring-inset focus-within:po-ring-indigo-500" }, Sp = { class: "po-block po-p-4 po-transition-colors po-duration-75 po-ease-linear" }, Ep = { class: "po-flex po-items-start po-space-x-2" }, Op = { class: "po-flex po-items-start po-space-x-1" }, Pp = { class: "po-block po-text-2xl po-font-light po-text-slate-600" }, Lp = {
  key: 0,
  class: "po-text-sm po-text-green-500 po-font-medium po-pt-1"
}, Np = { class: "po-text-sm po-tracking-wide po-text-slate-500" }, Dp = {
  name: "PoStatsBlock"
}, X1 = /* @__PURE__ */ Object.assign(Dp, {
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
      class: N(["po-grid po-gap-5", e.numberOfCols])
    }, [
      (i(!0), u(R, null, H(e.items, (o) => (i(), u("div", Cp, [
        s("span", Sp, [
          s("div", Ep, [
            s("div", null, [
              s("span", {
                class: N([
                  "po-inline-flex po-p-2 po-rounded-md",
                  o.bgColor,
                  o.iconColor
                ])
              }, [
                (i(), M(fe(o.icon), { class: "po-w-4 po-h-4" }))
              ], 2)
            ]),
            s("div", null, [
              s("div", Op, [
                s("span", Pp, y(o.value), 1),
                o.diff ? (i(), u("span", Lp, y(o.diff), 1)) : x("", !0)
              ]),
              s("h4", Np, y(o.label), 1)
            ])
          ])
        ])
      ]))), 256))
    ], 2));
  }
}), Tp = {
  key: 0,
  class: "po-flex po-space-x-3 po-items-start"
}, jp = { class: "po-flex po-items-center po-space-x-2" }, Bp = ["datetime"], Ap = { class: "po-text-sm po-font-medium po-text-slate-600" }, Ip = ["datetime"], Rp = { class: "flex" }, Mp = { class: "po-flex po-pt-3 po-flex-wrap po-max-w-sm" }, Fp = ["onClick"], zp = {
  key: 1,
  class: "po-w-full po-text-center"
}, Hp = { class: "po-inline-block po-text-sm po-italic po-text-slate-500" }, qp = /* @__PURE__ */ s("span", { class: "po-text-lg po-text-slate-300 po-px-3 po-inline-block" }, "—", -1), Up = ["datetime"], Gp = {
  name: "PoChatLogItem"
}, e0 = /* @__PURE__ */ Object.assign(Gp, {
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
      class: N([
        "po-flex po-px-5",
        { "po-justify-end po-items-end po-flex-col": e.item.type === "first" }
      ])
    }, [
      e.item.type !== "message" ? (i(), u("div", Tp, [
        e.item.type !== "first" && e.item.avatar !== "" ? (i(), u("div", {
          key: 0,
          class: "po-shrink-0 po-w-8 po-h-8 po-rounded-full po-p-1 po-bg-contain po-bg-slate-100",
          style: yl({ "background-image": `url(${e.item.avatar})` })
        }, null, 4)) : x("", !0),
        s("div", {
          class: N([
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
            }, y(e.item.time_human), 9, Bp)) : x("", !0),
            s("span", Ap, y(e.item.name), 1),
            e.item.type === "second" ? (i(), u("time", {
              key: 1,
              datetime: e.item.time,
              class: "po-text-xs po-text-slate-400"
            }, y(e.item.time_human), 9, Ip)) : x("", !0)
          ]),
          s("div", {
            class: N([
              "po-mt-2 po-space-y-1",
              {
                "po-flex po-justify-end po-items-end po-flex-col": e.item.type === "first"
              }
            ])
          }, [
            Q(t.$slots, "message", {}, () => [
              (i(!0), u(R, null, H(e.item.message, (o) => (i(), u("div", Rp, [
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
                }, y(o), 3)
              ]))), 256))
            ]),
            s("div", Mp, [
              (i(!0), u(R, null, H(e.item.actions, (o) => (i(), u("button", {
                onClick: (n) => t.$emit("button-click", o.label),
                class: "po-appearance-none po-border po-border-mpao-lightblue po-bg-white hover:po-bg-mpao-lightblue po-px-3 po-py-1 po-mb-2 po-mr-2 po-rounded-lg po-text-slate-500 hover:po-text-sky-100 po-transition-colors po-duration-150 po-ease-in-out po-text-sm po-ring-0 po-outline-none"
              }, y(o.label), 9, Fp))), 256))
            ])
          ], 2)
        ], 2)
      ])) : x("", !0),
      e.item.type === "message" ? (i(), u("div", zp, [
        (i(!0), u(R, null, H(e.item.message, (o) => (i(), u("p", Hp, [
          ne(y(o) + " ", 1),
          qp,
          s("time", {
            datetime: e.item.time,
            class: "po-text-xs po-text-slate-400 po-inline-block"
          }, y(e.item.time_human), 9, Up)
        ]))), 256))
      ])) : x("", !0)
    ], 2));
  }
}), Kp = {
  key: 0,
  class: "po-pointer-events-auto po-w-full po-max-w-sm po-overflow-hidden po-rounded-lg po-bg-mpao-lightblue po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5"
}, Wp = { class: "po-p-4" }, Yp = { class: "po-flex po-items-start" }, Zp = { class: "po-flex-shrink-0" }, Jp = { class: "po-ml-3 po-w-0 po-flex-1 po-pt-0.5" }, Qp = { class: "po-text-sm po-font-medium po-text-sky-100" }, Xp = { class: "po-mt-1 po-text-sm po-text-sky-300" }, eu = { class: "po-mt-3 po-flex po-space-x-4" }, tu = { class: "po-ml-4 po-flex po-flex-shrink-0" }, ou = /* @__PURE__ */ s("span", { class: "po-sr-only" }, "Close", -1), lu = {
  name: "PoNotification"
}, t0 = /* @__PURE__ */ Object.assign(lu, {
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
    const l = e, { show: o } = Ve(l), n = k(!1);
    J(o, () => {
      n.value = !1, setTimeout(() => {
        n.value = !0;
      }, 100);
    });
    const a = k(!1);
    return J(n, () => {
      a.value = !1, setTimeout(() => {
        a.value = !0;
      }, 200);
    }), (r, p) => n.value ? (i(), M(_t, {
      key: 0,
      to: "#po-notifications-alert"
    }, [
      _(Se, {
        "enter-active-class": "po-transform po-ease-out po-duration-300 po-transition",
        "enter-from-class": "po-translate-y-2 po-opacity-0 sm:po-translate-y-0 sm:po-translate-x-2",
        "enter-to-class": "po-translate-y-0 po-opacity-100 sm:po-translate-x-0",
        "leave-active-class": "po-transition po-ease-in po-duration-100",
        "leave-from-class": "po-opacity-100",
        "leave-to-class": "po-opacity-0"
      }, {
        default: j(() => [
          a.value ? (i(), u("div", Kp, [
            s("div", Wp, [
              s("div", Yp, [
                s("div", Zp, [
                  Q(r.$slots, "icon")
                ]),
                s("div", Jp, [
                  s("p", Qp, y(e.label), 1),
                  s("p", Xp, y(e.text), 1),
                  s("div", eu, [
                    s("button", {
                      onClick: p[0] || (p[0] = (c) => r.$emit("button-click", e.buttonLabel)),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-100 hover:po-text-sky-200 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, y(e.buttonLabel), 1),
                    s("button", {
                      onClick: p[1] || (p[1] = (c) => n.value = !1),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-300 hover:po-text-sky-500 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, " Dismiss ")
                  ])
                ]),
                s("div", tu, [
                  s("button", {
                    type: "button",
                    onClick: p[2] || (p[2] = (c) => n.value = !1),
                    class: "po-inline-flex po-rounded-md po-bg-mpao-lightblue po-text-sky-500 hover:po-text-sky-300 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                  }, [
                    ou,
                    _(h(ol), {
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
}), nu = /* @__PURE__ */ s("div", { class: "po-fixed po-inset-0" }, null, -1), au = { class: "po-absolute po-inset-0 po-overflow-hidden" }, su = { class: "po-pointer-events-none po-fixed po-inset-y-0 po-right-0 po-flex po-max-w-full po-pl-10" }, ru = { class: "po-flex po-h-full po-flex-col po-overflow-y-scroll po-bg-white po-shadow-xl" }, iu = { class: "po-bg-slate-50 po-py-6 po-px-4 sm:po-px-6" }, pu = { class: "po-flex po-items-center po-justify-between" }, uu = { class: "po-ml-3 po-flex po-h-7 po-items-center" }, cu = /* @__PURE__ */ s("span", { class: "po-sr-only" }, "Close panel", -1), du = {
  key: 0,
  class: "po-mt-1"
}, fu = { class: "po-text-sm po-text-slate-500" }, vu = {
  key: 0,
  class: "po-bg-slate-50 po-rounded-b-xl po-shrink-0"
}, mu = {
  name: "PoSlideover"
}, o0 = /* @__PURE__ */ Object.assign(mu, {
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
    const l = e, { show: o } = Ve(l), n = k(!1);
    J(o, () => {
      n.value = o.value;
    });
    function a() {
      n.value = !1, t("slideover-closed", !0);
    }
    return (r, p) => (i(), M(h(Fe), {
      as: "template",
      show: n.value
    }, {
      default: j(() => [
        _(h(ot), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: a
        }, {
          default: j(() => [
            nu,
            s("div", {
              class: N(["po-fixed po-inset-0 po-overflow-hidden po-bg-black", e.screenOpacity])
            }, [
              s("div", au, [
                s("div", su, [
                  _(h(Ee), {
                    as: "template",
                    enter: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "enter-from": "po-translate-x-full",
                    "enter-to": "po-translate-x-0",
                    leave: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "leave-from": "po-translate-x-0",
                    "leave-to": "po-translate-x-full"
                  }, {
                    default: j(() => [
                      _(h(lt), {
                        class: N([e.maxWidth, "po-pointer-events-auto po-w-screen"])
                      }, {
                        default: j(() => [
                          s("div", ru, [
                            s("div", iu, [
                              s("div", pu, [
                                _(h(Bo), { class: "po-text-lg po-font-medium po-text-slate-600" }, {
                                  default: j(() => [
                                    ne(y(e.label), 1)
                                  ]),
                                  _: 1
                                }),
                                s("div", uu, [
                                  s("button", {
                                    type: "button",
                                    class: "po-rounded-md po-text-slate-500 hover:po-text-mpao-lightblue focus:po-outline-none focus:po-ring-2 focus:po-ring-white",
                                    onClick: a
                                  }, [
                                    cu,
                                    _(h(xo), {
                                      class: "po-h-6 po-w-6",
                                      "aria-hidden": "true"
                                    })
                                  ])
                                ])
                              ]),
                              e.description ? (i(), u("div", du, [
                                s("p", fu, y(e.description), 1)
                              ])) : x("", !0)
                            ]),
                            s("div", {
                              class: N([e.bgColor, "po-relative po-grow po-pt-6 po-px-4 sm:po-px-6"])
                            }, [
                              Q(r.$slots, "content")
                            ], 2),
                            r.$slots.footer ? (i(), u("div", vu, [
                              Q(r.$slots, "footer")
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
}), hu = /* @__PURE__ */ s("div", { class: "po-fixed po-inset-0 po-bg-gray-500 po-bg-opacity-25 po-transition-opacity" }, null, -1), bu = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto po-p-4 sm:po-p-6 md:po-p-20" }, gu = { class: "po-relative" }, yu = {
  key: 0,
  class: "po-max-h-96 scroll-py-3 po-overflow-y-auto po-p-3"
}, xu = {
  name: "PoCommandPalette"
}, l0 = /* @__PURE__ */ Object.assign(xu, {
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
    const t = e, l = k(""), { show: o } = Ve(t), n = k(!1);
    J(o, () => {
      n.value = !1, setTimeout(() => {
        n.value = !0;
      }, 100);
    });
    function a(r) {
      r.ctrlKey && r.key === "b" && (n.value = !0);
    }
    return K(() => {
      window.addEventListener("keyup", a);
    }), go(() => {
      window.removeEventListener("keyup", a);
    }), (r, p) => (i(), M(h(Fe), {
      show: n.value,
      as: "template",
      onAfterLeave: p[2] || (p[2] = (c) => l.value = ""),
      appear: ""
    }, {
      default: j(() => [
        _(h(ot), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: p[1] || (p[1] = (c) => n.value = !1)
        }, {
          default: j(() => [
            _(h(Ee), {
              as: "template",
              enter: "po-ease-out po-duration-300",
              "enter-from": "po-opacity-0",
              "enter-to": "po-opacity-100",
              leave: "po-ease-in po-duration-200",
              "leave-from": "po-opacity-100",
              "leave-to": "po-opacity-0"
            }, {
              default: j(() => [
                hu
              ]),
              _: 1
            }),
            s("div", bu, [
              _(h(Ee), {
                as: "template",
                enter: "po-ease-out po-duration-300",
                "enter-from": "po-opacity-0 po-scale-95",
                "enter-to": "po-opacity-100 po-scale-100",
                leave: "po-ease-in po-duration-200",
                "leave-from": "po-opacity-100 po-scale-100",
                "leave-to": "po-opacity-0 po-scale-95"
              }, {
                default: j(() => [
                  _(h(lt), { class: "po-mx-auto po-max-w-xl po-transform po-divide-y po-divide-gray-100 po-overflow-hidden po-rounded-xl po-bg-white po-shadow-2xl po-ring-1 po-ring-black po-ring-opacity-5 po-transition-all" }, {
                    default: j(() => [
                      s("div", gu, [
                        _(h(ks), {
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
                      e.showContent ? (i(), u("div", yu, [
                        Q(r.$slots, "content")
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
}), Vu = /* @__PURE__ */ s("div", { class: "po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity" }, null, -1), wu = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto" }, ku = { class: "po-flex po-min-h-full po-items-start po-justify-center po-p-4 po-text-center sm:po-p-0" }, $u = { class: "po-p-5" }, _u = { class: "po-text-center po-space-y-3" }, Cu = { key: 1 }, Su = { class: "po-text-sm po-text-gray-600" }, Eu = { class: "po-border-t po-border-slate-200 po-flex po-divide-x po-divide-slate-200" }, Ou = {
  name: "PoAlert"
}, n0 = /* @__PURE__ */ Object.assign(Ou, {
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
    const l = e, { show: o } = Ve(l), n = k(!1);
    J(o, () => {
      n.value = o.value;
    });
    function a() {
      n.value = !1, t("alert-closed", !0);
    }
    return (r, p) => (i(), M(h(Fe), {
      as: "template",
      show: n.value
    }, {
      default: j(() => [
        _(h(ot), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: a
        }, {
          default: j(() => [
            _(h(Ee), {
              as: "template",
              enter: "po-ease-out po-duration-300",
              "enter-from": "po-opacity-0",
              "enter-to": "po-opacity-100",
              leave: "po-ease-in po-duration-200",
              "leave-from": "po-opacity-100",
              "leave-to": "po-opacity-0"
            }, {
              default: j(() => [
                Vu
              ]),
              _: 1
            }),
            s("div", wu, [
              s("div", ku, [
                _(h(Ee), {
                  as: "template",
                  enter: "po-ease-out po-duration-300",
                  "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                  "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                  leave: "po-ease-in po-duration-200",
                  "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                  "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                }, {
                  default: j(() => [
                    _(h(lt), { class: "po-relative po-transform po-overflow-hidden po-rounded-lg po-bg-white po-text-left po-shadow-xl po-transition-all sm:po-my-8 sm:po-w-full sm:po-max-w-sm" }, {
                      default: j(() => [
                        s("div", $u, [
                          s("div", _u, [
                            e.alertTitle !== "" ? (i(), M(h(Bo), {
                              key: 0,
                              as: "h3",
                              class: "po-text-lg po-font-medium po-leading-6 po-text-gray-900"
                            }, {
                              default: j(() => [
                                ne(y(e.alertTitle), 1)
                              ]),
                              _: 1
                            })) : x("", !0),
                            e.alertDescription !== "" ? (i(), u("div", Cu, [
                              s("p", Su, y(e.alertDescription), 1)
                            ])) : x("", !0)
                          ])
                        ]),
                        s("div", Eu, [
                          s("button", {
                            onClick: a,
                            class: "po-text-sm po-bg-white po-text-slate-500 hover:po-bg-slate-50 po-transition-colors po-duration-100 po-ease-out po-font-medium po-py-3 po-px-5 po-w-1/2 focus:po-ring-0"
                          }, y(e.cancelBtnLabel), 1),
                          s("button", {
                            onClick: p[0] || (p[0] = (c) => {
                              r.$emit("button-click", "ok"), a();
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
}), Pu = {
  key: 0,
  class: "po-col-span-2 po-relative po-mt-5"
}, Lu = /* @__PURE__ */ s("span", {
  class: "po-absolute po-top-0 po-left-1 po--ml-px po-h-[calc(100%-7px)] po-w-0.5 po-bg-gray-200",
  "aria-hidden": "true"
}, null, -1), Nu = { class: "po-relative po-space-y-5" }, Du = { class: "po-flex po-space-x-2 po-items-start" }, Tu = { class: "log-item" }, ju = { key: 0 }, Bu = {
  key: 0,
  class: "po-text-slate-500 po-text-xs"
}, Au = {
  key: 1,
  class: "po-text-center po-py-10"
}, Iu = { class: "po-text-sm po-text-slate-500" }, Ru = {
  name: "PoLogs"
}, a0 = /* @__PURE__ */ Object.assign(Ru, {
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
      e.items && e.items.length > 0 ? (i(), u("div", Pu, [
        Lu,
        s("div", Nu, [
          (i(!0), u(R, null, H(e.items, (o, n) => (i(), u("div", Du, [
            s("p", {
              class: N([
                "po-rounded-full po-w-2 po-h-2 border-1 po-border-white po-shrink-0",
                { "po-bg-mpao-orange": n !== e.items.length - 1 },
                ,
                { "po-bg-slate-400": n == e.items.length - 1 }
              ])
            }, null, 2),
            s("div", Tu, [
              s("span", null, [
                ne(y(o.label) + " on " + y(o.date) + " " + y(o.by && o.by !== "" ? "by" : "") + " ", 1),
                o.by && o.by !== "" ? (i(), u("span", ju, y(o.by), 1)) : x("", !0)
              ]),
              o.description && o.description !== "" ? (i(), u("blockquote", Bu, ' "' + y(o.description) + '" ', 1)) : x("", !0)
            ])
          ]))), 256))
        ])
      ])) : (i(), u("div", Au, [
        s("span", Iu, y(e.emptyLabel), 1)
      ]))
    ]));
  }
}), Mu = {
  key: 0,
  role: "list",
  class: "po-divide-y po-divide-gray-200 po-rounded-md po-border po-border-gray-200 po-mt-5"
}, Fu = { class: "po-flex po-items-center po-justify-between po-py-3 po-pl-3 po-pr-4 po-text-sm" }, zu = { class: "po-flex po-w-0 po-flex-1 po-items-center" }, Hu = { class: "po-ml-2 po-w-0 po-flex-1 po-truncate" }, qu = { class: "po-ml-4 po-flex-shrink-0 po-space-x-4" }, Uu = ["onClick"], Gu = ["onClick"], Ku = {
  key: 1,
  class: "po-py-10"
}, Wu = { class: "po-text-sm po-text-slate-500" }, Yu = {
  name: "PoDownloadFileList"
}, s0 = /* @__PURE__ */ Object.assign(Yu, {
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
      e.files && e.files.length > 0 ? (i(), u("ul", Mu, [
        (i(!0), u(R, null, H(e.files, (n) => (i(), u("li", Fu, [
          s("div", zu, [
            _(h(yo), {
              class: "po-h-5 po-w-5 po-flex-shrink-0 po-text-gray-400",
              "aria-hidden": "true"
            }),
            s("span", Hu, y(n.label), 1)
          ]),
          s("div", qu, [
            s("a", {
              href: "#",
              onClick: re((a) => l.$emit("button-click", n), ["prevent"]),
              class: "po-font-medium po-text-mpao-lightblue hover:po-text-indigo-500"
            }, y(e.linkLabel), 9, Uu),
            e.showViewBtn ? (i(), u("a", {
              key: 0,
              href: "#",
              onClick: re((a) => l.$emit("view-click", n), ["prevent"]),
              class: "po-font-medium po-text-mpao-lightblue hover:po-text-indigo-500"
            }, y(e.viewBtnLabel), 9, Gu)) : x("", !0)
          ])
        ]))), 256))
      ])) : (i(), u("div", Ku, [
        s("span", Wu, y(e.emptyLabel), 1)
      ]))
    ]));
  }
}), al = (e, t) => {
  const l = e.__vccOpts || e;
  for (const [o, n] of t)
    l[o] = n;
  return l;
}, Zu = {
  name: "PoContentArea"
}, Ju = { class: "shell-content--area po-max-w-[1370px]" };
function Qu(e, t, l, o, n, a) {
  return i(), u("section", Ju, [
    Q(e.$slots, "default")
  ]);
}
const r0 = /* @__PURE__ */ al(Zu, [["render", Qu]]), Xu = {
  name: "AnimatedLogo"
}, ec = /* @__PURE__ */ xl('<div><svg class="po-stroke-mpao-blue po-w-16 animated-logo" viewBox="0 0 62 55" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.76292 17.8572L7.7 17.9704V18.0682C6.87397 19.526 6.23618 20.649 5.58241 21.4779C4.93472 22.299 4.30505 22.7864 3.51417 23.0053C3.46261 23.0112 3.41718 23.0206 3.39088 23.026C3.35663 23.0331 3.31491 23.0425 3.27694 23.0511C3.25988 23.055 3.24357 23.0587 3.22903 23.0619C3.1106 23.0882 3.03712 23.1 3 23.1H2.93844L2.89561 23.1107L15.9876 0.600006H19.1308C17.2397 1.92747 16.1556 3.83665 15.5371 5.73245C14.8359 7.88203 14.7198 10.0514 14.7027 11.4258C13.1737 11.6033 11.0729 12.4434 9.38038 15.128C8.77075 16.0431 8.26353 16.9561 7.76713 17.8496L7.76292 17.8572Z"></path><path d="M48.1818 11.3241C48.047 8.39742 47.5389 6.05982 46.5472 4.07639C45.8153 2.61266 44.8203 1.39271 43.5945 0.5H46.8113L59.8583 23.0959C59.8303 23.0912 59.7891 23.0819 59.7213 23.0649C59.7166 23.0638 59.7117 23.0625 59.7066 23.0612C59.6302 23.042 59.5099 23.0118 59.3765 23.0027C58.59 22.7825 57.9627 22.2958 57.3176 21.4779C56.6586 20.6423 56.0158 19.508 55.1801 18.0331L55.1413 17.9647C54.8861 17.4553 54.6068 16.973 54.3362 16.5054L54.3327 16.4995C54.0565 16.0225 53.7893 15.5605 53.5472 15.0764L53.5333 15.0485L53.516 15.0226C51.7283 12.3411 49.7115 11.4988 48.1818 11.3241Z"></path><path d="M9.28397 39.6773C11.0717 42.3589 13.0885 43.2011 14.6182 43.3759C14.753 46.3026 15.2611 48.6402 16.2528 50.6236C16.9991 52.1163 17.9653 53.2992 19.1863 54.2H15.7881L2.74125 31.699C2.76073 31.6996 2.78031 31.7 2.8 31.7C2.89335 31.7 2.97474 31.7149 3.07903 31.7381C3.08854 31.7402 3.09897 31.7426 3.11023 31.7452C3.18647 31.7626 3.30082 31.7888 3.42319 31.7972C4.20888 32.0178 4.86081 32.5271 5.52047 33.3603C6.20216 34.2214 6.85697 35.382 7.66164 36.8405C8.26116 37.9396 8.76739 38.8512 9.276 39.665L9.27989 39.6712L9.28397 39.6773Z"></path><path d="M55.124 36.865L55.1331 36.8504L55.1412 36.8353C55.9431 35.3316 56.5997 34.1683 57.2697 33.307C57.9146 32.4778 58.5471 31.9616 59.2949 31.6961C59.4179 31.6866 59.5418 31.6616 59.6287 31.6442C59.6354 31.6428 59.6418 31.6415 59.6481 31.6403C59.719 31.6261 59.772 31.616 59.8123 31.6095L46.8115 54.1H43.8753C45.7283 52.7465 46.7867 50.8277 47.3889 48.9394C48.064 46.8226 48.1795 44.7058 48.1971 43.3742C49.7262 43.1967 51.8271 42.3567 53.5196 39.6719C53.8327 39.2016 54.1164 38.6849 54.3777 38.1995C54.4112 38.1375 54.4442 38.076 54.4768 38.0152C54.7049 37.5906 54.9148 37.1996 55.124 36.865Z"></path><path d="M32.2763 51.5708L32.2653 51.5582L32.2536 51.5465C32.0661 51.359 31.7413 51.2 31.4 51.2C31.3949 51.2 31.3894 51.2 31.3835 51.2C31.2956 51.1998 31.1323 51.1993 30.9751 51.2442C30.7932 51.2962 30.6132 51.4082 30.4904 51.6086C29.1941 53.0706 27.544 53.8 25.5 53.8C22.8209 53.8 20.828 52.9218 19.4532 51.2005C18.1148 49.5247 17.3123 46.988 17.1201 43.5109C18.6883 43.1579 19.8601 42.2673 20.5004 41.6896C20.5136 44.8271 20.8579 46.8152 21.6737 48.0181C22.5558 49.319 23.9045 49.6 25.5 49.6C27.4335 49.6 28.5187 48.2893 29.0946 46.9901C29.6604 45.7138 29.7966 44.3347 29.7999 43.8193C29.8943 42.5846 30.6602 41.8 31.5 41.8H31.5778C32.4558 41.8842 33.2 42.7102 33.2 43.9C33.2 45.6119 33.5619 47.0065 34.2986 47.9982C35.0485 49.0077 36.1459 49.544 37.4792 49.5996L37.4896 49.6H37.5C39.2304 49.6 40.5973 49.3258 41.4454 48.0081C41.849 47.3811 42.1078 46.5565 42.2692 45.5056C42.4311 44.4518 42.5 43.1353 42.5 41.5V24.4455L45.9 21.8182V41.5C45.9 41.4958 45.8996 41.5001 45.8978 41.519C45.8959 41.5381 45.8927 41.5719 45.887 41.6267L45.8842 41.6541C45.8752 41.7406 45.8636 41.8524 45.8521 41.9797C45.8264 42.2614 45.8 42.6283 45.8 43V43.9V43.9029V43.9059V43.9088V43.9117V43.9146V43.9175V43.9205V43.9234V43.9263V43.9292V43.9321V43.935V43.9379V43.9408V43.9437V43.9466V43.9495V43.9524V43.9553V43.9581V43.961V43.9639V43.9668V43.9696V43.9725V43.9754V43.9783V43.9811V43.984V43.9868V43.9897V43.9926V43.9954V43.9983V44.0011V44.004V44.0068V44.0096V44.0125V44.0153V44.0181V44.021V44.0238V44.0266V44.0295V44.0323V44.0351V44.0379V44.0407V44.0435V44.0463V44.0492V44.052V44.0548V44.0576V44.0603V44.0631V44.0659V44.0687V44.0715V44.0743V44.0771V44.0798V44.0826V44.0854V44.0882V44.0909V44.0937V44.0965V44.0992V44.102V44.1047V44.1075V44.1102V44.113V44.1157V44.1185V44.1212V44.1239V44.1267V44.1294V44.1321V44.1349V44.1376V44.1403V44.143V44.1457V44.1484V44.1512V44.1539V44.1566V44.1593V44.162V44.1647V44.1674V44.17V44.1727V44.1754V44.1781V44.1808V44.1835V44.1861V44.1888V44.1915V44.1941V44.1968V44.1995V44.2021V44.2048V44.2074V44.2101V44.2127V44.2154V44.218V44.2207V44.2233V44.2259V44.2285V44.2312V44.2338V44.2364V44.239V44.2417V44.2443V44.2469V44.2495V44.2521V44.2547V44.2573V44.2599V44.2625V44.2651V44.2677V44.2702V44.2728V44.2754V44.278V44.2806V44.2831V44.2857V44.2882V44.2908V44.2934V44.2959V44.2985V44.301V44.3036V44.3061V44.3087V44.3112V44.3137V44.3163V44.3188V44.3213V44.3238V44.3264V44.3289V44.3314V44.3339V44.3364V44.3389V44.3414V44.3439V44.3464V44.3489V44.3514V44.3539V44.3564V44.3588V44.3613V44.3638V44.3663V44.3687V44.3712V44.3737V44.3761V44.3786V44.381V44.3835V44.3859V44.3884V44.3908V44.3932V44.3957V44.3981V44.4005V44.403V44.4054V44.4078V44.4102V44.4126V44.415V44.4174V44.4199V44.4223V44.4247V44.427V44.4294V44.4318V44.4342V44.4366V44.439V44.4413V44.4437V44.4461V44.4484V44.4508V44.4532V44.4555V44.4579V44.4602V44.4626V44.4649V44.4672V44.4696V44.4719V44.4742V44.4766V44.4789V44.4812V44.4835V44.4858V44.4882V44.4905V44.4928V44.4951V44.4974V44.4997V44.5019V44.5042V44.5065V44.5088V44.5111V44.5133V44.5156V44.5179V44.5201V44.5224V44.5247V44.5269V44.5292V44.5314V44.5337V44.5359V44.5381V44.5404V44.5426V44.5448V44.547V44.5493V44.5515V44.5537V44.5559V44.5581V44.5603V44.5625V44.5647V44.5669V44.5691V44.5713V44.5734V44.5756V44.5778V44.58V44.5821V44.5843V44.5865V44.5886V44.5908V44.5929V44.5951V44.5972V44.5994V44.6015V44.6036V44.6058V44.6079V44.61V44.6121V44.6142V44.6164V44.6185V44.6206V44.6227V44.6248V44.6269V44.6289V44.631V44.6331V44.6352V44.6373V44.6393V44.6414V44.6435V44.6455V44.6476V44.6497V44.6517V44.6538V44.6558V44.6578V44.6599V44.6619V44.6639V44.666V44.668V44.67V44.672V44.674V44.676V44.678V44.68V44.682V44.684V44.686V44.688V44.69V44.692V44.6939V44.6959V44.6979V44.6998V44.7018V44.7037V44.7057V44.7076V44.7096V44.7115V44.7135V44.7154V44.7173V44.7193V44.7212V44.7231V44.725V44.7269V44.7288V44.7307V44.7326V44.7345V44.7364V44.7383V44.7402V44.7421V44.7439V44.7458V44.7477V44.7495V44.7514V44.7533V44.7551V44.757V44.7588V44.7606V44.7625V44.7643V44.7661V44.768V44.7698V44.7716V44.7734V44.7752V44.777V44.7788V44.7806V44.7824V44.7842V44.786V44.7878V44.7896V44.7914V44.7931V44.7949V44.7967V44.7984V44.8002V44.8019V44.8037V44.8054V44.8071V44.8089V44.8106V44.8123V44.8141V44.8158V44.8175V44.8192V44.8209V44.8226V44.8243V44.826V44.8277V44.8294V44.8311V44.8328V44.8344V44.8361V44.8378V44.8394V44.8411V44.8427V44.8444V44.846V44.8477V44.8493V44.851V44.8526V44.8542V44.8558V44.8575V44.8591V44.8607V44.8623V44.8639V44.8655V44.8671V44.8687V44.8702V44.8718V44.8734V44.875V44.8765V44.8781V44.8797V44.8812V44.8828V44.8843V44.8859V44.8874V44.8889V44.8905V44.892V44.8935V44.895V44.8965V44.898V44.8996V44.9011V44.9025V44.904V44.9055V44.907V44.9085V44.91V44.9114V44.9129V44.9144V44.9158V44.9173V44.9187V44.9202V44.9216V44.923V44.9245V44.9259V44.9273V44.9288V44.9302V44.9316V44.933V44.9344V44.9358V44.9372V44.9386V44.9399V44.9413V44.9427V44.9441V44.9454V44.9468V44.9482V44.9495V44.9509V44.9522V44.9535V44.9549V44.9562V44.9575V44.9589V44.9602V44.9615V44.9628V44.9641V44.9654V44.9667V44.968V44.9693V44.9706V44.9718V44.9731V44.9744V44.9757V44.9769V44.9782V44.9794V44.9807V44.9819V44.9832V44.9844V44.9856V44.9868V44.9881V44.9893V44.9905V44.9917V44.9929V44.9941V44.9953V44.9965V44.9977V44.9988V45V45.1V45.1006V45.1012V45.1017V45.1023V45.1029V45.1035V45.104V45.1046V45.1052V45.1057V45.1063V45.1069V45.1074V45.108V45.1085V45.1091V45.1096V45.1102V45.1107V45.1113V45.1118V45.1123V45.1129V45.1134V45.1139V45.1145V45.115V45.1155V45.1161V45.1166V45.1171V45.1176V45.1181V45.1186V45.1191V45.1196V45.1202V45.1207V45.1212V45.1217V45.1222V45.1226V45.1231V45.1236V45.1241V45.1246V45.1251V45.1256V45.1261V45.1265V45.127V45.1275V45.128V45.1284V45.1289V45.1294V45.1298V45.1303V45.1307V45.1312V45.1317V45.1321V45.1326V45.133V45.1335V45.1339V45.1343V45.1348V45.1352V45.1357V45.1361V45.1365V45.137V45.1374V45.1378V45.1383V45.1387V45.1391V45.1395V45.1399V45.1404V45.1408V45.1412V45.1416V45.142V45.1424V45.1428V45.1432V45.1436V45.144V45.1444V45.1448V45.1452V45.1456V45.146V45.1464V45.1468V45.1471V45.1475V45.1479V45.1483V45.1487V45.149V45.1494V45.1498V45.1501V45.1505V45.1509V45.1512V45.1516V45.152V45.1523V45.1527V45.153V45.1534V45.1537V45.1541V45.1544V45.1548V45.1551V45.1555V45.1558V45.1561V45.1565V45.1568V45.1572V45.1575V45.1578V45.1581V45.1585V45.1588V45.1591V45.1594V45.1598V45.1601V45.1604V45.1607V45.161V45.1613V45.1616V45.162V45.1623V45.1626V45.1629V45.1632V45.1635V45.1638V45.1641V45.1644V45.1647V45.165V45.1652V45.1655V45.1658V45.1661V45.1664V45.1667V45.167V45.1672V45.1675V45.1678V45.1681V45.1683V45.1686V45.1689V45.1691V45.1694V45.1697V45.1699V45.1702V45.1705V45.1707V45.171V45.1712V45.1715V45.1717V45.172V45.1722V45.1725V45.1727V45.173V45.1732V45.1735V45.1737V45.174V45.1742V45.1744V45.1747V45.1749V45.1751V45.1753C45.5039 48.1507 44.6544 50.2924 43.3031 51.6899C41.9582 53.0807 40.0524 53.8 37.5 53.8C35.4235 53.8 33.5685 53.0476 32.2763 51.5708Z"></path><path d="M22.8 23.2538V18.2178L29.3909 23.307L26.1939 25.8645L22.8 23.2538Z"></path><path d="M16.7 20.2V19.7H16.5V18.8V10.858C16.5042 10.8478 16.5096 10.8348 16.5142 10.8232C16.5488 10.7368 16.5963 10.6012 16.5998 10.4209C16.8474 7.03069 17.6799 4.61275 19.0737 3.04468C20.4543 1.49155 22.4511 0.699997 25.2 0.699997C27.2568 0.699997 29.1263 1.53906 30.5352 3.04197L30.5407 3.04785L30.5464 3.05355C30.7614 3.26854 31.0508 3.35 31.3 3.35C31.5492 3.35 31.8386 3.26854 32.0536 3.05355L32.0646 3.04251L32.0749 3.03081C33.4779 1.4408 35.1402 0.699997 37.3 0.699997C40.0769 0.699997 42.1441 1.62655 43.5571 3.42174C44.934 5.17104 45.7393 7.80743 45.886 11.3874C44.0184 11.8028 42.6345 12.9721 42.1 13.4936V13.2C42.1 10.0544 41.7835 8.06299 40.9925 6.86242C40.1497 5.58316 38.8495 5.3 37.3 5.3C35.4114 5.3 34.3769 6.59229 33.8399 7.85422C33.3055 9.11015 33.2 10.457 33.2 10.9C33.2 12.2634 32.2859 13.1 31.3 13.1H31.2204C30.2388 13.0141 29.4 12.0845 29.4 10.8C29.4 9.19015 29.0639 7.84653 28.3661 6.89234C27.6525 5.91665 26.5974 5.4 25.3 5.4C23.6267 5.4 22.3017 5.64608 21.4896 6.93319C21.1052 7.5425 20.863 8.34586 20.7131 9.3714C20.5626 10.4004 20.5 11.6909 20.5 13.3V30.4541L16.7 33.3833V20.2Z"></path><path d="M40.1 31.5462V36.5799L33.4225 31.4049L36.6974 28.9288L40.1 31.5462Z"></path><mask id="path-9-inside-1" fill="white"><path d="M58.7 30.1C58.9 30 59.5 30 59.8 29.9C60.9 29.8 61.8 28.7 61.8 27.4C61.8 26.1 60.9 25 59.8 24.9C59.7 24.9 59.5 24.9 59.4 24.8C59.3 24.8 59.2 24.8 59.1 24.7C59.1 24.7 59.1 24.7 59 24.7C58.6 24.6 58.1 24.4 57.7 24.1C57.7 24.1 57.7 24.1 57.6 24C56.1 23.1 55 21.2 53.6 18.7C53.1 17.8 52.6 16.9 52 16C50.5 13.7 48.9 13.1 47.8 13C47.7 13 47.6 13 47.5 13H47.3C47.1 13 46.9 13 46.9 13C45.2 13.2 44 14.3 43.6 14.8L25.2 29.1C25.2 29.1 25.2 29.1 25.1 29.2L23 30.8L16.8 35.5L16.4 35.9C16.4 35.9 16.4 35.9 16.3 35.9C16 36.1 15.7 36.3 15.4 36.3C15.1 36.3 14.9 36.2 14.7 36.1C14.5 35.9 14.4 35.8 14.3 35.5C13.9 34.8 13.4 34.1 13 33.3V33.1C12.2 31.7 11.3 30 10.1 28.6C10.1 28.6 10.1 28.6 10.1 28.5L10 28.4C9.9 28.3 9.9 28.3 9.8 28.2C9.8 28.2 9.8 28.2 9.7 28.1L9.2 27.5C9.2 27.5 9.2 27.5 9.1 27.5C9 27.3 9 27.1 9.1 27L9.6 26.5C10.9 25 11.9 23.2 12.8 21.6V21.5C13.2 20.7 13.7 19.9 14.2 19.1C14.4 18.8 14.6 18.6 14.7 18.5V13.1C13.6 13.2 12 13.9 10.6 16C10 16.9 9.5 17.8 9 18.7C7.8 20.9 6.8 22.5 5.6 23.5C4.8 24.1 4 24.4 3.5 24.6C3.5 24.6 3.5 24.6 3.4 24.6C3.3 24.6 3.1 24.7 3 24.7C2.9 24.7 2.9 24.7 2.8 24.7C2.7 24.7 2.7 24.7 2.7 24.7H2.6H2.5C2.3 24.7 2.2 24.8 2.1 24.8C2 24.8 2 24.8 2 24.9C1.7 25.1 1.4 25.3 1.2 25.6C1.2 25.7 1.1 25.7 1.1 25.8V25.9L0.999997 26.1C0.999997 26.2 0.999997 26.2 0.899997 26.3C0.899997 26.4 0.899997 26.4 0.799997 26.5C0.799997 26.6 0.799997 26.7 0.699997 26.7C0.699997 26.8 0.699997 26.9 0.699997 26.9C0.699997 27 0.699997 27.1 0.699997 27.1C0.699997 27.2 0.699997 27.2 0.699997 27.3C0.699997 27.4 0.699997 27.5 0.699997 27.5C0.699997 27.6 0.699997 27.7 0.699997 27.7C0.699997 27.8 0.699997 27.9 0.799997 27.9V28V28.1C0.799997 28.2 0.799997 28.2 0.899997 28.2L0.999997 28.4C0.999997 28.5 1.1 28.5 1.1 28.5C1.1 28.5 1.1 28.5 1.1 28.6C1.2 28.7 1.3 28.9 1.5 29C1.6 29 1.6 29.1 1.7 29.1C1.7 29.1 1.8 29.1 1.8 29.2C1.8 29.2 1.8 29.2 1.9 29.2C2 29.3 2.2 29.3 2.3 29.4C2.4 29.4 2.4 29.4 2.4 29.4L2.9 29.5C3.1 29.5 3.2 29.6 3.4 29.6C4.2 29.8 4.7 30.2 4.8 30.2C6.4 31.2 7.5 33 8.9 35.5C9.5 36.6 10 37.4 10.5 38.2C11.9 40.3 13.4 41 14.4 41.1C14.5 41.1 14.5 41.1 14.6 41.1C14.7 41.1 14.8 41.1 14.8 41.1C15 41.1 15.2 41.1 15.5 41.1H15.6C17.2 40.8 18.5 39.8 18.9 39.3L19 39.2L19.8 38.6C19.8 38.6 19.9 38.5 20 38.5L30.2 30.6L41.3 22L46.5 18H46.6C46.7 18 46.9 17.9 47 17.9C47.4 17.9 47.8 18.1 48.1 18.6L48.5 19.2C48.8 19.7 49.2 20.3 49.5 20.9V21C50.1 22.1 50.8 23.4 51.7 24.6C51.7 24.6 51.7 24.7 51.8 24.7C52.1 25.1 52.4 25.5 52.7 25.8C52.7 25.8 52.8 25.8 52.8 25.9C53 26.1 53.1 26.3 53.3 26.4C53.4 26.5 53.4 26.7 53.3 26.9C52 28.5 50.4 31.1 49.6 32.4V32.5C49.2 33.2 48.7 34.1 48.2 34.9C48 35.2 47.8 35.4 47.7 35.5V40.9C48.8 40.8 50.4 40.1 51.8 37.9C52.4 37 52.9 36 53.4 35.2C53.5 35 53.7 34.7 53.8 34.5C55.2 33 56.4 30.9 58.7 30.1Z"></path></mask><path d="M58.7 30.1C58.9 30 59.5 30 59.8 29.9C60.9 29.8 61.8 28.7 61.8 27.4C61.8 26.1 60.9 25 59.8 24.9C59.7 24.9 59.5 24.9 59.4 24.8C59.3 24.8 59.2 24.8 59.1 24.7C59.1 24.7 59.1 24.7 59 24.7C58.6 24.6 58.1 24.4 57.7 24.1C57.7 24.1 57.7 24.1 57.6 24C56.1 23.1 55 21.2 53.6 18.7C53.1 17.8 52.6 16.9 52 16C50.5 13.7 48.9 13.1 47.8 13C47.7 13 47.6 13 47.5 13H47.3C47.1 13 46.9 13 46.9 13C45.2 13.2 44 14.3 43.6 14.8L25.2 29.1C25.2 29.1 25.2 29.1 25.1 29.2L23 30.8L16.8 35.5L16.4 35.9C16.4 35.9 16.4 35.9 16.3 35.9C16 36.1 15.7 36.3 15.4 36.3C15.1 36.3 14.9 36.2 14.7 36.1C14.5 35.9 14.4 35.8 14.3 35.5C13.9 34.8 13.4 34.1 13 33.3V33.1C12.2 31.7 11.3 30 10.1 28.6C10.1 28.6 10.1 28.6 10.1 28.5L10 28.4C9.9 28.3 9.9 28.3 9.8 28.2C9.8 28.2 9.8 28.2 9.7 28.1L9.2 27.5C9.2 27.5 9.2 27.5 9.1 27.5C9 27.3 9 27.1 9.1 27L9.6 26.5C10.9 25 11.9 23.2 12.8 21.6V21.5C13.2 20.7 13.7 19.9 14.2 19.1C14.4 18.8 14.6 18.6 14.7 18.5V13.1C13.6 13.2 12 13.9 10.6 16C10 16.9 9.5 17.8 9 18.7C7.8 20.9 6.8 22.5 5.6 23.5C4.8 24.1 4 24.4 3.5 24.6C3.5 24.6 3.5 24.6 3.4 24.6C3.3 24.6 3.1 24.7 3 24.7C2.9 24.7 2.9 24.7 2.8 24.7C2.7 24.7 2.7 24.7 2.7 24.7H2.6H2.5C2.3 24.7 2.2 24.8 2.1 24.8C2 24.8 2 24.8 2 24.9C1.7 25.1 1.4 25.3 1.2 25.6C1.2 25.7 1.1 25.7 1.1 25.8V25.9L0.999997 26.1C0.999997 26.2 0.999997 26.2 0.899997 26.3C0.899997 26.4 0.899997 26.4 0.799997 26.5C0.799997 26.6 0.799997 26.7 0.699997 26.7C0.699997 26.8 0.699997 26.9 0.699997 26.9C0.699997 27 0.699997 27.1 0.699997 27.1C0.699997 27.2 0.699997 27.2 0.699997 27.3C0.699997 27.4 0.699997 27.5 0.699997 27.5C0.699997 27.6 0.699997 27.7 0.699997 27.7C0.699997 27.8 0.699997 27.9 0.799997 27.9V28V28.1C0.799997 28.2 0.799997 28.2 0.899997 28.2L0.999997 28.4C0.999997 28.5 1.1 28.5 1.1 28.5C1.1 28.5 1.1 28.5 1.1 28.6C1.2 28.7 1.3 28.9 1.5 29C1.6 29 1.6 29.1 1.7 29.1C1.7 29.1 1.8 29.1 1.8 29.2C1.8 29.2 1.8 29.2 1.9 29.2C2 29.3 2.2 29.3 2.3 29.4C2.4 29.4 2.4 29.4 2.4 29.4L2.9 29.5C3.1 29.5 3.2 29.6 3.4 29.6C4.2 29.8 4.7 30.2 4.8 30.2C6.4 31.2 7.5 33 8.9 35.5C9.5 36.6 10 37.4 10.5 38.2C11.9 40.3 13.4 41 14.4 41.1C14.5 41.1 14.5 41.1 14.6 41.1C14.7 41.1 14.8 41.1 14.8 41.1C15 41.1 15.2 41.1 15.5 41.1H15.6C17.2 40.8 18.5 39.8 18.9 39.3L19 39.2L19.8 38.6C19.8 38.6 19.9 38.5 20 38.5L30.2 30.6L41.3 22L46.5 18H46.6C46.7 18 46.9 17.9 47 17.9C47.4 17.9 47.8 18.1 48.1 18.6L48.5 19.2C48.8 19.7 49.2 20.3 49.5 20.9V21C50.1 22.1 50.8 23.4 51.7 24.6C51.7 24.6 51.7 24.7 51.8 24.7C52.1 25.1 52.4 25.5 52.7 25.8C52.7 25.8 52.8 25.8 52.8 25.9C53 26.1 53.1 26.3 53.3 26.4C53.4 26.5 53.4 26.7 53.3 26.9C52 28.5 50.4 31.1 49.6 32.4V32.5C49.2 33.2 48.7 34.1 48.2 34.9C48 35.2 47.8 35.4 47.7 35.5V40.9C48.8 40.8 50.4 40.1 51.8 37.9C52.4 37 52.9 36 53.4 35.2C53.5 35 53.7 34.7 53.8 34.5C55.2 33 56.4 30.9 58.7 30.1Z"></path></svg></div>', 1), tc = [
  ec
];
function oc(e, t, l, o, n, a) {
  return i(), u("div", null, tc);
}
const lc = /* @__PURE__ */ al(Xu, [["render", oc]]), nc = {
  key: 0,
  class: "po-fixed po-z-[999] po-top-0 po-bottom-0 po-left-0 po-right-0 po-flex po-items-center po-justify-center"
}, ac = /* @__PURE__ */ s("div", { class: "po-absolute po-w-[6.2rem] po-h-[6.2rem] po-bg-transparent po-overflow-hidden po-rounded-xl" }, [
  /* @__PURE__ */ s("div", { class: "po-loading-rotate po-absolute -po-top-8 -po-left-8 po-w-[10rem] po-h-[10rem]" })
], -1), sc = { class: "relative po-bg-white po-w-24 po-h-24 po-flex po-items-center po-justify-center po-rounded-xl po-bg-opacity-50 po-backdrop-blur po-backdrop-filter po-z-10 po-shadow-xl" }, rc = {
  key: 0,
  class: "po-absolute po-left-1 po-right-1 po-text-center po-py-1 po-text-xs po-text-mpao-blue po-bg-white po-bg-opacity-50 po-backdrop-blur po-backdrop-filter"
}, ic = {
  name: "PoLoading"
}, i0 = /* @__PURE__ */ Object.assign(ic, {
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
    return (t, l) => e.show ? (i(), u("div", nc, [
      ac,
      s("div", sc, [
        e.label !== "" ? (i(), u("span", rc, y(e.label), 1)) : x("", !0),
        _(lc)
      ])
    ])) : x("", !0);
  }
}), pc = { class: "po-py-5 po-flex po-items-start po-space-x-5" }, uc = ["name", "id", "checked", "aria-describedby"], cc = { class: "po-grow -po-mt-[0.26rem]" }, dc = ["for"], fc = { class: "po-mt-2 po-flex po-space-x-3" }, vc = ["href", "onClick"], mc = {
  name: "PoConsent"
}, p0 = /* @__PURE__ */ Object.assign(mc, {
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
    return (t, l) => (i(), u("div", pc, [
      s("input", Pe({
        type: "checkbox",
        name: `${e.id}-field`,
        id: e.id,
        checked: e.modelValue,
        "aria-describedby": `${e.id}-description`
      }, t.$attrs, {
        onInput: l[0] || (l[0] = (o) => t.$emit("update:modelValue", o.target.checked)),
        class: "po-shrink-0 po-h-4 po-w-4 po-rounded border-slate-300 po-text-mpao-lightblue focus:po-ring-mpao-lightblue"
      }), null, 16, uc),
      s("div", cc, [
        s("label", {
          class: "po-block po-select-none po-text-sm po-text-slate-600 po-cursor-pointer",
          for: e.id
        }, y(e.label), 9, dc),
        s("div", fc, [
          (i(!0), u(R, null, H(e.links, (o) => (i(), u("a", {
            href: o.url,
            onClick: re((n) => t.$emit("button-click", o.url), ["prevent"]),
            class: "po-text-sm po-text-mpao-lightblue hover:po-text-mpao-blue"
          }, y(o.label), 9, vc))), 256))
        ])
      ])
    ]));
  }
}), hc = { class: "po-mt-5 po-bg-slate-50 -po-mx-5 po-px-4 po-py-3 po-space-y-3" }, bc = ["onClick"], gc = { class: "po-absolute po-bg-white po-top-4 po-right-4 po-z-10 po-text-xs po-text-slate-600" }, yc = { class: "po-shrink-0 po-pr-3 po-flex po-items-center po-border-r po-border-dashed po-border-slate-300" }, xc = {
  key: 4,
  class: "po-w-5 po-h-5 po-fill-slate-400 po-shrink-0",
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  viewBox: "0 0 226.978 226.978"
}, Vc = /* @__PURE__ */ s("path", { d: "M199.569 25.393C181.627 7.803 152.62-.72 113.339.048 73.731.827 47.255 7.779 30.018 21.927 13.352 35.605 5.59 55.62 5.59 84.915v29.898c0 34.584 18.532 72.605 53.951 78.358 4.089.669 7.941-2.111 8.605-6.201a7.5 7.5 0 0 0-6.201-8.605c-26.861-4.363-41.355-36-41.355-63.552V84.915c0-42.006 15.565-68.347 93.043-69.871 35.125-.696 60.477 6.395 75.433 21.059 11.655 11.429 17.321 27.395 17.321 48.812v29.898c0 45.274-20.321 65.243-72.441 71.123H96.988c-1.989 0-3.897.79-5.303 2.197l-26.041 26.041a7.5 7.5 0 0 0 10.606 10.607l23.845-23.845h34.27c.276 0 .553-.015.828-.046 29.828-3.313 50.254-11.076 64.279-24.432 14.747-14.044 21.916-34.208 21.916-61.646V84.915c0-25.299-7.341-45.325-21.819-59.522z" }, null, -1), wc = /* @__PURE__ */ s("path", { d: "M118.17 48.988h.003c12.085 0 23.447 4.707 31.993 13.253 8.547 8.547 13.254 19.911 13.253 31.998a7.5 7.5 0 0 0 7.499 7.5h.001a7.5 7.5 0 0 0 7.5-7.499c.001-16.094-6.266-31.225-17.646-42.605-11.379-11.38-26.507-17.646-42.6-17.646h-.005a7.5 7.5 0 1 0 .002 14.999z" }, null, -1), kc = /* @__PURE__ */ s("path", { d: "M118.168 75.362c10.408.002 18.877 8.47 18.878 18.877a7.5 7.5 0 0 0 7.501 7.499c4.143 0 7.5-3.359 7.499-7.501-.003-18.676-15.199-33.872-33.876-33.875h-.001a7.5 7.5 0 0 0-.001 15zM84.538 88.213a7.5 7.5 0 0 0 8.465 12.382c2.689-1.838 8.987-6.144 8.545-14.752-.28-5.152-4.927-12.508-8.776-17.772-5.63-7.702-10.482-12.341-14.391-13.779-3.65-1.359-7.467-1.388-11.353-.084-8.049 2.712-13.893 7.613-16.899 14.173-2.927 6.386-2.862 13.725.189 21.228 7.206 17.678 17.294 33.155 30.051 46.067 12.845 12.689 28.321 22.777 46.006 29.987 3.827 1.557 7.613 2.336 11.252 2.336 3.49 0 6.845-.716 9.971-2.149 6.56-3.007 11.46-8.85 14.175-16.909 1.3-3.877 1.271-7.692-.077-11.317-1.448-3.937-6.088-8.788-13.789-14.418-5.265-3.849-12.621-8.496-17.793-8.777-8.59-.432-12.892 5.855-14.73 8.544a7.5 7.5 0 0 0 12.381 8.469c.816-1.193 1.282-1.735 1.549-1.972 4.21 1.349 16.215 10.169 18.376 13.549.053.216.065.545-.135 1.144-.946 2.809-2.791 6.486-6.206 8.052-3.199 1.464-6.834.566-9.316-.443-15.847-6.461-29.682-15.466-41.058-26.703-11.301-11.439-20.306-25.274-26.763-41.115-1.012-2.488-1.911-6.125-.446-9.321 1.565-3.415 5.243-5.261 8.043-6.205.598-.2.927-.189 1.155-.134 3.381 2.165 12.196 14.163 13.546 18.374-.238.263-.779.73-1.972 1.545z" }, null, -1), $c = [
  Vc,
  wc,
  kc
], _c = { class: "po-grow po-space-y-2 po-pl-3 -po-mb-2" }, Cc = { class: "po-text-base po-text-slate-600 po-font-medium" }, Sc = {
  key: 0,
  class: ""
}, Ec = {
  key: 0,
  class: "po-flex po-flex-wrap"
}, Oc = { class: "po-font-medium po-text-slate-500 po-capitalize" }, Pc = {
  name: "PoCallLog"
}, u0 = /* @__PURE__ */ Object.assign(Pc, {
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
    const t = k(null);
    function l(o, n) {
      n.details && (t.value = t.value === o ? null : o);
    }
    return (o, n) => (i(), u("ul", hc, [
      (i(!0), u(R, null, H(e.list, (a, r) => (i(), u("li", {
        onClick: (p) => {
          o.$emit("button-click", a), l(r, a);
        },
        class: N(["po-bg-white po-rounded-lg po-p-3 po-transition-shadow po-duration-100 po-ease-out po-shadow hover:po-shadow-lg po-cursor-pointer po-flex po-item-center po-border-l-4 po-relative", a.highlightColor])
      }, [
        s("span", gc, y(a.topRightLabel), 1),
        s("div", yc, [
          a.type === "chat" ? (i(), M(h(Pl), {
            key: 0,
            class: "po-w-5 po-h-5 po-stroke-slate-400 po-shrink-0"
          })) : x("", !0),
          a.type === "email" ? (i(), M(h(jl), {
            key: 1,
            class: "po-w-5 po-h-5 po-stroke-slate-400 po-shrink-0"
          })) : x("", !0),
          a.type === "in" ? (i(), M(h(Rl), {
            key: 2,
            class: "po-w-5 po-h-5 po-stroke-slate-400 po-shrink-0"
          })) : x("", !0),
          a.type === "out" ? (i(), M(h(Ml), {
            key: 3,
            class: "po-w-5 po-h-5 po-stroke-slate-400 po-shrink-0"
          })) : x("", !0),
          a.type === "viber" ? (i(), u("svg", xc, $c)) : x("", !0)
        ]),
        s("div", _c, [
          s("h3", Cc, y(a.subject), 1),
          _(Se, {
            "enter-active-class": "po-transition po-duration-100 po-ease-out",
            "enter-from-class": "po-transform po-scale-95 po-opacity-0",
            "enter-to-class": "po-transform po-scale-100 po-opacity-100",
            "leave-active-class": "po-transition po-duration-75 po-ease-out",
            "leave-from-class": "po-transform po-scale-100 po-opacity-100",
            "leave-to-class": "po-transform po-scale-95 po-opacity-0"
          }, {
            default: j(() => [
              t.value === r ? (i(), u("div", Sc, [
                _(nl, {
                  items: a.details
                }, null, 8, ["items"])
              ])) : x("", !0)
            ]),
            _: 2
          }, 1024),
          t.value !== r ? (i(), u("div", Ec, [
            (i(!0), u(R, null, H(a.meta, (p, c) => (i(), u("p", {
              class: "po-text-xs po-space-x-2 po-mr-5 po-mb-2",
              key: c
            }, [
              s("span", Oc, y(p.label), 1),
              s("span", {
                class: N(["po-text-slate-500 po-px-[0.2em] po-rounded-md", p.color])
              }, y(p.description), 3)
            ]))), 128))
          ])) : x("", !0)
        ])
      ], 10, bc))), 256))
    ]));
  }
}), Lc = {
  class: "po-flex po-bg-slate-50 po-rounded-t-xl po-justify-center lg:po-justify-start po-px-4 po-pt-4 xl:po-pt-2 po-flex-wrap po-overflow-hidden",
  "aria-label": "Tabs"
}, Nc = ["onClick", "aria-current"], Dc = { key: 0 }, Tc = {
  name: "PoCardTabs"
}, c0 = /* @__PURE__ */ Object.assign(Tc, {
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
    return (o, n) => (i(), u("nav", Lc, [
      (i(!0), u(R, null, H(e.tabs, (a) => (i(), u("span", {
        role: "button",
        onClick: (r) => o.$emit("button-click", a),
        key: a.name,
        class: N([
          a.current ? "po-bg-white po-text-slate-600 po-shadow-lg" : "po-text-slate-600 hover:po-text-mpao-blue",
          "po-px-4 po-py-3 po-font-medium po-mr-4 po-mb-4 xl:po-mb-0 po-text-sm po-cursor-pointer po-rounded-xl xl:po-rounded-b-none genie-effect hover:po-text-slate-600 hover:po-bg-white hover:po-shadow-md po-flex po-items-center po-flex-shrink-0 po-space-x-2"
        ]),
        "aria-current": a.current ? "page" : void 0
      }, [
        a.icon ? (i(), M(fe(a.icon), {
          key: 0,
          class: N(["po-w-5 po-h-5", [l(a)]])
        }, null, 8, ["class"])) : x("", !0),
        s("span", null, [
          ne(y(a.name), 1),
          a.count ? (i(), u("span", Dc, " (" + y(a.count) + ")", 1)) : x("", !0)
        ])
      ], 10, Nc))), 128))
    ]));
  }
}), jc = { class: "sm:po-hidden" }, Bc = /* @__PURE__ */ s("label", {
  for: "tabs",
  class: "po-sr-only"
}, "Select a tab", -1), Ac = {
  id: "tabs",
  name: "tabs",
  class: "po-block po-w-full po-rounded-md po-border-gray-300 focus:po-border-indigo-500 focus:po-ring-indigo-500"
}, Ic = ["selected"], Rc = { class: "po-hidden sm:po-block" }, Mc = {
  class: "po-flex po-space-x-4 po-pt-2",
  "aria-label": "Tabs"
}, Fc = ["onClick", "aria-current"], zc = {
  name: "PoTabs"
}, d0 = /* @__PURE__ */ Object.assign(zc, {
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
    const n = S(() => l.tabs.forEach((a) => {
      a.name === l.currentTab && (a.current = !0);
    }));
    return (a, r) => (i(), u(R, null, [
      s("div", jc, [
        Bc,
        s("select", Ac, [
          (i(!0), u(R, null, H(h(n), (p) => (i(), u("option", {
            key: p.name,
            selected: p.current
          }, y(p.name), 9, Ic))), 128))
        ])
      ]),
      s("div", Rc, [
        s("nav", Mc, [
          (i(!0), u(R, null, H(e.tabs, (p) => (i(), u("span", {
            onClick: (c) => a.$emit("button-click", p),
            role: "button",
            key: p.name,
            class: N([
              p.current ? "po-bg-white po-text-slate-600 po-shadow-md" : "po-bg-slate-50 po-text-slate-600 hover:po-text-mpao-blue",
              "po-px-4 po-relative po-group po-py-3 po-font-medium po-text-sm po-cursor-pointer po-rounded-xl genie-effect hover:po-text-slate-600 hover:po-bg-white hover:po-shadow-md po-flex po-items-center po-space-x-2"
            ]),
            "aria-current": p.current ? "page" : void 0
          }, [
            p.icon ? (i(), M(fe(p.icon), {
              key: 0,
              class: N(["po-w-5 po-h-5", [o(p)]])
            }, null, 8, ["class"])) : x("", !0),
            s("span", null, [
              s("span", null, y(p.name), 1),
              p.count && p.count > 0 ? (i(), u("span", {
                key: 0,
                class: N(["po-absolute po-py-1 po-px-2 po-rounded-full po-text-xs -po-top-3 -po-right-2 po-shadow-md po-flex po-items-center po-justify-center", [
                  p.current ? "po-bg-mpao-orange po-text-white" : "po-bg-slate-400 po-text-white group-hover:po-bg-mpao-orange group-hover:po-text-white"
                ]])
              }, [
                s("span", null, y(p.count), 1)
              ], 2)) : x("", !0)
            ])
          ], 10, Fc))), 128))
        ])
      ])
    ], 64));
  }
}), Hc = { class: "po-mt-5 po-flex po-flex-col po-items-center po-justify-center po-px-5 po-py-8 po-space-y-3" }, qc = {
  key: 1,
  class: "po-text-base po-font-medium po-text-slate-600 po-text-center"
}, Uc = {
  key: 2,
  class: "po-text-sm po-text-slate-500 po-text-center"
}, Gc = {
  name: "PoEmpty"
}, f0 = /* @__PURE__ */ Object.assign(Gc, {
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
    return (t, l) => (i(), u("div", Hc, [
      e.icon ? (i(), M(fe(e.icon), {
        key: 0,
        class: "po-w-10 po-h-10 po-stroke-slate-300"
      })) : x("", !0),
      e.label !== "" ? (i(), u("span", qc, y(e.label), 1)) : x("", !0),
      e.description !== "" ? (i(), u("span", Uc, y(e.description), 1)) : x("", !0),
      Q(t.$slots, "action")
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
const ft = () => !1, Kc = Object.assign, Wc = Array.isArray, ye = (e) => typeof e == "string", Yc = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (l) => t[l] || (t[l] = e(l));
}, Zc = /\B([A-Z])/g, Jc = Yc((e) => e.replace(Zc, "-$1").toLowerCase());
function Qc(e) {
  throw e;
}
function Xc(e) {
  process.env.NODE_ENV !== "production" && console.warn(`[Vue warn] ${e.message}`);
}
function Ce(e, t, l, o) {
  const n = process.env.NODE_ENV !== "production" ? (l || ed)[e] + (o || "") : e, a = new SyntaxError(String(n));
  return a.code = e, a.loc = t, a;
}
const ed = {
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
const Ke = Symbol(process.env.NODE_ENV !== "production" ? "openBlock" : ""), td = Symbol(process.env.NODE_ENV !== "production" ? "createBlock" : ""), od = Symbol(process.env.NODE_ENV !== "production" ? "createElementBlock" : ""), ld = Symbol(process.env.NODE_ENV !== "production" ? "createVNode" : ""), nd = Symbol(process.env.NODE_ENV !== "production" ? "createElementVNode" : ""), sl = Symbol(process.env.NODE_ENV !== "production" ? "createCommentVNode" : "");
Symbol(process.env.NODE_ENV !== "production" ? "createTextVNode" : "");
Symbol(process.env.NODE_ENV !== "production" ? "createStaticVNode" : "");
Symbol(process.env.NODE_ENV !== "production" ? "resolveComponent" : "");
Symbol(process.env.NODE_ENV !== "production" ? "resolveDynamicComponent" : "");
Symbol(process.env.NODE_ENV !== "production" ? "resolveDirective" : "");
Symbol(process.env.NODE_ENV !== "production" ? "resolveFilter" : "");
const ad = Symbol(process.env.NODE_ENV !== "production" ? "withDirectives" : ""), sd = Symbol(process.env.NODE_ENV !== "production" ? "renderList" : "");
Symbol(process.env.NODE_ENV !== "production" ? "renderSlot" : "");
Symbol(process.env.NODE_ENV !== "production" ? "createSlots" : "");
const rd = Symbol(process.env.NODE_ENV !== "production" ? "toDisplayString" : ""), ao = Symbol(process.env.NODE_ENV !== "production" ? "mergeProps" : "");
Symbol(process.env.NODE_ENV !== "production" ? "normalizeClass" : "");
Symbol(process.env.NODE_ENV !== "production" ? "normalizeStyle" : "");
const id = Symbol(process.env.NODE_ENV !== "production" ? "normalizeProps" : ""), rl = Symbol(process.env.NODE_ENV !== "production" ? "guardReactiveProps" : ""), pd = Symbol(process.env.NODE_ENV !== "production" ? "toHandlers" : "");
Symbol(process.env.NODE_ENV !== "production" ? "camelize" : "");
Symbol(process.env.NODE_ENV !== "production" ? "capitalize" : "");
Symbol(process.env.NODE_ENV !== "production" ? "toHandlerKey" : "");
Symbol(process.env.NODE_ENV !== "production" ? "setBlockTracking" : "");
Symbol(process.env.NODE_ENV !== "production" ? "pushScopeId" : "");
Symbol(process.env.NODE_ENV !== "production" ? "popScopeId" : "");
Symbol(process.env.NODE_ENV !== "production" ? "withCtx" : "");
Symbol(process.env.NODE_ENV !== "production" ? "unref" : "");
Symbol(process.env.NODE_ENV !== "production" ? "isRef" : "");
const ud = Symbol(process.env.NODE_ENV !== "production" ? "withMemo" : ""), cd = Symbol(process.env.NODE_ENV !== "production" ? "isMemoSame" : ""), ge = {
  source: "",
  start: { line: 1, column: 1, offset: 0 },
  end: { line: 1, column: 1, offset: 0 }
};
function wt(e, t, l, o, n, a, r, p = !1, c = !1, d = !1, f = ge) {
  return e && (p ? (e.helper(Ke), e.helper(Ze(e.inSSR, d))) : e.helper(Ye(e.inSSR, d)), r && e.helper(ad)), {
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
function il(e, t) {
  return {
    type: 16,
    loc: ge,
    key: ye(e) ? ve(e, !0) : e,
    value: t
  };
}
function ve(e, t = !1, l = ge, o = 0) {
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
function so(e, t = void 0, l = !1, o = !1, n = ge) {
  return {
    type: 18,
    params: e,
    returns: t,
    newline: l,
    isSlot: o,
    loc: n
  };
}
function dd(e, t, l, o = !0) {
  return {
    type: 19,
    test: e,
    consequent: t,
    alternate: l,
    newline: o,
    loc: ge
  };
}
function fd(e) {
  return {
    type: 21,
    body: e,
    loc: ge
  };
}
const vd = (e) => e.type === 4 && e.isStatic, md = (e, t) => e === t || e === Jc(t);
function hd(e, t, l) {
  const n = {
    source: e.source.slice(t, t + l),
    start: ro(e.start, e.source, t),
    end: e.end
  };
  return l != null && (n.end = ro(e.start, e.source, t + l)), n;
}
function ro(e, t, l = t.length) {
  return bd(Kc({}, e), t, l);
}
function bd(e, t, l = t.length) {
  let o = 0, n = -1;
  for (let a = 0; a < l; a++)
    t.charCodeAt(a) === 10 && (o++, n = a);
  return e.offset += l, e.line += o, e.column = n === -1 ? e.column + l : l - n, e;
}
function pl(e, t, l = !1) {
  for (let o = 0; o < e.props.length; o++) {
    const n = e.props[o];
    if (n.type === 7 && (l || n.exp) && (ye(t) ? n.name === t : t.test(n.name)))
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
    } else if (a.name === "bind" && (a.exp || o) && gd(a.arg, t))
      return a;
  }
}
function gd(e, t) {
  return !!(e && vd(e) && e.content === t);
}
function yd(e) {
  return e.type === 7 && e.name === "slot";
}
function ul(e) {
  return e.type === 1 && e.tagType === 3;
}
function io(e) {
  return e.type === 1 && e.tagType === 2;
}
function Ye(e, t) {
  return e || t ? ld : nd;
}
function Ze(e, t) {
  return e || t ? td : od;
}
const xd = /* @__PURE__ */ new Set([id, rl]);
function cl(e, t = []) {
  if (e && !ye(e) && e.type === 14) {
    const l = e.callee;
    if (!ye(l) && xd.has(l))
      return cl(e.arguments[0], t.concat(e));
  }
  return [e, t];
}
function Je(e, t, l) {
  let o, n = e.type === 13 ? e.props : e.arguments[2], a = [], r;
  if (n && !ye(n) && n.type === 14) {
    const p = cl(n);
    n = p[0], a = p[1], r = a[a.length - 1];
  }
  if (n == null || ye(n))
    o = Te([t]);
  else if (n.type === 14) {
    const p = n.arguments[0];
    !ye(p) && p.type === 15 ? po(t, p) || p.properties.unshift(t) : n.callee === pd ? o = We(l.helper(ao), [
      Te([t]),
      n
    ]) : n.arguments.unshift(Te([t])), !o && (o = n);
  } else
    n.type === 15 ? (po(t, n) || n.properties.unshift(t), o = n) : (o = We(l.helper(ao), [
      Te([t]),
      n
    ]), r && r.callee === rl && (r = a[a.length - 2]));
  e.type === 13 ? r ? r.arguments[0] = o : e.props = o : r ? r.arguments[0] = o : e.arguments[2] = o;
}
function po(e, t) {
  let l = !1;
  if (e.key.type === 4) {
    const o = e.key.content;
    l = t.properties.some((n) => n.key.type === 4 && n.key.content === o);
  }
  return l;
}
function Vd(e) {
  return e.type === 14 && e.callee === ud ? e.arguments[1].returns : e;
}
function wd(e, { helper: t, removeHelper: l, inSSR: o }) {
  e.isBlock || (e.isBlock = !0, l(Ye(o, e.isComponent)), t(Ke), t(Ze(o, e.isComponent)));
}
const kd = /&(gt|lt|amp|apos|quot);/g, $d = {
  gt: ">",
  lt: "<",
  amp: "&",
  apos: "'",
  quot: '"'
};
process.env.NODE_ENV;
function _d(e, t) {
  let l = 0;
  const o = () => {
    l--;
  };
  for (; l < e.children.length; l++) {
    const n = e.children[l];
    ye(n) || (t.parent = e, t.childIndex = l, t.onNodeRemoved = o, Ut(n, t));
  }
}
function Ut(e, t) {
  t.currentNode = e;
  const { nodeTransforms: l } = t, o = [];
  for (let a = 0; a < l.length; a++) {
    const r = l[a](e, t);
    if (r && (Wc(r) ? o.push(...r) : o.push(r)), t.currentNode)
      e = t.currentNode;
    else
      return;
  }
  switch (e.type) {
    case 3:
      t.ssr || t.helper(sl);
      break;
    case 5:
      t.ssr || t.helper(rd);
      break;
    case 9:
      for (let a = 0; a < e.branches.length; a++)
        Ut(e.branches[a], t);
      break;
    case 10:
    case 11:
    case 1:
    case 0:
      _d(e, t);
      break;
  }
  t.currentNode = e;
  let n = o.length;
  for (; n--; )
    o[n]();
}
function dl(e, t) {
  const l = ye(e) ? (o) => o === e : (o) => e.test(o);
  return (o, n) => {
    if (o.type === 1) {
      const { props: a } = o;
      if (o.tagType === 3 && a.some(yd))
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
const Cd = new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments,typeof,void".split(",").join("\\b|\\b") + "\\b"), Sd = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
function Re(e, t, l = !1, o = !1) {
  const n = e.content;
  if (n.trim())
    try {
      new Function(o ? ` ${n} ` : `return ${l ? `(${n}) => {}` : `(${n})`}`);
    } catch (a) {
      let r = a.message;
      const p = n.replace(Sd, "").match(Cd);
      p && (r = `avoid using JavaScript keyword as property name: "${p[0]}"`), t.onError(Ce(45, e.loc, void 0, r));
    }
}
dl(/^(if|else|else-if)$/, (e, t, l) => Ed(e, t, l, (o, n, a) => {
  const r = l.parent.children;
  let p = r.indexOf(o), c = 0;
  for (; p-- >= 0; ) {
    const d = r[p];
    d && d.type === 9 && (c += d.branches.length);
  }
  return () => {
    if (a)
      o.codegenNode = co(n, c, l);
    else {
      const d = Pd(o.codegenNode);
      d.alternate = co(n, c + o.branches.length - 1, l);
    }
  };
}));
function Ed(e, t, l, o) {
  if (t.name !== "else" && (!t.exp || !t.exp.content.trim())) {
    const n = t.exp ? t.exp.loc : e.loc;
    l.onError(Ce(28, t.loc)), t.exp = ve("true", !1, n);
  }
  if (process.env.NODE_ENV !== "production" && t.exp && Re(t.exp, l), t.name === "if") {
    const n = uo(e, t), a = {
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
        t.name === "else-if" && p.branches[p.branches.length - 1].condition === void 0 && l.onError(Ce(30, e.loc)), l.removeNode();
        const c = uo(e, t);
        if (process.env.NODE_ENV !== "production" && a.length && // #3619 ignore comments if the v-if is direct child of <transition>
        !(l.parent && l.parent.type === 1 && md(l.parent.tag, "transition")) && (c.children = [...a, ...c.children]), process.env.NODE_ENV !== "production") {
          const f = c.userKey;
          f && p.branches.forEach(({ userKey: v }) => {
            Od(v, f) && l.onError(Ce(29, c.userKey.loc));
          });
        }
        p.branches.push(c);
        const d = o && o(p, c, !1);
        Ut(c, l), d && d(), l.currentNode = null;
      } else
        l.onError(Ce(30, e.loc));
      break;
    }
  }
}
function uo(e, t) {
  const l = e.tagType === 3;
  return {
    type: 10,
    loc: e.loc,
    condition: t.name === "else" ? void 0 : t.exp,
    children: l && !pl(e, "for") ? e.children : [e],
    userKey: kt(e, "key"),
    isTemplateIf: l
  };
}
function co(e, t, l) {
  return e.condition ? dd(
    e.condition,
    fo(e, t, l),
    // make sure to pass in asBlock: true so that the comment node call
    // closes the current block.
    We(l.helper(sl), [
      process.env.NODE_ENV !== "production" ? '"v-if"' : '""',
      "true"
    ])
  ) : fo(e, t, l);
}
function fo(e, t, l) {
  const { helper: o } = l, n = il("key", ve(
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
    const c = r.codegenNode, d = Vd(c);
    return d.type === 13 && wd(d, l), Je(d, n, l), c;
  }
}
function Od(e, t) {
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
function Pd(e) {
  for (; ; )
    if (e.type === 19)
      if (e.alternate.type === 19)
        e = e.alternate;
      else
        return e;
    else
      e.type === 20 && (e = e.value);
}
dl("for", (e, t, l) => {
  const { helper: o, removeHelper: n } = l;
  return Ld(e, t, l, (a) => {
    const r = We(o(sd), [
      a.source
    ]), p = ul(e), c = pl(e, "memo"), d = kt(e, "key"), f = d && (d.type === 6 ? ve(d.value.content, !0) : d.exp), v = d ? il("key", f) : null, g = a.source.type === 4 && a.source.constType > 0, w = g ? 64 : d ? 128 : 256;
    return a.codegenNode = wt(l, o(Vt), void 0, r, w + (process.env.NODE_ENV !== "production" ? ` /* ${Ge[w]} */` : ""), void 0, void 0, !0, !g, !1, e.loc), () => {
      let b;
      const { children: C } = a;
      process.env.NODE_ENV !== "production" && p && e.children.some(($) => {
        if ($.type === 1) {
          const E = kt($, "key");
          if (E)
            return l.onError(Ce(33, E.loc)), !0;
        }
      });
      const m = C.length !== 1 || C[0].type !== 1, V = io(e) ? e : p && e.children.length === 1 && io(e.children[0]) ? e.children[0] : null;
      if (V ? (b = V.codegenNode, p && v && Je(b, v, l)) : m ? b = wt(
        l,
        o(Vt),
        v ? Te([v]) : void 0,
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
      ) : (b = C[0].codegenNode, p && v && Je(b, v, l), b.isBlock !== !g && (b.isBlock ? (n(Ke), n(Ze(l.inSSR, b.isComponent))) : n(Ye(l.inSSR, b.isComponent))), b.isBlock = !g, b.isBlock ? (o(Ke), o(Ze(l.inSSR, b.isComponent))) : o(Ye(l.inSSR, b.isComponent))), c) {
        const $ = so(mo(a.parseResult, [
          ve("_cached")
        ]));
        $.body = fd([
          vt(["const _memo = (", c.exp, ")"]),
          vt([
            "if (_cached",
            ...f ? [" && _cached.key === ", f] : [],
            ` && ${l.helperString(cd)}(_cached, _memo)) return _cached`
          ]),
          vt(["const _item = ", b]),
          ve("_item.memo = _memo"),
          ve("return _item")
        ]), r.arguments.push($, ve("_cache"), ve(String(l.cached++)));
      } else
        r.arguments.push(so(
          mo(a.parseResult),
          b,
          !0
          /* force newline */
        ));
    };
  });
});
function Ld(e, t, l, o) {
  if (!t.exp) {
    l.onError(Ce(31, t.loc));
    return;
  }
  const n = Td(
    // can only be simple expression because vFor transform is applied
    // before expression transform.
    t.exp,
    l
  );
  if (!n) {
    l.onError(Ce(32, t.loc));
    return;
  }
  const { addIdentifiers: a, removeIdentifiers: r, scopes: p } = l, { source: c, value: d, key: f, index: v } = n, g = {
    type: 11,
    loc: t.loc,
    source: c,
    valueAlias: d,
    keyAlias: f,
    objectIndexAlias: v,
    parseResult: n,
    children: ul(e) ? e.children : [e]
  };
  l.replaceNode(g), p.vFor++;
  const w = o && o(g);
  return () => {
    p.vFor--, w && w();
  };
}
const Nd = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/, vo = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, Dd = /^\(|\)$/g;
function Td(e, t) {
  const l = e.loc, o = e.content, n = o.match(Nd);
  if (!n)
    return;
  const [, a, r] = n, p = {
    source: qe(l, r.trim(), o.indexOf(r, a.length)),
    value: void 0,
    key: void 0,
    index: void 0
  };
  process.env.NODE_ENV !== "production" && Re(p.source, t);
  let c = a.trim().replace(Dd, "").trim();
  const d = a.indexOf(c), f = c.match(vo);
  if (f) {
    c = c.replace(vo, "").trim();
    const v = f[1].trim();
    let g;
    if (v && (g = o.indexOf(v, d + c.length), p.key = qe(l, v, g), process.env.NODE_ENV !== "production" && Re(p.key, t, !0)), f[2]) {
      const w = f[2].trim();
      w && (p.index = qe(l, w, o.indexOf(w, p.key ? g + v.length : d + c.length)), process.env.NODE_ENV !== "production" && Re(p.index, t, !0));
    }
  }
  return c && (p.value = qe(l, c, d), process.env.NODE_ENV !== "production" && Re(p.value, t, !0)), p;
}
function qe(e, t, l) {
  return ve(t, !1, hd(e, l, t.length));
}
function mo({ value: e, key: t, index: l }, o = []) {
  return jd([e, t, l, ...o]);
}
function jd(e) {
  let t = e.length;
  for (; t-- && !e[t]; )
    ;
  return e.slice(0, t + 1).map((l, o) => l || ve("_".repeat(o + 1), !1));
}
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const Bd = { class: "po-flex po-text-sm po-text-gray-700 po-flex-col po-space-y-5" }, Ad = {
  key: 0,
  class: "po-text-base po-font-medium po-text-slate-700"
}, Id = {
  key: 1,
  class: "po-border po-border-orange-300 po-bg-orange-50 po-rounded-lg po-p-5 po-flex po-items-center po-space-x-3"
}, Rd = { class: "po-grow po-text-sm po-text-slate-600" }, Md = {
  key: 2,
  class: "po-border po-border-red-300 po-bg-red-50 po-rounded-lg po-p-5 po-flex po-space-x-4"
}, Fd = { class: "po-grow" }, zd = { class: "po-text-base po-text-slate-700 po-font-medium" }, Hd = { class: "po-text-sm po-text-slate-600" }, qd = { class: "po-font-medium" }, Ud = { key: 0 }, Gd = { key: 0 }, Kd = /* @__PURE__ */ s("dt", null, "Name", -1), Wd = { key: 1 }, Yd = /* @__PURE__ */ s("dt", null, "Identifer", -1), Zd = { key: 2 }, Jd = /* @__PURE__ */ s("dt", null, "Date of birth", -1), Qd = { key: 3 }, Xd = /* @__PURE__ */ s("dt", null, "Reported Date of death", -1), e1 = {
  key: 3,
  class: "po-pt-5"
}, t1 = { class: "po-flex po-items-center po-space-x-1" }, o1 = /* @__PURE__ */ s("span", null, "File a dispute.", -1), l1 = {
  name: "PoDRStatus"
}, v0 = /* @__PURE__ */ Object.assign(l1, {
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
      e.record !== null ? (i(), u("h2", Ad, " Death was reported by " + y(e.record.institution), 1)) : x("", !0),
      e.request !== null && e.request.type_id === 1 ? (i(), u("div", Id, [
        _(h(mt), { class: "po-shrink-0 po-w-6 po-stroke-orange-600" }),
        s("span", Rd, " This is a " + y(e.request.type) + " request and is in " + y(e.request.state) + " state. ", 1)
      ])) : x("", !0),
      e.request !== null && e.request.type_id !== 1 ? (i(), u("div", Md, [
        _(h(mt), { class: "po-shrink-0 po-w-6 po-h-6 po-stroke-red-600 po-stroke-2" }),
        s("div", Fd, [
          s("h3", zd, y(e.request.type), 1),
          s("p", Hd, [
            ne(" The following " + y(e.request.type) + " was reported: ", 1),
            s("span", qd, [
              ne(y(e.request.dispute_type), 1),
              e.request.date_of_death ? (i(), u("span", Ud, " (New date: " + y(e.request.date_of_death) + ")", 1)) : x("", !0)
            ])
          ])
        ])
      ])) : x("", !0),
      _(nl, null, {
        content: j(() => [
          e.member !== null ? (i(), u("div", Gd, [
            Kd,
            s("dd", null, y(e.member.name), 1)
          ])) : x("", !0),
          e.member !== null ? (i(), u("div", Wd, [
            Yd,
            s("dd", null, y(e.member.identifier), 1)
          ])) : x("", !0),
          e.member !== null ? (i(), u("div", Zd, [
            Jd,
            s("dd", null, y(e.member.dob), 1)
          ])) : x("", !0),
          e.record !== null ? (i(), u("div", Qd, [
            Xd,
            s("dd", null, y(e.record.date_of_death), 1)
          ])) : x("", !0)
        ]),
        _: 1
      }),
      e.request === null ? (i(), u("span", e1, [
        _(Ht, {
          type: "simple",
          onButtonClick: l
        }, {
          label: j(() => [
            s("span", t1, [
              _(h(Sl), { class: "po-w-4 po-h-4 po-stroke-current" }),
              o1
            ])
          ]),
          _: 1
        })
      ])) : x("", !0)
    ]));
  }
}), n1 = {
  key: 0,
  role: "button",
  class: "po-w-6 po-h-6 po-rounded-lg po-bg-white genie-effect po-flex po-items-center po-justify-center hover:po-bg-slate-50 po-cursor-pointer"
}, a1 = {
  name: "PoTableAction"
}, m0 = /* @__PURE__ */ Object.assign(a1, {
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
    const t = e, l = k(), o = k();
    return t.btnType === "view" ? l.value = Bl : t.btnType === "edit" ? l.value = Il : t.btnType === "delete" ? l.value = zl : t.btnType === "icon" && t.btnIcon && (l.value = t.btnIcon), t.btnType === "view" ? o.value = "po-stroke-emerald-400" : t.btnType === "edit" ? o.value = "po-stroke-blue-400" : t.btnType === "delete" ? o.value = "po-stroke-red-400" : o.value = t.iconColor, (n, a) => (i(), u("span", null, [
      e.btnType === "icon" || e.btnType === "delete" || e.btnType === "edit" || e.btnType === "view" ? (i(), u("span", n1, [
        (i(), M(fe(l.value), {
          class: N(["po-w-4 po-stroke-2", o.value])
        }, null, 8, ["class"]))
      ])) : (i(), u("span", {
        key: 1,
        role: "button",
        class: N(["po-block po-text-sm genie-effect", e.textColor])
      }, y(e.label), 3))
    ]));
  }
}), s1 = { key: 0 }, r1 = {
  name: "Rufiyaa"
}, h0 = /* @__PURE__ */ Object.assign(r1, {
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
      e.amount !== null ? (i(), u("span", s1, y(t(e.amount)), 1)) : x("", !0)
    ]));
  }
}), i1 = {
  name: "PoHeading"
}, b0 = /* @__PURE__ */ Object.assign(i1, {
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
    return (t, l) => (i(), M(fe(e.type), { class: "po-text-base po-text-slate-600 po-font-semibold" }, {
      default: j(() => [
        ne(y(e.text), 1)
      ]),
      _: 1
    }));
  }
});
function p1(e, t) {
  if (!e)
    return;
  const l = (o) => {
    o.target !== e.value && o.composedPath().includes(e.value) || typeof t == "function" && t();
  };
  return K(() => {
    window.addEventListener("click", l);
  }), go(() => {
    window.removeEventListener("click", l);
  }), { listener: l };
}
const u1 = ["for"], c1 = { class: "po-capitalize" }, d1 = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, f1 = ["title"], v1 = { class: "po-relative po-mt-1" }, m1 = {
  key: 0,
  class: "po-shrink-0 po-pr-1 po-flex po-flex-wrap po-w-full -mt-2 po-max-h-44"
}, h1 = { class: "po-px-2 po-py-1 po-mb-1 po-mr-1 po-rounded-md po-text-sm po-text-white po-flex po-space-x-2 po-items-center po-bg-mpao-lightblue" }, b1 = ["onClick"], g1 = ["id"], y1 = {
  key: 0,
  class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
}, x1 = ["onClick", "value"], V1 = {
  class: /* @__PURE__ */ N(["po-block po-truncate"])
}, w1 = ["id"], k1 = ["id"], $1 = {
  name: "PoMultiSelect",
  components: { CheckIcon: Nl }
}, g0 = /* @__PURE__ */ Object.assign($1, {
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
    const n = k(""), a = k([]);
    function r(b) {
      a.value.splice(b, 1), d();
    }
    function p(b) {
      let C = n.value.split(",");
      b.key === "Enter" && 0 < n.value.length && (b.preventDefault(), C.forEach((m) => {
        let V = l.items.find(
          ($) => $.name.toLowerCase() === m.trim().toLowerCase()
        );
        V && a.value.push(V);
      }), n.value = ""), b.key === "Backspace" && n.value.length === 0 && a.value.pop(), d();
    }
    const c = k([]);
    function d() {
      c.value = a.value.map((b) => b.id);
    }
    K(() => {
      document.addEventListener("keydown", p);
    }), se(() => {
      document.removeEventListener("keydown", p);
    });
    const f = k(!1), v = S(
      () => n.value === "" ? l.items : l.items.filter((b) => b.name.toLowerCase().includes(n.value.toLowerCase()))
    );
    let g = k();
    p1(g, () => {
      f.value = !1;
    });
    function w(b) {
      a.value.push(b), n.value = "", d();
    }
    return J(c, () => {
      t("update:modelValue", c.value);
    }), (b, C) => (i(), u("div", {
      ref_key: "multiSelectComponentRef",
      ref: g,
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
        s("span", c1, y(e.label), 1),
        e.required ? (i(), u("span", d1, "*")) : x("", !0),
        e.info !== null ? (i(), u("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          _(h(ll), { class: "po-fill-current" })
        ], 8, f1)) : x("", !0)
      ], 10, u1),
      s("div", v1, [
        s("div", {
          class: N([
            "po-border po-p-1 po-min-h-[2.38rem] po-flex po-flex-wrap po-items-center focus-within:po-border-mpao-lightblue po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white sm:po-text-sm",
            o()
          ])
        }, [
          a.value.length > 0 ? (i(), u("div", m1, [
            (i(!0), u(R, null, H(a.value, (m, V) => (i(), u("span", h1, [
              s("span", null, y(m.name), 1),
              s("span", {
                onClick: () => r(V),
                class: "po-rounded-full po-bg-white po-flex po-items-center po-justify-center po-w-4 po-h-4 po-cursor-pointer"
              }, [
                _(h(ol), { class: "po-w-3 po-fill-mpao-lightblue" })
              ], 8, b1)
            ]))), 256))
          ])) : x("", !0),
          $t(s("input", {
            id: e.id,
            "onUpdate:modelValue": C[0] || (C[0] = (m) => n.value = m),
            onFocus: C[1] || (C[1] = () => f.value = !0),
            class: "po-border-0 po-outline-none po-ring-0 po-grow"
          }, null, 40, g1), [
            [ho, n.value]
          ])
        ], 2),
        f.value ? (i(), u("ul", y1, [
          (i(!0), u(R, null, H(h(v), (m) => (i(), u("li", {
            onClick: () => w(m),
            key: m.id,
            value: m.id,
            class: N([
              "po-relative po-select-none po-py-2 hover:po-bg-mpao-lightblue hover:po-text-white po-cursor-pointer po-pl-3 po-pr-9"
            ])
          }, [
            s("span", V1, y(m.name), 1)
          ], 8, x1))), 128))
        ])) : x("", !0)
      ]),
      e.message !== null ? (i(), u("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, y(e.message), 9, w1)) : x("", !0),
      e.hasError && e.errorMessage !== null ? (i(), u("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-center po-space-x-1",
        id: `${e.id}-error`
      }, [
        _(h(Ds), { class: "po-fill-current po-w-4" }),
        s("span", null, y(e.errorMessage), 1)
      ], 8, k1)) : x("", !0)
    ], 2));
  }
}), _1 = { class: "po-flex po-pl-5" }, C1 = /* @__PURE__ */ s("div", { class: "po-shrink-0 po-flex po-flex-col" }, [
  /* @__PURE__ */ s("div", { class: "po-w-[2px] po-shrink-0 po-h-10" }),
  /* @__PURE__ */ s("div", { class: "po-bg-gradient-to-t po-from-orange-400 po-via-red-300 po-to-blue-500 po-w-[2px] po-grow" }),
  /* @__PURE__ */ s("div", { class: "po-w-[2px] po-shrink-0 po-h-12" })
], -1), S1 = { class: "po-grow po-pl-5 po-pt-5 po-space-y-3" }, E1 = { class: "po-px-2 po-pt-2 po-pb-6 po-relative" }, O1 = { class: "-po-mt-1 po-flex po-space-x-3 po-items-center" }, P1 = { class: "po-text-sm po-text-slate-600 po-font-medium" }, L1 = { class: "po-block po-text-xs po-text-slate-400" }, N1 = { class: "po-text-xs po-text-slate-500 po-pt-1" }, D1 = {
  name: "PoTimeline"
}, y0 = /* @__PURE__ */ Object.assign(D1, {
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
    return (t, l) => (i(), u("div", _1, [
      C1,
      s("div", S1, [
        (i(!0), u(R, null, H(e.timeline, (o) => (i(), u("div", E1, [
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
              s("h4", P1, y(o.label), 1),
              s("span", L1, y(h(Vl)(o.date)), 1)
            ]),
            s("p", N1, y(o.description), 1)
          ])
        ]))), 256))
      ])
    ]));
  }
}), T1 = {
  name: "PoTableCheckbox"
}, x0 = /* @__PURE__ */ Object.assign(T1, {
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
      e.isChecked ? (i(), M(h(xs), {
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
  R1 as PoActionBar,
  n0 as PoAlert,
  ln as PoAppIcon,
  ya as PoAppTray,
  Ht as PoButton,
  u0 as PoCallLog,
  M1 as PoCard,
  F1 as PoCardSearch,
  c0 as PoCardTabs,
  e0 as PoChatLogItem,
  Z1 as PoCheckbox,
  l0 as PoCommandPalette,
  p0 as PoConsent,
  r0 as PoContentArea,
  v0 as PoDRStatus,
  nl as PoDescriptionList,
  s0 as PoDownloadFileList,
  q1 as PoDynamicTable,
  f0 as PoEmpty,
  J1 as PoFooter,
  Q1 as PoFormStatusMessage,
  b0 as PoHeading,
  U1 as PoInputField,
  G1 as PoInputFile,
  i0 as PoLoading,
  a0 as PoLogs,
  ys as PoModal,
  g0 as PoMultiSelect,
  t0 as PoNotification,
  La as PoNotificationHub,
  z1 as PoPageTitle,
  Dr as PoPagination,
  ls as PoProfileSwitcher,
  Ls as PoRadioInput,
  pn as PoSearchBar,
  Y1 as PoSectionMenu,
  K1 as PoSelectField,
  I1 as PoSidebarDrawer,
  o0 as PoSlideover,
  X1 as PoStatsBlock,
  H1 as PoTable,
  m0 as PoTableAction,
  x0 as PoTableCheckbox,
  d0 as PoTabs,
  Hs as PoTextarea,
  y0 as PoTimeline,
  W1 as PoToggle,
  A1 as PoTopBar,
  h0 as Rufiyaa
};
