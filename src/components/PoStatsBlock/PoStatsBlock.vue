<template>
<div class="rounded-md bg-slate-200 overflow-hidden divide-y divide-slate-200 sm:divide-y-0 grid sm:grid-cols-1 lg:grid-cols-3 gap-px">
   <div v-for="item in items" class="bg-white relative group focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500">
      <span class="block p-4 transition-colors duration-75 ease-linear">
         <div class="flex items-start space-x-2">
            <div>
               <span :class="['inline-flex p-2 rounded-md', item.bgColor, item.iconColor]">
                  <component :is="item.icon" class="w-4 h-4" />
               </span>
            </div>
            <div>
               <div class="flex items-start space-x-1">
                  <span class="block text-2xl font-light text-slate-600">{{ item.value }}</span>
                  <span v-if="item.diff" class="text-sm text-green-500 font-medium pt-1">{{ item.diff }}</span>
               </div>
                <h4 class=" text-sm tracking-wide text-slate-500">{{ item.label }}</h4>
            </div>
         </div>
      </span>
   </div>
</div>
</template>

<script setup>

const props = defineProps({
    /**
     * Items
     */
    items: {
        type: Array,
        default: null,
    },
});
</script>