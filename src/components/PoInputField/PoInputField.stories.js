// YourComponent.stories.js

import PoInputField from './PoInputField.vue';

import PoInputFieldDocs from './PoInputFieldDocs.mdx';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Form/Input Field',
  component: PoInputField,
  parameters: {
    docs: {
      page: PoInputFieldDocs,
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
  components: { PoInputField },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<PoInputField v-bind="args" />',
});

export const Normal = Template.bind({});
export const WithInfoTooltip = Template.bind({});
export const WithMessage = Template.bind({});
export const WithPlaceholder = Template.bind({});
export const ErrorState = Template.bind({});
export const DisabledState = Template.bind({});

Normal.args = {
  /* 👇 The args you need here will depend on your component */
  label: "Full name",
  id: 'fullname-id',
  type: 'text'
};

WithInfoTooltip.args = {
  /* 👇 The args you need here will depend on your component */
  label: "NID",
  id: 'nid-id',
  type: 'text',
  info: 'National ID Card No.'

};

WithMessage.args = {
  /* 👇 The args you need here will depend on your component */
  label: "Street name",
  id: 'fullname2-id',
  type: 'text',
  message: 'Fullname with middle name.'

};

WithPlaceholder.args = {
  /* 👇 The args you need here will depend on your component */
  label: "Email address",
  id: 'fullname2-id',
  placeholder: 'doe@example.com',
  type: 'tel',
};

ErrorState.args = {
  /* 👇 The args you need here will depend on your component */
  label: "Phone number",
  id: 'fullname3-id',
  type: 'email',
  errorMessage: 'Email address is required.',
  hasError: true

};

DisabledState.args = {
  /* 👇 The args you need here will depend on your component */
  label: "Password",
  id: 'fullname5-id',
  type: 'password',
  disabled: true

};