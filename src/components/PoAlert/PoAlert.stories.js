// YourComponent.stories.js

import PoAlert from "./PoAlert.vue";
import PoButton from "../PoButton/PoButton.vue";

import PoAlertDocs from "./PoAlertDocs.mdx";

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Components/Alert",
	component: PoAlert,
	PoButton,
	parameters: {
		docs: {
			page: PoAlertDocs,
			description: {
				component: "Alert component.",
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
	components: { PoAlert, PoButton },
	setup() {
		let showAlert = ref(false);

		function buttonClick() {
			showAlert.value = true;
			console.log("cliiik", showAlert.value);
		}
		//👇 The args will now be passed down to the template
		return { args, showAlert, buttonClick };
	},
	template:
		'<PoAlert cancel-btn-label="Dismiss" ok-btn-label="Confirm" alert-title="Alert" alert-description="This is a test alert" :show="showAlert" @alert-closed="() => (showAlert = false)" /> <PoButton label="Show Alert" @click="buttonClick" />',
});

export const Alert = Template.bind();

Alert.args = {};
