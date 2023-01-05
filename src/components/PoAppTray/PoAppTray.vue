<template>
    <div class="relative">
        <label for="apps-menu-toggle" class="block w-6 text-slate-100 genie-effect" role="button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
            </svg>
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

<script setup>
defineProps({
    appList: {
        type: Array,
        default: []
    }
});
</script>