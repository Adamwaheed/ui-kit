// YourComponent.stories.js

import PoActionBar from './PoActionBar.vue';

import { PlusIcon, BeakerIcon } from '@heroicons/vue/24/outline';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Shell/Action Bar',
  component: PoActionBar,
  parameters: {
    docs: {
      description: {
        component: 'Action bar component PoActionBar is used on views that require action other than form submissions. It emits actions performed on the buttons.'
      }
    },
    backgrounds: {
      default: 'mpao',
      values: [
        { name: 'mpao', value: '#282f53' },
      ],
    },
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
  components: { PoActionBar },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<PoActionBar v-bind="args"/>',
});

export const ActionBar = Template.bind({});

ActionBar.args = {
  /* 👇 The args you need here will depend on your component */
  items: [
    {
      label: 'New Staff',
      icon: PlusIcon
    },
    {
      label: 'Experiment',
      icon: BeakerIcon
    }
  ],
  showBackButton: true
};