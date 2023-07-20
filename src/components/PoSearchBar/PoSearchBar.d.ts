import { DefineComponent } from "vue";

export declare const PoSearchBar: DefineComponent<
	{
		placeholder?: string;
		currentQuery?: string;
	},
	{},
	{},
	{},
	{
		query: (value: boolean) => void;
		onClear: (value: boolean) => void;
	}
>;
