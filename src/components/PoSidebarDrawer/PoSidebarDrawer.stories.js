// YourComponent.stories.js

import PoSidebarDrawer from "./PoSidebarDrawer.vue";
import PoSidebarDrawerDocs from "./PoSidebarDrawerDocs.mdx";

import {
	AcademicCapIcon,
	ShieldCheckIcon,
	MagnifyingGlassIcon,
	DocumentIcon,
	ShieldExclamationIcon,
	DocumentPlusIcon,
	PencilSquareIcon,
	WalletIcon,
	BellIcon,
} from "@heroicons/vue/24/outline";

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Shell/Sidebar Drawer",
	component: PoSidebarDrawer,
	parameters: {
		docs: {
			page: PoSidebarDrawerDocs,
			description: {
				component: "Sidebar component.",
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
	components: { PoSidebarDrawer },
	setup() {
		//👇 The args will now be passed down to the template
		return { args };
	},
	template: '<PoSidebarDrawer v-bind="args" />',
});

export const SidebarDrawer = Template.bind();

SidebarDrawer.args = {
	/* 👇 The args you need here will depend on your component */
	content: [
		{
			groupName: "Main",
			items: [
				{
					label: "Dahboard",
					url: "/",
					icon: AcademicCapIcon,
				},
				{
					label: "Auth",
					url: "/users",
					icon: ShieldCheckIcon,
				},
			],
		},
		{
			groupName: "Death Reporting",
			items: [
				{
					label: "Search",
					url: "/deathreporting",
					icon: MagnifyingGlassIcon,
				},
				{
					label: "Unverified",
					url: "/deathreporting/unverified",
					icon: DocumentIcon,
				},
				{
					label: "Unauthorized",
					url: "/deathreporting/unauthorized",
					icon: ShieldExclamationIcon,
				},
				{
					label: "Report a Death",
					url: "/deathreporting/create",
					icon: DocumentPlusIcon,
				},
				{
					label: "Update",
					url: "/deathreporting/update",
					icon: PencilSquareIcon,
				},
			],
		},
		{
			groupName: "Investment Maturity",
			items: [
				{
					label: "All Investments",
					url: "/investments/list",
					icon: WalletIcon,
				},
				{
					label: "Notification History",
					url: "/investments/history",
					icon: BellIcon,
				},
			],
		},
	],

	apps: [
		{
			name: "Auth Service",
			url: "https://auth-next.dev.mpao.mv/",
			icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#db4ec0"><path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" /></svg>',
			group: "",
			code: "auth",
			related: ["koshaaru", "drs"],
		},
		{
			name: "Koshaaru Portal",
			url: "https://koshaaru.pension.gov.mv",
			icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 0 32 32"><path fill="#D4AC0D" d="m25.728 10.112-10.72 5.152-10.72-5.152 10.72-6.176zm-21.632.352 9.824 6.72.896 11.808-10.72-6.176V10.464zm21.792 0v12.352L15.2 28.992l.896-11.808z"/></svg>',
			group: "",
			code: "koshaaru",
			related: ["auth", "tickets"],
		},
		{
			name: "Death Repository",
			icon: `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 501 414">
  <path fill="#C0392B" d="M59.061 279.405c-4.11-5.92-2.64-14.067 3.281-18.177 5.923-4.112 13.081-1.817 18.179 3.28C252.129 436.118 391.119 16.803 304.413 87.319c-42.077 34.22-84.01 79.636-122.349 107.977-25.937 19.173-50.925 30.744-73.388 30.42-35.002-.564-60.374-14.627-77.774-33.611-22.23-24.255-31.259-56.49-30.891-77.46.386-20.945 9.15-53.074 32.138-76.331C49.276 20.985 73.916 7.988 108.676 8.628c18.157.364 33.98 4.553 47.996 11.314 14.68 7.081 27.408 16.808 38.729 27.55 5.33 4.853 5.715 13.121.861 18.451s-13.122 5.716-18.451.862c-9.684-8.465-20.424-16.151-32.75-21.495C23.072-7.57 88.816 227.335 186.06 136.662 225.648 99.748 267.95 53.466 310.06 26.134 335.283 9.763 360.794.116 385.496 0c39.674.066 67.978 17.249 86.75 41.465 19.571 25.246 28.372 58.655 28.204 87.734-.85 75.024-33.066 139.053-76.491 187.036-57.142 63.14-133.025 97.884-176.873 97.141-24.026-.446-57.091-12.527-90.876-35.425-34.17-23.161-69.557-56.998-97.149-98.546Z"/>
</svg>
`,
			group: "",
			code: "drs",
			related: ["auth", "tickets"],
		},
	],

	appCode: "auth",
};
