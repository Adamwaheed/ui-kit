<template>
	<nav
		class="po-flex po-relative po-bg-slate-200 po-rounded-t-xl po-justify-center lg:po-justify-start po-px-4 po-pt-4 xl:po-pt-3 po-flex-wrap po-overflow-hidden"
		aria-label="Tabs"
	>
		<template v-for="tab in tabs" :key="tab.name">
			<span
				v-if="tab.name"
				role="button"
				@click="$emit('button-click', tab)"
				class="po-relative po-px-4 po-py-3 po-font-medium po-mr-2 po-mb-4 xl:po-mb-0 po-text-sm po-cursor-pointer hover:po-z-[2] po-rounded-xl xl:po-rounded-b-none genie-effect hover:po-text-slate-600 hover:po-bg-white hover:po-shadow-md po-flex po-items-center po-flex-shrink-0 po-space-x-2"
				:class="[
					tab.current
						? 'po-bg-white po-text-slate-600 po-shadow-lg po-border po-border-b-0 po-border-sky-200 po-z-[1]'
						: 'po-text-slate-600 hover:po-text-mpao-blue bg-slate-50',
				]"
				:aria-current="tab.current ? 'page' : undefined"
			>
				<component
					v-if="tab.icon"
					:is="tab.icon"
					class="po-w-5 po-h-5"
					:class="[setIconColor(tab)]"
				/>
				<span
					>{{ tab.name
					}}<span
						v-if="tab.count && tab.count > 0"
						class="po-absolute po-py-1 po-z-[2] po-px-2 po-rounded-full po-text-xs -po-top-2 -po-right-4 po-shadow-md po-flex po-items-center po-justify-center"
						:class="[
							tab.current
								? 'po-bg-mpao-orange po-text-white'
								: 'po-bg-slate-400 po-text-white group-hover:po-bg-mpao-orange group-hover:po-text-white',
						]"
						><span>{{ tab.count }}</span></span
					></span
				>
			</span>
			<span v-else class="pr-2 pt-4 pb-2 po-hidden xl:po-block">
				<span
					class="po-block po-bg-slate-300 po-w-[2px] po-rounded-full po-h-full"
				></span>
			</span>
		</template>
		<div
			class="po-absolute po-bg-sky-200 po-h-[1px] po-bottom-0 po-left-0 po-right-0"
		></div>
	</nav>
</template>

<script lang="ts">
export default {
	name: "PoCardTabs",
};
</script>
<script setup lang="ts">
import type { Tab } from "../../../types/Types";

interface Props {
	tabs: Tab[] | null;
}

withDefaults(defineProps<Props>(), {
	/**
	 * Page title
	 */
	tabs: null,
});

const emit = defineEmits(["button-click"]);

function setIconColor(tabObj: Tab) {
	return tabObj.iconColor ? tabObj.iconColor : "po-fill-current";
}
</script>
