<template>
	<CheckCircleIcon
		@click.prevent="() => $emit('checkboxClicked', itemId)"
		v-if="isChecked"
		class="po-w-6 po-fill-mpao-lightblue po-cursor-pointer"
	/>
	<CheckCircleIcon v-if="disabled" class="po-w-6 po-fill-slate-400" />
	<span
		v-if="!isChecked && !disabled"
		@click.prevent="() => $emit('checkboxClicked', itemId)"
		class="po-h-5 po-w-5 po-rounded-full po-border-2 po-ml-[2px] po-block po-border-slate-300 po-cursor-pointer"
	></span>
</template>

<script lang="ts">
export default {
	name: "PoTableCheckbox",
};
</script>
<script setup lang="ts">
import { CheckCircleIcon } from "@heroicons/vue/20/solid";

interface Props {
	itemId: number | null;
	isChecked: boolean;
	disabled?: boolean;
}

withDefaults(defineProps<Props>(), {
	/**
	 * Model value this is a Boolean of checked/unchecked state
	 */
	itemId: null,
	/**
	 * Model value this is a Boolean of checked/unchecked state
	 */
	isChecked: true,
	/**
	 * Disable check... shows a checkmark in disabled state
	 */
	disabled: false,
});

const emit = defineEmits(["checkboxClicked"]);
</script>
