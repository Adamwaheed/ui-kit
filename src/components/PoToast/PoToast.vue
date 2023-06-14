<template>
	<Teleport to="#po-notifications-alert">
		<transition
			enter-active-class="po-transform po-ease-out po-duration-300 po-transition"
			enter-from-class="po-translate-y-2 po-opacity-0 sm:po-translate-y-0 sm:po-translate-x-2"
			enter-to-class="po-translate-y-0 po-opacity-100 sm:po-translate-x-0"
			leave-active-class="po-transition po-ease-in po-duration-100"
			leave-from-class="po-opacity-100"
			leave-to-class="po-opacity-0"
		>
			<div
				v-if="isShowing"
				class="po-pointer-events-auto po-w-full po-overflow-hidden po-rounded-lg po-bg-gray-900 po-shadow-lg po-ring-1 po-ring-black po-ring-opacity-5"
				:class="[
					{ 'po-max-w-[260px]': 'sm' === size },
					{ 'po-max-w-[360px]': 'lg' === size },
					{ 'po-max-w-[560px]': 'xl' === size },
				]"
			>
				<div class="po-p-4">
					<div class="po-flex po-items-start po-space-x-3">
						<div
							v-if="'' !== actionType"
							class="po-inline-flex po-items-center po-justify-center po-flex-shrink-0 po-w-6 po-h-6 po-rounded-lg"
							:class="[
								{
									'po-bg-mpao-green po-text-green-100':
										'success' === actionType,
								},
								{ 'po-bg-mpao-red po-text-red-100': 'danger' === actionType },
								{
									'po-bg-mpao-orange po-text-orange-100': 'warn' === actionType,
								},
							]"
						>
							<CheckIcon
								v-if="'success' === actionType"
								class="po-w-4 po-h-4"
							/>
							<TrashIcon v-if="'danger' === actionType" class="po-w-4 po-h-4" />
							<ExclamationTriangleIcon
								v-if="'warn' === actionType"
								class="po-w-4 po-h-4"
							/>

							<span class="po-sr-only">Action icon</span>
						</div>
						<p
							class="po-w-0 po-flex-1 po-text-sm po-font-medium po-text-gray-400"
						>
							{{ displayMessage }}
						</p>
						<div class="po-ml-4 po-flex po-flex-shrink-0">
							<button
								type="button"
								@click="closeToast"
								class="po-inline-flex po-rounded-md po-bg-gray-900 po-text-gray-400 hover:po-text-gray-300 hover:po-bg-gray-700 po-transition-colors po-duration-150 po-ease-out focus:po-outline-none focus:po-ring-2 focus:po-ring-indigo-500 focus:po-ring-offset-2"
							>
								<span class="po-sr-only">Close</span>
								<XMarkIcon class="po-h-5 po-w-5" aria-hidden="true" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</transition>
	</Teleport>
</template>

<script>
export default {
	name: "PoToast",
};
</script>

<script setup>
import { ref, toRefs, watch, computed } from "vue";
import {
	XMarkIcon,
	TrashIcon,
	CheckIcon,
	ExclamationTriangleIcon,
} from "@heroicons/vue/20/solid";

const props = defineProps({
	/**
	 * Pass model Open/Close to the component
	 */
	show: {
		type: Boolean,
		default: false,
	},
	/**
	 * Toast action types. Default ''. Options 'success', 'danger', 'warn'
	 */
	actionType: {
		type: String,
		default: "",
	},
	/**
	 * Toast message. Default '', keeping it empty and setting an actionType will show default messages for the action type. Keep this short like Saved Successfully!
	 */
	message: {
		type: String,
		default: "",
	},
	/**
	 * Number of miliseconds to hide the toast in. By default it's 2000
	 */
	hideIn: {
		type: Number,
		default: 2000,
	},
	/**
	 * Toast size default: sm... other options: lg, xl
	 */
	size: {
		type: String,
		default: "sm",
	},
});

const { show } = toRefs(props);
const isShowing = ref(false);

watch(show, () => {
	isShowing.value = show.value;
});

const emit = defineEmits(["toast-closed"]);

function closeToast() {
	isShowing.value = false;
	emit("toast-closed", true);
}

setTimeout(() => {
	closeToast();
}, props.hideIn);

const displayMessage = computed(() => {
	if ("" === props.message && "" !== props.actionType) {
		if ("success" === props.actionType) {
			return "Saved Successfully!";
		} else if ("danger" === props.actionType) {
			return "Item deleted!";
		} else if ("warn" === props.actionType) {
			return "Attention needed!";
		} else {
			return "Wrong action";
		}
	} else {
		return props.message;
	}
});
</script>
