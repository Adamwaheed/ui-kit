// YourComponent.stories.js

import PoInputField from "./PoInputField.vue";

import PoInputFieldDocs from "./PoInputFieldDocs.mdx";

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Form/Input Field",
	component: PoInputField,
	parameters: {
		docs: {
			page: PoInputFieldDocs,
			description: {
				component: "Form input field.",
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
	components: { PoInputField },
	setup() {
		const inputVal = ref("");
		//👇 The args will now be passed down to the template
		return { args, inputVal };
	},
	template: `<PoInputField v-bind="args" v-model="inputVal" />
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
export const Currency = Template.bind({});

Normal.args = {
	/* 👇 The args you need here will depend on your component */
	label: "Full name",
	id: "fullname-id",
	type: "text",
};

WithInfoTooltip.args = {
	/* 👇 The args you need here will depend on your component */
	label: "NID",
	id: "nid-id",
	type: "text",
	info: "National ID Card No.",
};

WithMessage.args = {
	/* 👇 The args you need here will depend on your component */
	label: "Street name",
	id: "streetname",
	type: "text",
	message: "Name of the house, street, village",
};

WithPlaceholder.args = {
	/* 👇 The args you need here will depend on your component */
	label: "Email address",
	id: "emailaddress",
	placeholder: "doe@example.com",
	type: "tel",
};

ErrorState.args = {
	/* 👇 The args you need here will depend on your component */
	label: "Phone number",
	id: "phonenumber",
	type: "text",
	errorMessage: "Phone number is required.",
	hasError: true,
};

DisabledState.args = {
	/* 👇 The args you need here will depend on your component */
	label: "Password",
	id: "passowrd",
	type: "password",
	disabled: true,
};

Horizontal.args = {
	/* 👇 The args you need here will depend on your component */
	label: "Short name",
	id: "short-name",
	display: "horizontal",
	type: "text",
};
Currency.args = {
	/* 👇 The args you need here will depend on your component */
	label: "Currency",
	type: "currency",
};
