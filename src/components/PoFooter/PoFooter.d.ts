import { DefineComponent } from "vue";
import type { LogType } from "../../../types/LogType";

export declare const PoFooter: DefineComponent<
	{
		changelog: LogType[] | null;
	},
	{},
	{},
	{},
	{
		"button-click": (value: string) => void;
	}
>;
