import { DefineComponent } from "vue";

interface Item {
	bgColor: string;
	iconColor: string;
	icon: HeroIcon;
	value: string;
	diff?: string;
	label: string;
}

export declare const PoStatsBlock: DefineComponent<
	{
		items: Item[] | null;
		numberOfCols?: string;
	},
	{},
	{},
	{},
	{}
>;
