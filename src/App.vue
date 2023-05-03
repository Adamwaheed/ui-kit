<template>
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
		<main class="shell-content">
			<PoActionBar
				:items="actionBarItems"
				:show-back-button="true"
				@button-click="handleActionBarClick"
			/>
			<PoContentArea>
				<PoStatsBlock :items="statsBlockItems" />
				<PoFormStatusMessage
					message="Thank you! The record has been created successfully!"
				/>
				<PoFormStatusMessage
					:is-error="true"
					message="Could not complete your request."
					:error-list="['NID no is required', 'Date of birth is required']"
				/>
				<PoPageTitle
					class="po-mt-5"
					label="Page title"
					:show-pagination="true"
					:show-filter="true"
					:show-download="true"
					:pagination="pagination"
					@pagination-click="handlePaginationClick"
					@button-click="handlePageTitleClick"
				/>
				<PoCard class="po-mt-5 po-p-5">
					<template v-slot:content>
						Searching {{ searchQuery }}<br />
						<div class="po-flex po-space-x-3 po-mt-3">
							<PoModal open-btn-label="Open Modal">
								<template v-slot:content>
									adsd<br />
									adsd<br />
									adsd<br />
									adsd<br />
									adsd<br />
									adsd<br />
									adsd<br />
									adsd<br />
									adsd<br />
									adsd<br />
									adsd<br />
									adsd<br />
									adsd<br />
									adsd<br />
									adsd<br />
									adsd<br />
									adsd<br />
									adsd<br />
									adsd<br />
									adsd<br />
									adsd<br />
									adsd<br />
									adsd<br />
									adsd<br />
									adsd<br />
									adsd<br />
									adsd<br />
									adsd<br />
									adsd<br />
									adsd<br />
									adsd<br />
									adsd<br />
									adsd<br />
									adsd<br />
									adsd<br />
									adsd<br />
									adsd<br />
								</template>
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
									<div class="p-5">...</div>
								</template>
							</PoModal>
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
								id="input-idssss"
								type="text"
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
					</template>
				</PoCard>
				<PoPageTitle
					label="Another title"
					description="This is a page description that explains how it works. Every element in the page. And a little more."
					:show-filter="true"
					:show-download="true"
					:stats="[
						{ value: '32', label: 'Employees' },
						{ value: '10', label: 'Flights' },
					]"
				/>
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
							class="
								po-text-sm po-text-slate-600 po-block po-my-10 po-font-bold
							"
							>Striped</span
						>
						<PoDescriptionList
							:items="descriptionListItems"
							:striped="true"
							@button-click="handleDescriptionListActionClick"
						/>
						<span
							class="
								po-text-sm po-text-slate-600 po-block po-my-10 po-font-bold
							"
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
									label="Input"
									id="input-id"
									type="text"
									message="This is an input"
									info="A tooltip"
									error-message="Hello error"
									v-model="inputModel"
								/>

								<p>{{ inputModel }}</p>

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
							</div>
						</template>
					</PoCard>
					<PoCard class="po-mt-5 po-p-5">
						<template v-slot:content>
							<PoSelectField
								label="Select field with two labels"
								:list="selectFieldListTwo"
								@selected="handleSelectFieldTwoClick"
								v-model="selectFieldTwoSelected"
							/>
							<div class="items-center space-x-5">
								<PoSelectField
									label="App names"
									@selected="handleSelectFieldClick"
									:list="selectFieldList"
									v-model="selectFieldSelected"
									error-message="This an error speaking"
								/>
								<br />
								{{ selectFieldList }}
								Selected {{ selectFieldSelected }}
							</div>
							<PoLogs :items="logItems" />
							<PoDownloadFileList
								:files="downloadableFiles"
								@button-click="handleDownloadClick"
							/>
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

								<PoCallLog
									:list="callLog"
									selectFieldLabel="Status"
									:selectFieldList="callLogSelectFieldList"
									@select-updated="callLogSelectFieldUpdated"
								/>
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

			<PoFooter />
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
		<PoToast :show="showNotificationOne" action-type="danger" :hide-in="4000" />
		<PoToast :show="showNotificationOne" action-type="warn" :hide-in="4000" />
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
	PoSidebarDrawer,
	PoActionBar,
	PoCard,
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
	PoCallLog,
} from "./components";

