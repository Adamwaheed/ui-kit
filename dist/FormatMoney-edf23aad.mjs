function e(t) {
  if (t === "")
    return "";
  const i = new Date(t), n = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  };
  return i.toLocaleDateString("en-UK", n).split("/").join("-");
}
function o(t) {
  const i = typeof t == "string" ? Number(t.replace(/,/g, "")) : t;
  return isNaN(i) ? null : i.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
export {
  e as a,
  o as f
};
