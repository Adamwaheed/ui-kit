import { DefineComponent } from "vue";

export declare const PoSlideover: DefineComponent<
	{
		label?: string | null;
		description?: string | null;
		show?: boolean;
		maxWidth?: string;
		bgColor?: string;
		screenOpacity?: string;
	},
	{},
	{},
	{},
	{
		"slideover-closed": (value: string) => void;
	}
>;
