<template>
	<!-- Full screen loading -->
	<div
		v-if="false"
		class="po-fixed po-top-0 po-right-0 po-bottom-0 po-left-0 po-bg-white po-z-[9999] po-flex po-items-center po-justify-center"
	>
		<PoLoading :show="true" />
	</div>
	<!-- Full screen loading -->
	<div class="po-min-h-full po-pt-16">
		<PoTopBar
			:has-search="true"
			:app-list="appsFromApi"
			:user-object="currUserObject"
			:notifications="notifications"
			@profile-switcher-click="newHandleProfileSwitcherClick"
			app-name="Pension UI Kit"
			@query="NewSearch"
			:current-query="currQuery"
			@onSearchClear="onSearchClear"
		>
			<!-- 
        @slot appIcon takes the SVG img icon of the app
       -->
			<template v-slot:appIcon>
				<svg
					class="po-fill-current"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
				>
					<path
						fill="#52ed9a"
						d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 01.878.645 49.17 49.17 0 01.376 5.452.657.657 0 01-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 00-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 01-.595 4.845.75.75 0 01-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 01-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 01-.658.643 49.118 49.118 0 01-4.708-.36.75.75 0 01-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 005.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 00.659-.663 47.703 47.703 0 00-.31-4.82.75.75 0 01.83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 00.657-.642z"
					/>
				</svg>
			</template>
		</PoTopBar>
	</div>
	<PoLoading :show="false" label="" />
	<PoAlert
		:show="showAlert"
		@alert-closed="() => (showAlert = false)"
		alert-description="This is an alert! I repeat, this is an alert."
		@button-click="handleAlertOkClick"
	/>
	<PoCommandPalette />
	<div class="po-h-full po-max-w-full">
		<PoSidebarDrawer
			:content="sidebarContent"
			@button-click="handleSidebarButtonClick"
			:has-feedback="true"
			:apps="appsFromApi"
			app-code="auth"
		/>
		<main class="shell-content" id="shell-content-root">
			<!-- <PoActionBar
				:items="actionBarItems"
				:show-back-button="true"
				@button-click="handleActionBarClick"
				/> -->
			<PoContentArea>
				<component :is="currentView" />
				<PoStatsBlock :items="statsBlockItems" />
				<PoFormStatusMessage
					message="Thank you! The record has been created successfully!"
				/>
				<PoFormStatusMessage
					:is-error="true"
					message="Could not complete your request."
					:error-list="['NID no is required', 'Date of birth is required']"
				/>
				<PoPageTitle class="po-mt-5" label="Page title" />
				<PoCard class="po-mt-5 po-p-5" title="Hello">
					<template v-slot:action><PoButton label="Create" /></template>
					<template v-slot:content>
						Searching {{ searchQuery }}<br />
						<div class="po-flex po-space-x-3 po-mt-3">
							<PoModal open-btn-label="Open Modal">
								<template v-slot:content> content </template>
							</PoModal>

							<PoButton @click="openAlertClick" label="Open Alert" />
							<PoButton
								@click="openModalClick"
								label="Open Modal Custom Button"
							/>
							<PoModal
								:show="openModal"
								@modal-closed="openModal = false"
								modal-title="Email"
								id="investment-notification-status"
							>
								<template v-slot:content>
									<div class="p-5">
										<br />
										<PoSelectField
											label="Select field with two labels"
											:list="selectFieldListTwo"
											@selected="handleSelectFieldTwoClick"
											v-model="selectFieldTwoSelected"
										/>
									</div>
								</template>
								<template v-slot:footer>
									<div class="po-p-5">
										<PoButton action-type="ghost" label="Cancel" />
									</div>
								</template>
							</PoModal>
							<PoButton
								@click="showNoteSlideover = true"
								label="Open Slideover"
							/>
						</div>

						<br />
						<PoToggle
							label="Toggle me"
							v-model="toggleState"
							:required="true"
						/>
						{{ toggleState }}
						<br />
						<PoCheckbox
							v-model="checkboxState"
							label="Check me"
							:required="true"
							id="checkbox-one"
							message="if you can"
						/>
						{{ checkboxState }}
						<br />
						<div class="po-mt-5 po-grid po-grid-cols-2 po-gap-5">
							<PoInputField
								:required="true"
								label="Input"
								placeholder="I have debounce"
								id="input-idssss"
								type="text"
								@input="handleInputText"
							/>
							<PoMultiSelect
								label="Mutiselect"
								:items="multiselectItems"
								v-model="selectedmultiselectItems"
							/>
							{{ selectedmultiselectItems }}
							<PoRadioInput
								label="Radios"
								:required="true"
								:options="radioOptions"
								v-model="radioOptionSelected"
								error-message=""
								@selected="handleRadioSelected"
							/>
							{{ radioOptionSelected }}
						</div>
						<br />
						<hr />
						<br />
						<PoSelectField
							label="Select Island"
							:list="islands"
							@selected="handleSelectFieldIslandClick"
							v-model="selectIslandSelected"
						/>
						<br />
						<hr />
						<br />

						<!-- ****************************************************************************************** -->
						<!-- NEW COMPONENT ---------------------------------------------------------------------------- -->
						<!-- ****************************************************************************************** -->

						<PoSelectApi
							label="Search from Github API"
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
									<span class="po-text-sm po-text-slate-600 po-font-semibold">{{
										selectedOption.full_name
									}}</span>
								</div>
							</template>
							<template #option="option">
								<div
									class="po-flex po-space-x-2 po-items-center po-cursor-pointer hover:po-bg-mpao-lightblue po-group po-px-2 po-py-1"
									@click="handleSelectApiClickTwo(option.owner.avatar_url)"
								>
									<img :src="option.owner.avatar_url" class="po-w-10" />
									<span
										class="po-text-sm po-text-slate-600 po-font-semibold group-hover:po-text-white"
										>{{ option.full_name }}</span
									>
								</div>
							</template>
						</PoSelectApi>

						<!-- ****************************************************************************************** -->
						<!-- NEW COMPONENT ---------------------------------------------------------------------------- -->
						<!-- ****************************************************************************************** -->
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
						<br />
					</template>
				</PoCard>
				<PoPageTitle
					label="Another title"
					description="This is a page description that explains how it works. Every element in the page. And a little more."
				/>
				<PoCard class="po-mt-5">
					<template v-slot:content>
						<PoTable
							:thead="tableHead"
							:tbody="tableBody"
							:break-at-lg="true"
							:is-loading="true"
						>
							<template #th="{ label }">
								{{ label }}
							</template>
							<template #td="{ index, name, nid, source, dod, action, item }">
								<td data-title="name">
									{{ name }}
								</td>
								<td data-title="NID">{{ nid }}</td>
								<td data-title="source">{{ source }}</td>
								<td data-title="dod">{{ formatDate(dod) }}</td>
								<td data-title="action">
									<div
										class="po-flex po-items-center po-space-x-3 po-justify-end"
										v-if="action === 'text'"
									>
										<PoTableAction label="Edit" text-color="po-text-sky-600" />
										<PoTableAction
											label="Delete"
											text-color="po-text-red-600"
										/>
										<PoTableAction label="View" text-color="po-text-sky-600" />
									</div>
									<div
										class="po-flex po-items-center po-space-x-3 po-justify-end"
										v-if="action === 'icon'"
									>
										<PoTableAction btn-type="edit" />
										<PoTableAction btn-type="delete" />
										<PoTableAction btn-type="view" />
									</div>
									<div
										class="po-flex po-items-center po-space-x-3 po-justify-end"
										v-if="action === 'both'"
									>
										<PoTableAction
											label="Approve"
											text-color="po-text-sky-600"
										/>
										<PoTableAction
											label="Reject"
											text-color="po-text-red-600"
										/>
										<PoTableAction btn-type="edit" />
										<PoTableAction btn-type="view" />
									</div>
								</td>
							</template>
						</PoTable>
					</template>
				</PoCard>
				<PoCard class="po-mt-5">
					<template v-slot:content>
						<PoCardTabs :tabs="tabs" />
						<PoTable :thead="tableHead" :tbody="tableBody" :break-at-lg="true">
							<template #th="{ label }">
								{{ label }}
							</template>
							<template #td="{ index, name, nid, source, dod, action, item }">
								<td data-title="name">
									{{ name }}
								</td>
								<td data-title="NID">{{ nid }}</td>
								<td data-title="source">{{ source }}</td>
								<td data-title="dod">{{ formatDate(dod) }}</td>
								<td data-title="action">
									<div
										class="po-flex po-items-center po-space-x-3 po-justify-end"
										v-if="action === 'text'"
									>
										<PoTableAction label="Edit" text-color="po-text-sky-600" />
										<PoTableAction
											label="Delete"
											text-color="po-text-red-600"
										/>
										<PoTableAction label="View" text-color="po-text-sky-600" />
									</div>
									<div
										class="po-flex po-items-center po-space-x-3 po-justify-end"
										v-if="action === 'icon'"
									>
										<PoTableAction btn-type="edit" />
										<PoTableAction btn-type="delete" />
										<PoTableAction btn-type="view" />
									</div>
									<div
										class="po-flex po-items-center po-space-x-3 po-justify-end"
										v-if="action === 'both'"
									>
										<PoTableAction
											label="Approve"
											text-color="po-text-sky-600"
										/>
										<PoTableAction
											label="Reject"
											text-color="po-text-red-600"
										/>
										<PoTableAction btn-type="edit" />
										<PoTableAction btn-type="view" />
									</div>
								</td>
							</template>
						</PoTable>
						<div class="po-p-5">
							<PoPagination
								:pagination="pagination"
								@button-click="handlePaginationClick"
							/>
						</div>
					</template>
				</PoCard>
				<PoTabs :tabs="tabs" />
				<PoCard
					class="po-mt-5 po-p-5"
					title="Description list"
					:is-loading="true"
				>
					<template v-slot:content>
						<br />
						<PoDescriptionList :items="descriptionListItems" />
						<span
							class="po-text-sm po-text-slate-600 po-block po-my-10 po-font-bold"
							>Striped</span
						>
						<PoDescriptionList
							:items="descriptionListItems"
							:striped="true"
							@button-click="handleDescriptionListActionClick"
						/>
						<span
							class="po-text-sm po-text-slate-600 po-block po-my-10 po-font-bold"
							>Slot</span
						>
						<PoDescriptionList>
							<template v-slot:content>
								<div>
									<dt>Title</dt>
									<dd>Description</dd>
								</div>
								<div>
									<dt>Title 2</dt>
									<dd>Description 2</dd>
								</div>
								<div>
									<dt>Title 3</dt>
									<dd>Description 3</dd>
								</div>
							</template>
						</PoDescriptionList>
					</template>
				</PoCard>
				<PoCard title="Dynamic Table" class="po-p-5">
					<template v-slot:content>
						<div class="-po-mx-5 po-mt-5">
							<PoDynamicTable
								class=""
								:data="dynamicTableData"
								:columns="dynamicTableCols"
							></PoDynamicTable>
						</div>
					</template>
				</PoCard>
				<div class="po-grid po-grid-cols-2 po-gap-5">
					<PoCard class="po-mt-5 po-p-5">
						<template v-slot:content>
							<div class="space-y-5">
								<PoInputField
									label="Input this is it"
									id="input-id"
									message="This is an input"
									info="A tooltip"
									error-message="Hello error"
									v-model="inputModel"
								/>
								<div
									class="po-bg-slate-50 po-rounded-md po-p-3 po-text-xs po-text-slate-500"
								>
									<input type="text" name="" id="" v-model="inputModel" />
									<br />
									Testing two way binding with a normal html input:
								</div>

								<p class="po-mt-2 po-text-sm po-text-slate-600">
									v-modal: {{ inputModel }}
								</p>

								<PoInputField
									label="Input Errors"
									id="input-id2"
									type="text"
									error-message=""
								/>
								<br />
								<PoInputFile label="File input" />
								<br />
								<PoTextarea label="Textarea" />
								<br />
								<PoMultiSelect label="Mutiselect" />
								<br />
								<PoInputField
									label="Currency Input"
									id="input-id-currr"
									type="currency"
									v-model="inputCurrencyModel"
								/>

								<p class="po-mt-2 po-text-sm po-text-slate-600">
									v-modal: {{ inputCurrencyModel }}
								</p>
							</div>
						</template>
					</PoCard>
					<PoCard>
						<template v-slot:content>
							<PoCardSearch
								placeholder="Search card.."
								v-model="searchQuery"
								@button-click="handleCardSearchBtnClick"
								show-btn
							/>
							<div class="po-mt-5 po-p-5">
								<PoSelectField
									label="Select field with two labels"
									:list="selectFieldListTwo"
									@selected="handleSelectFieldTwoClick"
									v-model="selectFieldTwoSelected"
									placeholder="Hello place"
								/>
								thisL:{{ selectFieldTwoSelected }}
								<div class="items-center space-x-5">
									<PoSelectField
										label="App names"
										@selected="handleSelectFieldClick"
										:list="selectFieldList"
										v-model="selectFieldSelected"
										error-message="This an error speaking"
									/>
									<br />
									Selected {{ selectFieldSelected }}
								</div>
								<div class="items-center space-x-5">
									<PoSelectField
										label="Select Object"
										object
										@selected="handleSelectFieldClick"
										:list="selectFieldListThree"
										v-model="selectFieldThreeSelected"
									/>
									<br />
									Selected {{ selectFieldThreeSelected }}
								</div>
								<PoLogs :items="logItems" />
								<PoDownloadFileList
									:files="downloadableFiles"
									@button-click="handleDownloadClick"
								/>
							</div>
						</template>
					</PoCard>
				</div>
				<PoCard class="po-mt-5 po-p-5">
					<template v-slot:content>
						<div class="lg:po-divide-y lg:po-divide-slate-200">
							<div class="po-pt-4 lg:po-py-5">
								<PoInputField label="Label" display="horizontal" type="text" />
							</div>
							<div class="po-pt-4 lg:po-py-5">
								<PoInputFile label="File input" display="horizontal" />
							</div>
							<div class="po-pt-4 lg:po-py-5">
								<PoTextarea label="Textarea" display="horizontal" />
							</div>
							<div class="po-pt-4 lg:po-py-5">
								<PoSelectField
									display="horizontal"
									label="Select"
									:list="selectFieldList"
									:pre-selected="selectFieldPreSelected"
								/>
							</div>
						</div>
					</template>
				</PoCard>
				<PoCard class="po-mt-5 po-p-5">
					<template v-slot:content>
						<PoDRStatus
							@dispute-click="handleDisputeClick"
							:member="{
								name: 'Mohamed Ashraf Majdhee',
								identifier: 'A166592',
								dob: '1989-09-07T00:00:00.000Z',
							}"
							:record="{
								id: 3,
								institution: 'Maldives Pension Administration Office',
								date_of_death: '2023-02-14T00:00:00.000Z',
							}"
						/>
					</template>
				</PoCard>
				<div class="po-grid po-grid-cols-2 po-gap-5">
					<div>
						<PoCard class="po-p-5">
							<template v-slot:content>
								<PoEmpty
									label="Nothing to show"
									description="No show for sho, Write a helpful message. Maybe suggest something to do when it's empty."
									:icon="BeakerIcon"
								/>
							</template>
						</PoCard>
					</div>
					<div>
						<PoCard class="po-p-5" title="Card">
							<template v-slot:content>
								<PoDescriptionList>
									<template v-slot:content>
										<div class="link">
											<dt>Title</dt>
											<dd>Description</dd>
										</div>
										<div>
											<dt>Title</dt>
											<dd>Descriptions</dd>
										</div>
										<div class="link">
											<dt>Title 3</dt>
											<dd>Description 3</dd>
										</div>
									</template>
								</PoDescriptionList>
							</template>
						</PoCard>
					</div>
				</div>
				<PoCard class="po-mt-5 po-p-5">
					<template v-slot:content>
						<div class="po-flex po-items-center po-space-x-5 po-flex-wrap">
							<PoButton :is-loading="true" type="button" label="Button" />
							<PoButton type="button" label="Button" />
							<PoButton type="submit" label="Submit" />
							<PoButton type="link" label="Link" to="/home" />
							<PoButton
								type="button"
								label="Button Disabled"
								:disabled="true"
							/>
							<PoButton
								type="submit"
								label="Submit Disabled"
								:disabled="true"
							/>
							<PoButton
								type="button"
								label="Button"
								:override-colors="true"
								size="sm"
								class="po-bg-cyan-600 hover:po-bg-cyan-700 po-text-white"
							/>
							<PoButton
								type="button"
								label="Button"
								:override-colors="true"
								size="lg"
								class="po-bg-rose-600 hover:po-bg-rose-700 po-text-white"
							/>
							<PoButton @click="handleDialClick" to="a">
								<template v-slot:label>
									<span class="po-flex po-items-center po-space-x-2">
										<PhoneIcon class="po-w-4 po-h-4 po-fill-current" />
										<span>Dial</span>
									</span>
								</template>
							</PoButton>
							<PoButton type="simple" label="I am a button" to="/home" />
							<PoButton
								type="simple"
								to="/home"
								@button-click="handleButtonClick"
							>
								<template v-slot:label>
									<span class="po-flex po-items-center po-space-x-1">
										<BoltIcon class="po-w-4 po-h-4 po-stroke-current" />
										<span>File a dispute.</span>
									</span>
								</template>
							</PoButton>
							<PoButton type="button" label="Danger" action-type="danger" />
							<PoButton type="button" label="Ghost" action-type="ghost" />
							<PoButton type="button" label="Success" action-type="success" />
						</div>
					</template>
				</PoCard>
				<PoCard>
					<template v-slot:content>
						<PoTimeline
							:timeline="locationHistory"
							:clickable="true"
							@button-click="handleTimelineClick"
						/>
					</template>
				</PoCard>
			</PoContentArea>

			<PoFooter :changelog="changeLog" />
		</main>
		<!-- <PoNotification
			label="Aishath Jackson replied..."
			text="I submited all that but still"
			button-label="Respond"
			:show="showNotificationOne"
			@button-click="handleNotificationClick('Chat')"
		/>
		<PoNotification
			label="Aishath Jackson replied..."
			text="I submited all that but still"
			button-label="Respond"
			:show="showNotificationOne"
			@button-click="handleNotificationClick('Chat')"
		/> -->
		<PoToast
			:show="showNotificationOne"
			message="Successfully Saved!"
			:hide-in="4000"
		/>
		<PoToast
			:show="showNotificationOne"
			action-type="success"
			:hide-in="4000"
		/>
		<PoToast
			:show="showNotificationOne"
			message="Deleted,  with a long message displayed to explain the situation"
			size="lg"
			action-type="danger"
			:hide-in="4000"
		/>
		<PoToast
			:show="showNotificationOne"
			action-type="warn"
			message="Warning,  with a long message displayed to explain the situation"
			size="xl"
			:hide-in="4000"
		/>
		<PoSlideover
			:show="showNoteSlideover"
			@slideover-closed="() => (showNoteSlideover = false)"
			label="Note"
			description="Description goes here"
		>
			<template v-slot:content> I'm a slideover </template>
		</PoSlideover>
	</div>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import {
	PoToast,
	PoTopBar,
	PoTimeline,
	PoNotification,
	PoSelectApi,
	PoSlideover,
	PoSidebarDrawer,
	PoActionBar,
	PoCard,
	PoCardSearch,
	PoPageTitle,
	PoTable,
	PoDescriptionList,
	PoInputField,
	PoButton,
	PoSelectField,
	PoModal,
	PoToggle,
	PoCheckbox,
	PoFooter,
	PoFormStatusMessage,
	PoRadioInput,
	PoStatsBlock,
	PoPagination,
	PoCommandPalette,
	PoAlert,
	PoLogs,
	PoDownloadFileList,
	PoContentArea,
	PoLoading,
	PoTabs,
	PoInputFile,
	PoTextarea,
	PoDRStatus,
	PoEmpty,
	PoCardTabs,
	PoTableAction,
	PoMultiSelect,
	PoDynamicTable,
} from "./components";

import { formatDate, debounce } from "./shared/helper";
import { ref, computed } from "vue";

import {
	PlayIcon,
	PlusIcon,
	BeakerIcon,
	SparklesIcon,
	FunnelIcon,
	BanknotesIcon,
	PhoneIcon,
	BoltIcon,
	UsersIcon,
	UserGroupIcon,
	MegaphoneIcon,
	PresentationChartLineIcon,
	CursorArrowRaysIcon,
	Square2StackIcon,
	WalletIcon,
	RectangleStackIcon,
	PencilIcon,
	TrashIcon,
	EyeIcon,
} from "@heroicons/vue/24/outline";
import {
	BanknotesIcon as BanknotesIconSolid,
	BriefcaseIcon,
	MapPinIcon,
	ScissorsIcon,
} from "@heroicons/vue/20/solid";

import { watch } from "vue";

/****
 * ----------- ROUTES
 */
import Form from "./pages/Form.vue";
import NotFound from "./pages/NotFound.vue";

const routes = {
	form: Form,
};

const currentPath = ref(window.location.hash);

window.addEventListener("hashchange", () => {
	currentPath.value = window.location.hash;
});

const currentView = computed(() => {
	console.log("reculc", currentPath.value.slice(1));
	return routes[currentPath.value.slice(1) || "/"] || NotFound;
});

function handleSidebarButtonClick(link) {
	currentPath.value = link;
	console.log("aa", currentPath.value);
}

/****
 * ----------- ROUTES
 */

let searchQuery = ref("");
let toggleState = ref(false);
let showNoteSlideover = ref(false);
let checkboxState = ref(false);
let showAlert = ref(false);
let showNotificationOne = ref(false);
let inputModel = ref("this is a value");
let inputCurrencyModel = ref(2000);
let currQuery = ref("search this");
const tabs = [
	{
		name: "Wage Changes",
		icon: BanknotesIconSolid,
		iconColor: "po-fill-green-400",
		href: "#",
		current: true,
		count: 20,
	},
	{
		name: "Terminations",
		icon: ScissorsIcon,
		iconColor: "po-fill-red-400",
		href: "#",
		current: false,
		count: 999,
	},
	{
		name: "Location Changes",
		icon: MapPinIcon,
		iconColor: "po-fill-orange-400",
		href: "#",
		current: false,
		count: 9,
	},
	{
		name: "Designation Changes",
		icon: BriefcaseIcon,
		iconColor: "po-fill-cyan-400",
		href: "#",
		current: false,
	},
];

const locationHistory = [
	{
		label: "Main Office",
		date: "2022-09-02 10:20:25",
		description:
			"Moved from Velaana Customer Centre to Main Office, Male City, Kaafu",
		current: true,
	},
	{
		label: "Velaana Customer Centre",
		date: "10-23-2022",
		description:
			"Moved from Vilingili Office to Velaana Customer Centre, Male City, Kaafu",
	},
	{
		label: "Vilingili Office",
		date: "Apr 17, 2020",
		description: "Moved from Main Office to Vilingili Office, Vilingili, Kaafu",
	},
	{
		label: "Main Office",
		date: "Jan 10, 2020",
		description: "Started working at Main Office, Male City, Kaafu",
	},
];

function handleTimelineClick(item) {
	console.log("handleTimelineClick", item);
}

setTimeout(() => {
	showNotificationOne.value = true;
}, 100);

