<template>
    <div>
        <div v-if="items" class="po-col-span-2 po-relative po-mt-5">
            <span class="po-absolute po-top-0 po-left-1 po--ml-px po-h-[calc(100%-7px)] po-w-0.5 po-bg-gray-200" aria-hidden="true"></span>
            <div class="po-relative po-space-y-5">
                <div v-for="(item, index) in items" class="po-flex po-space-x-2 po-items-start">
                    <p :class="['po-rounded-full po-w-2 po-h-2 border-1 po-border-white po-shrink-0', { 'po-bg-mpao-orange' : index !== items.length - 1 }, , { 'po-bg-slate-400' : index == items.length - 1 }]"></p>
                    <div class="log-item">
                        <span>{{ item.label }} on {{ items.date }} {{ item.by !== '' > 'by' }} <span v-if="item.by !==''">{{ item.by }}</span></span>
                        <blockquote v-if="item.description !==''" class="po-text-slate-500 po-text-xs">"{{ item.description }}"</blockquote>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="po-text-center po-py-10">
            <span class="po-text-sm po-text-slate-500">{{ emptyLabel }}</span>
        </div>
    </div>
</template>

<style scoped>
.log-item {
    margin-top: -0.6rem;
}
.log-item > span {
    font-size: 0.75rem;
    line-height: 1rem;
    --tw-text-opacity: 1;
    color: rgb(100 116 139 / var(--tw-text-opacity));
}

.log-item > span > span {
    --tw-text-opacity: 1;
    color: rgb(71 85 105 / var(--tw-text-opacity));
}
</style>

<script>
export default {
  name: "PoLogs",
};
</script>
<script setup>

const props = defineProps({
    /**
     * list of items
     */
    items: {
        type: Array,
        default: null
    },
    /**
     * list of items
     */
    emptyLabel: {
        type: String,
        default: "No logs to display."
    },
});
</script>