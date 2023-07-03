// YourComponent.stories.js

import PoTooltip from "./PoTooltip.vue";

import PoTooltipDocs from "./PoTooltipDocs.mdx";

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Components/Tooltip",
	component: PoTooltip,
	parameters: {
		docs: {
			page: PoTooltipDocs,
			description: {
				component: "Tooltip",
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
	components: { PoTooltip },
	setup() {
		let toggleVal = ref(false);
		//👇 The args will now be passed down to the template
		return { args, toggleVal };
	},
	template: "<PoTooltip></PoTooltip>",
});

export const Tooltip = Template.bind({});

Tooltip.args = {
	/* 👇 The args you need here will depend on your component */
};