import { formatDate } from "./shared/helper";
import { ref } from "vue";

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

let searchQuery = ref("");
let toggleState = ref(false);
let checkboxState = ref(false);
let showAlert = ref(false);
let showNotificationOne = ref(false);
let inputModel = ref("what");
let currQuery = ref("search this bro");
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

function handleProfileSwitcherClick(obj) {
	console.log("profileswitcherclick", obj);

	const clickedIndex = profileSwitcherData.value.profiles.findIndex(
		(item) => item.name === obj.name
	);

	for (
		let index = 0;
		index < profileSwitcherData.value.profiles.length;
		index++
	) {
		if (clickedIndex === index) {
			profileSwitcherData.value.profiles[index].current = true;
		} else {
			profileSwitcherData.value.profiles[index].current = false;
		}
	}
}

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
				url: "/another",
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

let tableBody = [
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
	{ id: 1, name: "Sub category name", subtitle: "Category" },
	{ id: 2, name: "Running around in circles", subtitle: "Activity" },
	{ id: 3, name: "Something drinkable", subtitle: "Water" },
]);

function handleSelectFieldTwoClick(item) {
	console.log("select field two selected ok", item);
}

const selectFieldPreSelected = ref(selectFieldList[1]);
const selectFieldSelected = ref(null);
const selectFieldTwoSelected = ref(null);

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

function handlePageTitleClick(item) {
	switch (item) {
		case "download":
			alert("download");
			break;
	}
}

function handleSidebarButtonClick(link) {
	console.log("sidebar click ", link);
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

const callLog = [
	{
		id: 1,
		subject: "Inheritance claim process",
		type: "out",
		topRightLabel: "Category",
		highlightColor: "po-border-orange-500",
		selectFieldValue: 1,
		meta: [
			{
				label: "Status",
				description: "Open",
				color: "po-text-green-600 po-bg-green-100",
			},
			{
				label: "Date",
				description: "Jun 20, 2023",
			},
		],
		details: [
			{
				title: "Sub category",
				description: "Other",
			},
			{
				title: "Note",
				description:
					"Issue resolved and informed to the Member, no other issues reported.",
			},
			{
				title: "Called by",
				description: "Ismail Geller / PR",
			},
		],
	},
	{
		id: 2,
		subject: "Inheritance claim process",
		type: "viber",
		topRightLabel: "Category",
		highlightColor: "po-border-orange-200",
		selectFieldValue: 2,
		meta: [
			{
				label: "Status",
				description: "Closed",
			},
			{
				label: "Date",
				description: "Jun 20, 2023",
			},
			{
				label: "User",
				description: "Jane Doe",
			},
			{
				label: "Status",
				description: "Closed",
			},
			{
				label: "Date",
				description: "Jun 20, 2023",
			},
			{
				label: "User",
				description: "Jane Doe",
				color: "po-text-blue-600 po-bg-blue-100",
			},
		],
		details: [
			{
				title: "Sub category",
				description: "Other",
			},
			{
				title: "Note",
				description:
					"Issue resolved and informed to the Member, no other issues reported.",
			},
			{
				title: "Called by",
				description: "Ismail Geller / PR",
			},
		],
	},
	{
		id: 3,
		subject: "Inheritance claim process",
		type: "email",
		topRightLabel: "Category",
		selectFieldValue: 1,
		meta: [
			{
				label: "Status",
				description: "Closed",
			},
		],
		details: [
			{
				title: "Sub category",
				description: "Other",
			},
			{
				title: "Note",
				description:
					"Issue resolved and informed to the Member, no other issues reported.",
			},
			{
				title: "Called by",
				description: "Ismail Geller / PR",
			},
		],
	},
];

const callLogSelectFieldList = [
	{
		id: 1,
		name: "Open",
	},
	{
		id: 2,
		name: "Resolved",
	},
];

function callLogSelectFieldUpdated(obj) {
	console.log("callLogSelectFieldUpdated", obj);
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
</script>
