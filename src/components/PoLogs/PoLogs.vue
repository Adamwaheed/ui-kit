<template>
	<div>
		<div
			v-if="items && items.length > 0"
			class="po-col-span-2 po-relative po-mt-5"
		>
			<span
				class="po-absolute po-top-0 po-left-1 po--ml-px po-h-[calc(100%-7px)] po-w-0.5 po-bg-gray-200"
				aria-hidden="true"
			></span>
			<div class="po-relative po-space-y-5">
				<div
					v-for="(item, index) in items"
					class="po-flex po-space-x-2 po-items-start"
				>
					<p
						:class="[
							'po-rounded-full po-w-2 po-h-2 border-1 po-border-white po-shrink-0',
							{ 'po-bg-orange-400': index !== items.length - 1 },
							,
							{ 'po-bg-slate-300': index == items.length - 1 },
						]"
					></p>
					<div class="log-item">
						<span
							>{{ item.label }} on {{ item.date }}
							{{ item.by && item.by !== "" ? "by" : "" }}
							<span v-if="item.by && item.by !== ''">{{ item.by }}</span></span
						>
						<blockquote
							v-if="item.description && item.description !== ''"
							class="po-text-slate-500 po-text-xs"
						>
							"{{ item.description }}"
						</blockquote>
					</div>
				</div>
			</div>
		</div>
		<div v-else class="po-text-center po-py-10">
			<span class="po-text-sm po-text-slate-500">{{ emptyLabel }}</span>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: "PoLogs",
};
</script>
<script setup lang="ts">
interface Item {
	label?: string;
	date?: string;
	by?: string;
	description?: string;
}

interface Props {
	items: Item[] | null;
	emptyLabel?: string;
}

withDefaults(defineProps<Props>(), {
	/**
	 * list of items
	 */
	items: null,
	/**
	 * list of items
	 */
	emptyLabel: "No logs to display.",
});
</script>
