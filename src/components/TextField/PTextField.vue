<template>
  <div>
    <label
      :for="id"
      class="block text-sm font-medium leading-5 text-gray-700"
      >{{ label }}</label
    >
    <div class="mt-1 relative rounded-md shadow-sm">
      <input
        :id="id"
        :class="[defaultClass, errorMessage != null ? errorClass : activeClass]"
        :name="id"
        :type="type ? type : 'text'"
        :value="modelValue"
        v-bind="$attrs"
        @input="handleInput"
      />
      <div
        v-if="errorMessage != null"
        class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
      >
        <svg
          class="h-5 w-5 text-red-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
    <p v-if="errorMessage != null" class="mt-2 text-sm text-red-600">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script>
export default {
  name: "PTextField",
  components: {},
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number],
      default: "",
    },
    label: {
      type: String,
      default: "",
      required: false,
    },
    type: {
      type: String,
      default: "text",
      required: false,
    },
    id: {
      type: String,
      default: "",
      required: false,
    },
    errorMessage: {
      type: String,
      default: null,
      required: false,
    },
    rules: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      defaultClass:
        "appearance-none block w-full px-3 py-2 border rounded-md placeholder-gray-400 focus:outline-none  transition duration-150 ease-in-out sm:text-sm sm:leading-5",
      activeClass:
        " border-gray-300 focus:shadow-outline-blue focus:border-blue-300",
      errorClass:
        "text-red-900 border-red-300 focus:shadow-outline-red focus:border-red-300",
    };
  },
  computed: {},
  methods: {
    handleInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style></style>
