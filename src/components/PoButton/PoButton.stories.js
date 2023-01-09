// YourComponent.stories.js

import PoButton from './PoButton.vue';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Components/Button',
  component: PoButton,
  parameters: {
    docs: {
      description: {
          component: 'Button component. Button styles like padding and background color can be overitten by giving it tailwind utility classes.'
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
  components: { PoButton },
  template: '<PoButton v-bind="args" />',
});

export const Button = Template.bind();
export const SubmitButton = Template.bind();
export const Link = Template.bind();

Button.args = {
    /* 👇 The args you need here will depend on your component */
    label: "Button",
    type: "button"
};

SubmitButton.args = {
    /* 👇 The args you need here will depend on your component */
    label: "Submit",
    type: "submit"
};

Link.args = {
    /* 👇 The args you need here will depend on your component */
    label: "Link button",
    type: "link",
    to: "/home",
    class: "inline-block"
};