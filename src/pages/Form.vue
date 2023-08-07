<template>
	<PoPageTitle label="Form Inputs" />
	<div class="po-space-y-5">
		<div>
			<PoCard class="po-p-5" title="PoInputField">
				<template v-slot:content>
					<div
						class="po-pt-5 po-grid po-grid-cols-1 lg:po-grid-cols-3 po-gap-5"
					>
						<div>
							<PoInputField
								label="Input Field Label"
								id="form-inputfieldNormal"
								v-model="form.inputfieldNormal"
							/>

							<DataPreview>
								v-model: {{ form.inputfieldNormal }}<br />
							</DataPreview>
						</div>

						<div>
							<PoInputField
								label="Currency Input"
								type="currency"
								required
								id="form-inputfieldCurrency"
								v-model="form.inputfieldCurrency"
							/>

							<DataPreview>
								v-model: {{ form.inputfieldCurrency }}<br />
							</DataPreview>
						</div>

						<div>
							<PoInputField
								label="Error State"
								type="text"
								id="form-inputfieldError"
								error-message="Phone number is required"
							/>
						</div>

						<div>
							<PoInputField
								label="Input with info"
								type="text"
								id="form-inputfieldInfo"
								info="National ID card no."
							/>
						</div>

						<div>
							<PoInputField
								label="Input with placeholder"
								type="email"
								id="form-inputfieldPlaceholder"
								placeholder="doe@example.com"
							/>
						</div>

						<div>
							<PoInputField
								label="Disabled"
								type="password"
								id="form-inputfieldDisabled"
								disabled
							/>
						</div>

						<div>
							<PoInputField
								label="Input with message"
								type="text"
								id="form-inputfieldMessage"
								message="Name of the house, street, village"
							/>
						</div>

						<div>
							<label
								for="normal-html-input"
								class="po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700"
								>Normal HTML Input</label
							>
							<input
								type="text"
								class="po-mt-1 peer po-block po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white focus:po-ring-0 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default po-border-slate-300 focus:po-border-mpao-lightblue"
								name=""
								placeholder="Two way binding text with normal input"
								v-model="form.inputfieldNormal"
								id="normal-html-input"
							/>
						</div>

						<div>
							<PoInputField
								:required="true"
								label="Has Debounce"
								placeholder="Type anything"
								id="input-with-debounce"
								type="text"
								@input="handleInputText($event.target.value)"
							/>
							<DataPreview>
								Debounce time: 500ms<br />
								Debounced Val: {{ inputDebouncedValue }}
							</DataPreview>
						</div>

						<div class="lg:po-col-span-3 po-divide-y po-divide-slate-200">
							<div class="po-pb-2">
								<PoInputField
									label="Input horizontal"
									type="text"
									id="form-inputfieldHorizontal"
									display="horizontal"
								/>
							</div>
							<div class="po-pt-1 po-pb-2">
								<PoInputField
									label="Another horizontal"
									type="text"
									id="form-inputfieldHorizontal2"
									display="horizontal"
								/>
							</div>
							<div class="po-pt-1">
								<PoInputField
									label="One more"
									type="text"
									id="form-inputfieldHorizontal3"
									display="horizontal"
								/>
							</div>
						</div>
					</div>
				</template>
			</PoCard>
		</div>
		<div>
			<PoCard class="po-p-5" title="PoSelectField">
				<template v-slot:content>
					<div
						class="po-pt-5 po-grid po-grid-cols-1 lg:po-grid-cols-3 po-gap-5"
					>
						<div>
							<PoSelectField
								label="Select Field Label"
								:list="selectFieldList"
								@selected="
									(val:any) => {
										form.selectfieldNormalSelected = val;
									}
								"
								v-model="form.selectfieldNormal"
							/>
							<DataPreview>
								v-model: {{ form.selectfieldNormal }}<br />
								@selected: {{ form.selectfieldNormalSelected }}
							</DataPreview>
						</div>
						<div>
							<PoSelectField
								label="Select with subtitle"
								:list="selectFieldListSubtitles"
								@selected="
									(val:any) => {
										form.selectfieldSubtitleSelected = val;
									}
								"
								v-model="form.selectfieldSubtitle"
							/>
							<DataPreview>
								v-model: {{ form.selectfieldSubtitle }}<br />
								@selected: {{ form.selectfieldSubtitleSelected }}
							</DataPreview>
						</div>

						<div>
							<PoSelectField
								label="Select Object"
								object
								:list="selectFieldList"
								@selected="
									(val:any) => {
										form.selectfieldObjectSelected = val;
									}
								"
								v-model="form.selectfieldObject"
							/>
							<DataPreview>
								prop: object=true <br />

								v-model:
								<pre v-if="form.selectfieldObject">{{
									form.selectfieldObject
								}}</pre>
								<br />
								@selected:
								<pre v-if="form.selectfieldObjectSelected">{{
									form.selectfieldObjectSelected
								}}</pre>
							</DataPreview>
						</div>
						<div>
							<PoSelectField
								label="Select large list"
								:list="islands"
								dynamicScroll
								@selected="
									(val:any) => {
										form.selectfieldLargeSelected = val;
									}
								"
								v-model="form.selectfieldLarge"
							/>
							<DataPreview>
								No. of Items: {{ islands.length }}<br />
								v-model: {{ form.selectfieldLarge }}<br />
								@selected: {{ form.selectfieldLargeSelected }}
							</DataPreview>
						</div>

						<div>
							<PoSelectField
								label="Data after pageload"
								:list="selectFieldListDelay"
								@selected="
									(val:any) => {
										form.selectfieldDelaySelected = val;
									}
								"
								v-model="form.selectfieldDelay"
							/>
							<DataPreview>
								Data loaded:
								<span v-if="selectFieldListDelay.length > 0">loaded</span
								><span v-else class="po-animate-pulse">loading</span> <br />
								v-model: {{ form.selectfieldDelay }}<br />
								@selected: {{ form.selectfieldDelaySelected }}
							</DataPreview>
						</div>
						<div>
							<PoSelectField
								label="Data change"
								:list="selectFieldListChange"
								@selected="
									(val:any) => {
										form.selectfieldChangeSelected = val;
									}
								"
								v-model="form.selectfieldChange"
							/>
							<DataPreview>
								Data loaded:
								<span v-if="selectFieldListDelay.length > 0">changed</span
								><span v-else class="po-animate-pulse">changing</span> <br />
								v-model: {{ form.selectfieldChange }}<br />
								@selected: {{ form.selectfieldChangeSelected }}
							</DataPreview>
						</div>

						<div>
							<PoSelectField
								label="Select val change"
								:list="selectFieldList"
								@selected="
									(val:any) => {
										form.selectfieldValueChangeSelected = val;
									}
								"
								v-model="form.selectfieldValueChange"
							/>
							<DataPreview>
								Selected value:
								<span v-if="selectFieldListDelay.length > 0">changed</span
								><span v-else class="po-animate-pulse">changing</span> <br />
								v-model: {{ form.selectfieldValueChange }}<br />
								@selected: {{ form.selectfieldValueChangeSelected }}
							</DataPreview>
						</div>
					</div>
				</template>
			</PoCard>
		</div>
		<div>
			<PoCard class="po-p-5" title="PoMultiSelect, PoSelectApi">
				<template v-slot:content>
					<div
						class="po-pt-5 po-grid po-grid-cols-1 lg:po-grid-cols-2 po-gap-5"
					>
						<div>
							<PoSelectApi
								label="Select API"
								@search="handleSelectApiSearch"
								@loadmore="handleSelectApiMoreClick"
								@selected="handleSelectApiClick"
								:options="selectApiOptions"
								:loading="selectApiLoading"
								:show-more-btn="true"
								empty-message="Search for something"
							>
								<template #selectedOption="selectedOption">
									<div
										class="po-flex po-space-x-2 po-items-center po-cursor-pointer po-px-2"
									>
										<img
											:src="selectedOption.owner.avatar_url"
											class="po-w-5 po-rounded-full"
										/>
										<span
											class="po-text-sm po-text-slate-600 po-font-semibold"
											>{{ selectedOption.full_name }}</span
										>
									</div>
								</template>
								<template #option="option">
									<div
										class="po-flex po-space-x-2 po-items-center po-cursor-pointer hover:po-bg-mpao-lightblue po-group po-px-2 po-py-1"
										@click="
											handleSelectApiParentOptionClick(option.owner.avatar_url)
										"
									>
										<img :src="option.owner.avatar_url" class="po-w-10" />
										<span
											class="po-text-sm po-text-slate-600 po-font-semibold group-hover:po-text-white"
											>{{ option.full_name }}</span
										>
									</div>
								</template>
							</PoSelectApi>

							<DataPreview>
								@selected: {{ selectClickedComponentItem }}<br />
								item click parent slot: {{ selectClickedParentItem }}<br />
								@loadmore: {{ selectApiMoreClicked }} x clicked<br />
							</DataPreview>
						</div>
						<div>
							<PoMultiSelect
								label="Mutiselect"
								:items="multiselectItems"
								v-model="form.multiSelect"
							/>

							<DataPreview> v-model: {{ form.multiSelect }}<br /> </DataPreview>
						</div>
					</div>
				</template>
			</PoCard>
		</div>
		<div class="po-grid po-grid-cols-1 md:po-grid-cols-2 po-gap-5">
			<div>
				<PoCard class="po-p-5" title="PoCheckbox">
					<template v-slot:content>
						<div class="po-pt-5 po-space-y-5">
							<PoCheckbox
								v-model="form.checkboxNormal"
								label="Checkbox Label"
								id="checkbox-normal"
								message="A short descriptive message"
							/>

							<DataPreview>
								v-model: {{ form.checkboxNormal }}<br />
							</DataPreview>

							<PoCheckbox
								v-model="form.checkboxDisabled"
								label="Disabled Checkbox"
								id="checkbox-disabled"
								:disabled="true"
							/>
							<PoCheckbox
								v-model="form.checkboxError"
								label="Error State"
								id="checkbox-error"
								error-message="Unable to comply, building in progress."
							/>
						</div>
					</template>
				</PoCard>
			</div>
			<div>
				<PoCard class="po-p-5" title="PoRadioInput, PoToggle">
					<template v-slot:content>
						<div class="po-pt-5 po-space-y-5">
							<PoRadioInput
								:options="radioOptions"
								v-model="form.radioInputNormal"
							/>

							<DataPreview>
								v-model: {{ form.radioInputNormal }}<br />
							</DataPreview>

							<PoToggle label="Toggle me" v-model="form.toggleInputNormal" />

							<DataPreview>
								v-model: {{ form.toggleInputNormal }}<br />
							</DataPreview>
						</div>
					</template>
				</PoCard>
			</div>
			<div>
				<PoCard class="po-p-5" title="PoUpload">
					<template v-slot:content>
						<div class="po-pt-5 po-space-y-5">
							<PoUpload
								label="Upload files"
								token="tooooken"
								url="https://api-url"
							/>
						</div>
					</template>
				</PoCard>
			</div>
			<div>
				<PoCard class="po-p-5" title="PoMonthYearPicker">
					<template v-slot:content>
						<div class="po-pt-5 po-space-y-5">
							<PoMonthYearPicker
								label="Pick month"
								minDate="27-04-2022"
								maxDate="10-05-2025"
								v-model="form.monthyear"
							/>
						</div>
					</template>
				</PoCard>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
	PoPageTitle,
	PoCard,
	PoCheckbox,
	PoInputField,
	PoSelectField,
	PoSelectApi,
	PoMultiSelect,
	PoRadioInput,
	PoToggle,
	PoUpload,
	PoMonthYearPicker,
} from "../components";
import debounce from "../shared/helper/Debounce";
import DataPreview from "./dataPreview.vue";

