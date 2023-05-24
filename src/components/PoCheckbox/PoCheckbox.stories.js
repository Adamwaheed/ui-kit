// YourComponent.stories.js

import PoCheckbox from "./PoCheckbox.vue";

import PoCheckboxDocs from "./PoCheckboxDocs.mdx";

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Form/Checkbox",
	component: PoCheckbox,
	parameters: {
		docs: {
			page: PoCheckboxDocs,
			description: {
				component:
					"This is the wrapper for every card. It adds basic style of the card and leaves out padding and margins.",
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
	setup() {
		//👇 The args will now be passed down to the template
		return { args };
	},
	components: { PoCheckbox },
	template: '<PoCheckbox v-bind="args" />',
});

export const Basic = Template.bind();
export const WithMessage = Template.bind();
export const Disabled = Template.bind();
export const WithError = Template.bind();

Basic.args = {
	id: "check-box-basic",
	label: "Check me",
};

WithMessage.args = {
	id: "check-box-with-message",
	label: "Check me",
	message: "A short descriptive message",
};

Disabled.args = {
	id: "check-box-disabled",
	label: "Can\t Check me",
	disabled: true,
};

WithError.args = {
	id: "check-box-error",
	label: "Check me",
	errorMessage: "Unable to comply, building in progress.",
};
