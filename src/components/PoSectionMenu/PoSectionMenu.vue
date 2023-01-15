<template>
    <ul class="pt-1 space-y-1 border-r-2 border-slate-200 relative">
        <li v-for="item in menuItems">
            <!--
                Emits the route of the clicked button
                @event link-click
            -->
            <span @click="$emit('link-click', item.link)" role="button" :class="['relative cursor-pointer -right-[0.15rem] py-1 border-r-2 hover:border-mpao-lightblue transition-colors duration-200 ease-in-out flex items-center space-x-2', { 'border-mpao-lightblue text-sm text-mpao-lightblue' : item.link == currPageRoute }, { 'border-slate-200 text-sm text-slate-600' : item.link !== currPageRoute }]">
                <component :is="item.icon" class="w-4 h-4 stroke-current" />
                <span>{{ item.label }}</span>
            </span>
        </li>
    </ul>
</template>

<script>
export default {
  name: "PoSectionMenu",
};
</script>
<script setup>

defineProps({
    /**
     * Current route name to highlight
     */
    currPageRoute: {
        type: String,
        default: ""
    },
    /**
     * list of menu items
     */
    menuItems: {
        type: Array,
        default: null
    }
    
});
</script>