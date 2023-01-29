var d=Object.defineProperty;var n=(e,o)=>d(e,"name",{value:o,configurable:!0});import{P as a}from"./PoCard-9caf7894.js";import"./index-017ea31c.js";import{c as t,S as m,C as u,b as p,D as y,a as f}from"./Props-5b83f7f2.js";import"./jsx-runtime-6e1c9cdb.js";import"./es.object.get-own-property-descriptor-20858f85.js";import"./web.url.constructor-504c5ace.js";import{d as g}from"./iframe-651c4b65.js";import"./vue.esm-bundler-d54c9e0f.js";import"./index-681e4b07-5e2e425f.js";import"./es.map.constructor-029fc0ac.js";import"./es.number.to-fixed-3b31fde2.js";import"./index-88155c66.js";import"./es.number.is-nan-1f7cd792.js";import"./string-d2fe5096.js";import"./es.number.is-integer-82a2773c.js";function i(){return i=Object.assign?Object.assign.bind():function(e){for(var o=1;o<arguments.length;o++){var r=arguments[o];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},i.apply(this,arguments)}n(i,"_extends");const C={},h="wrapper";function l({components:e,...o}){return t(h,i({},C,o,{components:e,mdxType:"MDXLayout"}),t("h1",null,"Card component"),t(y,{of:a,mdxType:"Description"}),t(u,{withToolbar:!0,mdxType:"Canvas"},t("div",{class:"flex flex-col space-y-5"},t(p,{id:"components-card--basic",mdxType:"Story"}),t(p,{id:"components-card--with-title",mdxType:"Story"}))),t(m,{language:"js",dark:!0,format:!0,code:g`
    <PoCard title="Card title" class="p-5">
        <template v-slot:content>
        Content
        </template>
    </PoCard>
  `,mdxType:"Source"}),t("h3",null,"Explanation"),t(f,{of:a,mdxType:"ArgsTable"}))}n(l,"MDXContent");l.isMDXComponent=!0;const E={title:"Components/Card",component:a,parameters:{storySource:{source:`// YourComponent.stories.js

import PoCard from './PoCard.vue';

import PoCardDocs from './PoCardDocs.mdx';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Components/Card',
  component: PoCard,
  parameters: {
    docs: {
      page: PoCardDocs,
      description: {
          component: 'This is the wrapper for every card. It adds basic style of the card and leaves out padding and margins.'
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
  components: { PoCard },
  template: '<PoCard class="p-5 space-y-5"><template v-slot:content><span class="block text-sm text-slate-600">Content</span></template></PoCard>',
});

export const Basic = Template.bind();
export const WithTitle = Template.bind();

WithTitle.args = {
  title: 'Card title'
};`,locationsMap:{basic:{startLoc:{col:17,line:32},endLoc:{col:2,line:35},startBody:{col:17,line:32},endBody:{col:2,line:35}},"with-title":{startLoc:{col:17,line:32},endLoc:{col:2,line:35},startBody:{col:17,line:32},endBody:{col:2,line:35}}}},docs:{page:l,description:{component:"This is the wrapper for every card. It adds basic style of the card and leaves out padding and margins."}},backgrounds:{default:"gray",values:[{name:"gray",value:"#f8fafc"}]}}},c=n(e=>({components:{PoCard:a},template:'<PoCard class="p-5 space-y-5"><template v-slot:content><span class="block text-sm text-slate-600">Content</span></template></PoCard>'}),"Template"),A=c.bind(),x=c.bind();x.args={title:"Card title"};const I=["Basic","WithTitle"];export{A as Basic,x as WithTitle,I as __namedExportsOrder,E as default};
//# sourceMappingURL=PoCard.stories-f076c5bf.js.map
