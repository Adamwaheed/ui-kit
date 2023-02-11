// YourComponent.stories.js

import PoSlideover from './PoSlideover.vue';
// import PoSlideoverDocs from './PoSlideoverDocs.stories.mdx';


//👇 This default export determines where your story goes in the story list
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Components/Slideover',
  component: PoSlideover,
  parameters: {
    docs: {
    //   page: PoSlideoverDocs,
      description: {
          component: 'Slideover component.'
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
    components: { PoSlideover },
    setup() {
      //👇 The args will now be passed down to the template
      return { args };
    },
    template: '<PoSlideover v-bind="args"><template v-slot:content>o...asdsd</template></PoSlideover>',
  });
  
  export const Slideover = Template.bind();
  
  Slideover.args = {
    show: false,
    label: 'Slideover',
    description: 'This is a description'
  };