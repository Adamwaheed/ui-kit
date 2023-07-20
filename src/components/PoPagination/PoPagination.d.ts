import { DefineComponent } from "vue";
import type { Pagination } from "../../../types/Pagination";

export declare const PoPagination: DefineComponent<
	{
		pagination: Pagination | null;
		totalPages?: string | number | null;
		currentPage?: string | number | null;
	},
	{},
	{},
	{},
	{
		"prev-click": (value: boolean) => void;
		"next-click": (value: boolean) => void;
		"button-click": (value: string) => void;
	}
>;
