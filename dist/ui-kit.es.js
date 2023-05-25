import { openBlock as r, createElementBlock as p, createElementVNode as s, ref as $, toRefs as be, watch as Z, Fragment as B, createVNode as S, unref as m, withCtx as j, renderSlot as te, createBlock as D, resolveDynamicComponent as ye, createCommentVNode as b, computed as C, toDisplayString as h, onMounted as H, onUnmounted as se, withDirectives as Me, isRef as Wo, vModelText as ht, cloneVNode as Ko, h as J, inject as re, provide as ie, watchEffect as le, defineComponent as U, toRaw as K, nextTick as ke, Teleport as We, reactive as Zo, shallowRef as Yt, normalizeClass as E, renderList as I, Transition as we, withModifiers as de, onBeforeMount as Qo, onBeforeUpdate as Yo, onUpdated as bt, mergeProps as Ee, createTextVNode as ae, normalizeProps as Ue, guardReactiveProps as Ge, normalizeStyle as gt, vModelCheckbox as Jo, onBeforeUnmount as yt, createStaticVNode as Xo, vModelSelect as el } from "vue";
import { f as tl } from "./FormatDate-a57abfa8.mjs";
function ol(e, t) {
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
      d: "M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
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
      d: "M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
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
      d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
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
      d: "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
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
      d: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
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
      d: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
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
      d: "M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
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
      d: "M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
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
      d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
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
      d: "M15.75 19.5L8.25 12l7.5-7.5"
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
      d: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
    }),
    s("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
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
      d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
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
      d: "M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
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
      d: "M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
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
      d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
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
      d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
    })
  ]);
}
function Ft(e, t) {
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
const kl = /* @__PURE__ */ s("div", {
  "aria-live": "assertive",
  class: "po-pointer-events-none po-fixed po-inset-0 po-flex po-items-start po-px-4 po-py-6 sm:po-p-6 po-z-[60]"
}, [
  /* @__PURE__ */ s("div", {
    class: "po-flex po-w-full po-flex-col po-items-end po-space-y-4 sm:po-items-end po-pt-[55px]",
    id: "po-notifications-alert"
  })
], -1), $l = { class: "po-bg-mpao-blue po-fixed po-top-0 po-w-full po-z-50 po-flex" }, _l = { class: "po-shrink-0 po-px-3 po-pt-3" }, Cl = {
  for: "sidebar-drawer-toggle",
  role: "button",
  class: "genie-effect po-flex po-items-center po-justify-center po-bg-[#2e5266] po-rounded-full po-w-10 po-h-10 po-select-none po-text-slate-100"
}, Sl = { class: "po-mx-auto po-max-w-full po-pr-4 po-grow sm:po-pr-4" }, Ol = { class: "po-flex po-relative po-h-16 po-items-center po-justify-between po-space-x-12" }, Pl = { class: "po-flex po-items-center po-space-x-3" }, El = {
  key: 0,
  class: "po-block po-w-6 po-text-slate-100 md:po-hidden",
  role: "button"
}, Ll = {
  name: "PoTopBar"
}, P1 = /* @__PURE__ */ Object.assign(Ll, {
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
    function u(c) {
      t("profileSwitcherClick", c);
    }
    function d(c) {
      t("query", c);
    }
    function v(c) {
      t("onSearchClear", c);
    }
    return (c, f) => (r(), p(B, null, [
      kl,
      s("nav", $l, [
        s("div", _l, [
          s("label", Cl, [
            S(m(al), { class: "po-w-6 po-fill-current" })
          ])
        ]),
        s("div", Sl, [
          s("div", Ol, [
            S(m(Ml), { "app-name": e.appName }, {
              icon: j(() => [
                te(c.$slots, "appIcon", {}, () => [
                  e.appIcon ? (r(), D(ye(e.appIcon), { key: 0 })) : b("", !0)
                ])
              ]),
              _: 3
            }, 8, ["app-name"]),
            e.hasSearch ? (r(), D(m(Hl), {
              key: 0,
              onQuery: d,
              onOnClear: v,
              "current-query": e.currentQuery
            }, null, 8, ["current-query"])) : b("", !0),
            s("div", Pl, [
              e.hasSearch ? (r(), p("span", El, [
                S(m(xt), { class: "po-stroke-current" })
              ])) : b("", !0),
              S(m(wa), {
                notifications: e.notifications,
                "has-new-notifications": e.hasNewNotifications
              }, null, 8, ["notifications", "has-new-notifications"]),
              S(m(pa), {
                "app-list": e.appList,
                "open-in-new-tab": !0
              }, null, 8, ["app-list"]),
              S(m(Wa), {
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
}), jl = { class: "po-flex po-items-center po-justify-center po-space-x-3" }, Bl = { class: "po-w-8 po-text-slate-100 app-icon" }, Tl = { class: "po-font-light po-text-lg po-text-slate-100" }, Nl = { class: "po-hidden md:po-block" }, Dl = { class: "po-block md:po-hidden" }, Al = {
  name: "PoAppIcon"
}, Ml = /* @__PURE__ */ Object.assign(Al, {
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
    return (n, o) => (r(), p("div", jl, [
      s("div", Bl, [
        te(n.$slots, "icon")
      ]),
      s("span", Tl, [
        s("span", Nl, h(e.appName), 1),
        s("span", Dl, h(m(l)), 1)
      ])
    ]));
  }
}), Il = { class: "po-flex-grow po-hidden po-relative md:po-block" }, Fl = ["placeholder"], Rl = { class: "po-absolute po-inset-y-0 po-left-0 po-flex po-items-center po-pl-3 po-pointer-events-none po-transition-all po-ease-linear po-duration-100 po-text-slate-400 po-origin-center peer-hover/search:po-scale-105 peer-focus/search:po-text-slate-100" }, zl = {
  name: "PoSearchBar"
}, Hl = /* @__PURE__ */ Object.assign(zl, {
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
    }), (a, i) => (r(), p("div", Il, [
      Me(s("input", {
        "onUpdate:modelValue": i[0] || (i[0] = (u) => Wo(n) ? n.value = u : n = u),
        type: "text",
        id: "main-search",
        placeholder: e.placeholder,
        class: "peer/search po-bg-transparent po-border po-border-transparent po-text-slate-100 po-text-sm po-rounded-md po-ring-0 po-outline-none focus:po-outline-none focus:po-ring-0 po-transition-colors po-ease-linear po-duration-100 po-block po-w-full po-pl-10 po-p-2.5 po-appearance-none focus:po-border-slate-400 hover:po-border-slate-600"
      }, null, 8, Fl), [
        [ht, m(n)]
      ]),
      s("div", Rl, [
        S(m(xt), { class: "po-w-5 po-h-5 po-stroke-current" })
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
  let { as: u, ...d } = Te(e, ["unmount", "static"]), v = (a = l.default) == null ? void 0 : a.call(l, n), c = {};
  if (n) {
    let f = !1, V = [];
    for (let [x, w] of Object.entries(n))
      typeof w == "boolean" && (f = !0), w === !0 && V.push(x);
    f && (c["data-headlessui-state"] = V.join(" "));
  }
  if (u === "template") {
    if (v = to(v ?? []), Object.keys(d).length > 0 || Object.keys(t).length > 0) {
      let [f, ...V] = v ?? [];
      if (!ql(f) || V.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${o} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(d).concat(Object.keys(t)).map((g) => g.trim()).filter((g, y, k) => k.indexOf(g) === y).sort((g, y) => g.localeCompare(y)).map((g) => `  - ${g}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((g) => `  - ${g}`).join(`
`)].join(`
`));
      let x = oo((i = f.props) != null ? i : {}, d), w = Ko(f, x);
      for (let g in x)
        g.startsWith("on") && (w.props || (w.props = {}), w.props[g] = x[g]);
      return w;
    }
    return Array.isArray(v) && v.length === 1 ? v[0] : v;
  }
  return J(u, Object.assign({}, d, c), { default: () => v });
}
function to(e) {
  return e.flatMap((t) => t.type === B ? to(t.children) : [t]);
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
function ql(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Ul = 0;
function Gl() {
  return ++Ul;
}
function ee() {
  return Gl();
}
var z = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(z || {});
function Wl(e) {
  throw new Error("Unexpected object: " + e);
}
var ue = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(ue || {});
function Kl(e, t) {
  let l = t.resolveItems();
  if (l.length <= 0)
    return null;
  let n = t.resolveActiveIndex(), o = n ?? -1, a = (() => {
    switch (e.focus) {
      case 0:
        return l.findIndex((i) => !t.resolveDisabled(i));
      case 1: {
        let i = l.slice().reverse().findIndex((u, d, v) => o !== -1 && v.length - d - 1 >= o ? !1 : !t.resolveDisabled(u));
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
        Wl(e);
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
function Zl() {
  return Be() !== null;
}
function Be() {
  return re(lo, null);
}
function Ze(e) {
  ie(lo, e);
}
function Rt(e, t) {
  if (e)
    return e;
  let l = t ?? "button";
  if (typeof l == "string" && l.toLowerCase() === "button")
    return "button";
}
function Qe(e, t) {
  let l = $(Rt(e.value.type, e.value.as));
  return H(() => {
    l.value = Rt(e.value.type, e.value.as);
  }), le(() => {
    var n;
    l.value || O(t) && O(t) instanceof HTMLButtonElement && !((n = O(t)) != null && n.hasAttribute("type")) && (l.value = "button");
  }), l;
}
var Ql = Object.defineProperty, Yl = (e, t, l) => t in e ? Ql(e, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : e[t] = l, zt = (e, t, l) => (Yl(e, typeof t != "symbol" ? t + "" : t, l), l);
let Jl = class {
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
}, Ie = new Jl();
function he(e) {
  if (Ie.isServer)
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
var ne = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ne || {}), je = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(je || {}), Xl = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Xl || {});
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
let en = ["textarea", "input"].join(",");
function tn(e) {
  var t, l;
  return (l = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, en)) != null ? l : !1;
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
  o.length > 0 && u.length > 1 && (u = u.filter((w) => !o.includes(w))), n = n ?? i.activeElement;
  let d = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), v = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, u.indexOf(n)) - 1;
    if (t & 4)
      return Math.max(0, u.indexOf(n)) + 1;
    if (t & 8)
      return u.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), c = t & 32 ? { preventScroll: !0 } : {}, f = 0, V = u.length, x;
  do {
    if (f >= V || f + V <= 0)
      return 0;
    let w = v + f;
    if (t & 16)
      w = (w + V) % V;
    else {
      if (w < 0)
        return 3;
      if (w >= V)
        return 1;
    }
    x = u[w], x == null || x.focus(c), f += d;
  } while (x !== i.activeElement);
  return t & 6 && tn(x) && x.select(), x.hasAttribute("tabindex") || x.setAttribute("tabindex", "0"), 2;
}
function st(e, t, l) {
  Ie.isServer || le((n) => {
    document.addEventListener(e, t, l), n(() => document.removeEventListener(e, t, l));
  });
}
function $t(e, t, l = C(() => !0)) {
  function n(a, i) {
    if (!l.value || a.defaultPrevented)
      return;
    let u = i(a);
    if (u === null || !u.getRootNode().contains(u))
      return;
    let d = function v(c) {
      return typeof c == "function" ? v(c()) : Array.isArray(c) || c instanceof Set ? c : [c];
    }(e);
    for (let v of d) {
      if (v === null)
        continue;
      let c = v instanceof HTMLElement ? v : O(v);
      if (c != null && c.contains(u) || a.composed && a.composedPath().includes(c))
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
  let n = $(l == null ? void 0 : l.value), o = C(() => e.value !== void 0);
  return [C(() => o.value ? e.value : n.value), function(a) {
    return o.value || (n.value = a), t == null ? void 0 : t(a);
  }];
}
function Ht(e) {
  return [e.screenX, e.screenY];
}
function on() {
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
function ln() {
  return /Android/gi.test(window.navigator.userAgent);
}
function nn() {
  return po() || ln();
}
function an(e, t) {
  return e === t;
}
var sn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(sn || {}), rn = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(rn || {}), pn = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(pn || {});
let uo = Symbol("ComboboxContext");
function Ne(e) {
  let t = re(uo, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, Ne), l;
  }
  return t;
}
let un = U({ name: "Combobox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => an }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String }, nullable: { type: Boolean, default: !1 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: l, emit: n }) {
  let o = $(1), a = $(null), i = $(null), u = $(null), d = $(null), v = $({ static: !1, hold: !1 }), c = $([]), f = $(null), V = $(1), x = $(!1);
  function w(L = (M) => M) {
    let M = f.value !== null ? c.value[f.value] : null, A = kt(L(c.value.slice()), (R) => O(R.dataRef.domRef)), T = M ? A.indexOf(M) : null;
    return T === -1 && (T = null), { options: A, activeOptionIndex: T };
  }
  let g = C(() => e.multiple ? 1 : 0), y = C(() => e.nullable), [k, _] = Ct(C(() => e.modelValue === void 0 ? Q(g.value, { [1]: [], [0]: void 0 }) : e.modelValue), (L) => n("update:modelValue", L), C(() => e.defaultValue)), P = { comboboxState: o, value: k, mode: g, compare(L, M) {
    if (typeof e.by == "string") {
      let A = e.by;
      return (L == null ? void 0 : L[A]) === (M == null ? void 0 : M[A]);
    }
    return e.by(L, M);
  }, defaultValue: C(() => e.defaultValue), nullable: y, inputRef: i, labelRef: a, buttonRef: u, optionsRef: d, disabled: C(() => e.disabled), options: c, change(L) {
    _(L);
  }, activeOptionIndex: C(() => {
    if (x.value && f.value === null && c.value.length > 0) {
      let L = c.value.findIndex((M) => !M.dataRef.disabled);
      if (L !== -1)
        return L;
    }
    return f.value;
  }), activationTrigger: V, optionsPropsRef: v, closeCombobox() {
    x.value = !1, !e.disabled && o.value !== 1 && (o.value = 1, f.value = null);
  }, openCombobox() {
    if (x.value = !0, e.disabled || o.value === 0)
      return;
    let L = c.value.findIndex((M) => {
      let A = K(M.dataRef.value);
      return Q(g.value, { [0]: () => P.compare(K(P.value.value), K(A)), [1]: () => K(P.value.value).some((T) => P.compare(K(T), K(A))) });
    });
    L !== -1 && (f.value = L), o.value = 0;
  }, goToOption(L, M, A) {
    if (x.value = !1, e.disabled || d.value && !v.value.static && o.value === 1)
      return;
    let T = w();
    if (T.activeOptionIndex === null) {
      let X = T.options.findIndex((ge) => !ge.dataRef.disabled);
      X !== -1 && (T.activeOptionIndex = X);
    }
    let R = Kl(L === ue.Specific ? { focus: ue.Specific, id: M } : { focus: L }, { resolveItems: () => T.options, resolveActiveIndex: () => T.activeOptionIndex, resolveId: (X) => X.id, resolveDisabled: (X) => X.dataRef.disabled });
    f.value = R, V.value = A ?? 1, c.value = T.options;
  }, selectOption(L) {
    let M = c.value.find((T) => T.id === L);
    if (!M)
      return;
    let { dataRef: A } = M;
    _(Q(g.value, { [0]: () => A.value, [1]: () => {
      let T = K(P.value.value).slice(), R = K(A.value), X = T.findIndex((ge) => P.compare(R, K(ge)));
      return X === -1 ? T.push(R) : T.splice(X, 1), T;
    } }));
  }, selectActiveOption() {
    if (P.activeOptionIndex.value === null)
      return;
    let { dataRef: L, id: M } = c.value[P.activeOptionIndex.value];
    _(Q(g.value, { [0]: () => L.value, [1]: () => {
      let A = K(P.value.value).slice(), T = K(L.value), R = A.findIndex((X) => P.compare(T, K(X)));
      return R === -1 ? A.push(T) : A.splice(R, 1), A;
    } })), P.goToOption(ue.Specific, M);
  }, registerOption(L, M) {
    let A = { id: L, dataRef: M }, T = w((R) => [...R, A]);
    if (f.value === null) {
      let R = M.value.value;
      Q(g.value, { [0]: () => P.compare(K(P.value.value), K(R)), [1]: () => K(P.value.value).some((X) => P.compare(K(X), K(R))) }) && (T.activeOptionIndex = T.options.indexOf(A));
    }
    c.value = T.options, f.value = T.activeOptionIndex, V.value = 1;
  }, unregisterOption(L) {
    var M;
    P.activeOptionIndex.value !== null && ((M = P.options.value[P.activeOptionIndex.value]) == null ? void 0 : M.id) === L && (x.value = !0);
    let A = w((T) => {
      let R = T.findIndex((X) => X.id === L);
      return R !== -1 && T.splice(R, 1), T;
    });
    c.value = A.options, f.value = A.activeOptionIndex, V.value = 1;
  } };
  $t([i, u, d], () => P.closeCombobox(), C(() => o.value === 0)), ie(uo, P), Ze(C(() => Q(o.value, { [0]: Y.Open, [1]: Y.Closed })));
  let N = C(() => P.activeOptionIndex.value === null ? null : c.value[P.activeOptionIndex.value].dataRef.value), F = C(() => {
    var L;
    return (L = O(i)) == null ? void 0 : L.closest("form");
  });
  return H(() => {
    Z([F], () => {
      if (!F.value || e.defaultValue === void 0)
        return;
      function L() {
        P.change(e.defaultValue);
      }
      return F.value.addEventListener("reset", L), () => {
        var M;
        (M = F.value) == null || M.removeEventListener("reset", L);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: L, disabled: M, ...A } = e, T = { open: o.value === 0, disabled: M, activeIndex: P.activeOptionIndex.value, activeOption: N.value, value: k.value };
    return J(B, [...L != null && k.value != null ? _t({ [L]: k.value }).map(([R, X]) => J(Ve, wt({ features: xe.Hidden, key: R, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: R, value: X }))) : [], G({ theirProps: { ...l, ...Te(A, ["modelValue", "defaultValue", "nullable", "multiple", "onUpdate:modelValue", "by"]) }, ourProps: {}, slot: T, slots: t, attrs: l, name: "Combobox" })]);
  };
} }), dn = U({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-combobox-label-${ee()}` } }, setup(e, { attrs: t, slots: l }) {
  let n = Ne("ComboboxLabel");
  function o() {
    var a;
    (a = O(n.inputRef)) == null || a.focus({ preventScroll: !0 });
  }
  return () => {
    let a = { open: n.comboboxState.value === 0, disabled: n.disabled.value }, { id: i, ...u } = e, d = { id: i, ref: n.labelRef, onClick: o };
    return G({ ourProps: d, theirProps: u, slot: a, attrs: t, slots: l, name: "ComboboxLabel" });
  };
} }), cn = U({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-combobox-button-${ee()}` } }, setup(e, { attrs: t, slots: l, expose: n }) {
  let o = Ne("ComboboxButton");
  n({ el: o.buttonRef, $el: o.buttonRef });
  function a(d) {
    o.disabled.value || (o.comboboxState.value === 0 ? o.closeCombobox() : (d.preventDefault(), o.openCombobox()), ke(() => {
      var v;
      return (v = O(o.inputRef)) == null ? void 0 : v.focus({ preventScroll: !0 });
    }));
  }
  function i(d) {
    switch (d.key) {
      case z.ArrowDown:
        d.preventDefault(), d.stopPropagation(), o.comboboxState.value === 1 && o.openCombobox(), ke(() => {
          var v;
          return (v = o.inputRef.value) == null ? void 0 : v.focus({ preventScroll: !0 });
        });
        return;
      case z.ArrowUp:
        d.preventDefault(), d.stopPropagation(), o.comboboxState.value === 1 && (o.openCombobox(), ke(() => {
          o.value.value || o.goToOption(ue.Last);
        })), ke(() => {
          var v;
          return (v = o.inputRef.value) == null ? void 0 : v.focus({ preventScroll: !0 });
        });
        return;
      case z.Escape:
        if (o.comboboxState.value !== 0)
          return;
        d.preventDefault(), o.optionsRef.value && !o.optionsPropsRef.value.static && d.stopPropagation(), o.closeCombobox(), ke(() => {
          var v;
          return (v = o.inputRef.value) == null ? void 0 : v.focus({ preventScroll: !0 });
        });
        return;
    }
  }
  let u = Qe(C(() => ({ as: e.as, type: t.type })), o.buttonRef);
  return () => {
    var d, v;
    let c = { open: o.comboboxState.value === 0, disabled: o.disabled.value, value: o.value.value }, { id: f, ...V } = e, x = { ref: o.buttonRef, id: f, type: u.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (d = O(o.optionsRef)) == null ? void 0 : d.id, "aria-expanded": o.disabled.value ? void 0 : o.comboboxState.value === 0, "aria-labelledby": o.labelRef.value ? [(v = O(o.labelRef)) == null ? void 0 : v.id, f].join(" ") : void 0, disabled: o.disabled.value === !0 ? !0 : void 0, onKeydown: i, onClick: a };
    return G({ ourProps: x, theirProps: V, slot: c, attrs: t, slots: l, name: "ComboboxButton" });
  };
} }), fn = U({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: () => `headlessui-combobox-input-${ee()}` } }, emits: { change: (e) => !0 }, setup(e, { emit: t, attrs: l, slots: n, expose: o }) {
  let a = Ne("ComboboxInput"), i = { value: !1 };
  o({ el: a.inputRef, $el: a.inputRef });
  let u = C(() => {
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
        let _ = k.value, { selectionStart: P, selectionEnd: N, selectionDirection: F } = k;
        k.value = "", k.value = _, F !== null ? k.setSelectionRange(P, N, F) : k.setSelectionRange(P, N);
      }
    });
  });
  let d = $(!1);
  function v() {
    d.value = !0;
  }
  function c() {
    setTimeout(() => {
      d.value = !1;
    });
  }
  function f(g) {
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
  function V(g) {
    a.openCombobox(), t("change", g);
  }
  function x() {
    i.value = !1;
  }
  let w = C(() => {
    var g, y, k, _;
    return (_ = (k = (y = e.defaultValue) != null ? y : a.defaultValue.value !== void 0 ? (g = e.displayValue) == null ? void 0 : g.call(e, a.defaultValue.value) : null) != null ? k : a.defaultValue.value) != null ? _ : "";
  });
  return () => {
    var g, y, k, _, P, N;
    let F = { open: a.comboboxState.value === 0 }, { id: L, displayValue: M, onChange: A, ...T } = e, R = { "aria-controls": (g = a.optionsRef.value) == null ? void 0 : g.id, "aria-expanded": a.disabled.value ? void 0 : a.comboboxState.value === 0, "aria-activedescendant": a.activeOptionIndex.value === null || (y = a.options.value[a.activeOptionIndex.value]) == null ? void 0 : y.id, "aria-labelledby": (P = (k = O(a.labelRef)) == null ? void 0 : k.id) != null ? P : (_ = O(a.buttonRef)) == null ? void 0 : _.id, "aria-autocomplete": "list", id: L, onCompositionstart: v, onCompositionend: c, onKeydown: f, onInput: V, onBlur: x, role: "combobox", type: (N = l.type) != null ? N : "text", tabIndex: 0, ref: a.inputRef, defaultValue: w.value };
    return G({ ourProps: R, theirProps: T, slot: F, attrs: l, slots: n, features: ce.RenderStrategy | ce.Static, name: "ComboboxInput" });
  };
} }), vn = U({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, hold: { type: [Boolean], default: !1 } }, setup(e, { attrs: t, slots: l, expose: n }) {
  let o = Ne("ComboboxOptions"), a = `headlessui-combobox-options-${ee()}`;
  n({ el: o.optionsRef, $el: o.optionsRef }), le(() => {
    o.optionsPropsRef.value.static = e.static;
  }), le(() => {
    o.optionsPropsRef.value.hold = e.hold;
  });
  let i = Be(), u = C(() => i !== null ? (i.value & Y.Open) === Y.Open : o.comboboxState.value === 0);
  return no({ container: C(() => O(o.optionsRef)), enabled: C(() => o.comboboxState.value === 0), accept(d) {
    return d.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : d.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(d) {
    d.setAttribute("role", "none");
  } }), () => {
    var d, v, c;
    let f = { open: o.comboboxState.value === 0 }, V = { "aria-labelledby": (c = (d = O(o.labelRef)) == null ? void 0 : d.id) != null ? c : (v = O(o.buttonRef)) == null ? void 0 : v.id, id: a, ref: o.optionsRef, role: "listbox", "aria-multiselectable": o.mode.value === 1 ? !0 : void 0 }, x = Te(e, ["hold"]);
    return G({ ourProps: V, theirProps: x, slot: f, attrs: t, slots: l, features: ce.RenderStrategy | ce.Static, visible: u.value, name: "ComboboxOptions" });
  };
} }), mn = U({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: l, expose: n }) {
  let o = Ne("ComboboxOption"), a = `headlessui-combobox-option-${ee()}`, i = $(null);
  n({ el: i, $el: i });
  let u = C(() => o.activeOptionIndex.value !== null ? o.options.value[o.activeOptionIndex.value].id === a : !1), d = C(() => Q(o.mode.value, { [0]: () => o.compare(K(o.value.value), K(e.value)), [1]: () => K(o.value.value).some((y) => o.compare(K(y), K(e.value))) })), v = C(() => ({ disabled: e.disabled, value: e.value, domRef: i }));
  H(() => o.registerOption(a, v)), se(() => o.unregisterOption(a)), le(() => {
    o.comboboxState.value === 0 && u.value && o.activationTrigger.value !== 0 && ke(() => {
      var y, k;
      return (k = (y = O(i)) == null ? void 0 : y.scrollIntoView) == null ? void 0 : k.call(y, { block: "nearest" });
    });
  });
  function c(y) {
    if (e.disabled)
      return y.preventDefault();
    o.selectOption(a), o.mode.value === 0 && o.closeCombobox(), nn() || requestAnimationFrame(() => {
      var k;
      return (k = O(o.inputRef)) == null ? void 0 : k.focus();
    });
  }
  function f() {
    if (e.disabled)
      return o.goToOption(ue.Nothing);
    o.goToOption(ue.Specific, a);
  }
  let V = on();
  function x(y) {
    V.update(y);
  }
  function w(y) {
    V.wasMoved(y) && (e.disabled || u.value || o.goToOption(ue.Specific, a, 0));
  }
  function g(y) {
    V.wasMoved(y) && (e.disabled || u.value && (o.optionsPropsRef.value.hold || o.goToOption(ue.Nothing)));
  }
  return () => {
    let { disabled: y } = e, k = { active: u.value, selected: d.value, disabled: y }, _ = { id: a, ref: i, role: "option", tabIndex: y === !0 ? void 0 : -1, "aria-disabled": y === !0 ? !0 : void 0, "aria-selected": d.value, disabled: void 0, onClick: c, onFocus: f, onPointerenter: x, onMouseenter: x, onPointermove: w, onMousemove: w, onPointerleave: g, onMouseleave: g };
    return G({ ourProps: _, theirProps: e, slot: k, attrs: l, slots: t, name: "ComboboxOption" });
  };
} });
function hn(e, t, l) {
  Ie.isServer || le((n) => {
    window.addEventListener(e, t, l), n(() => window.removeEventListener(e, t, l));
  });
}
var me = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(me || {});
function St() {
  let e = $(0);
  return hn("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Ot(e, t, l, n) {
  Ie.isServer || le((o) => {
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
let De = Object.assign(U({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: $(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: l, expose: n }) {
  let o = $(null);
  n({ el: o, $el: o });
  let a = C(() => he(o)), i = $(!1);
  H(() => i.value = !0), se(() => i.value = !1), gn({ ownerDocument: a }, C(() => i.value && Boolean(e.features & 16)));
  let u = yn({ ownerDocument: a, container: o, initialFocus: C(() => e.initialFocus) }, C(() => i.value && Boolean(e.features & 2)));
  xn({ ownerDocument: a, container: o, containers: e.containers, previousActiveElement: u }, C(() => i.value && Boolean(e.features & 8)));
  let d = St();
  function v(x) {
    let w = O(o);
    w && ((g) => g())(() => {
      Q(d.value, { [me.Forwards]: () => {
        ve(w, ne.First, { skipElements: [x.relatedTarget] });
      }, [me.Backwards]: () => {
        ve(w, ne.Last, { skipElements: [x.relatedTarget] });
      } });
    });
  }
  let c = $(!1);
  function f(x) {
    x.key === "Tab" && (c.value = !0, requestAnimationFrame(() => {
      c.value = !1;
    }));
  }
  function V(x) {
    if (!i.value)
      return;
    let w = fo(e.containers);
    O(o) instanceof HTMLElement && w.add(O(o));
    let g = x.relatedTarget;
    g instanceof HTMLElement && g.dataset.headlessuiFocusGuard !== "true" && (mo(w, g) || (c.value ? ve(O(o), Q(d.value, { [me.Forwards]: () => ne.Next, [me.Backwards]: () => ne.Previous }) | ne.WrapAround, { relativeTo: x.target }) : x.target instanceof HTMLElement && Le(x.target)));
  }
  return () => {
    let x = {}, w = { ref: o, onKeydown: f, onFocusout: V }, { features: g, initialFocus: y, containers: k, ..._ } = e;
    return J(B, [Boolean(g & 4) && J(Ve, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: v, features: xe.Focusable }), G({ ourProps: w, theirProps: { ...t, ..._ }, slot: x, attrs: t, slots: l, name: "FocusTrap" }), Boolean(g & 4) && J(Ve, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: v, features: xe.Focusable })]);
  };
} }), { features: vo }), Oe = [];
if (typeof window < "u" && typeof document < "u") {
  let e = function(t) {
    t.target instanceof HTMLElement && t.target !== document.body && Oe[0] !== t.target && (Oe.unshift(t.target), Oe = Oe.filter((l) => l != null && l.isConnected), Oe.splice(10));
  };
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
}
function bn(e) {
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
function gn({ ownerDocument: e }, t) {
  let l = bn(t);
  H(() => {
    le(() => {
      var n, o;
      t.value || ((n = e.value) == null ? void 0 : n.activeElement) === ((o = e.value) == null ? void 0 : o.body) && Le(l());
    }, { flush: "post" });
  }), se(() => {
    Le(l());
  });
}
function yn({ ownerDocument: e, container: t, initialFocus: l }, n) {
  let o = $(null), a = $(!1);
  return H(() => a.value = !0), se(() => a.value = !1), H(() => {
    Z([t, l, n], (i, u) => {
      if (i.every((v, c) => (u == null ? void 0 : u[c]) === v) || !n.value)
        return;
      let d = O(t);
      d && co(() => {
        var v, c;
        if (!a.value)
          return;
        let f = O(l), V = (v = e.value) == null ? void 0 : v.activeElement;
        if (f) {
          if (f === V) {
            o.value = V;
            return;
          }
        } else if (d.contains(V)) {
          o.value = V;
          return;
        }
        f ? Le(f) : ve(d, ne.First | ne.NoScroll) === je.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), o.value = (c = e.value) == null ? void 0 : c.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), o;
}
function xn({ ownerDocument: e, container: t, containers: l, previousActiveElement: n }, o) {
  var a;
  Ot((a = e.value) == null ? void 0 : a.defaultView, "focus", (i) => {
    if (!o.value)
      return;
    let u = fo(l);
    O(t) instanceof HTMLElement && u.add(O(t));
    let d = n.value;
    if (!d)
      return;
    let v = i.target;
    v && v instanceof HTMLElement ? mo(u, v) ? (n.value = v, Le(v)) : (i.preventDefault(), i.stopPropagation(), Le(d)) : Le(n.value);
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
function wn() {
  return re(ho, !1);
}
let ct = U({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: l }) {
  return ie(ho, e.force), () => {
    let { force: n, ...o } = e;
    return G({ theirProps: o, ourProps: {}, slot: {}, slots: t, attrs: l, name: "ForcePortalRoot" });
  };
} });
function Vn(e) {
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
  let n = $(null), o = C(() => he(n)), a = wn(), i = re(go, null), u = $(a === !0 || i == null ? Vn(n.value) : i.resolveTarget());
  return le(() => {
    a || i != null && (u.value = i.resolveTarget());
  }), se(() => {
    var d, v;
    let c = (d = o.value) == null ? void 0 : d.getElementById("headlessui-portal-root");
    c && u.value === c && u.value.children.length <= 0 && ((v = u.value.parentElement) == null || v.removeChild(u.value));
  }), () => {
    if (u.value === null)
      return null;
    let d = { ref: n, "data-headlessui-portal": "" };
    return J(We, { to: u.value }, G({ ourProps: d, theirProps: e, slot: {}, attrs: l, slots: t, name: "Portal" }));
  };
} }), go = Symbol("PortalGroupContext"), kn = U({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: l }) {
  let n = Zo({ resolveTarget() {
    return e.target;
  } });
  return ie(go, n), () => {
    let { target: o, ...a } = e;
    return G({ theirProps: a, ourProps: {}, slot: {}, attrs: t, slots: l, name: "PortalGroup" });
  };
} }), yo = Symbol("StackContext");
var ft = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(ft || {});
function $n() {
  return re(yo, () => {
  });
}
function _n({ type: e, enabled: t, element: l, onUpdate: n }) {
  let o = $n();
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
function Cn() {
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
  return ie(xo, { register: o, slot: e, name: t, props: l }), C(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
let Sn = U({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${ee()}` } }, setup(e, { attrs: t, slots: l }) {
  let n = Cn();
  return H(() => se(n.register(e.id))), () => {
    let { name: o = "Description", slot: a = $({}), props: i = {} } = n, { id: u, ...d } = e, v = { ...Object.entries(i).reduce((c, [f, V]) => Object.assign(c, { [f]: m(V) }), {}), id: u };
    return G({ ourProps: v, theirProps: d, slot: a.value, attrs: t, slots: l, name: o });
  };
} });
function On(e) {
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
function Pn(e, t) {
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
function En() {
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
function Ln() {
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
          let { hash: d } = new URL(u.href), v = t.querySelector(d);
          v && !o(v) && (a = v);
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
function Bn(e) {
  let t = {};
  for (let l of e)
    Object.assign(t, l(t));
  return t;
}
let Pe = Pn(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var l;
  let n = (l = this.get(e)) != null ? l : { doc: e, count: 0, d: Xe(), meta: /* @__PURE__ */ new Set() };
  return n.count++, n.meta.add(t), this.set(e, n), this;
}, POP(e, t) {
  let l = this.get(e);
  return l && (l.count--, l.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: l }) {
  let n = { doc: e, d: t, meta: Bn(l) }, o = [Ln(), En(), jn()];
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
function Tn(e, t, l) {
  let n = On(Pe), o = C(() => {
    let a = e.value ? n.value.get(e.value) : void 0;
    return a ? a.count > 0 : !1;
  });
  return Z([e, t], ([a, i], [u], d) => {
    if (!a || !i)
      return;
    Pe.dispatch("PUSH", a, l);
    let v = !1;
    d(() => {
      v || (Pe.dispatch("POP", u ?? a, l), v = !0);
    });
  }, { immediate: !0 }), o;
}
var Nn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Nn || {});
let vt = Symbol("DialogContext");
function Fe(e) {
  let t = re(vt, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, Fe), l;
  }
  return t;
}
let He = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", et = U({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: He }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${ee()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: l, slots: n, expose: o }) {
  var a;
  let i = $(!1);
  H(() => {
    i.value = !0;
  });
  let u = $(0), d = Be(), v = C(() => e.open === He && d !== null ? (d.value & Y.Open) === Y.Open : e.open), c = $(null), f = $(null), V = C(() => he(c));
  if (o({ el: c, $el: c }), !(e.open !== He || d !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof v.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${v.value === He ? void 0 : e.open}`);
  let x = C(() => i.value && v.value ? 0 : 1), w = C(() => x.value === 0), g = C(() => u.value > 1), y = re(vt, null) !== null, k = C(() => g.value ? "parent" : "leaf"), _ = C(() => d !== null ? (d.value & Y.Closing) === Y.Closing : !1), P = C(() => y || _.value ? !1 : w.value), N = C(() => {
    var q, W, oe;
    return (oe = Array.from((W = (q = V.value) == null ? void 0 : q.querySelectorAll("body > *")) != null ? W : []).find((pe) => pe.id === "headlessui-portal-root" ? !1 : pe.contains(O(f)) && pe instanceof HTMLElement)) != null ? oe : null;
  });
  qt(N, P);
  let F = C(() => g.value ? !0 : w.value), L = C(() => {
    var q, W, oe;
    return (oe = Array.from((W = (q = V.value) == null ? void 0 : q.querySelectorAll("[data-headlessui-portal]")) != null ? W : []).find((pe) => pe.contains(O(f)) && pe instanceof HTMLElement)) != null ? oe : null;
  });
  qt(L, F), _n({ type: "Dialog", enabled: C(() => x.value === 0), element: c, onUpdate: (q, W) => {
    if (W === "Dialog")
      return Q(q, { [ft.Add]: () => u.value += 1, [ft.Remove]: () => u.value -= 1 });
  } });
  let M = Je({ name: "DialogDescription", slot: C(() => ({ open: v.value })) }), A = $(null), T = { titleId: A, panelRef: $(null), dialogState: x, setTitleId(q) {
    A.value !== q && (A.value = q);
  }, close() {
    t("close", !1);
  } };
  ie(vt, T);
  function R() {
    var q, W, oe;
    return [...Array.from((W = (q = V.value) == null ? void 0 : q.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? W : []).filter((pe) => !(pe === document.body || pe === document.head || !(pe instanceof HTMLElement) || pe.contains(O(f)) || T.panelRef.value && pe.contains(T.panelRef.value))), (oe = T.panelRef.value) != null ? oe : c.value];
  }
  let X = C(() => !(!w.value || g.value));
  $t(() => R(), (q, W) => {
    T.close(), ke(() => W == null ? void 0 : W.focus());
  }, X);
  let ge = C(() => !(g.value || x.value !== 0));
  Ot((a = V.value) == null ? void 0 : a.defaultView, "keydown", (q) => {
    ge.value && (q.defaultPrevented || q.key === z.Escape && (q.preventDefault(), q.stopPropagation(), T.close()));
  });
  let fe = C(() => !(_.value || x.value !== 0 || y));
  return Tn(V, fe, (q) => {
    var W;
    return { containers: [...(W = q.containers) != null ? W : [], R] };
  }), le((q) => {
    if (x.value !== 0)
      return;
    let W = O(c);
    if (!W)
      return;
    let oe = new ResizeObserver((pe) => {
      for (let ze of pe) {
        let Ce = ze.target.getBoundingClientRect();
        Ce.x === 0 && Ce.y === 0 && Ce.width === 0 && Ce.height === 0 && T.close();
      }
    });
    oe.observe(W), q(() => oe.disconnect());
  }), () => {
    let { id: q, open: W, initialFocus: oe, ...pe } = e, ze = { ...l, ref: c, id: q, role: "dialog", "aria-modal": x.value === 0 ? !0 : void 0, "aria-labelledby": A.value, "aria-describedby": M.value }, Ce = { open: x.value === 0 };
    return J(ct, { force: !0 }, () => [J(bo, () => J(kn, { target: c.value }, () => J(ct, { force: !1 }, () => J(De, { initialFocus: oe, containers: R, features: w.value ? Q(k.value, { parent: De.features.RestoreFocus, leaf: De.features.All & ~De.features.FocusLock }) : De.features.None }, () => G({ ourProps: ze, theirProps: pe, slot: Ce, attrs: l, slots: n, visible: x.value === 0, features: ce.RenderStrategy | ce.Static, name: "Dialog" }))))), J(Ve, { features: xe.Hidden, ref: f })]);
  };
} });
U({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${ee()}` } }, setup(e, { attrs: t, slots: l }) {
  let n = Fe("DialogOverlay");
  function o(a) {
    a.target === a.currentTarget && (a.preventDefault(), a.stopPropagation(), n.close());
  }
  return () => {
    let { id: a, ...i } = e;
    return G({ ourProps: { id: a, "aria-hidden": !0, onClick: o }, theirProps: i, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogOverlay" });
  };
} });
U({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${ee()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: l, expose: n }) {
  let o = Fe("DialogBackdrop"), a = $(null);
  return n({ el: a, $el: a }), H(() => {
    if (o.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: i, ...u } = e, d = { id: i, ref: a, "aria-hidden": !0 };
    return J(ct, { force: !0 }, () => J(bo, () => G({ ourProps: d, theirProps: { ...t, ...u }, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogBackdrop" })));
  };
} });
let tt = U({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${ee()}` } }, setup(e, { attrs: t, slots: l, expose: n }) {
  let o = Fe("DialogPanel");
  n({ el: o.panelRef, $el: o.panelRef });
  function a(i) {
    i.stopPropagation();
  }
  return () => {
    let { id: i, ...u } = e, d = { id: i, ref: o.panelRef, onClick: a };
    return G({ ourProps: d, theirProps: u, slot: { open: o.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogPanel" });
  };
} }), wo = U({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${ee()}` } }, setup(e, { attrs: t, slots: l }) {
  let n = Fe("DialogTitle");
  return H(() => {
    n.setTitleId(e.id), se(() => n.setTitleId(null));
  }), () => {
    let { id: o, ...a } = e;
    return G({ ourProps: { id: o }, theirProps: a, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: l, name: "DialogTitle" });
  };
} });
var Dn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Dn || {});
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
function An() {
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
  return ie(Vo, i), Ze(C(() => Q(n.value, { [0]: Y.Open, [1]: Y.Closed }))), () => {
    let { defaultOpen: u, ...d } = e, v = { open: n.value === 0, close: i.close };
    return G({ theirProps: d, ourProps: {}, slot: v, slots: t, attrs: l, name: "Disclosure" });
  };
} }), Gt = U({ name: "DisclosureButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-disclosure-button-${ee()}` } }, setup(e, { attrs: t, slots: l, expose: n }) {
  let o = Pt("DisclosureButton");
  H(() => {
    o.buttonId.value = e.id;
  }), se(() => {
    o.buttonId.value = null;
  });
  let a = An(), i = C(() => a === null ? !1 : a.value === o.panelId.value), u = $(null);
  n({ el: u, $el: u }), i.value || le(() => {
    o.button.value = u.value;
  });
  let d = Qe(C(() => ({ as: e.as, type: t.type })), u);
  function v() {
    var V;
    e.disabled || (i.value ? (o.toggleDisclosure(), (V = O(o.button)) == null || V.focus()) : o.toggleDisclosure());
  }
  function c(V) {
    var x;
    if (!e.disabled)
      if (i.value)
        switch (V.key) {
          case z.Space:
          case z.Enter:
            V.preventDefault(), V.stopPropagation(), o.toggleDisclosure(), (x = O(o.button)) == null || x.focus();
            break;
        }
      else
        switch (V.key) {
          case z.Space:
          case z.Enter:
            V.preventDefault(), V.stopPropagation(), o.toggleDisclosure();
            break;
        }
  }
  function f(V) {
    switch (V.key) {
      case z.Space:
        V.preventDefault();
        break;
    }
  }
  return () => {
    let V = { open: o.disclosureState.value === 0 }, { id: x, ...w } = e, g = i.value ? { ref: u, type: d.value, onClick: v, onKeydown: c } : { id: x, ref: u, type: d.value, "aria-expanded": e.disabled ? void 0 : o.disclosureState.value === 0, "aria-controls": O(o.panel) ? o.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onClick: v, onKeydown: c, onKeyup: f };
    return G({ ourProps: g, theirProps: w, slot: V, attrs: t, slots: l, name: "DisclosureButton" });
  };
} }), Wt = U({ name: "DisclosurePanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-disclosure-panel-${ee()}` } }, setup(e, { attrs: t, slots: l, expose: n }) {
  let o = Pt("DisclosurePanel");
  H(() => {
    o.panelId.value = e.id;
  }), se(() => {
    o.panelId.value = null;
  }), n({ el: o.panel, $el: o.panel }), ie(ko, o.panelId);
  let a = Be(), i = C(() => a !== null ? (a.value & Y.Open) === Y.Open : o.disclosureState.value === 0);
  return () => {
    let u = { open: o.disclosureState.value === 0, close: o.close }, { id: d, ...v } = e, c = { id: d, ref: o.panel };
    return G({ ourProps: c, theirProps: v, slot: u, attrs: t, slots: l, features: ce.RenderStrategy | ce.Static, visible: i.value, name: "DisclosurePanel" });
  };
} });
var Mn = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Mn || {});
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
function In() {
  return re(So, null);
}
let lt = U({ name: "Popover", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: l, expose: n }) {
  var o;
  let a = $(null);
  n({ el: a, $el: a });
  let i = $(1), u = $(null), d = $(null), v = $(null), c = $(null), f = C(() => he(a)), V = C(() => {
    var _, P;
    if (!O(u) || !O(c))
      return !1;
    for (let R of document.querySelectorAll("body > *"))
      if (Number(R == null ? void 0 : R.contains(O(u))) ^ Number(R == null ? void 0 : R.contains(O(c))))
        return !0;
    let N = Ye(), F = N.indexOf(O(u)), L = (F + N.length - 1) % N.length, M = (F + 1) % N.length, A = N[L], T = N[M];
    return !((_ = O(c)) != null && _.contains(A)) && !((P = O(c)) != null && P.contains(T));
  }), x = { popoverState: i, buttonId: $(null), panelId: $(null), panel: c, button: u, isPortalled: V, beforePanelSentinel: d, afterPanelSentinel: v, togglePopover() {
    i.value = Q(i.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    i.value !== 1 && (i.value = 1);
  }, close(_) {
    x.closePopover();
    let P = (() => _ ? _ instanceof HTMLElement ? _ : _.value instanceof HTMLElement ? O(_) : O(x.button) : O(x.button))();
    P == null || P.focus();
  } };
  ie($o, x), Ze(C(() => Q(i.value, { [0]: Y.Open, [1]: Y.Closed })));
  let w = { buttonId: x.buttonId, panelId: x.panelId, close() {
    x.closePopover();
  } }, g = Co(), y = g == null ? void 0 : g.registerPopover;
  function k() {
    var _, P, N, F;
    return (F = g == null ? void 0 : g.isFocusWithinPopoverGroup()) != null ? F : ((_ = f.value) == null ? void 0 : _.activeElement) && (((P = O(u)) == null ? void 0 : P.contains(f.value.activeElement)) || ((N = O(c)) == null ? void 0 : N.contains(f.value.activeElement)));
  }
  return le(() => y == null ? void 0 : y(w)), Ot((o = f.value) == null ? void 0 : o.defaultView, "focus", (_) => {
    var P, N;
    i.value === 0 && (k() || u && c && _.target !== window && ((P = O(x.beforePanelSentinel)) != null && P.contains(_.target) || (N = O(x.afterPanelSentinel)) != null && N.contains(_.target) || x.closePopover()));
  }, !0), $t([u, c], (_, P) => {
    var N;
    x.closePopover(), ao(P, Vt.Loose) || (_.preventDefault(), (N = O(u)) == null || N.focus());
  }, C(() => i.value === 0)), () => {
    let _ = { open: i.value === 0, close: x.close };
    return G({ theirProps: e, ourProps: { ref: a }, slot: _, slots: t, attrs: l, name: "Popover" });
  };
} }), Et = U({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-popover-button-${ee()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: l, expose: n }) {
  let o = ot("PopoverButton"), a = C(() => he(o.button));
  n({ el: o.button, $el: o.button }), H(() => {
    o.buttonId.value = e.id;
  }), se(() => {
    o.buttonId.value = null;
  });
  let i = Co(), u = i == null ? void 0 : i.closeOthers, d = In(), v = C(() => d === null ? !1 : d.value === o.panelId.value), c = $(null), f = `headlessui-focus-sentinel-${ee()}`;
  v.value || le(() => {
    o.button.value = c.value;
  });
  let V = Qe(C(() => ({ as: e.as, type: t.type })), c);
  function x(k) {
    var _, P, N, F, L;
    if (v.value) {
      if (o.popoverState.value === 1)
        return;
      switch (k.key) {
        case z.Space:
        case z.Enter:
          k.preventDefault(), (P = (_ = k.target).click) == null || P.call(_), o.closePopover(), (N = O(o.button)) == null || N.focus();
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
          if (!O(o.button) || (F = a.value) != null && F.activeElement && !((L = O(o.button)) != null && L.contains(a.value.activeElement)))
            return;
          k.preventDefault(), k.stopPropagation(), o.closePopover();
          break;
      }
  }
  function w(k) {
    v.value || k.key === z.Space && k.preventDefault();
  }
  function g(k) {
    var _, P;
    e.disabled || (v.value ? (o.closePopover(), (_ = O(o.button)) == null || _.focus()) : (k.preventDefault(), k.stopPropagation(), o.popoverState.value === 1 && (u == null || u(o.buttonId.value)), o.togglePopover(), (P = O(o.button)) == null || P.focus()));
  }
  function y(k) {
    k.preventDefault(), k.stopPropagation();
  }
  return () => {
    let k = o.popoverState.value === 0, _ = { open: k }, { id: P, ...N } = e, F = v.value ? { ref: c, type: V.value, onKeydown: x, onClick: g } : { ref: c, id: P, type: V.value, "aria-expanded": e.disabled ? void 0 : o.popoverState.value === 0, "aria-controls": O(o.panel) ? o.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onKeydown: x, onKeyup: w, onClick: g, onMousedown: y }, L = St();
    function M() {
      let A = O(o.panel);
      if (!A)
        return;
      function T() {
        Q(L.value, { [me.Forwards]: () => ve(A, ne.First), [me.Backwards]: () => ve(A, ne.Last) }) === je.Error && ve(Ye().filter((R) => R.dataset.headlessuiFocusGuard !== "true"), Q(L.value, { [me.Forwards]: ne.Next, [me.Backwards]: ne.Previous }), { relativeTo: O(o.button) });
      }
      T();
    }
    return J(B, [G({ ourProps: F, theirProps: { ...t, ...N }, slot: _, attrs: t, slots: l, name: "PopoverButton" }), k && !v.value && o.isPortalled.value && J(Ve, { id: f, features: xe.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: M })]);
  };
} });
U({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(e, { attrs: t, slots: l }) {
  let n = ot("PopoverOverlay"), o = `headlessui-popover-overlay-${ee()}`, a = Be(), i = C(() => a !== null ? (a.value & Y.Open) === Y.Open : n.popoverState.value === 0);
  function u() {
    n.closePopover();
  }
  return () => {
    let d = { open: n.popoverState.value === 0 };
    return G({ ourProps: { id: o, "aria-hidden": !0, onClick: u }, theirProps: e, slot: d, attrs: t, slots: l, features: ce.RenderStrategy | ce.Static, visible: i.value, name: "PopoverOverlay" });
  };
} });
let Lt = U({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-popover-panel-${ee()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: l, expose: n }) {
  let { focus: o } = e, a = ot("PopoverPanel"), i = C(() => he(a.panel)), u = `headlessui-focus-sentinel-before-${ee()}`, d = `headlessui-focus-sentinel-after-${ee()}`;
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
  let v = Be(), c = C(() => v !== null ? (v.value & Y.Open) === Y.Open : a.popoverState.value === 0);
  function f(y) {
    var k, _;
    switch (y.key) {
      case z.Escape:
        if (a.popoverState.value !== 0 || !O(a.panel) || i.value && !((k = O(a.panel)) != null && k.contains(i.value.activeElement)))
          return;
        y.preventDefault(), y.stopPropagation(), a.closePopover(), (_ = O(a.button)) == null || _.focus();
        break;
    }
  }
  function V(y) {
    var k, _, P, N, F;
    let L = y.relatedTarget;
    L && O(a.panel) && ((k = O(a.panel)) != null && k.contains(L) || (a.closePopover(), ((P = (_ = O(a.beforePanelSentinel)) == null ? void 0 : _.contains) != null && P.call(_, L) || (F = (N = O(a.afterPanelSentinel)) == null ? void 0 : N.contains) != null && F.call(N, L)) && L.focus({ preventScroll: !0 })));
  }
  let x = St();
  function w() {
    let y = O(a.panel);
    if (!y)
      return;
    function k() {
      Q(x.value, { [me.Forwards]: () => {
        var _;
        ve(y, ne.First) === je.Error && ((_ = O(a.afterPanelSentinel)) == null || _.focus());
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
        let N = Ye(), F = N.indexOf(_), L = N.slice(0, F + 1), M = [...N.slice(F + 1), ...L];
        for (let A of M.slice())
          if (A.dataset.headlessuiFocusGuard === "true" || P != null && P.contains(A)) {
            let T = M.indexOf(A);
            T !== -1 && M.splice(T, 1);
          }
        ve(M, ne.First, { sorted: !1 });
      }, [me.Backwards]: () => {
        var _;
        ve(y, ne.Previous) === je.Error && ((_ = O(a.button)) == null || _.focus());
      } });
    }
    k();
  }
  return () => {
    let y = { open: a.popoverState.value === 0, close: a.close }, { id: k, focus: _, ...P } = e, N = { ref: a.panel, id: k, onKeydown: f, onFocusout: o && a.popoverState.value === 0 ? V : void 0, tabIndex: -1 };
    return G({ ourProps: N, theirProps: { ...t, ...P }, attrs: t, slot: y, slots: { ...l, default: (...F) => {
      var L;
      return [J(B, [c.value && a.isPortalled.value && J(Ve, { id: u, ref: a.beforePanelSentinel, features: xe.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: w }), (L = l.default) == null ? void 0 : L.call(l, ...F), c.value && a.isPortalled.value && J(Ve, { id: d, ref: a.afterPanelSentinel, features: xe.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: g })])];
    } }, features: ce.RenderStrategy | ce.Static, visible: c.value, name: "PopoverPanel" });
  };
} });
U({ name: "PopoverGroup", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: l, expose: n }) {
  let o = $(null), a = Yt([]), i = C(() => he(o));
  n({ el: o, $el: o });
  function u(f) {
    let V = a.value.indexOf(f);
    V !== -1 && a.value.splice(V, 1);
  }
  function d(f) {
    return a.value.push(f), () => {
      u(f);
    };
  }
  function v() {
    var f;
    let V = i.value;
    if (!V)
      return !1;
    let x = V.activeElement;
    return (f = O(o)) != null && f.contains(x) ? !0 : a.value.some((w) => {
      var g, y;
      return ((g = V.getElementById(w.buttonId.value)) == null ? void 0 : g.contains(x)) || ((y = V.getElementById(w.panelId.value)) == null ? void 0 : y.contains(x));
    });
  }
  function c(f) {
    for (let V of a.value)
      V.buttonId.value !== f && V.close();
  }
  return ie(_o, { registerPopover: d, unregisterPopover: u, isFocusWithinPopoverGroup: v, closeOthers: c }), () => G({ ourProps: { ref: o }, theirProps: e, slot: {}, attrs: t, slots: l, name: "PopoverGroup" });
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
function jt({ slot: e = {}, name: t = "Label", props: l = {} } = {}) {
  let n = $([]);
  function o(a) {
    return n.value.push(a), () => {
      let i = n.value.indexOf(a);
      i !== -1 && n.value.splice(i, 1);
    };
  }
  return ie(Oo, { register: o, slot: e, name: t, props: l }), C(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
let Eo = U({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-label-${ee()}` } }, setup(e, { slots: t, attrs: l }) {
  let n = Po();
  return H(() => se(n.register(e.id))), () => {
    let { name: o = "Label", slot: a = {}, props: i = {} } = n, { id: u, passive: d, ...v } = e, c = { ...Object.entries(i).reduce((f, [V, x]) => Object.assign(f, { [V]: m(x) }), {}), id: u };
    return d && (delete c.onClick, delete c.htmlFor, delete v.onClick), G({ ourProps: c, theirProps: v, slot: a, attrs: l, slots: t, name: o });
  };
} });
function Fn(e, t) {
  return e === t;
}
let Lo = Symbol("RadioGroupContext");
function jo(e) {
  let t = re(Lo, null);
  if (t === null) {
    let l = new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l, jo), l;
  }
  return t;
}
let Rn = U({ name: "RadioGroup", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "div" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => Fn }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-radiogroup-${ee()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: l, slots: n, expose: o }) {
  let a = $(null), i = $([]), u = jt({ name: "RadioGroupLabel" }), d = Je({ name: "RadioGroupDescription" });
  o({ el: a, $el: a });
  let [v, c] = Ct(C(() => e.modelValue), (w) => t("update:modelValue", w), C(() => e.defaultValue)), f = { options: i, value: v, disabled: C(() => e.disabled), firstOption: C(() => i.value.find((w) => !w.propsRef.disabled)), containsCheckedOption: C(() => i.value.some((w) => f.compare(K(w.propsRef.value), K(e.modelValue)))), compare(w, g) {
    if (typeof e.by == "string") {
      let y = e.by;
      return (w == null ? void 0 : w[y]) === (g == null ? void 0 : g[y]);
    }
    return e.by(w, g);
  }, change(w) {
    var g;
    if (e.disabled || f.compare(K(v.value), K(w)))
      return !1;
    let y = (g = i.value.find((k) => f.compare(K(k.propsRef.value), K(w)))) == null ? void 0 : g.propsRef;
    return y != null && y.disabled ? !1 : (c(w), !0);
  }, registerOption(w) {
    i.value.push(w), i.value = kt(i.value, (g) => g.element);
  }, unregisterOption(w) {
    let g = i.value.findIndex((y) => y.id === w);
    g !== -1 && i.value.splice(g, 1);
  } };
  ie(Lo, f), no({ container: C(() => O(a)), accept(w) {
    return w.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : w.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(w) {
    w.setAttribute("role", "none");
  } });
  function V(w) {
    if (!a.value || !a.value.contains(w.target))
      return;
    let g = i.value.filter((y) => y.propsRef.disabled === !1).map((y) => y.element);
    switch (w.key) {
      case z.Enter:
        io(w.currentTarget);
        break;
      case z.ArrowLeft:
      case z.ArrowUp:
        if (w.preventDefault(), w.stopPropagation(), ve(g, ne.Previous | ne.WrapAround) === je.Success) {
          let y = i.value.find((k) => {
            var _;
            return k.element === ((_ = he(a)) == null ? void 0 : _.activeElement);
          });
          y && f.change(y.propsRef.value);
        }
        break;
      case z.ArrowRight:
      case z.ArrowDown:
        if (w.preventDefault(), w.stopPropagation(), ve(g, ne.Next | ne.WrapAround) === je.Success) {
          let y = i.value.find((k) => {
            var _;
            return k.element === ((_ = he(k.element)) == null ? void 0 : _.activeElement);
          });
          y && f.change(y.propsRef.value);
        }
        break;
      case z.Space:
        {
          w.preventDefault(), w.stopPropagation();
          let y = i.value.find((k) => {
            var _;
            return k.element === ((_ = he(k.element)) == null ? void 0 : _.activeElement);
          });
          y && f.change(y.propsRef.value);
        }
        break;
    }
  }
  let x = C(() => {
    var w;
    return (w = O(a)) == null ? void 0 : w.closest("form");
  });
  return H(() => {
    Z([x], () => {
      if (!x.value || e.defaultValue === void 0)
        return;
      function w() {
        f.change(e.defaultValue);
      }
      return x.value.addEventListener("reset", w), () => {
        var g;
        (g = x.value) == null || g.removeEventListener("reset", w);
      };
    }, { immediate: !0 });
  }), () => {
    let { disabled: w, name: g, id: y, ...k } = e, _ = { ref: a, id: y, role: "radiogroup", "aria-labelledby": u.value, "aria-describedby": d.value, onKeydown: V };
    return J(B, [...g != null && v.value != null ? _t({ [g]: v.value }).map(([P, N]) => J(Ve, wt({ features: xe.Hidden, key: P, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: P, value: N }))) : [], G({ ourProps: _, theirProps: { ...l, ...Te(k, ["modelValue", "defaultValue"]) }, slot: {}, attrs: l, slots: n, name: "RadioGroup" })]);
  };
} });
var zn = ((e) => (e[e.Empty = 1] = "Empty", e[e.Active = 2] = "Active", e))(zn || {});
let Hn = U({ name: "RadioGroupOption", props: { as: { type: [Object, String], default: "div" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-radiogroup-option-${ee()}` } }, setup(e, { attrs: t, slots: l, expose: n }) {
  let o = jo("RadioGroupOption"), a = jt({ name: "RadioGroupLabel" }), i = Je({ name: "RadioGroupDescription" }), u = $(null), d = C(() => ({ value: e.value, disabled: e.disabled })), v = $(1);
  n({ el: u, $el: u }), H(() => o.registerOption({ id: e.id, element: u, propsRef: d })), se(() => o.unregisterOption(e.id));
  let c = C(() => {
    var k;
    return ((k = o.firstOption.value) == null ? void 0 : k.id) === e.id;
  }), f = C(() => o.disabled.value || e.disabled), V = C(() => o.compare(K(o.value.value), K(e.value))), x = C(() => f.value ? -1 : V.value || !o.containsCheckedOption.value && c.value ? 0 : -1);
  function w() {
    var k;
    o.change(e.value) && (v.value |= 2, (k = u.value) == null || k.focus());
  }
  function g() {
    v.value |= 2;
  }
  function y() {
    v.value &= -3;
  }
  return () => {
    let { id: k, value: _, disabled: P, ...N } = e, F = { checked: V.value, disabled: f.value, active: Boolean(v.value & 2) }, L = { id: k, ref: u, role: "radio", "aria-checked": V.value ? "true" : "false", "aria-labelledby": a.value, "aria-describedby": i.value, "aria-disabled": f.value ? !0 : void 0, tabIndex: x.value, onClick: f.value ? void 0 : w, onFocus: f.value ? void 0 : g, onBlur: f.value ? void 0 : y };
    return G({ ourProps: L, theirProps: N, slot: F, attrs: t, slots: l, name: "RadioGroupOption" });
  };
} }), Kt = Eo, qn = Sn, Bo = Symbol("GroupContext"), Un = U({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: l }) {
  let n = $(null), o = jt({ name: "SwitchLabel", props: { htmlFor: C(() => {
    var i;
    return (i = n.value) == null ? void 0 : i.id;
  }), onClick(i) {
    n.value && (i.currentTarget.tagName === "LABEL" && i.preventDefault(), n.value.click(), n.value.focus({ preventScroll: !0 }));
  } } }), a = Je({ name: "SwitchDescription" });
  return ie(Bo, { switchRef: n, labelledby: o, describedby: a }), () => G({ theirProps: e, ourProps: {}, slot: {}, slots: t, attrs: l, name: "SwitchGroup" });
} }), Gn = U({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: !0 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-switch-${ee()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: l, slots: n, expose: o }) {
  let a = re(Bo, null), [i, u] = Ct(C(() => e.modelValue), (y) => t("update:modelValue", y), C(() => e.defaultChecked));
  function d() {
    u(!i.value);
  }
  let v = $(null), c = a === null ? v : a.switchRef, f = Qe(C(() => ({ as: e.as, type: l.type })), c);
  o({ el: c, $el: c });
  function V(y) {
    y.preventDefault(), d();
  }
  function x(y) {
    y.key === z.Space ? (y.preventDefault(), d()) : y.key === z.Enter && io(y.currentTarget);
  }
  function w(y) {
    y.preventDefault();
  }
  let g = C(() => {
    var y, k;
    return (k = (y = O(c)) == null ? void 0 : y.closest) == null ? void 0 : k.call(y, "form");
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
    let { id: y, name: k, value: _, ...P } = e, N = { checked: i.value }, F = { id: y, ref: c, role: "switch", type: f.value, tabIndex: 0, "aria-checked": i.value, "aria-labelledby": a == null ? void 0 : a.labelledby.value, "aria-describedby": a == null ? void 0 : a.describedby.value, onClick: V, onKeyup: x, onKeypress: w };
    return J(B, [k != null && i.value != null ? J(Ve, wt({ features: xe.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: i.value, name: k, value: _ })) : null, G({ ourProps: F, theirProps: { ...l, ...Te(P, ["modelValue", "defaultChecked"]) }, slot: N, attrs: l, slots: n, name: "Switch" })]);
  };
} }), Wn = Eo;
function Kn(e) {
  let t = { called: !1 };
  return (...l) => {
    if (!t.called)
      return t.called = !0, e(...l);
  };
}
function it(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function qe(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var mt = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(mt || {});
function Zn(e, t) {
  let l = Xe();
  if (!e)
    return l.dispose;
  let { transitionDuration: n, transitionDelay: o } = getComputedStyle(e), [a, i] = [n, o].map((u) => {
    let [d = 0] = u.split(",").filter(Boolean).map((v) => v.includes("ms") ? parseFloat(v) : parseFloat(v) * 1e3).sort((v, c) => c - v);
    return d;
  });
  return a !== 0 ? l.setTimeout(() => t("finished"), a + i) : t("finished"), l.add(() => t("cancelled")), l.dispose;
}
function Zt(e, t, l, n, o, a) {
  let i = Xe(), u = a !== void 0 ? Kn(a) : () => {
  };
  return qe(e, ...o), it(e, ...t, ...l), i.nextFrame(() => {
    qe(e, ...l), it(e, ...n), i.add(Zn(e, (d) => (qe(e, ...n, ...t), it(e, ...o), u(d))));
  }), i.add(() => qe(e, ...t, ...l, ...n, ...o)), i.add(() => u("cancelled")), i.dispose;
}
function Se(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Bt = Symbol("TransitionContext");
var Qn = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Qn || {});
function Yn() {
  return re(Bt, null) !== null;
}
function Jn() {
  let e = re(Bt, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Xn() {
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
let No = ce.RenderStrategy, _e = U({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: l, slots: n, expose: o }) {
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
  function v() {
    a.value &= ~Y.Closing, t("afterLeave");
  }
  if (!Yn() && Zl())
    return () => J(Re, { ...e, onBeforeEnter: i, onAfterEnter: u, onBeforeLeave: d, onAfterLeave: v }, n);
  let c = $(null), f = $("visible"), V = C(() => e.unmount ? $e.Unmount : $e.Hidden);
  o({ el: c, $el: c });
  let { show: x, appear: w } = Jn(), { register: g, unregister: y } = Xn(), k = { value: !0 }, _ = ee(), P = { value: !1 }, N = To(() => {
    !P.value && f.value !== "hidden" && (f.value = "hidden", y(_), v());
  });
  H(() => {
    let fe = g(_);
    se(fe);
  }), le(() => {
    if (V.value === $e.Hidden && _) {
      if (x && f.value !== "visible") {
        f.value = "visible";
        return;
      }
      Q(f.value, { hidden: () => y(_), visible: () => g(_) });
    }
  });
  let F = Se(e.enter), L = Se(e.enterFrom), M = Se(e.enterTo), A = Se(e.entered), T = Se(e.leave), R = Se(e.leaveFrom), X = Se(e.leaveTo);
  H(() => {
    le(() => {
      if (f.value === "visible") {
        let fe = O(c);
        if (fe instanceof Comment && fe.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function ge(fe) {
    let q = k.value && !w.value, W = O(c);
    !W || !(W instanceof HTMLElement) || q || (P.value = !0, x.value && i(), x.value || d(), fe(x.value ? Zt(W, F, L, M, A, (oe) => {
      P.value = !1, oe === mt.Finished && u();
    }) : Zt(W, T, R, X, A, (oe) => {
      P.value = !1, oe === mt.Finished && (nt(N) || (f.value = "hidden", y(_), v()));
    })));
  }
  return H(() => {
    Z([x], (fe, q, W) => {
      ge(W), k.value = !1;
    }, { immediate: !0 });
  }), ie(Tt, N), Ze(C(() => Q(f.value, { visible: Y.Open, hidden: Y.Closed }) | a.value)), () => {
    let { appear: fe, show: q, enter: W, enterFrom: oe, enterTo: pe, entered: ze, leave: Ce, leaveFrom: _1, leaveTo: C1, ...It } = e, Uo = { ref: c }, Go = { ...It, ...w && x && Ie.isServer ? { class: E([l.class, It.class, ...F, ...L]) } : {} };
    return G({ theirProps: Go, ourProps: Uo, slot: {}, slots: n, attrs: l, features: No, visible: f.value === "visible", name: "TransitionChild" });
  };
} }), ea = _e, Re = U({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: l, slots: n }) {
  let o = Be(), a = C(() => e.show === null && o !== null ? (o.value & Y.Open) === Y.Open : e.show);
  le(() => {
    if (![!0, !1].includes(a.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let i = $(a.value ? "visible" : "hidden"), u = To(() => {
    i.value = "hidden";
  }), d = $(!0), v = { show: a, appear: C(() => e.appear || !d.value) };
  return H(() => {
    le(() => {
      d.value = !1, a.value ? i.value = "visible" : nt(u) || (i.value = "hidden");
    });
  }), ie(Tt, u), ie(Bt, v), () => {
    let c = Te(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), f = { unmount: e.unmount };
    return G({ ourProps: { ...f, as: "template" }, theirProps: {}, slot: {}, slots: { ...n, default: () => [J(ea, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...l, ...f, ...c }, n.default)] }, attrs: {}, features: No, visible: i.value === "visible", name: "Transition" });
  };
} });
const ta = {
  key: 0,
  class: "po-text-sm po-font-normal po-text-slate-400 po-select-none po-block po-text-left po-pt-5"
}, oa = { class: "po-grid po-grid-cols-3" }, la = { class: "po-bg-white hover:po-bg-slate-200 po-rounded-xl po-p-2 po-transition-colors po-duration-150 po-ease-in" }, na = ["href", "target"], aa = { class: "po-flex po-w-14 po-h-14 po-items-center po-justify-center po-duration-100 po-ease-in-out po-overflow-hidden" }, sa = ["innerHTML"], ra = { class: "po-text-slate-500 po-font-normal po-text-sm po-text-center" }, Qt = {
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
      n.groupName.length > 0 ? (r(), p("span", ta, h(n.groupName), 1)) : b("", !0),
      s("ul", oa, [
        (r(!0), p(B, null, I(n.apps, (o) => (r(), p("li", la, [
          s("a", {
            href: o.url,
            target: e.openInNewTab ? "_blank" : "_self",
            class: "po-flex po-flex-col po-group po-justify-center po-items-center"
          }, [
            s("span", aa, [
              s("span", {
                class: "po-w-9",
                innerHTML: o.icon
              }, null, 8, sa)
            ]),
            s("span", ra, h(o.name), 1)
          ], 8, na)
        ]))), 256))
      ])
    ]))), 256));
  }
}, ia = {
  name: "PoAppTray"
}, pa = /* @__PURE__ */ Object.assign(ia, {
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
    const t = e, l = ["", "Internal"], n = C(() => {
      let o = [];
      return l.forEach((a) => {
        let i = t.appList.filter((u) => u.group == a);
        i.length > 0 && o.push({
          groupName: a,
          apps: i
        });
      }), o;
    });
    return (o, a) => e.justApps ? (r(), D(Qt, {
      key: 1,
      list: m(n),
      "open-in-new-tab": e.openInNewTab
    }, null, 8, ["list", "open-in-new-tab"])) : (r(), D(m(lt), { key: 0 }, {
      default: j(({ open: i }) => [
        S(m(Et), {
          class: E([i ? "" : "po-text-opacity-90", "po-block po-w-6 po-text-slate-100 genie-effect po-z-50 po-outline-none"])
        }, {
          default: j(() => [
            S(m(wl))
          ]),
          _: 2
        }, 1032, ["class"]),
        S(we, {
          "enter-active-class": "po-transition po-duration-200 po-ease-out",
          "enter-from-class": "po-translate-y-1 po-opacity-0",
          "enter-to-class": "po-translate-y-0 po-opacity-100",
          "leave-active-class": "po-transition po-duration-150 po-ease-in",
          "leave-from-class": "po-translate-y-0 po-opacity-100",
          "leave-to-class": "po-translate-y-1 po-opacity-0"
        }, {
          default: j(() => [
            S(m(Lt), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
              default: j(() => [
                S(Qt, {
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
}), ua = {
  key: 0,
  class: "po-absolute po-right-0 po-w-3 po-h-3 po-bg-mpao-orange po-rounded-full po-border-2 po-border-mpao-blue"
}, da = {
  key: 0,
  class: "po-space-y-2"
}, ca = ["onClick"], fa = { class: "po-flex po-items-center po-justify-between" }, va = { class: "po-text-sm po-font-semibold po-text-slate-700 po-grow po-flex po-space-x-2 po-items-center" }, ma = {
  key: 0,
  class: "po-w-2 po-h-2 po-rounded-full po-shrink-0 po-bg-mpao-orange"
}, ha = { class: "po-grow" }, ba = { class: "po-text-xs po-font-normal po-text-slate-400 po-shrink-0" }, ga = { class: "po-block po-text-sm po-text-slate-500 po-pb-3" }, ya = {
  key: 1,
  class: "po-text-sm po-text-slate-500 po-py-10 po-text-center po-block"
}, xa = {
  name: "PoNotificationHub"
}, wa = /* @__PURE__ */ Object.assign(xa, {
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
    return (l, n) => (r(), D(m(lt), null, {
      default: j(({ open: o }) => [
        S(m(Et), {
          class: E([o ? "" : "text-opacity-90", "po-block po-w-6 po-text-slate-100 genie-effect po-relative po-z-50 po-outline-none"])
        }, {
          default: j(() => [
            e.hasNewNotifications ? (r(), p("span", ua)) : b("", !0),
            S(m(sl), { class: "po-stroke-current" })
          ]),
          _: 2
        }, 1032, ["class"]),
        S(we, {
          "enter-active-class": "po-transition po-duration-200 po-ease-out",
          "enter-from-class": "po-translate-y-1 po-opacity-0",
          "enter-to-class": "po-translate-y-0 po-opacity-100",
          "leave-active-class": "po-transition po-duration-150 po-ease-in",
          "leave-from-class": "po-translate-y-0 po-opacity-100",
          "leave-to-class": "po-translate-y-1 po-opacity-0"
        }, {
          default: j(() => [
            S(m(Lt), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
              default: j(() => [
                e.notifications !== null && e.notifications.length > 0 ? (r(), p("ul", da, [
                  (r(!0), p(B, null, I(e.notifications, (a) => (r(), p("li", {
                    role: "button",
                    class: "po-space-y-2 po-p-2 po-rounded-lg po-bg-white hover:po-bg-slate-100 po-border po-border-slate-100",
                    onClick: de((i) => l.$emit("button-click", a.name), ["prevent"])
                  }, [
                    s("span", fa, [
                      s("p", va, [
                        a.seen ? b("", !0) : (r(), p("span", ma)),
                        s("span", ha, h(a.name), 1)
                      ]),
                      s("span", ba, h(a.time), 1)
                    ]),
                    s("span", ga, h(a.text), 1)
                  ], 8, ca))), 256))
                ])) : (r(), p("span", ya, " No notifications to show at the moment. We'll keep you informed."))
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
  class: "po-hidden lg:po-block po-text-sky-50 po-text-sm po-shrink-0 po-pr-3 po-truncate po-max-w-[140px] po-overflow-hidden"
}, ka = {
  key: 1,
  class: "po-px-3 po-bg-gradient-to-br po-from-slate-50 po-to-blue-100 po-py-1 po-rounded-l-md po-w-[100px] po-flex po-items-center po-justify-center po-text-center"
}, $a = ["src"], _a = ["src", "alt"], Ca = {
  key: 1,
  class: "po-text-xs po-text-white po-font-semibold"
}, Sa = { class: "po-pb-5" }, Oa = ["src"], Pa = {
  key: 2,
  class: "po-block po-text-sm po-text-slate-400 po-italic"
}, Ea = { key: 0 }, La = { key: 1 }, ja = /* @__PURE__ */ s("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), Ba = { class: "po-space-y-2 po-py-2 -po-mx-5 po-px-5 po-max-h-[250px] po-overflow-y-auto" }, Ta = ["onClick"], Na = { class: "po-w-5" }, Da = { class: "" }, Aa = { class: "po-block po-text-sm po-font-normal" }, Ma = {
  key: 0,
  class: "po-text-left po-block po-text-xs po-text-slate-400"
}, Ia = /* @__PURE__ */ s("div", { class: "po-h-[2px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), Fa = { class: "md:po-grid po-grid-cols-2 po-space-x-1 po-pt-2" }, Ra = { class: "po-w-5" }, za = /* @__PURE__ */ s("span", { class: "po-text-sm po-font-normal" }, "Profile", -1), Ha = { class: "po-w-5" }, qa = /* @__PURE__ */ s("span", { class: "po-text-sm po-font-normal" }, "Logout", -1), Ua = /* @__PURE__ */ s("div", { class: "po-text-xs po-space-x-3 po-text-center po-pt-3" }, [
  /* @__PURE__ */ s("a", {
    href: "",
    class: "po-text-slate-500 hover:po-text-mpao-lightblue"
  }, "Privacy Policy"),
  /* @__PURE__ */ s("a", {
    href: "",
    class: "po-text-slate-500 hover:po-text-mpao-lightblue"
  }, "Terms of Service")
], -1), Ga = {
  name: "PoProfileSwitcher"
}, Wa = /* @__PURE__ */ Object.assign(Ga, {
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
    function n(f) {
      t("button-click", f);
    }
    const o = $({
      name: "",
      initials: "",
      image: ""
    });
    function a(f) {
      return f ? f.match(/\b[A-Z]/g).join("").substr(0, 2) : "";
    }
    const i = C(() => {
      var g, y, k, _, P, N, F, L, M, A, T, R, X;
      let f = [], V = (g = l.userObject) != null && g.transacting_as_organisation && Object.keys((y = l.userObject) == null ? void 0 : y.transacting_as_organisation).length > 0 ? (k = l.userObject) == null ? void 0 : k.transacting_as_organisation : null, x = V ? V.name : (_ = l.userObject) == null ? void 0 : _.name, w = V ? V.logo ? V.logo : (P = l.userObject) == null ? void 0 : P.avatar : "";
      return o.value = {
        name: x,
        initials: a(x),
        image: w
      }, f = [], f.push({
        id: (N = l.userObject) == null ? void 0 : N.id,
        entity_id: (F = l.userObject) == null ? void 0 : F.entity_id,
        name: (L = l.userObject) == null ? void 0 : L.name,
        identifier: null,
        organisation_uuid: null
      }), ((A = (M = l.userObject) == null ? void 0 : M.organisations) == null ? void 0 : A.length) > 0 && ((R = (T = l.userObject) == null ? void 0 : T.organisations) == null || R.forEach((ge) => f.push(ge))), f.forEach((ge) => {
        var fe, q, W, oe;
        ge.current = ((fe = l.userObject) == null ? void 0 : fe.transacting_as_organisation) && Object.keys((q = l.userObject) == null ? void 0 : q.transacting_as_organisation).length > 0 && ge.entity_id === ((oe = (W = l.userObject) == null ? void 0 : W.transacting_as_organisation) == null ? void 0 : oe.entity_id);
      }), ((X = l.userObject) == null ? void 0 : X.transacting_as_organisation) === null && (f[0].current = !0), f;
    }), u = $(null), d = $(null), { avatar: v, logo: c } = be(l);
    return Z(v, () => {
      u.value = v.value;
    }), Z(c, () => {
      d.value = c.value;
    }), Qo(() => {
      i.value;
    }), H(() => {
      i.value;
    }), Yo(() => {
      i.value;
    }), bt(() => {
      i.value;
    }), (f, V) => (r(), D(m(lt), { key: m(i) }, {
      default: j(({ open: x }) => [
        s("div", null, [
          S(m(Et), { class: "po-flex po-items-center po-outline-none" }, {
            default: j(() => [
              d.value ? b("", !0) : (r(), p("span", Va, h(o.value.name), 1)),
              d.value ? (r(), p("span", ka, [
                s("img", {
                  class: "po-h-8",
                  src: d.value,
                  alt: ""
                }, null, 8, $a)
              ])) : b("", !0),
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
                  }, null, 8, _a)) : (r(), p("span", Ca, h(o.value.initials), 1))
                ], 2)
              ], 2)
            ]),
            _: 2
          }, 1024),
          S(we, {
            "enter-active-class": "po-transition po-duration-200 po-ease-out",
            "enter-from-class": "po-translate-y-1 po-opacity-0",
            "enter-to-class": "po-translate-y-0 po-opacity-100",
            "leave-active-class": "po-transition po-duration-150 po-ease-in",
            "leave-from-class": "po-translate-y-0 po-opacity-100",
            "leave-to-class": "po-translate-y-1 po-opacity-0"
          }, {
            default: j(() => [
              S(m(Lt), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
                default: j(() => {
                  var w, g, y, k;
                  return [
                    s("div", Sa, [
                      u.value ? (r(), p("img", {
                        key: 0,
                        class: "po-w-20 po-h-20 po-mx-auto po-rounded-full po-overflow-hidden",
                        src: u.value,
                        alt: ""
                      }, null, 8, Oa)) : b("", !0),
                      (w = e.userObject) != null && w.name ? (r(), p("span", {
                        key: 1,
                        class: E(["po-text-base po-text-slate-600 po-font-medium po-block", [{ "po-mt-4": u.value }]])
                      }, h((g = e.userObject) == null ? void 0 : g.name), 3)) : b("", !0),
                      (y = e.userObject) != null && y.name ? (r(), p("span", Pa, [
                        o.value.name === ((k = e.userObject) == null ? void 0 : k.name) ? (r(), p("span", Ea, "Self")) : (r(), p("span", La, "User at " + h(o.value.name), 1))
                      ])) : b("", !0)
                    ]),
                    ja,
                    s("div", Ba, [
                      (r(!0), p(B, null, I(m(i), (_, P) => (r(), p("a", {
                        href: "#",
                        onClick: de((N) => n(_), ["prevent"]),
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
                          _.isPersonal ? (r(), D(m(Ft), {
                            key: 0,
                            class: E([
                              "po-stroke-current",
                              { "po-stroke-mpao-lightblue": _.current }
                            ])
                          }, null, 8, ["class"])) : b("", !0),
                          _.isPersonal ? b("", !0) : (r(), D(m(il), {
                            key: 1,
                            class: E([
                              "po-stroke-current",
                              { "po-stroke-mpao-lightblue": _.current }
                            ])
                          }, null, 8, ["class"]))
                        ]),
                        s("span", Da, [
                          s("span", Aa, h(_.name), 1),
                          _.identifier ? (r(), p("span", Ma, h(_.identifier), 1)) : b("", !0)
                        ])
                      ], 10, Ta))), 128))
                    ]),
                    Ia,
                    s("div", Fa, [
                      s("a", {
                        href: "#",
                        onClick: V[0] || (V[0] = de((_) => f.$emit("button-click", "current-profile"), ["prevent"])),
                        class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-slate-50 hover:po-bg-blue-50 po-transition-all po-duration-150 po-ease-out",
                        role: "button"
                      }, [
                        s("span", Ra, [
                          S(m(Ft), { class: "po-stroke-current" })
                        ]),
                        za
                      ]),
                      s("a", {
                        href: "#",
                        onClick: V[1] || (V[1] = de((_) => f.$emit("button-click", "logout"), ["prevent"])),
                        class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-slate-50 hover:po-bg-blue-50 po-transition-all po-duration-150 po-ease-out",
                        role: "button"
                      }, [
                        s("span", Ha, [
                          S(m(ll), { class: "po-stroke-current" })
                        ]),
                        qa
                      ])
                    ]),
                    Ua
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
}), Nt = {
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
}, Ka = ["disabled", "aria-disabled"], Za = ["value", "disabled", "aria-disabled"], Qa = {
  name: "PoButton"
}, Dt = /* @__PURE__ */ Object.assign(Qa, {
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
    const l = e, n = "po-rounded-full po-transition-colors po-border po-duration-100 po-ease-in-out po-cursor-pointer disabled:po-bg-slate-400 disabled:po-border-slate-400 disabled:po-cursor-default disabled:po-hover:bg-slate-400", o = C(() => {
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
    return (i, u) => (r(), p(B, null, [
      e.isLoading ? (r(), p("span", {
        key: 0,
        class: E([[n, m(o)], "po-bg-slate-200 hover:po-bg-slate-200 focus:po-bg-slate-200"])
      }, [
        S(Nt, {
          "dot-color": "po-bg-slate-500",
          class: "po-relative -po-bottom-[0.2rem]"
        })
      ], 2)) : b("", !0),
      e.type == "button" && !e.isLoading ? (r(), p("button", Ee({
        key: 1,
        onClick: u[0] || (u[0] = de((d) => i.$emit("button-click", e.to), ["prevent"])),
        class: [n, m(o), m(a)],
        disabled: e.disabled,
        "aria-disabled": e.disabled
      }, i.$attrs), [
        te(i.$slots, "label", {}, () => [
          ae(h(e.label), 1)
        ])
      ], 16, Ka)) : b("", !0),
      e.type == "submit" && !e.isLoading ? (r(), p("input", Ee({
        key: 2,
        type: "submit",
        class: [n, m(o), m(a)],
        value: e.label,
        disabled: e.disabled,
        "aria-disabled": e.disabled
      }, i.$attrs), null, 16, Za)) : b("", !0),
      e.type == "link" && !e.isLoading ? (r(), p("a", Ee({
        key: 3,
        href: "#",
        onClick: u[1] || (u[1] = de((d) => i.$emit("button-click", e.to), ["prevent"])),
        class: [n, m(o), m(a)]
      }, i.$attrs), [
        te(i.$slots, "label", {}, () => [
          ae(h(e.label), 1)
        ])
      ], 16)) : b("", !0),
      e.type == "simple" && !e.isLoading ? (r(), p("a", {
        key: 4,
        href: "#",
        onClick: u[2] || (u[2] = de((d) => i.$emit("button-click", e.to), ["prevent"])),
        class: E(["po-text-sm po-transition-colors po-duration-100 po-ease-in-out po-inline-flex po-items-center po-space-x-1", [
          { "po-text-mpao-lightblue hover:po-text-mpao-blue": !e.overrideColors }
        ]])
      }, [
        te(i.$slots, "label", {}, () => [
          ae(h(e.label), 1)
        ])
      ], 2)) : b("", !0)
    ], 64));
  }
}), Ya = /* @__PURE__ */ s("div", { class: "po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity" }, null, -1), Ja = { class: "po-fixed po-z-10 po-inset-0" }, Xa = { class: "po-flex po-justify-center po-items-start po-min-h-screen po-px-4 po-pt-10 po-pb-20 po-text-center sm:po-block po-max-h-screen po-overflow-y-hidden" }, es = /* @__PURE__ */ s("span", {
  class: "po-hidden sm:po-inline-block sm:po-align-middle sm:po-h-screen",
  "aria-hidden": "true"
}, "​", -1), ts = { class: "po-flex po-items-center po-bg-white po-rounded-t-xl po-p-5" }, os = { class: "po-grow po-text-md po-font-bold po-text-slate-600" }, ls = { class: "po-shrink-0" }, ns = /* @__PURE__ */ s("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), as = { class: "po-p-5 po-max-h-[calc(100vh-230px)] po-overflow-y-auto po-min-h-[250px]" }, ss = {
  key: 0,
  class: "po-bg-slate-50 po-rounded-b-xl"
}, rs = {
  name: "PoModal"
}, Do = /* @__PURE__ */ Object.assign(rs, {
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
      e.openBtnLabel.length > 0 ? (r(), D(m(Dt), {
        key: 0,
        label: e.openBtnLabel,
        onClick: u[0] || (u[0] = (d) => o.value = !0)
      }, null, 8, ["label"])) : b("", !0),
      (r(), D(We, { to: "body" }, [
        S(m(Re), {
          as: "template",
          show: o.value
        }, {
          default: j(() => [
            S(m(et), {
              as: "div",
              class: "po-relative po-z-50",
              onClose: a
            }, {
              default: j(() => [
                S(m(_e), {
                  as: "template",
                  enter: "po-ease-out po-duration-300",
                  "enter-from": "po-opacity-0",
                  "enter-to": "po-opacity-100",
                  leave: "po-ease-in po-duration-200",
                  "leave-from": "po-opacity-100",
                  "leave-to": "po-opacity-0"
                }, {
                  default: j(() => [
                    Ya
                  ]),
                  _: 1
                }),
                s("div", Ja, [
                  s("div", Xa, [
                    es,
                    S(m(_e), {
                      as: "template",
                      enter: "po-ease-out po-duration-300",
                      "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                      "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                      leave: "po-ease-in po-duration-200",
                      "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                      "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                    }, {
                      default: j(() => [
                        S(m(tt), {
                          class: E(["po-relative po-inline-block po-align-bottom po-bg-white po-rounded-xl po-text-left po-shadow-xl po-transform po-transition-all sm:po-align-top po-w-full", e.modalWidth])
                        }, {
                          default: j(() => [
                            s("div", ts, [
                              s("h3", os, h(e.modalTitle), 1),
                              s("div", ls, [
                                s("span", {
                                  role: "button",
                                  class: "po-block",
                                  onClick: a
                                }, [
                                  S(m(Ke), { class: "po-w-5 po-stroke-slate-500 hover:po-stroke-mpao-orange po-transition-colors po-duration-150 po-ease-in-out" })
                                ])
                              ])
                            ]),
                            ns,
                            s("div", as, [
                              te(i.$slots, "content")
                            ]),
                            i.$slots.footer ? (r(), p("div", ss, [
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
      d: "M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z",
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
      d: "M2.24 6.8a.75.75 0 001.06-.04l1.95-2.1v8.59a.75.75 0 001.5 0V4.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L2.2 5.74a.75.75 0 00.04 1.06zm8 6.4a.75.75 0 00-.04 1.06l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V6.75a.75.75 0 00-1.5 0v8.59l-1.95-2.1a.75.75 0 00-1.06-.04z",
      "clip-rule": "evenodd"
    })
  ]);
}
function is(e, t) {
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
function ps(e, t) {
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
function Ro(e, t) {
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
function us(e, t) {
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
function ds(e, t) {
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
const cs = {
  key: 0,
  class: "po-text-lg po-text-red-400 po-font-semibold"
}, fs = {
  key: 0,
  class: "po-mt-1 po-flex -po-mb-3 po-flex-wrap"
}, vs = { class: "po-flex po-flex-1" }, ms = { class: "po-flex po-flex-col" }, hs = ["id"], bs = ["id"], gs = {
  name: "PoRadioInput"
}, ys = /* @__PURE__ */ Object.assign(gs, {
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
    }), (i, u) => (r(), D(m(Rn), {
      modelValue: n.value,
      "onUpdate:modelValue": u[0] || (u[0] = (d) => n.value = d),
      class: E([{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }])
    }, {
      default: j(() => [
        S(m(Kt), { class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700" }, {
          default: j(() => [
            s("span", null, h(e.label), 1),
            e.required ? (r(), p("span", cs, "*")) : b("", !0)
          ]),
          _: 1
        }),
        e.options !== null ? (r(), p("div", fs, [
          (r(!0), p(B, null, I(e.options, (d) => (r(), D(m(Hn), {
            as: "template",
            key: d.id,
            value: d.id
          }, {
            default: j(({ checked: v, active: c }) => [
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
                    v ? "po-border-mpao-lightblue" : "po-border-slate-400"
                  ]])
                }, [
                  s("span", {
                    class: E(["po-w-3 po-h-3 po-rounded-full", [
                      "",
                      v ? "po-bg-mpao-lightblue" : "po-bg-transparent"
                    ]])
                  }, null, 2)
                ], 2),
                s("span", vs, [
                  s("span", ms, [
                    S(m(Kt), {
                      as: "span",
                      class: "po-block po-text-sm po-font-medium po-text-gray-900"
                    }, {
                      default: j(() => [
                        ae(h(d.title), 1)
                      ]),
                      _: 2
                    }, 1024),
                    d.description ? (r(), D(m(qn), {
                      key: 0,
                      as: "span",
                      class: "po-mt-1 po-flex po-items-center po-text-sm po-text-gray-500"
                    }, {
                      default: j(() => [
                        ae(h(d.description), 1)
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
        s("div", null, [
          e.message !== null ? (r(), p("p", {
            key: 0,
            class: "po-mt-2 po-text-sm po-text-slate-500",
            id: `${i.id}-description`
          }, h(e.message), 9, hs)) : b("", !0),
          a.value && m(o) !== null ? (r(), p("p", {
            key: 1,
            class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
            id: `${i.id}-error`
          }, [
            S(m(Ro), { class: "po-fill-current po-w-4 po-mt-[0.2rem] po-shrink-0" }),
            s("span", null, h(m(o)), 1)
          ], 8, bs)) : b("", !0)
        ])
      ]),
      _: 1
    }, 8, ["modelValue", "class"]));
  }
});
function xs(e, t) {
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
function ws(e, t) {
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
function Vs(e, t) {
  return r(), p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", { d: "M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" })
  ]);
}
function zo(e, t) {
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
function ks(e, t) {
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
const $s = ["for"], _s = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Cs = ["title"], Ss = ["name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], Os = ["id"], Ps = ["id"], Es = {
  name: "PoTextarea"
}, Ls = /* @__PURE__ */ Object.assign(Es, {
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
        s("span", null, h(e.label), 1),
        e.required ? (r(), p("span", _s, "*")) : b("", !0),
        e.info !== null ? (r(), p("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          S(m(zo))
        ], 8, Cs)) : b("", !0)
      ], 8, $s),
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
      }), null, 16, Ss),
      e.message !== null ? (r(), p("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, h(e.message), 9, Os)) : b("", !0),
      e.errorMessage !== null ? (r(), p("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, h(e.errorMessage), 9, Ps)) : b("", !0)
    ], 2));
  }
}), js = { class: "shell-sidebar" }, Bs = { class: "po-grow" }, Ts = { class: "shell-sidebar--menu" }, Ns = ["onClick", "title"], Ds = { class: "shell-sidebar--icon" }, As = { class: "shell-sidebar--label po-font-medium po-text-left" }, Ms = { key: 0 }, Is = { class: "shell-sidebar--menu sidebar-apps po-shrink-0 po-mb-0" }, Fs = ["onClick"], Rs = { class: "shell-sidebar--icon" }, zs = ["innerHTML"], Hs = { class: "shell-sidebar--label po-font-medium po-text-left" }, qs = {
  key: 0,
  class: "shell-sidebar--menu po-shrink-0 po-mb-0 po-border-t po-border-slate-200 po-pt-3"
}, Us = { class: "shell-sidebar--icon" }, Gs = /* @__PURE__ */ s("span", { class: "shell-sidebar--label po-font-medium" }, "Feedback", -1), Ws = { action: "" }, Ks = /* @__PURE__ */ s("br", null, null, -1), Zs = { class: "po-p-5" }, Qs = {
  name: "PoSidebarDrawer"
}, L1 = /* @__PURE__ */ Object.assign(Qs, {
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
    ], a = $(o[0]), i = C(() => {
      let c = [];
      const f = l.apps.filter((V) => V.code == l.appCode)[0];
      return f && l.apps.filter(
        (x) => f.related.includes(x.code)
      ).forEach((x) => {
        c.push(x);
      }), c;
    }), u = $(null);
    function d() {
      window.innerWidth <= 1024 && (u.value.checked = !u.value.checked);
    }
    function v(c, f) {
      t(c, f), d();
    }
    return (c, f) => (r(), p(B, null, [
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
        s("div", Bs, [
          (r(!0), p(B, null, I(e.content, (V) => (r(), p("div", null, [
            S(m(Ut), { defaultOpen: !0 }, {
              default: j(({ open: x }) => [
                V.groupName ? (r(), D(m(Gt), {
                  key: 0,
                  class: E([x ? "" : "po-mb-3", "shell-sidebar--section po-w-full po-text-left"])
                }, {
                  default: j(() => [
                    ae(h(V.groupName), 1)
                  ]),
                  _: 2
                }, 1032, ["class"])) : b("", !0),
                S(we, {
                  "enter-active-class": "po-transition po-duration-100 po-ease-out",
                  "enter-from-class": "po-transform po-scale-95 po-opacity-0",
                  "enter-to-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-active-class": "po-transition po-duration-75 po-ease-out",
                  "leave-from-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-to-class": "po-transform po-scale-95 po-opacity-0"
                }, {
                  default: j(() => [
                    S(m(Wt), null, {
                      default: j(() => [
                        s("ul", Ts, [
                          (r(!0), p(B, null, I(V.items, (w) => (r(), p("li", null, [
                            w.disabled ? b("", !0) : (r(), p("button", {
                              key: 0,
                              onClick: (g) => v("button-click", w.url),
                              class: E([
                                "shell-sidebar--item",
                                { active: w.url == e.currRoute }
                              ]),
                              title: `Go to ${w.label}`
                            }, [
                              s("span", Ds, [
                                (r(), D(ye(w.icon), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" }))
                              ]),
                              s("span", As, h(w.label), 1)
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
          e.apps !== null ? (r(), p("div", Ms, [
            S(m(Ut), { defaultOpen: !0 }, {
              default: j(({ open: V }) => [
                e.appsLabel ? (r(), D(m(Gt), {
                  key: 0,
                  class: E([V ? "" : "po-mb-3", "shell-sidebar--section po-w-full po-text-left"])
                }, {
                  default: j(() => [
                    ae(h(e.appsLabel), 1)
                  ]),
                  _: 2
                }, 1032, ["class"])) : b("", !0),
                S(we, {
                  "enter-active-class": "po-transition po-duration-100 po-ease-out",
                  "enter-from-class": "po-transform po-scale-95 po-opacity-0",
                  "enter-to-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-active-class": "po-transition po-duration-75 po-ease-out",
                  "leave-from-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-to-class": "po-transform po-scale-95 po-opacity-0"
                }, {
                  default: j(() => [
                    S(m(Wt), null, {
                      default: j(() => [
                        s("ul", Is, [
                          (r(!0), p(B, null, I(m(i), (x, w) => (r(), p("li", null, [
                            s("button", {
                              onClick: (g) => v("app-click", x.name),
                              class: E(["shell-sidebar--item", [{ active: x.current }]]),
                              title: "Go to feedback"
                            }, [
                              s("span", Rs, [
                                s("span", {
                                  innerHTML: x.icon,
                                  class: "po-text-slate-600 po-w-5"
                                }, null, 8, zs)
                              ]),
                              s("span", Hs, h(x.name), 1)
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
          ])) : b("", !0)
        ]),
        e.hasFeedback ? (r(), p("ul", qs, [
          s("li", null, [
            s("button", {
              onClick: f[0] || (f[0] = de(() => n.value = !0, ["prevent"])),
              class: "shell-sidebar--item",
              title: "Go to feedback"
            }, [
              s("span", Us, [
                S(m(pl), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" })
              ]),
              Gs
            ])
          ])
        ])) : b("", !0),
        S(Do, {
          show: n.value,
          onModalClosed: f[2] || (f[2] = () => n.value = !1),
          "modal-title": "Feedback"
        }, {
          content: j(() => [
            s("form", Ws, [
              S(ys, {
                label: "Type",
                options: o,
                "pre-selected": a.value,
                modelValue: a.value,
                "onUpdate:modelValue": f[1] || (f[1] = (V) => a.value = V)
              }, null, 8, ["pre-selected", "modelValue"]),
              Ks,
              S(Ls, {
                cols: "6",
                rows: "6",
                label: "Description",
                message: ""
              })
            ])
          ]),
          footer: j(() => [
            s("div", Zs, [
              S(Dt, {
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
}), Ys = {
  key: 0,
  class: "shell-content--action-bar"
}, Js = { class: "action-bar__nav" }, Xs = ["onClick"], er = { class: "action-bar__nav_label po-font-medium" }, tr = {
  key: 0,
  class: "po-shrink-0 po-flex po-space-x-1"
}, or = /* @__PURE__ */ s("span", { class: "action-bar__nav_label po-font-medium" }, "Go Back", -1), lr = {
  name: "PoActionBar"
}, j1 = /* @__PURE__ */ Object.assign(lr, {
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
    return (t, l) => e.items !== null && e.items.length > 0 || e.showBackButton ? (r(), p("section", Ys, [
      s("nav", Js, [
        (r(!0), p(B, null, I(e.items, (n) => (r(), p("span", {
          onClick: (o) => t.$emit("button-click", n.label),
          class: E([[
            { "action-bar__nav_highlighted": n.highlighted },
            { "action-bar__nav_danger": n.danger }
          ], "action-bar__nav_link"])
        }, [
          (r(), D(ye(n.icon), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" })),
          s("span", er, h(n.label), 1)
        ], 10, Xs))), 256))
      ]),
      e.showBackButton ? (r(), p("nav", tr, [
        s("span", {
          onClick: l[0] || (l[0] = (n) => t.$emit("button-click", "back")),
          class: "action-bar__nav_link"
        }, [
          or,
          (r(), D(ye(m(nl)), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" }))
        ])
      ])) : b("", !0)
    ])) : b("", !0);
  }
}), nr = { class: "po-shadow-sm po-rounded-xl po-bg-white po-relative" }, ar = {
  key: 0,
  class: "po-absolute po-right-2 po-top-2 po-p-2 po-rounded-lg"
}, sr = {
  key: 0,
  class: "po-text-base po-font-medium po-text-slate-600"
}, rr = {
  key: 1,
  class: "lg:po-col-span-2 lg:po-flex lg:po-justify-end po-space-x-2"
}, ir = {
  name: "PoCard"
}, B1 = /* @__PURE__ */ Object.assign(ir, {
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
    return (t, l) => (r(), p("div", nr, [
      e.isLoading ? (r(), p("div", ar, [
        S(Nt)
      ])) : b("", !0),
      s("div", {
        class: E([
          { "po-grid po-grid-cols-1 lg:po-grid-cols-3 po-gap-3": t.$slots.action }
        ])
      }, [
        e.title.length > 0 ? (r(), p("h3", sr, h(e.title), 1)) : b("", !0),
        t.$slots.action ? (r(), p("div", rr, [
          te(t.$slots, "action")
        ])) : b("", !0)
      ], 2),
      te(t.$slots, "content")
    ]));
  }
}), pr = { class: "po-py-3 po-px-5 po-border-b po-border-slate-200" }, ur = {
  class: "po-flex po-w-full md:po-ml-0",
  action: "#",
  method: "GET"
}, dr = {
  for: "search-field",
  class: "po-sr-only"
}, cr = { class: "po-relative po-w-full po-text-slate-400 focus-within:po-text-mpao-lightblue po-transition-colors po-duration-100 po-ease-in-out" }, fr = { class: "po-pointer-events-none po-absolute po-inset-y-0 po-left-0 po-flex po-items-center" }, vr = ["placeholder", "value"], mr = {
  name: "PoCardSearch"
}, T1 = /* @__PURE__ */ Object.assign(mr, {
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
    return (l, n) => (r(), p("div", pr, [
      s("form", ur, [
        s("label", dr, h(e.placeholder), 1),
        s("div", cr, [
          s("div", fr, [
            S(m(xt), { class: "po-h-5 po-w-5 po-flex-shrink-0" })
          ]),
          s("input", {
            name: "search-field",
            id: "desktop-search-field",
            placeholder: e.placeholder,
            value: e.modelValue,
            onInput: n[0] || (n[0] = (o) => l.$emit("update:modelValue", o.target.value)),
            class: "po-h-full po-w-full po-border-transparent po-py-2 po-pl-8 po-pr-3 po-text-sm po-text-slate-700 po-placeholder-slate-500 focus:po-border-transparent focus:po-placeholder-slate-400 focus:po-outline-none focus:po-ring-0",
            type: "search"
          }, null, 40, vr)
        ])
      ])
    ]));
  }
}), hr = { class: "po-flex po-items-center" }, br = { class: "po-text-sm po-font-medium po-text-slate-500 po-pr-2" }, gr = {
  name: "PoPagination"
}, yr = /* @__PURE__ */ Object.assign(gr, {
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
    const a = C(() => l.totalPages ? `Page ${l.currentPage} of ${l.totalPages}` : l.pagination ? l.pagination.label : "");
    return (i, u) => (r(), p("div", hr, [
      s("span", br, h(m(a)), 1),
      s("button", {
        title: "Previous",
        onClick: n,
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        S(m(fl), { class: "po-w-4 po-stroke-current po-stroke-2" })
      ]),
      s("button", {
        title: "Next",
        onClick: o,
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        S(m(vl), { class: "po-w-4 po-stroke-current po-stroke-2" })
      ])
    ]));
  }
}), xr = { key: 0 }, wr = {
  class: "po-text-xl md:po-text-2xl po-font-semibold po-text-slate-800",
  id: "po-page-title"
}, Vr = {
  key: 0,
  class: "po-text-base po-mt-2 po-max-w-md po-block po-text-slate-500"
}, kr = { key: 1 }, $r = { class: "po-grid po-grid-cols-1 lg:po-grid-cols-2 po-gap-5" }, _r = {
  class: "po-text-xl md:po-text-2xl po-font-semibold po-text-slate-800",
  id: "po-page-title"
}, Cr = {
  key: 0,
  class: "po-text-base po-mt-4 po-max-w-md po-pb-5 po-block po-text-slate-500"
}, Sr = { class: "po-flex po-items-end po-justify-end po-flex-col" }, Or = {
  key: 0,
  class: "po-flex md:po-justify-end po-mb-5"
}, Pr = { class: "po-bg-slate-50 po-shadow-sm po-rounded-xl po-py-5 po-px-2 po-divide-x po-divide-slate-200 po-flex" }, Er = ["onClick"], Lr = { class: "po-text-xl po-font-medium po-text-slate-600 po-flex po-items-center po-space-x-1" }, jr = { class: "po-text-xl po-font-medium po-text-slate-600 group-hover:po-text-mpao-lightblue" }, Br = { class: "po-text-sm po-text-slate-500 po-block group-hover:po-text-mpao-lightblue" }, Tr = { class: "po-flex po-items-center po-space-x-1 md:po-justify-end" }, Nr = {
  key: 2,
  class: "po-border-l po-border-slate-400 po-h-3 po-w-3 po-ml-1"
}, Dr = {
  key: 0,
  class: "po-bg-slate-50 po-p-5 po-mt-5 po-rounded-md po-grid po-grid-cols-1 md:po-grid-cols-3 po-gap-5"
}, Ar = /* @__PURE__ */ s("span", { class: "po-text-xs po-text-slate-500 po-py-5" }, "No filters available at the moment.", -1), Mr = {
  name: "PoPageTitle"
}, N1 = /* @__PURE__ */ Object.assign(Mr, {
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
    return (i, u) => e.standAlone ? (r(), p("div", xr, [
      s("h1", wr, h(e.label), 1),
      e.description !== "" ? (r(), p("span", Vr, h(e.description), 1)) : b("", !0)
    ])) : (r(), p("div", kr, [
      s("div", $r, [
        s("div", null, [
          s("h1", _r, h(e.label), 1),
          e.description !== "" ? (r(), p("span", Cr, h(e.description), 1)) : b("", !0)
        ]),
        s("div", Sr, [
          e.stats !== null ? (r(), p("div", Or, [
            s("div", Pr, [
              (r(!0), p(B, null, I(e.stats, (d) => (r(), p("div", {
                class: "po-px-5 po-cursor-pointer po-group genie-effect",
                onClick: (v) => i.$emit("stat-click", d)
              }, [
                s("span", Lr, [
                  s("span", jr, h(d.value), 1),
                  d.icon ? (r(), p("span", {
                    key: 0,
                    class: E(["po-w-5 po-h-5", a(d)])
                  }, [
                    (r(), D(ye(d.icon)))
                  ], 2)) : b("", !0)
                ]),
                s("span", Br, h(d.label), 1)
              ], 8, Er))), 256))
            ])
          ])) : b("", !0),
          s("div", Tr, [
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
              S(m(bl), { class: "po-w-4 po-stroke-current po-stroke-2" })
            ], 2)) : b("", !0),
            e.showDownload ? (r(), p("button", {
              key: 1,
              title: "Download",
              onClick: u[1] || (u[1] = (d) => i.$emit("button-click", "download")),
              class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
            }, [
              S(m(ol), { class: "po-w-4 po-stroke-current po-stroke-2" })
            ])) : b("", !0),
            e.showFilter && e.showPagination || e.showDownload && e.showPagination ? (r(), p("span", Nr, " ")) : b("", !0),
            e.showPagination ? (r(), D(yr, {
              key: 3,
              pagination: e.pagination,
              onButtonClick: o
            }, null, 8, ["pagination"])) : b("", !0)
          ])
        ])
      ]),
      S(we, {
        "enter-active-class": "po-transition po-duration-100 po-ease-out",
        "enter-from-class": "po-transform po-scale-95 po-opacity-0",
        "enter-to-class": "po-transform po-scale-100 po-opacity-100",
        "leave-active-class": "po-transition po-duration-75 po-ease-out",
        "leave-from-class": "po-transform po-scale-100 po-opacity-100",
        "leave-to-class": "po-transform po-scale-95 po-opacity-0"
      }, {
        default: j(() => [
          m(n) ? (r(), p("div", Dr, [
            te(i.$slots, "filters", {}, () => [
              Ar
            ])
          ])) : b("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), Ir = { key: 1 }, Fr = ["colspan"], Rr = { class: "po-py-10 po-block po-normal-case" }, zr = { class: "po-pr-5" }, Hr = { class: "po-py-1" }, qr = { key: 0 }, Ur = {
  name: "PoTable"
}, D1 = /* @__PURE__ */ Object.assign(Ur, {
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
    }
  },
  setup(e) {
    const t = e, { isLoading: l, tbody: n } = be(t), o = $(!1), a = $(null);
    Z(l, () => {
      i();
    }), Z(n, () => {
      i();
    }), H(() => {
      i();
    });
    function i() {
      o.value = l.value, a.value = n.value, l.value && (a.value = [{}, {}, {}, {}, {}]);
    }
    function u() {
      return Math.floor(Math.random() * 41) + 40;
    }
    return (d, v) => (r(), p("table", {
      class: E(["table-responsive po-w-full", [{ lg: e.breakAtLg }]])
    }, [
      s("thead", null, [
        s("tr", null, [
          (r(!0), p(B, null, I(e.thead, (c) => (r(), p("th", null, [
            te(d.$slots, "th", Ue(Ge(c)))
          ]))), 256))
        ])
      ]),
      s("tbody", null, [
        a.value !== null && !o.value || a.value !== null && a.value.length !== 0 && !o.value ? (r(!0), p(B, { key: 0 }, I(a.value, (c, f) => (r(), p("tr", null, [
          te(d.$slots, "td", Ue(Ge({ ...c, index: f, item: c })))
        ]))), 256)) : b("", !0),
        a.value == null && !o.value || a.value !== null && a.value.length == 0 && !o.value ? (r(), p("tr", Ir, [
          s("td", {
            colspan: e.thead.length + 1,
            class: "po-text-center"
          }, [
            s("span", Rr, h(e.emptyMessage), 1)
          ], 8, Fr)
        ])) : b("", !0),
        o.value ? (r(!0), p(B, { key: 2 }, I(a.value, (c) => (r(), p("tr", null, [
          (r(!0), p(B, null, I(e.thead, (f) => (r(), p("td", zr, [
            s("div", Hr, [
              s("div", {
                class: "po-h-2 loading-placeholder po-rounded-full",
                style: gt({ width: u() + "%" })
              }, null, 4)
            ])
          ]))), 256))
        ]))), 256)) : b("", !0)
      ]),
      d.$slots.tfoot ? (r(), p("tfoot", qr, [
        s("tr", null, [
          te(d.$slots, "tfoot")
        ])
      ])) : b("", !0)
    ], 2));
  }
}), Gr = ["onUpdate:modelValue", "id"], Wr = ["for"], Kr = { class: "table-responsive po-w-full" }, Zr = ["onClick"], Qr = { key: 0 }, Yr = ["onClick"], Jr = {
  name: "PoDynamicTable",
  components: { ArrowsUpDownIcon: Io, ArrowUpIcon: Mo, ArrowDownIcon: Ao }
}, A1 = /* @__PURE__ */ Object.assign(Jr, {
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
      d.hidden = !d.hidden, l.value = t.columns.filter((v) => !v.hidden);
    }, i = (d) => {
      d.sortable && (d.sorted && o.value === "asc" ? o.value = "desc" : o.value = "asc", l.value.forEach((v) => {
        v.key === d.key ? (v.sorted = !0, v.sortDirection = o.value) : (v.sorted = !1, v.sortDirection = null);
      }), n.value = d);
    }, u = $([]);
    return le(() => {
      n.value ? u.value = [...t.data].sort((d, v) => {
        let c = d[n.value.key], f = v[n.value.key];
        return typeof c == "string" && typeof f == "string" && (c = c.toLowerCase(), f = f.toLowerCase()), c < f ? o.value === "asc" ? -1 : 1 : c > f ? o.value === "asc" ? 1 : -1 : 0;
      }) : u.value = [...t.data];
    }), (d, v) => (r(), p("div", null, [
      (r(!0), p(B, null, I(l.value, (c) => (r(), p("div", null, [
        Me(s("input", {
          type: "checkbox",
          name: "dynamic",
          "onUpdate:modelValue": (f) => c.hidden = f,
          id: `hide-table-col-${c.label}`
        }, null, 8, Gr), [
          [Jo, c.hidden]
        ]),
        s("label", {
          for: `hide-table-col-${c.label}`
        }, h(c.label), 9, Wr)
      ]))), 256)),
      s("table", Kr, [
        s("thead", null, [
          s("tr", null, [
            (r(!0), p(B, null, I(l.value, (c) => (r(), p("th", {
              key: c.key,
              onClick: (f) => i(c)
            }, [
              ae(h(c.label) + " " + h(c.sorted) + " " + h(c.sortDirection) + " ", 1),
              c.sortable ? (r(), p("span", Qr, [
                c.sorted ? b("", !0) : (r(), D(m(Io), {
                  key: 0,
                  class: "po-w-4"
                })),
                c.sorted && c.sortDirection === "asc" ? (r(), D(m(Mo), {
                  key: 1,
                  class: "po-w-4"
                })) : b("", !0),
                c.sorted && c.sortDirection === "desc" ? (r(), D(m(Ao), {
                  key: 2,
                  class: "po-w-4"
                })) : b("", !0)
              ])) : b("", !0),
              c.hidable ? (r(), p("button", {
                key: 1,
                onClick: (f) => a(c)
              }, h(c.hidden ? "Show" : "Hide"), 9, Yr)) : b("", !0)
            ], 8, Zr))), 128))
          ])
        ]),
        s("tbody", null, [
          (r(!0), p(B, null, I(u.value, (c) => (r(), p("tr", {
            key: c.id
          }, [
            (r(!0), p(B, null, I(l.value, (f) => (r(), p("td", {
              key: f.key
            }, h(c[f.key]), 1))), 128))
          ]))), 128))
        ])
      ])
    ]));
  }
}), Xr = { class: "" }, ei = { class: "po-grow" }, ti = ["onClick"], oi = {
  name: "PoDescriptionList"
}, Ho = /* @__PURE__ */ Object.assign(oi, {
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
        te(l.$slots, "content", {}, () => [
          (r(!0), p(B, null, I(e.items, (o) => (r(), p("div", null, [
            s("dt", null, h(o.title), 1),
            s("dd", Xr, [
              s("span", ei, h(o.description), 1),
              o.action !== void 0 ? (r(), p("span", {
                key: 0,
                class: "po-shrink-0 po-text-mpao-lightblue hover:po-text-mpao-blue po-transition-colors po-duration-100 po-ease-in-out po-px-2 po-cursor-pointer",
                onClick: (a) => l.$emit("button-click", o.action)
              }, h(o.action), 9, ti)) : b("", !0)
            ])
          ]))), 256))
        ])
      ], 2)
    ]));
  }
}), li = ["for"], ni = { class: "po-capitalize" }, ai = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, si = ["title"], ri = ["type", "name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], ii = ["id"], pi = ["id"], ui = {
  name: "PoInputField"
}, M1 = /* @__PURE__ */ Object.assign(ui, {
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
        s("span", ni, h(e.label), 1),
        e.required ? (r(), p("span", ai, "*")) : b("", !0),
        e.info !== null ? (r(), p("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          S(m(At), { class: "po-fill-current" })
        ], 8, si)) : b("", !0)
      ], 8, li),
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
      }), null, 16, ri),
      e.message !== null ? (r(), p("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, h(e.message), 9, ii)) : b("", !0),
      o.value && m(n) !== null ? (r(), p("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
        id: `${e.id}-error`
      }, [
        s("span", null, h(m(n)), 1)
      ], 8, pi)) : b("", !0)
    ], 2));
  }
}), di = { class: "po-text-sm po-font-medium po-text-slate-700 peer-focus:po-text-mpao-lightblue peer-invalid:po-text-red-500 peer-invalid:peer-focus:po-text-red-600 po-flex po-items-center po-space-x-1 po-capitalize" }, ci = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, fi = ["name", "id", "value"], vi = ["for"], mi = { class: "po-flex po-items-center po-space-x-1" }, hi = {
  key: 0,
  class: "po-text-sm"
}, bi = {
  key: 1,
  class: "po-text-sm"
}, gi = {
  key: 0,
  class: "po-mt-3 po-flex po-w-full po-h-1.5 po-bg-gray-100 po-rounded-full po-overflow-hidden"
}, yi = ["aria-valuenow"], xi = ["id"], wi = ["id"], Vi = {
  name: "PoInputFile"
}, I1 = /* @__PURE__ */ Object.assign(Vi, {
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
    const t = e, l = C(() => `width: ${t.progress}%`), n = C(() => t.progress), o = $(""), a = (i) => {
      const u = i.target.files[0];
      u ? o.value = u.name : o.value = "";
    };
    return (i, u) => (r(), p("div", {
      class: E(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      s("span", di, [
        s("span", null, h(e.label), 1),
        e.required ? (r(), p("span", ci, "*")) : b("", !0)
      ]),
      s("input", {
        name: `${e.id}-upload`,
        id: `${e.id}-fileupload`,
        value: e.modelValue,
        type: "file",
        onInput: u[0] || (u[0] = (d) => i.$emit("update:modelValue", d.target.value)),
        onChange: u[1] || (u[1] = (d) => a(d)),
        class: "po-sr-only po-peer"
      }, null, 40, fi),
      s("label", {
        for: `${e.id}-fileupload`,
        class: "po-mt-1 po-block po-w-full po-border po-cursor-pointer po-rounded-md po-border-slate-300 po-bg-white peer-focus:po-border-mpao-lightblue invalid:po-border-red-400 invalid:focus:po-border-red-600 invalid:focus:po-ring-red-600 sm:po-text-sm po-p-2"
      }, [
        s("div", mi, [
          S(m(eo), { class: "po-w-4 po-stroke-slate-500" }),
          o.value ? (r(), p("span", hi, h(o.value), 1)) : (r(), p("span", bi, "Choose file"))
        ])
      ], 8, vi),
      m(n) !== null ? (r(), p("div", gi, [
        s("div", {
          class: "po-flex po-flex-col po-justify-center po-overflow-hidden po-bg-mpao-lightblue",
          role: "progressbar",
          style: gt(m(l)),
          "aria-valuenow": m(n),
          "aria-valuemin": "0",
          "aria-valuemax": "100"
        }, null, 12, yi)
      ])) : b("", !0),
      e.message !== null ? (r(), p("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, h(e.message), 9, xi)) : b("", !0),
      e.errorMessage !== null ? (r(), p("p", {
        key: 2,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, h(e.errorMessage), 9, wi)) : b("", !0)
    ], 2));
  }
}), ki = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, $i = ["title"], _i = { class: "po-relative po-mt-1" }, Ci = { class: "po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-rounded-r-md po-px-2 focus:po-outline-none" }, Si = {
  key: 0,
  class: "po-block po-text-xs po-opacity-60"
}, Oi = {
  key: 0,
  class: "po-mt-2 po-text-sm po-text-slate-500",
  id: "-description"
}, Pi = {
  key: 1,
  class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
  id: "-error"
}, Ei = {
  name: "PoSelectField"
}, F1 = /* @__PURE__ */ Object.assign(Ei, {
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
    }
  },
  emits: ["selected", "unSelected", "update:modelValue"],
  setup(e, { emit: t }) {
    const l = e, n = $(""), o = $(), a = C(
      () => n.value === "" ? l.list : l.list.filter((v) => v.name.toLowerCase().includes(n.value.toLowerCase()))
    );
    function i(v) {
      if (a.value) {
        let c = a.value.find((f) => f.id === v);
        return c == null ? void 0 : c.name;
      }
    }
    o.value = l.modelValue, bt(() => {
      o.value = l.modelValue;
    }), Z(o, () => {
      t("update:modelValue", o.value), t("selected", o.value);
    });
    const { errorMessage: u } = be(l), d = $(u.value !== null);
    return Z(u, (v, c) => {
      d.value = u.value !== null && u.value !== "";
    }), (v, c) => (r(), D(m(un), {
      as: "div",
      modelValue: o.value,
      "onUpdate:modelValue": c[1] || (c[1] = (f) => o.value = f),
      class: E([{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]),
      disabled: e.disabled
    }, {
      default: j(() => [
        S(m(dn), { class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700" }, {
          default: j(() => [
            s("span", null, h(e.label), 1),
            e.required ? (r(), p("span", ki, "*")) : b("", !0),
            e.info !== null ? (r(), p("abbr", {
              key: 1,
              title: e.info,
              class: "po-w-4 po-text-slate-500"
            }, [
              S(m(At), { class: "po-fill-current" })
            ], 8, $i)) : b("", !0)
          ]),
          _: 1
        }),
        s("div", _i, [
          S(m(cn), { as: "div" }, {
            default: j(() => [
              S(m(fn), {
                class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm",
                onChange: c[0] || (c[0] = (f) => n.value = f.target.value),
                "display-value": i,
                disabled: e.disabled
              }, null, 8, ["disabled"]),
              s("span", Ci, [
                S(m(ps), {
                  class: "po-h-5 po-w-5 po-text-slate-400",
                  "aria-hidden": "true"
                })
              ])
            ]),
            _: 1
          }),
          m(a).length > 0 ? (r(), D(m(vn), {
            key: 0,
            class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
          }, {
            default: j(() => [
              (r(!0), p(B, null, I(m(a), (f) => (r(), D(m(mn), {
                key: f.id,
                value: e.object ? f : f.id,
                as: "template"
              }, {
                default: j(({ active: V, selected: x }) => [
                  s("li", {
                    class: E([
                      "po-relative po-cursor-default po-select-none po-py-2 po-pl-3 po-pr-9",
                      V ? "po-bg-mpao-lightblue po-text-white" : "po-text-slate-900"
                    ])
                  }, [
                    s("span", {
                      class: E(["po-block po-truncate", x && "po-font-semibold"])
                    }, [
                      ae(h(f.name) + " ", 1),
                      f.subtitle ? (r(), p("span", Si, h(f.subtitle), 1)) : b("", !0)
                    ], 2),
                    x ? (r(), p("span", {
                      key: 0,
                      class: E([
                        "po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-pr-4",
                        V ? "po-text-white" : "po-text-mpao-lightblue"
                      ])
                    }, [
                      S(m(Fo), {
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
        e.message !== null ? (r(), p("p", Oi, h(e.message), 1)) : b("", !0),
        m(u) !== null ? (r(), p("p", Pi, [
          s("span", null, h(m(u)), 1)
        ])) : b("", !0)
      ]),
      _: 1
    }, 8, ["modelValue", "class", "disabled"]));
  }
}), Li = { class: "po-text-sm po-font-medium po-text-slate-700 po-cursor-pointer po-select-none po-flex po-items-center po-space-x-1" }, ji = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Bi = {
  name: "PoToggle"
}, R1 = /* @__PURE__ */ Object.assign(Bi, {
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
    return (n, o) => (r(), D(m(Un), {
      as: "div",
      class: "po-flex po-items-center"
    }, {
      default: j(() => [
        S(m(Gn), {
          modelValue: l.value,
          "onUpdate:modelValue": o[0] || (o[0] = (a) => l.value = a),
          onClick: o[1] || (o[1] = (a) => n.$emit("update:modelValue", !l.value)),
          class: E([
            l.value ? "po-bg-mpao-lightblue" : "po-bg-slate-200",
            "po-relative po-inline-flex po-h-6 po-w-11 po-flex-shrink-0 po-cursor-pointer po-rounded-full po-border-2 po-border-transparent po-transition-colors po-duration-200 po-ease-in-out focus:po-outline-none focus:po-ring-2 focus:po-ring-mpao-lightblue focus:po-ring-offset-2"
          ])
        }, {
          default: j(() => [
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
        S(m(Wn), {
          as: "span",
          class: "po-ml-3"
        }, {
          default: j(() => [
            s("span", Li, [
              s("span", null, h(e.label), 1),
              e.required ? (r(), p("span", ji, "*")) : b("", !0)
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Ti = { class: "po-pt-1 po-space-y-1 po-border-r-2 po-border-slate-200 po-relative" }, Ni = ["onClick"], Di = {
  name: "PoSectionMenu"
}, z1 = /* @__PURE__ */ Object.assign(Di, {
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
    return (t, l) => (r(), p("ul", Ti, [
      (r(!0), p(B, null, I(e.menuItems, (n) => (r(), p("li", null, [
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
          (r(), D(ye(n.icon), { class: "po-w-4 po-h-4 po-stroke-current" })),
          s("span", null, h(n.label), 1)
        ], 10, Ni)
      ]))), 256))
    ]));
  }
}), Ai = { class: "po-relative po-flex po-items-start" }, Mi = { class: "po-flex po-h-5 po-items-center" }, Ii = ["name", "id", "checked", "disabled", "aria-describedby"], Fi = { class: "po-ml-3 po-text-sm" }, Ri = ["for"], zi = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Hi = ["id"], qi = { class: "po-sr-only" }, Ui = ["id"], Gi = {
  name: "PoCheckbox"
}, H1 = /* @__PURE__ */ Object.assign(Gi, {
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
      s("div", Ai, [
        s("div", Mi, [
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
          }), null, 16, Ii)
        ]),
        s("div", Fi, [
          s("label", {
            for: e.id,
            class: "po-font-medium po-text-slate-600 po-cursor-pointer po-select-none po-flex po-items-center po-space-x-1"
          }, [
            s("span", null, h(e.label), 1),
            e.required ? (r(), p("span", zi, "*")) : b("", !0)
          ], 8, Ri),
          e.message ? (r(), p("span", {
            key: 0,
            id: `${e.id}-description`,
            class: "po-text-slate-500 po-cursor-default"
          }, [
            s("span", qi, h(e.label), 1),
            ae(" " + h(e.message), 1)
          ], 8, Hi)) : b("", !0)
        ])
      ]),
      e.errorMessage !== null ? (r(), p("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, h(e.errorMessage), 9, Ui)) : b("", !0)
    ]));
  }
}), Wi = { class: "po-grid po-gap-5 po-grid-cols-1 lg:po-grid-cols-2 po-px-6 lg:po-px-8 po-mt-10 po-pb-10" }, Ki = { class: "sm:po-flex po-items-start sm:po-space-x-5" }, Zi = /* @__PURE__ */ s("img", {
  class: "po-h-10",
  src: "https://pension.gov.mv/asset/image/enlgish_website_logo.svg",
  alt: "Pension Office logo"
}, null, -1), Qi = { class: "po-mt-5 sm:po-mt-0" }, Yi = /* @__PURE__ */ s("p", { class: "-po-mt-1 po-text-xs po-text-slate-500" }, " 8th Floor, Allied Building , Chaandhanee Magu, Malé, 20156, Maldives ", -1), Ji = { class: "po-mt-1 po-text-xs po-text-slate-500" }, Xi = { class: "po-mt-1 po-text-xs po-text-slate-500 po-flex -po-mb-2 po-flex-wrap" }, ep = {
  href: "https://www.pension.gov.mv",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, tp = /* @__PURE__ */ s("span", null, "www.pension.gov.mv", -1), op = {
  href: "mailto:info@pension.gov.mv",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, lp = /* @__PURE__ */ s("span", null, "info@pension.gov.mv", -1), np = {
  href: "tel:1441",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, ap = /* @__PURE__ */ s("span", null, "1441", -1), sp = { class: "po-flex lg:po-items-end po-flex-col" }, rp = { class: "-po-mt-1 po-text-xs po-text-slate-500 po-flex -po-mb-2 po-flex-wrap" }, ip = /* @__PURE__ */ s("a", {
  href: "",
  class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, "Terms & Conditions", -1), pp = /* @__PURE__ */ s("a", {
  href: "",
  class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, "Privacy Policy", -1), up = /* @__PURE__ */ s("div", { class: "po-flex po-space-x-2 po-mt-3 lg:po-justify-end" }, [
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
], -1), dp = /* @__PURE__ */ s("div", { class: "po-pb-5 po-max-w-xl" }, [
  /* @__PURE__ */ s("span", { class: "po-text-sm po-text-slate-600" }, "We're always working to improve our app, and we're excited to share the latest changes with you. We hope you enjoy these new features and improvements")
], -1), cp = { class: "po-flex po-space-x-2" }, fp = ["onClick"], vp = { class: "po-text-sm po-font-semibold po-slate-800" }, mp = { class: "po-text-xs po-text-white po-px-1 po-py-0 po-rounded-md po-bg-mpao-lightblue" }, hp = { class: "po-bg-gradient-to-t po-from-mpao-orange/20 po-via-mpao-lightblue/20 po-to-purple-500/10 -po-mb-5 -po-mx-5 po-p-5 po-pb-10" }, bp = { key: 0 }, gp = { class: "po-space-y-2 po-mt-5" }, yp = { class: "po-border po-border-slate-200 po-rounded-lg po-p-3 po-bg-white" }, xp = { class: "po-flex po-items-center po-space-x-2" }, wp = { class: "po-text-mpao-lightblue po-grow po-text-lg" }, Vp = { class: "po-font-semibold po-shrink-0 po-text-mpao-lightblue po-text-sm po-px-2 po-py-1 po-rounded-xl po-bg-mpao-lightblue/10" }, kp = ["innerHTML"], $p = {
  key: 0,
  class: "po-bg-white po-rounded-md po-px-4 po-py-3 po-block po-text-sm po-text-center po-text-mpao-lightblue hover:po-text-purple-600 po-cursor-pointer"
}, _p = {
  name: "PoFooter"
}, q1 = /* @__PURE__ */ Object.assign(_p, {
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
      s("section", Wi, [
        s("div", Ki, [
          Zi,
          s("div", Qi, [
            Yi,
            s("p", Ji, " © " + h(new Date().getFullYear()) + " Pension Office, All Rights Reserved. ", 1),
            s("p", Xi, [
              s("a", ep, [
                S(m(Vs), { class: "po-w-3 po-h-3 po-fill-current" }),
                tp
              ]),
              s("a", op, [
                S(m(xs), { class: "po-w-3 po-h-3 po-fill-current" }),
                lp
              ]),
              s("a", np, [
                S(m(ks), { class: "po-w-3 po-h-3 po-fill-current" }),
                ap
              ])
            ])
          ])
        ]),
        s("div", sp, [
          s("nav", rp, [
            e.changelog ? (r(), p("a", {
              key: 0,
              href: "#",
              onClick: a[0] || (a[0] = de((i) => l.value = !0, ["prevent"])),
              class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
            }, "Change logs")) : b("", !0),
            ip,
            pp
          ]),
          up
        ])
      ]),
      S(Do, {
        show: l.value,
        onModalClosed: a[1] || (a[1] = (i) => l.value = !1),
        "modal-title": "Change Log",
        "modal-width": "sm:po-max-w-4xl",
        id: "change-log-modal"
      }, {
        content: j(() => [
          s("div", null, [
            dp,
            s("div", cp, [
              (r(!0), p(B, null, I(e.changelog, (i, u) => (r(), p("span", {
                class: E(["po-flex po-items-center po-space-x-1 po-px-4 po-py-3 po-rounded-t-xl po-cursor-pointer", [
                  { "po-bg-purple-500/10": n.value === u }
                ]]),
                onClick: (d) => n.value = u
              }, [
                s("span", vp, h(i.label) + " Version", 1),
                s("span", mp, h(i.latest_version), 1)
              ], 10, fp))), 256))
            ]),
            s("div", hp, [
              (r(!0), p(B, null, I(e.changelog, (i, u) => (r(), p("div", null, [
                n.value === u ? (r(), p("div", bp, [
                  s("div", gp, [
                    (r(!0), p(B, null, I(i.version_history, (d) => (r(), p("div", yp, [
                      s("span", xp, [
                        s("span", wp, h(d.date), 1),
                        s("span", Vp, h(d.version), 1)
                      ]),
                      s("div", {
                        class: "po-mt-3 po-prose-sm po-prose-slate",
                        innerHTML: d.note
                      }, null, 8, kp)
                    ]))), 256)),
                    i.hasMore ? (r(), p("span", $p, "More")) : b("", !0)
                  ])
                ])) : b("", !0)
              ]))), 256))
            ])
          ])
        ]),
        _: 1
      }, 8, ["show"])
    ]));
  }
}), Cp = { class: "po-text-sm po-text-red-700" }, Sp = {
  key: 0,
  class: "po-text-sm po-text-red-800 po-list-disc po-ml-5 po-mt-2"
}, Op = {
  key: 1,
  class: "po-flex po-items-start po-space-x-3 po-p-5 po-bg-green-50 po-rounded-md po-mt-5"
}, Pp = { class: "po-text-sm po-text-green-700" }, Ep = {
  name: "PoFormStatusMessage"
}, U1 = /* @__PURE__ */ Object.assign(Ep, {
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
      S(m(ut), { class: "po-w-6 po-stroke-red-600" }),
      s("div", null, [
        s("span", Cp, h(e.message), 1),
        e.errorList !== null ? (r(), p("ul", Sp, [
          (r(!0), p(B, null, I(e.errorList, (n) => (r(), p("li", null, h(n), 1))), 256))
        ])) : b("", !0)
      ])
    ], 2)) : (r(), p("div", Op, [
      S(m(dl), { class: "po-w-6 po-stroke-green-600" }),
      s("div", null, [
        s("span", Pp, h(e.message), 1)
      ])
    ]));
  }
}), Lp = { class: "po-bg-white po-relative po-group po-rounded-xl focus-within:po-ring-2 focus-within:po-ring-inset focus-within:po-ring-indigo-500" }, jp = { class: "po-block po-p-4 po-transition-colors po-duration-75 po-ease-linear" }, Bp = { class: "po-flex po-items-start po-space-x-2" }, Tp = { class: "po-flex po-items-start po-space-x-1" }, Np = { class: "po-block po-text-2xl po-font-light po-text-slate-600" }, Dp = {
  key: 0,
  class: "po-text-sm po-text-green-500 po-font-medium po-pt-1"
}, Ap = { class: "po-text-sm po-tracking-wide po-text-slate-500" }, Mp = {
  name: "PoStatsBlock"
}, G1 = /* @__PURE__ */ Object.assign(Mp, {
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
      (r(!0), p(B, null, I(e.items, (n) => (r(), p("div", Lp, [
        s("span", jp, [
          s("div", Bp, [
            s("div", null, [
              s("span", {
                class: E([
                  "po-inline-flex po-p-2 po-rounded-md",
                  n.bgColor,
                  n.iconColor
                ])
              }, [
                (r(), D(ye(n.icon), { class: "po-w-4 po-h-4" }))
              ], 2)
            ]),
            s("div", null, [
              s("div", Tp, [
                s("span", Np, h(n.value), 1),
                n.diff ? (r(), p("span", Dp, h(n.diff), 1)) : b("", !0)
              ]),
              s("h4", Ap, h(n.label), 1)
            ])
          ])
        ])
      ]))), 256))
    ], 2));
  }
}), Ip = {
  key: 0,
  class: "po-flex po-space-x-3 po-items-start"
}, Fp = { class: "po-flex po-items-center po-space-x-2" }, Rp = ["datetime"], zp = { class: "po-text-sm po-font-medium po-text-slate-600" }, Hp = ["datetime"], qp = { class: "flex" }, Up = { class: "po-flex po-pt-3 po-flex-wrap po-max-w-sm" }, Gp = ["onClick"], Wp = {
  key: 1,
  class: "po-w-full po-text-center"
}, Kp = { class: "po-inline-block po-text-sm po-italic po-text-slate-500" }, Zp = /* @__PURE__ */ s("span", { class: "po-text-lg po-text-slate-300 po-px-3 po-inline-block" }, "—", -1), Qp = ["datetime"], Yp = {
  name: "PoChatLogItem"
}, W1 = /* @__PURE__ */ Object.assign(Yp, {
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
      e.item.type !== "message" ? (r(), p("div", Ip, [
        e.item.type !== "first" && e.item.avatar !== "" ? (r(), p("div", {
          key: 0,
          class: "po-shrink-0 po-w-8 po-h-8 po-rounded-full po-p-1 po-bg-contain po-bg-slate-100",
          style: gt({ "background-image": `url(${e.item.avatar})` })
        }, null, 4)) : b("", !0),
        s("div", {
          class: E([
            { "po-pt-1": e.item.type !== "first" },
            {
              "po-flex po-justify-end po-items-end po-flex-col": e.item.type === "first"
            }
          ])
        }, [
          s("span", Fp, [
            e.item.type === "first" ? (r(), p("time", {
              key: 0,
              datetime: e.item.time,
              class: "po-text-xs po-text-slate-400"
            }, h(e.item.time_human), 9, Rp)) : b("", !0),
            s("span", zp, h(e.item.name), 1),
            e.item.type === "second" ? (r(), p("time", {
              key: 1,
              datetime: e.item.time,
              class: "po-text-xs po-text-slate-400"
            }, h(e.item.time_human), 9, Hp)) : b("", !0)
          ]),
          s("div", {
            class: E([
              "po-mt-2 po-space-y-1",
              {
                "po-flex po-justify-end po-items-end po-flex-col": e.item.type === "first"
              }
            ])
          }, [
            te(t.$slots, "message", {}, () => [
              (r(!0), p(B, null, I(e.item.message, (n) => (r(), p("div", qp, [
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
                }, h(n), 3)
              ]))), 256))
            ]),
            s("div", Up, [
              (r(!0), p(B, null, I(e.item.actions, (n) => (r(), p("button", {
                onClick: (o) => t.$emit("button-click", n.label),
                class: "po-appearance-none po-border po-border-mpao-lightblue po-bg-white hover:po-bg-mpao-lightblue po-px-3 po-py-1 po-mb-2 po-mr-2 po-rounded-lg po-text-slate-500 hover:po-text-sky-100 po-transition-colors po-duration-150 po-ease-in-out po-text-sm po-ring-0 po-outline-none"
              }, h(n.label), 9, Gp))), 256))
            ])
          ], 2)
        ], 2)
      ])) : b("", !0),
      e.item.type === "message" ? (r(), p("div", Wp, [
        (r(!0), p(B, null, I(e.item.message, (n) => (r(), p("p", Kp, [
          ae(h(n) + " ", 1),
          Zp,
          s("time", {
            datetime: e.item.time,
            class: "po-text-xs po-text-slate-400 po-inline-block"
          }, h(e.item.time_human), 9, Qp)
        ]))), 256))
      ])) : b("", !0)
    ], 2));
  }
}), Jp = {
  key: 0,
  class: "po-pointer-events-auto po-w-full po-max-w-sm po-overflow-hidden po-rounded-lg po-bg-mpao-lightblue po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5"
}, Xp = { class: "po-p-4" }, eu = { class: "po-flex po-items-start" }, tu = { class: "po-flex-shrink-0" }, ou = { class: "po-ml-3 po-w-0 po-flex-1 po-pt-0.5" }, lu = { class: "po-text-sm po-font-medium po-text-sky-100" }, nu = { class: "po-mt-1 po-text-sm po-text-sky-300" }, au = { class: "po-mt-3 po-flex po-space-x-4" }, su = { class: "po-ml-4 po-flex po-flex-shrink-0" }, ru = /* @__PURE__ */ s("span", { class: "po-sr-only" }, "Close", -1), iu = {
  name: "PoNotification"
}, K1 = /* @__PURE__ */ Object.assign(iu, {
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
    }), (i, u) => o.value ? (r(), D(We, {
      key: 0,
      to: "#po-notifications-alert"
    }, [
      S(we, {
        "enter-active-class": "po-transform po-ease-out po-duration-300 po-transition",
        "enter-from-class": "po-translate-y-2 po-opacity-0 sm:po-translate-y-0 sm:po-translate-x-2",
        "enter-to-class": "po-translate-y-0 po-opacity-100 sm:po-translate-x-0",
        "leave-active-class": "po-transition po-ease-in po-duration-100",
        "leave-from-class": "po-opacity-100",
        "leave-to-class": "po-opacity-0"
      }, {
        default: j(() => [
          a.value ? (r(), p("div", Jp, [
            s("div", Xp, [
              s("div", eu, [
                s("div", tu, [
                  te(i.$slots, "icon")
                ]),
                s("div", ou, [
                  s("p", lu, h(e.label), 1),
                  s("p", nu, h(e.text), 1),
                  s("div", au, [
                    s("button", {
                      onClick: u[0] || (u[0] = (d) => i.$emit("button-click", e.buttonLabel)),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-100 hover:po-text-sky-200 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, h(e.buttonLabel), 1),
                    s("button", {
                      onClick: u[1] || (u[1] = (d) => o.value = !1),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-300 hover:po-text-sky-500 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, " Dismiss ")
                  ])
                ]),
                s("div", su, [
                  s("button", {
                    type: "button",
                    onClick: u[2] || (u[2] = (d) => o.value = !1),
                    class: "po-inline-flex po-rounded-md po-bg-mpao-lightblue po-text-sky-500 hover:po-text-sky-300 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                  }, [
                    ru,
                    S(m(Mt), {
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
}), pu = /* @__PURE__ */ s("div", { class: "po-fixed po-inset-0" }, null, -1), uu = { class: "po-absolute po-inset-0 po-overflow-hidden" }, du = { class: "po-pointer-events-none po-fixed po-inset-y-0 po-right-0 po-flex po-max-w-full po-pl-10" }, cu = { class: "po-flex po-h-full po-flex-col po-overflow-y-auto po-bg-white po-shadow-xl" }, fu = { class: "po-bg-slate-50 po-py-6 po-px-4 sm:po-px-6" }, vu = { class: "po-flex po-items-center po-justify-between" }, mu = { class: "po-ml-3 po-flex po-h-7 po-items-center" }, hu = /* @__PURE__ */ s("span", { class: "po-sr-only" }, "Close panel", -1), bu = {
  key: 0,
  class: "po-mt-1"
}, gu = { class: "po-text-sm po-text-slate-500" }, yu = {
  key: 0,
  class: "po-bg-slate-50 po-rounded-b-xl po-shrink-0"
}, xu = {
  name: "PoSlideover"
}, Z1 = /* @__PURE__ */ Object.assign(xu, {
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
    return (i, u) => (r(), D(m(Re), {
      as: "template",
      show: o.value
    }, {
      default: j(() => [
        S(m(et), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: a
        }, {
          default: j(() => [
            pu,
            s("div", {
              class: E(["po-fixed po-inset-0 po-overflow-hidden po-bg-black", e.screenOpacity])
            }, [
              s("div", uu, [
                s("div", du, [
                  S(m(_e), {
                    as: "template",
                    enter: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "enter-from": "po-translate-x-full",
                    "enter-to": "po-translate-x-0",
                    leave: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "leave-from": "po-translate-x-0",
                    "leave-to": "po-translate-x-full"
                  }, {
                    default: j(() => [
                      S(m(tt), {
                        class: E([e.maxWidth, "po-pointer-events-auto po-w-screen"])
                      }, {
                        default: j(() => [
                          s("div", cu, [
                            s("div", fu, [
                              s("div", vu, [
                                S(m(wo), { class: "po-text-lg po-font-medium po-text-slate-600" }, {
                                  default: j(() => [
                                    ae(h(e.label), 1)
                                  ]),
                                  _: 1
                                }),
                                s("div", mu, [
                                  s("button", {
                                    type: "button",
                                    class: "po-rounded-md po-text-slate-500 hover:po-text-mpao-lightblue focus:po-outline-none focus:po-ring-2 focus:po-ring-white",
                                    onClick: a
                                  }, [
                                    hu,
                                    S(m(Ke), {
                                      class: "po-h-6 po-w-6",
                                      "aria-hidden": "true"
                                    })
                                  ])
                                ])
                              ]),
                              e.description ? (r(), p("div", bu, [
                                s("p", gu, h(e.description), 1)
                              ])) : b("", !0)
                            ]),
                            s("div", {
                              class: E([e.bgColor, "po-relative po-grow po-pt-6 po-px-4 sm:po-px-6"])
                            }, [
                              te(i.$slots, "content")
                            ], 2),
                            i.$slots.footer ? (r(), p("div", yu, [
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
}), wu = /* @__PURE__ */ s("div", { class: "po-fixed po-inset-0 po-bg-gray-500 po-bg-opacity-25 po-transition-opacity" }, null, -1), Vu = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto po-p-4 sm:po-p-6 md:po-p-20" }, ku = { class: "po-relative" }, $u = {
  key: 0,
  class: "po-max-h-96 scroll-py-3 po-overflow-y-auto po-p-3"
}, _u = {
  name: "PoCommandPalette"
}, Q1 = /* @__PURE__ */ Object.assign(_u, {
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
    }), (i, u) => (r(), D(m(Re), {
      show: o.value,
      as: "template",
      onAfterLeave: u[2] || (u[2] = (d) => l.value = ""),
      appear: ""
    }, {
      default: j(() => [
        S(m(et), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: u[1] || (u[1] = (d) => o.value = !1)
        }, {
          default: j(() => [
            S(m(_e), {
              as: "template",
              enter: "po-ease-out po-duration-300",
              "enter-from": "po-opacity-0",
              "enter-to": "po-opacity-100",
              leave: "po-ease-in po-duration-200",
              "leave-from": "po-opacity-100",
              "leave-to": "po-opacity-0"
            }, {
              default: j(() => [
                wu
              ]),
              _: 1
            }),
            s("div", Vu, [
              S(m(_e), {
                as: "template",
                enter: "po-ease-out po-duration-300",
                "enter-from": "po-opacity-0 po-scale-95",
                "enter-to": "po-opacity-100 po-scale-100",
                leave: "po-ease-in po-duration-200",
                "leave-from": "po-opacity-100 po-scale-100",
                "leave-to": "po-opacity-0 po-scale-95"
              }, {
                default: j(() => [
                  S(m(tt), { class: "po-mx-auto po-max-w-xl po-transform po-divide-y po-divide-gray-100 po-overflow-hidden po-rounded-xl po-bg-white po-shadow-2xl po-ring-1 po-ring-black po-ring-opacity-5 po-transition-all" }, {
                    default: j(() => [
                      s("div", ku, [
                        S(m(us), {
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
                      e.showContent ? (r(), p("div", $u, [
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
}), Cu = /* @__PURE__ */ s("div", { class: "po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity" }, null, -1), Su = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto" }, Ou = { class: "po-flex po-min-h-full po-items-start po-justify-center po-p-4 po-text-center sm:po-p-0" }, Pu = { class: "po-p-5" }, Eu = { class: "po-text-center po-space-y-3" }, Lu = { key: 1 }, ju = { class: "po-text-sm po-text-gray-600" }, Bu = { class: "po-border-t po-border-slate-200 po-flex po-divide-x po-divide-slate-200" }, Tu = {
  name: "PoAlert"
}, Y1 = /* @__PURE__ */ Object.assign(Tu, {
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
    return (i, u) => (r(), D(m(Re), {
      as: "template",
      show: o.value
    }, {
      default: j(() => [
        S(m(et), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: a
        }, {
          default: j(() => [
            S(m(_e), {
              as: "template",
              enter: "po-ease-out po-duration-300",
              "enter-from": "po-opacity-0",
              "enter-to": "po-opacity-100",
              leave: "po-ease-in po-duration-200",
              "leave-from": "po-opacity-100",
              "leave-to": "po-opacity-0"
            }, {
              default: j(() => [
                Cu
              ]),
              _: 1
            }),
            s("div", Su, [
              s("div", Ou, [
                S(m(_e), {
                  as: "template",
                  enter: "po-ease-out po-duration-300",
                  "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                  "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                  leave: "po-ease-in po-duration-200",
                  "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                  "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                }, {
                  default: j(() => [
                    S(m(tt), { class: "po-relative po-transform po-overflow-hidden po-rounded-lg po-bg-white po-text-left po-shadow-xl po-transition-all sm:po-my-8 sm:po-w-full sm:po-max-w-sm" }, {
                      default: j(() => [
                        s("div", Pu, [
                          s("div", Eu, [
                            e.alertTitle !== "" ? (r(), D(m(wo), {
                              key: 0,
                              as: "h3",
                              class: "po-text-lg po-font-medium po-leading-6 po-text-gray-900"
                            }, {
                              default: j(() => [
                                ae(h(e.alertTitle), 1)
                              ]),
                              _: 1
                            })) : b("", !0),
                            e.alertDescription !== "" ? (r(), p("div", Lu, [
                              s("p", ju, h(e.alertDescription), 1)
                            ])) : b("", !0)
                          ])
                        ]),
                        s("div", Bu, [
                          s("button", {
                            onClick: a,
                            class: "po-text-sm po-bg-white po-text-slate-500 hover:po-bg-slate-50 po-transition-colors po-duration-100 po-ease-out po-font-medium po-py-3 po-px-5 po-w-1/2 focus:po-ring-0"
                          }, h(e.cancelBtnLabel), 1),
                          s("button", {
                            onClick: u[0] || (u[0] = (d) => {
                              i.$emit("button-click", "ok"), a();
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
}), Nu = {
  key: 0,
  class: "po-col-span-2 po-relative po-mt-5"
}, Du = /* @__PURE__ */ s("span", {
  class: "po-absolute po-top-0 po-left-1 po--ml-px po-h-[calc(100%-7px)] po-w-0.5 po-bg-gray-200",
  "aria-hidden": "true"
}, null, -1), Au = { class: "po-relative po-space-y-5" }, Mu = { class: "po-flex po-space-x-2 po-items-start" }, Iu = { class: "log-item" }, Fu = { key: 0 }, Ru = {
  key: 0,
  class: "po-text-slate-500 po-text-xs"
}, zu = {
  key: 1,
  class: "po-text-center po-py-10"
}, Hu = { class: "po-text-sm po-text-slate-500" }, qu = {
  name: "PoLogs"
}, J1 = /* @__PURE__ */ Object.assign(qu, {
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
      e.items && e.items.length > 0 ? (r(), p("div", Nu, [
        Du,
        s("div", Au, [
          (r(!0), p(B, null, I(e.items, (n, o) => (r(), p("div", Mu, [
            s("p", {
              class: E([
                "po-rounded-full po-w-2 po-h-2 border-1 po-border-white po-shrink-0",
                { "po-bg-mpao-orange": o !== e.items.length - 1 },
                ,
                { "po-bg-slate-400": o == e.items.length - 1 }
              ])
            }, null, 2),
            s("div", Iu, [
              s("span", null, [
                ae(h(n.label) + " on " + h(n.date) + " " + h(n.by && n.by !== "" ? "by" : "") + " ", 1),
                n.by && n.by !== "" ? (r(), p("span", Fu, h(n.by), 1)) : b("", !0)
              ]),
              n.description && n.description !== "" ? (r(), p("blockquote", Ru, ' "' + h(n.description) + '" ', 1)) : b("", !0)
            ])
          ]))), 256))
        ])
      ])) : (r(), p("div", zu, [
        s("span", Hu, h(e.emptyLabel), 1)
      ]))
    ]));
  }
}), Uu = {
  key: 0,
  role: "list",
  class: "po-divide-y po-divide-gray-200 po-rounded-md po-border po-border-gray-200 po-mt-5"
}, Gu = { class: "po-flex po-items-center po-justify-between po-py-3 po-pl-3 po-pr-4 po-text-sm" }, Wu = { class: "po-flex po-w-0 po-flex-1 po-items-center" }, Ku = { class: "po-ml-2 po-w-0 po-flex-1 po-truncate" }, Zu = { class: "po-ml-4 po-flex-shrink-0 po-space-x-4" }, Qu = ["onClick"], Yu = ["onClick"], Ju = {
  key: 1,
  class: "po-py-10"
}, Xu = { class: "po-text-sm po-text-slate-500" }, ed = {
  name: "PoDownloadFileList"
}, X1 = /* @__PURE__ */ Object.assign(ed, {
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
      e.files && e.files.length > 0 ? (r(), p("ul", Uu, [
        (r(!0), p(B, null, I(e.files, (o) => (r(), p("li", Gu, [
          s("div", Wu, [
            S(m(eo), {
              class: "po-h-5 po-w-5 po-flex-shrink-0 po-text-gray-400",
              "aria-hidden": "true"
            }),
            s("span", Ku, h(o.label), 1)
          ]),
          s("div", Zu, [
            s("a", {
              href: "#",
              onClick: de((a) => l.$emit("button-click", o), ["prevent"]),
              class: "po-font-medium po-text-mpao-lightblue hover:po-text-indigo-500"
            }, h(e.linkLabel), 9, Qu),
            e.showViewBtn ? (r(), p("a", {
              key: 0,
              href: "#",
              onClick: de((a) => l.$emit("view-click", o), ["prevent"]),
              class: "po-font-medium po-text-mpao-lightblue hover:po-text-indigo-500"
            }, h(e.viewBtnLabel), 9, Yu)) : b("", !0)
          ])
        ]))), 256))
      ])) : (r(), p("div", Ju, [
        s("span", Xu, h(e.emptyLabel), 1)
      ]))
    ]));
  }
}), qo = (e, t) => {
  const l = e.__vccOpts || e;
  for (const [n, o] of t)
    l[n] = o;
  return l;
}, td = {
  name: "PoContentArea"
}, od = { class: "shell-content--area po-max-w-[1370px]" };
function ld(e, t, l, n, o, a) {
  return r(), p("section", od, [
    te(e.$slots, "default")
  ]);
}
const e0 = /* @__PURE__ */ qo(td, [["render", ld]]), nd = {
  name: "AnimatedLogo"
}, ad = /* @__PURE__ */ Xo('<div><svg class="po-stroke-mpao-blue po-w-16 animated-logo" viewBox="0 0 62 55" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.76292 17.8572L7.7 17.9704V18.0682C6.87397 19.526 6.23618 20.649 5.58241 21.4779C4.93472 22.299 4.30505 22.7864 3.51417 23.0053C3.46261 23.0112 3.41718 23.0206 3.39088 23.026C3.35663 23.0331 3.31491 23.0425 3.27694 23.0511C3.25988 23.055 3.24357 23.0587 3.22903 23.0619C3.1106 23.0882 3.03712 23.1 3 23.1H2.93844L2.89561 23.1107L15.9876 0.600006H19.1308C17.2397 1.92747 16.1556 3.83665 15.5371 5.73245C14.8359 7.88203 14.7198 10.0514 14.7027 11.4258C13.1737 11.6033 11.0729 12.4434 9.38038 15.128C8.77075 16.0431 8.26353 16.9561 7.76713 17.8496L7.76292 17.8572Z"></path><path d="M48.1818 11.3241C48.047 8.39742 47.5389 6.05982 46.5472 4.07639C45.8153 2.61266 44.8203 1.39271 43.5945 0.5H46.8113L59.8583 23.0959C59.8303 23.0912 59.7891 23.0819 59.7213 23.0649C59.7166 23.0638 59.7117 23.0625 59.7066 23.0612C59.6302 23.042 59.5099 23.0118 59.3765 23.0027C58.59 22.7825 57.9627 22.2958 57.3176 21.4779C56.6586 20.6423 56.0158 19.508 55.1801 18.0331L55.1413 17.9647C54.8861 17.4553 54.6068 16.973 54.3362 16.5054L54.3327 16.4995C54.0565 16.0225 53.7893 15.5605 53.5472 15.0764L53.5333 15.0485L53.516 15.0226C51.7283 12.3411 49.7115 11.4988 48.1818 11.3241Z"></path><path d="M9.28397 39.6773C11.0717 42.3589 13.0885 43.2011 14.6182 43.3759C14.753 46.3026 15.2611 48.6402 16.2528 50.6236C16.9991 52.1163 17.9653 53.2992 19.1863 54.2H15.7881L2.74125 31.699C2.76073 31.6996 2.78031 31.7 2.8 31.7C2.89335 31.7 2.97474 31.7149 3.07903 31.7381C3.08854 31.7402 3.09897 31.7426 3.11023 31.7452C3.18647 31.7626 3.30082 31.7888 3.42319 31.7972C4.20888 32.0178 4.86081 32.5271 5.52047 33.3603C6.20216 34.2214 6.85697 35.382 7.66164 36.8405C8.26116 37.9396 8.76739 38.8512 9.276 39.665L9.27989 39.6712L9.28397 39.6773Z"></path><path d="M55.124 36.865L55.1331 36.8504L55.1412 36.8353C55.9431 35.3316 56.5997 34.1683 57.2697 33.307C57.9146 32.4778 58.5471 31.9616 59.2949 31.6961C59.4179 31.6866 59.5418 31.6616 59.6287 31.6442C59.6354 31.6428 59.6418 31.6415 59.6481 31.6403C59.719 31.6261 59.772 31.616 59.8123 31.6095L46.8115 54.1H43.8753C45.7283 52.7465 46.7867 50.8277 47.3889 48.9394C48.064 46.8226 48.1795 44.7058 48.1971 43.3742C49.7262 43.1967 51.8271 42.3567 53.5196 39.6719C53.8327 39.2016 54.1164 38.6849 54.3777 38.1995C54.4112 38.1375 54.4442 38.076 54.4768 38.0152C54.7049 37.5906 54.9148 37.1996 55.124 36.865Z"></path><path d="M32.2763 51.5708L32.2653 51.5582L32.2536 51.5465C32.0661 51.359 31.7413 51.2 31.4 51.2C31.3949 51.2 31.3894 51.2 31.3835 51.2C31.2956 51.1998 31.1323 51.1993 30.9751 51.2442C30.7932 51.2962 30.6132 51.4082 30.4904 51.6086C29.1941 53.0706 27.544 53.8 25.5 53.8C22.8209 53.8 20.828 52.9218 19.4532 51.2005C18.1148 49.5247 17.3123 46.988 17.1201 43.5109C18.6883 43.1579 19.8601 42.2673 20.5004 41.6896C20.5136 44.8271 20.8579 46.8152 21.6737 48.0181C22.5558 49.319 23.9045 49.6 25.5 49.6C27.4335 49.6 28.5187 48.2893 29.0946 46.9901C29.6604 45.7138 29.7966 44.3347 29.7999 43.8193C29.8943 42.5846 30.6602 41.8 31.5 41.8H31.5778C32.4558 41.8842 33.2 42.7102 33.2 43.9C33.2 45.6119 33.5619 47.0065 34.2986 47.9982C35.0485 49.0077 36.1459 49.544 37.4792 49.5996L37.4896 49.6H37.5C39.2304 49.6 40.5973 49.3258 41.4454 48.0081C41.849 47.3811 42.1078 46.5565 42.2692 45.5056C42.4311 44.4518 42.5 43.1353 42.5 41.5V24.4455L45.9 21.8182V41.5C45.9 41.4958 45.8996 41.5001 45.8978 41.519C45.8959 41.5381 45.8927 41.5719 45.887 41.6267L45.8842 41.6541C45.8752 41.7406 45.8636 41.8524 45.8521 41.9797C45.8264 42.2614 45.8 42.6283 45.8 43V43.9V43.9029V43.9059V43.9088V43.9117V43.9146V43.9175V43.9205V43.9234V43.9263V43.9292V43.9321V43.935V43.9379V43.9408V43.9437V43.9466V43.9495V43.9524V43.9553V43.9581V43.961V43.9639V43.9668V43.9696V43.9725V43.9754V43.9783V43.9811V43.984V43.9868V43.9897V43.9926V43.9954V43.9983V44.0011V44.004V44.0068V44.0096V44.0125V44.0153V44.0181V44.021V44.0238V44.0266V44.0295V44.0323V44.0351V44.0379V44.0407V44.0435V44.0463V44.0492V44.052V44.0548V44.0576V44.0603V44.0631V44.0659V44.0687V44.0715V44.0743V44.0771V44.0798V44.0826V44.0854V44.0882V44.0909V44.0937V44.0965V44.0992V44.102V44.1047V44.1075V44.1102V44.113V44.1157V44.1185V44.1212V44.1239V44.1267V44.1294V44.1321V44.1349V44.1376V44.1403V44.143V44.1457V44.1484V44.1512V44.1539V44.1566V44.1593V44.162V44.1647V44.1674V44.17V44.1727V44.1754V44.1781V44.1808V44.1835V44.1861V44.1888V44.1915V44.1941V44.1968V44.1995V44.2021V44.2048V44.2074V44.2101V44.2127V44.2154V44.218V44.2207V44.2233V44.2259V44.2285V44.2312V44.2338V44.2364V44.239V44.2417V44.2443V44.2469V44.2495V44.2521V44.2547V44.2573V44.2599V44.2625V44.2651V44.2677V44.2702V44.2728V44.2754V44.278V44.2806V44.2831V44.2857V44.2882V44.2908V44.2934V44.2959V44.2985V44.301V44.3036V44.3061V44.3087V44.3112V44.3137V44.3163V44.3188V44.3213V44.3238V44.3264V44.3289V44.3314V44.3339V44.3364V44.3389V44.3414V44.3439V44.3464V44.3489V44.3514V44.3539V44.3564V44.3588V44.3613V44.3638V44.3663V44.3687V44.3712V44.3737V44.3761V44.3786V44.381V44.3835V44.3859V44.3884V44.3908V44.3932V44.3957V44.3981V44.4005V44.403V44.4054V44.4078V44.4102V44.4126V44.415V44.4174V44.4199V44.4223V44.4247V44.427V44.4294V44.4318V44.4342V44.4366V44.439V44.4413V44.4437V44.4461V44.4484V44.4508V44.4532V44.4555V44.4579V44.4602V44.4626V44.4649V44.4672V44.4696V44.4719V44.4742V44.4766V44.4789V44.4812V44.4835V44.4858V44.4882V44.4905V44.4928V44.4951V44.4974V44.4997V44.5019V44.5042V44.5065V44.5088V44.5111V44.5133V44.5156V44.5179V44.5201V44.5224V44.5247V44.5269V44.5292V44.5314V44.5337V44.5359V44.5381V44.5404V44.5426V44.5448V44.547V44.5493V44.5515V44.5537V44.5559V44.5581V44.5603V44.5625V44.5647V44.5669V44.5691V44.5713V44.5734V44.5756V44.5778V44.58V44.5821V44.5843V44.5865V44.5886V44.5908V44.5929V44.5951V44.5972V44.5994V44.6015V44.6036V44.6058V44.6079V44.61V44.6121V44.6142V44.6164V44.6185V44.6206V44.6227V44.6248V44.6269V44.6289V44.631V44.6331V44.6352V44.6373V44.6393V44.6414V44.6435V44.6455V44.6476V44.6497V44.6517V44.6538V44.6558V44.6578V44.6599V44.6619V44.6639V44.666V44.668V44.67V44.672V44.674V44.676V44.678V44.68V44.682V44.684V44.686V44.688V44.69V44.692V44.6939V44.6959V44.6979V44.6998V44.7018V44.7037V44.7057V44.7076V44.7096V44.7115V44.7135V44.7154V44.7173V44.7193V44.7212V44.7231V44.725V44.7269V44.7288V44.7307V44.7326V44.7345V44.7364V44.7383V44.7402V44.7421V44.7439V44.7458V44.7477V44.7495V44.7514V44.7533V44.7551V44.757V44.7588V44.7606V44.7625V44.7643V44.7661V44.768V44.7698V44.7716V44.7734V44.7752V44.777V44.7788V44.7806V44.7824V44.7842V44.786V44.7878V44.7896V44.7914V44.7931V44.7949V44.7967V44.7984V44.8002V44.8019V44.8037V44.8054V44.8071V44.8089V44.8106V44.8123V44.8141V44.8158V44.8175V44.8192V44.8209V44.8226V44.8243V44.826V44.8277V44.8294V44.8311V44.8328V44.8344V44.8361V44.8378V44.8394V44.8411V44.8427V44.8444V44.846V44.8477V44.8493V44.851V44.8526V44.8542V44.8558V44.8575V44.8591V44.8607V44.8623V44.8639V44.8655V44.8671V44.8687V44.8702V44.8718V44.8734V44.875V44.8765V44.8781V44.8797V44.8812V44.8828V44.8843V44.8859V44.8874V44.8889V44.8905V44.892V44.8935V44.895V44.8965V44.898V44.8996V44.9011V44.9025V44.904V44.9055V44.907V44.9085V44.91V44.9114V44.9129V44.9144V44.9158V44.9173V44.9187V44.9202V44.9216V44.923V44.9245V44.9259V44.9273V44.9288V44.9302V44.9316V44.933V44.9344V44.9358V44.9372V44.9386V44.9399V44.9413V44.9427V44.9441V44.9454V44.9468V44.9482V44.9495V44.9509V44.9522V44.9535V44.9549V44.9562V44.9575V44.9589V44.9602V44.9615V44.9628V44.9641V44.9654V44.9667V44.968V44.9693V44.9706V44.9718V44.9731V44.9744V44.9757V44.9769V44.9782V44.9794V44.9807V44.9819V44.9832V44.9844V44.9856V44.9868V44.9881V44.9893V44.9905V44.9917V44.9929V44.9941V44.9953V44.9965V44.9977V44.9988V45V45.1V45.1006V45.1012V45.1017V45.1023V45.1029V45.1035V45.104V45.1046V45.1052V45.1057V45.1063V45.1069V45.1074V45.108V45.1085V45.1091V45.1096V45.1102V45.1107V45.1113V45.1118V45.1123V45.1129V45.1134V45.1139V45.1145V45.115V45.1155V45.1161V45.1166V45.1171V45.1176V45.1181V45.1186V45.1191V45.1196V45.1202V45.1207V45.1212V45.1217V45.1222V45.1226V45.1231V45.1236V45.1241V45.1246V45.1251V45.1256V45.1261V45.1265V45.127V45.1275V45.128V45.1284V45.1289V45.1294V45.1298V45.1303V45.1307V45.1312V45.1317V45.1321V45.1326V45.133V45.1335V45.1339V45.1343V45.1348V45.1352V45.1357V45.1361V45.1365V45.137V45.1374V45.1378V45.1383V45.1387V45.1391V45.1395V45.1399V45.1404V45.1408V45.1412V45.1416V45.142V45.1424V45.1428V45.1432V45.1436V45.144V45.1444V45.1448V45.1452V45.1456V45.146V45.1464V45.1468V45.1471V45.1475V45.1479V45.1483V45.1487V45.149V45.1494V45.1498V45.1501V45.1505V45.1509V45.1512V45.1516V45.152V45.1523V45.1527V45.153V45.1534V45.1537V45.1541V45.1544V45.1548V45.1551V45.1555V45.1558V45.1561V45.1565V45.1568V45.1572V45.1575V45.1578V45.1581V45.1585V45.1588V45.1591V45.1594V45.1598V45.1601V45.1604V45.1607V45.161V45.1613V45.1616V45.162V45.1623V45.1626V45.1629V45.1632V45.1635V45.1638V45.1641V45.1644V45.1647V45.165V45.1652V45.1655V45.1658V45.1661V45.1664V45.1667V45.167V45.1672V45.1675V45.1678V45.1681V45.1683V45.1686V45.1689V45.1691V45.1694V45.1697V45.1699V45.1702V45.1705V45.1707V45.171V45.1712V45.1715V45.1717V45.172V45.1722V45.1725V45.1727V45.173V45.1732V45.1735V45.1737V45.174V45.1742V45.1744V45.1747V45.1749V45.1751V45.1753C45.5039 48.1507 44.6544 50.2924 43.3031 51.6899C41.9582 53.0807 40.0524 53.8 37.5 53.8C35.4235 53.8 33.5685 53.0476 32.2763 51.5708Z"></path><path d="M22.8 23.2538V18.2178L29.3909 23.307L26.1939 25.8645L22.8 23.2538Z"></path><path d="M16.7 20.2V19.7H16.5V18.8V10.858C16.5042 10.8478 16.5096 10.8348 16.5142 10.8232C16.5488 10.7368 16.5963 10.6012 16.5998 10.4209C16.8474 7.03069 17.6799 4.61275 19.0737 3.04468C20.4543 1.49155 22.4511 0.699997 25.2 0.699997C27.2568 0.699997 29.1263 1.53906 30.5352 3.04197L30.5407 3.04785L30.5464 3.05355C30.7614 3.26854 31.0508 3.35 31.3 3.35C31.5492 3.35 31.8386 3.26854 32.0536 3.05355L32.0646 3.04251L32.0749 3.03081C33.4779 1.4408 35.1402 0.699997 37.3 0.699997C40.0769 0.699997 42.1441 1.62655 43.5571 3.42174C44.934 5.17104 45.7393 7.80743 45.886 11.3874C44.0184 11.8028 42.6345 12.9721 42.1 13.4936V13.2C42.1 10.0544 41.7835 8.06299 40.9925 6.86242C40.1497 5.58316 38.8495 5.3 37.3 5.3C35.4114 5.3 34.3769 6.59229 33.8399 7.85422C33.3055 9.11015 33.2 10.457 33.2 10.9C33.2 12.2634 32.2859 13.1 31.3 13.1H31.2204C30.2388 13.0141 29.4 12.0845 29.4 10.8C29.4 9.19015 29.0639 7.84653 28.3661 6.89234C27.6525 5.91665 26.5974 5.4 25.3 5.4C23.6267 5.4 22.3017 5.64608 21.4896 6.93319C21.1052 7.5425 20.863 8.34586 20.7131 9.3714C20.5626 10.4004 20.5 11.6909 20.5 13.3V30.4541L16.7 33.3833V20.2Z"></path><path d="M40.1 31.5462V36.5799L33.4225 31.4049L36.6974 28.9288L40.1 31.5462Z"></path><mask id="path-9-inside-1" fill="white"><path d="M58.7 30.1C58.9 30 59.5 30 59.8 29.9C60.9 29.8 61.8 28.7 61.8 27.4C61.8 26.1 60.9 25 59.8 24.9C59.7 24.9 59.5 24.9 59.4 24.8C59.3 24.8 59.2 24.8 59.1 24.7C59.1 24.7 59.1 24.7 59 24.7C58.6 24.6 58.1 24.4 57.7 24.1C57.7 24.1 57.7 24.1 57.6 24C56.1 23.1 55 21.2 53.6 18.7C53.1 17.8 52.6 16.9 52 16C50.5 13.7 48.9 13.1 47.8 13C47.7 13 47.6 13 47.5 13H47.3C47.1 13 46.9 13 46.9 13C45.2 13.2 44 14.3 43.6 14.8L25.2 29.1C25.2 29.1 25.2 29.1 25.1 29.2L23 30.8L16.8 35.5L16.4 35.9C16.4 35.9 16.4 35.9 16.3 35.9C16 36.1 15.7 36.3 15.4 36.3C15.1 36.3 14.9 36.2 14.7 36.1C14.5 35.9 14.4 35.8 14.3 35.5C13.9 34.8 13.4 34.1 13 33.3V33.1C12.2 31.7 11.3 30 10.1 28.6C10.1 28.6 10.1 28.6 10.1 28.5L10 28.4C9.9 28.3 9.9 28.3 9.8 28.2C9.8 28.2 9.8 28.2 9.7 28.1L9.2 27.5C9.2 27.5 9.2 27.5 9.1 27.5C9 27.3 9 27.1 9.1 27L9.6 26.5C10.9 25 11.9 23.2 12.8 21.6V21.5C13.2 20.7 13.7 19.9 14.2 19.1C14.4 18.8 14.6 18.6 14.7 18.5V13.1C13.6 13.2 12 13.9 10.6 16C10 16.9 9.5 17.8 9 18.7C7.8 20.9 6.8 22.5 5.6 23.5C4.8 24.1 4 24.4 3.5 24.6C3.5 24.6 3.5 24.6 3.4 24.6C3.3 24.6 3.1 24.7 3 24.7C2.9 24.7 2.9 24.7 2.8 24.7C2.7 24.7 2.7 24.7 2.7 24.7H2.6H2.5C2.3 24.7 2.2 24.8 2.1 24.8C2 24.8 2 24.8 2 24.9C1.7 25.1 1.4 25.3 1.2 25.6C1.2 25.7 1.1 25.7 1.1 25.8V25.9L0.999997 26.1C0.999997 26.2 0.999997 26.2 0.899997 26.3C0.899997 26.4 0.899997 26.4 0.799997 26.5C0.799997 26.6 0.799997 26.7 0.699997 26.7C0.699997 26.8 0.699997 26.9 0.699997 26.9C0.699997 27 0.699997 27.1 0.699997 27.1C0.699997 27.2 0.699997 27.2 0.699997 27.3C0.699997 27.4 0.699997 27.5 0.699997 27.5C0.699997 27.6 0.699997 27.7 0.699997 27.7C0.699997 27.8 0.699997 27.9 0.799997 27.9V28V28.1C0.799997 28.2 0.799997 28.2 0.899997 28.2L0.999997 28.4C0.999997 28.5 1.1 28.5 1.1 28.5C1.1 28.5 1.1 28.5 1.1 28.6C1.2 28.7 1.3 28.9 1.5 29C1.6 29 1.6 29.1 1.7 29.1C1.7 29.1 1.8 29.1 1.8 29.2C1.8 29.2 1.8 29.2 1.9 29.2C2 29.3 2.2 29.3 2.3 29.4C2.4 29.4 2.4 29.4 2.4 29.4L2.9 29.5C3.1 29.5 3.2 29.6 3.4 29.6C4.2 29.8 4.7 30.2 4.8 30.2C6.4 31.2 7.5 33 8.9 35.5C9.5 36.6 10 37.4 10.5 38.2C11.9 40.3 13.4 41 14.4 41.1C14.5 41.1 14.5 41.1 14.6 41.1C14.7 41.1 14.8 41.1 14.8 41.1C15 41.1 15.2 41.1 15.5 41.1H15.6C17.2 40.8 18.5 39.8 18.9 39.3L19 39.2L19.8 38.6C19.8 38.6 19.9 38.5 20 38.5L30.2 30.6L41.3 22L46.5 18H46.6C46.7 18 46.9 17.9 47 17.9C47.4 17.9 47.8 18.1 48.1 18.6L48.5 19.2C48.8 19.7 49.2 20.3 49.5 20.9V21C50.1 22.1 50.8 23.4 51.7 24.6C51.7 24.6 51.7 24.7 51.8 24.7C52.1 25.1 52.4 25.5 52.7 25.8C52.7 25.8 52.8 25.8 52.8 25.9C53 26.1 53.1 26.3 53.3 26.4C53.4 26.5 53.4 26.7 53.3 26.9C52 28.5 50.4 31.1 49.6 32.4V32.5C49.2 33.2 48.7 34.1 48.2 34.9C48 35.2 47.8 35.4 47.7 35.5V40.9C48.8 40.8 50.4 40.1 51.8 37.9C52.4 37 52.9 36 53.4 35.2C53.5 35 53.7 34.7 53.8 34.5C55.2 33 56.4 30.9 58.7 30.1Z"></path></mask><path d="M58.7 30.1C58.9 30 59.5 30 59.8 29.9C60.9 29.8 61.8 28.7 61.8 27.4C61.8 26.1 60.9 25 59.8 24.9C59.7 24.9 59.5 24.9 59.4 24.8C59.3 24.8 59.2 24.8 59.1 24.7C59.1 24.7 59.1 24.7 59 24.7C58.6 24.6 58.1 24.4 57.7 24.1C57.7 24.1 57.7 24.1 57.6 24C56.1 23.1 55 21.2 53.6 18.7C53.1 17.8 52.6 16.9 52 16C50.5 13.7 48.9 13.1 47.8 13C47.7 13 47.6 13 47.5 13H47.3C47.1 13 46.9 13 46.9 13C45.2 13.2 44 14.3 43.6 14.8L25.2 29.1C25.2 29.1 25.2 29.1 25.1 29.2L23 30.8L16.8 35.5L16.4 35.9C16.4 35.9 16.4 35.9 16.3 35.9C16 36.1 15.7 36.3 15.4 36.3C15.1 36.3 14.9 36.2 14.7 36.1C14.5 35.9 14.4 35.8 14.3 35.5C13.9 34.8 13.4 34.1 13 33.3V33.1C12.2 31.7 11.3 30 10.1 28.6C10.1 28.6 10.1 28.6 10.1 28.5L10 28.4C9.9 28.3 9.9 28.3 9.8 28.2C9.8 28.2 9.8 28.2 9.7 28.1L9.2 27.5C9.2 27.5 9.2 27.5 9.1 27.5C9 27.3 9 27.1 9.1 27L9.6 26.5C10.9 25 11.9 23.2 12.8 21.6V21.5C13.2 20.7 13.7 19.9 14.2 19.1C14.4 18.8 14.6 18.6 14.7 18.5V13.1C13.6 13.2 12 13.9 10.6 16C10 16.9 9.5 17.8 9 18.7C7.8 20.9 6.8 22.5 5.6 23.5C4.8 24.1 4 24.4 3.5 24.6C3.5 24.6 3.5 24.6 3.4 24.6C3.3 24.6 3.1 24.7 3 24.7C2.9 24.7 2.9 24.7 2.8 24.7C2.7 24.7 2.7 24.7 2.7 24.7H2.6H2.5C2.3 24.7 2.2 24.8 2.1 24.8C2 24.8 2 24.8 2 24.9C1.7 25.1 1.4 25.3 1.2 25.6C1.2 25.7 1.1 25.7 1.1 25.8V25.9L0.999997 26.1C0.999997 26.2 0.999997 26.2 0.899997 26.3C0.899997 26.4 0.899997 26.4 0.799997 26.5C0.799997 26.6 0.799997 26.7 0.699997 26.7C0.699997 26.8 0.699997 26.9 0.699997 26.9C0.699997 27 0.699997 27.1 0.699997 27.1C0.699997 27.2 0.699997 27.2 0.699997 27.3C0.699997 27.4 0.699997 27.5 0.699997 27.5C0.699997 27.6 0.699997 27.7 0.699997 27.7C0.699997 27.8 0.699997 27.9 0.799997 27.9V28V28.1C0.799997 28.2 0.799997 28.2 0.899997 28.2L0.999997 28.4C0.999997 28.5 1.1 28.5 1.1 28.5C1.1 28.5 1.1 28.5 1.1 28.6C1.2 28.7 1.3 28.9 1.5 29C1.6 29 1.6 29.1 1.7 29.1C1.7 29.1 1.8 29.1 1.8 29.2C1.8 29.2 1.8 29.2 1.9 29.2C2 29.3 2.2 29.3 2.3 29.4C2.4 29.4 2.4 29.4 2.4 29.4L2.9 29.5C3.1 29.5 3.2 29.6 3.4 29.6C4.2 29.8 4.7 30.2 4.8 30.2C6.4 31.2 7.5 33 8.9 35.5C9.5 36.6 10 37.4 10.5 38.2C11.9 40.3 13.4 41 14.4 41.1C14.5 41.1 14.5 41.1 14.6 41.1C14.7 41.1 14.8 41.1 14.8 41.1C15 41.1 15.2 41.1 15.5 41.1H15.6C17.2 40.8 18.5 39.8 18.9 39.3L19 39.2L19.8 38.6C19.8 38.6 19.9 38.5 20 38.5L30.2 30.6L41.3 22L46.5 18H46.6C46.7 18 46.9 17.9 47 17.9C47.4 17.9 47.8 18.1 48.1 18.6L48.5 19.2C48.8 19.7 49.2 20.3 49.5 20.9V21C50.1 22.1 50.8 23.4 51.7 24.6C51.7 24.6 51.7 24.7 51.8 24.7C52.1 25.1 52.4 25.5 52.7 25.8C52.7 25.8 52.8 25.8 52.8 25.9C53 26.1 53.1 26.3 53.3 26.4C53.4 26.5 53.4 26.7 53.3 26.9C52 28.5 50.4 31.1 49.6 32.4V32.5C49.2 33.2 48.7 34.1 48.2 34.9C48 35.2 47.8 35.4 47.7 35.5V40.9C48.8 40.8 50.4 40.1 51.8 37.9C52.4 37 52.9 36 53.4 35.2C53.5 35 53.7 34.7 53.8 34.5C55.2 33 56.4 30.9 58.7 30.1Z"></path></svg></div>', 1), sd = [
  ad
];
function rd(e, t, l, n, o, a) {
  return r(), p("div", null, sd);
}
const id = /* @__PURE__ */ qo(nd, [["render", rd]]), pd = {
  key: 0,
  class: "po-fixed po-z-[999] po-top-0 po-bottom-0 po-left-0 po-right-0 po-flex po-items-center po-justify-center"
}, ud = /* @__PURE__ */ s("div", { class: "po-absolute po-w-[6.2rem] po-h-[6.2rem] po-bg-transparent po-overflow-hidden po-rounded-xl" }, [
  /* @__PURE__ */ s("div", { class: "po-loading-rotate po-absolute -po-top-8 -po-left-8 po-w-[10rem] po-h-[10rem]" })
], -1), dd = { class: "relative po-bg-white po-w-24 po-h-24 po-flex po-items-center po-justify-center po-rounded-xl po-bg-opacity-50 po-backdrop-blur po-backdrop-filter po-z-10 po-shadow-xl" }, cd = {
  key: 0,
  class: "po-absolute po-left-1 po-right-1 po-text-center po-py-1 po-text-xs po-text-mpao-blue po-bg-white po-bg-opacity-50 po-backdrop-blur po-backdrop-filter"
}, fd = {
  name: "PoLoading"
}, t0 = /* @__PURE__ */ Object.assign(fd, {
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
    return (t, l) => e.show ? (r(), p("div", pd, [
      ud,
      s("div", dd, [
        e.label !== "" ? (r(), p("span", cd, h(e.label), 1)) : b("", !0),
        S(id)
      ])
    ])) : b("", !0);
  }
}), vd = { class: "po-py-5 po-flex po-items-start po-space-x-5" }, md = ["name", "id", "checked", "aria-describedby"], hd = { class: "po-grow -po-mt-[0.26rem]" }, bd = ["for"], gd = { class: "po-mt-2 po-flex po-space-x-3" }, yd = ["href", "onClick"], xd = {
  name: "PoConsent"
}, o0 = /* @__PURE__ */ Object.assign(xd, {
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
    return (t, l) => (r(), p("div", vd, [
      s("input", Ee({
        type: "checkbox",
        name: `${e.id}-field`,
        id: e.id,
        checked: e.modelValue,
        "aria-describedby": `${e.id}-description`
      }, t.$attrs, {
        onInput: l[0] || (l[0] = (n) => t.$emit("update:modelValue", n.target.checked)),
        class: "po-shrink-0 po-h-4 po-w-4 po-rounded border-slate-300 po-text-mpao-lightblue focus:po-ring-mpao-lightblue"
      }), null, 16, md),
      s("div", hd, [
        s("label", {
          class: "po-block po-select-none po-text-sm po-text-slate-600 po-cursor-pointer",
          for: e.id
        }, h(e.label), 9, bd),
        s("div", gd, [
          (r(!0), p(B, null, I(e.links, (n) => (r(), p("a", {
            href: n.url,
            onClick: de((o) => t.$emit("button-click", n.url), ["prevent"]),
            class: "po-text-sm po-text-mpao-lightblue hover:po-text-mpao-blue"
          }, h(n.label), 9, yd))), 256))
        ])
      ])
    ]));
  }
}), wd = { class: "po-mt-5 po-bg-slate-50 -po-mx-5 po-px-4 po-py-3 po-space-y-3" }, Vd = ["onClick"], kd = { class: "po-absolute po-bg-white po-top-4 po-right-4 po-z-10 po-text-xs po-text-slate-600 po-font-medium" }, $d = { class: "po-shrink-0 po-pr-3 po-flex po-items-center po-border-r po-border-dashed po-border-slate-300" }, _d = {
  key: 4,
  class: "po-w-5 po-h-5 po-fill-slate-400 po-shrink-0",
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  viewBox: "0 0 226.978 226.978"
}, Cd = /* @__PURE__ */ s("path", { d: "M199.569 25.393C181.627 7.803 152.62-.72 113.339.048 73.731.827 47.255 7.779 30.018 21.927 13.352 35.605 5.59 55.62 5.59 84.915v29.898c0 34.584 18.532 72.605 53.951 78.358 4.089.669 7.941-2.111 8.605-6.201a7.5 7.5 0 0 0-6.201-8.605c-26.861-4.363-41.355-36-41.355-63.552V84.915c0-42.006 15.565-68.347 93.043-69.871 35.125-.696 60.477 6.395 75.433 21.059 11.655 11.429 17.321 27.395 17.321 48.812v29.898c0 45.274-20.321 65.243-72.441 71.123H96.988c-1.989 0-3.897.79-5.303 2.197l-26.041 26.041a7.5 7.5 0 0 0 10.606 10.607l23.845-23.845h34.27c.276 0 .553-.015.828-.046 29.828-3.313 50.254-11.076 64.279-24.432 14.747-14.044 21.916-34.208 21.916-61.646V84.915c0-25.299-7.341-45.325-21.819-59.522z" }, null, -1), Sd = /* @__PURE__ */ s("path", { d: "M118.17 48.988h.003c12.085 0 23.447 4.707 31.993 13.253 8.547 8.547 13.254 19.911 13.253 31.998a7.5 7.5 0 0 0 7.499 7.5h.001a7.5 7.5 0 0 0 7.5-7.499c.001-16.094-6.266-31.225-17.646-42.605-11.379-11.38-26.507-17.646-42.6-17.646h-.005a7.5 7.5 0 1 0 .002 14.999z" }, null, -1), Od = /* @__PURE__ */ s("path", { d: "M118.168 75.362c10.408.002 18.877 8.47 18.878 18.877a7.5 7.5 0 0 0 7.501 7.499c4.143 0 7.5-3.359 7.499-7.501-.003-18.676-15.199-33.872-33.876-33.875h-.001a7.5 7.5 0 0 0-.001 15zM84.538 88.213a7.5 7.5 0 0 0 8.465 12.382c2.689-1.838 8.987-6.144 8.545-14.752-.28-5.152-4.927-12.508-8.776-17.772-5.63-7.702-10.482-12.341-14.391-13.779-3.65-1.359-7.467-1.388-11.353-.084-8.049 2.712-13.893 7.613-16.899 14.173-2.927 6.386-2.862 13.725.189 21.228 7.206 17.678 17.294 33.155 30.051 46.067 12.845 12.689 28.321 22.777 46.006 29.987 3.827 1.557 7.613 2.336 11.252 2.336 3.49 0 6.845-.716 9.971-2.149 6.56-3.007 11.46-8.85 14.175-16.909 1.3-3.877 1.271-7.692-.077-11.317-1.448-3.937-6.088-8.788-13.789-14.418-5.265-3.849-12.621-8.496-17.793-8.777-8.59-.432-12.892 5.855-14.73 8.544a7.5 7.5 0 0 0 12.381 8.469c.816-1.193 1.282-1.735 1.549-1.972 4.21 1.349 16.215 10.169 18.376 13.549.053.216.065.545-.135 1.144-.946 2.809-2.791 6.486-6.206 8.052-3.199 1.464-6.834.566-9.316-.443-15.847-6.461-29.682-15.466-41.058-26.703-11.301-11.439-20.306-25.274-26.763-41.115-1.012-2.488-1.911-6.125-.446-9.321 1.565-3.415 5.243-5.261 8.043-6.205.598-.2.927-.189 1.155-.134 3.381 2.165 12.196 14.163 13.546 18.374-.238.263-.779.73-1.972 1.545z" }, null, -1), Pd = [
  Cd,
  Sd,
  Od
], Ed = { class: "po-grow po-space-y-2 po-pl-3 -po-mb-1" }, Ld = { class: "po-text-base po-text-slate-600 po-font-medium" }, jd = {
  key: 0,
  class: ""
}, Bd = {
  key: 0,
  class: "po-border-b po-border-slate-200 po-pb-3 po-grid po-grid-cols-2"
}, Td = ["for"], Nd = ["id", "onUpdate:modelValue", "onChange"], Dd = ["value"], Ad = {
  key: 0,
  class: "po-flex po-flex-wrap"
}, Md = { class: "po-font-medium po-text-slate-500 po-capitalize" }, Id = ["onClick"], Fd = {
  name: "PoCallLog",
  components: { ChevronDownIcon: Jt, ChevronUpIcon: Xt }
}, l0 = /* @__PURE__ */ Object.assign(Fd, {
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
    return (u, d) => (r(), p("ul", wd, [
      (r(!0), p(B, null, I(m(n), (v, c) => (r(), p("li", {
        onClick: (f) => u.$emit("button-click", v),
        class: E(["po-bg-white po-rounded-lg po-p-3 po-transition-shadow po-duration-100 po-ease-out po-shadow hover:po-shadow-lg po-flex po-item-center po-border-l-4 po-relative", v.highlightColor])
      }, [
        s("span", kd, h(v.topRightLabel), 1),
        s("div", $d, [
          v.type === "chat" ? (r(), D(m(ul), {
            key: 0,
            class: "po-w-5 po-h-5 po-stroke-slate-400 po-shrink-0"
          })) : b("", !0),
          v.type === "email" ? (r(), D(m(ml), {
            key: 1,
            class: "po-w-5 po-h-5 po-stroke-slate-400 po-shrink-0"
          })) : b("", !0),
          v.type === "in" ? (r(), D(m(yl), {
            key: 2,
            class: "po-w-5 po-h-5 po-stroke-slate-400 po-shrink-0"
          })) : b("", !0),
          v.type === "out" ? (r(), D(m(xl), {
            key: 3,
            class: "po-w-5 po-h-5 po-stroke-slate-400 po-shrink-0"
          })) : b("", !0),
          v.type === "viber" ? (r(), p("svg", _d, Pd)) : b("", !0)
        ]),
        s("div", Ed, [
          s("h3", Ld, h(v.subject), 1),
          S(we, {
            "enter-active-class": "po-transition po-duration-100 po-ease-out",
            "enter-from-class": "po-transform po-scale-95 po-opacity-0",
            "enter-to-class": "po-transform po-scale-100 po-opacity-100",
            "leave-active-class": "po-transition po-duration-75 po-ease-out",
            "leave-from-class": "po-transform po-scale-100 po-opacity-100",
            "leave-to-class": "po-transform po-scale-95 po-opacity-0"
          }, {
            default: j(() => [
              o.value === c ? (r(), p("div", jd, [
                e.selectFieldList !== null ? (r(), p("div", Bd, [
                  s("label", {
                    for: `select-field-calllog-${c}`,
                    class: "po-text-sm po-text-slate-500"
                  }, h(e.selectFieldLabel), 9, Td),
                  Me(s("select", {
                    name: "",
                    id: `select-field-calllog-${c}`,
                    "onUpdate:modelValue": (f) => m(n)[c].selectFieldValue = f,
                    onChange: (f) => i(Number(f.target.value), v.id),
                    class: "po-border-none focus:po-ring-0 po-bg-slate-100 po-rounded-md po-text-sm po-text-slate-700"
                  }, [
                    (r(!0), p(B, null, I(e.selectFieldList, (f) => (r(), p("option", {
                      value: f.id
                    }, h(f.name), 9, Dd))), 256))
                  ], 40, Nd), [
                    [
                      el,
                      m(n)[c].selectFieldValue,
                      void 0,
                      { number: !0 }
                    ]
                  ])
                ])) : b("", !0),
                S(Ho, {
                  items: v.details
                }, null, 8, ["items"])
              ])) : b("", !0)
            ]),
            _: 2
          }, 1024),
          o.value !== c ? (r(), p("div", Ad, [
            (r(!0), p(B, null, I(v.meta, (f, V) => (r(), p("p", {
              class: "po-text-xs po-space-x-2 po-mr-5 po-mb-2",
              key: V
            }, [
              s("span", Md, h(f.label), 1),
              s("span", {
                class: E(["po-text-slate-500 po-px-[0.2em] po-rounded-md", f.color])
              }, h(f.description), 3)
            ]))), 128))
          ])) : b("", !0),
          s("span", {
            role: "button",
            onClick: (f) => a(c, v),
            class: "po-block po-bg-slate-50 po-rounded-md po-p-2 hover:po-bg-slate-100"
          }, [
            o.value !== c ? (r(), D(m(Jt), {
              key: 0,
              class: "po-w-4 po-mx-auto po-stroke-slate-400 po-stroke-2"
            })) : (r(), D(m(Xt), {
              key: 1,
              class: "po-w-4 po-mx-auto po-stroke-slate-400 po-stroke-2"
            }))
          ], 8, Id)
        ])
      ], 10, Vd))), 256))
    ]));
  }
}), Rd = {
  class: "po-flex po-bg-slate-50 po-rounded-t-xl po-justify-center lg:po-justify-start po-px-4 po-pt-4 xl:po-pt-2 po-flex-wrap po-overflow-hidden",
  "aria-label": "Tabs"
}, zd = ["onClick", "aria-current"], Hd = { key: 0 }, qd = {
  name: "PoCardTabs"
}, n0 = /* @__PURE__ */ Object.assign(qd, {
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
    return (n, o) => (r(), p("nav", Rd, [
      (r(!0), p(B, null, I(e.tabs, (a) => (r(), p("span", {
        role: "button",
        onClick: (i) => n.$emit("button-click", a),
        key: a.name,
        class: E([
          a.current ? "po-bg-white po-text-slate-600 po-shadow-lg" : "po-text-slate-600 hover:po-text-mpao-blue",
          "po-px-4 po-py-3 po-font-medium po-mr-4 po-mb-4 xl:po-mb-0 po-text-sm po-cursor-pointer po-rounded-xl xl:po-rounded-b-none genie-effect hover:po-text-slate-600 hover:po-bg-white hover:po-shadow-md po-flex po-items-center po-flex-shrink-0 po-space-x-2"
        ]),
        "aria-current": a.current ? "page" : void 0
      }, [
        a.icon ? (r(), D(ye(a.icon), {
          key: 0,
          class: E(["po-w-5 po-h-5", [l(a)]])
        }, null, 8, ["class"])) : b("", !0),
        s("span", null, [
          ae(h(a.name), 1),
          a.count ? (r(), p("span", Hd, " (" + h(a.count) + ")", 1)) : b("", !0)
        ])
      ], 10, zd))), 128))
    ]));
  }
}), Ud = { class: "sm:po-hidden" }, Gd = /* @__PURE__ */ s("label", {
  for: "tabs",
  class: "po-sr-only"
}, "Select a tab", -1), Wd = {
  id: "tabs",
  name: "tabs",
  class: "po-block po-w-full po-rounded-md po-border-gray-300 focus:po-border-indigo-500 focus:po-ring-indigo-500"
}, Kd = ["selected"], Zd = { class: "po-hidden sm:po-block" }, Qd = {
  class: "po-flex po-space-x-4 po-pt-2",
  "aria-label": "Tabs"
}, Yd = ["onClick", "aria-current"], Jd = {
  name: "PoTabs"
}, a0 = /* @__PURE__ */ Object.assign(Jd, {
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
    const o = C(() => l.tabs.forEach((a) => {
      a.name === l.currentTab && (a.current = !0);
    }));
    return (a, i) => (r(), p(B, null, [
      s("div", Ud, [
        Gd,
        s("select", Wd, [
          (r(!0), p(B, null, I(m(o), (u) => (r(), p("option", {
            key: u.name,
            selected: u.current
          }, h(u.name), 9, Kd))), 128))
        ])
      ]),
      s("div", Zd, [
        s("nav", Qd, [
          (r(!0), p(B, null, I(e.tabs, (u) => (r(), p("span", {
            onClick: (d) => a.$emit("button-click", u),
            role: "button",
            key: u.name,
            class: E([
              u.current ? "po-bg-white po-text-slate-600 po-shadow-md" : "po-bg-slate-50 po-text-slate-600 hover:po-text-mpao-blue",
              "po-px-4 po-relative po-group po-py-3 po-font-medium po-text-sm po-cursor-pointer po-rounded-xl genie-effect hover:po-text-slate-600 hover:po-bg-white hover:po-shadow-md po-flex po-items-center po-space-x-2"
            ]),
            "aria-current": u.current ? "page" : void 0
          }, [
            u.icon ? (r(), D(ye(u.icon), {
              key: 0,
              class: E(["po-w-5 po-h-5", [n(u)]])
            }, null, 8, ["class"])) : b("", !0),
            s("span", null, [
              s("span", null, h(u.name), 1),
              u.count && u.count > 0 ? (r(), p("span", {
                key: 0,
                class: E(["po-absolute po-py-1 po-px-2 po-rounded-full po-text-xs -po-top-3 -po-right-2 po-shadow-md po-flex po-items-center po-justify-center", [
                  u.current ? "po-bg-mpao-orange po-text-white" : "po-bg-slate-400 po-text-white group-hover:po-bg-mpao-orange group-hover:po-text-white"
                ]])
              }, [
                s("span", null, h(u.count), 1)
              ], 2)) : b("", !0)
            ])
          ], 10, Yd))), 128))
        ])
      ])
    ], 64));
  }
}), Xd = { class: "po-mt-5 po-flex po-flex-col po-items-center po-justify-center po-px-5 po-py-8" }, ec = {
  key: 1,
  class: "po-text-base po-font-medium po-text-slate-600 po-text-center"
}, tc = {
  key: 2,
  class: "po-text-sm po-text-slate-500 po-text-center po-max-w-lg po-block po-mx-auto"
}, oc = {
  name: "PoEmpty"
}, s0 = /* @__PURE__ */ Object.assign(oc, {
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
    return (t, l) => (r(), p("div", Xd, [
      s("div", {
        class: E(["po-space-y-2 po-flex po-items-center po-flex-col po-justify-center", [{ "po-mb-5": t.$slots.action }]])
      }, [
        e.icon ? (r(), D(ye(e.icon), {
          key: 0,
          class: E(["po-w-10 po-h-10", e.iconColor])
        }, null, 8, ["class"])) : b("", !0),
        e.label !== "" ? (r(), p("span", ec, h(e.label), 1)) : b("", !0),
        e.description !== "" ? (r(), p("span", tc, h(e.description), 1)) : b("", !0)
      ], 2),
      te(t.$slots, "action")
    ]));
  }
});
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const pt = () => !1;
function lc(e) {
  throw e;
}
function nc(e) {
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
const ac = /&(gt|lt|amp|apos|quot);/g, sc = {
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
const rc = { class: "po-flex po-text-sm po-text-gray-700 po-flex-col po-space-y-5" }, ic = {
  key: 0,
  class: "po-text-base po-font-medium po-text-slate-700"
}, pc = {
  key: 1,
  class: "po-border po-border-orange-300 po-bg-orange-50 po-rounded-lg po-p-5 po-flex po-items-center po-space-x-3"
}, uc = { class: "po-grow po-text-sm po-text-slate-600" }, dc = {
  key: 2,
  class: "po-border po-border-red-300 po-bg-red-50 po-rounded-lg po-p-5 po-flex po-space-x-4"
}, cc = { class: "po-grow" }, fc = { class: "po-text-base po-text-slate-700 po-font-medium" }, vc = { class: "po-text-sm po-text-slate-600" }, mc = { class: "po-font-medium" }, hc = { key: 0 }, bc = { key: 0 }, gc = /* @__PURE__ */ s("dt", null, "Name", -1), yc = { key: 1 }, xc = /* @__PURE__ */ s("dt", null, "Identifer", -1), wc = { key: 2 }, Vc = /* @__PURE__ */ s("dt", null, "Date of birth", -1), kc = { key: 3 }, $c = /* @__PURE__ */ s("dt", null, "Reported Date of death", -1), _c = {
  key: 3,
  class: "po-pt-5"
}, Cc = { class: "po-flex po-items-center po-space-x-1" }, Sc = /* @__PURE__ */ s("span", null, "File a dispute.", -1), Oc = {
  name: "PoDRStatus"
}, r0 = /* @__PURE__ */ Object.assign(Oc, {
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
    return (n, o) => (r(), p("span", rc, [
      e.record !== null ? (r(), p("h2", ic, " Death was reported by " + h(e.record.institution), 1)) : b("", !0),
      e.request !== null && e.request.type_id === 1 ? (r(), p("div", pc, [
        S(m(ut), { class: "po-shrink-0 po-w-6 po-stroke-orange-600" }),
        s("span", uc, " This is a " + h(e.request.type) + " request and is in " + h(e.request.state) + " state. ", 1)
      ])) : b("", !0),
      e.request !== null && e.request.type_id !== 1 ? (r(), p("div", dc, [
        S(m(ut), { class: "po-shrink-0 po-w-6 po-h-6 po-stroke-red-600 po-stroke-2" }),
        s("div", cc, [
          s("h3", fc, h(e.request.type), 1),
          s("p", vc, [
            ae(" The following " + h(e.request.type) + " was reported: ", 1),
            s("span", mc, [
              ae(h(e.request.dispute_type), 1),
              e.request.date_of_death ? (r(), p("span", hc, " (New date: " + h(e.request.date_of_death) + ")", 1)) : b("", !0)
            ])
          ])
        ])
      ])) : b("", !0),
      S(Ho, null, {
        content: j(() => [
          e.member !== null ? (r(), p("div", bc, [
            gc,
            s("dd", null, h(e.member.name), 1)
          ])) : b("", !0),
          e.member !== null ? (r(), p("div", yc, [
            xc,
            s("dd", null, h(e.member.identifier), 1)
          ])) : b("", !0),
          e.member !== null ? (r(), p("div", wc, [
            Vc,
            s("dd", null, h(e.member.dob), 1)
          ])) : b("", !0),
          e.record !== null ? (r(), p("div", kc, [
            $c,
            s("dd", null, h(e.record.date_of_death), 1)
          ])) : b("", !0)
        ]),
        _: 1
      }),
      e.request === null ? (r(), p("span", _c, [
        S(Dt, {
          type: "simple",
          onButtonClick: l
        }, {
          label: j(() => [
            s("span", Cc, [
              S(m(rl), { class: "po-w-4 po-h-4 po-stroke-current" }),
              Sc
            ])
          ]),
          _: 1
        })
      ])) : b("", !0)
    ]));
  }
}), Pc = {
  key: 0,
  role: "button",
  class: "po-w-6 po-h-6 po-rounded-lg po-bg-white genie-effect po-flex po-items-center po-justify-center hover:po-bg-slate-50 po-cursor-pointer"
}, Ec = {
  name: "PoTableAction"
}, i0 = /* @__PURE__ */ Object.assign(Ec, {
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
    return t.btnType === "view" ? l.value = hl : t.btnType === "edit" ? l.value = gl : t.btnType === "delete" ? l.value = Vl : t.btnType === "icon" && t.btnIcon && (l.value = t.btnIcon), t.btnType === "view" ? n.value = "po-stroke-emerald-400" : t.btnType === "edit" ? n.value = "po-stroke-blue-400" : t.btnType === "delete" ? n.value = "po-stroke-red-400" : n.value = t.iconColor, (o, a) => (r(), p("span", null, [
      e.btnType === "icon" || e.btnType === "delete" || e.btnType === "edit" || e.btnType === "view" ? (r(), p("span", Pc, [
        (r(), D(ye(l.value), {
          class: E(["po-w-4 po-stroke-2", n.value])
        }, null, 8, ["class"]))
      ])) : (r(), p("span", {
        key: 1,
        role: "button",
        class: E(["po-block po-text-sm genie-effect", e.textColor])
      }, h(e.label), 3))
    ]));
  }
}), Lc = { key: 0 }, jc = {
  name: "Rufiyaa"
}, p0 = /* @__PURE__ */ Object.assign(jc, {
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
      e.amount !== null ? (r(), p("span", Lc, h(t(e.amount)), 1)) : b("", !0)
    ]));
  }
}), Bc = {
  name: "PoHeading"
}, u0 = /* @__PURE__ */ Object.assign(Bc, {
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
    return (t, l) => (r(), D(ye(e.type), { class: "po-text-base po-text-slate-600 po-font-semibold" }, {
      default: j(() => [
        ae(h(e.text), 1)
      ]),
      _: 1
    }));
  }
});
function Tc(e, t) {
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
const Nc = ["for"], Dc = { class: "po-capitalize" }, Ac = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Mc = ["title"], Ic = { class: "po-relative po-mt-1" }, Fc = {
  key: 0,
  class: "po-shrink-0 po-pr-1 po-inline-flex po-flex-wrap po-max-h-44"
}, Rc = { class: "po-px-2 po-py-1 po-mb-1 po-mr-1 po-rounded-md po-text-sm po-text-white po-flex po-space-x-2 po-items-center po-bg-mpao-lightblue" }, zc = ["onClick"], Hc = ["id"], qc = {
  key: 0,
  class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
}, Uc = ["onClick", "value"], Gc = {
  class: /* @__PURE__ */ E(["po-block po-truncate"])
}, Wc = ["id"], Kc = ["id"], Zc = {
  name: "PoMultiSelect",
  components: { CheckIcon: cl }
}, d0 = /* @__PURE__ */ Object.assign(Zc, {
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
    function i(w) {
      a.value.splice(w, 1), v();
    }
    function u(w) {
      let g = o.value.split(",");
      w.key === "Enter" && 0 < o.value.length && (w.preventDefault(), g.forEach((y) => {
        let k = l.items.find(
          (_) => _.name.toLowerCase() === y.trim().toLowerCase()
        );
        k && a.value.push(k);
      }), o.value = ""), w.key === "Backspace" && o.value.length === 0 && a.value.pop(), v();
    }
    const d = $([]);
    function v() {
      d.value = a.value.map((w) => w.id);
    }
    H(() => {
      document.addEventListener("keydown", u);
    }), se(() => {
      document.removeEventListener("keydown", u);
    });
    const c = $(!1), f = C(
      () => o.value === "" ? l.items : l.items.filter((w) => w.name.toLowerCase().includes(o.value.toLowerCase()))
    );
    let V = $();
    Tc(V, () => {
      c.value = !1;
    });
    function x(w) {
      a.value.push(w), o.value = "", v();
    }
    return Z(d, () => {
      t("update:modelValue", d.value);
    }), (w, g) => (r(), p("div", {
      ref_key: "multiSelectComponentRef",
      ref: V,
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
        s("span", Dc, h(e.label), 1),
        e.required ? (r(), p("span", Ac, "*")) : b("", !0),
        e.info !== null ? (r(), p("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          S(m(zo), { class: "po-fill-current" })
        ], 8, Mc)) : b("", !0)
      ], 10, Nc),
      s("div", Ic, [
        s("div", {
          class: E([
            "po-border po-p-1 po-min-h-[2.38rem] po-flex po-flex-wrap po-items-center focus-within:po-border-mpao-lightblue po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white sm:po-text-sm",
            n()
          ])
        }, [
          a.value.length > 0 ? (r(), p("div", Fc, [
            (r(!0), p(B, null, I(a.value, (y, k) => (r(), p("span", Rc, [
              s("span", null, h(y.name), 1),
              s("span", {
                onClick: () => i(k),
                class: "po-rounded-full po-bg-white po-flex po-items-center po-justify-center po-w-4 po-h-4 po-cursor-pointer"
              }, [
                S(m(Mt), { class: "po-w-3 po-fill-mpao-lightblue" })
              ], 8, zc)
            ]))), 256))
          ])) : b("", !0),
          Me(s("input", {
            id: e.id,
            "onUpdate:modelValue": g[0] || (g[0] = (y) => o.value = y),
            onFocus: g[1] || (g[1] = () => c.value = !0),
            class: "po-border-0 po-outline-none po-ring-0 po-grow"
          }, null, 40, Hc), [
            [ht, o.value]
          ])
        ], 2),
        c.value ? (r(), p("ul", qc, [
          (r(!0), p(B, null, I(m(f), (y) => (r(), p("li", {
            onClick: () => x(y),
            key: y.id,
            value: y.id,
            class: E([
              "po-relative po-select-none po-py-2 hover:po-bg-mpao-lightblue hover:po-text-white po-cursor-pointer po-pl-3 po-pr-9"
            ])
          }, [
            s("span", Gc, h(y.name), 1)
          ], 8, Uc))), 128))
        ])) : b("", !0)
      ]),
      e.message !== null ? (r(), p("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, h(e.message), 9, Wc)) : b("", !0),
      e.hasError && e.errorMessage !== null ? (r(), p("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-center po-space-x-1",
        id: `${e.id}-error`
      }, [
        S(m(ws), { class: "po-fill-current po-w-4" }),
        s("span", null, h(e.errorMessage), 1)
      ], 8, Kc)) : b("", !0)
    ], 2));
  }
}), Qc = { class: "po-flex po-pl-5" }, Yc = /* @__PURE__ */ s("div", { class: "po-shrink-0 po-flex po-flex-col" }, [
  /* @__PURE__ */ s("div", { class: "po-w-[2px] po-shrink-0 po-h-10" }),
  /* @__PURE__ */ s("div", { class: "po-bg-gradient-to-t po-from-orange-400 po-via-red-300 po-to-blue-500 po-w-[2px] po-grow" }),
  /* @__PURE__ */ s("div", { class: "po-w-[2px] po-shrink-0 po-h-12" })
], -1), Jc = { class: "po-grow po-pl-5 po-pt-5 po-space-y-3" }, Xc = ["onClick"], e1 = { class: "-po-mt-1 po-flex po-space-x-3 po-items-center" }, t1 = { class: "po-block po-text-xs po-text-slate-400" }, o1 = { class: "po-text-xs po-text-slate-500 po-pt-1" }, l1 = {
  name: "PoTimeline"
}, c0 = /* @__PURE__ */ Object.assign(l1, {
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
    return (l, n) => (r(), p("div", Qc, [
      Yc,
      s("div", Jc, [
        (r(!0), p(B, null, I(e.timeline, (o) => (r(), p("div", {
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
            s("div", e1, [
              s("h4", {
                class: E(["po-text-sm po-text-slate-600 po-font-medium", [{ "group-hover:po-text-mpao-lightblue": e.clickable }]])
              }, h(o.label), 3),
              s("span", t1, h(m(tl)(o.date)), 1)
            ]),
            s("p", o1, h(o.description), 1)
          ])
        ], 10, Xc))), 256))
      ])
    ]));
  }
}), n1 = {
  name: "PoTableCheckbox"
}, f0 = /* @__PURE__ */ Object.assign(n1, {
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
      e.isChecked ? (r(), D(m(is), {
        key: 0,
        onClick: n[0] || (n[0] = de(() => l.$emit("checkboxClicked", e.itemId), ["prevent"])),
        class: "po-w-6 po-fill-mpao-lightblue"
      })) : b("", !0),
      e.isChecked ? b("", !0) : (r(), p("span", {
        key: 1,
        onClick: n[1] || (n[1] = de(() => l.$emit("checkboxClicked", e.itemId), ["prevent"])),
        class: "po-h-5 po-w-5 po-rounded-full po-border-2 po-ml-[2px] po-block po-border-slate-300"
      }))
    ], 64));
  }
}), a1 = {
  key: 0,
  class: "po-pointer-events-auto po-w-full po-max-w-[260px] po-overflow-hidden po-rounded-lg po-bg-gray-900 po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5"
}, s1 = { class: "po-p-4" }, r1 = { class: "po-flex po-items-center po-space-x-3" }, i1 = /* @__PURE__ */ s("span", { class: "po-sr-only" }, "Action icon", -1), p1 = { class: "po-w-0 po-flex-1 po-text-sm po-font-medium po-text-gray-400" }, u1 = { class: "po-ml-4 po-flex po-flex-shrink-0" }, d1 = /* @__PURE__ */ s("span", { class: "po-sr-only" }, "Close", -1), c1 = {
  name: "PoToast"
}, v0 = /* @__PURE__ */ Object.assign(c1, {
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
    const i = C(() => l.message === "" && l.actionType !== "" ? l.actionType === "success" ? "Saved Successfully!" : l.actionType === "danger" ? "Item deleted!" : l.actionType === "warn" ? "Attention needed!" : "Wrong action" : l.message);
    return (u, d) => (r(), D(We, { to: "#po-notifications-alert" }, [
      S(we, {
        "enter-active-class": "po-transform po-ease-out po-duration-300 po-transition",
        "enter-from-class": "po-translate-y-2 po-opacity-0 sm:po-translate-y-0 sm:po-translate-x-2",
        "enter-to-class": "po-translate-y-0 po-opacity-100 sm:po-translate-x-0",
        "leave-active-class": "po-transition po-ease-in po-duration-100",
        "leave-from-class": "po-opacity-100",
        "leave-to-class": "po-opacity-0"
      }, {
        default: j(() => [
          o.value ? (r(), p("div", a1, [
            s("div", s1, [
              s("div", r1, [
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
                  e.actionType === "success" ? (r(), D(m(Fo), {
                    key: 0,
                    class: "po-w-5 po-h-5"
                  })) : b("", !0),
                  e.actionType === "danger" ? (r(), D(m(ds), {
                    key: 1,
                    class: "po-w-5 po-h-5"
                  })) : b("", !0),
                  e.actionType === "warn" ? (r(), D(m(Ro), {
                    key: 2,
                    class: "po-w-5 po-h-5"
                  })) : b("", !0),
                  i1
                ], 2)) : b("", !0),
                s("p", p1, h(m(i)), 1),
                s("div", u1, [
                  s("button", {
                    type: "button",
                    onClick: a,
                    class: "po-inline-flex po-rounded-md po-bg-gray-900 po-text-gray-400 hover:po-text-gray-300 hover:po-bg-gray-700 po-transition-colors po-duration-150 po-ease-out focus:po-outline-none focus:po-ring-2 focus:po-ring-indigo-500 focus:po-ring-offset-2"
                  }, [
                    d1,
                    S(m(Mt), {
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
}), f1 = {
  for: "",
  class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700"
}, v1 = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, m1 = ["title"], h1 = { class: "po-relative po-mt-1" }, b1 = {
  key: 1,
  class: "po-absolute po-top-0 po-left-0 po-right-0 po-bottom-0 po-overflow-hidden po-bg-white po-rounded-md po-border po-border-slate-300 po-flex po-items-center"
}, g1 = { class: "po-grow" }, y1 = {
  key: 0,
  class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
}, x1 = ["onClick"], w1 = {
  key: 0,
  class: "po-text-sm po-text-slate-600 po-p-4 po-block"
}, V1 = {
  key: 1,
  class: "po-mt-2 po-text-sm po-text-slate-500",
  id: "-description"
}, k1 = {
  key: 2,
  class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
  id: "-error"
}, $1 = {
  name: "PoSelectApi",
  components: { XMarkIcon: Ke }
}, m0 = /* @__PURE__ */ Object.assign($1, {
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
    C(() => {
      if (l.value) {
        const f = document.querySelector(".shell-content--area"), { top: V } = f.getBoundingClientRect(), x = f.scrollTop, { top: w, left: g, width: y } = l.value.getBoundingClientRect();
        return { relativeTop: w - V + x, left: g, width: y };
      }
    });
    const o = $(null);
    $(null);
    const a = (f) => {
      !o.value.contains(f.target) && !l.value.contains(f.target) && (n.value = !1);
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
    function v(f) {
      d.value = f, t("selected", f), n.value = !1;
    }
    function c() {
      t("loadmore", !0);
    }
    return (f, V) => (r(), p("div", {
      ref_key: "containerRef",
      ref: o,
      class: E(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      s("label", f1, [
        s("span", null, h(e.label), 1),
        e.required ? (r(), p("span", v1, "*")) : b("", !0),
        e.info !== null ? (r(), p("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          S(m(At), { class: "po-fill-current" })
        ], 8, m1)) : b("", !0)
      ]),
      s("div", h1, [
        s("div", null, [
          e.loading ? (r(), D(Nt, {
            key: 0,
            class: "po-right-0 po-top-4",
            absolute: !0
          })) : b("", !0),
          d.value !== null ? (r(), p("div", b1, [
            s("div", g1, [
              te(f.$slots, "selectedOption", Ue(Ge(d.value)), () => [
                ae(h(d.value), 1)
              ])
            ]),
            s("span", {
              class: "po-shrink-0 po-p-1 po-cursor-pointer",
              onClick: V[0] || (V[0] = (x) => {
                d.value = null, i.value = "";
              })
            }, [
              S(m(Ke), { class: "po-w-4 po-stroke-2 po-stroke-slate-400" })
            ])
          ])) : b("", !0),
          Me(s("input", {
            type: "text",
            name: "",
            id: "",
            ref_key: "selectBox",
            ref: l,
            "onUpdate:modelValue": V[1] || (V[1] = (x) => i.value = x),
            onInput: u,
            onFocus: V[2] || (V[2] = (x) => n.value = !0),
            class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm"
          }, null, 544), [
            [ht, i.value]
          ])
        ]),
        n.value && e.options.length > 0 || n.value && e.emptyMessage ? (r(), p("div", y1, [
          e.options && e.options.length > 0 ? (r(), p(B, { key: 0 }, [
            (r(!0), p(B, null, I(e.options, (x) => (r(), p("div", {
              onClick: (w) => v(x)
            }, [
              te(f.$slots, "option", Ue(Ge(x)), () => [
                ae(h(x), 1)
              ])
            ], 8, x1))), 256)),
            e.showMoreBtn ? (r(), p("span", {
              key: 0,
              role: "button",
              onClick: c,
              class: "po-text-sm po-text-semibold po-text-mpao-lightblue po-block po-text-center po-py-2 hover:po-bg-slate-50 po-transition-colors po-duration-150 po-ease-out"
            }, "More")) : b("", !0)
          ], 64)) : (r(), p(B, { key: 1 }, [
            e.emptyMessage ? (r(), p("span", w1, h(e.emptyMessage), 1)) : b("", !0)
          ], 64))
        ])) : b("", !0),
        e.message !== null ? (r(), p("p", V1, h(e.message), 1)) : b("", !0),
        e.errorMessage !== null ? (r(), p("p", k1, [
          s("span", null, h(e.errorMessage), 1)
        ])) : b("", !0)
      ])
    ], 2));
  }
});
export {
  j1 as PoActionBar,
  Y1 as PoAlert,
  Ml as PoAppIcon,
  pa as PoAppTray,
  Dt as PoButton,
  l0 as PoCallLog,
  B1 as PoCard,
  T1 as PoCardSearch,
  n0 as PoCardTabs,
  W1 as PoChatLogItem,
  H1 as PoCheckbox,
  Q1 as PoCommandPalette,
  o0 as PoConsent,
  e0 as PoContentArea,
  r0 as PoDRStatus,
  Ho as PoDescriptionList,
  X1 as PoDownloadFileList,
  A1 as PoDynamicTable,
  s0 as PoEmpty,
  q1 as PoFooter,
  U1 as PoFormStatusMessage,
  u0 as PoHeading,
  M1 as PoInputField,
  I1 as PoInputFile,
  t0 as PoLoading,
  J1 as PoLogs,
  Do as PoModal,
  d0 as PoMultiSelect,
  K1 as PoNotification,
  wa as PoNotificationHub,
  N1 as PoPageTitle,
  yr as PoPagination,
  Wa as PoProfileSwitcher,
  ys as PoRadioInput,
  Hl as PoSearchBar,
  z1 as PoSectionMenu,
  m0 as PoSelectApi,
  F1 as PoSelectField,
  L1 as PoSidebarDrawer,
  Z1 as PoSlideover,
  G1 as PoStatsBlock,
  D1 as PoTable,
  i0 as PoTableAction,
  f0 as PoTableCheckbox,
  a0 as PoTabs,
  Ls as PoTextarea,
  c0 as PoTimeline,
  v0 as PoToast,
  R1 as PoToggle,
  P1 as PoTopBar,
  p0 as Rufiyaa
};
