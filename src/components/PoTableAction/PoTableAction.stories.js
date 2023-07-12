// YourComponent.stories.js

import PoTableAction from "./PoTableAction.vue";

import PoTableActionDocs from "./PoTableActionDocs.mdx";

import { CheckIcon } from "@heroicons/vue/24/outline";

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Components/Table Action",
	component: PoTableAction,
	parameters: {
		docs: {
			page: PoTableActionDocs,
			description: {
				component: "PoTableAction",
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
	components: { PoTableAction },
	setup() {
		//👇 The args will now be passed down to the template
		return { args };
	},
	template: '<PoTableAction v-bind="args" />',
});

//👇 We create a “template” of how args map to rendering
const TemplateCustom = (args) => ({
	components: { PoTableAction },
	setup() {
		//👇 The args will now be passed down to the template
		return { args, CheckIcon };
	},
	template: `<PoTableAction
                    
                    btn-type="icon"
                    :btn-icon="CheckIcon"
                    label="Approve"
                    icon-color="po-stroke-sky-400"
                  />`,
});

export const Text = Template.bind({});
export const IconEdit = Template.bind({});
export const IconDelete = Template.bind({});
export const IconView = Template.bind({});
export const IconCustom = TemplateCustom.bind({});

Text.args = {
	/* 👇 The args you need here will depend on your component */
	label: "Edit",
	textColor: "po-text-sky-600",
};

IconEdit.args = {
	/* 👇 The args you need here will depend on your component */
	btnType: "edit",
};

IconDelete.args = {
	/* 👇 The args you need here will depend on your component */
	btnType: "delete",
};

IconView.args = {
	/* 👇 The args you need here will depend on your component */
	btnType: "view",
};

IconCustom.args = {
	/* 👇 The args you need here will depend on your component */
};
