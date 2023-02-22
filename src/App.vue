<template>
  <div class="po-min-h-full po-pt-16">
    <PoTopBar
      :has-search="true"
      :app-list="allApps"
      :profile-switcher-data="profileSwitcherData"
      :notifications="notifications"
      @profile-switcher-click="handleProfileSwitcherClick"
      app-name="Pension UI Kit"
      @query="NewSearch"
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
    alert-description="This is an alert! I repeat, this is an alert."
    @button-click="handleAlertOkClick"
  />
  <PoCommandPalette />
  <div class="po-h-full po-max-w-full">
    <PoSidebarDrawer
      :content="sidebarContent"
      @button-click="handleSidebarButtonClick"
      :has-feedback="true"
      :apps="appsList"
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
              <PoModal open-btn-label="Open Modal" />
              <PoButton @click="openAlertClick" label="Open Alert" />
            </div>

            <br />
            <PoToggle label="Toggle me" v-model="toggleState" />
            {{ toggleState }}
            <br />
            <PoCheckbox
              v-model="checkboxState"
              label="Check me"
              id="checkbox-one"
              message="if you can"
            />
            {{ checkboxState }}
            <br />
            <div class="po-mt-5 po-grid po-grid-cols-2 po-gap-5">
              <PoInputField label="Input" id="input-idssss" type="text" />
              <PoRadioInput
                :options="radioOptions"
                :pre-selected="radioOptionSelected"
                v-model="radioOptionSelected"
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
            <PoTable :thead="tableHead" :tbody="tableBody">
              <template #th="{ label }">
                {{ label }}
              </template>
              <template #td="{ name, nid, source, dod, action }">
                <td data-title="name">{{ name }}</td>
                <td data-title="NID">{{ nid }}</td>
                <td data-title="source">{{ source }}</td>
                <td data-title="dod">{{ dod }}</td>
                <td data-title="action">
                  <div
                    class="po-flex po-items-center po-space-x-5 po-justify-end"
                    v-if="action === 'text'"
                  >
                    <a href="" class="po-text-sky-600 hover:po-text-sky-900"
                      >Edit</a
                    >
                    <a href="" class="po-text-red-600 hover:po-text-red-900"
                      >Delete</a
                    >
                    <a href="" class="po-text-sky-600 hover:po-text-sky-900"
                      >View</a
                    >
                  </div>
                  <div
                    class="po-flex po-items-center po-space-x-2 po-justify-end"
                    v-if="action === 'icon'"
                  >
                    <span
                      class="
                        po-w-6 po-h-6 po-rounded-lg po-bg-white
                        genie-effect
                        po-flex po-items-center po-justify-center
                        hover:po-bg-slate-50
                        po-cursor-pointer
                      "
                    >
                      <PencilIcon
                        class="po-w-4 po-stroke-2 po-stroke-blue-400"
                      />
                    </span>
                    <span
                      class="
                        po-w-6 po-h-6 po-rounded-lg po-bg-white
                        genie-effect
                        po-flex po-items-center po-justify-center
                        hover:po-bg-slate-50
                        po-cursor-pointer
                      "
                    >
                      <TrashIcon class="po-w-5 po-stroke-2 po-stroke-red-400" />
                    </span>
                    <span
                      class="
                        po-w-6 po-h-6 po-rounded-lg po-bg-white
                        genie-effect
                        po-flex po-items-center po-justify-center
                        hover:po-bg-slate-50
                        po-cursor-pointer
                      "
                    >
                      <EyeIcon
                        class="po-w-5 po-stroke-2 po-stroke-emerald-400"
                      />
                    </span>
                  </div>
                  <div
                    class="po-flex po-items-center po-space-x-3 po-justify-end"
                    v-if="action === 'both'"
                  >
                    <a href="" class="po-text-sky-600 hover:po-text-sky-900"
                      >Approve</a
                    >
                    <a href="" class="po-text-red-600 hover:po-text-red-900"
                      >Reject</a
                    >
                    <span
                      class="
                        po-w-6 po-h-6 po-rounded-lg po-bg-white
                        genie-effect
                        po-flex po-items-center po-justify-center
                        hover:po-bg-slate-50
                        po-cursor-pointer
                      "
                    >
                      <PencilIcon
                        class="po-w-4 po-stroke-2 po-stroke-blue-400"
                      />
                    </span>
                    <span
                      class="
                        po-w-6 po-h-6 po-rounded-lg po-bg-white
                        genie-effect
                        po-flex po-items-center po-justify-center
                        hover:po-bg-slate-50
                        po-cursor-pointer
                      "
                    >
                      <EyeIcon
                        class="po-w-5 po-stroke-2 po-stroke-emerald-400"
                      />
                    </span>
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
                  label="Input Error"
                  id="input-id2"
                  :has-error="true"
                  type="text"
                  error-message="Hello error"
                />
                <br />
                <PoInputFile label="File input" />
                <br />
                <PoTextarea label="Textarea" />
              </div>
            </template>
          </PoCard>
          <PoCard class="po-mt-5 po-p-5">
            <template v-slot:content>
              <div class="items-center space-x-5">
                <PoSelectField
                  label="App name"
                  @selected="handleSelectFieldClick"
                  :list="selectFieldList"
                  :pre-selected="selectFieldPreSelected"
                  v-model="selectFieldSelected"
                />
                Pre {{ selectFieldPreSelected }}
                <br />
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
        <PoCard class="po-mt-5 po-p-5">
          <template v-slot:content>
            <PoEmpty
              label="Nothing to show"
              description="No show for sho, Write a helpful message. Maybe suggest something to do when it's empty."
              :icon="BeakerIcon"
            />
          </template>
        </PoCard>
        <PoCard class="po-mt-5 po-p-5">
          <template v-slot:content>
            <div
              class="
                po-flex po-items-center po-space-x-5 po-space-y-5 po-flex-wrap
              "
            >
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
            </div>
          </template>
        </PoCard>
      </PoContentArea>

      <PoFooter />
    </main>
  </div>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import {
  PoTopBar,
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
} from "./components";
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

