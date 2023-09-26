import { Directive } from "vue";

declare module "./index" {
	const hasPermissionDirective: Directive;

	export default hasPermissionDirective;
}
