import { DefineComponent } from "vue";

interface FileObject {
	label: string;
	[key: string]: any;
}

export declare const PoDownloadFileList: DefineComponent<
	{
		files: FileObject[] | null;
		linkLabel?: string;
		emptyLabel?: string;
		showViewBtn?: boolean;
		viewBtnLabel?: string;
	},
	{},
	{},
	{},
	{
		"view-click": (value: boolean) => void;
		"button-click": (value: string) => void;
	}
>;
