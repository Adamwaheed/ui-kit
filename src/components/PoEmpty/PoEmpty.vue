<template>
	<div
		class="
			po-mt-5
			po-flex
			po-flex-col
			po-items-center
			po-justify-center
			po-px-5
			po-py-8
			po-space-y-3
		"
	>
		<component
			v-if="icon"
			:is="icon"
			class="po-w-10 po-h-10"
			:class="iconColor"
		/>
		<span
			v-if="label !== ''"
			class="po-text-base po-font-medium po-text-slate-600 po-text-center"
			>{{ label }}</span
		>
		<span
			v-if="description !== ''"
			class="po-text-sm po-text-slate-500 po-text-center"
			>{{ description }}</span
		>
		<!-- 
    Empty state action button
    @slot action
    -->
		<slot name="action"></slot>
	</div>
</template>

<script>
export default {
	name: "PoEmpty",
};
</script>
<script setup>
defineProps({
	/**
	 * State label
	 */
	label: {
		type: String,
		default: "",
	},
	/**
	 * State description
	 */
	description: {
		type: String,
		default: "",
	},
	/**
	 * Heroicon
	 */
	icon: null,
	/**
	 * Icon color
	 */
	iconColor: {
		type: String,
		default: "po-stroke-slate-300",
	},
});
</script>
