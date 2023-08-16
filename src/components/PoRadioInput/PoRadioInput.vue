<template>
	<RadioGroup
		v-model="selectedOption"
		:class="[{ 'lg:po-grid lg:po-grid-cols-2': 'horizontal' === display }]"
	>
		<RadioGroupLabel
			class="po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700"
			:for="uniqueID"
			><span>{{ label }}</span>
			<span v-if="required" class="po-text-lg po-text-red-400 po-font-semibold"
				>&#42;</span
			><FormInfo :info="info"
		/></RadioGroupLabel>

		<div
			v-if="null !== options"
			class="po-mt-1 po-flex -po-mb-3 po-flex-wrap"
			:id="uniqueID"
		>
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
						class="po-w-5 po-h-5 po-rounded-full po-border po-mr-2 po-flex po-items-center po-justify-center"
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
								class="po-mt-1 po-flex po-items-center po-text-sm po-text-gray-500"
								>{{ option.description }}</RadioGroupDescription
							>
						</span>
					</span>
				</div>
			</RadioGroupOption>
		</div>
		<div>
			<FormMessage :message="message" />
			<FormErrorMessage :error-message="errorMessage" />
		</div>
	</RadioGroup>
</template>

<script lang="ts">
export default {
	name: "PoRadioInput",
};
</script>
<script setup lang="ts">
import { ref, watch, onUpdated, onMounted } from "vue";
import { useUniqueId } from "../../composables/useUniqueId";
import {
	RadioGroup,
	RadioGroupDescription,
	RadioGroupLabel,
	RadioGroupOption,
} from "@headlessui/vue";

import FormErrorMessage from "../PoInputField/FormErrorMessage.vue";
import FormMessage from "../PoInputField/FormMessage.vue";
import FormInfo from "../PoInputField/FormInfo.vue";

interface Option {
	id: string | number;
	title: string;
	description?: string;
}

interface Props {
	modelValue: string | number | null;
	options: Option[] | null;
	label?: string;
	id?: string;
	info?: string | undefined;
	display?: "vertical" | "horizontal";
	required?: boolean;
	errorMessage?: string | null;
	message?: string | null;
}

const props = withDefaults(defineProps<Props>(), {
	/**
	 * Model value
	 */
	modelValue: null,
	/**
	 * List of options for raido
	 */
	options: null,
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
});

const selectedOption = ref();

selectedOption.value = props.modelValue;

const { uniqueId, generateUniqueId } = useUniqueId();
const uniqueID = ref<string>(props.id);
onMounted(() => {
	// if there is no id set, create a unique random id
	if ("" === props.id) {
		generateUniqueId();
		uniqueID.value = uniqueId.value;
	}
});

onUpdated(() => {
	selectedOption.value = props.modelValue;
});

const emit = defineEmits(["selected", "unSelected", "update:modelValue"]);

watch(selectedOption, () => {
	emit("update:modelValue", selectedOption.value);
	emit("selected", selectedOption.value);
});
</script>
