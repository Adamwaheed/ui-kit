// YourComponent.stories.js

import PoDownloadFileList from "../PoDownloadFileList/PoDownloadFileList.vue";

import PoDownloadFileListDocs from "./PoDownloadFileListDocs.mdx";

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Content/Download File List",
	component: PoDownloadFileList,
	parameters: {
		docs: {
			page: PoDownloadFileListDocs,
			description: {
				component: "Download File List component",
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
	components: { PoDownloadFileList },
	setup() {
		//👇 The args will now be passed down to the template
		return { args };
	},
	template:
		'<div class="po-relative"><PoDownloadFileList v-bind="args" /></div>',
});

export const Empty = Template.bind({});
export const Files = Template.bind({});
export const TwoButtons = Template.bind({});

Empty.args = {
	/* 👇 The args you need here will depend on your component */
};
Files.args = {
	/* 👇 The args you need here will depend on your component */
	files: [
		{
			label: "resume_back_end_developer.pdf",
		},
		{
			label: "another_files.pdf",
		},
		{
			label: "one_more_file.pdf",
		},
	],
};

TwoButtons.args = {
	/* 👇 The args you need here will depend on your component */
	showViewBtn: true,
	viewBtnLabel: "View",
	linkLabel: "Download",
	files: [
		{
			label: "resume_back_end_developer.pdf",
		},
	],
};
