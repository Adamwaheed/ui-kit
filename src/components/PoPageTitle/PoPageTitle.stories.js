// YourComponent.stories.js

import PoPageTitle from './PoPageTitle.vue';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Components/Page Title',
  component: PoPageTitle,
  parameters: {
    docs: {
      description: {
          component: 'Page title component.'
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
  components: { PoPageTitle },
  template: '<PoPageTitle label="Page title" />',
});

export const PageTitle = Template.bind();