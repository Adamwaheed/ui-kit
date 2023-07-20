import { DefineComponent } from "vue";

export declare const PoSelectApi: DefineComponent<
	{
		options: Array<any>;
		id?: string;
		loading?: boolean;
		showMoreBtn?: boolean;
		label?: string;
		info?: string | null;
		display?: "vertical" | "horizontal";
		required?: boolean;
		errorMessage?: string | null;
		message?: string | null;
		disabled?: boolean;
		emptyMessage?: string | null;
		showSelected?: boolean;
	},
	{},
	{},
	{},
	{
		search: (value: boolean) => void;
		selected: (value: boolean) => void;
		loadmore: (value: boolean) => void;
	}
>;
