<template>
	<nav
		class="po-bg-mpao-blue po-fixed po-top-0 po-left-0 po-right-0 po-w-full po-z-50 po-flex"
	>
		<div class="po-shrink-0 po-px-3 po-pt-3">
			<!-- <label
				for="sidebar-drawer-toggle"
				role="button"
				class="genie-effect po-flex po-items-center po-justify-center po-bg-white/10 po-rounded-full po-w-10 po-h-10 po-select-none po-text-slate-100"
			>
				<Bars3Icon class="po-w-6 po-fill-current" />
			</label> -->
			<button
				for="sidebar-drawer-toggle"
				role="button"
				class="genie-effect po-flex po-items-center po-justify-center po-bg-white/10 po-rounded-full po-w-10 po-h-10 po-select-none po-text-slate-100"
				@click="toggleSidebar"
			>
				<!-- <Bars3Icon class="po-w-6 po-fill-current" /> -->
				<span
					class="po-flex po-flex-col po-justify-center po-items-center po-w-5 po-h-5 po-space-y-[3px]"
				>
					<span
						class="po-block po-h-[2px] po-rounded-full po-bg-slate-100 po-transition-all po-duration-150 po-ease-in-out"
						:class="[
							{ 'po-w-5': !isSidebarOpen },
							{ 'po-w-[3px]': isSidebarOpen },
						]"
					></span>
					<span
						class="po-block po-h-[2px] po-rounded-full po-bg-slate-100 po-transition-all po-duration-150 po-ease-in-out"
						:class="[
							{ 'po-w-5': !isSidebarOpen },
							{ 'po-w-[3px]': isSidebarOpen },
						]"
					></span>
					<span
						class="po-block po-h-[2px] po-rounded-full po-bg-slate-100 po-transition-all po-duration-150 po-ease-in-out"
						:class="[
							{ 'po-w-5': !isSidebarOpen },
							{ 'po-w-[3px]': isSidebarOpen },
						]"
					></span>
				</span>
			</button>
		</div>
		<div class="po-mx-auto po-max-w-full po-pr-4 po-grow sm:po-pr-4">
			<div
				class="po-flex po-relative po-h-16 po-items-center po-justify-between po-space-x-12"
			>
				<PoAppIcon :app-name="appName">
					<template v-slot:icon>
						<slot name="appIcon"
							><component v-if="appIcon" :is="appIcon"></component
						></slot>
					</template>
				</PoAppIcon>

				<PoSearchBar
					v-if="hasSearch"
					@query="PassQueryToParent"
					@onClear="PassSearchClearToParent"
					:current-query="currentQuery"
					:show-tray="showSearchTray"
				>
					<slot name="searchTray"></slot>
				</PoSearchBar>

				<div class="po-flex po-items-center po-space-x-3">
					<span
						v-if="hasSearch"
						class="po-block po-w-6 po-text-slate-100 md:po-hidden"
						role="button"
					>
						<MagnifyingGlassIcon class="po-stroke-current" />
					</span>
					<PoNotificationHub
						:notifications="notifications"
						:has-new-notifications="hasNewNotifications"
					/>
					<PoAppTray :app-list="appList" :open-in-new-tab="true" />
					<PoProfileSwitcher
						:user-object="userObject"
						:avatar="profileAvatar"
						:logo="profileLogo"
						@button-click="handleProfileSwitcherClick"
					/>
				</div>
			</div>
		</div>
	</nav>
</template>

<script lang="ts">
export default {
	name: "PoTopBar",
};
</script>
<script setup lang="ts">
import { watch, ref, toRefs, onMounted } from "vue";
import { MagnifyingGlassIcon, Bars3Icon } from "@heroicons/vue/24/outline";
import useEventBus from "../../composables/useEventBus";

import type {
	UserObject,
	Notification,
	AppListItem,
} from "../../../types/Types";

import {
	PoAppIcon,
	PoSearchBar,
	PoAppTray,
	PoNotificationHub,
	PoProfileSwitcher,
} from "../";

interface Props {
	currentQuery?: string;
	appName?: string;
	hasSearch?: boolean;
	showSearchTray?: boolean;
	appList?: AppListItem[] | null;
	notifications?: Notification[] | null;
	hasNewNotifications?: boolean;
	userObject?: UserObject | null;
	avatar?: string;
	logo?: string;
	appIcon?: any;
}

const props = withDefaults(defineProps<Props>(), {
	/**
	 * Search Query
	 */
	currentQuery: "",
	/**
	 * Name of the app
	 */
	appName: "Pension App",
	/**
	 * If topbar has
	 */
	hasSearch: true,
	/**
	 * Show/hide search tray. Default: false
	 */
	showSearchTray: false,
	/**
	 * List of apps for app tray
	 */
	appList: null,
	/**
	 * List of notifications for notifications hub
	 */
	notifications: null,
	/**
	 * Toggle new notification indicator
	 */
	hasNewNotifications: false,
	/**
	 * User object
	 */
	userObject: null,
	/**
	 * Avatar
	 */
	avatar: "",
	/**
	 * Organisation logo
	 */
	logo: "",
	/**
	 * App Icon
	 */
	appIcon: null,
});

const profileAvatar = ref("");
const profileLogo = ref("");
const isSidebarOpen = ref<boolean>(true);

const { avatar, logo } = toRefs(props);

watch(avatar, () => {
	profileAvatar.value = avatar.value;
});
watch(logo, () => {
	profileLogo.value = logo.value;
});

const emit = defineEmits(["query", "profileSwitcherClick", "onSearchClear"]);

onMounted(() => {
	const storedValue = localStorage.getItem("isSidebarOpen");
	if (storedValue !== null) {
		isSidebarOpen.value = JSON.parse(storedValue);

		// emit sidebar open event for all components to listen
		useEventBus.emit("sidebarOpen", isSidebarOpen.value);
	}
});

function handleProfileSwitcherClick(item: object) {
	emit("profileSwitcherClick", item);
}

function PassQueryToParent(value: string) {
	const newVal = value;
	emit("query", newVal);
}
function PassSearchClearToParent(value: boolean) {
	const newVal = value;
	emit("onSearchClear", newVal);
}

function toggleSidebar() {
	isSidebarOpen.value = !isSidebarOpen.value;
	// emit sidebar open event for all components to listen
	useEventBus.emit("sidebarOpen", isSidebarOpen.value);

	localStorage.setItem("isSidebarOpen", JSON.stringify(isSidebarOpen.value));
}

// emitted from sidebar and other places
useEventBus.on("sidebarOpen", (val) => {
	if (typeof val === "boolean") {
		isSidebarOpen.value = val;
	}
});
</script>
