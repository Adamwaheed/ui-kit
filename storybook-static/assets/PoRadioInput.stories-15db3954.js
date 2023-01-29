var l=Object.defineProperty;var e=(t,n)=>l(t,"name",{value:n,configurable:!0});import{P as r}from"./PoRadioInput-69ae436f.js";import{P as u}from"./PoCard-9caf7894.js";import"./index-017ea31c.js";import{c as o,S as s,a as c,C as g,b as f,D as y}from"./Props-5b83f7f2.js";import"./jsx-runtime-6e1c9cdb.js";import"./es.object.get-own-property-descriptor-20858f85.js";import"./web.url.constructor-504c5ace.js";import{d}from"./iframe-651c4b65.js";import"./vue.esm-bundler-d54c9e0f.js";import"./label-7ff3c701.js";import"./index-681e4b07-5e2e425f.js";import"./es.map.constructor-029fc0ac.js";import"./es.number.to-fixed-3b31fde2.js";import"./index-88155c66.js";import"./es.number.is-nan-1f7cd792.js";import"./string-d2fe5096.js";import"./es.number.is-integer-82a2773c.js";function p(){return p=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t},p.apply(this,arguments)}e(p,"_extends");const P={},R="wrapper";function m({components:t,...n}){return o(R,p({},P,n,{components:t,mdxType:"MDXLayout"}),o("h1",null,"Radio input component"),o(y,{of:r,mdxType:"Description"}),o(g,{withToolbar:!0,mdxType:"Canvas"},o(f,{id:"form-radio--radio",mdxType:"Story"})),o(s,{language:"js",dark:!0,format:!0,code:d`
    <PoRadioInput
        :options="radioOptions"
        :pre-selected="radioOptionSelected"
        v-model="radioOptionSelected"
    />
  `,mdxType:"Source"}),o("h3",null,"Explanation"),o(c,{of:r,mdxType:"ArgsTable"}),o(s,{language:"js",dark:!0,format:!0,code:d`
    const radioOptions = [
        {
            id: 1, title: 'Option one'
        },
        {
            id: 2, title: 'Option two'
        },
    ];
    const radioOptionSelected = ref(radioOptions[0]);
  `,mdxType:"Source"}))}e(m,"MDXContent");m.isMDXComponent=!0;const F={title:"Form/Radio",component:r,parameters:{storySource:{source:`// YourComponent.stories.js

import PoRadioInput from './PoRadioInput.vue';
import PoCard from '../PoCard/PoCard.vue';

import PoRadioInputDocs from './PoRadioInputDocs.mdx';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Form/Radio',
  component: PoRadioInput,
  parameters: {
    docs: {
      page: PoRadioInputDocs,
      description: {
        component: 'Radio input.'
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
  components: { PoRadioInput, PoCard },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<PoRadioInput v-bind="args" />',
});

export const Radio = Template.bind({});

Radio.args = {
  /* 👇 The args you need here will depend on your component */
  options: [
    {
      id: 1, title: 'Option one'
    },
    {
      id: 2, title: 'Option two'
    },
  ],
  preSelected: null,
};`,locationsMap:{radio:{startLoc:{col:17,line:33},endLoc:{col:2,line:40},startBody:{col:17,line:33},endBody:{col:2,line:40}}}},docs:{page:m,description:{component:"Radio input."}},backgrounds:{default:"gray",values:[{name:"gray",value:"#f8fafc"}]}}},h=e(t=>({components:{PoRadioInput:r,PoCard:u},setup(){return{args:t}},template:'<PoRadioInput v-bind="args" />'}),"Template"),v=h.bind({});v.args={options:[{id:1,title:"Option one"},{id:2,title:"Option two"}],preSelected:null};const W=["Radio"];export{v as Radio,W as __namedExportsOrder,F as default};
//# sourceMappingURL=PoRadioInput.stories-15db3954.js.map
