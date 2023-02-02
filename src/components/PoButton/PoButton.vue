<template>
    <button v-if="'button' == type" :class="[buttonClassess, buttonSize, buttonColor]" :disabled="disabled" :aria-disabled="disabled" v-bind="$attrs">
        <!-- 
        Label slot
        @slot label
        -->
        <slot name="label">{{ label }}</slot>
    </button>
    <input v-if="'submit' == type" type="submit" :class="[buttonClassess, buttonSize, buttonColor]" :value="label" :disabled="disabled" :aria-disabled="disabled" v-bind="$attrs">
    <a v-if="'link' == type" :href="to" :class="[buttonClassess, buttonSize, buttonColor]" v-bind="$attrs">{{ label }}</a>
</template>

<script>
export default {
  name: 'PoButton',
}
</script>
<script setup>
import { computed } from 'vue'

const buttonClassess = 'po-rounded-lg po-transition-colors po-duration-100 po-ease-in-out po-cursor-pointer disabled:po-bg-slate-400 disabled:po-cursor-default disabled:po-hover:bg-slate-400';

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
    /**
     * Override colors. Mark this true and add tailwind bg-color, hover:bg-color and text-color classes to component
     */
    overrideColors: {
        type: Boolean,
        default: false
    },
    /**
     * Button has three sizes. sm, md, and lg
     */
    size: {
      type: String,
      default: "md",
    }
});

const buttonSize = computed(() => {
    switch (props.size) {
        case 'sm':
            return 'po-px-2 po-py-1 po-text-xs'
            break;
        case 'md':
            return 'po-px-4 po-py-2 po-text-sm'
            break;
        case 'lg':
            return 'po-px-5 po-py-3 po-text-normal'
            break;
    }
});
const buttonColor = computed(() => {
    return props.overrideColors ? '' : 'po-bg-mpao-lightblue hover:po-bg-mpao-blue focus:po-bg-mpao-blue po-text-slate-50';
});
</script>