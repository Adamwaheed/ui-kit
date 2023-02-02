<template>
    <div class="po-flex po-items-center po-space-x-3">
        <div class="po-w-7 po-text-slate-100">
            <!-- 
                @slot You can use icon slot to add App Icon. This can be an SVG direcly embedded.
             -->
            <slot name="icon" />
        </div>
        <span class="po-font-light po-text-lg po-text-slate-100">{{ appName }}</span>
    </div>
</template>

<script>
export default {
  name: "PoAppIcon",
};
</script>
<script setup>
defineProps({
    /**
     * Name of the app
     */
    appName: {
        type: String,
        default: "App Name",
    },
});
</script>
