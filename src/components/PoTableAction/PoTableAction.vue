<template>
	<span>
		<PoTooltip
			v-if="
				'icon' === btnType ||
				'delete' === btnType ||
				'edit' === btnType ||
				'view' === btnType
			"
			:text="toolTip"
			placement="bottom"
			strategy="fixed"
		>
			<span
				role="button"
				class="po-w-6 po-h-6 po-rounded-lg po-bg-white genie-effect po-flex po-items-center po-justify-center hover:po-bg-slate-50 po-cursor-pointer"
			>
				<component
					:is="currIcon"
					class="po-w-4 po-stroke-2"
					:class="currIconColor"
				/>
			</span>
		</PoTooltip>
		<span
			v-else
			role="button"
			class="po-block po-text-sm genie-effect"
			:class="textColor"
			>{{ label }}</span
		>
	</span>
</template>

<script lang="ts">
export default {
	name: "PoTableAction",
};
</script>

<script setup lang="ts">
import { EyeIcon, PencilIcon, TrashIcon } from "@heroicons/vue/24/outline";
import { ref } from "vue";
import { PoTooltip } from "..";
import type { HeroIcon } from "../../../types/HeroIcon";

interface Props {
	btnIcon?: HeroIcon | null;
	btnType?: "text" | "icon" | "view" | "edit" | "delete";
	label?: string;
	textColor?: string;
	iconColor?: string;
}

const props = withDefaults(defineProps<Props>(), {
	/**
	 * Heroicon outline 24. Not needed for 'text', 'view', 'edit', or 'delete' types.
	 */
	btnIcon: null,
	/**
	 * Button type. By default it's set to 'text'. You can have 'text', 'icon', 'view', 'edit', or 'delete' types.
	 */
	btnType: "text",
	/**
	 * For text buttons a label is needed. Not needed for 'icon', 'view', 'edit', or 'delete' types.
	 */
	label: "",
	/**
	 * Label color for text icons. Not needed for 'icon', 'view', 'edit', or 'delete' types.
	 */
	textColor: "po-slate-500",
	/**
	 * Icon stroke color. Not needed for 'text', 'view', 'edit', or 'delete' types.
	 */
	iconColor: "po-stroke-slate-500",
});

const currIcon = ref();
const currIconColor = ref();
const toolTip = ref(props.label);

if ("view" === props.btnType) {
	currIcon.value = EyeIcon;
	toolTip.value = "" === props.label ? "View" : props.label;
} else if ("edit" === props.btnType) {
	currIcon.value = PencilIcon;
	toolTip.value = "" === props.label ? "Edit" : props.label;
} else if ("delete" === props.btnType) {
	currIcon.value = TrashIcon;
	toolTip.value = "" === props.label ? "Delete" : props.label;
} else if ("icon" === props.btnType) {
	if (props.btnIcon) {
		currIcon.value = props.btnIcon;
	}
}

if ("view" === props.btnType) {
	currIconColor.value = "po-stroke-emerald-400";
} else if ("edit" === props.btnType) {
	currIconColor.value = "po-stroke-blue-400";
} else if ("delete" === props.btnType) {
	currIconColor.value = "po-stroke-red-400";
} else {
	currIconColor.value = props.iconColor;
}
</script>
