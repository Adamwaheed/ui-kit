<template>
	<div
		class="po-bg-blue-300/20 po-border po-border-blue-200 po-p-3 po-mb-5 po-rounded-md po-text-sm sm:po-space-x-2 po-flex po-items-center po-flex-wrap"
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

<script>
export default {
	name: "PoMessage",
};
</script>
<script setup>
const props = defineProps({
	/**
	 * Message type. Default: info
	 */
	msgType: {
		type: String,
		default: "info",
	},
	/**
	 * The message body
	 */
	message: {
		type: String,
		default: "",
	},
	/**
	 * Name of the link
	 */
	btnName: {
		type: String,
		default: "",
	},
	/**
	 * URL of the link. This can be a string or an object. Emitted when button is clicked
	 */
	btnAction: {
		type: [String, Object],
		default: "",
	},
});

const emit = defineEmits(["button-click"]);
</script>
