<template>
  <Combobox as="div" v-model="selectedItem">
    <ComboboxLabel class="block text-sm font-medium text-slate-700">{{ label }}</ComboboxLabel>
    <div class="relative mt-1">
      <ComboboxInput class="w-full rounded-md border border-slate-300 bg-white py-2 pl-3 pr-10 focus:border-mpao-lightblue focus:outline-none focus:ring-0 sm:text-sm" @change="query = $event.target.value" :display-value="(item) => item?.name" />
      <ComboboxButton class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
        <ChevronUpDownIcon class="h-5 w-5 text-slate-400" aria-hidden="true" />
      </ComboboxButton>

      <ComboboxOptions v-if="filteredItems.length > 0" class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
        <ComboboxOption v-for="item in filteredItems" :key="item.id" :value="item" as="template" v-slot="{ active, selected }">
          <li :class="['relative cursor-default select-none py-2 pl-3 pr-9', active ? 'bg-mpao-lightblue text-white' : 'text-slate-900']">
            <span :class="['block truncate', selected && 'font-semibold']">
              {{ item.name }}
            </span>

            <span v-if="selected" :class="['absolute inset-y-0 right-0 flex items-center pr-4', active ? 'text-white' : 'text-mpao-lightblue']">
              <CheckIcon class="h-5 w-5" aria-hidden="true" />
            </span>
          </li>
        </ComboboxOption>
      </ComboboxOptions>
    </div>
  </Combobox>
</template>

<script>
export default {
  name: "PoSelectField",
};
</script>
<script setup>
import { computed, ref, watch } from 'vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxLabel,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/vue'

const props = defineProps({
  /**
   * Model value
   */
   modelValue: {
    type: [String, Number],
    default: "",
  },
    /**
     * Pre selected value if any
     */
     preSelected: {
      type: Object,
      default: null,
    },
    /**
     * Label text
     */
    label: {
        type: String,
        default: "",
    },
    /**
     * List of options
     */
    list: {
        type: Array,
        default: null,
    },
});

const query = ref('')
const selectedItem = ref(props.preSelected)

const filteredItems = computed(() =>
  query.value === ''
    ? props.list
    : props.list.filter((item) => {
        return item.name.toLowerCase().includes(query.value.toLowerCase())
      })
)

const emit = defineEmits(['selected', 'unSelected'])

watch(selectedItem, () => {
  emit('update:modelValue', selectedItem.value)
})
</script>