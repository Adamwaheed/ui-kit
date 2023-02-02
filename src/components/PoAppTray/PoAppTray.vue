<template>
    <div class="po-relative">
        <label for="apps-menu-toggle" class="po-block po-w-6 po-text-slate-100 po-genie-effect po-z-50" role="button">
            <Squares2X2Icon />
        </label>
        <input type="checkbox" name="" class="po-hidden peer/apps" role="none" id="apps-menu-toggle">
        <div class="po-invisible po-z-10 po-absolute -po-left-[19rem] po-top-[35px] po-opacity-0 po-bg-white po-shadow-lg po-rounded-md po-w-96 po-p-4 po-border po-border-slate-200 po-pt-5 po-space-y-5 po-transition-all po-duration-100 po-ease-linear sm:po-left-auto sm:po-right-0 peer-checked/apps:po-visible peer-checked/apps:po-top-[45px] peer-checked/apps:po-opacity-100">
            <div v-for="collection in appList">
                <span v-if="collection.groupName.length > 0" class="po-text-sm po-font-normal po-text-slate-400 po-select-none">{{ collection.groupName }}</span>
                <ul class="po-grid po-grid-cols-3 po-gap-3 po-py-3">
                    <li v-for="app in collection.apps">
                        <a :href="app.url" class="po-flex po-flex-col po-group po-space-y-3 po-justify-center po-items-center po-py-2 genie-effect">
                            <span class="po-block po-w-10 po-rounded-md po-transition-shadow po-duration-100 po-ease-in-out po-shadow-md group-hover:po-shadow-xl po-overflow-hidden">
                                <img :src="app.icon" :alt="`${app.name} icon`">
                            </span>
                            <span class="po-text-slate-600 po-font-normal po-text-sm">{{ app.name }}</span>
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