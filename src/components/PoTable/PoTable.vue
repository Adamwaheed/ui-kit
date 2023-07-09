<template>
	<table class="table-responsive po-w-full" :class="[{ lg: breakAtLg }]">
		<thead>
			<tr>
				<th v-if="hasDetailsRow" class="po-w-12"></th>
				<th v-for="th in tableHead" @click="sort(th)">
					<span class="po-flex po-space-x-1 po-pr-2 po-items-center">
						<!-- 
							@slot Table header items format
						-->
						<span class="po-grow">
							<slot name="th" v-bind="th"></slot>
						</span>
						<span
							class="po-shrink-0 po-bg-slate-100 po-rounded-md po-w-4 po-h-4 po-flex po-items-center po-justify-center po-cursor-pointer"
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
					<slot name="td" v-bind="{ ...td, index, item: td }"></slot>
				</tr>
				<tr
					v-if="hasDetailsRow"
					class="po-table-details-row"
					:class="[{ 'po-hidden': !td.showDetails }]"
				>
					<!-- 
						@slot Table body details row
					-->
					<td :colspan="thead.length + 1">
						<slot name="details" v-bind="{ item: td }"></slot>
					</td>
				</tr>
			</template>
			<tr
				v-if="
					(null == tableBody && !loading) ||
					(null !== tableBody && 0 == tableBody.length && !loading)
				"
			>
				<td :colspan="thead.length + 1" class="po-text-center">
					<span class="po-py-10 po-block po-normal-case">{{
						emptyMessage
					}}</span>
				</td>
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

<script>
export default {
	name: "PoTable",
	components: { ArrowRightCircleIcon },
};
</script>
<script setup>
import {
	ArrowRightCircleIcon,
	ArrowDownIcon,
	ArrowsUpDownIcon,
	ArrowUpIcon,
} from "@heroicons/vue/20/solid";
import { ref, toRefs, watch, onMounted, computed } from "vue";
const props = defineProps({
	/**
	 * Table head items array
	 */
	thead: {
		type: Array,
		default: null,
	},
	/**
	 * Table body items array
	 */
	tbody: {
		type: Array,
		default: null,
	},
	/**
	 * Message to display when the table is empty
	 */
	emptyMessage: {
		type: String,
		default: "We couldn't find any content to display.",
	},
	/**
	 * Adds breakpoint at lg to switch to mobile styles
	 */
	breakAtLg: {
		type: Boolean,
		default: false,
	},
	/**
	 * If set true, displays placeholder loading animation
	 */
	isLoading: {
		type: Boolean,
		default: false,
	},
	/**
	 * If set true, displays placeholder loading animation
	 */
	hasDetailsRow: {
		type: Boolean,
		default: false,
	},
});

const { isLoading, tbody, thead } = toRefs(props);
const loading = ref(false);
const tableHead = ref(null);
const tableBody = ref(null);
const sortDirection = ref(null);

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
	if (props.hasDetailsRow) {
		for (let i = 0; i < props.tbody.length; i++) {
			props.tbody[i].showDetails = false;
		}
	}
}

function randomWidth() {
	return Math.floor(Math.random() * 41) + 40; // Generates a random number between 60 and 100
}

const emit = defineEmits(["column-click"]);

const sort = (column) => {
	if (!column.sortable) return;

	if (column.sorted && sortDirection.value === "asc") {
		sortDirection.value = "desc";
	} else {
		sortDirection.value = "asc";
	}

	// Set sorted property for all columns, clear for unsorted columns
	tableHead.value.forEach((col) => {
		if (col.label === column.label) {
			col.sorted = true;
			col.sortDirection = sortDirection.value;
		} else {
			col.sorted = false;
			col.sortDirection = null;
		}
	});

	emit("column-click", column);
};
</script>
