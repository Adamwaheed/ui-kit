<template>
  <div>
    <div class="po-grid po-grid-cols-1 lg:po-grid-cols-2 po-gap-5">
      <div>
        <h1
          class="po-text-xl md:po-text-2xl po-font-semibold po-text-slate-800"
        >
          {{ label }}
        </h1>
        <span
          v-if="description !== ''"
          class="
            po-text-base po-mt-4 po-max-w-md po-pb-5 po-block po-text-slate-500
          "
          >{{ description }}</span
        >
      </div>
      <div>
        <div v-if="stats !== null" class="po-flex md:po-justify-end po-mb-5">
          <div
            class="
              po-bg-slate-50
              po-shadow-sm
              po-rounded-xl
              po-py-5
              po-px-2
              po-divide-x
              po-divide-slate-200
              po-flex
            "
          >
            <div v-for="stat in stats" class="po-px-5">
              <span
                class="
                  po-text-xl
                  po-font-medium
                  po-text-slate-600
                  po-flex
                  po-items-center
                  po-space-x-1
                "
              >
                <span class="po-text-xl po-font-medium po-text-slate-600">{{
                  stat.value
                }}</span>
                <span
                  v-if="stat.icon"
                  class="po-w-5 po-h-5"
                  :class="statIconColor(stat)"
                  ><component :is="stat.icon"
                /></span>
              </span>
              <span class="po-text-sm po-text-slate-500 po-block">{{
                stat.label
              }}</span>
            </div>
          </div>
        </div>
        <div class="po-flex po-items-center po-space-x-1 md:po-justify-end">
          <button
            v-if="showFilter"
            title="Filter"
            @click="
              $emit('button-click', 'filter');
              filterOn = !filterOn;
            "
            :class="[
              'po-p-2 po-rounded-md hover:po-bg-slate-200 po-transition-colors po-duration-75 po-ease-in-out',
              { 'po-text-mpao-orange hover:po-text-mpao-orange': filterOn },
              { 'tpo-ext-slate-600 hover:po-text-mpao-blue': !filterOn },
            ]"
          >
            <FunnelIcon class="po-w-4 po-stroke-current po-stroke-2" />
          </button>
          <!--
              Emits 'download' when download btn is clicked and 'filter' when filter btn is clicked
              @event button-click
          -->
          <button
            v-if="showDownload"
            title="Download"
            @click="$emit('button-click', 'download')"
            class="
              po-text-slate-600 po-p-2 po-rounded-md
              hover:po-bg-slate-200 hover:po-text-mpao-blue
              po-transition-colors po-duration-75 po-ease-in-out
            "
          >
            <ArrowDownTrayIcon class="po-w-4 po-stroke-current po-stroke-2" />
          </button>
          <span
            v-if="
              (showFilter && showPagination) || (showDownload && showPagination)
            "
            class="po-border-l po-border-slate-400 po-h-3 po-w-3 po-ml-1"
            >&nbsp;</span
          >
          <PoPagination
            v-if="showPagination"
            :pagination="pagination"
            @button-click="handlePaginationClick"
          />
        </div>
      </div>
    </div>
    <transition
      enter-active-class="po-transition po-duration-100 po-ease-out"
      enter-from-class="po-transform po-scale-95 po-opacity-0"
      enter-to-class="po-transform po-scale-100 po-opacity-100"
      leave-active-class="po-transition po-duration-75 po-ease-out"
      leave-from-class="po-transform po-scale-100 po-opacity-100"
      leave-to-class="po-transform po-scale-95 po-opacity-0"
    >
      <div
        v-if="filterOn"
        class="
          po-bg-slate-50 po-p-5 po-mt-5 po-rounded-md po-grid po-grid-cols-1
          md:po-grid-cols-3
          po-gap-5
        "
      >
        <!-- 
                Filter options goes here
                @slot filters
                -->
        <slot name="filters">
          <span class="po-text-xs po-text-slate-500 po-py-5"
            >No filters available at the moment.</span
          >
        </slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "PoPageTitle",
};
</script>
<script setup>
import { FunnelIcon, ArrowDownTrayIcon } from "@heroicons/vue/24/outline";

import PoPagination from "../PoPagination/PoPagination.vue";

import { ref } from "vue";

const props = defineProps({
  /**
   * Page title
   */
  label: {
    type: String,
    default: "",
  },
  /**
   * Page description
   */
  description: {
    type: String,
    default: "",
  },
  /**
   * Page stats
   */
  stats: {
    type: Array,
    default: null,
  },
  /**
   * True or False show pagination
   */
  showPagination: {
    type: Boolean,
    default: false,
  },
  /**
   * True or False show filter button
   */
  showFilter: {
    type: Boolean,
    default: false,
  },
  /**
   * True or False show download button
   */
  showDownload: {
    type: Boolean,
    default: false,
  },
  /**
   * Pagination Object { label: 'Page 1 of 2', nextLink: './next', prevLink: './prev' }
   */
  pagination: {
    type: Object,
    default: null,
  },
  /**
   *
   */
  filterOn: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["button-click", "pagination-click"]);

const filterOn = props.filterOn ? ref(true) : ref(false);

function handlePaginationClick(item) {
  /**
   * @event pagination-click
   * Emits 'prev' or 'next' depending on the button clicked
   */
  emit("pagination-click", item);
}

function statIconColor(stat) {
  return stat.iconColor ? stat.iconColor : "po-slate-600";
}
</script>
