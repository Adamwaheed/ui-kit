import { f as p } from "./FormatDate-a57abfa8.mjs";
function u(e) {
  const o = typeof e == "string" ? Number(e.replace(/,/g, "")) : e;
  return isNaN(o) ? null : o.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
function m(e, o) {
  let r;
  return function(...n) {
    clearTimeout(r), r = setTimeout(() => {
      e.apply(this, n);
    }, o);
  };
}
const l = async (e, o) => {
  const r = useCookie("token"), n = {
    key: e,
    async onRequest({ options: t }) {
      t.headers = t.headers || {}, t.headers["Content-Type"] = "application/json", r.value && (t.headers.Authorization = `Bearer ${r.value}`);
    },
    async onRequestError({ error: t }) {
      console.log(t.message);
    },
    async onResponseError({ response: t }) {
      console.log(t._data.message);
    },
    ...o
  }, { data: a, pending: s, error: i, execute: c } = await useFetch(e, n);
  return {
    data: a,
    pending: s,
    error: i,
    execute: c
  };
};
export {
  m as debounce,
  p as formatDate,
  u as formatMoney,
  l as useHttp
};
