<template>
    <div v-if="show" class="po-fixed po-z-[999] po-top-0 po-bottom-0 po-left-0 po-right-0 po-flex po-items-center po-justify-center">
        <div class="po-loading-rotate"></div>
        <div class="relative po-bg-white po-bg-opacity-50 po-backdrop-blur po-backdrop-filter po-w-24 po-h-24 po-flex po-items-center po-justify-center po-rounded-full po-z-10 po-shadow-xl">
            <span v-if="label !== ''" class="po-absolute po-left-0 po-right-0 po-text-center po-py-1 po-text-xs po-text-mpao-blue po-bg-white po-bg-opacity-50 po-backdrop-blur po-backdrop-filter">{{ label }}</span>
            <AnimatedLogo />
        </div>
    </div>
</template>

<script>
export default {
  name: "PoLoading",
};
</script>

<script setup>

import AnimatedLogo from './AnimatedLogo.vue';

const props = defineProps({
    show: {
        type: Boolean,
        default: false
    },
    label: {
        type: String,
        default: ""
    }
});
</script>