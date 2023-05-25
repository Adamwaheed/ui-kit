// YourComponent.stories.js

import PoDRStatus from "./PoDRStatus.vue";

import PoDRStatusDocs from "./PoDRStatusDocs.mdx";

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "DRS/DRStatus",
	component: PoDRStatus,
	parameters: {
		docs: {
			page: PoDRStatusDocs,
			description: {
				component: "DRS Status component, to display death record status",
			},
		},
		backgrounds: {
			default: "gray",
			values: [{ name: "gray", value: "#ccc" }],
		},
	},
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
	components: { PoDRStatus },
	setup() {
		//👇 The args will now be passed down to the template
		return { args };
	},
	template: '<PoDRStatus v-bind="args"/>',
});

export const NotDead = Template.bind();
export const WrongDeath = Template.bind();
export const Record = Template.bind();
export const Request = Template.bind();

NotDead.args = {
	/* 👇 The args you need here will depend on your component */
	member: {
		name: "Mohamed Ashraf Majdhee",
		identifier: "A166597",
		dob: "1989-09-07T00:00:00.000Z",
	},
	record: {
		id: 7,
		institution: "Maldives Pension Administration Office",
		date_of_death: "2023-02-16T00:00:00.000Z",
	},
	request: {
		id: 16,
		type: "Dispute",
		type_id: 2,
		state: "Pending",
		state_id: 1,
		dispute_type: "Not Dead",
		dispute_type_id: 1,
		institution: "Maldives Pension Administration Office",
	},
};
WrongDeath.args = {
	/* 👇 The args you need here will depend on your component */
	member: {
		name: "Mohamed Ashraf Majdhee",
		identifier: "A166597",
		dob: "1989-09-07T00:00:00.000Z",
	},
	record: {
		id: 7,
		institution: "Maldives Pension Administration Office",
		date_of_death: "2023-02-16T00:00:00.000Z",
	},
	request: {
		id: 17,
		type: "Dispute",
		type_id: 2,
		state: "Pending",
		state_id: 1,
		dispute_type: "Wrong Date",
		dispute_type_id: 1,
		institution: "Maldives Pension Administration Office",
		date_of_death: "2023-02-16T00:00:00.000Z",
	},
};
Record.args = {
	/* 👇 The args you need here will depend on your component */
	member: {
		name: "Mohamed Ashraf Majdhee",
		identifier: "A166597",
		dob: "1989-09-07T00:00:00.000Z",
	},
	record: {
		id: 7,
		institution: "Maldives Pension Administration Office",
		date_of_death: "2023-02-16T00:00:00.000Z",
	},
};
Request.args = {
	/* 👇 The args you need here will depend on your component */
	member: {
		name: "Mohamed Ashraf Majdhee",
		identifier: "A166597",
		dob: "1989-09-07T00:00:00.000Z",
	},
	request: {
		id: 17,
		type: "New",
		type_id: 1,
		state: "Pending",
		state_id: 1,
		institution: "Maldives Pension Administration Office",
	},
};
