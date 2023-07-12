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
					class="po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm"
					:placeholder="placeholder"
					:disabled="disabled"
					v-model="selectedValue"
					@input="query = $event.target.value"
					@focus="
						inputFocused = true;
						showDropdown = true;
					"
					@blur="handleBlur"
					:id="uniqueID"
				/>
				<span
					class="po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-rounded-r-md po-px-2 focus:po-outline-none"
					role="button"
					@click="showDropdown = !showDropdown"
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
				<DynamicScroller
					:items="filteredItems"
					:min-item-size="32"
					key-field="id"
					class="scroller po-max-h-60 po-h-full po-overflow-y-auto"
				>
					<template v-slot="{ item, index, active }">
						<DynamicScrollerItem
							:item="item"
							:active="active"
							:size-dependencies="[item.name]"
							@click="handleOptionClick(item)"
							:data-index="index"
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
						</DynamicScrollerItem>
					</template>
				</DynamicScroller>
			</div>
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
	</div>
</template>

<script>
export default {
	name: "PoSelectField",
};
</script>
<script setup>
import {
	computed,
	ref,
	watch,
	onUpdated,
	toRefs,
	onMounted,
	onBeforeUnmount,
	onUnmounted,
} from "vue";
import {
	ChevronUpDownIcon,
	InformationCircleIcon,
} from "@heroicons/vue/20/solid";
import { createPopper } from "@popperjs/core";

import { DynamicScroller, DynamicScrollerItem } from "vue-virtual-scroller";
// import "vue-virtual-scroller/dist/vue-virtual-scroller.css";

const props = defineProps({
	/**
	 * Model value
	 */
	modelValue: {
		type: [String, Number, Object],
		default: null,
	},
	/**
	 * Label text
	 */
	label: {
		type: String,
		default: "",
	},
	/**
	 * Input id text
	 */
	id: {
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
	 * List of options
	 */
	list: {
		type: Array,
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
	/**
	 * True if you want it to return an object when clicked
	 */
	object: {
		type: Boolean,
		default: false,
	},
	/**
	 * Placeholer
	 */
	placeholder: {
		type: String,
		default: null,
	},
});

const query = ref("");
const selectedValue = ref("");
const selectedItem = ref();
const showDropdown = ref(false);
const inputFocused = ref(false);
const selectBox = ref(null);
const containerRef = ref(null);

const filteredItems = computed(() => {
	const queryValue = query.value.toLowerCase();

	if (queryValue === "") {
		return props.list.map((item) => ({
			...item,
			active: selectedItem.value === item.id,
		}));
	}

	return props.list
		.filter((item) => item.name.toLowerCase().includes(queryValue))
		.map((item) => ({
			...item,
			active: selectedItem.value === item.id,
		}));
});

function getSelectedName(itemId) {
	if (props.object) {
		return itemId?.name;
	} else if (filteredItems.value) {
		let itemSelected = filteredItems.value.find((item) => item.id === itemId);
		return itemSelected?.name;
	} else if (placeholder) {
		return placeholder;
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

const { errorMessage } = toRefs(props);

const formHasError = ref(null !== errorMessage.value ? true : false);

watch(errorMessage, (newVal, oldVal) => {
	formHasError.value =
		null !== errorMessage.value && "" !== errorMessage.value ? true : false;
});

const uniqueID = ref("");

onBeforeUnmount(() => {
	document.removeEventListener("click", handleClickOutside);
});

const handleClickOutside = (event) => {
	if (
		!containerRef.value.contains(event.target) &&
		!selectBox.value.contains(event.target)
	) {
		// Click occurred outside the container and target elements
		showDropdown.value = inputFocused.value ? true : false;
	}
};

function handleOptionClick(option) {
	selectedItem.value = option;
	selectedValue.value = option.name;
	query.value = "";

	emit("selected", props.object ? option : option.id);
	emit("update:modelValue", props.object ? option : option.id);

	showDropdown.value = inputFocused.value ? true : false;
}

const popper = ref(null);
let instance;

onMounted(() => {
	if ("" === props.id) {
		uniqueID.value = props.id
			? props.id
			: `${props.label.replace(
					/\s/g,
					""
			  )}-${Date.now()}-selectfield-${Math.floor(Math.random() * 9000)}`;
	} else {
		uniqueID.value = props.id;
	}

	document.addEventListener("click", handleClickOutside);

	selectedValue.value = getSelectedName(props.modelValue);

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

function handleBlur() {
	inputFocused.value = false;

	setTimeout(() => {
		showDropdown.value = false;
	}, 100);
}
</script>
