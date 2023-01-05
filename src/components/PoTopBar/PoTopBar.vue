<template>
    <nav class="bg-mpao-blue fixed top-0 w-full z-50 flex">
        <div class="shrink-0 px-3 pt-3">
            <label for="sidebar-drawer-toggle" role="button" class="genie-effect flex items-center justify-center bg-[#2e5266] rounded-full w-10 h-10 select-none text-slate-100">
                <Bars3Icon class="w-6 fill-current"  />
            </label>
        </div>
        <div class="mx-auto max-w-full px-4 grow sm:px-4">
            <div class="flex h-16 items-center justify-between space-x-12">

                <PoAppIcon app-name="Pension UI Kit">
                    <template v-slot:icon>
                        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 01.878.645 49.17 49.17 0 01.376 5.452.657.657 0 01-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 00-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 01-.595 4.845.75.75 0 01-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 01-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 01-.658.643 49.118 49.118 0 01-4.708-.36.75.75 0 01-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 005.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 00.659-.663 47.703 47.703 0 00-.31-4.82.75.75 0 01.83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 00.657-.642z" />
                        </svg>
                    </template>
                </PoAppIcon>

                <PoSearchBar v-if="hasSearch" @query="PassQueryToParent" />

                <div class="flex items-center space-x-3">
                    <span v-if="hasSearch" class="block w-6 text-slate-100 sm:hidden" role="button">
                        <svg class="stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </span>
                    <PoNotificationHub :notifications="notifications" />
                    <PoAppTray :app-list="appList" />
                    <PoProfileSwitcher :profile-switcher-data="profileSwitcherData" />
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { Bars3Icon } from '@heroicons/vue/24/outline'

import {
  PoAppIcon,
  PoSearchBar,
  PoAppTray,
  PoNotificationHub,
  PoProfileSwitcher
} from "../";

defineProps({
    searchQuery: String,
    hasSearch: {
        type: Boolean,
        default: true
    },
    appList: {
        type: Array,
        default: []
    },
    notifications: {
        type: Array,
        default: []
    },
    profileSwitcherData: {
        type: Object,
        default: []
    },
});

const emit = defineEmits(['query']);

function PassQueryToParent(value) {
    const newVal = value;
    emit("query", newVal);
}
</script>
