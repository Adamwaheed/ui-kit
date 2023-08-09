<template>
	<div
		class="po-flex-grow po-hidden po-relative md:po-block"
		ref="containerRef"
	>
		<span
			class="po-absolute po-top-[5px] po-right-[5px] po-text-xs po-rounded-lg po-px-4 po-py-2 po-cursor-pointer po-transition-colors po-duration-150 po-ease-out"
			:class="[
				{
					'po-text-slate-200 po-bg-slate-500/60 hover:po-bg-slate-500':
						!showTray || !showDropdown,
				},
				{
					'po-text-slate-400 po-bg-slate-200/60 hover:po-bg-slate-200':
						showTray && showDropdown,
				},
				{ 'po-hidden': query === '' },
			]"
			@click="handleClickSearchButton"
			>Search</span
		>
		<input
			v-model="query"
			type="text"
			ref="mainSearchBox"
			id="main-search"
			:placeholder="placeholder"
			@keyup.enter="searchOnEnter"
			@focus="showDropdown = true"
			autocomplete="off"
			class="peer/search po-border-transparent po-text-sm po-ring-0 po-outline-none focus:po-outline-none focus:po-ring-0 po-transition-colors po-ease-linear po-duration-100 po-block po-w-full po-pl-10 po-p-2.5 po-appearance-none hover:po-border-white/40"
			:class="[
				{
					'po-rounded-md po-border focus:po-border-slate-400 po-bg-transparent po-text-slate-100 po-placeholder-white/60':
						!showTray || !showDropdown,
				},
				{
					'po-rounded-t-md po-border-2 focus:po-border-white po-bg-white po-text-slate-600':
						showTray && showDropdown,
				},
			]"
		/>
		<div
			class="po-absolute po-inset-y-0 po-left-0 po-flex po-items-center po-pl-3 po-pointer-events-none po-transition-all po-ease-linear po-duration-100 po-origin-center peer-hover/search:po-scale-105"
			:class="[
				{
					'po-text-white/50 peer-focus/search:po-text-white/50':
						!showTray || !showDropdown,
				},
				{
					'po-text-black/30 peer-focus/search:po-text-black/30':
						showTray && showDropdown,
				},
			]"
		>
			<MagnifyingGlassIcon class="po-w-5 po-h-5 po-stroke-current" />
		</div>
		<div
			v-show="showDropdown && showTray"
			ref="popper"
			class="po-absolute po-z-[51] po-mt-1 po-w-full po-rounded-b-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
			@resize="onResize"
			@update="onUpdate"
		>
			<slot></slot>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: "PoSearchBar",
};
</script>
<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from "vue";
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";
import { createPopper } from "@popperjs/core";
import useDetectOutsideClick from "../../composables/useDetectOutsideClick";
import useEventBus from "../../composables/useEventBus";

interface Props {
	placeholder?: string;
	currentQuery?: string;
	showTray?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
	/**
	 * Placeholder text
	 */
	placeholder: "Search",
	/**
	 * Search Query
	 */
	currentQuery: "",
	/**
	 * Show search tray. default is false
	 */
	showTray: false,
});

const showDropdown = ref(false);
const containerRef = ref(null);
const mainSearchBox = ref();
const popper = ref();
const updateParts = ref({
	viewStartIdx: 0,
	viewEndIdx: 0,
	visibleStartIdx: 0,
	visibleEndIdx: 0,
});

let query = ref("");
let popperInstance: any;

const emit = defineEmits(["query", "onClear"]);

const searchOnEnter = (e: KeyboardEvent) => {
	// if (e.key === "Enter"  && 0 < query.value.length) {
	emit("query", query.value);
	// }
};

function handleClickSearchButton() {
	emit("query", query.value);
}

onMounted(() => {
	//   document.addEventListener("keydown", searchOnEnter);
	//   query.value = props.currentQuery;

	// cos of popper renderring in a different position
	// we add a delay
	if (props.showTray) {
		setTimeout(() => {
			popperInstance = createPopper(mainSearchBox.value, popper.value, {
				placement: "bottom-end",
				strategy: "fixed",
				modifiers: [
					{
						name: "sameWidth",
						enabled: true,
						fn: ({ state }) => {
							state.styles.popper.width = `${state.rects.reference.width}px`;
						},
						phase: "beforeWrite",
						requires: ["computeStyles"],
					},
				],
			});
		}, 320);
	}
});

watch(query, async (newQuestion, oldQuestion) => {
	if ("" === newQuestion) {
		emit("onClear", true);
	}
});

// outsideclick detection
useDetectOutsideClick(containerRef, () => {
	if (props.showTray) {
		showDropdown.value = false;
	}
});

// Listen to sidebar toggle event
useEventBus.on("sidebarOpen", (val) => {
	setTimeout(() => {
		if (popperInstance && props.showTray) {
			popperInstance.update();
		}
	}, 320);
});

onUnmounted(() => {
	//   document.removeEventListener("keydown", searchOnEnter);

	if (popperInstance && props.showTray) {
		popperInstance.destroy();
	}
});

/*** PopperJs related */
function onUpdate(
	viewStartIndex: number,
	viewEndIndex: number,
	visibleStartIndex: number,
	visibleEndIndex: number
) {
	updateParts.value.viewStartIdx = viewStartIndex;
	updateParts.value.viewEndIdx = viewEndIndex;
	updateParts.value.visibleStartIdx = visibleStartIndex;
	updateParts.value.visibleEndIdx = visibleEndIndex;
}

function onResize() {
	if (popperInstance) {
		popperInstance.update();
	}
}
/*** PopperJs related */
</script>
