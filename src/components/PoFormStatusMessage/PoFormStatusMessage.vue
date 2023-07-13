<template>
	<div
		v-if="isError"
		class="po-flex po-space-x-3 po-p-3 po-bg-red-50 po-rounded-md"
		:class="[
			{ 'po-items-start': null !== errorList },
			{ 'po-items-center': null === errorList },
		]"
	>
		<ExclamationTriangleIcon class="po-shrink-0 po-w-6 po-stroke-red-600" />
		<div>
			<span class="po-text-sm po-text-red-700">{{ message }}</span>
			<ul
				v-if="null !== errorList"
				class="po-text-sm po-text-red-800 po-list-disc po-ml-5 po-mt-2"
			>
				<li v-for="error in errorList">{{ error }}</li>
			</ul>
		</div>
	</div>
	<div
		v-else
		class="po-flex po-items-start po-space-x-3 po-p-5 po-bg-green-50 po-rounded-md po-mt-5"
	>
		<CheckCircleIcon class="po-w-6 po-stroke-green-600" />
		<div>
			<span class="po-text-sm po-text-green-700">{{ message }}</span>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: "PoFormStatusMessage",
};
</script>

<script setup lang="ts">
import {
	ExclamationTriangleIcon,
	CheckCircleIcon,
} from "@heroicons/vue/24/outline";

const props = defineProps({
	/**
	 * If it's an error message, by default it's a success message
	 */
	isError: {
		type: Boolean,
		default: false,
	},
	/**
	 * The message to display
	 */
	message: {
		type: String,
		default: "This is a form status",
	},
	/**
	 * A list of errors
	 */
	errorList: {
		type: Array,
		default: null,
	},
});
</script>
