// YourComponent.stories.js
import { ref } from "vue";

import PoMultiSelect from "./PoMultiSelect.vue";

import PoMultiSelectDocs from "./PoMultiSelectDocs.stories.mdx";

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Form/Multiselect",
	component: PoMultiSelect,
	parameters: {
		docs: {
			page: PoMultiSelectDocs,
			description: {
				component: "Multi select",
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
	components: { PoMultiSelect },
	setup() {
		const selectedmultiselectItems = ref([]);
		//👇 The args will now be passed down to the template
		return { args, selectedmultiselectItems };
	},
	template:
		'<PoMultiSelect v-bind="args" v-model="selectedmultiselectItems" /><br /><br /><span className="po-text-sm po-text-slate-500">Selected Items: {{selectedmultiselectItems}} </span>',
});

export const MulitSelect = Template.bind({});

MulitSelect.args = {
	/* 👇 The args you need here will depend on your component */
	label: "Multiselect",
	items: [
		{
			id: 1,
			name: "One",
		},
		{
			id: 2,
			name: "Two",
		},
		{
			id: 3,
			name: "Three",
		},
		{
			id: 4,
			name: "Four",
		},
	],
};
