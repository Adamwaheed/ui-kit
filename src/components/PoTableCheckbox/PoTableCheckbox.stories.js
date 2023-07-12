// YourComponent.stories.js

import PoTableCheckbox from "./PoTableCheckbox.vue";
import PoTable from "../PoTable/PoTable.vue";
import PoCard from "../PoCard/PoCard.vue";
import PoTableAction from "../PoTableAction/PoTableAction.vue";

import PoTableCheckboxDocs from "./PoTableCheckboxDocs.mdx";

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Content/Table Checkbox",
	component: PoTableCheckbox,
	parameters: {
		docs: {
			page: PoTableCheckboxDocs,
			description: {
				component: "Table checkbox.",
			},
		},
		backgrounds: {
			default: "gray",
			values: [{ name: "gray", value: "#f8fafc" }],
		},
	},
};

import { ref } from "vue";
import { XMarkIcon, CheckIcon } from "@heroicons/vue/24/outline";
import formatMoney from "../../shared/helper/FormatMoney";
//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
	components: { PoTableCheckbox, PoTable, PoTableAction, PoCard },
	setup() {
		//👇 The args will now be passed down to the template
		let tableHead = [
			{ label: "Checkbox" },
			{ label: "Identifier" },
			{ label: "Name" },
			{ label: "Salary" },
			{ label: "Type" },
			{ label: "Description" },
			{ label: "Amount" },
			{ label: "Action" },
		];

		let tableBody = [
			{
				id: 1,
				identifier: "A090923",
				name: "Rusmus Rasheed",
				salary: "20,000",
				type: "Deduction",
				description: "Late fine",
				amount: "516",
				action: "/monthlychanges",
			},
			{
				id: 2,
				identifier: "B091223",
				name: "Samantha Lee",
				salary: "8,000",
				type: "Addition",
				description: "Employee Voluntary contribution",
				amount: "2000",
				action: "/monthlychanges",
			},
			{
				id: 3,
				identifier: "C092323",
				name: "David Patel",
				salary: "15,000",
				type: "Deduction",
				description: "Penalty",
				amount: "9000",
				action: "/monthlychanges",
			},
			{
				id: 4,
				identifier: "D093423",
				name: "John Smith",
				salary: "12,000",
				type: "Addition",
				description: "Bonus for working hard",
				amount: "1000",
				action: "/monthlychanges",
			},
			{
				id: 5,
				identifier: "E094523",
				name: "Emily Johnson",
				salary: "18,000",
				type: "Deduction",
				disabled: true,
				description: "Absent",
				amount: "1500",
				action: "/monthlychanges",
			},
			{
				id: 6,
				identifier: "F095623",
				name: "Michael Brown",
				salary: "25,000",
				type: "Deduction",
				description: "No pay leave",
				amount: "2000",
				action: "/monthlychanges",
			},
		];

		const selectedRowIds = ref([]);

		function handleCheckboxClick(id) {
			const index = selectedRowIds.value.indexOf(id);
			if (index === -1) {
				selectedRowIds.value.push(id);
			} else {
				selectedRowIds.value.splice(index, 1);
			}
		}

		function checkIfCheckBoxSelected(id) {
			return selectedRowIds.value.includes(id);
		}

		return {
			args,
			tableHead,
			tableBody,
			selectedRowIds,
			handleCheckboxClick,
			checkIfCheckBoxSelected,
			XMarkIcon,
			CheckIcon,
			formatMoney,
		};
	},
	template: `<PoCard class="po-p-5"><template v-slot:content><div class="-po-mx-5">
  <PoTable :thead="tableHead" :tbody="tableBody">
            <template #th="{ label }">
              <span v-if="'Action' !== label && 'Checkbox' !== label">{{
                label
              }}</span>
              <span
                v-if="('Action' == label) & ('Checkbox' !== label)"
                class="sr-only"
                >{{ label }}</span
              >
            </template>
            <template #td="{ item }">
              <td data-title="id">
                <PoTableCheckbox
                  :item-id="item.id"
                  :is-checked="checkIfCheckBoxSelected(item.id)"
									:disabled="item.disabled"
                  @checkbox-clicked="handleCheckboxClick"
                />
              </td>
              <td data-title="identifier">
                {{ item.identifier }}
              </td>
              <td data-title="name">
                {{ item.name }}
              </td>

              <td data-title="salary">{{ formatMoney(item.salary) }}</td>
              <td data-title="type">{{ item.type }}</td>
              <td data-title="description">
                {{ item.description }}
              </td>
              <td data-title="amount">{{ formatMoney(item.amount) }}</td>
              <td>
                <div v-if="!item.disabled" class="po-flex po-items-center po-space-x-3 po-justify-end">
                  <PoTableAction
                    
                    btn-type="icon"
                    :btn-icon="CheckIcon"
                    icon-color="po-stroke-sky-400"
										label="Approve"
                  />
                  <PoTableAction
                    btn-type="icon"
                    :btn-icon="XMarkIcon"
                    icon-color="po-stroke-red-400"
										label="Reject"
                  />
                </div>
              </td>
            </template>
          </PoTable><span class="po-block po-text-sm po-text-slate-500 po-mt-5 po-px-5">Selected row Ids: {{selectedRowIds}}</p></div></template></PoCard>`,
});

export const TableCheckbox = Template.bind({});

TableCheckbox.args = {
	/* 👇 The args you need here will depend on your component */
};