let searchQuery = ref("");
let toggleState = ref(false);
let checkboxState = ref(false);
let showAlert = ref(false);
let inputModel = ref("what");
const tabs = [
  {
    name: "Wage Changes",
    icon: BanknotesIconSolid,
    iconColor: "po-fill-green-400",
    href: "#",
    current: true,
  },
  {
    name: "Terminations",
    icon: ScissorsIcon,
    iconColor: "po-fill-red-400",
    href: "#",
    current: false,
  },
  {
    name: "Location Changes",
    icon: MapPinIcon,
    iconColor: "po-fill-orange-400",
    href: "#",
    current: false,
  },
  {
    name: "Designation Changes",
    icon: BriefcaseIcon,
    iconColor: "po-fill-cyan-400",
    href: "#",
    current: false,
  },
];

let allApps = [
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
];

let notifications = [];

let profileSwitcherData = {
  profiles: [
    {
      name: "Ministry of Pension",
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
    {
      name: "Hussian Jackson Doe",
      identifier: "",
      url: "#self",
      current: false,
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
    {
      name: "ABC Enterprises Pvt Ltd",
      identifier: "202301052026",
      url: "#business",
      current: false,
      isPersonal: false,
    },
    {
      name: "Hussian Jackson Doe",
      identifier: "",
      url: "#self",
      current: false,
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
};

function handleProfileSwitcherClick(item) {
  console.log("profileswitcherclick", item);
}

console.log("icon", PlayIcon);

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
    dod: "2022-11-12",
    action: "text",
  },
  {
    name: "Mariyam Doe",
    nid: "A00000",
    source: "Rashu Council",
    dod: "2022-11-02",
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

  setTimeout(() => {
    showAlert.value = false;
  }, 100);
}

function handleAlertOkClick() {
  console.log("alert ok");
}

const selectFieldList = [
  { id: 1, name: "Koshaaru" },
  { id: 2, name: "HelpDesk" },
  { id: 3, name: "Another" },
];

const selectFieldPreSelected = ref(selectFieldList[1]);
const selectFieldSelected = ref(null);

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

const radioOptionSelected = ref(radioOptions[0]);

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
  console.log("handleSelectFieldClick", val);
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
</script>
