var m=Object.defineProperty;var o=(e,n)=>m(e,"name",{value:n,configurable:!0});import{P as i}from"./PoDescriptionList-35506044.js";import{P as u}from"./PoCard-9caf7894.js";import"./index-017ea31c.js";import{c as t,S as a,a as D,C as g,b as h,D as f}from"./Props-5b83f7f2.js";import"./jsx-runtime-6e1c9cdb.js";import"./es.object.get-own-property-descriptor-20858f85.js";import"./web.url.constructor-504c5ace.js";import{d}from"./iframe-651c4b65.js";import"./vue.esm-bundler-d54c9e0f.js";import"./index-681e4b07-5e2e425f.js";import"./es.map.constructor-029fc0ac.js";import"./es.number.to-fixed-3b31fde2.js";import"./index-88155c66.js";import"./es.number.is-nan-1f7cd792.js";import"./string-d2fe5096.js";import"./es.number.is-integer-82a2773c.js";function l(){return l=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var s=arguments[n];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e},l.apply(this,arguments)}o(l,"_extends");const y={},S="wrapper";function c({components:e,...n}){return t(S,l({},y,n,{components:e,mdxType:"MDXLayout"}),t("h1",null,"Description List component"),t(f,{of:i,mdxType:"Description"}),t(g,{withToolbar:!0,mdxType:"Canvas"},t(h,{id:"components-description-list--list",mdxType:"Story"})),t(a,{language:"js",dark:!0,format:!0,code:d`
    <PoDescriptionList
        :items="descriptionListItems"
        :striped="true"
        @button-click="handleDescriptionListActionClick"
    />
  `,mdxType:"Source"}),t("h3",null,"Adding content via slot"),t(a,{language:"js",dark:!0,format:!0,code:d`
    <PoDescriptionList>
      <template v-slot:content>
        <div>
          <dt>Title</dt>
          <dd>Description</dd>
        </div>
        <div>
          <dt>Title 2</dt>
          <dd>Description 2</dd>
        </div>
        <div>
          <dt>Title 3</dt>
          <dd>Description 3</dd>
        </div>
      </template>
    </PoDescriptionList>
  `,mdxType:"Source"}),t("h3",null,"Explanation"),t(D,{of:i,mdxType:"ArgsTable"}),t(a,{language:"js",dark:!0,format:!0,code:d`
    let descriptionListItems = [
        {
            title: "Full name",
            description: "Saleem Ahmed Doe",
        },
        {
            title: "Address",
            description: "House of Sal, Medhu St, Malé",
        },
        {
            title: "Dob",
            description: "1972-02-05",
            action: "Update",
        },
    ];
    function handleDescriptionListActionClick(item) {
        switch (item) {
            case "Update":
            alert("Update action was clicked");
            break;
        }
    }
  `,mdxType:"Source"}))}o(c,"MDXContent");c.isMDXComponent=!0;const _={title:"Components/Description List",component:i,parameters:{storySource:{source:`// YourComponent.stories.js

import PoDescriptionList from './PoDescriptionList.vue';
import PoCard from '../PoCard/PoCard.vue';

import PoDescriptionListDocs from './PoDescriptionListDocs.mdx';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Components/Description List',
  component: PoDescriptionList,
  parameters: {
    docs: {
      page: PoDescriptionListDocs,
      description: {
        component: 'Description list component is useful when displaying content in an easy to read way.'
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
  components: { PoDescriptionList, PoCard },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<PoCard class="mt-5 p-5"> <template v-slot:content> <PoDescriptionList v-bind="args" /></template></PoCard>',
});

export const List = Template.bind({});
export const WithAction = Template.bind({});
export const Striped = Template.bind({});

List.args = {
  /* 👇 The args you need here will depend on your component */
  items: [
    {
      title: "Full name",
      description: "Saleem Ahmed Doe",
    },
    {
        title: "Address",
        description: "House of Sal, Medhu St, Malé",
    },
    {
        title: "Dob",
        description: "1972-02-05",
        action: "Update",
    }
    ]
};

WithAction.args = {
  /* 👇 The args you need here will depend on your component */
  items: [
    {
      title: 'Full name',
      description: 'Saleem Ahmed Doe',
      action: 'Edit'
    },
    {
      title: 'Address',
      description: 'House of Sal, Medhu St, Malé',
      action: 'Open map'
    },
    {
      title: 'Dob',
      description: '1972-02-05',
      action: 'Update'
    }
    ]
};

Striped.args = {
    /* 👇 The args you need here will depend on your component */
    items: [
      {
        title: 'Full name',
        description: 'Saleem Ahmed Doe',
        action: ''
      },
      {
        title: 'Address',
        description: 'House of Sal, Medhu St, Malé'
      },
      {
        title: 'Dob',
        description: '1972-02-05'
      },
      {
        title: 'Position',
        description: 'Crawler'
      }
      ],
      striped: true
  };`,locationsMap:{list:{startLoc:{col:17,line:33},endLoc:{col:2,line:40},startBody:{col:17,line:33},endBody:{col:2,line:40}},"with-action":{startLoc:{col:17,line:33},endLoc:{col:2,line:40},startBody:{col:17,line:33},endBody:{col:2,line:40}},striped:{startLoc:{col:17,line:33},endLoc:{col:2,line:40},startBody:{col:17,line:33},endBody:{col:2,line:40}}}},docs:{page:c,description:{component:"Description list component is useful when displaying content in an easy to read way."}},backgrounds:{default:"gray",values:[{name:"gray",value:"#f8fafc"}]}}},p=o(e=>({components:{PoDescriptionList:i,PoCard:u},setup(){return{args:e}},template:'<PoCard class="mt-5 p-5"> <template v-slot:content> <PoDescriptionList v-bind="args" /></template></PoCard>'}),"Template"),L=p.bind({}),b=p.bind({}),P=p.bind({});L.args={items:[{title:"Full name",description:"Saleem Ahmed Doe"},{title:"Address",description:"House of Sal, Medhu St, Malé"},{title:"Dob",description:"1972-02-05",action:"Update"}]};b.args={items:[{title:"Full name",description:"Saleem Ahmed Doe",action:"Edit"},{title:"Address",description:"House of Sal, Medhu St, Malé",action:"Open map"},{title:"Dob",description:"1972-02-05",action:"Update"}]};P.args={items:[{title:"Full name",description:"Saleem Ahmed Doe",action:""},{title:"Address",description:"House of Sal, Medhu St, Malé"},{title:"Dob",description:"1972-02-05"},{title:"Position",description:"Crawler"}],striped:!0};const I=["List","WithAction","Striped"];export{L as List,P as Striped,b as WithAction,I as __namedExportsOrder,_ as default};
//# sourceMappingURL=PoDescriptionList.stories-ba9b018c.js.map
