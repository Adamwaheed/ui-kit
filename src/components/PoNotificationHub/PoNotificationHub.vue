<template>
    <div class="relative">
        <label for="notifications-menu-toggle" class="block w-6 text-slate-100 genie-effect" role="button">
            <svg class="stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
        </label>
        <input type="checkbox" name="" class="hidden peer/apps" role="none" id="notifications-menu-toggle">
        <div class="invisible z-10 absolute -left-[19rem] top-[35px] opacity-0 bg-white shadow-lg rounded-md w-96 p-4 border border-slate-200 pt-5 transition-all duration-100 ease-linear sm:left-auto sm:right-0 peer-checked/apps:visible peer-checked/apps:top-[45px] peer-checked/apps:opacity-100">
            <ul class="space-y-2 p-2">
                <li
                    class="space-y-2 p-2"
                    v-for="notification in notifications"
                >
                    <span class="flex items-center justify-between">
                        <p class="text-sm font-semibold text-slate-700 grow flex space-x-2 items-center"><span v-if="1 === notification.status" class="w-2 h-2 rounded-full shrink-0 bg-mpao-orange"></span><span class="grow">{{ notification.name }}</span></p>
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

<script setup>
defineProps({
  notifications: {
    type: Array,
    default: []
  }
});
</script>