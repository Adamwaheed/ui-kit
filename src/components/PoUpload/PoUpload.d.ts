import { DefineComponent } from "vue";

export declare const PoUpload: DefineComponent<
	{
		payload?: object;
		url?: string;
		modelValue?: string | number;
		label?: string;
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
		inputLabel?: string;
	},
	{},
	{},
	{},
	{}
>;
