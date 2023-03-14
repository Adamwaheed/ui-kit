function i(o) {
  const t = new Date(o), n = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return t.toLocaleDateString("en-US", n);
}
const d = async (o, t) => {
  const n = useCookie("token"), a = {
    key: o,
    async onRequest({ options: e }) {
      e.headers = e.headers || {}, e.headers["Content-Type"] = "application/json", n.value && (e.headers.Authorization = `Bearer ${n.value}`);
    },
    async onRequestError({ error: e }) {
      console.log(e.message);
    },
    async onResponseError({ response: e }) {
      console.log(e._data.message);
    },
    ...t
  }, { data: r, pending: s, error: c, execute: u } = await useFetch(o, a);
  return {
    data: r,
    pending: s,
    error: c,
    execute: u
  };
};
export {
  i as formatDate,
  d as useHttp
};
