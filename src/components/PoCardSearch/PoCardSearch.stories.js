// YourComponent.stories.js

import PoCard from '../PoCard/PoCard.vue';
import PoCardSearch from './PoCardSearch.vue';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Components/Card Search',
  component: PoCardSearch,
  parameters: {
    docs: {
      description: {
          component: 'Search bar displayed at the top of a card.'
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
  components: { PoCardSearch, PoCard },
  template: '<PoCard><template v-slot:content><PoCardSearch placeholder="Search card.." v-model="model" /><div class="p-5">Bliss</div></template></PoCard>',
});

export const Search = Template.bind();