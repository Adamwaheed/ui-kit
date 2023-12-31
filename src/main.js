import { createApp } from "vue";
import App from "./App.vue";
import "./assets/index.css";

const app = createApp(App);
app.directive("hasPermission", {
	mounted(el, binding, vnode) {
		const hasPermission = binding.value;

		if (!hasPermission) {
			console.log("beforeMount !hasPermission", vnode?.el);
			const parent = vnode?.el?.parentElement;
			if (parent) {
				parent.removeChild(vnode.el);
			}
		}
	},
	updated(el, binding, vnode) {
		const hasPermission = binding.value;

		if (!hasPermission) {
			console.log("updated !hasPermission", vnode?.el);
			const parent = vnode?.el?.parentElement;
			if (parent) {
				parent.removeChild(vnode.el);
			}
		} else {
			console.log("updated hasPermission", vnode?.el);
			if (!el.parentNode) {
				const comment = document.createComment(" ");
				vnode.el?.parentNode?.replaceChild(comment, vnode.el);
				el.__comment = comment;
			}
		}
	},
});
app.mount("#app");
