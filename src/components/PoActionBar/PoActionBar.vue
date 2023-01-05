<template>
    <section class="shell-content--action-bar">
        <nav class="action-bar__nav">
            <span
                v-for="item in items"
                @click="$emit('button-click', item.label)"
                class="action-bar__nav_link cursor-pointer"
            >
                <component :is="heroIcons[item.icon]"  class="stroke-current w-5 h-5" />
                <span class="action-bar__nav_label">{{ item.label }}</span>
            </span>
        </nav>
        <nav v-if="showBackButton" class="shrink-0 flex space-x-1">
            <span @click="$emit('button-click', 'back')" class="action-bar__nav_link cursor-pointer">
                <component :is="heroIcons['ArrowUturnLeftIcon']"  class="stroke-current w-5 h-5" />
            </span>
        </nav>
    </section>
</template>

<script setup>
import * as heroIcons from '@heroicons/vue/24/outline'

defineProps({
    items: {
        type: Array,
        default: null
    },
    showBackButton: {
        type: Boolean,
        default: true
    }
});
</script>