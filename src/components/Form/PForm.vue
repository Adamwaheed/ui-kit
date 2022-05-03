<script>
import { reactive, defineEmits } from "vue";
import axios from "axios";

export default {
  props: {
    url: {
      type: String,
      default: null,
    },
    success: {
      type: Function,
      default() {},
    },
    initial: {
      type: Object,
      default() {},
    },
    error: {
      type: Function,
      default() {},
    },
    multipart: {
      default: false,
      type: Boolean,
    },
    method: {
      default: "post",
      type: String,
    },
  },
  emits: ["error", "submit"],
  //
  setup(props, ctx) {
    let state = reactive({
      formData: {},
      errors: {},
      loading: false,
    });
    function jsonToFormData(data) {
      const vm = this;
      const formData = new FormData();
      buildFormData(formData, data);
      return formData;
    }

    function resetForm() {
      this.formData = {};
    }

    //const emit = defineEmits(["error", "submit"]);

    function buildFormData(formData, data, parentKey) {
      if (
        data &&
        typeof data === "object" &&
        !(data instanceof Date) &&
        !(data instanceof File)
      ) {
        Object.keys(data).forEach((key) => {
          buildFormData(
            formData,
            data[key],
            parentKey ? `${parentKey}[${key}]` : key
          );
        });
      } else {
        const value = data == null ? "" : data;
        formData.append(parentKey, value);
      }
    }

    function sendRequest() {
      state.loading = true;

      let formData = { ...props.initial, ...state.formData };

      let config = {};
      if (props.multipart) {
        config = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };
        const data = { ...props.initial, ...state.formData };
        // formData = new FormData()

        // const entries = Object.entries(combile)
        // for (const [key, value] of entries) {

        //   formData.append(key, value)
        // }
        formData = jsonToFormData(data);
      }

      config.url = props.url;
      config.data = formData;
      config.method = props.method;

      axios(config)
        // .$post(vm.$attrs.url, formData, config)
        .then(function (response) {
          state.errors = {};
          state.loading = false;
          if (props.success != null) {
            props.success(response);
          }
          // if (
          //   response.data.error !== undefined &&
          //   response.data.error === true
          // ) {
          // }
        })
        .catch(function (error) {
          ctx.emit("error", error);
          state.loading = false;
          const formErrors = {};
          if (typeof error.response === "object") {
            for (const err in error.response.data.errors) {
              formErrors[err] = error.response.data.errors[err][0];
            }
            state.errors = formErrors;
          }

          if (state.error != null) {
            props.error(error.response);
          }
          // vm.showErrorMsg({
          //   title: 'validation',
          //   message: 'Validation Fail'
          // })
        });
      //
    }
    return () =>
      ctx.slots.default({
        formData: state.formData,
        formError: state.errors,
        save: sendRequest,
        loading: state.loading,
        reset: resetForm,
      });
  },
};
</script>
