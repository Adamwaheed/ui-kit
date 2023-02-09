<template>
  <div class="po-shadow-md po-rounded-xl po-bg-white po-relative">
    <div v-if="isLoading" class="po-absolute po-right-2 po-top-2 po-p-2 po-rounded-lg">
      <LoadingDots />
    </div>
    <h3 v-if="title.length > 0" class="po-text-base po-font-medium po-text-slate-600">{{ title }}</h3>
    <!--
            @slot Content of the card goes here.
        -->
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: "PoCard",
};
</script>
<script setup>
import LoadingDots from '../PoLoading/LoadingDots.vue';

defineProps({
    /**
     * Card title
     */
    title: {
        type: String,
        default: ""
    },
    /**
     * Show card loading
     */
    isLoading: {
      type: Boolean,
      default: false
    }
});
</script>
