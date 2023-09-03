import { DefineComponent } from "vue";
import type { FunctionalComponent } from "../../../types/Heroicon";

export declare const PoStatusPill: DefineComponent<
	{
		icon: FunctionalComponent;
		label: string;
		color?: "green" | "blue" | "red";
		customIconColor?: string | undefined;
		customBgColor?: string | undefined;
	},
	{},
	{},
	{},
	{}
>;
