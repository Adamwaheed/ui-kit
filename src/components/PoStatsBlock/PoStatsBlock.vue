<template>
  <div :class="['po-grid po-gap-5', numberOfCols]">
    <div
      v-for="item in items"
      class="
        po-bg-white po-relative po-group po-rounded-xl
        focus-within:po-ring-2
        focus-within:po-ring-inset
        focus-within:po-ring-indigo-500
      "
    >
      <span
        class="
          po-block po-p-4 po-transition-colors po-duration-75 po-ease-linear
        "
      >
        <div class="po-flex po-items-start po-space-x-2">
          <div>
            <span
              :class="[
                'po-inline-flex po-p-2 po-rounded-md',
                item.bgColor,
                item.iconColor,
              ]"
            >
              <component :is="item.icon" class="po-w-4 po-h-4" />
            </span>
          </div>
          <div>
            <div class="po-flex po-items-start po-space-x-1">
              <span
                class="po-block po-text-2xl po-font-light po-text-slate-600"
                >{{ item.value }}</span
              >
              <span
                v-if="item.diff"
                class="po-text-sm po-text-green-500 po-font-medium po-pt-1"
                >{{ item.diff }}</span
              >
            </div>
            <h4 class="po-text-sm po-tracking-wide po-text-slate-500">
              {{ item.label }}
            </h4>
          </div>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PoStatsBlock",
};
</script>
<script setup>
const props = defineProps({
  /**
   * Items
   */
  items: {
    type: Array,
    default: null,
  },
  /**
   * tailwind grid cols default: grid-cols-1 lg:grid-cols-3
   */
  numberOfCols: {
    type: String,
    default: "po-grid-cols-1 lg:po-grid-cols-3",
  },
});
</script>
