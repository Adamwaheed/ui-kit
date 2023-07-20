import { openBlock as p, createElementBlock as d, createElementVNode as r, defineComponent as L, ref as C, toRefs as we, watch as Q, Fragment as I, createVNode as S, unref as k, withCtx as z, renderSlot as Y, createBlock as j, resolveDynamicComponent as ce, createCommentVNode as _, computed as B, toDisplayString as V, withDirectives as Ae, isRef as zs, withKeys as Ms, vModelText as Et, cloneVNode as As, h as te, inject as pe, provide as ue, onMounted as G, watchEffect as de, onUnmounted as ne, Teleport as ft, reactive as Ds, shallowRef as Vl, nextTick as ho, toRaw as ze, normalizeClass as O, renderList as U, Transition as De, withModifiers as re, onBeforeMount as Is, onBeforeUpdate as js, onUpdated as mo, mergeProps as xe, createTextVNode as J, onBeforeUnmount as xl, pushScopeId as Rs, popScopeId as Fs, withScopeId as Ns, markRaw as Hs, shallowReactive as qs, resolveComponent as kl, resolveDirective as Ws, normalizeStyle as bo, toHandlers as Us, normalizeProps as Xe, guardReactiveProps as Qe, vShow as go, createStaticVNode as Gs } from "vue";
import { f as Qo, a as Zs } from "./FormatDate-8e09898f.mjs";
function Ks(e, t) {
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
function Ys(e, t) {
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
      d: "M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
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
      d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
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
      d: "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
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
      d: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
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
      d: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
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
      d: "M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
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
      d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
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
      d: "M15.75 19.5L8.25 12l7.5-7.5"
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
      d: "M8.25 4.5l7.5 7.5-7.5 7.5"
    })
  ]);
}
function to(e, t) {
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
      d: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
    }),
    r("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
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
      d: "M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
    })
  ]);
}
function yo(e, t) {
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
function Lt(e, t) {
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
      d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
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
      d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
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
function vt(e, t) {
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
const cn = /* @__PURE__ */ r("div", {
  "aria-live": "assertive",
  class: "po-pointer-events-none po-fixed po-inset-0 po-flex po-items-start po-px-4 po-py-6 sm:po-p-6 po-z-[60]"
}, [
  /* @__PURE__ */ r("div", {
    class: "po-flex po-w-full po-flex-col po-items-end po-space-y-4 sm:po-items-end po-pt-[55px]",
    id: "po-notifications-alert"
  })
], -1), fn = { class: "po-bg-mpao-blue po-fixed po-top-0 po-w-full po-z-50 po-flex" }, vn = { class: "po-shrink-0 po-px-3 po-pt-3" }, hn = {
  for: "sidebar-drawer-toggle",
  role: "button",
  class: "genie-effect po-flex po-items-center po-justify-center po-bg-[#2e5266] po-rounded-full po-w-10 po-h-10 po-select-none po-text-slate-100"
}, mn = { class: "po-mx-auto po-max-w-full po-pr-4 po-grow sm:po-pr-4" }, bn = { class: "po-flex po-relative po-h-16 po-items-center po-justify-between po-space-x-12" }, gn = { class: "po-flex po-items-center po-space-x-3" }, yn = {
  key: 0,
  class: "po-block po-w-6 po-text-slate-100 md:po-hidden",
  role: "button"
}, wn = {
  name: "PoTopBar"
}, Z4 = /* @__PURE__ */ L({
  ...wn,
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
    const o = e, l = C(""), s = C(""), { avatar: n, logo: a } = we(o);
    Q(n, () => {
      l.value = n.value;
    }), Q(a, () => {
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
    return (c, v) => (p(), d(I, null, [
      cn,
      r("nav", fn, [
        r("div", vn, [
          r("label", hn, [
            S(k(Qs), { class: "po-w-6 po-fill-current" })
          ])
        ]),
        r("div", mn, [
          r("div", bn, [
            S(k(Sn), { "app-name": c.appName }, {
              icon: z(() => [
                Y(c.$slots, "appIcon", {}, () => [
                  c.appIcon ? (p(), j(ce(c.appIcon), { key: 0 })) : _("", !0)
                ])
              ]),
              _: 3
            }, 8, ["app-name"]),
            c.hasSearch ? (p(), j(k(En), {
              key: 0,
              onQuery: u,
              onOnClear: f,
              "current-query": c.currentQuery
            }, null, 8, ["current-query"])) : _("", !0),
            r("div", gn, [
              c.hasSearch ? (p(), d("span", yn, [
                S(k(yo), { class: "po-stroke-current" })
              ])) : _("", !0),
              S(k(Ya), {
                notifications: c.notifications,
                "has-new-notifications": c.hasNewNotifications
              }, null, 8, ["notifications", "has-new-notifications"]),
              S(k(Ia), {
                "app-list": c.appList,
                "open-in-new-tab": !0
              }, null, 8, ["app-list"]),
              S(k($r), {
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
}), _n = { class: "po-flex po-items-center po-justify-center po-space-x-3" }, $n = { class: "po-w-8 po-text-slate-100 app-icon" }, Vn = { class: "po-font-light po-text-lg po-text-slate-100" }, xn = { class: "po-hidden md:po-block" }, kn = { class: "po-block md:po-hidden" }, Cn = {
  name: "PoAppIcon"
}, Sn = /* @__PURE__ */ L({
  ...Cn,
  props: {
    appName: { default: "App Name" }
  },
  setup(e) {
    const t = e, o = B(() => {
      if (!t.appName)
        return "";
      const l = t.appName.match(/\b[A-Z]/g);
      if (!l)
        return "";
      let s = l.join("");
      return s.length === 1 ? t.appName.substring(0, 3) : s;
    });
    return (l, s) => (p(), d("div", _n, [
      r("div", $n, [
        Y(l.$slots, "icon")
      ]),
      r("span", Vn, [
        r("span", xn, V(l.appName), 1),
        r("span", kn, V(o.value), 1)
      ])
    ]));
  }
}), Pn = { class: "po-flex-grow po-hidden po-relative md:po-block" }, On = ["placeholder", "onKeyup"], Ln = { class: "po-absolute po-inset-y-0 po-left-0 po-flex po-items-center po-pl-3 po-pointer-events-none po-transition-all po-ease-linear po-duration-100 po-text-slate-400 po-origin-center peer-hover/search:po-scale-105 peer-focus/search:po-text-slate-100" }, Tn = {
  name: "PoSearchBar"
}, En = /* @__PURE__ */ L({
  ...Tn,
  props: {
    placeholder: { default: "Search" },
    currentQuery: { default: "" }
  },
  emits: ["query", "onClear"],
  setup(e, { emit: t }) {
    let o = C("");
    const l = (s) => {
      t("query", o.value);
    };
    return Q(o, async (s, n) => {
      s === "" && t("onClear", !0);
    }), (s, n) => (p(), d("div", Pn, [
      Ae(r("input", {
        "onUpdate:modelValue": n[0] || (n[0] = (a) => zs(o) ? o.value = a : o = a),
        type: "text",
        id: "main-search",
        placeholder: s.placeholder,
        onKeyup: Ms(l, ["enter"]),
        class: "peer/search po-bg-transparent po-border po-border-transparent po-text-slate-100 po-text-sm po-rounded-md po-ring-0 po-outline-none focus:po-outline-none focus:po-ring-0 po-transition-colors po-ease-linear po-duration-100 po-block po-w-full po-pl-10 po-p-2.5 po-appearance-none focus:po-border-slate-400 hover:po-border-slate-600"
      }, null, 40, On), [
        [Et, k(o)]
      ]),
      r("div", Ln, [
        S(k(yo), { class: "po-w-5 po-h-5 po-stroke-current" })
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
var Ce = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Ce || {}), Me = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Me || {});
function ee({ visible: e = !0, features: t = 0, ourProps: o, theirProps: l, ...s }) {
  var n;
  let a = Sl(l, o), i = Object.assign(s, { props: a });
  if (e || t & 2 && a.static)
    return Yt(i);
  if (t & 1) {
    let u = (n = a.unmount) == null || n ? 0 : 1;
    return ie(u, { [0]() {
      return null;
    }, [1]() {
      return Yt({ ...s, props: { ...a, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Yt(i);
}
function Yt({ props: e, attrs: t, slots: o, slot: l, name: s }) {
  var n, a;
  let { as: i, ...u } = Bt(e, ["unmount", "static"]), f = (n = o.default) == null ? void 0 : n.call(o, l), c = {};
  if (l) {
    let v = !1, w = [];
    for (let [m, g] of Object.entries(l))
      typeof g == "boolean" && (v = !0), g === !0 && w.push(m);
    v && (c["data-headlessui-state"] = w.join(" "));
  }
  if (i === "template") {
    if (f = Cl(f ?? []), Object.keys(u).length > 0 || Object.keys(t).length > 0) {
      let [v, ...w] = f ?? [];
      if (!Bn(v) || w.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${s} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(u).concat(Object.keys(t)).map((b) => b.trim()).filter((b, h, y) => y.indexOf(b) === h).sort((b, h) => b.localeCompare(h)).map((b) => `  - ${b}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((b) => `  - ${b}`).join(`
`)].join(`
`));
      let m = Sl((a = v.props) != null ? a : {}, u), g = As(v, m);
      for (let b in m)
        b.startsWith("on") && (g.props || (g.props = {}), g.props[b] = m[b]);
      return g;
    }
    return Array.isArray(f) && f.length === 1 ? f[0] : f;
  }
  return te(i, Object.assign({}, u, c), { default: () => f });
}
function Cl(e) {
  return e.flatMap((t) => t.type === I ? Cl(t.children) : [t]);
}
function Sl(...e) {
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
function Pl(e) {
  let t = Object.assign({}, e);
  for (let o in t)
    t[o] === void 0 && delete t[o];
  return t;
}
function Bt(e, t = []) {
  let o = Object.assign({}, e);
  for (let l of t)
    l in o && delete o[l];
  return o;
}
function Bn(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let zn = 0;
function Mn() {
  return ++zn;
}
function ae() {
  return Mn();
}
var le = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(le || {});
function M(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Ol = Symbol("Context");
var oe = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(oe || {});
function An() {
  return lt() !== null;
}
function lt() {
  return pe(Ol, null);
}
function wo(e) {
  ue(Ol, e);
}
function el(e, t) {
  if (e)
    return e;
  let o = t ?? "button";
  if (typeof o == "string" && o.toLowerCase() === "button")
    return "button";
}
function _o(e, t) {
  let o = C(el(e.value.type, e.value.as));
  return G(() => {
    o.value = el(e.value.type, e.value.as);
  }), de(() => {
    var l;
    o.value || M(t) && M(t) instanceof HTMLButtonElement && !((l = M(t)) != null && l.hasAttribute("type")) && (o.value = "button");
  }), o;
}
var Dn = Object.defineProperty, In = (e, t, o) => t in e ? Dn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, tl = (e, t, o) => (In(e, typeof t != "symbol" ? t + "" : t, o), o);
let jn = class {
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
}, ht = new jn();
function ge(e) {
  if (ht.isServer)
    return null;
  if (e instanceof Node)
    return e.ownerDocument;
  if (e != null && e.hasOwnProperty("value")) {
    let t = M(e);
    if (t)
      return t.ownerDocument;
  }
  return document;
}
function Rn({ container: e, accept: t, walk: o, enabled: l }) {
  de(() => {
    let s = e.value;
    if (!s || l !== void 0 && !l.value)
      return;
    let n = ge(e);
    if (!n)
      return;
    let a = Object.assign((u) => t(u), { acceptNode: t }), i = n.createTreeWalker(s, NodeFilter.SHOW_ELEMENT, a, !1);
    for (; i.nextNode(); )
      o(i.currentNode);
  });
}
let oo = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var se = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(se || {}), Ze = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Ze || {}), Fn = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Fn || {});
function zt(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(oo)).sort((t, o) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (o.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var $o = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))($o || {});
function Ll(e, t = 0) {
  var o;
  return e === ((o = ge(e)) == null ? void 0 : o.body) ? !1 : ie(t, { [0]() {
    return e.matches(oo);
  }, [1]() {
    let l = e;
    for (; l !== null; ) {
      if (l.matches(oo))
        return !0;
      l = l.parentElement;
    }
    return !1;
  } });
}
function Ue(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let Nn = ["textarea", "input"].join(",");
function Hn(e) {
  var t, o;
  return (o = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Nn)) != null ? o : !1;
}
function Tl(e, t = (o) => o) {
  return e.slice().sort((o, l) => {
    let s = t(o), n = t(l);
    if (s === null || n === null)
      return 0;
    let a = s.compareDocumentPosition(n);
    return a & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : a & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function me(e, t, { sorted: o = !0, relativeTo: l = null, skipElements: s = [] } = {}) {
  var n;
  let a = (n = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? n : document, i = Array.isArray(e) ? o ? Tl(e) : e : zt(e);
  s.length > 0 && i.length > 1 && (i = i.filter((g) => !s.includes(g))), l = l ?? a.activeElement;
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
  })(), c = t & 32 ? { preventScroll: !0 } : {}, v = 0, w = i.length, m;
  do {
    if (v >= w || v + w <= 0)
      return 0;
    let g = f + v;
    if (t & 16)
      g = (g + w) % w;
    else {
      if (g < 0)
        return 3;
      if (g >= w)
        return 1;
    }
    m = i[g], m == null || m.focus(c), v += u;
  } while (m !== a.activeElement);
  return t & 6 && Hn(m) && m.select(), m.hasAttribute("tabindex") || m.setAttribute("tabindex", "0"), 2;
}
function Xt(e, t, o) {
  ht.isServer || de((l) => {
    document.addEventListener(e, t, o), l(() => document.removeEventListener(e, t, o));
  });
}
function El(e, t, o = B(() => !0)) {
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
      let c = f instanceof HTMLElement ? f : M(f);
      if (c != null && c.contains(i) || n.composed && n.composedPath().includes(c))
        return;
    }
    return !Ll(i, $o.Loose) && i.tabIndex !== -1 && n.preventDefault(), t(n, i);
  }
  let s = C(null);
  Xt("mousedown", (n) => {
    var a, i;
    o.value && (s.value = ((i = (a = n.composedPath) == null ? void 0 : a.call(n)) == null ? void 0 : i[0]) || n.target);
  }, !0), Xt("click", (n) => {
    s.value && (l(n, () => s.value), s.value = null);
  }, !0), Xt("blur", (n) => l(n, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Oe = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Oe || {});
let Ie = L({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: o }) {
  return () => {
    let { features: l, ...s } = e, n = { "aria-hidden": (l & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(l & 4) === 4 && (l & 2) !== 2 && { display: "none" } } };
    return ee({ ourProps: n, theirProps: s, slot: {}, attrs: o, slots: t, name: "Hidden" });
  };
} });
function Bl(e = {}, t = null, o = []) {
  for (let [l, s] of Object.entries(e))
    Ml(o, zl(t, l), s);
  return o;
}
function zl(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Ml(e, t, o) {
  if (Array.isArray(o))
    for (let [l, s] of o.entries())
      Ml(e, zl(t, l.toString()), s);
  else
    o instanceof Date ? e.push([t, o.toISOString()]) : typeof o == "boolean" ? e.push([t, o ? "1" : "0"]) : typeof o == "string" ? e.push([t, o]) : typeof o == "number" ? e.push([t, `${o}`]) : o == null ? e.push([t, ""]) : Bl(o, t, e);
}
function Al(e) {
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
function Dl(e, t, o) {
  let l = C(o == null ? void 0 : o.value), s = B(() => e.value !== void 0);
  return [B(() => s.value ? e.value : l.value), function(n) {
    return s.value || (l.value = n), t == null ? void 0 : t(n);
  }];
}
function qn() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Wn(e, t, o) {
  ht.isServer || de((l) => {
    window.addEventListener(e, t, o), l(() => window.removeEventListener(e, t, o));
  });
}
var be = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(be || {});
function Vo() {
  let e = C(0);
  return Wn("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function xo(e, t, o, l) {
  ht.isServer || de((s) => {
    e = e ?? window, e.addEventListener(t, o, l), s(() => e.removeEventListener(t, o, l));
  });
}
function Il(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function jl(e) {
  if (!e)
    return /* @__PURE__ */ new Set();
  if (typeof e == "function")
    return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let o of e.value) {
    let l = M(o);
    l instanceof HTMLElement && t.add(l);
  }
  return t;
}
var Rl = ((e) => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(Rl || {});
let at = Object.assign(L({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: C(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: l }) {
  let s = C(null);
  l({ el: s, $el: s });
  let n = B(() => ge(s)), a = C(!1);
  G(() => a.value = !0), ne(() => a.value = !1), Gn({ ownerDocument: n }, B(() => a.value && Boolean(e.features & 16)));
  let i = Zn({ ownerDocument: n, container: s, initialFocus: B(() => e.initialFocus) }, B(() => a.value && Boolean(e.features & 2)));
  Kn({ ownerDocument: n, container: s, containers: e.containers, previousActiveElement: i }, B(() => a.value && Boolean(e.features & 8)));
  let u = Vo();
  function f(m) {
    let g = M(s);
    g && ((b) => b())(() => {
      ie(u.value, { [be.Forwards]: () => {
        me(g, se.First, { skipElements: [m.relatedTarget] });
      }, [be.Backwards]: () => {
        me(g, se.Last, { skipElements: [m.relatedTarget] });
      } });
    });
  }
  let c = C(!1);
  function v(m) {
    m.key === "Tab" && (c.value = !0, requestAnimationFrame(() => {
      c.value = !1;
    }));
  }
  function w(m) {
    if (!a.value)
      return;
    let g = jl(e.containers);
    M(s) instanceof HTMLElement && g.add(M(s));
    let b = m.relatedTarget;
    b instanceof HTMLElement && b.dataset.headlessuiFocusGuard !== "true" && (Fl(g, b) || (c.value ? me(M(s), ie(u.value, { [be.Forwards]: () => se.Next, [be.Backwards]: () => se.Previous }) | se.WrapAround, { relativeTo: m.target }) : m.target instanceof HTMLElement && Ue(m.target)));
  }
  return () => {
    let m = {}, g = { ref: s, onKeydown: v, onFocusout: w }, { features: b, initialFocus: h, containers: y, ...x } = e;
    return te(I, [Boolean(b & 4) && te(Ie, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: Oe.Focusable }), ee({ ourProps: g, theirProps: { ...t, ...x }, slot: m, attrs: t, slots: o, name: "FocusTrap" }), Boolean(b & 4) && te(Ie, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: Oe.Focusable })]);
  };
} }), { features: Rl }), qe = [];
if (typeof window < "u" && typeof document < "u") {
  let e = function(t) {
    t.target instanceof HTMLElement && t.target !== document.body && qe[0] !== t.target && (qe.unshift(t.target), qe = qe.filter((o) => o != null && o.isConnected), qe.splice(10));
  };
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
}
function Un(e) {
  let t = C(qe.slice());
  return Q([e], ([o], [l]) => {
    l === !0 && o === !1 ? Il(() => {
      t.value.splice(0);
    }) : l === !1 && o === !0 && (t.value = qe.slice());
  }, { flush: "post" }), () => {
    var o;
    return (o = t.value.find((l) => l != null && l.isConnected)) != null ? o : null;
  };
}
function Gn({ ownerDocument: e }, t) {
  let o = Un(t);
  G(() => {
    de(() => {
      var l, s;
      t.value || ((l = e.value) == null ? void 0 : l.activeElement) === ((s = e.value) == null ? void 0 : s.body) && Ue(o());
    }, { flush: "post" });
  }), ne(() => {
    Ue(o());
  });
}
function Zn({ ownerDocument: e, container: t, initialFocus: o }, l) {
  let s = C(null), n = C(!1);
  return G(() => n.value = !0), ne(() => n.value = !1), G(() => {
    Q([t, o, l], (a, i) => {
      if (a.every((f, c) => (i == null ? void 0 : i[c]) === f) || !l.value)
        return;
      let u = M(t);
      u && Il(() => {
        var f, c;
        if (!n.value)
          return;
        let v = M(o), w = (f = e.value) == null ? void 0 : f.activeElement;
        if (v) {
          if (v === w) {
            s.value = w;
            return;
          }
        } else if (u.contains(w)) {
          s.value = w;
          return;
        }
        v ? Ue(v) : me(u, se.First | se.NoScroll) === Ze.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), s.value = (c = e.value) == null ? void 0 : c.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), s;
}
function Kn({ ownerDocument: e, container: t, containers: o, previousActiveElement: l }, s) {
  var n;
  xo((n = e.value) == null ? void 0 : n.defaultView, "focus", (a) => {
    if (!s.value)
      return;
    let i = jl(o);
    M(t) instanceof HTMLElement && i.add(M(t));
    let u = l.value;
    if (!u)
      return;
    let f = a.target;
    f && f instanceof HTMLElement ? Fl(i, f) ? (l.value = f, Ue(f)) : (a.preventDefault(), a.stopPropagation(), Ue(u)) : Ue(l.value);
  }, !0);
}
function Fl(e, t) {
  for (let o of e)
    if (o.contains(t))
      return !0;
  return !1;
}
let Qt = /* @__PURE__ */ new Map(), rt = /* @__PURE__ */ new Map();
function ol(e, t = C(!0)) {
  de((o) => {
    var l;
    if (!t.value)
      return;
    let s = M(e);
    if (!s)
      return;
    o(function() {
      var a;
      if (!s)
        return;
      let i = (a = rt.get(s)) != null ? a : 1;
      if (i === 1 ? rt.delete(s) : rt.set(s, i - 1), i !== 1)
        return;
      let u = Qt.get(s);
      u && (u["aria-hidden"] === null ? s.removeAttribute("aria-hidden") : s.setAttribute("aria-hidden", u["aria-hidden"]), s.inert = u.inert, Qt.delete(s));
    });
    let n = (l = rt.get(s)) != null ? l : 0;
    rt.set(s, n + 1), n === 0 && (Qt.set(s, { "aria-hidden": s.getAttribute("aria-hidden"), inert: s.inert }), s.setAttribute("aria-hidden", "true"), s.inert = !0);
  });
}
let Nl = Symbol("ForcePortalRootContext");
function Yn() {
  return pe(Nl, !1);
}
let lo = L({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: o }) {
  return ue(Nl, e.force), () => {
    let { force: l, ...s } = e;
    return ee({ theirProps: s, ourProps: {}, slot: {}, slots: t, attrs: o, name: "ForcePortalRoot" });
  };
} });
function Xn(e) {
  let t = ge(e);
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
let Hl = L({ name: "Portal", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: o }) {
  let l = C(null), s = B(() => ge(l)), n = Yn(), a = pe(ql, null), i = C(n === !0 || a == null ? Xn(l.value) : a.resolveTarget());
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
    return te(ft, { to: i.value }, ee({ ourProps: u, theirProps: e, slot: {}, attrs: o, slots: t, name: "Portal" }));
  };
} }), ql = Symbol("PortalGroupContext"), Qn = L({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: o }) {
  let l = Ds({ resolveTarget() {
    return e.target;
  } });
  return ue(ql, l), () => {
    let { target: s, ...n } = e;
    return ee({ theirProps: n, ourProps: {}, slot: {}, attrs: t, slots: o, name: "PortalGroup" });
  };
} }), Wl = Symbol("StackContext");
var so = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(so || {});
function Jn() {
  return pe(Wl, () => {
  });
}
function ea({ type: e, enabled: t, element: o, onUpdate: l }) {
  let s = Jn();
  function n(...a) {
    l == null || l(...a), s(...a);
  }
  G(() => {
    Q(t, (a, i) => {
      a ? n(0, e, o) : i === !0 && n(1, e, o);
    }, { immediate: !0, flush: "sync" });
  }), ne(() => {
    t.value && n(1, e, o);
  }), ue(Wl, n);
}
let Ul = Symbol("DescriptionContext");
function ta() {
  let e = pe(Ul, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function Mt({ slot: e = C({}), name: t = "Description", props: o = {} } = {}) {
  let l = C([]);
  function s(n) {
    return l.value.push(n), () => {
      let a = l.value.indexOf(n);
      a !== -1 && l.value.splice(a, 1);
    };
  }
  return ue(Ul, { register: s, slot: e, name: t, props: o }), B(() => l.value.length > 0 ? l.value.join(" ") : void 0);
}
let oa = L({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${ae()}` } }, setup(e, { attrs: t, slots: o }) {
  let l = ta();
  return G(() => ne(l.register(e.id))), () => {
    let { name: s = "Description", slot: n = C({}), props: a = {} } = l, { id: i, ...u } = e, f = { ...Object.entries(a).reduce((c, [v, w]) => Object.assign(c, { [v]: k(w) }), {}), id: i };
    return ee({ ourProps: f, theirProps: u, slot: n.value, attrs: t, slots: o, name: s });
  };
} });
function la(e) {
  let t = Vl(e.getSnapshot());
  return ne(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function At() {
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
    let l = At();
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
function sa(e, t) {
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
function na() {
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
function aa() {
  if (!qn())
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
function ra() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function ia(e) {
  let t = {};
  for (let o of e)
    Object.assign(t, o(t));
  return t;
}
let We = sa(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var o;
  let l = (o = this.get(e)) != null ? o : { doc: e, count: 0, d: At(), meta: /* @__PURE__ */ new Set() };
  return l.count++, l.meta.add(t), this.set(e, l), this;
}, POP(e, t) {
  let o = this.get(e);
  return o && (o.count--, o.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: o }) {
  let l = { doc: e, d: t, meta: ia(o) }, s = [aa(), na(), ra()];
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
function pa(e, t, o) {
  let l = la(We), s = B(() => {
    let n = e.value ? l.value.get(e.value) : void 0;
    return n ? n.count > 0 : !1;
  });
  return Q([e, t], ([n, a], [i], u) => {
    if (!n || !a)
      return;
    We.dispatch("PUSH", n, o);
    let f = !1;
    u(() => {
      f || (We.dispatch("POP", i ?? n, o), f = !0);
    });
  }, { immediate: !0 }), s;
}
var ua = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ua || {});
let no = Symbol("DialogContext");
function mt(e) {
  let t = pe(no, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, mt), o;
  }
  return t;
}
let xt = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Dt = L({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: xt }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${ae()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: o, slots: l, expose: s }) {
  var n;
  let a = C(!1);
  G(() => {
    a.value = !0;
  });
  let i = C(0), u = lt(), f = B(() => e.open === xt && u !== null ? (u.value & oe.Open) === oe.Open : e.open), c = C(null), v = C(null), w = B(() => ge(c));
  if (s({ el: c, $el: c }), !(e.open !== xt || u !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof f.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${f.value === xt ? void 0 : e.open}`);
  let m = B(() => a.value && f.value ? 0 : 1), g = B(() => m.value === 0), b = B(() => i.value > 1), h = pe(no, null) !== null, y = B(() => b.value ? "parent" : "leaf"), x = B(() => u !== null ? (u.value & oe.Closing) === oe.Closing : !1), P = B(() => h || x.value ? !1 : g.value), $ = B(() => {
    var q, W, F;
    return (F = Array.from((W = (q = w.value) == null ? void 0 : q.querySelectorAll("body > *")) != null ? W : []).find((X) => X.id === "headlessui-portal-root" ? !1 : X.contains(M(v)) && X instanceof HTMLElement)) != null ? F : null;
  });
  ol($, P);
  let E = B(() => b.value ? !0 : g.value), T = B(() => {
    var q, W, F;
    return (F = Array.from((W = (q = w.value) == null ? void 0 : q.querySelectorAll("[data-headlessui-portal]")) != null ? W : []).find((X) => X.contains(M(v)) && X instanceof HTMLElement)) != null ? F : null;
  });
  ol(T, E), ea({ type: "Dialog", enabled: B(() => m.value === 0), element: c, onUpdate: (q, W) => {
    if (W === "Dialog")
      return ie(q, { [so.Add]: () => i.value += 1, [so.Remove]: () => i.value -= 1 });
  } });
  let D = Mt({ name: "DialogDescription", slot: B(() => ({ open: f.value })) }), R = C(null), N = { titleId: R, panelRef: C(null), dialogState: m, setTitleId(q) {
    R.value !== q && (R.value = q);
  }, close() {
    t("close", !1);
  } };
  ue(no, N);
  function A() {
    var q, W, F;
    return [...Array.from((W = (q = w.value) == null ? void 0 : q.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? W : []).filter((X) => !(X === document.body || X === document.head || !(X instanceof HTMLElement) || X.contains(M(v)) || N.panelRef.value && X.contains(N.panelRef.value))), (F = N.panelRef.value) != null ? F : c.value];
  }
  let Z = B(() => !(!g.value || b.value));
  El(() => A(), (q, W) => {
    N.close(), ho(() => W == null ? void 0 : W.focus());
  }, Z);
  let K = B(() => !(b.value || m.value !== 0));
  xo((n = w.value) == null ? void 0 : n.defaultView, "keydown", (q) => {
    K.value && (q.defaultPrevented || q.key === le.Escape && (q.preventDefault(), q.stopPropagation(), N.close()));
  });
  let H = B(() => !(x.value || m.value !== 0 || h));
  return pa(w, H, (q) => {
    var W;
    return { containers: [...(W = q.containers) != null ? W : [], A] };
  }), de((q) => {
    if (m.value !== 0)
      return;
    let W = M(c);
    if (!W)
      return;
    let F = new ResizeObserver((X) => {
      for (let Pe of X) {
        let fe = Pe.target.getBoundingClientRect();
        fe.x === 0 && fe.y === 0 && fe.width === 0 && fe.height === 0 && N.close();
      }
    });
    F.observe(W), q(() => F.disconnect());
  }), () => {
    let { id: q, open: W, initialFocus: F, ...X } = e, Pe = { ...o, ref: c, id: q, role: "dialog", "aria-modal": m.value === 0 ? !0 : void 0, "aria-labelledby": R.value, "aria-describedby": D.value }, fe = { open: m.value === 0 };
    return te(lo, { force: !0 }, () => [te(Hl, () => te(Qn, { target: c.value }, () => te(lo, { force: !1 }, () => te(at, { initialFocus: F, containers: A, features: g.value ? ie(y.value, { parent: at.features.RestoreFocus, leaf: at.features.All & ~at.features.FocusLock }) : at.features.None }, () => ee({ ourProps: Pe, theirProps: X, slot: fe, attrs: o, slots: l, visible: m.value === 0, features: Ce.RenderStrategy | Ce.Static, name: "Dialog" }))))), te(Ie, { features: Oe.Hidden, ref: v })]);
  };
} });
L({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${ae()}` } }, setup(e, { attrs: t, slots: o }) {
  let l = mt("DialogOverlay");
  function s(n) {
    n.target === n.currentTarget && (n.preventDefault(), n.stopPropagation(), l.close());
  }
  return () => {
    let { id: n, ...a } = e;
    return ee({ ourProps: { id: n, "aria-hidden": !0, onClick: s }, theirProps: a, slot: { open: l.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogOverlay" });
  };
} });
L({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${ae()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: l }) {
  let s = mt("DialogBackdrop"), n = C(null);
  return l({ el: n, $el: n }), G(() => {
    if (s.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: a, ...i } = e, u = { id: a, ref: n, "aria-hidden": !0 };
    return te(lo, { force: !0 }, () => te(Hl, () => ee({ ourProps: u, theirProps: { ...t, ...i }, slot: { open: s.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogBackdrop" })));
  };
} });
let It = L({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${ae()}` } }, setup(e, { attrs: t, slots: o, expose: l }) {
  let s = mt("DialogPanel");
  l({ el: s.panelRef, $el: s.panelRef });
  function n(a) {
    a.stopPropagation();
  }
  return () => {
    let { id: a, ...i } = e, u = { id: a, ref: s.panelRef, onClick: n };
    return ee({ ourProps: u, theirProps: i, slot: { open: s.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogPanel" });
  };
} }), Gl = L({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${ae()}` } }, setup(e, { attrs: t, slots: o }) {
  let l = mt("DialogTitle");
  return G(() => {
    l.setTitleId(e.id), ne(() => l.setTitleId(null));
  }), () => {
    let { id: s, ...n } = e;
    return ee({ ourProps: { id: s }, theirProps: n, slot: { open: l.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogTitle" });
  };
} });
var da = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(da || {});
let Zl = Symbol("DisclosureContext");
function ko(e) {
  let t = pe(Zl, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, ko), o;
  }
  return t;
}
let Kl = Symbol("DisclosurePanelContext");
function ca() {
  return pe(Kl, null);
}
let ll = L({ name: "Disclosure", props: { as: { type: [Object, String], default: "template" }, defaultOpen: { type: [Boolean], default: !1 } }, setup(e, { slots: t, attrs: o }) {
  let l = C(e.defaultOpen ? 0 : 1), s = C(null), n = C(null), a = { buttonId: C(null), panelId: C(null), disclosureState: l, panel: s, button: n, toggleDisclosure() {
    l.value = ie(l.value, { [0]: 1, [1]: 0 });
  }, closeDisclosure() {
    l.value !== 1 && (l.value = 1);
  }, close(i) {
    a.closeDisclosure();
    let u = (() => i ? i instanceof HTMLElement ? i : i.value instanceof HTMLElement ? M(i) : M(a.button) : M(a.button))();
    u == null || u.focus();
  } };
  return ue(Zl, a), wo(B(() => ie(l.value, { [0]: oe.Open, [1]: oe.Closed }))), () => {
    let { defaultOpen: i, ...u } = e, f = { open: l.value === 0, close: a.close };
    return ee({ theirProps: u, ourProps: {}, slot: f, slots: t, attrs: o, name: "Disclosure" });
  };
} }), sl = L({ name: "DisclosureButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-disclosure-button-${ae()}` } }, setup(e, { attrs: t, slots: o, expose: l }) {
  let s = ko("DisclosureButton");
  G(() => {
    s.buttonId.value = e.id;
  }), ne(() => {
    s.buttonId.value = null;
  });
  let n = ca(), a = B(() => n === null ? !1 : n.value === s.panelId.value), i = C(null);
  l({ el: i, $el: i }), a.value || de(() => {
    s.button.value = i.value;
  });
  let u = _o(B(() => ({ as: e.as, type: t.type })), i);
  function f() {
    var w;
    e.disabled || (a.value ? (s.toggleDisclosure(), (w = M(s.button)) == null || w.focus()) : s.toggleDisclosure());
  }
  function c(w) {
    var m;
    if (!e.disabled)
      if (a.value)
        switch (w.key) {
          case le.Space:
          case le.Enter:
            w.preventDefault(), w.stopPropagation(), s.toggleDisclosure(), (m = M(s.button)) == null || m.focus();
            break;
        }
      else
        switch (w.key) {
          case le.Space:
          case le.Enter:
            w.preventDefault(), w.stopPropagation(), s.toggleDisclosure();
            break;
        }
  }
  function v(w) {
    switch (w.key) {
      case le.Space:
        w.preventDefault();
        break;
    }
  }
  return () => {
    let w = { open: s.disclosureState.value === 0 }, { id: m, ...g } = e, b = a.value ? { ref: i, type: u.value, onClick: f, onKeydown: c } : { id: m, ref: i, type: u.value, "aria-expanded": e.disabled ? void 0 : s.disclosureState.value === 0, "aria-controls": M(s.panel) ? s.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onClick: f, onKeydown: c, onKeyup: v };
    return ee({ ourProps: b, theirProps: g, slot: w, attrs: t, slots: o, name: "DisclosureButton" });
  };
} }), nl = L({ name: "DisclosurePanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-disclosure-panel-${ae()}` } }, setup(e, { attrs: t, slots: o, expose: l }) {
  let s = ko("DisclosurePanel");
  G(() => {
    s.panelId.value = e.id;
  }), ne(() => {
    s.panelId.value = null;
  }), l({ el: s.panel, $el: s.panel }), ue(Kl, s.panelId);
  let n = lt(), a = B(() => n !== null ? (n.value & oe.Open) === oe.Open : s.disclosureState.value === 0);
  return () => {
    let i = { open: s.disclosureState.value === 0, close: s.close }, { id: u, ...f } = e, c = { id: u, ref: s.panel };
    return ee({ ourProps: c, theirProps: f, slot: i, attrs: t, slots: o, features: Ce.RenderStrategy | Ce.Static, visible: a.value, name: "DisclosurePanel" });
  };
} });
var fa = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(fa || {});
let Yl = Symbol("PopoverContext");
function jt(e) {
  let t = pe(Yl, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <${Rt.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, jt), o;
  }
  return t;
}
let Xl = Symbol("PopoverGroupContext");
function Ql() {
  return pe(Xl, null);
}
let Jl = Symbol("PopoverPanelContext");
function va() {
  return pe(Jl, null);
}
let Rt = L({ name: "Popover", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: o, expose: l }) {
  var s;
  let n = C(null);
  l({ el: n, $el: n });
  let a = C(1), i = C(null), u = C(null), f = C(null), c = C(null), v = B(() => ge(n)), w = B(() => {
    var x, P;
    if (!M(i) || !M(c))
      return !1;
    for (let A of document.querySelectorAll("body > *"))
      if (Number(A == null ? void 0 : A.contains(M(i))) ^ Number(A == null ? void 0 : A.contains(M(c))))
        return !0;
    let $ = zt(), E = $.indexOf(M(i)), T = (E + $.length - 1) % $.length, D = (E + 1) % $.length, R = $[T], N = $[D];
    return !((x = M(c)) != null && x.contains(R)) && !((P = M(c)) != null && P.contains(N));
  }), m = { popoverState: a, buttonId: C(null), panelId: C(null), panel: c, button: i, isPortalled: w, beforePanelSentinel: u, afterPanelSentinel: f, togglePopover() {
    a.value = ie(a.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    a.value !== 1 && (a.value = 1);
  }, close(x) {
    m.closePopover();
    let P = (() => x ? x instanceof HTMLElement ? x : x.value instanceof HTMLElement ? M(x) : M(m.button) : M(m.button))();
    P == null || P.focus();
  } };
  ue(Yl, m), wo(B(() => ie(a.value, { [0]: oe.Open, [1]: oe.Closed })));
  let g = { buttonId: m.buttonId, panelId: m.panelId, close() {
    m.closePopover();
  } }, b = Ql(), h = b == null ? void 0 : b.registerPopover;
  function y() {
    var x, P, $, E;
    return (E = b == null ? void 0 : b.isFocusWithinPopoverGroup()) != null ? E : ((x = v.value) == null ? void 0 : x.activeElement) && (((P = M(i)) == null ? void 0 : P.contains(v.value.activeElement)) || (($ = M(c)) == null ? void 0 : $.contains(v.value.activeElement)));
  }
  return de(() => h == null ? void 0 : h(g)), xo((s = v.value) == null ? void 0 : s.defaultView, "focus", (x) => {
    var P, $;
    a.value === 0 && (y() || i && c && x.target !== window && ((P = M(m.beforePanelSentinel)) != null && P.contains(x.target) || ($ = M(m.afterPanelSentinel)) != null && $.contains(x.target) || m.closePopover()));
  }, !0), El([i, c], (x, P) => {
    var $;
    m.closePopover(), Ll(P, $o.Loose) || (x.preventDefault(), ($ = M(i)) == null || $.focus());
  }, B(() => a.value === 0)), () => {
    let x = { open: a.value === 0, close: m.close };
    return ee({ theirProps: e, ourProps: { ref: n }, slot: x, slots: t, attrs: o, name: "Popover" });
  };
} }), Co = L({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-popover-button-${ae()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: l }) {
  let s = jt("PopoverButton"), n = B(() => ge(s.button));
  l({ el: s.button, $el: s.button }), G(() => {
    s.buttonId.value = e.id;
  }), ne(() => {
    s.buttonId.value = null;
  });
  let a = Ql(), i = a == null ? void 0 : a.closeOthers, u = va(), f = B(() => u === null ? !1 : u.value === s.panelId.value), c = C(null), v = `headlessui-focus-sentinel-${ae()}`;
  f.value || de(() => {
    s.button.value = c.value;
  });
  let w = _o(B(() => ({ as: e.as, type: t.type })), c);
  function m(y) {
    var x, P, $, E, T;
    if (f.value) {
      if (s.popoverState.value === 1)
        return;
      switch (y.key) {
        case le.Space:
        case le.Enter:
          y.preventDefault(), (P = (x = y.target).click) == null || P.call(x), s.closePopover(), ($ = M(s.button)) == null || $.focus();
          break;
      }
    } else
      switch (y.key) {
        case le.Space:
        case le.Enter:
          y.preventDefault(), y.stopPropagation(), s.popoverState.value === 1 && (i == null || i(s.buttonId.value)), s.togglePopover();
          break;
        case le.Escape:
          if (s.popoverState.value !== 0)
            return i == null ? void 0 : i(s.buttonId.value);
          if (!M(s.button) || (E = n.value) != null && E.activeElement && !((T = M(s.button)) != null && T.contains(n.value.activeElement)))
            return;
          y.preventDefault(), y.stopPropagation(), s.closePopover();
          break;
      }
  }
  function g(y) {
    f.value || y.key === le.Space && y.preventDefault();
  }
  function b(y) {
    var x, P;
    e.disabled || (f.value ? (s.closePopover(), (x = M(s.button)) == null || x.focus()) : (y.preventDefault(), y.stopPropagation(), s.popoverState.value === 1 && (i == null || i(s.buttonId.value)), s.togglePopover(), (P = M(s.button)) == null || P.focus()));
  }
  function h(y) {
    y.preventDefault(), y.stopPropagation();
  }
  return () => {
    let y = s.popoverState.value === 0, x = { open: y }, { id: P, ...$ } = e, E = f.value ? { ref: c, type: w.value, onKeydown: m, onClick: b } : { ref: c, id: P, type: w.value, "aria-expanded": e.disabled ? void 0 : s.popoverState.value === 0, "aria-controls": M(s.panel) ? s.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onKeydown: m, onKeyup: g, onClick: b, onMousedown: h }, T = Vo();
    function D() {
      let R = M(s.panel);
      if (!R)
        return;
      function N() {
        ie(T.value, { [be.Forwards]: () => me(R, se.First), [be.Backwards]: () => me(R, se.Last) }) === Ze.Error && me(zt().filter((A) => A.dataset.headlessuiFocusGuard !== "true"), ie(T.value, { [be.Forwards]: se.Next, [be.Backwards]: se.Previous }), { relativeTo: M(s.button) });
      }
      N();
    }
    return te(I, [ee({ ourProps: E, theirProps: { ...t, ...$ }, slot: x, attrs: t, slots: o, name: "PopoverButton" }), y && !f.value && s.isPortalled.value && te(Ie, { id: v, features: Oe.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: D })]);
  };
} });
L({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(e, { attrs: t, slots: o }) {
  let l = jt("PopoverOverlay"), s = `headlessui-popover-overlay-${ae()}`, n = lt(), a = B(() => n !== null ? (n.value & oe.Open) === oe.Open : l.popoverState.value === 0);
  function i() {
    l.closePopover();
  }
  return () => {
    let u = { open: l.popoverState.value === 0 };
    return ee({ ourProps: { id: s, "aria-hidden": !0, onClick: i }, theirProps: e, slot: u, attrs: t, slots: o, features: Ce.RenderStrategy | Ce.Static, visible: a.value, name: "PopoverOverlay" });
  };
} });
let So = L({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-popover-panel-${ae()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: l }) {
  let { focus: s } = e, n = jt("PopoverPanel"), a = B(() => ge(n.panel)), i = `headlessui-focus-sentinel-before-${ae()}`, u = `headlessui-focus-sentinel-after-${ae()}`;
  l({ el: n.panel, $el: n.panel }), G(() => {
    n.panelId.value = e.id;
  }), ne(() => {
    n.panelId.value = null;
  }), ue(Jl, n.panelId), de(() => {
    var h, y;
    if (!s || n.popoverState.value !== 0 || !n.panel)
      return;
    let x = (h = a.value) == null ? void 0 : h.activeElement;
    (y = M(n.panel)) != null && y.contains(x) || me(M(n.panel), se.First);
  });
  let f = lt(), c = B(() => f !== null ? (f.value & oe.Open) === oe.Open : n.popoverState.value === 0);
  function v(h) {
    var y, x;
    switch (h.key) {
      case le.Escape:
        if (n.popoverState.value !== 0 || !M(n.panel) || a.value && !((y = M(n.panel)) != null && y.contains(a.value.activeElement)))
          return;
        h.preventDefault(), h.stopPropagation(), n.closePopover(), (x = M(n.button)) == null || x.focus();
        break;
    }
  }
  function w(h) {
    var y, x, P, $, E;
    let T = h.relatedTarget;
    T && M(n.panel) && ((y = M(n.panel)) != null && y.contains(T) || (n.closePopover(), ((P = (x = M(n.beforePanelSentinel)) == null ? void 0 : x.contains) != null && P.call(x, T) || (E = ($ = M(n.afterPanelSentinel)) == null ? void 0 : $.contains) != null && E.call($, T)) && T.focus({ preventScroll: !0 })));
  }
  let m = Vo();
  function g() {
    let h = M(n.panel);
    if (!h)
      return;
    function y() {
      ie(m.value, { [be.Forwards]: () => {
        var x;
        me(h, se.First) === Ze.Error && ((x = M(n.afterPanelSentinel)) == null || x.focus());
      }, [be.Backwards]: () => {
        var x;
        (x = M(n.button)) == null || x.focus({ preventScroll: !0 });
      } });
    }
    y();
  }
  function b() {
    let h = M(n.panel);
    if (!h)
      return;
    function y() {
      ie(m.value, { [be.Forwards]: () => {
        let x = M(n.button), P = M(n.panel);
        if (!x)
          return;
        let $ = zt(), E = $.indexOf(x), T = $.slice(0, E + 1), D = [...$.slice(E + 1), ...T];
        for (let R of D.slice())
          if (R.dataset.headlessuiFocusGuard === "true" || P != null && P.contains(R)) {
            let N = D.indexOf(R);
            N !== -1 && D.splice(N, 1);
          }
        me(D, se.First, { sorted: !1 });
      }, [be.Backwards]: () => {
        var x;
        me(h, se.Previous) === Ze.Error && ((x = M(n.button)) == null || x.focus());
      } });
    }
    y();
  }
  return () => {
    let h = { open: n.popoverState.value === 0, close: n.close }, { id: y, focus: x, ...P } = e, $ = { ref: n.panel, id: y, onKeydown: v, onFocusout: s && n.popoverState.value === 0 ? w : void 0, tabIndex: -1 };
    return ee({ ourProps: $, theirProps: { ...t, ...P }, attrs: t, slot: h, slots: { ...o, default: (...E) => {
      var T;
      return [te(I, [c.value && n.isPortalled.value && te(Ie, { id: i, ref: n.beforePanelSentinel, features: Oe.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: g }), (T = o.default) == null ? void 0 : T.call(o, ...E), c.value && n.isPortalled.value && te(Ie, { id: u, ref: n.afterPanelSentinel, features: Oe.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: b })])];
    } }, features: Ce.RenderStrategy | Ce.Static, visible: c.value, name: "PopoverPanel" });
  };
} });
L({ name: "PopoverGroup", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: o, expose: l }) {
  let s = C(null), n = Vl([]), a = B(() => ge(s));
  l({ el: s, $el: s });
  function i(v) {
    let w = n.value.indexOf(v);
    w !== -1 && n.value.splice(w, 1);
  }
  function u(v) {
    return n.value.push(v), () => {
      i(v);
    };
  }
  function f() {
    var v;
    let w = a.value;
    if (!w)
      return !1;
    let m = w.activeElement;
    return (v = M(s)) != null && v.contains(m) ? !0 : n.value.some((g) => {
      var b, h;
      return ((b = w.getElementById(g.buttonId.value)) == null ? void 0 : b.contains(m)) || ((h = w.getElementById(g.panelId.value)) == null ? void 0 : h.contains(m));
    });
  }
  function c(v) {
    for (let w of n.value)
      w.buttonId.value !== v && w.close();
  }
  return ue(Xl, { registerPopover: u, unregisterPopover: i, isFocusWithinPopoverGroup: f, closeOthers: c }), () => ee({ ourProps: { ref: s }, theirProps: e, slot: {}, attrs: t, slots: o, name: "PopoverGroup" });
} });
let es = Symbol("LabelContext");
function ts() {
  let e = pe(es, null);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, ts), t;
  }
  return e;
}
function Po({ slot: e = {}, name: t = "Label", props: o = {} } = {}) {
  let l = C([]);
  function s(n) {
    return l.value.push(n), () => {
      let a = l.value.indexOf(n);
      a !== -1 && l.value.splice(a, 1);
    };
  }
  return ue(es, { register: s, slot: e, name: t, props: o }), B(() => l.value.length > 0 ? l.value.join(" ") : void 0);
}
let os = L({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-label-${ae()}` } }, setup(e, { slots: t, attrs: o }) {
  let l = ts();
  return G(() => ne(l.register(e.id))), () => {
    let { name: s = "Label", slot: n = {}, props: a = {} } = l, { id: i, passive: u, ...f } = e, c = { ...Object.entries(a).reduce((v, [w, m]) => Object.assign(v, { [w]: k(m) }), {}), id: i };
    return u && (delete c.onClick, delete c.htmlFor, delete f.onClick), ee({ ourProps: c, theirProps: f, slot: n, attrs: o, slots: t, name: s });
  };
} });
function ha(e, t) {
  return e === t;
}
let ls = Symbol("RadioGroupContext");
function ss(e) {
  let t = pe(ls, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, ss), o;
  }
  return t;
}
let ma = L({ name: "RadioGroup", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "div" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => ha }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-radiogroup-${ae()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: o, slots: l, expose: s }) {
  let n = C(null), a = C([]), i = Po({ name: "RadioGroupLabel" }), u = Mt({ name: "RadioGroupDescription" });
  s({ el: n, $el: n });
  let [f, c] = Dl(B(() => e.modelValue), (g) => t("update:modelValue", g), B(() => e.defaultValue)), v = { options: a, value: f, disabled: B(() => e.disabled), firstOption: B(() => a.value.find((g) => !g.propsRef.disabled)), containsCheckedOption: B(() => a.value.some((g) => v.compare(ze(g.propsRef.value), ze(e.modelValue)))), compare(g, b) {
    if (typeof e.by == "string") {
      let h = e.by;
      return (g == null ? void 0 : g[h]) === (b == null ? void 0 : b[h]);
    }
    return e.by(g, b);
  }, change(g) {
    var b;
    if (e.disabled || v.compare(ze(f.value), ze(g)))
      return !1;
    let h = (b = a.value.find((y) => v.compare(ze(y.propsRef.value), ze(g)))) == null ? void 0 : b.propsRef;
    return h != null && h.disabled ? !1 : (c(g), !0);
  }, registerOption(g) {
    a.value.push(g), a.value = Tl(a.value, (b) => b.element);
  }, unregisterOption(g) {
    let b = a.value.findIndex((h) => h.id === g);
    b !== -1 && a.value.splice(b, 1);
  } };
  ue(ls, v), Rn({ container: B(() => M(n)), accept(g) {
    return g.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : g.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(g) {
    g.setAttribute("role", "none");
  } });
  function w(g) {
    if (!n.value || !n.value.contains(g.target))
      return;
    let b = a.value.filter((h) => h.propsRef.disabled === !1).map((h) => h.element);
    switch (g.key) {
      case le.Enter:
        Al(g.currentTarget);
        break;
      case le.ArrowLeft:
      case le.ArrowUp:
        if (g.preventDefault(), g.stopPropagation(), me(b, se.Previous | se.WrapAround) === Ze.Success) {
          let h = a.value.find((y) => {
            var x;
            return y.element === ((x = ge(n)) == null ? void 0 : x.activeElement);
          });
          h && v.change(h.propsRef.value);
        }
        break;
      case le.ArrowRight:
      case le.ArrowDown:
        if (g.preventDefault(), g.stopPropagation(), me(b, se.Next | se.WrapAround) === Ze.Success) {
          let h = a.value.find((y) => {
            var x;
            return y.element === ((x = ge(y.element)) == null ? void 0 : x.activeElement);
          });
          h && v.change(h.propsRef.value);
        }
        break;
      case le.Space:
        {
          g.preventDefault(), g.stopPropagation();
          let h = a.value.find((y) => {
            var x;
            return y.element === ((x = ge(y.element)) == null ? void 0 : x.activeElement);
          });
          h && v.change(h.propsRef.value);
        }
        break;
    }
  }
  let m = B(() => {
    var g;
    return (g = M(n)) == null ? void 0 : g.closest("form");
  });
  return G(() => {
    Q([m], () => {
      if (!m.value || e.defaultValue === void 0)
        return;
      function g() {
        v.change(e.defaultValue);
      }
      return m.value.addEventListener("reset", g), () => {
        var b;
        (b = m.value) == null || b.removeEventListener("reset", g);
      };
    }, { immediate: !0 });
  }), () => {
    let { disabled: g, name: b, id: h, ...y } = e, x = { ref: n, id: h, role: "radiogroup", "aria-labelledby": i.value, "aria-describedby": u.value, onKeydown: w };
    return te(I, [...b != null && f.value != null ? Bl({ [b]: f.value }).map(([P, $]) => te(Ie, Pl({ features: Oe.Hidden, key: P, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: P, value: $ }))) : [], ee({ ourProps: x, theirProps: { ...o, ...Bt(y, ["modelValue", "defaultValue"]) }, slot: {}, attrs: o, slots: l, name: "RadioGroup" })]);
  };
} });
var ba = ((e) => (e[e.Empty = 1] = "Empty", e[e.Active = 2] = "Active", e))(ba || {});
let ga = L({ name: "RadioGroupOption", props: { as: { type: [Object, String], default: "div" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-radiogroup-option-${ae()}` } }, setup(e, { attrs: t, slots: o, expose: l }) {
  let s = ss("RadioGroupOption"), n = Po({ name: "RadioGroupLabel" }), a = Mt({ name: "RadioGroupDescription" }), i = C(null), u = B(() => ({ value: e.value, disabled: e.disabled })), f = C(1);
  l({ el: i, $el: i }), G(() => s.registerOption({ id: e.id, element: i, propsRef: u })), ne(() => s.unregisterOption(e.id));
  let c = B(() => {
    var y;
    return ((y = s.firstOption.value) == null ? void 0 : y.id) === e.id;
  }), v = B(() => s.disabled.value || e.disabled), w = B(() => s.compare(ze(s.value.value), ze(e.value))), m = B(() => v.value ? -1 : w.value || !s.containsCheckedOption.value && c.value ? 0 : -1);
  function g() {
    var y;
    s.change(e.value) && (f.value |= 2, (y = i.value) == null || y.focus());
  }
  function b() {
    f.value |= 2;
  }
  function h() {
    f.value &= -3;
  }
  return () => {
    let { id: y, value: x, disabled: P, ...$ } = e, E = { checked: w.value, disabled: v.value, active: Boolean(f.value & 2) }, T = { id: y, ref: i, role: "radio", "aria-checked": w.value ? "true" : "false", "aria-labelledby": n.value, "aria-describedby": a.value, "aria-disabled": v.value ? !0 : void 0, tabIndex: m.value, onClick: v.value ? void 0 : g, onFocus: v.value ? void 0 : b, onBlur: v.value ? void 0 : h };
    return ee({ ourProps: T, theirProps: $, slot: E, attrs: t, slots: o, name: "RadioGroupOption" });
  };
} }), al = os, ya = oa, ns = Symbol("GroupContext"), wa = L({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: o }) {
  let l = C(null), s = Po({ name: "SwitchLabel", props: { htmlFor: B(() => {
    var a;
    return (a = l.value) == null ? void 0 : a.id;
  }), onClick(a) {
    l.value && (a.currentTarget.tagName === "LABEL" && a.preventDefault(), l.value.click(), l.value.focus({ preventScroll: !0 }));
  } } }), n = Mt({ name: "SwitchDescription" });
  return ue(ns, { switchRef: l, labelledby: s, describedby: n }), () => ee({ theirProps: e, ourProps: {}, slot: {}, slots: t, attrs: o, name: "SwitchGroup" });
} }), _a = L({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: !0 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-switch-${ae()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: o, slots: l, expose: s }) {
  let n = pe(ns, null), [a, i] = Dl(B(() => e.modelValue), (h) => t("update:modelValue", h), B(() => e.defaultChecked));
  function u() {
    i(!a.value);
  }
  let f = C(null), c = n === null ? f : n.switchRef, v = _o(B(() => ({ as: e.as, type: o.type })), c);
  s({ el: c, $el: c });
  function w(h) {
    h.preventDefault(), u();
  }
  function m(h) {
    h.key === le.Space ? (h.preventDefault(), u()) : h.key === le.Enter && Al(h.currentTarget);
  }
  function g(h) {
    h.preventDefault();
  }
  let b = B(() => {
    var h, y;
    return (y = (h = M(c)) == null ? void 0 : h.closest) == null ? void 0 : y.call(h, "form");
  });
  return G(() => {
    Q([b], () => {
      if (!b.value || e.defaultChecked === void 0)
        return;
      function h() {
        i(e.defaultChecked);
      }
      return b.value.addEventListener("reset", h), () => {
        var y;
        (y = b.value) == null || y.removeEventListener("reset", h);
      };
    }, { immediate: !0 });
  }), () => {
    let { id: h, name: y, value: x, ...P } = e, $ = { checked: a.value }, E = { id: h, ref: c, role: "switch", type: v.value, tabIndex: 0, "aria-checked": a.value, "aria-labelledby": n == null ? void 0 : n.labelledby.value, "aria-describedby": n == null ? void 0 : n.describedby.value, onClick: w, onKeyup: m, onKeypress: g };
    return te(I, [y != null && a.value != null ? te(Ie, Pl({ features: Oe.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: a.value, name: y, value: x })) : null, ee({ ourProps: E, theirProps: { ...o, ...Bt(P, ["modelValue", "defaultChecked"]) }, slot: $, attrs: o, slots: l, name: "Switch" })]);
  };
} }), $a = os;
function Va(e) {
  let t = { called: !1 };
  return (...o) => {
    if (!t.called)
      return t.called = !0, e(...o);
  };
}
function Jt(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function kt(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var ao = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(ao || {});
function xa(e, t) {
  let o = At();
  if (!e)
    return o.dispose;
  let { transitionDuration: l, transitionDelay: s } = getComputedStyle(e), [n, a] = [l, s].map((i) => {
    let [u = 0] = i.split(",").filter(Boolean).map((f) => f.includes("ms") ? parseFloat(f) : parseFloat(f) * 1e3).sort((f, c) => c - f);
    return u;
  });
  return n !== 0 ? o.setTimeout(() => t("finished"), n + a) : t("finished"), o.add(() => t("cancelled")), o.dispose;
}
function rl(e, t, o, l, s, n) {
  let a = At(), i = n !== void 0 ? Va(n) : () => {
  };
  return kt(e, ...s), Jt(e, ...t, ...o), a.nextFrame(() => {
    kt(e, ...o), Jt(e, ...l), a.add(xa(e, (u) => (kt(e, ...l, ...t), Jt(e, ...s), i(u))));
  }), a.add(() => kt(e, ...t, ...o, ...l, ...s)), a.add(() => i("cancelled")), a.dispose;
}
function He(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Oo = Symbol("TransitionContext");
var ka = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(ka || {});
function Ca() {
  return pe(Oo, null) !== null;
}
function Sa() {
  let e = pe(Oo, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Pa() {
  let e = pe(Lo, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let Lo = Symbol("NestingContext");
function Ft(e) {
  return "children" in e ? Ft(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function as(e) {
  let t = C([]), o = C(!1);
  G(() => o.value = !0), ne(() => o.value = !1);
  function l(n, a = Me.Hidden) {
    let i = t.value.findIndex(({ id: u }) => u === n);
    i !== -1 && (ie(a, { [Me.Unmount]() {
      t.value.splice(i, 1);
    }, [Me.Hidden]() {
      t.value[i].state = "hidden";
    } }), !Ft(t) && o.value && (e == null || e()));
  }
  function s(n) {
    let a = t.value.find(({ id: i }) => i === n);
    return a ? a.state !== "visible" && (a.state = "visible") : t.value.push({ id: n, state: "visible" }), () => l(n, Me.Unmount);
  }
  return { children: t, register: s, unregister: l };
}
let rs = Ce.RenderStrategy, je = L({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: o, slots: l, expose: s }) {
  let n = C(0);
  function a() {
    n.value |= oe.Opening, t("beforeEnter");
  }
  function i() {
    n.value &= ~oe.Opening, t("afterEnter");
  }
  function u() {
    n.value |= oe.Closing, t("beforeLeave");
  }
  function f() {
    n.value &= ~oe.Closing, t("afterLeave");
  }
  if (!Ca() && An())
    return () => te(bt, { ...e, onBeforeEnter: a, onAfterEnter: i, onBeforeLeave: u, onAfterLeave: f }, l);
  let c = C(null), v = C("visible"), w = B(() => e.unmount ? Me.Unmount : Me.Hidden);
  s({ el: c, $el: c });
  let { show: m, appear: g } = Sa(), { register: b, unregister: h } = Pa(), y = { value: !0 }, x = ae(), P = { value: !1 }, $ = as(() => {
    !P.value && v.value !== "hidden" && (v.value = "hidden", h(x), f());
  });
  G(() => {
    let H = b(x);
    ne(H);
  }), de(() => {
    if (w.value === Me.Hidden && x) {
      if (m && v.value !== "visible") {
        v.value = "visible";
        return;
      }
      ie(v.value, { hidden: () => h(x), visible: () => b(x) });
    }
  });
  let E = He(e.enter), T = He(e.enterFrom), D = He(e.enterTo), R = He(e.entered), N = He(e.leave), A = He(e.leaveFrom), Z = He(e.leaveTo);
  G(() => {
    de(() => {
      if (v.value === "visible") {
        let H = M(c);
        if (H instanceof Comment && H.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function K(H) {
    let q = y.value && !g.value, W = M(c);
    !W || !(W instanceof HTMLElement) || q || (P.value = !0, m.value && a(), m.value || u(), H(m.value ? rl(W, E, T, D, R, (F) => {
      P.value = !1, F === ao.Finished && i();
    }) : rl(W, N, A, Z, R, (F) => {
      P.value = !1, F === ao.Finished && (Ft($) || (v.value = "hidden", h(x), f()));
    })));
  }
  return G(() => {
    Q([m], (H, q, W) => {
      K(W), y.value = !1;
    }, { immediate: !0 });
  }), ue(Lo, $), wo(B(() => ie(v.value, { visible: oe.Open, hidden: oe.Closed }) | n.value)), () => {
    let { appear: H, show: q, enter: W, enterFrom: F, enterTo: X, entered: Pe, leave: fe, leaveFrom: st, leaveTo: _t, ...Te } = e, Ye = { ref: c }, Ee = { ...Te, ...g && m && ht.isServer ? { class: O([o.class, Te.class, ...E, ...T]) } : {} };
    return ee({ theirProps: Ee, ourProps: Ye, slot: {}, slots: l, attrs: o, features: rs, visible: v.value === "visible", name: "TransitionChild" });
  };
} }), Oa = je, bt = L({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: o, slots: l }) {
  let s = lt(), n = B(() => e.show === null && s !== null ? (s.value & oe.Open) === oe.Open : e.show);
  de(() => {
    if (![!0, !1].includes(n.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let a = C(n.value ? "visible" : "hidden"), i = as(() => {
    a.value = "hidden";
  }), u = C(!0), f = { show: n, appear: B(() => e.appear || !u.value) };
  return G(() => {
    de(() => {
      u.value = !1, n.value ? a.value = "visible" : Ft(i) || (a.value = "hidden");
    });
  }), ue(Lo, i), ue(Oo, f), () => {
    let c = Bt(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), v = { unmount: e.unmount };
    return ee({ ourProps: { ...v, as: "template" }, theirProps: {}, slot: {}, slots: { ...l, default: () => [te(Oa, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...o, ...v, ...c }, l.default)] }, attrs: {}, features: rs, visible: a.value === "visible", name: "Transition" });
  };
} });
const La = {
  key: 0,
  class: "po-text-sm po-font-normal po-text-slate-400 po-select-none po-block po-text-left po-pt-5"
}, Ta = { class: "po-grid po-grid-cols-3" }, Ea = { class: "po-bg-white hover:po-bg-slate-200 po-rounded-xl po-p-2 po-transition-colors po-duration-150 po-ease-in" }, Ba = ["href", "target"], za = { class: "po-flex po-w-14 po-h-14 po-items-center po-justify-center po-duration-100 po-ease-in-out po-overflow-hidden" }, Ma = ["innerHTML"], Aa = { class: "po-text-slate-500 po-font-normal po-text-sm po-text-center" }, il = /* @__PURE__ */ L({
  __name: "appList",
  props: {
    list: { default: () => [] },
    openInNewTab: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, o) => (p(!0), d(I, null, U(t.list, (l) => (p(), d("div", null, [
      l.groupName.length > 0 ? (p(), d("span", La, V(l.groupName), 1)) : _("", !0),
      r("ul", Ta, [
        (p(!0), d(I, null, U(l.apps, (s) => (p(), d("li", Ea, [
          r("a", {
            href: s.url,
            target: t.openInNewTab ? "_blank" : "_self",
            class: "po-flex po-flex-col po-group po-justify-center po-items-center"
          }, [
            r("span", za, [
              r("span", {
                class: "po-w-9",
                innerHTML: s.icon
              }, null, 8, Ma)
            ]),
            r("span", Aa, V(s.name), 1)
          ], 8, Ba)
        ]))), 256))
      ])
    ]))), 256));
  }
}), Da = {
  name: "PoAppTray"
}, Ia = /* @__PURE__ */ L({
  ...Da,
  props: {
    appList: { default: null },
    justApps: { type: Boolean, default: !1 },
    openInNewTab: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, o = ["", "Internal"], l = B(() => {
      const s = [];
      return t.appList && o.forEach((n) => {
        const a = t.appList.filter((i) => i.group === n);
        a.length > 0 && s.push({
          groupName: n,
          apps: a
        });
      }), s;
    });
    return (s, n) => s.justApps ? (p(), j(il, {
      key: 1,
      list: l.value,
      "open-in-new-tab": s.openInNewTab
    }, null, 8, ["list", "open-in-new-tab"])) : (p(), j(k(Rt), { key: 0 }, {
      default: z(({ open: a }) => [
        S(k(Co), {
          class: O([a ? "" : "po-text-opacity-90", "po-block po-w-6 po-text-slate-100 genie-effect po-z-50 po-outline-none"])
        }, {
          default: z(() => [
            S(k(un))
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
            S(k(So), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
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
}), ja = {
  key: 0,
  class: "po-absolute po-right-0 po-w-3 po-h-3 po-bg-mpao-orange po-rounded-full po-border-2 po-border-mpao-blue"
}, Ra = {
  key: 0,
  class: "po-space-y-2"
}, Fa = ["onClick"], Na = { class: "po-flex po-items-center po-justify-between" }, Ha = { class: "po-text-sm po-text-left po-font-semibold po-text-slate-700 po-grow po-flex po-space-x-2 po-items-center" }, qa = { class: "po-grow" }, Wa = {
  key: 0,
  class: "po-w-[6px] po-h-[6px] po-rounded-full po-shrink-0 po-bg-mpao-orange po-animate-pulse"
}, Ua = { class: "po-text-xs po-font-normal po-text-slate-400 po-shrink-0" }, Ga = { class: "po-block po-text-sm po-text-slate-500 po-pb-3 po-text-left" }, Za = {
  key: 1,
  class: "po-text-sm po-text-slate-500 po-py-10 po-text-center po-block"
}, Ka = {
  name: "PoNotificationHub"
}, Ya = /* @__PURE__ */ L({
  ...Ka,
  props: {
    notifications: { default: null },
    hasNewNotifications: { type: Boolean, default: !1 }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, l) => (p(), j(k(Rt), null, {
      default: z(({ open: s }) => [
        S(k(Co), {
          class: O([s ? "" : "text-opacity-90", "po-block po-w-6 po-text-slate-100 genie-effect po-relative po-z-50 po-outline-none"])
        }, {
          default: z(() => [
            o.hasNewNotifications ? (p(), d("span", ja)) : _("", !0),
            S(k(Js), { class: "po-stroke-current" })
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
            S(k(So), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
              default: z(() => [
                o.notifications !== null && o.notifications.length > 0 ? (p(), d("ul", Ra, [
                  (p(!0), d(I, null, U(o.notifications, (n) => (p(), d("li", {
                    role: "button",
                    class: "po-space-y-2 po-p-2 po-rounded-lg po-bg-white hover:po-bg-slate-100 po-border po-border-slate-100",
                    onClick: re((a) => o.$emit("button-click", n.name), ["prevent"])
                  }, [
                    r("span", Na, [
                      r("p", Ha, [
                        r("span", qa, V(n.name), 1),
                        n.seen ? _("", !0) : (p(), d("span", Wa))
                      ]),
                      r("span", Ua, V(n.time), 1)
                    ]),
                    r("span", Ga, V(n.text), 1)
                  ], 8, Fa))), 256))
                ])) : (p(), d("span", Za, " No notifications to show at the moment. We'll keep you informed."))
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
}), Xa = {
  key: 0,
  class: "po-hidden lg:po-block po-text-sky-50 po-text-sm po-shrink-0 po-pr-3 po-truncate po-max-w-[140px] po-overflow-hidden"
}, Qa = {
  key: 1,
  class: "po-px-3 po-bg-gradient-to-br po-from-slate-50 po-to-blue-100 po-py-1 po-rounded-l-md po-w-[100px] po-flex po-items-center po-justify-center po-text-center"
}, Ja = ["src"], er = ["src", "alt"], tr = {
  key: 1,
  class: "po-text-xs po-text-white po-font-semibold"
}, or = { class: "po-pb-5" }, lr = ["src"], sr = {
  key: 2,
  class: "po-block po-text-sm po-text-slate-400 po-italic"
}, nr = { key: 0 }, ar = { key: 1 }, rr = /* @__PURE__ */ r("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), ir = { class: "po-space-y-2 po-py-2 po-max-h-[250px] po-overflow-y-auto" }, pr = ["onClick"], ur = { class: "po-w-5" }, dr = { class: "" }, cr = { class: "po-block po-text-sm po-font-normal" }, fr = {
  key: 0,
  class: "po-text-left po-block po-text-xs po-text-slate-400"
}, vr = /* @__PURE__ */ r("div", { class: "po-h-[2px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), hr = { class: "md:po-grid po-grid-cols-2 po-space-x-1 po-pt-2" }, mr = { class: "po-w-5" }, br = /* @__PURE__ */ r("span", { class: "po-text-sm po-font-normal" }, "Profile", -1), gr = { class: "po-w-5" }, yr = /* @__PURE__ */ r("span", { class: "po-text-sm po-font-normal" }, "Logout", -1), wr = /* @__PURE__ */ r("div", { class: "po-text-xs po-space-x-3 po-text-center po-pt-3" }, [
  /* @__PURE__ */ r("a", {
    href: "",
    class: "po-text-slate-500 hover:po-text-mpao-lightblue"
  }, "Privacy Policy"),
  /* @__PURE__ */ r("a", {
    href: "",
    class: "po-text-slate-500 hover:po-text-mpao-lightblue"
  }, "Terms of Service")
], -1), _r = {
  name: "PoProfileSwitcher"
}, $r = /* @__PURE__ */ L({
  ..._r,
  props: {
    userObject: { default: null },
    avatar: { default: "" },
    logo: { default: "" }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    const o = e;
    function l(v) {
      t("button-click", v);
    }
    const s = C({
      name: "",
      initials: "",
      image: ""
    });
    function n(v) {
      var w, m;
      return v ? ((m = (w = v.match(/\b[A-Z]/g)) == null ? void 0 : w.join("")) == null ? void 0 : m.substring(0, 2)) ?? "" : "";
    }
    const a = B(() => {
      var b, h, y, x, P, $, E, T, D, R;
      const v = [], w = (b = o.userObject) == null ? void 0 : b.transacting_as_organisation, m = (w == null ? void 0 : w.name) || ((h = o.userObject) == null ? void 0 : h.name), g = (w == null ? void 0 : w.logo) || ((y = o.userObject) == null ? void 0 : y.avatar);
      return s.value = {
        name: m,
        initials: n(m),
        image: g
      }, v.push({
        id: (x = o.userObject) == null ? void 0 : x.id,
        entity_id: (P = o.userObject) == null ? void 0 : P.entity_id,
        name: ($ = o.userObject) == null ? void 0 : $.name,
        identifier: null,
        organisation_uuid: null
      }), ((T = (E = o.userObject) == null ? void 0 : E.organisations) == null ? void 0 : T.length) > 0 && v.push(...(D = o.userObject) == null ? void 0 : D.organisations), v.forEach((N) => {
        N.current = w && Object.keys(w).length > 0 && N.entity_id === w.entity_id;
      }), ((R = o.userObject) == null ? void 0 : R.transacting_as_organisation) === null && (v[0].current = !0), v;
    }), i = C(null), u = C(null), { avatar: f, logo: c } = we(o);
    return Q(f, () => {
      i.value = f.value;
    }), Q(c, () => {
      u.value = c.value;
    }), Is(() => {
      a.value;
    }), G(() => {
      a.value;
    }), js(() => {
      a.value;
    }), mo(() => {
      a.value;
    }), (v, w) => (p(), j(k(Rt), null, {
      default: z(({ open: m }) => [
        r("div", null, [
          S(k(Co), { class: "po-flex po-items-center po-outline-none" }, {
            default: z(() => [
              u.value ? _("", !0) : (p(), d("span", Xa, V(s.value.name), 1)),
              u.value ? (p(), d("span", Qa, [
                r("img", {
                  class: "po-h-8",
                  src: u.value,
                  alt: ""
                }, null, 8, Ja)
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
                  }, null, 8, er)) : (p(), d("span", tr, V(s.value.initials), 1))
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
              S(k(So), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
                default: z(() => {
                  var g, b, h, y;
                  return [
                    r("div", or, [
                      i.value ? (p(), d("img", {
                        key: 0,
                        class: "po-w-20 po-h-20 po-mx-auto po-rounded-full po-overflow-hidden",
                        src: i.value,
                        alt: ""
                      }, null, 8, lr)) : _("", !0),
                      (g = v.userObject) != null && g.name ? (p(), d("span", {
                        key: 1,
                        class: O(["po-text-base po-text-slate-600 po-font-medium po-block", [{ "po-mt-4": i.value }]])
                      }, V((b = v.userObject) == null ? void 0 : b.name), 3)) : _("", !0),
                      (h = v.userObject) != null && h.name ? (p(), d("span", sr, [
                        s.value.name === ((y = v.userObject) == null ? void 0 : y.name) ? (p(), d("span", nr, "Self")) : (p(), d("span", ar, "User at " + V(s.value.name), 1))
                      ])) : _("", !0)
                    ]),
                    rr,
                    r("div", ir, [
                      (p(!0), d(I, null, U(a.value, (x, P) => (p(), d("a", {
                        href: "#",
                        onClick: re(($) => l(x), ["prevent"]),
                        class: O(["po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-shadow-sm po-transition-all po-duration-150 po-ease-out hover:po-bg-blue-50", [
                          {
                            " po-bg-white": !x.current
                          },
                          {
                            " po-bg-blue-50 po-shadow-sm": x.current
                          }
                        ]]),
                        role: "button",
                        key: P
                      }, [
                        r("span", ur, [
                          x.isPersonal ? (p(), j(k(Jo), {
                            key: 0,
                            class: O([
                              "po-stroke-current",
                              { "po-stroke-mpao-lightblue": x.current }
                            ])
                          }, null, 8, ["class"])) : _("", !0),
                          x.isPersonal ? _("", !0) : (p(), j(k(tn), {
                            key: 1,
                            class: O([
                              "po-stroke-current",
                              { "po-stroke-mpao-lightblue": x.current }
                            ])
                          }, null, 8, ["class"]))
                        ]),
                        r("span", dr, [
                          r("span", cr, V(x.name), 1),
                          x.identifier ? (p(), d("span", fr, V(x.identifier), 1)) : _("", !0)
                        ])
                      ], 10, pr))), 128))
                    ]),
                    vr,
                    r("div", hr, [
                      r("a", {
                        href: "#",
                        onClick: w[0] || (w[0] = re((x) => v.$emit("button-click", "current-profile"), ["prevent"])),
                        class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-slate-50 hover:po-bg-blue-50 po-transition-all po-duration-150 po-ease-out",
                        role: "button"
                      }, [
                        r("span", mr, [
                          S(k(Jo), { class: "po-stroke-current" })
                        ]),
                        br
                      ]),
                      r("a", {
                        href: "#",
                        onClick: w[1] || (w[1] = re((x) => v.$emit("button-click", "logout"), ["prevent"])),
                        class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-slate-50 hover:po-bg-blue-50 po-transition-all po-duration-150 po-ease-out",
                        role: "button"
                      }, [
                        r("span", gr, [
                          S(k(Ys), { class: "po-stroke-current" })
                        ]),
                        yr
                      ])
                    ]),
                    wr
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
}), Nt = /* @__PURE__ */ L({
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
}), Vr = ["disabled", "aria-disabled"], xr = ["value", "disabled", "aria-disabled"], kr = {
  name: "PoButton"
}, To = /* @__PURE__ */ L({
  ...kr,
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
    const o = e, l = "po-rounded-full po-transition-colors po-border po-duration-100 po-ease-in-out po-cursor-pointer disabled:po-bg-slate-400 disabled:po-border-slate-400 disabled:po-cursor-default disabled:po-hover:bg-slate-400", s = B(() => {
      switch (o.size) {
        case "sm":
          return "po-px-2 po-py-1 po-text-xs";
        case "md":
          return "po-px-4 po-py-2 po-text-sm";
        case "lg":
          return "po-px-5 po-py-3 po-text-normal";
      }
    }), n = B(() => {
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
    return (a, i) => (p(), d(I, null, [
      a.isLoading ? (p(), d("span", {
        key: 0,
        class: O([[l, s.value], "po-bg-slate-200 hover:po-bg-slate-200 focus:po-bg-slate-200"])
      }, [
        S(Nt, {
          "dot-color": "po-bg-slate-500",
          class: "po-relative -po-bottom-[0.2rem]"
        })
      ], 2)) : _("", !0),
      a.type == "button" && !a.isLoading ? (p(), d("button", xe({
        key: 1,
        onClick: i[0] || (i[0] = re((u) => a.$emit("button-click", a.to), ["prevent"])),
        class: [l, s.value, n.value],
        disabled: a.disabled,
        "aria-disabled": a.disabled
      }, a.$attrs), [
        Y(a.$slots, "label", {}, () => [
          J(V(a.label), 1)
        ])
      ], 16, Vr)) : _("", !0),
      a.type == "submit" && !a.isLoading ? (p(), d("input", xe({
        key: 2,
        type: "submit",
        class: [l, s.value, n.value],
        value: a.label,
        disabled: a.disabled,
        "aria-disabled": a.disabled
      }, a.$attrs), null, 16, xr)) : _("", !0),
      a.type == "link" && !a.isLoading ? (p(), d("a", xe({
        key: 3,
        href: "#",
        onClick: i[1] || (i[1] = re((u) => a.$emit("button-click", a.to), ["prevent"])),
        class: [l, s.value, n.value]
      }, a.$attrs), [
        Y(a.$slots, "label", {}, () => [
          J(V(a.label), 1)
        ])
      ], 16)) : _("", !0),
      a.type == "simple" && !a.isLoading ? (p(), d("a", {
        key: 4,
        href: "#",
        onClick: i[2] || (i[2] = re((u) => a.$emit("button-click", a.to), ["prevent"])),
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
function Cr(e, t) {
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
function is(e, t) {
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
function Sr(e, t) {
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
function Pr(e, t) {
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
function Or(e, t) {
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
function Lr(e, t) {
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
function ps(e, t) {
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
function Ht(e, t) {
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
function Tr(e, t) {
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
function Er(e, t) {
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
function us(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
  ]);
}
var ve = "top", $e = "bottom", Ve = "right", he = "left", Eo = "auto", gt = [ve, $e, Ve, he], Je = "start", dt = "end", Br = "clippingParents", ds = "viewport", it = "popper", zr = "reference", ul = /* @__PURE__ */ gt.reduce(function(e, t) {
  return e.concat([t + "-" + Je, t + "-" + dt]);
}, []), cs = /* @__PURE__ */ [].concat(gt, [Eo]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Je, t + "-" + dt]);
}, []), Mr = "beforeRead", Ar = "read", Dr = "afterRead", Ir = "beforeMain", jr = "main", Rr = "afterMain", Fr = "beforeWrite", Nr = "write", Hr = "afterWrite", qr = [Mr, Ar, Dr, Ir, jr, Rr, Fr, Nr, Hr];
function Se(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ye(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Ke(e) {
  var t = ye(e).Element;
  return e instanceof t || e instanceof Element;
}
function _e(e) {
  var t = ye(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Bo(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = ye(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Wr(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(o) {
    var l = t.styles[o] || {}, s = t.attributes[o] || {}, n = t.elements[o];
    !_e(n) || !Se(n) || (Object.assign(n.style, l), Object.keys(s).forEach(function(a) {
      var i = s[a];
      i === !1 ? n.removeAttribute(a) : n.setAttribute(a, i === !0 ? "" : i);
    }));
  });
}
function Ur(e) {
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
      !_e(s) || !Se(s) || (Object.assign(s.style, i), Object.keys(n).forEach(function(u) {
        s.removeAttribute(u);
      }));
    });
  };
}
const Gr = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Wr,
  effect: Ur,
  requires: ["computeStyles"]
};
function ke(e) {
  return e.split("-")[0];
}
var Ge = Math.max, Tt = Math.min, et = Math.round;
function ro() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function fs() {
  return !/^((?!chrome|android).)*safari/i.test(ro());
}
function tt(e, t, o) {
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  var l = e.getBoundingClientRect(), s = 1, n = 1;
  t && _e(e) && (s = e.offsetWidth > 0 && et(l.width) / e.offsetWidth || 1, n = e.offsetHeight > 0 && et(l.height) / e.offsetHeight || 1);
  var a = Ke(e) ? ye(e) : window, i = a.visualViewport, u = !fs() && o, f = (l.left + (u && i ? i.offsetLeft : 0)) / s, c = (l.top + (u && i ? i.offsetTop : 0)) / n, v = l.width / s, w = l.height / n;
  return {
    width: v,
    height: w,
    top: c,
    right: f + v,
    bottom: c + w,
    left: f,
    x: f,
    y: c
  };
}
function zo(e) {
  var t = tt(e), o = e.offsetWidth, l = e.offsetHeight;
  return Math.abs(t.width - o) <= 1 && (o = t.width), Math.abs(t.height - l) <= 1 && (l = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: o,
    height: l
  };
}
function vs(e, t) {
  var o = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (o && Bo(o)) {
    var l = t;
    do {
      if (l && e.isSameNode(l))
        return !0;
      l = l.parentNode || l.host;
    } while (l);
  }
  return !1;
}
function Le(e) {
  return ye(e).getComputedStyle(e);
}
function Zr(e) {
  return ["table", "td", "th"].indexOf(Se(e)) >= 0;
}
function Re(e) {
  return ((Ke(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function qt(e) {
  return Se(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Bo(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Re(e)
  );
}
function dl(e) {
  return !_e(e) || // https://github.com/popperjs/popper-core/issues/837
  Le(e).position === "fixed" ? null : e.offsetParent;
}
function Kr(e) {
  var t = /firefox/i.test(ro()), o = /Trident/i.test(ro());
  if (o && _e(e)) {
    var l = Le(e);
    if (l.position === "fixed")
      return null;
  }
  var s = qt(e);
  for (Bo(s) && (s = s.host); _e(s) && ["html", "body"].indexOf(Se(s)) < 0; ) {
    var n = Le(s);
    if (n.transform !== "none" || n.perspective !== "none" || n.contain === "paint" || ["transform", "perspective"].indexOf(n.willChange) !== -1 || t && n.willChange === "filter" || t && n.filter && n.filter !== "none")
      return s;
    s = s.parentNode;
  }
  return null;
}
function yt(e) {
  for (var t = ye(e), o = dl(e); o && Zr(o) && Le(o).position === "static"; )
    o = dl(o);
  return o && (Se(o) === "html" || Se(o) === "body" && Le(o).position === "static") ? t : o || Kr(e) || t;
}
function Mo(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function pt(e, t, o) {
  return Ge(e, Tt(t, o));
}
function Yr(e, t, o) {
  var l = pt(e, t, o);
  return l > o ? o : l;
}
function hs() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function ms(e) {
  return Object.assign({}, hs(), e);
}
function bs(e, t) {
  return t.reduce(function(o, l) {
    return o[l] = e, o;
  }, {});
}
var Xr = function(t, o) {
  return t = typeof t == "function" ? t(Object.assign({}, o.rects, {
    placement: o.placement
  })) : t, ms(typeof t != "number" ? t : bs(t, gt));
};
function Qr(e) {
  var t, o = e.state, l = e.name, s = e.options, n = o.elements.arrow, a = o.modifiersData.popperOffsets, i = ke(o.placement), u = Mo(i), f = [he, Ve].indexOf(i) >= 0, c = f ? "height" : "width";
  if (!(!n || !a)) {
    var v = Xr(s.padding, o), w = zo(n), m = u === "y" ? ve : he, g = u === "y" ? $e : Ve, b = o.rects.reference[c] + o.rects.reference[u] - a[u] - o.rects.popper[c], h = a[u] - o.rects.reference[u], y = yt(n), x = y ? u === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0, P = b / 2 - h / 2, $ = v[m], E = x - w[c] - v[g], T = x / 2 - w[c] / 2 + P, D = pt($, T, E), R = u;
    o.modifiersData[l] = (t = {}, t[R] = D, t.centerOffset = D - T, t);
  }
}
function Jr(e) {
  var t = e.state, o = e.options, l = o.element, s = l === void 0 ? "[data-popper-arrow]" : l;
  s != null && (typeof s == "string" && (s = t.elements.popper.querySelector(s), !s) || vs(t.elements.popper, s) && (t.elements.arrow = s));
}
const ei = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Qr,
  effect: Jr,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ot(e) {
  return e.split("-")[1];
}
var ti = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function oi(e, t) {
  var o = e.x, l = e.y, s = t.devicePixelRatio || 1;
  return {
    x: et(o * s) / s || 0,
    y: et(l * s) / s || 0
  };
}
function cl(e) {
  var t, o = e.popper, l = e.popperRect, s = e.placement, n = e.variation, a = e.offsets, i = e.position, u = e.gpuAcceleration, f = e.adaptive, c = e.roundOffsets, v = e.isFixed, w = a.x, m = w === void 0 ? 0 : w, g = a.y, b = g === void 0 ? 0 : g, h = typeof c == "function" ? c({
    x: m,
    y: b
  }) : {
    x: m,
    y: b
  };
  m = h.x, b = h.y;
  var y = a.hasOwnProperty("x"), x = a.hasOwnProperty("y"), P = he, $ = ve, E = window;
  if (f) {
    var T = yt(o), D = "clientHeight", R = "clientWidth";
    if (T === ye(o) && (T = Re(o), Le(T).position !== "static" && i === "absolute" && (D = "scrollHeight", R = "scrollWidth")), T = T, s === ve || (s === he || s === Ve) && n === dt) {
      $ = $e;
      var N = v && T === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        T[D]
      );
      b -= N - l.height, b *= u ? 1 : -1;
    }
    if (s === he || (s === ve || s === $e) && n === dt) {
      P = Ve;
      var A = v && T === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        T[R]
      );
      m -= A - l.width, m *= u ? 1 : -1;
    }
  }
  var Z = Object.assign({
    position: i
  }, f && ti), K = c === !0 ? oi({
    x: m,
    y: b
  }, ye(o)) : {
    x: m,
    y: b
  };
  if (m = K.x, b = K.y, u) {
    var H;
    return Object.assign({}, Z, (H = {}, H[$] = x ? "0" : "", H[P] = y ? "0" : "", H.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + b + "px)" : "translate3d(" + m + "px, " + b + "px, 0)", H));
  }
  return Object.assign({}, Z, (t = {}, t[$] = x ? b + "px" : "", t[P] = y ? m + "px" : "", t.transform = "", t));
}
function li(e) {
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
const si = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: li,
  data: {}
};
var Ct = {
  passive: !0
};
function ni(e) {
  var t = e.state, o = e.instance, l = e.options, s = l.scroll, n = s === void 0 ? !0 : s, a = l.resize, i = a === void 0 ? !0 : a, u = ye(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return n && f.forEach(function(c) {
    c.addEventListener("scroll", o.update, Ct);
  }), i && u.addEventListener("resize", o.update, Ct), function() {
    n && f.forEach(function(c) {
      c.removeEventListener("scroll", o.update, Ct);
    }), i && u.removeEventListener("resize", o.update, Ct);
  };
}
const ai = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: ni,
  data: {}
};
var ri = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function St(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return ri[t];
  });
}
var ii = {
  start: "end",
  end: "start"
};
function fl(e) {
  return e.replace(/start|end/g, function(t) {
    return ii[t];
  });
}
function Ao(e) {
  var t = ye(e), o = t.pageXOffset, l = t.pageYOffset;
  return {
    scrollLeft: o,
    scrollTop: l
  };
}
function Do(e) {
  return tt(Re(e)).left + Ao(e).scrollLeft;
}
function pi(e, t) {
  var o = ye(e), l = Re(e), s = o.visualViewport, n = l.clientWidth, a = l.clientHeight, i = 0, u = 0;
  if (s) {
    n = s.width, a = s.height;
    var f = fs();
    (f || !f && t === "fixed") && (i = s.offsetLeft, u = s.offsetTop);
  }
  return {
    width: n,
    height: a,
    x: i + Do(e),
    y: u
  };
}
function ui(e) {
  var t, o = Re(e), l = Ao(e), s = (t = e.ownerDocument) == null ? void 0 : t.body, n = Ge(o.scrollWidth, o.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0), a = Ge(o.scrollHeight, o.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0), i = -l.scrollLeft + Do(e), u = -l.scrollTop;
  return Le(s || o).direction === "rtl" && (i += Ge(o.clientWidth, s ? s.clientWidth : 0) - n), {
    width: n,
    height: a,
    x: i,
    y: u
  };
}
function Io(e) {
  var t = Le(e), o = t.overflow, l = t.overflowX, s = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + s + l);
}
function gs(e) {
  return ["html", "body", "#document"].indexOf(Se(e)) >= 0 ? e.ownerDocument.body : _e(e) && Io(e) ? e : gs(qt(e));
}
function ut(e, t) {
  var o;
  t === void 0 && (t = []);
  var l = gs(e), s = l === ((o = e.ownerDocument) == null ? void 0 : o.body), n = ye(l), a = s ? [n].concat(n.visualViewport || [], Io(l) ? l : []) : l, i = t.concat(a);
  return s ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(ut(qt(a)))
  );
}
function io(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function di(e, t) {
  var o = tt(e, !1, t === "fixed");
  return o.top = o.top + e.clientTop, o.left = o.left + e.clientLeft, o.bottom = o.top + e.clientHeight, o.right = o.left + e.clientWidth, o.width = e.clientWidth, o.height = e.clientHeight, o.x = o.left, o.y = o.top, o;
}
function vl(e, t, o) {
  return t === ds ? io(pi(e, o)) : Ke(t) ? di(t, o) : io(ui(Re(e)));
}
function ci(e) {
  var t = ut(qt(e)), o = ["absolute", "fixed"].indexOf(Le(e).position) >= 0, l = o && _e(e) ? yt(e) : e;
  return Ke(l) ? t.filter(function(s) {
    return Ke(s) && vs(s, l) && Se(s) !== "body";
  }) : [];
}
function fi(e, t, o, l) {
  var s = t === "clippingParents" ? ci(e) : [].concat(t), n = [].concat(s, [o]), a = n[0], i = n.reduce(function(u, f) {
    var c = vl(e, f, l);
    return u.top = Ge(c.top, u.top), u.right = Tt(c.right, u.right), u.bottom = Tt(c.bottom, u.bottom), u.left = Ge(c.left, u.left), u;
  }, vl(e, a, l));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function ys(e) {
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
  var f = s ? Mo(s) : null;
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
  var o = t, l = o.placement, s = l === void 0 ? e.placement : l, n = o.strategy, a = n === void 0 ? e.strategy : n, i = o.boundary, u = i === void 0 ? Br : i, f = o.rootBoundary, c = f === void 0 ? ds : f, v = o.elementContext, w = v === void 0 ? it : v, m = o.altBoundary, g = m === void 0 ? !1 : m, b = o.padding, h = b === void 0 ? 0 : b, y = ms(typeof h != "number" ? h : bs(h, gt)), x = w === it ? zr : it, P = e.rects.popper, $ = e.elements[g ? x : w], E = fi(Ke($) ? $ : $.contextElement || Re(e.elements.popper), u, c, a), T = tt(e.elements.reference), D = ys({
    reference: T,
    element: P,
    strategy: "absolute",
    placement: s
  }), R = io(Object.assign({}, P, D)), N = w === it ? R : T, A = {
    top: E.top - N.top + y.top,
    bottom: N.bottom - E.bottom + y.bottom,
    left: E.left - N.left + y.left,
    right: N.right - E.right + y.right
  }, Z = e.modifiersData.offset;
  if (w === it && Z) {
    var K = Z[s];
    Object.keys(A).forEach(function(H) {
      var q = [Ve, $e].indexOf(H) >= 0 ? 1 : -1, W = [ve, $e].indexOf(H) >= 0 ? "y" : "x";
      A[H] += K[W] * q;
    });
  }
  return A;
}
function vi(e, t) {
  t === void 0 && (t = {});
  var o = t, l = o.placement, s = o.boundary, n = o.rootBoundary, a = o.padding, i = o.flipVariations, u = o.allowedAutoPlacements, f = u === void 0 ? cs : u, c = ot(l), v = c ? i ? ul : ul.filter(function(g) {
    return ot(g) === c;
  }) : gt, w = v.filter(function(g) {
    return f.indexOf(g) >= 0;
  });
  w.length === 0 && (w = v);
  var m = w.reduce(function(g, b) {
    return g[b] = ct(e, {
      placement: b,
      boundary: s,
      rootBoundary: n,
      padding: a
    })[ke(b)], g;
  }, {});
  return Object.keys(m).sort(function(g, b) {
    return m[g] - m[b];
  });
}
function hi(e) {
  if (ke(e) === Eo)
    return [];
  var t = St(e);
  return [fl(e), t, fl(t)];
}
function mi(e) {
  var t = e.state, o = e.options, l = e.name;
  if (!t.modifiersData[l]._skip) {
    for (var s = o.mainAxis, n = s === void 0 ? !0 : s, a = o.altAxis, i = a === void 0 ? !0 : a, u = o.fallbackPlacements, f = o.padding, c = o.boundary, v = o.rootBoundary, w = o.altBoundary, m = o.flipVariations, g = m === void 0 ? !0 : m, b = o.allowedAutoPlacements, h = t.options.placement, y = ke(h), x = y === h, P = u || (x || !g ? [St(h)] : hi(h)), $ = [h].concat(P).reduce(function(Ee, Be) {
      return Ee.concat(ke(Be) === Eo ? vi(t, {
        placement: Be,
        boundary: c,
        rootBoundary: v,
        padding: f,
        flipVariations: g,
        allowedAutoPlacements: b
      }) : Be);
    }, []), E = t.rects.reference, T = t.rects.popper, D = /* @__PURE__ */ new Map(), R = !0, N = $[0], A = 0; A < $.length; A++) {
      var Z = $[A], K = ke(Z), H = ot(Z) === Je, q = [ve, $e].indexOf(K) >= 0, W = q ? "width" : "height", F = ct(t, {
        placement: Z,
        boundary: c,
        rootBoundary: v,
        altBoundary: w,
        padding: f
      }), X = q ? H ? Ve : he : H ? $e : ve;
      E[W] > T[W] && (X = St(X));
      var Pe = St(X), fe = [];
      if (n && fe.push(F[K] <= 0), i && fe.push(F[X] <= 0, F[Pe] <= 0), fe.every(function(Ee) {
        return Ee;
      })) {
        N = Z, R = !1;
        break;
      }
      D.set(Z, fe);
    }
    if (R)
      for (var st = g ? 3 : 1, _t = function(Be) {
        var nt = $.find(function($t) {
          var Fe = D.get($t);
          if (Fe)
            return Fe.slice(0, Be).every(function(Gt) {
              return Gt;
            });
        });
        if (nt)
          return N = nt, "break";
      }, Te = st; Te > 0; Te--) {
        var Ye = _t(Te);
        if (Ye === "break")
          break;
      }
    t.placement !== N && (t.modifiersData[l]._skip = !0, t.placement = N, t.reset = !0);
  }
}
const bi = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: mi,
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
function gi(e) {
  var t = e.state, o = e.name, l = t.rects.reference, s = t.rects.popper, n = t.modifiersData.preventOverflow, a = ct(t, {
    elementContext: "reference"
  }), i = ct(t, {
    altBoundary: !0
  }), u = hl(a, l), f = hl(i, s, n), c = ml(u), v = ml(f);
  t.modifiersData[o] = {
    referenceClippingOffsets: u,
    popperEscapeOffsets: f,
    isReferenceHidden: c,
    hasPopperEscaped: v
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": v
  });
}
const yi = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: gi
};
function wi(e, t, o) {
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
function _i(e) {
  var t = e.state, o = e.options, l = e.name, s = o.offset, n = s === void 0 ? [0, 0] : s, a = cs.reduce(function(c, v) {
    return c[v] = wi(v, t.rects, n), c;
  }, {}), i = a[t.placement], u = i.x, f = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += f), t.modifiersData[l] = a;
}
const $i = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: _i
};
function Vi(e) {
  var t = e.state, o = e.name;
  t.modifiersData[o] = ys({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const xi = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Vi,
  data: {}
};
function ki(e) {
  return e === "x" ? "y" : "x";
}
function Ci(e) {
  var t = e.state, o = e.options, l = e.name, s = o.mainAxis, n = s === void 0 ? !0 : s, a = o.altAxis, i = a === void 0 ? !1 : a, u = o.boundary, f = o.rootBoundary, c = o.altBoundary, v = o.padding, w = o.tether, m = w === void 0 ? !0 : w, g = o.tetherOffset, b = g === void 0 ? 0 : g, h = ct(t, {
    boundary: u,
    rootBoundary: f,
    padding: v,
    altBoundary: c
  }), y = ke(t.placement), x = ot(t.placement), P = !x, $ = Mo(y), E = ki($), T = t.modifiersData.popperOffsets, D = t.rects.reference, R = t.rects.popper, N = typeof b == "function" ? b(Object.assign({}, t.rects, {
    placement: t.placement
  })) : b, A = typeof N == "number" ? {
    mainAxis: N,
    altAxis: N
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, N), Z = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, K = {
    x: 0,
    y: 0
  };
  if (T) {
    if (n) {
      var H, q = $ === "y" ? ve : he, W = $ === "y" ? $e : Ve, F = $ === "y" ? "height" : "width", X = T[$], Pe = X + h[q], fe = X - h[W], st = m ? -R[F] / 2 : 0, _t = x === Je ? D[F] : R[F], Te = x === Je ? -R[F] : -D[F], Ye = t.elements.arrow, Ee = m && Ye ? zo(Ye) : {
        width: 0,
        height: 0
      }, Be = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : hs(), nt = Be[q], $t = Be[W], Fe = pt(0, D[F], Ee[F]), Gt = P ? D[F] / 2 - st - Fe - nt - A.mainAxis : _t - Fe - nt - A.mainAxis, Ps = P ? -D[F] / 2 + st + Fe + $t + A.mainAxis : Te + Fe + $t + A.mainAxis, Zt = t.elements.arrow && yt(t.elements.arrow), Os = Zt ? $ === "y" ? Zt.clientTop || 0 : Zt.clientLeft || 0 : 0, Ho = (H = Z == null ? void 0 : Z[$]) != null ? H : 0, Ls = X + Gt - Ho - Os, Ts = X + Ps - Ho, qo = pt(m ? Tt(Pe, Ls) : Pe, X, m ? Ge(fe, Ts) : fe);
      T[$] = qo, K[$] = qo - X;
    }
    if (i) {
      var Wo, Es = $ === "x" ? ve : he, Bs = $ === "x" ? $e : Ve, Ne = T[E], Vt = E === "y" ? "height" : "width", Uo = Ne + h[Es], Go = Ne - h[Bs], Kt = [ve, he].indexOf(y) !== -1, Zo = (Wo = Z == null ? void 0 : Z[E]) != null ? Wo : 0, Ko = Kt ? Uo : Ne - D[Vt] - R[Vt] - Zo + A.altAxis, Yo = Kt ? Ne + D[Vt] + R[Vt] - Zo - A.altAxis : Go, Xo = m && Kt ? Yr(Ko, Ne, Yo) : pt(m ? Ko : Uo, Ne, m ? Yo : Go);
      T[E] = Xo, K[E] = Xo - Ne;
    }
    t.modifiersData[l] = K;
  }
}
const Si = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Ci,
  requiresIfExists: ["offset"]
};
function Pi(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Oi(e) {
  return e === ye(e) || !_e(e) ? Ao(e) : Pi(e);
}
function Li(e) {
  var t = e.getBoundingClientRect(), o = et(t.width) / e.offsetWidth || 1, l = et(t.height) / e.offsetHeight || 1;
  return o !== 1 || l !== 1;
}
function Ti(e, t, o) {
  o === void 0 && (o = !1);
  var l = _e(t), s = _e(t) && Li(t), n = Re(t), a = tt(e, s, o), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = {
    x: 0,
    y: 0
  };
  return (l || !l && !o) && ((Se(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Io(n)) && (i = Oi(t)), _e(t) ? (u = tt(t, !0), u.x += t.clientLeft, u.y += t.clientTop) : n && (u.x = Do(n))), {
    x: a.left + i.scrollLeft - u.x,
    y: a.top + i.scrollTop - u.y,
    width: a.width,
    height: a.height
  };
}
function Ei(e) {
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
function Bi(e) {
  var t = Ei(e);
  return qr.reduce(function(o, l) {
    return o.concat(t.filter(function(s) {
      return s.phase === l;
    }));
  }, []);
}
function zi(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(o) {
      Promise.resolve().then(function() {
        t = void 0, o(e());
      });
    })), t;
  };
}
function Mi(e) {
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
function Ai(e) {
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
    }, v = [], w = !1, m = {
      state: c,
      setOptions: function(y) {
        var x = typeof y == "function" ? y(c.options) : y;
        b(), c.options = Object.assign({}, n, c.options, x), c.scrollParents = {
          reference: Ke(i) ? ut(i) : i.contextElement ? ut(i.contextElement) : [],
          popper: ut(u)
        };
        var P = Bi(Mi([].concat(l, c.options.modifiers)));
        return c.orderedModifiers = P.filter(function($) {
          return $.enabled;
        }), g(), m.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!w) {
          var y = c.elements, x = y.reference, P = y.popper;
          if (gl(x, P)) {
            c.rects = {
              reference: Ti(x, yt(P), c.options.strategy === "fixed"),
              popper: zo(P)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(A) {
              return c.modifiersData[A.name] = Object.assign({}, A.data);
            });
            for (var $ = 0; $ < c.orderedModifiers.length; $++) {
              if (c.reset === !0) {
                c.reset = !1, $ = -1;
                continue;
              }
              var E = c.orderedModifiers[$], T = E.fn, D = E.options, R = D === void 0 ? {} : D, N = E.name;
              typeof T == "function" && (c = T({
                state: c,
                options: R,
                name: N,
                instance: m
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: zi(function() {
        return new Promise(function(h) {
          m.forceUpdate(), h(c);
        });
      }),
      destroy: function() {
        b(), w = !0;
      }
    };
    if (!gl(i, u))
      return m;
    m.setOptions(f).then(function(h) {
      !w && f.onFirstUpdate && f.onFirstUpdate(h);
    });
    function g() {
      c.orderedModifiers.forEach(function(h) {
        var y = h.name, x = h.options, P = x === void 0 ? {} : x, $ = h.effect;
        if (typeof $ == "function") {
          var E = $({
            state: c,
            name: y,
            instance: m,
            options: P
          }), T = function() {
          };
          v.push(E || T);
        }
      });
    }
    function b() {
      v.forEach(function(h) {
        return h();
      }), v = [];
    }
    return m;
  };
}
var Di = [ai, xi, si, Gr, $i, bi, Si, ei, yi], jo = /* @__PURE__ */ Ai({
  defaultModifiers: Di
});
function Ro(e, t) {
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
function Ii() {
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
function po() {
  po.init || (po.init = !0, Pt = Ii() !== -1);
}
var Wt = {
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
    po(), ho(() => {
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
const ji = /* @__PURE__ */ Ns("data-v-b329ee4c");
Rs("data-v-b329ee4c");
const Ri = {
  class: "resize-observer",
  tabindex: "-1"
};
Fs();
const Fi = /* @__PURE__ */ ji((e, t, o, l, s, n) => (p(), j("div", Ri)));
Wt.render = Fi;
Wt.__scopeId = "data-v-b329ee4c";
Wt.__file = "src/components/ResizeObserver.vue";
function Ot(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ot = function(t) {
    return typeof t;
  } : Ot = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ot(e);
}
function Ni(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function yl(e, t) {
  for (var o = 0; o < t.length; o++) {
    var l = t[o];
    l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(e, l.key, l);
  }
}
function Hi(e, t, o) {
  return t && yl(e.prototype, t), o && yl(e, o), e;
}
function wl(e) {
  return qi(e) || Wi(e) || Ui(e) || Gi();
}
function qi(e) {
  if (Array.isArray(e))
    return uo(e);
}
function Wi(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function Ui(e, t) {
  if (e) {
    if (typeof e == "string")
      return uo(e, t);
    var o = Object.prototype.toString.call(e).slice(8, -1);
    if (o === "Object" && e.constructor && (o = e.constructor.name), o === "Map" || o === "Set")
      return Array.from(e);
    if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
      return uo(e, t);
  }
}
function uo(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var o = 0, l = new Array(t); o < t; o++)
    l[o] = e[o];
  return l;
}
function Gi() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Zi(e) {
  var t;
  return typeof e == "function" ? t = {
    callback: e
  } : t = e, t;
}
function Ki(e, t) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l, s, n, a = function(u) {
    for (var f = arguments.length, c = new Array(f > 1 ? f - 1 : 0), v = 1; v < f; v++)
      c[v - 1] = arguments[v];
    if (n = c, !(l && u === s)) {
      var w = o.leading;
      typeof w == "function" && (w = w(u, s)), (!l || u !== s) && w && e.apply(void 0, [u].concat(wl(n))), s = u, clearTimeout(l), l = setTimeout(function() {
        e.apply(void 0, [u].concat(wl(n))), l = 0;
      }, t);
    }
  };
  return a._clear = function() {
    clearTimeout(l), l = null;
  }, a;
}
function ws(e, t) {
  if (e === t)
    return !0;
  if (Ot(e) === "object") {
    for (var o in e)
      if (!ws(e[o], t[o]))
        return !1;
    return !0;
  }
  return !1;
}
var Yi = /* @__PURE__ */ function() {
  function e(t, o, l) {
    Ni(this, e), this.el = t, this.observer = null, this.frozen = !1, this.createObserver(o, l);
  }
  return Hi(e, [{
    key: "createObserver",
    value: function(o, l) {
      var s = this;
      if (this.observer && this.destroyObserver(), !this.frozen) {
        if (this.options = Zi(o), this.callback = function(i, u) {
          s.options.callback(i, u), i && s.options.once && (s.frozen = !0, s.destroyObserver());
        }, this.callback && this.options.throttle) {
          var n = this.options.throttleOptions || {}, a = n.leading;
          this.callback = Ki(this.callback, this.options.throttle, {
            leading: function(u) {
              return a === "both" || a === "visible" && u || a === "hidden" && !u;
            }
          });
        }
        this.oldResult = void 0, this.observer = new IntersectionObserver(function(i) {
          var u = i[0];
          if (i.length > 1) {
            var f = i.find(function(v) {
              return v.isIntersecting;
            });
            f && (u = f);
          }
          if (s.callback) {
            var c = u.isIntersecting && u.intersectionRatio >= s.threshold;
            if (c === s.oldResult)
              return;
            s.oldResult = c, s.callback(c, u);
          }
        }, this.options.intersection), ho(function() {
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
function _s(e, t, o) {
  var l = t.value;
  if (l)
    if (typeof IntersectionObserver > "u")
      console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");
    else {
      var s = new Yi(e, l, o);
      e._vue_visibilityState = s;
    }
}
function Xi(e, t, o) {
  var l = t.value, s = t.oldValue;
  if (!ws(l, s)) {
    var n = e._vue_visibilityState;
    if (!l) {
      $s(e);
      return;
    }
    n ? n.createObserver(l, o) : _s(e, {
      value: l
    }, o);
  }
}
function $s(e) {
  var t = e._vue_visibilityState;
  t && (t.destroyObserver(), delete e._vue_visibilityState);
}
var Qi = {
  beforeMount: _s,
  updated: Xi,
  unmounted: $s
};
function Ji(e) {
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
var ep = {
  itemsLimit: 1e3
}, tp = /(auto|scroll)/;
function Vs(e, t) {
  return e.parentNode === null ? t : Vs(e.parentNode, t.concat([e]));
}
var eo = function(t, o) {
  return getComputedStyle(t, null).getPropertyValue(o);
}, op = function(t) {
  return eo(t, "overflow") + eo(t, "overflow-y") + eo(t, "overflow-x");
}, lp = function(t) {
  return tp.test(op(t));
};
function _l(e) {
  if (e instanceof HTMLElement || e instanceof SVGElement) {
    for (var t = Vs(e.parentNode, []), o = 0; o < t.length; o += 1)
      if (lp(t[o]))
        return t[o];
    return document.scrollingElement || document.documentElement;
  }
}
function co(e) {
  return co = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, co(e);
}
var xs = {
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
function ks() {
  return this.items.length && co(this.items[0]) !== "object";
}
var fo = !1;
if (typeof window < "u") {
  fo = !1;
  try {
    var sp = Object.defineProperty({}, "passive", {
      get: function() {
        fo = !0;
      }
    });
    window.addEventListener("test", null, sp);
  } catch {
  }
}
let np = 0;
var Fo = {
  name: "RecycleScroller",
  components: {
    ResizeObserver: Wt
  },
  directives: {
    ObserveVisibility: Qi
  },
  props: {
    ...xs,
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
    simpleArray: ks,
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
      const n = Hs({
        id: np++,
        index: t,
        used: !0,
        key: l,
        type: s
      }), a = qs({
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
      const o = this.itemSize, l = this.gridItems || 1, s = this.itemSecondarySize || o, n = this.$_computedMinItemSize, a = this.typeField, i = this.simpleArray ? null : this.keyField, u = this.items, f = u.length, c = this.sizes, v = this.$_views, w = this.$_unusedViews, m = this.pool, g = this.itemIndexByKey;
      let b, h, y, x, P;
      if (!f)
        b = h = x = P = y = 0;
      else if (this.$_prerender)
        b = x = 0, h = P = Math.min(this.prerender, u.length), y = null;
      else {
        const A = this.getScroll();
        if (t) {
          let H = A.start - this.$_lastUpdateScrollPosition;
          if (H < 0 && (H = -H), o === null && H < n || H < o)
            return {
              continuous: !0
            };
        }
        this.$_lastUpdateScrollPosition = A.start;
        const Z = this.buffer;
        A.start -= Z, A.end += Z;
        let K = 0;
        if (this.$refs.before && (K = this.$refs.before.scrollHeight, A.start -= K), this.$refs.after) {
          const H = this.$refs.after.scrollHeight;
          A.end += H;
        }
        if (o === null) {
          let H, q = 0, W = f - 1, F = ~~(f / 2), X;
          do
            X = F, H = c[F].accumulator, H < A.start ? q = F : F < f - 1 && c[F + 1].accumulator > A.start && (W = F), F = ~~((q + W) / 2);
          while (F !== X);
          for (F < 0 && (F = 0), b = F, y = c[f - 1].accumulator, h = F; h < f && c[h].accumulator < A.end; h++)
            ;
          for (h === -1 ? h = u.length - 1 : (h++, h > f && (h = f)), x = b; x < f && K + c[x].accumulator < A.start; x++)
            ;
          for (P = x; P < f && K + c[P].accumulator < A.end; P++)
            ;
        } else {
          b = ~~(A.start / o * l);
          const H = b % l;
          b -= H, h = Math.ceil(A.end / o * l), x = Math.max(0, Math.floor((A.start - K) / o * l)), P = Math.floor((A.end - K) / o * l), b < 0 && (b = 0), h > f && (h = f), x < 0 && (x = 0), P > f && (P = f), y = Math.ceil(f / l) * o;
        }
      }
      h - b > ep.itemsLimit && this.itemsLimitError(), this.totalSize = y;
      let $;
      const E = b <= this.$_endIndex && h >= this.$_startIndex;
      if (E)
        for (let A = 0, Z = m.length; A < Z; A++)
          $ = m[A], $.nr.used && (e && ($.nr.index = g[$.item[i]]), ($.nr.index == null || $.nr.index < b || $.nr.index >= h) && this.unuseView($));
      const T = E ? null : /* @__PURE__ */ new Map();
      let D, R, N;
      for (let A = b; A < h; A++) {
        D = u[A];
        const Z = i ? D[i] : D;
        if (Z == null)
          throw new Error(`Key is ${Z} on item (keyField is '${i}')`);
        if ($ = v.get(Z), !o && !c[A].size) {
          $ && this.unuseView($);
          continue;
        }
        R = D[a];
        let K = w.get(R), H = !1;
        if (!$)
          E ? K && K.length ? $ = K.pop() : $ = this.addView(m, A, D, Z, R) : (N = T.get(R) || 0, (!K || N >= K.length) && ($ = this.addView(m, A, D, Z, R), this.unuseView($, !0), K = w.get(R)), $ = K[N], T.set(R, N + 1)), v.delete($.nr.key), $.nr.used = !0, $.nr.index = A, $.nr.key = Z, $.nr.type = R, v.set(Z, $), H = !0;
        else if (!$.nr.used && ($.nr.used = !0, H = !0, K)) {
          const q = K.indexOf($);
          q !== -1 && K.splice(q, 1);
        }
        $.item = D, H && (A === u.length - 1 && this.$emit("scroll-end"), A === 0 && this.$emit("scroll-start")), o === null ? ($.position = c[A - 1].accumulator, $.offset = 0) : ($.position = Math.floor(A / l) * o, $.offset = A % l * s);
      }
      return this.$_startIndex = b, this.$_endIndex = h, this.emitUpdate && this.$emit("update", b, h, x, P), clearTimeout(this.$_sortTimer), this.$_sortTimer = setTimeout(this.sortViews, this.updateInterval + 300), {
        continuous: E
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
      this.listenerTarget = this.getListenerTarget(), this.listenerTarget.addEventListener("scroll", this.handleScroll, fo ? {
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
const ap = {
  key: 0,
  ref: "before",
  class: "vue-recycle-scroller__slot"
}, rp = {
  key: 1,
  ref: "after",
  class: "vue-recycle-scroller__slot"
};
function ip(e, t, o, l, s, n) {
  const a = kl("ResizeObserver"), i = Ws("observe-visibility");
  return Ae((p(), d(
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
        ap,
        [
          Y(e.$slots, "before")
        ],
        512
        /* NEED_PATCH */
      )) : _("v-if", !0),
      (p(), j(ce(o.listTag), {
        ref: "wrapper",
        style: bo({ [e.direction === "vertical" ? "minHeight" : "minWidth"]: s.totalSize + "px" }),
        class: O(["vue-recycle-scroller__item-wrapper", o.listClass])
      }, {
        default: z(() => [
          (p(!0), d(
            I,
            null,
            U(s.pool, (u) => (p(), j(ce(o.itemTag), xe({
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
            }, Us(o.skipHover ? {} : {
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
        rp,
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
Fo.render = ip;
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
    ...xs,
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
    simpleArray: ks,
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
    this.$_updates = [], this.$_undefinedSizes = 0, this.$_undefinedMap = {}, this.$_events = Ji();
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
function pp(e, t, o, l, s, n) {
  const a = kl("RecycleScroller");
  return p(), j(a, xe({
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
No.render = pp;
No.__file = "src/components/DynamicScroller.vue";
var Cs = {
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
Cs.__file = "src/components/DynamicScrollerItem.vue";
const up = ["for"], dp = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, cp = ["title"], fp = { class: "po-relative po-mt-1" }, vp = {
  role: "button",
  ref: "comboboxButton"
}, hp = ["placeholder", "disabled", "id"], mp = {
  class: /* @__PURE__ */ O(["group-hover:po-text-white po-block po-truncate"])
}, bp = {
  key: 0,
  class: "po-block po-text-xs po-opacity-60"
}, gp = {
  key: 0,
  class: "po-mt-2 po-text-sm po-text-slate-500",
  id: "-description"
}, yp = {
  key: 1,
  class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
  id: "-error"
}, wp = {
  name: "PoSelectField"
}, _p = /* @__PURE__ */ L({
  ...wp,
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
    placeholder: { default: void 0 }
  },
  emits: ["selected", "unSelected", "update:modelValue"],
  setup(e, { emit: t }) {
    const o = e, l = C(""), s = C(""), n = C(), a = C(!1), i = C(!1), u = C(), f = C(null), c = B(() => {
      var E, T;
      const $ = l.value.toLowerCase();
      return $ === "" ? ((E = o.list) == null ? void 0 : E.map((D) => ({
        ...D,
        active: n.value === D.id
      }))) ?? [] : ((T = o.list) == null ? void 0 : T.filter((D) => D.name.toLowerCase().includes($)).map((D) => ({
        ...D,
        active: n.value === D.id
      }))) ?? [];
    });
    function v($) {
      if (o.object)
        return $ == null ? void 0 : $.name;
      if (c.value) {
        let E = c.value.find((T) => T.id === $);
        return E == null ? void 0 : E.name;
      } else if (o.placeholder)
        return o.placeholder;
    }
    n.value = o.modelValue, mo(() => {
      n.value = o.modelValue;
    }), Q(n, () => {
      s.value = v(n.value);
    });
    const { errorMessage: w } = we(o), m = C(w.value !== null);
    Q(w, ($, E) => {
      m.value = w.value !== null && w.value !== "";
    });
    const g = C("");
    Ro(f, () => {
      a.value = !!i.value;
    });
    function b($) {
      n.value = $, s.value = $.name, l.value = "", t("selected", o.object ? $ : $.id), t("update:modelValue", o.object ? $ : $.id), a.value = !!i.value;
    }
    const h = C();
    let y;
    G(() => {
      o.id === "" ? g.value = o.id ? o.id : `${o.label.replace(
        /\s/g,
        ""
      )}-${Date.now()}-selectfield-${Math.floor(Math.random() * 9e3)}` : g.value = o.id, s.value = v(o.modelValue), y = jo(u.value, h.value, {
        placement: "bottom-end",
        strategy: "fixed",
        modifiers: [
          {
            name: "sameWidth",
            enabled: !0,
            fn: ({ state: $ }) => {
              $.styles.popper.width = `${$.rects.reference.width}px`;
            },
            phase: "beforeWrite",
            requires: ["computeStyles"]
          }
        ]
      });
    }), ne(() => {
      y && y.destroy();
    });
    function x() {
      i.value = !1, setTimeout(() => {
        a.value = !1;
      }, 100);
    }
    const P = ($) => {
      let E = $.target.value;
      l.value = E;
    };
    return ($, E) => (p(), d("div", {
      class: O([{ "lg:po-grid lg:po-grid-cols-2": $.display === "horizontal" }]),
      ref_key: "containerRef",
      ref: f
    }, [
      r("label", {
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700",
        for: g.value
      }, [
        r("span", null, V($.label), 1),
        $.required ? (p(), d("span", dp, "*")) : _("", !0),
        $.info !== null ? (p(), d("abbr", {
          key: 1,
          title: $.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          S(k(Ht), { class: "po-fill-current" })
        ], 8, cp)) : _("", !0)
      ], 8, up),
      r("div", fp, [
        r("div", vp, [
          Ae(r("input", {
            type: "text",
            ref_key: "selectBox",
            ref: u,
            class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm",
            placeholder: $.placeholder,
            disabled: $.disabled,
            "onUpdate:modelValue": E[0] || (E[0] = (T) => s.value = T),
            onInput: P,
            onFocus: E[1] || (E[1] = (T) => {
              i.value = !0, a.value = !0;
            }),
            onBlur: x,
            id: g.value
          }, null, 40, hp), [
            [Et, s.value]
          ]),
          r("span", {
            class: "po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-rounded-r-md po-px-2 focus:po-outline-none",
            role: "button",
            onClick: E[2] || (E[2] = (T) => a.value = !a.value)
          }, [
            S(k(Lr), {
              class: "po-h-5 po-w-5 po-text-slate-400",
              "aria-hidden": "true"
            })
          ])
        ], 512),
        Ae(r("div", {
          ref_key: "popper",
          ref: h,
          class: "po-absolute po-z-10 po-mt-1 po-w-full po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
        }, [
          S(k(No), {
            items: c.value,
            "min-item-size": 32,
            "key-field": "id",
            class: "scroller po-max-h-60 po-h-full po-overflow-y-auto"
          }, {
            default: z(({ item: T, index: D, active: R }) => [
              S(k(Cs), {
                item: T,
                active: R,
                "size-dependencies": [T.name],
                onClick: (N) => b(T),
                "data-index": D,
                class: O([
                  "po-relative po-group po-select-none po-py-2 po-pl-3 po-pr-9 po-cursor-pointer hover:po-bg-mpao-lightblue",
                  T.active ? "po-bg-mpao-lightblue po-text-white" : "po-text-slate-900"
                ])
              }, {
                default: z(() => [
                  r("span", mp, [
                    J(V((T == null ? void 0 : T.name) ?? "") + " ", 1),
                    T != null && T.subtitle ? (p(), d("span", bp, V(T == null ? void 0 : T.subtitle), 1)) : _("", !0)
                  ])
                ]),
                _: 2
              }, 1032, ["item", "active", "size-dependencies", "onClick", "data-index", "class"])
            ]),
            _: 1
          }, 8, ["items"])
        ], 512), [
          [go, a.value && c.value.length > 0]
        ])
      ]),
      $.message !== null ? (p(), d("p", gp, V($.message), 1)) : _("", !0),
      k(w) !== null ? (p(), d("p", yp, [
        r("span", null, V(k(w)), 1)
      ])) : _("", !0)
    ], 2));
  }
}), $p = /* @__PURE__ */ r("div", { class: "po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity" }, null, -1), Vp = { class: "po-fixed po-z-10 po-inset-0" }, xp = { class: "po-flex po-justify-center po-items-start po-min-h-screen sm:po-px-4 sm:po-pt-10 sm:po-pb-20 po-text-center sm:po-block po-max-h-screen po-overflow-y-hidden" }, kp = /* @__PURE__ */ r("span", {
  class: "po-hidden sm:po-inline-block sm:po-align-middle sm:po-h-screen",
  "aria-hidden": "true"
}, "​", -1), Cp = { class: "po-flex po-items-center po-bg-white po-rounded-t-xl po-p-5" }, Sp = { class: "po-grow po-text-md po-font-bold po-text-slate-600" }, Pp = { class: "po-shrink-0" }, Op = /* @__PURE__ */ r("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), Lp = {
  key: 0,
  class: "po-bg-slate-50 po-rounded-b-xl"
}, Tp = {
  name: "PoModal"
}, wt = /* @__PURE__ */ L({
  ...Tp,
  props: {
    openBtnLabel: { default: "" },
    modalTitle: { default: "Modal windows" },
    show: { type: Boolean, default: !1 },
    modalWidth: { default: "sm:po-max-w-xl" },
    modalHeight: { default: "" }
  },
  emits: ["modal-closed"],
  setup(e, { emit: t }) {
    const o = e, { show: l } = we(o), s = C(!1);
    Q(l, () => {
      s.value = l.value;
    });
    function n() {
      s.value = !1, t("modal-closed", !0);
    }
    const a = o.modalTitle.toLowerCase().replace(/\s+/g, "-"), i = new URLSearchParams(window.location.search);
    return s.value = i.get("modal") !== void 0 && i.get("modal") === a, (u, f) => (p(), d("div", null, [
      u.openBtnLabel.length > 0 ? (p(), j(k(To), {
        key: 0,
        label: u.openBtnLabel,
        onClick: f[0] || (f[0] = (c) => s.value = !0)
      }, null, 8, ["label"])) : _("", !0),
      (p(), j(ft, { to: "body" }, [
        S(k(bt), {
          as: "template",
          show: s.value
        }, {
          default: z(() => [
            S(k(Dt), {
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
                    $p
                  ]),
                  _: 1
                }),
                r("div", Vp, [
                  r("div", xp, [
                    kp,
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
                        S(k(It), {
                          class: O(["po-relative po-inline-block po-align-bottom po-bg-white sm:po-rounded-xl po-text-left po-shadow-xl po-transform po-transition-all sm:po-align-top po-w-full", u.modalWidth])
                        }, {
                          default: z(() => [
                            r("div", Cp, [
                              r("h3", Sp, V(u.modalTitle), 1),
                              r("div", Pp, [
                                r("span", {
                                  role: "button",
                                  class: "po-block",
                                  onClick: n
                                }, [
                                  S(k(vt), { class: "po-w-5 po-stroke-slate-500 hover:po-stroke-mpao-orange po-transition-colors po-duration-150 po-ease-in-out" })
                                ])
                              ])
                            ]),
                            Op,
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
                            u.$slots.footer ? (p(), d("div", Lp, [
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
function Ep(e, t) {
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
function Bp(e, t) {
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
function zp(e, t) {
  return p(), d("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    r("path", { d: "M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" })
  ]);
}
function Ss(e, t) {
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
function Mp(e, t) {
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
const Ap = ["for"], Dp = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Ip = ["title"], jp = ["name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], Rp = ["id"], Fp = ["id"], Np = {
  name: "PoTextarea"
}, Hp = /* @__PURE__ */ L({
  ...Np,
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
        l.required ? (p(), d("span", Dp, "*")) : _("", !0),
        l.info !== null ? (p(), d("abbr", {
          key: 1,
          title: l.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          S(k(Ss))
        ], 8, Ip)) : _("", !0)
      ], 8, Ap),
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
      }), null, 16, jp),
      l.message !== null ? (p(), d("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${l.id}-description`
      }, V(l.message), 9, Rp)) : _("", !0),
      l.errorMessage !== null ? (p(), d("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${l.id}-error`
      }, V(l.errorMessage), 9, Fp)) : _("", !0)
    ], 2));
  }
}), qp = { class: "shell-sidebar--icon" }, Wp = /* @__PURE__ */ r("span", { class: "shell-sidebar--label po-font-medium" }, "Feedback", -1), Up = { action: "" }, Gp = /* @__PURE__ */ r("br", null, null, -1), Zp = { class: "po-p-5" }, Kp = /* @__PURE__ */ L({
  __name: "feedbackForm",
  setup(e) {
    const t = C(!1), o = [
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
    ], l = C({
      type: 1,
      message: ""
    });
    return (s, n) => (p(), d(I, null, [
      r("button", {
        onClick: n[0] || (n[0] = re(() => t.value = !0, ["prevent"])),
        class: "shell-sidebar--item",
        title: "Go to feedback"
      }, [
        r("span", qp, [
          S(k(on), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" })
        ]),
        Wp
      ]),
      S(wt, {
        show: t.value,
        onModalClosed: n[3] || (n[3] = () => t.value = !1),
        "modal-title": "Feedback"
      }, {
        content: z(() => [
          r("form", Up, [
            S(_p, {
              label: "Type",
              list: o,
              modelValue: l.value.type,
              "onUpdate:modelValue": n[1] || (n[1] = (a) => l.value.type = a)
            }, null, 8, ["modelValue"]),
            Gp,
            S(Hp, {
              cols: "6",
              rows: "6",
              label: "Description",
              modelValue: l.value.message,
              "onUpdate:modelValue": n[2] || (n[2] = (a) => l.value.message = a)
            }, null, 8, ["modelValue"])
          ])
        ]),
        footer: z(() => [
          r("div", Zp, [
            S(To, {
              label: "Send",
              type: "button"
            })
          ])
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Yp = { class: "po-grow" }, Xp = { class: "shell-sidebar--menu" }, Qp = ["onClick"], Jp = { class: "shell-sidebar--icon" }, eu = { class: "shell-sidebar--label po-font-medium po-text-left" }, tu = { key: 0 }, ou = { class: "shell-sidebar--menu sidebar-apps po-shrink-0 po-mb-0" }, lu = ["onClick"], su = { class: "shell-sidebar--icon" }, nu = ["innerHTML"], au = { class: "shell-sidebar--label po-font-medium po-text-left" }, ru = {
  key: 0,
  class: "shell-sidebar--menu po-shrink-0 po-mb-0 po-border-t po-border-slate-200 po-pt-3"
}, iu = {
  name: "PoSidebarDrawer"
}, Y4 = /* @__PURE__ */ L({
  ...iu,
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
    const o = e, l = B(() => {
      var m, g;
      let v = [];
      const w = (m = o.apps) == null ? void 0 : m.filter((b) => b.code == o.appCode)[0];
      if (w) {
        let b = (g = o.apps) == null ? void 0 : g.filter(
          (h) => w.related.includes(h.code)
        );
        b == null || b.forEach((h) => {
          v.push(h);
        });
      }
      return v;
    }), s = B(() => `sidebar-is-${a.value}`), n = C(null), a = C();
    function i() {
      window.innerWidth <= 1024 && n.value && (n.value.checked = !n.value.checked, a.value = n.value.checked);
    }
    G(() => {
      var v;
      a.value = (v = n.value) == null ? void 0 : v.checked;
    });
    function u(v, w) {
      t(v, w), i();
    }
    function f() {
      n.value && (a.value = n.value.checked);
    }
    function c(v) {
      return a.value ? "" : v;
    }
    return (v, w) => {
      var m;
      return p(), d(I, null, [
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
          r("div", Yp, [
            (p(!0), d(I, null, U(v.content, (g, b) => (p(), d("div", {
              key: `sidebar-group-${b}`
            }, [
              S(k(ll), { defaultOpen: !0 }, {
                default: z(({ open: h }) => [
                  g.groupName ? (p(), j(k(sl), {
                    key: 0,
                    class: O([h ? "" : "po-mb-3", "shell-sidebar--section po-w-full po-text-left"])
                  }, {
                    default: z(() => [
                      J(V(g.groupName), 1)
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
                          r("ul", Xp, [
                            (p(!0), d(I, null, U(g.items, (y) => (p(), d("li", {
                              key: y.label
                            }, [
                              r("span", null, [
                                S(k(vo), {
                                  text: c(y.label),
                                  placement: "right",
                                  strategy: "fixed"
                                }, {
                                  default: z(() => [
                                    y.disabled ? _("", !0) : (p(), d("button", {
                                      key: 0,
                                      onClick: (x) => u("button-click", y.url),
                                      class: O([
                                        "shell-sidebar--item",
                                        { active: y.url == v.currRoute }
                                      ])
                                    }, [
                                      r("span", Jp, [
                                        (p(), j(ce(y.icon), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" }))
                                      ]),
                                      r("span", eu, V(y.label), 1)
                                    ], 10, Qp))
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
            ((m = l.value) == null ? void 0 : m.length) > 0 ? (p(), d("div", tu, [
              S(k(ll), { defaultOpen: !0 }, {
                default: z(({ open: g }) => [
                  v.appsLabel ? (p(), j(k(sl), {
                    key: 0,
                    class: O([g ? "" : "po-mb-3", "shell-sidebar--section po-w-full po-text-left"])
                  }, {
                    default: z(() => [
                      J(V(v.appsLabel), 1)
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
                          r("ul", ou, [
                            (p(!0), d(I, null, U(l.value, (b, h) => (p(), d("li", null, [
                              S(k(vo), {
                                text: c(b.name),
                                placement: "right",
                                strategy: "fixed"
                              }, {
                                default: z(() => [
                                  r("button", {
                                    onClick: (y) => u("app-click", b.name),
                                    class: O(["shell-sidebar--item", [{ active: b.current }]]),
                                    title: "Go to feedback"
                                  }, [
                                    r("span", su, [
                                      r("span", {
                                        innerHTML: b.icon,
                                        class: "po-text-slate-600 po-w-5"
                                      }, null, 8, nu)
                                    ]),
                                    r("span", au, V(b.name), 1)
                                  ], 10, lu)
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
          v.hasFeedback ? (p(), d("ul", ru, [
            r("li", null, [
              S(Kp)
            ])
          ])) : _("", !0)
        ]))
      ], 64);
    };
  }
}), pu = {
  key: 0,
  class: "shell-content--action-bar"
}, uu = { class: "action-bar__nav" }, du = ["onClick"], cu = { class: "action-bar__nav_label po-font-medium" }, fu = {
  key: 0,
  class: "po-shrink-0 po-flex po-space-x-1"
}, vu = /* @__PURE__ */ r("span", { class: "action-bar__nav_label po-font-medium" }, "Go Back", -1), hu = {
  name: "PoActionBar"
}, X4 = /* @__PURE__ */ L({
  ...hu,
  props: {
    items: { default: null },
    showBackButton: { type: Boolean, default: !1 },
    currPageRoute: { default: "" }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, l) => o.items !== null && o.items.length > 0 || o.showBackButton ? (p(), d("section", pu, [
      r("nav", uu, [
        (p(!0), d(I, null, U(o.items, (s) => (p(), d("span", {
          onClick: (n) => o.$emit("button-click", s.label),
          class: O([[
            { "action-bar__nav_highlighted": s.highlighted },
            { "action-bar__nav_danger": s.danger }
          ], "action-bar__nav_link"])
        }, [
          (p(), j(ce(s.icon), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" })),
          r("span", cu, V(s.label), 1)
        ], 10, du))), 256))
      ]),
      o.showBackButton ? (p(), d("nav", fu, [
        r("span", {
          onClick: l[0] || (l[0] = (s) => o.$emit("button-click", "back")),
          class: "action-bar__nav_link"
        }, [
          vu,
          (p(), j(ce(k(Xs)), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" }))
        ])
      ])) : _("", !0)
    ])) : _("", !0);
  }
}), mu = { class: "po-shadow-sm po-rounded-xl po-bg-white po-relative" }, bu = {
  key: 0,
  class: "po-absolute po-right-2 po-top-2 po-p-2 po-rounded-lg"
}, gu = {
  key: 0,
  class: "po-text-base po-font-medium po-text-slate-600"
}, yu = {
  key: 1,
  class: "lg:po-col-span-2 lg:po-flex lg:po-justify-end po-space-x-2"
}, wu = {
  name: "PoCard"
}, Q4 = /* @__PURE__ */ L({
  ...wu,
  props: {
    title: { default: "" },
    isLoading: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, o) => (p(), d("div", mu, [
      t.isLoading ? (p(), d("div", bu, [
        S(Nt)
      ])) : _("", !0),
      r("div", {
        class: O([
          { "po-grid po-grid-cols-1 lg:po-grid-cols-3 po-gap-3": t.$slots.action }
        ])
      }, [
        t.title.length > 0 ? (p(), d("h3", gu, V(t.title), 1)) : _("", !0),
        t.$slots.action ? (p(), d("div", yu, [
          Y(t.$slots, "action")
        ])) : _("", !0)
      ], 2),
      Y(t.$slots, "content")
    ]));
  }
}), _u = { class: "po-py-3 po-px-5 po-border-b po-border-slate-200" }, $u = {
  class: "po-flex po-w-full md:po-ml-0",
  action: "#",
  method: "GET"
}, Vu = {
  for: "search-field",
  class: "po-sr-only"
}, xu = { class: "po-relative po-w-full po-text-slate-400 focus-within:po-text-mpao-lightblue po-transition-colors po-duration-100 po-ease-in-out" }, ku = { class: "po-pointer-events-none po-absolute po-inset-y-0 po-left-0 po-flex po-items-center" }, Cu = ["placeholder", "value"], Su = ["disabled"], Pu = {
  name: "PoCardSearch"
}, J4 = /* @__PURE__ */ L({
  ...Pu,
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
    return (l, s) => (p(), d("div", _u, [
      r("form", $u, [
        r("label", Vu, V(l.placeholder), 1),
        r("div", xu, [
          r("div", ku, [
            S(k(yo), { class: "po-h-5 po-w-5 po-flex-shrink-0" })
          ]),
          r("input", {
            name: "search-field",
            id: "desktop-search-field",
            placeholder: l.placeholder,
            value: l.modelValue,
            onInput: o,
            class: "po-h-full po-w-full po-border-transparent po-py-2 po-pl-8 po-pr-3 po-text-sm po-text-slate-700 po-placeholder-slate-500 focus:po-border-transparent focus:po-placeholder-slate-400 focus:po-outline-none focus:po-ring-0",
            type: "search"
          }, null, 40, Cu),
          l.showBtn ? (p(), d("button", {
            key: 0,
            class: O(["po-absolute po-right-0 po-text-sm po-rounded-full po-px-3 po-py-2 po-transition-colors po-duration-150 po-ease-out", [
              { "po-bg-mpao-lightblue po-text-white": l.modelValue !== "" },
              { "po-bg-slate-100 po-text-slate-400": l.modelValue === "" }
            ]]),
            disabled: l.modelValue === "",
            onClick: s[0] || (s[0] = re((n) => l.$emit("button-click", l.modelValue), ["prevent"]))
          }, " Search ", 10, Su)) : _("", !0)
        ])
      ])
    ]));
  }
}), Ou = { class: "po-flex po-items-center" }, Lu = { class: "po-text-sm po-font-medium po-text-slate-500 po-pr-2" }, Tu = {
  name: "PoPagination"
}, Eu = /* @__PURE__ */ L({
  ...Tu,
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
    const n = B(() => o.totalPages ? `Page ${o.currentPage} of ${o.totalPages}` : o.pagination ? o.pagination.label : "");
    return (a, i) => (p(), d("div", Ou, [
      r("span", Lu, V(n.value), 1),
      r("button", {
        title: "Previous",
        onClick: l,
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        S(k(sn), { class: "po-w-4 po-stroke-current po-stroke-2" })
      ]),
      r("button", {
        title: "Next",
        onClick: s,
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        S(k(nn), { class: "po-w-4 po-stroke-current po-stroke-2" })
      ])
    ]));
  }
}), Bu = { key: 0 }, zu = {
  class: "po-text-xl md:po-text-2xl po-font-semibold po-text-slate-800",
  id: "po-page-title"
}, Mu = {
  key: 0,
  class: "po-text-base po-mt-2 po-max-w-md po-block po-text-slate-500"
}, Au = { key: 1 }, Du = { class: "po-grid po-grid-cols-1 lg:po-grid-cols-2 po-gap-5" }, Iu = {
  class: "po-text-xl md:po-text-2xl po-font-semibold po-text-slate-800",
  id: "po-page-title"
}, ju = {
  key: 0,
  class: "po-text-base po-mt-4 po-max-w-md po-pb-5 po-block po-text-slate-500"
}, Ru = { class: "po-flex po-items-end po-justify-end po-flex-col" }, Fu = {
  key: 0,
  class: "po-flex md:po-justify-end po-mb-5"
}, Nu = { class: "po-bg-slate-50 po-shadow-sm po-rounded-xl po-py-5 po-px-2 po-divide-x po-divide-slate-200 po-flex" }, Hu = ["onClick"], qu = { class: "po-text-xl po-font-medium po-text-slate-600 po-flex po-items-center po-space-x-1" }, Wu = { class: "po-text-xl po-font-medium po-text-slate-600 group-hover:po-text-mpao-lightblue" }, Uu = { class: "po-text-sm po-text-slate-500 po-block group-hover:po-text-mpao-lightblue" }, Gu = { class: "po-flex po-items-center po-space-x-1 md:po-justify-end" }, Zu = {
  key: 2,
  class: "po-border-l po-border-slate-400 po-h-3 po-w-3 po-ml-1"
}, Ku = {
  key: 0,
  class: "po-bg-slate-50 po-p-5 po-mt-5 po-rounded-md po-grid po-grid-cols-1 md:po-grid-cols-3 po-gap-5"
}, Yu = /* @__PURE__ */ r("span", { class: "po-text-xs po-text-slate-500 po-py-5" }, "No filters available at the moment.", -1), Xu = {
  name: "PoPageTitle"
}, e2 = /* @__PURE__ */ L({
  ...Xu,
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
    const l = e.filterOn ? C(!0) : C(!1);
    function s(a) {
      t("pagination-click", a);
    }
    function n(a) {
      return a.iconColor ? a.iconColor : "po-slate-600";
    }
    return (a, i) => a.standAlone ? (p(), d("div", Bu, [
      r("h1", zu, V(a.label), 1),
      a.description !== "" ? (p(), d("span", Mu, V(a.description), 1)) : _("", !0)
    ])) : (p(), d("div", Au, [
      r("div", Du, [
        r("div", null, [
          r("h1", Iu, V(a.label), 1),
          a.description !== "" ? (p(), d("span", ju, V(a.description), 1)) : _("", !0)
        ]),
        r("div", Ru, [
          a.stats !== null ? (p(), d("div", Fu, [
            r("div", Nu, [
              (p(!0), d(I, null, U(a.stats, (u) => (p(), d("div", {
                class: "po-px-5 po-cursor-pointer po-group genie-effect",
                onClick: (f) => a.$emit("stat-click", u)
              }, [
                r("span", qu, [
                  r("span", Wu, V(u.value), 1),
                  u.icon ? (p(), d("span", {
                    key: 0,
                    class: O(["po-w-5 po-h-5", n(u)])
                  }, [
                    (p(), j(ce(u.icon)))
                  ], 2)) : _("", !0)
                ]),
                r("span", Uu, V(u.label), 1)
              ], 8, Hu))), 256))
            ])
          ])) : _("", !0),
          r("div", Gu, [
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
              S(k(rn), { class: "po-w-4 po-stroke-current po-stroke-2" })
            ], 2)) : _("", !0),
            a.showDownload ? (p(), d("button", {
              key: 1,
              title: "Download",
              onClick: i[1] || (i[1] = (u) => a.$emit("button-click", "download")),
              class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
            }, [
              S(k(Ks), { class: "po-w-4 po-stroke-current po-stroke-2" })
            ])) : _("", !0),
            a.showFilter && a.showPagination || a.showDownload && a.showPagination ? (p(), d("span", Zu, " ")) : _("", !0),
            a.showPagination ? (p(), j(Eu, {
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
          k(l) ? (p(), d("div", Ku, [
            Y(a.$slots, "filters", {}, () => [
              Yu
            ])
          ])) : _("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), Qu = {
  key: 0,
  class: "po-w-12"
}, Ju = ["onClick"], ed = { class: "po-flex po-space-x-1 po-pr-2 po-items-center" }, td = { class: "po-grow" }, od = {
  key: 0,
  class: "po-shrink-0 po-select-none po-bg-slate-100 po-rounded-md po-w-4 po-h-4 po-flex po-items-center po-justify-center po-cursor-pointer",
  role: "button"
}, ld = {
  key: 0,
  class: "po-w-12"
}, sd = ["onClick"], nd = ["colspan"], ad = { key: 1 }, rd = ["colspan"], id = { class: "po-py-10 po-block po-normal-case" }, pd = { class: "po-pr-5" }, ud = { class: "po-py-1" }, dd = { key: 0 }, cd = {
  name: "PoTable",
  components: { ArrowRightCircleIcon: is }
}, t2 = /* @__PURE__ */ L({
  ...cd,
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
    const o = e, { isLoading: l, tbody: s, thead: n } = we(o), a = C(!1), i = C(null), u = C(null), f = C(null);
    Q(l, () => {
      c();
    }), Q(s, () => {
      c(), v();
    }), G(() => {
      c(), v(), i.value = n.value;
    });
    function c() {
      a.value = l.value, u.value = s.value, l.value && (u.value = [{}, {}, {}, {}, {}]);
    }
    function v() {
      if (o.hasDetailsRow && o.tbody)
        for (let g = 0; g < o.tbody.length; g++)
          o.tbody[g].showDetails = !1;
    }
    function w() {
      return Math.floor(Math.random() * 41) + 40;
    }
    const m = (g, b) => {
      var h;
      g.sortable && (g.sorted && f.value === "asc" ? f.value = "desc" : f.value = "asc", (h = i.value) == null || h.forEach((y) => {
        y.label === g.label ? (y.sorted = !0, y.sortDirection = f.value, y.index = b) : (y.sorted = !1, y.sortDirection = null);
      }), t("column-click", g));
    };
    return (g, b) => (p(), d("table", {
      class: O(["table-responsive po-w-full", [{ lg: g.breakAtLg }]])
    }, [
      r("thead", null, [
        r("tr", null, [
          g.hasDetailsRow ? (p(), d("th", Qu)) : _("", !0),
          (p(!0), d(I, null, U(i.value, (h, y) => (p(), d("th", {
            onClick: (x) => m(h, y)
          }, [
            r("span", ed, [
              r("span", td, [
                Y(g.$slots, "th", Xe(Qe(h)))
              ]),
              h.sortable ? (p(), d("span", od, [
                h.sorted ? _("", !0) : (p(), j(k(Pr), {
                  key: 0,
                  class: "po-w-3 po-h-3"
                })),
                h.sorted && h.sortDirection === "asc" ? (p(), j(k(Sr), {
                  key: 1,
                  class: "po-w-3 po-h-3"
                })) : _("", !0),
                h.sorted && h.sortDirection === "desc" ? (p(), j(k(Cr), {
                  key: 2,
                  class: "po-w-3 po-h-3"
                })) : _("", !0)
              ])) : _("", !0)
            ])
          ], 8, Ju))), 256))
        ])
      ]),
      r("tbody", null, [
        u.value !== null && !a.value || u.value !== null && u.value.length !== 0 && !a.value ? (p(!0), d(I, { key: 0 }, U(u.value, (h, y) => (p(), d(I, null, [
          r("tr", null, [
            g.hasDetailsRow ? (p(), d("td", ld, [
              r("span", {
                onClick: (x) => h.showDetails = !h.showDetails
              }, [
                S(k(is), {
                  class: O(["po-w-5 po-fill-mpao-lightblue po-origin-center po-transition-transform po-duration-100 po-ease-out po-cursor-pointer", [{ "po-rotate-90": h.showDetails }]])
                }, null, 8, ["class"])
              ], 8, sd)
            ])) : _("", !0),
            Y(g.$slots, "td", Xe(Qe({ ...h, index: y, item: h })))
          ]),
          g.hasDetailsRow ? (p(), d("tr", {
            key: 0,
            class: O(["po-table-details-row", [{ "po-hidden": !h.showDetails }]])
          }, [
            k(n) ? (p(), d("td", {
              key: 0,
              colspan: k(n).length + 1
            }, [
              Y(g.$slots, "details", Xe(Qe({ item: h })))
            ], 8, nd)) : _("", !0)
          ], 2)) : _("", !0)
        ], 64))), 256)) : _("", !0),
        u.value == null && !a.value || u.value !== null && u.value.length == 0 && !a.value ? (p(), d("tr", ad, [
          k(n) ? (p(), d("td", {
            key: 0,
            colspan: k(n).length + 1,
            class: "po-text-center"
          }, [
            r("span", id, V(g.emptyMessage), 1)
          ], 8, rd)) : _("", !0)
        ])) : _("", !0),
        a.value ? (p(!0), d(I, { key: 2 }, U(u.value, (h) => (p(), d("tr", null, [
          (p(!0), d(I, null, U(k(n), (y) => (p(), d("td", pd, [
            r("div", ud, [
              r("div", {
                class: "po-h-2 loading-placeholder po-rounded-full",
                style: bo({ width: w() + "%" })
              }, null, 4)
            ])
          ]))), 256))
        ]))), 256)) : _("", !0)
      ]),
      g.$slots.tfoot ? (p(), d("tfoot", dd, [
        r("tr", null, [
          Y(g.$slots, "tfoot")
        ])
      ])) : _("", !0)
    ], 2));
  }
}), fd = { class: "" }, vd = { class: "po-grow" }, hd = ["onClick"], md = {
  name: "PoDescriptionList"
}, bd = /* @__PURE__ */ L({
  ...md,
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
          (p(!0), d(I, null, U(o.items, (s) => (p(), d("div", null, [
            r("dt", null, V(s.title), 1),
            r("dd", fd, [
              r("span", vd, V(s.description), 1),
              s.action !== void 0 ? (p(), d("span", {
                key: 0,
                class: "po-shrink-0 po-text-mpao-lightblue hover:po-text-mpao-blue po-transition-colors po-duration-100 po-ease-in-out po-px-2 po-cursor-pointer",
                onClick: (n) => o.$emit("button-click", s.action)
              }, V(typeof s.action == "string" ? s.action : s.action.label), 9, hd)) : _("", !0)
            ])
          ]))), 256))
        ])
      ], 2)
    ]));
  }
}), gd = ["for"], yd = { class: "po-capitalize" }, wd = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, _d = ["title"], $d = ["type", "name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], Vd = ["id"], xd = ["id"], kd = {
  name: "PoInputField"
}, o2 = /* @__PURE__ */ L({
  ...kd,
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
    const { errorMessage: s } = we(o), n = C(s.value !== null);
    Q(s, (m, g) => {
      n.value = s.value !== null && s.value !== "";
    }), Q(s, (m, g) => {
      n.value = s.value !== null && s.value !== "";
    });
    let a = o.type === "currency" ? "text" : o.type;
    const i = C(void 0), u = (m) => {
      let g = m.target.value;
      i.value = g;
      let b = o.type === "currency" ? v(g) : g;
      console.log(o.modelModifiers), t("update:modelValue", b);
    }, f = (m) => {
      c(m.target.value);
    };
    Q(o, (m, g) => {
      o.type === "currency" && i.value !== g.modelValue ? i.value = "" + Qo(o.modelValue) : i.value = o.modelValue;
    });
    const c = (m) => {
      let g = "";
      o.type === "currency" ? g = "" + Qo(v("" + m)) : g = m, i.value = g;
    }, v = (m) => {
      let g = m.replace(/,/g, "");
      const b = g.indexOf(".");
      return b !== -1 && g.substring(b + 1) === "00" && (g = g.substring(0, b)), g;
    };
    o.type === "currency" ? c(o.modelValue) : i.value = o.modelValue;
    const w = C("");
    return G(() => {
      o.id === "" ? w.value = o.id ? o.id : `${o.label.replace(
        /\s/g,
        ""
      )}-${Date.now()}-inputfield-${Math.floor(Math.random() * 9e3)}` : w.value = o.id;
    }), (m, g) => (p(), d("div", {
      class: O(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": m.display === "horizontal" }]])
    }, [
      r("label", {
        for: w.value,
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700"
      }, [
        r("span", yd, V(m.label), 1),
        m.required ? (p(), d("span", wd, "*")) : _("", !0),
        m.info !== null ? (p(), d("abbr", {
          key: 1,
          title: m.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          S(k(Ht), { class: "po-fill-current" })
        ], 8, _d)) : _("", !0)
      ], 8, gd),
      r("input", xe({
        type: k(a),
        name: `${w.value}-field`,
        id: w.value,
        value: i.value,
        placeholder: m.placeholder,
        disabled: m.disabled,
        required: m.required,
        "aria-describedby": `${w.value}-description`,
        "aria-required": m.required,
        "aria-disabled": m.disabled
      }, m.$attrs, {
        onInput: u,
        onBlur: f,
        class: [
          "po-mt-1 peer po-block po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white focus:po-ring-0 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default",
          l()
        ]
      }), null, 16, $d),
      m.message !== null ? (p(), d("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${m.id}-description`
      }, V(m.message), 9, Vd)) : _("", !0),
      n.value && k(s) !== null ? (p(), d("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
        id: `${m.id}-error`
      }, [
        r("span", null, V(k(s)), 1)
      ], 8, xd)) : _("", !0)
    ], 2));
  }
}), Cd = { class: "po-text-sm po-font-medium po-text-slate-700 peer-focus:po-text-mpao-lightblue peer-invalid:po-text-red-500 peer-invalid:peer-focus:po-text-red-600 po-flex po-items-center po-space-x-1 po-capitalize" }, Sd = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Pd = ["name", "id", "value"], Od = ["for"], Ld = { class: "po-flex po-items-center po-space-x-1" }, Td = {
  key: 0,
  class: "po-text-sm"
}, Ed = {
  key: 1,
  class: "po-text-sm"
}, Bd = ["id"], zd = ["id"], Md = {
  name: "PoInputFile"
}, l2 = /* @__PURE__ */ L({
  ...Md,
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
    B(() => `width: ${o.progress}%`), B(() => o.progress);
    const l = C(""), s = (a) => {
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
      r("span", Cd, [
        r("span", null, V(a.label), 1),
        a.required ? (p(), d("span", Sd, "*")) : _("", !0)
      ]),
      r("input", {
        name: `${a.id}-upload`,
        id: `${a.id}-fileupload`,
        value: a.modelValue,
        type: "file",
        onInput: n,
        onChange: i[0] || (i[0] = (u) => s(u)),
        class: "po-sr-only po-peer"
      }, null, 40, Pd),
      r("label", {
        for: `${a.id}-fileupload`,
        class: "po-mt-1 po-block po-w-full po-border po-cursor-pointer po-rounded-md po-border-slate-300 po-bg-white peer-focus:po-border-mpao-lightblue invalid:po-border-red-400 invalid:focus:po-border-red-600 invalid:focus:po-ring-red-600 sm:po-text-sm po-p-2"
      }, [
        r("div", Ld, [
          S(k(Lt), { class: "po-w-4 po-stroke-slate-500" }),
          l.value ? (p(), d("span", Td, V(l.value), 1)) : (p(), d("span", Ed, "Choose file"))
        ])
      ], 8, Od),
      a.message !== null ? (p(), d("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${a.id}-description`
      }, V(a.message), 9, Bd)) : _("", !0),
      a.errorMessage !== null ? (p(), d("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${a.id}-error`
      }, V(a.errorMessage), 9, zd)) : _("", !0)
    ], 2));
  }
}), Ad = { class: "po-text-sm po-font-medium po-text-slate-700 po-cursor-pointer po-select-none po-flex po-items-center po-space-x-1" }, Dd = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Id = {
  name: "PoToggle"
}, s2 = /* @__PURE__ */ L({
  ...Id,
  props: {
    modelValue: { type: Boolean, default: !1 },
    label: { default: "" },
    required: { type: Boolean, default: !1 }
  },
  setup(e) {
    const o = C(e.modelValue);
    return (l, s) => (p(), j(k(wa), {
      as: "div",
      class: "po-flex po-items-center"
    }, {
      default: z(() => [
        S(k(_a), {
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
        S(k($a), {
          as: "span",
          class: "po-ml-3"
        }, {
          default: z(() => [
            r("span", Ad, [
              r("span", null, V(l.label), 1),
              l.required ? (p(), d("span", Dd, "*")) : _("", !0)
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), jd = { class: "po-pt-1 po-space-y-1 po-border-r-2 po-border-slate-200 po-relative" }, Rd = ["onClick"], Fd = {
  name: "PoSectionMenu"
}, n2 = /* @__PURE__ */ L({
  ...Fd,
  props: {
    currPageRoute: { default: "" },
    menuItems: { default: null }
  },
  setup(e) {
    return (t, o) => (p(), d("ul", jd, [
      (p(!0), d(I, null, U(t.menuItems, (l) => (p(), d("li", null, [
        r("span", {
          onClick: (s) => t.$emit("link-click", l.link),
          role: "button",
          class: O([
            "po-relative po-cursor-pointer -po-right-[0.15rem] po-py-1 po-border-r-2 hover:po-border-mpao-lightblue po-transition-colors po-duration-200 po-ease-in-out po-flex po-items-center po-space-x-2",
            {
              "po-border-mpao-lightblue po-text-sm po-text-mpao-lightblue": l.link == t.currPageRoute
            },
            {
              "po-border-slate-200 po-text-sm po-text-slate-600": l.link !== t.currPageRoute
            }
          ])
        }, [
          (p(), j(ce(l.icon), { class: "po-w-4 po-h-4 po-stroke-current" })),
          r("span", null, V(l.label), 1)
        ], 10, Rd)
      ]))), 256))
    ]));
  }
}), Nd = { class: "po-relative po-flex po-items-start" }, Hd = { class: "po-flex po-h-5 po-items-center" }, qd = ["name", "id", "checked", "disabled", "aria-describedby"], Wd = { class: "po-ml-3 po-text-sm" }, Ud = ["for"], Gd = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Zd = ["id"], Kd = { class: "po-sr-only" }, Yd = ["id"], Xd = {
  name: "PoCheckbox"
}, a2 = /* @__PURE__ */ L({
  ...Xd,
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
      r("div", Nd, [
        r("div", Hd, [
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
          }), null, 16, qd)
        ]),
        r("div", Wd, [
          r("label", {
            for: o.id,
            class: "po-font-medium po-text-slate-600 po-cursor-pointer po-select-none po-flex po-items-center po-space-x-1"
          }, [
            r("span", null, V(o.label), 1),
            o.required ? (p(), d("span", Gd, "*")) : _("", !0)
          ], 8, Ud),
          o.message ? (p(), d("span", {
            key: 0,
            id: `${o.id}-description`,
            class: "po-text-slate-500 po-cursor-default"
          }, [
            r("span", Kd, V(o.label), 1),
            J(" " + V(o.message), 1)
          ], 8, Zd)) : _("", !0)
        ])
      ]),
      o.errorMessage !== null ? (p(), d("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${o.id}-error`
      }, V(o.errorMessage), 9, Yd)) : _("", !0)
    ]));
  }
}), Qd = /* @__PURE__ */ r("div", { class: "po-pb-5 po-max-w-xl" }, [
  /* @__PURE__ */ r("span", { class: "po-text-sm po-text-slate-600" }, "We're always working to improve our app, and we're excited to share the latest changes with you. We hope you enjoy these new features and improvements")
], -1), Jd = { class: "po-flex po-space-x-2" }, ec = ["onClick"], tc = { class: "po-text-sm po-font-semibold po-slate-800" }, oc = { class: "po-text-xs po-text-white po-px-1 po-py-0 po-rounded-md po-bg-mpao-lightblue" }, lc = { class: "po-bg-gradient-to-t po-from-mpao-orange/20 po-via-mpao-lightblue/20 po-to-purple-500/10 -po-mb-5 -po-mx-5 po-p-5 po-pb-10" }, sc = { key: 0 }, nc = { class: "po-space-y-2 po-mt-5" }, ac = { class: "po-border po-border-slate-200 po-rounded-lg po-p-3 po-bg-white" }, rc = { class: "po-flex po-items-center po-space-x-2" }, ic = { class: "po-text-mpao-lightblue po-grow po-text-lg" }, pc = { class: "po-font-semibold po-shrink-0 po-text-mpao-lightblue po-text-sm po-px-2 po-py-1 po-rounded-xl po-bg-mpao-lightblue/10" }, uc = ["innerHTML"], dc = {
  key: 0,
  class: "po-bg-white po-rounded-md po-px-4 po-py-3 po-block po-text-sm po-text-center po-text-mpao-lightblue hover:po-text-purple-600 po-cursor-pointer"
}, cc = /* @__PURE__ */ L({
  __name: "ChangeLogModel",
  props: {
    changelog: { default: null },
    showBtn: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = C(!1), o = C(0);
    return (l, s) => (p(), d(I, null, [
      l.showBtn ? (p(), d("a", {
        key: 0,
        href: "#",
        onClick: s[0] || (s[0] = re((n) => t.value = !0, ["prevent"])),
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
            Qd,
            r("div", Jd, [
              (p(!0), d(I, null, U(l.changelog, (n, a) => (p(), d("span", {
                class: O(["po-flex po-items-center po-space-x-1 po-px-4 po-py-3 po-rounded-t-xl po-cursor-pointer", [{ "po-bg-purple-500/10": o.value === a }]]),
                onClick: (i) => o.value = a
              }, [
                r("span", tc, V(n.label) + " Version", 1),
                r("span", oc, V(n.latest_version), 1)
              ], 10, ec))), 256))
            ]),
            r("div", lc, [
              (p(!0), d(I, null, U(l.changelog, (n, a) => (p(), d("div", null, [
                o.value === a ? (p(), d("div", sc, [
                  r("div", nc, [
                    (p(!0), d(I, null, U(n.version_history, (i) => (p(), d("div", ac, [
                      r("span", rc, [
                        r("span", ic, V(i.date), 1),
                        r("span", pc, V(i.version), 1)
                      ]),
                      r("div", {
                        class: "po-mt-3 po-prose-sm po-prose-slate",
                        innerHTML: i.note
                      }, null, 8, uc)
                    ]))), 256)),
                    n.hasMore ? (p(), d("span", dc, "More")) : _("", !0)
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
}), Ut = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [l, s] of t)
    o[l] = s;
  return o;
}, fc = {}, vc = {
  class: "po-h-8",
  src: "https://pension.gov.mv/asset/image/en-ccc-2020-issa.png",
  alt: "issa Certificate"
};
function hc(e, t) {
  return p(), d("img", vc);
}
const mc = /* @__PURE__ */ Ut(fc, [["render", hc]]), bc = {}, gc = {
  class: "po-h-8",
  src: "https://pension.gov.mv/asset/image/iso_logo.png",
  alt: "ISO 27001 Certificate"
};
function yc(e, t) {
  return p(), d("img", gc);
}
const wc = /* @__PURE__ */ Ut(bc, [["render", yc]]), _c = { class: "-po-m-5" }, $c = ["src", "alt"], $l = /* @__PURE__ */ L({
  __name: "CertificateModel",
  props: {
    src: { default: "" },
    title: { default: "" },
    logo: { default: null }
  },
  setup(e) {
    const t = C(!1);
    return (o, l) => (p(), d(I, null, [
      (p(), j(ce(o.logo), {
        onClick: l[0] || (l[0] = re((s) => t.value = !0, ["prevent"])),
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
          r("div", _c, [
            r("img", {
              src: o.src,
              alt: o.title
            }, null, 8, $c)
          ])
        ]),
        _: 1
      }, 8, ["show", "modal-title"])
    ], 64));
  }
}), Vc = /* @__PURE__ */ r("div", { class: "po-prose-sm po-prose-slate po-p-5 po-opacity-8" }, [
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
], -1), xc = /* @__PURE__ */ L({
  __name: "ToCModel",
  setup(e) {
    const t = C(!1);
    return (o, l) => (p(), d(I, null, [
      r("a", {
        href: "#",
        onClick: l[0] || (l[0] = re((s) => t.value = !0, ["prevent"])),
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
          Vc
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), kc = /* @__PURE__ */ r("div", { class: "po-prose-sm po-prose-slate po-p-5 po-opacity-80" }, [
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
], -1), Cc = /* @__PURE__ */ L({
  __name: "PrivacyPolicyModel",
  setup(e) {
    const t = C(!1);
    return (o, l) => (p(), d(I, null, [
      r("a", {
        href: "#",
        onClick: l[0] || (l[0] = re((s) => t.value = !0, ["prevent"])),
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
          kc
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Sc = { class: "po-grid po-gap-5 po-grid-cols-1 lg:po-grid-cols-2 po-px-6 lg:po-px-8 po-mt-10 po-pb-10" }, Pc = { class: "sm:po-flex po-items-start sm:po-space-x-5" }, Oc = /* @__PURE__ */ r("svg", {
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
], -1), Lc = { class: "po-mt-5 sm:po-mt-0" }, Tc = /* @__PURE__ */ r("p", { class: "-po-mt-1 po-text-xs po-text-slate-500" }, " 8th Floor, Allied Building , Chaandhanee Magu, Malé, 20156, Maldives ", -1), Ec = { class: "po-mt-1 po-text-xs po-text-slate-500" }, Bc = { class: "po-mt-1 po-text-xs po-text-slate-500 po-flex -po-mb-2 po-flex-wrap" }, zc = {
  href: "https://www.pension.gov.mv",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, Mc = /* @__PURE__ */ r("span", null, "www.pension.gov.mv", -1), Ac = {
  href: "mailto:info@pension.gov.mv",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, Dc = /* @__PURE__ */ r("span", null, "info@pension.gov.mv", -1), Ic = {
  href: "tel:1441",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, jc = /* @__PURE__ */ r("span", null, "1441", -1), Rc = { class: "po-flex lg:po-items-end po-flex-col" }, Fc = { class: "-po-mt-1 po-text-xs po-text-slate-500 po-flex -po-mb-2 po-flex-wrap" }, Nc = { class: "po-flex po-space-x-2 po-mt-3 lg:po-justify-end" }, Hc = {
  name: "PoFooter"
}, r2 = /* @__PURE__ */ L({
  ...Hc,
  props: {
    changelog: { default: null }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, l) => (p(), d("div", null, [
      r("section", Sc, [
        r("div", Pc, [
          Oc,
          r("div", Lc, [
            Tc,
            r("p", Ec, " © " + V(new Date().getFullYear()) + " Pension Office, All Rights Reserved. ", 1),
            r("p", Bc, [
              r("a", zc, [
                S(k(zp), { class: "po-w-3 po-h-3 po-fill-current" }),
                Mc
              ]),
              r("a", Ac, [
                S(k(Ep), { class: "po-w-3 po-h-3 po-fill-current" }),
                Dc
              ]),
              r("a", Ic, [
                S(k(Mp), { class: "po-w-3 po-h-3 po-fill-current" }),
                jc
              ])
            ])
          ])
        ]),
        r("div", Rc, [
          r("nav", Fc, [
            S(cc, {
              "show-btn": o.changelog !== null,
              changelog: o.changelog
            }, null, 8, ["show-btn", "changelog"]),
            S(xc),
            S(Cc)
          ]),
          r("div", Nc, [
            S($l, {
              logo: wc,
              title: "ISO/IEC 27001:2013 Certificate",
              src: ""
            }),
            S($l, {
              logo: mc,
              title: "issa Certificate",
              src: ""
            })
          ])
        ])
      ])
    ]));
  }
}), qc = { class: "po-text-sm po-text-red-700" }, Wc = {
  key: 0,
  class: "po-text-sm po-text-red-800 po-list-disc po-ml-5 po-mt-2"
}, Uc = {
  key: 1,
  class: "po-flex po-items-start po-space-x-3 po-p-5 po-bg-green-50 po-rounded-md po-mt-5"
}, Gc = { class: "po-text-sm po-text-green-700" }, Zc = {
  name: "PoFormStatusMessage"
}, i2 = /* @__PURE__ */ L({
  ...Zc,
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
      S(k(to), { class: "po-shrink-0 po-w-6 po-stroke-red-600" }),
      r("div", null, [
        r("span", qc, V(t.message), 1),
        t.errorList !== null ? (p(), d("ul", Wc, [
          (p(!0), d(I, null, U(t.errorList, (l) => (p(), d("li", null, V(l), 1))), 256))
        ])) : _("", !0)
      ])
    ], 2)) : (p(), d("div", Uc, [
      S(k(ln), { class: "po-w-6 po-stroke-green-600" }),
      r("div", null, [
        r("span", Gc, V(t.message), 1)
      ])
    ]));
  }
}), Kc = {
  key: 0,
  class: "po-text-lg po-text-red-400 po-font-semibold"
}, Yc = {
  key: 0,
  class: "po-mt-1 po-flex -po-mb-3 po-flex-wrap"
}, Xc = { class: "po-flex po-flex-1" }, Qc = { class: "po-flex po-flex-col" }, Jc = {
  key: 0,
  class: "po-mt-2 po-text-sm po-text-slate-500"
}, e1 = {
  key: 1,
  class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1"
}, t1 = {
  name: "PoRadioInput"
}, p2 = /* @__PURE__ */ L({
  ...t1,
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
    const o = e, l = C();
    l.value = o.modelValue, mo(() => {
      l.value = o.modelValue;
    }), Q(l, () => {
      t("update:modelValue", l.value), t("selected", l.value);
    });
    const { errorMessage: s } = we(o), n = C();
    return Q(s, (a, i) => {
      n.value = s.value !== null && s.value !== "";
    }), (a, i) => (p(), j(k(ma), {
      modelValue: l.value,
      "onUpdate:modelValue": i[0] || (i[0] = (u) => l.value = u),
      class: O([{ "lg:po-grid lg:po-grid-cols-2": a.display === "horizontal" }])
    }, {
      default: z(() => [
        S(k(al), { class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700" }, {
          default: z(() => [
            r("span", null, V(a.label), 1),
            a.required ? (p(), d("span", Kc, "*")) : _("", !0)
          ]),
          _: 1
        }),
        a.options !== null ? (p(), d("div", Yc, [
          (p(!0), d(I, null, U(a.options, (u) => (p(), j(k(ga), {
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
                r("span", Xc, [
                  r("span", Qc, [
                    S(k(al), {
                      as: "span",
                      class: "po-block po-text-sm po-font-medium po-text-gray-900"
                    }, {
                      default: z(() => [
                        J(V(u.title), 1)
                      ]),
                      _: 2
                    }, 1024),
                    u.description ? (p(), j(k(ya), {
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
          a.message !== null ? (p(), d("p", Jc, V(a.message), 1)) : _("", !0),
          n.value && k(s) !== null ? (p(), d("p", e1, [
            S(k(ps), { class: "po-fill-current po-w-4 po-mt-[0.2rem] po-shrink-0" }),
            r("span", null, V(k(s)), 1)
          ])) : _("", !0)
        ])
      ]),
      _: 1
    }, 8, ["modelValue", "class"]));
  }
}), o1 = { class: "po-bg-white po-relative po-group po-rounded-xl focus-within:po-ring-2 focus-within:po-ring-inset focus-within:po-ring-indigo-500" }, l1 = { class: "po-block po-p-4 po-transition-colors po-duration-75 po-ease-linear" }, s1 = { class: "po-flex po-items-start po-space-x-2" }, n1 = { class: "po-flex po-items-start po-space-x-1" }, a1 = { class: "po-block po-text-2xl po-font-light po-text-slate-600" }, r1 = {
  key: 0,
  class: "po-text-sm po-text-green-500 po-font-medium po-pt-1"
}, i1 = { class: "po-text-sm po-tracking-wide po-text-slate-500" }, p1 = {
  name: "PoStatsBlock"
}, u2 = /* @__PURE__ */ L({
  ...p1,
  props: {
    items: { default: null },
    numberOfCols: { default: "po-grid-cols-1 lg:po-grid-cols-3" }
  },
  setup(e) {
    return (t, o) => (p(), d("div", {
      class: O(["po-grid po-gap-5", t.numberOfCols])
    }, [
      (p(!0), d(I, null, U(t.items, (l) => (p(), d("div", o1, [
        r("span", l1, [
          r("div", s1, [
            r("div", null, [
              r("span", {
                class: O([
                  "po-inline-flex po-p-2 po-rounded-md",
                  l.bgColor,
                  l.iconColor
                ])
              }, [
                (p(), j(ce(l.icon), { class: "po-w-4 po-h-4" }))
              ], 2)
            ]),
            r("div", null, [
              r("div", n1, [
                r("span", a1, V(l.value), 1),
                l.diff ? (p(), d("span", r1, V(l.diff), 1)) : _("", !0)
              ]),
              r("h4", i1, V(l.label), 1)
            ])
          ])
        ])
      ]))), 256))
    ], 2));
  }
}), u1 = {
  key: 0,
  class: "po-flex po-space-x-3 po-items-start"
}, d1 = { class: "po-flex po-items-center po-space-x-2" }, c1 = ["datetime"], f1 = { class: "po-text-sm po-font-medium po-text-slate-600" }, v1 = ["datetime"], h1 = { class: "flex" }, m1 = { class: "po-flex po-pt-3 po-flex-wrap po-max-w-sm" }, b1 = ["onClick"], g1 = {
  key: 1,
  class: "po-w-full po-text-center"
}, y1 = { class: "po-inline-block po-text-sm po-italic po-text-slate-500" }, w1 = /* @__PURE__ */ r("span", { class: "po-text-lg po-text-slate-300 po-px-3 po-inline-block" }, "—", -1), _1 = ["datetime"], $1 = {
  name: "PoChatLogItem"
}, d2 = /* @__PURE__ */ L({
  ...$1,
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
      t.item.type !== "message" ? (p(), d("div", u1, [
        t.item.type !== "first" && t.item.avatar !== "" ? (p(), d("div", {
          key: 0,
          class: "po-shrink-0 po-w-8 po-h-8 po-rounded-full po-p-1 po-bg-contain po-bg-slate-100",
          style: bo({ "background-image": `url(${t.item.avatar})` })
        }, null, 4)) : _("", !0),
        r("div", {
          class: O([
            { "po-pt-1": t.item.type !== "first" },
            {
              "po-flex po-justify-end po-items-end po-flex-col": t.item.type === "first"
            }
          ])
        }, [
          r("span", d1, [
            t.item.type === "first" ? (p(), d("time", {
              key: 0,
              datetime: t.item.time,
              class: "po-text-xs po-text-slate-400"
            }, V(t.item.time_human), 9, c1)) : _("", !0),
            r("span", f1, V(t.item.name), 1),
            t.item.type === "second" ? (p(), d("time", {
              key: 1,
              datetime: t.item.time,
              class: "po-text-xs po-text-slate-400"
            }, V(t.item.time_human), 9, v1)) : _("", !0)
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
              (p(!0), d(I, null, U(t.item.message, (l) => (p(), d("div", h1, [
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
            r("div", m1, [
              (p(!0), d(I, null, U(t.item.actions, (l) => (p(), d("button", {
                onClick: (s) => t.$emit("button-click", l.label),
                class: "po-appearance-none po-border po-border-mpao-lightblue po-bg-white hover:po-bg-mpao-lightblue po-px-3 po-py-1 po-mb-2 po-mr-2 po-rounded-lg po-text-slate-500 hover:po-text-sky-100 po-transition-colors po-duration-150 po-ease-in-out po-text-sm po-ring-0 po-outline-none"
              }, V(l.label), 9, b1))), 256))
            ])
          ], 2)
        ], 2)
      ])) : _("", !0),
      t.item.type === "message" ? (p(), d("div", g1, [
        (p(!0), d(I, null, U(t.item.message, (l) => (p(), d("p", y1, [
          J(V(l) + " ", 1),
          w1,
          r("time", {
            datetime: t.item.time,
            class: "po-text-xs po-text-slate-400 po-inline-block"
          }, V(t.item.time_human), 9, _1)
        ]))), 256))
      ])) : _("", !0)
    ], 2));
  }
}), V1 = {
  key: 0,
  class: "po-pointer-events-auto po-w-full po-max-w-sm po-overflow-hidden po-rounded-lg po-bg-mpao-lightblue po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5"
}, x1 = { class: "po-p-4" }, k1 = { class: "po-flex po-items-start" }, C1 = { class: "po-flex-shrink-0" }, S1 = { class: "po-ml-3 po-w-0 po-flex-1 po-pt-0.5" }, P1 = { class: "po-text-sm po-font-medium po-text-sky-100" }, O1 = { class: "po-mt-1 po-text-sm po-text-sky-300" }, L1 = { class: "po-mt-3 po-flex po-space-x-4" }, T1 = { class: "po-ml-4 po-flex po-flex-shrink-0" }, E1 = /* @__PURE__ */ r("span", { class: "po-sr-only" }, "Close", -1), B1 = {
  name: "PoNotification"
}, c2 = /* @__PURE__ */ L({
  ...B1,
  props: {
    show: { type: Boolean, default: !1 },
    label: { default: "" },
    text: { default: "" },
    buttonLabel: { default: "Ok" }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    const o = e, { show: l } = we(o), s = C(!1);
    Q(l, () => {
      s.value = !1, setTimeout(() => {
        s.value = !0;
      }, 100);
    });
    const n = C(!1);
    return Q(s, () => {
      n.value = !1, setTimeout(() => {
        n.value = !0;
      }, 200);
    }), (a, i) => s.value ? (p(), j(ft, {
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
          n.value ? (p(), d("div", V1, [
            r("div", x1, [
              r("div", k1, [
                r("div", C1, [
                  Y(a.$slots, "icon")
                ]),
                r("div", S1, [
                  r("p", P1, V(a.label), 1),
                  r("p", O1, V(a.text), 1),
                  r("div", L1, [
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
                r("div", T1, [
                  r("button", {
                    type: "button",
                    onClick: i[2] || (i[2] = (u) => s.value = !1),
                    class: "po-inline-flex po-rounded-md po-bg-mpao-lightblue po-text-sky-500 hover:po-text-sky-300 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                  }, [
                    E1,
                    S(k(us), {
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
}), z1 = /* @__PURE__ */ r("div", { class: "po-fixed po-inset-0" }, null, -1), M1 = { class: "po-absolute po-inset-0 po-overflow-hidden" }, A1 = { class: "po-pointer-events-none po-fixed po-inset-y-0 po-right-0 po-flex po-max-w-full po-pl-10" }, D1 = { class: "po-flex po-h-full po-flex-col po-overflow-y-auto po-bg-white po-shadow-xl" }, I1 = { class: "po-bg-slate-50 po-py-6 po-px-4 sm:po-px-6" }, j1 = { class: "po-flex po-items-center po-justify-between" }, R1 = { class: "po-ml-3 po-flex po-h-7 po-items-center" }, F1 = /* @__PURE__ */ r("span", { class: "po-sr-only" }, "Close panel", -1), N1 = {
  key: 0,
  class: "po-mt-1"
}, H1 = { class: "po-text-sm po-text-slate-500" }, q1 = {
  key: 0,
  class: "po-bg-slate-50 po-rounded-b-xl po-shrink-0"
}, W1 = {
  name: "PoSlideover"
}, f2 = /* @__PURE__ */ L({
  ...W1,
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
    const o = e, { show: l } = we(o), s = C(!1);
    Q(l, () => {
      s.value = l.value;
    });
    function n() {
      s.value = !1, t("slideover-closed", !0);
    }
    return (a, i) => (p(), j(k(bt), {
      as: "template",
      show: s.value
    }, {
      default: z(() => [
        S(k(Dt), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: n
        }, {
          default: z(() => [
            z1,
            r("div", {
              class: O(["po-fixed po-inset-0 po-overflow-hidden po-bg-black", a.screenOpacity])
            }, [
              r("div", M1, [
                r("div", A1, [
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
                      S(k(It), {
                        class: O([a.maxWidth, "po-pointer-events-auto po-w-screen"])
                      }, {
                        default: z(() => [
                          r("div", D1, [
                            r("div", I1, [
                              r("div", j1, [
                                S(k(Gl), { class: "po-text-lg po-font-medium po-text-slate-600" }, {
                                  default: z(() => [
                                    J(V(a.label), 1)
                                  ]),
                                  _: 1
                                }),
                                r("div", R1, [
                                  r("button", {
                                    type: "button",
                                    class: "po-rounded-md po-text-slate-500 hover:po-text-mpao-lightblue focus:po-outline-none focus:po-ring-2 focus:po-ring-white",
                                    onClick: n
                                  }, [
                                    F1,
                                    S(k(vt), {
                                      class: "po-h-6 po-w-6",
                                      "aria-hidden": "true"
                                    })
                                  ])
                                ])
                              ]),
                              a.description ? (p(), d("div", N1, [
                                r("p", H1, V(a.description), 1)
                              ])) : _("", !0)
                            ]),
                            r("div", {
                              class: O([a.bgColor, "po-relative po-grow po-pt-6 po-px-4 sm:po-px-6"])
                            }, [
                              Y(a.$slots, "content")
                            ], 2),
                            a.$slots.footer ? (p(), d("div", q1, [
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
}), U1 = /* @__PURE__ */ r("div", { class: "po-fixed po-inset-0 po-bg-gray-500 po-bg-opacity-25 po-transition-opacity" }, null, -1), G1 = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto po-p-4 sm:po-p-6 md:po-p-20" }, Z1 = { class: "po-relative" }, K1 = {
  key: 0,
  class: "po-max-h-96 scroll-py-3 po-overflow-y-auto po-p-3"
}, Y1 = {
  name: "PoCommandPalette"
}, v2 = /* @__PURE__ */ L({
  ...Y1,
  props: {
    show: { type: Boolean, default: !1 },
    showContent: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, o = C(""), { show: l } = we(t), s = C(!1);
    Q(l, () => {
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
    }), (a, i) => (p(), j(k(bt), {
      show: s.value,
      as: "template",
      onAfterLeave: i[2] || (i[2] = (u) => o.value = ""),
      appear: ""
    }, {
      default: z(() => [
        S(k(Dt), {
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
                U1
              ]),
              _: 1
            }),
            r("div", G1, [
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
                  S(k(It), { class: "po-mx-auto po-max-w-xl po-transform po-divide-y po-divide-gray-100 po-overflow-hidden po-rounded-xl po-bg-white po-shadow-2xl po-ring-1 po-ring-black po-ring-opacity-5 po-transition-all" }, {
                    default: z(() => [
                      r("div", Z1, [
                        S(k(Tr), {
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
                      a.showContent ? (p(), d("div", K1, [
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
}), X1 = /* @__PURE__ */ r("div", { class: "po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity" }, null, -1), Q1 = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto" }, J1 = { class: "po-flex po-min-h-full po-items-start po-justify-center po-p-4 po-text-center sm:po-p-0" }, e0 = { class: "po-p-5" }, t0 = { class: "po-text-center po-space-y-3" }, o0 = { key: 1 }, l0 = { class: "po-text-sm po-text-gray-600" }, s0 = { class: "po-border-t po-border-slate-200 po-flex po-divide-x po-divide-slate-200" }, n0 = {
  name: "PoAlert"
}, h2 = /* @__PURE__ */ L({
  ...n0,
  props: {
    cancelBtnLabel: { default: "Cancel" },
    okBtnLabel: { default: "Ok" },
    alertTitle: { default: "" },
    alertDescription: { default: "" },
    show: { type: Boolean, default: !1 }
  },
  emits: ["alert-closed", "button-click", "confirm", "cancel"],
  setup(e, { emit: t }) {
    const o = e, { show: l } = we(o), s = C(!1);
    Q(l, () => {
      s.value = l.value;
    });
    function n() {
      s.value = !1, t("alert-closed", !0);
    }
    return (a, i) => (p(), j(k(bt), {
      as: "template",
      show: s.value
    }, {
      default: z(() => [
        S(k(Dt), {
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
                X1
              ]),
              _: 1
            }),
            r("div", Q1, [
              r("div", J1, [
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
                    S(k(It), { class: "po-relative po-transform po-overflow-hidden po-rounded-lg po-bg-white po-text-left po-shadow-xl po-transition-all sm:po-my-8 sm:po-w-full sm:po-max-w-sm" }, {
                      default: z(() => [
                        r("div", e0, [
                          r("div", t0, [
                            a.alertTitle !== "" ? (p(), j(k(Gl), {
                              key: 0,
                              as: "h3",
                              class: "po-text-lg po-font-medium po-leading-6 po-text-gray-900"
                            }, {
                              default: z(() => [
                                J(V(a.alertTitle), 1)
                              ]),
                              _: 1
                            })) : _("", !0),
                            a.alertDescription !== "" ? (p(), d("div", o0, [
                              r("p", l0, V(a.alertDescription), 1)
                            ])) : _("", !0)
                          ])
                        ]),
                        r("div", s0, [
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
}), a0 = {
  key: 0,
  class: "po-col-span-2 po-relative po-mt-5"
}, r0 = /* @__PURE__ */ r("span", {
  class: "po-absolute po-top-0 po-left-1 po--ml-px po-h-[calc(100%-7px)] po-w-0.5 po-bg-gray-200",
  "aria-hidden": "true"
}, null, -1), i0 = { class: "po-relative po-space-y-5" }, p0 = { class: "po-flex po-space-x-2 po-items-start" }, u0 = { class: "log-item" }, d0 = { key: 0 }, c0 = {
  key: 0,
  class: "po-text-slate-500 po-text-xs"
}, f0 = {
  key: 1,
  class: "po-text-center po-py-10"
}, v0 = { class: "po-text-sm po-text-slate-500" }, h0 = {
  name: "PoLogs"
}, m2 = /* @__PURE__ */ L({
  ...h0,
  props: {
    items: { default: null },
    emptyLabel: { default: "No logs to display." }
  },
  setup(e) {
    return (t, o) => (p(), d("div", null, [
      t.items && t.items.length > 0 ? (p(), d("div", a0, [
        r0,
        r("div", i0, [
          (p(!0), d(I, null, U(t.items, (l, s) => (p(), d("div", p0, [
            r("p", {
              class: O([
                "po-rounded-full po-w-2 po-h-2 border-1 po-border-white po-shrink-0",
                { "po-bg-orange-400": s !== t.items.length - 1 },
                ,
                { "po-bg-slate-300": s == t.items.length - 1 }
              ])
            }, null, 2),
            r("div", u0, [
              r("span", null, [
                J(V(l.label) + " on " + V(l.date) + " " + V(l.by && l.by !== "" ? "by" : "") + " ", 1),
                l.by && l.by !== "" ? (p(), d("span", d0, V(l.by), 1)) : _("", !0)
              ]),
              l.description && l.description !== "" ? (p(), d("blockquote", c0, ' "' + V(l.description) + '" ', 1)) : _("", !0)
            ])
          ]))), 256))
        ])
      ])) : (p(), d("div", f0, [
        r("span", v0, V(t.emptyLabel), 1)
      ]))
    ]));
  }
}), m0 = {
  key: 0,
  role: "list",
  class: "po-divide-y po-divide-gray-200 po-rounded-md po-border po-border-gray-200"
}, b0 = { class: "po-flex po-items-center po-justify-between po-py-3 po-pl-3 po-pr-4 po-text-sm" }, g0 = { class: "po-flex po-w-0 po-flex-1 po-items-center" }, y0 = { class: "po-ml-2 po-w-0 po-flex-1 po-truncate" }, w0 = { class: "po-ml-4 po-flex-shrink-0 po-space-x-4" }, _0 = ["onClick"], $0 = ["onClick"], V0 = {
  key: 1,
  class: "po-py-10"
}, x0 = { class: "po-text-sm po-text-slate-500" }, k0 = {
  name: "PoDownloadFileList"
}, b2 = /* @__PURE__ */ L({
  ...k0,
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
      o.files && o.files.length > 0 ? (p(), d("ul", m0, [
        (p(!0), d(I, null, U(o.files, (s) => (p(), d("li", b0, [
          r("div", g0, [
            S(k(Lt), {
              class: "po-h-5 po-w-5 po-flex-shrink-0 po-text-gray-400",
              "aria-hidden": "true"
            }),
            r("span", y0, V(s.label), 1)
          ]),
          r("div", w0, [
            r("a", {
              href: "#",
              onClick: re((n) => o.$emit("button-click", s), ["prevent"]),
              class: "po-font-medium po-text-mpao-lightblue hover:po-text-indigo-500"
            }, V(o.linkLabel), 9, _0),
            o.showViewBtn ? (p(), d("a", {
              key: 0,
              href: "#",
              onClick: re((n) => o.$emit("view-click", s), ["prevent"]),
              class: "po-font-medium po-text-mpao-lightblue hover:po-text-indigo-500"
            }, V(o.viewBtnLabel), 9, $0)) : _("", !0)
          ])
        ]))), 256))
      ])) : (p(), d("div", V0, [
        r("span", x0, V(o.emptyLabel), 1)
      ]))
    ]));
  }
}), C0 = {
  name: "PoContentArea"
}, S0 = { class: "shell-content--area po-max-w-[1370px]" };
function P0(e, t, o, l, s, n) {
  return p(), d("section", S0, [
    Y(e.$slots, "default")
  ]);
}
const g2 = /* @__PURE__ */ Ut(C0, [["render", P0]]), O0 = {
  name: "AnimatedLogo"
}, L0 = /* @__PURE__ */ Gs('<div><svg class="po-stroke-mpao-blue po-w-16 animated-logo" viewBox="0 0 62 55" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.76292 17.8572L7.7 17.9704V18.0682C6.87397 19.526 6.23618 20.649 5.58241 21.4779C4.93472 22.299 4.30505 22.7864 3.51417 23.0053C3.46261 23.0112 3.41718 23.0206 3.39088 23.026C3.35663 23.0331 3.31491 23.0425 3.27694 23.0511C3.25988 23.055 3.24357 23.0587 3.22903 23.0619C3.1106 23.0882 3.03712 23.1 3 23.1H2.93844L2.89561 23.1107L15.9876 0.600006H19.1308C17.2397 1.92747 16.1556 3.83665 15.5371 5.73245C14.8359 7.88203 14.7198 10.0514 14.7027 11.4258C13.1737 11.6033 11.0729 12.4434 9.38038 15.128C8.77075 16.0431 8.26353 16.9561 7.76713 17.8496L7.76292 17.8572Z"></path><path d="M48.1818 11.3241C48.047 8.39742 47.5389 6.05982 46.5472 4.07639C45.8153 2.61266 44.8203 1.39271 43.5945 0.5H46.8113L59.8583 23.0959C59.8303 23.0912 59.7891 23.0819 59.7213 23.0649C59.7166 23.0638 59.7117 23.0625 59.7066 23.0612C59.6302 23.042 59.5099 23.0118 59.3765 23.0027C58.59 22.7825 57.9627 22.2958 57.3176 21.4779C56.6586 20.6423 56.0158 19.508 55.1801 18.0331L55.1413 17.9647C54.8861 17.4553 54.6068 16.973 54.3362 16.5054L54.3327 16.4995C54.0565 16.0225 53.7893 15.5605 53.5472 15.0764L53.5333 15.0485L53.516 15.0226C51.7283 12.3411 49.7115 11.4988 48.1818 11.3241Z"></path><path d="M9.28397 39.6773C11.0717 42.3589 13.0885 43.2011 14.6182 43.3759C14.753 46.3026 15.2611 48.6402 16.2528 50.6236C16.9991 52.1163 17.9653 53.2992 19.1863 54.2H15.7881L2.74125 31.699C2.76073 31.6996 2.78031 31.7 2.8 31.7C2.89335 31.7 2.97474 31.7149 3.07903 31.7381C3.08854 31.7402 3.09897 31.7426 3.11023 31.7452C3.18647 31.7626 3.30082 31.7888 3.42319 31.7972C4.20888 32.0178 4.86081 32.5271 5.52047 33.3603C6.20216 34.2214 6.85697 35.382 7.66164 36.8405C8.26116 37.9396 8.76739 38.8512 9.276 39.665L9.27989 39.6712L9.28397 39.6773Z"></path><path d="M55.124 36.865L55.1331 36.8504L55.1412 36.8353C55.9431 35.3316 56.5997 34.1683 57.2697 33.307C57.9146 32.4778 58.5471 31.9616 59.2949 31.6961C59.4179 31.6866 59.5418 31.6616 59.6287 31.6442C59.6354 31.6428 59.6418 31.6415 59.6481 31.6403C59.719 31.6261 59.772 31.616 59.8123 31.6095L46.8115 54.1H43.8753C45.7283 52.7465 46.7867 50.8277 47.3889 48.9394C48.064 46.8226 48.1795 44.7058 48.1971 43.3742C49.7262 43.1967 51.8271 42.3567 53.5196 39.6719C53.8327 39.2016 54.1164 38.6849 54.3777 38.1995C54.4112 38.1375 54.4442 38.076 54.4768 38.0152C54.7049 37.5906 54.9148 37.1996 55.124 36.865Z"></path><path d="M32.2763 51.5708L32.2653 51.5582L32.2536 51.5465C32.0661 51.359 31.7413 51.2 31.4 51.2C31.3949 51.2 31.3894 51.2 31.3835 51.2C31.2956 51.1998 31.1323 51.1993 30.9751 51.2442C30.7932 51.2962 30.6132 51.4082 30.4904 51.6086C29.1941 53.0706 27.544 53.8 25.5 53.8C22.8209 53.8 20.828 52.9218 19.4532 51.2005C18.1148 49.5247 17.3123 46.988 17.1201 43.5109C18.6883 43.1579 19.8601 42.2673 20.5004 41.6896C20.5136 44.8271 20.8579 46.8152 21.6737 48.0181C22.5558 49.319 23.9045 49.6 25.5 49.6C27.4335 49.6 28.5187 48.2893 29.0946 46.9901C29.6604 45.7138 29.7966 44.3347 29.7999 43.8193C29.8943 42.5846 30.6602 41.8 31.5 41.8H31.5778C32.4558 41.8842 33.2 42.7102 33.2 43.9C33.2 45.6119 33.5619 47.0065 34.2986 47.9982C35.0485 49.0077 36.1459 49.544 37.4792 49.5996L37.4896 49.6H37.5C39.2304 49.6 40.5973 49.3258 41.4454 48.0081C41.849 47.3811 42.1078 46.5565 42.2692 45.5056C42.4311 44.4518 42.5 43.1353 42.5 41.5V24.4455L45.9 21.8182V41.5C45.9 41.4958 45.8996 41.5001 45.8978 41.519C45.8959 41.5381 45.8927 41.5719 45.887 41.6267L45.8842 41.6541C45.8752 41.7406 45.8636 41.8524 45.8521 41.9797C45.8264 42.2614 45.8 42.6283 45.8 43V43.9V43.9029V43.9059V43.9088V43.9117V43.9146V43.9175V43.9205V43.9234V43.9263V43.9292V43.9321V43.935V43.9379V43.9408V43.9437V43.9466V43.9495V43.9524V43.9553V43.9581V43.961V43.9639V43.9668V43.9696V43.9725V43.9754V43.9783V43.9811V43.984V43.9868V43.9897V43.9926V43.9954V43.9983V44.0011V44.004V44.0068V44.0096V44.0125V44.0153V44.0181V44.021V44.0238V44.0266V44.0295V44.0323V44.0351V44.0379V44.0407V44.0435V44.0463V44.0492V44.052V44.0548V44.0576V44.0603V44.0631V44.0659V44.0687V44.0715V44.0743V44.0771V44.0798V44.0826V44.0854V44.0882V44.0909V44.0937V44.0965V44.0992V44.102V44.1047V44.1075V44.1102V44.113V44.1157V44.1185V44.1212V44.1239V44.1267V44.1294V44.1321V44.1349V44.1376V44.1403V44.143V44.1457V44.1484V44.1512V44.1539V44.1566V44.1593V44.162V44.1647V44.1674V44.17V44.1727V44.1754V44.1781V44.1808V44.1835V44.1861V44.1888V44.1915V44.1941V44.1968V44.1995V44.2021V44.2048V44.2074V44.2101V44.2127V44.2154V44.218V44.2207V44.2233V44.2259V44.2285V44.2312V44.2338V44.2364V44.239V44.2417V44.2443V44.2469V44.2495V44.2521V44.2547V44.2573V44.2599V44.2625V44.2651V44.2677V44.2702V44.2728V44.2754V44.278V44.2806V44.2831V44.2857V44.2882V44.2908V44.2934V44.2959V44.2985V44.301V44.3036V44.3061V44.3087V44.3112V44.3137V44.3163V44.3188V44.3213V44.3238V44.3264V44.3289V44.3314V44.3339V44.3364V44.3389V44.3414V44.3439V44.3464V44.3489V44.3514V44.3539V44.3564V44.3588V44.3613V44.3638V44.3663V44.3687V44.3712V44.3737V44.3761V44.3786V44.381V44.3835V44.3859V44.3884V44.3908V44.3932V44.3957V44.3981V44.4005V44.403V44.4054V44.4078V44.4102V44.4126V44.415V44.4174V44.4199V44.4223V44.4247V44.427V44.4294V44.4318V44.4342V44.4366V44.439V44.4413V44.4437V44.4461V44.4484V44.4508V44.4532V44.4555V44.4579V44.4602V44.4626V44.4649V44.4672V44.4696V44.4719V44.4742V44.4766V44.4789V44.4812V44.4835V44.4858V44.4882V44.4905V44.4928V44.4951V44.4974V44.4997V44.5019V44.5042V44.5065V44.5088V44.5111V44.5133V44.5156V44.5179V44.5201V44.5224V44.5247V44.5269V44.5292V44.5314V44.5337V44.5359V44.5381V44.5404V44.5426V44.5448V44.547V44.5493V44.5515V44.5537V44.5559V44.5581V44.5603V44.5625V44.5647V44.5669V44.5691V44.5713V44.5734V44.5756V44.5778V44.58V44.5821V44.5843V44.5865V44.5886V44.5908V44.5929V44.5951V44.5972V44.5994V44.6015V44.6036V44.6058V44.6079V44.61V44.6121V44.6142V44.6164V44.6185V44.6206V44.6227V44.6248V44.6269V44.6289V44.631V44.6331V44.6352V44.6373V44.6393V44.6414V44.6435V44.6455V44.6476V44.6497V44.6517V44.6538V44.6558V44.6578V44.6599V44.6619V44.6639V44.666V44.668V44.67V44.672V44.674V44.676V44.678V44.68V44.682V44.684V44.686V44.688V44.69V44.692V44.6939V44.6959V44.6979V44.6998V44.7018V44.7037V44.7057V44.7076V44.7096V44.7115V44.7135V44.7154V44.7173V44.7193V44.7212V44.7231V44.725V44.7269V44.7288V44.7307V44.7326V44.7345V44.7364V44.7383V44.7402V44.7421V44.7439V44.7458V44.7477V44.7495V44.7514V44.7533V44.7551V44.757V44.7588V44.7606V44.7625V44.7643V44.7661V44.768V44.7698V44.7716V44.7734V44.7752V44.777V44.7788V44.7806V44.7824V44.7842V44.786V44.7878V44.7896V44.7914V44.7931V44.7949V44.7967V44.7984V44.8002V44.8019V44.8037V44.8054V44.8071V44.8089V44.8106V44.8123V44.8141V44.8158V44.8175V44.8192V44.8209V44.8226V44.8243V44.826V44.8277V44.8294V44.8311V44.8328V44.8344V44.8361V44.8378V44.8394V44.8411V44.8427V44.8444V44.846V44.8477V44.8493V44.851V44.8526V44.8542V44.8558V44.8575V44.8591V44.8607V44.8623V44.8639V44.8655V44.8671V44.8687V44.8702V44.8718V44.8734V44.875V44.8765V44.8781V44.8797V44.8812V44.8828V44.8843V44.8859V44.8874V44.8889V44.8905V44.892V44.8935V44.895V44.8965V44.898V44.8996V44.9011V44.9025V44.904V44.9055V44.907V44.9085V44.91V44.9114V44.9129V44.9144V44.9158V44.9173V44.9187V44.9202V44.9216V44.923V44.9245V44.9259V44.9273V44.9288V44.9302V44.9316V44.933V44.9344V44.9358V44.9372V44.9386V44.9399V44.9413V44.9427V44.9441V44.9454V44.9468V44.9482V44.9495V44.9509V44.9522V44.9535V44.9549V44.9562V44.9575V44.9589V44.9602V44.9615V44.9628V44.9641V44.9654V44.9667V44.968V44.9693V44.9706V44.9718V44.9731V44.9744V44.9757V44.9769V44.9782V44.9794V44.9807V44.9819V44.9832V44.9844V44.9856V44.9868V44.9881V44.9893V44.9905V44.9917V44.9929V44.9941V44.9953V44.9965V44.9977V44.9988V45V45.1V45.1006V45.1012V45.1017V45.1023V45.1029V45.1035V45.104V45.1046V45.1052V45.1057V45.1063V45.1069V45.1074V45.108V45.1085V45.1091V45.1096V45.1102V45.1107V45.1113V45.1118V45.1123V45.1129V45.1134V45.1139V45.1145V45.115V45.1155V45.1161V45.1166V45.1171V45.1176V45.1181V45.1186V45.1191V45.1196V45.1202V45.1207V45.1212V45.1217V45.1222V45.1226V45.1231V45.1236V45.1241V45.1246V45.1251V45.1256V45.1261V45.1265V45.127V45.1275V45.128V45.1284V45.1289V45.1294V45.1298V45.1303V45.1307V45.1312V45.1317V45.1321V45.1326V45.133V45.1335V45.1339V45.1343V45.1348V45.1352V45.1357V45.1361V45.1365V45.137V45.1374V45.1378V45.1383V45.1387V45.1391V45.1395V45.1399V45.1404V45.1408V45.1412V45.1416V45.142V45.1424V45.1428V45.1432V45.1436V45.144V45.1444V45.1448V45.1452V45.1456V45.146V45.1464V45.1468V45.1471V45.1475V45.1479V45.1483V45.1487V45.149V45.1494V45.1498V45.1501V45.1505V45.1509V45.1512V45.1516V45.152V45.1523V45.1527V45.153V45.1534V45.1537V45.1541V45.1544V45.1548V45.1551V45.1555V45.1558V45.1561V45.1565V45.1568V45.1572V45.1575V45.1578V45.1581V45.1585V45.1588V45.1591V45.1594V45.1598V45.1601V45.1604V45.1607V45.161V45.1613V45.1616V45.162V45.1623V45.1626V45.1629V45.1632V45.1635V45.1638V45.1641V45.1644V45.1647V45.165V45.1652V45.1655V45.1658V45.1661V45.1664V45.1667V45.167V45.1672V45.1675V45.1678V45.1681V45.1683V45.1686V45.1689V45.1691V45.1694V45.1697V45.1699V45.1702V45.1705V45.1707V45.171V45.1712V45.1715V45.1717V45.172V45.1722V45.1725V45.1727V45.173V45.1732V45.1735V45.1737V45.174V45.1742V45.1744V45.1747V45.1749V45.1751V45.1753C45.5039 48.1507 44.6544 50.2924 43.3031 51.6899C41.9582 53.0807 40.0524 53.8 37.5 53.8C35.4235 53.8 33.5685 53.0476 32.2763 51.5708Z"></path><path d="M22.8 23.2538V18.2178L29.3909 23.307L26.1939 25.8645L22.8 23.2538Z"></path><path d="M16.7 20.2V19.7H16.5V18.8V10.858C16.5042 10.8478 16.5096 10.8348 16.5142 10.8232C16.5488 10.7368 16.5963 10.6012 16.5998 10.4209C16.8474 7.03069 17.6799 4.61275 19.0737 3.04468C20.4543 1.49155 22.4511 0.699997 25.2 0.699997C27.2568 0.699997 29.1263 1.53906 30.5352 3.04197L30.5407 3.04785L30.5464 3.05355C30.7614 3.26854 31.0508 3.35 31.3 3.35C31.5492 3.35 31.8386 3.26854 32.0536 3.05355L32.0646 3.04251L32.0749 3.03081C33.4779 1.4408 35.1402 0.699997 37.3 0.699997C40.0769 0.699997 42.1441 1.62655 43.5571 3.42174C44.934 5.17104 45.7393 7.80743 45.886 11.3874C44.0184 11.8028 42.6345 12.9721 42.1 13.4936V13.2C42.1 10.0544 41.7835 8.06299 40.9925 6.86242C40.1497 5.58316 38.8495 5.3 37.3 5.3C35.4114 5.3 34.3769 6.59229 33.8399 7.85422C33.3055 9.11015 33.2 10.457 33.2 10.9C33.2 12.2634 32.2859 13.1 31.3 13.1H31.2204C30.2388 13.0141 29.4 12.0845 29.4 10.8C29.4 9.19015 29.0639 7.84653 28.3661 6.89234C27.6525 5.91665 26.5974 5.4 25.3 5.4C23.6267 5.4 22.3017 5.64608 21.4896 6.93319C21.1052 7.5425 20.863 8.34586 20.7131 9.3714C20.5626 10.4004 20.5 11.6909 20.5 13.3V30.4541L16.7 33.3833V20.2Z"></path><path d="M40.1 31.5462V36.5799L33.4225 31.4049L36.6974 28.9288L40.1 31.5462Z"></path><mask id="path-9-inside-1" fill="white"><path d="M58.7 30.1C58.9 30 59.5 30 59.8 29.9C60.9 29.8 61.8 28.7 61.8 27.4C61.8 26.1 60.9 25 59.8 24.9C59.7 24.9 59.5 24.9 59.4 24.8C59.3 24.8 59.2 24.8 59.1 24.7C59.1 24.7 59.1 24.7 59 24.7C58.6 24.6 58.1 24.4 57.7 24.1C57.7 24.1 57.7 24.1 57.6 24C56.1 23.1 55 21.2 53.6 18.7C53.1 17.8 52.6 16.9 52 16C50.5 13.7 48.9 13.1 47.8 13C47.7 13 47.6 13 47.5 13H47.3C47.1 13 46.9 13 46.9 13C45.2 13.2 44 14.3 43.6 14.8L25.2 29.1C25.2 29.1 25.2 29.1 25.1 29.2L23 30.8L16.8 35.5L16.4 35.9C16.4 35.9 16.4 35.9 16.3 35.9C16 36.1 15.7 36.3 15.4 36.3C15.1 36.3 14.9 36.2 14.7 36.1C14.5 35.9 14.4 35.8 14.3 35.5C13.9 34.8 13.4 34.1 13 33.3V33.1C12.2 31.7 11.3 30 10.1 28.6C10.1 28.6 10.1 28.6 10.1 28.5L10 28.4C9.9 28.3 9.9 28.3 9.8 28.2C9.8 28.2 9.8 28.2 9.7 28.1L9.2 27.5C9.2 27.5 9.2 27.5 9.1 27.5C9 27.3 9 27.1 9.1 27L9.6 26.5C10.9 25 11.9 23.2 12.8 21.6V21.5C13.2 20.7 13.7 19.9 14.2 19.1C14.4 18.8 14.6 18.6 14.7 18.5V13.1C13.6 13.2 12 13.9 10.6 16C10 16.9 9.5 17.8 9 18.7C7.8 20.9 6.8 22.5 5.6 23.5C4.8 24.1 4 24.4 3.5 24.6C3.5 24.6 3.5 24.6 3.4 24.6C3.3 24.6 3.1 24.7 3 24.7C2.9 24.7 2.9 24.7 2.8 24.7C2.7 24.7 2.7 24.7 2.7 24.7H2.6H2.5C2.3 24.7 2.2 24.8 2.1 24.8C2 24.8 2 24.8 2 24.9C1.7 25.1 1.4 25.3 1.2 25.6C1.2 25.7 1.1 25.7 1.1 25.8V25.9L0.999997 26.1C0.999997 26.2 0.999997 26.2 0.899997 26.3C0.899997 26.4 0.899997 26.4 0.799997 26.5C0.799997 26.6 0.799997 26.7 0.699997 26.7C0.699997 26.8 0.699997 26.9 0.699997 26.9C0.699997 27 0.699997 27.1 0.699997 27.1C0.699997 27.2 0.699997 27.2 0.699997 27.3C0.699997 27.4 0.699997 27.5 0.699997 27.5C0.699997 27.6 0.699997 27.7 0.699997 27.7C0.699997 27.8 0.699997 27.9 0.799997 27.9V28V28.1C0.799997 28.2 0.799997 28.2 0.899997 28.2L0.999997 28.4C0.999997 28.5 1.1 28.5 1.1 28.5C1.1 28.5 1.1 28.5 1.1 28.6C1.2 28.7 1.3 28.9 1.5 29C1.6 29 1.6 29.1 1.7 29.1C1.7 29.1 1.8 29.1 1.8 29.2C1.8 29.2 1.8 29.2 1.9 29.2C2 29.3 2.2 29.3 2.3 29.4C2.4 29.4 2.4 29.4 2.4 29.4L2.9 29.5C3.1 29.5 3.2 29.6 3.4 29.6C4.2 29.8 4.7 30.2 4.8 30.2C6.4 31.2 7.5 33 8.9 35.5C9.5 36.6 10 37.4 10.5 38.2C11.9 40.3 13.4 41 14.4 41.1C14.5 41.1 14.5 41.1 14.6 41.1C14.7 41.1 14.8 41.1 14.8 41.1C15 41.1 15.2 41.1 15.5 41.1H15.6C17.2 40.8 18.5 39.8 18.9 39.3L19 39.2L19.8 38.6C19.8 38.6 19.9 38.5 20 38.5L30.2 30.6L41.3 22L46.5 18H46.6C46.7 18 46.9 17.9 47 17.9C47.4 17.9 47.8 18.1 48.1 18.6L48.5 19.2C48.8 19.7 49.2 20.3 49.5 20.9V21C50.1 22.1 50.8 23.4 51.7 24.6C51.7 24.6 51.7 24.7 51.8 24.7C52.1 25.1 52.4 25.5 52.7 25.8C52.7 25.8 52.8 25.8 52.8 25.9C53 26.1 53.1 26.3 53.3 26.4C53.4 26.5 53.4 26.7 53.3 26.9C52 28.5 50.4 31.1 49.6 32.4V32.5C49.2 33.2 48.7 34.1 48.2 34.9C48 35.2 47.8 35.4 47.7 35.5V40.9C48.8 40.8 50.4 40.1 51.8 37.9C52.4 37 52.9 36 53.4 35.2C53.5 35 53.7 34.7 53.8 34.5C55.2 33 56.4 30.9 58.7 30.1Z"></path></mask><path d="M58.7 30.1C58.9 30 59.5 30 59.8 29.9C60.9 29.8 61.8 28.7 61.8 27.4C61.8 26.1 60.9 25 59.8 24.9C59.7 24.9 59.5 24.9 59.4 24.8C59.3 24.8 59.2 24.8 59.1 24.7C59.1 24.7 59.1 24.7 59 24.7C58.6 24.6 58.1 24.4 57.7 24.1C57.7 24.1 57.7 24.1 57.6 24C56.1 23.1 55 21.2 53.6 18.7C53.1 17.8 52.6 16.9 52 16C50.5 13.7 48.9 13.1 47.8 13C47.7 13 47.6 13 47.5 13H47.3C47.1 13 46.9 13 46.9 13C45.2 13.2 44 14.3 43.6 14.8L25.2 29.1C25.2 29.1 25.2 29.1 25.1 29.2L23 30.8L16.8 35.5L16.4 35.9C16.4 35.9 16.4 35.9 16.3 35.9C16 36.1 15.7 36.3 15.4 36.3C15.1 36.3 14.9 36.2 14.7 36.1C14.5 35.9 14.4 35.8 14.3 35.5C13.9 34.8 13.4 34.1 13 33.3V33.1C12.2 31.7 11.3 30 10.1 28.6C10.1 28.6 10.1 28.6 10.1 28.5L10 28.4C9.9 28.3 9.9 28.3 9.8 28.2C9.8 28.2 9.8 28.2 9.7 28.1L9.2 27.5C9.2 27.5 9.2 27.5 9.1 27.5C9 27.3 9 27.1 9.1 27L9.6 26.5C10.9 25 11.9 23.2 12.8 21.6V21.5C13.2 20.7 13.7 19.9 14.2 19.1C14.4 18.8 14.6 18.6 14.7 18.5V13.1C13.6 13.2 12 13.9 10.6 16C10 16.9 9.5 17.8 9 18.7C7.8 20.9 6.8 22.5 5.6 23.5C4.8 24.1 4 24.4 3.5 24.6C3.5 24.6 3.5 24.6 3.4 24.6C3.3 24.6 3.1 24.7 3 24.7C2.9 24.7 2.9 24.7 2.8 24.7C2.7 24.7 2.7 24.7 2.7 24.7H2.6H2.5C2.3 24.7 2.2 24.8 2.1 24.8C2 24.8 2 24.8 2 24.9C1.7 25.1 1.4 25.3 1.2 25.6C1.2 25.7 1.1 25.7 1.1 25.8V25.9L0.999997 26.1C0.999997 26.2 0.999997 26.2 0.899997 26.3C0.899997 26.4 0.899997 26.4 0.799997 26.5C0.799997 26.6 0.799997 26.7 0.699997 26.7C0.699997 26.8 0.699997 26.9 0.699997 26.9C0.699997 27 0.699997 27.1 0.699997 27.1C0.699997 27.2 0.699997 27.2 0.699997 27.3C0.699997 27.4 0.699997 27.5 0.699997 27.5C0.699997 27.6 0.699997 27.7 0.699997 27.7C0.699997 27.8 0.699997 27.9 0.799997 27.9V28V28.1C0.799997 28.2 0.799997 28.2 0.899997 28.2L0.999997 28.4C0.999997 28.5 1.1 28.5 1.1 28.5C1.1 28.5 1.1 28.5 1.1 28.6C1.2 28.7 1.3 28.9 1.5 29C1.6 29 1.6 29.1 1.7 29.1C1.7 29.1 1.8 29.1 1.8 29.2C1.8 29.2 1.8 29.2 1.9 29.2C2 29.3 2.2 29.3 2.3 29.4C2.4 29.4 2.4 29.4 2.4 29.4L2.9 29.5C3.1 29.5 3.2 29.6 3.4 29.6C4.2 29.8 4.7 30.2 4.8 30.2C6.4 31.2 7.5 33 8.9 35.5C9.5 36.6 10 37.4 10.5 38.2C11.9 40.3 13.4 41 14.4 41.1C14.5 41.1 14.5 41.1 14.6 41.1C14.7 41.1 14.8 41.1 14.8 41.1C15 41.1 15.2 41.1 15.5 41.1H15.6C17.2 40.8 18.5 39.8 18.9 39.3L19 39.2L19.8 38.6C19.8 38.6 19.9 38.5 20 38.5L30.2 30.6L41.3 22L46.5 18H46.6C46.7 18 46.9 17.9 47 17.9C47.4 17.9 47.8 18.1 48.1 18.6L48.5 19.2C48.8 19.7 49.2 20.3 49.5 20.9V21C50.1 22.1 50.8 23.4 51.7 24.6C51.7 24.6 51.7 24.7 51.8 24.7C52.1 25.1 52.4 25.5 52.7 25.8C52.7 25.8 52.8 25.8 52.8 25.9C53 26.1 53.1 26.3 53.3 26.4C53.4 26.5 53.4 26.7 53.3 26.9C52 28.5 50.4 31.1 49.6 32.4V32.5C49.2 33.2 48.7 34.1 48.2 34.9C48 35.2 47.8 35.4 47.7 35.5V40.9C48.8 40.8 50.4 40.1 51.8 37.9C52.4 37 52.9 36 53.4 35.2C53.5 35 53.7 34.7 53.8 34.5C55.2 33 56.4 30.9 58.7 30.1Z"></path></svg></div>', 1), T0 = [
  L0
];
function E0(e, t, o, l, s, n) {
  return p(), d("div", null, T0);
}
const B0 = /* @__PURE__ */ Ut(O0, [["render", E0]]), z0 = {
  key: 0,
  class: "po-fixed po-z-[999] po-top-0 po-bottom-0 po-left-0 po-right-0 po-flex po-items-center po-justify-center"
}, M0 = /* @__PURE__ */ r("div", { class: "po-absolute po-w-[6.2rem] po-h-[6.2rem] po-bg-transparent po-overflow-hidden po-rounded-xl" }, [
  /* @__PURE__ */ r("div", { class: "po-loading-rotate po-absolute -po-top-8 -po-left-8 po-w-[10rem] po-h-[10rem]" })
], -1), A0 = { class: "relative po-bg-white po-w-24 po-h-24 po-flex po-items-center po-justify-center po-rounded-xl po-bg-opacity-50 po-backdrop-blur po-backdrop-filter po-z-10 po-shadow-xl" }, D0 = {
  key: 0,
  class: "po-absolute po-left-1 po-right-1 po-text-center po-py-1 po-text-xs po-text-mpao-blue po-bg-white po-bg-opacity-50 po-backdrop-blur po-backdrop-filter"
}, I0 = {
  name: "PoLoading"
}, y2 = /* @__PURE__ */ L({
  ...I0,
  props: {
    show: { type: Boolean, default: !1 },
    label: { default: "" }
  },
  setup(e) {
    return (t, o) => t.show ? (p(), d("div", z0, [
      M0,
      r("div", A0, [
        t.label !== "" ? (p(), d("span", D0, V(t.label), 1)) : _("", !0),
        S(B0)
      ])
    ])) : _("", !0);
  }
}), j0 = { class: "po-py-5 po-flex po-items-start po-space-x-5" }, R0 = ["name", "id", "checked", "aria-describedby"], F0 = { class: "po-grow -po-mt-[0.26rem]" }, N0 = ["for"], H0 = { class: "po-mt-2 po-flex po-space-x-3" }, q0 = ["href", "onClick"], W0 = {
  name: "PoConsent"
}, w2 = /* @__PURE__ */ L({
  ...W0,
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
    return (l, s) => (p(), d("div", j0, [
      r("input", xe({
        type: "checkbox",
        name: `${l.id}-field`,
        id: l.id,
        checked: l.modelValue,
        "aria-describedby": `${l.id}-description`
      }, l.$attrs, {
        onInput: o,
        class: "po-shrink-0 po-h-4 po-w-4 po-rounded border-slate-300 po-text-mpao-lightblue focus:po-ring-mpao-lightblue"
      }), null, 16, R0),
      r("div", F0, [
        r("label", {
          class: "po-block po-select-none po-text-sm po-text-slate-600 po-cursor-pointer",
          for: l.id
        }, V(l.label), 9, N0),
        r("div", H0, [
          (p(!0), d(I, null, U(l.links, (n) => (p(), d("a", {
            href: n.url,
            onClick: re((a) => l.$emit("button-click", n.url), ["prevent"]),
            class: "po-text-sm po-text-mpao-lightblue hover:po-text-mpao-blue"
          }, V(n.label), 9, q0))), 256))
        ])
      ])
    ]));
  }
}), U0 = {
  class: "po-flex po-bg-slate-50 po-rounded-t-xl po-justify-center lg:po-justify-start po-px-4 po-pt-4 xl:po-pt-2 po-flex-wrap po-overflow-hidden",
  "aria-label": "Tabs"
}, G0 = ["onClick", "aria-current"], Z0 = { key: 0 }, K0 = {
  name: "PoCardTabs"
}, _2 = /* @__PURE__ */ L({
  ...K0,
  props: {
    tabs: { default: null }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    function o(l) {
      return l.iconColor ? l.iconColor : "po-fill-current";
    }
    return (l, s) => (p(), d("nav", U0, [
      (p(!0), d(I, null, U(l.tabs, (n) => (p(), d("span", {
        role: "button",
        onClick: (a) => l.$emit("button-click", n),
        key: n.name,
        class: O([
          n.current ? "po-bg-white po-text-slate-600 po-shadow-lg" : "po-text-slate-600 hover:po-text-mpao-blue",
          "po-px-4 po-py-3 po-font-medium po-mr-4 po-mb-4 xl:po-mb-0 po-text-sm po-cursor-pointer po-rounded-xl xl:po-rounded-b-none genie-effect hover:po-text-slate-600 hover:po-bg-white hover:po-shadow-md po-flex po-items-center po-flex-shrink-0 po-space-x-2"
        ]),
        "aria-current": n.current ? "page" : void 0
      }, [
        n.icon ? (p(), j(ce(n.icon), {
          key: 0,
          class: O(["po-w-5 po-h-5", [o(n)]])
        }, null, 8, ["class"])) : _("", !0),
        r("span", null, [
          J(V(n.name), 1),
          n.count ? (p(), d("span", Z0, " (" + V(n.count) + ")", 1)) : _("", !0)
        ])
      ], 10, G0))), 128))
    ]));
  }
}), Y0 = { class: "sm:po-hidden" }, X0 = /* @__PURE__ */ r("label", {
  for: "tabs",
  class: "po-sr-only"
}, "Select a tab", -1), Q0 = ["value", "selected"], J0 = { class: "po-hidden sm:po-block" }, ef = {
  class: "po-flex po-space-x-4 po-pt-2",
  "aria-label": "Tabs"
}, tf = ["onClick", "aria-current"], of = {
  name: "PoTabs"
}, $2 = /* @__PURE__ */ L({
  ...of,
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
    const s = B(() => {
      var a;
      return (a = o.tabs) == null ? void 0 : a.map((i) => i.name === o.currentTab ? { ...i, current: !0 } : { ...i, current: !1 });
    });
    function n(a) {
      const i = Number(a.target.value);
      if (o.tabs) {
        const u = o.tabs[i];
        t("button-click", u);
      }
    }
    return (a, i) => (p(), d(I, null, [
      r("div", Y0, [
        X0,
        r("select", {
          id: "tabs",
          name: "tabs",
          class: "po-block po-w-full po-rounded-md po-border-gray-300 focus:po-border-indigo-500 focus:po-ring-indigo-500",
          onChange: n
        }, [
          (p(!0), d(I, null, U(a.tabs, (u, f) => (p(), d("option", {
            key: u.name,
            value: f,
            selected: u.current
          }, V(u.name), 9, Q0))), 128))
        ], 32)
      ]),
      r("div", J0, [
        r("nav", ef, [
          (p(!0), d(I, null, U(s.value, (u) => (p(), d("span", {
            onClick: (f) => a.$emit("button-click", u),
            role: "button",
            key: u.name,
            class: O([
              u.current ? " po-text-slate-600 po-shadow-md po-border po-border-sky-200" : " po-text-slate-600 po-shadow-sm hover:po-text-mpao-blue",
              "po-bg-white po-px-4 po-relative po-group po-py-3 po-font-medium po-text-sm po-cursor-pointer po-rounded-xl genie-effect hover:po-text-slate-600 hover:po-bg-white hover:po-shadow-md po-flex po-items-center po-space-x-2"
            ]),
            "aria-current": u.current ? "page" : void 0
          }, [
            u.icon ? (p(), j(ce(u.icon), {
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
          ], 10, tf))), 128))
        ])
      ])
    ], 64));
  }
}), lf = { class: "po-mt-5 po-flex po-flex-col po-items-center po-justify-center po-px-5 po-py-8" }, sf = {
  key: 1,
  class: "po-text-base po-font-medium po-text-slate-600 po-text-center"
}, nf = {
  key: 2,
  class: "po-text-sm po-text-slate-500 po-text-center po-max-w-lg po-block po-mx-auto"
}, af = {
  name: "PoEmpty"
}, V2 = /* @__PURE__ */ L({
  ...af,
  props: {
    label: { default: "" },
    description: { default: "" },
    icon: { default: null },
    iconColor: { default: "po-stroke-slate-300" }
  },
  setup(e) {
    return (t, o) => (p(), d("div", lf, [
      r("div", {
        class: O(["po-space-y-2 po-flex po-items-center po-flex-col po-justify-center", [{ "po-mb-5": t.$slots.action }]])
      }, [
        t.icon ? (p(), j(ce(t.icon), {
          key: 0,
          class: O(["po-w-10 po-h-10", t.iconColor])
        }, null, 8, ["class"])) : _("", !0),
        t.label !== "" ? (p(), d("span", sf, V(t.label), 1)) : _("", !0),
        t.description !== "" ? (p(), d("span", nf, V(t.description), 1)) : _("", !0)
      ], 2),
      Y(t.$slots, "action")
    ]));
  }
}), rf = { class: "po-flex po-text-sm po-text-gray-700 po-flex-col po-space-y-5" }, pf = {
  key: 0,
  class: "po-text-base po-font-medium po-text-slate-700"
}, uf = {
  key: 1,
  class: "po-border po-border-orange-300 po-bg-orange-50 po-rounded-lg po-p-5 po-flex po-items-center po-space-x-3"
}, df = { class: "po-grow po-text-sm po-text-slate-600" }, cf = {
  key: 2,
  class: "po-border po-border-red-300 po-bg-red-50 po-rounded-lg po-p-5 po-flex po-space-x-4"
}, ff = { class: "po-grow" }, vf = { class: "po-text-base po-text-slate-700 po-font-medium" }, hf = { class: "po-text-sm po-text-slate-600" }, mf = { class: "po-font-medium" }, bf = { key: 0 }, gf = { key: 0 }, yf = /* @__PURE__ */ r("dt", null, "Name", -1), wf = { key: 1 }, _f = /* @__PURE__ */ r("dt", null, "Identifer", -1), $f = { key: 2 }, Vf = /* @__PURE__ */ r("dt", null, "Date of birth", -1), xf = { key: 3 }, kf = /* @__PURE__ */ r("dt", null, "Reported Date of death", -1), Cf = {
  key: 3,
  class: "po-pt-5"
}, Sf = { class: "po-flex po-items-center po-space-x-1" }, Pf = /* @__PURE__ */ r("span", null, "File a dispute.", -1), Of = {
  name: "PoDRStatus"
}, x2 = /* @__PURE__ */ L({
  ...Of,
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
    return (l, s) => (p(), d("span", rf, [
      l.record !== null ? (p(), d("h2", pf, " Death was reported by " + V(l.record.institution), 1)) : _("", !0),
      l.request !== null && l.request.type_id === 1 ? (p(), d("div", uf, [
        S(k(to), { class: "po-shrink-0 po-w-6 po-stroke-orange-600" }),
        r("span", df, " This is a " + V(l.request.type) + " request and is in " + V(l.request.state) + " state. ", 1)
      ])) : _("", !0),
      l.request !== null && l.request.type_id !== 1 ? (p(), d("div", cf, [
        S(k(to), { class: "po-shrink-0 po-w-6 po-h-6 po-stroke-red-600 po-stroke-2" }),
        r("div", ff, [
          r("h3", vf, V(l.request.type), 1),
          r("p", hf, [
            J(" The following " + V(l.request.type) + " was reported: ", 1),
            r("span", mf, [
              J(V(l.request.dispute_type), 1),
              l.request.date_of_death ? (p(), d("span", bf, " (New date: " + V(l.request.date_of_death) + ")", 1)) : _("", !0)
            ])
          ])
        ])
      ])) : _("", !0),
      S(bd, null, {
        content: z(() => [
          l.member !== null ? (p(), d("div", gf, [
            yf,
            r("dd", null, V(l.member.name), 1)
          ])) : _("", !0),
          l.member !== null ? (p(), d("div", wf, [
            _f,
            r("dd", null, V(l.member.identifier), 1)
          ])) : _("", !0),
          l.member !== null ? (p(), d("div", $f, [
            Vf,
            r("dd", null, V(l.member.dob), 1)
          ])) : _("", !0),
          l.record !== null ? (p(), d("div", xf, [
            kf,
            r("dd", null, V(l.record.date_of_death), 1)
          ])) : _("", !0)
        ]),
        _: 1
      }),
      l.request === null ? (p(), d("span", Cf, [
        S(To, {
          type: "simple",
          onButtonClick: o
        }, {
          label: z(() => [
            r("span", Sf, [
              S(k(en), { class: "po-w-4 po-h-4 po-stroke-current" }),
              Pf
            ])
          ]),
          _: 1
        })
      ])) : _("", !0)
    ]));
  }
}), Lf = {
  role: "button",
  class: "po-w-6 po-h-6 po-rounded-lg po-bg-white genie-effect po-flex po-items-center po-justify-center hover:po-bg-slate-50 po-cursor-pointer"
}, Tf = {
  name: "PoTableAction"
}, k2 = /* @__PURE__ */ L({
  ...Tf,
  props: {
    btnIcon: { type: [Function, null], default: null },
    btnType: { default: "text" },
    label: { default: "" },
    textColor: { default: "po-slate-500" },
    iconColor: { default: "po-stroke-slate-500" }
  },
  setup(e) {
    const t = e, o = C(), l = C(), s = C(t.label);
    return t.btnType === "view" ? (o.value = an, s.value = t.label === "" ? "View" : t.label) : t.btnType === "edit" ? (o.value = pn, s.value = t.label === "" ? "Edit" : t.label) : t.btnType === "delete" ? (o.value = dn, s.value = t.label === "" ? "Delete" : t.label) : t.btnType === "icon" && t.btnIcon && (o.value = t.btnIcon), t.btnType === "view" ? l.value = "po-stroke-emerald-400" : t.btnType === "edit" ? l.value = "po-stroke-blue-400" : t.btnType === "delete" ? l.value = "po-stroke-red-400" : l.value = t.iconColor, (n, a) => (p(), d("span", null, [
      n.btnType === "icon" || n.btnType === "delete" || n.btnType === "edit" || n.btnType === "view" ? (p(), j(k(vo), {
        key: 0,
        text: s.value,
        placement: "bottom",
        strategy: "fixed"
      }, {
        default: z(() => [
          r("span", Lf, [
            (p(), j(ce(o.value), {
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
}), Ef = { key: 0 }, Bf = {
  name: "Rufiyaa"
}, C2 = /* @__PURE__ */ L({
  ...Bf,
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
      o.amount !== null ? (p(), d("span", Ef, V(t(o.amount)), 1)) : _("", !0)
    ]));
  }
}), zf = {
  name: "PoHeading"
}, S2 = /* @__PURE__ */ L({
  ...zf,
  props: {
    text: { default: "" },
    type: { default: "h3" }
  },
  setup(e) {
    return (t, o) => (p(), j(ce(t.type), { class: "po-text-base po-text-slate-600 po-font-semibold" }, {
      default: z(() => [
        J(V(t.text), 1)
      ]),
      _: 1
    }));
  }
}), Mf = ["for"], Af = { class: "po-capitalize" }, Df = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, If = ["title"], jf = { class: "po-relative po-mt-1" }, Rf = { class: "po-shrink-0 po-pr-1 po-inline-flex po-flex-wrap po-w-full po-gap-1 po-max-h-44" }, Ff = { class: "po-px-2 po-py-1 po-rounded-md po-text-sm po-text-slate-600 po-flex po-space-x-2 po-items-center po-bg-gradient-to-l po-from-slate-50 po-via-cyan-50 po-to-cyan-100/60 po-border po-border-cyan-200" }, Nf = ["onClick"], Hf = ["id"], qf = {
  key: 0,
  class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
}, Wf = ["onClick", "value"], Uf = {
  class: /* @__PURE__ */ O(["po-block po-truncate"])
}, Gf = ["id"], Zf = ["id"], Kf = {
  name: "PoMultiSelect"
}, P2 = /* @__PURE__ */ L({
  ...Kf,
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
    const s = C(""), n = C([]), a = C(!1);
    function i(b) {
      n.value.splice(b, 1), c();
    }
    function u(b) {
      let h = s.value.split(",");
      b.key === "Enter" && 0 < s.value.length && (b.preventDefault(), h.forEach((y) => {
        var P;
        let x = (P = o.items) == null ? void 0 : P.find(
          ($) => $.name.toLowerCase() === y.trim().toLowerCase()
        );
        x && n.value.push(x);
      }), s.value = ""), b.key === "Backspace" && s.value.length === 0 && a.value && n.value.pop(), c();
    }
    const f = C([]);
    function c() {
      f.value = n.value.map((b) => b.id);
    }
    G(() => {
      document.addEventListener("keydown", u);
    }), ne(() => {
      document.removeEventListener("keydown", u);
    });
    const v = C(!1), w = B(
      () => {
        var b;
        return s.value === "" ? o.items : (b = o.items) == null ? void 0 : b.filter((h) => h.name.toLowerCase().includes(s.value.toLowerCase()));
      }
    );
    let m = C();
    Ro(m, () => {
      v.value = !1;
    });
    function g(b) {
      n.value.push(b), s.value = "", c();
    }
    return Q(f, () => {
      t("update:modelValue", f.value);
    }), (b, h) => (p(), d("div", {
      ref_key: "multiSelectComponentRef",
      ref: m,
      class: O(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": b.display === "horizontal" }]])
    }, [
      r("label", {
        for: b.id,
        class: O([
          "po-text-sm po-font-medium po-flex po-items-center po-space-x-1",
          { "po-text-red-500": b.hasError },
          { "po-text-slate-700": !b.hasError }
        ])
      }, [
        r("span", Af, V(b.label), 1),
        b.required ? (p(), d("span", Df, "*")) : _("", !0),
        b.info !== null ? (p(), d("abbr", {
          key: 1,
          title: b.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          S(k(Ss), { class: "po-fill-current" })
        ], 8, If)) : _("", !0)
      ], 10, Mf),
      r("div", jf, [
        r("div", {
          class: O([
            "po-border po-p-1 po-min-h-[2.38rem] po-flex po-flex-wrap po-items-center focus-within:po-border-mpao-lightblue po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white sm:po-text-sm",
            l()
          ])
        }, [
          r("div", Rf, [
            n.value.length > 0 ? (p(!0), d(I, { key: 0 }, U(n.value, (y, x) => (p(), d("span", Ff, [
              r("span", null, V(y.name), 1),
              r("span", {
                onClick: () => i(x),
                role: "button",
                class: "po-cursor-pointer"
              }, [
                S(k(vt), { class: "po-w-3 po-stroke-red-600 po-stroke-2" })
              ], 8, Nf)
            ]))), 256)) : _("", !0),
            Ae(r("input", {
              id: b.id,
              "onUpdate:modelValue": h[0] || (h[0] = (y) => s.value = y),
              onFocus: h[1] || (h[1] = () => {
                v.value = !0, a.value = !0;
              }),
              onBlur: h[2] || (h[2] = () => a.value = !1),
              class: "po-border-0 po-outline-none po-ring-0 po-grow"
            }, null, 40, Hf), [
              [Et, s.value]
            ])
          ])
        ], 2),
        v.value ? (p(), d("ul", qf, [
          (p(!0), d(I, null, U(w.value, (y) => (p(), d("li", {
            onClick: () => g(y),
            key: y.id,
            value: y.id,
            class: O([
              "po-relative po-select-none po-py-2 hover:po-bg-mpao-lightblue hover:po-text-white po-cursor-pointer po-pl-3 po-pr-9"
            ])
          }, [
            r("span", Uf, V(y.name), 1)
          ], 8, Wf))), 128))
        ])) : _("", !0)
      ]),
      b.message !== null ? (p(), d("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${b.id}-description`
      }, V(b.message), 9, Gf)) : _("", !0),
      b.hasError && b.errorMessage !== null ? (p(), d("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-center po-space-x-1",
        id: `${b.id}-error`
      }, [
        S(k(Bp), { class: "po-fill-current po-w-4" }),
        r("span", null, V(b.errorMessage), 1)
      ], 8, Zf)) : _("", !0)
    ], 2));
  }
}), Yf = { class: "po-flex po-pl-5" }, Xf = /* @__PURE__ */ r("div", { class: "po-shrink-0 po-flex po-flex-col" }, [
  /* @__PURE__ */ r("div", { class: "po-w-[2px] po-shrink-0 po-h-10" }),
  /* @__PURE__ */ r("div", { class: "po-bg-gradient-to-t po-from-orange-400 po-via-red-300 po-to-blue-500 po-w-[2px] po-grow" }),
  /* @__PURE__ */ r("div", { class: "po-w-[2px] po-shrink-0 po-h-12" })
], -1), Qf = { class: "po-grow po-pl-5 po-pt-5 po-space-y-3" }, Jf = ["onClick"], e4 = { class: "-po-mt-1 po-flex po-space-x-3 po-items-center" }, t4 = { class: "po-block po-text-xs po-text-slate-400" }, o4 = { class: "po-text-xs po-text-slate-500 po-pt-1" }, l4 = {
  name: "PoTimeline"
}, O2 = /* @__PURE__ */ L({
  ...l4,
  props: {
    timeline: { default: null },
    clickable: { type: Boolean, default: !1 }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, l) => (p(), d("div", Yf, [
      Xf,
      r("div", Qf, [
        (p(!0), d(I, null, U(o.timeline, (s) => (p(), d("div", {
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
            r("div", e4, [
              r("h4", {
                class: O(["po-text-sm po-text-slate-600 po-font-medium", [{ "group-hover:po-text-mpao-lightblue": o.clickable }]])
              }, V(s.label), 3),
              r("span", t4, V(k(Zs)(s.date)), 1)
            ]),
            r("p", o4, V(s.description), 1)
          ])
        ], 10, Jf))), 256))
      ])
    ]));
  }
}), s4 = {
  name: "PoTableCheckbox"
}, L2 = /* @__PURE__ */ L({
  ...s4,
  props: {
    itemId: { default: null },
    isChecked: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["checkboxClicked"],
  setup(e, { emit: t }) {
    return (o, l) => (p(), d(I, null, [
      o.isChecked ? (p(), j(k(pl), {
        key: 0,
        onClick: l[0] || (l[0] = re(() => o.$emit("checkboxClicked", o.itemId), ["prevent"])),
        class: "po-w-6 po-fill-mpao-lightblue po-cursor-pointer"
      })) : _("", !0),
      o.disabled ? (p(), j(k(pl), {
        key: 1,
        class: "po-w-6 po-fill-slate-400"
      })) : _("", !0),
      !o.isChecked && !o.disabled ? (p(), d("span", {
        key: 2,
        onClick: l[1] || (l[1] = re(() => o.$emit("checkboxClicked", o.itemId), ["prevent"])),
        class: "po-h-5 po-w-5 po-rounded-full po-border-2 po-ml-[2px] po-block po-border-slate-300 po-cursor-pointer"
      })) : _("", !0)
    ], 64));
  }
}), n4 = { class: "po-p-4" }, a4 = { class: "po-flex po-items-start po-space-x-3" }, r4 = /* @__PURE__ */ r("span", { class: "po-sr-only" }, "Action icon", -1), i4 = { class: "po-w-0 po-flex-1 po-text-sm po-font-medium po-text-gray-400" }, p4 = { class: "po-ml-4 po-flex po-flex-shrink-0" }, u4 = /* @__PURE__ */ r("span", { class: "po-sr-only" }, "Close", -1), d4 = {
  name: "PoToast"
}, T2 = /* @__PURE__ */ L({
  ...d4,
  props: {
    show: { type: Boolean, default: !1 },
    actionType: { default: "" },
    message: { default: "" },
    hideIn: { default: 2e3 },
    size: { default: "sm" }
  },
  emits: ["toast-closed"],
  setup(e, { emit: t }) {
    const o = e, { show: l } = we(o), s = C(!1);
    Q(l, () => {
      s.value = l.value;
    });
    function n() {
      s.value = !1, t("toast-closed", !0);
    }
    setTimeout(() => {
      n();
    }, o.hideIn);
    const a = B(() => o.message === "" && o.actionType !== "" ? o.actionType === "success" ? "Saved Successfully!" : o.actionType === "danger" ? "Item deleted!" : o.actionType === "warn" ? "Attention needed!" : "Wrong action" : o.message);
    return (i, u) => (p(), j(ft, { to: "#po-notifications-alert" }, [
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
            r("div", n4, [
              r("div", a4, [
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
                  i.actionType === "success" ? (p(), j(k(Or), {
                    key: 0,
                    class: "po-w-4 po-h-4"
                  })) : _("", !0),
                  i.actionType === "danger" ? (p(), j(k(Er), {
                    key: 1,
                    class: "po-w-4 po-h-4"
                  })) : _("", !0),
                  i.actionType === "warn" ? (p(), j(k(ps), {
                    key: 2,
                    class: "po-w-4 po-h-4"
                  })) : _("", !0),
                  r4
                ], 2)) : _("", !0),
                r("p", i4, V(a.value), 1),
                r("div", p4, [
                  r("button", {
                    type: "button",
                    onClick: n,
                    class: "po-inline-flex po-rounded-md po-bg-gray-900 po-text-gray-400 hover:po-text-gray-300 hover:po-bg-gray-700 po-transition-colors po-duration-150 po-ease-out focus:po-outline-none focus:po-ring-2 focus:po-ring-indigo-500 focus:po-ring-offset-2"
                  }, [
                    u4,
                    S(k(us), {
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
}), c4 = ["for"], f4 = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, v4 = ["title"], h4 = { class: "po-relative po-mt-1" }, m4 = {
  key: 1,
  class: "po-absolute po-top-0 po-left-0 po-right-0 po-bottom-0 po-overflow-hidden po-bg-white po-rounded-md po-border po-border-slate-300 po-flex po-items-center"
}, b4 = { class: "po-grow" }, g4 = ["id"], y4 = ["onClick"], w4 = {
  key: 0,
  class: "po-text-sm po-text-slate-600 po-p-4 po-block"
}, _4 = {
  key: 0,
  class: "po-mt-2 po-text-sm po-text-slate-500",
  id: "-description"
}, $4 = {
  key: 1,
  class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
  id: "-error"
}, V4 = {
  name: "PoSelectApi",
  components: { XMarkIcon: vt }
}, E2 = /* @__PURE__ */ L({
  ...V4,
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
    const o = e, l = C(), s = C(!1), n = C(!1), a = C([]);
    Q(o, (y, x) => {
      a.value = o.options;
    });
    const i = C(null);
    C(null), Ro(i, () => {
      s.value = !!n.value;
    });
    function u() {
      n.value = !1, setTimeout(() => {
        s.value = !1;
      }, 100);
    }
    const f = C("");
    G(() => {
      o.id === "" ? f.value = o.label.replace(/\s/g, "") + "-" + Date.now() + "-selectapi-" + Math.floor(Math.random() * 9e3) : f.value = o.id;
    });
    const c = C();
    function v() {
      t("search", c.value);
    }
    const w = C(null);
    function m(y) {
      w.value = y, t("selected", y), s.value = !!n.value;
    }
    function g() {
      t("loadmore", !0);
    }
    const b = C();
    let h;
    return G(() => {
      h = jo(l.value, b.value, {
        placement: "bottom-end",
        strategy: "fixed",
        modifiers: [
          {
            name: "sameWidth",
            enabled: !0,
            fn: ({ state: y }) => {
              y.styles.popper.width = `${y.rects.reference.width}px`;
            },
            phase: "beforeWrite",
            requires: ["computeStyles"]
          }
        ]
      });
    }), ne(() => {
      h && h.destroy();
    }), (y, x) => (p(), d("div", {
      ref_key: "containerRef",
      ref: i,
      class: O(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": y.display === "horizontal" }]])
    }, [
      r("label", {
        for: f.value,
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700"
      }, [
        r("span", null, V(y.label), 1),
        y.required ? (p(), d("span", f4, "*")) : _("", !0),
        y.info !== null ? (p(), d("abbr", {
          key: 1,
          title: y.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          S(k(Ht), { class: "po-fill-current" })
        ], 8, v4)) : _("", !0)
      ], 8, c4),
      r("div", h4, [
        r("div", null, [
          y.loading ? (p(), j(Nt, {
            key: 0,
            class: "po-right-0 po-top-4",
            absolute: !0
          })) : _("", !0),
          w.value !== null && y.showSelected ? (p(), d("div", m4, [
            r("div", b4, [
              Y(y.$slots, "selectedOption", Xe(Qe(w.value)), () => [
                J(V(w.value), 1)
              ])
            ]),
            r("span", {
              class: "po-shrink-0 po-p-1 po-cursor-pointer",
              onClick: x[0] || (x[0] = (P) => {
                w.value = null, c.value = "";
              })
            }, [
              S(k(vt), { class: "po-w-4 po-stroke-2 po-stroke-slate-400" })
            ])
          ])) : _("", !0),
          Ae(r("input", {
            type: "text",
            name: "",
            id: f.value,
            ref_key: "selectBox",
            ref: l,
            "onUpdate:modelValue": x[1] || (x[1] = (P) => c.value = P),
            onInput: v,
            onFocus: x[2] || (x[2] = (P) => {
              n.value = !0, s.value = !0;
            }),
            onBlur: u,
            class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm"
          }, null, 40, g4), [
            [Et, c.value]
          ])
        ]),
        Ae(r("div", {
          ref_key: "popper",
          ref: b,
          class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
        }, [
          a.value && a.value.length > 0 ? (p(), d(I, { key: 0 }, [
            (p(!0), d(I, null, U(a.value, (P) => (p(), d("div", {
              onClick: ($) => m(P)
            }, [
              Y(y.$slots, "option", Xe(Qe(P)), () => [
                J(V(P), 1)
              ])
            ], 8, y4))), 256)),
            y.showMoreBtn ? (p(), d("span", {
              key: 0,
              role: "button",
              onClick: g,
              class: "po-text-sm po-text-semibold po-text-mpao-lightblue po-block po-text-center po-py-2 hover:po-bg-slate-50 po-transition-colors po-duration-150 po-ease-out"
            }, "More")) : _("", !0)
          ], 64)) : (p(), d(I, { key: 1 }, [
            y.emptyMessage ? (p(), d("span", w4, V(y.emptyMessage), 1)) : _("", !0)
          ], 64))
        ], 512), [
          [
            go,
            s.value && a.value.length > 0 || s.value && y.emptyMessage
          ]
        ]),
        y.message !== null ? (p(), d("p", _4, V(y.message), 1)) : _("", !0),
        y.errorMessage !== null ? (p(), d("p", $4, [
          r("span", null, V(y.errorMessage), 1)
        ])) : _("", !0)
      ])
    ], 2));
  }
}), x4 = { class: "po-bg-blue-300/20 po-border po-border-blue-200 po-p-3 po-mb-5 po-rounded-md po-text-sm sm:po-space-x-2 po-flex po-items-center po-flex-wrap" }, k4 = { class: "po-text-blue-500" }, C4 = {
  name: "PoMessage"
}, B2 = /* @__PURE__ */ L({
  ...C4,
  props: {
    msgType: { default: "info" },
    message: { default: "" },
    btnName: { default: "" },
    btnAction: { default: "" }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, l) => (p(), d("div", x4, [
      r("span", k4, V(o.message), 1),
      o.btnName !== "" ? (p(), d("span", {
        key: 0,
        role: "button",
        onClick: l[0] || (l[0] = (s) => o.$emit("button-click", o.btnAction)),
        class: "po-text-blue-600 po-underline po-font-medium po-text-xs"
      }, V(o.btnName), 1)) : _("", !0)
    ]));
  }
}), S4 = {
  key: 0,
  class: "po-flex md:po-justify-end"
}, P4 = ["onClick"], O4 = { class: "po-text-xl po-font-medium po-text-slate-600 po-flex po-items-center po-space-x-1" }, L4 = {
  name: "PoPageStats"
}, z2 = /* @__PURE__ */ L({
  ...L4,
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
    return (l, s) => l.stats !== null ? (p(), d("div", S4, [
      r("div", {
        class: O(["po-bg-slate-50 po-shadow-sm po-rounded-xl po-divide-x po-divide-slate-200 po-flex", l.padding])
      }, [
        (p(!0), d(I, null, U(l.stats, (n) => (p(), d("div", {
          class: O(["po-px-4 po-group", { "po-cursor-pointer": l.clickable }]),
          onClick: (a) => l.$emit("stat-click", n)
        }, [
          r("span", O4, [
            n.icon ? (p(), d("span", {
              key: 0,
              class: O(["po-w-5 po-h-5", o(n)])
            }, [
              (p(), j(ce(n.icon)))
            ], 2)) : _("", !0),
            r("span", {
              class: O(["po-text-xl po-font-medium po-text-slate-600", { "group-hover:po-text-mpao-lightblue": l.clickable }])
            }, V(n.value), 3)
          ]),
          r("span", {
            class: O(["po-text-sm po-text-slate-500 po-block", { "group-hover:po-text-mpao-lightblue": l.clickable }])
          }, V(n.label), 3)
        ], 10, P4))), 256))
      ], 2)
    ])) : _("", !0);
  }
}), T4 = {
  name: "PoTooltip"
}, vo = /* @__PURE__ */ L({
  ...T4,
  props: {
    text: { default: "" },
    placement: { default: "bottom" },
    strategy: { default: "absolute" }
  },
  setup(e) {
    const t = e, o = C(null), l = C(null), s = C(!1);
    let n = null;
    G(() => {
      o.value && l.value && (n = jo(o.value, l.value, {
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
    return (u, f) => (p(), d("span", {
      ref_key: "trigger",
      ref: o,
      onMouseover: a,
      onMouseleave: i
    }, [
      Y(u.$slots, "default", {}, () => [
        J("Tooltip")
      ]),
      (p(), j(ft, { to: "body" }, [
        Ae(r("div", {
          ref_key: "popper",
          ref: l,
          class: O(["po-bg-slate-700 po-text-xs po-z-50 po-transition-opacity po-duration-100 po-ease-linear po-text-slate-50 po-rounded-md po-px-2 po-py-1 po-shadow-md", [{ "po-opacity-0": !s.value }, { "po-opacity-100": s.value }]])
        }, V(u.text), 3), [
          [go, u.text]
        ])
      ]))
    ], 544));
  }
}), E4 = ["for"], B4 = { class: "po-capitalize" }, z4 = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, M4 = ["title"], A4 = ["for"], D4 = {
  key: 0,
  class: "po-flex po-items-center po-space-x-2"
}, I4 = {
  key: 1,
  class: "po-flex po-items-center po-space-x-2"
}, j4 = { class: "po-grow po-text-sm po-text-slate-600" }, R4 = /* @__PURE__ */ r("span", null, "Uploading... ", -1), F4 = { class: "po-shrink-0 po-relative po-top-[3px]" }, N4 = ["name", "id", "value", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], H4 = ["id"], q4 = ["id"], W4 = {
  name: "PoUpload"
}, M2 = /* @__PURE__ */ L({
  ...W4,
  props: {
    payload: { default: () => ({}) },
    url: { default: "" },
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
    inputLabel: { default: "Choose File" }
  },
  emits: [
    "selected",
    "unSelected",
    "update:modelValue",
    "uploaded"
  ],
  setup(e, { emit: t }) {
    const o = e, { errorMessage: l } = we(o), s = C(l.value !== null);
    Q(l, (v, w) => {
      s.value = l.value !== null && l.value !== "";
    });
    const n = C([]), a = C("initial");
    function i(v) {
      a.value = "uploading";
      const w = useCookie("auth_token");
      fetch(`${f()}`, {
        method: "POST",
        headers: {
          // Set the authorization header with the auth token from 'auth_token' cookie
          Authorization: `Bearer ${w.value}`
        },
        body: u(v)
      }).then(
        function(m) {
          m.status != 201 ? this.fetchError = m.status : m.json().then(function(g) {
          }.bind(this)), a.value = "initial", t("uploaded", m);
        }.bind(this)
      );
    }
    function u(v) {
      let w = new FormData();
      for (const m of v.target.files)
        w.append("files", m);
      return w.append("payload", JSON.stringify(o.payload)), w;
    }
    function f() {
      const v = o == null ? void 0 : o.url;
      return v.includes("http") ? o == null ? void 0 : o.url : `${useRuntimeConfig().public.api}/${v}`;
    }
    function c() {
      return o.hasError ? "po-border-red-400 focus:po-border-red-600 focus:po-ring-red-600" : o.borderColor;
    }
    return (v, w) => (p(), d("div", {
      class: O(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": v.display === "horizontal" }]])
    }, [
      r("label", {
        disabled: !0,
        for: `${v.id}-upload-field`,
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700 po-mb-1"
      }, [
        r("span", B4, V(v.label), 1),
        v.required ? (p(), d("span", z4, "*")) : _("", !0),
        v.info !== null ? (p(), d("abbr", {
          key: 1,
          title: v.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          S(k(Ht), { class: "po-fill-current" })
        ], 8, M4)) : _("", !0)
      ], 8, E4),
      r("label", {
        for: v.id,
        class: O([
          "po-border po-block po-p-2 po-text-sm po-text-slate-600 po-cursor-pointer po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white focus:po-ring-0 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default",
          c()
        ])
      }, [
        a.value === "initial" ? (p(), d("span", D4, [
          S(k(Lt), { class: "po-w-4 po-stroke-slate-500" }),
          r("span", null, V(v.inputLabel), 1)
        ])) : _("", !0),
        a.value === "uploading" ? (p(), d("span", I4, [
          S(k(Lt), { class: "po-w-4 po-stroke-slate-500" }),
          r("div", j4, [
            R4,
            r("span", null, "(" + V(n.value.length) + ")", 1)
          ]),
          r("div", F4, [
            S(Nt)
          ])
        ])) : _("", !0)
      ], 10, A4),
      r("input", xe({
        type: "file",
        name: `${v.id}-upload-field`,
        id: v.id,
        value: v.modelValue,
        disabled: v.disabled,
        required: v.required,
        "aria-describedby": `${v.id}-description`,
        "aria-required": v.required,
        "aria-disabled": v.disabled
      }, v.$attrs, {
        onChange: i,
        class: "po-hidden",
        multiple: ""
      }), null, 16, N4),
      v.message !== null ? (p(), d("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${v.id}-description`
      }, V(v.message), 9, H4)) : _("", !0),
      s.value && k(l) !== null ? (p(), d("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
        id: `${v.id}-error`
      }, [
        r("span", null, V(k(l)), 1)
      ], 8, q4)) : _("", !0)
    ], 2));
  }
});
export {
  X4 as PoActionBar,
  h2 as PoAlert,
  Sn as PoAppIcon,
  Ia as PoAppTray,
  To as PoButton,
  Q4 as PoCard,
  J4 as PoCardSearch,
  _2 as PoCardTabs,
  d2 as PoChatLogItem,
  a2 as PoCheckbox,
  v2 as PoCommandPalette,
  w2 as PoConsent,
  g2 as PoContentArea,
  x2 as PoDRStatus,
  bd as PoDescriptionList,
  b2 as PoDownloadFileList,
  V2 as PoEmpty,
  r2 as PoFooter,
  i2 as PoFormStatusMessage,
  S2 as PoHeading,
  o2 as PoInputField,
  l2 as PoInputFile,
  y2 as PoLoading,
  m2 as PoLogs,
  B2 as PoMessage,
  wt as PoModal,
  P2 as PoMultiSelect,
  c2 as PoNotification,
  Ya as PoNotificationHub,
  z2 as PoPageStats,
  e2 as PoPageTitle,
  Eu as PoPagination,
  $r as PoProfileSwitcher,
  p2 as PoRadioInput,
  En as PoSearchBar,
  n2 as PoSectionMenu,
  E2 as PoSelectApi,
  _p as PoSelectField,
  Y4 as PoSidebarDrawer,
  f2 as PoSlideover,
  u2 as PoStatsBlock,
  t2 as PoTable,
  k2 as PoTableAction,
  L2 as PoTableCheckbox,
  $2 as PoTabs,
  Hp as PoTextarea,
  O2 as PoTimeline,
  T2 as PoToast,
  s2 as PoToggle,
  vo as PoTooltip,
  Z4 as PoTopBar,
  M2 as PoUpload,
  C2 as Rufiyaa
};
