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
    <nav
      class="
        po-flex po-space-x-4
        bg-slate-50
        po-rounded-t-xl po-px-4 po-pt-2 po-overflow-hidden
      "
      aria-label="Tabs"
    >
      <span
        role="button"
        v-for="tab in tabs"
        :key="tab.name"
        :class="[
          tab.current
            ? 'po-bg-white po-text-slate-600 po-shadow-lg'
            : 'po-text-slate-600 hover:po-text-mpao-blue',
          'po-px-4 po-py-3 po-font-medium po-text-sm po-cursor-pointer po-rounded-t-xl genie-effect hover:po-text-slate-600 hover:po-bg-white hover:po-shadow-md po-flex po-items-center po-space-x-2',
        ]"
        :aria-current="tab.current ? 'page' : undefined"
      >
        <component
          v-if="tab.icon"
          :is="tab.icon"
          class="po-w-4 po-h-4 po-stroke-current"
        />
        <span>{{ tab.name }}</span>
      </span>
    </nav>
  </div>
</template>

<script>
export default {
  name: "PoCardTabs",
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
