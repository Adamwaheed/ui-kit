<template>
    <div v-if="null !== pagination" class="po-flex po-items-center">
        <span class="po-text-xs po-font-normal po-text-slate-500 po-pr-2">{{ pagination.label }}</span>
        <!--
            Emits 'next' or 'prev' when nav buttons are clicked
            @event button-click
        -->
        <a v-if="null !== pagination.nextLink" :href="pagination.nextLink" title="Previous" @click="$emit('button-click', 'prev')" class="po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out">
            <ChevronLeftIcon class="po-w-4 po-stroke-current" />
        </a>
        <a v-if="null !== pagination.prevLink" :href="pagination.prevLink" title="Next" @click="$emit('button-click', 'next')" class="po-text-slate-600 po-p-2 po-rounded-md hover:po-bg-slate-200 hover:po-text-mpao-blue po-transition-colors po-duration-75 po-ease-in-out">
            <ChevronRightIcon class="po-w-4 po-stroke-current" />
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