// YourComponent.stories.js

import PoTimeline from "../PoTimeline/PoTimeline.vue";

import PoTimelineDocs from "./PoTimelineDocs.stories.mdx";

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Content/Timeline",
	component: PoTimeline,
	parameters: {
		docs: {
			page: PoTimelineDocs,
			description: {
				component: "Timeline component",
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
	components: { PoTimeline },
	setup() {
		//👇 The args will now be passed down to the template
		return { args };
	},
	template: '<div class="po-relative"><PoTimeline v-bind="args" /></div>',
});

export const Many = Template.bind({});
export const One = Template.bind({});
export const ManyClickable = Template.bind({});

One.args = {
	/* 👇 The args you need here will depend on your component */
	timeline: [
		{
			label: "Main Office",
			date: "Jan 10, 2020",
			description: "Started working at Main Office, Male City, Kaafu",
		},
	],
};

Many.args = {
	/* 👇 The args you need here will depend on your component */
	timeline: [
		{
			label: "Main Office",
			date: "2022-09-02 10:20:25",
			description:
				"Moved from Velaana Customer Centre to Main Office, Male City, Kaafu",
			current: true,
		},
		{
			label: "Velaana Customer Centre",
			date: "10-23-2022",
			description:
				"Moved from Vilingili Office to Velaana Customer Centre, Male City, Kaafu",
		},
		{
			label: "Vilingili Office",
			date: "Apr 17, 2020",
			description:
				"Moved from Main Office to Vilingili Office, Vilingili, Kaafu",
		},
		{
			label: "Main Office",
			date: "Jan 10, 2020",
			description: "Started working at Main Office, Male City, Kaafu",
		},
	],
};
ManyClickable.args = {
	/* 👇 The args you need here will depend on your component */
	clickable: true,
	timeline: [
		{
			label: "Main Office",
			date: "2022-09-02 10:20:25",
			description:
				"Moved from Velaana Customer Centre to Main Office, Male City, Kaafu",
			current: true,
		},
		{
			label: "Velaana Customer Centre",
			date: "10-23-2022",
			description:
				"Moved from Vilingili Office to Velaana Customer Centre, Male City, Kaafu",
		},
		{
			label: "Vilingili Office",
			date: "Apr 17, 2020",
			description:
				"Moved from Main Office to Vilingili Office, Vilingili, Kaafu",
		},
		{
			label: "Main Office",
			date: "Jan 10, 2020",
			description: "Started working at Main Office, Male City, Kaafu",
		},
	],
};
