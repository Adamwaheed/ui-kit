<template>
    <div class="relative pt-5">
        <!-- 
            v-model update
            @event update:modelValue
        -->
        <span class="text-sm font-medium text-slate-700 peer-focus:text-mpao-lightblue peer-invalid:text-red-500 peer-invalid:peer-focus:text-red-600 flex items-center space-x-1">{{ label }}</span>
        <input
            :name="`${id}-upload`"
            :id="`${id}-fileupload`"
            :value="modelValue"
            type="file"
            @input="$emit('update:modelValue', $event.target.value)"
            class="sr-only peer"
        >
        <label :for="`${id}-fileupload`" class="mt-1 block w-full border cursor-pointer rounded-md border-slate-300 bg-white peer-focus:border-mpao-lightblue invalid:border-red-400 invalid:focus:border-red-600 invalid:focus:ring-red-600 sm:text-sm p-2">
            <div class="flex items-center space-x-1">
                <PaperClipIcon class="w-4 stroke-slate-500" />
                <span class="text-sm">Choose file</span>
            </div>
        </label>

        <p class="mt-2 text-sm text-slate-500" :id="`${id}-description`" v-if="null !== message">{{ message }}</p>
        <p class="mt-2 text-sm text-red-600" :id="`${id}-error`" v-if="null !== errorMessage">{{ errorMessage }}</p>
      </div>
  </template>
  
  <script>
  export default {
    name: "PoInputFile",
  };
  </script>
  <script setup>
  import { PaperClipIcon } from '@heroicons/vue/24/outline';
  
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
  