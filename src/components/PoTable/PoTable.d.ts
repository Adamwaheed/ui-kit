import { DefineComponent } from "vue";

interface THead {
	label: string;
	sortable?: boolean;
	sorted?: boolean;
	sortDirection?: string | null;
	index?: number;
}

export declare const PoTable: DefineComponent<
	{
		thead: THead[] | null;
		tbody: Array<any> | null;
		emptyMessage?: string;
		breakAtLg?: boolean;
		isLoading?: boolean;
		hasDetailsRow?: boolean;
	},
	{},
	{},
	{},
	{
		"column-click": (value: boolean) => void;
	}
>;
