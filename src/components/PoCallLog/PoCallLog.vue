<template>
	<ul class="po-mt-5 po-bg-slate-50 -po-mx-5 po-px-4 po-py-3 po-space-y-3">
		<!--
            Emits the list item object when clicked
            @event button-click
        -->
		<li
			v-for="(item, index) in list"
			@click="$emit('button-click', item)"
			class="
				po-bg-white
				po-rounded-lg
				po-p-3
				po-transition-shadow
				po-duration-100
				po-ease-out
				po-shadow
				hover:po-shadow-lg
				po-flex po-item-center po-border-l-4 po-relative
			"
			:class="item.highlightColor"
		>
			<span
				class="
					po-absolute
					po-bg-white
					po-top-4
					po-right-10
					po-z-10
					po-text-xs
					po-text-slate-600
					po-font-medium
				"
				>{{ item.topRightLabel }}</span
			>
			<span
				@click="setActiveIndex(index, item)"
				role="button"
				class="
					po-absolute
					po-top-3
					po-right-2
					po-z-10
					po-w-6
					po-h-6
					po-rounded-lg
					po-bg-white
					po-border
					po-border-slate-300
					genie-effect
					po-flex po-items-center po-justify-center
					hover:po-bg-slate-50
					po-cursor-pointer
				"
				><ChevronDownIcon
					v-if="activeLogIndex !== index"
					class="po-w-4 po-stroke-slate-400 po-stroke-2" /><ChevronUpIcon
					v-else
					class="po-w-4 po-stroke-slate-400 po-stroke-2"
			/></span>
			<div
				class="
					po-shrink-0
					po-pr-3
					po-flex
					po-items-center
					po-border-r
					po-border-dashed
					po-border-slate-300
				"
			>
				<ChatBubbleLeftIcon
					v-if="'chat' === item.type"
					class="po-w-5 po-h-5 po-stroke-slate-400 po-shrink-0"
				/>
				<EnvelopeIcon
					v-if="'email' === item.type"
					class="po-w-5 po-h-5 po-stroke-slate-400 po-shrink-0"
				/>
				<PhoneArrowDownLeftIcon
					v-if="'in' === item.type"
					class="po-w-5 po-h-5 po-stroke-slate-400 po-shrink-0"
				/>
				<PhoneArrowUpRightIcon
					v-if="'out' === item.type"
					class="po-w-5 po-h-5 po-stroke-slate-400 po-shrink-0"
				/>
				<svg
					v-if="'viber' === item.type"
					class="po-w-5 po-h-5 po-fill-slate-400 po-shrink-0"
					xmlns="http://www.w3.org/2000/svg"
					xml:space="preserve"
					viewBox="0 0 226.978 226.978"
				>
					<path
						d="M199.569 25.393C181.627 7.803 152.62-.72 113.339.048 73.731.827 47.255 7.779 30.018 21.927 13.352 35.605 5.59 55.62 5.59 84.915v29.898c0 34.584 18.532 72.605 53.951 78.358 4.089.669 7.941-2.111 8.605-6.201a7.5 7.5 0 0 0-6.201-8.605c-26.861-4.363-41.355-36-41.355-63.552V84.915c0-42.006 15.565-68.347 93.043-69.871 35.125-.696 60.477 6.395 75.433 21.059 11.655 11.429 17.321 27.395 17.321 48.812v29.898c0 45.274-20.321 65.243-72.441 71.123H96.988c-1.989 0-3.897.79-5.303 2.197l-26.041 26.041a7.5 7.5 0 0 0 10.606 10.607l23.845-23.845h34.27c.276 0 .553-.015.828-.046 29.828-3.313 50.254-11.076 64.279-24.432 14.747-14.044 21.916-34.208 21.916-61.646V84.915c0-25.299-7.341-45.325-21.819-59.522z"
					/>
					<path
						d="M118.17 48.988h.003c12.085 0 23.447 4.707 31.993 13.253 8.547 8.547 13.254 19.911 13.253 31.998a7.5 7.5 0 0 0 7.499 7.5h.001a7.5 7.5 0 0 0 7.5-7.499c.001-16.094-6.266-31.225-17.646-42.605-11.379-11.38-26.507-17.646-42.6-17.646h-.005a7.5 7.5 0 1 0 .002 14.999z"
					/>
					<path
						d="M118.168 75.362c10.408.002 18.877 8.47 18.878 18.877a7.5 7.5 0 0 0 7.501 7.499c4.143 0 7.5-3.359 7.499-7.501-.003-18.676-15.199-33.872-33.876-33.875h-.001a7.5 7.5 0 0 0-.001 15zM84.538 88.213a7.5 7.5 0 0 0 8.465 12.382c2.689-1.838 8.987-6.144 8.545-14.752-.28-5.152-4.927-12.508-8.776-17.772-5.63-7.702-10.482-12.341-14.391-13.779-3.65-1.359-7.467-1.388-11.353-.084-8.049 2.712-13.893 7.613-16.899 14.173-2.927 6.386-2.862 13.725.189 21.228 7.206 17.678 17.294 33.155 30.051 46.067 12.845 12.689 28.321 22.777 46.006 29.987 3.827 1.557 7.613 2.336 11.252 2.336 3.49 0 6.845-.716 9.971-2.149 6.56-3.007 11.46-8.85 14.175-16.909 1.3-3.877 1.271-7.692-.077-11.317-1.448-3.937-6.088-8.788-13.789-14.418-5.265-3.849-12.621-8.496-17.793-8.777-8.59-.432-12.892 5.855-14.73 8.544a7.5 7.5 0 0 0 12.381 8.469c.816-1.193 1.282-1.735 1.549-1.972 4.21 1.349 16.215 10.169 18.376 13.549.053.216.065.545-.135 1.144-.946 2.809-2.791 6.486-6.206 8.052-3.199 1.464-6.834.566-9.316-.443-15.847-6.461-29.682-15.466-41.058-26.703-11.301-11.439-20.306-25.274-26.763-41.115-1.012-2.488-1.911-6.125-.446-9.321 1.565-3.415 5.243-5.261 8.043-6.205.598-.2.927-.189 1.155-.134 3.381 2.165 12.196 14.163 13.546 18.374-.238.263-.779.73-1.972 1.545z"
					/>
				</svg>
			</div>
			<div class="po-grow po-space-y-2 po-pl-3 -po-mb-2">
				<h3 class="po-text-base po-text-slate-600 po-font-medium">
					{{ item.subject }}
				</h3>
				<transition
					enter-active-class="po-transition po-duration-100 po-ease-out"
					enter-from-class="po-transform po-scale-95 po-opacity-0"
					enter-to-class="po-transform po-scale-100 po-opacity-100"
					leave-active-class="po-transition po-duration-75 po-ease-out"
					leave-from-class="po-transform po-scale-100 po-opacity-100"
					leave-to-class="po-transform po-scale-95 po-opacity-0"
				>
					<div v-if="activeLogIndex === index" class="">
						<div
							v-if="null !== selectFieldList"
							class="po-border-b po-border-slate-200 po-pb-3"
						>
							<PoSelectField
								:label="selectFieldLabel"
								display="horizontal"
								:list="selectFieldList"
								v-model="item.selectFieldValue"
							/>
						</div>
						<PoDescriptionList :items="item.details" />
					</div>
				</transition>

				<div v-if="activeLogIndex !== index" class="po-flex po-flex-wrap">
					<p
						v-for="(it, key) in item.meta"
						class="po-text-xs po-space-x-2 po-mr-5 po-mb-2"
						:key="key"
					>
						<span class="po-font-medium po-text-slate-500 po-capitalize">{{
							it.label
						}}</span>
						<span
							class="po-text-slate-500 po-px-[0.2em] po-rounded-md"
							:class="it.color"
							>{{ it.description }}</span
						>
					</p>
				</div>
			</div>
		</li>
	</ul>
</template>

<script>
export default {
	name: "PoCallLog",
	components: { ChevronDownIcon, ChevronUpIcon },
};
</script>
<script setup>
import {
	PhoneArrowDownLeftIcon,
	PhoneArrowUpRightIcon,
	ChatBubbleLeftIcon,
	EnvelopeIcon,
	ChevronDownIcon,
	ChevronUpIcon,
} from "@heroicons/vue/24/outline";

import PoDescriptionList from "../PoDescriptionList/PoDescriptionList.vue";
import PoSelectField from "../PoSelectField/PoSelectField.vue";

import { ref } from "vue";

defineProps({
	/**
	 * List of items
	 */
	list: {
		type: Array,
		default: null,
	},
	selectFieldLabel: {
		type: String,
		default: "",
	},
	selectFieldList: {
		type: Array,
		default: null,
	},
});

const activeLogIndex = ref(null);

function setActiveIndex(index, item) {
	if (item.details) {
		activeLogIndex.value = activeLogIndex.value === index ? null : index;
	}
}

const selectFieldSelected = ref([]);
</script>
