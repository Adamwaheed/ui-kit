<template>
	<div
		class="po-grid po-grid-cols-1 md:po-grid-cols-3 lg:po-grid-cols-4 po-gap-3"
	>
		<slot></slot>
		<div class="po-flex po-items-end">
			<PoButton :label="btnLabel" @button-click="handleButtonClick" />
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
});

const slotProps = ref(props.filters);

const emit = defineEmits(["button-click"]);

function handleButtonClick() {
	if (props.addToUrl) {
		const queryParams = new URLSearchParams();

		// Loop through the properties of slotProps.value and add them to the URLSearchParams
		for (const key in slotProps.value) {
			if (Object.prototype.hasOwnProperty.call(slotProps.value, key)) {
				queryParams.append(key, String(slotProps.value[key]));
			}
		}

		// Get the current URL and append the query parameters
		const currentURL = window.location.href;
		const newURL = `${currentURL}?${queryParams.toString()}`;

		// Update the URL in the browser without triggering a page reload
		history.pushState({}, "", newURL);
	}

	emit("button-click", slotProps.value);
}
</script>
