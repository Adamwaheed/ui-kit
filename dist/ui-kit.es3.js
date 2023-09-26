const c = {
  mounted(l, a, s) {
    var e;
    if (!a.value) {
      console.log("beforeMount !hasPermission", s == null ? void 0 : s.el);
      const i = (e = s == null ? void 0 : s.el) == null ? void 0 : e.parentElement;
      i && i.removeChild(s.el);
    }
  },
  updated(l, a, s) {
    var e, i, r;
    if (a.value) {
      if (console.log("updated hasPermission", s == null ? void 0 : s.el), !l.parentNode) {
        const t = document.createComment(" ");
        (r = (i = s.el) == null ? void 0 : i.parentNode) == null || r.replaceChild(t, s.el), l.__comment = t;
      }
    } else {
      console.log("updated !hasPermission", s == null ? void 0 : s.el);
      const t = (e = s == null ? void 0 : s.el) == null ? void 0 : e.parentElement;
      t && t.removeChild(s.el);
    }
  }
};
export {
  c as hasPermissionDirective
};
