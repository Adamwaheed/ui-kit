<template>
  <div class="po-shadow-md po-rounded-xl po-bg-white po-relative">
    <div v-if="isLoading" class="po-absolute po-right-3 po-top-3 po-bg-white po-p-2 po-rounded-lg">
      <AnimatedLogo class="po-w-5" />
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
import AnimatedLogo from '../PoLoading/LoadingDots.vue';

defineProps({
    /**
     * Card title
     */
    title: {
        type: String,
        default: ""
    },
    isLoading: {
      type: Boolean,
      default: false
    }
});
</script>
