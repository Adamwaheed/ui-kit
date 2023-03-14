import M, { openBlock as p, createElementBlock as u, createElementVNode as s, createVNode as E, unref as g, withCtx as O, renderSlot as te, createBlock as j, resolveDynamicComponent as he, createCommentVNode as y, computed as C, toDisplayString as h, ref as $, onMounted as W, onUnmounted as ae, watch as ne, withDirectives as dt, isRef as zo, vModelText as Gt, cloneVNode as Ho, h as Y, Fragment as T, inject as se, provide as ie, watchEffect as oe, defineComponent as q, toRaw as G, nextTick as Ve, Teleport as ft, reactive as qo, shallowRef as Wt, normalizeClass as N, Transition as Oe, renderList as H, withModifiers as be, mergeProps as Be, createTextVNode as ce, toRefs as je, onUpdated as Kt, normalizeProps as Nt, guardReactiveProps as Lt, vModelCheckbox as Uo, normalizeStyle as Go, onBeforeUnmount as Zt, createStaticVNode as Wo } from "vue";
const { createElementVNode: Ko, openBlock: Zo, createElementBlock: Xo } = M;
var Qo = function(t, o) {
  return Zo(), Xo("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    Ko("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
    })
  ]);
};
const { createElementVNode: Yo, openBlock: Jo, createElementBlock: el } = M;
var tl = function(t, o) {
  return Jo(), el("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    Yo("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
    })
  ]);
};
const { createElementVNode: ol, openBlock: ll, createElementBlock: nl } = M;
var al = function(t, o) {
  return ll(), nl("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    ol("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
    })
  ]);
};
const { createElementVNode: sl, openBlock: rl, createElementBlock: il } = M;
var pl = function(t, o) {
  return rl(), il("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    sl("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    })
  ]);
};
const { createElementVNode: ul, openBlock: cl, createElementBlock: dl } = M;
var fl = function(t, o) {
  return cl(), dl("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    ul("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
    })
  ]);
};
const { createElementVNode: vl, openBlock: ml, createElementBlock: hl } = M;
var bl = function(t, o) {
  return ml(), hl("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    vl("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
    })
  ]);
};
const { createElementVNode: gl, openBlock: yl, createElementBlock: xl } = M;
var Vl = function(t, o) {
  return yl(), xl("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    gl("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
    })
  ]);
};
const { createElementVNode: wl, openBlock: kl, createElementBlock: $l } = M;
var _l = function(t, o) {
  return kl(), $l("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    wl("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
    })
  ]);
};
const { createElementVNode: Cl, openBlock: El, createElementBlock: Sl } = M;
var Bl = function(t, o) {
  return El(), Sl("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    Cl("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
    })
  ]);
};
const { createElementVNode: Pl, openBlock: Ol, createElementBlock: Nl } = M;
var Ll = function(t, o) {
  return Ol(), Nl("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    Pl("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  ]);
};
const { createElementVNode: Il, openBlock: Dl, createElementBlock: Al } = M;
var Tl = function(t, o) {
  return Dl(), Al("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    Il("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4.5 12.75l6 6 9-13.5"
    })
  ]);
};
const { createElementVNode: jl, openBlock: Ml, createElementBlock: Rl } = M;
var Fl = function(t, o) {
  return Ml(), Rl("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    jl("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 19.5L8.25 12l7.5-7.5"
    })
  ]);
};
const { createElementVNode: zl, openBlock: Hl, createElementBlock: ql } = M;
var Ul = function(t, o) {
  return Hl(), ql("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    zl("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M8.25 4.5l7.5 7.5-7.5 7.5"
    })
  ]);
};
const { createElementVNode: Gl, openBlock: Wl, createElementBlock: Kl } = M;
var Zl = function(t, o) {
  return Wl(), Kl("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    Gl("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
    })
  ]);
};
const { createElementVNode: Xl, openBlock: Ql, createElementBlock: Yl } = M;
var Jl = function(t, o) {
  return Ql(), Yl("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    Xl("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
    })
  ]);
};
const { createElementVNode: It, openBlock: en, createElementBlock: tn } = M;
var on = function(t, o) {
  return en(), tn("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    It("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
    }),
    It("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    })
  ]);
};
const { createElementVNode: ln, openBlock: nn, createElementBlock: an } = M;
var sn = function(t, o) {
  return nn(), an("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    ln("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
    })
  ]);
};
const { createElementVNode: rn, openBlock: pn, createElementBlock: un } = M;
var cn = function(t, o) {
  return pn(), un("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    rn("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    })
  ]);
};
const { createElementVNode: dn, openBlock: fn, createElementBlock: vn } = M;
var mn = function(t, o) {
  return fn(), vn("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    dn("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
    })
  ]);
};
const { createElementVNode: hn, openBlock: bn, createElementBlock: gn } = M;
var yn = function(t, o) {
  return bn(), gn("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    hn("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
    })
  ]);
};
const { createElementVNode: xn, openBlock: Vn, createElementBlock: wn } = M;
var kn = function(t, o) {
  return Vn(), wn("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    xn("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
    })
  ]);
};
const { createElementVNode: $n, openBlock: _n, createElementBlock: Cn } = M;
var En = function(t, o) {
  return _n(), Cn("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    $n("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
    })
  ]);
};
const { createElementVNode: Sn, openBlock: Bn, createElementBlock: Pn } = M;
var On = function(t, o) {
  return Bn(), Pn("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    Sn("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
    })
  ]);
};
const { createElementVNode: Nn, openBlock: Ln, createElementBlock: In } = M;
var Dn = function(t, o) {
  return Ln(), In("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    Nn("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
    })
  ]);
};
const { createElementVNode: An, openBlock: Tn, createElementBlock: jn } = M;
var Mn = function(t, o) {
  return Tn(), jn("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    An("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
    })
  ]);
};
const { createElementVNode: Rn, openBlock: Fn, createElementBlock: zn } = M;
var Hn = function(t, o) {
  return Fn(), zn("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    Rn("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M6 18L18 6M6 6l12 12"
    })
  ]);
}, qn = Qo, Un = tl, Gn = al, Wn = pl, Kn = fl, Zn = bl, Xn = Vl, Qn = _l, Yn = Bl, Jn = Ll, ea = Tl, ta = Fl, oa = Ul, la = Zl, st = Jl, na = on, aa = sn, vt = cn, Xt = mn, sa = yn, ra = kn, ia = En, pa = On, ua = Dn, Dt = Mn, Qt = Hn;
const ca = { class: "po-bg-mpao-blue po-fixed po-top-0 po-w-full po-z-50 po-flex" }, da = { class: "po-shrink-0 po-px-3 po-pt-3" }, fa = {
  for: "sidebar-drawer-toggle",
  role: "button",
  class: "genie-effect po-flex po-items-center po-justify-center po-bg-[#2e5266] po-rounded-full po-w-10 po-h-10 po-select-none po-text-slate-100"
}, va = { class: "po-mx-auto po-max-w-full po-pr-4 po-grow sm:po-pr-4" }, ma = { class: "po-flex po-relative po-h-16 po-items-center po-justify-between po-space-x-12" }, ha = { class: "po-flex po-items-center po-space-x-3" }, ba = {
  key: 0,
  class: "po-block po-w-6 po-text-slate-100 md:po-hidden",
  role: "button"
}, ga = {
  name: "PoTopBar"
}, u4 = /* @__PURE__ */ Object.assign(ga, {
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
    function o(a) {
      t("profileSwitcherClick", a);
    }
    function n(a) {
      t("query", a);
    }
    function l(a) {
      t("onSearchClear", a);
    }
    return (a, r) => (p(), u("nav", ca, [
      s("div", da, [
        s("label", fa, [
          E(g(Wn), { class: "po-w-6 po-fill-current" })
        ])
      ]),
      s("div", va, [
        s("div", ma, [
          E(g(_a), { "app-name": e.appName }, {
            icon: O(() => [
              te(a.$slots, "appIcon", {}, () => [
                e.appIcon ? (p(), j(he(e.appIcon), { key: 0 })) : y("", !0)
              ])
            ]),
            _: 3
          }, 8, ["app-name"]),
          e.hasSearch ? (p(), j(g(Pa), {
            key: 0,
            onQuery: n,
            onOnClear: l,
            "current-query": e.currentQuery
          }, null, 8, ["current-query"])) : y("", !0),
          s("div", ha, [
            e.hasSearch ? (p(), u("span", ba, [
              E(g(vt), { class: "po-stroke-current" })
            ])) : y("", !0),
            E(g(rr), {
              notifications: e.notifications,
              "has-new-notifications": e.hasNewNotifications
            }, null, 8, ["notifications", "has-new-notifications"]),
            E(g(Zs), { "app-list": e.appList }, null, 8, ["app-list"]),
            E(g(Cr), {
              "profile-switcher-data": e.profileSwitcherData,
              onButtonClick: o
            }, null, 8, ["profile-switcher-data"])
          ])
        ])
      ])
    ]));
  }
}), ya = { class: "po-flex po-items-center po-justify-center po-space-x-3" }, xa = { class: "po-w-8 po-text-slate-100 app-icon" }, Va = { class: "po-font-light po-text-lg po-text-slate-100" }, wa = { class: "po-hidden md:po-block" }, ka = { class: "po-block md:po-hidden" }, $a = {
  name: "PoAppIcon"
}, _a = /* @__PURE__ */ Object.assign($a, {
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
    const t = e, o = C(() => t.appName.match(/\b[A-Z]/g).join(""));
    return (n, l) => (p(), u("div", ya, [
      s("div", xa, [
        te(n.$slots, "icon")
      ]),
      s("span", Va, [
        s("span", wa, h(e.appName), 1),
        s("span", ka, h(g(o)), 1)
      ])
    ]));
  }
}), Ca = { class: "po-flex-grow po-hidden po-relative md:po-block" }, Ea = ["placeholder"], Sa = { class: "po-absolute po-inset-y-0 po-left-0 po-flex po-items-center po-pl-3 po-pointer-events-none po-transition-all po-ease-linear po-duration-100 po-text-slate-400 po-origin-center peer-hover/search:po-scale-105 peer-focus/search:po-text-slate-100" }, Ba = {
  name: "PoSearchBar"
}, Pa = /* @__PURE__ */ Object.assign(Ba, {
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
    const o = e;
    let n = $("");
    const l = (a) => {
      a.key === "Enter" && 0 < n.value.length && t("query", n.value);
    };
    return W(() => {
      document.addEventListener("keydown", l), n.value = o.currentQuery;
    }), ae(() => {
      document.removeEventListener("keydown", l);
    }), ne(n, async (a, r) => {
      a === "" && t("onClear", !0);
    }), (a, r) => (p(), u("div", Ca, [
      dt(s("input", {
        "onUpdate:modelValue": r[0] || (r[0] = (i) => zo(n) ? n.value = i : n = i),
        type: "text",
        id: "main-search",
        placeholder: e.placeholder,
        class: "peer/search po-bg-transparent po-border po-border-transparent po-text-slate-100 po-text-sm po-rounded-md po-ring-0 po-outline-none focus:po-outline-none focus:po-ring-0 po-transition-colors po-ease-linear po-duration-100 po-block po-w-full po-pl-10 po-p-2.5 po-appearance-none focus:po-border-slate-400 hover:po-border-slate-600"
      }, null, 8, Ea), [
        [Gt, g(n)]
      ]),
      s("div", Sa, [
        E(g(vt), { class: "po-w-5 po-h-5 po-stroke-current" })
      ])
    ]));
  }
});
function X(e, t, ...o) {
  if (e in t) {
    let l = t[e];
    return typeof l == "function" ? l(...o) : l;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((l) => `"${l}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, X), n;
}
var de = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(de || {}), we = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(we || {});
function U({ visible: e = !0, features: t = 0, ourProps: o, theirProps: n, ...l }) {
  var a;
  let r = Jt(n, o), i = Object.assign(l, { props: r });
  if (e || t & 2 && r.static)
    return tt(i);
  if (t & 1) {
    let c = (a = r.unmount) == null || a ? 0 : 1;
    return X(c, { [0]() {
      return null;
    }, [1]() {
      return tt({ ...l, props: { ...r, hidden: !0, style: { display: "none" } } });
    } });
  }
  return tt(i);
}
function tt({ props: e, attrs: t, slots: o, slot: n, name: l }) {
  var a, r;
  let { as: i, ...c } = Ie(e, ["unmount", "static"]), d = (a = o.default) == null ? void 0 : a.call(o, n), f = {};
  if (n) {
    let b = !1, k = [];
    for (let [w, V] of Object.entries(n))
      typeof V == "boolean" && (b = !0), V === !0 && k.push(w);
    b && (f["data-headlessui-state"] = k.join(" "));
  }
  if (i === "template") {
    if (d = Yt(d ?? []), Object.keys(c).length > 0 || Object.keys(t).length > 0) {
      let [b, ...k] = d ?? [];
      if (!Oa(b) || k.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${l} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(c).concat(Object.keys(t)).map((m) => m.trim()).filter((m, v, x) => x.indexOf(m) === v).sort((m, v) => m.localeCompare(v)).map((m) => `  - ${m}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((m) => `  - ${m}`).join(`
`)].join(`
`));
      let w = Jt((r = b.props) != null ? r : {}, c), V = Ho(b, w);
      for (let m in w)
        m.startsWith("on") && (V.props || (V.props = {}), V.props[m] = w[m]);
      return V;
    }
    return Array.isArray(d) && d.length === 1 ? d[0] : d;
  }
  return Y(i, Object.assign({}, c, f), { default: () => d });
}
function Yt(e) {
  return e.flatMap((t) => t.type === T ? Yt(t.children) : [t]);
}
function Jt(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, o = {};
  for (let n of e)
    for (let l in n)
      l.startsWith("on") && typeof n[l] == "function" ? (o[l] != null || (o[l] = []), o[l].push(n[l])) : t[l] = n[l];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(o).map((n) => [n, void 0])));
  for (let n in o)
    Object.assign(t, { [n](l, ...a) {
      let r = o[n];
      for (let i of r) {
        if (l instanceof Event && l.defaultPrevented)
          return;
        i(l, ...a);
      }
    } });
  return t;
}
function mt(e) {
  let t = Object.assign({}, e);
  for (let o in t)
    t[o] === void 0 && delete t[o];
  return t;
}
function Ie(e, t = []) {
  let o = Object.assign({}, e);
  for (let n of t)
    n in o && delete o[n];
  return o;
}
function Oa(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Na = 0;
function La() {
  return ++Na;
}
function J() {
  return La();
}
var F = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(F || {});
function Ia(e) {
  throw new Error("Unexpected object: " + e);
}
var ue = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(ue || {});
function Da(e, t) {
  let o = t.resolveItems();
  if (o.length <= 0)
    return null;
  let n = t.resolveActiveIndex(), l = n ?? -1, a = (() => {
    switch (e.focus) {
      case 0:
        return o.findIndex((r) => !t.resolveDisabled(r));
      case 1: {
        let r = o.slice().reverse().findIndex((i, c, d) => l !== -1 && d.length - c - 1 >= l ? !1 : !t.resolveDisabled(i));
        return r === -1 ? r : o.length - 1 - r;
      }
      case 2:
        return o.findIndex((r, i) => i <= l ? !1 : !t.resolveDisabled(r));
      case 3: {
        let r = o.slice().reverse().findIndex((i) => !t.resolveDisabled(i));
        return r === -1 ? r : o.length - 1 - r;
      }
      case 4:
        return o.findIndex((r) => t.resolveId(r) === e.id);
      case 5:
        return null;
      default:
        Ia(e);
    }
  })();
  return a === -1 ? n : a;
}
function S(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let eo = Symbol("Context");
var Q = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Q || {});
function Aa() {
  return Le() !== null;
}
function Le() {
  return se(eo, null);
}
function Ue(e) {
  ie(eo, e);
}
function At(e, t) {
  if (e)
    return e;
  let o = t ?? "button";
  if (typeof o == "string" && o.toLowerCase() === "button")
    return "button";
}
function Ge(e, t) {
  let o = $(At(e.value.type, e.value.as));
  return W(() => {
    o.value = At(e.value.type, e.value.as);
  }), oe(() => {
    var n;
    o.value || S(t) && S(t) instanceof HTMLButtonElement && !((n = S(t)) != null && n.hasAttribute("type")) && (o.value = "button");
  }), o;
}
var Ta = Object.defineProperty, ja = (e, t, o) => t in e ? Ta(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, Tt = (e, t, o) => (ja(e, typeof t != "symbol" ? t + "" : t, o), o);
let Ma = class {
  constructor() {
    Tt(this, "current", this.detect()), Tt(this, "currentId", 0);
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
}, Me = new Ma();
function me(e) {
  if (Me.isServer)
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
function to({ container: e, accept: t, walk: o, enabled: n }) {
  oe(() => {
    let l = e.value;
    if (!l || n !== void 0 && !n.value)
      return;
    let a = me(e);
    if (!a)
      return;
    let r = Object.assign((c) => t(c), { acceptNode: t }), i = a.createTreeWalker(l, NodeFilter.SHOW_ELEMENT, r, !1);
    for (; i.nextNode(); )
      o(i.currentNode);
  });
}
let rt = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var le = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(le || {}), Ne = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Ne || {}), Ra = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Ra || {});
function We(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(rt)).sort((t, o) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (o.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var ht = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(ht || {});
function oo(e, t = 0) {
  var o;
  return e === ((o = me(e)) == null ? void 0 : o.body) ? !1 : X(t, { [0]() {
    return e.matches(rt);
  }, [1]() {
    let n = e;
    for (; n !== null; ) {
      if (n.matches(rt))
        return !0;
      n = n.parentElement;
    }
    return !1;
  } });
}
function Pe(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Fa = ["textarea", "input"].join(",");
function za(e) {
  var t, o;
  return (o = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Fa)) != null ? o : !1;
}
function bt(e, t = (o) => o) {
  return e.slice().sort((o, n) => {
    let l = t(o), a = t(n);
    if (l === null || a === null)
      return 0;
    let r = l.compareDocumentPosition(a);
    return r & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : r & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function fe(e, t, { sorted: o = !0, relativeTo: n = null, skipElements: l = [] } = {}) {
  var a;
  let r = (a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? a : document, i = Array.isArray(e) ? o ? bt(e) : e : We(e);
  l.length > 0 && i.length > 1 && (i = i.filter((V) => !l.includes(V))), n = n ?? r.activeElement;
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
      return Math.max(0, i.indexOf(n)) - 1;
    if (t & 4)
      return Math.max(0, i.indexOf(n)) + 1;
    if (t & 8)
      return i.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), f = t & 32 ? { preventScroll: !0 } : {}, b = 0, k = i.length, w;
  do {
    if (b >= k || b + k <= 0)
      return 0;
    let V = d + b;
    if (t & 16)
      V = (V + k) % k;
    else {
      if (V < 0)
        return 3;
      if (V >= k)
        return 1;
    }
    w = i[V], w == null || w.focus(f), b += c;
  } while (w !== r.activeElement);
  return t & 6 && za(w) && w.select(), w.hasAttribute("tabindex") || w.setAttribute("tabindex", "0"), 2;
}
function ot(e, t, o) {
  Me.isServer || oe((n) => {
    document.addEventListener(e, t, o), n(() => document.removeEventListener(e, t, o));
  });
}
function gt(e, t, o = C(() => !0)) {
  function n(a, r) {
    if (!o.value || a.defaultPrevented)
      return;
    let i = r(a);
    if (i === null || !i.getRootNode().contains(i))
      return;
    let c = function d(f) {
      return typeof f == "function" ? d(f()) : Array.isArray(f) || f instanceof Set ? f : [f];
    }(e);
    for (let d of c) {
      if (d === null)
        continue;
      let f = d instanceof HTMLElement ? d : S(d);
      if (f != null && f.contains(i) || a.composed && a.composedPath().includes(f))
        return;
    }
    return !oo(i, ht.Loose) && i.tabIndex !== -1 && a.preventDefault(), t(a, i);
  }
  let l = $(null);
  ot("mousedown", (a) => {
    var r, i;
    o.value && (l.value = ((i = (r = a.composedPath) == null ? void 0 : r.call(a)) == null ? void 0 : i[0]) || a.target);
  }, !0), ot("click", (a) => {
    l.value && (n(a, () => l.value), l.value = null);
  }, !0), ot("blur", (a) => n(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var ye = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(ye || {});
let xe = q({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: o }) {
  return () => {
    let { features: n, ...l } = e, a = { "aria-hidden": (n & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(n & 4) === 4 && (n & 2) !== 2 && { display: "none" } } };
    return U({ ourProps: a, theirProps: l, slot: {}, attrs: o, slots: t, name: "Hidden" });
  };
} });
function yt(e = {}, t = null, o = []) {
  for (let [n, l] of Object.entries(e))
    no(o, lo(t, n), l);
  return o;
}
function lo(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function no(e, t, o) {
  if (Array.isArray(o))
    for (let [n, l] of o.entries())
      no(e, lo(t, n.toString()), l);
  else
    o instanceof Date ? e.push([t, o.toISOString()]) : typeof o == "boolean" ? e.push([t, o ? "1" : "0"]) : typeof o == "string" ? e.push([t, o]) : typeof o == "number" ? e.push([t, `${o}`]) : o == null ? e.push([t, ""]) : yt(o, t, e);
}
function ao(e) {
  var t;
  let o = (t = e == null ? void 0 : e.form) != null ? t : e.closest("form");
  if (o) {
    for (let n of o.elements)
      if (n.tagName === "INPUT" && n.type === "submit" || n.tagName === "BUTTON" && n.type === "submit" || n.nodeName === "INPUT" && n.type === "image") {
        n.click();
        return;
      }
  }
}
function xt(e, t, o) {
  let n = $(o == null ? void 0 : o.value), l = C(() => e.value !== void 0);
  return [C(() => l.value ? e.value : n.value), function(a) {
    return l.value || (n.value = a), t == null ? void 0 : t(a);
  }];
}
function jt(e) {
  return [e.screenX, e.screenY];
}
function Ha() {
  let e = $([-1, -1]);
  return { wasMoved(t) {
    let o = jt(t);
    return e.value[0] === o[0] && e.value[1] === o[1] ? !1 : (e.value = o, !0);
  }, update(t) {
    e.value = jt(t);
  } };
}
function so() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function qa() {
  return /Android/gi.test(window.navigator.userAgent);
}
function Ua() {
  return so() || qa();
}
function Ga(e, t) {
  return e === t;
}
var Wa = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Wa || {}), Ka = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(Ka || {}), Za = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Za || {});
let ro = Symbol("ComboboxContext");
function De(e) {
  let t = se(ro, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, De), o;
  }
  return t;
}
let Xa = q({ name: "Combobox", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "template" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => Ga }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String }, nullable: { type: Boolean, default: !1 }, multiple: { type: [Boolean], default: !1 } }, inheritAttrs: !1, setup(e, { slots: t, attrs: o, emit: n }) {
  let l = $(1), a = $(null), r = $(null), i = $(null), c = $(null), d = $({ static: !1, hold: !1 }), f = $([]), b = $(null), k = $(1), w = $(!1);
  function V(P = (A) => A) {
    let A = b.value !== null ? f.value[b.value] : null, D = bt(P(f.value.slice()), (z) => S(z.dataRef.domRef)), L = A ? D.indexOf(A) : null;
    return L === -1 && (L = null), { options: D, activeOptionIndex: L };
  }
  let m = C(() => e.multiple ? 1 : 0), v = C(() => e.nullable), [x, _] = xt(C(() => e.modelValue === void 0 ? X(m.value, { [1]: [], [0]: void 0 }) : e.modelValue), (P) => n("update:modelValue", P), C(() => e.defaultValue)), B = { comboboxState: l, value: x, mode: m, compare(P, A) {
    if (typeof e.by == "string") {
      let D = e.by;
      return (P == null ? void 0 : P[D]) === (A == null ? void 0 : A[D]);
    }
    return e.by(P, A);
  }, defaultValue: C(() => e.defaultValue), nullable: v, inputRef: r, labelRef: a, buttonRef: i, optionsRef: c, disabled: C(() => e.disabled), options: f, change(P) {
    _(P);
  }, activeOptionIndex: C(() => {
    if (w.value && b.value === null && f.value.length > 0) {
      let P = f.value.findIndex((A) => !A.dataRef.disabled);
      if (P !== -1)
        return P;
    }
    return b.value;
  }), activationTrigger: k, optionsPropsRef: d, closeCombobox() {
    w.value = !1, !e.disabled && l.value !== 1 && (l.value = 1, b.value = null);
  }, openCombobox() {
    if (w.value = !0, e.disabled || l.value === 0)
      return;
    let P = f.value.findIndex((A) => {
      let D = G(A.dataRef.value);
      return X(m.value, { [0]: () => B.compare(G(B.value.value), G(D)), [1]: () => G(B.value.value).some((L) => B.compare(G(L), G(D))) });
    });
    P !== -1 && (b.value = P), l.value = 0;
  }, goToOption(P, A, D) {
    if (w.value = !1, e.disabled || c.value && !d.value.static && l.value === 1)
      return;
    let L = V();
    if (L.activeOptionIndex === null) {
      let ee = L.options.findIndex(($e) => !$e.dataRef.disabled);
      ee !== -1 && (L.activeOptionIndex = ee);
    }
    let z = Da(P === ue.Specific ? { focus: ue.Specific, id: A } : { focus: P }, { resolveItems: () => L.options, resolveActiveIndex: () => L.activeOptionIndex, resolveId: (ee) => ee.id, resolveDisabled: (ee) => ee.dataRef.disabled });
    b.value = z, k.value = D ?? 1, f.value = L.options;
  }, selectOption(P) {
    let A = f.value.find((L) => L.id === P);
    if (!A)
      return;
    let { dataRef: D } = A;
    _(X(m.value, { [0]: () => D.value, [1]: () => {
      let L = G(B.value.value).slice(), z = G(D.value), ee = L.findIndex(($e) => B.compare(z, G($e)));
      return ee === -1 ? L.push(z) : L.splice(ee, 1), L;
    } }));
  }, selectActiveOption() {
    if (B.activeOptionIndex.value === null)
      return;
    let { dataRef: P, id: A } = f.value[B.activeOptionIndex.value];
    _(X(m.value, { [0]: () => P.value, [1]: () => {
      let D = G(B.value.value).slice(), L = G(P.value), z = D.findIndex((ee) => B.compare(L, G(ee)));
      return z === -1 ? D.push(L) : D.splice(z, 1), D;
    } })), B.goToOption(ue.Specific, A);
  }, registerOption(P, A) {
    let D = { id: P, dataRef: A }, L = V((z) => [...z, D]);
    if (b.value === null) {
      let z = A.value.value;
      X(m.value, { [0]: () => B.compare(G(B.value.value), G(z)), [1]: () => G(B.value.value).some((ee) => B.compare(G(ee), G(z))) }) && (L.activeOptionIndex = L.options.indexOf(D));
    }
    f.value = L.options, b.value = L.activeOptionIndex, k.value = 1;
  }, unregisterOption(P) {
    var A;
    B.activeOptionIndex.value !== null && ((A = B.options.value[B.activeOptionIndex.value]) == null ? void 0 : A.id) === P && (w.value = !0);
    let D = V((L) => {
      let z = L.findIndex((ee) => ee.id === P);
      return z !== -1 && L.splice(z, 1), L;
    });
    f.value = D.options, b.value = D.activeOptionIndex, k.value = 1;
  } };
  gt([r, i, c], () => B.closeCombobox(), C(() => l.value === 0)), ie(ro, B), Ue(C(() => X(l.value, { [0]: Q.Open, [1]: Q.Closed })));
  let I = C(() => B.activeOptionIndex.value === null ? null : f.value[B.activeOptionIndex.value].dataRef.value), R = C(() => {
    var P;
    return (P = S(r)) == null ? void 0 : P.closest("form");
  });
  return W(() => {
    ne([R], () => {
      if (!R.value || e.defaultValue === void 0)
        return;
      function P() {
        B.change(e.defaultValue);
      }
      return R.value.addEventListener("reset", P), () => {
        var A;
        (A = R.value) == null || A.removeEventListener("reset", P);
      };
    }, { immediate: !0 });
  }), () => {
    let { name: P, disabled: A, ...D } = e, L = { open: l.value === 0, disabled: A, activeIndex: B.activeOptionIndex.value, activeOption: I.value, value: x.value };
    return Y(T, [...P != null && x.value != null ? yt({ [P]: x.value }).map(([z, ee]) => Y(xe, mt({ features: ye.Hidden, key: z, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: z, value: ee }))) : [], U({ theirProps: { ...o, ...Ie(D, ["modelValue", "defaultValue", "nullable", "multiple", "onUpdate:modelValue", "by"]) }, ourProps: {}, slot: L, slots: t, attrs: o, name: "Combobox" })]);
  };
} }), Qa = q({ name: "ComboboxLabel", props: { as: { type: [Object, String], default: "label" }, id: { type: String, default: () => `headlessui-combobox-label-${J()}` } }, setup(e, { attrs: t, slots: o }) {
  let n = De("ComboboxLabel");
  function l() {
    var a;
    (a = S(n.inputRef)) == null || a.focus({ preventScroll: !0 });
  }
  return () => {
    let a = { open: n.comboboxState.value === 0, disabled: n.disabled.value }, { id: r, ...i } = e, c = { id: r, ref: n.labelRef, onClick: l };
    return U({ ourProps: c, theirProps: i, slot: a, attrs: t, slots: o, name: "ComboboxLabel" });
  };
} }), Ya = q({ name: "ComboboxButton", props: { as: { type: [Object, String], default: "button" }, id: { type: String, default: () => `headlessui-combobox-button-${J()}` } }, setup(e, { attrs: t, slots: o, expose: n }) {
  let l = De("ComboboxButton");
  n({ el: l.buttonRef, $el: l.buttonRef });
  function a(c) {
    l.disabled.value || (l.comboboxState.value === 0 ? l.closeCombobox() : (c.preventDefault(), l.openCombobox()), Ve(() => {
      var d;
      return (d = S(l.inputRef)) == null ? void 0 : d.focus({ preventScroll: !0 });
    }));
  }
  function r(c) {
    switch (c.key) {
      case F.ArrowDown:
        c.preventDefault(), c.stopPropagation(), l.comboboxState.value === 1 && l.openCombobox(), Ve(() => {
          var d;
          return (d = l.inputRef.value) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        return;
      case F.ArrowUp:
        c.preventDefault(), c.stopPropagation(), l.comboboxState.value === 1 && (l.openCombobox(), Ve(() => {
          l.value.value || l.goToOption(ue.Last);
        })), Ve(() => {
          var d;
          return (d = l.inputRef.value) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        return;
      case F.Escape:
        if (l.comboboxState.value !== 0)
          return;
        c.preventDefault(), l.optionsRef.value && !l.optionsPropsRef.value.static && c.stopPropagation(), l.closeCombobox(), Ve(() => {
          var d;
          return (d = l.inputRef.value) == null ? void 0 : d.focus({ preventScroll: !0 });
        });
        return;
    }
  }
  let i = Ge(C(() => ({ as: e.as, type: t.type })), l.buttonRef);
  return () => {
    var c, d;
    let f = { open: l.comboboxState.value === 0, disabled: l.disabled.value, value: l.value.value }, { id: b, ...k } = e, w = { ref: l.buttonRef, id: b, type: i.value, tabindex: "-1", "aria-haspopup": "listbox", "aria-controls": (c = S(l.optionsRef)) == null ? void 0 : c.id, "aria-expanded": l.disabled.value ? void 0 : l.comboboxState.value === 0, "aria-labelledby": l.labelRef.value ? [(d = S(l.labelRef)) == null ? void 0 : d.id, b].join(" ") : void 0, disabled: l.disabled.value === !0 ? !0 : void 0, onKeydown: r, onClick: a };
    return U({ ourProps: w, theirProps: k, slot: f, attrs: t, slots: o, name: "ComboboxButton" });
  };
} }), Ja = q({ name: "ComboboxInput", props: { as: { type: [Object, String], default: "input" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, displayValue: { type: Function }, defaultValue: { type: String, default: void 0 }, id: { type: String, default: () => `headlessui-combobox-input-${J()}` } }, emits: { change: (e) => !0 }, setup(e, { emit: t, attrs: o, slots: n, expose: l }) {
  let a = De("ComboboxInput"), r = { value: !1 };
  l({ el: a.inputRef, $el: a.inputRef });
  let i = C(() => {
    var m;
    let v = a.value.value;
    return S(a.inputRef) ? typeof e.displayValue < "u" && v !== void 0 ? (m = e.displayValue(v)) != null ? m : "" : typeof v == "string" ? v : "" : "";
  });
  W(() => {
    ne([i, a.comboboxState], ([m, v], [x, _]) => {
      if (r.value)
        return;
      let B = S(a.inputRef);
      B && (_ === 0 && v === 1 || m !== x) && (B.value = m);
    }, { immediate: !0 }), ne([a.comboboxState], ([m], [v]) => {
      if (m === 0 && v === 1) {
        let x = S(a.inputRef);
        if (!x)
          return;
        let _ = x.value, { selectionStart: B, selectionEnd: I, selectionDirection: R } = x;
        x.value = "", x.value = _, R !== null ? x.setSelectionRange(B, I, R) : x.setSelectionRange(B, I);
      }
    });
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
  function b(m) {
    switch (r.value = !0, m.key) {
      case F.Backspace:
      case F.Delete:
        if (a.mode.value !== 0 || !a.nullable.value)
          return;
        let v = m.currentTarget;
        requestAnimationFrame(() => {
          if (v.value === "") {
            a.change(null);
            let x = S(a.optionsRef);
            x && (x.scrollTop = 0), a.goToOption(ue.Nothing);
          }
        });
        break;
      case F.Enter:
        if (r.value = !1, a.comboboxState.value !== 0 || c.value)
          return;
        if (m.preventDefault(), m.stopPropagation(), a.activeOptionIndex.value === null) {
          a.closeCombobox();
          return;
        }
        a.selectActiveOption(), a.mode.value === 0 && a.closeCombobox();
        break;
      case F.ArrowDown:
        return r.value = !1, m.preventDefault(), m.stopPropagation(), X(a.comboboxState.value, { [0]: () => a.goToOption(ue.Next), [1]: () => a.openCombobox() });
      case F.ArrowUp:
        return r.value = !1, m.preventDefault(), m.stopPropagation(), X(a.comboboxState.value, { [0]: () => a.goToOption(ue.Previous), [1]: () => {
          a.openCombobox(), Ve(() => {
            a.value.value || a.goToOption(ue.Last);
          });
        } });
      case F.Home:
        if (m.shiftKey)
          break;
        return r.value = !1, m.preventDefault(), m.stopPropagation(), a.goToOption(ue.First);
      case F.PageUp:
        return r.value = !1, m.preventDefault(), m.stopPropagation(), a.goToOption(ue.First);
      case F.End:
        if (m.shiftKey)
          break;
        return r.value = !1, m.preventDefault(), m.stopPropagation(), a.goToOption(ue.Last);
      case F.PageDown:
        return r.value = !1, m.preventDefault(), m.stopPropagation(), a.goToOption(ue.Last);
      case F.Escape:
        if (r.value = !1, a.comboboxState.value !== 0)
          return;
        m.preventDefault(), a.optionsRef.value && !a.optionsPropsRef.value.static && m.stopPropagation(), a.closeCombobox();
        break;
      case F.Tab:
        if (r.value = !1, a.comboboxState.value !== 0)
          return;
        a.mode.value === 0 && a.selectActiveOption(), a.closeCombobox();
        break;
    }
  }
  function k(m) {
    a.openCombobox(), t("change", m);
  }
  function w() {
    r.value = !1;
  }
  let V = C(() => {
    var m, v, x, _;
    return (_ = (x = (v = e.defaultValue) != null ? v : a.defaultValue.value !== void 0 ? (m = e.displayValue) == null ? void 0 : m.call(e, a.defaultValue.value) : null) != null ? x : a.defaultValue.value) != null ? _ : "";
  });
  return () => {
    var m, v, x, _, B, I;
    let R = { open: a.comboboxState.value === 0 }, { id: P, displayValue: A, onChange: D, ...L } = e, z = { "aria-controls": (m = a.optionsRef.value) == null ? void 0 : m.id, "aria-expanded": a.disabled.value ? void 0 : a.comboboxState.value === 0, "aria-activedescendant": a.activeOptionIndex.value === null || (v = a.options.value[a.activeOptionIndex.value]) == null ? void 0 : v.id, "aria-labelledby": (B = (x = S(a.labelRef)) == null ? void 0 : x.id) != null ? B : (_ = S(a.buttonRef)) == null ? void 0 : _.id, "aria-autocomplete": "list", id: P, onCompositionstart: d, onCompositionend: f, onKeydown: b, onInput: k, onBlur: w, role: "combobox", type: (I = o.type) != null ? I : "text", tabIndex: 0, ref: a.inputRef, defaultValue: V.value };
    return U({ ourProps: z, theirProps: L, slot: R, attrs: o, slots: n, features: de.RenderStrategy | de.Static, name: "ComboboxInput" });
  };
} }), es = q({ name: "ComboboxOptions", props: { as: { type: [Object, String], default: "ul" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, hold: { type: [Boolean], default: !1 } }, setup(e, { attrs: t, slots: o, expose: n }) {
  let l = De("ComboboxOptions"), a = `headlessui-combobox-options-${J()}`;
  n({ el: l.optionsRef, $el: l.optionsRef }), oe(() => {
    l.optionsPropsRef.value.static = e.static;
  }), oe(() => {
    l.optionsPropsRef.value.hold = e.hold;
  });
  let r = Le(), i = C(() => r !== null ? (r.value & Q.Open) === Q.Open : l.comboboxState.value === 0);
  return to({ container: C(() => S(l.optionsRef)), enabled: C(() => l.comboboxState.value === 0), accept(c) {
    return c.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : c.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(c) {
    c.setAttribute("role", "none");
  } }), () => {
    var c, d, f;
    let b = { open: l.comboboxState.value === 0 }, k = { "aria-labelledby": (f = (c = S(l.labelRef)) == null ? void 0 : c.id) != null ? f : (d = S(l.buttonRef)) == null ? void 0 : d.id, id: a, ref: l.optionsRef, role: "listbox", "aria-multiselectable": l.mode.value === 1 ? !0 : void 0 }, w = Ie(e, ["hold"]);
    return U({ ourProps: k, theirProps: w, slot: b, attrs: t, slots: o, features: de.RenderStrategy | de.Static, visible: i.value, name: "ComboboxOptions" });
  };
} }), ts = q({ name: "ComboboxOption", props: { as: { type: [Object, String], default: "li" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: o, expose: n }) {
  let l = De("ComboboxOption"), a = `headlessui-combobox-option-${J()}`, r = $(null);
  n({ el: r, $el: r });
  let i = C(() => l.activeOptionIndex.value !== null ? l.options.value[l.activeOptionIndex.value].id === a : !1), c = C(() => X(l.mode.value, { [0]: () => l.compare(G(l.value.value), G(e.value)), [1]: () => G(l.value.value).some((v) => l.compare(G(v), G(e.value))) })), d = C(() => ({ disabled: e.disabled, value: e.value, domRef: r }));
  W(() => l.registerOption(a, d)), ae(() => l.unregisterOption(a)), oe(() => {
    l.comboboxState.value === 0 && i.value && l.activationTrigger.value !== 0 && Ve(() => {
      var v, x;
      return (x = (v = S(r)) == null ? void 0 : v.scrollIntoView) == null ? void 0 : x.call(v, { block: "nearest" });
    });
  });
  function f(v) {
    if (e.disabled)
      return v.preventDefault();
    l.selectOption(a), l.mode.value === 0 && l.closeCombobox(), Ua() || requestAnimationFrame(() => {
      var x;
      return (x = S(l.inputRef)) == null ? void 0 : x.focus();
    });
  }
  function b() {
    if (e.disabled)
      return l.goToOption(ue.Nothing);
    l.goToOption(ue.Specific, a);
  }
  let k = Ha();
  function w(v) {
    k.update(v);
  }
  function V(v) {
    k.wasMoved(v) && (e.disabled || i.value || l.goToOption(ue.Specific, a, 0));
  }
  function m(v) {
    k.wasMoved(v) && (e.disabled || i.value && (l.optionsPropsRef.value.hold || l.goToOption(ue.Nothing)));
  }
  return () => {
    let { disabled: v } = e, x = { active: i.value, selected: c.value, disabled: v }, _ = { id: a, ref: r, role: "option", tabIndex: v === !0 ? void 0 : -1, "aria-disabled": v === !0 ? !0 : void 0, "aria-selected": c.value, disabled: void 0, onClick: f, onFocus: b, onPointerenter: w, onMouseenter: w, onPointermove: V, onMousemove: V, onPointerleave: m, onMouseleave: m };
    return U({ ourProps: _, theirProps: e, slot: x, attrs: o, slots: t, name: "ComboboxOption" });
  };
} });
function os(e, t, o) {
  Me.isServer || oe((n) => {
    window.addEventListener(e, t, o), n(() => window.removeEventListener(e, t, o));
  });
}
var ve = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(ve || {});
function Vt() {
  let e = $(0);
  return os("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function wt(e, t, o, n) {
  Me.isServer || oe((l) => {
    e = e ?? window, e.addEventListener(t, o, n), l(() => e.removeEventListener(t, o, n));
  });
}
function io(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function po(e) {
  if (!e)
    return /* @__PURE__ */ new Set();
  if (typeof e == "function")
    return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let o of e.value) {
    let n = S(o);
    n instanceof HTMLElement && t.add(n);
  }
  return t;
}
var uo = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(uo || {});
let Ae = Object.assign(q({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: $(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: n }) {
  let l = $(null);
  n({ el: l, $el: l });
  let a = C(() => me(l)), r = $(!1);
  W(() => r.value = !0), ae(() => r.value = !1), ns({ ownerDocument: a }, C(() => r.value && Boolean(e.features & 16)));
  let i = as({ ownerDocument: a, container: l, initialFocus: C(() => e.initialFocus) }, C(() => r.value && Boolean(e.features & 2)));
  ss({ ownerDocument: a, container: l, containers: e.containers, previousActiveElement: i }, C(() => r.value && Boolean(e.features & 8)));
  let c = Vt();
  function d(w) {
    let V = S(l);
    V && ((m) => m())(() => {
      X(c.value, { [ve.Forwards]: () => {
        fe(V, le.First, { skipElements: [w.relatedTarget] });
      }, [ve.Backwards]: () => {
        fe(V, le.Last, { skipElements: [w.relatedTarget] });
      } });
    });
  }
  let f = $(!1);
  function b(w) {
    w.key === "Tab" && (f.value = !0, requestAnimationFrame(() => {
      f.value = !1;
    }));
  }
  function k(w) {
    if (!r.value)
      return;
    let V = po(e.containers);
    S(l) instanceof HTMLElement && V.add(S(l));
    let m = w.relatedTarget;
    m instanceof HTMLElement && m.dataset.headlessuiFocusGuard !== "true" && (co(V, m) || (f.value ? fe(S(l), X(c.value, { [ve.Forwards]: () => le.Next, [ve.Backwards]: () => le.Previous }) | le.WrapAround, { relativeTo: w.target }) : w.target instanceof HTMLElement && Pe(w.target)));
  }
  return () => {
    let w = {}, V = { ref: l, onKeydown: b, onFocusout: k }, { features: m, initialFocus: v, containers: x, ..._ } = e;
    return Y(T, [Boolean(m & 4) && Y(xe, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: d, features: ye.Focusable }), U({ ourProps: V, theirProps: { ...t, ..._ }, slot: w, attrs: t, slots: o, name: "FocusTrap" }), Boolean(m & 4) && Y(xe, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: d, features: ye.Focusable })]);
  };
} }), { features: uo }), Ee = [];
if (typeof window < "u" && typeof document < "u") {
  let e = function(t) {
    t.target instanceof HTMLElement && t.target !== document.body && Ee[0] !== t.target && (Ee.unshift(t.target), Ee = Ee.filter((o) => o != null && o.isConnected), Ee.splice(10));
  };
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
}
function ls(e) {
  let t = $(Ee.slice());
  return ne([e], ([o], [n]) => {
    n === !0 && o === !1 ? io(() => {
      t.value.splice(0);
    }) : n === !1 && o === !0 && (t.value = Ee.slice());
  }, { flush: "post" }), () => {
    var o;
    return (o = t.value.find((n) => n != null && n.isConnected)) != null ? o : null;
  };
}
function ns({ ownerDocument: e }, t) {
  let o = ls(t);
  W(() => {
    oe(() => {
      var n, l;
      t.value || ((n = e.value) == null ? void 0 : n.activeElement) === ((l = e.value) == null ? void 0 : l.body) && Pe(o());
    }, { flush: "post" });
  }), ae(() => {
    Pe(o());
  });
}
function as({ ownerDocument: e, container: t, initialFocus: o }, n) {
  let l = $(null), a = $(!1);
  return W(() => a.value = !0), ae(() => a.value = !1), W(() => {
    ne([t, o, n], (r, i) => {
      if (r.every((d, f) => (i == null ? void 0 : i[f]) === d) || !n.value)
        return;
      let c = S(t);
      c && io(() => {
        var d, f;
        if (!a.value)
          return;
        let b = S(o), k = (d = e.value) == null ? void 0 : d.activeElement;
        if (b) {
          if (b === k) {
            l.value = k;
            return;
          }
        } else if (c.contains(k)) {
          l.value = k;
          return;
        }
        b ? Pe(b) : fe(c, le.First | le.NoScroll) === Ne.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), l.value = (f = e.value) == null ? void 0 : f.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), l;
}
function ss({ ownerDocument: e, container: t, containers: o, previousActiveElement: n }, l) {
  var a;
  wt((a = e.value) == null ? void 0 : a.defaultView, "focus", (r) => {
    if (!l.value)
      return;
    let i = po(o);
    S(t) instanceof HTMLElement && i.add(S(t));
    let c = n.value;
    if (!c)
      return;
    let d = r.target;
    d && d instanceof HTMLElement ? co(i, d) ? (n.value = d, Pe(d)) : (r.preventDefault(), r.stopPropagation(), Pe(c)) : Pe(n.value);
  }, !0);
}
function co(e, t) {
  for (let o of e)
    if (o.contains(t))
      return !0;
  return !1;
}
let lt = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new Map();
function Mt(e, t = $(!0)) {
  oe((o) => {
    var n;
    if (!t.value)
      return;
    let l = S(e);
    if (!l)
      return;
    o(function() {
      var r;
      if (!l)
        return;
      let i = (r = Te.get(l)) != null ? r : 1;
      if (i === 1 ? Te.delete(l) : Te.set(l, i - 1), i !== 1)
        return;
      let c = lt.get(l);
      c && (c["aria-hidden"] === null ? l.removeAttribute("aria-hidden") : l.setAttribute("aria-hidden", c["aria-hidden"]), l.inert = c.inert, lt.delete(l));
    });
    let a = (n = Te.get(l)) != null ? n : 0;
    Te.set(l, a + 1), a === 0 && (lt.set(l, { "aria-hidden": l.getAttribute("aria-hidden"), inert: l.inert }), l.setAttribute("aria-hidden", "true"), l.inert = !0);
  });
}
let fo = Symbol("ForcePortalRootContext");
function rs() {
  return se(fo, !1);
}
let it = q({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: o }) {
  return ie(fo, e.force), () => {
    let { force: n, ...l } = e;
    return U({ theirProps: l, ourProps: {}, slot: {}, slots: t, attrs: o, name: "ForcePortalRoot" });
  };
} });
function is(e) {
  let t = me(e);
  if (!t) {
    if (e === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let o = t.getElementById("headlessui-portal-root");
  if (o)
    return o;
  let n = t.createElement("div");
  return n.setAttribute("id", "headlessui-portal-root"), t.body.appendChild(n);
}
let vo = q({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: o }) {
  let n = $(null), l = C(() => me(n)), a = rs(), r = se(mo, null), i = $(a === !0 || r == null ? is(n.value) : r.resolveTarget());
  return oe(() => {
    a || r != null && (i.value = r.resolveTarget());
  }), ae(() => {
    var c, d;
    let f = (c = l.value) == null ? void 0 : c.getElementById("headlessui-portal-root");
    f && i.value === f && i.value.children.length <= 0 && ((d = i.value.parentElement) == null || d.removeChild(i.value));
  }), () => {
    if (i.value === null)
      return null;
    let c = { ref: n, "data-headlessui-portal": "" };
    return Y(ft, { to: i.value }, U({ ourProps: c, theirProps: e, slot: {}, attrs: o, slots: t, name: "Portal" }));
  };
} }), mo = Symbol("PortalGroupContext"), ps = q({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: o }) {
  let n = qo({ resolveTarget() {
    return e.target;
  } });
  return ie(mo, n), () => {
    let { target: l, ...a } = e;
    return U({ theirProps: a, ourProps: {}, slot: {}, attrs: t, slots: o, name: "PortalGroup" });
  };
} }), ho = Symbol("StackContext");
var pt = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(pt || {});
function us() {
  return se(ho, () => {
  });
}
function cs({ type: e, enabled: t, element: o, onUpdate: n }) {
  let l = us();
  function a(...r) {
    n == null || n(...r), l(...r);
  }
  W(() => {
    ne(t, (r, i) => {
      r ? a(0, e, o) : i === !0 && a(1, e, o);
    }, { immediate: !0, flush: "sync" });
  }), ae(() => {
    t.value && a(1, e, o);
  }), ie(ho, a);
}
let bo = Symbol("DescriptionContext");
function ds() {
  let e = se(bo, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function Ke({ slot: e = $({}), name: t = "Description", props: o = {} } = {}) {
  let n = $([]);
  function l(a) {
    return n.value.push(a), () => {
      let r = n.value.indexOf(a);
      r !== -1 && n.value.splice(r, 1);
    };
  }
  return ie(bo, { register: l, slot: e, name: t, props: o }), C(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
let fs = q({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${J()}` } }, setup(e, { attrs: t, slots: o }) {
  let n = ds();
  return W(() => ae(n.register(e.id))), () => {
    let { name: l = "Description", slot: a = $({}), props: r = {} } = n, { id: i, ...c } = e, d = { ...Object.entries(r).reduce((f, [b, k]) => Object.assign(f, { [b]: g(k) }), {}), id: i };
    return U({ ourProps: d, theirProps: c, slot: a.value, attrs: t, slots: o, name: l });
  };
} });
function vs(e) {
  let t = Wt(e.getSnapshot());
  return ae(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function Ze() {
  let e = [], t = { addEventListener(o, n, l, a) {
    return o.addEventListener(n, l, a), t.add(() => o.removeEventListener(n, l, a));
  }, requestAnimationFrame(...o) {
    let n = requestAnimationFrame(...o);
    t.add(() => cancelAnimationFrame(n));
  }, nextFrame(...o) {
    t.requestAnimationFrame(() => {
      t.requestAnimationFrame(...o);
    });
  }, setTimeout(...o) {
    let n = setTimeout(...o);
    t.add(() => clearTimeout(n));
  }, style(o, n, l) {
    let a = o.style.getPropertyValue(n);
    return Object.assign(o.style, { [n]: l }), this.add(() => {
      Object.assign(o.style, { [n]: a });
    });
  }, group(o) {
    let n = Ze();
    return o(n), this.add(() => n.dispose());
  }, add(o) {
    return e.push(o), () => {
      let n = e.indexOf(o);
      if (n >= 0)
        for (let l of e.splice(n, 1))
          l();
    };
  }, dispose() {
    for (let o of e.splice(0))
      o();
  } };
  return t;
}
function ms(e, t) {
  let o = e(), n = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return o;
  }, subscribe(l) {
    return n.add(l), () => n.delete(l);
  }, dispatch(l, ...a) {
    let r = t[l].call(o, ...a);
    r && (o = r, n.forEach((i) => i()));
  } };
}
function hs() {
  let e;
  return { before({ doc: t }) {
    var o;
    let n = t.documentElement;
    e = ((o = t.defaultView) != null ? o : window).innerWidth - n.clientWidth;
  }, after({ doc: t, d: o }) {
    let n = t.documentElement, l = n.clientWidth - n.offsetWidth, a = e - l;
    o.style(n, "paddingRight", `${a}px`);
  } };
}
function bs() {
  if (!so())
    return {};
  let e;
  return { before() {
    e = window.pageYOffset;
  }, after({ doc: t, d: o, meta: n }) {
    function l(r) {
      return n.containers.flatMap((i) => i()).some((i) => i.contains(r));
    }
    o.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
    let a = null;
    o.addEventListener(t, "click", (r) => {
      if (r.target instanceof HTMLElement)
        try {
          let i = r.target.closest("a");
          if (!i)
            return;
          let { hash: c } = new URL(i.href), d = t.querySelector(c);
          d && !l(d) && (a = d);
        } catch {
        }
    }, !0), o.addEventListener(t, "touchmove", (r) => {
      r.target instanceof HTMLElement && !l(r.target) && r.preventDefault();
    }, { passive: !1 }), o.add(() => {
      window.scrollTo(0, window.pageYOffset + e), a && a.isConnected && (a.scrollIntoView({ block: "nearest" }), a = null);
    });
  } };
}
function gs() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function ys(e) {
  let t = {};
  for (let o of e)
    Object.assign(t, o(t));
  return t;
}
let Se = ms(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var o;
  let n = (o = this.get(e)) != null ? o : { doc: e, count: 0, d: Ze(), meta: /* @__PURE__ */ new Set() };
  return n.count++, n.meta.add(t), this.set(e, n), this;
}, POP(e, t) {
  let o = this.get(e);
  return o && (o.count--, o.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: o }) {
  let n = { doc: e, d: t, meta: ys(o) }, l = [bs(), hs(), gs()];
  l.forEach(({ before: a }) => a == null ? void 0 : a(n)), l.forEach(({ after: a }) => a == null ? void 0 : a(n));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
Se.subscribe(() => {
  let e = Se.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [o] of e)
    t.set(o, o.documentElement.style.overflow);
  for (let o of e.values()) {
    let n = t.get(o.doc) === "hidden", l = o.count !== 0;
    (l && !n || !l && n) && Se.dispatch(o.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", o), o.count === 0 && Se.dispatch("TEARDOWN", o);
  }
});
function xs(e, t, o) {
  let n = vs(Se), l = C(() => {
    let a = e.value ? n.value.get(e.value) : void 0;
    return a ? a.count > 0 : !1;
  });
  return ne([e, t], ([a, r], [i], c) => {
    if (!a || !r)
      return;
    Se.dispatch("PUSH", a, o);
    let d = !1;
    c(() => {
      d || (Se.dispatch("POP", i ?? a, o), d = !0);
    });
  }, { immediate: !0 }), l;
}
var Vs = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Vs || {});
let ut = Symbol("DialogContext");
function Re(e) {
  let t = se(ut, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, Re), o;
  }
  return t;
}
let He = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Xe = q({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: He }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${J()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: o, slots: n, expose: l }) {
  var a;
  let r = $(!1);
  W(() => {
    r.value = !0;
  });
  let i = $(0), c = Le(), d = C(() => e.open === He && c !== null ? (c.value & Q.Open) === Q.Open : e.open), f = $(null), b = $(null), k = C(() => me(f));
  if (l({ el: f, $el: f }), !(e.open !== He || c !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof d.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${d.value === He ? void 0 : e.open}`);
  let w = C(() => r.value && d.value ? 0 : 1), V = C(() => w.value === 0), m = C(() => i.value > 1), v = se(ut, null) !== null, x = C(() => m.value ? "parent" : "leaf"), _ = C(() => c !== null ? (c.value & Q.Closing) === Q.Closing : !1), B = C(() => v || _.value ? !1 : V.value), I = C(() => {
    var K, Z, re;
    return (re = Array.from((Z = (K = k.value) == null ? void 0 : K.querySelectorAll("body > *")) != null ? Z : []).find((pe) => pe.id === "headlessui-portal-root" ? !1 : pe.contains(S(b)) && pe instanceof HTMLElement)) != null ? re : null;
  });
  Mt(I, B);
  let R = C(() => m.value ? !0 : V.value), P = C(() => {
    var K, Z, re;
    return (re = Array.from((Z = (K = k.value) == null ? void 0 : K.querySelectorAll("[data-headlessui-portal]")) != null ? Z : []).find((pe) => pe.contains(S(b)) && pe instanceof HTMLElement)) != null ? re : null;
  });
  Mt(P, R), cs({ type: "Dialog", enabled: C(() => w.value === 0), element: f, onUpdate: (K, Z) => {
    if (Z === "Dialog")
      return X(K, { [pt.Add]: () => i.value += 1, [pt.Remove]: () => i.value -= 1 });
  } });
  let A = Ke({ name: "DialogDescription", slot: C(() => ({ open: d.value })) }), D = $(null), L = { titleId: D, panelRef: $(null), dialogState: w, setTitleId(K) {
    D.value !== K && (D.value = K);
  }, close() {
    t("close", !1);
  } };
  ie(ut, L);
  function z() {
    var K, Z, re;
    return [...Array.from((Z = (K = k.value) == null ? void 0 : K.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? Z : []).filter((pe) => !(pe === document.body || pe === document.head || !(pe instanceof HTMLElement) || pe.contains(S(b)) || L.panelRef.value && pe.contains(L.panelRef.value))), (re = L.panelRef.value) != null ? re : f.value];
  }
  let ee = C(() => !(!V.value || m.value));
  gt(() => z(), (K, Z) => {
    L.close(), Ve(() => Z == null ? void 0 : Z.focus());
  }, ee);
  let $e = C(() => !(m.value || w.value !== 0));
  wt((a = k.value) == null ? void 0 : a.defaultView, "keydown", (K) => {
    $e.value && (K.defaultPrevented || K.key === F.Escape && (K.preventDefault(), K.stopPropagation(), L.close()));
  });
  let ge = C(() => !(_.value || w.value !== 0 || v));
  return xs(k, ge, (K) => {
    var Z;
    return { containers: [...(Z = K.containers) != null ? Z : [], z] };
  }), oe((K) => {
    if (w.value !== 0)
      return;
    let Z = S(f);
    if (!Z)
      return;
    let re = new ResizeObserver((pe) => {
      for (let ze of pe) {
        let _e = ze.target.getBoundingClientRect();
        _e.x === 0 && _e.y === 0 && _e.width === 0 && _e.height === 0 && L.close();
      }
    });
    re.observe(Z), K(() => re.disconnect());
  }), () => {
    let { id: K, open: Z, initialFocus: re, ...pe } = e, ze = { ...o, ref: f, id: K, role: "dialog", "aria-modal": w.value === 0 ? !0 : void 0, "aria-labelledby": D.value, "aria-describedby": A.value }, _e = { open: w.value === 0 };
    return Y(it, { force: !0 }, () => [Y(vo, () => Y(ps, { target: f.value }, () => Y(it, { force: !1 }, () => Y(Ae, { initialFocus: re, containers: z, features: V.value ? X(x.value, { parent: Ae.features.RestoreFocus, leaf: Ae.features.All & ~Ae.features.FocusLock }) : Ae.features.None }, () => U({ ourProps: ze, theirProps: pe, slot: _e, attrs: o, slots: n, visible: w.value === 0, features: de.RenderStrategy | de.Static, name: "Dialog" }))))), Y(xe, { features: ye.Hidden, ref: b })]);
  };
} });
q({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${J()}` } }, setup(e, { attrs: t, slots: o }) {
  let n = Re("DialogOverlay");
  function l(a) {
    a.target === a.currentTarget && (a.preventDefault(), a.stopPropagation(), n.close());
  }
  return () => {
    let { id: a, ...r } = e;
    return U({ ourProps: { id: a, "aria-hidden": !0, onClick: l }, theirProps: r, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogOverlay" });
  };
} });
q({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${J()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: n }) {
  let l = Re("DialogBackdrop"), a = $(null);
  return n({ el: a, $el: a }), W(() => {
    if (l.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: r, ...i } = e, c = { id: r, ref: a, "aria-hidden": !0 };
    return Y(it, { force: !0 }, () => Y(vo, () => U({ ourProps: c, theirProps: { ...t, ...i }, slot: { open: l.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogBackdrop" })));
  };
} });
let Qe = q({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${J()}` } }, setup(e, { attrs: t, slots: o, expose: n }) {
  let l = Re("DialogPanel");
  n({ el: l.panelRef, $el: l.panelRef });
  function a(r) {
    r.stopPropagation();
  }
  return () => {
    let { id: r, ...i } = e, c = { id: r, ref: l.panelRef, onClick: a };
    return U({ ourProps: c, theirProps: i, slot: { open: l.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogPanel" });
  };
} }), go = q({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${J()}` } }, setup(e, { attrs: t, slots: o }) {
  let n = Re("DialogTitle");
  return W(() => {
    n.setTitleId(e.id), ae(() => n.setTitleId(null));
  }), () => {
    let { id: l, ...a } = e;
    return U({ ourProps: { id: l }, theirProps: a, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogTitle" });
  };
} });
var ws = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ws || {});
let yo = Symbol("DisclosureContext");
function kt(e) {
  let t = se(yo, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, kt), o;
  }
  return t;
}
let xo = Symbol("DisclosurePanelContext");
function ks() {
  return se(xo, null);
}
let Rt = q({ name: "Disclosure", props: { as: { type: [Object, String], default: "template" }, defaultOpen: { type: [Boolean], default: !1 } }, setup(e, { slots: t, attrs: o }) {
  let n = $(e.defaultOpen ? 0 : 1), l = $(null), a = $(null), r = { buttonId: $(null), panelId: $(null), disclosureState: n, panel: l, button: a, toggleDisclosure() {
    n.value = X(n.value, { [0]: 1, [1]: 0 });
  }, closeDisclosure() {
    n.value !== 1 && (n.value = 1);
  }, close(i) {
    r.closeDisclosure();
    let c = (() => i ? i instanceof HTMLElement ? i : i.value instanceof HTMLElement ? S(i) : S(r.button) : S(r.button))();
    c == null || c.focus();
  } };
  return ie(yo, r), Ue(C(() => X(n.value, { [0]: Q.Open, [1]: Q.Closed }))), () => {
    let { defaultOpen: i, ...c } = e, d = { open: n.value === 0, close: r.close };
    return U({ theirProps: c, ourProps: {}, slot: d, slots: t, attrs: o, name: "Disclosure" });
  };
} }), Ft = q({ name: "DisclosureButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-disclosure-button-${J()}` } }, setup(e, { attrs: t, slots: o, expose: n }) {
  let l = kt("DisclosureButton");
  W(() => {
    l.buttonId.value = e.id;
  }), ae(() => {
    l.buttonId.value = null;
  });
  let a = ks(), r = C(() => a === null ? !1 : a.value === l.panelId.value), i = $(null);
  n({ el: i, $el: i }), r.value || oe(() => {
    l.button.value = i.value;
  });
  let c = Ge(C(() => ({ as: e.as, type: t.type })), i);
  function d() {
    var k;
    e.disabled || (r.value ? (l.toggleDisclosure(), (k = S(l.button)) == null || k.focus()) : l.toggleDisclosure());
  }
  function f(k) {
    var w;
    if (!e.disabled)
      if (r.value)
        switch (k.key) {
          case F.Space:
          case F.Enter:
            k.preventDefault(), k.stopPropagation(), l.toggleDisclosure(), (w = S(l.button)) == null || w.focus();
            break;
        }
      else
        switch (k.key) {
          case F.Space:
          case F.Enter:
            k.preventDefault(), k.stopPropagation(), l.toggleDisclosure();
            break;
        }
  }
  function b(k) {
    switch (k.key) {
      case F.Space:
        k.preventDefault();
        break;
    }
  }
  return () => {
    let k = { open: l.disclosureState.value === 0 }, { id: w, ...V } = e, m = r.value ? { ref: i, type: c.value, onClick: d, onKeydown: f } : { id: w, ref: i, type: c.value, "aria-expanded": e.disabled ? void 0 : l.disclosureState.value === 0, "aria-controls": S(l.panel) ? l.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onClick: d, onKeydown: f, onKeyup: b };
    return U({ ourProps: m, theirProps: V, slot: k, attrs: t, slots: o, name: "DisclosureButton" });
  };
} }), zt = q({ name: "DisclosurePanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-disclosure-panel-${J()}` } }, setup(e, { attrs: t, slots: o, expose: n }) {
  let l = kt("DisclosurePanel");
  W(() => {
    l.panelId.value = e.id;
  }), ae(() => {
    l.panelId.value = null;
  }), n({ el: l.panel, $el: l.panel }), ie(xo, l.panelId);
  let a = Le(), r = C(() => a !== null ? (a.value & Q.Open) === Q.Open : l.disclosureState.value === 0);
  return () => {
    let i = { open: l.disclosureState.value === 0, close: l.close }, { id: c, ...d } = e, f = { id: c, ref: l.panel };
    return U({ ourProps: f, theirProps: d, slot: i, attrs: t, slots: o, features: de.RenderStrategy | de.Static, visible: r.value, name: "DisclosurePanel" });
  };
} });
var $s = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))($s || {});
let Vo = Symbol("PopoverContext");
function Ye(e) {
  let t = se(Vo, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <${Je.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, Ye), o;
  }
  return t;
}
let wo = Symbol("PopoverGroupContext");
function ko() {
  return se(wo, null);
}
let $o = Symbol("PopoverPanelContext");
function _s() {
  return se($o, null);
}
let Je = q({ name: "Popover", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: o, expose: n }) {
  var l;
  let a = $(null);
  n({ el: a, $el: a });
  let r = $(1), i = $(null), c = $(null), d = $(null), f = $(null), b = C(() => me(a)), k = C(() => {
    var _, B;
    if (!S(i) || !S(f))
      return !1;
    for (let z of document.querySelectorAll("body > *"))
      if (Number(z == null ? void 0 : z.contains(S(i))) ^ Number(z == null ? void 0 : z.contains(S(f))))
        return !0;
    let I = We(), R = I.indexOf(S(i)), P = (R + I.length - 1) % I.length, A = (R + 1) % I.length, D = I[P], L = I[A];
    return !((_ = S(f)) != null && _.contains(D)) && !((B = S(f)) != null && B.contains(L));
  }), w = { popoverState: r, buttonId: $(null), panelId: $(null), panel: f, button: i, isPortalled: k, beforePanelSentinel: c, afterPanelSentinel: d, togglePopover() {
    r.value = X(r.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    r.value !== 1 && (r.value = 1);
  }, close(_) {
    w.closePopover();
    let B = (() => _ ? _ instanceof HTMLElement ? _ : _.value instanceof HTMLElement ? S(_) : S(w.button) : S(w.button))();
    B == null || B.focus();
  } };
  ie(Vo, w), Ue(C(() => X(r.value, { [0]: Q.Open, [1]: Q.Closed })));
  let V = { buttonId: w.buttonId, panelId: w.panelId, close() {
    w.closePopover();
  } }, m = ko(), v = m == null ? void 0 : m.registerPopover;
  function x() {
    var _, B, I, R;
    return (R = m == null ? void 0 : m.isFocusWithinPopoverGroup()) != null ? R : ((_ = b.value) == null ? void 0 : _.activeElement) && (((B = S(i)) == null ? void 0 : B.contains(b.value.activeElement)) || ((I = S(f)) == null ? void 0 : I.contains(b.value.activeElement)));
  }
  return oe(() => v == null ? void 0 : v(V)), wt((l = b.value) == null ? void 0 : l.defaultView, "focus", (_) => {
    var B, I;
    r.value === 0 && (x() || i && f && _.target !== window && ((B = S(w.beforePanelSentinel)) != null && B.contains(_.target) || (I = S(w.afterPanelSentinel)) != null && I.contains(_.target) || w.closePopover()));
  }, !0), gt([i, f], (_, B) => {
    var I;
    w.closePopover(), oo(B, ht.Loose) || (_.preventDefault(), (I = S(i)) == null || I.focus());
  }, C(() => r.value === 0)), () => {
    let _ = { open: r.value === 0, close: w.close };
    return U({ theirProps: e, ourProps: { ref: a }, slot: _, slots: t, attrs: o, name: "Popover" });
  };
} }), $t = q({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-popover-button-${J()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: n }) {
  let l = Ye("PopoverButton"), a = C(() => me(l.button));
  n({ el: l.button, $el: l.button }), W(() => {
    l.buttonId.value = e.id;
  }), ae(() => {
    l.buttonId.value = null;
  });
  let r = ko(), i = r == null ? void 0 : r.closeOthers, c = _s(), d = C(() => c === null ? !1 : c.value === l.panelId.value), f = $(null), b = `headlessui-focus-sentinel-${J()}`;
  d.value || oe(() => {
    l.button.value = f.value;
  });
  let k = Ge(C(() => ({ as: e.as, type: t.type })), f);
  function w(x) {
    var _, B, I, R, P;
    if (d.value) {
      if (l.popoverState.value === 1)
        return;
      switch (x.key) {
        case F.Space:
        case F.Enter:
          x.preventDefault(), (B = (_ = x.target).click) == null || B.call(_), l.closePopover(), (I = S(l.button)) == null || I.focus();
          break;
      }
    } else
      switch (x.key) {
        case F.Space:
        case F.Enter:
          x.preventDefault(), x.stopPropagation(), l.popoverState.value === 1 && (i == null || i(l.buttonId.value)), l.togglePopover();
          break;
        case F.Escape:
          if (l.popoverState.value !== 0)
            return i == null ? void 0 : i(l.buttonId.value);
          if (!S(l.button) || (R = a.value) != null && R.activeElement && !((P = S(l.button)) != null && P.contains(a.value.activeElement)))
            return;
          x.preventDefault(), x.stopPropagation(), l.closePopover();
          break;
      }
  }
  function V(x) {
    d.value || x.key === F.Space && x.preventDefault();
  }
  function m(x) {
    var _, B;
    e.disabled || (d.value ? (l.closePopover(), (_ = S(l.button)) == null || _.focus()) : (x.preventDefault(), x.stopPropagation(), l.popoverState.value === 1 && (i == null || i(l.buttonId.value)), l.togglePopover(), (B = S(l.button)) == null || B.focus()));
  }
  function v(x) {
    x.preventDefault(), x.stopPropagation();
  }
  return () => {
    let x = l.popoverState.value === 0, _ = { open: x }, { id: B, ...I } = e, R = d.value ? { ref: f, type: k.value, onKeydown: w, onClick: m } : { ref: f, id: B, type: k.value, "aria-expanded": e.disabled ? void 0 : l.popoverState.value === 0, "aria-controls": S(l.panel) ? l.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onKeydown: w, onKeyup: V, onClick: m, onMousedown: v }, P = Vt();
    function A() {
      let D = S(l.panel);
      if (!D)
        return;
      function L() {
        X(P.value, { [ve.Forwards]: () => fe(D, le.First), [ve.Backwards]: () => fe(D, le.Last) }) === Ne.Error && fe(We().filter((z) => z.dataset.headlessuiFocusGuard !== "true"), X(P.value, { [ve.Forwards]: le.Next, [ve.Backwards]: le.Previous }), { relativeTo: S(l.button) });
      }
      L();
    }
    return Y(T, [U({ ourProps: R, theirProps: { ...t, ...I }, slot: _, attrs: t, slots: o, name: "PopoverButton" }), x && !d.value && l.isPortalled.value && Y(xe, { id: b, features: ye.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: A })]);
  };
} });
q({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(e, { attrs: t, slots: o }) {
  let n = Ye("PopoverOverlay"), l = `headlessui-popover-overlay-${J()}`, a = Le(), r = C(() => a !== null ? (a.value & Q.Open) === Q.Open : n.popoverState.value === 0);
  function i() {
    n.closePopover();
  }
  return () => {
    let c = { open: n.popoverState.value === 0 };
    return U({ ourProps: { id: l, "aria-hidden": !0, onClick: i }, theirProps: e, slot: c, attrs: t, slots: o, features: de.RenderStrategy | de.Static, visible: r.value, name: "PopoverOverlay" });
  };
} });
let _t = q({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-popover-panel-${J()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: n }) {
  let { focus: l } = e, a = Ye("PopoverPanel"), r = C(() => me(a.panel)), i = `headlessui-focus-sentinel-before-${J()}`, c = `headlessui-focus-sentinel-after-${J()}`;
  n({ el: a.panel, $el: a.panel }), W(() => {
    a.panelId.value = e.id;
  }), ae(() => {
    a.panelId.value = null;
  }), ie($o, a.panelId), oe(() => {
    var v, x;
    if (!l || a.popoverState.value !== 0 || !a.panel)
      return;
    let _ = (v = r.value) == null ? void 0 : v.activeElement;
    (x = S(a.panel)) != null && x.contains(_) || fe(S(a.panel), le.First);
  });
  let d = Le(), f = C(() => d !== null ? (d.value & Q.Open) === Q.Open : a.popoverState.value === 0);
  function b(v) {
    var x, _;
    switch (v.key) {
      case F.Escape:
        if (a.popoverState.value !== 0 || !S(a.panel) || r.value && !((x = S(a.panel)) != null && x.contains(r.value.activeElement)))
          return;
        v.preventDefault(), v.stopPropagation(), a.closePopover(), (_ = S(a.button)) == null || _.focus();
        break;
    }
  }
  function k(v) {
    var x, _, B, I, R;
    let P = v.relatedTarget;
    P && S(a.panel) && ((x = S(a.panel)) != null && x.contains(P) || (a.closePopover(), ((B = (_ = S(a.beforePanelSentinel)) == null ? void 0 : _.contains) != null && B.call(_, P) || (R = (I = S(a.afterPanelSentinel)) == null ? void 0 : I.contains) != null && R.call(I, P)) && P.focus({ preventScroll: !0 })));
  }
  let w = Vt();
  function V() {
    let v = S(a.panel);
    if (!v)
      return;
    function x() {
      X(w.value, { [ve.Forwards]: () => {
        var _;
        fe(v, le.First) === Ne.Error && ((_ = S(a.afterPanelSentinel)) == null || _.focus());
      }, [ve.Backwards]: () => {
        var _;
        (_ = S(a.button)) == null || _.focus({ preventScroll: !0 });
      } });
    }
    x();
  }
  function m() {
    let v = S(a.panel);
    if (!v)
      return;
    function x() {
      X(w.value, { [ve.Forwards]: () => {
        let _ = S(a.button), B = S(a.panel);
        if (!_)
          return;
        let I = We(), R = I.indexOf(_), P = I.slice(0, R + 1), A = [...I.slice(R + 1), ...P];
        for (let D of A.slice())
          if (D.dataset.headlessuiFocusGuard === "true" || B != null && B.contains(D)) {
            let L = A.indexOf(D);
            L !== -1 && A.splice(L, 1);
          }
        fe(A, le.First, { sorted: !1 });
      }, [ve.Backwards]: () => {
        var _;
        fe(v, le.Previous) === Ne.Error && ((_ = S(a.button)) == null || _.focus());
      } });
    }
    x();
  }
  return () => {
    let v = { open: a.popoverState.value === 0, close: a.close }, { id: x, focus: _, ...B } = e, I = { ref: a.panel, id: x, onKeydown: b, onFocusout: l && a.popoverState.value === 0 ? k : void 0, tabIndex: -1 };
    return U({ ourProps: I, theirProps: { ...t, ...B }, attrs: t, slot: v, slots: { ...o, default: (...R) => {
      var P;
      return [Y(T, [f.value && a.isPortalled.value && Y(xe, { id: i, ref: a.beforePanelSentinel, features: ye.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: V }), (P = o.default) == null ? void 0 : P.call(o, ...R), f.value && a.isPortalled.value && Y(xe, { id: c, ref: a.afterPanelSentinel, features: ye.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: m })])];
    } }, features: de.RenderStrategy | de.Static, visible: f.value, name: "PopoverPanel" });
  };
} });
q({ name: "PopoverGroup", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: o, expose: n }) {
  let l = $(null), a = Wt([]), r = C(() => me(l));
  n({ el: l, $el: l });
  function i(b) {
    let k = a.value.indexOf(b);
    k !== -1 && a.value.splice(k, 1);
  }
  function c(b) {
    return a.value.push(b), () => {
      i(b);
    };
  }
  function d() {
    var b;
    let k = r.value;
    if (!k)
      return !1;
    let w = k.activeElement;
    return (b = S(l)) != null && b.contains(w) ? !0 : a.value.some((V) => {
      var m, v;
      return ((m = k.getElementById(V.buttonId.value)) == null ? void 0 : m.contains(w)) || ((v = k.getElementById(V.panelId.value)) == null ? void 0 : v.contains(w));
    });
  }
  function f(b) {
    for (let k of a.value)
      k.buttonId.value !== b && k.close();
  }
  return ie(wo, { registerPopover: c, unregisterPopover: i, isFocusWithinPopoverGroup: d, closeOthers: f }), () => U({ ourProps: { ref: l }, theirProps: e, slot: {}, attrs: t, slots: o, name: "PopoverGroup" });
} });
let _o = Symbol("LabelContext");
function Co() {
  let e = se(_o, null);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Co), t;
  }
  return e;
}
function Ct({ slot: e = {}, name: t = "Label", props: o = {} } = {}) {
  let n = $([]);
  function l(a) {
    return n.value.push(a), () => {
      let r = n.value.indexOf(a);
      r !== -1 && n.value.splice(r, 1);
    };
  }
  return ie(_o, { register: l, slot: e, name: t, props: o }), C(() => n.value.length > 0 ? n.value.join(" ") : void 0);
}
let Eo = q({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-label-${J()}` } }, setup(e, { slots: t, attrs: o }) {
  let n = Co();
  return W(() => ae(n.register(e.id))), () => {
    let { name: l = "Label", slot: a = {}, props: r = {} } = n, { id: i, passive: c, ...d } = e, f = { ...Object.entries(r).reduce((b, [k, w]) => Object.assign(b, { [k]: g(w) }), {}), id: i };
    return c && (delete f.onClick, delete f.htmlFor, delete d.onClick), U({ ourProps: f, theirProps: d, slot: a, attrs: o, slots: t, name: l });
  };
} });
function Cs(e, t) {
  return e === t;
}
let So = Symbol("RadioGroupContext");
function Bo(e) {
  let t = se(So, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, Bo), o;
  }
  return t;
}
let Es = q({ name: "RadioGroup", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "div" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => Cs }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-radiogroup-${J()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: o, slots: n, expose: l }) {
  let a = $(null), r = $([]), i = Ct({ name: "RadioGroupLabel" }), c = Ke({ name: "RadioGroupDescription" });
  l({ el: a, $el: a });
  let [d, f] = xt(C(() => e.modelValue), (V) => t("update:modelValue", V), C(() => e.defaultValue)), b = { options: r, value: d, disabled: C(() => e.disabled), firstOption: C(() => r.value.find((V) => !V.propsRef.disabled)), containsCheckedOption: C(() => r.value.some((V) => b.compare(G(V.propsRef.value), G(e.modelValue)))), compare(V, m) {
    if (typeof e.by == "string") {
      let v = e.by;
      return (V == null ? void 0 : V[v]) === (m == null ? void 0 : m[v]);
    }
    return e.by(V, m);
  }, change(V) {
    var m;
    if (e.disabled || b.compare(G(d.value), G(V)))
      return !1;
    let v = (m = r.value.find((x) => b.compare(G(x.propsRef.value), G(V)))) == null ? void 0 : m.propsRef;
    return v != null && v.disabled ? !1 : (f(V), !0);
  }, registerOption(V) {
    r.value.push(V), r.value = bt(r.value, (m) => m.element);
  }, unregisterOption(V) {
    let m = r.value.findIndex((v) => v.id === V);
    m !== -1 && r.value.splice(m, 1);
  } };
  ie(So, b), to({ container: C(() => S(a)), accept(V) {
    return V.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : V.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(V) {
    V.setAttribute("role", "none");
  } });
  function k(V) {
    if (!a.value || !a.value.contains(V.target))
      return;
    let m = r.value.filter((v) => v.propsRef.disabled === !1).map((v) => v.element);
    switch (V.key) {
      case F.Enter:
        ao(V.currentTarget);
        break;
      case F.ArrowLeft:
      case F.ArrowUp:
        if (V.preventDefault(), V.stopPropagation(), fe(m, le.Previous | le.WrapAround) === Ne.Success) {
          let v = r.value.find((x) => {
            var _;
            return x.element === ((_ = me(a)) == null ? void 0 : _.activeElement);
          });
          v && b.change(v.propsRef.value);
        }
        break;
      case F.ArrowRight:
      case F.ArrowDown:
        if (V.preventDefault(), V.stopPropagation(), fe(m, le.Next | le.WrapAround) === Ne.Success) {
          let v = r.value.find((x) => {
            var _;
            return x.element === ((_ = me(x.element)) == null ? void 0 : _.activeElement);
          });
          v && b.change(v.propsRef.value);
        }
        break;
      case F.Space:
        {
          V.preventDefault(), V.stopPropagation();
          let v = r.value.find((x) => {
            var _;
            return x.element === ((_ = me(x.element)) == null ? void 0 : _.activeElement);
          });
          v && b.change(v.propsRef.value);
        }
        break;
    }
  }
  let w = C(() => {
    var V;
    return (V = S(a)) == null ? void 0 : V.closest("form");
  });
  return W(() => {
    ne([w], () => {
      if (!w.value || e.defaultValue === void 0)
        return;
      function V() {
        b.change(e.defaultValue);
      }
      return w.value.addEventListener("reset", V), () => {
        var m;
        (m = w.value) == null || m.removeEventListener("reset", V);
      };
    }, { immediate: !0 });
  }), () => {
    let { disabled: V, name: m, id: v, ...x } = e, _ = { ref: a, id: v, role: "radiogroup", "aria-labelledby": i.value, "aria-describedby": c.value, onKeydown: k };
    return Y(T, [...m != null && d.value != null ? yt({ [m]: d.value }).map(([B, I]) => Y(xe, mt({ features: ye.Hidden, key: B, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: B, value: I }))) : [], U({ ourProps: _, theirProps: { ...o, ...Ie(x, ["modelValue", "defaultValue"]) }, slot: {}, attrs: o, slots: n, name: "RadioGroup" })]);
  };
} });
var Ss = ((e) => (e[e.Empty = 1] = "Empty", e[e.Active = 2] = "Active", e))(Ss || {});
let Bs = q({ name: "RadioGroupOption", props: { as: { type: [Object, String], default: "div" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-radiogroup-option-${J()}` } }, setup(e, { attrs: t, slots: o, expose: n }) {
  let l = Bo("RadioGroupOption"), a = Ct({ name: "RadioGroupLabel" }), r = Ke({ name: "RadioGroupDescription" }), i = $(null), c = C(() => ({ value: e.value, disabled: e.disabled })), d = $(1);
  n({ el: i, $el: i }), W(() => l.registerOption({ id: e.id, element: i, propsRef: c })), ae(() => l.unregisterOption(e.id));
  let f = C(() => {
    var x;
    return ((x = l.firstOption.value) == null ? void 0 : x.id) === e.id;
  }), b = C(() => l.disabled.value || e.disabled), k = C(() => l.compare(G(l.value.value), G(e.value))), w = C(() => b.value ? -1 : k.value || !l.containsCheckedOption.value && f.value ? 0 : -1);
  function V() {
    var x;
    l.change(e.value) && (d.value |= 2, (x = i.value) == null || x.focus());
  }
  function m() {
    d.value |= 2;
  }
  function v() {
    d.value &= -3;
  }
  return () => {
    let { id: x, value: _, disabled: B, ...I } = e, R = { checked: k.value, disabled: b.value, active: Boolean(d.value & 2) }, P = { id: x, ref: i, role: "radio", "aria-checked": k.value ? "true" : "false", "aria-labelledby": a.value, "aria-describedby": r.value, "aria-disabled": b.value ? !0 : void 0, tabIndex: w.value, onClick: b.value ? void 0 : V, onFocus: b.value ? void 0 : m, onBlur: b.value ? void 0 : v };
    return U({ ourProps: P, theirProps: I, slot: R, attrs: t, slots: o, name: "RadioGroupOption" });
  };
} }), Ht = Eo, Ps = fs, Po = Symbol("GroupContext"), Os = q({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: o }) {
  let n = $(null), l = Ct({ name: "SwitchLabel", props: { htmlFor: C(() => {
    var r;
    return (r = n.value) == null ? void 0 : r.id;
  }), onClick(r) {
    n.value && (r.currentTarget.tagName === "LABEL" && r.preventDefault(), n.value.click(), n.value.focus({ preventScroll: !0 }));
  } } }), a = Ke({ name: "SwitchDescription" });
  return ie(Po, { switchRef: n, labelledby: l, describedby: a }), () => U({ theirProps: e, ourProps: {}, slot: {}, slots: t, attrs: o, name: "SwitchGroup" });
} }), Ns = q({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: !0 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-switch-${J()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: o, slots: n, expose: l }) {
  let a = se(Po, null), [r, i] = xt(C(() => e.modelValue), (v) => t("update:modelValue", v), C(() => e.defaultChecked));
  function c() {
    i(!r.value);
  }
  let d = $(null), f = a === null ? d : a.switchRef, b = Ge(C(() => ({ as: e.as, type: o.type })), f);
  l({ el: f, $el: f });
  function k(v) {
    v.preventDefault(), c();
  }
  function w(v) {
    v.key === F.Space ? (v.preventDefault(), c()) : v.key === F.Enter && ao(v.currentTarget);
  }
  function V(v) {
    v.preventDefault();
  }
  let m = C(() => {
    var v, x;
    return (x = (v = S(f)) == null ? void 0 : v.closest) == null ? void 0 : x.call(v, "form");
  });
  return W(() => {
    ne([m], () => {
      if (!m.value || e.defaultChecked === void 0)
        return;
      function v() {
        i(e.defaultChecked);
      }
      return m.value.addEventListener("reset", v), () => {
        var x;
        (x = m.value) == null || x.removeEventListener("reset", v);
      };
    }, { immediate: !0 });
  }), () => {
    let { id: v, name: x, value: _, ...B } = e, I = { checked: r.value }, R = { id: v, ref: f, role: "switch", type: b.value, tabIndex: 0, "aria-checked": r.value, "aria-labelledby": a == null ? void 0 : a.labelledby.value, "aria-describedby": a == null ? void 0 : a.describedby.value, onClick: k, onKeyup: w, onKeypress: V };
    return Y(T, [x != null && r.value != null ? Y(xe, mt({ features: ye.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: r.value, name: x, value: _ })) : null, U({ ourProps: R, theirProps: { ...o, ...Ie(B, ["modelValue", "defaultChecked"]) }, slot: I, attrs: o, slots: n, name: "Switch" })]);
  };
} }), Ls = Eo;
function Is(e) {
  let t = { called: !1 };
  return (...o) => {
    if (!t.called)
      return t.called = !0, e(...o);
  };
}
function nt(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function qe(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var ct = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(ct || {});
function Ds(e, t) {
  let o = Ze();
  if (!e)
    return o.dispose;
  let { transitionDuration: n, transitionDelay: l } = getComputedStyle(e), [a, r] = [n, l].map((i) => {
    let [c = 0] = i.split(",").filter(Boolean).map((d) => d.includes("ms") ? parseFloat(d) : parseFloat(d) * 1e3).sort((d, f) => f - d);
    return c;
  });
  return a !== 0 ? o.setTimeout(() => t("finished"), a + r) : t("finished"), o.add(() => t("cancelled")), o.dispose;
}
function qt(e, t, o, n, l, a) {
  let r = Ze(), i = a !== void 0 ? Is(a) : () => {
  };
  return qe(e, ...l), nt(e, ...t, ...o), r.nextFrame(() => {
    qe(e, ...o), nt(e, ...n), r.add(Ds(e, (c) => (qe(e, ...n, ...t), nt(e, ...l), i(c))));
  }), r.add(() => qe(e, ...t, ...o, ...n, ...l)), r.add(() => i("cancelled")), r.dispose;
}
function Ce(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Et = Symbol("TransitionContext");
var As = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(As || {});
function Ts() {
  return se(Et, null) !== null;
}
function js() {
  let e = se(Et, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Ms() {
  let e = se(St, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let St = Symbol("NestingContext");
function et(e) {
  return "children" in e ? et(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function Oo(e) {
  let t = $([]), o = $(!1);
  W(() => o.value = !0), ae(() => o.value = !1);
  function n(a, r = we.Hidden) {
    let i = t.value.findIndex(({ id: c }) => c === a);
    i !== -1 && (X(r, { [we.Unmount]() {
      t.value.splice(i, 1);
    }, [we.Hidden]() {
      t.value[i].state = "hidden";
    } }), !et(t) && o.value && (e == null || e()));
  }
  function l(a) {
    let r = t.value.find(({ id: i }) => i === a);
    return r ? r.state !== "visible" && (r.state = "visible") : t.value.push({ id: a, state: "visible" }), () => n(a, we.Unmount);
  }
  return { children: t, register: l, unregister: n };
}
let No = de.RenderStrategy, ke = q({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: o, slots: n, expose: l }) {
  let a = $(0);
  function r() {
    a.value |= Q.Opening, t("beforeEnter");
  }
  function i() {
    a.value &= ~Q.Opening, t("afterEnter");
  }
  function c() {
    a.value |= Q.Closing, t("beforeLeave");
  }
  function d() {
    a.value &= ~Q.Closing, t("afterLeave");
  }
  if (!Ts() && Aa())
    return () => Y(Fe, { ...e, onBeforeEnter: r, onAfterEnter: i, onBeforeLeave: c, onAfterLeave: d }, n);
  let f = $(null), b = $("visible"), k = C(() => e.unmount ? we.Unmount : we.Hidden);
  l({ el: f, $el: f });
  let { show: w, appear: V } = js(), { register: m, unregister: v } = Ms(), x = { value: !0 }, _ = J(), B = { value: !1 }, I = Oo(() => {
    !B.value && b.value !== "hidden" && (b.value = "hidden", v(_), d());
  });
  W(() => {
    let ge = m(_);
    ae(ge);
  }), oe(() => {
    if (k.value === we.Hidden && _) {
      if (w && b.value !== "visible") {
        b.value = "visible";
        return;
      }
      X(b.value, { hidden: () => v(_), visible: () => m(_) });
    }
  });
  let R = Ce(e.enter), P = Ce(e.enterFrom), A = Ce(e.enterTo), D = Ce(e.entered), L = Ce(e.leave), z = Ce(e.leaveFrom), ee = Ce(e.leaveTo);
  W(() => {
    oe(() => {
      if (b.value === "visible") {
        let ge = S(f);
        if (ge instanceof Comment && ge.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function $e(ge) {
    let K = x.value && !V.value, Z = S(f);
    !Z || !(Z instanceof HTMLElement) || K || (B.value = !0, w.value && r(), w.value || c(), ge(w.value ? qt(Z, R, P, A, D, (re) => {
      B.value = !1, re === ct.Finished && i();
    }) : qt(Z, L, z, ee, D, (re) => {
      B.value = !1, re === ct.Finished && (et(I) || (b.value = "hidden", v(_), d()));
    })));
  }
  return W(() => {
    ne([w], (ge, K, Z) => {
      $e(Z), x.value = !1;
    }, { immediate: !0 });
  }), ie(St, I), Ue(C(() => X(b.value, { visible: Q.Open, hidden: Q.Closed }) | a.value)), () => {
    let { appear: ge, show: K, enter: Z, enterFrom: re, enterTo: pe, entered: ze, leave: _e, leaveFrom: r4, leaveTo: i4, ...Ot } = e, Ro = { ref: f }, Fo = { ...Ot, ...V && w && Me.isServer ? { class: N([o.class, Ot.class, ...R, ...P]) } : {} };
    return U({ theirProps: Fo, ourProps: Ro, slot: {}, slots: n, attrs: o, features: No, visible: b.value === "visible", name: "TransitionChild" });
  };
} }), Rs = ke, Fe = q({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: o, slots: n }) {
  let l = Le(), a = C(() => e.show === null && l !== null ? (l.value & Q.Open) === Q.Open : e.show);
  oe(() => {
    if (![!0, !1].includes(a.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r = $(a.value ? "visible" : "hidden"), i = Oo(() => {
    r.value = "hidden";
  }), c = $(!0), d = { show: a, appear: C(() => e.appear || !c.value) };
  return W(() => {
    oe(() => {
      c.value = !1, a.value ? r.value = "visible" : et(i) || (r.value = "hidden");
    });
  }), ie(St, i), ie(Et, d), () => {
    let f = Ie(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), b = { unmount: e.unmount };
    return U({ ourProps: { ...b, as: "template" }, theirProps: {}, slot: {}, slots: { ...n, default: () => [Y(Rs, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...o, ...b, ...f }, n.default)] }, attrs: {}, features: No, visible: r.value === "visible", name: "Transition" });
  };
} });
const Fs = {
  key: 0,
  class: "po-text-sm po-font-normal po-text-slate-400 po-select-none"
}, zs = { class: "po-grid po-grid-cols-3 po-gap-2 po-py-2" }, Hs = { class: "po-bg-white hover:po-bg-slate-200 po-rounded-xl po-p-2 po-transition-colors po-duration-150 po-ease-in" }, qs = ["href"], Us = { class: "po-flex po-w-14 po-h-14 po-items-center po-justify-center po-duration-100 po-ease-in-out po-overflow-hidden" }, Gs = ["innerHTML"], Ws = { class: "po-text-slate-600 po-font-normal po-text-sm po-text-center" }, Ks = {
  name: "PoAppTray"
}, Zs = /* @__PURE__ */ Object.assign(Ks, {
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
    return (t, o) => (p(), j(g(Je), null, {
      default: O(({ open: n }) => [
        E(g($t), {
          class: N([n ? "" : "po-text-opacity-90", "po-block po-w-6 po-text-slate-100 genie-effect po-z-50 po-outline-none"])
        }, {
          default: O(() => [
            E(g(pa))
          ]),
          _: 2
        }, 1032, ["class"]),
        E(Oe, {
          "enter-active-class": "po-transition po-duration-200 po-ease-out",
          "enter-from-class": "po-translate-y-1 po-opacity-0",
          "enter-to-class": "po-translate-y-0 po-opacity-100",
          "leave-active-class": "po-transition po-duration-150 po-ease-in",
          "leave-from-class": "po-translate-y-0 po-opacity-100",
          "leave-to-class": "po-translate-y-1 po-opacity-0"
        }, {
          default: O(() => [
            E(g(_t), { class: "po-space-y-1 po-z-10 po-absolute po-right-0 po-top-16 po-opacity-0 po-bg-white po-bg-opacity-50 po-backdrop-blur po-backdrop-filter po-shadow-lg po-rounded-xl po-w-96 po-p-4 po-border po-border-slate-200 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-scroll" }, {
              default: O(() => [
                (p(!0), u(T, null, H(e.appList, (l) => (p(), u("div", null, [
                  l.groupName.length > 0 ? (p(), u("span", Fs, h(l.groupName), 1)) : y("", !0),
                  s("ul", zs, [
                    (p(!0), u(T, null, H(l.apps, (a) => (p(), u("li", Hs, [
                      s("a", {
                        href: a.url,
                        class: "po-flex po-flex-col po-group po-justify-center po-items-center"
                      }, [
                        s("span", Us, [
                          s("span", {
                            class: "po-w-8",
                            innerHTML: a.icon
                          }, null, 8, Gs)
                        ]),
                        s("span", Ws, h(a.name), 1)
                      ], 8, qs)
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
}), Xs = {
  key: 0,
  class: "po-absolute po-right-0 po-w-3 po-h-3 po-bg-mpao-orange po-rounded-full po-border-2 po-border-mpao-blue"
}, Qs = {
  key: 0,
  class: "po-space-y-2"
}, Ys = ["onClick"], Js = { class: "po-flex po-items-center po-justify-between" }, er = { class: "po-text-sm po-font-semibold po-text-slate-700 po-grow po-flex po-space-x-2 po-items-center" }, tr = {
  key: 0,
  class: "po-w-2 po-h-2 po-rounded-full po-shrink-0 po-bg-mpao-orange"
}, or = { class: "po-grow" }, lr = { class: "po-text-xs po-font-normal po-text-slate-400 po-shrink-0" }, nr = { class: "po-block po-text-sm po-text-slate-500 po-pb-3" }, ar = {
  key: 1,
  class: "po-text-sm po-text-slate-500 po-py-10 po-text-center po-block"
}, sr = {
  name: "PoNotificationHub"
}, rr = /* @__PURE__ */ Object.assign(sr, {
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
    return (o, n) => (p(), j(g(Je), null, {
      default: O(({ open: l }) => [
        E(g($t), {
          class: N([l ? "" : "text-opacity-90", "po-block po-w-6 po-text-slate-100 genie-effect po-relative po-z-50 po-outline-none"])
        }, {
          default: O(() => [
            e.hasNewNotifications ? (p(), u("span", Xs)) : y("", !0),
            E(g(Kn), { class: "po-stroke-current" })
          ]),
          _: 2
        }, 1032, ["class"]),
        E(Oe, {
          "enter-active-class": "po-transition po-duration-200 po-ease-out",
          "enter-from-class": "po-translate-y-1 po-opacity-0",
          "enter-to-class": "po-translate-y-0 po-opacity-100",
          "leave-active-class": "po-transition po-duration-150 po-ease-in",
          "leave-from-class": "po-translate-y-0 po-opacity-100",
          "leave-to-class": "po-translate-y-1 po-opacity-0"
        }, {
          default: O(() => [
            E(g(_t), { class: "po-space-y-1 po-z-10 po-absolute po-right-0 po-top-16 po-opacity-0 po-bg-white po-bg-opacity-50 po-backdrop-blur po-backdrop-filter po-shadow-lg po-rounded-xl po-w-96 po-p-4 po-border po-border-slate-200 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-scroll" }, {
              default: O(() => [
                e.notifications !== null && e.notifications.length > 0 ? (p(), u("ul", Qs, [
                  (p(!0), u(T, null, H(e.notifications, (a) => (p(), u("li", {
                    role: "button",
                    class: "po-space-y-2 po-p-2 po-rounded-lg po-bg-white hover:po-bg-slate-100 po-border po-border-slate-100",
                    onClick: be((r) => o.$emit("button-click", a.name), ["prevent"])
                  }, [
                    s("span", Js, [
                      s("p", er, [
                        a.seen ? y("", !0) : (p(), u("span", tr)),
                        s("span", or, h(a.name), 1)
                      ]),
                      s("span", lr, h(a.time), 1)
                    ]),
                    s("span", nr, h(a.text), 1)
                  ], 8, Ys))), 256))
                ])) : (p(), u("span", ar, " No notifications to show at the moment. We'll keep you informed."))
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
}), ir = {
  key: 0,
  class: "po-hidden lg:po-block po-text-sky-50 po-text-sm po-shrink-0 po-pr-3 po-truncate po-max-w-[140px] po-overflow-hidden"
}, pr = {
  key: 1,
  class: "po-px-3 po-bg-slate-50 po-py-1 po-rounded-l-md"
}, ur = ["src"], cr = { class: "po-text-xs po-text-white po-font-semibold" }, dr = /* @__PURE__ */ s("div", { class: "po-pb-5" }, [
  /* @__PURE__ */ s("img", {
    class: "po-w-20 po-h-20 po-mx-auto po-rounded-full po-overflow-hidden po-saturate-50 po-opacity-90",
    src: "https://images.unsplash.com/photo-1597248374161-426f0d6d2fc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
    alt: ""
  }),
  /* @__PURE__ */ s("span", { class: "po-text-base po-text-slate-600 po-font-medium po-block po-mt-4" }, "Claire Hussain"),
  /* @__PURE__ */ s("span", { class: "po-block po-text-sm po-text-slate-500 po-italic" }, "Manager at Jacobs Cement Pvt Ltd")
], -1), fr = { class: "po-space-y-2 po-pt-2 po-border-t po-border-slate-200 po-max-h-[190px] po-overflow-y-scroll" }, vr = ["onClick"], mr = { class: "po-w-5" }, hr = { class: "po-flex po-flex-col po-space-y-1" }, br = { class: "po-text-sm po-font-normal" }, gr = {
  key: 0,
  class: "po-text-xs po-text-slate-400"
}, yr = { class: "md:po-grid po-grid-cols-2 po-space-x-1 po-pt-2 po-border-t po-border-slate-200" }, xr = { class: "po-w-5" }, Vr = /* @__PURE__ */ s("span", { class: "po-text-sm po-font-normal" }, "Profile", -1), wr = { class: "po-w-5" }, kr = /* @__PURE__ */ s("span", { class: "po-text-sm po-font-normal" }, "Logout", -1), $r = /* @__PURE__ */ s("div", { class: "po-text-xs po-space-x-3 po-text-center po-pt-3" }, [
  /* @__PURE__ */ s("a", {
    href: "",
    class: "po-text-slate-500 hover:po-text-mpao-lightblue"
  }, "Privacy Policy"),
  /* @__PURE__ */ s("a", {
    href: "",
    class: "po-text-slate-500 hover:po-text-mpao-lightblue"
  }, "Terms of Service")
], -1), _r = {
  name: "PoProfileSwitcher"
}, Cr = /* @__PURE__ */ Object.assign(_r, {
  props: {
    profileSwitcherData: {
      type: Object,
      default: null
    }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    const o = e, n = $(""), l = $(""), a = C(() => {
      const r = o.profileSwitcherData.profiles.filter(
        (i) => i.current === !0
      )[0];
      return n.value = r ? r.name : "", l.value = r && r.logo ? r.logo : "", r ? r.name.match(/\b[A-Z]/g).join("").substr(0, 2) : "";
    });
    return (r, i) => (p(), j(g(Je), null, {
      default: O(({ open: c }) => [
        E(g($t), { class: "po-flex po-items-center po-outline-none" }, {
          default: O(() => [
            l.value === "" ? (p(), u("span", ir, h(n.value), 1)) : y("", !0),
            l.value !== "" ? (p(), u("span", pr, [
              s("img", {
                class: "po-h-8",
                src: l.value,
                alt: ""
              }, null, 8, ur)
            ])) : y("", !0),
            s("div", {
              class: N([c ? "" : "text-opacity-90", "po-shrink-0 po-select-none po-rounded-full po-w-10 po-h-10 po-bg-[#2e5266] po-flex po-items-center po-justify-center genie-effect po-z-50"])
            }, [
              s("span", cr, h(g(a)), 1)
            ], 2)
          ]),
          _: 2
        }, 1024),
        E(Oe, {
          "enter-active-class": "po-transition po-duration-200 po-ease-out",
          "enter-from-class": "po-translate-y-1 po-opacity-0",
          "enter-to-class": "po-translate-y-0 po-opacity-100",
          "leave-active-class": "po-transition po-duration-150 po-ease-in",
          "leave-from-class": "po-translate-y-0 po-opacity-100",
          "leave-to-class": "po-translate-y-1 po-opacity-0"
        }, {
          default: O(() => [
            E(g(_t), { class: "po-space-y-1 po-z-10 po-absolute po-right-0 po-top-16 po-opacity-0 po-bg-white po-shadow-lg po-rounded-b-xl po-rounded-t-0 po-w-[366px] po-p-4 po-border po-border-t-0 po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-scroll po-text-center" }, {
              default: O(() => [
                dr,
                s("div", fr, [
                  (p(!0), u(T, null, H(e.profileSwitcherData.profiles, (d) => (p(), u("a", {
                    href: "#",
                    onClick: be((f) => r.$emit("button-click", d), ["prevent"]),
                    class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-white hover:po-bg-slate-100 po-border po-border-slate-100",
                    role: "button"
                  }, [
                    s("span", mr, [
                      d.isPersonal ? (p(), j(g(Dt), {
                        key: 0,
                        class: N([
                          "po-stroke-current",
                          { "po-stroke-mpao-orange": d.current }
                        ])
                      }, null, 8, ["class"])) : y("", !0),
                      d.isPersonal ? y("", !0) : (p(), j(g(Xn), {
                        key: 1,
                        class: N([
                          "po-stroke-current",
                          { "po-stroke-mpao-orange": d.current }
                        ])
                      }, null, 8, ["class"]))
                    ]),
                    s("span", hr, [
                      s("span", br, h(d.name), 1),
                      d.identifier.length !== 0 ? (p(), u("span", gr, h(d.identifier), 1)) : y("", !0)
                    ])
                  ], 8, vr))), 256))
                ]),
                s("div", yr, [
                  s("a", {
                    href: "#",
                    onClick: i[0] || (i[0] = be((d) => r.$emit("button-click", "current-profile"), ["prevent"])),
                    class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-white hover:po-bg-slate-100 po-border po-border-slate-100",
                    role: "button"
                  }, [
                    s("span", xr, [
                      E(g(Dt), { class: "po-stroke-current" })
                    ]),
                    Vr
                  ]),
                  s("a", {
                    href: "#",
                    onClick: i[1] || (i[1] = be((d) => r.$emit("button-click", "logout"), ["prevent"])),
                    class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-white hover:po-bg-slate-100 po-border po-border-slate-100",
                    role: "button"
                  }, [
                    s("span", wr, [
                      E(g(Un), { class: "po-stroke-current" })
                    ]),
                    kr
                  ])
                ]),
                $r
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
}), Er = { class: "loading-dots po-inline-block po-relative po-w-[40px] po-h-[10px]" }, Lo = {
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
    return (t, o) => (p(), u("div", Er, [
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
}, Sr = ["disabled", "aria-disabled"], Br = ["value", "disabled", "aria-disabled"], Pr = {
  name: "PoButton"
}, Bt = /* @__PURE__ */ Object.assign(Pr, {
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
    const o = e, n = "po-rounded-lg po-transition-colors po-border po-duration-100 po-ease-in-out po-cursor-pointer disabled:po-bg-slate-400 disabled:po-border-slate-400 disabled:po-cursor-default disabled:po-hover:bg-slate-400", l = C(() => {
      switch (o.size) {
        case "sm":
          return "po-px-2 po-py-1 po-text-xs";
        case "md":
          return "po-px-4 po-py-2 po-text-sm";
        case "lg":
          return "po-px-5 po-py-3 po-text-normal";
      }
    }), a = C(() => {
      if (o.overrideColors)
        return "";
      switch (o.actionType) {
        case "default":
          return "po-bg-mpao-lightblue hover:po-bg-mpao-blue focus:po-bg-mpao-blue po-text-slate-50 po-border-mpao-lightblue hover:po-border-mpao-blue focus:border-mpao-blue";
        case "danger":
          return "po-bg-rose-600 hover:po-bg-rose-700 focus:po-bg-rose-600 po-text-white po-border-rose-600 hover:po-border-rose-700 focus:po-border-rose-700";
        case "ghost":
          return "po-bg-white hover:po-bg-slate-100 focus:po-bg-slate-100 po-text-slate-600 po-border-slate-300 hover:po-border-slate-400 focus:po-border-slate-400";
      }
    });
    return (r, i) => (p(), u(T, null, [
      e.isLoading ? (p(), u("span", {
        key: 0,
        class: N([[n, g(l)], "po-bg-slate-200 hover:po-bg-slate-200 focus:po-bg-slate-200"])
      }, [
        E(Lo, {
          "dot-color": "po-bg-slate-500",
          class: "po-relative -po-bottom-[0.2rem]"
        })
      ], 2)) : y("", !0),
      e.type == "button" && !e.isLoading ? (p(), u("button", Be({
        key: 1,
        onClick: i[0] || (i[0] = be((c) => r.$emit("button-click", e.to), ["prevent"])),
        class: [n, g(l), g(a)],
        disabled: e.disabled,
        "aria-disabled": e.disabled
      }, r.$attrs), [
        te(r.$slots, "label", {}, () => [
          ce(h(e.label), 1)
        ])
      ], 16, Sr)) : y("", !0),
      e.type == "submit" && !e.isLoading ? (p(), u("input", Be({
        key: 2,
        type: "submit",
        class: [n, g(l), g(a)],
        value: e.label,
        disabled: e.disabled,
        "aria-disabled": e.disabled
      }, r.$attrs), null, 16, Br)) : y("", !0),
      e.type == "link" && !e.isLoading ? (p(), u("a", Be({
        key: 3,
        href: "#",
        onClick: i[1] || (i[1] = be((c) => r.$emit("button-click", e.to), ["prevent"])),
        class: [n, g(l), g(a)]
      }, r.$attrs), [
        te(r.$slots, "label", {}, () => [
          ce(h(e.label), 1)
        ])
      ], 16)) : y("", !0),
      e.type == "simple" && !e.isLoading ? (p(), u("a", {
        key: 4,
        href: "#",
        onClick: i[2] || (i[2] = be((c) => r.$emit("button-click", e.to), ["prevent"])),
        class: N(["po-text-sm po-transition-colors po-duration-100 po-ease-in-out po-inline-flex po-items-center po-space-x-1", [
          { "po-text-mpao-lightblue hover:po-text-mpao-blue": !e.overrideColors }
        ]])
      }, [
        te(r.$slots, "label", {}, () => [
          ce(h(e.label), 1)
        ])
      ], 2)) : y("", !0)
    ], 64));
  }
}), Or = /* @__PURE__ */ s("div", { class: "po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity" }, null, -1), Nr = { class: "po-fixed po-z-10 po-inset-0" }, Lr = { class: "po-flex po-justify-center po-items-start po-min-h-screen po-px-4 po-pt-10 po-pb-20 po-text-center sm:po-block po-max-h-screen po-overflow-y-hidden" }, Ir = /* @__PURE__ */ s("span", {
  class: "po-hidden sm:po-inline-block sm:po-align-middle sm:po-h-screen",
  "aria-hidden": "true"
}, "​", -1), Dr = { class: "po-flex po-items-center po-bg-white po-rounded-t-xl po-p-5" }, Ar = { class: "po-grow po-text-md po-font-bold po-text-slate-600" }, Tr = { class: "po-shrink-0" }, jr = /* @__PURE__ */ s("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), Mr = { class: "po-p-5 po-max-h-[calc(100vh-230px)] po-overflow-y-scroll" }, Rr = {
  key: 0,
  class: "po-bg-slate-50 po-rounded-b-xl"
}, Fr = {
  name: "PoModal"
}, zr = /* @__PURE__ */ Object.assign(Fr, {
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
    const o = e, { show: n } = je(o), l = $(!1);
    ne(n, () => {
      l.value = n.value;
    });
    function a() {
      l.value = !1, t("modal-closed", !0);
    }
    return (r, i) => (p(), u("div", null, [
      e.openBtnLabel.length > 0 ? (p(), j(g(Bt), {
        key: 0,
        label: e.openBtnLabel,
        onClick: i[0] || (i[0] = (c) => l.value = !0)
      }, null, 8, ["label"])) : y("", !0),
      (p(), j(ft, { to: "body" }, [
        E(g(Fe), {
          as: "template",
          show: l.value
        }, {
          default: O(() => [
            E(g(Xe), {
              as: "div",
              class: "po-relative po-z-50",
              onClose: a
            }, {
              default: O(() => [
                E(g(ke), {
                  as: "template",
                  enter: "po-ease-out po-duration-300",
                  "enter-from": "po-opacity-0",
                  "enter-to": "po-opacity-100",
                  leave: "po-ease-in po-duration-200",
                  "leave-from": "po-opacity-100",
                  "leave-to": "po-opacity-0"
                }, {
                  default: O(() => [
                    Or
                  ]),
                  _: 1
                }),
                s("div", Nr, [
                  s("div", Lr, [
                    Ir,
                    E(g(ke), {
                      as: "template",
                      enter: "po-ease-out po-duration-300",
                      "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                      "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                      leave: "po-ease-in po-duration-200",
                      "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                      "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                    }, {
                      default: O(() => [
                        E(g(Qe), {
                          class: N(["po-relative po-inline-block po-align-bottom po-bg-white po-rounded-xl po-text-left po-shadow-xl po-transform po-transition-all sm:po-align-top po-w-full", e.modalWidth])
                        }, {
                          default: O(() => [
                            s("div", Dr, [
                              s("h3", Ar, h(e.modalTitle), 1),
                              s("div", Tr, [
                                s("span", {
                                  role: "button",
                                  class: "po-block",
                                  onClick: a
                                }, [
                                  E(g(Qt), { class: "po-w-5 po-stroke-slate-500 hover:po-stroke-mpao-orange po-transition-colors po-duration-150 po-ease-in-out" })
                                ])
                              ])
                            ]),
                            jr,
                            s("div", Mr, [
                              te(r.$slots, "content")
                            ]),
                            r.$slots.footer ? (p(), u("div", Rr, [
                              te(r.$slots, "footer")
                            ])) : y("", !0)
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
}), Hr = {
  key: 0,
  class: "po-text-lg po-text-red-400 po-font-semibold"
}, qr = {
  key: 0,
  class: "po-mt-1 po-flex -po-mb-3 po-flex-wrap"
}, Ur = { class: "po-flex po-flex-1" }, Gr = { class: "po-flex po-flex-col" }, Wr = {
  name: "PoRadioInput"
}, Kr = /* @__PURE__ */ Object.assign(Wr, {
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
    const o = e, n = $();
    return n.value = o.modelValue, Kt(() => {
      n.value = o.modelValue;
    }), ne(n, () => {
      t("update:modelValue", n.value);
    }), (l, a) => (p(), j(g(Es), {
      modelValue: n.value,
      "onUpdate:modelValue": a[0] || (a[0] = (r) => n.value = r),
      class: N([{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }])
    }, {
      default: O(() => [
        E(g(Ht), { class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700" }, {
          default: O(() => [
            s("span", null, h(e.label), 1),
            e.required ? (p(), u("span", Hr, "*")) : y("", !0)
          ]),
          _: 1
        }),
        e.options !== null ? (p(), u("div", qr, [
          (p(!0), u(T, null, H(e.options, (r) => (p(), j(g(Bs), {
            as: "template",
            key: r.id,
            value: r.id
          }, {
            default: O(({ checked: i, active: c }) => [
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
                    i ? "po-border-mpao-lightblue" : "po-border-slate-400"
                  ]])
                }, [
                  s("span", {
                    class: N(["po-w-3 po-h-3 po-rounded-full", [
                      "",
                      i ? "po-bg-mpao-lightblue" : "po-bg-transparent"
                    ]])
                  }, null, 2)
                ], 2),
                s("span", Ur, [
                  s("span", Gr, [
                    E(g(Ht), {
                      as: "span",
                      class: "po-block po-text-sm po-font-medium po-text-gray-900"
                    }, {
                      default: O(() => [
                        ce(h(r.title), 1)
                      ]),
                      _: 2
                    }, 1024),
                    r.description ? (p(), j(g(Ps), {
                      key: 0,
                      as: "span",
                      class: "po-mt-1 po-flex po-items-center po-text-sm po-text-gray-500"
                    }, {
                      default: O(() => [
                        ce(h(r.description), 1)
                      ]),
                      _: 2
                    }, 1024)) : y("", !0)
                  ])
                ])
              ], 2)
            ]),
            _: 2
          }, 1032, ["value"]))), 128))
        ])) : y("", !0)
      ]),
      _: 1
    }, 8, ["modelValue", "class"]));
  }
}), { createElementVNode: Ut, openBlock: Zr, createElementBlock: Xr } = M;
var Qr = function(t, o) {
  return Zr(), Xr("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    Ut("path", { d: "M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" }),
    Ut("path", { d: "M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" })
  ]);
};
const { createElementVNode: Yr, openBlock: Jr, createElementBlock: ei } = M;
var ti = function(t, o) {
  return Jr(), ei("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    Yr("path", {
      "fill-rule": "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      "clip-rule": "evenodd"
    })
  ]);
};
const { createElementVNode: oi, openBlock: li, createElementBlock: ni } = M;
var ai = function(t, o) {
  return li(), ni("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    oi("path", { d: "M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" })
  ]);
};
const { createElementVNode: si, openBlock: ri, createElementBlock: ii } = M;
var pi = function(t, o) {
  return ri(), ii("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    si("path", {
      "fill-rule": "evenodd",
      d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z",
      "clip-rule": "evenodd"
    })
  ]);
};
const { createElementVNode: ui, openBlock: ci, createElementBlock: di } = M;
var fi = function(t, o) {
  return ci(), di("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    ui("path", {
      "fill-rule": "evenodd",
      d: "M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z",
      "clip-rule": "evenodd"
    })
  ]);
}, vi = Qr, Io = ti, mi = ai, Pt = pi, hi = fi;
const bi = ["for"], gi = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, yi = ["title"], xi = ["name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], Vi = ["id"], wi = ["id"], ki = {
  name: "PoTextarea"
}, $i = /* @__PURE__ */ Object.assign(ki, {
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
    return (t, o) => (p(), u("div", {
      class: N(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      s("label", {
        for: e.id,
        class: "po-text-sm po-font-medium po-text-slate-700 po-flex po-items-center po-space-x-1"
      }, [
        s("span", null, h(e.label), 1),
        e.required ? (p(), u("span", gi, "*")) : y("", !0),
        e.info !== null ? (p(), u("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          E(g(Pt))
        ], 8, yi)) : y("", !0)
      ], 8, bi),
      s("textarea", Be({
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
        onInput: o[0] || (o[0] = (n) => t.$emit("update:modelValue", n.target.value)),
        class: "po-mt-1 po-peer po-px-3 po-py-2 po-block po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-border-slate-300 po-bg-white focus:po-border-mpao-lightblue focus:po-ring-0 invalid:po-border-red-400 invalid:po-focus:border-red-600 invalid:focus:po-ring-red-600 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default"
      }), null, 16, xi),
      e.message !== null ? (p(), u("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, h(e.message), 9, Vi)) : y("", !0),
      e.errorMessage !== null ? (p(), u("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, h(e.errorMessage), 9, wi)) : y("", !0)
    ], 2));
  }
}), _i = /* @__PURE__ */ s("input", {
  type: "checkbox",
  name: "",
  class: "po-hidden shell-sidebar--toggle",
  role: "none",
  id: "sidebar-drawer-toggle",
  checked: "",
  "aria-checked": "true"
}, null, -1), Ci = { class: "shell-sidebar" }, Ei = { class: "po-grow" }, Si = { class: "shell-sidebar--menu" }, Bi = ["onClick", "title"], Pi = { class: "shell-sidebar--icon" }, Oi = { class: "shell-sidebar--label po-font-medium" }, Ni = { key: 0 }, Li = { class: "shell-sidebar--menu sidebar-apps po-shrink-0 po-mb-0" }, Ii = ["onClick"], Di = { class: "shell-sidebar--icon" }, Ai = ["innerHTML"], Ti = { class: "shell-sidebar--label po-font-medium" }, ji = {
  key: 0,
  class: "shell-sidebar--menu po-shrink-0 po-mb-0 po-border-t po-border-slate-200 po-pt-3"
}, Mi = { class: "shell-sidebar--icon" }, Ri = /* @__PURE__ */ s("span", { class: "shell-sidebar--label po-font-medium" }, "Feedback", -1), Fi = { action: "" }, zi = /* @__PURE__ */ s("br", null, null, -1), Hi = { class: "po-p-5" }, qi = {
  name: "PoSidebarDrawer"
}, d4 = /* @__PURE__ */ Object.assign(qi, {
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
    const n = $(e.apps), l = $(!1);
    function a(c) {
      for (let d = 0; d < n.value.length; d++)
        n.value[d].current && (n.value[d].current = !1);
      n.value[c].current = !0;
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
    ], i = $(r[0]);
    return (c, d) => (p(), u(T, null, [
      _i,
      s("aside", Ci, [
        s("div", Ei, [
          (p(!0), u(T, null, H(e.content, (f) => (p(), u("div", null, [
            E(g(Rt), { defaultOpen: !0 }, {
              default: O(({ open: b }) => [
                f.groupName ? (p(), j(g(Ft), {
                  key: 0,
                  class: N([b ? "" : "po-mb-3", "shell-sidebar--section po-w-full po-text-left"])
                }, {
                  default: O(() => [
                    ce(h(f.groupName), 1)
                  ]),
                  _: 2
                }, 1032, ["class"])) : y("", !0),
                E(Oe, {
                  "enter-active-class": "po-transition po-duration-100 po-ease-out",
                  "enter-from-class": "po-transform po-scale-95 po-opacity-0",
                  "enter-to-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-active-class": "po-transition po-duration-75 po-ease-out",
                  "leave-from-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-to-class": "po-transform po-scale-95 po-opacity-0"
                }, {
                  default: O(() => [
                    E(g(zt), null, {
                      default: O(() => [
                        s("ul", Si, [
                          (p(!0), u(T, null, H(f.items, (k) => (p(), u("li", null, [
                            k.disabled ? y("", !0) : (p(), u("button", {
                              key: 0,
                              onClick: (w) => c.$emit("button-click", k.url),
                              class: N([
                                "shell-sidebar--item",
                                { active: k.url == e.currRoute }
                              ]),
                              title: `Go to ${k.label}`
                            }, [
                              s("span", Pi, [
                                (p(), j(he(k.icon), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" }))
                              ]),
                              s("span", Oi, h(k.label), 1)
                            ], 10, Bi))
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
          e.apps !== null ? (p(), u("div", Ni, [
            E(g(Rt), { defaultOpen: !0 }, {
              default: O(({ open: f }) => [
                e.appsLabel ? (p(), j(g(Ft), {
                  key: 0,
                  class: N([f ? "" : "po-mb-3", "shell-sidebar--section po-w-full po-text-left"])
                }, {
                  default: O(() => [
                    ce(h(e.appsLabel), 1)
                  ]),
                  _: 2
                }, 1032, ["class"])) : y("", !0),
                E(Oe, {
                  "enter-active-class": "po-transition po-duration-100 po-ease-out",
                  "enter-from-class": "po-transform po-scale-95 po-opacity-0",
                  "enter-to-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-active-class": "po-transition po-duration-75 po-ease-out",
                  "leave-from-class": "po-transform po-scale-100 po-opacity-100",
                  "leave-to-class": "po-transform po-scale-95 po-opacity-0"
                }, {
                  default: O(() => [
                    E(g(zt), null, {
                      default: O(() => [
                        s("ul", Li, [
                          (p(!0), u(T, null, H(n.value, (b, k) => (p(), u("li", null, [
                            s("button", {
                              onClick: (w) => {
                                c.$emit("app-click", b.name), a(k);
                              },
                              class: N(["shell-sidebar--item", [{ active: b.current }]]),
                              title: "Go to feedback"
                            }, [
                              s("span", Di, [
                                s("span", {
                                  innerHTML: b.icon,
                                  class: "po-text-slate-600 po-w-5"
                                }, null, 8, Ai)
                              ]),
                              s("span", Ti, h(b.name), 1)
                            ], 10, Ii)
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
          ])) : y("", !0)
        ]),
        e.hasFeedback ? (p(), u("ul", ji, [
          s("li", null, [
            s("button", {
              onClick: d[0] || (d[0] = be(() => l.value = !0, ["prevent"])),
              class: "shell-sidebar--item",
              title: "Go to feedback"
            }, [
              s("span", Mi, [
                E(g(Qn), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" })
              ]),
              Ri
            ])
          ])
        ])) : y("", !0),
        E(zr, {
          show: l.value,
          onModalClosed: d[2] || (d[2] = () => l.value = !1),
          "modal-title": "Feedback"
        }, {
          content: O(() => [
            s("form", Fi, [
              E(Kr, {
                label: "Type",
                options: r,
                "pre-selected": i.value,
                modelValue: i.value,
                "onUpdate:modelValue": d[1] || (d[1] = (f) => i.value = f)
              }, null, 8, ["pre-selected", "modelValue"]),
              zi,
              E($i, {
                cols: "6",
                rows: "6",
                label: "Description",
                message: ""
              })
            ])
          ]),
          footer: O(() => [
            s("div", Hi, [
              E(Bt, {
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
}), Ui = {
  key: 0,
  class: "shell-content--action-bar"
}, Gi = { class: "action-bar__nav" }, Wi = ["onClick"], Ki = { class: "action-bar__nav_label po-font-medium" }, Zi = {
  key: 0,
  class: "po-shrink-0 po-flex po-space-x-1"
}, Xi = /* @__PURE__ */ s("span", { class: "action-bar__nav_label po-font-medium" }, "Go Back", -1), Qi = {
  name: "PoActionBar"
}, f4 = /* @__PURE__ */ Object.assign(Qi, {
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
    return (t, o) => e.items !== null && e.items.length > 0 || e.showBackButton ? (p(), u("section", Ui, [
      s("nav", Gi, [
        (p(!0), u(T, null, H(e.items, (n) => (p(), u("span", {
          onClick: (l) => t.$emit("button-click", n.label),
          class: N([[
            { "action-bar__nav_highlighted": n.highlighted },
            { "action-bar__nav_danger": n.danger }
          ], "action-bar__nav_link"])
        }, [
          (p(), j(he(n.icon), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" })),
          s("span", Ki, h(n.label), 1)
        ], 10, Wi))), 256))
      ]),
      e.showBackButton ? (p(), u("nav", Zi, [
        s("span", {
          onClick: o[0] || (o[0] = (n) => t.$emit("button-click", "back")),
          class: "action-bar__nav_link"
        }, [
          Xi,
          (p(), j(he(g(Gn)), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" }))
        ])
      ])) : y("", !0)
    ])) : y("", !0);
  }
}), Yi = { class: "po-shadow-sm po-rounded-xl po-bg-white po-relative" }, Ji = {
  key: 0,
  class: "po-absolute po-right-2 po-top-2 po-p-2 po-rounded-lg"
}, ep = { class: "po-grid po-grid-cols-1 lg:po-grid-cols-3 po-gap-3" }, tp = {
  key: 0,
  class: "po-text-base po-font-medium po-text-slate-600"
}, op = {
  key: 1,
  class: "lg:po-col-span-2 lg:po-flex lg:po-justify-end po-space-x-2"
}, lp = {
  name: "PoCard"
}, v4 = /* @__PURE__ */ Object.assign(lp, {
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
    return (t, o) => (p(), u("div", Yi, [
      e.isLoading ? (p(), u("div", Ji, [
        E(Lo)
      ])) : y("", !0),
      s("div", ep, [
        e.title.length > 0 ? (p(), u("h3", tp, h(e.title), 1)) : y("", !0),
        t.$slots.action ? (p(), u("div", op, [
          te(t.$slots, "action")
        ])) : y("", !0)
      ]),
      te(t.$slots, "content")
    ]));
  }
}), np = { class: "po-py-3 po-px-5 po-border-b po-border-slate-200" }, ap = {
  class: "po-flex po-w-full md:po-ml-0",
  action: "#",
  method: "GET"
}, sp = {
  for: "search-field",
  class: "po-sr-only"
}, rp = { class: "po-relative po-w-full po-text-slate-400 focus-within:po-text-mpao-lightblue po-transition-colors po-duration-100 po-ease-in-out" }, ip = { class: "po-pointer-events-none po-absolute po-inset-y-0 po-left-0 po-flex po-items-center" }, pp = ["placeholder", "value"], up = {
  name: "PoCardSearch"
}, m4 = /* @__PURE__ */ Object.assign(up, {
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
    return (t, o) => (p(), u("div", np, [
      s("form", ap, [
        s("label", sp, h(e.placeholder), 1),
        s("div", rp, [
          s("div", ip, [
            E(g(vt), { class: "po-h-5 po-w-5 po-flex-shrink-0" })
          ]),
          s("input", {
            name: "search-field",
            id: "desktop-search-field",
            placeholder: e.placeholder,
            value: e.modelValue,
            onInput: o[0] || (o[0] = (n) => t.$emit("update:modelValue", n.target.value)),
            class: "po-h-full po-w-full po-border-transparent po-py-2 po-pl-8 po-pr-3 po-text-sm po-text-slate-700 po-placeholder-slate-500 focus:po-border-transparent focus:po-placeholder-slate-400 focus:po-outline-none focus:po-ring-0",
            type: "search"
          }, null, 40, pp)
        ])
      ])
    ]));
  }
}), cp = { class: "po-flex po-items-center" }, dp = { class: "po-text-sm po-font-medium po-text-slate-500 po-pr-2" }, fp = {
  name: "PoPagination"
}, vp = /* @__PURE__ */ Object.assign(fp, {
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
    const o = e;
    function n() {
      t("button-click", "prev"), t("prev-click", !0);
    }
    function l() {
      t("button-click", "next"), t("next-click", !0);
    }
    const a = C(() => o.totalPages ? `Page ${o.currentPage} of ${o.totalPages}` : o.pagination ? o.pagination.label : "");
    return (r, i) => (p(), u("div", cp, [
      s("span", dp, h(g(a)), 1),
      s("button", {
        title: "Previous",
        onClick: n,
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        E(g(ta), { class: "po-w-4 po-stroke-current po-stroke-2" })
      ]),
      s("button", {
        title: "Next",
        onClick: l,
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        E(g(oa), { class: "po-w-4 po-stroke-current po-stroke-2" })
      ])
    ]));
  }
}), mp = { key: 0 }, hp = {
  class: "po-text-xl md:po-text-2xl po-font-semibold po-text-slate-800",
  id: "po-page-title"
}, bp = {
  key: 0,
  class: "po-text-base po-mt-2 po-max-w-md po-block po-text-slate-500"
}, gp = { key: 1 }, yp = { class: "po-grid po-grid-cols-1 lg:po-grid-cols-2 po-gap-5" }, xp = {
  class: "po-text-xl md:po-text-2xl po-font-semibold po-text-slate-800",
  id: "po-page-title"
}, Vp = {
  key: 0,
  class: "po-text-base po-mt-4 po-max-w-md po-pb-5 po-block po-text-slate-500"
}, wp = { class: "po-flex po-items-end po-justify-end po-flex-col" }, kp = {
  key: 0,
  class: "po-flex md:po-justify-end po-mb-5"
}, $p = { class: "po-bg-slate-50 po-shadow-sm po-rounded-xl po-py-5 po-px-2 po-divide-x po-divide-slate-200 po-flex" }, _p = ["onClick"], Cp = { class: "po-text-xl po-font-medium po-text-slate-600 po-flex po-items-center po-space-x-1" }, Ep = { class: "po-text-xl po-font-medium po-text-slate-600 group-hover:po-text-mpao-lightblue" }, Sp = { class: "po-text-sm po-text-slate-500 po-block group-hover:po-text-mpao-lightblue" }, Bp = { class: "po-flex po-items-center po-space-x-1 md:po-justify-end" }, Pp = {
  key: 2,
  class: "po-border-l po-border-slate-400 po-h-3 po-w-3 po-ml-1"
}, Op = {
  key: 0,
  class: "po-bg-slate-50 po-p-5 po-mt-5 po-rounded-md po-grid po-grid-cols-1 md:po-grid-cols-3 po-gap-5"
}, Np = /* @__PURE__ */ s("span", { class: "po-text-xs po-text-slate-500 po-py-5" }, "No filters available at the moment.", -1), Lp = {
  name: "PoPageTitle"
}, h4 = /* @__PURE__ */ Object.assign(Lp, {
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
    function l(r) {
      t("pagination-click", r);
    }
    function a(r) {
      return r.iconColor ? r.iconColor : "po-slate-600";
    }
    return (r, i) => e.standAlone ? (p(), u("div", mp, [
      s("h1", hp, h(e.label), 1),
      e.description !== "" ? (p(), u("span", bp, h(e.description), 1)) : y("", !0)
    ])) : (p(), u("div", gp, [
      s("div", yp, [
        s("div", null, [
          s("h1", xp, h(e.label), 1),
          e.description !== "" ? (p(), u("span", Vp, h(e.description), 1)) : y("", !0)
        ]),
        s("div", wp, [
          e.stats !== null ? (p(), u("div", kp, [
            s("div", $p, [
              (p(!0), u(T, null, H(e.stats, (c) => (p(), u("div", {
                class: "po-px-5 po-cursor-pointer po-group genie-effect",
                onClick: (d) => r.$emit("stat-click", c)
              }, [
                s("span", Cp, [
                  s("span", Ep, h(c.value), 1),
                  c.icon ? (p(), u("span", {
                    key: 0,
                    class: N(["po-w-5 po-h-5", a(c)])
                  }, [
                    (p(), j(he(c.icon)))
                  ], 2)) : y("", !0)
                ]),
                s("span", Sp, h(c.label), 1)
              ], 8, _p))), 256))
            ])
          ])) : y("", !0),
          s("div", Bp, [
            e.showFilter ? (p(), u("button", {
              key: 0,
              title: "Filter",
              onClick: i[0] || (i[0] = (c) => {
                r.$emit("button-click", "filter"), n.value = !g(n);
              }),
              class: N([
                "po-p-2 po-rounded-md hover:po-bg-slate-200 po-transition-colors po-duration-75 po-ease-in-out",
                { "po-text-mpao-orange hover:po-text-mpao-orange": g(n) },
                { "tpo-ext-slate-600 hover:po-text-mpao-blue": !g(n) }
              ])
            }, [
              E(g(aa), { class: "po-w-4 po-stroke-current po-stroke-2" })
            ], 2)) : y("", !0),
            e.showDownload ? (p(), u("button", {
              key: 1,
              title: "Download",
              onClick: i[1] || (i[1] = (c) => r.$emit("button-click", "download")),
              class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
            }, [
              E(g(qn), { class: "po-w-4 po-stroke-current po-stroke-2" })
            ])) : y("", !0),
            e.showFilter && e.showPagination || e.showDownload && e.showPagination ? (p(), u("span", Pp, " ")) : y("", !0),
            e.showPagination ? (p(), j(vp, {
              key: 3,
              pagination: e.pagination,
              onButtonClick: l
            }, null, 8, ["pagination"])) : y("", !0)
          ])
        ])
      ]),
      E(Oe, {
        "enter-active-class": "po-transition po-duration-100 po-ease-out",
        "enter-from-class": "po-transform po-scale-95 po-opacity-0",
        "enter-to-class": "po-transform po-scale-100 po-opacity-100",
        "leave-active-class": "po-transition po-duration-75 po-ease-out",
        "leave-from-class": "po-transform po-scale-100 po-opacity-100",
        "leave-to-class": "po-transform po-scale-95 po-opacity-0"
      }, {
        default: O(() => [
          g(n) ? (p(), u("div", Op, [
            te(r.$slots, "filters", {}, () => [
              Np
            ])
          ])) : y("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), Ip = { class: "table-responsive po-w-full" }, Dp = { key: 1 }, Ap = ["colspan"], Tp = { class: "po-py-10 po-block po-normal-case" }, jp = { key: 0 }, Mp = {
  name: "PoTable"
}, b4 = /* @__PURE__ */ Object.assign(Mp, {
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
    return (t, o) => (p(), u("table", Ip, [
      s("thead", null, [
        s("tr", null, [
          (p(!0), u(T, null, H(e.thead, (n) => (p(), u("th", null, [
            te(t.$slots, "th", Nt(Lt(n)))
          ]))), 256))
        ])
      ]),
      s("tbody", null, [
        e.tbody !== null || e.tbody !== null && e.tbody.length !== 0 ? (p(!0), u(T, { key: 0 }, H(e.tbody, (n) => (p(), u("tr", null, [
          te(t.$slots, "td", Nt(Lt(n)))
        ]))), 256)) : y("", !0),
        e.tbody == null || e.tbody !== null && e.tbody.length == 0 ? (p(), u("tr", Dp, [
          s("td", {
            colspan: e.thead.length + 1,
            class: "po-text-center"
          }, [
            s("span", Tp, h(e.emptyMessage), 1)
          ], 8, Ap)
        ])) : y("", !0)
      ]),
      t.$slots.tfoot ? (p(), u("tfoot", jp, [
        s("tr", null, [
          te(t.$slots, "tfoot")
        ])
      ])) : y("", !0)
    ]));
  }
}), { createElementVNode: Rp, openBlock: Fp, createElementBlock: zp } = M;
var Hp = function(t, o) {
  return Fp(), zp("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    Rp("path", {
      "fill-rule": "evenodd",
      d: "M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z",
      "clip-rule": "evenodd"
    })
  ]);
};
const { createElementVNode: qp, openBlock: Up, createElementBlock: Gp } = M;
var Wp = function(t, o) {
  return Up(), Gp("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    qp("path", {
      "fill-rule": "evenodd",
      d: "M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z",
      "clip-rule": "evenodd"
    })
  ]);
};
const { createElementVNode: Kp, openBlock: Zp, createElementBlock: Xp } = M;
var Qp = function(t, o) {
  return Zp(), Xp("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    Kp("path", {
      "fill-rule": "evenodd",
      d: "M2.24 6.8a.75.75 0 001.06-.04l1.95-2.1v8.59a.75.75 0 001.5 0V4.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L2.2 5.74a.75.75 0 00.04 1.06zm8 6.4a.75.75 0 00-.04 1.06l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V6.75a.75.75 0 00-1.5 0v8.59l-1.95-2.1a.75.75 0 00-1.06-.04z",
      "clip-rule": "evenodd"
    })
  ]);
};
const { createElementVNode: Yp, openBlock: Jp, createElementBlock: eu } = M;
var tu = function(t, o) {
  return Jp(), eu("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    Yp("path", {
      "fill-rule": "evenodd",
      d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z",
      "clip-rule": "evenodd"
    })
  ]);
};
const { createElementVNode: ou, openBlock: lu, createElementBlock: nu } = M;
var au = function(t, o) {
  return lu(), nu("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    ou("path", {
      "fill-rule": "evenodd",
      d: "M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z",
      "clip-rule": "evenodd"
    })
  ]);
};
const { createElementVNode: su, openBlock: ru, createElementBlock: iu } = M;
var pu = function(t, o) {
  return ru(), iu("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    su("path", {
      "fill-rule": "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      "clip-rule": "evenodd"
    })
  ]);
};
const { createElementVNode: uu, openBlock: cu, createElementBlock: du } = M;
var fu = function(t, o) {
  return cu(), du("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    uu("path", {
      "fill-rule": "evenodd",
      d: "M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z",
      "clip-rule": "evenodd"
    })
  ]);
};
const { createElementVNode: vu, openBlock: mu, createElementBlock: hu } = M;
var bu = function(t, o) {
  return mu(), hu("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    vu("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
  ]);
}, Do = Hp, Ao = Wp, To = Qp, gu = tu, yu = au, xu = pu, Vu = fu, jo = bu;
const wu = ["onUpdate:modelValue", "id"], ku = ["for"], $u = { class: "table-responsive po-w-full" }, _u = ["onClick"], Cu = { key: 0 }, Eu = ["onClick"], Su = {
  name: "PoDynamicTable",
  components: { ArrowsUpDownIcon: To, ArrowUpIcon: Ao, ArrowDownIcon: Do }
}, g4 = /* @__PURE__ */ Object.assign(Su, {
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
    const t = e, o = $(t.columns), n = $(null), l = $(null), a = (c) => {
      c.hidden = !c.hidden, o.value = t.columns.filter((d) => !d.hidden);
    }, r = (c) => {
      c.sortable && (c.sorted && l.value === "asc" ? l.value = "desc" : l.value = "asc", o.value.forEach((d) => {
        d.key === c.key ? (d.sorted = !0, d.sortDirection = l.value) : (d.sorted = !1, d.sortDirection = null);
      }), n.value = c);
    }, i = $([]);
    return oe(() => {
      n.value ? i.value = [...t.data].sort((c, d) => {
        let f = c[n.value.key], b = d[n.value.key];
        return typeof f == "string" && typeof b == "string" && (f = f.toLowerCase(), b = b.toLowerCase()), f < b ? l.value === "asc" ? -1 : 1 : f > b ? l.value === "asc" ? 1 : -1 : 0;
      }) : i.value = [...t.data];
    }), (c, d) => (p(), u("div", null, [
      (p(!0), u(T, null, H(o.value, (f) => (p(), u("div", null, [
        dt(s("input", {
          type: "checkbox",
          name: "",
          "onUpdate:modelValue": (b) => f.hidden = b,
          id: `hide-table-col-${f.label}`
        }, null, 8, wu), [
          [Uo, f.hidden]
        ]),
        s("label", {
          for: `hide-table-col-${f.label}`
        }, h(f.label), 9, ku)
      ]))), 256)),
      s("table", $u, [
        s("thead", null, [
          s("tr", null, [
            (p(!0), u(T, null, H(o.value, (f) => (p(), u("th", {
              key: f.key,
              onClick: (b) => r(f)
            }, [
              ce(h(f.label) + " " + h(f.sorted) + " " + h(f.sortDirection) + " ", 1),
              f.sortable ? (p(), u("span", Cu, [
                f.sorted ? y("", !0) : (p(), j(g(To), {
                  key: 0,
                  class: "po-w-4"
                })),
                f.sorted && f.sortDirection === "asc" ? (p(), j(g(Ao), {
                  key: 1,
                  class: "po-w-4"
                })) : y("", !0),
                f.sorted && f.sortDirection === "desc" ? (p(), j(g(Do), {
                  key: 2,
                  class: "po-w-4"
                })) : y("", !0)
              ])) : y("", !0),
              f.hidable ? (p(), u("button", {
                key: 1,
                onClick: (b) => a(f)
              }, h(f.hidden ? "Show" : "Hide"), 9, Eu)) : y("", !0)
            ], 8, _u))), 128))
          ])
        ]),
        s("tbody", null, [
          (p(!0), u(T, null, H(i.value, (f) => (p(), u("tr", {
            key: f.id
          }, [
            (p(!0), u(T, null, H(o.value, (b) => (p(), u("td", {
              key: b.key
            }, h(f[b.key]), 1))), 128))
          ]))), 128))
        ])
      ])
    ]));
  }
}), Bu = { class: "" }, Pu = { class: "po-grow" }, Ou = ["onClick"], Nu = {
  name: "PoDescriptionList"
}, Lu = /* @__PURE__ */ Object.assign(Nu, {
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
    return (t, o) => (p(), u("div", null, [
      s("dl", {
        class: N([
          "po-description-list",
          { "po-divide-y po-divide-slate-200": !e.striped },
          { striped: e.striped }
        ])
      }, [
        te(t.$slots, "content", {}, () => [
          (p(!0), u(T, null, H(e.items, (n) => (p(), u("div", null, [
            s("dt", null, h(n.title), 1),
            s("dd", Bu, [
              s("span", Pu, h(n.description), 1),
              n.action !== void 0 ? (p(), u("span", {
                key: 0,
                class: "po-shrink-0 po-text-mpao-lightblue hover:po-text-mpao-blue po-transition-colors po-duration-100 po-ease-in-out po-px-2 po-cursor-pointer",
                onClick: (l) => t.$emit("button-click", n.action)
              }, h(n.action), 9, Ou)) : y("", !0)
            ])
          ]))), 256))
        ])
      ], 2)
    ]));
  }
}), Iu = ["for"], Du = { class: "po-capitalize" }, Au = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Tu = ["title"], ju = ["type", "name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], Mu = ["id"], Ru = ["id"], Fu = {
  name: "PoInputField"
}, y4 = /* @__PURE__ */ Object.assign(Fu, {
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
    function o() {
      return t.hasError ? "po-border-red-400 focus:po-border-red-600 focus:po-ring-red-600" : t.borderColor;
    }
    return (n, l) => (p(), u("div", {
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
        s("span", Du, h(e.label), 1),
        e.required ? (p(), u("span", Au, "*")) : y("", !0),
        e.info !== null ? (p(), u("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          E(g(Pt), { class: "po-fill-current" })
        ], 8, Tu)) : y("", !0)
      ], 10, Iu),
      s("input", Be({
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
      }, n.$attrs, {
        onInput: l[0] || (l[0] = (a) => n.$emit("update:modelValue", a.target.value)),
        class: [
          "po-mt-1 peer po-block po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white focus:po-ring-0 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default",
          o()
        ]
      }), null, 16, ju),
      e.message !== null ? (p(), u("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, h(e.message), 9, Mu)) : y("", !0),
      e.hasError && e.errorMessage !== null ? (p(), u("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-center po-space-x-1",
        id: `${e.id}-error`
      }, [
        E(g(Io), { class: "po-fill-current po-w-4" }),
        s("span", null, h(e.errorMessage), 1)
      ], 8, Ru)) : y("", !0)
    ], 2));
  }
}), zu = { class: "po-text-sm po-font-medium po-text-slate-700 peer-focus:po-text-mpao-lightblue peer-invalid:po-text-red-500 peer-invalid:peer-focus:po-text-red-600 po-flex po-items-center po-space-x-1 po-capitalize" }, Hu = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, qu = ["name", "id", "value"], Uu = ["for"], Gu = { class: "po-flex po-items-center po-space-x-1" }, Wu = /* @__PURE__ */ s("span", { class: "po-text-sm" }, "Choose file", -1), Ku = ["id"], Zu = ["id"], Xu = {
  name: "PoInputFile"
}, x4 = /* @__PURE__ */ Object.assign(Xu, {
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
    return (t, o) => (p(), u("div", {
      class: N(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      s("span", zu, [
        s("span", null, h(e.label), 1),
        e.required ? (p(), u("span", Hu, "*")) : y("", !0)
      ]),
      s("input", {
        name: `${e.id}-upload`,
        id: `${e.id}-fileupload`,
        value: e.modelValue,
        type: "file",
        onInput: o[0] || (o[0] = (n) => t.$emit("update:modelValue", n.target.value)),
        class: "po-sr-only po-peer"
      }, null, 40, qu),
      s("label", {
        for: `${e.id}-fileupload`,
        class: "po-mt-1 po-block po-w-full po-border po-cursor-pointer po-rounded-md po-border-slate-300 po-bg-white peer-focus:po-border-mpao-lightblue invalid:po-border-red-400 invalid:focus:po-border-red-600 invalid:focus:po-ring-red-600 sm:po-text-sm po-p-2"
      }, [
        s("div", Gu, [
          E(g(Xt), { class: "po-w-4 po-stroke-slate-500" }),
          Wu
        ])
      ], 8, Uu),
      e.message !== null ? (p(), u("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, h(e.message), 9, Ku)) : y("", !0),
      e.errorMessage !== null ? (p(), u("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, h(e.errorMessage), 9, Zu)) : y("", !0)
    ], 2));
  }
}), Qu = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Yu = ["title"], Ju = { class: "po-relative po-mt-1" }, ec = {
  name: "PoSelectField"
}, V4 = /* @__PURE__ */ Object.assign(ec, {
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
    const o = e, n = $(""), l = $(), a = C(
      () => n.value === "" ? o.list : o.list.filter((i) => i.name.toLowerCase().includes(n.value.toLowerCase()))
    );
    function r(i) {
      if (a.value) {
        let c = a.value.find((d) => d.id === i);
        return c == null ? void 0 : c.name;
      }
    }
    return l.value = o.modelValue, Kt(() => {
      l.value = o.modelValue;
    }), ne(l, () => {
      t("update:modelValue", l.value), t("selected", l.value);
    }), (i, c) => (p(), j(g(Xa), {
      as: "div",
      modelValue: l.value,
      "onUpdate:modelValue": c[1] || (c[1] = (d) => l.value = d),
      class: N([{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }])
    }, {
      default: O(() => [
        E(g(Qa), { class: "po-text-sm po-font-medium po-text-slate-700 po-flex po-items-center po-space-x-1" }, {
          default: O(() => [
            s("span", null, h(e.label), 1),
            e.required ? (p(), u("span", Qu, "*")) : y("", !0),
            e.info !== null ? (p(), u("abbr", {
              key: 1,
              title: e.info,
              class: "po-w-4 po-text-slate-500"
            }, [
              E(g(xu), { class: "po-fill-current" })
            ], 8, Yu)) : y("", !0)
          ]),
          _: 1
        }),
        s("div", Ju, [
          E(g(Ja), {
            class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm",
            onChange: c[0] || (c[0] = (d) => n.value = d.target.value),
            "display-value": r
          }),
          E(g(Ya), { class: "po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-rounded-r-md po-px-2 focus:po-outline-none" }, {
            default: O(() => [
              E(g(yu), {
                class: "po-h-5 po-w-5 po-text-slate-400",
                "aria-hidden": "true"
              })
            ]),
            _: 1
          }),
          g(a).length > 0 ? (p(), j(g(es), {
            key: 0,
            class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
          }, {
            default: O(() => [
              (p(!0), u(T, null, H(g(a), (d) => (p(), j(g(ts), {
                key: d.id,
                value: d.id,
                as: "template"
              }, {
                default: O(({ active: f, selected: b }) => [
                  s("li", {
                    class: N([
                      "po-relative po-cursor-default po-select-none po-py-2 po-pl-3 po-pr-9",
                      f ? "po-bg-mpao-lightblue po-text-white" : "po-text-slate-900"
                    ])
                  }, [
                    s("span", {
                      class: N(["po-block po-truncate", b && "po-font-semibold"])
                    }, h(d.name), 3),
                    b ? (p(), u("span", {
                      key: 0,
                      class: N([
                        "po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-pr-4",
                        f ? "po-text-white" : "po-text-mpao-lightblue"
                      ])
                    }, [
                      E(g(gu), {
                        class: "po-h-5 po-w-5",
                        "aria-hidden": "true"
                      })
                    ], 2)) : y("", !0)
                  ], 2)
                ]),
                _: 2
              }, 1032, ["value"]))), 128))
            ]),
            _: 1
          })) : y("", !0)
        ])
      ]),
      _: 1
    }, 8, ["modelValue", "class"]));
  }
}), tc = { class: "po-text-sm po-font-medium po-text-slate-700 po-cursor-pointer po-select-none po-flex po-items-center po-space-x-1" }, oc = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, lc = {
  name: "PoToggle"
}, w4 = /* @__PURE__ */ Object.assign(lc, {
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
    const o = $(e.modelValue);
    return (n, l) => (p(), j(g(Os), {
      as: "div",
      class: "po-flex po-items-center"
    }, {
      default: O(() => [
        E(g(Ns), {
          modelValue: o.value,
          "onUpdate:modelValue": l[0] || (l[0] = (a) => o.value = a),
          onClick: l[1] || (l[1] = (a) => n.$emit("update:modelValue", !o.value)),
          class: N([
            o.value ? "po-bg-mpao-lightblue" : "po-bg-slate-200",
            "po-relative po-inline-flex po-h-6 po-w-11 po-flex-shrink-0 po-cursor-pointer po-rounded-full po-border-2 po-border-transparent po-transition-colors po-duration-200 po-ease-in-out focus:po-outline-none focus:po-ring-2 focus:po-ring-mpao-lightblue focus:po-ring-offset-2"
          ])
        }, {
          default: O(() => [
            s("span", {
              "aria-hidden": "true",
              class: N([
                o.value ? "po-translate-x-5" : "po-translate-x-0",
                "po-pointer-events-none po-inline-block po-h-5 po-w-5 po-transform po-rounded-full po-bg-white po-shadow po-ring-0 po-transition po-duration-200 po-ease-in-out"
              ])
            }, null, 2)
          ]),
          _: 1
        }, 8, ["modelValue", "class"]),
        E(g(Ls), {
          as: "span",
          class: "po-ml-3"
        }, {
          default: O(() => [
            s("span", tc, [
              s("span", null, h(e.label), 1),
              e.required ? (p(), u("span", oc, "*")) : y("", !0)
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), nc = { class: "po-pt-1 po-space-y-1 po-border-r-2 po-border-slate-200 po-relative" }, ac = ["onClick"], sc = {
  name: "PoSectionMenu"
}, k4 = /* @__PURE__ */ Object.assign(sc, {
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
    return (t, o) => (p(), u("ul", nc, [
      (p(!0), u(T, null, H(e.menuItems, (n) => (p(), u("li", null, [
        s("span", {
          onClick: (l) => t.$emit("link-click", n.link),
          role: "button",
          class: N([
            "po-relative po-cursor-pointer -po-right-[0.15rem] po-py-1 po-border-r-2 hover:po-border-mpao-lightblue po-transition-colors po-duration-200 po-ease-in-out po-flex po-items-center po-space-x-2",
            {
              "po-border-mpao-lightblue po-text-sm po-text-mpao-lightblue": n.link == e.currPageRoute
            },
            {
              "po-border-slate-200 po-text-sm po-text-slate-600": n.link !== e.currPageRoute
            }
          ])
        }, [
          (p(), j(he(n.icon), { class: "po-w-4 po-h-4 po-stroke-current" })),
          s("span", null, h(n.label), 1)
        ], 10, ac)
      ]))), 256))
    ]));
  }
}), rc = { class: "po-relative po-flex po-items-start" }, ic = { class: "po-flex po-h-5 po-items-center" }, pc = ["name", "id", "checked", "disabled", "aria-describedby"], uc = { class: "po-ml-3 po-text-sm" }, cc = ["for"], dc = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, fc = ["id"], vc = { class: "po-sr-only" }, mc = ["id"], hc = {
  name: "PoCheckbox"
}, $4 = /* @__PURE__ */ Object.assign(hc, {
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
    return (t, o) => (p(), u("div", rc, [
      s("div", ic, [
        s("input", Be({
          name: `${e.id}-field`,
          id: e.id,
          checked: e.modelValue,
          disabled: e.disabled,
          "aria-describedby": `${e.id}-description`
        }, t.$attrs, {
          onInput: o[0] || (o[0] = (n) => t.$emit("update:modelValue", n.target.checked)),
          type: "checkbox",
          class: "po-h-4 po-w-4 po-rounded po-border-slate-300 po-text-mpao-lightblue focus:po-ring-mpao-lightblue"
        }), null, 16, pc)
      ]),
      s("div", uc, [
        s("label", {
          for: e.id,
          class: "po-font-medium po-text-slate-600 po-cursor-pointer po-select-none po-flex po-items-center po-space-x-1"
        }, [
          s("span", null, h(e.label), 1),
          e.required ? (p(), u("span", dc, "*")) : y("", !0)
        ], 8, cc),
        e.message ? (p(), u("span", {
          key: 0,
          id: `${e.id}-description`,
          class: "po-text-slate-500 po-cursor-default"
        }, [
          s("span", vc, h(e.label), 1),
          ce(" " + h(e.message), 1)
        ], 8, fc)) : y("", !0)
      ]),
      e.errorMessage !== null ? (p(), u("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, h(e.errorMessage), 9, mc)) : y("", !0)
    ]));
  }
}), bc = { class: "po-grid po-gap-5 po-grid-cols-1 lg:po-grid-cols-2 po-px-6 lg:po-px-8 po-mt-10 po-pb-10" }, gc = { class: "po-flex po-items-start po-space-x-5" }, yc = /* @__PURE__ */ s("img", {
  class: "po-h-10",
  src: "https://pension.gov.mv/asset/image/enlgish_website_logo.svg",
  alt: "Pension Office logo"
}, null, -1), xc = /* @__PURE__ */ s("p", { class: "-po-mt-1 po-text-xs po-text-slate-500" }, " 8th Floor, Allied Building , Chaandhanee Magu, Malé, 20156, Maldives ", -1), Vc = { class: "po-mt-1 po-text-xs po-text-slate-500" }, wc = { class: "po-mt-1 po-text-xs po-text-slate-500 po-flex po-space-x-4" }, kc = {
  href: "https://www.pension.gov.mv",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue"
}, $c = /* @__PURE__ */ s("span", null, "www.pension.gov.mv", -1), _c = {
  href: "mailto:info@pension.gov.mv",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue"
}, Cc = /* @__PURE__ */ s("span", null, "info@pension.gov.mv", -1), Ec = {
  href: "tel:1441",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue"
}, Sc = /* @__PURE__ */ s("span", null, "1441", -1), Bc = { class: "po-flex lg:po-items-end po-flex-col" }, Pc = { class: "-po-mt-1 po-text-xs po-text-slate-500 po-flex po-space-x-4" }, Oc = /* @__PURE__ */ s("a", {
  href: "",
  class: "hover:po-text-mpao-lightblue"
}, "Terms & Conditions", -1), Nc = /* @__PURE__ */ s("a", {
  href: "",
  class: "hover:po-text-mpao-lightblue"
}, "Privacy Policy", -1), Lc = /* @__PURE__ */ s("div", { class: "po-flex po-space-x-2 po-mt-3 lg:po-justify-end" }, [
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
], -1), Ic = /* @__PURE__ */ s("div", {
  "aria-live": "assertive",
  class: "po-pointer-events-none po-fixed po-inset-0 po-flex po-items-start po-px-4 po-py-6 sm:po-p-6 po-z-50"
}, [
  /* @__PURE__ */ s("div", {
    class: "po-flex po-w-full po-flex-col po-items-end po-space-y-4 sm:po-items-end po-pt-[55px]",
    id: "po-notifications-alert"
  })
], -1), Dc = {
  name: "PoFooter"
}, _4 = /* @__PURE__ */ Object.assign(Dc, {
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, n) => (p(), u("div", null, [
      s("section", bc, [
        s("div", gc, [
          yc,
          s("div", null, [
            xc,
            s("p", Vc, " © " + h(new Date().getFullYear()) + " Pension Office, All Rights Reserved. ", 1),
            s("p", wc, [
              s("a", kc, [
                E(g(mi), { class: "po-w-3 po-h-3 po-fill-current" }),
                $c
              ]),
              s("a", _c, [
                E(g(vi), { class: "po-w-3 po-h-3 po-fill-current" }),
                Cc
              ]),
              s("a", Ec, [
                E(g(hi), { class: "po-w-3 po-h-3 po-fill-current" }),
                Sc
              ])
            ])
          ])
        ]),
        s("div", Bc, [
          s("nav", Pc, [
            s("a", {
              href: "#",
              onClick: n[0] || (n[0] = be((l) => o.$emit("button-click", "changelog-button"), ["prevent"])),
              class: "hover:po-text-mpao-lightblue"
            }, "Change logs"),
            Oc,
            Nc
          ]),
          Lc
        ])
      ]),
      Ic
    ]));
  }
}), Ac = {
  key: 0,
  class: "po-flex po-items-start po-space-x-4 po-p-5 po-bg-red-100 po-rounded-md po-mt-5"
}, Tc = { class: "po-text-base po-font-medium po-text-red-700" }, jc = { class: "po-text-sm po-text-red-800 po-list-disc po-ml-5 po-mt-2" }, Mc = {
  key: 1,
  class: "po-flex po-items-start po-space-x-4 po-p-5 po-bg-green-100 po-rounded-md po-mt-5"
}, Rc = { class: "po-text-base po-font-medium po-text-green-700" }, Fc = {
  name: "PoFormStatusMessage"
}, C4 = /* @__PURE__ */ Object.assign(Fc, {
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
    return (t, o) => e.isError ? (p(), u("div", Ac, [
      E(g(st), { class: "po-w-8 po-stroke-red-600 po-stroke-2" }),
      s("div", null, [
        s("span", Tc, h(e.message), 1),
        s("ul", jc, [
          (p(!0), u(T, null, H(e.errorList, (n) => (p(), u("li", null, h(n), 1))), 256))
        ])
      ])
    ])) : (p(), u("div", Mc, [
      E(g(Jn), { class: "po-w-8 po-stroke-green-600 po-stroke-2" }),
      s("div", null, [
        s("span", Rc, h(e.message), 1)
      ])
    ]));
  }
}), zc = { class: "po-bg-white po-relative po-group po-rounded-xl focus-within:po-ring-2 focus-within:po-ring-inset focus-within:po-ring-indigo-500" }, Hc = { class: "po-block po-p-4 po-transition-colors po-duration-75 po-ease-linear" }, qc = { class: "po-flex po-items-start po-space-x-2" }, Uc = { class: "po-flex po-items-start po-space-x-1" }, Gc = { class: "po-block po-text-2xl po-font-light po-text-slate-600" }, Wc = {
  key: 0,
  class: "po-text-sm po-text-green-500 po-font-medium po-pt-1"
}, Kc = { class: "po-text-sm po-tracking-wide po-text-slate-500" }, Zc = {
  name: "PoStatsBlock"
}, E4 = /* @__PURE__ */ Object.assign(Zc, {
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
    return (t, o) => (p(), u("div", {
      class: N(["po-grid po-gap-5", e.numberOfCols])
    }, [
      (p(!0), u(T, null, H(e.items, (n) => (p(), u("div", zc, [
        s("span", Hc, [
          s("div", qc, [
            s("div", null, [
              s("span", {
                class: N([
                  "po-inline-flex po-p-2 po-rounded-md",
                  n.bgColor,
                  n.iconColor
                ])
              }, [
                (p(), j(he(n.icon), { class: "po-w-4 po-h-4" }))
              ], 2)
            ]),
            s("div", null, [
              s("div", Uc, [
                s("span", Gc, h(n.value), 1),
                n.diff ? (p(), u("span", Wc, h(n.diff), 1)) : y("", !0)
              ]),
              s("h4", Kc, h(n.label), 1)
            ])
          ])
        ])
      ]))), 256))
    ], 2));
  }
}), Xc = {
  key: 0,
  class: "po-flex po-space-x-3 po-items-start"
}, Qc = { class: "po-flex po-items-center po-space-x-2" }, Yc = ["datetime"], Jc = { class: "po-text-sm po-font-medium po-text-slate-600" }, ed = ["datetime"], td = { class: "flex" }, od = { class: "po-flex po-pt-3 po-flex-wrap po-max-w-sm" }, ld = ["onClick"], nd = {
  key: 1,
  class: "po-w-full po-text-center"
}, ad = { class: "po-inline-block po-text-sm po-italic po-text-slate-500" }, sd = /* @__PURE__ */ s("span", { class: "po-text-lg po-text-slate-300 po-px-3 po-inline-block" }, "—", -1), rd = ["datetime"], id = {
  name: "PoChatLogItem"
}, S4 = /* @__PURE__ */ Object.assign(id, {
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
    return (t, o) => (p(), u("li", {
      class: N([
        "po-flex po-px-5",
        { "po-justify-end po-items-end po-flex-col": e.item.type === "first" }
      ])
    }, [
      e.item.type !== "message" ? (p(), u("div", Xc, [
        e.item.type !== "first" && e.item.avatar !== "" ? (p(), u("div", {
          key: 0,
          class: "po-shrink-0 po-w-8 po-h-8 po-rounded-full po-p-1 po-bg-contain po-bg-slate-100",
          style: Go({ "background-image": `url(${e.item.avatar})` })
        }, null, 4)) : y("", !0),
        s("div", {
          class: N([
            { "po-pt-1": e.item.type !== "first" },
            {
              "po-flex po-justify-end po-items-end po-flex-col": e.item.type === "first"
            }
          ])
        }, [
          s("span", Qc, [
            e.item.type === "first" ? (p(), u("time", {
              key: 0,
              datetime: e.item.time,
              class: "po-text-xs po-text-slate-400"
            }, h(e.item.time_human), 9, Yc)) : y("", !0),
            s("span", Jc, h(e.item.name), 1),
            e.item.type === "second" ? (p(), u("time", {
              key: 1,
              datetime: e.item.time,
              class: "po-text-xs po-text-slate-400"
            }, h(e.item.time_human), 9, ed)) : y("", !0)
          ]),
          s("div", {
            class: N([
              "po-mt-2 po-space-y-1",
              {
                "po-flex po-justify-end po-items-end po-flex-col": e.item.type === "first"
              }
            ])
          }, [
            te(t.$slots, "message", {}, () => [
              (p(!0), u(T, null, H(e.item.message, (n) => (p(), u("div", td, [
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
                }, h(n), 3)
              ]))), 256))
            ]),
            s("div", od, [
              (p(!0), u(T, null, H(e.item.actions, (n) => (p(), u("button", {
                onClick: (l) => t.$emit("button-click", n.label),
                class: "po-appearance-none po-border po-border-mpao-lightblue po-bg-white hover:po-bg-mpao-lightblue po-px-3 po-py-1 po-mb-2 po-mr-2 po-rounded-lg po-text-slate-500 hover:po-text-sky-100 po-transition-colors po-duration-150 po-ease-in-out po-text-sm po-ring-0 po-outline-none"
              }, h(n.label), 9, ld))), 256))
            ])
          ], 2)
        ], 2)
      ])) : y("", !0),
      e.item.type === "message" ? (p(), u("div", nd, [
        (p(!0), u(T, null, H(e.item.message, (n) => (p(), u("p", ad, [
          ce(h(n) + " ", 1),
          sd,
          s("time", {
            datetime: e.item.time,
            class: "po-text-xs po-text-slate-400 po-inline-block"
          }, h(e.item.time_human), 9, rd)
        ]))), 256))
      ])) : y("", !0)
    ], 2));
  }
}), pd = {
  key: 0,
  class: "po-pointer-events-auto po-w-full po-max-w-sm po-overflow-hidden po-rounded-lg po-bg-mpao-lightblue po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5"
}, ud = { class: "po-p-4" }, cd = { class: "po-flex po-items-start" }, dd = { class: "po-flex-shrink-0" }, fd = { class: "po-ml-3 po-w-0 po-flex-1 po-pt-0.5" }, vd = { class: "po-text-sm po-font-medium po-text-sky-100" }, md = { class: "po-mt-1 po-text-sm po-text-sky-300" }, hd = { class: "po-mt-3 po-flex po-space-x-4" }, bd = { class: "po-ml-4 po-flex po-flex-shrink-0" }, gd = /* @__PURE__ */ s("span", { class: "po-sr-only" }, "Close", -1), yd = {
  name: "PoNotification"
}, B4 = /* @__PURE__ */ Object.assign(yd, {
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
    const o = e, { show: n } = je(o), l = $(!1);
    ne(n, () => {
      l.value = !1, setTimeout(() => {
        l.value = !0;
      }, 100);
    });
    const a = $(!1);
    return ne(l, () => {
      a.value = !1, setTimeout(() => {
        a.value = !0;
      }, 200);
    }), (r, i) => l.value ? (p(), j(ft, {
      key: 0,
      to: "#po-notifications-alert"
    }, [
      E(Oe, {
        "enter-active-class": "po-transform po-ease-out po-duration-300 po-transition",
        "enter-from-class": "po-translate-y-2 po-opacity-0 sm:po-translate-y-0 sm:po-translate-x-2",
        "enter-to-class": "po-translate-y-0 po-opacity-100 sm:po-translate-x-0",
        "leave-active-class": "po-transition po-ease-in po-duration-100",
        "leave-from-class": "po-opacity-100",
        "leave-to-class": "po-opacity-0"
      }, {
        default: O(() => [
          a.value ? (p(), u("div", pd, [
            s("div", ud, [
              s("div", cd, [
                s("div", dd, [
                  te(r.$slots, "icon")
                ]),
                s("div", fd, [
                  s("p", vd, h(e.label), 1),
                  s("p", md, h(e.text), 1),
                  s("div", hd, [
                    s("button", {
                      onClick: i[0] || (i[0] = (c) => r.$emit("button-click", e.buttonLabel)),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-100 hover:po-text-sky-200 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, h(e.buttonLabel), 1),
                    s("button", {
                      onClick: i[1] || (i[1] = (c) => l.value = !1),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-300 hover:po-text-sky-500 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, " Dismiss ")
                  ])
                ]),
                s("div", bd, [
                  s("button", {
                    type: "button",
                    onClick: i[2] || (i[2] = (c) => l.value = !1),
                    class: "po-inline-flex po-rounded-md po-bg-mpao-lightblue po-text-sky-500 hover:po-text-sky-300 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                  }, [
                    gd,
                    E(g(jo), {
                      class: "po-h-5 po-w-5",
                      "aria-hidden": "true"
                    })
                  ])
                ])
              ])
            ])
          ])) : y("", !0)
        ]),
        _: 3
      })
    ])) : y("", !0);
  }
}), xd = /* @__PURE__ */ s("div", { class: "po-fixed po-inset-0" }, null, -1), Vd = { class: "po-fixed po-inset-0 po-overflow-hidden po-bg-black po-bg-opacity-10" }, wd = { class: "po-absolute po-inset-0 po-overflow-hidden" }, kd = { class: "po-pointer-events-none po-fixed po-inset-y-0 po-right-0 po-flex po-max-w-full po-pl-10" }, $d = { class: "po-flex po-h-full po-flex-col po-overflow-y-scroll po-bg-white po-shadow-xl" }, _d = { class: "po-bg-slate-50 po-py-6 po-px-4 sm:po-px-6" }, Cd = { class: "po-flex po-items-center po-justify-between" }, Ed = { class: "po-ml-3 po-flex po-h-7 po-items-center" }, Sd = /* @__PURE__ */ s("span", { class: "po-sr-only" }, "Close panel", -1), Bd = {
  key: 0,
  class: "po-mt-1"
}, Pd = { class: "po-text-sm po-text-slate-500" }, Od = {
  key: 0,
  class: "po-bg-slate-50 po-rounded-b-xl po-shrink-0"
}, Nd = {
  name: "PoSlideover"
}, P4 = /* @__PURE__ */ Object.assign(Nd, {
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
  emits: ["slideover-closed"],
  setup(e, { emit: t }) {
    const o = e, { show: n } = je(o), l = $(!1);
    ne(n, () => {
      l.value = n.value;
    });
    function a() {
      l.value = !1, t("slideover-closed", !0);
    }
    return (r, i) => (p(), j(g(Fe), {
      as: "template",
      show: l.value
    }, {
      default: O(() => [
        E(g(Xe), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: a
        }, {
          default: O(() => [
            xd,
            s("div", Vd, [
              s("div", wd, [
                s("div", kd, [
                  E(g(ke), {
                    as: "template",
                    enter: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "enter-from": "po-translate-x-full",
                    "enter-to": "po-translate-x-0",
                    leave: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "leave-from": "po-translate-x-0",
                    "leave-to": "po-translate-x-full"
                  }, {
                    default: O(() => [
                      E(g(Qe), {
                        class: N([e.maxWidth, "po-pointer-events-auto po-w-screen"])
                      }, {
                        default: O(() => [
                          s("div", $d, [
                            s("div", _d, [
                              s("div", Cd, [
                                E(g(go), { class: "po-text-lg po-font-medium po-text-slate-600" }, {
                                  default: O(() => [
                                    ce(h(e.label), 1)
                                  ]),
                                  _: 1
                                }),
                                s("div", Ed, [
                                  s("button", {
                                    type: "button",
                                    class: "po-rounded-md po-text-slate-500 hover:po-text-mpao-lightblue focus:po-outline-none focus:po-ring-2 focus:po-ring-white",
                                    onClick: a
                                  }, [
                                    Sd,
                                    E(g(Qt), {
                                      class: "po-h-6 po-w-6",
                                      "aria-hidden": "true"
                                    })
                                  ])
                                ])
                              ]),
                              e.description ? (p(), u("div", Bd, [
                                s("p", Pd, h(e.description), 1)
                              ])) : y("", !0)
                            ]),
                            s("div", {
                              class: N([e.bgColor, "po-relative po-grow po-pt-6 po-px-4 sm:po-px-6"])
                            }, [
                              te(r.$slots, "content")
                            ], 2),
                            r.$slots.footer ? (p(), u("div", Od, [
                              te(r.$slots, "footer")
                            ])) : y("", !0)
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
}), Ld = /* @__PURE__ */ s("div", { class: "po-fixed po-inset-0 po-bg-gray-500 po-bg-opacity-25 po-transition-opacity" }, null, -1), Id = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto po-p-4 sm:po-p-6 md:po-p-20" }, Dd = { class: "po-relative" }, Ad = {
  key: 0,
  class: "po-max-h-96 scroll-py-3 po-overflow-y-auto po-p-3"
}, Td = {
  name: "PoCommandPalette"
}, O4 = /* @__PURE__ */ Object.assign(Td, {
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
    const t = e, o = $(""), { show: n } = je(t), l = $(!1);
    ne(n, () => {
      l.value = !1, setTimeout(() => {
        l.value = !0;
      }, 100);
    });
    function a(r) {
      r.ctrlKey && r.key === "b" && (l.value = !0);
    }
    return W(() => {
      window.addEventListener("keyup", a);
    }), Zt(() => {
      window.removeEventListener("keyup", a);
    }), (r, i) => (p(), j(g(Fe), {
      show: l.value,
      as: "template",
      onAfterLeave: i[2] || (i[2] = (c) => o.value = ""),
      appear: ""
    }, {
      default: O(() => [
        E(g(Xe), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: i[1] || (i[1] = (c) => l.value = !1)
        }, {
          default: O(() => [
            E(g(ke), {
              as: "template",
              enter: "po-ease-out po-duration-300",
              "enter-from": "po-opacity-0",
              "enter-to": "po-opacity-100",
              leave: "po-ease-in po-duration-200",
              "leave-from": "po-opacity-100",
              "leave-to": "po-opacity-0"
            }, {
              default: O(() => [
                Ld
              ]),
              _: 1
            }),
            s("div", Id, [
              E(g(ke), {
                as: "template",
                enter: "po-ease-out po-duration-300",
                "enter-from": "po-opacity-0 po-scale-95",
                "enter-to": "po-opacity-100 po-scale-100",
                leave: "po-ease-in po-duration-200",
                "leave-from": "po-opacity-100 po-scale-100",
                "leave-to": "po-opacity-0 po-scale-95"
              }, {
                default: O(() => [
                  E(g(Qe), { class: "po-mx-auto po-max-w-xl po-transform po-divide-y po-divide-gray-100 po-overflow-hidden po-rounded-xl po-bg-white po-shadow-2xl po-ring-1 po-ring-black po-ring-opacity-5 po-transition-all" }, {
                    default: O(() => [
                      s("div", Dd, [
                        E(g(Vu), {
                          class: "po-pointer-events-none po-absolute po-top-3.5 po-left-4 po-h-5 po-w-5 po-text-gray-400",
                          "aria-hidden": "true"
                        }),
                        s("input", {
                          type: "text",
                          name: "",
                          class: "po-h-12 po-w-full po-border-0 po-bg-transparent po-pl-11 po-pr-4 po-text-gray-800 po-placeholder-gray-400 focus:po-ring-0 sm:po-text-sm",
                          placeholder: "Search...",
                          onChange: i[0] || (i[0] = (c) => o.value = c.target.value)
                        }, null, 32)
                      ]),
                      e.showContent ? (p(), u("div", Ad, [
                        te(r.$slots, "content")
                      ])) : y("", !0)
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
}), jd = /* @__PURE__ */ s("div", { class: "po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity" }, null, -1), Md = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto" }, Rd = { class: "po-flex po-min-h-full po-items-start po-justify-center po-p-4 po-text-center sm:po-p-0" }, Fd = { class: "po-p-5" }, zd = { class: "po-text-center po-space-y-3" }, Hd = { key: 1 }, qd = { class: "po-text-sm po-text-gray-600" }, Ud = { class: "po-border-t po-border-slate-200 po-flex po-divide-x po-divide-slate-200" }, Gd = {
  name: "PoAlert"
}, N4 = /* @__PURE__ */ Object.assign(Gd, {
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
    const o = e, { show: n } = je(o), l = $(!1);
    ne(n, () => {
      l.value = n.value;
    });
    function a() {
      l.value = !1, t("alert-closed", !0);
    }
    return (r, i) => (p(), j(g(Fe), {
      as: "template",
      show: l.value
    }, {
      default: O(() => [
        E(g(Xe), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: a
        }, {
          default: O(() => [
            E(g(ke), {
              as: "template",
              enter: "po-ease-out po-duration-300",
              "enter-from": "po-opacity-0",
              "enter-to": "po-opacity-100",
              leave: "po-ease-in po-duration-200",
              "leave-from": "po-opacity-100",
              "leave-to": "po-opacity-0"
            }, {
              default: O(() => [
                jd
              ]),
              _: 1
            }),
            s("div", Md, [
              s("div", Rd, [
                E(g(ke), {
                  as: "template",
                  enter: "po-ease-out po-duration-300",
                  "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                  "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                  leave: "po-ease-in po-duration-200",
                  "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                  "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                }, {
                  default: O(() => [
                    E(g(Qe), { class: "po-relative po-transform po-overflow-hidden po-rounded-lg po-bg-white po-text-left po-shadow-xl po-transition-all sm:po-my-8 sm:po-w-full sm:po-max-w-sm" }, {
                      default: O(() => [
                        s("div", Fd, [
                          s("div", zd, [
                            e.alertTitle !== "" ? (p(), j(g(go), {
                              key: 0,
                              as: "h3",
                              class: "po-text-lg po-font-medium po-leading-6 po-text-gray-900"
                            }, {
                              default: O(() => [
                                ce(h(e.alertTitle), 1)
                              ]),
                              _: 1
                            })) : y("", !0),
                            e.alertDescription !== "" ? (p(), u("div", Hd, [
                              s("p", qd, h(e.alertDescription), 1)
                            ])) : y("", !0)
                          ])
                        ]),
                        s("div", Ud, [
                          s("button", {
                            onClick: a,
                            class: "po-text-sm po-bg-white po-text-slate-500 hover:po-bg-slate-50 po-transition-colors po-duration-100 po-ease-out po-font-medium po-py-3 po-px-5 po-w-1/2 focus:po-ring-0"
                          }, h(e.cancelBtnLabel), 1),
                          s("button", {
                            onClick: i[0] || (i[0] = (c) => {
                              r.$emit("button-click", "ok"), a();
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
}), Wd = {
  key: 0,
  class: "po-col-span-2 po-relative po-mt-5"
}, Kd = /* @__PURE__ */ s("span", {
  class: "po-absolute po-top-0 po-left-1 po--ml-px po-h-[calc(100%-7px)] po-w-0.5 po-bg-gray-200",
  "aria-hidden": "true"
}, null, -1), Zd = { class: "po-relative po-space-y-5" }, Xd = { class: "po-flex po-space-x-2 po-items-start" }, Qd = { class: "log-item" }, Yd = { key: 0 }, Jd = {
  key: 0,
  class: "po-text-slate-500 po-text-xs"
}, e1 = {
  key: 1,
  class: "po-text-center po-py-10"
}, t1 = { class: "po-text-sm po-text-slate-500" }, o1 = {
  name: "PoLogs"
}, L4 = /* @__PURE__ */ Object.assign(o1, {
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
    return (t, o) => (p(), u("div", null, [
      e.items && e.items.length > 0 ? (p(), u("div", Wd, [
        Kd,
        s("div", Zd, [
          (p(!0), u(T, null, H(e.items, (n, l) => (p(), u("div", Xd, [
            s("p", {
              class: N([
                "po-rounded-full po-w-2 po-h-2 border-1 po-border-white po-shrink-0",
                { "po-bg-mpao-orange": l !== e.items.length - 1 },
                ,
                { "po-bg-slate-400": l == e.items.length - 1 }
              ])
            }, null, 2),
            s("div", Qd, [
              s("span", null, [
                ce(h(n.label) + " on " + h(n.date) + " " + h(n.by && n.by !== "" ? "by" : "") + " ", 1),
                n.by && n.by !== "" ? (p(), u("span", Yd, h(n.by), 1)) : y("", !0)
              ]),
              n.description && n.description !== "" ? (p(), u("blockquote", Jd, ' "' + h(n.description) + '" ', 1)) : y("", !0)
            ])
          ]))), 256))
        ])
      ])) : (p(), u("div", e1, [
        s("span", t1, h(e.emptyLabel), 1)
      ]))
    ]));
  }
}), l1 = {
  key: 0,
  role: "list",
  class: "po-divide-y po-divide-gray-200 po-rounded-md po-border po-border-gray-200 po-mt-5"
}, n1 = { class: "po-flex po-items-center po-justify-between po-py-3 po-pl-3 po-pr-4 po-text-sm" }, a1 = { class: "po-flex po-w-0 po-flex-1 po-items-center" }, s1 = { class: "po-ml-2 po-w-0 po-flex-1 po-truncate" }, r1 = { class: "po-ml-4 po-flex-shrink-0" }, i1 = ["onClick"], p1 = {
  key: 1,
  class: "po-py-10"
}, u1 = { class: "po-text-sm po-text-slate-500" }, c1 = {
  name: "PoDownloadFileList"
}, I4 = /* @__PURE__ */ Object.assign(c1, {
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
    return (o, n) => (p(), u("div", null, [
      e.files && e.files.length > 0 ? (p(), u("ul", l1, [
        (p(!0), u(T, null, H(e.files, (l) => (p(), u("li", n1, [
          s("div", a1, [
            E(g(Xt), {
              class: "po-h-5 po-w-5 po-flex-shrink-0 po-text-gray-400",
              "aria-hidden": "true"
            }),
            s("span", s1, h(l.label), 1)
          ]),
          s("div", r1, [
            s("a", {
              href: "#",
              onClick: be((a) => o.$emit("button-click", l.label), ["prevent"]),
              class: "po-font-medium po-text-mpao-lightblue hover:po-text-indigo-500"
            }, h(e.linkLabel), 9, i1)
          ])
        ]))), 256))
      ])) : (p(), u("div", p1, [
        s("span", u1, h(e.emptyLabel), 1)
      ]))
    ]));
  }
}), Mo = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, l] of t)
    o[n] = l;
  return o;
}, d1 = {
  name: "PoContentArea"
}, f1 = { class: "shell-content--area po-max-w-[1370px]" };
function v1(e, t, o, n, l, a) {
  return p(), u("section", f1, [
    te(e.$slots, "default")
  ]);
}
const D4 = /* @__PURE__ */ Mo(d1, [["render", v1]]), m1 = {
  name: "AnimatedLogo"
}, h1 = /* @__PURE__ */ Wo('<div><svg class="po-stroke-mpao-blue po-w-16 animated-logo" viewBox="0 0 62 55" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.76292 17.8572L7.7 17.9704V18.0682C6.87397 19.526 6.23618 20.649 5.58241 21.4779C4.93472 22.299 4.30505 22.7864 3.51417 23.0053C3.46261 23.0112 3.41718 23.0206 3.39088 23.026C3.35663 23.0331 3.31491 23.0425 3.27694 23.0511C3.25988 23.055 3.24357 23.0587 3.22903 23.0619C3.1106 23.0882 3.03712 23.1 3 23.1H2.93844L2.89561 23.1107L15.9876 0.600006H19.1308C17.2397 1.92747 16.1556 3.83665 15.5371 5.73245C14.8359 7.88203 14.7198 10.0514 14.7027 11.4258C13.1737 11.6033 11.0729 12.4434 9.38038 15.128C8.77075 16.0431 8.26353 16.9561 7.76713 17.8496L7.76292 17.8572Z"></path><path d="M48.1818 11.3241C48.047 8.39742 47.5389 6.05982 46.5472 4.07639C45.8153 2.61266 44.8203 1.39271 43.5945 0.5H46.8113L59.8583 23.0959C59.8303 23.0912 59.7891 23.0819 59.7213 23.0649C59.7166 23.0638 59.7117 23.0625 59.7066 23.0612C59.6302 23.042 59.5099 23.0118 59.3765 23.0027C58.59 22.7825 57.9627 22.2958 57.3176 21.4779C56.6586 20.6423 56.0158 19.508 55.1801 18.0331L55.1413 17.9647C54.8861 17.4553 54.6068 16.973 54.3362 16.5054L54.3327 16.4995C54.0565 16.0225 53.7893 15.5605 53.5472 15.0764L53.5333 15.0485L53.516 15.0226C51.7283 12.3411 49.7115 11.4988 48.1818 11.3241Z"></path><path d="M9.28397 39.6773C11.0717 42.3589 13.0885 43.2011 14.6182 43.3759C14.753 46.3026 15.2611 48.6402 16.2528 50.6236C16.9991 52.1163 17.9653 53.2992 19.1863 54.2H15.7881L2.74125 31.699C2.76073 31.6996 2.78031 31.7 2.8 31.7C2.89335 31.7 2.97474 31.7149 3.07903 31.7381C3.08854 31.7402 3.09897 31.7426 3.11023 31.7452C3.18647 31.7626 3.30082 31.7888 3.42319 31.7972C4.20888 32.0178 4.86081 32.5271 5.52047 33.3603C6.20216 34.2214 6.85697 35.382 7.66164 36.8405C8.26116 37.9396 8.76739 38.8512 9.276 39.665L9.27989 39.6712L9.28397 39.6773Z"></path><path d="M55.124 36.865L55.1331 36.8504L55.1412 36.8353C55.9431 35.3316 56.5997 34.1683 57.2697 33.307C57.9146 32.4778 58.5471 31.9616 59.2949 31.6961C59.4179 31.6866 59.5418 31.6616 59.6287 31.6442C59.6354 31.6428 59.6418 31.6415 59.6481 31.6403C59.719 31.6261 59.772 31.616 59.8123 31.6095L46.8115 54.1H43.8753C45.7283 52.7465 46.7867 50.8277 47.3889 48.9394C48.064 46.8226 48.1795 44.7058 48.1971 43.3742C49.7262 43.1967 51.8271 42.3567 53.5196 39.6719C53.8327 39.2016 54.1164 38.6849 54.3777 38.1995C54.4112 38.1375 54.4442 38.076 54.4768 38.0152C54.7049 37.5906 54.9148 37.1996 55.124 36.865Z"></path><path d="M32.2763 51.5708L32.2653 51.5582L32.2536 51.5465C32.0661 51.359 31.7413 51.2 31.4 51.2C31.3949 51.2 31.3894 51.2 31.3835 51.2C31.2956 51.1998 31.1323 51.1993 30.9751 51.2442C30.7932 51.2962 30.6132 51.4082 30.4904 51.6086C29.1941 53.0706 27.544 53.8 25.5 53.8C22.8209 53.8 20.828 52.9218 19.4532 51.2005C18.1148 49.5247 17.3123 46.988 17.1201 43.5109C18.6883 43.1579 19.8601 42.2673 20.5004 41.6896C20.5136 44.8271 20.8579 46.8152 21.6737 48.0181C22.5558 49.319 23.9045 49.6 25.5 49.6C27.4335 49.6 28.5187 48.2893 29.0946 46.9901C29.6604 45.7138 29.7966 44.3347 29.7999 43.8193C29.8943 42.5846 30.6602 41.8 31.5 41.8H31.5778C32.4558 41.8842 33.2 42.7102 33.2 43.9C33.2 45.6119 33.5619 47.0065 34.2986 47.9982C35.0485 49.0077 36.1459 49.544 37.4792 49.5996L37.4896 49.6H37.5C39.2304 49.6 40.5973 49.3258 41.4454 48.0081C41.849 47.3811 42.1078 46.5565 42.2692 45.5056C42.4311 44.4518 42.5 43.1353 42.5 41.5V24.4455L45.9 21.8182V41.5C45.9 41.4958 45.8996 41.5001 45.8978 41.519C45.8959 41.5381 45.8927 41.5719 45.887 41.6267L45.8842 41.6541C45.8752 41.7406 45.8636 41.8524 45.8521 41.9797C45.8264 42.2614 45.8 42.6283 45.8 43V43.9V43.9029V43.9059V43.9088V43.9117V43.9146V43.9175V43.9205V43.9234V43.9263V43.9292V43.9321V43.935V43.9379V43.9408V43.9437V43.9466V43.9495V43.9524V43.9553V43.9581V43.961V43.9639V43.9668V43.9696V43.9725V43.9754V43.9783V43.9811V43.984V43.9868V43.9897V43.9926V43.9954V43.9983V44.0011V44.004V44.0068V44.0096V44.0125V44.0153V44.0181V44.021V44.0238V44.0266V44.0295V44.0323V44.0351V44.0379V44.0407V44.0435V44.0463V44.0492V44.052V44.0548V44.0576V44.0603V44.0631V44.0659V44.0687V44.0715V44.0743V44.0771V44.0798V44.0826V44.0854V44.0882V44.0909V44.0937V44.0965V44.0992V44.102V44.1047V44.1075V44.1102V44.113V44.1157V44.1185V44.1212V44.1239V44.1267V44.1294V44.1321V44.1349V44.1376V44.1403V44.143V44.1457V44.1484V44.1512V44.1539V44.1566V44.1593V44.162V44.1647V44.1674V44.17V44.1727V44.1754V44.1781V44.1808V44.1835V44.1861V44.1888V44.1915V44.1941V44.1968V44.1995V44.2021V44.2048V44.2074V44.2101V44.2127V44.2154V44.218V44.2207V44.2233V44.2259V44.2285V44.2312V44.2338V44.2364V44.239V44.2417V44.2443V44.2469V44.2495V44.2521V44.2547V44.2573V44.2599V44.2625V44.2651V44.2677V44.2702V44.2728V44.2754V44.278V44.2806V44.2831V44.2857V44.2882V44.2908V44.2934V44.2959V44.2985V44.301V44.3036V44.3061V44.3087V44.3112V44.3137V44.3163V44.3188V44.3213V44.3238V44.3264V44.3289V44.3314V44.3339V44.3364V44.3389V44.3414V44.3439V44.3464V44.3489V44.3514V44.3539V44.3564V44.3588V44.3613V44.3638V44.3663V44.3687V44.3712V44.3737V44.3761V44.3786V44.381V44.3835V44.3859V44.3884V44.3908V44.3932V44.3957V44.3981V44.4005V44.403V44.4054V44.4078V44.4102V44.4126V44.415V44.4174V44.4199V44.4223V44.4247V44.427V44.4294V44.4318V44.4342V44.4366V44.439V44.4413V44.4437V44.4461V44.4484V44.4508V44.4532V44.4555V44.4579V44.4602V44.4626V44.4649V44.4672V44.4696V44.4719V44.4742V44.4766V44.4789V44.4812V44.4835V44.4858V44.4882V44.4905V44.4928V44.4951V44.4974V44.4997V44.5019V44.5042V44.5065V44.5088V44.5111V44.5133V44.5156V44.5179V44.5201V44.5224V44.5247V44.5269V44.5292V44.5314V44.5337V44.5359V44.5381V44.5404V44.5426V44.5448V44.547V44.5493V44.5515V44.5537V44.5559V44.5581V44.5603V44.5625V44.5647V44.5669V44.5691V44.5713V44.5734V44.5756V44.5778V44.58V44.5821V44.5843V44.5865V44.5886V44.5908V44.5929V44.5951V44.5972V44.5994V44.6015V44.6036V44.6058V44.6079V44.61V44.6121V44.6142V44.6164V44.6185V44.6206V44.6227V44.6248V44.6269V44.6289V44.631V44.6331V44.6352V44.6373V44.6393V44.6414V44.6435V44.6455V44.6476V44.6497V44.6517V44.6538V44.6558V44.6578V44.6599V44.6619V44.6639V44.666V44.668V44.67V44.672V44.674V44.676V44.678V44.68V44.682V44.684V44.686V44.688V44.69V44.692V44.6939V44.6959V44.6979V44.6998V44.7018V44.7037V44.7057V44.7076V44.7096V44.7115V44.7135V44.7154V44.7173V44.7193V44.7212V44.7231V44.725V44.7269V44.7288V44.7307V44.7326V44.7345V44.7364V44.7383V44.7402V44.7421V44.7439V44.7458V44.7477V44.7495V44.7514V44.7533V44.7551V44.757V44.7588V44.7606V44.7625V44.7643V44.7661V44.768V44.7698V44.7716V44.7734V44.7752V44.777V44.7788V44.7806V44.7824V44.7842V44.786V44.7878V44.7896V44.7914V44.7931V44.7949V44.7967V44.7984V44.8002V44.8019V44.8037V44.8054V44.8071V44.8089V44.8106V44.8123V44.8141V44.8158V44.8175V44.8192V44.8209V44.8226V44.8243V44.826V44.8277V44.8294V44.8311V44.8328V44.8344V44.8361V44.8378V44.8394V44.8411V44.8427V44.8444V44.846V44.8477V44.8493V44.851V44.8526V44.8542V44.8558V44.8575V44.8591V44.8607V44.8623V44.8639V44.8655V44.8671V44.8687V44.8702V44.8718V44.8734V44.875V44.8765V44.8781V44.8797V44.8812V44.8828V44.8843V44.8859V44.8874V44.8889V44.8905V44.892V44.8935V44.895V44.8965V44.898V44.8996V44.9011V44.9025V44.904V44.9055V44.907V44.9085V44.91V44.9114V44.9129V44.9144V44.9158V44.9173V44.9187V44.9202V44.9216V44.923V44.9245V44.9259V44.9273V44.9288V44.9302V44.9316V44.933V44.9344V44.9358V44.9372V44.9386V44.9399V44.9413V44.9427V44.9441V44.9454V44.9468V44.9482V44.9495V44.9509V44.9522V44.9535V44.9549V44.9562V44.9575V44.9589V44.9602V44.9615V44.9628V44.9641V44.9654V44.9667V44.968V44.9693V44.9706V44.9718V44.9731V44.9744V44.9757V44.9769V44.9782V44.9794V44.9807V44.9819V44.9832V44.9844V44.9856V44.9868V44.9881V44.9893V44.9905V44.9917V44.9929V44.9941V44.9953V44.9965V44.9977V44.9988V45V45.1V45.1006V45.1012V45.1017V45.1023V45.1029V45.1035V45.104V45.1046V45.1052V45.1057V45.1063V45.1069V45.1074V45.108V45.1085V45.1091V45.1096V45.1102V45.1107V45.1113V45.1118V45.1123V45.1129V45.1134V45.1139V45.1145V45.115V45.1155V45.1161V45.1166V45.1171V45.1176V45.1181V45.1186V45.1191V45.1196V45.1202V45.1207V45.1212V45.1217V45.1222V45.1226V45.1231V45.1236V45.1241V45.1246V45.1251V45.1256V45.1261V45.1265V45.127V45.1275V45.128V45.1284V45.1289V45.1294V45.1298V45.1303V45.1307V45.1312V45.1317V45.1321V45.1326V45.133V45.1335V45.1339V45.1343V45.1348V45.1352V45.1357V45.1361V45.1365V45.137V45.1374V45.1378V45.1383V45.1387V45.1391V45.1395V45.1399V45.1404V45.1408V45.1412V45.1416V45.142V45.1424V45.1428V45.1432V45.1436V45.144V45.1444V45.1448V45.1452V45.1456V45.146V45.1464V45.1468V45.1471V45.1475V45.1479V45.1483V45.1487V45.149V45.1494V45.1498V45.1501V45.1505V45.1509V45.1512V45.1516V45.152V45.1523V45.1527V45.153V45.1534V45.1537V45.1541V45.1544V45.1548V45.1551V45.1555V45.1558V45.1561V45.1565V45.1568V45.1572V45.1575V45.1578V45.1581V45.1585V45.1588V45.1591V45.1594V45.1598V45.1601V45.1604V45.1607V45.161V45.1613V45.1616V45.162V45.1623V45.1626V45.1629V45.1632V45.1635V45.1638V45.1641V45.1644V45.1647V45.165V45.1652V45.1655V45.1658V45.1661V45.1664V45.1667V45.167V45.1672V45.1675V45.1678V45.1681V45.1683V45.1686V45.1689V45.1691V45.1694V45.1697V45.1699V45.1702V45.1705V45.1707V45.171V45.1712V45.1715V45.1717V45.172V45.1722V45.1725V45.1727V45.173V45.1732V45.1735V45.1737V45.174V45.1742V45.1744V45.1747V45.1749V45.1751V45.1753C45.5039 48.1507 44.6544 50.2924 43.3031 51.6899C41.9582 53.0807 40.0524 53.8 37.5 53.8C35.4235 53.8 33.5685 53.0476 32.2763 51.5708Z"></path><path d="M22.8 23.2538V18.2178L29.3909 23.307L26.1939 25.8645L22.8 23.2538Z"></path><path d="M16.7 20.2V19.7H16.5V18.8V10.858C16.5042 10.8478 16.5096 10.8348 16.5142 10.8232C16.5488 10.7368 16.5963 10.6012 16.5998 10.4209C16.8474 7.03069 17.6799 4.61275 19.0737 3.04468C20.4543 1.49155 22.4511 0.699997 25.2 0.699997C27.2568 0.699997 29.1263 1.53906 30.5352 3.04197L30.5407 3.04785L30.5464 3.05355C30.7614 3.26854 31.0508 3.35 31.3 3.35C31.5492 3.35 31.8386 3.26854 32.0536 3.05355L32.0646 3.04251L32.0749 3.03081C33.4779 1.4408 35.1402 0.699997 37.3 0.699997C40.0769 0.699997 42.1441 1.62655 43.5571 3.42174C44.934 5.17104 45.7393 7.80743 45.886 11.3874C44.0184 11.8028 42.6345 12.9721 42.1 13.4936V13.2C42.1 10.0544 41.7835 8.06299 40.9925 6.86242C40.1497 5.58316 38.8495 5.3 37.3 5.3C35.4114 5.3 34.3769 6.59229 33.8399 7.85422C33.3055 9.11015 33.2 10.457 33.2 10.9C33.2 12.2634 32.2859 13.1 31.3 13.1H31.2204C30.2388 13.0141 29.4 12.0845 29.4 10.8C29.4 9.19015 29.0639 7.84653 28.3661 6.89234C27.6525 5.91665 26.5974 5.4 25.3 5.4C23.6267 5.4 22.3017 5.64608 21.4896 6.93319C21.1052 7.5425 20.863 8.34586 20.7131 9.3714C20.5626 10.4004 20.5 11.6909 20.5 13.3V30.4541L16.7 33.3833V20.2Z"></path><path d="M40.1 31.5462V36.5799L33.4225 31.4049L36.6974 28.9288L40.1 31.5462Z"></path><mask id="path-9-inside-1" fill="white"><path d="M58.7 30.1C58.9 30 59.5 30 59.8 29.9C60.9 29.8 61.8 28.7 61.8 27.4C61.8 26.1 60.9 25 59.8 24.9C59.7 24.9 59.5 24.9 59.4 24.8C59.3 24.8 59.2 24.8 59.1 24.7C59.1 24.7 59.1 24.7 59 24.7C58.6 24.6 58.1 24.4 57.7 24.1C57.7 24.1 57.7 24.1 57.6 24C56.1 23.1 55 21.2 53.6 18.7C53.1 17.8 52.6 16.9 52 16C50.5 13.7 48.9 13.1 47.8 13C47.7 13 47.6 13 47.5 13H47.3C47.1 13 46.9 13 46.9 13C45.2 13.2 44 14.3 43.6 14.8L25.2 29.1C25.2 29.1 25.2 29.1 25.1 29.2L23 30.8L16.8 35.5L16.4 35.9C16.4 35.9 16.4 35.9 16.3 35.9C16 36.1 15.7 36.3 15.4 36.3C15.1 36.3 14.9 36.2 14.7 36.1C14.5 35.9 14.4 35.8 14.3 35.5C13.9 34.8 13.4 34.1 13 33.3V33.1C12.2 31.7 11.3 30 10.1 28.6C10.1 28.6 10.1 28.6 10.1 28.5L10 28.4C9.9 28.3 9.9 28.3 9.8 28.2C9.8 28.2 9.8 28.2 9.7 28.1L9.2 27.5C9.2 27.5 9.2 27.5 9.1 27.5C9 27.3 9 27.1 9.1 27L9.6 26.5C10.9 25 11.9 23.2 12.8 21.6V21.5C13.2 20.7 13.7 19.9 14.2 19.1C14.4 18.8 14.6 18.6 14.7 18.5V13.1C13.6 13.2 12 13.9 10.6 16C10 16.9 9.5 17.8 9 18.7C7.8 20.9 6.8 22.5 5.6 23.5C4.8 24.1 4 24.4 3.5 24.6C3.5 24.6 3.5 24.6 3.4 24.6C3.3 24.6 3.1 24.7 3 24.7C2.9 24.7 2.9 24.7 2.8 24.7C2.7 24.7 2.7 24.7 2.7 24.7H2.6H2.5C2.3 24.7 2.2 24.8 2.1 24.8C2 24.8 2 24.8 2 24.9C1.7 25.1 1.4 25.3 1.2 25.6C1.2 25.7 1.1 25.7 1.1 25.8V25.9L0.999997 26.1C0.999997 26.2 0.999997 26.2 0.899997 26.3C0.899997 26.4 0.899997 26.4 0.799997 26.5C0.799997 26.6 0.799997 26.7 0.699997 26.7C0.699997 26.8 0.699997 26.9 0.699997 26.9C0.699997 27 0.699997 27.1 0.699997 27.1C0.699997 27.2 0.699997 27.2 0.699997 27.3C0.699997 27.4 0.699997 27.5 0.699997 27.5C0.699997 27.6 0.699997 27.7 0.699997 27.7C0.699997 27.8 0.699997 27.9 0.799997 27.9V28V28.1C0.799997 28.2 0.799997 28.2 0.899997 28.2L0.999997 28.4C0.999997 28.5 1.1 28.5 1.1 28.5C1.1 28.5 1.1 28.5 1.1 28.6C1.2 28.7 1.3 28.9 1.5 29C1.6 29 1.6 29.1 1.7 29.1C1.7 29.1 1.8 29.1 1.8 29.2C1.8 29.2 1.8 29.2 1.9 29.2C2 29.3 2.2 29.3 2.3 29.4C2.4 29.4 2.4 29.4 2.4 29.4L2.9 29.5C3.1 29.5 3.2 29.6 3.4 29.6C4.2 29.8 4.7 30.2 4.8 30.2C6.4 31.2 7.5 33 8.9 35.5C9.5 36.6 10 37.4 10.5 38.2C11.9 40.3 13.4 41 14.4 41.1C14.5 41.1 14.5 41.1 14.6 41.1C14.7 41.1 14.8 41.1 14.8 41.1C15 41.1 15.2 41.1 15.5 41.1H15.6C17.2 40.8 18.5 39.8 18.9 39.3L19 39.2L19.8 38.6C19.8 38.6 19.9 38.5 20 38.5L30.2 30.6L41.3 22L46.5 18H46.6C46.7 18 46.9 17.9 47 17.9C47.4 17.9 47.8 18.1 48.1 18.6L48.5 19.2C48.8 19.7 49.2 20.3 49.5 20.9V21C50.1 22.1 50.8 23.4 51.7 24.6C51.7 24.6 51.7 24.7 51.8 24.7C52.1 25.1 52.4 25.5 52.7 25.8C52.7 25.8 52.8 25.8 52.8 25.9C53 26.1 53.1 26.3 53.3 26.4C53.4 26.5 53.4 26.7 53.3 26.9C52 28.5 50.4 31.1 49.6 32.4V32.5C49.2 33.2 48.7 34.1 48.2 34.9C48 35.2 47.8 35.4 47.7 35.5V40.9C48.8 40.8 50.4 40.1 51.8 37.9C52.4 37 52.9 36 53.4 35.2C53.5 35 53.7 34.7 53.8 34.5C55.2 33 56.4 30.9 58.7 30.1Z"></path></mask><path d="M58.7 30.1C58.9 30 59.5 30 59.8 29.9C60.9 29.8 61.8 28.7 61.8 27.4C61.8 26.1 60.9 25 59.8 24.9C59.7 24.9 59.5 24.9 59.4 24.8C59.3 24.8 59.2 24.8 59.1 24.7C59.1 24.7 59.1 24.7 59 24.7C58.6 24.6 58.1 24.4 57.7 24.1C57.7 24.1 57.7 24.1 57.6 24C56.1 23.1 55 21.2 53.6 18.7C53.1 17.8 52.6 16.9 52 16C50.5 13.7 48.9 13.1 47.8 13C47.7 13 47.6 13 47.5 13H47.3C47.1 13 46.9 13 46.9 13C45.2 13.2 44 14.3 43.6 14.8L25.2 29.1C25.2 29.1 25.2 29.1 25.1 29.2L23 30.8L16.8 35.5L16.4 35.9C16.4 35.9 16.4 35.9 16.3 35.9C16 36.1 15.7 36.3 15.4 36.3C15.1 36.3 14.9 36.2 14.7 36.1C14.5 35.9 14.4 35.8 14.3 35.5C13.9 34.8 13.4 34.1 13 33.3V33.1C12.2 31.7 11.3 30 10.1 28.6C10.1 28.6 10.1 28.6 10.1 28.5L10 28.4C9.9 28.3 9.9 28.3 9.8 28.2C9.8 28.2 9.8 28.2 9.7 28.1L9.2 27.5C9.2 27.5 9.2 27.5 9.1 27.5C9 27.3 9 27.1 9.1 27L9.6 26.5C10.9 25 11.9 23.2 12.8 21.6V21.5C13.2 20.7 13.7 19.9 14.2 19.1C14.4 18.8 14.6 18.6 14.7 18.5V13.1C13.6 13.2 12 13.9 10.6 16C10 16.9 9.5 17.8 9 18.7C7.8 20.9 6.8 22.5 5.6 23.5C4.8 24.1 4 24.4 3.5 24.6C3.5 24.6 3.5 24.6 3.4 24.6C3.3 24.6 3.1 24.7 3 24.7C2.9 24.7 2.9 24.7 2.8 24.7C2.7 24.7 2.7 24.7 2.7 24.7H2.6H2.5C2.3 24.7 2.2 24.8 2.1 24.8C2 24.8 2 24.8 2 24.9C1.7 25.1 1.4 25.3 1.2 25.6C1.2 25.7 1.1 25.7 1.1 25.8V25.9L0.999997 26.1C0.999997 26.2 0.999997 26.2 0.899997 26.3C0.899997 26.4 0.899997 26.4 0.799997 26.5C0.799997 26.6 0.799997 26.7 0.699997 26.7C0.699997 26.8 0.699997 26.9 0.699997 26.9C0.699997 27 0.699997 27.1 0.699997 27.1C0.699997 27.2 0.699997 27.2 0.699997 27.3C0.699997 27.4 0.699997 27.5 0.699997 27.5C0.699997 27.6 0.699997 27.7 0.699997 27.7C0.699997 27.8 0.699997 27.9 0.799997 27.9V28V28.1C0.799997 28.2 0.799997 28.2 0.899997 28.2L0.999997 28.4C0.999997 28.5 1.1 28.5 1.1 28.5C1.1 28.5 1.1 28.5 1.1 28.6C1.2 28.7 1.3 28.9 1.5 29C1.6 29 1.6 29.1 1.7 29.1C1.7 29.1 1.8 29.1 1.8 29.2C1.8 29.2 1.8 29.2 1.9 29.2C2 29.3 2.2 29.3 2.3 29.4C2.4 29.4 2.4 29.4 2.4 29.4L2.9 29.5C3.1 29.5 3.2 29.6 3.4 29.6C4.2 29.8 4.7 30.2 4.8 30.2C6.4 31.2 7.5 33 8.9 35.5C9.5 36.6 10 37.4 10.5 38.2C11.9 40.3 13.4 41 14.4 41.1C14.5 41.1 14.5 41.1 14.6 41.1C14.7 41.1 14.8 41.1 14.8 41.1C15 41.1 15.2 41.1 15.5 41.1H15.6C17.2 40.8 18.5 39.8 18.9 39.3L19 39.2L19.8 38.6C19.8 38.6 19.9 38.5 20 38.5L30.2 30.6L41.3 22L46.5 18H46.6C46.7 18 46.9 17.9 47 17.9C47.4 17.9 47.8 18.1 48.1 18.6L48.5 19.2C48.8 19.7 49.2 20.3 49.5 20.9V21C50.1 22.1 50.8 23.4 51.7 24.6C51.7 24.6 51.7 24.7 51.8 24.7C52.1 25.1 52.4 25.5 52.7 25.8C52.7 25.8 52.8 25.8 52.8 25.9C53 26.1 53.1 26.3 53.3 26.4C53.4 26.5 53.4 26.7 53.3 26.9C52 28.5 50.4 31.1 49.6 32.4V32.5C49.2 33.2 48.7 34.1 48.2 34.9C48 35.2 47.8 35.4 47.7 35.5V40.9C48.8 40.8 50.4 40.1 51.8 37.9C52.4 37 52.9 36 53.4 35.2C53.5 35 53.7 34.7 53.8 34.5C55.2 33 56.4 30.9 58.7 30.1Z"></path></svg></div>', 1), b1 = [
  h1
];
function g1(e, t, o, n, l, a) {
  return p(), u("div", null, b1);
}
const y1 = /* @__PURE__ */ Mo(m1, [["render", g1]]), x1 = {
  key: 0,
  class: "po-fixed po-z-[999] po-top-0 po-bottom-0 po-left-0 po-right-0 po-flex po-items-center po-justify-center"
}, V1 = /* @__PURE__ */ s("div", { class: "po-absolute po-w-[6.2rem] po-h-[6.2rem] po-bg-transparent po-overflow-hidden po-rounded-xl" }, [
  /* @__PURE__ */ s("div", { class: "po-loading-rotate po-absolute -po-top-8 -po-left-8 po-w-[10rem] po-h-[10rem]" })
], -1), w1 = { class: "relative po-bg-white po-w-24 po-h-24 po-flex po-items-center po-justify-center po-rounded-xl po-bg-opacity-50 po-backdrop-blur po-backdrop-filter po-z-10 po-shadow-xl" }, k1 = {
  key: 0,
  class: "po-absolute po-left-1 po-right-1 po-text-center po-py-1 po-text-xs po-text-mpao-blue po-bg-white po-bg-opacity-50 po-backdrop-blur po-backdrop-filter"
}, $1 = {
  name: "PoLoading"
}, A4 = /* @__PURE__ */ Object.assign($1, {
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
    return (t, o) => e.show ? (p(), u("div", x1, [
      V1,
      s("div", w1, [
        e.label !== "" ? (p(), u("span", k1, h(e.label), 1)) : y("", !0),
        E(y1)
      ])
    ])) : y("", !0);
  }
}), _1 = { class: "po-py-5 po-flex po-items-start po-space-x-5" }, C1 = ["name", "id", "checked", "aria-describedby"], E1 = { class: "po-grow -po-mt-[0.26rem]" }, S1 = ["for"], B1 = { class: "po-mt-2 po-flex po-space-x-3" }, P1 = ["href", "onClick"], O1 = {
  name: "PoConsent"
}, T4 = /* @__PURE__ */ Object.assign(O1, {
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
    return (t, o) => (p(), u("div", _1, [
      s("input", Be({
        type: "checkbox",
        name: `${e.id}-field`,
        id: e.id,
        checked: e.modelValue,
        "aria-describedby": `${e.id}-description`
      }, t.$attrs, {
        onInput: o[0] || (o[0] = (n) => t.$emit("update:modelValue", n.target.checked)),
        class: "po-shrink-0 po-h-4 po-w-4 po-rounded border-slate-300 po-text-mpao-lightblue focus:po-ring-mpao-lightblue"
      }), null, 16, C1),
      s("div", E1, [
        s("label", {
          class: "po-block po-select-none po-text-sm po-text-slate-600 po-cursor-pointer",
          for: e.id
        }, h(e.label), 9, S1),
        s("div", B1, [
          (p(!0), u(T, null, H(e.links, (n) => (p(), u("a", {
            href: n.url,
            onClick: be((l) => t.$emit("button-click", n.url), ["prevent"]),
            class: "po-text-sm po-text-mpao-lightblue hover:po-text-mpao-blue"
          }, h(n.label), 9, P1))), 256))
        ])
      ])
    ]));
  }
}), N1 = { class: "po-mt-5 po-bg-slate-50 -po-mx-5 po-px-4 po-py-3 po-space-y-3" }, L1 = ["onClick"], I1 = { class: "po-shrink-0 po-pr-3 po-flex po-items-center po-border-r po-border-dashed po-border-slate-300" }, D1 = {
  key: 4,
  class: "po-w-5 po-h-5 po-fill-slate-400 po-shrink-0",
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  viewBox: "0 0 226.978 226.978"
}, A1 = /* @__PURE__ */ s("path", { d: "M199.569 25.393C181.627 7.803 152.62-.72 113.339.048 73.731.827 47.255 7.779 30.018 21.927 13.352 35.605 5.59 55.62 5.59 84.915v29.898c0 34.584 18.532 72.605 53.951 78.358 4.089.669 7.941-2.111 8.605-6.201a7.5 7.5 0 0 0-6.201-8.605c-26.861-4.363-41.355-36-41.355-63.552V84.915c0-42.006 15.565-68.347 93.043-69.871 35.125-.696 60.477 6.395 75.433 21.059 11.655 11.429 17.321 27.395 17.321 48.812v29.898c0 45.274-20.321 65.243-72.441 71.123H96.988c-1.989 0-3.897.79-5.303 2.197l-26.041 26.041a7.5 7.5 0 0 0 10.606 10.607l23.845-23.845h34.27c.276 0 .553-.015.828-.046 29.828-3.313 50.254-11.076 64.279-24.432 14.747-14.044 21.916-34.208 21.916-61.646V84.915c0-25.299-7.341-45.325-21.819-59.522z" }, null, -1), T1 = /* @__PURE__ */ s("path", { d: "M118.17 48.988h.003c12.085 0 23.447 4.707 31.993 13.253 8.547 8.547 13.254 19.911 13.253 31.998a7.5 7.5 0 0 0 7.499 7.5h.001a7.5 7.5 0 0 0 7.5-7.499c.001-16.094-6.266-31.225-17.646-42.605-11.379-11.38-26.507-17.646-42.6-17.646h-.005a7.5 7.5 0 1 0 .002 14.999z" }, null, -1), j1 = /* @__PURE__ */ s("path", { d: "M118.168 75.362c10.408.002 18.877 8.47 18.878 18.877a7.5 7.5 0 0 0 7.501 7.499c4.143 0 7.5-3.359 7.499-7.501-.003-18.676-15.199-33.872-33.876-33.875h-.001a7.5 7.5 0 0 0-.001 15zM84.538 88.213a7.5 7.5 0 0 0 8.465 12.382c2.689-1.838 8.987-6.144 8.545-14.752-.28-5.152-4.927-12.508-8.776-17.772-5.63-7.702-10.482-12.341-14.391-13.779-3.65-1.359-7.467-1.388-11.353-.084-8.049 2.712-13.893 7.613-16.899 14.173-2.927 6.386-2.862 13.725.189 21.228 7.206 17.678 17.294 33.155 30.051 46.067 12.845 12.689 28.321 22.777 46.006 29.987 3.827 1.557 7.613 2.336 11.252 2.336 3.49 0 6.845-.716 9.971-2.149 6.56-3.007 11.46-8.85 14.175-16.909 1.3-3.877 1.271-7.692-.077-11.317-1.448-3.937-6.088-8.788-13.789-14.418-5.265-3.849-12.621-8.496-17.793-8.777-8.59-.432-12.892 5.855-14.73 8.544a7.5 7.5 0 0 0 12.381 8.469c.816-1.193 1.282-1.735 1.549-1.972 4.21 1.349 16.215 10.169 18.376 13.549.053.216.065.545-.135 1.144-.946 2.809-2.791 6.486-6.206 8.052-3.199 1.464-6.834.566-9.316-.443-15.847-6.461-29.682-15.466-41.058-26.703-11.301-11.439-20.306-25.274-26.763-41.115-1.012-2.488-1.911-6.125-.446-9.321 1.565-3.415 5.243-5.261 8.043-6.205.598-.2.927-.189 1.155-.134 3.381 2.165 12.196 14.163 13.546 18.374-.238.263-.779.73-1.972 1.545z" }, null, -1), M1 = [
  A1,
  T1,
  j1
], R1 = { class: "po-grow po-space-y-2 po-pl-3" }, F1 = { class: "po-text-base po-text-slate-600 po-font-medium" }, z1 = { class: "po-flex po-space-x-5" }, H1 = { class: "po-text-xs po-space-x-2" }, q1 = /* @__PURE__ */ s("span", { class: "po-font-medium po-text-slate-500" }, "Status", -1), U1 = { class: "po-text-xs po-space-x-2" }, G1 = /* @__PURE__ */ s("span", { class: "po-font-medium po-text-slate-500" }, [
  /* @__PURE__ */ s("span", null, "User")
], -1), W1 = { class: "po-text-slate-500" }, K1 = { class: "po-text-xs po-space-x-2" }, Z1 = /* @__PURE__ */ s("span", { class: "po-font-medium po-text-slate-500" }, "Date", -1), X1 = { class: "po-text-slate-500" }, Q1 = {
  name: "PoCallLog"
}, j4 = /* @__PURE__ */ Object.assign(Q1, {
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
    return (t, o) => (p(), u("ul", N1, [
      (p(!0), u(T, null, H(e.list, (n) => (p(), u("li", {
        onClick: (l) => t.$emit("button-click", n),
        class: "po-bg-white po-rounded-lg po-p-3 po-transition-shadow po-duration-100 po-ease-out po-shadow hover:po-shadow-lg po-cursor-pointer po-flex po-item-center"
      }, [
        s("div", I1, [
          n.type === "chat" ? (p(), j(g(Yn), {
            key: 0,
            class: "po-w-5 po-h-5 po-stroke-slate-400 po-shrink-0"
          })) : y("", !0),
          n.type === "email" ? (p(), j(g(la), {
            key: 1,
            class: "po-w-5 po-h-5 po-stroke-slate-400 po-shrink-0"
          })) : y("", !0),
          n.type === "in" ? (p(), j(g(ra), {
            key: 2,
            class: "po-w-5 po-h-5 po-stroke-slate-400 po-shrink-0"
          })) : y("", !0),
          n.type === "out" ? (p(), j(g(ia), {
            key: 3,
            class: "po-w-5 po-h-5 po-stroke-slate-400 po-shrink-0"
          })) : y("", !0),
          n.type === "viber" ? (p(), u("svg", D1, M1)) : y("", !0)
        ]),
        s("div", R1, [
          s("h3", F1, h(n.subject), 1),
          s("div", z1, [
            s("p", H1, [
              q1,
              s("span", {
                class: N([
                  "po-rounded-md po-px-[0.2em] po-capitalize",
                  { "po-text-green-600 po-bg-green-100": n.status === "open" },
                  {
                    "po-text-slate-500 po-bg-slate-100": n.status === "closed"
                  }
                ])
              }, h(n.status), 3)
            ]),
            s("p", U1, [
              G1,
              s("span", W1, [
                s("span", null, h(n.user.name) + " (" + h(n.user.department) + ")", 1)
              ])
            ]),
            s("p", K1, [
              Z1,
              s("span", X1, h(n.date), 1)
            ])
          ])
        ])
      ], 8, L1))), 256))
    ]));
  }
}), Y1 = {
  class: "po-flex po-bg-slate-50 po-rounded-t-xl po-justify-center lg:po-justify-start po-px-4 po-pt-4 xl:po-pt-2 po-flex-wrap po-overflow-hidden",
  "aria-label": "Tabs"
}, J1 = ["onClick", "aria-current"], e0 = { key: 0 }, t0 = {
  name: "PoCardTabs"
}, M4 = /* @__PURE__ */ Object.assign(t0, {
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
    function o(n) {
      return n.iconColor ? n.iconColor : "po-fill-current";
    }
    return (n, l) => (p(), u("nav", Y1, [
      (p(!0), u(T, null, H(e.tabs, (a) => (p(), u("span", {
        role: "button",
        onClick: (r) => n.$emit("button-click", a),
        key: a.name,
        class: N([
          a.current ? "po-bg-white po-text-slate-600 po-shadow-lg" : "po-text-slate-600 hover:po-text-mpao-blue",
          "po-px-4 po-py-3 po-font-medium po-mr-4 po-mb-4 xl:po-mb-0 po-text-sm po-cursor-pointer po-rounded-xl xl:po-rounded-b-none genie-effect hover:po-text-slate-600 hover:po-bg-white hover:po-shadow-md po-flex po-items-center po-flex-shrink-0 po-space-x-2"
        ]),
        "aria-current": a.current ? "page" : void 0
      }, [
        a.icon ? (p(), j(he(a.icon), {
          key: 0,
          class: N(["po-w-5 po-h-5", [o(a)]])
        }, null, 8, ["class"])) : y("", !0),
        s("span", null, [
          ce(h(a.name), 1),
          a.count ? (p(), u("span", e0, " (" + h(a.count) + ")", 1)) : y("", !0)
        ])
      ], 10, J1))), 128))
    ]));
  }
}), o0 = { class: "sm:po-hidden" }, l0 = /* @__PURE__ */ s("label", {
  for: "tabs",
  class: "po-sr-only"
}, "Select a tab", -1), n0 = {
  id: "tabs",
  name: "tabs",
  class: "po-block po-w-full po-rounded-md po-border-gray-300 focus:po-border-indigo-500 focus:po-ring-indigo-500"
}, a0 = ["selected"], s0 = { class: "po-hidden sm:po-block" }, r0 = {
  class: "po-flex po-space-x-4 po-pt-2",
  "aria-label": "Tabs"
}, i0 = ["onClick", "aria-current"], p0 = {
  name: "PoTabs"
}, R4 = /* @__PURE__ */ Object.assign(p0, {
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
    const o = e;
    function n(a) {
      return a.iconColor ? a.iconColor : "po-fill-current";
    }
    const l = C(() => o.tabs.forEach((a) => {
      a.name === o.currentTab && (a.current = !0);
    }));
    return (a, r) => (p(), u(T, null, [
      s("div", o0, [
        l0,
        s("select", n0, [
          (p(!0), u(T, null, H(g(l), (i) => (p(), u("option", {
            key: i.name,
            selected: i.current
          }, h(i.name), 9, a0))), 128))
        ])
      ]),
      s("div", s0, [
        s("nav", r0, [
          (p(!0), u(T, null, H(e.tabs, (i) => (p(), u("span", {
            onClick: (c) => a.$emit("button-click", i),
            role: "button",
            key: i.name,
            class: N([
              i.current ? "po-bg-white po-text-slate-600 po-shadow-md" : "po-bg-slate-50 po-text-slate-600 hover:po-text-mpao-blue",
              "po-px-4 po-relative po-group po-py-3 po-font-medium po-text-sm po-cursor-pointer po-rounded-xl genie-effect hover:po-text-slate-600 hover:po-bg-white hover:po-shadow-md po-flex po-items-center po-space-x-2"
            ]),
            "aria-current": i.current ? "page" : void 0
          }, [
            i.icon ? (p(), j(he(i.icon), {
              key: 0,
              class: N(["po-w-5 po-h-5", [n(i)]])
            }, null, 8, ["class"])) : y("", !0),
            s("span", null, [
              s("span", null, h(i.name), 1),
              i.count && i.count > 0 ? (p(), u("span", {
                key: 0,
                class: N(["po-absolute po-py-1 po-px-2 po-rounded-full po-text-xs -po-top-3 -po-right-2 po-shadow-md po-flex po-items-center po-justify-center", [
                  i.current ? "po-bg-mpao-orange po-text-white" : "po-bg-slate-400 po-text-white group-hover:po-bg-mpao-orange group-hover:po-text-white"
                ]])
              }, [
                s("span", null, h(i.count), 1)
              ], 2)) : y("", !0)
            ])
          ], 10, i0))), 128))
        ])
      ])
    ], 64));
  }
}), u0 = { class: "po-mt-5 po-flex po-flex-col po-items-center po-justify-center po-px-5 po-py-8 po-space-y-3" }, c0 = {
  key: 1,
  class: "po-text-base po-font-medium po-text-slate-600 po-text-center"
}, d0 = {
  key: 2,
  class: "po-text-sm po-text-slate-500 po-text-center"
}, f0 = {
  name: "PoEmpty"
}, F4 = /* @__PURE__ */ Object.assign(f0, {
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
    return (t, o) => (p(), u("div", u0, [
      e.icon ? (p(), j(he(e.icon), {
        key: 0,
        class: "po-w-10 po-h-10 po-stroke-slate-300"
      })) : y("", !0),
      e.label !== "" ? (p(), u("span", c0, h(e.label), 1)) : y("", !0),
      e.description !== "" ? (p(), u("span", d0, h(e.description), 1)) : y("", !0),
      te(t.$slots, "action")
    ]));
  }
});
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const at = () => !1;
function v0(e) {
  throw e;
}
function m0(e) {
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
const h0 = /&(gt|lt|amp|apos|quot);/g, b0 = {
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
const g0 = { class: "po-flex po-text-sm po-text-gray-700 po-flex-col po-space-y-5" }, y0 = {
  key: 0,
  class: "po-text-base po-font-medium po-text-slate-700"
}, x0 = {
  key: 1,
  class: "po-border po-border-orange-300 po-bg-orange-50 po-rounded-lg po-p-5 po-flex po-items-center po-space-x-3"
}, V0 = { class: "po-grow po-text-sm po-text-slate-600" }, w0 = {
  key: 2,
  class: "po-border po-border-red-300 po-bg-red-50 po-rounded-lg po-p-5 po-flex po-space-x-4"
}, k0 = { class: "po-grow" }, $0 = { class: "po-text-base po-text-slate-700 po-font-medium" }, _0 = { class: "po-text-sm po-text-slate-600" }, C0 = { class: "po-font-medium" }, E0 = { key: 0 }, S0 = { key: 0 }, B0 = /* @__PURE__ */ s("dt", null, "Name", -1), P0 = { key: 1 }, O0 = /* @__PURE__ */ s("dt", null, "Identifer", -1), N0 = { key: 2 }, L0 = /* @__PURE__ */ s("dt", null, "Date of birth", -1), I0 = { key: 3 }, D0 = /* @__PURE__ */ s("dt", null, "Reported Date of death", -1), A0 = {
  key: 3,
  class: "po-pt-5"
}, T0 = { class: "po-flex po-items-center po-space-x-1" }, j0 = /* @__PURE__ */ s("span", null, "File a dispute.", -1), M0 = {
  name: "PoDRStatus"
}, z4 = /* @__PURE__ */ Object.assign(M0, {
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
    function o() {
      t("dispute-click", "clicked");
    }
    return (n, l) => (p(), u("span", g0, [
      e.record !== null ? (p(), u("h2", y0, " Death was reported by " + h(e.record.institution), 1)) : y("", !0),
      e.request !== null && e.request.type_id === 1 ? (p(), u("div", x0, [
        E(g(st), { class: "po-shrink-0 po-w-6 po-stroke-orange-600" }),
        s("span", V0, " This is a " + h(e.request.type) + " request and is in " + h(e.request.state) + " state. ", 1)
      ])) : y("", !0),
      e.request !== null && e.request.type_id !== 1 ? (p(), u("div", w0, [
        E(g(st), { class: "po-shrink-0 po-w-6 po-h-6 po-stroke-red-600 po-stroke-2" }),
        s("div", k0, [
          s("h3", $0, h(e.request.type), 1),
          s("p", _0, [
            ce(" The following " + h(e.request.type) + " was reported: ", 1),
            s("span", C0, [
              ce(h(e.request.dispute_type), 1),
              e.request.date_of_death ? (p(), u("span", E0, " (New date: " + h(e.request.date_of_death) + ")", 1)) : y("", !0)
            ])
          ])
        ])
      ])) : y("", !0),
      E(Lu, null, {
        content: O(() => [
          e.member !== null ? (p(), u("div", S0, [
            B0,
            s("dd", null, h(e.member.name), 1)
          ])) : y("", !0),
          e.member !== null ? (p(), u("div", P0, [
            O0,
            s("dd", null, h(e.member.identifier), 1)
          ])) : y("", !0),
          e.member !== null ? (p(), u("div", N0, [
            L0,
            s("dd", null, h(e.member.dob), 1)
          ])) : y("", !0),
          e.record !== null ? (p(), u("div", I0, [
            D0,
            s("dd", null, h(e.record.date_of_death), 1)
          ])) : y("", !0)
        ]),
        _: 1
      }),
      e.request === null ? (p(), u("span", A0, [
        E(Bt, {
          type: "simple",
          onButtonClick: o
        }, {
          label: O(() => [
            s("span", T0, [
              E(g(Zn), { class: "po-w-4 po-h-4 po-stroke-current" }),
              j0
            ])
          ]),
          _: 1
        })
      ])) : y("", !0)
    ]));
  }
}), R0 = {
  key: 0,
  role: "button",
  class: "po-w-6 po-h-6 po-rounded-lg po-bg-white genie-effect po-flex po-items-center po-justify-center hover:po-bg-slate-50 po-cursor-pointer"
}, F0 = {
  name: "PoTableAction"
}, H4 = /* @__PURE__ */ Object.assign(F0, {
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
    const t = e, o = $(), n = $();
    return t.btnType === "view" ? o.value = na : t.btnType === "edit" ? o.value = sa : t.btnType === "delete" ? o.value = ua : t.btnType === "icon" && t.btnIcon && (o.value = t.btnIcon), t.btnType === "view" ? n.value = "po-stroke-emerald-400" : t.btnType === "edit" ? n.value = "po-stroke-blue-400" : t.btnType === "delete" ? n.value = "po-stroke-red-400" : n.value = t.iconColor, (l, a) => (p(), u("span", null, [
      e.btnType === "icon" || e.btnType === "delete" || e.btnType === "edit" || e.btnType === "view" ? (p(), u("span", R0, [
        (p(), j(he(o.value), {
          class: N(["po-w-4 po-stroke-2", n.value])
        }, null, 8, ["class"]))
      ])) : (p(), u("span", {
        key: 1,
        role: "button",
        class: N(["po-block po-text-sm genie-effect", e.textColor])
      }, h(e.label), 3))
    ]));
  }
}), z0 = { key: 0 }, H0 = {
  name: "Rufiyaa"
}, q4 = /* @__PURE__ */ Object.assign(H0, {
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
    function t(o) {
      const n = typeof o == "string" ? parseFloat(o.replace(/,/g, "")) : o;
      return isNaN(n) ? "" : n.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    }
    return (o, n) => (p(), u("span", null, [
      e.amount !== null ? (p(), u("span", z0, h(t(e.amount)), 1)) : y("", !0)
    ]));
  }
}), q0 = {
  name: "PoHeading"
}, U4 = /* @__PURE__ */ Object.assign(q0, {
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
    return (t, o) => (p(), j(he(e.type), { class: "po-text-base po-text-slate-600 po-font-semibold" }, {
      default: O(() => [
        ce(h(e.text), 1)
      ]),
      _: 1
    }));
  }
});
function U0(e, t) {
  if (!e)
    return;
  const o = (n) => {
    n.target !== e.value && n.composedPath().includes(e.value) || typeof t == "function" && t();
  };
  return W(() => {
    window.addEventListener("click", o);
  }), Zt(() => {
    window.removeEventListener("click", o);
  }), { listener: o };
}
const G0 = ["for"], W0 = { class: "po-capitalize" }, K0 = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Z0 = ["title"], X0 = { class: "po-relative po-mt-1" }, Q0 = {
  key: 0,
  class: "po-shrink-0 po-pr-1 po-flex po-flex-wrap po-w-full -mt-2 po-max-h-44"
}, Y0 = { class: "po-px-2 po-py-1 po-mb-1 po-mr-1 po-rounded-md po-text-sm po-text-white po-flex po-space-x-2 po-items-center po-bg-mpao-lightblue" }, J0 = ["onClick"], e4 = ["id"], t4 = {
  key: 0,
  class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
}, o4 = ["onClick", "value"], l4 = {
  class: /* @__PURE__ */ N(["po-block po-truncate"])
}, n4 = ["id"], a4 = ["id"], s4 = {
  name: "PoMultiSelect",
  components: { CheckIcon: ea }
}, G4 = /* @__PURE__ */ Object.assign(s4, {
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
    const o = e;
    function n() {
      return o.hasError ? "po-border-red-400 focus:po-border-red-600 focus:po-ring-red-600" : o.borderColor;
    }
    const l = $(""), a = $([]);
    function r(V) {
      a.value.splice(V, 1), d();
    }
    function i(V) {
      let m = l.value.split(",");
      V.key === "Enter" && 0 < l.value.length && (V.preventDefault(), m.forEach((v) => {
        let x = o.items.find(
          (_) => _.name.toLowerCase() === v.trim().toLowerCase()
        );
        x && a.value.push(x);
      }), l.value = ""), V.key === "Backspace" && l.value.length === 0 && a.value.pop(), d();
    }
    const c = $([]);
    function d() {
      c.value = a.value.map((V) => V.id);
    }
    W(() => {
      document.addEventListener("keydown", i);
    }), ae(() => {
      document.removeEventListener("keydown", i);
    });
    const f = $(!1), b = C(
      () => l.value === "" ? o.items : o.items.filter((V) => V.name.toLowerCase().includes(l.value.toLowerCase()))
    );
    let k = $();
    U0(k, () => {
      f.value = !1;
    });
    function w(V) {
      a.value.push(V), l.value = "", d();
    }
    return ne(c, () => {
      t("update:modelValue", c.value);
    }), (V, m) => (p(), u("div", {
      ref_key: "multiSelectComponentRef",
      ref: k,
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
        s("span", W0, h(e.label), 1),
        e.required ? (p(), u("span", K0, "*")) : y("", !0),
        e.info !== null ? (p(), u("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          E(g(Pt), { class: "po-fill-current" })
        ], 8, Z0)) : y("", !0)
      ], 10, G0),
      s("div", X0, [
        s("div", {
          class: N([
            "po-border po-p-1 po-min-h-[2.38rem] po-flex po-flex-wrap po-items-center focus-within:po-border-mpao-lightblue po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white sm:po-text-sm",
            n()
          ])
        }, [
          a.value.length > 0 ? (p(), u("div", Q0, [
            (p(!0), u(T, null, H(a.value, (v, x) => (p(), u("span", Y0, [
              s("span", null, h(v.name), 1),
              s("span", {
                onClick: () => r(x),
                class: "po-rounded-full po-bg-white po-flex po-items-center po-justify-center po-w-4 po-h-4 po-cursor-pointer"
              }, [
                E(g(jo), { class: "po-w-3 po-fill-mpao-lightblue" })
              ], 8, J0)
            ]))), 256))
          ])) : y("", !0),
          dt(s("input", {
            id: e.id,
            "onUpdate:modelValue": m[0] || (m[0] = (v) => l.value = v),
            onFocus: m[1] || (m[1] = () => f.value = !0),
            class: "po-border-0 po-outline-none po-ring-0 po-grow"
          }, null, 40, e4), [
            [Gt, l.value]
          ])
        ], 2),
        f.value ? (p(), u("ul", t4, [
          (p(!0), u(T, null, H(g(b), (v) => (p(), u("li", {
            onClick: () => w(v),
            key: v.id,
            value: v.id,
            class: N([
              "po-relative po-select-none po-py-2 hover:po-bg-mpao-lightblue hover:po-text-white po-cursor-pointer po-pl-3 po-pr-9"
            ])
          }, [
            s("span", l4, h(v.name), 1)
          ], 8, o4))), 128))
        ])) : y("", !0)
      ]),
      e.message !== null ? (p(), u("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, h(e.message), 9, n4)) : y("", !0),
      e.hasError && e.errorMessage !== null ? (p(), u("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-center po-space-x-1",
        id: `${e.id}-error`
      }, [
        E(g(Io), { class: "po-fill-current po-w-4" }),
        s("span", null, h(e.errorMessage), 1)
      ], 8, a4)) : y("", !0)
    ], 2));
  }
});
export {
  f4 as PoActionBar,
  N4 as PoAlert,
  _a as PoAppIcon,
  Zs as PoAppTray,
  Bt as PoButton,
  j4 as PoCallLog,
  v4 as PoCard,
  m4 as PoCardSearch,
  M4 as PoCardTabs,
  S4 as PoChatLogItem,
  $4 as PoCheckbox,
  O4 as PoCommandPalette,
  T4 as PoConsent,
  D4 as PoContentArea,
  z4 as PoDRStatus,
  Lu as PoDescriptionList,
  I4 as PoDownloadFileList,
  g4 as PoDynamicTable,
  F4 as PoEmpty,
  _4 as PoFooter,
  C4 as PoFormStatusMessage,
  U4 as PoHeading,
  y4 as PoInputField,
  x4 as PoInputFile,
  A4 as PoLoading,
  L4 as PoLogs,
  zr as PoModal,
  G4 as PoMultiSelect,
  B4 as PoNotification,
  rr as PoNotificationHub,
  h4 as PoPageTitle,
  vp as PoPagination,
  Cr as PoProfileSwitcher,
  Kr as PoRadioInput,
  Pa as PoSearchBar,
  k4 as PoSectionMenu,
  V4 as PoSelectField,
  d4 as PoSidebarDrawer,
  P4 as PoSlideover,
  E4 as PoStatsBlock,
  b4 as PoTable,
  H4 as PoTableAction,
  R4 as PoTabs,
  $i as PoTextarea,
  w4 as PoToggle,
  u4 as PoTopBar,
  q4 as Rufiyaa
};
