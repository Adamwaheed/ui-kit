// YourComponent.stories.js

import PoStatusPill from "./PoStatusPill.vue";

import PoStatusPillDocs from "./PoStatusPillDocs.mdx";
import {
	CheckBadgeIcon,
	TagIcon,
	BoltIcon,
	ScissorsIcon,
} from "@heroicons/vue/20/solid";

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Components/Status Pill",
	component: PoStatusPill,
	parameters: {
		docs: {
			page: PoStatusPillDocs,
			description: {
				component: "PoStatusPill",
			},
		},
		backgrounds: {
			default: "gray",
			values: [{ name: "gray", value: "#f8fafc" }],
		},
	},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
	components: { PoStatusPill },
	setup() {
		//👇 The args will now be passed down to the template
		return { args };
	},
	template: '<PoStatusPill v-bind="args" />',
});

export const Green = Template.bind({});
export const Blue = Template.bind({});
export const Red = Template.bind({});
export const Custom = Template.bind({});

Green.args = {
	/* 👇 The args you need here will depend on your component */
	icon: CheckBadgeIcon,
	label: "Active",
	color: "green",
};
Blue.args = {
	/* 👇 The args you need here will depend on your component */
	icon: TagIcon,
	label: "Drafts",
	color: "blue",
};
Red.args = {
	/* 👇 The args you need here will depend on your component */
	icon: BoltIcon,
	label: "Rejected",
	color: "red",
};
Custom.args = {
	/* 👇 The args you need here will depend on your component */
	icon: ScissorsIcon,
	label: "Middle",
	customIconColor: "po-fill-pink-400",
	customBgColor: "po-bg-pink-100",
};
