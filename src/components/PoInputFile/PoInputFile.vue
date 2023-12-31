<template>
	<div
		class="po-relative"
		:class="[{ 'lg:po-grid lg:po-grid-cols-2': 'horizontal' === display }]"
	>
		<!-- 
            v-model update
            @event update:modelValue
        -->
		<span
			class="po-text-sm po-font-medium po-text-slate-700 peer-focus:po-text-mpao-lightblue peer-invalid:po-text-red-500 peer-invalid:peer-focus:po-text-red-600 po-flex po-items-center po-space-x-1 po-capitalize"
			><span>{{ label }}</span>
			<span
				v-if="required"
				class="po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
				>&#42;</span
			></span
		>
		<input
			:name="`${uniqueID}-upload`"
			:id="uniqueID"
			:value="modelValue"
			type="file"
			@input="handleInput"
			@change="handleFileChange($event)"
			class="po-sr-only po-peer"
		/>
		<label
			:for="uniqueID"
			class="po-mt-1 po-block po-w-full po-border po-cursor-pointer po-rounded-md po-border-slate-300 po-bg-white peer-focus:po-border-mpao-lightblue invalid:po-border-red-400 invalid:focus:po-border-red-600 invalid:focus:po-ring-red-600 sm:po-text-sm po-p-2"
		>
			<div class="po-flex po-items-center po-space-x-1">
				<PaperClipIcon class="po-w-4 po-stroke-slate-500" />
				<span v-if="fileName" class="po-text-sm">{{ fileName }}</span>
				<span v-else class="po-text-sm">Choose file</span>
			</div>
		</label>

		<!-- <div
			v-if="null !== progressValue"
			class="po-mt-3 po-flex po-w-full po-h-1.5 po-bg-gray-100 po-rounded-full po-overflow-hidden"
		>
			<div
				class="po-flex po-flex-col po-justify-center po-overflow-hidden po-bg-mpao-lightblue"
				role="progressbar"
				:style="progressStyle"
				:aria-valuenow="progressValue"
				:aria-valuemin="0"
				:aria-valuemax="100"
			></div>
		</div> -->

		<FormMessage :message="message" />
		<FormErrorMessage :error-message="errorMessage" />
	</div>
</template>

<script lang="ts">
export default {
	name: "PoInputFile",
};
</script>
<script setup lang="ts">
import { PaperClipIcon } from "@heroicons/vue/24/outline";
import { computed, ref, onMounted } from "vue";

import FormErrorMessage from "../PoInputField/FormErrorMessage.vue";
import FormMessage from "../PoInputField/FormMessage.vue";
import { useUniqueId } from "../../composables/useUniqueId";

interface Props {
	modelValue?: string | number;
	label?: string;
	id?: string;
	info?: string | null;
	message?: string | null;
	errorMessage?: string | null;
	display?: "vertical" | "horizontal";
	required?: boolean;
	progress?: number | null;
}

const props = withDefaults(defineProps<Props>(), {
	/**
	 * Model value
	 */
	modelValue: "",
	/**
	 * Input label text
	 */
	label: "",
	/**
	 * Input id text
	 */
	id: "",
	/**
	 * A tool tip, helper information
	 */
	info: null,
	/**
	 * Tip, description, information for the input
	 */
	message: null,
	/**
	 * Error message
	 */
	errorMessage: null,
	/**
	 * Input display vertical (default) or horizontal
	 */
	display: "vertical",
	/**
	 * True or false if required
	 */
	required: false,
	/**
	 * File upload progress
	 */
	progress: null,
});

const progressStyle = computed(() => {
	return `width: ${props.progress}%`;
});
const progressValue = computed(() => {
	return props.progress;
});

const fileName = ref("");

const handleFileChange: (event: Event) => void = (event) => {
	const file = (event.target as HTMLInputElement)?.files?.[0];
	fileName.value = file ? file.name : "";
};

const emit = defineEmits(["update:modelValue"]);

const handleInput: (event: Event) => void = (event) => {
	let val = (event.target as HTMLInputElement).value;

	emit("update:modelValue", val);
};

const { uniqueId, generateUniqueId } = useUniqueId();
const uniqueID = ref<string>(props.id);
onMounted(() => {
	// if there is no id set, create a unique random id
	if ("" === props.id) {
		generateUniqueId();
		uniqueID.value = uniqueId.value;
	}
});
</script>
