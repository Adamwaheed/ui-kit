<template>
  <input
    type="checkbox"
    name=""
    class="po-hidden shell-sidebar--toggle"
    role="none"
    id="sidebar-drawer-toggle"
    checked
    aria-checked="true"
  />
  <aside class="shell-sidebar">
    <div class="po-grow">
      <div v-for="group in content">
        <Disclosure v-slot="{ open }" :defaultOpen="true">
          <DisclosureButton
            v-if="group.groupName"
            :class="open ? '' : 'po-mb-3'"
            class="shell-sidebar--section po-w-full po-text-left"
          >
            {{ group.groupName }}
          </DisclosureButton>
          <transition
            enter-active-class="po-transition po-duration-100 po-ease-out"
            enter-from-class="po-transform po-scale-95 po-opacity-0"
            enter-to-class="po-transform po-scale-100 po-opacity-100"
            leave-active-class="po-transition po-duration-75 po-ease-out"
            leave-from-class="po-transform po-scale-100 po-opacity-100"
            leave-to-class="po-transform po-scale-95 po-opacity-0"
          >
            <DisclosurePanel>
              <ul class="shell-sidebar--menu">
                <li v-for="item in group.items">
                  <!--
                                    Emits the button url when it’s clicked
                                    @event button-click
                                -->
                  <button
                    v-if="!item.disabled"
                    @click="$emit('button-click', item.url)"
                    :class="[
                      'shell-sidebar--item',
                      { active: item.url == currRoute },
                    ]"
                    :title="`Go to ${item.label}`"
                  >
                    <span class="shell-sidebar--icon">
                      <component
                        :is="item.icon"
                        class="po-stroke-current po-w-5 po-h-5 po-stroke-2"
                      />
                    </span>
                    <span class="shell-sidebar--label po-font-medium">{{
                      item.label
                    }}</span>
                  </button>
                </li>
              </ul>
            </DisclosurePanel>
          </transition>
        </Disclosure>
      </div>
    </div>
    <ul
      v-if="apps !== null"
      class="
        po-shrink-0
        po-pb-1
        po-flex
        po-justify-center
        po-flex-wrap
        po-border-b
        po-border-slate-200
      "
    >
      <li
        class="
          po-bg-purple-500 po-w-8 po-h-8 po-rounded-md
          genie-effect
          po-cursor-pointer
          po-overflow-hidden
          po-flex
          po-items-center
          po-justify-center
          po-mr-2
          po-mb-2
        "
      >
        <svg
          class="po-w-5 po-h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fill="#fff"
            fill-rule="nonzero"
            d="M19.248 7.504a2.752 2.752 0 0 0 0-5.504H4.75a2.752 2.752 0 1 0 0 5.504h14.498Zm-2 7a2.752 2.752 0 1 0 0-5.504H6.75a2.752 2.752 0 0 0 0 5.504h10.498ZM17 18.752a2.752 2.752 0 0 1-2.752 2.752H9.75a2.752 2.752 0 1 1 0-5.504h4.498A2.752 2.752 0 0 1 17 18.752Z"
          />
        </svg>
      </li>
      <li
        class="
          po-bg-red-500 po-w-8 po-h-8 po-rounded-md
          genie-effect
          po-cursor-pointer
          po-overflow-hidden
          po-flex
          po-items-center
          po-justify-center
          po-mr-2
          po-mb-2
        "
      >
        <svg
          class="po-w-5 po-h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -64 640 640"
        >
          <path
            fill="#fff"
            d="M32 224h32v192H32a31.962 31.962 0 0 1-32-32V256a31.962 31.962 0 0 1 32-32Zm512-48v272a64.063 64.063 0 0 1-64 64H160a64.063 64.063 0 0 1-64-64V176a79.974 79.974 0 0 1 80-80h112V32a32 32 0 0 1 64 0v64h112a79.974 79.974 0 0 1 80 80Zm-280 80a40 40 0 1 0-40 40 39.997 39.997 0 0 0 40-40Zm-8 128h-64v32h64Zm96 0h-64v32h64Zm104-128a40 40 0 1 0-40 40 39.997 39.997 0 0 0 40-40Zm-8 128h-64v32h64Zm192-128v128a31.962 31.962 0 0 1-32 32h-32V224h32a31.962 31.962 0 0 1 32 32Z"
          />
        </svg>
      </li>
      <li
        class="
          po-bg-purple-500 po-w-8 po-h-8 po-rounded-md
          genie-effect
          po-cursor-pointer
          po-overflow-hidden
          po-flex
          po-items-center
          po-justify-center
          po-mr-2
          po-mb-2
        "
      ></li>
    </ul>
    <ul v-if="hasFeedback" class="shell-sidebar--menu po-shrink-0 po-mb-0">
      <li>
        <!-- <button @click="$emit('button-click', 'feedback-button')" class="shell-sidebar--item" title="Go to feedback"> -->
        <button
          @click.prevent="clickFeedbackModalButton"
          class="shell-sidebar--item"
          title="Go to feedback"
        >
          <span class="shell-sidebar--icon">
            <ChatBubbleBottomCenterIcon
              class="po-stroke-current po-w-5 po-h-5 po-stroke-2"
            />
          </span>
          <span class="shell-sidebar--label po-font-medium">Feedback</span>
        </button>
      </li>
    </ul>
    <PoModal :show="showFeedbackModal" modal-title="Feedback">
      <template v-slot:content>
        <form action="">
          <PoRadioInput
            label="Type"
            :options="radioOptions"
            :pre-selected="radioOptionSelected"
            v-model="radioOptionSelected"
          />
          <br />
          <PoTextarea cols="6" rows="6" label="Description" message="" />
        </form>
      </template>
      <template v-slot:footer>
        <div class="po-p-5">
          <PoButton label="Send" type="button" />
        </div>
      </template>
    </PoModal>
  </aside>
</template>

<script>
export default {
  name: "PoSidebarDrawer",
};
</script>
<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChatBubbleBottomCenterIcon } from "@heroicons/vue/24/outline";
import { ref } from "vue";
import PoButton from "../PoButton/PoButton.vue";
import PoModal from "../PoModal/PoModal.vue";
import PoRadioInput from "../PoRadioInput/PoRadioInput.vue";
import PoTextarea from "../PoTextarea/PoTextarea.vue";

defineProps({
  /**
   * Array of  sidebar menu items
   */
  content: {
    type: Array,
    default: null,
  },
  /**
   * Current route path
   */
  currRoute: {
    type: String,
    default: "/",
  },
  hasFeedback: {
    type: Boolean,
    default: false,
  },
  apps: {
    type: Array,
    default: null,
  },
});

const emit = defineEmits(["button-click"]);

const showFeedbackModal = ref(false);

function clickFeedbackModalButton() {
  showFeedbackModal.value = true;

  setTimeout(() => {
    showFeedbackModal.value = false;
  }, 100);
}

const radioOptions = [
  {
    id: 1,
    title: "Suggestion",
  },
  {
    id: 2,
    title: "Feature request",
  },
  {
    id: 2,
    title: "Other",
  },
];
const radioOptionSelected = ref(radioOptions[0]);
</script>
