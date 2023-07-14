export interface LogType {
	label: string;
	latest_version?: string;
	version_history?: LogTypeItem[];
	hasMore?: boolean;
}

interface LogTypeItem {
	date: string;
	version: string;
	note?: string;
}
