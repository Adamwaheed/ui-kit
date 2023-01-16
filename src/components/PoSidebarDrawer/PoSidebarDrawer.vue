<template>
    <input type="checkbox" name="" class="hidden shell-sidebar--toggle" role="none" id="sidebar-drawer-toggle" checked aria-checked="true">
    <aside class="shell-sidebar">
        <div v-for="group in content">
            <span class="shell-sidebar--section">{{ group.groupName }}</span>
            <ul class="shell-sidebar--menu">
                <li v-for="item in group.items">
                    <a :href="item.url" :class="['shell-sidebar--item', { 'active' : item.url == currRoute }]" :title="`Go to ${item.label}`">
                        <span class="shell-sidebar--icon">
                            <component :is="item.icon"  class="stroke-current w-4 h-4" />
                        </span>
                        <span class="shell-sidebar--label">{{ item.label }}</span>
                    </a>
                </li>
                
            </ul>

        </div>
        <div class="absolute bottom-0 left-0 right-0 z-10 p-5 pb-3">
            <img class="h-10" src="https://pension.gov.mv/asset/image/enlgish_website_logo.svg" alt="Pension Office logo">
            <div class="grid grid-cols-2 gap-2 mt-5">
                <img class="" src="https://pension.gov.mv/asset/image/iso_logo.jpg" alt="">
                <img class="" src="https://pension.gov.mv/asset/image/en-ccc-2020-issa.png" alt="">
            </div>
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

</script>