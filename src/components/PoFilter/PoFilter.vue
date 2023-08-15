<template>
	<div
		class="po-grid po-grid-cols-1 md:po-grid-cols-3 lg:po-grid-cols-4 po-gap-3"
	>
		<slot></slot>
		<div class="po-flex po-items-end">
			<PoButton label="Filter" @button-click="handleButtonClick" />
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: "PoFooter",
};
</script>
<script setup lang="ts">
import { ref, watch } from "vue";
import { PoButton } from "..";

interface Props {
	filters: {} | null;
}

const props = withDefaults(defineProps<Props>(), {
	/**
	 * Chnagelog
	 */
	filters: null,
});

const slotProps = ref(props.filters);

function handleButtonClick() {
	const queryParams = new URLSearchParams();

	// Loop through the properties of slotProps.value and add them to the URLSearchParams
	for (const key in slotProps.value) {
		queryParams.append(key, slotProps.value[key]);
	}

	// Get the current URL and append the query parameters
	const currentURL = window.location.href;
	const newURL = `${currentURL}?${queryParams.toString()}`;

	// Update the URL in the browser without triggering a page reload
	history.pushState({}, "", newURL);
}
</script>
