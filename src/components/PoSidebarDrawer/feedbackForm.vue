<template>
	<button
		@click.prevent="() => (showFeedbackModal = true)"
		class="shell-sidebar--item"
		title="Go to feedback"
	>
		<span class="shell-sidebar--icon">
			<ChatBubbleBottomCenterIcon
				class="po-stroke-current po-w-5 po-h-5 po-stroke-2"
			/>
		</span>
		<span class="shell-sidebar--label po-font-medium">Feedback</span>
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
<script setup>
import { ref } from "vue";
import PoButton from "../PoButton/PoButton.vue";
import PoSelectField from "../PoSelectField/PoSelectField.vue";
import PoModal from "../PoModal/PoModal.vue";
import PoTextarea from "../PoTextarea/PoTextarea.vue";
import { ChatBubbleBottomCenterIcon } from "@heroicons/vue/24/outline";

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
