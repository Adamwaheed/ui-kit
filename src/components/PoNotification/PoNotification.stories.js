// YourComponent.stories.js

import PoNotification from "./PoNotification.vue";

import PoNotificationDocs from "./PoNotificationDocs.mdx";

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Components/Notification",
	component: PoNotification,
	parameters: {
		docs: {
			page: PoNotificationDocs,
			description: {
				component: "Notification component.",
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
	components: { PoNotification },
	setup() {
		//👇 The args will now be passed down to the template
		return { args };
	},
	template:
		'<div aria-live="assertive" class="po-pointer-events-none po-fixed po-inset-0 po-flex po-items-end po-px-4 po-py-6 sm:po-items-start sm:po-p-6 po-z-50"><div class="po-flex po-w-full po-flex-col po-items-center po-space-y-4 sm:po-items-end po-pt-[55px]" id="po-notifications-alert"></div></div><PoNotification v-bind="args" />',
});

export const Notification = Template.bind();

Notification.args = {
	/* 👇 The args you need here will depend on your component */
	label: "Aishath Jackson replied...",
	text: "I submited all that but still",
	buttonLabel: "Respond",
	show: false,
};
