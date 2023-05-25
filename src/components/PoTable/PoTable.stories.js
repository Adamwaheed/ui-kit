// YourComponent.stories.js

import PoTable from "./PoTable.vue";
import PoCard from "../PoCard/PoCard.vue";

import PoTableDocs from "./PoTableDocs.mdx";

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Content/Table",
	component: PoTable,
	parameters: {
		docs: {
			page: PoTableDocs,
			description: {
				component: "Resposive table component.",
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
	components: { PoTable, PoCard },
	setup() {
		//👇 The args will now be passed down to the template
		return { args };
	},
	template:
		'<PoTable v-bind="args"> <template #th="{ label }"> {{ label }} </template> <template #td="{ name, nid, source, dod }"> <td data-title="name">{{ name }}</td> <td data-title="NID">{{ nid }}</td> <td data-title="source">{{ source }}</td> <td data-title="dod">{{ dod }}</td> </template> </PoTable>',
});

const TemplateDetails = (args) => ({
	components: { PoTable, PoCard },
	setup() {
		//👇 The args will now be passed down to the template
		return { args };
	},
	template: `
		<PoTable v-bind="args">
			<template #th="{ label }"> {{ label }} </template>
			<template #td="{ item }">
				<td data-title="name">{{ item.name }}</td>
				<td data-title="NID">{{ item.nid }}</td>
				<td data-title="source">{{ item.source }}</td>
				<td data-title="dod">{{ item.dod }}</td>
			</template>
			<template #details="{ item }">
				<div class="po-p-5">
					<span class="po-block po-text-sm po-text-semibold po-text-slate-700">Name</span>
					<span class="po-block po-text-xs po-text-slate-6">{{ item.name }}</span>
					<span class="po-mt-2 po-block po-text-sm po-text-semibold po-text-slate-700">Note</span>
					<span class="po-block po-text-xs po-text-slate-6">{{ item.note }}</span>
				</div>
			</template>
		</PoTable>
		`,
});

export const WithContent = Template.bind();
export const Empty = Template.bind();
export const Loading = Template.bind();
export const WithDetails = TemplateDetails.bind();

WithContent.args = {
	/* 👇 The args you need here will depend on your component */
	thead: [
		{ label: "Name" },
		{ label: "NID" },
		{ label: "Source" },
		{ label: "DOD" },
	],

	tbody: [
		{
			name: "Jane Gasim",
			nid: "A00000",
			source: "YY Clinic",
			dod: "2022-11-12",
		},
		{
			name: "Mariyam Doe",
			nid: "A00000",
			source: "Rashu Council",
			dod: "2022-11-02",
		},
	],
};

Empty.args = {
	/* 👇 The args you need here will depend on your component */
	thead: [
		{ label: "Name" },
		{ label: "NID" },
		{ label: "Source" },
		{ label: "DOD" },
	],

	tbody: [],
};
Loading.args = {
	/* 👇 The args you need here will depend on your component */
	thead: [
		{ label: "Name" },
		{ label: "NID" },
		{ label: "Source" },
		{ label: "DOD" },
	],

	tbody: [],
	isLoading: true,
};

WithDetails.args = {
	/* 👇 The args you need here will depend on your component */
	thead: [
		{ label: "Name" },
		{ label: "NID" },
		{ label: "Source" },
		{ label: "DOD" },
	],

	tbody: [
		{
			name: "Jane Gasim",
			nid: "A00000",
			source: "YY Clinic",
			dod: "2022-11-12",
			note: "This note seem to be shorter than the other one",
		},
		{
			name: "Mariyam Doe",
			nid: "A00000",
			source: "Rashu Council",
			dod: "2022-11-02",
			note: "This is a note left by the person who added the record for some reason or other.",
		},
		{
			name: "Zac Kari",
			nid: "A00000",
			source: "Rashu Council",
			dod: "2022-11-02",
			note: "Bleh blu.",
		},
	],
	hasDetailsRow: true,
};
