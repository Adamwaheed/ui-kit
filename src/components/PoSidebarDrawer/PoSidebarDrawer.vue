<template>
    <input type="checkbox" name="" class="hidden shell-sidebar--toggle" role="none" id="sidebar-drawer-toggle" checked aria-checked="true">
    <aside class="shell-sidebar">
        <div v-for="group in content">
            <span class="shell-sidebar--section">{{ group.groupName }}</span>
            <ul class="shell-sidebar--menu">
                <li v-for="item in group.items">
                    <a :href="item.url" :class="['shell-sidebar--item', { 'active' : item.isActive }]">
                        <span class="shell-sidebar--icon">
                            <component :is="heroIcons[item.icon]"  class="stroke-current w-5 h-5" />
                        </span>
                        <span class="shell-sidebar--label">{{ item.name }}</span>
                    </a>
                </li>
                
            </ul>

        </div>
    </aside>
</template>

<script setup>
import * as heroIcons from '@heroicons/vue/24/outline'

defineProps({
    content: {
        type: Array,
        default: []
    },
});
</script>