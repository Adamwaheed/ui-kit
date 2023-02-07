// YourComponent.stories.js

import PoSelectField from './PoSelectField.vue';

import PoSelectFieldDocs from './PoSelectFieldDocs.stories.mdx';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Form/Select Field',
  component: PoSelectField,
  parameters: {
    docs: {
      page: PoSelectFieldDocs,
      description: {
        component: 'Select input field.'
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
  components: { PoSelectField },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<PoSelectField v-bind="args" />',
});

export const SelectField = Template.bind({});

SelectField.args = {
  /* 👇 The args you need here will depend on your component */
  label: "Select something",
  list: [
    { id: 1, name: 'Koshaaru' },
    { id: 2, name: 'HelpDesk' },
    { id: 3, name: 'Another' },
  ],
  preSelected: { id: 1, name: 'Koshaaru' }
};