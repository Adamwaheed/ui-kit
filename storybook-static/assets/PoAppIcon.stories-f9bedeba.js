var p=Object.defineProperty;var e=(o,t)=>p(o,"name",{value:t,configurable:!0});import{P as n}from"./PoAppIcon-b28e70d2.js";import"./vue.esm-bundler-d54c9e0f.js";const i={title:"Shell/App Icon",component:n,parameters:{storySource:{source:`// YourComponent.stories.js

import PoAppIcon from './PoAppIcon.vue';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Shell/App Icon',
  component: PoAppIcon,
  parameters: {
    docs: {
        description: {
            component: 'This component lives inside PoTopBar component'
        }
    },
    backgrounds: {
      default: 'mpao',
      values: [
        { name: 'mpao', value: '#282f53' },
      ],
    },
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
  components: { PoAppIcon },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<PoAppIcon v-bind="args"><template v-slot:icon><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">   <path fill-rule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clip-rule="evenodd" /> </svg> </template></PoAppIcon>',
});

export const AppIcon = Template.bind({});

AppIcon.args = {
  /* 👇 The args you need here will depend on your component */
  appName: 'App Name',
};`,locationsMap:{"app-icon":{startLoc:{col:17,line:29},endLoc:{col:2,line:36},startBody:{col:17,line:29},endBody:{col:2,line:36}}}},docs:{description:{component:"This component lives inside PoTopBar component"}},backgrounds:{default:"mpao",values:[{name:"mpao",value:"#282f53"}]}}},a=e(o=>({components:{PoAppIcon:n},setup(){return{args:o}},template:'<PoAppIcon v-bind="args"><template v-slot:icon><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">   <path fill-rule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clip-rule="evenodd" /> </svg> </template></PoAppIcon>'}),"Template"),s=a.bind({});s.args={appName:"App Name"};const m=["AppIcon"];export{s as AppIcon,m as __namedExportsOrder,i as default};
//# sourceMappingURL=PoAppIcon.stories-f9bedeba.js.map
