import { Ref } from "vue";

declare function useDetectOutsideClick(
	component: Ref<Element | null>,
	callback: () => void
): { listener: EventListener };

export default useDetectOutsideClick;
