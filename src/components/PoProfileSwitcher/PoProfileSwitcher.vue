<template>
    <div class="po-relative">
        <label for="profile-toggle" class="po-select-none po-rounded-full po-w-10 po-h-10 po-bg-[#2e5266] po-flex po-items-center po-justify-center genie-effect po-z-50" role="button">
            <span class="po-text-xs po-text-white po-font-semibold">{{ profileSwitcherData.currProfileLabel }}</span>
        </label>
        <input type="checkbox" name="" class="po-hidden peer/profile" role="none" id="profile-toggle">
        <div class="po-invisible po-space-y-1 po-z-10 po-absolute po-right-0 po-top-[45px] po-opacity-0 po-bg-white po-shadow-lg po-rounded-md po-w-96 po-p-4 po-border po-border-slate-200 po-pt-5 po-transition-all po-duration-100 po-ease-linear peer-checked/profile:po-visible peer-checked/profile:po-top-[54px] peer-checked/profile:po-opacity-100">
            <a
                v-for="profile in profileSwitcherData.profiles"
                :href="profile.url"
                class="po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-white hover:po-bg-slate-100"
                role="button"
                >
                <span class="po-w-5">
                    <UserIcon v-if="profile.isPersonal" :class="['po-stroke-current', { 'po-stroke-mpao-orange' : profile.current }]" />
                    <BriefcaseIcon v-if="!profile.isPersonal" :class="['po-stroke-current', { 'po-stroke-mpao-orange' : profile.current }]" />
                </span>
                <span class="po-flex po-flex-col po-space-y-1">
                    <span class="po-text-sm po-font-normal">{{ profile.name }}</span>
                    <span v-if="0 !== profile.identifier.length" class="po-text-xs po-text-slate-400">{{ profile.identifier }}</span>
                </span>
            </a>
            <hr class="po-border-slate-200">
            <div class="md:po-grid po-grid-cols-2">
                <a :href="profileSwitcherData.currentProfileUrl" class="po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-white hover:po-bg-slate-100" role="button">
                    <span class="po-w-5">
                        <UserIcon class="po-stroke-current" />
                    </span>
                    <span class="po-text-sm po-font-normal">Profile</span>
                </a>
                <a href="#" class="po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-white hover:po-bg-slate-100" role="button">
                    <span class="po-w-5">
                        <ArrowRightOnRectangleIcon  class="po-stroke-current" />
                    </span>
                    <span class="po-text-sm po-font-normal">Logout</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "PoProfileSwitcher",
};
</script>
<script setup>
import { UserIcon, BriefcaseIcon, ArrowRightOnRectangleIcon } from '@heroicons/vue/24/outline'
defineProps({
    profileSwitcherData: {
        type: Object,
        default: null
    },
});
</script>