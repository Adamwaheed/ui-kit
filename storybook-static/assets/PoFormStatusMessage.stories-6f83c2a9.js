var d=Object.defineProperty;var s=(o,r)=>d(o,"name",{value:r,configurable:!0});import{P as t}from"./PoFormStatusMessage-070006d1.js";import"./index-017ea31c.js";import{c as e,S as i,C as g,b as u,D as f,a as y}from"./Props-5b83f7f2.js";import"./jsx-runtime-6e1c9cdb.js";import"./es.object.get-own-property-descriptor-20858f85.js";import"./web.url.constructor-504c5ace.js";import{d as c}from"./iframe-651c4b65.js";import"./vue.esm-bundler-d54c9e0f.js";import"./index-681e4b07-5e2e425f.js";import"./es.map.constructor-029fc0ac.js";import"./es.number.to-fixed-3b31fde2.js";import"./index-88155c66.js";import"./es.number.is-nan-1f7cd792.js";import"./string-d2fe5096.js";import"./es.number.is-integer-82a2773c.js";function m(){return m=Object.assign?Object.assign.bind():function(o){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(o[a]=n[a])}return o},m.apply(this,arguments)}s(m,"_extends");const h={},S="wrapper";function l({components:o,...r}){return e(S,m({},h,r,{components:o,mdxType:"MDXLayout"}),e("h1",null,"Form status component"),e(f,{of:t,mdxType:"Description"}),e(g,{withToolbar:!0,mdxType:"Canvas"},e("div",{class:"space-y-5"},e(u,{id:"form-form-status--success",mdxType:"Story"}),e(u,{id:"form-form-status--error",mdxType:"Story"}))),e("h3",null,"Success"),e(i,{language:"js",dark:!0,format:!0,code:c`
    <PoFormStatusMessage message="Thank you! The record has been created successfully!" />
  `,mdxType:"Source"}),e("h3",null,"Error"),e(i,{language:"js",dark:!0,format:!0,code:c`
    <PoFormStatusMessage
        :is-error="true"
        message="Could not complete your request."
        :error-list="['NID no is required', 'Date of birth is required']"
    />
  `,mdxType:"Source"}),e("h3",null,"Explanation"),e(y,{of:t,mdxType:"ArgsTable"}))}s(l,"MDXContent");l.isMDXComponent=!0;const _={title:"Form/Form Status",component:t,parameters:{storySource:{source:`// YourComponent.stories.js

import PoFormStatusMessage from './PoFormStatusMessage.vue';

import PoFormStatusMessageDocs from './PoFormStatusMessageDocs.mdx';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Form/Form Status',
  component: PoFormStatusMessage,
  parameters: {
    docs: {
      page: PoFormStatusMessageDocs,
      description: {
          component: 'Display form errors and success using this component'
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
  components: { PoFormStatusMessage },
  template: '<PoFormStatusMessage v-bind="args" />',
});

export const Success = Template.bind();
export const Error = Template.bind();

Error.args = {
    /* 👇 The args you need here will depend on your component */
    isError: true,
    message: "Please complete the form before you submit!",
    errorList: [
        'Fullname is required',
        'Email format is incorrect'
    ]
};
Success.args = {
    /* 👇 The args you need here will depend on your component */
    message: "Thank you! Your request has been sent!",
};`,locationsMap:{success:{startLoc:{col:17,line:32},endLoc:{col:2,line:35},startBody:{col:17,line:32},endBody:{col:2,line:35}},error:{startLoc:{col:17,line:32},endLoc:{col:2,line:35},startBody:{col:17,line:32},endBody:{col:2,line:35}}}},docs:{page:l,description:{component:"Display form errors and success using this component"}},backgrounds:{default:"gray",values:[{name:"gray",value:"#f8fafc"}]}}},p=s(o=>({components:{PoFormStatusMessage:t},template:'<PoFormStatusMessage v-bind="args" />'}),"Template"),b=p.bind(),T=p.bind();T.args={isError:!0,message:"Please complete the form before you submit!",errorList:["Fullname is required","Email format is incorrect"]};b.args={message:"Thank you! Your request has been sent!"};const Y=["Success","Error"];export{T as Error,b as Success,Y as __namedExportsOrder,_ as default};
//# sourceMappingURL=PoFormStatusMessage.stories-6f83c2a9.js.map
