// YourComponent.stories.js

import PoSectionMenu from "./PoSectionMenu.vue";
import { UsersIcon, PuzzlePieceIcon, KeyIcon } from "@heroicons/vue/24/outline";

import PoSectionMenuDocs from "./PoSectionMenuDocs.mdx";

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Layout/Section Menu",
	component: PoSectionMenu,
	parameters: {
		docs: {
			page: PoSectionMenuDocs,
			description: {
				component:
					"Section menu or page menu used inside the body in sections like settings, etc, where sub menus are not accessed as often.",
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
	components: { PoSectionMenu },
	setup() {
		const currRoute = ref("/users");
		function handleSectionMenuClick(route) {
			currRoute.value = route;
		}
		//👇 The args will now be passed down to the template
		return { args, currRoute, handleSectionMenuClick };
	},
	template:
		'<PoSectionMenu v-bind="args" :curr-page-route="currRoute" @link-click="handleSectionMenuClick" />',
});

export const SectionMenu = Template.bind({});

SectionMenu.args = {
	/* 👇 The args you need here will depend on your component */
	menuItems: [
		{
			label: "All Users",
			icon: UsersIcon,
			link: "/users",
		},
		{
			label: "Roles",
			icon: PuzzlePieceIcon,
			link: "/users/roles",
		},
		{
			label: "Permissions",
			icon: KeyIcon,
			link: "/users/permissions",
		},
	],
};
