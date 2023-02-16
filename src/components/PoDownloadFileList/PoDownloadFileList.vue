<template>
  <div>
    <ul
      v-if="files && files.length > 0"
      role="list"
      class="
        po-divide-y
        po-divide-gray-200
        po-rounded-md
        po-border
        po-border-gray-200
        po-mt-5
      "
    >
      <li
        v-for="file in files"
        class="
          po-flex
          po-items-center
          po-justify-between
          po-py-3
          po-pl-3
          po-pr-4
          po-text-sm
        "
      >
        <div class="po-flex po-w-0 po-flex-1 po-items-center">
          <PaperClipIcon
            class="po-h-5 po-w-5 po-flex-shrink-0 po-text-gray-400"
            aria-hidden="true"
          />
          <span class="po-ml-2 po-w-0 po-flex-1 po-truncate">{{
            file.label
          }}</span>
        </div>
        <div class="po-ml-4 po-flex-shrink-0">
          <!--
                    Emits file label when clicked
                    @event button-click
                -->
          <a
            href="#"
            @click.prevent="$emit('button-click', file.label)"
            class="
              po-font-medium po-text-mpao-lightblue
              hover:po-text-indigo-500
            "
            >{{ linkLabel }}</a
          >
        </div>
      </li>
    </ul>
    <div v-else class="po-py-10">
      <span class="po-text-sm po-text-slate-500">{{ emptyLabel }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "PoDownloadFileList",
};
</script>
<script setup>
import { PaperClipIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  /**
   * List of files
   */
  files: {
    type: Object,
    default: null,
  },
  /**
   * Label of the download link, by default it is "Download"
   */
  linkLabel: {
    type: String,
    default: "Download",
  },
  /**
   * list of items
   */
  emptyLabel: {
    type: String,
    default: "No files to download.",
  },
});

const emit = defineEmits(["button-click"]);
</script>
