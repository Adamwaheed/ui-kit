<template>
    <div class="po-py-5 po-flex po-items-start po-space-x-5">
        <input type="checkbox"
            :name="`${id}-field`"
            :id="id"
            :checked="modelValue"
            :aria-describedby="`${id}-description`"
            v-bind="$attrs"
            @input="$emit('update:modelValue', $event.target.checked)"
            class="shrink-0 po-h-4 po-w-4 po-rounded border-slate-300 po-text-mpao-lightblue focus:po-ring-mpao-lightblue"
        >
        <div class="grow -mt-[0.26rem]">
            <label class="po-block po-select-none po-text-sm text-slate-600 po-cursor-pointer" :for="id">{{ label }}</label>
            <div class="po-mt-2 po-flex po-space-x-3">
                <!--
                    Emits the value of link
                    @event button-click
                -->
                <a
                    v-for="link in links"
                    :href="link.url"
                    @click.prevent="$emit('button-click', link.url)"
                    class="po-text-sm text-mpao-lightblue hover:text-mpao-blue"
                >{{ link.label }}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "PoConsent",
};
</script>

<script setup>

defineProps({
  /**
   * Model value
   */
  modelValue: {
    type: Boolean,
    default: false,
  },
  /**
   * Input label text
   */
  label: {
    type: String,
    default: "",
  },
  /**
   * Input id text
   */
  id: {
    type: String,
    default: "consent-checkbox",
  },
  links: {
    type: Array,
    default: null
  }
});
</script>