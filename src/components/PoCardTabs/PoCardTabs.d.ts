import { DefineComponent } from "vue";
import type { Tab } from "../../../types/Types";

export declare const PoCardTabs: DefineComponent<
	{
		tabs: Tab[] | null;
	},
	{},
	{},
	{},
	{
		"button-click": (value: string) => void;
	}
>;
