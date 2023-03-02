<template>
  <section
    v-if="(items !== null && items.length > 0) || showBackButton"
    class="shell-content--action-bar"
  >
    <nav class="action-bar__nav">
      <!--
                Emits the button label when it’s clicked, You can listen to it and switch accordingly. For the back button it always emmits the string ‘back’
                @event button-click
            -->
      <span
        v-for="item in items"
        @click="$emit('button-click', item.label)"
        :class="[
          { 'action-bar__nav_highlighted': item.highlighted },
          { 'action-bar__nav_danger': item.danger },
        ]"
        class="action-bar__nav_link"
      >
        <component
          :is="item.icon"
          class="po-stroke-current po-w-5 po-h-5 po-stroke-2"
        />
        <span class="action-bar__nav_label po-font-medium">{{
          item.label
        }}</span>
      </span>
    </nav>
    <nav v-if="showBackButton" class="po-shrink-0 po-flex po-space-x-1">
      <!--
                Emits the button label when it’s clicked, You can listen to it and switch accordingly. For the back button it always emmits the string ‘back’
                @event button-click
            -->
      <span @click="$emit('button-click', 'back')" class="action-bar__nav_link">
        <span class="action-bar__nav_label po-font-medium">Go Back</span>
        <component
          :is="ArrowUturnLeftIcon"
          class="po-stroke-current po-w-5 po-h-5 po-stroke-2"
        />
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
import { ArrowUturnLeftIcon } from "@heroicons/vue/24/outline";

defineProps({
  /**
   * List of Buttons to display on the Action Bar.
   * As an icon, you should pass the name of a HeroIcon
   */
  items: {
    type: Array,
    default: null,
  },
  /**
   * The backbutton is optional. So you can either show or hide it.
   */
  showBackButton: {
    type: Boolean,
    default: false,
  },
  /**
   * Current route name to highlight current page when used as tabs.
   */
  currPageRoute: {
    type: String,
    default: "",
  },
});
</script>
