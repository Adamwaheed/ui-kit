<template>
	<button
		v-if="'button' == type"
		@click.prevent="$emit('button-click', to)"
		:class="[buttonClassess, buttonSize, buttonColor, 'po-relative']"
		:disabled="disabled"
		:aria-disabled="disabled"
		v-bind="$attrs"
	>
		<!-- 
        Label slot
        @slot label
        -->
		<slot name="label">{{ label }}</slot>
		<span
			v-if="isLoading"
			class="po-absolute po-bg-slate-200 -po-top-[1px] -po-right-[1px] -po-bottom-[1px] -po-left-[1px] po-rounded-md po-flex po-items-center po-justify-center"
		>
			<LoadingDots
				dot-color="po-bg-slate-500"
				class="po-relative -po-bottom-[0.2rem]"
			/>
		</span>
	</button>
	<span v-if="'submit' == type" class="po-relative">
		<input
			type="submit"
			:class="[buttonClassess, buttonSize, buttonColor]"
			:value="label"
			:disabled="disabled"
			:aria-disabled="disabled"
			v-bind="$attrs"
		/>
		<span
			v-if="isLoading"
			class="po-absolute po-bg-slate-200 -po-top-[1px] -po-right-[1px] -po-bottom-[1px] -po-left-[1px] po-rounded-md po-flex po-items-center po-justify-center"
		>
			<LoadingDots
				dot-color="po-bg-slate-500"
				class="po-relative -po-bottom-[0.2rem]"
			/>
		</span>
	</span>
	<!--
        Emits to value when type is link or simple. emits action when type is button (default)
        @event button-click
    -->
	<a
		v-if="'link' == type"
		href="#"
		@click.prevent="$emit('button-click', to)"
		:class="[buttonClassess, buttonSize, buttonColor, 'po-relative']"
		v-bind="$attrs"
	>
		<slot name="label">{{ label }}</slot>
		<span
			v-if="isLoading"
			class="po-absolute po-bg-slate-200 -po-top-[1px] -po-right-[1px] -po-bottom-[1px] -po-left-[1px] po-rounded-md po-flex po-items-center po-justify-center"
		>
			<LoadingDots
				dot-color="po-bg-slate-500"
				class="po-relative -po-bottom-[0.2rem]"
			/>
		</span>
	</a>

	<span v-if="'simple' == type" class="po-relative">
		<a
			href="#"
			@click.prevent="$emit('button-click', to)"
			class="po-text-sm po-transition-colors po-duration-100 po-ease-in-out po-inline-flex po-items-center po-space-x-1"
			:class="[
				{
					'po-text-mpao-lightblue hover:po-text-mpao-midblue': !overrideColors,
				},
			]"
		>
			<slot name="label">{{ label }}</slot>
		</a>
		<span
			v-if="isLoading"
			class="po-absolute po-bg-slate-200 -po-top-[1px] -po-right-[1px] -po-bottom-[1px] -po-left-[1px] po-rounded-md po-flex po-items-center po-justify-center"
		>
			<LoadingDots
				dot-color="po-bg-slate-500"
				class="po-relative -po-bottom-[0.2rem]"
			/>
		</span>
	</span>
</template>

<script lang="ts">
export default {
	name: "PoButton",
};
</script>
<script setup lang="ts">
import { computed } from "vue";
import LoadingDots from "../PoLoading/LoadingDots.vue";

interface Props {
	type?: "button" | "submit" | "link" | "simple";
	actionType?: "default" | "danger" | "ghost" | "success";
	label?: string;
	disabled?: boolean;
	to?: string;
	overrideColors?: boolean;
	size?: "sm" | "md" | "lg";
	isLoading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	/**
	 * Type of button. It can be 'button', 'submit', or 'link'.
	 */
	type: "button",
	/**
	 * Action type of button. It can be 'default', 'danger', or 'ghost'.
	 */
	actionType: "default",
	/**
	 * Label of the button
	 */
	label: "Button",
	/**
	 * True or False if disabled
	 */
	disabled: false,
	/**
	 * Route for links
	 */
	to: "#",
	/**
	 * Override colors. Mark this true and add tailwind bg-color, hover:bg-color and text-color classes to component
	 */
	overrideColors: false,
	/**
	 * Button has three sizes. sm, md, and lg
	 */
	size: "md",
	/**
	 * Button is loading
	 */
	isLoading: false,
});

const buttonClassess =
	"po-rounded-md po-transition-colors po-border po-duration-100 po-ease-in-out po-cursor-pointer disabled:po-bg-slate-400 disabled:po-border-slate-400 disabled:po-cursor-default disabled:po-hover:bg-slate-400";

const emit = defineEmits(["button-click"]);

const buttonSize = computed(() => {
	switch (props.size) {
		case "sm":
			return "po-px-2 po-py-1 po-text-xs";
			break;
		case "md":
			return "po-px-4 po-py-2 po-text-sm";
			break;
		case "lg":
			return "po-px-5 po-py-3 po-text-normal";
			break;
	}
});
const buttonColor = computed(() => {
	if (props.overrideColors) {
		return "";
	} else {
		switch (props.actionType) {
			case "default":
				return "po-bg-mpao-lightblue hover:po-bg-mpao-midblue focus:po-bg-mpao-midblue po-text-slate-50 po-border-mpao-lightblue hover:po-border-mpao-midblue focus:border-mpao-midblue";
				break;
			case "danger":
				return "po-bg-mpao-red hover:po-bg-rose-600 focus:po-bg-mpao-red po-text-white po-border-mpao-red hover:po-border-rose-600 focus:po-border-rose-600";
				break;
			case "success":
				return "po-bg-mpao-green hover:po-bg-green-500 focus:po-bg-mpao-green po-text-white po-border-mpao-green hover:po-border-green-500 focus:po-border-green-500";
				break;
			case "ghost":
				return "po-bg-white hover:po-bg-slate-100 focus:po-bg-slate-100 po-text-slate-600 po-border-slate-300 hover:po-border-slate-400 focus:po-border-slate-400";
				break;
		}
	}
});
</script>
