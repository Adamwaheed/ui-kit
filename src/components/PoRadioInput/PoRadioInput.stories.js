// YourComponent.stories.js

import PoRadioInput from "./PoRadioInput.vue";
import PoCard from "../PoCard/PoCard.vue";

import PoRadioInputDocs from "./PoRadioInputDocs.mdx";

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Form/Radio",
	component: PoRadioInput,
	parameters: {
		docs: {
			page: PoRadioInputDocs,
			description: {
				component: "Radio input.",
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
	components: { PoRadioInput, PoCard },
	setup() {
		let selected = ref(1);
		let options = [
			{
				id: 1,
				title: "Option one",
			},
			{
				id: 2,
				title: "Option two",
			},
		];
		//👇 The args will now be passed down to the template
		return { args, selected, options };
	},
	template:
		'<PoRadioInput :options="options" v-model="selected" /><br /><br /><span class="po-text-sm po-text-slate-500">Selected value: {{selected}}</span>',
});

export const Radio = Template.bind({});

Radio.args = {
	/* 👇 The args you need here will depend on your component */
};
