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
			<FormInfo :info="info" />
		</label>
		<div class="po-relative po-mt-1">
			<div role="button" ref="comboboxButton">
				<input
					type="text"
					ref="selectBox"
					class="po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm"
					:placeholder="placeholder"
					:disabled="disabled"
					v-model="selectedValue"
					@input="handleInput"
					@focus="handleFocus"
					@blur="handleBlur"
					:id="uniqueID"
				/>
				<span
					class="po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-rounded-r-md po-px-2 focus:po-outline-none"
					role="button"
					@mousedown.stop="showDropdown = !showDropdown"
				>
					<ChevronUpDownIcon
						class="po-h-5 po-w-5 po-text-slate-400"
						aria-hidden="true"
					/>
				</span>
			</div>

			<div
				v-show="showDropdown && filteredItems.length > 0"
				ref="popper"
				class="po-absolute po-z-10 po-mt-1 po-w-full po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
			>
				<template v-if="dynamicScroll">
					<DynamicScroller
						:items="filteredItems"
						:min-item-size="32"
						key-field="id"
						class="scroller po-max-h-60 po-h-full po-overflow-y-auto"
						@resize="onResize"
						@update="onUpdate"
					>
						<template v-slot="{ item, index, active }">
							<DynamicScrollerItem
								:item="item"
								:active="active"
								:size-dependencies="[item.name]"
								@mousedown.stop="handleOptionClick(item)"
								:data-index="index"
								:class="[
									'po-relative po-group po-select-none po-py-2 po-pl-3 po-pr-9 po-cursor-pointer hover:po-bg-mpao-lightblue',
									item.active
										? 'po-bg-mpao-lightblue po-text-white'
										: 'po-text-slate-900',
								]"
							>
								<span
									:class="['group-hover:po-text-white po-block po-truncate']"
								>
									{{ item?.name ?? "" }}

									<span
										v-if="item?.subtitle"
										class="po-block po-text-xs po-opacity-60"
										>{{ item?.subtitle }}</span
									>
								</span>
							</DynamicScrollerItem>
						</template>
					</DynamicScroller>
				</template>
				<template v-else>
					<ul class="scroller po-max-h-60 po-h-full po-overflow-y-auto">
						<li
							v-for="item in filteredItems"
							@mousedown.stop="handleOptionClick(item)"
							:class="[
								'po-relative po-group po-select-none po-py-2 po-pl-3 po-pr-9 po-cursor-pointer hover:po-bg-mpao-lightblue',
								item.active
									? 'po-bg-mpao-lightblue po-text-white'
									: 'po-text-slate-900',
							]"
						>
							<span :class="['group-hover:po-text-white po-block po-truncate']">
								{{ item?.name ?? "" }}

								<span
									v-if="item?.subtitle"
									class="po-block po-text-xs po-opacity-60"
									>{{ item?.subtitle }}</span
								>
							</span>
						</li>
					</ul>
				</template>
			</div>
		</div>
		<FormMessage :message="message" />
		<FormErrorMessage :error-message="errorMessage" />
	</div>
</template>

<script lang="ts">
export default {
	name: "PoSelectField",
};
</script>
<script setup lang="ts">
import { computed, ref, watch, onUpdated, onMounted, onUnmounted } from "vue";
import { ChevronUpDownIcon } from "@heroicons/vue/20/solid";
import { createPopper } from "@popperjs/core";
import useDetectOutsideClick from "../../composables/useDetectOutsideClick";
import useEventBus from "../../composables/useEventBus";
import { useUniqueId } from "../../composables/useUniqueId";
import { DynamicScroller, DynamicScrollerItem } from "vue-virtual-scroller";
// import "vue-virtual-scroller/dist/vue-virtual-scroller.css";

import FormErrorMessage from "../PoInputField/FormErrorMessage.vue";
import FormMessage from "../PoInputField/FormMessage.vue";
import FormInfo from "../PoInputField/FormInfo.vue";

