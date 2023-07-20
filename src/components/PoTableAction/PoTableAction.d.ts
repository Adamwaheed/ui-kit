import { DefineComponent } from "vue";
import type { HeroIcon } from "../../../types/HeroIcon";

export declare const PoTableAction: DefineComponent<
	{
		btnIcon?: HeroIcon | null;
		btnType?: "text" | "icon" | "view" | "edit" | "delete";
		label?: string;
		textColor?: string;
		iconColor?: string;
	},
	{},
	{},
	{},
	{
		"alert-closed": (value: boolean) => void;
		"button-click": (value: string) => void;
		confirm: (value: boolean) => void;
		cancel: (value: boolean) => void;
	}
>;
