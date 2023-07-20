import { DefineComponent } from "vue";
import type {
	UserObject,
	Notification,
	AppListItem,
} from "../../../types/Types";

export declare const PoTopBar: DefineComponent<
	{
		currentQuery?: string;
		appName?: string;
		hasSearch?: boolean;
		appList?: AppListItem[] | null;
		notifications?: Notification[] | null;
		hasNewNotifications?: boolean;
		userObject?: UserObject | null;
		avatar?: string;
		logo?: string;
		appIcon?: any;
	},
	{},
	{},
	{},
	{
		query: (value: boolean) => void;
		profileSwitcherClick: (value: boolean) => void;
		onSearchClear: (value: boolean) => void;
	}
>;
