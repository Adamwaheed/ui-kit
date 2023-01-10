<template>
  <div class="relative pt-5">
      <!-- 
          v-model update
          @event update:modelValue
        -->
      <button
          type="text"
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
          class="mt-1 peer block w-full text-left transition-colors duration-100 ease-in-out rounded-md border-slate-300 bg-white focus:border-mpao-lightblue focus:ring-0 invalid:border-red-400 invalid:focus:border-red-600 invalid:focus:ring-red-600 sm:text-sm"
          >
          {{ selectedValue }}
        </button>
      <label
          :for="id"
          class="absolute top-0 text-sm font-medium text-slate-700 peer-focus:text-mpao-lightblue peer-invalid:text-red-500 peer-invalid:peer-focus:text-red-600 flex items-center space-x-1"
          >
          <span>{{ label }}</span>
          <abbr v-if="null !== info" :title="info" class="w-4 text-slate-500">
              <InformationCircleIcon />
          </abbr>
      </label>
      <span class="absolute top-[2.2rem] right-3 origin-center peer-focus:rotate-180 transition-transform duration-100 ease-in-out">
        <ChevronDownIcon class="w-4 fill-slate-500" />
      </span>
      <div class="absolute hidden top-13 bg-white rounded-md overflow-hidden shadow-md peer-focus:block w-full divide-y divide-slate-200">
        <span @click="setSelectedValue('Option one')" class="block p-3 text-sm text-slate-600 hover:cursor-pointer hover:bg-slate-50 transition-colors duration-100 ease-in-out">Option one</span>
        <span @click="setSelectedValue('Option two')" class="block p-3 text-sm text-slate-600 hover:cursor-pointer hover:bg-slate-50 transition-colors duration-100 ease-in-out">Option two</span>
        <span @click="setSelectedValue('Option three')" class="block p-3 text-sm text-slate-600 hover:cursor-pointer hover:bg-slate-50 transition-colors duration-100 ease-in-out">Option three</span>
      </div>
      <p class="mt-2 text-sm text-slate-500" :id="`${id}-description`" v-if="null !== message">{{ message }}</p>
      <p class="mt-2 text-sm text-red-600" :id="`${id}-error`" v-if="null !== errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  name: "PoSelectField",
};
</script>
<script setup>
import { InformationCircleIcon, ChevronDownIcon } from '@heroicons/vue/24/solid'
import { ref } from 'vue'

let selectedValue = ref('Hello')

function setSelectedValue(val) {
  console.log('aaa', val)
  this.selectedValue.value = val
}

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
    /**
     * True or false if required
     */
    required: {
        type: Boolean,
        default: false
    },
    /**
     * True or false if disabled
     */
    disabled: {
        type: Boolean,
        default: false
    },
    /**
     * True or false if required
     */
    placeholder: {
        type: String,
        default: null
    },
});
</script>