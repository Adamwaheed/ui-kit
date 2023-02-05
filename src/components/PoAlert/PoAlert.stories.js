// YourComponent.stories.js

import PoAlert from './PoAlert.vue';

import PoAlertDocs from './PoAlertDocs.mdx';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Components/Alert',
  component: PoAlert,
  parameters: {
    docs: {
      page: PoAlertDocs,
      description: {
          component: 'Alert component.'
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
  components: { PoAlert },
  template: '<PoAlert v-bind="args"/>',
});

export const Alert = Template.bind();

Alert.args = {
    /* 👇 The args you need here will depend on your component */
    show: false,
    cancelBtnLabel: "Dismiss",
    okBtnLabel: "Confirm",
    alertTitle: "I am an alert",
    alertDescription: "It's an alert! I repeat, an alert!!",
};