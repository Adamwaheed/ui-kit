// YourComponent.stories.js

import PoStatsBlock from "./PoStatsBlock.vue";

import {
	BanknotesIcon,
	SparklesIcon,
	FunnelIcon,
} from "@heroicons/vue/24/outline";

import PoStatsBlockDocs from "./PoStatsBlockDocs.mdx";

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Components/Stats Block",
	component: PoStatsBlock,
	parameters: {
		docs: {
			page: PoStatsBlockDocs,
			description: {
				component: "Used to display stats for on a page",
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
	components: { PoStatsBlock },
	setup() {
		//👇 The args will now be passed down to the template
		return { args };
	},
	template: '<PoStatsBlock v-bind="args"/>',
});

export const StatsBlock = Template.bind({});

StatsBlock.args = {
	/* 👇 The args you need here will depend on your component */
	items: [
		{
			label: "Number of Maturities",
			value: "20",
			bgColor: "bg-orange-50",
			iconColor: "text-orange-700",
			icon: SparklesIcon,
		},
		{
			label: "Principal Frequency",
			value: "Semi-Annual",
			bgColor: "bg-sky-50",
			iconColor: "text-sky-700",
			icon: FunnelIcon,
		},
		{
			label: "Purchase Value",
			value: "80,000,000.00",
			bgColor: "bg-green-50",
			iconColor: "text-green-700",
			icon: BanknotesIcon,
		},
	],
};
