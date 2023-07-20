import { DefineComponent } from "vue";

export declare const PoProfileSwitcher: DefineComponent<
	{
		userObject: UserObject | null;
		avatar?: string;
		logo?: string;
	},
	{},
	{},
	{},
	{
		"button-click": (value: string) => void;
	}
>;
