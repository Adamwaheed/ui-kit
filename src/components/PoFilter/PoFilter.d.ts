import { DefineComponent } from "vue";

export declare const PoFilter: DefineComponent<
	{
		filters: Record<string, any> | null;
		btnLabel?: string | undefined;
		addToUrl?: boolean | undefined;
		btnDisabled?: boolean | undefined;
	},
	{},
	{},
	{},
	{}
>;
