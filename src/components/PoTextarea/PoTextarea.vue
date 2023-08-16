<template>
	<div
		class="po-relative"
		:class="[{ 'lg:po-grid lg:po-grid-cols-2': 'horizontal' === display }]"
	>
		<label
			:for="uniqueID"
			class="po-text-sm po-font-medium po-text-slate-700 po-flex po-items-center po-space-x-1"
		>
			<span>{{ label }}</span>
			<span
				v-if="required"
				class="po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
				>&#42;</span
			>
			<FormInfo :info="info" />
		</label>
		<!-- 
              v-model update
              @event update:modelValue
           -->
		<textarea
			:name="`${uniqueID}-field`"
			:id="uniqueID"
			:value="modelValue"
			:placeholder="placeholder"
			:disabled="disabled"
			:required="required"
			:aria-describedby="`${id}-description`"
			:aria-required="required"
			:aria-disabled="disabled"
			v-bind="$attrs"
			@input="handleInput"
			class="po-mt-1 po-peer po-px-3 po-py-2 po-block po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-border-slate-300 po-bg-white focus:po-border-mpao-lightblue focus:po-ring-0 invalid:po-border-red-400 invalid:po-focus:border-red-600 invalid:focus:po-ring-red-600 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default"
		></textarea>
		<FormMessage :message="message" />
		<FormErrorMessage :error-message="errorMessage" />
	</div>
</template>

<script lang="ts">
export default {
	name: "PoTextarea",
};
</script>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useUniqueId } from "../../composables/useUniqueId";

import FormErrorMessage from "../PoInputField/FormErrorMessage.vue";
import FormMessage from "../PoInputField/FormMessage.vue";
import FormInfo from "../PoInputField/FormInfo.vue";

interface Props {
	modelValue?: string | number;
	label?: string;
	id?: string;
	info?: string | undefined;
	message?: string | null;
	errorMessage?: string | null;
	required?: boolean;
	disabled?: boolean;
	placeholder?: string | undefined;
	display?: "vertical" | "horizontal";
}

const props = withDefaults(defineProps<Props>(), {
	/**
	 * Model value
	 */
	modelValue: "",
	/**
	 * Input label text
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
	 * Tip, description, information for the input
	 */
	message: null,
	/**
	 * Error message
	 */
	errorMessage: null,
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
	placeholder: undefined,
	/**
	 * Input display vertifal (default) or horizontal
	 */
	display: "vertical",
});

const emit = defineEmits(["update:modelValue"]);

const handleInput: (event: Event) => void = (event) => {
	let val = (event.target as HTMLInputElement).value;

	emit("update:modelValue", val);
};

const { uniqueId, generateUniqueId } = useUniqueId();
const uniqueID = ref<string>(props.id);
onMounted(() => {
	// if there is no id set, create a unique random id
	if ("" === props.id) {
		generateUniqueId();
		uniqueID.value = uniqueId.value;
	}
});
</script>
