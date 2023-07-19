import { DefineComponent } from "vue";

export declare const PoInputFile: DefineComponent<
	{
		modelValue?: string | number;
		label?: string;
		id?: string;
		info?: string | null;
		message?: string | null;
		errorMessage?: string | null;
		display?: "vertical" | "horizontal";
		required?: boolean;
		progress?: number | null;
	},
	{},
	{},
	{},
	{
		"alert-closed": (value: boolean) => void;
		"button-click": (value: string) => void;
		confirm: (value: boolean) => void;
		cancel: (value: boolean) => void;
	}
>;
