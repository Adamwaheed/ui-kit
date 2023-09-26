// directives.ts
import type { DirectiveBinding, VNode } from "vue";

const hasPermissionDirective = {
	mounted(el: HTMLElement, binding: DirectiveBinding, vnode: VNode) {
		const hasPermission = binding.value;

		if (!hasPermission) {
			console.log("beforeMount !hasPermission", vnode?.el);
			const parent = vnode?.el?.parentElement;
			if (parent) {
				parent.removeChild(vnode.el);
			}
		}
	},
	updated(el: HTMLElement, binding: DirectiveBinding, vnode: VNode) {
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
				(el as any).__comment = comment;
			}
		}
	},
};

export default hasPermissionDirective;
