<template>
    <button v-if="'button' == type" :class="[buttonClassess, buttonSize, buttonColor]" :disabled="disabled" :aria-disabled="disabled" v-bind="$attrs">{{ label }}</button>
    <input v-if="'submit' == type" type="submit" :class="[buttonClassess, buttonSize, buttonColor]" :value="label" :disabled="disabled" :aria-disabled="disabled" v-bind="$attrs">
    <a v-if="'link' == type" :href="to" :class="[buttonClassess, buttonSize, buttonColor]" v-bind="$attrs">{{ label }}</a>
</template>

<script setup>
import { computed, reactive } from 'vue'

const buttonClassess = 'rounded-md transition-colors duration-100 ease-in-out cursor-pointer disabled:bg-slate-400 disabled:cursor-default disabled:hover:bg-slate-400';

const props = defineProps({
    /**
     * Type of button. It can be 'button', 'submit', or 'link'.
     */
    type: {
        type: String,
        default: "button"
    },
    /**
     * Label of the button
     */
    label: {
        type: String,
        default: "Button"
    },
    /**
     * True or False if disabled
     */
    disabled: {
        type: Boolean,
        default: false
    },
    /**
     * Route for links
     */
    to: {
        type: String,
        default: "#"
    },
    overrideColors: {
        type: Boolean,
        default: false
    },
    size: {
      type: String,
      default: "md",
    }
});

const buttonSize = computed(() => {
    switch (props.size) {
        case 'sm':
            return 'px-2 py-1 text-xs'
            break;
        case 'md':
            return 'px-4 py-2 text-sm'
            break;
        case 'lg':
            return 'px-5 py-3 text-normal'
            break;
    }
});
const buttonColor = computed(() => {
    return props.overrideColors ? '' : 'bg-slate-600 hover:bg-mpao-lightblue focus:bg-mpao-lightblue text-slate-50';
});
</script>