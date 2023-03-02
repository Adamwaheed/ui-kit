// YourComponent.stories.js

import PoButton from "./PoButton.vue";

import PoButtonDocs from "./PoButtonDocs.stories.mdx";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Components/Button",
  component: PoButton,
  parameters: {
    docs: {
      page: PoButtonDocs,
      description: {
        component:
          "Button component. Button styles like padding and background color can be overitten by giving it tailwind utility classes.",
      },
    },
    backgrounds: {
      default: "gray",
      values: [{ name: "gray", value: "#f8fafc" }],
    },
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
  components: { PoButton },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<PoButton v-bind="args" />',
});

export const Button = Template.bind();
export const SubmitButton = Template.bind();
export const Link = Template.bind();
export const Small = Template.bind();
export const Medium = Template.bind();
export const Large = Template.bind();
export const ColorChange = Template.bind();
export const Loading = Template.bind();
export const Danger = Template.bind();
export const Ghost = Template.bind();

Button.args = {
  /* 👇 The args you need here will depend on your component */
  label: "Button",
  type: "button",
};

Loading.args = {
  /* 👇 The args you need here will depend on your component */
  label: "Button",
  type: "button",
  isLoading: true,
};

SubmitButton.args = {
  /* 👇 The args you need here will depend on your component */
  label: "Submit",
  type: "submit",
};

Link.args = {
  /* 👇 The args you need here will depend on your component */
  label: "Link button",
  type: "link",
  to: "/home",
  class: "inline-block",
};

Small.args = {
  /* 👇 The args you need here will depend on your component */
  label: "Small",
  type: "button",
  size: "sm",
};

Medium.args = {
  /* 👇 The args you need here will depend on your component */
  label: "Medium",
  type: "button",
  size: "md",
  disabled: "disabled",
};

Large.args = {
  /* 👇 The args you need here will depend on your component */
  label: "Large",
  type: "button",
  size: "lg",
};

ColorChange.args = {
  /* 👇 The args you need here will depend on your component */
  label: "Rose",
  type: "button",
  overrideColors: true,
  class: "bg-rose-600 hover:bg-rose-700 text-white",
};

Danger.args = {
  /* 👇 The args you need here will depend on your component */
  label: "Danger",
  type: "button",
  actionType: "danger",
};

Ghost.args = {
  /* 👇 The args you need here will depend on your component */
  label: "Ghost",
  type: "button",
  actionType: "ghost",
};
