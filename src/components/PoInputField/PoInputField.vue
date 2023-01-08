<template>
    <div class="relative pt-5">
        <input type="text" name="nid" id="nid" class="mt-1 peer block w-full transition-colors duration-100 ease-in-out rounded-md border-slate-300 bg-white focus:border-mpao-lightblue focus:ring-0 invalid:border-red-400 invalid:focus:border-red-600 invalid:focus:ring-red-600 sm:text-sm" aria-describedby="nid-description">
        <label for="nid" class="absolute top-0 text-sm font-medium text-slate-700 peer-focus:text-mpao-lightblue peer-invalid:text-red-500 peer-invalid:peer-focus:text-red-600 flex items-center space-x-1">
            <span>NID no.</span>
            <abbr title="ID card number of the deceased." class="w-4 text-slate-500">
                <InformationCircleIcon />
            </abbr>
        </label>
        <p class="mt-2 text-sm text-slate-500 peer-invalid:text-red-600" id="nid-description">Hello description</p>
    </div>
</template>

<script setup>
import { InformationCircleIcon } from '@heroicons/vue/24/solid'

defineProps({
    /**
     * List of Buttons to display on the Action Bar.
     * As an icon, you should pass the name of a HeroIcon
     */
    items: {
        type: Array,
        default: null
    },
    /**
     * The backbutton is optional. So you can either show or hide it.
     */
    showBackButton: {
        type: Boolean,
        default: true
    }
});
</script>