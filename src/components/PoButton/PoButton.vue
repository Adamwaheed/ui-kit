<template>
	<span
		v-if="isLoading"
		:class="[buttonClassess, buttonSize]"
		class="po-bg-slate-200 hover:po-bg-slate-200 focus:po-bg-slate-200"
	>
		<LoadingDots
			dot-color="po-bg-slate-500"
			class="po-relative -po-bottom-[0.2rem]"
		/>
	</span>
	<button
		v-if="'button' == type && !isLoading"
		@click.prevent="$emit('button-click', to)"
		:class="[buttonClassess, buttonSize, buttonColor]"
		:disabled="disabled"
		:aria-disabled="disabled"
		v-bind="$attrs"
	>
		<!-- 
        Label slot
        @slot label
        -->
		<slot name="label">{{ label }}</slot>
	</button>
	<input
		v-if="'submit' == type && !isLoading"
		type="submit"
		:class="[buttonClassess, buttonSize, buttonColor]"
		:value="label"
		:disabled="disabled"
		:aria-disabled="disabled"
		v-bind="$attrs"
	/>
	<!--
        Emits to value when type is link or simple. emits action when type is button (default)
        @event button-click
    -->
	<a
		v-if="'link' == type && !isLoading"
		href="#"
		@click.prevent="$emit('button-click', to)"
		:class="[buttonClassess, buttonSize, buttonColor]"
		v-bind="$attrs"
	>
		<slot name="label">{{ label }}</slot>
	</a>
	<a
		v-if="'simple' == type && !isLoading"
		href="#"
		@click.prevent="$emit('button-click', to)"
		class="
			po-text-sm
			po-transition-colors
			po-duration-100
			po-ease-in-out
			po-inline-flex
			po-items-center
			po-space-x-1
		"
		:class="[
			{ 'po-text-mpao-lightblue hover:po-text-mpao-blue': !overrideColors },
		]"
	>
		<slot name="label">{{ label }}</slot>
	</a>
</template>

<script>
export default {
	name: "PoButton",
};
</script>
<script setup>
import { computed } from "vue";
import LoadingDots from "../PoLoading/LoadingDots.vue";

const buttonClassess =
	"po-rounded-full po-transition-colors po-border po-duration-100 po-ease-in-out po-cursor-pointer disabled:po-bg-slate-400 disabled:po-border-slate-400 disabled:po-cursor-default disabled:po-hover:bg-slate-400";

const props = defineProps({
	/**
	 * Type of button. It can be 'button', 'submit', or 'link'.
	 */
	type: {
		type: String,
		default: "button",
	},
	/**
	 * Action type of button. It can be 'default', 'danger', or 'ghost'.
	 */
	actionType: {
		type: String,
		default: "default",
	},
	/**
	 * Label of the button
	 */
	label: {
		type: String,
		default: "Button",
	},
	/**
	 * True or False if disabled
	 */
	disabled: {
		type: Boolean,
		default: false,
	},
	/**
	 * Route for links
	 */
	to: {
		type: String,
		default: "#",
	},
	/**
	 * Override colors. Mark this true and add tailwind bg-color, hover:bg-color and text-color classes to component
	 */
	overrideColors: {
		type: Boolean,
		default: false,
	},
	/**
	 * Button has three sizes. sm, md, and lg
	 */
	size: {
		type: String,
		default: "md",
	},
	/**
	 * Button is loading
	 */
	isLoading: {
		type: Boolean,
		default: false,
	},
});

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
				return "po-bg-mpao-lightblue hover:po-bg-mpao-blue focus:po-bg-mpao-blue po-text-slate-50 po-border-mpao-lightblue hover:po-border-mpao-blue focus:border-mpao-blue";
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
