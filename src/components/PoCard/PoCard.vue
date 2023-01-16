<template>
  <div class="shadow-md rounded-md bg-white">
    <h3 v-if="title.length > 0" class="text-base font-medium text-slate-600">{{ title }}</h3>
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
defineProps({
    /**
     * Card title
     */
    title: {
        type: String,
        default: ""
    },
});
</script>
