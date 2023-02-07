// YourComponent.stories.js

import PoSidebarDrawer from './PoSidebarDrawer.vue';
import PoSidebarDrawerDocs from './PoSidebarDrawerDocs.stories.mdx';

import { AcademicCapIcon,
    ShieldCheckIcon,
    MagnifyingGlassIcon,
    DocumentIcon,
    ShieldExclamationIcon,
    DocumentPlusIcon,
    PencilSquareIcon,
    WalletIcon,
    BellIcon
   } from '@heroicons/vue/24/outline';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Components/Sidebar Drawer',
  component: PoSidebarDrawer,
  parameters: {
    docs: {
      page: PoSidebarDrawerDocs,
      description: {
          component: 'Sidebar component.'
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
    components: { PoSidebarDrawer },
    template: '<PoSidebarDrawer v-bind="args" />',
  });
  
  export const SidebarDrawer = Template.bind();
  
  SidebarDrawer.args = {
      /* 👇 The args you need here will depend on your component */
      content: [
        {
          groupName: "Main",
          items: [
            {
              label: "Dahboard",
              url: "/",
              icon: AcademicCapIcon,
            },
            {
              label: "Auth",
              url: "/users",
              icon: ShieldCheckIcon,
            },
          ],
        },
        {
          groupName: "Death Reporting",
          items: [
            {
              label: "Search",
              url: "/deathreporting",
              icon: MagnifyingGlassIcon,
            },
            {
              label: "Unverified",
              url: "/deathreporting/unverified",
              icon: DocumentIcon,
            },
            {
              label: "Unauthorized",
              url: "/deathreporting/unauthorized",
              icon: ShieldExclamationIcon,
            },
            {
              label: "Report a Death",
              url: "/deathreporting/create",
              icon: DocumentPlusIcon,
            },
            {
              label: "Update",
              url: "/deathreporting/update",
              icon: PencilSquareIcon,
            },
          ],
        },
        {
          groupName: "Investment Maturity",
          items: [
            {
              label: "All Investments",
              url: "/investments/list",
              icon: WalletIcon,
            },
            {
              label: "Notification History",
              url: "/investments/history",
              icon: BellIcon,
            },
          ],
        },
      ]
  };