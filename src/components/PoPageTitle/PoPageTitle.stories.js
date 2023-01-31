// YourComponent.stories.js

import PoPageTitle from './PoPageTitle.vue';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Components/Page Title',
  component: PoPageTitle,
  parameters: {
    docs: {
      description: {
          component: 'Page title component.'
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
  components: { PoPageTitle },
  template: '<PoPageTitle label="Page title" />',
});

export const PageTitle = Template.bind();
export const WithPagination = Template.bind();
export const WithPaginationFilterAndDownload = Template.bind();
export const WithFilterAndDownload = Template.bind();

WithPagination.args = {
  /* 👇 The args you need here will depend on your component */
  showPagination: true,
  pagination: {
    label: 'Page 2 of 20',
    nextLink: '/users/1',
    prevLink: '/users/3',
  }
};

WithPaginationFilterAndDownload.args = {
  /* 👇 The args you need here will depend on your component */
  showPagination: true,
  showFilter: true,
  showDownload: true,
  pagination: {
    label: 'Page 2 of 20',
    nextLink: '/users/1',
    prevLink: '/users/3',
  }
};

WithFilterAndDownload.args = {
  /* 👇 The args you need here will depend on your component */
  showFilter: true,
  showDownload: true,
};