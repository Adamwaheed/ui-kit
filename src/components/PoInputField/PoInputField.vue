<template>
  <div class="relative pt-5">
    <!-- 
            v-model update
            @event update:modelValue
         -->
        <input
            :type="type"
            :name="`${id}-field`"
            :id="id"
            :value="modelValue"
            :placeholder="placeholder"
            :disabled="disabled"
            :required="required"
            :aria-describedby="`${id}-description`"
            :aria-required="required"
            :aria-disabled="disabled"
            v-bind="$attrs"
            @input="$emit('update:modelValue', $event.target.value)"
            :class="['mt-1 peer block w-full transition-colors duration-100 ease-in-out rounded-md bg-white focus:ring-0 sm:text-sm disabled:bg-slate-50 disabled:border-slate-300 disabled:focus:border-slate-300 disabled:hover:border-slate-300 disabled:cursor-default', { 'border-red-400 focus:border-red-600 focus:ring-red-600': hasError}, { 'border-slate-300 focus:border-mpao-lightblue': !hasError}]"
            >
        <label
            :for="id"
            :class="['absolute top-0 text-sm font-medium flex items-center space-x-1', { 'text-red-500 peer-focus:text-red-600': hasError}, { 'text-slate-700 peer-focus:text-mpao-lightblue': !hasError}]"
            >
            <span>{{ label }}</span>
            <abbr v-if="null !== info" :title="info" class="w-4 text-slate-500">
                <InformationCircleIcon class="fill-current" />
            </abbr>
        </label>
        <p class="mt-2 text-sm text-slate-500" :id="`${id}-description`" v-if="null !== message">{{ message }}</p>
        <p class="mt-2 text-sm text-red-600 flex items-center space-x-1" :id="`${id}-error`" v-if="hasError && null !== errorMessage">
          <ExclamationTriangleIcon class="fill-current w-4" />
          <span>{{ errorMessage }}</span>
        </p>
    </div>
</template>

<script>
export default {
  name: "PoInputField",
};
</script>
<script setup>
import { InformationCircleIcon, ExclamationTriangleIcon } from "@heroicons/vue/24/solid";

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
    default: null,
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
  /**
   * True or False has error
   */
  hasError: {
    type: Boolean,
    default: false,
  },
  /**
   * True or false if required
   */
  required: {
    type: Boolean,
    default: false,
  },
  /**
   * True or false if disabled
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * True or false if required
   */
  placeholder: {
    type: String,
    default: null,
  },
});
</script>
