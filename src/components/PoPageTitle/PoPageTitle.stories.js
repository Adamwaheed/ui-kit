// YourComponent.stories.js

import PoPageTitle from "./PoPageTitle.vue";

import PoPageTitleDocs from "./PoPageTitleDocs.stories.mdx";

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Layout/Page Title",
  component: PoPageTitle,
  parameters: {
    docs: {
      page: PoPageTitleDocs,
      description: {
        component: "Page title component.",
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
  components: { PoPageTitle },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<PoPageTitle label="Page title"></PoPageTitle>',
});

export const PageTitle = Template.bind();
export const WithPagination = Template.bind();
export const WithPaginationFilterAndDownload = Template.bind();
export const WithFilterAndDownload = Template.bind();
export const WithWithDescription = Template.bind();
export const WithStats = Template.bind();

WithPagination.args = {
  /* 👇 The args you need here will depend on your component */
  showPagination: true,
  pagination: {
    label: "Page 2 of 20",
    nextLink: "/users/1",
    prevLink: "/users/3",
  },
};

WithPaginationFilterAndDownload.args = {
  /* 👇 The args you need here will depend on your component */
  showPagination: true,
  showFilter: true,
  showDownload: true,
  pagination: {
    label: "Page 2 of 20",
    nextLink: "/users/1",
    prevLink: "/users/3",
  },
};

WithFilterAndDownload.args = {
  /* 👇 The args you need here will depend on your component */
  showFilter: true,
  showDownload: true,
};

WithWithDescription.args = {
  /* 👇 The args you need here will depend on your component */
  description:
    "This is a page description that goes on to explain what is in the page.",
};

WithStats.args = {
  /* 👇 The args you need here will depend on your component */
  stats: [
    { value: "32", label: "Employees" },
    { value: "10", label: "Flights" },
  ],
};
