import { DefineComponent } from "vue";
import type { HeroIcon, AppListItem } from "../../../types/Types";

interface SidebarContentItem {
	label: string;
	url: string;
	icon: HeroIcon;
	disabled?: boolean;
}

interface SidebarContentGroup {
	groupName: string;
	items: SidebarContentItem[];
}

export declare const PoSidebarDrawer: DefineComponent<
	{
		content: SidebarContentGroup[] | null;
		currRoute?: string;
		hasFeedback?: boolean;
		appsLabel?: string;
		apps?: AppListItem[] | null;
		appCode?: string;
	},
	{},
	{},
	{},
	{
		"app-click": (value: boolean) => void;
		"button-click": (value: string) => void;
	}
>;
