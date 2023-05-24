// YourComponent.stories.js

import PoToggle from "./PoToggle.vue";

import PoToggleDocs from "./PoToggleDocs.mdx";

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Form/Toggle",
	component: PoToggle,
	parameters: {
		docs: {
			page: PoToggleDocs,
			description: {
				component: "Toggle button with label",
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
	components: { PoToggle },
	setup() {
		let toggleVal = ref(false);
		//👇 The args will now be passed down to the template
		return { args, toggleVal };
	},
	template:
		'<PoToggle label="Toggle me" v-model="toggleVal" /><br /><br /><span class="po-text-sm po-text-slate-500">Toggle  value: {{ toggleVal }}</span>',
});

export const Toggle = Template.bind({});

Toggle.args = {
	/* 👇 The args you need here will depend on your component */
};
