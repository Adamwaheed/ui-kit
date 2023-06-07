// YourComponent.stories.js

import PoCard from "../PoCard/PoCard.vue";
import PoCardSearch from "./PoCardSearch.vue";

import PoCardSearchDocs from "./PoCardSearchDocs.mdx";

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Layout/Card Search",
	component: PoCardSearch,
	parameters: {
		docs: {
			page: PoCardSearchDocs,
			description: {
				component: "Search bar displayed at the top of a card.",
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
	components: { PoCardSearch, PoCard },
	setup() {
		//👇 The args will now be passed down to the template
		let model = ref("");
		return { args, model };
	},
	template:
		'<PoCard><template v-slot:content><PoCardSearch placeholder="Search card.." v-model="model" /><div class="po-p-5 po-text-sm po-text-slate-500">Query: {{model}}</div></template></PoCard>',
});

//👇 We create a “template” of how args map to rendering
const TemplateTwo = (args) => ({
	components: { PoCardSearch, PoCard },
	setup() {
		//👇 The args will now be passed down to the template
		let model = ref("");
		return { args, model };
	},
	template:
		'<PoCard><template v-slot:content><PoCardSearch placeholder="Search card.." v-model="model" show-btn /><div class="po-p-5 po-text-sm po-text-slate-500">Query: {{model}}</div></template></PoCard>',
});

export const CardSearch = Template.bind();
export const CardSearchWithBtn = TemplateTwo.bind();
