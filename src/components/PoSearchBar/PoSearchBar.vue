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
            <svg class="w-5 h-5 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

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