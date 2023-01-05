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
      Searching {{searchQuery}}
    </main>
  </div>
</template>

<script setup>

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import {
  PoTopBar,
  PoSidebarDrawer,
} from "./components";
import { ref } from "vue";

let searchQuery = ref("");

let allApps = [
  {
    groupName: '',
    apps: [
      {
        name: 'First',
        url: 'https://firstapp.example.com',
        icon: 'https://doodleipsum.com/50x50/abstract?bg=3D27F6&i=cb0515299c600124805d923f3619c1ad'
      },
      {
        name: 'Cool',
        url: 'https://coolapp.example.com',
        icon: 'https://doodleipsum.com/50x50/abstract?bg=EB765D&i=e2dedc7bc9f1a630e177355aa7b1a6c9'
      },
      {
        name: 'Coolest',
        url: 'https://coolapp.example.com',
        icon: 'https://doodleipsum.com/50x50/abstract?bg=7463D9&i=d298131eb7322b7002e6fd50e9dd8c41'
      },
      {
        name: 'Another',
        url: 'https://coolapp.example.com',
        icon: 'https://doodleipsum.com/50x50/abstract?bg=FF3C3C&i=5ef96019d86f8e5221c37d9733cb5492'
      }
    ]
  }
];

let notifications = [
  {
    name: 'You are no subscribed',
    time: 'now',
    text: 'You have subscribed to DMS notifications for Ali Doe',
    status: 1
  },
  {
    name: 'Contribution added',
    time: '5 mins ago',
    text: 'Your contribution for the month of January was added sucessfully',
    status: 0
  }
];

let profileSwitcherData = {
    currProfileLabel: 'HA',
    profiles: [
      {
        name: 'Self',
        identifier: '',
        url: '#self',
        current: true,
        isPersonal: true
      },
      {
        name: 'Penshion Office',
        identifier: '202301052023',
        url: '#business',
        current: false,
        isPersonal: false
      },
      {
        name: 'ABC Enterprises Pvt Ltd',
        identifier: '202301052026',
        url: '#business',
        current: false,
        isPersonal: false
      }
    ],
    currentProfileUrl: '#currprofile',
  };

let sidebarContent = [
  {
    groupName: 'Main',
    items: [
      {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'HomeIcon',
        isActive: true
      },
      {
        name: 'Another',
        url: '/another',
        icon: 'AcademicCapIcon',
        isActive: false
      }
    ]
  },
  {
    groupName: 'Form',
    items: [
      {
        name: 'Inputs',
        url: '/dashboard',
        icon: 'HomeIcon',
        isActive: false
      },
      {
        name: 'Input groups',
        url: '/another',
        icon: 'AcademicCapIcon',
        isActive: false
      }
    ]
  }
];

function NewSearch(query) {
  searchQuery.value = query
}
</script>