import { DefineComponent } from "vue";
import type { HeroIcon } from "../../../types/HeroIcon";

export declare const PoEmpty: DefineComponent<
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
