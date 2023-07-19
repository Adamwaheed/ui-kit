import { DefineComponent } from "vue";

interface Item {
	label?: string;
	date?: string;
	by?: string;
	description?: string;
}

export declare const PoLogs: DefineComponent<
	{
		items: Item[] | null;
		emptyLabel?: string;
	},
	{},
	{},
	{},
	{}
>;
