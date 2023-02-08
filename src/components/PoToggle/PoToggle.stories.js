// YourComponent.stories.js

import PoToggle from './PoToggle.vue';
import PoCard from '../PoCard/PoCard.vue';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Form/Toggle',
  component: PoToggle,
  parameters: {
    docs: {
      description: {
        component: 'Toggle button with label'
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
  components: { PoToggle, PoCard },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<PoCard class="po-mt-5 po-p-5 po-max-w-md"> <template v-slot:content><PoToggle v-bind="args" /></template></PoCard>',
});

export const Toggle = Template.bind({});

Toggle.args = {
  /* 👇 The args you need here will depend on your component */
  label: "Click me",
  type: ''
};