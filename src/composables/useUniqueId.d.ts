import { Ref } from "vue";

// Define the types for the composable
declare interface UniqueIdComposable {
	uniqueId: Ref<string>;
	generateUniqueId: () => void;
}

// Export the composable's type
export const useUniqueId: () => UniqueIdComposable;
