var l=Object.defineProperty;var p=(e,t)=>l(e,"name",{value:t,configurable:!0});import{P as n}from"./PoAppTray-638c4eef.js";import"./index-017ea31c.js";import{c as o,S as s,a as d,b as u,D as b}from"./Props-5b83f7f2.js";import"./jsx-runtime-6e1c9cdb.js";import"./es.object.get-own-property-descriptor-20858f85.js";import"./web.url.constructor-504c5ace.js";import{d as c}from"./iframe-651c4b65.js";import"./vue.esm-bundler-d54c9e0f.js";import"./index-681e4b07-5e2e425f.js";import"./es.map.constructor-029fc0ac.js";import"./es.number.to-fixed-3b31fde2.js";import"./index-88155c66.js";import"./es.number.is-nan-1f7cd792.js";import"./string-d2fe5096.js";import"./es.number.is-integer-82a2773c.js";function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},m.apply(this,arguments)}p(m,"_extends");const h={},g="wrapper";function i({components:e,...t}){return o(g,m({},h,t,{components:e,mdxType:"MDXLayout"}),o("h1",null,"App Tray component"),o(b,{of:n,mdxType:"Description"}),o("p",null,"You will not be directly using ",o("inlineCode",{parentName:"p"},"<PoAppTray />")," component. It is a child component that comes with ",o("inlineCode",{parentName:"p"},"<PoTopBar />")," component."),o(u,{inline:!1,id:"shell-app-tray--app-tray",mdxType:"Story"}),o(s,{language:"js",dark:!0,format:!0,code:c`
    <PoAppTray :app-list="appList" />
  `,mdxType:"Source"}),o("h3",null,"Explanation"),o(d,{of:n,mdxType:"ArgsTable"}),o("p",null,"Populating App Tray through Top bar."),o(s,{language:"js",dark:!0,format:!0,code:c`
    <PoTopBar
      :app-list="allApps"
    >
  `,mdxType:"Source"}),o(s,{language:"js",dark:!0,format:!0,code:c`
    let allApps = [
        {
            groupName: "",
            apps: [
                {
                    name: "App name",
                    url: "https://firstapp.example.com",
                    icon: "https://doodleipsum.com/50x50/abstract?bg=3D27F6&i=cb0515299c600124805d923f3619c1ad",
                },
                ...
            ],
        },
    ];
  `,mdxType:"Source"}))}p(i,"MDXContent");i.isMDXComponent=!0;const M={title:"Shell/App Tray",component:n,parameters:{storySource:{source:`// YourComponent.stories.js

import PoAppTray from './PoAppTray.vue';

import PoAppTrayDocs from './PoAppTrayDocs.mdx';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Shell/App Tray',
  component: PoAppTray,
  parameters: {
    docs: {
        page: PoAppTrayDocs,
        description: {
            component: 'This component lives inside PoTopBar component. You can populate it by passing data through PoTopBar component from the main App view.'
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
  components: { PoAppTray },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<PoAppTray v-bind="args" />',
});

export const AppTray = Template.bind({});

AppTray.args = {
  /* 👇 The args you need here will depend on your component */
  appList: [
    {
      groupName: '',
      apps: [
        {
          name: 'First',
          url: 'https://firstapp.example.com',
          icon: 'https://doodleipsum.com/50x50/abstract?bg=3D27F6&i=cb0515299c600124805d923f3619c1ad'
        },
        {
          name: 'Cool',
          url: 'https://coolapp.example.com',
          icon: 'https://doodleipsum.com/50x50/abstract?bg=EB765D&i=e2dedc7bc9f1a630e177355aa7b1a6c9'
        },
        {
          name: 'Coolest',
          url: 'https://coolapp.example.com',
          icon: 'https://doodleipsum.com/50x50/abstract?bg=7463D9&i=d298131eb7322b7002e6fd50e9dd8c41'
        }
      ]
    },
    {
        groupName: 'Other',
        apps: [
          {
            name: 'Coolest',
            url: 'https://coolapp.example.com',
            icon: 'https://doodleipsum.com/50x50/abstract?bg=7463D9&i=d298131eb7322b7002e6fd50e9dd8c41'
          },
          {
            name: 'Another',
            url: 'https://coolapp.example.com',
            icon: 'https://doodleipsum.com/50x50/abstract?bg=FF3C3C&i=5ef96019d86f8e5221c37d9733cb5492'
          }
        ]
      }
  ]
};`,locationsMap:{"app-tray":{startLoc:{col:17,line:32},endLoc:{col:2,line:39},startBody:{col:17,line:32},endBody:{col:2,line:39}}}},docs:{page:i,description:{component:"This component lives inside PoTopBar component. You can populate it by passing data through PoTopBar component from the main App view."}},backgrounds:{default:"mpao",values:[{name:"mpao",value:"#282f53"}]}}},y=p(e=>({components:{PoAppTray:n},setup(){return{args:e}},template:'<PoAppTray v-bind="args" />'}),"Template"),T=y.bind({});T.args={appList:[{groupName:"",apps:[{name:"First",url:"https://firstapp.example.com",icon:"https://doodleipsum.com/50x50/abstract?bg=3D27F6&i=cb0515299c600124805d923f3619c1ad"},{name:"Cool",url:"https://coolapp.example.com",icon:"https://doodleipsum.com/50x50/abstract?bg=EB765D&i=e2dedc7bc9f1a630e177355aa7b1a6c9"},{name:"Coolest",url:"https://coolapp.example.com",icon:"https://doodleipsum.com/50x50/abstract?bg=7463D9&i=d298131eb7322b7002e6fd50e9dd8c41"}]},{groupName:"Other",apps:[{name:"Coolest",url:"https://coolapp.example.com",icon:"https://doodleipsum.com/50x50/abstract?bg=7463D9&i=d298131eb7322b7002e6fd50e9dd8c41"},{name:"Another",url:"https://coolapp.example.com",icon:"https://doodleipsum.com/50x50/abstract?bg=FF3C3C&i=5ef96019d86f8e5221c37d9733cb5492"}]}]};const k=["AppTray"];export{T as AppTray,k as __namedExportsOrder,M as default};
//# sourceMappingURL=PoAppTray.stories-a2f53ee3.js.map
