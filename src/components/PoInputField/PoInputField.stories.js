// YourComponent.stories.js

import PoInputField from './PoInputField.vue';
import PoCard from '../PoCard/PoCard.vue';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Components/Input Field',
  component: PoInputField,
  parameters: {
    docs: {
      description: {
        component: 'Form input field.'
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
  components: { PoInputField, PoCard },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '{{args2}}<PoCard class="mt-5 p-5 grid grid-cols-2 gap-5"> <template v-slot:content><PoInputField v-bind="args" /><PoInputField v-bind="args2" /></template></PoCard>',
});

export const Normal = Template.bind({});

Normal.args = {
  /* 👇 The args you need here will depend on your component */
  fullname: {
      label: "Full name",
      id: 'fullname-id',
      type: 'text'
  },
  
};
Normal.args2 = {
  /* 👇 The args you need here will depend on your component */
  label: "Email address",
  id: 'email-id',
  type: 'email'
};