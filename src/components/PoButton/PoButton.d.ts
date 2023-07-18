import { DefineComponent } from "vue";

interface PoButtonProps {
	type?: "button" | "submit" | "link" | "simple";
	actionType?: "default" | "danger" | "ghost" | "success";
	label?: string;
	disabled?: boolean;
	to?: string;
	overrideColors?: boolean;
	size?: "sm" | "md" | "lg";
	isLoading?: boolean;
}

export declare const PoButton: DefineComponent<
	PoButtonProps,
	{},
	{},
	{},
	{
		"button-click": (to?: string) => void;
	}
>;
