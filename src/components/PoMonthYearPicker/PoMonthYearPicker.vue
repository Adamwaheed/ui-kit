<template>
	<div
		:class="[{ 'lg:po-grid lg:po-grid-cols-2': 'horizontal' === display }]"
		ref="containerRef"
	>
		<label
			class="po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700"
			:for="uniqueID"
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
			<div role="button" ref="comboboxButton">
				<input
					type="text"
					ref="selectBox"
					readonly
					class="po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm"
					:disabled="disabled"
					v-model="selectedValue"
					@focus="showDropdown = true"
					:id="uniqueID"
				/>
				<span
					class="po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-rounded-r-md po-px-2 focus:po-outline-none"
					role="button"
					@mousedown.stop="showDropdown = !showDropdown"
				>
					<CalendarIcon
						class="po-h-5 po-w-5 po-text-slate-400"
						aria-hidden="true"
					/>
				</span>
			</div>

			<div
				v-show="showDropdown"
				ref="popper"
				class="po-absolute po-z-10 po-mt-1 po-w-full po-rounded-md po-max-w-[290px] po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
				@resize="onResize"
				@update="onUpdate"
			>
				<div
					class="po-flex po-items-center po-justify-between po-w-full po-px-2 po-pb-1"
				>
					<span
						class="po-p-2 po-rounded-md hover:po-bg-slate-100 po-cursor-pointer po-transition-colors po-duration-150 po-ease-out"
						role="button"
					>
						<ChevronLeftIcon class="po-w-4 po-stroke-slate-500 po-stroke-2" />
					</span>
					<span
						class="po-p-2 po-rounded-md hover:po-bg-slate-100 po-cursor-pointer po-transition-colors po-duration-150 po-ease-out po-text-sm po-slate-600"
						role="button"
					>
						2023
					</span>
					<span
						class="po-p-2 po-rounded-md hover:po-bg-slate-100 po-cursor-pointer po-transition-colors po-duration-150 po-ease-out"
						role="button"
					>
						<ChevronRightIcon class="po-w-4 po-stroke-slate-500 po-stroke-2" />
					</span>
				</div>
				<div
					class="po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200"
				></div>
				<div class="po-grid po-grid-cols-3 po-p-1">
					<div class="" v-for="month in months">
						<span
							class="po-block po-px-2 po-text-sm po-py-4 po-rounded-md po-text-center po-transition-colors po-duration-150 po-ease-out"
							@click="handleMonthClick(month)"
							:class="[
								{
									'po-cursor-pointer po-text-slate-600 hover:po-bg-slate-100':
										!isSelectedMonth(month.number) && !month.disabled,
								},
								{
									'po-cursor-default po-select-none po-text-slate-400':
										month.disabled,
								},
								{
									'po-cursor-pointer po-text-white po-bg-mpao-lightblue hover:po-bg-purple-600':
										isSelectedMonth(month.number),
								},
							]"
							>{{ month.name }}</span
						>
					</div>
				</div>
			</div>
		</div>
		<p class="po-mt-2 po-text-sm po-text-slate-500" v-if="null !== message">
			{{ message }}
		</p>
		<p
			class="po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1"
			v-if="null !== errorMessage"
		>
			<span>{{ errorMessage }}</span>
		</p>
	</div>
</template>

<script lang="ts">
export default {
	name: "PoMonthYearPicker",
};
</script>
<script setup lang="ts">
import {
	computed,
	ref,
	watch,
	onUpdated,
	toRefs,
	onMounted,
	onUnmounted,
} from "vue";
import { CalendarIcon, InformationCircleIcon } from "@heroicons/vue/20/solid";
import { createPopper } from "@popperjs/core";
import useDetectOutsideClick from "../../composables/useDetectOutsideClick";
import useEventBus from "../../composables/useEventBus";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/outline";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import customParseFormat from "dayjs/plugin/customParseFormat";

interface Props {
	modelValue?: string | null;
	label?: string;
	minDate?: string | null;
	maxDate?: string | null;
	id?: string;
	info?: string | null;
	display?: "vertical" | "horizontal";
	required?: boolean;
	errorMessage?: string | null;
	message?: string | null;
	disabled?: boolean;
}

interface PickerMonth {
	number: number;
	year: number;
	value: string;
	name: string;
	disabled: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	/**
	 * Model value
	 */
	modelValue: null,
	/**
	 * Label text
	 */
	label: "",
	/**
	 * Minimum date user should be able to select, default 10 years to past
	 */
	minDate: dayjs().subtract(10, "year").format("DD-MM-YYYY"),
	/**
	 * Maximum date user should be able to select, default 10 years in the future
	 */
	maxDate: dayjs().add(10, "year").format("DD-MM-YYYY"),
	/**
	 * Input id text
	 */
	id: "",
	/**
	 * A tool tip, helper information
	 */
	info: null,
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
});

