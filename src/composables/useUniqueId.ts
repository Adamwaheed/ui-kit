import { ref } from "vue";

// Composable function to generate unique IDs
export const useUniqueId = () => {
	const uniqueId = ref("");

	const generateUniqueId = () => {
		// since we will be using these unique IDs in the UI for giving unique ids to elements
		// on the page, mostly form inputs, this doen't have to be too complex.
		const randomNumber = Math.random().toString(36).slice(2, 11);
		const newUniqueId = `poid_${randomNumber}`;

		uniqueId.value = newUniqueId;
	};

	return {
		uniqueId,
		generateUniqueId,
	};
};
