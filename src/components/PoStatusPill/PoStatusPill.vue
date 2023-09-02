<template>
	<span
		class="po-flex po-rounded-xl po-pl-1 po-cursor-pointer"
		:class="currentColorScheme?.bg"
		aria-role="button"
	>
		<component :is="icon" class="po-w-4" :class="currentColorScheme?.icon" />
		<span
			class="po-pr-2 po-py-1 po-pl-1 po-text-slate-600 po-text-xs po-font-medium"
		>
			{{ label }}
		</span>
	</span>
</template>

<script lang="ts">
export default {
	name: "PoStatusPill",
};
</script>

<script setup lang="ts">
import { computed } from "vue";
import type { FunctionalComponent } from "../../../types/Heroicon";
interface Props {
	icon: FunctionalComponent;
	label: string;
	color?: "green" | "blue" | "red";
	customIconColor?: string | undefined;
	customBgColor?: string | undefined;
}

const props = withDefaults(defineProps<Props>(), {
	/**
	 * HeroIcons Solid
	 */
	icon: undefined,
	/**
	 * Label
	 */
	label: "",
	/**
	 * Color
	 */
	color: "green",
	/**
	 * Icon fill color
	 */
	customIconColor: "",
	/**
	 * customBgColor
	 */
	customBgColor: "",
});

const currentColorScheme = computed(() => {
	if (props.customIconColor !== "" && props.customBgColor !== "") {
		return {
			icon: props.customIconColor,
			bg: props.customBgColor,
		};
	} else {
		if (props.color === "green") {
			return {
				icon: "po-fill-green-400",
				bg: "po-bg-green-100",
			};
		} else if (props.color === "blue") {
			return {
				icon: "po-fill-blue-400",
				bg: "po-bg-blue-100",
			};
		} else if (props.color === "red") {
			return {
				icon: "po-fill-red-400",
				bg: "po-bg-red-100",
			};
		}
	}
});
</script>
