<template>
    <div class="flex items-center space-x-1">
        <h1 class="text-xl font-semibold text-slate-800 grow">{{ label }}</h1>
        <a v-if="showFilter" href="pagination.prevLink" @click="$emit('button-click', 'filter')" class="text-slate-600 p-2 rounded-md hover:bg-slate-200 hover:text-mpao-blue transition-colors duration-75 ease-in-out">
            <FunnelIcon class="w-4 stroke-current" />
        </a>
        <a v-if="showPrint" href="#" @click="$emit('button-click', 'print')" class="text-slate-600 p-2 rounded-md hover:bg-slate-200 hover:text-mpao-blue transition-colors duration-75 ease-in-out">
            <PrinterIcon class="w-4 stroke-current" />
        </a>
        <span v-if="showFilter || showPrint" class="border-l border-slate-400 h-3 w-3">&nbsp;</span>
        <div v-if="showPagination" class="flex items-center">
            <span class="text-xs font-normal text-slate-500 pr-2">{{ pagination.label }}</span>
            <!--
                Emits 'next' or 'prev' when nav buttons are clicked, Emits 'print' when print btn is clicked and 'filter' when filter btn is clicked
                @event button-click
            -->
            <a :href="pagination.nextLink" @click="$emit('button-click', 'next')" class="text-slate-600 p-2 rounded-md hover:bg-slate-200 hover:text-mpao-blue transition-colors duration-75 ease-in-out">
                <ChevronLeftIcon class="w-4 stroke-current" />
            </a>
            <a :href="pagination.prevLink" @click="$emit('button-click', 'prev')" class="text-slate-600 p-2 rounded-md hover:bg-slate-200 hover:text-mpao-blue transition-colors duration-75 ease-in-out">
                <ChevronRightIcon class="w-4 stroke-current" />
            </a>
        </div>
        
    </div>
</template>

<script>
export default {
  name: "PoPageTitle",
};
</script>
<script setup>
import { ChevronLeftIcon, ChevronRightIcon, FunnelIcon, PrinterIcon } from '@heroicons/vue/24/outline';

defineProps({
    /**
     * Page title
     */
    label: {
        type: String,
        default: ""
    },
    /**
     * True or False show pagination
     */
    showPagination: {
        type: Boolean,
        default: false
    },
    /**
     * True or False show filter button
     */
    showFilter: {
        type: Boolean,
        default: false
    },
    /**
     * True or False show print button
     */
    showPrint: {
        type: Boolean,
        default: false
    },
    /**
     * Pagination Object { label: 'Page 1 of 2', nextLink: './next', prevLink: './prev' }
     */
    pagination: {
        type: Object,
        default: null
    }
});
</script>