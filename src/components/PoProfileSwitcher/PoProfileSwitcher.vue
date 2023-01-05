<template>
    <div class="relative">
        <label for="profile-toggle" class="select-none rounded-full w-10 h-10 bg-[#2e5266] flex items-center justify-center genie-effect" role="button">
            <span class="text-xs text-white font-semibold">{{ profileSwitcherData.currProfileLabel }}</span>
        </label>
        <input type="checkbox" name="" class="hidden peer/profile" role="none" id="profile-toggle">
        <div class="invisible space-y-1 z-10 absolute right-0 top-[45px] opacity-0 bg-white shadow-lg rounded-md w-96 p-4 border border-slate-200 pt-5 transition-all duration-100 ease-linear peer-checked/profile:visible peer-checked/profile:top-[54px] peer-checked/profile:opacity-100">
            <a
                v-for="profile in profileSwitcherData.profiles"
                :href="profile.url"
                class="flex items-center space-x-3 p-3 text-slate-600 rounded-lg bg-white hover:bg-slate-100"
                role="button"
                >
                <span class="w-5">
                    <UserIcon v-if="profile.isPersonal" :class="['stroke-current', { 'stroke-mpao-orange' : profile.current }]" />
                    <BriefcaseIcon v-if="!profile.isPersonal" :class="['stroke-current', { 'stroke-mpao-orange' : profile.current }]" />
                </span>
                <span class="flex flex-col space-y-1">
                    <span class="text-sm font-normal">{{ profile.name }}</span>
                    <span v-if="0 !== profile.identifier.length" class="text-xs text-slate-400">{{ profile.identifier }}</span>
                </span>
            </a>
            <hr class="border-slate-200">
            <div class="md:grid grid-cols-2">
                <a :href="profileSwitcherData.currentProfileUrl" class="flex items-center space-x-3 p-3 text-slate-600 rounded-lg bg-white hover:bg-slate-100" role="button">
                    <span class="w-5">
                        <UserIcon class="stroke-current" />
                    </span>
                    <span class="text-sm font-normal">Profile</span>
                </a>
                <a href="#" class="flex items-center space-x-3 p-3 text-slate-600 rounded-lg bg-white hover:bg-slate-100" role="button">
                    <span class="w-5">
                        <ArrowRightOnRectangleIcon  class="stroke-current" />
                    </span>
                    <span class="text-sm font-normal">Logout</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { UserIcon, BriefcaseIcon, ArrowRightOnRectangleIcon } from '@heroicons/vue/24/outline'
defineProps({
    profileSwitcherData: {
        type: Object,
        default: []
    },
});
</script>