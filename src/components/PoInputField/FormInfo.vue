<template>
	<template v-if="info !== ''">
		<PoTooltip :text="info" placement="right" strategy="fixed">
			<span
				class="po-block po-w-4 po-text-mpao-lightblue hover:po-text-mpao-midblue po-transition-colors po-duration-150 po-ease-out"
			>
				<InformationCircleIcon class="po-fill-current" />
			</span>
		</PoTooltip>
	</template>
</template>
<script setup lang="ts">
import { InformationCircleIcon } from "@heroicons/vue/20/solid";
import { PoTooltip } from "..";

interface Props {
	info?: string;
}

withDefaults(defineProps<Props>(), {
	/**
	 *  info
	 */
	info: "",
});
</script>
