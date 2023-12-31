<template>
	<div
		ref="multiSelectComponentRef"
		class="po-relative"
		:class="[{ 'lg:po-grid lg:po-grid-cols-2': 'horizontal' === display }]"
	>
		<!-- 
            v-model update
            @event update:modelValue
         -->
		<label
			:for="uniqueID"
			:class="[
				'po-text-sm po-font-medium po-flex po-items-center po-space-x-1',
				{ 'po-text-red-500': hasError },
				{ 'po-text-slate-700': !hasError },
			]"
		>
			<span class="po-capitalize">{{ label }}</span>
			<span
				v-if="required"
				class="po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
				>&#42;</span
			>
			<FormInfo :info="info" />
		</label>
		<div class="po-relative po-mt-1">
			<div
				:class="[
					'po-border po-p-1 po-min-h-[2.38rem] po-flex po-flex-wrap po-items-center focus-within:po-border-mpao-lightblue po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white sm:po-text-sm',
					getBorderColor(),
				]"
			>
				<div
					class="po-shrink-0 po-pr-1 po-inline-flex po-flex-wrap po-w-full po-gap-1 po-max-h-44"
				>
					<template v-if="selectedItems.length > 0">
						<span
							class="po-px-2 po-py-1 po-rounded-md po-text-sm po-text-slate-600 po-flex po-space-x-2 po-items-center po-bg-gradient-to-l po-from-slate-50 po-via-cyan-50 po-to-cyan-100/60 po-border po-border-cyan-200"
							v-for="(item, index) in selectedItems"
							><span>{{ item.name }}</span>
							<span
								@click="() => removeItem(index)"
								role="button"
								class="po-cursor-pointer"
								><XMarkIcon class="po-w-3 po-stroke-red-600 po-stroke-2"
							/></span>
						</span>
					</template>
					<input
						:id="uniqueID"
						v-model="inputFieldValue"
						@focus="
							() => {
								showDropdown = true;
								inputFieldFocused = true;
							}
						"
						@blur="() => (inputFieldFocused = false)"
						class="po-border-0 po-outline-none po-ring-0 po-grow"
					/>
				</div>
			</div>
			<ul
				v-if="showDropdown"
				class="po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
			>
				<li
					v-for="item in filteredItems"
					@click="() => clickItemOnDropDown(item)"
					:key="item.id"
					:value="item.id"
					:class="[
						'po-relative po-select-none po-py-2 hover:po-bg-mpao-lightblue hover:po-text-white po-cursor-pointer po-pl-3 po-pr-9',
					]"
				>
					<span :class="['po-block po-truncate']">
						{{ item.name }}
					</span>
					<!-- <span
            :class="[
              'po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-pr-4',
            ]"
          >
            <CheckIcon class="po-h-5 po-w-5" aria-hidden="true" />
          </span> -->
				</li>
			</ul>
		</div>
		<FormMessage :message="message" />
		<FormErrorMessage :error-message="errorMessage" />
	</div>
</template>

<script lang="ts">
export default {
	name: "PoMultiSelect",
};
</script>
<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, watch } from "vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";

import useDetectOutsideClick from "../../composables/useDetectOutsideClick";
import { useUniqueId } from "../../composables/useUniqueId";

import FormErrorMessage from "../PoInputField/FormErrorMessage.vue";
import FormMessage from "../PoInputField/FormMessage.vue";
import FormInfo from "../PoInputField/FormInfo.vue";

interface SelectedArray {
	id: string | number;
	name: string;
	[index: number]: any;
}

interface ItemsArray {
	id: string | number;
	name: string;
	[index: number]: any;
}

interface Props {
	modelValue?: SelectedArray[] | null;
	label?: string;
	display?: "vertical" | "horizontal";
	id?: string;
	info?: string | undefined;
	message?: string | null;
	errorMessage?: string | null;
	hasError?: boolean;
	required?: boolean;
	disabled?: boolean;
	placeholder?: string | null;
	borderColor?: string;
	items: ItemsArray[] | null;
}

const props = withDefaults(defineProps<Props>(), {
	/**
	 * Model value
	 */
	modelValue: null,
	/**
	 * Input label text
	 */
	label: "",
	/**
	 * Input display vertifal (default) or horizontal
	 */
	display: "vertical",
	/**
	 * Input id text
	 */
	id: "",
	/**
	 * A tool tip, helper information
	 */
	info: "",
	/**
	 * Tip, description, information for the input
	 */
	message: null,
	/**
	 * Error message
	 */
	errorMessage: null,
	/**
	 * True or False has error
	 */
	hasError: false,
	/**
	 * True or false if required
	 */
	required: false,
	/**
	 * True or false if disabled
	 */
	disabled: false,
	/**
	 * True or false if required
	 */
	placeholder: null,
	/**
	 * True or false if required
	 */
	borderColor: "po-border-slate-300 focus:po-border-mpao-lightblue",
	items: null,
});

function getBorderColor() {
	return props.hasError
		? "po-border-red-400 focus:po-border-red-600 focus:po-ring-red-600"
		: props.borderColor;
}

const inputFieldValue = ref("");
const selectedItems = ref<SelectedArray[]>([]);
const inputFieldFocused = ref(false);

function removeItem(index: number) {
	selectedItems.value.splice(index, 1);
	updateSelectedItemIds();
}

function addItems(e: KeyboardEvent) {
	let names = inputFieldValue.value.split(","); // Split the string by comma

	if (e.key === "Enter" && 0 < inputFieldValue.value.length) {
		e.preventDefault();
		names.forEach((name) => {
			// Loop through each name
			let match = props.items?.find(
				(obj) => obj.name.toLowerCase() === name.trim().toLowerCase()
			); // Search for a match in the array

			if (match) {
				selectedItems.value.push(match); // If a match is found, add it to the new array
			}
		});

		inputFieldValue.value = "";
	}

	if (
		e.key === "Backspace" &&
		inputFieldValue.value.length === 0 &&
		inputFieldFocused.value
	) {
		selectedItems.value.pop();
	}
	updateSelectedItemIds();
}

const selectedItemIds = ref<(string | number)[]>([]);

function updateSelectedItemIds() {
	selectedItemIds.value = selectedItems.value.map((item) => item.id);
}

const { uniqueId, generateUniqueId } = useUniqueId();
const uniqueID = ref<string>(props.id);
onMounted(() => {
	// if there is no id set, create a unique random id
	if ("" === props.id) {
		generateUniqueId();
		uniqueID.value = uniqueId.value;
	}

	document.addEventListener("keydown", addItems);
});

onUnmounted(() => {
	document.removeEventListener("keydown", addItems);
});

const showDropdown = ref(false);
const filteredItems = computed(() =>
	inputFieldValue.value === ""
		? props.items
		: props.items?.filter((item) => {
				return item.name
					.toLowerCase()
					.includes(inputFieldValue.value.toLowerCase());
		  })
);

let multiSelectComponentRef = ref();

useDetectOutsideClick(multiSelectComponentRef, () => {
	showDropdown.value = false;
});

function clickItemOnDropDown(item: ItemsArray) {
	selectedItems.value.push(item);
	inputFieldValue.value = "";
	updateSelectedItemIds();
}

const emit = defineEmits(["selected", "unSelected", "update:modelValue"]);

watch(selectedItemIds, () => {
	emit("update:modelValue", selectedItemIds.value);
});
</script>
