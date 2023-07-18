import { DefineComponent } from "vue";

export declare const PoInputField: DefineComponent<
	{
		modelValue?: string | number;
		label?: string;
		type?: string;
		display?: "vertical" | "horizontal";
		id?: string;
		info?: string | null;
		message?: string | null;
		errorMessage?: string | null;
		hasError?: boolean;
		required?: boolean;
		disabled?: boolean;
		placeholder?: string | undefined;
		borderColor?: string;
	},
	{},
	{},
	{},
	{}
>;
