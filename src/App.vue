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
            <PoTable :thead="tableHead" :tbody="tableBody">
              <template #th="{ label }">
                {{ label }}
              </template>
              <template #td="{ name, nid, source, dod }">
                <td data-title="name">{{ name }}</td>
                <td data-title="NID">{{ nid }}</td>
                <td data-title="source">{{ source }}</td>
                <td data-title="dod">{{ dod }}</td>
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
} from "./components";
import { ref } from "vue";

import {
  PlayIcon,
  AcademicCapIcon,
  HomeIcon,
  PlusIcon,
  BeakerIcon,
  SparklesIcon,
  FunnelIcon,
  BanknotesIcon,
  PhoneIcon,
  BoltIcon,
  UsersIcon,
  UserGroupIcon,
} from "@heroicons/vue/24/outline";

let searchQuery = ref("");
let toggleState = ref(false);
let checkboxState = ref(false);
let showAlert = ref(false);
let inputModel = ref("what");

const tabs = [
  {
    name: "Employements",
    icon: UsersIcon,
    current: true,
  },
  {
    name: "Teams",
    icon: UserGroupIcon,
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

let notifications = [
  {
    name: "You are no subscribed",
    time: "now",
    text: "You have subscribed to DMS notifications for Ali Doe",
    seen: false,
  },
  {
    name: "Contribution added",
    time: "5 mins ago",
    text: "Your contribution for the month of January was added sucessfully",
    seen: true,
  },
];

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

let sidebarContent = [
  {
    groupName: "Start",
    items: [
      {
        label: "Introduction",
        url: "/",
        icon: PlayIcon,
      },
      {
        label: "Another",
        url: "/another",
        icon: AcademicCapIcon,
      },
    ],
  },
  {
    groupName: "Form",
    items: [
      {
        label: "Inputs",
        url: "/dashboard",
        icon: HomeIcon,
        disabled: true,
      },
      {
        label: "Input groups",
        url: "/another",
        icon: AcademicCapIcon,
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
];

let tableBody = [
  { name: "Jane Gasim", nid: "A00000", source: "YY Clinic", dod: "2022-11-12" },
  {
    name: "Mariyam Doe",
    nid: "A00000",
    source: "Rashu Council",
    dod: "2022-11-02",
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
    name: "Pension UI",
    icon: `<svg
          v-if="currAppIcon === ''"
          xmlns="http://www.w3.org/2000/svg"
          class="fill-current"
          viewBox="0 -64 640 640"
        >
          <path fill="#7D3C98"
            d="M312 8C175 8 64 119 64 256s111 248 248 248 248-111 248-248c0-25.38-3.82-49.86-10.9-72.91l63.92 52.97L640 173.49l-98.2-10.89c-.65-1.6-1.31-3.19-2-4.77l94.89-40.43L595 61.64l-60.41 84.91C494.17 64.46 409.7 8 312 8zM191.99 256c0-9.3 4.1-17.5 10.5-23.4l-31-9.3c-8.5-2.5-13.3-11.5-10.7-19.9 2.5-8.5 11.4-13.2 19.9-10.7l80 24c8.5 2.5 13.3 11.5 10.7 19.9-2.1 6.9-8.4 11.4-15.3 11.4-.5 0-1.1-.2-1.7-.2.7 2.7 1.7 5.3 1.7 8.2 0 17.7-14.3 32-32 32s-32.1-14.3-32.1-32zm252.61-32.7-31 9.3c6.3 5.8 10.5 14.1 10.5 23.4 0 17.7-14.3 32-32 32s-32-14.3-32-32c0-2.9.9-5.6 1.7-8.2-.6.1-1.1.2-1.7.2-6.9 0-13.2-4.5-15.3-11.4-2.5-8.5 2.3-17.4 10.7-19.9l80-24c8.4-2.5 17.4 2.3 19.9 10.7 2.5 8.5-2.3 17.4-10.8 19.9zm-265.19-52.28h262.56c42.35 0 54.97 49.74 53.8 83.99-1.18 34.83-41.79 72.53-72.23 72.53-61.58 0-73.62-40.25-112.85-40.28-39.23.03-51.27 40.28-112.85 40.28-30.44 0-71.05-37.7-72.23-72.53-1.17-34.25 11.45-83.99 53.8-83.99z"
          />
        </svg>`,
    bgColor: "bg-purple-500",
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
  {
    name: "Member",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill="none" d="M0 0h24v24H0z"/>
  <path fill="#2E4053" d="M14.256 21.744 12 24l-2.256-2.256C5.31 20.72 2 16.744 2 12 2 6.48 6.48 2 12 2s10 4.48 10 10c0 4.744-3.31 8.72-7.744 9.744zm-8.233-6.328C7.491 17.606 9.695 19 12.16 19c2.464 0 4.669-1.393 6.136-3.584A8.968 8.968 0 0 0 12.16 13a8.968 8.968 0 0 0-6.137 2.416zM12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>`,
    bgColor: "bg-red-500",
    menu: [],
  },
  {
    name: "Overpayments",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
  <path fill="#2E86C1" fill-rule="evenodd" d="M2 8a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V8Zm.5 3a.5.5 0 0 0-.5.5V16a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4v-4.5a.5.5 0 0 0-.5-.5h-19ZM13 15a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>
</svg>`,
    bgColor: "bg-red-500",
    menu: [],
  },
  {
    name: "Call Centre",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="_x32_" version="1.1" viewBox="0 0 512 512">
  <path fill="#EC7063" d="M337.469 206.488v-79.735l-42.812 7.654v32.814H217.34v-32.814l-42.809-7.654v79.735h-50.883L65.566 333.609v114.146c0 10.862 8.016 19.668 17.898 19.668H428.53c9.887 0 17.902-8.806 17.902-19.668V333.609l-58.82-127.121h-50.143zM256 410.493c-39.942 0-72.32-32.38-72.32-72.322s32.379-72.322 72.32-72.322 72.32 32.38 72.32 72.322-32.378 72.322-72.32 72.322z" class="st0"/>
  <path fill="#EC7063" d="M434.02 70.476c-38.508-16.331-123.258-25.9-178.02-25.9-53.02 0-139.512 9.568-178.02 25.9C39.016 87 0 123.985 0 167.556c0 23.89 11.906 38.075 14.754 41.373h82.898c4.934 0 15.734-21.419 15.734-30.166 0-15.386-8.148-36.78-8.148-36.78.469-10.588 4.676-18.324 21.918-25.736 31.262-13.438 100.019-14.041 128.844-14.041 28.824 0 97.582.604 128.844 14.041 17.242 7.412 21.449 15.148 21.918 25.736 0 0-8.148 21.394-8.148 36.78 0 8.747 10.801 30.166 15.734 30.166h82.898c2.848-3.298 14.754-17.484 14.754-41.373 0-43.571-39.016-80.556-77.98-97.08z" class="st0"/>
</svg>`,
    bgColor: "bg-amber-500",
    menu: [],
  },
  {
    name: "Death Repository Service",
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
];
</script>
