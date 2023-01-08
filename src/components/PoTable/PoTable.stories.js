// YourComponent.stories.js

import PoTable from './PoTable.vue';
import PoCard from '../PoCard/PoCard.vue';

//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Components/Table',
  component: PoTable,
  parameters: {
    docs: {
      description: {
          component: 'Resposive table component.'
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
  components: { PoTable, PoCard },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  template: '<PoCard class="mt-5"> <template v-slot:content> <PoTable v-bind="args"> <template #th="{ label }"> {{ label }} </template> <template #td="{ name, nid, source, dod }"> <td data-title="name">{{ name }}</td> <td data-title="NID">{{ nid }}</td> <td data-title="source">{{ source }}</td> <td data-title="dod">{{ dod }}</td> </template> </PoTable> </template> </PoCard>',
});

export const WithContent = Template.bind();
export const Empty = Template.bind();

WithContent.args = {
    /* 👇 The args you need here will depend on your component */
    thead : [
        { label: 'Name' },
        { label: 'NID' },
        { label: 'Source' },
        { label: 'DOD' },
    ],

    tbody : [
        { name: 'Jane Gasim', nid: 'A00000', source: 'YY Clinic', dod: '2022-11-12' },
        { name: 'Mariyam Doe', nid: 'A00000', source: 'Rashu Council', dod: '2022-11-02' },
    ]
  };
  Empty.args = {
    /* 👇 The args you need here will depend on your component */
    thead : [
        { label: 'Name' },
        { label: 'NID' },
        { label: 'Source' },
        { label: 'DOD' },
    ],

    tbody : [
    ]
  };