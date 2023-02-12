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
        <svg class="po-fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 01.878.645 49.17 49.17 0 01.376 5.452.657.657 0 01-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 00-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 01-.595 4.845.75.75 0 01-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 01-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 01-.658.643 49.118 49.118 0 01-4.708-.36.75.75 0 01-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 005.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 00.659-.663 47.703 47.703 0 00-.31-4.82.75.75 0 01.83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 00.657-.642z" /></svg>
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
    <PoSidebarDrawer :content="sidebarContent" @button-click="handleSidebarButtonClick" />
    <main class="shell-content">
      <PoActionBar
      :items="actionBarItems"
      :show-back-button="true"
      @button-click="handleActionBarClick"
      />
      <PoContentArea>
        <PoStatsBlock :items="statsBlockItems" />
        <PoFormStatusMessage message="Thank you! The record has been created successfully!" />
        <PoFormStatusMessage :is-error="true" message="Could not complete your request." :error-list="['NID no is required', 'Date of birth is required']" />
        <PoPageTitle class="po-mt-5" label="Page title" :show-pagination="true" :show-filter="true" :show-download="true" :pagination="pagination" @pagination-click="handlePaginationClick" @button-click="handlePageTitleClick" />
        <PoCard class="po-mt-5 po-p-5">
          <template v-slot:content>
            Searching {{searchQuery}}<br />
            <div class="po-flex po-space-x-3 po-mt-3">
              <PoModal open-btn-label="Open Modal" />
              <PoButton @click="openAlertClick" label="Open Alert" />
            </div>
  
            <br />
            <PoToggle label="Toggle me" v-model="toggleState" />
            {{ toggleState }}
            <br />
            <PoCheckbox v-model="checkboxState" label="Check me" id="checkbox-one" message="if you can" />
            {{ checkboxState }}
            <br />
            <div class="po-mt-5 po-grid po-grid-cols-2 po-gap-5">
              <PoInputField label="Input" id="input-idssss" type="text" />
              <PoRadioInput :options="radioOptions" :pre-selected="radioOptionSelected" v-model="radioOptionSelected" />
              {{ radioOptionSelected }}
            </div>
            
          </template>
        </PoCard>
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
              <PoPagination :pagination="pagination" @button-click="handlePaginationClick" />
            </div>
          </template>
        </PoCard>
        <PoCard class="po-mt-5 po-p-5" title="Description list" :is-loading="true">
          <template v-slot:content>
            <PoDescriptionList :items="descriptionListItems" />
            <span class="po-text-sm po-text-slate-600 po-block po-my-10 po-font-bold">Striped</span>
            <PoDescriptionList :items="descriptionListItems" :striped="true" @button-click="handleDescriptionListActionClick" />
            <span class="po-text-sm po-text-slate-600 po-block po-my-10 po-font-bold">Slot</span>
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
                <PoInputField label="Input" id="input-id" type="text" message="This is an input" info="A tooltip" error-message="Hello error" v-model="inputModel" />
                
                <p>{{ inputModel }}</p>
  
                <PoInputField label="Input Error" id="input-id2" :has-error="true" type="text" error-message="Hello error" />
              </div>
            </template>
          </PoCard>
          <PoCard class="po-mt-5 po-p-5">
            <template v-slot:content>
              <div class=" items-center space-x-5">
                <PoSelectField label="App name" :list="selectFieldList" :pre-selected="selectFieldPreSelected" v-model="selectFieldSelected" />
                Pre {{ selectFieldPreSelected }}
                <br />
                Selected {{ selectFieldSelected }}
              </div>
              <PoLogs :items="logItems" />
              <PoDownloadFileList :files="downloadableFiles" @button-click="handleDownloadClick" />
            </template>
          </PoCard>
        </div>
        <PoCard class="po-mt-5 po-p-5">
          <template v-slot:content>
            <div class="po-flex po-items-center po-space-x-5 po-space-y-5 po-flex-wrap">
              <PoButton type="button" label="Button" />
              <PoButton type="submit" label="Submit" />
              <PoButton type="link" label="Link" to="/home" />
              <PoButton type="button" label="Button Disabled" :disabled="true" />
              <PoButton type="submit" label="Submit Disabled" :disabled="true" />
              <PoButton type="button" label="Button" :override-colors="true" size="sm" class="po-bg-cyan-600 hover:po-bg-cyan-700 po-text-white" />
              <PoButton type="button" label="Button" :override-colors="true" size="lg" class="po-bg-rose-600 hover:po-bg-rose-700 po-text-white" />
              <PoButton @click="handleDialClick" to="a">
                <template v-slot:label>
                  <span class="po-flex po-items-center po-space-x-2">
                    <PhoneIcon class="po-w-4 po-h-4 po-fill-current" />
                    <span>Dial</span>
                  </span>
                </template>
              </PoButton>
              <PoButton type="simple" label="I am a button" to="/home" />
              <PoButton type="simple" to="/home" @button-click="handleButtonClick">
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
  BoltIcon
} from "@heroicons/vue/24/outline";

let searchQuery = ref("");
let toggleState = ref(false);
let checkboxState = ref(false);
let showAlert = ref(false);
let inputModel = ref("what");

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
      name: "Hussian Jackson Doe",
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
  
  console.log('profileswitcherclick', item)
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
        disabled: true
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
    showAlert.value = false
  }, 100)
}

function handleAlertOkClick() {
  console.log('alert ok')
}

const selectFieldList = [
  { id: 1, name: 'Koshaaru' },
  { id: 2, name: 'HelpDesk' },
  { id: 3, name: 'Another' },
];

const selectFieldPreSelected = ref(selectFieldList[1]);
const selectFieldSelected = ref(null);

const radioOptions = [
  {
    id: 1, title: 'Option one'
  },
  {
    id: 2, title: 'Option two'
  },
];

const radioOptionSelected = ref(radioOptions[0]);

const statsBlockItems = [
    {
        label: 'Number of Maturities',
        value: '20',
        bgColor: 'bg-orange-50',
        iconColor: 'text-orange-700',
        icon: SparklesIcon
    },
    {
        label: 'Principal Frequency',
        value: 'Semi-Annual',
        bgColor: 'bg-sky-50',
        iconColor: 'text-sky-700',
        icon: FunnelIcon
    },
    {
        label: 'Purchase Value',
        value: '80,000,000.00',
        bgColor: 'bg-green-50',
        iconColor: 'text-green-700',
        icon: BanknotesIcon
    },
];

let pagination = {
  label: 'Page 2 of 20',
  nextLink: '/users/1',
  prevLink: '/users/3',
}

function handlePaginationClick(item) {
  console.log('pagination click', item)
}

function handlePageTitleClick(item) {
    switch (item) {
        case "download":
        alert('download')
        break;
    }
}

function handleSidebarButtonClick(link) {
  console.log('sidebar click ', link)
}

function handleButtonClick(to) {
  alert(to);
}

function handleDialClick(to) {
  console.log(to);
}

const logItems = [
  {
    label: 'Remarks',
    date: 'Dec 29, 2022',
    by: 'Jane Singhe',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum'
  },
  {
    label: 'Approved',
    date: 'Dec 29, 2022',
    by: 'Suzanne Ali',
    description: ''
  },
  {
    label: 'Reported',
    date: 'Dec 28, 2022',
    by: '',
    description: ''
  },
];

const downloadableFiles = [
  {
    label: 'resume_back_end_developer.pdf'
  },
  {
    label: 'another_files.pdf'
  },
  {
    label: 'one_more_file.pdf'
  },
];

function handleDownloadClick(label) {
  console.log('downloadclick', label)
}

</script>
