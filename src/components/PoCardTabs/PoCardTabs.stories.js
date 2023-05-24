// YourComponent.stories.js

import {
	BanknotesIcon as BanknotesIconSolid,
	BriefcaseIcon,
	MapPinIcon,
	ScissorsIcon,
} from "@heroicons/vue/20/solid";

import PoCardTabs from "./PoCardTabs.vue";

import PoCardTabsDocs from "./PoCardTabsDocs.mdx";

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Layout/Card Tabs",
	component: PoCardTabs,
	parameters: {
		docs: {
			page: PoCardTabsDocs,
			description: {
				component: "Card tabs",
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
	components: { PoCardTabs },
	setup() {
		function handleButtonClick(clickedTab) {
			args.tabs.forEach((tab) => {
				tab.current = tab === clickedTab; // Set 'current' to true for the clicked tab, false for others
			});
		}
		//👇 The args will now be passed down to the template
		return { args, handleButtonClick };
	},
	template: '<PoCardTabs v-bind="args" @button-click="handleButtonClick" />',
});

export const CardTabs = Template.bind({});

CardTabs.args = {
	/* 👇 The args you need here will depend on your component */
	tabs: [
		{
			name: "Wage Changes",
			icon: BanknotesIconSolid,
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
