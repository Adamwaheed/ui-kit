<template>
	<div
		class="po-max-w-sm po-relative"
		:class="[{ 'lg:po-grid lg:po-grid-cols-2': 'horizontal' === display }]"
	>
		<label
			for=""
			class="po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700"
		>
			<span>{{ label }}</span>
			<span
				v-if="required"
				class="po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
				>&#42;</span
			>
			<abbr v-if="null !== info" :title="info" class="po-w-4 po-text-slate-500">
				<InformationCircleIcon class="po-fill-current" />
			</abbr>
		</label>
		<div class="po-relative po-mt-1">
			<div>
				<LoadingDots
					v-if="loading"
					class="po-right-0 po-top-4"
					:absolute="true"
				/>

				<div
					v-if="selectedOption !== null"
					class="po-absolute po-top-0 po-left-0 po-right-0 po-bottom-0 po-overflow-hidden po-bg-white po-rounded-md po-border po-border-slate-300 po-flex po-items-center"
				>
					<div class="po-grow">
						<slot name="selectedOption" v-bind="selectedOption">{{
							selectedOption
						}}</slot>
					</div>
					<span
						class="po-shrink-0 po-p-1 po-cursor-pointer"
						@click="
							selectedOption = null;
							searchQuery = '';
						"
						><XMarkIcon class="po-w-4 po-stroke-2 po-stroke-slate-400"
					/></span>
				</div>
				<input
					type="text"
					name=""
					id=""
					ref="selectBox"
					v-model="searchQuery"
					@input="handleInput"
					@focus="showDropdown = true"
					class="po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm"
				/>
			</div>
			<div
				v-if="showDropdown"
				class="po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
			>
				<template v-if="options && options.length > 0">
					<template v-for="option in options">
						<div @click="handleOptionClick(option)">
							<slot name="option" v-bind="option">{{ option }}</slot>
						</div>
					</template>
					<span
						v-if="showMoreBtn"
						role="button"
						@click="handleMoreClick"
						class="po-text-sm po-text-semibold po-text-mpao-lightblue po-block po-text-center po-py-2 hover:po-bg-slate-50 po-transition-colors po-duration-150 po-ease-out"
						>More</span
					>
				</template>
				<template v-else>
					<span class="po-text-sm po-text-slate-600 po-p-4 po-block"
						>Please enter a search query</span
					>
				</template>
			</div>
			<p
				class="po-mt-2 po-text-sm po-text-slate-500"
				:id="`-description`"
				v-if="null !== message"
			>
				{{ message }}
			</p>
			<p
				class="po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1"
				:id="`-error`"
				v-if="null !== errorMessage"
			>
				<span>{{ errorMessage }}</span>
			</p>
			<!-- :style="{
			top: getSelectBoxPosition?.relativeTop + 'px',
			left: getSelectBoxPosition?.left + 'px',
			width: getSelectBoxPosition?.width + 'px',
		}" -->
		</div>
	</div>
</template>

<script>
export default {
	name: "PoSelectApi",
	components: { XMarkIcon },
};
</script>

<script setup>
import { computed, onMounted, ref } from "vue";
import LoadingDots from "../PoLoading/LoadingDots.vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { InformationCircleIcon } from "@heroicons/vue/20/solid";

const props = defineProps({
	/**
	 * Options list
	 */
	options: {
		type: Array,
		default: null,
	},
	/**
	 * Show loading true/false default false
	 */
	loading: {
		type: Boolean,
		default: false,
	},
	/**
	 * Show show/hide more button
	 */
	showMoreBtn: {
		type: Boolean,
		default: false,
	},
	/**
	 * Label text
	 */
	label: {
		type: String,
		default: "",
	},
	/**
	 * A tool tip, helper information
	 */
	info: {
		type: String,
		default: null,
	},
	/**
	 * Input display vertifal (default) or horizontal
	 */
	display: {
		type: String,
		default: "vertical",
	},
	/**
	 * True or false if required
	 */
	required: {
		type: Boolean,
		default: false,
	},
	/**
	 * Error message
	 */
	errorMessage: {
		type: String,
		default: null,
	},
	/**
	 * Tip, description, information for the input
	 */
	message: {
		type: String,
		default: null,
	},
	/**
	 * True or false if disabled
	 */
	disabled: {
		type: Boolean,
		default: false,
	},
});

const selectBox = ref(null);
const showDropdown = ref(false);

// Function to get the position of the element
const getSelectBoxPosition = computed(() => {
	if (selectBox.value) {
		const container = document.querySelector(".shell-content--area");
		const { top: containerTop } = container.getBoundingClientRect();
		const scrollTop = container.scrollTop;

		const { top, left, width } = selectBox.value.getBoundingClientRect();
		const relativeTop = top - containerTop + scrollTop;
		return { relativeTop, left, width };
	}
});

onMounted(() => {
	// console.log(
	// 	`TadaElement position - top: ${getSelectBoxPosition.value.top}px, left: ${getSelectBoxPosition.value.left}px`
	// );
});

const searchQuery = ref();

const emit = defineEmits(["search", "selected", "loadmore"]);

function handleInput() {
	emit("search", searchQuery.value);
}

const selectedOption = ref(null);

function handleOptionClick(option) {
	selectedOption.value = option;
	emit("selected", option);

	showDropdown.value = false;
}

function handleMoreClick() {
	emit("loadmore", true);
}
</script>
