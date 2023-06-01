<template>
	<div class="po-flex po-items-center po-justify-center po-space-x-3">
		<div class="po-w-8 po-text-slate-100 app-icon">
			<!-- 
                @slot You can use icon slot to add App Icon. This can be an SVG direcly embedded.
             -->
			<slot name="icon" />
		</div>
		<span class="po-font-light po-text-lg po-text-slate-100">
			<span class="po-hidden md:po-block">{{ appName }}</span>
			<span class="po-block md:po-hidden">{{ appShortName }}</span>
		</span>
	</div>
</template>

<script>
export default {
	name: "PoAppIcon",
};
</script>
<script setup>
import { computed } from "vue";
const props = defineProps({
	/**
	 * Name of the app
	 */
	appName: {
		type: String,
		default: "App Name",
	},
});

const appShortName = computed(() => {
	let shortName = props.appName.match(/\b[A-Z]/g).join("");
	if (shortName.length === 1) {
		return props.appName.substring(0, 3);
	}
	return shortName;
});
</script>
