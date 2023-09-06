<template>
	<table class="table-responsive po-w-full" :class="[{ lg: breakAtLg }]">
		<thead>
			<tr>
				<th v-if="hasDetailsRow" class="po-w-12"></th>
				<th v-for="(th, index) in tableHead" @click="sort(th, index)">
					<span class="po-flex po-space-x-1 po-pr-2 po-items-center">
						<!-- 
							@slot Table header items format
						-->
						<span class="po-grow">
							<slot name="th" v-bind="th">
								<span v-if="'Action' !== th.label">{{ th.label }}</span>
								<span v-if="'Action' == th.label" class="sr-only">{{
									th.label
								}}</span>
							</slot>
						</span>
						<span
							class="po-shrink-0 po-select-none po-bg-slate-100 po-rounded-md po-w-4 po-h-4 po-flex po-items-center po-justify-center po-cursor-pointer"
							role="button"
							v-if="th.sortable"
						>
							<ArrowsUpDownIcon class="po-w-3 po-h-3" v-if="!th.sorted" />
							<ArrowUpIcon
								class="po-w-3 po-h-3"
								v-if="th.sorted && th.sortDirection === 'asc'"
							/>
							<ArrowDownIcon
								class="po-w-3 po-h-3"
								v-if="th.sorted && th.sortDirection === 'desc'"
							/>
						</span>
					</span>
				</th>
			</tr>
		</thead>
		<tbody>
			<template
				v-if="
					(null !== tableBody && !loading) ||
					(null !== tableBody && 0 !== tableBody.length && !loading)
				"
				v-for="(td, index) in tableBody"
			>
				<tr>
					<td v-if="hasDetailsRow" class="po-w-12">
						<span @click="td.showDetails = !td.showDetails">
							<ArrowRightCircleIcon
								class="po-w-5 po-fill-mpao-lightblue po-origin-center po-transition-transform po-duration-100 po-ease-out po-cursor-pointer"
								:class="[{ 'po-rotate-90': td.showDetails }]"
							/>
						</span>
					</td>
					<!-- 
						@slot Table body items format
					-->
					<slot name="td" v-bind="{ ...td, index, item: td }">
						<template v-for="(value, key) in td">
							<td v-if="isString(key) && key !== 'action'" :data-title="key">
								{{ formatValueIfNeeded(value) }}
							</td>
							<td v-else>
								<div class="flex items-center space-x-3 justify-end">
									action
								</div>
							</td>
						</template>
					</slot>
				</tr>
				<tr
					v-if="hasDetailsRow"
					class="po-table-details-row"
					:class="[{ 'po-hidden': !td.showDetails }]"
				>
					<!-- 
						@slot Table body details row
					-->
					<template v-if="thead">
						<td :colspan="thead.length + 1">
							<slot name="details" v-bind="{ item: td }"></slot>
						</td>
					</template>
				</tr>
			</template>
			<tr
				v-if="
					(null == tableBody && !loading) ||
					(null !== tableBody && 0 == tableBody.length && !loading)
				"
			>
				<template v-if="thead">
					<td :colspan="thead.length + 1" class="po-text-center">
						<span class="po-py-10 po-block po-normal-case">{{
							emptyMessage
						}}</span>
					</td>
				</template>
			</tr>
			<tr v-if="loading" v-for="td in tableBody">
				<td v-for="td in thead" class="po-pr-5">
					<div class="po-py-1">
						<div
							class="po-h-2 loading-placeholder po-rounded-full"
							:style="{ width: randomWidth() + '%' }"
						></div>
					</div>
				</td>
			</tr>
		</tbody>
		<tfoot v-if="$slots.tfoot">
			<tr>
				<slot name="tfoot"></slot>
			</tr>
		</tfoot>
	</table>
</template>

<script lang="ts">
export default {
	name: "PoTable",
};
</script>
<script setup lang="ts">
import {
	ArrowRightCircleIcon,
	ArrowDownIcon,
	ArrowsUpDownIcon,
	ArrowUpIcon,
} from "@heroicons/vue/20/solid";
import formatDate from "../../shared/helper/FormatDate";
import formatMoney from "../../shared/helper/FormatMoney";
import { ref, toRefs, watch, onMounted } from "vue";

interface THead {
	label: string;
	sortable?: boolean;
	sorted?: boolean;
	sortDirection?: string | null;
	index?: number;
}

interface Props {
	thead: THead[] | null;
	tbody: Array<any> | null;
	emptyMessage?: string;
	breakAtLg?: boolean;
	isLoading?: boolean;
	hasDetailsRow?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	/**
	 * Table head items array
	 */
	thead: null,
	/**
	 * Table body items array
	 */
	tbody: null,
	/**
	 * Message to display when the table is empty
	 */
	emptyMessage: "We couldn't find any content to display.",
	/**
	 * Adds breakpoint at lg to switch to mobile styles
	 */
	breakAtLg: false,
	/**
	 * If set true, displays placeholder loading animation
	 */
	isLoading: false,
	/**
	 * If set true, displays placeholder loading animation
	 */
	hasDetailsRow: false,
});

const { isLoading, tbody, thead } = toRefs(props);
const loading = ref(false);
const tableHead = ref<THead[] | null>(null);
const tableBody = ref<Array<any> | null>(null);
const sortDirection = ref<string | null>(null);

watch(isLoading, () => {
	checkIfLoading();
});
watch(tbody, () => {
	checkIfLoading();
	addShowDetailsToTbody();
});

onMounted(() => {
	checkIfLoading();
	addShowDetailsToTbody();
	tableHead.value = thead.value;
});

function checkIfLoading() {
	loading.value = isLoading.value;
	tableBody.value = tbody.value;

	if (isLoading.value) {
		tableBody.value = [{}, {}, {}, {}, {}];
	}
}

function addShowDetailsToTbody() {
	if (props.hasDetailsRow && props.tbody) {
		for (let i = 0; i < props.tbody.length; i++) {
			props.tbody[i].showDetails = false;
		}
	}
}

function randomWidth() {
	return Math.floor(Math.random() * 41) + 40; // Generates a random number between 60 and 100
}

const emit = defineEmits(["column-click"]);

const sort = (column: THead, index: number) => {
	if (!column.sortable) return;

	if (column.sorted && sortDirection.value === "asc") {
		sortDirection.value = "desc";
	} else {
		sortDirection.value = "asc";
	}

	// Set sorted property for all columns, clear for unsorted columns
	tableHead.value?.forEach((col) => {
		if (col.label === column.label) {
			col.sorted = true;
			col.sortDirection = sortDirection.value;
			col.index = index;
		} else {
			col.sorted = false;
			col.sortDirection = null;
		}
	});

	emit("column-click", column);
};

function formatValueIfNeeded(value: string) {
	if (isValidMoneyValue(value)) {
		return value;
		// removed this cos it wrongly formats other things.
		// need a better way if using this.
		// return formatMoney(value);
	} else if (isDate(value)) {
		return formatDate(value);
	} else {
		return value;
	}
}

const isString = (key: unknown): key is string => {
	return typeof key === "string";
};

const isDate = (value: string) => {
	const date = new Date(value);
	return !isNaN(date.getTime());
};

const isValidMoneyValue = (value: string) => {
	// Define a regular expression pattern for valid money values
	const moneyPattern = /^(\d{1,3}(,\d{3})*(\.\d{2})?|\d+(\.\d{2})?)$/;
	return moneyPattern.test(value);
};
</script>
