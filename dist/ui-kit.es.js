import { openBlock as p, createElementBlock as d, createElementVNode as r, defineComponent as L, ref as x, toRefs as me, watch as X, Fragment as R, createVNode as S, unref as k, withCtx as z, renderSlot as Y, createBlock as F, resolveDynamicComponent as ce, createCommentVNode as _, computed as M, toDisplayString as V, withDirectives as Ce, isRef as As, withKeys as Ds, vModelText as ft, cloneVNode as Is, h as te, inject as pe, provide as ue, onMounted as G, watchEffect as de, onUnmounted as ne, Teleport as vt, reactive as js, shallowRef as Vl, nextTick as yo, toRaw as ze, normalizeClass as O, renderList as U, Transition as De, withModifiers as oe, onBeforeMount as Rs, onBeforeUpdate as Fs, onUpdated as Tt, mergeProps as xe, createTextVNode as J, onBeforeUnmount as xl, pushScopeId as Ns, popScopeId as Hs, withScopeId as qs, markRaw as Ws, shallowReactive as Us, resolveComponent as kl, resolveDirective as Gs, normalizeStyle as wo, toHandlers as Zs, normalizeProps as Xe, guardReactiveProps as Qe, vShow as Et, createStaticVNode as Ks } from "vue";
import { f as Qo, a as Ys } from "./FormatDate-8e09898f.mjs";
function Xs(e, t) {
  return p(), d("svg", {
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
function Qs(e, t) {
  return p(), d("svg", {
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
function Js(e, t) {
  return p(), d("svg", {
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
function en(e, t) {
  return p(), d("svg", {
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
function tn(e, t) {
  return p(), d("svg", {
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
function on(e, t) {
  return p(), d("svg", {
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
      d: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
    })
  ]);
}
function ln(e, t) {
  return p(), d("svg", {
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
function sn(e, t) {
  return p(), d("svg", {
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
      d: "M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
    })
  ]);
}
function nn(e, t) {
  return p(), d("svg", {
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
function Cl(e, t) {
  return p(), d("svg", {
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
function Sl(e, t) {
  return p(), d("svg", {
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
function an(e, t) {
  return p(), d("svg", {
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
      d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
    })
  ]);
}
function no(e, t) {
  return p(), d("svg", {
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
function rn(e, t) {
  return p(), d("svg", {
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
      d: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
    }),
    r("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    })
  ]);
}
function pn(e, t) {
  return p(), d("svg", {
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
function un(e, t) {
  return p(), d("svg", {
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
      d: "M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
    })
  ]);
}
function _o(e, t) {
  return p(), d("svg", {
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
function Pl(e, t) {
  return p(), d("svg", {
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
function dn(e, t) {
  return p(), d("svg", {
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
      d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
    })
  ]);
}
function cn(e, t) {
  return p(), d("svg", {
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
function fn(e, t) {
  return p(), d("svg", {
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
      d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
    })
  ]);
}
function Jo(e, t) {
  return p(), d("svg", {
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
function Bt(e, t) {
  return p(), d("svg", {
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
const vn = /* @__PURE__ */ r("div", {
  "aria-live": "assertive",
  class: "po-pointer-events-none po-fixed po-inset-0 po-flex po-items-start po-px-4 po-py-6 sm:po-p-6 po-z-[60]"
}, [
  /* @__PURE__ */ r("div", {
    class: "po-flex po-w-full po-flex-col po-items-end po-space-y-4 sm:po-items-end po-pt-[55px]",
    id: "po-notifications-alert"
  })
], -1), hn = { class: "po-bg-mpao-blue po-fixed po-top-0 po-w-full po-z-50 po-flex" }, mn = { class: "po-shrink-0 po-px-3 po-pt-3" }, bn = {
  for: "sidebar-drawer-toggle",
  role: "button",
  class: "genie-effect po-flex po-items-center po-justify-center po-bg-[#2e5266] po-rounded-full po-w-10 po-h-10 po-select-none po-text-slate-100"
}, gn = { class: "po-mx-auto po-max-w-full po-pr-4 po-grow sm:po-pr-4" }, yn = { class: "po-flex po-relative po-h-16 po-items-center po-justify-between po-space-x-12" }, wn = { class: "po-flex po-items-center po-space-x-3" }, _n = {
  key: 0,
  class: "po-block po-w-6 po-text-slate-100 md:po-hidden",
  role: "button"
}, $n = {
  name: "PoTopBar"
}, $2 = /* @__PURE__ */ L({
  ...$n,
  props: {
    currentQuery: { default: "" },
    appName: { default: "Pension App" },
    hasSearch: { type: Boolean, default: !0 },
    appList: { default: null },
    notifications: { default: null },
    hasNewNotifications: { type: Boolean, default: !1 },
    userObject: { default: null },
    avatar: { default: "" },
    logo: { default: "" },
    appIcon: { default: null }
  },
  emits: ["query", "profileSwitcherClick", "onSearchClear"],
  setup(e, { emit: t }) {
    const o = e, l = x(""), s = x(""), { avatar: n, logo: a } = me(o);
    X(n, () => {
      l.value = n.value;
    }), X(a, () => {
      s.value = a.value;
    });
    function i(c) {
      t("profileSwitcherClick", c);
    }
    function u(c) {
      t("query", c);
    }
    function f(c) {
      t("onSearchClear", c);
    }
    return (c, b) => (p(), d(R, null, [
      vn,
      r("nav", hn, [
        r("div", mn, [
          r("label", bn, [
            S(k(en), { class: "po-w-6 po-fill-current" })
          ])
        ]),
        r("div", gn, [
          r("div", yn, [
            S(k(On), { "app-name": c.appName }, {
              icon: z(() => [
                Y(c.$slots, "appIcon", {}, () => [
                  c.appIcon ? (p(), F(ce(c.appIcon), { key: 0 })) : _("", !0)
                ])
              ]),
              _: 3
            }, 8, ["app-name"]),
            c.hasSearch ? (p(), F(k(Mn), {
              key: 0,
              onQuery: u,
              onOnClear: f,
              "current-query": c.currentQuery
            }, null, 8, ["current-query"])) : _("", !0),
            r("div", wn, [
              c.hasSearch ? (p(), d("span", _n, [
                S(k(_o), { class: "po-stroke-current" })
              ])) : _("", !0),
              S(k(Qa), {
                notifications: c.notifications,
                "has-new-notifications": c.hasNewNotifications
              }, null, 8, ["notifications", "has-new-notifications"]),
              S(k(Ra), {
                "app-list": c.appList,
                "open-in-new-tab": !0
              }, null, 8, ["app-list"]),
              S(k(xr), {
                "user-object": c.userObject,
                avatar: l.value,
                logo: s.value,
                onButtonClick: i
              }, null, 8, ["user-object", "avatar", "logo"])
            ])
          ])
        ])
      ])
    ], 64));
  }
}), Vn = { class: "po-flex po-items-center po-justify-center po-space-x-3" }, xn = { class: "po-w-8 po-text-slate-100 app-icon" }, kn = { class: "po-font-light po-text-lg po-text-slate-100" }, Cn = { class: "po-hidden md:po-block" }, Sn = { class: "po-block md:po-hidden" }, Pn = {
  name: "PoAppIcon"
}, On = /* @__PURE__ */ L({
  ...Pn,
  props: {
    appName: { default: "App Name" }
  },
  setup(e) {
    const t = e, o = M(() => {
      if (!t.appName)
        return "";
      const l = t.appName.match(/\b[A-Z]/g);
      if (!l)
        return "";
      let s = l.join("");
      return s.length === 1 ? t.appName.substring(0, 3) : s;
    });
    return (l, s) => (p(), d("div", Vn, [
      r("div", xn, [
        Y(l.$slots, "icon")
      ]),
      r("span", kn, [
        r("span", Cn, V(l.appName), 1),
        r("span", Sn, V(o.value), 1)
      ])
    ]));
  }
}), Ln = { class: "po-flex-grow po-hidden po-relative md:po-block" }, Tn = ["placeholder", "onKeyup"], En = { class: "po-absolute po-inset-y-0 po-left-0 po-flex po-items-center po-pl-3 po-pointer-events-none po-transition-all po-ease-linear po-duration-100 po-text-slate-400 po-origin-center peer-hover/search:po-scale-105 peer-focus/search:po-text-slate-100" }, Bn = {
  name: "PoSearchBar"
}, Mn = /* @__PURE__ */ L({
  ...Bn,
  props: {
    placeholder: { default: "Search" },
    currentQuery: { default: "" }
  },
  emits: ["query", "onClear"],
  setup(e, { emit: t }) {
    let o = x("");
    const l = (s) => {
      t("query", o.value);
    };
    return X(o, async (s, n) => {
      s === "" && t("onClear", !0);
    }), (s, n) => (p(), d("div", Ln, [
      Ce(r("input", {
        "onUpdate:modelValue": n[0] || (n[0] = (a) => As(o) ? o.value = a : o = a),
        type: "text",
        id: "main-search",
        placeholder: s.placeholder,
        onKeyup: Ds(l, ["enter"]),
        class: "peer/search po-bg-transparent po-border po-border-transparent po-text-slate-100 po-text-sm po-rounded-md po-ring-0 po-outline-none focus:po-outline-none focus:po-ring-0 po-transition-colors po-ease-linear po-duration-100 po-block po-w-full po-pl-10 po-p-2.5 po-appearance-none focus:po-border-slate-400 hover:po-border-slate-600"
      }, null, 40, Tn), [
        [ft, k(o)]
      ]),
      r("div", En, [
        S(k(_o), { class: "po-w-5 po-h-5 po-stroke-current" })
      ])
    ]));
  }
});
function ie(e, t, ...o) {
  if (e in t) {
    let s = t[e];
    return typeof s == "function" ? s(...o) : s;
  }
  let l = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((s) => `"${s}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(l, ie), l;
}
var Se = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Se || {}), Ae = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Ae || {});
function ee({ visible: e = !0, features: t = 0, ourProps: o, theirProps: l, ...s }) {
  var n;
  let a = Ll(l, o), i = Object.assign(s, { props: a });
  if (e || t & 2 && a.static)
    return eo(i);
  if (t & 1) {
    let u = (n = a.unmount) == null || n ? 0 : 1;
    return ie(u, { [0]() {
      return null;
    }, [1]() {
      return eo({ ...s, props: { ...a, hidden: !0, style: { display: "none" } } });
    } });
  }
  return eo(i);
}
function eo({ props: e, attrs: t, slots: o, slot: l, name: s }) {
  var n, a;
  let { as: i, ...u } = Mt(e, ["unmount", "static"]), f = (n = o.default) == null ? void 0 : n.call(o, l), c = {};
  if (l) {
    let b = !1, $ = [];
    for (let [m, y] of Object.entries(l))
      typeof y == "boolean" && (b = !0), y === !0 && $.push(m);
    b && (c["data-headlessui-state"] = $.join(" "));
  }
  if (i === "template") {
    if (f = Ol(f ?? []), Object.keys(u).length > 0 || Object.keys(t).length > 0) {
      let [b, ...$] = f ?? [];
      if (!zn(b) || $.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${s} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(u).concat(Object.keys(t)).map((v) => v.trim()).filter((v, h, g) => g.indexOf(v) === h).sort((v, h) => v.localeCompare(h)).map((v) => `  - ${v}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((v) => `  - ${v}`).join(`
`)].join(`
`));
      let m = Ll((a = b.props) != null ? a : {}, u), y = Is(b, m);
      for (let v in m)
        v.startsWith("on") && (y.props || (y.props = {}), y.props[v] = m[v]);
      return y;
    }
    return Array.isArray(f) && f.length === 1 ? f[0] : f;
  }
  return te(i, Object.assign({}, u, c), { default: () => f });
}
function Ol(e) {
  return e.flatMap((t) => t.type === R ? Ol(t.children) : [t]);
}
function Ll(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, o = {};
  for (let l of e)
    for (let s in l)
      s.startsWith("on") && typeof l[s] == "function" ? (o[s] != null || (o[s] = []), o[s].push(l[s])) : t[s] = l[s];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(o).map((l) => [l, void 0])));
  for (let l in o)
    Object.assign(t, { [l](s, ...n) {
      let a = o[l];
      for (let i of a) {
        if (s instanceof Event && s.defaultPrevented)
          return;
        i(s, ...n);
      }
    } });
  return t;
}
function Tl(e) {
  let t = Object.assign({}, e);
  for (let o in t)
    t[o] === void 0 && delete t[o];
  return t;
}
function Mt(e, t = []) {
  let o = Object.assign({}, e);
  for (let l of t)
    l in o && delete o[l];
  return o;
}
function zn(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let An = 0;
function Dn() {
  return ++An;
}
function re() {
  return Dn();
}
var se = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(se || {});
function A(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let El = Symbol("Context");
var le = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(le || {});
function In() {
  return lt() !== null;
}
function lt() {
  return pe(El, null);
}
function $o(e) {
  ue(El, e);
}
function el(e, t) {
  if (e)
    return e;
  let o = t ?? "button";
  if (typeof o == "string" && o.toLowerCase() === "button")
    return "button";
}
function Vo(e, t) {
  let o = x(el(e.value.type, e.value.as));
  return G(() => {
    o.value = el(e.value.type, e.value.as);
  }), de(() => {
    var l;
    o.value || A(t) && A(t) instanceof HTMLButtonElement && !((l = A(t)) != null && l.hasAttribute("type")) && (o.value = "button");
  }), o;
}
var jn = Object.defineProperty, Rn = (e, t, o) => t in e ? jn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, tl = (e, t, o) => (Rn(e, typeof t != "symbol" ? t + "" : t, o), o);
let Fn = class {
  constructor() {
    tl(this, "current", this.detect()), tl(this, "currentId", 0);
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
}, ht = new Fn();
function ye(e) {
  if (ht.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = A(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
function Nn({ container: e, accept: t, walk: o, enabled: l }) {
  de(() => {
    let s = e.value;
    if (!s || l !== void 0 && !l.value)
      return;
    let n = ye(e);
    if (!n)
      return;
    let a = Object.assign((u) => t(u), { acceptNode: t }), i = n.createTreeWalker(s, NodeFilter.SHOW_ELEMENT, a, !1);
    for (; i.nextNode(); )
      o(i.currentNode);
  });
}
let ao = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var ae = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ae || {}), Ze = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Ze || {}), Hn = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Hn || {});
function zt(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(ao)).sort((t, o) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (o.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var xo = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(xo || {});
function Bl(e, t = 0) {
  var o;
  return e === ((o = ye(e)) == null ? void 0 : o.body) ? !1 : ie(t, { [0]() {
    return e.matches(ao);
  }, [1]() {
    let l = e;
    for (; l !== null; ) {
      if (l.matches(ao))
        return !0;
      l = l.parentElement;
    }
    return !1;
  } });
}
function Ue(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let qn = ["textarea", "input"].join(",");
function Wn(e) {
  var t, o;
  return (o = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, qn)) != null ? o : !1;
}
function Ml(e, t = (o) => o) {
  return e.slice().sort((o, l) => {
    let s = t(o), n = t(l);
    if (s === null || n === null)
      return 0;
    let a = s.compareDocumentPosition(n);
    return a & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : a & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function be(e, t, { sorted: o = !0, relativeTo: l = null, skipElements: s = [] } = {}) {
  var n;
  let a = (n = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? n : document, i = Array.isArray(e) ? o ? Ml(e) : e : zt(e);
  s.length > 0 && i.length > 1 && (i = i.filter((y) => !s.includes(y))), l = l ?? a.activeElement;
  let u = (() => {
    if (t & 5)
      return 1;
    if (t & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), f = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, i.indexOf(l)) - 1;
    if (t & 4)
      return Math.max(0, i.indexOf(l)) + 1;
    if (t & 8)
      return i.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), c = t & 32 ? { preventScroll: !0 } : {}, b = 0, $ = i.length, m;
  do {
    if (b >= $ || b + $ <= 0)
      return 0;
    let y = f + b;
    if (t & 16)
      y = (y + $) % $;
    else {
      if (y < 0)
        return 3;
      if (y >= $)
        return 1;
    }
    m = i[y], m == null || m.focus(c), b += u;
  } while (m !== a.activeElement);
  return t & 6 && Wn(m) && m.select(), m.hasAttribute("tabindex") || m.setAttribute("tabindex", "0"), 2;
}
function to(e, t, o) {
  ht.isServer || de((l) => {
    document.addEventListener(e, t, o), l(() => document.removeEventListener(e, t, o));
  });
}
function zl(e, t, o = M(() => !0)) {
  function l(n, a) {
    if (!o.value || n.defaultPrevented)
      return;
    let i = a(n);
    if (i === null || !i.getRootNode().contains(i))
      return;
    let u = function f(c) {
      return typeof c == "function" ? f(c()) : Array.isArray(c) || c instanceof Set ? c : [c];
    }(e);
    for (let f of u) {
      if (f === null)
        continue;
      let c = f instanceof HTMLElement ? f : A(f);
      if (c != null && c.contains(i) || n.composed && n.composedPath().includes(c))
        return;
    }
    return !Bl(i, xo.Loose) && i.tabIndex !== -1 && n.preventDefault(), t(n, i);
  }
  let s = x(null);
  to("mousedown", (n) => {
    var a, i;
    o.value && (s.value = ((i = (a = n.composedPath) == null ? void 0 : a.call(n)) == null ? void 0 : i[0]) || n.target);
  }, !0), to("click", (n) => {
    s.value && (l(n, () => s.value), s.value = null);
  }, !0), to("blur", (n) => l(n, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Le = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Le || {});
let Ie = L({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: o }) {
  return () => {
    let { features: l, ...s } = e, n = { "aria-hidden": (l & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(l & 4) === 4 && (l & 2) !== 2 && { display: "none" } } };
    return ee({ ourProps: n, theirProps: s, slot: {}, attrs: o, slots: t, name: "Hidden" });
  };
} });
function Al(e = {}, t = null, o = []) {
  for (let [l, s] of Object.entries(e))
    Il(o, Dl(t, l), s);
  return o;
}
function Dl(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Il(e, t, o) {
  if (Array.isArray(o))
    for (let [l, s] of o.entries())
      Il(e, Dl(t, l.toString()), s);
  else
    o instanceof Date ? e.push([t, o.toISOString()]) : typeof o == "boolean" ? e.push([t, o ? "1" : "0"]) : typeof o == "string" ? e.push([t, o]) : typeof o == "number" ? e.push([t, `${o}`]) : o == null ? e.push([t, ""]) : Al(o, t, e);
}
function jl(e) {
  var t;
  let o = (t = e == null ? void 0 : e.form) != null ? t : e.closest("form");
  if (o) {
    for (let l of o.elements)
      if (l.tagName === "INPUT" && l.type === "submit" || l.tagName === "BUTTON" && l.type === "submit" || l.nodeName === "INPUT" && l.type === "image") {
        l.click();
        return;
      }
  }
}
function Rl(e, t, o) {
  let l = x(o == null ? void 0 : o.value), s = M(() => e.value !== void 0);
  return [M(() => s.value ? e.value : l.value), function(n) {
    return s.value || (l.value = n), t == null ? void 0 : t(n);
  }];
}
function Un() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Gn(e, t, o) {
  ht.isServer || de((l) => {
    window.addEventListener(e, t, o), l(() => window.removeEventListener(e, t, o));
  });
}
var ge = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(ge || {});
function ko() {
  let e = x(0);
  return Gn("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function Co(e, t, o, l) {
  ht.isServer || de((s) => {
    e = e ?? window, e.addEventListener(t, o, l), s(() => e.removeEventListener(t, o, l));
  });
}
function Fl(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function Nl(e) {
  if (!e)
    return /* @__PURE__ */ new Set();
  if (typeof e == "function")
    return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let o of e.value) {
    let l = A(o);
    l instanceof HTMLElement && t.add(l);
  }
  return t;
}
var Hl = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Hl || {});
let at = Object.assign(L({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: x(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: l }) {
  let s = x(null);
  l({ el: s, $el: s });
  let n = M(() => ye(s)), a = x(!1);
  G(() => a.value = !0), ne(() => a.value = !1), Kn({ ownerDocument: n }, M(() => a.value && Boolean(e.features & 16)));
  let i = Yn({ ownerDocument: n, container: s, initialFocus: M(() => e.initialFocus) }, M(() => a.value && Boolean(e.features & 2)));
  Xn({ ownerDocument: n, container: s, containers: e.containers, previousActiveElement: i }, M(() => a.value && Boolean(e.features & 8)));
  let u = ko();
  function f(m) {
    let y = A(s);
    y && ((v) => v())(() => {
      ie(u.value, { [ge.Forwards]: () => {
        be(y, ae.First, { skipElements: [m.relatedTarget] });
      }, [ge.Backwards]: () => {
        be(y, ae.Last, { skipElements: [m.relatedTarget] });
      } });
    });
  }
  let c = x(!1);
  function b(m) {
    m.key === "Tab" && (c.value = !0, requestAnimationFrame(() => {
      c.value = !1;
    }));
  }
  function $(m) {
    if (!a.value)
      return;
    let y = Nl(e.containers);
    A(s) instanceof HTMLElement && y.add(A(s));
    let v = m.relatedTarget;
    v instanceof HTMLElement && v.dataset.headlessuiFocusGuard !== "true" && (ql(y, v) || (c.value ? be(A(s), ie(u.value, { [ge.Forwards]: () => ae.Next, [ge.Backwards]: () => ae.Previous }) | ae.WrapAround, { relativeTo: m.target }) : m.target instanceof HTMLElement && Ue(m.target)));
  }
  return () => {
    let m = {}, y = { ref: s, onKeydown: b, onFocusout: $ }, { features: v, initialFocus: h, containers: g, ...w } = e;
    return te(R, [Boolean(v & 4) && te(Ie, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: Le.Focusable }), ee({ ourProps: y, theirProps: { ...t, ...w }, slot: m, attrs: t, slots: o, name: "FocusTrap" }), Boolean(v & 4) && te(Ie, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: Le.Focusable })]);
  };
} }), { features: Hl }), qe = [];
if (typeof window < "u" && typeof document < "u") {
  let e = function(t) {
    t.target instanceof HTMLElement && t.target !== document.body && qe[0] !== t.target && (qe.unshift(t.target), qe = qe.filter((o) => o != null && o.isConnected), qe.splice(10));
  };
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
}
function Zn(e) {
  let t = x(qe.slice());
  return X([e], ([o], [l]) => {
    l === !0 && o === !1 ? Fl(() => {
      t.value.splice(0);
    }) : l === !1 && o === !0 && (t.value = qe.slice());
  }, { flush: "post" }), () => {
    var o;
    return (o = t.value.find((l) => l != null && l.isConnected)) != null ? o : null;
  };
}
function Kn({ ownerDocument: e }, t) {
  let o = Zn(t);
  G(() => {
    de(() => {
      var l, s;
      t.value || ((l = e.value) == null ? void 0 : l.activeElement) === ((s = e.value) == null ? void 0 : s.body) && Ue(o());
    }, { flush: "post" });
  }), ne(() => {
    Ue(o());
  });
}
function Yn({ ownerDocument: e, container: t, initialFocus: o }, l) {
  let s = x(null), n = x(!1);
  return G(() => n.value = !0), ne(() => n.value = !1), G(() => {
    X([t, o, l], (a, i) => {
      if (a.every((f, c) => (i == null ? void 0 : i[c]) === f) || !l.value)
        return;
      let u = A(t);
      u && Fl(() => {
        var f, c;
        if (!n.value)
          return;
        let b = A(o), $ = (f = e.value) == null ? void 0 : f.activeElement;
        if (b) {
          if (b === $) {
            s.value = $;
            return;
          }
        } else if (u.contains($)) {
          s.value = $;
          return;
        }
        b ? Ue(b) : be(u, ae.First | ae.NoScroll) === Ze.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), s.value = (c = e.value) == null ? void 0 : c.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), s;
}
function Xn({ ownerDocument: e, container: t, containers: o, previousActiveElement: l }, s) {
  var n;
  Co((n = e.value) == null ? void 0 : n.defaultView, "focus", (a) => {
    if (!s.value)
      return;
    let i = Nl(o);
    A(t) instanceof HTMLElement && i.add(A(t));
    let u = l.value;
    if (!u)
      return;
    let f = a.target;
    f && f instanceof HTMLElement ? ql(i, f) ? (l.value = f, Ue(f)) : (a.preventDefault(), a.stopPropagation(), Ue(u)) : Ue(l.value);
  }, !0);
}
function ql(e, t) {
  for (let o of e)
    if (o.contains(t))
      return !0;
  return !1;
}
let oo = /* @__PURE__ */ new Map(), rt = /* @__PURE__ */ new Map();
function ol(e, t = x(!0)) {
  de((o) => {
    var l;
    if (!t.value)
      return;
    let s = A(e);
    if (!s)
      return;
    o(function() {
      var a;
      if (!s)
        return;
      let i = (a = rt.get(s)) != null ? a : 1;
      if (i === 1 ? rt.delete(s) : rt.set(s, i - 1), i !== 1)
        return;
      let u = oo.get(s);
      u && (u["aria-hidden"] === null ? s.removeAttribute("aria-hidden") : s.setAttribute("aria-hidden", u["aria-hidden"]), s.inert = u.inert, oo.delete(s));
    });
    let n = (l = rt.get(s)) != null ? l : 0;
    rt.set(s, n + 1), n === 0 && (oo.set(s, { "aria-hidden": s.getAttribute("aria-hidden"), inert: s.inert }), s.setAttribute("aria-hidden", "true"), s.inert = !0);
  });
}
let Wl = Symbol("ForcePortalRootContext");
function Qn() {
  return pe(Wl, !1);
}
let ro = L({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: o }) {
  return ue(Wl, e.force), () => {
    let { force: l, ...s } = e;
    return ee({ theirProps: s, ourProps: {}, slot: {}, slots: t, attrs: o, name: "ForcePortalRoot" });
  };
} });
function Jn(e) {
  let t = ye(e);
  if (!t) {
    if (e === null)
      return null;
    throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`);
  }
  let o = t.getElementById("headlessui-portal-root");
  if (o)
    return o;
  let l = t.createElement("div");
  return l.setAttribute("id", "headlessui-portal-root"), t.body.appendChild(l);
}
let Ul = L({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: o }) {
  let l = x(null), s = M(() => ye(l)), n = Qn(), a = pe(Gl, null), i = x(n === !0 || a == null ? Jn(l.value) : a.resolveTarget());
  return de(() => {
    n || a != null && (i.value = a.resolveTarget());
  }), ne(() => {
    var u, f;
    let c = (u = s.value) == null ? void 0 : u.getElementById("headlessui-portal-root");
    c && i.value === c && i.value.children.length <= 0 && ((f = i.value.parentElement) == null || f.removeChild(i.value));
  }), () => {
    if (i.value === null)
      return null;
    let u = { ref: l, "data-headlessui-portal": "" };
    return te(vt, { to: i.value }, ee({ ourProps: u, theirProps: e, slot: {}, attrs: o, slots: t, name: "Portal" }));
  };
} }), Gl = Symbol("PortalGroupContext"), ea = L({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: o }) {
  let l = js({ resolveTarget() {
    return e.target;
  } });
  return ue(Gl, l), () => {
    let { target: s, ...n } = e;
    return ee({ theirProps: n, ourProps: {}, slot: {}, attrs: t, slots: o, name: "PortalGroup" });
  };
} }), Zl = Symbol("StackContext");
var io = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(io || {});
function ta() {
  return pe(Zl, () => {
  });
}
function oa({ type: e, enabled: t, element: o, onUpdate: l }) {
  let s = ta();
  function n(...a) {
    l == null || l(...a), s(...a);
  }
  G(() => {
    X(t, (a, i) => {
      a ? n(0, e, o) : i === !0 && n(1, e, o);
    }, { immediate: !0, flush: "sync" });
  }), ne(() => {
    t.value && n(1, e, o);
  }), ue(Zl, n);
}
let Kl = Symbol("DescriptionContext");
function la() {
  let e = pe(Kl, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function At({ slot: e = x({}), name: t = "Description", props: o = {} } = {}) {
  let l = x([]);
  function s(n) {
    return l.value.push(n), () => {
      let a = l.value.indexOf(n);
      a !== -1 && l.value.splice(a, 1);
    };
  }
  return ue(Kl, { register: s, slot: e, name: t, props: o }), M(() => l.value.length > 0 ? l.value.join(" ") : void 0);
}
let sa = L({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${re()}` } }, setup(e, { attrs: t, slots: o }) {
  let l = la();
  return G(() => ne(l.register(e.id))), () => {
    let { name: s = "Description", slot: n = x({}), props: a = {} } = l, { id: i, ...u } = e, f = { ...Object.entries(a).reduce((c, [b, $]) => Object.assign(c, { [b]: k($) }), {}), id: i };
    return ee({ ourProps: f, theirProps: u, slot: n.value, attrs: t, slots: o, name: s });
  };
} });
function na(e) {
  let t = Vl(e.getSnapshot());
  return ne(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function Dt() {
  let e = [], t = { addEventListener(o, l, s, n) {
    return o.addEventListener(l, s, n), t.add(() => o.removeEventListener(l, s, n));
  }, requestAnimationFrame(...o) {
    let l = requestAnimationFrame(...o);
    t.add(() => cancelAnimationFrame(l));
  }, nextFrame(...o) {
    t.requestAnimationFrame(() => {
      t.requestAnimationFrame(...o);
    });
  }, setTimeout(...o) {
    let l = setTimeout(...o);
    t.add(() => clearTimeout(l));
  }, style(o, l, s) {
    let n = o.style.getPropertyValue(l);
    return Object.assign(o.style, { [l]: s }), this.add(() => {
      Object.assign(o.style, { [l]: n });
    });
  }, group(o) {
    let l = Dt();
    return o(l), this.add(() => l.dispose());
  }, add(o) {
    return e.push(o), () => {
      let l = e.indexOf(o);
      if (l >= 0)
        for (let s of e.splice(l, 1))
          s();
    };
  }, dispose() {
    for (let o of e.splice(0))
      o();
  } };
  return t;
}
function aa(e, t) {
  let o = e(), l = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return o;
  }, subscribe(s) {
    return l.add(s), () => l.delete(s);
  }, dispatch(s, ...n) {
    let a = t[s].call(o, ...n);
    a && (o = a, l.forEach((i) => i()));
  } };
}
function ra() {
  let e;
  return { before({ doc: t }) {
    var o;
    let l = t.documentElement;
    e = ((o = t.defaultView) != null ? o : window).innerWidth - l.clientWidth;
  }, after({ doc: t, d: o }) {
    let l = t.documentElement, s = l.clientWidth - l.offsetWidth, n = e - s;
    o.style(l, "paddingRight", `${n}px`);
  } };
}
function ia() {
  if (!Un())
    return {};
  let e;
  return { before() {
    e = window.pageYOffset;
  }, after({ doc: t, d: o, meta: l }) {
    function s(a) {
      return l.containers.flatMap((i) => i()).some((i) => i.contains(a));
    }
    o.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
    let n = null;
    o.addEventListener(t, "click", (a) => {
      if (a.target instanceof HTMLElement)
        try {
          let i = a.target.closest("a");
          if (!i)
            return;
          let { hash: u } = new URL(i.href), f = t.querySelector(u);
          f && !s(f) && (n = f);
        } catch {
        }
    }, !0), o.addEventListener(t, "touchmove", (a) => {
      a.target instanceof HTMLElement && !s(a.target) && a.preventDefault();
    }, { passive: !1 }), o.add(() => {
      window.scrollTo(0, window.pageYOffset + e), n && n.isConnected && (n.scrollIntoView({ block: "nearest" }), n = null);
    });
  } };
}
function pa() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function ua(e) {
  let t = {};
  for (let o of e)
    Object.assign(t, o(t));
  return t;
}
let We = aa(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var o;
  let l = (o = this.get(e)) != null ? o : { doc: e, count: 0, d: Dt(), meta: /* @__PURE__ */ new Set() };
  return l.count++, l.meta.add(t), this.set(e, l), this;
}, POP(e, t) {
  let o = this.get(e);
  return o && (o.count--, o.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: o }) {
  let l = { doc: e, d: t, meta: ua(o) }, s = [ia(), ra(), pa()];
  s.forEach(({ before: n }) => n == null ? void 0 : n(l)), s.forEach(({ after: n }) => n == null ? void 0 : n(l));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
We.subscribe(() => {
  let e = We.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [o] of e)
    t.set(o, o.documentElement.style.overflow);
  for (let o of e.values()) {
    let l = t.get(o.doc) === "hidden", s = o.count !== 0;
    (s && !l || !s && l) && We.dispatch(o.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", o), o.count === 0 && We.dispatch("TEARDOWN", o);
  }
});
function da(e, t, o) {
  let l = na(We), s = M(() => {
    let n = e.value ? l.value.get(e.value) : void 0;
    return n ? n.count > 0 : !1;
  });
  return X([e, t], ([n, a], [i], u) => {
    if (!n || !a)
      return;
    We.dispatch("PUSH", n, o);
    let f = !1;
    u(() => {
      f || (We.dispatch("POP", i ?? n, o), f = !0);
    });
  }, { immediate: !0 }), s;
}
var ca = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ca || {});
let po = Symbol("DialogContext");
function mt(e) {
  let t = pe(po, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, mt), o;
  }
  return t;
}
let xt = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", It = L({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: xt }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${re()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: o, slots: l, expose: s }) {
  var n;
  let a = x(!1);
  G(() => {
    a.value = !0;
  });
  let i = x(0), u = lt(), f = M(() => e.open === xt && u !== null ? (u.value & le.Open) === le.Open : e.open), c = x(null), b = x(null), $ = M(() => ye(c));
  if (s({ el: c, $el: c }), !(e.open !== xt || u !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof f.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${f.value === xt ? void 0 : e.open}`);
  let m = M(() => a.value && f.value ? 0 : 1), y = M(() => m.value === 0), v = M(() => i.value > 1), h = pe(po, null) !== null, g = M(() => v.value ? "parent" : "leaf"), w = M(() => u !== null ? (u.value & le.Closing) === le.Closing : !1), P = M(() => h || w.value ? !1 : y.value), C = M(() => {
    var q, W, N;
    return (N = Array.from((W = (q = $.value) == null ? void 0 : q.querySelectorAll("body > *")) != null ? W : []).find((Q) => Q.id === "headlessui-portal-root" ? !1 : Q.contains(A(b)) && Q instanceof HTMLElement)) != null ? N : null;
  });
  ol(C, P);
  let D = M(() => v.value ? !0 : y.value), j = M(() => {
    var q, W, N;
    return (N = Array.from((W = (q = $.value) == null ? void 0 : q.querySelectorAll("[data-headlessui-portal]")) != null ? W : []).find((Q) => Q.contains(A(b)) && Q instanceof HTMLElement)) != null ? N : null;
  });
  ol(j, D), oa({ type: "Dialog", enabled: M(() => m.value === 0), element: c, onUpdate: (q, W) => {
    if (W === "Dialog")
      return ie(q, { [io.Add]: () => i.value += 1, [io.Remove]: () => i.value -= 1 });
  } });
  let T = At({ name: "DialogDescription", slot: M(() => ({ open: f.value })) }), I = x(null), E = { titleId: I, panelRef: x(null), dialogState: m, setTitleId(q) {
    I.value !== q && (I.value = q);
  }, close() {
    t("close", !1);
  } };
  ue(po, E);
  function B() {
    var q, W, N;
    return [...Array.from((W = (q = $.value) == null ? void 0 : q.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? W : []).filter((Q) => !(Q === document.body || Q === document.head || !(Q instanceof HTMLElement) || Q.contains(A(b)) || E.panelRef.value && Q.contains(E.panelRef.value))), (N = E.panelRef.value) != null ? N : c.value];
  }
  let Z = M(() => !(!y.value || v.value));
  zl(() => B(), (q, W) => {
    E.close(), yo(() => W == null ? void 0 : W.focus());
  }, Z);
  let K = M(() => !(v.value || m.value !== 0));
  Co((n = $.value) == null ? void 0 : n.defaultView, "keydown", (q) => {
    K.value && (q.defaultPrevented || q.key === se.Escape && (q.preventDefault(), q.stopPropagation(), E.close()));
  });
  let H = M(() => !(w.value || m.value !== 0 || h));
  return da($, H, (q) => {
    var W;
    return { containers: [...(W = q.containers) != null ? W : [], B] };
  }), de((q) => {
    if (m.value !== 0)
      return;
    let W = A(c);
    if (!W)
      return;
    let N = new ResizeObserver((Q) => {
      for (let Oe of Q) {
        let fe = Oe.target.getBoundingClientRect();
        fe.x === 0 && fe.y === 0 && fe.width === 0 && fe.height === 0 && E.close();
      }
    });
    N.observe(W), q(() => N.disconnect());
  }), () => {
    let { id: q, open: W, initialFocus: N, ...Q } = e, Oe = { ...o, ref: c, id: q, role: "dialog", "aria-modal": m.value === 0 ? !0 : void 0, "aria-labelledby": I.value, "aria-describedby": T.value }, fe = { open: m.value === 0 };
    return te(ro, { force: !0 }, () => [te(Ul, () => te(ea, { target: c.value }, () => te(ro, { force: !1 }, () => te(at, { initialFocus: N, containers: B, features: y.value ? ie(g.value, { parent: at.features.RestoreFocus, leaf: at.features.All & ~at.features.FocusLock }) : at.features.None }, () => ee({ ourProps: Oe, theirProps: Q, slot: fe, attrs: o, slots: l, visible: m.value === 0, features: Se.RenderStrategy | Se.Static, name: "Dialog" }))))), te(Ie, { features: Le.Hidden, ref: b })]);
  };
} });
L({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${re()}` } }, setup(e, { attrs: t, slots: o }) {
  let l = mt("DialogOverlay");
  function s(n) {
    n.target === n.currentTarget && (n.preventDefault(), n.stopPropagation(), l.close());
  }
  return () => {
    let { id: n, ...a } = e;
    return ee({ ourProps: { id: n, "aria-hidden": !0, onClick: s }, theirProps: a, slot: { open: l.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogOverlay" });
  };
} });
L({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${re()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: l }) {
  let s = mt("DialogBackdrop"), n = x(null);
  return l({ el: n, $el: n }), G(() => {
    if (s.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: a, ...i } = e, u = { id: a, ref: n, "aria-hidden": !0 };
    return te(ro, { force: !0 }, () => te(Ul, () => ee({ ourProps: u, theirProps: { ...t, ...i }, slot: { open: s.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogBackdrop" })));
  };
} });
let jt = L({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${re()}` } }, setup(e, { attrs: t, slots: o, expose: l }) {
  let s = mt("DialogPanel");
  l({ el: s.panelRef, $el: s.panelRef });
  function n(a) {
    a.stopPropagation();
  }
  return () => {
    let { id: a, ...i } = e, u = { id: a, ref: s.panelRef, onClick: n };
    return ee({ ourProps: u, theirProps: i, slot: { open: s.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogPanel" });
  };
} }), Yl = L({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${re()}` } }, setup(e, { attrs: t, slots: o }) {
  let l = mt("DialogTitle");
  return G(() => {
    l.setTitleId(e.id), ne(() => l.setTitleId(null));
  }), () => {
    let { id: s, ...n } = e;
    return ee({ ourProps: { id: s }, theirProps: n, slot: { open: l.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogTitle" });
  };
} });
var fa = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(fa || {});
let Xl = Symbol("DisclosureContext");
function So(e) {
  let t = pe(Xl, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, So), o;
  }
  return t;
}
let Ql = Symbol("DisclosurePanelContext");
function va() {
  return pe(Ql, null);
}
let ll = L({ name: "Disclosure", props: { as: { type: [Object, String], default: "template" }, defaultOpen: { type: [Boolean], default: !1 } }, setup(e, { slots: t, attrs: o }) {
  let l = x(e.defaultOpen ? 0 : 1), s = x(null), n = x(null), a = { buttonId: x(null), panelId: x(null), disclosureState: l, panel: s, button: n, toggleDisclosure() {
    l.value = ie(l.value, { [0]: 1, [1]: 0 });
  }, closeDisclosure() {
    l.value !== 1 && (l.value = 1);
  }, close(i) {
    a.closeDisclosure();
    let u = (() => i ? i instanceof HTMLElement ? i : i.value instanceof HTMLElement ? A(i) : A(a.button) : A(a.button))();
    u == null || u.focus();
  } };
  return ue(Xl, a), $o(M(() => ie(l.value, { [0]: le.Open, [1]: le.Closed }))), () => {
    let { defaultOpen: i, ...u } = e, f = { open: l.value === 0, close: a.close };
    return ee({ theirProps: u, ourProps: {}, slot: f, slots: t, attrs: o, name: "Disclosure" });
  };
} }), sl = L({ name: "DisclosureButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-disclosure-button-${re()}` } }, setup(e, { attrs: t, slots: o, expose: l }) {
  let s = So("DisclosureButton");
  G(() => {
    s.buttonId.value = e.id;
  }), ne(() => {
    s.buttonId.value = null;
  });
  let n = va(), a = M(() => n === null ? !1 : n.value === s.panelId.value), i = x(null);
  l({ el: i, $el: i }), a.value || de(() => {
    s.button.value = i.value;
  });
  let u = Vo(M(() => ({ as: e.as, type: t.type })), i);
  function f() {
    var $;
    e.disabled || (a.value ? (s.toggleDisclosure(), ($ = A(s.button)) == null || $.focus()) : s.toggleDisclosure());
  }
  function c($) {
    var m;
    if (!e.disabled)
      if (a.value)
        switch ($.key) {
          case se.Space:
          case se.Enter:
            $.preventDefault(), $.stopPropagation(), s.toggleDisclosure(), (m = A(s.button)) == null || m.focus();
            break;
        }
      else
        switch ($.key) {
          case se.Space:
          case se.Enter:
            $.preventDefault(), $.stopPropagation(), s.toggleDisclosure();
            break;
        }
  }
  function b($) {
    switch ($.key) {
      case se.Space:
        $.preventDefault();
        break;
    }
  }
  return () => {
    let $ = { open: s.disclosureState.value === 0 }, { id: m, ...y } = e, v = a.value ? { ref: i, type: u.value, onClick: f, onKeydown: c } : { id: m, ref: i, type: u.value, "aria-expanded": e.disabled ? void 0 : s.disclosureState.value === 0, "aria-controls": A(s.panel) ? s.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onClick: f, onKeydown: c, onKeyup: b };
    return ee({ ourProps: v, theirProps: y, slot: $, attrs: t, slots: o, name: "DisclosureButton" });
  };
} }), nl = L({ name: "DisclosurePanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-disclosure-panel-${re()}` } }, setup(e, { attrs: t, slots: o, expose: l }) {
  let s = So("DisclosurePanel");
  G(() => {
    s.panelId.value = e.id;
  }), ne(() => {
    s.panelId.value = null;
  }), l({ el: s.panel, $el: s.panel }), ue(Ql, s.panelId);
  let n = lt(), a = M(() => n !== null ? (n.value & le.Open) === le.Open : s.disclosureState.value === 0);
  return () => {
    let i = { open: s.disclosureState.value === 0, close: s.close }, { id: u, ...f } = e, c = { id: u, ref: s.panel };
    return ee({ ourProps: c, theirProps: f, slot: i, attrs: t, slots: o, features: Se.RenderStrategy | Se.Static, visible: a.value, name: "DisclosurePanel" });
  };
} });
var ha = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ha || {});
let Jl = Symbol("PopoverContext");
function Rt(e) {
  let t = pe(Jl, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <${Ft.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, Rt), o;
  }
  return t;
}
let es = Symbol("PopoverGroupContext");
function ts() {
  return pe(es, null);
}
let os = Symbol("PopoverPanelContext");
function ma() {
  return pe(os, null);
}
let Ft = L({ name: "Popover", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: o, expose: l }) {
  var s;
  let n = x(null);
  l({ el: n, $el: n });
  let a = x(1), i = x(null), u = x(null), f = x(null), c = x(null), b = M(() => ye(n)), $ = M(() => {
    var w, P;
    if (!A(i) || !A(c))
      return !1;
    for (let B of document.querySelectorAll("body > *"))
      if (Number(B == null ? void 0 : B.contains(A(i))) ^ Number(B == null ? void 0 : B.contains(A(c))))
        return !0;
    let C = zt(), D = C.indexOf(A(i)), j = (D + C.length - 1) % C.length, T = (D + 1) % C.length, I = C[j], E = C[T];
    return !((w = A(c)) != null && w.contains(I)) && !((P = A(c)) != null && P.contains(E));
  }), m = { popoverState: a, buttonId: x(null), panelId: x(null), panel: c, button: i, isPortalled: $, beforePanelSentinel: u, afterPanelSentinel: f, togglePopover() {
    a.value = ie(a.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    a.value !== 1 && (a.value = 1);
  }, close(w) {
    m.closePopover();
    let P = (() => w ? w instanceof HTMLElement ? w : w.value instanceof HTMLElement ? A(w) : A(m.button) : A(m.button))();
    P == null || P.focus();
  } };
  ue(Jl, m), $o(M(() => ie(a.value, { [0]: le.Open, [1]: le.Closed })));
  let y = { buttonId: m.buttonId, panelId: m.panelId, close() {
    m.closePopover();
  } }, v = ts(), h = v == null ? void 0 : v.registerPopover;
  function g() {
    var w, P, C, D;
    return (D = v == null ? void 0 : v.isFocusWithinPopoverGroup()) != null ? D : ((w = b.value) == null ? void 0 : w.activeElement) && (((P = A(i)) == null ? void 0 : P.contains(b.value.activeElement)) || ((C = A(c)) == null ? void 0 : C.contains(b.value.activeElement)));
  }
  return de(() => h == null ? void 0 : h(y)), Co((s = b.value) == null ? void 0 : s.defaultView, "focus", (w) => {
    var P, C;
    a.value === 0 && (g() || i && c && w.target !== window && ((P = A(m.beforePanelSentinel)) != null && P.contains(w.target) || (C = A(m.afterPanelSentinel)) != null && C.contains(w.target) || m.closePopover()));
  }, !0), zl([i, c], (w, P) => {
    var C;
    m.closePopover(), Bl(P, xo.Loose) || (w.preventDefault(), (C = A(i)) == null || C.focus());
  }, M(() => a.value === 0)), () => {
    let w = { open: a.value === 0, close: m.close };
    return ee({ theirProps: e, ourProps: { ref: n }, slot: w, slots: t, attrs: o, name: "Popover" });
  };
} }), Po = L({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-popover-button-${re()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: l }) {
  let s = Rt("PopoverButton"), n = M(() => ye(s.button));
  l({ el: s.button, $el: s.button }), G(() => {
    s.buttonId.value = e.id;
  }), ne(() => {
    s.buttonId.value = null;
  });
  let a = ts(), i = a == null ? void 0 : a.closeOthers, u = ma(), f = M(() => u === null ? !1 : u.value === s.panelId.value), c = x(null), b = `headlessui-focus-sentinel-${re()}`;
  f.value || de(() => {
    s.button.value = c.value;
  });
  let $ = Vo(M(() => ({ as: e.as, type: t.type })), c);
  function m(g) {
    var w, P, C, D, j;
    if (f.value) {
      if (s.popoverState.value === 1)
        return;
      switch (g.key) {
        case se.Space:
        case se.Enter:
          g.preventDefault(), (P = (w = g.target).click) == null || P.call(w), s.closePopover(), (C = A(s.button)) == null || C.focus();
          break;
      }
    } else
      switch (g.key) {
        case se.Space:
        case se.Enter:
          g.preventDefault(), g.stopPropagation(), s.popoverState.value === 1 && (i == null || i(s.buttonId.value)), s.togglePopover();
          break;
        case se.Escape:
          if (s.popoverState.value !== 0)
            return i == null ? void 0 : i(s.buttonId.value);
          if (!A(s.button) || (D = n.value) != null && D.activeElement && !((j = A(s.button)) != null && j.contains(n.value.activeElement)))
            return;
          g.preventDefault(), g.stopPropagation(), s.closePopover();
          break;
      }
  }
  function y(g) {
    f.value || g.key === se.Space && g.preventDefault();
  }
  function v(g) {
    var w, P;
    e.disabled || (f.value ? (s.closePopover(), (w = A(s.button)) == null || w.focus()) : (g.preventDefault(), g.stopPropagation(), s.popoverState.value === 1 && (i == null || i(s.buttonId.value)), s.togglePopover(), (P = A(s.button)) == null || P.focus()));
  }
  function h(g) {
    g.preventDefault(), g.stopPropagation();
  }
  return () => {
    let g = s.popoverState.value === 0, w = { open: g }, { id: P, ...C } = e, D = f.value ? { ref: c, type: $.value, onKeydown: m, onClick: v } : { ref: c, id: P, type: $.value, "aria-expanded": e.disabled ? void 0 : s.popoverState.value === 0, "aria-controls": A(s.panel) ? s.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onKeydown: m, onKeyup: y, onClick: v, onMousedown: h }, j = ko();
    function T() {
      let I = A(s.panel);
      if (!I)
        return;
      function E() {
        ie(j.value, { [ge.Forwards]: () => be(I, ae.First), [ge.Backwards]: () => be(I, ae.Last) }) === Ze.Error && be(zt().filter((B) => B.dataset.headlessuiFocusGuard !== "true"), ie(j.value, { [ge.Forwards]: ae.Next, [ge.Backwards]: ae.Previous }), { relativeTo: A(s.button) });
      }
      E();
    }
    return te(R, [ee({ ourProps: D, theirProps: { ...t, ...C }, slot: w, attrs: t, slots: o, name: "PopoverButton" }), g && !f.value && s.isPortalled.value && te(Ie, { id: b, features: Le.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: T })]);
  };
} });
L({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(e, { attrs: t, slots: o }) {
  let l = Rt("PopoverOverlay"), s = `headlessui-popover-overlay-${re()}`, n = lt(), a = M(() => n !== null ? (n.value & le.Open) === le.Open : l.popoverState.value === 0);
  function i() {
    l.closePopover();
  }
  return () => {
    let u = { open: l.popoverState.value === 0 };
    return ee({ ourProps: { id: s, "aria-hidden": !0, onClick: i }, theirProps: e, slot: u, attrs: t, slots: o, features: Se.RenderStrategy | Se.Static, visible: a.value, name: "PopoverOverlay" });
  };
} });
let Oo = L({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-popover-panel-${re()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: l }) {
  let { focus: s } = e, n = Rt("PopoverPanel"), a = M(() => ye(n.panel)), i = `headlessui-focus-sentinel-before-${re()}`, u = `headlessui-focus-sentinel-after-${re()}`;
  l({ el: n.panel, $el: n.panel }), G(() => {
    n.panelId.value = e.id;
  }), ne(() => {
    n.panelId.value = null;
  }), ue(os, n.panelId), de(() => {
    var h, g;
    if (!s || n.popoverState.value !== 0 || !n.panel)
      return;
    let w = (h = a.value) == null ? void 0 : h.activeElement;
    (g = A(n.panel)) != null && g.contains(w) || be(A(n.panel), ae.First);
  });
  let f = lt(), c = M(() => f !== null ? (f.value & le.Open) === le.Open : n.popoverState.value === 0);
  function b(h) {
    var g, w;
    switch (h.key) {
      case se.Escape:
        if (n.popoverState.value !== 0 || !A(n.panel) || a.value && !((g = A(n.panel)) != null && g.contains(a.value.activeElement)))
          return;
        h.preventDefault(), h.stopPropagation(), n.closePopover(), (w = A(n.button)) == null || w.focus();
        break;
    }
  }
  function $(h) {
    var g, w, P, C, D;
    let j = h.relatedTarget;
    j && A(n.panel) && ((g = A(n.panel)) != null && g.contains(j) || (n.closePopover(), ((P = (w = A(n.beforePanelSentinel)) == null ? void 0 : w.contains) != null && P.call(w, j) || (D = (C = A(n.afterPanelSentinel)) == null ? void 0 : C.contains) != null && D.call(C, j)) && j.focus({ preventScroll: !0 })));
  }
  let m = ko();
  function y() {
    let h = A(n.panel);
    if (!h)
      return;
    function g() {
      ie(m.value, { [ge.Forwards]: () => {
        var w;
        be(h, ae.First) === Ze.Error && ((w = A(n.afterPanelSentinel)) == null || w.focus());
      }, [ge.Backwards]: () => {
        var w;
        (w = A(n.button)) == null || w.focus({ preventScroll: !0 });
      } });
    }
    g();
  }
  function v() {
    let h = A(n.panel);
    if (!h)
      return;
    function g() {
      ie(m.value, { [ge.Forwards]: () => {
        let w = A(n.button), P = A(n.panel);
        if (!w)
          return;
        let C = zt(), D = C.indexOf(w), j = C.slice(0, D + 1), T = [...C.slice(D + 1), ...j];
        for (let I of T.slice())
          if (I.dataset.headlessuiFocusGuard === "true" || P != null && P.contains(I)) {
            let E = T.indexOf(I);
            E !== -1 && T.splice(E, 1);
          }
        be(T, ae.First, { sorted: !1 });
      }, [ge.Backwards]: () => {
        var w;
        be(h, ae.Previous) === Ze.Error && ((w = A(n.button)) == null || w.focus());
      } });
    }
    g();
  }
  return () => {
    let h = { open: n.popoverState.value === 0, close: n.close }, { id: g, focus: w, ...P } = e, C = { ref: n.panel, id: g, onKeydown: b, onFocusout: s && n.popoverState.value === 0 ? $ : void 0, tabIndex: -1 };
    return ee({ ourProps: C, theirProps: { ...t, ...P }, attrs: t, slot: h, slots: { ...o, default: (...D) => {
      var j;
      return [te(R, [c.value && n.isPortalled.value && te(Ie, { id: i, ref: n.beforePanelSentinel, features: Le.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: y }), (j = o.default) == null ? void 0 : j.call(o, ...D), c.value && n.isPortalled.value && te(Ie, { id: u, ref: n.afterPanelSentinel, features: Le.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: v })])];
    } }, features: Se.RenderStrategy | Se.Static, visible: c.value, name: "PopoverPanel" });
  };
} });
L({ name: "PopoverGroup", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: o, expose: l }) {
  let s = x(null), n = Vl([]), a = M(() => ye(s));
  l({ el: s, $el: s });
  function i(b) {
    let $ = n.value.indexOf(b);
    $ !== -1 && n.value.splice($, 1);
  }
  function u(b) {
    return n.value.push(b), () => {
      i(b);
    };
  }
  function f() {
    var b;
    let $ = a.value;
    if (!$)
      return !1;
    let m = $.activeElement;
    return (b = A(s)) != null && b.contains(m) ? !0 : n.value.some((y) => {
      var v, h;
      return ((v = $.getElementById(y.buttonId.value)) == null ? void 0 : v.contains(m)) || ((h = $.getElementById(y.panelId.value)) == null ? void 0 : h.contains(m));
    });
  }
  function c(b) {
    for (let $ of n.value)
      $.buttonId.value !== b && $.close();
  }
  return ue(es, { registerPopover: u, unregisterPopover: i, isFocusWithinPopoverGroup: f, closeOthers: c }), () => ee({ ourProps: { ref: s }, theirProps: e, slot: {}, attrs: t, slots: o, name: "PopoverGroup" });
} });
let ls = Symbol("LabelContext");
function ss() {
  let e = pe(ls, null);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, ss), t;
  }
  return e;
}
function Lo({ slot: e = {}, name: t = "Label", props: o = {} } = {}) {
  let l = x([]);
  function s(n) {
    return l.value.push(n), () => {
      let a = l.value.indexOf(n);
      a !== -1 && l.value.splice(a, 1);
    };
  }
  return ue(ls, { register: s, slot: e, name: t, props: o }), M(() => l.value.length > 0 ? l.value.join(" ") : void 0);
}
let ns = L({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-label-${re()}` } }, setup(e, { slots: t, attrs: o }) {
  let l = ss();
  return G(() => ne(l.register(e.id))), () => {
    let { name: s = "Label", slot: n = {}, props: a = {} } = l, { id: i, passive: u, ...f } = e, c = { ...Object.entries(a).reduce((b, [$, m]) => Object.assign(b, { [$]: k(m) }), {}), id: i };
    return u && (delete c.onClick, delete c.htmlFor, delete f.onClick), ee({ ourProps: c, theirProps: f, slot: n, attrs: o, slots: t, name: s });
  };
} });
function ba(e, t) {
  return e === t;
}
let as = Symbol("RadioGroupContext");
function rs(e) {
  let t = pe(as, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, rs), o;
  }
  return t;
}
let ga = L({ name: "RadioGroup", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "div" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => ba }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-radiogroup-${re()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: o, slots: l, expose: s }) {
  let n = x(null), a = x([]), i = Lo({ name: "RadioGroupLabel" }), u = At({ name: "RadioGroupDescription" });
  s({ el: n, $el: n });
  let [f, c] = Rl(M(() => e.modelValue), (y) => t("update:modelValue", y), M(() => e.defaultValue)), b = { options: a, value: f, disabled: M(() => e.disabled), firstOption: M(() => a.value.find((y) => !y.propsRef.disabled)), containsCheckedOption: M(() => a.value.some((y) => b.compare(ze(y.propsRef.value), ze(e.modelValue)))), compare(y, v) {
    if (typeof e.by == "string") {
      let h = e.by;
      return (y == null ? void 0 : y[h]) === (v == null ? void 0 : v[h]);
    }
    return e.by(y, v);
  }, change(y) {
    var v;
    if (e.disabled || b.compare(ze(f.value), ze(y)))
      return !1;
    let h = (v = a.value.find((g) => b.compare(ze(g.propsRef.value), ze(y)))) == null ? void 0 : v.propsRef;
    return h != null && h.disabled ? !1 : (c(y), !0);
  }, registerOption(y) {
    a.value.push(y), a.value = Ml(a.value, (v) => v.element);
  }, unregisterOption(y) {
    let v = a.value.findIndex((h) => h.id === y);
    v !== -1 && a.value.splice(v, 1);
  } };
  ue(as, b), Nn({ container: M(() => A(n)), accept(y) {
    return y.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : y.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(y) {
    y.setAttribute("role", "none");
  } });
  function $(y) {
    if (!n.value || !n.value.contains(y.target))
      return;
    let v = a.value.filter((h) => h.propsRef.disabled === !1).map((h) => h.element);
    switch (y.key) {
      case se.Enter:
        jl(y.currentTarget);
        break;
      case se.ArrowLeft:
      case se.ArrowUp:
        if (y.preventDefault(), y.stopPropagation(), be(v, ae.Previous | ae.WrapAround) === Ze.Success) {
          let h = a.value.find((g) => {
            var w;
            return g.element === ((w = ye(n)) == null ? void 0 : w.activeElement);
          });
          h && b.change(h.propsRef.value);
        }
        break;
      case se.ArrowRight:
      case se.ArrowDown:
        if (y.preventDefault(), y.stopPropagation(), be(v, ae.Next | ae.WrapAround) === Ze.Success) {
          let h = a.value.find((g) => {
            var w;
            return g.element === ((w = ye(g.element)) == null ? void 0 : w.activeElement);
          });
          h && b.change(h.propsRef.value);
        }
        break;
      case se.Space:
        {
          y.preventDefault(), y.stopPropagation();
          let h = a.value.find((g) => {
            var w;
            return g.element === ((w = ye(g.element)) == null ? void 0 : w.activeElement);
          });
          h && b.change(h.propsRef.value);
        }
        break;
    }
  }
  let m = M(() => {
    var y;
    return (y = A(n)) == null ? void 0 : y.closest("form");
  });
  return G(() => {
    X([m], () => {
      if (!m.value || e.defaultValue === void 0)
        return;
      function y() {
        b.change(e.defaultValue);
      }
      return m.value.addEventListener("reset", y), () => {
        var v;
        (v = m.value) == null || v.removeEventListener("reset", y);
      };
    }, { immediate: !0 });
  }), () => {
    let { disabled: y, name: v, id: h, ...g } = e, w = { ref: n, id: h, role: "radiogroup", "aria-labelledby": i.value, "aria-describedby": u.value, onKeydown: $ };
    return te(R, [...v != null && f.value != null ? Al({ [v]: f.value }).map(([P, C]) => te(Ie, Tl({ features: Le.Hidden, key: P, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: P, value: C }))) : [], ee({ ourProps: w, theirProps: { ...o, ...Mt(g, ["modelValue", "defaultValue"]) }, slot: {}, attrs: o, slots: l, name: "RadioGroup" })]);
  };
} });
var ya = ((e) => (e[e.Empty = 1] = "Empty", e[e.Active = 2] = "Active", e))(ya || {});
let wa = L({ name: "RadioGroupOption", props: { as: { type: [Object, String], default: "div" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-radiogroup-option-${re()}` } }, setup(e, { attrs: t, slots: o, expose: l }) {
  let s = rs("RadioGroupOption"), n = Lo({ name: "RadioGroupLabel" }), a = At({ name: "RadioGroupDescription" }), i = x(null), u = M(() => ({ value: e.value, disabled: e.disabled })), f = x(1);
  l({ el: i, $el: i }), G(() => s.registerOption({ id: e.id, element: i, propsRef: u })), ne(() => s.unregisterOption(e.id));
  let c = M(() => {
    var g;
    return ((g = s.firstOption.value) == null ? void 0 : g.id) === e.id;
  }), b = M(() => s.disabled.value || e.disabled), $ = M(() => s.compare(ze(s.value.value), ze(e.value))), m = M(() => b.value ? -1 : $.value || !s.containsCheckedOption.value && c.value ? 0 : -1);
  function y() {
    var g;
    s.change(e.value) && (f.value |= 2, (g = i.value) == null || g.focus());
  }
  function v() {
    f.value |= 2;
  }
  function h() {
    f.value &= -3;
  }
  return () => {
    let { id: g, value: w, disabled: P, ...C } = e, D = { checked: $.value, disabled: b.value, active: Boolean(f.value & 2) }, j = { id: g, ref: i, role: "radio", "aria-checked": $.value ? "true" : "false", "aria-labelledby": n.value, "aria-describedby": a.value, "aria-disabled": b.value ? !0 : void 0, tabIndex: m.value, onClick: b.value ? void 0 : y, onFocus: b.value ? void 0 : v, onBlur: b.value ? void 0 : h };
    return ee({ ourProps: j, theirProps: C, slot: D, attrs: t, slots: o, name: "RadioGroupOption" });
  };
} }), al = ns, _a = sa, is = Symbol("GroupContext"), $a = L({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: o }) {
  let l = x(null), s = Lo({ name: "SwitchLabel", props: { htmlFor: M(() => {
    var a;
    return (a = l.value) == null ? void 0 : a.id;
  }), onClick(a) {
    l.value && (a.currentTarget.tagName === "LABEL" && a.preventDefault(), l.value.click(), l.value.focus({ preventScroll: !0 }));
  } } }), n = At({ name: "SwitchDescription" });
  return ue(is, { switchRef: l, labelledby: s, describedby: n }), () => ee({ theirProps: e, ourProps: {}, slot: {}, slots: t, attrs: o, name: "SwitchGroup" });
} }), Va = L({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: !0 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-switch-${re()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: o, slots: l, expose: s }) {
  let n = pe(is, null), [a, i] = Rl(M(() => e.modelValue), (h) => t("update:modelValue", h), M(() => e.defaultChecked));
  function u() {
    i(!a.value);
  }
  let f = x(null), c = n === null ? f : n.switchRef, b = Vo(M(() => ({ as: e.as, type: o.type })), c);
  s({ el: c, $el: c });
  function $(h) {
    h.preventDefault(), u();
  }
  function m(h) {
    h.key === se.Space ? (h.preventDefault(), u()) : h.key === se.Enter && jl(h.currentTarget);
  }
  function y(h) {
    h.preventDefault();
  }
  let v = M(() => {
    var h, g;
    return (g = (h = A(c)) == null ? void 0 : h.closest) == null ? void 0 : g.call(h, "form");
  });
  return G(() => {
    X([v], () => {
      if (!v.value || e.defaultChecked === void 0)
        return;
      function h() {
        i(e.defaultChecked);
      }
      return v.value.addEventListener("reset", h), () => {
        var g;
        (g = v.value) == null || g.removeEventListener("reset", h);
      };
    }, { immediate: !0 });
  }), () => {
    let { id: h, name: g, value: w, ...P } = e, C = { checked: a.value }, D = { id: h, ref: c, role: "switch", type: b.value, tabIndex: 0, "aria-checked": a.value, "aria-labelledby": n == null ? void 0 : n.labelledby.value, "aria-describedby": n == null ? void 0 : n.describedby.value, onClick: $, onKeyup: m, onKeypress: y };
    return te(R, [g != null && a.value != null ? te(Ie, Tl({ features: Le.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: a.value, name: g, value: w })) : null, ee({ ourProps: D, theirProps: { ...o, ...Mt(P, ["modelValue", "defaultChecked"]) }, slot: C, attrs: o, slots: l, name: "Switch" })]);
  };
} }), xa = ns;
function ka(e) {
  let t = { called: !1 };
  return (...o) => {
    if (!t.called)
      return t.called = !0, e(...o);
  };
}
function lo(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function kt(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var uo = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(uo || {});
function Ca(e, t) {
  let o = Dt();
  if (!e)
    return o.dispose;
  let { transitionDuration: l, transitionDelay: s } = getComputedStyle(e), [n, a] = [l, s].map((i) => {
    let [u = 0] = i.split(",").filter(Boolean).map((f) => f.includes("ms") ? parseFloat(f) : parseFloat(f) * 1e3).sort((f, c) => c - f);
    return u;
  });
  return n !== 0 ? o.setTimeout(() => t("finished"), n + a) : t("finished"), o.add(() => t("cancelled")), o.dispose;
}
function rl(e, t, o, l, s, n) {
  let a = Dt(), i = n !== void 0 ? ka(n) : () => {
  };
  return kt(e, ...s), lo(e, ...t, ...o), a.nextFrame(() => {
    kt(e, ...o), lo(e, ...l), a.add(Ca(e, (u) => (kt(e, ...l, ...t), lo(e, ...s), i(u))));
  }), a.add(() => kt(e, ...t, ...o, ...l, ...s)), a.add(() => i("cancelled")), a.dispose;
}
function He(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let To = Symbol("TransitionContext");
var Sa = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Sa || {});
function Pa() {
  return pe(To, null) !== null;
}
function Oa() {
  let e = pe(To, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function La() {
  let e = pe(Eo, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let Eo = Symbol("NestingContext");
function Nt(e) {
  return "children" in e ? Nt(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function ps(e) {
  let t = x([]), o = x(!1);
  G(() => o.value = !0), ne(() => o.value = !1);
  function l(n, a = Ae.Hidden) {
    let i = t.value.findIndex(({ id: u }) => u === n);
    i !== -1 && (ie(a, { [Ae.Unmount]() {
      t.value.splice(i, 1);
    }, [Ae.Hidden]() {
      t.value[i].state = "hidden";
    } }), !Nt(t) && o.value && (e == null || e()));
  }
  function s(n) {
    let a = t.value.find(({ id: i }) => i === n);
    return a ? a.state !== "visible" && (a.state = "visible") : t.value.push({ id: n, state: "visible" }), () => l(n, Ae.Unmount);
  }
  return { children: t, register: s, unregister: l };
}
let us = Se.RenderStrategy, je = L({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: o, slots: l, expose: s }) {
  let n = x(0);
  function a() {
    n.value |= le.Opening, t("beforeEnter");
  }
  function i() {
    n.value &= ~le.Opening, t("afterEnter");
  }
  function u() {
    n.value |= le.Closing, t("beforeLeave");
  }
  function f() {
    n.value &= ~le.Closing, t("afterLeave");
  }
  if (!Pa() && In())
    return () => te(bt, { ...e, onBeforeEnter: a, onAfterEnter: i, onBeforeLeave: u, onAfterLeave: f }, l);
  let c = x(null), b = x("visible"), $ = M(() => e.unmount ? Ae.Unmount : Ae.Hidden);
  s({ el: c, $el: c });
  let { show: m, appear: y } = Oa(), { register: v, unregister: h } = La(), g = { value: !0 }, w = re(), P = { value: !1 }, C = ps(() => {
    !P.value && b.value !== "hidden" && (b.value = "hidden", h(w), f());
  });
  G(() => {
    let H = v(w);
    ne(H);
  }), de(() => {
    if ($.value === Ae.Hidden && w) {
      if (m && b.value !== "visible") {
        b.value = "visible";
        return;
      }
      ie(b.value, { hidden: () => h(w), visible: () => v(w) });
    }
  });
  let D = He(e.enter), j = He(e.enterFrom), T = He(e.enterTo), I = He(e.entered), E = He(e.leave), B = He(e.leaveFrom), Z = He(e.leaveTo);
  G(() => {
    de(() => {
      if (b.value === "visible") {
        let H = A(c);
        if (H instanceof Comment && H.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function K(H) {
    let q = g.value && !y.value, W = A(c);
    !W || !(W instanceof HTMLElement) || q || (P.value = !0, m.value && a(), m.value || u(), H(m.value ? rl(W, D, j, T, I, (N) => {
      P.value = !1, N === uo.Finished && i();
    }) : rl(W, E, B, Z, I, (N) => {
      P.value = !1, N === uo.Finished && (Nt(C) || (b.value = "hidden", h(w), f()));
    })));
  }
  return G(() => {
    X([m], (H, q, W) => {
      K(W), g.value = !1;
    }, { immediate: !0 });
  }), ue(Eo, C), $o(M(() => ie(b.value, { visible: le.Open, hidden: le.Closed }) | n.value)), () => {
    let { appear: H, show: q, enter: W, enterFrom: N, enterTo: Q, entered: Oe, leave: fe, leaveFrom: st, leaveTo: _t, ...Ee } = e, Ye = { ref: c }, Be = { ...Ee, ...y && m && ht.isServer ? { class: O([o.class, Ee.class, ...D, ...j]) } : {} };
    return ee({ theirProps: Be, ourProps: Ye, slot: {}, slots: l, attrs: o, features: us, visible: b.value === "visible", name: "TransitionChild" });
  };
} }), Ta = je, bt = L({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: o, slots: l }) {
  let s = lt(), n = M(() => e.show === null && s !== null ? (s.value & le.Open) === le.Open : e.show);
  de(() => {
    if (![!0, !1].includes(n.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let a = x(n.value ? "visible" : "hidden"), i = ps(() => {
    a.value = "hidden";
  }), u = x(!0), f = { show: n, appear: M(() => e.appear || !u.value) };
  return G(() => {
    de(() => {
      u.value = !1, n.value ? a.value = "visible" : Nt(i) || (a.value = "hidden");
    });
  }), ue(Eo, i), ue(To, f), () => {
    let c = Mt(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), b = { unmount: e.unmount };
    return ee({ ourProps: { ...b, as: "template" }, theirProps: {}, slot: {}, slots: { ...l, default: () => [te(Ta, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...o, ...b, ...c }, l.default)] }, attrs: {}, features: us, visible: a.value === "visible", name: "Transition" });
  };
} });
const Ea = {
  key: 0,
  class: "po-text-sm po-font-normal po-text-slate-400 po-select-none po-block po-text-left po-pt-5"
}, Ba = { class: "po-grid po-grid-cols-3" }, Ma = { class: "po-bg-white hover:po-bg-slate-200 po-rounded-xl po-p-2 po-transition-colors po-duration-150 po-ease-in" }, za = ["href", "target"], Aa = { class: "po-flex po-w-14 po-h-14 po-items-center po-justify-center po-duration-100 po-ease-in-out po-overflow-hidden" }, Da = ["innerHTML"], Ia = { class: "po-text-slate-500 po-font-normal po-text-sm po-text-center" }, il = /* @__PURE__ */ L({
  __name: "appList",
  props: {
    list: { default: () => [] },
    openInNewTab: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, o) => (p(!0), d(R, null, U(t.list, (l) => (p(), d("div", null, [
      l.groupName.length > 0 ? (p(), d("span", Ea, V(l.groupName), 1)) : _("", !0),
      r("ul", Ba, [
        (p(!0), d(R, null, U(l.apps, (s) => (p(), d("li", Ma, [
          r("a", {
            href: s.url,
            target: t.openInNewTab ? "_blank" : "_self",
            class: "po-flex po-flex-col po-group po-justify-center po-items-center"
          }, [
            r("span", Aa, [
              r("span", {
                class: "po-w-9",
                innerHTML: s.icon
              }, null, 8, Da)
            ]),
            r("span", Ia, V(s.name), 1)
          ], 8, za)
        ]))), 256))
      ])
    ]))), 256));
  }
}), ja = {
  name: "PoAppTray"
}, Ra = /* @__PURE__ */ L({
  ...ja,
  props: {
    appList: { default: null },
    justApps: { type: Boolean, default: !1 },
    openInNewTab: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, o = ["", "Internal"], l = M(() => {
      const s = [];
      return t.appList && o.forEach((n) => {
        const a = t.appList.filter((i) => i.group === n);
        a.length > 0 && s.push({
          groupName: n,
          apps: a
        });
      }), s;
    });
    return (s, n) => s.justApps ? (p(), F(il, {
      key: 1,
      list: l.value,
      "open-in-new-tab": s.openInNewTab
    }, null, 8, ["list", "open-in-new-tab"])) : (p(), F(k(Ft), { key: 0 }, {
      default: z(({ open: a }) => [
        S(k(Po), {
          class: O([a ? "" : "po-text-opacity-90", "po-block po-w-6 po-text-slate-100 genie-effect po-z-50 po-outline-none"])
        }, {
          default: z(() => [
            S(k(cn))
          ]),
          _: 2
        }, 1032, ["class"]),
        S(De, {
          "enter-active-class": "po-transition po-duration-200 po-ease-out",
          "enter-from-class": "po-translate-y-1 po-opacity-0",
          "enter-to-class": "po-translate-y-0 po-opacity-100",
          "leave-active-class": "po-transition po-duration-150 po-ease-in",
          "leave-from-class": "po-translate-y-0 po-opacity-100",
          "leave-to-class": "po-translate-y-1 po-opacity-0"
        }, {
          default: z(() => [
            S(k(Oo), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
              default: z(() => [
                S(il, {
                  list: l.value,
                  "open-in-new-tab": s.openInNewTab
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
}), Fa = {
  key: 0,
  class: "po-absolute po-right-0 po-w-3 po-h-3 po-bg-mpao-orange po-rounded-full po-border-2 po-border-mpao-blue"
}, Na = {
  key: 0,
  class: "po-space-y-2"
}, Ha = ["onClick"], qa = { class: "po-flex po-items-center po-justify-between" }, Wa = { class: "po-text-sm po-text-left po-font-semibold po-text-slate-700 po-grow po-flex po-space-x-2 po-items-center" }, Ua = { class: "po-grow" }, Ga = {
  key: 0,
  class: "po-w-[6px] po-h-[6px] po-rounded-full po-shrink-0 po-bg-mpao-orange po-animate-pulse"
}, Za = { class: "po-text-xs po-font-normal po-text-slate-400 po-shrink-0" }, Ka = { class: "po-block po-text-sm po-text-slate-500 po-pb-3 po-text-left" }, Ya = {
  key: 1,
  class: "po-text-sm po-text-slate-500 po-py-10 po-text-center po-block"
}, Xa = {
  name: "PoNotificationHub"
}, Qa = /* @__PURE__ */ L({
  ...Xa,
  props: {
    notifications: { default: null },
    hasNewNotifications: { type: Boolean, default: !1 }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, l) => (p(), F(k(Ft), null, {
      default: z(({ open: s }) => [
        S(k(Po), {
          class: O([s ? "" : "text-opacity-90", "po-block po-w-6 po-text-slate-100 genie-effect po-relative po-z-50 po-outline-none"])
        }, {
          default: z(() => [
            o.hasNewNotifications ? (p(), d("span", Fa)) : _("", !0),
            S(k(tn), { class: "po-stroke-current" })
          ]),
          _: 2
        }, 1032, ["class"]),
        S(De, {
          "enter-active-class": "po-transition po-duration-200 po-ease-out",
          "enter-from-class": "po-translate-y-1 po-opacity-0",
          "enter-to-class": "po-translate-y-0 po-opacity-100",
          "leave-active-class": "po-transition po-duration-150 po-ease-in",
          "leave-from-class": "po-translate-y-0 po-opacity-100",
          "leave-to-class": "po-translate-y-1 po-opacity-0"
        }, {
          default: z(() => [
            S(k(Oo), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
              default: z(() => [
                o.notifications !== null && o.notifications.length > 0 ? (p(), d("ul", Na, [
                  (p(!0), d(R, null, U(o.notifications, (n) => (p(), d("li", {
                    role: "button",
                    class: "po-space-y-2 po-p-2 po-rounded-lg po-bg-white hover:po-bg-slate-100 po-border po-border-slate-100",
                    onClick: oe((a) => o.$emit("button-click", n.name), ["prevent"])
                  }, [
                    r("span", qa, [
                      r("p", Wa, [
                        r("span", Ua, V(n.name), 1),
                        n.seen ? _("", !0) : (p(), d("span", Ga))
                      ]),
                      r("span", Za, V(n.time), 1)
                    ]),
                    r("span", Ka, V(n.text), 1)
                  ], 8, Ha))), 256))
                ])) : (p(), d("span", Ya, " No notifications to show at the moment. We'll keep you informed."))
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
}), Ja = {
  key: 0,
  class: "po-hidden lg:po-block po-text-sky-50 po-text-sm po-shrink-0 po-pr-3 po-truncate po-max-w-[140px] po-overflow-hidden"
}, er = {
  key: 1,
  class: "po-px-3 po-bg-gradient-to-br po-from-slate-50 po-to-blue-100 po-py-1 po-rounded-l-md po-w-[100px] po-flex po-items-center po-justify-center po-text-center"
}, tr = ["src"], or = ["src", "alt"], lr = {
  key: 1,
  class: "po-text-xs po-text-white po-font-semibold"
}, sr = { class: "po-pb-5" }, nr = ["src"], ar = {
  key: 2,
  class: "po-block po-text-sm po-text-slate-400 po-italic"
}, rr = { key: 0 }, ir = { key: 1 }, pr = /* @__PURE__ */ r("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), ur = { class: "po-space-y-2 po-py-2 po-max-h-[250px] po-overflow-y-auto" }, dr = ["onClick"], cr = { class: "po-w-5" }, fr = { class: "" }, vr = { class: "po-block po-text-sm po-font-normal" }, hr = {
  key: 0,
  class: "po-text-left po-block po-text-xs po-text-slate-400"
}, mr = /* @__PURE__ */ r("div", { class: "po-h-[2px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), br = { class: "md:po-grid po-grid-cols-2 po-space-x-1 po-pt-2" }, gr = { class: "po-w-5" }, yr = /* @__PURE__ */ r("span", { class: "po-text-sm po-font-normal" }, "Profile", -1), wr = { class: "po-w-5" }, _r = /* @__PURE__ */ r("span", { class: "po-text-sm po-font-normal" }, "Logout", -1), $r = /* @__PURE__ */ r("div", { class: "po-text-xs po-space-x-3 po-text-center po-pt-3" }, [
  /* @__PURE__ */ r("a", {
    href: "",
    class: "po-text-slate-500 hover:po-text-mpao-lightblue"
  }, "Privacy Policy"),
  /* @__PURE__ */ r("a", {
    href: "",
    class: "po-text-slate-500 hover:po-text-mpao-lightblue"
  }, "Terms of Service")
], -1), Vr = {
  name: "PoProfileSwitcher"
}, xr = /* @__PURE__ */ L({
  ...Vr,
  props: {
    userObject: { default: null },
    avatar: { default: "" },
    logo: { default: "" }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    const o = e;
    function l(b) {
      t("button-click", b);
    }
    const s = x({
      name: "",
      initials: "",
      image: ""
    });
    function n(b) {
      var $, m;
      return b ? ((m = ($ = b.match(/\b[A-Z]/g)) == null ? void 0 : $.join("")) == null ? void 0 : m.substring(0, 2)) ?? "" : "";
    }
    const a = M(() => {
      var v, h, g, w, P, C, D, j, T, I;
      const b = [], $ = (v = o.userObject) == null ? void 0 : v.transacting_as_organisation, m = ($ == null ? void 0 : $.name) || ((h = o.userObject) == null ? void 0 : h.name), y = ($ == null ? void 0 : $.logo) || ((g = o.userObject) == null ? void 0 : g.avatar);
      return s.value = {
        name: m,
        initials: n(m),
        image: y
      }, b.push({
        id: (w = o.userObject) == null ? void 0 : w.id,
        entity_id: (P = o.userObject) == null ? void 0 : P.entity_id,
        name: (C = o.userObject) == null ? void 0 : C.name,
        identifier: null,
        organisation_uuid: null
      }), ((j = (D = o.userObject) == null ? void 0 : D.organisations) == null ? void 0 : j.length) > 0 && b.push(...(T = o.userObject) == null ? void 0 : T.organisations), b.forEach((E) => {
        E.current = $ && Object.keys($).length > 0 && E.entity_id === $.entity_id;
      }), ((I = o.userObject) == null ? void 0 : I.transacting_as_organisation) === null && (b[0].current = !0), b;
    }), i = x(null), u = x(null), { avatar: f, logo: c } = me(o);
    return X(f, () => {
      i.value = f.value;
    }), X(c, () => {
      u.value = c.value;
    }), Rs(() => {
      a.value;
    }), G(() => {
      a.value;
    }), Fs(() => {
      a.value;
    }), Tt(() => {
      a.value;
    }), (b, $) => (p(), F(k(Ft), null, {
      default: z(({ open: m }) => [
        r("div", null, [
          S(k(Po), { class: "po-flex po-items-center po-outline-none" }, {
            default: z(() => [
              u.value ? _("", !0) : (p(), d("span", Ja, V(s.value.name), 1)),
              u.value ? (p(), d("span", er, [
                r("img", {
                  class: "po-h-8",
                  src: u.value,
                  alt: ""
                }, null, 8, tr)
              ])) : _("", !0),
              r("div", {
                class: O([
                  {
                    "po-bg-gradient-to-br po-from-slate-50 po-to-blue-100 po-p-1 po-rounded-r-md": u.value
                  }
                ])
              }, [
                r("div", {
                  class: O([[
                    { "text-opacity-90": m },
                    {
                      "po-w-10 po-h-10": !u.value
                    },
                    { "po-w-8 po-h-8": u.value }
                  ], "po-shrink-0 po-select-none po-rounded-full po-bg-[#2e5266] po-flex po-items-center po-justify-center genie-effect po-z-50"])
                }, [
                  i.value ? (p(), d("img", {
                    key: 0,
                    class: "po-rounded-full po-border po-border-white",
                    src: i.value,
                    alt: s.value.name
                  }, null, 8, or)) : (p(), d("span", lr, V(s.value.initials), 1))
                ], 2)
              ], 2)
            ]),
            _: 2
          }, 1024),
          S(De, {
            "enter-active-class": "po-transition po-duration-200 po-ease-out",
            "enter-from-class": "po-translate-y-1 po-opacity-0",
            "enter-to-class": "po-translate-y-0 po-opacity-100",
            "leave-active-class": "po-transition po-duration-150 po-ease-in",
            "leave-from-class": "po-translate-y-0 po-opacity-100",
            "leave-to-class": "po-translate-y-1 po-opacity-0"
          }, {
            default: z(() => [
              S(k(Oo), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
                default: z(() => {
                  var y, v, h, g;
                  return [
                    r("div", sr, [
                      i.value ? (p(), d("img", {
                        key: 0,
                        class: "po-w-20 po-h-20 po-mx-auto po-rounded-full po-overflow-hidden",
                        src: i.value,
                        alt: ""
                      }, null, 8, nr)) : _("", !0),
                      (y = b.userObject) != null && y.name ? (p(), d("span", {
                        key: 1,
                        class: O(["po-text-base po-text-slate-600 po-font-medium po-block", [{ "po-mt-4": i.value }]])
                      }, V((v = b.userObject) == null ? void 0 : v.name), 3)) : _("", !0),
                      (h = b.userObject) != null && h.name ? (p(), d("span", ar, [
                        s.value.name === ((g = b.userObject) == null ? void 0 : g.name) ? (p(), d("span", rr, "Self")) : (p(), d("span", ir, "User at " + V(s.value.name), 1))
                      ])) : _("", !0)
                    ]),
                    pr,
                    r("div", ur, [
                      (p(!0), d(R, null, U(a.value, (w, P) => (p(), d("a", {
                        href: "#",
                        onClick: oe((C) => l(w), ["prevent"]),
                        class: O(["po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-shadow-sm po-transition-all po-duration-150 po-ease-out hover:po-bg-blue-50", [
                          {
                            " po-bg-white": !w.current
                          },
                          {
                            " po-bg-blue-50 po-shadow-sm": w.current
                          }
                        ]]),
                        role: "button",
                        key: P
                      }, [
                        r("span", cr, [
                          w.isPersonal ? (p(), F(k(Jo), {
                            key: 0,
                            class: O([
                              "po-stroke-current",
                              { "po-stroke-mpao-lightblue": w.current }
                            ])
                          }, null, 8, ["class"])) : _("", !0),
                          w.isPersonal ? _("", !0) : (p(), F(k(ln), {
                            key: 1,
                            class: O([
                              "po-stroke-current",
                              { "po-stroke-mpao-lightblue": w.current }
                            ])
                          }, null, 8, ["class"]))
                        ]),
                        r("span", fr, [
                          r("span", vr, V(w.name), 1),
                          w.identifier ? (p(), d("span", hr, V(w.identifier), 1)) : _("", !0)
                        ])
                      ], 10, dr))), 128))
                    ]),
                    mr,
                    r("div", br, [
                      r("a", {
                        href: "#",
                        onClick: $[0] || ($[0] = oe((w) => b.$emit("button-click", "current-profile"), ["prevent"])),
                        class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-slate-50 hover:po-bg-blue-50 po-transition-all po-duration-150 po-ease-out",
                        role: "button"
                      }, [
                        r("span", gr, [
                          S(k(Jo), { class: "po-stroke-current" })
                        ]),
                        yr
                      ]),
                      r("a", {
                        href: "#",
                        onClick: $[1] || ($[1] = oe((w) => b.$emit("button-click", "logout"), ["prevent"])),
                        class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-slate-50 hover:po-bg-blue-50 po-transition-all po-duration-150 po-ease-out",
                        role: "button"
                      }, [
                        r("span", wr, [
                          S(k(Qs), { class: "po-stroke-current" })
                        ]),
                        _r
                      ])
                    ]),
                    $r
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
}), Ht = /* @__PURE__ */ L({
  __name: "LoadingDots",
  props: {
    dotColor: { default: "po-bg-mpao-lightblue" },
    absolute: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, o) => (p(), d("div", {
      class: O(["loading-dots po-inline-block po-w-[40px] po-h-[10px]", [{ "po-relative": !t.absolute }, { "po-absolute": t.absolute }]])
    }, [
      r("div", {
        class: O(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[8px]", t.dotColor])
      }, null, 2),
      r("div", {
        class: O(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[8px]", t.dotColor])
      }, null, 2),
      r("div", {
        class: O(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[17px]", t.dotColor])
      }, null, 2),
      r("div", {
        class: O(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[26px]", t.dotColor])
      }, null, 2)
    ], 2));
  }
}), kr = ["disabled", "aria-disabled"], Cr = ["value", "disabled", "aria-disabled"], Sr = {
  name: "PoButton"
}, Bo = /* @__PURE__ */ L({
  ...Sr,
  props: {
    type: { default: "button" },
    actionType: { default: "default" },
    label: { default: "Button" },
    disabled: { type: Boolean, default: !1 },
    to: { default: "#" },
    overrideColors: { type: Boolean, default: !1 },
    size: { default: "md" },
    isLoading: { type: Boolean, default: !1 }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    const o = e, l = "po-rounded-md po-transition-colors po-border po-duration-100 po-ease-in-out po-cursor-pointer disabled:po-bg-slate-400 disabled:po-border-slate-400 disabled:po-cursor-default disabled:po-hover:bg-slate-400", s = M(() => {
      switch (o.size) {
        case "sm":
          return "po-px-2 po-py-1 po-text-xs";
        case "md":
          return "po-px-4 po-py-2 po-text-sm";
        case "lg":
          return "po-px-5 po-py-3 po-text-normal";
      }
    }), n = M(() => {
      if (o.overrideColors)
        return "";
      switch (o.actionType) {
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
    return (a, i) => (p(), d(R, null, [
      a.isLoading ? (p(), d("span", {
        key: 0,
        class: O([[l, s.value], "po-bg-slate-200 hover:po-bg-slate-200 focus:po-bg-slate-200"])
      }, [
        S(Ht, {
          "dot-color": "po-bg-slate-500",
          class: "po-relative -po-bottom-[0.2rem]"
        })
      ], 2)) : _("", !0),
      a.type == "button" && !a.isLoading ? (p(), d("button", xe({
        key: 1,
        onClick: i[0] || (i[0] = oe((u) => a.$emit("button-click", a.to), ["prevent"])),
        class: [l, s.value, n.value],
        disabled: a.disabled,
        "aria-disabled": a.disabled
      }, a.$attrs), [
        Y(a.$slots, "label", {}, () => [
          J(V(a.label), 1)
        ])
      ], 16, kr)) : _("", !0),
      a.type == "submit" && !a.isLoading ? (p(), d("input", xe({
        key: 2,
        type: "submit",
        class: [l, s.value, n.value],
        value: a.label,
        disabled: a.disabled,
        "aria-disabled": a.disabled
      }, a.$attrs), null, 16, Cr)) : _("", !0),
      a.type == "link" && !a.isLoading ? (p(), d("a", xe({
        key: 3,
        href: "#",
        onClick: i[1] || (i[1] = oe((u) => a.$emit("button-click", a.to), ["prevent"])),
        class: [l, s.value, n.value]
      }, a.$attrs), [
        Y(a.$slots, "label", {}, () => [
          J(V(a.label), 1)
        ])
      ], 16)) : _("", !0),
      a.type == "simple" && !a.isLoading ? (p(), d("a", {
        key: 4,
        href: "#",
        onClick: i[2] || (i[2] = oe((u) => a.$emit("button-click", a.to), ["prevent"])),
        class: O(["po-text-sm po-transition-colors po-duration-100 po-ease-in-out po-inline-flex po-items-center po-space-x-1", [
          { "po-text-mpao-lightblue hover:po-text-mpao-blue": !a.overrideColors }
        ]])
      }, [
        Y(a.$slots, "label", {}, () => [
          J(V(a.label), 1)
        ])
      ], 2)) : _("", !0)
    ], 64));
  }
});
function Pr(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "fill-rule": "evenodd",
      d: "M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Or(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "fill-rule": "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h4.59l-2.1 1.95a.75.75 0 001.02 1.1l3.5-3.25a.75.75 0 000-1.1l-3.5-3.25a.75.75 0 10-1.02 1.1l2.1 1.95H6.75z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Lr(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "fill-rule": "evenodd",
      d: "M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Tr(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "fill-rule": "evenodd",
      d: "M2.24 6.8a.75.75 0 001.06-.04l1.95-2.1v8.59a.75.75 0 001.5 0V4.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L2.2 5.74a.75.75 0 00.04 1.06zm8 6.4a.75.75 0 00-.04 1.06l3.25 3.5a.75.75 0 001.1 0l3.25-3.5a.75.75 0 10-1.1-1.02l-1.95 2.1V6.75a.75.75 0 00-1.5 0v8.59l-1.95-2.1a.75.75 0 00-1.06-.04z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Er(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "fill-rule": "evenodd",
      d: "M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z",
      "clip-rule": "evenodd"
    })
  ]);
}
function pl(e, t) {
  return p(), d("svg", {
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
function Br(e, t) {
  return p(), d("svg", {
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
function Mr(e, t) {
  return p(), d("svg", {
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
function ds(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "fill-rule": "evenodd",
      d: "M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z",
      "clip-rule": "evenodd"
    })
  ]);
}
function qt(e, t) {
  return p(), d("svg", {
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
function zr(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "fill-rule": "evenodd",
      d: "M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z",
      "clip-rule": "evenodd"
    })
  ]);
}
function Ar(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "fill-rule": "evenodd",
      d: "M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z",
      "clip-rule": "evenodd"
    })
  ]);
}
function cs(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
  ]);
}
var ve = "top", $e = "bottom", Ve = "right", he = "left", Mo = "auto", gt = [ve, $e, Ve, he], Je = "start", dt = "end", Dr = "clippingParents", fs = "viewport", it = "popper", Ir = "reference", ul = /* @__PURE__ */ gt.reduce(function(e, t) {
  return e.concat([t + "-" + Je, t + "-" + dt]);
}, []), vs = /* @__PURE__ */ [].concat(gt, [Mo]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Je, t + "-" + dt]);
}, []), jr = "beforeRead", Rr = "read", Fr = "afterRead", Nr = "beforeMain", Hr = "main", qr = "afterMain", Wr = "beforeWrite", Ur = "write", Gr = "afterWrite", Zr = [jr, Rr, Fr, Nr, Hr, qr, Wr, Ur, Gr];
function Pe(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function we(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Ke(e) {
  var t = we(e).Element;
  return e instanceof t || e instanceof Element;
}
function _e(e) {
  var t = we(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function zo(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = we(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Kr(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(o) {
    var l = t.styles[o] || {}, s = t.attributes[o] || {}, n = t.elements[o];
    !_e(n) || !Pe(n) || (Object.assign(n.style, l), Object.keys(s).forEach(function(a) {
      var i = s[a];
      i === !1 ? n.removeAttribute(a) : n.setAttribute(a, i === !0 ? "" : i);
    }));
  });
}
function Yr(e) {
  var t = e.state, o = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, o.popper), t.styles = o, t.elements.arrow && Object.assign(t.elements.arrow.style, o.arrow), function() {
    Object.keys(t.elements).forEach(function(l) {
      var s = t.elements[l], n = t.attributes[l] || {}, a = Object.keys(t.styles.hasOwnProperty(l) ? t.styles[l] : o[l]), i = a.reduce(function(u, f) {
        return u[f] = "", u;
      }, {});
      !_e(s) || !Pe(s) || (Object.assign(s.style, i), Object.keys(n).forEach(function(u) {
        s.removeAttribute(u);
      }));
    });
  };
}
const Xr = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Kr,
  effect: Yr,
  requires: ["computeStyles"]
};
function ke(e) {
  return e.split("-")[0];
}
var Ge = Math.max, Lt = Math.min, et = Math.round;
function co() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function hs() {
  return !/^((?!chrome|android).)*safari/i.test(co());
}
function tt(e, t, o) {
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  var l = e.getBoundingClientRect(), s = 1, n = 1;
  t && _e(e) && (s = e.offsetWidth > 0 && et(l.width) / e.offsetWidth || 1, n = e.offsetHeight > 0 && et(l.height) / e.offsetHeight || 1);
  var a = Ke(e) ? we(e) : window, i = a.visualViewport, u = !hs() && o, f = (l.left + (u && i ? i.offsetLeft : 0)) / s, c = (l.top + (u && i ? i.offsetTop : 0)) / n, b = l.width / s, $ = l.height / n;
  return {
    width: b,
    height: $,
    top: c,
    right: f + b,
    bottom: c + $,
    left: f,
    x: f,
    y: c
  };
}
function Ao(e) {
  var t = tt(e), o = e.offsetWidth, l = e.offsetHeight;
  return Math.abs(t.width - o) <= 1 && (o = t.width), Math.abs(t.height - l) <= 1 && (l = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: o,
    height: l
  };
}
function ms(e, t) {
  var o = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (o && zo(o)) {
    var l = t;
    do {
      if (l && e.isSameNode(l))
        return !0;
      l = l.parentNode || l.host;
    } while (l);
  }
  return !1;
}
function Te(e) {
  return we(e).getComputedStyle(e);
}
function Qr(e) {
  return ["table", "td", "th"].indexOf(Pe(e)) >= 0;
}
function Re(e) {
  return ((Ke(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Wt(e) {
  return Pe(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (zo(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Re(e)
  );
}
function dl(e) {
  return !_e(e) || // https://github.com/popperjs/popper-core/issues/837
  Te(e).position === "fixed" ? null : e.offsetParent;
}
function Jr(e) {
  var t = /firefox/i.test(co()), o = /Trident/i.test(co());
  if (o && _e(e)) {
    var l = Te(e);
    if (l.position === "fixed")
      return null;
  }
  var s = Wt(e);
  for (zo(s) && (s = s.host); _e(s) && ["html", "body"].indexOf(Pe(s)) < 0; ) {
    var n = Te(s);
    if (n.transform !== "none" || n.perspective !== "none" || n.contain === "paint" || ["transform", "perspective"].indexOf(n.willChange) !== -1 || t && n.willChange === "filter" || t && n.filter && n.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function yt(e) {
  for (var t = we(e), o = dl(e); o && Qr(o) && Te(o).position === "static"; )
    o = dl(o);
  return o && (Pe(o) === "html" || Pe(o) === "body" && Te(o).position === "static") ? t : o || Jr(e) || t;
}
function Do(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function pt(e, t, o) {
  return Ge(e, Lt(t, o));
}
function ei(e, t, o) {
  var l = pt(e, t, o);
  return l > o ? o : l;
}
function bs() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function gs(e) {
  return Object.assign({}, bs(), e);
}
function ys(e, t) {
  return t.reduce(function(o, l) {
    return o[l] = e, o;
  }, {});
}
var ti = function(t, o) {
  return t = typeof t == "function" ? t(Object.assign({}, o.rects, {
    placement: o.placement
  })) : t, gs(typeof t != "number" ? t : ys(t, gt));
};
function oi(e) {
  var t, o = e.state, l = e.name, s = e.options, n = o.elements.arrow, a = o.modifiersData.popperOffsets, i = ke(o.placement), u = Do(i), f = [he, Ve].indexOf(i) >= 0, c = f ? "height" : "width";
  if (!(!n || !a)) {
    var b = ti(s.padding, o), $ = Ao(n), m = u === "y" ? ve : he, y = u === "y" ? $e : Ve, v = o.rects.reference[c] + o.rects.reference[u] - a[u] - o.rects.popper[c], h = a[u] - o.rects.reference[u], g = yt(n), w = g ? u === "y" ? g.clientHeight || 0 : g.clientWidth || 0 : 0, P = v / 2 - h / 2, C = b[m], D = w - $[c] - b[y], j = w / 2 - $[c] / 2 + P, T = pt(C, j, D), I = u;
    o.modifiersData[l] = (t = {}, t[I] = T, t.centerOffset = T - j, t);
  }
}
function li(e) {
  var t = e.state, o = e.options, l = o.element, s = l === void 0 ? "[data-popper-arrow]" : l;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || ms(t.elements.popper, s) && (t.elements.arrow = s));
}
const si = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: oi,
  effect: li,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ot(e) {
  return e.split("-")[1];
}
var ni = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function ai(e, t) {
  var o = e.x, l = e.y, s = t.devicePixelRatio || 1;
  return {
    x: et(o * s) / s || 0,
    y: et(l * s) / s || 0
  };
}
function cl(e) {
  var t, o = e.popper, l = e.popperRect, s = e.placement, n = e.variation, a = e.offsets, i = e.position, u = e.gpuAcceleration, f = e.adaptive, c = e.roundOffsets, b = e.isFixed, $ = a.x, m = $ === void 0 ? 0 : $, y = a.y, v = y === void 0 ? 0 : y, h = typeof c == "function" ? c({
    x: m,
    y: v
  }) : {
    x: m,
    y: v
  };
  m = h.x, v = h.y;
  var g = a.hasOwnProperty("x"), w = a.hasOwnProperty("y"), P = he, C = ve, D = window;
  if (f) {
    var j = yt(o), T = "clientHeight", I = "clientWidth";
    if (j === we(o) && (j = Re(o), Te(j).position !== "static" && i === "absolute" && (T = "scrollHeight", I = "scrollWidth")), j = j, s === ve || (s === he || s === Ve) && n === dt) {
      C = $e;
      var E = b && j === D && D.visualViewport ? D.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        j[T]
      );
      v -= E - l.height, v *= u ? 1 : -1;
    }
    if (s === he || (s === ve || s === $e) && n === dt) {
      P = Ve;
      var B = b && j === D && D.visualViewport ? D.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        j[I]
      );
      m -= B - l.width, m *= u ? 1 : -1;
    }
  }
  var Z = Object.assign({
    position: i
  }, f && ni), K = c === !0 ? ai({
    x: m,
    y: v
  }, we(o)) : {
    x: m,
    y: v
  };
  if (m = K.x, v = K.y, u) {
    var H;
    return Object.assign({}, Z, (H = {}, H[C] = w ? "0" : "", H[P] = g ? "0" : "", H.transform = (D.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + v + "px)" : "translate3d(" + m + "px, " + v + "px, 0)", H));
  }
  return Object.assign({}, Z, (t = {}, t[C] = w ? v + "px" : "", t[P] = g ? m + "px" : "", t.transform = "", t));
}
function ri(e) {
  var t = e.state, o = e.options, l = o.gpuAcceleration, s = l === void 0 ? !0 : l, n = o.adaptive, a = n === void 0 ? !0 : n, i = o.roundOffsets, u = i === void 0 ? !0 : i, f = {
    placement: ke(t.placement),
    variation: ot(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: s,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, cl(Object.assign({}, f, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: a,
    roundOffsets: u
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, cl(Object.assign({}, f, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: u
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const ii = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: ri,
  data: {}
};
var Ct = {
  passive: !0
};
function pi(e) {
  var t = e.state, o = e.instance, l = e.options, s = l.scroll, n = s === void 0 ? !0 : s, a = l.resize, i = a === void 0 ? !0 : a, u = we(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return n && f.forEach(function(c) {
    c.addEventListener("scroll", o.update, Ct);
  }), i && u.addEventListener("resize", o.update, Ct), function() {
    n && f.forEach(function(c) {
      c.removeEventListener("scroll", o.update, Ct);
    }), i && u.removeEventListener("resize", o.update, Ct);
  };
}
const ui = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: pi,
  data: {}
};
var di = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function St(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return di[t];
  });
}
var ci = {
  start: "end",
  end: "start"
};
function fl(e) {
  return e.replace(/start|end/g, function(t) {
    return ci[t];
  });
}
function Io(e) {
  var t = we(e), o = t.pageXOffset, l = t.pageYOffset;
  return {
    scrollLeft: o,
    scrollTop: l
  };
}
function jo(e) {
  return tt(Re(e)).left + Io(e).scrollLeft;
}
function fi(e, t) {
  var o = we(e), l = Re(e), s = o.visualViewport, n = l.clientWidth, a = l.clientHeight, i = 0, u = 0;
  if (s) {
    n = s.width, a = s.height;
    var f = hs();
    (f || !f && t === "fixed") && (i = s.offsetLeft, u = s.offsetTop);
  }
  return {
    width: n,
    height: a,
    x: i + jo(e),
    y: u
  };
}
function vi(e) {
  var t, o = Re(e), l = Io(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, n = Ge(o.scrollWidth, o.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = Ge(o.scrollHeight, o.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), i = -l.scrollLeft + jo(e), u = -l.scrollTop;
  return Te(s || o).direction === "rtl" && (i += Ge(o.clientWidth, s ? s.clientWidth : 0) - n), {
    width: n,
    height: a,
    x: i,
    y: u
  };
}
function Ro(e) {
  var t = Te(e), o = t.overflow, l = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + s + l);
}
function ws(e) {
  return ["html", "body", "#document"].indexOf(Pe(e)) >= 0 ? e.ownerDocument.body : _e(e) && Ro(e) ? e : ws(Wt(e));
}
function ut(e, t) {
  var o;
  t === void 0 && (t = []);
  var l = ws(e), s = l === ((o = e.ownerDocument) == null ? void 0 : o.body), n = we(l), a = s ? [n].concat(n.visualViewport || [], Ro(l) ? l : []) : l, i = t.concat(a);
  return s ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(ut(Wt(a)))
  );
}
function fo(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function hi(e, t) {
  var o = tt(e, !1, t === "fixed");
  return o.top = o.top + e.clientTop, o.left = o.left + e.clientLeft, o.bottom = o.top + e.clientHeight, o.right = o.left + e.clientWidth, o.width = e.clientWidth, o.height = e.clientHeight, o.x = o.left, o.y = o.top, o;
}
function vl(e, t, o) {
  return t === fs ? fo(fi(e, o)) : Ke(t) ? hi(t, o) : fo(vi(Re(e)));
}
function mi(e) {
  var t = ut(Wt(e)), o = ["absolute", "fixed"].indexOf(Te(e).position) >= 0, l = o && _e(e) ? yt(e) : e;
  return Ke(l) ? t.filter(function(s) {
    return Ke(s) && ms(s, l) && Pe(s) !== "body";
  }) : [];
}
function bi(e, t, o, l) {
  var s = t === "clippingParents" ? mi(e) : [].concat(t), n = [].concat(s, [o]), a = n[0], i = n.reduce(function(u, f) {
    var c = vl(e, f, l);
    return u.top = Ge(c.top, u.top), u.right = Lt(c.right, u.right), u.bottom = Lt(c.bottom, u.bottom), u.left = Ge(c.left, u.left), u;
  }, vl(e, a, l));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function _s(e) {
  var t = e.reference, o = e.element, l = e.placement, s = l ? ke(l) : null, n = l ? ot(l) : null, a = t.x + t.width / 2 - o.width / 2, i = t.y + t.height / 2 - o.height / 2, u;
  switch (s) {
    case ve:
      u = {
        x: a,
        y: t.y - o.height
      };
      break;
    case $e:
      u = {
        x: a,
        y: t.y + t.height
      };
      break;
    case Ve:
      u = {
        x: t.x + t.width,
        y: i
      };
      break;
    case he:
      u = {
        x: t.x - o.width,
        y: i
      };
      break;
    default:
      u = {
        x: t.x,
        y: t.y
      };
  }
  var f = s ? Do(s) : null;
  if (f != null) {
    var c = f === "y" ? "height" : "width";
    switch (n) {
      case Je:
        u[f] = u[f] - (t[c] / 2 - o[c] / 2);
        break;
      case dt:
        u[f] = u[f] + (t[c] / 2 - o[c] / 2);
        break;
    }
  }
  return u;
}
function ct(e, t) {
  t === void 0 && (t = {});
  var o = t, l = o.placement, s = l === void 0 ? e.placement : l, n = o.strategy, a = n === void 0 ? e.strategy : n, i = o.boundary, u = i === void 0 ? Dr : i, f = o.rootBoundary, c = f === void 0 ? fs : f, b = o.elementContext, $ = b === void 0 ? it : b, m = o.altBoundary, y = m === void 0 ? !1 : m, v = o.padding, h = v === void 0 ? 0 : v, g = gs(typeof h != "number" ? h : ys(h, gt)), w = $ === it ? Ir : it, P = e.rects.popper, C = e.elements[y ? w : $], D = bi(Ke(C) ? C : C.contextElement || Re(e.elements.popper), u, c, a), j = tt(e.elements.reference), T = _s({
    reference: j,
    element: P,
    strategy: "absolute",
    placement: s
  }), I = fo(Object.assign({}, P, T)), E = $ === it ? I : j, B = {
    top: D.top - E.top + g.top,
    bottom: E.bottom - D.bottom + g.bottom,
    left: D.left - E.left + g.left,
    right: E.right - D.right + g.right
  }, Z = e.modifiersData.offset;
  if ($ === it && Z) {
    var K = Z[s];
    Object.keys(B).forEach(function(H) {
      var q = [Ve, $e].indexOf(H) >= 0 ? 1 : -1, W = [ve, $e].indexOf(H) >= 0 ? "y" : "x";
      B[H] += K[W] * q;
    });
  }
  return B;
}
function gi(e, t) {
  t === void 0 && (t = {});
  var o = t, l = o.placement, s = o.boundary, n = o.rootBoundary, a = o.padding, i = o.flipVariations, u = o.allowedAutoPlacements, f = u === void 0 ? vs : u, c = ot(l), b = c ? i ? ul : ul.filter(function(y) {
    return ot(y) === c;
  }) : gt, $ = b.filter(function(y) {
    return f.indexOf(y) >= 0;
  });
  $.length === 0 && ($ = b);
  var m = $.reduce(function(y, v) {
    return y[v] = ct(e, {
      placement: v,
      boundary: s,
      rootBoundary: n,
      padding: a
    })[ke(v)], y;
  }, {});
  return Object.keys(m).sort(function(y, v) {
    return m[y] - m[v];
  });
}
function yi(e) {
  if (ke(e) === Mo)
    return [];
  var t = St(e);
  return [fl(e), t, fl(t)];
}
function wi(e) {
  var t = e.state, o = e.options, l = e.name;
  if (!t.modifiersData[l]._skip) {
    for (var s = o.mainAxis, n = s === void 0 ? !0 : s, a = o.altAxis, i = a === void 0 ? !0 : a, u = o.fallbackPlacements, f = o.padding, c = o.boundary, b = o.rootBoundary, $ = o.altBoundary, m = o.flipVariations, y = m === void 0 ? !0 : m, v = o.allowedAutoPlacements, h = t.options.placement, g = ke(h), w = g === h, P = u || (w || !y ? [St(h)] : yi(h)), C = [h].concat(P).reduce(function(Be, Me) {
      return Be.concat(ke(Me) === Mo ? gi(t, {
        placement: Me,
        boundary: c,
        rootBoundary: b,
        padding: f,
        flipVariations: y,
        allowedAutoPlacements: v
      }) : Me);
    }, []), D = t.rects.reference, j = t.rects.popper, T = /* @__PURE__ */ new Map(), I = !0, E = C[0], B = 0; B < C.length; B++) {
      var Z = C[B], K = ke(Z), H = ot(Z) === Je, q = [ve, $e].indexOf(K) >= 0, W = q ? "width" : "height", N = ct(t, {
        placement: Z,
        boundary: c,
        rootBoundary: b,
        altBoundary: $,
        padding: f
      }), Q = q ? H ? Ve : he : H ? $e : ve;
      D[W] > j[W] && (Q = St(Q));
      var Oe = St(Q), fe = [];
      if (n && fe.push(N[K] <= 0), i && fe.push(N[Q] <= 0, N[Oe] <= 0), fe.every(function(Be) {
        return Be;
      })) {
        E = Z, I = !1;
        break;
      }
      T.set(Z, fe);
    }
    if (I)
      for (var st = y ? 3 : 1, _t = function(Me) {
        var nt = C.find(function($t) {
          var Fe = T.get($t);
          if (Fe)
            return Fe.slice(0, Me).every(function(Xt) {
              return Xt;
            });
        });
        if (nt)
          return E = nt, "break";
      }, Ee = st; Ee > 0; Ee--) {
        var Ye = _t(Ee);
        if (Ye === "break")
          break;
      }
    t.placement !== E && (t.modifiersData[l]._skip = !0, t.placement = E, t.reset = !0);
  }
}
const _i = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: wi,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function hl(e, t, o) {
  return o === void 0 && (o = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - o.y,
    right: e.right - t.width + o.x,
    bottom: e.bottom - t.height + o.y,
    left: e.left - t.width - o.x
  };
}
function ml(e) {
  return [ve, Ve, $e, he].some(function(t) {
    return e[t] >= 0;
  });
}
function $i(e) {
  var t = e.state, o = e.name, l = t.rects.reference, s = t.rects.popper, n = t.modifiersData.preventOverflow, a = ct(t, {
    elementContext: "reference"
  }), i = ct(t, {
    altBoundary: !0
  }), u = hl(a, l), f = hl(i, s, n), c = ml(u), b = ml(f);
  t.modifiersData[o] = {
    referenceClippingOffsets: u,
    popperEscapeOffsets: f,
    isReferenceHidden: c,
    hasPopperEscaped: b
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": b
  });
}
const Vi = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: $i
};
function xi(e, t, o) {
  var l = ke(e), s = [he, ve].indexOf(l) >= 0 ? -1 : 1, n = typeof o == "function" ? o(Object.assign({}, t, {
    placement: e
  })) : o, a = n[0], i = n[1];
  return a = a || 0, i = (i || 0) * s, [he, Ve].indexOf(l) >= 0 ? {
    x: i,
    y: a
  } : {
    x: a,
    y: i
  };
}
function ki(e) {
  var t = e.state, o = e.options, l = e.name, s = o.offset, n = s === void 0 ? [0, 0] : s, a = vs.reduce(function(c, b) {
    return c[b] = xi(b, t.rects, n), c;
  }, {}), i = a[t.placement], u = i.x, f = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += f), t.modifiersData[l] = a;
}
const Ci = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: ki
};
function Si(e) {
  var t = e.state, o = e.name;
  t.modifiersData[o] = _s({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Pi = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Si,
  data: {}
};
function Oi(e) {
  return e === "x" ? "y" : "x";
}
function Li(e) {
  var t = e.state, o = e.options, l = e.name, s = o.mainAxis, n = s === void 0 ? !0 : s, a = o.altAxis, i = a === void 0 ? !1 : a, u = o.boundary, f = o.rootBoundary, c = o.altBoundary, b = o.padding, $ = o.tether, m = $ === void 0 ? !0 : $, y = o.tetherOffset, v = y === void 0 ? 0 : y, h = ct(t, {
    boundary: u,
    rootBoundary: f,
    padding: b,
    altBoundary: c
  }), g = ke(t.placement), w = ot(t.placement), P = !w, C = Do(g), D = Oi(C), j = t.modifiersData.popperOffsets, T = t.rects.reference, I = t.rects.popper, E = typeof v == "function" ? v(Object.assign({}, t.rects, {
    placement: t.placement
  })) : v, B = typeof E == "number" ? {
    mainAxis: E,
    altAxis: E
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, E), Z = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, K = {
    x: 0,
    y: 0
  };
  if (j) {
    if (n) {
      var H, q = C === "y" ? ve : he, W = C === "y" ? $e : Ve, N = C === "y" ? "height" : "width", Q = j[C], Oe = Q + h[q], fe = Q - h[W], st = m ? -I[N] / 2 : 0, _t = w === Je ? T[N] : I[N], Ee = w === Je ? -I[N] : -T[N], Ye = t.elements.arrow, Be = m && Ye ? Ao(Ye) : {
        width: 0,
        height: 0
      }, Me = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : bs(), nt = Me[q], $t = Me[W], Fe = pt(0, T[N], Be[N]), Xt = P ? T[N] / 2 - st - Fe - nt - B.mainAxis : _t - Fe - nt - B.mainAxis, Ls = P ? -T[N] / 2 + st + Fe + $t + B.mainAxis : Ee + Fe + $t + B.mainAxis, Qt = t.elements.arrow && yt(t.elements.arrow), Ts = Qt ? C === "y" ? Qt.clientTop || 0 : Qt.clientLeft || 0 : 0, Ho = (H = Z == null ? void 0 : Z[C]) != null ? H : 0, Es = Q + Xt - Ho - Ts, Bs = Q + Ls - Ho, qo = pt(m ? Lt(Oe, Es) : Oe, Q, m ? Ge(fe, Bs) : fe);
      j[C] = qo, K[C] = qo - Q;
    }
    if (i) {
      var Wo, Ms = C === "x" ? ve : he, zs = C === "x" ? $e : Ve, Ne = j[D], Vt = D === "y" ? "height" : "width", Uo = Ne + h[Ms], Go = Ne - h[zs], Jt = [ve, he].indexOf(g) !== -1, Zo = (Wo = Z == null ? void 0 : Z[D]) != null ? Wo : 0, Ko = Jt ? Uo : Ne - T[Vt] - I[Vt] - Zo + B.altAxis, Yo = Jt ? Ne + T[Vt] + I[Vt] - Zo - B.altAxis : Go, Xo = m && Jt ? ei(Ko, Ne, Yo) : pt(m ? Ko : Uo, Ne, m ? Yo : Go);
      j[D] = Xo, K[D] = Xo - Ne;
    }
    t.modifiersData[l] = K;
  }
}
const Ti = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Li,
  requiresIfExists: ["offset"]
};
function Ei(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Bi(e) {
  return e === we(e) || !_e(e) ? Io(e) : Ei(e);
}
function Mi(e) {
  var t = e.getBoundingClientRect(), o = et(t.width) / e.offsetWidth || 1, l = et(t.height) / e.offsetHeight || 1;
  return o !== 1 || l !== 1;
}
function zi(e, t, o) {
  o === void 0 && (o = !1);
  var l = _e(t), s = _e(t) && Mi(t), n = Re(t), a = tt(e, s, o), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = {
    x: 0,
    y: 0
  };
  return (l || !l && !o) && ((Pe(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Ro(n)) && (i = Bi(t)), _e(t) ? (u = tt(t, !0), u.x += t.clientLeft, u.y += t.clientTop) : n && (u.x = jo(n))), {
    x: a.left + i.scrollLeft - u.x,
    y: a.top + i.scrollTop - u.y,
    width: a.width,
    height: a.height
  };
}
function Ai(e) {
  var t = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), l = [];
  e.forEach(function(n) {
    t.set(n.name, n);
  });
  function s(n) {
    o.add(n.name);
    var a = [].concat(n.requires || [], n.requiresIfExists || []);
    a.forEach(function(i) {
      if (!o.has(i)) {
        var u = t.get(i);
        u && s(u);
      }
    }), l.push(n);
  }
  return e.forEach(function(n) {
    o.has(n.name) || s(n);
  }), l;
}
function Di(e) {
  var t = Ai(e);
  return Zr.reduce(function(o, l) {
    return o.concat(t.filter(function(s) {
      return s.phase === l;
    }));
  }, []);
}
function Ii(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(o) {
      Promise.resolve().then(function() {
        t = void 0, o(e());
      });
    })), t;
  };
}
function ji(e) {
  var t = e.reduce(function(o, l) {
    var s = o[l.name];
    return o[l.name] = s ? Object.assign({}, s, l, {
      options: Object.assign({}, s.options, l.options),
      data: Object.assign({}, s.data, l.data)
    }) : l, o;
  }, {});
  return Object.keys(t).map(function(o) {
    return t[o];
  });
}
var bl = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function gl() {
  for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
    t[o] = arguments[o];
  return !t.some(function(l) {
    return !(l && typeof l.getBoundingClientRect == "function");
  });
}
function Ri(e) {
  e === void 0 && (e = {});
  var t = e, o = t.defaultModifiers, l = o === void 0 ? [] : o, s = t.defaultOptions, n = s === void 0 ? bl : s;
  return function(i, u, f) {
    f === void 0 && (f = n);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, bl, n),
      modifiersData: {},
      elements: {
        reference: i,
        popper: u
      },
      attributes: {},
      styles: {}
    }, b = [], $ = !1, m = {
      state: c,
      setOptions: function(g) {
        var w = typeof g == "function" ? g(c.options) : g;
        v(), c.options = Object.assign({}, n, c.options, w), c.scrollParents = {
          reference: Ke(i) ? ut(i) : i.contextElement ? ut(i.contextElement) : [],
          popper: ut(u)
        };
        var P = Di(ji([].concat(l, c.options.modifiers)));
        return c.orderedModifiers = P.filter(function(C) {
          return C.enabled;
        }), y(), m.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!$) {
          var g = c.elements, w = g.reference, P = g.popper;
          if (gl(w, P)) {
            c.rects = {
              reference: zi(w, yt(P), c.options.strategy === "fixed"),
              popper: Ao(P)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(B) {
              return c.modifiersData[B.name] = Object.assign({}, B.data);
            });
            for (var C = 0; C < c.orderedModifiers.length; C++) {
              if (c.reset === !0) {
                c.reset = !1, C = -1;
                continue;
              }
              var D = c.orderedModifiers[C], j = D.fn, T = D.options, I = T === void 0 ? {} : T, E = D.name;
              typeof j == "function" && (c = j({
                state: c,
                options: I,
                name: E,
                instance: m
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Ii(function() {
        return new Promise(function(h) {
          m.forceUpdate(), h(c);
        });
      }),
      destroy: function() {
        v(), $ = !0;
      }
    };
    if (!gl(i, u))
      return m;
    m.setOptions(f).then(function(h) {
      !$ && f.onFirstUpdate && f.onFirstUpdate(h);
    });
    function y() {
      c.orderedModifiers.forEach(function(h) {
        var g = h.name, w = h.options, P = w === void 0 ? {} : w, C = h.effect;
        if (typeof C == "function") {
          var D = C({
            state: c,
            name: g,
            instance: m,
            options: P
          }), j = function() {
          };
          b.push(D || j);
        }
      });
    }
    function v() {
      b.forEach(function(h) {
        return h();
      }), b = [];
    }
    return m;
  };
}
var Fi = [ui, Pi, ii, Xr, Ci, _i, Ti, si, Vi], Ut = /* @__PURE__ */ Ri({
  defaultModifiers: Fi
});
function Gt(e, t) {
  if (!e)
    return;
  const o = (l) => {
    l.target !== e.value && l.composedPath().includes(e.value) || typeof t == "function" && t();
  };
  return G(() => {
    window.addEventListener("click", o);
  }), xl(() => {
    window.removeEventListener("click", o);
  }), { listener: o };
}
function Ni(e) {
  return { all: e = e || /* @__PURE__ */ new Map(), on: function(t, o) {
    var l = e.get(t);
    l ? l.push(o) : e.set(t, [o]);
  }, off: function(t, o) {
    var l = e.get(t);
    l && (o ? l.splice(l.indexOf(o) >>> 0, 1) : e.set(t, []));
  }, emit: function(t, o) {
    var l = e.get(t);
    l && l.slice().map(function(s) {
      s(o);
    }), (l = e.get("*")) && l.slice().map(function(s) {
      s(t, o);
    });
  } };
}
const Zt = Ni();
function Hi() {
  var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
  if (t > 0)
    return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
  var o = e.indexOf("Trident/");
  if (o > 0) {
    var l = e.indexOf("rv:");
    return parseInt(e.substring(l + 3, e.indexOf(".", l)), 10);
  }
  var s = e.indexOf("Edge/");
  return s > 0 ? parseInt(e.substring(s + 5, e.indexOf(".", s)), 10) : -1;
}
let Pt;
function vo() {
  vo.init || (vo.init = !0, Pt = Hi() !== -1);
}
var Kt = {
  name: "ResizeObserver",
  props: {
    emitOnMount: {
      type: Boolean,
      default: !1
    },
    ignoreWidth: {
      type: Boolean,
      default: !1
    },
    ignoreHeight: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    "notify"
  ],
  mounted() {
    vo(), yo(() => {
      this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
    });
    const e = document.createElement("object");
    this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", Pt && this.$el.appendChild(e), e.data = "about:blank", Pt || this.$el.appendChild(e);
  },
  beforeUnmount() {
    this.removeResizeHandlers();
  },
  methods: {
    compareAndNotify() {
      (!this.ignoreWidth && this._w !== this.$el.offsetWidth || !this.ignoreHeight && this._h !== this.$el.offsetHeight) && (this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitSize());
    },
    emitSize() {
      this.$emit("notify", {
        width: this._w,
        height: this._h
      });
    },
    addResizeHandlers() {
      this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify), this.compareAndNotify();
    },
    removeResizeHandlers() {
      this._resizeObject && this._resizeObject.onload && (!Pt && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
    }
  }
};
const qi = /* @__PURE__ */ qs("data-v-b329ee4c");
Ns("data-v-b329ee4c");
const Wi = {
  class: "resize-observer",
  tabindex: "-1"
};
Hs();
const Ui = /* @__PURE__ */ qi((e, t, o, l, s, n) => (p(), F("div", Wi)));
Kt.render = Ui;
Kt.__scopeId = "data-v-b329ee4c";
Kt.__file = "src/components/ResizeObserver.vue";
function Ot(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ot = function(t) {
    return typeof t;
  } : Ot = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ot(e);
}
function Gi(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function yl(e, t) {
  for (var o = 0; o < t.length; o++) {
    var l = t[o];
    l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(e, l.key, l);
  }
}
function Zi(e, t, o) {
  return t && yl(e.prototype, t), o && yl(e, o), e;
}
function wl(e) {
  return Ki(e) || Yi(e) || Xi(e) || Qi();
}
function Ki(e) {
  if (Array.isArray(e))
    return ho(e);
}
function Yi(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function Xi(e, t) {
  if (e) {
    if (typeof e == "string")
      return ho(e, t);
    var o = Object.prototype.toString.call(e).slice(8, -1);
    if (o === "Object" && e.constructor && (o = e.constructor.name), o === "Map" || o === "Set")
      return Array.from(e);
    if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
      return ho(e, t);
  }
}
function ho(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var o = 0, l = new Array(t); o < t; o++)
    l[o] = e[o];
  return l;
}
function Qi() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ji(e) {
  var t;
  return typeof e == "function" ? t = {
    callback: e
  } : t = e, t;
}
function ep(e, t) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l, s, n, a = function(u) {
    for (var f = arguments.length, c = new Array(f > 1 ? f - 1 : 0), b = 1; b < f; b++)
      c[b - 1] = arguments[b];
    if (n = c, !(l && u === s)) {
      var $ = o.leading;
      typeof $ == "function" && ($ = $(u, s)), (!l || u !== s) && $ && e.apply(void 0, [u].concat(wl(n))), s = u, clearTimeout(l), l = setTimeout(function() {
        e.apply(void 0, [u].concat(wl(n))), l = 0;
      }, t);
    }
  };
  return a._clear = function() {
    clearTimeout(l), l = null;
  }, a;
}
function $s(e, t) {
  if (e === t)
    return !0;
  if (Ot(e) === "object") {
    for (var o in e)
      if (!$s(e[o], t[o]))
        return !1;
    return !0;
  }
  return !1;
}
var tp = /* @__PURE__ */ function() {
  function e(t, o, l) {
    Gi(this, e), this.el = t, this.observer = null, this.frozen = !1, this.createObserver(o, l);
  }
  return Zi(e, [{
    key: "createObserver",
    value: function(o, l) {
      var s = this;
      if (this.observer && this.destroyObserver(), !this.frozen) {
        if (this.options = Ji(o), this.callback = function(i, u) {
          s.options.callback(i, u), i && s.options.once && (s.frozen = !0, s.destroyObserver());
        }, this.callback && this.options.throttle) {
          var n = this.options.throttleOptions || {}, a = n.leading;
          this.callback = ep(this.callback, this.options.throttle, {
            leading: function(u) {
              return a === "both" || a === "visible" && u || a === "hidden" && !u;
            }
          });
        }
        this.oldResult = void 0, this.observer = new IntersectionObserver(function(i) {
          var u = i[0];
          if (i.length > 1) {
            var f = i.find(function(b) {
              return b.isIntersecting;
            });
            f && (u = f);
          }
          if (s.callback) {
            var c = u.isIntersecting && u.intersectionRatio >= s.threshold;
            if (c === s.oldResult)
              return;
            s.oldResult = c, s.callback(c, u);
          }
        }, this.options.intersection), yo(function() {
          s.observer && s.observer.observe(s.el);
        });
      }
    }
  }, {
    key: "destroyObserver",
    value: function() {
      this.observer && (this.observer.disconnect(), this.observer = null), this.callback && this.callback._clear && (this.callback._clear(), this.callback = null);
    }
  }, {
    key: "threshold",
    get: function() {
      return this.options.intersection && typeof this.options.intersection.threshold == "number" ? this.options.intersection.threshold : 0;
    }
  }]), e;
}();
function Vs(e, t, o) {
  var l = t.value;
  if (l)
    if (typeof IntersectionObserver > "u")
      console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");
    else {
      var s = new tp(e, l, o);
      e._vue_visibilityState = s;
    }
}
function op(e, t, o) {
  var l = t.value, s = t.oldValue;
  if (!$s(l, s)) {
    var n = e._vue_visibilityState;
    if (!l) {
      xs(e);
      return;
    }
    n ? n.createObserver(l, o) : Vs(e, {
      value: l
    }, o);
  }
}
function xs(e) {
  var t = e._vue_visibilityState;
  t && (t.destroyObserver(), delete e._vue_visibilityState);
}
var lp = {
  beforeMount: Vs,
  updated: op,
  unmounted: xs
};
function sp(e) {
  return { all: e = e || /* @__PURE__ */ new Map(), on: function(t, o) {
    var l = e.get(t);
    l && l.push(o) || e.set(t, [o]);
  }, off: function(t, o) {
    var l = e.get(t);
    l && l.splice(l.indexOf(o) >>> 0, 1);
  }, emit: function(t, o) {
    (e.get(t) || []).slice().map(function(l) {
      l(o);
    }), (e.get("*") || []).slice().map(function(l) {
      l(t, o);
    });
  } };
}
var np = {
  itemsLimit: 1e3
}, ap = /(auto|scroll)/;
function ks(e, t) {
  return e.parentNode === null ? t : ks(e.parentNode, t.concat([e]));
}
var so = function(t, o) {
  return getComputedStyle(t, null).getPropertyValue(o);
}, rp = function(t) {
  return so(t, "overflow") + so(t, "overflow-y") + so(t, "overflow-x");
}, ip = function(t) {
  return ap.test(rp(t));
};
function _l(e) {
  if (e instanceof HTMLElement || e instanceof SVGElement) {
    for (var t = ks(e.parentNode, []), o = 0; o < t.length; o += 1)
      if (ip(t[o]))
        return t[o];
    return document.scrollingElement || document.documentElement;
  }
}
function mo(e) {
  return mo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, mo(e);
}
var Cs = {
  items: {
    type: Array,
    required: !0
  },
  keyField: {
    type: String,
    default: "id"
  },
  direction: {
    type: String,
    default: "vertical",
    validator: function(t) {
      return ["vertical", "horizontal"].includes(t);
    }
  },
  listTag: {
    type: String,
    default: "div"
  },
  itemTag: {
    type: String,
    default: "div"
  }
};
function Ss() {
  return this.items.length && mo(this.items[0]) !== "object";
}
var bo = !1;
if (typeof window < "u") {
  bo = !1;
  try {
    var pp = Object.defineProperty({}, "passive", {
      get: function() {
        bo = !0;
      }
    });
    window.addEventListener("test", null, pp);
  } catch {
  }
}
let up = 0;
var Fo = {
  name: "RecycleScroller",
  components: {
    ResizeObserver: Kt
  },
  directives: {
    ObserveVisibility: lp
  },
  props: {
    ...Cs,
    itemSize: {
      type: Number,
      default: null
    },
    gridItems: {
      type: Number,
      default: void 0
    },
    itemSecondarySize: {
      type: Number,
      default: void 0
    },
    minItemSize: {
      type: [Number, String],
      default: null
    },
    sizeField: {
      type: String,
      default: "size"
    },
    typeField: {
      type: String,
      default: "type"
    },
    buffer: {
      type: Number,
      default: 200
    },
    pageMode: {
      type: Boolean,
      default: !1
    },
    prerender: {
      type: Number,
      default: 0
    },
    emitUpdate: {
      type: Boolean,
      default: !1
    },
    updateInterval: {
      type: Number,
      default: 0
    },
    skipHover: {
      type: Boolean,
      default: !1
    },
    listTag: {
      type: String,
      default: "div"
    },
    itemTag: {
      type: String,
      default: "div"
    },
    listClass: {
      type: [String, Object, Array],
      default: ""
    },
    itemClass: {
      type: [String, Object, Array],
      default: ""
    }
  },
  emits: [
    "resize",
    "visible",
    "hidden",
    "update",
    "scroll-start",
    "scroll-end"
  ],
  data() {
    return {
      pool: [],
      totalSize: 0,
      ready: !1,
      hoverKey: null
    };
  },
  computed: {
    sizes() {
      if (this.itemSize === null) {
        const e = {
          "-1": { accumulator: 0 }
        }, t = this.items, o = this.sizeField, l = this.minItemSize;
        let s = 1e4, n = 0, a;
        for (let i = 0, u = t.length; i < u; i++)
          a = t[i][o] || l, a < s && (s = a), n += a, e[i] = { accumulator: n, size: a };
        return this.$_computedMinItemSize = s, e;
      }
      return [];
    },
    simpleArray: Ss,
    itemIndexByKey() {
      const { keyField: e, items: t } = this, o = {};
      for (let l = 0, s = t.length; l < s; l++)
        o[t[l][e]] = l;
      return o;
    }
  },
  watch: {
    items() {
      this.updateVisibleItems(!0);
    },
    pageMode() {
      this.applyPageMode(), this.updateVisibleItems(!1);
    },
    sizes: {
      handler() {
        this.updateVisibleItems(!1);
      },
      deep: !0
    },
    gridItems() {
      this.updateVisibleItems(!0);
    },
    itemSecondarySize() {
      this.updateVisibleItems(!0);
    }
  },
  created() {
    this.$_startIndex = 0, this.$_endIndex = 0, this.$_views = /* @__PURE__ */ new Map(), this.$_unusedViews = /* @__PURE__ */ new Map(), this.$_scrollDirty = !1, this.$_lastUpdateScrollPosition = 0, this.prerender && (this.$_prerender = !0, this.updateVisibleItems(!1)), this.gridItems && !this.itemSize && console.error("[vue-recycle-scroller] You must provide an itemSize when using gridItems");
  },
  mounted() {
    this.applyPageMode(), this.$nextTick(() => {
      this.$_prerender = !1, this.updateVisibleItems(!0), this.ready = !0;
    });
  },
  activated() {
    const e = this.$_lastUpdateScrollPosition;
    typeof e == "number" && this.$nextTick(() => {
      this.scrollToPosition(e);
    });
  },
  beforeUnmount() {
    this.removeListeners();
  },
  methods: {
    addView(e, t, o, l, s) {
      const n = Ws({
        id: up++,
        index: t,
        used: !0,
        key: l,
        type: s
      }), a = Us({
        item: o,
        position: 0,
        nr: n
      });
      return e.push(a), a;
    },
    unuseView(e, t = !1) {
      const o = this.$_unusedViews, l = e.nr.type;
      let s = o.get(l);
      s || (s = [], o.set(l, s)), s.push(e), t || (e.nr.used = !1, e.position = -9999);
    },
    handleResize() {
      this.$emit("resize"), this.ready && this.updateVisibleItems(!1);
    },
    handleScroll(e) {
      if (!this.$_scrollDirty) {
        if (this.$_scrollDirty = !0, this.$_updateTimeout)
          return;
        const t = () => requestAnimationFrame(() => {
          this.$_scrollDirty = !1;
          const { continuous: o } = this.updateVisibleItems(!1, !0);
          o || (clearTimeout(this.$_refreshTimout), this.$_refreshTimout = setTimeout(this.handleScroll, this.updateInterval + 100));
        });
        t(), this.updateInterval && (this.$_updateTimeout = setTimeout(() => {
          this.$_updateTimeout = 0, this.$_scrollDirty && t();
        }, this.updateInterval));
      }
    },
    handleVisibilityChange(e, t) {
      this.ready && (e || t.boundingClientRect.width !== 0 || t.boundingClientRect.height !== 0 ? (this.$emit("visible"), requestAnimationFrame(() => {
        this.updateVisibleItems(!1);
      })) : this.$emit("hidden"));
    },
    updateVisibleItems(e, t = !1) {
      const o = this.itemSize, l = this.gridItems || 1, s = this.itemSecondarySize || o, n = this.$_computedMinItemSize, a = this.typeField, i = this.simpleArray ? null : this.keyField, u = this.items, f = u.length, c = this.sizes, b = this.$_views, $ = this.$_unusedViews, m = this.pool, y = this.itemIndexByKey;
      let v, h, g, w, P;
      if (!f)
        v = h = w = P = g = 0;
      else if (this.$_prerender)
        v = w = 0, h = P = Math.min(this.prerender, u.length), g = null;
      else {
        const B = this.getScroll();
        if (t) {
          let H = B.start - this.$_lastUpdateScrollPosition;
          if (H < 0 && (H = -H), o === null && H < n || H < o)
            return {
              continuous: !0
            };
        }
        this.$_lastUpdateScrollPosition = B.start;
        const Z = this.buffer;
        B.start -= Z, B.end += Z;
        let K = 0;
        if (this.$refs.before && (K = this.$refs.before.scrollHeight, B.start -= K), this.$refs.after) {
          const H = this.$refs.after.scrollHeight;
          B.end += H;
        }
        if (o === null) {
          let H, q = 0, W = f - 1, N = ~~(f / 2), Q;
          do
            Q = N, H = c[N].accumulator, H < B.start ? q = N : N < f - 1 && c[N + 1].accumulator > B.start && (W = N), N = ~~((q + W) / 2);
          while (N !== Q);
          for (N < 0 && (N = 0), v = N, g = c[f - 1].accumulator, h = N; h < f && c[h].accumulator < B.end; h++)
            ;
          for (h === -1 ? h = u.length - 1 : (h++, h > f && (h = f)), w = v; w < f && K + c[w].accumulator < B.start; w++)
            ;
          for (P = w; P < f && K + c[P].accumulator < B.end; P++)
            ;
        } else {
          v = ~~(B.start / o * l);
          const H = v % l;
          v -= H, h = Math.ceil(B.end / o * l), w = Math.max(0, Math.floor((B.start - K) / o * l)), P = Math.floor((B.end - K) / o * l), v < 0 && (v = 0), h > f && (h = f), w < 0 && (w = 0), P > f && (P = f), g = Math.ceil(f / l) * o;
        }
      }
      h - v > np.itemsLimit && this.itemsLimitError(), this.totalSize = g;
      let C;
      const D = v <= this.$_endIndex && h >= this.$_startIndex;
      if (D)
        for (let B = 0, Z = m.length; B < Z; B++)
          C = m[B], C.nr.used && (e && (C.nr.index = y[C.item[i]]), (C.nr.index == null || C.nr.index < v || C.nr.index >= h) && this.unuseView(C));
      const j = D ? null : /* @__PURE__ */ new Map();
      let T, I, E;
      for (let B = v; B < h; B++) {
        T = u[B];
        const Z = i ? T[i] : T;
        if (Z == null)
          throw new Error(`Key is ${Z} on item (keyField is '${i}')`);
        if (C = b.get(Z), !o && !c[B].size) {
          C && this.unuseView(C);
          continue;
        }
        I = T[a];
        let K = $.get(I), H = !1;
        if (!C)
          D ? K && K.length ? C = K.pop() : C = this.addView(m, B, T, Z, I) : (E = j.get(I) || 0, (!K || E >= K.length) && (C = this.addView(m, B, T, Z, I), this.unuseView(C, !0), K = $.get(I)), C = K[E], j.set(I, E + 1)), b.delete(C.nr.key), C.nr.used = !0, C.nr.index = B, C.nr.key = Z, C.nr.type = I, b.set(Z, C), H = !0;
        else if (!C.nr.used && (C.nr.used = !0, H = !0, K)) {
          const q = K.indexOf(C);
          q !== -1 && K.splice(q, 1);
        }
        C.item = T, H && (B === u.length - 1 && this.$emit("scroll-end"), B === 0 && this.$emit("scroll-start")), o === null ? (C.position = c[B - 1].accumulator, C.offset = 0) : (C.position = Math.floor(B / l) * o, C.offset = B % l * s);
      }
      return this.$_startIndex = v, this.$_endIndex = h, this.emitUpdate && this.$emit("update", v, h, w, P), clearTimeout(this.$_sortTimer), this.$_sortTimer = setTimeout(this.sortViews, this.updateInterval + 300), {
        continuous: D
      };
    },
    getListenerTarget() {
      let e = _l(this.$el);
      return window.document && (e === window.document.documentElement || e === window.document.body) && (e = window), e;
    },
    getScroll() {
      const { $el: e, direction: t } = this, o = t === "vertical";
      let l;
      if (this.pageMode) {
        const s = e.getBoundingClientRect(), n = o ? s.height : s.width;
        let a = -(o ? s.top : s.left), i = o ? window.innerHeight : window.innerWidth;
        a < 0 && (i += a, a = 0), a + i > n && (i = n - a), l = {
          start: a,
          end: a + i
        };
      } else
        o ? l = {
          start: e.scrollTop,
          end: e.scrollTop + e.clientHeight
        } : l = {
          start: e.scrollLeft,
          end: e.scrollLeft + e.clientWidth
        };
      return l;
    },
    applyPageMode() {
      this.pageMode ? this.addListeners() : this.removeListeners();
    },
    addListeners() {
      this.listenerTarget = this.getListenerTarget(), this.listenerTarget.addEventListener("scroll", this.handleScroll, bo ? {
        passive: !0
      } : !1), this.listenerTarget.addEventListener("resize", this.handleResize);
    },
    removeListeners() {
      this.listenerTarget && (this.listenerTarget.removeEventListener("scroll", this.handleScroll), this.listenerTarget.removeEventListener("resize", this.handleResize), this.listenerTarget = null);
    },
    scrollToItem(e) {
      let t;
      const o = this.gridItems || 1;
      this.itemSize === null ? t = e > 0 ? this.sizes[e - 1].accumulator : 0 : t = Math.floor(e / o) * this.itemSize, this.scrollToPosition(t);
    },
    scrollToPosition(e) {
      const t = this.direction === "vertical" ? { scroll: "scrollTop", start: "top" } : { scroll: "scrollLeft", start: "left" };
      let o, l, s;
      if (this.pageMode) {
        const n = _l(this.$el), a = n.tagName === "HTML" ? 0 : n[t.scroll], i = n.getBoundingClientRect(), f = this.$el.getBoundingClientRect()[t.start] - i[t.start];
        o = n, l = t.scroll, s = e + a + f;
      } else
        o = this.$el, l = t.scroll, s = e;
      o[l] = s;
    },
    itemsLimitError() {
      throw setTimeout(() => {
        console.log("It seems the scroller element isn't scrolling, so it tries to render all the items at once.", "Scroller:", this.$el), console.log("Make sure the scroller has a fixed height (or width) and 'overflow-y' (or 'overflow-x') set to 'auto' so it can scroll correctly and only render the items visible in the scroll viewport.");
      }), new Error("Rendered items limit reached");
    },
    sortViews() {
      this.pool.sort((e, t) => e.nr.index - t.nr.index);
    }
  }
};
const dp = {
  key: 0,
  ref: "before",
  class: "vue-recycle-scroller__slot"
}, cp = {
  key: 1,
  ref: "after",
  class: "vue-recycle-scroller__slot"
};
function fp(e, t, o, l, s, n) {
  const a = kl("ResizeObserver"), i = Gs("observe-visibility");
  return Ce((p(), d(
    "div",
    {
      class: O(["vue-recycle-scroller", {
        ready: s.ready,
        "page-mode": o.pageMode,
        [`direction-${e.direction}`]: !0
      }]),
      onScrollPassive: t[0] || (t[0] = (...u) => n.handleScroll && n.handleScroll(...u))
    },
    [
      e.$slots.before ? (p(), d(
        "div",
        dp,
        [
          Y(e.$slots, "before")
        ],
        512
        /* NEED_PATCH */
      )) : _("v-if", !0),
      (p(), F(ce(o.listTag), {
        ref: "wrapper",
        style: wo({ [e.direction === "vertical" ? "minHeight" : "minWidth"]: s.totalSize + "px" }),
        class: O(["vue-recycle-scroller__item-wrapper", o.listClass])
      }, {
        default: z(() => [
          (p(!0), d(
            R,
            null,
            U(s.pool, (u) => (p(), F(ce(o.itemTag), xe({
              key: u.nr.id,
              style: s.ready ? {
                transform: `translate${e.direction === "vertical" ? "Y" : "X"}(${u.position}px) translate${e.direction === "vertical" ? "X" : "Y"}(${u.offset}px)`,
                width: o.gridItems ? `${e.direction === "vertical" && o.itemSecondarySize || o.itemSize}px` : void 0,
                height: o.gridItems ? `${e.direction === "horizontal" && o.itemSecondarySize || o.itemSize}px` : void 0
              } : null,
              class: ["vue-recycle-scroller__item-view", [
                o.itemClass,
                {
                  hover: !o.skipHover && s.hoverKey === u.nr.key
                }
              ]]
            }, Zs(o.skipHover ? {} : {
              mouseenter: () => {
                s.hoverKey = u.nr.key;
              },
              mouseleave: () => {
                s.hoverKey = null;
              }
            })), {
              default: z(() => [
                Y(e.$slots, "default", {
                  item: u.item,
                  index: u.nr.index,
                  active: u.nr.used
                })
              ]),
              _: 2
              /* DYNAMIC */
            }, 1040, ["style", "class"]))),
            128
            /* KEYED_FRAGMENT */
          )),
          Y(e.$slots, "empty")
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["style", "class"])),
      e.$slots.after ? (p(), d(
        "div",
        cp,
        [
          Y(e.$slots, "after")
        ],
        512
        /* NEED_PATCH */
      )) : _("v-if", !0),
      S(a, { onNotify: n.handleResize }, null, 8, ["onNotify"])
    ],
    34
    /* CLASS, HYDRATE_EVENTS */
  )), [
    [i, n.handleVisibilityChange]
  ]);
}
Fo.render = fp;
Fo.__file = "src/components/RecycleScroller.vue";
var No = {
  name: "DynamicScroller",
  components: {
    RecycleScroller: Fo
  },
  provide() {
    return typeof ResizeObserver < "u" && (this.$_resizeObserver = new ResizeObserver((e) => {
      requestAnimationFrame(() => {
        if (Array.isArray(e)) {
          for (const t of e)
            if (t.target && t.target.$_vs_onResize) {
              let o, l;
              if (t.borderBoxSize) {
                const s = t.borderBoxSize[0];
                o = s.inlineSize, l = s.blockSize;
              } else
                o = t.contentRect.width, l = t.contentRect.height;
              t.target.$_vs_onResize(t.target.$_vs_id, o, l);
            }
        }
      });
    })), {
      vscrollData: this.vscrollData,
      vscrollParent: this,
      vscrollResizeObserver: this.$_resizeObserver
    };
  },
  inheritAttrs: !1,
  props: {
    ...Cs,
    minItemSize: {
      type: [Number, String],
      required: !0
    }
  },
  emits: [
    "resize",
    "visible"
  ],
  data() {
    return {
      vscrollData: {
        active: !0,
        sizes: {},
        keyField: this.keyField,
        simpleArray: !1
      }
    };
  },
  computed: {
    simpleArray: Ss,
    itemsWithSize() {
      const e = [], { items: t, keyField: o, simpleArray: l } = this, s = this.vscrollData.sizes, n = t.length;
      for (let a = 0; a < n; a++) {
        const i = t[a], u = l ? a : i[o];
        let f = s[u];
        typeof f > "u" && !this.$_undefinedMap[u] && (f = 0), e.push({
          item: i,
          id: u,
          size: f
        });
      }
      return e;
    }
  },
  watch: {
    items() {
      this.forceUpdate();
    },
    simpleArray: {
      handler(e) {
        this.vscrollData.simpleArray = e;
      },
      immediate: !0
    },
    direction(e) {
      this.forceUpdate(!0);
    },
    itemsWithSize(e, t) {
      const o = this.$el.scrollTop;
      let l = 0, s = 0;
      const n = Math.min(e.length, t.length);
      for (let i = 0; i < n && !(l >= o); i++)
        l += t[i].size || this.minItemSize, s += e[i].size || this.minItemSize;
      const a = s - l;
      a !== 0 && (this.$el.scrollTop += a);
    }
  },
  beforeCreate() {
    this.$_updates = [], this.$_undefinedSizes = 0, this.$_undefinedMap = {}, this.$_events = sp();
  },
  activated() {
    this.vscrollData.active = !0;
  },
  deactivated() {
    this.vscrollData.active = !1;
  },
  unmounted() {
    this.$_events.all.clear();
  },
  methods: {
    onScrollerResize() {
      this.$refs.scroller && this.forceUpdate(), this.$emit("resize");
    },
    onScrollerVisible() {
      this.$_events.emit("vscroll:update", { force: !1 }), this.$emit("visible");
    },
    forceUpdate(e = !1) {
      (e || this.simpleArray) && (this.vscrollData.sizes = {}), this.$_events.emit("vscroll:update", { force: !0 });
    },
    scrollToItem(e) {
      const t = this.$refs.scroller;
      t && t.scrollToItem(e);
    },
    getItemSize(e, t = void 0) {
      const o = this.simpleArray ? t ?? this.items.indexOf(e) : e[this.keyField];
      return this.vscrollData.sizes[o] || 0;
    },
    scrollToBottom() {
      if (this.$_scrollingToBottom)
        return;
      this.$_scrollingToBottom = !0;
      const e = this.$el;
      this.$nextTick(() => {
        e.scrollTop = e.scrollHeight + 5e3;
        const t = () => {
          e.scrollTop = e.scrollHeight + 5e3, requestAnimationFrame(() => {
            e.scrollTop = e.scrollHeight + 5e3, this.$_undefinedSizes === 0 ? this.$_scrollingToBottom = !1 : requestAnimationFrame(t);
          });
        };
        requestAnimationFrame(t);
      });
    }
  }
};
function vp(e, t, o, l, s, n) {
  const a = kl("RecycleScroller");
  return p(), F(a, xe({
    ref: "scroller",
    items: n.itemsWithSize,
    "min-item-size": o.minItemSize,
    direction: e.direction,
    "key-field": "id",
    "list-tag": e.listTag,
    "item-tag": e.itemTag
  }, e.$attrs, {
    onResize: n.onScrollerResize,
    onVisible: n.onScrollerVisible
  }), {
    default: z(({ item: i, index: u, active: f }) => [
      Y(e.$slots, "default", Xe(Qe({
        item: i.item,
        index: u,
        active: f,
        itemWithSize: i
      })))
    ]),
    before: z(() => [
      Y(e.$slots, "before")
    ]),
    after: z(() => [
      Y(e.$slots, "after")
    ]),
    empty: z(() => [
      Y(e.$slots, "empty")
    ]),
    _: 3
    /* FORWARDED */
  }, 16, ["items", "min-item-size", "direction", "list-tag", "item-tag", "onResize", "onVisible"]);
}
No.render = vp;
No.__file = "src/components/DynamicScroller.vue";
var Ps = {
  name: "DynamicScrollerItem",
  inject: [
    "vscrollData",
    "vscrollParent",
    "vscrollResizeObserver"
  ],
  props: {
    // eslint-disable-next-line vue/require-prop-types
    item: {
      required: !0
    },
    watchData: {
      type: Boolean,
      default: !1
    },
    /**
     * Indicates if the view is actively used to display an item.
     */
    active: {
      type: Boolean,
      required: !0
    },
    index: {
      type: Number,
      default: void 0
    },
    sizeDependencies: {
      type: [Array, Object],
      default: null
    },
    emitResize: {
      type: Boolean,
      default: !1
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  emits: [
    "resize"
  ],
  computed: {
    id() {
      if (this.vscrollData.simpleArray)
        return this.index;
      if (this.vscrollData.keyField in this.item)
        return this.item[this.vscrollData.keyField];
      throw new Error(`keyField '${this.vscrollData.keyField}' not found in your item. You should set a valid keyField prop on your Scroller`);
    },
    size() {
      return this.vscrollData.sizes[this.id] || 0;
    },
    finalActive() {
      return this.active && this.vscrollData.active;
    }
  },
  watch: {
    watchData: "updateWatchData",
    id(e, t) {
      if (this.$el.$_vs_id = this.id, this.size || this.onDataUpdate(), this.$_sizeObserved) {
        const o = this.vscrollData.sizes[t], l = this.vscrollData.sizes[e];
        o != null && o !== l && this.applySize(o);
      }
    },
    finalActive(e) {
      this.size || (e ? this.vscrollParent.$_undefinedMap[this.id] || (this.vscrollParent.$_undefinedSizes++, this.vscrollParent.$_undefinedMap[this.id] = !0) : this.vscrollParent.$_undefinedMap[this.id] && (this.vscrollParent.$_undefinedSizes--, this.vscrollParent.$_undefinedMap[this.id] = !1)), this.vscrollResizeObserver ? e ? this.observeSize() : this.unobserveSize() : e && this.$_pendingVScrollUpdate === this.id && this.updateSize();
    }
  },
  created() {
    if (!this.$isServer && (this.$_forceNextVScrollUpdate = null, this.updateWatchData(), !this.vscrollResizeObserver)) {
      for (const e in this.sizeDependencies)
        this.$watch(() => this.sizeDependencies[e], this.onDataUpdate);
      this.vscrollParent.$_events.on("vscroll:update", this.onVscrollUpdate);
    }
  },
  mounted() {
    this.finalActive && (this.updateSize(), this.observeSize());
  },
  beforeUnmount() {
    this.vscrollParent.$_events.off("vscroll:update", this.onVscrollUpdate), this.unobserveSize();
  },
  methods: {
    updateSize() {
      this.finalActive ? this.$_pendingSizeUpdate !== this.id && (this.$_pendingSizeUpdate = this.id, this.$_forceNextVScrollUpdate = null, this.$_pendingVScrollUpdate = null, this.computeSize(this.id)) : this.$_forceNextVScrollUpdate = this.id;
    },
    updateWatchData() {
      this.watchData && !this.vscrollResizeObserver ? this.$_watchData = this.$watch("item", () => {
        this.onDataUpdate();
      }, {
        deep: !0
      }) : this.$_watchData && (this.$_watchData(), this.$_watchData = null);
    },
    onVscrollUpdate({ force: e }) {
      !this.finalActive && e && (this.$_pendingVScrollUpdate = this.id), (this.$_forceNextVScrollUpdate === this.id || e || !this.size) && this.updateSize();
    },
    onDataUpdate() {
      this.updateSize();
    },
    computeSize(e) {
      this.$nextTick(() => {
        if (this.id === e) {
          const t = this.$el.offsetWidth, o = this.$el.offsetHeight;
          this.applyWidthHeight(t, o);
        }
        this.$_pendingSizeUpdate = null;
      });
    },
    applyWidthHeight(e, t) {
      const o = ~~(this.vscrollParent.direction === "vertical" ? t : e);
      o && this.size !== o && this.applySize(o);
    },
    applySize(e) {
      this.vscrollParent.$_undefinedMap[this.id] && (this.vscrollParent.$_undefinedSizes--, this.vscrollParent.$_undefinedMap[this.id] = void 0), this.vscrollData.sizes[this.id] = e, this.emitResize && this.$emit("resize", this.id);
    },
    observeSize() {
      this.vscrollResizeObserver && (this.$_sizeObserved || (this.vscrollResizeObserver.observe(this.$el), this.$el.$_vs_id = this.id, this.$el.$_vs_onResize = this.onResize, this.$_sizeObserved = !0));
    },
    unobserveSize() {
      this.vscrollResizeObserver && this.$_sizeObserved && (this.vscrollResizeObserver.unobserve(this.$el), this.$el.$_vs_onResize = void 0, this.$_sizeObserved = !1);
    },
    onResize(e, t, o) {
      this.id === e && this.applyWidthHeight(t, o);
    }
  },
  render() {
    return te(this.tag, this.$slots.default());
  }
};
Ps.__file = "src/components/DynamicScrollerItem.vue";
const hp = ["for"], mp = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, bp = ["title"], gp = { class: "po-relative po-mt-1" }, yp = {
  role: "button",
  ref: "comboboxButton"
}, wp = ["placeholder", "disabled", "id"], _p = {
  class: /* @__PURE__ */ O(["group-hover:po-text-white po-block po-truncate"])
}, $p = {
  key: 0,
  class: "po-block po-text-xs po-opacity-60"
}, Vp = {
  key: 1,
  class: "scroller po-max-h-60 po-h-full po-overflow-y-auto"
}, xp = ["onMousedown"], kp = {
  class: /* @__PURE__ */ O(["group-hover:po-text-white po-block po-truncate"])
}, Cp = {
  key: 0,
  class: "po-block po-text-xs po-opacity-60"
}, Sp = {
  key: 0,
  class: "po-mt-2 po-text-sm po-text-slate-500",
  id: "-description"
}, Pp = {
  key: 1,
  class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
  id: "-error"
}, Op = {
  name: "PoSelectField"
}, Lp = /* @__PURE__ */ L({
  ...Op,
  props: {
    modelValue: { default: null },
    label: { default: "" },
    id: { default: "" },
    info: { default: null },
    list: { default: null },
    display: { default: "vertical" },
    required: { type: Boolean, default: !1 },
    errorMessage: { default: null },
    message: { default: null },
    disabled: { type: Boolean, default: !1 },
    object: { type: Boolean, default: !1 },
    dynamicScroll: { type: Boolean, default: !1 },
    placeholder: { default: void 0 }
  },
  emits: ["selected", "unSelected", "update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, l = x(""), s = x(""), n = x(), a = x(!1), i = x(!1), u = x(), f = x(null), c = x({
      viewStartIdx: 0,
      viewEndIdx: 0,
      visibleStartIdx: 0,
      visibleEndIdx: 0
    }), b = M(() => {
      var I, E;
      const T = l.value.toLowerCase();
      return T === "" ? ((I = o.list) == null ? void 0 : I.map((B) => ({
        ...B,
        active: n.value === B.id
      }))) ?? [] : ((E = o.list) == null ? void 0 : E.filter((B) => B.name.toLowerCase().includes(T)).map((B) => ({
        ...B,
        active: n.value === B.id
      }))) ?? [];
    });
    function $(T) {
      if (o.object)
        return T == null ? void 0 : T.name;
      if (b.value) {
        let I = b.value.find((E) => E.id === T);
        return I == null ? void 0 : I.name;
      } else if (o.placeholder)
        return o.placeholder;
    }
    n.value = o.modelValue, Tt(() => {
      n.value = o.modelValue;
    }), X(n, () => {
      s.value = $(n.value);
    });
    const { errorMessage: m } = me(o), y = x(m.value !== null);
    X(m, (T, I) => {
      y.value = m.value !== null && m.value !== "";
    });
    const v = x("");
    Gt(f, () => {
      a.value = !!i.value;
    });
    function h(T) {
      n.value = T, s.value = T.name, l.value = "", t("selected", o.object ? T : T.id), t("update:modelValue", o.object ? T : T.id), a.value = !!i.value;
    }
    const g = x();
    let w;
    G(() => {
      o.id === "" ? v.value = o.id ? o.id : `${o.label.replace(
        /\s/g,
        ""
      )}-${Date.now()}-selectfield-${Math.floor(Math.random() * 9e3)}` : v.value = o.id, s.value = $(o.modelValue), w = Ut(u.value, g.value, {
        placement: "bottom-end",
        strategy: "fixed",
        modifiers: [
          {
            name: "sameWidth",
            enabled: !0,
            fn: ({ state: T }) => {
              T.styles.popper.width = `${T.rects.reference.width}px`;
            },
            phase: "beforeWrite",
            requires: ["computeStyles"]
          }
        ]
      });
    }), ne(() => {
      w && w.destroy();
    });
    function P() {
      i.value = !1, setTimeout(() => {
        a.value = !1;
      }, 100);
    }
    const C = (T) => {
      let I = T.target.value;
      l.value = I;
    };
    function D(T, I, E, B) {
      c.value.viewStartIdx = T, c.value.viewEndIdx = I, c.value.visibleStartIdx = E, c.value.visibleEndIdx = B;
    }
    function j() {
      w && w.update();
    }
    return Zt.on("sidebarOpen", (T) => {
      setTimeout(() => {
        w && w.update();
      }, 320);
    }), (T, I) => (p(), d("div", {
      class: O([{ "lg:po-grid lg:po-grid-cols-2": T.display === "horizontal" }]),
      ref_key: "containerRef",
      ref: f
    }, [
      r("label", {
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700",
        for: v.value
      }, [
        r("span", null, V(T.label), 1),
        T.required ? (p(), d("span", mp, "*")) : _("", !0),
        T.info !== null ? (p(), d("abbr", {
          key: 1,
          title: T.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          S(k(qt), { class: "po-fill-current" })
        ], 8, bp)) : _("", !0)
      ], 8, hp),
      r("div", gp, [
        r("div", yp, [
          Ce(r("input", {
            type: "text",
            ref_key: "selectBox",
            ref: u,
            class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm",
            placeholder: T.placeholder,
            disabled: T.disabled,
            "onUpdate:modelValue": I[0] || (I[0] = (E) => s.value = E),
            onInput: C,
            onFocus: I[1] || (I[1] = (E) => {
              i.value = !0, a.value = !0;
            }),
            onBlur: P,
            id: v.value
          }, null, 40, wp), [
            [ft, s.value]
          ]),
          r("span", {
            class: "po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-rounded-r-md po-px-2 focus:po-outline-none",
            role: "button",
            onMousedown: I[2] || (I[2] = oe((E) => a.value = !a.value, ["stop"]))
          }, [
            S(k(Mr), {
              class: "po-h-5 po-w-5 po-text-slate-400",
              "aria-hidden": "true"
            })
          ], 32)
        ], 512),
        Ce(r("div", {
          ref_key: "popper",
          ref: g,
          class: "po-absolute po-z-10 po-mt-1 po-w-full po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
        }, [
          T.dynamicScroll ? (p(), F(k(No), {
            key: 0,
            items: b.value,
            "min-item-size": 32,
            "key-field": "id",
            class: "scroller po-max-h-60 po-h-full po-overflow-y-auto",
            onResize: j,
            onUpdate: D
          }, {
            default: z(({ item: E, index: B, active: Z }) => [
              S(k(Ps), {
                item: E,
                active: Z,
                "size-dependencies": [E.name],
                onMousedown: oe((K) => h(E), ["stop"]),
                "data-index": B,
                class: O([
                  "po-relative po-group po-select-none po-py-2 po-pl-3 po-pr-9 po-cursor-pointer hover:po-bg-mpao-lightblue",
                  E.active ? "po-bg-mpao-lightblue po-text-white" : "po-text-slate-900"
                ])
              }, {
                default: z(() => [
                  r("span", _p, [
                    J(V((E == null ? void 0 : E.name) ?? "") + " ", 1),
                    E != null && E.subtitle ? (p(), d("span", $p, V(E == null ? void 0 : E.subtitle), 1)) : _("", !0)
                  ])
                ]),
                _: 2
              }, 1032, ["item", "active", "size-dependencies", "onMousedown", "data-index", "class"])
            ]),
            _: 1
          }, 8, ["items"])) : (p(), d("ul", Vp, [
            (p(!0), d(R, null, U(b.value, (E) => (p(), d("li", {
              onMousedown: oe((B) => h(E), ["stop"]),
              class: O([
                "po-relative po-group po-select-none po-py-2 po-pl-3 po-pr-9 po-cursor-pointer hover:po-bg-mpao-lightblue",
                E.active ? "po-bg-mpao-lightblue po-text-white" : "po-text-slate-900"
              ])
            }, [
              r("span", kp, [
                J(V((E == null ? void 0 : E.name) ?? "") + " ", 1),
                E != null && E.subtitle ? (p(), d("span", Cp, V(E == null ? void 0 : E.subtitle), 1)) : _("", !0)
              ])
            ], 42, xp))), 256))
          ]))
        ], 512), [
          [Et, a.value && b.value.length > 0]
        ])
      ]),
      T.message !== null ? (p(), d("p", Sp, V(T.message), 1)) : _("", !0),
      k(m) !== null ? (p(), d("p", Pp, [
        r("span", null, V(k(m)), 1)
      ])) : _("", !0)
    ], 2));
  }
}), Tp = /* @__PURE__ */ r("div", { class: "po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity" }, null, -1), Ep = { class: "po-fixed po-z-10 po-inset-0" }, Bp = { class: "po-flex po-justify-center po-items-start po-min-h-screen sm:po-px-4 sm:po-pt-10 sm:po-pb-20 po-text-center sm:po-block po-max-h-screen po-overflow-y-hidden" }, Mp = /* @__PURE__ */ r("span", {
  class: "po-hidden sm:po-inline-block sm:po-align-middle sm:po-h-screen",
  "aria-hidden": "true"
}, "​", -1), zp = { class: "po-flex po-items-center po-bg-white po-rounded-t-xl po-p-5" }, Ap = { class: "po-grow po-text-md po-font-bold po-text-slate-600" }, Dp = { class: "po-shrink-0" }, Ip = /* @__PURE__ */ r("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), jp = {
  key: 0,
  class: "po-bg-slate-50 po-rounded-b-xl"
}, Rp = {
  name: "PoModal"
}, wt = /* @__PURE__ */ L({
  ...Rp,
  props: {
    openBtnLabel: { default: "" },
    modalTitle: { default: "Modal windows" },
    show: { type: Boolean, default: !1 },
    modalWidth: { default: "sm:po-max-w-xl" },
    modalHeight: { default: "" }
  },
  emits: ["modal-closed"],
  setup(e, { emit: t }) {
    const o = e, { show: l } = me(o), s = x(!1);
    X(l, () => {
      s.value = l.value;
    });
    function n() {
      s.value = !1, t("modal-closed", !0);
    }
    const a = o.modalTitle.toLowerCase().replace(/\s+/g, "-"), i = new URLSearchParams(window.location.search);
    return s.value = i.get("modal") !== void 0 && i.get("modal") === a, (u, f) => (p(), d("div", null, [
      u.openBtnLabel.length > 0 ? (p(), F(k(Bo), {
        key: 0,
        label: u.openBtnLabel,
        onClick: f[0] || (f[0] = (c) => s.value = !0)
      }, null, 8, ["label"])) : _("", !0),
      (p(), F(vt, { to: "body" }, [
        S(k(bt), {
          as: "template",
          show: s.value
        }, {
          default: z(() => [
            S(k(It), {
              as: "div",
              class: "po-relative po-z-50",
              onClose: n
            }, {
              default: z(() => [
                S(k(je), {
                  as: "template",
                  enter: "po-ease-out po-duration-300",
                  "enter-from": "po-opacity-0",
                  "enter-to": "po-opacity-100",
                  leave: "po-ease-in po-duration-200",
                  "leave-from": "po-opacity-100",
                  "leave-to": "po-opacity-0"
                }, {
                  default: z(() => [
                    Tp
                  ]),
                  _: 1
                }),
                r("div", Ep, [
                  r("div", Bp, [
                    Mp,
                    S(k(je), {
                      as: "template",
                      enter: "po-ease-out po-duration-300",
                      "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                      "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                      leave: "po-ease-in po-duration-200",
                      "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                      "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                    }, {
                      default: z(() => [
                        S(k(jt), {
                          class: O(["po-relative po-inline-block po-align-bottom po-bg-white sm:po-rounded-xl po-text-left po-shadow-xl po-transform po-transition-all sm:po-align-top po-w-full", u.modalWidth])
                        }, {
                          default: z(() => [
                            r("div", zp, [
                              r("h3", Ap, V(u.modalTitle), 1),
                              r("div", Dp, [
                                r("span", {
                                  role: "button",
                                  class: "po-block",
                                  onClick: n
                                }, [
                                  S(k(Bt), { class: "po-w-5 po-stroke-slate-500 hover:po-stroke-mpao-orange po-transition-colors po-duration-150 po-ease-in-out" })
                                ])
                              ])
                            ]),
                            Ip,
                            r("div", {
                              class: O(["po-p-5 po-overflow-y-auto", [
                                {
                                  "po-max-h-[calc(100vh-220px)]": u.$slots.footer
                                },
                                {
                                  "po-max-h-[calc(100vh-145px)]": !u.$slots.footer
                                },
                                u.modalHeight
                              ]])
                            }, [
                              Y(u.$slots, "content")
                            ], 2),
                            u.$slots.footer ? (p(), d("div", jp, [
                              Y(u.$slots, "footer")
                            ])) : _("", !0)
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
function Fp(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", { d: "M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" }),
    r("path", { d: "M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" })
  ]);
}
function Np(e, t) {
  return p(), d("svg", {
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
function Hp(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", { d: "M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" })
  ]);
}
function Os(e, t) {
  return p(), d("svg", {
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
function qp(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", {
      "fill-rule": "evenodd",
      d: "M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z",
      "clip-rule": "evenodd"
    })
  ]);
}
const Wp = ["for"], Up = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Gp = ["title"], Zp = ["name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], Kp = ["id"], Yp = ["id"], Xp = {
  name: "PoTextarea"
}, Qp = /* @__PURE__ */ L({
  ...Xp,
  props: {
    modelValue: { default: "" },
    label: { default: "" },
    id: { default: "" },
    info: { default: null },
    message: { default: null },
    errorMessage: { default: null },
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    placeholder: { default: void 0 },
    display: { default: "vertical" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = (l) => {
      let s = l.target.value;
      t("update:modelValue", s);
    };
    return (l, s) => (p(), d("div", {
      class: O(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": l.display === "horizontal" }]])
    }, [
      r("label", {
        for: l.id,
        class: "po-text-sm po-font-medium po-text-slate-700 po-flex po-items-center po-space-x-1"
      }, [
        r("span", null, V(l.label), 1),
        l.required ? (p(), d("span", Up, "*")) : _("", !0),
        l.info !== null ? (p(), d("abbr", {
          key: 1,
          title: l.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          S(k(Os))
        ], 8, Gp)) : _("", !0)
      ], 8, Wp),
      r("textarea", xe({
        name: `${l.id}-field`,
        id: l.id,
        value: l.modelValue,
        placeholder: l.placeholder,
        disabled: l.disabled,
        required: l.required,
        "aria-describedby": `${l.id}-description`,
        "aria-required": l.required,
        "aria-disabled": l.disabled
      }, l.$attrs, {
        onInput: o,
        class: "po-mt-1 po-peer po-px-3 po-py-2 po-block po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-border-slate-300 po-bg-white focus:po-border-mpao-lightblue focus:po-ring-0 invalid:po-border-red-400 invalid:po-focus:border-red-600 invalid:focus:po-ring-red-600 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default"
      }), null, 16, Zp),
      l.message !== null ? (p(), d("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${l.id}-description`
      }, V(l.message), 9, Kp)) : _("", !0),
      l.errorMessage !== null ? (p(), d("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${l.id}-error`
      }, V(l.errorMessage), 9, Yp)) : _("", !0)
    ], 2));
  }
}), Jp = { class: "shell-sidebar--icon" }, eu = /* @__PURE__ */ r("span", { class: "shell-sidebar--label po-font-medium" }, "Feedback", -1), tu = { action: "" }, ou = /* @__PURE__ */ r("br", null, null, -1), lu = { class: "po-p-5" }, su = /* @__PURE__ */ L({
  __name: "feedbackForm",
  setup(e) {
    const t = x(!1), o = [
      {
        id: 1,
        name: "Suggestion"
      },
      {
        id: 2,
        name: "Feature request"
      },
      {
        id: 2,
        name: "Other"
      }
    ], l = x({
      type: 1,
      message: ""
    });
    return (s, n) => (p(), d(R, null, [
      r("button", {
        onClick: n[0] || (n[0] = oe(() => t.value = !0, ["prevent"])),
        class: "shell-sidebar--item",
        title: "Go to feedback"
      }, [
        r("span", Jp, [
          S(k(sn), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" })
        ]),
        eu
      ]),
      S(wt, {
        show: t.value,
        onModalClosed: n[3] || (n[3] = () => t.value = !1),
        "modal-title": "Feedback"
      }, {
        content: z(() => [
          r("form", tu, [
            S(Lp, {
              label: "Type",
              list: o,
              modelValue: l.value.type,
              "onUpdate:modelValue": n[1] || (n[1] = (a) => l.value.type = a)
            }, null, 8, ["modelValue"]),
            ou,
            S(Qp, {
              cols: "6",
              rows: "6",
              label: "Description",
              modelValue: l.value.message,
              "onUpdate:modelValue": n[2] || (n[2] = (a) => l.value.message = a)
            }, null, 8, ["modelValue"])
          ])
        ]),
        footer: z(() => [
          r("div", lu, [
            S(Bo, {
              label: "Send",
              type: "button"
            })
          ])
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), nu = { class: "po-grow" }, au = { class: "shell-sidebar--menu" }, ru = ["onClick"], iu = { class: "shell-sidebar--icon" }, pu = { class: "shell-sidebar--label po-font-medium po-text-left" }, uu = { key: 0 }, du = { class: "shell-sidebar--menu sidebar-apps po-shrink-0 po-mb-0" }, cu = ["onClick"], fu = { class: "shell-sidebar--icon" }, vu = ["innerHTML"], hu = { class: "shell-sidebar--label po-font-medium po-text-left" }, mu = {
  key: 0,
  class: "shell-sidebar--menu po-shrink-0 po-mb-0 po-border-t po-border-slate-200 po-pt-3"
}, bu = {
  name: "PoSidebarDrawer"
}, x2 = /* @__PURE__ */ L({
  ...bu,
  props: {
    content: { default: null },
    currRoute: { default: "/" },
    hasFeedback: { type: Boolean, default: !1 },
    appsLabel: { default: "Related apps" },
    apps: { default: null },
    appCode: { default: "" }
  },
  emits: ["button-click", "app-click"],
  setup(e, { emit: t }) {
    const o = e, l = M(() => {
      var m, y;
      let b = [];
      const $ = (m = o.apps) == null ? void 0 : m.filter((v) => v.code == o.appCode)[0];
      if ($) {
        let v = (y = o.apps) == null ? void 0 : y.filter(
          (h) => $.related.includes(h.code)
        );
        v == null || v.forEach((h) => {
          b.push(h);
        });
      }
      return b;
    }), s = M(() => `sidebar-is-${a.value}`), n = x(null), a = x();
    function i() {
      window.innerWidth <= 1024 && n.value && (n.value.checked = !n.value.checked, a.value = n.value.checked);
    }
    G(() => {
      var b;
      a.value = (b = n.value) == null ? void 0 : b.checked;
    });
    function u(b, $) {
      t(b, $), i();
    }
    function f() {
      n.value && (a.value = n.value.checked, Zt.emit("sidebarOpen", a.value));
    }
    function c(b) {
      return a.value ? "" : b;
    }
    return (b, $) => {
      var m;
      return p(), d(R, null, [
        r("input", {
          type: "checkbox",
          name: "",
          class: "po-hidden shell-sidebar--toggle",
          role: "none",
          id: "sidebar-drawer-toggle",
          checked: "",
          "aria-checked": "true",
          ref_key: "sidebarToggle",
          ref: n,
          onClick: f
        }, null, 512),
        (p(), d("aside", {
          class: "shell-sidebar",
          key: s.value
        }, [
          r("div", nu, [
            (p(!0), d(R, null, U(b.content, (y, v) => (p(), d("div", {
              key: `sidebar-group-${v}`
            }, [
              S(k(ll), { defaultOpen: !0 }, {
                default: z(({ open: h }) => [
                  y.groupName ? (p(), F(k(sl), {
                    key: 0,
                    class: O([h ? "" : "po-mb-3", "shell-sidebar--section po-w-full po-text-left"])
                  }, {
                    default: z(() => [
                      J(V(y.groupName), 1)
                    ]),
                    _: 2
                  }, 1032, ["class"])) : _("", !0),
                  S(De, {
                    "enter-active-class": "po-transition po-duration-100 po-ease-out",
                    "enter-from-class": "po-transform po-scale-95 po-opacity-0",
                    "enter-to-class": "po-transform po-scale-100 po-opacity-100",
                    "leave-active-class": "po-transition po-duration-75 po-ease-out",
                    "leave-from-class": "po-transform po-scale-100 po-opacity-100",
                    "leave-to-class": "po-transform po-scale-95 po-opacity-0"
                  }, {
                    default: z(() => [
                      S(k(nl), null, {
                        default: z(() => [
                          r("ul", au, [
                            (p(!0), d(R, null, U(y.items, (g) => (p(), d("li", {
                              key: g.label
                            }, [
                              r("span", null, [
                                S(k(go), {
                                  text: c(g.label),
                                  placement: "right",
                                  strategy: "fixed"
                                }, {
                                  default: z(() => [
                                    g.disabled ? _("", !0) : (p(), d("button", {
                                      key: 0,
                                      onClick: (w) => u("button-click", g.url),
                                      class: O([
                                        "shell-sidebar--item",
                                        { active: g.url == b.currRoute }
                                      ])
                                    }, [
                                      r("span", iu, [
                                        (p(), F(ce(g.icon), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" }))
                                      ]),
                                      r("span", pu, V(g.label), 1)
                                    ], 10, ru))
                                  ]),
                                  _: 2
                                }, 1032, ["text"])
                              ])
                            ]))), 128))
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
            ]))), 128)),
            ((m = l.value) == null ? void 0 : m.length) > 0 ? (p(), d("div", uu, [
              S(k(ll), { defaultOpen: !0 }, {
                default: z(({ open: y }) => [
                  b.appsLabel ? (p(), F(k(sl), {
                    key: 0,
                    class: O([y ? "" : "po-mb-3", "shell-sidebar--section po-w-full po-text-left"])
                  }, {
                    default: z(() => [
                      J(V(b.appsLabel), 1)
                    ]),
                    _: 2
                  }, 1032, ["class"])) : _("", !0),
                  S(De, {
                    "enter-active-class": "po-transition po-duration-100 po-ease-out",
                    "enter-from-class": "po-transform po-scale-95 po-opacity-0",
                    "enter-to-class": "po-transform po-scale-100 po-opacity-100",
                    "leave-active-class": "po-transition po-duration-75 po-ease-out",
                    "leave-from-class": "po-transform po-scale-100 po-opacity-100",
                    "leave-to-class": "po-transform po-scale-95 po-opacity-0"
                  }, {
                    default: z(() => [
                      S(k(nl), null, {
                        default: z(() => [
                          r("ul", du, [
                            (p(!0), d(R, null, U(l.value, (v, h) => (p(), d("li", null, [
                              S(k(go), {
                                text: c(v.name),
                                placement: "right",
                                strategy: "fixed"
                              }, {
                                default: z(() => [
                                  r("button", {
                                    onClick: (g) => u("app-click", v.name),
                                    class: O(["shell-sidebar--item", [{ active: v.current }]]),
                                    title: "Go to feedback"
                                  }, [
                                    r("span", fu, [
                                      r("span", {
                                        innerHTML: v.icon,
                                        class: "po-text-slate-600 po-w-5"
                                      }, null, 8, vu)
                                    ]),
                                    r("span", hu, V(v.name), 1)
                                  ], 10, cu)
                                ]),
                                _: 2
                              }, 1032, ["text"])
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
            ])) : _("", !0)
          ]),
          b.hasFeedback ? (p(), d("ul", mu, [
            r("li", null, [
              S(su)
            ])
          ])) : _("", !0)
        ]))
      ], 64);
    };
  }
}), gu = {
  key: 0,
  class: "shell-content--action-bar"
}, yu = { class: "action-bar__nav" }, wu = ["onClick"], _u = { class: "action-bar__nav_label po-font-medium" }, $u = {
  key: 0,
  class: "po-shrink-0 po-flex po-space-x-1"
}, Vu = /* @__PURE__ */ r("span", { class: "action-bar__nav_label po-font-medium" }, "Go Back", -1), xu = {
  name: "PoActionBar"
}, k2 = /* @__PURE__ */ L({
  ...xu,
  props: {
    items: { default: null },
    showBackButton: { type: Boolean, default: !1 },
    currPageRoute: { default: "" }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, l) => o.items !== null && o.items.length > 0 || o.showBackButton ? (p(), d("section", gu, [
      r("nav", yu, [
        (p(!0), d(R, null, U(o.items, (s) => (p(), d("span", {
          onClick: (n) => o.$emit("button-click", s.label),
          class: O([[
            { "action-bar__nav_highlighted": s.highlighted },
            { "action-bar__nav_danger": s.danger }
          ], "action-bar__nav_link"])
        }, [
          (p(), F(ce(s.icon), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" })),
          r("span", _u, V(s.label), 1)
        ], 10, wu))), 256))
      ]),
      o.showBackButton ? (p(), d("nav", $u, [
        r("span", {
          onClick: l[0] || (l[0] = (s) => o.$emit("button-click", "back")),
          class: "action-bar__nav_link"
        }, [
          Vu,
          (p(), F(ce(k(Js)), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" }))
        ])
      ])) : _("", !0)
    ])) : _("", !0);
  }
}), ku = { class: "po-shadow-sm po-rounded-xl po-bg-white po-relative" }, Cu = {
  key: 0,
  class: "po-absolute po-right-2 po-top-2 po-p-2 po-rounded-lg"
}, Su = {
  key: 0,
  class: "po-text-base po-font-medium po-text-slate-600"
}, Pu = {
  key: 1,
  class: "lg:po-col-span-2 lg:po-flex lg:po-justify-end po-space-x-2"
}, Ou = {
  name: "PoCard"
}, C2 = /* @__PURE__ */ L({
  ...Ou,
  props: {
    title: { default: "" },
    isLoading: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, o) => (p(), d("div", ku, [
      t.isLoading ? (p(), d("div", Cu, [
        S(Ht)
      ])) : _("", !0),
      r("div", {
        class: O([
          { "po-grid po-grid-cols-1 lg:po-grid-cols-3 po-gap-3": t.$slots.action }
        ])
      }, [
        t.title.length > 0 ? (p(), d("h3", Su, V(t.title), 1)) : _("", !0),
        t.$slots.action ? (p(), d("div", Pu, [
          Y(t.$slots, "action")
        ])) : _("", !0)
      ], 2),
      Y(t.$slots, "content")
    ]));
  }
}), Lu = { class: "po-py-3 po-px-5 po-border-b po-border-slate-200" }, Tu = {
  class: "po-flex po-w-full md:po-ml-0",
  action: "#",
  method: "GET"
}, Eu = {
  for: "search-field",
  class: "po-sr-only"
}, Bu = { class: "po-relative po-w-full po-text-slate-400 focus-within:po-text-mpao-lightblue po-transition-colors po-duration-100 po-ease-in-out" }, Mu = { class: "po-pointer-events-none po-absolute po-inset-y-0 po-left-0 po-flex po-items-center" }, zu = ["placeholder", "value"], Au = ["disabled"], Du = {
  name: "PoCardSearch"
}, S2 = /* @__PURE__ */ L({
  ...Du,
  props: {
    modelValue: { default: "" },
    placeholder: { default: "Search" },
    showBtn: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "button-click"],
  setup(e, { emit: t }) {
    const o = (l) => {
      let s = l.target.value;
      t("update:modelValue", s);
    };
    return (l, s) => (p(), d("div", Lu, [
      r("form", Tu, [
        r("label", Eu, V(l.placeholder), 1),
        r("div", Bu, [
          r("div", Mu, [
            S(k(_o), { class: "po-h-5 po-w-5 po-flex-shrink-0" })
          ]),
          r("input", {
            name: "search-field",
            id: "desktop-search-field",
            placeholder: l.placeholder,
            value: l.modelValue,
            onInput: o,
            class: "po-h-full po-w-full po-border-transparent po-py-2 po-pl-8 po-pr-3 po-text-sm po-text-slate-700 po-placeholder-slate-500 focus:po-border-transparent focus:po-placeholder-slate-400 focus:po-outline-none focus:po-ring-0",
            type: "search"
          }, null, 40, zu),
          l.showBtn ? (p(), d("button", {
            key: 0,
            class: O(["po-absolute po-right-0 po-text-sm po-rounded-full po-px-3 po-py-2 po-transition-colors po-duration-150 po-ease-out", [
              { "po-bg-mpao-lightblue po-text-white": l.modelValue !== "" },
              { "po-bg-slate-100 po-text-slate-400": l.modelValue === "" }
            ]]),
            disabled: l.modelValue === "",
            onClick: s[0] || (s[0] = oe((n) => l.$emit("button-click", l.modelValue), ["prevent"]))
          }, " Search ", 10, Au)) : _("", !0)
        ])
      ])
    ]));
  }
}), Iu = { class: "po-flex po-items-center" }, ju = { class: "po-text-sm po-font-medium po-text-slate-500 po-pr-2" }, Ru = {
  name: "PoPagination"
}, Fu = /* @__PURE__ */ L({
  ...Ru,
  props: {
    pagination: { default: null },
    totalPages: { default: null },
    currentPage: { default: null }
  },
  emits: ["button-click", "next-click", "prev-click"],
  setup(e, { emit: t }) {
    const o = e;
    function l() {
      t("button-click", "prev"), t("prev-click", !0);
    }
    function s() {
      t("button-click", "next"), t("next-click", !0);
    }
    const n = M(() => o.totalPages ? `Page ${o.currentPage} of ${o.totalPages}` : o.pagination ? o.pagination.label : "");
    return (a, i) => (p(), d("div", Iu, [
      r("span", ju, V(n.value), 1),
      r("button", {
        title: "Previous",
        onClick: l,
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        S(k(Cl), { class: "po-w-4 po-stroke-current po-stroke-2" })
      ]),
      r("button", {
        title: "Next",
        onClick: s,
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        S(k(Sl), { class: "po-w-4 po-stroke-current po-stroke-2" })
      ])
    ]));
  }
}), Nu = { key: 0 }, Hu = {
  class: "po-text-xl md:po-text-2xl po-font-semibold po-text-slate-800",
  id: "po-page-title"
}, qu = {
  key: 0,
  class: "po-text-base po-mt-2 po-max-w-md po-block po-text-slate-500"
}, Wu = { key: 1 }, Uu = { class: "po-grid po-grid-cols-1 lg:po-grid-cols-2 po-gap-5" }, Gu = {
  class: "po-text-xl md:po-text-2xl po-font-semibold po-text-slate-800",
  id: "po-page-title"
}, Zu = {
  key: 0,
  class: "po-text-base po-mt-4 po-max-w-md po-pb-5 po-block po-text-slate-500"
}, Ku = { class: "po-flex po-items-end po-justify-end po-flex-col" }, Yu = {
  key: 0,
  class: "po-flex md:po-justify-end po-mb-5"
}, Xu = { class: "po-bg-slate-50 po-shadow-sm po-rounded-xl po-py-5 po-px-2 po-divide-x po-divide-slate-200 po-flex" }, Qu = ["onClick"], Ju = { class: "po-text-xl po-font-medium po-text-slate-600 po-flex po-items-center po-space-x-1" }, ed = { class: "po-text-xl po-font-medium po-text-slate-600 group-hover:po-text-mpao-lightblue" }, td = { class: "po-text-sm po-text-slate-500 po-block group-hover:po-text-mpao-lightblue" }, od = { class: "po-flex po-items-center po-space-x-1 md:po-justify-end" }, ld = {
  key: 2,
  class: "po-border-l po-border-slate-400 po-h-3 po-w-3 po-ml-1"
}, sd = {
  key: 0,
  class: "po-bg-slate-50 po-p-5 po-mt-5 po-rounded-md po-grid po-grid-cols-1 md:po-grid-cols-3 po-gap-5"
}, nd = /* @__PURE__ */ r("span", { class: "po-text-xs po-text-slate-500 po-py-5" }, "No filters available at the moment.", -1), ad = {
  name: "PoPageTitle"
}, P2 = /* @__PURE__ */ L({
  ...ad,
  props: {
    label: { default: "" },
    description: { default: "" },
    stats: { default: null },
    showPagination: { type: Boolean, default: !1 },
    showFilter: { type: Boolean, default: !1 },
    showDownload: { type: Boolean, default: !1 },
    pagination: { default: null },
    filterOn: { type: Boolean, default: !1 },
    standAlone: { type: Boolean, default: !1 }
  },
  emits: ["button-click", "pagination-click", "stat-click"],
  setup(e, { emit: t }) {
    const l = e.filterOn ? x(!0) : x(!1);
    function s(a) {
      t("pagination-click", a);
    }
    function n(a) {
      return a.iconColor ? a.iconColor : "po-slate-600";
    }
    return (a, i) => a.standAlone ? (p(), d("div", Nu, [
      r("h1", Hu, V(a.label), 1),
      a.description !== "" ? (p(), d("span", qu, V(a.description), 1)) : _("", !0)
    ])) : (p(), d("div", Wu, [
      r("div", Uu, [
        r("div", null, [
          r("h1", Gu, V(a.label), 1),
          a.description !== "" ? (p(), d("span", Zu, V(a.description), 1)) : _("", !0)
        ]),
        r("div", Ku, [
          a.stats !== null ? (p(), d("div", Yu, [
            r("div", Xu, [
              (p(!0), d(R, null, U(a.stats, (u) => (p(), d("div", {
                class: "po-px-5 po-cursor-pointer po-group genie-effect",
                onClick: (f) => a.$emit("stat-click", u)
              }, [
                r("span", Ju, [
                  r("span", ed, V(u.value), 1),
                  u.icon ? (p(), d("span", {
                    key: 0,
                    class: O(["po-w-5 po-h-5", n(u)])
                  }, [
                    (p(), F(ce(u.icon)))
                  ], 2)) : _("", !0)
                ]),
                r("span", td, V(u.label), 1)
              ], 8, Qu))), 256))
            ])
          ])) : _("", !0),
          r("div", od, [
            a.showFilter ? (p(), d("button", {
              key: 0,
              title: "Filter",
              onClick: i[0] || (i[0] = (u) => {
                a.$emit("button-click", "filter"), l.value = !k(l);
              }),
              class: O([
                "po-p-2 po-rounded-md hover:po-bg-slate-200 po-transition-colors po-duration-75 po-ease-in-out",
                { "po-text-mpao-orange hover:po-text-mpao-orange": k(l) },
                { "tpo-ext-slate-600 hover:po-text-mpao-blue": !k(l) }
              ])
            }, [
              S(k(pn), { class: "po-w-4 po-stroke-current po-stroke-2" })
            ], 2)) : _("", !0),
            a.showDownload ? (p(), d("button", {
              key: 1,
              title: "Download",
              onClick: i[1] || (i[1] = (u) => a.$emit("button-click", "download")),
              class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
            }, [
              S(k(Xs), { class: "po-w-4 po-stroke-current po-stroke-2" })
            ])) : _("", !0),
            a.showFilter && a.showPagination || a.showDownload && a.showPagination ? (p(), d("span", ld, " ")) : _("", !0),
            a.showPagination ? (p(), F(Fu, {
              key: 3,
              pagination: a.pagination,
              onButtonClick: s
            }, null, 8, ["pagination"])) : _("", !0)
          ])
        ])
      ]),
      S(De, {
        "enter-active-class": "po-transition po-duration-100 po-ease-out",
        "enter-from-class": "po-transform po-scale-95 po-opacity-0",
        "enter-to-class": "po-transform po-scale-100 po-opacity-100",
        "leave-active-class": "po-transition po-duration-75 po-ease-out",
        "leave-from-class": "po-transform po-scale-100 po-opacity-100",
        "leave-to-class": "po-transform po-scale-95 po-opacity-0"
      }, {
        default: z(() => [
          k(l) ? (p(), d("div", sd, [
            Y(a.$slots, "filters", {}, () => [
              nd
            ])
          ])) : _("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), rd = {
  key: 0,
  class: "po-w-12"
}, id = ["onClick"], pd = { class: "po-flex po-space-x-1 po-pr-2 po-items-center" }, ud = { class: "po-grow" }, dd = {
  key: 0,
  class: "po-shrink-0 po-select-none po-bg-slate-100 po-rounded-md po-w-4 po-h-4 po-flex po-items-center po-justify-center po-cursor-pointer",
  role: "button"
}, cd = {
  key: 0,
  class: "po-w-12"
}, fd = ["onClick"], vd = ["colspan"], hd = { key: 1 }, md = ["colspan"], bd = { class: "po-py-10 po-block po-normal-case" }, gd = { class: "po-pr-5" }, yd = { class: "po-py-1" }, wd = { key: 0 }, _d = {
  name: "PoTable"
}, O2 = /* @__PURE__ */ L({
  ..._d,
  props: {
    thead: { default: null },
    tbody: { default: null },
    emptyMessage: { default: "We couldn't find any content to display." },
    breakAtLg: { type: Boolean, default: !1 },
    isLoading: { type: Boolean, default: !1 },
    hasDetailsRow: { type: Boolean, default: !1 }
  },
  emits: ["column-click"],
  setup(e, { emit: t }) {
    const o = e, { isLoading: l, tbody: s, thead: n } = me(o), a = x(!1), i = x(null), u = x(null), f = x(null);
    X(l, () => {
      c();
    }), X(s, () => {
      c(), b();
    }), G(() => {
      c(), b(), i.value = n.value;
    });
    function c() {
      a.value = l.value, u.value = s.value, l.value && (u.value = [{}, {}, {}, {}, {}]);
    }
    function b() {
      if (o.hasDetailsRow && o.tbody)
        for (let y = 0; y < o.tbody.length; y++)
          o.tbody[y].showDetails = !1;
    }
    function $() {
      return Math.floor(Math.random() * 41) + 40;
    }
    const m = (y, v) => {
      var h;
      y.sortable && (y.sorted && f.value === "asc" ? f.value = "desc" : f.value = "asc", (h = i.value) == null || h.forEach((g) => {
        g.label === y.label ? (g.sorted = !0, g.sortDirection = f.value, g.index = v) : (g.sorted = !1, g.sortDirection = null);
      }), t("column-click", y));
    };
    return (y, v) => (p(), d("table", {
      class: O(["table-responsive po-w-full", [{ lg: y.breakAtLg }]])
    }, [
      r("thead", null, [
        r("tr", null, [
          y.hasDetailsRow ? (p(), d("th", rd)) : _("", !0),
          (p(!0), d(R, null, U(i.value, (h, g) => (p(), d("th", {
            onClick: (w) => m(h, g)
          }, [
            r("span", pd, [
              r("span", ud, [
                Y(y.$slots, "th", Xe(Qe(h)))
              ]),
              h.sortable ? (p(), d("span", dd, [
                h.sorted ? _("", !0) : (p(), F(k(Tr), {
                  key: 0,
                  class: "po-w-3 po-h-3"
                })),
                h.sorted && h.sortDirection === "asc" ? (p(), F(k(Lr), {
                  key: 1,
                  class: "po-w-3 po-h-3"
                })) : _("", !0),
                h.sorted && h.sortDirection === "desc" ? (p(), F(k(Pr), {
                  key: 2,
                  class: "po-w-3 po-h-3"
                })) : _("", !0)
              ])) : _("", !0)
            ])
          ], 8, id))), 256))
        ])
      ]),
      r("tbody", null, [
        u.value !== null && !a.value || u.value !== null && u.value.length !== 0 && !a.value ? (p(!0), d(R, { key: 0 }, U(u.value, (h, g) => (p(), d(R, null, [
          r("tr", null, [
            y.hasDetailsRow ? (p(), d("td", cd, [
              r("span", {
                onClick: (w) => h.showDetails = !h.showDetails
              }, [
                S(k(Or), {
                  class: O(["po-w-5 po-fill-mpao-lightblue po-origin-center po-transition-transform po-duration-100 po-ease-out po-cursor-pointer", [{ "po-rotate-90": h.showDetails }]])
                }, null, 8, ["class"])
              ], 8, fd)
            ])) : _("", !0),
            Y(y.$slots, "td", Xe(Qe({ ...h, index: g, item: h })))
          ]),
          y.hasDetailsRow ? (p(), d("tr", {
            key: 0,
            class: O(["po-table-details-row", [{ "po-hidden": !h.showDetails }]])
          }, [
            k(n) ? (p(), d("td", {
              key: 0,
              colspan: k(n).length + 1
            }, [
              Y(y.$slots, "details", Xe(Qe({ item: h })))
            ], 8, vd)) : _("", !0)
          ], 2)) : _("", !0)
        ], 64))), 256)) : _("", !0),
        u.value == null && !a.value || u.value !== null && u.value.length == 0 && !a.value ? (p(), d("tr", hd, [
          k(n) ? (p(), d("td", {
            key: 0,
            colspan: k(n).length + 1,
            class: "po-text-center"
          }, [
            r("span", bd, V(y.emptyMessage), 1)
          ], 8, md)) : _("", !0)
        ])) : _("", !0),
        a.value ? (p(!0), d(R, { key: 2 }, U(u.value, (h) => (p(), d("tr", null, [
          (p(!0), d(R, null, U(k(n), (g) => (p(), d("td", gd, [
            r("div", yd, [
              r("div", {
                class: "po-h-2 loading-placeholder po-rounded-full",
                style: wo({ width: $() + "%" })
              }, null, 4)
            ])
          ]))), 256))
        ]))), 256)) : _("", !0)
      ]),
      y.$slots.tfoot ? (p(), d("tfoot", wd, [
        r("tr", null, [
          Y(y.$slots, "tfoot")
        ])
      ])) : _("", !0)
    ], 2));
  }
}), $d = { class: "" }, Vd = { class: "po-grow" }, xd = ["onClick"], kd = {
  name: "PoDescriptionList"
}, Cd = /* @__PURE__ */ L({
  ...kd,
  props: {
    items: { default: null },
    striped: { type: Boolean, default: !1 },
    columns: { type: Boolean, default: !0 }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, l) => (p(), d("div", null, [
      r("dl", {
        class: O([
          "po-description-list",
          { "po-divide-y po-divide-slate-200": !o.striped },
          { striped: o.striped },
          { "no-col": !o.columns }
        ])
      }, [
        Y(o.$slots, "content", {}, () => [
          (p(!0), d(R, null, U(o.items, (s) => (p(), d("div", null, [
            r("dt", null, V(s.title), 1),
            r("dd", $d, [
              r("span", Vd, V(s.description), 1),
              s.action !== void 0 ? (p(), d("span", {
                key: 0,
                class: "po-shrink-0 po-text-mpao-lightblue hover:po-text-mpao-blue po-transition-colors po-duration-100 po-ease-in-out po-px-2 po-cursor-pointer",
                onClick: (n) => o.$emit("button-click", s.action)
              }, V(typeof s.action == "string" ? s.action : s.action.label), 9, xd)) : _("", !0)
            ])
          ]))), 256))
        ])
      ], 2)
    ]));
  }
}), Sd = ["for"], Pd = { class: "po-capitalize" }, Od = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Ld = ["title"], Td = ["type", "name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], Ed = ["id"], Bd = ["id"], Md = {
  name: "PoInputField"
}, L2 = /* @__PURE__ */ L({
  ...Md,
  props: {
    modelValue: { default: "" },
    label: { default: "" },
    type: { default: "text" },
    display: { default: "vertical" },
    id: { default: "" },
    info: { default: null },
    message: { default: null },
    errorMessage: { default: null },
    hasError: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    placeholder: { default: void 0 },
    borderColor: { default: "po-border-slate-300 focus:po-border-mpao-lightblue" },
    modelModifiers: { default: () => ({}) }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e;
    function l() {
      return o.hasError ? "po-border-red-400 focus:po-border-red-600 focus:po-ring-red-600" : o.borderColor;
    }
    const { errorMessage: s } = me(o), n = x(s.value !== null);
    X(s, (m, y) => {
      n.value = s.value !== null && s.value !== "";
    }), X(s, (m, y) => {
      n.value = s.value !== null && s.value !== "";
    });
    let a = o.type === "currency" ? "text" : o.type;
    const i = x(void 0), u = (m) => {
      let y = m.target.value;
      i.value = y;
      let v = o.type === "currency" ? b(y) : y;
      console.log(o.modelModifiers), t("update:modelValue", v);
    }, f = (m) => {
      c(m.target.value);
    };
    X(o, (m, y) => {
      o.type === "currency" && i.value !== y.modelValue ? i.value = "" + Qo(o.modelValue) : i.value = o.modelValue;
    });
    const c = (m) => {
      let y = "";
      o.type === "currency" ? y = "" + Qo(b("" + m)) : y = m, i.value = y;
    }, b = (m) => {
      let y = m.replace(/,/g, "");
      const v = y.indexOf(".");
      return v !== -1 && y.substring(v + 1) === "00" && (y = y.substring(0, v)), y;
    };
    o.type === "currency" ? c(o.modelValue) : i.value = o.modelValue;
    const $ = x("");
    return G(() => {
      o.id === "" ? $.value = o.id ? o.id : `${o.label.replace(
        /\s/g,
        ""
      )}-${Date.now()}-inputfield-${Math.floor(Math.random() * 9e3)}` : $.value = o.id;
    }), (m, y) => (p(), d("div", {
      class: O(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": m.display === "horizontal" }]])
    }, [
      r("label", {
        for: $.value,
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700"
      }, [
        r("span", Pd, V(m.label), 1),
        m.required ? (p(), d("span", Od, "*")) : _("", !0),
        m.info !== null ? (p(), d("abbr", {
          key: 1,
          title: m.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          S(k(qt), { class: "po-fill-current" })
        ], 8, Ld)) : _("", !0)
      ], 8, Sd),
      r("input", xe({
        type: k(a),
        name: `${$.value}-field`,
        id: $.value,
        value: i.value,
        placeholder: m.placeholder,
        disabled: m.disabled,
        required: m.required,
        "aria-describedby": `${$.value}-description`,
        "aria-required": m.required,
        "aria-disabled": m.disabled
      }, m.$attrs, {
        onInput: u,
        onBlur: f,
        class: [
          "po-mt-1 peer po-block po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white focus:po-ring-0 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default",
          l()
        ]
      }), null, 16, Td),
      m.message !== null ? (p(), d("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${m.id}-description`
      }, V(m.message), 9, Ed)) : _("", !0),
      n.value && k(s) !== null ? (p(), d("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
        id: `${m.id}-error`
      }, [
        r("span", null, V(k(s)), 1)
      ], 8, Bd)) : _("", !0)
    ], 2));
  }
}), zd = { class: "po-text-sm po-font-medium po-text-slate-700 peer-focus:po-text-mpao-lightblue peer-invalid:po-text-red-500 peer-invalid:peer-focus:po-text-red-600 po-flex po-items-center po-space-x-1 po-capitalize" }, Ad = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Dd = ["name", "id", "value"], Id = ["for"], jd = { class: "po-flex po-items-center po-space-x-1" }, Rd = {
  key: 0,
  class: "po-text-sm"
}, Fd = {
  key: 1,
  class: "po-text-sm"
}, Nd = ["id"], Hd = ["id"], qd = {
  name: "PoInputFile"
}, T2 = /* @__PURE__ */ L({
  ...qd,
  props: {
    modelValue: { default: "" },
    label: { default: "" },
    id: { default: "" },
    info: { default: null },
    message: { default: null },
    errorMessage: { default: null },
    display: { default: "vertical" },
    required: { type: Boolean, default: !1 },
    progress: { default: null }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e;
    M(() => `width: ${o.progress}%`), M(() => o.progress);
    const l = x(""), s = (a) => {
      var u, f;
      const i = (f = (u = a.target) == null ? void 0 : u.files) == null ? void 0 : f[0];
      l.value = i ? i.name : "";
    }, n = (a) => {
      let i = a.target.value;
      t("update:modelValue", i);
    };
    return (a, i) => (p(), d("div", {
      class: O(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": a.display === "horizontal" }]])
    }, [
      r("span", zd, [
        r("span", null, V(a.label), 1),
        a.required ? (p(), d("span", Ad, "*")) : _("", !0)
      ]),
      r("input", {
        name: `${a.id}-upload`,
        id: `${a.id}-fileupload`,
        value: a.modelValue,
        type: "file",
        onInput: n,
        onChange: i[0] || (i[0] = (u) => s(u)),
        class: "po-sr-only po-peer"
      }, null, 40, Dd),
      r("label", {
        for: `${a.id}-fileupload`,
        class: "po-mt-1 po-block po-w-full po-border po-cursor-pointer po-rounded-md po-border-slate-300 po-bg-white peer-focus:po-border-mpao-lightblue invalid:po-border-red-400 invalid:focus:po-border-red-600 invalid:focus:po-ring-red-600 sm:po-text-sm po-p-2"
      }, [
        r("div", jd, [
          S(k(Pl), { class: "po-w-4 po-stroke-slate-500" }),
          l.value ? (p(), d("span", Rd, V(l.value), 1)) : (p(), d("span", Fd, "Choose file"))
        ])
      ], 8, Id),
      a.message !== null ? (p(), d("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${a.id}-description`
      }, V(a.message), 9, Nd)) : _("", !0),
      a.errorMessage !== null ? (p(), d("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${a.id}-error`
      }, V(a.errorMessage), 9, Hd)) : _("", !0)
    ], 2));
  }
}), Wd = ["for"], Ud = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Gd = ["title"], Zd = { class: "po-relative po-mt-1" }, Kd = {
  role: "button",
  ref: "comboboxButton"
}, Yd = ["disabled", "id"], Xd = { class: "po-flex po-items-center po-justify-between po-w-full po-px-2 po-pb-1" }, Qd = {
  class: "po-p-2 po-rounded-md hover:po-bg-slate-100 po-cursor-pointer po-transition-colors po-duration-150 po-ease-out",
  role: "button"
}, Jd = /* @__PURE__ */ r("span", {
  class: "po-p-2 po-rounded-md hover:po-bg-slate-100 po-cursor-pointer po-transition-colors po-duration-150 po-ease-out po-text-sm po-slate-600",
  role: "button"
}, " 2023 ", -1), ec = {
  class: "po-p-2 po-rounded-md hover:po-bg-slate-100 po-cursor-pointer po-transition-colors po-duration-150 po-ease-out",
  role: "button"
}, tc = /* @__PURE__ */ r("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), oc = { class: "po-grid po-grid-cols-3 po-p-1" }, lc = { class: "" }, sc = {
  key: 0,
  class: "po-mt-2 po-text-sm po-text-slate-500"
}, nc = {
  key: 1,
  class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1"
}, ac = {
  name: "PoMonthYearPicker"
}, E2 = /* @__PURE__ */ L({
  ...ac,
  props: {
    modelValue: { default: null },
    label: { default: "" },
    id: { default: "" },
    info: { default: null },
    display: { default: "vertical" },
    required: { type: Boolean, default: !1 },
    errorMessage: { default: null },
    message: { default: null },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["selected", "unSelected", "update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, l = x(""), s = x(""), n = x(), a = x(!1), i = x(!1), u = x(), f = x(null), c = x([
      { number: 1, name: "Jan" },
      { number: 2, name: "Feb" },
      { number: 3, name: "Mar" },
      { number: 4, name: "Apr" },
      { number: 5, name: "May" },
      { number: 6, name: "Jun" },
      { number: 7, name: "Jul" },
      { number: 8, name: "Aug", selected: !0 },
      { number: 9, name: "Sep" },
      { number: 10, name: "Oct" },
      { number: 11, name: "Nov" },
      { number: 12, name: "Dec" }
    ]);
    x({
      viewStartIdx: 0,
      viewEndIdx: 0,
      visibleStartIdx: 0,
      visibleEndIdx: 0
    }), n.value = o.modelValue, Tt(() => {
      n.value = o.modelValue;
    }), X(n, () => {
    });
    const { errorMessage: b } = me(o), $ = x(b.value !== null);
    X(b, (w, P) => {
      $.value = b.value !== null && b.value !== "";
    });
    const m = x("");
    Gt(f, () => {
      a.value = !!i.value;
    });
    const y = x();
    let v;
    G(() => {
      o.id === "" ? m.value = o.id ? o.id : `${o.label.replace(
        /\s/g,
        ""
      )}-${Date.now()}-month-picker-${Math.floor(Math.random() * 9e3)}` : m.value = o.id, v = Ut(u.value, y.value, {
        placement: "bottom-end",
        strategy: "fixed",
        modifiers: [
          {
            name: "sameWidth",
            enabled: !0,
            fn: ({ state: w }) => {
              w.styles.popper.width = `${w.rects.reference.width}px`;
            },
            phase: "beforeWrite",
            requires: ["computeStyles"]
          }
        ]
      });
    }), ne(() => {
      v && v.destroy();
    });
    function h() {
      i.value = !1, setTimeout(() => {
        a.value = !1;
      }, 100);
    }
    const g = (w) => {
      let P = w.target.value;
      l.value = P;
    };
    return Zt.on("sidebarOpen", (w) => {
      setTimeout(() => {
        v && v.update();
      }, 320);
    }), (w, P) => (p(), d("div", {
      class: O([{ "lg:po-grid lg:po-grid-cols-2": w.display === "horizontal" }]),
      ref_key: "containerRef",
      ref: f
    }, [
      r("label", {
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700",
        for: m.value
      }, [
        r("span", null, V(w.label), 1),
        w.required ? (p(), d("span", Ud, "*")) : _("", !0),
        w.info !== null ? (p(), d("abbr", {
          key: 1,
          title: w.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          S(k(qt), { class: "po-fill-current" })
        ], 8, Gd)) : _("", !0)
      ], 8, Wd),
      r("div", Zd, [
        r("div", Kd, [
          Ce(r("input", {
            type: "text",
            ref_key: "selectBox",
            ref: u,
            class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm",
            disabled: w.disabled,
            "onUpdate:modelValue": P[0] || (P[0] = (C) => s.value = C),
            onInput: g,
            onFocus: P[1] || (P[1] = (C) => {
              i.value = !0, a.value = !0;
            }),
            onBlur: h,
            id: m.value
          }, null, 40, Yd), [
            [ft, s.value]
          ]),
          r("span", {
            class: "po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-rounded-r-md po-px-2 focus:po-outline-none",
            role: "button",
            onMousedown: P[2] || (P[2] = oe((C) => a.value = !a.value, ["stop"]))
          }, [
            S(k(Er), {
              class: "po-h-5 po-w-5 po-text-slate-400",
              "aria-hidden": "true"
            })
          ], 32)
        ], 512),
        Ce(r("div", {
          ref_key: "popper",
          ref: y,
          class: "po-absolute po-z-10 po-mt-1 po-w-full po-rounded-md po-max-w-[290px] po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
        }, [
          r("div", Xd, [
            r("span", Qd, [
              S(k(Cl), { class: "po-w-4 po-stroke-slate-500 po-stroke-2" })
            ]),
            Jd,
            r("span", ec, [
              S(k(Sl), { class: "po-w-4 po-stroke-slate-500 po-stroke-2" })
            ])
          ]),
          tc,
          r("div", oc, [
            (p(!0), d(R, null, U(c.value, (C) => (p(), d("div", lc, [
              r("span", {
                class: O(["po-block po-px-2 po-text-sm po-py-4 po-rounded-md po-text-center po-cursor-pointer po-transition-colors po-duration-150 po-ease-out", [
                  { "po-text-slate-600 hover:po-bg-slate-100": !C.selected },
                  {
                    "po-text-white po-bg-mpao-lightblue hover:po-bg-purple-600": C.selected
                  }
                ]])
              }, V(C.name), 3)
            ]))), 256))
          ])
        ], 512), [
          [Et, a.value]
        ])
      ]),
      w.message !== null ? (p(), d("p", sc, V(w.message), 1)) : _("", !0),
      k(b) !== null ? (p(), d("p", nc, [
        r("span", null, V(k(b)), 1)
      ])) : _("", !0)
    ], 2));
  }
}), rc = { class: "po-text-sm po-font-medium po-text-slate-700 po-cursor-pointer po-select-none po-flex po-items-center po-space-x-1" }, ic = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, pc = {
  name: "PoToggle"
}, B2 = /* @__PURE__ */ L({
  ...pc,
  props: {
    modelValue: { type: Boolean, default: !1 },
    label: { default: "" },
    required: { type: Boolean, default: !1 }
  },
  setup(e) {
    const o = x(e.modelValue);
    return (l, s) => (p(), F(k($a), {
      as: "div",
      class: "po-flex po-items-center"
    }, {
      default: z(() => [
        S(k(Va), {
          modelValue: o.value,
          "onUpdate:modelValue": s[0] || (s[0] = (n) => o.value = n),
          onClick: s[1] || (s[1] = (n) => l.$emit("update:modelValue", !o.value)),
          class: O([
            o.value ? "po-bg-mpao-lightblue" : "po-bg-slate-200",
            "po-relative po-inline-flex po-h-6 po-w-11 po-flex-shrink-0 po-cursor-pointer po-rounded-full po-border-2 po-border-transparent po-transition-colors po-duration-200 po-ease-in-out focus:po-outline-none focus:po-ring-2 focus:po-ring-mpao-lightblue focus:po-ring-offset-2"
          ])
        }, {
          default: z(() => [
            r("span", {
              "aria-hidden": "true",
              class: O([
                o.value ? "po-translate-x-5" : "po-translate-x-0",
                "po-pointer-events-none po-inline-block po-h-5 po-w-5 po-transform po-rounded-full po-bg-white po-shadow po-ring-0 po-transition po-duration-200 po-ease-in-out"
              ])
            }, null, 2)
          ]),
          _: 1
        }, 8, ["modelValue", "class"]),
        S(k(xa), {
          as: "span",
          class: "po-ml-3"
        }, {
          default: z(() => [
            r("span", rc, [
              r("span", null, V(l.label), 1),
              l.required ? (p(), d("span", ic, "*")) : _("", !0)
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), uc = { class: "po-pt-1 po-space-y-1 po-border-r-2 po-border-slate-200 po-relative" }, dc = ["onClick"], cc = {
  name: "PoSectionMenu"
}, M2 = /* @__PURE__ */ L({
  ...cc,
  props: {
    currPageRoute: { default: "" },
    menuItems: { default: null }
  },
  emits: ["link-click"],
  setup(e, { emit: t }) {
    return (o, l) => (p(), d("ul", uc, [
      (p(!0), d(R, null, U(o.menuItems, (s) => (p(), d("li", null, [
        r("span", {
          onClick: (n) => o.$emit("link-click", s.link),
          role: "button",
          class: O([
            "po-relative po-cursor-pointer -po-right-[0.15rem] po-py-1 po-border-r-2 hover:po-border-mpao-lightblue po-transition-colors po-duration-200 po-ease-in-out po-flex po-items-center po-space-x-2",
            {
              "po-border-mpao-lightblue po-text-sm po-text-mpao-lightblue": s.link == o.currPageRoute
            },
            {
              "po-border-slate-200 po-text-sm po-text-slate-600": s.link !== o.currPageRoute
            }
          ])
        }, [
          (p(), F(ce(s.icon), { class: "po-w-4 po-h-4 po-stroke-current" })),
          r("span", null, V(s.label), 1)
        ], 10, dc)
      ]))), 256))
    ]));
  }
}), fc = { class: "po-relative po-flex po-items-start" }, vc = { class: "po-flex po-h-5 po-items-center" }, hc = ["name", "id", "checked", "disabled", "aria-describedby"], mc = { class: "po-ml-3 po-text-sm" }, bc = ["for"], gc = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, yc = ["id"], wc = { class: "po-sr-only" }, _c = ["id"], $c = {
  name: "PoCheckbox"
}, z2 = /* @__PURE__ */ L({
  ...$c,
  props: {
    modelValue: { type: Boolean, default: !1 },
    label: { default: "" },
    id: { default: "checkbox-0" },
    message: { default: null },
    errorMessage: { default: null },
    disabled: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 }
  },
  emits: "update:modelValue",
  setup(e, { emit: t }) {
    return (o, l) => (p(), d("div", null, [
      r("div", fc, [
        r("div", vc, [
          r("input", xe({
            name: `${o.id}-field`,
            id: o.id,
            checked: o.modelValue,
            disabled: o.disabled,
            "aria-describedby": `${o.id}-description`
          }, o.$attrs, {
            onInput: l[0] || (l[0] = (s) => o.$emit("update:modelValue", s.target.checked)),
            type: "checkbox",
            class: ["po-h-4 po-w-4 po-rounded po-border-slate-300 po-text-mpao-lightblue focus:po-ring-mpao-lightblue", [{ "po-bg-slate-200": o.disabled }]]
          }), null, 16, hc)
        ]),
        r("div", mc, [
          r("label", {
            for: o.id,
            class: "po-font-medium po-text-slate-600 po-cursor-pointer po-select-none po-flex po-items-center po-space-x-1"
          }, [
            r("span", null, V(o.label), 1),
            o.required ? (p(), d("span", gc, "*")) : _("", !0)
          ], 8, bc),
          o.message ? (p(), d("span", {
            key: 0,
            id: `${o.id}-description`,
            class: "po-text-slate-500 po-cursor-default"
          }, [
            r("span", wc, V(o.label), 1),
            J(" " + V(o.message), 1)
          ], 8, yc)) : _("", !0)
        ])
      ]),
      o.errorMessage !== null ? (p(), d("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${o.id}-error`
      }, V(o.errorMessage), 9, _c)) : _("", !0)
    ]));
  }
}), Vc = /* @__PURE__ */ r("div", { class: "po-pb-5 po-max-w-xl" }, [
  /* @__PURE__ */ r("span", { class: "po-text-sm po-text-slate-600" }, "We're always working to improve our app, and we're excited to share the latest changes with you. We hope you enjoy these new features and improvements")
], -1), xc = { class: "po-flex po-space-x-2" }, kc = ["onClick"], Cc = { class: "po-text-sm po-font-semibold po-slate-800" }, Sc = { class: "po-text-xs po-text-white po-px-1 po-py-0 po-rounded-md po-bg-mpao-lightblue" }, Pc = { class: "po-bg-gradient-to-t po-from-mpao-orange/20 po-via-mpao-lightblue/20 po-to-purple-500/10 -po-mb-5 -po-mx-5 po-p-5 po-pb-10" }, Oc = { key: 0 }, Lc = { class: "po-space-y-2 po-mt-5" }, Tc = { class: "po-border po-border-slate-200 po-rounded-lg po-p-3 po-bg-white" }, Ec = { class: "po-flex po-items-center po-space-x-2" }, Bc = { class: "po-text-mpao-lightblue po-grow po-text-lg" }, Mc = { class: "po-font-semibold po-shrink-0 po-text-mpao-lightblue po-text-sm po-px-2 po-py-1 po-rounded-xl po-bg-mpao-lightblue/10" }, zc = ["innerHTML"], Ac = {
  key: 0,
  class: "po-bg-white po-rounded-md po-px-4 po-py-3 po-block po-text-sm po-text-center po-text-mpao-lightblue hover:po-text-purple-600 po-cursor-pointer"
}, Dc = /* @__PURE__ */ L({
  __name: "ChangeLogModel",
  props: {
    changelog: { default: null },
    showBtn: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = x(!1), o = x(0);
    return (l, s) => (p(), d(R, null, [
      l.showBtn ? (p(), d("a", {
        key: 0,
        href: "#",
        onClick: s[0] || (s[0] = oe((n) => t.value = !0, ["prevent"])),
        class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
      }, "Change logs")) : _("", !0),
      S(wt, {
        show: t.value,
        onModalClosed: s[1] || (s[1] = (n) => t.value = !1),
        "modal-title": "Change Log",
        "modal-width": "sm:po-max-w-4xl",
        id: "change-log-modal"
      }, {
        content: z(() => [
          r("div", null, [
            Vc,
            r("div", xc, [
              (p(!0), d(R, null, U(l.changelog, (n, a) => (p(), d("span", {
                class: O(["po-flex po-items-center po-space-x-1 po-px-4 po-py-3 po-rounded-t-xl po-cursor-pointer", [{ "po-bg-purple-500/10": o.value === a }]]),
                onClick: (i) => o.value = a
              }, [
                r("span", Cc, V(n.label) + " Version", 1),
                r("span", Sc, V(n.latest_version), 1)
              ], 10, kc))), 256))
            ]),
            r("div", Pc, [
              (p(!0), d(R, null, U(l.changelog, (n, a) => (p(), d("div", null, [
                o.value === a ? (p(), d("div", Oc, [
                  r("div", Lc, [
                    (p(!0), d(R, null, U(n.version_history, (i) => (p(), d("div", Tc, [
                      r("span", Ec, [
                        r("span", Bc, V(i.date), 1),
                        r("span", Mc, V(i.version), 1)
                      ]),
                      r("div", {
                        class: "po-mt-3 po-prose-sm po-prose-slate",
                        innerHTML: i.note
                      }, null, 8, zc)
                    ]))), 256)),
                    n.hasMore ? (p(), d("span", Ac, "More")) : _("", !0)
                  ])
                ])) : _("", !0)
              ]))), 256))
            ])
          ])
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Yt = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [l, s] of t)
    o[l] = s;
  return o;
}, Ic = {}, jc = {
  class: "po-h-8",
  src: "https://pension.gov.mv/asset/image/en-ccc-2020-issa.png",
  alt: "issa Certificate"
};
function Rc(e, t) {
  return p(), d("img", jc);
}
const Fc = /* @__PURE__ */ Yt(Ic, [["render", Rc]]), Nc = {}, Hc = {
  class: "po-h-8",
  src: "https://pension.gov.mv/asset/image/iso_logo.png",
  alt: "ISO 27001 Certificate"
};
function qc(e, t) {
  return p(), d("img", Hc);
}
const Wc = /* @__PURE__ */ Yt(Nc, [["render", qc]]), Uc = { class: "-po-m-5" }, Gc = ["src", "alt"], $l = /* @__PURE__ */ L({
  __name: "CertificateModel",
  props: {
    src: { default: "" },
    title: { default: "" },
    logo: { default: null }
  },
  setup(e) {
    const t = x(!1);
    return (o, l) => (p(), d(R, null, [
      (p(), F(ce(o.logo), {
        onClick: l[0] || (l[0] = oe((s) => t.value = !0, ["prevent"])),
        class: "po-cursor-pointer",
        role: "button"
      })),
      S(wt, {
        show: t.value,
        onModalClosed: l[1] || (l[1] = (s) => t.value = !1),
        "modal-title": o.title,
        "modal-width": "sm:po-max-w-4xl",
        id: "change-log-modal"
      }, {
        content: z(() => [
          r("div", Uc, [
            r("img", {
              src: o.src,
              alt: o.title
            }, null, 8, Gc)
          ])
        ]),
        _: 1
      }, 8, ["show", "modal-title"])
    ], 64));
  }
}), Zc = /* @__PURE__ */ r("div", { class: "po-prose-sm po-prose-slate po-p-5 po-opacity-8" }, [
  /* @__PURE__ */ r("h2", { class: "po-text-red-500" }, "Sample Terms and Conditions"),
  /* @__PURE__ */ r("h3", null, "1. Acceptance of Terms"),
  /* @__PURE__ */ r("p", null, " By accessing and using this web app, you agree to be bound by these terms and conditions. "),
  /* @__PURE__ */ r("h3", null, "2. User Responsibilities"),
  /* @__PURE__ */ r("p", null, " Users are responsible for maintaining the confidentiality of their account information and complying with all applicable laws. "),
  /* @__PURE__ */ r("h3", null, "3. Privacy Policy"),
  /* @__PURE__ */ r("p", null, [
    /* @__PURE__ */ J(" Our privacy policy outlines how we collect, use, and protect your personal information. Please review our "),
    /* @__PURE__ */ r("a", { href: "privacy.html" }, "Privacy Policy"),
    /* @__PURE__ */ J(" for more details. ")
  ]),
  /* @__PURE__ */ r("h3", null, "4. Intellectual Property"),
  /* @__PURE__ */ r("p", null, " All content and materials provided on this web app are protected by intellectual property laws. Unauthorized use is prohibited. "),
  /* @__PURE__ */ r("h3", null, "5. Limitation of Liability"),
  /* @__PURE__ */ r("p", null, " We are not liable for any damages or losses incurred from the use of this web app, including but not limited to, errors, omissions, or interruptions. "),
  /* @__PURE__ */ r("h3", null, "6. Modification of Terms"),
  /* @__PURE__ */ r("p", null, " We reserve the right to modify or update these terms and conditions at any time without prior notice. It is your responsibility to review them periodically. "),
  /* @__PURE__ */ r("h3", null, "7. Governing Law"),
  /* @__PURE__ */ r("p", null, " These terms and conditions shall be governed by and construed in accordance with the laws of your jurisdiction. "),
  /* @__PURE__ */ r("h3", null, "8. Contact Us"),
  /* @__PURE__ */ r("p", null, [
    /* @__PURE__ */ J(" If you have any questions or concerns about these terms and conditions, please contact us at "),
    /* @__PURE__ */ r("a", { href: "mailto:info@pension.gov.mv" }, "info@pension.gov.mv"),
    /* @__PURE__ */ J(". ")
  ])
], -1), Kc = /* @__PURE__ */ L({
  __name: "ToCModel",
  setup(e) {
    const t = x(!1);
    return (o, l) => (p(), d(R, null, [
      r("a", {
        href: "#",
        onClick: l[0] || (l[0] = oe((s) => t.value = !0, ["prevent"])),
        role: "button",
        class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
      }, "Terms & Conditions"),
      S(wt, {
        show: t.value,
        onModalClosed: l[1] || (l[1] = (s) => t.value = !1),
        "modal-title": "Terms & Conditions",
        "modal-width": "sm:po-max-w-3xl",
        id: "change-log-modal"
      }, {
        content: z(() => [
          Zc
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Yc = /* @__PURE__ */ r("div", { class: "po-prose-sm po-prose-slate po-p-5 po-opacity-80" }, [
  /* @__PURE__ */ r("h2", { class: "po-text-red-500" }, "Sample Privacy Policy"),
  /* @__PURE__ */ r("h3", null, "1. Information Collection"),
  /* @__PURE__ */ r("p", null, " We may collect personal information such as name, contact details, and pension-related data necessary for providing our services. "),
  /* @__PURE__ */ r("h3", null, "2. Use of Information"),
  /* @__PURE__ */ r("p", null, " The collected information is used for the purpose of administering pensions, processing applications, and communicating with users. "),
  /* @__PURE__ */ r("h3", null, "3. Data Security"),
  /* @__PURE__ */ r("p", null, " We implement appropriate security measures to protect personal information from unauthorized access, alteration, or disclosure. "),
  /* @__PURE__ */ r("h3", null, "4. Third-Party Disclosure"),
  /* @__PURE__ */ r("p", null, " We may share personal information with trusted third parties only to the extent necessary for pension administration purposes. "),
  /* @__PURE__ */ r("h3", null, "5. Cookies and Tracking"),
  /* @__PURE__ */ r("p", null, " We use cookies and similar technologies to enhance user experience and collect non-personal information about website usage. "),
  /* @__PURE__ */ r("h3", null, "6. Data Retention"),
  /* @__PURE__ */ r("p", null, " We retain personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law. "),
  /* @__PURE__ */ r("h3", null, "7. User Rights"),
  /* @__PURE__ */ r("p", null, " Users have the right to access, update, and delete their personal information. Please contact us to exercise these rights. "),
  /* @__PURE__ */ r("h3", null, "8. Children's Privacy"),
  /* @__PURE__ */ r("p", null, " This web app is not intended for children under the age of 13. We do not knowingly collect or store personal information from children. "),
  /* @__PURE__ */ r("h3", null, "9. Changes to Privacy Policy"),
  /* @__PURE__ */ r("p", null, " We reserve the right to modify or update this privacy policy at any time. Users will be notified of any significant changes. "),
  /* @__PURE__ */ r("h3", null, "8. Contact Us"),
  /* @__PURE__ */ r("p", null, [
    /* @__PURE__ */ J(" If you have any questions or concerns about our privacy policy, please contact us at "),
    /* @__PURE__ */ r("a", { href: "mailto:info@pension.gov.mv" }, "info@pension.gov.mv"),
    /* @__PURE__ */ J(". ")
  ])
], -1), Xc = /* @__PURE__ */ L({
  __name: "PrivacyPolicyModel",
  setup(e) {
    const t = x(!1);
    return (o, l) => (p(), d(R, null, [
      r("a", {
        href: "#",
        onClick: l[0] || (l[0] = oe((s) => t.value = !0, ["prevent"])),
        role: "button",
        class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
      }, "Privacy Policy"),
      S(wt, {
        show: t.value,
        onModalClosed: l[1] || (l[1] = (s) => t.value = !1),
        "modal-title": "Privacy Policy",
        "modal-width": "sm:po-max-w-3xl",
        id: "change-log-modal"
      }, {
        content: z(() => [
          Yc
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Qc = { class: "po-grid po-gap-5 po-grid-cols-1 lg:po-grid-cols-2 po-px-6 lg:po-px-8 po-mt-10 po-pb-10" }, Jc = { class: "sm:po-flex po-items-start sm:po-space-x-5" }, e1 = /* @__PURE__ */ r("svg", {
  class: "po-h-10",
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  "fill-rule": "evenodd",
  "stroke-linejoin": "round",
  "stroke-miterlimit": "2",
  "clip-rule": "evenodd",
  viewBox: "0 0 343 287"
}, [
  /* @__PURE__ */ r("path", {
    fill: "#203057",
    d: "M61.305 92.088a16.74 16.74 0 0 1-2.583.542 12.086 12.086 0 0 0-4.604 1.425L108.41 0h21.308c-22.054 9.263-22.871 36.388-23.021 46.463-.237.008-.467.017-.708.042-5.509.462-13.509 3.245-20.296 13.904-2.267 3.512-4.392 7.341-6.263 10.721l-.125.204c-6.429 11.579-10.725 18.766-18 20.754ZM261.87 71.267c0-.013-.079-.142-.092-.159-1.987-3.575-4.045-7.279-6.225-10.683-6.82-10.675-14.795-13.458-20.295-13.908a6.116 6.116 0 0 0-.755-.063c-.358-12.162-2.37-21.821-6.12-29.492C224.449 8.912 218.67 3.233 211.17 0h21.104l54.109 93.708a12.134 12.134 0 0 0-3.884-1.05c-.875-.104-1.7-.3-2.408-.487-.063-.029-.167-.067-.167-.067-7.271-1.979-11.575-9.175-18.054-20.837ZM112.871 197.965c3.809 7.767 9.363 13.342 16.538 16.588h-21L54.384 120.99c1.371.692 2.837 1.146 4.337 1.292 1.034.112 1.979.362 2.592.529 7.267 1.971 11.575 9.179 18 20.754 2.412 4.329 4.275 7.65 6.379 10.938 6.8 10.65 14.783 13.445 20.288 13.9.266.02.512.029.754.029.358 12.166 2.362 21.829 6.137 29.533Zm149.045-54.381c6.442-11.571 10.738-18.767 18.009-20.759.745-.2 1.641-.425 2.575-.529 1.25-.121 2.45-.446 3.608-.933l-53.829 93.204h-20.063c21.375-9.537 22.175-36.212 22.313-46.104.229-.013.462-.021.716-.042 5.513-.462 13.505-3.246 20.309-13.908 2.304-3.625 4.558-7.667 6.362-10.929Zm-82.546 28.807v.208c.037 12.463 5.654 19.896 15.033 19.896 13.329 0 17.767-4.317 17.767-29.808V94.903l17.433-13.47v81.254c0 .241-.108 3.041-.217 5.746l-.158 3.7c-.071 1.975-.142 3.687-.167 4.458a1.689 1.689 0 0 0-.079.383c0 .104.021.196.033.3-2.454 24.05-13.783 35.746-34.612 35.746-8.758 0-16.329-3.292-21.925-9.542a2.922 2.922 0 0 0-2.15-.945c-.825 0-1.613.358-2.15.975-5.567 6.308-12.746 9.512-21.35 9.512-22.246 0-34.05-14.842-35.104-44.121 7.871-1.337 13.466-6.258 15.471-8.325l1.87-1.433v3.546c0 25.341 5.725 29.808 17.763 29.808 13.312 0 14.921-17.183 15.117-20.629.3-5.413 4.116-9.663 8.691-9.663h.325c4.709.2 8.409 4.68 8.409 10.188Zm-68.52-37.313V42.615c0-.104.088-.579.284-1.396 1.737-27.029 13.429-40.171 35.696-40.171 8.962 0 16.75 3.405 22.512 9.821.754.871 2.3.892 3.121-.012 5.712-6.509 13.1-9.809 21.937-9.809 22.938 0 35.021 15.355 35.93 45.638-7.934 1.075-13.717 6.146-15.817 8.275l-3.125 2.408v-5.171c0-24.833-5.25-29.012-16.988-29.012-12.616 0-14.129 16.55-14.325 19.875-.304 5.937-4.437 10.417-9.608 10.417h-.221c-5.137-.23-9.162-5.055-9.162-11.009v-.183c-.034-11.971-5.371-19.1-14.254-19.1-12.946 0-16.963 4.004-16.963 29.012v68.192l-19.017 14.688Z"
  }),
  /* @__PURE__ */ r("path", {
    fill: "#ec6e25",
    d: "m165.883 91.539-15.875 12.271-15.171-11.733V67.535l31.046 24.004Zm9.441 31.844 15.884-12.288 15.195 11.763-.004 24.529-31.075-24.004Zm-64.934 39.882c-.042.014-.031.008-.014.001l-.286.016c-1.067.113-2 .171-2.784.175h-.075c-.241-.017-.462-.004-.858-.004a24.05 24.05 0 0 1-.829-.104c-.038-.013-.075-.013-.117-.013 0 0-.012 0-.054-.016 0 0-.046-.009-.088-.009-4.07-.633-10.07-3.125-15.408-11.5-1.967-3.083-3.737-6.225-6.212-10.666-5.534-9.946-9.913-17.255-16.088-21.005-.092-.045-2.221-1.379-5.375-2.245a23.775 23.775 0 0 0-1.771-.392l-1.858-.292c-.121 0-.233-.016-.554-.15-.684-.196-1.275-.433-1.713-.679a1.038 1.038 0 0 0-.25-.146l-.133-.091c-.117-.075-.233-.138-.346-.234-.208-.141-.404-.296-.604-.45-.008-.029-.042-.062-.042-.062-.571-.488-1.133-1.084-1.508-1.609-.05-.087-.1-.191-.15-.25-.129-.187-.233-.362-.367-.562l-.346-.675c-.054-.104-.116-.217-.225-.458l-.162-.392a4.5 4.5 0 0 1-.121-.308 9.748 9.748 0 0 0-.042-.092.188.188 0 0 0-.033-.1 10.976 10.976 0 0 1-.237-.817 10.23 10.23 0 0 1-.196-.85c-.038-.3-.088-.587-.125-.983a17.836 17.836 0 0 1-.054-.771c.008-.292.037-.587.066-.975.025-.308.075-.604.125-.954.063-.279.117-.546.217-.917.058-.25.129-.475.204-.7.025-.046.042-.121.042-.121.008-.025.016-.058.033-.075.067-.191.133-.366.254-.654l.463-.966.162-.25c.109-.188.225-.367.367-.596.829-1.188 1.829-2.129 3.083-2.834.188-.1.363-.2.579-.295.375-.184.863-.334 1.596-.484l.317-.071c.121-.025.233-.054.337-.054.117-.016.238-.025.438-.071.275-.029.533-.075.783-.129.404-.058 1.117-.2 1.609-.346a.998.998 0 0 0 .291-.062c1.975-.575 5.017-1.796 8.134-4.283 4.77-4.059 8.512-10.446 13.283-19.025 1.946-3.53 3.958-7.171 6.129-10.563 5.446-8.529 11.558-11.029 15.992-11.575l-.009 21.342c-.67.612-1.37 1.483-2.05 2.541-1.933 3.021-3.795 6.392-5.45 9.363l-.15.267c-3.458 6.22-7.383 13.27-12.491 19.187l-2.142 2a1.423 1.423 0 0 0-.129 1.983c.092.088.208.175.208.175l1.946 2.238c.067.062.15.125.242.204.221.246.421.517.641.771l.309.35c.012.042.121.183.137.217 4.659 5.762 8.363 12.42 11.325 17.75l.571 1.033c1.583 2.846 3.229 5.787 4.983 8.529a14.943 14.943 0 0 0 1.667 2.171c.504.429 1.35.967 2.563.967 1.166 0 2.375-.534 3.483-1.488.062-.037.225-.158.258-.187l1.592-1.538 24.154-18.529 8.271-6.479c.083-.063.154-.134.237-.229l71.888-55.605c1.787-1.808 6.662-6.125 13.142-6.958.25 0 .991-.029 1.766-.075l.671-.017c.583-.033 1.1-.054 1.317-.054 4.387.371 10.812 2.684 16.541 11.634 2.184 3.45 4.317 7.27 6.205 10.662 5.458 9.846 9.791 17.096 15.758 20.796.079.087.179.154.258.221 1.663 1.021 3.404 1.787 5.159 2.246.133.041.258.041.295.02.35.084.73.175 1.121.271.054.009.129.042.179.042.013 0 .15.021.159.021.475.087.958.162 1.491.225 4.367.454 7.767 4.712 7.884 9.871-.15 5.179-3.55 9.42-7.896 9.883-.854.096-3.233.417-4.15.654-9.354 3.158-13.879 11.442-18.667 20.229-.529.954-1.046 1.917-1.591 2.896-1.884 3.383-4 7.208-6.2 10.663-5.45 8.512-11.546 11.041-15.988 11.587v-21.337c.658-.584 1.358-1.459 2.054-2.542 1.967-3.092 3.804-6.417 5.425-9.35l.125-.196c3.029-5.454 9.467-15.325 14.596-21.762a1.419 1.419 0 0 0-.05-1.855c-.521-.558-1.146-1.283-1.829-2.07a1.192 1.192 0 0 0-.488-.346 60.342 60.342 0 0 1-3.341-4.304c-.113-.146-.204-.275-.275-.371 0 0-.067-.138-.088-.167-3.329-4.721-6.208-9.908-8.546-14.104l-.15-.279c-1.266-2.284-2.625-4.584-3.895-6.738l-1.463-2.487c-1.104-1.854-2.487-2.813-4.129-2.813-.596 0-1.138.142-1.604.296l-.392.154-20.537 15.563-43.45 33.587-39.988 31.125a1.463 1.463 0 0 0-.683.304l-3.113 2.417s-.146.125-.262.229c-1.692 1.717-6.554 5.909-12.904 6.929Z"
  }),
  /* @__PURE__ */ r("path", {
    fill: "#203057",
    d: "M9.142 250.096c8.762 0 12.862 3.154 12.862 10.838v3.341c0 7.492-4.242 10.98-12.862 10.98H6.646v11.116H0v-36.275h9.142Zm0 18.892c4.708 0 6.262-1.604 6.262-5.042v-2.683c0-3.442-1.129-5.233-6.171-5.233H6.596v12.958h2.546Zm39.011-18.892v5.654h-14.37v9.325h12.25v5.842h-12.25v9.567h15.033v5.937H27.283v-36.325h20.87Zm28.511 36.277h-6.313l-10.65-22.992.567 13.758v9.234h-6.454v-36.23h6.454l10.646 23.888-.704-15.313v-8.575h6.454v36.23Zm17.293-30.764c-3.579 0-5.042 1.129-5.042 4.571 0 4.566 3.63 4.191 9.142 5.041 4.192.654 8.196 2.354 8.196 9.609 0 8.383-3.629 11.92-12.342 11.92-9.046 0-11.921-4.383-11.921-10.225h6.546c.146 2.78 1.371 4.288 5.513 4.288 3.912 0 5.704-1.65 5.704-5.746 0-4.287-5.088-4.287-8.954-4.808-4.096-.517-8.429-2.542-8.429-10.034 0-6.783 4.141-10.316 11.587-10.316 6.55 0 10.883 2.4 11.496 9.654h-6.55c-.188-3.063-1.792-3.954-4.946-3.954Zm17.716-5.465h6.55v36.275h-6.55v-36.275Zm12.631 25.722v-15.358c0-7.68 3.346-10.838 12.108-10.838 8.763 0 12.392 3.158 12.392 10.838v15.358c0 7.492-3.771 10.837-12.392 10.837-8.621 0-12.108-3.345-12.108-10.837Zm18-.329v-14.7c0-3.296-.85-5.417-5.892-5.417-4.712 0-5.608 2.121-5.608 5.417v14.7c0 3.441.896 5.416 5.608 5.416 4.713 0 5.892-1.975 5.892-5.416Zm35.526 10.836h-6.313l-10.65-22.992.567 13.758v9.234h-6.454v-36.23h6.454l10.646 23.888-.704-15.313v-8.575h6.454v36.23Zm17.861-10.507v-15.358c0-7.68 3.346-10.838 12.108-10.838 8.763 0 12.392 3.158 12.392 10.838v15.358c0 7.492-3.771 10.837-12.392 10.837-8.621 0-12.108-3.345-12.108-10.837Zm18-.329v-14.7c0-3.296-.85-5.417-5.892-5.417-4.712 0-5.608 2.121-5.608 5.417v14.7c0 3.441.896 5.416 5.608 5.416 4.713 0 5.892-1.975 5.892-5.416Zm33.925-19.506H232.82v9.046h12.533v5.891H232.82v15.45h-6.454v-36.32h21.25v5.933Zm26.007 0h-14.791v9.046h12.533v5.891h-12.533v15.45h-6.455v-36.32h21.246v5.933Zm4.809-5.887h6.55v36.275h-6.55v-36.275Zm37.133 25.015c0 7.962-3.771 11.308-12.392 11.308-8.62 0-12.108-3.346-12.108-10.837v-14.746c0-7.679 3.346-10.838 12.108-10.838 8.763 0 12.392 3.204 12.392 11.263h-6.5c0-3.534-.85-5.513-5.892-5.513-4.712 0-5.608 1.979-5.608 5.417V275.3c0 3.442.896 5.421 5.608 5.421 4.713 0 5.892-1.979 5.892-5.562h6.5Zm26.243-25.063v5.654h-14.37v9.325h12.25v5.842h-12.25v9.567h15.033v5.937h-21.533v-36.325h20.87Z"
  })
], -1), t1 = { class: "po-mt-5 sm:po-mt-0" }, o1 = /* @__PURE__ */ r("p", { class: "-po-mt-1 po-text-xs po-text-slate-500" }, " 8th Floor, Allied Building , Chaandhanee Magu, Malé, 20156, Maldives ", -1), l1 = { class: "po-mt-1 po-text-xs po-text-slate-500" }, s1 = { class: "po-mt-1 po-text-xs po-text-slate-500 po-flex -po-mb-2 po-flex-wrap" }, n1 = {
  href: "https://www.pension.gov.mv",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, a1 = /* @__PURE__ */ r("span", null, "www.pension.gov.mv", -1), r1 = {
  href: "mailto:info@pension.gov.mv",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, i1 = /* @__PURE__ */ r("span", null, "info@pension.gov.mv", -1), p1 = {
  href: "tel:1441",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, u1 = /* @__PURE__ */ r("span", null, "1441", -1), d1 = { class: "po-flex lg:po-items-end po-flex-col" }, c1 = { class: "-po-mt-1 po-text-xs po-text-slate-500 po-flex -po-mb-2 po-flex-wrap" }, f1 = { class: "po-flex po-space-x-2 po-mt-3 lg:po-justify-end" }, v1 = {
  name: "PoFooter"
}, A2 = /* @__PURE__ */ L({
  ...v1,
  props: {
    changelog: { default: null }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, l) => (p(), d("div", null, [
      r("section", Qc, [
        r("div", Jc, [
          e1,
          r("div", t1, [
            o1,
            r("p", l1, " © " + V(new Date().getFullYear()) + " Pension Office, All Rights Reserved. ", 1),
            r("p", s1, [
              r("a", n1, [
                S(k(Hp), { class: "po-w-3 po-h-3 po-fill-current" }),
                a1
              ]),
              r("a", r1, [
                S(k(Fp), { class: "po-w-3 po-h-3 po-fill-current" }),
                i1
              ]),
              r("a", p1, [
                S(k(qp), { class: "po-w-3 po-h-3 po-fill-current" }),
                u1
              ])
            ])
          ])
        ]),
        r("div", d1, [
          r("nav", c1, [
            S(Dc, {
              "show-btn": o.changelog !== null,
              changelog: o.changelog
            }, null, 8, ["show-btn", "changelog"]),
            S(Kc),
            S(Xc)
          ]),
          r("div", f1, [
            S($l, {
              logo: Wc,
              title: "ISO/IEC 27001:2013 Certificate",
              src: ""
            }),
            S($l, {
              logo: Fc,
              title: "issa Certificate",
              src: ""
            })
          ])
        ])
      ])
    ]));
  }
}), h1 = { class: "po-text-sm po-text-red-700" }, m1 = {
  key: 0,
  class: "po-text-sm po-text-red-800 po-list-disc po-ml-5 po-mt-2"
}, b1 = {
  key: 1,
  class: "po-flex po-items-start po-space-x-3 po-p-5 po-bg-green-50 po-rounded-md po-mt-5"
}, g1 = { class: "po-text-sm po-text-green-700" }, y1 = {
  name: "PoFormStatusMessage"
}, D2 = /* @__PURE__ */ L({
  ...y1,
  props: {
    isError: { type: Boolean, default: !1 },
    message: { default: "This is a form status" },
    errorList: { default: null }
  },
  setup(e) {
    return (t, o) => t.isError ? (p(), d("div", {
      key: 0,
      class: O(["po-flex po-space-x-3 po-p-3 po-bg-red-50 po-rounded-md", [
        { "po-items-start": t.errorList !== null },
        { "po-items-center": t.errorList === null }
      ]])
    }, [
      S(k(no), { class: "po-shrink-0 po-w-6 po-stroke-red-600" }),
      r("div", null, [
        r("span", h1, V(t.message), 1),
        t.errorList !== null ? (p(), d("ul", m1, [
          (p(!0), d(R, null, U(t.errorList, (l) => (p(), d("li", null, V(l), 1))), 256))
        ])) : _("", !0)
      ])
    ], 2)) : (p(), d("div", b1, [
      S(k(nn), { class: "po-w-6 po-stroke-green-600" }),
      r("div", null, [
        r("span", g1, V(t.message), 1)
      ])
    ]));
  }
}), w1 = {
  key: 0,
  class: "po-text-lg po-text-red-400 po-font-semibold"
}, _1 = {
  key: 0,
  class: "po-mt-1 po-flex -po-mb-3 po-flex-wrap"
}, $1 = { class: "po-flex po-flex-1" }, V1 = { class: "po-flex po-flex-col" }, x1 = {
  key: 0,
  class: "po-mt-2 po-text-sm po-text-slate-500"
}, k1 = {
  key: 1,
  class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1"
}, C1 = {
  name: "PoRadioInput"
}, I2 = /* @__PURE__ */ L({
  ...C1,
  props: {
    modelValue: { default: null },
    options: { default: null },
    label: { default: "" },
    display: { default: "vertical" },
    required: { type: Boolean, default: !1 },
    errorMessage: { default: null },
    message: { default: null }
  },
  emits: ["selected", "unSelected", "update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, l = x();
    l.value = o.modelValue, Tt(() => {
      l.value = o.modelValue;
    }), X(l, () => {
      t("update:modelValue", l.value), t("selected", l.value);
    });
    const { errorMessage: s } = me(o), n = x();
    return X(s, (a, i) => {
      n.value = s.value !== null && s.value !== "";
    }), (a, i) => (p(), F(k(ga), {
      modelValue: l.value,
      "onUpdate:modelValue": i[0] || (i[0] = (u) => l.value = u),
      class: O([{ "lg:po-grid lg:po-grid-cols-2": a.display === "horizontal" }])
    }, {
      default: z(() => [
        S(k(al), { class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700" }, {
          default: z(() => [
            r("span", null, V(a.label), 1),
            a.required ? (p(), d("span", w1, "*")) : _("", !0)
          ]),
          _: 1
        }),
        a.options !== null ? (p(), d("div", _1, [
          (p(!0), d(R, null, U(a.options, (u) => (p(), F(k(wa), {
            as: "template",
            key: u.id,
            value: u.id
          }, {
            default: z(({ checked: f, active: c }) => [
              r("div", {
                class: O([
                  "po-transition-colors po-duration-100 po-ease-out po-mr-3",
                  "",
                  "",
                  "po-mb-3 po-pt-[0.13rem] po-relative po-flex po-cursor-pointer focus:po-outline-none"
                ])
              }, [
                r("span", {
                  class: O(["po-w-5 po-h-5 po-rounded-full po-border po-mr-2 po-flex po-items-center po-justify-center", [
                    "",
                    f ? "po-border-mpao-lightblue" : "po-border-slate-400"
                  ]])
                }, [
                  r("span", {
                    class: O(["po-w-3 po-h-3 po-rounded-full", [
                      "",
                      f ? "po-bg-mpao-lightblue" : "po-bg-transparent"
                    ]])
                  }, null, 2)
                ], 2),
                r("span", $1, [
                  r("span", V1, [
                    S(k(al), {
                      as: "span",
                      class: "po-block po-text-sm po-font-medium po-text-gray-900"
                    }, {
                      default: z(() => [
                        J(V(u.title), 1)
                      ]),
                      _: 2
                    }, 1024),
                    u.description ? (p(), F(k(_a), {
                      key: 0,
                      as: "span",
                      class: "po-mt-1 po-flex po-items-center po-text-sm po-text-gray-500"
                    }, {
                      default: z(() => [
                        J(V(u.description), 1)
                      ]),
                      _: 2
                    }, 1024)) : _("", !0)
                  ])
                ])
              ], 2)
            ]),
            _: 2
          }, 1032, ["value"]))), 128))
        ])) : _("", !0),
        r("div", null, [
          a.message !== null ? (p(), d("p", x1, V(a.message), 1)) : _("", !0),
          n.value && k(s) !== null ? (p(), d("p", k1, [
            S(k(ds), { class: "po-fill-current po-w-4 po-mt-[0.2rem] po-shrink-0" }),
            r("span", null, V(k(s)), 1)
          ])) : _("", !0)
        ])
      ]),
      _: 1
    }, 8, ["modelValue", "class"]));
  }
}), S1 = { class: "po-bg-white po-relative po-group po-rounded-xl focus-within:po-ring-2 focus-within:po-ring-inset focus-within:po-ring-indigo-500" }, P1 = { class: "po-block po-p-4 po-transition-colors po-duration-75 po-ease-linear" }, O1 = { class: "po-flex po-items-start po-space-x-2" }, L1 = { class: "po-flex po-items-start po-space-x-1" }, T1 = { class: "po-block po-text-2xl po-font-light po-text-slate-600" }, E1 = {
  key: 0,
  class: "po-text-sm po-text-green-500 po-font-medium po-pt-1"
}, B1 = { class: "po-text-sm po-tracking-wide po-text-slate-500" }, M1 = {
  name: "PoStatsBlock"
}, j2 = /* @__PURE__ */ L({
  ...M1,
  props: {
    items: { default: null },
    numberOfCols: { default: "po-grid-cols-1 lg:po-grid-cols-3" }
  },
  setup(e) {
    return (t, o) => (p(), d("div", {
      class: O(["po-grid po-gap-5", t.numberOfCols])
    }, [
      (p(!0), d(R, null, U(t.items, (l) => (p(), d("div", S1, [
        r("span", P1, [
          r("div", O1, [
            r("div", null, [
              r("span", {
                class: O([
                  "po-inline-flex po-p-2 po-rounded-md",
                  l.bgColor,
                  l.iconColor
                ])
              }, [
                (p(), F(ce(l.icon), { class: "po-w-4 po-h-4" }))
              ], 2)
            ]),
            r("div", null, [
              r("div", L1, [
                r("span", T1, V(l.value), 1),
                l.diff ? (p(), d("span", E1, V(l.diff), 1)) : _("", !0)
              ]),
              r("h4", B1, V(l.label), 1)
            ])
          ])
        ])
      ]))), 256))
    ], 2));
  }
}), z1 = {
  key: 0,
  class: "po-flex po-space-x-3 po-items-start"
}, A1 = { class: "po-flex po-items-center po-space-x-2" }, D1 = ["datetime"], I1 = { class: "po-text-sm po-font-medium po-text-slate-600" }, j1 = ["datetime"], R1 = { class: "flex" }, F1 = { class: "po-flex po-pt-3 po-flex-wrap po-max-w-sm" }, N1 = ["onClick"], H1 = {
  key: 1,
  class: "po-w-full po-text-center"
}, q1 = { class: "po-inline-block po-text-sm po-italic po-text-slate-500" }, W1 = /* @__PURE__ */ r("span", { class: "po-text-lg po-text-slate-300 po-px-3 po-inline-block" }, "—", -1), U1 = ["datetime"], G1 = {
  name: "PoChatLogItem"
}, R2 = /* @__PURE__ */ L({
  ...G1,
  props: {
    item: { default: null }
  },
  setup(e) {
    return (t, o) => (p(), d("li", {
      class: O([
        "po-flex po-px-5",
        { "po-justify-end po-items-end po-flex-col": t.item.type === "first" }
      ])
    }, [
      t.item.type !== "message" ? (p(), d("div", z1, [
        t.item.type !== "first" && t.item.avatar !== "" ? (p(), d("div", {
          key: 0,
          class: "po-shrink-0 po-w-8 po-h-8 po-rounded-full po-p-1 po-bg-contain po-bg-slate-100",
          style: wo({ "background-image": `url(${t.item.avatar})` })
        }, null, 4)) : _("", !0),
        r("div", {
          class: O([
            { "po-pt-1": t.item.type !== "first" },
            {
              "po-flex po-justify-end po-items-end po-flex-col": t.item.type === "first"
            }
          ])
        }, [
          r("span", A1, [
            t.item.type === "first" ? (p(), d("time", {
              key: 0,
              datetime: t.item.time,
              class: "po-text-xs po-text-slate-400"
            }, V(t.item.time_human), 9, D1)) : _("", !0),
            r("span", I1, V(t.item.name), 1),
            t.item.type === "second" ? (p(), d("time", {
              key: 1,
              datetime: t.item.time,
              class: "po-text-xs po-text-slate-400"
            }, V(t.item.time_human), 9, j1)) : _("", !0)
          ]),
          r("div", {
            class: O([
              "po-mt-2 po-space-y-1",
              {
                "po-flex po-justify-end po-items-end po-flex-col": t.item.type === "first"
              }
            ])
          }, [
            Y(t.$slots, "message", {}, () => [
              (p(!0), d(R, null, U(t.item.message, (l) => (p(), d("div", R1, [
                r("p", {
                  class: O([
                    "po-text-sm po-rounded-xl po-px-4 po-py-2",
                    {
                      "po-bg-slate-100 po-text-slate-600": t.item.type !== "first"
                    },
                    {
                      "po-bg-mpao-lightblue po-text-sky-50": t.item.type === "first"
                    }
                  ])
                }, V(l), 3)
              ]))), 256))
            ]),
            r("div", F1, [
              (p(!0), d(R, null, U(t.item.actions, (l) => (p(), d("button", {
                onClick: (s) => t.$emit("button-click", l.label),
                class: "po-appearance-none po-border po-border-mpao-lightblue po-bg-white hover:po-bg-mpao-lightblue po-px-3 po-py-1 po-mb-2 po-mr-2 po-rounded-lg po-text-slate-500 hover:po-text-sky-100 po-transition-colors po-duration-150 po-ease-in-out po-text-sm po-ring-0 po-outline-none"
              }, V(l.label), 9, N1))), 256))
            ])
          ], 2)
        ], 2)
      ])) : _("", !0),
      t.item.type === "message" ? (p(), d("div", H1, [
        (p(!0), d(R, null, U(t.item.message, (l) => (p(), d("p", q1, [
          J(V(l) + " ", 1),
          W1,
          r("time", {
            datetime: t.item.time,
            class: "po-text-xs po-text-slate-400 po-inline-block"
          }, V(t.item.time_human), 9, U1)
        ]))), 256))
      ])) : _("", !0)
    ], 2));
  }
}), Z1 = {
  key: 0,
  class: "po-pointer-events-auto po-w-full po-max-w-sm po-overflow-hidden po-rounded-lg po-bg-mpao-lightblue po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5"
}, K1 = { class: "po-p-4" }, Y1 = { class: "po-flex po-items-start" }, X1 = { class: "po-flex-shrink-0" }, Q1 = { class: "po-ml-3 po-w-0 po-flex-1 po-pt-0.5" }, J1 = { class: "po-text-sm po-font-medium po-text-sky-100" }, e0 = { class: "po-mt-1 po-text-sm po-text-sky-300" }, t0 = { class: "po-mt-3 po-flex po-space-x-4" }, o0 = { class: "po-ml-4 po-flex po-flex-shrink-0" }, l0 = /* @__PURE__ */ r("span", { class: "po-sr-only" }, "Close", -1), s0 = {
  name: "PoNotification"
}, F2 = /* @__PURE__ */ L({
  ...s0,
  props: {
    show: { type: Boolean, default: !1 },
    label: { default: "" },
    text: { default: "" },
    buttonLabel: { default: "Ok" }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    const o = e, { show: l } = me(o), s = x(!1);
    X(l, () => {
      s.value = !1, setTimeout(() => {
        s.value = !0;
      }, 100);
    });
    const n = x(!1);
    return X(s, () => {
      n.value = !1, setTimeout(() => {
        n.value = !0;
      }, 200);
    }), (a, i) => s.value ? (p(), F(vt, {
      key: 0,
      to: "#po-notifications-alert"
    }, [
      S(De, {
        "enter-active-class": "po-transform po-ease-out po-duration-300 po-transition",
        "enter-from-class": "po-translate-y-2 po-opacity-0 sm:po-translate-y-0 sm:po-translate-x-2",
        "enter-to-class": "po-translate-y-0 po-opacity-100 sm:po-translate-x-0",
        "leave-active-class": "po-transition po-ease-in po-duration-100",
        "leave-from-class": "po-opacity-100",
        "leave-to-class": "po-opacity-0"
      }, {
        default: z(() => [
          n.value ? (p(), d("div", Z1, [
            r("div", K1, [
              r("div", Y1, [
                r("div", X1, [
                  Y(a.$slots, "icon")
                ]),
                r("div", Q1, [
                  r("p", J1, V(a.label), 1),
                  r("p", e0, V(a.text), 1),
                  r("div", t0, [
                    r("button", {
                      onClick: i[0] || (i[0] = (u) => a.$emit("button-click", a.buttonLabel)),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-100 hover:po-text-sky-200 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, V(a.buttonLabel), 1),
                    r("button", {
                      onClick: i[1] || (i[1] = (u) => s.value = !1),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-300 hover:po-text-sky-500 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, " Dismiss ")
                  ])
                ]),
                r("div", o0, [
                  r("button", {
                    type: "button",
                    onClick: i[2] || (i[2] = (u) => s.value = !1),
                    class: "po-inline-flex po-rounded-md po-bg-mpao-lightblue po-text-sky-500 hover:po-text-sky-300 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                  }, [
                    l0,
                    S(k(cs), {
                      class: "po-h-5 po-w-5",
                      "aria-hidden": "true"
                    })
                  ])
                ])
              ])
            ])
          ])) : _("", !0)
        ]),
        _: 3
      })
    ])) : _("", !0);
  }
}), n0 = /* @__PURE__ */ r("div", { class: "po-fixed po-inset-0" }, null, -1), a0 = { class: "po-absolute po-inset-0 po-overflow-hidden" }, r0 = { class: "po-pointer-events-none po-fixed po-inset-y-0 po-right-0 po-flex po-max-w-full po-pl-10" }, i0 = { class: "po-flex po-h-full po-flex-col po-overflow-y-auto po-bg-white po-shadow-xl" }, p0 = { class: "po-bg-slate-50 po-py-6 po-px-4 sm:po-px-6" }, u0 = { class: "po-flex po-items-center po-justify-between" }, d0 = { class: "po-ml-3 po-flex po-h-7 po-items-center" }, c0 = /* @__PURE__ */ r("span", { class: "po-sr-only" }, "Close panel", -1), f0 = {
  key: 0,
  class: "po-mt-1"
}, v0 = { class: "po-text-sm po-text-slate-500" }, h0 = {
  key: 0,
  class: "po-bg-slate-50 po-rounded-b-xl po-shrink-0"
}, m0 = {
  name: "PoSlideover"
}, N2 = /* @__PURE__ */ L({
  ...m0,
  props: {
    label: { default: null },
    description: { default: null },
    show: { type: Boolean, default: !1 },
    maxWidth: { default: "po-max-w-lg" },
    bgColor: { default: "" },
    screenOpacity: { default: "po-bg-opacity-10" }
  },
  emits: ["slideover-closed"],
  setup(e, { emit: t }) {
    const o = e, { show: l } = me(o), s = x(!1);
    X(l, () => {
      s.value = l.value;
    });
    function n() {
      s.value = !1, t("slideover-closed", !0);
    }
    return (a, i) => (p(), F(k(bt), {
      as: "template",
      show: s.value
    }, {
      default: z(() => [
        S(k(It), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: n
        }, {
          default: z(() => [
            n0,
            r("div", {
              class: O(["po-fixed po-inset-0 po-overflow-hidden po-bg-black", a.screenOpacity])
            }, [
              r("div", a0, [
                r("div", r0, [
                  S(k(je), {
                    as: "template",
                    enter: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "enter-from": "po-translate-x-full",
                    "enter-to": "po-translate-x-0",
                    leave: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "leave-from": "po-translate-x-0",
                    "leave-to": "po-translate-x-full"
                  }, {
                    default: z(() => [
                      S(k(jt), {
                        class: O([a.maxWidth, "po-pointer-events-auto po-w-screen"])
                      }, {
                        default: z(() => [
                          r("div", i0, [
                            r("div", p0, [
                              r("div", u0, [
                                S(k(Yl), { class: "po-text-lg po-font-medium po-text-slate-600" }, {
                                  default: z(() => [
                                    J(V(a.label), 1)
                                  ]),
                                  _: 1
                                }),
                                r("div", d0, [
                                  r("button", {
                                    type: "button",
                                    class: "po-rounded-md po-text-slate-500 hover:po-text-mpao-lightblue focus:po-outline-none focus:po-ring-2 focus:po-ring-white",
                                    onClick: n
                                  }, [
                                    c0,
                                    S(k(Bt), {
                                      class: "po-h-6 po-w-6",
                                      "aria-hidden": "true"
                                    })
                                  ])
                                ])
                              ]),
                              a.description ? (p(), d("div", f0, [
                                r("p", v0, V(a.description), 1)
                              ])) : _("", !0)
                            ]),
                            r("div", {
                              class: O([a.bgColor, "po-relative po-grow po-pt-6 po-px-4 sm:po-px-6"])
                            }, [
                              Y(a.$slots, "content")
                            ], 2),
                            a.$slots.footer ? (p(), d("div", h0, [
                              Y(a.$slots, "footer")
                            ])) : _("", !0)
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
}), b0 = /* @__PURE__ */ r("div", { class: "po-fixed po-inset-0 po-bg-gray-500 po-bg-opacity-25 po-transition-opacity" }, null, -1), g0 = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto po-p-4 sm:po-p-6 md:po-p-20" }, y0 = { class: "po-relative" }, w0 = {
  key: 0,
  class: "po-max-h-96 scroll-py-3 po-overflow-y-auto po-p-3"
}, _0 = {
  name: "PoCommandPalette"
}, H2 = /* @__PURE__ */ L({
  ..._0,
  props: {
    show: { type: Boolean, default: !1 },
    showContent: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, o = x(""), { show: l } = me(t), s = x(!1);
    X(l, () => {
      s.value = !1, setTimeout(() => {
        s.value = !0;
      }, 100);
    });
    function n(a) {
      a.ctrlKey && a.key === "b" && (s.value = !0);
    }
    return G(() => {
      window.addEventListener("keyup", n);
    }), xl(() => {
      window.removeEventListener("keyup", n);
    }), (a, i) => (p(), F(k(bt), {
      show: s.value,
      as: "template",
      onAfterLeave: i[2] || (i[2] = (u) => o.value = ""),
      appear: ""
    }, {
      default: z(() => [
        S(k(It), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: i[1] || (i[1] = (u) => s.value = !1)
        }, {
          default: z(() => [
            S(k(je), {
              as: "template",
              enter: "po-ease-out po-duration-300",
              "enter-from": "po-opacity-0",
              "enter-to": "po-opacity-100",
              leave: "po-ease-in po-duration-200",
              "leave-from": "po-opacity-100",
              "leave-to": "po-opacity-0"
            }, {
              default: z(() => [
                b0
              ]),
              _: 1
            }),
            r("div", g0, [
              S(k(je), {
                as: "template",
                enter: "po-ease-out po-duration-300",
                "enter-from": "po-opacity-0 po-scale-95",
                "enter-to": "po-opacity-100 po-scale-100",
                leave: "po-ease-in po-duration-200",
                "leave-from": "po-opacity-100 po-scale-100",
                "leave-to": "po-opacity-0 po-scale-95"
              }, {
                default: z(() => [
                  S(k(jt), { class: "po-mx-auto po-max-w-xl po-transform po-divide-y po-divide-gray-100 po-overflow-hidden po-rounded-xl po-bg-white po-shadow-2xl po-ring-1 po-ring-black po-ring-opacity-5 po-transition-all" }, {
                    default: z(() => [
                      r("div", y0, [
                        S(k(zr), {
                          class: "po-pointer-events-none po-absolute po-top-3.5 po-left-4 po-h-5 po-w-5 po-text-gray-400",
                          "aria-hidden": "true"
                        }),
                        r("input", {
                          type: "text",
                          name: "",
                          class: "po-h-12 po-w-full po-border-0 po-bg-transparent po-pl-11 po-pr-4 po-text-gray-800 po-placeholder-gray-400 focus:po-ring-0 sm:po-text-sm",
                          placeholder: "Search...",
                          onChange: i[0] || (i[0] = (u) => o.value = u.target.value)
                        }, null, 32)
                      ]),
                      a.showContent ? (p(), d("div", w0, [
                        Y(a.$slots, "content")
                      ])) : _("", !0)
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
}), $0 = /* @__PURE__ */ r("div", { class: "po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity" }, null, -1), V0 = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto" }, x0 = { class: "po-flex po-min-h-full po-items-start po-justify-center po-p-4 po-text-center sm:po-p-0" }, k0 = { class: "po-p-5" }, C0 = { class: "po-text-center po-space-y-3" }, S0 = { key: 1 }, P0 = { class: "po-text-sm po-text-gray-600" }, O0 = { class: "po-border-t po-border-slate-200 po-flex po-divide-x po-divide-slate-200" }, L0 = {
  name: "PoAlert"
}, q2 = /* @__PURE__ */ L({
  ...L0,
  props: {
    cancelBtnLabel: { default: "Cancel" },
    okBtnLabel: { default: "Ok" },
    alertTitle: { default: "" },
    alertDescription: { default: "" },
    show: { type: Boolean, default: !1 }
  },
  emits: ["alert-closed", "button-click", "confirm", "cancel"],
  setup(e, { emit: t }) {
    const o = e, { show: l } = me(o), s = x(!1);
    X(l, () => {
      s.value = l.value;
    });
    function n() {
      s.value = !1, t("alert-closed", !0);
    }
    return (a, i) => (p(), F(k(bt), {
      as: "template",
      show: s.value
    }, {
      default: z(() => [
        S(k(It), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: n
        }, {
          default: z(() => [
            S(k(je), {
              as: "template",
              enter: "po-ease-out po-duration-300",
              "enter-from": "po-opacity-0",
              "enter-to": "po-opacity-100",
              leave: "po-ease-in po-duration-200",
              "leave-from": "po-opacity-100",
              "leave-to": "po-opacity-0"
            }, {
              default: z(() => [
                $0
              ]),
              _: 1
            }),
            r("div", V0, [
              r("div", x0, [
                S(k(je), {
                  as: "template",
                  enter: "po-ease-out po-duration-300",
                  "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                  "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                  leave: "po-ease-in po-duration-200",
                  "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                  "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                }, {
                  default: z(() => [
                    S(k(jt), { class: "po-relative po-transform po-overflow-hidden po-rounded-lg po-bg-white po-text-left po-shadow-xl po-transition-all sm:po-my-8 sm:po-w-full sm:po-max-w-sm" }, {
                      default: z(() => [
                        r("div", k0, [
                          r("div", C0, [
                            a.alertTitle !== "" ? (p(), F(k(Yl), {
                              key: 0,
                              as: "h3",
                              class: "po-text-lg po-font-medium po-leading-6 po-text-gray-900"
                            }, {
                              default: z(() => [
                                J(V(a.alertTitle), 1)
                              ]),
                              _: 1
                            })) : _("", !0),
                            a.alertDescription !== "" ? (p(), d("div", S0, [
                              r("p", P0, V(a.alertDescription), 1)
                            ])) : _("", !0)
                          ])
                        ]),
                        r("div", O0, [
                          r("button", {
                            onClick: i[0] || (i[0] = (u) => {
                              a.$emit("cancel", !0), n();
                            }),
                            class: "po-text-sm po-bg-white po-text-slate-500 hover:po-bg-slate-50 po-transition-colors po-duration-100 po-ease-out po-font-medium po-py-3 po-px-5 po-w-1/2 focus:po-ring-0"
                          }, V(a.cancelBtnLabel), 1),
                          r("button", {
                            onClick: i[1] || (i[1] = (u) => {
                              a.$emit("confirm", !0), a.$emit("button-click", "ok"), n();
                            }),
                            class: "po-text-sm po-bg-white po-text-mpao-lightblue hover:po-bg-slate-50 po-transition-colors po-duration-100 po-ease-out po-font-medium po-py-3 po-px-5 po-w-1/2 focus:po-ring-0"
                          }, V(a.okBtnLabel), 1)
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
}), T0 = {
  key: 0,
  class: "po-col-span-2 po-relative po-mt-5"
}, E0 = /* @__PURE__ */ r("span", {
  class: "po-absolute po-top-0 po-left-1 po--ml-px po-h-[calc(100%-7px)] po-w-0.5 po-bg-gray-200",
  "aria-hidden": "true"
}, null, -1), B0 = { class: "po-relative po-space-y-5" }, M0 = { class: "po-flex po-space-x-2 po-items-start" }, z0 = { class: "log-item" }, A0 = { key: 0 }, D0 = {
  key: 0,
  class: "po-text-slate-500 po-text-xs"
}, I0 = {
  key: 1,
  class: "po-text-center po-py-10"
}, j0 = { class: "po-text-sm po-text-slate-500" }, R0 = {
  name: "PoLogs"
}, W2 = /* @__PURE__ */ L({
  ...R0,
  props: {
    items: { default: null },
    emptyLabel: { default: "No logs to display." }
  },
  setup(e) {
    return (t, o) => (p(), d("div", null, [
      t.items && t.items.length > 0 ? (p(), d("div", T0, [
        E0,
        r("div", B0, [
          (p(!0), d(R, null, U(t.items, (l, s) => (p(), d("div", M0, [
            r("p", {
              class: O([
                "po-rounded-full po-w-2 po-h-2 border-1 po-border-white po-shrink-0",
                { "po-bg-orange-400": s !== t.items.length - 1 },
                ,
                { "po-bg-slate-300": s == t.items.length - 1 }
              ])
            }, null, 2),
            r("div", z0, [
              r("span", null, [
                J(V(l.label) + " on " + V(l.date) + " " + V(l.by && l.by !== "" ? "by" : "") + " ", 1),
                l.by && l.by !== "" ? (p(), d("span", A0, V(l.by), 1)) : _("", !0)
              ]),
              l.description && l.description !== "" ? (p(), d("blockquote", D0, ' "' + V(l.description) + '" ', 1)) : _("", !0)
            ])
          ]))), 256))
        ])
      ])) : (p(), d("div", I0, [
        r("span", j0, V(t.emptyLabel), 1)
      ]))
    ]));
  }
}), F0 = {
  key: 0,
  role: "list",
  class: "po-divide-y po-divide-gray-200 po-rounded-md po-border po-border-gray-200"
}, N0 = { class: "po-flex po-items-center po-justify-between po-py-3 po-pl-3 po-pr-4 po-text-sm" }, H0 = { class: "po-flex po-w-0 po-flex-1 po-items-center" }, q0 = { class: "po-ml-2 po-w-0 po-flex-1 po-truncate" }, W0 = { class: "po-ml-4 po-flex-shrink-0 po-space-x-4" }, U0 = ["onClick"], G0 = ["onClick"], Z0 = {
  key: 1,
  class: "po-py-10"
}, K0 = { class: "po-text-sm po-text-slate-500" }, Y0 = {
  name: "PoDownloadFileList"
}, U2 = /* @__PURE__ */ L({
  ...Y0,
  props: {
    files: { default: null },
    linkLabel: { default: "Download" },
    emptyLabel: { default: "No files to download." },
    showViewBtn: { type: Boolean, default: !1 },
    viewBtnLabel: { default: "View" }
  },
  emits: ["button-click", "view-click"],
  setup(e, { emit: t }) {
    return (o, l) => (p(), d("div", null, [
      o.files && o.files.length > 0 ? (p(), d("ul", F0, [
        (p(!0), d(R, null, U(o.files, (s) => (p(), d("li", N0, [
          r("div", H0, [
            S(k(Pl), {
              class: "po-h-5 po-w-5 po-flex-shrink-0 po-text-gray-400",
              "aria-hidden": "true"
            }),
            r("span", q0, V(s.label), 1)
          ]),
          r("div", W0, [
            r("a", {
              href: "#",
              onClick: oe((n) => o.$emit("button-click", s), ["prevent"]),
              class: "po-font-medium po-text-mpao-lightblue hover:po-text-indigo-500"
            }, V(o.linkLabel), 9, U0),
            o.showViewBtn ? (p(), d("a", {
              key: 0,
              href: "#",
              onClick: oe((n) => o.$emit("view-click", s), ["prevent"]),
              class: "po-font-medium po-text-mpao-lightblue hover:po-text-indigo-500"
            }, V(o.viewBtnLabel), 9, G0)) : _("", !0)
          ])
        ]))), 256))
      ])) : (p(), d("div", Z0, [
        r("span", K0, V(o.emptyLabel), 1)
      ]))
    ]));
  }
}), X0 = {
  name: "PoContentArea"
}, Q0 = { class: "shell-content--area po-max-w-[1370px]" };
function J0(e, t, o, l, s, n) {
  return p(), d("section", Q0, [
    Y(e.$slots, "default")
  ]);
}
const G2 = /* @__PURE__ */ Yt(X0, [["render", J0]]), ef = {
  name: "AnimatedLogo"
}, tf = /* @__PURE__ */ Ks('<div><svg class="po-stroke-mpao-blue po-w-16 animated-logo" viewBox="0 0 62 55" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.76292 17.8572L7.7 17.9704V18.0682C6.87397 19.526 6.23618 20.649 5.58241 21.4779C4.93472 22.299 4.30505 22.7864 3.51417 23.0053C3.46261 23.0112 3.41718 23.0206 3.39088 23.026C3.35663 23.0331 3.31491 23.0425 3.27694 23.0511C3.25988 23.055 3.24357 23.0587 3.22903 23.0619C3.1106 23.0882 3.03712 23.1 3 23.1H2.93844L2.89561 23.1107L15.9876 0.600006H19.1308C17.2397 1.92747 16.1556 3.83665 15.5371 5.73245C14.8359 7.88203 14.7198 10.0514 14.7027 11.4258C13.1737 11.6033 11.0729 12.4434 9.38038 15.128C8.77075 16.0431 8.26353 16.9561 7.76713 17.8496L7.76292 17.8572Z"></path><path d="M48.1818 11.3241C48.047 8.39742 47.5389 6.05982 46.5472 4.07639C45.8153 2.61266 44.8203 1.39271 43.5945 0.5H46.8113L59.8583 23.0959C59.8303 23.0912 59.7891 23.0819 59.7213 23.0649C59.7166 23.0638 59.7117 23.0625 59.7066 23.0612C59.6302 23.042 59.5099 23.0118 59.3765 23.0027C58.59 22.7825 57.9627 22.2958 57.3176 21.4779C56.6586 20.6423 56.0158 19.508 55.1801 18.0331L55.1413 17.9647C54.8861 17.4553 54.6068 16.973 54.3362 16.5054L54.3327 16.4995C54.0565 16.0225 53.7893 15.5605 53.5472 15.0764L53.5333 15.0485L53.516 15.0226C51.7283 12.3411 49.7115 11.4988 48.1818 11.3241Z"></path><path d="M9.28397 39.6773C11.0717 42.3589 13.0885 43.2011 14.6182 43.3759C14.753 46.3026 15.2611 48.6402 16.2528 50.6236C16.9991 52.1163 17.9653 53.2992 19.1863 54.2H15.7881L2.74125 31.699C2.76073 31.6996 2.78031 31.7 2.8 31.7C2.89335 31.7 2.97474 31.7149 3.07903 31.7381C3.08854 31.7402 3.09897 31.7426 3.11023 31.7452C3.18647 31.7626 3.30082 31.7888 3.42319 31.7972C4.20888 32.0178 4.86081 32.5271 5.52047 33.3603C6.20216 34.2214 6.85697 35.382 7.66164 36.8405C8.26116 37.9396 8.76739 38.8512 9.276 39.665L9.27989 39.6712L9.28397 39.6773Z"></path><path d="M55.124 36.865L55.1331 36.8504L55.1412 36.8353C55.9431 35.3316 56.5997 34.1683 57.2697 33.307C57.9146 32.4778 58.5471 31.9616 59.2949 31.6961C59.4179 31.6866 59.5418 31.6616 59.6287 31.6442C59.6354 31.6428 59.6418 31.6415 59.6481 31.6403C59.719 31.6261 59.772 31.616 59.8123 31.6095L46.8115 54.1H43.8753C45.7283 52.7465 46.7867 50.8277 47.3889 48.9394C48.064 46.8226 48.1795 44.7058 48.1971 43.3742C49.7262 43.1967 51.8271 42.3567 53.5196 39.6719C53.8327 39.2016 54.1164 38.6849 54.3777 38.1995C54.4112 38.1375 54.4442 38.076 54.4768 38.0152C54.7049 37.5906 54.9148 37.1996 55.124 36.865Z"></path><path d="M32.2763 51.5708L32.2653 51.5582L32.2536 51.5465C32.0661 51.359 31.7413 51.2 31.4 51.2C31.3949 51.2 31.3894 51.2 31.3835 51.2C31.2956 51.1998 31.1323 51.1993 30.9751 51.2442C30.7932 51.2962 30.6132 51.4082 30.4904 51.6086C29.1941 53.0706 27.544 53.8 25.5 53.8C22.8209 53.8 20.828 52.9218 19.4532 51.2005C18.1148 49.5247 17.3123 46.988 17.1201 43.5109C18.6883 43.1579 19.8601 42.2673 20.5004 41.6896C20.5136 44.8271 20.8579 46.8152 21.6737 48.0181C22.5558 49.319 23.9045 49.6 25.5 49.6C27.4335 49.6 28.5187 48.2893 29.0946 46.9901C29.6604 45.7138 29.7966 44.3347 29.7999 43.8193C29.8943 42.5846 30.6602 41.8 31.5 41.8H31.5778C32.4558 41.8842 33.2 42.7102 33.2 43.9C33.2 45.6119 33.5619 47.0065 34.2986 47.9982C35.0485 49.0077 36.1459 49.544 37.4792 49.5996L37.4896 49.6H37.5C39.2304 49.6 40.5973 49.3258 41.4454 48.0081C41.849 47.3811 42.1078 46.5565 42.2692 45.5056C42.4311 44.4518 42.5 43.1353 42.5 41.5V24.4455L45.9 21.8182V41.5C45.9 41.4958 45.8996 41.5001 45.8978 41.519C45.8959 41.5381 45.8927 41.5719 45.887 41.6267L45.8842 41.6541C45.8752 41.7406 45.8636 41.8524 45.8521 41.9797C45.8264 42.2614 45.8 42.6283 45.8 43V43.9V43.9029V43.9059V43.9088V43.9117V43.9146V43.9175V43.9205V43.9234V43.9263V43.9292V43.9321V43.935V43.9379V43.9408V43.9437V43.9466V43.9495V43.9524V43.9553V43.9581V43.961V43.9639V43.9668V43.9696V43.9725V43.9754V43.9783V43.9811V43.984V43.9868V43.9897V43.9926V43.9954V43.9983V44.0011V44.004V44.0068V44.0096V44.0125V44.0153V44.0181V44.021V44.0238V44.0266V44.0295V44.0323V44.0351V44.0379V44.0407V44.0435V44.0463V44.0492V44.052V44.0548V44.0576V44.0603V44.0631V44.0659V44.0687V44.0715V44.0743V44.0771V44.0798V44.0826V44.0854V44.0882V44.0909V44.0937V44.0965V44.0992V44.102V44.1047V44.1075V44.1102V44.113V44.1157V44.1185V44.1212V44.1239V44.1267V44.1294V44.1321V44.1349V44.1376V44.1403V44.143V44.1457V44.1484V44.1512V44.1539V44.1566V44.1593V44.162V44.1647V44.1674V44.17V44.1727V44.1754V44.1781V44.1808V44.1835V44.1861V44.1888V44.1915V44.1941V44.1968V44.1995V44.2021V44.2048V44.2074V44.2101V44.2127V44.2154V44.218V44.2207V44.2233V44.2259V44.2285V44.2312V44.2338V44.2364V44.239V44.2417V44.2443V44.2469V44.2495V44.2521V44.2547V44.2573V44.2599V44.2625V44.2651V44.2677V44.2702V44.2728V44.2754V44.278V44.2806V44.2831V44.2857V44.2882V44.2908V44.2934V44.2959V44.2985V44.301V44.3036V44.3061V44.3087V44.3112V44.3137V44.3163V44.3188V44.3213V44.3238V44.3264V44.3289V44.3314V44.3339V44.3364V44.3389V44.3414V44.3439V44.3464V44.3489V44.3514V44.3539V44.3564V44.3588V44.3613V44.3638V44.3663V44.3687V44.3712V44.3737V44.3761V44.3786V44.381V44.3835V44.3859V44.3884V44.3908V44.3932V44.3957V44.3981V44.4005V44.403V44.4054V44.4078V44.4102V44.4126V44.415V44.4174V44.4199V44.4223V44.4247V44.427V44.4294V44.4318V44.4342V44.4366V44.439V44.4413V44.4437V44.4461V44.4484V44.4508V44.4532V44.4555V44.4579V44.4602V44.4626V44.4649V44.4672V44.4696V44.4719V44.4742V44.4766V44.4789V44.4812V44.4835V44.4858V44.4882V44.4905V44.4928V44.4951V44.4974V44.4997V44.5019V44.5042V44.5065V44.5088V44.5111V44.5133V44.5156V44.5179V44.5201V44.5224V44.5247V44.5269V44.5292V44.5314V44.5337V44.5359V44.5381V44.5404V44.5426V44.5448V44.547V44.5493V44.5515V44.5537V44.5559V44.5581V44.5603V44.5625V44.5647V44.5669V44.5691V44.5713V44.5734V44.5756V44.5778V44.58V44.5821V44.5843V44.5865V44.5886V44.5908V44.5929V44.5951V44.5972V44.5994V44.6015V44.6036V44.6058V44.6079V44.61V44.6121V44.6142V44.6164V44.6185V44.6206V44.6227V44.6248V44.6269V44.6289V44.631V44.6331V44.6352V44.6373V44.6393V44.6414V44.6435V44.6455V44.6476V44.6497V44.6517V44.6538V44.6558V44.6578V44.6599V44.6619V44.6639V44.666V44.668V44.67V44.672V44.674V44.676V44.678V44.68V44.682V44.684V44.686V44.688V44.69V44.692V44.6939V44.6959V44.6979V44.6998V44.7018V44.7037V44.7057V44.7076V44.7096V44.7115V44.7135V44.7154V44.7173V44.7193V44.7212V44.7231V44.725V44.7269V44.7288V44.7307V44.7326V44.7345V44.7364V44.7383V44.7402V44.7421V44.7439V44.7458V44.7477V44.7495V44.7514V44.7533V44.7551V44.757V44.7588V44.7606V44.7625V44.7643V44.7661V44.768V44.7698V44.7716V44.7734V44.7752V44.777V44.7788V44.7806V44.7824V44.7842V44.786V44.7878V44.7896V44.7914V44.7931V44.7949V44.7967V44.7984V44.8002V44.8019V44.8037V44.8054V44.8071V44.8089V44.8106V44.8123V44.8141V44.8158V44.8175V44.8192V44.8209V44.8226V44.8243V44.826V44.8277V44.8294V44.8311V44.8328V44.8344V44.8361V44.8378V44.8394V44.8411V44.8427V44.8444V44.846V44.8477V44.8493V44.851V44.8526V44.8542V44.8558V44.8575V44.8591V44.8607V44.8623V44.8639V44.8655V44.8671V44.8687V44.8702V44.8718V44.8734V44.875V44.8765V44.8781V44.8797V44.8812V44.8828V44.8843V44.8859V44.8874V44.8889V44.8905V44.892V44.8935V44.895V44.8965V44.898V44.8996V44.9011V44.9025V44.904V44.9055V44.907V44.9085V44.91V44.9114V44.9129V44.9144V44.9158V44.9173V44.9187V44.9202V44.9216V44.923V44.9245V44.9259V44.9273V44.9288V44.9302V44.9316V44.933V44.9344V44.9358V44.9372V44.9386V44.9399V44.9413V44.9427V44.9441V44.9454V44.9468V44.9482V44.9495V44.9509V44.9522V44.9535V44.9549V44.9562V44.9575V44.9589V44.9602V44.9615V44.9628V44.9641V44.9654V44.9667V44.968V44.9693V44.9706V44.9718V44.9731V44.9744V44.9757V44.9769V44.9782V44.9794V44.9807V44.9819V44.9832V44.9844V44.9856V44.9868V44.9881V44.9893V44.9905V44.9917V44.9929V44.9941V44.9953V44.9965V44.9977V44.9988V45V45.1V45.1006V45.1012V45.1017V45.1023V45.1029V45.1035V45.104V45.1046V45.1052V45.1057V45.1063V45.1069V45.1074V45.108V45.1085V45.1091V45.1096V45.1102V45.1107V45.1113V45.1118V45.1123V45.1129V45.1134V45.1139V45.1145V45.115V45.1155V45.1161V45.1166V45.1171V45.1176V45.1181V45.1186V45.1191V45.1196V45.1202V45.1207V45.1212V45.1217V45.1222V45.1226V45.1231V45.1236V45.1241V45.1246V45.1251V45.1256V45.1261V45.1265V45.127V45.1275V45.128V45.1284V45.1289V45.1294V45.1298V45.1303V45.1307V45.1312V45.1317V45.1321V45.1326V45.133V45.1335V45.1339V45.1343V45.1348V45.1352V45.1357V45.1361V45.1365V45.137V45.1374V45.1378V45.1383V45.1387V45.1391V45.1395V45.1399V45.1404V45.1408V45.1412V45.1416V45.142V45.1424V45.1428V45.1432V45.1436V45.144V45.1444V45.1448V45.1452V45.1456V45.146V45.1464V45.1468V45.1471V45.1475V45.1479V45.1483V45.1487V45.149V45.1494V45.1498V45.1501V45.1505V45.1509V45.1512V45.1516V45.152V45.1523V45.1527V45.153V45.1534V45.1537V45.1541V45.1544V45.1548V45.1551V45.1555V45.1558V45.1561V45.1565V45.1568V45.1572V45.1575V45.1578V45.1581V45.1585V45.1588V45.1591V45.1594V45.1598V45.1601V45.1604V45.1607V45.161V45.1613V45.1616V45.162V45.1623V45.1626V45.1629V45.1632V45.1635V45.1638V45.1641V45.1644V45.1647V45.165V45.1652V45.1655V45.1658V45.1661V45.1664V45.1667V45.167V45.1672V45.1675V45.1678V45.1681V45.1683V45.1686V45.1689V45.1691V45.1694V45.1697V45.1699V45.1702V45.1705V45.1707V45.171V45.1712V45.1715V45.1717V45.172V45.1722V45.1725V45.1727V45.173V45.1732V45.1735V45.1737V45.174V45.1742V45.1744V45.1747V45.1749V45.1751V45.1753C45.5039 48.1507 44.6544 50.2924 43.3031 51.6899C41.9582 53.0807 40.0524 53.8 37.5 53.8C35.4235 53.8 33.5685 53.0476 32.2763 51.5708Z"></path><path d="M22.8 23.2538V18.2178L29.3909 23.307L26.1939 25.8645L22.8 23.2538Z"></path><path d="M16.7 20.2V19.7H16.5V18.8V10.858C16.5042 10.8478 16.5096 10.8348 16.5142 10.8232C16.5488 10.7368 16.5963 10.6012 16.5998 10.4209C16.8474 7.03069 17.6799 4.61275 19.0737 3.04468C20.4543 1.49155 22.4511 0.699997 25.2 0.699997C27.2568 0.699997 29.1263 1.53906 30.5352 3.04197L30.5407 3.04785L30.5464 3.05355C30.7614 3.26854 31.0508 3.35 31.3 3.35C31.5492 3.35 31.8386 3.26854 32.0536 3.05355L32.0646 3.04251L32.0749 3.03081C33.4779 1.4408 35.1402 0.699997 37.3 0.699997C40.0769 0.699997 42.1441 1.62655 43.5571 3.42174C44.934 5.17104 45.7393 7.80743 45.886 11.3874C44.0184 11.8028 42.6345 12.9721 42.1 13.4936V13.2C42.1 10.0544 41.7835 8.06299 40.9925 6.86242C40.1497 5.58316 38.8495 5.3 37.3 5.3C35.4114 5.3 34.3769 6.59229 33.8399 7.85422C33.3055 9.11015 33.2 10.457 33.2 10.9C33.2 12.2634 32.2859 13.1 31.3 13.1H31.2204C30.2388 13.0141 29.4 12.0845 29.4 10.8C29.4 9.19015 29.0639 7.84653 28.3661 6.89234C27.6525 5.91665 26.5974 5.4 25.3 5.4C23.6267 5.4 22.3017 5.64608 21.4896 6.93319C21.1052 7.5425 20.863 8.34586 20.7131 9.3714C20.5626 10.4004 20.5 11.6909 20.5 13.3V30.4541L16.7 33.3833V20.2Z"></path><path d="M40.1 31.5462V36.5799L33.4225 31.4049L36.6974 28.9288L40.1 31.5462Z"></path><mask id="path-9-inside-1" fill="white"><path d="M58.7 30.1C58.9 30 59.5 30 59.8 29.9C60.9 29.8 61.8 28.7 61.8 27.4C61.8 26.1 60.9 25 59.8 24.9C59.7 24.9 59.5 24.9 59.4 24.8C59.3 24.8 59.2 24.8 59.1 24.7C59.1 24.7 59.1 24.7 59 24.7C58.6 24.6 58.1 24.4 57.7 24.1C57.7 24.1 57.7 24.1 57.6 24C56.1 23.1 55 21.2 53.6 18.7C53.1 17.8 52.6 16.9 52 16C50.5 13.7 48.9 13.1 47.8 13C47.7 13 47.6 13 47.5 13H47.3C47.1 13 46.9 13 46.9 13C45.2 13.2 44 14.3 43.6 14.8L25.2 29.1C25.2 29.1 25.2 29.1 25.1 29.2L23 30.8L16.8 35.5L16.4 35.9C16.4 35.9 16.4 35.9 16.3 35.9C16 36.1 15.7 36.3 15.4 36.3C15.1 36.3 14.9 36.2 14.7 36.1C14.5 35.9 14.4 35.8 14.3 35.5C13.9 34.8 13.4 34.1 13 33.3V33.1C12.2 31.7 11.3 30 10.1 28.6C10.1 28.6 10.1 28.6 10.1 28.5L10 28.4C9.9 28.3 9.9 28.3 9.8 28.2C9.8 28.2 9.8 28.2 9.7 28.1L9.2 27.5C9.2 27.5 9.2 27.5 9.1 27.5C9 27.3 9 27.1 9.1 27L9.6 26.5C10.9 25 11.9 23.2 12.8 21.6V21.5C13.2 20.7 13.7 19.9 14.2 19.1C14.4 18.8 14.6 18.6 14.7 18.5V13.1C13.6 13.2 12 13.9 10.6 16C10 16.9 9.5 17.8 9 18.7C7.8 20.9 6.8 22.5 5.6 23.5C4.8 24.1 4 24.4 3.5 24.6C3.5 24.6 3.5 24.6 3.4 24.6C3.3 24.6 3.1 24.7 3 24.7C2.9 24.7 2.9 24.7 2.8 24.7C2.7 24.7 2.7 24.7 2.7 24.7H2.6H2.5C2.3 24.7 2.2 24.8 2.1 24.8C2 24.8 2 24.8 2 24.9C1.7 25.1 1.4 25.3 1.2 25.6C1.2 25.7 1.1 25.7 1.1 25.8V25.9L0.999997 26.1C0.999997 26.2 0.999997 26.2 0.899997 26.3C0.899997 26.4 0.899997 26.4 0.799997 26.5C0.799997 26.6 0.799997 26.7 0.699997 26.7C0.699997 26.8 0.699997 26.9 0.699997 26.9C0.699997 27 0.699997 27.1 0.699997 27.1C0.699997 27.2 0.699997 27.2 0.699997 27.3C0.699997 27.4 0.699997 27.5 0.699997 27.5C0.699997 27.6 0.699997 27.7 0.699997 27.7C0.699997 27.8 0.699997 27.9 0.799997 27.9V28V28.1C0.799997 28.2 0.799997 28.2 0.899997 28.2L0.999997 28.4C0.999997 28.5 1.1 28.5 1.1 28.5C1.1 28.5 1.1 28.5 1.1 28.6C1.2 28.7 1.3 28.9 1.5 29C1.6 29 1.6 29.1 1.7 29.1C1.7 29.1 1.8 29.1 1.8 29.2C1.8 29.2 1.8 29.2 1.9 29.2C2 29.3 2.2 29.3 2.3 29.4C2.4 29.4 2.4 29.4 2.4 29.4L2.9 29.5C3.1 29.5 3.2 29.6 3.4 29.6C4.2 29.8 4.7 30.2 4.8 30.2C6.4 31.2 7.5 33 8.9 35.5C9.5 36.6 10 37.4 10.5 38.2C11.9 40.3 13.4 41 14.4 41.1C14.5 41.1 14.5 41.1 14.6 41.1C14.7 41.1 14.8 41.1 14.8 41.1C15 41.1 15.2 41.1 15.5 41.1H15.6C17.2 40.8 18.5 39.8 18.9 39.3L19 39.2L19.8 38.6C19.8 38.6 19.9 38.5 20 38.5L30.2 30.6L41.3 22L46.5 18H46.6C46.7 18 46.9 17.9 47 17.9C47.4 17.9 47.8 18.1 48.1 18.6L48.5 19.2C48.8 19.7 49.2 20.3 49.5 20.9V21C50.1 22.1 50.8 23.4 51.7 24.6C51.7 24.6 51.7 24.7 51.8 24.7C52.1 25.1 52.4 25.5 52.7 25.8C52.7 25.8 52.8 25.8 52.8 25.9C53 26.1 53.1 26.3 53.3 26.4C53.4 26.5 53.4 26.7 53.3 26.9C52 28.5 50.4 31.1 49.6 32.4V32.5C49.2 33.2 48.7 34.1 48.2 34.9C48 35.2 47.8 35.4 47.7 35.5V40.9C48.8 40.8 50.4 40.1 51.8 37.9C52.4 37 52.9 36 53.4 35.2C53.5 35 53.7 34.7 53.8 34.5C55.2 33 56.4 30.9 58.7 30.1Z"></path></mask><path d="M58.7 30.1C58.9 30 59.5 30 59.8 29.9C60.9 29.8 61.8 28.7 61.8 27.4C61.8 26.1 60.9 25 59.8 24.9C59.7 24.9 59.5 24.9 59.4 24.8C59.3 24.8 59.2 24.8 59.1 24.7C59.1 24.7 59.1 24.7 59 24.7C58.6 24.6 58.1 24.4 57.7 24.1C57.7 24.1 57.7 24.1 57.6 24C56.1 23.1 55 21.2 53.6 18.7C53.1 17.8 52.6 16.9 52 16C50.5 13.7 48.9 13.1 47.8 13C47.7 13 47.6 13 47.5 13H47.3C47.1 13 46.9 13 46.9 13C45.2 13.2 44 14.3 43.6 14.8L25.2 29.1C25.2 29.1 25.2 29.1 25.1 29.2L23 30.8L16.8 35.5L16.4 35.9C16.4 35.9 16.4 35.9 16.3 35.9C16 36.1 15.7 36.3 15.4 36.3C15.1 36.3 14.9 36.2 14.7 36.1C14.5 35.9 14.4 35.8 14.3 35.5C13.9 34.8 13.4 34.1 13 33.3V33.1C12.2 31.7 11.3 30 10.1 28.6C10.1 28.6 10.1 28.6 10.1 28.5L10 28.4C9.9 28.3 9.9 28.3 9.8 28.2C9.8 28.2 9.8 28.2 9.7 28.1L9.2 27.5C9.2 27.5 9.2 27.5 9.1 27.5C9 27.3 9 27.1 9.1 27L9.6 26.5C10.9 25 11.9 23.2 12.8 21.6V21.5C13.2 20.7 13.7 19.9 14.2 19.1C14.4 18.8 14.6 18.6 14.7 18.5V13.1C13.6 13.2 12 13.9 10.6 16C10 16.9 9.5 17.8 9 18.7C7.8 20.9 6.8 22.5 5.6 23.5C4.8 24.1 4 24.4 3.5 24.6C3.5 24.6 3.5 24.6 3.4 24.6C3.3 24.6 3.1 24.7 3 24.7C2.9 24.7 2.9 24.7 2.8 24.7C2.7 24.7 2.7 24.7 2.7 24.7H2.6H2.5C2.3 24.7 2.2 24.8 2.1 24.8C2 24.8 2 24.8 2 24.9C1.7 25.1 1.4 25.3 1.2 25.6C1.2 25.7 1.1 25.7 1.1 25.8V25.9L0.999997 26.1C0.999997 26.2 0.999997 26.2 0.899997 26.3C0.899997 26.4 0.899997 26.4 0.799997 26.5C0.799997 26.6 0.799997 26.7 0.699997 26.7C0.699997 26.8 0.699997 26.9 0.699997 26.9C0.699997 27 0.699997 27.1 0.699997 27.1C0.699997 27.2 0.699997 27.2 0.699997 27.3C0.699997 27.4 0.699997 27.5 0.699997 27.5C0.699997 27.6 0.699997 27.7 0.699997 27.7C0.699997 27.8 0.699997 27.9 0.799997 27.9V28V28.1C0.799997 28.2 0.799997 28.2 0.899997 28.2L0.999997 28.4C0.999997 28.5 1.1 28.5 1.1 28.5C1.1 28.5 1.1 28.5 1.1 28.6C1.2 28.7 1.3 28.9 1.5 29C1.6 29 1.6 29.1 1.7 29.1C1.7 29.1 1.8 29.1 1.8 29.2C1.8 29.2 1.8 29.2 1.9 29.2C2 29.3 2.2 29.3 2.3 29.4C2.4 29.4 2.4 29.4 2.4 29.4L2.9 29.5C3.1 29.5 3.2 29.6 3.4 29.6C4.2 29.8 4.7 30.2 4.8 30.2C6.4 31.2 7.5 33 8.9 35.5C9.5 36.6 10 37.4 10.5 38.2C11.9 40.3 13.4 41 14.4 41.1C14.5 41.1 14.5 41.1 14.6 41.1C14.7 41.1 14.8 41.1 14.8 41.1C15 41.1 15.2 41.1 15.5 41.1H15.6C17.2 40.8 18.5 39.8 18.9 39.3L19 39.2L19.8 38.6C19.8 38.6 19.9 38.5 20 38.5L30.2 30.6L41.3 22L46.5 18H46.6C46.7 18 46.9 17.9 47 17.9C47.4 17.9 47.8 18.1 48.1 18.6L48.5 19.2C48.8 19.7 49.2 20.3 49.5 20.9V21C50.1 22.1 50.8 23.4 51.7 24.6C51.7 24.6 51.7 24.7 51.8 24.7C52.1 25.1 52.4 25.5 52.7 25.8C52.7 25.8 52.8 25.8 52.8 25.9C53 26.1 53.1 26.3 53.3 26.4C53.4 26.5 53.4 26.7 53.3 26.9C52 28.5 50.4 31.1 49.6 32.4V32.5C49.2 33.2 48.7 34.1 48.2 34.9C48 35.2 47.8 35.4 47.7 35.5V40.9C48.8 40.8 50.4 40.1 51.8 37.9C52.4 37 52.9 36 53.4 35.2C53.5 35 53.7 34.7 53.8 34.5C55.2 33 56.4 30.9 58.7 30.1Z"></path></svg></div>', 1), of = [
  tf
];
function lf(e, t, o, l, s, n) {
  return p(), d("div", null, of);
}
const sf = /* @__PURE__ */ Yt(ef, [["render", lf]]), nf = {
  key: 0,
  class: "po-fixed po-z-[999] po-top-0 po-bottom-0 po-left-0 po-right-0 po-flex po-items-center po-justify-center"
}, af = /* @__PURE__ */ r("div", { class: "po-absolute po-w-[6.2rem] po-h-[6.2rem] po-bg-transparent po-overflow-hidden po-rounded-xl" }, [
  /* @__PURE__ */ r("div", { class: "po-loading-rotate po-absolute -po-top-8 -po-left-8 po-w-[10rem] po-h-[10rem]" })
], -1), rf = { class: "relative po-bg-white po-w-24 po-h-24 po-flex po-items-center po-justify-center po-rounded-xl po-bg-opacity-50 po-backdrop-blur po-backdrop-filter po-z-10 po-shadow-xl" }, pf = {
  key: 0,
  class: "po-absolute po-left-1 po-right-1 po-text-center po-py-1 po-text-xs po-text-mpao-blue po-bg-white po-bg-opacity-50 po-backdrop-blur po-backdrop-filter"
}, uf = {
  name: "PoLoading"
}, Z2 = /* @__PURE__ */ L({
  ...uf,
  props: {
    show: { type: Boolean, default: !1 },
    label: { default: "" }
  },
  setup(e) {
    return (t, o) => t.show ? (p(), d("div", nf, [
      af,
      r("div", rf, [
        t.label !== "" ? (p(), d("span", pf, V(t.label), 1)) : _("", !0),
        S(sf)
      ])
    ])) : _("", !0);
  }
}), df = { class: "po-py-5 po-flex po-items-start po-space-x-5" }, cf = ["name", "id", "checked", "aria-describedby"], ff = { class: "po-grow -po-mt-[0.26rem]" }, vf = ["for"], hf = { class: "po-mt-2 po-flex po-space-x-3" }, mf = ["href", "onClick"], bf = {
  name: "PoConsent"
}, K2 = /* @__PURE__ */ L({
  ...bf,
  props: {
    modelValue: { type: Boolean, default: !1 },
    label: { default: "" },
    id: { default: "consent-checkbox" },
    links: { default: null }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = (l) => {
      let s = l.target.checked;
      t("update:modelValue", s);
    };
    return (l, s) => (p(), d("div", df, [
      r("input", xe({
        type: "checkbox",
        name: `${l.id}-field`,
        id: l.id,
        checked: l.modelValue,
        "aria-describedby": `${l.id}-description`
      }, l.$attrs, {
        onInput: o,
        class: "po-shrink-0 po-h-4 po-w-4 po-rounded border-slate-300 po-text-mpao-lightblue focus:po-ring-mpao-lightblue"
      }), null, 16, cf),
      r("div", ff, [
        r("label", {
          class: "po-block po-select-none po-text-sm po-text-slate-600 po-cursor-pointer",
          for: l.id
        }, V(l.label), 9, vf),
        r("div", hf, [
          (p(!0), d(R, null, U(l.links, (n) => (p(), d("a", {
            href: n.url,
            onClick: oe((a) => l.$emit("button-click", n.url), ["prevent"]),
            class: "po-text-sm po-text-mpao-lightblue hover:po-text-mpao-blue"
          }, V(n.label), 9, mf))), 256))
        ])
      ])
    ]));
  }
}), gf = {
  class: "po-flex po-bg-slate-50 po-rounded-t-xl po-justify-center lg:po-justify-start po-px-4 po-pt-4 xl:po-pt-2 po-flex-wrap po-overflow-hidden",
  "aria-label": "Tabs"
}, yf = ["onClick", "aria-current"], wf = { key: 0 }, _f = {
  name: "PoCardTabs"
}, Y2 = /* @__PURE__ */ L({
  ..._f,
  props: {
    tabs: { default: null }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    function o(l) {
      return l.iconColor ? l.iconColor : "po-fill-current";
    }
    return (l, s) => (p(), d("nav", gf, [
      (p(!0), d(R, null, U(l.tabs, (n) => (p(), d("span", {
        role: "button",
        onClick: (a) => l.$emit("button-click", n),
        key: n.name,
        class: O([
          n.current ? "po-bg-white po-text-slate-600 po-shadow-lg" : "po-text-slate-600 hover:po-text-mpao-blue",
          "po-px-4 po-py-3 po-font-medium po-mr-4 po-mb-4 xl:po-mb-0 po-text-sm po-cursor-pointer po-rounded-xl xl:po-rounded-b-none genie-effect hover:po-text-slate-600 hover:po-bg-white hover:po-shadow-md po-flex po-items-center po-flex-shrink-0 po-space-x-2"
        ]),
        "aria-current": n.current ? "page" : void 0
      }, [
        n.icon ? (p(), F(ce(n.icon), {
          key: 0,
          class: O(["po-w-5 po-h-5", [o(n)]])
        }, null, 8, ["class"])) : _("", !0),
        r("span", null, [
          J(V(n.name), 1),
          n.count ? (p(), d("span", wf, " (" + V(n.count) + ")", 1)) : _("", !0)
        ])
      ], 10, yf))), 128))
    ]));
  }
}), $f = { class: "sm:po-hidden" }, Vf = /* @__PURE__ */ r("label", {
  for: "tabs",
  class: "po-sr-only"
}, "Select a tab", -1), xf = ["value", "selected"], kf = { class: "po-hidden sm:po-block" }, Cf = {
  class: "po-flex po-space-x-4 po-pt-2",
  "aria-label": "Tabs"
}, Sf = ["onClick", "aria-current"], Pf = {
  name: "PoTabs"
}, X2 = /* @__PURE__ */ L({
  ...Pf,
  props: {
    tabs: { default: null },
    currentTab: { default: "" }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    const o = e;
    function l(a) {
      return a.iconColor ? a.iconColor : "po-fill-current";
    }
    const s = M(() => {
      var a;
      return (a = o.tabs) == null ? void 0 : a.map((i) => i.name === o.currentTab ? { ...i, current: !0 } : { ...i, current: !1 });
    }), n = (a) => {
      const i = Number(a.target.value);
      if (o.tabs) {
        const u = o.tabs[i];
        t("button-click", u);
      }
    };
    return (a, i) => (p(), d(R, null, [
      r("div", $f, [
        Vf,
        r("select", {
          id: "tabs",
          name: "tabs",
          class: "po-block po-w-full po-rounded-md po-border-gray-300 focus:po-border-indigo-500 focus:po-ring-indigo-500",
          onChange: n
        }, [
          (p(!0), d(R, null, U(a.tabs, (u, f) => (p(), d("option", {
            key: u.name,
            value: f,
            selected: u.current
          }, V(u.name), 9, xf))), 128))
        ], 32)
      ]),
      r("div", kf, [
        r("nav", Cf, [
          (p(!0), d(R, null, U(s.value, (u) => (p(), d("span", {
            onClick: (f) => a.$emit("button-click", u),
            role: "button",
            key: u.name,
            class: O([
              u.current ? " po-text-slate-600 po-shadow-md po-border po-border-sky-200" : " po-text-slate-600 po-shadow-sm hover:po-text-mpao-blue",
              "po-bg-white po-px-4 po-relative po-group po-py-3 po-font-medium po-text-sm po-cursor-pointer po-rounded-xl genie-effect hover:po-text-slate-600 hover:po-bg-white hover:po-shadow-md po-flex po-items-center po-space-x-2"
            ]),
            "aria-current": u.current ? "page" : void 0
          }, [
            u.icon ? (p(), F(ce(u.icon), {
              key: 0,
              class: O(["po-w-5 po-h-5", [l(u)]])
            }, null, 8, ["class"])) : _("", !0),
            r("span", null, [
              r("span", null, V(u.name), 1),
              u.count && u.count > 0 ? (p(), d("span", {
                key: 0,
                class: O(["po-absolute po-py-1 po-px-2 po-rounded-full po-text-xs -po-top-3 -po-right-2 po-shadow-md po-flex po-items-center po-justify-center", [
                  u.current ? "po-bg-mpao-orange po-text-white" : "po-bg-slate-400 po-text-white group-hover:po-bg-mpao-orange group-hover:po-text-white"
                ]])
              }, [
                r("span", null, V(u.count), 1)
              ], 2)) : _("", !0)
            ])
          ], 10, Sf))), 128))
        ])
      ])
    ], 64));
  }
}), Of = { class: "po-mt-5 po-flex po-flex-col po-items-center po-justify-center po-px-5 po-py-8" }, Lf = {
  key: 1,
  class: "po-text-base po-font-medium po-text-slate-600 po-text-center"
}, Tf = {
  key: 2,
  class: "po-text-sm po-text-slate-500 po-text-center po-max-w-lg po-block po-mx-auto"
}, Ef = {
  name: "PoEmpty"
}, Q2 = /* @__PURE__ */ L({
  ...Ef,
  props: {
    label: { default: "" },
    description: { default: "" },
    icon: { default: null },
    iconColor: { default: "po-stroke-slate-300" }
  },
  setup(e) {
    return (t, o) => (p(), d("div", Of, [
      r("div", {
        class: O(["po-space-y-2 po-flex po-items-center po-flex-col po-justify-center", [{ "po-mb-5": t.$slots.action }]])
      }, [
        t.icon ? (p(), F(ce(t.icon), {
          key: 0,
          class: O(["po-w-10 po-h-10", t.iconColor])
        }, null, 8, ["class"])) : _("", !0),
        t.label !== "" ? (p(), d("span", Lf, V(t.label), 1)) : _("", !0),
        t.description !== "" ? (p(), d("span", Tf, V(t.description), 1)) : _("", !0)
      ], 2),
      Y(t.$slots, "action")
    ]));
  }
}), Bf = { class: "po-flex po-text-sm po-text-gray-700 po-flex-col po-space-y-5" }, Mf = {
  key: 0,
  class: "po-text-base po-font-medium po-text-slate-700"
}, zf = {
  key: 1,
  class: "po-border po-border-orange-300 po-bg-orange-50 po-rounded-lg po-p-5 po-flex po-items-center po-space-x-3"
}, Af = { class: "po-grow po-text-sm po-text-slate-600" }, Df = {
  key: 2,
  class: "po-border po-border-red-300 po-bg-red-50 po-rounded-lg po-p-5 po-flex po-space-x-4"
}, If = { class: "po-grow" }, jf = { class: "po-text-base po-text-slate-700 po-font-medium" }, Rf = { class: "po-text-sm po-text-slate-600" }, Ff = { class: "po-font-medium" }, Nf = { key: 0 }, Hf = { key: 0 }, qf = /* @__PURE__ */ r("dt", null, "Name", -1), Wf = { key: 1 }, Uf = /* @__PURE__ */ r("dt", null, "Identifer", -1), Gf = { key: 2 }, Zf = /* @__PURE__ */ r("dt", null, "Date of birth", -1), Kf = { key: 3 }, Yf = /* @__PURE__ */ r("dt", null, "Reported Date of death", -1), Xf = {
  key: 3,
  class: "po-pt-5"
}, Qf = { class: "po-flex po-items-center po-space-x-1" }, Jf = /* @__PURE__ */ r("span", null, "File a dispute.", -1), e4 = {
  name: "PoDRStatus"
}, J2 = /* @__PURE__ */ L({
  ...e4,
  props: {
    member: { default: null },
    record: { default: null },
    request: { default: null }
  },
  emits: ["dispute-click"],
  setup(e, { emit: t }) {
    function o() {
      t("dispute-click", "clicked");
    }
    return (l, s) => (p(), d("span", Bf, [
      l.record !== null ? (p(), d("h2", Mf, " Death was reported by " + V(l.record.institution), 1)) : _("", !0),
      l.request !== null && l.request.type_id === 1 ? (p(), d("div", zf, [
        S(k(no), { class: "po-shrink-0 po-w-6 po-stroke-orange-600" }),
        r("span", Af, " This is a " + V(l.request.type) + " request and is in " + V(l.request.state) + " state. ", 1)
      ])) : _("", !0),
      l.request !== null && l.request.type_id !== 1 ? (p(), d("div", Df, [
        S(k(no), { class: "po-shrink-0 po-w-6 po-h-6 po-stroke-red-600 po-stroke-2" }),
        r("div", If, [
          r("h3", jf, V(l.request.type), 1),
          r("p", Rf, [
            J(" The following " + V(l.request.type) + " was reported: ", 1),
            r("span", Ff, [
              J(V(l.request.dispute_type), 1),
              l.request.date_of_death ? (p(), d("span", Nf, " (New date: " + V(l.request.date_of_death) + ")", 1)) : _("", !0)
            ])
          ])
        ])
      ])) : _("", !0),
      S(Cd, null, {
        content: z(() => [
          l.member !== null ? (p(), d("div", Hf, [
            qf,
            r("dd", null, V(l.member.name), 1)
          ])) : _("", !0),
          l.member !== null ? (p(), d("div", Wf, [
            Uf,
            r("dd", null, V(l.member.identifier), 1)
          ])) : _("", !0),
          l.member !== null ? (p(), d("div", Gf, [
            Zf,
            r("dd", null, V(l.member.dob), 1)
          ])) : _("", !0),
          l.record !== null ? (p(), d("div", Kf, [
            Yf,
            r("dd", null, V(l.record.date_of_death), 1)
          ])) : _("", !0)
        ]),
        _: 1
      }),
      l.request === null ? (p(), d("span", Xf, [
        S(Bo, {
          type: "simple",
          onButtonClick: o
        }, {
          label: z(() => [
            r("span", Qf, [
              S(k(on), { class: "po-w-4 po-h-4 po-stroke-current" }),
              Jf
            ])
          ]),
          _: 1
        })
      ])) : _("", !0)
    ]));
  }
}), t4 = {
  role: "button",
  class: "po-w-6 po-h-6 po-rounded-lg po-bg-white genie-effect po-flex po-items-center po-justify-center hover:po-bg-slate-50 po-cursor-pointer"
}, o4 = {
  name: "PoTableAction"
}, e5 = /* @__PURE__ */ L({
  ...o4,
  props: {
    btnIcon: { default: null },
    btnType: { default: "text" },
    label: { default: "" },
    textColor: { default: "po-slate-500" },
    iconColor: { default: "po-stroke-slate-500" }
  },
  setup(e) {
    const t = e, o = x(), l = x(), s = x(t.label);
    return t.btnType === "view" ? (o.value = rn, s.value = t.label === "" ? "View" : t.label) : t.btnType === "edit" ? (o.value = dn, s.value = t.label === "" ? "Edit" : t.label) : t.btnType === "delete" ? (o.value = fn, s.value = t.label === "" ? "Delete" : t.label) : t.btnType === "icon" && t.btnIcon && (o.value = t.btnIcon), t.btnType === "view" ? l.value = "po-stroke-emerald-400" : t.btnType === "edit" ? l.value = "po-stroke-blue-400" : t.btnType === "delete" ? l.value = "po-stroke-red-400" : l.value = t.iconColor, (n, a) => (p(), d("span", null, [
      n.btnType === "icon" || n.btnType === "delete" || n.btnType === "edit" || n.btnType === "view" ? (p(), F(k(go), {
        key: 0,
        text: s.value,
        placement: "bottom",
        strategy: "fixed"
      }, {
        default: z(() => [
          r("span", t4, [
            (p(), F(ce(o.value), {
              class: O(["po-w-4 po-stroke-2", l.value])
            }, null, 8, ["class"]))
          ])
        ]),
        _: 1
      }, 8, ["text"])) : (p(), d("span", {
        key: 1,
        role: "button",
        class: O(["po-block po-text-sm genie-effect", n.textColor])
      }, V(n.label), 3))
    ]));
  }
}), l4 = { key: 0 }, s4 = {
  name: "Rufiyaa"
}, t5 = /* @__PURE__ */ L({
  ...s4,
  props: {
    symbolWidth: { default: "po-w-3" },
    symbolFillColor: { default: "po-fill-current" },
    amount: { default: null }
  },
  setup(e) {
    function t(o) {
      const l = typeof o == "string" ? parseFloat(o.replace(/,/g, "")) : o;
      return isNaN(l) ? "" : l.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    }
    return (o, l) => (p(), d("span", null, [
      o.amount !== null ? (p(), d("span", l4, V(t(o.amount)), 1)) : _("", !0)
    ]));
  }
}), n4 = {
  name: "PoHeading"
}, o5 = /* @__PURE__ */ L({
  ...n4,
  props: {
    text: { default: "" },
    type: { default: "h3" }
  },
  setup(e) {
    return (t, o) => (p(), F(ce(t.type), { class: "po-text-base po-text-slate-600 po-font-semibold" }, {
      default: z(() => [
        J(V(t.text), 1)
      ]),
      _: 1
    }));
  }
}), a4 = ["for"], r4 = { class: "po-capitalize" }, i4 = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, p4 = ["title"], u4 = { class: "po-relative po-mt-1" }, d4 = { class: "po-shrink-0 po-pr-1 po-inline-flex po-flex-wrap po-w-full po-gap-1 po-max-h-44" }, c4 = { class: "po-px-2 po-py-1 po-rounded-md po-text-sm po-text-slate-600 po-flex po-space-x-2 po-items-center po-bg-gradient-to-l po-from-slate-50 po-via-cyan-50 po-to-cyan-100/60 po-border po-border-cyan-200" }, f4 = ["onClick"], v4 = ["id"], h4 = {
  key: 0,
  class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
}, m4 = ["onClick", "value"], b4 = {
  class: /* @__PURE__ */ O(["po-block po-truncate"])
}, g4 = ["id"], y4 = ["id"], w4 = {
  name: "PoMultiSelect"
}, l5 = /* @__PURE__ */ L({
  ...w4,
  props: {
    modelValue: { default: null },
    label: { default: "" },
    display: { default: "vertical" },
    id: { default: "" },
    info: { default: null },
    message: { default: null },
    errorMessage: { default: null },
    hasError: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    placeholder: { default: null },
    borderColor: { default: "po-border-slate-300 focus:po-border-mpao-lightblue" },
    items: { default: null }
  },
  emits: ["selected", "unSelected", "update:modelValue"],
  setup(e, { emit: t }) {
    const o = e;
    function l() {
      return o.hasError ? "po-border-red-400 focus:po-border-red-600 focus:po-ring-red-600" : o.borderColor;
    }
    const s = x(""), n = x([]), a = x(!1);
    function i(v) {
      n.value.splice(v, 1), c();
    }
    function u(v) {
      let h = s.value.split(",");
      v.key === "Enter" && 0 < s.value.length && (v.preventDefault(), h.forEach((g) => {
        var P;
        let w = (P = o.items) == null ? void 0 : P.find(
          (C) => C.name.toLowerCase() === g.trim().toLowerCase()
        );
        w && n.value.push(w);
      }), s.value = ""), v.key === "Backspace" && s.value.length === 0 && a.value && n.value.pop(), c();
    }
    const f = x([]);
    function c() {
      f.value = n.value.map((v) => v.id);
    }
    G(() => {
      document.addEventListener("keydown", u);
    }), ne(() => {
      document.removeEventListener("keydown", u);
    });
    const b = x(!1), $ = M(
      () => {
        var v;
        return s.value === "" ? o.items : (v = o.items) == null ? void 0 : v.filter((h) => h.name.toLowerCase().includes(s.value.toLowerCase()));
      }
    );
    let m = x();
    Gt(m, () => {
      b.value = !1;
    });
    function y(v) {
      n.value.push(v), s.value = "", c();
    }
    return X(f, () => {
      t("update:modelValue", f.value);
    }), (v, h) => (p(), d("div", {
      ref_key: "multiSelectComponentRef",
      ref: m,
      class: O(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": v.display === "horizontal" }]])
    }, [
      r("label", {
        for: v.id,
        class: O([
          "po-text-sm po-font-medium po-flex po-items-center po-space-x-1",
          { "po-text-red-500": v.hasError },
          { "po-text-slate-700": !v.hasError }
        ])
      }, [
        r("span", r4, V(v.label), 1),
        v.required ? (p(), d("span", i4, "*")) : _("", !0),
        v.info !== null ? (p(), d("abbr", {
          key: 1,
          title: v.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          S(k(Os), { class: "po-fill-current" })
        ], 8, p4)) : _("", !0)
      ], 10, a4),
      r("div", u4, [
        r("div", {
          class: O([
            "po-border po-p-1 po-min-h-[2.38rem] po-flex po-flex-wrap po-items-center focus-within:po-border-mpao-lightblue po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white sm:po-text-sm",
            l()
          ])
        }, [
          r("div", d4, [
            n.value.length > 0 ? (p(!0), d(R, { key: 0 }, U(n.value, (g, w) => (p(), d("span", c4, [
              r("span", null, V(g.name), 1),
              r("span", {
                onClick: () => i(w),
                role: "button",
                class: "po-cursor-pointer"
              }, [
                S(k(Bt), { class: "po-w-3 po-stroke-red-600 po-stroke-2" })
              ], 8, f4)
            ]))), 256)) : _("", !0),
            Ce(r("input", {
              id: v.id,
              "onUpdate:modelValue": h[0] || (h[0] = (g) => s.value = g),
              onFocus: h[1] || (h[1] = () => {
                b.value = !0, a.value = !0;
              }),
              onBlur: h[2] || (h[2] = () => a.value = !1),
              class: "po-border-0 po-outline-none po-ring-0 po-grow"
            }, null, 40, v4), [
              [ft, s.value]
            ])
          ])
        ], 2),
        b.value ? (p(), d("ul", h4, [
          (p(!0), d(R, null, U($.value, (g) => (p(), d("li", {
            onClick: () => y(g),
            key: g.id,
            value: g.id,
            class: O([
              "po-relative po-select-none po-py-2 hover:po-bg-mpao-lightblue hover:po-text-white po-cursor-pointer po-pl-3 po-pr-9"
            ])
          }, [
            r("span", b4, V(g.name), 1)
          ], 8, m4))), 128))
        ])) : _("", !0)
      ]),
      v.message !== null ? (p(), d("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${v.id}-description`
      }, V(v.message), 9, g4)) : _("", !0),
      v.hasError && v.errorMessage !== null ? (p(), d("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-center po-space-x-1",
        id: `${v.id}-error`
      }, [
        S(k(Np), { class: "po-fill-current po-w-4" }),
        r("span", null, V(v.errorMessage), 1)
      ], 8, y4)) : _("", !0)
    ], 2));
  }
}), _4 = { class: "po-flex po-pl-5" }, $4 = /* @__PURE__ */ r("div", { class: "po-shrink-0 po-flex po-flex-col" }, [
  /* @__PURE__ */ r("div", { class: "po-w-[2px] po-shrink-0 po-h-10" }),
  /* @__PURE__ */ r("div", { class: "po-bg-gradient-to-t po-from-orange-400 po-via-red-300 po-to-blue-500 po-w-[2px] po-grow" }),
  /* @__PURE__ */ r("div", { class: "po-w-[2px] po-shrink-0 po-h-12" })
], -1), V4 = { class: "po-grow po-pl-5 po-pt-5 po-space-y-3" }, x4 = ["onClick"], k4 = { class: "-po-mt-1 po-flex po-space-x-3 po-items-center" }, C4 = { class: "po-block po-text-xs po-text-slate-400" }, S4 = { class: "po-text-xs po-text-slate-500 po-pt-1" }, P4 = {
  name: "PoTimeline"
}, s5 = /* @__PURE__ */ L({
  ...P4,
  props: {
    timeline: { default: null },
    clickable: { type: Boolean, default: !1 }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, l) => (p(), d("div", _4, [
      $4,
      r("div", V4, [
        (p(!0), d(R, null, U(o.timeline, (s) => (p(), d("div", {
          class: O(["po-px-2 po-pt-2 po-pb-6 po-relative po-group", [{ "po-cursor-pointer": o.clickable }]]),
          onClick: (n) => o.$emit("button-click", s)
        }, [
          r("span", {
            class: O(["po-rounded-full po-absolute po-flex po-items-center po-justify-center", [
              { "po-w-4 po-h-4 -po-left-[1.8rem] po-bg-blue-400": s.current },
              {
                "po-w-3 po-h-3 -po-left-[1.68rem] po-bg-green-400": !s.current
              }
            ]])
          }, [
            r("span", {
              class: O(["po-rounded-full po-bg-white", [
                { "po-w-2 po-h-2": s.current },
                { "po-w-1 po-h-1": !s.current }
              ]])
            }, null, 2)
          ], 2),
          r("div", null, [
            r("div", k4, [
              r("h4", {
                class: O(["po-text-sm po-text-slate-600 po-font-medium", [{ "group-hover:po-text-mpao-lightblue": o.clickable }]])
              }, V(s.label), 3),
              r("span", C4, V(k(Ys)(s.date)), 1)
            ]),
            r("p", S4, V(s.description), 1)
          ])
        ], 10, x4))), 256))
      ])
    ]));
  }
}), O4 = {
  name: "PoTableCheckbox"
}, n5 = /* @__PURE__ */ L({
  ...O4,
  props: {
    itemId: { default: null },
    isChecked: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["checkboxClicked"],
  setup(e, { emit: t }) {
    return (o, l) => (p(), d(R, null, [
      o.isChecked ? (p(), F(k(pl), {
        key: 0,
        onClick: l[0] || (l[0] = oe(() => o.$emit("checkboxClicked", o.itemId), ["prevent"])),
        class: "po-w-6 po-fill-mpao-lightblue po-cursor-pointer"
      })) : _("", !0),
      o.disabled ? (p(), F(k(pl), {
        key: 1,
        class: "po-w-6 po-fill-slate-400"
      })) : _("", !0),
      !o.isChecked && !o.disabled ? (p(), d("span", {
        key: 2,
        onClick: l[1] || (l[1] = oe(() => o.$emit("checkboxClicked", o.itemId), ["prevent"])),
        class: "po-h-5 po-w-5 po-rounded-full po-border-2 po-ml-[2px] po-block po-border-slate-300 po-cursor-pointer"
      })) : _("", !0)
    ], 64));
  }
}), L4 = { class: "po-p-4" }, T4 = { class: "po-flex po-items-start po-space-x-3" }, E4 = /* @__PURE__ */ r("span", { class: "po-sr-only" }, "Action icon", -1), B4 = { class: "po-w-0 po-flex-1 po-text-sm po-font-medium po-text-gray-400" }, M4 = { class: "po-ml-4 po-flex po-flex-shrink-0" }, z4 = /* @__PURE__ */ r("span", { class: "po-sr-only" }, "Close", -1), A4 = {
  name: "PoToast"
}, a5 = /* @__PURE__ */ L({
  ...A4,
  props: {
    show: { type: Boolean, default: !1 },
    actionType: { default: "" },
    message: { default: "" },
    hideIn: { default: 2e3 },
    size: { default: "sm" }
  },
  emits: ["toast-closed"],
  setup(e, { emit: t }) {
    const o = e, { show: l } = me(o), s = x(!1);
    X(l, () => {
      s.value = l.value;
    });
    function n() {
      s.value = !1, t("toast-closed", !0);
    }
    setTimeout(() => {
      n();
    }, o.hideIn);
    const a = M(() => o.message === "" && o.actionType !== "" ? o.actionType === "success" ? "Saved Successfully!" : o.actionType === "danger" ? "Item deleted!" : o.actionType === "warn" ? "Attention needed!" : "Wrong action" : o.message);
    return (i, u) => (p(), F(vt, { to: "#po-notifications-alert" }, [
      S(De, {
        "enter-active-class": "po-transform po-ease-out po-duration-300 po-transition",
        "enter-from-class": "po-translate-y-2 po-opacity-0 sm:po-translate-y-0 sm:po-translate-x-2",
        "enter-to-class": "po-translate-y-0 po-opacity-100 sm:po-translate-x-0",
        "leave-active-class": "po-transition po-ease-in po-duration-100",
        "leave-from-class": "po-opacity-100",
        "leave-to-class": "po-opacity-0"
      }, {
        default: z(() => [
          s.value ? (p(), d("div", {
            key: 0,
            class: O(["po-pointer-events-auto po-w-full po-overflow-hidden po-rounded-lg po-bg-gray-900 po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5", [
              { "po-max-w-[260px]": i.size === "sm" },
              { "po-max-w-[360px]": i.size === "lg" },
              { "po-max-w-[560px]": i.size === "xl" }
            ]])
          }, [
            r("div", L4, [
              r("div", T4, [
                i.actionType !== "" ? (p(), d("div", {
                  key: 0,
                  class: O(["po-inline-flex po-items-center po-justify-center po-flex-shrink-0 po-w-6 po-h-6 po-rounded-lg", [
                    {
                      "po-bg-mpao-green po-text-green-100": i.actionType === "success"
                    },
                    { "po-bg-mpao-red po-text-red-100": i.actionType === "danger" },
                    {
                      "po-bg-mpao-orange po-text-orange-100": i.actionType === "warn"
                    }
                  ]])
                }, [
                  i.actionType === "success" ? (p(), F(k(Br), {
                    key: 0,
                    class: "po-w-4 po-h-4"
                  })) : _("", !0),
                  i.actionType === "danger" ? (p(), F(k(Ar), {
                    key: 1,
                    class: "po-w-4 po-h-4"
                  })) : _("", !0),
                  i.actionType === "warn" ? (p(), F(k(ds), {
                    key: 2,
                    class: "po-w-4 po-h-4"
                  })) : _("", !0),
                  E4
                ], 2)) : _("", !0),
                r("p", B4, V(a.value), 1),
                r("div", M4, [
                  r("button", {
                    type: "button",
                    onClick: n,
                    class: "po-inline-flex po-rounded-md po-bg-gray-900 po-text-gray-400 hover:po-text-gray-300 hover:po-bg-gray-700 po-transition-colors po-duration-150 po-ease-out focus:po-outline-none focus:po-ring-2 focus:po-ring-indigo-500 focus:po-ring-offset-2"
                  }, [
                    z4,
                    S(k(cs), {
                      class: "po-h-5 po-w-5",
                      "aria-hidden": "true"
                    })
                  ])
                ])
              ])
            ])
          ], 2)) : _("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), D4 = ["for"], I4 = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, j4 = ["title"], R4 = { class: "po-relative po-mt-1" }, F4 = {
  key: 1,
  class: "po-absolute po-top-0 po-left-0 po-right-0 po-bottom-0 po-overflow-hidden po-bg-white po-rounded-md po-border po-border-slate-300 po-flex po-items-center"
}, N4 = { class: "po-grow" }, H4 = ["id"], q4 = ["onMousedown"], W4 = ["onMousedown"], U4 = {
  key: 0,
  class: "po-text-sm po-text-slate-600 po-p-4 po-block"
}, G4 = {
  key: 0,
  class: "po-mt-2 po-text-sm po-text-slate-500",
  id: "-description"
}, Z4 = {
  key: 1,
  class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
  id: "-error"
}, K4 = {
  name: "PoSelectApi"
}, r5 = /* @__PURE__ */ L({
  ...K4,
  props: {
    options: { default: () => [] },
    id: { default: "" },
    loading: { type: Boolean, default: !1 },
    showMoreBtn: { type: Boolean, default: !1 },
    label: { default: "" },
    info: { default: null },
    display: { default: "vertical" },
    required: { type: Boolean, default: !1 },
    errorMessage: { default: null },
    message: { default: null },
    disabled: { type: Boolean, default: !1 },
    emptyMessage: { default: null },
    showSelected: { type: Boolean, default: !0 }
  },
  emits: ["search", "selected", "loadmore"],
  setup(e, { emit: t }) {
    const o = e, l = x(), s = x(!1), n = x(!1), a = x([]);
    X(o, (g, w) => {
      a.value = o.options;
    });
    const i = x(null);
    Gt(i, () => {
      s.value = !!n.value;
    });
    function u() {
      n.value = !1, setTimeout(() => {
        s.value = !1;
      }, 100);
    }
    const f = x("");
    G(() => {
      o.id === "" ? f.value = o.label.replace(/\s/g, "") + "-" + Date.now() + "-selectapi-" + Math.floor(Math.random() * 9e3) : f.value = o.id;
    });
    const c = x();
    function b() {
      t("search", c.value);
    }
    const $ = x(null);
    function m(g) {
      $.value = g, t("selected", g), s.value = !!n.value;
    }
    function y() {
      t("loadmore", !0);
    }
    const v = x();
    let h;
    return G(() => {
      h = Ut(l.value, v.value, {
        placement: "bottom-end",
        strategy: "fixed",
        modifiers: [
          {
            name: "sameWidth",
            enabled: !0,
            fn: ({ state: g }) => {
              g.styles.popper.width = `${g.rects.reference.width}px`;
            },
            phase: "beforeWrite",
            requires: ["computeStyles"]
          }
        ]
      });
    }), ne(() => {
      h && h.destroy();
    }), (g, w) => (p(), d("div", {
      ref_key: "containerRef",
      ref: i,
      class: O(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": g.display === "horizontal" }]])
    }, [
      r("label", {
        for: f.value,
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700"
      }, [
        r("span", null, V(g.label), 1),
        g.required ? (p(), d("span", I4, "*")) : _("", !0),
        g.info !== null ? (p(), d("abbr", {
          key: 1,
          title: g.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          S(k(qt), { class: "po-fill-current" })
        ], 8, j4)) : _("", !0)
      ], 8, D4),
      r("div", R4, [
        r("div", null, [
          g.loading ? (p(), F(Ht, {
            key: 0,
            class: "po-right-0 po-top-4",
            absolute: !0
          })) : _("", !0),
          $.value !== null && g.showSelected ? (p(), d("div", F4, [
            r("div", N4, [
              Y(g.$slots, "selectedOption", Xe(Qe($.value)), () => [
                J(V($.value), 1)
              ])
            ]),
            r("span", {
              class: "po-shrink-0 po-p-1 po-cursor-pointer",
              onMousedown: w[0] || (w[0] = oe((P) => {
                $.value = null, c.value = "";
              }, ["stop"]))
            }, [
              S(k(Bt), { class: "po-w-4 po-stroke-2 po-stroke-slate-400" })
            ], 32)
          ])) : _("", !0),
          Ce(r("input", {
            type: "text",
            name: "",
            id: f.value,
            ref_key: "selectBox",
            ref: l,
            "onUpdate:modelValue": w[1] || (w[1] = (P) => c.value = P),
            onInput: b,
            onFocus: w[2] || (w[2] = (P) => {
              n.value = !0, s.value = !0;
            }),
            onBlur: u,
            class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm"
          }, null, 40, H4), [
            [ft, c.value]
          ])
        ]),
        Ce(r("div", {
          ref_key: "popper",
          ref: v,
          class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
        }, [
          a.value && a.value.length > 0 ? (p(), d(R, { key: 0 }, [
            (p(!0), d(R, null, U(a.value, (P) => (p(), d("div", {
              onMousedown: oe((C) => m(P), ["stop"])
            }, [
              Y(g.$slots, "option", Xe(Qe(P)), () => [
                J(V(P), 1)
              ])
            ], 40, q4))), 256)),
            g.showMoreBtn ? (p(), d("span", {
              key: 0,
              role: "button",
              onMousedown: oe(y, ["stop"]),
              class: "po-text-sm po-text-semibold po-text-mpao-lightblue po-block po-text-center po-py-2 hover:po-bg-slate-50 po-transition-colors po-duration-150 po-ease-out"
            }, "More", 40, W4)) : _("", !0)
          ], 64)) : (p(), d(R, { key: 1 }, [
            g.emptyMessage ? (p(), d("span", U4, V(g.emptyMessage), 1)) : _("", !0)
          ], 64))
        ], 512), [
          [
            Et,
            s.value && a.value.length > 0 || s.value && g.emptyMessage
          ]
        ]),
        g.message !== null ? (p(), d("p", G4, V(g.message), 1)) : _("", !0),
        g.errorMessage !== null ? (p(), d("p", Z4, [
          r("span", null, V(g.errorMessage), 1)
        ])) : _("", !0)
      ])
    ], 2));
  }
}), Y4 = { class: "po-bg-blue-300/20 po-border po-border-blue-200 po-p-3 po-mb-5 po-rounded-md po-text-sm sm:po-space-x-2 po-flex po-items-center po-flex-wrap" }, X4 = { class: "po-text-blue-500" }, Q4 = {
  name: "PoMessage"
}, i5 = /* @__PURE__ */ L({
  ...Q4,
  props: {
    msgType: { default: "info" },
    message: { default: "" },
    btnName: { default: "" },
    btnAction: { default: "" }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, l) => (p(), d("div", Y4, [
      r("span", X4, V(o.message), 1),
      o.btnName !== "" ? (p(), d("span", {
        key: 0,
        role: "button",
        onClick: l[0] || (l[0] = (s) => o.$emit("button-click", o.btnAction)),
        class: "po-text-blue-600 po-underline po-font-medium po-text-xs"
      }, V(o.btnName), 1)) : _("", !0)
    ]));
  }
}), J4 = {
  key: 0,
  class: "po-flex md:po-justify-end"
}, e2 = ["onClick"], t2 = { class: "po-text-xl po-font-medium po-text-slate-600 po-flex po-items-center po-space-x-1" }, o2 = {
  name: "PoPageStats"
}, p5 = /* @__PURE__ */ L({
  ...o2,
  props: {
    stats: { default: null },
    clickable: { type: [Boolean, null], default: !0 },
    padding: { default: "po-py-5 po-px-2" }
  },
  emits: ["stat-click"],
  setup(e, { emit: t }) {
    function o(l) {
      return l.iconColor ? l.iconColor : "po-slate-600";
    }
    return (l, s) => l.stats !== null ? (p(), d("div", J4, [
      r("div", {
        class: O(["po-bg-slate-50 po-shadow-sm po-rounded-xl po-divide-x po-divide-slate-200 po-flex", l.padding])
      }, [
        (p(!0), d(R, null, U(l.stats, (n) => (p(), d("div", {
          class: O(["po-px-4 po-group", { "po-cursor-pointer": l.clickable }]),
          onClick: (a) => l.$emit("stat-click", n)
        }, [
          r("span", t2, [
            n.icon ? (p(), d("span", {
              key: 0,
              class: O(["po-w-5 po-h-5", o(n)])
            }, [
              (p(), F(ce(n.icon)))
            ], 2)) : _("", !0),
            r("span", {
              class: O(["po-text-xl po-font-medium po-text-slate-600", { "group-hover:po-text-mpao-lightblue": l.clickable }])
            }, V(n.value), 3)
          ]),
          r("span", {
            class: O(["po-text-sm po-text-slate-500 po-block", { "group-hover:po-text-mpao-lightblue": l.clickable }])
          }, V(n.label), 3)
        ], 10, e2))), 256))
      ], 2)
    ])) : _("", !0);
  }
}), l2 = {
  name: "PoTooltip"
}, go = /* @__PURE__ */ L({
  ...l2,
  props: {
    text: { default: "" },
    placement: { default: "bottom" },
    strategy: { default: "absolute" }
  },
  setup(e) {
    const t = e, o = x(null), l = x(null), s = x(!1);
    let n = null;
    G(() => {
      o.value && l.value && (n = Ut(o.value, l.value, {
        placement: t.placement,
        strategy: t.strategy
      }));
    }), ne(() => {
      n && (n.destroy(), n = null);
    });
    function a() {
      s.value = !0;
    }
    function i() {
      s.value = !1;
    }
    return Zt.on("sidebarOpen", (u) => {
      setTimeout(() => {
        n && n.update();
      }, 320);
    }), (u, f) => (p(), d("span", {
      ref_key: "trigger",
      ref: o,
      onMouseover: a,
      onMouseleave: i
    }, [
      Y(u.$slots, "default", {}, () => [
        J("Tooltip")
      ]),
      (p(), F(vt, { to: "body" }, [
        Ce(r("div", {
          ref_key: "popper",
          ref: l,
          class: O(["po-bg-slate-700 po-text-xs po-z-50 po-transition-opacity po-duration-100 po-ease-linear po-text-slate-50 po-rounded-md po-px-2 po-py-1 po-shadow-md", [{ "po-opacity-0": !s.value }, { "po-opacity-100": s.value }]])
        }, V(u.text), 3), [
          [Et, u.text]
        ])
      ]))
    ], 544));
  }
}), s2 = ["for"], n2 = { class: "po-capitalize" }, a2 = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, r2 = ["title"], i2 = ["name", "id", "value", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], p2 = {
  key: 0,
  class: "po-text-sm po-grow po-text-slate-500 lg:po-min-h-[40px] po-flex po-items-center"
}, u2 = { key: 0 }, d2 = { key: 1 }, c2 = ["for"], f2 = {
  key: 2,
  class: "po-text-sm po-grow po-text-slate-500 lg:po-min-h-[40px] po-flex po-items-center"
}, v2 = /* @__PURE__ */ r("span", null, "Uploading...", -1), h2 = [
  v2
], m2 = {
  key: 3,
  class: "po-shrink-0 po-relative po-top-[3px]"
}, b2 = ["id"], g2 = ["id"], y2 = {
  name: "PoUpload"
}, u5 = /* @__PURE__ */ L({
  ...y2,
  props: {
    token: { default: "" },
    url: { default: "" },
    payload: { default: () => ({}) },
    modelValue: { default: "" },
    label: { default: "" },
    display: { default: "vertical" },
    id: { default: "fileupload" },
    info: { default: null },
    message: { default: null },
    errorMessage: { default: null },
    hasError: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    placeholder: {},
    borderColor: { default: "border-slate-300 focus:border-mpao-lightblue" },
    dragAreaText: { default: "Drag and drop files to upload" },
    dragOverText: { default: "Drop files here to upload" }
  },
  emits: [
    "selected",
    "unSelected",
    "update:modelValue",
    "uploaded"
  ],
  setup(e, { emit: t }) {
    const o = e, { errorMessage: l } = me(o), s = x(!!l.value);
    X(l, (v, h) => {
      s.value = !!(l.value && l.value !== "");
    });
    const n = x(""), a = x("initial");
    G(() => {
      o.id === "" ? n.value = o.id ? o.id : `${o.label.replace(
        /\s/g,
        ""
      )}-${Date.now()}-upload-field-${Math.floor(Math.random() * 9e3)}` : n.value = o.id;
    });
    const i = x(!1), u = (v) => {
      v.preventDefault(), i.value = !0;
    }, f = () => {
      i.value = !1;
    }, c = (v) => {
      var g;
      v.preventDefault(), i.value = !1;
      const h = (g = v.dataTransfer) == null ? void 0 : g.files;
      h && h.length > 0 && $(h);
    }, b = (v) => {
      const g = v.target.files;
      g && g.length > 0 && $(g);
    };
    function $(v) {
      a.value = "uploading", fetch(`${y()}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${o == null ? void 0 : o.token}`
        },
        body: m(v)
      }).then((h) => {
        h.status !== 201 || h.json().then((g) => {
        }), a.value = "initial", t("uploaded", h);
      });
    }
    function m(v) {
      let h = new FormData();
      for (const g of v)
        h.append("files", g);
      return h.append("payload", JSON.stringify(o.payload)), h;
    }
    function y() {
      return o == null || o.url, o == null ? void 0 : o.url;
    }
    return (v, h) => (p(), d("div", {
      class: O(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": v.display === "horizontal" }]])
    }, [
      r("label", {
        disabled: !0,
        for: n.value,
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700 po-mb-1"
      }, [
        r("span", n2, V(v.label), 1),
        v.required ? (p(), d("span", a2, "*")) : _("", !0),
        v.info !== null ? (p(), d("abbr", {
          key: 1,
          title: v.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          S(k(un), { class: "po-fill-current" })
        ], 8, r2)) : _("", !0)
      ], 8, s2),
      r("input", xe({
        type: "file",
        name: n.value,
        id: n.value,
        value: v.modelValue,
        disabled: v.disabled,
        required: v.required,
        "aria-describedby": n.value,
        "aria-required": v.required,
        "aria-disabled": v.disabled
      }, v.$attrs, {
        ref: "fileInput",
        class: "po-hidden",
        onChange: b
      }), null, 16, i2),
      r("div", {
        class: O(["po-border po-border-dashed po-rounded-md po-p-3 po-flex po-items-center po-space-x-4 po-transition-colors po-duration-150 po-ease-out", [
          { "po-border-slate-400/60": !i.value },
          { "po-border-mpao-lightblue": i.value }
        ]]),
        onDragover: u,
        onDragleave: f,
        onDrop: c
      }, [
        r("span", {
          class: O(["po-w-8 po-h-8 po-shrink-0 po-flex po-items-center po-justify-center po-rounded-md", [
            { "po-bg-slate-100 po-text-slate-500": !i.value },
            { "po-bg-blue-50 po-text-blue-500": i.value }
          ]])
        }, [
          S(k(an), { class: "po-w-5 po-stroke-current" })
        ], 2),
        a.value === "initial" ? (p(), d("span", p2, [
          i.value ? (p(), d("span", u2, V(v.dragOverText), 1)) : (p(), d("span", d2, V(v.dragAreaText), 1))
        ])) : _("", !0),
        a.value === "initial" ? (p(), d("label", {
          key: 1,
          for: n.value,
          class: "po-cursor-pointer po-transition-colors po-duration-150 po-ease-out po-shrink-0 po-text-sm po-text-mpao-lightblue po-font-meidum hover:po-text-purple-600 po-px-3 po-py-1"
        }, "Upload file", 8, c2)) : _("", !0),
        a.value === "uploading" ? (p(), d("span", f2, h2)) : _("", !0),
        a.value === "uploading" ? (p(), d("div", m2, [
          S(Ht)
        ])) : _("", !0)
      ], 34),
      v.message !== null ? (p(), d("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${v.id}-description`
      }, V(v.message), 9, b2)) : _("", !0),
      s.value && k(l) !== null ? (p(), d("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
        id: `${v.id}-error`
      }, [
        r("span", null, V(k(l)), 1)
      ], 8, g2)) : _("", !0)
    ], 2));
  }
});
export {
  k2 as PoActionBar,
  q2 as PoAlert,
  On as PoAppIcon,
  Ra as PoAppTray,
  Bo as PoButton,
  C2 as PoCard,
  S2 as PoCardSearch,
  Y2 as PoCardTabs,
  R2 as PoChatLogItem,
  z2 as PoCheckbox,
  H2 as PoCommandPalette,
  K2 as PoConsent,
  G2 as PoContentArea,
  J2 as PoDRStatus,
  Cd as PoDescriptionList,
  U2 as PoDownloadFileList,
  Q2 as PoEmpty,
  A2 as PoFooter,
  D2 as PoFormStatusMessage,
  o5 as PoHeading,
  L2 as PoInputField,
  T2 as PoInputFile,
  Z2 as PoLoading,
  W2 as PoLogs,
  i5 as PoMessage,
  wt as PoModal,
  E2 as PoMonthYearPicker,
  l5 as PoMultiSelect,
  F2 as PoNotification,
  Qa as PoNotificationHub,
  p5 as PoPageStats,
  P2 as PoPageTitle,
  Fu as PoPagination,
  xr as PoProfileSwitcher,
  I2 as PoRadioInput,
  Mn as PoSearchBar,
  M2 as PoSectionMenu,
  r5 as PoSelectApi,
  Lp as PoSelectField,
  x2 as PoSidebarDrawer,
  N2 as PoSlideover,
  j2 as PoStatsBlock,
  O2 as PoTable,
  e5 as PoTableAction,
  n5 as PoTableCheckbox,
  X2 as PoTabs,
  Qp as PoTextarea,
  s5 as PoTimeline,
  a5 as PoToast,
  B2 as PoToggle,
  go as PoTooltip,
  $2 as PoTopBar,
  u5 as PoUpload,
  t5 as Rufiyaa
};
