<template>
    <div class="flex items-center space-x-3">
        <div class="w-7 text-slate-100">
            <slot name="icon" />
        </div>
        <span class="font-light text-lg text-slate-100">{{ appName }}</span>
    </div>
</template>

<script setup>
defineProps({
    appName: {
        type: String,
        default: "App Name",
    },
});
</script>
