// YourComponent.stories.js

import PoPagination from "./PoPagination.vue";

import PoPaginationDocs from "./PoPaginationDocs.mdx";

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Components/Pagination",
	component: PoPagination,
	parameters: {
		docs: {
			page: PoPaginationDocs,
			description: {
				component: "Pagination component.",
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
	components: { PoPagination },
	setup() {
		//👇 The args will now be passed down to the template
		return { args };
	},
	template: '<PoPagination v-bind="args" />',
});

export const Pagination = Template.bind();

Pagination.args = {
	/* 👇 The args you need here will depend on your component */
	pagination: {
		label: "Page 2 of 20",
		nextLink: "/users/1",
		prevLink: "/users/3",
	},
};
