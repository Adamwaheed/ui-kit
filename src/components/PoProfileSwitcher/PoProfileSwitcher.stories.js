// YourComponent.stories.js

import PoProfileSwitcher from "../PoProfileSwitcher/PoProfileSwitcher.vue";

import PoProfileSwitcherDocs from "./PoProfileSwitcherDocs.mdx";

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Shell/Profile Switcher",
	component: PoProfileSwitcher,
	parameters: {
		docs: {
			page: PoProfileSwitcherDocs,
			description: {
				component: "Profile Switcher component",
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
	components: { PoProfileSwitcher },
	setup() {
		//👇 The args will now be passed down to the template
		return { args };
	},
	template:
		'<div class="po-relative po-flex po-items-center po-space-x-3 po-w-full po-justify-end"><PoProfileSwitcher v-bind="args" /></div>',
});

export const ProfileSwitcher = Template.bind({});

ProfileSwitcher.args = {
	/* 👇 The args you need here will depend on your component */
	profileSwitcherData: {
		currProfileLabel: "HA",
		profiles: [
			{
				name: "Self",
				identifier: "",
				url: "#self",
				current: true,
				isPersonal: true,
			},
			{
				name: "Penshion Office",
				identifier: "202301052023",
				url: "#business",
				current: false,
				isPersonal: false,
			},
			{
				name: "ABC Enterprises Pvt Ltd",
				identifier: "202301052026",
				url: "#business",
				current: false,
				isPersonal: false,
			},
		],
	},
};
