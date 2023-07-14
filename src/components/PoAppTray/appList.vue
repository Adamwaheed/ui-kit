<template>
	<div v-for="collection in list">
		<span
			v-if="collection.groupName.length > 0"
			class="po-text-sm po-font-normal po-text-slate-400 po-select-none po-block po-text-left po-pt-5"
			>{{ collection.groupName }}</span
		>
		<ul class="po-grid po-grid-cols-3">
			<li
				v-for="app in collection.apps"
				class="po-bg-white hover:po-bg-slate-200 po-rounded-xl po-p-2 po-transition-colors po-duration-150 po-ease-in"
			>
				<a
					:href="app.url"
					:target="openInNewTab ? '_blank' : '_self'"
					class="po-flex po-flex-col po-group po-justify-center po-items-center"
				>
					<span
						class="po-flex po-w-14 po-h-14 po-items-center po-justify-center po-duration-100 po-ease-in-out po-overflow-hidden"
					>
						<span class="po-w-9" v-html="app.icon"></span>
					</span>
					<span
						class="po-text-slate-500 po-font-normal po-text-sm po-text-center"
						>{{ app.name }}</span
					>
				</a>
			</li>
		</ul>
	</div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
import type { AppCollection } from "./AppCollection";

interface Props {
	list: AppCollection[];
	openInNewTab: boolean;
}

withDefaults(defineProps<Props>(), {
	/**
	 * Array of grouped apps. When the group name field is left blank, it will appear as a single list when displayed.
	 */
	list: () => [],
	openInNewTab: false,
});
</script>
