<template>
	<CheckCircleIcon
		@click.prevent="() => $emit('checkboxClicked', itemId)"
		v-if="isChecked"
		class="po-w-6 po-fill-mpao-lightblue"
	/>
	<span
		v-if="!isChecked"
		@click.prevent="() => $emit('checkboxClicked', itemId)"
		class="
			po-h-5
			po-w-5
			po-rounded-full
			po-border-2
			po-ml-[2px]
			po-block
			po-border-slate-300
		"
	></span>
</template>

<script>
export default {
	name: "PoTableCheckbox",
};
</script>
<script setup>
import { CheckCircleIcon } from "@heroicons/vue/20/solid";

const props = defineProps({
	/**
	 * Model value this is a Boolean of checked/unchecked state
	 */
	itemId: {
		type: Number,
		requred: true,
	},
	/**
	 * Model value this is a Boolean of checked/unchecked state
	 */
	isChecked: {
		type: Boolean,
		requred: true,
	},
});

const emit = defineEmits(["checkboxClicked"]);
</script>
