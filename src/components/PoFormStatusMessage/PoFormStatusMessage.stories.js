// YourComponent.stories.js

import PoFormStatusMessage from './PoFormStatusMessage.vue';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Components/Form Status',
  component: PoFormStatusMessage,
  parameters: {
    docs: {
      description: {
          component: 'Display form errors and success using this component'
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
  components: { PoFormStatusMessage },
  template: '<PoFormStatusMessage v-bind="args" />',
});

export const Error = Template.bind();
export const Success = Template.bind();

Error.args = {
    /* 👇 The args you need here will depend on your component */
    isError: true,
    message: "Please complete the form before you submit!",
    errorList: [
        'Fullname is required',
        'Email format is incorrect'
    ]
};
Success.args = {
    /* 👇 The args you need here will depend on your component */
    message: "Thank you! Your request has been sent!",
};