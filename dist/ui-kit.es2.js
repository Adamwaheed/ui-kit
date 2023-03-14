function o(t) {
  const n = new Date(t), e = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return n.toLocaleDateString("en-US", e);
}
const a = async (t, n) => {
};
export {
  o as formatDate,
  a as useHttp
};
