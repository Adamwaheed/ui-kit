<template>
    <div class="po-relative">
        <!-- 
            v-model update
            @event update:modelValue
        -->
        <span class="po-text-sm po-font-medium po-text-slate-700 peer-focus:po-text-mpao-lightblue peer-invalid:po-text-red-500 peer-invalid:peer-focus:po-text-red-600 po-flex po-items-center po-space-x-1">{{ label }}</span>
        <input
            :name="`${id}-upload`"
            :id="`${id}-fileupload`"
            :value="modelValue"
            type="file"
            @input="$emit('update:modelValue', $event.target.value)"
            class="po-sr-only po-peer"
        >
        <label :for="`${id}-fileupload`" class="po-mt-1 po-block po-w-full po-border po-cursor-pointer po-rounded-md po-border-slate-300 po-bg-white peer-focus:po-border-mpao-lightblue invalid:po-border-red-400 invalid:focus:po-border-red-600 invalid:focus:po-ring-red-600 sm:po-text-sm po-p-2">
            <div class="po-flex po-items-center po-space-x-1">
                <PaperClipIcon class="po-w-4 po-stroke-slate-500" />
                <span class="po-text-sm">Choose file</span>
            </div>
        </label>

        <p class="po-mt-2 po-text-sm po-text-slate-500" :id="`${id}-description`" v-if="null !== message">{{ message }}</p>
        <p class="po-mt-2 po-text-sm po-text-red-600" :id="`${id}-error`" v-if="null !== errorMessage">{{ errorMessage }}</p>
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
  