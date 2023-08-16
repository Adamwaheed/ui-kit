<template>
	<aside
		class="po-flex po-flex-col po-px-3 po-pt-[78px] po-top-0 po-bottom-0 po-bg-white po-overflow-y-auto po-overflow-x-hidden po-transition-all po-duration-300 po-ease-in-out po-border-r po-border-slate-50 po-z-[49] po-fixed"
		:class="[
			{ 'po-w-[256px]': sidebarOpen && !isMobile },
			{ 'po-w-[64px]': !sidebarOpen && !isMobile },
			{ 'po-w-[256px] po-left-0 po-shadow': isMobile && sidebarOpen },
			{
				'po-w-[256px] -po-left-[256px]  po-shadow-lg': isMobile && !sidebarOpen,
			},
		]"
	>
		<div class="po-grow">
			<template
				v-for="(group, groupIndex) in content"
				:key="`sidebar-group-${groupIndex}`"
			>
				<Disclosure v-slot="{ open }" :defaultOpen="true">
					<DisclosureButton
						v-if="group.groupName"
						:class="[
							{ 'po-mb-3': open === '' },
							{ 'po-ml-0 po-text-center': hideSidebarItemLabel },
							{ 'po-ml-2 po-text-left': !hideSidebarItemLabel },
							{ 'po-animate-fadeOut': !hideSidebarItemLabel && !sidebarOpen },
							{ 'po-animate-fadeIn': hideSidebarItemLabel },
						]"
						class="po-uppercase po-select-none po-text-xs po-font-semibold po-text-slate-400 po-block po-w-full"
					>
						{{
							showSidebarGroupLabel
								? group.groupName
								: group.groupName.slice(0, 2)
						}}
					</DisclosureButton>
					<transition
						enter-active-class="po-transition po-duration-100 po-ease-out"
						enter-from-class="po-transform po-scale-95 po-opacity-0"
						enter-to-class="po-transform po-scale-100 po-opacity-100"
						leave-active-class="po-transition po-duration-75 po-ease-out"
						leave-from-class="po-transform po-scale-100 po-opacity-100"
						leave-to-class="po-transform po-scale-95 po-opacity-0"
					>
						<DisclosurePanel>
							<!--
									Emits the button url when it’s clicked
									@event button-click
							-->
							<ul class="po-mt-2 po-mb-5">
								<template v-for="item in group.items" :key="item.label">
									<SdebarItem
										:item="item"
										:sidebarOpen="sidebarOpen"
										:hideSidebarItemLabel="hideSidebarItemLabel"
										:currRoute="currRoute"
										@item-click="sidebarItemClick"
									/>
								</template>
							</ul>
						</DisclosurePanel>
					</transition>
				</Disclosure>
			</template>
			<template v-if="filterApps?.length > 0">
				<Disclosure v-slot="{ open }" :defaultOpen="true">
					<DisclosureButton
						v-if="appsLabel"
						:class="[
							{ 'po-mb-3': open === '' },
							{ 'po-ml-0 po-text-center': hideSidebarItemLabel },
							{ 'po-ml-2 po-text-left': !hideSidebarItemLabel },
							{ 'po-animate-fadeOut': !hideSidebarItemLabel && !sidebarOpen },
							{ 'po-animate-fadeIn': hideSidebarItemLabel },
						]"
						class="po-uppercase po-select-none po-text-xs po-font-semibold po-text-slate-400 po-block po-w-full"
					>
						{{ showSidebarGroupLabel ? appsLabel : appsLabel.slice(0, 2) }}
					</DisclosureButton>
					<transition
						enter-active-class="po-transition po-duration-100 po-ease-out"
						enter-from-class="po-transform po-scale-95 po-opacity-0"
						enter-to-class="po-transform po-scale-100 po-opacity-100"
						leave-active-class="po-transition po-duration-75 po-ease-out"
						leave-from-class="po-transform po-scale-100 po-opacity-100"
						leave-to-class="po-transform po-scale-95 po-opacity-0"
					>
						<DisclosurePanel>
							<!--
									Emits the button url when it’s clicked
									@event button-click
							-->
							<ul class="po-mt-2 po-mb-5">
								<template v-for="item in filterApps" :key="item.name">
									<SdebarItem
										:item="item"
										:sidebarOpen="sidebarOpen"
										:hideSidebarItemLabel="hideSidebarItemLabel"
										:currRoute="currRoute"
										type="app"
										@item-click="sidebarItemClick"
									/>
								</template>
							</ul>
						</DisclosurePanel>
					</transition>
				</Disclosure>
			</template>
		</div>
		<ul
			v-if="hasFeedback"
			class="po-mt-2 po-shrink-0 po-mb-2 po-border-t po-border-slate-200 po-pt-2"
		>
			<li>
				<!-- <button @click="$emit('button-click', 'feedback-button')" class="shell-sidebar--item" title="Go to feedback"> -->
				<PoTooltip
					:text="genToolTip('Feedback')"
					placement="right"
					strategy="fixed"
				>
					<FeedbackForm
						:sidebar-open="sidebarOpen"
						:hide-sidebar-item-label="hideSidebarItemLabel"
					/>
				</PoTooltip>
			</li>
		</ul>
	</aside>
</template>

<script lang="ts">
export default {
	name: "PoSidebarDrawer",
};
</script>
<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ref, computed, onMounted, onBeforeUnmount } from "vue";
import { PoTooltip } from "../";
import useEventBus from "../../composables/useEventBus";
import type { HeroIcon, AppListItem } from "../../../types/Types";
import FeedbackForm from "./feedbackForm.vue";
import SdebarItem from "./sidebarItem.vue";

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

const hideSidebarItemLabel = ref<boolean>(false);
const showSidebarGroupLabel = ref<boolean>(true);

const emit = defineEmits(["button-click", "app-click"]);

const handleResize = () => {
	checkIfIsMobile();
};

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

onMounted(() => {
	window.addEventListener("resize", handleResize);

	checkIfIsMobile();
});

interface sidebarItemClickObject {
	actionType: "button-click" | "app-click";
	action: string;
}

function sidebarItemClick({ actionType, action }: sidebarItemClickObject) {
	emit(actionType, action);

	if (isMobile.value) {
		useEventBus.emit("sidebarOpen", false);
	}
}

function genToolTip(tip: string) {
	return !sidebarOpen.value ? tip : "";
}

function checkIfIsMobile() {
	screenWidth.value = window.innerWidth;

	if (screenWidth.value <= 1024) {
		isMobile.value = true;
		useEventBus.emit("sidebarOpen", false);
	} else {
		isMobile.value = false;
	}
}

onBeforeUnmount(() => {
	window.removeEventListener("resize", handleResize);
});

// emitted from topbar component
useEventBus.on("sidebarOpen", (val) => {
	if (typeof val === "boolean") {
		sidebarOpen.value = val;

		if (val) {
			hideSidebarItemLabel.value = false;
			setTimeout(() => {
				showSidebarGroupLabel.value = true;
			}, 150);
		} else {
			showSidebarGroupLabel.value = false;
			setTimeout(() => {
				hideSidebarItemLabel.value = true;
			}, 320);
		}
	}
});
</script>
