<template>
  <div
    class="po-relative"
    :class="[{ 'lg:po-grid lg:po-grid-cols-2': 'horizontal' === display }]"
  >
    <!-- 
            v-model update
            @event update:modelValue
         -->
    <label
      :for="id"
      :class="[
        'po-text-sm po-font-medium po-flex po-items-center po-space-x-1',
        { 'po-text-red-500': hasError },
        { 'po-text-slate-700': !hasError },
      ]"
    >
      <span>{{ label }}</span>
      <abbr v-if="null !== info" :title="info" class="po-w-4 po-text-slate-500">
        <InformationCircleIcon class="po-fill-current" />
      </abbr>
    </label>
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
      :class="[
        'po-mt-1 peer po-block po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white focus:po-ring-0 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default',
        {
          'po-border-red-400 focus:po-border-red-600 focus:po-ring-red-600':
            hasError,
        },
        { 'po-border-slate-300 focus:po-border-mpao-lightblue': !hasError },
      ]"
    />
    <p
      class="po-mt-2 po-text-sm po-text-slate-500"
      :id="`${id}-description`"
      v-if="null !== message"
    >
      {{ message }}
    </p>
    <p
      class="
        po-mt-2 po-text-sm po-text-red-600 po-flex po-items-center po-space-x-1
      "
      :id="`${id}-error`"
      v-if="hasError && null !== errorMessage"
    >
      <ExclamationTriangleIcon class="po-fill-current po-w-4" />
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
import {
  InformationCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/vue/24/solid";

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
   * Input display vertifal (default) or horizontal
   */
  display: {
    type: String,
    default: "vertical",
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
