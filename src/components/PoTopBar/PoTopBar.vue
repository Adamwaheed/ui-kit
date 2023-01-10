<template>
  <nav class="bg-mpao-blue fixed top-0 w-full z-50 flex">
    <div class="shrink-0 px-3 pt-3">
      <label
        for="sidebar-drawer-toggle"
        role="button"
        class="
          genie-effect
          flex
          items-center
          justify-center
          bg-[#2e5266]
          rounded-full
          w-10
          h-10
          select-none
          text-slate-100
        "
      >
        <Bars3Icon class="w-6 fill-current" />
      </label>
    </div>
    <div class="mx-auto max-w-full px-4 grow sm:px-4">
      <div class="flex h-16 items-center justify-between space-x-12">
        <PoAppIcon :app-name="appName">
          <template v-slot:icon>
            <slot name="appIcon"></slot>
          </template>
        </PoAppIcon>

        <PoSearchBar v-if="hasSearch" @query="PassQueryToParent" />

        <div class="flex items-center space-x-3">
          <span
            v-if="hasSearch"
            class="block w-6 text-slate-100 sm:hidden"
            role="button"
          >
          <MagnifyingGlassIcon class="stroke-current" />
          </span>
          <PoNotificationHub :notifications="notifications" />
          <PoAppTray :app-list="appList" />
          <PoProfileSwitcher :profile-switcher-data="profileSwitcherData" />
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
    default: [],
  },
  /**
   * List of notifications for notifications hub
   */
  notifications: {
    type: Array,
    default: [],
  },
  /**
   * Profile switcher object
   */
  profileSwitcherData: {
    type: Object,
    default: [],
  },
  /**
   * SVG Icon
   */
  svgIcon: {
    type: String,
    default: ""
  }
});

const emit = defineEmits(["query"]);

function PassQueryToParent(value) {
  const newVal = value;
  emit("query", newVal);
}
</script>
