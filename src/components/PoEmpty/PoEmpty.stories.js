// YourComponent.stories.js

import PoEmpty from "./PoEmpty.vue";

import PoEmptyDocs from "./PoEmptyDocs.mdx";

import { BeakerIcon } from "@heroicons/vue/24/outline";

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Components/Empty",
	component: PoEmpty,
	parameters: {
		docs: {
			page: PoEmptyDocs,
			description: {
				component:
					"Empty component. I mean it's not empty, it is to be used when there is nothing else to show.",
			},
		},
		backgrounds: {
			default: "gray",
			values: [{ name: "gray", value: "#fff" }],
		},
	},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
	components: { PoEmpty },
	setup() {
		//👇 The args will now be passed down to the template
		return { args };
	},
	template: '<PoEmpty v-bind="args"/>',
});

export const Empty = Template.bind();

Empty.args = {
	/* 👇 The args you need here will depend on your component */
	label: "Nothing to show",
	description:
		"No show for sho, Write a helpful message. Maybe suggest something to do when it's empty.",
	icon: BeakerIcon,
};
