// YourComponent.stories.js

import PoTree from "./PoTree.vue";

import PoTreeDocs from "./PoTreeDocs.mdx";

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Components/Tree",
	component: PoTree,
	parameters: {
		docs: {
			page: PoTreeDocs,
			description: {
				component: "Tree",
			},
		},
		backgrounds: {
			default: "gray",
			values: [{ name: "gray", value: "#f8fafc" }],
		},
	},
};

import { ref } from "vue";
//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
	components: { PoTree },
	setup() {
		let showButtonEmit = ref("");

		let treeItems = [
			{
				name: "Tea Room",
				children: [
					{
						name: "Seating Area",
						children: [
							{
								name: "Behind TV",
								children: [
									{
										name: "Under the power cable",
									},
								],
							},
							{
								name: "Cupboard",
							},
						],
					},
					{
						name: "Kitchen Area",
						children: [
							{
								name: "Cupboard",
							},
							{
								name: "Table",
							},
						],
					},
				],
			},
			{
				name: "Another Rroom",
			},
		];
		//👇 The args will now be passed down to the template
		return { args, treeItems };
	},
	template: `<template v-for="node of treeItems"><PoTree :node="node" show-view-btn show-add-btn show-edit-btn show-delete-btn /></template>`,
});

export const Tree = Template.bind({});

Tree.args = {};
