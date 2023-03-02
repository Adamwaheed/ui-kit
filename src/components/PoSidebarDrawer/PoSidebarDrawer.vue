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
      <div v-if="apps !== null">
        <Disclosure v-slot="{ open }" :defaultOpen="true">
          <DisclosureButton
            v-if="appsLabel"
            :class="open ? '' : 'po-mb-3'"
            class="shell-sidebar--section po-w-full po-text-left"
          >
            {{ appsLabel }}
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
              <ul class="shell-sidebar--menu sidebar-apps po-shrink-0 po-mb-0">
                <li v-for="(app, index) in appList">
                  <!-- <button @click="$emit('button-click', 'feedback-button')" class="shell-sidebar--item" title="Go to feedback"> -->
                  <button
                    @click="
                      $emit('app-click', app.name);
                      setCurrent(index);
                    "
                    class="shell-sidebar--item"
                    :class="[{ active: app.current }]"
                    title="Go to feedback"
                  >
                    <span class="shell-sidebar--icon">
                      <span
                        v-html="app.icon"
                        class="po-text-slate-600 po-w-5"
                      ></span>
                    </span>
                    <span class="shell-sidebar--label po-font-medium">{{
                      app.name
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
      v-if="hasFeedback"
      class="
        shell-sidebar--menu
        po-shrink-0 po-mb-0 po-border-t po-border-slate-200 po-pt-3
      "
    >
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
  /**
   * Show/hide feedback button
   */
  hasFeedback: {
    type: Boolean,
    default: false,
  },
  /**
   * Related apps label. default Related apps
   */
  appsLabel: {
    type: String,
    default: "Related apps",
  },
  /**
   * List of related apps
   */
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
