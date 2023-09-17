<template>
	<section
		class="po-px-3 lg:po-pl-5 lg:po-pr-3 po-pb-10 po-space-y-5 po-grow po-max-w-[1500px]"
	>
		<slot></slot>
	</section>
</template>

<script lang="ts">
export default {
	name: "PoContentArea",
};
</script>
<script setup lang="ts">
import { ref } from "vue";
import useEventBus from "../../composables/useEventBus";

const sidebarOpen = ref<boolean | undefined>(true);

useEventBus.on("sidebarOpen", (val) => {
	if (typeof val === "boolean") {
		sidebarOpen.value = val;
	}
});
</script>
