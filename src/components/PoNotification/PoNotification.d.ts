import { DefineComponent } from "vue";

export declare const PoNotification: DefineComponent<
	{
		show?: boolean;
		label?: string;
		text?: string;
		buttonLabel?: string;
	},
	{},
	{},
	{},
	{
		"button-click": (value: string) => void;
	}
>;
