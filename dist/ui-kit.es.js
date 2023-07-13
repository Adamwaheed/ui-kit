import { openBlock as u, createElementBlock as c, createElementVNode as s, defineComponent as L, ref as C, toRefs as xe, watch as Q, Fragment as I, createVNode as S, unref as w, withCtx as z, renderSlot as Y, createBlock as j, resolveDynamicComponent as de, createCommentVNode as x, computed as B, toDisplayString as V, withDirectives as Ae, isRef as Mn, withKeys as An, vModelText as Et, cloneVNode as Dn, h as te, inject as ue, provide as pe, onMounted as G, watchEffect as ce, onUnmounted as ae, Teleport as ft, reactive as In, shallowRef as Vl, nextTick as ho, toRaw as ze, normalizeClass as P, renderList as U, Transition as De, withModifiers as re, onBeforeMount as jn, onBeforeUpdate as Rn, onUpdated as mo, mergeProps as ke, createTextVNode as J, onBeforeUnmount as kl, pushScopeId as Fn, popScopeId as Nn, withScopeId as Hn, markRaw as qn, shallowReactive as Wn, resolveComponent as _l, resolveDirective as Un, normalizeStyle as bo, toHandlers as Gn, normalizeProps as Xe, guardReactiveProps as Qe, vShow as go, createStaticVNode as Zn } from "vue";
import { f as Qo, a as Kn } from "./FormatDate-8e09898f.mjs";
function Yn(e, t) {
  return u(), c("svg", {
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
function Xn(e, t) {
  return u(), c("svg", {
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
function Qn(e, t) {
  return u(), c("svg", {
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
function Jn(e, t) {
  return u(), c("svg", {
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
function ea(e, t) {
  return u(), c("svg", {
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
function ta(e, t) {
  return u(), c("svg", {
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
function oa(e, t) {
  return u(), c("svg", {
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
function la(e, t) {
  return u(), c("svg", {
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
function na(e, t) {
  return u(), c("svg", {
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
function aa(e, t) {
  return u(), c("svg", {
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
function sa(e, t) {
  return u(), c("svg", {
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
function ra(e, t) {
  return u(), c("svg", {
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
function to(e, t) {
  return u(), c("svg", {
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
function ia(e, t) {
  return u(), c("svg", {
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
function ua(e, t) {
  return u(), c("svg", {
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
function yo(e, t) {
  return u(), c("svg", {
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
function Lt(e, t) {
  return u(), c("svg", {
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
function pa(e, t) {
  return u(), c("svg", {
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
function ca(e, t) {
  return u(), c("svg", {
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
function da(e, t) {
  return u(), c("svg", {
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
function Jo(e, t) {
  return u(), c("svg", {
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
function vt(e, t) {
  return u(), c("svg", {
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
const fa = /* @__PURE__ */ s("div", {
  "aria-live": "assertive",
  class: "po-pointer-events-none po-fixed po-inset-0 po-flex po-items-start po-px-4 po-py-6 sm:po-p-6 po-z-[60]"
}, [
  /* @__PURE__ */ s("div", {
    class: "po-flex po-w-full po-flex-col po-items-end po-space-y-4 sm:po-items-end po-pt-[55px]",
    id: "po-notifications-alert"
  })
], -1), va = { class: "po-bg-mpao-blue po-fixed po-top-0 po-w-full po-z-50 po-flex" }, ha = { class: "po-shrink-0 po-px-3 po-pt-3" }, ma = {
  for: "sidebar-drawer-toggle",
  role: "button",
  class: "genie-effect po-flex po-items-center po-justify-center po-bg-[#2e5266] po-rounded-full po-w-10 po-h-10 po-select-none po-text-slate-100"
}, ba = { class: "po-mx-auto po-max-w-full po-pr-4 po-grow sm:po-pr-4" }, ga = { class: "po-flex po-relative po-h-16 po-items-center po-justify-between po-space-x-12" }, ya = { class: "po-flex po-items-center po-space-x-3" }, xa = {
  key: 0,
  class: "po-block po-w-6 po-text-slate-100 md:po-hidden",
  role: "button"
}, wa = {
  name: "PoTopBar"
}, Y4 = /* @__PURE__ */ L({
  ...wa,
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
    const o = e, l = C(""), n = C(""), { avatar: a, logo: r } = xe(o);
    Q(a, () => {
      l.value = a.value;
    }), Q(r, () => {
      n.value = r.value;
    });
    function i(d) {
      t("profileSwitcherClick", d);
    }
    function p(d) {
      t("query", d);
    }
    function f(d) {
      t("onSearchClear", d);
    }
    return (d, m) => (u(), c(I, null, [
      fa,
      s("nav", va, [
        s("div", ha, [
          s("label", ma, [
            S(w(Jn), { class: "po-w-6 po-fill-current" })
          ])
        ]),
        s("div", ba, [
          s("div", ga, [
            S(w(Pa), { "app-name": e.appName }, {
              icon: z(() => [
                Y(d.$slots, "appIcon", {}, () => [
                  e.appIcon ? (u(), j(de(e.appIcon), { key: 0 })) : x("", !0)
                ])
              ]),
              _: 3
            }, 8, ["app-name"]),
            e.hasSearch ? (u(), j(w(Ba), {
              key: 0,
              onQuery: p,
              onOnClear: f,
              "current-query": e.currentQuery
            }, null, 8, ["current-query"])) : x("", !0),
            s("div", ya, [
              e.hasSearch ? (u(), c("span", xa, [
                S(w(yo), { class: "po-stroke-current" })
              ])) : x("", !0),
              S(w(Xs), {
                notifications: e.notifications,
                "has-new-notifications": e.hasNewNotifications
              }, null, 8, ["notifications", "has-new-notifications"]),
              S(w(js), {
                "app-list": e.appList,
                "open-in-new-tab": !0
              }, null, 8, ["app-list"]),
              S(w(Vr), {
                "user-object": e.userObject,
                avatar: l.value,
                logo: n.value,
                onButtonClick: i
              }, null, 8, ["user-object", "avatar", "logo"])
            ])
          ])
        ])
      ])
    ], 64));
  }
}), $a = { class: "po-flex po-items-center po-justify-center po-space-x-3" }, Va = { class: "po-w-8 po-text-slate-100 app-icon" }, ka = { class: "po-font-light po-text-lg po-text-slate-100" }, _a = { class: "po-hidden md:po-block" }, Ca = { class: "po-block md:po-hidden" }, Sa = {
  name: "PoAppIcon"
}, Pa = /* @__PURE__ */ L({
  ...Sa,
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
      let n = l.join("");
      return n.length === 1 ? t.appName.substring(0, 3) : n;
    });
    return (l, n) => (u(), c("div", $a, [
      s("div", Va, [
        Y(l.$slots, "icon")
      ]),
      s("span", ka, [
        s("span", _a, V(e.appName), 1),
        s("span", Ca, V(w(o)), 1)
      ])
    ]));
  }
}), Oa = { class: "po-flex-grow po-hidden po-relative md:po-block" }, La = ["placeholder", "onKeyup"], Ta = { class: "po-absolute po-inset-y-0 po-left-0 po-flex po-items-center po-pl-3 po-pointer-events-none po-transition-all po-ease-linear po-duration-100 po-text-slate-400 po-origin-center peer-hover/search:po-scale-105 peer-focus/search:po-text-slate-100" }, Ea = {
  name: "PoSearchBar"
}, Ba = /* @__PURE__ */ L({
  ...Ea,
  props: {
    placeholder: { default: "Search" },
    currentQuery: { default: "" }
  },
  emits: ["query", "onClear"],
  setup(e, { emit: t }) {
    let o = C("");
    const l = (n) => {
      t("query", o.value);
    };
    return Q(o, async (n, a) => {
      n === "" && t("onClear", !0);
    }), (n, a) => (u(), c("div", Oa, [
      Ae(s("input", {
        "onUpdate:modelValue": a[0] || (a[0] = (r) => Mn(o) ? o.value = r : o = r),
        type: "text",
        id: "main-search",
        placeholder: e.placeholder,
        onKeyup: An(l, ["enter"]),
        class: "peer/search po-bg-transparent po-border po-border-transparent po-text-slate-100 po-text-sm po-rounded-md po-ring-0 po-outline-none focus:po-outline-none focus:po-ring-0 po-transition-colors po-ease-linear po-duration-100 po-block po-w-full po-pl-10 po-p-2.5 po-appearance-none focus:po-border-slate-400 hover:po-border-slate-600"
      }, null, 40, La), [
        [Et, w(o)]
      ]),
      s("div", Ta, [
        S(w(yo), { class: "po-w-5 po-h-5 po-stroke-current" })
      ])
    ]));
  }
});
function ie(e, t, ...o) {
  if (e in t) {
    let n = t[e];
    return typeof n == "function" ? n(...o) : n;
  }
  let l = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((n) => `"${n}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(l, ie), l;
}
var Ce = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Ce || {}), Me = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Me || {});
function ee({ visible: e = !0, features: t = 0, ourProps: o, theirProps: l, ...n }) {
  var a;
  let r = Sl(l, o), i = Object.assign(n, { props: r });
  if (e || t & 2 && r.static)
    return Yt(i);
  if (t & 1) {
    let p = (a = r.unmount) == null || a ? 0 : 1;
    return ie(p, { [0]() {
      return null;
    }, [1]() {
      return Yt({ ...n, props: { ...r, hidden: !0, style: { display: "none" } } });
    } });
  }
  return Yt(i);
}
function Yt({ props: e, attrs: t, slots: o, slot: l, name: n }) {
  var a, r;
  let { as: i, ...p } = Bt(e, ["unmount", "static"]), f = (a = o.default) == null ? void 0 : a.call(o, l), d = {};
  if (l) {
    let m = !1, y = [];
    for (let [h, b] of Object.entries(l))
      typeof b == "boolean" && (m = !0), b === !0 && y.push(h);
    m && (d["data-headlessui-state"] = y.join(" "));
  }
  if (i === "template") {
    if (f = Cl(f ?? []), Object.keys(p).length > 0 || Object.keys(t).length > 0) {
      let [m, ...y] = f ?? [];
      if (!za(m) || y.length > 0)
        throw new Error(['Passing props on "template"!', "", `The current component <${n} /> is rendering a "template".`, "However we need to passthrough the following props:", Object.keys(p).concat(Object.keys(t)).map((g) => g.trim()).filter((g, v, $) => $.indexOf(g) === v).sort((g, v) => g.localeCompare(v)).map((g) => `  - ${g}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".', "Render a single element as the child so that we can forward the props onto that element."].map((g) => `  - ${g}`).join(`
`)].join(`
`));
      let h = Sl((r = m.props) != null ? r : {}, p), b = Dn(m, h);
      for (let g in h)
        g.startsWith("on") && (b.props || (b.props = {}), b.props[g] = h[g]);
      return b;
    }
    return Array.isArray(f) && f.length === 1 ? f[0] : f;
  }
  return te(i, Object.assign({}, p, d), { default: () => f });
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
    for (let n in l)
      n.startsWith("on") && typeof l[n] == "function" ? (o[n] != null || (o[n] = []), o[n].push(l[n])) : t[n] = l[n];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(o).map((l) => [l, void 0])));
  for (let l in o)
    Object.assign(t, { [l](n, ...a) {
      let r = o[l];
      for (let i of r) {
        if (n instanceof Event && n.defaultPrevented)
          return;
        i(n, ...a);
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
function za(e) {
  return e == null ? !1 : typeof e.type == "string" || typeof e.type == "object" || typeof e.type == "function";
}
let Ma = 0;
function Aa() {
  return ++Ma;
}
function se() {
  return Aa();
}
var le = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(le || {});
function M(e) {
  var t;
  return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value;
}
let Ol = Symbol("Context");
var oe = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(oe || {});
function Da() {
  return lt() !== null;
}
function lt() {
  return ue(Ol, null);
}
function xo(e) {
  pe(Ol, e);
}
function el(e, t) {
  if (e)
    return e;
  let o = t ?? "button";
  if (typeof o == "string" && o.toLowerCase() === "button")
    return "button";
}
function wo(e, t) {
  let o = C(el(e.value.type, e.value.as));
  return G(() => {
    o.value = el(e.value.type, e.value.as);
  }), ce(() => {
    var l;
    o.value || M(t) && M(t) instanceof HTMLButtonElement && !((l = M(t)) != null && l.hasAttribute("type")) && (o.value = "button");
  }), o;
}
var Ia = Object.defineProperty, ja = (e, t, o) => t in e ? Ia(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o, tl = (e, t, o) => (ja(e, typeof t != "symbol" ? t + "" : t, o), o);
let Ra = class {
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
}, ht = new Ra();
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
function Fa({ container: e, accept: t, walk: o, enabled: l }) {
  ce(() => {
    let n = e.value;
    if (!n || l !== void 0 && !l.value)
      return;
    let a = ge(e);
    if (!a)
      return;
    let r = Object.assign((p) => t(p), { acceptNode: t }), i = a.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, r, !1);
    for (; i.nextNode(); )
      o(i.currentNode);
  });
}
let oo = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var ne = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(ne || {}), Ze = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Ze || {}), Na = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(Na || {});
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
let Ha = ["textarea", "input"].join(",");
function qa(e) {
  var t, o;
  return (o = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, Ha)) != null ? o : !1;
}
function Tl(e, t = (o) => o) {
  return e.slice().sort((o, l) => {
    let n = t(o), a = t(l);
    if (n === null || a === null)
      return 0;
    let r = n.compareDocumentPosition(a);
    return r & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : r & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function me(e, t, { sorted: o = !0, relativeTo: l = null, skipElements: n = [] } = {}) {
  var a;
  let r = (a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e == null ? void 0 : e.ownerDocument) != null ? a : document, i = Array.isArray(e) ? o ? Tl(e) : e : zt(e);
  n.length > 0 && i.length > 1 && (i = i.filter((b) => !n.includes(b))), l = l ?? r.activeElement;
  let p = (() => {
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
  })(), d = t & 32 ? { preventScroll: !0 } : {}, m = 0, y = i.length, h;
  do {
    if (m >= y || m + y <= 0)
      return 0;
    let b = f + m;
    if (t & 16)
      b = (b + y) % y;
    else {
      if (b < 0)
        return 3;
      if (b >= y)
        return 1;
    }
    h = i[b], h == null || h.focus(d), m += p;
  } while (h !== r.activeElement);
  return t & 6 && qa(h) && h.select(), h.hasAttribute("tabindex") || h.setAttribute("tabindex", "0"), 2;
}
function Xt(e, t, o) {
  ht.isServer || ce((l) => {
    document.addEventListener(e, t, o), l(() => document.removeEventListener(e, t, o));
  });
}
function El(e, t, o = B(() => !0)) {
  function l(a, r) {
    if (!o.value || a.defaultPrevented)
      return;
    let i = r(a);
    if (i === null || !i.getRootNode().contains(i))
      return;
    let p = function f(d) {
      return typeof d == "function" ? f(d()) : Array.isArray(d) || d instanceof Set ? d : [d];
    }(e);
    for (let f of p) {
      if (f === null)
        continue;
      let d = f instanceof HTMLElement ? f : M(f);
      if (d != null && d.contains(i) || a.composed && a.composedPath().includes(d))
        return;
    }
    return !Ll(i, $o.Loose) && i.tabIndex !== -1 && a.preventDefault(), t(a, i);
  }
  let n = C(null);
  Xt("mousedown", (a) => {
    var r, i;
    o.value && (n.value = ((i = (r = a.composedPath) == null ? void 0 : r.call(a)) == null ? void 0 : i[0]) || a.target);
  }, !0), Xt("click", (a) => {
    n.value && (l(a, () => n.value), n.value = null);
  }, !0), Xt("blur", (a) => l(a, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0);
}
var Oe = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Oe || {});
let Ie = L({ name: "Hidden", props: { as: { type: [Object, String], default: "div" }, features: { type: Number, default: 1 } }, setup(e, { slots: t, attrs: o }) {
  return () => {
    let { features: l, ...n } = e, a = { "aria-hidden": (l & 2) === 2 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(l & 4) === 4 && (l & 2) !== 2 && { display: "none" } } };
    return ee({ ourProps: a, theirProps: n, slot: {}, attrs: o, slots: t, name: "Hidden" });
  };
} });
function Bl(e = {}, t = null, o = []) {
  for (let [l, n] of Object.entries(e))
    Ml(o, zl(t, l), n);
  return o;
}
function zl(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Ml(e, t, o) {
  if (Array.isArray(o))
    for (let [l, n] of o.entries())
      Ml(e, zl(t, l.toString()), n);
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
  let l = C(o == null ? void 0 : o.value), n = B(() => e.value !== void 0);
  return [B(() => n.value ? e.value : l.value), function(a) {
    return n.value || (l.value = a), t == null ? void 0 : t(a);
  }];
}
function Wa() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function Ua(e, t, o) {
  ht.isServer || ce((l) => {
    window.addEventListener(e, t, o), l(() => window.removeEventListener(e, t, o));
  });
}
var be = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(be || {});
function Vo() {
  let e = C(0);
  return Ua("keydown", (t) => {
    t.key === "Tab" && (e.value = t.shiftKey ? 1 : 0);
  }), e;
}
function ko(e, t, o, l) {
  ht.isServer || ce((n) => {
    e = e ?? window, e.addEventListener(t, o, l), n(() => e.removeEventListener(t, o, l));
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
let st = Object.assign(L({ name: "FocusTrap", props: { as: { type: [Object, String], default: "div" }, initialFocus: { type: Object, default: null }, features: { type: Number, default: 30 }, containers: { type: [Object, Function], default: C(/* @__PURE__ */ new Set()) } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: l }) {
  let n = C(null);
  l({ el: n, $el: n });
  let a = B(() => ge(n)), r = C(!1);
  G(() => r.value = !0), ae(() => r.value = !1), Za({ ownerDocument: a }, B(() => r.value && Boolean(e.features & 16)));
  let i = Ka({ ownerDocument: a, container: n, initialFocus: B(() => e.initialFocus) }, B(() => r.value && Boolean(e.features & 2)));
  Ya({ ownerDocument: a, container: n, containers: e.containers, previousActiveElement: i }, B(() => r.value && Boolean(e.features & 8)));
  let p = Vo();
  function f(h) {
    let b = M(n);
    b && ((g) => g())(() => {
      ie(p.value, { [be.Forwards]: () => {
        me(b, ne.First, { skipElements: [h.relatedTarget] });
      }, [be.Backwards]: () => {
        me(b, ne.Last, { skipElements: [h.relatedTarget] });
      } });
    });
  }
  let d = C(!1);
  function m(h) {
    h.key === "Tab" && (d.value = !0, requestAnimationFrame(() => {
      d.value = !1;
    }));
  }
  function y(h) {
    if (!r.value)
      return;
    let b = jl(e.containers);
    M(n) instanceof HTMLElement && b.add(M(n));
    let g = h.relatedTarget;
    g instanceof HTMLElement && g.dataset.headlessuiFocusGuard !== "true" && (Fl(b, g) || (d.value ? me(M(n), ie(p.value, { [be.Forwards]: () => ne.Next, [be.Backwards]: () => ne.Previous }) | ne.WrapAround, { relativeTo: h.target }) : h.target instanceof HTMLElement && Ue(h.target)));
  }
  return () => {
    let h = {}, b = { ref: n, onKeydown: m, onFocusout: y }, { features: g, initialFocus: v, containers: $, ..._ } = e;
    return te(I, [Boolean(g & 4) && te(Ie, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: Oe.Focusable }), ee({ ourProps: b, theirProps: { ...t, ..._ }, slot: h, attrs: t, slots: o, name: "FocusTrap" }), Boolean(g & 4) && te(Ie, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: Oe.Focusable })]);
  };
} }), { features: Rl }), qe = [];
if (typeof window < "u" && typeof document < "u") {
  let e = function(t) {
    t.target instanceof HTMLElement && t.target !== document.body && qe[0] !== t.target && (qe.unshift(t.target), qe = qe.filter((o) => o != null && o.isConnected), qe.splice(10));
  };
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
}
function Ga(e) {
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
function Za({ ownerDocument: e }, t) {
  let o = Ga(t);
  G(() => {
    ce(() => {
      var l, n;
      t.value || ((l = e.value) == null ? void 0 : l.activeElement) === ((n = e.value) == null ? void 0 : n.body) && Ue(o());
    }, { flush: "post" });
  }), ae(() => {
    Ue(o());
  });
}
function Ka({ ownerDocument: e, container: t, initialFocus: o }, l) {
  let n = C(null), a = C(!1);
  return G(() => a.value = !0), ae(() => a.value = !1), G(() => {
    Q([t, o, l], (r, i) => {
      if (r.every((f, d) => (i == null ? void 0 : i[d]) === f) || !l.value)
        return;
      let p = M(t);
      p && Il(() => {
        var f, d;
        if (!a.value)
          return;
        let m = M(o), y = (f = e.value) == null ? void 0 : f.activeElement;
        if (m) {
          if (m === y) {
            n.value = y;
            return;
          }
        } else if (p.contains(y)) {
          n.value = y;
          return;
        }
        m ? Ue(m) : me(p, ne.First | ne.NoScroll) === Ze.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), n.value = (d = e.value) == null ? void 0 : d.activeElement;
      });
    }, { immediate: !0, flush: "post" });
  }), n;
}
function Ya({ ownerDocument: e, container: t, containers: o, previousActiveElement: l }, n) {
  var a;
  ko((a = e.value) == null ? void 0 : a.defaultView, "focus", (r) => {
    if (!n.value)
      return;
    let i = jl(o);
    M(t) instanceof HTMLElement && i.add(M(t));
    let p = l.value;
    if (!p)
      return;
    let f = r.target;
    f && f instanceof HTMLElement ? Fl(i, f) ? (l.value = f, Ue(f)) : (r.preventDefault(), r.stopPropagation(), Ue(p)) : Ue(l.value);
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
  ce((o) => {
    var l;
    if (!t.value)
      return;
    let n = M(e);
    if (!n)
      return;
    o(function() {
      var r;
      if (!n)
        return;
      let i = (r = rt.get(n)) != null ? r : 1;
      if (i === 1 ? rt.delete(n) : rt.set(n, i - 1), i !== 1)
        return;
      let p = Qt.get(n);
      p && (p["aria-hidden"] === null ? n.removeAttribute("aria-hidden") : n.setAttribute("aria-hidden", p["aria-hidden"]), n.inert = p.inert, Qt.delete(n));
    });
    let a = (l = rt.get(n)) != null ? l : 0;
    rt.set(n, a + 1), a === 0 && (Qt.set(n, { "aria-hidden": n.getAttribute("aria-hidden"), inert: n.inert }), n.setAttribute("aria-hidden", "true"), n.inert = !0);
  });
}
let Nl = Symbol("ForcePortalRootContext");
function Xa() {
  return ue(Nl, !1);
}
let lo = L({ name: "ForcePortalRoot", props: { as: { type: [Object, String], default: "template" }, force: { type: Boolean, default: !1 } }, setup(e, { slots: t, attrs: o }) {
  return pe(Nl, e.force), () => {
    let { force: l, ...n } = e;
    return ee({ theirProps: n, ourProps: {}, slot: {}, slots: t, attrs: o, name: "ForcePortalRoot" });
  };
} });
function Qa(e) {
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
  let l = C(null), n = B(() => ge(l)), a = Xa(), r = ue(ql, null), i = C(a === !0 || r == null ? Qa(l.value) : r.resolveTarget());
  return ce(() => {
    a || r != null && (i.value = r.resolveTarget());
  }), ae(() => {
    var p, f;
    let d = (p = n.value) == null ? void 0 : p.getElementById("headlessui-portal-root");
    d && i.value === d && i.value.children.length <= 0 && ((f = i.value.parentElement) == null || f.removeChild(i.value));
  }), () => {
    if (i.value === null)
      return null;
    let p = { ref: l, "data-headlessui-portal": "" };
    return te(ft, { to: i.value }, ee({ ourProps: p, theirProps: e, slot: {}, attrs: o, slots: t, name: "Portal" }));
  };
} }), ql = Symbol("PortalGroupContext"), Ja = L({ name: "PortalGroup", props: { as: { type: [Object, String], default: "template" }, target: { type: Object, default: null } }, setup(e, { attrs: t, slots: o }) {
  let l = In({ resolveTarget() {
    return e.target;
  } });
  return pe(ql, l), () => {
    let { target: n, ...a } = e;
    return ee({ theirProps: a, ourProps: {}, slot: {}, attrs: t, slots: o, name: "PortalGroup" });
  };
} }), Wl = Symbol("StackContext");
var no = ((e) => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(no || {});
function es() {
  return ue(Wl, () => {
  });
}
function ts({ type: e, enabled: t, element: o, onUpdate: l }) {
  let n = es();
  function a(...r) {
    l == null || l(...r), n(...r);
  }
  G(() => {
    Q(t, (r, i) => {
      r ? a(0, e, o) : i === !0 && a(1, e, o);
    }, { immediate: !0, flush: "sync" });
  }), ae(() => {
    t.value && a(1, e, o);
  }), pe(Wl, a);
}
let Ul = Symbol("DescriptionContext");
function os() {
  let e = ue(Ul, null);
  if (e === null)
    throw new Error("Missing parent");
  return e;
}
function Mt({ slot: e = C({}), name: t = "Description", props: o = {} } = {}) {
  let l = C([]);
  function n(a) {
    return l.value.push(a), () => {
      let r = l.value.indexOf(a);
      r !== -1 && l.value.splice(r, 1);
    };
  }
  return pe(Ul, { register: n, slot: e, name: t, props: o }), B(() => l.value.length > 0 ? l.value.join(" ") : void 0);
}
let ls = L({ name: "Description", props: { as: { type: [Object, String], default: "p" }, id: { type: String, default: () => `headlessui-description-${se()}` } }, setup(e, { attrs: t, slots: o }) {
  let l = os();
  return G(() => ae(l.register(e.id))), () => {
    let { name: n = "Description", slot: a = C({}), props: r = {} } = l, { id: i, ...p } = e, f = { ...Object.entries(r).reduce((d, [m, y]) => Object.assign(d, { [m]: w(y) }), {}), id: i };
    return ee({ ourProps: f, theirProps: p, slot: a.value, attrs: t, slots: o, name: n });
  };
} });
function ns(e) {
  let t = Vl(e.getSnapshot());
  return ae(e.subscribe(() => {
    t.value = e.getSnapshot();
  })), t;
}
function At() {
  let e = [], t = { addEventListener(o, l, n, a) {
    return o.addEventListener(l, n, a), t.add(() => o.removeEventListener(l, n, a));
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
  }, style(o, l, n) {
    let a = o.style.getPropertyValue(l);
    return Object.assign(o.style, { [l]: n }), this.add(() => {
      Object.assign(o.style, { [l]: a });
    });
  }, group(o) {
    let l = At();
    return o(l), this.add(() => l.dispose());
  }, add(o) {
    return e.push(o), () => {
      let l = e.indexOf(o);
      if (l >= 0)
        for (let n of e.splice(l, 1))
          n();
    };
  }, dispose() {
    for (let o of e.splice(0))
      o();
  } };
  return t;
}
function as(e, t) {
  let o = e(), l = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return o;
  }, subscribe(n) {
    return l.add(n), () => l.delete(n);
  }, dispatch(n, ...a) {
    let r = t[n].call(o, ...a);
    r && (o = r, l.forEach((i) => i()));
  } };
}
function ss() {
  let e;
  return { before({ doc: t }) {
    var o;
    let l = t.documentElement;
    e = ((o = t.defaultView) != null ? o : window).innerWidth - l.clientWidth;
  }, after({ doc: t, d: o }) {
    let l = t.documentElement, n = l.clientWidth - l.offsetWidth, a = e - n;
    o.style(l, "paddingRight", `${a}px`);
  } };
}
function rs() {
  if (!Wa())
    return {};
  let e;
  return { before() {
    e = window.pageYOffset;
  }, after({ doc: t, d: o, meta: l }) {
    function n(r) {
      return l.containers.flatMap((i) => i()).some((i) => i.contains(r));
    }
    o.style(t.body, "marginTop", `-${e}px`), window.scrollTo(0, 0);
    let a = null;
    o.addEventListener(t, "click", (r) => {
      if (r.target instanceof HTMLElement)
        try {
          let i = r.target.closest("a");
          if (!i)
            return;
          let { hash: p } = new URL(i.href), f = t.querySelector(p);
          f && !n(f) && (a = f);
        } catch {
        }
    }, !0), o.addEventListener(t, "touchmove", (r) => {
      r.target instanceof HTMLElement && !n(r.target) && r.preventDefault();
    }, { passive: !1 }), o.add(() => {
      window.scrollTo(0, window.pageYOffset + e), a && a.isConnected && (a.scrollIntoView({ block: "nearest" }), a = null);
    });
  } };
}
function is() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function us(e) {
  let t = {};
  for (let o of e)
    Object.assign(t, o(t));
  return t;
}
let We = as(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var o;
  let l = (o = this.get(e)) != null ? o : { doc: e, count: 0, d: At(), meta: /* @__PURE__ */ new Set() };
  return l.count++, l.meta.add(t), this.set(e, l), this;
}, POP(e, t) {
  let o = this.get(e);
  return o && (o.count--, o.meta.delete(t)), this;
}, SCROLL_PREVENT({ doc: e, d: t, meta: o }) {
  let l = { doc: e, d: t, meta: us(o) }, n = [rs(), ss(), is()];
  n.forEach(({ before: a }) => a == null ? void 0 : a(l)), n.forEach(({ after: a }) => a == null ? void 0 : a(l));
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
    let l = t.get(o.doc) === "hidden", n = o.count !== 0;
    (n && !l || !n && l) && We.dispatch(o.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", o), o.count === 0 && We.dispatch("TEARDOWN", o);
  }
});
function ps(e, t, o) {
  let l = ns(We), n = B(() => {
    let a = e.value ? l.value.get(e.value) : void 0;
    return a ? a.count > 0 : !1;
  });
  return Q([e, t], ([a, r], [i], p) => {
    if (!a || !r)
      return;
    We.dispatch("PUSH", a, o);
    let f = !1;
    p(() => {
      f || (We.dispatch("POP", i ?? a, o), f = !0);
    });
  }, { immediate: !0 }), n;
}
var cs = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(cs || {});
let ao = Symbol("DialogContext");
function mt(e) {
  let t = ue(ao, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, mt), o;
  }
  return t;
}
let kt = "DC8F892D-2EBD-447C-A4C8-A03058436FF4", Dt = L({ name: "Dialog", inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, open: { type: [Boolean, String], default: kt }, initialFocus: { type: Object, default: null }, id: { type: String, default: () => `headlessui-dialog-${se()}` } }, emits: { close: (e) => !0 }, setup(e, { emit: t, attrs: o, slots: l, expose: n }) {
  var a;
  let r = C(!1);
  G(() => {
    r.value = !0;
  });
  let i = C(0), p = lt(), f = B(() => e.open === kt && p !== null ? (p.value & oe.Open) === oe.Open : e.open), d = C(null), m = C(null), y = B(() => ge(d));
  if (n({ el: d, $el: d }), !(e.open !== kt || p !== null))
    throw new Error("You forgot to provide an `open` prop to the `Dialog`.");
  if (typeof f.value != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${f.value === kt ? void 0 : e.open}`);
  let h = B(() => r.value && f.value ? 0 : 1), b = B(() => h.value === 0), g = B(() => i.value > 1), v = ue(ao, null) !== null, $ = B(() => g.value ? "parent" : "leaf"), _ = B(() => p !== null ? (p.value & oe.Closing) === oe.Closing : !1), O = B(() => v || _.value ? !1 : b.value), k = B(() => {
    var q, W, F;
    return (F = Array.from((W = (q = y.value) == null ? void 0 : q.querySelectorAll("body > *")) != null ? W : []).find((X) => X.id === "headlessui-portal-root" ? !1 : X.contains(M(m)) && X instanceof HTMLElement)) != null ? F : null;
  });
  ol(k, O);
  let E = B(() => g.value ? !0 : b.value), T = B(() => {
    var q, W, F;
    return (F = Array.from((W = (q = y.value) == null ? void 0 : q.querySelectorAll("[data-headlessui-portal]")) != null ? W : []).find((X) => X.contains(M(m)) && X instanceof HTMLElement)) != null ? F : null;
  });
  ol(T, E), ts({ type: "Dialog", enabled: B(() => h.value === 0), element: d, onUpdate: (q, W) => {
    if (W === "Dialog")
      return ie(q, { [no.Add]: () => i.value += 1, [no.Remove]: () => i.value -= 1 });
  } });
  let D = Mt({ name: "DialogDescription", slot: B(() => ({ open: f.value })) }), R = C(null), N = { titleId: R, panelRef: C(null), dialogState: h, setTitleId(q) {
    R.value !== q && (R.value = q);
  }, close() {
    t("close", !1);
  } };
  pe(ao, N);
  function A() {
    var q, W, F;
    return [...Array.from((W = (q = y.value) == null ? void 0 : q.querySelectorAll("html > *, body > *, [data-headlessui-portal]")) != null ? W : []).filter((X) => !(X === document.body || X === document.head || !(X instanceof HTMLElement) || X.contains(M(m)) || N.panelRef.value && X.contains(N.panelRef.value))), (F = N.panelRef.value) != null ? F : d.value];
  }
  let Z = B(() => !(!b.value || g.value));
  El(() => A(), (q, W) => {
    N.close(), ho(() => W == null ? void 0 : W.focus());
  }, Z);
  let K = B(() => !(g.value || h.value !== 0));
  ko((a = y.value) == null ? void 0 : a.defaultView, "keydown", (q) => {
    K.value && (q.defaultPrevented || q.key === le.Escape && (q.preventDefault(), q.stopPropagation(), N.close()));
  });
  let H = B(() => !(_.value || h.value !== 0 || v));
  return ps(y, H, (q) => {
    var W;
    return { containers: [...(W = q.containers) != null ? W : [], A] };
  }), ce((q) => {
    if (h.value !== 0)
      return;
    let W = M(d);
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
    let { id: q, open: W, initialFocus: F, ...X } = e, Pe = { ...o, ref: d, id: q, role: "dialog", "aria-modal": h.value === 0 ? !0 : void 0, "aria-labelledby": R.value, "aria-describedby": D.value }, fe = { open: h.value === 0 };
    return te(lo, { force: !0 }, () => [te(Hl, () => te(Ja, { target: d.value }, () => te(lo, { force: !1 }, () => te(st, { initialFocus: F, containers: A, features: b.value ? ie($.value, { parent: st.features.RestoreFocus, leaf: st.features.All & ~st.features.FocusLock }) : st.features.None }, () => ee({ ourProps: Pe, theirProps: X, slot: fe, attrs: o, slots: l, visible: h.value === 0, features: Ce.RenderStrategy | Ce.Static, name: "Dialog" }))))), te(Ie, { features: Oe.Hidden, ref: m })]);
  };
} });
L({ name: "DialogOverlay", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-overlay-${se()}` } }, setup(e, { attrs: t, slots: o }) {
  let l = mt("DialogOverlay");
  function n(a) {
    a.target === a.currentTarget && (a.preventDefault(), a.stopPropagation(), l.close());
  }
  return () => {
    let { id: a, ...r } = e;
    return ee({ ourProps: { id: a, "aria-hidden": !0, onClick: n }, theirProps: r, slot: { open: l.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogOverlay" });
  };
} });
L({ name: "DialogBackdrop", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-backdrop-${se()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: l }) {
  let n = mt("DialogBackdrop"), a = C(null);
  return l({ el: a, $el: a }), G(() => {
    if (n.panelRef.value === null)
      throw new Error("A <DialogBackdrop /> component is being used, but a <DialogPanel /> component is missing.");
  }), () => {
    let { id: r, ...i } = e, p = { id: r, ref: a, "aria-hidden": !0 };
    return te(lo, { force: !0 }, () => te(Hl, () => ee({ ourProps: p, theirProps: { ...t, ...i }, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogBackdrop" })));
  };
} });
let It = L({ name: "DialogPanel", props: { as: { type: [Object, String], default: "div" }, id: { type: String, default: () => `headlessui-dialog-panel-${se()}` } }, setup(e, { attrs: t, slots: o, expose: l }) {
  let n = mt("DialogPanel");
  l({ el: n.panelRef, $el: n.panelRef });
  function a(r) {
    r.stopPropagation();
  }
  return () => {
    let { id: r, ...i } = e, p = { id: r, ref: n.panelRef, onClick: a };
    return ee({ ourProps: p, theirProps: i, slot: { open: n.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogPanel" });
  };
} }), Gl = L({ name: "DialogTitle", props: { as: { type: [Object, String], default: "h2" }, id: { type: String, default: () => `headlessui-dialog-title-${se()}` } }, setup(e, { attrs: t, slots: o }) {
  let l = mt("DialogTitle");
  return G(() => {
    l.setTitleId(e.id), ae(() => l.setTitleId(null));
  }), () => {
    let { id: n, ...a } = e;
    return ee({ ourProps: { id: n }, theirProps: a, slot: { open: l.dialogState.value === 0 }, attrs: t, slots: o, name: "DialogTitle" });
  };
} });
var ds = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(ds || {});
let Zl = Symbol("DisclosureContext");
function _o(e) {
  let t = ue(Zl, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, _o), o;
  }
  return t;
}
let Kl = Symbol("DisclosurePanelContext");
function fs() {
  return ue(Kl, null);
}
let ll = L({ name: "Disclosure", props: { as: { type: [Object, String], default: "template" }, defaultOpen: { type: [Boolean], default: !1 } }, setup(e, { slots: t, attrs: o }) {
  let l = C(e.defaultOpen ? 0 : 1), n = C(null), a = C(null), r = { buttonId: C(null), panelId: C(null), disclosureState: l, panel: n, button: a, toggleDisclosure() {
    l.value = ie(l.value, { [0]: 1, [1]: 0 });
  }, closeDisclosure() {
    l.value !== 1 && (l.value = 1);
  }, close(i) {
    r.closeDisclosure();
    let p = (() => i ? i instanceof HTMLElement ? i : i.value instanceof HTMLElement ? M(i) : M(r.button) : M(r.button))();
    p == null || p.focus();
  } };
  return pe(Zl, r), xo(B(() => ie(l.value, { [0]: oe.Open, [1]: oe.Closed }))), () => {
    let { defaultOpen: i, ...p } = e, f = { open: l.value === 0, close: r.close };
    return ee({ theirProps: p, ourProps: {}, slot: f, slots: t, attrs: o, name: "Disclosure" });
  };
} }), nl = L({ name: "DisclosureButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-disclosure-button-${se()}` } }, setup(e, { attrs: t, slots: o, expose: l }) {
  let n = _o("DisclosureButton");
  G(() => {
    n.buttonId.value = e.id;
  }), ae(() => {
    n.buttonId.value = null;
  });
  let a = fs(), r = B(() => a === null ? !1 : a.value === n.panelId.value), i = C(null);
  l({ el: i, $el: i }), r.value || ce(() => {
    n.button.value = i.value;
  });
  let p = wo(B(() => ({ as: e.as, type: t.type })), i);
  function f() {
    var y;
    e.disabled || (r.value ? (n.toggleDisclosure(), (y = M(n.button)) == null || y.focus()) : n.toggleDisclosure());
  }
  function d(y) {
    var h;
    if (!e.disabled)
      if (r.value)
        switch (y.key) {
          case le.Space:
          case le.Enter:
            y.preventDefault(), y.stopPropagation(), n.toggleDisclosure(), (h = M(n.button)) == null || h.focus();
            break;
        }
      else
        switch (y.key) {
          case le.Space:
          case le.Enter:
            y.preventDefault(), y.stopPropagation(), n.toggleDisclosure();
            break;
        }
  }
  function m(y) {
    switch (y.key) {
      case le.Space:
        y.preventDefault();
        break;
    }
  }
  return () => {
    let y = { open: n.disclosureState.value === 0 }, { id: h, ...b } = e, g = r.value ? { ref: i, type: p.value, onClick: f, onKeydown: d } : { id: h, ref: i, type: p.value, "aria-expanded": e.disabled ? void 0 : n.disclosureState.value === 0, "aria-controls": M(n.panel) ? n.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onClick: f, onKeydown: d, onKeyup: m };
    return ee({ ourProps: g, theirProps: b, slot: y, attrs: t, slots: o, name: "DisclosureButton" });
  };
} }), al = L({ name: "DisclosurePanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, id: { type: String, default: () => `headlessui-disclosure-panel-${se()}` } }, setup(e, { attrs: t, slots: o, expose: l }) {
  let n = _o("DisclosurePanel");
  G(() => {
    n.panelId.value = e.id;
  }), ae(() => {
    n.panelId.value = null;
  }), l({ el: n.panel, $el: n.panel }), pe(Kl, n.panelId);
  let a = lt(), r = B(() => a !== null ? (a.value & oe.Open) === oe.Open : n.disclosureState.value === 0);
  return () => {
    let i = { open: n.disclosureState.value === 0, close: n.close }, { id: p, ...f } = e, d = { id: p, ref: n.panel };
    return ee({ ourProps: d, theirProps: f, slot: i, attrs: t, slots: o, features: Ce.RenderStrategy | Ce.Static, visible: r.value, name: "DisclosurePanel" });
  };
} });
var vs = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(vs || {});
let Yl = Symbol("PopoverContext");
function jt(e) {
  let t = ue(Yl, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <${Rt.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, jt), o;
  }
  return t;
}
let Xl = Symbol("PopoverGroupContext");
function Ql() {
  return ue(Xl, null);
}
let Jl = Symbol("PopoverPanelContext");
function hs() {
  return ue(Jl, null);
}
let Rt = L({ name: "Popover", props: { as: { type: [Object, String], default: "div" } }, setup(e, { slots: t, attrs: o, expose: l }) {
  var n;
  let a = C(null);
  l({ el: a, $el: a });
  let r = C(1), i = C(null), p = C(null), f = C(null), d = C(null), m = B(() => ge(a)), y = B(() => {
    var _, O;
    if (!M(i) || !M(d))
      return !1;
    for (let A of document.querySelectorAll("body > *"))
      if (Number(A == null ? void 0 : A.contains(M(i))) ^ Number(A == null ? void 0 : A.contains(M(d))))
        return !0;
    let k = zt(), E = k.indexOf(M(i)), T = (E + k.length - 1) % k.length, D = (E + 1) % k.length, R = k[T], N = k[D];
    return !((_ = M(d)) != null && _.contains(R)) && !((O = M(d)) != null && O.contains(N));
  }), h = { popoverState: r, buttonId: C(null), panelId: C(null), panel: d, button: i, isPortalled: y, beforePanelSentinel: p, afterPanelSentinel: f, togglePopover() {
    r.value = ie(r.value, { [0]: 1, [1]: 0 });
  }, closePopover() {
    r.value !== 1 && (r.value = 1);
  }, close(_) {
    h.closePopover();
    let O = (() => _ ? _ instanceof HTMLElement ? _ : _.value instanceof HTMLElement ? M(_) : M(h.button) : M(h.button))();
    O == null || O.focus();
  } };
  pe(Yl, h), xo(B(() => ie(r.value, { [0]: oe.Open, [1]: oe.Closed })));
  let b = { buttonId: h.buttonId, panelId: h.panelId, close() {
    h.closePopover();
  } }, g = Ql(), v = g == null ? void 0 : g.registerPopover;
  function $() {
    var _, O, k, E;
    return (E = g == null ? void 0 : g.isFocusWithinPopoverGroup()) != null ? E : ((_ = m.value) == null ? void 0 : _.activeElement) && (((O = M(i)) == null ? void 0 : O.contains(m.value.activeElement)) || ((k = M(d)) == null ? void 0 : k.contains(m.value.activeElement)));
  }
  return ce(() => v == null ? void 0 : v(b)), ko((n = m.value) == null ? void 0 : n.defaultView, "focus", (_) => {
    var O, k;
    r.value === 0 && ($() || i && d && _.target !== window && ((O = M(h.beforePanelSentinel)) != null && O.contains(_.target) || (k = M(h.afterPanelSentinel)) != null && k.contains(_.target) || h.closePopover()));
  }, !0), El([i, d], (_, O) => {
    var k;
    h.closePopover(), Ll(O, $o.Loose) || (_.preventDefault(), (k = M(i)) == null || k.focus());
  }, B(() => r.value === 0)), () => {
    let _ = { open: r.value === 0, close: h.close };
    return ee({ theirProps: e, ourProps: { ref: a }, slot: _, slots: t, attrs: o, name: "Popover" });
  };
} }), Co = L({ name: "PopoverButton", props: { as: { type: [Object, String], default: "button" }, disabled: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-popover-button-${se()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: l }) {
  let n = jt("PopoverButton"), a = B(() => ge(n.button));
  l({ el: n.button, $el: n.button }), G(() => {
    n.buttonId.value = e.id;
  }), ae(() => {
    n.buttonId.value = null;
  });
  let r = Ql(), i = r == null ? void 0 : r.closeOthers, p = hs(), f = B(() => p === null ? !1 : p.value === n.panelId.value), d = C(null), m = `headlessui-focus-sentinel-${se()}`;
  f.value || ce(() => {
    n.button.value = d.value;
  });
  let y = wo(B(() => ({ as: e.as, type: t.type })), d);
  function h($) {
    var _, O, k, E, T;
    if (f.value) {
      if (n.popoverState.value === 1)
        return;
      switch ($.key) {
        case le.Space:
        case le.Enter:
          $.preventDefault(), (O = (_ = $.target).click) == null || O.call(_), n.closePopover(), (k = M(n.button)) == null || k.focus();
          break;
      }
    } else
      switch ($.key) {
        case le.Space:
        case le.Enter:
          $.preventDefault(), $.stopPropagation(), n.popoverState.value === 1 && (i == null || i(n.buttonId.value)), n.togglePopover();
          break;
        case le.Escape:
          if (n.popoverState.value !== 0)
            return i == null ? void 0 : i(n.buttonId.value);
          if (!M(n.button) || (E = a.value) != null && E.activeElement && !((T = M(n.button)) != null && T.contains(a.value.activeElement)))
            return;
          $.preventDefault(), $.stopPropagation(), n.closePopover();
          break;
      }
  }
  function b($) {
    f.value || $.key === le.Space && $.preventDefault();
  }
  function g($) {
    var _, O;
    e.disabled || (f.value ? (n.closePopover(), (_ = M(n.button)) == null || _.focus()) : ($.preventDefault(), $.stopPropagation(), n.popoverState.value === 1 && (i == null || i(n.buttonId.value)), n.togglePopover(), (O = M(n.button)) == null || O.focus()));
  }
  function v($) {
    $.preventDefault(), $.stopPropagation();
  }
  return () => {
    let $ = n.popoverState.value === 0, _ = { open: $ }, { id: O, ...k } = e, E = f.value ? { ref: d, type: y.value, onKeydown: h, onClick: g } : { ref: d, id: O, type: y.value, "aria-expanded": e.disabled ? void 0 : n.popoverState.value === 0, "aria-controls": M(n.panel) ? n.panelId.value : void 0, disabled: e.disabled ? !0 : void 0, onKeydown: h, onKeyup: b, onClick: g, onMousedown: v }, T = Vo();
    function D() {
      let R = M(n.panel);
      if (!R)
        return;
      function N() {
        ie(T.value, { [be.Forwards]: () => me(R, ne.First), [be.Backwards]: () => me(R, ne.Last) }) === Ze.Error && me(zt().filter((A) => A.dataset.headlessuiFocusGuard !== "true"), ie(T.value, { [be.Forwards]: ne.Next, [be.Backwards]: ne.Previous }), { relativeTo: M(n.button) });
      }
      N();
    }
    return te(I, [ee({ ourProps: E, theirProps: { ...t, ...k }, slot: _, attrs: t, slots: o, name: "PopoverButton" }), $ && !f.value && n.isPortalled.value && te(Ie, { id: m, features: Oe.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: D })]);
  };
} });
L({ name: "PopoverOverlay", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 } }, setup(e, { attrs: t, slots: o }) {
  let l = jt("PopoverOverlay"), n = `headlessui-popover-overlay-${se()}`, a = lt(), r = B(() => a !== null ? (a.value & oe.Open) === oe.Open : l.popoverState.value === 0);
  function i() {
    l.closePopover();
  }
  return () => {
    let p = { open: l.popoverState.value === 0 };
    return ee({ ourProps: { id: n, "aria-hidden": !0, onClick: i }, theirProps: e, slot: p, attrs: t, slots: o, features: Ce.RenderStrategy | Ce.Static, visible: r.value, name: "PopoverOverlay" });
  };
} });
let So = L({ name: "PopoverPanel", props: { as: { type: [Object, String], default: "div" }, static: { type: Boolean, default: !1 }, unmount: { type: Boolean, default: !0 }, focus: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-popover-panel-${se()}` } }, inheritAttrs: !1, setup(e, { attrs: t, slots: o, expose: l }) {
  let { focus: n } = e, a = jt("PopoverPanel"), r = B(() => ge(a.panel)), i = `headlessui-focus-sentinel-before-${se()}`, p = `headlessui-focus-sentinel-after-${se()}`;
  l({ el: a.panel, $el: a.panel }), G(() => {
    a.panelId.value = e.id;
  }), ae(() => {
    a.panelId.value = null;
  }), pe(Jl, a.panelId), ce(() => {
    var v, $;
    if (!n || a.popoverState.value !== 0 || !a.panel)
      return;
    let _ = (v = r.value) == null ? void 0 : v.activeElement;
    ($ = M(a.panel)) != null && $.contains(_) || me(M(a.panel), ne.First);
  });
  let f = lt(), d = B(() => f !== null ? (f.value & oe.Open) === oe.Open : a.popoverState.value === 0);
  function m(v) {
    var $, _;
    switch (v.key) {
      case le.Escape:
        if (a.popoverState.value !== 0 || !M(a.panel) || r.value && !(($ = M(a.panel)) != null && $.contains(r.value.activeElement)))
          return;
        v.preventDefault(), v.stopPropagation(), a.closePopover(), (_ = M(a.button)) == null || _.focus();
        break;
    }
  }
  function y(v) {
    var $, _, O, k, E;
    let T = v.relatedTarget;
    T && M(a.panel) && (($ = M(a.panel)) != null && $.contains(T) || (a.closePopover(), ((O = (_ = M(a.beforePanelSentinel)) == null ? void 0 : _.contains) != null && O.call(_, T) || (E = (k = M(a.afterPanelSentinel)) == null ? void 0 : k.contains) != null && E.call(k, T)) && T.focus({ preventScroll: !0 })));
  }
  let h = Vo();
  function b() {
    let v = M(a.panel);
    if (!v)
      return;
    function $() {
      ie(h.value, { [be.Forwards]: () => {
        var _;
        me(v, ne.First) === Ze.Error && ((_ = M(a.afterPanelSentinel)) == null || _.focus());
      }, [be.Backwards]: () => {
        var _;
        (_ = M(a.button)) == null || _.focus({ preventScroll: !0 });
      } });
    }
    $();
  }
  function g() {
    let v = M(a.panel);
    if (!v)
      return;
    function $() {
      ie(h.value, { [be.Forwards]: () => {
        let _ = M(a.button), O = M(a.panel);
        if (!_)
          return;
        let k = zt(), E = k.indexOf(_), T = k.slice(0, E + 1), D = [...k.slice(E + 1), ...T];
        for (let R of D.slice())
          if (R.dataset.headlessuiFocusGuard === "true" || O != null && O.contains(R)) {
            let N = D.indexOf(R);
            N !== -1 && D.splice(N, 1);
          }
        me(D, ne.First, { sorted: !1 });
      }, [be.Backwards]: () => {
        var _;
        me(v, ne.Previous) === Ze.Error && ((_ = M(a.button)) == null || _.focus());
      } });
    }
    $();
  }
  return () => {
    let v = { open: a.popoverState.value === 0, close: a.close }, { id: $, focus: _, ...O } = e, k = { ref: a.panel, id: $, onKeydown: m, onFocusout: n && a.popoverState.value === 0 ? y : void 0, tabIndex: -1 };
    return ee({ ourProps: k, theirProps: { ...t, ...O }, attrs: t, slot: v, slots: { ...o, default: (...E) => {
      var T;
      return [te(I, [d.value && a.isPortalled.value && te(Ie, { id: i, ref: a.beforePanelSentinel, features: Oe.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: b }), (T = o.default) == null ? void 0 : T.call(o, ...E), d.value && a.isPortalled.value && te(Ie, { id: p, ref: a.afterPanelSentinel, features: Oe.Focusable, "data-headlessui-focus-guard": !0, as: "button", type: "button", onFocus: g })])];
    } }, features: Ce.RenderStrategy | Ce.Static, visible: d.value, name: "PopoverPanel" });
  };
} });
L({ name: "PopoverGroup", props: { as: { type: [Object, String], default: "div" } }, setup(e, { attrs: t, slots: o, expose: l }) {
  let n = C(null), a = Vl([]), r = B(() => ge(n));
  l({ el: n, $el: n });
  function i(m) {
    let y = a.value.indexOf(m);
    y !== -1 && a.value.splice(y, 1);
  }
  function p(m) {
    return a.value.push(m), () => {
      i(m);
    };
  }
  function f() {
    var m;
    let y = r.value;
    if (!y)
      return !1;
    let h = y.activeElement;
    return (m = M(n)) != null && m.contains(h) ? !0 : a.value.some((b) => {
      var g, v;
      return ((g = y.getElementById(b.buttonId.value)) == null ? void 0 : g.contains(h)) || ((v = y.getElementById(b.panelId.value)) == null ? void 0 : v.contains(h));
    });
  }
  function d(m) {
    for (let y of a.value)
      y.buttonId.value !== m && y.close();
  }
  return pe(Xl, { registerPopover: p, unregisterPopover: i, isFocusWithinPopoverGroup: f, closeOthers: d }), () => ee({ ourProps: { ref: n }, theirProps: e, slot: {}, attrs: t, slots: o, name: "PopoverGroup" });
} });
let en = Symbol("LabelContext");
function tn() {
  let e = ue(en, null);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, tn), t;
  }
  return e;
}
function Po({ slot: e = {}, name: t = "Label", props: o = {} } = {}) {
  let l = C([]);
  function n(a) {
    return l.value.push(a), () => {
      let r = l.value.indexOf(a);
      r !== -1 && l.value.splice(r, 1);
    };
  }
  return pe(en, { register: n, slot: e, name: t, props: o }), B(() => l.value.length > 0 ? l.value.join(" ") : void 0);
}
let on = L({ name: "Label", props: { as: { type: [Object, String], default: "label" }, passive: { type: [Boolean], default: !1 }, id: { type: String, default: () => `headlessui-label-${se()}` } }, setup(e, { slots: t, attrs: o }) {
  let l = tn();
  return G(() => ae(l.register(e.id))), () => {
    let { name: n = "Label", slot: a = {}, props: r = {} } = l, { id: i, passive: p, ...f } = e, d = { ...Object.entries(r).reduce((m, [y, h]) => Object.assign(m, { [y]: w(h) }), {}), id: i };
    return p && (delete d.onClick, delete d.htmlFor, delete f.onClick), ee({ ourProps: d, theirProps: f, slot: a, attrs: o, slots: t, name: n });
  };
} });
function ms(e, t) {
  return e === t;
}
let ln = Symbol("RadioGroupContext");
function nn(e) {
  let t = ue(ln, null);
  if (t === null) {
    let o = new Error(`<${e} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, nn), o;
  }
  return t;
}
let bs = L({ name: "RadioGroup", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "div" }, disabled: { type: [Boolean], default: !1 }, by: { type: [String, Function], default: () => ms }, modelValue: { type: [Object, String, Number, Boolean], default: void 0 }, defaultValue: { type: [Object, String, Number, Boolean], default: void 0 }, name: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-radiogroup-${se()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: o, slots: l, expose: n }) {
  let a = C(null), r = C([]), i = Po({ name: "RadioGroupLabel" }), p = Mt({ name: "RadioGroupDescription" });
  n({ el: a, $el: a });
  let [f, d] = Dl(B(() => e.modelValue), (b) => t("update:modelValue", b), B(() => e.defaultValue)), m = { options: r, value: f, disabled: B(() => e.disabled), firstOption: B(() => r.value.find((b) => !b.propsRef.disabled)), containsCheckedOption: B(() => r.value.some((b) => m.compare(ze(b.propsRef.value), ze(e.modelValue)))), compare(b, g) {
    if (typeof e.by == "string") {
      let v = e.by;
      return (b == null ? void 0 : b[v]) === (g == null ? void 0 : g[v]);
    }
    return e.by(b, g);
  }, change(b) {
    var g;
    if (e.disabled || m.compare(ze(f.value), ze(b)))
      return !1;
    let v = (g = r.value.find(($) => m.compare(ze($.propsRef.value), ze(b)))) == null ? void 0 : g.propsRef;
    return v != null && v.disabled ? !1 : (d(b), !0);
  }, registerOption(b) {
    r.value.push(b), r.value = Tl(r.value, (g) => g.element);
  }, unregisterOption(b) {
    let g = r.value.findIndex((v) => v.id === b);
    g !== -1 && r.value.splice(g, 1);
  } };
  pe(ln, m), Fa({ container: B(() => M(a)), accept(b) {
    return b.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : b.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(b) {
    b.setAttribute("role", "none");
  } });
  function y(b) {
    if (!a.value || !a.value.contains(b.target))
      return;
    let g = r.value.filter((v) => v.propsRef.disabled === !1).map((v) => v.element);
    switch (b.key) {
      case le.Enter:
        Al(b.currentTarget);
        break;
      case le.ArrowLeft:
      case le.ArrowUp:
        if (b.preventDefault(), b.stopPropagation(), me(g, ne.Previous | ne.WrapAround) === Ze.Success) {
          let v = r.value.find(($) => {
            var _;
            return $.element === ((_ = ge(a)) == null ? void 0 : _.activeElement);
          });
          v && m.change(v.propsRef.value);
        }
        break;
      case le.ArrowRight:
      case le.ArrowDown:
        if (b.preventDefault(), b.stopPropagation(), me(g, ne.Next | ne.WrapAround) === Ze.Success) {
          let v = r.value.find(($) => {
            var _;
            return $.element === ((_ = ge($.element)) == null ? void 0 : _.activeElement);
          });
          v && m.change(v.propsRef.value);
        }
        break;
      case le.Space:
        {
          b.preventDefault(), b.stopPropagation();
          let v = r.value.find(($) => {
            var _;
            return $.element === ((_ = ge($.element)) == null ? void 0 : _.activeElement);
          });
          v && m.change(v.propsRef.value);
        }
        break;
    }
  }
  let h = B(() => {
    var b;
    return (b = M(a)) == null ? void 0 : b.closest("form");
  });
  return G(() => {
    Q([h], () => {
      if (!h.value || e.defaultValue === void 0)
        return;
      function b() {
        m.change(e.defaultValue);
      }
      return h.value.addEventListener("reset", b), () => {
        var g;
        (g = h.value) == null || g.removeEventListener("reset", b);
      };
    }, { immediate: !0 });
  }), () => {
    let { disabled: b, name: g, id: v, ...$ } = e, _ = { ref: a, id: v, role: "radiogroup", "aria-labelledby": i.value, "aria-describedby": p.value, onKeydown: y };
    return te(I, [...g != null && f.value != null ? Bl({ [g]: f.value }).map(([O, k]) => te(Ie, Pl({ features: Oe.Hidden, key: O, as: "input", type: "hidden", hidden: !0, readOnly: !0, name: O, value: k }))) : [], ee({ ourProps: _, theirProps: { ...o, ...Bt($, ["modelValue", "defaultValue"]) }, slot: {}, attrs: o, slots: l, name: "RadioGroup" })]);
  };
} });
var gs = ((e) => (e[e.Empty = 1] = "Empty", e[e.Active = 2] = "Active", e))(gs || {});
let ys = L({ name: "RadioGroupOption", props: { as: { type: [Object, String], default: "div" }, value: { type: [Object, String, Number, Boolean] }, disabled: { type: Boolean, default: !1 }, id: { type: String, default: () => `headlessui-radiogroup-option-${se()}` } }, setup(e, { attrs: t, slots: o, expose: l }) {
  let n = nn("RadioGroupOption"), a = Po({ name: "RadioGroupLabel" }), r = Mt({ name: "RadioGroupDescription" }), i = C(null), p = B(() => ({ value: e.value, disabled: e.disabled })), f = C(1);
  l({ el: i, $el: i }), G(() => n.registerOption({ id: e.id, element: i, propsRef: p })), ae(() => n.unregisterOption(e.id));
  let d = B(() => {
    var $;
    return (($ = n.firstOption.value) == null ? void 0 : $.id) === e.id;
  }), m = B(() => n.disabled.value || e.disabled), y = B(() => n.compare(ze(n.value.value), ze(e.value))), h = B(() => m.value ? -1 : y.value || !n.containsCheckedOption.value && d.value ? 0 : -1);
  function b() {
    var $;
    n.change(e.value) && (f.value |= 2, ($ = i.value) == null || $.focus());
  }
  function g() {
    f.value |= 2;
  }
  function v() {
    f.value &= -3;
  }
  return () => {
    let { id: $, value: _, disabled: O, ...k } = e, E = { checked: y.value, disabled: m.value, active: Boolean(f.value & 2) }, T = { id: $, ref: i, role: "radio", "aria-checked": y.value ? "true" : "false", "aria-labelledby": a.value, "aria-describedby": r.value, "aria-disabled": m.value ? !0 : void 0, tabIndex: h.value, onClick: m.value ? void 0 : b, onFocus: m.value ? void 0 : g, onBlur: m.value ? void 0 : v };
    return ee({ ourProps: T, theirProps: k, slot: E, attrs: t, slots: o, name: "RadioGroupOption" });
  };
} }), sl = on, xs = ls, an = Symbol("GroupContext"), ws = L({ name: "SwitchGroup", props: { as: { type: [Object, String], default: "template" } }, setup(e, { slots: t, attrs: o }) {
  let l = C(null), n = Po({ name: "SwitchLabel", props: { htmlFor: B(() => {
    var r;
    return (r = l.value) == null ? void 0 : r.id;
  }), onClick(r) {
    l.value && (r.currentTarget.tagName === "LABEL" && r.preventDefault(), l.value.click(), l.value.focus({ preventScroll: !0 }));
  } } }), a = Mt({ name: "SwitchDescription" });
  return pe(an, { switchRef: l, labelledby: n, describedby: a }), () => ee({ theirProps: e, ourProps: {}, slot: {}, slots: t, attrs: o, name: "SwitchGroup" });
} }), $s = L({ name: "Switch", emits: { "update:modelValue": (e) => !0 }, props: { as: { type: [Object, String], default: "button" }, modelValue: { type: Boolean, default: void 0 }, defaultChecked: { type: Boolean, optional: !0 }, name: { type: String, optional: !0 }, value: { type: String, optional: !0 }, id: { type: String, default: () => `headlessui-switch-${se()}` } }, inheritAttrs: !1, setup(e, { emit: t, attrs: o, slots: l, expose: n }) {
  let a = ue(an, null), [r, i] = Dl(B(() => e.modelValue), (v) => t("update:modelValue", v), B(() => e.defaultChecked));
  function p() {
    i(!r.value);
  }
  let f = C(null), d = a === null ? f : a.switchRef, m = wo(B(() => ({ as: e.as, type: o.type })), d);
  n({ el: d, $el: d });
  function y(v) {
    v.preventDefault(), p();
  }
  function h(v) {
    v.key === le.Space ? (v.preventDefault(), p()) : v.key === le.Enter && Al(v.currentTarget);
  }
  function b(v) {
    v.preventDefault();
  }
  let g = B(() => {
    var v, $;
    return ($ = (v = M(d)) == null ? void 0 : v.closest) == null ? void 0 : $.call(v, "form");
  });
  return G(() => {
    Q([g], () => {
      if (!g.value || e.defaultChecked === void 0)
        return;
      function v() {
        i(e.defaultChecked);
      }
      return g.value.addEventListener("reset", v), () => {
        var $;
        ($ = g.value) == null || $.removeEventListener("reset", v);
      };
    }, { immediate: !0 });
  }), () => {
    let { id: v, name: $, value: _, ...O } = e, k = { checked: r.value }, E = { id: v, ref: d, role: "switch", type: m.value, tabIndex: 0, "aria-checked": r.value, "aria-labelledby": a == null ? void 0 : a.labelledby.value, "aria-describedby": a == null ? void 0 : a.describedby.value, onClick: y, onKeyup: h, onKeypress: b };
    return te(I, [$ != null && r.value != null ? te(Ie, Pl({ features: Oe.Hidden, as: "input", type: "checkbox", hidden: !0, readOnly: !0, checked: r.value, name: $, value: _ })) : null, ee({ ourProps: E, theirProps: { ...o, ...Bt(O, ["modelValue", "defaultChecked"]) }, slot: k, attrs: o, slots: l, name: "Switch" })]);
  };
} }), Vs = on;
function ks(e) {
  let t = { called: !1 };
  return (...o) => {
    if (!t.called)
      return t.called = !0, e(...o);
  };
}
function Jt(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function _t(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
var so = ((e) => (e.Finished = "finished", e.Cancelled = "cancelled", e))(so || {});
function _s(e, t) {
  let o = At();
  if (!e)
    return o.dispose;
  let { transitionDuration: l, transitionDelay: n } = getComputedStyle(e), [a, r] = [l, n].map((i) => {
    let [p = 0] = i.split(",").filter(Boolean).map((f) => f.includes("ms") ? parseFloat(f) : parseFloat(f) * 1e3).sort((f, d) => d - f);
    return p;
  });
  return a !== 0 ? o.setTimeout(() => t("finished"), a + r) : t("finished"), o.add(() => t("cancelled")), o.dispose;
}
function rl(e, t, o, l, n, a) {
  let r = At(), i = a !== void 0 ? ks(a) : () => {
  };
  return _t(e, ...n), Jt(e, ...t, ...o), r.nextFrame(() => {
    _t(e, ...o), Jt(e, ...l), r.add(_s(e, (p) => (_t(e, ...l, ...t), Jt(e, ...n), i(p))));
  }), r.add(() => _t(e, ...t, ...o, ...l, ...n)), r.add(() => i("cancelled")), r.dispose;
}
function He(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Oo = Symbol("TransitionContext");
var Cs = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Cs || {});
function Ss() {
  return ue(Oo, null) !== null;
}
function Ps() {
  let e = ue(Oo, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
function Os() {
  let e = ue(Lo, null);
  if (e === null)
    throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");
  return e;
}
let Lo = Symbol("NestingContext");
function Ft(e) {
  return "children" in e ? Ft(e.children) : e.value.filter(({ state: t }) => t === "visible").length > 0;
}
function sn(e) {
  let t = C([]), o = C(!1);
  G(() => o.value = !0), ae(() => o.value = !1);
  function l(a, r = Me.Hidden) {
    let i = t.value.findIndex(({ id: p }) => p === a);
    i !== -1 && (ie(r, { [Me.Unmount]() {
      t.value.splice(i, 1);
    }, [Me.Hidden]() {
      t.value[i].state = "hidden";
    } }), !Ft(t) && o.value && (e == null || e()));
  }
  function n(a) {
    let r = t.value.find(({ id: i }) => i === a);
    return r ? r.state !== "visible" && (r.state = "visible") : t.value.push({ id: a, state: "visible" }), () => l(a, Me.Unmount);
  }
  return { children: t, register: n, unregister: l };
}
let rn = Ce.RenderStrategy, je = L({ props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: o, slots: l, expose: n }) {
  let a = C(0);
  function r() {
    a.value |= oe.Opening, t("beforeEnter");
  }
  function i() {
    a.value &= ~oe.Opening, t("afterEnter");
  }
  function p() {
    a.value |= oe.Closing, t("beforeLeave");
  }
  function f() {
    a.value &= ~oe.Closing, t("afterLeave");
  }
  if (!Ss() && Da())
    return () => te(bt, { ...e, onBeforeEnter: r, onAfterEnter: i, onBeforeLeave: p, onAfterLeave: f }, l);
  let d = C(null), m = C("visible"), y = B(() => e.unmount ? Me.Unmount : Me.Hidden);
  n({ el: d, $el: d });
  let { show: h, appear: b } = Ps(), { register: g, unregister: v } = Os(), $ = { value: !0 }, _ = se(), O = { value: !1 }, k = sn(() => {
    !O.value && m.value !== "hidden" && (m.value = "hidden", v(_), f());
  });
  G(() => {
    let H = g(_);
    ae(H);
  }), ce(() => {
    if (y.value === Me.Hidden && _) {
      if (h && m.value !== "visible") {
        m.value = "visible";
        return;
      }
      ie(m.value, { hidden: () => v(_), visible: () => g(_) });
    }
  });
  let E = He(e.enter), T = He(e.enterFrom), D = He(e.enterTo), R = He(e.entered), N = He(e.leave), A = He(e.leaveFrom), Z = He(e.leaveTo);
  G(() => {
    ce(() => {
      if (m.value === "visible") {
        let H = M(d);
        if (H instanceof Comment && H.data === "")
          throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
      }
    });
  });
  function K(H) {
    let q = $.value && !b.value, W = M(d);
    !W || !(W instanceof HTMLElement) || q || (O.value = !0, h.value && r(), h.value || p(), H(h.value ? rl(W, E, T, D, R, (F) => {
      O.value = !1, F === so.Finished && i();
    }) : rl(W, N, A, Z, R, (F) => {
      O.value = !1, F === so.Finished && (Ft(k) || (m.value = "hidden", v(_), f()));
    })));
  }
  return G(() => {
    Q([h], (H, q, W) => {
      K(W), $.value = !1;
    }, { immediate: !0 });
  }), pe(Lo, k), xo(B(() => ie(m.value, { visible: oe.Open, hidden: oe.Closed }) | a.value)), () => {
    let { appear: H, show: q, enter: W, enterFrom: F, enterTo: X, entered: Pe, leave: fe, leaveFrom: nt, leaveTo: wt, ...Te } = e, Ye = { ref: d }, Ee = { ...Te, ...b && h && ht.isServer ? { class: P([o.class, Te.class, ...E, ...T]) } : {} };
    return ee({ theirProps: Ee, ourProps: Ye, slot: {}, slots: l, attrs: o, features: rn, visible: m.value === "visible", name: "TransitionChild" });
  };
} }), Ls = je, bt = L({ inheritAttrs: !1, props: { as: { type: [Object, String], default: "div" }, show: { type: [Boolean], default: null }, unmount: { type: [Boolean], default: !0 }, appear: { type: [Boolean], default: !1 }, enter: { type: [String], default: "" }, enterFrom: { type: [String], default: "" }, enterTo: { type: [String], default: "" }, entered: { type: [String], default: "" }, leave: { type: [String], default: "" }, leaveFrom: { type: [String], default: "" }, leaveTo: { type: [String], default: "" } }, emits: { beforeEnter: () => !0, afterEnter: () => !0, beforeLeave: () => !0, afterLeave: () => !0 }, setup(e, { emit: t, attrs: o, slots: l }) {
  let n = lt(), a = B(() => e.show === null && n !== null ? (n.value & oe.Open) === oe.Open : e.show);
  ce(() => {
    if (![!0, !1].includes(a.value))
      throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.');
  });
  let r = C(a.value ? "visible" : "hidden"), i = sn(() => {
    r.value = "hidden";
  }), p = C(!0), f = { show: a, appear: B(() => e.appear || !p.value) };
  return G(() => {
    ce(() => {
      p.value = !1, a.value ? r.value = "visible" : Ft(i) || (r.value = "hidden");
    });
  }), pe(Lo, i), pe(Oo, f), () => {
    let d = Bt(e, ["show", "appear", "unmount", "onBeforeEnter", "onBeforeLeave", "onAfterEnter", "onAfterLeave"]), m = { unmount: e.unmount };
    return ee({ ourProps: { ...m, as: "template" }, theirProps: {}, slot: {}, slots: { ...l, default: () => [te(Ls, { onBeforeEnter: () => t("beforeEnter"), onAfterEnter: () => t("afterEnter"), onBeforeLeave: () => t("beforeLeave"), onAfterLeave: () => t("afterLeave"), ...o, ...m, ...d }, l.default)] }, attrs: {}, features: rn, visible: r.value === "visible", name: "Transition" });
  };
} });
const Ts = {
  key: 0,
  class: "po-text-sm po-font-normal po-text-slate-400 po-select-none po-block po-text-left po-pt-5"
}, Es = { class: "po-grid po-grid-cols-3" }, Bs = { class: "po-bg-white hover:po-bg-slate-200 po-rounded-xl po-p-2 po-transition-colors po-duration-150 po-ease-in" }, zs = ["href", "target"], Ms = { class: "po-flex po-w-14 po-h-14 po-items-center po-justify-center po-duration-100 po-ease-in-out po-overflow-hidden" }, As = ["innerHTML"], Ds = { class: "po-text-slate-500 po-font-normal po-text-sm po-text-center" }, il = /* @__PURE__ */ L({
  __name: "appList",
  props: {
    list: { default: () => [] },
    openInNewTab: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, o) => (u(!0), c(I, null, U(e.list, (l) => (u(), c("div", null, [
      l.groupName.length > 0 ? (u(), c("span", Ts, V(l.groupName), 1)) : x("", !0),
      s("ul", Es, [
        (u(!0), c(I, null, U(l.apps, (n) => (u(), c("li", Bs, [
          s("a", {
            href: n.url,
            target: e.openInNewTab ? "_blank" : "_self",
            class: "po-flex po-flex-col po-group po-justify-center po-items-center"
          }, [
            s("span", Ms, [
              s("span", {
                class: "po-w-9",
                innerHTML: n.icon
              }, null, 8, As)
            ]),
            s("span", Ds, V(n.name), 1)
          ], 8, zs)
        ]))), 256))
      ])
    ]))), 256));
  }
}), Is = {
  name: "PoAppTray"
}, js = /* @__PURE__ */ L({
  ...Is,
  props: {
    appList: { default: null },
    justApps: { type: Boolean, default: !1 },
    openInNewTab: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, o = ["", "Internal"], l = B(() => {
      const n = [];
      return t.appList && o.forEach((a) => {
        const r = t.appList.filter((i) => i.group === a);
        r.length > 0 && n.push({
          groupName: a,
          apps: r
        });
      }), n;
    });
    return (n, a) => e.justApps ? (u(), j(il, {
      key: 1,
      list: w(l),
      "open-in-new-tab": e.openInNewTab
    }, null, 8, ["list", "open-in-new-tab"])) : (u(), j(w(Rt), { key: 0 }, {
      default: z(({ open: r }) => [
        S(w(Co), {
          class: P([r ? "" : "po-text-opacity-90", "po-block po-w-6 po-text-slate-100 genie-effect po-z-50 po-outline-none"])
        }, {
          default: z(() => [
            S(w(ca))
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
            S(w(So), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
              default: z(() => [
                S(il, {
                  list: w(l),
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
}), Rs = {
  key: 0,
  class: "po-absolute po-right-0 po-w-3 po-h-3 po-bg-mpao-orange po-rounded-full po-border-2 po-border-mpao-blue"
}, Fs = {
  key: 0,
  class: "po-space-y-2"
}, Ns = ["onClick"], Hs = { class: "po-flex po-items-center po-justify-between" }, qs = { class: "po-text-sm po-text-left po-font-semibold po-text-slate-700 po-grow po-flex po-space-x-2 po-items-center" }, Ws = { class: "po-grow" }, Us = {
  key: 0,
  class: "po-w-[6px] po-h-[6px] po-rounded-full po-shrink-0 po-bg-mpao-orange po-animate-pulse"
}, Gs = { class: "po-text-xs po-font-normal po-text-slate-400 po-shrink-0" }, Zs = { class: "po-block po-text-sm po-text-slate-500 po-pb-3 po-text-left" }, Ks = {
  key: 1,
  class: "po-text-sm po-text-slate-500 po-py-10 po-text-center po-block"
}, Ys = {
  name: "PoNotificationHub"
}, Xs = /* @__PURE__ */ L({
  ...Ys,
  props: {
    notifications: { default: null },
    hasNewNotifications: { type: Boolean, default: !1 }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, l) => (u(), j(w(Rt), null, {
      default: z(({ open: n }) => [
        S(w(Co), {
          class: P([n ? "" : "text-opacity-90", "po-block po-w-6 po-text-slate-100 genie-effect po-relative po-z-50 po-outline-none"])
        }, {
          default: z(() => [
            e.hasNewNotifications ? (u(), c("span", Rs)) : x("", !0),
            S(w(ea), { class: "po-stroke-current" })
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
            S(w(So), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
              default: z(() => [
                e.notifications !== null && e.notifications.length > 0 ? (u(), c("ul", Fs, [
                  (u(!0), c(I, null, U(e.notifications, (a) => (u(), c("li", {
                    role: "button",
                    class: "po-space-y-2 po-p-2 po-rounded-lg po-bg-white hover:po-bg-slate-100 po-border po-border-slate-100",
                    onClick: re((r) => o.$emit("button-click", a.name), ["prevent"])
                  }, [
                    s("span", Hs, [
                      s("p", qs, [
                        s("span", Ws, V(a.name), 1),
                        a.seen ? x("", !0) : (u(), c("span", Us))
                      ]),
                      s("span", Gs, V(a.time), 1)
                    ]),
                    s("span", Zs, V(a.text), 1)
                  ], 8, Ns))), 256))
                ])) : (u(), c("span", Ks, " No notifications to show at the moment. We'll keep you informed."))
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
}), Qs = {
  key: 0,
  class: "po-hidden lg:po-block po-text-sky-50 po-text-sm po-shrink-0 po-pr-3 po-truncate po-max-w-[140px] po-overflow-hidden"
}, Js = {
  key: 1,
  class: "po-px-3 po-bg-gradient-to-br po-from-slate-50 po-to-blue-100 po-py-1 po-rounded-l-md po-w-[100px] po-flex po-items-center po-justify-center po-text-center"
}, er = ["src"], tr = ["src", "alt"], or = {
  key: 1,
  class: "po-text-xs po-text-white po-font-semibold"
}, lr = { class: "po-pb-5" }, nr = ["src"], ar = {
  key: 2,
  class: "po-block po-text-sm po-text-slate-400 po-italic"
}, sr = { key: 0 }, rr = { key: 1 }, ir = /* @__PURE__ */ s("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), ur = { class: "po-space-y-2 po-py-2 po-max-h-[250px] po-overflow-y-auto" }, pr = ["onClick"], cr = { class: "po-w-5" }, dr = { class: "" }, fr = { class: "po-block po-text-sm po-font-normal" }, vr = {
  key: 0,
  class: "po-text-left po-block po-text-xs po-text-slate-400"
}, hr = /* @__PURE__ */ s("div", { class: "po-h-[2px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), mr = { class: "md:po-grid po-grid-cols-2 po-space-x-1 po-pt-2" }, br = { class: "po-w-5" }, gr = /* @__PURE__ */ s("span", { class: "po-text-sm po-font-normal" }, "Profile", -1), yr = { class: "po-w-5" }, xr = /* @__PURE__ */ s("span", { class: "po-text-sm po-font-normal" }, "Logout", -1), wr = /* @__PURE__ */ s("div", { class: "po-text-xs po-space-x-3 po-text-center po-pt-3" }, [
  /* @__PURE__ */ s("a", {
    href: "",
    class: "po-text-slate-500 hover:po-text-mpao-lightblue"
  }, "Privacy Policy"),
  /* @__PURE__ */ s("a", {
    href: "",
    class: "po-text-slate-500 hover:po-text-mpao-lightblue"
  }, "Terms of Service")
], -1), $r = {
  name: "PoProfileSwitcher"
}, Vr = /* @__PURE__ */ L({
  ...$r,
  props: {
    userObject: { default: null },
    avatar: { default: "" },
    logo: { default: "" }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    const o = e;
    function l(m) {
      t("button-click", m);
    }
    const n = C({
      name: "",
      initials: "",
      image: ""
    });
    function a(m) {
      var y, h;
      return m ? ((h = (y = m.match(/\b[A-Z]/g)) == null ? void 0 : y.join("")) == null ? void 0 : h.substring(0, 2)) ?? "" : "";
    }
    const r = B(() => {
      var g, v, $, _, O, k, E, T, D, R;
      const m = [], y = (g = o.userObject) == null ? void 0 : g.transacting_as_organisation, h = (y == null ? void 0 : y.name) || ((v = o.userObject) == null ? void 0 : v.name), b = (y == null ? void 0 : y.logo) || (($ = o.userObject) == null ? void 0 : $.avatar);
      return n.value = {
        name: h,
        initials: a(h),
        image: b
      }, m.push({
        id: (_ = o.userObject) == null ? void 0 : _.id,
        entity_id: (O = o.userObject) == null ? void 0 : O.entity_id,
        name: (k = o.userObject) == null ? void 0 : k.name,
        identifier: null,
        organisation_uuid: null
      }), ((T = (E = o.userObject) == null ? void 0 : E.organisations) == null ? void 0 : T.length) > 0 && m.push(...(D = o.userObject) == null ? void 0 : D.organisations), m.forEach((N) => {
        N.current = y && Object.keys(y).length > 0 && N.entity_id === y.entity_id;
      }), ((R = o.userObject) == null ? void 0 : R.transacting_as_organisation) === null && (m[0].current = !0), m;
    }), i = C(null), p = C(null), { avatar: f, logo: d } = xe(o);
    return Q(f, () => {
      i.value = f.value;
    }), Q(d, () => {
      p.value = d.value;
    }), jn(() => {
      r.value;
    }), G(() => {
      r.value;
    }), Rn(() => {
      r.value;
    }), mo(() => {
      r.value;
    }), (m, y) => (u(), j(w(Rt), null, {
      default: z(({ open: h }) => [
        s("div", null, [
          S(w(Co), { class: "po-flex po-items-center po-outline-none" }, {
            default: z(() => [
              p.value ? x("", !0) : (u(), c("span", Qs, V(n.value.name), 1)),
              p.value ? (u(), c("span", Js, [
                s("img", {
                  class: "po-h-8",
                  src: p.value,
                  alt: ""
                }, null, 8, er)
              ])) : x("", !0),
              s("div", {
                class: P([
                  {
                    "po-bg-gradient-to-br po-from-slate-50 po-to-blue-100 po-p-1 po-rounded-r-md": p.value
                  }
                ])
              }, [
                s("div", {
                  class: P([[
                    { "text-opacity-90": h },
                    {
                      "po-w-10 po-h-10": !p.value
                    },
                    { "po-w-8 po-h-8": p.value }
                  ], "po-shrink-0 po-select-none po-rounded-full po-bg-[#2e5266] po-flex po-items-center po-justify-center genie-effect po-z-50"])
                }, [
                  i.value ? (u(), c("img", {
                    key: 0,
                    class: "po-rounded-full po-border po-border-white",
                    src: i.value,
                    alt: n.value.name
                  }, null, 8, tr)) : (u(), c("span", or, V(n.value.initials), 1))
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
              S(w(So), { class: "po-z-10 po-absolute po-right-0 po-top-[3.6rem] po-opacity-0 po-bg-white po-shadow-lg po-rounded-xl po-w-[366px] po-p-4 po-border po-border-slate-300 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-auto po-text-center" }, {
                default: z(() => {
                  var b, g, v, $;
                  return [
                    s("div", lr, [
                      i.value ? (u(), c("img", {
                        key: 0,
                        class: "po-w-20 po-h-20 po-mx-auto po-rounded-full po-overflow-hidden",
                        src: i.value,
                        alt: ""
                      }, null, 8, nr)) : x("", !0),
                      (b = e.userObject) != null && b.name ? (u(), c("span", {
                        key: 1,
                        class: P(["po-text-base po-text-slate-600 po-font-medium po-block", [{ "po-mt-4": i.value }]])
                      }, V((g = e.userObject) == null ? void 0 : g.name), 3)) : x("", !0),
                      (v = e.userObject) != null && v.name ? (u(), c("span", ar, [
                        n.value.name === (($ = e.userObject) == null ? void 0 : $.name) ? (u(), c("span", sr, "Self")) : (u(), c("span", rr, "User at " + V(n.value.name), 1))
                      ])) : x("", !0)
                    ]),
                    ir,
                    s("div", ur, [
                      (u(!0), c(I, null, U(w(r), (_, O) => (u(), c("a", {
                        href: "#",
                        onClick: re((k) => l(_), ["prevent"]),
                        class: P(["po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-shadow-sm po-transition-all po-duration-150 po-ease-out hover:po-bg-blue-50", [
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
                        s("span", cr, [
                          _.isPersonal ? (u(), j(w(Jo), {
                            key: 0,
                            class: P([
                              "po-stroke-current",
                              { "po-stroke-mpao-lightblue": _.current }
                            ])
                          }, null, 8, ["class"])) : x("", !0),
                          _.isPersonal ? x("", !0) : (u(), j(w(oa), {
                            key: 1,
                            class: P([
                              "po-stroke-current",
                              { "po-stroke-mpao-lightblue": _.current }
                            ])
                          }, null, 8, ["class"]))
                        ]),
                        s("span", dr, [
                          s("span", fr, V(_.name), 1),
                          _.identifier ? (u(), c("span", vr, V(_.identifier), 1)) : x("", !0)
                        ])
                      ], 10, pr))), 128))
                    ]),
                    hr,
                    s("div", mr, [
                      s("a", {
                        href: "#",
                        onClick: y[0] || (y[0] = re((_) => m.$emit("button-click", "current-profile"), ["prevent"])),
                        class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-slate-50 hover:po-bg-blue-50 po-transition-all po-duration-150 po-ease-out",
                        role: "button"
                      }, [
                        s("span", br, [
                          S(w(Jo), { class: "po-stroke-current" })
                        ]),
                        gr
                      ]),
                      s("a", {
                        href: "#",
                        onClick: y[1] || (y[1] = re((_) => m.$emit("button-click", "logout"), ["prevent"])),
                        class: "po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-slate-50 hover:po-bg-blue-50 po-transition-all po-duration-150 po-ease-out",
                        role: "button"
                      }, [
                        s("span", yr, [
                          S(w(Xn), { class: "po-stroke-current" })
                        ]),
                        xr
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
    return (t, o) => (u(), c("div", {
      class: P(["loading-dots po-inline-block po-w-[40px] po-h-[10px]", [{ "po-relative": !e.absolute }, { "po-absolute": e.absolute }]])
    }, [
      s("div", {
        class: P(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[8px]", e.dotColor])
      }, null, 2),
      s("div", {
        class: P(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[8px]", e.dotColor])
      }, null, 2),
      s("div", {
        class: P(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[17px]", e.dotColor])
      }, null, 2),
      s("div", {
        class: P(["po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[26px]", e.dotColor])
      }, null, 2)
    ], 2));
  }
}), kr = ["disabled", "aria-disabled"], _r = ["value", "disabled", "aria-disabled"], Cr = {
  name: "PoButton"
}, To = /* @__PURE__ */ L({
  ...Cr,
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
    const o = e, l = "po-rounded-full po-transition-colors po-border po-duration-100 po-ease-in-out po-cursor-pointer disabled:po-bg-slate-400 disabled:po-border-slate-400 disabled:po-cursor-default disabled:po-hover:bg-slate-400", n = B(() => {
      switch (o.size) {
        case "sm":
          return "po-px-2 po-py-1 po-text-xs";
        case "md":
          return "po-px-4 po-py-2 po-text-sm";
        case "lg":
          return "po-px-5 po-py-3 po-text-normal";
      }
    }), a = B(() => {
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
    return (r, i) => (u(), c(I, null, [
      e.isLoading ? (u(), c("span", {
        key: 0,
        class: P([[l, w(n)], "po-bg-slate-200 hover:po-bg-slate-200 focus:po-bg-slate-200"])
      }, [
        S(Nt, {
          "dot-color": "po-bg-slate-500",
          class: "po-relative -po-bottom-[0.2rem]"
        })
      ], 2)) : x("", !0),
      e.type == "button" && !e.isLoading ? (u(), c("button", ke({
        key: 1,
        onClick: i[0] || (i[0] = re((p) => r.$emit("button-click", e.to), ["prevent"])),
        class: [l, w(n), w(a)],
        disabled: e.disabled,
        "aria-disabled": e.disabled
      }, r.$attrs), [
        Y(r.$slots, "label", {}, () => [
          J(V(e.label), 1)
        ])
      ], 16, kr)) : x("", !0),
      e.type == "submit" && !e.isLoading ? (u(), c("input", ke({
        key: 2,
        type: "submit",
        class: [l, w(n), w(a)],
        value: e.label,
        disabled: e.disabled,
        "aria-disabled": e.disabled
      }, r.$attrs), null, 16, _r)) : x("", !0),
      e.type == "link" && !e.isLoading ? (u(), c("a", ke({
        key: 3,
        href: "#",
        onClick: i[1] || (i[1] = re((p) => r.$emit("button-click", e.to), ["prevent"])),
        class: [l, w(n), w(a)]
      }, r.$attrs), [
        Y(r.$slots, "label", {}, () => [
          J(V(e.label), 1)
        ])
      ], 16)) : x("", !0),
      e.type == "simple" && !e.isLoading ? (u(), c("a", {
        key: 4,
        href: "#",
        onClick: i[2] || (i[2] = re((p) => r.$emit("button-click", e.to), ["prevent"])),
        class: P(["po-text-sm po-transition-colors po-duration-100 po-ease-in-out po-inline-flex po-items-center po-space-x-1", [
          { "po-text-mpao-lightblue hover:po-text-mpao-blue": !e.overrideColors }
        ]])
      }, [
        Y(r.$slots, "label", {}, () => [
          J(V(e.label), 1)
        ])
      ], 2)) : x("", !0)
    ], 64));
  }
});
function Sr(e, t) {
  return u(), c("svg", {
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
function un(e, t) {
  return u(), c("svg", {
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
function Pr(e, t) {
  return u(), c("svg", {
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
function Or(e, t) {
  return u(), c("svg", {
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
function ul(e, t) {
  return u(), c("svg", {
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
function Lr(e, t) {
  return u(), c("svg", {
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
function Tr(e, t) {
  return u(), c("svg", {
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
function pn(e, t) {
  return u(), c("svg", {
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
function Ht(e, t) {
  return u(), c("svg", {
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
function Er(e, t) {
  return u(), c("svg", {
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
function Br(e, t) {
  return u(), c("svg", {
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
function cn(e, t) {
  return u(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
  ]);
}
var ve = "top", $e = "bottom", Ve = "right", he = "left", Eo = "auto", gt = [ve, $e, Ve, he], Je = "start", ct = "end", zr = "clippingParents", dn = "viewport", it = "popper", Mr = "reference", pl = /* @__PURE__ */ gt.reduce(function(e, t) {
  return e.concat([t + "-" + Je, t + "-" + ct]);
}, []), fn = /* @__PURE__ */ [].concat(gt, [Eo]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Je, t + "-" + ct]);
}, []), Ar = "beforeRead", Dr = "read", Ir = "afterRead", jr = "beforeMain", Rr = "main", Fr = "afterMain", Nr = "beforeWrite", Hr = "write", qr = "afterWrite", Wr = [Ar, Dr, Ir, jr, Rr, Fr, Nr, Hr, qr];
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
function we(e) {
  var t = ye(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Bo(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = ye(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Ur(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(o) {
    var l = t.styles[o] || {}, n = t.attributes[o] || {}, a = t.elements[o];
    !we(a) || !Se(a) || (Object.assign(a.style, l), Object.keys(n).forEach(function(r) {
      var i = n[r];
      i === !1 ? a.removeAttribute(r) : a.setAttribute(r, i === !0 ? "" : i);
    }));
  });
}
function Gr(e) {
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
      var n = t.elements[l], a = t.attributes[l] || {}, r = Object.keys(t.styles.hasOwnProperty(l) ? t.styles[l] : o[l]), i = r.reduce(function(p, f) {
        return p[f] = "", p;
      }, {});
      !we(n) || !Se(n) || (Object.assign(n.style, i), Object.keys(a).forEach(function(p) {
        n.removeAttribute(p);
      }));
    });
  };
}
const Zr = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Ur,
  effect: Gr,
  requires: ["computeStyles"]
};
function _e(e) {
  return e.split("-")[0];
}
var Ge = Math.max, Tt = Math.min, et = Math.round;
function ro() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function vn() {
  return !/^((?!chrome|android).)*safari/i.test(ro());
}
function tt(e, t, o) {
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  var l = e.getBoundingClientRect(), n = 1, a = 1;
  t && we(e) && (n = e.offsetWidth > 0 && et(l.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && et(l.height) / e.offsetHeight || 1);
  var r = Ke(e) ? ye(e) : window, i = r.visualViewport, p = !vn() && o, f = (l.left + (p && i ? i.offsetLeft : 0)) / n, d = (l.top + (p && i ? i.offsetTop : 0)) / a, m = l.width / n, y = l.height / a;
  return {
    width: m,
    height: y,
    top: d,
    right: f + m,
    bottom: d + y,
    left: f,
    x: f,
    y: d
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
function hn(e, t) {
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
function Kr(e) {
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
function cl(e) {
  return !we(e) || // https://github.com/popperjs/popper-core/issues/837
  Le(e).position === "fixed" ? null : e.offsetParent;
}
function Yr(e) {
  var t = /firefox/i.test(ro()), o = /Trident/i.test(ro());
  if (o && we(e)) {
    var l = Le(e);
    if (l.position === "fixed")
      return null;
  }
  var n = qt(e);
  for (Bo(n) && (n = n.host); we(n) && ["html", "body"].indexOf(Se(n)) < 0; ) {
    var a = Le(n);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return n;
    n = n.parentNode;
  }
  return null;
}
function yt(e) {
  for (var t = ye(e), o = cl(e); o && Kr(o) && Le(o).position === "static"; )
    o = cl(o);
  return o && (Se(o) === "html" || Se(o) === "body" && Le(o).position === "static") ? t : o || Yr(e) || t;
}
function Mo(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ut(e, t, o) {
  return Ge(e, Tt(t, o));
}
function Xr(e, t, o) {
  var l = ut(e, t, o);
  return l > o ? o : l;
}
function mn() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function bn(e) {
  return Object.assign({}, mn(), e);
}
function gn(e, t) {
  return t.reduce(function(o, l) {
    return o[l] = e, o;
  }, {});
}
var Qr = function(t, o) {
  return t = typeof t == "function" ? t(Object.assign({}, o.rects, {
    placement: o.placement
  })) : t, bn(typeof t != "number" ? t : gn(t, gt));
};
function Jr(e) {
  var t, o = e.state, l = e.name, n = e.options, a = o.elements.arrow, r = o.modifiersData.popperOffsets, i = _e(o.placement), p = Mo(i), f = [he, Ve].indexOf(i) >= 0, d = f ? "height" : "width";
  if (!(!a || !r)) {
    var m = Qr(n.padding, o), y = zo(a), h = p === "y" ? ve : he, b = p === "y" ? $e : Ve, g = o.rects.reference[d] + o.rects.reference[p] - r[p] - o.rects.popper[d], v = r[p] - o.rects.reference[p], $ = yt(a), _ = $ ? p === "y" ? $.clientHeight || 0 : $.clientWidth || 0 : 0, O = g / 2 - v / 2, k = m[h], E = _ - y[d] - m[b], T = _ / 2 - y[d] / 2 + O, D = ut(k, T, E), R = p;
    o.modifiersData[l] = (t = {}, t[R] = D, t.centerOffset = D - T, t);
  }
}
function ei(e) {
  var t = e.state, o = e.options, l = o.element, n = l === void 0 ? "[data-popper-arrow]" : l;
  n != null && (typeof n == "string" && (n = t.elements.popper.querySelector(n), !n) || hn(t.elements.popper, n) && (t.elements.arrow = n));
}
const ti = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Jr,
  effect: ei,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ot(e) {
  return e.split("-")[1];
}
var oi = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function li(e, t) {
  var o = e.x, l = e.y, n = t.devicePixelRatio || 1;
  return {
    x: et(o * n) / n || 0,
    y: et(l * n) / n || 0
  };
}
function dl(e) {
  var t, o = e.popper, l = e.popperRect, n = e.placement, a = e.variation, r = e.offsets, i = e.position, p = e.gpuAcceleration, f = e.adaptive, d = e.roundOffsets, m = e.isFixed, y = r.x, h = y === void 0 ? 0 : y, b = r.y, g = b === void 0 ? 0 : b, v = typeof d == "function" ? d({
    x: h,
    y: g
  }) : {
    x: h,
    y: g
  };
  h = v.x, g = v.y;
  var $ = r.hasOwnProperty("x"), _ = r.hasOwnProperty("y"), O = he, k = ve, E = window;
  if (f) {
    var T = yt(o), D = "clientHeight", R = "clientWidth";
    if (T === ye(o) && (T = Re(o), Le(T).position !== "static" && i === "absolute" && (D = "scrollHeight", R = "scrollWidth")), T = T, n === ve || (n === he || n === Ve) && a === ct) {
      k = $e;
      var N = m && T === E && E.visualViewport ? E.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        T[D]
      );
      g -= N - l.height, g *= p ? 1 : -1;
    }
    if (n === he || (n === ve || n === $e) && a === ct) {
      O = Ve;
      var A = m && T === E && E.visualViewport ? E.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        T[R]
      );
      h -= A - l.width, h *= p ? 1 : -1;
    }
  }
  var Z = Object.assign({
    position: i
  }, f && oi), K = d === !0 ? li({
    x: h,
    y: g
  }, ye(o)) : {
    x: h,
    y: g
  };
  if (h = K.x, g = K.y, p) {
    var H;
    return Object.assign({}, Z, (H = {}, H[k] = _ ? "0" : "", H[O] = $ ? "0" : "", H.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + g + "px)" : "translate3d(" + h + "px, " + g + "px, 0)", H));
  }
  return Object.assign({}, Z, (t = {}, t[k] = _ ? g + "px" : "", t[O] = $ ? h + "px" : "", t.transform = "", t));
}
function ni(e) {
  var t = e.state, o = e.options, l = o.gpuAcceleration, n = l === void 0 ? !0 : l, a = o.adaptive, r = a === void 0 ? !0 : a, i = o.roundOffsets, p = i === void 0 ? !0 : i, f = {
    placement: _e(t.placement),
    variation: ot(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: n,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, dl(Object.assign({}, f, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: r,
    roundOffsets: p
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, dl(Object.assign({}, f, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: p
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const ai = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: ni,
  data: {}
};
var Ct = {
  passive: !0
};
function si(e) {
  var t = e.state, o = e.instance, l = e.options, n = l.scroll, a = n === void 0 ? !0 : n, r = l.resize, i = r === void 0 ? !0 : r, p = ye(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && f.forEach(function(d) {
    d.addEventListener("scroll", o.update, Ct);
  }), i && p.addEventListener("resize", o.update, Ct), function() {
    a && f.forEach(function(d) {
      d.removeEventListener("scroll", o.update, Ct);
    }), i && p.removeEventListener("resize", o.update, Ct);
  };
}
const ri = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: si,
  data: {}
};
var ii = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function St(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return ii[t];
  });
}
var ui = {
  start: "end",
  end: "start"
};
function fl(e) {
  return e.replace(/start|end/g, function(t) {
    return ui[t];
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
  var o = ye(e), l = Re(e), n = o.visualViewport, a = l.clientWidth, r = l.clientHeight, i = 0, p = 0;
  if (n) {
    a = n.width, r = n.height;
    var f = vn();
    (f || !f && t === "fixed") && (i = n.offsetLeft, p = n.offsetTop);
  }
  return {
    width: a,
    height: r,
    x: i + Do(e),
    y: p
  };
}
function ci(e) {
  var t, o = Re(e), l = Ao(e), n = (t = e.ownerDocument) == null ? void 0 : t.body, a = Ge(o.scrollWidth, o.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0), r = Ge(o.scrollHeight, o.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0), i = -l.scrollLeft + Do(e), p = -l.scrollTop;
  return Le(n || o).direction === "rtl" && (i += Ge(o.clientWidth, n ? n.clientWidth : 0) - a), {
    width: a,
    height: r,
    x: i,
    y: p
  };
}
function Io(e) {
  var t = Le(e), o = t.overflow, l = t.overflowX, n = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + n + l);
}
function yn(e) {
  return ["html", "body", "#document"].indexOf(Se(e)) >= 0 ? e.ownerDocument.body : we(e) && Io(e) ? e : yn(qt(e));
}
function pt(e, t) {
  var o;
  t === void 0 && (t = []);
  var l = yn(e), n = l === ((o = e.ownerDocument) == null ? void 0 : o.body), a = ye(l), r = n ? [a].concat(a.visualViewport || [], Io(l) ? l : []) : l, i = t.concat(r);
  return n ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(pt(qt(r)))
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
  return t === dn ? io(pi(e, o)) : Ke(t) ? di(t, o) : io(ci(Re(e)));
}
function fi(e) {
  var t = pt(qt(e)), o = ["absolute", "fixed"].indexOf(Le(e).position) >= 0, l = o && we(e) ? yt(e) : e;
  return Ke(l) ? t.filter(function(n) {
    return Ke(n) && hn(n, l) && Se(n) !== "body";
  }) : [];
}
function vi(e, t, o, l) {
  var n = t === "clippingParents" ? fi(e) : [].concat(t), a = [].concat(n, [o]), r = a[0], i = a.reduce(function(p, f) {
    var d = vl(e, f, l);
    return p.top = Ge(d.top, p.top), p.right = Tt(d.right, p.right), p.bottom = Tt(d.bottom, p.bottom), p.left = Ge(d.left, p.left), p;
  }, vl(e, r, l));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function xn(e) {
  var t = e.reference, o = e.element, l = e.placement, n = l ? _e(l) : null, a = l ? ot(l) : null, r = t.x + t.width / 2 - o.width / 2, i = t.y + t.height / 2 - o.height / 2, p;
  switch (n) {
    case ve:
      p = {
        x: r,
        y: t.y - o.height
      };
      break;
    case $e:
      p = {
        x: r,
        y: t.y + t.height
      };
      break;
    case Ve:
      p = {
        x: t.x + t.width,
        y: i
      };
      break;
    case he:
      p = {
        x: t.x - o.width,
        y: i
      };
      break;
    default:
      p = {
        x: t.x,
        y: t.y
      };
  }
  var f = n ? Mo(n) : null;
  if (f != null) {
    var d = f === "y" ? "height" : "width";
    switch (a) {
      case Je:
        p[f] = p[f] - (t[d] / 2 - o[d] / 2);
        break;
      case ct:
        p[f] = p[f] + (t[d] / 2 - o[d] / 2);
        break;
    }
  }
  return p;
}
function dt(e, t) {
  t === void 0 && (t = {});
  var o = t, l = o.placement, n = l === void 0 ? e.placement : l, a = o.strategy, r = a === void 0 ? e.strategy : a, i = o.boundary, p = i === void 0 ? zr : i, f = o.rootBoundary, d = f === void 0 ? dn : f, m = o.elementContext, y = m === void 0 ? it : m, h = o.altBoundary, b = h === void 0 ? !1 : h, g = o.padding, v = g === void 0 ? 0 : g, $ = bn(typeof v != "number" ? v : gn(v, gt)), _ = y === it ? Mr : it, O = e.rects.popper, k = e.elements[b ? _ : y], E = vi(Ke(k) ? k : k.contextElement || Re(e.elements.popper), p, d, r), T = tt(e.elements.reference), D = xn({
    reference: T,
    element: O,
    strategy: "absolute",
    placement: n
  }), R = io(Object.assign({}, O, D)), N = y === it ? R : T, A = {
    top: E.top - N.top + $.top,
    bottom: N.bottom - E.bottom + $.bottom,
    left: E.left - N.left + $.left,
    right: N.right - E.right + $.right
  }, Z = e.modifiersData.offset;
  if (y === it && Z) {
    var K = Z[n];
    Object.keys(A).forEach(function(H) {
      var q = [Ve, $e].indexOf(H) >= 0 ? 1 : -1, W = [ve, $e].indexOf(H) >= 0 ? "y" : "x";
      A[H] += K[W] * q;
    });
  }
  return A;
}
function hi(e, t) {
  t === void 0 && (t = {});
  var o = t, l = o.placement, n = o.boundary, a = o.rootBoundary, r = o.padding, i = o.flipVariations, p = o.allowedAutoPlacements, f = p === void 0 ? fn : p, d = ot(l), m = d ? i ? pl : pl.filter(function(b) {
    return ot(b) === d;
  }) : gt, y = m.filter(function(b) {
    return f.indexOf(b) >= 0;
  });
  y.length === 0 && (y = m);
  var h = y.reduce(function(b, g) {
    return b[g] = dt(e, {
      placement: g,
      boundary: n,
      rootBoundary: a,
      padding: r
    })[_e(g)], b;
  }, {});
  return Object.keys(h).sort(function(b, g) {
    return h[b] - h[g];
  });
}
function mi(e) {
  if (_e(e) === Eo)
    return [];
  var t = St(e);
  return [fl(e), t, fl(t)];
}
function bi(e) {
  var t = e.state, o = e.options, l = e.name;
  if (!t.modifiersData[l]._skip) {
    for (var n = o.mainAxis, a = n === void 0 ? !0 : n, r = o.altAxis, i = r === void 0 ? !0 : r, p = o.fallbackPlacements, f = o.padding, d = o.boundary, m = o.rootBoundary, y = o.altBoundary, h = o.flipVariations, b = h === void 0 ? !0 : h, g = o.allowedAutoPlacements, v = t.options.placement, $ = _e(v), _ = $ === v, O = p || (_ || !b ? [St(v)] : mi(v)), k = [v].concat(O).reduce(function(Ee, Be) {
      return Ee.concat(_e(Be) === Eo ? hi(t, {
        placement: Be,
        boundary: d,
        rootBoundary: m,
        padding: f,
        flipVariations: b,
        allowedAutoPlacements: g
      }) : Be);
    }, []), E = t.rects.reference, T = t.rects.popper, D = /* @__PURE__ */ new Map(), R = !0, N = k[0], A = 0; A < k.length; A++) {
      var Z = k[A], K = _e(Z), H = ot(Z) === Je, q = [ve, $e].indexOf(K) >= 0, W = q ? "width" : "height", F = dt(t, {
        placement: Z,
        boundary: d,
        rootBoundary: m,
        altBoundary: y,
        padding: f
      }), X = q ? H ? Ve : he : H ? $e : ve;
      E[W] > T[W] && (X = St(X));
      var Pe = St(X), fe = [];
      if (a && fe.push(F[K] <= 0), i && fe.push(F[X] <= 0, F[Pe] <= 0), fe.every(function(Ee) {
        return Ee;
      })) {
        N = Z, R = !1;
        break;
      }
      D.set(Z, fe);
    }
    if (R)
      for (var nt = b ? 3 : 1, wt = function(Be) {
        var at = k.find(function($t) {
          var Fe = D.get($t);
          if (Fe)
            return Fe.slice(0, Be).every(function(Gt) {
              return Gt;
            });
        });
        if (at)
          return N = at, "break";
      }, Te = nt; Te > 0; Te--) {
        var Ye = wt(Te);
        if (Ye === "break")
          break;
      }
    t.placement !== N && (t.modifiersData[l]._skip = !0, t.placement = N, t.reset = !0);
  }
}
const gi = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: bi,
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
function yi(e) {
  var t = e.state, o = e.name, l = t.rects.reference, n = t.rects.popper, a = t.modifiersData.preventOverflow, r = dt(t, {
    elementContext: "reference"
  }), i = dt(t, {
    altBoundary: !0
  }), p = hl(r, l), f = hl(i, n, a), d = ml(p), m = ml(f);
  t.modifiersData[o] = {
    referenceClippingOffsets: p,
    popperEscapeOffsets: f,
    isReferenceHidden: d,
    hasPopperEscaped: m
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": d,
    "data-popper-escaped": m
  });
}
const xi = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: yi
};
function wi(e, t, o) {
  var l = _e(e), n = [he, ve].indexOf(l) >= 0 ? -1 : 1, a = typeof o == "function" ? o(Object.assign({}, t, {
    placement: e
  })) : o, r = a[0], i = a[1];
  return r = r || 0, i = (i || 0) * n, [he, Ve].indexOf(l) >= 0 ? {
    x: i,
    y: r
  } : {
    x: r,
    y: i
  };
}
function $i(e) {
  var t = e.state, o = e.options, l = e.name, n = o.offset, a = n === void 0 ? [0, 0] : n, r = fn.reduce(function(d, m) {
    return d[m] = wi(m, t.rects, a), d;
  }, {}), i = r[t.placement], p = i.x, f = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += p, t.modifiersData.popperOffsets.y += f), t.modifiersData[l] = r;
}
const Vi = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: $i
};
function ki(e) {
  var t = e.state, o = e.name;
  t.modifiersData[o] = xn({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const _i = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: ki,
  data: {}
};
function Ci(e) {
  return e === "x" ? "y" : "x";
}
function Si(e) {
  var t = e.state, o = e.options, l = e.name, n = o.mainAxis, a = n === void 0 ? !0 : n, r = o.altAxis, i = r === void 0 ? !1 : r, p = o.boundary, f = o.rootBoundary, d = o.altBoundary, m = o.padding, y = o.tether, h = y === void 0 ? !0 : y, b = o.tetherOffset, g = b === void 0 ? 0 : b, v = dt(t, {
    boundary: p,
    rootBoundary: f,
    padding: m,
    altBoundary: d
  }), $ = _e(t.placement), _ = ot(t.placement), O = !_, k = Mo($), E = Ci(k), T = t.modifiersData.popperOffsets, D = t.rects.reference, R = t.rects.popper, N = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, A = typeof N == "number" ? {
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
    if (a) {
      var H, q = k === "y" ? ve : he, W = k === "y" ? $e : Ve, F = k === "y" ? "height" : "width", X = T[k], Pe = X + v[q], fe = X - v[W], nt = h ? -R[F] / 2 : 0, wt = _ === Je ? D[F] : R[F], Te = _ === Je ? -R[F] : -D[F], Ye = t.elements.arrow, Ee = h && Ye ? zo(Ye) : {
        width: 0,
        height: 0
      }, Be = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : mn(), at = Be[q], $t = Be[W], Fe = ut(0, D[F], Ee[F]), Gt = O ? D[F] / 2 - nt - Fe - at - A.mainAxis : wt - Fe - at - A.mainAxis, On = O ? -D[F] / 2 + nt + Fe + $t + A.mainAxis : Te + Fe + $t + A.mainAxis, Zt = t.elements.arrow && yt(t.elements.arrow), Ln = Zt ? k === "y" ? Zt.clientTop || 0 : Zt.clientLeft || 0 : 0, Ho = (H = Z == null ? void 0 : Z[k]) != null ? H : 0, Tn = X + Gt - Ho - Ln, En = X + On - Ho, qo = ut(h ? Tt(Pe, Tn) : Pe, X, h ? Ge(fe, En) : fe);
      T[k] = qo, K[k] = qo - X;
    }
    if (i) {
      var Wo, Bn = k === "x" ? ve : he, zn = k === "x" ? $e : Ve, Ne = T[E], Vt = E === "y" ? "height" : "width", Uo = Ne + v[Bn], Go = Ne - v[zn], Kt = [ve, he].indexOf($) !== -1, Zo = (Wo = Z == null ? void 0 : Z[E]) != null ? Wo : 0, Ko = Kt ? Uo : Ne - D[Vt] - R[Vt] - Zo + A.altAxis, Yo = Kt ? Ne + D[Vt] + R[Vt] - Zo - A.altAxis : Go, Xo = h && Kt ? Xr(Ko, Ne, Yo) : ut(h ? Ko : Uo, Ne, h ? Yo : Go);
      T[E] = Xo, K[E] = Xo - Ne;
    }
    t.modifiersData[l] = K;
  }
}
const Pi = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Si,
  requiresIfExists: ["offset"]
};
function Oi(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Li(e) {
  return e === ye(e) || !we(e) ? Ao(e) : Oi(e);
}
function Ti(e) {
  var t = e.getBoundingClientRect(), o = et(t.width) / e.offsetWidth || 1, l = et(t.height) / e.offsetHeight || 1;
  return o !== 1 || l !== 1;
}
function Ei(e, t, o) {
  o === void 0 && (o = !1);
  var l = we(t), n = we(t) && Ti(t), a = Re(t), r = tt(e, n, o), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, p = {
    x: 0,
    y: 0
  };
  return (l || !l && !o) && ((Se(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Io(a)) && (i = Li(t)), we(t) ? (p = tt(t, !0), p.x += t.clientLeft, p.y += t.clientTop) : a && (p.x = Do(a))), {
    x: r.left + i.scrollLeft - p.x,
    y: r.top + i.scrollTop - p.y,
    width: r.width,
    height: r.height
  };
}
function Bi(e) {
  var t = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), l = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function n(a) {
    o.add(a.name);
    var r = [].concat(a.requires || [], a.requiresIfExists || []);
    r.forEach(function(i) {
      if (!o.has(i)) {
        var p = t.get(i);
        p && n(p);
      }
    }), l.push(a);
  }
  return e.forEach(function(a) {
    o.has(a.name) || n(a);
  }), l;
}
function zi(e) {
  var t = Bi(e);
  return Wr.reduce(function(o, l) {
    return o.concat(t.filter(function(n) {
      return n.phase === l;
    }));
  }, []);
}
function Mi(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(o) {
      Promise.resolve().then(function() {
        t = void 0, o(e());
      });
    })), t;
  };
}
function Ai(e) {
  var t = e.reduce(function(o, l) {
    var n = o[l.name];
    return o[l.name] = n ? Object.assign({}, n, l, {
      options: Object.assign({}, n.options, l.options),
      data: Object.assign({}, n.data, l.data)
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
function Di(e) {
  e === void 0 && (e = {});
  var t = e, o = t.defaultModifiers, l = o === void 0 ? [] : o, n = t.defaultOptions, a = n === void 0 ? bl : n;
  return function(i, p, f) {
    f === void 0 && (f = a);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, bl, a),
      modifiersData: {},
      elements: {
        reference: i,
        popper: p
      },
      attributes: {},
      styles: {}
    }, m = [], y = !1, h = {
      state: d,
      setOptions: function($) {
        var _ = typeof $ == "function" ? $(d.options) : $;
        g(), d.options = Object.assign({}, a, d.options, _), d.scrollParents = {
          reference: Ke(i) ? pt(i) : i.contextElement ? pt(i.contextElement) : [],
          popper: pt(p)
        };
        var O = zi(Ai([].concat(l, d.options.modifiers)));
        return d.orderedModifiers = O.filter(function(k) {
          return k.enabled;
        }), b(), h.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!y) {
          var $ = d.elements, _ = $.reference, O = $.popper;
          if (gl(_, O)) {
            d.rects = {
              reference: Ei(_, yt(O), d.options.strategy === "fixed"),
              popper: zo(O)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(A) {
              return d.modifiersData[A.name] = Object.assign({}, A.data);
            });
            for (var k = 0; k < d.orderedModifiers.length; k++) {
              if (d.reset === !0) {
                d.reset = !1, k = -1;
                continue;
              }
              var E = d.orderedModifiers[k], T = E.fn, D = E.options, R = D === void 0 ? {} : D, N = E.name;
              typeof T == "function" && (d = T({
                state: d,
                options: R,
                name: N,
                instance: h
              }) || d);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Mi(function() {
        return new Promise(function(v) {
          h.forceUpdate(), v(d);
        });
      }),
      destroy: function() {
        g(), y = !0;
      }
    };
    if (!gl(i, p))
      return h;
    h.setOptions(f).then(function(v) {
      !y && f.onFirstUpdate && f.onFirstUpdate(v);
    });
    function b() {
      d.orderedModifiers.forEach(function(v) {
        var $ = v.name, _ = v.options, O = _ === void 0 ? {} : _, k = v.effect;
        if (typeof k == "function") {
          var E = k({
            state: d,
            name: $,
            instance: h,
            options: O
          }), T = function() {
          };
          m.push(E || T);
        }
      });
    }
    function g() {
      m.forEach(function(v) {
        return v();
      }), m = [];
    }
    return h;
  };
}
var Ii = [ri, _i, ai, Zr, Vi, gi, Pi, ti, xi], jo = /* @__PURE__ */ Di({
  defaultModifiers: Ii
});
function Ro(e, t) {
  if (!e)
    return;
  const o = (l) => {
    l.target !== e.value && l.composedPath().includes(e.value) || typeof t == "function" && t();
  };
  return G(() => {
    window.addEventListener("click", o);
  }), kl(() => {
    window.removeEventListener("click", o);
  }), { listener: o };
}
function ji() {
  var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
  if (t > 0)
    return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
  var o = e.indexOf("Trident/");
  if (o > 0) {
    var l = e.indexOf("rv:");
    return parseInt(e.substring(l + 3, e.indexOf(".", l)), 10);
  }
  var n = e.indexOf("Edge/");
  return n > 0 ? parseInt(e.substring(n + 5, e.indexOf(".", n)), 10) : -1;
}
let Pt;
function uo() {
  uo.init || (uo.init = !0, Pt = ji() !== -1);
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
    uo(), ho(() => {
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
const Ri = /* @__PURE__ */ Hn("data-v-b329ee4c");
Fn("data-v-b329ee4c");
const Fi = {
  class: "resize-observer",
  tabindex: "-1"
};
Nn();
const Ni = /* @__PURE__ */ Ri((e, t, o, l, n, a) => (u(), j("div", Fi)));
Wt.render = Ni;
Wt.__scopeId = "data-v-b329ee4c";
Wt.__file = "src/components/ResizeObserver.vue";
function Ot(e) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ot = function(t) {
    return typeof t;
  } : Ot = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ot(e);
}
function Hi(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function yl(e, t) {
  for (var o = 0; o < t.length; o++) {
    var l = t[o];
    l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(e, l.key, l);
  }
}
function qi(e, t, o) {
  return t && yl(e.prototype, t), o && yl(e, o), e;
}
function xl(e) {
  return Wi(e) || Ui(e) || Gi(e) || Zi();
}
function Wi(e) {
  if (Array.isArray(e))
    return po(e);
}
function Ui(e) {
  if (typeof Symbol < "u" && Symbol.iterator in Object(e))
    return Array.from(e);
}
function Gi(e, t) {
  if (e) {
    if (typeof e == "string")
      return po(e, t);
    var o = Object.prototype.toString.call(e).slice(8, -1);
    if (o === "Object" && e.constructor && (o = e.constructor.name), o === "Map" || o === "Set")
      return Array.from(e);
    if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
      return po(e, t);
  }
}
function po(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var o = 0, l = new Array(t); o < t; o++)
    l[o] = e[o];
  return l;
}
function Zi() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ki(e) {
  var t;
  return typeof e == "function" ? t = {
    callback: e
  } : t = e, t;
}
function Yi(e, t) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l, n, a, r = function(p) {
    for (var f = arguments.length, d = new Array(f > 1 ? f - 1 : 0), m = 1; m < f; m++)
      d[m - 1] = arguments[m];
    if (a = d, !(l && p === n)) {
      var y = o.leading;
      typeof y == "function" && (y = y(p, n)), (!l || p !== n) && y && e.apply(void 0, [p].concat(xl(a))), n = p, clearTimeout(l), l = setTimeout(function() {
        e.apply(void 0, [p].concat(xl(a))), l = 0;
      }, t);
    }
  };
  return r._clear = function() {
    clearTimeout(l), l = null;
  }, r;
}
function wn(e, t) {
  if (e === t)
    return !0;
  if (Ot(e) === "object") {
    for (var o in e)
      if (!wn(e[o], t[o]))
        return !1;
    return !0;
  }
  return !1;
}
var Xi = /* @__PURE__ */ function() {
  function e(t, o, l) {
    Hi(this, e), this.el = t, this.observer = null, this.frozen = !1, this.createObserver(o, l);
  }
  return qi(e, [{
    key: "createObserver",
    value: function(o, l) {
      var n = this;
      if (this.observer && this.destroyObserver(), !this.frozen) {
        if (this.options = Ki(o), this.callback = function(i, p) {
          n.options.callback(i, p), i && n.options.once && (n.frozen = !0, n.destroyObserver());
        }, this.callback && this.options.throttle) {
          var a = this.options.throttleOptions || {}, r = a.leading;
          this.callback = Yi(this.callback, this.options.throttle, {
            leading: function(p) {
              return r === "both" || r === "visible" && p || r === "hidden" && !p;
            }
          });
        }
        this.oldResult = void 0, this.observer = new IntersectionObserver(function(i) {
          var p = i[0];
          if (i.length > 1) {
            var f = i.find(function(m) {
              return m.isIntersecting;
            });
            f && (p = f);
          }
          if (n.callback) {
            var d = p.isIntersecting && p.intersectionRatio >= n.threshold;
            if (d === n.oldResult)
              return;
            n.oldResult = d, n.callback(d, p);
          }
        }, this.options.intersection), ho(function() {
          n.observer && n.observer.observe(n.el);
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
function $n(e, t, o) {
  var l = t.value;
  if (l)
    if (typeof IntersectionObserver > "u")
      console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");
    else {
      var n = new Xi(e, l, o);
      e._vue_visibilityState = n;
    }
}
function Qi(e, t, o) {
  var l = t.value, n = t.oldValue;
  if (!wn(l, n)) {
    var a = e._vue_visibilityState;
    if (!l) {
      Vn(e);
      return;
    }
    a ? a.createObserver(l, o) : $n(e, {
      value: l
    }, o);
  }
}
function Vn(e) {
  var t = e._vue_visibilityState;
  t && (t.destroyObserver(), delete e._vue_visibilityState);
}
var Ji = {
  beforeMount: $n,
  updated: Qi,
  unmounted: Vn
};
function eu(e) {
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
var tu = {
  itemsLimit: 1e3
}, ou = /(auto|scroll)/;
function kn(e, t) {
  return e.parentNode === null ? t : kn(e.parentNode, t.concat([e]));
}
var eo = function(t, o) {
  return getComputedStyle(t, null).getPropertyValue(o);
}, lu = function(t) {
  return eo(t, "overflow") + eo(t, "overflow-y") + eo(t, "overflow-x");
}, nu = function(t) {
  return ou.test(lu(t));
};
function wl(e) {
  if (e instanceof HTMLElement || e instanceof SVGElement) {
    for (var t = kn(e.parentNode, []), o = 0; o < t.length; o += 1)
      if (nu(t[o]))
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
var _n = {
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
function Cn() {
  return this.items.length && co(this.items[0]) !== "object";
}
var fo = !1;
if (typeof window < "u") {
  fo = !1;
  try {
    var au = Object.defineProperty({}, "passive", {
      get: function() {
        fo = !0;
      }
    });
    window.addEventListener("test", null, au);
  } catch {
  }
}
let su = 0;
var Fo = {
  name: "RecycleScroller",
  components: {
    ResizeObserver: Wt
  },
  directives: {
    ObserveVisibility: Ji
  },
  props: {
    ..._n,
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
        let n = 1e4, a = 0, r;
        for (let i = 0, p = t.length; i < p; i++)
          r = t[i][o] || l, r < n && (n = r), a += r, e[i] = { accumulator: a, size: r };
        return this.$_computedMinItemSize = n, e;
      }
      return [];
    },
    simpleArray: Cn,
    itemIndexByKey() {
      const { keyField: e, items: t } = this, o = {};
      for (let l = 0, n = t.length; l < n; l++)
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
    addView(e, t, o, l, n) {
      const a = qn({
        id: su++,
        index: t,
        used: !0,
        key: l,
        type: n
      }), r = Wn({
        item: o,
        position: 0,
        nr: a
      });
      return e.push(r), r;
    },
    unuseView(e, t = !1) {
      const o = this.$_unusedViews, l = e.nr.type;
      let n = o.get(l);
      n || (n = [], o.set(l, n)), n.push(e), t || (e.nr.used = !1, e.position = -9999);
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
      const o = this.itemSize, l = this.gridItems || 1, n = this.itemSecondarySize || o, a = this.$_computedMinItemSize, r = this.typeField, i = this.simpleArray ? null : this.keyField, p = this.items, f = p.length, d = this.sizes, m = this.$_views, y = this.$_unusedViews, h = this.pool, b = this.itemIndexByKey;
      let g, v, $, _, O;
      if (!f)
        g = v = _ = O = $ = 0;
      else if (this.$_prerender)
        g = _ = 0, v = O = Math.min(this.prerender, p.length), $ = null;
      else {
        const A = this.getScroll();
        if (t) {
          let H = A.start - this.$_lastUpdateScrollPosition;
          if (H < 0 && (H = -H), o === null && H < a || H < o)
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
            X = F, H = d[F].accumulator, H < A.start ? q = F : F < f - 1 && d[F + 1].accumulator > A.start && (W = F), F = ~~((q + W) / 2);
          while (F !== X);
          for (F < 0 && (F = 0), g = F, $ = d[f - 1].accumulator, v = F; v < f && d[v].accumulator < A.end; v++)
            ;
          for (v === -1 ? v = p.length - 1 : (v++, v > f && (v = f)), _ = g; _ < f && K + d[_].accumulator < A.start; _++)
            ;
          for (O = _; O < f && K + d[O].accumulator < A.end; O++)
            ;
        } else {
          g = ~~(A.start / o * l);
          const H = g % l;
          g -= H, v = Math.ceil(A.end / o * l), _ = Math.max(0, Math.floor((A.start - K) / o * l)), O = Math.floor((A.end - K) / o * l), g < 0 && (g = 0), v > f && (v = f), _ < 0 && (_ = 0), O > f && (O = f), $ = Math.ceil(f / l) * o;
        }
      }
      v - g > tu.itemsLimit && this.itemsLimitError(), this.totalSize = $;
      let k;
      const E = g <= this.$_endIndex && v >= this.$_startIndex;
      if (E)
        for (let A = 0, Z = h.length; A < Z; A++)
          k = h[A], k.nr.used && (e && (k.nr.index = b[k.item[i]]), (k.nr.index == null || k.nr.index < g || k.nr.index >= v) && this.unuseView(k));
      const T = E ? null : /* @__PURE__ */ new Map();
      let D, R, N;
      for (let A = g; A < v; A++) {
        D = p[A];
        const Z = i ? D[i] : D;
        if (Z == null)
          throw new Error(`Key is ${Z} on item (keyField is '${i}')`);
        if (k = m.get(Z), !o && !d[A].size) {
          k && this.unuseView(k);
          continue;
        }
        R = D[r];
        let K = y.get(R), H = !1;
        if (!k)
          E ? K && K.length ? k = K.pop() : k = this.addView(h, A, D, Z, R) : (N = T.get(R) || 0, (!K || N >= K.length) && (k = this.addView(h, A, D, Z, R), this.unuseView(k, !0), K = y.get(R)), k = K[N], T.set(R, N + 1)), m.delete(k.nr.key), k.nr.used = !0, k.nr.index = A, k.nr.key = Z, k.nr.type = R, m.set(Z, k), H = !0;
        else if (!k.nr.used && (k.nr.used = !0, H = !0, K)) {
          const q = K.indexOf(k);
          q !== -1 && K.splice(q, 1);
        }
        k.item = D, H && (A === p.length - 1 && this.$emit("scroll-end"), A === 0 && this.$emit("scroll-start")), o === null ? (k.position = d[A - 1].accumulator, k.offset = 0) : (k.position = Math.floor(A / l) * o, k.offset = A % l * n);
      }
      return this.$_startIndex = g, this.$_endIndex = v, this.emitUpdate && this.$emit("update", g, v, _, O), clearTimeout(this.$_sortTimer), this.$_sortTimer = setTimeout(this.sortViews, this.updateInterval + 300), {
        continuous: E
      };
    },
    getListenerTarget() {
      let e = wl(this.$el);
      return window.document && (e === window.document.documentElement || e === window.document.body) && (e = window), e;
    },
    getScroll() {
      const { $el: e, direction: t } = this, o = t === "vertical";
      let l;
      if (this.pageMode) {
        const n = e.getBoundingClientRect(), a = o ? n.height : n.width;
        let r = -(o ? n.top : n.left), i = o ? window.innerHeight : window.innerWidth;
        r < 0 && (i += r, r = 0), r + i > a && (i = a - r), l = {
          start: r,
          end: r + i
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
      let o, l, n;
      if (this.pageMode) {
        const a = wl(this.$el), r = a.tagName === "HTML" ? 0 : a[t.scroll], i = a.getBoundingClientRect(), f = this.$el.getBoundingClientRect()[t.start] - i[t.start];
        o = a, l = t.scroll, n = e + r + f;
      } else
        o = this.$el, l = t.scroll, n = e;
      o[l] = n;
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
const ru = {
  key: 0,
  ref: "before",
  class: "vue-recycle-scroller__slot"
}, iu = {
  key: 1,
  ref: "after",
  class: "vue-recycle-scroller__slot"
};
function uu(e, t, o, l, n, a) {
  const r = _l("ResizeObserver"), i = Un("observe-visibility");
  return Ae((u(), c(
    "div",
    {
      class: P(["vue-recycle-scroller", {
        ready: n.ready,
        "page-mode": o.pageMode,
        [`direction-${e.direction}`]: !0
      }]),
      onScrollPassive: t[0] || (t[0] = (...p) => a.handleScroll && a.handleScroll(...p))
    },
    [
      e.$slots.before ? (u(), c(
        "div",
        ru,
        [
          Y(e.$slots, "before")
        ],
        512
        /* NEED_PATCH */
      )) : x("v-if", !0),
      (u(), j(de(o.listTag), {
        ref: "wrapper",
        style: bo({ [e.direction === "vertical" ? "minHeight" : "minWidth"]: n.totalSize + "px" }),
        class: P(["vue-recycle-scroller__item-wrapper", o.listClass])
      }, {
        default: z(() => [
          (u(!0), c(
            I,
            null,
            U(n.pool, (p) => (u(), j(de(o.itemTag), ke({
              key: p.nr.id,
              style: n.ready ? {
                transform: `translate${e.direction === "vertical" ? "Y" : "X"}(${p.position}px) translate${e.direction === "vertical" ? "X" : "Y"}(${p.offset}px)`,
                width: o.gridItems ? `${e.direction === "vertical" && o.itemSecondarySize || o.itemSize}px` : void 0,
                height: o.gridItems ? `${e.direction === "horizontal" && o.itemSecondarySize || o.itemSize}px` : void 0
              } : null,
              class: ["vue-recycle-scroller__item-view", [
                o.itemClass,
                {
                  hover: !o.skipHover && n.hoverKey === p.nr.key
                }
              ]]
            }, Gn(o.skipHover ? {} : {
              mouseenter: () => {
                n.hoverKey = p.nr.key;
              },
              mouseleave: () => {
                n.hoverKey = null;
              }
            })), {
              default: z(() => [
                Y(e.$slots, "default", {
                  item: p.item,
                  index: p.nr.index,
                  active: p.nr.used
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
      e.$slots.after ? (u(), c(
        "div",
        iu,
        [
          Y(e.$slots, "after")
        ],
        512
        /* NEED_PATCH */
      )) : x("v-if", !0),
      S(r, { onNotify: a.handleResize }, null, 8, ["onNotify"])
    ],
    34
    /* CLASS, HYDRATE_EVENTS */
  )), [
    [i, a.handleVisibilityChange]
  ]);
}
Fo.render = uu;
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
                const n = t.borderBoxSize[0];
                o = n.inlineSize, l = n.blockSize;
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
    ..._n,
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
    simpleArray: Cn,
    itemsWithSize() {
      const e = [], { items: t, keyField: o, simpleArray: l } = this, n = this.vscrollData.sizes, a = t.length;
      for (let r = 0; r < a; r++) {
        const i = t[r], p = l ? r : i[o];
        let f = n[p];
        typeof f > "u" && !this.$_undefinedMap[p] && (f = 0), e.push({
          item: i,
          id: p,
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
      let l = 0, n = 0;
      const a = Math.min(e.length, t.length);
      for (let i = 0; i < a && !(l >= o); i++)
        l += t[i].size || this.minItemSize, n += e[i].size || this.minItemSize;
      const r = n - l;
      r !== 0 && (this.$el.scrollTop += r);
    }
  },
  beforeCreate() {
    this.$_updates = [], this.$_undefinedSizes = 0, this.$_undefinedMap = {}, this.$_events = eu();
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
function pu(e, t, o, l, n, a) {
  const r = _l("RecycleScroller");
  return u(), j(r, ke({
    ref: "scroller",
    items: a.itemsWithSize,
    "min-item-size": o.minItemSize,
    direction: e.direction,
    "key-field": "id",
    "list-tag": e.listTag,
    "item-tag": e.itemTag
  }, e.$attrs, {
    onResize: a.onScrollerResize,
    onVisible: a.onScrollerVisible
  }), {
    default: z(({ item: i, index: p, active: f }) => [
      Y(e.$slots, "default", Xe(Qe({
        item: i.item,
        index: p,
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
No.render = pu;
No.__file = "src/components/DynamicScroller.vue";
var Sn = {
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
Sn.__file = "src/components/DynamicScrollerItem.vue";
const cu = ["for"], du = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, fu = ["title"], vu = { class: "po-relative po-mt-1" }, hu = {
  role: "button",
  ref: "comboboxButton"
}, mu = ["placeholder", "disabled", "id"], bu = {
  class: /* @__PURE__ */ P(["group-hover:po-text-white po-block po-truncate"])
}, gu = {
  key: 0,
  class: "po-block po-text-xs po-opacity-60"
}, yu = {
  key: 0,
  class: "po-mt-2 po-text-sm po-text-slate-500",
  id: "-description"
}, xu = {
  key: 1,
  class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
  id: "-error"
}, wu = {
  name: "PoSelectField"
}, $u = /* @__PURE__ */ L({
  ...wu,
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
    const o = e, l = C(""), n = C(""), a = C(), r = C(!1), i = C(!1), p = C(), f = C(null), d = B(() => {
      var E, T;
      const k = l.value.toLowerCase();
      return k === "" ? ((E = o.list) == null ? void 0 : E.map((D) => ({
        ...D,
        active: a.value === D.id
      }))) ?? [] : ((T = o.list) == null ? void 0 : T.filter((D) => D.name.toLowerCase().includes(k)).map((D) => ({
        ...D,
        active: a.value === D.id
      }))) ?? [];
    });
    function m(k) {
      if (o.object)
        return k == null ? void 0 : k.name;
      if (d.value) {
        let E = d.value.find((T) => T.id === k);
        return E == null ? void 0 : E.name;
      } else if (o.placeholder)
        return o.placeholder;
    }
    a.value = o.modelValue, mo(() => {
      a.value = o.modelValue;
    }), Q(a, () => {
      n.value = m(a.value);
    });
    const { errorMessage: y } = xe(o), h = C(y.value !== null);
    Q(y, (k, E) => {
      h.value = y.value !== null && y.value !== "";
    });
    const b = C("");
    Ro(f, () => {
      r.value = !!i.value;
    });
    function g(k) {
      a.value = k, n.value = k.name, l.value = "", t("selected", o.object ? k : k.id), t("update:modelValue", o.object ? k : k.id), r.value = !!i.value;
    }
    const v = C();
    let $;
    G(() => {
      o.id === "" ? b.value = o.id ? o.id : `${o.label.replace(
        /\s/g,
        ""
      )}-${Date.now()}-selectfield-${Math.floor(Math.random() * 9e3)}` : b.value = o.id, n.value = m(o.modelValue), $ = jo(p.value, v.value, {
        placement: "bottom-end",
        strategy: "fixed",
        modifiers: [
          {
            name: "sameWidth",
            enabled: !0,
            fn: ({ state: k }) => {
              k.styles.popper.width = `${k.rects.reference.width}px`;
            },
            phase: "beforeWrite",
            requires: ["computeStyles"]
          }
        ]
      });
    }), ae(() => {
      $ && $.destroy();
    });
    function _() {
      i.value = !1, setTimeout(() => {
        r.value = !1;
      }, 100);
    }
    const O = (k) => {
      let E = k.target.value;
      l.value = E;
    };
    return (k, E) => (u(), c("div", {
      class: P([{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]),
      ref_key: "containerRef",
      ref: f
    }, [
      s("label", {
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700",
        for: b.value
      }, [
        s("span", null, V(e.label), 1),
        e.required ? (u(), c("span", du, "*")) : x("", !0),
        e.info !== null ? (u(), c("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          S(w(Ht), { class: "po-fill-current" })
        ], 8, fu)) : x("", !0)
      ], 8, cu),
      s("div", vu, [
        s("div", hu, [
          Ae(s("input", {
            type: "text",
            ref_key: "selectBox",
            ref: p,
            class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm",
            placeholder: e.placeholder,
            disabled: e.disabled,
            "onUpdate:modelValue": E[0] || (E[0] = (T) => n.value = T),
            onInput: O,
            onFocus: E[1] || (E[1] = (T) => {
              i.value = !0, r.value = !0;
            }),
            onBlur: _,
            id: b.value
          }, null, 40, mu), [
            [Et, n.value]
          ]),
          s("span", {
            class: "po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-rounded-r-md po-px-2 focus:po-outline-none",
            role: "button",
            onClick: E[2] || (E[2] = (T) => r.value = !r.value)
          }, [
            S(w(Tr), {
              class: "po-h-5 po-w-5 po-text-slate-400",
              "aria-hidden": "true"
            })
          ])
        ], 512),
        Ae(s("div", {
          ref_key: "popper",
          ref: v,
          class: "po-absolute po-z-10 po-mt-1 po-w-full po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
        }, [
          S(w(No), {
            items: w(d),
            "min-item-size": 32,
            "key-field": "id",
            class: "scroller po-max-h-60 po-h-full po-overflow-y-auto"
          }, {
            default: z(({ item: T, index: D, active: R }) => [
              S(w(Sn), {
                item: T,
                active: R,
                "size-dependencies": [T.name],
                onClick: (N) => g(T),
                "data-index": D,
                class: P([
                  "po-relative po-group po-select-none po-py-2 po-pl-3 po-pr-9 po-cursor-pointer hover:po-bg-mpao-lightblue",
                  T.active ? "po-bg-mpao-lightblue po-text-white" : "po-text-slate-900"
                ])
              }, {
                default: z(() => [
                  s("span", bu, [
                    J(V((T == null ? void 0 : T.name) ?? "") + " ", 1),
                    T != null && T.subtitle ? (u(), c("span", gu, V(T == null ? void 0 : T.subtitle), 1)) : x("", !0)
                  ])
                ]),
                _: 2
              }, 1032, ["item", "active", "size-dependencies", "onClick", "data-index", "class"])
            ]),
            _: 1
          }, 8, ["items"])
        ], 512), [
          [go, r.value && w(d).length > 0]
        ])
      ]),
      e.message !== null ? (u(), c("p", yu, V(e.message), 1)) : x("", !0),
      w(y) !== null ? (u(), c("p", xu, [
        s("span", null, V(w(y)), 1)
      ])) : x("", !0)
    ], 2));
  }
}), Vu = /* @__PURE__ */ s("div", { class: "po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity" }, null, -1), ku = { class: "po-fixed po-z-10 po-inset-0" }, _u = { class: "po-flex po-justify-center po-items-start po-min-h-screen sm:po-px-4 sm:po-pt-10 sm:po-pb-20 po-text-center sm:po-block po-max-h-screen po-overflow-y-hidden" }, Cu = /* @__PURE__ */ s("span", {
  class: "po-hidden sm:po-inline-block sm:po-align-middle sm:po-h-screen",
  "aria-hidden": "true"
}, "​", -1), Su = { class: "po-flex po-items-center po-bg-white po-rounded-t-xl po-p-5" }, Pu = { class: "po-grow po-text-md po-font-bold po-text-slate-600" }, Ou = { class: "po-shrink-0" }, Lu = /* @__PURE__ */ s("div", { class: "po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200" }, null, -1), Tu = {
  key: 0,
  class: "po-bg-slate-50 po-rounded-b-xl"
}, Eu = {
  name: "PoModal"
}, xt = /* @__PURE__ */ L({
  ...Eu,
  props: {
    openBtnLabel: { default: "" },
    modalTitle: { default: "Modal windows" },
    show: { type: Boolean, default: !1 },
    modalWidth: { default: "sm:po-max-w-xl" },
    modalHeight: { default: "" }
  },
  emits: ["modal-closed"],
  setup(e, { emit: t }) {
    const o = e, { show: l } = xe(o), n = C(!1);
    Q(l, () => {
      n.value = l.value;
    });
    function a() {
      n.value = !1, t("modal-closed", !0);
    }
    const r = o.modalTitle.toLowerCase().replace(/\s+/g, "-"), i = new URLSearchParams(window.location.search);
    return n.value = i.get("modal") !== void 0 && i.get("modal") === r, (p, f) => (u(), c("div", null, [
      e.openBtnLabel.length > 0 ? (u(), j(w(To), {
        key: 0,
        label: e.openBtnLabel,
        onClick: f[0] || (f[0] = (d) => n.value = !0)
      }, null, 8, ["label"])) : x("", !0),
      (u(), j(ft, { to: "body" }, [
        S(w(bt), {
          as: "template",
          show: n.value
        }, {
          default: z(() => [
            S(w(Dt), {
              as: "div",
              class: "po-relative po-z-50",
              onClose: a
            }, {
              default: z(() => [
                S(w(je), {
                  as: "template",
                  enter: "po-ease-out po-duration-300",
                  "enter-from": "po-opacity-0",
                  "enter-to": "po-opacity-100",
                  leave: "po-ease-in po-duration-200",
                  "leave-from": "po-opacity-100",
                  "leave-to": "po-opacity-0"
                }, {
                  default: z(() => [
                    Vu
                  ]),
                  _: 1
                }),
                s("div", ku, [
                  s("div", _u, [
                    Cu,
                    S(w(je), {
                      as: "template",
                      enter: "po-ease-out po-duration-300",
                      "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                      "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                      leave: "po-ease-in po-duration-200",
                      "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                      "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                    }, {
                      default: z(() => [
                        S(w(It), {
                          class: P(["po-relative po-inline-block po-align-bottom po-bg-white sm:po-rounded-xl po-text-left po-shadow-xl po-transform po-transition-all sm:po-align-top po-w-full", e.modalWidth])
                        }, {
                          default: z(() => [
                            s("div", Su, [
                              s("h3", Pu, V(e.modalTitle), 1),
                              s("div", Ou, [
                                s("span", {
                                  role: "button",
                                  class: "po-block",
                                  onClick: a
                                }, [
                                  S(w(vt), { class: "po-w-5 po-stroke-slate-500 hover:po-stroke-mpao-orange po-transition-colors po-duration-150 po-ease-in-out" })
                                ])
                              ])
                            ]),
                            Lu,
                            s("div", {
                              class: P(["po-p-5 po-overflow-y-auto", [
                                {
                                  "po-max-h-[calc(100vh-220px)]": p.$slots.footer
                                },
                                {
                                  "po-max-h-[calc(100vh-145px)]": !p.$slots.footer
                                },
                                e.modalHeight
                              ]])
                            }, [
                              Y(p.$slots, "content")
                            ], 2),
                            p.$slots.footer ? (u(), c("div", Tu, [
                              Y(p.$slots, "footer")
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
function Bu(e, t) {
  return u(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", { d: "M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" }),
    s("path", { d: "M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" })
  ]);
}
function zu(e, t) {
  return u(), c("svg", {
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
function Mu(e, t) {
  return u(), c("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [
    s("path", { d: "M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.754 9.754 0 016.116-3.985z" })
  ]);
}
function Pn(e, t) {
  return u(), c("svg", {
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
function Au(e, t) {
  return u(), c("svg", {
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
const Du = ["for"], Iu = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, ju = ["title"], Ru = ["name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], Fu = ["id"], Nu = ["id"], Hu = {
  name: "PoTextarea"
}, qu = /* @__PURE__ */ L({
  ...Hu,
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
      let n = l.target.value;
      t("update:modelValue", n);
    };
    return (l, n) => (u(), c("div", {
      class: P(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      s("label", {
        for: e.id,
        class: "po-text-sm po-font-medium po-text-slate-700 po-flex po-items-center po-space-x-1"
      }, [
        s("span", null, V(e.label), 1),
        e.required ? (u(), c("span", Iu, "*")) : x("", !0),
        e.info !== null ? (u(), c("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          S(w(Pn))
        ], 8, ju)) : x("", !0)
      ], 8, Du),
      s("textarea", ke({
        name: `${e.id}-field`,
        id: e.id,
        value: e.modelValue,
        placeholder: e.placeholder,
        disabled: e.disabled,
        required: e.required,
        "aria-describedby": `${e.id}-description`,
        "aria-required": e.required,
        "aria-disabled": e.disabled
      }, l.$attrs, {
        onInput: o,
        class: "po-mt-1 po-peer po-px-3 po-py-2 po-block po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-border-slate-300 po-bg-white focus:po-border-mpao-lightblue focus:po-ring-0 invalid:po-border-red-400 invalid:po-focus:border-red-600 invalid:focus:po-ring-red-600 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default"
      }), null, 16, Ru),
      e.message !== null ? (u(), c("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, V(e.message), 9, Fu)) : x("", !0),
      e.errorMessage !== null ? (u(), c("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, V(e.errorMessage), 9, Nu)) : x("", !0)
    ], 2));
  }
}), Wu = { class: "shell-sidebar--icon" }, Uu = /* @__PURE__ */ s("span", { class: "shell-sidebar--label po-font-medium" }, "Feedback", -1), Gu = { action: "" }, Zu = /* @__PURE__ */ s("br", null, null, -1), Ku = { class: "po-p-5" }, Yu = /* @__PURE__ */ L({
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
    return (n, a) => (u(), c(I, null, [
      s("button", {
        onClick: a[0] || (a[0] = re(() => t.value = !0, ["prevent"])),
        class: "shell-sidebar--item",
        title: "Go to feedback"
      }, [
        s("span", Wu, [
          S(w(la), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" })
        ]),
        Uu
      ]),
      S(xt, {
        show: t.value,
        onModalClosed: a[3] || (a[3] = () => t.value = !1),
        "modal-title": "Feedback"
      }, {
        content: z(() => [
          s("form", Gu, [
            S($u, {
              label: "Type",
              list: o,
              modelValue: l.value.type,
              "onUpdate:modelValue": a[1] || (a[1] = (r) => l.value.type = r)
            }, null, 8, ["modelValue"]),
            Zu,
            S(qu, {
              cols: "6",
              rows: "6",
              label: "Description",
              modelValue: l.value.message,
              "onUpdate:modelValue": a[2] || (a[2] = (r) => l.value.message = r)
            }, null, 8, ["modelValue"])
          ])
        ]),
        footer: z(() => [
          s("div", Ku, [
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
}), Xu = { class: "shell-sidebar" }, Qu = { class: "po-grow" }, Ju = { class: "shell-sidebar--menu" }, ep = ["onClick"], tp = { class: "shell-sidebar--icon" }, op = { class: "shell-sidebar--label po-font-medium po-text-left" }, lp = { key: 0 }, np = { class: "shell-sidebar--menu sidebar-apps po-shrink-0 po-mb-0" }, ap = ["onClick"], sp = { class: "shell-sidebar--icon" }, rp = ["innerHTML"], ip = { class: "shell-sidebar--label po-font-medium po-text-left" }, up = {
  key: 0,
  class: "shell-sidebar--menu po-shrink-0 po-mb-0 po-border-t po-border-slate-200 po-pt-3"
}, pp = {
  name: "PoSidebarDrawer"
}, Q4 = /* @__PURE__ */ L({
  ...pp,
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
      var y, h;
      let d = [];
      const m = (y = o.apps) == null ? void 0 : y.filter((b) => b.code == o.appCode)[0];
      if (m) {
        let b = (h = o.apps) == null ? void 0 : h.filter(
          (g) => m.related.includes(g.code)
        );
        b == null || b.forEach((g) => {
          d.push(g);
        });
      }
      return d;
    }), n = C(null), a = C();
    function r() {
      window.innerWidth <= 1024 && n.value && (n.value.checked = !n.value.checked, a.value = n.value.checked);
    }
    G(() => {
      var d;
      a.value = (d = n.value) == null ? void 0 : d.checked;
    });
    function i(d, m) {
      t(d, m), r();
    }
    function p() {
      n.value && (a.value = n.value.checked);
    }
    function f(d) {
      return a.value ? "" : d;
    }
    return (d, m) => {
      var y;
      return u(), c(I, null, [
        s("input", {
          type: "checkbox",
          name: "",
          class: "po-hidden shell-sidebar--toggle",
          role: "none",
          id: "sidebar-drawer-toggle",
          checked: "",
          "aria-checked": "true",
          ref_key: "sidebarToggle",
          ref: n,
          onClick: p
        }, null, 512),
        s("aside", Xu, [
          s("div", Qu, [
            (u(!0), c(I, null, U(e.content, (h, b) => (u(), c("div", {
              key: `sidebar-group-${b}`
            }, [
              S(w(ll), { defaultOpen: !0 }, {
                default: z(({ open: g }) => [
                  h.groupName ? (u(), j(w(nl), {
                    key: 0,
                    class: P([g ? "" : "po-mb-3", "shell-sidebar--section po-w-full po-text-left"])
                  }, {
                    default: z(() => [
                      J(V(h.groupName), 1)
                    ]),
                    _: 2
                  }, 1032, ["class"])) : x("", !0),
                  S(De, {
                    "enter-active-class": "po-transition po-duration-100 po-ease-out",
                    "enter-from-class": "po-transform po-scale-95 po-opacity-0",
                    "enter-to-class": "po-transform po-scale-100 po-opacity-100",
                    "leave-active-class": "po-transition po-duration-75 po-ease-out",
                    "leave-from-class": "po-transform po-scale-100 po-opacity-100",
                    "leave-to-class": "po-transform po-scale-95 po-opacity-0"
                  }, {
                    default: z(() => [
                      S(w(al), null, {
                        default: z(() => [
                          s("ul", Ju, [
                            (u(!0), c(I, null, U(h.items, (v) => (u(), c("li", {
                              key: v.label
                            }, [
                              s("span", null, [
                                S(w(vo), {
                                  text: f(v.label),
                                  placement: "right",
                                  strategy: "fixed"
                                }, {
                                  default: z(() => [
                                    v.disabled ? x("", !0) : (u(), c("button", {
                                      key: 0,
                                      onClick: ($) => i("button-click", v.url),
                                      class: P([
                                        "shell-sidebar--item",
                                        { active: v.url == e.currRoute }
                                      ])
                                    }, [
                                      s("span", tp, [
                                        (u(), j(de(v.icon), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" }))
                                      ]),
                                      s("span", op, V(v.label), 1)
                                    ], 10, ep))
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
            ((y = w(l)) == null ? void 0 : y.length) > 0 ? (u(), c("div", lp, [
              S(w(ll), { defaultOpen: !0 }, {
                default: z(({ open: h }) => [
                  e.appsLabel ? (u(), j(w(nl), {
                    key: 0,
                    class: P([h ? "" : "po-mb-3", "shell-sidebar--section po-w-full po-text-left"])
                  }, {
                    default: z(() => [
                      J(V(e.appsLabel), 1)
                    ]),
                    _: 2
                  }, 1032, ["class"])) : x("", !0),
                  S(De, {
                    "enter-active-class": "po-transition po-duration-100 po-ease-out",
                    "enter-from-class": "po-transform po-scale-95 po-opacity-0",
                    "enter-to-class": "po-transform po-scale-100 po-opacity-100",
                    "leave-active-class": "po-transition po-duration-75 po-ease-out",
                    "leave-from-class": "po-transform po-scale-100 po-opacity-100",
                    "leave-to-class": "po-transform po-scale-95 po-opacity-0"
                  }, {
                    default: z(() => [
                      S(w(al), null, {
                        default: z(() => [
                          s("ul", np, [
                            (u(!0), c(I, null, U(w(l), (b, g) => (u(), c("li", null, [
                              S(w(vo), {
                                text: f(b.name),
                                placement: "right",
                                strategy: "fixed"
                              }, {
                                default: z(() => [
                                  s("button", {
                                    onClick: (v) => i("app-click", b.name),
                                    class: P(["shell-sidebar--item", [{ active: b.current }]]),
                                    title: "Go to feedback"
                                  }, [
                                    s("span", sp, [
                                      s("span", {
                                        innerHTML: b.icon,
                                        class: "po-text-slate-600 po-w-5"
                                      }, null, 8, rp)
                                    ]),
                                    s("span", ip, V(b.name), 1)
                                  ], 10, ap)
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
            ])) : x("", !0)
          ]),
          e.hasFeedback ? (u(), c("ul", up, [
            s("li", null, [
              S(Yu)
            ])
          ])) : x("", !0)
        ])
      ], 64);
    };
  }
}), cp = {
  key: 0,
  class: "shell-content--action-bar"
}, dp = { class: "action-bar__nav" }, fp = ["onClick"], vp = { class: "action-bar__nav_label po-font-medium" }, hp = {
  key: 0,
  class: "po-shrink-0 po-flex po-space-x-1"
}, mp = /* @__PURE__ */ s("span", { class: "action-bar__nav_label po-font-medium" }, "Go Back", -1), bp = {
  name: "PoActionBar"
}, J4 = /* @__PURE__ */ L({
  ...bp,
  props: {
    items: { default: null },
    showBackButton: { type: Boolean, default: !1 },
    currPageRoute: { default: "" }
  },
  setup(e) {
    return (t, o) => e.items !== null && e.items.length > 0 || e.showBackButton ? (u(), c("section", cp, [
      s("nav", dp, [
        (u(!0), c(I, null, U(e.items, (l) => (u(), c("span", {
          onClick: (n) => t.$emit("button-click", l.label),
          class: P([[
            { "action-bar__nav_highlighted": l.highlighted },
            { "action-bar__nav_danger": l.danger }
          ], "action-bar__nav_link"])
        }, [
          (u(), j(de(l.icon), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" })),
          s("span", vp, V(l.label), 1)
        ], 10, fp))), 256))
      ]),
      e.showBackButton ? (u(), c("nav", hp, [
        s("span", {
          onClick: o[0] || (o[0] = (l) => t.$emit("button-click", "back")),
          class: "action-bar__nav_link"
        }, [
          mp,
          (u(), j(de(w(Qn)), { class: "po-stroke-current po-w-5 po-h-5 po-stroke-2" }))
        ])
      ])) : x("", !0)
    ])) : x("", !0);
  }
}), gp = { class: "po-shadow-sm po-rounded-xl po-bg-white po-relative" }, yp = {
  key: 0,
  class: "po-absolute po-right-2 po-top-2 po-p-2 po-rounded-lg"
}, xp = {
  key: 0,
  class: "po-text-base po-font-medium po-text-slate-600"
}, wp = {
  key: 1,
  class: "lg:po-col-span-2 lg:po-flex lg:po-justify-end po-space-x-2"
}, $p = {
  name: "PoCard"
}, e2 = /* @__PURE__ */ L({
  ...$p,
  props: {
    title: { default: "" },
    isLoading: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, o) => (u(), c("div", gp, [
      e.isLoading ? (u(), c("div", yp, [
        S(Nt)
      ])) : x("", !0),
      s("div", {
        class: P([
          { "po-grid po-grid-cols-1 lg:po-grid-cols-3 po-gap-3": t.$slots.action }
        ])
      }, [
        e.title.length > 0 ? (u(), c("h3", xp, V(e.title), 1)) : x("", !0),
        t.$slots.action ? (u(), c("div", wp, [
          Y(t.$slots, "action")
        ])) : x("", !0)
      ], 2),
      Y(t.$slots, "content")
    ]));
  }
}), Vp = { class: "po-py-3 po-px-5 po-border-b po-border-slate-200" }, kp = {
  class: "po-flex po-w-full md:po-ml-0",
  action: "#",
  method: "GET"
}, _p = {
  for: "search-field",
  class: "po-sr-only"
}, Cp = { class: "po-relative po-w-full po-text-slate-400 focus-within:po-text-mpao-lightblue po-transition-colors po-duration-100 po-ease-in-out" }, Sp = { class: "po-pointer-events-none po-absolute po-inset-y-0 po-left-0 po-flex po-items-center" }, Pp = ["placeholder", "value"], Op = ["disabled"], Lp = {
  name: "PoCardSearch"
}, t2 = /* @__PURE__ */ L({
  ...Lp,
  props: {
    modelValue: { default: "" },
    placeholder: { default: "Search" },
    showBtn: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "button-click"],
  setup(e, { emit: t }) {
    return (o, l) => (u(), c("div", Vp, [
      s("form", kp, [
        s("label", _p, V(e.placeholder), 1),
        s("div", Cp, [
          s("div", Sp, [
            S(w(yo), { class: "po-h-5 po-w-5 po-flex-shrink-0" })
          ]),
          s("input", {
            name: "search-field",
            id: "desktop-search-field",
            placeholder: e.placeholder,
            value: e.modelValue,
            onInput: l[0] || (l[0] = (n) => o.$emit("update:modelValue", n.target.value)),
            class: "po-h-full po-w-full po-border-transparent po-py-2 po-pl-8 po-pr-3 po-text-sm po-text-slate-700 po-placeholder-slate-500 focus:po-border-transparent focus:po-placeholder-slate-400 focus:po-outline-none focus:po-ring-0",
            type: "search"
          }, null, 40, Pp),
          e.showBtn ? (u(), c("button", {
            key: 0,
            class: P(["po-absolute po-right-0 po-text-sm po-rounded-full po-px-3 po-py-2 po-transition-colors po-duration-150 po-ease-out", [
              { "po-bg-mpao-lightblue po-text-white": e.modelValue !== "" },
              { "po-bg-slate-100 po-text-slate-400": e.modelValue === "" }
            ]]),
            disabled: e.modelValue === "",
            onClick: l[1] || (l[1] = re((n) => o.$emit("button-click", e.modelValue), ["prevent"]))
          }, " Search ", 10, Op)) : x("", !0)
        ])
      ])
    ]));
  }
}), Tp = { class: "po-flex po-items-center" }, Ep = { class: "po-text-sm po-font-medium po-text-slate-500 po-pr-2" }, Bp = {
  name: "PoPagination"
}, zp = /* @__PURE__ */ L({
  ...Bp,
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
    function n() {
      t("button-click", "next"), t("next-click", !0);
    }
    const a = B(() => o.totalPages ? `Page ${o.currentPage} of ${o.totalPages}` : o.pagination ? o.pagination.label : "");
    return (r, i) => (u(), c("div", Tp, [
      s("span", Ep, V(w(a)), 1),
      s("button", {
        title: "Previous",
        onClick: l,
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        S(w(sa), { class: "po-w-4 po-stroke-current po-stroke-2" })
      ]),
      s("button", {
        title: "Next",
        onClick: n,
        class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
      }, [
        S(w(ra), { class: "po-w-4 po-stroke-current po-stroke-2" })
      ])
    ]));
  }
}), Mp = { key: 0 }, Ap = {
  class: "po-text-xl md:po-text-2xl po-font-semibold po-text-slate-800",
  id: "po-page-title"
}, Dp = {
  key: 0,
  class: "po-text-base po-mt-2 po-max-w-md po-block po-text-slate-500"
}, Ip = { key: 1 }, jp = { class: "po-grid po-grid-cols-1 lg:po-grid-cols-2 po-gap-5" }, Rp = {
  class: "po-text-xl md:po-text-2xl po-font-semibold po-text-slate-800",
  id: "po-page-title"
}, Fp = {
  key: 0,
  class: "po-text-base po-mt-4 po-max-w-md po-pb-5 po-block po-text-slate-500"
}, Np = { class: "po-flex po-items-end po-justify-end po-flex-col" }, Hp = {
  key: 0,
  class: "po-flex md:po-justify-end po-mb-5"
}, qp = { class: "po-bg-slate-50 po-shadow-sm po-rounded-xl po-py-5 po-px-2 po-divide-x po-divide-slate-200 po-flex" }, Wp = ["onClick"], Up = { class: "po-text-xl po-font-medium po-text-slate-600 po-flex po-items-center po-space-x-1" }, Gp = { class: "po-text-xl po-font-medium po-text-slate-600 group-hover:po-text-mpao-lightblue" }, Zp = { class: "po-text-sm po-text-slate-500 po-block group-hover:po-text-mpao-lightblue" }, Kp = { class: "po-flex po-items-center po-space-x-1 md:po-justify-end" }, Yp = {
  key: 2,
  class: "po-border-l po-border-slate-400 po-h-3 po-w-3 po-ml-1"
}, Xp = {
  key: 0,
  class: "po-bg-slate-50 po-p-5 po-mt-5 po-rounded-md po-grid po-grid-cols-1 md:po-grid-cols-3 po-gap-5"
}, Qp = /* @__PURE__ */ s("span", { class: "po-text-xs po-text-slate-500 po-py-5" }, "No filters available at the moment.", -1), Jp = {
  name: "PoPageTitle"
}, o2 = /* @__PURE__ */ L({
  ...Jp,
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
    function n(r) {
      t("pagination-click", r);
    }
    function a(r) {
      return r.iconColor ? r.iconColor : "po-slate-600";
    }
    return (r, i) => e.standAlone ? (u(), c("div", Mp, [
      s("h1", Ap, V(e.label), 1),
      e.description !== "" ? (u(), c("span", Dp, V(e.description), 1)) : x("", !0)
    ])) : (u(), c("div", Ip, [
      s("div", jp, [
        s("div", null, [
          s("h1", Rp, V(e.label), 1),
          e.description !== "" ? (u(), c("span", Fp, V(e.description), 1)) : x("", !0)
        ]),
        s("div", Np, [
          e.stats !== null ? (u(), c("div", Hp, [
            s("div", qp, [
              (u(!0), c(I, null, U(e.stats, (p) => (u(), c("div", {
                class: "po-px-5 po-cursor-pointer po-group genie-effect",
                onClick: (f) => r.$emit("stat-click", p)
              }, [
                s("span", Up, [
                  s("span", Gp, V(p.value), 1),
                  p.icon ? (u(), c("span", {
                    key: 0,
                    class: P(["po-w-5 po-h-5", a(p)])
                  }, [
                    (u(), j(de(p.icon)))
                  ], 2)) : x("", !0)
                ]),
                s("span", Zp, V(p.label), 1)
              ], 8, Wp))), 256))
            ])
          ])) : x("", !0),
          s("div", Kp, [
            e.showFilter ? (u(), c("button", {
              key: 0,
              title: "Filter",
              onClick: i[0] || (i[0] = (p) => {
                r.$emit("button-click", "filter"), l.value = !w(l);
              }),
              class: P([
                "po-p-2 po-rounded-md hover:po-bg-slate-200 po-transition-colors po-duration-75 po-ease-in-out",
                { "po-text-mpao-orange hover:po-text-mpao-orange": w(l) },
                { "tpo-ext-slate-600 hover:po-text-mpao-blue": !w(l) }
              ])
            }, [
              S(w(ua), { class: "po-w-4 po-stroke-current po-stroke-2" })
            ], 2)) : x("", !0),
            e.showDownload ? (u(), c("button", {
              key: 1,
              title: "Download",
              onClick: i[1] || (i[1] = (p) => r.$emit("button-click", "download")),
              class: "po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out"
            }, [
              S(w(Yn), { class: "po-w-4 po-stroke-current po-stroke-2" })
            ])) : x("", !0),
            e.showFilter && e.showPagination || e.showDownload && e.showPagination ? (u(), c("span", Yp, " ")) : x("", !0),
            e.showPagination ? (u(), j(zp, {
              key: 3,
              pagination: e.pagination,
              onButtonClick: n
            }, null, 8, ["pagination"])) : x("", !0)
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
          w(l) ? (u(), c("div", Xp, [
            Y(r.$slots, "filters", {}, () => [
              Qp
            ])
          ])) : x("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), ec = {
  key: 0,
  class: "po-w-12"
}, tc = ["onClick"], oc = { class: "po-flex po-space-x-1 po-pr-2 po-items-center" }, lc = { class: "po-grow" }, nc = {
  key: 0,
  class: "po-shrink-0 po-select-none po-bg-slate-100 po-rounded-md po-w-4 po-h-4 po-flex po-items-center po-justify-center po-cursor-pointer",
  role: "button"
}, ac = {
  key: 0,
  class: "po-w-12"
}, sc = ["onClick"], rc = ["colspan"], ic = { key: 1 }, uc = ["colspan"], pc = { class: "po-py-10 po-block po-normal-case" }, cc = { class: "po-pr-5" }, dc = { class: "po-py-1" }, fc = { key: 0 }, vc = {
  name: "PoTable",
  components: { ArrowRightCircleIcon: un }
}, l2 = /* @__PURE__ */ L({
  ...vc,
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
    const o = e, { isLoading: l, tbody: n, thead: a } = xe(o), r = C(!1), i = C(null), p = C(null), f = C(null);
    Q(l, () => {
      d();
    }), Q(n, () => {
      d(), m();
    }), G(() => {
      d(), m(), i.value = a.value;
    });
    function d() {
      r.value = l.value, p.value = n.value, l.value && (p.value = [{}, {}, {}, {}, {}]);
    }
    function m() {
      if (o.hasDetailsRow && o.tbody)
        for (let b = 0; b < o.tbody.length; b++)
          o.tbody[b].showDetails = !1;
    }
    function y() {
      return Math.floor(Math.random() * 41) + 40;
    }
    const h = (b, g) => {
      var v;
      b.sortable && (b.sorted && f.value === "asc" ? f.value = "desc" : f.value = "asc", (v = i.value) == null || v.forEach(($) => {
        $.label === b.label ? ($.sorted = !0, $.sortDirection = f.value, $.index = g) : ($.sorted = !1, $.sortDirection = null);
      }), t("column-click", b));
    };
    return (b, g) => (u(), c("table", {
      class: P(["table-responsive po-w-full", [{ lg: e.breakAtLg }]])
    }, [
      s("thead", null, [
        s("tr", null, [
          e.hasDetailsRow ? (u(), c("th", ec)) : x("", !0),
          (u(!0), c(I, null, U(i.value, (v, $) => (u(), c("th", {
            onClick: (_) => h(v, $)
          }, [
            s("span", oc, [
              s("span", lc, [
                Y(b.$slots, "th", Xe(Qe(v)))
              ]),
              v.sortable ? (u(), c("span", nc, [
                v.sorted ? x("", !0) : (u(), j(w(Or), {
                  key: 0,
                  class: "po-w-3 po-h-3"
                })),
                v.sorted && v.sortDirection === "asc" ? (u(), j(w(Pr), {
                  key: 1,
                  class: "po-w-3 po-h-3"
                })) : x("", !0),
                v.sorted && v.sortDirection === "desc" ? (u(), j(w(Sr), {
                  key: 2,
                  class: "po-w-3 po-h-3"
                })) : x("", !0)
              ])) : x("", !0)
            ])
          ], 8, tc))), 256))
        ])
      ]),
      s("tbody", null, [
        p.value !== null && !r.value || p.value !== null && p.value.length !== 0 && !r.value ? (u(!0), c(I, { key: 0 }, U(p.value, (v, $) => (u(), c(I, null, [
          s("tr", null, [
            e.hasDetailsRow ? (u(), c("td", ac, [
              s("span", {
                onClick: (_) => v.showDetails = !v.showDetails
              }, [
                S(w(un), {
                  class: P(["po-w-5 po-fill-mpao-lightblue po-origin-center po-transition-transform po-duration-100 po-ease-out po-cursor-pointer", [{ "po-rotate-90": v.showDetails }]])
                }, null, 8, ["class"])
              ], 8, sc)
            ])) : x("", !0),
            Y(b.$slots, "td", Xe(Qe({ ...v, index: $, item: v })))
          ]),
          e.hasDetailsRow ? (u(), c("tr", {
            key: 0,
            class: P(["po-table-details-row", [{ "po-hidden": !v.showDetails }]])
          }, [
            w(a) ? (u(), c("td", {
              key: 0,
              colspan: w(a).length + 1
            }, [
              Y(b.$slots, "details", Xe(Qe({ item: v })))
            ], 8, rc)) : x("", !0)
          ], 2)) : x("", !0)
        ], 64))), 256)) : x("", !0),
        p.value == null && !r.value || p.value !== null && p.value.length == 0 && !r.value ? (u(), c("tr", ic, [
          w(a) ? (u(), c("td", {
            key: 0,
            colspan: w(a).length + 1,
            class: "po-text-center"
          }, [
            s("span", pc, V(e.emptyMessage), 1)
          ], 8, uc)) : x("", !0)
        ])) : x("", !0),
        r.value ? (u(!0), c(I, { key: 2 }, U(p.value, (v) => (u(), c("tr", null, [
          (u(!0), c(I, null, U(w(a), ($) => (u(), c("td", cc, [
            s("div", dc, [
              s("div", {
                class: "po-h-2 loading-placeholder po-rounded-full",
                style: bo({ width: y() + "%" })
              }, null, 4)
            ])
          ]))), 256))
        ]))), 256)) : x("", !0)
      ]),
      b.$slots.tfoot ? (u(), c("tfoot", fc, [
        s("tr", null, [
          Y(b.$slots, "tfoot")
        ])
      ])) : x("", !0)
    ], 2));
  }
}), hc = { class: "" }, mc = { class: "po-grow" }, bc = ["onClick"], gc = {
  name: "PoDescriptionList"
}, yc = /* @__PURE__ */ L({
  ...gc,
  props: {
    items: { default: null },
    striped: { type: Boolean, default: !1 },
    columns: { type: Boolean, default: !0 }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, l) => (u(), c("div", null, [
      s("dl", {
        class: P([
          "po-description-list",
          { "po-divide-y po-divide-slate-200": !e.striped },
          { striped: e.striped },
          { "no-col": !e.columns }
        ])
      }, [
        Y(o.$slots, "content", {}, () => [
          (u(!0), c(I, null, U(e.items, (n) => (u(), c("div", null, [
            s("dt", null, V(n.title), 1),
            s("dd", hc, [
              s("span", mc, V(n.description), 1),
              n.action !== void 0 ? (u(), c("span", {
                key: 0,
                class: "po-shrink-0 po-text-mpao-lightblue hover:po-text-mpao-blue po-transition-colors po-duration-100 po-ease-in-out po-px-2 po-cursor-pointer",
                onClick: (a) => o.$emit("button-click", n.action)
              }, V(typeof n.action == "string" ? n.action : n.action.label), 9, bc)) : x("", !0)
            ])
          ]))), 256))
        ])
      ], 2)
    ]));
  }
}), xc = ["for"], wc = { class: "po-capitalize" }, $c = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Vc = ["title"], kc = ["type", "name", "id", "value", "placeholder", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], _c = ["id"], Cc = ["id"], Sc = {
  name: "PoInputField"
}, n2 = /* @__PURE__ */ L({
  ...Sc,
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
    borderColor: { default: "po-border-slate-300 focus:po-border-mpao-lightblue" }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const o = e;
    function l() {
      return o.hasError ? "po-border-red-400 focus:po-border-red-600 focus:po-ring-red-600" : o.borderColor;
    }
    const { errorMessage: n } = xe(o), a = C(n.value !== null);
    Q(n, (y, h) => {
      a.value = n.value !== null && n.value !== "";
    }), Q(n, (y, h) => {
      a.value = n.value !== null && n.value !== "";
    });
    let r = o.type === "currency" ? "text" : o.type;
    const i = C(void 0), p = (y) => {
      let h = y.target.value;
      i.value = h;
      let b = o.type === "currency" ? d(h) : h;
      t("update:modelValue", b);
    };
    Q(o, (y, h) => {
      o.type === "currency" && i.value !== h.modelValue ? i.value = "" + Qo(o.modelValue) : i.value = o.modelValue;
    });
    const f = (y) => {
      let h = "";
      o.type === "currency" ? h = "" + Qo(d("" + y)) : h = y, i.value = h;
    }, d = (y) => {
      let h = y.replace(/,/g, "");
      const b = h.indexOf(".");
      return b !== -1 && h.substring(b + 1) === "00" && (h = h.substring(0, b)), h;
    };
    o.type === "currency" ? f(o.modelValue) : i.value = o.modelValue;
    const m = C("");
    return G(() => {
      o.id === "" ? m.value = o.id ? o.id : `${o.label.replace(
        /\s/g,
        ""
      )}-${Date.now()}-inputfield-${Math.floor(Math.random() * 9e3)}` : m.value = o.id;
    }), (y, h) => (u(), c("div", {
      class: P(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      s("label", {
        for: m.value,
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700"
      }, [
        s("span", wc, V(e.label), 1),
        e.required ? (u(), c("span", $c, "*")) : x("", !0),
        e.info !== null ? (u(), c("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          S(w(Ht), { class: "po-fill-current" })
        ], 8, Vc)) : x("", !0)
      ], 8, xc),
      s("input", ke({
        type: w(r),
        name: `${m.value}-field`,
        id: m.value,
        value: i.value,
        placeholder: e.placeholder,
        disabled: e.disabled,
        required: e.required,
        "aria-describedby": `${m.value}-description`,
        "aria-required": e.required,
        "aria-disabled": e.disabled
      }, y.$attrs, {
        onInput: p,
        onBlur: h[0] || (h[0] = (b) => f(b.target.value)),
        class: [
          "po-mt-1 peer po-block po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white focus:po-ring-0 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default",
          l()
        ]
      }), null, 16, kc),
      e.message !== null ? (u(), c("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, V(e.message), 9, _c)) : x("", !0),
      a.value && w(n) !== null ? (u(), c("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
        id: `${e.id}-error`
      }, [
        s("span", null, V(w(n)), 1)
      ], 8, Cc)) : x("", !0)
    ], 2));
  }
}), Pc = { class: "po-text-sm po-font-medium po-text-slate-700 peer-focus:po-text-mpao-lightblue peer-invalid:po-text-red-500 peer-invalid:peer-focus:po-text-red-600 po-flex po-items-center po-space-x-1 po-capitalize" }, Oc = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Lc = ["name", "id", "value"], Tc = ["for"], Ec = { class: "po-flex po-items-center po-space-x-1" }, Bc = {
  key: 0,
  class: "po-text-sm"
}, zc = {
  key: 1,
  class: "po-text-sm"
}, Mc = ["id"], Ac = ["id"], Dc = {
  name: "PoInputFile"
}, a2 = /* @__PURE__ */ L({
  ...Dc,
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
    const l = C(""), n = (r) => {
      var p, f;
      const i = (f = (p = r.target) == null ? void 0 : p.files) == null ? void 0 : f[0];
      l.value = i ? i.name : "";
    }, a = (r) => {
      let i = r.target.value;
      t("update:modelValue", i);
    };
    return (r, i) => (u(), c("div", {
      class: P(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      s("span", Pc, [
        s("span", null, V(e.label), 1),
        e.required ? (u(), c("span", Oc, "*")) : x("", !0)
      ]),
      s("input", {
        name: `${e.id}-upload`,
        id: `${e.id}-fileupload`,
        value: e.modelValue,
        type: "file",
        onInput: a,
        onChange: i[0] || (i[0] = (p) => n(p)),
        class: "po-sr-only po-peer"
      }, null, 40, Lc),
      s("label", {
        for: `${e.id}-fileupload`,
        class: "po-mt-1 po-block po-w-full po-border po-cursor-pointer po-rounded-md po-border-slate-300 po-bg-white peer-focus:po-border-mpao-lightblue invalid:po-border-red-400 invalid:focus:po-border-red-600 invalid:focus:po-ring-red-600 sm:po-text-sm po-p-2"
      }, [
        s("div", Ec, [
          S(w(Lt), { class: "po-w-4 po-stroke-slate-500" }),
          l.value ? (u(), c("span", Bc, V(l.value), 1)) : (u(), c("span", zc, "Choose file"))
        ])
      ], 8, Tc),
      e.message !== null ? (u(), c("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, V(e.message), 9, Mc)) : x("", !0),
      e.errorMessage !== null ? (u(), c("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, V(e.errorMessage), 9, Ac)) : x("", !0)
    ], 2));
  }
}), Ic = { class: "po-text-sm po-font-medium po-text-slate-700 po-cursor-pointer po-select-none po-flex po-items-center po-space-x-1" }, jc = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Rc = {
  name: "PoToggle"
}, s2 = /* @__PURE__ */ L({
  ...Rc,
  props: {
    modelValue: { type: Boolean, default: !1 },
    label: { default: "" },
    required: { type: Boolean, default: !1 }
  },
  setup(e) {
    const o = C(e.modelValue);
    return (l, n) => (u(), j(w(ws), {
      as: "div",
      class: "po-flex po-items-center"
    }, {
      default: z(() => [
        S(w($s), {
          modelValue: o.value,
          "onUpdate:modelValue": n[0] || (n[0] = (a) => o.value = a),
          onClick: n[1] || (n[1] = (a) => l.$emit("update:modelValue", !o.value)),
          class: P([
            o.value ? "po-bg-mpao-lightblue" : "po-bg-slate-200",
            "po-relative po-inline-flex po-h-6 po-w-11 po-flex-shrink-0 po-cursor-pointer po-rounded-full po-border-2 po-border-transparent po-transition-colors po-duration-200 po-ease-in-out focus:po-outline-none focus:po-ring-2 focus:po-ring-mpao-lightblue focus:po-ring-offset-2"
          ])
        }, {
          default: z(() => [
            s("span", {
              "aria-hidden": "true",
              class: P([
                o.value ? "po-translate-x-5" : "po-translate-x-0",
                "po-pointer-events-none po-inline-block po-h-5 po-w-5 po-transform po-rounded-full po-bg-white po-shadow po-ring-0 po-transition po-duration-200 po-ease-in-out"
              ])
            }, null, 2)
          ]),
          _: 1
        }, 8, ["modelValue", "class"]),
        S(w(Vs), {
          as: "span",
          class: "po-ml-3"
        }, {
          default: z(() => [
            s("span", Ic, [
              s("span", null, V(e.label), 1),
              e.required ? (u(), c("span", jc, "*")) : x("", !0)
            ])
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
}), Fc = { class: "po-pt-1 po-space-y-1 po-border-r-2 po-border-slate-200 po-relative" }, Nc = ["onClick"], Hc = {
  name: "PoSectionMenu"
}, r2 = /* @__PURE__ */ L({
  ...Hc,
  props: {
    currPageRoute: { default: "" },
    menuItems: { default: null }
  },
  setup(e) {
    return (t, o) => (u(), c("ul", Fc, [
      (u(!0), c(I, null, U(e.menuItems, (l) => (u(), c("li", null, [
        s("span", {
          onClick: (n) => t.$emit("link-click", l.link),
          role: "button",
          class: P([
            "po-relative po-cursor-pointer -po-right-[0.15rem] po-py-1 po-border-r-2 hover:po-border-mpao-lightblue po-transition-colors po-duration-200 po-ease-in-out po-flex po-items-center po-space-x-2",
            {
              "po-border-mpao-lightblue po-text-sm po-text-mpao-lightblue": l.link == e.currPageRoute
            },
            {
              "po-border-slate-200 po-text-sm po-text-slate-600": l.link !== e.currPageRoute
            }
          ])
        }, [
          (u(), j(de(l.icon), { class: "po-w-4 po-h-4 po-stroke-current" })),
          s("span", null, V(l.label), 1)
        ], 10, Nc)
      ]))), 256))
    ]));
  }
}), qc = { class: "po-relative po-flex po-items-start" }, Wc = { class: "po-flex po-h-5 po-items-center" }, Uc = ["name", "id", "checked", "disabled", "aria-describedby"], Gc = { class: "po-ml-3 po-text-sm" }, Zc = ["for"], Kc = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Yc = ["id"], Xc = { class: "po-sr-only" }, Qc = ["id"], Jc = {
  name: "PoCheckbox"
}, i2 = /* @__PURE__ */ L({
  ...Jc,
  props: {
    modelValue: { type: Boolean, default: !1 },
    label: { default: "" },
    id: { default: "checkbox-0" },
    message: { default: null },
    errorMessage: { default: null },
    disabled: { type: Boolean, default: !1 },
    required: { type: Boolean, default: !1 }
  },
  setup(e) {
    return (t, o) => (u(), c("div", null, [
      s("div", qc, [
        s("div", Wc, [
          s("input", ke({
            name: `${e.id}-field`,
            id: e.id,
            checked: e.modelValue,
            disabled: e.disabled,
            "aria-describedby": `${e.id}-description`
          }, t.$attrs, {
            onInput: o[0] || (o[0] = (l) => t.$emit("update:modelValue", l.target.checked)),
            type: "checkbox",
            class: ["po-h-4 po-w-4 po-rounded po-border-slate-300 po-text-mpao-lightblue focus:po-ring-mpao-lightblue", [{ "po-bg-slate-200": e.disabled }]]
          }), null, 16, Uc)
        ]),
        s("div", Gc, [
          s("label", {
            for: e.id,
            class: "po-font-medium po-text-slate-600 po-cursor-pointer po-select-none po-flex po-items-center po-space-x-1"
          }, [
            s("span", null, V(e.label), 1),
            e.required ? (u(), c("span", Kc, "*")) : x("", !0)
          ], 8, Zc),
          e.message ? (u(), c("span", {
            key: 0,
            id: `${e.id}-description`,
            class: "po-text-slate-500 po-cursor-default"
          }, [
            s("span", Xc, V(e.label), 1),
            J(" " + V(e.message), 1)
          ], 8, Yc)) : x("", !0)
        ])
      ]),
      e.errorMessage !== null ? (u(), c("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-red-600",
        id: `${e.id}-error`
      }, V(e.errorMessage), 9, Qc)) : x("", !0)
    ]));
  }
}), ed = /* @__PURE__ */ s("div", { class: "po-pb-5 po-max-w-xl" }, [
  /* @__PURE__ */ s("span", { class: "po-text-sm po-text-slate-600" }, "We're always working to improve our app, and we're excited to share the latest changes with you. We hope you enjoy these new features and improvements")
], -1), td = { class: "po-flex po-space-x-2" }, od = ["onClick"], ld = { class: "po-text-sm po-font-semibold po-slate-800" }, nd = { class: "po-text-xs po-text-white po-px-1 po-py-0 po-rounded-md po-bg-mpao-lightblue" }, ad = { class: "po-bg-gradient-to-t po-from-mpao-orange/20 po-via-mpao-lightblue/20 po-to-purple-500/10 -po-mb-5 -po-mx-5 po-p-5 po-pb-10" }, sd = { key: 0 }, rd = { class: "po-space-y-2 po-mt-5" }, id = { class: "po-border po-border-slate-200 po-rounded-lg po-p-3 po-bg-white" }, ud = { class: "po-flex po-items-center po-space-x-2" }, pd = { class: "po-text-mpao-lightblue po-grow po-text-lg" }, cd = { class: "po-font-semibold po-shrink-0 po-text-mpao-lightblue po-text-sm po-px-2 po-py-1 po-rounded-xl po-bg-mpao-lightblue/10" }, dd = ["innerHTML"], fd = {
  key: 0,
  class: "po-bg-white po-rounded-md po-px-4 po-py-3 po-block po-text-sm po-text-center po-text-mpao-lightblue hover:po-text-purple-600 po-cursor-pointer"
}, vd = /* @__PURE__ */ L({
  __name: "ChangeLogModel",
  props: {
    changelog: { default: null },
    showBtn: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = C(!1), o = C(0);
    return (l, n) => (u(), c(I, null, [
      e.showBtn ? (u(), c("a", {
        key: 0,
        href: "#",
        onClick: n[0] || (n[0] = re((a) => t.value = !0, ["prevent"])),
        class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
      }, "Change logs")) : x("", !0),
      S(xt, {
        show: t.value,
        onModalClosed: n[1] || (n[1] = (a) => t.value = !1),
        "modal-title": "Change Log",
        "modal-width": "sm:po-max-w-4xl",
        id: "change-log-modal"
      }, {
        content: z(() => [
          s("div", null, [
            ed,
            s("div", td, [
              (u(!0), c(I, null, U(e.changelog, (a, r) => (u(), c("span", {
                class: P(["po-flex po-items-center po-space-x-1 po-px-4 po-py-3 po-rounded-t-xl po-cursor-pointer", [{ "po-bg-purple-500/10": o.value === r }]]),
                onClick: (i) => o.value = r
              }, [
                s("span", ld, V(a.label) + " Version", 1),
                s("span", nd, V(a.latest_version), 1)
              ], 10, od))), 256))
            ]),
            s("div", ad, [
              (u(!0), c(I, null, U(e.changelog, (a, r) => (u(), c("div", null, [
                o.value === r ? (u(), c("div", sd, [
                  s("div", rd, [
                    (u(!0), c(I, null, U(a.version_history, (i) => (u(), c("div", id, [
                      s("span", ud, [
                        s("span", pd, V(i.date), 1),
                        s("span", cd, V(i.version), 1)
                      ]),
                      s("div", {
                        class: "po-mt-3 po-prose-sm po-prose-slate",
                        innerHTML: i.note
                      }, null, 8, dd)
                    ]))), 256)),
                    a.hasMore ? (u(), c("span", fd, "More")) : x("", !0)
                  ])
                ])) : x("", !0)
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
  for (const [l, n] of t)
    o[l] = n;
  return o;
}, hd = {}, md = {
  class: "po-h-8",
  src: "https://pension.gov.mv/asset/image/en-ccc-2020-issa.png",
  alt: "issa Certificate"
};
function bd(e, t) {
  return u(), c("img", md);
}
const gd = /* @__PURE__ */ Ut(hd, [["render", bd]]), yd = {}, xd = {
  class: "po-h-8",
  src: "https://pension.gov.mv/asset/image/iso_logo.png",
  alt: "ISO 27001 Certificate"
};
function wd(e, t) {
  return u(), c("img", xd);
}
const $d = /* @__PURE__ */ Ut(yd, [["render", wd]]), Vd = { class: "-po-m-5" }, kd = ["src", "alt"], $l = /* @__PURE__ */ L({
  __name: "CertificateModel",
  props: {
    src: { default: "" },
    title: { default: "" },
    logo: { default: null }
  },
  setup(e) {
    const t = C(!1);
    return (o, l) => (u(), c(I, null, [
      (u(), j(de(e.logo), {
        onClick: l[0] || (l[0] = re((n) => t.value = !0, ["prevent"])),
        class: "po-cursor-pointer",
        role: "button"
      })),
      S(xt, {
        show: t.value,
        onModalClosed: l[1] || (l[1] = (n) => t.value = !1),
        "modal-title": e.title,
        "modal-width": "sm:po-max-w-4xl",
        id: "change-log-modal"
      }, {
        content: z(() => [
          s("div", Vd, [
            s("img", {
              src: e.src,
              alt: e.title
            }, null, 8, kd)
          ])
        ]),
        _: 1
      }, 8, ["show", "modal-title"])
    ], 64));
  }
}), _d = /* @__PURE__ */ s("div", { class: "po-prose-sm po-prose-slate po-p-5 po-opacity-8" }, [
  /* @__PURE__ */ s("h2", { class: "po-text-red-500" }, "Sample Terms and Conditions"),
  /* @__PURE__ */ s("h3", null, "1. Acceptance of Terms"),
  /* @__PURE__ */ s("p", null, " By accessing and using this web app, you agree to be bound by these terms and conditions. "),
  /* @__PURE__ */ s("h3", null, "2. User Responsibilities"),
  /* @__PURE__ */ s("p", null, " Users are responsible for maintaining the confidentiality of their account information and complying with all applicable laws. "),
  /* @__PURE__ */ s("h3", null, "3. Privacy Policy"),
  /* @__PURE__ */ s("p", null, [
    /* @__PURE__ */ J(" Our privacy policy outlines how we collect, use, and protect your personal information. Please review our "),
    /* @__PURE__ */ s("a", { href: "privacy.html" }, "Privacy Policy"),
    /* @__PURE__ */ J(" for more details. ")
  ]),
  /* @__PURE__ */ s("h3", null, "4. Intellectual Property"),
  /* @__PURE__ */ s("p", null, " All content and materials provided on this web app are protected by intellectual property laws. Unauthorized use is prohibited. "),
  /* @__PURE__ */ s("h3", null, "5. Limitation of Liability"),
  /* @__PURE__ */ s("p", null, " We are not liable for any damages or losses incurred from the use of this web app, including but not limited to, errors, omissions, or interruptions. "),
  /* @__PURE__ */ s("h3", null, "6. Modification of Terms"),
  /* @__PURE__ */ s("p", null, " We reserve the right to modify or update these terms and conditions at any time without prior notice. It is your responsibility to review them periodically. "),
  /* @__PURE__ */ s("h3", null, "7. Governing Law"),
  /* @__PURE__ */ s("p", null, " These terms and conditions shall be governed by and construed in accordance with the laws of your jurisdiction. "),
  /* @__PURE__ */ s("h3", null, "8. Contact Us"),
  /* @__PURE__ */ s("p", null, [
    /* @__PURE__ */ J(" If you have any questions or concerns about these terms and conditions, please contact us at "),
    /* @__PURE__ */ s("a", { href: "mailto:info@pension.gov.mv" }, "info@pension.gov.mv"),
    /* @__PURE__ */ J(". ")
  ])
], -1), Cd = /* @__PURE__ */ L({
  __name: "ToCModel",
  setup(e) {
    const t = C(!1);
    return (o, l) => (u(), c(I, null, [
      s("a", {
        href: "#",
        onClick: l[0] || (l[0] = re((n) => t.value = !0, ["prevent"])),
        role: "button",
        class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
      }, "Terms & Conditions"),
      S(xt, {
        show: t.value,
        onModalClosed: l[1] || (l[1] = (n) => t.value = !1),
        "modal-title": "Terms & Conditions",
        "modal-width": "sm:po-max-w-3xl",
        id: "change-log-modal"
      }, {
        content: z(() => [
          _d
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Sd = /* @__PURE__ */ s("div", { class: "po-prose-sm po-prose-slate po-p-5 po-opacity-80" }, [
  /* @__PURE__ */ s("h2", { class: "po-text-red-500" }, "Sample Privacy Policy"),
  /* @__PURE__ */ s("h3", null, "1. Information Collection"),
  /* @__PURE__ */ s("p", null, " We may collect personal information such as name, contact details, and pension-related data necessary for providing our services. "),
  /* @__PURE__ */ s("h3", null, "2. Use of Information"),
  /* @__PURE__ */ s("p", null, " The collected information is used for the purpose of administering pensions, processing applications, and communicating with users. "),
  /* @__PURE__ */ s("h3", null, "3. Data Security"),
  /* @__PURE__ */ s("p", null, " We implement appropriate security measures to protect personal information from unauthorized access, alteration, or disclosure. "),
  /* @__PURE__ */ s("h3", null, "4. Third-Party Disclosure"),
  /* @__PURE__ */ s("p", null, " We may share personal information with trusted third parties only to the extent necessary for pension administration purposes. "),
  /* @__PURE__ */ s("h3", null, "5. Cookies and Tracking"),
  /* @__PURE__ */ s("p", null, " We use cookies and similar technologies to enhance user experience and collect non-personal information about website usage. "),
  /* @__PURE__ */ s("h3", null, "6. Data Retention"),
  /* @__PURE__ */ s("p", null, " We retain personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law. "),
  /* @__PURE__ */ s("h3", null, "7. User Rights"),
  /* @__PURE__ */ s("p", null, " Users have the right to access, update, and delete their personal information. Please contact us to exercise these rights. "),
  /* @__PURE__ */ s("h3", null, "8. Children's Privacy"),
  /* @__PURE__ */ s("p", null, " This web app is not intended for children under the age of 13. We do not knowingly collect or store personal information from children. "),
  /* @__PURE__ */ s("h3", null, "9. Changes to Privacy Policy"),
  /* @__PURE__ */ s("p", null, " We reserve the right to modify or update this privacy policy at any time. Users will be notified of any significant changes. "),
  /* @__PURE__ */ s("h3", null, "8. Contact Us"),
  /* @__PURE__ */ s("p", null, [
    /* @__PURE__ */ J(" If you have any questions or concerns about our privacy policy, please contact us at "),
    /* @__PURE__ */ s("a", { href: "mailto:info@pension.gov.mv" }, "info@pension.gov.mv"),
    /* @__PURE__ */ J(". ")
  ])
], -1), Pd = /* @__PURE__ */ L({
  __name: "PrivacyPolicyModel",
  setup(e) {
    const t = C(!1);
    return (o, l) => (u(), c(I, null, [
      s("a", {
        href: "#",
        onClick: l[0] || (l[0] = re((n) => t.value = !0, ["prevent"])),
        role: "button",
        class: "hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
      }, "Privacy Policy"),
      S(xt, {
        show: t.value,
        onModalClosed: l[1] || (l[1] = (n) => t.value = !1),
        "modal-title": "Privacy Policy",
        "modal-width": "sm:po-max-w-3xl",
        id: "change-log-modal"
      }, {
        content: z(() => [
          Sd
        ]),
        _: 1
      }, 8, ["show"])
    ], 64));
  }
}), Od = { class: "po-grid po-gap-5 po-grid-cols-1 lg:po-grid-cols-2 po-px-6 lg:po-px-8 po-mt-10 po-pb-10" }, Ld = { class: "sm:po-flex po-items-start sm:po-space-x-5" }, Td = /* @__PURE__ */ s("svg", {
  class: "po-h-10",
  xmlns: "http://www.w3.org/2000/svg",
  "xml:space": "preserve",
  "fill-rule": "evenodd",
  "stroke-linejoin": "round",
  "stroke-miterlimit": "2",
  "clip-rule": "evenodd",
  viewBox: "0 0 343 287"
}, [
  /* @__PURE__ */ s("path", {
    fill: "#203057",
    d: "M61.305 92.088a16.74 16.74 0 0 1-2.583.542 12.086 12.086 0 0 0-4.604 1.425L108.41 0h21.308c-22.054 9.263-22.871 36.388-23.021 46.463-.237.008-.467.017-.708.042-5.509.462-13.509 3.245-20.296 13.904-2.267 3.512-4.392 7.341-6.263 10.721l-.125.204c-6.429 11.579-10.725 18.766-18 20.754ZM261.87 71.267c0-.013-.079-.142-.092-.159-1.987-3.575-4.045-7.279-6.225-10.683-6.82-10.675-14.795-13.458-20.295-13.908a6.116 6.116 0 0 0-.755-.063c-.358-12.162-2.37-21.821-6.12-29.492C224.449 8.912 218.67 3.233 211.17 0h21.104l54.109 93.708a12.134 12.134 0 0 0-3.884-1.05c-.875-.104-1.7-.3-2.408-.487-.063-.029-.167-.067-.167-.067-7.271-1.979-11.575-9.175-18.054-20.837ZM112.871 197.965c3.809 7.767 9.363 13.342 16.538 16.588h-21L54.384 120.99c1.371.692 2.837 1.146 4.337 1.292 1.034.112 1.979.362 2.592.529 7.267 1.971 11.575 9.179 18 20.754 2.412 4.329 4.275 7.65 6.379 10.938 6.8 10.65 14.783 13.445 20.288 13.9.266.02.512.029.754.029.358 12.166 2.362 21.829 6.137 29.533Zm149.045-54.381c6.442-11.571 10.738-18.767 18.009-20.759.745-.2 1.641-.425 2.575-.529 1.25-.121 2.45-.446 3.608-.933l-53.829 93.204h-20.063c21.375-9.537 22.175-36.212 22.313-46.104.229-.013.462-.021.716-.042 5.513-.462 13.505-3.246 20.309-13.908 2.304-3.625 4.558-7.667 6.362-10.929Zm-82.546 28.807v.208c.037 12.463 5.654 19.896 15.033 19.896 13.329 0 17.767-4.317 17.767-29.808V94.903l17.433-13.47v81.254c0 .241-.108 3.041-.217 5.746l-.158 3.7c-.071 1.975-.142 3.687-.167 4.458a1.689 1.689 0 0 0-.079.383c0 .104.021.196.033.3-2.454 24.05-13.783 35.746-34.612 35.746-8.758 0-16.329-3.292-21.925-9.542a2.922 2.922 0 0 0-2.15-.945c-.825 0-1.613.358-2.15.975-5.567 6.308-12.746 9.512-21.35 9.512-22.246 0-34.05-14.842-35.104-44.121 7.871-1.337 13.466-6.258 15.471-8.325l1.87-1.433v3.546c0 25.341 5.725 29.808 17.763 29.808 13.312 0 14.921-17.183 15.117-20.629.3-5.413 4.116-9.663 8.691-9.663h.325c4.709.2 8.409 4.68 8.409 10.188Zm-68.52-37.313V42.615c0-.104.088-.579.284-1.396 1.737-27.029 13.429-40.171 35.696-40.171 8.962 0 16.75 3.405 22.512 9.821.754.871 2.3.892 3.121-.012 5.712-6.509 13.1-9.809 21.937-9.809 22.938 0 35.021 15.355 35.93 45.638-7.934 1.075-13.717 6.146-15.817 8.275l-3.125 2.408v-5.171c0-24.833-5.25-29.012-16.988-29.012-12.616 0-14.129 16.55-14.325 19.875-.304 5.937-4.437 10.417-9.608 10.417h-.221c-5.137-.23-9.162-5.055-9.162-11.009v-.183c-.034-11.971-5.371-19.1-14.254-19.1-12.946 0-16.963 4.004-16.963 29.012v68.192l-19.017 14.688Z"
  }),
  /* @__PURE__ */ s("path", {
    fill: "#ec6e25",
    d: "m165.883 91.539-15.875 12.271-15.171-11.733V67.535l31.046 24.004Zm9.441 31.844 15.884-12.288 15.195 11.763-.004 24.529-31.075-24.004Zm-64.934 39.882c-.042.014-.031.008-.014.001l-.286.016c-1.067.113-2 .171-2.784.175h-.075c-.241-.017-.462-.004-.858-.004a24.05 24.05 0 0 1-.829-.104c-.038-.013-.075-.013-.117-.013 0 0-.012 0-.054-.016 0 0-.046-.009-.088-.009-4.07-.633-10.07-3.125-15.408-11.5-1.967-3.083-3.737-6.225-6.212-10.666-5.534-9.946-9.913-17.255-16.088-21.005-.092-.045-2.221-1.379-5.375-2.245a23.775 23.775 0 0 0-1.771-.392l-1.858-.292c-.121 0-.233-.016-.554-.15-.684-.196-1.275-.433-1.713-.679a1.038 1.038 0 0 0-.25-.146l-.133-.091c-.117-.075-.233-.138-.346-.234-.208-.141-.404-.296-.604-.45-.008-.029-.042-.062-.042-.062-.571-.488-1.133-1.084-1.508-1.609-.05-.087-.1-.191-.15-.25-.129-.187-.233-.362-.367-.562l-.346-.675c-.054-.104-.116-.217-.225-.458l-.162-.392a4.5 4.5 0 0 1-.121-.308 9.748 9.748 0 0 0-.042-.092.188.188 0 0 0-.033-.1 10.976 10.976 0 0 1-.237-.817 10.23 10.23 0 0 1-.196-.85c-.038-.3-.088-.587-.125-.983a17.836 17.836 0 0 1-.054-.771c.008-.292.037-.587.066-.975.025-.308.075-.604.125-.954.063-.279.117-.546.217-.917.058-.25.129-.475.204-.7.025-.046.042-.121.042-.121.008-.025.016-.058.033-.075.067-.191.133-.366.254-.654l.463-.966.162-.25c.109-.188.225-.367.367-.596.829-1.188 1.829-2.129 3.083-2.834.188-.1.363-.2.579-.295.375-.184.863-.334 1.596-.484l.317-.071c.121-.025.233-.054.337-.054.117-.016.238-.025.438-.071.275-.029.533-.075.783-.129.404-.058 1.117-.2 1.609-.346a.998.998 0 0 0 .291-.062c1.975-.575 5.017-1.796 8.134-4.283 4.77-4.059 8.512-10.446 13.283-19.025 1.946-3.53 3.958-7.171 6.129-10.563 5.446-8.529 11.558-11.029 15.992-11.575l-.009 21.342c-.67.612-1.37 1.483-2.05 2.541-1.933 3.021-3.795 6.392-5.45 9.363l-.15.267c-3.458 6.22-7.383 13.27-12.491 19.187l-2.142 2a1.423 1.423 0 0 0-.129 1.983c.092.088.208.175.208.175l1.946 2.238c.067.062.15.125.242.204.221.246.421.517.641.771l.309.35c.012.042.121.183.137.217 4.659 5.762 8.363 12.42 11.325 17.75l.571 1.033c1.583 2.846 3.229 5.787 4.983 8.529a14.943 14.943 0 0 0 1.667 2.171c.504.429 1.35.967 2.563.967 1.166 0 2.375-.534 3.483-1.488.062-.037.225-.158.258-.187l1.592-1.538 24.154-18.529 8.271-6.479c.083-.063.154-.134.237-.229l71.888-55.605c1.787-1.808 6.662-6.125 13.142-6.958.25 0 .991-.029 1.766-.075l.671-.017c.583-.033 1.1-.054 1.317-.054 4.387.371 10.812 2.684 16.541 11.634 2.184 3.45 4.317 7.27 6.205 10.662 5.458 9.846 9.791 17.096 15.758 20.796.079.087.179.154.258.221 1.663 1.021 3.404 1.787 5.159 2.246.133.041.258.041.295.02.35.084.73.175 1.121.271.054.009.129.042.179.042.013 0 .15.021.159.021.475.087.958.162 1.491.225 4.367.454 7.767 4.712 7.884 9.871-.15 5.179-3.55 9.42-7.896 9.883-.854.096-3.233.417-4.15.654-9.354 3.158-13.879 11.442-18.667 20.229-.529.954-1.046 1.917-1.591 2.896-1.884 3.383-4 7.208-6.2 10.663-5.45 8.512-11.546 11.041-15.988 11.587v-21.337c.658-.584 1.358-1.459 2.054-2.542 1.967-3.092 3.804-6.417 5.425-9.35l.125-.196c3.029-5.454 9.467-15.325 14.596-21.762a1.419 1.419 0 0 0-.05-1.855c-.521-.558-1.146-1.283-1.829-2.07a1.192 1.192 0 0 0-.488-.346 60.342 60.342 0 0 1-3.341-4.304c-.113-.146-.204-.275-.275-.371 0 0-.067-.138-.088-.167-3.329-4.721-6.208-9.908-8.546-14.104l-.15-.279c-1.266-2.284-2.625-4.584-3.895-6.738l-1.463-2.487c-1.104-1.854-2.487-2.813-4.129-2.813-.596 0-1.138.142-1.604.296l-.392.154-20.537 15.563-43.45 33.587-39.988 31.125a1.463 1.463 0 0 0-.683.304l-3.113 2.417s-.146.125-.262.229c-1.692 1.717-6.554 5.909-12.904 6.929Z"
  }),
  /* @__PURE__ */ s("path", {
    fill: "#203057",
    d: "M9.142 250.096c8.762 0 12.862 3.154 12.862 10.838v3.341c0 7.492-4.242 10.98-12.862 10.98H6.646v11.116H0v-36.275h9.142Zm0 18.892c4.708 0 6.262-1.604 6.262-5.042v-2.683c0-3.442-1.129-5.233-6.171-5.233H6.596v12.958h2.546Zm39.011-18.892v5.654h-14.37v9.325h12.25v5.842h-12.25v9.567h15.033v5.937H27.283v-36.325h20.87Zm28.511 36.277h-6.313l-10.65-22.992.567 13.758v9.234h-6.454v-36.23h6.454l10.646 23.888-.704-15.313v-8.575h6.454v36.23Zm17.293-30.764c-3.579 0-5.042 1.129-5.042 4.571 0 4.566 3.63 4.191 9.142 5.041 4.192.654 8.196 2.354 8.196 9.609 0 8.383-3.629 11.92-12.342 11.92-9.046 0-11.921-4.383-11.921-10.225h6.546c.146 2.78 1.371 4.288 5.513 4.288 3.912 0 5.704-1.65 5.704-5.746 0-4.287-5.088-4.287-8.954-4.808-4.096-.517-8.429-2.542-8.429-10.034 0-6.783 4.141-10.316 11.587-10.316 6.55 0 10.883 2.4 11.496 9.654h-6.55c-.188-3.063-1.792-3.954-4.946-3.954Zm17.716-5.465h6.55v36.275h-6.55v-36.275Zm12.631 25.722v-15.358c0-7.68 3.346-10.838 12.108-10.838 8.763 0 12.392 3.158 12.392 10.838v15.358c0 7.492-3.771 10.837-12.392 10.837-8.621 0-12.108-3.345-12.108-10.837Zm18-.329v-14.7c0-3.296-.85-5.417-5.892-5.417-4.712 0-5.608 2.121-5.608 5.417v14.7c0 3.441.896 5.416 5.608 5.416 4.713 0 5.892-1.975 5.892-5.416Zm35.526 10.836h-6.313l-10.65-22.992.567 13.758v9.234h-6.454v-36.23h6.454l10.646 23.888-.704-15.313v-8.575h6.454v36.23Zm17.861-10.507v-15.358c0-7.68 3.346-10.838 12.108-10.838 8.763 0 12.392 3.158 12.392 10.838v15.358c0 7.492-3.771 10.837-12.392 10.837-8.621 0-12.108-3.345-12.108-10.837Zm18-.329v-14.7c0-3.296-.85-5.417-5.892-5.417-4.712 0-5.608 2.121-5.608 5.417v14.7c0 3.441.896 5.416 5.608 5.416 4.713 0 5.892-1.975 5.892-5.416Zm33.925-19.506H232.82v9.046h12.533v5.891H232.82v15.45h-6.454v-36.32h21.25v5.933Zm26.007 0h-14.791v9.046h12.533v5.891h-12.533v15.45h-6.455v-36.32h21.246v5.933Zm4.809-5.887h6.55v36.275h-6.55v-36.275Zm37.133 25.015c0 7.962-3.771 11.308-12.392 11.308-8.62 0-12.108-3.346-12.108-10.837v-14.746c0-7.679 3.346-10.838 12.108-10.838 8.763 0 12.392 3.204 12.392 11.263h-6.5c0-3.534-.85-5.513-5.892-5.513-4.712 0-5.608 1.979-5.608 5.417V275.3c0 3.442.896 5.421 5.608 5.421 4.713 0 5.892-1.979 5.892-5.562h6.5Zm26.243-25.063v5.654h-14.37v9.325h12.25v5.842h-12.25v9.567h15.033v5.937h-21.533v-36.325h20.87Z"
  })
], -1), Ed = { class: "po-mt-5 sm:po-mt-0" }, Bd = /* @__PURE__ */ s("p", { class: "-po-mt-1 po-text-xs po-text-slate-500" }, " 8th Floor, Allied Building , Chaandhanee Magu, Malé, 20156, Maldives ", -1), zd = { class: "po-mt-1 po-text-xs po-text-slate-500" }, Md = { class: "po-mt-1 po-text-xs po-text-slate-500 po-flex -po-mb-2 po-flex-wrap" }, Ad = {
  href: "https://www.pension.gov.mv",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, Dd = /* @__PURE__ */ s("span", null, "www.pension.gov.mv", -1), Id = {
  href: "mailto:info@pension.gov.mv",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, jd = /* @__PURE__ */ s("span", null, "info@pension.gov.mv", -1), Rd = {
  href: "tel:1441",
  target: "_blank",
  class: "po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
}, Fd = /* @__PURE__ */ s("span", null, "1441", -1), Nd = { class: "po-flex lg:po-items-end po-flex-col" }, Hd = { class: "-po-mt-1 po-text-xs po-text-slate-500 po-flex -po-mb-2 po-flex-wrap" }, qd = { class: "po-flex po-space-x-2 po-mt-3 lg:po-justify-end" }, Wd = {
  name: "PoFooter"
}, u2 = /* @__PURE__ */ L({
  ...Wd,
  props: {
    changelog: { default: null }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, l) => (u(), c("div", null, [
      s("section", Od, [
        s("div", Ld, [
          Td,
          s("div", Ed, [
            Bd,
            s("p", zd, " © " + V(new Date().getFullYear()) + " Pension Office, All Rights Reserved. ", 1),
            s("p", Md, [
              s("a", Ad, [
                S(w(Mu), { class: "po-w-3 po-h-3 po-fill-current" }),
                Dd
              ]),
              s("a", Id, [
                S(w(Bu), { class: "po-w-3 po-h-3 po-fill-current" }),
                jd
              ]),
              s("a", Rd, [
                S(w(Au), { class: "po-w-3 po-h-3 po-fill-current" }),
                Fd
              ])
            ])
          ])
        ]),
        s("div", Nd, [
          s("nav", Hd, [
            S(vd, {
              "show-btn": e.changelog !== null,
              changelog: e.changelog
            }, null, 8, ["show-btn", "changelog"]),
            S(Cd),
            S(Pd)
          ]),
          s("div", qd, [
            S($l, {
              logo: $d,
              title: "ISO/IEC 27001:2013 Certificate",
              src: ""
            }),
            S($l, {
              logo: gd,
              title: "issa Certificate",
              src: ""
            })
          ])
        ])
      ])
    ]));
  }
}), Ud = { class: "po-text-sm po-text-red-700" }, Gd = {
  key: 0,
  class: "po-text-sm po-text-red-800 po-list-disc po-ml-5 po-mt-2"
}, Zd = {
  key: 1,
  class: "po-flex po-items-start po-space-x-3 po-p-5 po-bg-green-50 po-rounded-md po-mt-5"
}, Kd = { class: "po-text-sm po-text-green-700" }, Yd = {
  name: "PoFormStatusMessage"
}, p2 = /* @__PURE__ */ L({
  ...Yd,
  props: {
    isError: { type: Boolean, default: !1 },
    message: { default: "This is a form status" },
    errorList: { default: null }
  },
  setup(e) {
    return (t, o) => e.isError ? (u(), c("div", {
      key: 0,
      class: P(["po-flex po-space-x-3 po-p-3 po-bg-red-50 po-rounded-md", [
        { "po-items-start": e.errorList !== null },
        { "po-items-center": e.errorList === null }
      ]])
    }, [
      S(w(to), { class: "po-shrink-0 po-w-6 po-stroke-red-600" }),
      s("div", null, [
        s("span", Ud, V(e.message), 1),
        e.errorList !== null ? (u(), c("ul", Gd, [
          (u(!0), c(I, null, U(e.errorList, (l) => (u(), c("li", null, V(l), 1))), 256))
        ])) : x("", !0)
      ])
    ], 2)) : (u(), c("div", Zd, [
      S(w(na), { class: "po-w-6 po-stroke-green-600" }),
      s("div", null, [
        s("span", Kd, V(e.message), 1)
      ])
    ]));
  }
}), Xd = {
  key: 0,
  class: "po-text-lg po-text-red-400 po-font-semibold"
}, Qd = {
  key: 0,
  class: "po-mt-1 po-flex -po-mb-3 po-flex-wrap"
}, Jd = { class: "po-flex po-flex-1" }, e1 = { class: "po-flex po-flex-col" }, t1 = {
  key: 0,
  class: "po-mt-2 po-text-sm po-text-slate-500"
}, o1 = {
  key: 1,
  class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1"
}, l1 = {
  name: "PoRadioInput"
}, c2 = /* @__PURE__ */ L({
  ...l1,
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
    const { errorMessage: n } = xe(o), a = C();
    return Q(n, (r, i) => {
      a.value = n.value !== null && n.value !== "";
    }), (r, i) => (u(), j(w(bs), {
      modelValue: l.value,
      "onUpdate:modelValue": i[0] || (i[0] = (p) => l.value = p),
      class: P([{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }])
    }, {
      default: z(() => [
        S(w(sl), { class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700" }, {
          default: z(() => [
            s("span", null, V(e.label), 1),
            e.required ? (u(), c("span", Xd, "*")) : x("", !0)
          ]),
          _: 1
        }),
        e.options !== null ? (u(), c("div", Qd, [
          (u(!0), c(I, null, U(e.options, (p) => (u(), j(w(ys), {
            as: "template",
            key: p.id,
            value: p.id
          }, {
            default: z(({ checked: f, active: d }) => [
              s("div", {
                class: P([
                  "po-transition-colors po-duration-100 po-ease-out po-mr-3",
                  "",
                  "",
                  "po-mb-3 po-pt-[0.13rem] po-relative po-flex po-cursor-pointer focus:po-outline-none"
                ])
              }, [
                s("span", {
                  class: P(["po-w-5 po-h-5 po-rounded-full po-border po-mr-2 po-flex po-items-center po-justify-center", [
                    "",
                    f ? "po-border-mpao-lightblue" : "po-border-slate-400"
                  ]])
                }, [
                  s("span", {
                    class: P(["po-w-3 po-h-3 po-rounded-full", [
                      "",
                      f ? "po-bg-mpao-lightblue" : "po-bg-transparent"
                    ]])
                  }, null, 2)
                ], 2),
                s("span", Jd, [
                  s("span", e1, [
                    S(w(sl), {
                      as: "span",
                      class: "po-block po-text-sm po-font-medium po-text-gray-900"
                    }, {
                      default: z(() => [
                        J(V(p.title), 1)
                      ]),
                      _: 2
                    }, 1024),
                    p.description ? (u(), j(w(xs), {
                      key: 0,
                      as: "span",
                      class: "po-mt-1 po-flex po-items-center po-text-sm po-text-gray-500"
                    }, {
                      default: z(() => [
                        J(V(p.description), 1)
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
          e.message !== null ? (u(), c("p", t1, V(e.message), 1)) : x("", !0),
          a.value && w(n) !== null ? (u(), c("p", o1, [
            S(w(pn), { class: "po-fill-current po-w-4 po-mt-[0.2rem] po-shrink-0" }),
            s("span", null, V(w(n)), 1)
          ])) : x("", !0)
        ])
      ]),
      _: 1
    }, 8, ["modelValue", "class"]));
  }
}), n1 = { class: "po-bg-white po-relative po-group po-rounded-xl focus-within:po-ring-2 focus-within:po-ring-inset focus-within:po-ring-indigo-500" }, a1 = { class: "po-block po-p-4 po-transition-colors po-duration-75 po-ease-linear" }, s1 = { class: "po-flex po-items-start po-space-x-2" }, r1 = { class: "po-flex po-items-start po-space-x-1" }, i1 = { class: "po-block po-text-2xl po-font-light po-text-slate-600" }, u1 = {
  key: 0,
  class: "po-text-sm po-text-green-500 po-font-medium po-pt-1"
}, p1 = { class: "po-text-sm po-tracking-wide po-text-slate-500" }, c1 = {
  name: "PoStatsBlock"
}, d2 = /* @__PURE__ */ L({
  ...c1,
  props: {
    items: { default: null },
    numberOfCols: { default: "po-grid-cols-1 lg:po-grid-cols-3" }
  },
  setup(e) {
    return (t, o) => (u(), c("div", {
      class: P(["po-grid po-gap-5", e.numberOfCols])
    }, [
      (u(!0), c(I, null, U(e.items, (l) => (u(), c("div", n1, [
        s("span", a1, [
          s("div", s1, [
            s("div", null, [
              s("span", {
                class: P([
                  "po-inline-flex po-p-2 po-rounded-md",
                  l.bgColor,
                  l.iconColor
                ])
              }, [
                (u(), j(de(l.icon), { class: "po-w-4 po-h-4" }))
              ], 2)
            ]),
            s("div", null, [
              s("div", r1, [
                s("span", i1, V(l.value), 1),
                l.diff ? (u(), c("span", u1, V(l.diff), 1)) : x("", !0)
              ]),
              s("h4", p1, V(l.label), 1)
            ])
          ])
        ])
      ]))), 256))
    ], 2));
  }
}), d1 = {
  key: 0,
  class: "po-flex po-space-x-3 po-items-start"
}, f1 = { class: "po-flex po-items-center po-space-x-2" }, v1 = ["datetime"], h1 = { class: "po-text-sm po-font-medium po-text-slate-600" }, m1 = ["datetime"], b1 = { class: "flex" }, g1 = { class: "po-flex po-pt-3 po-flex-wrap po-max-w-sm" }, y1 = ["onClick"], x1 = {
  key: 1,
  class: "po-w-full po-text-center"
}, w1 = { class: "po-inline-block po-text-sm po-italic po-text-slate-500" }, $1 = /* @__PURE__ */ s("span", { class: "po-text-lg po-text-slate-300 po-px-3 po-inline-block" }, "—", -1), V1 = ["datetime"], k1 = {
  name: "PoChatLogItem"
}, f2 = /* @__PURE__ */ L({
  ...k1,
  props: {
    item: { default: null }
  },
  setup(e) {
    return (t, o) => (u(), c("li", {
      class: P([
        "po-flex po-px-5",
        { "po-justify-end po-items-end po-flex-col": e.item.type === "first" }
      ])
    }, [
      e.item.type !== "message" ? (u(), c("div", d1, [
        e.item.type !== "first" && e.item.avatar !== "" ? (u(), c("div", {
          key: 0,
          class: "po-shrink-0 po-w-8 po-h-8 po-rounded-full po-p-1 po-bg-contain po-bg-slate-100",
          style: bo({ "background-image": `url(${e.item.avatar})` })
        }, null, 4)) : x("", !0),
        s("div", {
          class: P([
            { "po-pt-1": e.item.type !== "first" },
            {
              "po-flex po-justify-end po-items-end po-flex-col": e.item.type === "first"
            }
          ])
        }, [
          s("span", f1, [
            e.item.type === "first" ? (u(), c("time", {
              key: 0,
              datetime: e.item.time,
              class: "po-text-xs po-text-slate-400"
            }, V(e.item.time_human), 9, v1)) : x("", !0),
            s("span", h1, V(e.item.name), 1),
            e.item.type === "second" ? (u(), c("time", {
              key: 1,
              datetime: e.item.time,
              class: "po-text-xs po-text-slate-400"
            }, V(e.item.time_human), 9, m1)) : x("", !0)
          ]),
          s("div", {
            class: P([
              "po-mt-2 po-space-y-1",
              {
                "po-flex po-justify-end po-items-end po-flex-col": e.item.type === "first"
              }
            ])
          }, [
            Y(t.$slots, "message", {}, () => [
              (u(!0), c(I, null, U(e.item.message, (l) => (u(), c("div", b1, [
                s("p", {
                  class: P([
                    "po-text-sm po-rounded-xl po-px-4 po-py-2",
                    {
                      "po-bg-slate-100 po-text-slate-600": e.item.type !== "first"
                    },
                    {
                      "po-bg-mpao-lightblue po-text-sky-50": e.item.type === "first"
                    }
                  ])
                }, V(l), 3)
              ]))), 256))
            ]),
            s("div", g1, [
              (u(!0), c(I, null, U(e.item.actions, (l) => (u(), c("button", {
                onClick: (n) => t.$emit("button-click", l.label),
                class: "po-appearance-none po-border po-border-mpao-lightblue po-bg-white hover:po-bg-mpao-lightblue po-px-3 po-py-1 po-mb-2 po-mr-2 po-rounded-lg po-text-slate-500 hover:po-text-sky-100 po-transition-colors po-duration-150 po-ease-in-out po-text-sm po-ring-0 po-outline-none"
              }, V(l.label), 9, y1))), 256))
            ])
          ], 2)
        ], 2)
      ])) : x("", !0),
      e.item.type === "message" ? (u(), c("div", x1, [
        (u(!0), c(I, null, U(e.item.message, (l) => (u(), c("p", w1, [
          J(V(l) + " ", 1),
          $1,
          s("time", {
            datetime: e.item.time,
            class: "po-text-xs po-text-slate-400 po-inline-block"
          }, V(e.item.time_human), 9, V1)
        ]))), 256))
      ])) : x("", !0)
    ], 2));
  }
}), _1 = {
  key: 0,
  class: "po-pointer-events-auto po-w-full po-max-w-sm po-overflow-hidden po-rounded-lg po-bg-mpao-lightblue po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5"
}, C1 = { class: "po-p-4" }, S1 = { class: "po-flex po-items-start" }, P1 = { class: "po-flex-shrink-0" }, O1 = { class: "po-ml-3 po-w-0 po-flex-1 po-pt-0.5" }, L1 = { class: "po-text-sm po-font-medium po-text-sky-100" }, T1 = { class: "po-mt-1 po-text-sm po-text-sky-300" }, E1 = { class: "po-mt-3 po-flex po-space-x-4" }, B1 = { class: "po-ml-4 po-flex po-flex-shrink-0" }, z1 = /* @__PURE__ */ s("span", { class: "po-sr-only" }, "Close", -1), M1 = {
  name: "PoNotification"
}, v2 = /* @__PURE__ */ L({
  ...M1,
  props: {
    show: { type: Boolean, default: !1 },
    label: { default: "" },
    text: { default: "" },
    buttonLabel: { default: "Ok" }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    const o = e, { show: l } = xe(o), n = C(!1);
    Q(l, () => {
      n.value = !1, setTimeout(() => {
        n.value = !0;
      }, 100);
    });
    const a = C(!1);
    return Q(n, () => {
      a.value = !1, setTimeout(() => {
        a.value = !0;
      }, 200);
    }), (r, i) => n.value ? (u(), j(ft, {
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
          a.value ? (u(), c("div", _1, [
            s("div", C1, [
              s("div", S1, [
                s("div", P1, [
                  Y(r.$slots, "icon")
                ]),
                s("div", O1, [
                  s("p", L1, V(e.label), 1),
                  s("p", T1, V(e.text), 1),
                  s("div", E1, [
                    s("button", {
                      onClick: i[0] || (i[0] = (p) => r.$emit("button-click", e.buttonLabel)),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-100 hover:po-text-sky-200 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, V(e.buttonLabel), 1),
                    s("button", {
                      onClick: i[1] || (i[1] = (p) => n.value = !1),
                      type: "button",
                      class: "po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-300 hover:po-text-sky-500 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                    }, " Dismiss ")
                  ])
                ]),
                s("div", B1, [
                  s("button", {
                    type: "button",
                    onClick: i[2] || (i[2] = (p) => n.value = !1),
                    class: "po-inline-flex po-rounded-md po-bg-mpao-lightblue po-text-sky-500 hover:po-text-sky-300 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2"
                  }, [
                    z1,
                    S(w(cn), {
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
}), A1 = /* @__PURE__ */ s("div", { class: "po-fixed po-inset-0" }, null, -1), D1 = { class: "po-absolute po-inset-0 po-overflow-hidden" }, I1 = { class: "po-pointer-events-none po-fixed po-inset-y-0 po-right-0 po-flex po-max-w-full po-pl-10" }, j1 = { class: "po-flex po-h-full po-flex-col po-overflow-y-auto po-bg-white po-shadow-xl" }, R1 = { class: "po-bg-slate-50 po-py-6 po-px-4 sm:po-px-6" }, F1 = { class: "po-flex po-items-center po-justify-between" }, N1 = { class: "po-ml-3 po-flex po-h-7 po-items-center" }, H1 = /* @__PURE__ */ s("span", { class: "po-sr-only" }, "Close panel", -1), q1 = {
  key: 0,
  class: "po-mt-1"
}, W1 = { class: "po-text-sm po-text-slate-500" }, U1 = {
  key: 0,
  class: "po-bg-slate-50 po-rounded-b-xl po-shrink-0"
}, G1 = {
  name: "PoSlideover"
}, h2 = /* @__PURE__ */ L({
  ...G1,
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
    const o = e, { show: l } = xe(o), n = C(!1);
    Q(l, () => {
      n.value = l.value;
    });
    function a() {
      n.value = !1, t("slideover-closed", !0);
    }
    return (r, i) => (u(), j(w(bt), {
      as: "template",
      show: n.value
    }, {
      default: z(() => [
        S(w(Dt), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: a
        }, {
          default: z(() => [
            A1,
            s("div", {
              class: P(["po-fixed po-inset-0 po-overflow-hidden po-bg-black", e.screenOpacity])
            }, [
              s("div", D1, [
                s("div", I1, [
                  S(w(je), {
                    as: "template",
                    enter: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "enter-from": "po-translate-x-full",
                    "enter-to": "po-translate-x-0",
                    leave: "po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700",
                    "leave-from": "po-translate-x-0",
                    "leave-to": "po-translate-x-full"
                  }, {
                    default: z(() => [
                      S(w(It), {
                        class: P([e.maxWidth, "po-pointer-events-auto po-w-screen"])
                      }, {
                        default: z(() => [
                          s("div", j1, [
                            s("div", R1, [
                              s("div", F1, [
                                S(w(Gl), { class: "po-text-lg po-font-medium po-text-slate-600" }, {
                                  default: z(() => [
                                    J(V(e.label), 1)
                                  ]),
                                  _: 1
                                }),
                                s("div", N1, [
                                  s("button", {
                                    type: "button",
                                    class: "po-rounded-md po-text-slate-500 hover:po-text-mpao-lightblue focus:po-outline-none focus:po-ring-2 focus:po-ring-white",
                                    onClick: a
                                  }, [
                                    H1,
                                    S(w(vt), {
                                      class: "po-h-6 po-w-6",
                                      "aria-hidden": "true"
                                    })
                                  ])
                                ])
                              ]),
                              e.description ? (u(), c("div", q1, [
                                s("p", W1, V(e.description), 1)
                              ])) : x("", !0)
                            ]),
                            s("div", {
                              class: P([e.bgColor, "po-relative po-grow po-pt-6 po-px-4 sm:po-px-6"])
                            }, [
                              Y(r.$slots, "content")
                            ], 2),
                            r.$slots.footer ? (u(), c("div", U1, [
                              Y(r.$slots, "footer")
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
}), Z1 = /* @__PURE__ */ s("div", { class: "po-fixed po-inset-0 po-bg-gray-500 po-bg-opacity-25 po-transition-opacity" }, null, -1), K1 = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto po-p-4 sm:po-p-6 md:po-p-20" }, Y1 = { class: "po-relative" }, X1 = {
  key: 0,
  class: "po-max-h-96 scroll-py-3 po-overflow-y-auto po-p-3"
}, Q1 = {
  name: "PoCommandPalette"
}, m2 = /* @__PURE__ */ L({
  ...Q1,
  props: {
    show: { type: Boolean, default: !1 },
    showContent: { type: Boolean, default: !1 }
  },
  setup(e) {
    const t = e, o = C(""), { show: l } = xe(t), n = C(!1);
    Q(l, () => {
      n.value = !1, setTimeout(() => {
        n.value = !0;
      }, 100);
    });
    function a(r) {
      r.ctrlKey && r.key === "b" && (n.value = !0);
    }
    return G(() => {
      window.addEventListener("keyup", a);
    }), kl(() => {
      window.removeEventListener("keyup", a);
    }), (r, i) => (u(), j(w(bt), {
      show: n.value,
      as: "template",
      onAfterLeave: i[2] || (i[2] = (p) => o.value = ""),
      appear: ""
    }, {
      default: z(() => [
        S(w(Dt), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: i[1] || (i[1] = (p) => n.value = !1)
        }, {
          default: z(() => [
            S(w(je), {
              as: "template",
              enter: "po-ease-out po-duration-300",
              "enter-from": "po-opacity-0",
              "enter-to": "po-opacity-100",
              leave: "po-ease-in po-duration-200",
              "leave-from": "po-opacity-100",
              "leave-to": "po-opacity-0"
            }, {
              default: z(() => [
                Z1
              ]),
              _: 1
            }),
            s("div", K1, [
              S(w(je), {
                as: "template",
                enter: "po-ease-out po-duration-300",
                "enter-from": "po-opacity-0 po-scale-95",
                "enter-to": "po-opacity-100 po-scale-100",
                leave: "po-ease-in po-duration-200",
                "leave-from": "po-opacity-100 po-scale-100",
                "leave-to": "po-opacity-0 po-scale-95"
              }, {
                default: z(() => [
                  S(w(It), { class: "po-mx-auto po-max-w-xl po-transform po-divide-y po-divide-gray-100 po-overflow-hidden po-rounded-xl po-bg-white po-shadow-2xl po-ring-1 po-ring-black po-ring-opacity-5 po-transition-all" }, {
                    default: z(() => [
                      s("div", Y1, [
                        S(w(Er), {
                          class: "po-pointer-events-none po-absolute po-top-3.5 po-left-4 po-h-5 po-w-5 po-text-gray-400",
                          "aria-hidden": "true"
                        }),
                        s("input", {
                          type: "text",
                          name: "",
                          class: "po-h-12 po-w-full po-border-0 po-bg-transparent po-pl-11 po-pr-4 po-text-gray-800 po-placeholder-gray-400 focus:po-ring-0 sm:po-text-sm",
                          placeholder: "Search...",
                          onChange: i[0] || (i[0] = (p) => o.value = p.target.value)
                        }, null, 32)
                      ]),
                      e.showContent ? (u(), c("div", X1, [
                        Y(r.$slots, "content")
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
}), J1 = /* @__PURE__ */ s("div", { class: "po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity" }, null, -1), e0 = { class: "po-fixed po-inset-0 po-z-10 po-overflow-y-auto" }, t0 = { class: "po-flex po-min-h-full po-items-start po-justify-center po-p-4 po-text-center sm:po-p-0" }, o0 = { class: "po-p-5" }, l0 = { class: "po-text-center po-space-y-3" }, n0 = { key: 1 }, a0 = { class: "po-text-sm po-text-gray-600" }, s0 = { class: "po-border-t po-border-slate-200 po-flex po-divide-x po-divide-slate-200" }, r0 = {
  name: "PoAlert"
}, b2 = /* @__PURE__ */ L({
  ...r0,
  props: {
    cancelBtnLabel: { default: "Cancel" },
    okBtnLabel: { default: "Ok" },
    alertTitle: { default: "" },
    alertDescription: { default: "" },
    show: { type: Boolean, default: !1 }
  },
  emits: ["alert-closed", "button-click", "confirm", "cancel"],
  setup(e, { emit: t }) {
    const o = e, { show: l } = xe(o), n = C(!1);
    Q(l, () => {
      n.value = l.value;
    });
    function a() {
      n.value = !1, t("alert-closed", !0);
    }
    return (r, i) => (u(), j(w(bt), {
      as: "template",
      show: n.value
    }, {
      default: z(() => [
        S(w(Dt), {
          as: "div",
          class: "po-relative po-z-50",
          onClose: a
        }, {
          default: z(() => [
            S(w(je), {
              as: "template",
              enter: "po-ease-out po-duration-300",
              "enter-from": "po-opacity-0",
              "enter-to": "po-opacity-100",
              leave: "po-ease-in po-duration-200",
              "leave-from": "po-opacity-100",
              "leave-to": "po-opacity-0"
            }, {
              default: z(() => [
                J1
              ]),
              _: 1
            }),
            s("div", e0, [
              s("div", t0, [
                S(w(je), {
                  as: "template",
                  enter: "po-ease-out po-duration-300",
                  "enter-from": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95",
                  "enter-to": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                  leave: "po-ease-in po-duration-200",
                  "leave-from": "po-opacity-100 po-translate-y-0 sm:po-scale-100",
                  "leave-to": "po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
                }, {
                  default: z(() => [
                    S(w(It), { class: "po-relative po-transform po-overflow-hidden po-rounded-lg po-bg-white po-text-left po-shadow-xl po-transition-all sm:po-my-8 sm:po-w-full sm:po-max-w-sm" }, {
                      default: z(() => [
                        s("div", o0, [
                          s("div", l0, [
                            e.alertTitle !== "" ? (u(), j(w(Gl), {
                              key: 0,
                              as: "h3",
                              class: "po-text-lg po-font-medium po-leading-6 po-text-gray-900"
                            }, {
                              default: z(() => [
                                J(V(e.alertTitle), 1)
                              ]),
                              _: 1
                            })) : x("", !0),
                            e.alertDescription !== "" ? (u(), c("div", n0, [
                              s("p", a0, V(e.alertDescription), 1)
                            ])) : x("", !0)
                          ])
                        ]),
                        s("div", s0, [
                          s("button", {
                            onClick: i[0] || (i[0] = (p) => {
                              r.$emit("cancel", !0), a();
                            }),
                            class: "po-text-sm po-bg-white po-text-slate-500 hover:po-bg-slate-50 po-transition-colors po-duration-100 po-ease-out po-font-medium po-py-3 po-px-5 po-w-1/2 focus:po-ring-0"
                          }, V(e.cancelBtnLabel), 1),
                          s("button", {
                            onClick: i[1] || (i[1] = (p) => {
                              r.$emit("confirm", !0), r.$emit("button-click", "ok"), a();
                            }),
                            class: "po-text-sm po-bg-white po-text-mpao-lightblue hover:po-bg-slate-50 po-transition-colors po-duration-100 po-ease-out po-font-medium po-py-3 po-px-5 po-w-1/2 focus:po-ring-0"
                          }, V(e.okBtnLabel), 1)
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
}), i0 = {
  key: 0,
  class: "po-col-span-2 po-relative po-mt-5"
}, u0 = /* @__PURE__ */ s("span", {
  class: "po-absolute po-top-0 po-left-1 po--ml-px po-h-[calc(100%-7px)] po-w-0.5 po-bg-gray-200",
  "aria-hidden": "true"
}, null, -1), p0 = { class: "po-relative po-space-y-5" }, c0 = { class: "po-flex po-space-x-2 po-items-start" }, d0 = { class: "log-item" }, f0 = { key: 0 }, v0 = {
  key: 0,
  class: "po-text-slate-500 po-text-xs"
}, h0 = {
  key: 1,
  class: "po-text-center po-py-10"
}, m0 = { class: "po-text-sm po-text-slate-500" }, b0 = {
  name: "PoLogs"
}, g2 = /* @__PURE__ */ L({
  ...b0,
  props: {
    items: { default: null },
    emptyLabel: { default: "No logs to display." }
  },
  setup(e) {
    return (t, o) => (u(), c("div", null, [
      e.items && e.items.length > 0 ? (u(), c("div", i0, [
        u0,
        s("div", p0, [
          (u(!0), c(I, null, U(e.items, (l, n) => (u(), c("div", c0, [
            s("p", {
              class: P([
                "po-rounded-full po-w-2 po-h-2 border-1 po-border-white po-shrink-0",
                { "po-bg-orange-400": n !== e.items.length - 1 },
                ,
                { "po-bg-slate-300": n == e.items.length - 1 }
              ])
            }, null, 2),
            s("div", d0, [
              s("span", null, [
                J(V(l.label) + " on " + V(l.date) + " " + V(l.by && l.by !== "" ? "by" : "") + " ", 1),
                l.by && l.by !== "" ? (u(), c("span", f0, V(l.by), 1)) : x("", !0)
              ]),
              l.description && l.description !== "" ? (u(), c("blockquote", v0, ' "' + V(l.description) + '" ', 1)) : x("", !0)
            ])
          ]))), 256))
        ])
      ])) : (u(), c("div", h0, [
        s("span", m0, V(e.emptyLabel), 1)
      ]))
    ]));
  }
}), g0 = {
  key: 0,
  role: "list",
  class: "po-divide-y po-divide-gray-200 po-rounded-md po-border po-border-gray-200"
}, y0 = { class: "po-flex po-items-center po-justify-between po-py-3 po-pl-3 po-pr-4 po-text-sm" }, x0 = { class: "po-flex po-w-0 po-flex-1 po-items-center" }, w0 = { class: "po-ml-2 po-w-0 po-flex-1 po-truncate" }, $0 = { class: "po-ml-4 po-flex-shrink-0 po-space-x-4" }, V0 = ["onClick"], k0 = ["onClick"], _0 = {
  key: 1,
  class: "po-py-10"
}, C0 = { class: "po-text-sm po-text-slate-500" }, S0 = {
  name: "PoDownloadFileList"
}, y2 = /* @__PURE__ */ L({
  ...S0,
  props: {
    files: { default: null },
    linkLabel: { default: "Download" },
    emptyLabel: { default: "No files to download." },
    showViewBtn: { type: Boolean, default: !1 },
    viewBtnLabel: { default: "View" }
  },
  emits: ["button-click", "view-click"],
  setup(e, { emit: t }) {
    return (o, l) => (u(), c("div", null, [
      e.files && e.files.length > 0 ? (u(), c("ul", g0, [
        (u(!0), c(I, null, U(e.files, (n) => (u(), c("li", y0, [
          s("div", x0, [
            S(w(Lt), {
              class: "po-h-5 po-w-5 po-flex-shrink-0 po-text-gray-400",
              "aria-hidden": "true"
            }),
            s("span", w0, V(n.label), 1)
          ]),
          s("div", $0, [
            s("a", {
              href: "#",
              onClick: re((a) => o.$emit("button-click", n), ["prevent"]),
              class: "po-font-medium po-text-mpao-lightblue hover:po-text-indigo-500"
            }, V(e.linkLabel), 9, V0),
            e.showViewBtn ? (u(), c("a", {
              key: 0,
              href: "#",
              onClick: re((a) => o.$emit("view-click", n), ["prevent"]),
              class: "po-font-medium po-text-mpao-lightblue hover:po-text-indigo-500"
            }, V(e.viewBtnLabel), 9, k0)) : x("", !0)
          ])
        ]))), 256))
      ])) : (u(), c("div", _0, [
        s("span", C0, V(e.emptyLabel), 1)
      ]))
    ]));
  }
}), P0 = {
  name: "PoContentArea"
}, O0 = { class: "shell-content--area po-max-w-[1370px]" };
function L0(e, t, o, l, n, a) {
  return u(), c("section", O0, [
    Y(e.$slots, "default")
  ]);
}
const x2 = /* @__PURE__ */ Ut(P0, [["render", L0]]), T0 = {
  name: "AnimatedLogo"
}, E0 = /* @__PURE__ */ Zn('<div><svg class="po-stroke-mpao-blue po-w-16 animated-logo" viewBox="0 0 62 55" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.76292 17.8572L7.7 17.9704V18.0682C6.87397 19.526 6.23618 20.649 5.58241 21.4779C4.93472 22.299 4.30505 22.7864 3.51417 23.0053C3.46261 23.0112 3.41718 23.0206 3.39088 23.026C3.35663 23.0331 3.31491 23.0425 3.27694 23.0511C3.25988 23.055 3.24357 23.0587 3.22903 23.0619C3.1106 23.0882 3.03712 23.1 3 23.1H2.93844L2.89561 23.1107L15.9876 0.600006H19.1308C17.2397 1.92747 16.1556 3.83665 15.5371 5.73245C14.8359 7.88203 14.7198 10.0514 14.7027 11.4258C13.1737 11.6033 11.0729 12.4434 9.38038 15.128C8.77075 16.0431 8.26353 16.9561 7.76713 17.8496L7.76292 17.8572Z"></path><path d="M48.1818 11.3241C48.047 8.39742 47.5389 6.05982 46.5472 4.07639C45.8153 2.61266 44.8203 1.39271 43.5945 0.5H46.8113L59.8583 23.0959C59.8303 23.0912 59.7891 23.0819 59.7213 23.0649C59.7166 23.0638 59.7117 23.0625 59.7066 23.0612C59.6302 23.042 59.5099 23.0118 59.3765 23.0027C58.59 22.7825 57.9627 22.2958 57.3176 21.4779C56.6586 20.6423 56.0158 19.508 55.1801 18.0331L55.1413 17.9647C54.8861 17.4553 54.6068 16.973 54.3362 16.5054L54.3327 16.4995C54.0565 16.0225 53.7893 15.5605 53.5472 15.0764L53.5333 15.0485L53.516 15.0226C51.7283 12.3411 49.7115 11.4988 48.1818 11.3241Z"></path><path d="M9.28397 39.6773C11.0717 42.3589 13.0885 43.2011 14.6182 43.3759C14.753 46.3026 15.2611 48.6402 16.2528 50.6236C16.9991 52.1163 17.9653 53.2992 19.1863 54.2H15.7881L2.74125 31.699C2.76073 31.6996 2.78031 31.7 2.8 31.7C2.89335 31.7 2.97474 31.7149 3.07903 31.7381C3.08854 31.7402 3.09897 31.7426 3.11023 31.7452C3.18647 31.7626 3.30082 31.7888 3.42319 31.7972C4.20888 32.0178 4.86081 32.5271 5.52047 33.3603C6.20216 34.2214 6.85697 35.382 7.66164 36.8405C8.26116 37.9396 8.76739 38.8512 9.276 39.665L9.27989 39.6712L9.28397 39.6773Z"></path><path d="M55.124 36.865L55.1331 36.8504L55.1412 36.8353C55.9431 35.3316 56.5997 34.1683 57.2697 33.307C57.9146 32.4778 58.5471 31.9616 59.2949 31.6961C59.4179 31.6866 59.5418 31.6616 59.6287 31.6442C59.6354 31.6428 59.6418 31.6415 59.6481 31.6403C59.719 31.6261 59.772 31.616 59.8123 31.6095L46.8115 54.1H43.8753C45.7283 52.7465 46.7867 50.8277 47.3889 48.9394C48.064 46.8226 48.1795 44.7058 48.1971 43.3742C49.7262 43.1967 51.8271 42.3567 53.5196 39.6719C53.8327 39.2016 54.1164 38.6849 54.3777 38.1995C54.4112 38.1375 54.4442 38.076 54.4768 38.0152C54.7049 37.5906 54.9148 37.1996 55.124 36.865Z"></path><path d="M32.2763 51.5708L32.2653 51.5582L32.2536 51.5465C32.0661 51.359 31.7413 51.2 31.4 51.2C31.3949 51.2 31.3894 51.2 31.3835 51.2C31.2956 51.1998 31.1323 51.1993 30.9751 51.2442C30.7932 51.2962 30.6132 51.4082 30.4904 51.6086C29.1941 53.0706 27.544 53.8 25.5 53.8C22.8209 53.8 20.828 52.9218 19.4532 51.2005C18.1148 49.5247 17.3123 46.988 17.1201 43.5109C18.6883 43.1579 19.8601 42.2673 20.5004 41.6896C20.5136 44.8271 20.8579 46.8152 21.6737 48.0181C22.5558 49.319 23.9045 49.6 25.5 49.6C27.4335 49.6 28.5187 48.2893 29.0946 46.9901C29.6604 45.7138 29.7966 44.3347 29.7999 43.8193C29.8943 42.5846 30.6602 41.8 31.5 41.8H31.5778C32.4558 41.8842 33.2 42.7102 33.2 43.9C33.2 45.6119 33.5619 47.0065 34.2986 47.9982C35.0485 49.0077 36.1459 49.544 37.4792 49.5996L37.4896 49.6H37.5C39.2304 49.6 40.5973 49.3258 41.4454 48.0081C41.849 47.3811 42.1078 46.5565 42.2692 45.5056C42.4311 44.4518 42.5 43.1353 42.5 41.5V24.4455L45.9 21.8182V41.5C45.9 41.4958 45.8996 41.5001 45.8978 41.519C45.8959 41.5381 45.8927 41.5719 45.887 41.6267L45.8842 41.6541C45.8752 41.7406 45.8636 41.8524 45.8521 41.9797C45.8264 42.2614 45.8 42.6283 45.8 43V43.9V43.9029V43.9059V43.9088V43.9117V43.9146V43.9175V43.9205V43.9234V43.9263V43.9292V43.9321V43.935V43.9379V43.9408V43.9437V43.9466V43.9495V43.9524V43.9553V43.9581V43.961V43.9639V43.9668V43.9696V43.9725V43.9754V43.9783V43.9811V43.984V43.9868V43.9897V43.9926V43.9954V43.9983V44.0011V44.004V44.0068V44.0096V44.0125V44.0153V44.0181V44.021V44.0238V44.0266V44.0295V44.0323V44.0351V44.0379V44.0407V44.0435V44.0463V44.0492V44.052V44.0548V44.0576V44.0603V44.0631V44.0659V44.0687V44.0715V44.0743V44.0771V44.0798V44.0826V44.0854V44.0882V44.0909V44.0937V44.0965V44.0992V44.102V44.1047V44.1075V44.1102V44.113V44.1157V44.1185V44.1212V44.1239V44.1267V44.1294V44.1321V44.1349V44.1376V44.1403V44.143V44.1457V44.1484V44.1512V44.1539V44.1566V44.1593V44.162V44.1647V44.1674V44.17V44.1727V44.1754V44.1781V44.1808V44.1835V44.1861V44.1888V44.1915V44.1941V44.1968V44.1995V44.2021V44.2048V44.2074V44.2101V44.2127V44.2154V44.218V44.2207V44.2233V44.2259V44.2285V44.2312V44.2338V44.2364V44.239V44.2417V44.2443V44.2469V44.2495V44.2521V44.2547V44.2573V44.2599V44.2625V44.2651V44.2677V44.2702V44.2728V44.2754V44.278V44.2806V44.2831V44.2857V44.2882V44.2908V44.2934V44.2959V44.2985V44.301V44.3036V44.3061V44.3087V44.3112V44.3137V44.3163V44.3188V44.3213V44.3238V44.3264V44.3289V44.3314V44.3339V44.3364V44.3389V44.3414V44.3439V44.3464V44.3489V44.3514V44.3539V44.3564V44.3588V44.3613V44.3638V44.3663V44.3687V44.3712V44.3737V44.3761V44.3786V44.381V44.3835V44.3859V44.3884V44.3908V44.3932V44.3957V44.3981V44.4005V44.403V44.4054V44.4078V44.4102V44.4126V44.415V44.4174V44.4199V44.4223V44.4247V44.427V44.4294V44.4318V44.4342V44.4366V44.439V44.4413V44.4437V44.4461V44.4484V44.4508V44.4532V44.4555V44.4579V44.4602V44.4626V44.4649V44.4672V44.4696V44.4719V44.4742V44.4766V44.4789V44.4812V44.4835V44.4858V44.4882V44.4905V44.4928V44.4951V44.4974V44.4997V44.5019V44.5042V44.5065V44.5088V44.5111V44.5133V44.5156V44.5179V44.5201V44.5224V44.5247V44.5269V44.5292V44.5314V44.5337V44.5359V44.5381V44.5404V44.5426V44.5448V44.547V44.5493V44.5515V44.5537V44.5559V44.5581V44.5603V44.5625V44.5647V44.5669V44.5691V44.5713V44.5734V44.5756V44.5778V44.58V44.5821V44.5843V44.5865V44.5886V44.5908V44.5929V44.5951V44.5972V44.5994V44.6015V44.6036V44.6058V44.6079V44.61V44.6121V44.6142V44.6164V44.6185V44.6206V44.6227V44.6248V44.6269V44.6289V44.631V44.6331V44.6352V44.6373V44.6393V44.6414V44.6435V44.6455V44.6476V44.6497V44.6517V44.6538V44.6558V44.6578V44.6599V44.6619V44.6639V44.666V44.668V44.67V44.672V44.674V44.676V44.678V44.68V44.682V44.684V44.686V44.688V44.69V44.692V44.6939V44.6959V44.6979V44.6998V44.7018V44.7037V44.7057V44.7076V44.7096V44.7115V44.7135V44.7154V44.7173V44.7193V44.7212V44.7231V44.725V44.7269V44.7288V44.7307V44.7326V44.7345V44.7364V44.7383V44.7402V44.7421V44.7439V44.7458V44.7477V44.7495V44.7514V44.7533V44.7551V44.757V44.7588V44.7606V44.7625V44.7643V44.7661V44.768V44.7698V44.7716V44.7734V44.7752V44.777V44.7788V44.7806V44.7824V44.7842V44.786V44.7878V44.7896V44.7914V44.7931V44.7949V44.7967V44.7984V44.8002V44.8019V44.8037V44.8054V44.8071V44.8089V44.8106V44.8123V44.8141V44.8158V44.8175V44.8192V44.8209V44.8226V44.8243V44.826V44.8277V44.8294V44.8311V44.8328V44.8344V44.8361V44.8378V44.8394V44.8411V44.8427V44.8444V44.846V44.8477V44.8493V44.851V44.8526V44.8542V44.8558V44.8575V44.8591V44.8607V44.8623V44.8639V44.8655V44.8671V44.8687V44.8702V44.8718V44.8734V44.875V44.8765V44.8781V44.8797V44.8812V44.8828V44.8843V44.8859V44.8874V44.8889V44.8905V44.892V44.8935V44.895V44.8965V44.898V44.8996V44.9011V44.9025V44.904V44.9055V44.907V44.9085V44.91V44.9114V44.9129V44.9144V44.9158V44.9173V44.9187V44.9202V44.9216V44.923V44.9245V44.9259V44.9273V44.9288V44.9302V44.9316V44.933V44.9344V44.9358V44.9372V44.9386V44.9399V44.9413V44.9427V44.9441V44.9454V44.9468V44.9482V44.9495V44.9509V44.9522V44.9535V44.9549V44.9562V44.9575V44.9589V44.9602V44.9615V44.9628V44.9641V44.9654V44.9667V44.968V44.9693V44.9706V44.9718V44.9731V44.9744V44.9757V44.9769V44.9782V44.9794V44.9807V44.9819V44.9832V44.9844V44.9856V44.9868V44.9881V44.9893V44.9905V44.9917V44.9929V44.9941V44.9953V44.9965V44.9977V44.9988V45V45.1V45.1006V45.1012V45.1017V45.1023V45.1029V45.1035V45.104V45.1046V45.1052V45.1057V45.1063V45.1069V45.1074V45.108V45.1085V45.1091V45.1096V45.1102V45.1107V45.1113V45.1118V45.1123V45.1129V45.1134V45.1139V45.1145V45.115V45.1155V45.1161V45.1166V45.1171V45.1176V45.1181V45.1186V45.1191V45.1196V45.1202V45.1207V45.1212V45.1217V45.1222V45.1226V45.1231V45.1236V45.1241V45.1246V45.1251V45.1256V45.1261V45.1265V45.127V45.1275V45.128V45.1284V45.1289V45.1294V45.1298V45.1303V45.1307V45.1312V45.1317V45.1321V45.1326V45.133V45.1335V45.1339V45.1343V45.1348V45.1352V45.1357V45.1361V45.1365V45.137V45.1374V45.1378V45.1383V45.1387V45.1391V45.1395V45.1399V45.1404V45.1408V45.1412V45.1416V45.142V45.1424V45.1428V45.1432V45.1436V45.144V45.1444V45.1448V45.1452V45.1456V45.146V45.1464V45.1468V45.1471V45.1475V45.1479V45.1483V45.1487V45.149V45.1494V45.1498V45.1501V45.1505V45.1509V45.1512V45.1516V45.152V45.1523V45.1527V45.153V45.1534V45.1537V45.1541V45.1544V45.1548V45.1551V45.1555V45.1558V45.1561V45.1565V45.1568V45.1572V45.1575V45.1578V45.1581V45.1585V45.1588V45.1591V45.1594V45.1598V45.1601V45.1604V45.1607V45.161V45.1613V45.1616V45.162V45.1623V45.1626V45.1629V45.1632V45.1635V45.1638V45.1641V45.1644V45.1647V45.165V45.1652V45.1655V45.1658V45.1661V45.1664V45.1667V45.167V45.1672V45.1675V45.1678V45.1681V45.1683V45.1686V45.1689V45.1691V45.1694V45.1697V45.1699V45.1702V45.1705V45.1707V45.171V45.1712V45.1715V45.1717V45.172V45.1722V45.1725V45.1727V45.173V45.1732V45.1735V45.1737V45.174V45.1742V45.1744V45.1747V45.1749V45.1751V45.1753C45.5039 48.1507 44.6544 50.2924 43.3031 51.6899C41.9582 53.0807 40.0524 53.8 37.5 53.8C35.4235 53.8 33.5685 53.0476 32.2763 51.5708Z"></path><path d="M22.8 23.2538V18.2178L29.3909 23.307L26.1939 25.8645L22.8 23.2538Z"></path><path d="M16.7 20.2V19.7H16.5V18.8V10.858C16.5042 10.8478 16.5096 10.8348 16.5142 10.8232C16.5488 10.7368 16.5963 10.6012 16.5998 10.4209C16.8474 7.03069 17.6799 4.61275 19.0737 3.04468C20.4543 1.49155 22.4511 0.699997 25.2 0.699997C27.2568 0.699997 29.1263 1.53906 30.5352 3.04197L30.5407 3.04785L30.5464 3.05355C30.7614 3.26854 31.0508 3.35 31.3 3.35C31.5492 3.35 31.8386 3.26854 32.0536 3.05355L32.0646 3.04251L32.0749 3.03081C33.4779 1.4408 35.1402 0.699997 37.3 0.699997C40.0769 0.699997 42.1441 1.62655 43.5571 3.42174C44.934 5.17104 45.7393 7.80743 45.886 11.3874C44.0184 11.8028 42.6345 12.9721 42.1 13.4936V13.2C42.1 10.0544 41.7835 8.06299 40.9925 6.86242C40.1497 5.58316 38.8495 5.3 37.3 5.3C35.4114 5.3 34.3769 6.59229 33.8399 7.85422C33.3055 9.11015 33.2 10.457 33.2 10.9C33.2 12.2634 32.2859 13.1 31.3 13.1H31.2204C30.2388 13.0141 29.4 12.0845 29.4 10.8C29.4 9.19015 29.0639 7.84653 28.3661 6.89234C27.6525 5.91665 26.5974 5.4 25.3 5.4C23.6267 5.4 22.3017 5.64608 21.4896 6.93319C21.1052 7.5425 20.863 8.34586 20.7131 9.3714C20.5626 10.4004 20.5 11.6909 20.5 13.3V30.4541L16.7 33.3833V20.2Z"></path><path d="M40.1 31.5462V36.5799L33.4225 31.4049L36.6974 28.9288L40.1 31.5462Z"></path><mask id="path-9-inside-1" fill="white"><path d="M58.7 30.1C58.9 30 59.5 30 59.8 29.9C60.9 29.8 61.8 28.7 61.8 27.4C61.8 26.1 60.9 25 59.8 24.9C59.7 24.9 59.5 24.9 59.4 24.8C59.3 24.8 59.2 24.8 59.1 24.7C59.1 24.7 59.1 24.7 59 24.7C58.6 24.6 58.1 24.4 57.7 24.1C57.7 24.1 57.7 24.1 57.6 24C56.1 23.1 55 21.2 53.6 18.7C53.1 17.8 52.6 16.9 52 16C50.5 13.7 48.9 13.1 47.8 13C47.7 13 47.6 13 47.5 13H47.3C47.1 13 46.9 13 46.9 13C45.2 13.2 44 14.3 43.6 14.8L25.2 29.1C25.2 29.1 25.2 29.1 25.1 29.2L23 30.8L16.8 35.5L16.4 35.9C16.4 35.9 16.4 35.9 16.3 35.9C16 36.1 15.7 36.3 15.4 36.3C15.1 36.3 14.9 36.2 14.7 36.1C14.5 35.9 14.4 35.8 14.3 35.5C13.9 34.8 13.4 34.1 13 33.3V33.1C12.2 31.7 11.3 30 10.1 28.6C10.1 28.6 10.1 28.6 10.1 28.5L10 28.4C9.9 28.3 9.9 28.3 9.8 28.2C9.8 28.2 9.8 28.2 9.7 28.1L9.2 27.5C9.2 27.5 9.2 27.5 9.1 27.5C9 27.3 9 27.1 9.1 27L9.6 26.5C10.9 25 11.9 23.2 12.8 21.6V21.5C13.2 20.7 13.7 19.9 14.2 19.1C14.4 18.8 14.6 18.6 14.7 18.5V13.1C13.6 13.2 12 13.9 10.6 16C10 16.9 9.5 17.8 9 18.7C7.8 20.9 6.8 22.5 5.6 23.5C4.8 24.1 4 24.4 3.5 24.6C3.5 24.6 3.5 24.6 3.4 24.6C3.3 24.6 3.1 24.7 3 24.7C2.9 24.7 2.9 24.7 2.8 24.7C2.7 24.7 2.7 24.7 2.7 24.7H2.6H2.5C2.3 24.7 2.2 24.8 2.1 24.8C2 24.8 2 24.8 2 24.9C1.7 25.1 1.4 25.3 1.2 25.6C1.2 25.7 1.1 25.7 1.1 25.8V25.9L0.999997 26.1C0.999997 26.2 0.999997 26.2 0.899997 26.3C0.899997 26.4 0.899997 26.4 0.799997 26.5C0.799997 26.6 0.799997 26.7 0.699997 26.7C0.699997 26.8 0.699997 26.9 0.699997 26.9C0.699997 27 0.699997 27.1 0.699997 27.1C0.699997 27.2 0.699997 27.2 0.699997 27.3C0.699997 27.4 0.699997 27.5 0.699997 27.5C0.699997 27.6 0.699997 27.7 0.699997 27.7C0.699997 27.8 0.699997 27.9 0.799997 27.9V28V28.1C0.799997 28.2 0.799997 28.2 0.899997 28.2L0.999997 28.4C0.999997 28.5 1.1 28.5 1.1 28.5C1.1 28.5 1.1 28.5 1.1 28.6C1.2 28.7 1.3 28.9 1.5 29C1.6 29 1.6 29.1 1.7 29.1C1.7 29.1 1.8 29.1 1.8 29.2C1.8 29.2 1.8 29.2 1.9 29.2C2 29.3 2.2 29.3 2.3 29.4C2.4 29.4 2.4 29.4 2.4 29.4L2.9 29.5C3.1 29.5 3.2 29.6 3.4 29.6C4.2 29.8 4.7 30.2 4.8 30.2C6.4 31.2 7.5 33 8.9 35.5C9.5 36.6 10 37.4 10.5 38.2C11.9 40.3 13.4 41 14.4 41.1C14.5 41.1 14.5 41.1 14.6 41.1C14.7 41.1 14.8 41.1 14.8 41.1C15 41.1 15.2 41.1 15.5 41.1H15.6C17.2 40.8 18.5 39.8 18.9 39.3L19 39.2L19.8 38.6C19.8 38.6 19.9 38.5 20 38.5L30.2 30.6L41.3 22L46.5 18H46.6C46.7 18 46.9 17.9 47 17.9C47.4 17.9 47.8 18.1 48.1 18.6L48.5 19.2C48.8 19.7 49.2 20.3 49.5 20.9V21C50.1 22.1 50.8 23.4 51.7 24.6C51.7 24.6 51.7 24.7 51.8 24.7C52.1 25.1 52.4 25.5 52.7 25.8C52.7 25.8 52.8 25.8 52.8 25.9C53 26.1 53.1 26.3 53.3 26.4C53.4 26.5 53.4 26.7 53.3 26.9C52 28.5 50.4 31.1 49.6 32.4V32.5C49.2 33.2 48.7 34.1 48.2 34.9C48 35.2 47.8 35.4 47.7 35.5V40.9C48.8 40.8 50.4 40.1 51.8 37.9C52.4 37 52.9 36 53.4 35.2C53.5 35 53.7 34.7 53.8 34.5C55.2 33 56.4 30.9 58.7 30.1Z"></path></mask><path d="M58.7 30.1C58.9 30 59.5 30 59.8 29.9C60.9 29.8 61.8 28.7 61.8 27.4C61.8 26.1 60.9 25 59.8 24.9C59.7 24.9 59.5 24.9 59.4 24.8C59.3 24.8 59.2 24.8 59.1 24.7C59.1 24.7 59.1 24.7 59 24.7C58.6 24.6 58.1 24.4 57.7 24.1C57.7 24.1 57.7 24.1 57.6 24C56.1 23.1 55 21.2 53.6 18.7C53.1 17.8 52.6 16.9 52 16C50.5 13.7 48.9 13.1 47.8 13C47.7 13 47.6 13 47.5 13H47.3C47.1 13 46.9 13 46.9 13C45.2 13.2 44 14.3 43.6 14.8L25.2 29.1C25.2 29.1 25.2 29.1 25.1 29.2L23 30.8L16.8 35.5L16.4 35.9C16.4 35.9 16.4 35.9 16.3 35.9C16 36.1 15.7 36.3 15.4 36.3C15.1 36.3 14.9 36.2 14.7 36.1C14.5 35.9 14.4 35.8 14.3 35.5C13.9 34.8 13.4 34.1 13 33.3V33.1C12.2 31.7 11.3 30 10.1 28.6C10.1 28.6 10.1 28.6 10.1 28.5L10 28.4C9.9 28.3 9.9 28.3 9.8 28.2C9.8 28.2 9.8 28.2 9.7 28.1L9.2 27.5C9.2 27.5 9.2 27.5 9.1 27.5C9 27.3 9 27.1 9.1 27L9.6 26.5C10.9 25 11.9 23.2 12.8 21.6V21.5C13.2 20.7 13.7 19.9 14.2 19.1C14.4 18.8 14.6 18.6 14.7 18.5V13.1C13.6 13.2 12 13.9 10.6 16C10 16.9 9.5 17.8 9 18.7C7.8 20.9 6.8 22.5 5.6 23.5C4.8 24.1 4 24.4 3.5 24.6C3.5 24.6 3.5 24.6 3.4 24.6C3.3 24.6 3.1 24.7 3 24.7C2.9 24.7 2.9 24.7 2.8 24.7C2.7 24.7 2.7 24.7 2.7 24.7H2.6H2.5C2.3 24.7 2.2 24.8 2.1 24.8C2 24.8 2 24.8 2 24.9C1.7 25.1 1.4 25.3 1.2 25.6C1.2 25.7 1.1 25.7 1.1 25.8V25.9L0.999997 26.1C0.999997 26.2 0.999997 26.2 0.899997 26.3C0.899997 26.4 0.899997 26.4 0.799997 26.5C0.799997 26.6 0.799997 26.7 0.699997 26.7C0.699997 26.8 0.699997 26.9 0.699997 26.9C0.699997 27 0.699997 27.1 0.699997 27.1C0.699997 27.2 0.699997 27.2 0.699997 27.3C0.699997 27.4 0.699997 27.5 0.699997 27.5C0.699997 27.6 0.699997 27.7 0.699997 27.7C0.699997 27.8 0.699997 27.9 0.799997 27.9V28V28.1C0.799997 28.2 0.799997 28.2 0.899997 28.2L0.999997 28.4C0.999997 28.5 1.1 28.5 1.1 28.5C1.1 28.5 1.1 28.5 1.1 28.6C1.2 28.7 1.3 28.9 1.5 29C1.6 29 1.6 29.1 1.7 29.1C1.7 29.1 1.8 29.1 1.8 29.2C1.8 29.2 1.8 29.2 1.9 29.2C2 29.3 2.2 29.3 2.3 29.4C2.4 29.4 2.4 29.4 2.4 29.4L2.9 29.5C3.1 29.5 3.2 29.6 3.4 29.6C4.2 29.8 4.7 30.2 4.8 30.2C6.4 31.2 7.5 33 8.9 35.5C9.5 36.6 10 37.4 10.5 38.2C11.9 40.3 13.4 41 14.4 41.1C14.5 41.1 14.5 41.1 14.6 41.1C14.7 41.1 14.8 41.1 14.8 41.1C15 41.1 15.2 41.1 15.5 41.1H15.6C17.2 40.8 18.5 39.8 18.9 39.3L19 39.2L19.8 38.6C19.8 38.6 19.9 38.5 20 38.5L30.2 30.6L41.3 22L46.5 18H46.6C46.7 18 46.9 17.9 47 17.9C47.4 17.9 47.8 18.1 48.1 18.6L48.5 19.2C48.8 19.7 49.2 20.3 49.5 20.9V21C50.1 22.1 50.8 23.4 51.7 24.6C51.7 24.6 51.7 24.7 51.8 24.7C52.1 25.1 52.4 25.5 52.7 25.8C52.7 25.8 52.8 25.8 52.8 25.9C53 26.1 53.1 26.3 53.3 26.4C53.4 26.5 53.4 26.7 53.3 26.9C52 28.5 50.4 31.1 49.6 32.4V32.5C49.2 33.2 48.7 34.1 48.2 34.9C48 35.2 47.8 35.4 47.7 35.5V40.9C48.8 40.8 50.4 40.1 51.8 37.9C52.4 37 52.9 36 53.4 35.2C53.5 35 53.7 34.7 53.8 34.5C55.2 33 56.4 30.9 58.7 30.1Z"></path></svg></div>', 1), B0 = [
  E0
];
function z0(e, t, o, l, n, a) {
  return u(), c("div", null, B0);
}
const M0 = /* @__PURE__ */ Ut(T0, [["render", z0]]), A0 = {
  key: 0,
  class: "po-fixed po-z-[999] po-top-0 po-bottom-0 po-left-0 po-right-0 po-flex po-items-center po-justify-center"
}, D0 = /* @__PURE__ */ s("div", { class: "po-absolute po-w-[6.2rem] po-h-[6.2rem] po-bg-transparent po-overflow-hidden po-rounded-xl" }, [
  /* @__PURE__ */ s("div", { class: "po-loading-rotate po-absolute -po-top-8 -po-left-8 po-w-[10rem] po-h-[10rem]" })
], -1), I0 = { class: "relative po-bg-white po-w-24 po-h-24 po-flex po-items-center po-justify-center po-rounded-xl po-bg-opacity-50 po-backdrop-blur po-backdrop-filter po-z-10 po-shadow-xl" }, j0 = {
  key: 0,
  class: "po-absolute po-left-1 po-right-1 po-text-center po-py-1 po-text-xs po-text-mpao-blue po-bg-white po-bg-opacity-50 po-backdrop-blur po-backdrop-filter"
}, R0 = {
  name: "PoLoading"
}, w2 = /* @__PURE__ */ L({
  ...R0,
  props: {
    show: { type: Boolean, default: !1 },
    label: { default: "" }
  },
  setup(e) {
    return (t, o) => e.show ? (u(), c("div", A0, [
      D0,
      s("div", I0, [
        e.label !== "" ? (u(), c("span", j0, V(e.label), 1)) : x("", !0),
        S(M0)
      ])
    ])) : x("", !0);
  }
}), F0 = { class: "po-py-5 po-flex po-items-start po-space-x-5" }, N0 = ["name", "id", "checked", "aria-describedby"], H0 = { class: "po-grow -po-mt-[0.26rem]" }, q0 = ["for"], W0 = { class: "po-mt-2 po-flex po-space-x-3" }, U0 = ["href", "onClick"], G0 = {
  name: "PoConsent"
}, $2 = /* @__PURE__ */ L({
  ...G0,
  props: {
    modelValue: { type: Boolean, default: !1 },
    label: { default: "" },
    id: { default: "consent-checkbox" },
    links: { default: null }
  },
  setup(e) {
    return (t, o) => (u(), c("div", F0, [
      s("input", ke({
        type: "checkbox",
        name: `${e.id}-field`,
        id: e.id,
        checked: e.modelValue,
        "aria-describedby": `${e.id}-description`
      }, t.$attrs, {
        onInput: o[0] || (o[0] = (l) => t.$emit("update:modelValue", l.target.checked)),
        class: "po-shrink-0 po-h-4 po-w-4 po-rounded border-slate-300 po-text-mpao-lightblue focus:po-ring-mpao-lightblue"
      }), null, 16, N0),
      s("div", H0, [
        s("label", {
          class: "po-block po-select-none po-text-sm po-text-slate-600 po-cursor-pointer",
          for: e.id
        }, V(e.label), 9, q0),
        s("div", W0, [
          (u(!0), c(I, null, U(e.links, (l) => (u(), c("a", {
            href: l.url,
            onClick: re((n) => t.$emit("button-click", l.url), ["prevent"]),
            class: "po-text-sm po-text-mpao-lightblue hover:po-text-mpao-blue"
          }, V(l.label), 9, U0))), 256))
        ])
      ])
    ]));
  }
}), Z0 = {
  class: "po-flex po-bg-slate-50 po-rounded-t-xl po-justify-center lg:po-justify-start po-px-4 po-pt-4 xl:po-pt-2 po-flex-wrap po-overflow-hidden",
  "aria-label": "Tabs"
}, K0 = ["onClick", "aria-current"], Y0 = { key: 0 }, X0 = {
  name: "PoCardTabs"
}, V2 = /* @__PURE__ */ L({
  ...X0,
  props: {
    tabs: { default: null }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    function o(l) {
      return l.iconColor ? l.iconColor : "po-fill-current";
    }
    return (l, n) => (u(), c("nav", Z0, [
      (u(!0), c(I, null, U(e.tabs, (a) => (u(), c("span", {
        role: "button",
        onClick: (r) => l.$emit("button-click", a),
        key: a.name,
        class: P([
          a.current ? "po-bg-white po-text-slate-600 po-shadow-lg" : "po-text-slate-600 hover:po-text-mpao-blue",
          "po-px-4 po-py-3 po-font-medium po-mr-4 po-mb-4 xl:po-mb-0 po-text-sm po-cursor-pointer po-rounded-xl xl:po-rounded-b-none genie-effect hover:po-text-slate-600 hover:po-bg-white hover:po-shadow-md po-flex po-items-center po-flex-shrink-0 po-space-x-2"
        ]),
        "aria-current": a.current ? "page" : void 0
      }, [
        a.icon ? (u(), j(de(a.icon), {
          key: 0,
          class: P(["po-w-5 po-h-5", [o(a)]])
        }, null, 8, ["class"])) : x("", !0),
        s("span", null, [
          J(V(a.name), 1),
          a.count ? (u(), c("span", Y0, " (" + V(a.count) + ")", 1)) : x("", !0)
        ])
      ], 10, K0))), 128))
    ]));
  }
}), Q0 = { class: "sm:po-hidden" }, J0 = /* @__PURE__ */ s("label", {
  for: "tabs",
  class: "po-sr-only"
}, "Select a tab", -1), ef = ["value", "selected"], tf = { class: "po-hidden sm:po-block" }, of = {
  class: "po-flex po-space-x-4 po-pt-2",
  "aria-label": "Tabs"
}, lf = ["onClick", "aria-current"], nf = {
  name: "PoTabs"
}, k2 = /* @__PURE__ */ L({
  ...nf,
  props: {
    tabs: { default: null },
    currentTab: { default: "" }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    const o = e;
    function l(r) {
      return r.iconColor ? r.iconColor : "po-fill-current";
    }
    const n = B(() => {
      var r;
      return (r = o.tabs) == null ? void 0 : r.map((i) => i.name === o.currentTab ? { ...i, current: !0 } : { ...i, current: !1 });
    });
    function a(r) {
      const i = Number(r.target.value);
      if (o.tabs) {
        const p = o.tabs[i];
        t("button-click", p);
      }
    }
    return (r, i) => (u(), c(I, null, [
      s("div", Q0, [
        J0,
        s("select", {
          id: "tabs",
          name: "tabs",
          class: "po-block po-w-full po-rounded-md po-border-gray-300 focus:po-border-indigo-500 focus:po-ring-indigo-500",
          onChange: a
        }, [
          (u(!0), c(I, null, U(e.tabs, (p, f) => (u(), c("option", {
            key: p.name,
            value: f,
            selected: p.current
          }, V(p.name), 9, ef))), 128))
        ], 32)
      ]),
      s("div", tf, [
        s("nav", of, [
          (u(!0), c(I, null, U(w(n), (p) => (u(), c("span", {
            onClick: (f) => r.$emit("button-click", p),
            role: "button",
            key: p.name,
            class: P([
              p.current ? " po-text-slate-600 po-shadow-md po-border po-border-sky-200" : " po-text-slate-600 po-shadow-sm hover:po-text-mpao-blue",
              "po-bg-white po-px-4 po-relative po-group po-py-3 po-font-medium po-text-sm po-cursor-pointer po-rounded-xl genie-effect hover:po-text-slate-600 hover:po-bg-white hover:po-shadow-md po-flex po-items-center po-space-x-2"
            ]),
            "aria-current": p.current ? "page" : void 0
          }, [
            p.icon ? (u(), j(de(p.icon), {
              key: 0,
              class: P(["po-w-5 po-h-5", [l(p)]])
            }, null, 8, ["class"])) : x("", !0),
            s("span", null, [
              s("span", null, V(p.name), 1),
              p.count && p.count > 0 ? (u(), c("span", {
                key: 0,
                class: P(["po-absolute po-py-1 po-px-2 po-rounded-full po-text-xs -po-top-3 -po-right-2 po-shadow-md po-flex po-items-center po-justify-center", [
                  p.current ? "po-bg-mpao-orange po-text-white" : "po-bg-slate-400 po-text-white group-hover:po-bg-mpao-orange group-hover:po-text-white"
                ]])
              }, [
                s("span", null, V(p.count), 1)
              ], 2)) : x("", !0)
            ])
          ], 10, lf))), 128))
        ])
      ])
    ], 64));
  }
}), af = { class: "po-mt-5 po-flex po-flex-col po-items-center po-justify-center po-px-5 po-py-8" }, sf = {
  key: 1,
  class: "po-text-base po-font-medium po-text-slate-600 po-text-center"
}, rf = {
  key: 2,
  class: "po-text-sm po-text-slate-500 po-text-center po-max-w-lg po-block po-mx-auto"
}, uf = {
  name: "PoEmpty"
}, _2 = /* @__PURE__ */ L({
  ...uf,
  props: {
    label: { default: "" },
    description: { default: "" },
    icon: { type: [Function, null], default: null },
    iconColor: { default: "po-stroke-slate-300" }
  },
  setup(e) {
    return (t, o) => (u(), c("div", af, [
      s("div", {
        class: P(["po-space-y-2 po-flex po-items-center po-flex-col po-justify-center", [{ "po-mb-5": t.$slots.action }]])
      }, [
        e.icon ? (u(), j(de(e.icon), {
          key: 0,
          class: P(["po-w-10 po-h-10", e.iconColor])
        }, null, 8, ["class"])) : x("", !0),
        e.label !== "" ? (u(), c("span", sf, V(e.label), 1)) : x("", !0),
        e.description !== "" ? (u(), c("span", rf, V(e.description), 1)) : x("", !0)
      ], 2),
      Y(t.$slots, "action")
    ]));
  }
}), pf = { class: "po-flex po-text-sm po-text-gray-700 po-flex-col po-space-y-5" }, cf = {
  key: 0,
  class: "po-text-base po-font-medium po-text-slate-700"
}, df = {
  key: 1,
  class: "po-border po-border-orange-300 po-bg-orange-50 po-rounded-lg po-p-5 po-flex po-items-center po-space-x-3"
}, ff = { class: "po-grow po-text-sm po-text-slate-600" }, vf = {
  key: 2,
  class: "po-border po-border-red-300 po-bg-red-50 po-rounded-lg po-p-5 po-flex po-space-x-4"
}, hf = { class: "po-grow" }, mf = { class: "po-text-base po-text-slate-700 po-font-medium" }, bf = { class: "po-text-sm po-text-slate-600" }, gf = { class: "po-font-medium" }, yf = { key: 0 }, xf = { key: 0 }, wf = /* @__PURE__ */ s("dt", null, "Name", -1), $f = { key: 1 }, Vf = /* @__PURE__ */ s("dt", null, "Identifer", -1), kf = { key: 2 }, _f = /* @__PURE__ */ s("dt", null, "Date of birth", -1), Cf = { key: 3 }, Sf = /* @__PURE__ */ s("dt", null, "Reported Date of death", -1), Pf = {
  key: 3,
  class: "po-pt-5"
}, Of = { class: "po-flex po-items-center po-space-x-1" }, Lf = /* @__PURE__ */ s("span", null, "File a dispute.", -1), Tf = {
  name: "PoDRStatus"
}, C2 = /* @__PURE__ */ L({
  ...Tf,
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
    return (l, n) => (u(), c("span", pf, [
      e.record !== null ? (u(), c("h2", cf, " Death was reported by " + V(e.record.institution), 1)) : x("", !0),
      e.request !== null && e.request.type_id === 1 ? (u(), c("div", df, [
        S(w(to), { class: "po-shrink-0 po-w-6 po-stroke-orange-600" }),
        s("span", ff, " This is a " + V(e.request.type) + " request and is in " + V(e.request.state) + " state. ", 1)
      ])) : x("", !0),
      e.request !== null && e.request.type_id !== 1 ? (u(), c("div", vf, [
        S(w(to), { class: "po-shrink-0 po-w-6 po-h-6 po-stroke-red-600 po-stroke-2" }),
        s("div", hf, [
          s("h3", mf, V(e.request.type), 1),
          s("p", bf, [
            J(" The following " + V(e.request.type) + " was reported: ", 1),
            s("span", gf, [
              J(V(e.request.dispute_type), 1),
              e.request.date_of_death ? (u(), c("span", yf, " (New date: " + V(e.request.date_of_death) + ")", 1)) : x("", !0)
            ])
          ])
        ])
      ])) : x("", !0),
      S(yc, null, {
        content: z(() => [
          e.member !== null ? (u(), c("div", xf, [
            wf,
            s("dd", null, V(e.member.name), 1)
          ])) : x("", !0),
          e.member !== null ? (u(), c("div", $f, [
            Vf,
            s("dd", null, V(e.member.identifier), 1)
          ])) : x("", !0),
          e.member !== null ? (u(), c("div", kf, [
            _f,
            s("dd", null, V(e.member.dob), 1)
          ])) : x("", !0),
          e.record !== null ? (u(), c("div", Cf, [
            Sf,
            s("dd", null, V(e.record.date_of_death), 1)
          ])) : x("", !0)
        ]),
        _: 1
      }),
      e.request === null ? (u(), c("span", Pf, [
        S(To, {
          type: "simple",
          onButtonClick: o
        }, {
          label: z(() => [
            s("span", Of, [
              S(w(ta), { class: "po-w-4 po-h-4 po-stroke-current" }),
              Lf
            ])
          ]),
          _: 1
        })
      ])) : x("", !0)
    ]));
  }
}), Ef = {
  role: "button",
  class: "po-w-6 po-h-6 po-rounded-lg po-bg-white genie-effect po-flex po-items-center po-justify-center hover:po-bg-slate-50 po-cursor-pointer"
}, Bf = {
  name: "PoTableAction"
}, S2 = /* @__PURE__ */ L({
  ...Bf,
  props: {
    btnIcon: { type: [Function, null], default: null },
    btnType: { default: "text" },
    label: { default: "" },
    textColor: { default: "po-slate-500" },
    iconColor: { default: "po-stroke-slate-500" }
  },
  setup(e) {
    const t = e, o = C(), l = C(), n = C(t.label);
    return t.btnType === "view" ? (o.value = ia, n.value = t.label === "" ? "View" : t.label) : t.btnType === "edit" ? (o.value = pa, n.value = t.label === "" ? "Edit" : t.label) : t.btnType === "delete" ? (o.value = da, n.value = t.label === "" ? "Delete" : t.label) : t.btnType === "icon" && t.btnIcon && (o.value = t.btnIcon), t.btnType === "view" ? l.value = "po-stroke-emerald-400" : t.btnType === "edit" ? l.value = "po-stroke-blue-400" : t.btnType === "delete" ? l.value = "po-stroke-red-400" : l.value = t.iconColor, (a, r) => (u(), c("span", null, [
      e.btnType === "icon" || e.btnType === "delete" || e.btnType === "edit" || e.btnType === "view" ? (u(), j(w(vo), {
        key: 0,
        text: n.value,
        placement: "bottom",
        strategy: "fixed"
      }, {
        default: z(() => [
          s("span", Ef, [
            (u(), j(de(o.value), {
              class: P(["po-w-4 po-stroke-2", l.value])
            }, null, 8, ["class"]))
          ])
        ]),
        _: 1
      }, 8, ["text"])) : (u(), c("span", {
        key: 1,
        role: "button",
        class: P(["po-block po-text-sm genie-effect", e.textColor])
      }, V(e.label), 3))
    ]));
  }
}), zf = { key: 0 }, Mf = {
  name: "Rufiyaa"
}, P2 = /* @__PURE__ */ L({
  ...Mf,
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
    return (o, l) => (u(), c("span", null, [
      e.amount !== null ? (u(), c("span", zf, V(t(e.amount)), 1)) : x("", !0)
    ]));
  }
}), Af = {
  name: "PoHeading"
}, O2 = /* @__PURE__ */ L({
  ...Af,
  props: {
    text: { default: "" },
    type: { default: "h3" }
  },
  setup(e) {
    return (t, o) => (u(), j(de(e.type), { class: "po-text-base po-text-slate-600 po-font-semibold" }, {
      default: z(() => [
        J(V(e.text), 1)
      ]),
      _: 1
    }));
  }
}), Df = ["for"], If = { class: "po-capitalize" }, jf = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, Rf = ["title"], Ff = { class: "po-relative po-mt-1" }, Nf = { class: "po-shrink-0 po-pr-1 po-inline-flex po-flex-wrap po-w-full po-gap-1 po-max-h-44" }, Hf = { class: "po-px-2 po-py-1 po-rounded-md po-text-sm po-text-slate-600 po-flex po-space-x-2 po-items-center po-bg-gradient-to-l po-from-slate-50 po-via-cyan-50 po-to-cyan-100/60 po-border po-border-cyan-200" }, qf = ["onClick"], Wf = ["id"], Uf = {
  key: 0,
  class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
}, Gf = ["onClick", "value"], Zf = {
  class: /* @__PURE__ */ P(["po-block po-truncate"])
}, Kf = ["id"], Yf = ["id"], Xf = {
  name: "PoMultiSelect",
  components: { CheckIcon: aa }
}, L2 = /* @__PURE__ */ L({
  ...Xf,
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
    const n = C(""), a = C([]), r = C(!1);
    function i(g) {
      a.value.splice(g, 1), d();
    }
    function p(g) {
      let v = n.value.split(",");
      g.key === "Enter" && 0 < n.value.length && (g.preventDefault(), v.forEach(($) => {
        var O;
        let _ = (O = o.items) == null ? void 0 : O.find(
          (k) => k.name.toLowerCase() === $.trim().toLowerCase()
        );
        _ && a.value.push(_);
      }), n.value = ""), g.key === "Backspace" && n.value.length === 0 && r.value && a.value.pop(), d();
    }
    const f = C([]);
    function d() {
      f.value = a.value.map((g) => g.id);
    }
    G(() => {
      document.addEventListener("keydown", p);
    }), ae(() => {
      document.removeEventListener("keydown", p);
    });
    const m = C(!1), y = B(
      () => {
        var g;
        return n.value === "" ? o.items : (g = o.items) == null ? void 0 : g.filter((v) => v.name.toLowerCase().includes(n.value.toLowerCase()));
      }
    );
    let h = C();
    Ro(h, () => {
      m.value = !1;
    });
    function b(g) {
      a.value.push(g), n.value = "", d();
    }
    return Q(f, () => {
      t("update:modelValue", f.value);
    }), (g, v) => (u(), c("div", {
      ref_key: "multiSelectComponentRef",
      ref: h,
      class: P(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      s("label", {
        for: e.id,
        class: P([
          "po-text-sm po-font-medium po-flex po-items-center po-space-x-1",
          { "po-text-red-500": e.hasError },
          { "po-text-slate-700": !e.hasError }
        ])
      }, [
        s("span", If, V(e.label), 1),
        e.required ? (u(), c("span", jf, "*")) : x("", !0),
        e.info !== null ? (u(), c("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          S(w(Pn), { class: "po-fill-current" })
        ], 8, Rf)) : x("", !0)
      ], 10, Df),
      s("div", Ff, [
        s("div", {
          class: P([
            "po-border po-p-1 po-min-h-[2.38rem] po-flex po-flex-wrap po-items-center focus-within:po-border-mpao-lightblue po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white sm:po-text-sm",
            l()
          ])
        }, [
          s("div", Nf, [
            a.value.length > 0 ? (u(!0), c(I, { key: 0 }, U(a.value, ($, _) => (u(), c("span", Hf, [
              s("span", null, V($.name), 1),
              s("span", {
                onClick: () => i(_),
                role: "button",
                class: "po-cursor-pointer"
              }, [
                S(w(vt), { class: "po-w-3 po-stroke-red-600 po-stroke-2" })
              ], 8, qf)
            ]))), 256)) : x("", !0),
            Ae(s("input", {
              id: e.id,
              "onUpdate:modelValue": v[0] || (v[0] = ($) => n.value = $),
              onFocus: v[1] || (v[1] = () => {
                m.value = !0, r.value = !0;
              }),
              onBlur: v[2] || (v[2] = () => r.value = !1),
              class: "po-border-0 po-outline-none po-ring-0 po-grow"
            }, null, 40, Wf), [
              [Et, n.value]
            ])
          ])
        ], 2),
        m.value ? (u(), c("ul", Uf, [
          (u(!0), c(I, null, U(w(y), ($) => (u(), c("li", {
            onClick: () => b($),
            key: $.id,
            value: $.id,
            class: P([
              "po-relative po-select-none po-py-2 hover:po-bg-mpao-lightblue hover:po-text-white po-cursor-pointer po-pl-3 po-pr-9"
            ])
          }, [
            s("span", Zf, V($.name), 1)
          ], 8, Gf))), 128))
        ])) : x("", !0)
      ]),
      e.message !== null ? (u(), c("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, V(e.message), 9, Kf)) : x("", !0),
      e.hasError && e.errorMessage !== null ? (u(), c("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-center po-space-x-1",
        id: `${e.id}-error`
      }, [
        S(w(zu), { class: "po-fill-current po-w-4" }),
        s("span", null, V(e.errorMessage), 1)
      ], 8, Yf)) : x("", !0)
    ], 2));
  }
}), Qf = { class: "po-flex po-pl-5" }, Jf = /* @__PURE__ */ s("div", { class: "po-shrink-0 po-flex po-flex-col" }, [
  /* @__PURE__ */ s("div", { class: "po-w-[2px] po-shrink-0 po-h-10" }),
  /* @__PURE__ */ s("div", { class: "po-bg-gradient-to-t po-from-orange-400 po-via-red-300 po-to-blue-500 po-w-[2px] po-grow" }),
  /* @__PURE__ */ s("div", { class: "po-w-[2px] po-shrink-0 po-h-12" })
], -1), e4 = { class: "po-grow po-pl-5 po-pt-5 po-space-y-3" }, t4 = ["onClick"], o4 = { class: "-po-mt-1 po-flex po-space-x-3 po-items-center" }, l4 = { class: "po-block po-text-xs po-text-slate-400" }, n4 = { class: "po-text-xs po-text-slate-500 po-pt-1" }, a4 = {
  name: "PoTimeline"
}, T2 = /* @__PURE__ */ L({
  ...a4,
  props: {
    timeline: { default: null },
    clickable: { type: Boolean, default: !1 }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, l) => (u(), c("div", Qf, [
      Jf,
      s("div", e4, [
        (u(!0), c(I, null, U(e.timeline, (n) => (u(), c("div", {
          class: P(["po-px-2 po-pt-2 po-pb-6 po-relative po-group", [{ "po-cursor-pointer": e.clickable }]]),
          onClick: (a) => o.$emit("button-click", n)
        }, [
          s("span", {
            class: P(["po-rounded-full po-absolute po-flex po-items-center po-justify-center", [
              { "po-w-4 po-h-4 -po-left-[1.8rem] po-bg-blue-400": n.current },
              {
                "po-w-3 po-h-3 -po-left-[1.68rem] po-bg-green-400": !n.current
              }
            ]])
          }, [
            s("span", {
              class: P(["po-rounded-full po-bg-white", [
                { "po-w-2 po-h-2": n.current },
                { "po-w-1 po-h-1": !n.current }
              ]])
            }, null, 2)
          ], 2),
          s("div", null, [
            s("div", o4, [
              s("h4", {
                class: P(["po-text-sm po-text-slate-600 po-font-medium", [{ "group-hover:po-text-mpao-lightblue": e.clickable }]])
              }, V(n.label), 3),
              s("span", l4, V(w(Kn)(n.date)), 1)
            ]),
            s("p", n4, V(n.description), 1)
          ])
        ], 10, t4))), 256))
      ])
    ]));
  }
}), s4 = {
  name: "PoTableCheckbox"
}, E2 = /* @__PURE__ */ L({
  ...s4,
  props: {
    itemId: { default: null },
    isChecked: { type: Boolean, default: !0 },
    disabled: { type: Boolean, default: !1 }
  },
  emits: ["checkboxClicked"],
  setup(e, { emit: t }) {
    return (o, l) => (u(), c(I, null, [
      e.isChecked ? (u(), j(w(ul), {
        key: 0,
        onClick: l[0] || (l[0] = re(() => o.$emit("checkboxClicked", e.itemId), ["prevent"])),
        class: "po-w-6 po-fill-mpao-lightblue po-cursor-pointer"
      })) : x("", !0),
      e.disabled ? (u(), j(w(ul), {
        key: 1,
        class: "po-w-6 po-fill-slate-400"
      })) : x("", !0),
      !e.isChecked && !e.disabled ? (u(), c("span", {
        key: 2,
        onClick: l[1] || (l[1] = re(() => o.$emit("checkboxClicked", e.itemId), ["prevent"])),
        class: "po-h-5 po-w-5 po-rounded-full po-border-2 po-ml-[2px] po-block po-border-slate-300 po-cursor-pointer"
      })) : x("", !0)
    ], 64));
  }
}), r4 = { class: "po-p-4" }, i4 = { class: "po-flex po-items-start po-space-x-3" }, u4 = /* @__PURE__ */ s("span", { class: "po-sr-only" }, "Action icon", -1), p4 = { class: "po-w-0 po-flex-1 po-text-sm po-font-medium po-text-gray-400" }, c4 = { class: "po-ml-4 po-flex po-flex-shrink-0" }, d4 = /* @__PURE__ */ s("span", { class: "po-sr-only" }, "Close", -1), f4 = {
  name: "PoToast"
}, B2 = /* @__PURE__ */ L({
  ...f4,
  props: {
    show: { type: Boolean, default: !1 },
    actionType: { default: "" },
    message: { default: "" },
    hideIn: { default: 2e3 },
    size: { default: "sm" }
  },
  emits: ["toast-closed"],
  setup(e, { emit: t }) {
    const o = e, { show: l } = xe(o), n = C(!1);
    Q(l, () => {
      n.value = l.value;
    });
    function a() {
      n.value = !1, t("toast-closed", !0);
    }
    setTimeout(() => {
      a();
    }, o.hideIn);
    const r = B(() => o.message === "" && o.actionType !== "" ? o.actionType === "success" ? "Saved Successfully!" : o.actionType === "danger" ? "Item deleted!" : o.actionType === "warn" ? "Attention needed!" : "Wrong action" : o.message);
    return (i, p) => (u(), j(ft, { to: "#po-notifications-alert" }, [
      S(De, {
        "enter-active-class": "po-transform po-ease-out po-duration-300 po-transition",
        "enter-from-class": "po-translate-y-2 po-opacity-0 sm:po-translate-y-0 sm:po-translate-x-2",
        "enter-to-class": "po-translate-y-0 po-opacity-100 sm:po-translate-x-0",
        "leave-active-class": "po-transition po-ease-in po-duration-100",
        "leave-from-class": "po-opacity-100",
        "leave-to-class": "po-opacity-0"
      }, {
        default: z(() => [
          n.value ? (u(), c("div", {
            key: 0,
            class: P(["po-pointer-events-auto po-w-full po-overflow-hidden po-rounded-lg po-bg-gray-900 po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5", [
              { "po-max-w-[260px]": e.size === "sm" },
              { "po-max-w-[360px]": e.size === "lg" },
              { "po-max-w-[560px]": e.size === "xl" }
            ]])
          }, [
            s("div", r4, [
              s("div", i4, [
                e.actionType !== "" ? (u(), c("div", {
                  key: 0,
                  class: P(["po-inline-flex po-items-center po-justify-center po-flex-shrink-0 po-w-6 po-h-6 po-rounded-lg", [
                    {
                      "po-bg-mpao-green po-text-green-100": e.actionType === "success"
                    },
                    { "po-bg-mpao-red po-text-red-100": e.actionType === "danger" },
                    {
                      "po-bg-mpao-orange po-text-orange-100": e.actionType === "warn"
                    }
                  ]])
                }, [
                  e.actionType === "success" ? (u(), j(w(Lr), {
                    key: 0,
                    class: "po-w-4 po-h-4"
                  })) : x("", !0),
                  e.actionType === "danger" ? (u(), j(w(Br), {
                    key: 1,
                    class: "po-w-4 po-h-4"
                  })) : x("", !0),
                  e.actionType === "warn" ? (u(), j(w(pn), {
                    key: 2,
                    class: "po-w-4 po-h-4"
                  })) : x("", !0),
                  u4
                ], 2)) : x("", !0),
                s("p", p4, V(w(r)), 1),
                s("div", c4, [
                  s("button", {
                    type: "button",
                    onClick: a,
                    class: "po-inline-flex po-rounded-md po-bg-gray-900 po-text-gray-400 hover:po-text-gray-300 hover:po-bg-gray-700 po-transition-colors po-duration-150 po-ease-out focus:po-outline-none focus:po-ring-2 focus:po-ring-indigo-500 focus:po-ring-offset-2"
                  }, [
                    d4,
                    S(w(cn), {
                      class: "po-h-5 po-w-5",
                      "aria-hidden": "true"
                    })
                  ])
                ])
              ])
            ])
          ], 2)) : x("", !0)
        ]),
        _: 1
      })
    ]));
  }
}), v4 = ["for"], h4 = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, m4 = ["title"], b4 = { class: "po-relative po-mt-1" }, g4 = {
  key: 1,
  class: "po-absolute po-top-0 po-left-0 po-right-0 po-bottom-0 po-overflow-hidden po-bg-white po-rounded-md po-border po-border-slate-300 po-flex po-items-center"
}, y4 = { class: "po-grow" }, x4 = ["id"], w4 = ["onClick"], $4 = {
  key: 0,
  class: "po-text-sm po-text-slate-600 po-p-4 po-block"
}, V4 = {
  key: 0,
  class: "po-mt-2 po-text-sm po-text-slate-500",
  id: "-description"
}, k4 = {
  key: 1,
  class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
  id: "-error"
}, _4 = {
  name: "PoSelectApi",
  components: { XMarkIcon: vt }
}, z2 = /* @__PURE__ */ L({
  ..._4,
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
    const o = e, l = C(), n = C(!1), a = C([]);
    Q(o, (g, v) => {
      a.value = o.options;
    });
    const r = C(null);
    C(null), Ro(r, () => {
      n.value = !1;
    });
    const i = C("");
    G(() => {
      o.id === "" ? i.value = o.label.replace(/\s/g, "") + "-" + Date.now() + "-selectapi-" + Math.floor(Math.random() * 9e3) : i.value = o.id, setTimeout(() => {
        document.activeElement === l.value ? n.value = !0 : n.value = !1;
      }, 100);
    });
    const p = C();
    function f() {
      t("search", p.value);
    }
    const d = C(null);
    function m(g) {
      d.value = g, t("selected", g), n.value = !1;
    }
    function y() {
      t("loadmore", !0);
    }
    const h = C();
    let b;
    return G(() => {
      b = jo(l.value, h.value, {
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
    }), ae(() => {
      b && b.destroy();
    }), (g, v) => (u(), c("div", {
      ref_key: "containerRef",
      ref: r,
      class: P(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      s("label", {
        for: i.value,
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700"
      }, [
        s("span", null, V(e.label), 1),
        e.required ? (u(), c("span", h4, "*")) : x("", !0),
        e.info !== null ? (u(), c("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          S(w(Ht), { class: "po-fill-current" })
        ], 8, m4)) : x("", !0)
      ], 8, v4),
      s("div", b4, [
        s("div", null, [
          e.loading ? (u(), j(Nt, {
            key: 0,
            class: "po-right-0 po-top-4",
            absolute: !0
          })) : x("", !0),
          d.value !== null && e.showSelected ? (u(), c("div", g4, [
            s("div", y4, [
              Y(g.$slots, "selectedOption", Xe(Qe(d.value)), () => [
                J(V(d.value), 1)
              ])
            ]),
            s("span", {
              class: "po-shrink-0 po-p-1 po-cursor-pointer",
              onClick: v[0] || (v[0] = ($) => {
                d.value = null, p.value = "";
              })
            }, [
              S(w(vt), { class: "po-w-4 po-stroke-2 po-stroke-slate-400" })
            ])
          ])) : x("", !0),
          Ae(s("input", {
            type: "text",
            name: "",
            id: i.value,
            ref_key: "selectBox",
            ref: l,
            "onUpdate:modelValue": v[1] || (v[1] = ($) => p.value = $),
            onInput: f,
            onFocus: v[2] || (v[2] = ($) => n.value = !0),
            class: "po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm"
          }, null, 40, x4), [
            [Et, p.value]
          ])
        ]),
        Ae(s("div", {
          ref_key: "popper",
          ref: h,
          class: "po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
        }, [
          a.value && a.value.length > 0 ? (u(), c(I, { key: 0 }, [
            (u(!0), c(I, null, U(a.value, ($) => (u(), c("div", {
              onClick: (_) => m($)
            }, [
              Y(g.$slots, "option", Xe(Qe($)), () => [
                J(V($), 1)
              ])
            ], 8, w4))), 256)),
            e.showMoreBtn ? (u(), c("span", {
              key: 0,
              role: "button",
              onClick: y,
              class: "po-text-sm po-text-semibold po-text-mpao-lightblue po-block po-text-center po-py-2 hover:po-bg-slate-50 po-transition-colors po-duration-150 po-ease-out"
            }, "More")) : x("", !0)
          ], 64)) : (u(), c(I, { key: 1 }, [
            e.emptyMessage ? (u(), c("span", $4, V(e.emptyMessage), 1)) : x("", !0)
          ], 64))
        ], 512), [
          [
            go,
            n.value && a.value.length > 0 || n.value && e.emptyMessage
          ]
        ]),
        e.message !== null ? (u(), c("p", V4, V(e.message), 1)) : x("", !0),
        e.errorMessage !== null ? (u(), c("p", k4, [
          s("span", null, V(e.errorMessage), 1)
        ])) : x("", !0)
      ])
    ], 2));
  }
}), C4 = { class: "po-bg-blue-300/20 po-border po-border-blue-200 po-p-3 po-mb-5 po-rounded-md po-text-sm sm:po-space-x-2 po-flex po-items-center po-flex-wrap" }, S4 = { class: "po-text-blue-500" }, P4 = {
  name: "PoMessage"
}, M2 = /* @__PURE__ */ L({
  ...P4,
  props: {
    msgType: { default: "info" },
    message: { default: "" },
    btnName: { default: "" },
    btnAction: { default: "" }
  },
  emits: ["button-click"],
  setup(e, { emit: t }) {
    return (o, l) => (u(), c("div", C4, [
      s("span", S4, V(e.message), 1),
      e.btnName !== "" ? (u(), c("span", {
        key: 0,
        role: "button",
        onClick: l[0] || (l[0] = (n) => o.$emit("button-click", e.btnAction)),
        class: "po-text-blue-600 po-underline po-font-medium po-text-xs"
      }, V(e.btnName), 1)) : x("", !0)
    ]));
  }
}), O4 = {
  key: 0,
  class: "po-flex md:po-justify-end"
}, L4 = ["onClick"], T4 = { class: "po-text-xl po-font-medium po-text-slate-600 po-flex po-items-center po-space-x-1" }, E4 = {
  name: "PoPageStats"
}, A2 = /* @__PURE__ */ L({
  ...E4,
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
    return (l, n) => e.stats !== null ? (u(), c("div", O4, [
      s("div", {
        class: P(["po-bg-slate-50 po-shadow-sm po-rounded-xl po-divide-x po-divide-slate-200 po-flex", e.padding])
      }, [
        (u(!0), c(I, null, U(e.stats, (a) => (u(), c("div", {
          class: P(["po-px-4 po-group", { "po-cursor-pointer": e.clickable }]),
          onClick: (r) => l.$emit("stat-click", a)
        }, [
          s("span", T4, [
            a.icon ? (u(), c("span", {
              key: 0,
              class: P(["po-w-5 po-h-5", o(a)])
            }, [
              (u(), j(de(a.icon)))
            ], 2)) : x("", !0),
            s("span", {
              class: P(["po-text-xl po-font-medium po-text-slate-600", { "group-hover:po-text-mpao-lightblue": e.clickable }])
            }, V(a.value), 3)
          ]),
          s("span", {
            class: P(["po-text-sm po-text-slate-500 po-block", { "group-hover:po-text-mpao-lightblue": e.clickable }])
          }, V(a.label), 3)
        ], 10, L4))), 256))
      ], 2)
    ])) : x("", !0);
  }
}), B4 = {
  name: "PoTooltip"
}, vo = /* @__PURE__ */ L({
  ...B4,
  props: {
    text: { default: "" },
    placement: { default: "bottom" },
    strategy: { default: "absolute" }
  },
  setup(e) {
    const t = e, o = C(null), l = C(null), n = C(!1);
    let a = null;
    G(() => {
      o.value && l.value && (a = jo(o.value, l.value, {
        placement: t.placement,
        strategy: t.strategy
      }));
    }), ae(() => {
      a && (a.destroy(), a = null);
    });
    function r() {
      n.value = !0;
    }
    function i() {
      n.value = !1;
    }
    return (p, f) => (u(), c("span", {
      ref_key: "trigger",
      ref: o,
      onMouseover: r,
      onMouseleave: i
    }, [
      Y(p.$slots, "default", {}, () => [
        J("Tooltip")
      ]),
      (u(), j(ft, { to: "body" }, [
        Ae(s("div", {
          ref_key: "popper",
          ref: l,
          class: P(["po-bg-slate-700 po-text-xs po-z-50 po-transition-opacity po-duration-100 po-ease-linear po-text-slate-50 po-rounded-md po-px-2 po-py-1 po-shadow-md", [{ "po-opacity-0": !n.value }, { "po-opacity-100": n.value }]])
        }, V(e.text), 3), [
          [go, e.text]
        ])
      ]))
    ], 544));
  }
}), z4 = ["for"], M4 = { class: "po-capitalize" }, A4 = {
  key: 0,
  class: "po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
}, D4 = ["title"], I4 = ["for"], j4 = {
  key: 0,
  class: "po-flex po-items-center po-space-x-2"
}, R4 = {
  key: 1,
  class: "po-flex po-items-center po-space-x-2"
}, F4 = { class: "po-grow po-text-sm po-text-slate-600" }, N4 = /* @__PURE__ */ s("span", null, "Uploading... ", -1), H4 = { class: "po-shrink-0 po-relative po-top-[3px]" }, q4 = ["name", "id", "value", "disabled", "required", "aria-describedby", "aria-required", "aria-disabled"], W4 = ["id"], U4 = ["id"], G4 = {
  name: "PoUpload"
}, D2 = /* @__PURE__ */ L({
  ...G4,
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
    placeholder: null,
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
    const o = e, { errorMessage: l } = xe(o), n = C(l.value !== null);
    Q(l, (m, y) => {
      n.value = l.value !== null && l.value !== "";
    });
    const a = C([]), r = C("initial");
    function i(m) {
      r.value = "uploading";
      const y = useCookie("auth_token");
      fetch(`${f()}`, {
        method: "POST",
        headers: {
          // Set the authorization header with the auth token from 'auth_token' cookie
          Authorization: `Bearer ${y.value}`
        },
        body: p(m)
      }).then(
        function(h) {
          h.status != 201 ? this.fetchError = h.status : h.json().then(function(b) {
          }.bind(this)), r.value = "initial", t("uploaded", h);
        }.bind(this)
      );
    }
    function p(m) {
      let y = new FormData();
      for (const h of m.target.files)
        y.append("files", h);
      return y.append("payload", JSON.stringify(o.payload)), y;
    }
    function f() {
      const m = o == null ? void 0 : o.url;
      return m.includes("http") ? o == null ? void 0 : o.url : `${useRuntimeConfig().public.api}/${m}`;
    }
    function d() {
      return o.hasError ? "po-border-red-400 focus:po-border-red-600 focus:po-ring-red-600" : o.borderColor;
    }
    return (m, y) => (u(), c("div", {
      class: P(["po-relative", [{ "lg:po-grid lg:po-grid-cols-2": e.display === "horizontal" }]])
    }, [
      s("label", {
        disabled: !0,
        for: `${e.id}-upload-field`,
        class: "po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700 po-mb-1"
      }, [
        s("span", M4, V(e.label), 1),
        e.required ? (u(), c("span", A4, "*")) : x("", !0),
        e.info !== null ? (u(), c("abbr", {
          key: 1,
          title: e.info,
          class: "po-w-4 po-text-slate-500"
        }, [
          S(w(Ht), { class: "po-fill-current" })
        ], 8, D4)) : x("", !0)
      ], 8, z4),
      s("label", {
        for: e.id,
        class: P([
          "po-border po-block po-p-2 po-text-sm po-text-slate-600 po-cursor-pointer po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white focus:po-ring-0 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default",
          d()
        ])
      }, [
        r.value === "initial" ? (u(), c("span", j4, [
          S(w(Lt), { class: "po-w-4 po-stroke-slate-500" }),
          s("span", null, V(e.inputLabel), 1)
        ])) : x("", !0),
        r.value === "uploading" ? (u(), c("span", R4, [
          S(w(Lt), { class: "po-w-4 po-stroke-slate-500" }),
          s("div", F4, [
            N4,
            s("span", null, "(" + V(a.value.length) + ")", 1)
          ]),
          s("div", H4, [
            S(Nt)
          ])
        ])) : x("", !0)
      ], 10, I4),
      s("input", ke({
        type: "file",
        name: `${e.id}-upload-field`,
        id: e.id,
        value: e.modelValue,
        disabled: e.disabled,
        required: e.required,
        "aria-describedby": `${e.id}-description`,
        "aria-required": e.required,
        "aria-disabled": e.disabled
      }, m.$attrs, {
        onChange: i,
        class: "po-hidden",
        multiple: ""
      }), null, 16, q4),
      e.message !== null ? (u(), c("p", {
        key: 0,
        class: "po-mt-2 po-text-sm po-text-slate-500",
        id: `${e.id}-description`
      }, V(e.message), 9, W4)) : x("", !0),
      n.value && w(l) !== null ? (u(), c("p", {
        key: 1,
        class: "po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1",
        id: `${e.id}-error`
      }, [
        s("span", null, V(w(l)), 1)
      ], 8, U4)) : x("", !0)
    ], 2));
  }
});
export {
  J4 as PoActionBar,
  b2 as PoAlert,
  Pa as PoAppIcon,
  js as PoAppTray,
  To as PoButton,
  e2 as PoCard,
  t2 as PoCardSearch,
  V2 as PoCardTabs,
  f2 as PoChatLogItem,
  i2 as PoCheckbox,
  m2 as PoCommandPalette,
  $2 as PoConsent,
  x2 as PoContentArea,
  C2 as PoDRStatus,
  yc as PoDescriptionList,
  y2 as PoDownloadFileList,
  _2 as PoEmpty,
  u2 as PoFooter,
  p2 as PoFormStatusMessage,
  O2 as PoHeading,
  n2 as PoInputField,
  a2 as PoInputFile,
  w2 as PoLoading,
  g2 as PoLogs,
  M2 as PoMessage,
  xt as PoModal,
  L2 as PoMultiSelect,
  v2 as PoNotification,
  Xs as PoNotificationHub,
  A2 as PoPageStats,
  o2 as PoPageTitle,
  zp as PoPagination,
  Vr as PoProfileSwitcher,
  c2 as PoRadioInput,
  Ba as PoSearchBar,
  r2 as PoSectionMenu,
  z2 as PoSelectApi,
  $u as PoSelectField,
  Q4 as PoSidebarDrawer,
  h2 as PoSlideover,
  d2 as PoStatsBlock,
  l2 as PoTable,
  S2 as PoTableAction,
  E2 as PoTableCheckbox,
  k2 as PoTabs,
  qu as PoTextarea,
  T2 as PoTimeline,
  B2 as PoToast,
  s2 as PoToggle,
  vo as PoTooltip,
  Y4 as PoTopBar,
  D2 as PoUpload,
  P2 as Rufiyaa
};
