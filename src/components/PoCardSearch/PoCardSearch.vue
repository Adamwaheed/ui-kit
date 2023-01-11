<template>
    <div class="py-3 px-5 border-b border-slate-200">
        <form class="flex w-full md:ml-0" action="#" method="GET">
            <label for="search-field" class="sr-only">{{ placeholder }}</label>
            <div class="relative w-full text-slate-400 focus-within:text-mpao-lightblue transition-colors duration-100 ease-in-out">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                    <MagnifyingGlassIcon class="h-5 w-5 flex-shrink-0" />
                </div>
                <!-- 
                    v-model update
                    @event update:modelValue
                -->
                <input
                    name="search-field"
                    id="desktop-search-field"
                    :placeholder="placeholder"
                    :value="modelValue"
                    @input="$emit('update:modelValue', $event.target.value)"
                    class="h-full w-full border-transparent py-2 pl-8 pr-3 text-sm text-slate-700 placeholder-slate-500 focus:border-transparent focus:placeholder-slate-400 focus:outline-none focus:ring-0"
                    type="search">
            </div>
        </form>
    </div>
</template>

<script>
export default {
  name: "PoCardSearch",
};
</script>
<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'

defineProps({
    /**
     * Model value
     */
    modelValue: {
        type: [String, Number],
        default: "",
    },
    /**
     * Placeholder, screen reader label
     */
    placeholder: {
        type: String,
        default: "Search"
    },
});
</script>