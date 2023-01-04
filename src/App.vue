<template>
  <div class="min-h-full pt-16">
    <PoTopBar @query="NewSearch" />
  </div>
  Searching {{searchQuery}}
</template>

<script setup>

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import {
  PoTopBar,
} from "./components";
import { ref } from "vue";

let searchQuery = ref("");

function NewSearch(query) {
  searchQuery.value = query
}
</script>