import { getCurrentInstance as ce, inject as ae, markRaw as N, ref as ee, watch as ie, reactive as ue, effectScope as de, isRef as k, isReactive as H, toRef as F, toRaw as fe, nextTick as Q, computed as te, getCurrentScope as le, onScopeDispose as pe, toRefs as X } from "vue";
var he = !1;
function C(e, r, o) {
  return Array.isArray(e) ? (e.length = Math.max(e.length, r), e.splice(r, 1, o), o) : (e[r] = o, o);
}
function x(e, r) {
  if (Array.isArray(e)) {
    e.splice(r, 1);
    return;
  }
  delete e[r];
}
/*!
  * pinia v2.0.33
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
let w;
const A = (e) => w = e, me = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function D(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var V;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(V || (V = {}));
const J = typeof window < "u", B = (process.env.NODE_ENV !== "production" || !1) && process.env.NODE_ENV !== "test" && J;
function se(e, r) {
  for (const o in r) {
    const n = r[o];
    if (!(o in e))
      continue;
    const a = e[o];
    D(a) && D(n) && !k(n) && !H(n) ? e[o] = se(a, n) : e[o] = n;
  }
  return e;
}
const ne = () => {
};
function Y(e, r, o, n = ne) {
  e.push(r);
  const a = () => {
    const f = e.indexOf(r);
    f > -1 && (e.splice(f, 1), n());
  };
  return !o && le() && pe(a), a;
}
function O(e, ...r) {
  e.slice().forEach((o) => {
    o(...r);
  });
}
function L(e, r) {
  e instanceof Map && r instanceof Map && r.forEach((o, n) => e.set(n, o)), e instanceof Set && r instanceof Set && r.forEach(e.add, e);
  for (const o in r) {
    if (!r.hasOwnProperty(o))
      continue;
    const n = r[o], a = e[o];
    D(a) && D(n) && e.hasOwnProperty(o) && !k(n) && !H(n) ? e[o] = L(a, n) : e[o] = n;
  }
  return e;
}
const ve = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function ge(e) {
  return !D(e) || !e.hasOwnProperty(ve);
}
const { assign: y } = Object;
function Z(e) {
  return !!(k(e) && e.effect);
}
function K(e, r, o, n) {
  const { state: a, actions: f, getters: i } = r, d = o.state.value[e];
  let m;
  function h() {
    !d && (process.env.NODE_ENV === "production" || !n) && (o.state.value[e] = a ? a() : {});
    const p = process.env.NODE_ENV !== "production" && n ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      X(ee(a ? a() : {}).value)
    ) : X(o.state.value[e]);
    return y(p, f, Object.keys(i || {}).reduce((l, v) => (process.env.NODE_ENV !== "production" && v in p && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${v}" in store "${e}".`), l[v] = N(te(() => {
      A(o);
      const b = o._s.get(e);
      return i[v].call(b, b);
    })), l), {}));
  }
  return m = z(e, h, r, o, n, !0), m;
}
function z(e, r, o = {}, n, a, f) {
  let i;
  const d = y({ actions: {} }, o);
  if (process.env.NODE_ENV !== "production" && !n._e.active)
    throw new Error("Pinia destroyed");
  const m = {
    deep: !0
    // flush: 'post',
  };
  process.env.NODE_ENV !== "production" && !he && (m.onTrigger = (s) => {
    h ? b = s : h == !1 && !c._hotUpdating && (Array.isArray(b) ? b.push(s) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let h, p, l = N([]), v = N([]), b;
  const E = n.state.value[e];
  !f && !E && (process.env.NODE_ENV === "production" || !a) && (n.state.value[e] = {});
  const j = ee({});
  let T;
  function U(s) {
    let t;
    h = p = !1, process.env.NODE_ENV !== "production" && (b = []), typeof s == "function" ? (s(n.state.value[e]), t = {
      type: V.patchFunction,
      storeId: e,
      events: b
    }) : (L(n.state.value[e], s), t = {
      type: V.patchObject,
      payload: s,
      storeId: e,
      events: b
    });
    const u = T = Symbol();
    Q().then(() => {
      T === u && (h = !0);
    }), p = !0, O(l, t, n.state.value[e]);
  }
  const W = f ? function() {
    const { state: t } = o, u = t ? t() : {};
    this.$patch((g) => {
      y(g, u);
    });
  } : process.env.NODE_ENV !== "production" ? () => {
    throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
  } : ne;
  function G() {
    i.stop(), l = [], v = [], n._s.delete(e);
  }
  function M(s, t) {
    return function() {
      A(n);
      const u = Array.from(arguments), g = [], q = [];
      function oe(_) {
        g.push(_);
      }
      function re(_) {
        q.push(_);
      }
      O(v, {
        args: u,
        name: s,
        store: c,
        after: oe,
        onError: re
      });
      let R;
      try {
        R = t.apply(this && this.$id === e ? this : c, u);
      } catch (_) {
        throw O(q, _), _;
      }
      return R instanceof Promise ? R.then((_) => (O(g, _), _)).catch((_) => (O(q, _), Promise.reject(_))) : (O(g, R), R);
    };
  }
  const P = /* @__PURE__ */ N({
    actions: {},
    getters: {},
    state: [],
    hotState: j
  }), I = {
    _p: n,
    // _s: scope,
    $id: e,
    $onAction: Y.bind(null, v),
    $patch: U,
    $reset: W,
    $subscribe(s, t = {}) {
      const u = Y(l, s, t.detached, () => g()), g = i.run(() => ie(() => n.state.value[e], (q) => {
        (t.flush === "sync" ? p : h) && s({
          storeId: e,
          type: V.direct,
          events: b
        }, q);
      }, y({}, m, t)));
      return u;
    },
    $dispose: G
  }, c = ue(process.env.NODE_ENV !== "production" || B ? y(
    {
      _hmrPayload: P,
      _customProperties: N(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    I
    // must be added later
    // setupStore
  ) : I);
  n._s.set(e, c);
  const $ = n._e.run(() => (i = de(), i.run(() => r())));
  for (const s in $) {
    const t = $[s];
    if (k(t) && !Z(t) || H(t))
      process.env.NODE_ENV !== "production" && a ? C(j.value, s, F($, s)) : f || (E && ge(t) && (k(t) ? t.value = E[s] : L(t, E[s])), n.state.value[e][s] = t), process.env.NODE_ENV !== "production" && P.state.push(s);
    else if (typeof t == "function") {
      const u = process.env.NODE_ENV !== "production" && a ? t : M(s, t);
      $[s] = u, process.env.NODE_ENV !== "production" && (P.actions[s] = t), d.actions[s] = t;
    } else
      process.env.NODE_ENV !== "production" && Z(t) && (P.getters[s] = f ? (
        // @ts-expect-error
        o.getters[s]
      ) : t, J && ($._getters || ($._getters = N([]))).push(s));
  }
  if (y(c, $), y(fe(c), $), Object.defineProperty(c, "$state", {
    get: () => process.env.NODE_ENV !== "production" && a ? j.value : n.state.value[e],
    set: (s) => {
      if (process.env.NODE_ENV !== "production" && a)
        throw new Error("cannot set hotState");
      U((t) => {
        y(t, s);
      });
    }
  }), process.env.NODE_ENV !== "production" && (c._hotUpdate = N((s) => {
    c._hotUpdating = !0, s._hmrPayload.state.forEach((t) => {
      if (t in c.$state) {
        const u = s.$state[t], g = c.$state[t];
        typeof u == "object" && D(u) && D(g) ? se(u, g) : s.$state[t] = g;
      }
      C(c, t, F(s.$state, t));
    }), Object.keys(c.$state).forEach((t) => {
      t in s.$state || x(c, t);
    }), h = !1, p = !1, n.state.value[e] = F(s._hmrPayload, "hotState"), p = !0, Q().then(() => {
      h = !0;
    });
    for (const t in s._hmrPayload.actions) {
      const u = s[t];
      C(c, t, M(t, u));
    }
    for (const t in s._hmrPayload.getters) {
      const u = s._hmrPayload.getters[t], g = f ? (
        // special handling of options api
        te(() => (A(n), u.call(c, c)))
      ) : u;
      C(c, t, g);
    }
    Object.keys(c._hmrPayload.getters).forEach((t) => {
      t in s._hmrPayload.getters || x(c, t);
    }), Object.keys(c._hmrPayload.actions).forEach((t) => {
      t in s._hmrPayload.actions || x(c, t);
    }), c._hmrPayload = s._hmrPayload, c._getters = s._getters, c._hotUpdating = !1;
  })), B) {
    const s = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((t) => {
      Object.defineProperty(c, t, y({ value: c[t] }, s));
    });
  }
  return n._p.forEach((s) => {
    if (B) {
      const t = i.run(() => s({
        store: c,
        app: n._a,
        pinia: n,
        options: d
      }));
      Object.keys(t || {}).forEach((u) => c._customProperties.add(u)), y(c, t);
    } else
      y(c, i.run(() => s({
        store: c,
        app: n._a,
        pinia: n,
        options: d
      })));
  }), process.env.NODE_ENV !== "production" && c.$state && typeof c.$state == "object" && typeof c.$state.constructor == "function" && !c.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${c.$id}".`), E && f && o.hydrate && o.hydrate(c.$state, E), h = !0, p = !0, c;
}
function S(e, r, o) {
  let n, a;
  const f = typeof r == "function";
  typeof e == "string" ? (n = e, a = f ? o : r) : (a = e, n = e.id);
  function i(d, m) {
    const h = ce();
    if (d = (process.env.NODE_ENV === "test" && w && w._testing ? null : d) || h && ae(me, null), d && A(d), process.env.NODE_ENV !== "production" && !w)
      throw new Error(`[🍍]: getActivePinia was called with no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);
    d = w, d._s.has(n) || (f ? z(n, r, a, d) : K(n, a, d), process.env.NODE_ENV !== "production" && (i._pinia = d));
    const p = d._s.get(n);
    if (process.env.NODE_ENV !== "production" && m) {
      const l = "__hot:" + n, v = f ? z(l, r, a, d, !0) : K(l, y({}, a), d, !0);
      m._hotUpdate(v), delete d.state.value[l], d._s.delete(l);
    }
    if (process.env.NODE_ENV !== "production" && J && h && h.proxy && // avoid adding stores that are just built for hot module replacement
    !m) {
      const l = h.proxy, v = "_pStores" in l ? l._pStores : l._pStores = {};
      v[n] = p;
    }
    return p;
  }
  return i.$id = n, i;
}
const ye = S("auth", () => {
  const e = useRuntimeConfig(), r = ref({}), o = async () => {
    const i = useCookie("auth_token", {
      domain: e.public.session_domain
    }), d = computed(() => `${e.public.auth_api}/secret`), m = await fetch(d.value, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${i.value}`
      }
    });
    if (m.ok) {
      const h = await m.json();
      r.value = h;
    } else
      r.value = "";
  };
  return {
    user: r,
    getUser: o,
    setUser: async (i) => {
      r.value = i;
    },
    switchTransactingAs: async (i, d) => await $fetch(
      `${e.public.authorisation_api}/users/${i}/transacting-as`,
      {
        method: "post",
        body: { entity_id: d }
      }
    ).then((m) => {
      if (!m.error)
        return o();
    }),
    logOut: async () => {
      const i = useCookie("auth_token", {
        domain: e.public.session_domain
      });
      i.value = null, r.value = "";
    }
  };
}), be = S("document", () => {
  const e = useRuntimeConfig(), o = {
    "Content-type": "application/json; charset=UTF-8",
    Authorization: `Bearer ${useCookie("auth_token", {
      domain: e.public.session_domain
    }).value}`
  }, n = ref([]);
  return {
    documentTypes: n,
    getDocumentTypes: async () => {
      n.value.length || (await $fetch(`${e.public.drs_api}/document-types`, {
        method: "get",
        headers: o
      })).forEach((i) => {
        n.value.push({
          id: i.id,
          name: i.name
        });
      });
    }
  };
}), $e = S("member", () => {
  const e = useRuntimeConfig(), o = {
    "Content-type": "application/json; charset=UTF-8",
    Authorization: `Bearer ${useCookie("auth_token", {
      domain: e.public.session_domain
    }).value}`
  }, n = ref([]), a = ref(), f = ref();
  return {
    documents: n,
    getMemberDocuments: async (p) => {
      const l = await $fetch(
        `${e.public.drs_api}/members/${p}/documents`,
        {
          method: "get",
          headers: o
        }
      );
      n.value = l;
    },
    getMember: async (p, l) => await $fetch(`${e.public.drs_api}/members/get-member`, {
      method: "post",
      body: {
        identifer: p,
        dob: l
      },
      headers: o
    }),
    getMemberStatus: async (p, l) => await $fetch(
      `${e.public.drs_api}/members/status?nid=${p}&dob=${l}`,
      {
        method: "get",
        headers: o
      }
    ),
    searchMemberIdentifier: a,
    searchMemberDOB: f,
    setSearchParams: (p, l) => {
      a.value = p, f.value = l;
    }
    // getMemberDocumentsFromState
  };
}), Ee = S("record", () => {
  const e = useRuntimeConfig(), o = {
    "Content-type": "application/json; charset=UTF-8",
    Authorization: `Bearer ${useCookie("auth_token", {
      domain: e.public.session_domain
    }).value}`
  }, n = ref([]);
  return {
    disputeTypes: n,
    getDisputeTypes: async () => {
      n.value.length || (await $fetch(`${e.public.drs_api}/dispute-types`, {
        method: "get",
        headers: o
      })).forEach((d) => {
        n.value.push({
          id: d.id,
          name: d.name
        });
      });
    },
    getOneRecord: async (i) => await $fetch(`${e.public.drs_api}/records/${i}`, {
      method: "get",
      headers: o
    })
  };
}), Ne = S("request", () => {
  const e = useRuntimeConfig(), r = useCookie("auth_token", {
    domain: e.public.session_domain
  }), o = {
    "Content-type": "application/json; charset=UTF-8",
    Authorization: `Bearer ${r.value}`
  }, n = ref({
    currentPage: 0
  }), a = ref([]), f = ref([]), i = ref([]), d = ref([]), m = ref([]);
  return {
    documents: d,
    requests: a,
    history: m,
    pendingRequests: f,
    verifiedRequests: i,
    createRequest: async (s) => await $fetch(`${e.public.drs_api}/requests`, {
      method: "post",
      body: s,
      headers: {
        Authorization: `Bearer ${r.value}`
      }
    }),
    updateRequest: async (s, t) => await $fetch(`${e.public.drs_api}/requests/${s}`, {
      method: "PATCH",
      body: t,
      headers: o
    }),
    createDeathDispute: async (s) => await $fetch(`${e.public.drs_api}/requests/dispute-death`, {
      method: "post",
      body: s,
      headers: o
    }),
    createDateDispute: async (s) => await $fetch(`${e.public.drs_api}/requests/dispute-date`, {
      method: "post",
      body: s,
      headers: {
        Authorization: `Bearer ${r.value}`
      }
    }),
    getOnePendingRequest: async (s) => {
      let t = f.value.find((u) => u.id == s);
      return t || (t = await $fetch(`${e.public.drs_api}/requests/${s}`, {
        method: "get",
        headers: o
      })), t;
    },
    getOneVerifiedRequest: async (s) => {
      let t = i.value.find((u) => u.id == s);
      return t || (t = await $fetch(`${e.public.drs_api}/requests/${s}`, {
        method: "get",
        headers: o
      })), t;
    },
    getAllRequests: async (s) => {
      const t = await $fetch(
        `${e.public.drs_api}/requests?page=${s}`,
        {
          method: "get",
          headers: o
        }
      );
      a.value = t.data, n.value = t.meta;
    },
    getPendingRequests: async (s) => {
      const t = await $fetch(
        `${e.public.drs_api}/requests/pending?page=${s}`,
        {
          method: "get",
          headers: o
        }
      );
      f.value = t.data, a.value = t.data, n.value = t.meta;
    },
    getVerifiedRequests: async (s) => {
      const t = await $fetch(
        `${e.public.drs_api}/requests/verified?page=${s}`,
        {
          method: "get",
          headers: o
        }
      );
      i.value = t.data, a.value = t.data, n.value = t.meta;
    },
    verifyRequest: async (s) => {
      await $fetch(`${e.public.drs_api}/requests/${s}/verify`, {
        method: "post",
        headers: o
      }).then((t) => {
        t.state.name == "Verified" && (f.value = f.value.filter(function(u) {
          return u.id !== s;
        }));
      });
    },
    approveRequest: async (s) => {
      await $fetch(`${e.public.drs_api}/requests/${s}/approve`, {
        method: "post",
        headers: o
      }).then((t) => {
        t.state.name == "Approved" && (i.value = i.value.filter(function(u) {
          return u.id !== s;
        }));
      });
    },
    invalidateRequest: async (s) => {
      await $fetch(`${e.public.drs_api}/requests/${s}/invalidate`, {
        method: "post",
        headers: o
      }).then((t) => {
        t.state.name == "Invalid" && (f.value = f.value.filter(function(u) {
          return u.id !== s;
        }));
      });
    },
    getDocuments: async (s) => {
      const t = await $fetch(
        `${e.public.drs_api}/requests/${s}/documents`,
        {
          method: "get",
          headers: o
        }
      );
      d.value = t;
    },
    getHistory: async (s) => {
      const t = await $fetch(
        `${e.public.drs_api}/requests/${s}/history`,
        {
          method: "get",
          headers: o
        }
      );
      m.value = t;
    },
    addRemarksToRequest: async (s, t) => await $fetch(
      `${e.public.drs_api}/requests/${s}/remarks`,
      {
        method: "post",
        body: t,
        headers: o
      }
    ),
    pageMeta: n,
    resetPageMeta: () => {
      n.value = {
        currentPage: 0
      };
    }
  };
});
export {
  ye as useAuthStore,
  be as useDocumentStore,
  $e as useMemberStore,
  Ee as useRecordStore,
  Ne as useRequestStore
};
