<template>
	<aside
		class="po-flex po-flex-col po-px-3 po-pt-[78px] po-min-h-screen po-bg-white po-overflow-y-auto po-overflow-x-hidden po-transition-all po-duration-300 po-ease-in-out po-border-r po-border-slate-50 po-z-[49] po-fixed"
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
						:class="open ? '' : 'po-mb-3'"
						class="po-uppercase po-select-none po-text-xs po-font-semibold po-text-slate-400 po-ml-2 po-block po-w-full po-text-left"
					>
						{{ sidebarOpen ? group.groupName : group.groupName.slice(0, 2) }}
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
							<ul class="po-mt-2 po-mb-5">
								<li v-for="item in group.items" :key="item.label">
									<!--
                      Emits the button url when it’s clicked
                      @event button-click
                  -->
									<span>
										<PoTooltip
											:text="genToolTip(item.label)"
											placement="right"
											strategy="fixed"
										>
											<button
												v-if="!item.disabled"
												@click="sidebarItemClick('button-click', item.url)"
												:class="[
													'po-flex po-items-center po-w-full po-group po-space-x-4 po-px-2 po-py-3  po-transition-colors po-duration-100 po-ease-in-out po-rounded-lg po-outline-none po-ring-0',
													{
														'po-text-mpao-lightblue po-bg-slate-100 hover:po-bg-slate-100/50':
															item.url == currRoute,
													},
													{
														'po-text-slate-600 hover:po-text-mpao-lightblue hover:po-bg-slate-100':
															item.url !== currRoute,
													},
												]"
											>
												<span class="po-w-4">
													<component
														:is="item.icon"
														class="po-w-5 po-h-5 po-stroke-2"
														:class="[
															{
																'po-stroke-current group-hover:po-stroke-mpao-orange':
																	item.url !== currRoute,
															},
															{
																'po-stroke-mpao-orange': item.url == currRoute,
															},
														]"
													/>
												</span>
												<span
													class="po-text-sm po-leading-none po-font-medium po-shrink-0 po-text-left po-transition-opacity po-duration-150 po-ease-out"
													:class="[
														{ 'po-opacity-1': sidebarOpen },
														{ 'po-opacity-0': !sidebarOpen },
													]"
													>{{ item.label }}</span
												>
											</button>
										</PoTooltip>
									</span>
								</li>
							</ul>
						</DisclosurePanel>
					</transition>
				</Disclosure>
			</template>
		</div>
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

const emit = defineEmits(["button-click", "app-click"]);

const handleResize = () => {
	screenWidth.value = window.innerWidth;

	if (screenWidth.value <= 1024) {
		isMobile.value = true;
	} else {
		isMobile.value = false;
	}
};

onMounted(() => {
	window.addEventListener("resize", handleResize);
});

function sidebarItemClick(
	emitName: "button-click" | "app-click",
	action: string
) {
	emit(emitName, action);
	// toggleSidebar();
}

function genToolTip(tip: string) {
	return !sidebarOpen.value ? tip : "";
}

onBeforeUnmount(() => {
	window.removeEventListener("resize", handleResize);
});

useEventBus.on("sidebarOpen", (val) => {
	if (typeof val === "boolean") {
		sidebarOpen.value = val;
	}
});
</script>
