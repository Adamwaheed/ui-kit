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
// @ts-nocheck
import { InformationCircleIcon } from "@heroicons/vue/20/solid";
import { PaperClipIcon } from "@heroicons/vue/24/outline";
import { watch, ref, toRefs } from "vue";
import type { ChangeEvent } from "react";
import LoadingDots from "../PoLoading/LoadingDots.vue";

interface Props {
	payload?: object;
	url?: string;
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
	/**
	 * Model value
	 */
	payload: () => ({}),

	/**
	 * Model value
	 */
	url: "",
	/**
	 * Model value
	 */
	modelValue: "",
	/**
	 * Input label text
	 */
	label: "",
	/**
	 * Input display vertifal (default) or horizontal
	 */
	display: "vertical",
	/**
	 * Input id text
	 */
	id: "fileupload",
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
	 * True or False has error.. NO LONGER HAVE TO USE THIS. JUST PASS AN errorMessage.
	 */
	hasError: false,
	/**
	 * True or false if required
	 */
	required: false,
	/**
	 * True or false if disabled
	 */
	disabled: false,
	/**
	 * True or false if required
	 */
	borderColor: "border-slate-300 focus:border-mpao-lightblue",
	/**
	 * True or false if disabled
	 */
	inputLabel: "Choose File",
});

const { errorMessage } = toRefs(props);

const formHasError = ref(null !== errorMessage.value ? true : false);

watch(errorMessage, (newVal, oldVal) => {
	formHasError.value =
		null !== errorMessage.value && "" !== errorMessage.value ? true : false;
});

const chosenFiles = ref([]);
const fileButtonStatus = ref("initial");

const emit = defineEmits([
	"selected",
	"unSelected",
	"update:modelValue",
	"uploaded",
]);

/**
 * handleFileSelect Function
 *
 * This function is an event handler for a file input event, such as an 'onChange' event for a file input form.
 * It sets the file button status to 'uploading' and then uses the selected files to create a FormData object for file upload.
 * The function makes a POST request to a specified API endpoint with the FormData object.
 * It handles the response of the POST request by checking the status code.
 * If the response status is 201, it parses the response data as JSON and emits an 'uploaded' event with the response data, also setting the file button status to 'initial'.
 * If the response status is not 201, it sets 'fetchError' to the response status.
 *
 * @param {Object} event - The event object from the file input event.
 *
 * @returns {void}
 *
 * @example
 *
 * // Usage of the function in a file input form
 * <input type="file" onChange={handleFileSelect} />
 */
function handleFileSelect(event: ChangeEvent<HTMLInputElement>) {
	// Set the file button status to 'uploading'
	fileButtonStatus.value = "uploading";

	const token = useCookie("auth_token");

	// Make a POST request to the API endpoint with the FormData created from selected files
	fetch(`${getApiEndpoint()}`, {
		method: "POST",
		headers: {
			// Set the authorization header with the auth token from 'auth_token' cookie
			Authorization: `Bearer ${token.value}`,
		},
		body: createFormData(event),
	}).then(
		function (response: any) {
			// If the response status is not 201, set 'fetchError' to the response status
			if (response.status != 201) {
				this.fetchError = response.status;
			} else {
				// If the response status is 201, parse the response data as JSON
				response.json().then(function (data: any) {}.bind(this));
			}
			// Reset the file button status and emit an 'uploaded' event with the response data
			fileButtonStatus.value = "initial";
			emit("uploaded", response);
		}.bind(this)
	);
}

/**
 * createFormData Function
 *
 * This function creates a FormData object, appends selected files from an event and an additional payload from props.
 *
 * @param {Object} event - The event object from a file input event.
 * @param {Object} props - The props object that contains additional payload.
 *
 * @returns {FormData} Returns the prepared FormData object.
 *
 * @example
 *
 * // Usage of the function
 * const formData = createFormData(event, props);
 */
function createFormData(event) {
	// Initialize a new FormData object
	let formData = new FormData();

	// Append each selected file from the event to the FormData object
	for (const file of event.target.files) {
		formData.append("files", file);
	}

	//Append additional payload from props to the FormData object. The payload is stringified before appending.
	formData.append("payload", JSON.stringify(props.payload));

	// Return the prepared FormData object
	return formData;
}

/**
 * getApiEndpoint Function
 *
 * This function is used to retrieve the API endpoint URL.
 *
 * It first checks if a URL exists in the given properties. If the URL exists and it starts with 'http',
 * the function directly returns the URL as the API endpoint.
 *
 * If the URL does not start with 'http', it means it's a relative URL. In this case, the function appends
 * the relative URL to the base API URL. The base API URL is fetched from the runtime configuration's
 * 'public.api' property.
 *
 * @returns {string} - The URL of the API endpoint.
 *
 * @example
 *
 * // Usage of the function
 * const apiEndpoint = getApiEndpoint();
 */
function getApiEndpoint() {
	// Check if the URL exists in the props object using optional chaining
	const url = props?.url;

	// If the URL starts with 'http', return the URL directly
	if (url.includes("http")) {
		return props?.url;
	}
	// If the URL does not start with 'http', prepend it with the base API URL
	else {
		return `${useRuntimeConfig().public.api}/${url}`;
	}
}

function getBorderColor() {
	return props.hasError
		? "po-border-red-400 focus:po-border-red-600 focus:po-ring-red-600"
		: props.borderColor;
}
</script>
