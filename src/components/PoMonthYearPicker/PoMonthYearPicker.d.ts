import { DefineComponent } from "vue";

export declare const PoMonthYearPicker: DefineComponent<
	{
		modelValue?: string | number | object | null;
		label?: string;
		id?: string;
		info?: string | null;
		display?: "vertical" | "horizontal";
		required?: boolean;
		errorMessage?: string | null;
		message?: string | null;
		disabled?: boolean;
	},
	{},
	{},
	{},
	{}
>;
