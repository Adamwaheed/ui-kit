import { DefineComponent } from "vue";

export declare const PoUpload: DefineComponent<
	{
		token: string;
		url: string;
		payload?: object;
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
		dragAreaText?: string;
		dragOverText?: string;
	},
	{},
	{},
	{},
	{}
>;