let allApps = [
	{
		groupName: "",
		apps: [
			{
				name: "Employments",
				url: "https://firstapp.example.com",
				icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#B9770E">
  <path fill-rule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
  <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
</svg>
`,
			},
			{
				name: "Overpayment",
				url: "https://coolapp.example.com",
				icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <path fill="#2E86C1" fill-rule="evenodd" d="M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V8Zm.5 3a.5.5 0 0 0-.5.5V16a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-4.5a.5.5 0 0 0-.5-.5h-19ZM13 15a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>
  </svg>`,
			},
			{
				name: "Death Repository",
				url: "https://coolapp.example.com",
				icon: `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 501 414">
  <path fill="#C0392B" d="M59.061 279.405c-4.11-5.92-2.64-14.067 3.281-18.177 5.923-4.112 13.081-1.817 18.179 3.28C252.129 436.118 391.119 16.803 304.413 87.319c-42.077 34.22-84.01 79.636-122.349 107.977-25.937 19.173-50.925 30.744-73.388 30.42-35.002-.564-60.374-14.627-77.774-33.611-22.23-24.255-31.259-56.49-30.891-77.46.386-20.945 9.15-53.074 32.138-76.331C49.276 20.985 73.916 7.988 108.676 8.628c18.157.364 33.98 4.553 47.996 11.314 14.68 7.081 27.408 16.808 38.729 27.55 5.33 4.853 5.715 13.121.861 18.451s-13.122 5.716-18.451.862c-9.684-8.465-20.424-16.151-32.75-21.495C23.072-7.57 88.816 227.335 186.06 136.662 225.648 99.748 267.95 53.466 310.06 26.134 335.283 9.763 360.794.116 385.496 0c39.674.066 67.978 17.249 86.75 41.465 19.571 25.246 28.372 58.655 28.204 87.734-.85 75.024-33.066 139.053-76.491 187.036-57.142 63.14-133.025 97.884-176.873 97.141-24.026-.446-57.091-12.527-90.876-35.425-34.17-23.161-69.557-56.998-97.149-98.546Z"/>
</svg>
`,
			},
			{
				name: "Investment Maturity",
				url: "https://coolapp.example.com",
				icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 0 32 32">
    <path fill="#D4AC0D" d="m25.728 10.112-10.72 5.152-10.72-5.152 10.72-6.176zm-21.632.352 9.824 6.72.896 11.808-10.72-6.176V10.464zm21.792 0v12.352L15.2 28.992l.896-11.808z"/>
  </svg>`,
			},
		],
	},
];

let notifications = [];

let profileSwitcherData = ref({
	profiles: [
		{
			name: "Claire Hussain",
			identifier: "",
			url: "#self",
			current: false,
			isPersonal: true,
			profilePic:
				"https://images.unsplash.com/photo-1597248374161-426f0d6d2fc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
		},
		{
			name: "Penshion Office",
			identifier: "202301052023",
			logo: "http://uidocs.test/logo-1.png",
			url: "#business",
			current: true,
			isPersonal: false,
			userRole: "Adminstrator",
		},
		{
			name: "Garden Office",
			identifier: "202301052023",
			logo: "http://uidocs.test/logo-5.png",
			url: "#business",
			current: false,
			isPersonal: false,
			userRole: "Gardener",
		},
		{
			name: "Production Pvt Ltd",
			identifier: "202301052026",
			logo: "http://uidocs.test/logo-2.png",
			url: "#business",
			current: false,
			isPersonal: false,
			userRole: "Producer",
		},
		{
			name: "Classic Pvt Ltd",
			identifier: "202301052026",
			url: "#business",
			current: false,
			isPersonal: false,
			userRole: "Classica",
		},
	],
});

// console.log("icon", PlayIcon);

let sidebarContent = [
	{
		groupName: "",
		items: [
			{
				label: "Dashboard",
				url: "/",
				icon: PresentationChartLineIcon,
			},
		],
	},
	{
		groupName: "Groups",
		items: [
			{
				label: "Content Sections",
				url: "/cs",
				icon: RectangleStackIcon,
			},
			{
				label: "Form layouts",
				url: "/form",
				icon: Square2StackIcon,
			},
			{
				label: "Dialogs & Alerts",
				url: "/another",
				icon: MegaphoneIcon,
			},
			{
				label: "Buttons",
				url: "/another",
				icon: CursorArrowRaysIcon,
			},
		],
	},
];

let actionBarItems = [
	{
		label: "New Staff",
		icon: PlusIcon,
		highlighted: true,
	},
	{
		label: "Destroy",
		icon: TrashIcon,
		danger: true,
	},
	{
		label: "Experiment",
		icon: BeakerIcon,
	},
];

let tableHead = [
	{ label: "Name" },
	{ label: "NID" },
	{ label: "Source" },
	{ label: "DOD" },
	{ label: "Action" },
];

let tableBody = ref([]);

setTimeout(() => {
	tableBody.value = [
		{
			name: "Jane Gasim",
			nid: "A00000",
			source: "YY Clinic",
			dod: "2022-03-12",
			something: "else",
			action: "text",
		},
		{
			name: "Mariyam Doe",
			nid: "A00000",
			source: "Rashu Councils",
			dod: "2022 November 10",
			action: "icon",
		},
		{
			name: "Don Hussain",
			nid: "A00000",
			source: "Farumathi",
			dod: "2022-11-02",
			action: "both",
		},
	];
}, 2000);

let descriptionListItems = [
	{
		title: "Full name",
		description: "Saleem Ahmed Doe",
	},
	{
		title: "Address",
		description: "House of Sal, Medhu St, Malé",
	},
	{
		title: "Address",
		description: "House of Sal, Medhu St, Malé",
	},
	{
		title: "Dob",
		description: "1972-02-05",
		action: "Update",
	},
];

function NewSearch(query) {
	searchQuery.value = query;
}

function handleActionBarClick(item) {
	switch (item) {
		case "New Staff":
			alert("New staff button was clicked");
			break;
		case "Experiment":
			console.log("exp");
			break;
		case "back":
			alert("back btn");
			break;
	}
}

function handleDescriptionListActionClick(item) {
	switch (item) {
		case "Update":
			alert("Update action was clicked");
			break;
		default:
			alert("action btn");
			break;
	}
}

function openAlertClick() {
	showAlert.value = true;
}

const openModal = ref(false);
function openModalClick() {
	openModal.value = true;

	setTimeout(() => {
		// openModal.value = false;
		console.log("closing");
	}, 1000);
}

function handleAlertOkClick() {
	console.log("alert ok");
}

const selectFieldList = ref([]);
const selectFieldListTwo = ref([
	{ id: "green", name: "Sub category name", subtitle: "Category" },
	{ id: 2, name: "Running around in circles", subtitle: "Activity" },
	{ id: 3, name: "Something drinkable", subtitle: "Water" },
]);
const selectFieldListThree = ref([
	{ id: 1, name: "Koshaaru" },
	{ id: 2, name: "HelpDesk" },
	{ id: 3, name: "Another" },
]);

function handleSelectFieldTwoClick(item) {
	console.log("select field two selected ok", item);
}
function handleSelectFieldIslandClick(item) {
	console.log("Island selected", item);
}

const selectFieldPreSelected = ref(selectFieldList[1]);
const selectFieldSelected = ref(null);
const selectFieldTwoSelected = ref(null);
const selectIslandSelected = ref(null);
const selectFieldThreeSelected = ref(null);

selectFieldSelected.value = 2;
setTimeout(() => {
	selectFieldList.value = [
		{ id: 1, name: "Koshaaru" },
		{ id: 2, name: "HelpDesk" },
		{ id: 3, name: "Another" },
	];
}, 12000);
setTimeout(() => {}, 5000);

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

const radioOptionSelected = ref(1);

const statsBlockItems = [
	{
		label: "Number of Maturities",
		value: "20",
		bgColor: "bg-orange-50",
		iconColor: "text-orange-700",
		icon: SparklesIcon,
	},
	{
		label: "Principal Frequency",
		value: "Semi-Annual",
		bgColor: "bg-sky-50",
		iconColor: "text-sky-700",
		icon: FunnelIcon,
	},
	{
		label: "Purchase Value",
		value: "80,000,000.00",
		bgColor: "bg-green-50",
		iconColor: "text-green-700",
		icon: BanknotesIcon,
	},
];

let pagination = {
	label: "Page 2 of 20",
	nextLink: "/users/1",
	prevLink: "/users/3",
};

function handlePaginationClick(item) {
	console.log("pagination click", item);
}

function handleButtonClick(to) {
	alert(to);
}

function handleDialClick(to) {
	console.log(to);
}

const logItems = [
	{
		label: "Remarks",
		date: "Dec 29, 2022",
		by: "Jane Singhe",
		description:
			"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum",
	},
	{
		label: "Approved",
		date: "Dec 29, 2022",
		by: "Suzanne Ali",
		description: "",
	},
	{
		label: "Reported",
		date: "Dec 28, 2022",
		by: "",
		description: "",
	},
];

const downloadableFiles = [
	{
		label: "resume_back_end_developer.pdf",
	},
	{
		label: "another_files.pdf",
	},
	{
		label: "one_more_file.pdf",
	},
];

function handleDownloadClick(label) {
	console.log("downloadclick", label);
}

function handleSelectFieldClick(val) {
	console.log("handleSelectFieldClick 222", val);
}

const appsList = [
	{
		name: "Death Repository",
		icon: `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 501 414">
  <path fill="#C0392B" d="M59.061 279.405c-4.11-5.92-2.64-14.067 3.281-18.177 5.923-4.112 13.081-1.817 18.179 3.28C252.129 436.118 391.119 16.803 304.413 87.319c-42.077 34.22-84.01 79.636-122.349 107.977-25.937 19.173-50.925 30.744-73.388 30.42-35.002-.564-60.374-14.627-77.774-33.611-22.23-24.255-31.259-56.49-30.891-77.46.386-20.945 9.15-53.074 32.138-76.331C49.276 20.985 73.916 7.988 108.676 8.628c18.157.364 33.98 4.553 47.996 11.314 14.68 7.081 27.408 16.808 38.729 27.55 5.33 4.853 5.715 13.121.861 18.451s-13.122 5.716-18.451.862c-9.684-8.465-20.424-16.151-32.75-21.495C23.072-7.57 88.816 227.335 186.06 136.662 225.648 99.748 267.95 53.466 310.06 26.134 335.283 9.763 360.794.116 385.496 0c39.674.066 67.978 17.249 86.75 41.465 19.571 25.246 28.372 58.655 28.204 87.734-.85 75.024-33.066 139.053-76.491 187.036-57.142 63.14-133.025 97.884-176.873 97.141-24.026-.446-57.091-12.527-90.876-35.425-34.17-23.161-69.557-56.998-97.149-98.546Z"/>
</svg>
`,
		bgColor: "bg-sky-500",
		menu: [],
	},
	{
		name: "Investment Maturity",
		icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill="none" d="M0 0h24v24H0z"/>
  <path fill="#D4AC0D" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm11.793 6.793-2.45 2.45-2.121-2.122-4.243 4.243 1.414 1.414 2.829-2.828 2.121 2.121 3.864-3.864L18 13V8h-5l1.793 1.793z"/>
</svg>`,
		bgColor: "bg-red-500",
		menu: [],
	},
	{
		name: "Employments",
		icon: `<svg
          xmlns="http://www.w3.org/2000/svg"
          xml:space="preserve"
          fill-rule="evenodd"
          stroke-linejoin="round"
          stroke-miterlimit="2"
          clip-rule="evenodd"
          viewBox="0 0 135 117"
        >
          <path
            fill="#B9770E"
            d="M58.496 27.829S11.436 7.725 11.193 4.697c-.242-3.028-.107-5.569-2.064-4.411C7.173 1.443-1.008 11.074.104 14.127c1.112 3.054 39.904 102.475 39.904 102.475s21.253-60.003 20.766-61.623c-.487-1.62-11.501-18.292-13.349-17.528-1.849.764-18.786 14.64-23.016 18.41 0 0 11.11-14.606 34.087-28.032ZM75.626 27.829s47.06-20.104 47.303-23.132c.242-3.028.107-5.569 2.064-4.411 1.956 1.157 10.137 10.788 9.025 13.841-1.112 3.054-39.904 102.475-39.904 102.475S72.861 56.599 73.348 54.979c.487-1.62 11.501-18.292 13.349-17.528 1.849.764 18.786 14.64 23.016 18.41 0 0-11.11-14.606-34.087-28.032Z"
          />
        </svg>`,
		bgColor: "bg-red-500",
		menu: [],
	},
];

function handleDisputeClick() {
	console.log("clllk dispute");
}

function onSearchClear() {
	console.log("clearrr");
}

const selectedmultiselectItems = ref([]);

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

const dynamicTableData = [
	{ id: 1, name: "John", age: 25, city: "New York" },
	{ id: 2, name: "Jane", age: 30, city: "Los Angeles" },
	{ id: 3, name: "Bob", age: 35, city: "Chicago" },
];
const dynamicTableCols = [
	{ key: "name", label: "Name", sortable: true, hidable: false, hidden: false },
	{ key: "age", label: "Age", sortable: true, hidable: true, hidden: false },
	{ key: "city", label: "City", sortable: false, hidable: true, hidden: false },
];

const currUserObject = ref(null);

setTimeout(() => {
	currUserObject.value = {
		id: 62,
		uuid: "6396f74e-9181-8313-8657-2206f705b597",
		name: "Jhon I.B. Leesi",
		username: "A130920",
		identity_uuid: "62f754aa-6e64-d874-2898-170121a87af0",
		identifier: "A130920",
		entity_id: 83716,
		avatar:
			"https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80",
		created_at: "2022-12-12T14:41:34.000Z",
		updated_at: "2023-03-20T11:48:38.278Z",
		deleted_at: null,
		member_id: 164979,
		staff_detail: {
			entity_id: 83716,
			nic: "A130920",
			rcn: "095",
			work_email: null,
			workplace_id: null,
			team_id: null,
			superior_structure_ids: [16],
			designation: {
				id: 40,
				name: "Software Developer",
				short_name: "dev",
				structure_id: 24,
			},
		},
		transacting_as: 170725,
		transacting_as_organisation: {
			id: 6,
			entity_id: 170725,
			name: "Maldives Hajj Corporation LTD",
			identifier: "20140200471",
			organisation_uuid: "62f7533b-aaa9-2526-8210-3502a228f03a",
			logo: "http://uidocs.test/logo-2.png",
		},
		organisations: [
			{
				id: 2,
				entity_id: 171173,
				name: "Maldives Pension Administration Office",
				identifier: "20100200015",
				organisation_uuid: "62f7556c-e994-4011-7794-7502363f6898",
			},
			{
				id: 6,
				entity_id: 170725,
				name: "Maldives Hajj Corporation LTD",
				identifier: "20140200471",
				organisation_uuid: "62f7533b-aaa9-2526-8210-3502a228f03a",
				logo: "http://uidocs.test/logo-2.png",
			},
		],
		permissions: [],
	};
}, 0);

function newHandleProfileSwitcherClick(obj) {
	setTimeout(() => {
		let matchFound = false;
		if (currUserObject.value.organisations.length > 0) {
			for (
				let index = 0;
				index < currUserObject.value.organisations.length;
				index++
			) {
				if (
					currUserObject.value.organisations[index].entity_id === obj.entity_id
				) {
					currUserObject.value.transacting_as_organisation = obj;
					matchFound = true;
					break;
				}
			}
		}
		if (!matchFound) {
			currUserObject.value.transacting_as_organisation = null;
		}
	}, 200);
}

const appsFromApi = ref([]);

setTimeout(() => {
	appsFromApi.value = [
		{
			name: "Auth Service",
			url: "https://auth-next.dev.mpao.mv/",
			icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#db4ec0"><path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" /></svg>',
			group: "",
			code: "auth",
			related: ["koshaaru", "tickets"],
		},
		{
			name: "Koshaaru Portal",
			url: "https://koshaaru.pension.gov.mv",
			icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 0 32 32"><path fill="#D4AC0D" d="m25.728 10.112-10.72 5.152-10.72-5.152 10.72-6.176zm-21.632.352 9.824 6.72.896 11.808-10.72-6.176V10.464zm21.792 0v12.352L15.2 28.992l.896-11.808z"/></svg>',
			group: "",
			code: "koshaaru",
			related: [],
		},
		{
			name: "Cloudnet",
			url: "https://apps.dev.mpao.mv",
			icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="skyblue" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" /></svg>',
			group: "Internal",
			code: "cloudnet",
			related: [],
		},
		{
			name: "Tickets",
			url: "https://apps.dev.mpao.mv/dms/documents/inbox",
			icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="blue" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>',
			group: "Internal",
			code: "tickets",
			related: [],
		},
		{
			name: "Info Management",
			url: "https://apps.dev.mpao.mv/information-management/individuals",
			icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="green" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>',
			group: "Internal",
			code: "info-management",
			related: [],
		},
		{
			name: "ISMS",
			url: "https://apps.dev.mpao.mv/isms",
			icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="pink" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>',
			group: "Internal",
			code: "isms",
			related: [],
		},
		{
			name: "Process Documents",
			url: "https://apps.dev.mpao.mv/sop/authorized/1",
			icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="teal" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>',
			group: "Internal",
			code: "sop",
			related: [],
		},
		{
			name: "Notifications",
			url: "https://apps.dev.mpao.mv/notification/message",
			icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="gold" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /> </svg>',
			group: "Internal",
			code: "notifications",
			related: [],
		},
		{
			name: "Operations",
			url: "https://apps.dev.mpao.mv/operations/dashboard",
			icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="red" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>',
			group: "Internal",
			code: "operations",
			related: [],
		},
		{
			name: "Collections & Compliance",
			url: "https://apps.dev.mpao.mv/collections/dashboard",
			icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="purple" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z" /></svg>',
			group: "Internal",
			code: "collections",
			related: [],
		},
		{
			name: "Public Relations",
			url: "https://apps.dev.mpao.mv/pr/website/posts",
			icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="lightblue" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>',
			group: "Internal",
			code: "pr",
			related: [],
		},
		{
			name: "Member Services",
			url: "https://apps.dev.mpao.mv/member-services/dashboard",
			icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="pink" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" /></svg>',
			group: "Internal",
			code: "member-services",
			related: [],
		},
		{
			name: "SAAM",
			url: "https://apps.dev.mpao.mv/saam/requests",
			icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="brown" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>',
			group: "Internal",
			code: "saam",
			related: [],
		},
		{
			name: "Utilities",
			url: "https://apps.dev.mpao.mv/utilities/guest-wifi",
			icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>',
			group: "Internal",
			code: "utilities",
			related: [],
		},
		{
			name: "Visitor Log",
			url: "https://apps.dev.mpao.mv/visitors",
			icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="darkorchid" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>',
			group: "Internal",
			code: "visitors",
			related: [],
		},
	];
}, 1000);

function handleRadioSelected(val) {
	console.log("selected event", val);
}

const handleInputText = debounce((val) => {
	console.log("clickidy", val);
}, 500);

const changeLog = [
	{
		label: "UI",
		latest_version: "1.1.0",
		version_history: [
			{
				date: "12-05-2023",
				version: "1.1.0",
				note: `<strong>New Features</strong><p>Enforced to update the contact information of the Employer</p><p>Mandatory information can be updated in profile page, and not further action can be taken until contact details are updated</p>`,
			},
			{
				date: "05-11-2022",
				version: "1.0.0",
				note: `<p>Portal is Released to Public</p>`,
			},
			{
				date: "30-08-2022",
				version: "0.2.0",
				note: `<p><strong>New Features</strong></p><ul><li>Auto calculate for employees terminated and enrolled during the month</li><li>Compare tools to compare calculated pension amounts with salary sheet value for each employee</li><li>SAP ID integration, with bulk update</li><li>Download calculated final amount for the month in CSV format for comparing</li></ul>`,
			},
			{
				date: "18-05-2022",
				version: "0.1.0",
				note: `<p><strong>Releasing The new Member Portal</strong></p><p>Some of the new features includes:</p><ul><li>Login using emails</li><li>Passcode to emails</li><li>Passcodes to numbers in other countries</li><li>Easily resend passcodes to email / sms</li><li>Change / update contact information</li><li>Enhanced manual &amp; auto member verifications</li><li>Voluntary contributions</li><li>MRPS Account Statement in Dhivehi</li><li>Death Reporting</li><li>Online chat</li><li>Instant document verification using QR code</li><li>Member service staff can print statements for others</li></ul>`,
			},
		],
		hasMore: true,
	},
	{
		label: "API",
		latest_version: "1.0.0",
		version_history: [
			{
				date: "05-11-2022",
				version: "API 1.0.0",
				note: `<p>Portal is Released to Public</p>`,
			},
			{
				date: "12-05-2023",
				version: "API 0.2.1",
				note: `<strong>New Features</strong><p>Enforced to update the contact information of the Employer</p><p>Mandatory information can be updated in profile page, and not further action can be taken until contact details are updated</p>`,
			},
			{
				date: "30-08-2022",
				version: "API 0.2.0",
				note: `<p><strong>New Features</strong></p><ul><li>Auto calculate for employees terminated and enrolled during the month</li><li>Compare tools to compare calculated pension amounts with salary sheet value for each employee</li><li>SAP ID integration, with bulk update</li><li>Download calculated final amount for the month in CSV format for comparing</li></ul>`,
			},
		],
		hasMore: false,
	},
];

const selectApiOptions = ref([]);
const selectApiLoading = ref(false);

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
function handleSelectApiClick(aa) {
	console.log("from component", aa);
}
function handleSelectApiClickTwo(aa) {
	console.log("from parent", aa);
}
function handleCardSearchBtnClick(aa) {
	console.log("card search btn click", aa);
}

let islands = [
	{
		id: 1,
		name: "Male'",
		name_dv: "\u0789\u07a7\u078d\u07ac",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 1,
	},
	{
		id: 2,
		name: "Villingili",
		name_dv: "\u0788\u07a8\u078d\u07a8\u0782\u078e\u07a8\u078d\u07a8",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 1,
	},
	{
		id: 3,
		name: "Hulhumale'",
		name_dv: "\u0780\u07aa\u0785\u07aa\u0789\u07a7\u078d\u07ac",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 1,
	},
	{
		id: 4,
		name: "Thuraakunu",
		name_dv: "\u078c\u07aa\u0783\u07a7\u0786\u07aa\u0782\u07aa",
		atoll_id: 1,
		island_code: 2001,
		is_inhibited: 1,
	},
	{
		id: 5,
		name: "Uligan",
		name_dv: "\u0787\u07aa\u078d\u07a8\u078e\u07a6\u0782\u07b0",
		atoll_id: 1,
		island_code: 2002,
		is_inhibited: 1,
	},
	{
		id: 6,
		name: "Berinmadhoo",
		name_dv: "\u0784\u07ac\u0783\u07a8\u0782\u07b0\u0789\u07a6\u078b\u07ab",
		atoll_id: 1,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 7,
		name: "Hathifushi",
		name_dv: "\u0780\u07a6\u078c\u07a8\u078a\u07aa\u0781\u07a8",
		atoll_id: 1,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 8,
		name: "Molhadhoo",
		name_dv: "\u0789\u07ae\u0785\u07a6\u078b\u07ab",
		atoll_id: 1,
		island_code: 2005,
		is_inhibited: 1,
	},
	{
		id: 9,
		name: "Hoarafushi",
		name_dv: "\u0780\u07af\u0783\u07a6\u078a\u07aa\u0781\u07a8",
		atoll_id: 1,
		island_code: 2006,
		is_inhibited: 1,
	},
	{
		id: 10,
		name: "Ihavandhoo",
		name_dv: "\u0787\u07a8\u0780\u07a6\u0788\u07a6\u0782\u07b0\u078b\u07ab",
		atoll_id: 1,
		island_code: 2007,
		is_inhibited: 1,
	},
	{
		id: 11,
		name: "Kelaa",
		name_dv: "\u0786\u07ac\u078d\u07a7",
		atoll_id: 1,
		island_code: 2008,
		is_inhibited: 1,
	},
	{
		id: 12,
		name: "Vashafaru",
		name_dv: "\u0788\u07a6\u0781\u07a6\u078a\u07a6\u0783\u07aa",
		atoll_id: 1,
		island_code: 2009,
		is_inhibited: 1,
	},
	{
		id: 13,
		name: "Dhidhdhoo",
		name_dv: "\u078b\u07a8\u0787\u07b0\u078b\u07ab",
		atoll_id: 1,
		island_code: 2010,
		is_inhibited: 1,
	},
	{
		id: 14,
		name: "Filladhoo",
		name_dv: "\u078a\u07a8\u0787\u07b0\u078d\u07a6\u078b\u07ab",
		atoll_id: 1,
		island_code: 2011,
		is_inhibited: 1,
	},
	{
		id: 15,
		name: "Maarandhoo",
		name_dv: "\u0789\u07a7\u0783\u07a6\u0782\u07b0\u078b\u07ab",
		atoll_id: 1,
		island_code: 2012,
		is_inhibited: 1,
	},
	{
		id: 16,
		name: "Thakandhoo",
		name_dv: "\u078c\u07a6\u0786\u07a6\u0782\u07b0\u078b\u07ab",
		atoll_id: 1,
		island_code: 2013,
		is_inhibited: 1,
	},
	{
		id: 17,
		name: "Utheemu",
		name_dv: "\u0787\u07aa\u078c\u07a9\u0789\u07aa",
		atoll_id: 1,
		island_code: 2014,
		is_inhibited: 1,
	},
	{
		id: 18,
		name: "Muraidhoo",
		name_dv: "\u0789\u07aa\u0783\u07a6\u0787\u07a8\u078b\u07ab",
		atoll_id: 1,
		island_code: 2015,
		is_inhibited: 1,
	},
	{
		id: 19,
		name: "Baarah",
		name_dv: "\u0784\u07a7\u0783\u07a6\u0781\u07b0",
		atoll_id: 1,
		island_code: 2016,
		is_inhibited: 1,
	},
	{
		id: 20,
		name: "Maafahi",
		name_dv: "\u0789\u07a7\u078a\u07a6\u0780\u07a8",
		atoll_id: 1,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 21,
		name: "Alidhoo",
		name_dv: "\u0787\u07a6\u078d\u07a8\u078b\u07ab",
		atoll_id: 1,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 22,
		name: "Huvahandhoo",
		name_dv: "\u0780\u07aa\u0788\u07a6\u0780\u07a6\u0782\u07b0\u078b\u07ab",
		atoll_id: 1,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 23,
		name: "Dhonakulhi",
		name_dv: "\u078b\u07ae\u0782\u07a6\u0786\u07aa\u0785\u07a8",
		atoll_id: 1,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 24,
		name: "Beenaafushi",
		name_dv: "\u0784\u07a9\u0782\u07a7\u078a\u07aa\u0781\u07a8",
		atoll_id: 1,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 25,
		name: "Dhapparuhuraa",
		name_dv:
			"\u078b\u07a6\u0787\u07b0\u0795\u07a6\u0783\u07aa\u0780\u07aa\u0783\u07a7",
		atoll_id: 1,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 26,
		name: "Dhigufaruhuraa",
		name_dv:
			"\u078b\u07a8\u078e\u07aa\u078a\u07a6\u0783\u07aa\u0780\u07aa\u0783\u07a7",
		atoll_id: 1,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 27,
		name: "Gaafushi",
		name_dv: "\u078e\u07a7\u078a\u07aa\u0781\u07a8",
		atoll_id: 1,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 28,
		name: "Gaamathikulhudhoo",
		name_dv:
			"\u078e\u07a7\u0789\u07a6\u078c\u07a8\u0786\u07aa\u0785\u07aa\u078b\u07ab",
		atoll_id: 1,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 29,
		name: "Gallandhoo",
		name_dv: "\u078e\u07a6\u0787\u07b0\u078d\u07a6\u0782\u07b0\u078b\u07ab",
		atoll_id: 1,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 30,
		name: "Govvaafushi",
		name_dv: "\u078e\u07ae\u0781\u07b0\u0788\u07a7\u078a\u07aa\u0781\u07a8",
		atoll_id: 1,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 31,
		name: "Innafinolhu",
		name_dv:
			"\u0787\u07a8\u0782\u07b0\u0782\u07a6\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 1,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 32,
		name: "Kudafinolhu",
		name_dv: "\u0786\u07aa\u0791\u07a6\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 1,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 33,
		name: "Maafari",
		name_dv: "\u0789\u07a7\u078a\u07a6\u0783\u07a8",
		atoll_id: 1,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 34,
		name: "Maafinolhu",
		name_dv: "\u0789\u07a7\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 1,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 35,
		name: "Madulu",
		name_dv: "\u0789\u07a6\u0791\u07aa\u078d\u07aa",
		atoll_id: 1,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 36,
		name: "Manafaru",
		name_dv: "\u0789\u07a6\u0782\u07a6\u078a\u07a6\u0783\u07aa",
		atoll_id: 1,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 37,
		name: "Matheerah",
		name_dv: "\u0789\u07a6\u078c\u07a9\u0783\u07a6\u0781\u07b0",
		atoll_id: 1,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 38,
		name: "Medhafushi",
		name_dv: "\u0789\u07ac\u078b\u07a6\u078a\u07aa\u0781\u07a8",
		atoll_id: 1,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 39,
		name: "Mulidhoo",
		name_dv: "\u0789\u07aa\u078d\u07a8\u078b\u07ab",
		atoll_id: 1,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 40,
		name: "Naridhoo",
		name_dv: "\u0782\u07a6\u0783\u07a8\u078b\u07ab",
		atoll_id: 1,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 41,
		name: "Ubulifinolhu",
		name_dv:
			"\u0787\u07aa\u0782\u0784\u07aa\u078d\u07a8\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 1,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 42,
		name: "Umaraiyfinolhu",
		name_dv:
			"\u0787\u07aa\u0789\u07a6\u0783\u07a6\u078c\u07b0\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 1,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 43,
		name: "Vangaaru",
		name_dv: "\u0788\u07a6\u0782\u078e\u07a7\u0783\u07aa",
		atoll_id: 1,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 44,
		name: "Velifinolhu",
		name_dv: "\u0788\u07ac\u078d\u07a8\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 1,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 45,
		name: "Faridhoo",
		name_dv: "\u078a\u07a6\u0783\u07a8\u078b\u07ab",
		atoll_id: 2,
		island_code: 2101,
		is_inhibited: 1,
	},
	{
		id: 46,
		name: "Hondaidhoo",
		name_dv: "\u0780\u07ae\u0782\u0791\u07a6\u0787\u07a8\u078b\u07ab",
		atoll_id: 2,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 47,
		name: "Hanimaadhoo",
		name_dv: "\u0780\u07a6\u0782\u07a8\u0789\u07a7\u078b\u07ab",
		atoll_id: 2,
		island_code: 2103,
		is_inhibited: 1,
	},
	{
		id: 48,
		name: "Finey",
		name_dv: "\u078a\u07a8\u0782\u07ad",
		atoll_id: 2,
		island_code: 2104,
		is_inhibited: 1,
	},
	{
		id: 49,
		name: "Naivaadhoo",
		name_dv: "\u0782\u07a6\u0787\u07a8\u0788\u07a7\u078b\u07ab",
		atoll_id: 2,
		island_code: 2105,
		is_inhibited: 1,
	},
	{
		id: 50,
		name: "Hirimaradhoo",
		name_dv: "\u0780\u07a8\u0783\u07a8\u0789\u07a6\u0783\u07a6\u078b\u07ab",
		atoll_id: 2,
		island_code: 2106,
		is_inhibited: 1,
	},
	{
		id: 51,
		name: "Nolhivaranfaru",
		name_dv:
			"\u0782\u07ae\u0785\u07a8\u0788\u07a6\u0783\u07a6\u0782\u07b0\u078a\u07a6\u0783\u07aa",
		atoll_id: 2,
		island_code: 2107,
		is_inhibited: 1,
	},
	{
		id: 52,
		name: "Nellaidhoo",
		name_dv: "\u0782\u07ac\u0787\u07b0\u078d\u07a6\u0787\u07a8\u078b\u07ab",
		atoll_id: 2,
		island_code: 2108,
		is_inhibited: 1,
	},
	{
		id: 53,
		name: "Nolhivaram",
		name_dv: "\u0782\u07ae\u0785\u07a8\u0788\u07a6\u0783\u07a6\u0789\u07b0",
		atoll_id: 2,
		island_code: 2109,
		is_inhibited: 1,
	},
	{
		id: 54,
		name: "Kurinbi",
		name_dv: "\u0786\u07aa\u0783\u07a8\u0782\u0784\u07a8",
		atoll_id: 2,
		island_code: 2110,
		is_inhibited: 1,
	},
	{
		id: 55,
		name: "Kunburudhoo",
		name_dv: "\u0786\u07aa\u0782\u0784\u07aa\u0783\u07aa\u078b\u07ab",
		atoll_id: 2,
		island_code: 2111,
		is_inhibited: 1,
	},
	{
		id: 56,
		name: "Kulhudhuffushi",
		name_dv:
			"\u0786\u07aa\u0785\u07aa\u078b\u07aa\u0787\u07b0\u078a\u07aa\u0781\u07a8",
		atoll_id: 2,
		island_code: 2112,
		is_inhibited: 1,
	},
	{
		id: 57,
		name: "Kumundhoo",
		name_dv: "\u0786\u07aa\u0789\u07aa\u0782\u07b0\u078b\u07ab",
		atoll_id: 2,
		island_code: 2113,
		is_inhibited: 1,
	},
	{
		id: 58,
		name: "Neykurendhoo",
		name_dv: "\u0782\u07ad\u0786\u07aa\u0783\u07ac\u0782\u07b0\u078b\u07ab",
		atoll_id: 2,
		island_code: 2114,
		is_inhibited: 1,
	},
	{
		id: 59,
		name: "Vaikaradhoo",
		name_dv: "\u0788\u07a6\u0787\u07a8\u0786\u07a6\u0783\u07a6\u078b\u07ab",
		atoll_id: 2,
		island_code: 2115,
		is_inhibited: 1,
	},
	{
		id: 60,
		name: "Maavaidhoo",
		name_dv: "\u0789\u07a7\u0788\u07a6\u0787\u07a8\u078b\u07ab",
		atoll_id: 2,
		island_code: 2116,
		is_inhibited: 1,
	},
	{
		id: 61,
		name: "Makunudhoo",
		name_dv: "\u0789\u07a6\u0786\u07aa\u0782\u07aa\u078b\u07ab",
		atoll_id: 2,
		island_code: 2117,
		is_inhibited: 1,
	},
	{
		id: 62,
		name: "Vaikaramuraidhoo",
		name_dv:
			"\u0788\u07a6\u0787\u07a8\u0786\u07a6\u0783\u07a6\u0789\u07aa\u0783\u07a7\u078b\u07ab",
		atoll_id: 2,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 63,
		name: "Theefaridhoo",
		name_dv: "\u078c\u07a9\u078a\u07a6\u0783\u07a8\u078b\u07ab",
		atoll_id: 2,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 64,
		name: "Dhipparufushi",
		name_dv:
			"\u078b\u07a8\u0787\u07b0\u0795\u07a6\u0783\u07aa\u078a\u07aa\u0781\u07a8",
		atoll_id: 2,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 65,
		name: "Fenboahuraa",
		name_dv: "\u078a\u07ac\u0782\u07b0\u0784\u07af\u0780\u07aa\u0783\u07a7",
		atoll_id: 2,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 66,
		name: "Hirinaidhoo",
		name_dv: "\u0780\u07a8\u0783\u07a8\u0782\u07a6\u0787\u07a8\u078b\u07ab",
		atoll_id: 2,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 67,
		name: "Hodaafushi",
		name_dv: "\u0780\u07ae\u0782\u0791\u07a7\u078a\u07aa\u0781\u07a8",
		atoll_id: 2,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 68,
		name: "Innafushi",
		name_dv: "\u0787\u07a8\u0782\u07b0\u0782\u07a6\u078a\u07aa\u0781\u07a8",
		atoll_id: 2,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 69,
		name: "Kanamana",
		name_dv: "\u0786\u07a6\u0782\u07a6\u0789\u07a6\u0782\u07a6",
		atoll_id: 2,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 70,
		name: "Kandinmaahuraa",
		name_dv:
			"\u0786\u07a6\u0782\u0791\u07a8\u0782\u07b0\u0789\u07a7\u0780\u07aa\u0783\u07a7",
		atoll_id: 2,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 71,
		name: "Kattalafushi",
		name_dv:
			"\u0786\u07a6\u0787\u07b0\u0793\u07a6\u078d\u07a6\u078a\u07aa\u0781\u07a8",
		atoll_id: 2,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 72,
		name: "Keylakunu",
		name_dv: "\u0786\u07ad\u078d\u07a6\u0786\u07aa\u0782\u07aa",
		atoll_id: 2,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 73,
		name: "Kudafaru",
		name_dv: "\u0786\u07aa\u0791\u07a6\u078a\u07a6\u0783\u07aa",
		atoll_id: 2,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 74,
		name: "Kudamuraidhoo",
		name_dv:
			"\u0786\u07aa\u0791\u07a6\u0789\u07aa\u0783\u07a6\u0787\u07a8\u078b\u07ab",
		atoll_id: 2,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 75,
		name: "Muiri",
		name_dv: "\u0789\u07aa\u0787\u07a8\u0783\u07aa",
		atoll_id: 2,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 76,
		name: "Naagoashi",
		name_dv: "\u0782\u07a7\u078e\u07af\u0781\u07a8",
		atoll_id: 2,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 77,
		name: "Rahburi",
		name_dv: "\u0783\u07a6\u0781\u07b0\u0784\u07aa\u0783\u07a8",
		atoll_id: 2,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 78,
		name: "Rasfushi",
		name_dv: "\u0783\u07a6\u0790\u07b0\u078a\u07aa\u0781\u07a8",
		atoll_id: 2,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 79,
		name: "Ruffushi",
		name_dv: "\u0783\u07aa\u0787\u07b0\u078a\u07aa\u0781\u07a8",
		atoll_id: 2,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 80,
		name: "Veligandu",
		name_dv: "\u0788\u07ac\u078d\u07a8\u078e\u07a6\u0782\u0791\u07aa",
		atoll_id: 2,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 81,
		name: "Kanditheemu",
		name_dv: "\u0786\u07a6\u0782\u0791\u07a8\u078c\u07a9\u0789\u07aa",
		atoll_id: 3,
		island_code: 2201,
		is_inhibited: 1,
	},
	{
		id: 82,
		name: "Noomaraa",
		name_dv: "\u0782\u07ab\u0789\u07a6\u0783\u07a7",
		atoll_id: 3,
		island_code: 2202,
		is_inhibited: 1,
	},
	{
		id: 83,
		name: "Goidhoo",
		name_dv: "\u078e\u07ae\u0787\u07a8\u078b\u07ab",
		atoll_id: 3,
		island_code: 2203,
		is_inhibited: 1,
	},
	{
		id: 84,
		name: "Feydhoo",
		name_dv: "\u078a\u07ad\u078b\u07ab",
		atoll_id: 3,
		island_code: 2204,
		is_inhibited: 1,
	},
	{
		id: 85,
		name: "Feevah",
		name_dv: "\u078a\u07a9\u0788\u07a6\u0787\u07b0",
		atoll_id: 3,
		island_code: 2205,
		is_inhibited: 1,
	},
	{
		id: 86,
		name: "Bilehffahi",
		name_dv: "\u0784\u07a8\u078d\u07ac\u078c\u07b0\u078a\u07a6\u0780\u07a8",
		atoll_id: 3,
		island_code: 2206,
		is_inhibited: 1,
	},
	{
		id: 87,
		name: "Foakaidhoo",
		name_dv: "\u078a\u07af\u0786\u07a6\u0787\u07a8\u078b\u07ab",
		atoll_id: 3,
		island_code: 2207,
		is_inhibited: 1,
	},
	{
		id: 88,
		name: "Narudhoo",
		name_dv: "\u0782\u07a6\u0783\u07aa\u078b\u07ab",
		atoll_id: 3,
		island_code: 2208,
		is_inhibited: 1,
	},
	{
		id: 89,
		name: "Maakandoodhoo",
		name_dv: "\u0789\u07a7\u0786\u07a6\u0782\u0791\u07ab\u078b\u07ab",
		atoll_id: 3,
		island_code: null,
		is_inhibited: 1,
	},
	{
		id: 90,
		name: "Maroshi",
		name_dv: "\u0789\u07a6\u0783\u07ae\u0781\u07a8",
		atoll_id: 3,
		island_code: 2210,
		is_inhibited: 1,
	},
	{
		id: 91,
		name: "Lhaimagu",
		name_dv: "\u0785\u07a6\u0787\u07a8\u0789\u07a6\u078e\u07aa",
		atoll_id: 3,
		island_code: 2211,
		is_inhibited: 1,
	},
	{
		id: 92,
		name: "Firubaidhoo",
		name_dv:
			"\u078a\u07a8\u0783\u07aa\u0782\u0784\u07a6\u0787\u07a8\u078b\u07ab",
		atoll_id: 3,
		island_code: null,
		is_inhibited: 1,
	},
	{
		id: 93,
		name: "Komandoo",
		name_dv: "\u0786\u07ae\u0789\u07a6\u0782\u07b0\u0791\u07ab",
		atoll_id: 3,
		island_code: 2213,
		is_inhibited: 1,
	},
	{
		id: 94,
		name: "Maaungoodhoo",
		name_dv: "\u0789\u07a7\u0787\u07aa\u0782\u078e\u07ab\u078b\u07ab",
		atoll_id: 3,
		island_code: 2214,
		is_inhibited: 1,
	},
	{
		id: 95,
		name: "Funadhoo",
		name_dv: "\u078a\u07aa\u0782\u07a6\u078b\u07ab",
		atoll_id: 3,
		island_code: 2215,
		is_inhibited: 1,
	},
	{
		id: 96,
		name: "Milandhoo",
		name_dv: "\u0789\u07a8\u078d\u07a6\u0782\u07b0\u078b\u07ab",
		atoll_id: 3,
		island_code: 2216,
		is_inhibited: 1,
	},
	{
		id: 97,
		name: "Nilandhoo",
		name_dv: "\u0782\u07a8\u078d\u07a6\u0782\u07b0\u078b\u07ab",
		atoll_id: 3,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 98,
		name: "Keekimini",
		name_dv: "\u0786\u07a9\u0786\u07a8\u0789\u07a8\u0782\u07a8",
		atoll_id: 3,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 99,
		name: "Bisalhaahuraa",
		name_dv:
			"\u0784\u07a8\u0790\u07b0\u0787\u07a6\u0785\u07a7\u0780\u07aa\u0783\u07a7",
		atoll_id: 3,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 100,
		name: "Boduhuraa",
		name_dv: "\u0784\u07ae\u0791\u07aa\u0780\u07aa\u0783\u07a7",
		atoll_id: 3,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 101,
		name: "Bolissafaru",
		name_dv: "\u0784\u07ae\u078d\u07a8\u0787\u07b0\u0790\u07a6\u0783\u07aa",
		atoll_id: 3,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 102,
		name: "Dhigurah",
		name_dv: "\u078b\u07a8\u078e\u07aa\u0783\u07a6\u0781\u07b0",
		atoll_id: 3,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 103,
		name: "Dhiguvelidhoo",
		name_dv: "\u078b\u07a8\u078e\u07aa\u0788\u07ac\u078d\u07a8\u078b\u07ab",
		atoll_id: 3,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 104,
		name: "Dholhiyadhoo",
		name_dv: "\u078b\u07ae\u0785\u07a8\u0794\u07a6\u078b\u07ab",
		atoll_id: 3,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 105,
		name: "Dhonvelihuraa",
		name_dv:
			"\u078b\u07ae\u0782\u07b0\u0788\u07ac\u078d\u07a8\u0780\u07aa\u0783\u07a7",
		atoll_id: 3,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 106,
		name: "Dolhiyadhoo Kudarah",
		name_dv:
			"\u078b\u07ae\u0785\u07a8\u0794\u07a6\u078b\u07ab\u0786\u07aa\u0791\u07a6\u0783\u07a6\u0781\u07b0",
		atoll_id: 3,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 107,
		name: "Eriadhoo",
		name_dv: "\u0787\u07ac\u0783\u07a8\u0787\u07a6\u078b\u07ab",
		atoll_id: 3,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 108,
		name: "Eskasdhoo",
		name_dv: "\u0787\u07ac\u0790\u07b0\u0786\u07a6\u0790\u07b0\u078b\u07ab",
		atoll_id: 3,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 109,
		name: "Farukolhu",
		name_dv: "\u078a\u07a6\u0783\u07aa\u0786\u07ae\u0785\u07aa",
		atoll_id: 3,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 110,
		name: "Fushifaru",
		name_dv: "\u078a\u07aa\u0781\u07a8\u078a\u07a6\u0783\u07aa",
		atoll_id: 3,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 111,
		name: "Gaakoshibee",
		name_dv: "\u078e\u07a7\u0786\u07ae\u0781\u07a8\u0784\u07a9",
		atoll_id: 3,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 112,
		name: "Gallaidhoo",
		name_dv: "\u078e\u07a6\u0787\u07b0\u078d\u07a6\u0787\u07a8\u078b\u07ab",
		atoll_id: 3,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 113,
		name: "Hahfathigadu",
		name_dv:
			"\u0780\u07a6\u078c\u07b0\u078a\u07a6\u078c\u07a8\u078e\u07a6\u0782\u0791\u07aa",
		atoll_id: 3,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 114,
		name: "Hirubadhoo",
		name_dv: "\u0780\u07a8\u0782\u0783\u07aa\u0784\u07a6\u078b\u07ab",
		atoll_id: 3,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 115,
		name: "Hurasfaru",
		name_dv: "\u0780\u07aa\u0783\u07a6\u0790\u07b0\u078a\u07a6\u0783\u07aa",
		atoll_id: 3,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 116,
		name: "Ka'baalifaru",
		name_dv:
			"\u0786\u07a6\u0782\u0784\u07a7\u078d\u07a8\u078a\u07a6\u0783\u07aa",
		atoll_id: 3,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 117,
		name: "Kakaaeriadhoo",
		name_dv:
			"\u0786\u07a6\u0786\u07a7\u0787\u07ac\u0783\u07a8\u0787\u07a6\u078b\u07ab",
		atoll_id: 3,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 118,
		name: "Kudadhoo",
		name_dv: "\u0786\u07aa\u0791\u07a6\u078b\u07ab",
		atoll_id: 3,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 119,
		name: "Kudafarufinolhu",
		name_dv:
			"\u0786\u07aa\u0791\u07a6\u078a\u07a6\u0783\u07aa\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 3,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 120,
		name: "Kudafaruhuraa",
		name_dv:
			"\u0786\u07aa\u0791\u07a6\u078a\u07a6\u0783\u07aa\u0780\u07aa\u0783\u07a7",
		atoll_id: 3,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 121,
		name: "Kudafunadhoo",
		name_dv: "\u0786\u07aa\u0791\u07a6\u078a\u07aa\u0782\u07a6\u078b\u07ab",
		atoll_id: 3,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 122,
		name: "Kudalhaimendhoo",
		name_dv:
			"\u0786\u07aa\u0791\u07a6\u0785\u07a6\u0787\u07a8\u0789\u07ac\u0782\u07b0\u078b\u07ab",
		atoll_id: 3,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 123,
		name: "Madidhoo",
		name_dv: "\u0789\u07a6\u0791\u07a8\u078b\u07ab",
		atoll_id: 3,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 124,
		name: "Madikuredhdhoo",
		name_dv:
			"\u0789\u07a6\u0791\u07a8\u0786\u07aa\u0783\u07ac\u0787\u07b0\u078b\u07ab",
		atoll_id: 3,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 125,
		name: "Mathikomandoo",
		name_dv:
			"\u0789\u07a6\u078c\u07a8\u0786\u07ae\u0789\u07a6\u0782\u07b0\u0791\u07ab",
		atoll_id: 3,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 126,
		name: "Medhukuburudhoo",
		name_dv:
			"\u0789\u07ac\u078b\u07aa\u0786\u07aa\u0782\u0784\u07aa\u0783\u07aa\u078b\u07ab",
		atoll_id: 3,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 127,
		name: "Medhurah",
		name_dv: "\u0789\u07ac\u078b\u07aa\u0783\u07a6\u0781\u07b0",
		atoll_id: 3,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 128,
		name: "Migoodhoo",
		name_dv: "\u0789\u07a8\u078e\u07ab\u078b\u07ab",
		atoll_id: 3,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 129,
		name: "Muleehuraa",
		name_dv: "\u0789\u07aa\u078d\u07a9\u0780\u07aa\u0783\u07a7",
		atoll_id: 3,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 130,
		name: "Naainfaru",
		name_dv: "\u0782\u07a7\u0787\u07a8\u0782\u07b0\u078a\u07a6\u0783\u07aa",
		atoll_id: 3,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 131,
		name: "Naalaahuraa",
		name_dv: "\u0782\u07a7\u078d\u07a7\u0780\u07aa\u0783\u07a7",
		atoll_id: 3,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 132,
		name: "Nalandhoo",
		name_dv: "\u0782\u07a6\u078d\u07a6\u0782\u07b0\u078b\u07ab",
		atoll_id: 3,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 133,
		name: "Naruribudhoo",
		name_dv:
			"\u0782\u07a6\u0783\u07aa\u0783\u07a8\u0782\u0784\u07aa\u078b\u07ab",
		atoll_id: 3,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 134,
		name: "Neyo",
		name_dv: "\u0782\u07ac\u0794\u07ae",
		atoll_id: 3,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 135,
		name: "Vagaru",
		name_dv: "\u0788\u07a6\u078e\u07a6\u0783\u07aa",
		atoll_id: 3,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 136,
		name: "Henbandhoo",
		name_dv: "\u0780\u07ac\u0782\u0784\u07a6\u078b\u07ab",
		atoll_id: 4,
		island_code: 2302,
		is_inhibited: 1,
	},
	{
		id: 137,
		name: "Kendhikolhudhoo",
		name_dv:
			"\u0786\u07ac\u0782\u078b\u07a8\u0786\u07ae\u0785\u07aa\u078b\u07ab",
		atoll_id: 4,
		island_code: 2303,
		is_inhibited: 1,
	},
	{
		id: 138,
		name: "Tholhendhoo",
		name_dv: "\u078c\u07ae\u0785\u07ac\u0782\u07b0\u078b\u07ab",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 139,
		name: "Maalhendhoo",
		name_dv: "\u0789\u07a7\u0785\u07ac\u0782\u07b0\u078b\u07ab",
		atoll_id: 4,
		island_code: 2305,
		is_inhibited: 1,
	},
	{
		id: 140,
		name: "Kudafari",
		name_dv: "\u0786\u07aa\u0791\u07a6\u078a\u07a6\u0783\u07a9",
		atoll_id: 4,
		island_code: 2306,
		is_inhibited: 1,
	},
	{
		id: 141,
		name: "Landhoo",
		name_dv: "\u078d\u07a6\u0782\u07b0\u078b\u07ab",
		atoll_id: 4,
		island_code: 2307,
		is_inhibited: 1,
	},
	{
		id: 142,
		name: "Maafaru",
		name_dv: "\u0789\u07a7\u078a\u07a6\u0783\u07aa",
		atoll_id: 4,
		island_code: 2308,
		is_inhibited: 1,
	},
	{
		id: 143,
		name: "Lhohi",
		name_dv: "\u0785\u07ae\u0780\u07a8",
		atoll_id: 4,
		island_code: 2309,
		is_inhibited: 1,
	},
	{
		id: 144,
		name: "Miladhoo",
		name_dv: "\u0789\u07a8\u078d\u07a6\u078b\u07ab",
		atoll_id: 4,
		island_code: 2310,
		is_inhibited: 1,
	},
	{
		id: 145,
		name: "Magoodhoo",
		name_dv: "\u0789\u07a6\u078e\u07ab\u078b\u07ab",
		atoll_id: 4,
		island_code: 2311,
		is_inhibited: 1,
	},
	{
		id: 146,
		name: "Manadhoo",
		name_dv: "\u0789\u07a6\u0782\u07a6\u078b\u07ab",
		atoll_id: 4,
		island_code: 2312,
		is_inhibited: 1,
	},
	{
		id: 147,
		name: "Holhudhoo",
		name_dv: "\u0780\u07ae\u0785\u07aa\u078b\u07ab",
		atoll_id: 4,
		island_code: 2313,
		is_inhibited: 1,
	},
	{
		id: 148,
		name: "Fodhdhoo",
		name_dv: "\u078a\u07ae\u0787\u07b0\u078b\u07ab",
		atoll_id: 4,
		island_code: 2314,
		is_inhibited: 1,
	},
	{
		id: 149,
		name: "Velidhoo",
		name_dv: "\u0788\u07ac\u078d\u07a8\u078b\u07ab",
		atoll_id: 4,
		island_code: 2315,
		is_inhibited: 1,
	},
	{
		id: 150,
		name: "Aarah",
		name_dv: "\u0787\u07a7\u0783\u07a6\u0781\u07b0",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 151,
		name: "Badaidhidhdhoo",
		name_dv: "\u0784\u07a6\u0782\u0791\u07a8\u0787\u07b0\u078b\u07ab",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 152,
		name: "Bodufushi",
		name_dv: "\u0784\u07ae\u0791\u07aa\u078a\u07aa\u0781\u07a8",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 153,
		name: "Bodulhaimendhoo",
		name_dv:
			"\u0784\u07ae\u0791\u07aa\u0785\u07a6\u0787\u07a8\u0789\u07ac\u0782\u07b0\u078b\u07ab",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 154,
		name: "Bomasdhoo",
		name_dv: "\u0784\u07ae\u0789\u07a6\u0790\u07b0\u078b\u07ab",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 155,
		name: "Burehifasdhoo",
		name_dv:
			"\u0784\u07aa\u0783\u07ac\u0780\u07a8\u078a\u07a6\u0790\u07b0\u078b\u07ab",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 156,
		name: "Dheefuram",
		name_dv: "\u078b\u07a9\u078a\u07aa\u0783\u07a6\u0789\u07b0",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 157,
		name: "Dhekenanfaru",
		name_dv:
			"\u078b\u07ac\u0786\u07ac\u0782\u07a6\u0782\u07b0\u078a\u07a6\u0783\u07aa",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 158,
		name: "Dhigurah",
		name_dv: "\u078b\u07a8\u078e\u07aa\u0783\u07a6\u0781\u07b0",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 159,
		name: "Dhonaerikandoodhoo",
		name_dv:
			"\u078b\u07ae\u0782\u07a6\u0787\u07ac\u0783\u07a8\u0786\u07a6\u0782\u07b0\u078b\u07ab\u078b\u07ab",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 160,
		name: "Edhdhuffaru Mairah",
		name_dv:
			"\u0787\u07ac\u0787\u07b0\u078b\u07aa\u078a\u07a6\u0783\u07aa \u0789\u07a6\u0787\u07a8\u0783\u07a6\u0781\u07b0",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 161,
		name: "Ekulhivaru",
		name_dv: "\u0787\u07ac\u0786\u07aa\u0785\u07a8\u0788\u07a6\u0783\u07aa",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 162,
		name: "Erruhhuraa",
		name_dv:
			"\u0787\u07ac\u0787\u07b0\u0783\u07aa\u0781\u07b0\u0780\u07aa\u0783\u07a7",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 163,
		name: "Farumuli",
		name_dv: "\u078a\u07a6\u0783\u07aa\u0789\u07aa\u078d\u07a8",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 164,
		name: "Felivaru",
		name_dv: "\u078a\u07ac\u078d\u07a8\u0788\u07a6\u0783\u07aa",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 165,
		name: "Felivarukudarah",
		name_dv:
			"\u078a\u07ac\u078d\u07a8\u0788\u07a6\u0783\u07aa\u0786\u07aa\u0791\u07a6\u0783\u07a6\u0781\u07b0",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 166,
		name: "Fohdhipparu",
		name_dv:
			"\u078a\u07ae\u0781\u07b0\u078b\u07a8\u0787\u07b0\u0795\u07a6\u0783\u07aa",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 167,
		name: "Fushivelavaru",
		name_dv:
			"\u078a\u07aa\u0781\u07a8\u0788\u07ac\u078d\u07a6\u0788\u07a6\u0783\u07aa",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 168,
		name: "Goabilivaadhoo",
		name_dv:
			"\u078e\u07af\u0782\u0784\u07a8\u078d\u07a8\u0788\u07a7\u078b\u07ab",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 169,
		name: "Holhumeedhoo",
		name_dv: "\u0780\u07ae\u0785\u07aa\u0789\u07a9\u078b\u07ab",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 170,
		name: "Huivani",
		name_dv: "\u0780\u07aa\u0787\u07a8\u0788\u07a6\u0782\u07a8",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 171,
		name: "Hulhudhdhoo",
		name_dv: "\u0780\u07aa\u0785\u07aa\u0787\u07b0\u078b\u07ab",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 172,
		name: "Huvadhumaavattaru",
		name_dv:
			"\u0780\u07aa\u0788\u07a6\u0782\u078b\u07aa\u0789\u07a7\u0788\u07a6\u0787\u07b0\u0793\u07a6\u0783\u07aa",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 173,
		name: "Inguraidhoo",
		name_dv:
			"\u0787\u07a8\u0782\u078e\u07aa\u0783\u07a6\u0787\u07a8\u078b\u07ab",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 174,
		name: "Kaalhugemendhoo",
		name_dv:
			"\u0786\u07a7\u0785\u07aa\u078e\u07ac\u0789\u07ac\u0782\u07b0\u078b\u07ab",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 175,
		name: "Kadinmaahuraa",
		name_dv:
			"\u0786\u07a6\u0782\u0791\u07a8\u0789\u07a7\u0780\u07aa\u0783\u07a7",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 176,
		name: "Kafakomandoo",
		name_dv:
			"\u0786\u07a6\u078a\u07a6\u0786\u07ae\u0789\u07a6\u0782\u07b0\u0791\u07ab",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 177,
		name: "Kalaidhoo",
		name_dv: "\u0786\u07a6\u078d\u07a6\u0787\u07a8\u078b\u07ab",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 178,
		name: "Karinma",
		name_dv: "\u0786\u07a6\u0783\u07a8\u0782\u07b0\u0789\u07a7",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 179,
		name: "Karinmavattaru",
		name_dv:
			"\u0786\u07a6\u0783\u07a8\u0782\u07b0\u0789\u07a6\u0788\u07a6\u0787\u07b0\u0793\u07a6\u0783\u07aa",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 180,
		name: "Kedhivaru",
		name_dv: "\u0786\u07ac\u0782\u078b\u07a8\u0788\u07a6\u0783\u07aa",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 181,
		name: "Kolhufushi",
		name_dv: "\u0786\u07ae\u0785\u07aa\u078a\u07aa\u0781\u07a8",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 182,
		name: "Kudafunafaru",
		name_dv:
			"\u0786\u07aa\u0791\u07a6\u078a\u07aa\u0782\u07a6\u078a\u07a6\u0783\u07aa",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 183,
		name: "Kudafushi",
		name_dv: "\u0786\u07aa\u0791\u07a6\u078a\u07aa\u0781\u07a8",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 184,
		name: "Kunnumalei",
		name_dv:
			"\u0786\u07aa\u0782\u07b0\u0782\u07aa\u0789\u07a6\u078d\u07ac\u0787\u07a8",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 185,
		name: "Kuramaadhoo",
		name_dv: "\u0786\u07aa\u0783\u07a6\u0782\u0789\u07a7\u078b\u07ab",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 186,
		name: "Kuredhivaru",
		name_dv: "\u0786\u07aa\u0783\u07ac\u078b\u07a8\u0788\u07a6\u0783\u07aa",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 187,
		name: "Loafaru",
		name_dv: "\u078d\u07af\u078a\u07a6\u0783\u07aa",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 188,
		name: "Maafunafaru",
		name_dv: "\u0789\u07a7\u078a\u07aa\u0782\u07a6\u078a\u07a6\u0783\u07aa",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 189,
		name: "Maakanaafushi",
		name_dv: "\u0789\u07a7\u0786\u07a6\u0782\u07a7\u078a\u07aa\u0781\u07a8",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 190,
		name: "Maakurandhoo",
		name_dv: "\u0789\u07a7\u0786\u07aa\u0783\u07a6\u0782\u07b0\u078b\u07ab",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 191,
		name: "Maavandhoo",
		name_dv: "\u0789\u07a7\u0788\u07a6\u0782\u07b0\u078b\u07ab",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 192,
		name: "Maavelavaru",
		name_dv: "\u0789\u07a7\u0788\u07ac\u078d\u07a6\u0788\u07a6\u0783\u07aa",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 193,
		name: "Medhafushi",
		name_dv: "\u0789\u07ac\u078b\u07a6\u078a\u07aa\u0781\u07a8",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 194,
		name: "Medhufaru",
		name_dv: "\u0789\u07ac\u078b\u07aa\u078a\u07a6\u0783\u07aa",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 195,
		name: "Minaavaru",
		name_dv: "\u0789\u07a8\u0782\u07a7\u0788\u07a6\u0783\u07aa",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 196,
		name: "Orimasvaru",
		name_dv:
			"\u0787\u07ae\u0783\u07a8\u0789\u07a6\u0790\u07b0\u0788\u07a6\u0783\u07aa",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 197,
		name: "Orivaru",
		name_dv: "\u0787\u07ae\u0783\u07a8\u0788\u07a6\u0783\u07aa",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 198,
		name: "Orivarukudarah",
		name_dv:
			"\u0787\u07ae\u0783\u07a8\u0788\u07a6\u0783\u07aa\u0786\u07aa\u0791\u07a6\u0783\u07a6\u0781\u07b0",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 199,
		name: "Raafushi",
		name_dv: "\u0783\u07a7\u078a\u07aa\u0781\u07a8",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 200,
		name: "Raalhugadu",
		name_dv: "\u0783\u07a7\u0785\u07aa\u078e\u07a6\u0791\u07aa",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 201,
		name: "Raalhulaakolhu",
		name_dv: "\u0783\u07a7\u0785\u07aa\u078d\u07a7\u0786\u07ae\u0785\u07aa",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 202,
		name: "Randheli",
		name_dv: "\u0783\u07a6\u0782\u07b0\u078b\u07ac\u078d\u07a8",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 203,
		name: "Thaburudhoo",
		name_dv: "\u078c\u07a6\u0782\u0784\u07aa\u0783\u07aa\u078b\u07ab",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 204,
		name: "Thaburudhuffushi",
		name_dv:
			"\u078c\u07a6\u0782\u0784\u07aa\u0783\u07aa\u078b\u07aa\u0787\u07b0\u078a\u07aa\u0781\u07a8",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 205,
		name: "Tholhendhoo",
		name_dv: "\u078c\u07ae\u0785\u07ac\u0782\u07b0\u078b\u07ab",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 206,
		name: "Thoshigandukolhu",
		name_dv:
			"\u078c\u07ae\u0781\u07a8\u078e\u07a6\u0782\u0791\u07aa\u0786\u07ae\u0785\u07aa",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 207,
		name: "Vavathi",
		name_dv: "\u0788\u07a6\u0788\u07a6\u078c\u07a8",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 208,
		name: "Vihafaru",
		name_dv: "\u0788\u07a8\u0780\u07a6\u078a\u07a6\u0783\u07aa",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 209,
		name: "Vihafarufinolhu",
		name_dv:
			"\u0788\u07a8\u0780\u07a6\u078a\u07a6\u0783\u07aa\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 4,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 210,
		name: "Alifushi",
		name_dv: "\u0787\u07a6\u078d\u07a8\u078a\u07aa\u0781\u07a8",
		atoll_id: 5,
		island_code: 2401,
		is_inhibited: 1,
	},
	{
		id: 211,
		name: "Vaadhoo",
		name_dv: "\u0788\u07a7\u078b\u07ab",
		atoll_id: 5,
		island_code: 2402,
		is_inhibited: 1,
	},
	{
		id: 212,
		name: "Rasgetheemu",
		name_dv: "\u0783\u07a6\u0790\u07b0\u078e\u07ac\u078c\u07a9\u0789\u07aa",
		atoll_id: 5,
		island_code: 2403,
		is_inhibited: 1,
	},
	{
		id: 213,
		name: "Angolhitheemu",
		name_dv:
			"\u0787\u07a6\u0782\u078e\u07ae\u0785\u07a8\u078c\u07a9\u0789\u07aa",
		atoll_id: 5,
		island_code: 2404,
		is_inhibited: 1,
	},
	{
		id: 214,
		name: "Gaaudoodhoo",
		name_dv: "\u078e\u07a7\u0787\u07aa\u0782\u0791\u07ab\u078b\u07ab",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 215,
		name: "Ungoofaaru",
		name_dv: "\u0787\u07aa\u0782\u078e\u07ab\u078a\u07a7\u0783\u07aa",
		atoll_id: 5,
		island_code: 2407,
		is_inhibited: 1,
	},
	{
		id: 216,
		name: "Kadholhudhoo",
		name_dv: "\u0786\u07a6\u0782\u078b\u07ae\u0785\u07aa\u078b\u07ab",
		atoll_id: 5,
		island_code: 2408,
		is_inhibited: 0,
	},
	{
		id: 217,
		name: "Maakurathu",
		name_dv: "\u0789\u07a7\u0786\u07aa\u0783\u07a6\u078c\u07aa",
		atoll_id: 5,
		island_code: 2409,
		is_inhibited: 1,
	},
	{
		id: 218,
		name: "Rasmaadhoo",
		name_dv: "\u0783\u07a6\u0790\u07b0\u0789\u07a7\u078b\u07ab",
		atoll_id: 5,
		island_code: 2410,
		is_inhibited: 1,
	},
	{
		id: 219,
		name: "Innamaadhoo",
		name_dv: "\u0787\u07a8\u0782\u07b0\u0782\u07a6\u0789\u07a7\u078b\u07ab",
		atoll_id: 5,
		island_code: 2411,
		is_inhibited: 1,
	},
	{
		id: 220,
		name: "Maduvvari",
		name_dv: "\u0789\u07a6\u0791\u07aa\u0787\u07b0\u0788\u07a6\u0783\u07a9",
		atoll_id: 5,
		island_code: 2412,
		is_inhibited: 1,
	},
	{
		id: 221,
		name: "Inguraidhoo",
		name_dv:
			"\u0787\u07a8\u0782\u078e\u07aa\u0783\u07a6\u0787\u07a8\u078b\u07ab",
		atoll_id: 5,
		island_code: 2413,
		is_inhibited: 1,
	},
	{
		id: 222,
		name: "Fainu",
		name_dv: "\u078a\u07a6\u0787\u07a8\u0782\u07aa",
		atoll_id: 5,
		island_code: 2414,
		is_inhibited: 1,
	},
	{
		id: 223,
		name: "Meedhoo",
		name_dv: "\u0789\u07a9\u078b\u07ab",
		atoll_id: 5,
		island_code: 2416,
		is_inhibited: 1,
	},
	{
		id: 224,
		name: "Kinolhas",
		name_dv: "\u0786\u07a8\u0782\u07ae\u0785\u07a6\u0790\u07b0",
		atoll_id: 5,
		island_code: 2417,
		is_inhibited: 1,
	},
	{
		id: 225,
		name: "Hulhudhuffaaru",
		name_dv:
			"\u0780\u07aa\u0785\u07aa\u078b\u07aa\u0787\u07b0\u078a\u07a7\u0783\u07aa",
		atoll_id: 5,
		island_code: 2418,
		is_inhibited: 1,
	},
	{
		id: 226,
		name: "Ifuru",
		name_dv: "\u0787\u07a8\u078a\u07aa\u0783\u07aa",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 1,
	},
	{
		id: 227,
		name: "Meedhupparu",
		name_dv: "\u0789\u07a9\u078b\u07aa\u0787\u07b0\u0795\u07a6\u0783\u07aa",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 1,
	},
	{
		id: 228,
		name: "Aarah",
		name_dv: "\u0787\u07a7\u0783\u07a6\u0781\u07b0",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 229,
		name: "Angaagiri",
		name_dv: "\u0787\u07a6\u0782\u07b0\u078e\u07a7\u078e\u07a8\u0783\u07a8",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 230,
		name: "Arilundhoo",
		name_dv: "\u0787\u07a6\u0783\u07a8\u078d\u07aa\u0782\u07b0\u078b\u07ab",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 231,
		name: "Badaveri",
		name_dv: "\u0784\u07a6\u0782\u0791\u07a6\u0788\u07ac\u0783\u07a8",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 232,
		name: "Bodufarufinolhu",
		name_dv:
			"\u0784\u07ae\u0791\u07aa\u078a\u07a6\u0783\u07aa\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 233,
		name: "Bodufenmaaembudhoo",
		name_dv:
			"\u0784\u07ae\u0791\u07aa\u078a\u07ac\u0782\u07b0\u0789\u07a7\u0787\u07ac\u0782\u0784\u07ab\u078b\u07ab",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 234,
		name: "Bodufushi",
		name_dv: "\u0784\u07ae\u0791\u07aa\u078a\u07aa\u0781\u07a8",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 235,
		name: "Boduhuraa",
		name_dv: "\u0784\u07ae\u0791\u07aa\u0780\u07aa\u0783\u07a7",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 236,
		name: "Dheburidheythereyvaadhoo",
		name_dv:
			"\u078b\u07ac\u0784\u07aa\u0783\u07a8\u078b\u07ad\u078c\u07ac\u0783\u07ad\u0788\u07a7\u078b\u07ab",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 237,
		name: "Dhekunumaafaru",
		name_dv:
			"\u078b\u07ac\u0786\u07aa\u0782\u07aa\u0789\u07a7\u078a\u07a6\u0783\u07aa",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 238,
		name: "Dhigali",
		name_dv: "\u078b\u07a8\u078e\u07a6\u078d\u07a8",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 239,
		name: "Dhikkuredhdhoo",
		name_dv:
			"\u078b\u07a8\u0787\u07b0\u0786\u07aa\u0783\u07ac\u0787\u07b0\u078b\u07ab",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 240,
		name: "Dhinnaafushi",
		name_dv: "\u078b\u07a8\u0782\u07b0\u0782\u07a7\u078a\u07aa\u0781\u07a8",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 241,
		name: "Dhoragali",
		name_dv: "\u078b\u07ae\u0783\u07a6\u0782\u078e\u07a6\u078d\u07a8",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 242,
		name: "Dhuvaafaru",
		name_dv: "\u078b\u07aa\u0788\u07a7\u078a\u07a6\u0783\u07aa",
		atoll_id: 5,
		island_code: 2419,
		is_inhibited: 1,
	},
	{
		id: 243,
		name: "Dhuvaafaruhuraa",
		name_dv:
			"\u078b\u07aa\u0788\u07a7\u078a\u07a6\u0783\u07aa\u0780\u07aa\u0783\u07a7",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 244,
		name: "Ehthigandujehihuraa",
		name_dv:
			"\u0787\u07ac\u078c\u07a8\u078e\u07a6\u0782\u0791\u07aa\u0796\u07ac\u0780\u07a8\u0780\u07aa\u0783\u07a7",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 245,
		name: "Ehthigili",
		name_dv:
			"\u0787\u07ac\u0787\u07b0\u078c\u07a8\u078e\u07a8\u0782\u078d\u07a8",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 246,
		name: "Ekurufushifinolhu",
		name_dv:
			"\u0787\u07ac\u0786\u07aa\u0783\u07aa\u078a\u07aa\u0781\u07a8\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 247,
		name: "Faarufushi",
		name_dv: "\u078a\u07a7\u0783\u07aa\u078a\u07aa\u0781\u07a8",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 248,
		name: "Fasgandufaru",
		name_dv:
			"\u078a\u07a6\u0790\u07b0\u078e\u07a6\u0782\u0791\u07aa\u078a\u07a6\u0783\u07aa",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 249,
		name: "Fasmendhoo",
		name_dv: "\u078a\u07a6\u0790\u07b0\u0789\u07ac\u0782\u07b0\u078b\u07ab",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 250,
		name: "Fenfushi",
		name_dv: "\u078a\u07ac\u0782\u07b0\u078a\u07aa\u0781\u07a8",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 251,
		name: "Filaidhoo",
		name_dv: "\u078a\u07a8\u078d\u07a6\u0787\u07a8\u078b\u07ab",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 252,
		name: "Fuggiri",
		name_dv: "\u078a\u07aa\u0787\u07b0\u078e\u07a8\u0783\u07a8",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 253,
		name: "Furaveri",
		name_dv: "\u078a\u07aa\u0783\u07a6\u0788\u07ac\u0783\u07a8",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 254,
		name: "Gaaudoodhoo",
		name_dv: "\u078e\u07a7\u0787\u07aa\u0782\u0791\u07ab\u078b\u07ab",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 255,
		name: "Gemana",
		name_dv: "\u078e\u07ac\u0789\u07a6\u0782\u07a6",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 256,
		name: "Giraavaaru",
		name_dv: "\u078e\u07a8\u0783\u07a7\u0788\u07a6\u0783\u07aa",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 257,
		name: "Goiymaru",
		name_dv: "\u078e\u07ae\u078c\u07b0\u0789\u07a6\u0783\u07aa",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 258,
		name: "Goyyafaru",
		name_dv: "\u078e\u07ae\u078c\u07b0\u0794\u07a6\u078a\u07a6\u0783\u07aa",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 259,
		name: "Gubolhi",
		name_dv: "\u078e\u07aa\u0782\u0784\u07ae\u0785\u07a8",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 260,
		name: "Bodu Haiykodi",
		name_dv:
			"\u0784\u07ae\u0791\u07aa\u0780\u07a6\u078c\u07b0\u0786\u07ae\u0791\u07a8",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 261,
		name: "Hiboodhoo",
		name_dv: "\u0780\u07a8\u0782\u0784\u07ab\u078b\u07ab",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 262,
		name: "Hiraveri",
		name_dv: "\u0780\u07a8\u0783\u07a6\u0788\u07ac\u0783\u07a8",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 263,
		name: "Hulhudhoo",
		name_dv: "\u0780\u07aa\u0785\u07aa\u078b\u07ab",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 264,
		name: "Huruvalhi",
		name_dv: "\u0780\u07aa\u0783\u07aa\u0788\u07a6\u0785\u07a8",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 265,
		name: "Kadoogadu",
		name_dv: "\u0786\u07a6\u0791\u07ab\u078e\u07a6\u0782\u0791\u07aa",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 266,
		name: "Kandhoomeehunge lhaabugali",
		name_dv:
			"\u0786\u07a6\u0782\u07b0\u078b\u07ab\u0789\u07a9\u0780\u07aa\u0782\u07b0\u078e\u07ac\u0785\u07a7\u0784\u07aa\u078e\u07a6\u078d\u07a8",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 267,
		name: "Kothaafaru",
		name_dv: "\u0786\u07ae\u078c\u07a7\u078a\u07a6\u0783\u07aa",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 268,
		name: "Kottefaru",
		name_dv: "\u0786\u07ae\u0781\u07b0\u0793\u07ac\u078a\u07a6\u0783\u07aa",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 269,
		name: "Kudafenmaaembudhoo",
		name_dv:
			"\u0786\u07aa\u0791\u07a6\u078a\u07ac\u0782\u07b0\u0789\u07a7\u0787\u07ac\u0782\u0784\u07ab\u078b\u07ab",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 270,
		name: "Kudafushi",
		name_dv: "\u0786\u07aa\u0791\u07a6\u078a\u07aa\u0781\u07a8",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 271,
		name: "Kudakurathu",
		name_dv: "\u0786\u07aa\u0791\u07a6\u0786\u07aa\u0783\u07a6\u078c\u07aa",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 272,
		name: "Kudalhosgiri",
		name_dv:
			"\u0786\u07aa\u0791\u07a6\u0785\u07ae\u0790\u07b0\u078e\u07a8\u0783\u07a8",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 273,
		name: "Kudathulhaadhoo",
		name_dv: "\u0786\u07aa\u0791\u07a6\u078c\u07aa\u0785\u07a7\u078b\u07ab",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 274,
		name: "Kukulhudhoo",
		name_dv: "\u0786\u07aa\u0786\u07aa\u0785\u07aa\u078b\u07ab",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 275,
		name: "Kuredhdhoo",
		name_dv: "\u0786\u07aa\u0783\u07ac\u0787\u07b0\u078b\u07ab",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 276,
		name: "Kuroshigiri",
		name_dv: "\u0786\u07aa\u0783\u07ae\u0781\u07a8\u078e\u07a8\u0783\u07a8",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 277,
		name: "Lhaabugali",
		name_dv: "\u0785\u07a7\u0782\u0784\u07aa\u078e\u07a6\u078d\u07a8",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 278,
		name: "Lhohi",
		name_dv: "\u0785\u07ae\u0780\u07a8",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 279,
		name: "Liboakandhoo",
		name_dv: "\u078d\u07a8\u0784\u07af\u0786\u07a6\u0782\u07b0\u078b\u07ab",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 280,
		name: "Lundhufushi",
		name_dv: "\u078d\u07aa\u0782\u07b0\u078b\u07aa\u078a\u07aa\u0781\u07a8",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 281,
		name: "Maamingili",
		name_dv: "\u0789\u07a7\u0789\u07a8\u0782\u078e\u07a8\u078d\u07a8",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 282,
		name: "Maamunagau",
		name_dv: "\u0789\u07a7\u0789\u07aa\u0782\u07a6\u078e\u07a6\u0787\u07aa",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 283,
		name: "Maamunagaufinolhu",
		name_dv:
			"\u0789\u07a7\u0789\u07aa\u0782\u07a6\u078e\u07a6\u0787\u07aa\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 284,
		name: "Maanenfushi",
		name_dv: "\u0789\u07a7\u0789\u07ac\u0782\u07b0\u078a\u07aa\u0781\u07a8",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 285,
		name: "Maashigiri",
		name_dv: "\u0789\u07a7\u0781\u07a8\u078e\u07a8\u0783\u07a8",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 286,
		name: "Madivaafaru",
		name_dv: "\u0789\u07a6\u0791\u07a8\u0788\u07a7\u078a\u07a6\u0783\u07aa",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 287,
		name: "Mahidhoo",
		name_dv: "\u0789\u07a6\u0780\u07a8\u078b\u07ab",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 288,
		name: "Meedhupparu",
		name_dv: "\u0789\u07a9\u078b\u07aa\u0787\u07b0\u0795\u07a6\u0783\u07aa",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 289,
		name: "Minaadhoo",
		name_dv: "\u0789\u07a8\u0782\u07a7\u078b\u07ab",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 290,
		name: "Mullaafushi",
		name_dv: "\u0789\u07aa\u0787\u07b0\u078d\u07a7\u078a\u07aa\u0781\u07a8",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 291,
		name: "Muravandhoo",
		name_dv: "\u0789\u07aa\u0783\u07a6\u0788\u07a6\u0782\u07b0\u078b\u07ab",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 292,
		name: "Neyo",
		name_dv: "\u0782\u07ac\u0794\u07ae",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 293,
		name: "Orimasfushi",
		name_dv:
			"\u0787\u07ae\u0783\u07a8\u0789\u07a6\u0790\u07b0\u078a\u07aa\u0781\u07a8",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 294,
		name: "Thaavathaa",
		name_dv: "\u078c\u07a7\u0788\u07a6\u078c\u07a7",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 295,
		name: "Ufulandhoo",
		name_dv: "\u0787\u07aa\u078a\u07aa\u078d\u07a6\u0782\u07b0\u078b\u07ab",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 296,
		name: "Ugulu",
		name_dv: "\u0787\u07aa\u0782\u078e\u07aa\u078d\u07aa",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 297,
		name: "Uthurumaafaru",
		name_dv:
			"\u0787\u07aa\u078c\u07aa\u0783\u07aa\u0789\u07a7\u078a\u07a6\u0783\u07aa",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 298,
		name: "Vaffushihuraa",
		name_dv:
			"\u0788\u07a6\u0781\u07b0\u078a\u07aa\u0781\u07a8\u0780\u07aa\u0783\u07a7",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 299,
		name: "Vahfushi",
		name_dv: "\u0788\u07a6\u0781\u07b0\u078a\u07aa\u0781\u07a8",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 300,
		name: "Vandhoo",
		name_dv: "\u0788\u07a6\u0782\u07b0\u078b\u07ab",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 301,
		name: "Veyveh",
		name_dv: "\u0788\u07ad\u0788\u07a6\u0781\u07b0",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 302,
		name: "Villingili",
		name_dv: "\u0788\u07a8\u078d\u07a8\u0782\u078e\u07a8\u078d\u07a8",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 303,
		name: "Kudarikilu",
		name_dv: "\u0786\u07aa\u0791\u07a6\u0783\u07a8\u0786\u07a8\u078d\u07aa",
		atoll_id: 6,
		island_code: 2501,
		is_inhibited: 1,
	},
	{
		id: 304,
		name: "Kamadhoo",
		name_dv: "\u0786\u07a6\u0789\u07a6\u078b\u07ab",
		atoll_id: 6,
		island_code: 2502,
		is_inhibited: 1,
	},
	{
		id: 305,
		name: "Kendhoo",
		name_dv: "\u0786\u07ac\u0782\u07b0\u078b\u07ab",
		atoll_id: 6,
		island_code: 2503,
		is_inhibited: 1,
	},
	{
		id: 306,
		name: "Maaddoo",
		name_dv: "\u0789\u07a7\u0787\u07b0\u0791\u07ab",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 307,
		name: "Udoodhoo",
		name_dv: "\u0787\u07aa\u078b\u07ab\u078b\u07ab",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 308,
		name: "Kihaadhoo",
		name_dv: "\u0786\u07a8\u0780\u07a7\u078b\u07ab",
		atoll_id: 6,
		island_code: 2506,
		is_inhibited: 1,
	},
	{
		id: 309,
		name: "Dhonfanu",
		name_dv: "\u078b\u07ae\u0782\u07b0\u078a\u07a6\u0782\u07aa",
		atoll_id: 6,
		island_code: 2507,
		is_inhibited: 1,
	},
	{
		id: 310,
		name: "Dharavandhoo",
		name_dv: "\u078b\u07a6\u0783\u07a6\u0788\u07a6\u0782\u07b0\u078b\u07ab",
		atoll_id: 6,
		island_code: 2508,
		is_inhibited: 1,
	},
	{
		id: 311,
		name: "Maalhos",
		name_dv: "\u0789\u07a7\u0785\u07ae\u0790\u07b0",
		atoll_id: 6,
		island_code: 2509,
		is_inhibited: 1,
	},
	{
		id: 312,
		name: "Eydhafushi",
		name_dv: "\u0787\u07ad\u078b\u07a6\u078a\u07aa\u0781\u07a8",
		atoll_id: 6,
		island_code: 2510,
		is_inhibited: 1,
	},
	{
		id: 313,
		name: "Funadhoo",
		name_dv: "\u078a\u07aa\u0782\u07a6\u078b\u07ab",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 314,
		name: "Thulhaadhoo",
		name_dv: "\u078c\u07aa\u0785\u07a7\u078b\u07ab",
		atoll_id: 6,
		island_code: 2512,
		is_inhibited: 1,
	},
	{
		id: 315,
		name: "Hithaadhoo",
		name_dv: "\u0780\u07a8\u078c\u07a7\u078b\u07ab",
		atoll_id: 6,
		island_code: 2513,
		is_inhibited: 1,
	},
	{
		id: 316,
		name: "Fulhadhoo",
		name_dv: "\u078a\u07aa\u0785\u07a6\u078b\u07ab",
		atoll_id: 6,
		island_code: 2514,
		is_inhibited: 1,
	},
	{
		id: 317,
		name: "Fehendhoo",
		name_dv: "\u078a\u07ac\u0780\u07ac\u0782\u07b0\u078b\u07ab",
		atoll_id: 6,
		island_code: 2515,
		is_inhibited: 1,
	},
	{
		id: 318,
		name: "Goidhoo",
		name_dv: "\u078e\u07ae\u0787\u07a8\u078b\u07ab",
		atoll_id: 6,
		island_code: 2516,
		is_inhibited: 1,
	},
	{
		id: 319,
		name: "Landaagiraavaru",
		name_dv:
			"\u078d\u07a6\u0782\u0791\u07a7\u078e\u07a8\u0783\u07a7\u0788\u07a6\u0783\u07aa",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 320,
		name: "Dhunikolhu",
		name_dv: "\u078b\u07aa\u0782\u07a8\u0786\u07ae\u0785\u07aa",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 321,
		name: "Kihaadhuffaru",
		name_dv:
			"\u0786\u07a8\u0780\u07a7\u078b\u07aa\u0787\u07b0\u078a\u07a6\u0783\u07aa",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 322,
		name: "Fonimagoodhoo",
		name_dv: "\u078a\u07ae\u0782\u07a8\u0789\u07a6\u078e\u07ab\u078b\u07ab",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 323,
		name: "Kunfunadhoo",
		name_dv: "\u0786\u07aa\u0782\u07b0\u078a\u07aa\u0782\u07a6\u078b\u07ab",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 324,
		name: "Horubadhoo",
		name_dv: "\u0780\u07ae\u0783\u07aa\u0784\u07a6\u0782\u078b\u07ab",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 325,
		name: "Ahivahfushi",
		name_dv:
			"\u0787\u07a6\u0780\u07a8\u0788\u07a6\u0781\u07b0\u078a\u07aa\u0781\u07a8",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 326,
		name: "Aidhoo",
		name_dv: "\u0787\u07a6\u0787\u07a8\u078b\u07ab",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 327,
		name: "Anhenunfushi",
		name_dv:
			"\u0787\u07a6\u0782\u07b0\u0780\u07ac\u0782\u07b0\u078a\u07aa\u0781\u07a8",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 328,
		name: "Balhufinolhu",
		name_dv: "\u0784\u07a6\u0785\u07aa\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 329,
		name: "Bathalaa",
		name_dv: "\u0784\u07a6\u078c\u07a6\u078d\u07a7",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 330,
		name: "Bathalaahuraa",
		name_dv: "\u0784\u07a6\u078c\u07a6\u078d\u07a7\u0780\u07aa\u0783\u07a7",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 331,
		name: "Boadhaafusheefinolhu",
		name_dv:
			"\u0784\u07af\u078b\u07a7\u078a\u07aa\u0781\u07a9\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 332,
		name: "Bodufinolhu",
		name_dv: "\u0784\u07ae\u0791\u07aa\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 333,
		name: "Boifushi",
		name_dv: "\u0784\u07ae\u078c\u07b0\u078a\u07aa\u0781\u07a8",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 334,
		name: "Dhakandhoo",
		name_dv: "\u078b\u07a6\u0786\u07a6\u0782\u078b\u07ab",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 335,
		name: "Dhandhoo",
		name_dv: "\u078b\u07a6\u0782\u07b0\u078b\u07ab",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 336,
		name: "Dhigudhefaru",
		name_dv: "\u078b\u07a8\u078e\u07aa\u078b\u07ac\u078a\u07a6\u0783\u07aa",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 337,
		name: "Dhigufaruvinagandu",
		name_dv:
			"\u078b\u07a8\u078e\u07aa\u078a\u07a6\u0783\u07aa\u0788\u07a8\u0782\u07a6\u078e\u07a6\u0782\u0791\u07aa",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 338,
		name: "Dhoogandufinolhu",
		name_dv:
			"\u078b\u07ab\u078e\u07a6\u0782\u0791\u07aa\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 339,
		name: "Embudhoo",
		name_dv: "\u0787\u07ac\u0782\u0784\u07ab\u078b\u07ab",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 340,
		name: "Fareedhaafinolhu",
		name_dv:
			"\u078a\u07a6\u0783\u07a9\u078b\u07a7\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 341,
		name: "Fares",
		name_dv: "\u078a\u07a6\u0783\u07ac\u0790\u07b0",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 342,
		name: "Fehenfaru",
		name_dv: "\u078a\u07ac\u0780\u07ac\u0782\u07b0\u078a\u07a6\u0783\u07aa",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 343,
		name: "Finolhas",
		name_dv: "\u078a\u07a8\u0782\u07ae\u0785\u07a6\u0790\u07b0",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 344,
		name: "Funadhoo",
		name_dv: "\u078a\u07aa\u0782\u07a6\u078b\u07ab",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 345,
		name: "Gaagadufaruhuraa",
		name_dv:
			"\u078e\u07a7\u078e\u07a6\u0782\u0791\u07aa\u078a\u07a6\u0783\u07aa\u0780\u07aa\u0783\u07a7",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 346,
		name: "Gaaviligili",
		name_dv:
			"\u078e\u07a7\u0788\u07a8\u078d\u07a8\u0782\u078e\u07a8\u078d\u07a8",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 347,
		name: "Gemendhoo",
		name_dv: "\u078e\u07ac\u0789\u07ac\u0782\u07b0\u078b\u07ab",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 348,
		name: "Hanifaru",
		name_dv: "\u0780\u07a6\u0782\u07a8\u078a\u07a6\u0783\u07aa",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 349,
		name: "Hibalhidhoo",
		name_dv: "\u0780\u07a8\u0784\u07a6\u0785\u07a8\u078b\u07ab",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 350,
		name: "Hirundhoo",
		name_dv: "\u0780\u07a8\u0783\u07aa\u0782\u078b\u07ab",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 351,
		name: "Hulhudhoo",
		name_dv: "\u0780\u07aa\u0785\u07aa\u078b\u07ab",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 352,
		name: "Innafushi",
		name_dv: "\u0787\u07a8\u0782\u07b0\u0782\u07a6\u078a\u07aa\u0781\u07a8",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 353,
		name: "Kanufusheefinolhu",
		name_dv:
			"\u0786\u07a6\u0782\u07aa\u078a\u07aa\u0781\u07a9\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 354,
		name: "Kanufusheegaathufinolhu",
		name_dv:
			"\u0786\u07a6\u0782\u07aa\u078a\u07aa\u0781\u07a9\u078e\u07a7\u078c\u07aa\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 355,
		name: "Kanufushi",
		name_dv: "\u0786\u07a6\u0782\u07aa\u078a\u07aa\u0781\u07a8",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 356,
		name: "Kashidhoo",
		name_dv: "\u0786\u07a6\u0781\u07a8\u078b\u07ab",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 357,
		name: "Kashidhuhfarufinolhu",
		name_dv:
			"\u0786\u07a6\u0781\u07a8\u078b\u07aa\u0787\u07b0\u078a\u07a6\u0783\u07aa\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 358,
		name: "Keyodhoo",
		name_dv: "\u0786\u07ac\u0794\u07ae\u078b\u07ab",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 359,
		name: "Kihavah Haruvalhi",
		name_dv:
			"\u0786\u07a8\u0780\u07a6\u0787\u07b0\u0788\u07a6\u0781\u07b0\u0780\u07a6\u0783\u07aa\u0788\u07a6\u0785\u07a8",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 360,
		name: "Kudadhoo",
		name_dv: "\u0786\u07aa\u0791\u07a6\u078b\u07ab",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 361,
		name: "Maaddoo",
		name_dv: "\u0789\u07a7\u0787\u07b0\u0791\u07ab",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 362,
		name: "Maaddoohulhudhoo",
		name_dv:
			"\u0789\u07a7\u0787\u07b0\u0791\u07ab\u0780\u07aa\u0785\u07aa\u078b\u07ab",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 363,
		name: "Maafusheefinolhu",
		name_dv:
			"\u0789\u07a7\u078a\u07aa\u0781\u07a9\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 364,
		name: "Maamaduvvaree",
		name_dv:
			"\u0789\u07a7\u0789\u07a6\u0791\u07aa\u0787\u07b0\u0788\u07a6\u0783\u07a9",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 365,
		name: "Maarikili",
		name_dv: "\u0789\u07a7\u0783\u07a8\u0786\u07a8\u078d\u07a8",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 366,
		name: "Madhirivaadhoo",
		name_dv: "\u0789\u07a7\u078b\u07a8\u0783\u07a8\u0788\u07a7\u078b\u07ab",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 367,
		name: "Medhufinolhu",
		name_dv: "\u0789\u07ac\u078b\u07aa\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 368,
		name: "Medhufinolhu",
		name_dv: "\u0789\u07ac\u078b\u07aa\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 369,
		name: "Mendhoo",
		name_dv: "\u0789\u07ac\u0782\u07b0\u078b\u07ab",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 370,
		name: "Milaidhoo",
		name_dv: "\u0789\u07a8\u078d\u07a6\u0787\u07a8\u078b\u07ab",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 371,
		name: "Miriandhoo",
		name_dv: "\u0789\u07a8\u0783\u07a8\u0787\u07a6\u0782\u07b0\u078b\u07ab",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 372,
		name: "Mudhdhoo",
		name_dv: "\u0789\u07aa\u0787\u07b0\u078b\u07ab",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 373,
		name: "Muthaafushi",
		name_dv: "\u0789\u07aa\u078c\u07a7\u078a\u07aa\u0781\u07a8",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 374,
		name: "Nelivarufinolhu",
		name_dv:
			"\u0782\u07ac\u078d\u07a8\u0788\u07a6\u0783\u07aa\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 375,
		name: "Nibiligaa",
		name_dv: "\u0782\u07a8\u0784\u07a8\u078d\u07a8\u078e\u07a7",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 376,
		name: "Olhugiri",
		name_dv: "\u0787\u07ae\u0785\u07aa\u078e\u07a8\u0783\u07a8",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 377,
		name: "Fulhadhoo rahkairi finolhu",
		name_dv:
			"\u078a\u07aa\u0785\u07a6\u078b\u07ab \u0783\u07a6\u0781\u07b0\u0786\u07a6\u0787\u07a8\u0783\u07a8 \u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 378,
		name: "Thiladhoo",
		name_dv: "\u078c\u07a8\u078d\u07a6\u078b\u07ab",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 379,
		name: "Udoodhoo",
		name_dv: "\u0787\u07aa\u0782\u0791\u07ab\u078b\u07ab",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 380,
		name: "Ufuligiri",
		name_dv: "\u0787\u07aa\u078a\u07aa\u078d\u07a8\u078e\u07a8\u0783\u07a8",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 381,
		name: "Vakkaru",
		name_dv: "\u0788\u07a6\u0787\u07b0\u0786\u07a6\u0783\u07aa",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 382,
		name: "Veyofushi",
		name_dv: "\u0788\u07ac\u0794\u07ae\u078a\u07aa\u0781\u07a8",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 383,
		name: "Vinaneiyfaruhuraa",
		name_dv:
			"\u0788\u07a8\u0782\u07a6\u0782\u07ac\u078c\u07b0\u078a\u07a6\u0783\u07aa\u0780\u07aa\u0783\u07a7",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 384,
		name: "Voavah",
		name_dv: "\u0788\u07af\u0788\u07a6\u0787\u07b0",
		atoll_id: 6,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 385,
		name: "Hinnavaru",
		name_dv: "\u0780\u07a8\u0782\u07b0\u0782\u07a6\u0788\u07a6\u0783\u07aa",
		atoll_id: 7,
		island_code: 2601,
		is_inhibited: 1,
	},
	{
		id: 386,
		name: "Naifaru",
		name_dv: "\u0782\u07a6\u0787\u07a8\u078a\u07a6\u0783\u07aa",
		atoll_id: 7,
		island_code: 2602,
		is_inhibited: 1,
	},
	{
		id: 387,
		name: "Kurendhoo",
		name_dv: "\u0786\u07aa\u0783\u07ac\u0782\u07b0\u078b\u07ab",
		atoll_id: 7,
		island_code: 2603,
		is_inhibited: 1,
	},
	{
		id: 388,
		name: "Olhuvelifushi",
		name_dv:
			"\u0787\u07ae\u0785\u07aa\u0788\u07ac\u078d\u07a8\u078a\u07aa\u0781\u07a8",
		atoll_id: 7,
		island_code: 2604,
		is_inhibited: 1,
	},
	{
		id: 389,
		name: "Maafilaafushi",
		name_dv: "\u0789\u07a7\u078a\u07a8\u078d\u07a7\u078a\u07aa\u0781\u07a8",
		atoll_id: 7,
		island_code: 2605,
		is_inhibited: 1,
	},
	{
		id: 390,
		name: "Felivaru",
		name_dv: "\u078a\u07ac\u078d\u07a8\u0788\u07a6\u0783\u07aa",
		atoll_id: 7,
		island_code: null,
		is_inhibited: 1,
	},
	{
		id: 391,
		name: "Kanuhuraa",
		name_dv: "\u0786\u07a6\u0782\u07aa\u0780\u07aa\u0783\u07a7",
		atoll_id: 7,
		island_code: 3908,
		is_inhibited: 0,
	},
	{
		id: 392,
		name: "Komandoo",
		name_dv: "\u0786\u07ae\u0789\u07a6\u0782\u07b0\u0791\u07ab",
		atoll_id: 7,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 393,
		name: "Kuredhdhoo",
		name_dv: "\u0786\u07aa\u0783\u07ac\u0787\u07b0\u078b\u07ab",
		atoll_id: 7,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 394,
		name: "Madhiriguraidhoo",
		name_dv:
			"\u0789\u07a6\u078b\u07a8\u0783\u07a8\u078e\u07aa\u0783\u07a6\u0787\u07a8\u078b\u07ab",
		atoll_id: 7,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 395,
		name: "Alhigaa",
		name_dv: "\u0787\u07a6\u0785\u07a8\u078e\u07a7",
		atoll_id: 7,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 396,
		name: "Bodufinolhu",
		name_dv: "\u0784\u07ae\u0791\u07aa\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 7,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 397,
		name: "Bovalhafushi",
		name_dv: "\u0784\u07ae\u0788\u07a6\u0785\u07a6\u078a\u07aa\u0781\u07a8",
		atoll_id: 7,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 398,
		name: "Dhashugirifinolhu",
		name_dv:
			"\u078b\u07a6\u0781\u07aa\u078e\u07a8\u0783\u07a8\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 7,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 399,
		name: "Dheruhfinolhu",
		name_dv:
			"\u078b\u07ac\u0783\u07aa\u0787\u07b0\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 7,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 400,
		name: "Dhidhdhoo",
		name_dv: "\u078b\u07a8\u0787\u07b0\u078b\u07ab",
		atoll_id: 7,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 401,
		name: "Dhirunbaafushi",
		name_dv:
			"\u078b\u07a8\u0783\u07aa\u0782\u0784\u07a7\u078a\u07aa\u0781\u07a8",
		atoll_id: 7,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 402,
		name: "Faadhoo",
		name_dv: "\u078a\u07a7\u078b\u07ab",
		atoll_id: 7,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 403,
		name: "Fainuaadhamhuraa",
		name_dv:
			"\u078a\u07a6\u0787\u07a8\u0782\u07aa\u0787\u07a7\u078b\u07a6\u0789\u07b0\u0780\u07aa\u0783\u07a7",
		atoll_id: 7,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 404,
		name: "Farufinolhu",
		name_dv: "\u078a\u07a6\u0783\u07aa\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 7,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 405,
		name: "Fehigili",
		name_dv: "\u078a\u07ac\u0780\u07a8\u078e\u07a8\u078d\u07a8",
		atoll_id: 7,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 406,
		name: "Fushifaru",
		name_dv: "\u078a\u07aa\u0781\u07a8\u078a\u07a6\u0783\u07aa",
		atoll_id: 7,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 407,
		name: "Gaaerifaru",
		name_dv: "\u078e\u07a7\u0787\u07ac\u0783\u07a8\u078a\u07a6\u0783\u07aa",
		atoll_id: 7,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 408,
		name: "Govaafushi",
		name_dv: "\u078e\u07ae\u0788\u07a7\u078a\u07aa\u0781\u07a9",
		atoll_id: 7,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 409,
		name: "Hudhufushi",
		name_dv: "\u0780\u07aa\u078b\u07aa\u078a\u07aa\u0781\u07a8",
		atoll_id: 7,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 410,
		name: "Huruvalhi",
		name_dv: "\u0780\u07a6\u0783\u07aa\u0788\u07a6\u0785\u07a8",
		atoll_id: 7,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 411,
		name: "Innahuraa",
		name_dv: "\u0787\u07a8\u0782\u07b0\u0782\u07a6\u0780\u07aa\u0783\u07a7",
		atoll_id: 7,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 412,
		name: "Kalhumanjehuraa",
		name_dv:
			"\u0786\u07a6\u0785\u07aa\u0789\u07a6\u0782\u07b0\u0796\u07ac\u0780\u07aa\u0783\u07a7",
		atoll_id: 7,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 413,
		name: "Kanifushi",
		name_dv: "\u0786\u07a6\u0782\u07a8\u078a\u07aa\u0781\u07a8",
		atoll_id: 7,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 414,
		name: "Lhohi",
		name_dv: "\u0785\u07ae\u0780\u07a8",
		atoll_id: 7,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 415,
		name: "Lhosalafushi",
		name_dv: "\u0785\u07ae\u0790\u07a6\u078d\u07a6\u078a\u07aa\u0781\u07a8",
		atoll_id: 7,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 416,
		name: "Maakoa",
		name_dv: "\u0789\u07a7\u0786\u07ae\u0787\u07ac",
		atoll_id: 7,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 417,
		name: "Maavaafushi",
		name_dv: "\u0789\u07a7\u0788\u07a7\u078a\u07aa\u0781\u07a8",
		atoll_id: 7,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 418,
		name: "Maabinhuraa",
		name_dv: "\u0789\u07a7\u0784\u07a8\u0782\u07b0\u0780\u07aa\u0783\u07a7",
		atoll_id: 7,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 419,
		name: "Madivaru",
		name_dv: "\u0789\u07a6\u0791\u07a8\u0788\u07a6\u0783\u07aa",
		atoll_id: 7,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 420,
		name: "Maduvvari",
		name_dv: "\u0789\u07a6\u0791\u07aa\u0787\u07b0\u0788\u07a6\u0783\u07a9",
		atoll_id: 7,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 421,
		name: "Maidhoo",
		name_dv: "\u0789\u07a6\u0787\u07a8\u078b\u07ab",
		atoll_id: 7,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 422,
		name: "Medhaadihuraa",
		name_dv: "\u0789\u07ac\u078b\u07a7\u0791\u07a8\u0780\u07aa\u0783\u07a7",
		atoll_id: 7,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 423,
		name: "Medhafushi",
		name_dv: "\u0789\u07ac\u078b\u07a6\u078a\u07aa\u0781\u07a8",
		atoll_id: 7,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 424,
		name: "Meedhaahuraa",
		name_dv: "\u0789\u07a9\u078b\u07a7\u0780\u07aa\u0783\u07a7",
		atoll_id: 7,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 425,
		name: "Meyafushi",
		name_dv: "\u0789\u07ac\u0794\u07a6\u078a\u07aa\u0781\u07a8",
		atoll_id: 7,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 426,
		name: "Ookolhufinolhu",
		name_dv:
			"\u0787\u07ab\u0786\u07ae\u0785\u07aa\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 7,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 427,
		name: "Ruhelhifushi",
		name_dv: "\u0783\u07aa\u0780\u07ac\u0785\u07a8\u078a\u07aa\u0781\u07a8",
		atoll_id: 7,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 428,
		name: "Thilamaafushi",
		name_dv: "\u078c\u07a8\u078d\u07a6\u0789\u07a7\u078a\u07aa\u0781\u07a8",
		atoll_id: 7,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 429,
		name: "Uthuruhuraa",
		name_dv: "\u0787\u07aa\u078c\u07aa\u0783\u07aa\u0780\u07aa\u0783\u07a7",
		atoll_id: 7,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 430,
		name: "Varihuraa",
		name_dv: "\u0788\u07a6\u0783\u07a8\u0780\u07aa\u0783\u07a7",
		atoll_id: 7,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 431,
		name: "Vavvaru",
		name_dv: "\u0788\u07a6\u0781\u07b0\u0788\u07a6\u0783\u07aa",
		atoll_id: 7,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 432,
		name: "Vejvah",
		name_dv: "\u0788\u07ac\u0796\u07b0\u0788\u07a6\u0781\u07b0",
		atoll_id: 7,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 433,
		name: "Veligandu",
		name_dv: "\u0788\u07ac\u078d\u07a8\u078e\u07a6\u0782\u0791\u07aa",
		atoll_id: 7,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 434,
		name: "Vihafaru",
		name_dv: "\u0788\u07a8\u0780\u07a6\u078a\u07a6\u0783\u07aa",
		atoll_id: 7,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 435,
		name: "Kaashidhoo",
		name_dv: "\u0786\u07a7\u0781\u07a8\u078b\u07ab",
		atoll_id: 8,
		island_code: 2701,
		is_inhibited: 1,
	},
	{
		id: 436,
		name: "Gaafaru",
		name_dv: "\u078e\u07a7\u078a\u07a6\u0783\u07aa",
		atoll_id: 8,
		island_code: 2702,
		is_inhibited: 1,
	},
	{
		id: 437,
		name: "Dhiffushi",
		name_dv: "\u078b\u07a8\u0787\u07b0\u078a\u07aa\u0781\u07a8",
		atoll_id: 8,
		island_code: 2703,
		is_inhibited: 1,
	},
	{
		id: 438,
		name: "Thulusdhoo",
		name_dv: "\u078c\u07aa\u078d\u07aa\u0790\u07b0\u078b\u07ab",
		atoll_id: 8,
		island_code: 2704,
		is_inhibited: 1,
	},
	{
		id: 439,
		name: "Huraa",
		name_dv: "\u0780\u07aa\u0783\u07a7",
		atoll_id: 8,
		island_code: 2705,
		is_inhibited: 1,
	},
	{
		id: 440,
		name: "Himmafushi",
		name_dv: "\u0780\u07a8\u0782\u07b0\u0789\u07a6\u078a\u07aa\u0781\u07a8",
		atoll_id: 8,
		island_code: 2706,
		is_inhibited: 1,
	},
	{
		id: 441,
		name: "Gulhi",
		name_dv: "\u078e\u07aa\u0785\u07a8",
		atoll_id: 8,
		island_code: 2711,
		is_inhibited: 1,
	},
	{
		id: 442,
		name: "Maafushi",
		name_dv: "\u0789\u07a7\u078a\u07aa\u0781\u07a8",
		atoll_id: 8,
		island_code: 2712,
		is_inhibited: 1,
	},
	{
		id: 443,
		name: "Guraidhoo",
		name_dv: "\u078e\u07aa\u0783\u07a6\u0787\u07a8\u078b\u07ab",
		atoll_id: 8,
		island_code: 2713,
		is_inhibited: 1,
	},
	{
		id: 444,
		name: "Hulhule",
		name_dv: "\u0780\u07aa\u0785\u07aa\u078d\u07ac",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 445,
		name: "Thilafushi",
		name_dv: "\u078c\u07a8\u078d\u07a6\u078a\u07aa\u0781\u07a8",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 446,
		name: "Kuda Bandos",
		name_dv:
			"\u0786\u07aa\u0791\u07a6\u0784\u07a6\u0782\u0791\u07ae\u0790\u07b0",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 447,
		name: "Kanduoiygiri",
		name_dv:
			"\u0786\u07a6\u0782\u0791\u07aa\u0787\u07ae\u078c\u07b0\u078e\u07a8\u0783\u07a8",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 448,
		name: "Aarah",
		name_dv: "\u0787\u07a7\u0783\u07a6\u0781\u07b0",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 449,
		name: "Dhoonidhoo",
		name_dv: "\u078b\u07ab\u0782\u07a8\u078b\u07ab",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 450,
		name: "Funadhoo",
		name_dv: "\u078a\u07aa\u0782\u07a6\u078b\u07ab",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 451,
		name: "Girifushi",
		name_dv: "\u078e\u07a8\u0783\u07a8\u078a\u07aa\u0781\u07a8",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 452,
		name: "Gaamaadhoo",
		name_dv: "\u078e\u07a7\u0789\u07a7\u078b\u07ab",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 453,
		name: "Feydhoofinolhu",
		name_dv: "\u078a\u07ad\u078b\u07ab\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 454,
		name: "Asdhu",
		name_dv: "\u0787\u07a6\u0790\u07b0\u078b\u07ab",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 455,
		name: "Bandos",
		name_dv: "\u0784\u07a6\u0782\u0791\u07ae\u0790\u07b0",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 456,
		name: "Baros",
		name_dv: "\u0784\u07a6\u0783\u07ae\u0790\u07b0",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 457,
		name: "Biyaadhu",
		name_dv: "\u0784\u07a8\u0794\u07a7\u078b\u07ab",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 458,
		name: "Boduhithi",
		name_dv: "\u0784\u07ae\u0791\u07aa\u0780\u07a8\u078c\u07a8",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 459,
		name: "Bolifushi",
		name_dv: "\u0784\u07ae\u078d\u07a8\u078a\u07aa\u0781\u07a8",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 460,
		name: "Farukolhufushi",
		name_dv:
			"\u078a\u07a6\u0783\u07aa\u0786\u07ae\u0785\u07aa\u078a\u07aa\u0781\u07a8",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 461,
		name: "Rannalhi",
		name_dv: "\u0783\u07a6\u0782\u07b0\u0782\u07a7\u0785\u07a8",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 462,
		name: "Makunufushi",
		name_dv: "\u0789\u07a6\u0786\u07aa\u0782\u07aa\u078a\u07aa\u0781\u07a8",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 463,
		name: "Dhigufinohlu",
		name_dv: "\u078b\u07a8\u078e\u07aa\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 464,
		name: "Emboodhu",
		name_dv: "\u0787\u07ac\u0782\u0784\u07ab\u078b\u07ab",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 465,
		name: "Eriyadhoo",
		name_dv: "\u0787\u07ac\u0783\u07a8\u0794\u07a6\u078b\u07ab",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 466,
		name: "Fihaalhohi",
		name_dv: "\u078a\u07a8\u0780\u07a7\u0785\u07ae\u0780\u07a8",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 467,
		name: "Kuda Huraa",
		name_dv: "\u0786\u07aa\u0791\u07a6\u0780\u07aa\u0783\u07a7",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 468,
		name: "Furanafushi",
		name_dv: "\u078a\u07aa\u0783\u07a6\u0782\u07a6\u078a\u07aa\u0781\u07a8",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 469,
		name: "Bodufinolhu",
		name_dv: "\u0784\u07ae\u0791\u07aa\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 470,
		name: "Gasfinolhu",
		name_dv: "\u078e\u07a6\u0790\u07b0\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 471,
		name: "Giraavaru",
		name_dv: "\u078e\u07a8\u0783\u07a7\u0788\u07a6\u0783\u07aa",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 472,
		name: "Helegeli",
		name_dv: "\u0780\u07ac\u078d\u07ac\u0782\u078e\u07ac\u078d\u07a8",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 473,
		name: "Lankanfushi",
		name_dv:
			"\u078d\u07a6\u0782\u07b0\u0786\u07a6\u0782\u07b0\u078a\u07aa\u0781\u07a8",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 474,
		name: "Ihuru",
		name_dv: "\u0787\u07a8\u0780\u07aa\u0783\u07aa",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 475,
		name: "Kandoomafushi",
		name_dv:
			"\u0786\u07a6\u0782\u0791\u07ab\u0789\u07a7\u078a\u07aa\u0781\u07a8",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 476,
		name: "Kanifinolhu",
		name_dv: "\u0786\u07a6\u0782\u07a8\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 477,
		name: "Kudahithi",
		name_dv: "\u0786\u07aa\u0791\u07a6\u0780\u07a8\u078c\u07a8",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 478,
		name: "Vihamanaafushi",
		name_dv:
			"\u0788\u07a8\u0780\u07a6\u0789\u07a6\u0782\u07a7\u078a\u07aa\u0781\u07a8",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 479,
		name: "Velassaru",
		name_dv: "\u0788\u07ac\u078d\u07a6\u0790\u07a6\u0783\u07aa",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 480,
		name: "Lhohifushi",
		name_dv: "\u0785\u07ae\u0780\u07a8\u078a\u07aa\u0781\u07a8",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 481,
		name: "Mankunudhoo",
		name_dv: "\u0789\u07a6\u0786\u07aa\u0782\u07aa\u078b\u07ab",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 482,
		name: "Meerufenfushi",
		name_dv:
			"\u0789\u07a9\u0783\u07aa\u078a\u07ac\u0782\u07b0\u078a\u07aa\u0781\u07a8",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 483,
		name: "Nakatchafushi",
		name_dv:
			"\u0782\u07a6\u0786\u07a6\u0787\u07b0\u0797\u07a7\u078a\u07aa\u0781\u07a8",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 484,
		name: "Olhuveli",
		name_dv: "\u0787\u07ae\u0785\u07aa\u0788\u07ac\u078d\u07a8",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 485,
		name: "Veligandu Huraa",
		name_dv:
			"\u0788\u07ac\u078d\u07a8\u078e\u07a6\u0782\u0791\u07aa\u0780\u07aa\u0783\u07a7",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 486,
		name: "Lankanfinolhu",
		name_dv:
			"\u078d\u07a6\u0782\u07b0\u0786\u07a6\u0782\u07b0\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 487,
		name: "Medhufinolhu",
		name_dv: "\u0789\u07ac\u078b\u07aa\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 488,
		name: "Mahaanaelhi Huraa",
		name_dv:
			"\u0789\u07a6\u0780\u07a7\u0782\u07a6\u0787\u07ac\u0785\u07a8\u0780\u07aa\u0783\u07a7",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 489,
		name: "Ziyaaraiyfushi",
		name_dv:
			"\u0792\u07a8\u0794\u07a7\u0783\u07a6\u078c\u07b0\u078a\u07aa\u0781\u07a8",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 490,
		name: "Kanuoiy Huraa",
		name_dv:
			"\u0786\u07a6\u0782\u07aa\u0787\u07ae\u078c\u07b0\u0780\u07aa\u0783\u07a7",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 491,
		name: "Thulhagiri",
		name_dv: "\u078c\u07aa\u0785\u07a7\u078e\u07a8\u0783\u07a8",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 492,
		name: "Hambadhu",
		name_dv: "\u0780\u07a6\u0782\u0784\u07a6\u078b\u07ab",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 493,
		name: "Embudhu Finolhu",
		name_dv:
			"\u0787\u07ac\u0782\u0784\u07ab\u078b\u07ab \u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 494,
		name: "Vaadhu",
		name_dv: "\u0788\u07a7\u078b\u07ab",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 495,
		name: "Vabbinfaru",
		name_dv:
			"\u0788\u07a6\u0781\u07b0\u0784\u07a8\u0782\u07b0\u078a\u07a6\u0783\u07aa",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 496,
		name: "Vilivaru",
		name_dv: "\u0788\u07a8\u078d\u07a8\u0788\u07a6\u0783\u07aa",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 497,
		name: "Bodu Huraa",
		name_dv: "\u0784\u07ae\u0791\u07aa\u0780\u07aa\u0783\u07a7",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 498,
		name: "Bushy",
		name_dv: "\u0784\u07aa\u0781\u07a9",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 499,
		name: "Emboodhoo Finolhu",
		name_dv:
			"\u0787\u07ac\u0782\u0784\u07ab\u078b\u07ab\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 500,
		name: "Erruhhuraa",
		name_dv:
			"\u0787\u07ac\u0787\u07b0\u0783\u07aa\u0787\u07b0\u0780\u07aa\u0783\u07a7",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 501,
		name: "Farukolhufushi",
		name_dv:
			"\u078a\u07a6\u0783\u07aa\u0786\u07ae\u0785\u07aa\u078a\u07aa\u0781\u07a8",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 502,
		name: "Feydhoo",
		name_dv: "\u078a\u07ad\u078b\u07ab",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 503,
		name: "Hembadhoo",
		name_dv: "\u0780\u07ac\u0782\u0784\u07a6\u078b\u07ab",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 504,
		name: "Kaduoiygiri",
		name_dv:
			"\u0786\u07a6\u0782\u0791\u07aa\u0787\u07ae\u078c\u07b0\u078e\u07a8\u0783\u07a8",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 505,
		name: "Kagi",
		name_dv: "\u0786\u07a6\u078e\u07a8",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 506,
		name: "Kudafinolhu",
		name_dv: "\u0786\u07aa\u0791\u07a6\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 507,
		name: "Little Huraa",
		name_dv: "\u078d\u07a8\u0793\u07b0\u078d\u07b0 \u0780\u07aa\u0783\u07a7",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 508,
		name: "Maadhoo",
		name_dv: "\u0789\u07a7\u078b\u07ab",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 509,
		name: "Madivaru",
		name_dv: "\u0789\u07a6\u0791\u07a8\u0788\u07a6\u0783\u07aa",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 510,
		name: "Maniyafushi",
		name_dv: "\u0789\u07a6\u0782\u07a8\u0794\u07a6\u078a\u07aa\u0781\u07a8",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 511,
		name: "Masleggihuraa",
		name_dv:
			"\u0789\u07a6\u0790\u07b0\u078d\u07ac\u0787\u07b0\u078e\u07a8\u0780\u07aa\u0783\u07a7",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 512,
		name: "Oidhunifinolhu",
		name_dv:
			"\u0787\u07ae\u078c\u07b0\u078b\u07aa\u0782\u07a8\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 513,
		name: "Olhigandufinolhu",
		name_dv:
			"\u0787\u07ae\u0785\u07a8\u078e\u07a6\u0782\u0791\u07aa\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 514,
		name: "Olhuhali",
		name_dv: "\u0787\u07ae\u0785\u07aa\u0780\u07a6\u078d\u07a8",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 515,
		name: "Rasfari",
		name_dv: "\u0783\u07a6\u0790\u07b0\u078a\u07a6\u0783\u07a8",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 516,
		name: "Thaburudhoo",
		name_dv: "\u078c\u07a6\u0782\u0784\u07aa\u0783\u07aa\u078b\u07ab",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 517,
		name: "Tholhimaraahuraa",
		name_dv:
			"\u078c\u07ae\u0785\u07a8\u0789\u07a6\u0783\u07a7\u0780\u07aa\u0783\u07a7",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 518,
		name: "Thulusdhoo Irumathee hura",
		name_dv:
			"\u078c\u07aa\u078d\u07aa\u0790\u07b0\u078b\u07ab \u0787\u07a8\u0783\u07aa\u0789\u07a6\u078c\u07a9 \u0780\u07aa\u0783\u07a7",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 519,
		name: "Vaagali",
		name_dv: "\u0788\u07a7\u078e\u07a6\u078d\u07a8",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 520,
		name: "Vabboahuraa",
		name_dv: "\u0788\u07a6\u0781\u07b0\u0784\u07af\u0780\u07aa\u0783\u07a7",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 521,
		name: "Valassaru",
		name_dv: "\u0788\u07a6\u078d\u07a6\u0787\u07b0\u0790\u07a6\u0783\u07aa",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 522,
		name: "Vammaafushi",
		name_dv: "\u0788\u07a6\u0781\u07b0\u0789\u07a7\u078a\u07aa\u0781\u07a8",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 523,
		name: "Villingilimathidhahuraa",
		name_dv:
			"\u0788\u07a8\u078d\u07a8\u0782\u078e\u07a8\u078d\u07a8\u0789\u07a6\u078c\u07a8\u078b\u07a6\u0780\u07aa\u0783\u07a7",
		atoll_id: 8,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 524,
		name: "Thoddoo",
		name_dv: "\u078c\u07ae\u0787\u07b0\u0791\u07ab",
		atoll_id: 9,
		island_code: 2801,
		is_inhibited: 1,
	},
	{
		id: 525,
		name: "Rasdhoo",
		name_dv: "\u0783\u07a6\u0790\u07b0\u078b\u07ab",
		atoll_id: 9,
		island_code: 2802,
		is_inhibited: 1,
	},
	{
		id: 526,
		name: "Ukulhas",
		name_dv: "\u0787\u07aa\u0786\u07aa\u0785\u07a6\u0790\u07b0",
		atoll_id: 9,
		island_code: 2804,
		is_inhibited: 1,
	},
	{
		id: 527,
		name: "Mathiveri",
		name_dv: "\u0789\u07a6\u078c\u07a8\u0788\u07ac\u0783\u07a8",
		atoll_id: 9,
		island_code: 2805,
		is_inhibited: 1,
	},
	{
		id: 528,
		name: "Bodufolhudhoo",
		name_dv: "\u0784\u07ae\u0791\u07aa\u078a\u07ae\u0785\u07aa\u078b\u07ab",
		atoll_id: 9,
		island_code: 2806,
		is_inhibited: 1,
	},
	{
		id: 529,
		name: "Feridhoo",
		name_dv: "\u078a\u07ac\u0783\u07a8\u078b\u07ab",
		atoll_id: 9,
		island_code: 2807,
		is_inhibited: 1,
	},
	{
		id: 530,
		name: "Maalhos",
		name_dv: "\u0789\u07a7\u0785\u07ae\u0790\u07b0",
		atoll_id: 9,
		island_code: 2808,
		is_inhibited: 1,
	},
	{
		id: 531,
		name: "Himandhoo",
		name_dv: "\u0780\u07a8\u0789\u07a6\u0782\u07b0\u078b\u07ab",
		atoll_id: 9,
		island_code: 2809,
		is_inhibited: 1,
	},
	{
		id: 532,
		name: "Bathala",
		name_dv: "\u0784\u07a6\u078c\u07a6\u078d\u07a7",
		atoll_id: 9,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 533,
		name: "Ellaidhu",
		name_dv: "\u0787\u07ac\u0787\u07b0\u078d\u07a6\u0787\u07a8\u078b\u07ab",
		atoll_id: 9,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 534,
		name: "Fesdhoo",
		name_dv: "\u078a\u07ac\u0790\u07b0\u078b\u07ab",
		atoll_id: 9,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 535,
		name: "Gangehi",
		name_dv: "\u078e\u07a6\u0782\u07b0\u078e\u07ac\u0780\u07a8",
		atoll_id: 9,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 536,
		name: "Halaveli",
		name_dv: "\u0780\u07a6\u078d\u07a6\u0788\u07ac\u078d\u07a8",
		atoll_id: 9,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 537,
		name: "Kuramathi",
		name_dv: "\u0786\u07aa\u0783\u07a6\u0789\u07a6\u078c\u07a8",
		atoll_id: 9,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 538,
		name: "Maayaafushi",
		name_dv: "\u0789\u07a7\u0794\u07a7\u078a\u07aa\u0781\u07a8",
		atoll_id: 9,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 539,
		name: "Madoogali",
		name_dv: "\u0789\u07a6\u0791\u07ab\u078e\u07a6\u078d\u07a8",
		atoll_id: 9,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 540,
		name: "Kudafolhudhoo",
		name_dv: "\u0786\u07aa\u0791\u07a6\u078a\u07ae\u0785\u07aa\u078b\u07ab",
		atoll_id: 9,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 541,
		name: "Veligandu",
		name_dv: "\u0788\u07ac\u078d\u07a8\u078e\u07a6\u0782\u0791\u07aa",
		atoll_id: 9,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 542,
		name: "Velidhoo",
		name_dv: "\u0788\u07ac\u078d\u07a8\u078b\u07ab",
		atoll_id: 9,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 543,
		name: "Mushimasmigili",
		name_dv:
			"\u0789\u07aa\u0781\u07a8\u0789\u07a6\u0790\u07b0\u078e\u07a8\u078d\u07a8",
		atoll_id: 9,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 544,
		name: "Avi Island",
		name_dv:
			"\u0787\u07a6\u0788\u07a8 \u0787\u07a6\u0787\u07a8\u078d\u07ac\u0782\u07b0\u0791\u07b0",
		atoll_id: 10,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 545,
		name: "Machchafushi",
		name_dv: "\u0789\u07a6\u0787\u07b0\u0797\u07a6\u078a\u07aa\u0781\u07a8",
		atoll_id: 10,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 546,
		name: "Alikoirah",
		name_dv:
			"\u0787\u07a6\u078d\u07a8\u0786\u07ae\u0787\u07a8\u0783\u07a6\u0781\u07b0",
		atoll_id: 9,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 547,
		name: "Beyrumadivaru",
		name_dv:
			"\u0784\u07ad\u0783\u07aa\u0789\u07a6\u0791\u07a8\u0788\u07a6\u0783\u07aa",
		atoll_id: 9,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 548,
		name: "Dhinnolhufinolhu",
		name_dv:
			"\u078b\u07a8\u0787\u07b0\u0782\u07ae\u0785\u07aa\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 9,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 549,
		name: "Etheremadivaru",
		name_dv:
			"\u0787\u07ac\u078c\u07ac\u0783\u07ac\u0789\u07a6\u0791\u07a8\u0788\u07a6\u0783\u07aa",
		atoll_id: 9,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 550,
		name: "Fushi",
		name_dv: "\u078a\u07aa\u0781\u07a8",
		atoll_id: 9,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 551,
		name: "Gaathafushi",
		name_dv: "\u078e\u07a7\u078c\u07a6\u078a\u07aa\u0781\u07a8",
		atoll_id: 9,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 552,
		name: "Kandholhudhoo",
		name_dv: "\u0786\u07a6\u0782\u078b\u07ae\u0785\u07aa\u078b\u07ab",
		atoll_id: 5,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 553,
		name: "Maagau",
		name_dv: "\u0789\u07a7\u078e\u07a6\u0787\u07aa",
		atoll_id: 9,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 554,
		name: "Madivaru",
		name_dv: "\u0789\u07a6\u0791\u07a8\u0788\u07a6\u0783\u07aa",
		atoll_id: 9,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 555,
		name: "Madivarufinolhu",
		name_dv:
			"\u0789\u07a6\u0791\u07a8\u0788\u07a6\u0783\u07aa\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 9,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 556,
		name: "Mathivereefinolhu",
		name_dv:
			"\u0789\u07a6\u078c\u07a8\u0788\u07ac\u0783\u07a9\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 9,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 557,
		name: "Meerufenfushi",
		name_dv:
			"\u0789\u07a9\u0783\u07aa\u078a\u07ac\u0782\u07b0\u078a\u07aa\u0781\u07a8",
		atoll_id: 9,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 558,
		name: "Vihamaafaru",
		name_dv: "\u0788\u07a8\u0780\u07a6\u0789\u07a7\u078a\u07a6\u0783\u07aa",
		atoll_id: 9,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 559,
		name: "Hangnameedhoo",
		name_dv: "\u0780\u07a6\u0782\u07b0\u078f\u07a7\u0789\u07a9\u078b\u07ab",
		atoll_id: 10,
		island_code: 2901,
		is_inhibited: 1,
	},
	{
		id: 560,
		name: "Omadhoo",
		name_dv: "\u0787\u07ae\u0789\u07a6\u078b\u07ab",
		atoll_id: 10,
		island_code: 2902,
		is_inhibited: 1,
	},
	{
		id: 561,
		name: "Kuburudhoo",
		name_dv: "\u0786\u07aa\u0782\u0784\u07aa\u0783\u07aa\u078b\u07ab",
		atoll_id: 10,
		island_code: 2903,
		is_inhibited: 1,
	},
	{
		id: 562,
		name: "Mahibadhoo",
		name_dv: "\u0789\u07a6\u0780\u07a8\u0784\u07a6\u078b\u07ab",
		atoll_id: 10,
		island_code: 2904,
		is_inhibited: 1,
	},
	{
		id: 563,
		name: "Mandhoo",
		name_dv: "\u0789\u07a6\u0782\u07b0\u078b\u07ab",
		atoll_id: 10,
		island_code: 2905,
		is_inhibited: 1,
	},
	{
		id: 564,
		name: "Dhangethi",
		name_dv: "\u078b\u07a6\u0782\u078e\u07ac\u078c\u07a8",
		atoll_id: 10,
		island_code: 2906,
		is_inhibited: 1,
	},
	{
		id: 565,
		name: "Dhigurah",
		name_dv: "\u078b\u07a8\u078e\u07aa\u0783\u07a6\u0781\u07b0",
		atoll_id: 10,
		island_code: 2907,
		is_inhibited: 1,
	},
	{
		id: 566,
		name: "Fenfushi",
		name_dv: "\u078a\u07ac\u0782\u07b0\u078a\u07aa\u0781\u07a8",
		atoll_id: 10,
		island_code: 2908,
		is_inhibited: 1,
	},
	{
		id: 567,
		name: "Dhidhdhoo",
		name_dv: "\u078b\u07a8\u0787\u07b0\u078b\u07ab",
		atoll_id: 10,
		island_code: 2909,
		is_inhibited: 1,
	},
	{
		id: 568,
		name: "Maamigili",
		name_dv: "\u0789\u07a7\u0789\u07a8\u078e\u07a8\u078d\u07a8",
		atoll_id: 10,
		island_code: 2910,
		is_inhibited: 1,
	},
	{
		id: 569,
		name: "Ariyadhoo",
		name_dv: "\u0787\u07a6\u0783\u07a8\u0794\u07a6\u078b\u07ab",
		atoll_id: 10,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 570,
		name: "Angaaga",
		name_dv: "\u0787\u07a6\u0782\u078e\u07a7\u078e\u07a6",
		atoll_id: 10,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 571,
		name: "Dhidhdhoofinolhu",
		name_dv:
			"\u078b\u07a8\u0787\u07b0\u078b\u07ab\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 10,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 572,
		name: "Athurugau",
		name_dv: "\u0787\u07a6\u078c\u07aa\u0783\u07aa\u078e\u07a6\u0787\u07aa",
		atoll_id: 10,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 573,
		name: "Dhiffushi",
		name_dv: "\u078b\u07a8\u0787\u07b0\u078a\u07aa\u0781\u07a8",
		atoll_id: 10,
		island_code: 2911,
		is_inhibited: 0,
	},
	{
		id: 574,
		name: "Kuda Rah",
		name_dv: "\u0786\u07aa\u0791\u07a6\u0783\u07a6\u0781\u07b0",
		atoll_id: 10,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 575,
		name: "Huvahendhoo",
		name_dv: "\u0780\u07aa\u0788\u07a6\u0780\u07ac\u0782\u07b0\u078b\u07ab",
		atoll_id: 10,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 576,
		name: "Machchafushi",
		name_dv: "\u0789\u07a6\u0787\u07b0\u0797\u07a6\u078a\u07aa\u0781\u07a8",
		atoll_id: 10,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 577,
		name: "Mirihi",
		name_dv: "\u0789\u07a8\u0783\u07a8\u0780\u07a8",
		atoll_id: 10,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 578,
		name: "Rangalifinolhu",
		name_dv:
			"\u0783\u07a6\u0782\u07b0\u078e\u07a6\u078d\u07a8\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 10,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 579,
		name: "Moofushi",
		name_dv: "\u0789\u07ab\u078a\u07aa\u0781\u07a8",
		atoll_id: 10,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 580,
		name: "Villingilivaru",
		name_dv:
			"\u0788\u07a8\u078d\u07a8\u0782\u078e\u07a8\u078d\u07a8\u0788\u07a6\u0783\u07aa",
		atoll_id: 10,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 581,
		name: "Nalaguraidhoo",
		name_dv:
			"\u0782\u07a6\u078d\u07a6\u078e\u07aa\u0783\u07a6\u0787\u07a8\u078b\u07ab",
		atoll_id: 10,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 582,
		name: "Thundufushi",
		name_dv: "\u078c\u07aa\u0782\u0791\u07aa\u078a\u07aa\u0781\u07a8",
		atoll_id: 10,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 583,
		name: "Maafushivaru",
		name_dv: "\u0789\u07a7\u078a\u07aa\u0781\u07a8\u0788\u07a6\u0783\u07aa",
		atoll_id: 10,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 584,
		name: "Vakarufalhi",
		name_dv: "\u0788\u07a6\u0786\u07a6\u0783\u07aa\u078a\u07a6\u0785\u07a8",
		atoll_id: 10,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 585,
		name: "Vilamendhoo",
		name_dv: "\u0788\u07a8\u078d\u07a6\u0789\u07ac\u0782\u07b0\u078b\u07ab",
		atoll_id: 10,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 586,
		name: "Aafinolhu",
		name_dv: "\u0787\u07a7\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 10,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 587,
		name: "Bodufinolhu",
		name_dv: "\u0784\u07ae\u0791\u07aa\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 10,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 588,
		name: "Bodukaashihuraa",
		name_dv:
			"\u0784\u07ae\u0791\u07aa\u0786\u07a7\u0781\u07a8\u0780\u07aa\u0783\u07a7",
		atoll_id: 10,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 589,
		name: "Bulhalhohi",
		name_dv: "\u0784\u07aa\u0785\u07a6\u0785\u07ae\u0780\u07a8",
		atoll_id: 10,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 590,
		name: "Dhiggiri",
		name_dv: "\u078b\u07a8\u0787\u07b0\u078e\u07a8\u0783\u07a8",
		atoll_id: 10,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 591,
		name: "Enboodhoo",
		name_dv: "\u0787\u07ac\u0782\u0784\u07ab\u078b\u07ab",
		atoll_id: 10,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 592,
		name: "Fushidhiggaa",
		name_dv: "\u078a\u07aa\u0781\u07a8\u078b\u07a8\u0787\u07b0\u078e\u07a7",
		atoll_id: 10,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 593,
		name: "Heenfaru",
		name_dv: "\u0780\u07a9\u0782\u07b0\u078a\u07a6\u0783\u07aa",
		atoll_id: 10,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 594,
		name: "Hiyafushi",
		name_dv: "\u0780\u07a8\u0794\u07a6\u078a\u07aa\u0781\u07a8",
		atoll_id: 10,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 595,
		name: "Hukurudhoo",
		name_dv: "\u0780\u07aa\u0786\u07aa\u0783\u07aa\u078b\u07ab",
		atoll_id: 10,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 596,
		name: "Hurasdhoo",
		name_dv: "\u0780\u07aa\u0783\u07a6\u0790\u07b0\u078b\u07ab",
		atoll_id: 10,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 597,
		name: "Huruelhi",
		name_dv: "\u0780\u07aa\u0783\u07aa\u0787\u07ac\u0785\u07a8",
		atoll_id: 10,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 598,
		name: "Innafushi",
		name_dv: "\u0787\u07a8\u0782\u07b0\u0782\u07a6\u078a\u07aa\u0781\u07a8",
		atoll_id: 10,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 599,
		name: "Kalhahadhihuraa",
		name_dv:
			"\u0786\u07a6\u0785\u07a6\u0780\u07a6\u078b\u07a8\u0780\u07aa\u0783\u07a7",
		atoll_id: 10,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 600,
		name: "Kudadhoo",
		name_dv: "\u0786\u07aa\u0791\u07a6\u078b\u07ab",
		atoll_id: 10,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 601,
		name: "Lonuboi",
		name_dv: "\u078d\u07ae\u0782\u07aa\u0784\u07ae\u0787\u07a8",
		atoll_id: 10,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 602,
		name: "Theluveligaa",
		name_dv: "\u078c\u07ac\u078d\u07aa\u0788\u07ac\u078d\u07a8\u078e\u07a7",
		atoll_id: 10,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 603,
		name: "Theyofulhihuraa",
		name_dv:
			"\u078c\u07ac\u0794\u07ae\u078a\u07aa\u0785\u07a8\u0780\u07aa\u0783\u07a7",
		atoll_id: 10,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 604,
		name: "Tholhifushi",
		name_dv: "\u078c\u07ae\u0785\u07a8\u078a\u07aa\u0781\u07a8",
		atoll_id: 10,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 605,
		name: "Fulidhoo",
		name_dv: "\u078a\u07aa\u078d\u07a8\u078b\u07ab",
		atoll_id: 11,
		island_code: 3001,
		is_inhibited: 1,
	},
	{
		id: 606,
		name: "Thinadhoo",
		name_dv: "\u078c\u07a8\u0782\u07a6\u078b\u07ab",
		atoll_id: 11,
		island_code: 3002,
		is_inhibited: 1,
	},
	{
		id: 607,
		name: "Felidhoo",
		name_dv: "\u078a\u07ac\u078d\u07a8\u078b\u07ab",
		atoll_id: 11,
		island_code: 3003,
		is_inhibited: 1,
	},
	{
		id: 608,
		name: "Keyodhoo",
		name_dv: "\u0786\u07ac\u0794\u07ae\u078b\u07ab",
		atoll_id: 11,
		island_code: 3004,
		is_inhibited: 1,
	},
	{
		id: 609,
		name: "Rakeedhoo",
		name_dv: "\u0783\u07a6\u0786\u07a9\u078b\u07ab",
		atoll_id: 11,
		island_code: 3005,
		is_inhibited: 1,
	},
	{
		id: 610,
		name: "Anbaraa",
		name_dv: "\u0787\u07a6\u0782\u0784\u07a6\u0783\u07a7",
		atoll_id: 11,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 611,
		name: "Bodumohuraa",
		name_dv: "\u0784\u07ae\u0791\u07aa\u0789\u07ae\u0780\u07ae\u0783\u07a7",
		atoll_id: 11,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 612,
		name: "Alimatha",
		name_dv: "\u0787\u07a6\u078d\u07a8\u0789\u07a6\u078c\u07a7",
		atoll_id: 11,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 613,
		name: "Dhiggiri",
		name_dv: "\u078b\u07a8\u078e\u07a8\u0787\u07b0\u0783\u07a8",
		atoll_id: 11,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 614,
		name: "Aarah",
		name_dv: "\u0787\u07a7\u0783\u07a6\u0781\u07b0",
		atoll_id: 11,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 615,
		name: "Foththeyo Bodufushi",
		name_dv:
			"\u078a\u07ae\u0781\u07b0\u078c\u07ac\u0794\u07ae\u0784\u07ae\u0791\u07aa\u078a\u07aa\u0781\u07a8",
		atoll_id: 11,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 616,
		name: "Hulhidhoo",
		name_dv: "\u0780\u07aa\u0785\u07a8\u078b\u07ab",
		atoll_id: 11,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 617,
		name: "Kudhiboli",
		name_dv: "\u0786\u07aa\u078b\u07a8\u0784\u07ae\u078d\u07a8",
		atoll_id: 11,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 618,
		name: "Kunaavashi",
		name_dv: "\u0786\u07aa\u0782\u07a7\u0788\u07a6\u0781\u07a8",
		atoll_id: 11,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 619,
		name: "Raggadu",
		name_dv: "\u0783\u07a6\u0781\u07b0\u078e\u07a6\u0782\u0791\u07aa",
		atoll_id: 11,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 620,
		name: "Ruhhurihuraa",
		name_dv:
			"\u0783\u07aa\u0781\u07b0\u0780\u07aa\u0783\u07a8\u0780\u07aa\u0783\u07a7",
		atoll_id: 11,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 621,
		name: "Thuduhuraa",
		name_dv: "\u078c\u07aa\u0782\u0791\u07aa\u0780\u07aa\u0783\u07a7",
		atoll_id: 11,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 622,
		name: "Vashugiri",
		name_dv: "\u0788\u07a6\u0781\u07aa\u078e\u07a8\u0783\u07a8",
		atoll_id: 11,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 623,
		name: "Vattaru",
		name_dv: "\u0788\u07a6\u0781\u07b0\u0793\u07a6\u0783\u07aa",
		atoll_id: 11,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 624,
		name: "Raimandhoo",
		name_dv: "\u0783\u07a6\u078c\u07b0\u0789\u07a6\u0782\u07b0\u078b\u07ab",
		atoll_id: 12,
		island_code: 3101,
		is_inhibited: 1,
	},
	{
		id: 625,
		name: "Madifushi",
		name_dv: "\u0789\u07a6\u0791\u07a8\u078a\u07aa\u0781\u07a8",
		atoll_id: 12,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 626,
		name: "Veyvah",
		name_dv: "\u0788\u07ad\u0788\u07a6\u0781\u07b0",
		atoll_id: 12,
		island_code: 3103,
		is_inhibited: 1,
	},
	{
		id: 627,
		name: "Mulah",
		name_dv: "\u0789\u07aa\u078d\u07a6\u0787\u07b0",
		atoll_id: 12,
		island_code: 3104,
		is_inhibited: 1,
	},
	{
		id: 628,
		name: "Muli",
		name_dv: "\u0789\u07aa\u078d\u07a8",
		atoll_id: 12,
		island_code: 3105,
		is_inhibited: 1,
	},
	{
		id: 629,
		name: "Naalaafushi",
		name_dv: "\u0782\u07a7\u078d\u07a7\u078a\u07aa\u0781\u07a8",
		atoll_id: 12,
		island_code: 3106,
		is_inhibited: 1,
	},
	{
		id: 630,
		name: "Kolhufushi",
		name_dv: "\u0786\u07ae\u0785\u07aa\u078a\u07aa\u0781\u07a8",
		atoll_id: 12,
		island_code: 3107,
		is_inhibited: 1,
	},
	{
		id: 631,
		name: "Dhiggaru",
		name_dv: "\u078b\u07a8\u0787\u07b0\u078e\u07a6\u0783\u07aa",
		atoll_id: 12,
		island_code: 3108,
		is_inhibited: 1,
	},
	{
		id: 632,
		name: "Maduvvari",
		name_dv: "\u0789\u07a6\u0791\u07aa\u0787\u07b0\u0788\u07a6\u0783\u07a8",
		atoll_id: 12,
		island_code: 3109,
		is_inhibited: 1,
	},
	{
		id: 633,
		name: "Hakuraa Huraa",
		name_dv: "\u0780\u07a6\u0786\u07aa\u0783\u07a7\u0780\u07aa\u0783\u07a7",
		atoll_id: 12,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 634,
		name: "Medhufushi",
		name_dv: "\u0789\u07ac\u078b\u07aa\u078a\u07aa\u0781\u07a8",
		atoll_id: 12,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 635,
		name: "Boahuraa",
		name_dv: "\u0784\u07af\u0780\u07aa\u0783\u07a7",
		atoll_id: 12,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 636,
		name: "Dhekunuboduveli",
		name_dv:
			"\u078b\u07ac\u0786\u07aa\u0782\u07aa\u0784\u07ae\u0791\u07aa\u0788\u07ac\u078d\u07a8",
		atoll_id: 12,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 637,
		name: "Dhiththudi",
		name_dv: "\u078b\u07a8\u0787\u07b0\u078c\u07aa\u0782\u0791\u07a8",
		atoll_id: 12,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 638,
		name: "Erruh-huraa",
		name_dv:
			"\u0787\u07ac\u0787\u07b0\u0783\u07aa\u0787\u07b0\u0780\u07aa\u0783\u07a7",
		atoll_id: 12,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 639,
		name: "Fenboafinolhu",
		name_dv:
			"\u078a\u07ac\u0782\u07b0\u0784\u07af\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 12,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 640,
		name: "Fenboakurali",
		name_dv:
			"\u078a\u07ac\u0782\u07b0\u0784\u07af\u0786\u07aa\u0783\u07a6\u078d\u07a8",
		atoll_id: 12,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 641,
		name: "Fenfuraveli",
		name_dv:
			"\u078a\u07ac\u0782\u07b0\u078a\u07aa\u0783\u07a6\u0788\u07ac\u078d\u07a8",
		atoll_id: 12,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 642,
		name: "Gaakurali",
		name_dv: "\u078e\u07a7\u0786\u07aa\u0783\u07a6\u078d\u07a8",
		atoll_id: 12,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 643,
		name: "Gasveli",
		name_dv: "\u078e\u07a6\u0790\u07b0\u0788\u07ac\u078d\u07a8",
		atoll_id: 12,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 644,
		name: "Gongalihuraa",
		name_dv:
			"\u078e\u07ae\u0782\u07b0\u078e\u07a6\u078d\u07a8\u0780\u07aa\u0783\u07a7",
		atoll_id: 12,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 645,
		name: "Hurasveli (Uthurugasveli)",
		name_dv:
			"\u0780\u07aa\u0783\u07a6\u0790\u07b0\u0788\u07ac\u078d\u07a8 (\u0787\u07aa\u078c\u07aa\u0783\u07aa\u078e\u07a6\u0790\u07b0\u0788\u07ac\u078d\u07a8)",
		atoll_id: 12,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 646,
		name: "Kakaahuraa",
		name_dv: "\u0786\u07a6\u0786\u07a7\u0780\u07aa\u0783\u07a7",
		atoll_id: 12,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 647,
		name: "Kekuraalhuveli",
		name_dv:
			"\u0786\u07ac\u0786\u07aa\u0783\u07a7\u0785\u07aa\u0788\u07ac\u078d\u07a8",
		atoll_id: 12,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 648,
		name: "Kudausfushi",
		name_dv:
			"\u0786\u07aa\u0791\u07a6\u0787\u07aa\u0790\u07b0\u078a\u07aa\u0781\u07a8",
		atoll_id: 12,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 649,
		name: "Maahuraa",
		name_dv: "\u0789\u07a7\u0780\u07aa\u0783\u07a7",
		atoll_id: 12,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 650,
		name: "Maalhaveli",
		name_dv: "\u0789\u07a7\u0785\u07a6\u0788\u07ac\u078d\u07a8",
		atoll_id: 12,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 651,
		name: "Mausfushi",
		name_dv: "\u0789\u07a6\u0787\u07aa\u0790\u07b0\u078a\u07aa\u0781\u07a8",
		atoll_id: 12,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 652,
		name: "Medhufushi",
		name_dv: "\u0789\u07ac\u078b\u07aa\u078a\u07aa\u0781\u07a8",
		atoll_id: 12,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 653,
		name: "Seedheehuraa",
		name_dv: "\u0790\u07a9\u078b\u07a9\u0780\u07aa\u0783\u07a7",
		atoll_id: 12,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 654,
		name: "Seedihuraaveligandu",
		name_dv:
			"\u0790\u07a9\u078b\u07a9\u0780\u07aa\u0783\u07a7\u0788\u07ac\u078d\u07a8\u078e\u07a6\u0782\u0791\u07aa",
		atoll_id: 12,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 655,
		name: "Thuvaru",
		name_dv: "\u078c\u07aa\u0788\u07a6\u0783\u07aa",
		atoll_id: 12,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 656,
		name: "Uthuruboduveli",
		name_dv:
			"\u0787\u07aa\u078c\u07aa\u0783\u07aa\u0784\u07ae\u0791\u07aa\u0788\u07ac\u078d\u07a8",
		atoll_id: 12,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 657,
		name: "Verineiybe",
		name_dv: "\u0788\u07ac\u0783\u07a8\u0782\u07ac\u078c\u07b0\u0784\u07ac",
		atoll_id: 12,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 658,
		name: "Feeali",
		name_dv: "\u078a\u07a9\u0787\u07a6\u078d\u07a8",
		atoll_id: 13,
		island_code: 3201,
		is_inhibited: 1,
	},
	{
		id: 659,
		name: "Biledhdhoo",
		name_dv: "\u0784\u07a8\u078d\u07ac\u078c\u07b0\u078b\u07ab",
		atoll_id: 13,
		island_code: 3203,
		is_inhibited: 1,
	},
	{
		id: 660,
		name: "Magoodhoo",
		name_dv: "\u0789\u07a6\u078e\u07ab\u078b\u07ab",
		atoll_id: 13,
		island_code: 3204,
		is_inhibited: 1,
	},
	{
		id: 661,
		name: "Dharanboodhoo",
		name_dv: "\u078b\u07a6\u0783\u07a6\u0782\u0784\u07ab\u078b\u07ab",
		atoll_id: 13,
		island_code: 3205,
		is_inhibited: 1,
	},
	{
		id: 662,
		name: "Nilandhoo",
		name_dv: "\u0782\u07a8\u078d\u07a6\u0782\u07b0\u078b\u07ab",
		atoll_id: 13,
		island_code: 3206,
		is_inhibited: 1,
	},
	{
		id: 663,
		name: "Maafushi",
		name_dv: "\u0789\u07a7\u078a\u07aa\u0781\u07a8",
		atoll_id: 13,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 664,
		name: "Filitheyo",
		name_dv: "\u078a\u07a8\u078d\u07a8\u078c\u07ac\u0794\u07ae",
		atoll_id: 13,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 665,
		name: "Adhangau",
		name_dv: "\u0787\u07a6\u078b\u07a6\u0782\u078e\u07a6\u0787\u07aa",
		atoll_id: 13,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 666,
		name: "Agulugalee-Finolhu",
		name_dv:
			"\u0787\u07a6\u078e\u07aa\u078d\u07aa\u078e\u07a6\u078d\u07a9 \u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 13,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 667,
		name: "Bandidhuhfusheefinolhu",
		name_dv:
			"\u0784\u07a6\u0782\u0791\u07a8\u078b\u07aa\u0781\u07b0\u078a\u07aa\u0781\u07a9\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 13,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 668,
		name: "Bodufinolhu",
		name_dv: "\u0784\u07ae\u0791\u07aa\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 13,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 669,
		name: "Dhiguvaru",
		name_dv: "\u078b\u07a8\u078e\u07aa\u0788\u07a6\u0783\u07aa",
		atoll_id: 13,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 670,
		name: "Dunifinolhu",
		name_dv: "\u078b\u07aa\u0782\u07a8\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 13,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 671,
		name: "Embulufushi",
		name_dv:
			"\u0787\u07ac\u0782\u0784\u07aa\u078d\u07aa\u078a\u07aa\u0781\u07a8",
		atoll_id: 13,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 672,
		name: "Faanumaahuraa",
		name_dv: "\u078a\u07a7\u0782\u07aa\u0789\u07a7\u0780\u07aa\u0783\u07a7",
		atoll_id: 13,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 673,
		name: "Gaahuraa",
		name_dv: "\u078e\u07a7\u0780\u07aa\u0783\u07a7",
		atoll_id: 13,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 674,
		name: "Himithi",
		name_dv: "\u0780\u07a8\u0789\u07a8\u078c\u07a8",
		atoll_id: 13,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 675,
		name: "Huraa",
		name_dv: "\u0780\u07aa\u0783\u07a7",
		atoll_id: 13,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 676,
		name: "Jinnathgau",
		name_dv:
			"\u0796\u07a8\u0782\u07b0\u0782\u07a6\u078c\u07aa\u078e\u07a6\u0787\u07aa",
		atoll_id: 13,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 677,
		name: "Kadumoonufushi",
		name_dv:
			"\u0786\u07a6\u0782\u0791\u07aa\u0789\u07ab\u0782\u07aa\u078a\u07aa\u0781\u07a8",
		atoll_id: 13,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 678,
		name: "Kofesdhoo",
		name_dv: "\u0786\u07ae\u078a\u07ac\u0790\u07b0\u078b\u07ab",
		atoll_id: 13,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 679,
		name: "Kudafalhufinolhu",
		name_dv:
			"\u0786\u07aa\u0791\u07a6\u078a\u07a6\u0785\u07aa\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 13,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 680,
		name: "Kudafareefinolhu",
		name_dv:
			"\u0786\u07aa\u0791\u07a6\u078a\u07a6\u0783\u07a9\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 13,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 681,
		name: "Maavaruhuraa",
		name_dv: "\u0789\u07a7\u0788\u07a6\u0783\u07aa\u0780\u07aa\u0783\u07a7",
		atoll_id: 13,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 682,
		name: "Madivaru huraa",
		name_dv:
			"\u0789\u07a6\u0791\u07a8\u0788\u07a6\u0783\u07aa\u0780\u07aa\u0783\u07a7",
		atoll_id: 13,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 683,
		name: "Madivaru huraa",
		name_dv:
			"\u0789\u07a6\u0791\u07a8\u0788\u07a6\u0783\u07aa\u0780\u07aa\u0783\u07a7",
		atoll_id: 13,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 684,
		name: "Magoodhoobodufinolhu",
		name_dv:
			"\u0789\u07a6\u078e\u07ab\u078b\u07ab\u0784\u07ae\u0791\u07aa\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 13,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 685,
		name: "Makunueri",
		name_dv: "\u0789\u07a6\u0786\u07aa\u0782\u07aa\u0787\u07ac\u0783\u07a8",
		atoll_id: 13,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 686,
		name: "Minimasgali",
		name_dv:
			"\u0789\u07a8\u0782\u07a8\u0789\u07a6\u0790\u07b0\u078e\u07a6\u078d\u07a8",
		atoll_id: 13,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 687,
		name: "Rangaleefinolhu",
		name_dv:
			"\u0783\u07a6\u0782\u07b0\u078e\u07a6\u078d\u07a8\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 13,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 688,
		name: "Villiginlivarufinolhu",
		name_dv:
			"\u0788\u07a8\u078d\u07a8\u0782\u078e\u07a8\u078d\u07a8\u0788\u07a6\u0783\u07aa\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 13,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 689,
		name: "Meedhoo",
		name_dv: "\u0789\u07a9\u078b\u07ab",
		atoll_id: 14,
		island_code: 3301,
		is_inhibited: 1,
	},
	{
		id: 690,
		name: "Bandidhoo",
		name_dv: "\u0784\u07a6\u0782\u0791\u07a8\u078b\u07ab",
		atoll_id: 14,
		island_code: 3302,
		is_inhibited: 1,
	},
	{
		id: 691,
		name: "Rinbudhoo",
		name_dv: "\u0783\u07a8\u0782\u0784\u07aa\u078b\u07ab",
		atoll_id: 14,
		island_code: 3303,
		is_inhibited: 1,
	},
	{
		id: 692,
		name: "Hulhudheli",
		name_dv: "\u0780\u07aa\u0785\u07aa\u078b\u07ac\u078d\u07a8",
		atoll_id: 14,
		island_code: 3304,
		is_inhibited: 1,
	},
	{
		id: 693,
		name: "Gemendhoo",
		name_dv: "\u078e\u07ac\u0789\u07ac\u0782\u07b0\u078b\u07ab",
		atoll_id: 14,
		island_code: 3305,
		is_inhibited: 1,
	},
	{
		id: 694,
		name: "Vaanee",
		name_dv: "\u0788\u07a7\u0782\u07a9",
		atoll_id: 14,
		island_code: 3306,
		is_inhibited: 1,
	},
	{
		id: 695,
		name: "Maaenboodhoo",
		name_dv: "\u0789\u07a7\u0787\u07ac\u0782\u0784\u07ab\u078b\u07ab",
		atoll_id: 14,
		island_code: 3307,
		is_inhibited: 1,
	},
	{
		id: 696,
		name: "Kudahuvadhoo",
		name_dv: "\u0786\u07aa\u0791\u07a6\u0780\u07aa\u0788\u07a6\u078b\u07ab",
		atoll_id: 14,
		island_code: 3308,
		is_inhibited: 1,
	},
	{
		id: 697,
		name: "Velavaru",
		name_dv: "\u0788\u07ac\u078d\u07a6\u0788\u07a6\u0783\u07aa",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 698,
		name: "Meedhuffushi",
		name_dv: "\u0789\u07a9\u078b\u07aa\u0787\u07b0\u078a\u07aa\u0781\u07a8",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 699,
		name: "Aluvifushi",
		name_dv: "\u0787\u07a6\u078d\u07aa\u0788\u07a8\u078a\u07aa\u0781\u07a8",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 700,
		name: "Ayyukaloahuraa",
		name_dv:
			"\u0787\u07a6\u0787\u07b0\u0794\u07aa\u0786\u07a6\u078d\u07af\u0780\u07aa\u0783\u07a7",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 701,
		name: "Bhulalafushi",
		name_dv: "\u0784\u07aa\u078d\u07a6\u078d\u07a6\u078a\u07aa\u0781\u07a8",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 702,
		name: "Bodufushi",
		name_dv: "\u0784\u07ae\u0791\u07aa\u078a\u07aa\u0781\u07a8",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 703,
		name: "Dhebaidhoo",
		name_dv: "\u078b\u07ac\u0784\u07a6\u0787\u07a8\u078b\u07ab",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 704,
		name: "Dhoores",
		name_dv: "\u078b\u07ab\u0783\u07ac\u0790\u07b0",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 705,
		name: "Embudhoofushi",
		name_dv:
			"\u0787\u07ac\u0782\u0784\u07aa\u078b\u07ab\u078a\u07aa\u0781\u07a8",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 706,
		name: "Faandhoo",
		name_dv: "\u078a\u07a7\u0782\u07b0\u078b\u07ab",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 707,
		name: "Fenaruvaahuraa",
		name_dv:
			"\u078a\u07ac\u0782\u07b0\u0787\u07a6\u0783\u07aa\u0788\u07a7\u0780\u07aa\u0783\u07a7",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 708,
		name: "Fenfushi",
		name_dv: "\u078a\u07ac\u0782\u07b0\u078a\u07aa\u0781\u07a8",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 709,
		name: "Fenmeeruhuraa",
		name_dv:
			"\u078a\u07ac\u0782\u07b0\u0789\u07a9\u0783\u07aa\u0780\u07aa\u0783\u07a7",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 710,
		name: "Gahadhiffushi",
		name_dv:
			"\u078e\u07a6\u0780\u07a6\u078b\u07a8\u0787\u07b0\u078a\u07aa\u0781\u07a8",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 711,
		name: "Hasannalaafushi",
		name_dv:
			"\u0780\u07a6\u0790\u07a6\u0782\u07b0\u0787\u07a6\u078d\u07a7\u078a\u07aa\u0781\u07a8",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 712,
		name: "Hinaidhoo",
		name_dv: "\u0780\u07a8\u0782\u07a6\u0787\u07a8\u078b\u07ab",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 713,
		name: "Hiriyafushi",
		name_dv: "\u0780\u07a8\u0783\u07a8\u0794\u07a6\u078a\u07aa\u0781\u07a8",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 714,
		name: "Hudufushifinolhu",
		name_dv:
			"\u0780\u07aa\u0791\u07aa\u078a\u07aa\u0781\u07a8\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 715,
		name: "Hulhuveli",
		name_dv: "\u0780\u07aa\u0785\u07aa\u0788\u07ac\u078d\u07a8",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 716,
		name: "Issari",
		name_dv: "\u0787\u07a8\u0787\u07b0\u0790\u07a6\u0783\u07a8",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 717,
		name: "Kannefaru",
		name_dv: "\u0786\u07a6\u0782\u07b0\u0782\u07ac\u078a\u07a6\u0783\u07aa",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 718,
		name: "Kedhigadu",
		name_dv: "\u0786\u07ac\u078b\u07a8\u078e\u07a6\u0782\u0791\u07aa",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 719,
		name: "Kiraidhoo",
		name_dv: "\u0786\u07a8\u0783\u07a6\u0787\u07a8\u078b\u07ab",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 720,
		name: "Lhohi",
		name_dv: "\u0785\u07ae\u0780\u07a8",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 721,
		name: "Maadheli",
		name_dv: "\u0789\u07a7\u078b\u07ac\u078d\u07a8",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 722,
		name: "Maafushi",
		name_dv: "\u0789\u07a7\u078a\u07aa\u0781\u07a8",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 723,
		name: "Maagau",
		name_dv: "\u0789\u07a7\u078e\u07a6\u0787\u07aa",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 724,
		name: "Maalefaru",
		name_dv: "\u0789\u07a7\u078d\u07ac\u078a\u07a6\u0783\u07aa",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 725,
		name: "Maavarufinolhu",
		name_dv:
			"\u0789\u07a7\u0788\u07a6\u0783\u07aa\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 726,
		name: "Mathidhebaidhoo",
		name_dv:
			"\u0789\u07a6\u078c\u07a8\u078b\u07ac\u0784\u07a6\u0787\u07a8\u078b\u07ab",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 727,
		name: "Medhurah",
		name_dv: "\u0789\u07ac\u078b\u07aa\u0783\u07a6\u0781\u07b0",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 728,
		name: "Meedhuffushi",
		name_dv: "\u0789\u07a9\u078b\u07aa\u0787\u07b0\u078a\u07aa\u0781\u07a8",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 729,
		name: "Minimasgali",
		name_dv:
			"\u0789\u07a8\u0782\u07a8\u0789\u07a6\u0790\u07b0\u078e\u07a6\u078d\u07a8",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 730,
		name: "Naibukaloabodufushi",
		name_dv:
			"\u0782\u07a6\u0787\u07a8\u0784\u07aa\u0786\u07a6\u078d\u07af\u0784\u07ae\u0791\u07aa\u078a\u07aa\u0781\u07a8",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 731,
		name: "Olhufushi",
		name_dv: "\u0787\u07ae\u0785\u07aa\u078a\u07aa\u0781\u07a8",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 732,
		name: "Olhuveli",
		name_dv: "\u0787\u07ae\u0785\u07aa\u0788\u07ac\u078d\u07a8",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 733,
		name: "Sarakafushi",
		name_dv: "\u0790\u07a6\u0783\u07a6\u0786\u07a6\u078a\u07aa\u0781\u07a8",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 734,
		name: "Sathaaraa",
		name_dv: "\u0790\u07a6\u078c\u07a6\u0783\u07a7",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 735,
		name: "Thabalhaidhoo",
		name_dv: "\u078c\u07a6\u0784\u07a6\u0785\u07a6\u0787\u07a8\u078b\u07ab",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 736,
		name: "Thilabolhufushi",
		name_dv:
			"\u078c\u07a8\u078d\u07a6\u0784\u07ae\u0785\u07aa\u078a\u07aa\u0781\u07a8",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 737,
		name: "Thinhuraa",
		name_dv: "\u078c\u07a8\u0782\u07b0\u0780\u07aa\u0783\u07a7",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 738,
		name: "Udhdhoo",
		name_dv: "\u0787\u07aa\u0787\u07b0\u078b\u07ab",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 739,
		name: "Vaalia",
		name_dv: "\u0788\u07a7\u078d\u07a8\u0787\u07a7",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 740,
		name: "Vallalhohi",
		name_dv: "\u0788\u07a6\u0787\u07b0\u078d\u07a6\u0785\u07ae\u0780\u07a8",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 741,
		name: "Vommuli",
		name_dv: "\u0788\u07ae\u0781\u07b0\u0789\u07aa\u078d\u07a8",
		atoll_id: 14,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 742,
		name: "Buruni",
		name_dv: "\u0784\u07aa\u0783\u07aa\u0782\u07a9",
		atoll_id: 15,
		island_code: 3401,
		is_inhibited: 1,
	},
	{
		id: 743,
		name: "Vilufushi",
		name_dv: "\u0788\u07a8\u078d\u07aa\u078a\u07aa\u0781\u07a8",
		atoll_id: 15,
		island_code: 3402,
		is_inhibited: 1,
	},
	{
		id: 744,
		name: "Madifushi",
		name_dv: "\u0789\u07a6\u0791\u07a8\u078a\u07aa\u0781\u07a8",
		atoll_id: 15,
		island_code: 3403,
		is_inhibited: 1,
	},
	{
		id: 745,
		name: "Dhiyamigili",
		name_dv: "\u078b\u07a8\u0794\u07a6\u0789\u07a8\u078e\u07a8\u078d\u07a8",
		atoll_id: 15,
		island_code: 3404,
		is_inhibited: 1,
	},
	{
		id: 746,
		name: "Guraidhoo",
		name_dv: "\u078e\u07aa\u0783\u07a6\u0787\u07a8\u078b\u07ab",
		atoll_id: 15,
		island_code: 3405,
		is_inhibited: 1,
	},
	{
		id: 747,
		name: "Kandoodhoo",
		name_dv: "\u0786\u07a6\u0782\u0791\u07ab\u078b\u07ab",
		atoll_id: 15,
		island_code: 3406,
		is_inhibited: 1,
	},
	{
		id: 748,
		name: "Vandhoo",
		name_dv: "\u0788\u07a6\u0782\u07b0\u078b\u07ab",
		atoll_id: 15,
		island_code: 3407,
		is_inhibited: 1,
	},
	{
		id: 749,
		name: "Hirilandhoo",
		name_dv: "\u0780\u07a8\u0783\u07a8\u078d\u07a6\u0782\u07b0\u078b\u07ab",
		atoll_id: 15,
		island_code: 3408,
		is_inhibited: 1,
	},
	{
		id: 750,
		name: "Gaadhiffushi",
		name_dv: "\u078e\u07a7\u078b\u07a8\u0787\u07b0\u078a\u07aa\u0781\u07a8",
		atoll_id: 15,
		island_code: 3409,
		is_inhibited: 1,
	},
	{
		id: 751,
		name: "Thimarafushi",
		name_dv: "\u078c\u07a8\u0789\u07a6\u0783\u07a6\u078a\u07aa\u0781\u07a8",
		atoll_id: 15,
		island_code: 3410,
		is_inhibited: 1,
	},
	{
		id: 752,
		name: "Veymandoo",
		name_dv: "\u0788\u07ad\u0789\u07a6\u0782\u07b0\u0791\u07ab",
		atoll_id: 15,
		island_code: 3411,
		is_inhibited: 1,
	},
	{
		id: 753,
		name: "Kinbidhoo",
		name_dv: "\u0786\u07a8\u0782\u0784\u07a8\u078b\u07ab",
		atoll_id: 15,
		island_code: 3412,
		is_inhibited: 1,
	},
	{
		id: 754,
		name: "Omadhoo",
		name_dv: "\u0787\u07ae\u0789\u07a6\u078b\u07ab",
		atoll_id: 15,
		island_code: 3413,
		is_inhibited: 1,
	},
	{
		id: 755,
		name: "Fondhoo",
		name_dv: "\u078a\u07ae\u0782\u07b0\u078b\u07ab",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 756,
		name: "Kanimeedhoo",
		name_dv: "\u0786\u07a6\u0782\u07a8\u0789\u07a9\u078b\u07ab",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 757,
		name: "Bodufinolhu",
		name_dv: "\u0784\u07ae\u0791\u07aa\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 758,
		name: "Bodurehaa",
		name_dv: "\u0784\u07ae\u0791\u07aa\u0783\u07ac\u0780\u07a7",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 759,
		name: "Dhiffushi",
		name_dv: "\u078b\u07a8\u0787\u07b0\u078a\u07aa\u0781\u07a8",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 760,
		name: "Dhonanfushi",
		name_dv: "\u078b\u07ae\u0782\u07a6\u0782\u07b0\u078a\u07aa\u0781\u07a8",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 761,
		name: "Dhururehaa",
		name_dv: "\u078b\u07aa\u0783\u07aa\u0783\u07ac\u0780\u07a7",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 762,
		name: "Ekruffushi",
		name_dv:
			"\u0787\u07ac\u0786\u07aa\u0783\u07aa\u0787\u07b0\u078a\u07aa\u0781\u07a8",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 763,
		name: "Elaa",
		name_dv: "\u0787\u07ac\u078d\u07a7",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 764,
		name: "Fenfushi",
		name_dv: "\u078a\u07ac\u0782\u07b0\u078a\u07aa\u0781\u07a8",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 765,
		name: "Fenmeerufushi",
		name_dv:
			"\u078a\u07ac\u0782\u07b0\u0789\u07a9\u0783\u07aa\u078a\u07aa\u0781\u07a8",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 766,
		name: "Fonidhaani",
		name_dv: "\u078a\u07ae\u0782\u07a8\u078b\u07a7\u0782\u07a8",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 767,
		name: "Funaddhoo",
		name_dv: "\u078a\u07aa\u0782\u07a6\u0787\u07b0\u078b\u07ab",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 768,
		name: "Fushi",
		name_dv: "\u078a\u07aa\u0781\u07a8",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 769,
		name: "Fushifaru",
		name_dv: "\u078a\u07aa\u0781\u07a8\u078a\u07a6\u0783\u07aa",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 770,
		name: "Gaalee",
		name_dv: "\u078e\u07a7\u078d\u07a9",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 771,
		name: "Gaathurehaa",
		name_dv: "\u078e\u07a7\u078c\u07aa\u0783\u07ac\u0780\u07a7",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 772,
		name: "Hathifushi",
		name_dv: "\u0780\u07a6\u078c\u07a8\u078a\u07aa\u0781\u07a8",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 773,
		name: "Hikandhilohi",
		name_dv:
			"\u0780\u07a8\u0786\u07a6\u0782\u078b\u07a8\u078d\u07ae\u0780\u07a8",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 774,
		name: "Hiriyanfushi",
		name_dv:
			"\u0780\u07a8\u0783\u07a8\u0794\u07a6\u0782\u07b0\u078a\u07aa\u0781\u07a8",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 775,
		name: "Hodelifushi",
		name_dv:
			"\u0780\u07ae\u0782\u0791\u07ac\u078d\u07a8\u078a\u07aa\u0781\u07a8",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 776,
		name: "Hulhiyanfushi",
		name_dv:
			"\u0780\u07aa\u0785\u07a8\u0794\u07a6\u0782\u07b0\u078a\u07aa\u0781\u07a8",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 777,
		name: "Kaadhoo",
		name_dv: "\u0786\u07a7\u078b\u07ab",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 778,
		name: "Kadufushi",
		name_dv: "\u0786\u07a6\u0782\u0791\u07aa\u078a\u07aa\u0781\u07a8",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 779,
		name: "Kafidhoo",
		name_dv: "\u0786\u07a6\u078a\u07a8\u078b\u07ab",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 780,
		name: "Kakolhas",
		name_dv: "\u0786\u07a6\u078a\u07ae\u0785\u07a6\u0790\u07b0",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 781,
		name: "Kalhudheyfushi",
		name_dv: "\u0786\u07a6\u0785\u07aa\u078b\u07ad\u078a\u07aa\u0781\u07a8",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 782,
		name: "Kalhufahalafushi",
		name_dv:
			"\u0786\u07a6\u0785\u07aa\u078a\u07a6\u0780\u07a6\u078d\u07a6\u078a\u07aa\u0781\u07a8",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 783,
		name: "Kandaru",
		name_dv: "\u0786\u07a6\u0782\u07b0\u0791\u07a6\u0783\u07aa",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 784,
		name: "Kani",
		name_dv: "\u0786\u07a6\u0782\u07a8",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 785,
		name: "Kolafushi",
		name_dv: "\u0786\u07ae\u078d\u07a6\u078a\u07aa\u0781\u07a8",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 786,
		name: "Kolhufushi",
		name_dv: "\u0786\u07ae\u0785\u07aa\u078a\u07aa\u0781\u07a8",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 787,
		name: "Kolhufushi",
		name_dv: "\u0786\u07ae\u0785\u07aa\u078a\u07aa\u0781\u07a8",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 788,
		name: "Kudadhoo",
		name_dv: "\u0786\u07aa\u0791\u07a6\u078b\u07ab",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 789,
		name: "Kudadhoofinolhu",
		name_dv:
			"\u0786\u07aa\u0791\u07a6\u078b\u07ab\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 790,
		name: "Kudakaadhoo",
		name_dv: "\u0786\u07aa\u0791\u07a6\u0786\u07a7\u078b\u07ab",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 791,
		name: "Kudakibidhoo",
		name_dv:
			"\u0786\u07aa\u0791\u07a6\u0786\u07a8\u0782\u0784\u07a8\u078b\u07ab",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 792,
		name: "Kuradhuvaru",
		name_dv: "\u0786\u07aa\u0783\u07a6\u078b\u07aa\u0788\u07a6\u0783\u07aa",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 793,
		name: "Kuredhifushi",
		name_dv:
			"\u0786\u07aa\u0783\u07ac\u0787\u07b0\u078b\u07a8\u078a\u07aa\u0781\u07a8",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 794,
		name: "Lhavaddoo",
		name_dv: "\u0785\u07a6\u0788\u07a6\u0787\u07b0\u0791\u07ab",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 795,
		name: "Maagulhi",
		name_dv: "\u0789\u07a7\u078e\u07aa\u0785\u07a8",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 796,
		name: "Maleafushi",
		name_dv: "\u0789\u07a6\u078d\u07ac\u0787\u07a6\u078a\u07aa\u0781\u07a8",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 797,
		name: "Mathidhoo",
		name_dv: "\u0789\u07a6\u078c\u07a8\u078b\u07ab",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 798,
		name: "Medhafushi",
		name_dv: "\u0789\u07ac\u078b\u07a6\u078a\u07aa\u0781\u07a8",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 799,
		name: "Olhudhiyafushi",
		name_dv:
			"\u0787\u07ae\u0785\u07aa\u078b\u07a8\u0794\u07a6\u078a\u07aa\u0781\u07a8",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 800,
		name: "Olhufushi",
		name_dv: "\u0787\u07ae\u0785\u07aa\u078a\u07aa\u0781\u07a8",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 801,
		name: "Olhufushifinolhu",
		name_dv:
			"\u0787\u07ae\u0785\u07aa\u078a\u07aa\u0781\u07a8\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 802,
		name: "Olhugiri",
		name_dv: "\u0787\u07ae\u0785\u07aa\u078e\u07a8\u0783\u07a8",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 803,
		name: "Rihaamaafushi",
		name_dv: "\u0783\u07a8\u0780\u07a7\u0789\u07a7\u078a\u07aa\u0781\u07a8",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 804,
		name: "Ruththibirah",
		name_dv:
			"\u0783\u07aa\u0787\u07b0\u078c\u07a8\u0784\u07a8\u0783\u07a6\u0781\u07b0",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 805,
		name: "Thinkolhufushi",
		name_dv:
			"\u078c\u07a8\u0782\u07b0\u0786\u07ae\u0785\u07aa\u078a\u07aa\u0781\u07a8",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 806,
		name: "Ufuriyaa",
		name_dv: "\u0787\u07aa\u078a\u07aa\u0783\u07a8\u0794\u07a7",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 807,
		name: "Usfushi",
		name_dv: "\u0787\u07aa\u0790\u07b0\u078a\u07aa\u0781\u07a8",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 808,
		name: "Vanbadhi",
		name_dv: "\u0788\u07a6\u0782\u07b0\u0784\u07a6\u0782\u078b\u07a8",
		atoll_id: 15,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 809,
		name: "Isdhoo",
		name_dv: "\u0787\u07a8\u0790\u07b0\u078b\u07ab",
		atoll_id: 16,
		island_code: 3501,
		is_inhibited: 1,
	},
	{
		id: 810,
		name: "Dhabidhoo",
		name_dv: "\u078b\u07a6\u0782\u0784\u07a8\u078b\u07ab",
		atoll_id: 16,
		island_code: 3502,
		is_inhibited: 1,
	},
	{
		id: 811,
		name: "Maabaidhoo",
		name_dv: "\u0789\u07a7\u0784\u07a6\u0787\u07a8\u078b\u07ab",
		atoll_id: 16,
		island_code: 3503,
		is_inhibited: 1,
	},
	{
		id: 812,
		name: "Mundoo",
		name_dv: "\u0789\u07aa\u0782\u07b0\u0791\u07ab",
		atoll_id: 16,
		island_code: 3504,
		is_inhibited: 1,
	},
	{
		id: 813,
		name: "Kalhaidhoo",
		name_dv: "\u0786\u07a6\u0785\u07a6\u0787\u07a8\u078b\u07ab",
		atoll_id: 16,
		island_code: 3505,
		is_inhibited: 1,
	},
	{
		id: 814,
		name: "Gan",
		name_dv: "\u078e\u07a6\u0782\u07b0",
		atoll_id: 16,
		island_code: 3506,
		is_inhibited: 1,
	},
	{
		id: 815,
		name: "Maavah",
		name_dv: "\u0789\u07a7\u0788\u07a6\u0781\u07b0",
		atoll_id: 16,
		island_code: 3507,
		is_inhibited: 1,
	},
	{
		id: 816,
		name: "Fonadhoo",
		name_dv: "\u078a\u07ae\u0782\u07a6\u078b\u07ab",
		atoll_id: 16,
		island_code: 3508,
		is_inhibited: 1,
	},
	{
		id: 817,
		name: "Gaadhoo",
		name_dv: "\u078e\u07a7\u078b\u07ab",
		atoll_id: 16,
		island_code: 3509,
		is_inhibited: 1,
	},
	{
		id: 818,
		name: "Maamendhoo",
		name_dv: "\u0789\u07a7\u0789\u07ac\u0782\u07b0\u078b\u07ab",
		atoll_id: 16,
		island_code: 3510,
		is_inhibited: 1,
	},
	{
		id: 819,
		name: "Hithadhoo",
		name_dv: "\u0780\u07a8\u078c\u07a6\u078b\u07ab",
		atoll_id: 16,
		island_code: 3511,
		is_inhibited: 1,
	},
	{
		id: 820,
		name: "Kunahandhoo",
		name_dv: "\u0786\u07aa\u0782\u07a6\u0780\u07a6\u0782\u07b0\u078b\u07ab",
		atoll_id: 16,
		island_code: 3512,
		is_inhibited: 1,
	},
	{
		id: 821,
		name: "Baresdhoo",
		name_dv: "\u0784\u07a6\u0783\u07ac\u0790\u07b0\u078b\u07ab",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 822,
		name: "Maandhoo",
		name_dv: "\u0789\u07a7\u0782\u07b0\u078b\u07ab",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 823,
		name: "Hulhimendhoo",
		name_dv: "\u0780\u07aa\u0785\u07a8\u0789\u07ac\u0782\u07b0\u078b\u07ab",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 824,
		name: "Kadhdhoo",
		name_dv: "\u0786\u07a6\u0787\u07b0\u078b\u07ab",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 825,
		name: "Athahedha",
		name_dv: "\u0787\u07a6\u078c\u07a6\u0780\u07ac\u078b\u07a6",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 826,
		name: "Bileitheyrahaa",
		name_dv:
			"\u0784\u07a8\u078d\u07a6\u078c\u07b0\u078c\u07ad\u0783\u07a6\u0780\u07a7",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 827,
		name: "Bodufenrahaa",
		name_dv:
			"\u0784\u07ae\u0791\u07aa\u078a\u07ac\u0782\u07b0\u0783\u07a6\u0780\u07a7",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 828,
		name: "Bodufinolhu",
		name_dv: "\u0784\u07ae\u0791\u07aa\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 829,
		name: "Boduhuraa",
		name_dv: "\u0784\u07ae\u0791\u07aa\u0780\u07aa\u0783\u07a7",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 830,
		name: "Boduhuraa",
		name_dv: "\u0784\u07ae\u0791\u07aa\u0780\u07aa\u0783\u07a7",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 831,
		name: "Kudahuraa",
		name_dv: "\u0786\u07aa\u0791\u07a6\u0780\u07aa\u0783\u07a7",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 832,
		name: "Boduhuraa",
		name_dv: "\u0784\u07ae\u0791\u07aa\u0780\u07aa\u0783\u07a7",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 833,
		name: "Bodumaabulhali",
		name_dv:
			"\u0784\u07ae\u0791\u07aa\u0789\u07a7\u0784\u07aa\u0785\u07a6\u078d\u07a8",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 834,
		name: "Bokaiyfushi",
		name_dv: "\u0784\u07ae\u0786\u07a6\u0787\u07a8\u078a\u07aa\u0781\u07a8",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 835,
		name: "Burahaa",
		name_dv: "\u0784\u07aa\u0783\u07a6\u0780\u07a7",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 836,
		name: "Dhekunuvinagadu",
		name_dv:
			"\u078b\u07ac\u0786\u07aa\u0782\u07aa\u0788\u07a8\u0782\u07a6\u078e\u07a6\u0782\u0791\u07aa",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 837,
		name: "Dhonberahaa",
		name_dv: "\u078b\u07ae\u0782\u07b0\u0784\u07ac\u0783\u07a6\u0780\u07a7",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 838,
		name: "Fares",
		name_dv: "\u078a\u07a6\u0783\u07ac\u0790\u07b0",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 839,
		name: "Fenboahuraa",
		name_dv: "\u078a\u07ac\u0782\u07b0\u0784\u07af\u0780\u07aa\u0783\u07a7",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 840,
		name: "Fenboarahaa",
		name_dv: "\u078a\u07ac\u0782\u07b0\u0784\u07af\u0783\u07a6\u0780\u07a7",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 841,
		name: "Fonagaadhoo",
		name_dv: "\u078a\u07ae\u0782\u07a6\u078e\u07a7\u078b\u07ab",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 842,
		name: "Fushi",
		name_dv: "\u078a\u07aa\u0781\u07a8",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 843,
		name: "Gasgfinolhu",
		name_dv: "\u078e\u07a6\u0790\u07b0\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 844,
		name: "Guraidhoo",
		name_dv: "\u078e\u07aa\u0783\u07a6\u0787\u07a8\u078b\u07ab",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 845,
		name: "Haiythirahaa",
		name_dv: "\u0780\u07a6\u078c\u07b0\u078c\u07a8\u0783\u07a6\u0780\u07a7",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 846,
		name: "Haiythoshi",
		name_dv: "\u0780\u07a6\u078c\u07b0\u078c\u07ae\u0781\u07a8",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 847,
		name: "Hanhushi",
		name_dv: "\u0780\u07a6\u0782\u07b0\u0780\u07aa\u0781\u07a8",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 848,
		name: "Hedha",
		name_dv: "\u0780\u07ac\u078b\u07a6",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 849,
		name: "Hikandhirahaa",
		name_dv:
			"\u0780\u07a8\u0786\u07a6\u0782\u078b\u07a8\u0783\u07a6\u0780\u07a7",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 850,
		name: "Holhurahaa",
		name_dv: "\u0780\u07ae\u0785\u07aa\u0783\u07a6\u0780\u07a7",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 851,
		name: "Hulhisdhoo",
		name_dv: "\u0780\u07aa\u0785\u07a8\u0790\u07b0\u078b\u07ab",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 852,
		name: "Hulhiyandhoo",
		name_dv: "\u0780\u07aa\u0785\u07a8\u0794\u07a6\u0782\u07b0\u078b\u07ab",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 853,
		name: "Kalhurahaa",
		name_dv: "\u0786\u07a6\u0785\u07aa\u0783\u07a6\u0780\u07a7",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 854,
		name: "Kandaru",
		name_dv: "\u0786\u07a6\u0782\u0791\u07a6\u0783\u07aa",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 855,
		name: "Kanuhuraa",
		name_dv: "\u0786\u07a6\u0782\u07aa\u0780\u07aa\u0783\u07a7",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 856,
		name: "Kashidhoo",
		name_dv: "\u0786\u07a6\u0781\u07a8\u078b\u07ab",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 857,
		name: "Kilegerahaa",
		name_dv: "\u0786\u07a8\u078d\u07ac\u078e\u07ac\u0783\u07a6\u0780\u07a7",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 858,
		name: "Kudafares",
		name_dv: "\u0786\u07aa\u0791\u07a6\u078a\u07a6\u0783\u07ac\u0790\u07b0",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 859,
		name: "Kudafenhuraa",
		name_dv:
			"\u0786\u07aa\u0791\u07a6\u078a\u07ac\u0782\u07b0\u0780\u07aa\u0783\u07a7",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 860,
		name: "Kudafushi",
		name_dv: "\u0786\u07aa\u0791\u07a6\u078a\u07aa\u0781\u07a8",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 861,
		name: "Kudakalhaidhoo",
		name_dv:
			"\u0786\u07aa\u0791\u07a6\u0786\u07a6\u0785\u07a6\u0787\u07a8\u078b\u07ab",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 862,
		name: "Kudamaabulhahi",
		name_dv:
			"\u0786\u07aa\u0791\u07a6\u0789\u07a7\u0784\u07aa\u0785\u07a6\u0780\u07a8",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 863,
		name: "Kudamahiguli",
		name_dv:
			"\u0786\u07aa\u0791\u07a6\u0789\u07a6\u0780\u07a8\u078e\u07aa\u078d\u07a8",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 864,
		name: "Kudaveshi",
		name_dv: "\u0786\u07aa\u0791\u07a6\u0788\u07ac\u0781\u07a8",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 865,
		name: "Maafushi",
		name_dv: "\u0789\u07a7\u078a\u07aa\u0781\u07a8",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 866,
		name: "Maakalhuveli",
		name_dv: "\u0789\u07a7\u0786\u07a6\u0785\u07aa\u0788\u07ac\u078d\u07a8",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 867,
		name: "Maaveshi",
		name_dv: "\u0789\u07a7\u0788\u07ac\u0781\u07a8",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 868,
		name: "Mahakanfushi",
		name_dv:
			"\u0789\u07a6\u0780\u07a6\u0786\u07a6\u0782\u07b0\u078a\u07aa\u0781\u07a8",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 869,
		name: "Mahigulhi",
		name_dv: "\u0789\u07a6\u0780\u07a8\u078e\u07aa\u0785\u07a8",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 870,
		name: "Medhuvinagadu",
		name_dv:
			"\u0789\u07ac\u078b\u07aa\u0788\u07a8\u0782\u07a6\u078e\u07a6\u0782\u0791\u07aa",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 871,
		name: "Mendhoo",
		name_dv: "\u0789\u07ac\u0782\u07b0\u078b\u07ab",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 872,
		name: "Olhutholhu",
		name_dv: "\u0787\u07ae\u0785\u07aa\u078c\u07ae\u0785\u07a8",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 873,
		name: "Olhuveli",
		name_dv: "\u0787\u07ae\u0785\u07aa\u0788\u07ac\u078d\u07a8",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 874,
		name: "Thathunrahaa",
		name_dv: "\u078c\u07a6\u078c\u07aa\u0782\u07b0\u0783\u07a6\u0780\u07a7",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 875,
		name: "Thunburi",
		name_dv: "\u078c\u07aa\u0782\u0784\u07aa\u0783\u07a8",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 876,
		name: "Usfinolhu",
		name_dv: "\u0787\u07aa\u0790\u07b0\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 877,
		name: "Uthuruvinagadu",
		name_dv:
			"\u0787\u07aa\u078c\u07aa\u0783\u07aa\u0788\u07a8\u0782\u07a6\u078e\u07a6\u0782\u0791\u07aa",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 878,
		name: "Uvadhevifushi",
		name_dv:
			"\u0787\u07aa\u0788\u07a6\u078b\u07ac\u0788\u07a8\u078a\u07aa\u0781\u07a8",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 879,
		name: "Vadinolhu",
		name_dv: "\u0788\u07a6\u078b\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 880,
		name: "Veligandufinolhu",
		name_dv:
			"\u0788\u07ac\u078d\u07a8\u078e\u07a6\u0782\u0791\u07aa\u078a\u07a8\u0782\u07ae\u0785\u07aa",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 881,
		name: "Ziyaaraiffushi",
		name_dv:
			"\u0792\u07a8\u0794\u07a7\u0783\u07a6\u078c\u07b0\u078a\u07aa\u0781\u07a8",
		atoll_id: 16,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 882,
		name: "Kolamaafushi",
		name_dv: "\u0786\u07ae\u078d\u07a6\u0789\u07a7\u078a\u07aa\u0781\u07a8",
		atoll_id: 17,
		island_code: 3601,
		is_inhibited: 1,
	},
	{
		id: 883,
		name: "Villingili",
		name_dv: "\u0788\u07a8\u078d\u07a8\u0782\u078e\u07a8\u078d\u07a8",
		atoll_id: 17,
		island_code: 3602,
		is_inhibited: 1,
	},
	{
		id: 884,
		name: "Maamendhoo",
		name_dv: "\u0789\u07a7\u0789\u07ac\u0782\u07b0\u078b\u07ab",
		atoll_id: 17,
		island_code: 3603,
		is_inhibited: 1,
	},
	{
		id: 885,
		name: "Nilandhoo",
		name_dv: "\u0782\u07a8\u078d\u07a6\u0782\u07b0\u078b\u07ab",
		atoll_id: 17,
		island_code: 3604,
		is_inhibited: 1,
	},
	{
		id: 886,
		name: "Dhaandhoo",
		name_dv: "\u078b\u07a7\u0782\u07b0\u078b\u07ab",
		atoll_id: 17,
		island_code: 3605,
		is_inhibited: 1,
	},
	{
		id: 887,
		name: "Dhevvadhoo",
		name_dv: "\u078b\u07ac\u0787\u07b0\u0788\u07a6\u078b\u07ab",
		atoll_id: 17,
		island_code: 3606,
		is_inhibited: 1,
	},
	{
		id: 888,
		name: "Kondey",
		name_dv: "\u0786\u07ae\u0782\u0791\u07ad",
		atoll_id: 17,
		island_code: 3607,
		is_inhibited: 1,
	},
	{
		id: 889,
		name: "Dhiyadhoo",
		name_dv: "\u078b\u07a8\u0794\u07a6\u078b\u07ab",
		atoll_id: 17,
		island_code: 3608,
		is_inhibited: 1,
	},
	{
		id: 890,
		name: "Gemanafushi",
		name_dv: "\u078e\u07ac\u0789\u07a6\u0782\u07a6\u078a\u07aa\u0781\u07a8",
		atoll_id: 17,
		island_code: 3609,
		is_inhibited: 1,
	},
	{
		id: 891,
		name: "Kanduhulhudhoo",
		name_dv:
			"\u0786\u07a6\u0782\u0791\u07aa\u0780\u07aa\u0785\u07aa\u078b\u07ab",
		atoll_id: 17,
		island_code: 3610,
		is_inhibited: 1,
	},
	{
		id: 892,
		name: "Kooddoo",
		name_dv: "\u0786\u07ab\u0787\u07b0\u0791\u07ab",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 893,
		name: "Kendheraa",
		name_dv: "\u0786\u07ac\u0782\u078b\u07ac\u0783\u07a7",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 894,
		name: "Araigaththaa",
		name_dv:
			"\u0787\u07a6\u0783\u07a6\u0787\u07a8\u078e\u07a6\u078c\u07b0\u078c\u07a7",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 895,
		name: "Baavanadhoo",
		name_dv: "\u0784\u07a7\u0788\u07a6\u0782\u07a6\u078b\u07ab",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 896,
		name: "Baberaahuttaa",
		name_dv:
			"\u0784\u07a6\u0784\u07ac\u0783\u07a7\u0780\u07aa\u0787\u07b0\u0793\u07a7",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 897,
		name: "Bakeththaa",
		name_dv: "\u0784\u07a6\u0786\u07ac\u0787\u07b0\u078c\u07a7",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 898,
		name: "Beyrumauddoo",
		name_dv:
			"\u0784\u07ad\u0783\u07aa\u0789\u07a7\u0787\u07aa\u0787\u07b0\u0791\u07ab",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 899,
		name: "Boaddoo",
		name_dv: "\u0784\u07af\u0787\u07b0\u0791\u07ab",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 900,
		name: "Bodubondeyyaa",
		name_dv:
			"\u0784\u07ae\u0791\u07aa\u0784\u07ae\u0782\u07b0\u0791\u07ac\u0787\u07b0\u0794\u07a7",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 901,
		name: "Bodufushi",
		name_dv: "\u0784\u07ae\u0791\u07aa\u078a\u07aa\u0781\u07a8",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 902,
		name: "Bodehuttaa",
		name_dv: "\u0784\u07ae\u0791\u07ac\u0780\u07aa\u0787\u07b0\u0793\u07a7",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 903,
		name: "Dhevaamaagalaa",
		name_dv: "\u078b\u07ac\u0788\u07a7\u0789\u07a7\u078e\u07a6\u078d\u07a7",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 904,
		name: "Dhevalaabadhoo",
		name_dv: "\u078b\u07ac\u0788\u07a6\u078d\u07a7\u0784\u07a6\u078b\u07ab",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 905,
		name: "Dhigudhoo",
		name_dv: "\u078b\u07a8\u078e\u07aa\u078b\u07ab",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 906,
		name: "Dhigurah",
		name_dv: "\u078b\u07a8\u078e\u07aa\u0783\u07a6\u0781\u07b0",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 907,
		name: "Falhumaafushi",
		name_dv: "\u078a\u07a6\u0785\u07aa\u0789\u07a7\u078a\u07aa\u0781\u07a8",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 908,
		name: "Falhuverrehaa",
		name_dv:
			"\u078a\u07a6\u0785\u07aa\u0788\u07ac\u0787\u07b0\u0783\u07ac\u0780\u07a7",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 909,
		name: "Faruhulhudhoo",
		name_dv: "\u078a\u07a6\u0783\u07aa\u0780\u07aa\u0785\u07aa\u078b\u07ab",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 910,
		name: "Fenrehaa",
		name_dv: "\u078a\u07ac\u0782\u07b0\u0783\u07ac\u0780\u07a7",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 911,
		name: "Fenrehaahuttaa",
		name_dv:
			"\u078a\u07ac\u0782\u07b0\u0783\u07ac\u0780\u07a7\u0780\u07aa\u0787\u07b0\u0793\u07a7",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 912,
		name: "Fulangi",
		name_dv: "\u078a\u07aa\u078d\u07a6\u0782\u078e\u07a8",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 913,
		name: "Funadhoo",
		name_dv: "\u078a\u07aa\u0782\u07a6\u078b\u07ab",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 914,
		name: "Funadhooviligillaa",
		name_dv:
			"\u078a\u07aa\u0782\u07a6\u078b\u07ab\u0788\u07a8\u078d\u07a8\u078e\u07a8\u0787\u07b0\u078d\u07a7",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 915,
		name: "Funamauddoo",
		name_dv:
			"\u078a\u07aa\u0782\u07a6\u0789\u07a6\u0787\u07aa\u0787\u07b0\u0791\u07ab",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 916,
		name: "Galamadhoo",
		name_dv: "\u078e\u07a6\u078d\u07a6\u0789\u07a6\u078b\u07ab",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 917,
		name: "Hadahaa",
		name_dv: "\u0780\u07a6\u0791\u07a6\u0780\u07a7",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 918,
		name: "Hagedhoo",
		name_dv: "\u0780\u07a6\u078e\u07ac\u078b\u07ab",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 919,
		name: "Hagevillaa",
		name_dv: "\u0780\u07a6\u078e\u07ac\u0788\u07a8\u078d\u07a7",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 920,
		name: "Heenaamaagalaa",
		name_dv: "\u0780\u07a9\u0782\u07a7\u0789\u07a7\u078e\u07a6\u078d\u07a7",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 921,
		name: "Hirihuttaa",
		name_dv: "\u0780\u07a8\u0783\u07a8\u0780\u07aa\u0787\u07b0\u0793\u07a7",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 922,
		name: "Hithaadhoo",
		name_dv: "\u0780\u07a8\u078c\u07a7\u078b\u07ab",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 923,
		name: "Hithandhoogalaa",
		name_dv:
			"\u0780\u07a8\u078c\u07a6\u0782\u07b0\u078b\u07ab\u078e\u07a6\u078d\u07a7",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 924,
		name: "Hulhimendhoo",
		name_dv: "\u0780\u07aa\u0785\u07a8\u0789\u07ac\u0782\u07b0\u078b\u07ab",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 925,
		name: "Huredhdhoo",
		name_dv: "\u0780\u07aa\u0783\u07ac\u0787\u07b0\u078b\u07ab",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 926,
		name: "Idimaa",
		name_dv: "\u0787\u07a8\u0791\u07a8\u0789\u07a7",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 927,
		name: "Inareha",
		name_dv: "\u0787\u07a8\u0782\u07a6\u0783\u07ac\u0780\u07a7",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 928,
		name: "Kanduvilingili",
		name_dv:
			"\u0786\u07a6\u0782\u0791\u07aa\u0788\u07a8\u078d\u07a8\u0782\u078e\u07a8\u078d\u07a8",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 929,
		name: "Kalhehuttaa",
		name_dv: "\u0786\u07a6\u0785\u07ac\u0780\u07aa\u0787\u07b0\u0793\u07a7",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 930,
		name: "Keesseyrahaa",
		name_dv: "\u0786\u07a9\u0787\u07b0\u0790\u07ad\u0783\u07a6\u0780\u07a7",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 931,
		name: "Koadhoo",
		name_dv: "\u0786\u07af\u078b\u07ab",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 932,
		name: "Kodafuttaa",
		name_dv: "\u0786\u07ae\u0791\u07a6\u078a\u07aa\u0787\u07b0\u0793\u07a7",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 933,
		name: "Kodeymatheelaabadhoo",
		name_dv:
			"\u0786\u07ae\u0782\u0791\u07ad\u0789\u07a6\u078c\u07a9\u078d\u07a7\u0784\u07a6\u078b\u07ab",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 934,
		name: "Kodeyvilingili",
		name_dv:
			"\u0786\u07ae\u0782\u0791\u07ad\u0788\u07a8\u078d\u07a8\u0782\u078e\u07a8\u078d\u07a8",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 935,
		name: "Kolhaa",
		name_dv: "\u0786\u07ae\u0785\u07a7",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 936,
		name: "Kubumaafushi",
		name_dv: "\u0786\u07aa\u0784\u07aa\u0789\u07a7\u078a\u07aa\u0781\u07a8",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 937,
		name: "Kudafehala",
		name_dv: "\u0786\u07aa\u0791\u07a6\u078a\u07ac\u0780\u07a6\u078d\u07a6",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 938,
		name: "Kudalafari",
		name_dv: "\u0786\u07aa\u0791\u07a6\u078d\u07a6\u078a\u07a6\u0783\u07a8",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 939,
		name: "Kudhebondeyyaa",
		name_dv:
			"\u0786\u07aa\u078b\u07ac\u0784\u07ae\u0782\u07b0\u0791\u07ac\u0787\u07b0\u0794\u07a7",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 940,
		name: "Kuredhdhoo",
		name_dv: "\u0786\u07aa\u0783\u07ac\u0787\u07b0\u078b\u07ab",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 941,
		name: "Lhossaa",
		name_dv: "\u0785\u07ae\u0787\u07b0\u0790\u07a7",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 942,
		name: "Maadhiguvara",
		name_dv: "\u0789\u07a7\u078b\u07a8\u078e\u07aa\u0788\u07a6\u0783\u07aa",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 943,
		name: "Maafehelaa",
		name_dv: "\u0789\u07a7\u078a\u07ac\u0780\u07ac\u078d\u07a7",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 944,
		name: "Maagehuttaa",
		name_dv: "\u0789\u07a7\u078e\u07ac\u0780\u07aa\u0787\u07b0\u0793\u07a7",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 945,
		name: "Maamutaa",
		name_dv: "\u0789\u07a7\u0789\u07aa\u078c\u07a7",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 946,
		name: "Maanaagalaa",
		name_dv: "\u0789\u07a7\u0782\u07a7\u078e\u07a6\u078d\u07a7",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 947,
		name: "Maarandhoo",
		name_dv: "\u0789\u07a7\u0783\u07a6\u0782\u07b0\u078b\u07ab",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 948,
		name: "Maarehaa",
		name_dv: "\u0789\u07a7\u0783\u07ac\u0780\u07a7",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 949,
		name: "Mahadhdhoo",
		name_dv: "\u0789\u07a6\u0780\u07a6\u0787\u07b0\u078b\u07ab",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 950,
		name: "Mathidhdhoo",
		name_dv: "\u0789\u07a6\u078c\u07a8\u0787\u07b0\u078b\u07ab",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 951,
		name: "Medhuhuttaa",
		name_dv: "\u0789\u07ac\u078b\u07aa\u0780\u07aa\u0787\u07b0\u0793\u07a7",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 952,
		name: "Medhurehaa",
		name_dv: "\u0789\u07ac\u078b\u07aa\u0783\u07ac\u0780\u07a7",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 953,
		name: "Melaimu",
		name_dv: "\u0789\u07ac\u078d\u07a6\u0787\u07a8\u0789\u07aa",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 954,
		name: "Meradhoo",
		name_dv: "\u0789\u07ac\u0783\u07a6\u078b\u07ab",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 955,
		name: "Minimensaa",
		name_dv: "\u0789\u07a8\u0782\u07a8\u0789\u07ac\u0782\u07b0\u0790\u07a7",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 956,
		name: "Munandhoo",
		name_dv: "\u0789\u07aa\u0782\u07a6\u0782\u07b0\u078b\u07ab",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 957,
		name: "Odagallaa",
		name_dv: "\u0787\u07ae\u0791\u07a6\u078e\u07a6\u0787\u07b0\u078d\u07a7",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 958,
		name: "Raavehrehaa",
		name_dv: "\u0783\u07a7\u0788\u07ac\u0787\u07b0\u0783\u07ac\u0780\u07a7",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 959,
		name: "Ribidhoo",
		name_dv: "\u0783\u07a8\u0784\u078b\u07ab",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 960,
		name: "Viligalaa",
		name_dv: "\u0788\u07a8\u078d\u07a8\u078e\u07a6\u078d\u07a7",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 961,
		name: "Vodamulaa",
		name_dv: "\u0788\u07ae\u0791\u07a6\u0789\u07aa\u078d\u07a7",
		atoll_id: 17,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 962,
		name: "Madaveli",
		name_dv: "\u0789\u07a6\u0791\u07a6\u0788\u07ac\u078d\u07a8",
		atoll_id: 18,
		island_code: 3701,
		is_inhibited: 1,
	},
	{
		id: 963,
		name: "Hoadedhdhoo",
		name_dv: "\u0780\u07af\u0791\u07ac\u0787\u07b0\u078b\u07ab",
		atoll_id: 18,
		island_code: 3702,
		is_inhibited: 1,
	},
	{
		id: 964,
		name: "Nadellaa",
		name_dv: "\u0782\u07a6\u0791\u07ac\u0787\u07b0\u078d\u07a7",
		atoll_id: 18,
		island_code: 3703,
		is_inhibited: 1,
	},
	{
		id: 965,
		name: "Gadhdhoo",
		name_dv: "\u078e\u07a6\u0787\u07b0\u078b\u07ab",
		atoll_id: 18,
		island_code: 3704,
		is_inhibited: 1,
	},
	{
		id: 966,
		name: "Rathafandhoo",
		name_dv: "\u0783\u07a6\u078c\u07a6\u078a\u07a6\u0782\u07b0\u078b\u07ab",
		atoll_id: 18,
		island_code: 3705,
		is_inhibited: 1,
	},
	{
		id: 967,
		name: "Vaadhoo",
		name_dv: "\u0788\u07a7\u078b\u07ab",
		atoll_id: 18,
		island_code: 3706,
		is_inhibited: 1,
	},
	{
		id: 968,
		name: "Fiyoaree",
		name_dv: "\u078a\u07a8\u0794\u07af\u0783\u07a9",
		atoll_id: 18,
		island_code: 3707,
		is_inhibited: 1,
	},
	{
		id: 969,
		name: "Thinadhoo",
		name_dv: "\u078c\u07a8\u0782\u07a6\u078b\u07ab",
		atoll_id: 18,
		island_code: 3710,
		is_inhibited: 1,
	},
	{
		id: 970,
		name: "Fares-Maathodaa",
		name_dv:
			"\u078a\u07a6\u0783\u07ac\u0790\u07b0\u0789\u07a7\u078c\u07ae\u0791\u07a7",
		atoll_id: 18,
		island_code: 3711,
		is_inhibited: 1,
	},
	{
		id: 971,
		name: "Konottaa",
		name_dv: "\u0786\u07ae\u0782\u07ae\u0787\u07b0\u0793\u07a7",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 972,
		name: "Kaadedhdhoo",
		name_dv: "\u0786\u07a7\u0791\u07ac\u0787\u07b0\u078b\u07ab",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 973,
		name: "Baulhageella",
		name_dv:
			"\u0784\u07a7\u0787\u07aa\u0785\u07a6\u078e\u07a9\u0787\u07b0\u078d\u07a7",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 974,
		name: "Dhigulaabadhoo",
		name_dv: "\u078b\u07a8\u078e\u07aa\u078d\u07a7\u0784\u07a6\u078b\u07ab",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 975,
		name: "Dhoonirehaa",
		name_dv: "\u078b\u07ab\u0782\u07a8\u0783\u07ac\u0780\u07a7",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 976,
		name: "Faanahuttaa",
		name_dv: "\u078a\u07a7\u0782\u07a6\u0780\u07aa\u0787\u07b0\u0793\u07a7",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 977,
		name: "Farehulhudhoo",
		name_dv: "\u078a\u07a7\u0783\u07ac\u0780\u07aa\u0785\u07aa\u078b\u07ab",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 978,
		name: "Gan",
		name_dv: "\u078e\u07a6\u0782\u07b0",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 979,
		name: "Gazeera",
		name_dv: "\u078e\u07a6\u0792\u07a9\u0783\u07a7",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 980,
		name: "Golhallaa",
		name_dv: "\u078e\u07ae\u0785\u07a6\u0787\u07b0\u078d\u07a7",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 981,
		name: "Haadhoo",
		name_dv: "\u0780\u07a7\u078b\u07ab",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 982,
		name: "Havoddaa",
		name_dv: "\u0780\u07ae\u0788\u07a6\u0787\u07b0\u0791\u07a7",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 983,
		name: "Havodigalaa",
		name_dv: "\u0780\u07ae\u0788\u07a6\u0791\u07a8\u078e\u07a6\u078d\u07a7",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 984,
		name: "Hulhuvaarulu",
		name_dv: "\u0780\u07aa\u0785\u07aa\u0788\u07a7\u0783\u07aa\u078d\u07aa",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 985,
		name: "Kaadehdhuvaa",
		name_dv: "\u0786\u07a7\u0791\u07ac\u0787\u07b0\u078b\u07aa\u0788\u07a7",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 986,
		name: "Kaashidhoo",
		name_dv: "\u0786\u07a7\u0781\u07a8\u078b\u07ab",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 987,
		name: "Kadahalagalaa",
		name_dv:
			"\u0786\u07a6\u0791\u07a6\u0780\u07a6\u078d\u07a6\u078e\u07a6\u078d\u07a7",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 988,
		name: "Kafenaa",
		name_dv: "\u0786\u07a7\u078a\u07ac\u0782\u07a7",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 989,
		name: "Kalhehamala",
		name_dv: "\u0786\u07a6\u0785\u07ac\u0780\u07a6\u0789\u07a6\u078d\u07a6",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 990,
		name: "Kalherehaa",
		name_dv: "\u0786\u07a6\u0785\u07ac\u0783\u07ac\u0780\u07a7",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 991,
		name: "Kodaanafuttaa",
		name_dv:
			"\u0786\u07ae\u0791\u07a7\u0782\u07a6\u078a\u07aa\u0787\u07b0\u0793\u07a7",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 992,
		name: "Odavarrehaa",
		name_dv:
			"\u0787\u07ae\u0791\u07a6\u0788\u07a6\u0787\u07b0\u0783\u07ac\u0780\u07a7",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 993,
		name: "Kudahuttaa",
		name_dv: "\u0786\u07aa\u0791\u07a6\u0780\u07aa\u0787\u07b0\u0793\u07a7",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 994,
		name: "Kudhelaihaa",
		name_dv: "\u0786\u07aa\u078b\u07ac\u078d\u07a6\u0787\u07a8\u0780\u07a7",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 995,
		name: "Laihaa",
		name_dv: "\u078d\u07a6\u0787\u07a8\u0780\u07a7",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 996,
		name: "Lonudhoo",
		name_dv: "\u078d\u07ae\u0782\u07aa\u078b\u07ab",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 997,
		name: "Lonudhoohuttaa",
		name_dv:
			"\u078d\u07ae\u0782\u07aa\u078b\u07ab\u0780\u07aa\u0787\u07b0\u0793\u07a7",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 998,
		name: "Gehemaagala",
		name_dv: "\u078e\u07ac\u0780\u07ac\u0789\u07a7\u078e\u07a6\u078d\u07a7",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 999,
		name: "Maagoderehaa",
		name_dv: "\u0789\u07a7\u078e\u07ae\u0791\u07ac\u0783\u07ac\u0780\u07a7",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 1000,
		name: "Maahutigalaa",
		name_dv: "\u0789\u07a7\u0780\u07aa\u0793\u07a8\u078e\u07a6\u078d\u07a7",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 1001,
		name: "Maaodagalaa",
		name_dv: "\u0789\u07a7\u0787\u07ae\u0791\u07a6\u078e\u07a6\u078d\u07a7",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 1002,
		name: "Maavaarulu",
		name_dv: "\u0789\u07a7\u0788\u07a7\u0783\u07aa\u078d\u07aa",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 1003,
		name: "Maavadhdhuvaa",
		name_dv: "\u0789\u07a7\u0788\u07a6\u0781\u07b0\u078b\u07aa\u0788\u07a7",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 1004,
		name: "Magudhdhuvaa",
		name_dv: "\u0789\u07a6\u078e\u07aa\u0787\u07b0\u078b\u07aa\u0788\u07a7",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 1005,
		name: "Mallaarehaa",
		name_dv: "\u0789\u07a6\u0787\u07b0\u078d\u07a7\u0783\u07ac\u0780\u07a7",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 1006,
		name: "Mathihuttaa",
		name_dv: "\u0789\u07a6\u078c\u07a8\u0780\u07aa\u0787\u07b0\u0793\u07a7",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 1007,
		name: "Menthandhuvaa",
		name_dv:
			"\u0789\u07ac\u0782\u07b0\u078c\u07a6\u0782\u0791\u07aa\u0788\u07a7",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 1008,
		name: "Mudhimaahuttaa",
		name_dv:
			"\u0789\u07aa\u078b\u07a8\u0789\u07a7\u0780\u07aa\u0787\u07b0\u0793\u07a7",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 1009,
		name: "Odagallaa",
		name_dv: "\u0787\u07ae\u0791\u07a6\u078e\u07a6\u0787\u07b0\u078d\u07a7",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 1010,
		name: "Rahadhuvaa",
		name_dv: "\u0783\u07a6\u0780\u07a6\u078b\u07aa\u0788\u07a7",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 1011,
		name: "Meehunthibenehuttaa",
		name_dv:
			"\u0789\u07a9\u0780\u07aa\u0782\u07b0\u078c\u07a8\u0784\u07ac\u0782\u07ac\u0780\u07aa\u0787\u07b0\u0793\u07a7",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 1012,
		name: "Thinehuttaa",
		name_dv: "\u078c\u07a8\u0782\u07ac\u0780\u07aa\u0787\u07b0\u0793\u07a7",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 1013,
		name: "Ullegalaa",
		name_dv: "\u0787\u07aa\u0787\u07b0\u078d\u07ac\u078e\u07a6\u078d\u07a7",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 1014,
		name: "Vaireyaadhuvaa",
		name_dv:
			"\u0788\u07a6\u0787\u07a8\u0783\u07ac\u0794\u07a7\u078b\u07aa\u0788\u07a7",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 1015,
		name: "Vatavarrehaa",
		name_dv:
			"\u0788\u07a6\u0793\u07a6\u0788\u07a6\u0787\u07b0\u0783\u07ac\u0780\u07a7",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 1016,
		name: "Gehevelagalaa",
		name_dv:
			"\u078e\u07ac\u0780\u07ac\u0788\u07ac\u078d\u07a6\u078e\u07a6\u078d\u07a7",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 1017,
		name: "Veraaviligilillaa",
		name_dv:
			"\u0788\u07ac\u0783\u07a7\u0788\u07a8\u078d\u07a8\u078e\u07a8\u078d\u07a8\u0787\u07b0\u078d\u07a7",
		atoll_id: 18,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 1018,
		name: "Fuvahmulah",
		name_dv:
			"\u078a\u07aa\u0788\u07a6\u0787\u07b0\u0789\u07aa\u078d\u07a6\u0787\u07b0",
		atoll_id: 19,
		island_code: 3801,
		is_inhibited: 1,
	},
	{
		id: 1019,
		name: "Meedhoo",
		name_dv: "\u0789\u07a9\u078b\u07ab",
		atoll_id: 20,
		island_code: 3901,
		is_inhibited: 1,
	},
	{
		id: 1020,
		name: "Hithadhoo",
		name_dv: "\u0780\u07a8\u078c\u07a6\u078b\u07ab",
		atoll_id: 20,
		island_code: 3902,
		is_inhibited: 1,
	},
	{
		id: 1021,
		name: "Maradhoo",
		name_dv: "\u0789\u07a6\u0783\u07a6\u078b\u07ab",
		atoll_id: 20,
		island_code: 3903,
		is_inhibited: 1,
	},
	{
		id: 1022,
		name: "Feydhoo",
		name_dv: "\u078a\u07ad\u078b\u07ab",
		atoll_id: 20,
		island_code: 3904,
		is_inhibited: 1,
	},
	{
		id: 1023,
		name: "Maradhoo-Feydhoo",
		name_dv: "\u0789\u07a6\u0783\u07a6\u078b\u07ab\u078a\u07ad\u078b\u07ab",
		atoll_id: 20,
		island_code: 3905,
		is_inhibited: 1,
	},
	{
		id: 1024,
		name: "Hulhudhoo",
		name_dv: "\u0780\u07aa\u0785\u07aa\u078b\u07ab",
		atoll_id: 20,
		island_code: 3906,
		is_inhibited: 1,
	},
	{
		id: 1025,
		name: "Hulhumeedhoo",
		name_dv: "\u0780\u07aa\u0785\u07aa\u0789\u07a9\u078b\u07ab",
		atoll_id: 20,
		island_code: null,
		is_inhibited: 1,
	},
	{
		id: 1026,
		name: "Gan",
		name_dv: "\u078e\u07a6\u0782\u07b0",
		atoll_id: 20,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 1027,
		name: "Bedeyaurah",
		name_dv:
			"\u0784\u07ac\u078b\u07ad\u0787\u07a6\u0787\u07aa\u0783\u07a6\u0781\u07b0",
		atoll_id: 20,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 1028,
		name: "Boduhajara",
		name_dv: "\u0784\u07ae\u0791\u07aa\u0780\u07a6\u0796\u07a6\u0783\u07a7",
		atoll_id: 20,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 1029,
		name: "Bodukalhuhera",
		name_dv:
			"\u0784\u07ae\u0791\u07aa\u0786\u07a6\u0785\u07aa\u0780\u07ac\u0783\u07a7",
		atoll_id: 20,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 1030,
		name: "Dheerondi",
		name_dv: "\u078b\u07a9\u0783\u07ae\u0782\u0791\u07a8",
		atoll_id: 20,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 1031,
		name: "Dhigihera",
		name_dv: "\u078b\u07a8\u078e\u07a8\u0780\u07ac\u0783\u07a6",
		atoll_id: 20,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 1032,
		name: "Gomahera",
		name_dv: "\u078e\u07ae\u0789\u07a6\u0780\u07ac\u0783\u07a6",
		atoll_id: 20,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 1033,
		name: "Hankede",
		name_dv: "\u0780\u07a6\u0782\u07b0\u0786\u07ac\u0791\u07ac",
		atoll_id: 20,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 1034,
		name: "Hassanbeaarah",
		name_dv:
			"\u0780\u07a6\u0790\u07a6\u0782\u07b0\u0784\u07ac\u0787\u07a7\u0783\u07a6\u0781\u07b0",
		atoll_id: 20,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 1035,
		name: "Herethere",
		name_dv: "\u0780\u07ac\u0783\u07ac\u078c\u07ac\u0783\u07ac",
		atoll_id: 20,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 1036,
		name: "Hikahera",
		name_dv: "\u0780\u07a8\u0786\u07a6\u0780\u07ac\u0783\u07a6",
		atoll_id: 20,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 1037,
		name: "Kafathalhaahera",
		name_dv:
			"\u0786\u07a6\u078a\u07a6\u078c\u07a6\u0785\u07a7\u0780\u07ac\u0783\u07a6",
		atoll_id: 20,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 1038,
		name: "Kan'dihera",
		name_dv: "\u0786\u07a6\u0782\u0791\u07a8\u0780\u07ac\u0783\u07a6",
		atoll_id: 20,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 1039,
		name: "Kedavaahera",
		name_dv: "\u0786\u07ac\u0791\u07a6\u0788\u07a7\u0780\u07ac\u0783\u07a6",
		atoll_id: 20,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 1040,
		name: "Kudamaahera",
		name_dv: "\u0786\u07aa\u0791\u07a6\u0789\u07a7\u0780\u07ac\u0783\u07a6",
		atoll_id: 20,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 1041,
		name: "Kaohera",
		name_dv: "\u0786\u07af\u0780\u07ac\u0783\u07a6",
		atoll_id: 20,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 1042,
		name: "Maahera",
		name_dv: "\u0789\u07a7\u0780\u07ac\u0783\u07a6",
		atoll_id: 20,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 1043,
		name: "Mulike'de",
		name_dv: "\u0789\u07aa\u078d\u07a8\u0786\u07ac\u0782\u0791\u07ac",
		atoll_id: 20,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 1044,
		name: "Savaaheli",
		name_dv: "\u0790\u07a6\u0788\u07a7\u0780\u07ac\u078d\u07a8",
		atoll_id: 20,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 1045,
		name: "Villingili",
		name_dv: "\u0788\u07a8\u078d\u07a8\u0782\u078e\u07a8\u078d\u07a8",
		atoll_id: 20,
		island_code: null,
		is_inhibited: 0,
	},
	{
		id: 1046,
		name: "Thun'bafushi",
		name_dv: "\u078c\u07aa\u0782\u0784\u07a6\u078a\u07aa\u0781\u07a8",
		atoll_id: 20,
		island_code: null,
		is_inhibited: 0,
	},
];
// Counting the number of objects with is_inhibited: 1 and 0
let countIsInhibited1 = islands.reduce((count, island) => {
	if (island.is_inhibited === 1) {
		return count + 1;
	} else {
		return count;
	}
}, 0);

let countIsInhibited0 = islands.reduce((count, island) => {
	if (island.is_inhibited === 0) {
		return count + 1;
	} else {
		return count;
	}
}, 0);

console.log("Count of is_inhibited: 1 =", countIsInhibited1);
console.log("Count of is_inhibited: 0 =", countIsInhibited0);
</script>
