<template>
<Teleport to="#po-notifications-alert" v-if="isShowing">
    <transition enter-active-class="po-transform po-ease-out po-duration-300 po-transition" enter-from-class="po-translate-y-2 po-opacity-0 sm:po-translate-y-0 sm:po-translate-x-2" enter-to-class="po-translate-y-0 po-opacity-100 sm:po-translate-x-0" leave-active-class="po-transition po-ease-in po-duration-100" leave-from-class="po-opacity-100" leave-to-class="po-opacity-0">
        <div v-if="showNotification" class="po-pointer-events-auto po-w-full po-max-w-sm po-overflow-hidden po-rounded-lg po-bg-mpao-lightblue po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5">
        <div class="po-p-4">
            <div class="po-flex po-items-start">
            <div class="po-flex-shrink-0">
                <!--
                    @slot Icon of the notification goes here.
                -->
                <slot name="icon"></slot>
            </div>
            <div class="po-ml-3 po-w-0 po-flex-1 po-pt-0.5">
                <p class="po-text-sm po-font-medium po-text-sky-100">{{ label }}</p>
                <p class="po-mt-1 po-text-sm po-text-sky-300">{{ text }}</p>
                <div class="po-mt-3 po-flex po-space-x-4">
                    <!--
                        Emits the button label when it’s clicked
                        @event button-click
                    -->
                    <button @click="$emit('button-click', buttonLabel)" type="button" class="po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-100 hover:po-text-sky-200 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2">{{ buttonLabel }}</button>
                    <button @click="isShowing = false" type="button" class="po-rounded-md po-bg-mpao-lightblue po-text-sm po-font-medium po-text-sky-300 hover:po-text-sky-500 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2">Dismiss</button>
                </div>
            </div>
            <div class="po-ml-4 po-flex po-flex-shrink-0">
                <button type="button" @click="isShowing = false" class="po-inline-flex po-rounded-md po-bg-mpao-lightblue po-text-sky-500 hover:po-text-sky-300 focus:po-outline-none focus:po-ring-2 focus:po-ring-sky-200 focus:po-ring-offset-2">
                <span class="po-sr-only">Close</span>
                <XMarkIcon class="po-h-5 po-w-5" aria-hidden="true" />
                </button>
            </div>
            </div>
        </div>
        </div>
    </transition>
</Teleport>
  </template>
  
<script>
export default {
  name: "PoNotification",
};
</script>

<script setup>
  import { ref, toRefs, watch } from 'vue'
  import { XMarkIcon } from '@heroicons/vue/20/solid'
  
  const props = defineProps({
  /**
   * Show hide notification
   */
   show: {
    type: Boolean,
    default: false,
  },
  /**
   * Notification label
   */
   label: {
    type: String,
    default: "",
  },
  /**
   * Notification text
   */
   text: {
    type: String,
    default: "",
  },
  /**
   * Notification text
   */
   buttonLabel: {
    type: String,
    default: "Ok",
  },
});

const emit = defineEmits(['button-click']);

const { show } = toRefs(props)
const isShowing = ref(false)

watch(show, () => {
  isShowing.value = false

  setTimeout(() => {
    isShowing.value = true
  }, 100)
})


// should probably find a better solution for this
// want to show notification fade in animation with thi hack
// had to do this cos there was an error when I tried to display multiple
// notifcations in the same page... without v-if="isShowing" in Teleport error occurs.

const showNotification = ref(false)

watch(isShowing, () => {
  showNotification.value = false

  setTimeout(() => {
    showNotification.value = true
  }, 200)
})

</script>