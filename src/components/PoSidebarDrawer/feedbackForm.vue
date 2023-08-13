<template>
	<button
		@click.prevent="() => (showFeedbackModal = true)"
		class="po-flex po-items-center po-w-full po-group po-space-x-4 po-px-2 po-py-3 po-transition-colors po-duration-100 po-ease-in-out po-rounded-lg po-outline-none po-ring-0 po-text-slate-600 hover:po-text-mpao-lightblue hover:po-bg-slate-100"
		title="Go to feedback"
	>
		<span class="po-w-5 po-h-5">
			<ChatBubbleBottomCenterIcon
				class="po-stroke-current group-hover:po-stroke-mpao-orange po-w-5 po-h-5 po-stroke-2"
			/>
		</span>
		<span
			class="po-text-sm po-leading-none po-font-medium po-shrink-0 po-text-left po-transition-opacity po-duration-150 po-ease-out"
			:class="[
				{ 'po-opacity-1': sidebarOpen },
				{ 'po-opacity-0': !sidebarOpen },
				{ 'po-hidden': hideSidebarItemLabel },
			]"
			>Feedback</span
		>
	</button>
	<PoModal
		:show="showFeedbackModal"
		@modal-closed="() => (showFeedbackModal = false)"
		modal-title="Feedback"
	>
		<template v-slot:content>
			<form action="">
				<PoSelectField
					label="Type"
					:list="typeList"
					v-model="formObject.type"
				/>

				<br />
				<PoTextarea
					cols="6"
					rows="6"
					label="Description"
					v-model="formObject.message"
				/>
			</form>
		</template>
		<template v-slot:footer>
			<div class="po-p-5">
				<PoButton label="Send" type="button" />
			</div>
		</template>
	</PoModal>
</template>
<script setup lang="ts">
import { ref } from "vue";
import PoButton from "../PoButton/PoButton.vue";
import PoSelectField from "../PoSelectField/PoSelectField.vue";
import PoModal from "../PoModal/PoModal.vue";
import PoTextarea from "../PoTextarea/PoTextarea.vue";
import { ChatBubbleBottomCenterIcon } from "@heroicons/vue/24/outline";

interface Props {
	sidebarOpen?: boolean;
	hideSidebarItemLabel?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	/**
	 * Sidebar State
	 */
	sidebarOpen: true,
	/**
	 * hideSidebarItemLabel State
	 */
	hideSidebarItemLabel: false,
});

const showFeedbackModal = ref(false);

const typeList = [
	{
		id: 1,
		name: "Suggestion",
	},
	{
		id: 2,
		name: "Feature request",
	},
	{
		id: 2,
		name: "Other",
	},
];
const formObject = ref({
	type: 1,
	message: "",
});
</script>
