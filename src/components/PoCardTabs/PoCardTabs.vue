<template>
	<nav
		class="po-flex po-bg-slate-50 po-rounded-t-xl po-justify-center lg:po-justify-start po-px-4 po-pt-4 xl:po-pt-2 po-flex-wrap po-overflow-hidden"
		aria-label="Tabs"
	>
		<span
			role="button"
			v-for="tab in tabs"
			@click="$emit('button-click', tab)"
			:key="tab.name"
			:class="[
				tab.current
					? 'po-bg-white po-text-slate-600 po-shadow-lg'
					: 'po-text-slate-600 hover:po-text-mpao-blue',
				'po-px-4 po-py-3 po-font-medium po-mr-4 po-mb-4 xl:po-mb-0 po-text-sm po-cursor-pointer po-rounded-xl xl:po-rounded-b-none genie-effect hover:po-text-slate-600 hover:po-bg-white hover:po-shadow-md po-flex po-items-center po-flex-shrink-0 po-space-x-2',
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
				>{{ tab.name }}<span v-if="tab.count"> ({{ tab.count }})</span></span
			>
		</span>
	</nav>
</template>

<script lang="ts">
export default {
	name: "PoCardTabs",
};
</script>
<script setup lang="ts">
type HeroIcon = (
	props: JSX.IntrinsicAttributes & { [key: string]: any }
) => JSX.Element;

interface Tab {
	name: string;
	icon: HeroIcon;
	iconColor: string;
	href?: string;
	current?: boolean;
	count?: number;
}

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
