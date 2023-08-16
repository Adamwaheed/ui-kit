import { ref } from "vue";

// Composable function to generate unique IDs
export const useUniqueId = () => {
	const uniqueId = ref("");

	const generateUniqueId = () => {
		const randomNumber = Math.floor(Math.random() * 100000);
		const newUniqueId = `pid_${randomNumber}`;

		uniqueId.value = newUniqueId;
	};

	return {
		uniqueId,
		generateUniqueId,
	};
};
