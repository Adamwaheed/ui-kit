// YourComponent.stories.js

import PoMonthYearPicker from "./PoMonthYearPicker.vue";
import PoCard from "../PoCard/PoCard.vue";

import PoMonthYearPickerDocs from "./PoMonthYearPickerDocs.mdx";

import { ref } from "vue";

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Form/Month Year Picker",
	component: PoMonthYearPicker,
	parameters: {
		docs: {
			page: PoMonthYearPickerDocs,
			description: {
				component: "Month Year picker field.",
			},
		},
	},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
	components: { PoMonthYearPicker, PoCard },
	setup() {
		const inputVal = ref("");
		//👇 The args will now be passed down to the template
		return { args, inputVal };
	},
	template: `<PoMonthYearPicker v-bind="args" v-model="inputVal" /><br />
							<span class="po-text-sm po-text-slate-600">v-model: {{inputVal}}</span>`,
});

export const Normal = Template.bind({});
export const Horizontal = Template.bind({});
export const MinMax = Template.bind({});
export const DisplayFormat = Template.bind({});

Normal.args = {
	/* 👇 The args you need here will depend on your component */
	label: "Contribution Month",
};
Horizontal.args = {
	/* 👇 The args you need here will depend on your component */
	label: "Contribution Month",
	display: "horizontal",
};

MinMax.args = {
	/* 👇 The args you need here will depend on your component */
	label: "Contribution Month",
	minDate: "27-02-2023",
	maxDate: "01-10-2024",
};

DisplayFormat.args = {
	/* 👇 The args you need here will depend on your component */
	label: "Contribution Month",
	displayFormat: "MMMM YY",
};
