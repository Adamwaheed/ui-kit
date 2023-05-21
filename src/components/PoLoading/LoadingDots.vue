<template>
	<div
		class="loading-dots po-inline-block po-w-[40px] po-h-[10px]"
		:class="[{ 'po-relative': !absolute }, { 'po-absolute': absolute }]"
	>
		<div
			class="po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[8px]"
			:class="dotColor"
		></div>
		<div
			class="po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[8px]"
			:class="dotColor"
		></div>
		<div
			class="po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[17px]"
			:class="dotColor"
		></div>
		<div
			class="po-absolute po-w-[5px] po-h-[5px] po-rounded-full po-ease-[cubic-bezier(0, 1, 1, 0)] po-left-[26px]"
			:class="dotColor"
		></div>
	</div>
</template>

<script setup>
defineProps({
	/**
	 * dot colors
	 */
	dotColor: {
		type: String,
		default: "po-bg-mpao-lightblue",
	},
	absolute: {
		type: Boolean,
		default: false,
	},
});
</script>
