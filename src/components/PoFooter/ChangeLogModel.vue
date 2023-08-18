<template>
	<a
		v-if="showBtn"
		href="#"
		@click.prevent="showChangeLogModal = true"
		class="hover:po-text-mpao-lightblue po-mr-4 po-mb-2"
		>Change logs</a
	>
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
						>We're always working to improve our app, and we're excited to share
						the latest changes with you. We hope you enjoy these new features
						and improvements</span
					>
				</div>

				<div class="po-flex po-space-x-2">
					<span
						v-for="(logType, index) in changelog"
						class="po-flex po-items-center po-space-x-1 po-px-4 po-py-3 po-rounded-t-xl po-cursor-pointer po-border-b"
						@click="currentChangeLogTab = index"
						:class="[
							{ 'po-border-mpao-lightblue': currentChangeLogTab === index },
							{ 'po-border-white': currentChangeLogTab !== index },
						]"
					>
						<span class="po-text-sm po-font-semibold po-slate-800"
							>{{ logType.label }} Version</span
						>
						<span
							class="po-text-sm po-font-semibold po-pl-1 po-text-mpao-lightblue"
							>{{ logType.latest_version }}</span
						>
					</span>
				</div>

				<div
					class="-po-mb-5 -po-mx-5 po-p-5 po-pb-10 po-border-t po-border-slate-300 po-bg-slate-50"
				>
					<div v-for="(logType, index) in changelog">
						<!-- <h3 class="po-grow po-text-md po-font-bold po-text-slate-600">
								{{ logType.label }} Releases
							</h3> -->
						<div v-if="currentChangeLogTab === index">
							<div class="po-space-y-2">
								<div class="po-pb-4" v-for="item in logType.version_history">
									<span class="po-flex po-items-center po-space-x-2">
										<span class="po-shrink-0">
											<BoltIcon class="po-w-5 po-fill-sky-500" />
										</span>
										<span
											class="po-shrink-0 po-text-xs po-flex po-items-center po-space-x-1 po-text-slate-600"
										>
											<span class="po-shrink-0">Updated on</span>
											<CalendarDaysIcon class="po-w-4 po-fill-current" />
											<span class="po-font-medium">{{ item.date }}.</span>
											<span class="po-shrink-0">Version</span>
										</span>
										<span
											class="po-font-semibold po-shrink-0 po-text-xs po-px-1 po-rounded-xl po-bg-white"
											>{{ item.version }}</span
										>
									</span>
									<div
										class="po-mt-2 po-ml-2 po-prose-sm po-prose-slate prose-p:po-text-slate-600 prose-ul:po-text-slate-600 prose-ul:po-list-disc prose-p:po-mb-2 prose-ul:po-mt-1 prose-p:po-mt-2 po-rounded-xl po-p-3 po-bg-white"
										v-html="item.note"
									></div>
								</div>
								<span
									class="po-bg-white po-border po-border-slate-200 po-rounded-md po-px-4 po-py-3 po-block po-text-sm po-text-center po-text-mpao-lightblue hover:po-text-purple-600 po-cursor-pointer"
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
</template>

<script setup lang="ts">
import { ref } from "vue";
import PoModal from "../PoModal/PoModal.vue";
import type { LogType } from "../../../types/LogType";
import { BoltIcon, CalendarDaysIcon } from "@heroicons/vue/20/solid";

interface Props {
	changelog?: LogType[] | null;
	showBtn?: boolean;
}

withDefaults(defineProps<Props>(), {
	/**
	 * Chnagelog
	 */
	changelog: null,
	showBtn: false,
});

const showChangeLogModal = ref(false);

const currentChangeLogTab = ref(0);
</script>
