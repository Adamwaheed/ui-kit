import { DefineComponent } from "vue";

export declare const PoButton: DefineComponent<
	{
		type?: "button" | "submit" | "link" | "simple";
		actionType?: "default" | "danger" | "ghost" | "success";
		label?: string;
		disabled?: boolean;
		to?: string;
		overrideColors?: boolean;
		size?: "sm" | "md" | "lg";
		isLoading?: boolean;
	},
	{},
	{},
	{},
	{
		"button-click": (to?: string) => void;
	}
>;
