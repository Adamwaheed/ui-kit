import { DefineComponent } from "vue";

export declare const PoMessage: DefineComponent<
	{
		msgType?: string;
		message: string;
		btnName?: string;
		btnAction?: string | object;
	},
	{},
	{},
	{},
	{
		"button-click": (value: string) => void;
	}
>;
