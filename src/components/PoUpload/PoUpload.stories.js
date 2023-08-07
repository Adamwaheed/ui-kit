// YourComponent.stories.js

import PoUpload from "./PoUpload.vue";
import PoCard from "../PoCard/PoCard.vue";

import PoUploadDocs from "./PoUploadDocs.mdx";

import { ref } from "vue";

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Form/Upload",
	component: PoUpload,
	parameters: {
		docs: {
			page: PoUploadDocs,
			description: {
				component: "Upload field.",
			},
		},
	},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
	components: { PoUpload, PoCard },
	setup() {
		const inputVal = ref("");
		//👇 The args will now be passed down to the template
		return { args, inputVal };
	},
	template: `<PoUpload v-bind="args" />`,
});

export const Upload = Template.bind({});

Upload.args = {
	/* 👇 The args you need here will depend on your component */
	label: "Upload File",
	token: "token",
	url: "https://full-api.url",
};
