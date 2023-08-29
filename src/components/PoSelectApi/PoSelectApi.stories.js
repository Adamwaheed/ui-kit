// YourComponent.stories.js

import PoSelectApi from "./PoSelectApi.vue";

import PoSelectApiDocs from "./PoSelectApiDocs.mdx";

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: "Form/Select Api",
	component: PoSelectApi,
	parameters: {
		docs: {
			page: PoSelectApiDocs,
			description: {
				component: "Select/Search from API and display in a drop-down.",
			},
		},
		backgrounds: {
			default: "gray",
			values: [{ name: "gray", value: "#f8fafc" }],
		},
	},
};

import { ref } from "vue";
import { debounce } from "../../shared/helper";
//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
	components: { PoSelectApi },
	setup() {
		//👇 The args will now be passed down to the template

		const selectApiOptions = ref([]);
		const selectApiLoading = ref(false);
		let clickFromComponent = ref();
		let clickFromParent = ref();
		let clearSelected = ref();

		const handleSelectApiSearch = debounce((query) => {
			console.log("searching", query, query.length);
			if (query.length > 3) {
				selectApiLoading.value = true;
				fetch(`https://api.github.com/search/repositories?q=${query}`).then(
					(res) => {
						res.json().then((json) => (selectApiOptions.value = json.items));
						selectApiLoading.value = false;
					}
				);
			}
		}, 500);

		function handleSelectApiMoreClick() {
			console.log("select api more click");
		}
		function handleSelectApiClick(obj) {
			clickFromComponent.value = obj;
		}
		function handleSelectApiClickTwo(val) {
			clickFromParent.value = val;
		}
		function handleSelectedOnClear(aa) {
			clearSelected.value = aa;
		}
		return {
			args,
			selectApiOptions,
			selectApiLoading,
			clickFromComponent,
			clickFromParent,
			handleSelectApiSearch,
			clearSelected,
			handleSelectApiMoreClick,
			handleSelectApiClick,
			handleSelectApiClickTwo,
			handleSelectedOnClear,
		};
	},
	template:
		'<PoSelectApi label="Search Github API" v-bind="args" @search="handleSelectApiSearch" @loadmore="handleSelectApiMoreClick" @selected="handleSelectApiClick" @onClear="handleSelectedOnClear" :options="selectApiOptions" :loading="selectApiLoading" :show-more-btn="true" > <template #selectedOption="selectedOption"> <div class="po-flex po-space-x-2 po-items-center po-cursor-pointer po-px-2" > <img :src="selectedOption.owner.avatar_url" class="po-w-5 po-rounded-full" /> <span class="po-text-sm po-text-slate-600 po-font-semibold">{{ selectedOption.full_name }}</span> </div> </template> <template #option="option"> <div class="po-flex po-space-x-2 po-items-center po-cursor-pointer hover:po-bg-mpao-lightblue po-group po-px-2 po-py-1" @click="handleSelectApiClickTwo(option.owner.id)" > <img :src="option.owner.avatar_url" class="po-w-10" /> <span class="po-text-sm po-text-slate-600 po-font-semibold group-hover:po-text-white" >{{ option.full_name }}</span > </div> </template> </PoSelectApi><br /><br /><br/><span v-if="clickFromParent" class="po-text-sm po-text-slate-500">Click event response from parent: {{  clickFromParent }}</span><br /><br/><span v-if="clickFromComponent" class="po-text-sm po-text-slate-500">Click event response from component:<br><textarea rows="6" class="po-w-full po-border-none po-bg-slate-50">{{ clickFromComponent }}</textarea></span><br /><br /><span class="po-text-sm po-text-slate-500">Cleared: {{clearSelected}}</span>',
});

export const SelectField = Template.bind({});

SelectField.args = {
	/* 👇 The args you need here will depend on your component */
};
