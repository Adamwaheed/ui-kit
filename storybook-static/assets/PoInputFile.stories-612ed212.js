var r=Object.defineProperty;var n=(e,a)=>r(e,"name",{value:a,configurable:!0});import{P as o}from"./PoInputFile-32dd276b.js";import{P as s}from"./PoCard-9caf7894.js";import"./vue.esm-bundler-d54c9e0f.js";const g={title:"Form/Input File",component:o,parameters:{storySource:{source:`// YourComponent.stories.js

import PoInputFile from './PoInputFile.vue';
import PoCard from '../PoCard/PoCard.vue';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Form/Input File',
  component: PoInputFile,
  parameters: {
    docs: {
      description: {
        component: 'Form upload input field.'
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
  components: { PoInputFile, PoCard },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<PoCard class="mt-5 p-5 max-w-md"> <template v-slot:content><PoInputFile v-bind="args" /></template></PoCard>',
});

export const Normal = Template.bind({});
export const WithMessage = Template.bind({});
export const ErrorState = Template.bind({});

Normal.args = {
  /* 👇 The args you need here will depend on your component */
  label: "Attache files",
  id: 'attachment-id',
  type: 'text'
};

WithMessage.args = {
  /* 👇 The args you need here will depend on your component */
  label: "Attache files",
  id: 'attachment2-id',
  type: 'text',
  message: 'Attachment message.'

};

ErrorState.args = {
  /* 👇 The args you need here will depend on your component */
  label: "Attache files",
  id: 'attachment3-id',
  type: 'text',
  errorMessage: 'Attachment is required.',
  required: true

};`,locationsMap:{normal:{startLoc:{col:17,line:30},endLoc:{col:2,line:37},startBody:{col:17,line:30},endBody:{col:2,line:37}},"with-message":{startLoc:{col:17,line:30},endLoc:{col:2,line:37},startBody:{col:17,line:30},endBody:{col:2,line:37}},"error-state":{startLoc:{col:17,line:30},endLoc:{col:2,line:37},startBody:{col:17,line:30},endBody:{col:2,line:37}}}},docs:{description:{component:"Form upload input field."}},backgrounds:{default:"gray",values:[{name:"gray",value:"#f8fafc"}]}}},t=n(e=>({components:{PoInputFile:o,PoCard:s},setup(){return{args:e}},template:'<PoCard class="mt-5 p-5 max-w-md"> <template v-slot:content><PoInputFile v-bind="args" /></template></PoCard>'}),"Template"),l=t.bind({}),i=t.bind({}),d=t.bind({});l.args={label:"Attache files",id:"attachment-id",type:"text"};i.args={label:"Attache files",id:"attachment2-id",type:"text",message:"Attachment message."};d.args={label:"Attache files",id:"attachment3-id",type:"text",errorMessage:"Attachment is required.",required:!0};const h=["Normal","WithMessage","ErrorState"];export{d as ErrorState,l as Normal,i as WithMessage,h as __namedExportsOrder,g as default};
//# sourceMappingURL=PoInputFile.stories-612ed212.js.map
