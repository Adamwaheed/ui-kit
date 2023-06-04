import { openBlock as r, createElementBlock as p, createElementVNode as a, ref as k, toRefs as ge, watch as K, Fragment as B, createVNode as C, unref as m, withCtx as T, renderSlot as te, createBlock as N, resolveDynamicComponent as be, createCommentVNode as b, computed as S, toDisplayString as h, onMounted as H, onUnmounted as se, withDirectives as Re, isRef as Ko, vModelText as gt, cloneVNode as Qo, h as J, inject as re, provide as ie, watchEffect as ne, defineComponent as U, toRaw as Z, nextTick as ke, Teleport as Ze, reactive as Yo, shallowRef as eo, normalizeClass as E, renderList as I, Transition as we, withModifiers as ce, onBeforeMount as Jo, onBeforeUpdate as Xo, onUpdated as yt, mergeProps as Ee, createTextVNode as X, normalizeProps as Me, guardReactiveProps as Ie, normalizeStyle as xt, vModelCheckbox as el, onBeforeUnmount as wt, createStaticVNode as tl, vModelSelect as ol } from "vue";
import { f as ll, a as nl } from "./FormatMoney-e395bc87.mjs";
function al(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
    })
  ]);
}
function sl(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
    })
  ]);
}
function rl(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
    })
  ]);
}
function il(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    })
  ]);
}
function pl(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
    })
  ]);
}
function ul(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
    })
  ]);
}
function cl(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
    })
  ]);
}
function dl(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
    })
  ]);
}
function fl(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
    })
  ]);
}
function vl(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  ]);
}
function ml(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4.5 12.75l6 6 9-13.5"
    })
  ]);
}
function to(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
    })
  ]);
}
function hl(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 19.5L8.25 12l7.5-7.5"
    })
  ]);
}
function bl(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 4.5l7.5 7.5-7.5 7.5"
    })
  ]);
}
function oo(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4.5 15.75l7.5-7.5 7.5 7.5"
    })
  ]);
}
function gl(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
    })
  ]);
}
function dt(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
    })
  ]);
}
function yl(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
    }),
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    })
  ]);
}
function xl(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
    })
  ]);
}
function Vt(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    })
  ]);
}
function lo(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
    })
  ]);
}
function wl(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
    })
  ]);
}
function Vl(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
    })
  ]);
}
function kl(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
    })
  ]);
}
function $l(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
    })
  ]);
}
function _l(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
    })
  ]);
}
function zt(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
    })
  ]);
}
function Ke(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6 18L18 6M6 6l12 12"
    })
  ]);
}
const Cl = /* @__PURE__ */ a("div", {
  "aria-live": "assertive",
  class: "po-pointer-events-none po-fixed po-inset-0 po-flex po-items-start po-px-4 po-py-6 sm:po-p-6 po-z-[60]"
}, [
  /* @__PURE__ */ a("div", {
    class: "po-flex po-w-full po-flex-col po-items-end po-space-y-4 sm:po-items-end po-pt-[55px]",
    id: "po-notifications-alert"
  })
], -1), Sl = { class: "po-bg-mpao-blue po-fixed po-top-0 po-w-full po-z-50 po-flex" }, Pl = { class: "po-shrink-0 po-px-3 po-pt-3" }, Ol = {
  for: "sidebar-drawer-toggle",
  role: "button",
  class: "genie-effect po-flex po-items-center po-justify-center po-bg-[#2e5266] po-rounded-full po-w-10 po-h-10 po-select-none po-text-slate-100"
}, El = { class: "po-mx-auto po-max-w-full po-pr-4 po-grow sm:po-pr-4" }, Ll = { class: "po-flex po-relative po-h-16 po-items-center po-justify-between po-space-x-12" }, Tl = { class: "po-flex po-items-center po-space-x-3" }, Bl = {
  key: 0,
  class: "po-block po-w-6 po-text-slate-100 md:po-hidden",
  role: "button"
}, jl = {
  name: "PoTopBar"
}, Y1 = /* @__PURE__ */ Object.assign(jl, {
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
    const l = e, n = k(""), o = k(""), { avatar: s, logo: i } = ge(l);
    K(s, () => {
      n.value = s.value;
    }), K(i, () => {
      o.value = i.value;
    });
    function u(v) {
      t("profileSwitcherClick", v);
    }
    function c(v) {
      t("query", v);
    }
    function f(v) {
      t("onSearchClear", v);
    }
    return (v, d) => (r(), p(B, null, [
      Cl,
      a("nav", Sl, [
        a("div", Pl, [
          a("label", Ol, [
            C(m(il), { class: "po-w-6 po-fill-current" })
          ])
        ]),
        a("div", El, [
          a("div", Ll, [
            C(m(Fl), { "app-name": e.appName }, {
              icon: T(() => [
                te(v.$slots, "appIcon", {}, () => [
                  e.appIcon ? (r(), N(be(e.appIcon), { key: 0 })) : b("", !0)
                ])
              ]),
              _: 3
            }, 8, ["app-name"]),
            e.hasSearch ? (r(), N(m(Wl), {
              key: 0,
              onQuery: c,
              onOnClear: f,
              "current-query": e.currentQuery
            }, null, 8, ["current-query"])) : b("", !0),
            a("div", Tl, [
              e.hasSearch ? (r(), p("span", Bl, [
                C(m(Vt), { class: "po-stroke-current" })
              ])) : b("", !0),
              C(m($a), {
                notifications: e.notifications,
                "has-new-notifications": e.hasNewNotifications
              }, null, 8, ["notifications", "has-new-notifications"]),
              C(m(da), {
                "app-list": e.appList,
                "open-in-new-tab": !0
              }, null, 8, ["app-list"]),
              C(m(Qa), {
                "user-object": e.userObject,
                avatar: n.value,
                logo: o.value,
                onButtonClick: u
              }, null, 8, ["user-object", "avatar", "logo"])
            ])
          ])
        ])
      ])
    ], 64));
  }
}), Dl = { class: "po-flex po-items-center po-justify-center po-space-x-3" }, Nl = { class: "po-w-8 po-text-slate-100 app-icon" }, Al = { class: "po-font-light po-text-lg po-text-slate-100" }, Ml = { class: "po-hidden md:po-block" }, Il = { class: "po-block md:po-hidden" }, Rl = {
  name: "PoAppIcon"
}, Fl = /* @__PURE__ */ Object.assign(Rl, {
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
    return (n, o) => (r(), p("div", Dl, [
      a("div", Nl, [
        te(n.$slots, "icon")
      ]),
      a("span", Al, [
        a("span", Ml, h(e.appName), 1),
        a("span", Il, h(m(l)), 1)
      ])
    ]));
  }
}), zl = { class: "po-flex-grow po-hidden po-relative md:po-block" }, Hl = ["placeholder"], ql = { class: "po-absolute po-inset-y-0 po-left-0 po-flex po-items-center po-pl-3 po-pointer-events-none po-transition-all po-ease-linear po-duration-100 po-text-slate-400 po-origin-center peer-hover/search:po-scale-105 peer-focus/search:po-text-slate-100" }, Ul = {
  name: "PoSearchBar"
}, Wl = /* @__PURE__ */ Object.assign(Ul, {
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
    let n = k("");
    const o = (s) => {
      s.key === "Enter" && 0 < n.value.length && t("query", n.value);
    };
    return H(() => {
      document.addEventListener("keydown", o), n.value = l.currentQuery;
    }), se(() => {
      document.removeEventListener("keydown", o);
    }), K(n, async (s, i) => {
      s === "" && t("onClear", !0);
    }), (s, i) => (r(), p("div", zl, [
      Re(a("input", {
        "onUpdate:modelValue": i[0] || (i[0] = (u) => Ko(n) ? n.value = u : n = u),
        type: "text",
        id: "main-search",
        placeholder: e.placeholder,
        class: "peer/search po-bg-transparent po-border po-border-transparent po-text-slate-100 po-text-sm po-rounded-md po-ring-0 po-outline-none focus:po-outline-none focus:po-ring-0 po-transition-colors po-ease-linear po-duration-100 po-block po-w-full po-pl-10 po-p-2.5 po-appearance-none focus:po-border-slate-400 hover:po-border-slate-600"
      }, null, 8, Hl), [
        [gt, m(n)]
      ]),
      a("div", ql, [
        C(m(Vt), { class: "po-w-5 po-h-5 po-stroke-current" })
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
var de = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(de || {}), $e = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))($e || {});
function W({ visible: e = !0, features: t = 0, ourProps: l, theirProps: n, ...o }) {
  var s;
  let i = ao(n, l), u = Object.assign(o, { props: i });
  if (e || t & 2 && i.static)
    return rt(u);
  if (t & 1) {
    let c = (s = i.unmount) == null || s ? 0 : 1;
    return Q(c, { [0]() {
      return null;
    }, [1]() {
      return rt({ ...o, props: { ...i, hidden: !0, style: { display: "none" } } });
    } });
  }
  return rt(u);
}
function rt({ props: e, attrs: t, slots: l, slot: n, name: o }) {
  var s, i;
  let { as: u, ...c } = je(e, ["unmount", "static"]), f = (s = l.default) == null ? void 0 : s.call(l, n), v = {};
  if (n) {
    let d = !1, g = [];
    for (let [y, V] of Object.entries(n))
      typeof V == "boolean" && (d = !0), V === !0 && g.push(y);
    d && (v["data-headlessui-state"] = g.join(" "));
  }
  if (u === "template") {
    if (f = no(f ?? []), Object.keys(c).length > 0 || Object.keys(t).length > 0) {
      let [d, ...g] = f ?? [];
      if (!Gl(d) || g.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${o} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(c).concat(Object.keys(t)).map((x) => x.trim()).filter((x, w, $) => $.indexOf(x) === w).sort((x, w) => x.localeCompare(w)).map((x) => `  - ${x}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((x) => `  - ${x}`).join(`
`)].join(`
`));
      let y = ao((i = d.props) != null ? i : {}, c), V = Qo(d, y);
      for (let x in y)
        x.startsWith("on") && (V.props || (V.props = {}), V.props[x] = y[x]);
      return V;
    }
    return Array.isArray(f) && f.length === 1 ? f[0] : f;
  }
  return J(u, Object.assign({}, c, v), { default: () => f });
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
    Object.assign(t, { [n](o, ...s) {
      let i = l[n];
      for (let u of i) {
        if (o instanceof Event && o.defaultPrevented)
          return;
        u(o, ...s);
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
function je(e, t = []) {
  let l = Object.assign({}, e);
  for (let n of t)
    n in l && delete l[n];
  return l;
}
function Gl(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Zl = 0;
function Kl() {
  return ++Zl;
}
function oe() {
  return Kl();
}
var z = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(z || {});
function Ql(e) {
  throw new Error("Unexpected object: " + e);
}
var ue = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(ue || {});
function Yl(e, t) {
  let l = t.resolveItems();
  if (l.length <= 0)
    return null;
  let n = t.resolveActiveIndex(), o = n ?? -1, s = (() => {
    switch (e.focus) {
      case 0:
        return l.findIndex((i) => !t.resolveDisabled(i));
      case 1: {
        let i = l.slice().reverse().findIndex((u, c, f) => o !== -1 && f.length - c - 1 >= o ? !1 : !t.resolveDisabled(u));
        return i === -1 ? i : l.length - 1 - i;
      }
      case 2:
        return l.findIndex((i, u) => u <= o ? !1 : !t.resolveDisabled(i));
      case 3: {
        let i = l.slice().reverse().findIndex((u) => !t.resolveDisabled(u));
        return i === -1 ? i : l.length - 1 - i;
      }
      case 4:
        return l.findIndex((i) => t.resolveId(i) === e.id);
      case 5:
        return null;
      default:
        Ql(e);
    }
  })();
  return s === -1 ? n : s;
}
function P(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let so = Symbol("Context");
var Y = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Y || {});
function Jl() {
  return Be() !== null;
}
function Be() {
  return re(so, null);
}
function Qe(e) {
  ie(so, e);
}
function Ht(e, t) {
  if (e)
    return e;
  let l = t ?? "button";
  if (typeof l == "string" && l.toLowerCase() === "button")
    return "button";
}
function Ye(e, t) {
  let l = k(Ht(e.value.type, e.value.as));
  return H(() => {
    l.value = Ht(e.value.type, e.value.as);
  }), ne(() => {
    var n;
    l.value || P(t) && P(t) instanceof HTMLButtonElement && !((n = P(t)) != null && n.hasAttribute("type")) && (l.value = "button");
  }), l;
}
var Xl = Object.defineProperty, en = (e, t, l) => t in e ? Xl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l, qt = (e, t, l) => (en(e, typeof t != "symbol" ? t + "" : t, l), l);
let tn = class {
  constructor() {
    qt(this, "current", this.detect()), qt(this, "currentId", 0);
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
}, Fe = new tn();
function he(e) {
  if (Fe.isServer)
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
    let s = he(e);
    if (!s)
      return;
    let i = Object.assign((c) => t(c), { acceptNode: t }), u = s.createTreeWalker(o, NodeFilter.SHOW_ELEMENT, i, !1);
    for (; u.nextNode(); )
      l(u.currentNode);
  });
}
let ft = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var ae = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ae || {}), Te = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Te || {}), on = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(on || {});
function Je(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(ft)).sort((t, l) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (l.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var $t = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))($t || {});
function io(e, t = 0) {
  var l;
  return e === ((l = he(e)) == null ? void 0 : l.body) ? !1 : Q(t, { [0]() {
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
let ln = ["textarea", "input"].join(",");
function nn(e) {
  var t, l;
  return (l = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, ln)) != null ? l : !1;
}
function _t(e, t = (l) => l) {
  return e.slice().sort((l, n) => {
    let o = t(l), s = t(n);
    if (o === null || s === null)
      return 0;
    let i = o.compareDocumentPosition(s);
    return i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function ve(e, t, { sorted: l = !0, relativeTo: n = null, skipElements: o = [] } = {}) {
  var s;
  let i = (s = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? s : document, u = Array.isArray(e) ? l ? _t(e) : e : Je(e);
  o.length > 0 && u.length > 1 && (u = u.filter((V) => !o.includes(V))), n = n ?? i.activeElement;
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
      return Math.max(0, u.indexOf(n)) - 1;
    if (t & 4)
      return Math.max(0, u.indexOf(n)) + 1;
    if (t & 8)
      return u.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), v = t & 32 ? { preventScroll: !0 } : {}, d = 0, g = u.length, y;
  do {
    if (d >= g || d + g <= 0)
      return 0;
    let V = f + d;
    if (t & 16)
      V = (V + g) % g;
    else {
      if (V < 0)
        return 3;
      if (V >= g)
        return 1;
    }
    y = u[V], y == null || y.focus(v), d += c;
  } while (y !== i.activeElement);
  return t & 6 && nn(y) && y.select(), y.hasAttribute("tabindex") || y.setAttribute("tabindex", "0"), 2;
}
function it(e, t, l) {
  Fe.isServer || ne((n) => {
    document.addEventListener(e, t, l), n(() => document.removeEventListener(e, t, l));
  });
}
function Ct(e, t, l = S(() => !0)) {
  function n(s, i) {
    if (!l.value || s.defaultPrevented)
      return;
    let u = i(s);
    if (u === null || !u.getRootNode().contains(u))
      return;
    let c = function f(v) {
      return typeof v == "function" ? f(v()) : Array.isArray(v) || v instanceof Set ? v : [v];
    }(e);
    for (let f of c) {
      if (f === null)
        continue;
      let v = f instanceof HTMLElement ? f : P(f);
      if (v != null && v.contains(u) || s.composed && s.composedPath().includes(v))
        return;
    }
    return !io(u, $t.Loose) && u.tabIndex !== -1 && s.preventDefault(), t(s, u);
  }
  let o = k(null);
  it("mousedown", (s) => {
    var i, u;
    l.value && (o.value = ((u = (i = s.composedPath) == null ? void 0 : i.call(s)) == null ? void 0 : u[0]) || s.target);
  }, !0), it("click", (s) => {
    o.value && (n(s, () => o.value), o.value = null);
  }, !0), it("blur", (s) => n(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var xe = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(xe || {});
let Ve = U({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: l }) {
  return () => {
    let { features: n, ...o } = e, s = { "aria-hidden": (n & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
    return W({ ourProps: s, theirProps: o, slot: {}, attrs: l, slots: t, name: "Hidden" });
  };
} });
function St(e = {}, t = null, l = []) {
  for (let [n, o] of Object.entries(e))
    uo(l, po(t, n), o);
  return l;
}
function po(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function uo(e, t, l) {
  if (Array.isArray(l))
    for (let [n, o] of l.entries())
      uo(e, po(t, n.toString()), o);
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
  return [S(() => o.value ? e.value : n.value), function(s) {
    return o.value || (n.value = s), t == null ? void 0 : t(s);
  }];
}
function Ut(e) {
  return [e.screenX, e.screenY];
}
function an() {
  let e = k([-1, -1]);
  return { wasMoved(t) {
    let l = Ut(t);
    return e.value[0] === l[0] && e.value[1] === l[1] ? !1 : (e.value = l, !0);
  }, update(t) {
    e.value = Ut(t);
  } };
}
function fo() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function sn() {
  return /Android/gi.test(window.navigator.userAgent);
}
function rn() {
  return fo() || sn();
}
function pn(e, t) {
  return e === t;
}
var un = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(un || {}), cn = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(cn || {}), dn = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(dn || {});
let vo = Symbol("ComboboxContext");
function De(e) {
  let t = re(vo, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, De), l;
  }
  return t;
}
let fn = U({ name: "Combobox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => pn }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String }, nullable: { type: Boolean, default: !1 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: l, emit: n }) {
  let o = k(1), s = k(null), i = k(null), u = k(null), c = k(null), f = k({ static: !1, hold: !1 }), v = k([]), d = k(null), g = k(1), y = k(!1);
  function V(L = (M) => M) {
    let M = d.value !== null ? v.value[d.value] : null, A = _t(L(v.value.slice()), (F) => P(F.dataRef.domRef)), j = M ? A.indexOf(M) : null;
    return j === -1 && (j = null), { options: A, activeOptionIndex: j };
  }
  let x = S(() => e.multiple ? 1 : 0), w = S(() => e.nullable), [$, _] = Pt(S(() => e.modelValue === void 0 ? Q(x.value, { [1]: [], [0]: void 0 }) : e.modelValue), (L) => n("update:modelValue", L), S(() => e.defaultValue)), O = { comboboxState: o, value: $, mode: x, compare(L, M) {
    if (typeof e.by == "string") {
      let A = e.by;
      return (L == null ? void 0 : L[A]) === (M == null ? void 0 : M[A]);
    }
    return e.by(L, M);
  }, defaultValue: S(() => e.defaultValue), nullable: w, inputRef: i, labelRef: s, buttonRef: u, optionsRef: c, disabled: S(() => e.disabled), options: v, change(L) {
    _(L);
  }, activeOptionIndex: S(() => {
    if (y.value && d.value === null && v.value.length > 0) {
      let L = v.value.findIndex((M) => !M.dataRef.disabled);
      if (L !== -1)
        return L;
    }
    return d.value;
  }), activationTrigger: g, optionsPropsRef: f, closeCombobox() {
    y.value = !1, !e.disabled && o.value !== 1 && (o.value = 1, d.value = null);
  }, openCombobox() {
    if (y.value = !0, e.disabled || o.value === 0)
      return;
    let L = v.value.findIndex((M) => {
      let A = Z(M.dataRef.value);
      return Q(x.value, { [0]: () => O.compare(Z(O.value.value), Z(A)), [1]: () => Z(O.value.value).some((j) => O.compare(Z(j), Z(A))) });
    });
    L !== -1 && (d.value = L), o.value = 0;
  }, goToOption(L, M, A) {
    if (y.value = !1, e.disabled || c.value && !f.value.static && o.value === 1)
      return;
    let j = V();
    if (j.activeOptionIndex === null) {
      let ee = j.options.findIndex((ye) => !ye.dataRef.disabled);
      ee !== -1 && (j.activeOptionIndex = ee);
    }
    let F = Yl(L === ue.Specific ? { focus: ue.Specific, id: M } : { focus: L }, { resolveItems: () => j.options, resolveActiveIndex: () => j.activeOptionIndex, resolveId: (ee) => ee.id, resolveDisabled: (ee) => ee.dataRef.disabled });
    d.value = F, g.value = A ?? 1, v.value = j.options;
  }, selectOption(L) {
    let M = v.value.find((j) => j.id === L);
    if (!M)
      return;
    let { dataRef: A } = M;
    _(Q(x.value, { [0]: () => A.value, [1]: () => {
      let j = Z(O.value.value).slice(), F = Z(A.value), ee = j.findIndex((ye) => O.compare(F, Z(ye)));
      return ee === -1 ? j.push(F) : j.splice(ee, 1), j;
    } }));
  }, selectActiveOption() {
    if (O.activeOptionIndex.value === null)
      return;
    let { dataRef: L, id: M } = v.value[O.activeOptionIndex.value];
    _(Q(x.value, { [0]: () => L.value, [1]: () => {
      let A = Z(O.value.value).slice(), j = Z(L.value), F = A.findIndex((ee) => O.compare(j, Z(ee)));
      return F === -1 ? A.push(j) : A.splice(F, 1), A;
    } })), O.goToOption(ue.Specific, M);
  }, registerOption(L, M) {
    let A = { id: L, dataRef: M }, j = V((F) => [...F, A]);
    if (d.value === null) {
      let F = M.value.value;
      Q(x.value, { [0]: () => O.compare(Z(O.value.value), Z(F)), [1]: () => Z(O.value.value).some((ee) => O.compare(Z(ee), Z(F))) }) && (j.activeOptionIndex = j.options.indexOf(A));
    }
    v.value = j.options, d.value = j.activeOptionIndex, g.value = 1;
  }, unregisterOption(L) {
    var M;
    O.activeOptionIndex.value !== null && ((M = O.options.value[O.activeOptionIndex.value]) == null ? void 0 : M.id) === L && (y.value = !0);
    let A = V((j) => {
      let F = j.findIndex((ee) => ee.id === L);
      return F !== -1 && j.splice(F, 1), j;
    });
    v.value = A.options, d.value = A.activeOptionIndex, g.value = 1;
  } };
  Ct([i, u, c], () => O.closeCombobox(), S(() => o.value === 0)), ie(vo, O), Qe(S(() => Q(o.value, { [0]: Y.Open, [1]: Y.Closed })));
  let D = S(() => O.activeOptionIndex.value === null ? null : v.value[O.activeOptionIndex.value].dataRef.value), R = S(() => {
    var L;
    return (L = P(i)) == null ? void 0 : L.closest("form");
  });
  return H(() => {
    K([R], () => {
      if (!R.value || e.defaultValue === void 0)
        return;
      function L() {
        O.change(e.defaultValue);
      }
      return R.value.addEventListener("reset", L), () => {
        var M;
        (M = R.value) == null || M.removeEventListener("reset", L);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: L, disabled: M, ...A } = e, j = { open: o.value === 0, disabled: M, activeIndex: O.activeOptionIndex.value, activeOption: D.value, value: $.value };
    return J(B, [...L != null && $.value != null ? St({ [L]: $.value }).map(([F, ee]) => J(Ve, kt({ features: xe.Hidden, key: F, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: F, value: ee }))) : [], W({ theirProps: { ...l, ...je(A, ["modelValue", "defaultValue", "nullable", "multiple", "onUpdate:modelValue", "by"]) }, ourProps: {}, slot: j, slots: t, attrs: l, name: "Combobox" })]);
  };
} }), vn = U({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-combobox-label-${oe()}` } }, setup(e, { attrs: t, slots: l }) {
  let n = De("ComboboxLabel");
  function o() {
    var s;
    (s = P(n.inputRef)) == null || s.focus({ preventScroll: !0 });
  }
  return () => {
    let s = { open: n.comboboxState.value === 0, disabled: n.disabled.value }, { id: i, ...u } = e, c = { id: i, ref: n.labelRef, onClick: o };
    return W({ ourProps: c, theirProps: u, slot: s, attrs: t, slots: l, name: "ComboboxLabel" });
  };
} }), mn = U({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-combobox-button-${oe()}` } }, setup(e, { attrs: t, slots: l, expose: n }) {
  let o = De("ComboboxButton");
  n({ el: o.buttonRef, $el: o.buttonRef });
  function s(c) {
    o.disabled.value || (o.comboboxState.value === 0 ? o.closeCombobox() : (c.preventDefault(), o.openCombobox()), ke(() => {
      var f;
      return (f = P(o.inputRef)) == null ? void 0 : f.focus({ preventScroll: !0 });
    }));
  }
  function i(c) {
    switch (c.key) {
      case z.ArrowDown:
        c.preventDefault(), c.stopPropagation(), o.comboboxState.value === 1 && o.openCombobox(), ke(() => {
          var f;
          return (f = o.inputRef.value) == null ? void 0 : f.focus({ preventScroll: !0 });
        });
        return;
      case z.ArrowUp:
        c.preventDefault(), c.stopPropagation(), o.comboboxState.value === 1 && (o.openCombobox(), ke(() => {
          o.value.value || o.goToOption(ue.Last);
        })), ke(() => {
          var f;
          return (f = o.inputRef.value) == null ? void 0 : f.focus({ preventScroll: !0 });
        });
        return;
      case z.Escape:
        if (o.comboboxState.value !== 0)
          return;
        c.preventDefault(), o.optionsRef.value && !o.optionsPropsRef.value.static && c.stopPropagation(), o.closeCombobox(), ke(() => {
          var f;
          return (f = o.inputRef.value) == null ? void 0 : f.focus({ preventScroll: !0 });
        });
        return;
    }
  }
  let u = Ye(S(() => ({ as: e.as, type: t.type })), o.buttonRef);
  return () => {
    var c, f;
    let v = { open: o.comboboxState.value === 0, disabled: o.disabled.value, value: o.value.value }, { id: d, ...g } = e, y = { ref: o.buttonRef, id: d, type: u.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (c = P(o.optionsRef)) == null ? void 0 : c.id, "aria-expanded": o.disabled.value ? void 0 : o.comboboxState.value === 0, "aria-labelledby": o.labelRef.value ? [(f = P(o.labelRef)) == null ? void 0 : f.id, d].join(" ") : void 0, disabled: o.disabled.value === !0 ? !0 : void 0, onKeydown: i, onClick: s };
    return W({ ourProps: y, theirProps: g, slot: v, attrs: t, slots: l, name: "ComboboxButton" });
  };
} }), hn = U({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: () => `headlessui-combobox-input-${oe()}` } }, emits: { change: (e) => !0 }, setup(e, { emit: t, attrs: l, slots: n, expose: o }) {
  let s = De("ComboboxInput"), i = { value: !1 };
  o({ el: s.inputRef, $el: s.inputRef });
  let u = S(() => {
    var x;
    let w = s.value.value;
    return P(s.inputRef) ? typeof e.displayValue < "u" && w !== void 0 ? (x = e.displayValue(w)) != null ? x : "" : typeof w == "string" ? w : "" : "";
  });
  H(() => {
    K([u, s.comboboxState], ([x, w], [$, _]) => {
      if (i.value)
        return;
      let O = P(s.inputRef);
      O && (_ === 0 && w === 1 || x !== $) && (O.value = x);
    }, { immediate: !0 }), K([s.comboboxState], ([x], [w]) => {
      if (x === 0 && w === 1) {
        let $ = P(s.inputRef);
        if (!$)
          return;
        let _ = $.value, { selectionStart: O, selectionEnd: D, selectionDirection: R } = $;
        $.value = "", $.value = _, R !== null ? $.setSelectionRange(O, D, R) : $.setSelectionRange(O, D);
      }
    });
  });
  let c = k(!1);
  function f() {
    c.value = !0;
  }
  function v() {
    setTimeout(() => {
      c.value = !1;
    });
  }
  function d(x) {
    switch (i.value = !0, x.key) {
      case z.Backspace:
      case z.Delete:
        if (s.mode.value !== 0 || !s.nullable.value)
          return;
        let w = x.currentTarget;
        requestAnimationFrame(() => {
          if (w.value === "") {
            s.change(null);
            let $ = P(s.optionsRef);
            $ && ($.scrollTop = 0), s.goToOption(ue.Nothing);
          }
        });
        break;
      case z.Enter:
        if (i.value = !1, s.comboboxState.value !== 0 || c.value)
          return;
        if (x.preventDefault(), x.stopPropagation(), s.activeOptionIndex.value === null) {
          s.closeCombobox();
          return;
        }
        s.selectActiveOption(), s.mode.value === 0 && s.closeCombobox();
        break;
      case z.ArrowDown:
        return i.value = !1, x.preventDefault(), x.stopPropagation(), Q(s.comboboxState.value, { [0]: () => s.goToOption(ue.Next), [1]: () => s.openCombobox() });
      case z.ArrowUp:
        return i.value = !1, x.preventDefault(), x.stopPropagation(), Q(s.comboboxState.value, { [0]: () => s.goToOption(ue.Previous), [1]: () => {
          s.openCombobox(), ke(() => {
            s.value.value || s.goToOption(ue.Last);
          });
        } });
      case z.Home:
        if (x.shiftKey)
          break;
        return i.value = !1, x.preventDefault(), x.stopPropagation(), s.goToOption(ue.First);
      case z.PageUp:
        return i.value = !1, x.preventDefault(), x.stopPropagation(), s.goToOption(ue.First);
      case z.End:
        if (x.shiftKey)
          break;
        return i.value = !1, x.preventDefault(), x.stopPropagation(), s.goToOption(ue.Last);
      case z.PageDown:
        return i.value = !1, x.preventDefault(), x.stopPropagation(), s.goToOption(ue.Last);
      case z.Escape:
        if (i.value = !1, s.comboboxState.value !== 0)
          return;
        x.preventDefault(), s.optionsRef.value && !s.optionsPropsRef.value.static && x.stopPropagation(), s.closeCombobox();
        break;
      case z.Tab:
        if (i.value = !1, s.comboboxState.value !== 0)
          return;
        s.mode.value === 0 && s.selectActiveOption(), s.closeCombobox();
        break;
    }
  }
  function g(x) {
    s.openCombobox(), t("change", x);
  }
  function y() {
    i.value = !1;
  }
  let V = S(() => {
    var x, w, $, _;
    return (_ = ($ = (w = e.defaultValue) != null ? w : s.defaultValue.value !== void 0 ? (x = e.displayValue) == null ? void 0 : x.call(e, s.defaultValue.value) : null) != null ? $ : s.defaultValue.value) != null ? _ : "";
  });
  return () => {
    var x, w, $, _, O, D;
    let R = { open: s.comboboxState.value === 0 }, { id: L, displayValue: M, onChange: A, ...j } = e, F = { "aria-controls": (x = s.optionsRef.value) == null ? void 0 : x.id, "aria-expanded": s.disabled.value ? void 0 : s.comboboxState.value === 0, "aria-activedescendant": s.activeOptionIndex.value === null || (w = s.options.value[s.activeOptionIndex.value]) == null ? void 0 : w.id, "aria-labelledby": (O = ($ = P(s.labelRef)) == null ? void 0 : $.id) != null ? O : (_ = P(s.buttonRef)) == null ? void 0 : _.id, "aria-autocomplete": "list", id: L, onCompositionstart: f, onCompositionend: v, onKeydown: d, onInput: g, onBlur: y, role: "combobox", type: (D = l.type) != null ? D : "text", tabIndex: 0, ref: s.inputRef, defaultValue: V.value };
    return W({ ourProps: F, theirProps: j, slot: R, attrs: l, slots: n, features: de.RenderStrategy | de.Static, name: "ComboboxInput" });
  };
} }), bn = U({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, hold: { type: [Boolean], default: !1 } }, setup(e, { attrs: t, slots: l, expose: n }) {
  let o = De("ComboboxOptions"), s = `headlessui-combobox-options-${oe()}`;
  n({ el: o.optionsRef, $el: o.optionsRef }), ne(() => {
    o.optionsPropsRef.value.static = e.static;
  }), ne(() => {
    o.optionsPropsRef.value.hold = e.hold;
  });
  let i = Be(), u = S(() => i !== null ? (i.value & Y.Open) === Y.Open : o.comboboxState.value === 0);
  return ro({ container: S(() => P(o.optionsRef)), enabled: S(() => o.comboboxState.value === 0), accept(c) {
    return c.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : c.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(c) {
    c.setAttribute("role", "none");
  } }), () => {
    var c, f, v;
    let d = { open: o.comboboxState.value === 0 }, g = { "aria-labelledby": (v = (c = P(o.labelRef)) == null ? void 0 : c.id) != null ? v : (f = P(o.buttonRef)) == null ? void 0 : f.id, id: s, ref: o.optionsRef, role: "listbox", "aria-multiselectable": o.mode.value === 1 ? !0 : void 0 }, y = je(e, ["hold"]);
    return W({ ourProps: g, theirProps: y, slot: d, attrs: t, slots: l, features: de.RenderStrategy | de.Static, visible: u.value, name: "ComboboxOptions" });
  };
} }), gn = U({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: l, expose: n }) {
  let o = De("ComboboxOption"), s = `headlessui-combobox-option-${oe()}`, i = k(null);
  n({ el: i, $el: i });
  let u = S(() => o.activeOptionIndex.value !== null ? o.options.value[o.activeOptionIndex.value].id === s : !1), c = S(() => Q(o.mode.value, { [0]: () => o.compare(Z(o.value.value), Z(e.value)), [1]: () => Z(o.value.value).some((w) => o.compare(Z(w), Z(e.value))) })), f = S(() => ({ disabled: e.disabled, value: e.value, domRef: i }));
  H(() => o.registerOption(s, f)), se(() => o.unregisterOption(s)), ne(() => {
    o.comboboxState.value === 0 && u.value && o.activationTrigger.value !== 0 && ke(() => {
      var w, $;
      return ($ = (w = P(i)) == null ? void 0 : w.scrollIntoView) == null ? void 0 : $.call(w, { block: "nearest" });
    });
  });
  function v(w) {
    if (e.disabled)
      return w.preventDefault();
    o.selectOption(s), o.mode.value === 0 && o.closeCombobox(), rn() || requestAnimationFrame(() => {
      var $;
      return ($ = P(o.inputRef)) == null ? void 0 : $.focus();
    });
  }
  function d() {
    if (e.disabled)
      return o.goToOption(ue.Nothing);
    o.goToOption(ue.Specific, s);
  }
  let g = an();
  function y(w) {
    g.update(w);
  }
  function V(w) {
    g.wasMoved(w) && (e.disabled || u.value || o.goToOption(ue.Specific, s, 0));
  }
  function x(w) {
    g.wasMoved(w) && (e.disabled || u.value && (o.optionsPropsRef.value.hold || o.goToOption(ue.Nothing)));
  }
  return () => {
    let { disabled: w } = e, $ = { active: u.value, selected: c.value, disabled: w }, _ = { id: s, ref: i, role: "option", tabIndex: w === !0 ? void 0 : -1, "aria-disabled": w === !0 ? !0 : void 0, "aria-selected": c.value, disabled: void 0, onClick: v, onFocus: d, onPointerenter: y, onMouseenter: y, onPointermove: V, onMousemove: V, onPointerleave: x, onMouseleave: x };
    return W({ ourProps: _, theirProps: e, slot: $, attrs: l, slots: t, name: "ComboboxOption" });
  };
} });
function yn(e, t, l) {
  Fe.isServer || ne((n) => {
    window.addEventListener(e, t, l), n(() => window.removeEventListener(e, t, l));
  });
}
var me = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(me || {});
function Ot() {
  let e = k(0);
  return yn("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Et(e, t, l, n) {
  Fe.isServer || ne((o) => {
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
let Ne = Object.assign(U({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: k(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: l, expose: n }) {
  let o = k(null);
  n({ el: o, $el: o });
  let s = S(() => he(o)), i = k(!1);
  H(() => i.value = !0), se(() => i.value = !1), wn({ ownerDocument: s }, S(() => i.value && Boolean(e.features & 16)));
  let u = Vn({ ownerDocument: s, container: o, initialFocus: S(() => e.initialFocus) }, S(() => i.value && Boolean(e.features & 2)));
  kn({ ownerDocument: s, container: o, containers: e.containers, previousActiveElement: u }, S(() => i.value && Boolean(e.features & 8)));
  let c = Ot();
  function f(y) {
    let V = P(o);
    V && ((x) => x())(() => {
      Q(c.value, { [me.Forwards]: () => {
        ve(V, ae.First, { skipElements: [y.relatedTarget] });
      }, [me.Backwards]: () => {
        ve(V, ae.Last, { skipElements: [y.relatedTarget] });
      } });
    });
  }
  let v = k(!1);
  function d(y) {
    y.key === "Tab" && (v.value = !0, requestAnimationFrame(() => {
      v.value = !1;
    }));
  }
  function g(y) {
    if (!i.value)
      return;
    let V = ho(e.containers);
    P(o) instanceof HTMLElement && V.add(P(o));
    let x = y.relatedTarget;
    x instanceof HTMLElement && x.dataset.headlessuiFocusGuard !== "true" && (go(V, x) || (v.value ? ve(P(o), Q(c.value, { [me.Forwards]: () => ae.Next, [me.Backwards]: () => ae.Previous }) | ae.WrapAround, { relativeTo: y.target }) : y.target instanceof HTMLElement && Le(y.target)));
  }
  return () => {
    let y = {}, V = { ref: o, onKeydown: d, onFocusout: g }, { features: x, initialFocus: w, containers: $, ..._ } = e;
    return J(B, [Boolean(x & 4) && J(Ve, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: xe.Focusable }), W({ ourProps: V, theirProps: { ...t, ..._ }, slot: y, attrs: t, slots: l, name: "FocusTrap" }), Boolean(x & 4) && J(Ve, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: xe.Focusable })]);
  };
} }), { features: bo }), Pe = [];
if (typeof window < "u" && typeof document < "u") {
  let e = function(t) {
    t.target instanceof HTMLElement && t.target !== document.body && Pe[0] !== t.target && (Pe.unshift(t.target), Pe = Pe.filter((l) => l != null && l.isConnected), Pe.splice(10));
  };
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
}
function xn(e) {
  let t = k(Pe.slice());
  return K([e], ([l], [n]) => {
    n === !0 && l === !1 ? mo(() => {
      t.value.splice(0);
    }) : n === !1 && l === !0 && (t.value = Pe.slice());
  }, { flush: "post" }), () => {
    var l;
    return (l = t.value.find((n) => n != null && n.isConnected)) != null ? l : null;
  };
}
function wn({ ownerDocument: e }, t) {
  let l = xn(t);
  H(() => {
    ne(() => {
      var n, o;
      t.value || ((n = e.value) == null ? void 0 : n.activeElement) === ((o = e.value) == null ? void 0 : o.body) && Le(l());
    }, { flush: "post" });
  }), se(() => {
    Le(l());
  });
}
function Vn({ ownerDocument: e, container: t, initialFocus: l }, n) {
  let o = k(null), s = k(!1);
  return H(() => s.value = !0), se(() => s.value = !1), H(() => {
    K([t, l, n], (i, u) => {
      if (i.every((f, v) => (u == null ? void 0 : u[v]) === f) || !n.value)
        return;
      let c = P(t);
      c && mo(() => {
        var f, v;
        if (!s.value)
          return;
        let d = P(l), g = (f = e.value) == null ? void 0 : f.activeElement;
        if (d) {
          if (d === g) {
            o.value = g;
            return;
          }
        } else if (c.contains(g)) {
          o.value = g;
          return;
        }
        d ? Le(d) : ve(c, ae.First | ae.NoScroll) === Te.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), o.value = (v = e.value) == null ? void 0 : v.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), o;
}
function kn({ ownerDocument: e, container: t, containers: l, previousActiveElement: n }, o) {
  var s;
  Et((s = e.value) == null ? void 0 : s.defaultView, "focus", (i) => {
    if (!o.value)
      return;
    let u = ho(l);
    P(t) instanceof HTMLElement && u.add(P(t));
    let c = n.value;
    if (!c)
      return;
    let f = i.target;
    f && f instanceof HTMLElement ? go(u, f) ? (n.value = f, Le(f)) : (i.preventDefault(), i.stopPropagation(), Le(c)) : Le(n.value);
  }, !0);
}
function go(e, t) {
  for (let l of e)
    if (l.contains(t))
      return !0;
  return !1;
}
let pt = /* @__PURE__ */ new Map(), Ae = /* @__PURE__ */ new Map();
function Wt(e, t = k(!0)) {
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
      let u = (i = Ae.get(o)) != null ? i : 1;
      if (u === 1 ? Ae.delete(o) : Ae.set(o, u - 1), u !== 1)
        return;
      let c = pt.get(o);
      c && (c["aria-hidden"] === null ? o.removeAttribute("aria-hidden") : o.setAttribute("aria-hidden", c["aria-hidden"]), o.inert = c.inert, pt.delete(o));
    });
    let s = (n = Ae.get(o)) != null ? n : 0;
    Ae.set(o, s + 1), s === 0 && (pt.set(o, { "aria-hidden": o.getAttribute("aria-hidden"), inert: o.inert }), o.setAttribute("aria-hidden", "true"), o.inert = !0);
  });
}
let yo = Symbol("ForcePortalRootContext");
function $n() {
  return re(yo, !1);
}
let vt = U({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: l }) {
  return ie(yo, e.force), () => {
    let { force: n, ...o } = e;
    return W({ theirProps: o, ourProps: {}, slot: {}, slots: t, attrs: l, name: "ForcePortalRoot" });
  };
} });
function _n(e) {
  let t = he(e);
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
let xo = U({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: l }) {
  let n = k(null), o = S(() => he(n)), s = $n(), i = re(wo, null), u = k(s === !0 || i == null ? _n(n.value) : i.resolveTarget());
  return ne(() => {
    s || i != null && (u.value = i.resolveTarget());
  }), se(() => {
    var c, f;
    let v = (c = o.value) == null ? void 0 : c.getElementById("headlessui-portal-root");
    v && u.value === v && u.value.children.length <= 0 && ((f = u.value.parentElement) == null || f.removeChild(u.value));
  }), () => {
    if (u.value === null)
      return null;
    let c = { ref: n, "data-headlessui-portal": "" };
    return J(Ze, { to: u.value }, W({ ourProps: c, theirProps: e, slot: {}, attrs: l, slots: t, name: "Portal" }));
  };
} }), wo = Symbol("PortalGroupContext"), Cn = U({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: l }) {
  let n = Yo({ resolveTarget() {
    return e.target;
  } });
  return ie(wo, n), () => {
    let { target: o, ...s } = e;
    return W({ theirProps: s, ourProps: {}, slot: {}, attrs: t, slots: l, name: "PortalGroup" });
  };
} }), Vo = Symbol("StackContext");
var mt = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(mt || {});
function Sn() {
  return re(Vo, () => {
  });
}
function Pn({ type: e, enabled: t, element: l, onUpdate: n }) {
  let o = Sn();
  function s(...i) {
    n == null || n(...i), o(...i);
  }
  H(() => {
    K(t, (i, u) => {
      i ? s(0, e, l) : u === !0 && s(1, e, l);
    }, { immediate: !0, flush: "sync" });
  }), se(() => {
    t.value && s(1, e, l);
  }), ie(Vo, s);
}
let ko = Symbol("DescriptionContext");
function On() {
  let e = re(ko, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function Xe({ slot: e = k({}), name: t = "Description", props: l = {} } = {}) {
  let n = k([]);
  function o(s) {
    return n.value.push(s), () => {
      let i = n.value.indexOf(s);
      i !== -1 && n.value.splice(i, 1);
    };
  }
  return ie(ko, { register: o, slot: e, name: t, props: l }), S(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
let En = U({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${oe()}` } }, setup(e, { attrs: t, slots: l }) {
  let n = On();
  return H(() => se(n.register(e.id))), () => {
    let { name: o = "Description", slot: s = k({}), props: i = {} } = n, { id: u, ...c } = e, f = { ...Object.entries(i).reduce((v, [d, g]) => Object.assign(v, { [d]: m(g) }), {}), id: u };
    return W({ ourProps: f, theirProps: c, slot: s.value, attrs: t, slots: l, name: o });
  };
} });
function Ln(e) {
  let t = eo(e.getSnapshot());
  return se(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function et() {
  let e = [], t = { addEventListener(l, n, o, s) {
    return l.addEventListener(n, o, s), t.add(() => l.removeEventListener(n, o, s));
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
    let s = l.style.getPropertyValue(n);
    return Object.assign(l.style, { [n]: o }), this.add(() => {
      Object.assign(l.style, { [n]: s });
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
function Tn(e, t) {
  let l = e(), n = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return l;
  }, subscribe(o) {
    return n.add(o), () => n.delete(o);
  }, dispatch(o, ...s) {
    let i = t[o].call(l, ...s);
    i && (l = i, n.forEach((u) => u()));
  } };
}
function Bn() {
  let e;
  return { before({ doc: t }) {
    var l;
    let n = t.documentElement;
    e = ((l = t.defaultView) != null ? l : window).innerWidth - n.clientWidth;
  }, after({ doc: t, d: l }) {
    let n = t.documentElement, o = n.clientWidth - n.offsetWidth, s = e - o;
    l.style(n, "paddingRight", `${s}px`);
  } };
}
function jn() {
  if (!fo())
    return {};
  let e;
  return { before() {
    e = window.pageYOffset;
  }, after({ doc: t, d: l, meta: n }) {
    function o(i) {
      return n.containers.flatMap((u) => u()).some((u) => u.contains(i));
    }
    l.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
    let s = null;
    l.addEventListener(t, "click", (i) => {
      if (i.target instanceof HTMLElement)
        try {
          let u = i.target.closest("a");
          if (!u)
            return;
          let { hash: c } = new URL(u.href), f = t.querySelector(c);
          f && !o(f) && (s = f);
        } catch {
        }
    }, !0), l.addEventListener(t, "touchmove", (i) => {
      i.target instanceof HTMLElement && !o(i.target) && i.preventDefault();
    }, { passive: !1 }), l.add(() => {
      window.scrollTo(0, window.pageYOffset + e), s && s.isConnected && (s.scrollIntoView({ block: "nearest" }), s = null);
    });
  } };
}
function Dn() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function Nn(e) {
  let t = {};
  for (let l of e)
    Object.assign(t, l(t));
  return t;
}
let Oe = Tn(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var l;
  let n = (l = this.get(e)) != null ? l : { doc: e, count: 0, d: et(), meta: /* @__PURE__ */ new Set() };
  return n.count++, n.meta.add(t), this.set(e, n), this;
}, POP(e, t) {
  let l = this.get(e);
  return l && (l.count--, l.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: l }) {
  let n = { doc: e, d: t, meta: Nn(l) }, o = [jn(), Bn(), Dn()];
  o.forEach(({ before: s }) => s == null ? void 0 : s(n)), o.forEach(({ after: s }) => s == null ? void 0 : s(n));
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
function An(e, t, l) {
  let n = Ln(Oe), o = S(() => {
    let s = e.value ? n.value.get(e.value) : void 0;
    return s ? s.count > 0 : !1;
  });
  return K([e, t], ([s, i], [u], c) => {
    if (!s || !i)
      return;
    Oe.dispatch("PUSH", s, l);
    let f = !1;
    c(() => {
      f || (Oe.dispatch("POP", u ?? s, l), f = !0);
    });
  }, { immediate: !0 }), o;
}
var Mn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Mn || {});
let ht = Symbol("DialogContext");
function ze(e) {
  let t = re(ht, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, ze), l;
  }
  return t;
}
let We = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", tt = U({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: We }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${oe()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: l, slots: n, expose: o }) {
  var s;
  let i = k(!1);
  H(() => {
    i.value = !0;
  });
  let u = k(0), c = Be(), f = S(() => e.open === We && c !== null ? (c.value & Y.Open) === Y.Open : e.open), v = k(null), d = k(null), g = S(() => he(v));
  if (o({ el: v, $el: v }), !(e.open !== We || c !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof f.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${f.value === We ? void 0 : e.open}`);
  let y = S(() => i.value && f.value ? 0 : 1), V = S(() => y.value === 0), x = S(() => u.value > 1), w = re(ht, null) !== null, $ = S(() => x.value ? "parent" : "leaf"), _ = S(() => c !== null ? (c.value & Y.Closing) === Y.Closing : !1), O = S(() => w || _.value ? !1 : V.value), D = S(() => {
    var q, G, le;
    return (le = Array.from((G = (q = g.value) == null ? void 0 : q.querySelectorAll("body > *")) != null ? G : []).find((pe) => pe.id === "headlessui-portal-root" ? !1 : pe.contains(P(d)) && pe instanceof HTMLElement)) != null ? le : null;
  });
  Wt(D, O);
  let R = S(() => x.value ? !0 : V.value), L = S(() => {
    var q, G, le;
    return (le = Array.from((G = (q = g.value) == null ? void 0 : q.querySelectorAll("[data-headlessui-portal]")) != null ? G : []).find((pe) => pe.contains(P(d)) && pe instanceof HTMLElement)) != null ? le : null;
  });
  Wt(L, R), Pn({ type: "Dialog", enabled: S(() => y.value === 0), element: v, onUpdate: (q, G) => {
    if (G === "Dialog")
      return Q(q, { [mt.Add]: () => u.value += 1, [mt.Remove]: () => u.value -= 1 });
  } });
  let M = Xe({ name: "DialogDescription", slot: S(() => ({ open: f.value })) }), A = k(null), j = { titleId: A, panelRef: k(null), dialogState: y, setTitleId(q) {
    A.value !== q && (A.value = q);
  }, close() {
    t("close", !1);
  } };
  ie(ht, j);
  function F() {
    var q, G, le;
    return [...Array.from((G = (q = g.value) == null ? void 0 : q.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? G : []).filter((pe) => !(pe === document.body || pe === document.head || !(pe instanceof HTMLElement) || pe.contains(P(d)) || j.panelRef.value && pe.contains(j.panelRef.value))), (le = j.panelRef.value) != null ? le : v.value];
  }
  let ee = S(() => !(!V.value || x.value));
  Ct(() => F(), (q, G) => {
    j.close(), ke(() => G == null ? void 0 : G.focus());
  }, ee);
  let ye = S(() => !(x.value || y.value !== 0));
  Et((s = g.value) == null ? void 0 : s.defaultView, "keydown", (q) => {
    ye.value && (q.defaultPrevented || q.key === z.Escape && (q.preventDefault(), q.stopPropagation(), j.close()));
  });
  let fe = S(() => !(_.value || y.value !== 0 || w));
  return An(g, fe, (q) => {
    var G;
    return { containers: [...(G = q.containers) != null ? G : [], F] };
  }), ne((q) => {
    if (y.value !== 0)
      return;
    let G = P(v);
    if (!G)
      return;
    let le = new ResizeObserver((pe) => {
      for (let Ue of pe) {
        let Ce = Ue.target.getBoundingClientRect();
        Ce.x === 0 && Ce.y === 0 && Ce.width === 0 && Ce.height === 0 && j.close();
      }
    });
    le.observe(G), q(() => le.disconnect());
  }), () => {
    let { id: q, open: G, initialFocus: le, ...pe } = e, Ue = { ...l, ref: v, id: q, role: "dialog", "aria-modal": y.value === 0 ? !0 : void 0, "aria-labelledby": A.value, "aria-describedby": M.value }, Ce = { open: y.value === 0 };
    return J(vt, { force: !0 }, () => [J(xo, () => J(Cn, { target: v.value }, () => J(vt, { force: !1 }, () => J(Ne, { initialFocus: le, containers: F, features: V.value ? Q($.value, { parent: Ne.features.RestoreFocus, leaf: Ne.features.All & ~Ne.features.FocusLock }) : Ne.features.None }, () => W({ ourProps: Ue, theirProps: pe, slot: Ce, attrs: l, slots: n, visible: y.value === 0, features: de.RenderStrategy | de.Static, name: "Dialog" }))))), J(Ve, { features: xe.Hidden, ref: d })]);
  };
} });
U({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${oe()}` } }, setup(e, { attrs: t, slots: l }) {
  let n = ze("DialogOverlay");
  function o(s) {
    s.target === s.currentTarget && (s.preventDefault(), s.stopPropagation(), n.close());
  }
  return () => {
    let { id: s, ...i } = e;
    return W({ ourProps: { id: s, "aria-hidden": !0, onClick: o }, theirProps: i, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogOverlay" });
  };
} });
U({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${oe()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: l, expose: n }) {
  let o = ze("DialogBackdrop"), s = k(null);
  return n({ el: s, $el: s }), H(() => {
    if (o.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: i, ...u } = e, c = { id: i, ref: s, "aria-hidden": !0 };
    return J(vt, { force: !0 }, () => J(xo, () => W({ ourProps: c, theirProps: { ...t, ...u }, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogBackdrop" })));
  };
} });
let ot = U({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${oe()}` } }, setup(e, { attrs: t, slots: l, expose: n }) {
  let o = ze("DialogPanel");
  n({ el: o.panelRef, $el: o.panelRef });
  function s(i) {
    i.stopPropagation();
  }
  return () => {
    let { id: i, ...u } = e, c = { id: i, ref: o.panelRef, onClick: s };
    return W({ ourProps: c, theirProps: u, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogPanel" });
  };
} }), $o = U({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${oe()}` } }, setup(e, { attrs: t, slots: l }) {
  let n = ze("DialogTitle");
  return H(() => {
    n.setTitleId(e.id), se(() => n.setTitleId(null));
  }), () => {
    let { id: o, ...s } = e;
    return W({ ourProps: { id: o }, theirProps: s, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogTitle" });
  };
} });
var In = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(In || {});
let _o = Symbol("DisclosureContext");
function Lt(e) {
  let t = re(_o, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, Lt), l;
  }
  return t;
}
let Co = Symbol("DisclosurePanelContext");
function Rn() {
  return re(Co, null);
}
let Gt = U({ name: "Disclosure", props: { as: { type: [Object, String], default: "template" }, defaultOpen: { type: [Boolean], default: !1 } }, setup(e, { slots: t, attrs: l }) {
  let n = k(e.defaultOpen ? 0 : 1), o = k(null), s = k(null), i = { buttonId: k(null), panelId: k(null), disclosureState: n, panel: o, button: s, toggleDisclosure() {
    n.value = Q(n.value, { [0]: 1, [1]: 0 });
  }, closeDisclosure() {
    n.value !== 1 && (n.value = 1);
  }, close(u) {
    i.closeDisclosure();
    let c = (() => u ? u instanceof HTMLElement ? u : u.value instanceof HTMLElement ? P(u) : P(i.button) : P(i.button))();
    c == null || c.focus();
  } };
  return ie(_o, i), Qe(S(() => Q(n.value, { [0]: Y.Open, [1]: Y.Closed }))), () => {
    let { defaultOpen: u, ...c } = e, f = { open: n.value === 0, close: i.close };
    return W({ theirProps: c, ourProps: {}, slot: f, slots: t, attrs: l, name: "Disclosure" });
  };
} }), Zt = U({ name: "DisclosureButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-disclosure-button-${oe()}` } }, setup(e, { attrs: t, slots: l, expose: n }) {
  let o = Lt("DisclosureButton");
  H(() => {
    o.buttonId.value = e.id;
  }), se(() => {
    o.buttonId.value = null;
  });
  let s = Rn(), i = S(() => s === null ? !1 : s.value === o.panelId.value), u = k(null);
  n({ el: u, $el: u }), i.value || ne(() => {
    o.button.value = u.value;
  });
  let c = Ye(S(() => ({ as: e.as, type: t.type })), u);
  function f() {
    var g;
    e.disabled || (i.value ? (o.toggleDisclosure(), (g = P(o.button)) == null || g.focus()) : o.toggleDisclosure());
  }
  function v(g) {
    var y;
    if (!e.disabled)
      if (i.value)
        switch (g.key) {
          case z.Space:
          case z.Enter:
            g.preventDefault(), g.stopPropagation(), o.toggleDisclosure(), (y = P(o.button)) == null || y.focus();
            break;
        }
      else
        switch (g.key) {
          case z.Space:
          case z.Enter:
            g.preventDefault(), g.stopPropagation(), o.toggleDisclosure();
            break;
        }
  }
  function d(g) {
    switch (g.key) {
      case z.Space:
        g.preventDefault();
        break;
    }
  }
  return () => {
    let g = { open: o.disclosureState.value === 0 }, { id: y, ...V } = e, x = i.value ? { ref: u, type: c.value, onClick: f, onKeydown: v } : { id: y, ref: u, type: c.value, "aria-expanded": e.disabled ? void 0 : o.disclosureState.value === 0, "aria-controls": P(o.panel) ? o.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onClick: f, onKeydown: v, onKeyup: d };
    return W({ ourProps: x, theirProps: V, slot: g, attrs: t, slots: l, name: "DisclosureButton" });
  };
} }), Kt = U({ name: "DisclosurePanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-disclosure-panel-${oe()}` } }, setup(e, { attrs: t, slots: l, expose: n }) {
  let o = Lt("DisclosurePanel");
  H(() => {
    o.panelId.value = e.id;
  }), se(() => {
    o.panelId.value = null;
  }), n({ el: o.panel, $el: o.panel }), ie(Co, o.panelId);
  let s = Be(), i = S(() => s !== null ? (s.value & Y.Open) === Y.Open : o.disclosureState.value === 0);
  return () => {
    let u = { open: o.disclosureState.value === 0, close: o.close }, { id: c, ...f } = e, v = { id: c, ref: o.panel };
    return W({ ourProps: v, theirProps: f, slot: u, attrs: t, slots: l, features: de.RenderStrategy | de.Static, visible: i.value, name: "DisclosurePanel" });
  };
} });
var Fn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Fn || {});
let So = Symbol("PopoverContext");
function lt(e) {
  let t = re(So, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <${nt.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, lt), l;
  }
  return t;
}
let Po = Symbol("PopoverGroupContext");
function Oo() {
  return re(Po, null);
}
let Eo = Symbol("PopoverPanelContext");
function zn() {
  return re(Eo, null);
}
let nt = U({ name: "Popover", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: l, expose: n }) {
  var o;
  let s = k(null);
  n({ el: s, $el: s });
  let i = k(1), u = k(null), c = k(null), f = k(null), v = k(null), d = S(() => he(s)), g = S(() => {
    var _, O;
    if (!P(u) || !P(v))
      return !1;
    for (let F of document.querySelectorAll("body > *"))
      if (Number(F == null ? void 0 : F.contains(P(u))) ^ Number(F == null ? void 0 : F.contains(P(v))))
        return !0;
    let D = Je(), R = D.indexOf(P(u)), L = (R + D.length - 1) % D.length, M = (R + 1) % D.length, A = D[L], j = D[M];
    return !((_ = P(v)) != null && _.contains(A)) && !((O = P(v)) != null && O.contains(j));
  }), y = { popoverState: i, buttonId: k(null), panelId: k(null), panel: v, button: u, isPortalled: g, beforePanelSentinel: c, afterPanelSentinel: f, togglePopover() {
    i.value = Q(i.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    i.value !== 1 && (i.value = 1);
  }, close(_) {
    y.closePopover();
    let O = (() => _ ? _ instanceof HTMLElement ? _ : _.value instanceof HTMLElement ? P(_) : P(y.button) : P(y.button))();
    O == null || O.focus();
  } };
  ie(So, y), Qe(S(() => Q(i.value, { [0]: Y.Open, [1]: Y.Closed })));
  let V = { buttonId: y.buttonId, panelId: y.panelId, close() {
    y.closePopover();
  } }, x = Oo(), w = x == null ? void 0 : x.registerPopover;
  function $() {
    var _, O, D, R;
    return (R = x == null ? void 0 : x.isFocusWithinPopoverGroup()) != null ? R : ((_ = d.value) == null ? void 0 : _.activeElement) && (((O = P(u)) == null ? void 0 : O.contains(d.value.activeElement)) || ((D = P(v)) == null ? void 0 : D.contains(d.value.activeElement)));
  }
  return ne(() => w == null ? void 0 : w(V)), Et((o = d.value) == null ? void 0 : o.defaultView, "focus", (_) => {
    var O, D;
    i.value === 0 && ($() || u && v && _.target !== window && ((O = P(y.beforePanelSentinel)) != null && O.contains(_.target) || (D = P(y.afterPanelSentinel)) != null && D.contains(_.target) || y.closePopover()));
  }, !0), Ct([u, v], (_, O) => {
    var D;
    y.closePopover(), io(O, $t.Loose) || (_.preventDefault(), (D = P(u)) == null || D.focus());
  }, S(() => i.value === 0)), () => {
    let _ = { open: i.value === 0, close: y.close };
    return W({ theirProps: e, ourProps: { ref: s }, slot: _, slots: t, attrs: l, name: "Popover" });
  };
} }), Tt = U({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-popover-button-${oe()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: l, expose: n }) {
  let o = lt("PopoverButton"), s = S(() => he(o.button));
  n({ el: o.button, $el: o.button }), H(() => {
    o.buttonId.value = e.id;
  }), se(() => {
    o.buttonId.value = null;
  });
  let i = Oo(), u = i == null ? void 0 : i.closeOthers, c = zn(), f = S(() => c === null ? !1 : c.value === o.panelId.value), v = k(null), d = `headlessui-focus-sentinel-${oe()}`;
  f.value || ne(() => {
    o.button.value = v.value;
  });
  let g = Ye(S(() => ({ as: e.as, type: t.type })), v);
  function y($) {
    var _, O, D, R, L;
    if (f.value) {
      if (o.popoverState.value === 1)
        return;
      switch ($.key) {
        case z.Space:
        case z.Enter:
          $.preventDefault(), (O = (_ = $.target).click) == null || O.call(_), o.closePopover(), (D = P(o.button)) == null || D.focus();
          break;
      }
    } else
      switch ($.key) {
        case z.Space:
        case z.Enter:
          $.preventDefault(), $.stopPropagation(), o.popoverState.value === 1 && (u == null || u(o.buttonId.value)), o.togglePopover();
          break;
        case z.Escape:
          if (o.popoverState.value !== 0)
            return u == null ? void 0 : u(o.buttonId.value);
          if (!P(o.button) || (R = s.value) != null && R.activeElement && !((L = P(o.button)) != null && L.contains(s.value.activeElement)))
            return;
          $.preventDefault(), $.stopPropagation(), o.closePopover();
          break;
      }
  }
  function V($) {
    f.value || $.key === z.Space && $.preventDefault();
  }
  function x($) {
    var _, O;
    e.disabled || (f.value ? (o.closePopover(), (_ = P(o.button)) == null || _.focus()) : ($.preventDefault(), $.stopPropagation(), o.popoverState.value === 1 && (u == null || u(o.buttonId.value)), o.togglePopover(), (O = P(o.button)) == null || O.focus()));
  }
  function w($) {
    $.preventDefault(), $.stopPropagation();
  }
  return () => {
    let $ = o.popoverState.value === 0, _ = { open: $ }, { id: O, ...D } = e, R = f.value ? { ref: v, type: g.value, onKeydown: y, onClick: x } : { ref: v, id: O, type: g.value, "aria-expanded": e.disabled ? void 0 : o.popoverState.value === 0, "aria-controls": P(o.panel) ? o.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onKeydown: y, onKeyup: V, onClick: x, onMousedown: w }, L = Ot();
    function M() {
      let A = P(o.panel);
      if (!A)
        return;
      function j() {
        Q(L.value, { [me.Forwards]: () => ve(A, ae.First), [me.Backwards]: () => ve(A, ae.Last) }) === Te.Error && ve(Je().filter((F) => F.dataset.headlessuiFocusGuard !== "true"), Q(L.value, { [me.Forwards]: ae.Next, [me.Backwards]: ae.Previous }), { relativeTo: P(o.button) });
      }
      j();
    }
    return J(B, [W({ ourProps: R, theirProps: { ...t, ...D }, slot: _, attrs: t, slots: l, name: "PopoverButton" }), $ && !f.value && o.isPortalled.value && J(Ve, { id: d, features: xe.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: M })]);
  };
} });
U({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(e, { attrs: t, slots: l }) {
  let n = lt("PopoverOverlay"), o = `headlessui-popover-overlay-${oe()}`, s = Be(), i = S(() => s !== null ? (s.value & Y.Open) === Y.Open : n.popoverState.value === 0);
  function u() {
    n.closePopover();
  }
  return () => {
    let c = { open: n.popoverState.value === 0 };
    return W({ ourProps: { id: o, "aria-hidden": !0, onClick: u }, theirProps: e, slot: c, attrs: t, slots: l, features: de.RenderStrategy | de.Static, visible: i.value, name: "PopoverOverlay" });
  };
} });
let Bt = U({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-popover-panel-${oe()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: l, expose: n }) {
  let { focus: o } = e, s = lt("PopoverPanel"), i = S(() => he(s.panel)), u = `headlessui-focus-sentinel-before-${oe()}`, c = `headlessui-focus-sentinel-after-${oe()}`;
  n({ el: s.panel, $el: s.panel }), H(() => {
    s.panelId.value = e.id;
  }), se(() => {
    s.panelId.value = null;
  }), ie(Eo, s.panelId), ne(() => {
    var w, $;
    if (!o || s.popoverState.value !== 0 || !s.panel)
      return;
    let _ = (w = i.value) == null ? void 0 : w.activeElement;
    ($ = P(s.panel)) != null && $.contains(_) || ve(P(s.panel), ae.First);
  });
  let f = Be(), v = S(() => f !== null ? (f.value & Y.Open) === Y.Open : s.popoverState.value === 0);
  function d(w) {
    var $, _;
    switch (w.key) {
      case z.Escape:
        if (s.popoverState.value !== 0 || !P(s.panel) || i.value && !(($ = P(s.panel)) != null && $.contains(i.value.activeElement)))
          return;
        w.preventDefault(), w.stopPropagation(), s.closePopover(), (_ = P(s.button)) == null || _.focus();
        break;
    }
  }
  function g(w) {
    var $, _, O, D, R;
    let L = w.relatedTarget;
    L && P(s.panel) && (($ = P(s.panel)) != null && $.contains(L) || (s.closePopover(), ((O = (_ = P(s.beforePanelSentinel)) == null ? void 0 : _.contains) != null && O.call(_, L) || (R = (D = P(s.afterPanelSentinel)) == null ? void 0 : D.contains) != null && R.call(D, L)) && L.focus({ preventScroll: !0 })));
  }
  let y = Ot();
  function V() {
    let w = P(s.panel);
    if (!w)
      return;
    function $() {
      Q(y.value, { [me.Forwards]: () => {
        var _;
        ve(w, ae.First) === Te.Error && ((_ = P(s.afterPanelSentinel)) == null || _.focus());
      }, [me.Backwards]: () => {
        var _;
        (_ = P(s.button)) == null || _.focus({ preventScroll: !0 });
      } });
    }
    $();
  }
  function x() {
    let w = P(s.panel);
    if (!w)
      return;
    function $() {
      Q(y.value, { [me.Forwards]: () => {
        let _ = P(s.button), O = P(s.panel);
        if (!_)
          return;
        let D = Je(), R = D.indexOf(_), L = D.slice(0, R + 1), M = [...D.slice(R + 1), ...L];
        for (let A of M.slice())
          if (A.dataset.headlessuiFocusGuard === "true" || O != null && O.contains(A)) {
            let j = M.indexOf(A);
            j !== -1 && M.splice(j, 1);
          }
        ve(M, ae.First, { sorted: !1 });
      }, [me.Backwards]: () => {
        var _;
        ve(w, ae.Previous) === Te.Error && ((_ = P(s.button)) == null || _.focus());
      } });
    }
    $();
  }
  return () => {
    let w = { open: s.popoverState.value === 0, close: s.close }, { id: $, focus: _, ...O } = e, D = { ref: s.panel, id: $, onKeydown: d, onFocusout: o && s.popoverState.value === 0 ? g : void 0, tabIndex: -1 };
    return W({ ourProps: D, theirProps: { ...t, ...O }, attrs: t, slot: w, slots: { ...l, default: (...R) => {
      var L;
      return [J(B, [v.value && s.isPortalled.value && J(Ve, { id: u, ref: s.beforePanelSentinel, features: xe.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: V }), (L = l.default) == null ? void 0 : L.call(l, ...R), v.value && s.isPortalled.value && J(Ve, { id: c, ref: s.afterPanelSentinel, features: xe.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: x })])];
    } }, features: de.RenderStrategy | de.Static, visible: v.value, name: "PopoverPanel" });
  };
} });
U({ name: "PopoverGroup", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: l, expose: n }) {
  let o = k(null), s = eo([]), i = S(() => he(o));
  n({ el: o, $el: o });
  function u(d) {
    let g = s.value.indexOf(d);
    g !== -1 && s.value.splice(g, 1);
  }
  function c(d) {
    return s.value.push(d), () => {
      u(d);
    };
  }
  function f() {
    var d;
    let g = i.value;
    if (!g)
      return !1;
    let y = g.activeElement;
    return (d = P(o)) != null && d.contains(y) ? !0 : s.value.some((V) => {
      var x, w;
      return ((x = g.getElementById(V.buttonId.value)) == null ? void 0 : x.contains(y)) || ((w = g.getElementById(V.panelId.value)) == null ? void 0 : w.contains(y));
    });
  }
  function v(d) {
    for (let g of s.value)
      g.buttonId.value !== d && g.close();
  }
  return ie(Po, { registerPopover: c, unregisterPopover: u, isFocusWithinPopoverGroup: f, closeOthers: v }), () => W({ ourProps: { ref: o }, theirProps: e, slot: {}, attrs: t, slots: l, name: "PopoverGroup" });
} });
let Lo = Symbol("LabelContext");
function To() {
  let e = re(Lo, null);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, To), t;
  }
  return e;
}
function jt({ slot: e = {}, name: t = "Label", props: l = {} } = {}) {
  let n = k([]);
  function o(s) {
    return n.value.push(s), () => {
      let i = n.value.indexOf(s);
      i !== -1 && n.value.splice(i, 1);
    };
  }
  return ie(Lo, { register: o, slot: e, name: t, props: l }), S(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
let Bo = U({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-label-${oe()}` } }, setup(e, { slots: t, attrs: l }) {
  let n = To();
  return H(() => se(n.register(e.id))), () => {
    let { name: o = "Label", slot: s = {}, props: i = {} } = n, { id: u, passive: c, ...f } = e, v = { ...Object.entries(i).reduce((d, [g, y]) => Object.assign(d, { [g]: m(y) }), {}), id: u };
    return c && (delete v.onClick, delete v.htmlFor, delete f.onClick), W({ ourProps: v, theirProps: f, slot: s, attrs: l, slots: t, name: o });
  };
} });
function Hn(e, t) {
  return e === t;
}
let jo = Symbol("RadioGroupContext");
function Do(e) {
  let t = re(jo, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, Do), l;
  }
  return t;
}
let qn = U({ name: "RadioGroup", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "div" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => Hn }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-radiogroup-${oe()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: l, slots: n, expose: o }) {
  let s = k(null), i = k([]), u = jt({ name: "RadioGroupLabel" }), c = Xe({ name: "RadioGroupDescription" });
  o({ el: s, $el: s });
  let [f, v] = Pt(S(() => e.modelValue), (V) => t("update:modelValue", V), S(() => e.defaultValue)), d = { options: i, value: f, disabled: S(() => e.disabled), firstOption: S(() => i.value.find((V) => !V.propsRef.disabled)), containsCheckedOption: S(() => i.value.some((V) => d.compare(Z(V.propsRef.value), Z(e.modelValue)))), compare(V, x) {
    if (typeof e.by == "string") {
      let w = e.by;
      return (V == null ? void 0 : V[w]) === (x == null ? void 0 : x[w]);
    }
    return e.by(V, x);
  }, change(V) {
    var x;
    if (e.disabled || d.compare(Z(f.value), Z(V)))
      return !1;
    let w = (x = i.value.find(($) => d.compare(Z($.propsRef.value), Z(V)))) == null ? void 0 : x.propsRef;
    return w != null && w.disabled ? !1 : (v(V), !0);
  }, registerOption(V) {
    i.value.push(V), i.value = _t(i.value, (x) => x.element);
  }, unregisterOption(V) {
    let x = i.value.findIndex((w) => w.id === V);
    x !== -1 && i.value.splice(x, 1);
  } };
  ie(jo, d), ro({ container: S(() => P(s)), accept(V) {
    return V.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : V.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(V) {
    V.setAttribute("role", "none");
  } });
  function g(V) {
    if (!s.value || !s.value.contains(V.target))
      return;
    let x = i.value.filter((w) => w.propsRef.disabled === !1).map((w) => w.element);
    switch (V.key) {
      case z.Enter:
        co(V.currentTarget);
        break;
      case z.ArrowLeft:
      case z.ArrowUp:
        if (V.preventDefault(), V.stopPropagation(), ve(x, ae.Previous | ae.WrapAround) === Te.Success) {
          let w = i.value.find(($) => {
            var _;
            return $.element === ((_ = he(s)) == null ? void 0 : _.activeElement);
          });
          w && d.change(w.propsRef.value);
        }
        break;
      case z.ArrowRight:
      case z.ArrowDown:
        if (V.preventDefault(), V.stopPropagation(), ve(x, ae.Next | ae.WrapAround) === Te.Success) {
          let w = i.value.find(($) => {
            var _;
            return $.element === ((_ = he($.element)) == null ? void 0 : _.activeElement);
          });
          w && d.change(w.propsRef.value);
        }
        break;
      case z.Space:
        {
          V.preventDefault(), V.stopPropagation();
          let w = i.value.find(($) => {
            var _;
            return $.element === ((_ = he($.element)) == null ? void 0 : _.activeElement);
          });
          w && d.change(w.propsRef.value);
        }
        break;
    }
  }
  let y = S(() => {
    var V;
    return (V = P(s)) == null ? void 0 : V.closest("form");
  });
  return H(() => {
    K([y], () => {
      if (!y.value || e.defaultValue === void 0)
        return;
      function V() {
        d.change(e.defaultValue);
      }
      return y.value.addEventListener("reset", V), () => {
        var x;
        (x = y.value) == null || x.removeEventListener("reset", V);
      };
    }, { immediate: !0 });
  }), () => {
    let { disabled: V, name: x, id: w, ...$ } = e, _ = { ref: s, id: w, role: "radiogroup", "aria-labelledby": u.value, "aria-describedby": c.value, onKeydown: g };
    return J(B, [...x != null && f.value != null ? St({ [x]: f.value }).map(([O, D]) => J(Ve, kt({ features: xe.Hidden, key: O, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: O, value: D }))) : [], W({ ourProps: _, theirProps: { ...l, ...je($, ["modelValue", "defaultValue"]) }, slot: {}, attrs: l, slots: n, name: "RadioGroup" })]);
  };
} });
var Un = ((e) => (e[e.Empty = 1] = "Empty", e[e.Active = 2] = "Active", e))(Un || {});
let Wn = U({ name: "RadioGroupOption", props: { as: { type: [Object, String], default: "div" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-radiogroup-option-${oe()}` } }, setup(e, { attrs: t, slots: l, expose: n }) {
  let o = Do("RadioGroupOption"), s = jt({ name: "RadioGroupLabel" }), i = Xe({ name: "RadioGroupDescription" }), u = k(null), c = S(() => ({ value: e.value, disabled: e.disabled })), f = k(1);
  n({ el: u, $el: u }), H(() => o.registerOption({ id: e.id, element: u, propsRef: c })), se(() => o.unregisterOption(e.id));
  let v = S(() => {
    var $;
    return (($ = o.firstOption.value) == null ? void 0 : $.id) === e.id;
  }), d = S(() => o.disabled.value || e.disabled), g = S(() => o.compare(Z(o.value.value), Z(e.value))), y = S(() => d.value ? -1 : g.value || !o.containsCheckedOption.value && v.value ? 0 : -1);
  function V() {
    var $;
    o.change(e.value) && (f.value |= 2, ($ = u.value) == null || $.focus());
  }
  function x() {
    f.value |= 2;
  }
  function w() {
    f.value &= -3;
  }
  return () => {
    let { id: $, value: _, disabled: O, ...D } = e, R = { checked: g.value, disabled: d.value, active: Boolean(f.value & 2) }, L = { id: $, ref: u, role: "radio", "aria-checked": g.value ? "true" : "false", "aria-labelledby": s.value, "aria-describedby": i.value, "aria-disabled": d.value ? !0 : void 0, tabIndex: y.value, onClick: d.value ? void 0 : V, onFocus: d.value ? void 0 : x, onBlur: d.value ? void 0 : w };
    return W({ ourProps: L, theirProps: D, slot: R, attrs: t, slots: l, name: "RadioGroupOption" });
  };
} }), Qt = Bo, Gn = En, No = Symbol("GroupContext"), Zn = U({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: l }) {
  let n = k(null), o = jt({ name: "SwitchLabel", props: { htmlFor: S(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.id;
  }), onClick(i) {
    n.value && (i.currentTarget.tagName === "LABEL" && i.preventDefault(), n.value.click(), n.value.focus({ preventScroll: !0 }));
  } } }), s = Xe({ name: "SwitchDescription" });
  return ie(No, { switchRef: n, labelledby: o, describedby: s }), () => W({ theirProps: e, ourProps: {}, slot: {}, slots: t, attrs: l, name: "SwitchGroup" });
} }), Kn = U({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: !0 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-switch-${oe()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: l, slots: n, expose: o }) {
  let s = re(No, null), [i, u] = Pt(S(() => e.modelValue), (w) => t("update:modelValue", w), S(() => e.defaultChecked));
  function c() {
    u(!i.value);
  }
  let f = k(null), v = s === null ? f : s.switchRef, d = Ye(S(() => ({ as: e.as, type: l.type })), v);
  o({ el: v, $el: v });
  function g(w) {
    w.preventDefault(), c();
  }
  function y(w) {
    w.key === z.Space ? (w.preventDefault(), c()) : w.key === z.Enter && co(w.currentTarget);
  }
  function V(w) {
    w.preventDefault();
  }
  let x = S(() => {
    var w, $;
    return ($ = (w = P(v)) == null ? void 0 : w.closest) == null ? void 0 : $.call(w, "form");
  });
  return H(() => {
    K([x], () => {
      if (!x.value || e.defaultChecked === void 0)
        return;
      function w() {
        u(e.defaultChecked);
      }
      return x.value.addEventListener("reset", w), () => {
        var $;
        ($ = x.value) == null || $.removeEventListener("reset", w);
      };
    }, { immediate: !0 });
  }), () => {
    let { id: w, name: $, value: _, ...O } = e, D = { checked: i.value }, R = { id: w, ref: v, role: "switch", type: d.value, tabIndex: 0, "aria-checked": i.value, "aria-labelledby": s == null ? void 0 : s.labelledby.value, "aria-describedby": s == null ? void 0 : s.describedby.value, onClick: g, onKeyup: y, onKeypress: V };
    return J(B, [$ != null && i.value != null ? J(Ve, kt({ features: xe.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: i.value, name: $, value: _ })) : null, W({ ourProps: R, theirProps: { ...l, ...je(O, ["modelValue", "defaultChecked"]) }, slot: D, attrs: l, slots: n, name: "Switch" })]);
  };
} }), Qn = Bo;
function Yn(e) {
  let t = { called: !1 };
  return (...l) => {
    if (!t.called)
      return t.called = !0, e(...l);
  };
}
function ut(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Ge(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var bt = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(bt || {});
function Jn(e, t) {
  let l = et();
  if (!e)
    return l.dispose;
  let { transitionDuration: n, transitionDelay: o } = getComputedStyle(e), [s, i] = [n, o].map((u) => {
    let [c = 0] = u.split(",").filter(Boolean).map((f) => f.includes("ms") ? parseFloat(f) : parseFloat(f) * 1e3).sort((f, v) => v - f);
    return c;
  });
  return s !== 0 ? l.setTimeout(() => t("finished"), s + i) : t("finished"), l.add(() => t("cancelled")), l.dispose;
}
function Yt(e, t, l, n, o, s) {
  let i = et(), u = s !== void 0 ? Yn(s) : () => {
  };
  return Ge(e, ...o), ut(e, ...t, ...l), i.nextFrame(() => {
    Ge(e, ...l), ut(e, ...n), i.add(Jn(e, (c) => (Ge(e, ...n, ...t), ut(e, ...o), u(c))));
  }), i.add(() => Ge(e, ...t, ...l, ...n, ...o)), i.add(() => u("cancelled")), i.dispose;
}
function Se(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Dt = Symbol("TransitionContext");
var Xn = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Xn || {});
function ea() {
  return re(Dt, null) !== null;
}
function ta() {
  let e = re(Dt, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function oa() {
  let e = re(Nt, null);
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
  H(() => l.value = !0), se(() => l.value = !1);
  function n(s, i = $e.Hidden) {
    let u = t.value.findIndex(({ id: c }) => c === s);
    u !== -1 && (Q(i, { [$e.Unmount]() {
      t.value.splice(u, 1);
    }, [$e.Hidden]() {
      t.value[u].state = "hidden";
    } }), !at(t) && l.value && (e == null || e()));
  }
  function o(s) {
    let i = t.value.find(({ id: u }) => u === s);
    return i ? i.state !== "visible" && (i.state = "visible") : t.value.push({ id: s, state: "visible" }), () => n(s, $e.Unmount);
  }
  return { children: t, register: o, unregister: n };
}
let Mo = de.RenderStrategy, _e = U({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: l, slots: n, expose: o }) {
  let s = k(0);
  function i() {
    s.value |= Y.Opening, t("beforeEnter");
  }
  function u() {
    s.value &= ~Y.Opening, t("afterEnter");
  }
  function c() {
    s.value |= Y.Closing, t("beforeLeave");
  }
  function f() {
    s.value &= ~Y.Closing, t("afterLeave");
  }
  if (!ea() && Jl())
    return () => J(He, { ...e, onBeforeEnter: i, onAfterEnter: u, onBeforeLeave: c, onAfterLeave: f }, n);
  let v = k(null), d = k("visible"), g = S(() => e.unmount ? $e.Unmount : $e.Hidden);
  o({ el: v, $el: v });
  let { show: y, appear: V } = ta(), { register: x, unregister: w } = oa(), $ = { value: !0 }, _ = oe(), O = { value: !1 }, D = Ao(() => {
    !O.value && d.value !== "hidden" && (d.value = "hidden", w(_), f());
  });
  H(() => {
    let fe = x(_);
    se(fe);
  }), ne(() => {
    if (g.value === $e.Hidden && _) {
      if (y && d.value !== "visible") {
        d.value = "visible";
        return;
      }
      Q(d.value, { hidden: () => w(_), visible: () => x(_) });
    }
  });
  let R = Se(e.enter), L = Se(e.enterFrom), M = Se(e.enterTo), A = Se(e.entered), j = Se(e.leave), F = Se(e.leaveFrom), ee = Se(e.leaveTo);
  H(() => {
    ne(() => {
      if (d.value === "visible") {
        let fe = P(v);
        if (fe instanceof Comment && fe.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function ye(fe) {
    let q = $.value && !V.value, G = P(v);
    !G || !(G instanceof HTMLElement) || q || (O.value = !0, y.value && i(), y.value || c(), fe(y.value ? Yt(G, R, L, M, A, (le) => {
      O.value = !1, le === bt.Finished && u();
    }) : Yt(G, j, F, ee, A, (le) => {
      O.value = !1, le === bt.Finished && (at(D) || (d.value = "hidden", w(_), f()));
    })));
  }
  return H(() => {
    K([y], (fe, q, G) => {
      ye(G), $.value = !1;
    }, { immediate: !0 });
  }), ie(Nt, D), Qe(S(() => Q(d.value, { visible: Y.Open, hidden: Y.Closed }) | s.value)), () => {
    let { appear: fe, show: q, enter: G, enterFrom: le, enterTo: pe, entered: Ue, leave: Ce, leaveFrom: G1, leaveTo: Z1, ...Ft } = e, Go = { ref: v }, Zo = { ...Ft, ...V && y && Fe.isServer ? { class: E([l.class, Ft.class, ...R, ...L]) } : {} };
    return W({ theirProps: Zo, ourProps: Go, slot: {}, slots: n, attrs: l, features: Mo, visible: d.value === "visible", name: "TransitionChild" });
  };
} }), la = _e, He = U({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: l, slots: n }) {
  let o = Be(), s = S(() => e.show === null && o !== null ? (o.value & Y.Open) === Y.Open : e.show);
  ne(() => {
    if (![!0, !1].includes(s.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let i = k(s.value ? "visible" : "hidden"), u = Ao(() => {
    i.value = "hidden";
  }), c = k(!0), f = { show: s, appear: S(() => e.appear || !c.value) };
  return H(() => {
    ne(() => {
      c.value = !1, s.value ? i.value = "visible" : at(u) || (i.value = "hidden");
    });
  }), ie(Nt, u), ie(Dt, f), () => {
    let v = je(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), d = { unmount: e.unmount };
    return W({ ourProps: { ...d, as: "template" }, theirProps: {}, slot: {}, slots: { ...n, default: () => [J(la, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...l, ...d, ...v }, n.default)] }, attrs: {}, features: Mo, visible: i.value === "visible", name: "Transition" });
  };
} });
const na = {
  key: 0,
  class: "po-text-sm po-font-normal po-text-slate-400 po-select-none po-block po-text-left po-pt-5"
}, aa = { class: "po-grid po-grid-cols-3" }, sa = { class: "po-bg-white hover:po-bg-slate-200 po-rounded-xl po-p-2 po-transition-colors po-duration-150 po-ease-in" }, ra = ["href", "target"], ia = { class: "po-flex po-w-14 po-h-14 po-items-center po-justify-center po-duration-100 po-ease-in-out po-overflow-hidden" }, pa = ["innerHTML"], ua = { class: "po-text-slate-500 po-font-normal po-text-sm po-text-center" }, Jt = {
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
    return (t, l) => (r(!0), p(B, null, I(e.list, (n) => (r(), p("div", null, [
      n.groupName.length > 0 ? (r(), p("span", na, h(n.groupName), 1)) : b("", !0),
      a("ul", aa, [
        (r(!0), p(B, null, I(n.apps, (o) => (r(), p("li", sa, [
          a("a", {
            href: o.url,
            target: e.openInNewTab ? "_blank" : "_self",
            class: "po-flex po-flex-col po-group po-justify-center po-items-center"
          }, [
            a("span", ia, [
              a("span", {
                class: "po-w-9",
                innerHTML: o.icon
              }, null, 8, pa)
            ]),
            a("span", ua, h(o.name), 1)
          ], 8, ra)
        ]))), 256))
      ])
    ]))), 256));
  }
}, ca = {
  name: "PoAppTray"
}, da = /* @__PURE__ */ Object.assign(ca, {
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
      return l.forEach((s) => {
        let i = t.appList.filter((u) => u.group == s);
        i.length > 0 && o.push({
          groupName: s,
          apps: i
        });
      }), o;
    });
    return (o, s) => e.justApps ? (r(), N(Jt, {
      key: 1,
      list: m(n),
      "open-in-new-tab": e.openInNewTab
    }, null, 8, ["list", "open-in-new-tab"])) : (r(), N(m(nt), { key: 0 }, {
      default: T(({ open: i }) => [
        C(m(Tt), {
          class: E([i ? "" : "po-text-opacity-90", "po-block po-w-6 po-text-slate-100 genie-effect po-z-50 po-outline-none"])
        }, {
          default: T(() => [
            C(m($l))
          ]),
          _: 2
        }, 1032, ["class"]),
        C(we, {
          "enter-active-class": "po-transition po-duration-200 po-ease-out",
          "enter-from-class": "po-translate-y-1 po-opacity-0",
          "enter-to-class": "po-translate-y-0 po-opacity-100",
          "leave-active-class": "po-transition po-duration-150 po-ease-in",
          "leave-from-class": "po-translate-y-0 po-opacity-100",
          "leave-to-class": "po-translate-y-1 po-opacity-0"
        }, {
          default: T(() => [
            C(m(Bt), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
              default: T(() => [
                C(Jt, {
                  list: m(n),
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
}), fa = {
  key: 0,
  class: "po-absolute po-right-0 po-w-3 po-h-3 po-bg-mpao-orange po-rounded-full po-border-2 po-border-mpao-blue"
}, va = {
  key: 0,
  class: "po-space-y-2"
}, ma = ["onClick"], ha = { class: "po-flex po-items-center po-justify-between" }, ba = { class: "po-text-sm po-font-semibold po-text-slate-700 po-grow po-flex po-space-x-2 po-items-center" }, ga = {
  key: 0,
  class: "po-w-2 po-h-2 po-rounded-full po-shrink-0 po-bg-mpao-orange"
}, ya = { class: "po-grow" }, xa = { class: "po-text-xs po-font-normal po-text-slate-400 po-shrink-0" }, wa = { class: "po-block po-text-sm po-text-slate-500 po-pb-3" }, Va = {
  key: 1,
  class: "po-text-sm po-text-slate-500 po-py-10 po-text-center po-block"
}, ka = {
  name: "PoNotificationHub"
}, $a = /* @__PURE__ */ Object.assign(ka, {
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
    return (l, n) => (r(), N(m(nt), null, {
      default: T(({ open: o }) => [
        C(m(Tt), {
          class: E([o ? "" : "text-opacity-90", "po-block po-w-6 po-text-slate-100 genie-effect po-relative po-z-50 po-outline-none"])
        }, {
          default: T(() => [
            e.hasNewNotifications ? (r(), p("span", fa)) : b("", !0),
            C(m(pl), { class: "po-stroke-current" })
          ]),
          _: 2
        }, 1032, ["class"]),
        C(we, {
          "enter-active-class": "po-transition po-duration-200 po-ease-out",
          "enter-from-class": "po-translate-y-1 po-opacity-0",
          "enter-to-class": "po-translate-y-0 po-opacity-100",
          "leave-active-class": "po-transition po-duration-150 po-ease-in",
          "leave-from-class": "po-translate-y-0 po-opacity-100",
          "leave-to-class": "po-translate-y-1 po-opacity-0"
        }, {
          default: T(() => [
            C(m(Bt), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
              default: T(() => [
                e.notifications !== null && e.notifications.length > 0 ? (r(), p("ul", va, [
                  (r(!0), p(B, null, I(e.notifications, (s) => (r(), p("li", {
                    role: "button",
                    class: "po-space-y-2 po-p-2 po-rounded-lg po-bg-white hover:po-bg-slate-100 po-border po-border-slate-100",
                    onClick: ce((i) => l.$emit("button-click", s.name), ["prevent"])
                  }, [
                    a("span", ha, [
                      a("p", ba, [
                        s.seen ? b("", !0) : (r(), p("span", ga)),
                        a("span", ya, h(s.name), 1)
                      ]),
                      a("span", xa, h(s.time), 1)
                    ]),
                    a("span", wa, h(s.text), 1)
                  ], 8, ma))), 256))
                ])) : (r(), p("span", Va, " No notifications to show at the moment. We'll keep you informed."))
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
}), _a = {
  key: 0,
  class: "po-hidden lg:po-block po-text-sky-50 po-text-sm po-shrink-0 po-pr-3 po-truncate po-max-w-[140px] po-overflow-hidden"
}, Ca = {
  key: 1,
  class: "po-px-3 po-bg-gradient-to-br po-from-slate-50 po-to-blue-100 po-py-1 po-rounded-l-md po-w-[100px] po-flex po-items-center po-justify-center po-text-center"
}, Sa = ["src"], Pa = ["src", "alt"], Oa = {
  key: 1,
  class: "po-text-xs po-text-white po-font-semibold"
}, Ea = { class: "po-pb-5" }, La = ["src"], Ta = {
  key: 2,
  class: "po-block po-text-sm po-text-slate-400 po-italic"
}, Ba = { key: 0 }, ja = { key: 1 }, Da = /* @__PURE__ */ a("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), Na = { class: "po-space-y-2 po-py-2 po-max-h-[250px] po-overflow-y-auto" }, Aa = ["onClick"], Ma = { class: "po-w-5" }, Ia = { class: "" }, Ra = { class: "po-block po-text-sm po-font-normal" }, Fa = {
  key: 0,
  class: "po-text-left po-block po-text-xs po-text-slate-400"
}, za = /* @__PURE__ */ a("div", { class: "po-h-[2px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), Ha = { class: "md:po-grid po-grid-cols-2 po-space-x-1 po-pt-2" }, qa = { class: "po-w-5" }, Ua = /* @__PURE__ */ a("span", { class: "po-text-sm po-font-normal" }, "Profile", -1), Wa = { class: "po-w-5" }, Ga = /* @__PURE__ */ a("span", { class: "po-text-sm po-font-normal" }, "Logout", -1), Za = /* @__PURE__ */ a("div", { class: "po-text-xs po-space-x-3 po-text-center po-pt-3" }, [
  /* @__PURE__ */ a("a", {
    href: "",
    class: "po-text-slate-500 hover:po-text-mpao-lightblue"
  }, "Privacy Policy"),
  /* @__PURE__ */ a("a", {
    href: "",
    class: "po-text-slate-500 hover:po-text-mpao-lightblue"
  }, "Terms of Service")
], -1), Ka = {
  name: "PoProfileSwitcher"
}, Qa = /* @__PURE__ */ Object.assign(Ka, {
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
    function n(d) {
      t("button-click", d);
    }
    const o = k({
      name: "",
      initials: "",
      image: ""
    });
    function s(d) {
      return d ? d.match(/\b[A-Z]/g).join("").substr(0, 2) : "";
    }
    const i = S(() => {
      var x, w, $, _, O, D, R, L, M, A, j, F, ee;
      let d = [], g = (x = l.userObject) != null && x.transacting_as_organisation && Object.keys((w = l.userObject) == null ? void 0 : w.transacting_as_organisation).length > 0 ? ($ = l.userObject) == null ? void 0 : $.transacting_as_organisation : null, y = g ? g.name : (_ = l.userObject) == null ? void 0 : _.name, V = g ? g.logo ? g.logo : (O = l.userObject) == null ? void 0 : O.avatar : "";
      return o.value = {
        name: y,
        initials: s(y),
        image: V
      }, d = [], d.push({
        id: (D = l.userObject) == null ? void 0 : D.id,
        entity_id: (R = l.userObject) == null ? void 0 : R.entity_id,
        name: (L = l.userObject) == null ? void 0 : L.name,
        identifier: null,
        organisation_uuid: null
      }), ((A = (M = l.userObject) == null ? void 0 : M.organisations) == null ? void 0 : A.length) > 0 && ((F = (j = l.userObject) == null ? void 0 : j.organisations) == null || F.forEach((ye) => d.push(ye))), d.forEach((ye) => {
        var fe, q, G, le;
        ye.current = ((fe = l.userObject) == null ? void 0 : fe.transacting_as_organisation) && Object.keys((q = l.userObject) == null ? void 0 : q.transacting_as_organisation).length > 0 && ye.entity_id === ((le = (G = l.userObject) == null ? void 0 : G.transacting_as_organisation) == null ? void 0 : le.entity_id);
      }), ((ee = l.userObject) == null ? void 0 : ee.transacting_as_organisation) === null && (d[0].current = !0), d;
    }), u = k(null), c = k(null), { avatar: f, logo: v } = ge(l);
    return K(f, () => {
      u.value = f.value;
    }), K(v, () => {
      c.value = v.value;
    }), Jo(() => {
      i.value;
    }), H(() => {
      i.value;
    }), Xo(() => {
      i.value;
    }), yt(() => {
      i.value;
    }), (d, g) => (r(), N(m(nt), { key: m(i) }, {
      default: T(({ open: y }) => [
        a("div", null, [
          C(m(Tt), { class: "po-flex po-items-center po-outline-none" }, {
            default: T(() => [
              c.value ? b("", !0) : (r(), p("span", _a, h(o.value.name), 1)),
              c.value ? (r(), p("span", Ca, [
                a("img", {
                  class: "po-h-8",
                  src: c.value,
                  alt: ""
                }, null, 8, Sa)
              ])) : b("", !0),
              a("div", {
                class: E([
                  {
                    "po-bg-gradient-to-br po-from-slate-50 po-to-blue-100 po-p-1 po-rounded-r-md": c.value
                  }
                ])
              }, [
                a("div", {
                  class: E([[
                    { "text-opacity-90": y },
                    {
                      "po-w-10 po-h-10": !c.value
                    },
                    { "po-w-8 po-h-8": c.value }
                  ], "po-shrink-0 po-select-none po-rounded-full po-bg-[#2e5266] po-flex po-items-center po-justify-center genie-effect po-z-50"])
                }, [
                  u.value ? (r(), p("img", {
                    key: 0,
                    class: "po-rounded-full po-border po-border-white",
                    src: u.value,
                    alt: o.value.name
                  }, null, 8, Pa)) : (r(), p("span", Oa, h(o.value.initials), 1))
                ], 2)
              ], 2)
            ]),
            _: 2
          }, 1024),
          C(we, {
            "enter-active-class": "po-transition po-duration-200 po-ease-out",
            "enter-from-class": "po-translate-y-1 po-opacity-0",
            "enter-to-class": "po-translate-y-0 po-opacity-100",
            "leave-active-class": "po-transition po-duration-150 po-ease-in",
            "leave-from-class": "po-translate-y-0 po-opacity-100",
            "leave-to-class": "po-translate-y-1 po-opacity-0"
          }, {
            default: T(() => [
              C(m(Bt), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
                default: T(() => {
                  var V, x, w, $;
                  return [
                    a("div", Ea, [
                      u.value ? (r(), p("img", {
                        key: 0,
                        class: "po-w-20 po-h-20 po-mx-auto po-rounded-full po-overflow-hidden",
                        src: u.value,
                        alt: ""
                      }, null, 8, La)) : b("", !0),
                      (V = e.userObject) != null && V.name ? (r(), p("span", {
                        key: 1,
                        class: E(["po-text-base po-text-slate-600 po-font-medium po-block", [{ "po-mt-4": u.value }]])
                      }, h((x = e.userObject) == null ? void 0 : x.name), 3)) : b("", !0),
                      (w = e.userObject) != null && w.name ? (r(), p("span", Ta, [
                        o.value.name === (($ = e.userObject) == null ? void 0 : $.name) ? (r(), p("span", Ba, "Self")) : (r(), p("span", ja, "User at " + h(o.value.name), 1))
                      ])) : b("", !0)
                    ]),
                    Da,
                    a("div", Na, [
                      (r(!0), p(B, null, I(m(i), (_, O) => (r(), p("a", {
                        href: "#",
                        onClick: ce((D) => n(_), ["prevent"]),
                        class: E(["po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-shadow-sm po-transition-all po-duration-150 po-ease-out hover:po-bg-blue-50", [
                          {
                            " po-bg-white": !_.current
                          },
                          {
                            " po-bg-blue-50 po-shadow-sm": _.current
                          }
                        ]]),
                        role: "button",
                        key: O
                      }, [
                        a("span", Ma, [
                          _.isPersonal ? (r(), N(m(zt), {
                            key: 0,
                            class: E([
                              "po-stroke-current",
                              { "po-stroke-mpao-lightblue": _.current }
                            ])
                          }, null, 8, ["class"])) : b("", !0),
                          _.isPersonal ? b("", !0) : (r(), N(m(cl), {
                            key: 1,
                            class: E([
                              "po-stroke-current",
                              { "po-stroke-mpao-lightblue": _.current }
                            ])
                          }, null, 8, ["class"]))
                        ]),
                        a("span", Ia, [
                          a("span", Ra, h(_.name), 1),
                          _.identifier ? (r(), p("span", Fa, h(_.identifier), 1)) : b("", !0)
                        ])
                      ], 10, Aa))), 128))
                    ]),
                    za,
                    a("div", Ha, [
                      a("a", {
                        href: "#",
                        onClick: g[0] || (g[0] = ce((_) => d.$emit("button-click", "current-profile"), ["prevent"])),
                        class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-slate-50 hover:po-bg-blue-50 po-transition-all po-duration-150 po-ease-out",
                        role: "button"
                      }, [
                        a("span", qa, [
                          C(m(zt), { class: "po-stroke-current" })
                        ]),
                        Ua
                      ]),
                      a("a", {
                        href: "#",
                        onClick: g[1] || (g[1] = ce((_) => d.$emit("button-click", "logout"), ["prevent"])),
                        class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-slate-50 hover:po-bg-blue-50 po-transition-all po-duration-150 po-ease-out",
                        role: "button"
                      }, [
                        a("span", Wa, [
                          C(m(sl), { class: "po-stroke-current" })
                        ]),
                        Ga
                      ])
                    ]),
                    Za
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
    return (t, l) => (r(), p("div", {
      class: E(["loading-dots po-inline-block po-w-[40px] po-h-[10px]", [{ "po-relative": !e.absolute }, { "po-absolute": e.absolute }]])
    }, [
      a("div", {
        class: E(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[8px]", e.dotColor])
      }, null, 2),
      a("div", {
        class: E(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[8px]", e.dotColor])
      }, null, 2),
      a("div", {
        class: E(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[17px]", e.dotColor])
      }, null, 2),
      a("div", {
        class: E(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[26px]", e.dotColor])
      }, null, 2)
    ], 2));
  }
}, Ya = ["disabled", "aria-disabled"], Ja = ["value", "disabled", "aria-disabled"], Xa = {
  name: "PoButton"
}, Mt = /* @__PURE__ */ Object.assign(Xa, {
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
    }), s = S(() => {
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
    return (i, u) => (r(), p(B, null, [
      e.isLoading ? (r(), p("span", {
        key: 0,
        class: E([[n, m(o)], "po-bg-slate-200 hover:po-bg-slate-200 focus:po-bg-slate-200"])
      }, [
        C(At, {
          "dot-color": "po-bg-slate-500",
          class: "po-relative -po-bottom-[0.2rem]"
        })
      ], 2)) : b("", !0),
      e.type == "button" && !e.isLoading ? (r(), p("button", Ee({
        key: 1,
        onClick: u[0] || (u[0] = ce((c) => i.$emit("button-click", e.to), ["prevent"])),
        class: [n, m(o), m(s)],
        disabled: e.disabled,
        "aria-disabled": e.disabled
      }, i.$attrs), [
        te(i.$slots, "label", {}, () => [
          X(h(e.label), 1)
        ])
      ], 16, Ya)) : b("", !0),
      e.type == "submit" && !e.isLoading ? (r(), p("input", Ee({
        key: 2,
        type: "submit",
        class: [n, m(o), m(s)],
        value: e.label,
        disabled: e.disabled,
        "aria-disabled": e.disabled
      }, i.$attrs), null, 16, Ja)) : b("", !0),
      e.type == "link" && !e.isLoading ? (r(), p("a", Ee({
        key: 3,
        href: "#",
        onClick: u[1] || (u[1] = ce((c) => i.$emit("button-click", e.to), ["prevent"])),
        class: [n, m(o), m(s)]
      }, i.$attrs), [
        te(i.$slots, "label", {}, () => [
          X(h(e.label), 1)
        ])
      ], 16)) : b("", !0),
      e.type == "simple" && !e.isLoading ? (r(), p("a", {
        key: 4,
        href: "#",
        onClick: u[2] || (u[2] = ce((c) => i.$emit("button-click", e.to), ["prevent"])),
        class: E(["po-text-sm po-transition-colors po-duration-100 po-ease-in-out po-inline-flex po-items-center po-space-x-1", [
          { "po-text-mpao-lightblue hover:po-text-mpao-blue": !e.overrideColors }
        ]])
      }, [
        te(i.$slots, "label", {}, () => [
          X(h(e.label), 1)
        ])
      ], 2)) : b("", !0)
    ], 64));
  }
}), es = /* @__PURE__ */ a("div", { class: "po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity" }, null, -1), ts = { class: "po-fixed po-z-10 po-inset-0" }, os = { class: "po-flex po-justify-center po-items-start po-min-h-screen po-px-4 po-pt-10 po-pb-20 po-text-center sm:po-block po-max-h-screen po-overflow-y-hidden" }, ls = /* @__PURE__ */ a("span", {
  class: "po-hidden sm:po-inline-block sm:po-align-middle sm:po-h-screen",
  "aria-hidden": "true"
}, "​", -1), ns = { class: "po-flex po-items-center po-bg-white po-rounded-t-xl po-p-5" }, as = { class: "po-grow po-text-md po-font-bold po-text-slate-600" }, ss = { class: "po-shrink-0" }, rs = /* @__PURE__ */ a("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), is = { class: "po-p-5 po-h-[calc(100vh-230px)] po-overflow-y-auto" }, ps = {
  key: 0,
  class: "po-bg-slate-50 po-rounded-b-xl"
}, us = {
  name: "PoModal"
}, qe = /* @__PURE__ */ Object.assign(us, {
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
    const l = e, { show: n } = ge(l), o = k(!1);
    K(n, () => {
      o.value = n.value;
    });
    function s() {
      o.value = !1, t("modal-closed", !0);
    }
    return (i, u) => (r(), p("div", null, [
      e.openBtnLabel.length > 0 ? (r(), N(m(Mt), {
        key: 0,
        label: e.openBtnLabel,
        onClick: u[0] || (u[0] = (c) => o.value = !0)
      }, null, 8, ["label"])) : b("", !0),
      (r(), N(Ze, { to: "body" }, [
        C(m(He), {
          as: "template",
          show: o.value
        }, {
          default: T(() => [
            C(m(tt), {
              as: "div",
              class: "po-relative po-z-50",
              onClose: s
            }, {
              default: T(() => [
                C(m(_e), {
                  as: "template",
                  enter: "po-ease-out po-duration-300",
                  "enter-from": "po-opacity-0",
                  "enter-to": "po-opacity-100",
                  leave: "po-ease-in po-duration-200",
                  "leave-from": "po-opacity-100",
                  "leave-to": "po-opacity-0"
                }, {
                  default: T(() => [
                    es
                  ]),
                  _: 1
                }),
                a("div", ts, [
                  a("div", os, [
                    ls,
                    C(m(_e), {
                      as: "template",
                      enter: "po-ease-out po-duration-300",
                      "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                      "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                      leave: "po-ease-in po-duration-200",
                      "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                      "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                    }, {
                      default: T(() => [
                        C(m(ot), {
                          class: E(["po-relative po-inline-block po-align-bottom po-bg-white po-rounded-xl po-text-left po-shadow-xl po-transform po-transition-all sm:po-align-top po-w-full", e.modalWidth])
                        }, {
                          default: T(() => [
                            a("div", ns, [
                              a("h3", as, h(e.modalTitle), 1),
                              a("div", ss, [
                                a("span", {
                                  role: "button",
                                  class: "po-block",
                                  onClick: s
                                }, [
                                  C(m(Ke), { class: "po-w-5 po-stroke-slate-500 hover:po-stroke-mpao-orange po-transition-colors po-duration-150 po-ease-in-out" })
                                ])
                              ])
                            ]),
                            rs,
                            a("div", is, [
                              te(i.$slots, "content")
                            ]),
                            i.$slots.footer ? (r(), p("div", ps, [
                              te(i.$slots, "footer")
                            ])) : b("", !0)
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
function Io(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "fill-rule": "evenodd",
      d: "M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Ro(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "fill-rule": "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h4.59l-2.1 1.95a.75.75 0 001.02 1.1l3.5-3.25a.75.75 0 000-1.1l-3.5-3.25a.75.75 0 10-1.02 1.1l2.1 1.95H6.75z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Fo(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "fill-rule": "evenodd",
      d: "M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z",
      "clip-rule": "evenodd"
    })
  ]);
}
function zo(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "fill-rule": "evenodd",
      d: "M2.24 6.8a.75.75 0 001.06-.04l1.95-2.1v8.59a.75.75 0 001.5 0V4.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L2.2 5.74a.75.75 0 00.04 1.06zm8 6.4a.75.75 0 00-.04 1.06l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V6.75a.75.75 0 00-1.5 0v8.59l-1.95-2.1a.75.75 0 00-1.06-.04z",
      "clip-rule": "evenodd"
    })
  ]);
}
function cs(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "fill-rule": "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Ho(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "fill-rule": "evenodd",
      d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",
      "clip-rule": "evenodd"
    })
  ]);
}
function ds(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "fill-rule": "evenodd",
      d: "M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z",
      "clip-rule": "evenodd"
    })
  ]);
}
function qo(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "fill-rule": "evenodd",
      d: "M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z",
      "clip-rule": "evenodd"
    })
  ]);
}
function It(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "fill-rule": "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      "clip-rule": "evenodd"
    })
  ]);
}
function fs(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "fill-rule": "evenodd",
      d: "M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z",
      "clip-rule": "evenodd"
    })
  ]);
}
function vs(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "fill-rule": "evenodd",
      d: "M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Rt(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
  ]);
}
const ms = {
  key: 0,
  class: "po-text-lg po-text-red-400 po-font-semibold"
}, hs = {
  key: 0,
  class: "po-mt-1 po-flex -po-mb-3 po-flex-wrap"
}, bs = { class: "po-flex po-flex-1" }, gs = { class: "po-flex po-flex-col" }, ys = ["id"], xs = ["id"], ws = {
  name: "PoRadioInput"
}, Vs = /* @__PURE__ */ Object.assign(ws, {
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
    }), K(n, () => {
      t("update:modelValue", n.value), t("selected", n.value);
    });
    const { errorMessage: o } = ge(l), s = k();
    return K(o, (i, u) => {
      s.value = o.value !== null && o.value !== "";
    }), (i, u) => (r(), N(m(qn), {
      modelValue: n.value,
      "onUpdate:modelValue": u[0] || (u[0] = (c) => n.value = c),
      class: E([{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }])
    }, {
      default: T(() => [
        C(m(Qt), { class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700" }, {
          default: T(() => [
            a("span", null, h(e.label), 1),
            e.required ? (r(), p("span", ms, "*")) : b("", !0)
          ]),
          _: 1
        }),
        e.options !== null ? (r(), p("div", hs, [
          (r(!0), p(B, null, I(e.options, (c) => (r(), N(m(Wn), {
            as: "template",
            key: c.id,
            value: c.id
          }, {
            default: T(({ checked: f, active: v }) => [
              a("div", {
                class: E([
                  "po-transition-colors po-duration-100 po-ease-out po-mr-3",
                  "",
                  "",
                  "po-mb-3 po-pt-[0.13rem] po-relative po-flex po-cursor-pointer focus:po-outline-none"
                ])
              }, [
                a("span", {
                  class: E(["po-w-5 po-h-5 po-rounded-full po-border po-mr-2 po-flex po-items-center po-justify-center", [
                    "",
                    f ? "po-border-mpao-lightblue" : "po-border-slate-400"
                  ]])
                }, [
                  a("span", {
                    class: E(["po-w-3 po-h-3 po-rounded-full", [
                      "",
                      f ? "po-bg-mpao-lightblue" : "po-bg-transparent"
                    ]])
                  }, null, 2)
                ], 2),
                a("span", bs, [
                  a("span", gs, [
                    C(m(Qt), {
                      as: "span",
                      class: "po-block po-text-sm po-font-medium po-text-gray-900"
                    }, {
                      default: T(() => [
                        X(h(c.title), 1)
                      ]),
                      _: 2
                    }, 1024),
                    c.description ? (r(), N(m(Gn), {
                      key: 0,
                      as: "span",
                      class: "po-mt-1 po-flex po-items-center po-text-sm po-text-gray-500"
                    }, {
                      default: T(() => [
                        X(h(c.description), 1)
                      ]),
                      _: 2
                    }, 1024)) : b("", !0)
                  ])
                ])
              ], 2)
            ]),
            _: 2
          }, 1032, ["value"]))), 128))
        ])) : b("", !0),
        a("div", null, [
          e.message !== null ? (r(), p("p", {
            key: 0,
            class: "po-mt-2 po-text-sm po-text-slate-500",
            id: `${i.id}-description`
          }, h(e.message), 9, ys)) : b("", !0),
          s.value && m(o) !== null ? (r(), p("p", {
            key: 1,
            class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
            id: `${i.id}-error`
          }, [
            C(m(qo), { class: "po-fill-current po-w-4 po-mt-[0.2rem] po-shrink-0" }),
            a("span", null, h(m(o)), 1)
          ], 8, xs)) : b("", !0)
        ])
      ]),
      _: 1
    }, 8, ["modelValue", "class"]));
  }
});
function ks(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", { d: "M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" }),
    a("path", { d: "M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" })
  ]);
}
function $s(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "fill-rule": "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      "clip-rule": "evenodd"
    })
  ]);
}
function _s(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", { d: "M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" })
  ]);
}
function Uo(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "fill-rule": "evenodd",
      d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Cs(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    a("path", {
      "fill-rule": "evenodd",
      d: "M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z",
      "clip-rule": "evenodd"
    })
  ]);
}
const Ss = ["for"], Ps = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Os = ["title"], Es = ["name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], Ls = ["id"], Ts = ["id"], Bs = {
  name: "PoTextarea"
}, js = /* @__PURE__ */ Object.assign(Bs, {
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
    return (t, l) => (r(), p("div", {
      class: E(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      a("label", {
        for: e.id,
        class: "po-text-sm po-font-medium po-text-slate-700 po-flex po-items-center po-space-x-1"
      }, [
        a("span", null, h(e.label), 1),
        e.required ? (r(), p("span", Ps, "*")) : b("", !0),
        e.info !== null ? (r(), p("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          C(m(Uo))
        ], 8, Os)) : b("", !0)
      ], 8, Ss),
      a("textarea", Ee({
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
      }), null, 16, Es),
      e.message !== null ? (r(), p("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, h(e.message), 9, Ls)) : b("", !0),
      e.errorMessage !== null ? (r(), p("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, h(e.errorMessage), 9, Ts)) : b("", !0)
    ], 2));
  }
}), Ds = { class: "shell-sidebar" }, Ns = { class: "po-grow" }, As = { class: "shell-sidebar--menu" }, Ms = ["onClick", "title"], Is = { class: "shell-sidebar--icon" }, Rs = { class: "shell-sidebar--label po-font-medium po-text-left" }, Fs = { key: 0 }, zs = { class: "shell-sidebar--menu sidebar-apps po-shrink-0 po-mb-0" }, Hs = ["onClick"], qs = { class: "shell-sidebar--icon" }, Us = ["innerHTML"], Ws = { class: "shell-sidebar--label po-font-medium po-text-left" }, Gs = {
  key: 0,
  class: "shell-sidebar--menu po-shrink-0 po-mb-0 po-border-t po-border-slate-200 po-pt-3"
}, Zs = { class: "shell-sidebar--icon" }, Ks = /* @__PURE__ */ a("span", { class: "shell-sidebar--label po-font-medium" }, "Feedback", -1), Qs = { action: "" }, Ys = /* @__PURE__ */ a("br", null, null, -1), Js = { class: "po-p-5" }, Xs = {
  name: "PoSidebarDrawer"
}, X1 = /* @__PURE__ */ Object.assign(Xs, {
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
    const l = e, n = k(!1), o = [
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
    ], s = k(o[0]), i = S(() => {
      let v = [];
      const d = l.apps.filter((g) => g.code == l.appCode)[0];
      return d && l.apps.filter(
        (y) => d.related.includes(y.code)
      ).forEach((y) => {
        v.push(y);
      }), v;
    }), u = k(null);
    function c() {
      window.innerWidth <= 1024 && (u.value.checked = !u.value.checked);
    }
    function f(v, d) {
      t(v, d), c();
    }
    return (v, d) => (r(), p(B, null, [
      a("input", {
        type: "checkbox",
        name: "",
        class: "po-hidden shell-sidebar--toggle",
        role: "none",
        id: "sidebar-drawer-toggle",
        checked: "",
        "aria-checked": "true",
        ref_key: "sidebarToggle",
        ref: u
      }, null, 512),
      a("aside", Ds, [
        a("div", Ns, [
          (r(!0), p(B, null, I(e.content, (g) => (r(), p("div", null, [
            C(m(Gt), { defaultOpen: !0 }, {
              default: T(({ open: y }) => [
                g.groupName ? (r(), N(m(Zt), {
                  key: 0,
                  class: E([y ? "" : "po-mb-3", "shell-sidebar--section po-w-full po-text-left"])
                }, {
                  default: T(() => [
                    X(h(g.groupName), 1)
                  ]),
                  _: 2
                }, 1032, ["class"])) : b("", !0),
                C(we, {
                  "enter-active-class": "po-transition po-duration-100 po-ease-out",
                  "enter-from-class": "po-transform po-scale-95 po-opacity-0",
                  "enter-to-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-active-class": "po-transition po-duration-75 po-ease-out",
                  "leave-from-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-to-class": "po-transform po-scale-95 po-opacity-0"
                }, {
                  default: T(() => [
                    C(m(Kt), null, {
                      default: T(() => [
                        a("ul", As, [
                          (r(!0), p(B, null, I(g.items, (V) => (r(), p("li", null, [
                            V.disabled ? b("", !0) : (r(), p("button", {
                              key: 0,
                              onClick: (x) => f("button-click", V.url),
                              class: E([
                                "shell-sidebar--item",
                                { active: V.url == e.currRoute }
                              ]),
                              title: `Go to ${V.label}`
                            }, [
                              a("span", Is, [
                                (r(), N(be(V.icon), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" }))
                              ]),
                              a("span", Rs, h(V.label), 1)
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
          e.apps !== null ? (r(), p("div", Fs, [
            C(m(Gt), { defaultOpen: !0 }, {
              default: T(({ open: g }) => [
                e.appsLabel ? (r(), N(m(Zt), {
                  key: 0,
                  class: E([g ? "" : "po-mb-3", "shell-sidebar--section po-w-full po-text-left"])
                }, {
                  default: T(() => [
                    X(h(e.appsLabel), 1)
                  ]),
                  _: 2
                }, 1032, ["class"])) : b("", !0),
                C(we, {
                  "enter-active-class": "po-transition po-duration-100 po-ease-out",
                  "enter-from-class": "po-transform po-scale-95 po-opacity-0",
                  "enter-to-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-active-class": "po-transition po-duration-75 po-ease-out",
                  "leave-from-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-to-class": "po-transform po-scale-95 po-opacity-0"
                }, {
                  default: T(() => [
                    C(m(Kt), null, {
                      default: T(() => [
                        a("ul", zs, [
                          (r(!0), p(B, null, I(m(i), (y, V) => (r(), p("li", null, [
                            a("button", {
                              onClick: (x) => f("app-click", y.name),
                              class: E(["shell-sidebar--item", [{ active: y.current }]]),
                              title: "Go to feedback"
                            }, [
                              a("span", qs, [
                                a("span", {
                                  innerHTML: y.icon,
                                  class: "po-text-slate-600 po-w-5"
                                }, null, 8, Us)
                              ]),
                              a("span", Ws, h(y.name), 1)
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
          ])) : b("", !0)
        ]),
        e.hasFeedback ? (r(), p("ul", Gs, [
          a("li", null, [
            a("button", {
              onClick: d[0] || (d[0] = ce(() => n.value = !0, ["prevent"])),
              class: "shell-sidebar--item",
              title: "Go to feedback"
            }, [
              a("span", Zs, [
                C(m(dl), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" })
              ]),
              Ks
            ])
          ])
        ])) : b("", !0),
        C(qe, {
          show: n.value,
          onModalClosed: d[2] || (d[2] = () => n.value = !1),
          "modal-title": "Feedback"
        }, {
          content: T(() => [
            a("form", Qs, [
              C(Vs, {
                label: "Type",
                options: o,
                "pre-selected": s.value,
                modelValue: s.value,
                "onUpdate:modelValue": d[1] || (d[1] = (g) => s.value = g)
              }, null, 8, ["pre-selected", "modelValue"]),
              Ys,
              C(js, {
                cols: "6",
                rows: "6",
                label: "Description",
                message: ""
              })
            ])
          ]),
          footer: T(() => [
            a("div", Js, [
              C(Mt, {
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
}), er = {
  key: 0,
  class: "shell-content--action-bar"
}, tr = { class: "action-bar__nav" }, or = ["onClick"], lr = { class: "action-bar__nav_label po-font-medium" }, nr = {
  key: 0,
  class: "po-shrink-0 po-flex po-space-x-1"
}, ar = /* @__PURE__ */ a("span", { class: "action-bar__nav_label po-font-medium" }, "Go Back", -1), sr = {
  name: "PoActionBar"
}, e0 = /* @__PURE__ */ Object.assign(sr, {
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
    return (t, l) => e.items !== null && e.items.length > 0 || e.showBackButton ? (r(), p("section", er, [
      a("nav", tr, [
        (r(!0), p(B, null, I(e.items, (n) => (r(), p("span", {
          onClick: (o) => t.$emit("button-click", n.label),
          class: E([[
            { "action-bar__nav_highlighted": n.highlighted },
            { "action-bar__nav_danger": n.danger }
          ], "action-bar__nav_link"])
        }, [
          (r(), N(be(n.icon), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" })),
          a("span", lr, h(n.label), 1)
        ], 10, or))), 256))
      ]),
      e.showBackButton ? (r(), p("nav", nr, [
        a("span", {
          onClick: l[0] || (l[0] = (n) => t.$emit("button-click", "back")),
          class: "action-bar__nav_link"
        }, [
          ar,
          (r(), N(be(m(rl)), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" }))
        ])
      ])) : b("", !0)
    ])) : b("", !0);
  }
}), rr = { class: "po-shadow-sm po-rounded-xl po-bg-white po-relative" }, ir = {
  key: 0,
  class: "po-absolute po-right-2 po-top-2 po-p-2 po-rounded-lg"
}, pr = {
  key: 0,
  class: "po-text-base po-font-medium po-text-slate-600"
}, ur = {
  key: 1,
  class: "lg:po-col-span-2 lg:po-flex lg:po-justify-end po-space-x-2"
}, cr = {
  name: "PoCard"
}, t0 = /* @__PURE__ */ Object.assign(cr, {
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
    return (t, l) => (r(), p("div", rr, [
      e.isLoading ? (r(), p("div", ir, [
        C(At)
      ])) : b("", !0),
      a("div", {
        class: E([
          { "po-grid po-grid-cols-1 lg:po-grid-cols-3 po-gap-3": t.$slots.action }
        ])
      }, [
        e.title.length > 0 ? (r(), p("h3", pr, h(e.title), 1)) : b("", !0),
        t.$slots.action ? (r(), p("div", ur, [
          te(t.$slots, "action")
        ])) : b("", !0)
      ], 2),
      te(t.$slots, "content")
    ]));
  }
}), dr = { class: "po-py-3 po-px-5 po-border-b po-border-slate-200" }, fr = {
  class: "po-flex po-w-full md:po-ml-0",
  action: "#",
  method: "GET"
}, vr = {
  for: "search-field",
  class: "po-sr-only"
}, mr = { class: "po-relative po-w-full po-text-slate-400 focus-within:po-text-mpao-lightblue po-transition-colors po-duration-100 po-ease-in-out" }, hr = { class: "po-pointer-events-none po-absolute po-inset-y-0 po-left-0 po-flex po-items-center" }, br = ["placeholder", "value"], gr = {
  name: "PoCardSearch"
}, o0 = /* @__PURE__ */ Object.assign(gr, {
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
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    return (l, n) => (r(), p("div", dr, [
      a("form", fr, [
        a("label", vr, h(e.placeholder), 1),
        a("div", mr, [
          a("div", hr, [
            C(m(Vt), { class: "po-h-5 po-w-5 po-flex-shrink-0" })
          ]),
          a("input", {
            name: "search-field",
            id: "desktop-search-field",
            placeholder: e.placeholder,
            value: e.modelValue,
            onInput: n[0] || (n[0] = (o) => l.$emit("update:modelValue", o.target.value)),
            class: "po-h-full po-w-full po-border-transparent po-py-2 po-pl-8 po-pr-3 po-text-sm po-text-slate-700 po-placeholder-slate-500 focus:po-border-transparent focus:po-placeholder-slate-400 focus:po-outline-none focus:po-ring-0",
            type: "search"
          }, null, 40, br)
        ])
      ])
    ]));
  }
}), yr = { class: "po-flex po-items-center" }, xr = { class: "po-text-sm po-font-medium po-text-slate-500 po-pr-2" }, wr = {
  name: "PoPagination"
}, Vr = /* @__PURE__ */ Object.assign(wr, {
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
    const s = S(() => l.totalPages ? `Page ${l.currentPage} of ${l.totalPages}` : l.pagination ? l.pagination.label : "");
    return (i, u) => (r(), p("div", yr, [
      a("span", xr, h(m(s)), 1),
      a("button", {
        title: "Previous",
        onClick: n,
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        C(m(hl), { class: "po-w-4 po-stroke-current po-stroke-2" })
      ]),
      a("button", {
        title: "Next",
        onClick: o,
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        C(m(bl), { class: "po-w-4 po-stroke-current po-stroke-2" })
      ])
    ]));
  }
}), kr = { key: 0 }, $r = {
  class: "po-text-xl md:po-text-2xl po-font-semibold po-text-slate-800",
  id: "po-page-title"
}, _r = {
  key: 0,
  class: "po-text-base po-mt-2 po-max-w-md po-block po-text-slate-500"
}, Cr = { key: 1 }, Sr = { class: "po-grid po-grid-cols-1 lg:po-grid-cols-2 po-gap-5" }, Pr = {
  class: "po-text-xl md:po-text-2xl po-font-semibold po-text-slate-800",
  id: "po-page-title"
}, Or = {
  key: 0,
  class: "po-text-base po-mt-4 po-max-w-md po-pb-5 po-block po-text-slate-500"
}, Er = { class: "po-flex po-items-end po-justify-end po-flex-col" }, Lr = {
  key: 0,
  class: "po-flex md:po-justify-end po-mb-5"
}, Tr = { class: "po-bg-slate-50 po-shadow-sm po-rounded-xl po-py-5 po-px-2 po-divide-x po-divide-slate-200 po-flex" }, Br = ["onClick"], jr = { class: "po-text-xl po-font-medium po-text-slate-600 po-flex po-items-center po-space-x-1" }, Dr = { class: "po-text-xl po-font-medium po-text-slate-600 group-hover:po-text-mpao-lightblue" }, Nr = { class: "po-text-sm po-text-slate-500 po-block group-hover:po-text-mpao-lightblue" }, Ar = { class: "po-flex po-items-center po-space-x-1 md:po-justify-end" }, Mr = {
  key: 2,
  class: "po-border-l po-border-slate-400 po-h-3 po-w-3 po-ml-1"
}, Ir = {
  key: 0,
  class: "po-bg-slate-50 po-p-5 po-mt-5 po-rounded-md po-grid po-grid-cols-1 md:po-grid-cols-3 po-gap-5"
}, Rr = /* @__PURE__ */ a("span", { class: "po-text-xs po-text-slate-500 po-py-5" }, "No filters available at the moment.", -1), Fr = {
  name: "PoPageTitle"
}, l0 = /* @__PURE__ */ Object.assign(Fr, {
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
    function s(i) {
      return i.iconColor ? i.iconColor : "po-slate-600";
    }
    return (i, u) => e.standAlone ? (r(), p("div", kr, [
      a("h1", $r, h(e.label), 1),
      e.description !== "" ? (r(), p("span", _r, h(e.description), 1)) : b("", !0)
    ])) : (r(), p("div", Cr, [
      a("div", Sr, [
        a("div", null, [
          a("h1", Pr, h(e.label), 1),
          e.description !== "" ? (r(), p("span", Or, h(e.description), 1)) : b("", !0)
        ]),
        a("div", Er, [
          e.stats !== null ? (r(), p("div", Lr, [
            a("div", Tr, [
              (r(!0), p(B, null, I(e.stats, (c) => (r(), p("div", {
                class: "po-px-5 po-cursor-pointer po-group genie-effect",
                onClick: (f) => i.$emit("stat-click", c)
              }, [
                a("span", jr, [
                  a("span", Dr, h(c.value), 1),
                  c.icon ? (r(), p("span", {
                    key: 0,
                    class: E(["po-w-5 po-h-5", s(c)])
                  }, [
                    (r(), N(be(c.icon)))
                  ], 2)) : b("", !0)
                ]),
                a("span", Nr, h(c.label), 1)
              ], 8, Br))), 256))
            ])
          ])) : b("", !0),
          a("div", Ar, [
            e.showFilter ? (r(), p("button", {
              key: 0,
              title: "Filter",
              onClick: u[0] || (u[0] = (c) => {
                i.$emit("button-click", "filter"), n.value = !m(n);
              }),
              class: E([
                "po-p-2 po-rounded-md hover:po-bg-slate-200 po-transition-colors po-duration-75 po-ease-in-out",
                { "po-text-mpao-orange hover:po-text-mpao-orange": m(n) },
                { "tpo-ext-slate-600 hover:po-text-mpao-blue": !m(n) }
              ])
            }, [
              C(m(xl), { class: "po-w-4 po-stroke-current po-stroke-2" })
            ], 2)) : b("", !0),
            e.showDownload ? (r(), p("button", {
              key: 1,
              title: "Download",
              onClick: u[1] || (u[1] = (c) => i.$emit("button-click", "download")),
              class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
            }, [
              C(m(al), { class: "po-w-4 po-stroke-current po-stroke-2" })
            ])) : b("", !0),
            e.showFilter && e.showPagination || e.showDownload && e.showPagination ? (r(), p("span", Mr, " ")) : b("", !0),
            e.showPagination ? (r(), N(Vr, {
              key: 3,
              pagination: e.pagination,
              onButtonClick: o
            }, null, 8, ["pagination"])) : b("", !0)
          ])
        ])
      ]),
      C(we, {
        "enter-active-class": "po-transition po-duration-100 po-ease-out",
        "enter-from-class": "po-transform po-scale-95 po-opacity-0",
        "enter-to-class": "po-transform po-scale-100 po-opacity-100",
        "leave-active-class": "po-transition po-duration-75 po-ease-out",
        "leave-from-class": "po-transform po-scale-100 po-opacity-100",
        "leave-to-class": "po-transform po-scale-95 po-opacity-0"
      }, {
        default: T(() => [
          m(n) ? (r(), p("div", Ir, [
            te(i.$slots, "filters", {}, () => [
              Rr
            ])
          ])) : b("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), zr = {
  key: 0,
  class: "po-w-12"
}, Hr = {
  key: 0,
  class: "po-w-12"
}, qr = ["onClick"], Ur = ["colspan"], Wr = { key: 1 }, Gr = ["colspan"], Zr = { class: "po-py-10 po-block po-normal-case" }, Kr = { class: "po-pr-5" }, Qr = { class: "po-py-1" }, Yr = { key: 0 }, Jr = {
  name: "PoTable",
  components: { ArrowRightCircleIcon: Ro }
}, n0 = /* @__PURE__ */ Object.assign(Jr, {
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
    const t = e, { isLoading: l, tbody: n } = ge(t), o = k(!1), s = k(null);
    K(l, () => {
      i();
    }), K(n, () => {
      i(), u();
    }), H(() => {
      i(), u();
    });
    function i() {
      o.value = l.value, s.value = n.value, l.value && (s.value = [{}, {}, {}, {}, {}]);
    }
    function u() {
      if (t.hasDetailsRow)
        for (let f = 0; f < t.tbody.length; f++)
          t.tbody[f].showDetails = !1;
    }
    function c() {
      return Math.floor(Math.random() * 41) + 40;
    }
    return (f, v) => (r(), p("table", {
      class: E(["table-responsive po-w-full", [{ lg: e.breakAtLg }]])
    }, [
      a("thead", null, [
        a("tr", null, [
          e.hasDetailsRow ? (r(), p("th", zr)) : b("", !0),
          (r(!0), p(B, null, I(e.thead, (d) => (r(), p("th", null, [
            te(f.$slots, "th", Me(Ie(d)))
          ]))), 256))
        ])
      ]),
      a("tbody", null, [
        s.value !== null && !o.value || s.value !== null && s.value.length !== 0 && !o.value ? (r(!0), p(B, { key: 0 }, I(s.value, (d, g) => (r(), p(B, null, [
          a("tr", null, [
            e.hasDetailsRow ? (r(), p("td", Hr, [
              a("span", {
                onClick: (y) => d.showDetails = !d.showDetails
              }, [
                C(m(Ro), {
                  class: E(["po-w-5 po-fill-mpao-lightblue po-origin-center po-transition-transform po-duration-100 po-ease-out po-cursor-pointer", [{ "po-rotate-90": d.showDetails }]])
                }, null, 8, ["class"])
              ], 8, qr)
            ])) : b("", !0),
            te(f.$slots, "td", Me(Ie({ ...d, index: g, item: d })))
          ]),
          e.hasDetailsRow ? (r(), p("tr", {
            key: 0,
            class: E(["po-table-details-row", [{ "po-hidden": !d.showDetails }]])
          }, [
            a("td", {
              colspan: e.thead.length + 1
            }, [
              te(f.$slots, "details", Me(Ie({ item: d })))
            ], 8, Ur)
          ], 2)) : b("", !0)
        ], 64))), 256)) : b("", !0),
        s.value == null && !o.value || s.value !== null && s.value.length == 0 && !o.value ? (r(), p("tr", Wr, [
          a("td", {
            colspan: e.thead.length + 1,
            class: "po-text-center"
          }, [
            a("span", Zr, h(e.emptyMessage), 1)
          ], 8, Gr)
        ])) : b("", !0),
        o.value ? (r(!0), p(B, { key: 2 }, I(s.value, (d) => (r(), p("tr", null, [
          (r(!0), p(B, null, I(e.thead, (g) => (r(), p("td", Kr, [
            a("div", Qr, [
              a("div", {
                class: "po-h-2 loading-placeholder po-rounded-full",
                style: xt({ width: c() + "%" })
              }, null, 4)
            ])
          ]))), 256))
        ]))), 256)) : b("", !0)
      ]),
      f.$slots.tfoot ? (r(), p("tfoot", Yr, [
        a("tr", null, [
          te(f.$slots, "tfoot")
        ])
      ])) : b("", !0)
    ], 2));
  }
}), Xr = ["onUpdate:modelValue", "id"], ei = ["for"], ti = { class: "table-responsive po-w-full" }, oi = ["onClick"], li = { key: 0 }, ni = ["onClick"], ai = {
  name: "PoDynamicTable",
  components: { ArrowsUpDownIcon: zo, ArrowUpIcon: Fo, ArrowDownIcon: Io }
}, a0 = /* @__PURE__ */ Object.assign(ai, {
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
    const t = e, l = k(t.columns), n = k(null), o = k(null), s = (c) => {
      c.hidden = !c.hidden, l.value = t.columns.filter((f) => !f.hidden);
    }, i = (c) => {
      c.sortable && (c.sorted && o.value === "asc" ? o.value = "desc" : o.value = "asc", l.value.forEach((f) => {
        f.key === c.key ? (f.sorted = !0, f.sortDirection = o.value) : (f.sorted = !1, f.sortDirection = null);
      }), n.value = c);
    }, u = k([]);
    return ne(() => {
      n.value ? u.value = [...t.data].sort((c, f) => {
        let v = c[n.value.key], d = f[n.value.key];
        return typeof v == "string" && typeof d == "string" && (v = v.toLowerCase(), d = d.toLowerCase()), v < d ? o.value === "asc" ? -1 : 1 : v > d ? o.value === "asc" ? 1 : -1 : 0;
      }) : u.value = [...t.data];
    }), (c, f) => (r(), p("div", null, [
      (r(!0), p(B, null, I(l.value, (v) => (r(), p("div", null, [
        Re(a("input", {
          type: "checkbox",
          name: "dynamic",
          "onUpdate:modelValue": (d) => v.hidden = d,
          id: `hide-table-col-${v.label}`
        }, null, 8, Xr), [
          [el, v.hidden]
        ]),
        a("label", {
          for: `hide-table-col-${v.label}`
        }, h(v.label), 9, ei)
      ]))), 256)),
      a("table", ti, [
        a("thead", null, [
          a("tr", null, [
            (r(!0), p(B, null, I(l.value, (v) => (r(), p("th", {
              key: v.key,
              onClick: (d) => i(v)
            }, [
              X(h(v.label) + " " + h(v.sorted) + " " + h(v.sortDirection) + " ", 1),
              v.sortable ? (r(), p("span", li, [
                v.sorted ? b("", !0) : (r(), N(m(zo), {
                  key: 0,
                  class: "po-w-4"
                })),
                v.sorted && v.sortDirection === "asc" ? (r(), N(m(Fo), {
                  key: 1,
                  class: "po-w-4"
                })) : b("", !0),
                v.sorted && v.sortDirection === "desc" ? (r(), N(m(Io), {
                  key: 2,
                  class: "po-w-4"
                })) : b("", !0)
              ])) : b("", !0),
              v.hidable ? (r(), p("button", {
                key: 1,
                onClick: (d) => s(v)
              }, h(v.hidden ? "Show" : "Hide"), 9, ni)) : b("", !0)
            ], 8, oi))), 128))
          ])
        ]),
        a("tbody", null, [
          (r(!0), p(B, null, I(u.value, (v) => (r(), p("tr", {
            key: v.id
          }, [
            (r(!0), p(B, null, I(l.value, (d) => (r(), p("td", {
              key: d.key
            }, h(v[d.key]), 1))), 128))
          ]))), 128))
        ])
      ])
    ]));
  }
}), si = { class: "" }, ri = { class: "po-grow" }, ii = ["onClick"], pi = {
  name: "PoDescriptionList"
}, Wo = /* @__PURE__ */ Object.assign(pi, {
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
    return (l, n) => (r(), p("div", null, [
      a("dl", {
        class: E([
          "po-description-list",
          { "po-divide-y po-divide-slate-200": !e.striped },
          { striped: e.striped }
        ])
      }, [
        te(l.$slots, "content", {}, () => [
          (r(!0), p(B, null, I(e.items, (o) => (r(), p("div", null, [
            a("dt", null, h(o.title), 1),
            a("dd", si, [
              a("span", ri, h(o.description), 1),
              o.action !== void 0 ? (r(), p("span", {
                key: 0,
                class: "po-shrink-0 po-text-mpao-lightblue hover:po-text-mpao-blue po-transition-colors po-duration-100 po-ease-in-out po-px-2 po-cursor-pointer",
                onClick: (s) => l.$emit("button-click", o.action)
              }, h(o.action), 9, ii)) : b("", !0)
            ])
          ]))), 256))
        ])
      ], 2)
    ]));
  }
}), ui = ["for"], ci = { class: "po-capitalize" }, di = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, fi = ["title"], vi = ["type", "name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], mi = ["id"], hi = ["id"], bi = {
  name: "PoInputField"
}, s0 = /* @__PURE__ */ Object.assign(bi, {
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
    const { errorMessage: o } = ge(l), s = k(o.value !== null);
    K(o, (d, g) => {
      s.value = o.value !== null && o.value !== "";
    });
    let i = l.type === "currency" ? "text" : l.type;
    const u = k(null), c = (d) => {
      let g = d.target.value;
      u.value = g;
      let y = l.type === "currency" ? v(g) : g;
      t("update:modelValue", y);
    }, f = (d) => {
      let g = null;
      l.type === "currency" ? g = ll(v("" + d)) : g = d, u.value = g;
    }, v = (d) => {
      let g = d.replace(/,/g, "");
      const y = g.indexOf(".");
      return y !== -1 && g.substring(y + 1) === "00" && (g = g.substring(0, y)), g;
    };
    return l.type === "currency" ? f(l.modelValue) : u.value = l.modelValue, (d, g) => (r(), p("div", {
      class: E(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      a("label", {
        for: e.id,
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700"
      }, [
        a("span", ci, h(e.label), 1),
        e.required ? (r(), p("span", di, "*")) : b("", !0),
        e.info !== null ? (r(), p("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          C(m(It), { class: "po-fill-current" })
        ], 8, fi)) : b("", !0)
      ], 8, ui),
      a("input", Ee({
        type: m(i),
        name: `${e.id}-field`,
        id: e.id,
        value: u.value,
        placeholder: e.placeholder,
        disabled: e.disabled,
        required: e.required,
        "aria-describedby": `${e.id}-description`,
        "aria-required": e.required,
        "aria-disabled": e.disabled
      }, d.$attrs, {
        onInput: c,
        onBlur: g[0] || (g[0] = (y) => f(y.target.value)),
        class: [
          "po-mt-1 peer po-block po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white focus:po-ring-0 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default",
          n()
        ]
      }), null, 16, vi),
      e.message !== null ? (r(), p("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, h(e.message), 9, mi)) : b("", !0),
      s.value && m(o) !== null ? (r(), p("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
        id: `${e.id}-error`
      }, [
        a("span", null, h(m(o)), 1)
      ], 8, hi)) : b("", !0)
    ], 2));
  }
}), gi = { class: "po-text-sm po-font-medium po-text-slate-700 peer-focus:po-text-mpao-lightblue peer-invalid:po-text-red-500 peer-invalid:peer-focus:po-text-red-600 po-flex po-items-center po-space-x-1 po-capitalize" }, yi = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, xi = ["name", "id", "value"], wi = ["for"], Vi = { class: "po-flex po-items-center po-space-x-1" }, ki = {
  key: 0,
  class: "po-text-sm"
}, $i = {
  key: 1,
  class: "po-text-sm"
}, _i = {
  key: 0,
  class: "po-mt-3 po-flex po-w-full po-h-1.5 po-bg-gray-100 po-rounded-full po-overflow-hidden"
}, Ci = ["aria-valuenow"], Si = ["id"], Pi = ["id"], Oi = {
  name: "PoInputFile"
}, r0 = /* @__PURE__ */ Object.assign(Oi, {
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
    const t = e, l = S(() => `width: ${t.progress}%`), n = S(() => t.progress), o = k(""), s = (i) => {
      const u = i.target.files[0];
      u ? o.value = u.name : o.value = "";
    };
    return (i, u) => (r(), p("div", {
      class: E(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      a("span", gi, [
        a("span", null, h(e.label), 1),
        e.required ? (r(), p("span", yi, "*")) : b("", !0)
      ]),
      a("input", {
        name: `${e.id}-upload`,
        id: `${e.id}-fileupload`,
        value: e.modelValue,
        type: "file",
        onInput: u[0] || (u[0] = (c) => i.$emit("update:modelValue", c.target.value)),
        onChange: u[1] || (u[1] = (c) => s(c)),
        class: "po-sr-only po-peer"
      }, null, 40, xi),
      a("label", {
        for: `${e.id}-fileupload`,
        class: "po-mt-1 po-block po-w-full po-border po-cursor-pointer po-rounded-md po-border-slate-300 po-bg-white peer-focus:po-border-mpao-lightblue invalid:po-border-red-400 invalid:focus:po-border-red-600 invalid:focus:po-ring-red-600 sm:po-text-sm po-p-2"
      }, [
        a("div", Vi, [
          C(m(lo), { class: "po-w-4 po-stroke-slate-500" }),
          o.value ? (r(), p("span", ki, h(o.value), 1)) : (r(), p("span", $i, "Choose file"))
        ])
      ], 8, wi),
      m(n) !== null ? (r(), p("div", _i, [
        a("div", {
          class: "po-flex po-flex-col po-justify-center po-overflow-hidden po-bg-mpao-lightblue",
          role: "progressbar",
          style: xt(m(l)),
          "aria-valuenow": m(n),
          "aria-valuemin": "0",
          "aria-valuemax": "100"
        }, null, 12, Ci)
      ])) : b("", !0),
      e.message !== null ? (r(), p("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, h(e.message), 9, Si)) : b("", !0),
      e.errorMessage !== null ? (r(), p("p", {
        key: 2,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, h(e.errorMessage), 9, Pi)) : b("", !0)
    ], 2));
  }
}), Ei = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Li = ["title"], Ti = { class: "po-relative po-mt-1" }, Bi = { class: "po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-rounded-r-md po-px-2 focus:po-outline-none" }, ji = {
  key: 0,
  class: "po-block po-text-xs po-opacity-60"
}, Di = {
  key: 0,
  class: "po-mt-2 po-text-sm po-text-slate-500",
  id: "-description"
}, Ni = {
  key: 1,
  class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
  id: "-error"
}, Ai = {
  name: "PoSelectField"
}, i0 = /* @__PURE__ */ Object.assign(Ai, {
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
    const l = e, n = k(""), o = k(), s = S(
      () => n.value === "" ? l.list : l.list.filter((f) => f.name.toLowerCase().includes(n.value.toLowerCase()))
    );
    function i(f) {
      if (l.object)
        return f == null ? void 0 : f.name;
      if (s.value) {
        let v = s.value.find((d) => d.id === f);
        return v == null ? void 0 : v.name;
      } else if (placeholder)
        return placeholder;
    }
    o.value = l.modelValue, yt(() => {
      o.value = l.modelValue;
    }), K(o, () => {
      t("update:modelValue", o.value), t("selected", o.value);
    });
    const { errorMessage: u } = ge(l), c = k(u.value !== null);
    return K(u, (f, v) => {
      c.value = u.value !== null && u.value !== "";
    }), (f, v) => (r(), N(m(fn), {
      as: "div",
      modelValue: o.value,
      "onUpdate:modelValue": v[1] || (v[1] = (d) => o.value = d),
      class: E([{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]),
      disabled: e.disabled
    }, {
      default: T(() => [
        C(m(vn), { class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700" }, {
          default: T(() => [
            a("span", null, h(e.label), 1),
            e.required ? (r(), p("span", Ei, "*")) : b("", !0),
            e.info !== null ? (r(), p("abbr", {
              key: 1,
              title: e.info,
              class: "po-w-4 po-text-slate-500"
            }, [
              C(m(It), { class: "po-fill-current" })
            ], 8, Li)) : b("", !0)
          ]),
          _: 1
        }),
        a("div", Ti, [
          C(m(mn), {
            as: "div",
            ref: "comboboxButton"
          }, {
            default: T(() => [
              C(m(hn), {
                class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm",
                placeholder: e.placeholder,
                onChange: v[0] || (v[0] = (d) => n.value = d.target.value),
                "display-value": i,
                disabled: e.disabled
              }, null, 8, ["placeholder", "disabled"]),
              a("span", Bi, [
                C(m(ds), {
                  class: "po-h-5 po-w-5 po-text-slate-400",
                  "aria-hidden": "true"
                })
              ])
            ]),
            _: 1
          }, 512),
          m(s).length > 0 ? (r(), N(m(bn), {
            key: 0,
            class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
          }, {
            default: T(() => [
              (r(!0), p(B, null, I(m(s), (d) => (r(), N(m(gn), {
                key: d.id,
                value: e.object ? d : d.id,
                as: "template"
              }, {
                default: T(({ active: g, selected: y }) => [
                  a("li", {
                    class: E([
                      "po-relative po-cursor-default po-select-none po-py-2 po-pl-3 po-pr-9",
                      g ? "po-bg-mpao-lightblue po-text-white" : "po-text-slate-900"
                    ])
                  }, [
                    a("span", {
                      class: E(["po-block po-truncate", y && "po-font-semibold"])
                    }, [
                      X(h(d.name) + " ", 1),
                      d.subtitle ? (r(), p("span", ji, h(d.subtitle), 1)) : b("", !0)
                    ], 2),
                    y ? (r(), p("span", {
                      key: 0,
                      class: E([
                        "po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-pr-4",
                        g ? "po-text-white" : "po-text-mpao-lightblue"
                      ])
                    }, [
                      C(m(Ho), {
                        class: "po-h-5 po-w-5",
                        "aria-hidden": "true"
                      })
                    ], 2)) : b("", !0)
                  ], 2)
                ]),
                _: 2
              }, 1032, ["value"]))), 128))
            ]),
            _: 1
          })) : b("", !0)
        ]),
        e.message !== null ? (r(), p("p", Di, h(e.message), 1)) : b("", !0),
        m(u) !== null ? (r(), p("p", Ni, [
          a("span", null, h(m(u)), 1)
        ])) : b("", !0)
      ]),
      _: 1
    }, 8, ["modelValue", "class", "disabled"]));
  }
}), Mi = { class: "po-text-sm po-font-medium po-text-slate-700 po-cursor-pointer po-select-none po-flex po-items-center po-space-x-1" }, Ii = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Ri = {
  name: "PoToggle"
}, p0 = /* @__PURE__ */ Object.assign(Ri, {
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
    return (n, o) => (r(), N(m(Zn), {
      as: "div",
      class: "po-flex po-items-center"
    }, {
      default: T(() => [
        C(m(Kn), {
          modelValue: l.value,
          "onUpdate:modelValue": o[0] || (o[0] = (s) => l.value = s),
          onClick: o[1] || (o[1] = (s) => n.$emit("update:modelValue", !l.value)),
          class: E([
            l.value ? "po-bg-mpao-lightblue" : "po-bg-slate-200",
            "po-relative po-inline-flex po-h-6 po-w-11 po-flex-shrink-0 po-cursor-pointer po-rounded-full po-border-2 po-border-transparent po-transition-colors po-duration-200 po-ease-in-out focus:po-outline-none focus:po-ring-2 focus:po-ring-mpao-lightblue focus:po-ring-offset-2"
          ])
        }, {
          default: T(() => [
            a("span", {
              "aria-hidden": "true",
              class: E([
                l.value ? "po-translate-x-5" : "po-translate-x-0",
                "po-pointer-events-none po-inline-block po-h-5 po-w-5 po-transform po-rounded-full po-bg-white po-shadow po-ring-0 po-transition po-duration-200 po-ease-in-out"
              ])
            }, null, 2)
          ]),
          _: 1
        }, 8, ["modelValue", "class"]),
        C(m(Qn), {
          as: "span",
          class: "po-ml-3"
        }, {
          default: T(() => [
            a("span", Mi, [
              a("span", null, h(e.label), 1),
              e.required ? (r(), p("span", Ii, "*")) : b("", !0)
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Fi = { class: "po-pt-1 po-space-y-1 po-border-r-2 po-border-slate-200 po-relative" }, zi = ["onClick"], Hi = {
  name: "PoSectionMenu"
}, u0 = /* @__PURE__ */ Object.assign(Hi, {
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
    return (t, l) => (r(), p("ul", Fi, [
      (r(!0), p(B, null, I(e.menuItems, (n) => (r(), p("li", null, [
        a("span", {
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
          (r(), N(be(n.icon), { class: "po-w-4 po-h-4 po-stroke-current" })),
          a("span", null, h(n.label), 1)
        ], 10, zi)
      ]))), 256))
    ]));
  }
}), qi = { class: "po-relative po-flex po-items-start" }, Ui = { class: "po-flex po-h-5 po-items-center" }, Wi = ["name", "id", "checked", "disabled", "aria-describedby"], Gi = { class: "po-ml-3 po-text-sm" }, Zi = ["for"], Ki = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Qi = ["id"], Yi = { class: "po-sr-only" }, Ji = ["id"], Xi = {
  name: "PoCheckbox"
}, c0 = /* @__PURE__ */ Object.assign(Xi, {
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
    return (t, l) => (r(), p("div", null, [
      a("div", qi, [
        a("div", Ui, [
          a("input", Ee({
            name: `${e.id}-field`,
            id: e.id,
            checked: e.modelValue,
            disabled: e.disabled,
            "aria-describedby": `${e.id}-description`
          }, t.$attrs, {
            onInput: l[0] || (l[0] = (n) => t.$emit("update:modelValue", n.target.checked)),
            type: "checkbox",
            class: ["po-h-4 po-w-4 po-rounded po-border-slate-300 po-text-mpao-lightblue focus:po-ring-mpao-lightblue", [{ "po-bg-slate-200": e.disabled }]]
          }), null, 16, Wi)
        ]),
        a("div", Gi, [
          a("label", {
            for: e.id,
            class: "po-font-medium po-text-slate-600 po-cursor-pointer po-select-none po-flex po-items-center po-space-x-1"
          }, [
            a("span", null, h(e.label), 1),
            e.required ? (r(), p("span", Ki, "*")) : b("", !0)
          ], 8, Zi),
          e.message ? (r(), p("span", {
            key: 0,
            id: `${e.id}-description`,
            class: "po-text-slate-500 po-cursor-default"
          }, [
            a("span", Yi, h(e.label), 1),
            X(" " + h(e.message), 1)
          ], 8, Qi)) : b("", !0)
        ])
      ]),
      e.errorMessage !== null ? (r(), p("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, h(e.errorMessage), 9, Ji)) : b("", !0)
    ]));
  }
}), ep = /* @__PURE__ */ a("div", { class: "po-pb-5 po-max-w-xl" }, [
  /* @__PURE__ */ a("span", { class: "po-text-sm po-text-slate-600" }, "We're always working to improve our app, and we're excited to share the latest changes with you. We hope you enjoy these new features and improvements")
], -1), tp = { class: "po-flex po-space-x-2" }, op = ["onClick"], lp = { class: "po-text-sm po-font-semibold po-slate-800" }, np = { class: "po-text-xs po-text-white po-px-1 po-py-0 po-rounded-md po-bg-mpao-lightblue" }, ap = { class: "po-bg-gradient-to-t po-from-mpao-orange/20 po-via-mpao-lightblue/20 po-to-purple-500/10 -po-mb-5 -po-mx-5 po-p-5 po-pb-10" }, sp = { key: 0 }, rp = { class: "po-space-y-2 po-mt-5" }, ip = { class: "po-border po-border-slate-200 po-rounded-lg po-p-3 po-bg-white" }, pp = { class: "po-flex po-items-center po-space-x-2" }, up = { class: "po-text-mpao-lightblue po-grow po-text-lg" }, cp = { class: "po-font-semibold po-shrink-0 po-text-mpao-lightblue po-text-sm po-px-2 po-py-1 po-rounded-xl po-bg-mpao-lightblue/10" }, dp = ["innerHTML"], fp = {
  key: 0,
  class: "po-bg-white po-rounded-md po-px-4 po-py-3 po-block po-text-sm po-text-center po-text-mpao-lightblue hover:po-text-purple-600 po-cursor-pointer"
}, vp = {
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
    return (n, o) => (r(), p(B, null, [
      e.showBtn ? (r(), p("a", {
        key: 0,
        href: "#",
        onClick: o[0] || (o[0] = ce((s) => t.value = !0, ["prevent"])),
        class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
      }, "Change logs")) : b("", !0),
      C(qe, {
        show: t.value,
        onModalClosed: o[1] || (o[1] = (s) => t.value = !1),
        "modal-title": "Change Log",
        "modal-width": "sm:po-max-w-4xl",
        id: "change-log-modal"
      }, {
        content: T(() => [
          a("div", null, [
            ep,
            a("div", tp, [
              (r(!0), p(B, null, I(e.changelog, (s, i) => (r(), p("span", {
                class: E(["po-flex po-items-center po-space-x-1 po-px-4 po-py-3 po-rounded-t-xl po-cursor-pointer", [{ "po-bg-purple-500/10": l.value === i }]]),
                onClick: (u) => l.value = i
              }, [
                a("span", lp, h(s.label) + " Version", 1),
                a("span", np, h(s.latest_version), 1)
              ], 10, op))), 256))
            ]),
            a("div", ap, [
              (r(!0), p(B, null, I(e.changelog, (s, i) => (r(), p("div", null, [
                l.value === i ? (r(), p("div", sp, [
                  a("div", rp, [
                    (r(!0), p(B, null, I(s.version_history, (u) => (r(), p("div", ip, [
                      a("span", pp, [
                        a("span", up, h(u.date), 1),
                        a("span", cp, h(u.version), 1)
                      ]),
                      a("div", {
                        class: "po-mt-3 po-prose-sm po-prose-slate",
                        innerHTML: u.note
                      }, null, 8, dp)
                    ]))), 256)),
                    s.hasMore ? (r(), p("span", fp, "More")) : b("", !0)
                  ])
                ])) : b("", !0)
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
}, mp = {}, hp = {
  class: "po-h-8",
  src: "https://pension.gov.mv/asset/image/en-ccc-2020-issa.png",
  alt: "issa Certificate"
};
function bp(e, t) {
  return r(), p("img", hp);
}
const gp = /* @__PURE__ */ st(mp, [["render", bp]]), yp = {}, xp = {
  class: "po-h-8",
  src: "https://pension.gov.mv/asset/image/iso_logo.png",
  alt: "ISO 27001 Certificate"
};
function wp(e, t) {
  return r(), p("img", xp);
}
const Vp = /* @__PURE__ */ st(yp, [["render", wp]]), kp = { class: "-po-m-5" }, $p = ["src", "alt"], Xt = {
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
    return (l, n) => (r(), p(B, null, [
      (r(), N(be(e.logo), {
        onClick: n[0] || (n[0] = ce((o) => t.value = !0, ["prevent"])),
        class: "po-cursor-pointer",
        role: "button"
      })),
      C(qe, {
        show: t.value,
        onModalClosed: n[1] || (n[1] = (o) => t.value = !1),
        "modal-title": e.title,
        "modal-width": "sm:po-max-w-4xl",
        id: "change-log-modal"
      }, {
        content: T(() => [
          a("div", kp, [
            a("img", {
              src: e.src,
              alt: e.title
            }, null, 8, $p)
          ])
        ]),
        _: 1
      }, 8, ["show", "modal-title"])
    ], 64));
  }
}, _p = /* @__PURE__ */ a("div", { class: "po-prose-sm po-prose-slate po-p-5 po-opacity-8" }, [
  /* @__PURE__ */ a("h2", { class: "po-text-red-500" }, "Sample Terms and Conditions"),
  /* @__PURE__ */ a("h3", null, "1. Acceptance of Terms"),
  /* @__PURE__ */ a("p", null, " By accessing and using this web app, you agree to be bound by these terms and conditions. "),
  /* @__PURE__ */ a("h3", null, "2. User Responsibilities"),
  /* @__PURE__ */ a("p", null, " Users are responsible for maintaining the confidentiality of their account information and complying with all applicable laws. "),
  /* @__PURE__ */ a("h3", null, "3. Privacy Policy"),
  /* @__PURE__ */ a("p", null, [
    /* @__PURE__ */ X(" Our privacy policy outlines how we collect, use, and protect your personal information. Please review our "),
    /* @__PURE__ */ a("a", { href: "privacy.html" }, "Privacy Policy"),
    /* @__PURE__ */ X(" for more details. ")
  ]),
  /* @__PURE__ */ a("h3", null, "4. Intellectual Property"),
  /* @__PURE__ */ a("p", null, " All content and materials provided on this web app are protected by intellectual property laws. Unauthorized use is prohibited. "),
  /* @__PURE__ */ a("h3", null, "5. Limitation of Liability"),
  /* @__PURE__ */ a("p", null, " We are not liable for any damages or losses incurred from the use of this web app, including but not limited to, errors, omissions, or interruptions. "),
  /* @__PURE__ */ a("h3", null, "6. Modification of Terms"),
  /* @__PURE__ */ a("p", null, " We reserve the right to modify or update these terms and conditions at any time without prior notice. It is your responsibility to review them periodically. "),
  /* @__PURE__ */ a("h3", null, "7. Governing Law"),
  /* @__PURE__ */ a("p", null, " These terms and conditions shall be governed by and construed in accordance with the laws of your jurisdiction. "),
  /* @__PURE__ */ a("h3", null, "8. Contact Us"),
  /* @__PURE__ */ a("p", null, [
    /* @__PURE__ */ X(" If you have any questions or concerns about these terms and conditions, please contact us at "),
    /* @__PURE__ */ a("a", { href: "mailto:info@pension.gov.mv" }, "info@pension.gov.mv"),
    /* @__PURE__ */ X(". ")
  ])
], -1), Cp = {
  __name: "ToCModel",
  setup(e) {
    const t = k(!1);
    return (l, n) => (r(), p(B, null, [
      a("a", {
        href: "#",
        onClick: n[0] || (n[0] = ce((o) => t.value = !0, ["prevent"])),
        role: "button",
        class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
      }, "Terms & Conditions"),
      C(qe, {
        show: t.value,
        onModalClosed: n[1] || (n[1] = (o) => t.value = !1),
        "modal-title": "Terms & Conditions",
        "modal-width": "sm:po-max-w-3xl",
        id: "change-log-modal"
      }, {
        content: T(() => [
          _p
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}, Sp = /* @__PURE__ */ a("div", { class: "po-prose-sm po-prose-slate po-p-5 po-opacity-80" }, [
  /* @__PURE__ */ a("h2", { class: "po-text-red-500" }, "Sample Privacy Policy"),
  /* @__PURE__ */ a("h3", null, "1. Information Collection"),
  /* @__PURE__ */ a("p", null, " We may collect personal information such as name, contact details, and pension-related data necessary for providing our services. "),
  /* @__PURE__ */ a("h3", null, "2. Use of Information"),
  /* @__PURE__ */ a("p", null, " The collected information is used for the purpose of administering pensions, processing applications, and communicating with users. "),
  /* @__PURE__ */ a("h3", null, "3. Data Security"),
  /* @__PURE__ */ a("p", null, " We implement appropriate security measures to protect personal information from unauthorized access, alteration, or disclosure. "),
  /* @__PURE__ */ a("h3", null, "4. Third-Party Disclosure"),
  /* @__PURE__ */ a("p", null, " We may share personal information with trusted third parties only to the extent necessary for pension administration purposes. "),
  /* @__PURE__ */ a("h3", null, "5. Cookies and Tracking"),
  /* @__PURE__ */ a("p", null, " We use cookies and similar technologies to enhance user experience and collect non-personal information about website usage. "),
  /* @__PURE__ */ a("h3", null, "6. Data Retention"),
  /* @__PURE__ */ a("p", null, " We retain personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law. "),
  /* @__PURE__ */ a("h3", null, "7. User Rights"),
  /* @__PURE__ */ a("p", null, " Users have the right to access, update, and delete their personal information. Please contact us to exercise these rights. "),
  /* @__PURE__ */ a("h3", null, "8. Children's Privacy"),
  /* @__PURE__ */ a("p", null, " This web app is not intended for children under the age of 13. We do not knowingly collect or store personal information from children. "),
  /* @__PURE__ */ a("h3", null, "9. Changes to Privacy Policy"),
  /* @__PURE__ */ a("p", null, " We reserve the right to modify or update this privacy policy at any time. Users will be notified of any significant changes. "),
  /* @__PURE__ */ a("h3", null, "8. Contact Us"),
  /* @__PURE__ */ a("p", null, [
    /* @__PURE__ */ X(" If you have any questions or concerns about our privacy policy, please contact us at "),
    /* @__PURE__ */ a("a", { href: "mailto:info@pension.gov.mv" }, "info@pension.gov.mv"),
    /* @__PURE__ */ X(". ")
  ])
], -1), Pp = {
  __name: "PrivacyPolicyModel",
  setup(e) {
    const t = k(!1);
    return (l, n) => (r(), p(B, null, [
      a("a", {
        href: "#",
        onClick: n[0] || (n[0] = ce((o) => t.value = !0, ["prevent"])),
        role: "button",
        class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
      }, "Privacy Policy"),
      C(qe, {
        show: t.value,
        onModalClosed: n[1] || (n[1] = (o) => t.value = !1),
        "modal-title": "Privacy Policy",
        "modal-width": "sm:po-max-w-3xl",
        id: "change-log-modal"
      }, {
        content: T(() => [
          Sp
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}, Op = { class: "po-grid po-gap-5 po-grid-cols-1 lg:po-grid-cols-2 po-px-6 lg:po-px-8 po-mt-10 po-pb-10" }, Ep = { class: "sm:po-flex po-items-start sm:po-space-x-5" }, Lp = /* @__PURE__ */ a("svg", {
  class: "po-h-10",
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  "fill-rule": "evenodd",
  "stroke-linejoin": "round",
  "stroke-miterlimit": "2",
  "clip-rule": "evenodd",
  viewBox: "0 0 343 287"
}, [
  /* @__PURE__ */ a("path", {
    fill: "#203057",
    d: "M61.305 92.088a16.74 16.74 0 0 1-2.583.542 12.086 12.086 0 0 0-4.604 1.425L108.41 0h21.308c-22.054 9.263-22.871 36.388-23.021 46.463-.237.008-.467.017-.708.042-5.509.462-13.509 3.245-20.296 13.904-2.267 3.512-4.392 7.341-6.263 10.721l-.125.204c-6.429 11.579-10.725 18.766-18 20.754ZM261.87 71.267c0-.013-.079-.142-.092-.159-1.987-3.575-4.045-7.279-6.225-10.683-6.82-10.675-14.795-13.458-20.295-13.908a6.116 6.116 0 0 0-.755-.063c-.358-12.162-2.37-21.821-6.12-29.492C224.449 8.912 218.67 3.233 211.17 0h21.104l54.109 93.708a12.134 12.134 0 0 0-3.884-1.05c-.875-.104-1.7-.3-2.408-.487-.063-.029-.167-.067-.167-.067-7.271-1.979-11.575-9.175-18.054-20.837ZM112.871 197.965c3.809 7.767 9.363 13.342 16.538 16.588h-21L54.384 120.99c1.371.692 2.837 1.146 4.337 1.292 1.034.112 1.979.362 2.592.529 7.267 1.971 11.575 9.179 18 20.754 2.412 4.329 4.275 7.65 6.379 10.938 6.8 10.65 14.783 13.445 20.288 13.9.266.02.512.029.754.029.358 12.166 2.362 21.829 6.137 29.533Zm149.045-54.381c6.442-11.571 10.738-18.767 18.009-20.759.745-.2 1.641-.425 2.575-.529 1.25-.121 2.45-.446 3.608-.933l-53.829 93.204h-20.063c21.375-9.537 22.175-36.212 22.313-46.104.229-.013.462-.021.716-.042 5.513-.462 13.505-3.246 20.309-13.908 2.304-3.625 4.558-7.667 6.362-10.929Zm-82.546 28.807v.208c.037 12.463 5.654 19.896 15.033 19.896 13.329 0 17.767-4.317 17.767-29.808V94.903l17.433-13.47v81.254c0 .241-.108 3.041-.217 5.746l-.158 3.7c-.071 1.975-.142 3.687-.167 4.458a1.689 1.689 0 0 0-.079.383c0 .104.021.196.033.3-2.454 24.05-13.783 35.746-34.612 35.746-8.758 0-16.329-3.292-21.925-9.542a2.922 2.922 0 0 0-2.15-.945c-.825 0-1.613.358-2.15.975-5.567 6.308-12.746 9.512-21.35 9.512-22.246 0-34.05-14.842-35.104-44.121 7.871-1.337 13.466-6.258 15.471-8.325l1.87-1.433v3.546c0 25.341 5.725 29.808 17.763 29.808 13.312 0 14.921-17.183 15.117-20.629.3-5.413 4.116-9.663 8.691-9.663h.325c4.709.2 8.409 4.68 8.409 10.188Zm-68.52-37.313V42.615c0-.104.088-.579.284-1.396 1.737-27.029 13.429-40.171 35.696-40.171 8.962 0 16.75 3.405 22.512 9.821.754.871 2.3.892 3.121-.012 5.712-6.509 13.1-9.809 21.937-9.809 22.938 0 35.021 15.355 35.93 45.638-7.934 1.075-13.717 6.146-15.817 8.275l-3.125 2.408v-5.171c0-24.833-5.25-29.012-16.988-29.012-12.616 0-14.129 16.55-14.325 19.875-.304 5.937-4.437 10.417-9.608 10.417h-.221c-5.137-.23-9.162-5.055-9.162-11.009v-.183c-.034-11.971-5.371-19.1-14.254-19.1-12.946 0-16.963 4.004-16.963 29.012v68.192l-19.017 14.688Z"
  }),
  /* @__PURE__ */ a("path", {
    fill: "#ec6e25",
    d: "m165.883 91.539-15.875 12.271-15.171-11.733V67.535l31.046 24.004Zm9.441 31.844 15.884-12.288 15.195 11.763-.004 24.529-31.075-24.004Zm-64.934 39.882c-.042.014-.031.008-.014.001l-.286.016c-1.067.113-2 .171-2.784.175h-.075c-.241-.017-.462-.004-.858-.004a24.05 24.05 0 0 1-.829-.104c-.038-.013-.075-.013-.117-.013 0 0-.012 0-.054-.016 0 0-.046-.009-.088-.009-4.07-.633-10.07-3.125-15.408-11.5-1.967-3.083-3.737-6.225-6.212-10.666-5.534-9.946-9.913-17.255-16.088-21.005-.092-.045-2.221-1.379-5.375-2.245a23.775 23.775 0 0 0-1.771-.392l-1.858-.292c-.121 0-.233-.016-.554-.15-.684-.196-1.275-.433-1.713-.679a1.038 1.038 0 0 0-.25-.146l-.133-.091c-.117-.075-.233-.138-.346-.234-.208-.141-.404-.296-.604-.45-.008-.029-.042-.062-.042-.062-.571-.488-1.133-1.084-1.508-1.609-.05-.087-.1-.191-.15-.25-.129-.187-.233-.362-.367-.562l-.346-.675c-.054-.104-.116-.217-.225-.458l-.162-.392a4.5 4.5 0 0 1-.121-.308 9.748 9.748 0 0 0-.042-.092.188.188 0 0 0-.033-.1 10.976 10.976 0 0 1-.237-.817 10.23 10.23 0 0 1-.196-.85c-.038-.3-.088-.587-.125-.983a17.836 17.836 0 0 1-.054-.771c.008-.292.037-.587.066-.975.025-.308.075-.604.125-.954.063-.279.117-.546.217-.917.058-.25.129-.475.204-.7.025-.046.042-.121.042-.121.008-.025.016-.058.033-.075.067-.191.133-.366.254-.654l.463-.966.162-.25c.109-.188.225-.367.367-.596.829-1.188 1.829-2.129 3.083-2.834.188-.1.363-.2.579-.295.375-.184.863-.334 1.596-.484l.317-.071c.121-.025.233-.054.337-.054.117-.016.238-.025.438-.071.275-.029.533-.075.783-.129.404-.058 1.117-.2 1.609-.346a.998.998 0 0 0 .291-.062c1.975-.575 5.017-1.796 8.134-4.283 4.77-4.059 8.512-10.446 13.283-19.025 1.946-3.53 3.958-7.171 6.129-10.563 5.446-8.529 11.558-11.029 15.992-11.575l-.009 21.342c-.67.612-1.37 1.483-2.05 2.541-1.933 3.021-3.795 6.392-5.45 9.363l-.15.267c-3.458 6.22-7.383 13.27-12.491 19.187l-2.142 2a1.423 1.423 0 0 0-.129 1.983c.092.088.208.175.208.175l1.946 2.238c.067.062.15.125.242.204.221.246.421.517.641.771l.309.35c.012.042.121.183.137.217 4.659 5.762 8.363 12.42 11.325 17.75l.571 1.033c1.583 2.846 3.229 5.787 4.983 8.529a14.943 14.943 0 0 0 1.667 2.171c.504.429 1.35.967 2.563.967 1.166 0 2.375-.534 3.483-1.488.062-.037.225-.158.258-.187l1.592-1.538 24.154-18.529 8.271-6.479c.083-.063.154-.134.237-.229l71.888-55.605c1.787-1.808 6.662-6.125 13.142-6.958.25 0 .991-.029 1.766-.075l.671-.017c.583-.033 1.1-.054 1.317-.054 4.387.371 10.812 2.684 16.541 11.634 2.184 3.45 4.317 7.27 6.205 10.662 5.458 9.846 9.791 17.096 15.758 20.796.079.087.179.154.258.221 1.663 1.021 3.404 1.787 5.159 2.246.133.041.258.041.295.02.35.084.73.175 1.121.271.054.009.129.042.179.042.013 0 .15.021.159.021.475.087.958.162 1.491.225 4.367.454 7.767 4.712 7.884 9.871-.15 5.179-3.55 9.42-7.896 9.883-.854.096-3.233.417-4.15.654-9.354 3.158-13.879 11.442-18.667 20.229-.529.954-1.046 1.917-1.591 2.896-1.884 3.383-4 7.208-6.2 10.663-5.45 8.512-11.546 11.041-15.988 11.587v-21.337c.658-.584 1.358-1.459 2.054-2.542 1.967-3.092 3.804-6.417 5.425-9.35l.125-.196c3.029-5.454 9.467-15.325 14.596-21.762a1.419 1.419 0 0 0-.05-1.855c-.521-.558-1.146-1.283-1.829-2.07a1.192 1.192 0 0 0-.488-.346 60.342 60.342 0 0 1-3.341-4.304c-.113-.146-.204-.275-.275-.371 0 0-.067-.138-.088-.167-3.329-4.721-6.208-9.908-8.546-14.104l-.15-.279c-1.266-2.284-2.625-4.584-3.895-6.738l-1.463-2.487c-1.104-1.854-2.487-2.813-4.129-2.813-.596 0-1.138.142-1.604.296l-.392.154-20.537 15.563-43.45 33.587-39.988 31.125a1.463 1.463 0 0 0-.683.304l-3.113 2.417s-.146.125-.262.229c-1.692 1.717-6.554 5.909-12.904 6.929Z"
  }),
  /* @__PURE__ */ a("path", {
    fill: "#203057",
    d: "M9.142 250.096c8.762 0 12.862 3.154 12.862 10.838v3.341c0 7.492-4.242 10.98-12.862 10.98H6.646v11.116H0v-36.275h9.142Zm0 18.892c4.708 0 6.262-1.604 6.262-5.042v-2.683c0-3.442-1.129-5.233-6.171-5.233H6.596v12.958h2.546Zm39.011-18.892v5.654h-14.37v9.325h12.25v5.842h-12.25v9.567h15.033v5.937H27.283v-36.325h20.87Zm28.511 36.277h-6.313l-10.65-22.992.567 13.758v9.234h-6.454v-36.23h6.454l10.646 23.888-.704-15.313v-8.575h6.454v36.23Zm17.293-30.764c-3.579 0-5.042 1.129-5.042 4.571 0 4.566 3.63 4.191 9.142 5.041 4.192.654 8.196 2.354 8.196 9.609 0 8.383-3.629 11.92-12.342 11.92-9.046 0-11.921-4.383-11.921-10.225h6.546c.146 2.78 1.371 4.288 5.513 4.288 3.912 0 5.704-1.65 5.704-5.746 0-4.287-5.088-4.287-8.954-4.808-4.096-.517-8.429-2.542-8.429-10.034 0-6.783 4.141-10.316 11.587-10.316 6.55 0 10.883 2.4 11.496 9.654h-6.55c-.188-3.063-1.792-3.954-4.946-3.954Zm17.716-5.465h6.55v36.275h-6.55v-36.275Zm12.631 25.722v-15.358c0-7.68 3.346-10.838 12.108-10.838 8.763 0 12.392 3.158 12.392 10.838v15.358c0 7.492-3.771 10.837-12.392 10.837-8.621 0-12.108-3.345-12.108-10.837Zm18-.329v-14.7c0-3.296-.85-5.417-5.892-5.417-4.712 0-5.608 2.121-5.608 5.417v14.7c0 3.441.896 5.416 5.608 5.416 4.713 0 5.892-1.975 5.892-5.416Zm35.526 10.836h-6.313l-10.65-22.992.567 13.758v9.234h-6.454v-36.23h6.454l10.646 23.888-.704-15.313v-8.575h6.454v36.23Zm17.861-10.507v-15.358c0-7.68 3.346-10.838 12.108-10.838 8.763 0 12.392 3.158 12.392 10.838v15.358c0 7.492-3.771 10.837-12.392 10.837-8.621 0-12.108-3.345-12.108-10.837Zm18-.329v-14.7c0-3.296-.85-5.417-5.892-5.417-4.712 0-5.608 2.121-5.608 5.417v14.7c0 3.441.896 5.416 5.608 5.416 4.713 0 5.892-1.975 5.892-5.416Zm33.925-19.506H232.82v9.046h12.533v5.891H232.82v15.45h-6.454v-36.32h21.25v5.933Zm26.007 0h-14.791v9.046h12.533v5.891h-12.533v15.45h-6.455v-36.32h21.246v5.933Zm4.809-5.887h6.55v36.275h-6.55v-36.275Zm37.133 25.015c0 7.962-3.771 11.308-12.392 11.308-8.62 0-12.108-3.346-12.108-10.837v-14.746c0-7.679 3.346-10.838 12.108-10.838 8.763 0 12.392 3.204 12.392 11.263h-6.5c0-3.534-.85-5.513-5.892-5.513-4.712 0-5.608 1.979-5.608 5.417V275.3c0 3.442.896 5.421 5.608 5.421 4.713 0 5.892-1.979 5.892-5.562h6.5Zm26.243-25.063v5.654h-14.37v9.325h12.25v5.842h-12.25v9.567h15.033v5.937h-21.533v-36.325h20.87Z"
  })
], -1), Tp = { class: "po-mt-5 sm:po-mt-0" }, Bp = /* @__PURE__ */ a("p", { class: "-po-mt-1 po-text-xs po-text-slate-500" }, " 8th Floor, Allied Building , Chaandhanee Magu, Malé, 20156, Maldives ", -1), jp = { class: "po-mt-1 po-text-xs po-text-slate-500" }, Dp = { class: "po-mt-1 po-text-xs po-text-slate-500 po-flex -po-mb-2 po-flex-wrap" }, Np = {
  href: "https://www.pension.gov.mv",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, Ap = /* @__PURE__ */ a("span", null, "www.pension.gov.mv", -1), Mp = {
  href: "mailto:info@pension.gov.mv",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, Ip = /* @__PURE__ */ a("span", null, "info@pension.gov.mv", -1), Rp = {
  href: "tel:1441",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, Fp = /* @__PURE__ */ a("span", null, "1441", -1), zp = { class: "po-flex lg:po-items-end po-flex-col" }, Hp = { class: "-po-mt-1 po-text-xs po-text-slate-500 po-flex -po-mb-2 po-flex-wrap" }, qp = { class: "po-flex po-space-x-2 po-mt-3 lg:po-justify-end" }, Up = {
  name: "PoFooter"
}, d0 = /* @__PURE__ */ Object.assign(Up, {
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
    return (l, n) => (r(), p("div", null, [
      a("section", Op, [
        a("div", Ep, [
          Lp,
          a("div", Tp, [
            Bp,
            a("p", jp, " © " + h(new Date().getFullYear()) + " Pension Office, All Rights Reserved. ", 1),
            a("p", Dp, [
              a("a", Np, [
                C(m(_s), { class: "po-w-3 po-h-3 po-fill-current" }),
                Ap
              ]),
              a("a", Mp, [
                C(m(ks), { class: "po-w-3 po-h-3 po-fill-current" }),
                Ip
              ]),
              a("a", Rp, [
                C(m(Cs), { class: "po-w-3 po-h-3 po-fill-current" }),
                Fp
              ])
            ])
          ])
        ]),
        a("div", zp, [
          a("nav", Hp, [
            C(vp, {
              "show-btn": e.changelog !== null,
              changelog: e.changelog
            }, null, 8, ["show-btn", "changelog"]),
            C(Cp),
            C(Pp)
          ]),
          a("div", qp, [
            C(Xt, {
              logo: Vp,
              title: "ISO/IEC 27001:2013 Certificate",
              src: ""
            }),
            C(Xt, {
              logo: gp,
              title: "issa Certificate",
              src: ""
            })
          ])
        ])
      ])
    ]));
  }
}), Wp = { class: "po-text-sm po-text-red-700" }, Gp = {
  key: 0,
  class: "po-text-sm po-text-red-800 po-list-disc po-ml-5 po-mt-2"
}, Zp = {
  key: 1,
  class: "po-flex po-items-start po-space-x-3 po-p-5 po-bg-green-50 po-rounded-md po-mt-5"
}, Kp = { class: "po-text-sm po-text-green-700" }, Qp = {
  name: "PoFormStatusMessage"
}, f0 = /* @__PURE__ */ Object.assign(Qp, {
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
    return (t, l) => e.isError ? (r(), p("div", {
      key: 0,
      class: E(["po-flex po-space-x-3 po-p-5 po-bg-red-50 po-rounded-md po-mt-5", [
        { "po-items-start": e.errorList !== null },
        { "po-items-center": e.errorList === null }
      ]])
    }, [
      C(m(dt), { class: "po-w-6 po-stroke-red-600" }),
      a("div", null, [
        a("span", Wp, h(e.message), 1),
        e.errorList !== null ? (r(), p("ul", Gp, [
          (r(!0), p(B, null, I(e.errorList, (n) => (r(), p("li", null, h(n), 1))), 256))
        ])) : b("", !0)
      ])
    ], 2)) : (r(), p("div", Zp, [
      C(m(vl), { class: "po-w-6 po-stroke-green-600" }),
      a("div", null, [
        a("span", Kp, h(e.message), 1)
      ])
    ]));
  }
}), Yp = { class: "po-bg-white po-relative po-group po-rounded-xl focus-within:po-ring-2 focus-within:po-ring-inset focus-within:po-ring-indigo-500" }, Jp = { class: "po-block po-p-4 po-transition-colors po-duration-75 po-ease-linear" }, Xp = { class: "po-flex po-items-start po-space-x-2" }, eu = { class: "po-flex po-items-start po-space-x-1" }, tu = { class: "po-block po-text-2xl po-font-light po-text-slate-600" }, ou = {
  key: 0,
  class: "po-text-sm po-text-green-500 po-font-medium po-pt-1"
}, lu = { class: "po-text-sm po-tracking-wide po-text-slate-500" }, nu = {
  name: "PoStatsBlock"
}, v0 = /* @__PURE__ */ Object.assign(nu, {
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
    return (t, l) => (r(), p("div", {
      class: E(["po-grid po-gap-5", e.numberOfCols])
    }, [
      (r(!0), p(B, null, I(e.items, (n) => (r(), p("div", Yp, [
        a("span", Jp, [
          a("div", Xp, [
            a("div", null, [
              a("span", {
                class: E([
                  "po-inline-flex po-p-2 po-rounded-md",
                  n.bgColor,
                  n.iconColor
                ])
              }, [
                (r(), N(be(n.icon), { class: "po-w-4 po-h-4" }))
              ], 2)
            ]),
            a("div", null, [
              a("div", eu, [
                a("span", tu, h(n.value), 1),
                n.diff ? (r(), p("span", ou, h(n.diff), 1)) : b("", !0)
              ]),
              a("h4", lu, h(n.label), 1)
            ])
          ])
        ])
      ]))), 256))
    ], 2));
  }
}), au = {
  key: 0,
  class: "po-flex po-space-x-3 po-items-start"
}, su = { class: "po-flex po-items-center po-space-x-2" }, ru = ["datetime"], iu = { class: "po-text-sm po-font-medium po-text-slate-600" }, pu = ["datetime"], uu = { class: "flex" }, cu = { class: "po-flex po-pt-3 po-flex-wrap po-max-w-sm" }, du = ["onClick"], fu = {
  key: 1,
  class: "po-w-full po-text-center"
}, vu = { class: "po-inline-block po-text-sm po-italic po-text-slate-500" }, mu = /* @__PURE__ */ a("span", { class: "po-text-lg po-text-slate-300 po-px-3 po-inline-block" }, "—", -1), hu = ["datetime"], bu = {
  name: "PoChatLogItem"
}, m0 = /* @__PURE__ */ Object.assign(bu, {
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
    return (t, l) => (r(), p("li", {
      class: E([
        "po-flex po-px-5",
        { "po-justify-end po-items-end po-flex-col": e.item.type === "first" }
      ])
    }, [
      e.item.type !== "message" ? (r(), p("div", au, [
        e.item.type !== "first" && e.item.avatar !== "" ? (r(), p("div", {
          key: 0,
          class: "po-shrink-0 po-w-8 po-h-8 po-rounded-full po-p-1 po-bg-contain po-bg-slate-100",
          style: xt({ "background-image": `url(${e.item.avatar})` })
        }, null, 4)) : b("", !0),
        a("div", {
          class: E([
            { "po-pt-1": e.item.type !== "first" },
            {
              "po-flex po-justify-end po-items-end po-flex-col": e.item.type === "first"
            }
          ])
        }, [
          a("span", su, [
            e.item.type === "first" ? (r(), p("time", {
              key: 0,
              datetime: e.item.time,
              class: "po-text-xs po-text-slate-400"
            }, h(e.item.time_human), 9, ru)) : b("", !0),
            a("span", iu, h(e.item.name), 1),
            e.item.type === "second" ? (r(), p("time", {
              key: 1,
              datetime: e.item.time,
              class: "po-text-xs po-text-slate-400"
            }, h(e.item.time_human), 9, pu)) : b("", !0)
          ]),
          a("div", {
            class: E([
              "po-mt-2 po-space-y-1",
              {
                "po-flex po-justify-end po-items-end po-flex-col": e.item.type === "first"
              }
            ])
          }, [
            te(t.$slots, "message", {}, () => [
              (r(!0), p(B, null, I(e.item.message, (n) => (r(), p("div", uu, [
                a("p", {
                  class: E([
                    "po-text-sm po-rounded-xl po-px-4 po-py-2",
                    {
                      "po-bg-slate-100 po-text-slate-600": e.item.type !== "first"
                    },
                    {
                      "po-bg-mpao-lightblue po-text-sky-50": e.item.type === "first"
                    }
                  ])
                }, h(n), 3)
              ]))), 256))
            ]),
            a("div", cu, [
              (r(!0), p(B, null, I(e.item.actions, (n) => (r(), p("button", {
                onClick: (o) => t.$emit("button-click", n.label),
                class: "po-appearance-none po-border po-border-mpao-lightblue po-bg-white hover:po-bg-mpao-lightblue po-px-3 po-py-1 po-mb-2 po-mr-2 po-rounded-lg po-text-slate-500 hover:po-text-sky-100 po-transition-colors po-duration-150 po-ease-in-out po-text-sm po-ring-0 po-outline-none"
              }, h(n.label), 9, du))), 256))
            ])
          ], 2)
        ], 2)
      ])) : b("", !0),
      e.item.type === "message" ? (r(), p("div", fu, [
        (r(!0), p(B, null, I(e.item.message, (n) => (r(), p("p", vu, [
          X(h(n) + " ", 1),
          mu,
          a("time", {
            datetime: e.item.time,
            class: "po-text-xs po-text-slate-400 po-inline-block"
          }, h(e.item.time_human), 9, hu)
        ]))), 256))
      ])) : b("", !0)
    ], 2));
  }
}), gu = {
  key: 0,
  class: "po-pointer-events-auto po-w-full po-max-w-sm po-overflow-hidden po-rounded-lg po-bg-mpao-lightblue po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5"
}, yu = { class: "po-p-4" }, xu = { class: "po-flex po-items-start" }, wu = { class: "po-flex-shrink-0" }, Vu = { class: "po-ml-3 po-w-0 po-flex-1 po-pt-0.5" }, ku = { class: "po-text-sm po-font-medium po-text-sky-100" }, $u = { class: "po-mt-1 po-text-sm po-text-sky-300" }, _u = { class: "po-mt-3 po-flex po-space-x-4" }, Cu = { class: "po-ml-4 po-flex po-flex-shrink-0" }, Su = /* @__PURE__ */ a("span", { class: "po-sr-only" }, "Close", -1), Pu = {
  name: "PoNotification"
}, h0 = /* @__PURE__ */ Object.assign(Pu, {
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
    const l = e, { show: n } = ge(l), o = k(!1);
    K(n, () => {
      o.value = !1, setTimeout(() => {
        o.value = !0;
      }, 100);
    });
    const s = k(!1);
    return K(o, () => {
      s.value = !1, setTimeout(() => {
        s.value = !0;
      }, 200);
    }), (i, u) => o.value ? (r(), N(Ze, {
      key: 0,
      to: "#po-notifications-alert"
    }, [
      C(we, {
        "enter-active-class": "po-transform po-ease-out po-duration-300 po-transition",
        "enter-from-class": "po-translate-y-2 po-opacity-0 sm:po-translate-y-0 sm:po-translate-x-2",
        "enter-to-class": "po-translate-y-0 po-opacity-100 sm:po-translate-x-0",
        "leave-active-class": "po-transition po-ease-in po-duration-100",
        "leave-from-class": "po-opacity-100",
        "leave-to-class": "po-opacity-0"
      }, {
        default: T(() => [
          s.value ? (r(), p("div", gu, [
            a("div", yu, [
              a("div", xu, [
                a("div", wu, [
                  te(i.$slots, "icon")
                ]),
                a("div", Vu, [
                  a("p", ku, h(e.label), 1),
                  a("p", $u, h(e.text), 1),
                  a("div", _u, [
                    a("button", {
                      onClick: u[0] || (u[0] = (c) => i.$emit("button-click", e.buttonLabel)),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-100 hover:po-text-sky-200 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, h(e.buttonLabel), 1),
                    a("button", {
                      onClick: u[1] || (u[1] = (c) => o.value = !1),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-300 hover:po-text-sky-500 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, " Dismiss ")
                  ])
                ]),
                a("div", Cu, [
                  a("button", {
                    type: "button",
                    onClick: u[2] || (u[2] = (c) => o.value = !1),
                    class: "po-inline-flex po-rounded-md po-bg-mpao-lightblue po-text-sky-500 hover:po-text-sky-300 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                  }, [
                    Su,
                    C(m(Rt), {
                      class: "po-h-5 po-w-5",
                      "aria-hidden": "true"
                    })
                  ])
                ])
              ])
            ])
          ])) : b("", !0)
        ]),
        _: 3
      })
    ])) : b("", !0);
  }
}), Ou = /* @__PURE__ */ a("div", { class: "po-fixed po-inset-0" }, null, -1), Eu = { class: "po-absolute po-inset-0 po-overflow-hidden" }, Lu = { class: "po-pointer-events-none po-fixed po-inset-y-0 po-right-0 po-flex po-max-w-full po-pl-10" }, Tu = { class: "po-flex po-h-full po-flex-col po-overflow-y-auto po-bg-white po-shadow-xl" }, Bu = { class: "po-bg-slate-50 po-py-6 po-px-4 sm:po-px-6" }, ju = { class: "po-flex po-items-center po-justify-between" }, Du = { class: "po-ml-3 po-flex po-h-7 po-items-center" }, Nu = /* @__PURE__ */ a("span", { class: "po-sr-only" }, "Close panel", -1), Au = {
  key: 0,
  class: "po-mt-1"
}, Mu = { class: "po-text-sm po-text-slate-500" }, Iu = {
  key: 0,
  class: "po-bg-slate-50 po-rounded-b-xl po-shrink-0"
}, Ru = {
  name: "PoSlideover"
}, b0 = /* @__PURE__ */ Object.assign(Ru, {
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
    const l = e, { show: n } = ge(l), o = k(!1);
    K(n, () => {
      o.value = n.value;
    });
    function s() {
      o.value = !1, t("slideover-closed", !0);
    }
    return (i, u) => (r(), N(m(He), {
      as: "template",
      show: o.value
    }, {
      default: T(() => [
        C(m(tt), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: s
        }, {
          default: T(() => [
            Ou,
            a("div", {
              class: E(["po-fixed po-inset-0 po-overflow-hidden po-bg-black", e.screenOpacity])
            }, [
              a("div", Eu, [
                a("div", Lu, [
                  C(m(_e), {
                    as: "template",
                    enter: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "enter-from": "po-translate-x-full",
                    "enter-to": "po-translate-x-0",
                    leave: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "leave-from": "po-translate-x-0",
                    "leave-to": "po-translate-x-full"
                  }, {
                    default: T(() => [
                      C(m(ot), {
                        class: E([e.maxWidth, "po-pointer-events-auto po-w-screen"])
                      }, {
                        default: T(() => [
                          a("div", Tu, [
                            a("div", Bu, [
                              a("div", ju, [
                                C(m($o), { class: "po-text-lg po-font-medium po-text-slate-600" }, {
                                  default: T(() => [
                                    X(h(e.label), 1)
                                  ]),
                                  _: 1
                                }),
                                a("div", Du, [
                                  a("button", {
                                    type: "button",
                                    class: "po-rounded-md po-text-slate-500 hover:po-text-mpao-lightblue focus:po-outline-none focus:po-ring-2 focus:po-ring-white",
                                    onClick: s
                                  }, [
                                    Nu,
                                    C(m(Ke), {
                                      class: "po-h-6 po-w-6",
                                      "aria-hidden": "true"
                                    })
                                  ])
                                ])
                              ]),
                              e.description ? (r(), p("div", Au, [
                                a("p", Mu, h(e.description), 1)
                              ])) : b("", !0)
                            ]),
                            a("div", {
                              class: E([e.bgColor, "po-relative po-grow po-pt-6 po-px-4 sm:po-px-6"])
                            }, [
                              te(i.$slots, "content")
                            ], 2),
                            i.$slots.footer ? (r(), p("div", Iu, [
                              te(i.$slots, "footer")
                            ])) : b("", !0)
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
}), Fu = /* @__PURE__ */ a("div", { class: "po-fixed po-inset-0 po-bg-gray-500 po-bg-opacity-25 po-transition-opacity" }, null, -1), zu = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto po-p-4 sm:po-p-6 md:po-p-20" }, Hu = { class: "po-relative" }, qu = {
  key: 0,
  class: "po-max-h-96 scroll-py-3 po-overflow-y-auto po-p-3"
}, Uu = {
  name: "PoCommandPalette"
}, g0 = /* @__PURE__ */ Object.assign(Uu, {
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
    const t = e, l = k(""), { show: n } = ge(t), o = k(!1);
    K(n, () => {
      o.value = !1, setTimeout(() => {
        o.value = !0;
      }, 100);
    });
    function s(i) {
      i.ctrlKey && i.key === "b" && (o.value = !0);
    }
    return H(() => {
      window.addEventListener("keyup", s);
    }), wt(() => {
      window.removeEventListener("keyup", s);
    }), (i, u) => (r(), N(m(He), {
      show: o.value,
      as: "template",
      onAfterLeave: u[2] || (u[2] = (c) => l.value = ""),
      appear: ""
    }, {
      default: T(() => [
        C(m(tt), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: u[1] || (u[1] = (c) => o.value = !1)
        }, {
          default: T(() => [
            C(m(_e), {
              as: "template",
              enter: "po-ease-out po-duration-300",
              "enter-from": "po-opacity-0",
              "enter-to": "po-opacity-100",
              leave: "po-ease-in po-duration-200",
              "leave-from": "po-opacity-100",
              "leave-to": "po-opacity-0"
            }, {
              default: T(() => [
                Fu
              ]),
              _: 1
            }),
            a("div", zu, [
              C(m(_e), {
                as: "template",
                enter: "po-ease-out po-duration-300",
                "enter-from": "po-opacity-0 po-scale-95",
                "enter-to": "po-opacity-100 po-scale-100",
                leave: "po-ease-in po-duration-200",
                "leave-from": "po-opacity-100 po-scale-100",
                "leave-to": "po-opacity-0 po-scale-95"
              }, {
                default: T(() => [
                  C(m(ot), { class: "po-mx-auto po-max-w-xl po-transform po-divide-y po-divide-gray-100 po-overflow-hidden po-rounded-xl po-bg-white po-shadow-2xl po-ring-1 po-ring-black po-ring-opacity-5 po-transition-all" }, {
                    default: T(() => [
                      a("div", Hu, [
                        C(m(fs), {
                          class: "po-pointer-events-none po-absolute po-top-3.5 po-left-4 po-h-5 po-w-5 po-text-gray-400",
                          "aria-hidden": "true"
                        }),
                        a("input", {
                          type: "text",
                          name: "",
                          class: "po-h-12 po-w-full po-border-0 po-bg-transparent po-pl-11 po-pr-4 po-text-gray-800 po-placeholder-gray-400 focus:po-ring-0 sm:po-text-sm",
                          placeholder: "Search...",
                          onChange: u[0] || (u[0] = (c) => l.value = c.target.value)
                        }, null, 32)
                      ]),
                      e.showContent ? (r(), p("div", qu, [
                        te(i.$slots, "content")
                      ])) : b("", !0)
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
}), Wu = /* @__PURE__ */ a("div", { class: "po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity" }, null, -1), Gu = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto" }, Zu = { class: "po-flex po-min-h-full po-items-start po-justify-center po-p-4 po-text-center sm:po-p-0" }, Ku = { class: "po-p-5" }, Qu = { class: "po-text-center po-space-y-3" }, Yu = { key: 1 }, Ju = { class: "po-text-sm po-text-gray-600" }, Xu = { class: "po-border-t po-border-slate-200 po-flex po-divide-x po-divide-slate-200" }, ec = {
  name: "PoAlert"
}, y0 = /* @__PURE__ */ Object.assign(ec, {
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
    const l = e, { show: n } = ge(l), o = k(!1);
    K(n, () => {
      o.value = n.value;
    });
    function s() {
      o.value = !1, t("alert-closed", !0);
    }
    return (i, u) => (r(), N(m(He), {
      as: "template",
      show: o.value
    }, {
      default: T(() => [
        C(m(tt), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: s
        }, {
          default: T(() => [
            C(m(_e), {
              as: "template",
              enter: "po-ease-out po-duration-300",
              "enter-from": "po-opacity-0",
              "enter-to": "po-opacity-100",
              leave: "po-ease-in po-duration-200",
              "leave-from": "po-opacity-100",
              "leave-to": "po-opacity-0"
            }, {
              default: T(() => [
                Wu
              ]),
              _: 1
            }),
            a("div", Gu, [
              a("div", Zu, [
                C(m(_e), {
                  as: "template",
                  enter: "po-ease-out po-duration-300",
                  "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                  "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                  leave: "po-ease-in po-duration-200",
                  "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                  "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                }, {
                  default: T(() => [
                    C(m(ot), { class: "po-relative po-transform po-overflow-hidden po-rounded-lg po-bg-white po-text-left po-shadow-xl po-transition-all sm:po-my-8 sm:po-w-full sm:po-max-w-sm" }, {
                      default: T(() => [
                        a("div", Ku, [
                          a("div", Qu, [
                            e.alertTitle !== "" ? (r(), N(m($o), {
                              key: 0,
                              as: "h3",
                              class: "po-text-lg po-font-medium po-leading-6 po-text-gray-900"
                            }, {
                              default: T(() => [
                                X(h(e.alertTitle), 1)
                              ]),
                              _: 1
                            })) : b("", !0),
                            e.alertDescription !== "" ? (r(), p("div", Yu, [
                              a("p", Ju, h(e.alertDescription), 1)
                            ])) : b("", !0)
                          ])
                        ]),
                        a("div", Xu, [
                          a("button", {
                            onClick: s,
                            class: "po-text-sm po-bg-white po-text-slate-500 hover:po-bg-slate-50 po-transition-colors po-duration-100 po-ease-out po-font-medium po-py-3 po-px-5 po-w-1/2 focus:po-ring-0"
                          }, h(e.cancelBtnLabel), 1),
                          a("button", {
                            onClick: u[0] || (u[0] = (c) => {
                              i.$emit("button-click", "ok"), s();
                            }),
                            class: "po-text-sm po-bg-white po-text-mpao-lightblue hover:po-bg-slate-50 po-transition-colors po-duration-100 po-ease-out po-font-medium po-py-3 po-px-5 po-w-1/2 focus:po-ring-0"
                          }, h(e.okBtnLabel), 1)
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
}), tc = {
  key: 0,
  class: "po-col-span-2 po-relative po-mt-5"
}, oc = /* @__PURE__ */ a("span", {
  class: "po-absolute po-top-0 po-left-1 po--ml-px po-h-[calc(100%-7px)] po-w-0.5 po-bg-gray-200",
  "aria-hidden": "true"
}, null, -1), lc = { class: "po-relative po-space-y-5" }, nc = { class: "po-flex po-space-x-2 po-items-start" }, ac = { class: "log-item" }, sc = { key: 0 }, rc = {
  key: 0,
  class: "po-text-slate-500 po-text-xs"
}, ic = {
  key: 1,
  class: "po-text-center po-py-10"
}, pc = { class: "po-text-sm po-text-slate-500" }, uc = {
  name: "PoLogs"
}, x0 = /* @__PURE__ */ Object.assign(uc, {
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
    return (t, l) => (r(), p("div", null, [
      e.items && e.items.length > 0 ? (r(), p("div", tc, [
        oc,
        a("div", lc, [
          (r(!0), p(B, null, I(e.items, (n, o) => (r(), p("div", nc, [
            a("p", {
              class: E([
                "po-rounded-full po-w-2 po-h-2 border-1 po-border-white po-shrink-0",
                { "po-bg-mpao-orange": o !== e.items.length - 1 },
                ,
                { "po-bg-slate-400": o == e.items.length - 1 }
              ])
            }, null, 2),
            a("div", ac, [
              a("span", null, [
                X(h(n.label) + " on " + h(n.date) + " " + h(n.by && n.by !== "" ? "by" : "") + " ", 1),
                n.by && n.by !== "" ? (r(), p("span", sc, h(n.by), 1)) : b("", !0)
              ]),
              n.description && n.description !== "" ? (r(), p("blockquote", rc, ' "' + h(n.description) + '" ', 1)) : b("", !0)
            ])
          ]))), 256))
        ])
      ])) : (r(), p("div", ic, [
        a("span", pc, h(e.emptyLabel), 1)
      ]))
    ]));
  }
}), cc = {
  key: 0,
  role: "list",
  class: "po-divide-y po-divide-gray-200 po-rounded-md po-border po-border-gray-200 po-mt-5"
}, dc = { class: "po-flex po-items-center po-justify-between po-py-3 po-pl-3 po-pr-4 po-text-sm" }, fc = { class: "po-flex po-w-0 po-flex-1 po-items-center" }, vc = { class: "po-ml-2 po-w-0 po-flex-1 po-truncate" }, mc = { class: "po-ml-4 po-flex-shrink-0 po-space-x-4" }, hc = ["onClick"], bc = ["onClick"], gc = {
  key: 1,
  class: "po-py-10"
}, yc = { class: "po-text-sm po-text-slate-500" }, xc = {
  name: "PoDownloadFileList"
}, w0 = /* @__PURE__ */ Object.assign(xc, {
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
    return (l, n) => (r(), p("div", null, [
      e.files && e.files.length > 0 ? (r(), p("ul", cc, [
        (r(!0), p(B, null, I(e.files, (o) => (r(), p("li", dc, [
          a("div", fc, [
            C(m(lo), {
              class: "po-h-5 po-w-5 po-flex-shrink-0 po-text-gray-400",
              "aria-hidden": "true"
            }),
            a("span", vc, h(o.label), 1)
          ]),
          a("div", mc, [
            a("a", {
              href: "#",
              onClick: ce((s) => l.$emit("button-click", o), ["prevent"]),
              class: "po-font-medium po-text-mpao-lightblue hover:po-text-indigo-500"
            }, h(e.linkLabel), 9, hc),
            e.showViewBtn ? (r(), p("a", {
              key: 0,
              href: "#",
              onClick: ce((s) => l.$emit("view-click", o), ["prevent"]),
              class: "po-font-medium po-text-mpao-lightblue hover:po-text-indigo-500"
            }, h(e.viewBtnLabel), 9, bc)) : b("", !0)
          ])
        ]))), 256))
      ])) : (r(), p("div", gc, [
        a("span", yc, h(e.emptyLabel), 1)
      ]))
    ]));
  }
}), wc = {
  name: "PoContentArea"
}, Vc = { class: "shell-content--area po-max-w-[1370px]" };
function kc(e, t, l, n, o, s) {
  return r(), p("section", Vc, [
    te(e.$slots, "default")
  ]);
}
const V0 = /* @__PURE__ */ st(wc, [["render", kc]]), $c = {
  name: "AnimatedLogo"
}, _c = /* @__PURE__ */ tl('<div><svg class="po-stroke-mpao-blue po-w-16 animated-logo" viewBox="0 0 62 55" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.76292 17.8572L7.7 17.9704V18.0682C6.87397 19.526 6.23618 20.649 5.58241 21.4779C4.93472 22.299 4.30505 22.7864 3.51417 23.0053C3.46261 23.0112 3.41718 23.0206 3.39088 23.026C3.35663 23.0331 3.31491 23.0425 3.27694 23.0511C3.25988 23.055 3.24357 23.0587 3.22903 23.0619C3.1106 23.0882 3.03712 23.1 3 23.1H2.93844L2.89561 23.1107L15.9876 0.600006H19.1308C17.2397 1.92747 16.1556 3.83665 15.5371 5.73245C14.8359 7.88203 14.7198 10.0514 14.7027 11.4258C13.1737 11.6033 11.0729 12.4434 9.38038 15.128C8.77075 16.0431 8.26353 16.9561 7.76713 17.8496L7.76292 17.8572Z"></path><path d="M48.1818 11.3241C48.047 8.39742 47.5389 6.05982 46.5472 4.07639C45.8153 2.61266 44.8203 1.39271 43.5945 0.5H46.8113L59.8583 23.0959C59.8303 23.0912 59.7891 23.0819 59.7213 23.0649C59.7166 23.0638 59.7117 23.0625 59.7066 23.0612C59.6302 23.042 59.5099 23.0118 59.3765 23.0027C58.59 22.7825 57.9627 22.2958 57.3176 21.4779C56.6586 20.6423 56.0158 19.508 55.1801 18.0331L55.1413 17.9647C54.8861 17.4553 54.6068 16.973 54.3362 16.5054L54.3327 16.4995C54.0565 16.0225 53.7893 15.5605 53.5472 15.0764L53.5333 15.0485L53.516 15.0226C51.7283 12.3411 49.7115 11.4988 48.1818 11.3241Z"></path><path d="M9.28397 39.6773C11.0717 42.3589 13.0885 43.2011 14.6182 43.3759C14.753 46.3026 15.2611 48.6402 16.2528 50.6236C16.9991 52.1163 17.9653 53.2992 19.1863 54.2H15.7881L2.74125 31.699C2.76073 31.6996 2.78031 31.7 2.8 31.7C2.89335 31.7 2.97474 31.7149 3.07903 31.7381C3.08854 31.7402 3.09897 31.7426 3.11023 31.7452C3.18647 31.7626 3.30082 31.7888 3.42319 31.7972C4.20888 32.0178 4.86081 32.5271 5.52047 33.3603C6.20216 34.2214 6.85697 35.382 7.66164 36.8405C8.26116 37.9396 8.76739 38.8512 9.276 39.665L9.27989 39.6712L9.28397 39.6773Z"></path><path d="M55.124 36.865L55.1331 36.8504L55.1412 36.8353C55.9431 35.3316 56.5997 34.1683 57.2697 33.307C57.9146 32.4778 58.5471 31.9616 59.2949 31.6961C59.4179 31.6866 59.5418 31.6616 59.6287 31.6442C59.6354 31.6428 59.6418 31.6415 59.6481 31.6403C59.719 31.6261 59.772 31.616 59.8123 31.6095L46.8115 54.1H43.8753C45.7283 52.7465 46.7867 50.8277 47.3889 48.9394C48.064 46.8226 48.1795 44.7058 48.1971 43.3742C49.7262 43.1967 51.8271 42.3567 53.5196 39.6719C53.8327 39.2016 54.1164 38.6849 54.3777 38.1995C54.4112 38.1375 54.4442 38.076 54.4768 38.0152C54.7049 37.5906 54.9148 37.1996 55.124 36.865Z"></path><path d="M32.2763 51.5708L32.2653 51.5582L32.2536 51.5465C32.0661 51.359 31.7413 51.2 31.4 51.2C31.3949 51.2 31.3894 51.2 31.3835 51.2C31.2956 51.1998 31.1323 51.1993 30.9751 51.2442C30.7932 51.2962 30.6132 51.4082 30.4904 51.6086C29.1941 53.0706 27.544 53.8 25.5 53.8C22.8209 53.8 20.828 52.9218 19.4532 51.2005C18.1148 49.5247 17.3123 46.988 17.1201 43.5109C18.6883 43.1579 19.8601 42.2673 20.5004 41.6896C20.5136 44.8271 20.8579 46.8152 21.6737 48.0181C22.5558 49.319 23.9045 49.6 25.5 49.6C27.4335 49.6 28.5187 48.2893 29.0946 46.9901C29.6604 45.7138 29.7966 44.3347 29.7999 43.8193C29.8943 42.5846 30.6602 41.8 31.5 41.8H31.5778C32.4558 41.8842 33.2 42.7102 33.2 43.9C33.2 45.6119 33.5619 47.0065 34.2986 47.9982C35.0485 49.0077 36.1459 49.544 37.4792 49.5996L37.4896 49.6H37.5C39.2304 49.6 40.5973 49.3258 41.4454 48.0081C41.849 47.3811 42.1078 46.5565 42.2692 45.5056C42.4311 44.4518 42.5 43.1353 42.5 41.5V24.4455L45.9 21.8182V41.5C45.9 41.4958 45.8996 41.5001 45.8978 41.519C45.8959 41.5381 45.8927 41.5719 45.887 41.6267L45.8842 41.6541C45.8752 41.7406 45.8636 41.8524 45.8521 41.9797C45.8264 42.2614 45.8 42.6283 45.8 43V43.9V43.9029V43.9059V43.9088V43.9117V43.9146V43.9175V43.9205V43.9234V43.9263V43.9292V43.9321V43.935V43.9379V43.9408V43.9437V43.9466V43.9495V43.9524V43.9553V43.9581V43.961V43.9639V43.9668V43.9696V43.9725V43.9754V43.9783V43.9811V43.984V43.9868V43.9897V43.9926V43.9954V43.9983V44.0011V44.004V44.0068V44.0096V44.0125V44.0153V44.0181V44.021V44.0238V44.0266V44.0295V44.0323V44.0351V44.0379V44.0407V44.0435V44.0463V44.0492V44.052V44.0548V44.0576V44.0603V44.0631V44.0659V44.0687V44.0715V44.0743V44.0771V44.0798V44.0826V44.0854V44.0882V44.0909V44.0937V44.0965V44.0992V44.102V44.1047V44.1075V44.1102V44.113V44.1157V44.1185V44.1212V44.1239V44.1267V44.1294V44.1321V44.1349V44.1376V44.1403V44.143V44.1457V44.1484V44.1512V44.1539V44.1566V44.1593V44.162V44.1647V44.1674V44.17V44.1727V44.1754V44.1781V44.1808V44.1835V44.1861V44.1888V44.1915V44.1941V44.1968V44.1995V44.2021V44.2048V44.2074V44.2101V44.2127V44.2154V44.218V44.2207V44.2233V44.2259V44.2285V44.2312V44.2338V44.2364V44.239V44.2417V44.2443V44.2469V44.2495V44.2521V44.2547V44.2573V44.2599V44.2625V44.2651V44.2677V44.2702V44.2728V44.2754V44.278V44.2806V44.2831V44.2857V44.2882V44.2908V44.2934V44.2959V44.2985V44.301V44.3036V44.3061V44.3087V44.3112V44.3137V44.3163V44.3188V44.3213V44.3238V44.3264V44.3289V44.3314V44.3339V44.3364V44.3389V44.3414V44.3439V44.3464V44.3489V44.3514V44.3539V44.3564V44.3588V44.3613V44.3638V44.3663V44.3687V44.3712V44.3737V44.3761V44.3786V44.381V44.3835V44.3859V44.3884V44.3908V44.3932V44.3957V44.3981V44.4005V44.403V44.4054V44.4078V44.4102V44.4126V44.415V44.4174V44.4199V44.4223V44.4247V44.427V44.4294V44.4318V44.4342V44.4366V44.439V44.4413V44.4437V44.4461V44.4484V44.4508V44.4532V44.4555V44.4579V44.4602V44.4626V44.4649V44.4672V44.4696V44.4719V44.4742V44.4766V44.4789V44.4812V44.4835V44.4858V44.4882V44.4905V44.4928V44.4951V44.4974V44.4997V44.5019V44.5042V44.5065V44.5088V44.5111V44.5133V44.5156V44.5179V44.5201V44.5224V44.5247V44.5269V44.5292V44.5314V44.5337V44.5359V44.5381V44.5404V44.5426V44.5448V44.547V44.5493V44.5515V44.5537V44.5559V44.5581V44.5603V44.5625V44.5647V44.5669V44.5691V44.5713V44.5734V44.5756V44.5778V44.58V44.5821V44.5843V44.5865V44.5886V44.5908V44.5929V44.5951V44.5972V44.5994V44.6015V44.6036V44.6058V44.6079V44.61V44.6121V44.6142V44.6164V44.6185V44.6206V44.6227V44.6248V44.6269V44.6289V44.631V44.6331V44.6352V44.6373V44.6393V44.6414V44.6435V44.6455V44.6476V44.6497V44.6517V44.6538V44.6558V44.6578V44.6599V44.6619V44.6639V44.666V44.668V44.67V44.672V44.674V44.676V44.678V44.68V44.682V44.684V44.686V44.688V44.69V44.692V44.6939V44.6959V44.6979V44.6998V44.7018V44.7037V44.7057V44.7076V44.7096V44.7115V44.7135V44.7154V44.7173V44.7193V44.7212V44.7231V44.725V44.7269V44.7288V44.7307V44.7326V44.7345V44.7364V44.7383V44.7402V44.7421V44.7439V44.7458V44.7477V44.7495V44.7514V44.7533V44.7551V44.757V44.7588V44.7606V44.7625V44.7643V44.7661V44.768V44.7698V44.7716V44.7734V44.7752V44.777V44.7788V44.7806V44.7824V44.7842V44.786V44.7878V44.7896V44.7914V44.7931V44.7949V44.7967V44.7984V44.8002V44.8019V44.8037V44.8054V44.8071V44.8089V44.8106V44.8123V44.8141V44.8158V44.8175V44.8192V44.8209V44.8226V44.8243V44.826V44.8277V44.8294V44.8311V44.8328V44.8344V44.8361V44.8378V44.8394V44.8411V44.8427V44.8444V44.846V44.8477V44.8493V44.851V44.8526V44.8542V44.8558V44.8575V44.8591V44.8607V44.8623V44.8639V44.8655V44.8671V44.8687V44.8702V44.8718V44.8734V44.875V44.8765V44.8781V44.8797V44.8812V44.8828V44.8843V44.8859V44.8874V44.8889V44.8905V44.892V44.8935V44.895V44.8965V44.898V44.8996V44.9011V44.9025V44.904V44.9055V44.907V44.9085V44.91V44.9114V44.9129V44.9144V44.9158V44.9173V44.9187V44.9202V44.9216V44.923V44.9245V44.9259V44.9273V44.9288V44.9302V44.9316V44.933V44.9344V44.9358V44.9372V44.9386V44.9399V44.9413V44.9427V44.9441V44.9454V44.9468V44.9482V44.9495V44.9509V44.9522V44.9535V44.9549V44.9562V44.9575V44.9589V44.9602V44.9615V44.9628V44.9641V44.9654V44.9667V44.968V44.9693V44.9706V44.9718V44.9731V44.9744V44.9757V44.9769V44.9782V44.9794V44.9807V44.9819V44.9832V44.9844V44.9856V44.9868V44.9881V44.9893V44.9905V44.9917V44.9929V44.9941V44.9953V44.9965V44.9977V44.9988V45V45.1V45.1006V45.1012V45.1017V45.1023V45.1029V45.1035V45.104V45.1046V45.1052V45.1057V45.1063V45.1069V45.1074V45.108V45.1085V45.1091V45.1096V45.1102V45.1107V45.1113V45.1118V45.1123V45.1129V45.1134V45.1139V45.1145V45.115V45.1155V45.1161V45.1166V45.1171V45.1176V45.1181V45.1186V45.1191V45.1196V45.1202V45.1207V45.1212V45.1217V45.1222V45.1226V45.1231V45.1236V45.1241V45.1246V45.1251V45.1256V45.1261V45.1265V45.127V45.1275V45.128V45.1284V45.1289V45.1294V45.1298V45.1303V45.1307V45.1312V45.1317V45.1321V45.1326V45.133V45.1335V45.1339V45.1343V45.1348V45.1352V45.1357V45.1361V45.1365V45.137V45.1374V45.1378V45.1383V45.1387V45.1391V45.1395V45.1399V45.1404V45.1408V45.1412V45.1416V45.142V45.1424V45.1428V45.1432V45.1436V45.144V45.1444V45.1448V45.1452V45.1456V45.146V45.1464V45.1468V45.1471V45.1475V45.1479V45.1483V45.1487V45.149V45.1494V45.1498V45.1501V45.1505V45.1509V45.1512V45.1516V45.152V45.1523V45.1527V45.153V45.1534V45.1537V45.1541V45.1544V45.1548V45.1551V45.1555V45.1558V45.1561V45.1565V45.1568V45.1572V45.1575V45.1578V45.1581V45.1585V45.1588V45.1591V45.1594V45.1598V45.1601V45.1604V45.1607V45.161V45.1613V45.1616V45.162V45.1623V45.1626V45.1629V45.1632V45.1635V45.1638V45.1641V45.1644V45.1647V45.165V45.1652V45.1655V45.1658V45.1661V45.1664V45.1667V45.167V45.1672V45.1675V45.1678V45.1681V45.1683V45.1686V45.1689V45.1691V45.1694V45.1697V45.1699V45.1702V45.1705V45.1707V45.171V45.1712V45.1715V45.1717V45.172V45.1722V45.1725V45.1727V45.173V45.1732V45.1735V45.1737V45.174V45.1742V45.1744V45.1747V45.1749V45.1751V45.1753C45.5039 48.1507 44.6544 50.2924 43.3031 51.6899C41.9582 53.0807 40.0524 53.8 37.5 53.8C35.4235 53.8 33.5685 53.0476 32.2763 51.5708Z"></path><path d="M22.8 23.2538V18.2178L29.3909 23.307L26.1939 25.8645L22.8 23.2538Z"></path><path d="M16.7 20.2V19.7H16.5V18.8V10.858C16.5042 10.8478 16.5096 10.8348 16.5142 10.8232C16.5488 10.7368 16.5963 10.6012 16.5998 10.4209C16.8474 7.03069 17.6799 4.61275 19.0737 3.04468C20.4543 1.49155 22.4511 0.699997 25.2 0.699997C27.2568 0.699997 29.1263 1.53906 30.5352 3.04197L30.5407 3.04785L30.5464 3.05355C30.7614 3.26854 31.0508 3.35 31.3 3.35C31.5492 3.35 31.8386 3.26854 32.0536 3.05355L32.0646 3.04251L32.0749 3.03081C33.4779 1.4408 35.1402 0.699997 37.3 0.699997C40.0769 0.699997 42.1441 1.62655 43.5571 3.42174C44.934 5.17104 45.7393 7.80743 45.886 11.3874C44.0184 11.8028 42.6345 12.9721 42.1 13.4936V13.2C42.1 10.0544 41.7835 8.06299 40.9925 6.86242C40.1497 5.58316 38.8495 5.3 37.3 5.3C35.4114 5.3 34.3769 6.59229 33.8399 7.85422C33.3055 9.11015 33.2 10.457 33.2 10.9C33.2 12.2634 32.2859 13.1 31.3 13.1H31.2204C30.2388 13.0141 29.4 12.0845 29.4 10.8C29.4 9.19015 29.0639 7.84653 28.3661 6.89234C27.6525 5.91665 26.5974 5.4 25.3 5.4C23.6267 5.4 22.3017 5.64608 21.4896 6.93319C21.1052 7.5425 20.863 8.34586 20.7131 9.3714C20.5626 10.4004 20.5 11.6909 20.5 13.3V30.4541L16.7 33.3833V20.2Z"></path><path d="M40.1 31.5462V36.5799L33.4225 31.4049L36.6974 28.9288L40.1 31.5462Z"></path><mask id="path-9-inside-1" fill="white"><path d="M58.7 30.1C58.9 30 59.5 30 59.8 29.9C60.9 29.8 61.8 28.7 61.8 27.4C61.8 26.1 60.9 25 59.8 24.9C59.7 24.9 59.5 24.9 59.4 24.8C59.3 24.8 59.2 24.8 59.1 24.7C59.1 24.7 59.1 24.7 59 24.7C58.6 24.6 58.1 24.4 57.7 24.1C57.7 24.1 57.7 24.1 57.6 24C56.1 23.1 55 21.2 53.6 18.7C53.1 17.8 52.6 16.9 52 16C50.5 13.7 48.9 13.1 47.8 13C47.7 13 47.6 13 47.5 13H47.3C47.1 13 46.9 13 46.9 13C45.2 13.2 44 14.3 43.6 14.8L25.2 29.1C25.2 29.1 25.2 29.1 25.1 29.2L23 30.8L16.8 35.5L16.4 35.9C16.4 35.9 16.4 35.9 16.3 35.9C16 36.1 15.7 36.3 15.4 36.3C15.1 36.3 14.9 36.2 14.7 36.1C14.5 35.9 14.4 35.8 14.3 35.5C13.9 34.8 13.4 34.1 13 33.3V33.1C12.2 31.7 11.3 30 10.1 28.6C10.1 28.6 10.1 28.6 10.1 28.5L10 28.4C9.9 28.3 9.9 28.3 9.8 28.2C9.8 28.2 9.8 28.2 9.7 28.1L9.2 27.5C9.2 27.5 9.2 27.5 9.1 27.5C9 27.3 9 27.1 9.1 27L9.6 26.5C10.9 25 11.9 23.2 12.8 21.6V21.5C13.2 20.7 13.7 19.9 14.2 19.1C14.4 18.8 14.6 18.6 14.7 18.5V13.1C13.6 13.2 12 13.9 10.6 16C10 16.9 9.5 17.8 9 18.7C7.8 20.9 6.8 22.5 5.6 23.5C4.8 24.1 4 24.4 3.5 24.6C3.5 24.6 3.5 24.6 3.4 24.6C3.3 24.6 3.1 24.7 3 24.7C2.9 24.7 2.9 24.7 2.8 24.7C2.7 24.7 2.7 24.7 2.7 24.7H2.6H2.5C2.3 24.7 2.2 24.8 2.1 24.8C2 24.8 2 24.8 2 24.9C1.7 25.1 1.4 25.3 1.2 25.6C1.2 25.7 1.1 25.7 1.1 25.8V25.9L0.999997 26.1C0.999997 26.2 0.999997 26.2 0.899997 26.3C0.899997 26.4 0.899997 26.4 0.799997 26.5C0.799997 26.6 0.799997 26.7 0.699997 26.7C0.699997 26.8 0.699997 26.9 0.699997 26.9C0.699997 27 0.699997 27.1 0.699997 27.1C0.699997 27.2 0.699997 27.2 0.699997 27.3C0.699997 27.4 0.699997 27.5 0.699997 27.5C0.699997 27.6 0.699997 27.7 0.699997 27.7C0.699997 27.8 0.699997 27.9 0.799997 27.9V28V28.1C0.799997 28.2 0.799997 28.2 0.899997 28.2L0.999997 28.4C0.999997 28.5 1.1 28.5 1.1 28.5C1.1 28.5 1.1 28.5 1.1 28.6C1.2 28.7 1.3 28.9 1.5 29C1.6 29 1.6 29.1 1.7 29.1C1.7 29.1 1.8 29.1 1.8 29.2C1.8 29.2 1.8 29.2 1.9 29.2C2 29.3 2.2 29.3 2.3 29.4C2.4 29.4 2.4 29.4 2.4 29.4L2.9 29.5C3.1 29.5 3.2 29.6 3.4 29.6C4.2 29.8 4.7 30.2 4.8 30.2C6.4 31.2 7.5 33 8.9 35.5C9.5 36.6 10 37.4 10.5 38.2C11.9 40.3 13.4 41 14.4 41.1C14.5 41.1 14.5 41.1 14.6 41.1C14.7 41.1 14.8 41.1 14.8 41.1C15 41.1 15.2 41.1 15.5 41.1H15.6C17.2 40.8 18.5 39.8 18.9 39.3L19 39.2L19.8 38.6C19.8 38.6 19.9 38.5 20 38.5L30.2 30.6L41.3 22L46.5 18H46.6C46.7 18 46.9 17.9 47 17.9C47.4 17.9 47.8 18.1 48.1 18.6L48.5 19.2C48.8 19.7 49.2 20.3 49.5 20.9V21C50.1 22.1 50.8 23.4 51.7 24.6C51.7 24.6 51.7 24.7 51.8 24.7C52.1 25.1 52.4 25.5 52.7 25.8C52.7 25.8 52.8 25.8 52.8 25.9C53 26.1 53.1 26.3 53.3 26.4C53.4 26.5 53.4 26.7 53.3 26.9C52 28.5 50.4 31.1 49.6 32.4V32.5C49.2 33.2 48.7 34.1 48.2 34.9C48 35.2 47.8 35.4 47.7 35.5V40.9C48.8 40.8 50.4 40.1 51.8 37.9C52.4 37 52.9 36 53.4 35.2C53.5 35 53.7 34.7 53.8 34.5C55.2 33 56.4 30.9 58.7 30.1Z"></path></mask><path d="M58.7 30.1C58.9 30 59.5 30 59.8 29.9C60.9 29.8 61.8 28.7 61.8 27.4C61.8 26.1 60.9 25 59.8 24.9C59.7 24.9 59.5 24.9 59.4 24.8C59.3 24.8 59.2 24.8 59.1 24.7C59.1 24.7 59.1 24.7 59 24.7C58.6 24.6 58.1 24.4 57.7 24.1C57.7 24.1 57.7 24.1 57.6 24C56.1 23.1 55 21.2 53.6 18.7C53.1 17.8 52.6 16.9 52 16C50.5 13.7 48.9 13.1 47.8 13C47.7 13 47.6 13 47.5 13H47.3C47.1 13 46.9 13 46.9 13C45.2 13.2 44 14.3 43.6 14.8L25.2 29.1C25.2 29.1 25.2 29.1 25.1 29.2L23 30.8L16.8 35.5L16.4 35.9C16.4 35.9 16.4 35.9 16.3 35.9C16 36.1 15.7 36.3 15.4 36.3C15.1 36.3 14.9 36.2 14.7 36.1C14.5 35.9 14.4 35.8 14.3 35.5C13.9 34.8 13.4 34.1 13 33.3V33.1C12.2 31.7 11.3 30 10.1 28.6C10.1 28.6 10.1 28.6 10.1 28.5L10 28.4C9.9 28.3 9.9 28.3 9.8 28.2C9.8 28.2 9.8 28.2 9.7 28.1L9.2 27.5C9.2 27.5 9.2 27.5 9.1 27.5C9 27.3 9 27.1 9.1 27L9.6 26.5C10.9 25 11.9 23.2 12.8 21.6V21.5C13.2 20.7 13.7 19.9 14.2 19.1C14.4 18.8 14.6 18.6 14.7 18.5V13.1C13.6 13.2 12 13.9 10.6 16C10 16.9 9.5 17.8 9 18.7C7.8 20.9 6.8 22.5 5.6 23.5C4.8 24.1 4 24.4 3.5 24.6C3.5 24.6 3.5 24.6 3.4 24.6C3.3 24.6 3.1 24.7 3 24.7C2.9 24.7 2.9 24.7 2.8 24.7C2.7 24.7 2.7 24.7 2.7 24.7H2.6H2.5C2.3 24.7 2.2 24.8 2.1 24.8C2 24.8 2 24.8 2 24.9C1.7 25.1 1.4 25.3 1.2 25.6C1.2 25.7 1.1 25.7 1.1 25.8V25.9L0.999997 26.1C0.999997 26.2 0.999997 26.2 0.899997 26.3C0.899997 26.4 0.899997 26.4 0.799997 26.5C0.799997 26.6 0.799997 26.7 0.699997 26.7C0.699997 26.8 0.699997 26.9 0.699997 26.9C0.699997 27 0.699997 27.1 0.699997 27.1C0.699997 27.2 0.699997 27.2 0.699997 27.3C0.699997 27.4 0.699997 27.5 0.699997 27.5C0.699997 27.6 0.699997 27.7 0.699997 27.7C0.699997 27.8 0.699997 27.9 0.799997 27.9V28V28.1C0.799997 28.2 0.799997 28.2 0.899997 28.2L0.999997 28.4C0.999997 28.5 1.1 28.5 1.1 28.5C1.1 28.5 1.1 28.5 1.1 28.6C1.2 28.7 1.3 28.9 1.5 29C1.6 29 1.6 29.1 1.7 29.1C1.7 29.1 1.8 29.1 1.8 29.2C1.8 29.2 1.8 29.2 1.9 29.2C2 29.3 2.2 29.3 2.3 29.4C2.4 29.4 2.4 29.4 2.4 29.4L2.9 29.5C3.1 29.5 3.2 29.6 3.4 29.6C4.2 29.8 4.7 30.2 4.8 30.2C6.4 31.2 7.5 33 8.9 35.5C9.5 36.6 10 37.4 10.5 38.2C11.9 40.3 13.4 41 14.4 41.1C14.5 41.1 14.5 41.1 14.6 41.1C14.7 41.1 14.8 41.1 14.8 41.1C15 41.1 15.2 41.1 15.5 41.1H15.6C17.2 40.8 18.5 39.8 18.9 39.3L19 39.2L19.8 38.6C19.8 38.6 19.9 38.5 20 38.5L30.2 30.6L41.3 22L46.5 18H46.6C46.7 18 46.9 17.9 47 17.9C47.4 17.9 47.8 18.1 48.1 18.6L48.5 19.2C48.8 19.7 49.2 20.3 49.5 20.9V21C50.1 22.1 50.8 23.4 51.7 24.6C51.7 24.6 51.7 24.7 51.8 24.7C52.1 25.1 52.4 25.5 52.7 25.8C52.7 25.8 52.8 25.8 52.8 25.9C53 26.1 53.1 26.3 53.3 26.4C53.4 26.5 53.4 26.7 53.3 26.9C52 28.5 50.4 31.1 49.6 32.4V32.5C49.2 33.2 48.7 34.1 48.2 34.9C48 35.2 47.8 35.4 47.7 35.5V40.9C48.8 40.8 50.4 40.1 51.8 37.9C52.4 37 52.9 36 53.4 35.2C53.5 35 53.7 34.7 53.8 34.5C55.2 33 56.4 30.9 58.7 30.1Z"></path></svg></div>', 1), Cc = [
  _c
];
function Sc(e, t, l, n, o, s) {
  return r(), p("div", null, Cc);
}
const Pc = /* @__PURE__ */ st($c, [["render", Sc]]), Oc = {
  key: 0,
  class: "po-fixed po-z-[999] po-top-0 po-bottom-0 po-left-0 po-right-0 po-flex po-items-center po-justify-center"
}, Ec = /* @__PURE__ */ a("div", { class: "po-absolute po-w-[6.2rem] po-h-[6.2rem] po-bg-transparent po-overflow-hidden po-rounded-xl" }, [
  /* @__PURE__ */ a("div", { class: "po-loading-rotate po-absolute -po-top-8 -po-left-8 po-w-[10rem] po-h-[10rem]" })
], -1), Lc = { class: "relative po-bg-white po-w-24 po-h-24 po-flex po-items-center po-justify-center po-rounded-xl po-bg-opacity-50 po-backdrop-blur po-backdrop-filter po-z-10 po-shadow-xl" }, Tc = {
  key: 0,
  class: "po-absolute po-left-1 po-right-1 po-text-center po-py-1 po-text-xs po-text-mpao-blue po-bg-white po-bg-opacity-50 po-backdrop-blur po-backdrop-filter"
}, Bc = {
  name: "PoLoading"
}, k0 = /* @__PURE__ */ Object.assign(Bc, {
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
    return (t, l) => e.show ? (r(), p("div", Oc, [
      Ec,
      a("div", Lc, [
        e.label !== "" ? (r(), p("span", Tc, h(e.label), 1)) : b("", !0),
        C(Pc)
      ])
    ])) : b("", !0);
  }
}), jc = { class: "po-py-5 po-flex po-items-start po-space-x-5" }, Dc = ["name", "id", "checked", "aria-describedby"], Nc = { class: "po-grow -po-mt-[0.26rem]" }, Ac = ["for"], Mc = { class: "po-mt-2 po-flex po-space-x-3" }, Ic = ["href", "onClick"], Rc = {
  name: "PoConsent"
}, $0 = /* @__PURE__ */ Object.assign(Rc, {
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
    return (t, l) => (r(), p("div", jc, [
      a("input", Ee({
        type: "checkbox",
        name: `${e.id}-field`,
        id: e.id,
        checked: e.modelValue,
        "aria-describedby": `${e.id}-description`
      }, t.$attrs, {
        onInput: l[0] || (l[0] = (n) => t.$emit("update:modelValue", n.target.checked)),
        class: "po-shrink-0 po-h-4 po-w-4 po-rounded border-slate-300 po-text-mpao-lightblue focus:po-ring-mpao-lightblue"
      }), null, 16, Dc),
      a("div", Nc, [
        a("label", {
          class: "po-block po-select-none po-text-sm po-text-slate-600 po-cursor-pointer",
          for: e.id
        }, h(e.label), 9, Ac),
        a("div", Mc, [
          (r(!0), p(B, null, I(e.links, (n) => (r(), p("a", {
            href: n.url,
            onClick: ce((o) => t.$emit("button-click", n.url), ["prevent"]),
            class: "po-text-sm po-text-mpao-lightblue hover:po-text-mpao-blue"
          }, h(n.label), 9, Ic))), 256))
        ])
      ])
    ]));
  }
}), Fc = { class: "po-mt-5 po-bg-slate-50 -po-mx-5 po-px-4 po-py-3 po-space-y-3" }, zc = ["onClick"], Hc = { class: "po-absolute po-bg-white po-top-4 po-right-4 po-z-10 po-text-xs po-text-slate-600 po-font-medium" }, qc = { class: "po-shrink-0 po-pr-3 po-flex po-items-center po-border-r po-border-dashed po-border-slate-300" }, Uc = {
  key: 4,
  class: "po-w-5 po-h-5 po-fill-slate-400 po-shrink-0",
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  viewBox: "0 0 226.978 226.978"
}, Wc = /* @__PURE__ */ a("path", { d: "M199.569 25.393C181.627 7.803 152.62-.72 113.339.048 73.731.827 47.255 7.779 30.018 21.927 13.352 35.605 5.59 55.62 5.59 84.915v29.898c0 34.584 18.532 72.605 53.951 78.358 4.089.669 7.941-2.111 8.605-6.201a7.5 7.5 0 0 0-6.201-8.605c-26.861-4.363-41.355-36-41.355-63.552V84.915c0-42.006 15.565-68.347 93.043-69.871 35.125-.696 60.477 6.395 75.433 21.059 11.655 11.429 17.321 27.395 17.321 48.812v29.898c0 45.274-20.321 65.243-72.441 71.123H96.988c-1.989 0-3.897.79-5.303 2.197l-26.041 26.041a7.5 7.5 0 0 0 10.606 10.607l23.845-23.845h34.27c.276 0 .553-.015.828-.046 29.828-3.313 50.254-11.076 64.279-24.432 14.747-14.044 21.916-34.208 21.916-61.646V84.915c0-25.299-7.341-45.325-21.819-59.522z" }, null, -1), Gc = /* @__PURE__ */ a("path", { d: "M118.17 48.988h.003c12.085 0 23.447 4.707 31.993 13.253 8.547 8.547 13.254 19.911 13.253 31.998a7.5 7.5 0 0 0 7.499 7.5h.001a7.5 7.5 0 0 0 7.5-7.499c.001-16.094-6.266-31.225-17.646-42.605-11.379-11.38-26.507-17.646-42.6-17.646h-.005a7.5 7.5 0 1 0 .002 14.999z" }, null, -1), Zc = /* @__PURE__ */ a("path", { d: "M118.168 75.362c10.408.002 18.877 8.47 18.878 18.877a7.5 7.5 0 0 0 7.501 7.499c4.143 0 7.5-3.359 7.499-7.501-.003-18.676-15.199-33.872-33.876-33.875h-.001a7.5 7.5 0 0 0-.001 15zM84.538 88.213a7.5 7.5 0 0 0 8.465 12.382c2.689-1.838 8.987-6.144 8.545-14.752-.28-5.152-4.927-12.508-8.776-17.772-5.63-7.702-10.482-12.341-14.391-13.779-3.65-1.359-7.467-1.388-11.353-.084-8.049 2.712-13.893 7.613-16.899 14.173-2.927 6.386-2.862 13.725.189 21.228 7.206 17.678 17.294 33.155 30.051 46.067 12.845 12.689 28.321 22.777 46.006 29.987 3.827 1.557 7.613 2.336 11.252 2.336 3.49 0 6.845-.716 9.971-2.149 6.56-3.007 11.46-8.85 14.175-16.909 1.3-3.877 1.271-7.692-.077-11.317-1.448-3.937-6.088-8.788-13.789-14.418-5.265-3.849-12.621-8.496-17.793-8.777-8.59-.432-12.892 5.855-14.73 8.544a7.5 7.5 0 0 0 12.381 8.469c.816-1.193 1.282-1.735 1.549-1.972 4.21 1.349 16.215 10.169 18.376 13.549.053.216.065.545-.135 1.144-.946 2.809-2.791 6.486-6.206 8.052-3.199 1.464-6.834.566-9.316-.443-15.847-6.461-29.682-15.466-41.058-26.703-11.301-11.439-20.306-25.274-26.763-41.115-1.012-2.488-1.911-6.125-.446-9.321 1.565-3.415 5.243-5.261 8.043-6.205.598-.2.927-.189 1.155-.134 3.381 2.165 12.196 14.163 13.546 18.374-.238.263-.779.73-1.972 1.545z" }, null, -1), Kc = [
  Wc,
  Gc,
  Zc
], Qc = { class: "po-grow po-space-y-2 po-pl-3 -po-mb-1" }, Yc = { class: "po-text-base po-text-slate-600 po-font-medium" }, Jc = {
  key: 0,
  class: ""
}, Xc = {
  key: 0,
  class: "po-border-b po-border-slate-200 po-pb-3 po-grid po-grid-cols-2"
}, ed = ["for"], td = ["id", "onUpdate:modelValue", "onChange"], od = ["value"], ld = {
  key: 0,
  class: "po-flex po-flex-wrap"
}, nd = { class: "po-font-medium po-text-slate-500 po-capitalize" }, ad = ["onClick"], sd = {
  name: "PoCallLog",
  components: { ChevronDownIcon: to, ChevronUpIcon: oo }
}, _0 = /* @__PURE__ */ Object.assign(sd, {
  props: {
    /**
     * List of items
     */
    list: {
      type: Array,
      default: null
    },
    selectFieldLabel: {
      type: String,
      default: ""
    },
    selectFieldList: {
      type: Array,
      default: null
    }
  },
  emits: ["selectUpdated"],
  setup(e, { emit: t }) {
    const l = e, { list: n } = ge(l), o = k(null);
    function s(u, c) {
      c.details && (o.value = o.value === u ? null : u);
    }
    function i(u, c) {
      t("selectUpdated", { logId: c, selectedId: u });
    }
    return (u, c) => (r(), p("ul", Fc, [
      (r(!0), p(B, null, I(m(n), (f, v) => (r(), p("li", {
        onClick: (d) => u.$emit("button-click", f),
        class: E(["po-bg-white po-rounded-lg po-p-3 po-transition-shadow po-duration-100 po-ease-out po-shadow hover:po-shadow-lg po-flex po-item-center po-border-l-4 po-relative", f.highlightColor])
      }, [
        a("span", Hc, h(f.topRightLabel), 1),
        a("div", qc, [
          f.type === "chat" ? (r(), N(m(fl), {
            key: 0,
            class: "po-w-5 po-h-5 po-stroke-slate-400 po-shrink-0"
          })) : b("", !0),
          f.type === "email" ? (r(), N(m(gl), {
            key: 1,
            class: "po-w-5 po-h-5 po-stroke-slate-400 po-shrink-0"
          })) : b("", !0),
          f.type === "in" ? (r(), N(m(Vl), {
            key: 2,
            class: "po-w-5 po-h-5 po-stroke-slate-400 po-shrink-0"
          })) : b("", !0),
          f.type === "out" ? (r(), N(m(kl), {
            key: 3,
            class: "po-w-5 po-h-5 po-stroke-slate-400 po-shrink-0"
          })) : b("", !0),
          f.type === "viber" ? (r(), p("svg", Uc, Kc)) : b("", !0)
        ]),
        a("div", Qc, [
          a("h3", Yc, h(f.subject), 1),
          C(we, {
            "enter-active-class": "po-transition po-duration-100 po-ease-out",
            "enter-from-class": "po-transform po-scale-95 po-opacity-0",
            "enter-to-class": "po-transform po-scale-100 po-opacity-100",
            "leave-active-class": "po-transition po-duration-75 po-ease-out",
            "leave-from-class": "po-transform po-scale-100 po-opacity-100",
            "leave-to-class": "po-transform po-scale-95 po-opacity-0"
          }, {
            default: T(() => [
              o.value === v ? (r(), p("div", Jc, [
                e.selectFieldList !== null ? (r(), p("div", Xc, [
                  a("label", {
                    for: `select-field-calllog-${v}`,
                    class: "po-text-sm po-text-slate-500"
                  }, h(e.selectFieldLabel), 9, ed),
                  Re(a("select", {
                    name: "",
                    id: `select-field-calllog-${v}`,
                    "onUpdate:modelValue": (d) => m(n)[v].selectFieldValue = d,
                    onChange: (d) => i(Number(d.target.value), f.id),
                    class: "po-border-none focus:po-ring-0 po-bg-slate-100 po-rounded-md po-text-sm po-text-slate-700"
                  }, [
                    (r(!0), p(B, null, I(e.selectFieldList, (d) => (r(), p("option", {
                      value: d.id
                    }, h(d.name), 9, od))), 256))
                  ], 40, td), [
                    [
                      ol,
                      m(n)[v].selectFieldValue,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ])) : b("", !0),
                C(Wo, {
                  items: f.details
                }, null, 8, ["items"])
              ])) : b("", !0)
            ]),
            _: 2
          }, 1024),
          o.value !== v ? (r(), p("div", ld, [
            (r(!0), p(B, null, I(f.meta, (d, g) => (r(), p("p", {
              class: "po-text-xs po-space-x-2 po-mr-5 po-mb-2",
              key: g
            }, [
              a("span", nd, h(d.label), 1),
              a("span", {
                class: E(["po-text-slate-500 po-px-[0.2em] po-rounded-md", d.color])
              }, h(d.description), 3)
            ]))), 128))
          ])) : b("", !0),
          a("span", {
            role: "button",
            onClick: (d) => s(v, f),
            class: "po-block po-bg-slate-50 po-rounded-md po-p-2 hover:po-bg-slate-100"
          }, [
            o.value !== v ? (r(), N(m(to), {
              key: 0,
              class: "po-w-4 po-mx-auto po-stroke-slate-400 po-stroke-2"
            })) : (r(), N(m(oo), {
              key: 1,
              class: "po-w-4 po-mx-auto po-stroke-slate-400 po-stroke-2"
            }))
          ], 8, ad)
        ])
      ], 10, zc))), 256))
    ]));
  }
}), rd = {
  class: "po-flex po-bg-slate-50 po-rounded-t-xl po-justify-center lg:po-justify-start po-px-4 po-pt-4 xl:po-pt-2 po-flex-wrap po-overflow-hidden",
  "aria-label": "Tabs"
}, id = ["onClick", "aria-current"], pd = { key: 0 }, ud = {
  name: "PoCardTabs"
}, C0 = /* @__PURE__ */ Object.assign(ud, {
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
    return (n, o) => (r(), p("nav", rd, [
      (r(!0), p(B, null, I(e.tabs, (s) => (r(), p("span", {
        role: "button",
        onClick: (i) => n.$emit("button-click", s),
        key: s.name,
        class: E([
          s.current ? "po-bg-white po-text-slate-600 po-shadow-lg" : "po-text-slate-600 hover:po-text-mpao-blue",
          "po-px-4 po-py-3 po-font-medium po-mr-4 po-mb-4 xl:po-mb-0 po-text-sm po-cursor-pointer po-rounded-xl xl:po-rounded-b-none genie-effect hover:po-text-slate-600 hover:po-bg-white hover:po-shadow-md po-flex po-items-center po-flex-shrink-0 po-space-x-2"
        ]),
        "aria-current": s.current ? "page" : void 0
      }, [
        s.icon ? (r(), N(be(s.icon), {
          key: 0,
          class: E(["po-w-5 po-h-5", [l(s)]])
        }, null, 8, ["class"])) : b("", !0),
        a("span", null, [
          X(h(s.name), 1),
          s.count ? (r(), p("span", pd, " (" + h(s.count) + ")", 1)) : b("", !0)
        ])
      ], 10, id))), 128))
    ]));
  }
}), cd = { class: "sm:po-hidden" }, dd = /* @__PURE__ */ a("label", {
  for: "tabs",
  class: "po-sr-only"
}, "Select a tab", -1), fd = ["value", "selected"], vd = { class: "po-hidden sm:po-block" }, md = {
  class: "po-flex po-space-x-4 po-pt-2",
  "aria-label": "Tabs"
}, hd = ["onClick", "aria-current"], bd = {
  name: "PoTabs"
}, S0 = /* @__PURE__ */ Object.assign(bd, {
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
    function s(i) {
      const u = i.target.value, c = l.tabs[u];
      t("button-click", c);
    }
    return (i, u) => (r(), p(B, null, [
      a("div", cd, [
        dd,
        a("select", {
          id: "tabs",
          name: "tabs",
          class: "po-block po-w-full po-rounded-md po-border-gray-300 focus:po-border-indigo-500 focus:po-ring-indigo-500",
          onChange: s
        }, [
          (r(!0), p(B, null, I(e.tabs, (c, f) => (r(), p("option", {
            key: c.name,
            value: f,
            selected: c.current
          }, h(c.name), 9, fd))), 128))
        ], 32)
      ]),
      a("div", vd, [
        a("nav", md, [
          (r(!0), p(B, null, I(m(o), (c) => (r(), p("span", {
            onClick: (f) => i.$emit("button-click", c),
            role: "button",
            key: c.name,
            class: E([
              c.current ? "po-bg-white po-text-slate-600 po-shadow-md" : "po-bg-slate-50 po-text-slate-600 hover:po-text-mpao-blue",
              "po-px-4 po-relative po-group po-py-3 po-font-medium po-text-sm po-cursor-pointer po-rounded-xl genie-effect hover:po-text-slate-600 hover:po-bg-white hover:po-shadow-md po-flex po-items-center po-space-x-2"
            ]),
            "aria-current": c.current ? "page" : void 0
          }, [
            c.icon ? (r(), N(be(c.icon), {
              key: 0,
              class: E(["po-w-5 po-h-5", [n(c)]])
            }, null, 8, ["class"])) : b("", !0),
            a("span", null, [
              a("span", null, h(c.name), 1),
              c.count && c.count > 0 ? (r(), p("span", {
                key: 0,
                class: E(["po-absolute po-py-1 po-px-2 po-rounded-full po-text-xs -po-top-3 -po-right-2 po-shadow-md po-flex po-items-center po-justify-center", [
                  c.current ? "po-bg-mpao-orange po-text-white" : "po-bg-slate-400 po-text-white group-hover:po-bg-mpao-orange group-hover:po-text-white"
                ]])
              }, [
                a("span", null, h(c.count), 1)
              ], 2)) : b("", !0)
            ])
          ], 10, hd))), 128))
        ])
      ])
    ], 64));
  }
}), gd = { class: "po-mt-5 po-flex po-flex-col po-items-center po-justify-center po-px-5 po-py-8" }, yd = {
  key: 1,
  class: "po-text-base po-font-medium po-text-slate-600 po-text-center"
}, xd = {
  key: 2,
  class: "po-text-sm po-text-slate-500 po-text-center po-max-w-lg po-block po-mx-auto"
}, wd = {
  name: "PoEmpty"
}, P0 = /* @__PURE__ */ Object.assign(wd, {
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
    return (t, l) => (r(), p("div", gd, [
      a("div", {
        class: E(["po-space-y-2 po-flex po-items-center po-flex-col po-justify-center", [{ "po-mb-5": t.$slots.action }]])
      }, [
        e.icon ? (r(), N(be(e.icon), {
          key: 0,
          class: E(["po-w-10 po-h-10", e.iconColor])
        }, null, 8, ["class"])) : b("", !0),
        e.label !== "" ? (r(), p("span", yd, h(e.label), 1)) : b("", !0),
        e.description !== "" ? (r(), p("span", xd, h(e.description), 1)) : b("", !0)
      ], 2),
      te(t.$slots, "action")
    ]));
  }
});
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const ct = () => !1;
function Vd(e) {
  throw e;
}
function kd(e) {
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
const $d = /&(gt|lt|amp|apos|quot);/g, _d = {
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
const Cd = { class: "po-flex po-text-sm po-text-gray-700 po-flex-col po-space-y-5" }, Sd = {
  key: 0,
  class: "po-text-base po-font-medium po-text-slate-700"
}, Pd = {
  key: 1,
  class: "po-border po-border-orange-300 po-bg-orange-50 po-rounded-lg po-p-5 po-flex po-items-center po-space-x-3"
}, Od = { class: "po-grow po-text-sm po-text-slate-600" }, Ed = {
  key: 2,
  class: "po-border po-border-red-300 po-bg-red-50 po-rounded-lg po-p-5 po-flex po-space-x-4"
}, Ld = { class: "po-grow" }, Td = { class: "po-text-base po-text-slate-700 po-font-medium" }, Bd = { class: "po-text-sm po-text-slate-600" }, jd = { class: "po-font-medium" }, Dd = { key: 0 }, Nd = { key: 0 }, Ad = /* @__PURE__ */ a("dt", null, "Name", -1), Md = { key: 1 }, Id = /* @__PURE__ */ a("dt", null, "Identifer", -1), Rd = { key: 2 }, Fd = /* @__PURE__ */ a("dt", null, "Date of birth", -1), zd = { key: 3 }, Hd = /* @__PURE__ */ a("dt", null, "Reported Date of death", -1), qd = {
  key: 3,
  class: "po-pt-5"
}, Ud = { class: "po-flex po-items-center po-space-x-1" }, Wd = /* @__PURE__ */ a("span", null, "File a dispute.", -1), Gd = {
  name: "PoDRStatus"
}, O0 = /* @__PURE__ */ Object.assign(Gd, {
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
    return (n, o) => (r(), p("span", Cd, [
      e.record !== null ? (r(), p("h2", Sd, " Death was reported by " + h(e.record.institution), 1)) : b("", !0),
      e.request !== null && e.request.type_id === 1 ? (r(), p("div", Pd, [
        C(m(dt), { class: "po-shrink-0 po-w-6 po-stroke-orange-600" }),
        a("span", Od, " This is a " + h(e.request.type) + " request and is in " + h(e.request.state) + " state. ", 1)
      ])) : b("", !0),
      e.request !== null && e.request.type_id !== 1 ? (r(), p("div", Ed, [
        C(m(dt), { class: "po-shrink-0 po-w-6 po-h-6 po-stroke-red-600 po-stroke-2" }),
        a("div", Ld, [
          a("h3", Td, h(e.request.type), 1),
          a("p", Bd, [
            X(" The following " + h(e.request.type) + " was reported: ", 1),
            a("span", jd, [
              X(h(e.request.dispute_type), 1),
              e.request.date_of_death ? (r(), p("span", Dd, " (New date: " + h(e.request.date_of_death) + ")", 1)) : b("", !0)
            ])
          ])
        ])
      ])) : b("", !0),
      C(Wo, null, {
        content: T(() => [
          e.member !== null ? (r(), p("div", Nd, [
            Ad,
            a("dd", null, h(e.member.name), 1)
          ])) : b("", !0),
          e.member !== null ? (r(), p("div", Md, [
            Id,
            a("dd", null, h(e.member.identifier), 1)
          ])) : b("", !0),
          e.member !== null ? (r(), p("div", Rd, [
            Fd,
            a("dd", null, h(e.member.dob), 1)
          ])) : b("", !0),
          e.record !== null ? (r(), p("div", zd, [
            Hd,
            a("dd", null, h(e.record.date_of_death), 1)
          ])) : b("", !0)
        ]),
        _: 1
      }),
      e.request === null ? (r(), p("span", qd, [
        C(Mt, {
          type: "simple",
          onButtonClick: l
        }, {
          label: T(() => [
            a("span", Ud, [
              C(m(ul), { class: "po-w-4 po-h-4 po-stroke-current" }),
              Wd
            ])
          ]),
          _: 1
        })
      ])) : b("", !0)
    ]));
  }
}), Zd = {
  key: 0,
  role: "button",
  class: "po-w-6 po-h-6 po-rounded-lg po-bg-white genie-effect po-flex po-items-center po-justify-center hover:po-bg-slate-50 po-cursor-pointer"
}, Kd = {
  name: "PoTableAction"
}, E0 = /* @__PURE__ */ Object.assign(Kd, {
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
    return t.btnType === "view" ? l.value = yl : t.btnType === "edit" ? l.value = wl : t.btnType === "delete" ? l.value = _l : t.btnType === "icon" && t.btnIcon && (l.value = t.btnIcon), t.btnType === "view" ? n.value = "po-stroke-emerald-400" : t.btnType === "edit" ? n.value = "po-stroke-blue-400" : t.btnType === "delete" ? n.value = "po-stroke-red-400" : n.value = t.iconColor, (o, s) => (r(), p("span", null, [
      e.btnType === "icon" || e.btnType === "delete" || e.btnType === "edit" || e.btnType === "view" ? (r(), p("span", Zd, [
        (r(), N(be(l.value), {
          class: E(["po-w-4 po-stroke-2", n.value])
        }, null, 8, ["class"]))
      ])) : (r(), p("span", {
        key: 1,
        role: "button",
        class: E(["po-block po-text-sm genie-effect", e.textColor])
      }, h(e.label), 3))
    ]));
  }
}), Qd = { key: 0 }, Yd = {
  name: "Rufiyaa"
}, L0 = /* @__PURE__ */ Object.assign(Yd, {
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
    return (l, n) => (r(), p("span", null, [
      e.amount !== null ? (r(), p("span", Qd, h(t(e.amount)), 1)) : b("", !0)
    ]));
  }
}), Jd = {
  name: "PoHeading"
}, T0 = /* @__PURE__ */ Object.assign(Jd, {
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
    return (t, l) => (r(), N(be(e.type), { class: "po-text-base po-text-slate-600 po-font-semibold" }, {
      default: T(() => [
        X(h(e.text), 1)
      ]),
      _: 1
    }));
  }
});
function Xd(e, t) {
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
const e1 = ["for"], t1 = { class: "po-capitalize" }, o1 = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, l1 = ["title"], n1 = { class: "po-relative po-mt-1" }, a1 = {
  key: 0,
  class: "po-shrink-0 po-pr-1 po-inline-flex po-flex-wrap po-max-h-44"
}, s1 = { class: "po-px-2 po-py-1 po-mb-1 po-mr-1 po-rounded-md po-text-sm po-text-white po-flex po-space-x-2 po-items-center po-bg-mpao-lightblue" }, r1 = ["onClick"], i1 = ["id"], p1 = {
  key: 0,
  class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
}, u1 = ["onClick", "value"], c1 = {
  class: /* @__PURE__ */ E(["po-block po-truncate"])
}, d1 = ["id"], f1 = ["id"], v1 = {
  name: "PoMultiSelect",
  components: { CheckIcon: ml }
}, B0 = /* @__PURE__ */ Object.assign(v1, {
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
    const o = k(""), s = k([]);
    function i(V) {
      s.value.splice(V, 1), f();
    }
    function u(V) {
      let x = o.value.split(",");
      V.key === "Enter" && 0 < o.value.length && (V.preventDefault(), x.forEach((w) => {
        let $ = l.items.find(
          (_) => _.name.toLowerCase() === w.trim().toLowerCase()
        );
        $ && s.value.push($);
      }), o.value = ""), V.key === "Backspace" && o.value.length === 0 && s.value.pop(), f();
    }
    const c = k([]);
    function f() {
      c.value = s.value.map((V) => V.id);
    }
    H(() => {
      document.addEventListener("keydown", u);
    }), se(() => {
      document.removeEventListener("keydown", u);
    });
    const v = k(!1), d = S(
      () => o.value === "" ? l.items : l.items.filter((V) => V.name.toLowerCase().includes(o.value.toLowerCase()))
    );
    let g = k();
    Xd(g, () => {
      v.value = !1;
    });
    function y(V) {
      s.value.push(V), o.value = "", f();
    }
    return K(c, () => {
      t("update:modelValue", c.value);
    }), (V, x) => (r(), p("div", {
      ref_key: "multiSelectComponentRef",
      ref: g,
      class: E(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      a("label", {
        for: e.id,
        class: E([
          "po-text-sm po-font-medium po-flex po-items-center po-space-x-1",
          { "po-text-red-500": e.hasError },
          { "po-text-slate-700": !e.hasError }
        ])
      }, [
        a("span", t1, h(e.label), 1),
        e.required ? (r(), p("span", o1, "*")) : b("", !0),
        e.info !== null ? (r(), p("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          C(m(Uo), { class: "po-fill-current" })
        ], 8, l1)) : b("", !0)
      ], 10, e1),
      a("div", n1, [
        a("div", {
          class: E([
            "po-border po-p-1 po-min-h-[2.38rem] po-flex po-flex-wrap po-items-center focus-within:po-border-mpao-lightblue po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white sm:po-text-sm",
            n()
          ])
        }, [
          s.value.length > 0 ? (r(), p("div", a1, [
            (r(!0), p(B, null, I(s.value, (w, $) => (r(), p("span", s1, [
              a("span", null, h(w.name), 1),
              a("span", {
                onClick: () => i($),
                class: "po-rounded-full po-bg-white po-flex po-items-center po-justify-center po-w-4 po-h-4 po-cursor-pointer"
              }, [
                C(m(Rt), { class: "po-w-3 po-fill-mpao-lightblue" })
              ], 8, r1)
            ]))), 256))
          ])) : b("", !0),
          Re(a("input", {
            id: e.id,
            "onUpdate:modelValue": x[0] || (x[0] = (w) => o.value = w),
            onFocus: x[1] || (x[1] = () => v.value = !0),
            class: "po-border-0 po-outline-none po-ring-0 po-grow"
          }, null, 40, i1), [
            [gt, o.value]
          ])
        ], 2),
        v.value ? (r(), p("ul", p1, [
          (r(!0), p(B, null, I(m(d), (w) => (r(), p("li", {
            onClick: () => y(w),
            key: w.id,
            value: w.id,
            class: E([
              "po-relative po-select-none po-py-2 hover:po-bg-mpao-lightblue hover:po-text-white po-cursor-pointer po-pl-3 po-pr-9"
            ])
          }, [
            a("span", c1, h(w.name), 1)
          ], 8, u1))), 128))
        ])) : b("", !0)
      ]),
      e.message !== null ? (r(), p("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, h(e.message), 9, d1)) : b("", !0),
      e.hasError && e.errorMessage !== null ? (r(), p("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-center po-space-x-1",
        id: `${e.id}-error`
      }, [
        C(m($s), { class: "po-fill-current po-w-4" }),
        a("span", null, h(e.errorMessage), 1)
      ], 8, f1)) : b("", !0)
    ], 2));
  }
}), m1 = { class: "po-flex po-pl-5" }, h1 = /* @__PURE__ */ a("div", { class: "po-shrink-0 po-flex po-flex-col" }, [
  /* @__PURE__ */ a("div", { class: "po-w-[2px] po-shrink-0 po-h-10" }),
  /* @__PURE__ */ a("div", { class: "po-bg-gradient-to-t po-from-orange-400 po-via-red-300 po-to-blue-500 po-w-[2px] po-grow" }),
  /* @__PURE__ */ a("div", { class: "po-w-[2px] po-shrink-0 po-h-12" })
], -1), b1 = { class: "po-grow po-pl-5 po-pt-5 po-space-y-3" }, g1 = ["onClick"], y1 = { class: "-po-mt-1 po-flex po-space-x-3 po-items-center" }, x1 = { class: "po-block po-text-xs po-text-slate-400" }, w1 = { class: "po-text-xs po-text-slate-500 po-pt-1" }, V1 = {
  name: "PoTimeline"
}, j0 = /* @__PURE__ */ Object.assign(V1, {
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
    return (l, n) => (r(), p("div", m1, [
      h1,
      a("div", b1, [
        (r(!0), p(B, null, I(e.timeline, (o) => (r(), p("div", {
          class: E(["po-px-2 po-pt-2 po-pb-6 po-relative po-group", [{ "po-cursor-pointer": e.clickable }]]),
          onClick: (s) => l.$emit("button-click", o)
        }, [
          a("span", {
            class: E(["po-rounded-full po-absolute po-flex po-items-center po-justify-center", [
              { "po-w-4 po-h-4 -po-left-[1.8rem] po-bg-blue-400": o.current },
              {
                "po-w-3 po-h-3 -po-left-[1.68rem] po-bg-green-400": !o.current
              }
            ]])
          }, [
            a("span", {
              class: E(["po-rounded-full po-bg-white", [
                { "po-w-2 po-h-2": o.current },
                { "po-w-1 po-h-1": !o.current }
              ]])
            }, null, 2)
          ], 2),
          a("div", null, [
            a("div", y1, [
              a("h4", {
                class: E(["po-text-sm po-text-slate-600 po-font-medium", [{ "group-hover:po-text-mpao-lightblue": e.clickable }]])
              }, h(o.label), 3),
              a("span", x1, h(m(nl)(o.date)), 1)
            ]),
            a("p", w1, h(o.description), 1)
          ])
        ], 10, g1))), 256))
      ])
    ]));
  }
}), k1 = {
  name: "PoTableCheckbox"
}, D0 = /* @__PURE__ */ Object.assign(k1, {
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
    return (l, n) => (r(), p(B, null, [
      e.isChecked ? (r(), N(m(cs), {
        key: 0,
        onClick: n[0] || (n[0] = ce(() => l.$emit("checkboxClicked", e.itemId), ["prevent"])),
        class: "po-w-6 po-fill-mpao-lightblue"
      })) : b("", !0),
      e.isChecked ? b("", !0) : (r(), p("span", {
        key: 1,
        onClick: n[1] || (n[1] = ce(() => l.$emit("checkboxClicked", e.itemId), ["prevent"])),
        class: "po-h-5 po-w-5 po-rounded-full po-border-2 po-ml-[2px] po-block po-border-slate-300"
      }))
    ], 64));
  }
}), $1 = {
  key: 0,
  class: "po-pointer-events-auto po-w-full po-max-w-[260px] po-overflow-hidden po-rounded-lg po-bg-gray-900 po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5"
}, _1 = { class: "po-p-4" }, C1 = { class: "po-flex po-items-center po-space-x-3" }, S1 = /* @__PURE__ */ a("span", { class: "po-sr-only" }, "Action icon", -1), P1 = { class: "po-w-0 po-flex-1 po-text-sm po-font-medium po-text-gray-400" }, O1 = { class: "po-ml-4 po-flex po-flex-shrink-0" }, E1 = /* @__PURE__ */ a("span", { class: "po-sr-only" }, "Close", -1), L1 = {
  name: "PoToast"
}, N0 = /* @__PURE__ */ Object.assign(L1, {
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
    }
  },
  emits: ["toast-closed"],
  setup(e, { emit: t }) {
    const l = e, { show: n } = ge(l), o = k(!1);
    K(n, () => {
      o.value = n.value;
    });
    function s() {
      o.value = !1, t("toast-closed", !0);
    }
    setTimeout(() => {
      s();
    }, l.hideIn);
    const i = S(() => l.message === "" && l.actionType !== "" ? l.actionType === "success" ? "Saved Successfully!" : l.actionType === "danger" ? "Item deleted!" : l.actionType === "warn" ? "Attention needed!" : "Wrong action" : l.message);
    return (u, c) => (r(), N(Ze, { to: "#po-notifications-alert" }, [
      C(we, {
        "enter-active-class": "po-transform po-ease-out po-duration-300 po-transition",
        "enter-from-class": "po-translate-y-2 po-opacity-0 sm:po-translate-y-0 sm:po-translate-x-2",
        "enter-to-class": "po-translate-y-0 po-opacity-100 sm:po-translate-x-0",
        "leave-active-class": "po-transition po-ease-in po-duration-100",
        "leave-from-class": "po-opacity-100",
        "leave-to-class": "po-opacity-0"
      }, {
        default: T(() => [
          o.value ? (r(), p("div", $1, [
            a("div", _1, [
              a("div", C1, [
                e.actionType !== "" ? (r(), p("div", {
                  key: 0,
                  class: E(["po-inline-flex po-items-center po-justify-center po-flex-shrink-0 po-w-8 po-h-8 po-rounded-lg", [
                    {
                      "po-bg-mpao-green po-text-green-100": e.actionType === "success"
                    },
                    { "po-bg-mpao-red po-text-red-100": e.actionType === "danger" },
                    {
                      "po-bg-mpao-orange po-text-orange-100": e.actionType === "warn"
                    }
                  ]])
                }, [
                  e.actionType === "success" ? (r(), N(m(Ho), {
                    key: 0,
                    class: "po-w-5 po-h-5"
                  })) : b("", !0),
                  e.actionType === "danger" ? (r(), N(m(vs), {
                    key: 1,
                    class: "po-w-5 po-h-5"
                  })) : b("", !0),
                  e.actionType === "warn" ? (r(), N(m(qo), {
                    key: 2,
                    class: "po-w-5 po-h-5"
                  })) : b("", !0),
                  S1
                ], 2)) : b("", !0),
                a("p", P1, h(m(i)), 1),
                a("div", O1, [
                  a("button", {
                    type: "button",
                    onClick: s,
                    class: "po-inline-flex po-rounded-md po-bg-gray-900 po-text-gray-400 hover:po-text-gray-300 hover:po-bg-gray-700 po-transition-colors po-duration-150 po-ease-out focus:po-outline-none focus:po-ring-2 focus:po-ring-indigo-500 focus:po-ring-offset-2"
                  }, [
                    E1,
                    C(m(Rt), {
                      class: "po-h-5 po-w-5",
                      "aria-hidden": "true"
                    })
                  ])
                ])
              ])
            ])
          ])) : b("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), T1 = {
  for: "",
  class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700"
}, B1 = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, j1 = ["title"], D1 = { class: "po-relative po-mt-1" }, N1 = {
  key: 1,
  class: "po-absolute po-top-0 po-left-0 po-right-0 po-bottom-0 po-overflow-hidden po-bg-white po-rounded-md po-border po-border-slate-300 po-flex po-items-center"
}, A1 = { class: "po-grow" }, M1 = {
  key: 0,
  class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
}, I1 = ["onClick"], R1 = {
  key: 0,
  class: "po-text-sm po-text-slate-600 po-p-4 po-block"
}, F1 = {
  key: 1,
  class: "po-mt-2 po-text-sm po-text-slate-500",
  id: "-description"
}, z1 = {
  key: 2,
  class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
  id: "-error"
}, H1 = {
  name: "PoSelectApi",
  components: { XMarkIcon: Ke }
}, A0 = /* @__PURE__ */ Object.assign(H1, {
  props: {
    /**
     * Options list
     */
    options: {
      type: Array,
      default: null
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
    const l = k(null), n = k(!1);
    S(() => {
      if (l.value) {
        const d = document.querySelector(".shell-content--area"), { top: g } = d.getBoundingClientRect(), y = d.scrollTop, { top: V, left: x, width: w } = l.value.getBoundingClientRect();
        return { relativeTop: V - g + y, left: x, width: w };
      }
    });
    const o = k(null);
    k(null);
    const s = (d) => {
      !o.value.contains(d.target) && !l.value.contains(d.target) && (n.value = !1);
    };
    H(() => {
      document.addEventListener("click", s);
    }), wt(() => {
      document.removeEventListener("click", s);
    });
    const i = k();
    function u() {
      t("search", i.value);
    }
    const c = k(null);
    function f(d) {
      c.value = d, t("selected", d), n.value = !1;
    }
    function v() {
      t("loadmore", !0);
    }
    return (d, g) => (r(), p("div", {
      ref_key: "containerRef",
      ref: o,
      class: E(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      a("label", T1, [
        a("span", null, h(e.label), 1),
        e.required ? (r(), p("span", B1, "*")) : b("", !0),
        e.info !== null ? (r(), p("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          C(m(It), { class: "po-fill-current" })
        ], 8, j1)) : b("", !0)
      ]),
      a("div", D1, [
        a("div", null, [
          e.loading ? (r(), N(At, {
            key: 0,
            class: "po-right-0 po-top-4",
            absolute: !0
          })) : b("", !0),
          c.value !== null ? (r(), p("div", N1, [
            a("div", A1, [
              te(d.$slots, "selectedOption", Me(Ie(c.value)), () => [
                X(h(c.value), 1)
              ])
            ]),
            a("span", {
              class: "po-shrink-0 po-p-1 po-cursor-pointer",
              onClick: g[0] || (g[0] = (y) => {
                c.value = null, i.value = "";
              })
            }, [
              C(m(Ke), { class: "po-w-4 po-stroke-2 po-stroke-slate-400" })
            ])
          ])) : b("", !0),
          Re(a("input", {
            type: "text",
            name: "",
            id: "",
            ref_key: "selectBox",
            ref: l,
            "onUpdate:modelValue": g[1] || (g[1] = (y) => i.value = y),
            onInput: u,
            onFocus: g[2] || (g[2] = (y) => n.value = !0),
            class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm"
          }, null, 544), [
            [gt, i.value]
          ])
        ]),
        n.value && e.options.length > 0 || n.value && e.emptyMessage ? (r(), p("div", M1, [
          e.options && e.options.length > 0 ? (r(), p(B, { key: 0 }, [
            (r(!0), p(B, null, I(e.options, (y) => (r(), p("div", {
              onClick: (V) => f(y)
            }, [
              te(d.$slots, "option", Me(Ie(y)), () => [
                X(h(y), 1)
              ])
            ], 8, I1))), 256)),
            e.showMoreBtn ? (r(), p("span", {
              key: 0,
              role: "button",
              onClick: v,
              class: "po-text-sm po-text-semibold po-text-mpao-lightblue po-block po-text-center po-py-2 hover:po-bg-slate-50 po-transition-colors po-duration-150 po-ease-out"
            }, "More")) : b("", !0)
          ], 64)) : (r(), p(B, { key: 1 }, [
            e.emptyMessage ? (r(), p("span", R1, h(e.emptyMessage), 1)) : b("", !0)
          ], 64))
        ])) : b("", !0),
        e.message !== null ? (r(), p("p", F1, h(e.message), 1)) : b("", !0),
        e.errorMessage !== null ? (r(), p("p", z1, [
          a("span", null, h(e.errorMessage), 1)
        ])) : b("", !0)
      ])
    ], 2));
  }
}), q1 = { class: "po-bg-blue-300/20 po-border po-border-blue-200 po-p-3 po-mb-5 po-rounded-md po-text-sm sm:po-space-x-2 po-flex po-items-center po-flex-wrap" }, U1 = { class: "po-text-blue-500" }, W1 = {
  name: "PoMessage"
}, M0 = /* @__PURE__ */ Object.assign(W1, {
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
    return (l, n) => (r(), p("div", q1, [
      a("span", U1, h(e.message), 1),
      e.btnName !== "" ? (r(), p("span", {
        key: 0,
        role: "button",
        onClick: n[0] || (n[0] = (o) => l.$emit("button-click", e.btnAction)),
        class: "po-text-blue-600 po-underline po-font-medium po-text-xs"
      }, h(e.btnName), 1)) : b("", !0)
    ]));
  }
});
export {
  e0 as PoActionBar,
  y0 as PoAlert,
  Fl as PoAppIcon,
  da as PoAppTray,
  Mt as PoButton,
  _0 as PoCallLog,
  t0 as PoCard,
  o0 as PoCardSearch,
  C0 as PoCardTabs,
  m0 as PoChatLogItem,
  c0 as PoCheckbox,
  g0 as PoCommandPalette,
  $0 as PoConsent,
  V0 as PoContentArea,
  O0 as PoDRStatus,
  Wo as PoDescriptionList,
  w0 as PoDownloadFileList,
  a0 as PoDynamicTable,
  P0 as PoEmpty,
  d0 as PoFooter,
  f0 as PoFormStatusMessage,
  T0 as PoHeading,
  s0 as PoInputField,
  r0 as PoInputFile,
  k0 as PoLoading,
  x0 as PoLogs,
  M0 as PoMessage,
  qe as PoModal,
  B0 as PoMultiSelect,
  h0 as PoNotification,
  $a as PoNotificationHub,
  l0 as PoPageTitle,
  Vr as PoPagination,
  Qa as PoProfileSwitcher,
  Vs as PoRadioInput,
  Wl as PoSearchBar,
  u0 as PoSectionMenu,
  A0 as PoSelectApi,
  i0 as PoSelectField,
  X1 as PoSidebarDrawer,
  b0 as PoSlideover,
  v0 as PoStatsBlock,
  n0 as PoTable,
  E0 as PoTableAction,
  D0 as PoTableCheckbox,
  S0 as PoTabs,
  js as PoTextarea,
  j0 as PoTimeline,
  N0 as PoToast,
  p0 as PoToggle,
  Y1 as PoTopBar,
  L0 as Rufiyaa
};
