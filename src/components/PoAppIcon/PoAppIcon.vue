<template>
    <div class="flex items-center space-x-3">
        <div class="w-7 text-slate-100">
            <!-- 
                @slot You can use icon slot to add App Icon. This can be an SVG direcly embedded.
             -->
            <slot name="icon" />
        </div>
        <span class="font-light text-lg text-slate-100">{{ appName }}</span>
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
