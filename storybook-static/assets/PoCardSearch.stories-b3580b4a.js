var p=Object.defineProperty;var a=(o,r)=>p(o,"name",{value:r,configurable:!0});import{P as m}from"./PoCard-9caf7894.js";import{P as t}from"./PoCardSearch-c627729d.js";import"./index-017ea31c.js";import{c as e,S as l,C as i,b as h,D as u,a as C}from"./Props-5b83f7f2.js";import"./jsx-runtime-6e1c9cdb.js";import"./es.object.get-own-property-descriptor-20858f85.js";import"./web.url.constructor-504c5ace.js";import{d as f}from"./iframe-651c4b65.js";import"./vue.esm-bundler-d54c9e0f.js";import"./MagnifyingGlassIcon-565b70ed.js";import"./index-681e4b07-5e2e425f.js";import"./es.map.constructor-029fc0ac.js";import"./es.number.to-fixed-3b31fde2.js";import"./index-88155c66.js";import"./es.number.is-nan-1f7cd792.js";import"./string-d2fe5096.js";import"./es.number.is-integer-82a2773c.js";function c(){return c=Object.assign?Object.assign.bind():function(o){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(o[s]=n[s])}return o},c.apply(this,arguments)}a(c,"_extends");const S={},g="wrapper";function d({components:o,...r}){return e(g,c({},S,r,{components:o,mdxType:"MDXLayout"}),e("h1",null,"Card Search component"),e(u,{of:t,mdxType:"Description"}),e(i,{withToolbar:!0,mdxType:"Canvas"},e(h,{id:"components-card-search--card-search",mdxType:"Story"})),e(l,{language:"js",dark:!0,format:!0,code:f`
    <PoCard class="mt-5">
        <template v-slot:content>
            <PoCardSearch placeholder="Search card.." v-model="searchQuery" />
            ...
        </template>
    </PoCard>
  `,mdxType:"Source"}),e("h3",null,"Explanation"),e(C,{of:t,mdxType:"ArgsTable"}))}a(d,"MDXContent");d.isMDXComponent=!0;const W={title:"Components/Card Search",component:t,parameters:{storySource:{source:`// YourComponent.stories.js

import PoCard from '../PoCard/PoCard.vue';
import PoCardSearch from './PoCardSearch.vue';

import PoCardSearchDocs from './PoCardSearchDocs.mdx';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Components/Card Search',
  component: PoCardSearch,
  parameters: {
    docs: {
      page: PoCardSearchDocs,
      description: {
          component: 'Search bar displayed at the top of a card.'
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
  components: { PoCardSearch, PoCard },
  template: '<PoCard><template v-slot:content><PoCardSearch placeholder="Search card.." v-model="model" /><div class="p-5">Bliss</div></template></PoCard>',
});

export const CardSearch = Template.bind();`,locationsMap:{"card-search":{startLoc:{col:17,line:33},endLoc:{col:2,line:36},startBody:{col:17,line:33},endBody:{col:2,line:36}}}},docs:{page:d,description:{component:"Search bar displayed at the top of a card."}},backgrounds:{default:"gray",values:[{name:"gray",value:"#f8fafc"}]}}},y=a(o=>({components:{PoCardSearch:t,PoCard:m},template:'<PoCard><template v-slot:content><PoCardSearch placeholder="Search card.." v-model="model" /><div class="p-5">Bliss</div></template></PoCard>'}),"Template"),Y=y.bind(),q=["CardSearch"];export{Y as CardSearch,q as __namedExportsOrder,W as default};
//# sourceMappingURL=PoCardSearch.stories-b3580b4a.js.map
