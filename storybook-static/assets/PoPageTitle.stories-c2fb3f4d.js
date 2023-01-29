var a=Object.defineProperty;var t=(e,i)=>a(e,"name",{value:i,configurable:!0});import{P as o}from"./PoPageTitle-c7ab0c84.js";import"./vue.esm-bundler-d54c9e0f.js";import"./PoPagination-9de466a4.js";import"./FunnelIcon-d18c2ab8.js";const u={title:"Components/Page Title",component:o,parameters:{storySource:{source:`// YourComponent.stories.js

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
export const WithPaginationFilterAndPrint = Template.bind();
export const WithFilterAndPrint = Template.bind();

WithPagination.args = {
  /* 👇 The args you need here will depend on your component */
  showPagination: true,
  pagination: {
    label: 'Page 2 of 20',
    nextLink: '/users/1',
    prevLink: '/users/3',
  }
};

WithPaginationFilterAndPrint.args = {
  /* 👇 The args you need here will depend on your component */
  showPagination: true,
  showFilter: true,
  showPrint: true,
  pagination: {
    label: 'Page 2 of 20',
    nextLink: '/users/1',
    prevLink: '/users/3',
  }
};

WithFilterAndPrint.args = {
  /* 👇 The args you need here will depend on your component */
  showFilter: true,
  showPrint: true,
};`,locationsMap:{"page-title":{startLoc:{col:17,line:29},endLoc:{col:2,line:32},startBody:{col:17,line:29},endBody:{col:2,line:32}},"with-pagination":{startLoc:{col:17,line:29},endLoc:{col:2,line:32},startBody:{col:17,line:29},endBody:{col:2,line:32}},"with-pagination-filter-and-print":{startLoc:{col:17,line:29},endLoc:{col:2,line:32},startBody:{col:17,line:29},endBody:{col:2,line:32}},"with-filter-and-print":{startLoc:{col:17,line:29},endLoc:{col:2,line:32},startBody:{col:17,line:29},endBody:{col:2,line:32}}}},docs:{description:{component:"Page title component."}},backgrounds:{default:"gray",values:[{name:"gray",value:"#f8fafc"}]}}},n=t(e=>({components:{PoPageTitle:o},template:'<PoPageTitle label="Page title" />'}),"Template"),h=n.bind(),r=n.bind(),l=n.bind(),s=n.bind();r.args={showPagination:!0,pagination:{label:"Page 2 of 20",nextLink:"/users/1",prevLink:"/users/3"}};l.args={showPagination:!0,showFilter:!0,showPrint:!0,pagination:{label:"Page 2 of 20",nextLink:"/users/1",prevLink:"/users/3"}};s.args={showFilter:!0,showPrint:!0};const m=["PageTitle","WithPagination","WithPaginationFilterAndPrint","WithFilterAndPrint"];export{h as PageTitle,s as WithFilterAndPrint,r as WithPagination,l as WithPaginationFilterAndPrint,m as __namedExportsOrder,u as default};
//# sourceMappingURL=PoPageTitle.stories-c2fb3f4d.js.map
