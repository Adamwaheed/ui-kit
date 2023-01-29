var a=Object.defineProperty;var o=(e,t)=>a(e,"name",{value:t,configurable:!0});import{P as n}from"./PoToggle-383cd894.js";import{P as r}from"./PoCard-9caf7894.js";import"./vue.esm-bundler-d54c9e0f.js";import"./label-7ff3c701.js";const d={title:"Components/Toggle",component:n,parameters:{storySource:{source:`// YourComponent.stories.js

import PoToggle from './PoToggle.vue';
import PoCard from '../PoCard/PoCard.vue';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Components/Toggle',
  component: PoToggle,
  parameters: {
    docs: {
      description: {
        component: 'Toggle button with label'
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
  components: { PoToggle, PoCard },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<PoCard class="mt-5 p-5 max-w-md"> <template v-slot:content><PoToggle v-bind="args" /></template></PoCard>',
});

export const Toggle = Template.bind({});

Toggle.args = {
  /* 👇 The args you need here will depend on your component */
  label: "Click me",
  type: ''
};`,locationsMap:{toggle:{startLoc:{col:17,line:30},endLoc:{col:2,line:37},startBody:{col:17,line:30},endBody:{col:2,line:37}}}},docs:{description:{component:"Toggle button with label"}},backgrounds:{default:"gray",values:[{name:"gray",value:"#f8fafc"}]}}},l=o(e=>({components:{PoToggle:n,PoCard:r},setup(){return{args:e}},template:'<PoCard class="mt-5 p-5 max-w-md"> <template v-slot:content><PoToggle v-bind="args" /></template></PoCard>'}),"Template"),s=l.bind({});s.args={label:"Click me",type:""};const u=["Toggle"];export{s as Toggle,u as __namedExportsOrder,d as default};
//# sourceMappingURL=PoToggle.stories-5b80fefe.js.map
