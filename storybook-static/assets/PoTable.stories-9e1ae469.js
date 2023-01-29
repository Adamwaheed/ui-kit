var l=Object.defineProperty;var t=(e,a)=>l(e,"name",{value:a,configurable:!0});import{P as n}from"./PoTable-0e1913b2.js";import{P as d}from"./PoCard-9caf7894.js";import"./vue.esm-bundler-d54c9e0f.js";const b={title:"Components/Table",component:n,parameters:{storySource:{source:`// YourComponent.stories.js

import PoTable from './PoTable.vue';
import PoCard from '../PoCard/PoCard.vue';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Components/Table',
  component: PoTable,
  parameters: {
    docs: {
      description: {
          component: 'Resposive table component.'
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
  components: { PoTable, PoCard },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<PoCard class="mt-5"> <template v-slot:content> <PoTable v-bind="args"> <template #th="{ label }"> {{ label }} </template> <template #td="{ name, nid, source, dod }"> <td data-title="name">{{ name }}</td> <td data-title="NID">{{ nid }}</td> <td data-title="source">{{ source }}</td> <td data-title="dod">{{ dod }}</td> </template> </PoTable> </template> </PoCard>',
});

export const WithContent = Template.bind();
export const Empty = Template.bind();

WithContent.args = {
    /* 👇 The args you need here will depend on your component */
    thead : [
        { label: 'Name' },
        { label: 'NID' },
        { label: 'Source' },
        { label: 'DOD' },
    ],

    tbody : [
        { name: 'Jane Gasim', nid: 'A00000', source: 'YY Clinic', dod: '2022-11-12' },
        { name: 'Mariyam Doe', nid: 'A00000', source: 'Rashu Council', dod: '2022-11-02' },
    ]
  };
  Empty.args = {
    /* 👇 The args you need here will depend on your component */
    thead : [
        { label: 'Name' },
        { label: 'NID' },
        { label: 'Source' },
        { label: 'DOD' },
    ],

    tbody : [
    ]
  };`,locationsMap:{"with-content":{startLoc:{col:17,line:30},endLoc:{col:2,line:37},startBody:{col:17,line:30},endBody:{col:2,line:37}},empty:{startLoc:{col:17,line:30},endLoc:{col:2,line:37},startBody:{col:17,line:30},endBody:{col:2,line:37}}}},docs:{description:{component:"Resposive table component."}},backgrounds:{default:"gray",values:[{name:"gray",value:"#f8fafc"}]}}},o=t(e=>({components:{PoTable:n,PoCard:d},setup(){return{args:e}},template:'<PoCard class="mt-5"> <template v-slot:content> <PoTable v-bind="args"> <template #th="{ label }"> {{ label }} </template> <template #td="{ name, nid, source, dod }"> <td data-title="name">{{ name }}</td> <td data-title="NID">{{ nid }}</td> <td data-title="source">{{ source }}</td> <td data-title="dod">{{ dod }}</td> </template> </PoTable> </template> </PoCard>'}),"Template"),r=o.bind(),s=o.bind();r.args={thead:[{label:"Name"},{label:"NID"},{label:"Source"},{label:"DOD"}],tbody:[{name:"Jane Gasim",nid:"A00000",source:"YY Clinic",dod:"2022-11-12"},{name:"Mariyam Doe",nid:"A00000",source:"Rashu Council",dod:"2022-11-02"}]};s.args={thead:[{label:"Name"},{label:"NID"},{label:"Source"},{label:"DOD"}],tbody:[]};const u=["WithContent","Empty"];export{s as Empty,r as WithContent,u as __namedExportsOrder,b as default};
//# sourceMappingURL=PoTable.stories-9e1ae469.js.map
