// YourComponent.stories.js

import PoLoading from './PoLoading.vue';

import PoLoadingDocs from './PoLoadingDocs.stories.mdx';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Components/Loading',
  component: PoLoading,
  parameters: {
    docs: {
      page: PoLoadingDocs,
      description: {
          component: 'Loading component.'
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
  components: { PoLoading },
  template: '<PoLoading v-bind="args" />',
});

export const Loading = Template.bind();
export const WithLabel = Template.bind();

Loading.args = {
    /* 👇 The args you need here will depend on your component */
    show: true
};

WithLabel.args = {
    /* 👇 The args you need here will depend on your component */
    show: true,
    label: "Please wait"
};