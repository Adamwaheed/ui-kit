import { DefineComponent } from "vue";

interface Link {
	url: string;
	label: string;
}

export declare const PoConsent: DefineComponent<
	{
		modelValue: boolean;
		label: string;
		id?: string;
		links?: Link[] | null;
	},
	{},
	{},
	{},
	{}
>;
