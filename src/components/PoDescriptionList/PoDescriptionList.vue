<template>
    <dl :class="['po-description-list', { 'divide-y divide-slate-200' : !striped }, { 'striped' : striped }]">
        <!-- 
            @slot Optionally you can pass data into description list through a slot
         -->
        <slot name="content">
            <div v-for="item in items">
                <dt>{{ item.title }}</dt>
                <dd class="">
                    <span class="grow">{{ item.description }}</span>
                    <!--
                        Emits the button action when it’s clicked, You can listen to it and switch accordingly.
                        @event button-click
                    -->
                    <span class="shrink-0 text-mpao-lightblue hover:text-mpao-blue transition-colors duration-100 ease-in-out px-2 cursor-pointer" v-if="undefined !== item.action" @click="$emit('button-click', item.action)">{{ item.action }}</span>
                </dd>
            </div>
        </slot>
    </dl>
</template>

<style>
    .po-description-list div {
        @apply grid grid-cols-1 sm:grid-cols-3 sm:gap-5 py-3
    }
    .po-description-list.striped div {
        @apply even:bg-slate-50 px-2
    }
    .po-description-list dt {
        @apply text-sm text-slate-500 col-span-1
    }
    .po-description-list dd {
        @apply text-sm text-slate-700 col-span-2 flex
    }
</style>

<script>
export default {
  name: "PoDescriptionList",
};
</script>
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