<template>
  <nav class="po-bg-mpao-blue po-fixed po-top-0 po-w-full po-z-50 po-flex">
    <div class="po-shrink-0 po-px-3 po-pt-3">
      <label
        for="sidebar-drawer-toggle"
        role="button"
        class="
          genie-effect
          po-flex
          po-items-center
          po-justify-center
          po-bg-[#2e5266]
          po-rounded-full
          po-w-10
          po-h-10
          po-select-none
          po-text-slate-100
        "
      >
        <Bars3Icon class="po-w-6 po-fill-current" />
      </label>
    </div>
    <div class="po-mx-auto po-max-w-full po-px-4 po-grow sm:po-px-4">
      <div class="po-flex po-h-16 po-items-center po-justify-between po-space-x-12">
        <PoAppIcon :app-name="appName">
          <template v-slot:icon>
            <slot name="appIcon"><component v-if="appIcon" :is="appIcon"></component></slot>
          </template>
        </PoAppIcon>

        <PoSearchBar v-if="hasSearch" @query="PassQueryToParent" />

        <div class="po-flex po-items-center po-space-x-3">
          <span
            v-if="hasSearch"
            class="po-block po-w-6 po-text-slate-100 md:po-hidden"
            role="button"
          >
          <MagnifyingGlassIcon class="po-stroke-current" />
          </span>
          <PoNotificationHub :notifications="notifications" :has-new-notifications="hasNewNotifications" />
          <PoAppTray :app-list="appList" />
          <PoProfileSwitcher :profile-switcher-data="profileSwitcherData" @button-click="handleProfileSwitcherClick" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "PoTopBar",
};
</script>
<script setup>
import { MagnifyingGlassIcon, Bars3Icon } from "@heroicons/vue/24/outline";

import {
  PoAppIcon,
  PoSearchBar,
  PoAppTray,
  PoNotificationHub,
  PoProfileSwitcher,
} from "../";

defineProps({
  /**
   * Search Query
   */
  searchQuery: String,
  /**
   * Name of the app
   */
  appName: {
    type: String,
    default: "Pension App",
  },
  /**
   * If topbar has
   */
  hasSearch: {
    type: Boolean,
    default: true,
  },
  /**
   * List of apps for app tray
   */
  appList: {
    type: Array,
    default: null,
  },
  /**
   * List of notifications for notifications hub
   */
  notifications: {
    type: Array,
    default: null,
  },
  /**
   * Toggle new notification indicator
   */
  hasNewNotifications: {
    type: Boolean,
    default: false
  },
  /**
   * Profile switcher object
   */
  profileSwitcherData: {
    type: Object,
    default: null,
  },
  /**
   * App Icon
   */
   appIcon: null
});

const emit = defineEmits(['query', 'profileSwitcherClick']);

function handleProfileSwitcherClick(item) {
  emit('profileSwitcherClick', item);
}

function PassQueryToParent(value) {
  const newVal = value;
  emit("query", newVal);
}
</script>
