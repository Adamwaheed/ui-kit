import { DefineComponent } from "vue";
interface ActionObject {
	label: string;
	[key: string]: any;
}

interface Item {
	title: string;
	description: string;
	action?: string | ActionObject;
}

export declare const PoDescriptionList: DefineComponent<
	{
		items?: Item[] | null;
		striped?: boolean;
		columns?: boolean;
	},
	{},
	{},
	{},
	{
		"button-click": (value: string) => void;
	}
>;
