var a=Object.defineProperty;var o=(n,t)=>a(n,"name",{value:t,configurable:!0});import{P as e}from"./PoPagination-9de466a4.js";import"./vue.esm-bundler-d54c9e0f.js";const l={title:"Components/Pagination",component:e,parameters:{storySource:{source:`// YourComponent.stories.js

import PoPagination from './PoPagination.vue';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Components/Pagination',
  component: PoPagination,
  parameters: {
    docs: {
      description: {
          component: 'Pagination component.'
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
    components: { PoPagination },
    template: '<PoPagination v-bind="args" />',
  });
  
  export const Pagination = Template.bind();
  
  Pagination.args = {
      /* 👇 The args you need here will depend on your component */
      pagination: {
        label: 'Page 2 of 20',
        nextLink: '/users/1',
        prevLink: '/users/3',
      }
  };`,locationsMap:{pagination:{startLoc:{col:17,line:29},endLoc:{col:4,line:32},startBody:{col:17,line:29},endBody:{col:4,line:32}}}},docs:{description:{component:"Pagination component."}},backgrounds:{default:"gray",values:[{name:"gray",value:"#f8fafc"}]}}},i=o(n=>({components:{PoPagination:e},template:'<PoPagination v-bind="args" />'}),"Template"),r=i.bind();r.args={pagination:{label:"Page 2 of 20",nextLink:"/users/1",prevLink:"/users/3"}};const c=["Pagination"];export{r as Pagination,c as __namedExportsOrder,l as default};
//# sourceMappingURL=PoPagination.stories-1231df03.js.map
