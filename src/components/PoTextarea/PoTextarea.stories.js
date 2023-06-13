// YourComponent.stories.js

import PoTextarea from "../PoTextarea/PoTextarea.vue";

import PoTextareaDocs from "./PoTextareaDocs.mdx";

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Form/Textarea",
	component: PoTextarea,
	parameters: {
		docs: {
			page: PoTextareaDocs,
			description: {
				component: "Textarea component",
			},
		},
		backgrounds: {
			default: "white",
			values: [{ name: "white", value: "#fff" }],
		},
	},
};
import { ref } from "vue";
//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
	components: { PoTextarea },
	setup() {
		const inputVal = ref("");
		//👇 The args will now be passed down to the template
		return { args, inputVal };
	},
	template: `<PoTextarea v-bind="args" v-model="inputVal" rows="5" />
							<br />
							<span class="po-text-sm po-text-slate-600">v-model: {{inputVal}}</span>`,
});

export const Normal = Template.bind({});
export const WithInfoTooltip = Template.bind({});
export const WithMessage = Template.bind({});
export const WithPlaceholder = Template.bind({});
export const ErrorState = Template.bind({});
export const DisabledState = Template.bind({});
export const Horizontal = Template.bind({});

Normal.args = {
	/* 👇 The args you need here will depend on your component */
	label: "Long text",
	id: "fullname-id",
};

WithInfoTooltip.args = {
	/* 👇 The args you need here will depend on your component */
	label: "Long text",
	id: "nid-id",
	info: "Long text of something.",
};

WithMessage.args = {
	/* 👇 The args you need here will depend on your component */
	label: "Street name",
	id: "streetname",
	message: "Name of the house, street, village",
};

WithPlaceholder.args = {
	/* 👇 The args you need here will depend on your component */
	label: "Long text",
	id: "emailaddress",
	placeholder: "Long placeholder",
};

ErrorState.args = {
	/* 👇 The args you need here will depend on your component */
	label: "Long text",
	id: "phonenumber",
	errorMessage: "Long text is required.",
};

DisabledState.args = {
	/* 👇 The args you need here will depend on your component */
	label: "Long text",
	id: "passowrd",
	disabled: true,
};

Horizontal.args = {
	/* 👇 The args you need here will depend on your component */
	label: "Short name",
	id: "short-name",
	display: "horizontal",
};
