import { DefineComponent } from "vue";

export declare const PoAlert: DefineComponent<
	{
		cancelBtnLabel?: string;
		okBtnLabel?: string;
		alertTitle?: string;
		alertDescription: string;
		show: boolean;
	},
	{},
	{},
	{},
	{
		"alert-closed": (value: boolean) => void;
		"button-click": (value: string) => void;
		confirm: (value: boolean) => void;
		cancel: (value: boolean) => void;
	}
>;
