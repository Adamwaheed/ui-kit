<template>
	<main
		class="po-h-[calc(100vh-64px)] po-overflow-y-auto po-transition-all po-duration-300 po-ease-in-out po-pt-8 po-flex po-flex-col"
		:class="[
			{ 'po-pl-[256px]': sidebarOpen },
			{ 'po-pl-[64px]': !sidebarOpen },
		]"
		id="shell-content-root"
	>
		<slot></slot>
	</main>
</template>

<script lang="ts">
export default {
	name: "PoMain",
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