// set default timezone to Maldives
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);
dayjs.tz.setDefault("Indian/Maldives");

const emit = defineEmits(["selected", "update:modelValue"]);

const query = ref("");
const selectedValue = ref<string | null>("");
const showDropdown = ref(false);
const selectBox = ref();
const containerRef = ref(null);
const selectedYear = ref(dayjs().year());
const selectedMonth = ref(dayjs().month());
const uniqueID = ref("");
const popper = ref();
const updateParts = ref({
	viewStartIdx: 0,
	viewEndIdx: 0,
	visibleStartIdx: 0,
	visibleEndIdx: 0,
});

let popperInstance: any;

onMounted(() => {
	if (props.modelValue) {
		const initialDate = dayjs(`02-${props.modelValue + 1}`, "DD-MM-YYYY");

		selectedValue.value = props.modelValue;
		selectedMonth.value = initialDate.month() + 1;
		selectedYear.value = initialDate.year();
	}

	if ("" === props.id) {
		uniqueID.value = props.id
			? props.id
			: `${props.label.replace(
					/\s/g,
					""
			  )}-${Date.now()}-month-picker-${Math.floor(Math.random() * 9000)}`;
	} else {
		uniqueID.value = props.id;
	}

	// selectedValue.value = getSelectedName(props.modelValue);

	popperInstance = createPopper(selectBox.value, popper.value, {
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

onUpdated(() => {
	// selectedValue.value = props.modelValue;
	// selectedValue.value = getSelectedName(props.modelValue);
});

const isMinYear = computed(() => {
	return selectedYear.value === dayjs(props.minDate, "DD-MM-YYYY").year();
});
const isMaxYear = computed(() => {
	return selectedYear.value === dayjs(props.maxDate, "DD-MM-YYYY").year();
});

const years = computed(() => {
	const startYear = dayjs(props.minDate, "DD-MM-YYYY").year();
	const endYear = dayjs(props.maxDate, "DD-MM-YYYY").year();
	console.log(`startYear ${startYear} endYear ${endYear}`);
	return Array.from(
		{ length: endYear - startYear + 1 },
		(_, index) => startYear + index
	);
});

const months = computed<PickerMonth[]>(() => {
	return Array.from({ length: 12 }, (_, index) => ({
		number: index + 1,
		year: selectedYear.value,
		value: `${dayjs(`${index + 1}-23-2023`).format("MM")}-${
			selectedYear.value
		}`,
		name: dayjs().month(index).format("MMM"),
		disabled:
			(isMinYear.value &&
				index + 1 < dayjs(props.minDate, "DD-MM-YYYY").month() + 1) ||
			(isMaxYear.value &&
				index + 1 > dayjs(props.maxDate, "DD-MM-YYYY").month() + 1),
	}));
});

console.log(`---months`, months.value);

function isSelectedMonth(month: number) {
	return selectedMonth.value === month;
}
// i have `props.minDate` and `props.maxDate`
function nextYear() {
	if (selectedYear.value === dayjs(props.minDate, "DD-MM-YYYY").year()) {
		selectedYear.value = dayjs(selectedYear.value, "DD-MM-YYYY")
			.subtract(1, "year")
			.year();
	}
}

function handleMonthClick(month: PickerMonth) {
	if (month.disabled) return;

	selectedValue.value = month.value;
	selectedMonth.value = month.number;
	selectedYear.value = month.year;

	emit("update:modelValue", month.value);
}

// watch(selectedItem, () => {
// 	// selectedValue.value = getSelectedName(selectedItem.value);
// });

const { errorMessage } = toRefs(props);

const formHasError = ref(null !== errorMessage.value ? true : false);

watch(errorMessage, (newVal, oldVal) => {
	formHasError.value =
		null !== errorMessage.value && "" !== errorMessage.value ? true : false;
});

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

// outsideclick detection
useDetectOutsideClick(containerRef, () => {
	showDropdown.value = false;
});

// Listen to sidebar toggle event
useEventBus.on("sidebarOpen", (val) => {
	setTimeout(() => {
		if (popperInstance) {
			popperInstance.update();
		}
	}, 320);
});

onUnmounted(() => {
	if (popperInstance) {
		popperInstance.destroy();
	}
});
</script>
