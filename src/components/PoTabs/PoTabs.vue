<template>
  <div class="sm:po-hidden">
    <label for="tabs" class="po-sr-only">Select a tab</label>
    <select
      id="tabs"
      name="tabs"
      class="
        po-block po-w-full po-rounded-md po-border-gray-300
        focus:po-border-indigo-500 focus:po-ring-indigo-500
      "
    >
      <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">
        {{ tab.name }}
      </option>
    </select>
  </div>
  <div class="po-hidden sm:po-block">
    <!--
        Emits tab object when tab is clicked
        @event button-click
    -->
    <nav class="po-flex po-space-x-4 po-pt-2" aria-label="Tabs">
      <span
        @click="$emit('button-click', tab)"
        role="button"
        v-for="tab in tabs"
        :key="tab.name"
        :class="[
          tab.current
            ? 'po-bg-white po-text-slate-600 po-shadow-md'
            : 'po-text-slate-600 hover:po-text-mpao-blue',
          'po-px-4 po-py-3 po-font-medium po-text-sm po-cursor-pointer po-rounded-xl genie-effect hover:po-text-slate-600 hover:po-bg-white hover:po-shadow-md po-flex po-items-center po-space-x-2',
        ]"
        :aria-current="tab.current ? 'page' : undefined"
      >
        <component
          v-if="tab.icon"
          :is="tab.icon"
          class="po-w-5 po-h-5 po-stroke-2 po-stroke-current"
        />
        <span>{{ tab.name }}</span>
      </span>
    </nav>
  </div>
</template>

<script>
export default {
  name: "PoTabs",
};
</script>
<script setup>
defineProps({
  /**
   * Page title
   */
  tabs: {
    type: Array,
    default: null,
  },
});

const emit = defineEmits(["button-click"]);
</script>
