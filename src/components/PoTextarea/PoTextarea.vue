<template>
	<div
		class="po-relative"
		:class="[{ 'lg:po-grid lg:po-grid-cols-2': 'horizontal' === display }]"
	>
		<label
			:for="id"
			class="po-text-sm po-font-medium po-text-slate-700 po-flex po-items-center po-space-x-1"
		>
			<span>{{ label }}</span>
			<span
				v-if="required"
				class="po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
				>&#42;</span
			>
			<abbr v-if="null !== info" :title="info" class="po-w-4 po-text-slate-500">
				<InformationCircleIcon />
			</abbr>
		</label>
		<!-- 
              v-model update
              @event update:modelValue
           -->
		<textarea
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
			@input="handleInput"
			class="po-mt-1 po-peer po-px-3 po-py-2 po-block po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-border-slate-300 po-bg-white focus:po-border-mpao-lightblue focus:po-ring-0 invalid:po-border-red-400 invalid:po-focus:border-red-600 invalid:focus:po-ring-red-600 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default"
		></textarea>
		<p
			class="po-mt-2 po-text-sm po-text-slate-500"
			:id="`${id}-description`"
			v-if="null !== message"
		>
			{{ message }}
		</p>
		<p
			class="po-mt-2 po-text-sm po-text-red-600"
			:id="`${id}-error`"
			v-if="null !== errorMessage"
		>
			{{ errorMessage }}
		</p>
	</div>
</template>

<script lang="ts">
export default {
	name: "PoTextarea",
};
</script>
<script setup lang="ts">
import { InformationCircleIcon } from "@heroicons/vue/24/solid";
import type { FormEventHandler } from "react";

interface Props {
	modelValue?: string | number;
	label?: string;
	id?: string;
	info?: string | null;
	message?: string | null;
	errorMessage?: string | null;
	required?: boolean;
	disabled?: boolean;
	placeholder?: string | undefined;
	display?: "vertical" | "horizontal";
}

withDefaults(defineProps<Props>(), {
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
	info: null,
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

const handleInput: FormEventHandler<HTMLTextAreaElement> = (event) => {
	let val = (event.target as HTMLTextAreaElement).value;

	emit("update:modelValue", val);
};
</script>
