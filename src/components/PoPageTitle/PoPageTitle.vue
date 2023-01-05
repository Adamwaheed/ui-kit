<template>
    <div class="flex items-center">
        <h1 class="text-xl font-semibold text-slate-800 grow">{{ label }}</h1>
    </div>
</template>

<script setup>
defineProps({
    label: {
        type: String,
        default: ""
    },
});
</script>