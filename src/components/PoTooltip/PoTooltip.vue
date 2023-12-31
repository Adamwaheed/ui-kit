<template>
	<span ref="trigger" @mouseover="onMouseOver" @mouseleave="onMouseLeave">
		<slot></slot>

		<Teleport to="body">
			<div
				v-show="text"
				ref="popper"
				class="po-bg-slate-700 po-text-xs po-z-50 po-transition-opacity po-duration-100 po-ease-linear po-text-slate-50 po-rounded-md po-px-2 po-py-1 po-shadow-md"
				:class="[{ 'po-opacity-0': !open }, { 'po-opacity-100': open }]"
			>
				{{ text }}
			</div>
		</Teleport>
	</span>
</template>

<script lang="ts">
export default {
	name: "PoTooltip",
};
</script>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import type { Instance, Placement, PositioningStrategy } from "@popperjs/core";
import { createPopper } from "@popperjs/core";
import useEventBus from "../../composables/useEventBus";

interface Props {
	text: string;
	placement?: Placement | undefined;
	strategy?: PositioningStrategy | undefined;
}

const props = withDefaults(defineProps<Props>(), {
	/**
	 * Text
	 */
	text: "",
	/**
	 * Placement
	 * Default: bottom. | 'auto' | 'auto-start' | 'auto-end' | 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end'
	 */
	placement: "bottom",
	/**
	 * Popper strategy
	 * Default: absolute. 'absolute' | 'fixed'
	 */
	strategy: "absolute",
});

const trigger = ref();
const popper = ref();
const open = ref(false);
let popperInstance: Instance | null = null;

onMounted(() => {
	if (trigger.value && popper.value) {
		setTimeout(() => {
			popperInstance = createPopper(trigger.value, popper.value, {
				placement: props.placement,
				strategy: props.strategy,
			});
		}, 320);
	}
});

onUnmounted(() => {
	if (popperInstance) {
		popperInstance.destroy();
		popperInstance = null;
	}
});

function onMouseOver() {
	open.value = true;
}

function onMouseLeave() {
	open.value = false;
}

useEventBus.on("sidebarOpen", (val) => {
	setTimeout(() => {
		if (popperInstance) {
			popperInstance.update();
		}
	}, 320);
});
</script>
