import { DefineComponent } from "vue";

interface Option {
	id: string | number;
	title: string;
	description?: string;
}

export declare const PoRadioInput: DefineComponent<
	{
		modelValue: string | number | null;
		options: Option[] | null;
		label?: string;
		info?: string | undefined;
		display?: "vertical" | "horizontal";
		required?: boolean;
		errorMessage?: string | null;
		message?: string | null;
	},
	{},
	{},
	{},
	{
		selected: (value: boolean) => void;
	}
>;
