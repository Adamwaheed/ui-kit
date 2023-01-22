<template>
    <div v-if="null !== pagination" class="flex items-center">
        <span class="text-xs font-normal text-slate-500 pr-2">{{ pagination.label }}</span>
        <!--
            Emits 'next' or 'prev' when nav buttons are clicked
            @event button-click
        -->
        <a :href="pagination.nextLink" @click="$emit('button-click', 'next')" class="text-slate-600 p-2 rounded-md hover:bg-slate-200 hover:text-mpao-blue transition-colors duration-75 ease-in-out">
            <ChevronLeftIcon class="w-4 stroke-current" />
        </a>
        <a :href="pagination.prevLink" @click="$emit('button-click', 'prev')" class="text-slate-600 p-2 rounded-md hover:bg-slate-200 hover:text-mpao-blue transition-colors duration-75 ease-in-out">
            <ChevronRightIcon class="w-4 stroke-current" />
        </a>
    </div>
</template>

<script>
export default {
  name: "PoPagination",
};
</script>
<script setup>

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline';

defineProps({
    /**
     * Pagination Object { label: 'Page 1 of 2', nextLink: './next', prevLink: './prev' }
     */
    pagination: {
        type: Object,
        default: null
    }
});

</script>