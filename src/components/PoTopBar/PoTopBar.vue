<template>
    <nav class="bg-mpao-blue fixed top-0 w-full z-50 flex">
        <div class="shrink-0 px-3 pt-3">
            <label for="sidebar-drawer-toggle" role="button" class="genie-effect flex items-center justify-center bg-[#2e5266] rounded-full w-10 h-10 select-none text-slate-100">
                <svg class="w-6 fill-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </label>
        </div>
        <div class="mx-auto max-w-full px-4 grow sm:px-4">
            <div class="flex h-16 items-center justify-between space-x-12">

                <PoAppIcon app-name="Pension UI Kit">
                    <template v-slot:icon>
                        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 01.878.645 49.17 49.17 0 01.376 5.452.657.657 0 01-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 00-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 01-.595 4.845.75.75 0 01-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 01-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 01-.658.643 49.118 49.118 0 01-4.708-.36.75.75 0 01-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 005.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 00.659-.663 47.703 47.703 0 00-.31-4.82.75.75 0 01.83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 00.657-.642z" />
                        </svg>
                    </template>
                </PoAppIcon>

                <PoSearchBar @query="PassQueryToParent" />

                <div class="flex items-center space-x-3">
                    <span class="block w-6 text-slate-100 sm:hidden" role="button">
                        <svg class="stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </span>
                    <div class="relative">
                        <label for="notifications-menu-toggle" class="block w-6 text-slate-100 genie-effect" role="button">
                            <svg class="stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                        </label>
                        <input type="checkbox" name="" class="hidden peer/apps" role="none" id="notifications-menu-toggle">
                        <div class="invisible z-10 absolute -left-[19rem] top-[35px] opacity-0 bg-white shadow-lg rounded-md w-96 p-4 border border-slate-200 pt-5 transition-all duration-100 ease-linear sm:left-auto sm:right-0 peer-checked/apps:visible peer-checked/apps:top-[45px] peer-checked/apps:opacity-100">
                            <ul class="notifications-tray">
                                <li>
                                    <span class="notifications-tray--title">
                                        <p>Contribution Submission Status</p>
                                        <span>1 month ago</span>
                                    </span>
                                    <span class="notifications-tray--desc">
                                        Your submission (1075978) has been accepted.
                                    </span>
                                </li>
                                <li>
                                    <span class="notifications-tray--title">
                                        <p>Contribution Submission Status</p>
                                        <span>1 month ago</span>
                                    </span>
                                    <span class="notifications-tray--desc">
                                        Your submission (1075978) has been accepted.
                                    </span>
                                </li>
                                <li>
                                    <span class="notifications-tray--title">
                                        <p>Contribution Submission Status</p>
                                        <span>1 month ago</span>
                                    </span>
                                    <span class="notifications-tray--desc">
                                        Your submission (1075978) has been accepted.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <PoAppTray />
                    <div class="relative">
                        <label for="profile-toggle" class="select-none rounded-full w-10 h-10 bg-[#2e5266] flex items-center justify-center genie-effect" role="button">
                            <span class="text-xs text-white font-semibold">AN</span>
                        </label>
                        <input type="checkbox" name="" class="hidden peer/profile" role="none" id="profile-toggle">
                        <div class="invisible space-y-1 z-10 absolute right-0 top-[45px] opacity-0 bg-white shadow-lg rounded-md w-96 p-4 border border-slate-200 pt-5 transition-all duration-100 ease-linear peer-checked/profile:visible peer-checked/profile:top-[54px] peer-checked/profile:opacity-100">
                            <a href="#" class="flex items-center space-x-3 p-3 text-slate-600 rounded-lg bg-white hover:bg-slate-100" role="button">
                                <span class="w-5 text-mpao-orange">
                                    <svg class="stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                    </svg>
                                </span>
                                <span class="text-sm font-normal">Self</span>
                            </a>
                            <a href="#" class="flex items-center space-x-3 p-3 text-slate-600 rounded-lg bg-white hover:bg-slate-100" role="button">
                                <span class="w-5">
                                    <svg class="stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                                    </svg>
                                </span>
                                <span class="flex flex-col space-y-1">
                                    <span class="text-sm font-normal">ABC Company Pvt Ltd</span>
                                    <span class="text-xs text-slate-400">Identifer 2022120916</span>
                                </span>
                            </a>
                            <hr class="border-slate-200">
                            <div class="md:grid grid-cols-2">
                                <a href="#" class="flex items-center space-x-3 p-3 text-slate-600 rounded-lg bg-white hover:bg-slate-100" role="button">
                                    <span class="w-5">
                                        <svg class="stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                        </svg>
                                    </span>
                                    <span class="text-sm font-normal">Profile</span>
                                </a>
                                <a href="#" class="flex items-center space-x-3 p-3 text-slate-600 rounded-lg bg-white hover:bg-slate-100" role="button">
                                    <span class="w-5">
                                        <svg class="stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                        </svg>
                                    </span>
                                    <span class="text-sm font-normal">Logout</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import {
  PoAppIcon,
  PoSearchBar,
  PoAppTray,
} from "../";

defineProps({
    searchQuery: String,
});

const emit = defineEmits(['query']);

function PassQueryToParent(value) {
    const newVal = value;
    emit("query", newVal);
}
</script>
