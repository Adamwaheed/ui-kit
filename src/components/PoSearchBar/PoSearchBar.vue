<template>
    <div class="flex-grow hidden relative sm:block">
        <input
            v-model="query"
            type="text"
            id="main-search"
            :placeholder="placeholder"
            class="peer/search bg-transparent border border-transparent text-slate-100 text-sm rounded-md ring-0 transition-colors ease-linear duration-100 block w-full pl-10 p-2.5 appearance-none hover:outline hover:outline-slate-600 focus:outline-slate-400 focus:outline"
            >
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none transition-all ease-linear duration-100 text-slate-400 origin-center peer-hover/search:scale-105 peer-focus/search:text-slate-100">
            <MagnifyingGlassIcon class="w-5 h-5 stroke-current" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'

defineProps({
  placeholder: {
    type: String,
    default: 'Search'
  }
});


const emit = defineEmits(['query']);
let query = ref("");

const searchOnEnter = (e) => {
    if (e.key === 'Enter' && 0 < query.value.length ) {
        emit("query", query.value);
    }
};

onMounted(() => document.addEventListener('keydown', searchOnEnter));

onUnmounted(() => {
    document.removeEventListener('keydown', searchOnEnter);
});
</script>