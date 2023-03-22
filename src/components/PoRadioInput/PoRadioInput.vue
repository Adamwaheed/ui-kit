<template>
	<RadioGroup
		v-model="selectedOption"
		:class="[{ 'lg:po-grid lg:po-grid-cols-2': 'horizontal' === display }]"
	>
		<RadioGroupLabel
			:class="[
				'po-text-sm po-font-medium po-flex po-items-center po-space-x-1',
				{ 'po-text-red-500': formHasError },
				{ 'po-text-slate-700': !formHasError },
			]"
			><span>{{ label }}</span>
			<span v-if="required" class="po-text-lg po-text-red-400 po-font-semibold"
				>&#42;</span
			></RadioGroupLabel
		>

		<div v-if="null !== options" class="po-mt-1 po-flex -po-mb-3 po-flex-wrap">
			<RadioGroupOption
				as="template"
				v-for="option in options"
				:key="option.id"
				:value="option.id"
				v-slot="{ checked, active }"
			>
				<div
					:class="[
						'po-transition-colors po-duration-100 po-ease-out po-mr-3',
						checked ? '' : '',
						active ? '' : '',
						'po-mb-3 po-pt-[0.13rem] po-relative po-flex po-cursor-pointer focus:po-outline-none',
					]"
				>
					<span
						class="
							po-w-5
							po-h-5
							po-rounded-full
							po-border
							po-mr-2
							po-flex
							po-items-center
							po-justify-center
						"
						:class="[
							active ? '' : '',
							checked ? 'po-border-mpao-lightblue' : 'po-border-slate-400',
						]"
					>
						<span
							class="po-w-3 po-h-3 po-rounded-full"
							:class="[
								active ? '' : '',
								checked ? 'po-bg-mpao-lightblue' : 'po-bg-transparent',
							]"
						></span>
					</span>
					<span class="po-flex po-flex-1">
						<span class="po-flex po-flex-col">
							<RadioGroupLabel
								as="span"
								class="po-block po-text-sm po-font-medium po-text-gray-900"
								>{{ option.title }}</RadioGroupLabel
							>
							<RadioGroupDescription
								v-if="option.description"
								as="span"
								class="
									po-mt-1 po-flex po-items-center po-text-sm po-text-gray-500
								"
								>{{ option.description }}</RadioGroupDescription
							>
						</span>
					</span>
				</div>
			</RadioGroupOption>
		</div>
		<div>
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
		</div>
	</RadioGroup>
</template>

<script>
export default {
	name: "PoRadioInput",
};
</script>
<script setup>
import { ref, watch, onUpdated, toRefs } from "vue";
import { ExclamationTriangleIcon } from "@heroicons/vue/20/solid";
import {
	RadioGroup,
	RadioGroupDescription,
	RadioGroupLabel,
	RadioGroupOption,
} from "@headlessui/vue";

const props = defineProps({
	/**
	 * Model value
	 */
	modelValue: {
		type: [String, Number],
		requred: true,
	},
	/**
	 * List of options for raido
	 */
	options: {
		type: Array,
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

const selectedOption = ref();

selectedOption.value = props.modelValue;

onUpdated(() => {
	selectedOption.value = props.modelValue;
});

const emit = defineEmits(["selected", "unSelected", "update:modelValue"]);

watch(selectedOption, () => {
	emit("update:modelValue", selectedOption.value);
});

const { errorMessage } = toRefs(props);

const formHasError = ref();

watch(errorMessage, (newVal, oldVal) => {
	formHasError.value =
		null !== errorMessage.value && "" !== errorMessage.value ? true : false;

	if (null !== errorMessage.value) {
		formHasError.value = true;
	} else {
		formHasError.value = false;
	}
});
</script>
