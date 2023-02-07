<template>
    <input type="checkbox" name="" class="po-hidden shell-sidebar--toggle" role="none" id="sidebar-drawer-toggle" checked aria-checked="true">
    <aside class="shell-sidebar">
        <div v-for="group in content">
            <Disclosure v-slot="{ open }" :defaultOpen="true">
                <DisclosureButton
                :class="open ? '' : 'po-mb-3'"
                class="shell-sidebar--section po-w-full po-text-left"
                >
                {{ group.groupName }}
                </DisclosureButton>
                <transition
                    enter-active-class="po-transition po-duration-100 po-ease-out"
                    enter-from-class="po-transform po-scale-95 po-opacity-0"
                    enter-to-class="po-transform po-scale-100 po-opacity-100"
                    leave-active-class="po-transition po-duration-75 po-ease-out"
                    leave-from-class="po-transform po-scale-100 po-opacity-100"
                    leave-to-class="po-transform po-scale-95 po-opacity-0"
                >
                    <DisclosurePanel>
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
                    </DisclosurePanel>
                </transition>
            </Disclosure>
        </div>
    </aside>
</template>

<script>
export default {
  name: "PoSidebarDrawer",
};
</script>
<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';

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