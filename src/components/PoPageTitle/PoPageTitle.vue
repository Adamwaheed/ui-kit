<template>
    <div class="flex items-center space-x-1">
        <h1 class="text-xl font-semibold text-slate-800 grow">{{ label }}</h1>
        <!--
            If pagination is on Emits 'next' or 'prev' when nav buttons are clicked, Emits 'print' when print btn is clicked and 'filter' when filter btn is clicked
            @event button-click
        -->
        <button v-if="showFilter" @click="$emit('button-click', 'filter'); filterOn = !filterOn" :class="[' p-2 rounded-md hover:bg-slate-200 transition-colors duration-75 ease-in-out', { 'text-mpao-orange hover:text-mpao-orange' : filterOn }, { 'text-slate-600 hover:text-mpao-blue' : !filterOn }]">
            <FunnelIcon class="w-4 stroke-current" />
        </button>
        <button v-if="showPrint" @click="$emit('button-click', 'print')" class="text-slate-600 p-2 rounded-md hover:bg-slate-200 hover:text-mpao-blue transition-colors duration-75 ease-in-out">
            <PrinterIcon class="w-4 stroke-current" />
        </button>
        <span v-if="showFilter && showPagination || showPrint && showPagination" class="border-l border-slate-400 h-3 w-3 ml-1">&nbsp;</span>
        <PoPagination v-if="showPagination" :pagination="pagination" />
        
    </div>
</template>

<script>
export default {
  name: "PoPageTitle",
};
</script>
<script setup>
import { ChevronLeftIcon, ChevronRightIcon, FunnelIcon, PrinterIcon } from '@heroicons/vue/24/outline';

import PoPagination from '../PoPagination/PoPagination.vue';

import { ref } from 'vue';

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

const filterOn = ref(false);
</script>