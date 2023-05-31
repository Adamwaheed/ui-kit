<template>
	<component
		:is="logo"
		@click.prevent="showCertModal = true"
		class="po-cursor-pointer"
		role="button"
	/>
	<PoModal
		:show="showCertModal"
		@modal-closed="showCertModal = false"
		:modal-title="title"
		modal-width="sm:po-max-w-4xl"
		id="change-log-modal"
	>
		<template v-slot:content>
			<div class="-po-m-5">
				<img :src="src" :alt="title" />
			</div>
		</template>
	</PoModal>
</template>

<script setup>
import { ref } from "vue";
import PoModal from "../PoModal/PoModal.vue";

defineProps({
	src: {
		type: String,
		default: "",
	},
	title: {
		type: String,
		default: "",
	},
	logo: null,
});

const showCertModal = ref(false);
</script>
