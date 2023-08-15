<template>
	<p
		class="po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1"
		v-if="shouldShowError"
	>
		<span>{{ errorMessage }}</span>
	</p>
</template>
<script setup lang="ts">
import { computed, toRefs } from "vue";

interface Props {
	errorMessage?: string | null;
}

const props = withDefaults(defineProps<Props>(), {
	/**
	 * Error message
	 */
	errorMessage: null,
});

const propsRef = toRefs(props);
const errorMessage = propsRef.errorMessage;

const shouldShowError = computed(
	() => !!errorMessage.value && errorMessage.value.trim() !== ""
);
</script>
