<template>
    <div class="relative pt-5">
        <input
            type="text"
            name="nid"
            :id="id"
            :value="modelValue"
            class="mt-1 peer block w-full transition-colors duration-100 ease-in-out rounded-md border-slate-300 bg-white focus:border-mpao-lightblue focus:ring-0 invalid:border-red-400 invalid:focus:border-red-600 invalid:focus:ring-red-600 sm:text-sm"
            :aria-describedby="`${id}-description`"
            v-bind="$attrs"
            @input="$emit('update:modelValue', $event.target.value)"
            >
        <label
            :for="id"
            class="absolute top-0 text-sm font-medium text-slate-700 peer-focus:text-mpao-lightblue peer-invalid:text-red-500 peer-invalid:peer-focus:text-red-600 flex items-center space-x-1"
            >
            <span>{{ label }}</span>
            <abbr v-if="null !== info" :title="info" class="w-4 text-slate-500">
                <InformationCircleIcon />
            </abbr>
        </label>
        <p class="mt-2 text-sm text-slate-500" :id="`${id}-description`" v-if="null !== message">{{ message }}</p>
        <p class="mt-2 text-sm text-red-600" :id="`${id}-error`" v-if="null !== errorMessage">{{ errorMessage }}</p>
    </div>
</template>

<script setup>
import { InformationCircleIcon } from '@heroicons/vue/24/solid'

defineProps({
    /**
     * Model value
     */
    modelValue: {
      type: [String, Number],
      default: "",
    },
    /**
     * Input label text
     */
     label: {
      type: String,
      default: "",
    },
    /**
     * Input type
     */
    type: {
      type: String,
      default: "text",
    },
    /**
     * Input id text
     */
    id: {
      type: String,
      default: "",
    },
    /**
     * A tool tip, helper information
     */
    info: {
        type: String,
        default: null
    },
    /**
     * Tip, description, information for the input
     */
    message: {
      type: String,
      default: null,
    },
    /**
     * Error message
     */
    errorMessage: {
      type: String,
      default: null,
    },
});
</script>