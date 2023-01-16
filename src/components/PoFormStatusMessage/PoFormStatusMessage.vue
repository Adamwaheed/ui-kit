<template>
    <div v-if="isError" class="flex items-start space-x-4 p-5 bg-red-100 rounded-md mt-5">
        <ExclamationTriangleIcon class="w-8 stroke-red-600" />
        <div class="pt-1">
            <span class="text-base font-medium text-red-700">{{ message }}</span>
            <ul class="text-sm text-red-800 list-disc ml-5 mt-2">
                <li v-for="error in errorList">{{ error }}</li>
            </ul>
        </div>
    </div>
    <div v-else class="flex items-start space-x-4 p-5 bg-green-100 rounded-md mt-5">
        <CheckCircleIcon class="w-8 stroke-green-600" />
        <div class="pt-1">
            <span class="text-base font-medium text-green-700">{{ message }}</span>
        </div>
    </div>
</template>

<script>
export default {
  name: "PoFormStatusMessage",
};
</script>

<script setup>

import { ExclamationTriangleIcon, CheckCircleIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
    /**
     * If it's an error message, by default it's a success message
     */
    isError: {
      type: Boolean,
      default: false,
    },
    /**
     * The message to display
     */
    message: {
      type: String,
      default: "This is a form status",
    },
    /**
     * A list of errors
     */
    errorList: {
      type: Array,
      default: null,
    },
    
});

</script>