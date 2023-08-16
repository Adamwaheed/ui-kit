// YourComponent.stories.js

import { ref } from "vue";
import PoFilter from "./PoFilter.vue";
import PoInputField from "../PoInputField/PoInputField.vue";

import PoFilterDocs from "./PoFilterDocs.mdx";

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Components/Filter",
	component: PoFilter,
	parameters: {
		docs: {
			page: PoFilterDocs,
			description: {
				component: "Filter wrapper component",
			},
		},
		backgrounds: {
			default: "gray",
			values: [{ name: "gray", value: "#fff" }],
		},
	},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
	components: { PoFilter, PoInputField },
	setup() {
		//👇 The args will now be passed down to the template
		const filters = ref({
			name: "",
			email: "",
			query: "",
		});
		const emitted = ref();
		function handleButtonClick(obj) {
			emitted.value = obj;
		}
		return { args, filters, emitted, handleButtonClick };
	},
	template: `<PoFilter :filters="filters" @button-click="handleButtonClick"><PoInputField label="Name" v-model="filters.name" /><PoInputField label="Email" v-model="filters.email" /><PoInputField label="Query" v-model="filters.query" /></PoFilter><br />
							<span class="po-text-sm po-text-slate-600">@button-click: {{emitted}}</span>`,
});

export const Filter = Template.bind();

Filter.args = {};
