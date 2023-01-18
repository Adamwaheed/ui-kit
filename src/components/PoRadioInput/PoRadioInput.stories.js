// YourComponent.stories.js

import PoRadioInput from './PoRadioInput.vue';
import PoCard from '../PoCard/PoCard.vue';

import PoRadioInputDocs from './PoRadioInputDocs.mdx';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Form/Radio',
  component: PoRadioInput,
  parameters: {
    docs: {
      page: PoRadioInputDocs,
      description: {
        component: 'Radio input.'
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
  components: { PoRadioInput, PoCard },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<PoRadioInput v-bind="args" />',
});

export const Radio = Template.bind({});

Radio.args = {
  /* 👇 The args you need here will depend on your component */
  options: [
    {
      id: 1, title: 'Option one'
    },
    {
      id: 2, title: 'Option two'
    },
  ],
  preSelected: null,
};