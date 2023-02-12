<template>
<TransitionRoot as="template" :show="isShowing">
    <Dialog as="div" class="po-relative po-z-50" @close="isShowing = false">
      <div class="po-fixed po-inset-0" />

      <div class="po-fixed po-inset-0 po-overflow-hidden">
        <div class="po-absolute po-inset-0 po-overflow-hidden">
          <div class="po-pointer-events-none po-fixed po-inset-y-0 po-right-0 po-flex po-max-w-full po-pl-10">
            <TransitionChild as="template" enter="po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700" enter-from="po-translate-x-full" enter-to="po-translate-x-0" leave="po-transform po-transition po-ease-in-out po-duration-500 sm:po-duration-700" leave-from="po-translate-x-0" leave-to="po-translate-x-full">
              <DialogPanel :class="maxWidth" class="po-pointer-events-auto po-w-screen">
                <div class="po-flex po-h-full po-flex-col po-overflow-y-scroll po-bg-white po-shadow-xl">
                  <div class="po-bg-slate-50 po-py-6 po-px-4 sm:po-px-6">
                    <div class="po-flex po-items-center po-justify-between">
                      <DialogTitle class="po-text-lg po-font-medium po-text-slate-600">{{ label }}</DialogTitle>
                      <div class="po-ml-3 po-flex po-h-7 po-items-center">
                        <button type="button" class="po-rounded-md po-text-slate-500 hover:po-text-mpao-lightblue focus:po-outline-none focus:po-ring-2 focus:po-ring-white" @click="isShowing = false">
                          <span class="po-sr-only">Close panel</span>
                          <XMarkIcon class="po-h-6 po-w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                    <div v-if="description" class="po-mt-1">
                      <p class="po-text-sm po-text-slate-500">{{ description }}</p>
                    </div>
                  </div>
                  <div :class="bgcolor" class="po-relative po-flex-1 po-py-6 po-px-4 sm:po-px-6">
                    <!-- 
                        Slideover body content
                        @slot content
                     -->
                     <slot name="content"></slot>
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
import { ref, toRefs, watch } from 'vue';
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
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
    /**
     * Pass model Open/Close to the component
     */
     show: {
        type: Boolean,
        default: false
    },
    /**
     * Set width of the slideover. default:max-w-lg
     */
    maxWidth: {
      type: String,
      default: "po-max-w-lg"
    },
    /**
     * Add custom backgorund color to panel
     */
    bgColor: {
      type: String,
      default: ""
    }
});


const { show } = toRefs(props)
const isShowing = ref(false)

watch(show, () => {
  isShowing.value = false

  setTimeout(() => {
    isShowing.value = true
  }, 100)
})
</script>