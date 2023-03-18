import { f as l } from "./FormatDate-ac18ec36.mjs";
const d = async (o, s) => {
  const a = useCookie("token"), r = {
    key: o,
    async onRequest({ options: e }) {
      e.headers = e.headers || {}, e.headers["Content-Type"] = "application/json", a.value && (e.headers.Authorization = `Bearer ${a.value}`);
    },
    async onRequestError({ error: e }) {
      console.log(e.message);
    },
    async onResponseError({ response: e }) {
      console.log(e._data.message);
    },
    ...s
  }, { data: t, pending: n, error: c, execute: u } = await useFetch(o, r);
  return {
    data: t,
    pending: n,
    error: c,
    execute: u
  };
};
export {
  l as formatDate,
  d as useHttp
};
