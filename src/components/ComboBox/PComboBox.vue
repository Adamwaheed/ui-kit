<template>
  <div class="">
    <Listbox v-model="selected" @update:modelValue="handleInput">
      <div class="relative mt-1">
        <ListboxButton :class="ListBoxButtonClass">
          <slot name="selected" :data="selected">
            <span class="block truncate">{{ selected.name }}</span>
            <span
              class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
            >
              <ChevronDownIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
            </span>
          </slot>
        </ListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions :class="ListboxOptionsClass">
            <ListboxOption
              v-slot="{ active, selected }"
              v-for="item in items"
              :key="item.name"
              :value="item"
              as="div"
            >
              <slot
                name="option"
                :item="item"
                :active="active"
                :selected="selected"
              >
                <li
                  :class="[
                    active ? 'text-amber-900 bg-amber-100' : 'text-gray-900',
                    'cursor-default select-none relative py-2 pl-10 pr-4',
                  ]"
                >
                  <span
                    :class="[
                      selected ? 'font-medium' : 'font-normal',
                      'block truncate',
                    ]"
                    >{{ item.name }}</span
                  >
                  <span
                    v-if="selected"
                    class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                  >
                    <CheckIcon class="w-5 h-5" aria-hidden="true" />
                  </span>
                </li>
              </slot>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";
import { CheckIcon, ChevronDownIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
  ListBoxButtonClass: {
    type: String,
    required: false,
    default:
      "relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm",
  },
  ListboxOptionsClass: {
    type: String,
    required: false,
    default:
      "absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
  },
  items: {
    type: Array,
    required: false,
    default() {},
  },
  itemValue: {
    type: String,
    default: "id",
  },

  itemText: {
    type: String,
    default: "name",
  },
  object: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: [Number, Object],
    default: "",
  },
});

const emit = defineEmits(["update"]);
let selected = ref(props.items[0]);

if (props.object) {
  selected.value = props.modelValue;
} else {
  const index = props.items.findIndex((element) => {
    return element[props.itemValue] === props.modelValue;
  });

  if (index > -1) {
    console.log(props.items[index]);
    selected.value = props.items[index];
  }
}

// watch(
//   () => props.modelValue,
//   (newValue, oldValue) => {}
// );

function handleInput(event) {
  let value = 0;
  if (props.object) {
    value = event;
  } else {
    value = event[props.itemValue];
  }
  emit("update:modelValue", value);
}
</script>
