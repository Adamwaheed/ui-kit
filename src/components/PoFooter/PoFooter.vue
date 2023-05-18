<template>
	<div>
		<section
			class="po-grid po-gap-5 po-grid-cols-1 lg:po-grid-cols-2 po-px-6 lg:po-px-8 po-mt-10 po-pb-10"
		>
			<div class="sm:po-flex po-items-start sm:po-space-x-5">
				<img
					class="po-h-10"
					src="https://pension.gov.mv/asset/image/enlgish_website_logo.svg"
					alt="Pension Office logo"
				/>
				<div class="po-mt-5 sm:po-mt-0">
					<p class="-po-mt-1 po-text-xs po-text-slate-500">
						8th Floor, Allied Building , Chaandhanee Magu, Malé, 20156, Maldives
					</p>
					<p class="po-mt-1 po-text-xs po-text-slate-500">
						&copy; {{ new Date().getFullYear() }} Pension Office, All Rights
						Reserved.
					</p>
					<p
						class="po-mt-1 po-text-xs po-text-slate-500 po-flex -po-mb-2 po-flex-wrap"
					>
						<a
							href="https://www.pension.gov.mv"
							target="_blank"
							class="po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
						>
							<GlobeAltIcon class="po-w-3 po-h-3 po-fill-current" />
							<span>www.pension.gov.mv</span>
						</a>
						<a
							href="mailto:info@pension.gov.mv"
							target="_blank"
							class="po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
						>
							<EnvelopeIcon class="po-w-3 po-h-3 po-fill-current" />
							<span>info@pension.gov.mv</span>
						</a>
						<a
							href="tel:1441"
							target="_blank"
							class="po-flex po-space-x-1 po-items-center hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
						>
							<PhoneIcon class="po-w-3 po-h-3 po-fill-current" />
							<span>1441</span>
						</a>
					</p>
				</div>
			</div>
			<div class="po-flex lg:po-items-end po-flex-col">
				<nav
					class="-po-mt-1 po-text-xs po-text-slate-500 po-flex -po-mb-2 po-flex-wrap"
				>
					<a
						v-if="changelog"
						href="#"
						@click.prevent="showChangeLogModal = true"
						class="hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
						>Change logs</a
					>
					<a href="" class="hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
						>Terms &amp; Conditions</a
					>
					<a href="" class="hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
						>Privacy Policy</a
					>
				</nav>
				<div class="po-flex po-space-x-2 po-mt-3 lg:po-justify-end">
					<img
						class="po-h-8"
						src="https://pension.gov.mv/asset/image/iso_logo.jpg"
						alt=""
					/>
					<img
						class="po-h-8"
						src="https://pension.gov.mv/asset/image/en-ccc-2020-issa.png"
						alt=""
					/>
				</div>
			</div>
		</section>

		<PoModal
			:show="showChangeLogModal"
			@modal-closed="showChangeLogModal = false"
			modal-title="Change Log"
			modal-width="sm:po-max-w-4xl"
			id="change-log-modal"
		>
			<template v-slot:content>
				<div>
					<div class="po-pb-5 po-max-w-xl">
						<span class="po-text-sm po-text-slate-600"
							>We're always working to improve our app, and we're excited to
							share the latest changes with you. We hope you enjoy these new
							features and improvements</span
						>
					</div>

					<div class="po-flex po-space-x-2">
						<span
							v-for="(logType, index) in changelog"
							class="po-flex po-items-center po-space-x-1 po-px-4 po-py-3 po-rounded-t-xl po-cursor-pointer"
							@click="currentChangeLogTab = index"
							:class="[
								{ 'po-bg-purple-500/10': currentChangeLogTab === index },
							]"
						>
							<span class="po-text-sm po-font-semibold po-slate-800"
								>{{ logType.label }} Version</span
							>
							<span
								class="po-text-xs po-text-white po-px-1 po-py-0 po-rounded-md po-bg-mpao-lightblue"
								>{{ logType.latest_version }}</span
							>
						</span>
					</div>

					<div
						class="po-bg-gradient-to-t po-from-mpao-orange/20 po-via-mpao-lightblue/20 po-to-purple-500/10 -po-mb-5 -po-mx-5 po-p-5 po-pb-10"
					>
						<div v-for="(logType, index) in changelog">
							<!-- <h3 class="po-grow po-text-md po-font-bold po-text-slate-600">
								{{ logType.label }} Releases
							</h3> -->
							<div v-if="currentChangeLogTab === index">
								<div class="po-space-y-2 po-mt-5">
									<div
										class="po-border po-border-slate-200 po-rounded-lg po-p-3 po-bg-white"
										v-for="item in logType.version_history"
									>
										<span class="po-flex po-items-center po-space-x-2">
											<span class="po-text-mpao-lightblue po-grow po-text-lg">{{
												item.date
											}}</span>
											<span
												class="po-font-semibold po-shrink-0 po-text-mpao-lightblue po-text-sm po-px-2 po-py-1 po-rounded-xl po-bg-mpao-lightblue/10"
												>{{ item.version }}</span
											>
										</span>
										<div
											class="po-mt-3 po-prose-sm po-prose-slate"
											v-html="item.note"
										></div>
									</div>
									<span
										class="po-bg-white po-rounded-md po-px-4 po-py-3 po-block po-text-sm po-text-center po-text-mpao-lightblue hover:po-text-purple-600 po-cursor-pointer"
										v-if="logType.hasMore"
										>More</span
									>
								</div>
							</div>
						</div>
					</div>
				</div>
			</template>
		</PoModal>
	</div>
</template>

<script>
export default {
	name: "PoFooter",
};
</script>
<script setup>
import { ref } from "vue";
import { GlobeAltIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/vue/24/solid";

import PoModal from "../PoModal/PoModal.vue";

defineProps({
	/**
	 * Chnagelog
	 */
	changelog: {
		type: Array,
		default: null,
	},
});

const emit = defineEmits(["button-click"]);

const showChangeLogModal = ref(false);

const currentChangeLogTab = ref(0);
</script>
