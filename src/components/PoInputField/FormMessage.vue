<template>
	<p class="po-mt-2 po-text-sm po-text-slate-500" v-if="null !== message">
		{{ message }}
	</p>
</template>
<script setup lang="ts">
interface Props {
	message?: string | null;
}

withDefaults(defineProps<Props>(), {
	/**
	 *  message
	 */
	message: null,
});
</script>
