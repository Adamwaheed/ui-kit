<template>
    <Popover v-slot="{ open }" class="po-relative">
        <PopoverButton
            :class="open ? '' : 'text-opacity-90'"
            class="po-block po-w-6 po-text-slate-100 genie-effect po-relative po-z-50"
        >
            <span v-if="hasNewNotifications" class="po-absolute po-right-0 po-w-3 po-h-3 po-bg-mpao-orange po-rounded-full po-border-2 po-border-mpao-blue"></span>
            <BellIcon class="po-stroke-current" />
        </PopoverButton>
        <transition
            enter-active-class="po-transition po-duration-200 po-ease-out"
            enter-from-class="po-translate-y-1 po-opacity-0"
            enter-to-class="po-translate-y-0 po-opacity-100"
            leave-active-class="po-transition po-duration-150 po-ease-in"
            leave-from-class="po-translate-y-0 po-opacity-100"
            leave-to-class="po-translate-y-1 po-opacity-0"
        >
            <PopoverPanel
            class="po-space-y-1 po-z-10 po-absolute po-right-0 po-top-[47px] po-opacity-0 po-bg-white po-shadow-lg po-rounded-md po-w-96 po-p-4 po-border po-border-slate-200 po-pt-5 po-transition-all po-duration-100 po-ease-linear"
            >
                <ul class="po-space-y-2 po-p-2">
                    <li
                        class="po-space-y-2 po-p-2"
                        v-for="notification in notifications"
                    >
                        <span class="po-flex po-items-center po-justify-between">
                            <p class="po-text-sm po-font-semibold po-text-slate-700 po-grow po-flex po-space-x-2 po-items-center"><span v-if="!notification.seen" class="po-w-2 po-h-2 po-rounded-full po-shrink-0 po-bg-mpao-orange"></span><span class="po-grow">{{ notification.name }}</span></p>
                            <span class="po-text-xs po-font-normal po-text-slate-400 po-shrink-0">{{ notification.time }}</span>
                        </span>
                        <span class="po-block po-text-sm po-text-slate-500 po-pb-3 po-border-b po-border-slate-200">
                            {{ notification.text }}
                        </span>
                    </li>
                </ul>
            </PopoverPanel>
        </transition>
    </Popover>
</template>

<script>
export default {
  name: "PoNotificationHub",
};
</script>
<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
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