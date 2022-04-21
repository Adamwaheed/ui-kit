<script setup>
import { ref } from "vue";

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { PButton, PTable, PTextField } from "./components";

let count = ref(0);
</script>

<template>
  <div class="max-w-5xl mx-auto">
    <img alt="Vue logo" src="./assets/logo.png" />
    <p>Mohamed Niyaaz</p>
    <PButton
      @click="count++"
      class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
      >My Button</PButton
    >
    <PTable></PTable>
    {{ count }}
    <div class="py-12">
      <PTextField v-model="count" label="Mohamed Niyaaz" />
    </div>
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
