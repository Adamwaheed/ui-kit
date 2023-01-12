// YourComponent.stories.js

import PoModal from './PoModal.vue';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Components/Modal',
  component: PoModal,
  parameters: {
    docs: {
      description: {
          component: 'Modal component.'
      }
    },
    backgrounds: {
      default: 'gray',
      values: [
        { name: 'gray', value: '#f8fafc' },
      ],
    },
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
  components: { PoModal },
  template: '<PoModal v-bind="args"><template v-slot:content>This is a modal window.</template></PoModal>',
});

export const Modal = Template.bind();

Modal.args = {
    /* 👇 The args you need here will depend on your component */
    openBtnLabel: "Open modal",
    modalTitle: "Modal window"
};