// YourComponent.stories.js

import PoTopBar from '../PoTopBar/PoTopBar.vue';

import { BugAntIcon } from '@heroicons/vue/24/solid';

import PoTopBarDocs from './PoTopBarDocs.stories.mdx';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Shell/Top Bar',
  component: PoTopBar,
  parameters: {
    docs: {
      page: PoTopBarDocs,
      description: {
        component: 'Top Bar component'
      }
    },
    backgrounds: {
      default: 'white',
      values: [
        { name: 'white', value: '#fff' },
      ],
    },
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
  components: { PoTopBar },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<div class="po-min-h-full"><PoTopBar class="po-relative" v-bind="args" /></div>',
});

export const TopBar = Template.bind({});

TopBar.args = {
  /* 👇 The args you need here will depend on your component */
  hasSearch: true,
  appList: [
    {
      groupName: "",
      apps: [
        {
          name: "First",
          url: "https://firstapp.example.com",
          icon: "https://doodleipsum.com/50x50/abstract?bg=3D27F6&i=cb0515299c600124805d923f3619c1ad",
        },
        {
          name: "Cool",
          url: "https://coolapp.example.com",
          icon: "https://doodleipsum.com/50x50/abstract?bg=EB765D&i=e2dedc7bc9f1a630e177355aa7b1a6c9",
        },
        {
          name: "Coolest",
          url: "https://coolapp.example.com",
          icon: "https://doodleipsum.com/50x50/abstract?bg=7463D9&i=d298131eb7322b7002e6fd50e9dd8c41",
        },
        {
          name: "Another",
          url: "https://coolapp.example.com",
          icon: "https://doodleipsum.com/50x50/abstract?bg=FF3C3C&i=5ef96019d86f8e5221c37d9733cb5492",
        },
      ],
    },
  ],
  notifications: [
    {
      name: "You are no subscribed",
      time: "now",
      text: "You have subscribed to DMS notifications for Ali Doe",
      seen: false,
    },
    {
      name: "Contribution added",
      time: "5 mins ago",
      text: "Your contribution for the month of January was added sucessfully",
      seen: true,
    },
  ],
  profileSwitcherData: {
    currProfileLabel: "HA",
    profiles: [
      {
        name: "Self",
        identifier: "",
        url: "#self",
        current: true,
        isPersonal: true,
      },
      {
        name: "Penshion Office",
        identifier: "202301052023",
        url: "#business",
        current: false,
        isPersonal: false,
      },
      {
        name: "ABC Enterprises Pvt Ltd",
        identifier: "202301052026",
        url: "#business",
        current: false,
        isPersonal: false,
      },
    ],
  },
  appName: "Stories",
  appIcon: BugAntIcon
};
