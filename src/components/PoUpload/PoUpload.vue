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
			:disabled="true"
			:for="`${id}-upload-field`"
			class="po-text-sm po-font-medium po-flex po-items-center po-space-x-1 po-text-slate-700 po-mb-1"
		>
			<span class="po-capitalize">{{ label }}</span>
			<span
				v-if="required"
				class="po-text-lg po-leading-[0] po-text-red-400 po-font-semibold"
				>&#42;</span
			>
			<abbr v-if="null !== info" :title="info" class="po-w-4 po-text-slate-500">
				<InformationCircleIcon class="po-fill-current" />
			</abbr>
		</label>
		<label
			:for="id"
			:class="[
				'po-border po-block po-p-2 po-text-sm po-text-slate-600 po-cursor-pointer po-w-full po-transition-colors po-duration-100 po-ease-in-out po-rounded-md po-bg-white focus:po-ring-0 sm:po-text-sm disabled:po-bg-slate-50 disabled:po-border-slate-300 disabled:focus:po-border-slate-300 disabled:hover:po-border-slate-300 disabled:po-cursor-default',
				getBorderColor(),
			]"
		>
			<span
				v-if="fileButtonStatus === 'initial'"
				class="po-flex po-items-center po-space-x-2"
			>
				<PaperClipIcon class="po-w-4 po-stroke-slate-500" />
				<span>{{ inputLabel }}</span>
			</span>
			<span
				v-if="fileButtonStatus === 'uploading'"
				class="po-flex po-items-center po-space-x-2"
			>
				<PaperClipIcon class="po-w-4 po-stroke-slate-500" />
				<div class="po-grow po-text-sm po-text-slate-600">
					<span>Uploading... </span>
					<span>({{ chosenFiles.length }})</span>
				</div>
				<div class="po-shrink-0 po-relative po-top-[3px]">
					<LoadingDots />
				</div>
			</span>
		</label>
		<input
			type="file"
			:name="`${id}-upload-field`"
			:id="id"
			:value="modelValue"
			:disabled="disabled"
			:required="required"
			:aria-describedby="`${id}-description`"
			:aria-required="required"
			:aria-disabled="disabled"
			v-bind="$attrs"
			@change="handleFileSelect"
			class="po-hidden"
			multiple
		/>
		<p
			class="po-mt-2 po-text-sm po-text-slate-500"
			:id="`${id}-description`"
			v-if="null !== message"
		>
			{{ message }}
		</p>
		<p
			class="po-mt-2 po-text-sm po-text-red-600 po-flex po-items-start po-space-x-1"
			:id="`${id}-error`"
			v-if="formHasError && null !== errorMessage"
		>
			<span>{{ errorMessage }}</span>
		</p>
	</div>
</template>
<script lang="ts">
export default {
	name: "PoUpload",
};
</script>
<script setup lang="ts">
import { toRefs, ref, watch } from "vue";
import LoadingDots from "../PoLoading/LoadingDots.vue";
import {
	PaperClipIcon,
	InformationCircleIcon,
} from "@heroicons/vue/24/outline";

interface Props {
	token: string;
	url: string;
	payload?: object;
	modelValue?: string | number;
	label?: string;
	display?: "vertical" | "horizontal";
	id?: string;
	info?: string | null;
	message?: string | null;
	errorMessage?: string | null;
	hasError?: boolean;
	required?: boolean;
	disabled?: boolean;
	placeholder?: string | undefined;
	borderColor?: string;
	inputLabel?: string;
}

const props = withDefaults(defineProps<Props>(), {
	payload: () => ({}),
	token: "",
	url: "",
	modelValue: "",
	label: "",
	display: "vertical",
	id: "fileupload",
	info: null,
	message: null,
	errorMessage: null,
	hasError: false,
	required: false,
	disabled: false,
	borderColor: "border-slate-300 focus:border-mpao-lightblue",
	inputLabel: "Choose File",
});

const { errorMessage } = toRefs(props);

const formHasError = ref(!!errorMessage.value);

watch(errorMessage, (newVal, oldVal) => {
	formHasError.value =
		!!errorMessage.value && errorMessage.value !== "" ? true : false;
});

const chosenFiles = ref([]);
const fileButtonStatus = ref("initial");

const emit = defineEmits([
	"selected",
	"unSelected",
	"update:modelValue",
	"uploaded",
]);

function handleFileSelect(event: Event): void {
	fileButtonStatus.value = "uploading";

	fetch(`${getApiEndpoint()}`, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${props?.token}`,
		},
		body: createFormData(event),
	}).then((response: any) => {
		if (response.status !== 201) {
			// this.fetchError = response.status;
		} else {
			response.json().then((data: any) => {
				// Handle the data
			});
		}
		fileButtonStatus.value = "initial";
		emit("uploaded", response);
	});
}

function createFormData(event: Event): FormData {
	let formData = new FormData();

	const inputElement = event.target as HTMLInputElement;

	if (inputElement?.files) {
		for (const file of inputElement?.files) {
			formData.append("files", file);
		}
		formData.append("payload", JSON.stringify(props.payload));
	}

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

function getBorderColor(): string {
	return props.hasError
		? "po-border-red-400 focus:po-border-red-600 focus:po-ring-red-600"
		: props.borderColor;
}
</script>
