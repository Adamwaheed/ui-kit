<template>
  <div class="min-h-full pt-16">
    <PoTopBar
      :has-search="true"
      :app-list="allApps"
      :profile-switcher-data="profileSwitcherData"
      :notifications="notifications"
      @query="NewSearch"
    />
  </div>
  <div class="h-full max-w-full">
    <PoSidebarDrawer :content="sidebarContent" />
    <main class="shell-content">
      <PoActionBar
        :items="actionBarItems"
        :show-back-button="true"
        @button-click="handleActionBarClick"
      />

        <div class="mt-10 px-6 lg:px-8 pb-10">
          <PoPageTitle label="Searching" />
          <PoCard class="mt-5 p-5">
            <template v-slot:content>
              Searching {{searchQuery}}
            </template>
          </PoCard>
          <PoCard class="mt-5">
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
            </template>
          </PoCard>
          <PoCard class="mt-5 p-5">
            <template v-slot:content>
              <PoDescriptionList :items="descriptionListItems" :striped="true" @button-click="handleDescriptionListActionClick" />
            </template>
          </PoCard>
          <div class="grid grid-cols-2 gap-5">
            <PoCard class="mt-5 p-5">
              <template v-slot:content>
                <PoInputField label="Input" id="input-id" type="text" message="This is an input" info="A tooltip" error-message="Hello error" v-model="inputModel" />
  
                <p>{{ inputModel }}</p>
              </template>
            </PoCard>
            <PoCard class="mt-5 p-5">
              <template v-slot:content>
                <div class=" items-center space-x-5">
                  <PoSelectField label="Select input" />
                </div>
              </template>
            </PoCard>
          </div>
          <PoCard class="mt-5 p-5">
            <template v-slot:content>
              <div class="flex items-center space-x-5">
                <PoButton type="button" label="Button" />
                <PoButton type="submit" label="Submit" />
                <PoButton type="link" label="Link" to="/home" />
                <PoButton type="button" label="Button Disabled" :disabled="true" />
                <PoButton type="submit" label="Submit Disabled" :disabled="true" />
                <PoButton type="button" label="Button" :override-colors="true" size="sm" class="bg-cyan-600 hover:bg-cyan-700 text-white" />
                <PoButton type="button" label="Button" :override-colors="true" size="lg" class="bg-rose-600 hover:bg-rose-700 text-white" />
              </div>
            </template>
          </PoCard>
        </div>
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
  PoSelectField
} from "./components";
import { ref } from "vue";

let searchQuery = ref("");
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
  currProfileLabel: "HA",
  profiles: [
    {
      name: "Self",
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
  ],
  currentProfileUrl: "#currprofile",
};

let sidebarContent = [
  {
    groupName: "Start",
    items: [
      {
        label: "Introduction",
        url: "/dashboard",
        icon: "PlayIcon",
        isActive: true,
      },
      {
        label: "Another",
        url: "/another",
        icon: "AcademicCapIcon",
        isActive: false,
      },
    ],
  },
  {
    groupName: "Form",
    items: [
      {
        label: "Inputs",
        url: "/dashboard",
        icon: "HomeIcon",
        isActive: false,
      },
      {
        label: "Input groups",
        url: "/another",
        icon: "AcademicCapIcon",
        isActive: false,
      },
    ],
  },
];

let actionBarItems = [
  {
    label: "New Staff",
    icon: "PlusIcon",
  },
  {
    label: "Experiment",
    icon: "BeakerIcon",
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
</script>
