<template>
	<div class="po-shadow-sm po-rounded-xl po-bg-white po-relative">
		<div
			v-if="isLoading"
			class="po-absolute po-right-2 po-top-2 po-p-2 po-rounded-lg"
		>
			<LoadingDots />
		</div>
		<div
			:class="[
				{ 'po-grid po-grid-cols-1 lg:po-grid-cols-3 po-gap-3': $slots.action },
			]"
		>
			<h3
				v-if="title.length > 0"
				class="po-text-base po-font-medium po-text-slate-600"
			>
				{{ title }}
			</h3>
			<div
				v-if="$slots.action"
				class="lg:po-col-span-2 lg:po-flex lg:po-justify-end po-space-x-2"
			>
				<slot name="action"></slot>
			</div>
		</div>
		<!--
            @slot Content of the card goes here.
        -->
		<slot name="content"></slot>
	</div>
</template>

<script lang="ts">
export default {
	name: "PoCard",
};
</script>
<script setup lang="ts">
import LoadingDots from "../PoLoading/LoadingDots.vue";

defineProps({
	/**
	 * Card title
	 */
	title: {
		type: String,
		default: "",
	},
	/**
	 * Show card loading
	 */
	isLoading: {
		type: Boolean,
		default: false,
	},
});
</script>
