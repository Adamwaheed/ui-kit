import { DefineComponent } from "vue";

export declare const PoToast: DefineComponent<
	{
		show?: boolean;
		actionType?: "success" | "danger" | "warn" | "";
		message?: string;
		hideIn?: number;
		size?: "sm" | "lg" | "xl";
	},
	{},
	{},
	{},
	{
		"toast-closed": (value: boolean) => void;
	}
>;
