<template>
  <TransitionRoot :show="isShowing" as="template" @after-leave="query = ''" appear>
    <Dialog as="div" class="po-relative po-z-50" @close="isShowing = false">
      <TransitionChild as="template" enter="po-ease-out po-duration-300" enter-from="po-opacity-0" enter-to="po-opacity-100" leave="po-ease-in po-duration-200" leave-from="po-opacity-100" leave-to="po-opacity-0">
        <div class="po-fixed po-inset-0 po-bg-gray-500 po-bg-opacity-25 po-transition-opacity" />
      </TransitionChild>

      <div class="po-fixed po-inset-0 po-z-10 po-overflow-y-auto po-p-4 sm:po-p-6 md:po-p-20">
        <TransitionChild as="template" enter="po-ease-out po-duration-300" enter-from="po-opacity-0 po-scale-95" enter-to="po-opacity-100 po-scale-100" leave="po-ease-in po-duration-200" leave-from="po-opacity-100 po-scale-100" leave-to="po-opacity-0 po-scale-95">
          <DialogPanel class="po-mx-auto po-max-w-xl po-transform po-divide-y po-divide-gray-100 po-overflow-hidden po-rounded-xl po-bg-white po-shadow-2xl po-ring-1 po-ring-black po-ring-opacity-5 po-transition-all">
              <div class="po-relative">
                <MagnifyingGlassIcon class="po-pointer-events-none po-absolute po-top-3.5 po-left-4 po-h-5 po-w-5 po-text-gray-400" aria-hidden="true" />
                <input type="text" name="" class="po-h-12 po-w-full po-border-0 po-bg-transparent po-pl-11 po-pr-4 po-text-gray-800 po-placeholder-gray-400 focus:po-ring-0 sm:po-text-sm" placeholder="Search..." @change="query = $event.target.value">
              </div>

              <div v-if="showContent" class="po-max-h-96 scroll-py-3 po-overflow-y-auto po-p-3">
                <!-- 
                  Palette content area
                  @slot content
                -->
                <slot name="content"></slot>
              </div>

              
          </DialogPanel>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
export default {
name: "PoCommandPalette",
};
</script>
<script setup>
import { computed, ref, toRefs, watch, onMounted, onBeforeUnmount } from 'vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'

import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'

const query = ref('')


const props = defineProps({
    /**
     * Pass model Open/Close to the component
     */
    show: {
        type: Boolean,
        default: false
    },
    /**
     * Show / hide content
     */
    showContent: {
        type: Boolean,
        default: false
    },
});

const { show } = toRefs(props)
const isShowing = ref(false)

watch(show, () => {
  isShowing.value = false

  setTimeout(() => {
    isShowing.value = true
  }, 100)
});

function keyupHandler(event) {
  if(event.ctrlKey && event.key === "b") {
    isShowing.value = true
  }
}

onMounted(() => {
  window.addEventListener("keyup", keyupHandler);
});

onBeforeUnmount(() => {
  window.removeEventListener("keyup", keyupHandler);
});
</script>