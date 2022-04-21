<template>
  <div class="flex flex-col">
    <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div
        class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200 bg-white"
      >
        <div v-if="loading" class="bg-blue-500 animate-pulse w-full h-1"></div>
        <table class="min-w-full">
          <thead>
            <slot name="header" :header="header">
              <tr>
                <th
                  v-for="(head, index) in header"
                  :key="'header-' + index"
                  class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                >
                  {{ head.text }}
                </th>
              </tr>
            </slot>
          </thead>

          <tbody>
            <tr v-for="(item, index) in items" :key="index">
              <slot name="body" :item="item"></slot>
            </tr>
          </tbody>
        </table>

        <div v-if="items == null || items.length == 0" class="w-full">
          <p class="text-center py-2 text-gray-500 text-sm">No result !</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PTable",
  props: {
    header: {
      type: Array,
      default: null,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      default: null,
    },
  },
};
</script>

<style></style>
