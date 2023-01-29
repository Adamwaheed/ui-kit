var c=Object.defineProperty;var i=(n,t)=>c(n,"name",{value:t,configurable:!0});import{P as d}from"./PoInputField-27b98e94.js";import"./index-017ea31c.js";import{c as e,S as o,a as f,C as y,b as l,D as g}from"./Props-5b83f7f2.js";import"./jsx-runtime-6e1c9cdb.js";import"./es.object.get-own-property-descriptor-20858f85.js";import"./web.url.constructor-504c5ace.js";import{d as r}from"./iframe-651c4b65.js";import"./vue.esm-bundler-d54c9e0f.js";import"./index-681e4b07-5e2e425f.js";import"./es.map.constructor-029fc0ac.js";import"./es.number.to-fixed-3b31fde2.js";import"./index-88155c66.js";import"./es.number.is-nan-1f7cd792.js";import"./string-d2fe5096.js";import"./es.number.is-integer-82a2773c.js";function p(){return p=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var m in s)Object.prototype.hasOwnProperty.call(s,m)&&(n[m]=s[m])}return n},p.apply(this,arguments)}i(p,"_extends");const h={},b="wrapper";function u({components:n,...t}){return e(b,p({},h,t,{components:n,mdxType:"MDXLayout"}),e("h1",null,"Form status component"),e(g,{of:d,mdxType:"Description"}),e(y,{withToolbar:!0,mdxType:"Canvas"},e("div",{class:"grid grid-cols-2 gap-5 bg-white p-5 rounded-md shadow-md"},e(l,{inline:!0,id:"form-input-field--normal",mdxType:"Story"}),e(l,{inline:!0,id:"form-input-field--with-info-tooltip",mdxType:"Story"}),e(l,{inline:!0,id:"form-input-field--with-message",mdxType:"Story"}),e(l,{inline:!0,id:"form-input-field--with-placeholder",mdxType:"Story"}),e(l,{inline:!0,id:"form-input-field--error-state",mdxType:"Story"}),e(l,{inline:!0,id:"form-input-field--disabled-state",mdxType:"Story"}))),e(o,{language:"js",dark:!0,format:!0,code:r`
    <PoInputField
        label="Fullname"
        type="text"
        id="form-fullname"
        info="Name of the person"
        message="Write your name including middle names"
        error-message="Fullname is required"
        placeholder="Fullname..."
        :has-error="false"
        :required="false"
        :disabled="false"
    />
  `,mdxType:"Source"}),e("h3",null,"Explanation"),e(f,{of:d,mdxType:"ArgsTable"}),e("h3",null,"Normal (base)"),e(o,{language:"js",dark:!0,format:!0,code:r`
    <PoInputField
        label="Fullname"
        type="text"
        id="form-fullname"
    />
  `,mdxType:"Source"}),e("h3",null,"With message"),e(o,{language:"js",dark:!0,format:!0,code:r`
    <PoInputField
        label="Fullname"
        type="text"
        id="form-fullname"
        message="Write your name including middle names"
    />
  `,mdxType:"Source"}),e("h3",null,"Has Error"),e(o,{language:"js",dark:!0,format:!0,code:r`
    <PoInputField
        label="Fullname"
        type="text"
        id="form-fullname"
        error-message="Fullname is required"
        :has-error="true"
    />
  `,mdxType:"Source"}),e("h3",null,"With Info tooltip"),e(o,{language:"js",dark:!0,format:!0,code:r`
    <PoInputField
        label="Fullname"
        type="text"
        id="form-fullname"
        info="Name of the person"
    />
  `,mdxType:"Source"}),e("h3",null,"Disabled"),e(o,{language:"js",dark:!0,format:!0,code:r`
    <PoInputField
        label="Fullname"
        type="text"
        id="form-fullname"
        :disabled="true"
    />
  `,mdxType:"Source"}))}i(u,"MDXContent");u.isMDXComponent=!0;const A={title:"Form/Input Field",component:d,parameters:{storySource:{source:`// YourComponent.stories.js

import PoInputField from './PoInputField.vue';

import PoInputFieldDocs from './PoInputFieldDocs.mdx';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Form/Input Field',
  component: PoInputField,
  parameters: {
    docs: {
      page: PoInputFieldDocs,
      description: {
        component: 'Form input field.'
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
  components: { PoInputField },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<PoInputField v-bind="args" />',
});

export const Normal = Template.bind({});
export const WithInfoTooltip = Template.bind({});
export const WithMessage = Template.bind({});
export const WithPlaceholder = Template.bind({});
export const ErrorState = Template.bind({});
export const DisabledState = Template.bind({});

Normal.args = {
  /* 👇 The args you need here will depend on your component */
  label: "Full name",
  id: 'fullname-id',
  type: 'text'
};

WithInfoTooltip.args = {
  /* 👇 The args you need here will depend on your component */
  label: "NID",
  id: 'nid-id',
  type: 'text',
  info: 'National ID Card No.'

};

WithMessage.args = {
  /* 👇 The args you need here will depend on your component */
  label: "Street name",
  id: 'fullname2-id',
  type: 'text',
  message: 'Fullname with middle name.'

};

WithPlaceholder.args = {
  /* 👇 The args you need here will depend on your component */
  label: "Email address",
  id: 'fullname2-id',
  placeholder: 'doe@example.com',
  type: 'tel',
};

ErrorState.args = {
  /* 👇 The args you need here will depend on your component */
  label: "Phone number",
  id: 'fullname3-id',
  type: 'email',
  errorMessage: 'Email address is required.',
  hasError: true

};

DisabledState.args = {
  /* 👇 The args you need here will depend on your component */
  label: "Password",
  id: 'fullname5-id',
  type: 'password',
  disabled: true

};`,locationsMap:{normal:{startLoc:{col:17,line:32},endLoc:{col:2,line:39},startBody:{col:17,line:32},endBody:{col:2,line:39}},"with-info-tooltip":{startLoc:{col:17,line:32},endLoc:{col:2,line:39},startBody:{col:17,line:32},endBody:{col:2,line:39}},"with-message":{startLoc:{col:17,line:32},endLoc:{col:2,line:39},startBody:{col:17,line:32},endBody:{col:2,line:39}},"with-placeholder":{startLoc:{col:17,line:32},endLoc:{col:2,line:39},startBody:{col:17,line:32},endBody:{col:2,line:39}},"error-state":{startLoc:{col:17,line:32},endLoc:{col:2,line:39},startBody:{col:17,line:32},endBody:{col:2,line:39}},"disabled-state":{startLoc:{col:17,line:32},endLoc:{col:2,line:39},startBody:{col:17,line:32},endBody:{col:2,line:39}}}},docs:{page:u,description:{component:"Form input field."}},backgrounds:{default:"gray",values:[{name:"gray",value:"#f8fafc"}]}}},a=i(n=>({components:{PoInputField:d},setup(){return{args:n}},template:'<PoInputField v-bind="args" />'}),"Template"),x=a.bind({}),T=a.bind({}),F=a.bind({}),w=a.bind({}),I=a.bind({}),P=a.bind({});x.args={label:"Full name",id:"fullname-id",type:"text"};T.args={label:"NID",id:"nid-id",type:"text",info:"National ID Card No."};F.args={label:"Street name",id:"fullname2-id",type:"text",message:"Fullname with middle name."};w.args={label:"Email address",id:"fullname2-id",placeholder:"doe@example.com",type:"tel"};I.args={label:"Phone number",id:"fullname3-id",type:"email",errorMessage:"Email address is required.",hasError:!0};P.args={label:"Password",id:"fullname5-id",type:"password",disabled:!0};const H=["Normal","WithInfoTooltip","WithMessage","WithPlaceholder","ErrorState","DisabledState"];export{P as DisabledState,I as ErrorState,x as Normal,T as WithInfoTooltip,F as WithMessage,w as WithPlaceholder,H as __namedExportsOrder,A as default};
//# sourceMappingURL=PoInputField.stories-d87d28cb.js.map