import islands from "./islandsList.js";

const form = ref({
	inputfieldNormal: "",
	inputfieldCurrency: 0,
	selectfieldNormal: null,
	selectfieldNormalSelected: null,
	selectfieldSubtitle: null,
	selectfieldSubtitleSelected: null,
	selectfieldObject: null,
	selectfieldObjectSelected: null,
	selectfieldLarge: null,
	selectfieldLargeSelected: null,
	selectfieldDelay: null,
	selectfieldDelaySelected: null,
	selectfieldChange: null,
	selectfieldChangeSelected: null,
	selectfieldValueChange: 1,
	selectfieldValueChangeSelected: null,
	checkboxNormal: false,
	checkboxDisabled: false,
	checkboxError: false,
	multiSelect: [],
	radioInputNormal: 1,
	toggleInputNormal: false,
	monthyear: "05-2023",
});

const selectFieldList = [
	{ id: 1, name: "Koshaaru" },
	{ id: 2, name: "HelpDesk" },
	{ id: 3, name: "Another" },
];
const selectFieldListSubtitles = ref([
	{ id: 1, name: "Sub category name", subtitle: "Category" },
	{ id: 2, name: "Running around in circles", subtitle: "Activity" },
	{ id: 3, name: "Something drinkable", subtitle: "Water" },
]);

