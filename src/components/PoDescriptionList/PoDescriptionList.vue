<template>
    <dl :class="[{ 'divide-y divide-slate-200' : !striped }]">
        <div v-for="item in items" :class="['grid grid-cols-1 sm:grid-cols-3 sm:gap-5 py-3', { 'even:bg-slate-50 px-2' : striped }]">
            <dt class="text-sm text-slate-500 col-span-1">{{ item.title }}</dt>
            <dd class="text-sm text-slate-700 col-span-2 flex">
                <span class="grow">{{ item.description }}</span>
                <!--
                    Emits the button action when it’s clicked, You can listen to it and switch accordingly.
                    @event button-click
                -->
                <span class="shrink-0 text-mpao-lightblue hover:text-mpao-blue transition-colors duration-100 ease-in-out px-2 cursor-pointer" v-if="undefined !== item.action" @click="$emit('button-click', item.action)">{{ item.action }}</span>
            </dd>
        </div>
    </dl>
</template>

<script setup>
defineProps({
    /**
     * Items to display in the list.
     */
    items: {
        type: Array,
        default: null
    },
    striped: false,
});
</script>