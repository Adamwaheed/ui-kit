<template>
    <div class="flex items-center">
        <h1 class="text-xl font-semibold text-slate-800 grow">{{ label }}</h1>
        <div v-if="showPagination" class="flex items-center">
            <span class="text-xs font-normal text-slate-500 pr-2">{{ pagination.label }}</span>
            <!--
                Emits 'next' or 'prev' when nav buttons are clicked
                @event button-click
            -->
            <a :href="pagination.nextLink" @click="$emit('button-click', 'next')" class="text-slate-600 p-2 rounded-md hover:bg-slate-200 hover:text-mpao-blue transition-colors duration-75 ease-in-out">
                <svg class="w-4 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </a>
            <a :href="pagination.prevLink" @click="$emit('button-click', 'prev')" class="text-slate-600 p-2 rounded-md hover:bg-slate-200 hover:text-mpao-blue transition-colors duration-75 ease-in-out">
                <svg class="w-4 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
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
     * Pagination Object { label: 'Page 1 of 2', nextLink: './next', prevLink: './prev' }
     */
    pagination: {
        type: Object,
        default: null
    }
});
</script>