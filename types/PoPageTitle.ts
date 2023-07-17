import type { HeroIcon } from "./HeroIcon";

export interface Stat {
	icon?: HeroIcon;
	value?: string;
	label?: string;
	iconColor?: string;
}

export interface Pagination {
	label?: string;
	nextLink?: string;
	prevLink?: string;
}

export interface Props {
	label?: string;
	description?: string;
	stats?: Stat[] | null;
	showPagination?: boolean;
	showFilter?: boolean;
	showDownload?: boolean;
	pagination?: Pagination | null;
	filterOn?: boolean;
	standAlone?: boolean;
}
