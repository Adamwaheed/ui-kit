<template>
	<div
		class="po-grid po-grid-cols-1 md:po-grid-cols-3 lg:po-grid-cols-4 po-gap-3"
	>
		<slot></slot>
		<div class="po-flex po-items-end">
			<template v-if="!isFiltered">
				<PoButton
					:label="btnLabel"
					@button-click="handleButtonClick"
					:disabled="btnDisabled"
				/>
			</template>
			<template v-else>
				<PoButton label="Clear" @button-click="clearQueryParameters" />
			</template>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: "PoFilter",
};
</script>
<script setup lang="ts">
import { ref, watch } from "vue";
import { PoButton } from "..";

interface Props {
	filters: Record<string, any> | null;
	btnLabel?: string | undefined;
	addToUrl?: boolean | undefined;
	btnDisabled?: boolean | undefined;
	hasClear?: boolean | undefined;
}

const props = withDefaults(defineProps<Props>(), {
	/**
	 * Changelog
	 */
	filters: null,
	/**
	 * Filter Button label
	 */
	btnLabel: "Filter",
	/**
	 * turn off adding filters to url
	 */
	addToUrl: true,
	/**
	 * disabled filter button
	 */
	btnDisabled: false,
	/**
	 * enable clear button
	 */
	hasClear: false,
});

const slotProps = ref(props.filters);

const isFiltered = ref(false);

const emit = defineEmits(["button-click"]);

function handleButtonClick() {
	if (props.addToUrl) {
		const queryParams = new URLSearchParams(window.location.search);

		// Loop through the properties of slotProps.value and update them in the URLSearchParams
		for (const key in slotProps.value) {
			if (Object.prototype.hasOwnProperty.call(slotProps.value, key)) {
				const value = String(slotProps.value[key]);

				// Check if the value is not empty before adding it to query parameters
				if (value.trim() !== "") {
					queryParams.set(key, value);
				} else {
					// If the value is empty, remove it from the query parameters
					queryParams.delete(key);
				}
			}
		}

		// Get the current URL without query parameters
		const baseUrl = window.location.href.split("?")[0];

		// Create a new URL with the updated query parameters
		const newURL = `${baseUrl}?${queryParams.toString()}`;

		// Update the URL in the browser without triggering a page reload
		history.pushState({}, "", newURL);

		isFiltered.value = props.hasClear ? true : false;
	}

	emit("button-click", slotProps.value);
}

function clearQueryParameters() {
	// Get the current URL without query parameters
	const baseUrl = window.location.href.split("?")[0];

	// Update the URL in the browser to remove all query parameters
	history.pushState({}, "", baseUrl);

	isFiltered.value = false;
}
</script>
