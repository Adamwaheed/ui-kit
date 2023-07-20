import { DefineComponent } from "vue";

interface SelectedArray {
	id: string | number;
	name: string;
	[index: number]: any;
}

interface ItemsArray {
	id: string | number;
	name: string;
	[index: number]: any;
}

export declare const PoMultiSelect: DefineComponent<
	{
		modelValue?: SelectedArray[] | null;
		label?: string;
		display?: "vertical" | "horizontal";
		id?: string;
		info?: string | null;
		message?: string | null;
		errorMessage?: string | null;
		hasError?: boolean;
		required?: boolean;
		disabled?: boolean;
		placeholder?: string | null;
		borderColor?: string;
		items: ItemsArray[] | null;
	},
	{},
	{},
	{},
	{}
>;
