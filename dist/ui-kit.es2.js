import { f as h } from "./FormatDate-a57abfa8.mjs";
function i(t, a) {
  let o;
  return function(...r) {
    clearTimeout(o), o = setTimeout(() => {
      t.apply(this, r);
    }, a);
  };
}
const d = async (t, a) => {
  const o = useCookie("token"), r = {
    key: t,
    async onRequest({ options: e }) {
      e.headers = e.headers || {}, e.headers["Content-Type"] = "application/json", o.value && (e.headers.Authorization = `Bearer ${o.value}`);
    },
    async onRequestError({ error: e }) {
      console.log(e.message);
    },
    async onResponseError({ response: e }) {
      console.log(e._data.message);
    },
    ...a
  }, { data: s, pending: n, error: c, execute: u } = await useFetch(t, r);
  return {
    data: s,
    pending: n,
    error: c,
    execute: u
  };
};
export {
  i as debounce,
  h as formatDate,
  d as useHttp
};
