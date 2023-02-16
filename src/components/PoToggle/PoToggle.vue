<template>
  <SwitchGroup as="div" class="po-flex po-items-center">
    <Switch
      v-model="enabled"
      @click="$emit('update:modelValue', !enabled)"
      :class="[
        enabled ? 'po-bg-mpao-lightblue' : 'po-bg-slate-200',
        'po-relative po-inline-flex po-h-6 po-w-11 po-flex-shrink-0 po-cursor-pointer po-rounded-full po-border-2 po-border-transparent po-transition-colors po-duration-200 po-ease-in-out focus:po-outline-none focus:po-ring-2 focus:po-ring-mpao-lightblue focus:po-ring-offset-2',
      ]"
    >
      <span
        aria-hidden="true"
        :class="[
          enabled ? 'po-translate-x-5' : 'po-translate-x-0',
          'po-pointer-events-none po-inline-block po-h-5 po-w-5 po-transform po-rounded-full po-bg-white po-shadow po-ring-0 po-transition po-duration-200 po-ease-in-out',
        ]"
      />
    </Switch>
    <SwitchLabel as="span" class="po-ml-3">
      <span
        class="
          po-text-sm
          po-font-medium
          po-text-slate-700
          po-cursor-pointer
          po-select-none
        "
        >{{ label }}</span
      >
    </SwitchLabel>
  </SwitchGroup>
</template>

<script>
export default {
  name: "PoToggle",
};
</script>
<script setup>
import { ref } from "vue";
import { Switch, SwitchGroup, SwitchLabel } from "@headlessui/vue";

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

const enabled = ref(props.modelValue);
</script>
