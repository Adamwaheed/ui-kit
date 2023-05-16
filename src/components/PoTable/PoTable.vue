<template>
	<table class="table-responsive po-w-full" :class="[{ lg: breakAtLg }]">
		<thead>
			<tr>
				<th v-for="th in thead">
					<!-- 
                        @slot Table header items format
                     -->
					<slot name="th" v-bind="th"></slot>
				</th>
			</tr>
		</thead>
		<tbody>
			<tr
				v-if="
					(null !== tableBody && !loading) ||
					(null !== tableBody && 0 !== tableBody.length && !loading)
				"
				v-for="(td, index) in tableBody"
			>
				<!-- 
                    @slot Table body items format
                 -->
				<slot name="td" v-bind="{ ...td, index, item: td }"></slot>
			</tr>
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
				<td v-for="td in thead" class="po-pr-5 po-py-2">
					<div class="po-h-3 loading-placeholder po-rounded-full"></div>
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
};
</script>
<script setup>
import { ref, toRefs, watch, onMounted } from "vue";
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
});

const { isLoading, tbody } = toRefs(props);
const loading = ref(false);
const tableBody = ref([]);

watch(isLoading, () => {
	checkIfLoading();
});

onMounted(() => {
	checkIfLoading();
});

function checkIfLoading() {
	console.log("---", isLoading.value);
	loading.value = isLoading.value;
	tableBody.value = tbody.value;

	if (isLoading.value) {
		tableBody.value = [{}, {}, {}, {}, {}];
	}
	console.log("-tableBody--", tableBody.value);
}
</script>
