// YourComponent.stories.js

import PoSlideover from "./PoSlideover.vue";
import PoSlideoverDocs from "./PoSlideoverDocs.mdx";

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Components/Slideover",
	component: PoSlideover,
	parameters: {
		docs: {
			page: PoSlideoverDocs,
			description: {
				component: "Slideover component.",
			},
		},
		backgrounds: {
			default: "gray",
			values: [{ name: "gray", value: "#f8fafc" }],
		},
	},
};

import { ref } from "vue";
import PoButton from "../PoButton/PoButton.vue";
//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
	components: { PoSlideover, PoButton },
	setup() {
		//👇 The args will now be passed down to the template
		const showNoteSlideover = ref(true);
		return { args, showNoteSlideover };
	},
	template: `
              <PoSlideover
                :show="showNoteSlideover"
                @slideover-closed="() => (showNoteSlideover = false)"
                label="Note"
                description="Description goes here"
              ><template v-slot:content> I'm a slideover </template>
		</PoSlideover><PoButton
								@click="showNoteSlideover = true"
								label="Open Slideovers"
							/>
              `,
});

export const Slideover = Template.bind();

Slideover.args = {};
