import { DefineComponent } from "vue";

interface Item {
	link: string;
	label: string;
	icon: HeroIcon;
}

export declare const PoSectionMenu: DefineComponent<
	{
		currPageRoute?: string;
		menuItems: Item[] | null;
	},
	{},
	{},
	{},
	{
		"link-click": (value: boolean) => void;
	}
>;
