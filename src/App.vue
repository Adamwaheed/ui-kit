<script setup>
import { reactive, ref } from "vue";

import { CheckIcon } from "@heroicons/vue/solid";

// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import {
  PButton,
  PTable,
  PTextField,
  PComboBox,
  PRadioGroup,
  PForm,
  PNavBar,
  PSideBar,
} from "./components";

import useForm from "./components/Form/UseForm";

const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
];

let count = ref(0);
let testing = ref(3);
let showsidebar = ref(false);
let state = reactive({
  isMini: true,
});

let forms = useForm({
  name: "Mohamed Niyaaz",
  text: "Testing",
});

let url = ref("https://reqbin.com/echo/post/json");
function formSubmit() {
  forms.submit();
}
</script>

<template>
  <div class="max-w-5xl mx-auto">
    <img alt="Vue logo" src="./assets/logo.png" />
    <p>Mohamed Niyaaz</p>
    {{ testing }}
    <PButton
      @click="count++"
      class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
      >My Button</PButton
    >
    <p-button @click="forms.submit">submit</p-button>
    <p-button class="pl-2">clear</p-button>
    <PTable></PTable>
    {{ count }}
    <PNavBar @toggle="showsidebar = true" />
    <PSideBar
      :sidebar="showsidebar"
      @close="showsidebar = false"
      :is-mini="state.isMini"
    />
    <PComboBox :items="people" v-model="testing"></PComboBox>
    <PComboBox :items="people" v-model="testing">
      <template v-slot:selected="slotProps">
        {{ slotProps.data.name }}
      </template>
      <template v-slot:option="slotProps">
        <li
          :class="[
            slotProps.active ? 'text-blue-900 bg-blue-100' : 'text-gray-900',
            'cursor-default select-none relative py-2 pl-10 pr-4',
          ]"
        >
          <span
            :class="[
              slotProps.selected ? 'font-medium' : 'font-normal',
              'block truncate',
            ]"
            >{{ slotProps.item.name }}</span
          >
          <span
            v-if="slotProps.selected"
            class="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600"
          >
            <CheckIcon class="w-5 h-5" aria-hidden="true" />
          </span>
        </li>
      </template>
    </PComboBox>
    <!-- <div class="py-12">
      <PTextField v-model="count" label="Mohamed Niyaaz" />
    </div> -->
    <div>
      <input
        type="checkbox"
        v-model="state.isMini"
        class="absolute right-0 top-0"
      />
    </div>

    <PForm v-slot="{ error, save }" :url="url" :initial="{ time: 'ok' }">
      <button @click="save">sdfdsfsdf</button>
      sdfd sdfsdfs {{ error }}
    </PForm>
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
