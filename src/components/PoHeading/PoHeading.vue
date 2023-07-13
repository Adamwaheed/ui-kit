<template>
	<component
		:is="type"
		class="po-text-base po-text-slate-600 po-font-semibold"
		>{{ text }}</component
	>
</template>

<script lang="ts">
export default {
	name: "PoHeading",
};
</script>
<script setup lang="ts">
defineProps({
	/**
	 * Heading text
	 */
	text: {
		type: String,
		default: "",
	},
	/**
	 * Heading type h1 h2 h3, default h3
	 */
	type: {
		type: String,
		default: "h3",
	},
});
</script>
