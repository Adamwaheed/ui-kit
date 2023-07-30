import { DefineComponent } from "vue";

interface Item {
	id: string | number;
	name: string;
	active?: boolean;
	subtitle?: string;
	[index: number]: any;
}

export declare const PoSelectField: DefineComponent<
	{
		modelValue?: string | number | object | null;
		label?: string;
		id?: string;
		info?: string | null;
		list?: Item[] | null;
		display?: "vertical" | "horizontal";
		required?: boolean;
		errorMessage?: string | null;
		message?: string | null;
		disabled?: boolean;
		object?: boolean;
		dynamicScroll?: boolean;
		placeholder?: string | undefined;
	},
	{},
	{},
	{},
	{
		selected: (value: boolean) => void;
	}
>;
