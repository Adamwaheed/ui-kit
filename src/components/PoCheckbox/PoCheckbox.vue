<template>
    <div class="relative flex items-start">
      <div class="flex h-5 items-center">
        <input
            :name="`${id}-field`"
            :id="id"
            :checked="modelValue"
            :placeholder="placeholder"
            :disabled="disabled"
            :required="required"
            :aria-describedby="`${id}-description`"
            v-bind="$attrs"
            @input="$emit('update:modelValue', $event.target.checked)"
            type="checkbox"
            class="h-4 w-4 rounded border-slate-300 text-mpao-lightblue focus:ring-mpao-lightblue"
        />
      </div>
      <div class="ml-3 text-sm">
        <label :for="id" class="font-medium text-slate-600 cursor-pointer select-none">{{ label }}</label>
        <span v-if="message" :id="`${id}-description`" class="text-slate-500 cursor-default"><span class="sr-only">{{ label }} </span> {{ message }}</span>
      </div>
      <p class="mt-2 text-sm text-red-600" :id="`${id}-error`" v-if="null !== errorMessage">{{ errorMessage }}</p>
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

});
</script>