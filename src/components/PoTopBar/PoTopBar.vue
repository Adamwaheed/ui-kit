<template>
	<!-- notifications -->
	<div
		aria-live="assertive"
		class="po-pointer-events-none po-fixed po-inset-0 po-flex po-items-start po-px-4 po-py-6 sm:po-p-6 po-z-[60]"
	>
		<div
			class="po-flex po-w-full po-flex-col po-items-end po-space-y-4 sm:po-items-end po-pt-[55px]"
			id="po-notifications-alert"
		></div>
	</div>
	<nav class="po-bg-mpao-blue po-fixed po-top-0 po-w-full po-z-50 po-flex">
		<div class="po-shrink-0 po-px-3 po-pt-3">
			<label
				for="sidebar-drawer-toggle"
				role="button"
				class="genie-effect po-flex po-items-center po-justify-center po-bg-[#2e5266] po-rounded-full po-w-10 po-h-10 po-select-none po-text-slate-100"
			>
				<Bars3Icon class="po-w-6 po-fill-current" />
			</label>
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
				/>

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
import { watch, ref, toRefs } from "vue";
import { MagnifyingGlassIcon, Bars3Icon } from "@heroicons/vue/24/outline";

import type { UserObject } from "../../../types/UserObject";
import type { Notification } from "../../../types/Notification";
import type { AppListItem } from "../../../types/AppListItem";

interface Props {
	currentQuery?: string;
	appName?: string;
	hasSearch?: boolean;
	appList?: AppListItem[] | null;
	notifications?: Notification[] | null;
	hasNewNotifications?: boolean;
	userObject?: UserObject | null;
	avatar?: string;
	logo?: string;
	appIcon?: any;
}

import {
	PoAppIcon,
	PoSearchBar,
	PoAppTray,
	PoNotificationHub,
	PoProfileSwitcher,
} from "../";

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

const { avatar, logo } = toRefs(props);

watch(avatar, () => {
	profileAvatar.value = avatar.value;
});
watch(logo, () => {
	profileLogo.value = logo.value;
});

const emit = defineEmits(["query", "profileSwitcherClick", "onSearchClear"]);

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
</script>
