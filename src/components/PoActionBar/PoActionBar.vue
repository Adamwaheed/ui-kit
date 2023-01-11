<template>
    <section class="shell-content--action-bar">
        <nav class="action-bar__nav">
            <!--
                Emits the button label when it’s clicked, You can listen to it and switch accordingly. For the back button it always emmits the string ‘back’
                @event button-click
            -->
            <span
                v-for="item in items"
                @click="$emit('button-click', item.label)"
                class="action-bar__nav_link cursor-pointer"
            >
                <component :is="item.icon"  class="stroke-current w-5 h-5" />
                <span class="action-bar__nav_label">{{ item.label }}</span>
            </span>
        </nav>
        <nav v-if="showBackButton" class="shrink-0 flex space-x-1">
            <!--
                Emits the button label when it’s clicked, You can listen to it and switch accordingly. For the back button it always emmits the string ‘back’
                @event button-click
            -->
            <span @click="$emit('button-click', 'back')" class="action-bar__nav_link cursor-pointer">
                <component :is="ArrowUturnLeftIcon"  class="stroke-current w-5 h-5" />
            </span>
        </nav>
    </section>
</template>

<script>
export default {
  name: "PoActionBar",
};
</script>
<script setup>
import { ArrowUturnLeftIcon }  from '@heroicons/vue/24/outline'

defineProps({
    /**
     * List of Buttons to display on the Action Bar.
     * As an icon, you should pass the name of a HeroIcon
     */
    items: {
        type: Array,
        default: null
    },
    /**
     * The backbutton is optional. So you can either show or hide it.
     */
    showBackButton: {
        type: Boolean,
        default: true
    }
});
</script>