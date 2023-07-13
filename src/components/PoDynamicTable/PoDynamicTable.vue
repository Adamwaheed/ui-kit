<template>
	<div>
		<div v-for="column in visibleColumns">
			<input
				type="checkbox"
				name="dynamic"
				v-model="column.hidden"
				:id="`hide-table-col-${column.label}`"
			/>
			<label :for="`hide-table-col-${column.label}`">{{ column.label }}</label>
		</div>
		<table class="table-responsive po-w-full">
			<thead>
				<tr>
					<th
						v-for="column in visibleColumns"
						:key="column.key"
						@click="sort(column)"
					>
						{{ column.label }} {{ column.sorted }} {{ column.sortDirection }}
						<span v-if="column.sortable">
							<ArrowsUpDownIcon class="po-w-4" v-if="!column.sorted" />
							<ArrowUpIcon
								class="po-w-4"
								v-if="column.sorted && column.sortDirection === 'asc'"
							/>
							<ArrowDownIcon
								class="po-w-4"
								v-if="column.sorted && column.sortDirection === 'desc'"
							/>
						</span>
						<button @click="toggleColumn(column)" v-if="column.hidable">
							{{ column.hidden ? "Show" : "Hide" }}
						</button>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in sortedData" :key="item.id">
					<td v-for="column in visibleColumns" :key="column.key">
						{{ item[column.key] }}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script lang="ts">
export default {
	name: "PoDynamicTable",
	components: { ArrowsUpDownIcon, ArrowUpIcon, ArrowDownIcon },
};
</script>
<script setup lang="ts">
import {
	ArrowDownIcon,
	ArrowsUpDownIcon,
	ArrowUpIcon,
} from "@heroicons/vue/20/solid";
import { ref, watchEffect } from "vue";

const props = defineProps({
	data: {
		type: Array,
		required: true,
	},
	columns: {
		type: Array,
		required: true,
	},
});

const visibleColumns = ref(props.columns);
const sortedColumn = ref(null);
const sortDirection = ref(null);

const toggleColumn = (column) => {
	column.hidden = !column.hidden;
	visibleColumns.value = props.columns.filter((column) => !column.hidden);
};

const sort = (column) => {
	if (!column.sortable) return;

	if (column.sorted && sortDirection.value === "asc") {
		sortDirection.value = "desc";
	} else {
		sortDirection.value = "asc";
	}

	// Set sorted property for all columns, clear for unsorted columns
	visibleColumns.value.forEach((col) => {
		if (col.key === column.key) {
			col.sorted = true;
			col.sortDirection = sortDirection.value;
		} else {
			col.sorted = false;
			col.sortDirection = null;
		}
	});

	sortedColumn.value = column;
};

const sortedData = ref([]);

watchEffect(() => {
	if (sortedColumn.value) {
		sortedData.value = [...props.data].sort((a, b) => {
			let aValue = a[sortedColumn.value.key];
			let bValue = b[sortedColumn.value.key];

			if (typeof aValue === "string" && typeof bValue === "string") {
				aValue = aValue.toLowerCase();
				bValue = bValue.toLowerCase();
			}

			if (aValue < bValue) {
				return sortDirection.value === "asc" ? -1 : 1;
			} else if (aValue > bValue) {
				return sortDirection.value === "asc" ? 1 : -1;
			} else {
				return 0;
			}
		});
	} else {
		sortedData.value = [...props.data];
	}
});
</script>
