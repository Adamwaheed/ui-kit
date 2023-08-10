<template>
	<aside
		class="po-flex po-flex-col po-px-3 po-pt-[78px] po-min-h-screen po-bg-white po-overflow-y-auto po-overflow-x-hidden po-transition-all po-duration-300 po-ease-in-out po-border-r po-border-slate-50 po-z-[49] po-fixed"
		:class="[
			{ 'po-w-[256px]': sidebarOpen },
			{ 'po-w-[64px]': !sidebarOpen && !isMobile },
			{ 'po-w-[64px]': isMobile },
		]"
	>
		...
	</aside>
</template>

<script lang="ts">
export default {
	name: "PoSidebarDrawer",
};
</script>
<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import useEventBus from "../../composables/useEventBus";
import type { HeroIcon, AppListItem } from "../../../types/Types";

interface SidebarContentItem {
	label: string;
	url: string;
	icon: HeroIcon;
	disabled?: boolean;
}

interface SidebarContentGroup {
	groupName: string;
	items: SidebarContentItem[];
}

interface Props {
	content: SidebarContentGroup[] | null;
	currRoute?: string;
	hasFeedback?: boolean;
	appsLabel?: string;
	apps?: AppListItem[] | null;
	appCode?: string;
}

const props = withDefaults(defineProps<Props>(), {
	/**
	 * Array of  sidebar menu items
	 */
	content: null,
	/**
	 * Current route path
	 */
	currRoute: "/",
	/**
	 * Show/hide feedback button
	 */
	hasFeedback: false,
	/**
	 * Related apps label. default Related apps
	 */
	appsLabel: "Related apps",
	/**
	 * List of related apps
	 */
	apps: null,
	/**
	 * App API code
	 */
	appCode: "",
});

const sidebarOpen = ref<boolean | undefined>(true);
const screenWidth = ref(window.innerWidth);
const isMobile = ref<boolean>(false);

const handleResize = () => {
	screenWidth.value = window.innerWidth;

	if (screenWidth.value <= 1024) {
		isMobile.value = true;
	}
};

onMounted(() => {
	window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
	window.removeEventListener("resize", handleResize);
});

useEventBus.on("sidebarOpen", (val) => {
	if (typeof val === "boolean") {
		sidebarOpen.value = val;
	}
});
</script>
