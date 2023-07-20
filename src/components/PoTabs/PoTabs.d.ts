import { DefineComponent } from "vue";

export declare const PoTabs: DefineComponent<
	{
		tabs: Tab[] | null;
		currentTab?: string;
	},
	{},
	{},
	{},
	{
		"button-click": (value: string) => void;
	}
>;
