<template>
    <TransitionRoot as="template" :show="isShowing">
      <Dialog as="div" class="po-relative po-z-50" @close="isShowing = false">
        <TransitionChild as="template" enter="po-ease-out po-duration-300" enter-from="po-opacity-0" enter-to="po-opacity-100" leave="po-ease-in po-duration-200" leave-from="po-opacity-100" leave-to="po-opacity-0">
          <div class="po-fixed po-inset-0 po-bg-gray-500 po-bg-opacity-75 po-transition-opacity" />
        </TransitionChild>
  
        <div class="po-fixed po-inset-0 po-z-10 po-overflow-y-auto">
          <div class="po-flex po-min-h-full po-items-start po-justify-center po-p-4 po-text-center  sm:po-p-0">
            <TransitionChild as="template" enter="po-ease-out po-duration-300" enter-from="po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95" enter-to="po-opacity-100 po-translate-y-0 sm:po-scale-100" leave="po-ease-in po-duration-200" leave-from="po-opacity-100 po-translate-y-0 sm:po-scale-100" leave-to="po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95">
              <DialogPanel class="po-relative po-transform po-overflow-hidden po-rounded-lg po-bg-white po-text-left po-shadow-xl po-transition-all sm:po-my-8 sm:po-w-full sm:po-max-w-sm">
                <div class="po-p-5">
                  <div class="po-text-center">
                    <DialogTitle as="h3" class="po-text-lg po-font-medium po-leading-6 po-text-gray-900">{{ alertTitle }}</DialogTitle>
                    <div v-if="alertDescription !== ''" class="po-mt-2">
                      <p class="po-text-sm po-text-gray-500">{{ alertDescription }}</p>
                    </div>
                  </div>
                </div>
                <div class="po-border-t po-border-slate-200 po-flex po-divide-x po-divide-slate-200">
                    <button @click="isShowing = false" class="po-text-sm po-bg-white po-text-slate-500 hover:po-bg-slate-50 po-transition-colors po-duration-100 po-ease-out po-font-medium po-py-3 po-px-5 po-w-1/2 focus:po-ring-0">{{ cancelBtnLabel }}</button>
                    <!--
                        Emits the ok when it’s clicked
                        @event button-click
                    -->
                    <button @click="$emit('button-click', 'ok'); isShowing = false" class="po-text-sm po-bg-white po-text-mpao-lightblue hover:po-bg-slate-50 po-transition-colors po-duration-100 po-ease-out po-font-medium po-py-3 po-px-5 po-w-1/2 focus:po-ring-0">{{ okBtnLabel }}</button>
                </div>
                    
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </template>
  
<script>
export default {
  name: 'PoAlert',
}
</script>
  <script setup>
  import { ref, toRefs, watch } from 'vue';
  import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
  

const props = defineProps({
    /**
     * Modal cancel button label
     */
    cancelBtnLabel: {
      type: String,
      default: "Cancel",
    },
    /**
     * Modal cancel button label
     */
    okBtnLabel: {
      type: String,
      default: "Ok",
    },
    /**
     * Modal Title
     */
    alertTitle: {
      type: String,
      default: "Alert",
    },
    /**
     * Modal Title
     */
    alertDescription: {
      type: String,
      default: "",
    },
    /**
     * Pass model Open/Close to the component
     */
    show: {
        type: Boolean,
        default: false
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