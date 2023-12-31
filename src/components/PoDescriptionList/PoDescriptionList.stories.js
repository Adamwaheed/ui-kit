// YourComponent.stories.js

import PoDescriptionList from "./PoDescriptionList.vue";
import PoCard from "../PoCard/PoCard.vue";

import PoDescriptionListDocs from "./PoDescriptionListDocs.mdx";

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Content/Description List",
	component: PoDescriptionList,
	parameters: {
		docs: {
			page: PoDescriptionListDocs,
			description: {
				component:
					"Description list component is useful when displaying content in an easy to read way.",
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
	components: { PoDescriptionList, PoCard },
	setup() {
		//👇 The args will now be passed down to the template
		return { args };
	},
	template: '<PoDescriptionList v-bind="args" />',
});

export const List = Template.bind({});
export const WithAction = Template.bind({});
export const Striped = Template.bind({});
export const NoCol = Template.bind({});
export const Loading = Template.bind({});

List.args = {
	/* 👇 The args you need here will depend on your component */
	items: [
		{
			title: "Full name",
			description: "Saleem Ahmed Doe",
		},
		{
			title: "Address",
			description: "House of Sal, Medhu St, Malé",
		},
		{
			title: "Dob",
			description: "1972-02-05",
			action: "Update",
		},
	],
};

WithAction.args = {
	/* 👇 The args you need here will depend on your component */
	items: [
		{
			title: "Full name",
			description: "Saleem Ahmed Doe",
			action: "Edit",
		},
		{
			title: "Address",
			description: "House of Sal, Medhu St, Malé",
			action: "Open map",
		},
		{
			title: "Dob",
			description: "1972-02-05",
			action: "Update",
		},
	],
};

Striped.args = {
	/* 👇 The args you need here will depend on your component */
	items: [
		{
			title: "Full name",
			description: "Saleem Ahmed Doe",
			action: "",
		},
		{
			title: "Address",
			description: "House of Sal, Medhu St, Malé",
		},
		{
			title: "Dob",
			description: "1972-02-05",
		},
		{
			title: "Position",
			description: "Crawler",
		},
	],
	striped: true,
};
NoCol.args = {
	/* 👇 The args you need here will depend on your component */
	items: [
		{
			title: "Full name",
			description: "Saleem Ahmed Doe",
			action: "",
		},
		{
			title: "Address",
			description: "House of Sal, Medhu St, Malé",
		},
		{
			title: "Dob",
			description: "1972-02-05",
		},
		{
			title: "Position",
			description: "Crawler",
		},
	],
	columns: false,
};
Loading.args = {
	/* 👇 The args you need here will depend on your component */
	items: [
		{
			title: "Full name",
			description: "Saleem Ahmed Doe",
			action: "",
		},
		{
			title: "Address",
			description: "House of Sal, Medhu St, Malé",
		},
		{
			title: "Dob",
			description: "1972-02-05",
		},
		{
			title: "Position",
			description: "Crawler",
		},
	],
	isLoading: true,
};
