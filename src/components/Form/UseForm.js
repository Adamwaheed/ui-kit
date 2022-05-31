import { reactive } from "vue";
import axios from "axios";
import { DialogDescription } from "@headlessui/vue";

export default function useForm(...args) {
  const data = (typeof args[0] === "string" ? args[1] : args[0]) || {};
  let transform = (data) => data;
  let form = reactive({
    data,
    errors: {},
    hasErrors: false,
    prosessing: false,
    data() {
      return Object.keys(data).reduce((carry, key) => {
        carry[key] = this[key];
        return carry;
      }, {});
    },
    transform(callback) {
      transform = callback;

      return this;
    },
    submit() {
      alert("nniyaz");
      const data = transform(this.data());
      console.log(this.data());
      // axios({
      //   method: method,
      //   url: url,
      //   data: data,
      // });
    },
    setError(key, value) {
      Object.assign(this.errors, value ? { [key]: value } : key);
      this.hasErrors = Object.keys(this.errors).length > 0;
      return this;
    },
    clearErrors(...fields) {
      this.errors = Object.keys(this.errors).reduce(
        (carry, field) => ({
          ...carry,
          ...(fields.length > 0 && !fields.includes(field)
            ? { [field]: this.errors[field] }
            : {}),
        }),
        {}
      );

      this.hasErrors = Object.keys(this.errors).length > 0;

      return this;
    },
  });
  return form;
}
