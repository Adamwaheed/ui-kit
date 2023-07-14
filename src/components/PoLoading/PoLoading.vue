<template>
	<div
		v-if="show"
		class="po-fixed po-z-[999] po-top-0 po-bottom-0 po-left-0 po-right-0 po-flex po-items-center po-justify-center"
	>
		<div
			class="po-absolute po-w-[6.2rem] po-h-[6.2rem] po-bg-transparent po-overflow-hidden po-rounded-xl"
		>
			<div
				class="po-loading-rotate po-absolute -po-top-8 -po-left-8 po-w-[10rem] po-h-[10rem]"
			></div>
		</div>
		<div
			class="relative po-bg-white po-w-24 po-h-24 po-flex po-items-center po-justify-center po-rounded-xl po-bg-opacity-50 po-backdrop-blur po-backdrop-filter po-z-10 po-shadow-xl"
		>
			<span
				v-if="label !== ''"
				class="po-absolute po-left-1 po-right-1 po-text-center po-py-1 po-text-xs po-text-mpao-blue po-bg-white po-bg-opacity-50 po-backdrop-blur po-backdrop-filter"
				>{{ label }}</span
			>
			<AnimatedLogo />
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: "PoLoading",
};
</script>

<script setup lang="ts">
import AnimatedLogo from "./AnimatedLogo.vue";

interface Props {
	show?: boolean;
	label?: string;
}

withDefaults(defineProps<Props>(), {
	show: false,
	label: "",
});
</script>
