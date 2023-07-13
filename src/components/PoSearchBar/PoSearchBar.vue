<template>
	<div class="po-flex-grow po-hidden po-relative md:po-block">
		<input
			v-model="query"
			type="text"
			id="main-search"
			:placeholder="placeholder"
			@keyup.enter="searchOnEnter"
			class="peer/search po-bg-transparent po-border po-border-transparent po-text-slate-100 po-text-sm po-rounded-md po-ring-0 po-outline-none focus:po-outline-none focus:po-ring-0 po-transition-colors po-ease-linear po-duration-100 po-block po-w-full po-pl-10 po-p-2.5 po-appearance-none focus:po-border-slate-400 hover:po-border-slate-600"
		/>
		<div
			class="po-absolute po-inset-y-0 po-left-0 po-flex po-items-center po-pl-3 po-pointer-events-none po-transition-all po-ease-linear po-duration-100 po-text-slate-400 po-origin-center peer-hover/search:po-scale-105 peer-focus/search:po-text-slate-100"
		>
			<MagnifyingGlassIcon class="po-w-5 po-h-5 po-stroke-current" />
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: "PoSearchBar",
};
</script>
<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
	/**
	 * Placeholder text
	 */
	placeholder: {
		type: String,
		default: "Search",
	},
	/**
	 * Search Query
	 */
	currentQuery: {
		type: String,
		default: "",
	},
});

const emit = defineEmits(["query", "onClear"]);
let query = ref("");

const searchOnEnter = (e) => {
	// if (e.key === "Enter"  && 0 < query.value.length) {
	emit("query", query.value);
	// }
};

// onMounted(() => {
//   document.addEventListener("keydown", searchOnEnter);
//   query.value = props.currentQuery;
// });

// onUnmounted(() => {
//   document.removeEventListener("keydown", searchOnEnter);
// });

watch(query, async (newQuestion, oldQuestion) => {
	if ("" === newQuestion) {
		emit("onClear", true);
	}
});
</script>
