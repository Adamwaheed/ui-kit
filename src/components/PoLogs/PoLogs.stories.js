// YourComponent.stories.js

import PoLogs from "../PoLogs/PoLogs.vue";

import PoLogsDocs from "./PoLogsDocs.mdx";

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Content/Logs",
	component: PoLogs,
	parameters: {
		docs: {
			page: PoLogsDocs,
			description: {
				component: "Logs component",
			},
		},
		backgrounds: {
			default: "white",
			values: [{ name: "white", value: "#fff" }],
		},
	},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
	components: { PoLogs },
	setup() {
		//👇 The args will now be passed down to the template
		return { args };
	},
	template: '<div class="po-relative"><PoLogs v-bind="args" /></div>',
});

export const Empty = Template.bind({});
export const Full = Template.bind({});
export const WithoutDescription = Template.bind({});
export const WithoutBy = Template.bind({});

Empty.args = {
	/* 👇 The args you need here will depend on your component */
	items: [],
};

Full.args = {
	/* 👇 The args you need here will depend on your component */
	items: [
		{
			label: "Remarks",
			date: "Dec 29, 2022",
			by: "Jane Singhe",
			description:
				"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum",
		},
		{
			label: "Approved",
			date: "Dec 29, 2022",
			by: "Suzanne Ali",
			description:
				"Accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum",
		},
		{
			label: "Reported",
			date: "Dec 28, 2022",
		},
	],
};

WithoutDescription.args = {
	/* 👇 The args you need here will depend on your component */
	items: [
		{
			label: "Remarks",
			date: "Dec 29, 2022",
			by: "Jane Singhe",
			description: "",
		},
		{
			label: "Approved",
			date: "Dec 29, 2022",
			by: "Suzanne Ali",
		},
		{
			label: "Reported",
			date: "Dec 28, 2022",
		},
	],
};

WithoutBy.args = {
	/* 👇 The args you need here will depend on your component */
	items: [
		{
			label: "Remarks",
			date: "Dec 29, 2022",
			description:
				"Accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum",
		},
		{
			label: "Approved",
			date: "Dec 29, 2022",
			description:
				"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum",
		},
		{
			label: "Reported",
			date: "Dec 28, 2022",
		},
	],
};
