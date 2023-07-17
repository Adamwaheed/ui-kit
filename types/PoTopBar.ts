import type { Notification } from "./Notification";

interface UserObject {
	[key: string]: any;
}

interface App {
	name: string;
	url: string;
	icon: string;
	group: string;
	code: string;
	related: string[];
	current: boolean;
}

export interface Props {
	currentQuery?: string;
	appName?: string;
	hasSearch?: boolean;
	appList?: App[] | null;
	notifications?: Notification[] | null;
	hasNewNotifications?: boolean;
	userObject?: UserObject | null;
	avatar?: string;
	logo?: string;
	appIcon?: any;
}
