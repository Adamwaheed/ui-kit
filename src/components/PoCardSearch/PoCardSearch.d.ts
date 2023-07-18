import { DefineComponent } from "vue";

export declare const PoCardSearch: DefineComponent<
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
