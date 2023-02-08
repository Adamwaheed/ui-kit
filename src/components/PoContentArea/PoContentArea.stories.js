// YourComponent.stories.js

import PoContentArea from './PoContentArea.vue';

import PoContentAreaDocs from './PoContentAreaDocs.stories.mdx';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Layout/Content Area',
  component: PoContentArea,
  parameters: {
    docs: {
      page: PoContentAreaDocs,
      description: {
          component: 'This is the wrapper for every page.'
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
  components: { PoContentArea },
  template: '<PoContentArea>...</PoContentArea>',
});

export const ContentArea = Template.bind();