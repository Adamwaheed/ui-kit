<template>
	<div>
		<div class="po-relative po-flex po-items-start">
			<div class="po-flex po-h-5 po-items-center">
				<input
					:name="`${id}-field`"
					:id="id"
					:checked="modelValue"
					:disabled="disabled"
					:aria-describedby="`${id}-description`"
					v-bind="$attrs"
					@input="$emit('update:modelValue', $event.target.checked)"
					type="checkbox"
					class="po-h-4 po-w-4 po-rounded po-border-slate-300 po-text-mpao-lightblue focus:po-ring-mpao-lightblue"
					:class="[{ 'po-bg-slate-200': disabled }]"
				/>
			</div>
			<div class="po-ml-3 po-text-sm">
				<label
					:for="id"
					class="po-font-medium po-text-slate-600 po-cursor-pointer po-select-none po-flex po-items-center po-space-x-1"
					><span>{{ label }}</span
					><span
						v-if="required"
						class="po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
						>&#42;</span
					></label
				>
				<span
					v-if="message"
					:id="`${id}-description`"
					class="po-text-slate-500 po-cursor-default"
					><span class="po-sr-only">{{ label }} </span> {{ message }}</span
				>
			</div>
		</div>
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
	name: "PoCheckbox",
};
</script>
<script setup lang="ts">
interface Props {
	modelValue: boolean;
	label?: string;
	id?: string;
	message?: string | null;
	errorMessage?: string | null;
	disabled?: boolean;
	required?: boolean;
}

withDefaults(defineProps<Props>(), {
	/**
	 * Model value
	 */
	modelValue: false,
	/**
	 * Input label text
	 */
	label: "",
	/**
	 * Input id text
	 */
	id: "checkbox-0",
	/**
	 * Tip, description, information for the input
	 */
	message: null,
	/**
	 * Error message
	 */
	errorMessage: null,
	/**
	 * True or false if disabled
	 */
	disabled: false,
	/**
	 * True or false if required
	 */
	required: false,
});

const emit = defineEmits("update:modelValue");
</script>
