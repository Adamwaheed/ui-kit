<template>
	<div
		ref="containerRef"
		class="po-relative"
		:class="[{ 'lg:po-grid lg:po-grid-cols-2': 'horizontal' === display }]"
	>
		<label
			:for="uniqueID"
			class="po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700"
		>
			<span>{{ label }}</span>
			<span
				v-if="required"
				class="po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
				>&#42;</span
			>
			<FormInfo :info="info" />
		</label>
		<div class="po-relative po-mt-1">
			<div>
				<LoadingDots
					v-if="loading"
					class="po-right-0 po-top-4"
					:absolute="true"
				/>

				<div
					v-if="selectedOption !== null && showSelected"
					class="po-absolute po-top-0 po-left-0 po-right-0 po-bottom-0 po-overflow-hidden po-bg-white po-rounded-md po-border po-border-slate-300 po-flex po-items-center"
				>
					<div class="po-grow">
						<slot name="selectedOption" v-bind="selectedOption">{{
							selectedOption
						}}</slot>
					</div>
					<span
						class="po-shrink-0 po-p-1 po-cursor-pointer"
						@mousedown.stop="
							selectedOption = null;
							searchQuery = '';
						"
						><XMarkIcon class="po-w-4 po-stroke-2 po-stroke-slate-400"
					/></span>
				</div>
				<input
					type="text"
					name=""
					:id="uniqueID"
					ref="selectBox"
					v-model="searchQuery"
					@input="handleInput"
					@focus="
						inputFocused = true;
						showDropdown = true;
					"
					@blur="handleBlur"
					class="po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm"
				/>
			</div>
			<div
				v-show="
					(showDropdown && loadedOptions.length > 0) ||
					(showDropdown && emptyMessage)
				"
				ref="popper"
				class="po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
			>
				<template v-if="loadedOptions && loadedOptions.length > 0">
					<template v-for="option in loadedOptions">
						<div @mousedown.stop="handleOptionClick(option)">
							<slot name="option" v-bind="option">{{ option }}</slot>
						</div>
					</template>
					<span
						v-if="showMoreBtn"
						role="button"
						@mousedown.stop="handleMoreClick"
						class="po-text-sm po-text-semibold po-text-mpao-lightblue po-block po-text-center po-py-2 hover:po-bg-slate-50 po-transition-colors po-duration-150 po-ease-out"
						>More</span
					>
				</template>
				<template v-else>
					<span
						class="po-text-sm po-text-slate-600 po-p-4 po-block"
						v-if="emptyMessage"
						>{{ emptyMessage }}</span
					>
				</template>
			</div>
			<FormMessage :message="message" />
			<FormErrorMessage :error-message="errorMessage" />
			<!-- :style="{
			top: getSelectBoxPosition?.relativeTop + 'px',
			left: getSelectBoxPosition?.left + 'px',
			width: getSelectBoxPosition?.width + 'px',
		}" -->
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: "PoSelectApi",
};
</script>

<script setup lang="ts">
import { onMounted, ref, watch, onUnmounted } from "vue";
import LoadingDots from "../PoLoading/LoadingDots.vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { InformationCircleIcon } from "@heroicons/vue/20/solid";
import { createPopper } from "@popperjs/core";
import useDetectOutsideClick from "../../composables/useDetectOutsideClick";
import { useUniqueId } from "../../composables/useUniqueId";

import FormErrorMessage from "../PoInputField/FormErrorMessage.vue";
import FormMessage from "../PoInputField/FormMessage.vue";
import FormInfo from "../PoInputField/FormInfo.vue";

interface Props {
	options: Array<any>;
	id?: string;
	loading?: boolean;
	showMoreBtn?: boolean;
	label?: string;
	info?: string | undefined;
	display?: "vertical" | "horizontal";
	required?: boolean;
	errorMessage?: string | null;
	message?: string | null;
	disabled?: boolean;
	emptyMessage?: string | null;
	showSelected?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	/**
	 * Options list
	 */
	options: () => [],
	/**
	 * Input id text
	 */
	id: "",
	/**
	 * Show loading true/false default false
	 */
	loading: false,
	/**
	 * Show show/hide more button
	 */
	showMoreBtn: false,
	/**
	 * Label text
	 */
	label: "",
	/**
	 * A tool tip, helper information
	 */
	info: "",
	/**
	 * Input display vertifal (default) or horizontal
	 */
	display: "vertical",
	/**
	 * True or false if required
	 */
	required: false,
	/**
	 * Error message
	 */
	errorMessage: null,
	/**
	 * Tip, description, information for the input
	 */
	message: null,
	/**
	 * True or false if disabled
	 */
	disabled: false,
	/**
	 * Shown when user clicks on the input.
	 */
	emptyMessage: null,
	/**
	 * By default, selected option is shown, incase you don't want this behavior, you can set this prop to false.
	 */
	showSelected: true,
});

const selectBox = ref();
const showDropdown = ref(false);
const inputFocused = ref(false);
const loadedOptions = ref<any[]>([]);

watch(props, (newVal, oldVal) => {
	loadedOptions.value = props.options;
});

// Function to get the position of the element
// const getSelectBoxPosition = computed(() => {
// 	if (selectBox.value) {
// 		const container = document.querySelector(".shell-content--area");
// 		const { top: containerTop } = container?.getBoundingClientRect();
// 		const scrollTop = container?.scrollTop;

// 		const { top, left, width } = selectBox.value.getBoundingClientRect();
// 		const relativeTop = top - containerTop + scrollTop;
// 		return { relativeTop, left, width };
// 	}
// });

const containerRef = ref(null);

useDetectOutsideClick(containerRef, () => {
	showDropdown.value = inputFocused.value ? true : false;
});

function handleBlur() {
	inputFocused.value = false;

	setTimeout(() => {
		showDropdown.value = false;
	}, 100);
}

const { uniqueId, generateUniqueId } = useUniqueId();
const uniqueID = ref<string>(props.id);
onMounted(() => {
	// console.log(
	// 	`TadaElement position - top: ${getSelectBoxPosition.value.top}px, left: ${getSelectBoxPosition.value.left}px`
	// );

	// if there is no id set, create a unique random id
	if ("" === props.id) {
		generateUniqueId();
		uniqueID.value = uniqueId.value;
	}

	// setTimeout(() => {
	// 	if (document.activeElement === selectBox.value) {
	// 		showDropdown.value = true;
	// 	} else {
	// 		showDropdown.value = false;
	// 	}
	// }, 100);
});

const searchQuery = ref();

const emit = defineEmits(["search", "selected", "loadmore"]);

function handleInput() {
	emit("search", searchQuery.value);
}

const selectedOption = ref(null);

function handleOptionClick(option: any) {
	selectedOption.value = option;
	emit("selected", option);

	showDropdown.value = inputFocused.value ? true : false;
}

function handleMoreClick() {
	emit("loadmore", true);
}

const popper = ref();
let instance: any;

onMounted(() => {
	instance = createPopper(selectBox.value, popper.value, {
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
});

onUnmounted(() => {
	if (instance) {
		instance.destroy();
	}
});
</script>
