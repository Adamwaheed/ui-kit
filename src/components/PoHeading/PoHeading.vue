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
	type?: string;
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
