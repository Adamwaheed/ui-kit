<template>
  <div
    class="mt-5 flex flex-col items-center justify-center px-5 py-8 space-y-3"
  >
    <component v-if="icon" :is="icon" class="w-10 h-10 stroke-slate-300" />
    <span class="text-sm font-medium text-slate-500 text-center">{{
      description
    }}</span>
    <!-- 
    Empty state action button
    @slot action
    -->
    <slot name="action"></slot>
  </div>
</template>

<script>
export default {
  name: "PoEmpty",
};
</script>
<script setup>
defineProps({
  /**
   * State description
   */
  description: {
    type: String,
    default: "Nothing to display",
  },
  /**
   * Heroicon
   */
  icon: null,
});
</script>
