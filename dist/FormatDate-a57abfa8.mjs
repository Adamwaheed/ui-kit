function o(t) {
  const n = new Date(t), e = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  };
  return n.toLocaleDateString("en-UK", e).split("/").join("-");
}
export {
  o as f
};
