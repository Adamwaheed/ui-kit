function o(t) {
  const n = new Date(t), e = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return n.toLocaleDateString("en-US", e);
}
export {
  o as f
};
