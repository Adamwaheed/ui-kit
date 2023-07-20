import { DefineComponent } from "vue";
import type { Stat, Pagination } from "../../../types/Types";

export declare const PoPageTitle: DefineComponent<
	{
		label?: string;
		description?: string;
		stats?: Stat[] | null;
		showPagination?: boolean;
		showFilter?: boolean;
		showDownload?: boolean;
		pagination?: Pagination | null;
		filterOn?: boolean;
		standAlone?: boolean;
	},
	{},
	{},
	{},
	{
		"button-click": (value: string) => void;
		"pagination-click": (value: boolean) => void;
		"stat-click": (value: boolean) => void;
	}
>;
