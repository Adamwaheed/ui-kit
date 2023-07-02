<template>
	<!-- v-model="selectedItem" -->
	<!-- :disabled="disabled" -->
	<div :class="[{ 'lg:po-grid lg:po-grid-cols-2': 'horizontal' === display }]">
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
					class="po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm"
					:placeholder="placeholder"
					@change="query = $event.target.value"
					:display-value="getSelectedName"
					:disabled="disabled"
					:id="uniqueID"
				/>
				<span
					class="po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-rounded-r-md po-px-2 focus:po-outline-none"
				>
					<ChevronUpDownIcon
						class="po-h-5 po-w-5 po-text-slate-400"
						aria-hidden="true"
					/>
				</span>
			</div>

			<div
				v-if="filteredItems.length > 0"
				class="po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
			>
				<!-- v-slot="{ active, selected }" -->
				<ul
					v-for="item in filteredItems"
					:key="item.id"
					:value="object ? item : item.id"
					as="template"
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

							<span
								v-if="item.subtitle"
								class="po-block po-text-xs po-opacity-60"
								>{{ item.subtitle }}</span
							>
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
				</ul>
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
import { computed, ref, watch, onUpdated, toRefs, onMounted } from "vue";
import {
	CheckIcon,
	ChevronUpDownIcon,
	InformationCircleIcon,
} from "@heroicons/vue/20/solid";

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
const selectedItem = ref();

const filteredItems = computed(() =>
	query.value === ""
		? props.list
		: props.list.filter((item) => {
				return item.name.toLowerCase().includes(query.value.toLowerCase());
		  })
);
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

const uniqueID = ref("");
onMounted(() => {
	if ("" === props.id) {
		uniqueID.value =
			props.label.replace(/\s/g, "") +
			"-" +
			Date.now() +
			"-selectfield-" +
			Math.floor(Math.random() * 9000);
	} else {
		uniqueID.value = props.id;
	}
});
</script>
