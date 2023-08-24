import { DefineComponent } from "vue";

export declare const PoSearch: DefineComponent<
	{
		modelValue: string | number;
		placeholder?: string;
		showBtn?: boolean;
	},
	{},
	{},
	{},
	{
		"button-click": (value: string) => void;
	}
>;
