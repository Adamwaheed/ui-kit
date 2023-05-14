// YourComponent.stories.js

import Rufiyaa from "../Rufiyaa/Rufiyaa.vue";

import RufiyaaDocs from "./RufiyaaDocs.stories.mdx";

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Content/Rufiyaa",
	component: Rufiyaa,
	parameters: {
		docs: {
			page: RufiyaaDocs,
			description: {
				component: "Rufiyaa Symbol",
			},
		},
		backgrounds: {
			default: "white",
			values: [{ name: "white", value: "#fff" }],
		},
	},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
	components: { Rufiyaa },
	setup() {
		//👇 The args will now be passed down to the template
		return { args };
	},
	template: '<Rufiyaa class="po-w-5" v-bind="args" />',
});

export const Icon = Template.bind({});

Icon.args = {
	/* 👇 The args you need here will depend on your component */
	amount: 3000,
};
