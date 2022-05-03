import { defineComponent } from "vue";
export let TestForm = defineComponent({
  name: "PFormComponent",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    setup(props, ctx) {
      return () =>
        ctx.slots.default({
          error: "error",
        });
    },
  },
});
