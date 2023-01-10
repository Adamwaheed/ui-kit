<template>
    <div class="relative">
        <label for="apps-menu-toggle" class="block w-6 text-slate-100 genie-effect" role="button">
            <Squares2X2Icon />
        </label>
        <input type="checkbox" name="" class="hidden peer/apps" role="none" id="apps-menu-toggle">
        <div class="invisible z-10 absolute -left-[19rem] top-[35px] opacity-0 bg-white shadow-lg rounded-md w-96 p-4 border border-slate-200 pt-5 space-y-5 transition-all duration-100 ease-linear sm:left-auto sm:right-0 peer-checked/apps:visible peer-checked/apps:top-[45px] peer-checked/apps:opacity-100">
            <div v-for="collection in appList">
                <span v-if="collection.groupName.length > 0" class="text-sm font-normal text-slate-400 select-none">{{ collection.groupName }}</span>
                <ul class="grid grid-cols-3 gap-3 py-3">
                    <li v-for="app in collection.apps">
                        <a :href="app.url" class="flex flex-col group space-y-3 justify-center items-center py-2 genie-effect">
                            <span class="block w-10 rounded-md transition-shadow duration-100 ease-in-out shadow-md group-hover:shadow-xl overflow-hidden">
                                <img :src="app.icon" :alt="`${app.name} icon`">
                            </span>
                            <span class="text-slate-600 font-normal text-sm">{{ app.name }}</span>
                        </a>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "PoAppTray",
};
</script>
<script setup>
import { Squares2X2Icon } from '@heroicons/vue/24/outline'
defineProps({
    /**
     * Array of grouped apps. When the group name field is left blank, it will appear as a single list when displayed.
     */
    appList: {
        type: Array,
        default: null
    }
});
</script>