// YourComponent.stories.js

import PoChatLogItem from './PoChatLogItem.vue';

import PoChatLogItemDocs from './PoChatLogItemDocs.stories.mdx';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Components/Chat Log Item',
  component: PoChatLogItem,
  parameters: {
    docs: {
      page: PoChatLogItemDocs,
      description: {
        component: 'Chat log items component is used to display chat logs'
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
  components: { PoChatLogItem },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<PoChatLogItem v-bind="args" />',
});

export const ChatLogItemFirst = Template.bind({});
export const ChatLogItemSecond = Template.bind({});
export const ChatLogItemMultipleMessages = Template.bind({});

ChatLogItemFirst.args = {
  /* 👇 The args you need here will depend on your component */
  item: {
    type: 'first',
    name: 'You',
    avatar: '',
    time: '2022-01-25 01:10:00',
    time_human: '1 hour ago',
    message: [
        "Where do I start?\n Can you explain to me how to?"
    ]
    }
};
ChatLogItemSecond.args = {
  /* 👇 The args you need here will depend on your component */
  item: {
    type: 'second',
    name: 'Sia Thakuru',
    avatar: '',
    time: '2022-01-25 01:02:03',
    time_human: '30 mins ago',
    message: [
        'Let me transfer you to someone who can explain'
    ]
    }
};
ChatLogItemMultipleMessages.args = {
  /* 👇 The args you need here will depend on your component */
  item: {
    type: 'second',
    name: 'Sia Thakuru',
    avatar: '',
    time: '2022-01-25 01:02:03',
    time_human: 'A few seconds ago',
    message: [
        'Hello',
        'What was it you wanted to know?',
    ]
    }
};
