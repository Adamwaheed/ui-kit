<template>
<TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <div class="fixed inset-0" />

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
              <DialogPanel class="pointer-events-auto w-screen max-w-md">
                <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div class="bg-mpao-lightblue py-6 px-4 sm:px-6">
                    <div class="flex items-center justify-between">
                      <DialogTitle class="text-lg font-medium text-white">{{ label }}</DialogTitle>
                      <div class="ml-3 flex h-7 items-center">
                        <button type="button" class="rounded-md bg-mpao-lightblue text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white" @click="open = false">
                          <span class="sr-only">Close panel</span>
                          <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                    <div v-if="description" class="mt-1">
                      <p class="text-sm text-indigo-300">{{ description }}</p>
                    </div>
                  </div>
                  <div class="relative flex-1 py-6 px-4 sm:px-6">
                    <!-- Replace with your content -->
                    <div class="absolute inset-0 py-6 px-4 sm:px-6">
                      <div class="h-full border-2 border-dashed border-gray-200" aria-hidden="true" />
                    </div>
                    <!-- /End replace -->
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
</TransitionRoot>
</template>

<script>
export default {
  name: "PoSlideover",
};
</script>
<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

const open = ref(true)


defineProps({
    /**
     * Slideover label/title
     */
    label: {
        type: String,
        default: null
    },
    /**
     * Slideover description. Optional
     */
    description: {
        type: String,
        default: null
    },
});
</script>