const selectFieldListDelay = ref<object[]>([]);
const selectFieldListChange = ref([
	{ id: 1, name: "Koshaaru" },
	{ id: 2, name: "HelpDesk" },
	{ id: 3, name: "Another" },
]);

setTimeout(() => {
	selectFieldListDelay.value = [
		{ id: 1, name: "Koshaaru" },
		{ id: 2, name: "HelpDesk" },
		{ id: 3, name: "Another" },
	];
	selectFieldListChange.value = [
		{ id: 4, name: "New Koshaaru" },
		{ id: 5, name: "New HelpDesk" },
		{ id: 6, name: "New Another" },
	];

	form.value.selectfieldValueChange = 2;
}, 12000);

const selectApiOptions = ref([]);
const selectApiLoading = ref(false);

const handleSelectApiSearch = debounce((query) => {
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

const selectApiMoreClicked = ref(0);
const selectClickedComponentItem = ref(null);
const selectClickedParentItem = ref(null);

function handleSelectApiMoreClick() {
	selectApiMoreClicked.value = selectApiMoreClicked.value + 1;
}
function handleSelectApiClick(val: any) {
	selectClickedComponentItem.value = val.owner;
}
function handleSelectApiParentOptionClick(val: any) {
	selectClickedParentItem.value = val;
}

const multiselectItems = [
	{
		id: 1,
		name: "One",
	},
	{
		id: 2,
		name: "Two",
	},
	{
		id: 3,
		name: "Three",
	},
	{
		id: 4,
		name: "Four",
	},
];

const radioOptions = [
	{
		id: 1,
		title: "Option one",
	},
	{
		id: 2,
		title: "Option two",
	},
];

const inputDebouncedValue = ref();
const handleInputText = debounce((val: any) => {
	console.log("deb", val);
	inputDebouncedValue.value = val;
}, 500);
</script>
