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
      <!--
        Emits the app name when clicked
        @event app-click
      -->
      <li
        v-for="(app, index) in appList"
        @click="
          $emit('app-click', app.name);
          setCurrent(index);
        "
        class="po-group po-relative"
      >
        <span
          class="
            po-scale-0 po-transform
            group-hover:po-scale-100
            po-transition-transform
            po-duration-150
            po-ease-out
            po-absolute
            po-bg-mpao-blue
            po-rounded-xl
            po-px-2
            po-py-1
            -po-top-[28px]
            po-whitespace-nowrap po-text-white po-text-xs po-z-50
          "
          >{{ app.name }}</span
        >
        <div
          class="
            po-bg-slate-50 po-w-8 po-h-8 po-rounded-full
            genie-effect
            po-cursor-pointer
            po-flex
            po-items-center
            po-justify-center
            po-mr-2
            po-mb-2
            po-relative
            group-hover:po-shadow-lg
            po-border
          "
          :class="[
            { 'po-border-white': !app.current },
            { 'po-border-mpao-lightblue': app.current },
          ]"
        >
          <span v-html="app.icon" class="po-text-slate-600 po-w-5"></span>
        </div>
      </li>
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

const props = defineProps({
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

const appList = ref(props.apps);

const emit = defineEmits(["button-click", "app-click"]);

const showFeedbackModal = ref(false);

function setCurrent(index) {
  for (let i = 0; i < appList.value.length; i++) {
    if (appList.value[i].current) {
      appList.value[i].current = false;
    }
  }
  appList.value[index].current = true;
}

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