interface Item {
	id: string | number;
	name: string;
	active?: boolean;
	subtitle?: string;
	[index: number]: any;
}

interface Props {
	modelValue?: string | number | object | null;
	label?: string;
	id?: string;
	info?: string | undefined;
	list?: Item[] | null;
	display?: "vertical" | "horizontal";
	required?: boolean;
	errorMessage?: string | null;
	message?: string | null;
	disabled?: boolean;
	object?: boolean;
	dynamicScroll?: boolean;
	placeholder?: string | undefined;
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
	 * Input id text
	 */
	id: "",
	/**
	 * A tool tip, helper information
	 */
	info: "",
	/**
	 * List of options
	 */
	list: null,
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
	 * True if you want it to return an object when clicked
	 */
	object: false,
	/**
	 * True if you want to enable dynamic scroll. Use for very long lists
	 */
	dynamicScroll: false,
	/**
	 * Placeholer
	 */
	placeholder: undefined,
});

const query = ref("");
const selectedValue = ref("");
const selectedItem = ref();
const showDropdown = ref(false);
const inputFocused = ref(false);
const selectBox = ref();
const containerRef = ref(null);

const updateParts = ref({
	viewStartIdx: 0,
	viewEndIdx: 0,
	visibleStartIdx: 0,
	visibleEndIdx: 0,
});

const filteredItems = computed<Item[]>(() => {
	const queryValue = query.value.toLowerCase();

	if (queryValue === "") {
		return (
			props.list?.map((item: Item) => ({
				...item,
				active: selectedItem.value === item.id,
			})) ?? []
		);
	}

	return (
		props.list
			?.filter((item: Item) => item.name.toLowerCase().includes(queryValue))
			.map((item: Item) => ({
				...item,
				active: selectedItem.value === item.id,
			})) ?? []
	);
});

function getSelectedName(itemId: any) {
	if (props.object) {
		return itemId?.name;
	} else if (filteredItems.value) {
		let itemSelected = filteredItems.value.find((item) => item.id === itemId);
		return itemSelected?.name;
	} else if (props.placeholder) {
		return props.placeholder;
	}
}

selectedItem.value = props.modelValue;

onUpdated(() => {
	selectedItem.value = props.modelValue;
	// selectedValue.value = getSelectedName(props.modelValue);
});

const emit = defineEmits(["selected", "unSelected", "update:modelValue"]);

watch(selectedItem, () => {
	selectedValue.value = getSelectedName(selectedItem.value);
});

useDetectOutsideClick(containerRef, () => {
	showDropdown.value = inputFocused.value ? true : false;
});

function handleOptionClick(option: Item) {
	selectedItem.value = option;
	selectedValue.value = option.name;
	query.value = "";

	emit("selected", props.object ? option : option.id);
	emit("update:modelValue", props.object ? option : option.id);

	showDropdown.value = inputFocused.value ? true : false;
}

const popper = ref();
let popperInstance: any;

const { uniqueId, generateUniqueId } = useUniqueId();
const uniqueID = ref<string>(props.id);

onMounted(() => {
	// if there is no id set, create a unique random id
	if ("" === props.id) {
		generateUniqueId();
		uniqueID.value = uniqueId.value;
	}

	selectedValue.value = getSelectedName(props.modelValue);

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

function handleFocus() {
	inputFocused.value = true;
	showDropdown.value = true;
	if (popperInstance) {
		popperInstance.update();
	}
}

onUnmounted(() => {
	if (popperInstance) {
		popperInstance.destroy();
	}
});

function handleBlur() {
	inputFocused.value = false;

	setTimeout(() => {
		showDropdown.value = false;
	}, 100);
}

const handleInput: (event: Event) => void = (event) => {
	let val = (event.target as HTMLInputElement).value;

	query.value = val;
};

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
// Listen to sidebar toggle event

useEventBus.on("sidebarOpen", (val) => {
	setTimeout(() => {
		if (popperInstance) {
			popperInstance.update();
		}
	}, 320);
});
</script>
