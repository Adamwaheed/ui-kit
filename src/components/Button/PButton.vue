<template>
  <span
    class="inline-flex rounded-md shadow-sm"
    :class="{ 'w-full block': block }"
  >
    <nuxt-link
      v-if="href != null"
      :to="href"
      :type="type"
      :target="target"
      :disabled="disabled"
      :aria-disabled="disabled"
      :class="
        override
          ? override
          : [{ 'w-full justify-center': block }, computedcolor, btnSize]
      "
      class="inline-flex items-center border border-transparent leading-4 font-medium rounded-md text-white transition ease-in-out duration-150"
      v-bind="$attrs"
    >
      <slot v-if="!loading"></slot>
      <loading v-else class="py-1"></loading>
    </nuxt-link>
    <button
      v-else
      :id="id"
      :type="type"
      :title="title"
      :disabled="disabled"
      :aria-disabled="disabled"
      :class="
        override
          ? override
          : [
              { 'w-full justify-center': block },
              computedcolor,
              btnSize,
              { 'cursor-not-allowed': disabled },
            ]
      "
      class="inline-flex items-center border border-transparent leading-4 font-medium rounded-md text-white transition ease-in-out duration-150"
      v-on="getListeners"
    >
      <slot v-if="!loading"></slot>
      <loading v-else class="py-1"></loading>
    </button>
  </span>
</template>

<script>
import Loading from "../../components/Loading/PLoading.vue";
export default {
  name: "PButton",
  components: {
    Loading,
  },

  props: {
    href: {
      type: String,
      default: null,
    },
    target: {
      type: String,
      default: "_self",
    },
    block: {
      type: Boolean,
      default: false,
    },
    tile: {
      type: Boolean,
      default: false,
    },
    outline: {
      type: Boolean,
      default: false,
    },
    opacity: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "blue",
    },
    size: {
      type: String,
      default: "md",
    },
    id: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: "button",
    },
    title: {
      type: String,
      default: "",
    },
    loading: {
      type: Boolean,
      default: false,
    },
    override: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      btncolor: "",
    };
  },

  computed: {
    computedcolor() {
      let colorClass =
        "bg-" +
        this.color +
        "-600 hover:bg-" +
        this.color +
        "-500 focus:outline-none focus:border-" +
        this.color +
        "-700 focus:shadow-outline-" +
        this.color +
        " active:bg-" +
        this.color +
        "-700";
      if (this.outline) {
        colorClass =
          "border-" +
          this.color +
          "-300 text-" +
          this.color +
          "-700 bg-white hover:text-" +
          this.color +
          "-500 active:text-" +
          this.color +
          "-800 active:bg-" +
          this.color +
          "-50";
      } else if (this.opacity) {
        colorClass =
          "hover:bg-" +
          this.color +
          "-50  text-" +
          this.color +
          "-700 bg-" +
          this.color +
          "-100 focus:border-" +
          this.color +
          "-300 focus:shadow-outline-" +
          this.color +
          " active:bg-" +
          this.color +
          "-200 ";
      } else if (this.disabled) {
        colorClass =
          "hover:bg-" +
          "gray" +
          "-50  text-" +
          "gray" +
          "-400 bg-" +
          "gray" +
          "-100 focus:border-" +
          "gray" +
          "-300 focus:shadow-outline-" +
          "gray" +
          " active:bg-" +
          "gray" +
          "-200 ";
      }

      return colorClass;
    },
    btnSize() {
      let sizeClass = "px-4 py-2 text-sm leading-5";
      if (this.size === "xs") {
        sizeClass = " px-2.5 py-1.5 text-xs leading-4";
      } else if (this.size === "sm") {
        sizeClass = "px-3 py-2 text-sm leading-4";
      } else if (this.size === "md") {
        sizeClass = "px-4 py-2 text-sm leading-5";
      } else if (this.size === "lg") {
        sizeClass = "px-4 py-2 text-base leading-6";
      } else if (this.size === "xl") {
        sizeClass = "px-6 py-3 text-base leading-6";
      }
      return sizeClass;
    },
  },
};
</script>

<style></style>
