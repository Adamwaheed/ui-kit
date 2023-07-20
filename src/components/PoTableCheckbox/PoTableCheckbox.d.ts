import { DefineComponent } from "vue";

export declare const PoTableCheckbox: DefineComponent<
	{
		itemId: number | null;
		isChecked: boolean;
		disabled?: boolean;
	},
	{},
	{},
	{},
	{
		checkboxClicked: (value: string) => void;
	}
>;
