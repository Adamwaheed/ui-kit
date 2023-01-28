<template>
<Teleport to="#po-notifications-alert" v-if="isShowing">
    <transition enter-active-class="transform ease-out duration-300 transition" enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" enter-to-class="translate-y-0 opacity-100 sm:translate-x-0" leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <div v-if="showNotification" class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-mpao-lightblue shadow-lg ring-1 ring-black ring-opacity-5">
        <div class="p-4">
            <div class="flex items-start">
            <div class="flex-shrink-0">
                <!--
                    @slot Icon of the notification goes here.
                -->
                <slot name="icon"></slot>
            </div>
            <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-medium text-sky-100">{{ label }}</p>
                <p class="mt-1 text-sm text-sky-300">{{ text }}</p>
                <div class="mt-3 flex space-x-4">
                    <button type="button" class="rounded-md bg-mpao-lightblue text-sm font-medium text-sky-100 hover:text-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:ring-offset-2">{{ buttonLabel }}</button>
                    <button @click="isShowing = false" type="button" class="rounded-md bg-mpao-lightblue text-sm font-medium text-sky-300 hover:text-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:ring-offset-2">Dismiss</button>
                </div>
            </div>
            <div class="ml-4 flex flex-shrink-0">
                <button type="button" @click="isShowing = false" class="inline-flex rounded-md bg-mpao-lightblue text-sky-500 hover:text-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:ring-offset-2">
                <span class="sr-only">Close</span>
                <XMarkIcon class="h-5 w-5" aria-hidden="true" />
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
  import { ref } from 'vue'
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