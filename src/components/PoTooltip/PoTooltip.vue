<template>
	<span ref="trigger" @mouseover="onMouseOver" @mouseleave="onMouseLeave">
		<slot>Tooltip</slot>

		<div
			ref="popper"
			class="po-bg-slate-700 po-text-xs po-transition-opacity po-duration-100 po-ease-linear po-text-slate-50 po-rounded-md po-px-2 po-py-1 po-shadow-md"
			:class="[{ 'po-opacity-0': !open }, { 'po-opacity-100': open }]"
		>
			{{ text }}
		</div>
	</span>
</template>

<script>
export default {
	name: "PoTooltip",
};
</script>
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { createPopper } from "@popperjs/core";

const props = defineProps({
	/**
	 * Text
	 */
	text: {
		type: String,
		default: "This is a tooltip",
	},
	/**
	 * Placement
	 * Default: bottom. | 'auto' | 'auto-start' | 'auto-end' | 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end'
	 */
	placement: {
		type: String,
		default: "bottom",
	},
	/**
	 * Popper strategy
	 * Default: absolute. 'absolute' | 'fixed'
	 */
	strategy: {
		type: String,
		default: "absolute",
	},
});

const trigger = ref(null);
const popper = ref(null);
const open = ref(false);
let instance;

onMounted(() => {
	instance = createPopper(trigger.value, popper.value, {
		placement: props.placement,
		strategy: props.strategy,
	});
});

onUnmounted(() => {
	if (instance) {
		instance.destroy();
	}
});

function onMouseOver() {
	open.value = true;
}

function onMouseLeave() {
	open.value = false;
}
</script>
