import { DefineComponent } from "vue";
import type { Stat } from "../../../types/Types";

export declare const PoPageStats: DefineComponent<
	{
		stats?: Stat[] | null;
		clickable?: boolean | null;
		padding?: string;
	},
	{},
	{},
	{},
	{
		"stat-click": (value: boolean) => void;
	}
>;
