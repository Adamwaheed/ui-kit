var d=Object.defineProperty;var n=(o,t)=>d(o,"name",{value:t,configurable:!0});import{P as a}from"./PoCheckbox-1509f3e2.js";import"./index-017ea31c.js";import{c as e,S as l,C as h,b as i,D as b,a as g}from"./Props-5b83f7f2.js";import"./jsx-runtime-6e1c9cdb.js";import"./es.object.get-own-property-descriptor-20858f85.js";import"./web.url.constructor-504c5ace.js";import{d as u}from"./iframe-651c4b65.js";import"./vue.esm-bundler-d54c9e0f.js";import"./index-681e4b07-5e2e425f.js";import"./es.map.constructor-029fc0ac.js";import"./es.number.to-fixed-3b31fde2.js";import"./index-88155c66.js";import"./es.number.is-nan-1f7cd792.js";import"./string-d2fe5096.js";import"./es.number.is-integer-82a2773c.js";function c(){return c=Object.assign?Object.assign.bind():function(o){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(o[r]=s[r])}return o},c.apply(this,arguments)}n(c,"_extends");const x={},f="wrapper";function m({components:o,...t}){return e(f,c({},x,t,{components:o,mdxType:"MDXLayout"}),e("h1",null,"Checkbox component"),e(b,{of:a,mdxType:"Description"}),e(h,{withToolbar:!0,mdxType:"Canvas"},e(i,{id:"form-checkbox--basic",mdxType:"Story"}),e(i,{id:"form-checkbox--with-message",mdxType:"Story"})),e(l,{language:"js",dark:!0,format:!0,code:u`
    <PoCheckbox
        v-model="checkboxState"
        label="Check me"
        id="checkbox-one"
        message="A short descriptive message"
    />
  `,mdxType:"Source"}),e("h3",null,"Explanation"),e(g,{of:a,mdxType:"ArgsTable"}))}n(m,"MDXContent");m.isMDXComponent=!0;const E={title:"Form/Checkbox",component:a,parameters:{storySource:{source:`// YourComponent.stories.js

import PoCheckbox from './PoCheckbox.vue';

import PoCheckboxDocs from './PoCheckboxDocs.mdx';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Form/Checkbox',
  component: PoCheckbox,
  parameters: {
    docs: {
      page: PoCheckboxDocs,
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
  components: { PoCheckbox },
  template: '<PoCheckbox v-bind="args" />',
});

export const Basic = Template.bind();
export const WithMessage = Template.bind();

Basic.args = {
    id: 'check-box-basic',
    label: 'Check me',
};

WithMessage.args = {
    id: 'check-box-with-message',
    label: 'Check me',
    message: 'A short descriptive message'
};`,locationsMap:{basic:{startLoc:{col:17,line:32},endLoc:{col:2,line:35},startBody:{col:17,line:32},endBody:{col:2,line:35}},"with-message":{startLoc:{col:17,line:32},endLoc:{col:2,line:35},startBody:{col:17,line:32},endBody:{col:2,line:35}}}},docs:{page:m,description:{component:"This is the wrapper for every card. It adds basic style of the card and leaves out padding and margins."}},backgrounds:{default:"gray",values:[{name:"gray",value:"#f8fafc"}]}}},p=n(o=>({components:{PoCheckbox:a},template:'<PoCheckbox v-bind="args" />'}),"Template"),y=p.bind(),k=p.bind();y.args={id:"check-box-basic",label:"Check me"};k.args={id:"check-box-with-message",label:"Check me",message:"A short descriptive message"};const F=["Basic","WithMessage"];export{y as Basic,k as WithMessage,F as __namedExportsOrder,E as default};
//# sourceMappingURL=PoCheckbox.stories-052a4d5a.js.map
