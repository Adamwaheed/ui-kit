interface LogTypeItem {
	date: string;
	version: string;
	note?: string;
}

export interface LogType {
	label: string;
	latest_version?: string;
	version_history?: LogTypeItem[];
	hasMore?: boolean;
}
