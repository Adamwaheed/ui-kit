<template>
	<div
		class="po-relative"
		:class="[{ 'lg:po-grid lg:po-grid-cols-2': 'horizontal' === display }]"
	>
		<!-- 
              v-model update
              @event update:modelValue
           -->
		<label
			disabled
			:for="`${uniqueID}-wheel`"
			class="po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700 po-mb-1"
		>
			<span class="po-capitalize">{{ label }}</span>
			<span
				v-if="required"
				class="po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
				>&#42;</span
			>
			<FormInfo :info="info" />
		</label>

		<input
			type="file"
			:name="uniqueID"
			:id="uniqueID"
			:value="modelValue"
			:disabled="disabled"
			:required="required"
			:aria-describedby="uniqueID"
			:aria-required="required"
			:aria-disabled="disabled"
			v-bind="$attrs"
			ref="fileInput"
			class="po-hidden"
			@change="onFileChange"
		/>
		<div
			class="po-border po-border-dashed po-rounded-md po-p-3 po-flex po-items-center po-space-x-4 po-transition-colors po-duration-150 po-ease-out"
			:class="[
				{ 'po-border-slate-400/60': !isDragging },
				{ 'po-border-mpao-lightblue': isDragging },
			]"
			@dragover="onDragOver"
			@dragleave="onDragLeave"
			@drop="onDrop"
		>
			<span
				class="po-w-8 po-h-8 po-shrink-0 po-flex po-items-center po-justify-center po-rounded-md"
				:class="[
					{ 'po-bg-slate-100 po-text-slate-500': !isDragging },
					{ 'po-bg-blue-50 po-text-blue-500': isDragging },
				]"
			>
				<DocumentPlusIcon class="po-w-5 po-stroke-current" />
			</span>
			<span
				v-if="fileButtonStatus === 'initial'"
				class="po-text-sm po-grow po-text-slate-500 lg:po-min-h-[40px] po-flex po-items-center"
			>
				<span v-if="isDragging">{{ dragOverText }}</span>
				<span v-else>{{ dragAreaText }}</span></span
			>
			<label
				v-if="fileButtonStatus === 'initial'"
				:for="uniqueID"
				class="po-cursor-pointer po-transition-colors po-duration-150 po-ease-out po-shrink-0 po-text-sm po-text-mpao-lightblue po-font-meidum hover:po-text-purple-600 po-px-3 po-py-1"
				>Upload file</label
			>
			<span
				v-if="fileButtonStatus === 'uploading'"
				class="po-text-sm po-grow po-text-slate-500 lg:po-min-h-[40px] po-flex po-items-center"
			>
				<span>Uploading...</span>
			</span>
			<div
				v-if="fileButtonStatus === 'uploading'"
				class="po-shrink-0 po-relative po-top-[3px]"
			>
				<LoadingDots />
			</div>
		</div>
		<FormMessage :message="message" />
		<FormErrorMessage :error-message="errorMessage" />
	</div>
</template>
<script lang="ts">
export default {
	name: "PoUpload",
};
</script>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import LoadingDots from "../PoLoading/LoadingDots.vue";
import { DocumentPlusIcon } from "@heroicons/vue/24/outline";
import { useUniqueId } from "../../composables/useUniqueId";

import FormErrorMessage from "../PoInputField/FormErrorMessage.vue";
import FormMessage from "../PoInputField/FormMessage.vue";
import FormInfo from "../PoInputField/FormInfo.vue";

interface Props {
	token: string;
	url: string;
	payload?: object;
	modelValue?: string | number;
	label?: string;
	display?: "vertical" | "horizontal";
	id?: string;
	info?: string | undefined;
	message?: string | null;
	errorMessage?: string | null;
	hasError?: boolean;
	required?: boolean;
	disabled?: boolean;
	placeholder?: string | undefined;
	borderColor?: string;
	dragAreaText?: string;
	dragOverText?: string;
}

const props = withDefaults(defineProps<Props>(), {
	payload: () => ({}),
	token: "",
	url: "",
	modelValue: "",
	label: "",
	display: "vertical",
	id: "",
	info: "",
	message: null,
	errorMessage: null,
	hasError: false,
	required: false,
	disabled: false,
	borderColor: "border-slate-300 focus:border-mpao-lightblue",
	dragAreaText: "Drag and drop files to upload",
	dragOverText: "Drop files here to upload",
});

const fileButtonStatus = ref("initial");

const emit = defineEmits([
	"selected",
	"unSelected",
	"update:modelValue",
	"uploaded",
]);

const { uniqueId, generateUniqueId } = useUniqueId();
const uniqueID = ref<string>(props.id);
onMounted(() => {
	// if there is no id set, create a unique random id
	if ("" === props.id) {
		generateUniqueId();
		uniqueID.value = uniqueId.value;
	}
});

const isDragging = ref(false);

const onDragOver = (event: DragEvent) => {
	event.preventDefault();
	isDragging.value = true;
};

const onDragLeave = () => {
	isDragging.value = false;
};

const onDrop = (event: DragEvent) => {
	event.preventDefault();
	isDragging.value = false;
	const files = event.dataTransfer?.files;
	if (files && files.length > 0) {
		handleFileSelect(files);
	}
};

const onFileChange = (event: Event) => {
	const inputElement = event.target as HTMLInputElement;
	const files = inputElement.files;
	if (files && files.length > 0) {
		handleFileSelect(files);
	}
};

function handleFileSelect(files: FileList): void {
	fileButtonStatus.value = "uploading";

	fetch(`${getApiEndpoint()}`, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${props?.token}`,
		},
		body: createFormData(files),
	}).then((response: any) => {
		// if (response.status !== 201) {
		// 	// this.fetchError = response.status;
		// } else {
		// 	response.json().then((data: any) => {
		// 		// Handle the data
		// 	});
		// }
		fileButtonStatus.value = "initial";
		emit("uploaded", response);
	});
}

function createFormData(files: FileList): FormData {
	let formData = new FormData();

	for (const file of files) {
		formData.append("files", file);
	}
	formData.append("payload", JSON.stringify(props.payload));

	return formData;
}

function getApiEndpoint(): string {
	const url = props?.url;

	// if (url && url.includes("http")) {
	return props?.url;
	// } else {
	//   return `${useRuntimeConfig().public.api}/${url}`;
	// }
}
</script>
