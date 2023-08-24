// YourComponent.stories.js

import PoCard from "../PoCard/PoCard.vue";
import PoSearch from "./PoSearch.vue";

import PoSearchDocs from "./PoSearchDocs.mdx";

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Layout/Search",
	component: PoSearch,
	parameters: {
		docs: {
			page: PoSearchDocs,
			description: {
				component: "Search box field with button",
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
	components: { PoSearch, PoCard },
	setup() {
		//👇 The args will now be passed down to the template
		let model = ref("");
		return { args, model };
	},
	template:
		'<PoCard class="po-p-5"><template v-slot:content><PoSearch placeholder="Search.." v-model="model" /><div class="po-p-5 po-text-sm po-text-slate-500">Query: {{model}}</div></template></PoCard>',
});

export const Search = Template.bind();
