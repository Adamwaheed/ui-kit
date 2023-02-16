<template>
  <div class="po-relative po-flex po-items-start">
    <div class="po-flex po-h-5 po-items-center">
      <input
        :name="`${id}-field`"
        :id="id"
        :checked="modelValue"
        :disabled="disabled"
        :aria-describedby="`${id}-description`"
        v-bind="$attrs"
        @input="$emit('update:modelValue', $event.target.checked)"
        type="checkbox"
        class="
          po-h-4 po-w-4 po-rounded po-border-slate-300 po-text-mpao-lightblue
          focus:po-ring-mpao-lightblue
        "
      />
    </div>
    <div class="po-ml-3 po-text-sm">
      <label
        :for="id"
        class="
          po-font-medium po-text-slate-600 po-cursor-pointer po-select-none
        "
        >{{ label }}</label
      >
      <span
        v-if="message"
        :id="`${id}-description`"
        class="po-text-slate-500 po-cursor-default"
        ><span class="po-sr-only">{{ label }} </span> {{ message }}</span
      >
    </div>
    <p
      class="po-mt-2 po-text-sm po-text-red-600"
      :id="`${id}-error`"
      v-if="null !== errorMessage"
    >
      {{ errorMessage }}
    </p>
  </div>
</template>

<script>
export default {
  name: "PoCheckbox",
};
</script>
<script setup>
defineProps({
  /**
   * Model value
   */
  modelValue: {
    type: Boolean,
    default: false,
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
   * True or false if disabled
   */
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>
