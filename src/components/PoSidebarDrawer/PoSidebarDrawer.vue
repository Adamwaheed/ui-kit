<template>
	<aside
		class="po-flex po-flex-col po-px-3 po-pt-[78px] po-min-h-screen po-bg-white po-overflow-y-auto po-overflow-x-hidden po-transition-all po-duration-300 po-ease-in-out po-border-r po-border-slate-50 po-z-[49] po-fixed"
		:class="[{ 'po-w-[256px]': sidebarOpen }, { 'po-w-[64px]': !sidebarOpen }]"
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
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ref, computed, onMounted } from "vue";
import FeedbackForm from "./feedbackForm.vue";
import { PoTooltip } from "../";
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

const emit = defineEmits(["button-click", "app-click"]);

const filterApps = computed(() => {
	let newAppList: AppListItem[] = [];
	const currentAppObj = props.apps?.filter((x) => x.code == props.appCode)[0];
	if (currentAppObj) {
		let related = props.apps?.filter((x) =>
			currentAppObj.related.includes(x.code)
		);
		related?.forEach((x) => {
			newAppList.push(x);
		});
	}
	return newAppList;
});

const sideBarKey = computed(() => {
	return `sidebar-is-${sidebarOpen.value}`;
});

// Get a reference to the checkbox element using `ref`
const sidebarToggle = ref<HTMLInputElement | null>(null);
const sidebarOpen = ref<boolean | undefined>(true);

// Define a function to uncheck the checkbox
function toggleSidebar() {
	const screenWidth = window.innerWidth;
	if (screenWidth <= 1024 && sidebarToggle.value) {
		// sidebarToggle.value.checked = !sidebarToggle.value.checked;
		// sidebarOpen.value = sidebarToggle.value.checked;
	}
}

onMounted(() => {
	// sidebarOpen.value = sidebarToggle.value?.checked;
});

function sidebarItemClick(
	emitName: "button-click" | "app-click",
	action: string
) {
	emit(emitName, action);
	toggleSidebar();
}

useEventBus.on("sidebarOpen", (val) => {
	if (typeof val === "boolean") {
		sidebarOpen.value = val;
	}
});

function genToolTip(tip: string) {
	return !sidebarOpen.value ? tip : "";
}
</script>
