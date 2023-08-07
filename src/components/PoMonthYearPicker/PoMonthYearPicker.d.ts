import { DefineComponent } from "vue";

export declare const PoMonthYearPicker: DefineComponent<
	{
		modelValue?: string | null;
		label?: string;
		minDate?: string | null;
		maxDate?: string | null;
		id?: string;
		info?: string | null;
		display?: "vertical" | "horizontal";
		required?: boolean;
		message?: string | null;
		disabled?: boolean;
	},
	{},
	{},
	{},
	{}
>;
