<template>
	<div
		class="po-mt-5 po-flex po-flex-col po-items-center po-justify-center po-px-5 po-pt-8 po-pb-12"
	>
		<div
			class="po-space-y-1 po-flex po-items-center po-flex-col po-justify-center"
			:class="[{ 'po-mb-5': $slots.action }]"
		>
			<span
				class="po-w-16 po-h-16 po-flex po-items-center po-justify-center po-rounded-full po-bg-blue-50"
			>
				<component
					v-if="icon"
					:is="icon"
					class="po-w-8 po-h-8"
					:class="iconColor"
				/>
			</span>
			<span
				v-if="label !== ''"
				class="po-text-base po-pt-2 po-font-medium po-text-slate-600 po-text-center"
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
import type { HeroIcon } from "../../../types/HeroIcon";
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
	iconColor: "po-stroke-blue-400",
});
</script>
