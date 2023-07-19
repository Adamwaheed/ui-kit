import { DefineComponent } from "vue";

import { HeroIcon } from "../../../types/Types";

interface Item {
	label: string;
	highlighted?: boolean;
	danger?: boolean;
	icon: HeroIcon;
}

export declare const PoActionBar: DefineComponent<
	{
		items: Item[] | null;
		showBackButton?: boolean;
		currPageRoute: string;
	},
	{},
	{},
	{},
	{
		"button-click": (value: string) => void;
	}
>;
