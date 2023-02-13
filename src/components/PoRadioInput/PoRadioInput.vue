<template>
    <RadioGroup v-model="selectedOption">
        <RadioGroupLabel class="po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700">{{ label }}</RadioGroupLabel>

        <div v-if="null !== options" class="po-mt-1 po-flex -po-mb-3 po-flex-wrap">
        <RadioGroupOption as="template" v-for="option in options" :key="option.id" :value="option" v-slot="{ checked, active }">
            <div :class="['po-transition-colors po-duration-100 po-ease-out po-mr-3', checked ? 'po-border-transparent' : 'po-border-gray-300 hover:po-border-mpao-lightblue', active ? 'po-border-mpao-lightblue po-ring-1 po-ring-mpao-lightblue' : '', 'po-mb-3 po-relative po-flex po-cursor-pointer po-rounded-lg po-border po-bg-white po-px-3 po-py-2 po-shadow-sm focus:po-outline-none']">
                <span class="po-flex po-flex-1">
                    <span class="po-flex po-flex-col">
                    <RadioGroupLabel as="span" class="po-block po-text-sm po-font-medium po-text-gray-900">{{ option.title }}</RadioGroupLabel>
                    <RadioGroupDescription v-if="option.description" as="span" class="po-mt-1 po-flex po-items-center po-text-sm po-text-gray-500">{{ option.description }}</RadioGroupDescription>
                    </span>
                </span>
                <CheckCircleIcon :class="[!checked ? 'po-invisible' : '', 'po-h-5 po-w-5 po-ml-2 po-text-mpao-lightblue']" aria-hidden="true" />
                <span :class="[active ? 'po-border' : 'po-border', checked ? 'po-border-mpao-lightblue' : 'po-border-transparent', 'po-pointer-events-none po-absolute -po-inset-px po-rounded-lg']" aria-hidden="true" />
            </div>
        </RadioGroupOption>
        </div>
    </RadioGroup>
</template>

<script>
export default {
  name: "PoRadioInput",
};
</script>
<script setup>
import { ref, watch } from 'vue';
import { RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue';
import { CheckCircleIcon } from '@heroicons/vue/20/solid';


const props = defineProps({
    /**
     * Model value
     */
    modelValue: {
        type: Object,
        default: null,
    },
    /**
     * List of options for raido
     */
     options: {
      type: Array,
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
});

const selectedOption = ref(props.preSelected)

const emit = defineEmits(['selected', 'unSelected', 'update:modelValue'])

watch(selectedOption, () => {
  emit('update:modelValue', selectedOption.value)
})
</script>