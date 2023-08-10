<template>
	<main
		class="po-min-h-screen po-overflow-y-auto po-transition-all po-duration-300 po-ease-in-out po-pt-[78px] po-flex po-flex-col"
		:class="[
			{ 'po-pl-[250px]': sidebarOpen },
			{ 'po-pl-[58px]': !sidebarOpen },
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
