import { DefineComponent } from "vue";

export declare const PoTextarea: DefineComponent<
	{
		modelValue?: string | number;
		label?: string;
		id?: string;
		info?: string | null;
		message?: string | null;
		errorMessage?: string | null;
		required?: boolean;
		disabled?: boolean;
		placeholder?: string | undefined;
		display?: "vertical" | "horizontal";
	},
	{},
	{},
	{},
	{}
>;
