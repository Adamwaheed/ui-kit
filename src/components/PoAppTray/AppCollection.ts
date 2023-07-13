export interface AppCollection {
	groupName: string;
	apps: {
		name: string;
		url: string;
		icon: string;
		group: string;
		code: string;
		related: string[];
	}[];
}
