<template>
    <div>
    <PoButton v-if="openBtnLabel.length > 0" :label="openBtnLabel" @click="isShowing = true" />
    <TransitionRoot as="template" :show="isShowing">
      <Dialog as="div" class="relative z-50" @close="isShowing = false">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gradient-to-br from-mpao-orange via-mpao-lightblue to-mpao-blue opacity-60 transition-opacity" />
        </TransitionChild>
  
        <div class="fixed z-10 inset-0 overflow-y-auto">
          <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <!-- This element is to trick the browser into centering the modal contents. -->
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <DialogPanel class="relative inline-block align-bottom bg-white rounded-xl text-left shadow-xl transform transition-all sm:align-middle sm:max-w-xl w-full">
                <div class="flex items-center bg-mpao-lightblue rounded-t-xl p-5">
                    <h3 class="grow text-md font-bold text-slate-100">{{ modalTitle }}</h3>
                    <div class="shrink-0">
                        <span role="button" class="block" @click="isShowing = false"><XMarkIcon class="w-5 stroke-slate-100 hover:stroke-mpao-orange transition-colors duration-150 ease-in-out" /></span>
                    </div>
                </div>
                <div class="p-5">
                    <!-- 
                        Modal body content
                        @slot content
                     -->
                    <slot name="content"></slot>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script>
export default {
  name: "PoModal",
};
</script>
<script setup>
import { ref, toRefs, watch } from 'vue';
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { XMarkIcon } from '@heroicons/vue/24/outline';

import { PoButton } from "../../components";

const props = defineProps({
    /**
     * Modal open button label
     */
    openBtnLabel: {
      type: String,
      default: "",
    },
    /**
     * Modal Title
     */
    modalTitle: {
      type: String,
      default: "Modal windows",
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