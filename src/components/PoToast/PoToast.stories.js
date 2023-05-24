// YourComponent.stories.js

import PoToast from "./PoToast.vue";

import PoToastDocs from "./PoToastDocs.mdx";

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Components/Toast",
	component: PoToast,
	parameters: {
		docs: {
			page: PoToastDocs,
			description: {
				component: "Toast",
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
	components: { PoToast },
	setup() {
		//👇 The args will now be passed down to the template
		return { args };
	},
	template: '<PoToast v-bind="args" />',
});

export const Toast = Template.bind({});

Toast.args = {
	/* 👇 The args you need here will depend on your component */
	message: "Toasted",
	show: true,
};
