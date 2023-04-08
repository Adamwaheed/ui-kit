<template>
	<div
		class="po-relative"
		:class="[{ 'lg:po-grid lg:po-grid-cols-2': 'horizontal' === display }]"
	>
		<!-- 
            v-model update
            @event update:modelValue
         -->
		<label
			:for="id"
			class="
				po-text-sm
				po-font-medium
				po-flex
				po-items-center
				po-space-x-1
				po-text-slate-700
			"
		>
			<span class="po-capitalize">{{ label }}</span>
			<span
				v-if="required"
				class="po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
				>&#42;</span
			>
			<abbr v-if="null !== info" :title="info" class="po-w-4 po-text-slate-500">
				<InformationCircleIcon class="po-fill-current" />
			</abbr>
		</label>
		<input
			:type="type"
			:name="`${id}-field`"
			:id="id"
			:value="modelValue"
			:placeholder="placeholder"
			:disabled="disabled"
			:required="required"
			:aria-describedby="`${id}-description`"
			:aria-required="required"
			:aria-disabled="disabled"
			v-bind="$attrs"
			@input="$emit('update:modelValue', $event.target.value)"
			:class="[
				'po-mt-1 peer po-block po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white focus:po-ring-0 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default',
				getBorderColor(),
			]"
		/>
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
			<span>{{ errorMessage }}</span>
		</p>
	</div>
</template>

<script>
export default {
	name: "PoInputField",
};
</script>
<script setup>
import {
	InformationCircleIcon,
	ExclamationTriangleIcon,
} from "@heroicons/vue/20/solid";
import { watch, ref, toRefs } from "vue";

const props = defineProps({
	/**
	 * Model value
	 */
	modelValue: {
		type: [String, Number],
		default: "",
	},
	/**
	 * Input label text
	 */
	label: {
		type: String,
		default: "",
	},
	/**
	 * Input type
	 */
	type: {
		type: String,
		default: "text",
	},
	/**
	 * Input display vertifal (default) or horizontal
	 */
	display: {
		type: String,
		default: "vertical",
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
	 * Tip, description, information for the input
	 */
	message: {
		type: String,
		default: null,
	},
	/**
	 * Error message
	 */
	errorMessage: {
		type: String,
		default: null,
	},
	/**
	 * True or False has error.. NO LONGER HAVE TO USE THIS. JUST PASS AN errorMessage.
	 */
	hasError: {
		type: Boolean,
		default: false,
	},
	/**
	 * True or false if required
	 */
	required: {
		type: Boolean,
		default: false,
	},
	/**
	 * True or false if disabled
	 */
	disabled: {
		type: Boolean,
		default: false,
	},
	/**
	 * True or false if required
	 */
	placeholder: {
		type: String,
		default: null,
	},
	/**
	 * True or false if required
	 */
	borderColor: {
		type: String,
		default: "po-border-slate-300 focus:po-border-mpao-lightblue",
	},
});

function getBorderColor() {
	return props.hasError
		? "po-border-red-400 focus:po-border-red-600 focus:po-ring-red-600"
		: props.borderColor;
}

const { errorMessage } = toRefs(props);

const formHasError = ref(null !== errorMessage.value ? true : false);

watch(errorMessage, (newVal, oldVal) => {
	formHasError.value =
		null !== errorMessage.value && "" !== errorMessage.value ? true : false;
});
</script>
