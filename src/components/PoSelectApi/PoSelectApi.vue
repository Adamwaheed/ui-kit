<template>
	<div class="po-max-w-sm po-relative">
		<label
			for=""
			class="po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700"
		>
			<span>Select from API</span>
		</label>
		<div class="po-relative po-mt-1">
			<input
				type="text"
				name=""
				id=""
				ref="selectBox"
				class="po-w-full po-rounded-md po-border po-border-slate-300 po-bg-white po-py-2 po-pl-3 po-pr-10 focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0 sm:po-text-sm"
			/>
		</div>
		<div
			class="po-absolute po-z-10 po-mt-1 po-max-h-60 po-w-full po-overflow-auto po-rounded-md po-bg-white po-py-1 po-text-base po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5 focus:po-outline-none sm:po-text-sm"
		>
			homesweet
		</div>
		<!-- :style="{
    top: getSelectBoxPosition?.relativeTop + 'px',
    left: getSelectBoxPosition?.left + 'px',
    width: getSelectBoxPosition?.width + 'px',
  }" -->
	</div>
</template>

<script>
export default {
	name: "PoSelectApi",
};
</script>

<script setup>
import { computed, onMounted, ref } from "vue";

const selectBox = ref(null);

// Function to get the position of the element
const getSelectBoxPosition = computed(() => {
	if (selectBox.value) {
		const container = document.querySelector(".shell-content--area");
		const { top: containerTop } = container.getBoundingClientRect();
		const scrollTop = container.scrollTop;

		const { top, left, width } = selectBox.value.getBoundingClientRect();
		const relativeTop = top - containerTop + scrollTop;
		return { relativeTop, left, width };
	}
});

onMounted(() => {
	console.log(
		`TadaElement position - top: ${getSelectBoxPosition.value.top}px, left: ${getSelectBoxPosition.value.left}px`
	);
});
</script>
