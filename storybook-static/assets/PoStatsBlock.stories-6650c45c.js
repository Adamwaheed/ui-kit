var d=Object.defineProperty;var t=(o,e)=>d(o,"name",{value:e,configurable:!0});import{P as r}from"./PoStatsBlock-cf1e5d28.js";import"./index-017ea31c.js";import{c as n,S as c,a as b,C as k,b as v,D as h}from"./Props-5b83f7f2.js";import"./jsx-runtime-6e1c9cdb.js";import"./es.object.get-own-property-descriptor-20858f85.js";import"./web.url.constructor-504c5ace.js";import{d as i}from"./iframe-651c4b65.js";import{a as p,b as m,o as u}from"./vue.esm-bundler-d54c9e0f.js";import{r as f}from"./FunnelIcon-d18c2ab8.js";import"./index-681e4b07-5e2e425f.js";import"./es.map.constructor-029fc0ac.js";import"./es.number.to-fixed-3b31fde2.js";import"./index-88155c66.js";import"./es.number.is-nan-1f7cd792.js";import"./string-d2fe5096.js";import"./es.number.is-integer-82a2773c.js";function y(o,e){return u(),p("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[m("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"})])}t(y,"render$1");function S(o,e){return u(),p("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[m("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"})])}t(S,"render");function l(){return l=Object.assign?Object.assign.bind():function(o){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(o[s]=a[s])}return o},l.apply(this,arguments)}t(l,"_extends");const x={},B="wrapper";function g({components:o,...e}){return n(B,l({},x,e,{components:o,mdxType:"MDXLayout"}),n("h1",null,"Stats block component"),n(h,{of:r,mdxType:"Description"}),n(k,{withToolbar:!0,mdxType:"Canvas"},n(v,{id:"components-stats-block--stats-block",mdxType:"Story"})),n(c,{language:"js",dark:!0,format:!0,code:i`
    <PoStatsBlock :items="statsBlockItems" />
  `,mdxType:"Source"}),n("h3",null,"Explanation"),n(b,{of:r,mdxType:"ArgsTable"}),n(c,{language:"js",dark:!0,format:!0,code:i`
    const statsBlockItems = [
        {
            label: 'Number of Maturities',
            value: '20',
            bgColor: 'bg-orange-50',
            iconColor: 'text-orange-700',
            icon: SparklesIcon
        },
        {
            label: 'Principal Frequency',
            value: 'Semi-Annual',
            bgColor: 'bg-sky-50',
            iconColor: 'text-sky-700',
            icon: FunnelIcon
        },
        {
            label: 'Purchase Value',
            value: '80,000,000.00',
            bgColor: 'bg-green-50',
            iconColor: 'text-green-700',
            icon: BanknotesIcon
        },
    ];
  `,mdxType:"Source"}))}t(g,"MDXContent");g.isMDXComponent=!0;const q={title:"Components/Stats Block",component:r,parameters:{storySource:{source:`// YourComponent.stories.js

import PoStatsBlock from './PoStatsBlock.vue';

import { BanknotesIcon, SparklesIcon, FunnelIcon } from '@heroicons/vue/24/outline';

import PoStatsBlockDocs from './PoStatsBlockDocs.mdx';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Components/Stats Block',
  component: PoStatsBlock,
  parameters: {
    docs: {
      page: PoStatsBlockDocs,
      description: {
        component: 'Used to display stats for on a page'
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
  components: { PoStatsBlock },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<PoStatsBlock v-bind="args"/>',
});

export const StatsBlock = Template.bind({});

StatsBlock.args = {
  /* 👇 The args you need here will depend on your component */
  items: [
    {
        label: 'Number of Maturities',
        value: '20',
        bgColor: 'bg-orange-50',
        iconColor: 'text-orange-700',
        icon: SparklesIcon
    },
    {
        label: 'Principal Frequency',
        value: 'Semi-Annual',
        bgColor: 'bg-sky-50',
        iconColor: 'text-sky-700',
        icon: FunnelIcon
    },
    {
        label: 'Purchase Value',
        value: '80,000,000.00',
        bgColor: 'bg-green-50',
        iconColor: 'text-green-700',
        icon: BanknotesIcon
    },
    ],
};`,locationsMap:{"stats-block":{startLoc:{col:17,line:34},endLoc:{col:2,line:41},startBody:{col:17,line:34},endBody:{col:2,line:41}}}},docs:{page:g,description:{component:"Used to display stats for on a page"}},backgrounds:{default:"mpao",values:[{name:"mpao",value:"#282f53"}]}}},C=t(o=>({components:{PoStatsBlock:r},setup(){return{args:o}},template:'<PoStatsBlock v-bind="args"/>'}),"Template"),w=C.bind({});w.args={items:[{label:"Number of Maturities",value:"20",bgColor:"bg-orange-50",iconColor:"text-orange-700",icon:S},{label:"Principal Frequency",value:"Semi-Annual",bgColor:"bg-sky-50",iconColor:"text-sky-700",icon:f},{label:"Purchase Value",value:"80,000,000.00",bgColor:"bg-green-50",iconColor:"text-green-700",icon:y}]};const U=["StatsBlock"];export{w as StatsBlock,U as __namedExportsOrder,q as default};
//# sourceMappingURL=PoStatsBlock.stories-6650c45c.js.map
