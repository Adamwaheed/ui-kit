import { DefineComponent } from "vue";
import { Props as PoTooltipProps } from "~/components/PoTooltip/PoTooltip.vue";
// Import other component type definitions here

declare module "vue" {
	export interface GlobalComponents {
		PoTooltip: DefineComponent<PoTooltipProps>;
		// Register other components here
	}
}
