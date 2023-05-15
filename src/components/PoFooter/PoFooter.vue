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
					<div class="po-flex po-space-x-5">
						<div
							v-for="item in statsBlockItems"
							class="po-bg-white po-relative"
						>
							<div class="po-flex po-items-start po-space-x-2">
								<div>
									<span
										:class="[
											'po-inline-flex po-p-2 po-rounded-md',
											item.bgColor,
											item.iconColor,
										]"
									>
										<component :is="item.icon" class="po-w-4 po-h-4" />
									</span>
								</div>
								<div>
									<div class="po-flex po-items-start po-space-x-1">
										<span
											class="po-block po-text-base po-font-light po-text-slate-600"
											>{{ item.value }}</span
										>
									</div>
									<h4 class="po-text-xs po-tracking-wide po-text-slate-500">
										{{ item.label }}
									</h4>
								</div>
							</div>
						</div>
					</div>
					<div class="po-grid po-grid-cols-1 lg:po-grid-cols-2 po-mt-5">
						<div>
							<h3 class="po-grow po-text-md po-font-bold po-text-slate-600">
								UI Releases
							</h3>
							<PoTimeline :timeline="uiVersionHistory" />
						</div>
						<div>
							<h3 class="po-grow po-text-md po-font-bold po-text-slate-600">
								API Releases
							</h3>
							<PoTimeline :timeline="apiVersionHistory" />
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
import PoTimeline from "../PoTimeline/PoTimeline.vue";
import { CpuChipIcon, CursorArrowRaysIcon } from "@heroicons/vue/24/outline";

const emit = defineEmits(["button-click"]);

const showChangeLogModal = ref(false);

const statsBlockItems = [
	{
		label: "1.0.5 RELEASE",
		value: "UI Version",
		bgColor: "po-bg-orange-50",
		iconColor: "po-text-orange-700",
		icon: CursorArrowRaysIcon,
	},
	{
		label: "1.2.0",
		value: "API Version",
		bgColor: "po-bg-sky-50",
		iconColor: "po-text-sky-700",
		icon: CpuChipIcon,
	},
];

const uiVersionHistory = [
	{
		label: "1.1.0",
		date: "August 15, 2020",
		description:
			"Added new features, including a dark mode and a new search bar.",
	},
	{
		label: "1.0.2",
		date: "May 15, 2020",
		description: "Bug fixes and performance improvements.",
	},
	{
		label: "1.0.1",
		date: "Apr 17, 2020",
		description: "New feature to allow Payments online",
	},
	{
		label: "1.0.0",
		date: "Jan 10, 2020",
		description: "Public release.",
	},
];

const apiVersionHistory = [
	{
		label: "1.0.2",
		date: "December 15, 2022",
		description:
			"Improved the performance of the application by optimizing the code.",
	},
	{
		label: "1.0.1",
		date: "November 15, 2022",
		description:
			"Added a new feature to allow users to save their favorite pages.",
	},
	{
		label: "1.0.0",
		date: "October 15, 2022",
		description: "Initial release of the application.",
	},
];
</script>
