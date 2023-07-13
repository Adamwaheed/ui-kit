<template>
	<div>
		<PoButton
			v-if="openBtnLabel.length > 0"
			:label="openBtnLabel"
			@click="isShowing = true"
		/>
		<teleport to="body">
			<TransitionRoot as="template" :show="isShowing">
				<Dialog as="div" class="po-relative po-z-50" @close="closeModal">
					<TransitionChild
						as="template"
						enter="po-ease-out po-duration-300"
						enter-from="po-opacity-0"
						enter-to="po-opacity-100"
						leave="po-ease-in po-duration-200"
						leave-from="po-opacity-100"
						leave-to="po-opacity-0"
					>
						<div
							class="po-fixed po-inset-0 po-bg-gradient-to-br po-from-mpao-orange po-via-mpao-lightblue po-to-mpao-blue po-opacity-60 po-transition-opacity"
						/>
					</TransitionChild>

					<div class="po-fixed po-z-10 po-inset-0">
						<div
							class="po-flex po-justify-center po-items-start po-min-h-screen sm:po-px-4 sm:po-pt-10 sm:po-pb-20 po-text-center sm:po-block po-max-h-screen po-overflow-y-hidden"
						>
							<!-- This element is to trick the browser into centering the modal contents. -->
							<span
								class="po-hidden sm:po-inline-block sm:po-align-middle sm:po-h-screen"
								aria-hidden="true"
								>&#8203;</span
							>
							<TransitionChild
								as="template"
								enter="po-ease-out po-duration-300"
								enter-from="po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
								enter-to="po-opacity-100 po-translate-y-0 sm:po-scale-100"
								leave="po-ease-in po-duration-200"
								leave-from="po-opacity-100 po-translate-y-0 sm:po-scale-100"
								leave-to="po-opacity-0 po-translate-y-4 sm:po-translate-y-0 sm:po-scale-95"
							>
								<DialogPanel
									class="po-relative po-inline-block po-align-bottom po-bg-white sm:po-rounded-xl po-text-left po-shadow-xl po-transform po-transition-all sm:po-align-top po-w-full"
									:class="modalWidth"
								>
									<div
										class="po-flex po-items-center po-bg-white po-rounded-t-xl po-p-5"
									>
										<h3
											class="po-grow po-text-md po-font-bold po-text-slate-600"
										>
											{{ modalTitle }}
										</h3>
										<div class="po-shrink-0">
											<span role="button" class="po-block" @click="closeModal"
												><XMarkIcon
													class="po-w-5 po-stroke-slate-500 hover:po-stroke-mpao-orange po-transition-colors po-duration-150 po-ease-in-out"
											/></span>
										</div>
									</div>
									<div
										class="po-h-[1px] po-w-full po-bg-gradient-to-l po-from-orange-200 po-via-blue-300 po-to-blue-200"
									></div>
									<!--  -->
									<div
										class="po-p-5 po-overflow-y-auto"
										:class="[
											{
												'po-max-h-[calc(100vh-220px)]': $slots.footer,
											},
											{
												'po-max-h-[calc(100vh-145px)]': !$slots.footer,
											},
											modalHeight,
										]"
									>
										<!-- 
                          Modal body content
                          @slot content
                       -->
										<slot name="content"></slot>
									</div>
									<div
										v-if="$slots.footer"
										class="po-bg-slate-50 po-rounded-b-xl"
									>
										<!-- 
                      Modal footer
                      @slot footer
                    -->
										<slot name="footer"></slot>
									</div>
								</DialogPanel>
							</TransitionChild>
						</div>
					</div>
				</Dialog>
			</TransitionRoot>
		</teleport>
	</div>
</template>

<script lang="ts">
export default {
	name: "PoModal",
};
</script>
<script setup lang="ts">
import { ref, toRefs, watch } from "vue";
import {
	Dialog,
	DialogPanel,
	TransitionChild,
	TransitionRoot,
} from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";

import { PoButton } from "../../components";

interface Props {
	openBtnLabel?: string;
	modalTitle?: string;
	show?: boolean;
	modalWidth?: string;
	modalHeight?: string;
}

const props = withDefaults(defineProps<Props>(), {
	/**
	 * Modal open button label
	 */
	openBtnLabel: "",
	/**
	 * Modal Title
	 */
	modalTitle: "Modal windows",
	/**
	 * Pass model Open/Close to the component
	 */
	show: false,
	/**
	 * Set a custom width to the modal windod
	 */
	modalWidth: "sm:po-max-w-xl",
	/**
	 * Set a fixed height for the modal. Default is auto. You should use tailwind classes here.
	 */
	modalHeight: "",
});

const { show } = toRefs(props);
const isShowing = ref(false);

watch(show, () => {
	isShowing.value = show.value;
});

const emit = defineEmits(["modal-closed"]);

function closeModal() {
	isShowing.value = false;
	emit("modal-closed", true);
}

const modalId = props.modalTitle.toLowerCase().replace(/\s+/g, "-");
const queryParams = new URLSearchParams(window.location.search);
isShowing.value =
	queryParams.get("modal") !== undefined &&
	queryParams.get("modal") === modalId;
</script>
