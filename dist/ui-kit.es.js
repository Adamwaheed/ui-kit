import { openBlock as r, createElementBlock as p, createElementVNode as s, ref as $, toRefs as be, watch as Z, Fragment as j, createVNode as C, unref as m, withCtx as B, renderSlot as ee, createBlock as N, resolveDynamicComponent as ye, createCommentVNode as h, computed as S, toDisplayString as b, onMounted as H, onUnmounted as se, withDirectives as Re, isRef as Ko, vModelText as ht, cloneVNode as Zo, h as J, inject as re, provide as ie, watchEffect as le, defineComponent as U, toRaw as K, nextTick as ke, Teleport as We, reactive as Qo, shallowRef as Yt, normalizeClass as E, renderList as I, Transition as we, withModifiers as de, onBeforeMount as Yo, onBeforeUpdate as Jo, onUpdated as bt, mergeProps as Ee, createTextVNode as ae, normalizeProps as Me, guardReactiveProps as Ie, normalizeStyle as gt, vModelCheckbox as Xo, onBeforeUnmount as yt, createStaticVNode as el, vModelSelect as tl } from "vue";
import { f as ol } from "./FormatDate-a57abfa8.mjs";
function ll(e, t) {
  return r(), p("svg", {
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
function nl(e, t) {
  return r(), p("svg", {
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
function al(e, t) {
  return r(), p("svg", {
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
function sl(e, t) {
  return r(), p("svg", {
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
function rl(e, t) {
  return r(), p("svg", {
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
function il(e, t) {
  return r(), p("svg", {
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
function pl(e, t) {
  return r(), p("svg", {
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
function ul(e, t) {
  return r(), p("svg", {
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
function dl(e, t) {
  return r(), p("svg", {
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
function cl(e, t) {
  return r(), p("svg", {
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
function fl(e, t) {
  return r(), p("svg", {
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
function Jt(e, t) {
  return r(), p("svg", {
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
      d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
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
    s("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 19.5L8.25 12l7.5-7.5"
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
    s("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 4.5l7.5 7.5-7.5 7.5"
    })
  ]);
}
function Xt(e, t) {
  return r(), p("svg", {
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
      d: "M4.5 15.75l7.5-7.5 7.5 7.5"
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
    s("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
    })
  ]);
}
function ut(e, t) {
  return r(), p("svg", {
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
function bl(e, t) {
  return r(), p("svg", {
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
function gl(e, t) {
  return r(), p("svg", {
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
function xt(e, t) {
  return r(), p("svg", {
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
function eo(e, t) {
  return r(), p("svg", {
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
function yl(e, t) {
  return r(), p("svg", {
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
function xl(e, t) {
  return r(), p("svg", {
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
function wl(e, t) {
  return r(), p("svg", {
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
function Vl(e, t) {
  return r(), p("svg", {
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
function kl(e, t) {
  return r(), p("svg", {
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
function Rt(e, t) {
  return r(), p("svg", {
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
function Ke(e, t) {
  return r(), p("svg", {
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
const $l = /* @__PURE__ */ s("div", {
  "aria-live": "assertive",
  class: "po-pointer-events-none po-fixed po-inset-0 po-flex po-items-start po-px-4 po-py-6 sm:po-p-6 po-z-[60]"
}, [
  /* @__PURE__ */ s("div", {
    class: "po-flex po-w-full po-flex-col po-items-end po-space-y-4 sm:po-items-end po-pt-[55px]",
    id: "po-notifications-alert"
  })
], -1), _l = { class: "po-bg-mpao-blue po-fixed po-top-0 po-w-full po-z-50 po-flex" }, Cl = { class: "po-shrink-0 po-px-3 po-pt-3" }, Sl = {
  for: "sidebar-drawer-toggle",
  role: "button",
  class: "genie-effect po-flex po-items-center po-justify-center po-bg-[#2e5266] po-rounded-full po-w-10 po-h-10 po-select-none po-text-slate-100"
}, Ol = { class: "po-mx-auto po-max-w-full po-pr-4 po-grow sm:po-pr-4" }, Pl = { class: "po-flex po-relative po-h-16 po-items-center po-justify-between po-space-x-12" }, El = { class: "po-flex po-items-center po-space-x-3" }, Ll = {
  key: 0,
  class: "po-block po-w-6 po-text-slate-100 md:po-hidden",
  role: "button"
}, Bl = {
  name: "PoTopBar"
}, T1 = /* @__PURE__ */ Object.assign(Bl, {
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
    const l = e, n = $(""), o = $(""), { avatar: a, logo: i } = be(l);
    Z(a, () => {
      n.value = a.value;
    }), Z(i, () => {
      o.value = i.value;
    });
    function u(v) {
      t("profileSwitcherClick", v);
    }
    function d(v) {
      t("query", v);
    }
    function f(v) {
      t("onSearchClear", v);
    }
    return (v, c) => (r(), p(j, null, [
      $l,
      s("nav", _l, [
        s("div", Cl, [
          s("label", Sl, [
            C(m(sl), { class: "po-w-6 po-fill-current" })
          ])
        ]),
        s("div", Ol, [
          s("div", Pl, [
            C(m(Il), { "app-name": e.appName }, {
              icon: B(() => [
                ee(v.$slots, "appIcon", {}, () => [
                  e.appIcon ? (r(), N(ye(e.appIcon), { key: 0 })) : h("", !0)
                ])
              ]),
              _: 3
            }, 8, ["app-name"]),
            e.hasSearch ? (r(), N(m(ql), {
              key: 0,
              onQuery: d,
              onOnClear: f,
              "current-query": e.currentQuery
            }, null, 8, ["current-query"])) : h("", !0),
            s("div", El, [
              e.hasSearch ? (r(), p("span", Ll, [
                C(m(xt), { class: "po-stroke-current" })
              ])) : h("", !0),
              C(m(Va), {
                notifications: e.notifications,
                "has-new-notifications": e.hasNewNotifications
              }, null, 8, ["notifications", "has-new-notifications"]),
              C(m(ua), {
                "app-list": e.appList,
                "open-in-new-tab": !0
              }, null, 8, ["app-list"]),
              C(m(Ka), {
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
}), jl = { class: "po-flex po-items-center po-justify-center po-space-x-3" }, Tl = { class: "po-w-8 po-text-slate-100 app-icon" }, Dl = { class: "po-font-light po-text-lg po-text-slate-100" }, Nl = { class: "po-hidden md:po-block" }, Al = { class: "po-block md:po-hidden" }, Ml = {
  name: "PoAppIcon"
}, Il = /* @__PURE__ */ Object.assign(Ml, {
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
    return (n, o) => (r(), p("div", jl, [
      s("div", Tl, [
        ee(n.$slots, "icon")
      ]),
      s("span", Dl, [
        s("span", Nl, b(e.appName), 1),
        s("span", Al, b(m(l)), 1)
      ])
    ]));
  }
}), Rl = { class: "po-flex-grow po-hidden po-relative md:po-block" }, Fl = ["placeholder"], zl = { class: "po-absolute po-inset-y-0 po-left-0 po-flex po-items-center po-pl-3 po-pointer-events-none po-transition-all po-ease-linear po-duration-100 po-text-slate-400 po-origin-center peer-hover/search:po-scale-105 peer-focus/search:po-text-slate-100" }, Hl = {
  name: "PoSearchBar"
}, ql = /* @__PURE__ */ Object.assign(Hl, {
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
    let n = $("");
    const o = (a) => {
      a.key === "Enter" && 0 < n.value.length && t("query", n.value);
    };
    return H(() => {
      document.addEventListener("keydown", o), n.value = l.currentQuery;
    }), se(() => {
      document.removeEventListener("keydown", o);
    }), Z(n, async (a, i) => {
      a === "" && t("onClear", !0);
    }), (a, i) => (r(), p("div", Rl, [
      Re(s("input", {
        "onUpdate:modelValue": i[0] || (i[0] = (u) => Ko(n) ? n.value = u : n = u),
        type: "text",
        id: "main-search",
        placeholder: e.placeholder,
        class: "peer/search po-bg-transparent po-border po-border-transparent po-text-slate-100 po-text-sm po-rounded-md po-ring-0 po-outline-none focus:po-outline-none focus:po-ring-0 po-transition-colors po-ease-linear po-duration-100 po-block po-w-full po-pl-10 po-p-2.5 po-appearance-none focus:po-border-slate-400 hover:po-border-slate-600"
      }, null, 8, Fl), [
        [ht, m(n)]
      ]),
      s("div", zl, [
        C(m(xt), { class: "po-w-5 po-h-5 po-stroke-current" })
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
var ce = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(ce || {}), $e = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))($e || {});
function G({ visible: e = !0, features: t = 0, ourProps: l, theirProps: n, ...o }) {
  var a;
  let i = oo(n, l), u = Object.assign(o, { props: i });
  if (e || t & 2 && i.static)
    return at(u);
  if (t & 1) {
    let d = (a = i.unmount) == null || a ? 0 : 1;
    return Q(d, { [0]() {
      return null;
    }, [1]() {
      return at({ ...o, props: { ...i, hidden: !0, style: { display: "none" } } });
    } });
  }
  return at(u);
}
function at({ props: e, attrs: t, slots: l, slot: n, name: o }) {
  var a, i;
  let { as: u, ...d } = Te(e, ["unmount", "static"]), f = (a = l.default) == null ? void 0 : a.call(l, n), v = {};
  if (n) {
    let c = !1, w = [];
    for (let [x, V] of Object.entries(n))
      typeof V == "boolean" && (c = !0), V === !0 && w.push(x);
    c && (v["data-headlessui-state"] = w.join(" "));
  }
  if (u === "template") {
    if (f = to(f ?? []), Object.keys(d).length > 0 || Object.keys(t).length > 0) {
      let [c, ...w] = f ?? [];
      if (!Ul(c) || w.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${o} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(d).concat(Object.keys(t)).map((g) => g.trim()).filter((g, y, k) => k.indexOf(g) === y).sort((g, y) => g.localeCompare(y)).map((g) => `  - ${g}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((g) => `  - ${g}`).join(`
`)].join(`
`));
      let x = oo((i = c.props) != null ? i : {}, d), V = Zo(c, x);
      for (let g in x)
        g.startsWith("on") && (V.props || (V.props = {}), V.props[g] = x[g]);
      return V;
    }
    return Array.isArray(f) && f.length === 1 ? f[0] : f;
  }
  return J(u, Object.assign({}, d, v), { default: () => f });
}
function to(e) {
  return e.flatMap((t) => t.type === j ? to(t.children) : [t]);
}
function oo(...e) {
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
    Object.assign(t, { [n](o, ...a) {
      let i = l[n];
      for (let u of i) {
        if (o instanceof Event && o.defaultPrevented)
          return;
        u(o, ...a);
      }
    } });
  return t;
}
function wt(e) {
  let t = Object.assign({}, e);
  for (let l in t)
    t[l] === void 0 && delete t[l];
  return t;
}
function Te(e, t = []) {
  let l = Object.assign({}, e);
  for (let n of t)
    n in l && delete l[n];
  return l;
}
function Ul(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Gl = 0;
function Wl() {
  return ++Gl;
}
function te() {
  return Wl();
}
var z = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(z || {});
function Kl(e) {
  throw new Error("Unexpected object: " + e);
}
var ue = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(ue || {});
function Zl(e, t) {
  let l = t.resolveItems();
  if (l.length <= 0)
    return null;
  let n = t.resolveActiveIndex(), o = n ?? -1, a = (() => {
    switch (e.focus) {
      case 0:
        return l.findIndex((i) => !t.resolveDisabled(i));
      case 1: {
        let i = l.slice().reverse().findIndex((u, d, f) => o !== -1 && f.length - d - 1 >= o ? !1 : !t.resolveDisabled(u));
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
        Kl(e);
    }
  })();
  return a === -1 ? n : a;
}
function O(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let lo = Symbol("Context");
var Y = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Y || {});
function Ql() {
  return je() !== null;
}
function je() {
  return re(lo, null);
}
function Ze(e) {
  ie(lo, e);
}
function Ft(e, t) {
  if (e)
    return e;
  let l = t ?? "button";
  if (typeof l == "string" && l.toLowerCase() === "button")
    return "button";
}
function Qe(e, t) {
  let l = $(Ft(e.value.type, e.value.as));
  return H(() => {
    l.value = Ft(e.value.type, e.value.as);
  }), le(() => {
    var n;
    l.value || O(t) && O(t) instanceof HTMLButtonElement && !((n = O(t)) != null && n.hasAttribute("type")) && (l.value = "button");
  }), l;
}
var Yl = Object.defineProperty, Jl = (e, t, l) => t in e ? Yl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l, zt = (e, t, l) => (Jl(e, typeof t != "symbol" ? t + "" : t, l), l);
let Xl = class {
  constructor() {
    zt(this, "current", this.detect()), zt(this, "currentId", 0);
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
}, Fe = new Xl();
function he(e) {
  if (Fe.isServer)
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
function no({ container: e, accept: t, walk: l, enabled: n }) {
  le(() => {
    let o = e.value;
    if (!o || n !== void 0 && !n.value)
      return;
    let a = he(e);
    if (!a)
      return;
    let i = Object.assign((d) => t(d), { acceptNode: t }), u = a.createTreeWalker(o, NodeFilter.SHOW_ELEMENT, i, !1);
    for (; u.nextNode(); )
      l(u.currentNode);
  });
}
let dt = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var ne = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ne || {}), Be = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Be || {}), en = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(en || {});
function Ye(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(dt)).sort((t, l) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (l.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Vt = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Vt || {});
function ao(e, t = 0) {
  var l;
  return e === ((l = he(e)) == null ? void 0 : l.body) ? !1 : Q(t, { [0]() {
    return e.matches(dt);
  }, [1]() {
    let n = e;
    for (; n !== null; ) {
      if (n.matches(dt))
        return !0;
      n = n.parentElement;
    }
    return !1;
  } });
}
function Le(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let tn = ["textarea", "input"].join(",");
function on(e) {
  var t, l;
  return (l = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, tn)) != null ? l : !1;
}
function kt(e, t = (l) => l) {
  return e.slice().sort((l, n) => {
    let o = t(l), a = t(n);
    if (o === null || a === null)
      return 0;
    let i = o.compareDocumentPosition(a);
    return i & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : i & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function ve(e, t, { sorted: l = !0, relativeTo: n = null, skipElements: o = [] } = {}) {
  var a;
  let i = (a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? a : document, u = Array.isArray(e) ? l ? kt(e) : e : Ye(e);
  o.length > 0 && u.length > 1 && (u = u.filter((V) => !o.includes(V))), n = n ?? i.activeElement;
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
      return Math.max(0, u.indexOf(n)) - 1;
    if (t & 4)
      return Math.max(0, u.indexOf(n)) + 1;
    if (t & 8)
      return u.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), v = t & 32 ? { preventScroll: !0 } : {}, c = 0, w = u.length, x;
  do {
    if (c >= w || c + w <= 0)
      return 0;
    let V = f + c;
    if (t & 16)
      V = (V + w) % w;
    else {
      if (V < 0)
        return 3;
      if (V >= w)
        return 1;
    }
    x = u[V], x == null || x.focus(v), c += d;
  } while (x !== i.activeElement);
  return t & 6 && on(x) && x.select(), x.hasAttribute("tabindex") || x.setAttribute("tabindex", "0"), 2;
}
function st(e, t, l) {
  Fe.isServer || le((n) => {
    document.addEventListener(e, t, l), n(() => document.removeEventListener(e, t, l));
  });
}
function $t(e, t, l = S(() => !0)) {
  function n(a, i) {
    if (!l.value || a.defaultPrevented)
      return;
    let u = i(a);
    if (u === null || !u.getRootNode().contains(u))
      return;
    let d = function f(v) {
      return typeof v == "function" ? f(v()) : Array.isArray(v) || v instanceof Set ? v : [v];
    }(e);
    for (let f of d) {
      if (f === null)
        continue;
      let v = f instanceof HTMLElement ? f : O(f);
      if (v != null && v.contains(u) || a.composed && a.composedPath().includes(v))
        return;
    }
    return !ao(u, Vt.Loose) && u.tabIndex !== -1 && a.preventDefault(), t(a, u);
  }
  let o = $(null);
  st("mousedown", (a) => {
    var i, u;
    l.value && (o.value = ((u = (i = a.composedPath) == null ? void 0 : i.call(a)) == null ? void 0 : u[0]) || a.target);
  }, !0), st("click", (a) => {
    o.value && (n(a, () => o.value), o.value = null);
  }, !0), st("blur", (a) => n(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var xe = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(xe || {});
let Ve = U({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: l }) {
  return () => {
    let { features: n, ...o } = e, a = { "aria-hidden": (n & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
    return G({ ourProps: a, theirProps: o, slot: {}, attrs: l, slots: t, name: "Hidden" });
  };
} });
function _t(e = {}, t = null, l = []) {
  for (let [n, o] of Object.entries(e))
    ro(l, so(t, n), o);
  return l;
}
function so(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function ro(e, t, l) {
  if (Array.isArray(l))
    for (let [n, o] of l.entries())
      ro(e, so(t, n.toString()), o);
  else
    l instanceof Date ? e.push([t, l.toISOString()]) : typeof l == "boolean" ? e.push([t, l ? "1" : "0"]) : typeof l == "string" ? e.push([t, l]) : typeof l == "number" ? e.push([t, `${l}`]) : l == null ? e.push([t, ""]) : _t(l, t, e);
}
function io(e) {
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
function Ct(e, t, l) {
  let n = $(l == null ? void 0 : l.value), o = S(() => e.value !== void 0);
  return [S(() => o.value ? e.value : n.value), function(a) {
    return o.value || (n.value = a), t == null ? void 0 : t(a);
  }];
}
function Ht(e) {
  return [e.screenX, e.screenY];
}
function ln() {
  let e = $([-1, -1]);
  return { wasMoved(t) {
    let l = Ht(t);
    return e.value[0] === l[0] && e.value[1] === l[1] ? !1 : (e.value = l, !0);
  }, update(t) {
    e.value = Ht(t);
  } };
}
function po() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function nn() {
  return /Android/gi.test(window.navigator.userAgent);
}
function an() {
  return po() || nn();
}
function sn(e, t) {
  return e === t;
}
var rn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(rn || {}), pn = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(pn || {}), un = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(un || {});
let uo = Symbol("ComboboxContext");
function De(e) {
  let t = re(uo, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, De), l;
  }
  return t;
}
let dn = U({ name: "Combobox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => sn }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String }, nullable: { type: Boolean, default: !1 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: l, emit: n }) {
  let o = $(1), a = $(null), i = $(null), u = $(null), d = $(null), f = $({ static: !1, hold: !1 }), v = $([]), c = $(null), w = $(1), x = $(!1);
  function V(L = (M) => M) {
    let M = c.value !== null ? v.value[c.value] : null, A = kt(L(v.value.slice()), (F) => O(F.dataRef.domRef)), T = M ? A.indexOf(M) : null;
    return T === -1 && (T = null), { options: A, activeOptionIndex: T };
  }
  let g = S(() => e.multiple ? 1 : 0), y = S(() => e.nullable), [k, _] = Ct(S(() => e.modelValue === void 0 ? Q(g.value, { [1]: [], [0]: void 0 }) : e.modelValue), (L) => n("update:modelValue", L), S(() => e.defaultValue)), P = { comboboxState: o, value: k, mode: g, compare(L, M) {
    if (typeof e.by == "string") {
      let A = e.by;
      return (L == null ? void 0 : L[A]) === (M == null ? void 0 : M[A]);
    }
    return e.by(L, M);
  }, defaultValue: S(() => e.defaultValue), nullable: y, inputRef: i, labelRef: a, buttonRef: u, optionsRef: d, disabled: S(() => e.disabled), options: v, change(L) {
    _(L);
  }, activeOptionIndex: S(() => {
    if (x.value && c.value === null && v.value.length > 0) {
      let L = v.value.findIndex((M) => !M.dataRef.disabled);
      if (L !== -1)
        return L;
    }
    return c.value;
  }), activationTrigger: w, optionsPropsRef: f, closeCombobox() {
    x.value = !1, !e.disabled && o.value !== 1 && (o.value = 1, c.value = null);
  }, openCombobox() {
    if (x.value = !0, e.disabled || o.value === 0)
      return;
    let L = v.value.findIndex((M) => {
      let A = K(M.dataRef.value);
      return Q(g.value, { [0]: () => P.compare(K(P.value.value), K(A)), [1]: () => K(P.value.value).some((T) => P.compare(K(T), K(A))) });
    });
    L !== -1 && (c.value = L), o.value = 0;
  }, goToOption(L, M, A) {
    if (x.value = !1, e.disabled || d.value && !f.value.static && o.value === 1)
      return;
    let T = V();
    if (T.activeOptionIndex === null) {
      let X = T.options.findIndex((ge) => !ge.dataRef.disabled);
      X !== -1 && (T.activeOptionIndex = X);
    }
    let F = Zl(L === ue.Specific ? { focus: ue.Specific, id: M } : { focus: L }, { resolveItems: () => T.options, resolveActiveIndex: () => T.activeOptionIndex, resolveId: (X) => X.id, resolveDisabled: (X) => X.dataRef.disabled });
    c.value = F, w.value = A ?? 1, v.value = T.options;
  }, selectOption(L) {
    let M = v.value.find((T) => T.id === L);
    if (!M)
      return;
    let { dataRef: A } = M;
    _(Q(g.value, { [0]: () => A.value, [1]: () => {
      let T = K(P.value.value).slice(), F = K(A.value), X = T.findIndex((ge) => P.compare(F, K(ge)));
      return X === -1 ? T.push(F) : T.splice(X, 1), T;
    } }));
  }, selectActiveOption() {
    if (P.activeOptionIndex.value === null)
      return;
    let { dataRef: L, id: M } = v.value[P.activeOptionIndex.value];
    _(Q(g.value, { [0]: () => L.value, [1]: () => {
      let A = K(P.value.value).slice(), T = K(L.value), F = A.findIndex((X) => P.compare(T, K(X)));
      return F === -1 ? A.push(T) : A.splice(F, 1), A;
    } })), P.goToOption(ue.Specific, M);
  }, registerOption(L, M) {
    let A = { id: L, dataRef: M }, T = V((F) => [...F, A]);
    if (c.value === null) {
      let F = M.value.value;
      Q(g.value, { [0]: () => P.compare(K(P.value.value), K(F)), [1]: () => K(P.value.value).some((X) => P.compare(K(X), K(F))) }) && (T.activeOptionIndex = T.options.indexOf(A));
    }
    v.value = T.options, c.value = T.activeOptionIndex, w.value = 1;
  }, unregisterOption(L) {
    var M;
    P.activeOptionIndex.value !== null && ((M = P.options.value[P.activeOptionIndex.value]) == null ? void 0 : M.id) === L && (x.value = !0);
    let A = V((T) => {
      let F = T.findIndex((X) => X.id === L);
      return F !== -1 && T.splice(F, 1), T;
    });
    v.value = A.options, c.value = A.activeOptionIndex, w.value = 1;
  } };
  $t([i, u, d], () => P.closeCombobox(), S(() => o.value === 0)), ie(uo, P), Ze(S(() => Q(o.value, { [0]: Y.Open, [1]: Y.Closed })));
  let D = S(() => P.activeOptionIndex.value === null ? null : v.value[P.activeOptionIndex.value].dataRef.value), R = S(() => {
    var L;
    return (L = O(i)) == null ? void 0 : L.closest("form");
  });
  return H(() => {
    Z([R], () => {
      if (!R.value || e.defaultValue === void 0)
        return;
      function L() {
        P.change(e.defaultValue);
      }
      return R.value.addEventListener("reset", L), () => {
        var M;
        (M = R.value) == null || M.removeEventListener("reset", L);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: L, disabled: M, ...A } = e, T = { open: o.value === 0, disabled: M, activeIndex: P.activeOptionIndex.value, activeOption: D.value, value: k.value };
    return J(j, [...L != null && k.value != null ? _t({ [L]: k.value }).map(([F, X]) => J(Ve, wt({ features: xe.Hidden, key: F, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: F, value: X }))) : [], G({ theirProps: { ...l, ...Te(A, ["modelValue", "defaultValue", "nullable", "multiple", "onUpdate:modelValue", "by"]) }, ourProps: {}, slot: T, slots: t, attrs: l, name: "Combobox" })]);
  };
} }), cn = U({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-combobox-label-${te()}` } }, setup(e, { attrs: t, slots: l }) {
  let n = De("ComboboxLabel");
  function o() {
    var a;
    (a = O(n.inputRef)) == null || a.focus({ preventScroll: !0 });
  }
  return () => {
    let a = { open: n.comboboxState.value === 0, disabled: n.disabled.value }, { id: i, ...u } = e, d = { id: i, ref: n.labelRef, onClick: o };
    return G({ ourProps: d, theirProps: u, slot: a, attrs: t, slots: l, name: "ComboboxLabel" });
  };
} }), fn = U({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-combobox-button-${te()}` } }, setup(e, { attrs: t, slots: l, expose: n }) {
  let o = De("ComboboxButton");
  n({ el: o.buttonRef, $el: o.buttonRef });
  function a(d) {
    o.disabled.value || (o.comboboxState.value === 0 ? o.closeCombobox() : (d.preventDefault(), o.openCombobox()), ke(() => {
      var f;
      return (f = O(o.inputRef)) == null ? void 0 : f.focus({ preventScroll: !0 });
    }));
  }
  function i(d) {
    switch (d.key) {
      case z.ArrowDown:
        d.preventDefault(), d.stopPropagation(), o.comboboxState.value === 1 && o.openCombobox(), ke(() => {
          var f;
          return (f = o.inputRef.value) == null ? void 0 : f.focus({ preventScroll: !0 });
        });
        return;
      case z.ArrowUp:
        d.preventDefault(), d.stopPropagation(), o.comboboxState.value === 1 && (o.openCombobox(), ke(() => {
          o.value.value || o.goToOption(ue.Last);
        })), ke(() => {
          var f;
          return (f = o.inputRef.value) == null ? void 0 : f.focus({ preventScroll: !0 });
        });
        return;
      case z.Escape:
        if (o.comboboxState.value !== 0)
          return;
        d.preventDefault(), o.optionsRef.value && !o.optionsPropsRef.value.static && d.stopPropagation(), o.closeCombobox(), ke(() => {
          var f;
          return (f = o.inputRef.value) == null ? void 0 : f.focus({ preventScroll: !0 });
        });
        return;
    }
  }
  let u = Qe(S(() => ({ as: e.as, type: t.type })), o.buttonRef);
  return () => {
    var d, f;
    let v = { open: o.comboboxState.value === 0, disabled: o.disabled.value, value: o.value.value }, { id: c, ...w } = e, x = { ref: o.buttonRef, id: c, type: u.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (d = O(o.optionsRef)) == null ? void 0 : d.id, "aria-expanded": o.disabled.value ? void 0 : o.comboboxState.value === 0, "aria-labelledby": o.labelRef.value ? [(f = O(o.labelRef)) == null ? void 0 : f.id, c].join(" ") : void 0, disabled: o.disabled.value === !0 ? !0 : void 0, onKeydown: i, onClick: a };
    return G({ ourProps: x, theirProps: w, slot: v, attrs: t, slots: l, name: "ComboboxButton" });
  };
} }), vn = U({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: () => `headlessui-combobox-input-${te()}` } }, emits: { change: (e) => !0 }, setup(e, { emit: t, attrs: l, slots: n, expose: o }) {
  let a = De("ComboboxInput"), i = { value: !1 };
  o({ el: a.inputRef, $el: a.inputRef });
  let u = S(() => {
    var g;
    let y = a.value.value;
    return O(a.inputRef) ? typeof e.displayValue < "u" && y !== void 0 ? (g = e.displayValue(y)) != null ? g : "" : typeof y == "string" ? y : "" : "";
  });
  H(() => {
    Z([u, a.comboboxState], ([g, y], [k, _]) => {
      if (i.value)
        return;
      let P = O(a.inputRef);
      P && (_ === 0 && y === 1 || g !== k) && (P.value = g);
    }, { immediate: !0 }), Z([a.comboboxState], ([g], [y]) => {
      if (g === 0 && y === 1) {
        let k = O(a.inputRef);
        if (!k)
          return;
        let _ = k.value, { selectionStart: P, selectionEnd: D, selectionDirection: R } = k;
        k.value = "", k.value = _, R !== null ? k.setSelectionRange(P, D, R) : k.setSelectionRange(P, D);
      }
    });
  });
  let d = $(!1);
  function f() {
    d.value = !0;
  }
  function v() {
    setTimeout(() => {
      d.value = !1;
    });
  }
  function c(g) {
    switch (i.value = !0, g.key) {
      case z.Backspace:
      case z.Delete:
        if (a.mode.value !== 0 || !a.nullable.value)
          return;
        let y = g.currentTarget;
        requestAnimationFrame(() => {
          if (y.value === "") {
            a.change(null);
            let k = O(a.optionsRef);
            k && (k.scrollTop = 0), a.goToOption(ue.Nothing);
          }
        });
        break;
      case z.Enter:
        if (i.value = !1, a.comboboxState.value !== 0 || d.value)
          return;
        if (g.preventDefault(), g.stopPropagation(), a.activeOptionIndex.value === null) {
          a.closeCombobox();
          return;
        }
        a.selectActiveOption(), a.mode.value === 0 && a.closeCombobox();
        break;
      case z.ArrowDown:
        return i.value = !1, g.preventDefault(), g.stopPropagation(), Q(a.comboboxState.value, { [0]: () => a.goToOption(ue.Next), [1]: () => a.openCombobox() });
      case z.ArrowUp:
        return i.value = !1, g.preventDefault(), g.stopPropagation(), Q(a.comboboxState.value, { [0]: () => a.goToOption(ue.Previous), [1]: () => {
          a.openCombobox(), ke(() => {
            a.value.value || a.goToOption(ue.Last);
          });
        } });
      case z.Home:
        if (g.shiftKey)
          break;
        return i.value = !1, g.preventDefault(), g.stopPropagation(), a.goToOption(ue.First);
      case z.PageUp:
        return i.value = !1, g.preventDefault(), g.stopPropagation(), a.goToOption(ue.First);
      case z.End:
        if (g.shiftKey)
          break;
        return i.value = !1, g.preventDefault(), g.stopPropagation(), a.goToOption(ue.Last);
      case z.PageDown:
        return i.value = !1, g.preventDefault(), g.stopPropagation(), a.goToOption(ue.Last);
      case z.Escape:
        if (i.value = !1, a.comboboxState.value !== 0)
          return;
        g.preventDefault(), a.optionsRef.value && !a.optionsPropsRef.value.static && g.stopPropagation(), a.closeCombobox();
        break;
      case z.Tab:
        if (i.value = !1, a.comboboxState.value !== 0)
          return;
        a.mode.value === 0 && a.selectActiveOption(), a.closeCombobox();
        break;
    }
  }
  function w(g) {
    a.openCombobox(), t("change", g);
  }
  function x() {
    i.value = !1;
  }
  let V = S(() => {
    var g, y, k, _;
    return (_ = (k = (y = e.defaultValue) != null ? y : a.defaultValue.value !== void 0 ? (g = e.displayValue) == null ? void 0 : g.call(e, a.defaultValue.value) : null) != null ? k : a.defaultValue.value) != null ? _ : "";
  });
  return () => {
    var g, y, k, _, P, D;
    let R = { open: a.comboboxState.value === 0 }, { id: L, displayValue: M, onChange: A, ...T } = e, F = { "aria-controls": (g = a.optionsRef.value) == null ? void 0 : g.id, "aria-expanded": a.disabled.value ? void 0 : a.comboboxState.value === 0, "aria-activedescendant": a.activeOptionIndex.value === null || (y = a.options.value[a.activeOptionIndex.value]) == null ? void 0 : y.id, "aria-labelledby": (P = (k = O(a.labelRef)) == null ? void 0 : k.id) != null ? P : (_ = O(a.buttonRef)) == null ? void 0 : _.id, "aria-autocomplete": "list", id: L, onCompositionstart: f, onCompositionend: v, onKeydown: c, onInput: w, onBlur: x, role: "combobox", type: (D = l.type) != null ? D : "text", tabIndex: 0, ref: a.inputRef, defaultValue: V.value };
    return G({ ourProps: F, theirProps: T, slot: R, attrs: l, slots: n, features: ce.RenderStrategy | ce.Static, name: "ComboboxInput" });
  };
} }), mn = U({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, hold: { type: [Boolean], default: !1 } }, setup(e, { attrs: t, slots: l, expose: n }) {
  let o = De("ComboboxOptions"), a = `headlessui-combobox-options-${te()}`;
  n({ el: o.optionsRef, $el: o.optionsRef }), le(() => {
    o.optionsPropsRef.value.static = e.static;
  }), le(() => {
    o.optionsPropsRef.value.hold = e.hold;
  });
  let i = je(), u = S(() => i !== null ? (i.value & Y.Open) === Y.Open : o.comboboxState.value === 0);
  return no({ container: S(() => O(o.optionsRef)), enabled: S(() => o.comboboxState.value === 0), accept(d) {
    return d.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : d.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(d) {
    d.setAttribute("role", "none");
  } }), () => {
    var d, f, v;
    let c = { open: o.comboboxState.value === 0 }, w = { "aria-labelledby": (v = (d = O(o.labelRef)) == null ? void 0 : d.id) != null ? v : (f = O(o.buttonRef)) == null ? void 0 : f.id, id: a, ref: o.optionsRef, role: "listbox", "aria-multiselectable": o.mode.value === 1 ? !0 : void 0 }, x = Te(e, ["hold"]);
    return G({ ourProps: w, theirProps: x, slot: c, attrs: t, slots: l, features: ce.RenderStrategy | ce.Static, visible: u.value, name: "ComboboxOptions" });
  };
} }), hn = U({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: l, expose: n }) {
  let o = De("ComboboxOption"), a = `headlessui-combobox-option-${te()}`, i = $(null);
  n({ el: i, $el: i });
  let u = S(() => o.activeOptionIndex.value !== null ? o.options.value[o.activeOptionIndex.value].id === a : !1), d = S(() => Q(o.mode.value, { [0]: () => o.compare(K(o.value.value), K(e.value)), [1]: () => K(o.value.value).some((y) => o.compare(K(y), K(e.value))) })), f = S(() => ({ disabled: e.disabled, value: e.value, domRef: i }));
  H(() => o.registerOption(a, f)), se(() => o.unregisterOption(a)), le(() => {
    o.comboboxState.value === 0 && u.value && o.activationTrigger.value !== 0 && ke(() => {
      var y, k;
      return (k = (y = O(i)) == null ? void 0 : y.scrollIntoView) == null ? void 0 : k.call(y, { block: "nearest" });
    });
  });
  function v(y) {
    if (e.disabled)
      return y.preventDefault();
    o.selectOption(a), o.mode.value === 0 && o.closeCombobox(), an() || requestAnimationFrame(() => {
      var k;
      return (k = O(o.inputRef)) == null ? void 0 : k.focus();
    });
  }
  function c() {
    if (e.disabled)
      return o.goToOption(ue.Nothing);
    o.goToOption(ue.Specific, a);
  }
  let w = ln();
  function x(y) {
    w.update(y);
  }
  function V(y) {
    w.wasMoved(y) && (e.disabled || u.value || o.goToOption(ue.Specific, a, 0));
  }
  function g(y) {
    w.wasMoved(y) && (e.disabled || u.value && (o.optionsPropsRef.value.hold || o.goToOption(ue.Nothing)));
  }
  return () => {
    let { disabled: y } = e, k = { active: u.value, selected: d.value, disabled: y }, _ = { id: a, ref: i, role: "option", tabIndex: y === !0 ? void 0 : -1, "aria-disabled": y === !0 ? !0 : void 0, "aria-selected": d.value, disabled: void 0, onClick: v, onFocus: c, onPointerenter: x, onMouseenter: x, onPointermove: V, onMousemove: V, onPointerleave: g, onMouseleave: g };
    return G({ ourProps: _, theirProps: e, slot: k, attrs: l, slots: t, name: "ComboboxOption" });
  };
} });
function bn(e, t, l) {
  Fe.isServer || le((n) => {
    window.addEventListener(e, t, l), n(() => window.removeEventListener(e, t, l));
  });
}
var me = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(me || {});
function St() {
  let e = $(0);
  return bn("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Ot(e, t, l, n) {
  Fe.isServer || le((o) => {
    e = e ?? window, e.addEventListener(t, l, n), o(() => e.removeEventListener(t, l, n));
  });
}
function co(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function fo(e) {
  if (!e)
    return /* @__PURE__ */ new Set();
  if (typeof e == "function")
    return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let l of e.value) {
    let n = O(l);
    n instanceof HTMLElement && t.add(n);
  }
  return t;
}
var vo = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(vo || {});
let Ne = Object.assign(U({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: $(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: l, expose: n }) {
  let o = $(null);
  n({ el: o, $el: o });
  let a = S(() => he(o)), i = $(!1);
  H(() => i.value = !0), se(() => i.value = !1), yn({ ownerDocument: a }, S(() => i.value && Boolean(e.features & 16)));
  let u = xn({ ownerDocument: a, container: o, initialFocus: S(() => e.initialFocus) }, S(() => i.value && Boolean(e.features & 2)));
  wn({ ownerDocument: a, container: o, containers: e.containers, previousActiveElement: u }, S(() => i.value && Boolean(e.features & 8)));
  let d = St();
  function f(x) {
    let V = O(o);
    V && ((g) => g())(() => {
      Q(d.value, { [me.Forwards]: () => {
        ve(V, ne.First, { skipElements: [x.relatedTarget] });
      }, [me.Backwards]: () => {
        ve(V, ne.Last, { skipElements: [x.relatedTarget] });
      } });
    });
  }
  let v = $(!1);
  function c(x) {
    x.key === "Tab" && (v.value = !0, requestAnimationFrame(() => {
      v.value = !1;
    }));
  }
  function w(x) {
    if (!i.value)
      return;
    let V = fo(e.containers);
    O(o) instanceof HTMLElement && V.add(O(o));
    let g = x.relatedTarget;
    g instanceof HTMLElement && g.dataset.headlessuiFocusGuard !== "true" && (mo(V, g) || (v.value ? ve(O(o), Q(d.value, { [me.Forwards]: () => ne.Next, [me.Backwards]: () => ne.Previous }) | ne.WrapAround, { relativeTo: x.target }) : x.target instanceof HTMLElement && Le(x.target)));
  }
  return () => {
    let x = {}, V = { ref: o, onKeydown: c, onFocusout: w }, { features: g, initialFocus: y, containers: k, ..._ } = e;
    return J(j, [Boolean(g & 4) && J(Ve, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: xe.Focusable }), G({ ourProps: V, theirProps: { ...t, ..._ }, slot: x, attrs: t, slots: l, name: "FocusTrap" }), Boolean(g & 4) && J(Ve, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: xe.Focusable })]);
  };
} }), { features: vo }), Oe = [];
if (typeof window < "u" && typeof document < "u") {
  let e = function(t) {
    t.target instanceof HTMLElement && t.target !== document.body && Oe[0] !== t.target && (Oe.unshift(t.target), Oe = Oe.filter((l) => l != null && l.isConnected), Oe.splice(10));
  };
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
}
function gn(e) {
  let t = $(Oe.slice());
  return Z([e], ([l], [n]) => {
    n === !0 && l === !1 ? co(() => {
      t.value.splice(0);
    }) : n === !1 && l === !0 && (t.value = Oe.slice());
  }, { flush: "post" }), () => {
    var l;
    return (l = t.value.find((n) => n != null && n.isConnected)) != null ? l : null;
  };
}
function yn({ ownerDocument: e }, t) {
  let l = gn(t);
  H(() => {
    le(() => {
      var n, o;
      t.value || ((n = e.value) == null ? void 0 : n.activeElement) === ((o = e.value) == null ? void 0 : o.body) && Le(l());
    }, { flush: "post" });
  }), se(() => {
    Le(l());
  });
}
function xn({ ownerDocument: e, container: t, initialFocus: l }, n) {
  let o = $(null), a = $(!1);
  return H(() => a.value = !0), se(() => a.value = !1), H(() => {
    Z([t, l, n], (i, u) => {
      if (i.every((f, v) => (u == null ? void 0 : u[v]) === f) || !n.value)
        return;
      let d = O(t);
      d && co(() => {
        var f, v;
        if (!a.value)
          return;
        let c = O(l), w = (f = e.value) == null ? void 0 : f.activeElement;
        if (c) {
          if (c === w) {
            o.value = w;
            return;
          }
        } else if (d.contains(w)) {
          o.value = w;
          return;
        }
        c ? Le(c) : ve(d, ne.First | ne.NoScroll) === Be.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), o.value = (v = e.value) == null ? void 0 : v.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), o;
}
function wn({ ownerDocument: e, container: t, containers: l, previousActiveElement: n }, o) {
  var a;
  Ot((a = e.value) == null ? void 0 : a.defaultView, "focus", (i) => {
    if (!o.value)
      return;
    let u = fo(l);
    O(t) instanceof HTMLElement && u.add(O(t));
    let d = n.value;
    if (!d)
      return;
    let f = i.target;
    f && f instanceof HTMLElement ? mo(u, f) ? (n.value = f, Le(f)) : (i.preventDefault(), i.stopPropagation(), Le(d)) : Le(n.value);
  }, !0);
}
function mo(e, t) {
  for (let l of e)
    if (l.contains(t))
      return !0;
  return !1;
}
let rt = /* @__PURE__ */ new Map(), Ae = /* @__PURE__ */ new Map();
function qt(e, t = $(!0)) {
  le((l) => {
    var n;
    if (!t.value)
      return;
    let o = O(e);
    if (!o)
      return;
    l(function() {
      var i;
      if (!o)
        return;
      let u = (i = Ae.get(o)) != null ? i : 1;
      if (u === 1 ? Ae.delete(o) : Ae.set(o, u - 1), u !== 1)
        return;
      let d = rt.get(o);
      d && (d["aria-hidden"] === null ? o.removeAttribute("aria-hidden") : o.setAttribute("aria-hidden", d["aria-hidden"]), o.inert = d.inert, rt.delete(o));
    });
    let a = (n = Ae.get(o)) != null ? n : 0;
    Ae.set(o, a + 1), a === 0 && (rt.set(o, { "aria-hidden": o.getAttribute("aria-hidden"), inert: o.inert }), o.setAttribute("aria-hidden", "true"), o.inert = !0);
  });
}
let ho = Symbol("ForcePortalRootContext");
function Vn() {
  return re(ho, !1);
}
let ct = U({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: l }) {
  return ie(ho, e.force), () => {
    let { force: n, ...o } = e;
    return G({ theirProps: o, ourProps: {}, slot: {}, slots: t, attrs: l, name: "ForcePortalRoot" });
  };
} });
function kn(e) {
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
let bo = U({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: l }) {
  let n = $(null), o = S(() => he(n)), a = Vn(), i = re(go, null), u = $(a === !0 || i == null ? kn(n.value) : i.resolveTarget());
  return le(() => {
    a || i != null && (u.value = i.resolveTarget());
  }), se(() => {
    var d, f;
    let v = (d = o.value) == null ? void 0 : d.getElementById("headlessui-portal-root");
    v && u.value === v && u.value.children.length <= 0 && ((f = u.value.parentElement) == null || f.removeChild(u.value));
  }), () => {
    if (u.value === null)
      return null;
    let d = { ref: n, "data-headlessui-portal": "" };
    return J(We, { to: u.value }, G({ ourProps: d, theirProps: e, slot: {}, attrs: l, slots: t, name: "Portal" }));
  };
} }), go = Symbol("PortalGroupContext"), $n = U({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: l }) {
  let n = Qo({ resolveTarget() {
    return e.target;
  } });
  return ie(go, n), () => {
    let { target: o, ...a } = e;
    return G({ theirProps: a, ourProps: {}, slot: {}, attrs: t, slots: l, name: "PortalGroup" });
  };
} }), yo = Symbol("StackContext");
var ft = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(ft || {});
function _n() {
  return re(yo, () => {
  });
}
function Cn({ type: e, enabled: t, element: l, onUpdate: n }) {
  let o = _n();
  function a(...i) {
    n == null || n(...i), o(...i);
  }
  H(() => {
    Z(t, (i, u) => {
      i ? a(0, e, l) : u === !0 && a(1, e, l);
    }, { immediate: !0, flush: "sync" });
  }), se(() => {
    t.value && a(1, e, l);
  }), ie(yo, a);
}
let xo = Symbol("DescriptionContext");
function Sn() {
  let e = re(xo, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function Je({ slot: e = $({}), name: t = "Description", props: l = {} } = {}) {
  let n = $([]);
  function o(a) {
    return n.value.push(a), () => {
      let i = n.value.indexOf(a);
      i !== -1 && n.value.splice(i, 1);
    };
  }
  return ie(xo, { register: o, slot: e, name: t, props: l }), S(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
let On = U({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${te()}` } }, setup(e, { attrs: t, slots: l }) {
  let n = Sn();
  return H(() => se(n.register(e.id))), () => {
    let { name: o = "Description", slot: a = $({}), props: i = {} } = n, { id: u, ...d } = e, f = { ...Object.entries(i).reduce((v, [c, w]) => Object.assign(v, { [c]: m(w) }), {}), id: u };
    return G({ ourProps: f, theirProps: d, slot: a.value, attrs: t, slots: l, name: o });
  };
} });
function Pn(e) {
  let t = Yt(e.getSnapshot());
  return se(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function Xe() {
  let e = [], t = { addEventListener(l, n, o, a) {
    return l.addEventListener(n, o, a), t.add(() => l.removeEventListener(n, o, a));
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
    let a = l.style.getPropertyValue(n);
    return Object.assign(l.style, { [n]: o }), this.add(() => {
      Object.assign(l.style, { [n]: a });
    });
  }, group(l) {
    let n = Xe();
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
function En(e, t) {
  let l = e(), n = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return l;
  }, subscribe(o) {
    return n.add(o), () => n.delete(o);
  }, dispatch(o, ...a) {
    let i = t[o].call(l, ...a);
    i && (l = i, n.forEach((u) => u()));
  } };
}
function Ln() {
  let e;
  return { before({ doc: t }) {
    var l;
    let n = t.documentElement;
    e = ((l = t.defaultView) != null ? l : window).innerWidth - n.clientWidth;
  }, after({ doc: t, d: l }) {
    let n = t.documentElement, o = n.clientWidth - n.offsetWidth, a = e - o;
    l.style(n, "paddingRight", `${a}px`);
  } };
}
function Bn() {
  if (!po())
    return {};
  let e;
  return { before() {
    e = window.pageYOffset;
  }, after({ doc: t, d: l, meta: n }) {
    function o(i) {
      return n.containers.flatMap((u) => u()).some((u) => u.contains(i));
    }
    l.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
    let a = null;
    l.addEventListener(t, "click", (i) => {
      if (i.target instanceof HTMLElement)
        try {
          let u = i.target.closest("a");
          if (!u)
            return;
          let { hash: d } = new URL(u.href), f = t.querySelector(d);
          f && !o(f) && (a = f);
        } catch {
        }
    }, !0), l.addEventListener(t, "touchmove", (i) => {
      i.target instanceof HTMLElement && !o(i.target) && i.preventDefault();
    }, { passive: !1 }), l.add(() => {
      window.scrollTo(0, window.pageYOffset + e), a && a.isConnected && (a.scrollIntoView({ block: "nearest" }), a = null);
    });
  } };
}
function jn() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function Tn(e) {
  let t = {};
  for (let l of e)
    Object.assign(t, l(t));
  return t;
}
let Pe = En(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var l;
  let n = (l = this.get(e)) != null ? l : { doc: e, count: 0, d: Xe(), meta: /* @__PURE__ */ new Set() };
  return n.count++, n.meta.add(t), this.set(e, n), this;
}, POP(e, t) {
  let l = this.get(e);
  return l && (l.count--, l.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: l }) {
  let n = { doc: e, d: t, meta: Tn(l) }, o = [Bn(), Ln(), jn()];
  o.forEach(({ before: a }) => a == null ? void 0 : a(n)), o.forEach(({ after: a }) => a == null ? void 0 : a(n));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
Pe.subscribe(() => {
  let e = Pe.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [l] of e)
    t.set(l, l.documentElement.style.overflow);
  for (let l of e.values()) {
    let n = t.get(l.doc) === "hidden", o = l.count !== 0;
    (o && !n || !o && n) && Pe.dispatch(l.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", l), l.count === 0 && Pe.dispatch("TEARDOWN", l);
  }
});
function Dn(e, t, l) {
  let n = Pn(Pe), o = S(() => {
    let a = e.value ? n.value.get(e.value) : void 0;
    return a ? a.count > 0 : !1;
  });
  return Z([e, t], ([a, i], [u], d) => {
    if (!a || !i)
      return;
    Pe.dispatch("PUSH", a, l);
    let f = !1;
    d(() => {
      f || (Pe.dispatch("POP", u ?? a, l), f = !0);
    });
  }, { immediate: !0 }), o;
}
var Nn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Nn || {});
let vt = Symbol("DialogContext");
function ze(e) {
  let t = re(vt, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, ze), l;
  }
  return t;
}
let Ue = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", et = U({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: Ue }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${te()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: l, slots: n, expose: o }) {
  var a;
  let i = $(!1);
  H(() => {
    i.value = !0;
  });
  let u = $(0), d = je(), f = S(() => e.open === Ue && d !== null ? (d.value & Y.Open) === Y.Open : e.open), v = $(null), c = $(null), w = S(() => he(v));
  if (o({ el: v, $el: v }), !(e.open !== Ue || d !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof f.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${f.value === Ue ? void 0 : e.open}`);
  let x = S(() => i.value && f.value ? 0 : 1), V = S(() => x.value === 0), g = S(() => u.value > 1), y = re(vt, null) !== null, k = S(() => g.value ? "parent" : "leaf"), _ = S(() => d !== null ? (d.value & Y.Closing) === Y.Closing : !1), P = S(() => y || _.value ? !1 : V.value), D = S(() => {
    var q, W, oe;
    return (oe = Array.from((W = (q = w.value) == null ? void 0 : q.querySelectorAll("body > *")) != null ? W : []).find((pe) => pe.id === "headlessui-portal-root" ? !1 : pe.contains(O(c)) && pe instanceof HTMLElement)) != null ? oe : null;
  });
  qt(D, P);
  let R = S(() => g.value ? !0 : V.value), L = S(() => {
    var q, W, oe;
    return (oe = Array.from((W = (q = w.value) == null ? void 0 : q.querySelectorAll("[data-headlessui-portal]")) != null ? W : []).find((pe) => pe.contains(O(c)) && pe instanceof HTMLElement)) != null ? oe : null;
  });
  qt(L, R), Cn({ type: "Dialog", enabled: S(() => x.value === 0), element: v, onUpdate: (q, W) => {
    if (W === "Dialog")
      return Q(q, { [ft.Add]: () => u.value += 1, [ft.Remove]: () => u.value -= 1 });
  } });
  let M = Je({ name: "DialogDescription", slot: S(() => ({ open: f.value })) }), A = $(null), T = { titleId: A, panelRef: $(null), dialogState: x, setTitleId(q) {
    A.value !== q && (A.value = q);
  }, close() {
    t("close", !1);
  } };
  ie(vt, T);
  function F() {
    var q, W, oe;
    return [...Array.from((W = (q = w.value) == null ? void 0 : q.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? W : []).filter((pe) => !(pe === document.body || pe === document.head || !(pe instanceof HTMLElement) || pe.contains(O(c)) || T.panelRef.value && pe.contains(T.panelRef.value))), (oe = T.panelRef.value) != null ? oe : v.value];
  }
  let X = S(() => !(!V.value || g.value));
  $t(() => F(), (q, W) => {
    T.close(), ke(() => W == null ? void 0 : W.focus());
  }, X);
  let ge = S(() => !(g.value || x.value !== 0));
  Ot((a = w.value) == null ? void 0 : a.defaultView, "keydown", (q) => {
    ge.value && (q.defaultPrevented || q.key === z.Escape && (q.preventDefault(), q.stopPropagation(), T.close()));
  });
  let fe = S(() => !(_.value || x.value !== 0 || y));
  return Dn(w, fe, (q) => {
    var W;
    return { containers: [...(W = q.containers) != null ? W : [], F] };
  }), le((q) => {
    if (x.value !== 0)
      return;
    let W = O(v);
    if (!W)
      return;
    let oe = new ResizeObserver((pe) => {
      for (let qe of pe) {
        let Ce = qe.target.getBoundingClientRect();
        Ce.x === 0 && Ce.y === 0 && Ce.width === 0 && Ce.height === 0 && T.close();
      }
    });
    oe.observe(W), q(() => oe.disconnect());
  }), () => {
    let { id: q, open: W, initialFocus: oe, ...pe } = e, qe = { ...l, ref: v, id: q, role: "dialog", "aria-modal": x.value === 0 ? !0 : void 0, "aria-labelledby": A.value, "aria-describedby": M.value }, Ce = { open: x.value === 0 };
    return J(ct, { force: !0 }, () => [J(bo, () => J($n, { target: v.value }, () => J(ct, { force: !1 }, () => J(Ne, { initialFocus: oe, containers: F, features: V.value ? Q(k.value, { parent: Ne.features.RestoreFocus, leaf: Ne.features.All & ~Ne.features.FocusLock }) : Ne.features.None }, () => G({ ourProps: qe, theirProps: pe, slot: Ce, attrs: l, slots: n, visible: x.value === 0, features: ce.RenderStrategy | ce.Static, name: "Dialog" }))))), J(Ve, { features: xe.Hidden, ref: c })]);
  };
} });
U({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${te()}` } }, setup(e, { attrs: t, slots: l }) {
  let n = ze("DialogOverlay");
  function o(a) {
    a.target === a.currentTarget && (a.preventDefault(), a.stopPropagation(), n.close());
  }
  return () => {
    let { id: a, ...i } = e;
    return G({ ourProps: { id: a, "aria-hidden": !0, onClick: o }, theirProps: i, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogOverlay" });
  };
} });
U({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${te()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: l, expose: n }) {
  let o = ze("DialogBackdrop"), a = $(null);
  return n({ el: a, $el: a }), H(() => {
    if (o.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: i, ...u } = e, d = { id: i, ref: a, "aria-hidden": !0 };
    return J(ct, { force: !0 }, () => J(bo, () => G({ ourProps: d, theirProps: { ...t, ...u }, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogBackdrop" })));
  };
} });
let tt = U({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${te()}` } }, setup(e, { attrs: t, slots: l, expose: n }) {
  let o = ze("DialogPanel");
  n({ el: o.panelRef, $el: o.panelRef });
  function a(i) {
    i.stopPropagation();
  }
  return () => {
    let { id: i, ...u } = e, d = { id: i, ref: o.panelRef, onClick: a };
    return G({ ourProps: d, theirProps: u, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogPanel" });
  };
} }), wo = U({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${te()}` } }, setup(e, { attrs: t, slots: l }) {
  let n = ze("DialogTitle");
  return H(() => {
    n.setTitleId(e.id), se(() => n.setTitleId(null));
  }), () => {
    let { id: o, ...a } = e;
    return G({ ourProps: { id: o }, theirProps: a, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogTitle" });
  };
} });
var An = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(An || {});
let Vo = Symbol("DisclosureContext");
function Pt(e) {
  let t = re(Vo, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, Pt), l;
  }
  return t;
}
let ko = Symbol("DisclosurePanelContext");
function Mn() {
  return re(ko, null);
}
let Ut = U({ name: "Disclosure", props: { as: { type: [Object, String], default: "template" }, defaultOpen: { type: [Boolean], default: !1 } }, setup(e, { slots: t, attrs: l }) {
  let n = $(e.defaultOpen ? 0 : 1), o = $(null), a = $(null), i = { buttonId: $(null), panelId: $(null), disclosureState: n, panel: o, button: a, toggleDisclosure() {
    n.value = Q(n.value, { [0]: 1, [1]: 0 });
  }, closeDisclosure() {
    n.value !== 1 && (n.value = 1);
  }, close(u) {
    i.closeDisclosure();
    let d = (() => u ? u instanceof HTMLElement ? u : u.value instanceof HTMLElement ? O(u) : O(i.button) : O(i.button))();
    d == null || d.focus();
  } };
  return ie(Vo, i), Ze(S(() => Q(n.value, { [0]: Y.Open, [1]: Y.Closed }))), () => {
    let { defaultOpen: u, ...d } = e, f = { open: n.value === 0, close: i.close };
    return G({ theirProps: d, ourProps: {}, slot: f, slots: t, attrs: l, name: "Disclosure" });
  };
} }), Gt = U({ name: "DisclosureButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-disclosure-button-${te()}` } }, setup(e, { attrs: t, slots: l, expose: n }) {
  let o = Pt("DisclosureButton");
  H(() => {
    o.buttonId.value = e.id;
  }), se(() => {
    o.buttonId.value = null;
  });
  let a = Mn(), i = S(() => a === null ? !1 : a.value === o.panelId.value), u = $(null);
  n({ el: u, $el: u }), i.value || le(() => {
    o.button.value = u.value;
  });
  let d = Qe(S(() => ({ as: e.as, type: t.type })), u);
  function f() {
    var w;
    e.disabled || (i.value ? (o.toggleDisclosure(), (w = O(o.button)) == null || w.focus()) : o.toggleDisclosure());
  }
  function v(w) {
    var x;
    if (!e.disabled)
      if (i.value)
        switch (w.key) {
          case z.Space:
          case z.Enter:
            w.preventDefault(), w.stopPropagation(), o.toggleDisclosure(), (x = O(o.button)) == null || x.focus();
            break;
        }
      else
        switch (w.key) {
          case z.Space:
          case z.Enter:
            w.preventDefault(), w.stopPropagation(), o.toggleDisclosure();
            break;
        }
  }
  function c(w) {
    switch (w.key) {
      case z.Space:
        w.preventDefault();
        break;
    }
  }
  return () => {
    let w = { open: o.disclosureState.value === 0 }, { id: x, ...V } = e, g = i.value ? { ref: u, type: d.value, onClick: f, onKeydown: v } : { id: x, ref: u, type: d.value, "aria-expanded": e.disabled ? void 0 : o.disclosureState.value === 0, "aria-controls": O(o.panel) ? o.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onClick: f, onKeydown: v, onKeyup: c };
    return G({ ourProps: g, theirProps: V, slot: w, attrs: t, slots: l, name: "DisclosureButton" });
  };
} }), Wt = U({ name: "DisclosurePanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-disclosure-panel-${te()}` } }, setup(e, { attrs: t, slots: l, expose: n }) {
  let o = Pt("DisclosurePanel");
  H(() => {
    o.panelId.value = e.id;
  }), se(() => {
    o.panelId.value = null;
  }), n({ el: o.panel, $el: o.panel }), ie(ko, o.panelId);
  let a = je(), i = S(() => a !== null ? (a.value & Y.Open) === Y.Open : o.disclosureState.value === 0);
  return () => {
    let u = { open: o.disclosureState.value === 0, close: o.close }, { id: d, ...f } = e, v = { id: d, ref: o.panel };
    return G({ ourProps: v, theirProps: f, slot: u, attrs: t, slots: l, features: ce.RenderStrategy | ce.Static, visible: i.value, name: "DisclosurePanel" });
  };
} });
var In = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(In || {});
let $o = Symbol("PopoverContext");
function ot(e) {
  let t = re($o, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <${lt.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, ot), l;
  }
  return t;
}
let _o = Symbol("PopoverGroupContext");
function Co() {
  return re(_o, null);
}
let So = Symbol("PopoverPanelContext");
function Rn() {
  return re(So, null);
}
let lt = U({ name: "Popover", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: l, expose: n }) {
  var o;
  let a = $(null);
  n({ el: a, $el: a });
  let i = $(1), u = $(null), d = $(null), f = $(null), v = $(null), c = S(() => he(a)), w = S(() => {
    var _, P;
    if (!O(u) || !O(v))
      return !1;
    for (let F of document.querySelectorAll("body > *"))
      if (Number(F == null ? void 0 : F.contains(O(u))) ^ Number(F == null ? void 0 : F.contains(O(v))))
        return !0;
    let D = Ye(), R = D.indexOf(O(u)), L = (R + D.length - 1) % D.length, M = (R + 1) % D.length, A = D[L], T = D[M];
    return !((_ = O(v)) != null && _.contains(A)) && !((P = O(v)) != null && P.contains(T));
  }), x = { popoverState: i, buttonId: $(null), panelId: $(null), panel: v, button: u, isPortalled: w, beforePanelSentinel: d, afterPanelSentinel: f, togglePopover() {
    i.value = Q(i.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    i.value !== 1 && (i.value = 1);
  }, close(_) {
    x.closePopover();
    let P = (() => _ ? _ instanceof HTMLElement ? _ : _.value instanceof HTMLElement ? O(_) : O(x.button) : O(x.button))();
    P == null || P.focus();
  } };
  ie($o, x), Ze(S(() => Q(i.value, { [0]: Y.Open, [1]: Y.Closed })));
  let V = { buttonId: x.buttonId, panelId: x.panelId, close() {
    x.closePopover();
  } }, g = Co(), y = g == null ? void 0 : g.registerPopover;
  function k() {
    var _, P, D, R;
    return (R = g == null ? void 0 : g.isFocusWithinPopoverGroup()) != null ? R : ((_ = c.value) == null ? void 0 : _.activeElement) && (((P = O(u)) == null ? void 0 : P.contains(c.value.activeElement)) || ((D = O(v)) == null ? void 0 : D.contains(c.value.activeElement)));
  }
  return le(() => y == null ? void 0 : y(V)), Ot((o = c.value) == null ? void 0 : o.defaultView, "focus", (_) => {
    var P, D;
    i.value === 0 && (k() || u && v && _.target !== window && ((P = O(x.beforePanelSentinel)) != null && P.contains(_.target) || (D = O(x.afterPanelSentinel)) != null && D.contains(_.target) || x.closePopover()));
  }, !0), $t([u, v], (_, P) => {
    var D;
    x.closePopover(), ao(P, Vt.Loose) || (_.preventDefault(), (D = O(u)) == null || D.focus());
  }, S(() => i.value === 0)), () => {
    let _ = { open: i.value === 0, close: x.close };
    return G({ theirProps: e, ourProps: { ref: a }, slot: _, slots: t, attrs: l, name: "Popover" });
  };
} }), Et = U({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-popover-button-${te()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: l, expose: n }) {
  let o = ot("PopoverButton"), a = S(() => he(o.button));
  n({ el: o.button, $el: o.button }), H(() => {
    o.buttonId.value = e.id;
  }), se(() => {
    o.buttonId.value = null;
  });
  let i = Co(), u = i == null ? void 0 : i.closeOthers, d = Rn(), f = S(() => d === null ? !1 : d.value === o.panelId.value), v = $(null), c = `headlessui-focus-sentinel-${te()}`;
  f.value || le(() => {
    o.button.value = v.value;
  });
  let w = Qe(S(() => ({ as: e.as, type: t.type })), v);
  function x(k) {
    var _, P, D, R, L;
    if (f.value) {
      if (o.popoverState.value === 1)
        return;
      switch (k.key) {
        case z.Space:
        case z.Enter:
          k.preventDefault(), (P = (_ = k.target).click) == null || P.call(_), o.closePopover(), (D = O(o.button)) == null || D.focus();
          break;
      }
    } else
      switch (k.key) {
        case z.Space:
        case z.Enter:
          k.preventDefault(), k.stopPropagation(), o.popoverState.value === 1 && (u == null || u(o.buttonId.value)), o.togglePopover();
          break;
        case z.Escape:
          if (o.popoverState.value !== 0)
            return u == null ? void 0 : u(o.buttonId.value);
          if (!O(o.button) || (R = a.value) != null && R.activeElement && !((L = O(o.button)) != null && L.contains(a.value.activeElement)))
            return;
          k.preventDefault(), k.stopPropagation(), o.closePopover();
          break;
      }
  }
  function V(k) {
    f.value || k.key === z.Space && k.preventDefault();
  }
  function g(k) {
    var _, P;
    e.disabled || (f.value ? (o.closePopover(), (_ = O(o.button)) == null || _.focus()) : (k.preventDefault(), k.stopPropagation(), o.popoverState.value === 1 && (u == null || u(o.buttonId.value)), o.togglePopover(), (P = O(o.button)) == null || P.focus()));
  }
  function y(k) {
    k.preventDefault(), k.stopPropagation();
  }
  return () => {
    let k = o.popoverState.value === 0, _ = { open: k }, { id: P, ...D } = e, R = f.value ? { ref: v, type: w.value, onKeydown: x, onClick: g } : { ref: v, id: P, type: w.value, "aria-expanded": e.disabled ? void 0 : o.popoverState.value === 0, "aria-controls": O(o.panel) ? o.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onKeydown: x, onKeyup: V, onClick: g, onMousedown: y }, L = St();
    function M() {
      let A = O(o.panel);
      if (!A)
        return;
      function T() {
        Q(L.value, { [me.Forwards]: () => ve(A, ne.First), [me.Backwards]: () => ve(A, ne.Last) }) === Be.Error && ve(Ye().filter((F) => F.dataset.headlessuiFocusGuard !== "true"), Q(L.value, { [me.Forwards]: ne.Next, [me.Backwards]: ne.Previous }), { relativeTo: O(o.button) });
      }
      T();
    }
    return J(j, [G({ ourProps: R, theirProps: { ...t, ...D }, slot: _, attrs: t, slots: l, name: "PopoverButton" }), k && !f.value && o.isPortalled.value && J(Ve, { id: c, features: xe.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: M })]);
  };
} });
U({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(e, { attrs: t, slots: l }) {
  let n = ot("PopoverOverlay"), o = `headlessui-popover-overlay-${te()}`, a = je(), i = S(() => a !== null ? (a.value & Y.Open) === Y.Open : n.popoverState.value === 0);
  function u() {
    n.closePopover();
  }
  return () => {
    let d = { open: n.popoverState.value === 0 };
    return G({ ourProps: { id: o, "aria-hidden": !0, onClick: u }, theirProps: e, slot: d, attrs: t, slots: l, features: ce.RenderStrategy | ce.Static, visible: i.value, name: "PopoverOverlay" });
  };
} });
let Lt = U({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-popover-panel-${te()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: l, expose: n }) {
  let { focus: o } = e, a = ot("PopoverPanel"), i = S(() => he(a.panel)), u = `headlessui-focus-sentinel-before-${te()}`, d = `headlessui-focus-sentinel-after-${te()}`;
  n({ el: a.panel, $el: a.panel }), H(() => {
    a.panelId.value = e.id;
  }), se(() => {
    a.panelId.value = null;
  }), ie(So, a.panelId), le(() => {
    var y, k;
    if (!o || a.popoverState.value !== 0 || !a.panel)
      return;
    let _ = (y = i.value) == null ? void 0 : y.activeElement;
    (k = O(a.panel)) != null && k.contains(_) || ve(O(a.panel), ne.First);
  });
  let f = je(), v = S(() => f !== null ? (f.value & Y.Open) === Y.Open : a.popoverState.value === 0);
  function c(y) {
    var k, _;
    switch (y.key) {
      case z.Escape:
        if (a.popoverState.value !== 0 || !O(a.panel) || i.value && !((k = O(a.panel)) != null && k.contains(i.value.activeElement)))
          return;
        y.preventDefault(), y.stopPropagation(), a.closePopover(), (_ = O(a.button)) == null || _.focus();
        break;
    }
  }
  function w(y) {
    var k, _, P, D, R;
    let L = y.relatedTarget;
    L && O(a.panel) && ((k = O(a.panel)) != null && k.contains(L) || (a.closePopover(), ((P = (_ = O(a.beforePanelSentinel)) == null ? void 0 : _.contains) != null && P.call(_, L) || (R = (D = O(a.afterPanelSentinel)) == null ? void 0 : D.contains) != null && R.call(D, L)) && L.focus({ preventScroll: !0 })));
  }
  let x = St();
  function V() {
    let y = O(a.panel);
    if (!y)
      return;
    function k() {
      Q(x.value, { [me.Forwards]: () => {
        var _;
        ve(y, ne.First) === Be.Error && ((_ = O(a.afterPanelSentinel)) == null || _.focus());
      }, [me.Backwards]: () => {
        var _;
        (_ = O(a.button)) == null || _.focus({ preventScroll: !0 });
      } });
    }
    k();
  }
  function g() {
    let y = O(a.panel);
    if (!y)
      return;
    function k() {
      Q(x.value, { [me.Forwards]: () => {
        let _ = O(a.button), P = O(a.panel);
        if (!_)
          return;
        let D = Ye(), R = D.indexOf(_), L = D.slice(0, R + 1), M = [...D.slice(R + 1), ...L];
        for (let A of M.slice())
          if (A.dataset.headlessuiFocusGuard === "true" || P != null && P.contains(A)) {
            let T = M.indexOf(A);
            T !== -1 && M.splice(T, 1);
          }
        ve(M, ne.First, { sorted: !1 });
      }, [me.Backwards]: () => {
        var _;
        ve(y, ne.Previous) === Be.Error && ((_ = O(a.button)) == null || _.focus());
      } });
    }
    k();
  }
  return () => {
    let y = { open: a.popoverState.value === 0, close: a.close }, { id: k, focus: _, ...P } = e, D = { ref: a.panel, id: k, onKeydown: c, onFocusout: o && a.popoverState.value === 0 ? w : void 0, tabIndex: -1 };
    return G({ ourProps: D, theirProps: { ...t, ...P }, attrs: t, slot: y, slots: { ...l, default: (...R) => {
      var L;
      return [J(j, [v.value && a.isPortalled.value && J(Ve, { id: u, ref: a.beforePanelSentinel, features: xe.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: V }), (L = l.default) == null ? void 0 : L.call(l, ...R), v.value && a.isPortalled.value && J(Ve, { id: d, ref: a.afterPanelSentinel, features: xe.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: g })])];
    } }, features: ce.RenderStrategy | ce.Static, visible: v.value, name: "PopoverPanel" });
  };
} });
U({ name: "PopoverGroup", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: l, expose: n }) {
  let o = $(null), a = Yt([]), i = S(() => he(o));
  n({ el: o, $el: o });
  function u(c) {
    let w = a.value.indexOf(c);
    w !== -1 && a.value.splice(w, 1);
  }
  function d(c) {
    return a.value.push(c), () => {
      u(c);
    };
  }
  function f() {
    var c;
    let w = i.value;
    if (!w)
      return !1;
    let x = w.activeElement;
    return (c = O(o)) != null && c.contains(x) ? !0 : a.value.some((V) => {
      var g, y;
      return ((g = w.getElementById(V.buttonId.value)) == null ? void 0 : g.contains(x)) || ((y = w.getElementById(V.panelId.value)) == null ? void 0 : y.contains(x));
    });
  }
  function v(c) {
    for (let w of a.value)
      w.buttonId.value !== c && w.close();
  }
  return ie(_o, { registerPopover: d, unregisterPopover: u, isFocusWithinPopoverGroup: f, closeOthers: v }), () => G({ ourProps: { ref: o }, theirProps: e, slot: {}, attrs: t, slots: l, name: "PopoverGroup" });
} });
let Oo = Symbol("LabelContext");
function Po() {
  let e = re(Oo, null);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Po), t;
  }
  return e;
}
function Bt({ slot: e = {}, name: t = "Label", props: l = {} } = {}) {
  let n = $([]);
  function o(a) {
    return n.value.push(a), () => {
      let i = n.value.indexOf(a);
      i !== -1 && n.value.splice(i, 1);
    };
  }
  return ie(Oo, { register: o, slot: e, name: t, props: l }), S(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
let Eo = U({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-label-${te()}` } }, setup(e, { slots: t, attrs: l }) {
  let n = Po();
  return H(() => se(n.register(e.id))), () => {
    let { name: o = "Label", slot: a = {}, props: i = {} } = n, { id: u, passive: d, ...f } = e, v = { ...Object.entries(i).reduce((c, [w, x]) => Object.assign(c, { [w]: m(x) }), {}), id: u };
    return d && (delete v.onClick, delete v.htmlFor, delete f.onClick), G({ ourProps: v, theirProps: f, slot: a, attrs: l, slots: t, name: o });
  };
} });
function Fn(e, t) {
  return e === t;
}
let Lo = Symbol("RadioGroupContext");
function Bo(e) {
  let t = re(Lo, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, Bo), l;
  }
  return t;
}
let zn = U({ name: "RadioGroup", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "div" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => Fn }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-radiogroup-${te()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: l, slots: n, expose: o }) {
  let a = $(null), i = $([]), u = Bt({ name: "RadioGroupLabel" }), d = Je({ name: "RadioGroupDescription" });
  o({ el: a, $el: a });
  let [f, v] = Ct(S(() => e.modelValue), (V) => t("update:modelValue", V), S(() => e.defaultValue)), c = { options: i, value: f, disabled: S(() => e.disabled), firstOption: S(() => i.value.find((V) => !V.propsRef.disabled)), containsCheckedOption: S(() => i.value.some((V) => c.compare(K(V.propsRef.value), K(e.modelValue)))), compare(V, g) {
    if (typeof e.by == "string") {
      let y = e.by;
      return (V == null ? void 0 : V[y]) === (g == null ? void 0 : g[y]);
    }
    return e.by(V, g);
  }, change(V) {
    var g;
    if (e.disabled || c.compare(K(f.value), K(V)))
      return !1;
    let y = (g = i.value.find((k) => c.compare(K(k.propsRef.value), K(V)))) == null ? void 0 : g.propsRef;
    return y != null && y.disabled ? !1 : (v(V), !0);
  }, registerOption(V) {
    i.value.push(V), i.value = kt(i.value, (g) => g.element);
  }, unregisterOption(V) {
    let g = i.value.findIndex((y) => y.id === V);
    g !== -1 && i.value.splice(g, 1);
  } };
  ie(Lo, c), no({ container: S(() => O(a)), accept(V) {
    return V.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : V.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(V) {
    V.setAttribute("role", "none");
  } });
  function w(V) {
    if (!a.value || !a.value.contains(V.target))
      return;
    let g = i.value.filter((y) => y.propsRef.disabled === !1).map((y) => y.element);
    switch (V.key) {
      case z.Enter:
        io(V.currentTarget);
        break;
      case z.ArrowLeft:
      case z.ArrowUp:
        if (V.preventDefault(), V.stopPropagation(), ve(g, ne.Previous | ne.WrapAround) === Be.Success) {
          let y = i.value.find((k) => {
            var _;
            return k.element === ((_ = he(a)) == null ? void 0 : _.activeElement);
          });
          y && c.change(y.propsRef.value);
        }
        break;
      case z.ArrowRight:
      case z.ArrowDown:
        if (V.preventDefault(), V.stopPropagation(), ve(g, ne.Next | ne.WrapAround) === Be.Success) {
          let y = i.value.find((k) => {
            var _;
            return k.element === ((_ = he(k.element)) == null ? void 0 : _.activeElement);
          });
          y && c.change(y.propsRef.value);
        }
        break;
      case z.Space:
        {
          V.preventDefault(), V.stopPropagation();
          let y = i.value.find((k) => {
            var _;
            return k.element === ((_ = he(k.element)) == null ? void 0 : _.activeElement);
          });
          y && c.change(y.propsRef.value);
        }
        break;
    }
  }
  let x = S(() => {
    var V;
    return (V = O(a)) == null ? void 0 : V.closest("form");
  });
  return H(() => {
    Z([x], () => {
      if (!x.value || e.defaultValue === void 0)
        return;
      function V() {
        c.change(e.defaultValue);
      }
      return x.value.addEventListener("reset", V), () => {
        var g;
        (g = x.value) == null || g.removeEventListener("reset", V);
      };
    }, { immediate: !0 });
  }), () => {
    let { disabled: V, name: g, id: y, ...k } = e, _ = { ref: a, id: y, role: "radiogroup", "aria-labelledby": u.value, "aria-describedby": d.value, onKeydown: w };
    return J(j, [...g != null && f.value != null ? _t({ [g]: f.value }).map(([P, D]) => J(Ve, wt({ features: xe.Hidden, key: P, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: P, value: D }))) : [], G({ ourProps: _, theirProps: { ...l, ...Te(k, ["modelValue", "defaultValue"]) }, slot: {}, attrs: l, slots: n, name: "RadioGroup" })]);
  };
} });
var Hn = ((e) => (e[e.Empty = 1] = "Empty", e[e.Active = 2] = "Active", e))(Hn || {});
let qn = U({ name: "RadioGroupOption", props: { as: { type: [Object, String], default: "div" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-radiogroup-option-${te()}` } }, setup(e, { attrs: t, slots: l, expose: n }) {
  let o = Bo("RadioGroupOption"), a = Bt({ name: "RadioGroupLabel" }), i = Je({ name: "RadioGroupDescription" }), u = $(null), d = S(() => ({ value: e.value, disabled: e.disabled })), f = $(1);
  n({ el: u, $el: u }), H(() => o.registerOption({ id: e.id, element: u, propsRef: d })), se(() => o.unregisterOption(e.id));
  let v = S(() => {
    var k;
    return ((k = o.firstOption.value) == null ? void 0 : k.id) === e.id;
  }), c = S(() => o.disabled.value || e.disabled), w = S(() => o.compare(K(o.value.value), K(e.value))), x = S(() => c.value ? -1 : w.value || !o.containsCheckedOption.value && v.value ? 0 : -1);
  function V() {
    var k;
    o.change(e.value) && (f.value |= 2, (k = u.value) == null || k.focus());
  }
  function g() {
    f.value |= 2;
  }
  function y() {
    f.value &= -3;
  }
  return () => {
    let { id: k, value: _, disabled: P, ...D } = e, R = { checked: w.value, disabled: c.value, active: Boolean(f.value & 2) }, L = { id: k, ref: u, role: "radio", "aria-checked": w.value ? "true" : "false", "aria-labelledby": a.value, "aria-describedby": i.value, "aria-disabled": c.value ? !0 : void 0, tabIndex: x.value, onClick: c.value ? void 0 : V, onFocus: c.value ? void 0 : g, onBlur: c.value ? void 0 : y };
    return G({ ourProps: L, theirProps: D, slot: R, attrs: t, slots: l, name: "RadioGroupOption" });
  };
} }), Kt = Eo, Un = On, jo = Symbol("GroupContext"), Gn = U({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: l }) {
  let n = $(null), o = Bt({ name: "SwitchLabel", props: { htmlFor: S(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.id;
  }), onClick(i) {
    n.value && (i.currentTarget.tagName === "LABEL" && i.preventDefault(), n.value.click(), n.value.focus({ preventScroll: !0 }));
  } } }), a = Je({ name: "SwitchDescription" });
  return ie(jo, { switchRef: n, labelledby: o, describedby: a }), () => G({ theirProps: e, ourProps: {}, slot: {}, slots: t, attrs: l, name: "SwitchGroup" });
} }), Wn = U({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: !0 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-switch-${te()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: l, slots: n, expose: o }) {
  let a = re(jo, null), [i, u] = Ct(S(() => e.modelValue), (y) => t("update:modelValue", y), S(() => e.defaultChecked));
  function d() {
    u(!i.value);
  }
  let f = $(null), v = a === null ? f : a.switchRef, c = Qe(S(() => ({ as: e.as, type: l.type })), v);
  o({ el: v, $el: v });
  function w(y) {
    y.preventDefault(), d();
  }
  function x(y) {
    y.key === z.Space ? (y.preventDefault(), d()) : y.key === z.Enter && io(y.currentTarget);
  }
  function V(y) {
    y.preventDefault();
  }
  let g = S(() => {
    var y, k;
    return (k = (y = O(v)) == null ? void 0 : y.closest) == null ? void 0 : k.call(y, "form");
  });
  return H(() => {
    Z([g], () => {
      if (!g.value || e.defaultChecked === void 0)
        return;
      function y() {
        u(e.defaultChecked);
      }
      return g.value.addEventListener("reset", y), () => {
        var k;
        (k = g.value) == null || k.removeEventListener("reset", y);
      };
    }, { immediate: !0 });
  }), () => {
    let { id: y, name: k, value: _, ...P } = e, D = { checked: i.value }, R = { id: y, ref: v, role: "switch", type: c.value, tabIndex: 0, "aria-checked": i.value, "aria-labelledby": a == null ? void 0 : a.labelledby.value, "aria-describedby": a == null ? void 0 : a.describedby.value, onClick: w, onKeyup: x, onKeypress: V };
    return J(j, [k != null && i.value != null ? J(Ve, wt({ features: xe.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: i.value, name: k, value: _ })) : null, G({ ourProps: R, theirProps: { ...l, ...Te(P, ["modelValue", "defaultChecked"]) }, slot: D, attrs: l, slots: n, name: "Switch" })]);
  };
} }), Kn = Eo;
function Zn(e) {
  let t = { called: !1 };
  return (...l) => {
    if (!t.called)
      return t.called = !0, e(...l);
  };
}
function it(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Ge(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var mt = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(mt || {});
function Qn(e, t) {
  let l = Xe();
  if (!e)
    return l.dispose;
  let { transitionDuration: n, transitionDelay: o } = getComputedStyle(e), [a, i] = [n, o].map((u) => {
    let [d = 0] = u.split(",").filter(Boolean).map((f) => f.includes("ms") ? parseFloat(f) : parseFloat(f) * 1e3).sort((f, v) => v - f);
    return d;
  });
  return a !== 0 ? l.setTimeout(() => t("finished"), a + i) : t("finished"), l.add(() => t("cancelled")), l.dispose;
}
function Zt(e, t, l, n, o, a) {
  let i = Xe(), u = a !== void 0 ? Zn(a) : () => {
  };
  return Ge(e, ...o), it(e, ...t, ...l), i.nextFrame(() => {
    Ge(e, ...l), it(e, ...n), i.add(Qn(e, (d) => (Ge(e, ...n, ...t), it(e, ...o), u(d))));
  }), i.add(() => Ge(e, ...t, ...l, ...n, ...o)), i.add(() => u("cancelled")), i.dispose;
}
function Se(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let jt = Symbol("TransitionContext");
var Yn = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Yn || {});
function Jn() {
  return re(jt, null) !== null;
}
function Xn() {
  let e = re(jt, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function ea() {
  let e = re(Tt, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let Tt = Symbol("NestingContext");
function nt(e) {
  return "children" in e ? nt(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function To(e) {
  let t = $([]), l = $(!1);
  H(() => l.value = !0), se(() => l.value = !1);
  function n(a, i = $e.Hidden) {
    let u = t.value.findIndex(({ id: d }) => d === a);
    u !== -1 && (Q(i, { [$e.Unmount]() {
      t.value.splice(u, 1);
    }, [$e.Hidden]() {
      t.value[u].state = "hidden";
    } }), !nt(t) && l.value && (e == null || e()));
  }
  function o(a) {
    let i = t.value.find(({ id: u }) => u === a);
    return i ? i.state !== "visible" && (i.state = "visible") : t.value.push({ id: a, state: "visible" }), () => n(a, $e.Unmount);
  }
  return { children: t, register: o, unregister: n };
}
let Do = ce.RenderStrategy, _e = U({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: l, slots: n, expose: o }) {
  let a = $(0);
  function i() {
    a.value |= Y.Opening, t("beforeEnter");
  }
  function u() {
    a.value &= ~Y.Opening, t("afterEnter");
  }
  function d() {
    a.value |= Y.Closing, t("beforeLeave");
  }
  function f() {
    a.value &= ~Y.Closing, t("afterLeave");
  }
  if (!Jn() && Ql())
    return () => J(He, { ...e, onBeforeEnter: i, onAfterEnter: u, onBeforeLeave: d, onAfterLeave: f }, n);
  let v = $(null), c = $("visible"), w = S(() => e.unmount ? $e.Unmount : $e.Hidden);
  o({ el: v, $el: v });
  let { show: x, appear: V } = Xn(), { register: g, unregister: y } = ea(), k = { value: !0 }, _ = te(), P = { value: !1 }, D = To(() => {
    !P.value && c.value !== "hidden" && (c.value = "hidden", y(_), f());
  });
  H(() => {
    let fe = g(_);
    se(fe);
  }), le(() => {
    if (w.value === $e.Hidden && _) {
      if (x && c.value !== "visible") {
        c.value = "visible";
        return;
      }
      Q(c.value, { hidden: () => y(_), visible: () => g(_) });
    }
  });
  let R = Se(e.enter), L = Se(e.enterFrom), M = Se(e.enterTo), A = Se(e.entered), T = Se(e.leave), F = Se(e.leaveFrom), X = Se(e.leaveTo);
  H(() => {
    le(() => {
      if (c.value === "visible") {
        let fe = O(v);
        if (fe instanceof Comment && fe.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function ge(fe) {
    let q = k.value && !V.value, W = O(v);
    !W || !(W instanceof HTMLElement) || q || (P.value = !0, x.value && i(), x.value || d(), fe(x.value ? Zt(W, R, L, M, A, (oe) => {
      P.value = !1, oe === mt.Finished && u();
    }) : Zt(W, T, F, X, A, (oe) => {
      P.value = !1, oe === mt.Finished && (nt(D) || (c.value = "hidden", y(_), f()));
    })));
  }
  return H(() => {
    Z([x], (fe, q, W) => {
      ge(W), k.value = !1;
    }, { immediate: !0 });
  }), ie(Tt, D), Ze(S(() => Q(c.value, { visible: Y.Open, hidden: Y.Closed }) | a.value)), () => {
    let { appear: fe, show: q, enter: W, enterFrom: oe, enterTo: pe, entered: qe, leave: Ce, leaveFrom: E1, leaveTo: L1, ...It } = e, Go = { ref: v }, Wo = { ...It, ...V && x && Fe.isServer ? { class: E([l.class, It.class, ...R, ...L]) } : {} };
    return G({ theirProps: Wo, ourProps: Go, slot: {}, slots: n, attrs: l, features: Do, visible: c.value === "visible", name: "TransitionChild" });
  };
} }), ta = _e, He = U({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: l, slots: n }) {
  let o = je(), a = S(() => e.show === null && o !== null ? (o.value & Y.Open) === Y.Open : e.show);
  le(() => {
    if (![!0, !1].includes(a.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let i = $(a.value ? "visible" : "hidden"), u = To(() => {
    i.value = "hidden";
  }), d = $(!0), f = { show: a, appear: S(() => e.appear || !d.value) };
  return H(() => {
    le(() => {
      d.value = !1, a.value ? i.value = "visible" : nt(u) || (i.value = "hidden");
    });
  }), ie(Tt, u), ie(jt, f), () => {
    let v = Te(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), c = { unmount: e.unmount };
    return G({ ourProps: { ...c, as: "template" }, theirProps: {}, slot: {}, slots: { ...n, default: () => [J(ta, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...l, ...c, ...v }, n.default)] }, attrs: {}, features: Do, visible: i.value === "visible", name: "Transition" });
  };
} });
const oa = {
  key: 0,
  class: "po-text-sm po-font-normal po-text-slate-400 po-select-none po-block po-text-left po-pt-5"
}, la = { class: "po-grid po-grid-cols-3" }, na = { class: "po-bg-white hover:po-bg-slate-200 po-rounded-xl po-p-2 po-transition-colors po-duration-150 po-ease-in" }, aa = ["href", "target"], sa = { class: "po-flex po-w-14 po-h-14 po-items-center po-justify-center po-duration-100 po-ease-in-out po-overflow-hidden" }, ra = ["innerHTML"], ia = { class: "po-text-slate-500 po-font-normal po-text-sm po-text-center" }, Qt = {
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
    return (t, l) => (r(!0), p(j, null, I(e.list, (n) => (r(), p("div", null, [
      n.groupName.length > 0 ? (r(), p("span", oa, b(n.groupName), 1)) : h("", !0),
      s("ul", la, [
        (r(!0), p(j, null, I(n.apps, (o) => (r(), p("li", na, [
          s("a", {
            href: o.url,
            target: e.openInNewTab ? "_blank" : "_self",
            class: "po-flex po-flex-col po-group po-justify-center po-items-center"
          }, [
            s("span", sa, [
              s("span", {
                class: "po-w-9",
                innerHTML: o.icon
              }, null, 8, ra)
            ]),
            s("span", ia, b(o.name), 1)
          ], 8, aa)
        ]))), 256))
      ])
    ]))), 256));
  }
}, pa = {
  name: "PoAppTray"
}, ua = /* @__PURE__ */ Object.assign(pa, {
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
      return l.forEach((a) => {
        let i = t.appList.filter((u) => u.group == a);
        i.length > 0 && o.push({
          groupName: a,
          apps: i
        });
      }), o;
    });
    return (o, a) => e.justApps ? (r(), N(Qt, {
      key: 1,
      list: m(n),
      "open-in-new-tab": e.openInNewTab
    }, null, 8, ["list", "open-in-new-tab"])) : (r(), N(m(lt), { key: 0 }, {
      default: B(({ open: i }) => [
        C(m(Et), {
          class: E([i ? "" : "po-text-opacity-90", "po-block po-w-6 po-text-slate-100 genie-effect po-z-50 po-outline-none"])
        }, {
          default: B(() => [
            C(m(Vl))
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
          default: B(() => [
            C(m(Lt), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
              default: B(() => [
                C(Qt, {
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
}), da = {
  key: 0,
  class: "po-absolute po-right-0 po-w-3 po-h-3 po-bg-mpao-orange po-rounded-full po-border-2 po-border-mpao-blue"
}, ca = {
  key: 0,
  class: "po-space-y-2"
}, fa = ["onClick"], va = { class: "po-flex po-items-center po-justify-between" }, ma = { class: "po-text-sm po-font-semibold po-text-slate-700 po-grow po-flex po-space-x-2 po-items-center" }, ha = {
  key: 0,
  class: "po-w-2 po-h-2 po-rounded-full po-shrink-0 po-bg-mpao-orange"
}, ba = { class: "po-grow" }, ga = { class: "po-text-xs po-font-normal po-text-slate-400 po-shrink-0" }, ya = { class: "po-block po-text-sm po-text-slate-500 po-pb-3" }, xa = {
  key: 1,
  class: "po-text-sm po-text-slate-500 po-py-10 po-text-center po-block"
}, wa = {
  name: "PoNotificationHub"
}, Va = /* @__PURE__ */ Object.assign(wa, {
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
    return (l, n) => (r(), N(m(lt), null, {
      default: B(({ open: o }) => [
        C(m(Et), {
          class: E([o ? "" : "text-opacity-90", "po-block po-w-6 po-text-slate-100 genie-effect po-relative po-z-50 po-outline-none"])
        }, {
          default: B(() => [
            e.hasNewNotifications ? (r(), p("span", da)) : h("", !0),
            C(m(rl), { class: "po-stroke-current" })
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
          default: B(() => [
            C(m(Lt), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
              default: B(() => [
                e.notifications !== null && e.notifications.length > 0 ? (r(), p("ul", ca, [
                  (r(!0), p(j, null, I(e.notifications, (a) => (r(), p("li", {
                    role: "button",
                    class: "po-space-y-2 po-p-2 po-rounded-lg po-bg-white hover:po-bg-slate-100 po-border po-border-slate-100",
                    onClick: de((i) => l.$emit("button-click", a.name), ["prevent"])
                  }, [
                    s("span", va, [
                      s("p", ma, [
                        a.seen ? h("", !0) : (r(), p("span", ha)),
                        s("span", ba, b(a.name), 1)
                      ]),
                      s("span", ga, b(a.time), 1)
                    ]),
                    s("span", ya, b(a.text), 1)
                  ], 8, fa))), 256))
                ])) : (r(), p("span", xa, " No notifications to show at the moment. We'll keep you informed."))
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
}), ka = {
  key: 0,
  class: "po-hidden lg:po-block po-text-sky-50 po-text-sm po-shrink-0 po-pr-3 po-truncate po-max-w-[140px] po-overflow-hidden"
}, $a = {
  key: 1,
  class: "po-px-3 po-bg-gradient-to-br po-from-slate-50 po-to-blue-100 po-py-1 po-rounded-l-md po-w-[100px] po-flex po-items-center po-justify-center po-text-center"
}, _a = ["src"], Ca = ["src", "alt"], Sa = {
  key: 1,
  class: "po-text-xs po-text-white po-font-semibold"
}, Oa = { class: "po-pb-5" }, Pa = ["src"], Ea = {
  key: 2,
  class: "po-block po-text-sm po-text-slate-400 po-italic"
}, La = { key: 0 }, Ba = { key: 1 }, ja = /* @__PURE__ */ s("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), Ta = { class: "po-space-y-2 po-py-2 -po-mx-5 po-px-5 po-max-h-[250px] po-overflow-y-auto" }, Da = ["onClick"], Na = { class: "po-w-5" }, Aa = { class: "" }, Ma = { class: "po-block po-text-sm po-font-normal" }, Ia = {
  key: 0,
  class: "po-text-left po-block po-text-xs po-text-slate-400"
}, Ra = /* @__PURE__ */ s("div", { class: "po-h-[2px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), Fa = { class: "md:po-grid po-grid-cols-2 po-space-x-1 po-pt-2" }, za = { class: "po-w-5" }, Ha = /* @__PURE__ */ s("span", { class: "po-text-sm po-font-normal" }, "Profile", -1), qa = { class: "po-w-5" }, Ua = /* @__PURE__ */ s("span", { class: "po-text-sm po-font-normal" }, "Logout", -1), Ga = /* @__PURE__ */ s("div", { class: "po-text-xs po-space-x-3 po-text-center po-pt-3" }, [
  /* @__PURE__ */ s("a", {
    href: "",
    class: "po-text-slate-500 hover:po-text-mpao-lightblue"
  }, "Privacy Policy"),
  /* @__PURE__ */ s("a", {
    href: "",
    class: "po-text-slate-500 hover:po-text-mpao-lightblue"
  }, "Terms of Service")
], -1), Wa = {
  name: "PoProfileSwitcher"
}, Ka = /* @__PURE__ */ Object.assign(Wa, {
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
    function n(c) {
      t("button-click", c);
    }
    const o = $({
      name: "",
      initials: "",
      image: ""
    });
    function a(c) {
      return c ? c.match(/\b[A-Z]/g).join("").substr(0, 2) : "";
    }
    const i = S(() => {
      var g, y, k, _, P, D, R, L, M, A, T, F, X;
      let c = [], w = (g = l.userObject) != null && g.transacting_as_organisation && Object.keys((y = l.userObject) == null ? void 0 : y.transacting_as_organisation).length > 0 ? (k = l.userObject) == null ? void 0 : k.transacting_as_organisation : null, x = w ? w.name : (_ = l.userObject) == null ? void 0 : _.name, V = w ? w.logo ? w.logo : (P = l.userObject) == null ? void 0 : P.avatar : "";
      return o.value = {
        name: x,
        initials: a(x),
        image: V
      }, c = [], c.push({
        id: (D = l.userObject) == null ? void 0 : D.id,
        entity_id: (R = l.userObject) == null ? void 0 : R.entity_id,
        name: (L = l.userObject) == null ? void 0 : L.name,
        identifier: null,
        organisation_uuid: null
      }), ((A = (M = l.userObject) == null ? void 0 : M.organisations) == null ? void 0 : A.length) > 0 && ((F = (T = l.userObject) == null ? void 0 : T.organisations) == null || F.forEach((ge) => c.push(ge))), c.forEach((ge) => {
        var fe, q, W, oe;
        ge.current = ((fe = l.userObject) == null ? void 0 : fe.transacting_as_organisation) && Object.keys((q = l.userObject) == null ? void 0 : q.transacting_as_organisation).length > 0 && ge.entity_id === ((oe = (W = l.userObject) == null ? void 0 : W.transacting_as_organisation) == null ? void 0 : oe.entity_id);
      }), ((X = l.userObject) == null ? void 0 : X.transacting_as_organisation) === null && (c[0].current = !0), c;
    }), u = $(null), d = $(null), { avatar: f, logo: v } = be(l);
    return Z(f, () => {
      u.value = f.value;
    }), Z(v, () => {
      d.value = v.value;
    }), Yo(() => {
      i.value;
    }), H(() => {
      i.value;
    }), Jo(() => {
      i.value;
    }), bt(() => {
      i.value;
    }), (c, w) => (r(), N(m(lt), { key: m(i) }, {
      default: B(({ open: x }) => [
        s("div", null, [
          C(m(Et), { class: "po-flex po-items-center po-outline-none" }, {
            default: B(() => [
              d.value ? h("", !0) : (r(), p("span", ka, b(o.value.name), 1)),
              d.value ? (r(), p("span", $a, [
                s("img", {
                  class: "po-h-8",
                  src: d.value,
                  alt: ""
                }, null, 8, _a)
              ])) : h("", !0),
              s("div", {
                class: E([
                  {
                    "po-bg-gradient-to-br po-from-slate-50 po-to-blue-100 po-p-1 po-rounded-r-md": d.value
                  }
                ])
              }, [
                s("div", {
                  class: E([[
                    { "text-opacity-90": x },
                    {
                      "po-w-10 po-h-10": !d.value
                    },
                    { "po-w-8 po-h-8": d.value }
                  ], "po-shrink-0 po-select-none po-rounded-full po-bg-[#2e5266] po-flex po-items-center po-justify-center genie-effect po-z-50"])
                }, [
                  u.value ? (r(), p("img", {
                    key: 0,
                    class: "po-rounded-full po-border po-border-white",
                    src: u.value,
                    alt: o.value.name
                  }, null, 8, Ca)) : (r(), p("span", Sa, b(o.value.initials), 1))
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
            default: B(() => [
              C(m(Lt), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
                default: B(() => {
                  var V, g, y, k;
                  return [
                    s("div", Oa, [
                      u.value ? (r(), p("img", {
                        key: 0,
                        class: "po-w-20 po-h-20 po-mx-auto po-rounded-full po-overflow-hidden",
                        src: u.value,
                        alt: ""
                      }, null, 8, Pa)) : h("", !0),
                      (V = e.userObject) != null && V.name ? (r(), p("span", {
                        key: 1,
                        class: E(["po-text-base po-text-slate-600 po-font-medium po-block", [{ "po-mt-4": u.value }]])
                      }, b((g = e.userObject) == null ? void 0 : g.name), 3)) : h("", !0),
                      (y = e.userObject) != null && y.name ? (r(), p("span", Ea, [
                        o.value.name === ((k = e.userObject) == null ? void 0 : k.name) ? (r(), p("span", La, "Self")) : (r(), p("span", Ba, "User at " + b(o.value.name), 1))
                      ])) : h("", !0)
                    ]),
                    ja,
                    s("div", Ta, [
                      (r(!0), p(j, null, I(m(i), (_, P) => (r(), p("a", {
                        href: "#",
                        onClick: de((D) => n(_), ["prevent"]),
                        class: E(["po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-shadow-sm po-transition-all po-duration-150 po-ease-out hover:po-bg-blue-50", [
                          {
                            " po-bg-white": !_.current
                          },
                          {
                            " po-bg-blue-50 po-shadow-sm": _.current
                          }
                        ]]),
                        role: "button",
                        key: P
                      }, [
                        s("span", Na, [
                          _.isPersonal ? (r(), N(m(Rt), {
                            key: 0,
                            class: E([
                              "po-stroke-current",
                              { "po-stroke-mpao-lightblue": _.current }
                            ])
                          }, null, 8, ["class"])) : h("", !0),
                          _.isPersonal ? h("", !0) : (r(), N(m(pl), {
                            key: 1,
                            class: E([
                              "po-stroke-current",
                              { "po-stroke-mpao-lightblue": _.current }
                            ])
                          }, null, 8, ["class"]))
                        ]),
                        s("span", Aa, [
                          s("span", Ma, b(_.name), 1),
                          _.identifier ? (r(), p("span", Ia, b(_.identifier), 1)) : h("", !0)
                        ])
                      ], 10, Da))), 128))
                    ]),
                    Ra,
                    s("div", Fa, [
                      s("a", {
                        href: "#",
                        onClick: w[0] || (w[0] = de((_) => c.$emit("button-click", "current-profile"), ["prevent"])),
                        class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-slate-50 hover:po-bg-blue-50 po-transition-all po-duration-150 po-ease-out",
                        role: "button"
                      }, [
                        s("span", za, [
                          C(m(Rt), { class: "po-stroke-current" })
                        ]),
                        Ha
                      ]),
                      s("a", {
                        href: "#",
                        onClick: w[1] || (w[1] = de((_) => c.$emit("button-click", "logout"), ["prevent"])),
                        class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-slate-50 hover:po-bg-blue-50 po-transition-all po-duration-150 po-ease-out",
                        role: "button"
                      }, [
                        s("span", qa, [
                          C(m(nl), { class: "po-stroke-current" })
                        ]),
                        Ua
                      ])
                    ]),
                    Ga
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
}), Dt = {
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
      s("div", {
        class: E(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[8px]", e.dotColor])
      }, null, 2),
      s("div", {
        class: E(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[8px]", e.dotColor])
      }, null, 2),
      s("div", {
        class: E(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[17px]", e.dotColor])
      }, null, 2),
      s("div", {
        class: E(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[26px]", e.dotColor])
      }, null, 2)
    ], 2));
  }
}, Za = ["disabled", "aria-disabled"], Qa = ["value", "disabled", "aria-disabled"], Ya = {
  name: "PoButton"
}, Nt = /* @__PURE__ */ Object.assign(Ya, {
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
    return (i, u) => (r(), p(j, null, [
      e.isLoading ? (r(), p("span", {
        key: 0,
        class: E([[n, m(o)], "po-bg-slate-200 hover:po-bg-slate-200 focus:po-bg-slate-200"])
      }, [
        C(Dt, {
          "dot-color": "po-bg-slate-500",
          class: "po-relative -po-bottom-[0.2rem]"
        })
      ], 2)) : h("", !0),
      e.type == "button" && !e.isLoading ? (r(), p("button", Ee({
        key: 1,
        onClick: u[0] || (u[0] = de((d) => i.$emit("button-click", e.to), ["prevent"])),
        class: [n, m(o), m(a)],
        disabled: e.disabled,
        "aria-disabled": e.disabled
      }, i.$attrs), [
        ee(i.$slots, "label", {}, () => [
          ae(b(e.label), 1)
        ])
      ], 16, Za)) : h("", !0),
      e.type == "submit" && !e.isLoading ? (r(), p("input", Ee({
        key: 2,
        type: "submit",
        class: [n, m(o), m(a)],
        value: e.label,
        disabled: e.disabled,
        "aria-disabled": e.disabled
      }, i.$attrs), null, 16, Qa)) : h("", !0),
      e.type == "link" && !e.isLoading ? (r(), p("a", Ee({
        key: 3,
        href: "#",
        onClick: u[1] || (u[1] = de((d) => i.$emit("button-click", e.to), ["prevent"])),
        class: [n, m(o), m(a)]
      }, i.$attrs), [
        ee(i.$slots, "label", {}, () => [
          ae(b(e.label), 1)
        ])
      ], 16)) : h("", !0),
      e.type == "simple" && !e.isLoading ? (r(), p("a", {
        key: 4,
        href: "#",
        onClick: u[2] || (u[2] = de((d) => i.$emit("button-click", e.to), ["prevent"])),
        class: E(["po-text-sm po-transition-colors po-duration-100 po-ease-in-out po-inline-flex po-items-center po-space-x-1", [
          { "po-text-mpao-lightblue hover:po-text-mpao-blue": !e.overrideColors }
        ]])
      }, [
        ee(i.$slots, "label", {}, () => [
          ae(b(e.label), 1)
        ])
      ], 2)) : h("", !0)
    ], 64));
  }
}), Ja = /* @__PURE__ */ s("div", { class: "po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity" }, null, -1), Xa = { class: "po-fixed po-z-10 po-inset-0" }, es = { class: "po-flex po-justify-center po-items-start po-min-h-screen po-px-4 po-pt-10 po-pb-20 po-text-center sm:po-block po-max-h-screen po-overflow-y-hidden" }, ts = /* @__PURE__ */ s("span", {
  class: "po-hidden sm:po-inline-block sm:po-align-middle sm:po-h-screen",
  "aria-hidden": "true"
}, "​", -1), os = { class: "po-flex po-items-center po-bg-white po-rounded-t-xl po-p-5" }, ls = { class: "po-grow po-text-md po-font-bold po-text-slate-600" }, ns = { class: "po-shrink-0" }, as = /* @__PURE__ */ s("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), ss = { class: "po-p-5 po-max-h-[calc(100vh-230px)] po-overflow-y-auto po-min-h-[250px]" }, rs = {
  key: 0,
  class: "po-bg-slate-50 po-rounded-b-xl"
}, is = {
  name: "PoModal"
}, No = /* @__PURE__ */ Object.assign(is, {
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
    const l = e, { show: n } = be(l), o = $(!1);
    Z(n, () => {
      o.value = n.value;
    });
    function a() {
      o.value = !1, t("modal-closed", !0);
    }
    return (i, u) => (r(), p("div", null, [
      e.openBtnLabel.length > 0 ? (r(), N(m(Nt), {
        key: 0,
        label: e.openBtnLabel,
        onClick: u[0] || (u[0] = (d) => o.value = !0)
      }, null, 8, ["label"])) : h("", !0),
      (r(), N(We, { to: "body" }, [
        C(m(He), {
          as: "template",
          show: o.value
        }, {
          default: B(() => [
            C(m(et), {
              as: "div",
              class: "po-relative po-z-50",
              onClose: a
            }, {
              default: B(() => [
                C(m(_e), {
                  as: "template",
                  enter: "po-ease-out po-duration-300",
                  "enter-from": "po-opacity-0",
                  "enter-to": "po-opacity-100",
                  leave: "po-ease-in po-duration-200",
                  "leave-from": "po-opacity-100",
                  "leave-to": "po-opacity-0"
                }, {
                  default: B(() => [
                    Ja
                  ]),
                  _: 1
                }),
                s("div", Xa, [
                  s("div", es, [
                    ts,
                    C(m(_e), {
                      as: "template",
                      enter: "po-ease-out po-duration-300",
                      "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                      "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                      leave: "po-ease-in po-duration-200",
                      "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                      "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                    }, {
                      default: B(() => [
                        C(m(tt), {
                          class: E(["po-relative po-inline-block po-align-bottom po-bg-white po-rounded-xl po-text-left po-shadow-xl po-transform po-transition-all sm:po-align-top po-w-full", e.modalWidth])
                        }, {
                          default: B(() => [
                            s("div", os, [
                              s("h3", ls, b(e.modalTitle), 1),
                              s("div", ns, [
                                s("span", {
                                  role: "button",
                                  class: "po-block",
                                  onClick: a
                                }, [
                                  C(m(Ke), { class: "po-w-5 po-stroke-slate-500 hover:po-stroke-mpao-orange po-transition-colors po-duration-150 po-ease-in-out" })
                                ])
                              ])
                            ]),
                            as,
                            s("div", ss, [
                              ee(i.$slots, "content")
                            ]),
                            i.$slots.footer ? (r(), p("div", rs, [
                              ee(i.$slots, "footer")
                            ])) : h("", !0)
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
function Ao(e, t) {
  return r(), p("svg", {
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
function Mo(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", {
      "fill-rule": "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h4.59l-2.1 1.95a.75.75 0 001.02 1.1l3.5-3.25a.75.75 0 000-1.1l-3.5-3.25a.75.75 0 10-1.02 1.1l2.1 1.95H6.75z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Io(e, t) {
  return r(), p("svg", {
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
function Ro(e, t) {
  return r(), p("svg", {
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
function ps(e, t) {
  return r(), p("svg", {
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
function Fo(e, t) {
  return r(), p("svg", {
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
function us(e, t) {
  return r(), p("svg", {
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
function zo(e, t) {
  return r(), p("svg", {
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
function At(e, t) {
  return r(), p("svg", {
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
function ds(e, t) {
  return r(), p("svg", {
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
function cs(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", {
      "fill-rule": "evenodd",
      d: "M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Mt(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
  ]);
}
const fs = {
  key: 0,
  class: "po-text-lg po-text-red-400 po-font-semibold"
}, vs = {
  key: 0,
  class: "po-mt-1 po-flex -po-mb-3 po-flex-wrap"
}, ms = { class: "po-flex po-flex-1" }, hs = { class: "po-flex po-flex-col" }, bs = ["id"], gs = ["id"], ys = {
  name: "PoRadioInput"
}, xs = /* @__PURE__ */ Object.assign(ys, {
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
    const l = e, n = $();
    n.value = l.modelValue, bt(() => {
      n.value = l.modelValue;
    }), Z(n, () => {
      t("update:modelValue", n.value), t("selected", n.value);
    });
    const { errorMessage: o } = be(l), a = $();
    return Z(o, (i, u) => {
      a.value = o.value !== null && o.value !== "";
    }), (i, u) => (r(), N(m(zn), {
      modelValue: n.value,
      "onUpdate:modelValue": u[0] || (u[0] = (d) => n.value = d),
      class: E([{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }])
    }, {
      default: B(() => [
        C(m(Kt), { class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700" }, {
          default: B(() => [
            s("span", null, b(e.label), 1),
            e.required ? (r(), p("span", fs, "*")) : h("", !0)
          ]),
          _: 1
        }),
        e.options !== null ? (r(), p("div", vs, [
          (r(!0), p(j, null, I(e.options, (d) => (r(), N(m(qn), {
            as: "template",
            key: d.id,
            value: d.id
          }, {
            default: B(({ checked: f, active: v }) => [
              s("div", {
                class: E([
                  "po-transition-colors po-duration-100 po-ease-out po-mr-3",
                  "",
                  "",
                  "po-mb-3 po-pt-[0.13rem] po-relative po-flex po-cursor-pointer focus:po-outline-none"
                ])
              }, [
                s("span", {
                  class: E(["po-w-5 po-h-5 po-rounded-full po-border po-mr-2 po-flex po-items-center po-justify-center", [
                    "",
                    f ? "po-border-mpao-lightblue" : "po-border-slate-400"
                  ]])
                }, [
                  s("span", {
                    class: E(["po-w-3 po-h-3 po-rounded-full", [
                      "",
                      f ? "po-bg-mpao-lightblue" : "po-bg-transparent"
                    ]])
                  }, null, 2)
                ], 2),
                s("span", ms, [
                  s("span", hs, [
                    C(m(Kt), {
                      as: "span",
                      class: "po-block po-text-sm po-font-medium po-text-gray-900"
                    }, {
                      default: B(() => [
                        ae(b(d.title), 1)
                      ]),
                      _: 2
                    }, 1024),
                    d.description ? (r(), N(m(Un), {
                      key: 0,
                      as: "span",
                      class: "po-mt-1 po-flex po-items-center po-text-sm po-text-gray-500"
                    }, {
                      default: B(() => [
                        ae(b(d.description), 1)
                      ]),
                      _: 2
                    }, 1024)) : h("", !0)
                  ])
                ])
              ], 2)
            ]),
            _: 2
          }, 1032, ["value"]))), 128))
        ])) : h("", !0),
        s("div", null, [
          e.message !== null ? (r(), p("p", {
            key: 0,
            class: "po-mt-2 po-text-sm po-text-slate-500",
            id: `${i.id}-description`
          }, b(e.message), 9, bs)) : h("", !0),
          a.value && m(o) !== null ? (r(), p("p", {
            key: 1,
            class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
            id: `${i.id}-error`
          }, [
            C(m(zo), { class: "po-fill-current po-w-4 po-mt-[0.2rem] po-shrink-0" }),
            s("span", null, b(m(o)), 1)
          ], 8, gs)) : h("", !0)
        ])
      ]),
      _: 1
    }, 8, ["modelValue", "class"]));
  }
});
function ws(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", { d: "M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" }),
    s("path", { d: "M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" })
  ]);
}
function Vs(e, t) {
  return r(), p("svg", {
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
function ks(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", { d: "M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" })
  ]);
}
function Ho(e, t) {
  return r(), p("svg", {
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
function $s(e, t) {
  return r(), p("svg", {
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
const _s = ["for"], Cs = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Ss = ["title"], Os = ["name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], Ps = ["id"], Es = ["id"], Ls = {
  name: "PoTextarea"
}, Bs = /* @__PURE__ */ Object.assign(Ls, {
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
      s("label", {
        for: e.id,
        class: "po-text-sm po-font-medium po-text-slate-700 po-flex po-items-center po-space-x-1"
      }, [
        s("span", null, b(e.label), 1),
        e.required ? (r(), p("span", Cs, "*")) : h("", !0),
        e.info !== null ? (r(), p("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          C(m(Ho))
        ], 8, Ss)) : h("", !0)
      ], 8, _s),
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
        onInput: l[0] || (l[0] = (n) => t.$emit("update:modelValue", n.target.value)),
        class: "po-mt-1 po-peer po-px-3 po-py-2 po-block po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-border-slate-300 po-bg-white focus:po-border-mpao-lightblue focus:po-ring-0 invalid:po-border-red-400 invalid:po-focus:border-red-600 invalid:focus:po-ring-red-600 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default"
      }), null, 16, Os),
      e.message !== null ? (r(), p("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, b(e.message), 9, Ps)) : h("", !0),
      e.errorMessage !== null ? (r(), p("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, b(e.errorMessage), 9, Es)) : h("", !0)
    ], 2));
  }
}), js = { class: "shell-sidebar" }, Ts = { class: "po-grow" }, Ds = { class: "shell-sidebar--menu" }, Ns = ["onClick", "title"], As = { class: "shell-sidebar--icon" }, Ms = { class: "shell-sidebar--label po-font-medium po-text-left" }, Is = { key: 0 }, Rs = { class: "shell-sidebar--menu sidebar-apps po-shrink-0 po-mb-0" }, Fs = ["onClick"], zs = { class: "shell-sidebar--icon" }, Hs = ["innerHTML"], qs = { class: "shell-sidebar--label po-font-medium po-text-left" }, Us = {
  key: 0,
  class: "shell-sidebar--menu po-shrink-0 po-mb-0 po-border-t po-border-slate-200 po-pt-3"
}, Gs = { class: "shell-sidebar--icon" }, Ws = /* @__PURE__ */ s("span", { class: "shell-sidebar--label po-font-medium" }, "Feedback", -1), Ks = { action: "" }, Zs = /* @__PURE__ */ s("br", null, null, -1), Qs = { class: "po-p-5" }, Ys = {
  name: "PoSidebarDrawer"
}, N1 = /* @__PURE__ */ Object.assign(Ys, {
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
    const l = e, n = $(!1), o = [
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
    ], a = $(o[0]), i = S(() => {
      let v = [];
      const c = l.apps.filter((w) => w.code == l.appCode)[0];
      return c && l.apps.filter(
        (x) => c.related.includes(x.code)
      ).forEach((x) => {
        v.push(x);
      }), v;
    }), u = $(null);
    function d() {
      window.innerWidth <= 1024 && (u.value.checked = !u.value.checked);
    }
    function f(v, c) {
      t(v, c), d();
    }
    return (v, c) => (r(), p(j, null, [
      s("input", {
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
      s("aside", js, [
        s("div", Ts, [
          (r(!0), p(j, null, I(e.content, (w) => (r(), p("div", null, [
            C(m(Ut), { defaultOpen: !0 }, {
              default: B(({ open: x }) => [
                w.groupName ? (r(), N(m(Gt), {
                  key: 0,
                  class: E([x ? "" : "po-mb-3", "shell-sidebar--section po-w-full po-text-left"])
                }, {
                  default: B(() => [
                    ae(b(w.groupName), 1)
                  ]),
                  _: 2
                }, 1032, ["class"])) : h("", !0),
                C(we, {
                  "enter-active-class": "po-transition po-duration-100 po-ease-out",
                  "enter-from-class": "po-transform po-scale-95 po-opacity-0",
                  "enter-to-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-active-class": "po-transition po-duration-75 po-ease-out",
                  "leave-from-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-to-class": "po-transform po-scale-95 po-opacity-0"
                }, {
                  default: B(() => [
                    C(m(Wt), null, {
                      default: B(() => [
                        s("ul", Ds, [
                          (r(!0), p(j, null, I(w.items, (V) => (r(), p("li", null, [
                            V.disabled ? h("", !0) : (r(), p("button", {
                              key: 0,
                              onClick: (g) => f("button-click", V.url),
                              class: E([
                                "shell-sidebar--item",
                                { active: V.url == e.currRoute }
                              ]),
                              title: `Go to ${V.label}`
                            }, [
                              s("span", As, [
                                (r(), N(ye(V.icon), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" }))
                              ]),
                              s("span", Ms, b(V.label), 1)
                            ], 10, Ns))
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
          e.apps !== null ? (r(), p("div", Is, [
            C(m(Ut), { defaultOpen: !0 }, {
              default: B(({ open: w }) => [
                e.appsLabel ? (r(), N(m(Gt), {
                  key: 0,
                  class: E([w ? "" : "po-mb-3", "shell-sidebar--section po-w-full po-text-left"])
                }, {
                  default: B(() => [
                    ae(b(e.appsLabel), 1)
                  ]),
                  _: 2
                }, 1032, ["class"])) : h("", !0),
                C(we, {
                  "enter-active-class": "po-transition po-duration-100 po-ease-out",
                  "enter-from-class": "po-transform po-scale-95 po-opacity-0",
                  "enter-to-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-active-class": "po-transition po-duration-75 po-ease-out",
                  "leave-from-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-to-class": "po-transform po-scale-95 po-opacity-0"
                }, {
                  default: B(() => [
                    C(m(Wt), null, {
                      default: B(() => [
                        s("ul", Rs, [
                          (r(!0), p(j, null, I(m(i), (x, V) => (r(), p("li", null, [
                            s("button", {
                              onClick: (g) => f("app-click", x.name),
                              class: E(["shell-sidebar--item", [{ active: x.current }]]),
                              title: "Go to feedback"
                            }, [
                              s("span", zs, [
                                s("span", {
                                  innerHTML: x.icon,
                                  class: "po-text-slate-600 po-w-5"
                                }, null, 8, Hs)
                              ]),
                              s("span", qs, b(x.name), 1)
                            ], 10, Fs)
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
          ])) : h("", !0)
        ]),
        e.hasFeedback ? (r(), p("ul", Us, [
          s("li", null, [
            s("button", {
              onClick: c[0] || (c[0] = de(() => n.value = !0, ["prevent"])),
              class: "shell-sidebar--item",
              title: "Go to feedback"
            }, [
              s("span", Gs, [
                C(m(ul), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" })
              ]),
              Ws
            ])
          ])
        ])) : h("", !0),
        C(No, {
          show: n.value,
          onModalClosed: c[2] || (c[2] = () => n.value = !1),
          "modal-title": "Feedback"
        }, {
          content: B(() => [
            s("form", Ks, [
              C(xs, {
                label: "Type",
                options: o,
                "pre-selected": a.value,
                modelValue: a.value,
                "onUpdate:modelValue": c[1] || (c[1] = (w) => a.value = w)
              }, null, 8, ["pre-selected", "modelValue"]),
              Zs,
              C(Bs, {
                cols: "6",
                rows: "6",
                label: "Description",
                message: ""
              })
            ])
          ]),
          footer: B(() => [
            s("div", Qs, [
              C(Nt, {
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
}), Js = {
  key: 0,
  class: "shell-content--action-bar"
}, Xs = { class: "action-bar__nav" }, er = ["onClick"], tr = { class: "action-bar__nav_label po-font-medium" }, or = {
  key: 0,
  class: "po-shrink-0 po-flex po-space-x-1"
}, lr = /* @__PURE__ */ s("span", { class: "action-bar__nav_label po-font-medium" }, "Go Back", -1), nr = {
  name: "PoActionBar"
}, A1 = /* @__PURE__ */ Object.assign(nr, {
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
    return (t, l) => e.items !== null && e.items.length > 0 || e.showBackButton ? (r(), p("section", Js, [
      s("nav", Xs, [
        (r(!0), p(j, null, I(e.items, (n) => (r(), p("span", {
          onClick: (o) => t.$emit("button-click", n.label),
          class: E([[
            { "action-bar__nav_highlighted": n.highlighted },
            { "action-bar__nav_danger": n.danger }
          ], "action-bar__nav_link"])
        }, [
          (r(), N(ye(n.icon), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" })),
          s("span", tr, b(n.label), 1)
        ], 10, er))), 256))
      ]),
      e.showBackButton ? (r(), p("nav", or, [
        s("span", {
          onClick: l[0] || (l[0] = (n) => t.$emit("button-click", "back")),
          class: "action-bar__nav_link"
        }, [
          lr,
          (r(), N(ye(m(al)), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" }))
        ])
      ])) : h("", !0)
    ])) : h("", !0);
  }
}), ar = { class: "po-shadow-sm po-rounded-xl po-bg-white po-relative" }, sr = {
  key: 0,
  class: "po-absolute po-right-2 po-top-2 po-p-2 po-rounded-lg"
}, rr = {
  key: 0,
  class: "po-text-base po-font-medium po-text-slate-600"
}, ir = {
  key: 1,
  class: "lg:po-col-span-2 lg:po-flex lg:po-justify-end po-space-x-2"
}, pr = {
  name: "PoCard"
}, M1 = /* @__PURE__ */ Object.assign(pr, {
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
    return (t, l) => (r(), p("div", ar, [
      e.isLoading ? (r(), p("div", sr, [
        C(Dt)
      ])) : h("", !0),
      s("div", {
        class: E([
          { "po-grid po-grid-cols-1 lg:po-grid-cols-3 po-gap-3": t.$slots.action }
        ])
      }, [
        e.title.length > 0 ? (r(), p("h3", rr, b(e.title), 1)) : h("", !0),
        t.$slots.action ? (r(), p("div", ir, [
          ee(t.$slots, "action")
        ])) : h("", !0)
      ], 2),
      ee(t.$slots, "content")
    ]));
  }
}), ur = { class: "po-py-3 po-px-5 po-border-b po-border-slate-200" }, dr = {
  class: "po-flex po-w-full md:po-ml-0",
  action: "#",
  method: "GET"
}, cr = {
  for: "search-field",
  class: "po-sr-only"
}, fr = { class: "po-relative po-w-full po-text-slate-400 focus-within:po-text-mpao-lightblue po-transition-colors po-duration-100 po-ease-in-out" }, vr = { class: "po-pointer-events-none po-absolute po-inset-y-0 po-left-0 po-flex po-items-center" }, mr = ["placeholder", "value"], hr = {
  name: "PoCardSearch"
}, I1 = /* @__PURE__ */ Object.assign(hr, {
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
    return (l, n) => (r(), p("div", ur, [
      s("form", dr, [
        s("label", cr, b(e.placeholder), 1),
        s("div", fr, [
          s("div", vr, [
            C(m(xt), { class: "po-h-5 po-w-5 po-flex-shrink-0" })
          ]),
          s("input", {
            name: "search-field",
            id: "desktop-search-field",
            placeholder: e.placeholder,
            value: e.modelValue,
            onInput: n[0] || (n[0] = (o) => l.$emit("update:modelValue", o.target.value)),
            class: "po-h-full po-w-full po-border-transparent po-py-2 po-pl-8 po-pr-3 po-text-sm po-text-slate-700 po-placeholder-slate-500 focus:po-border-transparent focus:po-placeholder-slate-400 focus:po-outline-none focus:po-ring-0",
            type: "search"
          }, null, 40, mr)
        ])
      ])
    ]));
  }
}), br = { class: "po-flex po-items-center" }, gr = { class: "po-text-sm po-font-medium po-text-slate-500 po-pr-2" }, yr = {
  name: "PoPagination"
}, xr = /* @__PURE__ */ Object.assign(yr, {
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
    const a = S(() => l.totalPages ? `Page ${l.currentPage} of ${l.totalPages}` : l.pagination ? l.pagination.label : "");
    return (i, u) => (r(), p("div", br, [
      s("span", gr, b(m(a)), 1),
      s("button", {
        title: "Previous",
        onClick: n,
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        C(m(vl), { class: "po-w-4 po-stroke-current po-stroke-2" })
      ]),
      s("button", {
        title: "Next",
        onClick: o,
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        C(m(ml), { class: "po-w-4 po-stroke-current po-stroke-2" })
      ])
    ]));
  }
}), wr = { key: 0 }, Vr = {
  class: "po-text-xl md:po-text-2xl po-font-semibold po-text-slate-800",
  id: "po-page-title"
}, kr = {
  key: 0,
  class: "po-text-base po-mt-2 po-max-w-md po-block po-text-slate-500"
}, $r = { key: 1 }, _r = { class: "po-grid po-grid-cols-1 lg:po-grid-cols-2 po-gap-5" }, Cr = {
  class: "po-text-xl md:po-text-2xl po-font-semibold po-text-slate-800",
  id: "po-page-title"
}, Sr = {
  key: 0,
  class: "po-text-base po-mt-4 po-max-w-md po-pb-5 po-block po-text-slate-500"
}, Or = { class: "po-flex po-items-end po-justify-end po-flex-col" }, Pr = {
  key: 0,
  class: "po-flex md:po-justify-end po-mb-5"
}, Er = { class: "po-bg-slate-50 po-shadow-sm po-rounded-xl po-py-5 po-px-2 po-divide-x po-divide-slate-200 po-flex" }, Lr = ["onClick"], Br = { class: "po-text-xl po-font-medium po-text-slate-600 po-flex po-items-center po-space-x-1" }, jr = { class: "po-text-xl po-font-medium po-text-slate-600 group-hover:po-text-mpao-lightblue" }, Tr = { class: "po-text-sm po-text-slate-500 po-block group-hover:po-text-mpao-lightblue" }, Dr = { class: "po-flex po-items-center po-space-x-1 md:po-justify-end" }, Nr = {
  key: 2,
  class: "po-border-l po-border-slate-400 po-h-3 po-w-3 po-ml-1"
}, Ar = {
  key: 0,
  class: "po-bg-slate-50 po-p-5 po-mt-5 po-rounded-md po-grid po-grid-cols-1 md:po-grid-cols-3 po-gap-5"
}, Mr = /* @__PURE__ */ s("span", { class: "po-text-xs po-text-slate-500 po-py-5" }, "No filters available at the moment.", -1), Ir = {
  name: "PoPageTitle"
}, R1 = /* @__PURE__ */ Object.assign(Ir, {
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
    const n = e.filterOn ? $(!0) : $(!1);
    function o(i) {
      t("pagination-click", i);
    }
    function a(i) {
      return i.iconColor ? i.iconColor : "po-slate-600";
    }
    return (i, u) => e.standAlone ? (r(), p("div", wr, [
      s("h1", Vr, b(e.label), 1),
      e.description !== "" ? (r(), p("span", kr, b(e.description), 1)) : h("", !0)
    ])) : (r(), p("div", $r, [
      s("div", _r, [
        s("div", null, [
          s("h1", Cr, b(e.label), 1),
          e.description !== "" ? (r(), p("span", Sr, b(e.description), 1)) : h("", !0)
        ]),
        s("div", Or, [
          e.stats !== null ? (r(), p("div", Pr, [
            s("div", Er, [
              (r(!0), p(j, null, I(e.stats, (d) => (r(), p("div", {
                class: "po-px-5 po-cursor-pointer po-group genie-effect",
                onClick: (f) => i.$emit("stat-click", d)
              }, [
                s("span", Br, [
                  s("span", jr, b(d.value), 1),
                  d.icon ? (r(), p("span", {
                    key: 0,
                    class: E(["po-w-5 po-h-5", a(d)])
                  }, [
                    (r(), N(ye(d.icon)))
                  ], 2)) : h("", !0)
                ]),
                s("span", Tr, b(d.label), 1)
              ], 8, Lr))), 256))
            ])
          ])) : h("", !0),
          s("div", Dr, [
            e.showFilter ? (r(), p("button", {
              key: 0,
              title: "Filter",
              onClick: u[0] || (u[0] = (d) => {
                i.$emit("button-click", "filter"), n.value = !m(n);
              }),
              class: E([
                "po-p-2 po-rounded-md hover:po-bg-slate-200 po-transition-colors po-duration-75 po-ease-in-out",
                { "po-text-mpao-orange hover:po-text-mpao-orange": m(n) },
                { "tpo-ext-slate-600 hover:po-text-mpao-blue": !m(n) }
              ])
            }, [
              C(m(gl), { class: "po-w-4 po-stroke-current po-stroke-2" })
            ], 2)) : h("", !0),
            e.showDownload ? (r(), p("button", {
              key: 1,
              title: "Download",
              onClick: u[1] || (u[1] = (d) => i.$emit("button-click", "download")),
              class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
            }, [
              C(m(ll), { class: "po-w-4 po-stroke-current po-stroke-2" })
            ])) : h("", !0),
            e.showFilter && e.showPagination || e.showDownload && e.showPagination ? (r(), p("span", Nr, " ")) : h("", !0),
            e.showPagination ? (r(), N(xr, {
              key: 3,
              pagination: e.pagination,
              onButtonClick: o
            }, null, 8, ["pagination"])) : h("", !0)
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
        default: B(() => [
          m(n) ? (r(), p("div", Ar, [
            ee(i.$slots, "filters", {}, () => [
              Mr
            ])
          ])) : h("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), Rr = {
  key: 0,
  class: "po-w-12"
}, Fr = {
  key: 0,
  class: "po-w-12"
}, zr = ["onClick"], Hr = ["colspan"], qr = { key: 1 }, Ur = ["colspan"], Gr = { class: "po-py-10 po-block po-normal-case" }, Wr = { class: "po-pr-5" }, Kr = { class: "po-py-1" }, Zr = { key: 0 }, Qr = {
  name: "PoTable",
  components: { ArrowRightCircleIcon: Mo }
}, F1 = /* @__PURE__ */ Object.assign(Qr, {
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
    const t = e, { isLoading: l, tbody: n } = be(t), o = $(!1), a = $(null);
    Z(l, () => {
      i();
    }), Z(n, () => {
      i(), u();
    }), H(() => {
      i(), u();
    });
    function i() {
      o.value = l.value, a.value = n.value, l.value && (a.value = [{}, {}, {}, {}, {}]);
    }
    function u() {
      if (t.hasDetailsRow)
        for (let f = 0; f < t.tbody.length; f++)
          t.tbody[f].showDetails = !1;
    }
    function d() {
      return Math.floor(Math.random() * 41) + 40;
    }
    return (f, v) => (r(), p("table", {
      class: E(["table-responsive po-w-full", [{ lg: e.breakAtLg }]])
    }, [
      s("thead", null, [
        s("tr", null, [
          e.hasDetailsRow ? (r(), p("th", Rr)) : h("", !0),
          (r(!0), p(j, null, I(e.thead, (c) => (r(), p("th", null, [
            ee(f.$slots, "th", Me(Ie(c)))
          ]))), 256))
        ])
      ]),
      s("tbody", null, [
        a.value !== null && !o.value || a.value !== null && a.value.length !== 0 && !o.value ? (r(!0), p(j, { key: 0 }, I(a.value, (c, w) => (r(), p(j, null, [
          s("tr", null, [
            e.hasDetailsRow ? (r(), p("td", Fr, [
              s("span", {
                onClick: (x) => c.showDetails = !c.showDetails
              }, [
                C(m(Mo), {
                  class: E(["po-w-5 po-fill-mpao-lightblue po-origin-center po-transition-transform po-duration-100 po-ease-out po-cursor-pointer", [{ "po-rotate-90": c.showDetails }]])
                }, null, 8, ["class"])
              ], 8, zr)
            ])) : h("", !0),
            ee(f.$slots, "td", Me(Ie({ ...c, index: w, item: c })))
          ]),
          e.hasDetailsRow ? (r(), p("tr", {
            key: 0,
            class: E(["po-table-details-row", [{ "po-hidden": !c.showDetails }]])
          }, [
            s("td", {
              colspan: e.thead.length + 1
            }, [
              ee(f.$slots, "details", Me(Ie({ item: c })))
            ], 8, Hr)
          ], 2)) : h("", !0)
        ], 64))), 256)) : h("", !0),
        a.value == null && !o.value || a.value !== null && a.value.length == 0 && !o.value ? (r(), p("tr", qr, [
          s("td", {
            colspan: e.thead.length + 1,
            class: "po-text-center"
          }, [
            s("span", Gr, b(e.emptyMessage), 1)
          ], 8, Ur)
        ])) : h("", !0),
        o.value ? (r(!0), p(j, { key: 2 }, I(a.value, (c) => (r(), p("tr", null, [
          (r(!0), p(j, null, I(e.thead, (w) => (r(), p("td", Wr, [
            s("div", Kr, [
              s("div", {
                class: "po-h-2 loading-placeholder po-rounded-full",
                style: gt({ width: d() + "%" })
              }, null, 4)
            ])
          ]))), 256))
        ]))), 256)) : h("", !0)
      ]),
      f.$slots.tfoot ? (r(), p("tfoot", Zr, [
        s("tr", null, [
          ee(f.$slots, "tfoot")
        ])
      ])) : h("", !0)
    ], 2));
  }
}), Yr = ["onUpdate:modelValue", "id"], Jr = ["for"], Xr = { class: "table-responsive po-w-full" }, ei = ["onClick"], ti = { key: 0 }, oi = ["onClick"], li = {
  name: "PoDynamicTable",
  components: { ArrowsUpDownIcon: Ro, ArrowUpIcon: Io, ArrowDownIcon: Ao }
}, z1 = /* @__PURE__ */ Object.assign(li, {
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
    const t = e, l = $(t.columns), n = $(null), o = $(null), a = (d) => {
      d.hidden = !d.hidden, l.value = t.columns.filter((f) => !f.hidden);
    }, i = (d) => {
      d.sortable && (d.sorted && o.value === "asc" ? o.value = "desc" : o.value = "asc", l.value.forEach((f) => {
        f.key === d.key ? (f.sorted = !0, f.sortDirection = o.value) : (f.sorted = !1, f.sortDirection = null);
      }), n.value = d);
    }, u = $([]);
    return le(() => {
      n.value ? u.value = [...t.data].sort((d, f) => {
        let v = d[n.value.key], c = f[n.value.key];
        return typeof v == "string" && typeof c == "string" && (v = v.toLowerCase(), c = c.toLowerCase()), v < c ? o.value === "asc" ? -1 : 1 : v > c ? o.value === "asc" ? 1 : -1 : 0;
      }) : u.value = [...t.data];
    }), (d, f) => (r(), p("div", null, [
      (r(!0), p(j, null, I(l.value, (v) => (r(), p("div", null, [
        Re(s("input", {
          type: "checkbox",
          name: "dynamic",
          "onUpdate:modelValue": (c) => v.hidden = c,
          id: `hide-table-col-${v.label}`
        }, null, 8, Yr), [
          [Xo, v.hidden]
        ]),
        s("label", {
          for: `hide-table-col-${v.label}`
        }, b(v.label), 9, Jr)
      ]))), 256)),
      s("table", Xr, [
        s("thead", null, [
          s("tr", null, [
            (r(!0), p(j, null, I(l.value, (v) => (r(), p("th", {
              key: v.key,
              onClick: (c) => i(v)
            }, [
              ae(b(v.label) + " " + b(v.sorted) + " " + b(v.sortDirection) + " ", 1),
              v.sortable ? (r(), p("span", ti, [
                v.sorted ? h("", !0) : (r(), N(m(Ro), {
                  key: 0,
                  class: "po-w-4"
                })),
                v.sorted && v.sortDirection === "asc" ? (r(), N(m(Io), {
                  key: 1,
                  class: "po-w-4"
                })) : h("", !0),
                v.sorted && v.sortDirection === "desc" ? (r(), N(m(Ao), {
                  key: 2,
                  class: "po-w-4"
                })) : h("", !0)
              ])) : h("", !0),
              v.hidable ? (r(), p("button", {
                key: 1,
                onClick: (c) => a(v)
              }, b(v.hidden ? "Show" : "Hide"), 9, oi)) : h("", !0)
            ], 8, ei))), 128))
          ])
        ]),
        s("tbody", null, [
          (r(!0), p(j, null, I(u.value, (v) => (r(), p("tr", {
            key: v.id
          }, [
            (r(!0), p(j, null, I(l.value, (c) => (r(), p("td", {
              key: c.key
            }, b(v[c.key]), 1))), 128))
          ]))), 128))
        ])
      ])
    ]));
  }
}), ni = { class: "" }, ai = { class: "po-grow" }, si = ["onClick"], ri = {
  name: "PoDescriptionList"
}, qo = /* @__PURE__ */ Object.assign(ri, {
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
      s("dl", {
        class: E([
          "po-description-list",
          { "po-divide-y po-divide-slate-200": !e.striped },
          { striped: e.striped }
        ])
      }, [
        ee(l.$slots, "content", {}, () => [
          (r(!0), p(j, null, I(e.items, (o) => (r(), p("div", null, [
            s("dt", null, b(o.title), 1),
            s("dd", ni, [
              s("span", ai, b(o.description), 1),
              o.action !== void 0 ? (r(), p("span", {
                key: 0,
                class: "po-shrink-0 po-text-mpao-lightblue hover:po-text-mpao-blue po-transition-colors po-duration-100 po-ease-in-out po-px-2 po-cursor-pointer",
                onClick: (a) => l.$emit("button-click", o.action)
              }, b(o.action), 9, si)) : h("", !0)
            ])
          ]))), 256))
        ])
      ], 2)
    ]));
  }
}), ii = ["for"], pi = { class: "po-capitalize" }, ui = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, di = ["title"], ci = ["type", "name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], fi = ["id"], vi = ["id"], mi = {
  name: "PoInputField"
}, H1 = /* @__PURE__ */ Object.assign(mi, {
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
    const { errorMessage: n } = be(t), o = $(n.value !== null);
    return Z(n, (a, i) => {
      o.value = n.value !== null && n.value !== "";
    }), (a, i) => (r(), p("div", {
      class: E(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      s("label", {
        for: e.id,
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700"
      }, [
        s("span", pi, b(e.label), 1),
        e.required ? (r(), p("span", ui, "*")) : h("", !0),
        e.info !== null ? (r(), p("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          C(m(At), { class: "po-fill-current" })
        ], 8, di)) : h("", !0)
      ], 8, ii),
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
        onInput: i[0] || (i[0] = (u) => a.$emit("update:modelValue", u.target.value)),
        class: [
          "po-mt-1 peer po-block po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white focus:po-ring-0 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default",
          l()
        ]
      }), null, 16, ci),
      e.message !== null ? (r(), p("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, b(e.message), 9, fi)) : h("", !0),
      o.value && m(n) !== null ? (r(), p("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
        id: `${e.id}-error`
      }, [
        s("span", null, b(m(n)), 1)
      ], 8, vi)) : h("", !0)
    ], 2));
  }
}), hi = { class: "po-text-sm po-font-medium po-text-slate-700 peer-focus:po-text-mpao-lightblue peer-invalid:po-text-red-500 peer-invalid:peer-focus:po-text-red-600 po-flex po-items-center po-space-x-1 po-capitalize" }, bi = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, gi = ["name", "id", "value"], yi = ["for"], xi = { class: "po-flex po-items-center po-space-x-1" }, wi = {
  key: 0,
  class: "po-text-sm"
}, Vi = {
  key: 1,
  class: "po-text-sm"
}, ki = {
  key: 0,
  class: "po-mt-3 po-flex po-w-full po-h-1.5 po-bg-gray-100 po-rounded-full po-overflow-hidden"
}, $i = ["aria-valuenow"], _i = ["id"], Ci = ["id"], Si = {
  name: "PoInputFile"
}, q1 = /* @__PURE__ */ Object.assign(Si, {
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
    const t = e, l = S(() => `width: ${t.progress}%`), n = S(() => t.progress), o = $(""), a = (i) => {
      const u = i.target.files[0];
      u ? o.value = u.name : o.value = "";
    };
    return (i, u) => (r(), p("div", {
      class: E(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      s("span", hi, [
        s("span", null, b(e.label), 1),
        e.required ? (r(), p("span", bi, "*")) : h("", !0)
      ]),
      s("input", {
        name: `${e.id}-upload`,
        id: `${e.id}-fileupload`,
        value: e.modelValue,
        type: "file",
        onInput: u[0] || (u[0] = (d) => i.$emit("update:modelValue", d.target.value)),
        onChange: u[1] || (u[1] = (d) => a(d)),
        class: "po-sr-only po-peer"
      }, null, 40, gi),
      s("label", {
        for: `${e.id}-fileupload`,
        class: "po-mt-1 po-block po-w-full po-border po-cursor-pointer po-rounded-md po-border-slate-300 po-bg-white peer-focus:po-border-mpao-lightblue invalid:po-border-red-400 invalid:focus:po-border-red-600 invalid:focus:po-ring-red-600 sm:po-text-sm po-p-2"
      }, [
        s("div", xi, [
          C(m(eo), { class: "po-w-4 po-stroke-slate-500" }),
          o.value ? (r(), p("span", wi, b(o.value), 1)) : (r(), p("span", Vi, "Choose file"))
        ])
      ], 8, yi),
      m(n) !== null ? (r(), p("div", ki, [
        s("div", {
          class: "po-flex po-flex-col po-justify-center po-overflow-hidden po-bg-mpao-lightblue",
          role: "progressbar",
          style: gt(m(l)),
          "aria-valuenow": m(n),
          "aria-valuemin": "0",
          "aria-valuemax": "100"
        }, null, 12, $i)
      ])) : h("", !0),
      e.message !== null ? (r(), p("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, b(e.message), 9, _i)) : h("", !0),
      e.errorMessage !== null ? (r(), p("p", {
        key: 2,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, b(e.errorMessage), 9, Ci)) : h("", !0)
    ], 2));
  }
}), Oi = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Pi = ["title"], Ei = { class: "po-relative po-mt-1" }, Li = { class: "po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-rounded-r-md po-px-2 focus:po-outline-none" }, Bi = {
  key: 0,
  class: "po-block po-text-xs po-opacity-60"
}, ji = {
  key: 0,
  class: "po-mt-2 po-text-sm po-text-slate-500",
  id: "-description"
}, Ti = {
  key: 1,
  class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
  id: "-error"
}, Di = {
  name: "PoSelectField"
}, U1 = /* @__PURE__ */ Object.assign(Di, {
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
    const l = e, n = $(""), o = $(), a = S(
      () => n.value === "" ? l.list : l.list.filter((f) => f.name.toLowerCase().includes(n.value.toLowerCase()))
    );
    function i(f) {
      if (l.object)
        return f == null ? void 0 : f.name;
      if (a.value) {
        let v = a.value.find((c) => c.id === f);
        return v == null ? void 0 : v.name;
      } else if (placeholder)
        return placeholder;
    }
    o.value = l.modelValue, bt(() => {
      o.value = l.modelValue;
    }), Z(o, () => {
      t("update:modelValue", o.value), t("selected", o.value);
    });
    const { errorMessage: u } = be(l), d = $(u.value !== null);
    return Z(u, (f, v) => {
      d.value = u.value !== null && u.value !== "";
    }), (f, v) => (r(), N(m(dn), {
      as: "div",
      modelValue: o.value,
      "onUpdate:modelValue": v[1] || (v[1] = (c) => o.value = c),
      class: E([{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]),
      disabled: e.disabled
    }, {
      default: B(() => [
        C(m(cn), { class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700" }, {
          default: B(() => [
            s("span", null, b(e.label), 1),
            e.required ? (r(), p("span", Oi, "*")) : h("", !0),
            e.info !== null ? (r(), p("abbr", {
              key: 1,
              title: e.info,
              class: "po-w-4 po-text-slate-500"
            }, [
              C(m(At), { class: "po-fill-current" })
            ], 8, Pi)) : h("", !0)
          ]),
          _: 1
        }),
        s("div", Ei, [
          C(m(fn), {
            as: "div",
            ref: "comboboxButton"
          }, {
            default: B(() => [
              C(m(vn), {
                class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm",
                placeholder: e.placeholder,
                onChange: v[0] || (v[0] = (c) => n.value = c.target.value),
                "display-value": i,
                disabled: e.disabled
              }, null, 8, ["placeholder", "disabled"]),
              s("span", Li, [
                C(m(us), {
                  class: "po-h-5 po-w-5 po-text-slate-400",
                  "aria-hidden": "true"
                })
              ])
            ]),
            _: 1
          }, 512),
          m(a).length > 0 ? (r(), N(m(mn), {
            key: 0,
            class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
          }, {
            default: B(() => [
              (r(!0), p(j, null, I(m(a), (c) => (r(), N(m(hn), {
                key: c.id,
                value: e.object ? c : c.id,
                as: "template"
              }, {
                default: B(({ active: w, selected: x }) => [
                  s("li", {
                    class: E([
                      "po-relative po-cursor-default po-select-none po-py-2 po-pl-3 po-pr-9",
                      w ? "po-bg-mpao-lightblue po-text-white" : "po-text-slate-900"
                    ])
                  }, [
                    s("span", {
                      class: E(["po-block po-truncate", x && "po-font-semibold"])
                    }, [
                      ae(b(c.name) + " ", 1),
                      c.subtitle ? (r(), p("span", Bi, b(c.subtitle), 1)) : h("", !0)
                    ], 2),
                    x ? (r(), p("span", {
                      key: 0,
                      class: E([
                        "po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-pr-4",
                        w ? "po-text-white" : "po-text-mpao-lightblue"
                      ])
                    }, [
                      C(m(Fo), {
                        class: "po-h-5 po-w-5",
                        "aria-hidden": "true"
                      })
                    ], 2)) : h("", !0)
                  ], 2)
                ]),
                _: 2
              }, 1032, ["value"]))), 128))
            ]),
            _: 1
          })) : h("", !0)
        ]),
        e.message !== null ? (r(), p("p", ji, b(e.message), 1)) : h("", !0),
        m(u) !== null ? (r(), p("p", Ti, [
          s("span", null, b(m(u)), 1)
        ])) : h("", !0)
      ]),
      _: 1
    }, 8, ["modelValue", "class", "disabled"]));
  }
}), Ni = { class: "po-text-sm po-font-medium po-text-slate-700 po-cursor-pointer po-select-none po-flex po-items-center po-space-x-1" }, Ai = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Mi = {
  name: "PoToggle"
}, G1 = /* @__PURE__ */ Object.assign(Mi, {
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
    return (n, o) => (r(), N(m(Gn), {
      as: "div",
      class: "po-flex po-items-center"
    }, {
      default: B(() => [
        C(m(Wn), {
          modelValue: l.value,
          "onUpdate:modelValue": o[0] || (o[0] = (a) => l.value = a),
          onClick: o[1] || (o[1] = (a) => n.$emit("update:modelValue", !l.value)),
          class: E([
            l.value ? "po-bg-mpao-lightblue" : "po-bg-slate-200",
            "po-relative po-inline-flex po-h-6 po-w-11 po-flex-shrink-0 po-cursor-pointer po-rounded-full po-border-2 po-border-transparent po-transition-colors po-duration-200 po-ease-in-out focus:po-outline-none focus:po-ring-2 focus:po-ring-mpao-lightblue focus:po-ring-offset-2"
          ])
        }, {
          default: B(() => [
            s("span", {
              "aria-hidden": "true",
              class: E([
                l.value ? "po-translate-x-5" : "po-translate-x-0",
                "po-pointer-events-none po-inline-block po-h-5 po-w-5 po-transform po-rounded-full po-bg-white po-shadow po-ring-0 po-transition po-duration-200 po-ease-in-out"
              ])
            }, null, 2)
          ]),
          _: 1
        }, 8, ["modelValue", "class"]),
        C(m(Kn), {
          as: "span",
          class: "po-ml-3"
        }, {
          default: B(() => [
            s("span", Ni, [
              s("span", null, b(e.label), 1),
              e.required ? (r(), p("span", Ai, "*")) : h("", !0)
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Ii = { class: "po-pt-1 po-space-y-1 po-border-r-2 po-border-slate-200 po-relative" }, Ri = ["onClick"], Fi = {
  name: "PoSectionMenu"
}, W1 = /* @__PURE__ */ Object.assign(Fi, {
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
    return (t, l) => (r(), p("ul", Ii, [
      (r(!0), p(j, null, I(e.menuItems, (n) => (r(), p("li", null, [
        s("span", {
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
          (r(), N(ye(n.icon), { class: "po-w-4 po-h-4 po-stroke-current" })),
          s("span", null, b(n.label), 1)
        ], 10, Ri)
      ]))), 256))
    ]));
  }
}), zi = { class: "po-relative po-flex po-items-start" }, Hi = { class: "po-flex po-h-5 po-items-center" }, qi = ["name", "id", "checked", "disabled", "aria-describedby"], Ui = { class: "po-ml-3 po-text-sm" }, Gi = ["for"], Wi = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Ki = ["id"], Zi = { class: "po-sr-only" }, Qi = ["id"], Yi = {
  name: "PoCheckbox"
}, K1 = /* @__PURE__ */ Object.assign(Yi, {
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
      s("div", zi, [
        s("div", Hi, [
          s("input", Ee({
            name: `${e.id}-field`,
            id: e.id,
            checked: e.modelValue,
            disabled: e.disabled,
            "aria-describedby": `${e.id}-description`
          }, t.$attrs, {
            onInput: l[0] || (l[0] = (n) => t.$emit("update:modelValue", n.target.checked)),
            type: "checkbox",
            class: ["po-h-4 po-w-4 po-rounded po-border-slate-300 po-text-mpao-lightblue focus:po-ring-mpao-lightblue", [{ "po-bg-slate-200": e.disabled }]]
          }), null, 16, qi)
        ]),
        s("div", Ui, [
          s("label", {
            for: e.id,
            class: "po-font-medium po-text-slate-600 po-cursor-pointer po-select-none po-flex po-items-center po-space-x-1"
          }, [
            s("span", null, b(e.label), 1),
            e.required ? (r(), p("span", Wi, "*")) : h("", !0)
          ], 8, Gi),
          e.message ? (r(), p("span", {
            key: 0,
            id: `${e.id}-description`,
            class: "po-text-slate-500 po-cursor-default"
          }, [
            s("span", Zi, b(e.label), 1),
            ae(" " + b(e.message), 1)
          ], 8, Ki)) : h("", !0)
        ])
      ]),
      e.errorMessage !== null ? (r(), p("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, b(e.errorMessage), 9, Qi)) : h("", !0)
    ]));
  }
}), Ji = { class: "po-grid po-gap-5 po-grid-cols-1 lg:po-grid-cols-2 po-px-6 lg:po-px-8 po-mt-10 po-pb-10" }, Xi = { class: "sm:po-flex po-items-start sm:po-space-x-5" }, ep = /* @__PURE__ */ s("img", {
  class: "po-h-10",
  src: "https://pension.gov.mv/asset/image/enlgish_website_logo.svg",
  alt: "Pension Office logo"
}, null, -1), tp = { class: "po-mt-5 sm:po-mt-0" }, op = /* @__PURE__ */ s("p", { class: "-po-mt-1 po-text-xs po-text-slate-500" }, " 8th Floor, Allied Building , Chaandhanee Magu, Malé, 20156, Maldives ", -1), lp = { class: "po-mt-1 po-text-xs po-text-slate-500" }, np = { class: "po-mt-1 po-text-xs po-text-slate-500 po-flex -po-mb-2 po-flex-wrap" }, ap = {
  href: "https://www.pension.gov.mv",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, sp = /* @__PURE__ */ s("span", null, "www.pension.gov.mv", -1), rp = {
  href: "mailto:info@pension.gov.mv",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, ip = /* @__PURE__ */ s("span", null, "info@pension.gov.mv", -1), pp = {
  href: "tel:1441",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, up = /* @__PURE__ */ s("span", null, "1441", -1), dp = { class: "po-flex lg:po-items-end po-flex-col" }, cp = { class: "-po-mt-1 po-text-xs po-text-slate-500 po-flex -po-mb-2 po-flex-wrap" }, fp = /* @__PURE__ */ s("a", {
  href: "",
  class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, "Terms & Conditions", -1), vp = /* @__PURE__ */ s("a", {
  href: "",
  class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, "Privacy Policy", -1), mp = /* @__PURE__ */ s("div", { class: "po-flex po-space-x-2 po-mt-3 lg:po-justify-end" }, [
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
], -1), hp = /* @__PURE__ */ s("div", { class: "po-pb-5 po-max-w-xl" }, [
  /* @__PURE__ */ s("span", { class: "po-text-sm po-text-slate-600" }, "We're always working to improve our app, and we're excited to share the latest changes with you. We hope you enjoy these new features and improvements")
], -1), bp = { class: "po-flex po-space-x-2" }, gp = ["onClick"], yp = { class: "po-text-sm po-font-semibold po-slate-800" }, xp = { class: "po-text-xs po-text-white po-px-1 po-py-0 po-rounded-md po-bg-mpao-lightblue" }, wp = { class: "po-bg-gradient-to-t po-from-mpao-orange/20 po-via-mpao-lightblue/20 po-to-purple-500/10 -po-mb-5 -po-mx-5 po-p-5 po-pb-10" }, Vp = { key: 0 }, kp = { class: "po-space-y-2 po-mt-5" }, $p = { class: "po-border po-border-slate-200 po-rounded-lg po-p-3 po-bg-white" }, _p = { class: "po-flex po-items-center po-space-x-2" }, Cp = { class: "po-text-mpao-lightblue po-grow po-text-lg" }, Sp = { class: "po-font-semibold po-shrink-0 po-text-mpao-lightblue po-text-sm po-px-2 po-py-1 po-rounded-xl po-bg-mpao-lightblue/10" }, Op = ["innerHTML"], Pp = {
  key: 0,
  class: "po-bg-white po-rounded-md po-px-4 po-py-3 po-block po-text-sm po-text-center po-text-mpao-lightblue hover:po-text-purple-600 po-cursor-pointer"
}, Ep = {
  name: "PoFooter"
}, Z1 = /* @__PURE__ */ Object.assign(Ep, {
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
    const l = $(!1), n = $(0);
    return (o, a) => (r(), p("div", null, [
      s("section", Ji, [
        s("div", Xi, [
          ep,
          s("div", tp, [
            op,
            s("p", lp, " © " + b(new Date().getFullYear()) + " Pension Office, All Rights Reserved. ", 1),
            s("p", np, [
              s("a", ap, [
                C(m(ks), { class: "po-w-3 po-h-3 po-fill-current" }),
                sp
              ]),
              s("a", rp, [
                C(m(ws), { class: "po-w-3 po-h-3 po-fill-current" }),
                ip
              ]),
              s("a", pp, [
                C(m($s), { class: "po-w-3 po-h-3 po-fill-current" }),
                up
              ])
            ])
          ])
        ]),
        s("div", dp, [
          s("nav", cp, [
            e.changelog ? (r(), p("a", {
              key: 0,
              href: "#",
              onClick: a[0] || (a[0] = de((i) => l.value = !0, ["prevent"])),
              class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
            }, "Change logs")) : h("", !0),
            fp,
            vp
          ]),
          mp
        ])
      ]),
      C(No, {
        show: l.value,
        onModalClosed: a[1] || (a[1] = (i) => l.value = !1),
        "modal-title": "Change Log",
        "modal-width": "sm:po-max-w-4xl",
        id: "change-log-modal"
      }, {
        content: B(() => [
          s("div", null, [
            hp,
            s("div", bp, [
              (r(!0), p(j, null, I(e.changelog, (i, u) => (r(), p("span", {
                class: E(["po-flex po-items-center po-space-x-1 po-px-4 po-py-3 po-rounded-t-xl po-cursor-pointer", [
                  { "po-bg-purple-500/10": n.value === u }
                ]]),
                onClick: (d) => n.value = u
              }, [
                s("span", yp, b(i.label) + " Version", 1),
                s("span", xp, b(i.latest_version), 1)
              ], 10, gp))), 256))
            ]),
            s("div", wp, [
              (r(!0), p(j, null, I(e.changelog, (i, u) => (r(), p("div", null, [
                n.value === u ? (r(), p("div", Vp, [
                  s("div", kp, [
                    (r(!0), p(j, null, I(i.version_history, (d) => (r(), p("div", $p, [
                      s("span", _p, [
                        s("span", Cp, b(d.date), 1),
                        s("span", Sp, b(d.version), 1)
                      ]),
                      s("div", {
                        class: "po-mt-3 po-prose-sm po-prose-slate",
                        innerHTML: d.note
                      }, null, 8, Op)
                    ]))), 256)),
                    i.hasMore ? (r(), p("span", Pp, "More")) : h("", !0)
                  ])
                ])) : h("", !0)
              ]))), 256))
            ])
          ])
        ]),
        _: 1
      }, 8, ["show"])
    ]));
  }
}), Lp = { class: "po-text-sm po-text-red-700" }, Bp = {
  key: 0,
  class: "po-text-sm po-text-red-800 po-list-disc po-ml-5 po-mt-2"
}, jp = {
  key: 1,
  class: "po-flex po-items-start po-space-x-3 po-p-5 po-bg-green-50 po-rounded-md po-mt-5"
}, Tp = { class: "po-text-sm po-text-green-700" }, Dp = {
  name: "PoFormStatusMessage"
}, Q1 = /* @__PURE__ */ Object.assign(Dp, {
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
      C(m(ut), { class: "po-w-6 po-stroke-red-600" }),
      s("div", null, [
        s("span", Lp, b(e.message), 1),
        e.errorList !== null ? (r(), p("ul", Bp, [
          (r(!0), p(j, null, I(e.errorList, (n) => (r(), p("li", null, b(n), 1))), 256))
        ])) : h("", !0)
      ])
    ], 2)) : (r(), p("div", jp, [
      C(m(cl), { class: "po-w-6 po-stroke-green-600" }),
      s("div", null, [
        s("span", Tp, b(e.message), 1)
      ])
    ]));
  }
}), Np = { class: "po-bg-white po-relative po-group po-rounded-xl focus-within:po-ring-2 focus-within:po-ring-inset focus-within:po-ring-indigo-500" }, Ap = { class: "po-block po-p-4 po-transition-colors po-duration-75 po-ease-linear" }, Mp = { class: "po-flex po-items-start po-space-x-2" }, Ip = { class: "po-flex po-items-start po-space-x-1" }, Rp = { class: "po-block po-text-2xl po-font-light po-text-slate-600" }, Fp = {
  key: 0,
  class: "po-text-sm po-text-green-500 po-font-medium po-pt-1"
}, zp = { class: "po-text-sm po-tracking-wide po-text-slate-500" }, Hp = {
  name: "PoStatsBlock"
}, Y1 = /* @__PURE__ */ Object.assign(Hp, {
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
      (r(!0), p(j, null, I(e.items, (n) => (r(), p("div", Np, [
        s("span", Ap, [
          s("div", Mp, [
            s("div", null, [
              s("span", {
                class: E([
                  "po-inline-flex po-p-2 po-rounded-md",
                  n.bgColor,
                  n.iconColor
                ])
              }, [
                (r(), N(ye(n.icon), { class: "po-w-4 po-h-4" }))
              ], 2)
            ]),
            s("div", null, [
              s("div", Ip, [
                s("span", Rp, b(n.value), 1),
                n.diff ? (r(), p("span", Fp, b(n.diff), 1)) : h("", !0)
              ]),
              s("h4", zp, b(n.label), 1)
            ])
          ])
        ])
      ]))), 256))
    ], 2));
  }
}), qp = {
  key: 0,
  class: "po-flex po-space-x-3 po-items-start"
}, Up = { class: "po-flex po-items-center po-space-x-2" }, Gp = ["datetime"], Wp = { class: "po-text-sm po-font-medium po-text-slate-600" }, Kp = ["datetime"], Zp = { class: "flex" }, Qp = { class: "po-flex po-pt-3 po-flex-wrap po-max-w-sm" }, Yp = ["onClick"], Jp = {
  key: 1,
  class: "po-w-full po-text-center"
}, Xp = { class: "po-inline-block po-text-sm po-italic po-text-slate-500" }, eu = /* @__PURE__ */ s("span", { class: "po-text-lg po-text-slate-300 po-px-3 po-inline-block" }, "—", -1), tu = ["datetime"], ou = {
  name: "PoChatLogItem"
}, J1 = /* @__PURE__ */ Object.assign(ou, {
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
      e.item.type !== "message" ? (r(), p("div", qp, [
        e.item.type !== "first" && e.item.avatar !== "" ? (r(), p("div", {
          key: 0,
          class: "po-shrink-0 po-w-8 po-h-8 po-rounded-full po-p-1 po-bg-contain po-bg-slate-100",
          style: gt({ "background-image": `url(${e.item.avatar})` })
        }, null, 4)) : h("", !0),
        s("div", {
          class: E([
            { "po-pt-1": e.item.type !== "first" },
            {
              "po-flex po-justify-end po-items-end po-flex-col": e.item.type === "first"
            }
          ])
        }, [
          s("span", Up, [
            e.item.type === "first" ? (r(), p("time", {
              key: 0,
              datetime: e.item.time,
              class: "po-text-xs po-text-slate-400"
            }, b(e.item.time_human), 9, Gp)) : h("", !0),
            s("span", Wp, b(e.item.name), 1),
            e.item.type === "second" ? (r(), p("time", {
              key: 1,
              datetime: e.item.time,
              class: "po-text-xs po-text-slate-400"
            }, b(e.item.time_human), 9, Kp)) : h("", !0)
          ]),
          s("div", {
            class: E([
              "po-mt-2 po-space-y-1",
              {
                "po-flex po-justify-end po-items-end po-flex-col": e.item.type === "first"
              }
            ])
          }, [
            ee(t.$slots, "message", {}, () => [
              (r(!0), p(j, null, I(e.item.message, (n) => (r(), p("div", Zp, [
                s("p", {
                  class: E([
                    "po-text-sm po-rounded-xl po-px-4 po-py-2",
                    {
                      "po-bg-slate-100 po-text-slate-600": e.item.type !== "first"
                    },
                    {
                      "po-bg-mpao-lightblue po-text-sky-50": e.item.type === "first"
                    }
                  ])
                }, b(n), 3)
              ]))), 256))
            ]),
            s("div", Qp, [
              (r(!0), p(j, null, I(e.item.actions, (n) => (r(), p("button", {
                onClick: (o) => t.$emit("button-click", n.label),
                class: "po-appearance-none po-border po-border-mpao-lightblue po-bg-white hover:po-bg-mpao-lightblue po-px-3 po-py-1 po-mb-2 po-mr-2 po-rounded-lg po-text-slate-500 hover:po-text-sky-100 po-transition-colors po-duration-150 po-ease-in-out po-text-sm po-ring-0 po-outline-none"
              }, b(n.label), 9, Yp))), 256))
            ])
          ], 2)
        ], 2)
      ])) : h("", !0),
      e.item.type === "message" ? (r(), p("div", Jp, [
        (r(!0), p(j, null, I(e.item.message, (n) => (r(), p("p", Xp, [
          ae(b(n) + " ", 1),
          eu,
          s("time", {
            datetime: e.item.time,
            class: "po-text-xs po-text-slate-400 po-inline-block"
          }, b(e.item.time_human), 9, tu)
        ]))), 256))
      ])) : h("", !0)
    ], 2));
  }
}), lu = {
  key: 0,
  class: "po-pointer-events-auto po-w-full po-max-w-sm po-overflow-hidden po-rounded-lg po-bg-mpao-lightblue po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5"
}, nu = { class: "po-p-4" }, au = { class: "po-flex po-items-start" }, su = { class: "po-flex-shrink-0" }, ru = { class: "po-ml-3 po-w-0 po-flex-1 po-pt-0.5" }, iu = { class: "po-text-sm po-font-medium po-text-sky-100" }, pu = { class: "po-mt-1 po-text-sm po-text-sky-300" }, uu = { class: "po-mt-3 po-flex po-space-x-4" }, du = { class: "po-ml-4 po-flex po-flex-shrink-0" }, cu = /* @__PURE__ */ s("span", { class: "po-sr-only" }, "Close", -1), fu = {
  name: "PoNotification"
}, X1 = /* @__PURE__ */ Object.assign(fu, {
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
    const l = e, { show: n } = be(l), o = $(!1);
    Z(n, () => {
      o.value = !1, setTimeout(() => {
        o.value = !0;
      }, 100);
    });
    const a = $(!1);
    return Z(o, () => {
      a.value = !1, setTimeout(() => {
        a.value = !0;
      }, 200);
    }), (i, u) => o.value ? (r(), N(We, {
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
        default: B(() => [
          a.value ? (r(), p("div", lu, [
            s("div", nu, [
              s("div", au, [
                s("div", su, [
                  ee(i.$slots, "icon")
                ]),
                s("div", ru, [
                  s("p", iu, b(e.label), 1),
                  s("p", pu, b(e.text), 1),
                  s("div", uu, [
                    s("button", {
                      onClick: u[0] || (u[0] = (d) => i.$emit("button-click", e.buttonLabel)),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-100 hover:po-text-sky-200 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, b(e.buttonLabel), 1),
                    s("button", {
                      onClick: u[1] || (u[1] = (d) => o.value = !1),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-300 hover:po-text-sky-500 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, " Dismiss ")
                  ])
                ]),
                s("div", du, [
                  s("button", {
                    type: "button",
                    onClick: u[2] || (u[2] = (d) => o.value = !1),
                    class: "po-inline-flex po-rounded-md po-bg-mpao-lightblue po-text-sky-500 hover:po-text-sky-300 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                  }, [
                    cu,
                    C(m(Mt), {
                      class: "po-h-5 po-w-5",
                      "aria-hidden": "true"
                    })
                  ])
                ])
              ])
            ])
          ])) : h("", !0)
        ]),
        _: 3
      })
    ])) : h("", !0);
  }
}), vu = /* @__PURE__ */ s("div", { class: "po-fixed po-inset-0" }, null, -1), mu = { class: "po-absolute po-inset-0 po-overflow-hidden" }, hu = { class: "po-pointer-events-none po-fixed po-inset-y-0 po-right-0 po-flex po-max-w-full po-pl-10" }, bu = { class: "po-flex po-h-full po-flex-col po-overflow-y-auto po-bg-white po-shadow-xl" }, gu = { class: "po-bg-slate-50 po-py-6 po-px-4 sm:po-px-6" }, yu = { class: "po-flex po-items-center po-justify-between" }, xu = { class: "po-ml-3 po-flex po-h-7 po-items-center" }, wu = /* @__PURE__ */ s("span", { class: "po-sr-only" }, "Close panel", -1), Vu = {
  key: 0,
  class: "po-mt-1"
}, ku = { class: "po-text-sm po-text-slate-500" }, $u = {
  key: 0,
  class: "po-bg-slate-50 po-rounded-b-xl po-shrink-0"
}, _u = {
  name: "PoSlideover"
}, e0 = /* @__PURE__ */ Object.assign(_u, {
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
    const l = e, { show: n } = be(l), o = $(!1);
    Z(n, () => {
      o.value = n.value;
    });
    function a() {
      o.value = !1, t("slideover-closed", !0);
    }
    return (i, u) => (r(), N(m(He), {
      as: "template",
      show: o.value
    }, {
      default: B(() => [
        C(m(et), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: a
        }, {
          default: B(() => [
            vu,
            s("div", {
              class: E(["po-fixed po-inset-0 po-overflow-hidden po-bg-black", e.screenOpacity])
            }, [
              s("div", mu, [
                s("div", hu, [
                  C(m(_e), {
                    as: "template",
                    enter: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "enter-from": "po-translate-x-full",
                    "enter-to": "po-translate-x-0",
                    leave: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "leave-from": "po-translate-x-0",
                    "leave-to": "po-translate-x-full"
                  }, {
                    default: B(() => [
                      C(m(tt), {
                        class: E([e.maxWidth, "po-pointer-events-auto po-w-screen"])
                      }, {
                        default: B(() => [
                          s("div", bu, [
                            s("div", gu, [
                              s("div", yu, [
                                C(m(wo), { class: "po-text-lg po-font-medium po-text-slate-600" }, {
                                  default: B(() => [
                                    ae(b(e.label), 1)
                                  ]),
                                  _: 1
                                }),
                                s("div", xu, [
                                  s("button", {
                                    type: "button",
                                    class: "po-rounded-md po-text-slate-500 hover:po-text-mpao-lightblue focus:po-outline-none focus:po-ring-2 focus:po-ring-white",
                                    onClick: a
                                  }, [
                                    wu,
                                    C(m(Ke), {
                                      class: "po-h-6 po-w-6",
                                      "aria-hidden": "true"
                                    })
                                  ])
                                ])
                              ]),
                              e.description ? (r(), p("div", Vu, [
                                s("p", ku, b(e.description), 1)
                              ])) : h("", !0)
                            ]),
                            s("div", {
                              class: E([e.bgColor, "po-relative po-grow po-pt-6 po-px-4 sm:po-px-6"])
                            }, [
                              ee(i.$slots, "content")
                            ], 2),
                            i.$slots.footer ? (r(), p("div", $u, [
                              ee(i.$slots, "footer")
                            ])) : h("", !0)
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
}), Cu = /* @__PURE__ */ s("div", { class: "po-fixed po-inset-0 po-bg-gray-500 po-bg-opacity-25 po-transition-opacity" }, null, -1), Su = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto po-p-4 sm:po-p-6 md:po-p-20" }, Ou = { class: "po-relative" }, Pu = {
  key: 0,
  class: "po-max-h-96 scroll-py-3 po-overflow-y-auto po-p-3"
}, Eu = {
  name: "PoCommandPalette"
}, t0 = /* @__PURE__ */ Object.assign(Eu, {
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
    const t = e, l = $(""), { show: n } = be(t), o = $(!1);
    Z(n, () => {
      o.value = !1, setTimeout(() => {
        o.value = !0;
      }, 100);
    });
    function a(i) {
      i.ctrlKey && i.key === "b" && (o.value = !0);
    }
    return H(() => {
      window.addEventListener("keyup", a);
    }), yt(() => {
      window.removeEventListener("keyup", a);
    }), (i, u) => (r(), N(m(He), {
      show: o.value,
      as: "template",
      onAfterLeave: u[2] || (u[2] = (d) => l.value = ""),
      appear: ""
    }, {
      default: B(() => [
        C(m(et), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: u[1] || (u[1] = (d) => o.value = !1)
        }, {
          default: B(() => [
            C(m(_e), {
              as: "template",
              enter: "po-ease-out po-duration-300",
              "enter-from": "po-opacity-0",
              "enter-to": "po-opacity-100",
              leave: "po-ease-in po-duration-200",
              "leave-from": "po-opacity-100",
              "leave-to": "po-opacity-0"
            }, {
              default: B(() => [
                Cu
              ]),
              _: 1
            }),
            s("div", Su, [
              C(m(_e), {
                as: "template",
                enter: "po-ease-out po-duration-300",
                "enter-from": "po-opacity-0 po-scale-95",
                "enter-to": "po-opacity-100 po-scale-100",
                leave: "po-ease-in po-duration-200",
                "leave-from": "po-opacity-100 po-scale-100",
                "leave-to": "po-opacity-0 po-scale-95"
              }, {
                default: B(() => [
                  C(m(tt), { class: "po-mx-auto po-max-w-xl po-transform po-divide-y po-divide-gray-100 po-overflow-hidden po-rounded-xl po-bg-white po-shadow-2xl po-ring-1 po-ring-black po-ring-opacity-5 po-transition-all" }, {
                    default: B(() => [
                      s("div", Ou, [
                        C(m(ds), {
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
                      e.showContent ? (r(), p("div", Pu, [
                        ee(i.$slots, "content")
                      ])) : h("", !0)
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
}), Lu = /* @__PURE__ */ s("div", { class: "po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity" }, null, -1), Bu = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto" }, ju = { class: "po-flex po-min-h-full po-items-start po-justify-center po-p-4 po-text-center sm:po-p-0" }, Tu = { class: "po-p-5" }, Du = { class: "po-text-center po-space-y-3" }, Nu = { key: 1 }, Au = { class: "po-text-sm po-text-gray-600" }, Mu = { class: "po-border-t po-border-slate-200 po-flex po-divide-x po-divide-slate-200" }, Iu = {
  name: "PoAlert"
}, o0 = /* @__PURE__ */ Object.assign(Iu, {
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
    const l = e, { show: n } = be(l), o = $(!1);
    Z(n, () => {
      o.value = n.value;
    });
    function a() {
      o.value = !1, t("alert-closed", !0);
    }
    return (i, u) => (r(), N(m(He), {
      as: "template",
      show: o.value
    }, {
      default: B(() => [
        C(m(et), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: a
        }, {
          default: B(() => [
            C(m(_e), {
              as: "template",
              enter: "po-ease-out po-duration-300",
              "enter-from": "po-opacity-0",
              "enter-to": "po-opacity-100",
              leave: "po-ease-in po-duration-200",
              "leave-from": "po-opacity-100",
              "leave-to": "po-opacity-0"
            }, {
              default: B(() => [
                Lu
              ]),
              _: 1
            }),
            s("div", Bu, [
              s("div", ju, [
                C(m(_e), {
                  as: "template",
                  enter: "po-ease-out po-duration-300",
                  "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                  "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                  leave: "po-ease-in po-duration-200",
                  "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                  "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                }, {
                  default: B(() => [
                    C(m(tt), { class: "po-relative po-transform po-overflow-hidden po-rounded-lg po-bg-white po-text-left po-shadow-xl po-transition-all sm:po-my-8 sm:po-w-full sm:po-max-w-sm" }, {
                      default: B(() => [
                        s("div", Tu, [
                          s("div", Du, [
                            e.alertTitle !== "" ? (r(), N(m(wo), {
                              key: 0,
                              as: "h3",
                              class: "po-text-lg po-font-medium po-leading-6 po-text-gray-900"
                            }, {
                              default: B(() => [
                                ae(b(e.alertTitle), 1)
                              ]),
                              _: 1
                            })) : h("", !0),
                            e.alertDescription !== "" ? (r(), p("div", Nu, [
                              s("p", Au, b(e.alertDescription), 1)
                            ])) : h("", !0)
                          ])
                        ]),
                        s("div", Mu, [
                          s("button", {
                            onClick: a,
                            class: "po-text-sm po-bg-white po-text-slate-500 hover:po-bg-slate-50 po-transition-colors po-duration-100 po-ease-out po-font-medium po-py-3 po-px-5 po-w-1/2 focus:po-ring-0"
                          }, b(e.cancelBtnLabel), 1),
                          s("button", {
                            onClick: u[0] || (u[0] = (d) => {
                              i.$emit("button-click", "ok"), a();
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
}), Ru = {
  key: 0,
  class: "po-col-span-2 po-relative po-mt-5"
}, Fu = /* @__PURE__ */ s("span", {
  class: "po-absolute po-top-0 po-left-1 po--ml-px po-h-[calc(100%-7px)] po-w-0.5 po-bg-gray-200",
  "aria-hidden": "true"
}, null, -1), zu = { class: "po-relative po-space-y-5" }, Hu = { class: "po-flex po-space-x-2 po-items-start" }, qu = { class: "log-item" }, Uu = { key: 0 }, Gu = {
  key: 0,
  class: "po-text-slate-500 po-text-xs"
}, Wu = {
  key: 1,
  class: "po-text-center po-py-10"
}, Ku = { class: "po-text-sm po-text-slate-500" }, Zu = {
  name: "PoLogs"
}, l0 = /* @__PURE__ */ Object.assign(Zu, {
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
      e.items && e.items.length > 0 ? (r(), p("div", Ru, [
        Fu,
        s("div", zu, [
          (r(!0), p(j, null, I(e.items, (n, o) => (r(), p("div", Hu, [
            s("p", {
              class: E([
                "po-rounded-full po-w-2 po-h-2 border-1 po-border-white po-shrink-0",
                { "po-bg-mpao-orange": o !== e.items.length - 1 },
                ,
                { "po-bg-slate-400": o == e.items.length - 1 }
              ])
            }, null, 2),
            s("div", qu, [
              s("span", null, [
                ae(b(n.label) + " on " + b(n.date) + " " + b(n.by && n.by !== "" ? "by" : "") + " ", 1),
                n.by && n.by !== "" ? (r(), p("span", Uu, b(n.by), 1)) : h("", !0)
              ]),
              n.description && n.description !== "" ? (r(), p("blockquote", Gu, ' "' + b(n.description) + '" ', 1)) : h("", !0)
            ])
          ]))), 256))
        ])
      ])) : (r(), p("div", Wu, [
        s("span", Ku, b(e.emptyLabel), 1)
      ]))
    ]));
  }
}), Qu = {
  key: 0,
  role: "list",
  class: "po-divide-y po-divide-gray-200 po-rounded-md po-border po-border-gray-200 po-mt-5"
}, Yu = { class: "po-flex po-items-center po-justify-between po-py-3 po-pl-3 po-pr-4 po-text-sm" }, Ju = { class: "po-flex po-w-0 po-flex-1 po-items-center" }, Xu = { class: "po-ml-2 po-w-0 po-flex-1 po-truncate" }, ed = { class: "po-ml-4 po-flex-shrink-0 po-space-x-4" }, td = ["onClick"], od = ["onClick"], ld = {
  key: 1,
  class: "po-py-10"
}, nd = { class: "po-text-sm po-text-slate-500" }, ad = {
  name: "PoDownloadFileList"
}, n0 = /* @__PURE__ */ Object.assign(ad, {
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
      e.files && e.files.length > 0 ? (r(), p("ul", Qu, [
        (r(!0), p(j, null, I(e.files, (o) => (r(), p("li", Yu, [
          s("div", Ju, [
            C(m(eo), {
              class: "po-h-5 po-w-5 po-flex-shrink-0 po-text-gray-400",
              "aria-hidden": "true"
            }),
            s("span", Xu, b(o.label), 1)
          ]),
          s("div", ed, [
            s("a", {
              href: "#",
              onClick: de((a) => l.$emit("button-click", o), ["prevent"]),
              class: "po-font-medium po-text-mpao-lightblue hover:po-text-indigo-500"
            }, b(e.linkLabel), 9, td),
            e.showViewBtn ? (r(), p("a", {
              key: 0,
              href: "#",
              onClick: de((a) => l.$emit("view-click", o), ["prevent"]),
              class: "po-font-medium po-text-mpao-lightblue hover:po-text-indigo-500"
            }, b(e.viewBtnLabel), 9, od)) : h("", !0)
          ])
        ]))), 256))
      ])) : (r(), p("div", ld, [
        s("span", nd, b(e.emptyLabel), 1)
      ]))
    ]));
  }
}), Uo = (e, t) => {
  const l = e.__vccOpts || e;
  for (const [n, o] of t)
    l[n] = o;
  return l;
}, sd = {
  name: "PoContentArea"
}, rd = { class: "shell-content--area po-max-w-[1370px]" };
function id(e, t, l, n, o, a) {
  return r(), p("section", rd, [
    ee(e.$slots, "default")
  ]);
}
const a0 = /* @__PURE__ */ Uo(sd, [["render", id]]), pd = {
  name: "AnimatedLogo"
}, ud = /* @__PURE__ */ el('<div><svg class="po-stroke-mpao-blue po-w-16 animated-logo" viewBox="0 0 62 55" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.76292 17.8572L7.7 17.9704V18.0682C6.87397 19.526 6.23618 20.649 5.58241 21.4779C4.93472 22.299 4.30505 22.7864 3.51417 23.0053C3.46261 23.0112 3.41718 23.0206 3.39088 23.026C3.35663 23.0331 3.31491 23.0425 3.27694 23.0511C3.25988 23.055 3.24357 23.0587 3.22903 23.0619C3.1106 23.0882 3.03712 23.1 3 23.1H2.93844L2.89561 23.1107L15.9876 0.600006H19.1308C17.2397 1.92747 16.1556 3.83665 15.5371 5.73245C14.8359 7.88203 14.7198 10.0514 14.7027 11.4258C13.1737 11.6033 11.0729 12.4434 9.38038 15.128C8.77075 16.0431 8.26353 16.9561 7.76713 17.8496L7.76292 17.8572Z"></path><path d="M48.1818 11.3241C48.047 8.39742 47.5389 6.05982 46.5472 4.07639C45.8153 2.61266 44.8203 1.39271 43.5945 0.5H46.8113L59.8583 23.0959C59.8303 23.0912 59.7891 23.0819 59.7213 23.0649C59.7166 23.0638 59.7117 23.0625 59.7066 23.0612C59.6302 23.042 59.5099 23.0118 59.3765 23.0027C58.59 22.7825 57.9627 22.2958 57.3176 21.4779C56.6586 20.6423 56.0158 19.508 55.1801 18.0331L55.1413 17.9647C54.8861 17.4553 54.6068 16.973 54.3362 16.5054L54.3327 16.4995C54.0565 16.0225 53.7893 15.5605 53.5472 15.0764L53.5333 15.0485L53.516 15.0226C51.7283 12.3411 49.7115 11.4988 48.1818 11.3241Z"></path><path d="M9.28397 39.6773C11.0717 42.3589 13.0885 43.2011 14.6182 43.3759C14.753 46.3026 15.2611 48.6402 16.2528 50.6236C16.9991 52.1163 17.9653 53.2992 19.1863 54.2H15.7881L2.74125 31.699C2.76073 31.6996 2.78031 31.7 2.8 31.7C2.89335 31.7 2.97474 31.7149 3.07903 31.7381C3.08854 31.7402 3.09897 31.7426 3.11023 31.7452C3.18647 31.7626 3.30082 31.7888 3.42319 31.7972C4.20888 32.0178 4.86081 32.5271 5.52047 33.3603C6.20216 34.2214 6.85697 35.382 7.66164 36.8405C8.26116 37.9396 8.76739 38.8512 9.276 39.665L9.27989 39.6712L9.28397 39.6773Z"></path><path d="M55.124 36.865L55.1331 36.8504L55.1412 36.8353C55.9431 35.3316 56.5997 34.1683 57.2697 33.307C57.9146 32.4778 58.5471 31.9616 59.2949 31.6961C59.4179 31.6866 59.5418 31.6616 59.6287 31.6442C59.6354 31.6428 59.6418 31.6415 59.6481 31.6403C59.719 31.6261 59.772 31.616 59.8123 31.6095L46.8115 54.1H43.8753C45.7283 52.7465 46.7867 50.8277 47.3889 48.9394C48.064 46.8226 48.1795 44.7058 48.1971 43.3742C49.7262 43.1967 51.8271 42.3567 53.5196 39.6719C53.8327 39.2016 54.1164 38.6849 54.3777 38.1995C54.4112 38.1375 54.4442 38.076 54.4768 38.0152C54.7049 37.5906 54.9148 37.1996 55.124 36.865Z"></path><path d="M32.2763 51.5708L32.2653 51.5582L32.2536 51.5465C32.0661 51.359 31.7413 51.2 31.4 51.2C31.3949 51.2 31.3894 51.2 31.3835 51.2C31.2956 51.1998 31.1323 51.1993 30.9751 51.2442C30.7932 51.2962 30.6132 51.4082 30.4904 51.6086C29.1941 53.0706 27.544 53.8 25.5 53.8C22.8209 53.8 20.828 52.9218 19.4532 51.2005C18.1148 49.5247 17.3123 46.988 17.1201 43.5109C18.6883 43.1579 19.8601 42.2673 20.5004 41.6896C20.5136 44.8271 20.8579 46.8152 21.6737 48.0181C22.5558 49.319 23.9045 49.6 25.5 49.6C27.4335 49.6 28.5187 48.2893 29.0946 46.9901C29.6604 45.7138 29.7966 44.3347 29.7999 43.8193C29.8943 42.5846 30.6602 41.8 31.5 41.8H31.5778C32.4558 41.8842 33.2 42.7102 33.2 43.9C33.2 45.6119 33.5619 47.0065 34.2986 47.9982C35.0485 49.0077 36.1459 49.544 37.4792 49.5996L37.4896 49.6H37.5C39.2304 49.6 40.5973 49.3258 41.4454 48.0081C41.849 47.3811 42.1078 46.5565 42.2692 45.5056C42.4311 44.4518 42.5 43.1353 42.5 41.5V24.4455L45.9 21.8182V41.5C45.9 41.4958 45.8996 41.5001 45.8978 41.519C45.8959 41.5381 45.8927 41.5719 45.887 41.6267L45.8842 41.6541C45.8752 41.7406 45.8636 41.8524 45.8521 41.9797C45.8264 42.2614 45.8 42.6283 45.8 43V43.9V43.9029V43.9059V43.9088V43.9117V43.9146V43.9175V43.9205V43.9234V43.9263V43.9292V43.9321V43.935V43.9379V43.9408V43.9437V43.9466V43.9495V43.9524V43.9553V43.9581V43.961V43.9639V43.9668V43.9696V43.9725V43.9754V43.9783V43.9811V43.984V43.9868V43.9897V43.9926V43.9954V43.9983V44.0011V44.004V44.0068V44.0096V44.0125V44.0153V44.0181V44.021V44.0238V44.0266V44.0295V44.0323V44.0351V44.0379V44.0407V44.0435V44.0463V44.0492V44.052V44.0548V44.0576V44.0603V44.0631V44.0659V44.0687V44.0715V44.0743V44.0771V44.0798V44.0826V44.0854V44.0882V44.0909V44.0937V44.0965V44.0992V44.102V44.1047V44.1075V44.1102V44.113V44.1157V44.1185V44.1212V44.1239V44.1267V44.1294V44.1321V44.1349V44.1376V44.1403V44.143V44.1457V44.1484V44.1512V44.1539V44.1566V44.1593V44.162V44.1647V44.1674V44.17V44.1727V44.1754V44.1781V44.1808V44.1835V44.1861V44.1888V44.1915V44.1941V44.1968V44.1995V44.2021V44.2048V44.2074V44.2101V44.2127V44.2154V44.218V44.2207V44.2233V44.2259V44.2285V44.2312V44.2338V44.2364V44.239V44.2417V44.2443V44.2469V44.2495V44.2521V44.2547V44.2573V44.2599V44.2625V44.2651V44.2677V44.2702V44.2728V44.2754V44.278V44.2806V44.2831V44.2857V44.2882V44.2908V44.2934V44.2959V44.2985V44.301V44.3036V44.3061V44.3087V44.3112V44.3137V44.3163V44.3188V44.3213V44.3238V44.3264V44.3289V44.3314V44.3339V44.3364V44.3389V44.3414V44.3439V44.3464V44.3489V44.3514V44.3539V44.3564V44.3588V44.3613V44.3638V44.3663V44.3687V44.3712V44.3737V44.3761V44.3786V44.381V44.3835V44.3859V44.3884V44.3908V44.3932V44.3957V44.3981V44.4005V44.403V44.4054V44.4078V44.4102V44.4126V44.415V44.4174V44.4199V44.4223V44.4247V44.427V44.4294V44.4318V44.4342V44.4366V44.439V44.4413V44.4437V44.4461V44.4484V44.4508V44.4532V44.4555V44.4579V44.4602V44.4626V44.4649V44.4672V44.4696V44.4719V44.4742V44.4766V44.4789V44.4812V44.4835V44.4858V44.4882V44.4905V44.4928V44.4951V44.4974V44.4997V44.5019V44.5042V44.5065V44.5088V44.5111V44.5133V44.5156V44.5179V44.5201V44.5224V44.5247V44.5269V44.5292V44.5314V44.5337V44.5359V44.5381V44.5404V44.5426V44.5448V44.547V44.5493V44.5515V44.5537V44.5559V44.5581V44.5603V44.5625V44.5647V44.5669V44.5691V44.5713V44.5734V44.5756V44.5778V44.58V44.5821V44.5843V44.5865V44.5886V44.5908V44.5929V44.5951V44.5972V44.5994V44.6015V44.6036V44.6058V44.6079V44.61V44.6121V44.6142V44.6164V44.6185V44.6206V44.6227V44.6248V44.6269V44.6289V44.631V44.6331V44.6352V44.6373V44.6393V44.6414V44.6435V44.6455V44.6476V44.6497V44.6517V44.6538V44.6558V44.6578V44.6599V44.6619V44.6639V44.666V44.668V44.67V44.672V44.674V44.676V44.678V44.68V44.682V44.684V44.686V44.688V44.69V44.692V44.6939V44.6959V44.6979V44.6998V44.7018V44.7037V44.7057V44.7076V44.7096V44.7115V44.7135V44.7154V44.7173V44.7193V44.7212V44.7231V44.725V44.7269V44.7288V44.7307V44.7326V44.7345V44.7364V44.7383V44.7402V44.7421V44.7439V44.7458V44.7477V44.7495V44.7514V44.7533V44.7551V44.757V44.7588V44.7606V44.7625V44.7643V44.7661V44.768V44.7698V44.7716V44.7734V44.7752V44.777V44.7788V44.7806V44.7824V44.7842V44.786V44.7878V44.7896V44.7914V44.7931V44.7949V44.7967V44.7984V44.8002V44.8019V44.8037V44.8054V44.8071V44.8089V44.8106V44.8123V44.8141V44.8158V44.8175V44.8192V44.8209V44.8226V44.8243V44.826V44.8277V44.8294V44.8311V44.8328V44.8344V44.8361V44.8378V44.8394V44.8411V44.8427V44.8444V44.846V44.8477V44.8493V44.851V44.8526V44.8542V44.8558V44.8575V44.8591V44.8607V44.8623V44.8639V44.8655V44.8671V44.8687V44.8702V44.8718V44.8734V44.875V44.8765V44.8781V44.8797V44.8812V44.8828V44.8843V44.8859V44.8874V44.8889V44.8905V44.892V44.8935V44.895V44.8965V44.898V44.8996V44.9011V44.9025V44.904V44.9055V44.907V44.9085V44.91V44.9114V44.9129V44.9144V44.9158V44.9173V44.9187V44.9202V44.9216V44.923V44.9245V44.9259V44.9273V44.9288V44.9302V44.9316V44.933V44.9344V44.9358V44.9372V44.9386V44.9399V44.9413V44.9427V44.9441V44.9454V44.9468V44.9482V44.9495V44.9509V44.9522V44.9535V44.9549V44.9562V44.9575V44.9589V44.9602V44.9615V44.9628V44.9641V44.9654V44.9667V44.968V44.9693V44.9706V44.9718V44.9731V44.9744V44.9757V44.9769V44.9782V44.9794V44.9807V44.9819V44.9832V44.9844V44.9856V44.9868V44.9881V44.9893V44.9905V44.9917V44.9929V44.9941V44.9953V44.9965V44.9977V44.9988V45V45.1V45.1006V45.1012V45.1017V45.1023V45.1029V45.1035V45.104V45.1046V45.1052V45.1057V45.1063V45.1069V45.1074V45.108V45.1085V45.1091V45.1096V45.1102V45.1107V45.1113V45.1118V45.1123V45.1129V45.1134V45.1139V45.1145V45.115V45.1155V45.1161V45.1166V45.1171V45.1176V45.1181V45.1186V45.1191V45.1196V45.1202V45.1207V45.1212V45.1217V45.1222V45.1226V45.1231V45.1236V45.1241V45.1246V45.1251V45.1256V45.1261V45.1265V45.127V45.1275V45.128V45.1284V45.1289V45.1294V45.1298V45.1303V45.1307V45.1312V45.1317V45.1321V45.1326V45.133V45.1335V45.1339V45.1343V45.1348V45.1352V45.1357V45.1361V45.1365V45.137V45.1374V45.1378V45.1383V45.1387V45.1391V45.1395V45.1399V45.1404V45.1408V45.1412V45.1416V45.142V45.1424V45.1428V45.1432V45.1436V45.144V45.1444V45.1448V45.1452V45.1456V45.146V45.1464V45.1468V45.1471V45.1475V45.1479V45.1483V45.1487V45.149V45.1494V45.1498V45.1501V45.1505V45.1509V45.1512V45.1516V45.152V45.1523V45.1527V45.153V45.1534V45.1537V45.1541V45.1544V45.1548V45.1551V45.1555V45.1558V45.1561V45.1565V45.1568V45.1572V45.1575V45.1578V45.1581V45.1585V45.1588V45.1591V45.1594V45.1598V45.1601V45.1604V45.1607V45.161V45.1613V45.1616V45.162V45.1623V45.1626V45.1629V45.1632V45.1635V45.1638V45.1641V45.1644V45.1647V45.165V45.1652V45.1655V45.1658V45.1661V45.1664V45.1667V45.167V45.1672V45.1675V45.1678V45.1681V45.1683V45.1686V45.1689V45.1691V45.1694V45.1697V45.1699V45.1702V45.1705V45.1707V45.171V45.1712V45.1715V45.1717V45.172V45.1722V45.1725V45.1727V45.173V45.1732V45.1735V45.1737V45.174V45.1742V45.1744V45.1747V45.1749V45.1751V45.1753C45.5039 48.1507 44.6544 50.2924 43.3031 51.6899C41.9582 53.0807 40.0524 53.8 37.5 53.8C35.4235 53.8 33.5685 53.0476 32.2763 51.5708Z"></path><path d="M22.8 23.2538V18.2178L29.3909 23.307L26.1939 25.8645L22.8 23.2538Z"></path><path d="M16.7 20.2V19.7H16.5V18.8V10.858C16.5042 10.8478 16.5096 10.8348 16.5142 10.8232C16.5488 10.7368 16.5963 10.6012 16.5998 10.4209C16.8474 7.03069 17.6799 4.61275 19.0737 3.04468C20.4543 1.49155 22.4511 0.699997 25.2 0.699997C27.2568 0.699997 29.1263 1.53906 30.5352 3.04197L30.5407 3.04785L30.5464 3.05355C30.7614 3.26854 31.0508 3.35 31.3 3.35C31.5492 3.35 31.8386 3.26854 32.0536 3.05355L32.0646 3.04251L32.0749 3.03081C33.4779 1.4408 35.1402 0.699997 37.3 0.699997C40.0769 0.699997 42.1441 1.62655 43.5571 3.42174C44.934 5.17104 45.7393 7.80743 45.886 11.3874C44.0184 11.8028 42.6345 12.9721 42.1 13.4936V13.2C42.1 10.0544 41.7835 8.06299 40.9925 6.86242C40.1497 5.58316 38.8495 5.3 37.3 5.3C35.4114 5.3 34.3769 6.59229 33.8399 7.85422C33.3055 9.11015 33.2 10.457 33.2 10.9C33.2 12.2634 32.2859 13.1 31.3 13.1H31.2204C30.2388 13.0141 29.4 12.0845 29.4 10.8C29.4 9.19015 29.0639 7.84653 28.3661 6.89234C27.6525 5.91665 26.5974 5.4 25.3 5.4C23.6267 5.4 22.3017 5.64608 21.4896 6.93319C21.1052 7.5425 20.863 8.34586 20.7131 9.3714C20.5626 10.4004 20.5 11.6909 20.5 13.3V30.4541L16.7 33.3833V20.2Z"></path><path d="M40.1 31.5462V36.5799L33.4225 31.4049L36.6974 28.9288L40.1 31.5462Z"></path><mask id="path-9-inside-1" fill="white"><path d="M58.7 30.1C58.9 30 59.5 30 59.8 29.9C60.9 29.8 61.8 28.7 61.8 27.4C61.8 26.1 60.9 25 59.8 24.9C59.7 24.9 59.5 24.9 59.4 24.8C59.3 24.8 59.2 24.8 59.1 24.7C59.1 24.7 59.1 24.7 59 24.7C58.6 24.6 58.1 24.4 57.7 24.1C57.7 24.1 57.7 24.1 57.6 24C56.1 23.1 55 21.2 53.6 18.7C53.1 17.8 52.6 16.9 52 16C50.5 13.7 48.9 13.1 47.8 13C47.7 13 47.6 13 47.5 13H47.3C47.1 13 46.9 13 46.9 13C45.2 13.2 44 14.3 43.6 14.8L25.2 29.1C25.2 29.1 25.2 29.1 25.1 29.2L23 30.8L16.8 35.5L16.4 35.9C16.4 35.9 16.4 35.9 16.3 35.9C16 36.1 15.7 36.3 15.4 36.3C15.1 36.3 14.9 36.2 14.7 36.1C14.5 35.9 14.4 35.8 14.3 35.5C13.9 34.8 13.4 34.1 13 33.3V33.1C12.2 31.7 11.3 30 10.1 28.6C10.1 28.6 10.1 28.6 10.1 28.5L10 28.4C9.9 28.3 9.9 28.3 9.8 28.2C9.8 28.2 9.8 28.2 9.7 28.1L9.2 27.5C9.2 27.5 9.2 27.5 9.1 27.5C9 27.3 9 27.1 9.1 27L9.6 26.5C10.9 25 11.9 23.2 12.8 21.6V21.5C13.2 20.7 13.7 19.9 14.2 19.1C14.4 18.8 14.6 18.6 14.7 18.5V13.1C13.6 13.2 12 13.9 10.6 16C10 16.9 9.5 17.8 9 18.7C7.8 20.9 6.8 22.5 5.6 23.5C4.8 24.1 4 24.4 3.5 24.6C3.5 24.6 3.5 24.6 3.4 24.6C3.3 24.6 3.1 24.7 3 24.7C2.9 24.7 2.9 24.7 2.8 24.7C2.7 24.7 2.7 24.7 2.7 24.7H2.6H2.5C2.3 24.7 2.2 24.8 2.1 24.8C2 24.8 2 24.8 2 24.9C1.7 25.1 1.4 25.3 1.2 25.6C1.2 25.7 1.1 25.7 1.1 25.8V25.9L0.999997 26.1C0.999997 26.2 0.999997 26.2 0.899997 26.3C0.899997 26.4 0.899997 26.4 0.799997 26.5C0.799997 26.6 0.799997 26.7 0.699997 26.7C0.699997 26.8 0.699997 26.9 0.699997 26.9C0.699997 27 0.699997 27.1 0.699997 27.1C0.699997 27.2 0.699997 27.2 0.699997 27.3C0.699997 27.4 0.699997 27.5 0.699997 27.5C0.699997 27.6 0.699997 27.7 0.699997 27.7C0.699997 27.8 0.699997 27.9 0.799997 27.9V28V28.1C0.799997 28.2 0.799997 28.2 0.899997 28.2L0.999997 28.4C0.999997 28.5 1.1 28.5 1.1 28.5C1.1 28.5 1.1 28.5 1.1 28.6C1.2 28.7 1.3 28.9 1.5 29C1.6 29 1.6 29.1 1.7 29.1C1.7 29.1 1.8 29.1 1.8 29.2C1.8 29.2 1.8 29.2 1.9 29.2C2 29.3 2.2 29.3 2.3 29.4C2.4 29.4 2.4 29.4 2.4 29.4L2.9 29.5C3.1 29.5 3.2 29.6 3.4 29.6C4.2 29.8 4.7 30.2 4.8 30.2C6.4 31.2 7.5 33 8.9 35.5C9.5 36.6 10 37.4 10.5 38.2C11.9 40.3 13.4 41 14.4 41.1C14.5 41.1 14.5 41.1 14.6 41.1C14.7 41.1 14.8 41.1 14.8 41.1C15 41.1 15.2 41.1 15.5 41.1H15.6C17.2 40.8 18.5 39.8 18.9 39.3L19 39.2L19.8 38.6C19.8 38.6 19.9 38.5 20 38.5L30.2 30.6L41.3 22L46.5 18H46.6C46.7 18 46.9 17.9 47 17.9C47.4 17.9 47.8 18.1 48.1 18.6L48.5 19.2C48.8 19.7 49.2 20.3 49.5 20.9V21C50.1 22.1 50.8 23.4 51.7 24.6C51.7 24.6 51.7 24.7 51.8 24.7C52.1 25.1 52.4 25.5 52.7 25.8C52.7 25.8 52.8 25.8 52.8 25.9C53 26.1 53.1 26.3 53.3 26.4C53.4 26.5 53.4 26.7 53.3 26.9C52 28.5 50.4 31.1 49.6 32.4V32.5C49.2 33.2 48.7 34.1 48.2 34.9C48 35.2 47.8 35.4 47.7 35.5V40.9C48.8 40.8 50.4 40.1 51.8 37.9C52.4 37 52.9 36 53.4 35.2C53.5 35 53.7 34.7 53.8 34.5C55.2 33 56.4 30.9 58.7 30.1Z"></path></mask><path d="M58.7 30.1C58.9 30 59.5 30 59.8 29.9C60.9 29.8 61.8 28.7 61.8 27.4C61.8 26.1 60.9 25 59.8 24.9C59.7 24.9 59.5 24.9 59.4 24.8C59.3 24.8 59.2 24.8 59.1 24.7C59.1 24.7 59.1 24.7 59 24.7C58.6 24.6 58.1 24.4 57.7 24.1C57.7 24.1 57.7 24.1 57.6 24C56.1 23.1 55 21.2 53.6 18.7C53.1 17.8 52.6 16.9 52 16C50.5 13.7 48.9 13.1 47.8 13C47.7 13 47.6 13 47.5 13H47.3C47.1 13 46.9 13 46.9 13C45.2 13.2 44 14.3 43.6 14.8L25.2 29.1C25.2 29.1 25.2 29.1 25.1 29.2L23 30.8L16.8 35.5L16.4 35.9C16.4 35.9 16.4 35.9 16.3 35.9C16 36.1 15.7 36.3 15.4 36.3C15.1 36.3 14.9 36.2 14.7 36.1C14.5 35.9 14.4 35.8 14.3 35.5C13.9 34.8 13.4 34.1 13 33.3V33.1C12.2 31.7 11.3 30 10.1 28.6C10.1 28.6 10.1 28.6 10.1 28.5L10 28.4C9.9 28.3 9.9 28.3 9.8 28.2C9.8 28.2 9.8 28.2 9.7 28.1L9.2 27.5C9.2 27.5 9.2 27.5 9.1 27.5C9 27.3 9 27.1 9.1 27L9.6 26.5C10.9 25 11.9 23.2 12.8 21.6V21.5C13.2 20.7 13.7 19.9 14.2 19.1C14.4 18.8 14.6 18.6 14.7 18.5V13.1C13.6 13.2 12 13.9 10.6 16C10 16.9 9.5 17.8 9 18.7C7.8 20.9 6.8 22.5 5.6 23.5C4.8 24.1 4 24.4 3.5 24.6C3.5 24.6 3.5 24.6 3.4 24.6C3.3 24.6 3.1 24.7 3 24.7C2.9 24.7 2.9 24.7 2.8 24.7C2.7 24.7 2.7 24.7 2.7 24.7H2.6H2.5C2.3 24.7 2.2 24.8 2.1 24.8C2 24.8 2 24.8 2 24.9C1.7 25.1 1.4 25.3 1.2 25.6C1.2 25.7 1.1 25.7 1.1 25.8V25.9L0.999997 26.1C0.999997 26.2 0.999997 26.2 0.899997 26.3C0.899997 26.4 0.899997 26.4 0.799997 26.5C0.799997 26.6 0.799997 26.7 0.699997 26.7C0.699997 26.8 0.699997 26.9 0.699997 26.9C0.699997 27 0.699997 27.1 0.699997 27.1C0.699997 27.2 0.699997 27.2 0.699997 27.3C0.699997 27.4 0.699997 27.5 0.699997 27.5C0.699997 27.6 0.699997 27.7 0.699997 27.7C0.699997 27.8 0.699997 27.9 0.799997 27.9V28V28.1C0.799997 28.2 0.799997 28.2 0.899997 28.2L0.999997 28.4C0.999997 28.5 1.1 28.5 1.1 28.5C1.1 28.5 1.1 28.5 1.1 28.6C1.2 28.7 1.3 28.9 1.5 29C1.6 29 1.6 29.1 1.7 29.1C1.7 29.1 1.8 29.1 1.8 29.2C1.8 29.2 1.8 29.2 1.9 29.2C2 29.3 2.2 29.3 2.3 29.4C2.4 29.4 2.4 29.4 2.4 29.4L2.9 29.5C3.1 29.5 3.2 29.6 3.4 29.6C4.2 29.8 4.7 30.2 4.8 30.2C6.4 31.2 7.5 33 8.9 35.5C9.5 36.6 10 37.4 10.5 38.2C11.9 40.3 13.4 41 14.4 41.1C14.5 41.1 14.5 41.1 14.6 41.1C14.7 41.1 14.8 41.1 14.8 41.1C15 41.1 15.2 41.1 15.5 41.1H15.6C17.2 40.8 18.5 39.8 18.9 39.3L19 39.2L19.8 38.6C19.8 38.6 19.9 38.5 20 38.5L30.2 30.6L41.3 22L46.5 18H46.6C46.7 18 46.9 17.9 47 17.9C47.4 17.9 47.8 18.1 48.1 18.6L48.5 19.2C48.8 19.7 49.2 20.3 49.5 20.9V21C50.1 22.1 50.8 23.4 51.7 24.6C51.7 24.6 51.7 24.7 51.8 24.7C52.1 25.1 52.4 25.5 52.7 25.8C52.7 25.8 52.8 25.8 52.8 25.9C53 26.1 53.1 26.3 53.3 26.4C53.4 26.5 53.4 26.7 53.3 26.9C52 28.5 50.4 31.1 49.6 32.4V32.5C49.2 33.2 48.7 34.1 48.2 34.9C48 35.2 47.8 35.4 47.7 35.5V40.9C48.8 40.8 50.4 40.1 51.8 37.9C52.4 37 52.9 36 53.4 35.2C53.5 35 53.7 34.7 53.8 34.5C55.2 33 56.4 30.9 58.7 30.1Z"></path></svg></div>', 1), dd = [
  ud
];
function cd(e, t, l, n, o, a) {
  return r(), p("div", null, dd);
}
const fd = /* @__PURE__ */ Uo(pd, [["render", cd]]), vd = {
  key: 0,
  class: "po-fixed po-z-[999] po-top-0 po-bottom-0 po-left-0 po-right-0 po-flex po-items-center po-justify-center"
}, md = /* @__PURE__ */ s("div", { class: "po-absolute po-w-[6.2rem] po-h-[6.2rem] po-bg-transparent po-overflow-hidden po-rounded-xl" }, [
  /* @__PURE__ */ s("div", { class: "po-loading-rotate po-absolute -po-top-8 -po-left-8 po-w-[10rem] po-h-[10rem]" })
], -1), hd = { class: "relative po-bg-white po-w-24 po-h-24 po-flex po-items-center po-justify-center po-rounded-xl po-bg-opacity-50 po-backdrop-blur po-backdrop-filter po-z-10 po-shadow-xl" }, bd = {
  key: 0,
  class: "po-absolute po-left-1 po-right-1 po-text-center po-py-1 po-text-xs po-text-mpao-blue po-bg-white po-bg-opacity-50 po-backdrop-blur po-backdrop-filter"
}, gd = {
  name: "PoLoading"
}, s0 = /* @__PURE__ */ Object.assign(gd, {
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
    return (t, l) => e.show ? (r(), p("div", vd, [
      md,
      s("div", hd, [
        e.label !== "" ? (r(), p("span", bd, b(e.label), 1)) : h("", !0),
        C(fd)
      ])
    ])) : h("", !0);
  }
}), yd = { class: "po-py-5 po-flex po-items-start po-space-x-5" }, xd = ["name", "id", "checked", "aria-describedby"], wd = { class: "po-grow -po-mt-[0.26rem]" }, Vd = ["for"], kd = { class: "po-mt-2 po-flex po-space-x-3" }, $d = ["href", "onClick"], _d = {
  name: "PoConsent"
}, r0 = /* @__PURE__ */ Object.assign(_d, {
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
    return (t, l) => (r(), p("div", yd, [
      s("input", Ee({
        type: "checkbox",
        name: `${e.id}-field`,
        id: e.id,
        checked: e.modelValue,
        "aria-describedby": `${e.id}-description`
      }, t.$attrs, {
        onInput: l[0] || (l[0] = (n) => t.$emit("update:modelValue", n.target.checked)),
        class: "po-shrink-0 po-h-4 po-w-4 po-rounded border-slate-300 po-text-mpao-lightblue focus:po-ring-mpao-lightblue"
      }), null, 16, xd),
      s("div", wd, [
        s("label", {
          class: "po-block po-select-none po-text-sm po-text-slate-600 po-cursor-pointer",
          for: e.id
        }, b(e.label), 9, Vd),
        s("div", kd, [
          (r(!0), p(j, null, I(e.links, (n) => (r(), p("a", {
            href: n.url,
            onClick: de((o) => t.$emit("button-click", n.url), ["prevent"]),
            class: "po-text-sm po-text-mpao-lightblue hover:po-text-mpao-blue"
          }, b(n.label), 9, $d))), 256))
        ])
      ])
    ]));
  }
}), Cd = { class: "po-mt-5 po-bg-slate-50 -po-mx-5 po-px-4 po-py-3 po-space-y-3" }, Sd = ["onClick"], Od = { class: "po-absolute po-bg-white po-top-4 po-right-4 po-z-10 po-text-xs po-text-slate-600 po-font-medium" }, Pd = { class: "po-shrink-0 po-pr-3 po-flex po-items-center po-border-r po-border-dashed po-border-slate-300" }, Ed = {
  key: 4,
  class: "po-w-5 po-h-5 po-fill-slate-400 po-shrink-0",
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  viewBox: "0 0 226.978 226.978"
}, Ld = /* @__PURE__ */ s("path", { d: "M199.569 25.393C181.627 7.803 152.62-.72 113.339.048 73.731.827 47.255 7.779 30.018 21.927 13.352 35.605 5.59 55.62 5.59 84.915v29.898c0 34.584 18.532 72.605 53.951 78.358 4.089.669 7.941-2.111 8.605-6.201a7.5 7.5 0 0 0-6.201-8.605c-26.861-4.363-41.355-36-41.355-63.552V84.915c0-42.006 15.565-68.347 93.043-69.871 35.125-.696 60.477 6.395 75.433 21.059 11.655 11.429 17.321 27.395 17.321 48.812v29.898c0 45.274-20.321 65.243-72.441 71.123H96.988c-1.989 0-3.897.79-5.303 2.197l-26.041 26.041a7.5 7.5 0 0 0 10.606 10.607l23.845-23.845h34.27c.276 0 .553-.015.828-.046 29.828-3.313 50.254-11.076 64.279-24.432 14.747-14.044 21.916-34.208 21.916-61.646V84.915c0-25.299-7.341-45.325-21.819-59.522z" }, null, -1), Bd = /* @__PURE__ */ s("path", { d: "M118.17 48.988h.003c12.085 0 23.447 4.707 31.993 13.253 8.547 8.547 13.254 19.911 13.253 31.998a7.5 7.5 0 0 0 7.499 7.5h.001a7.5 7.5 0 0 0 7.5-7.499c.001-16.094-6.266-31.225-17.646-42.605-11.379-11.38-26.507-17.646-42.6-17.646h-.005a7.5 7.5 0 1 0 .002 14.999z" }, null, -1), jd = /* @__PURE__ */ s("path", { d: "M118.168 75.362c10.408.002 18.877 8.47 18.878 18.877a7.5 7.5 0 0 0 7.501 7.499c4.143 0 7.5-3.359 7.499-7.501-.003-18.676-15.199-33.872-33.876-33.875h-.001a7.5 7.5 0 0 0-.001 15zM84.538 88.213a7.5 7.5 0 0 0 8.465 12.382c2.689-1.838 8.987-6.144 8.545-14.752-.28-5.152-4.927-12.508-8.776-17.772-5.63-7.702-10.482-12.341-14.391-13.779-3.65-1.359-7.467-1.388-11.353-.084-8.049 2.712-13.893 7.613-16.899 14.173-2.927 6.386-2.862 13.725.189 21.228 7.206 17.678 17.294 33.155 30.051 46.067 12.845 12.689 28.321 22.777 46.006 29.987 3.827 1.557 7.613 2.336 11.252 2.336 3.49 0 6.845-.716 9.971-2.149 6.56-3.007 11.46-8.85 14.175-16.909 1.3-3.877 1.271-7.692-.077-11.317-1.448-3.937-6.088-8.788-13.789-14.418-5.265-3.849-12.621-8.496-17.793-8.777-8.59-.432-12.892 5.855-14.73 8.544a7.5 7.5 0 0 0 12.381 8.469c.816-1.193 1.282-1.735 1.549-1.972 4.21 1.349 16.215 10.169 18.376 13.549.053.216.065.545-.135 1.144-.946 2.809-2.791 6.486-6.206 8.052-3.199 1.464-6.834.566-9.316-.443-15.847-6.461-29.682-15.466-41.058-26.703-11.301-11.439-20.306-25.274-26.763-41.115-1.012-2.488-1.911-6.125-.446-9.321 1.565-3.415 5.243-5.261 8.043-6.205.598-.2.927-.189 1.155-.134 3.381 2.165 12.196 14.163 13.546 18.374-.238.263-.779.73-1.972 1.545z" }, null, -1), Td = [
  Ld,
  Bd,
  jd
], Dd = { class: "po-grow po-space-y-2 po-pl-3 -po-mb-1" }, Nd = { class: "po-text-base po-text-slate-600 po-font-medium" }, Ad = {
  key: 0,
  class: ""
}, Md = {
  key: 0,
  class: "po-border-b po-border-slate-200 po-pb-3 po-grid po-grid-cols-2"
}, Id = ["for"], Rd = ["id", "onUpdate:modelValue", "onChange"], Fd = ["value"], zd = {
  key: 0,
  class: "po-flex po-flex-wrap"
}, Hd = { class: "po-font-medium po-text-slate-500 po-capitalize" }, qd = ["onClick"], Ud = {
  name: "PoCallLog",
  components: { ChevronDownIcon: Jt, ChevronUpIcon: Xt }
}, i0 = /* @__PURE__ */ Object.assign(Ud, {
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
    const l = e, { list: n } = be(l), o = $(null);
    function a(u, d) {
      d.details && (o.value = o.value === u ? null : u);
    }
    function i(u, d) {
      t("selectUpdated", { logId: d, selectedId: u });
    }
    return (u, d) => (r(), p("ul", Cd, [
      (r(!0), p(j, null, I(m(n), (f, v) => (r(), p("li", {
        onClick: (c) => u.$emit("button-click", f),
        class: E(["po-bg-white po-rounded-lg po-p-3 po-transition-shadow po-duration-100 po-ease-out po-shadow hover:po-shadow-lg po-flex po-item-center po-border-l-4 po-relative", f.highlightColor])
      }, [
        s("span", Od, b(f.topRightLabel), 1),
        s("div", Pd, [
          f.type === "chat" ? (r(), N(m(dl), {
            key: 0,
            class: "po-w-5 po-h-5 po-stroke-slate-400 po-shrink-0"
          })) : h("", !0),
          f.type === "email" ? (r(), N(m(hl), {
            key: 1,
            class: "po-w-5 po-h-5 po-stroke-slate-400 po-shrink-0"
          })) : h("", !0),
          f.type === "in" ? (r(), N(m(xl), {
            key: 2,
            class: "po-w-5 po-h-5 po-stroke-slate-400 po-shrink-0"
          })) : h("", !0),
          f.type === "out" ? (r(), N(m(wl), {
            key: 3,
            class: "po-w-5 po-h-5 po-stroke-slate-400 po-shrink-0"
          })) : h("", !0),
          f.type === "viber" ? (r(), p("svg", Ed, Td)) : h("", !0)
        ]),
        s("div", Dd, [
          s("h3", Nd, b(f.subject), 1),
          C(we, {
            "enter-active-class": "po-transition po-duration-100 po-ease-out",
            "enter-from-class": "po-transform po-scale-95 po-opacity-0",
            "enter-to-class": "po-transform po-scale-100 po-opacity-100",
            "leave-active-class": "po-transition po-duration-75 po-ease-out",
            "leave-from-class": "po-transform po-scale-100 po-opacity-100",
            "leave-to-class": "po-transform po-scale-95 po-opacity-0"
          }, {
            default: B(() => [
              o.value === v ? (r(), p("div", Ad, [
                e.selectFieldList !== null ? (r(), p("div", Md, [
                  s("label", {
                    for: `select-field-calllog-${v}`,
                    class: "po-text-sm po-text-slate-500"
                  }, b(e.selectFieldLabel), 9, Id),
                  Re(s("select", {
                    name: "",
                    id: `select-field-calllog-${v}`,
                    "onUpdate:modelValue": (c) => m(n)[v].selectFieldValue = c,
                    onChange: (c) => i(Number(c.target.value), f.id),
                    class: "po-border-none focus:po-ring-0 po-bg-slate-100 po-rounded-md po-text-sm po-text-slate-700"
                  }, [
                    (r(!0), p(j, null, I(e.selectFieldList, (c) => (r(), p("option", {
                      value: c.id
                    }, b(c.name), 9, Fd))), 256))
                  ], 40, Rd), [
                    [
                      tl,
                      m(n)[v].selectFieldValue,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ])) : h("", !0),
                C(qo, {
                  items: f.details
                }, null, 8, ["items"])
              ])) : h("", !0)
            ]),
            _: 2
          }, 1024),
          o.value !== v ? (r(), p("div", zd, [
            (r(!0), p(j, null, I(f.meta, (c, w) => (r(), p("p", {
              class: "po-text-xs po-space-x-2 po-mr-5 po-mb-2",
              key: w
            }, [
              s("span", Hd, b(c.label), 1),
              s("span", {
                class: E(["po-text-slate-500 po-px-[0.2em] po-rounded-md", c.color])
              }, b(c.description), 3)
            ]))), 128))
          ])) : h("", !0),
          s("span", {
            role: "button",
            onClick: (c) => a(v, f),
            class: "po-block po-bg-slate-50 po-rounded-md po-p-2 hover:po-bg-slate-100"
          }, [
            o.value !== v ? (r(), N(m(Jt), {
              key: 0,
              class: "po-w-4 po-mx-auto po-stroke-slate-400 po-stroke-2"
            })) : (r(), N(m(Xt), {
              key: 1,
              class: "po-w-4 po-mx-auto po-stroke-slate-400 po-stroke-2"
            }))
          ], 8, qd)
        ])
      ], 10, Sd))), 256))
    ]));
  }
}), Gd = {
  class: "po-flex po-bg-slate-50 po-rounded-t-xl po-justify-center lg:po-justify-start po-px-4 po-pt-4 xl:po-pt-2 po-flex-wrap po-overflow-hidden",
  "aria-label": "Tabs"
}, Wd = ["onClick", "aria-current"], Kd = { key: 0 }, Zd = {
  name: "PoCardTabs"
}, p0 = /* @__PURE__ */ Object.assign(Zd, {
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
    return (n, o) => (r(), p("nav", Gd, [
      (r(!0), p(j, null, I(e.tabs, (a) => (r(), p("span", {
        role: "button",
        onClick: (i) => n.$emit("button-click", a),
        key: a.name,
        class: E([
          a.current ? "po-bg-white po-text-slate-600 po-shadow-lg" : "po-text-slate-600 hover:po-text-mpao-blue",
          "po-px-4 po-py-3 po-font-medium po-mr-4 po-mb-4 xl:po-mb-0 po-text-sm po-cursor-pointer po-rounded-xl xl:po-rounded-b-none genie-effect hover:po-text-slate-600 hover:po-bg-white hover:po-shadow-md po-flex po-items-center po-flex-shrink-0 po-space-x-2"
        ]),
        "aria-current": a.current ? "page" : void 0
      }, [
        a.icon ? (r(), N(ye(a.icon), {
          key: 0,
          class: E(["po-w-5 po-h-5", [l(a)]])
        }, null, 8, ["class"])) : h("", !0),
        s("span", null, [
          ae(b(a.name), 1),
          a.count ? (r(), p("span", Kd, " (" + b(a.count) + ")", 1)) : h("", !0)
        ])
      ], 10, Wd))), 128))
    ]));
  }
}), Qd = { class: "sm:po-hidden" }, Yd = /* @__PURE__ */ s("label", {
  for: "tabs",
  class: "po-sr-only"
}, "Select a tab", -1), Jd = {
  id: "tabs",
  name: "tabs",
  class: "po-block po-w-full po-rounded-md po-border-gray-300 focus:po-border-indigo-500 focus:po-ring-indigo-500"
}, Xd = ["selected"], ec = { class: "po-hidden sm:po-block" }, tc = {
  class: "po-flex po-space-x-4 po-pt-2",
  "aria-label": "Tabs"
}, oc = ["onClick", "aria-current"], lc = {
  name: "PoTabs"
}, u0 = /* @__PURE__ */ Object.assign(lc, {
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
    function n(a) {
      return a.iconColor ? a.iconColor : "po-fill-current";
    }
    const o = S(() => l.tabs.forEach((a) => {
      a.name === l.currentTab && (a.current = !0);
    }));
    return (a, i) => (r(), p(j, null, [
      s("div", Qd, [
        Yd,
        s("select", Jd, [
          (r(!0), p(j, null, I(m(o), (u) => (r(), p("option", {
            key: u.name,
            selected: u.current
          }, b(u.name), 9, Xd))), 128))
        ])
      ]),
      s("div", ec, [
        s("nav", tc, [
          (r(!0), p(j, null, I(e.tabs, (u) => (r(), p("span", {
            onClick: (d) => a.$emit("button-click", u),
            role: "button",
            key: u.name,
            class: E([
              u.current ? "po-bg-white po-text-slate-600 po-shadow-md" : "po-bg-slate-50 po-text-slate-600 hover:po-text-mpao-blue",
              "po-px-4 po-relative po-group po-py-3 po-font-medium po-text-sm po-cursor-pointer po-rounded-xl genie-effect hover:po-text-slate-600 hover:po-bg-white hover:po-shadow-md po-flex po-items-center po-space-x-2"
            ]),
            "aria-current": u.current ? "page" : void 0
          }, [
            u.icon ? (r(), N(ye(u.icon), {
              key: 0,
              class: E(["po-w-5 po-h-5", [n(u)]])
            }, null, 8, ["class"])) : h("", !0),
            s("span", null, [
              s("span", null, b(u.name), 1),
              u.count && u.count > 0 ? (r(), p("span", {
                key: 0,
                class: E(["po-absolute po-py-1 po-px-2 po-rounded-full po-text-xs -po-top-3 -po-right-2 po-shadow-md po-flex po-items-center po-justify-center", [
                  u.current ? "po-bg-mpao-orange po-text-white" : "po-bg-slate-400 po-text-white group-hover:po-bg-mpao-orange group-hover:po-text-white"
                ]])
              }, [
                s("span", null, b(u.count), 1)
              ], 2)) : h("", !0)
            ])
          ], 10, oc))), 128))
        ])
      ])
    ], 64));
  }
}), nc = { class: "po-mt-5 po-flex po-flex-col po-items-center po-justify-center po-px-5 po-py-8" }, ac = {
  key: 1,
  class: "po-text-base po-font-medium po-text-slate-600 po-text-center"
}, sc = {
  key: 2,
  class: "po-text-sm po-text-slate-500 po-text-center po-max-w-lg po-block po-mx-auto"
}, rc = {
  name: "PoEmpty"
}, d0 = /* @__PURE__ */ Object.assign(rc, {
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
    return (t, l) => (r(), p("div", nc, [
      s("div", {
        class: E(["po-space-y-2 po-flex po-items-center po-flex-col po-justify-center", [{ "po-mb-5": t.$slots.action }]])
      }, [
        e.icon ? (r(), N(ye(e.icon), {
          key: 0,
          class: E(["po-w-10 po-h-10", e.iconColor])
        }, null, 8, ["class"])) : h("", !0),
        e.label !== "" ? (r(), p("span", ac, b(e.label), 1)) : h("", !0),
        e.description !== "" ? (r(), p("span", sc, b(e.description), 1)) : h("", !0)
      ], 2),
      ee(t.$slots, "action")
    ]));
  }
});
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const pt = () => !1;
function ic(e) {
  throw e;
}
function pc(e) {
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
const uc = /&(gt|lt|amp|apos|quot);/g, dc = {
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
const cc = { class: "po-flex po-text-sm po-text-gray-700 po-flex-col po-space-y-5" }, fc = {
  key: 0,
  class: "po-text-base po-font-medium po-text-slate-700"
}, vc = {
  key: 1,
  class: "po-border po-border-orange-300 po-bg-orange-50 po-rounded-lg po-p-5 po-flex po-items-center po-space-x-3"
}, mc = { class: "po-grow po-text-sm po-text-slate-600" }, hc = {
  key: 2,
  class: "po-border po-border-red-300 po-bg-red-50 po-rounded-lg po-p-5 po-flex po-space-x-4"
}, bc = { class: "po-grow" }, gc = { class: "po-text-base po-text-slate-700 po-font-medium" }, yc = { class: "po-text-sm po-text-slate-600" }, xc = { class: "po-font-medium" }, wc = { key: 0 }, Vc = { key: 0 }, kc = /* @__PURE__ */ s("dt", null, "Name", -1), $c = { key: 1 }, _c = /* @__PURE__ */ s("dt", null, "Identifer", -1), Cc = { key: 2 }, Sc = /* @__PURE__ */ s("dt", null, "Date of birth", -1), Oc = { key: 3 }, Pc = /* @__PURE__ */ s("dt", null, "Reported Date of death", -1), Ec = {
  key: 3,
  class: "po-pt-5"
}, Lc = { class: "po-flex po-items-center po-space-x-1" }, Bc = /* @__PURE__ */ s("span", null, "File a dispute.", -1), jc = {
  name: "PoDRStatus"
}, c0 = /* @__PURE__ */ Object.assign(jc, {
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
    return (n, o) => (r(), p("span", cc, [
      e.record !== null ? (r(), p("h2", fc, " Death was reported by " + b(e.record.institution), 1)) : h("", !0),
      e.request !== null && e.request.type_id === 1 ? (r(), p("div", vc, [
        C(m(ut), { class: "po-shrink-0 po-w-6 po-stroke-orange-600" }),
        s("span", mc, " This is a " + b(e.request.type) + " request and is in " + b(e.request.state) + " state. ", 1)
      ])) : h("", !0),
      e.request !== null && e.request.type_id !== 1 ? (r(), p("div", hc, [
        C(m(ut), { class: "po-shrink-0 po-w-6 po-h-6 po-stroke-red-600 po-stroke-2" }),
        s("div", bc, [
          s("h3", gc, b(e.request.type), 1),
          s("p", yc, [
            ae(" The following " + b(e.request.type) + " was reported: ", 1),
            s("span", xc, [
              ae(b(e.request.dispute_type), 1),
              e.request.date_of_death ? (r(), p("span", wc, " (New date: " + b(e.request.date_of_death) + ")", 1)) : h("", !0)
            ])
          ])
        ])
      ])) : h("", !0),
      C(qo, null, {
        content: B(() => [
          e.member !== null ? (r(), p("div", Vc, [
            kc,
            s("dd", null, b(e.member.name), 1)
          ])) : h("", !0),
          e.member !== null ? (r(), p("div", $c, [
            _c,
            s("dd", null, b(e.member.identifier), 1)
          ])) : h("", !0),
          e.member !== null ? (r(), p("div", Cc, [
            Sc,
            s("dd", null, b(e.member.dob), 1)
          ])) : h("", !0),
          e.record !== null ? (r(), p("div", Oc, [
            Pc,
            s("dd", null, b(e.record.date_of_death), 1)
          ])) : h("", !0)
        ]),
        _: 1
      }),
      e.request === null ? (r(), p("span", Ec, [
        C(Nt, {
          type: "simple",
          onButtonClick: l
        }, {
          label: B(() => [
            s("span", Lc, [
              C(m(il), { class: "po-w-4 po-h-4 po-stroke-current" }),
              Bc
            ])
          ]),
          _: 1
        })
      ])) : h("", !0)
    ]));
  }
}), Tc = {
  key: 0,
  role: "button",
  class: "po-w-6 po-h-6 po-rounded-lg po-bg-white genie-effect po-flex po-items-center po-justify-center hover:po-bg-slate-50 po-cursor-pointer"
}, Dc = {
  name: "PoTableAction"
}, f0 = /* @__PURE__ */ Object.assign(Dc, {
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
    const t = e, l = $(), n = $();
    return t.btnType === "view" ? l.value = bl : t.btnType === "edit" ? l.value = yl : t.btnType === "delete" ? l.value = kl : t.btnType === "icon" && t.btnIcon && (l.value = t.btnIcon), t.btnType === "view" ? n.value = "po-stroke-emerald-400" : t.btnType === "edit" ? n.value = "po-stroke-blue-400" : t.btnType === "delete" ? n.value = "po-stroke-red-400" : n.value = t.iconColor, (o, a) => (r(), p("span", null, [
      e.btnType === "icon" || e.btnType === "delete" || e.btnType === "edit" || e.btnType === "view" ? (r(), p("span", Tc, [
        (r(), N(ye(l.value), {
          class: E(["po-w-4 po-stroke-2", n.value])
        }, null, 8, ["class"]))
      ])) : (r(), p("span", {
        key: 1,
        role: "button",
        class: E(["po-block po-text-sm genie-effect", e.textColor])
      }, b(e.label), 3))
    ]));
  }
}), Nc = { key: 0 }, Ac = {
  name: "Rufiyaa"
}, v0 = /* @__PURE__ */ Object.assign(Ac, {
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
      e.amount !== null ? (r(), p("span", Nc, b(t(e.amount)), 1)) : h("", !0)
    ]));
  }
}), Mc = {
  name: "PoHeading"
}, m0 = /* @__PURE__ */ Object.assign(Mc, {
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
    return (t, l) => (r(), N(ye(e.type), { class: "po-text-base po-text-slate-600 po-font-semibold" }, {
      default: B(() => [
        ae(b(e.text), 1)
      ]),
      _: 1
    }));
  }
});
function Ic(e, t) {
  if (!e)
    return;
  const l = (n) => {
    n.target !== e.value && n.composedPath().includes(e.value) || typeof t == "function" && t();
  };
  return H(() => {
    window.addEventListener("click", l);
  }), yt(() => {
    window.removeEventListener("click", l);
  }), { listener: l };
}
const Rc = ["for"], Fc = { class: "po-capitalize" }, zc = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Hc = ["title"], qc = { class: "po-relative po-mt-1" }, Uc = {
  key: 0,
  class: "po-shrink-0 po-pr-1 po-inline-flex po-flex-wrap po-max-h-44"
}, Gc = { class: "po-px-2 po-py-1 po-mb-1 po-mr-1 po-rounded-md po-text-sm po-text-white po-flex po-space-x-2 po-items-center po-bg-mpao-lightblue" }, Wc = ["onClick"], Kc = ["id"], Zc = {
  key: 0,
  class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
}, Qc = ["onClick", "value"], Yc = {
  class: /* @__PURE__ */ E(["po-block po-truncate"])
}, Jc = ["id"], Xc = ["id"], e1 = {
  name: "PoMultiSelect",
  components: { CheckIcon: fl }
}, h0 = /* @__PURE__ */ Object.assign(e1, {
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
    const o = $(""), a = $([]);
    function i(V) {
      a.value.splice(V, 1), f();
    }
    function u(V) {
      let g = o.value.split(",");
      V.key === "Enter" && 0 < o.value.length && (V.preventDefault(), g.forEach((y) => {
        let k = l.items.find(
          (_) => _.name.toLowerCase() === y.trim().toLowerCase()
        );
        k && a.value.push(k);
      }), o.value = ""), V.key === "Backspace" && o.value.length === 0 && a.value.pop(), f();
    }
    const d = $([]);
    function f() {
      d.value = a.value.map((V) => V.id);
    }
    H(() => {
      document.addEventListener("keydown", u);
    }), se(() => {
      document.removeEventListener("keydown", u);
    });
    const v = $(!1), c = S(
      () => o.value === "" ? l.items : l.items.filter((V) => V.name.toLowerCase().includes(o.value.toLowerCase()))
    );
    let w = $();
    Ic(w, () => {
      v.value = !1;
    });
    function x(V) {
      a.value.push(V), o.value = "", f();
    }
    return Z(d, () => {
      t("update:modelValue", d.value);
    }), (V, g) => (r(), p("div", {
      ref_key: "multiSelectComponentRef",
      ref: w,
      class: E(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      s("label", {
        for: e.id,
        class: E([
          "po-text-sm po-font-medium po-flex po-items-center po-space-x-1",
          { "po-text-red-500": e.hasError },
          { "po-text-slate-700": !e.hasError }
        ])
      }, [
        s("span", Fc, b(e.label), 1),
        e.required ? (r(), p("span", zc, "*")) : h("", !0),
        e.info !== null ? (r(), p("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          C(m(Ho), { class: "po-fill-current" })
        ], 8, Hc)) : h("", !0)
      ], 10, Rc),
      s("div", qc, [
        s("div", {
          class: E([
            "po-border po-p-1 po-min-h-[2.38rem] po-flex po-flex-wrap po-items-center focus-within:po-border-mpao-lightblue po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white sm:po-text-sm",
            n()
          ])
        }, [
          a.value.length > 0 ? (r(), p("div", Uc, [
            (r(!0), p(j, null, I(a.value, (y, k) => (r(), p("span", Gc, [
              s("span", null, b(y.name), 1),
              s("span", {
                onClick: () => i(k),
                class: "po-rounded-full po-bg-white po-flex po-items-center po-justify-center po-w-4 po-h-4 po-cursor-pointer"
              }, [
                C(m(Mt), { class: "po-w-3 po-fill-mpao-lightblue" })
              ], 8, Wc)
            ]))), 256))
          ])) : h("", !0),
          Re(s("input", {
            id: e.id,
            "onUpdate:modelValue": g[0] || (g[0] = (y) => o.value = y),
            onFocus: g[1] || (g[1] = () => v.value = !0),
            class: "po-border-0 po-outline-none po-ring-0 po-grow"
          }, null, 40, Kc), [
            [ht, o.value]
          ])
        ], 2),
        v.value ? (r(), p("ul", Zc, [
          (r(!0), p(j, null, I(m(c), (y) => (r(), p("li", {
            onClick: () => x(y),
            key: y.id,
            value: y.id,
            class: E([
              "po-relative po-select-none po-py-2 hover:po-bg-mpao-lightblue hover:po-text-white po-cursor-pointer po-pl-3 po-pr-9"
            ])
          }, [
            s("span", Yc, b(y.name), 1)
          ], 8, Qc))), 128))
        ])) : h("", !0)
      ]),
      e.message !== null ? (r(), p("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, b(e.message), 9, Jc)) : h("", !0),
      e.hasError && e.errorMessage !== null ? (r(), p("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-center po-space-x-1",
        id: `${e.id}-error`
      }, [
        C(m(Vs), { class: "po-fill-current po-w-4" }),
        s("span", null, b(e.errorMessage), 1)
      ], 8, Xc)) : h("", !0)
    ], 2));
  }
}), t1 = { class: "po-flex po-pl-5" }, o1 = /* @__PURE__ */ s("div", { class: "po-shrink-0 po-flex po-flex-col" }, [
  /* @__PURE__ */ s("div", { class: "po-w-[2px] po-shrink-0 po-h-10" }),
  /* @__PURE__ */ s("div", { class: "po-bg-gradient-to-t po-from-orange-400 po-via-red-300 po-to-blue-500 po-w-[2px] po-grow" }),
  /* @__PURE__ */ s("div", { class: "po-w-[2px] po-shrink-0 po-h-12" })
], -1), l1 = { class: "po-grow po-pl-5 po-pt-5 po-space-y-3" }, n1 = ["onClick"], a1 = { class: "-po-mt-1 po-flex po-space-x-3 po-items-center" }, s1 = { class: "po-block po-text-xs po-text-slate-400" }, r1 = { class: "po-text-xs po-text-slate-500 po-pt-1" }, i1 = {
  name: "PoTimeline"
}, b0 = /* @__PURE__ */ Object.assign(i1, {
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
    return (l, n) => (r(), p("div", t1, [
      o1,
      s("div", l1, [
        (r(!0), p(j, null, I(e.timeline, (o) => (r(), p("div", {
          class: E(["po-px-2 po-pt-2 po-pb-6 po-relative po-group", [{ "po-cursor-pointer": e.clickable }]]),
          onClick: (a) => l.$emit("button-click", o)
        }, [
          s("span", {
            class: E(["po-rounded-full po-absolute po-flex po-items-center po-justify-center", [
              { "po-w-4 po-h-4 -po-left-[1.8rem] po-bg-blue-400": o.current },
              {
                "po-w-3 po-h-3 -po-left-[1.68rem] po-bg-green-400": !o.current
              }
            ]])
          }, [
            s("span", {
              class: E(["po-rounded-full po-bg-white", [
                { "po-w-2 po-h-2": o.current },
                { "po-w-1 po-h-1": !o.current }
              ]])
            }, null, 2)
          ], 2),
          s("div", null, [
            s("div", a1, [
              s("h4", {
                class: E(["po-text-sm po-text-slate-600 po-font-medium", [{ "group-hover:po-text-mpao-lightblue": e.clickable }]])
              }, b(o.label), 3),
              s("span", s1, b(m(ol)(o.date)), 1)
            ]),
            s("p", r1, b(o.description), 1)
          ])
        ], 10, n1))), 256))
      ])
    ]));
  }
}), p1 = {
  name: "PoTableCheckbox"
}, g0 = /* @__PURE__ */ Object.assign(p1, {
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
    return (l, n) => (r(), p(j, null, [
      e.isChecked ? (r(), N(m(ps), {
        key: 0,
        onClick: n[0] || (n[0] = de(() => l.$emit("checkboxClicked", e.itemId), ["prevent"])),
        class: "po-w-6 po-fill-mpao-lightblue"
      })) : h("", !0),
      e.isChecked ? h("", !0) : (r(), p("span", {
        key: 1,
        onClick: n[1] || (n[1] = de(() => l.$emit("checkboxClicked", e.itemId), ["prevent"])),
        class: "po-h-5 po-w-5 po-rounded-full po-border-2 po-ml-[2px] po-block po-border-slate-300"
      }))
    ], 64));
  }
}), u1 = {
  key: 0,
  class: "po-pointer-events-auto po-w-full po-max-w-[260px] po-overflow-hidden po-rounded-lg po-bg-gray-900 po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5"
}, d1 = { class: "po-p-4" }, c1 = { class: "po-flex po-items-center po-space-x-3" }, f1 = /* @__PURE__ */ s("span", { class: "po-sr-only" }, "Action icon", -1), v1 = { class: "po-w-0 po-flex-1 po-text-sm po-font-medium po-text-gray-400" }, m1 = { class: "po-ml-4 po-flex po-flex-shrink-0" }, h1 = /* @__PURE__ */ s("span", { class: "po-sr-only" }, "Close", -1), b1 = {
  name: "PoToast"
}, y0 = /* @__PURE__ */ Object.assign(b1, {
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
    const l = e, { show: n } = be(l), o = $(!1);
    Z(n, () => {
      o.value = n.value;
    });
    function a() {
      o.value = !1, t("toast-closed", !0);
    }
    setTimeout(() => {
      a();
    }, l.hideIn);
    const i = S(() => l.message === "" && l.actionType !== "" ? l.actionType === "success" ? "Saved Successfully!" : l.actionType === "danger" ? "Item deleted!" : l.actionType === "warn" ? "Attention needed!" : "Wrong action" : l.message);
    return (u, d) => (r(), N(We, { to: "#po-notifications-alert" }, [
      C(we, {
        "enter-active-class": "po-transform po-ease-out po-duration-300 po-transition",
        "enter-from-class": "po-translate-y-2 po-opacity-0 sm:po-translate-y-0 sm:po-translate-x-2",
        "enter-to-class": "po-translate-y-0 po-opacity-100 sm:po-translate-x-0",
        "leave-active-class": "po-transition po-ease-in po-duration-100",
        "leave-from-class": "po-opacity-100",
        "leave-to-class": "po-opacity-0"
      }, {
        default: B(() => [
          o.value ? (r(), p("div", u1, [
            s("div", d1, [
              s("div", c1, [
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
                  e.actionType === "success" ? (r(), N(m(Fo), {
                    key: 0,
                    class: "po-w-5 po-h-5"
                  })) : h("", !0),
                  e.actionType === "danger" ? (r(), N(m(cs), {
                    key: 1,
                    class: "po-w-5 po-h-5"
                  })) : h("", !0),
                  e.actionType === "warn" ? (r(), N(m(zo), {
                    key: 2,
                    class: "po-w-5 po-h-5"
                  })) : h("", !0),
                  f1
                ], 2)) : h("", !0),
                s("p", v1, b(m(i)), 1),
                s("div", m1, [
                  s("button", {
                    type: "button",
                    onClick: a,
                    class: "po-inline-flex po-rounded-md po-bg-gray-900 po-text-gray-400 hover:po-text-gray-300 hover:po-bg-gray-700 po-transition-colors po-duration-150 po-ease-out focus:po-outline-none focus:po-ring-2 focus:po-ring-indigo-500 focus:po-ring-offset-2"
                  }, [
                    h1,
                    C(m(Mt), {
                      class: "po-h-5 po-w-5",
                      "aria-hidden": "true"
                    })
                  ])
                ])
              ])
            ])
          ])) : h("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), g1 = {
  for: "",
  class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700"
}, y1 = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, x1 = ["title"], w1 = { class: "po-relative po-mt-1" }, V1 = {
  key: 1,
  class: "po-absolute po-top-0 po-left-0 po-right-0 po-bottom-0 po-overflow-hidden po-bg-white po-rounded-md po-border po-border-slate-300 po-flex po-items-center"
}, k1 = { class: "po-grow" }, $1 = {
  key: 0,
  class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
}, _1 = ["onClick"], C1 = {
  key: 0,
  class: "po-text-sm po-text-slate-600 po-p-4 po-block"
}, S1 = {
  key: 1,
  class: "po-mt-2 po-text-sm po-text-slate-500",
  id: "-description"
}, O1 = {
  key: 2,
  class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
  id: "-error"
}, P1 = {
  name: "PoSelectApi",
  components: { XMarkIcon: Ke }
}, x0 = /* @__PURE__ */ Object.assign(P1, {
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
    const l = $(null), n = $(!1);
    S(() => {
      if (l.value) {
        const c = document.querySelector(".shell-content--area"), { top: w } = c.getBoundingClientRect(), x = c.scrollTop, { top: V, left: g, width: y } = l.value.getBoundingClientRect();
        return { relativeTop: V - w + x, left: g, width: y };
      }
    });
    const o = $(null);
    $(null);
    const a = (c) => {
      !o.value.contains(c.target) && !l.value.contains(c.target) && (n.value = !1);
    };
    H(() => {
      document.addEventListener("click", a);
    }), yt(() => {
      document.removeEventListener("click", a);
    });
    const i = $();
    function u() {
      t("search", i.value);
    }
    const d = $(null);
    function f(c) {
      d.value = c, t("selected", c), n.value = !1;
    }
    function v() {
      t("loadmore", !0);
    }
    return (c, w) => (r(), p("div", {
      ref_key: "containerRef",
      ref: o,
      class: E(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      s("label", g1, [
        s("span", null, b(e.label), 1),
        e.required ? (r(), p("span", y1, "*")) : h("", !0),
        e.info !== null ? (r(), p("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          C(m(At), { class: "po-fill-current" })
        ], 8, x1)) : h("", !0)
      ]),
      s("div", w1, [
        s("div", null, [
          e.loading ? (r(), N(Dt, {
            key: 0,
            class: "po-right-0 po-top-4",
            absolute: !0
          })) : h("", !0),
          d.value !== null ? (r(), p("div", V1, [
            s("div", k1, [
              ee(c.$slots, "selectedOption", Me(Ie(d.value)), () => [
                ae(b(d.value), 1)
              ])
            ]),
            s("span", {
              class: "po-shrink-0 po-p-1 po-cursor-pointer",
              onClick: w[0] || (w[0] = (x) => {
                d.value = null, i.value = "";
              })
            }, [
              C(m(Ke), { class: "po-w-4 po-stroke-2 po-stroke-slate-400" })
            ])
          ])) : h("", !0),
          Re(s("input", {
            type: "text",
            name: "",
            id: "",
            ref_key: "selectBox",
            ref: l,
            "onUpdate:modelValue": w[1] || (w[1] = (x) => i.value = x),
            onInput: u,
            onFocus: w[2] || (w[2] = (x) => n.value = !0),
            class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm"
          }, null, 544), [
            [ht, i.value]
          ])
        ]),
        n.value && e.options.length > 0 || n.value && e.emptyMessage ? (r(), p("div", $1, [
          e.options && e.options.length > 0 ? (r(), p(j, { key: 0 }, [
            (r(!0), p(j, null, I(e.options, (x) => (r(), p("div", {
              onClick: (V) => f(x)
            }, [
              ee(c.$slots, "option", Me(Ie(x)), () => [
                ae(b(x), 1)
              ])
            ], 8, _1))), 256)),
            e.showMoreBtn ? (r(), p("span", {
              key: 0,
              role: "button",
              onClick: v,
              class: "po-text-sm po-text-semibold po-text-mpao-lightblue po-block po-text-center po-py-2 hover:po-bg-slate-50 po-transition-colors po-duration-150 po-ease-out"
            }, "More")) : h("", !0)
          ], 64)) : (r(), p(j, { key: 1 }, [
            e.emptyMessage ? (r(), p("span", C1, b(e.emptyMessage), 1)) : h("", !0)
          ], 64))
        ])) : h("", !0),
        e.message !== null ? (r(), p("p", S1, b(e.message), 1)) : h("", !0),
        e.errorMessage !== null ? (r(), p("p", O1, [
          s("span", null, b(e.errorMessage), 1)
        ])) : h("", !0)
      ])
    ], 2));
  }
});
export {
  A1 as PoActionBar,
  o0 as PoAlert,
  Il as PoAppIcon,
  ua as PoAppTray,
  Nt as PoButton,
  i0 as PoCallLog,
  M1 as PoCard,
  I1 as PoCardSearch,
  p0 as PoCardTabs,
  J1 as PoChatLogItem,
  K1 as PoCheckbox,
  t0 as PoCommandPalette,
  r0 as PoConsent,
  a0 as PoContentArea,
  c0 as PoDRStatus,
  qo as PoDescriptionList,
  n0 as PoDownloadFileList,
  z1 as PoDynamicTable,
  d0 as PoEmpty,
  Z1 as PoFooter,
  Q1 as PoFormStatusMessage,
  m0 as PoHeading,
  H1 as PoInputField,
  q1 as PoInputFile,
  s0 as PoLoading,
  l0 as PoLogs,
  No as PoModal,
  h0 as PoMultiSelect,
  X1 as PoNotification,
  Va as PoNotificationHub,
  R1 as PoPageTitle,
  xr as PoPagination,
  Ka as PoProfileSwitcher,
  xs as PoRadioInput,
  ql as PoSearchBar,
  W1 as PoSectionMenu,
  x0 as PoSelectApi,
  U1 as PoSelectField,
  N1 as PoSidebarDrawer,
  e0 as PoSlideover,
  Y1 as PoStatsBlock,
  F1 as PoTable,
  f0 as PoTableAction,
  g0 as PoTableCheckbox,
  u0 as PoTabs,
  Bs as PoTextarea,
  b0 as PoTimeline,
  y0 as PoToast,
  G1 as PoToggle,
  T1 as PoTopBar,
  v0 as Rufiyaa
};
