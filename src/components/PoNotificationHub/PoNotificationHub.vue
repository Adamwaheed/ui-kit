<template>
    <div class="relative">
        <label for="notifications-menu-toggle" class="block w-6 text-slate-100 genie-effect relative" role="button">
            <span v-if="hasNewNotifications" class="absolute right-0 w-3 h-3 bg-mpao-orange rounded-full border-2 border-mpao-blue"></span>
            <BellIcon class="stroke-current" />
        </label>
        <input type="checkbox" name="" class="hidden peer/apps" role="none" id="notifications-menu-toggle">
        <div class="invisible z-10 absolute -left-[19rem] top-[35px] opacity-0 bg-white shadow-lg rounded-md w-96 p-4 border border-slate-200 pt-5 transition-all duration-100 ease-linear sm:left-auto sm:right-0 peer-checked/apps:visible peer-checked/apps:top-[45px] peer-checked/apps:opacity-100">
            <ul class="space-y-2 p-2">
                <li
                    class="space-y-2 p-2"
                    v-for="notification in notifications"
                >
                    <span class="flex items-center justify-between">
                        <p class="text-sm font-semibold text-slate-700 grow flex space-x-2 items-center"><span v-if="!notification.seen" class="w-2 h-2 rounded-full shrink-0 bg-mpao-orange"></span><span class="grow">{{ notification.name }}</span></p>
                        <span class="text-xs font-normal text-slate-400 shrink-0">{{ notification.time }}</span>
                    </span>
                    <span class="block text-sm text-slate-500 pb-3 border-b border-slate-200">
                        {{ notification.text }}
                    </span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: "PoNotificationHub",
};
</script>
<script setup>
import { BellIcon } from '@heroicons/vue/24/outline'
defineProps({
    /**
     * List of notifications to display
     */
    notifications: {
        type: Array,
        default: null
    },
    /**
     * True or False if there is/are a new notification/s
     */
    hasNewNotifications: {
        type: Boolean,
        default: false
    },
});
</script>