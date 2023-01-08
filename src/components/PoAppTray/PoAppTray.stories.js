// YourComponent.stories.js

import PoAppTray from './PoAppTray.vue';

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
};