// YourComponent.stories.js

import PoMessage from "./PoMessage.vue";

import PoMessageDocs from "./PoMessageDocs.mdx";

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Components/Message",
	component: PoMessage,
	parameters: {
		docs: {
			page: PoMessageDocs,
			description: {
				component: "PoMessage",
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
	components: { PoMessage },
	setup() {
		//👇 The args will now be passed down to the template
		return { args };
	},
	template: '<PoMessage v-bind="args" />',
});

export const Message = Template.bind({});

Message.args = {
	/* 👇 The args you need here will depend on your component */
	message: "There is a pending Designation change already.",
	btnName: "View",
	btnAction: "#",
};
