<template>
    <RadioGroup v-model="selectedOption">
        <RadioGroupLabel class="text-sm font-medium flex items-center space-x-1 text-slate-700">{{ label }}</RadioGroupLabel>

        <div v-if="null !== options" class="mt-1 flex space-x-3 flex-wrap">
        <RadioGroupOption as="template" v-for="option in options" :key="option.id" :value="option" v-slot="{ checked, active }">
            <div :class="[checked ? 'border-transparent' : 'border-gray-300', active ? 'border-mpao-lightblue ring-1 ring-mpao-lightblue' : '', 'mb-3 relative flex cursor-pointer rounded-lg border bg-white px-3 py-2 shadow-sm focus:outline-none']">
                <span class="flex flex-1">
                    <span class="flex flex-col">
                    <RadioGroupLabel as="span" class="block text-sm font-medium text-gray-900">{{ option.title }}</RadioGroupLabel>
                    <RadioGroupDescription v-if="option.description" as="span" class="mt-1 flex items-center text-sm text-gray-500">{{ option.description }}</RadioGroupDescription>
                    </span>
                </span>
                <CheckCircleIcon :class="[!checked ? 'invisible' : '', 'h-5 w-5 ml-2 text-mpao-lightblue']" aria-hidden="true" />
                <span :class="[active ? 'border' : 'border', checked ? 'border-mpao-lightblue' : 'border-transparent', 'pointer-events-none absolute -inset-px rounded-lg']" aria-hidden="true" />
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
        type: [String, Number],
        default: "",
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

const emit = defineEmits(['selected', 'unSelected'])

watch(selectedOption, () => {
  emit('update:modelValue', selectedOption.value)
})
</script>