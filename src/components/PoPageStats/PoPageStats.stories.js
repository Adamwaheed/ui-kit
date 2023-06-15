// YourComponent.stories.js

import PoPageStats from "./PoPageStats.vue";

import PoPageStatsDocs from "./PoPageStatsDocs.mdx";

import { CheckBadgeIcon, TagIcon, BoltIcon } from "@heroicons/vue/20/solid";

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Layout/Page Stats",
	component: PoPageStats,
	parameters: {
		docs: {
			page: PoPageStatsDocs,
			description: {
				component: "Page stats component.",
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
	components: { PoPageStats },
	setup() {
		//👇 The args will now be passed down to the template
		return { args };
	},
	template: "<PoPageStats v-bind='args' />",
});

export const PageStats = Template.bind();

PageStats.args = {
	/* 👇 The args you need here will depend on your component */
	label: "Page title",
	standAlone: true,
	stats: [
		{
			value: "32",
			label: "Active",
			icon: CheckBadgeIcon,
			iconColor: "po-text-green-400",
		},
		{
			value: "1",
			label: "Draft",
			icon: TagIcon,
			iconColor: "po-text-sky-400",
		},
		{
			value: "5",
			label: "Terminated",
			icon: BoltIcon,
			iconColor: "po-text-red-400",
		},
	],
};
