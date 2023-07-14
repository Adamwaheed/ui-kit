<template>
	<div
		class="po-mt-5 po-flex po-flex-col po-items-center po-justify-center po-px-5 po-py-8"
	>
		<div
			class="po-space-y-2 po-flex po-items-center po-flex-col po-justify-center"
			:class="[{ 'po-mb-5': $slots.action }]"
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
				class="po-text-sm po-text-slate-500 po-text-center po-max-w-lg po-block po-mx-auto"
				>{{ description }}</span
			>
		</div>
		<!-- 
    Empty state action button
    @slot action
    -->

		<slot name="action"></slot>
	</div>
</template>

<script lang="ts">
export default {
	name: "PoEmpty",
};
</script>
<script setup lang="ts">
type HeroIcon = (
	props: JSX.IntrinsicAttributes & { [key: string]: any }
) => JSX.Element;
interface Props {
	label?: string;
	description?: string;
	icon?: HeroIcon | null;
	iconColor?: string;
}

withDefaults(defineProps<Props>(), {
	/**
	 * State label
	 */
	label: "",
	/**
	 * State description
	 */
	description: "",
	/**
	 * Heroicon
	 */
	icon: null,
	/**
	 * Icon color
	 */
	iconColor: "po-stroke-slate-300",
});
</script>
