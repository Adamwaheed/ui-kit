<template>
    <SwitchGroup as="div" class="flex items-center">
      <Switch v-model="enabled" @click="$emit('update:modelValue', !enabled)" :class="[enabled ? 'bg-mpao-lightblue' : 'bg-slate-200', 'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-mpao-lightblue focus:ring-offset-2']">
        <span aria-hidden="true" :class="[enabled ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']" />
      </Switch>
      <SwitchLabel as="span" class="ml-3">
        <span class="text-sm font-medium text-slate-700 cursor-pointer select-none">{{ label }}</span>
      </SwitchLabel>
    </SwitchGroup>
  </template>
  
  <script>
export default {
  name: "PoToggle",
};
</script>
<script setup>
import { ref } from 'vue'
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'

const props = defineProps({
    /**
     * Model value
     */
     modelValue: {
      type: Boolean,
      default: false,
    },
    /**
     * Label text
     */
    label: {
        type: String,
        default: "",
    },
});

const enabled = ref(props.modelValue)
  </script>