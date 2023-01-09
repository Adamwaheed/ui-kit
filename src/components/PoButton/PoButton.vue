<template>
    <button v-if="'button' == type" :class="buttonClass" :disabled="disabled" :aria-disabled="disabled" v-bind="$attrs">{{ label }}</button>
    <input v-if="'submit' == type" type="submit" :class="buttonClass" :value="label" :disabled="disabled" :aria-disabled="disabled" v-bind="$attrs">
    <nuxt-link v-if="'link' == type" :to="to" :class="buttonClass" v-bind="$attrs">{{ label }}</nuxt-link>
</template>

<script setup>
const buttonClass = "bg-slate-600 hover:bg-mpao-lightblue focus:bg-mpao-lightblue transition-colors duration-100 ease-in-out cursor-pointer text-slate-50 px-4 py-2 rounded-md text-sm disabled:bg-slate-400 disabled:cursor-default disabled:hover:bg-slate-400";

defineProps({
    type: {
        type: String,
        default: "button"
    },
    label: {
        type: String,
        default: "Button"
    },
    disabled: {
        type: Boolean,
        default: false
    },
    to: {
        type: String,
        default: "#"
    },
});
</script>