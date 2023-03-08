<template>
  <div class="po-flex po-items-center">
    <span class="po-text-sm po-font-medium po-text-slate-500 po-pr-2">{{
      label
    }}</span>
    <!--
            Emits 'next' or 'prev' when nav buttons are clicked
            @event button-click
        -->
    <button
      title="Previous"
      @click="prevClick"
      class="
        po-text-slate-600 po-p-2 po-rounded-md
        hover:po-bg-slate-200 hover:po-text-mpao-blue
        po-transition-colors po-duration-75 po-ease-in-out
      "
    >
      <ChevronLeftIcon class="po-w-4 po-stroke-current po-stroke-2" />
    </button>
    <button
      title="Next"
      @click="nextClick"
      class="
        po-text-slate-600 po-p-2 po-rounded-md
        hover:po-bg-slate-200 hover:po-text-mpao-blue
        po-transition-colors po-duration-75 po-ease-in-out
      "
    >
      <ChevronRightIcon class="po-w-4 po-stroke-current po-stroke-2" />
    </button>
  </div>
</template>

<script>
export default {
  name: "PoPagination",
};
</script>
<script setup>
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/outline";
import { computed } from "vue";

const props = defineProps({
  /**
   * Pagination Object { label: 'Page 1 of 2' } ... NO LONGER RECOMMENDED
   */
  pagination: {
    type: Object,
    default: null,
  },
  /**
   * Total number of pages
   */
  totalPages: {
    type: [String, Number],
    default: null,
  },
  /**
   * Current page
   */
  currentPage: {
    type: [String, Number],
    default: null,
  },
});

const emit = defineEmits(["button-click", "next-click", "prev-click"]);

function prevClick() {
  emit("button-click", "prev");
  emit("prev-click", true);
}

function nextClick() {
  emit("button-click", "next");
  emit("next-click", true);
}

const label = computed(() => {
  return props.totalPages
    ? `Page ${props.currentPage} of ${props.totalPages}`
    : props.pagination
    ? props.pagination.label
    : "";
});
</script>
