<template>
  <Combobox
    as="div"
    v-model="selectedItem"
    :class="[{ 'lg:po-grid lg:po-grid-cols-2': 'horizontal' === display }]"
  >
    <ComboboxLabel
      class="
        po-text-sm
        po-font-medium
        po-text-slate-700
        po-flex
        po-items-center
        po-space-x-1
      "
    >
      <span>{{ label }}</span>
      <span v-if="required" class="po-text-lg po-text-red-400 po-font-semibold"
        >&#42;</span
      >
      <abbr v-if="null !== info" :title="info" class="po-w-4 po-text-slate-500">
        <InformationCircleIcon class="po-fill-current" />
      </abbr>
    </ComboboxLabel>
    <div class="po-relative po-mt-1">
      <ComboboxInput
        class="
          po-w-full
          po-rounded-md
          po-border
          po-border-slate-300
          po-bg-white
          po-py-2
          po-pl-3
          po-pr-10
          focus:po-border-mpao-lightblue focus:po-outline-none focus:po-ring-0
          sm:po-text-sm
        "
        @change="query = $event.target.value"
        :display-value="(item) => item?.name"
      />
      <ComboboxButton
        class="
          po-absolute
          po-inset-y-0
          po-right-0
          po-flex
          po-items-center
          po-rounded-r-md
          po-px-2
          focus:po-outline-none
        "
      >
        <ChevronUpDownIcon
          class="po-h-5 po-w-5 po-text-slate-400"
          aria-hidden="true"
        />
      </ComboboxButton>

      <ComboboxOptions
        v-if="filteredItems.length > 0"
        class="
          po-absolute
          po-z-10
          po-mt-1
          po-max-h-60
          po-w-full
          po-overflow-auto
          po-rounded-md
          po-bg-white
          po-py-1
          po-text-base
          po-shadow-lg
          po-ring-1
          po-ring-black
          po-ring-opacity-5
          focus:po-outline-none
          sm:po-text-sm
        "
      >
        <ComboboxOption
          v-for="item in filteredItems"
          :key="item.id"
          :value="item"
          @click="$emit('selected', selectedItem)"
          as="template"
          v-slot="{ active, selected }"
        >
          <li
            :class="[
              'po-relative po-cursor-default po-select-none po-py-2 po-pl-3 po-pr-9',
              active
                ? 'po-bg-mpao-lightblue po-text-white'
                : 'po-text-slate-900',
            ]"
          >
            <span
              :class="['po-block po-truncate', selected && 'po-font-semibold']"
            >
              {{ item.name }}
            </span>

            <span
              v-if="selected"
              :class="[
                'po-absolute po-inset-y-0 po-right-0 po-flex po-items-center po-pr-4',
                active ? 'po-text-white' : 'po-text-mpao-lightblue',
              ]"
            >
              <CheckIcon class="po-h-5 po-w-5" aria-hidden="true" />
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
import { computed, ref, watch } from "vue";
import {
  CheckIcon,
  ChevronUpDownIcon,
  InformationCircleIcon,
} from "@heroicons/vue/20/solid";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxLabel,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/vue";

const props = defineProps({
  /**
   * Model value
   */
  modelValue: {
    type: [Object],
    default: null,
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
   * A tool tip, helper information
   */
  info: {
    type: String,
    default: null,
  },
  /**
   * List of options
   */
  list: {
    type: Array,
    default: null,
  },
  /**
   * Input display vertifal (default) or horizontal
   */
  display: {
    type: String,
    default: "vertical",
  },
  /**
   * True or false if required
   */
  required: {
    type: Boolean,
    default: false,
  },
});

const query = ref("");
const selectedItem = ref(props.preSelected);

const filteredItems = computed(() =>
  query.value === ""
    ? props.list
    : props.list.filter((item) => {
        return item.name.toLowerCase().includes(query.value.toLowerCase());
      })
);

const emit = defineEmits(["update:modelValue", "selected"]);

watch(selectedItem, () => {
  emit("update:modelValue", selectedItem.value);
});
</script>
