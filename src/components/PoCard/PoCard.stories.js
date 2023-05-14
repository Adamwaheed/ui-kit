// YourComponent.stories.js

import PoCard from "./PoCard.vue";
import PoButton from "../PoButton/PoButton.vue";

import PoCardDocs from "./PoCardDocs.stories.mdx";

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Layout/Card",
	component: PoCard,
	PoButton,
	parameters: {
		docs: {
			page: PoCardDocs,
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
	components: { PoCard },
	setup() {
		//👇 The args will now be passed down to the template
		return { args };
	},
	template:
		'<PoCard class="po-p-5 po-space-y-5"><template v-slot:content><span class="po-block po-text-sm po-text-slate-600">Content</span></template></PoCard>',
});

//👇 We create a “template” of how args map to rendering
const TemplateAction = (args) => ({
	components: { PoCard, PoButton },
	setup() {
		//👇 The args will now be passed down to the template
		return { args };
	},
	template:
		'<PoCard class="po-p-5 po-space-y-5"><template v-slot:action><PoButton label="Create" /><PoButton label="Another" action-type="ghost" /></template><template v-slot:content><span class="po-block po-text-sm po-text-slate-600">Content</span></template></PoCard>',
});

export const Basic = Template.bind();
export const WithTitle = Template.bind();
export const WithTitleAndAction = TemplateAction.bind();
export const WithLoading = Template.bind();

WithTitle.args = {
	title: "Card title",
};

WithTitleAndAction.args = {
	title: "Card with title and action",
};

WithLoading.args = {
	title: "Card title",
	isLoading: true,
};
