<template>
	<Combobox
		as="div"
		v-model="selectedItem"
		:class="[{ 'lg:po-grid lg:po-grid-cols-2': 'horizontal' === display }]"
	>
		<ComboboxLabel
			:class="[
				'po-text-sm po-font-medium po-flex po-items-center po-space-x-1',
				{ 'po-text-red-500': formHasError },
				{ 'po-text-slate-700': !formHasError },
			]"
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
		</ComboboxLabel>
		<div class="po-relative po-mt-1">
			<ComboboxInput
				class="
					po-w-full
					po-rounded-md
					po-border
					po-border-slate-300
					po-bg-white
					po-py-2
					po-pl-3
					po-pr-10
					focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0
					sm:po-text-sm
				"
				@change="query = $event.target.value"
				:display-value="getSelectedName"
			/>
			<ComboboxButton
				class="
					po-absolute
					po-inset-y-0
					po-right-0
					po-flex
					po-items-center
					po-rounded-r-md
					po-px-2
					focus:po-outline-none
				"
			>
				<ChevronUpDownIcon
					class="po-h-5 po-w-5 po-text-slate-400"
					aria-hidden="true"
				/>
			</ComboboxButton>

			<ComboboxOptions
				v-if="filteredItems.length > 0"
				class="
					po-absolute
					po-z-10
					po-mt-1
					po-max-h-60
					po-w-full
					po-overflow-auto
					po-rounded-md
					po-bg-white
					po-py-1
					po-text-base
					po-shadow-lg
					po-ring-1
					po-ring-black
					po-ring-opacity-5
					focus:po-outline-none
					sm:po-text-sm
				"
			>
				<ComboboxOption
					v-for="item in filteredItems"
					:key="item.id"
					:value="item.id"
					as="template"
					v-slot="{ active, selected }"
				>
					<li
						:class="[
							'po-relative po-cursor-default po-select-none po-py-2 po-pl-3 po-pr-9',
							active
								? 'po-bg-mpao-lightblue po-text-white'
								: 'po-text-slate-900',
						]"
					>
						<span
							:class="['po-block po-truncate', selected && 'po-font-semibold']"
						>
							{{ item.name }}
						</span>

						<span
							v-if="selected"
							:class="[
								'po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-pr-4',
								active ? 'po-text-white' : 'po-text-mpao-lightblue',
							]"
						>
							<CheckIcon class="po-h-5 po-w-5" aria-hidden="true" />
						</span>
					</li>
				</ComboboxOption>
			</ComboboxOptions>
		</div>
		<p
			class="po-mt-2 po-text-sm po-text-slate-500"
			:id="`${id}-description`"
			v-if="null !== message"
		>
			{{ message }}
		</p>
		<p
			class="
				po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1
			"
			:id="`${id}-error`"
			v-if="formHasError && null !== errorMessage"
		>
			<ExclamationTriangleIcon
				class="po-fill-current po-w-4 po-mt-[0.2rem] po-shrink-0"
			/>
			<span>{{ errorMessage }}</span>
		</p>
	</Combobox>
</template>

<script>
export default {
	name: "PoSelectField",
};
</script>
<script setup>
import { computed, ref, watch, onUpdated, toRefs } from "vue";
import {
	CheckIcon,
	ChevronUpDownIcon,
	InformationCircleIcon,
	ExclamationTriangleIcon,
} from "@heroicons/vue/20/solid";
import {
	Combobox,
	ComboboxButton,
	ComboboxInput,
	ComboboxLabel,
	ComboboxOption,
	ComboboxOptions,
} from "@headlessui/vue";

const props = defineProps({
	/**
	 * Model value
	 */
	modelValue: {
		type: [String, Number],
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
});

const query = ref("");
const selectedItem = ref();

const filteredItems = computed(() =>
	query.value === ""
		? props.list
		: props.list.filter((item) => {
				return item.name.toLowerCase().includes(query.value.toLowerCase());
		  })
);
function getSelectedName(itemId) {
	if (filteredItems.value) {
		let itemSelected = filteredItems.value.find((item) => item.id === itemId);
		return itemSelected?.name;
	}
}

selectedItem.value = props.modelValue;

onUpdated(() => {
	selectedItem.value = props.modelValue;
});

const emit = defineEmits(["selected", "unSelected", "update:modelValue"]);

watch(selectedItem, () => {
	emit("update:modelValue", selectedItem.value);
	emit("selected", selectedItem.value);
});

const { errorMessage } = toRefs(props);

const formHasError = ref(null !== errorMessage.value ? true : false);

watch(errorMessage, (newVal, oldVal) => {
	formHasError.value =
		null !== errorMessage.value && "" !== errorMessage.value ? true : false;
});
</script>
