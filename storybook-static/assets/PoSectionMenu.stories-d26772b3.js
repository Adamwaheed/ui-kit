var i=Object.defineProperty;var n=(e,o)=>i(e,"name",{value:o,configurable:!0});import{P as c}from"./PoSectionMenu-d3fb3d02.js";import{a as t,b as s,o as r}from"./vue.esm-bundler-d54c9e0f.js";function a(e,o){return r(),t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"})])}n(a,"render$2");function l(e,o){return r(),t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"})])}n(l,"render$1");function u(e,o){return r(),t("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"})])}n(u,"render");const h={title:"Components/Section Menu",component:c,parameters:{storySource:{source:`// YourComponent.stories.js

import PoSectionMenu from './PoSectionMenu.vue';
import { UsersIcon, PuzzlePieceIcon, KeyIcon } from '@heroicons/vue/24/outline';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Components/Section Menu',
  component: PoSectionMenu,
  parameters: {
    docs: {
      description: {
        component: 'Section menu or page menu used inside the body in sections like settings, etc, where sub menus are not accessed as often.'
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
  components: { PoSectionMenu },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<PoSectionMenu v-bind="args"/>',
});

export const SectionMenu = Template.bind({});

SectionMenu.args = {
  /* 👇 The args you need here will depend on your component */
    menuItems: [
        {
            label: 'All Users',
            icon: UsersIcon,
            link: '/users'
        },
        {
            label: 'Roles',
            icon: PuzzlePieceIcon,
            link: '/users/roles'
        },
        {
            label: 'Permissions',
            icon: KeyIcon,
            link: '/users/permissions'
        },
    ],
    currPageRoute: '/users'
};`,locationsMap:{"section-menu":{startLoc:{col:17,line:30},endLoc:{col:2,line:37},startBody:{col:17,line:30},endBody:{col:2,line:37}}}},docs:{description:{component:"Section menu or page menu used inside the body in sections like settings, etc, where sub menus are not accessed as often."}},backgrounds:{default:"gray",values:[{name:"gray",value:"#f8fafc"}]}}},d=n(e=>({components:{PoSectionMenu:c},setup(){return{args:e}},template:'<PoSectionMenu v-bind="args"/>'}),"Template"),m=d.bind({});m.args={menuItems:[{label:"All Users",icon:u,link:"/users"},{label:"Roles",icon:l,link:"/users/roles"},{label:"Permissions",icon:a,link:"/users/permissions"}],currPageRoute:"/users"};const w=["SectionMenu"];export{m as SectionMenu,w as __namedExportsOrder,h as default};
//# sourceMappingURL=PoSectionMenu.stories-d26772b3.js.map
