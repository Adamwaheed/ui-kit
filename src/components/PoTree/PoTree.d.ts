import { DefineComponent } from "vue";

interface TreeNode {
	name: string;
	children?: TreeNode[];
	[key: string]: any; // Allow additional properties
}

export declare const PoTree: DefineComponent<
	{
		node: TreeNode | undefined;
		showAddBtn?: boolean;
		showViewBtn?: boolean;
		showEditBtn?: boolean;
		showDeleteBtn?: boolean;
	},
	{},
	{},
	{},
	{}
>;
