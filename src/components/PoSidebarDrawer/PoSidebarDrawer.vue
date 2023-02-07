<template>
    <input type="checkbox" name="" class="po-hidden shell-sidebar--toggle" role="none" id="sidebar-drawer-toggle" checked aria-checked="true">
    <aside class="shell-sidebar">
        <div v-for="group in content">
            <span class="shell-sidebar--section">{{ group.groupName }}</span>
            <ul class="shell-sidebar--menu">
                <li v-for="item in group.items">
                    <!--
                        Emits the button url when it’s clicked
                        @event button-click
                    -->
                    <button @click="$emit('button-click', item.url)" :class="['shell-sidebar--item', { 'active' : item.url == currRoute }]" :title="`Go to ${item.label}`">
                        <span class="shell-sidebar--icon">
                            <component :is="item.icon"  class="po-stroke-current po-w-4 po-h-4" />
                        </span>
                        <span class="shell-sidebar--label">{{ item.label }}</span>
                    </button>
                </li>
                
            </ul>

        </div>
    </aside>
</template>

<script>
export default {
  name: "PoSidebarDrawer",
};
</script>
<script setup>

defineProps({
    /**
     * Array of  sidebar menu items
     */
    content: {
        type: Array,
        default: null
    },
    /**
     * Current route path
     */
    currRoute: {
        type: String,
        default: "/"
    }
});

const emit = defineEmits(['button-click']);

</script>