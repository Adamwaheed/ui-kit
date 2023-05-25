// YourComponent.stories.js

import PoSelectField from "./PoSelectField.vue";

import PoSelectFieldDocs from "./PoSelectFieldDocs.mdx";

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Form/Select Field",
	component: PoSelectField,
	parameters: {
		docs: {
			page: PoSelectFieldDocs,
			description: {
				component: "Select input field.",
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
	components: { PoSelectField },
	setup() {
		let list = [
			{ id: 1, name: "Koshaaru" },
			{ id: 2, name: "HelpDesk" },
			{ id: 3, name: "Another" },
		];
		let selected = ref(null);
		let selectedEventVal = ref(null);

		function selectedEvent(val) {
			selectedEventVal.value = val;
		}
		//👇 The args will now be passed down to the template
		return { args, list, selected, selectedEventVal, selectedEvent };
	},
	template:
		'<PoSelectField label="Select something" :list="list" v-model="selected" @selected="selectedEvent" /><br /><br /><span className="po-text-sm po-text-slate-500">Selected Item: {{selected}} </span><br /><span className="po-text-sm po-text-slate-500">Selected Event Value: {{selectedEventVal}} </span>',
});
const TemplateTwo = (args) => ({
	components: { PoSelectField },
	setup() {
		let list = [
			{ id: 1, name: "Sub category name", subtitle: "Category" },
			{ id: 2, name: "Running around in circles", subtitle: "Activity" },
			{ id: 3, name: "Something drinkable", subtitle: "Water" },
		];

		let selected = ref(null);
		let selectedEventVal = ref(null);

		function selectedEvent(val) {
			selectedEventVal.value = val;
		}
		//👇 The args will now be passed down to the template
		return { args, list, selected, selectedEventVal, selectedEvent };
	},
	template:
		'<PoSelectField label="Select something" :list="list" v-model="selected" @selected="selectedEvent" /><br /><br /><span className="po-text-sm po-text-slate-500">Selected Item: {{selected}} </span><br /><span className="po-text-sm po-text-slate-500">Selected Event Value: {{selectedEventVal}} </span>',
});

const TemplateThree = (args) => ({
	components: { PoSelectField },
	setup() {
		let list = [
			{ id: 1, name: "Koshaaru" },
			{ id: 2, name: "HelpDesk" },
			{ id: 3, name: "Another" },
		];
		let selected = ref(null);
		let selectedEventVal = ref(null);

		function selectedEvent(val) {
			selectedEventVal.value = val;
		}
		//👇 The args will now be passed down to the template
		return { args, list, selected, selectedEventVal, selectedEvent };
	},
	template:
		'<PoSelectField label="Select something" object :list="list" v-model="selected" @selected="selectedEvent" /><br /><br /><span className="po-text-sm po-text-slate-500">Selected Item: {{selected}} </span><br /><span className="po-text-sm po-text-slate-500">Selected Event Value: {{selectedEventVal}} </span>',
});

export const SelectField = Template.bind({});
export const SelectFieldTwo = TemplateTwo.bind({});
export const SelectFieldThree = TemplateThree.bind({});

SelectField.args = {};
SelectFieldTwo.args = {};
SelectFieldThree.args = {};
