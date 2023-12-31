// YourComponent.stories.js

import PoActionBar from "./PoActionBar.vue";

import {
	PlusIcon,
	BeakerIcon,
	CheckIcon,
	TrashIcon,
} from "@heroicons/vue/24/outline";

import PoActionBarDocs from "./PoActionBarDocs.mdx";

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Layout/Action Bar",
	component: PoActionBar,
	parameters: {
		docs: {
			page: PoActionBarDocs,
			description: {
				component:
					"Action bar component PoActionBar is used on views that require action other than form submissions. It emits actions performed on the buttons.",
			},
		},
		backgrounds: {
			default: "mpao",
			values: [{ name: "mpao", value: "#282f53" }],
		},
	},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
	components: { PoActionBar },
	setup() {
		//👇 The args will now be passed down to the template
		return { args };
	},
	template: '<PoActionBar v-bind="args"/>',
});

export const ActionBar = Template.bind({});
export const WithHighlight = Template.bind({});
export const WithDanger = Template.bind({});

ActionBar.args = {
	/* 👇 The args you need here will depend on your component */
	items: [
		{
			label: "New Staff",
			icon: PlusIcon,
		},
		{
			label: "Experiment",
			icon: BeakerIcon,
		},
	],
	showBackButton: true,
};

WithHighlight.args = {
	/* 👇 The args you need here will depend on your component */
	items: [
		{
			label: "Mark as done",
			icon: CheckIcon,
			highlighted: true,
		},
		{
			label: "Experiment",
			icon: BeakerIcon,
		},
	],
};

WithDanger.args = {
	/* 👇 The args you need here will depend on your component */
	items: [
		{
			label: "Delete it",
			icon: TrashIcon,
			danger: true,
		},
		{
			label: "Experiment",
			icon: BeakerIcon,
		},
	],
};
