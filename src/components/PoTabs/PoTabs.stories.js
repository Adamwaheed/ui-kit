// YourComponent.stories.js

import PoTabs from "./PoTabs.vue";

import PoTabsDocs from "./PoTabsDocs.mdx";
import {
	BanknotesIcon,
	BriefcaseIcon,
	MapPinIcon,
	ScissorsIcon,
} from "@heroicons/vue/20/solid";

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Components/Tabs",
	component: PoTabs,
	parameters: {
		docs: {
			page: PoTabsDocs,
			description: {
				component: "PoTabs",
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
	components: { PoTabs },
	setup() {
		//👇 The args will now be passed down to the template
		return { args };
	},
	template: '<PoTabs v-bind="args" />',
});

export const Tabs = Template.bind({});

Tabs.args = {
	/* 👇 The args you need here will depend on your component */
	tabs: [
		{
			name: "Wage Changes",
			icon: BanknotesIcon,
			iconColor: "po-fill-green-400",
			href: "#",
			current: true,
			count: 20,
		},
		{
			name: "Terminations",
			icon: ScissorsIcon,
			iconColor: "po-fill-red-400",
			href: "#",
			current: false,
			count: 999,
		},
		{
			name: "Location Changes",
			icon: MapPinIcon,
			iconColor: "po-fill-orange-400",
			href: "#",
			current: false,
			count: 9,
		},
		{
			name: "Designation Changes",
			icon: BriefcaseIcon,
			iconColor: "po-fill-cyan-400",
			href: "#",
			current: false,
		},
	],
};
