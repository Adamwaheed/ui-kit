import { DefineComponent } from "vue";
import type { HeroIcon } from "../../../types/HeroIcon";

export declare const PoAlert: DefineComponent<
	{
		label?: string;
		description?: string;
		icon?: HeroIcon | null;
		iconColor?: string;
	},
	{},
	{},
	{},
	{}
>;
