<template>
	<div
		class="po-bg-blue-300/20 po-border po-border-blue-200 po-p-3 po-rounded-md po-text-sm sm:po-space-x-2 po-flex po-items-center po-flex-wrap"
	>
		<span class="po-text-blue-500">{{ message }}</span>
		<span
			v-if="'' !== btnName"
			role="button"
			@click="$emit('button-click', btnAction)"
			class="po-text-blue-600 po-underline po-font-medium po-text-xs"
			>{{ btnName }}</span
		>
	</div>
</template>

<script lang="ts">
export default {
	name: "PoMessage",
};
</script>
<script setup lang="ts">
interface Props {
	msgType?: string;
	message: string;
	btnName?: string;
	btnAction?: string | object;
}

withDefaults(defineProps<Props>(), {
	/**
	 * Message type. Default: info
	 */
	msgType: "info",
	/**
	 * The message body
	 */
	message: "",
	/**
	 * Name of the link
	 */
	btnName: "",
	/**
	 * URL of the link. This can be a string or an object. Emitted when button is clicked
	 */
	btnAction: "",
});

const emit = defineEmits(["button-click"]);
</script>
