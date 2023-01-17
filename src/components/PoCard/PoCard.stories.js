// YourComponent.stories.js

import PoCard from './PoCard.vue';

import PoCardDocs from './PoCardDocs.mdx';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Components/Card',
  component: PoCard,
  parameters: {
    docs: {
      page: PoCardDocs,
      description: {
          component: 'This is the wrapper for every card. It adds basic style of the card and leaves out padding and margins.'
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
  components: { PoCard },
  template: '<PoCard class="p-5 space-y-5"><template v-slot:content><span class="block text-sm text-slate-600">Content</span></template></PoCard>',
});

export const Basic = Template.bind();
export const WithTitle = Template.bind();

WithTitle.args = {
  title: 'Card title'
};