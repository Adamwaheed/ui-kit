// YourComponent.stories.js

import PoConsent from "./PoConsent.vue";
import PoConsentDocs from "./PoConsentDocs.mdx";

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Form/Consent",
	component: PoConsent,
	parameters: {
		docs: {
			page: PoConsentDocs,
			description: {
				component:
					"This component is to be used in forms when a user consent is required.",
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
	components: { PoConsent },
	template: '<PoConsent v-bind="args" />',
});

export const Consent = Template.bind();

Consent.args = {
	id: "iam-a-consent",
	label:
		"I agree to the terms outlined in this consent statement and grant permission for my information to be published on this platform.",
	links: [
		{ label: "Concent statement", url: "consent-statement" },
		{ label: "Terms of use", url: "terms-conditions" },
	],
};
