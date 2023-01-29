var c=Object.defineProperty;var r=(t,o)=>c(t,"name",{value:o,configurable:!0});import{P as a}from"./PoButton-58fea921.js";import"./index-017ea31c.js";import{c as n,S as p,C as m,b as l,D as b,a as y}from"./Props-5b83f7f2.js";import"./jsx-runtime-6e1c9cdb.js";import"./es.object.get-own-property-descriptor-20858f85.js";import"./web.url.constructor-504c5ace.js";import{d as g}from"./iframe-651c4b65.js";import"./vue.esm-bundler-d54c9e0f.js";import"./index-681e4b07-5e2e425f.js";import"./es.map.constructor-029fc0ac.js";import"./es.number.to-fixed-3b31fde2.js";import"./index-88155c66.js";import"./es.number.is-nan-1f7cd792.js";import"./string-d2fe5096.js";import"./es.number.is-integer-82a2773c.js";function u(){return u=Object.assign?Object.assign.bind():function(t){for(var o=1;o<arguments.length;o++){var s=arguments[o];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i])}return t},u.apply(this,arguments)}r(u,"_extends");const B={},h="wrapper";function d({components:t,...o}){return n(h,u({},B,o,{components:t,mdxType:"MDXLayout"}),n("h1",null,"Button component"),n(b,{of:a,mdxType:"Description"}),n(m,{withToolbar:!0,mdxType:"Canvas"},n("div",{className:"flex space-x-3 items-center"},n(l,{id:"components-button--button",mdxType:"Story"}),n(l,{id:"components-button--small",mdxType:"Story"}),n(l,{id:"components-button--medium",mdxType:"Story"}),n(l,{id:"components-button--large",mdxType:"Story"}),n(l,{id:"components-button--color-change",mdxType:"Story"}))),n(p,{language:"js",dark:!0,format:!0,code:g`
    <PoButton type="button" label="Button" />
    <PoButton type="submit" label="Submit" />
    <PoButton type="link" label="Link" to="/home" />
    <PoButton type="button" label="Button Disabled" :disabled="true" />
    <PoButton type="submit" label="Submit Disabled" :disabled="true" />
    <PoButton type="button" label="Button" :override-colors="true" size="sm" class="bg-cyan-600 hover:bg-cyan-700 text-white" />
    <PoButton type="button" label="Button" :override-colors="true" size="lg" class="bg-rose-600 hover:bg-rose-700 text-white" />
  `,mdxType:"Source"}),n("h3",null,"Explanation"),n(y,{of:a,mdxType:"ArgsTable"}))}r(d,"MDXContent");d.isMDXComponent=!0;const q={title:"Components/Button",component:a,parameters:{storySource:{source:`// YourComponent.stories.js

import PoButton from './PoButton.vue';

import PoButtonDocs from './PoButtonDocs.mdx';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Components/Button',
  component: PoButton,
  parameters: {
    docs: {
      page: PoButtonDocs,
      description: {
          component: 'Button component. Button styles like padding and background color can be overitten by giving it tailwind utility classes.'
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
  components: { PoButton },
  template: '<PoButton v-bind="args" />',
});

export const Button = Template.bind();
export const SubmitButton = Template.bind();
export const Link = Template.bind();
export const Small = Template.bind();
export const Medium = Template.bind();
export const Large = Template.bind();
export const ColorChange = Template.bind();

Button.args = {
    /* 👇 The args you need here will depend on your component */
    label: "Button",
    type: "button"
};

SubmitButton.args = {
    /* 👇 The args you need here will depend on your component */
    label: "Submit",
    type: "submit"
};

Link.args = {
    /* 👇 The args you need here will depend on your component */
    label: "Link button",
    type: "link",
    to: "/home",
    class: "inline-block"
};

Small.args = {
    /* 👇 The args you need here will depend on your component */
    label: "Small",
    type: "button",
    size: "sm"
};

Medium.args = {
    /* 👇 The args you need here will depend on your component */
    label: "Medium",
    type: "button",
    size: "md",
    disabled: "disabled"
};

Large.args = {
    /* 👇 The args you need here will depend on your component */
    label: "Large",
    type: "button",
    size: "lg"
};

ColorChange.args = {
    /* 👇 The args you need here will depend on your component */
    label: "Rose",
    type: "button",
    overrideColors: true,
    class: 'bg-rose-600 hover:bg-rose-700 text-white'
};`,locationsMap:{button:{startLoc:{col:17,line:32},endLoc:{col:2,line:35},startBody:{col:17,line:32},endBody:{col:2,line:35}},"submit-button":{startLoc:{col:17,line:32},endLoc:{col:2,line:35},startBody:{col:17,line:32},endBody:{col:2,line:35}},link:{startLoc:{col:17,line:32},endLoc:{col:2,line:35},startBody:{col:17,line:32},endBody:{col:2,line:35}},small:{startLoc:{col:17,line:32},endLoc:{col:2,line:35},startBody:{col:17,line:32},endBody:{col:2,line:35}},medium:{startLoc:{col:17,line:32},endLoc:{col:2,line:35},startBody:{col:17,line:32},endBody:{col:2,line:35}},large:{startLoc:{col:17,line:32},endLoc:{col:2,line:35},startBody:{col:17,line:32},endBody:{col:2,line:35}},"color-change":{startLoc:{col:17,line:32},endLoc:{col:2,line:35},startBody:{col:17,line:32},endBody:{col:2,line:35}}}},docs:{page:d,description:{component:"Button component. Button styles like padding and background color can be overitten by giving it tailwind utility classes."}},backgrounds:{default:"gray",values:[{name:"gray",value:"#f8fafc"}]}}},e=r(t=>({components:{PoButton:a},template:'<PoButton v-bind="args" />'}),"Template"),T=e.bind(),x=e.bind(),f=e.bind(),L=e.bind(),v=e.bind(),S=e.bind(),P=e.bind();T.args={label:"Button",type:"button"};x.args={label:"Submit",type:"submit"};f.args={label:"Link button",type:"link",to:"/home",class:"inline-block"};L.args={label:"Small",type:"button",size:"sm"};v.args={label:"Medium",type:"button",size:"md",disabled:"disabled"};S.args={label:"Large",type:"button",size:"lg"};P.args={label:"Rose",type:"button",overrideColors:!0,class:"bg-rose-600 hover:bg-rose-700 text-white"};const F=["Button","SubmitButton","Link","Small","Medium","Large","ColorChange"];export{T as Button,P as ColorChange,S as Large,f as Link,v as Medium,L as Small,x as SubmitButton,F as __namedExportsOrder,q as default};
//# sourceMappingURL=PoButton.stories-73b7c763.js.map
