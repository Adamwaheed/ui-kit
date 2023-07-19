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
interface Props {
	text: string;
	type?: "h2" | "h3" | "h4" | "h5" | "h6";
}

withDefaults(defineProps<Props>(), {
	/**
	 * Heading text
	 */
	text: "",
	/**
	 * Heading type h1 h2 h3, default h3
	 */
	type: "h3",
});
</script>
