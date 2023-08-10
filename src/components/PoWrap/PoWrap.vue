<template>
	<!-- notifications -->
	<div
		aria-live="assertive"
		class="po-pointer-events-none po-fixed po-inset-0 po-flex po-items-start po-px-4 po-py-6 sm:po-p-6 po-z-[60]"
	>
		<div
			class="po-flex po-w-full po-flex-col po-items-end po-space-y-4 sm:po-items-end po-pt-[55px]"
			id="po-notifications-alert"
		></div>
	</div>
	<div class="po-h-full po-flex"><slot></slot></div>
</template>

<script lang="ts">
export default {
	name: "PoWrap",
};
</script>
