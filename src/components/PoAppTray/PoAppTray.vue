<template>
  <Popover v-slot="{ open }" class="po-relative">
    <PopoverButton
      :class="open ? '' : 'po-text-opacity-90'"
      class="
        po-block po-w-6 po-text-slate-100
        genie-effect
        po-z-50 po-outline-none
      "
    >
      <Squares2X2Icon />
    </PopoverButton>
    <transition
      enter-active-class="po-transition po-duration-200 po-ease-out"
      enter-from-class="po-translate-y-1 po-opacity-0"
      enter-to-class="po-translate-y-0 po-opacity-100"
      leave-active-class="po-transition po-duration-150 po-ease-in"
      leave-from-class="po-translate-y-0 po-opacity-100"
      leave-to-class="po-translate-y-1 po-opacity-0"
    >
      <PopoverPanel
        class="
          po-space-y-1
          po-z-10
          po-absolute
          po-right-0
          po-top-[47px]
          po-opacity-0
          po-bg-white
          po-bg-opacity-50
          po-backdrop-blur
          po-backdrop-filter
          po-shadow-lg
          po-rounded-md
          po-w-96
          po-p-4
          po-border
          po-border-slate-200
          po-pt-5
          po-transition-all
          po-duration-100
          po-ease-linear
          po-max-h-[calc(100vh-85px)]
          po-overflow-y-scroll
        "
      >
        <div v-for="collection in appList">
          <span
            v-if="collection.groupName.length > 0"
            class="po-text-sm po-font-normal po-text-slate-400 po-select-none"
            >{{ collection.groupName }}</span
          >
          <ul class="po-grid po-grid-cols-3 po-gap-3 po-py-3">
            <li v-for="app in collection.apps">
              <a
                :href="app.url"
                class="
                  po-flex
                  po-flex-col
                  po-group
                  po-space-y-3
                  po-justify-center
                  po-items-center
                  po-py-2
                  genie-effect
                "
              >
                <span
                  class="
                    po-block
                    po-w-10
                    po-rounded-md
                    po-transition-shadow
                    po-duration-100
                    po-ease-in-out
                    po-shadow-md
                    group-hover:po-shadow-xl
                    po-overflow-hidden
                  "
                >
                  <img :src="app.icon" :alt="`${app.name} icon`" />
                </span>
                <span class="po-text-slate-600 po-font-normal po-text-sm">{{
                  app.name
                }}</span>
              </a>
            </li>
          </ul>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script>
export default {
  name: "PoAppTray",
};
</script>
<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { Squares2X2Icon } from "@heroicons/vue/24/outline";
defineProps({
  /**
   * Array of grouped apps. When the group name field is left blank, it will appear as a single list when displayed.
   */
  appList: {
    type: Array,
    default: null,
  },
});
</script>
