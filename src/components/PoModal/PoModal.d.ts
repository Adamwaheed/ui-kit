import { DefineComponent } from "vue";

export declare const PoModal: DefineComponent<
	{
		openBtnLabel?: string;
		modalTitle?: string;
		show?: boolean;
		modalWidth?: string;
		modalHeight?: string;
	},
	{},
	{},
	{},
	{
		"modal-closed": (value: boolean) => void;
	}
>;
