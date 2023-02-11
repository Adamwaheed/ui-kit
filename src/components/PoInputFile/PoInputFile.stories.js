// YourComponent.stories.js

import PoInputFile from './PoInputFile.vue';
import PoCard from '../PoCard/PoCard.vue';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Form/Input File',
  component: PoInputFile,
  parameters: {
    docs: {
      description: {
        component: 'Form upload input field.'
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
  components: { PoInputFile, PoCard },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<PoInputFile v-bind="args" />',
});

export const Normal = Template.bind({});
export const WithMessage = Template.bind({});
export const ErrorState = Template.bind({});

Normal.args = {
  /* 👇 The args you need here will depend on your component */
  label: "Attache files",
  id: 'attachment-id',
  type: 'text'
};

WithMessage.args = {
  /* 👇 The args you need here will depend on your component */
  label: "Attache files",
  id: 'attachment2-id',
  type: 'text',
  message: 'This is a helpful message.'

};

ErrorState.args = {
  /* 👇 The args you need here will depend on your component */
  label: "Attache files",
  id: 'attachment3-id',
  type: 'text',
  errorMessage: 'Attachment is required.',
  required: true

};