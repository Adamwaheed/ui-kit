<template>
    <Popover v-slot="{ open }" class="po-relative">
        <PopoverButton
            :class="open ? '' : 'text-opacity-90'"
            class="po-select-none po-rounded-full po-w-10 po-h-10 po-bg-[#2e5266] po-flex po-items-center po-justify-center genie-effect po-z-50"
        >
            <span class="po-text-xs po-text-white po-font-semibold">{{ currentProfileLabel }}</span>
        </PopoverButton>
        <transition
            enter-active-class="po-transition po-duration-200 po-ease-out"
            enter-from-class="po-translate-y-1 po-opacity-0"
            enter-to-class="po-translate-y-0 po-opacity-100"
            leave-active-class="po-transition po-duration-150 po-ease-in"
            leave-from-class="po-translate-y-0 po-opacity-100"
            leave-to-class="po-translate-y-1 po-opacity-0"
        >
            <PopoverPanel
            class="po-space-y-1 po-z-10 po-absolute po-right-0 po-top-[55px] po-opacity-0 po-bg-white po-bg-opacity-50 po-backdrop-blur po-backdrop-filter po-shadow-lg po-rounded-md po-w-96 po-p-4 po-border po-border-slate-200 po-pt-5 po-transition-all po-duration-100 po-ease-linear po-max-h-[calc(100vh-85px)] po-overflow-y-scroll"
            >
                <!--
                    Emits profile object value when profile is clicked, emits 'current-profile' when current profile link is clicked, emits 'logout' when logout button is clicked
                    @event button-click
                -->
                <a
                    v-for="profile in profileSwitcherData.profiles"
                    href="#"
                    @click.prevent="$emit('button-click', profile)"
                    class="po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-white hover:po-bg-slate-100 po-border po-border-slate-100"
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
                <div class="md:po-grid po-grid-cols-2 po-space-x-1">
                    <a
                        href="#"
                        @click.prevent="$emit('button-click', 'current-profile')"
                        class="po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-white hover:po-bg-slate-100 po-border po-border-slate-100"
                        role="button"
                    >
                        <span class="po-w-5">
                            <UserIcon class="po-stroke-current" />
                        </span>
                        <span class="po-text-sm po-font-normal">Profile</span>
                    </a>
                    <a
                        href="#"
                        @click.prevent="$emit('button-click', 'logout')"
                        class="po-flex po-items-center po-space-x-3 po-p-3 po-text-slate-600 po-rounded-lg po-bg-white hover:po-bg-slate-100 po-border po-border-slate-100"
                        role="button"
                    >
                        <span class="po-w-5">
                            <ArrowRightOnRectangleIcon  class="po-stroke-current" />
                        </span>
                        <span class="po-text-sm po-font-normal">Logout</span>
                    </a>
                </div>
            </PopoverPanel>
        </transition>
    </Popover>
</template>

<script>
export default {
  name: "PoProfileSwitcher",
};
</script>
<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { UserIcon, BriefcaseIcon, ArrowRightOnRectangleIcon } from '@heroicons/vue/24/outline'
import { computed } from 'vue';
const props = defineProps({
    profileSwitcherData: {
        type: Object,
        default: null
    },
});

const currentProfileLabel = computed(() => {
    console.log("aaaa")
    const currProfile = props.profileSwitcherData.profiles.filter(profile => profile.current === true)[0];
    console.log(currProfile);
    return (currProfile) ? currProfile.name.split(' ').map(word => word[0]).join('').substr(0, 2) : 'NA';
//   return props.profileSwitcherData.profiles.filter(profile => profile.current === true)[0].name.split(' ').map(word => word[0]).join('').substr(0, 2);

});

</script>