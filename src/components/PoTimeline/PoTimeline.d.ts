import { DefineComponent } from "vue";

interface Timeline {
	current: boolean;
	label: string;
	date: string;
	description?: string;
}

export declare const PoTimeline: DefineComponent<
	{
		timeline: Timeline[] | null;
		clickable?: boolean;
	},
	{},
	{},
	{},
	{
		"button-click": (value: string) => void;
	}
>;
