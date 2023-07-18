import { DefineComponent } from "vue";

export declare const PoCheckbox: DefineComponent<
	{
		modelValue: boolean;
		label?: string;
		id?: string;
		message?: string | null;
		errorMessage?: string | null;
		disabled?: boolean;
		required?: boolean;
	},
	{},
	{},
	{},
	{}
>;
